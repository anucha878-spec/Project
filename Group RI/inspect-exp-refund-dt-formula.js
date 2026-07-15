// ตรวจสูตรของ exp_refund_dt — verify ด้วยข้อมูลจริงหลาย policy
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) สำรวจทุก row ที่มี exp_refund_dt populated — ดูสูตร
  console.log('=== 1. ทุก row ที่มี exp_refund_dt > 0 (sample broad) ===');
  const r1 = await c.query(`
    SELECT policy_no, policy_year, doc_no, rd_type, rd_name,
           premium, premium_all, premium_all_g,
           exp_refund_g_percent,
           claim_reserve_percent, total_amt_percent,
           exp_refund, exp_refund_g, exp_refund_dt
    FROM tx_act_snap_exprefund
    WHERE exp_refund_dt IS NOT NULL AND exp_refund_dt <> 0
    ORDER BY policy_no, policy_year, doc_no, rd_type
    LIMIT 30`);
  r1.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.policy_year} ${r.doc_no} rd=${r.rd_type}: prem=${r.premium} g%=${r.exp_refund_g_percent} cr%=${r.claim_reserve_percent} total%=${r.total_amt_percent} | exp_refund_dt=${r.exp_refund_dt} exp_refund=${r.exp_refund} exp_refund_g=${r.exp_refund_g}`));

  // 2) สำหรับแต่ละ row คำนวณ ratio = exp_refund_dt / premium → ดูว่าเป็น constant หรือไม่
  console.log('\n=== 2. Ratio (exp_refund_dt / premium) ของแต่ละ policy ===');
  const r2 = await c.query(`
    SELECT policy_no, policy_year, rd_type,
           premium, exp_refund_dt,
           ROUND((exp_refund_dt / NULLIF(premium,0))::numeric, 6) AS ratio_dt_to_prem,
           exp_refund_g_percent, claim_reserve_percent
    FROM tx_act_snap_exprefund
    WHERE exp_refund_dt IS NOT NULL AND exp_refund_dt <> 0 AND premium > 0
    ORDER BY policy_no, policy_year, rd_type
    LIMIT 30`);
  r2.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.policy_year} rd=${r.rd_type} prem=${r.premium} dt=${r.exp_refund_dt} | ratio_dt/prem=${r.ratio_dt_to_prem} (g%=${r.exp_refund_g_percent}, cr%=${r.claim_reserve_percent})`));

  // 3) ดู staging row ที่ match กับ snap policy → หา percent_exp_refund + percent_expense
  console.log('\n=== 3. Cross-check กับ staging (percent_exp_refund, percent_expense) ===');
  const r3 = await c.query(`
    SELECT s.policy_no, s.policy_year, s.rd_type,
           s.premium AS snap_prem, s.exp_refund_dt AS snap_dt,
           st.percent_exp_refund, st.percent_expense,
           ROUND((s.premium * (st.percent_exp_refund::numeric/100) * (1 - st.percent_expense::numeric/100))::numeric, 4) AS computed_dt,
           ROUND((s.exp_refund_dt - s.premium * (st.percent_exp_refund::numeric/100) * (1 - st.percent_expense::numeric/100))::numeric, 4) AS diff
    FROM tx_act_snap_exprefund s
    LEFT JOIN tx_stg_act_exp_refund st ON st.policy_no = s.policy_no
    WHERE s.exp_refund_dt <> 0 AND s.premium > 0
    ORDER BY s.policy_no, s.policy_year, s.rd_type
    LIMIT 30`);
  r3.rows.forEach(r => {
    const match = Math.abs(Number(r.diff)) < 0.5;
    console.log(`  ${r.policy_no} py=${r.policy_year} rd=${r.rd_type}: prem=${r.snap_prem} dt=${r.snap_dt} | stg %=${r.percent_exp_refund} expense%=${r.percent_expense} → computed=${r.computed_dt}  diff=${r.diff} ${match ? '✅' : '❌'}`);
  });

  // 4) ลองสูตรอื่น: exp_refund_dt = premium × (g_percent% × ???) หรือ premium × (1 - total_amt_percent%)
  console.log('\n=== 4. ลองสูตรทางเลือก ===');
  const r4 = await c.query(`
    SELECT s.policy_no, s.policy_year, s.rd_type, s.premium, s.exp_refund_dt,
           s.exp_refund_g_percent, s.claim_reserve_percent, s.total_amt_percent,
           -- H1: premium × g_percent% × (1 - cr_percent%)
           ROUND((s.premium * (s.exp_refund_g_percent::numeric/100) * (1 - s.claim_reserve_percent::numeric/100))::numeric, 4) AS h1_pct_g_x_no_cr,
           -- H2: premium × total_amt_percent%
           ROUND((s.premium * (s.total_amt_percent::numeric/100))::numeric, 4) AS h2_prem_x_total_pct,
           -- H3: premium × g_percent% × total_amt_percent%
           ROUND((s.premium * (s.exp_refund_g_percent::numeric/100) * (s.total_amt_percent::numeric/100))::numeric, 4) AS h3_g_x_total
    FROM tx_act_snap_exprefund s
    WHERE s.exp_refund_dt <> 0 AND s.premium > 0
    ORDER BY s.policy_no, s.policy_year, s.rd_type
    LIMIT 15`);
  r4.rows.forEach(r => {
    console.log(`  ${r.policy_no} py=${r.policy_year} rd=${r.rd_type}:`);
    console.log(`    prem=${r.premium} dt=${r.exp_refund_dt} (g%=${r.exp_refund_g_percent} cr%=${r.claim_reserve_percent} total%=${r.total_amt_percent})`);
    console.log(`    H1 = prem × g% × (1-cr%) = ${r.h1_pct_g_x_no_cr}  [diff: ${(r.exp_refund_dt - r.h1_pct_g_x_no_cr).toFixed(4)}]`);
    console.log(`    H2 = prem × total_amt% = ${r.h2_prem_x_total_pct}  [diff: ${(r.exp_refund_dt - r.h2_prem_x_total_pct).toFixed(4)}]`);
    console.log(`    H3 = prem × g% × total% = ${r.h3_g_x_total}  [diff: ${(r.exp_refund_dt - r.h3_g_x_total).toFixed(4)}]`);
  });

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

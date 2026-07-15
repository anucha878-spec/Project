// ตรวจต้นทาง exp_refund_g_percent / total_amt_percent → มาจาก config table ไหน
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) ดู unique values ของ {exp_refund_g_percent, total_amt_percent} ในแต่ละ policy
  console.log('=== 1. คู่ค่า (g_percent, total_amt_percent) แยกตาม policy ===');
  const r1 = await c.query(`
    SELECT policy_no, MIN(policy_year) AS min_py, MAX(policy_year) AS max_py,
           exp_refund_g_percent, total_amt_percent, claim_reserve_percent,
           COUNT(*) AS rows
    FROM tx_act_snap_exprefund
    GROUP BY policy_no, exp_refund_g_percent, total_amt_percent, claim_reserve_percent
    ORDER BY policy_no LIMIT 30`);
  r1.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.min_py}..${r.max_py}: g%=${r.exp_refund_g_percent} total_amt%=${r.total_amt_percent} cr%=${r.claim_reserve_percent} (${r.rows} rows)`));

  // 2) ลองหา column ใน cf_rig_treaty_cond_dt ที่อาจ map กับ g_percent / total_amt_percent
  console.log('\n=== 2. Treaty config — cf_rig_treaty_cond_dt columns ===');
  try {
    const cols = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='cf_rig_treaty_cond_dt' ORDER BY ordinal_position`);
    cols.rows.forEach(r => console.log(`  ${r.column_name} (${r.data_type})`));
  } catch(e) { console.log('  err: '+e.message); }

  // 3) ดู sample treaty config row
  console.log('\n=== 3. cf_rig_treaty_cond_dt — sample rows (GIB) ===');
  try {
    const samp = await c.query(`SELECT * FROM cf_rig_treaty_cond_dt LIMIT 3`);
    samp.rows.forEach((row, i) => {
      console.log(`\n  --- row ${i+1} ---`);
      Object.entries(row).forEach(([k,v]) => console.log(`    ${k} = ${v}`));
    });
  } catch(e) { console.log('  err: '+e.message); }

  // 4) Cross-check: เทียบ snap.{g_percent, total_amt_percent} กับ stg.{percent_exp_refund, percent_expense}
  console.log('\n=== 4. Cross-check: snap.g_percent = stg.percent_exp_refund? และ snap.total_amt_percent = 100 - stg.percent_expense? ===');
  const r4 = await c.query(`
    SELECT DISTINCT
      s.policy_no, s.exp_refund_g_percent AS snap_g_pct, s.total_amt_percent AS snap_total_pct,
      st.percent_exp_refund AS stg_exp_pct, st.percent_expense AS stg_exp_pct_expense,
      (100 - st.percent_expense)::numeric AS stg_one_minus_exp_pct
    FROM tx_act_snap_exprefund s
    JOIN tx_stg_act_exp_refund st ON st.policy_no = s.policy_no
    ORDER BY s.policy_no`);
  r4.rows.forEach(r => {
    const match1 = Number(r.snap_g_pct) === Number(r.stg_exp_pct);
    const match2 = Number(r.snap_total_pct) === Number(r.stg_one_minus_exp_pct);
    console.log(`  ${r.policy_no}: snap.g%=${r.snap_g_pct} = stg.exp%=${r.stg_exp_pct}? ${match1?'✅':'❌'} | snap.total%=${r.snap_total_pct} = (100-stg.expense%=${r.stg_exp_pct_expense})=${r.stg_one_minus_exp_pct}? ${match2?'✅':'❌'}`);
  });

  // 5) Treaty-level ดูว่า GIB / DAI / THREL มีค่าต่างไหม
  console.log('\n=== 5. Treaty config — % ที่อาจเป็น default ของ exp_refund/expense ===');
  try {
    const tr = await c.query(`
      SELECT *
      FROM cf_rig_treaty_cond_dt
      WHERE (cf_rig_treaty_cond_dt::text ILIKE '%exp_refund%'
          OR cf_rig_treaty_cond_dt::text ILIKE '%expense%')
      LIMIT 5`);
    console.log(`  (${tr.rowCount} rows match)`);
  } catch(e) {}

  // 6) Search treaty/config tables ที่มี column ชื่อ percent_exp_refund หรือ percent_expense
  console.log('\n=== 6. Tables ที่มี column percent_exp_refund / percent_expense / g_percent ===');
  const tabs = await c.query(`
    SELECT DISTINCT table_name, column_name
    FROM information_schema.columns
    WHERE table_schema='public'
      AND (column_name IN ('percent_exp_refund','percent_expense','exp_refund_g_percent','total_amt_percent','claim_reserve_percent'))
    ORDER BY table_name, column_name`);
  tabs.rows.forEach(r => console.log(`  ${r.table_name}.${r.column_name}`));

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

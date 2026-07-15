// หาว่าทำไม GH4634 ไม่ออกรายงาน BDR หลังประมวลผล Actual
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) สถานะปัจจุบัน — snap GH4634 ของเรา (py=8 period=202606) มี exp_refund หรือยัง?
  console.log('=== 1. snap GH4634 py=8 period=202606 — สถานะ exp_refund ปัจจุบัน ===');
  const snap = await c.query(`
    SELECT rig_v_exp_id, rig_process_hd_id, rd_type, premium, exp_refund, exp_refund_dt,
           claim_life, claim_add, claim_dismem
    FROM tx_act_snap_exprefund
    WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
    ORDER BY rd_type`);
  console.log(`  ${snap.rowCount} rows`);
  snap.rows.forEach(r => console.log(`  rig_v_exp_id=${r.rig_v_exp_id} hd=${r.rig_process_hd_id} rd=${r.rd_type} prem=${r.premium} exp_refund=${r.exp_refund} dt=${r.exp_refund_dt} | claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem}`));

  // 2) Stg GH4634 — สถานะปัจจุบัน
  console.log('\n=== 2. stg GH4634 ปัจจุบัน ===');
  const stg = await c.query(`SELECT * FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' ORDER BY stg_act_exp_refund_id DESC`);
  stg.rows.forEach(r => {
    console.log(`  stg_id=${r.stg_act_exp_refund_id} hd=${r.rig_process_hd_id} py=${r.policy_year} period=${r.period}: exp_refund=${r.exp_refund} | total_prem=${r.total_premium} claim=${r.claim} LCF=${r.exp_refund_previous_year} | claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem}`);
  });

  // 3) tx_rig_act_hd ล่าสุด — ตรวจ period และ closing_quarter
  console.log('\n=== 3. tx_rig_act_hd 15 รอบล่าสุด ===');
  const ah = await c.query(`
    SELECT rig_act_hd_id, period, quarter_year, quarter, closing_quarter, treaty_code, status, usage_status,
           sum_records, ri_premium, due_to, created_date
    FROM tx_rig_act_hd
    WHERE treaty_code LIKE '%GIB%' OR treaty_code IS NULL
    ORDER BY rig_act_hd_id DESC LIMIT 15`);
  ah.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.period} ${r.quarter_year}Q${r.quarter} closing=${r.closing_quarter} treaty=${r.treaty_code} status=${r.status} usage=${r.usage_status} records=${r.sum_records}`));

  // 4) BDR ของ GH4634 — ดู rig_act_hd_id แต่ละ row → mapping ไป period
  console.log('\n=== 4. BDR GH4634 → link กับ act_hd ===');
  const bdr = await c.query(`
    SELECT bdr.rig_act_bdr_new_renew_id AS bdr_id, bdr.rig_act_hd_id, bdr.closing_quarter, bdr.policy_year,
           ah.period, ah.usage_status, ah.status,
           bdr.tot_ori_ex_refund_paid_life, bdr.tot_ori_ex_refund_paid_add
    FROM tx_rig_act_bdr_new_renew bdr
    LEFT JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id = bdr.rig_act_hd_id
    WHERE bdr.policy_no='GH4634'
    ORDER BY bdr.rig_act_hd_id DESC`);
  console.log(`  ${bdr.rowCount} rows`);
  bdr.rows.forEach(r => console.log(`  bdr_id=${r.bdr_id} act_hd=${r.rig_act_hd_id} period=${r.period} closing=${r.closing_quarter} py=${r.policy_year} status=${r.status} usage=${r.usage_status} → ori_life=${r.tot_ori_ex_refund_paid_life} ori_add=${r.tot_ori_ex_refund_paid_add}`));

  // 5) act_hd ที่ active สำหรับ GIB period=202606 มีหรือไม่
  console.log('\n=== 5. act_hd สำหรับ period=202606 GIB ===');
  const ah606 = await c.query(`
    SELECT rig_act_hd_id, period, closing_quarter, treaty_code, status, usage_status, sum_records
    FROM tx_rig_act_hd
    WHERE period IN (202605, 202606) AND treaty_code LIKE '%GIB%'
    ORDER BY rig_act_hd_id DESC`);
  if (ah606.rowCount === 0) console.log('  (ไม่มี act_hd ของ period นี้)');
  ah606.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.period} closing=${r.closing_quarter} status=${r.status} usage=${r.usage_status} records=${r.sum_records}`));

  // 6) ดู rig_process_hd ของ ACT_BORDEREAU + ACT_MAIN_PROCESS ล่าสุด
  console.log('\n=== 6. rig_process_hd ACT_BORDEREAU / ACT_MAIN_PROCESS ล่าสุด ===');
  const ph = await c.query(`
    SELECT rig_process_hd_id, process_code, period, treaty_code, status, usage_status, sum_record, created_date, finish_date
    FROM tx_rig_process_hd
    WHERE process_code IN ('ACT_MAIN_PROCESS','ACT_BORDEREAU','ACT_BORDEREAU_RE')
    ORDER BY rig_process_hd_id DESC LIMIT 15`);
  ph.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} ${r.process_code} period=${r.period} treaty=${r.treaty_code} status=${r.status} usage=${r.usage_status} records=${r.sum_record}`));

  // 7) ดูใน act_hd ของ period ที่มี records>0 ของ GIB — เทียบกับ BDR rows ที่มี GH4634
  console.log('\n=== 7. act_hd ของ GIB ที่มี records > 0 ===');
  const ahg = await c.query(`
    SELECT rig_act_hd_id, period, closing_quarter, status, usage_status, sum_records, ri_premium, due_to
    FROM tx_rig_act_hd
    WHERE treaty_code LIKE '%GIB%' AND sum_records > 0
    ORDER BY rig_act_hd_id DESC LIMIT 10`);
  if (ahg.rowCount === 0) console.log('  (ไม่มี act_hd ที่ records>0)');
  ahg.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.period} closing=${r.closing_quarter} status=${r.status} records=${r.sum_records} ri_premium=${r.ri_premium} due_to=${r.due_to}`));

  // 8) tx_rig_act_policy — ค่าที่ link จาก stg.all_policy
  console.log('\n=== 8. tx_rig_act_policy หรือ tx_rig_act_bdr_premium → GH4634 ===');
  try {
    const tabs = await c.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'tx_rig_act_%' ORDER BY 1`);
    console.log('  tx_rig_act_* tables:');
    tabs.rows.forEach(r => console.log(`    ${r.table_name}`));
  } catch(e) { console.log('  err: '+e.message); }

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

// ตรวจว่าทำไม BDR ของ GH4634 หลัง Actual Process ถึงไม่ populate tot_*_ex_refund_paid_*
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) ดู process_hd ล่าสุดทั้งหมด — เพื่อรู้ว่ารันอะไรไปบ้าง
  console.log('=== 1. tx_rig_process_hd 10 รอบล่าสุด ===');
  const ph = await c.query(`
    SELECT rig_process_hd_id, process_code, status, usage_status, period, treaty_code,
           sum_record, created_date, finish_date
    FROM tx_rig_process_hd ORDER BY rig_process_hd_id DESC LIMIT 10`);
  ph.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} ${r.process_code} status=${r.status} usage=${r.usage_status} period=${r.period} treaty=${r.treaty_code} records=${r.sum_record} finish=${r.finish_date}`));

  // 2) สถานะปัจจุบันของ GH4634 ทั้ง 3 layer
  console.log('\n=== 2. GH4634 ปัจจุบัน ใน 3 layer ===');
  const stg = await c.query(`SELECT stg_act_exp_refund_id, rig_process_hd_id, policy_year, period, claim_life, claim_add, claim_dismem, exp_refund_previous_year, exp_refund, total_premium, claim FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' ORDER BY stg_act_exp_refund_id DESC`);
  console.log(`  Staging: ${stg.rowCount} rows`);
  stg.rows.forEach(r => console.log(`    stg_id=${r.stg_act_exp_refund_id} hd=${r.rig_process_hd_id} py=${r.policy_year} period=${r.period} → exp_refund=${r.exp_refund} | claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem} LCF=${r.exp_refund_previous_year}`));

  const snap = await c.query(`SELECT COUNT(*) AS n, COUNT(DISTINCT rig_process_hd_id) AS hds, MAX(rig_process_hd_id) AS max_hd, COUNT(*) FILTER(WHERE claim_life<>0) AS has_claim_life FROM tx_act_snap_exprefund WHERE policy_no='GH4634'`);
  console.log(`  Snap: ${snap.rows[0].n} rows | ${snap.rows[0].hds} distinct hd_ids | max_hd=${snap.rows[0].max_hd} | claim_life<>0: ${snap.rows[0].has_claim_life}`);

  const lnd = await c.query(`SELECT COUNT(*) AS n, COUNT(DISTINCT rig_process_hd_id) AS hds, MAX(rig_process_hd_id) AS max_hd, COUNT(*) FILTER(WHERE claim_life<>0) AS has_claim_life FROM tx_rig_landing_exprefund WHERE policy_no='GH4634'`);
  console.log(`  Landing: ${lnd.rows[0].n} rows | ${lnd.rows[0].hds} distinct hd_ids | max_hd=${lnd.rows[0].max_hd} | claim_life<>0: ${lnd.rows[0].has_claim_life}`);

  // 3) BDR ของ GH4634 — มีกี่ rows แล้วและสถานะ exp_refund fields
  console.log('\n=== 3. GH4634 ใน tx_rig_act_bdr_new_renew ===');
  const bdr = await c.query(`
    SELECT rig_act_bdr_new_renew_id, rig_act_hd_id, closing_quarter, policy_year, mode_pay,
           tot_ori_ex_refund_paid_life, tot_ori_ex_refund_paid_add,
           tot_re_ex_refund_paid_life, tot_re_ex_refund_paid_add,
           ori_ex_refund_life, ori_ex_refund_acc, re_ex_refund_life, re_ex_refund_acc,
           ex_refund_rate_life, ex_refund_rate_acc
    FROM tx_rig_act_bdr_new_renew
    WHERE policy_no='GH4634'
    ORDER BY rig_act_hd_id DESC LIMIT 10`);
  console.log(`  ${bdr.rowCount} rows`);
  bdr.rows.forEach(r => {
    console.log(`  bdr_id=${r.rig_act_bdr_new_renew_id} act_hd=${r.rig_act_hd_id} quarter=${r.closing_quarter} py=${r.policy_year}`);
    console.log(`    Ori: life=${r.tot_ori_ex_refund_paid_life} add=${r.tot_ori_ex_refund_paid_add}`);
    console.log(`    Re:  life=${r.tot_re_ex_refund_paid_life} add=${r.tot_re_ex_refund_paid_add}`);
    console.log(`    Agg: ori_life=${r.ori_ex_refund_life} ori_acc=${r.ori_ex_refund_acc} re_life=${r.re_ex_refund_life} re_acc=${r.re_ex_refund_acc}`);
    console.log(`    Rate: life=${r.ex_refund_rate_life}% acc=${r.ex_refund_rate_acc}%`);
  });

  // 4) ตรวจ tx_rig_act_hd รอบล่าสุด — period และ quarter
  console.log('\n=== 4. tx_rig_act_hd ล่าสุด ===');
  try {
    const ah = await c.query(`SELECT rig_act_hd_id, period, year, quarter, treaty_code, status, sum_records, created_date FROM tx_rig_act_hd ORDER BY rig_act_hd_id DESC LIMIT 10`);
    ah.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.period} ${r.year}Q${r.quarter} treaty=${r.treaty_code} status=${r.status} records=${r.sum_records}`));
  } catch(e) { console.log('  err: '+e.message); }

  // 5) ดูว่า GL2921 (working sample) มี mapping ที่ stg → bdr ใน hd_id ลำดับเดียวกันยังไง
  console.log('\n=== 5. GL2921 mapping flow (working sample) ===');
  const gl = await c.query(`
    SELECT s.stg_act_exp_refund_id, s.rig_process_hd_id AS stg_hd, s.policy_year AS stg_py, s.period, s.exp_refund AS stg_exp_refund,
           s.claim_life AS stg_cl, s.claim_add AS stg_ca, s.claim_dismem AS stg_cd
    FROM tx_stg_act_exp_refund s WHERE s.policy_no='GL2921'`);
  gl.rows.forEach(r => console.log(`  stg: hd=${r.stg_hd} py=${r.stg_py} period=${r.period} exp_refund=${r.stg_exp_refund} | claim_life=${r.stg_cl} claim_add=${r.stg_ca} claim_dismem=${r.stg_cd}`));

  const gl_bdr = await c.query(`SELECT COUNT(*) AS n, MIN(rig_act_hd_id) AS min_hd, MAX(rig_act_hd_id) AS max_hd, COUNT(*) FILTER(WHERE tot_ori_ex_refund_paid_life<>0) AS has_ori_life FROM tx_rig_act_bdr_new_renew WHERE policy_no='GL2921'`);
  console.log(`  bdr: ${gl_bdr.rows[0].n} total | act_hd range ${gl_bdr.rows[0].min_hd}-${gl_bdr.rows[0].max_hd} | has_ori_life: ${gl_bdr.rows[0].has_ori_life}`);

  // 6) ความสัมพันธ์ rig_act_hd_id ↔ rig_process_hd_id — ดูว่า BDR ผูกกับ act_hd ตัวไหน
  console.log('\n=== 6. relationship: tx_rig_act_hd ↔ tx_rig_process_hd ===');
  try {
    const ahCols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_hd' ORDER BY ordinal_position`);
    console.log('  tx_rig_act_hd cols: ' + ahCols.rows.map(r => r.column_name).join(', '));
  } catch(e) { console.log('  err: '+e.message); }

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

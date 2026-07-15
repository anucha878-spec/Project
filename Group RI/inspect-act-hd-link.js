// ตรวจ link ระหว่าง tx_rig_act_hd ↔ tx_rig_process_hd เพื่อหา root cause
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) act_hd=618 (active SUCCESS ล่าสุด) — มี rig_process_hd_id ไหม?
  console.log('=== 1. tx_rig_act_hd act_hd=618 — full columns ===');
  const ah = await c.query(`SELECT * FROM tx_rig_act_hd WHERE rig_act_hd_id=618`);
  if (ah.rowCount > 0) {
    Object.entries(ah.rows[0]).forEach(([k,v]) => console.log(`  ${k} = ${v}`));
  }

  // 2) BDR row ของ GH4634 ที่ผูกกับ act_hd=618 — มี process_hd_id ไหม?
  console.log('\n=== 2. tx_rig_act_bdr_new_renew GH4634 act_hd=618 — process_hd info ===');
  const bdr = await c.query(`
    SELECT *
    FROM tx_rig_act_bdr_new_renew
    WHERE policy_no='GH4634' AND rig_act_hd_id=618`);
  if (bdr.rowCount > 0) {
    const r = bdr.rows[0];
    // เฉพาะ key + refund + premium columns
    ['rig_act_bdr_new_renew_id','rig_act_hd_id','policy_no','reinsurer_no','effective_date_from','effective_date_to','policy_year','mode_pay','closing_quarter',
     'l1_ori_prem_life','l1_ori_prem_add','l1_ori_prem_med','tot_ori_prem_life','tot_ori_prem_add','tot_ori_prem_med',
     'tot_ori_ex_refund_paid_life','tot_ori_ex_refund_paid_add','tot_re_ex_refund_paid_life','tot_re_ex_refund_paid_add',
     'l1_re_prem_life','l1_re_prem_add','re_ex_refund','ori_ex_refund_life','ori_ex_refund_acc',
     'created_date','created_by','rig_process_hd_id'].forEach(k => {
      if (k in r) console.log(`  ${k} = ${r[k]}`);
    });
  } else {
    console.log('  (no row)');
  }

  // 3) ตรวจ column ของ tx_rig_act_bdr_new_renew — มี rig_process_hd_id หรือไม่?
  console.log('\n=== 3. tx_rig_act_bdr_new_renew — มี column rig_process_hd_id ไหม ===');
  const cols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_new_renew' AND (column_name LIKE '%hd%' OR column_name LIKE '%process%')`);
  cols.rows.forEach(r => console.log(`  ${r.column_name}`));

  // 4) ดู process_hd_id ที่สัมพันธ์กับ act_hd
  console.log('\n=== 4. tx_rig_act_hd act_hd=618 - process_hd link via FK ===');
  // ลอง JOIN กับ tx_rig_process_hd ผ่าน period+treaty+quarter
  try {
    const link = await c.query(`
      SELECT ah.rig_act_hd_id, ah.period AS ah_period, ah.closing_quarter, ah.treaty_code AS ah_treaty,
             ph.rig_process_hd_id, ph.process_code, ph.period AS ph_period, ph.treaty_code AS ph_treaty,
             ph.status, ph.usage_status
      FROM tx_rig_act_hd ah
      LEFT JOIN tx_rig_process_hd ph
        ON ph.period = ah.period AND ph.treaty_code = ah.treaty_code
       AND ph.process_code IN ('ACT_BORDEREAU','ACT_MAIN_PROCESS')
       AND ph.usage_status = 'ACTIVE'
      WHERE ah.rig_act_hd_id = 618`);
    link.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.ah_period} treaty=${r.ah_treaty} → process_hd=${r.rig_process_hd_id} (${r.process_code}) ph_period=${r.ph_period} ph_treaty=${r.ph_treaty} status=${r.status}/${r.usage_status}`));
  } catch(e) { console.log('  err: '+e.message); }

  // 5) ดูว่า BDR ที่มี exp_refund populated ใช้ snap data ของ period ไหน — ตัวอย่าง GL2921 hd=304
  console.log('\n=== 5. GL2921 — เทียบ BDR.period vs snap.period ที่ populated ===');
  const gl = await c.query(`
    SELECT bdr.rig_act_hd_id, ah.period AS ah_period, ah.closing_quarter,
           bdr.tot_ori_ex_refund_paid_life,
           (SELECT MIN(period) FROM tx_act_snap_exprefund s WHERE s.policy_no='GL2921' AND s.exp_refund > 0) AS snap_min_period,
           (SELECT MAX(period) FROM tx_act_snap_exprefund s WHERE s.policy_no='GL2921' AND s.exp_refund > 0) AS snap_max_period
    FROM tx_rig_act_bdr_new_renew bdr
    LEFT JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id = bdr.rig_act_hd_id
    WHERE bdr.policy_no='GL2921' AND bdr.tot_ori_ex_refund_paid_life > 0
    ORDER BY bdr.rig_act_hd_id DESC LIMIT 5`);
  gl.rows.forEach(r => console.log(`  GL2921 act_hd=${r.rig_act_hd_id} period=${r.ah_period} ${r.closing_quarter} | tot_ori_life=${r.tot_ori_ex_refund_paid_life} | snap period range = ${r.snap_min_period}..${r.snap_max_period}`));

  // 6) เช็คว่า snap GH4634 period=202606 ของเรา จะ link กับ act_hd=618 (period=202605) ได้ไหม
  console.log('\n=== 6. Period mismatch — test data vs active act_hd ===');
  console.log('  Test data ของเรา: snap GH4634 period=202606, rig_process_hd_id=14053');
  console.log('  Active Actual: act_hd=618 period=202605, closing_quarter=2025Q4');
  console.log('  → MISMATCH! BDR ดูที่ period=202605 ไม่ใช่ 202606');

  // 7) ตรวจว่า BDR engine match snap ผ่าน period= หรือ rig_process_hd_id=
  console.log('\n=== 7. ดู process_hd ที่ ACT_BORDEREAU ใช้ ===');
  const bp = await c.query(`
    SELECT rig_process_hd_id, process_code, period, treaty_code, status, usage_status, sum_record
    FROM tx_rig_process_hd
    WHERE process_code IN ('ACT_BORDEREAU','ACT_BORDEREAU_RE') AND usage_status='ACTIVE'
    ORDER BY rig_process_hd_id DESC LIMIT 5`);
  bp.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} ${r.process_code} period=${r.period} treaty=${r.treaty_code} status=${r.status} records=${r.sum_record}`));

  // 8) ใน snap GH4634 มี rig_process_hd_id อะไรบ้าง?
  console.log('\n=== 8. snap GH4634 — distinct rig_process_hd_id ===');
  const sh = await c.query(`SELECT rig_process_hd_id, period, COUNT(*) AS rows, COUNT(DISTINCT policy_year) AS pys FROM tx_act_snap_exprefund WHERE policy_no='GH4634' GROUP BY 1,2 ORDER BY 1`);
  sh.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} period=${r.period} → ${r.rows} rows / ${r.pys} policy_years`));

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

// ตรวจหา root cause ลึกที่ BDR GH4634 ยังไม่ populated หลังแก้ period
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) สถานะ test data ปัจจุบัน (period, hd, exp_refund, claim_life)
  console.log('=== 1. สถานะ GH4634 ปัจจุบันใน 3 layer ===');
  const stg = await c.query(`SELECT stg_act_exp_refund_id, rig_process_hd_id, policy_year, period, exp_refund, exp_refund_previous_year, claim_life, claim_add, claim_dismem FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' ORDER BY stg_act_exp_refund_id DESC`);
  console.log('Staging:');
  stg.rows.forEach(r => console.log(`  stg_id=${r.stg_act_exp_refund_id} hd=${r.rig_process_hd_id} py=${r.policy_year} period=${r.period} exp_refund=${r.exp_refund} LCF=${r.exp_refund_previous_year} | cl=${r.claim_life} ca=${r.claim_add} cd=${r.claim_dismem}`));

  const snap = await c.query(`SELECT rig_v_exp_id, rig_process_hd_id, policy_year, period, rd_type, premium, exp_refund, claim_life, claim_add, claim_dismem FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8 ORDER BY rd_type`);
  console.log(`\nSnap GH4634 py=8: ${snap.rowCount} rows`);
  snap.rows.forEach(r => console.log(`  id=${r.rig_v_exp_id} hd=${r.rig_process_hd_id} period=${r.period} rd=${r.rd_type} prem=${r.premium} exp_refund=${r.exp_refund} | cl=${r.claim_life} ca=${r.claim_add} cd=${r.claim_dismem}`));

  // 2) ตรวจ act_hd ใหม่ล่าสุด — มี act_hd ใหม่หลัง Re-run หรือไม่
  console.log('\n=== 2. tx_rig_act_hd 5 ตัวล่าสุด ===');
  const ah = await c.query(`SELECT rig_act_hd_id, period, closing_quarter, treaty_code, status, usage_status, sum_records, created_date FROM tx_rig_act_hd ORDER BY rig_act_hd_id DESC LIMIT 5`);
  ah.rows.forEach(r => console.log(`  act_hd=${r.rig_act_hd_id} period=${r.period} ${r.closing_quarter} treaty=${r.treaty_code} status=${r.status} usage=${r.usage_status} records=${r.sum_records} created=${r.created_date}`));

  // 3) BDR row ของ GH4634 ที่ผูกกับ act_hd ล่าสุด ทุก row
  console.log('\n=== 3. BDR GH4634 ทั้งหมด — ดู act_hd ล่าสุด + ค่า refund ===');
  // หา column premium ที่มีจริงก่อน
  const cols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_new_renew' AND column_name ILIKE '%prem%' ORDER BY column_name LIMIT 20`);
  console.log('  prem-related cols:', cols.rows.map(r => r.column_name).join(', '));
  const bdr = await c.query(`
    SELECT bdr.rig_act_bdr_new_renew_id AS bdr_id, bdr.rig_act_hd_id, ah.period AS ah_period, ah.status AS ah_status, ah.usage_status AS ah_usage,
           bdr.policy_year, bdr.tot_ori_ex_refund_paid_life, bdr.tot_ori_ex_refund_paid_add,
           bdr.tot_re_ex_refund_paid_life, bdr.tot_re_ex_refund_paid_add,
           bdr.ori_ex_refund_life, bdr.ori_ex_refund_acc,
           bdr.created_date
    FROM tx_rig_act_bdr_new_renew bdr
    LEFT JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id = bdr.rig_act_hd_id
    WHERE bdr.policy_no='GH4634'
    ORDER BY bdr.rig_act_hd_id DESC LIMIT 10`);
  bdr.rows.forEach(r => console.log(`  bdr_id=${r.bdr_id} act_hd=${r.rig_act_hd_id} ah.period=${r.ah_period} status=${r.ah_status}/${r.ah_usage} py=${r.policy_year} | ori_life=${r.tot_ori_ex_refund_paid_life} ori_add=${r.tot_ori_ex_refund_paid_add} re_life=${r.tot_re_ex_refund_paid_life} re_add=${r.tot_re_ex_refund_paid_add} | agg_life=${r.ori_ex_refund_life} agg_acc=${r.ori_ex_refund_acc} created=${r.created_date}`));

  // 4) ตรวจ act_hd=618 (current active) BDR ของ GL2921 ที่ทำงานได้ — ดูค่า premium ฯลฯ
  console.log('\n=== 4. เทียบ GL2921 vs GH4634 ที่ act_hd=618 (ทำงานได้ vs ไม่ได้) ===');
  const cmp = await c.query(`
    SELECT bdr.policy_no, bdr.policy_year, bdr.mode_pay, bdr.rig_act_hd_id,
           bdr.tot_ori_ex_refund_paid_life, bdr.tot_ori_ex_refund_paid_add,
           bdr.ex_refund_rate_life, bdr.ex_refund_rate_acc,
           bdr.ori_ex_refund_life, bdr.ori_ex_refund_acc
    FROM tx_rig_act_bdr_new_renew bdr
    WHERE bdr.rig_act_hd_id IN (618, 620) AND bdr.policy_no IN ('GH4634','GL2921')
    ORDER BY bdr.policy_no, bdr.rig_act_hd_id DESC, bdr.policy_year`);
  cmp.rows.forEach(r => console.log(`  ${r.policy_no} act_hd=${r.rig_act_hd_id} py=${r.policy_year} mode=${r.mode_pay} | refund_life=${r.tot_ori_ex_refund_paid_life} acc=${r.tot_ori_ex_refund_paid_add} | rate_life=${r.ex_refund_rate_life} rate_acc=${r.ex_refund_rate_acc} | agg_life=${r.ori_ex_refund_life} agg_acc=${r.ori_ex_refund_acc}`));

  // 5) ตรวจว่า BDR engine match snap.exprefund ผ่าน key อะไร — ลอง JOIN test
  console.log('\n=== 5. Hypothesis check: BDR JOIN ผ่าน (policy_no, policy_year, rig_process_hd_id?) ===');
  const test = await c.query(`
    SELECT bdr.rig_act_hd_id, bdr.policy_no, bdr.policy_year,
           ah.period AS bdr_period,
           snap.rig_v_exp_id, snap.rig_process_hd_id AS snap_hd, snap.period AS snap_period, snap.policy_year AS snap_py, snap.exp_refund
    FROM tx_rig_act_bdr_new_renew bdr
    JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id = bdr.rig_act_hd_id
    LEFT JOIN tx_act_snap_exprefund snap
      ON snap.policy_no = bdr.policy_no AND snap.period = ah.period
    WHERE bdr.policy_no='GH4634' AND bdr.rig_act_hd_id=618
    LIMIT 10`);
  console.log(`  Snap rows ที่ JOIN ได้กับ BDR GH4634 act_hd=618: ${test.rowCount}`);
  test.rows.forEach(r => console.log(`    bdr.py=${r.policy_year} (period via ah=${r.bdr_period}) ↔ snap id=${r.rig_v_exp_id} snap_hd=${r.snap_hd} snap_period=${r.snap_period} snap_py=${r.snap_py} exp_refund=${r.exp_refund}`));

  // 6) ลอง JOIN ใช้ rig_process_hd_id ของ snap = rig_process_hd_id ที่ผูก act_hd
  console.log('\n=== 6. ตรวจ rig_process_hd_id ของ snap_exprefund GH4634 ที่ใช้งานจริง ===');
  const sh = await c.query(`SELECT DISTINCT rig_process_hd_id, policy_year, period FROM tx_act_snap_exprefund WHERE policy_no='GH4634' ORDER BY policy_year, rig_process_hd_id`);
  sh.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} py=${r.policy_year} period=${r.period}`));

  // 7) ตรวจ rig_process_hd ที่ active ของ ACT_BORDEREAU period=202605
  console.log('\n=== 7. ACT_BORDEREAU active runs (ที่ generate BDR ล่าสุด) ===');
  const bord = await c.query(`
    SELECT rig_process_hd_id, process_code, period, treaty_code, status, usage_status, sum_record, created_date, finish_date
    FROM tx_rig_process_hd
    WHERE process_code='ACT_BORDEREAU' AND period=202605 AND treaty_code='GIB_Grp_Direct_EB' AND usage_status='ACTIVE'
    ORDER BY rig_process_hd_id DESC LIMIT 5`);
  bord.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} period=${r.period} status=${r.status}/${r.usage_status} records=${r.sum_record} finish=${r.finish_date}`));

  // 8) ดูว่า snap.rig_process_hd_id ที่ใช้ตอน Actual Run map กับ ACT_MAIN_PROCESS หรือ act_hd ไหน
  console.log('\n=== 8. GL2921 (working) — เทียบ snap.rig_process_hd_id กับ ACT_BORDEREAU run ===');
  const gl = await c.query(`SELECT DISTINCT rig_process_hd_id, period FROM tx_act_snap_exprefund WHERE policy_no='GL2921' ORDER BY rig_process_hd_id DESC LIMIT 5`);
  gl.rows.forEach(r => console.log(`  GL2921 snap_hd=${r.rig_process_hd_id} period=${r.period}`));

  // 9) ตรวจ rig_process_hd ที่ใช้ map snap ของ GL2921 → ดูว่ามี process_code อะไร
  console.log('\n=== 9. ของ GL2921 snap hd → ตรงกับ process_hd อะไร ===');
  const gh = await c.query(`SELECT * FROM tx_rig_process_hd WHERE rig_process_hd_id IN (SELECT DISTINCT rig_process_hd_id FROM tx_act_snap_exprefund WHERE policy_no='GL2921')`);
  gh.rows.forEach(r => console.log(`  hd=${r.rig_process_hd_id} ${r.process_code} period=${r.period} status=${r.status}/${r.usage_status} records=${r.sum_record}`));

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

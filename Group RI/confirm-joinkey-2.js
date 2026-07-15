const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // A) GL2921 full PY mapping: snap PY -> BDR PY (value match), to confirm date/period remap
    console.log('=== A) GL2921: snap PY vs BDR PY (value-based mapping) ===');
    console.log('snap:', J((await c.query(`
      SELECT policy_year, SUM(exp_refund_dt) FILTER (WHERE rd_type='01')::numeric life_dt,
             SUM(exp_refund_dt) FILTER (WHERE rd_type='02')::numeric acc_dt
      FROM tx_act_snap_exprefund WHERE policy_no='GL2921' GROUP BY policy_year ORDER BY policy_year`)).rows));
    console.log('BDR (active only):', J((await c.query(`
      SELECT bdr.policy_year, bdr.closing_quarter, bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add add_
      FROM tx_rig_act_bdr_new_renew bdr JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id
      WHERE bdr.policy_no='GL2921' AND ah.usage_status='A' ORDER BY bdr.policy_year`)).rows));

    // B) GL346 ACTIVE BDR only + which quarter
    console.log('\n=== B) GL346: ACTIVE BDR rows (usage A) ===');
    console.log(J((await c.query(`
      SELECT bdr.rig_act_hd_id, bdr.policy_year, bdr.closing_quarter, ah.period, ah.created_date,
             bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add add_
      FROM tx_rig_act_bdr_new_renew bdr JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id
      WHERE bdr.policy_no='GL346' AND ah.usage_status='A' ORDER BY bdr.policy_year`)).rows));

    // C) timestamps: GL346 snap run vs its active BDR act_hd ; GL2921 same
    console.log('\n=== C) timestamps: snap_exprefund run vs active BDR act_hd ===');
    for (const p of ['GL346','GL2921']) {
      const snap = (await c.query(`SELECT DISTINCT rig_process_hd_id, MAX(created_date) cd FROM tx_act_snap_exprefund WHERE policy_no=$1 GROUP BY rig_process_hd_id ORDER BY 1 DESC LIMIT 1`,[p])).rows[0];
      const bdr = (await c.query(`
        SELECT ah.rig_act_hd_id, ah.closing_quarter, ah.created_date
        FROM tx_rig_act_bdr_new_renew bdr JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id
        WHERE bdr.policy_no=$1 AND ah.usage_status='A' ORDER BY ah.rig_act_hd_id DESC LIMIT 1`,[p])).rows[0];
      console.log(`  ${p}: snap_hd=${snap&&snap.rig_process_hd_id} snap_created=${snap&&snap.cd} | active BDR act_hd=${bdr&&bdr.rig_act_hd_id} (${bdr&&bdr.closing_quarter}) bdr_created=${bdr&&bdr.created_date}`);
    }

    // D) what quarters does each policy's ACTIVE actual cover? (latest active act_hd per policy)
    console.log('\n=== D) latest ACTIVE act result quarter per policy ===');
    for (const p of ['GL346','GL2921']) {
      console.log(`  ${p}:`, J((await c.query(`
        SELECT ah.rig_act_hd_id, ah.closing_quarter, ah.period, ah.status, ah.usage_status, ah.created_date
        FROM tx_rig_act_policy_hd ph JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=ph.rig_act_hd_id
        WHERE ph.policy_no=$1 AND ah.usage_status='A' ORDER BY ah.rig_act_hd_id DESC LIMIT 3`,[p])).rows));
    }

    // E) the current global active Actual runs (latest quarters being produced)
    console.log('\n=== E) latest ACTIVE GIB act_hd (what quarter is "current") ===');
    console.log(J((await c.query(`
      SELECT rig_act_hd_id, closing_quarter, period, status, usage_status, sum_records, created_date
      FROM tx_rig_act_hd WHERE treaty_code LIKE '%GIB%' AND usage_status='A' ORDER BY rig_act_hd_id DESC LIMIT 8`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

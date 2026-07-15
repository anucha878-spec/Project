const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const trace = async (p) => {
      console.log(`\n################## ${p} ##################`);
      // staging exp_refund (policy-level, per PY)
      console.log('--- staging exp_refund (PY, period, exp_refund) ---');
      console.log(J((await c.query(`
        SELECT rig_process_hd_id, period, policy_year, exp_refund, premium_life, premium_accident
        FROM tx_stg_act_exp_refund WHERE policy_no=$1 ORDER BY policy_year`,[p])).rows));
      // snap exp_refund per PY/rd_type — sum life(01)/acc(02)
      console.log('--- snap exp_refund: per PY, life(rd01)/acc(rd02) sums of exp_refund_dt ---');
      console.log(J((await c.query(`
        SELECT policy_year,
               SUM(exp_refund_dt) FILTER (WHERE rd_type='01')::numeric life_dt,
               SUM(exp_refund_dt) FILTER (WHERE rd_type='02')::numeric acc_dt,
               MAX(period::text) period
        FROM tx_act_snap_exprefund WHERE policy_no=$1 GROUP BY policy_year ORDER BY policy_year`,[p])).rows));
      // BDR exp_refund per PY + linked act_hd period/quarter/usage
      console.log('--- BDR new_renew: PY, act_hd period/quarter/usage, tot_ori_ex_refund_paid_life/add ---');
      console.log(J((await c.query(`
        SELECT bdr.rig_act_hd_id, bdr.policy_year, bdr.closing_quarter, ah.period ah_period, ah.usage_status,
               bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add add_
        FROM tx_rig_act_bdr_new_renew bdr JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id
        WHERE bdr.policy_no=$1 AND bdr.tot_ori_ex_refund_paid_life<>0
        ORDER BY bdr.rig_act_hd_id DESC LIMIT 8`,[p])).rows));
    };
    await trace('GL2921');   // working
    await trace('GL346');    // broken

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

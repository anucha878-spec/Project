const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 0) exp_refund cols on bdr_new_renew
    console.log('=== bdr_new_renew exp_refund-related cols ===');
    console.log((await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_new_renew' AND (column_name ILIKE '%refund%' OR column_name ILIKE '%period%' OR column_name ILIKE '%quarter%' OR column_name ILIKE '%policy_year%') ORDER BY ordinal_position`)).rows.map(r=>r.column_name).join(', '));

    // 1) GL346 snap_exprefund — process_hd + period + exp_refund per PY
    console.log('\n=== 1) GL346 snap_exprefund: distinct hd/period/PY + exp_refund_dt sum ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, policy_year, COUNT(*)::int rows,
             SUM(exp_refund_dt)::numeric sum_dt, SUM(exp_refund)::numeric sum_exp
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' GROUP BY 1,2,3 ORDER BY policy_year`)).rows));

    // 2) GL346 BDR rows (new_renew) + linked act_hd
    console.log('\n=== 2) GL346 tx_rig_act_bdr_new_renew + act_hd link ===');
    console.log(J((await c.query(`
      SELECT bdr.rig_act_bdr_new_renew_id bdr_id, bdr.rig_act_hd_id, bdr.policy_year, bdr.closing_quarter,
             ah.period ah_period, ah.closing_quarter ah_cq, ah.status ah_status, ah.usage_status ah_usage,
             bdr.tot_ori_ex_refund_paid_life, bdr.tot_ori_ex_refund_paid_add,
             bdr.tot_re_ex_refund_paid_life, bdr.tot_re_ex_refund_paid_add
      FROM tx_rig_act_bdr_new_renew bdr LEFT JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id
      WHERE bdr.policy_no='GL346' ORDER BY bdr.rig_act_hd_id DESC`)).rows));

    // 3) GL346 in act flow: act_policy_hd / act_hd for the period
    console.log('\n=== 3) GL346 tx_rig_act_policy_hd (act result) ===');
    console.log(J((await c.query(`
      SELECT ph.rig_act_policy_hd_id, ph.rig_act_hd_id, ah.period, ah.closing_quarter, ah.treaty_code, ah.status, ah.usage_status, ph.policy_year
      FROM tx_rig_act_policy_hd ph LEFT JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=ph.rig_act_hd_id
      WHERE ph.policy_no='GL346' ORDER BY ph.rig_act_hd_id DESC LIMIT 10`).catch(e=>({rows:[{err:e.message}]}))).rows));

    // 4) act_hd covering GL346's exp_refund period (202605) — GIB, ACTIVE?
    console.log('\n=== 4) act_hd for period 202605 GIB ===');
    console.log(J((await c.query(`
      SELECT rig_act_hd_id, period, closing_quarter, treaty_code, status, usage_status, sum_records, created_date
      FROM tx_rig_act_hd WHERE period=202605 AND treaty_code LIKE '%GIB%' ORDER BY rig_act_hd_id DESC LIMIT 10`)).rows));

    // 5) ACT_BORDEREAU process runs for 202605
    console.log('\n=== 5) ACT_BORDEREAU / ACT_MAIN process runs period 202605 ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, process_code, period, treaty_code, status, usage_status, sum_record, finish_date
      FROM tx_rig_process_hd WHERE period=202605 AND process_code ILIKE 'ACT%' ORDER BY rig_process_hd_id DESC LIMIT 15`)).rows));

    // 6) experience_refund flag for GL346 in all_policy (is it even flagged for exp refund?)
    console.log('\n=== 6) GL346 experience_refund flag (tx_stg_act_all_policy) ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, policy_year, status, ri_status, experience_refund, pay_type
      FROM tx_stg_act_all_policy WHERE policy_no='GL346' ORDER BY rig_process_hd_id DESC LIMIT 6`).catch(e=>({rows:[{err:e.message}]}))).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

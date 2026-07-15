const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // staging: ALL rows incl process_hd (detect duplicates / latest mock)
    console.log('=== staging tx_stg_act_exp_refund GL346 (all rows) ===');
    console.log(J((await c.query(`
      SELECT stg_act_exp_refund_id id, rig_process_hd_id hd, period, policy_year,
             premium_life, premium_accident, premium_tpd, total_premium,
             claim, claim_life, claim_add, claim_dismem, exp_refund_previous_year lcf,
             percent_exp_refund, percent_expense, exp_refund, created_date
      FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year, stg_act_exp_refund_id`)).rows));

    // snapshot current: per PY/rd_type — is exp_refund_dt 0 now?
    console.log('\n=== snapshot tx_act_snap_exprefund GL346 (latest hd) per PY/rd_type ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id hd, policy_year, rd_type,
             SUM(premium)::numeric premium, SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1, SUM(exp_refund)::numeric exp_refund
      FROM tx_act_snap_exprefund WHERE policy_no='GL346'
        AND rig_process_hd_id=(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund WHERE policy_no='GL346')
      GROUP BY rig_process_hd_id, policy_year, rd_type ORDER BY policy_year, rd_type`)).rows));

    // distinct staging process_hd for GL346 (how many mock generations)
    console.log('\n=== staging process_hd generations for GL346 ===');
    console.log(J((await c.query(`SELECT rig_process_hd_id hd, COUNT(*)::int rows, MIN(created_date) created FROM tx_stg_act_exp_refund WHERE policy_no='GL346' GROUP BY rig_process_hd_id ORDER BY hd`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    for (const p of ['GH5342','GH4750']) {
      console.log(`\n========================= ${p} =========================`);
      console.log('--- prem_layer proc 14587 ---');
      console.log(J((await c.query(`SELECT level, life_insure, life_prem, life_prem_rate, amount_life, period FROM tx_stg_est_prem_layer WHERE policy_no=$1 AND rig_process_hd_id=14587 ORDER BY level`,[p])).rows));
      console.log('--- cert_inforce members by band (current) ---');
      console.log(J((await c.query(`
        SELECT CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2' ELSE 'L3' END band,
               COUNT(*)::int n, MAX(period::text) period, SUM(life_insur)::numeric sa, SUM(life_prem)::numeric prem
        FROM tx_est_snap_cert_inforce WHERE policy_no=$1 GROUP BY 1 ORDER BY 1`,[p])).rows));
      console.log('--- policy_dt (latest 2 GIB runs) ---');
      console.log(J((await c.query(`
        SELECT ph.rig_est_hd_id, hd.status, ph.period, ph.mode_pay, pd.level, pd.ri_prem_life
        FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
        JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
        WHERE pd.policy_no=$1 ORDER BY ph.created_date DESC, pd.level LIMIT 9`,[p])).rows));
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

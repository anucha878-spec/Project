const { Client } = require('pg');
const cfg = { host: '10.14.8.58', port: 5432, database: 'groupri', user: 'groupri', password: 'nopass' };
const POL='GL5505', P='202604';
(async () => {
  const c = new Client(cfg); await c.connect();
  const q = async (l,s,p)=>{const r=await c.query(s,p);console.log(`\n== ${l} (${r.rowCount}) ==`);if(r.rowCount)console.table(r.rows);return r.rows;};
  await q('GL5505 202604 prem_layer',
    `SELECT level, life_insure, accident_insure, life_prem_rate, accident_prem_rate,
            life_prem, accident_prem, tpd_prem
     FROM tx_stg_est_prem_layer WHERE policy_no=$1 AND period=$2 ORDER BY level`,[POL,P]);
  await q('GL5505 202604 policy_dt DISTINCT',
    `SELECT DISTINCT dt.level, dt.ri_prem_life, dt.ri_prem_acc, dt.ri_prem_tpd
     FROM tx_rig_est_policy_dt dt JOIN tx_rig_est_policy_hd hd ON hd.rig_est_policy_hd_id=dt.rig_est_policy_hd_id
     WHERE dt.policy_no=$1 AND hd.period=$2 ORDER BY dt.level`,[POL,P]);
  await q('GL5505 202604 BDR DISTINCT',
    `SELECT DISTINCT policy_no, period, policy_year, mode_pay, ri_prem_life, ri_prem_acc, ri_comm_life, ri_comm_acc
     FROM tx_rig_est_bdr WHERE policy_no=$1 AND period=$2`,[POL,P]);
  await q('GL5505 member count by period',
    `SELECT period::text, count(*)::int n, sum(sum_insured_life) sa_life FROM tx_stg_est_inforce_member WHERE policy_no=$1 GROUP BY period`,[POL]);
  await c.end();
})();

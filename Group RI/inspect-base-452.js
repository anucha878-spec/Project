const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) FULL prem_layer rows for GL5557 (all columns) under process_hd 14587
    console.log('=== 1) FULL tx_stg_est_prem_layer rows : GL5557 (proc 14587) ===');
    console.log(J((await c.query(`SELECT * FROM tx_stg_est_prem_layer WHERE policy_no='GL5557' ORDER BY level`)).rows));

    // 2) ALL policy_dt for hd 452 (all 7 policies) with policy_no + level + ri_prem
    console.log('\n=== 2) ALL policy_dt under hd 452 (7 policies) ===');
    console.log(J((await c.query(`
      SELECT ph.policy_no, ph.rig_est_policy_hd_id, ph.policy_year, pd.level,
             pd.ri_prem_life, pd.ri_prem_acc, pd.ri_prem_tpd, pd.ri_prem_medical
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE ph.rig_est_hd_id=452 ORDER BY ph.policy_no, pd.level`)).rows));

    // 3) prem_layer for ALL 7 policies of hd 452 (match by policy_no, proc 14587)
    console.log('\n=== 3) prem_layer for all hd-452 policies (proc 14587) ===');
    console.log(J((await c.query(`
      SELECT policy_no, level, life_insure, accident_insure, life_prem, accident_prem, life_extra_prem,
             life_prem_rate, accident_prem_rate
      FROM tx_stg_est_prem_layer
      WHERE rig_process_hd_id=14587
        AND policy_no IN (SELECT policy_no FROM tx_rig_est_policy_hd WHERE rig_est_hd_id=452)
      ORDER BY policy_no, level`)).rows));

    // 4) Does policy_dt's ri_prem_acc/ri_prem_life ever equal prem_layer*cede for ANY policy? quick scan L2 (100% cede)
    //    Compare per policy: policy_dt L2 ri_prem_life  vs  prem_layer L2 life_prem
    console.log('\n=== 4) L2 compare: policy_dt ri_prem_life vs prem_layer life_prem (cede should be 100%) ===');
    console.log(J((await c.query(`
      SELECT ph.policy_no,
             pd.ri_prem_life AS dt_l2_ri_life, pl.life_prem AS stg_l2_life_prem,
             pd.ri_prem_acc  AS dt_l2_ri_acc,  pl.accident_prem AS stg_l2_acc_prem
      FROM tx_rig_est_policy_dt pd
      JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      LEFT JOIN tx_stg_est_prem_layer pl ON pl.policy_no=ph.policy_no AND pl.level='L2' AND pl.rig_process_hd_id=14587
      WHERE ph.rig_est_hd_id=452 AND pd.level='L2' ORDER BY ph.policy_no`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

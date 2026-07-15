const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) current prem_layer (proc 14587) — which policies have L2/L3 (members crossing layers)?
    console.log('=== 1) prem_layer proc 14587: policies with L2 or L3 (life or acc) ===');
    console.log(J((await c.query(`
      SELECT policy_no,
             STRING_AGG(level,',' ORDER BY level) levels,
             MAX(CASE WHEN level='L2' THEN life_insure END) l2_sa,
             MAX(CASE WHEN level='L3' THEN life_insure END) l3_sa
      FROM tx_stg_est_prem_layer
      WHERE rig_process_hd_id=14587
      GROUP BY policy_no
      HAVING bool_or(level IN ('L2','L3') AND life_insure>0)
      ORDER BY policy_no`)).rows));

    // 2) BROADER: any GIB policy whose policy_dt has non-zero L2 or L3 ri_prem_life (any run) — proves layering fired
    console.log('\n=== 2) GIB policies with non-zero L2/L3 ri_prem_life in policy_dt (distinct, any run) ===');
    console.log(J((await c.query(`
      SELECT DISTINCT pd.policy_no
      FROM tx_rig_est_policy_dt pd
      JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
      WHERE hd.cf_treaty_id=2 AND pd.level IN ('L2','L3') AND pd.ri_prem_life<>0
      ORDER BY pd.policy_no`)).rows));

    // 3) DEFECT-SUSPECT: GIB policies with members crossing layers (prem_layer L2/L3 SA>0) BUT policy_dt L2/L3 = 0 (collapsed)
    //    Use latest SUCCESS est_hd per policy. First, members-by-band from current cert_inforce for all multi-layer policies.
    console.log('\n=== 3) cert_inforce: ALL policies with any member life SA>5M (member crosses into L2/L3) ===');
    console.log(J((await c.query(`
      SELECT policy_no,
             COUNT(*) FILTER (WHERE life_insur>5000000 AND life_insur<=20000000)::int n_L2,
             COUNT(*) FILTER (WHERE life_insur>20000000)::int n_L3,
             SUM(life_prem)::numeric tot_life_prem
      FROM tx_est_snap_cert_inforce
      GROUP BY policy_no
      HAVING COUNT(*) FILTER (WHERE life_insur>5000000) > 0
      ORDER BY policy_no`)).rows));

    // 4) For each such policy: mode + latest policy_dt (L1/L2/L3) + treaty
    console.log('\n=== 4) latest policy_dt + mode for policies with members SA>5M ===');
    console.log(J((await c.query(`
      WITH bigm AS (
        SELECT DISTINCT policy_no FROM tx_est_snap_cert_inforce WHERE life_insur>5000000
      ), latest AS (
        SELECT ph.policy_no, MAX(ph.rig_est_policy_hd_id) AS hd_id
        FROM tx_rig_est_policy_hd ph JOIN bigm b ON b.policy_no=ph.policy_no
        JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id AND hd.cf_treaty_id=2
        GROUP BY ph.policy_no
      )
      SELECT l.policy_no, ph.rig_est_hd_id, hd.status, ph.mode_pay, ph.period,
             MAX(CASE WHEN pd.level='L1' THEN pd.ri_prem_life END) ri_L1,
             MAX(CASE WHEN pd.level='L2' THEN pd.ri_prem_life END) ri_L2,
             MAX(CASE WHEN pd.level='L3' THEN pd.ri_prem_life END) ri_L3
      FROM latest l
      JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=l.hd_id
      JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
      LEFT JOIN tx_rig_est_policy_dt pd ON pd.rig_est_policy_hd_id=ph.rig_est_policy_hd_id
      GROUP BY l.policy_no, ph.rig_est_hd_id, hd.status, ph.mode_pay, ph.period
      ORDER BY l.policy_no`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

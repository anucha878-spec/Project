// Inspect RI Premium Life & Accident calc for GH5600 + GL5505, GIB treaty, Estimate period 202605
const { Client } = require('pg');
const cfg = { host: '10.14.8.58', port: 5432, database: 'groupri', user: 'groupri', password: 'nopass' };
const POLS = ['GH5600', 'GL5505'];
const PERIOD = '202605';

(async () => {
  const c = new Client(cfg);
  await c.connect();
  const q = async (label, sql, params) => {
    try {
      const r = await c.query(sql, params);
      console.log(`\n===== ${label} (${r.rowCount} rows) =====`);
      if (r.rowCount) console.table(r.rows);
      return r.rows;
    } catch (e) { console.log(`\n===== ${label} ERROR: ${e.message}`); return []; }
  };

  for (const POL of POLS) {
    console.log(`\n\n############################## ${POL}  (period ${PERIOD}) ##############################`);

    // which periods carry data for this policy
    await q(`${POL} periods present`,
      `SELECT 'member' src, period, count(*) n FROM tx_stg_est_inforce_member WHERE policy_no=$1 GROUP BY period
       UNION ALL SELECT 'prem_layer', period, count(*) FROM tx_stg_est_prem_layer WHERE policy_no=$1 GROUP BY period
       UNION ALL SELECT 'bdr', period, count(*) FROM tx_rig_est_bdr WHERE policy_no=$1 GROUP BY period
       ORDER BY 2, 1`, [POL]);

    // members: try 202605, else latest available
    const mem = await q(`${POL} members (202605)`,
      `SELECT cer_no, age, sum_insured_life, sum_insured_accident,
              prem_rate_life, prem_rate_acc, prem_life, prem_extra_life, prem_acc
       FROM tx_stg_est_inforce_member WHERE policy_no=$1 AND period=$2 ORDER BY cer_no`, [POL, PERIOD]);
    if (!mem.length) {
      await q(`${POL} members (latest available period, for reference)`,
        `SELECT period, cer_no, age, sum_insured_life, sum_insured_accident,
                prem_rate_life, prem_rate_acc, prem_life, prem_acc
         FROM tx_stg_est_inforce_member WHERE policy_no=$1
           AND period = (SELECT max(period) FROM tx_stg_est_inforce_member WHERE policy_no=$1)
         ORDER BY cer_no`, [POL]);
    }

    await q(`${POL} prem_layer 202605 (SA + rate + prem per layer)`,
      `SELECT level, life_insure, accident_insure,
              life_prem_rate, accident_prem_rate,
              life_prem, accident_prem, tpd_prem
       FROM tx_stg_est_prem_layer WHERE policy_no=$1 AND period=$2 ORDER BY level`, [POL, PERIOD]);

    await q(`${POL} policy_dt 202605 (RI premium per layer, DISTINCT)`,
      `SELECT DISTINCT dt.level, dt.ri_prem_life, dt.ri_prem_acc, dt.ri_prem_tpd
       FROM tx_rig_est_policy_dt dt
       JOIN tx_rig_est_policy_hd hd ON hd.rig_est_policy_hd_id = dt.rig_est_policy_hd_id
       WHERE dt.policy_no=$1 AND hd.period=$2 ORDER BY dt.level`, [POL, PERIOD]);

    await q(`${POL} BDR 202605 rollup`,
      `SELECT policy_no, period, policy_year, mode_pay, effective_date,
              ri_prem_life, ri_prem_acc, ri_comm_life, ri_comm_acc
       FROM tx_rig_est_bdr WHERE policy_no=$1 AND period=$2`, [POL, PERIOD]);
  }

  await c.end();
})();

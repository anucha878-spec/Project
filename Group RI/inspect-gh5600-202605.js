// Inspect RI Premium Life calc for GH5600, GIB treaty, Estimate period 202605
const { Client } = require('pg');
const cfg = { host: '10.14.8.58', port: 5432, database: 'groupri', user: 'groupri', password: 'nopass' };
const POL = 'GH5600';
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

  // 1. Process header runs for this policy's period
  await q('process_hd (est, 202605)',
    `SELECT id, process_code, period, treaty_code, status, sum_record, start_date
     FROM tx_rig_process_hd WHERE period=$1 AND process_code LIKE 'EST%' ORDER BY id DESC LIMIT 20`, [PERIOD]);

  // 2. Snapshot policy (rate_flag, effective_date, mode_pay)
  await q('tx_est_snap_policy',
    `SELECT * FROM tx_est_snap_policy WHERE policy_no=$1 LIMIT 5`, [POL]);

  // 3. Members with rates + prems
  await q('tx_stg_est_inforce_member',
    `SELECT policy_no, certificate_no, sum_insured_life, sum_insured_acc,
            prem_rate_life, prem_rate_acc, prem_rate_tpd,
            life_prem, accident_prem, tpd_prem, life_extra, acc_extra,
            promise_date, rate_type, mode_pay
     FROM tx_stg_est_inforce_member WHERE policy_no=$1 ORDER BY certificate_no`, [POL]);

  // 4. Premium layer (per L1/L2/L3)
  await q('tx_stg_est_prem_layer',
    `SELECT policy_no, level, effective_date, life_prem, accident_prem, tpd_prem,
            life_prem_rate, accident_prem_rate, tpd_prem_rate
     FROM tx_stg_est_prem_layer WHERE policy_no=$1 ORDER BY level`, [POL]);

  // 5. RI premium per layer with cede%
  await q('tx_rig_est_policy_dt',
    `SELECT policy_no, level, percent_re, ri_prem_life, ri_prem_acc, ri_prem_tpd,
            ri_com_rate, ri_com_life, ri_com_acc
     FROM tx_rig_est_policy_dt WHERE policy_no=$1 ORDER BY level`, [POL]);

  // 6. BDR rollup
  await q('tx_rig_est_bdr',
    `SELECT policy_no, treaty_code, ri_prem_life, ri_prem_acc, ri_prem_tpd,
            ri_com_life, ri_com_acc
     FROM tx_rig_est_bdr WHERE policy_no=$1 LIMIT 5`, [POL]);

  await c.end();
})();

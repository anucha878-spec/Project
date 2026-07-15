const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // A) pol_mem keyed to hd 452
    console.log('=== A) pol_mem count for rig_est_hd_id=452 ===');
    console.log(J((await c.query(`SELECT COUNT(*)::int n, COUNT(DISTINCT policy_no)::int policies FROM tx_rig_est_pol_mem WHERE rig_est_hd_id=452`)).rows));

    console.log('\n=== A2) distinct policy_no under hd 452 ===');
    console.log(J((await c.query(`SELECT policy_no, COUNT(*)::int members FROM tx_rig_est_pol_mem WHERE rig_est_hd_id=452 GROUP BY policy_no ORDER BY policy_no`)).rows));

    // B) pol_mem rows for GL5557 under hd 452 — the per-member layer breakdown
    console.log('\n=== B) pol_mem GL5557 under hd 452 (layer prem + ri_prem + percent_re) ===');
    console.log(J((await c.query(`
      SELECT rig_est_pol_mem_id, cer_no, age, sex, condition_id, percent_re, ri_com_rate,
             l1_per, l2_per, l3_per, l1_min, l1_max, l2_min, l2_max, l3_min, l3_max,
             sum_ins_life, l1_ins_life, l2_ins_life, l3_ins_life,
             l1_prem_life, l2_prem_life, l3_prem_life, sum_all_prem_life,
             l1_ri_prem_life, l2_ri_prem_life, l3_ri_prem_life, sum_ri_prem_life,
             l1_prem_acc, l2_prem_acc, l3_prem_acc, l1_ri_prem_acc, l2_ri_prem_acc, l3_ri_prem_acc, sum_ri_prem_acc
      FROM tx_rig_est_pol_mem WHERE rig_est_hd_id=452 AND policy_no='GL5557' ORDER BY cer_no`)).rows));

    // C) confirm policy_dt for GL5557 (output) again for side-by-side
    console.log('\n=== C) policy_dt GL5557 (hd 452) ===');
    console.log(J((await c.query(`
      SELECT pd.level, pd.ri_prem_life, pd.ri_prem_acc
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE ph.rig_est_hd_id=452 AND pd.policy_no='GL5557' ORDER BY pd.level`)).rows));

    // D) is staging process_hd 14587 the source? check tx_rig_process_hd row + timing
    console.log('\n=== D) tx_rig_process_hd 14587 (staging run that produced prem_layer) ===');
    console.log(J((await c.query(`SELECT * FROM tx_rig_process_hd WHERE rig_process_hd_id=14587`)).rows));

    // E) all stg member rows for GL5557 with their process_hd (to see if a fuller set exists / overwrite)
    console.log('\n=== E) stg_est_inforce_member GL5557 all process_hd ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n, SUM(prem_life)::numeric tot_life_prem, SUM(sum_insured_life)::numeric tot_life_sa
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5557' GROUP BY rig_process_hd_id, period`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

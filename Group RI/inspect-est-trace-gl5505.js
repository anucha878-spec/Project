const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) SNAPSHOT: test certs present now? + backfilled values propagated?
    console.log('=== 1) tx_est_snap_cert_inforce : test certs 00701-708 ===');
    console.log(J((await c.query(`
      SELECT cer_no, policy_year, tax_year, lot_no, status, life_insur, acc_insur, tpd_insur,
             life_prem, acc_prem, sum_life_prem, sum_acc_prem, sum_total_prem, ipd_prem, cust_code
      FROM tx_est_snap_cert_inforce
      WHERE policy_no='GL5505' AND cer_no BETWEEN '00701' AND '00708' ORDER BY cer_no`)).rows));

    // 2) STAGING inforce_member
    console.log('\n=== 2) tx_stg_est_inforce_member : test certs ===');
    console.log(J((await c.query(`
      SELECT cer_no, policy_year, age, sex, sum_insured_life, sum_insured_accident, sum_insured_tpd,
             prem_life, prem_acc, prem_tpd, prem_ipd, prem_opd, prem_dental, rate_type, treaty_code
      FROM tx_stg_est_inforce_member
      WHERE policy_no='GL5505' AND cer_no BETWEEN '00701' AND '00708' ORDER BY cer_no`)).rows));

    // 3) STAGING prem_layer : GL5505 layer breakdown
    console.log('\n=== 3) tx_stg_est_prem_layer : GL5505 by level ===');
    console.log(J((await c.query(`
      SELECT level, life_insure, accident_insure, tpd_insure,
             life_prem_rate, accident_prem_rate, life_prem, accident_prem, tpd_prem, ipd_prem, opd_prem, dental_prem
      FROM tx_stg_est_prem_layer WHERE policy_no='GL5505' ORDER BY level`)).rows));

    // 4) STAGING tpd_claim : 00708
    console.log('\n=== 4) tx_stg_est_tpd_claim : GL5505 / 00708 ===');
    console.log(J((await c.query(`
      SELECT certific_cust_no, attn_age, tpd_insur_request, claim_tpd, total_claim, claim_type, life_insur, claim_cause
      FROM tx_stg_est_tpd_claim WHERE policy_no='GL5505'`)).rows));

    // 5) EST pol_mem : GL5505 layer mem/ins/prem rollup
    console.log('\n=== 5) tx_rig_est_pol_mem : GL5505 (key layer rollups) ===');
    console.log(J((await c.query(`
      SELECT policy_no, policy_year,
             l1_mem_life, l2_mem_life, l3_mem_life, sum_mem_life,
             l1_mem_acc, l2_mem_acc, l3_mem_acc, sum_mem_acc,
             l1_ins_life, l2_ins_life, l3_ins_life,
             sum_all_prem_life, sum_all_prem_acc, sum_ri_prem_life, sum_ri_prem_acc, tot_prem,
             claim_tpd, claim_life, tot_claim
      FROM tx_rig_est_pol_mem WHERE policy_no='GL5505'`)).rows));

    // 6) BDR : GL5505
    console.log('\n=== 6) tx_rig_est_bdr : GL5505 ===');
    console.log(J((await c.query(`
      SELECT policy_no, period, policy_year, ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_tot,
             ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tot,
             ri_claim_life, ri_claim_add, ri_claim_tpd, ri_claim_tot
      FROM tx_rig_est_bdr WHERE policy_no='GL5505' ORDER BY period, policy_year`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

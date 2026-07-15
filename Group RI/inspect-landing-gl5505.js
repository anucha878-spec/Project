const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== landing_policy GL5505 (rate_flag) ===');
    console.log(J((await c.query(`SELECT rig_v_policy_id, rig_process_hd_id, period, policy_no, policy_year, rate_flag, life_prem_rate, acc_prem_rate, life_prem, acc_prem, policy_status FROM tx_rig_landing_policy WHERE policy_no='GL5505'`)).rows));

    console.log('\n=== landing_cert_inforce GL5505 sample (3) + max cer_no ===');
    console.log(J((await c.query(`SELECT rig_v_pol_inforce_id, rig_process_hd_id, period, cer_no, age, sex, life_insur, acc_insur, tpd_insur, life_prem, acc_prem, tpd_prem, total_prem, policy_year, status_member, effect_date, doc_no, comp_code, company_code, re_insure_no FROM tx_rig_landing_cert_inforce WHERE policy_no='GL5505' ORDER BY cer_no LIMIT 3`)).rows));
    console.log('max cer_no:', J((await c.query(`SELECT MAX(cer_no) mx, COUNT(*)::int n FROM tx_rig_landing_cert_inforce WHERE policy_no='GL5505'`)).rows));

    console.log('\n=== landing_prem_rate GL5505 sample (5) ===');
    console.log(J((await c.query(`SELECT rig_v_rate_id, rig_process_hd_id, period, policy_no, policy_year, prem_rate_table_code, prem_rate_table_name, prem_rate_table_type, prem_rate_table_kind, value_age_or_class, value_gender, value_life, value_acc, value_tpd, status FROM tx_rig_landing_prem_rate WHERE policy_no='GL5505' ORDER BY value_age_or_class LIMIT 5`)).rows));

    console.log('\n=== claimtpd: a valid proc/period (any policy) for period 202605 ===');
    console.log(J((await c.query(`SELECT rig_process_hd_id, period, COUNT(*)::int n FROM tx_rig_landing_claimtpd GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 5`)).rows));

    console.log('\n=== process_hd rows for GL5505 landing procs (verify exist) ===');
    console.log(J((await c.query(`SELECT rig_process_hd_id, process_code, period, treaty_code, status FROM tx_rig_process_hd WHERE rig_process_hd_id IN (14336,14342,14350) ORDER BY rig_process_hd_id`)).rows));

    console.log('\n=== max PKs ===');
    console.log(J((await c.query(`SELECT
      (SELECT MAX(rig_v_pol_inforce_id) FROM tx_rig_landing_cert_inforce) max_cert,
      (SELECT MAX(rig_v_clm_tpd_id) FROM tx_rig_landing_claimtpd) max_tpd,
      (SELECT MAX(rig_v_rate_id) FROM tx_rig_landing_prem_rate) max_rate`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

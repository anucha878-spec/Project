const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== Real GL5505 cert rows: per-row prem vs sum_* + dates (exclude test) ===');
    console.log(J((await c.query(`
      SELECT cer_no, period, policy_year, tax_year, lot_no, status, count_of_day, med_rate,
             effect_date, change_date, period_date, promise_date,
             life_insur, acc_insur, tpd_insur,
             life_prem, acc_prem, tpd_prem, total_prem,
             sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem, cust_code
      FROM tx_rig_landing_cert_inforce
      WHERE policy_no='GL5505' AND (created_by IS NULL OR created_by <> 'QA_TC_CR1_010_018')
      ORDER BY cer_no LIMIT 4`)).rows));

    console.log('\n=== Does sum_* = per-policy group total? compare row vs group SUM by period ===');
    console.log(J((await c.query(`
      SELECT period, tax_year,
             COUNT(*)::int n,
             SUM(life_prem) grp_life, SUM(acc_prem) grp_acc, SUM(tpd_prem) grp_tpd, SUM(total_prem) grp_total,
             MIN(sum_life_prem) min_sumlife, MAX(sum_life_prem) max_sumlife,
             MIN(sum_total_prem) min_sumtot, MAX(sum_total_prem) max_sumtot
      FROM tx_rig_landing_cert_inforce
      WHERE policy_no='GL5505' AND (created_by IS NULL OR created_by <> 'QA_TC_CR1_010_018')
      GROUP BY period, tax_year ORDER BY period`)).rows));

    console.log('\n=== Is sum_total = sum_life+sum_acc+sum_tpd on each row? (sample distinct combos) ===');
    console.log(J((await c.query(`
      SELECT DISTINCT sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
             (sum_life_prem+sum_acc_prem+sum_tpd_prem) AS calc_total
      FROM tx_rig_landing_cert_inforce
      WHERE policy_no='GL5505' AND sum_total_prem IS NOT NULL LIMIT 8`)).rows));

    console.log('\n=== claimtpd: full real rows (the 6 missing cols in context) ===');
    console.log(J((await c.query(`
      SELECT policy_no, policy_year, certific_cust_no, claim_status,
             policy_code, prod_claim_code, tpd_prod_code, loss_ratio, receive_no, receive_date,
             accident_date, consider_date, approve_date, pay_date, tpd_insur, approve_tpd_insur, amount
      FROM tx_rig_landing_claimtpd
      WHERE created_by IS NULL OR created_by <> 'QA_TC_CR1_010_018'
      ORDER BY rig_v_clm_tpd_id DESC LIMIT 5`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

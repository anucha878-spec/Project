const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const J = x => JSON.stringify(x, null, 1);
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:4});

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // A) policy_hd mode + runs for GL5505
    console.log('=== A) GL5505 est_policy_hd (mode? + runs) ===');
    console.log(J((await c.query(`
      SELECT ph.rig_est_policy_hd_id, ph.rig_est_hd_id, hd.closing_period, hd.status, hd.ri_method,
             ph.period, ph.policy_year, ph.mode_pay, ph.created_date
      FROM tx_rig_est_policy_hd ph LEFT JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
      WHERE ph.policy_no='GL5505' ORDER BY ph.created_date DESC LIMIT 12`)).rows));

    // B) policy_dt history for GL5505 (L1/L2/L3 ri life+acc)
    console.log('\n=== B) GL5505 policy_dt history (per hd) ===');
    console.log(J((await c.query(`
      SELECT ph.rig_est_hd_id, ph.period, pd.level, pd.ri_prem_life, pd.ri_prem_acc, pd.created_date
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE pd.policy_no='GL5505' ORDER BY pd.created_date DESC, pd.level LIMIT 24`)).rows));

    // C) prem_layer GL5505 (full, with extras + rates)
    console.log('\n=== C) GL5505 prem_layer (proc 14587) ===');
    console.log(J((await c.query(`
      SELECT level, life_insure, accident_insure, life_prem, life_extra_prem, accident_prem, accident_extra_prem,
             life_prem_rate, accident_prem_rate, amount_life
      FROM tx_stg_est_prem_layer WHERE policy_no='GL5505' ORDER BY level`)).rows));

    // D) member-level cert_inforce for GL5505 — by life-band, with rates + extras
    console.log('\n=== D) GL5505 cert_inforce members by life-band ===');
    console.log(J((await c.query(`
      SELECT CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2' ELSE 'L3' END band,
             COUNT(*)::int n, SUM(life_insur)::numeric sa_life, SUM(life_prem)::numeric life_prem, SUM(life_e1_prem)::numeric life_extra,
             SUM(acc_insur)::numeric sa_acc, SUM(acc_prem)::numeric acc_prem
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505' GROUP BY 1 ORDER BY 1`)).rows));

    // E) the specific test members in L2/L3 bands (SA>5M) — per member rate
    console.log('\n=== E) GL5505 members with life SA > 5M (L2/L3 band) — per-member ===');
    console.log(J((await c.query(`
      SELECT cer_no, age, sex, life_insur, life_prem, life_e1_prem,
             ROUND((life_prem/NULLIF(life_insur,0)*1000)::numeric,4) implied_rate_from_prem,
             acc_insur, acc_prem, created_by
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505' AND life_insur>5000000 ORDER BY life_insur`)).rows));

    // F) member rates from inforce_member (prem_rate_life) for those members
    console.log('\n=== F) GL5505 inforce_member rates for SA>5M members ===');
    console.log(J((await c.query(`
      SELECT cer_no, sum_insured_life, prem_rate_life, prem_extra_life, prem_life, sum_insured_accident, prem_rate_acc, prem_acc, rate_type
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5505' AND sum_insured_life>5000000 ORDER BY sum_insured_life`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

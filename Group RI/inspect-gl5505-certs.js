// Read-only: per-cert breakdown of GL5505 (est_snap_cert_inforce + act side + members/layers)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) summary of GL5505 certs (estimate side)
    console.log('=== GL5505 est_snap_cert_inforce SUMMARY ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int certs,
             COUNT(DISTINCT cer_no)::int distinct_cer,
             SUM(life_insur)::numeric sum_life_insur,
             SUM(acc_insur)::numeric  sum_acc_insur,
             SUM(life_prem)::numeric  sum_life_prem,
             SUM(acc_prem)::numeric   sum_acc_prem,
             SUM(total_prem)::numeric sum_total_prem,
             MIN(age) min_age, MAX(age) max_age
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'
      GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id`)).rows));

    // 2) age band distribution (to see >70 etc.)
    console.log('\n=== age bands ===');
    console.log(J((await c.query(`
      SELECT CASE WHEN age IS NULL THEN 'null' WHEN age>70 THEN '>70' WHEN age>=60 THEN '60-70'
                  WHEN age>=40 THEN '40-59' WHEN age>=20 THEN '20-39' ELSE '<20' END AS band,
             COUNT(*)::int n, SUM(life_insur)::numeric life_sa, SUM(acc_insur)::numeric acc_sa
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'
      GROUP BY 1 ORDER BY 1`)).rows));

    // 3) per-cert detail sample (first 25 rows)
    console.log('\n=== per-cert detail (first 25 of 651) ===');
    console.log(J((await c.query(`
      SELECT cer_no, age, sex, med_rate,
             life_insur, acc_insur, med_insur, tpd_insur,
             life_prem, acc_prem, med_acc_prem, tpd_prem, total_prem,
             effect_date, end_date, status_member
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'
      ORDER BY cer_no LIMIT 25`)).rows));

    // 4) coverage shape: how many certs have each coverage > 0
    console.log('\n=== coverage presence (certs with >0) ===');
    console.log(J((await c.query(`
      SELECT
        SUM((life_insur>0)::int)::int has_life,
        SUM((acc_insur>0)::int)::int  has_acc,
        SUM((med_insur>0)::int)::int  has_med,
        SUM((tpd_insur>0)::int)::int  has_tpd,
        SUM((life_prem>0)::int)::int  prem_life_gt0,
        SUM((acc_prem>0)::int)::int   prem_acc_gt0
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'`)).rows));

    // 5) sex breakdown
    console.log('\n=== sex breakdown ===');
    console.log(J((await c.query(`SELECT sex, COUNT(*)::int n FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505' GROUP BY sex ORDER BY sex`)).rows));

    // 6) act side existing?
    console.log('\n=== GL5505 act_snap_cert_inforce existing ===');
    console.log(J((await c.query(`SELECT COUNT(*)::int n FROM tx_act_snap_cert_inforce WHERE policy_no='GL5505'`)).rows));

    // 7) duplicates of cer_no (members appearing multiple times)?
    console.log('\n=== cer_no with >1 row (top 10) ===');
    console.log(J((await c.query(`
      SELECT cer_no, COUNT(*)::int n FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'
      GROUP BY cer_no HAVING COUNT(*)>1 ORDER BY n DESC LIMIT 10`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

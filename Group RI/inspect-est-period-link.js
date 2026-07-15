const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // A) prem_layer GL5505: which period/process?
    console.log('=== A) tx_stg_est_prem_layer GL5505: period/process/created_by ===');
    console.log(J((await c.query(`SELECT rig_process_hd_id, period, level, created_by, created_date
      FROM tx_stg_est_prem_layer WHERE policy_no='GL5505' ORDER BY level`)).rows));

    // B) inforce_member: does GL5505 exist at all? what cer_no format/period?
    console.log('\n=== B) tx_stg_est_inforce_member GL5505: count + sample cer_no ===');
    console.log(J((await c.query(`SELECT period, rig_process_hd_id, COUNT(*)::int n, MIN(cer_no) mn, MAX(cer_no) mx
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5505' GROUP BY period, rig_process_hd_id ORDER BY period`)).rows));
    console.log('   any cer >= 00700 ?:', J((await c.query(`SELECT cer_no, period, prem_life, prem_acc FROM tx_stg_est_inforce_member
      WHERE policy_no='GL5505' AND cer_no >= '00700' ORDER BY cer_no LIMIT 12`)).rows));

    // C) tpd_claim: any GL5505 / 00708 anywhere?
    console.log('\n=== C) tx_stg_est_tpd_claim: GL5505 or certif 00708 (any policy) ===');
    console.log(J((await c.query(`SELECT policy_no, certific_cust_no, period, rig_process_hd_id, claim_tpd, total_claim
      FROM tx_stg_est_tpd_claim WHERE policy_no='GL5505' OR certific_cust_no='00708' ORDER BY period`)).rows));

    // D) pol_mem: distinct periods; GL5505 under policy_no OR policy_code
    console.log('\n=== D) tx_rig_est_pol_mem: periods present + GL5505 by policy_no/policy_code ===');
    console.log('   distinct periods:', J((await c.query(`SELECT period, COUNT(*)::int n FROM tx_rig_est_pol_mem GROUP BY period ORDER BY period`)).rows));
    console.log('   GL5505 (policy_no):', (await c.query(`SELECT COUNT(*)::int n FROM tx_rig_est_pol_mem WHERE policy_no='GL5505'`)).rows[0].n);
    console.log('   GL5505 (policy_code):', (await c.query(`SELECT COUNT(*)::int n FROM tx_rig_est_pol_mem WHERE policy_code='GL5505'`)).rows[0].n);

    // E) BDR GL5505 all periods + closing_period + non-zero check
    console.log('\n=== E) tx_rig_est_bdr GL5505: all periods (incl closing) + totals ===');
    console.log(J((await c.query(`SELECT period, closing_period, policy_year, COUNT(*)::int n,
      SUM(ri_prem_1st_tot+ri_prem_renew_tot)::numeric prem_tot, SUM(ri_claim_tot)::numeric claim_tot, MAX(created_date) last_created
      FROM tx_rig_est_bdr WHERE policy_no='GL5505' GROUP BY period, closing_period, policy_year ORDER BY period, policy_year`)).rows));

    // F) est_hd: estimate run headers — which period/treaty/status, most recent
    console.log('\n=== F) tx_rig_est_hd: recent estimate runs ===');
    const hdCols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_name='tx_rig_est_hd' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('   cols:', J(hdCols));
    console.log(J((await c.query(`SELECT * FROM tx_rig_est_hd ORDER BY rig_est_hd_id DESC LIMIT 6`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

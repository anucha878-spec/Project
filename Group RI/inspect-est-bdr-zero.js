const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // E) BDR GL5505 with created_date / hd link — old vs new?
    console.log('=== E) tx_rig_est_bdr GL5505: period/closing/created + prem ===');
    console.log(J((await c.query(`SELECT rig_est_hd_id, period, closing_period, policy_year, ri_com_date,
      ri_prem_1st_life, ri_prem_renew_life, ri_prem_renew_add, ri_claim_tpd, created_by, created_date
      FROM tx_rig_est_bdr WHERE policy_no='GL5505' ORDER BY created_date, period, policy_year`)).rows));

    // F) est_hd recent runs
    console.log('\n=== F) tx_rig_est_hd recent ===');
    const hdCols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_name='tx_rig_est_hd' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('   cols:', J(hdCols));
    console.log(J((await c.query(`SELECT * FROM tx_rig_est_hd ORDER BY rig_est_hd_id DESC LIMIT 8`)).rows));

    // G) which rig_est_hd_id does process 14430 / period 202604 correspond to? trace via prem_layer's run
    console.log('\n=== G) process_hd 14430 row (tx_rig_process_hd) ===');
    const phCols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_name='tx_rig_process_hd' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('   cols:', J(phCols));
    console.log(J((await c.query(`SELECT * FROM tx_rig_process_hd WHERE rig_process_hd_id IN (14430,14342,14340)`)).rows));

    // H) ALL staging tables: presence of process 14430 (what did this estimate run populate?)
    console.log('\n=== H) rows per staging/result table for process_hd=14430 ===');
    for (const t of ['tx_stg_est_all_policy','tx_stg_est_policy_1y','tx_stg_est_inforce_member','tx_stg_est_prem_layer','tx_stg_est_tpd_claim','tx_stg_est_death_claim','tx_stg_est_health_claim']) {
      try { console.log('  '+t+':', (await c.query(`SELECT COUNT(*)::int n FROM ${t} WHERE rig_process_hd_id=14430`)).rows[0].n); }
      catch(e){ console.log('  '+t+': ERR '+e.message); }
    }

    // I) inforce_member: does it have ANY rows for process 14430? what policies?
    console.log('\n=== I) tx_stg_est_inforce_member process 14430: policies + GL5505 ===');
    console.log(J((await c.query(`SELECT policy_no, COUNT(*)::int n FROM tx_stg_est_inforce_member WHERE rig_process_hd_id=14430 GROUP BY policy_no ORDER BY n DESC LIMIT 10`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

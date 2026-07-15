const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) GH5342 presence across pipeline (period per table)
    console.log('=== 1) GH5342 presence per pipeline table ===');
    const tabs = [
      'tx_rig_landing_cert_inforce','tx_est_snap_cert_inforce','tx_stg_est_inforce_member',
      'tx_stg_est_prem_layer','tx_stg_est_all_policy','tx_rig_est_policy_hd'];
    for (const t of tabs) {
      try {
        const r = await c.query(`SELECT period::text period, COUNT(*)::int n FROM ${t} WHERE policy_no='GH5342' GROUP BY period ORDER BY period`);
        console.log(`  ${t}: ${r.rows.length? r.rows.map(x=>`p${x.period}:${x.n}`).join(' '):'(none)'}`);
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    // 2) prem_layer proc 14587 : how many distinct policies vs hd452's 7
    console.log('\n=== 2) prem_layer proc 14587 distinct policies ===');
    console.log(J((await c.query(`SELECT COUNT(DISTINCT policy_no)::int policies, COUNT(*)::int rows FROM tx_stg_est_prem_layer WHERE rig_process_hd_id=14587`)).rows));
    console.log('  is GH5342 in proc 14587?', J((await c.query(`SELECT DISTINCT policy_no FROM tx_stg_est_prem_layer WHERE rig_process_hd_id=14587 AND policy_no='GH5342'`)).rows));

    // 3) est_hd for period 202604 GIB — list with record counts + which policies
    console.log('\n=== 3) est_hd closing_period=202604 treaty GIB (all) ===');
    console.log(J((await c.query(`
      SELECT rig_est_hd_id, status, sum_records, created_date FROM tx_rig_est_hd
      WHERE closing_period=202604 AND cf_treaty_id=2 ORDER BY created_date DESC LIMIT 15`)).rows));

    // 4) which policies are in est run hd 452 (and the latest GIB 202604 runs)
    console.log('\n=== 4) distinct policies in recent GIB 202604 est runs ===');
    console.log(J((await c.query(`
      SELECT ph.rig_est_hd_id, COUNT(DISTINCT ph.policy_no)::int n_policies, STRING_AGG(DISTINCT ph.policy_no, ',' ORDER BY ph.policy_no) policies
      FROM tx_rig_est_policy_hd ph JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
      WHERE hd.closing_period=202604 AND hd.cf_treaty_id=2
      GROUP BY ph.rig_est_hd_id ORDER BY ph.rig_est_hd_id DESC LIMIT 8`)).rows));

    // 5) errors for GH5342
    console.log('\n=== 5) tx_stg_error_data for GH5342 ===');
    const errcols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_stg_error_data' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('  cols:', errcols.join(', '));
    console.log(J((await c.query(`SELECT * FROM tx_stg_error_data WHERE policy_no='GH5342' ORDER BY 1 DESC LIMIT 10`)).rows));

    // 6) GH5342 in all_policy staging (the gate to est result) — status fields
    console.log('\n=== 6) tx_stg_est_all_policy : GH5342 (if present) ===');
    console.log(J((await c.query(`SELECT * FROM tx_stg_est_all_policy WHERE policy_no='GH5342' LIMIT 3`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

// Inspect schema + data coverage for #82686 rate test. Read-only.
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== connection ok ===');
    for (const t of ['tx_stg_act_prem_layer','tx_stg_act_inforce_member','tx_stg_est_prem_layer','tx_stg_est_inforce_member']) {
      const cols = (await c.query(
        `SELECT column_name, data_type FROM information_schema.columns WHERE table_name=$1 ORDER BY ordinal_position`, [t])).rows;
      console.log(`\n--- ${t} (${cols.length} cols) ---`);
      console.log(cols.map(x=>x.column_name+':'+x.data_type).join(', '));
    }
    console.log('\n=== effective_date coverage (tx_stg_act_prem_layer) ===');
    console.log(J((await c.query(
      `SELECT count(*) total, min(effective_date) mn, max(effective_date) mx,
              count(*) FILTER (WHERE effective_date >= DATE '2026-04-09') ge_cutoff
       FROM tx_stg_act_prem_layer`)).rows));
    for (const t of ['tx_stg_act_prem_layer','tx_stg_act_inforce_member']) {
      console.log(`\n=== ${t}: GL5557 ? ===`);
      console.log(J((await c.query(`SELECT count(*) FROM ${t} WHERE policy_no='GL5557'`)).rows));
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

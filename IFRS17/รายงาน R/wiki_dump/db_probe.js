// Probe both EDW databases: connectivity, version, schemas, and table counts
// per schema. Also list "รายงาน R"-relevant table names (ms_rcc_group_type,
// cf_r*_gl_mapping, tx_rcc_output_r*, tx_adw_*_detail).

const { Client } = require('pg');

const HOST = '11.100.8.51';
const PORT = 5432;

const conns = [
  { name: 'adwetl', user: 'adwetl', database: 'adwetl' },
  { name: 'adw',    user: 'adw',    database: 'adw' },
];

const PROBES = [
  { label: 'server_version',  sql: 'SHOW server_version' },
  { label: 'current_db/user', sql: 'SELECT current_database() AS db, current_user AS usr, version() AS v' },
  { label: 'schemas',         sql: `SELECT schema_name FROM information_schema.schemata
                                     WHERE schema_name NOT IN ('pg_catalog','information_schema','pg_toast') ORDER BY schema_name` },
  { label: 'tables_per_schema', sql: `SELECT table_schema, COUNT(*)::int AS n
                                       FROM information_schema.tables
                                       WHERE table_type='BASE TABLE'
                                         AND table_schema NOT IN ('pg_catalog','information_schema')
                                       GROUP BY table_schema ORDER BY n DESC` },
  { label: 'รายงาน R tables', sql: `SELECT table_schema, table_name
                                     FROM information_schema.tables
                                     WHERE table_schema NOT IN ('pg_catalog','information_schema')
                                       AND (
                                         table_name ILIKE 'ms_rcc_group_type%'
                                         OR table_name ILIKE 'cf_r%_gl_mapping'
                                         OR table_name ILIKE 'tx_rcc_output_r%'
                                         OR table_name ILIKE 'tx_rcc_reconcile_r%'
                                         OR table_name ILIKE 'tx_rcc_adj_r%'
                                         OR table_name ILIKE 'tx_rcc_landing_r13%'
                                         OR table_name ILIKE 'tx_exp_proc_output%'
                                         OR table_name = 'tx_adw_account_head'
                                       )
                                     ORDER BY table_schema, table_name LIMIT 100` },
];

(async () => {
  for (const c of conns) {
    console.log('\n========================================');
    console.log(`[${c.name}] postgres://${c.user}@${HOST}:${PORT}/${c.database}`);
    console.log('========================================');
    const client = new Client({
      host: HOST, port: PORT, user: c.user, password: 'nopass', database: c.database,
      connectionTimeoutMillis: 15000, statement_timeout: 30000,
    });
    try {
      await client.connect();
      for (const p of PROBES) {
        try {
          const r = await client.query(p.sql);
          console.log(`\n--- ${p.label} (${r.rowCount} rows) ---`);
          if (r.rows.length <= 30) {
            for (const row of r.rows) console.log('  ', JSON.stringify(row));
          } else {
            for (const row of r.rows.slice(0, 30)) console.log('  ', JSON.stringify(row));
            console.log(`   ... +${r.rows.length - 30} more`);
          }
        } catch (e) {
          console.log(`--- ${p.label} ERROR: ${e.message}`);
        }
      }
    } catch (e) {
      console.log('CONNECT FAILED:', e.message);
    } finally {
      try { await client.end(); } catch {}
    }
  }
})();

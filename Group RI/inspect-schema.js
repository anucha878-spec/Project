const { Client } = require('pg');

const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:8000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const tables = await c.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type='BASE TABLE'
        AND table_schema NOT IN ('pg_catalog','information_schema')
      ORDER BY table_schema, table_name`);
    console.log('=== ALL TABLES ===');
    tables.rows.forEach(r => console.log(`${r.table_schema}.${r.table_name}`));

    console.log('\n=== LANDING/PROCESS TABLE COUNTS ===');
    const landing = tables.rows.filter(r =>
      /landing|process_log|ms_/i.test(r.table_name)
    );
    for (const t of landing) {
      try {
        const q = await c.query(`SELECT COUNT(*)::bigint AS n FROM "${t.table_schema}"."${t.table_name}"`);
        console.log(`${t.table_schema}.${t.table_name}: ${q.rows[0].n}`);
      } catch (e) { console.log(`${t.table_schema}.${t.table_name}: ERR ${e.message}`); }
    }

    console.log('\n=== VIEWS ===');
    const views = await c.query(`
      SELECT table_schema, table_name FROM information_schema.views
      WHERE table_schema NOT IN ('pg_catalog','information_schema')
      ORDER BY table_schema, table_name`);
    views.rows.forEach(r => console.log(`${r.table_schema}.${r.table_name}`));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

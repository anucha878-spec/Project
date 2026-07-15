// Read-only: discover all Landing-group tables + columns + GL5505 presence
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const tabs = (await c.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema='public' AND table_name ILIKE 'tx_rig_landing%'
      ORDER BY table_name`)).rows.map(r=>r.table_name);
    console.log('=== Landing tables ===');
    console.log(J(tabs));

    for (const t of tabs) {
      const cols = (await c.query(`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns WHERE table_schema='public' AND table_name=$1
        ORDER BY ordinal_position`,[t])).rows;
      console.log(`\n===== ${t} (${cols.length} cols) =====`);
      console.log(cols.map(x=>`${x.column_name}:${x.data_type}${x.is_nullable==='NO'?'!':''}${x.column_default?(' ='+x.column_default):''}`).join('\n  '));
      // GL5505 presence + distinct process/period if policy_no exists
      const hasPol = cols.some(x=>x.column_name==='policy_no');
      if (hasPol) {
        try {
          const g = await c.query(`SELECT COUNT(*)::int n FROM ${t} WHERE policy_no='GL5505'`);
          const pp = await c.query(`SELECT DISTINCT rig_process_hd_id, period FROM ${t} WHERE policy_no='GL5505' LIMIT 5`).catch(()=>({rows:[]}));
          console.log(`  >> GL5505 rows: ${g.rows[0].n}  proc/period: ${JSON.stringify(pp.rows)}`);
        } catch(e){ console.log('  >> GL5505 check err:', e.message); }
      }
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

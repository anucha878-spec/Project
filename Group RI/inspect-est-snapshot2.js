// Wider search for snapshot tables
const { Client } = require('pg');

const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // All public tables
    const tabs = await c.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_type='BASE TABLE' AND table_schema='public'
      ORDER BY table_name`);
    const names = tabs.rows.map(r=>r.table_name);
    console.log(`TOTAL public tables: ${names.length}`);

    // Print groups
    const groups = {
      'ms_*': names.filter(n=>n.startsWith('ms_')),
      'tx_*': names.filter(n=>n.startsWith('tx_')),
      'tx_snap*': names.filter(n=>n.startsWith('tx_snap')),
      'tx_stg*': names.filter(n=>n.startsWith('tx_stg')),
      'tx_landing*/landing*': names.filter(n=>n.includes('landing')),
      'snapshot in name': names.filter(n=>n.includes('snap')),
      'policy in name': names.filter(n=>n.includes('policy')),
      'customer in name': names.filter(n=>n.includes('customer')),
      'company in name': names.filter(n=>n.includes('company')),
      'claim in name': names.filter(n=>n.includes('claim')),
      'cert/member': names.filter(n=>/cert|member/.test(n)),
    };
    for (const [k,v] of Object.entries(groups)){
      console.log(`\n[${k}] (${v.length})`);
      v.forEach(n => console.log('  '+n));
    }

    // Specifically check tx_snap_* and tx_landing_* counts/periods
    const snapTables = names.filter(n => /^tx_snap|^tx_landing|^ms_landing|^ms_snap/i.test(n));
    console.log(`\n=== COUNTS for snap/landing tables (${snapTables.length}) ===`);
    for (const t of snapTables){
      try {
        const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${t}"`);
        const periodCol = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND column_name ILIKE '%period%' LIMIT 1`, [t]);
        let pInfo = '';
        if (periodCol.rows.length){
          const pn = periodCol.rows[0].column_name;
          try {
            const pq = await c.query(`SELECT ${pn} p, COUNT(*)::int n FROM "${t}" GROUP BY ${pn} ORDER BY ${pn} DESC LIMIT 5`);
            pInfo = ` periods=[${pq.rows.map(x=>x.p+':'+x.n).join(', ')}]`;
          } catch(e){}
        }
        console.log(`  ${t}: ${cnt.rows[0].n}${pInfo}`);
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    // Confirm what EST_SNAPSHOT_01 and friends actually populate — see if we can find table name pattern in process log
    console.log('\n=== ms_rig_process registry (process_code mapping) ===');
    try {
      const reg = await c.query(`SELECT * FROM ms_rig_process WHERE process_code LIKE 'EST_SNAPSHOT_%' ORDER BY process_code LIMIT 30`);
      reg.rows.forEach(r => console.log(JSON.stringify(r)));
    } catch(e){ console.log('ms_rig_process ERR:', e.message); }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

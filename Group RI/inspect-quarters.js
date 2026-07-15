// Discover act_hd schema then compare quarters
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== tx_rig_act_hd columns ===');
    const cols = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_hd' ORDER BY ordinal_position`);
    console.log(cols.rows.map(r=>`${r.column_name}(${r.data_type})`).join(', '));

    console.log('\n=== Distinct quarter/period-like values on act_hd ===');
    // find period-like columns
    const periodCols = cols.rows.filter(r => /period|quarter|closing|cycle/i.test(r.column_name)).map(r=>r.column_name);
    console.log('Period-like columns:', periodCols);
    for (const pc of periodCols){
      try {
        const d = await c.query(`SELECT "${pc}" v, COUNT(*)::int n FROM tx_rig_act_hd GROUP BY "${pc}" ORDER BY "${pc}" DESC LIMIT 20`);
        console.log(`-- ${pc}:`);
        d.rows.forEach(r => console.log(`   ${r.v} : ${r.n}`));
      } catch(e){ console.log(`${pc} ERR: ${e.message}`); }
    }

    // act_hd by treaty (latest 30)
    console.log('\n=== act_hd latest 30 rows summary ===');
    const cn = cols.rows.map(r=>r.column_name);
    const treatyCol = cn.find(n=>/treaty/i.test(n)) || cn[0];
    const statusCol = cn.find(n=>n.toLowerCase()==='status') || null;
    const sql = `SELECT ${periodCols.map(p=>'"'+p+'"').join(', ')}${treatyCol?', "'+treatyCol+'"':''}${statusCol?', "'+statusCol+'"':''}, COUNT(*)::int n FROM tx_rig_act_hd GROUP BY ${periodCols.map(p=>'"'+p+'"').join(', ')}${treatyCol?', "'+treatyCol+'"':''}${statusCol?', "'+statusCol+'"':''} ORDER BY ${periodCols.map(p=>'"'+p+'" DESC').join(', ')} LIMIT 50`;
    try {
      const r = await c.query(sql);
      r.rows.forEach(x => console.log(JSON.stringify(x)));
    } catch(e){ console.log('summary ERR:', e.message); }

    console.log('\n=== tx_rig_process_hd period distinct (ACT_* only) ===');
    const proc = await c.query(`SELECT period, COUNT(*)::int runs, COUNT(*) FILTER (WHERE status='SUCCESS')::int s_ok, COUNT(*) FILTER (WHERE status<>'SUCCESS')::int s_err, COUNT(DISTINCT process_code)::int procs, COUNT(DISTINCT treaty_code)::int treaties FROM tx_rig_process_hd WHERE process_code LIKE 'ACT\\_%' ESCAPE '\\' GROUP BY period ORDER BY period DESC LIMIT 25`);
    proc.rows.forEach(r => console.log(`period=${r.period} runs=${r.runs} ok=${r.s_ok} err=${r.s_err} procs=${r.procs} treaties=${r.treaties}`));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

// Inspect ms_snapshot_est_* tables and EST_SNAPSHOT_* process history
const { Client } = require('pg');

const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) Snapshot tables (any naming with snapshot + est)
    const tabs = await c.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type='BASE TABLE'
        AND table_schema NOT IN ('pg_catalog','information_schema')
        AND (table_name ILIKE '%snapshot%est%'
          OR table_name ILIKE '%est%snapshot%'
          OR table_name ILIKE 'ms_snapshot_est%'
          OR table_name ILIKE 'tx_snap_est%'
          OR table_name ILIKE 'tx_snapshot_est%')
      ORDER BY table_name`);
    console.log('=== SNAPSHOT TABLES ===');
    for (const r of tabs.rows){
      const t = `${r.table_schema}.${r.table_name}`;
      try {
        const cnt = await c.query(`SELECT COUNT(*)::int n FROM ${t}`);
        // try get period column
        const periodCol = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema=$1 AND table_name=$2 AND column_name ILIKE '%period%' LIMIT 1`, [r.table_schema, r.table_name]);
        let periodInfo = '';
        if (periodCol.rows.length){
          const pn = periodCol.rows[0].column_name;
          const pq = await c.query(`SELECT ${pn} p, COUNT(*)::int n FROM ${t} GROUP BY ${pn} ORDER BY ${pn} DESC LIMIT 8`);
          periodInfo = ` | periods=[${pq.rows.map(x=>x.p+':'+x.n).join(', ')}]`;
        }
        console.log(`${t}: total=${cnt.rows[0].n}${periodInfo}`);
      } catch(e){ console.log(`${t}: ERR ${e.message}`); }
    }

    // 2) EST_SNAPSHOT process history
    console.log('\n=== EST_SNAPSHOT_* PROCESS HISTORY ===');
    try {
      const proc = await c.query(`
        SELECT process_code, COUNT(*)::int runs,
               COUNT(*) FILTER (WHERE status='SUCCESS')::int s_ok,
               COUNT(*) FILTER (WHERE status<>'SUCCESS')::int s_other,
               MIN(start_date) AS first_run, MAX(start_date) AS last_run,
               COALESCE(SUM(sum_record),0)::bigint total_rec
        FROM tx_rig_process_hd
        WHERE process_code LIKE 'EST_SNAPSHOT_%'
        GROUP BY process_code
        ORDER BY process_code`);
      for (const r of proc.rows){
        console.log(`${r.process_code}: runs=${r.runs} SUCCESS=${r.s_ok} other=${r.s_other} sum_rec=${r.total_rec} first=${r.first_run?.toISOString?.()||r.first_run} last=${r.last_run?.toISOString?.()||r.last_run}`);
      }
    } catch(e){ console.log('proc_hd ERR:', e.message); }

    // 3) Distinct periods seen in EST_SNAPSHOT runs
    console.log('\n=== EST_SNAPSHOT PERIODS ===');
    try {
      const per = await c.query(`
        SELECT period, COUNT(DISTINCT process_code)::int procs, COUNT(*)::int runs
        FROM tx_rig_process_hd
        WHERE process_code LIKE 'EST_SNAPSHOT_%'
        GROUP BY period
        ORDER BY period DESC
        LIMIT 12`);
      for (const r of per.rows){
        console.log(`period=${r.period} procs=${r.procs} runs=${r.runs}`);
      }
    } catch(e){ console.log('periods ERR:', e.message); }

    // 4) Sample columns on a few snapshot tables
    console.log('\n=== SAMPLE COLUMNS (top 5 snapshot tables) ===');
    for (const r of tabs.rows.slice(0,8)){
      try {
        const cols = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema=$1 AND table_name=$2 ORDER BY ordinal_position`, [r.table_schema, r.table_name]);
        console.log(`-- ${r.table_name} (${cols.rows.length} cols): ${cols.rows.slice(0,12).map(x=>x.column_name).join(', ')}${cols.rows.length>12?', ...':''}`);
      } catch(e){}
    }

    // 5) Also check any ms_landing_* and ms_process_log tables (per memory)
    console.log('\n=== ms_landing / ms_snapshot / ms_staging / ms_process_log TABLES ===');
    const ms = await c.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_name LIKE 'ms\\_%' ESCAPE '\\'
      ORDER BY table_name`);
    for (const r of ms.rows.slice(0,40)){
      try {
        const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${r.table_schema}"."${r.table_name}"`);
        console.log(`${r.table_schema}.${r.table_name}: ${cnt.rows[0].n}`);
      } catch(e){}
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

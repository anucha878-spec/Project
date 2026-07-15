// Retest CR#6 (Redmine #63684) — confirmed via Redmine that Dev created NEW tables/columns
// Source: https://redmine.ochi.link/issues/63684 (Resolved 96%)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // === Check NEW tables created by Dev (from Redmine child tasks) ===
  console.log('=== 1. NEW snap tables for Premium Rate ===');
  const newTables = [
    'tx_rig_landing_prem_rate',
    'tx_est_snap_prem_rate',
    'tx_act_snap_prem_rate',
    'cf_rig_nob',
    'cf_lookup_catalog',
  ];
  for (const t of newTables) {
    const exists = await c.query(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_schema='public' AND table_name=$1
      ORDER BY ordinal_position
    `, [t]);
    if (exists.rowCount === 0) {
      console.log(`  ❌ ${t} — NOT FOUND`);
    } else {
      console.log(`  ✅ ${t} (${exists.rowCount} cols)`);
      exists.rows.forEach(r => console.log(`      ${r.column_name} (${r.data_type})`));
      const cnt = await c.query(`SELECT COUNT(*) AS n FROM ${t}`);
      console.log(`      → row count: ${cnt.rows[0].n}`);
    }
  }

  // === Check ALTER on existing tables (rate_flag, rate_type, avg_rate columns) ===
  console.log('\n\n=== 2. ALTER columns on existing tables ===');
  const altTables = [
    'tx_stg_est_inforce_member',
    'tx_stg_act_inforce_member',
    'tx_stg_est_all_policy',
    'tx_stg_act_all_policy',
    'tx_est_snap_policy',
    'tx_act_snap_policy',
    'tx_est_snap_cert_inforce',
    'tx_act_snap_cert_inforce',
  ];
  for (const t of altTables) {
    const r = await c.query(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_schema='public' AND table_name=$1
        AND (column_name ILIKE '%rate%' OR column_name ILIKE '%avg%'
          OR column_name ILIKE '%flag%' OR column_name ILIKE '%calc%'
          OR column_name ILIKE '%treaty%')
      ORDER BY ordinal_position
    `, [t]);
    console.log(`\n${t}:`);
    if (r.rowCount === 0) console.log('  (no rate/flag/avg cols)');
    r.rows.forEach(x => console.log(`  ${x.column_name} (${x.data_type})`));
  }

  // === Check Views ===
  console.log('\n\n=== 3. Views (RIG_View_Policy, RIG_View_PremiumRate) ===');
  const views = await c.query(`
    SELECT viewname FROM pg_views
    WHERE schemaname='public'
      AND (viewname ILIKE '%rig_view%' OR viewname ILIKE '%premiumrate%' OR viewname ILIKE '%prem_rate%')
    ORDER BY viewname
  `);
  views.rows.forEach(v => console.log(`  ✅ ${v.viewname}`));

  // === Member Layer Reconcile reports candidates ===
  console.log('\n=== 4. Member Layer Reconcile tables/views (CR#6 req 10-12) ===');
  const memLayer = await c.query(`
    SELECT table_name, table_type FROM information_schema.tables
    WHERE table_schema='public'
      AND (table_name ILIKE '%member%layer%' OR table_name ILIKE '%mem_layer%' OR table_name ILIKE '%memberlayer%')
    ORDER BY table_name
  `);
  if (memLayer.rowCount === 0) console.log('  (none yet)');
  memLayer.rows.forEach(v => console.log(`  ${v.table_type === 'VIEW' ? '👁️' : '📊'} ${v.table_name}`));

  // === rate_flag, rate_type distribution updated check ===
  console.log('\n\n=== 5. rate_flag distribution (after CR#6 deploy) ===');
  for (const t of ['tx_est_snap_policy','tx_act_snap_policy','tx_stg_est_all_policy','tx_stg_act_all_policy']) {
    try {
      const r = await c.query(`SELECT rate_flag, COUNT(*) AS n FROM ${t} GROUP BY rate_flag ORDER BY rate_flag`);
      console.log(`${t}:`); r.rows.forEach(row => console.log(`  rate_flag=${row.rate_flag} → ${row.n}`));
    } catch(e) { console.log(`${t}: ERROR ${e.message}`); }
  }

  // Check rate_type values in newly altered tables
  console.log('\n=== 6. rate_type distinct values ===');
  for (const t of ['tx_stg_est_inforce_member','tx_stg_act_inforce_member']) {
    try {
      const r = await c.query(`SELECT rate_type, COUNT(*) AS n FROM ${t} GROUP BY rate_type ORDER BY n DESC`);
      console.log(`${t}:`); r.rows.forEach(row => console.log(`  ${row.rate_type || '(null)'} → ${row.n}`));
    } catch(e) { console.log(`${t}: ${e.message}`); }
  }

  await c.end();
})();

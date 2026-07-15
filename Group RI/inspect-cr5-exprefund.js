// CR#5 Experience Refund + Investigation Expense — Redmine #63683 (Resolved 86%)
// Tables: tx_rig_landing_exprefund, tx_act_snap_exprefund, tx_stg_act_exp_refund
// New cols: claim_life, claim_add, claim_dismem
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // === 1. Check exprefund tables exist + cols ===
  console.log('=== 1. Experience Refund tables ===');
  const tables = ['tx_rig_landing_exprefund','tx_act_snap_exprefund','tx_stg_act_exp_refund'];
  for (const t of tables) {
    const r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`, [t]);
    if (r.rowCount === 0) { console.log(`  ❌ ${t} NOT FOUND`); continue; }
    console.log(`\n  ✅ ${t} (${r.rowCount} cols):`);
    r.rows.forEach(x => console.log(`      ${x.column_name} (${x.data_type})`));
    const cnt = await c.query(`SELECT COUNT(*) AS n FROM ${t}`);
    console.log(`      → ${cnt.rows[0].n} rows`);
  }

  // === 2. Check for claim_life/claim_add/claim_dismem on those tables ===
  console.log('\n\n=== 2. New CR#5 fields (claim_life/claim_add/claim_dismem) on any table ===');
  for (const col of ['claim_life','claim_add','claim_dismem','loss_carry_forward','loss_carried_forward','amount_paid','investigation_expense','legal_expense']) {
    const r = await c.query(`SELECT table_name FROM information_schema.columns WHERE table_schema='public' AND column_name=$1 ORDER BY table_name`, [col]);
    console.log(`  ${col}:`);
    r.rows.forEach(x => console.log(`    ${x.table_name}`));
  }

  // === 3. View RIG_View_ExpRefund (CR#5 #66725) ===
  console.log('\n=== 3. Views — search exprefund/exp_refund ===');
  const v = await c.query(`SELECT viewname FROM pg_views WHERE schemaname='public' AND (viewname ILIKE '%exprefund%' OR viewname ILIKE '%exp_refund%' OR viewname ILIKE '%refund%')`);
  v.rows.forEach(r => console.log(`  ${r.viewname}`));
  if (v.rowCount === 0) console.log('  (none — view may be in source GIB DB)');

  // === 4. Treaty Config — % Layer 1 Flat Rate for Investigation/Legal Expense ===
  console.log('\n=== 4. Treaty config tables ===');
  const cfg_tabs = await c.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND (table_name ILIKE 'cf_%treaty%' OR table_name ILIKE 'ms_treaty%' OR table_name ILIKE 'cf_treaty%' OR table_name ILIKE '%layer%' OR table_name ILIKE '%cede%') ORDER BY table_name`);
  cfg_tabs.rows.forEach(r => console.log(`  ${r.table_name}`));

  // === 5. Check sample data — Exp Refund per coverage ===
  console.log('\n=== 5. Sample Exp Refund data ===');
  for (const t of ['tx_stg_act_exp_refund','tx_act_snap_exprefund']) {
    try {
      const s = await c.query(`SELECT * FROM ${t} LIMIT 2`);
      console.log(`\n${t} sample row:`);
      if (s.rowCount === 0) console.log('  (empty)');
      else Object.entries(s.rows[0]).forEach(([k,v]) => console.log(`  ${k} = ${v}`));
    } catch(e) { console.log(`${t}: ${e.message}`); }
  }

  // === 6. Count rate_flag, status of exp refund records (positive/zero/negative) ===
  console.log('\n=== 6. Exp Refund value distribution (TC-CR1-027 — filter < 0) ===');
  try {
    // Try common column names
    for (const col of ['exp_refund','amount','value','exp_refund_amount']) {
      try {
        const r = await c.query(`SELECT CASE WHEN ${col} > 0 THEN '> 0' WHEN ${col} = 0 THEN '= 0' WHEN ${col} < 0 THEN '< 0' END AS bucket, COUNT(*) AS n FROM tx_stg_act_exp_refund GROUP BY bucket`);
        console.log(`Column ${col}:`);
        r.rows.forEach(row => console.log(`  ${row.bucket} → ${row.n}`));
        break;
      } catch(e) {}
    }
  } catch(e) { console.log('  Error: '+e.message); }

  await c.end();
})();

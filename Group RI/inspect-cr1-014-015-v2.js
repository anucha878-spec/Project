// TC-CR1-014: verify R17 from tx_stg_act_inforce_policy
// TC-CR1-015: verify against "Premium and Movement" report (DB-side counterpart)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // === TC-CR1-014: R17 source = tx_stg_act_inforce_policy ===
  console.log('=== TC-CR1-014 :: tx_stg_act_inforce_policy ===');
  const cols14 = await c.query(`
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_schema='public' AND table_name='tx_stg_act_inforce_policy'
    ORDER BY ordinal_position
  `);
  console.log(`Total cols: ${cols14.rowCount}`);
  cols14.rows.forEach(r => console.log(`  ${r.column_name} (${r.data_type})`));

  // Highlight rate/avg related
  const rateColsAct = cols14.rows.filter(x => /rate|flag|avg|average|type|cal/i.test(x.column_name));
  console.log('\n*** RATE/TYPE related columns ***');
  rateColsAct.forEach(x => console.log(`  ${x.column_name} (${x.data_type})`));

  // Sample row counts per period
  const cntAct = await c.query(`
    SELECT period_date, COUNT(*) AS n FROM tx_stg_act_inforce_policy
    GROUP BY period_date ORDER BY period_date DESC LIMIT 5
  `);
  console.log('\nRow counts per period:');
  cntAct.rows.forEach(r => console.log(`  ${r.period} → ${r.n}`));

  // Sample 2 rows
  console.log('\nSample 2 rows (latest period):');
  const sampleAct = await c.query(`SELECT * FROM tx_stg_act_inforce_policy ORDER BY period_date DESC LIMIT 2`);
  sampleAct.rows.forEach((r,i) => {
    console.log(`\nRow ${i+1}:`);
    Object.entries(r).forEach(([k,v]) => {
      if (v !== null && v !== '' && v !== 0 && v !== '0.0000' && v !== '0.00')
        console.log(`  ${k} = ${typeof v === 'object' ? JSON.stringify(v) : v}`);
    });
  });

  // Distinct values for any rate_type / rate_flag columns
  for (const col of rateColsAct) {
    if (col.data_type === 'character varying' || col.data_type === 'integer' || col.data_type === 'numeric') {
      try {
        const d = await c.query(`SELECT ${col.column_name} AS v, COUNT(*) AS n FROM tx_stg_act_inforce_policy GROUP BY ${col.column_name} ORDER BY n DESC LIMIT 10`);
        console.log(`\nDistinct values of ${col.column_name}:`);
        d.rows.forEach(r => console.log(`  ${r.v} → ${r.n}`));
      } catch(e) {}
    }
  }

  // === TC-CR1-015: Premium and Movement (likely tx_stg_act_prem_movement or similar) ===
  console.log('\n\n=== TC-CR1-015 :: Premium and Movement candidate tables ===');
  const tabs = await c.query(`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema='public'
      AND (table_name ILIKE '%prem%movement%' OR table_name ILIKE '%movement%' OR table_name ILIKE '%prem_move%')
    ORDER BY table_name
  `);
  console.log('Candidate tables:'); tabs.rows.forEach(r => console.log(`  ${r.table_name}`));

  // If found, inspect first candidate
  for (const t of tabs.rows) {
    const cc = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`, [t.table_name]);
    const rateCols = cc.rows.filter(x => /rate|flag|avg|average|type/i.test(x.column_name));
    console.log(`\n=== ${t.table_name} (${cc.rowCount} cols) — rate/type related ===`);
    rateCols.forEach(x => console.log(`  ${x.column_name} (${x.data_type})`));
    const cntT = await c.query(`SELECT COUNT(*) AS n FROM ${t.table_name}`);
    console.log(`Total rows: ${cntT.rows[0].n}`);
  }

  await c.end();
})();

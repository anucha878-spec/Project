// Inspect R17 + R01 source tables → confirm presence of "ประเภทการคำนวณ Rate" + "Rate เฉลี่ย"
// For TC-CR1-014, TC-CR1-015 UI re-test on 2026-05-22
const { Client } = require('pg');

const cfg = {
  host: '10.14.8.58', port: 5432, database: 'groupri',
  user: 'groupri', password: 'nopass',
};

(async () => {
  const c = new Client(cfg);
  await c.connect();

  const tables = [
    'tx_act_snap_cert_inforce',      // R17 source
    'tx_est_snap_cert_inforce',      // R01 Estimate source
    'tx_stg_act_inforce_member',     // R17 staging
    'tx_stg_est_inforce_member',     // R01 staging
  ];

  for (const t of tables) {
    const r = await c.query(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_schema='public' AND table_name=$1
      ORDER BY ordinal_position
    `, [t]);
    console.log(`\n=== ${t} (${r.rowCount} cols) ===`);
    const rateRelated = r.rows.filter(x =>
      /rate|flag|avg|average|type/i.test(x.column_name));
    console.log('Rate/type related:');
    rateRelated.forEach(x => console.log(`  ${x.column_name} (${x.data_type})`));
  }

  // Distinct rate_type values in staging
  console.log('\n=== Distinct rate_type values ===');
  for (const t of ['tx_stg_est_inforce_member', 'tx_stg_act_inforce_member']) {
    try {
      const r = await c.query(`SELECT rate_type, COUNT(*) AS n FROM ${t} GROUP BY rate_type ORDER BY n DESC`);
      console.log(`${t}:`);
      r.rows.forEach(row => console.log(`  ${row.rate_type || '(null)'} → ${row.n}`));
    } catch (e) { console.log(`${t}: ${e.message}`); }
  }

  // rate_flag distribution
  console.log('\n=== rate_flag distribution on policy tables ===');
  for (const t of ['tx_act_snap_policy', 'tx_est_snap_policy', 'tx_stg_act_all_policy', 'tx_stg_est_all_policy']) {
    try {
      const r = await c.query(`SELECT rate_flag, COUNT(*) AS n FROM ${t} GROUP BY rate_flag ORDER BY rate_flag`);
      console.log(`${t}:`);
      r.rows.forEach(row => console.log(`  rate_flag=${row.rate_flag} → ${row.n}`));
    } catch (e) { console.log(`${t}: ${e.message}`); }
  }

  await c.end();
})();

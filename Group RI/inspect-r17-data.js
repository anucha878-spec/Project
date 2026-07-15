// Pre-fetch sample data from R17 source tables for GIB 2025Q4
// Will compare with downloaded R17 file once user provides it
const { Client } = require('pg');

const cfg = {
  host: '10.14.8.58', port: 5432, database: 'groupri',
  user: 'groupri', password: 'nopass',
};

(async () => {
  const c = new Client(cfg);
  await c.connect();

  // Identify the latest GIB 2025Q4 SUCCESS act_hd
  const hd = await c.query(`
    SELECT rig_act_hd_id, treaty_code, period, quarter_year, quarter, status,
           sum_records, ri_premium, due_to, created_date
    FROM tx_rig_act_hd
    WHERE cf_treaty_id = 2  -- GIB
      AND quarter_year=2025 AND quarter=4
      AND status = 'SUCCESS'
    ORDER BY rig_act_hd_id DESC
  `);
  console.log('=== GIB 2025Q4 SUCCESS act_hd ===');
  hd.rows.forEach(r => console.log(JSON.stringify(r)));

  // Count R17 source rows per act_hd
  console.log('\n=== R17 source: tx_act_snap_cert_inforce row counts ===');
  const cnt = await c.query(`
    SELECT period, COUNT(*) AS n
    FROM tx_act_snap_cert_inforce
    GROUP BY period
    ORDER BY period DESC
    LIMIT 10
  `);
  cnt.rows.forEach(r => console.log(`  period=${r.period} → ${r.n}`));

  // Sample first 3 rows of R17 source (latest period) — see what data really exists
  console.log('\n=== Sample R17 source (top 3 rows, latest period) ===');
  const sample = await c.query(`
    SELECT *
    FROM tx_act_snap_cert_inforce
    ORDER BY period DESC
    LIMIT 3
  `);
  sample.rows.forEach((r, i) => {
    console.log(`\nRow ${i+1}:`);
    Object.entries(r).forEach(([k,v]) => {
      if (v !== null && v !== '' && v !== 0)
        console.log(`  ${k} = ${typeof v === 'object' ? JSON.stringify(v) : v}`);
    });
  });

  // Where are rate_flag=1 policies?
  console.log('\n=== Non-Unit Rate policies (rate_flag=1) location ===');
  for (const t of ['tx_act_snap_policy', 'tx_est_snap_policy']) {
    const r = await c.query(`
      SELECT policy_no, period, rate_flag, treaty_code
      FROM ${t} WHERE rate_flag = 1
      ORDER BY period DESC
    `);
    console.log(`${t}:`);
    r.rows.forEach(row => console.log(`  ${JSON.stringify(row)}`));
  }

  await c.end();
})();

const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:8000 };

(async()=>{
  const c = new Client(cfg); await c.connect();
  try{
    console.log('=== ms_rig_process for RIG-PS-01 codes ===');
    const r1 = await c.query(`
      SELECT ms_process_id, process_code, process_name, type, seq_landing, status_landing, process_group
      FROM ms_rig_process
      WHERE process_code LIKE 'RIG-PS-01%' OR process_code LIKE 'RIG_AUTO_%' OR process_group LIKE '%LAND%'
      ORDER BY process_code`);
    console.table(r1.rows);

    console.log('\n=== sample of ALL process_code values in ms_rig_process ===');
    const r1b = await c.query(`SELECT process_code, process_name, type, process_group FROM ms_rig_process ORDER BY process_code`);
    console.table(r1b.rows);

    console.log('\n=== tx_rig_process_hd recent runs ===');
    const r2 = await c.query(`
      SELECT rig_process_hd_id, process_code, status, period, ri_type, sum_record,
             start_date, finish_date
      FROM tx_rig_process_hd
      ORDER BY rig_process_hd_id DESC
      LIMIT 20`);
    console.table(r2.rows);

    console.log('\n=== distinct process_codes in tx_rig_process_hd ===');
    const r3 = await c.query(`
      SELECT process_code, COUNT(*)::int n, MAX(finish_date) AS last_finish, MIN(start_date) AS first_start
      FROM tx_rig_process_hd
      GROUP BY process_code
      ORDER BY process_code`);
    console.table(r3.rows);

    console.log('\n=== periods that have landing data ===');
    for (const t of ['tx_rig_landing_policy','tx_rig_landing_certificate_cust','tx_rig_landing_claimdeath','tx_rig_landing_unname_policy','tx_rig_landing_nature_business']){
      const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t} GROUP BY period ORDER BY period DESC LIMIT 6`);
      console.log(`  ${t}:`, r.rows);
    }
  } finally { await c.end(); }
})().catch(e=>{console.error(e.message);process.exit(1)});

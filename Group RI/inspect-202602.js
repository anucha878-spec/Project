const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:10000 };
const PERIOD = 202602;

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('=== Estimate Staging tables for period 202602 ===');
    const stgTables = ['tx_stg_est_all_policy','tx_stg_est_death_claim','tx_stg_est_health_claim','tx_stg_est_tpd_claim','tx_stg_est_inforce_member','tx_stg_est_policy_1y','tx_stg_est_prem_layer','tx_stg_error_data'];
    for (const t of stgTables){
      try {
        // check if table has period column
        const colChk = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND column_name='period'`,[t]);
        if (colChk.rows.length===0){
          const all = await c.query(`SELECT COUNT(*)::int n FROM ${t}`);
          console.log(`  ${t}: all=${all.rows[0].n} (no period col)`);
        } else {
          const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t} GROUP BY period ORDER BY period DESC LIMIT 6`);
          console.log(`  ${t}:`, r.rows.map(x=>x.period+':'+x.n).join(', '));
        }
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    console.log('\n=== Estimate tables (RIG_EST_*) for period 202602 ===');
    const estTables = ['tx_rig_est_hd','tx_rig_est_policy_hd','tx_rig_est_policy_dt','tx_rig_est_pol_mem','tx_rig_est_mem_dt','tx_rig_est_bdr','tx_rig_est_soa_hd','tx_rig_est_soa_dt','tx_rig_est_claim_cms'];
    for (const t of estTables){
      try {
        const colChk = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND column_name='period'`,[t]);
        if (colChk.rows.length===0){
          const all = await c.query(`SELECT COUNT(*)::int n FROM ${t}`);
          console.log(`  ${t}: all=${all.rows[0].n} (no period col)`);
        } else {
          const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t} GROUP BY period ORDER BY period DESC LIMIT 6`);
          console.log(`  ${t}:`, r.rows.map(x=>x.period+':'+x.n).join(', '));
        }
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    console.log('\n=== Process runs for EST_STAGING_* / EST_MAIN / EST_BORDEREAU / EST_SOA at period 202602 ===');
    const r = await c.query(`
      SELECT process_code, status, period, ri_type, sum_record,
             start_date, finish_date, treaty_code
      FROM tx_rig_process_hd
      WHERE period=$1 AND (process_code LIKE 'EST_%' OR process_code LIKE 'RIG_AUTO_%')
      ORDER BY process_code, start_date`, [PERIOD]);
    console.table(r.rows);

    console.log('\n=== Treaty codes seen at period 202602 ===');
    const r2 = await c.query(`
      SELECT DISTINCT process_code, treaty_code
      FROM tx_rig_process_hd
      WHERE period=$1 AND treaty_code IS NOT NULL
      ORDER BY process_code, treaty_code`, [PERIOD]);
    console.table(r2.rows);
  } finally { await c.end(); }
})().catch(e=>{console.error(e.message); process.exit(1);});

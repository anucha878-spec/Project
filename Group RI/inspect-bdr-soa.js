const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:10000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    for (const t of ['tx_rig_est_bdr','tx_rig_est_soa_hd','tx_rig_est_soa_dt','tx_rig_est_hd','tx_rig_est_policy_hd','tx_rig_est_policy_dt','tx_rig_est_pol_mem']){
      const r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,[t]);
      console.log(`\n## ${t}`);
      r.rows.forEach(x=>console.log(`  ${x.column_name}: ${x.data_type}`));
    }

    console.log('\n=== BDR data for period 202602 by treaty ===');
    const r1 = await c.query(`
      SELECT treaty_code, COUNT(*)::int n, SUM(life_prem)::numeric AS life_prem, SUM(acc_prem)::numeric AS acc_prem, SUM(med_prem)::numeric AS med_prem
      FROM tx_rig_est_bdr WHERE period=202602
      GROUP BY treaty_code ORDER BY treaty_code`);
    console.table(r1.rows);

    console.log('\n=== SOA HD for period 202602 ===');
    const r2 = await c.query(`SELECT * FROM tx_rig_est_soa_hd WHERE period=202602`);
    console.log(JSON.stringify(r2.rows, null, 2));

    console.log('\n=== est_policy_hd 202602 ===');
    const r3 = await c.query(`SELECT treaty_code, COUNT(*)::int n FROM tx_rig_est_policy_hd WHERE period=202602 GROUP BY treaty_code`);
    console.table(r3.rows);
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

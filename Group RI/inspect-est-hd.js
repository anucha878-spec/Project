const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:10000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('## tx_rig_est_hd columns');
    const r0 = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_est_hd' ORDER BY ordinal_position`);
    r0.rows.forEach(x=>console.log(`  ${x.column_name}: ${x.data_type}`));

    console.log('\n## est_hd at closing_period 202602 — sample');
    const r1 = await c.query(`SELECT rig_est_hd_id, closing_period, treaty_code, status, ri_premium, ri_commission, claim_recovery, due_to, sum_records FROM tx_rig_est_hd WHERE closing_period=202602 ORDER BY treaty_code`);
    console.log(JSON.stringify(r1.rows, null, 2));

    console.log('\n## BDR + est_hd join — counts by treaty for 202602');
    const r2 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n_bdr,
             SUM(b.ri_prem_1st_tot+b.ri_prem_renew_tot)::numeric total_ri_prem,
             SUM(b.ri_claim_tot)::numeric total_ri_claim,
             SUM(b.ri_comm_life+b.ri_comm_acc+COALESCE(b.ri_comm_tpd,0)+COALESCE(b.ri_comm_medical,0))::numeric total_ri_comm
      FROM tx_rig_est_bdr b
      JOIN tx_rig_est_hd h ON b.rig_est_hd_id = h.rig_est_hd_id
      WHERE b.period=202602
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r2.rows);

    console.log('\n## SOA + est_hd join — by treaty for 202602');
    const r3 = await c.query(`
      SELECT h.treaty_code, soa.rig_est_soa_hd_id, soa.total_profit_comm, soa.net_balance_due_to_reinsurer,
             (SELECT COUNT(*)::int FROM tx_rig_est_soa_dt d WHERE d.rig_est_soa_hd_id=soa.rig_est_soa_hd_id) AS dt_count
      FROM tx_rig_est_soa_hd soa
      JOIN tx_rig_est_hd h ON soa.rig_est_hd_id = h.rig_est_hd_id
      WHERE soa.period=202602
      ORDER BY h.treaty_code`);
    console.table(r3.rows);

    console.log('\n## Policy HD for 202602 by treaty');
    const r4 = await c.query(`SELECT treaty_code, COUNT(*)::int n FROM tx_rig_est_policy_hd WHERE period=202602 GROUP BY treaty_code ORDER BY treaty_code`);
    console.table(r4.rows);
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

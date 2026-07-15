const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('## act_hd Q1 2026 by treaty');
    const r = await c.query(`
      SELECT rig_act_hd_id, treaty_code, closing_quarter, quarter_year, quarter, status,
             ri_premium, ri_commission, claim_recovery, due_to, sum_records
      FROM tx_rig_act_hd
      WHERE quarter_year=2026 AND quarter=1
      ORDER BY treaty_code`);
    console.table(r.rows);

    console.log('\n## SOA HD 2026Q1 joined to treaty');
    const r2 = await c.query(`
      SELECT s.rig_act_soa_hd_id, h.treaty_code, h.closing_quarter, s.total_profit_comm, s.net_balance_due_to_reinsurer
      FROM tx_rig_act_soa_hd s
      JOIN tx_rig_act_hd h ON s.rig_act_hd_id=h.rig_act_hd_id
      WHERE s.period='2026Q1'
      ORDER BY h.treaty_code`);
    console.table(r2.rows);

    console.log('\n## BDR aggregated for Q1 2026 by treaty');
    // BDR new_renew
    const r3 = await c.query(`
      SELECT h.treaty_code,
             COUNT(b.*)::int n_bdr_new_renew,
             SUM(b.life_prem)::numeric prem_life,
             SUM(b.acc_prem)::numeric prem_acc
      FROM tx_rig_act_bdr_new_renew b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r3.rows);

    // BDR claim
    const r4 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n_bdr_claim
      FROM tx_rig_act_bdr_claim b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.log('\n## BDR Claim Q1 2026');
    console.table(r4.rows);

    // BDR alter
    const r5 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n_bdr_alter
      FROM tx_rig_act_bdr_alter b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.log('\n## BDR Alter Q1 2026');
    console.table(r5.rows);

    // BDR pol_mem
    const r6 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n_bdr_pol_mem
      FROM tx_rig_act_bdr_pol_mem b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.log('\n## BDR Pol_Mem Q1 2026');
    console.table(r6.rows);

    // Process_hd: act runs for Q1 2026 by process_code
    console.log('\n## ACT Process runs for Q1 2026 by code');
    const r7 = await c.query(`
      SELECT process_code, COUNT(*)::int total_runs,
             SUM(CASE WHEN status='SUCCESS' THEN 1 ELSE 0 END)::int success_runs,
             SUM(CASE WHEN status<>'SUCCESS' THEN 1 ELSE 0 END)::int failed_runs,
             MIN(start_date)::text first_run, MAX(start_date)::text last_run
      FROM tx_rig_process_hd
      WHERE year=2026 AND quarter=1
      GROUP BY process_code
      ORDER BY process_code`);
    console.table(r7.rows);
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

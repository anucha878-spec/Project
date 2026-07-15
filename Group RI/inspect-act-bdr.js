const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    for (const t of ['tx_rig_act_bdr_new_renew','tx_rig_act_bdr_claim','tx_rig_act_bdr_alter','tx_rig_act_bdr_pol_mem']){
      const r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,[t]);
      console.log('\n## '+t);
      console.log(r.rows.map(x=>x.column_name+':'+x.data_type).join(' | '));
    }

    console.log('\n## BDR new_renew Q1 2026 SUCCESS-only by treaty');
    const r1 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n, COUNT(DISTINCT b.rig_act_hd_id)::int n_hd
      FROM tx_rig_act_bdr_new_renew b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1 AND h.status='SUCCESS'
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r1.rows);

    console.log('\n## BDR claim Q1 2026 SUCCESS-only by treaty');
    const r2 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n
      FROM tx_rig_act_bdr_claim b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1 AND h.status='SUCCESS'
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r2.rows);

    console.log('\n## BDR alter Q1 2026 SUCCESS-only by treaty');
    const r3 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n
      FROM tx_rig_act_bdr_alter b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1 AND h.status='SUCCESS'
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r3.rows);

    console.log('\n## BDR pol_mem Q1 2026 SUCCESS-only by treaty');
    const r4 = await c.query(`
      SELECT h.treaty_code, COUNT(b.*)::int n
      FROM tx_rig_act_bdr_pol_mem b
      JOIN tx_rig_act_hd h ON b.rig_act_hd_id=h.rig_act_hd_id
      WHERE h.quarter_year=2026 AND h.quarter=1 AND h.status='SUCCESS'
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r4.rows);

    console.log('\n## SOA HD/DT Q1 2026 SUCCESS-only by treaty');
    const r5 = await c.query(`
      SELECT h.treaty_code, COUNT(DISTINCT s.rig_act_soa_hd_id)::int n_hd,
             (SELECT COUNT(*)::int FROM tx_rig_act_soa_dt d WHERE d.rig_act_soa_hd_id IN (SELECT rig_act_soa_hd_id FROM tx_rig_act_soa_hd s2 JOIN tx_rig_act_hd h2 ON s2.rig_act_hd_id=h2.rig_act_hd_id WHERE s2.period='2026Q1' AND h2.status='SUCCESS' AND h2.treaty_code=h.treaty_code)) AS n_dt,
             SUM(s.net_balance_due_to_reinsurer)::numeric AS total_net
      FROM tx_rig_act_soa_hd s
      JOIN tx_rig_act_hd h ON s.rig_act_hd_id=h.rig_act_hd_id
      WHERE s.period='2026Q1' AND h.status='SUCCESS'
      GROUP BY h.treaty_code ORDER BY h.treaty_code`);
    console.table(r5.rows);

    console.log('\n## ACT process counts for Q1 2026');
    const r6 = await c.query(`
      SELECT process_code,
             COUNT(*)::int total,
             SUM(CASE WHEN status='SUCCESS' THEN 1 ELSE 0 END)::int success,
             SUM(CASE WHEN status<>'SUCCESS' THEN 1 ELSE 0 END)::int failed_or_other
      FROM tx_rig_process_hd
      WHERE year=2026 AND quarter=1 AND ri_type='A'
      GROUP BY process_code
      ORDER BY process_code`);
    console.table(r6.rows);
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };
const Q='2026Q1';

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('## tx_rig_act_hd columns');
    let r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_hd' ORDER BY ordinal_position`);
    r.rows.forEach(x=>console.log(`  ${x.column_name}: ${x.data_type}`));

    console.log('\n## tx_rig_act_soa_hd columns');
    r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_soa_hd' ORDER BY ordinal_position`);
    r.rows.forEach(x=>console.log(`  ${x.column_name}: ${x.data_type}`));

    console.log('\n## SOA HD 2026Q1 by treaty');
    const r2 = await c.query(`SELECT * FROM tx_rig_act_soa_hd WHERE period='${Q}' LIMIT 5`);
    console.log(JSON.stringify(r2.rows[0]||{}, null, 2));

    // Count SOA HD by treaty for 2026Q1 (we need to join act_hd? Let me check)
    const cols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_soa_hd'`);
    const hasTreatyOnSoa = cols.rows.some(x=>x.column_name==='treaty_code');
    if (hasTreatyOnSoa){
      const r3 = await c.query(`SELECT treaty_code, COUNT(*)::int n FROM tx_rig_act_soa_hd WHERE period=$1 GROUP BY treaty_code ORDER BY treaty_code`, [Q]);
      console.log('\n## SOA HD by treaty for', Q);
      console.table(r3.rows);
    }

    // act_hd by treaty for 202603 (Q1 closing month)
    console.log('\n## tx_rig_act_hd for 2026Q1 / closing 202603');
    const r4 = await c.query(`SELECT DISTINCT period FROM tx_rig_act_hd WHERE period IN ('202601','202602','202603','2026Q1')`);
    console.log('Periods found:', r4.rows.map(x=>x.period));

    // Try query by various period formats
    const r5 = await c.query(`SELECT period, COUNT(*)::int n, MIN(rig_act_hd_id)::text minid, MAX(rig_act_hd_id)::text maxid FROM tx_rig_act_hd GROUP BY period ORDER BY period DESC LIMIT 20`);
    console.log('\n## act_hd period distribution');
    console.table(r5.rows);

    // BDR tables — check if they link to act_hd via rig_act_hd_id
    console.log('\n## tx_rig_act_bdr_new_renew columns (sample)');
    const r6 = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_new_renew' ORDER BY ordinal_position LIMIT 30`);
    console.log(r6.rows.map(x=>x.column_name).join(', '));

    // Process_hd: Q1 2026 detail by process_code for closing_period
    console.log('\n## ACT processes for year=2026 quarter=1, grouped by process_code, treaty');
    const r7 = await c.query(`
      SELECT process_code, treaty_code, status, COUNT(*)::int n, SUM(sum_record)::int total_records
      FROM tx_rig_process_hd
      WHERE year=2026 AND quarter=1
      GROUP BY process_code, treaty_code, status
      ORDER BY process_code, treaty_code`);
    console.table(r7.rows);

    // ACT_MAIN_PROCESS detail for Q1 2026
    console.log('\n## ACT_MAIN_PROCESS detail for Q1 2026');
    const r8 = await c.query(`
      SELECT rig_process_hd_id, treaty_code, status, sum_record, period, start_date, finish_date
      FROM tx_rig_process_hd
      WHERE year=2026 AND quarter=1 AND process_code='ACT_MAIN_PROCESS'
      ORDER BY treaty_code, start_date DESC LIMIT 20`);
    console.table(r8.rows);
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

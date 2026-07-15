const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('## EDW process_code in master');
    let r = await c.query(`SELECT process_code, process_name, type, process_group FROM ms_rig_process WHERE process_code LIKE '%EDW%' OR process_name ILIKE '%EDW%' ORDER BY process_code`);
    console.table(r.rows);

    console.log('\n## ACT_EDW_PROCESS / EST_EDW_PROCESS run summary');
    r = await c.query(`
      SELECT process_code,
             COUNT(*)::int total,
             SUM(CASE WHEN status='SUCCESS' THEN 1 ELSE 0 END)::int success,
             SUM(CASE WHEN status='CANCEL' THEN 1 ELSE 0 END)::int cancel,
             SUM(CASE WHEN status NOT IN ('SUCCESS','CANCEL') THEN 1 ELSE 0 END)::int other,
             MIN(start_date)::text first_run, MAX(start_date)::text last_run
      FROM tx_rig_process_hd
      WHERE process_code IN ('ACT_EDW_PROCESS','EST_EDW_PROCESS','ACT_MPS_PROCESS','EST_MPS_PROCESS')
      GROUP BY process_code ORDER BY process_code`);
    console.table(r.rows);

    console.log('\n## EDW Process for Q1 2026 (Actual) by treaty');
    r = await c.query(`
      SELECT process_code, treaty_code, status, COUNT(*)::int n
      FROM tx_rig_process_hd
      WHERE process_code='ACT_EDW_PROCESS' AND year=2026 AND quarter=1
      GROUP BY process_code, treaty_code, status
      ORDER BY treaty_code, status`);
    console.table(r.rows);

    console.log('\n## EDW Process for period 202602 (Estimate) by treaty');
    r = await c.query(`
      SELECT process_code, treaty_code, status, COUNT(*)::int n
      FROM tx_rig_process_hd
      WHERE process_code='EST_EDW_PROCESS' AND period=202602
      GROUP BY process_code, treaty_code, status
      ORDER BY treaty_code, status`);
    console.table(r.rows);

    console.log('\n## edw_status on tx_rig_est_hd (Estimate)');
    r = await c.query(`
      SELECT edw_status, edw_status_desc, COUNT(*)::int n
      FROM tx_rig_est_hd
      WHERE closing_period IN (202601,202602,202603)
      GROUP BY edw_status, edw_status_desc
      ORDER BY edw_status`);
    console.table(r.rows);

    console.log('\n## edw_status on tx_rig_act_hd (Actual Q1 2026)');
    r = await c.query(`
      SELECT edw_status, edw_status_desc, treaty_code, COUNT(*)::int n
      FROM tx_rig_act_hd
      WHERE quarter_year=2026 AND quarter=1
      GROUP BY edw_status, edw_status_desc, treaty_code
      ORDER BY treaty_code, edw_status`);
    console.table(r.rows);

    console.log('\n## mps_status on tx_rig_act_hd Q1 2026 (Master/Actuarial pickup status)');
    r = await c.query(`
      SELECT mps_status, mps_status_desc, treaty_code, COUNT(*)::int n
      FROM tx_rig_act_hd
      WHERE quarter_year=2026 AND quarter=1
      GROUP BY mps_status, mps_status_desc, treaty_code
      ORDER BY treaty_code, mps_status`);
    console.table(r.rows);

    console.log('\n## All ACT_EDW_PROCESS recent runs sample');
    r = await c.query(`
      SELECT rig_process_hd_id, treaty_code, status, period, year, quarter, sum_record, start_date, finish_date
      FROM tx_rig_process_hd
      WHERE process_code='ACT_EDW_PROCESS'
      ORDER BY start_date DESC LIMIT 15`);
    console.table(r.rows);

    console.log('\n## SUCCESS-only act_hd Q1 2026 — EDW status detail');
    r = await c.query(`
      SELECT rig_act_hd_id, treaty_code, status, edw_status, edw_status_desc, mps_status, mps_status_desc, ri_std_hd_id, content_id_bdr, content_id_masteri
      FROM tx_rig_act_hd
      WHERE quarter_year=2026 AND quarter=1 AND status='SUCCESS'
      ORDER BY treaty_code`);
    console.log('column content_id_* may not exist on act_hd; trying simpler...');
  } catch(e){ console.error(e.message); }
  // Try without optional cols
  try {
    const r = await c.query(`
      SELECT rig_act_hd_id, treaty_code, status, edw_status, edw_status_desc, mps_status, mps_status_desc, ri_std_hd_id
      FROM tx_rig_act_hd
      WHERE quarter_year=2026 AND quarter=1 AND status='SUCCESS'
      ORDER BY treaty_code`);
    console.log('## SUCCESS act_hd EDW/MPS status detail');
    console.table(r.rows);
  } catch(e){ console.error('detail err:', e.message); }
  await c.end();
})();

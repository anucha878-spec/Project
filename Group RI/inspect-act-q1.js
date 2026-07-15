const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:10000 };

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    console.log('=== Actual SNAPSHOT counts by period ===');
    const snapTables = ['tx_act_snap_policy','tx_act_snap_certificate_cust','tx_act_snap_company','tx_act_snap_claim_death','tx_act_snap_claimtpd','tx_act_snap_claimhealth','tx_act_snap_cert_inforce','tx_act_snap_certalteration','tx_act_snap_exprefund','tx_act_snap_investigation_expense','tx_act_snap_nature_business','tx_act_snap_unname_policy','tx_act_snap_gl_sophead','tx_act_snap_prem_rate'];
    for (const t of snapTables){
      try {
        const colChk = await c.query(`SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND column_name='period' LIMIT 1`,[t]);
        if (colChk.rows.length>0){
          const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t} GROUP BY period ORDER BY period DESC LIMIT 8`);
          console.log(`  ${t}:`, r.rows.map(x=>x.period+':'+x.n).join(', '));
        } else {
          const r = await c.query(`SELECT COUNT(*)::int n FROM ${t}`);
          console.log(`  ${t}: all=${r.rows[0].n}`);
        }
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    console.log('\n=== Actual STAGING counts by period ===');
    const stgTables = ['tx_stg_act_all_policy','tx_stg_act_alteration','tx_stg_act_death_claim','tx_stg_act_tpd_claim','tx_stg_act_health_claim','tx_stg_act_inforce_member','tx_stg_act_inforce_policy','tx_stg_act_exp_refund','tx_stg_act_investigation_expense','tx_stg_act_member_over_age','tx_stg_act_prem_layer','tx_stg_act_prem_movement'];
    for (const t of stgTables){
      try {
        const colChk = await c.query(`SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND column_name='period' LIMIT 1`,[t]);
        if (colChk.rows.length>0){
          const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t} GROUP BY period ORDER BY period DESC LIMIT 6`);
          console.log(`  ${t}:`, r.rows.map(x=>x.period+':'+x.n).join(', '));
        } else {
          const r = await c.query(`SELECT COUNT(*)::int n FROM ${t}`);
          console.log(`  ${t}: all=${r.rows[0].n}`);
        }
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    console.log('\n=== Actual processed (rig_act_*) — check by quarter/year ===');
    // Look for tables with quarter/year columns
    const rTbls = await c.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'tx_rig_act_%' ORDER BY table_name`);
    for (const t of rTbls.rows){
      try {
        const cols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1`,[t.table_name]);
        const colNames = cols.rows.map(x=>x.column_name);
        const hasQuarter = colNames.includes('quarter');
        const hasYear = colNames.includes('year');
        const hasPeriod = colNames.includes('period');
        const hasClosingPeriod = colNames.includes('closing_period');
        const hasTreaty = colNames.includes('treaty_code');
        if (hasQuarter && hasYear){
          const r = await c.query(`SELECT year, quarter, COUNT(*)::int n FROM ${t.table_name} WHERE year=2026 GROUP BY year, quarter ORDER BY quarter`);
          console.log(`  ${t.table_name} (Q/Y${hasTreaty?'/T':''}):`, r.rows.map(x=>`Y${x.year}Q${x.quarter}:${x.n}`).join(', '));
        } else if (hasClosingPeriod){
          const r = await c.query(`SELECT closing_period, COUNT(*)::int n FROM ${t.table_name} GROUP BY closing_period ORDER BY closing_period DESC LIMIT 5`);
          console.log(`  ${t.table_name} (closing_period):`, r.rows.map(x=>x.closing_period+':'+x.n).join(', '));
        } else if (hasPeriod){
          const r = await c.query(`SELECT period, COUNT(*)::int n FROM ${t.table_name} GROUP BY period ORDER BY period DESC LIMIT 5`);
          console.log(`  ${t.table_name} (period):`, r.rows.map(x=>x.period+':'+x.n).join(', '));
        } else {
          const r = await c.query(`SELECT COUNT(*)::int n FROM ${t.table_name}`);
          console.log(`  ${t.table_name}: all=${r.rows[0].n}`);
        }
      } catch(e){ console.log(`  ${t.table_name}: ERR ${e.message}`); }
    }

    console.log('\n=== Actual Process runs for Q1 2026 (year=2026, quarter=1) ===');
    const r = await c.query(`
      SELECT process_code, status, period, ri_type, year, quarter, sum_record, treaty_code, start_date
      FROM tx_rig_process_hd
      WHERE year=2026 AND quarter=1 AND (process_code LIKE 'ACT_%' OR process_code LIKE 'RIG_AUTO_%')
      ORDER BY process_code, start_date DESC`);
    if (r.rows.length===0){
      console.log('  No runs with quarter=1 year=2026; try by closing_period filter');
      const r2 = await c.query(`
        SELECT process_code, status, period, year, quarter, sum_record, treaty_code, start_date
        FROM tx_rig_process_hd
        WHERE ri_type='A' AND (process_code LIKE 'ACT_%' OR process_code LIKE 'RIG_AUTO_%')
          AND start_date >= '2026-01-01' AND start_date < '2026-04-01'
        ORDER BY process_code, start_date DESC LIMIT 30`);
      console.table(r2.rows.slice(0,25));
    } else {
      console.table(r.rows.slice(0,30));
    }
  } catch(e){ console.error(e.message); } finally { await c.end(); }
})();

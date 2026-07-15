// Inspect tables relevant to TC-CR1-010..019 for closing_quarter='2025Q4'
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

const Q = '2025Q4';

async function listCols(c, t){
  const r = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`, [t]);
  return r.rows.map(x => x.column_name);
}

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log(`\n========== ACT_HD for closing_quarter='${Q}' ==========`);
    const hd = await c.query(`
      SELECT rig_act_hd_id, treaty_code, status, period, ri_premium, ri_commission, claim_recovery, due_to, sum_records, ri_method, usage_status
      FROM tx_rig_act_hd
      WHERE closing_quarter=$1
      ORDER BY status, period, treaty_code`, [Q]);
    console.log(`Total rows: ${hd.rows.length}`);
    const byStatus = {};
    for (const r of hd.rows){
      byStatus[r.status] = (byStatus[r.status]||0) + 1;
    }
    console.log('Status counts:', JSON.stringify(byStatus));
    // SUCCESS ones
    console.log('\n-- SUCCESS rows (top 20):');
    hd.rows.filter(r => r.status === 'SUCCESS').slice(0,20).forEach(r => console.log(`  id=${r.rig_act_hd_id} treaty=${r.treaty_code} period=${r.period} ri_prem=${r.ri_premium} due_to=${r.due_to} sum_rec=${r.sum_records} ri_method=${r.ri_method}`));

    // Cache SUCCESS ids
    const successIds = hd.rows.filter(r => r.status === 'SUCCESS').map(r => r.rig_act_hd_id);
    console.log(`\nSUCCESS act_hd_ids count: ${successIds.length}`);

    if (successIds.length === 0){
      console.log('No SUCCESS act_hd in 2025Q4 — falling back to ALL 2025Q4 act_hd');
    }
    const useIds = successIds.length > 0 ? successIds : hd.rows.map(r => r.rig_act_hd_id);
    const idsCsv = useIds.slice(0,100).join(',');

    // Inspect related BDR/SOA/Layer/Member tables
    const RELATED = [
      'tx_rig_act_bdr_new_renew','tx_rig_act_bdr_claim','tx_rig_act_bdr_claim_mem',
      'tx_rig_act_bdr_alter','tx_rig_act_bdr_alter_mem','tx_rig_act_bdr_pol_mem',
      'tx_rig_act_policy_hd','tx_rig_act_policy_layer','tx_rig_act_pol_mem','tx_rig_act_claim_mem',
      'tx_rig_act_soa_hd','tx_rig_act_soa_dt'
    ];
    for (const t of RELATED){
      try {
        const cols = await listCols(c, t);
        const join = cols.includes('rig_act_hd_id');
        if (join){
          const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${t}" WHERE rig_act_hd_id IN (${idsCsv||'NULL'})`);
          console.log(`\n${t} (${cols.length} cols, ${cnt.rows[0].n} rows for 2025Q4 SUCCESS):`);
        } else {
          console.log(`\n${t} (${cols.length} cols, NO rig_act_hd_id join):`);
        }
        // List likely-relevant columns
        const rel = cols.filter(c => /rate|layer|premium|extra|age|sum|insur|claim|dbd|nature|original|orig_si|orig_sum|life|tpd|acc|med|comm|method|factor|mode|policy|member/i.test(c));
        console.log(`  RELEVANT (${rel.length}): ${rel.join(', ')}`);
      } catch(e){ console.log(`${t} ERR: ${e.message}`); }
    }

    // Nature of Business config
    console.log('\n========== Nature of Business ==========');
    for (const t of ['ms_rig_nature_business','tx_rig_nature_business']){
      try {
        const cols = await listCols(c, t);
        const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${t}"`);
        console.log(`${t}: ${cnt.rows[0].n} rows, cols=${cols.join(', ')}`);
        const sample = await c.query(`SELECT * FROM "${t}" LIMIT 3`);
        sample.rows.forEach((r,i) => console.log(`  [${i}] ${JSON.stringify(r).slice(0,300)}`));
      } catch(e){ console.log(`${t} ERR: ${e.message}`); }
    }

    // Premium Layer Estimate vs Actual
    console.log('\n========== Layer tables ==========');
    for (const t of ['tx_stg_act_prem_layer','tx_stg_est_prem_layer','tx_rig_act_policy_layer']){
      try {
        const cols = await listCols(c, t);
        const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${t}"`);
        console.log(`${t}: ${cnt.rows[0].n} rows`);
        console.log(`  cols=${cols.join(', ')}`);
      } catch(e){ console.log(`${t} ERR: ${e.message}`); }
    }

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

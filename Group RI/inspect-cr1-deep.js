// Deeper checks for TC-CR1-010..019
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) Search ALL columns across DB for "rate flag" / "unit_rate" / "calc_type"
    console.log('=== Searching for rate_flag / unit_rate / calc_type / non_unit columns ===');
    const search = await c.query(`
      SELECT table_name, column_name, data_type
      FROM information_schema.columns
      WHERE table_schema='public'
        AND (column_name ILIKE '%rate_flag%'
          OR column_name ILIKE '%unit_rate%'
          OR column_name ILIKE '%calc_type%'
          OR column_name ILIKE '%calc_rate%'
          OR column_name ILIKE '%avg_rate%'
          OR column_name ILIKE '%rate_calc%'
          OR column_name ILIKE '%non_unit%'
          OR column_name ILIKE '%rate_avg%'
          OR column_name ILIKE '%rate_type%'
          OR column_name ILIKE '%type_rate%'
          OR column_name ILIKE '%rate_mode%')
      ORDER BY table_name, column_name`);
    search.rows.forEach(r => console.log(`  ${r.table_name}.${r.column_name} (${r.data_type})`));
    console.log(`Total matches: ${search.rows.length}`);

    // 2) Check est_snap_policy for rate_flag (we saw this column earlier!)
    console.log('\n=== est_snap_policy.rate_flag distribution ===');
    try {
      const r = await c.query(`SELECT rate_flag, COUNT(*)::int n FROM tx_est_snap_policy GROUP BY rate_flag ORDER BY n DESC LIMIT 10`);
      r.rows.forEach(x => console.log(`  rate_flag='${x.rate_flag}': ${x.n}`));
    } catch(e){ console.log('ERR:', e.message); }

    // 3) Check act_snap_policy column list for rate flag
    console.log('\n=== act_snap_policy columns ===');
    const acsp = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_act_snap_policy' ORDER BY ordinal_position`);
    console.log(acsp.rows.map(x=>x.column_name).join(', '));

    // 4) Check rate columns on est_snap_policy & landing_policy
    console.log('\n=== Sample est_snap_policy rate-related fields ===');
    const ratesample = await c.query(`SELECT policy_no, life_prem_rate, acc_prem_rate, med_prem_rate, tpd_prem_rate, life_extra_rate, acc_extra_rate, life_prem, acc_prem, rate_flag FROM tx_est_snap_policy WHERE rate_flag IS NOT NULL LIMIT 5`);
    ratesample.rows.forEach(r => console.log(`  ${JSON.stringify(r)}`));

    // 5) For TC-018: Find claims with TPD/Medical but ori_sum_insu_life populated
    console.log('\n=== TC-018: claim_mem with TPD/Medical claim AND ori_sum_insu_life>0 ===');
    const tpdLife = await c.query(`
      SELECT COUNT(*)::int n, COUNT(*) FILTER (WHERE ori_sum_insu_life > 0)::int with_life
      FROM tx_rig_act_claim_mem
      WHERE (ori_sum_insu_tpd > 0 OR ori_sum_insu_acc > 0 OR ori_sum_insu_ipd > 0 OR ori_sum_insu_opd > 0)
        AND amo_paid_life = 0`);
    console.log(`  Non-Life rider claims: ${tpdLife.rows[0].n}, of which Original_SI_Life populated: ${tpdLife.rows[0].with_life}`);
    // Sample
    const sample = await c.query(`
      SELECT claim_no, claim_status, claim_type, age, ori_sum_insu_life, ori_sum_insu_tpd, ori_sum_insu_acc, ori_sum_insu_ipd, amo_paid_life, amo_paid_tpd, amo_paid_acc
      FROM tx_rig_act_claim_mem
      WHERE (ori_sum_insu_tpd > 0 OR ori_sum_insu_acc > 0 OR ori_sum_insu_ipd > 0)
        AND amo_paid_life = 0
      LIMIT 5`);
    console.log('  Sample non-Life claims with Life SI:');
    sample.rows.forEach(r => console.log(`    ${JSON.stringify(r)}`));

    // 6) For TC-019: Find policies with empty DBD code that resolved a type_business
    console.log('\n=== TC-019: Policies with null/empty DBD code in landing_company / est_snap_company ===');
    const noDbd = await c.query(`
      SELECT COUNT(*)::int total,
             COUNT(*) FILTER (WHERE COALESCE(NULLIF(TRIM(dbdcode),''), NULL) IS NULL)::int blank_dbd
      FROM tx_est_snap_company`);
    console.log(`  est_snap_company total=${noDbd.rows[0].total}, blank/null dbdcode=${noDbd.rows[0].blank_dbd}`);
    // Check if blank DBD policies still have type_business mapped
    const blankSample = await c.query(`
      SELECT policy_no, company_code, dbdcode, type_business
      FROM tx_est_snap_company
      WHERE COALESCE(NULLIF(TRIM(dbdcode),''), NULL) IS NULL
      LIMIT 5`);
    blankSample.rows.forEach(r => console.log(`    ${JSON.stringify(r)}`));

    // Configuration: any UI mapping table for policy → NOB override?
    console.log('\n=== Looking for policy-NOB config override tables ===');
    const cfgTbl = await c.query(`
      SELECT table_name, COUNT(*)::int n
      FROM information_schema.tables t
      LEFT JOIN information_schema.columns c ON c.table_name=t.table_name AND c.table_schema=t.table_schema
      WHERE t.table_schema='public'
        AND (t.table_name ILIKE '%nob%' OR t.table_name ILIKE '%nature%' OR c.column_name ILIKE '%nature_business%')
      GROUP BY t.table_name ORDER BY t.table_name`);
    cfgTbl.rows.forEach(r => console.log(`  ${r.table_name}`));

    // 7) For TC-014..017: Search for fields ประเภทการคำนวณ Rate (calc type) and Rate เฉลี่ย (avg rate)
    console.log('\n=== TC-014..017: Searching columns related to rate-calc-type / rate-avg in act/est snap ===');
    const reportCols = await c.query(`
      SELECT table_name, column_name
      FROM information_schema.columns
      WHERE table_schema='public'
        AND table_name IN ('tx_act_snap_cert_inforce','tx_est_snap_cert_inforce','tx_est_snap_cert_newbusiness','tx_act_snap_policy','tx_est_snap_policy','tx_stg_act_prem_layer','tx_stg_est_prem_layer')
        AND (column_name ILIKE '%rate%' OR column_name ILIKE '%avg%' OR column_name ILIKE '%calc%' OR column_name ILIKE '%flag%')
      ORDER BY table_name, column_name`);
    reportCols.rows.forEach(r => console.log(`  ${r.table_name}.${r.column_name}`));

    // 8) For TC-011/012: layer/member breakdown for GIB in 2025Q4
    console.log('\n=== TC-011/012: GIB 2025Q4 layer breakdown ===');
    const layerBreakdown = await c.query(`
      SELECT l.level, COUNT(*)::int n,
             COALESCE(SUM(l.ori_sa_life),0)::numeric ori_sa_life,
             COALESCE(SUM(l.ori_sa_add),0)::numeric ori_sa_add,
             COALESCE(SUM(l.ori_nb_prem_life),0)::numeric ori_nb_prem_life,
             COALESCE(SUM(l.ori_nb_prem_add),0)::numeric ori_nb_prem_add,
             COALESCE(SUM(l.member_life),0)::numeric member_life,
             COALESCE(SUM(l.member_add),0)::numeric member_add
      FROM tx_rig_act_policy_layer l
      JOIN tx_rig_act_policy_hd p ON l.rig_act_policy_hd_id = p.rig_act_policy_hd_id
      WHERE p.rig_act_hd_id IN (126, 602)
      GROUP BY l.level ORDER BY l.level`);
    layerBreakdown.rows.forEach(r => console.log(`  Level ${r.level}: members_life=${r.member_life} ori_sa_life=${r.ori_sa_life} ori_sa_add=${r.ori_sa_add} ori_nb_prem_life=${r.ori_nb_prem_life} ori_nb_prem_add=${r.ori_nb_prem_add} n=${r.n}`));

    // 9) Member ages distribution in GIB layer 1 (TC-012 age>70 check)
    console.log('\n=== TC-012: Member age distribution in GIB act_pol_mem (layer 1) ===');
    const ages = await c.query(`
      SELECT
        SUM(CASE WHEN m.age > 70 THEN 1 ELSE 0 END)::int over_70,
        SUM(CASE WHEN m.age > 70 THEN COALESCE(m.prem_acc,0) ELSE 0 END)::numeric over_70_prem_acc,
        SUM(CASE WHEN m.age <= 70 THEN 1 ELSE 0 END)::int under_70,
        SUM(CASE WHEN m.age <= 70 THEN COALESCE(m.prem_acc,0) ELSE 0 END)::numeric under_70_prem_acc,
        COUNT(*)::int total
      FROM tx_rig_act_pol_mem m
      JOIN tx_rig_act_policy_layer l ON m.rig_act_policy_layer_id = l.rig_act_policy_layer_id
      JOIN tx_rig_act_policy_hd p ON l.rig_act_policy_hd_id = p.rig_act_policy_hd_id
      WHERE p.rig_act_hd_id IN (126, 602) AND l.level = 1`);
    console.log(`  Layer 1 members: total=${ages.rows[0].total}, age>70=${ages.rows[0].over_70} (prem_acc=${ages.rows[0].over_70_prem_acc}), age<=70=${ages.rows[0].under_70} (prem_acc=${ages.rows[0].under_70_prem_acc})`);

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message, e.stack); process.exit(1); });

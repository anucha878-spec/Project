// Final clarifying queries (v2 — fix p.life_insure)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) act_policy_hd columns
    console.log('=== tx_rig_act_policy_hd life-related cols ===');
    const phdCols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_policy_hd' ORDER BY ordinal_position`);
    console.log(phdCols.rows.map(r=>r.column_name).join(', '));

    // 2) act_pol_mem to see life sa
    console.log('\n=== tx_rig_act_pol_mem columns ===');
    const pmCols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_pol_mem' ORDER BY ordinal_position`);
    console.log(pmCols.rows.map(r=>r.column_name).join(', '));

    // 3) TC-018: cross-check using policy_layer.ori_sa_life as life coverage indicator
    console.log('\n=== TC-018: claims missing Original_SI_Life vs policy layer life-SA presence ===');
    const xc = await c.query(`
      SELECT
        COUNT(*)::int total,
        SUM(CASE WHEN cm.ori_sum_insu_life > 0 THEN 1 ELSE 0 END)::int has_orig_life,
        SUM(CASE WHEN cm.ori_sum_insu_life = 0 AND COALESCE(pl.ori_sa_life,0) > 0 THEN 1 ELSE 0 END)::int missing_BUT_policy_has_life,
        SUM(CASE WHEN cm.ori_sum_insu_life = 0 AND COALESCE(pl.ori_sa_life,0) = 0 THEN 1 ELSE 0 END)::int correctly_no_life
      FROM tx_rig_act_claim_mem cm
      LEFT JOIN tx_rig_act_policy_layer pl ON cm.rig_act_policy_layer_id = pl.rig_act_policy_layer_id
      WHERE (cm.ori_sum_insu_tpd > 0 OR cm.ori_sum_insu_acc > 0 OR cm.ori_sum_insu_ipd > 0 OR cm.ori_sum_insu_opd > 0)
        AND cm.amo_paid_life = 0`);
    console.log(`  Non-Life rider claims breakdown: ${JSON.stringify(xc.rows[0])}`);

    // 2025Q4 only
    console.log('\n=== TC-018 scoped to 2025Q4 (hd_ids 104,113,126,508,599,602) ===');
    const q4 = await c.query(`
      SELECT
        COUNT(*)::int total,
        SUM(CASE WHEN cm.ori_sum_insu_life > 0 THEN 1 ELSE 0 END)::int has_orig_life,
        SUM(CASE WHEN cm.ori_sum_insu_life = 0 AND COALESCE(pl.ori_sa_life,0) > 0 THEN 1 ELSE 0 END)::int missing_BUT_policy_has_life,
        SUM(CASE WHEN cm.ori_sum_insu_life = 0 AND COALESCE(pl.ori_sa_life,0) = 0 THEN 1 ELSE 0 END)::int correctly_no_life
      FROM tx_rig_act_claim_mem cm
      JOIN tx_rig_act_policy_layer pl ON cm.rig_act_policy_layer_id = pl.rig_act_policy_layer_id
      JOIN tx_rig_act_policy_hd p ON pl.rig_act_policy_hd_id = p.rig_act_policy_hd_id
      WHERE p.rig_act_hd_id IN (104, 113, 126, 508, 599, 602)
        AND (cm.ori_sum_insu_tpd > 0 OR cm.ori_sum_insu_acc > 0 OR cm.ori_sum_insu_ipd > 0 OR cm.ori_sum_insu_opd > 0)
        AND cm.amo_paid_life = 0`);
    console.log(`  ${JSON.stringify(q4.rows[0])}`);

    // 4) TC-019: DBD code blank detection
    console.log('\n=== TC-019: All DBD columns + blank counts ===');
    const dbdCols = await c.query(`SELECT table_name, column_name FROM information_schema.columns WHERE table_schema='public' AND column_name ILIKE '%dbd%' ORDER BY table_name`);
    for (const r of dbdCols.rows){
      try {
        const cnt = await c.query(`SELECT COUNT(*)::int total, COUNT(*) FILTER (WHERE COALESCE(NULLIF(TRIM("${r.column_name}"::text),''),NULL) IS NULL)::int blank FROM "${r.table_name}"`);
        console.log(`  ${r.table_name}.${r.column_name}: total=${cnt.rows[0].total} blank=${cnt.rows[0].blank}`);
      } catch(e){ console.log(`  ${r.table_name}.${r.column_name}: ERR ${e.message}`); }
    }

    // 5) Check est_snap_company and look at how policy_no/company_code maps to dbdcode + type_business
    console.log('\n=== est_snap_company dbdcode/type_business distribution ===');
    const cb = await c.query(`SELECT type_business, COUNT(*)::int n FROM tx_est_snap_company GROUP BY type_business ORDER BY n DESC LIMIT 10`);
    cb.rows.forEach(r => console.log(`  type_business='${r.type_business}': ${r.n}`));

    // 6) BDR layer rate columns
    console.log('\n=== BDR new_renew rate_flag/avg-related cols ===');
    const br = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_new_renew' AND (column_name ILIKE '%rate%' OR column_name ILIKE '%avg%' OR column_name ILIKE '%flag%' OR column_name ILIKE '%calc%')`);
    console.log('  ' + br.rows.map(r=>r.column_name).join(', '));

    // 7) Layer table — any rate_flag?
    console.log('\n=== layer rate columns ===');
    const lr = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name IN ('tx_rig_act_policy_layer','tx_stg_act_prem_layer','tx_stg_est_prem_layer') AND column_name ILIKE '%rate%' ORDER BY column_name`);
    lr.rows.forEach(r => console.log(`  ${r.column_name}`));

    // 8) For TC-011: layer split (1/2/3) by SA — GIB 2025Q4 actual data
    console.log('\n=== TC-011: GIB 2025Q4 policy_layer level (SA tiers) ===');
    const ls = await c.query(`
      SELECT l.level, COUNT(*)::int policies,
             COALESCE(SUM(l.ori_sa_life),0)::numeric sa_life_total,
             COALESCE(SUM(l.ori_sa_add),0)::numeric sa_add_total,
             COALESCE(SUM(l.member_life),0)::numeric members_life,
             COALESCE(SUM(l.member_add),0)::numeric members_add,
             COALESCE(SUM(l.ori_nb_prem_life),0)::numeric nb_prem_life,
             COALESCE(SUM(l.ori_nb_prem_add),0)::numeric nb_prem_add,
             COALESCE(SUM(l.ori_ren_prem_life),0)::numeric ren_prem_life,
             COALESCE(SUM(l.ori_ren_prem_add),0)::numeric ren_prem_add
      FROM tx_rig_act_policy_layer l
      JOIN tx_rig_act_policy_hd p ON l.rig_act_policy_hd_id = p.rig_act_policy_hd_id
      WHERE p.rig_act_hd_id IN (126, 602)
      GROUP BY l.level ORDER BY l.level`);
    ls.rows.forEach(r => console.log(`  Level ${r.level}: policies=${r.policies} members_life=${r.members_life} members_add=${r.members_add} sa_life=${r.sa_life_total} sa_add=${r.sa_add_total} nb_prem_life=${r.nb_prem_life} nb_prem_add=${r.nb_prem_add} ren_prem_life=${r.ren_prem_life} ren_prem_add=${r.ren_prem_add}`));

    // 9) TC-012 specifically: age>70 check (accident L1)
    console.log('\n=== TC-012: GIB 2025Q4 — accident age>70 members in Layer 1 ===');
    const a70 = await c.query(`
      SELECT
        COUNT(*)::int total_l1_mems,
        SUM(CASE WHEN m.age > 70 THEN 1 ELSE 0 END)::int over_70,
        SUM(CASE WHEN m.age > 70 THEN COALESCE(m.prem_acc,0) ELSE 0 END)::numeric over_70_prem_acc,
        SUM(CASE WHEN m.age <= 70 THEN COALESCE(m.prem_acc,0) ELSE 0 END)::numeric under_70_prem_acc,
        SUM(COALESCE(m.prem_acc,0))::numeric total_prem_acc
      FROM tx_rig_act_pol_mem m
      JOIN tx_rig_act_policy_layer l ON m.rig_act_policy_layer_id = l.rig_act_policy_layer_id
      JOIN tx_rig_act_policy_hd p ON l.rig_act_policy_hd_id = p.rig_act_policy_hd_id
      WHERE p.rig_act_hd_id IN (126, 602) AND l.level = 1`);
    console.log(`  ${JSON.stringify(a70.rows[0])}`);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

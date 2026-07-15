// Read-only: inspect current state of policy GL5505 + find headers to attach Actual data
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

const show = (label, rows) => {
  console.log(`\n===== ${label} (${rows.length} rows) =====`);
  rows.forEach((r,i) => { console.log(`--- row ${i} ---`); Object.entries(r).forEach(([k,v]) => { if (v !== null && v !== 0 && v !== '0') console.log(`  ${k} = ${v}`); }); });
};

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) GL5505 in est_snap_policy
    show('tx_est_snap_policy WHERE policy_no=GL5505',
      (await c.query(`SELECT * FROM tx_est_snap_policy WHERE policy_no='GL5505'`)).rows);

    // 2) GL5505 in stg_est_all_policy
    show('tx_stg_est_all_policy WHERE policy_no=GL5505',
      (await c.query(`SELECT * FROM tx_stg_est_all_policy WHERE policy_no='GL5505'`)).rows);

    // 3) which process_hd is GL5505 est under? + treaty
    const procIds = (await c.query(`SELECT DISTINCT rig_process_hd_id, period FROM tx_est_snap_policy WHERE policy_no='GL5505'`)).rows;
    console.log('\nGL5505 est process_hd/period:', JSON.stringify(procIds));

    // 4) is GL5505 in est inforce_member / prem_layer / cert_inforce?
    for (const t of ['tx_stg_est_inforce_member','tx_stg_est_prem_layer','tx_est_snap_cert_inforce','tx_est_snap_company']) {
      const r = await c.query(`SELECT COUNT(*)::int n FROM ${t} WHERE policy_no='GL5505'`);
      console.log(`  ${t} GL5505: ${r.rows[0].n}`);
    }

    // 5) is GL5505 in rig_act_policy_hd? (Actual rig side)
    show('tx_rig_act_policy_hd WHERE policy_no=GL5505',
      (await c.query(`SELECT rig_act_policy_hd_id, rig_act_hd_id, policy_no, reinsurer_no, policy_year, period, data_quarter, policy_status, nob FROM tx_rig_act_policy_hd WHERE policy_no='GL5505'`)).rows);

    // 6) What treaty does GL_ belong to? look at act_hd SUCCESS list w/ treaty + period + quarter
    show('tx_rig_act_hd SUCCESS (recent)',
      (await c.query(`SELECT rig_act_hd_id, treaty_code, closing_quarter, period, status, sum_records FROM tx_rig_act_hd WHERE status='SUCCESS' ORDER BY closing_quarter DESC, treaty_code LIMIT 25`)).rows);

    // 7) bdr_claim header table structure existence + a sample
    const bdrClaimCols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_claim' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('\ntx_rig_act_bdr_claim cols:', bdrClaimCols.join(', ') || '(table not found)');

    // 8) sample existing rig_act_policy_hd + layer + pol_mem for a GIB policy to model shape
    const sampleHd = (await c.query(`SELECT rig_act_policy_hd_id, rig_act_hd_id, policy_no FROM tx_rig_act_policy_hd ph JOIN tx_rig_act_hd h ON ph.rig_act_hd_id=h.rig_act_hd_id WHERE h.treaty_code ILIKE '%GIB%' AND h.status='SUCCESS' LIMIT 1`)).rows;
    console.log('\nsample GIB rig_act_policy_hd:', JSON.stringify(sampleHd));
    if (sampleHd.length){
      const hid = sampleHd[0].rig_act_policy_hd_id;
      show('sample policy_layer for that hd',
        (await c.query(`SELECT rig_act_policy_layer_id, level, member_life, member_add, premium_rate_life, premium_rate_add, ori_sa_life, ori_sa_add, ori_nb_prem_life, ori_nb_prem_add, ori_ren_prem_life, ori_ren_prem_add FROM tx_rig_act_policy_layer WHERE rig_act_policy_hd_id=$1 ORDER BY level`, [hid])).rows);
    }

    // 9) treaty config for GL prefix policies (which treaty?)
    const treatyForGL = (await c.query(`SELECT DISTINCT h.treaty_code FROM tx_rig_act_policy_hd ph JOIN tx_rig_act_hd h ON ph.rig_act_hd_id=h.rig_act_hd_id WHERE ph.policy_no LIKE 'GL%' LIMIT 10`)).rows;
    console.log('\ntreaties having GL% policies:', JSON.stringify(treatyForGL));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

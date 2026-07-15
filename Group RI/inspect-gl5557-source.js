const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) Which tables even have GL5557? (policy_no column) — find live sources
    console.log('=== 1) tables containing policy_no=GL5557 (scan public tables w/ policy_no col) ===');
    const tbls = (await c.query(`
      SELECT table_name FROM information_schema.columns
      WHERE table_schema='public' AND column_name='policy_no' ORDER BY table_name`)).rows.map(r=>r.table_name);
    const hits = [];
    for (const t of tbls) {
      try {
        const r = await c.query(`SELECT COUNT(*)::int n, MIN(period::text) pmin, MAX(period::text) pmax FROM ${t} WHERE policy_no='GL5557'`);
        if (r.rows[0].n>0) hits.push({t, ...r.rows[0]});
      } catch(e){ /* table may lack period col */
        try { const r2 = await c.query(`SELECT COUNT(*)::int n FROM ${t} WHERE policy_no='GL5557'`); if(r2.rows[0].n>0) hits.push({t, n:r2.rows[0].n, pmin:'(no period col)', pmax:''}); } catch(_){}
      }
    }
    console.log(J(hits));

    // 2) Snapshot cert_inforce GL5557 — premium sums
    console.log('\n=== 2) tx_est_snap_cert_inforce GL5557 : aggregate ===');
    console.log(J((await c.query(`
      SELECT period, COUNT(*)::int certs,
             SUM(life_prem)::numeric sum_life_prem, SUM(acc_prem)::numeric sum_acc_prem,
             SUM(sum_life_prem)::numeric sum_sumlife, SUM(sum_acc_prem)::numeric sum_sumacc, SUM(sum_total_prem)::numeric sum_total,
             SUM(life_insur)::numeric sum_life_sa, SUM(acc_insur)::numeric sum_acc_sa
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557' GROUP BY period`)).rows));

    // 3) staging member 202604 — maybe still under different proc; check all members ever for GL5557
    console.log('\n=== 3) tx_stg_est_inforce_member GL5557 : per process_hd aggregate ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n,
             SUM(prem_life)::numeric s_life, SUM(prem_extra_life)::numeric s_xlife,
             SUM(prem_acc)::numeric s_acc, SUM(sum_insured_life)::numeric s_sa_life
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5557' GROUP BY rig_process_hd_id, period`)).rows));

    // 4) Hunt for the magic base 927954 (life) and 242625.6 (acc) anywhere obvious:
    //    check if 0.15*sum_total or similar matches in snapshot
    console.log('\n=== 4) targets: life base=927954.00, acc base=242625.60 ; ri_life=139193.10 ri_acc=36393.84 ===');

    // 5) Compare: do single-layer policies have only 1 prem_layer row vs multi? confirm structural diff
    console.log('\n=== 5) prem_layer row-count per hd-452 policy ===');
    console.log(J((await c.query(`
      SELECT policy_no, COUNT(*)::int layers, STRING_AGG(level,',' ORDER BY level) levels
      FROM tx_stg_est_prem_layer WHERE rig_process_hd_id=14587
        AND policy_no IN (SELECT policy_no FROM tx_rig_est_policy_hd WHERE rig_est_hd_id=452)
      GROUP BY policy_no ORDER BY policy_no`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

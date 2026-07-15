const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // Expected ri_prem_life = prem_layer.life_prem * percent_re(layer).
    // GIB cede: L1=15, L2=100, L3=0. Join policy_dt(actual) to prem_layer(base, proc 14587).
    const q = `
      WITH cede(level, pct) AS (VALUES ('L1',0.15),('L2',1.00),('L3',0.00))
      SELECT ph.policy_no, pd.level,
             COALESCE(pl.life_prem,0)        AS base_life_prem,
             COALESCE(pl.life_extra_prem,0)  AS base_life_extra,
             cede.pct                        AS cede_pct,
             ROUND(COALESCE(pl.life_prem,0)*cede.pct,2)                      AS expected_ri_life,
             ROUND((COALESCE(pl.life_prem,0)+COALESCE(pl.life_extra_prem,0))*cede.pct,2) AS expected_incl_extra,
             pd.ri_prem_life                 AS actual_ri_life,
             ROUND(pd.ri_prem_life - COALESCE(pl.life_prem,0)*cede.pct, 2)   AS diff
      FROM tx_rig_est_policy_dt pd
      JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id = pd.rig_est_policy_hd_id
      JOIN cede ON cede.level = pd.level
      LEFT JOIN tx_stg_est_prem_layer pl
             ON pl.policy_no = ph.policy_no AND pl.level = pd.level AND pl.rig_process_hd_id = 14587
      WHERE ph.rig_est_hd_id = 452
      ORDER BY ph.policy_no, pd.level`;
    const rows = (await c.query(q)).rows;
    const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2, maximumFractionDigits:2});
    console.log('policy   | lvl | base_life_prem |  cede | expected_ri |  actual_ri  |   diff      | verdict');
    console.log('-'.repeat(110));
    for (const r of rows) {
      const ok = Math.abs(Number(r.diff)) < 0.05;
      const interesting = Number(r.actual_ri_life)!==0 || Number(r.base_life_prem)!==0;
      if (!interesting) continue;
      console.log(
        `${r.policy_no.padEnd(8)} | ${r.level} | ${f(r.base_life_prem).padStart(14)} | ${(r.cede_pct*100)+'%'.padEnd(4)} | ${f(r.expected_ri_life).padStart(11)} | ${f(r.actual_ri_life).padStart(11)} | ${f(r.diff).padStart(11)} | ${ok?'OK':'*** MISMATCH'}`
      );
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

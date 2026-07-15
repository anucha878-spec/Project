const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 0) schema of policy_hd (the parent of policy_dt) — find link to est_hd
    console.log('=== schema tx_rig_est_policy_hd ===');
    console.log((await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_est_policy_hd' ORDER BY ordinal_position`)).rows.map(r=>`${r.column_name}:${r.data_type}`).join(', '));

    // 1) the policy_hd 17204
    console.log('\n=== 1) tx_rig_est_policy_hd WHERE rig_est_policy_hd_id=17204 ===');
    console.log(J((await c.query(`SELECT * FROM tx_rig_est_policy_hd WHERE rig_est_policy_hd_id=17204`)).rows));

    // 2) ALL policy_dt rows for GL5557 under policy_hd 17204 (all layers)
    console.log('\n=== 2) ALL tx_rig_est_policy_dt for policy_hd 17204 (GL5557) ===');
    console.log(J((await c.query(`
      SELECT rig_est_policy_dt_id, level, ri_prem_life, ri_prem_acc, ri_prem_tpd, ri_prem_medical
      FROM tx_rig_est_policy_dt WHERE rig_est_policy_hd_id=17204 ORDER BY level`)).rows));

    // 3) staging prem_layer for GL5557 (life/acc premium per layer = the BASE before cede%)
    console.log('\n=== 3) tx_stg_est_prem_layer : GL5557 by level ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, level, life_insure, accident_insure, tpd_insure,
             life_prem_rate, accident_prem_rate, life_prem, accident_prem, tpd_prem, life_extra_prem
      FROM tx_stg_est_prem_layer WHERE policy_no='GL5557' ORDER BY period DESC, level`)).rows));

    // 4) treaty layer cede % config for GIB (cf_treaty_id=2)
    console.log('\n=== 4) treaty cond hd/dt for GIB ===');
    console.log(J((await c.query(`
      SELECT hd.cf_rig_treaty_cond_hd_id, hd.cf_rig_treaty_id, hd.method, hd.ri_com_rate,
             dt.level, dt.sa_from, dt.sa_to, dt.percent_re
      FROM cf_rig_treaty_cond_hd hd JOIN cf_rig_treaty_cond_dt dt ON dt.cf_rig_treaty_cond_hd_id=hd.cf_rig_treaty_cond_hd_id
      WHERE hd.cf_rig_treaty_id=2 ORDER BY dt.level`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

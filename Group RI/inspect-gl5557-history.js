const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) all est_policy_hd for GL5557 across periods/hd
    console.log('=== 1) tx_rig_est_policy_hd : GL5557 (all) ===');
    console.log(J((await c.query(`
      SELECT ph.rig_est_policy_hd_id, ph.rig_est_hd_id, hd.closing_period, hd.treaty_code, hd.status,
             ph.period, ph.policy_year, ph.report_policy_status, ph.created_date
      FROM tx_rig_est_policy_hd ph LEFT JOIN tx_rig_est_hd hd ON hd.rig_est_hd_id=ph.rig_est_hd_id
      WHERE ph.policy_no='GL5557' ORDER BY ph.created_date`)).rows));

    // 2) all policy_dt for GL5557 (across all policy_hd) — L1/L2/L3 ri values per hd/period
    console.log('\n=== 2) ALL tx_rig_est_policy_dt for GL5557 (per policy_hd) ===');
    console.log(J((await c.query(`
      SELECT pd.rig_est_policy_dt_id, pd.rig_est_policy_hd_id, ph.rig_est_hd_id, ph.period, ph.policy_year,
             pd.level, pd.ri_prem_life, pd.ri_prem_acc, pd.created_date
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE pd.policy_no='GL5557' ORDER BY ph.period, ph.policy_year, pd.level`)).rows));

    // 3) does 139193.10 / 36393.84 / 927954 appear anywhere in policy_dt (any policy)?
    console.log('\n=== 3) search policy_dt for ri_prem_life IN (139193.10, 927954) any policy ===');
    console.log(J((await c.query(`
      SELECT policy_no, level, ri_prem_life, ri_prem_acc FROM tx_rig_est_policy_dt
      WHERE ri_prem_life IN (139193.10, 927954.00) OR ri_prem_acc IN (36393.84, 242625.60) LIMIT 20`)).rows));

    // 4) tx_rig_est_bdr for GL5557 (premium + ri rollup per period)
    console.log('\n=== 4) tx_rig_est_bdr : GL5557 (key cols) ===');
    const bdrcols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_est_bdr' AND (column_name ILIKE '%prem%' OR column_name ILIKE '%period%' OR column_name ILIKE '%policy_year%' OR column_name ILIKE '%life%' OR column_name ILIKE '%acc%') ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log('  bdr prem/life/acc cols:', bdrcols.join(', '));
    console.log(J((await c.query(`
      SELECT period, policy_year, ri_prem_1st_life, ri_prem_1st_add, ri_prem_renew_life, ri_prem_renew_add
      FROM tx_rig_est_bdr WHERE policy_no='GL5557' ORDER BY period, policy_year`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

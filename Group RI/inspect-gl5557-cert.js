const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // schema cert_inforce (premium-ish cols)
    console.log('=== schema tx_est_snap_cert_inforce ===');
    console.log((await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_est_snap_cert_inforce' ORDER BY ordinal_position`)).rows.map(r=>`${r.column_name}:${r.data_type}`).join(', '));

    // cer 00005 (the single L2 member, 20M) — all premium-ish columns
    console.log('\n=== cer 00005 GL5557 (L2 member) full row ===');
    console.log(J((await c.query(`SELECT * FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557' AND cer_no='00005'`)).rows));

    // Split certs by SA band (life) and aggregate the candidate premium columns
    console.log('\n=== aggregate by life SA-band (GIB: L1<=5M, L2 5M-20M, L3>20M) ===');
    console.log(J((await c.query(`
      SELECT CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2' ELSE 'L3' END AS band,
             COUNT(*)::int n,
             SUM(life_insur)::numeric sa_life,
             SUM(life_prem)::numeric sum_life_prem_col,
             SUM(sum_life_prem)::numeric sum_sumlifeprem_col,
             SUM(acc_prem)::numeric sum_acc_prem_col,
             SUM(sum_acc_prem)::numeric sum_sumaccprem_col
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557'
      GROUP BY 1 ORDER BY 1`)).rows));

    // targets recap
    console.log('\n=== TARGETS: ri_life L1=139193.10 (base@15%=927954.00) ; ri_life L2=46080.00 (base@100%=46080) ; ri_acc L1=36393.84 (base@15%=242625.60) ; ri_acc L2=15120.00 ===');

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

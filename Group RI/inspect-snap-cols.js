// Get columns + period sample for the 9 tx_est_snap_* tables
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };
const TABLES = [
  'tx_est_snap_policy','tx_est_snap_certificate_cust','tx_est_snap_company',
  'tx_est_snap_claim_death','tx_est_snap_claimtpd','tx_est_snap_claimhealth',
  'tx_est_snap_cert_inforce','tx_est_snap_cert_newbusiness','tx_est_snap_unname_policy'
];
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    for (const t of TABLES){
      const cols = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`, [t]);
      const colNames = cols.rows.map(r=>r.column_name);
      const colsLine = colNames.join(', ');
      const cnt = await c.query(`SELECT COUNT(*)::int n FROM "${t}"`);
      // Find period-like col
      const pCol = colNames.find(n => /period|closing/i.test(n));
      let pInfo = '';
      if (pCol){
        try {
          const pq = await c.query(`SELECT "${pCol}" p, COUNT(*)::int n FROM "${t}" GROUP BY "${pCol}" ORDER BY "${pCol}" DESC LIMIT 5`);
          pInfo = ` periods=[${pq.rows.map(x=>x.p+':'+x.n).join(', ')}]`;
        } catch(e){}
      }
      // Find treaty col
      const tCol = colNames.find(n=>/treaty/i.test(n));
      let tInfo = '';
      if (tCol){
        try {
          const tq = await c.query(`SELECT "${tCol}" t, COUNT(*)::int n FROM "${t}" GROUP BY "${tCol}" ORDER BY n DESC LIMIT 5`);
          tInfo = ` treaties=[${tq.rows.map(x=>x.t+':'+x.n).join(', ')}]`;
        } catch(e){}
      }
      console.log(`\n=== ${t} (${cols.rows.length} cols, ${cnt.rows[0].n} rows)${pInfo}${tInfo} ===`);
      console.log(`  ${colsLine}`);
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

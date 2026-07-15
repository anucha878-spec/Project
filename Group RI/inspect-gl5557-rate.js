const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== schema tx_est_snap_prem_rate ===');
    console.log((await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_est_snap_prem_rate' ORDER BY ordinal_position`)).rows.map(r=>`${r.column_name}:${r.data_type}`).join(', '));

    console.log('\n=== prem_rate rows for GL5557 (sample 10) ===');
    console.log(J((await c.query(`SELECT * FROM tx_est_snap_prem_rate WHERE policy_no='GL5557' ORDER BY 1 LIMIT 10`)).rows));

    console.log('\n=== prem_rate rows for GL5557 age 68 (the L2 member) ===');
    // try common age column names
    const colnames = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_est_snap_prem_rate'`)).rows.map(r=>r.column_name);
    const ageCol = colnames.find(x=>/age/i.test(x));
    console.log('age column guess:', ageCol);
    if (ageCol) {
      console.log(J((await c.query(`SELECT * FROM tx_est_snap_prem_rate WHERE policy_no='GL5557' AND ${ageCol}=68`)).rows));
    }

    // TARGET: L2 implied life rate 2.304, acc rate 0.756 ; L1 weighted life ~3.9018, acc ~1.0294
    console.log('\n=== TARGET implied rates: L2 age68 life=2.304 acc=0.756 ===');
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

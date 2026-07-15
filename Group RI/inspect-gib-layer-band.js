// Read-only: find GIB treaty layer/retention band thresholds + how certs map to layers
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) treaty config tables
    console.log('=== treaty/config tables ===');
    console.log(J((await c.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema='public' AND (table_name ILIKE 'cf_%treaty%' OR table_name ILIKE '%retention%' OR table_name ILIKE '%cond%' OR table_name ILIKE 'cf_%layer%')
      ORDER BY table_name`)).rows.map(r=>r.table_name)));

    // 2) cf_rig_treaty_cond_dt columns (mentioned in CR#5 notes)
    for (const t of ['cf_rig_treaty_cond_dt','cf_rig_treaty_cond_hd','cf_rig_treaty','cf_treaty']) {
      const cols = (await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,[t])).rows;
      if (cols.length) { console.log(`\n=== ${t} cols ===`); console.log(cols.map(x=>`${x.column_name}:${x.data_type}`).join(', ')); }
    }

    // 3) try to read GIB treaty layer thresholds
    try {
      console.log('\n=== cf_rig_treaty_cond_dt for GIB ===');
      console.log(J((await c.query(`
        SELECT * FROM cf_rig_treaty_cond_dt d
        WHERE EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='cf_rig_treaty_cond_dt' AND column_name='level')
        LIMIT 20`)).rows));
    } catch(e){ console.log('  skip:', e.message); }

    // 4) distinct SA values across the 651 certs (to see banding)
    console.log('\n=== GL5505 cert life_insur distinct (band view) ===');
    console.log(J((await c.query(`
      SELECT life_insur, COUNT(*)::int n
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'
      GROUP BY life_insur ORDER BY life_insur`)).rows));

    // 5) the real policy_hd 2658 layers (already know L1=470M). Confirm any treaty band on layer
    console.log('\n=== real GL5505 layers (policy_hd 2658) member/SA ===');
    console.log(J((await c.query(`
      SELECT level, member_life, member_add, ori_sa_life, ori_sa_add, premium_rate_life
      FROM tx_rig_act_policy_layer WHERE rig_act_policy_hd_id=2658 ORDER BY level`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

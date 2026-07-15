const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== GIB treaty layer bands (cond_dt) ===');
    console.log(J((await c.query(`
      SELECT t.treaty_code, h.cf_rig_treaty_cond_id, h.ri_method, h.min_sum_assured,
             d.layer, d.minimum, d.maximum, d.percent_re,
             h.effective_date_from, h.effective_date_to, h.status
      FROM cf_rig_treaty t
      JOIN cf_rig_treaty_cond_hd h ON h.cf_rig_treaty_id=t.cf_rig_treaty_id
      JOIN cf_rig_treaty_cond_dt d ON d.cf_rig_treaty_cond_hd_id=h.cf_rig_treaty_cond_id
      WHERE t.treaty_code='GIB_Grp_Direct_EB'
      ORDER BY h.effective_date_from DESC, d.layer`)).rows));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

// Read-only: find clean target header for GL5505 Actual data + verify bdr/claim table names
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) SUCCESS act_hd for GIB treaty, with process linkage if any
    console.log('=== SUCCESS GIB act_hd ===');
    console.log(J((await c.query(`
      SELECT rig_act_hd_id, treaty_code, closing_quarter, period, status, sum_records, ri_std_hd_id
      FROM tx_rig_act_hd
      WHERE status='SUCCESS' AND treaty_code ILIKE '%GIB%'
      ORDER BY closing_quarter DESC, period DESC LIMIT 15`)).rows));

    // 2) Is GL5505 already in any SUCCESS GIB act_hd's policy_hd? join to find which
    console.log('\n=== GL5505 policy_hd under SUCCESS GIB act_hd ===');
    console.log(J((await c.query(`
      SELECT ph.rig_act_policy_hd_id, ph.rig_act_hd_id, h.closing_quarter, ph.period, ph.policy_year, ph.policy_status
      FROM tx_rig_act_policy_hd ph
      JOIN tx_rig_act_hd h ON ph.rig_act_hd_id=h.rig_act_hd_id
      WHERE ph.policy_no='GL5505' AND h.status='SUCCESS' AND h.treaty_code ILIKE '%GIB%'
      ORDER BY h.closing_quarter DESC, ph.period DESC LIMIT 10`)).rows));

    // 3) For those policy_hd, do layer/pol_mem/claim rows already exist?
    console.log('\n=== GL5505 layer/pol_mem/claim counts (any hd) ===');
    console.log(J((await c.query(`
      SELECT
        (SELECT COUNT(*)::int FROM tx_rig_act_policy_layer WHERE policy_no='GL5505') AS layers,
        (SELECT COUNT(*)::int FROM tx_rig_act_pol_mem m JOIN tx_rig_act_policy_layer l ON m.rig_act_policy_layer_id=l.rig_act_policy_layer_id WHERE l.policy_no='GL5505') AS pol_mem,
        (SELECT COUNT(*)::int FROM tx_rig_act_claim_mem cm JOIN tx_rig_act_policy_layer l ON cm.rig_act_policy_layer_id=l.rig_act_policy_layer_id WHERE l.policy_no='GL5505') AS claim_mem
      `)).rows));

    // 4) confirm bdr/claim table names (pattern)
    console.log('\n=== bdr / claim table names ===');
    console.log(J((await c.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema='public' AND (table_name ILIKE '%bdr%' OR table_name ILIKE '%claim%' OR table_name ILIKE '%process_hd%')
      ORDER BY table_name`)).rows.map(r=>r.table_name)));

    // 5) the runner uses HD_IDS=[104,113,126,508,599,602] for 2025Q4. Check those.
    console.log('\n=== runner HD_IDS state ===');
    console.log(J((await c.query(`
      SELECT rig_act_hd_id, treaty_code, closing_quarter, period, status, sum_records
      FROM tx_rig_act_hd WHERE rig_act_hd_id = ANY('{104,113,126,508,599,602}'::bigint[])
      ORDER BY rig_act_hd_id`)).rows));

    // 6) which of those HD_IDS contain GL5505 policy_hd?
    console.log('\n=== GL5505 in runner HD_IDS? ===');
    console.log(J((await c.query(`
      SELECT rig_act_hd_id, rig_act_policy_hd_id, period, policy_year, policy_status
      FROM tx_rig_act_policy_hd
      WHERE policy_no='GL5505' AND rig_act_hd_id = ANY('{104,113,126,508,599,602}'::bigint[])
      ORDER BY rig_act_hd_id`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

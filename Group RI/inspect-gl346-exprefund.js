const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);
const cols = async (c,t) => (await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,[t])).rows.map(r=>`${r.column_name}:${r.data_type}`).join(', ');

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    console.log('=== schema tx_stg_act_exp_refund ===');   console.log(await cols(c,'tx_stg_act_exp_refund'));
    console.log('\n=== schema tx_act_snap_exprefund ===');   console.log(await cols(c,'tx_act_snap_exprefund'));
    console.log('\n=== schema tx_rig_landing_exprefund ==='); console.log(await cols(c,'tx_rig_landing_exprefund'));

    // distinct periods for GL346 across layers
    console.log('\n=== GL346 presence (period counts) ===');
    for (const t of ['tx_stg_act_exp_refund','tx_act_snap_exprefund','tx_rig_landing_exprefund']) {
      try {
        const r = await c.query(`SELECT period::text, COUNT(*)::int n FROM ${t} WHERE policy_no='GL346' GROUP BY period ORDER BY period`);
        console.log(`  ${t}:`, J(r.rows));
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    // STAGING (policy-level) — full rows for GL346
    console.log('\n=== tx_stg_act_exp_refund : GL346 (all rows) ===');
    console.log(J((await c.query(`SELECT * FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY period, policy_year`)).rows));

    // SNAPSHOT per coverage
    console.log('\n=== tx_act_snap_exprefund : GL346 per coverage (key cols) ===');
    console.log(J((await c.query(`
      SELECT period, policy_year, doc_no, rd_type, rd_name, premium, premium_all, premium_all_g,
             exp_refund_g_percent, claim_reserve_percent, total_amt_percent,
             exp_refund, exp_refund_g, exp_refund_dt
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' ORDER BY period, policy_year, rd_type, doc_no`)).rows));

    // LANDING per coverage
    console.log('\n=== tx_rig_landing_exprefund : GL346 per coverage (key cols) ===');
    console.log(J((await c.query(`
      SELECT period, policy_year, doc_no, rd_type, rd_name, premium, exp_refund, exp_refund_dt, exp_refund_g
      FROM tx_rig_landing_exprefund WHERE policy_no='GL346' ORDER BY period, policy_year, rd_type, doc_no`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

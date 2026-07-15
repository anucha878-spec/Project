const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);
const cols = async (c, t) => (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position`,[t])).rows.map(r=>r.column_name).join(', ');

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // schemas
    console.log('=== schema cf_rig_treaty_cond_hd ==='); console.log(await cols(c,'cf_rig_treaty_cond_hd'));
    console.log('\n=== schema cf_rig_treaty_cond_dt ==='); console.log(await cols(c,'cf_rig_treaty_cond_dt'));
    console.log('\n=== schema tx_rig_est_pol_mem ==='); console.log(await cols(c,'tx_rig_est_pol_mem'));
    console.log('\n=== schema tx_stg_est_inforce_member ==='); console.log(await cols(c,'tx_stg_est_inforce_member'));

    // treaty config GIB (cf_treaty_id=2) — dump full hd+dt
    console.log('\n=== treaty cond hd (cf_rig_treaty_id=2) ===');
    console.log(J((await c.query(`SELECT * FROM cf_rig_treaty_cond_hd WHERE cf_rig_treaty_id=2`)).rows));
    console.log('\n=== treaty cond dt for those hd ===');
    console.log(J((await c.query(`SELECT * FROM cf_rig_treaty_cond_dt WHERE cf_rig_treaty_cond_hd_id IN (SELECT cf_rig_treaty_cond_hd_id FROM cf_rig_treaty_cond_hd WHERE cf_rig_treaty_id=2)`)).rows));

    // pol_mem rollup for GL5557
    console.log('\n=== tx_rig_est_pol_mem : GL5557 (period 202604) ===');
    console.log(J((await c.query(`SELECT * FROM tx_rig_est_pol_mem WHERE policy_no='GL5557' ORDER BY period DESC LIMIT 5`)).rows));

    // member-level staging for GL5557
    console.log('\n=== tx_stg_est_inforce_member : GL5557 count + sample ===');
    console.log(J((await c.query(`
      SELECT COUNT(*)::int n, SUM(sum_insured_life)::numeric sum_life_sa, SUM(prem_life)::numeric sum_life_prem,
             SUM(sum_insured_accident)::numeric sum_acc_sa, SUM(prem_acc)::numeric sum_acc_prem,
             MIN(rate_type) rate_type
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5557'`)).rows));
    console.log(J((await c.query(`
      SELECT cer_no, age, sex, sum_insured_life, sum_insured_accident, prem_life, prem_acc, rate_type
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5557' ORDER BY cer_no LIMIT 20`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // distinct policy_year per stage for GL346 vs a working exp-refund policy
    const cmp = async (p) => {
      const ef = (await c.query(`SELECT DISTINCT policy_year FROM tx_act_snap_exprefund WHERE policy_no=$1 ORDER BY 1`,[p])).rows.map(r=>r.policy_year);
      const aph = (await c.query(`SELECT DISTINCT policy_year FROM tx_rig_act_policy_hd WHERE policy_no=$1 ORDER BY 1`,[p])).rows.map(r=>r.policy_year);
      const bdr = (await c.query(`SELECT DISTINCT policy_year FROM tx_rig_act_bdr_new_renew WHERE policy_no=$1 ORDER BY 1`,[p])).rows.map(r=>r.policy_year);
      console.log(`  ${p}: exp_refund PY=[${ef}]  | act_policy_hd PY=[${aph}]  | BDR PY=[${bdr}]  → ${ef.some(y=>bdr.includes(y))?'OVERLAP ✅':'NO OVERLAP ❌'}`);
    };
    console.log('=== policy_year per stage (exp_refund vs act result vs BDR) ===');
    await cmp('GL346');
    for (const p of ['GL2921','GH4634','GH346']) { try { await cmp(p); } catch(e){ console.log(`  ${p}: ${e.message}`);} }

    // GL346 under CURRENT active act_hd 645 (2026Q1 SUCCESS/A) — any BDR row + exp_refund?
    console.log('\n=== GL346 BDR under current active act_hd 645 ===');
    console.log(J((await c.query(`
      SELECT rig_act_bdr_new_renew_id bdr_id, policy_year, closing_quarter,
             tot_ori_ex_refund_paid_life, tot_ori_ex_refund_paid_add
      FROM tx_rig_act_bdr_new_renew WHERE policy_no='GL346' AND rig_act_hd_id=645`)).rows));

    // Is GL346 even in act_hd 645's policy set?
    console.log('\n=== GL346 in act_hd 645 policy_hd? ===');
    console.log(J((await c.query(`SELECT rig_act_policy_hd_id, policy_year FROM tx_rig_act_policy_hd WHERE policy_no='GL346' AND rig_act_hd_id=645`)).rows));

    // exp_refund snap PY -> does any snap row carry PY 8 or 9?
    console.log('\n=== GL346 exp_refund snap: any PY 8/9 row? ===');
    console.log(J((await c.query(`SELECT policy_year, COUNT(*)::int n FROM tx_act_snap_exprefund WHERE policy_no='GL346' GROUP BY policy_year ORDER BY policy_year`)).rows));

    // commencement/effective dates to understand true policy age
    console.log('\n=== GL346 dates (staging exp_refund) — true policy age ===');
    console.log(J((await c.query(`SELECT policy_year, commencement_date, effective_date, end_date, period_begin_date, period_end_date FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows));

    // act_policy_hd dates for GL346 (where does PY 8/9 come from?)
    console.log('\n=== GL346 act_policy_hd: policy_year + dates (PY8/9 source) ===');
    const phcols = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_policy_hd' AND (column_name ILIKE '%date%' OR column_name ILIKE '%year%')`)).rows.map(r=>r.column_name);
    console.log('  date/year cols:', phcols.join(', '));
    console.log(J((await c.query(`SELECT rig_act_hd_id, policy_year, ${phcols.filter(x=>x!=='policy_year').join(', ')} FROM tx_rig_act_policy_hd WHERE policy_no='GL346' AND rig_act_hd_id=639 LIMIT 3`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

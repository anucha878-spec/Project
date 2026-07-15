// GL2921 — เทียบ stg.exp_refund vs bdr.tot_ori_ex_refund_paid_{life,add}
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) Staging GL2921
  console.log('=== 1. GL2921 — Staging ===');
  const stg = await c.query(`
    SELECT policy_year, period, total_premium, claim, exp_refund_previous_year AS lcf,
           percent_exp_refund, percent_expense, exp_refund,
           claim_life, claim_add, claim_dismem
    FROM tx_stg_act_exp_refund WHERE policy_no='GL2921'`);
  stg.rows.forEach(r => console.log(`  py=${r.policy_year} period=${r.period}: prem=${r.total_premium} claim=${r.claim} LCF=${r.lcf} → exp_refund=${r.exp_refund} | claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem}`));

  // 2) Snap GL2921 (per coverage)
  console.log('\n=== 2. GL2921 — Snap (per coverage) ===');
  const snap = await c.query(`
    SELECT policy_year, doc_no, rd_type, premium, exp_refund, exp_refund_dt
    FROM tx_act_snap_exprefund WHERE policy_no='GL2921' AND exp_refund <> 0
    ORDER BY policy_year, doc_no, rd_type`);
  snap.rows.forEach(r => console.log(`  py=${r.policy_year} ${r.doc_no} rd=${r.rd_type} prem=${r.premium} exp_refund=${r.exp_refund} dt=${r.exp_refund_dt}`));

  // 3) BDR GL2921 — ดู mapping ครบ
  console.log('\n=== 3. GL2921 — BDR rows ที่มี exp_refund > 0 ===');
  const bdr = await c.query(`
    SELECT rig_act_hd_id, closing_quarter, policy_year,
           tot_ori_ex_refund_paid_life, tot_ori_ex_refund_paid_add,
           tot_re_ex_refund_paid_life, tot_re_ex_refund_paid_add,
           l1_ori_ex_refund_paid_life, l2_ori_ex_refund_paid_life, l3_ori_ex_refund_paid_life,
           l1_re_ex_refund_paid_life, l2_re_ex_refund_paid_life, l3_re_ex_refund_paid_life,
           ex_refund_rate_life, ex_refund_rate_acc,
           ori_ex_refund_life, ori_ex_refund_acc, re_ex_refund_life, re_ex_refund_acc
    FROM tx_rig_act_bdr_new_renew
    WHERE policy_no='GL2921' AND (tot_ori_ex_refund_paid_life <> 0 OR tot_ori_ex_refund_paid_add <> 0)
    ORDER BY rig_act_hd_id`);
  bdr.rows.forEach(r => {
    console.log(`\n  hd=${r.rig_act_hd_id} ${r.closing_quarter} py=${r.policy_year}`);
    console.log(`    Original Paid:  life=${r.tot_ori_ex_refund_paid_life} | add=${r.tot_ori_ex_refund_paid_add}`);
    console.log(`    Re Paid:        life=${r.tot_re_ex_refund_paid_life} | add=${r.tot_re_ex_refund_paid_add}`);
    console.log(`    L1/L2/L3 ori_life: ${r.l1_ori_ex_refund_paid_life}/${r.l2_ori_ex_refund_paid_life}/${r.l3_ori_ex_refund_paid_life}`);
    console.log(`    L1/L2/L3 re_life:  ${r.l1_re_ex_refund_paid_life}/${r.l2_re_ex_refund_paid_life}/${r.l3_re_ex_refund_paid_life}`);
    console.log(`    Rates: life=${r.ex_refund_rate_life}% acc=${r.ex_refund_rate_acc}%`);
    console.log(`    Aggregate: ori_life=${r.ori_ex_refund_life} ori_acc=${r.ori_ex_refund_acc} re_life=${r.re_ex_refund_life} re_acc=${r.re_ex_refund_acc}`);
  });

  // 4) Verify mapping: stg.exp_refund = bdr.tot_ori_ex_refund_paid_life + bdr.tot_ori_ex_refund_paid_add?
  console.log('\n=== 4. ตรวจ mapping rule ===');
  console.log('  Hypothesis 1: stg.exp_refund = tot_ori_ex_refund_paid_life + tot_ori_ex_refund_paid_add');
  const map = await c.query(`
    SELECT
      stg.policy_no, stg.policy_year, stg.exp_refund AS stg_exp_refund,
      bdr.rig_act_hd_id,
      bdr.tot_ori_ex_refund_paid_life AS bdr_ori_life,
      bdr.tot_ori_ex_refund_paid_add AS bdr_ori_add,
      (bdr.tot_ori_ex_refund_paid_life + bdr.tot_ori_ex_refund_paid_add) AS bdr_total_ori,
      bdr.tot_re_ex_refund_paid_life AS bdr_re_life,
      bdr.tot_re_ex_refund_paid_add AS bdr_re_add,
      bdr.ex_refund_rate_life, bdr.ex_refund_rate_acc
    FROM tx_stg_act_exp_refund stg
    JOIN tx_rig_act_bdr_new_renew bdr
      ON bdr.policy_no = stg.policy_no
    WHERE stg.exp_refund <> 0
      AND (bdr.tot_ori_ex_refund_paid_life <> 0 OR bdr.tot_ori_ex_refund_paid_add <> 0)
    ORDER BY stg.policy_no, bdr.rig_act_hd_id
    LIMIT 30`);
  map.rows.forEach(r => {
    const matchOri = Math.abs(Number(r.stg_exp_refund) - Number(r.bdr_total_ori)) < 0.01;
    console.log(`  ${r.policy_no} stg=${r.stg_exp_refund} | bdr hd=${r.rig_act_hd_id} ori_life=${r.bdr_ori_life} ori_add=${r.bdr_ori_add} sum=${r.bdr_total_ori} ${matchOri ? '✅' : '❌'} | re_life=${r.bdr_re_life} re_add=${r.bdr_re_add}`);
  });

  // 5) Treaty rate check — GIB_Grp_Direct_EB Layer 1 rate
  console.log('\n=== 5. Treaty Rate (re-insurance share) GIB_Grp_Direct_EB ===');
  try {
    const tr = await c.query(`
      SELECT treaty_code, layer, percent_re, percent_re_acc, percent_re_med, percent_re_tpd
      FROM cf_rig_treaty_cond_dt
      WHERE treaty_code='GIB_Grp_Direct_EB'
      ORDER BY layer LIMIT 10`);
    tr.rows.forEach(r => console.log(`  treaty=${r.treaty_code} L${r.layer} %re=${r.percent_re} %re_acc=${r.percent_re_acc} %re_med=${r.percent_re_med} %re_tpd=${r.percent_re_tpd}`));
  } catch(e) { console.log('  err: '+e.message); }

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

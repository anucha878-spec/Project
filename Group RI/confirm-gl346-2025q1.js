const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) GL346 snap (active hd) per PY/rd_type with base + extra exp refund + date range
    console.log('=== 1) GL346 snap_exprefund per PY/rd_type: exp_refund_dt + exp_refund_e1 + dates ===');
    console.log(J((await c.query(`
      SELECT policy_year, rd_type, period_begin_date, period_end_date,
             premium, premium_e1, exp_refund_dt, exp_refund_e1
      FROM tx_act_snap_exprefund
      WHERE policy_no='GL346'
        AND rig_process_hd_id=(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund WHERE policy_no='GL346')
      ORDER BY policy_year, rd_type, doc_no`)).rows));

    // 2) Sum per PY: life(rd01) = exp_refund_dt + exp_refund_e1 ; acc(rd02)
    console.log('\n=== 2) per-PY life/acc totals (dt + e1) ===');
    console.log(J((await c.query(`
      SELECT policy_year,
             SUM(exp_refund_dt+COALESCE(exp_refund_e1,0)) FILTER (WHERE rd_type='01')::numeric life_total,
             SUM(exp_refund_dt) FILTER (WHERE rd_type='01')::numeric life_dt_only,
             SUM(exp_refund_e1) FILTER (WHERE rd_type='01')::numeric life_e1,
             SUM(exp_refund_dt+COALESCE(exp_refund_e1,0)) FILTER (WHERE rd_type='02')::numeric acc_total,
             MIN(period_begin_date) beg, MAX(period_end_date) end_
      FROM tx_act_snap_exprefund
      WHERE policy_no='GL346'
        AND rig_process_hd_id=(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund WHERE policy_no='GL346')
      GROUP BY policy_year ORDER BY policy_year`)).rows));

    // 3) BDR act_hd 646 (2025Q1, PY8) — value + date range to match
    console.log('\n=== 3) BDR act_hd 646 (2025Q1) PY8 — value + effective/expire dates ===');
    console.log(J((await c.query(`
      SELECT bdr.policy_year, bdr.closing_quarter, ph.effective_date, ph.expire_date,
             bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add acc
      FROM tx_rig_act_bdr_new_renew bdr
      LEFT JOIN tx_rig_act_policy_hd ph ON ph.rig_act_hd_id=bdr.rig_act_hd_id AND ph.policy_no=bdr.policy_no AND ph.policy_year=bdr.policy_year
      WHERE bdr.policy_no='GL346' AND bdr.rig_act_hd_id=646`)).rows));

    console.log('\n=== TARGET: BDR life=43,018.08 acc=10,701.60 ; hypothesis life=dt(42,836.64)+e1(181.44) ===');
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

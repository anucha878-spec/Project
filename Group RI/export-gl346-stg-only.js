// GL346 Experience Refund — STAGING ONLY, direct from tx_stg_act_exp_refund.
// No joins, no snapshot, no BDR, no reconcile. Pure business view of the query.
// Output: GL346_ExpRefund_Staging_Business.csv  (UTF-8 BOM)
const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const n2 = v => v==null ? '' : Number(v).toFixed(2);
const d  = v => v ? new Date(v).toISOString().slice(0,10) : '';

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const rows = (await c.query(`
      SELECT policy_no, effective_date, policy_year, reinsur_no,
             period_begin_date, period_end_date, paid_status,
             premium_life, premium_accident, total_premium,
             percent_expense, percent_exp_refund,
             claim, claim_life, claim_add, claim_dismem,
             exp_refund_previous_year AS lcf, exp_refund,
             rig_process_hd_id, created_by, created_date
      FROM tx_stg_act_exp_refund
      WHERE policy_no='GL346'
      ORDER BY policy_year`)).rows;

    const head = [
      'Policy No / กรมธรรม์','Effective Date / วันที่มีผล','Policy Year / ปีกรมธรรม์','Reinsurer No',
      'Period Begin / ต้นรอบ','Period End / สิ้นรอบ','Paid Status',
      'Premium Life / เบี้ยชีวิต','Premium Accident / เบี้ยอุบัติเหตุ','Total Premium / เบี้ยรวม',
      '% Expense / %ค่าใช้จ่าย','% Exp Refund / %คืนเบี้ยตามประสบการณ์',
      'Claim Total / เคลมรวม','Claim Life / เคลมชีวิต','Claim Add / เคลมอุบัติเหตุเสียชีวิต','Claim Dismem / เคลมสูญเสียอวัยวะ',
      'Exp Refund Previous Year (LCF) / ยกมาปีก่อน','Exp Refund / เงินคืนเบี้ย',
      'Process HD','Created By','Created Date'
    ];
    const csv = [head.join(',')];
    console.log('====== GL346 — tx_stg_act_exp_refund (Business view, staging only) ======\n');
    for (const r of rows) {
      console.log(`PY${r.policy_year} ${d(r.period_begin_date)}→${d(r.period_end_date)} | premL ${n2(r.premium_life)} premA ${n2(r.premium_accident)} total ${n2(r.total_premium)} | claim ${n2(r.claim)} | exp_refund ${n2(r.exp_refund)}`);
      csv.push([
        r.policy_no, d(r.effective_date), r.policy_year, r.reinsur_no,
        d(r.period_begin_date), d(r.period_end_date), r.paid_status,
        n2(r.premium_life), n2(r.premium_accident), n2(r.total_premium),
        r.percent_expense, r.percent_exp_refund,
        n2(r.claim), n2(r.claim_life), n2(r.claim_add), n2(r.claim_dismem),
        n2(r.lcf), n2(r.exp_refund),
        r.rig_process_hd_id, r.created_by, d(r.created_date)
      ].map(x=>`"${x==null?'':x}"`).join(','));
    }
    const out = 'D:/Claude/Project/Group RI/GL346_ExpRefund_Staging_Business.csv';
    fs.writeFileSync(out, '﻿'+csv.join('\r\n'), 'utf8');
    console.log(`\nCSV written: ${out} (${rows.length} rows)`);
  } finally { await c.end(); }
})().catch(e=>{console.error('ERR:',e.message);process.exit(1);});

const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const n2 = v => v==null?'':Number(v).toFixed(2);
const fmt = v => v==null?'-':Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const d = v => v? new Date(v).toISOString().slice(0,10):'';

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const rows = (await c.query(`
      SELECT stg_act_exp_refund_id, rig_process_hd_id, period, policy_no, reinsur_no, policy_year,
             commencement_date, effective_date, end_date, period_begin_date, period_end_date, paid_status,
             percent_exp_refund, percent_expense,
             premium_life, premium_accident, premium_tpd, total_premium,
             claim, claim_life, claim_add, claim_dismem, exp_refund_previous_year,
             exp_refund, created_by, created_date, updated_by, updated_date
      FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows;

    // business-friendly header (bilingual)
    const head = [
      'Policy No / กธ.','Policy Year / ปีที่','Reinsurer No','Effective Date / วันที่มีผล','Period Begin','Period End','Paid Status',
      'Premium Life / เบี้ยชีวิต','Premium Accident / เบี้ยอุบัติเหตุ','Premium TPD','Total Premium / เบี้ยรวม',
      '% Exp Refund','% Expense / %ค่าใช้จ่าย',
      'Claim Total / เคลมรวม','Claim Life','Claim Add','Claim Dismem','Loss Carried Fwd / ยกมาปีก่อน',
      'Gross Exp Refund / ก่อนหักเคลม','Net Exp Refund (formula) / สุทธิ','Filter Status (TC-CR1-027)',
      'Staging exp_refund (stored)','Reconcile note',
      'process_hd','created_by','created_date'
    ];
    const csv = [head.join(',')];
    console.log('======== GL346 Staging Experience Refund — Export for BDR Reconciliation ========\n');
    for (const r of rows) {
      const refund=Number(r.percent_exp_refund)/100, exp=Number(r.percent_expense)/100;
      const gross = refund*Number(r.total_premium)*(1-exp);
      const net   = refund*(Number(r.total_premium)*(1-exp)-Number(r.claim)+Number(r.exp_refund_previous_year));
      const status = net<=0 ? 'EXCLUDE (≤0)' : 'INCLUDE';
      const expected = net<=0 ? 0 : net;
      const stored = Number(r.exp_refund);
      let note = '';
      if (Math.abs(Number(r.premium_life)+Number(r.premium_accident)+Number(r.premium_tpd)-Number(r.total_premium))>0.01)
        note += `premium split≠total; `;
      if (Math.abs(stored-expected)>0.01) note += `stored(${fmt(stored)})≠expected(${fmt(expected)}); `;
      if (!note) note = 'OK';

      console.log(`PY${r.policy_year} ${d(r.period_begin_date)}→${d(r.period_end_date)} | prem=${fmt(r.total_premium)} (L ${fmt(r.premium_life)}/A ${fmt(r.premium_accident)}) claim=${fmt(r.claim)} LCF=${fmt(r.exp_refund_previous_year)}`);
      console.log(`   Gross=${fmt(gross)} | Net=${fmt(net)} → ${status} (expected BDR=${fmt(expected)}) | staging stored=${fmt(stored)}  ${note==='OK'?'✅':'⚠️ '+note}`);

      csv.push([
        r.policy_no, r.policy_year, r.reinsur_no, d(r.effective_date), d(r.period_begin_date), d(r.period_end_date), r.paid_status,
        n2(r.premium_life), n2(r.premium_accident), n2(r.premium_tpd), n2(r.total_premium),
        r.percent_exp_refund, r.percent_expense,
        n2(r.claim), n2(r.claim_life), n2(r.claim_add), n2(r.claim_dismem), n2(r.exp_refund_previous_year),
        n2(gross), n2(net), status, n2(stored), note,
        r.rig_process_hd_id, r.created_by, d(r.created_date)
      ].map(x=>`"${x==null?'':x}"`).join(','));
    }
    const out = 'D:/Claude/Project/Group RI/GL346_Staging_ExpRefund.csv';
    fs.writeFileSync(out, '﻿'+csv.join('\r\n'), 'utf8');
    console.log(`\nCSV written: ${out} (${rows.length} rows)`);
  } finally { await c.end(); }
})().catch(e=>{console.error('ERR:',e.message);process.exit(1);});

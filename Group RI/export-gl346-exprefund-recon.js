const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const n2 = v => v==null? '' : Number(v).toFixed(2);
const fmt = v => v==null? '' : Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const d = v => v? new Date(v).toISOString().slice(0,10) : '';

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const latestSnap = `(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund WHERE policy_no='GL346')`;

    // STAGING (policy-year level): formula inputs + net
    const stg = (await c.query(`
      SELECT policy_year, period_begin_date beg, period_end_date end_,
             percent_exp_refund refund_pct, percent_expense expense_pct,
             premium_life, premium_accident, premium_tpd, total_premium,
             claim, claim_life, claim_add, claim_dismem, exp_refund_previous_year lcf, exp_refund
      FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows;

    // SNAPSHOT per PY x coverage: premium, extra, exp_refund_dt, exp_refund_e1
    const snap = (await c.query(`
      SELECT policy_year, rd_type,
             SUM(premium)::numeric premium, SUM(premium_e1)::numeric premium_e1,
             SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1,
             MIN(period_begin_date) beg, MAX(period_end_date) end_
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' AND rig_process_hd_id=${latestSnap}
      GROUP BY policy_year, rd_type`)).rows;

    // LANDING per PY x coverage
    const land = (await c.query(`
      SELECT policy_year, rd_type, SUM(premium)::numeric premium,
             SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1
      FROM tx_rig_landing_exprefund WHERE policy_no='GL346'
        AND rig_process_hd_id=(SELECT MAX(rig_process_hd_id) FROM tx_rig_landing_exprefund WHERE policy_no='GL346')
      GROUP BY policy_year, rd_type`)).rows;

    // BDR active rows: per RI policy_year/closing_quarter with date range
    const bdr = (await c.query(`
      SELECT bdr.policy_year ri_py, bdr.closing_quarter, ph.effective_date, ph.expire_date,
             bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add acc
      FROM tx_rig_act_bdr_new_renew bdr
      JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id AND ah.usage_status='A'
      LEFT JOIN tx_rig_act_policy_hd ph ON ph.rig_act_hd_id=bdr.rig_act_hd_id AND ph.policy_no=bdr.policy_no AND ph.policy_year=bdr.policy_year
      WHERE bdr.policy_no='GL346'`)).rows;

    const COV = {'01':'Life (ชีวิต)','02':'Accident (อุบัติเหตุ)'};
    const get = (arr,py,rd) => arr.find(r=>String(r.policy_year)===String(py)&&r.rd_type===rd) || {};
    // map BDR by date-range to a PY's period
    const bdrByDates = (beg,end_) => bdr.find(b=> d(b.effective_date)===d(beg) && d(b.expire_date)===d(end_));

    // ===== build reconciliation rows (PY x coverage) =====
    const rows = [];
    for (const s of stg) {
      const py = s.policy_year, beg=s.beg, end_=s.end_;
      const refund = Number(s.refund_pct)/100, exp = Number(s.expense_pct)/100;
      const b = bdrByDates(beg,end_) || {};
      const claimByCov = { '01':Number(s.claim_life||0), '02':Number(s.claim_add||0)+Number(s.claim_dismem||0) };
      const premByCov  = { '01':Number(s.premium_life||0), '02':Number(s.premium_accident||0) };
      for (const rd of ['01','02']) {
        const sn=get(snap,py,rd), ln=get(land,py,rd);
        const grossBase = refund*premByCov[rd]*(1-exp);              // business: %refund × premium × (1-%expense)
        const snapVal = Number(sn.dt||0)+Number(sn.e1||0);
        const landVal = Number(ln.dt||0)+Number(ln.e1||0);
        const bdrVal  = rd==='01'? Number(b.life||0) : Number(b.acc||0);
        rows.push({
          py, coverage:COV[rd], beg:d(beg), end_:d(end_),
          closing_quarter:b.closing_quarter||'(not in active BDR)', ri_py:b.ri_py??'',
          premium:premByCov[rd], premium_extra:Number(sn.premium_e1||0),
          expense_pct:s.expense_pct, refund_pct:s.refund_pct,
          claim:claimByCov[rd], lcf:Number(s.lcf||0),
          gross_calc:grossBase, landing:landVal, snapshot:snapVal, bdr:bdrVal,
          match: Math.abs(snapVal-bdrVal)<0.01 ? 'Y' : (bdrVal===0&&snapVal===0?'Y(0)':'N')
        });
      }
    }

    // ===== console: business summary =====
    console.log('================ GL346 — Experience Refund Reconciliation (Business view) ================\n');
    for (const s of stg) {
      const refund=Number(s.refund_pct)/100, exp=Number(s.expense_pct)/100;
      const net = refund*(Number(s.total_premium)*(1-exp)-Number(s.claim)+Number(s.lcf));
      const b = bdrByDates(s.beg,s.end_)||{};
      const bdrTot = Number(b.life||0)+Number(b.acc||0);
      console.log(`PolicyYear ${s.policy_year} | ${d(s.beg)}→${d(s.end_)} | closing ${b.closing_quarter||'-'} (RI PY ${b.ri_py??'-'})`);
      console.log(`  Premium: Life ${fmt(s.premium_life)} + Acc ${fmt(s.premium_accident)} = ${fmt(s.total_premium)} | Expense ${s.expense_pct}% | Refund ${s.refund_pct}%`);
      console.log(`  Claim ${fmt(s.claim)} (L ${fmt(s.claim_life)}/Add ${fmt(s.claim_add)}/Dis ${fmt(s.claim_dismem)}) | LCF ${fmt(s.lcf)}`);
      console.log(`  → Net Exp Refund (formula) = ${s.refund_pct}% × (${fmt(s.total_premium)}×${1-exp} − ${fmt(s.claim)} + ${fmt(s.lcf)}) = ${fmt(net)} ${net<=0?'→ ≤0 EXCLUDED (TC-CR1-027)':''}`);
      console.log(`  → BDR Exp Refund: Life ${fmt(b.life)} + Acc ${fmt(b.acc)} = ${fmt(bdrTot)}  ${Math.abs((net<=0?0:net)-bdrTot)<0.01?'✅ reconciled':'⚠️ check'}`);
      console.log('');
    }

    // ===== write CSV (UTF-8 BOM) =====
    const head = ['Policy No','Policy Year (Original)','RI Policy Year','Period Begin','Period End','Closing Quarter','Coverage',
      'Premium','Premium Extra','Expense %','Refund %','Claim','Loss Carried Fwd',
      'Exp Refund (Calc gross)','Landing','Snapshot','BDR','Reconcile'];
    const lines = [head.join(',')];
    for (const r of rows) lines.push([
      'GL346', r.py, r.ri_py, r.beg, r.end_, r.closing_quarter, r.coverage,
      n2(r.premium), n2(r.premium_extra), r.expense_pct, r.refund_pct, n2(r.claim), n2(r.lcf),
      n2(r.gross_calc), n2(r.landing), n2(r.snapshot), n2(r.bdr), r.match
    ].map(x=>`"${x}"`).join(','));
    const out = 'D:/Claude/Project/Group RI/GL346_ExpRefund_Reconcile.csv';
    fs.writeFileSync(out, '﻿'+lines.join('\r\n'), 'utf8');
    console.log('CSV written:', out, `(${rows.length} rows)`);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

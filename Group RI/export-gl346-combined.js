// Combined export for GL346 Experience Refund: Staging + Snapshot + BDR in ONE file.
// Base granularity = staging policy-year (matches user's tx_stg_act_exp_refund query),
// with Snapshot (source-of-truth for BDR) and BDR values placed alongside per coverage.
// Output: GL346_ExpRefund_Combined.csv  (UTF-8 BOM, business view for BDR reconciliation)
const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const n2  = v => v==null ? '' : Number(v).toFixed(2);
const fmt = v => v==null ? '-' : Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const d   = v => v ? new Date(v).toISOString().slice(0,10) : '';
const POLICY = 'GL346';

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const snapHd = `(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund   WHERE policy_no='${POLICY}')`;

    // ---- STAGING (per policy-year) = user's query columns ----
    const stg = (await c.query(`
      SELECT policy_no, effective_date, period_begin_date, period_end_date, policy_year,
             percent_expense, percent_exp_refund,
             premium_life, premium_accident, total_premium,
             claim, claim_life, claim_add, claim_dismem,
             exp_refund_previous_year AS lcf, exp_refund
      FROM tx_stg_act_exp_refund WHERE policy_no='${POLICY}' ORDER BY policy_year`)).rows;

    // ---- SNAPSHOT (source BDR reads from) per policy-year x coverage ----
    const snap = (await c.query(`
      SELECT policy_year py, rd_type,
             SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1,
             MIN(period_begin_date) beg, MAX(period_end_date) end_
      FROM tx_act_snap_exprefund WHERE policy_no='${POLICY}' AND rig_process_hd_id=${snapHd}
      GROUP BY policy_year, rd_type`)).rows;

    // ---- BDR (active) joined to policy header for the effective/expire date range ----
    const bdr = (await c.query(`
      SELECT bdr.policy_year ri_py, bdr.closing_quarter cq, ph.effective_date eff, ph.expire_date exp_,
             bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add acc
      FROM tx_rig_act_bdr_new_renew bdr
      JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id AND ah.usage_status='A'
      LEFT JOIN tx_rig_act_policy_hd ph ON ph.rig_act_hd_id=bdr.rig_act_hd_id
            AND ph.policy_no=bdr.policy_no AND ph.policy_year=bdr.policy_year
      WHERE bdr.policy_no='${POLICY}'`)).rows;

    const sget = (py,rd) => snap.find(r=>String(r.py)===String(py)&&r.rd_type===rd) || {};
    // BDR↔snap/staging join is by EFFECTIVE DATE RANGE (NOT policy_year) -> closing_quarter
    const bdrByDates = (beg,end_) => bdr.find(b => d(b.eff)===d(beg) && d(b.exp_)===d(end_));

    const head = [
      // --- STAGING (user query) ---
      'Policy No','Effective Date','Policy Year (Staging/Original)','Period Begin','Period End',
      'Premium Life','Premium Accident','Total Premium','% Expense','% Exp Refund',
      'Claim','Claim Life','Claim Add','Claim Dismem','Exp Refund Prev Year (LCF)',
      'Staging Exp Refund (stored)','Calc Gross','Calc Net (after claim)','Filter (TC-CR1-027)',
      // --- SNAPSHOT (dt + e1) ---
      'Snap Life (dt+e1)','Snap Accident (dt+e1)','Snap Total',
      // --- BDR ---
      'BDR RI Policy Year','BDR Closing Quarter','BDR Life','BDR Accident','BDR Total',
      // --- RECONCILE ---
      'Snap=BDR?','Reconcile Note'
    ];
    const csv = [head.join(',')];
    console.log(`====== ${POLICY} — Combined Staging + Snapshot + BDR (Experience Refund) ======\n`);
    console.log('PY(stg) | Period                 | Staging exp | Snap L+A    | BDR L+A     | Recon');
    console.log('-'.repeat(96));

    for (const s of stg) {
      const refund = Number(s.percent_exp_refund)/100, exp = Number(s.percent_expense)/100;
      const gross  = refund*Number(s.total_premium)*(1-exp);
      const net    = refund*(Number(s.total_premium)*(1-exp)-Number(s.claim)+Number(s.lcf));
      const filter = net<=0 ? 'EXCLUDE (≤0)' : 'INCLUDE';
      const expected = net<=0 ? 0 : net;

      // snapshot per coverage (Life=01, Accident=02), BDR uses dt+e1 = "original exp refund paid"
      const sl = sget(s.policy_year,'01'), sa = sget(s.policy_year,'02');
      const snapLife = Number(sl.dt||0)+Number(sl.e1||0);
      const snapAcc  = Number(sa.dt||0)+Number(sa.e1||0);
      const snapTot  = snapLife+snapAcc;

      const b = bdrByDates(s.period_begin_date, s.period_end_date) || {};
      const bdrLife = b.life==null?null:Number(b.life);
      const bdrAcc  = b.acc==null?null:Number(b.acc);
      const bdrTot  = (bdrLife==null&&bdrAcc==null)?null:Number(bdrLife||0)+Number(bdrAcc||0);

      // reconcile: BDR should equal Snapshot (BDR reads from snap); Snap total should equal Net(after filter)
      const matchLife = bdrLife==null?'(no BDR)':(Math.abs(snapLife-bdrLife)<0.01?'Y':'N');
      const matchAcc  = bdrAcc ==null?'(no BDR)':(Math.abs(snapAcc -bdrAcc )<0.01?'Y':'N');
      const notes = [];
      if (bdrTot==null) notes.push('no active BDR row for this period');
      else {
        if (matchLife==='N') notes.push(`Life snap ${fmt(snapLife)}≠BDR ${fmt(bdrLife)}`);
        if (matchAcc==='N')  notes.push(`Acc snap ${fmt(snapAcc)}≠BDR ${fmt(bdrAcc)}`);
        if (Math.abs(expected-snapTot)>0.01) notes.push(`Net(formula ${fmt(expected)})≠Snap total(${fmt(snapTot)})`);
      }
      if (Math.abs(Number(s.premium_life)+Number(s.premium_accident)-Number(s.total_premium))>0.01)
        notes.push('premium_life+accident≠total');
      const note = notes.length?notes.join('; '):'OK ✅';

      console.log(`PY${String(s.policy_year).padEnd(4)} | ${d(s.period_begin_date)}→${d(s.period_end_date)} | ${fmt(s.exp_refund).padStart(11)} | ${(fmt(snapLife)+' / '+fmt(snapAcc)).padStart(11)} | ${(bdrTot==null?'(none)':fmt(bdrLife)+' / '+fmt(bdrAcc)).padStart(11)} | ${note==='OK ✅'?'✅':'⚠️ '+note}`);

      csv.push([
        s.policy_no, d(s.effective_date), s.policy_year, d(s.period_begin_date), d(s.period_end_date),
        n2(s.premium_life), n2(s.premium_accident), n2(s.total_premium), s.percent_expense, s.percent_exp_refund,
        n2(s.claim), n2(s.claim_life), n2(s.claim_add), n2(s.claim_dismem), n2(s.lcf),
        n2(s.exp_refund), n2(gross), n2(net), filter,
        n2(snapLife), n2(snapAcc), n2(snapTot),
        b.ri_py==null?'':b.ri_py, b.cq||'', bdrLife==null?'':n2(bdrLife), bdrAcc==null?'':n2(bdrAcc), bdrTot==null?'':n2(bdrTot),
        bdrTot==null?'(no BDR)':((matchLife==='Y'&&matchAcc==='Y')?'Y':'N'), note
      ].map(x=>`"${x==null?'':x}"`).join(','));
    }

    const out = `D:/Claude/Project/Group RI/${POLICY}_ExpRefund_Combined.csv`;
    fs.writeFileSync(out, '﻿'+csv.join('\r\n'), 'utf8');
    console.log(`\nCSV written: ${out} (${stg.length} policy-year rows)`);
    console.log('NOTE: BDR(Life)=Snap dt+e1 ; BDR↔staging joined by effective date range→closing_quarter, NOT policy_year (staging PY=original, BDR PY=RI).');
  } finally { await c.end(); }
})().catch(e=>{console.error('ERR:',e.message);process.exit(1);});

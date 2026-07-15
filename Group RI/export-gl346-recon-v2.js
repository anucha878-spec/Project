const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const n2 = v => v==null?'':Number(v).toFixed(2);
const fmt = v => v==null?'-':Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const d = v => v? new Date(v).toISOString().slice(0,10):'';
const COV = {'01':'Life','02':'Accident'};

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    const snapHd = `(SELECT MAX(rig_process_hd_id) FROM tx_act_snap_exprefund WHERE policy_no='GL346')`;
    const landHd = `(SELECT MAX(rig_process_hd_id) FROM tx_rig_landing_exprefund WHERE policy_no='GL346')`;

    const snap = (await c.query(`
      SELECT policy_year py, rd_type, MIN(period_begin_date) beg, MAX(period_end_date) end_,
             SUM(premium)::numeric premium, SUM(premium_e1)::numeric premium_e1,
             SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' AND rig_process_hd_id=${snapHd}
      GROUP BY policy_year, rd_type ORDER BY policy_year, rd_type`)).rows;
    const land = (await c.query(`
      SELECT policy_year py, rd_type, SUM(exp_refund_dt)::numeric dt, SUM(exp_refund_e1)::numeric e1
      FROM tx_rig_landing_exprefund WHERE policy_no='GL346' AND rig_process_hd_id=${landHd}
      GROUP BY policy_year, rd_type`)).rows;
    const stg = (await c.query(`
      SELECT policy_year py, period_begin_date beg, period_end_date end_, total_premium, premium_life, premium_accident,
             claim, claim_life, claim_add, claim_dismem, exp_refund_previous_year lcf,
             percent_exp_refund refund_pct, percent_expense expense_pct, exp_refund
      FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows;
    const bdr = (await c.query(`
      SELECT bdr.policy_year ri_py, bdr.closing_quarter cq, ph.effective_date eff, ph.expire_date exp,
             bdr.tot_ori_ex_refund_paid_life life, bdr.tot_ori_ex_refund_paid_add acc
      FROM tx_rig_act_bdr_new_renew bdr
      JOIN tx_rig_act_hd ah ON ah.rig_act_hd_id=bdr.rig_act_hd_id AND ah.usage_status='A'
      LEFT JOIN tx_rig_act_policy_hd ph ON ph.rig_act_hd_id=bdr.rig_act_hd_id AND ph.policy_no=bdr.policy_no AND ph.policy_year=bdr.policy_year
      WHERE bdr.policy_no='GL346' AND (bdr.tot_ori_ex_refund_paid_life<>0 OR bdr.tot_ori_ex_refund_paid_add<>0)`)).rows;

    const g=(a,py,rd)=>a.find(r=>String(r.py)===String(py)&&r.rd_type===rd)||{};
    const bdrFor=(beg,end_,rd)=>{ const b=bdr.find(x=>d(x.eff)===d(beg)&&d(x.exp)===d(end_)); return b?(rd==='01'?Number(b.life):Number(b.acc)):null; };

    // ===== COVERAGE-LEVEL RECON =====
    console.log('========== GL346 Experience Refund — Coverage Reconciliation (Snapshot is source-of-truth for BDR) ==========\n');
    console.log('PY | Cov      | Period                  | Premium      | Landing     | Snapshot    | BDR         | L=S=B?');
    console.log('-'.repeat(108));
    const csv=[['Policy No','Policy Year','Coverage','Period Begin','Period End','Premium','Premium Extra','Landing ExpRefund','Snapshot ExpRefund','BDR ExpRefund','Reconcile'].join(',')];
    for (const py of [...new Set(snap.map(s=>s.py))]) {
      for (const rd of ['01','02']) {
        const s=g(snap,py,rd), l=g(land,py,rd);
        const snapV=Number(s.dt||0)+Number(s.e1||0), landV=Number(l.dt||0)+Number(l.e1||0);
        const bdrV=bdrFor(s.beg,s.end_,rd);
        const ok = Math.abs(snapV-(bdrV==null?snapV:bdrV))<0.01 && Math.abs(snapV-landV)<0.01;
        console.log(`${py} | ${COV[rd].padEnd(8)} | ${d(s.beg)}→${d(s.end_)} | ${fmt(s.premium).padStart(12)} | ${fmt(landV).padStart(11)} | ${fmt(snapV).padStart(11)} | ${(bdrV==null?'(no BDR)':fmt(bdrV)).padStart(11)} | ${ok?'✅':'⚠️'}`);
        csv.push(['GL346',py,COV[rd],d(s.beg),d(s.end_),n2(s.premium),n2(s.premium_e1),n2(landV),n2(snapV),bdrV==null?'':n2(bdrV),ok?'Y':'N'].map(x=>`"${x}"`).join(','));
      }
    }

    // ===== POLICY-YEAR FORMULA PANEL (Staging) + EXCEPTIONS =====
    console.log('\n========== Policy-Year Formula Panel (Staging tx_stg_act_exp_refund) ==========');
    const exc=[];
    for (const s of stg) {
      const refund=Number(s.refund_pct)/100, exp=Number(s.expense_pct)/100;
      const gross=refund*Number(s.total_premium)*(1-exp);
      const net=refund*(Number(s.total_premium)*(1-exp)-Number(s.claim)+Number(s.lcf));
      console.log(`\nPY${s.py} ${d(s.beg)}→${d(s.end_)}: prem=${fmt(s.total_premium)} claim=${fmt(s.claim)} LCF=${fmt(s.lcf)} | refund ${s.refund_pct}% expense ${s.expense_pct}%`);
      console.log(`  Gross=${fmt(gross)}  Net(after claim)=${fmt(net)} ${net<=0?'→ EXCLUDE (≤0)':''}  | staging.exp_refund stored=${fmt(s.exp_refund)}`);
      if (Math.abs(Number(s.premium_life)+Number(s.premium_accident)-Number(s.total_premium))>0.01)
        exc.push(`PY${s.py}: premium_life(${fmt(s.premium_life)})+premium_accident(${fmt(s.premium_accident)})=${fmt(Number(s.premium_life)+Number(s.premium_accident))} ≠ total_premium(${fmt(s.total_premium)})`);
      if (Number(s.claim)>0 && Math.abs(Number(s.exp_refund)-gross)<0.01 && net<=0)
        exc.push(`PY${s.py}: มี claim ${fmt(s.claim)} แต่ staging.exp_refund=${fmt(s.exp_refund)} (=gross ไม่หัก claim; ควร EXCLUDE/0)`);
      // staging vs snapshot claim-sync
      const snapLifeDt=Number(g(snap,s.py,'01').dt||0);
      if (Number(s.claim)>0 && snapLifeDt>0)
        exc.push(`PY${s.py}: staging มี claim ${fmt(s.claim)} แต่ snapshot exp_refund_dt(Life)=${fmt(snapLifeDt)}≠0 → staging/snapshot OUT OF SYNC`);
    }
    console.log('\n========== ⚠️ RECONCILE EXCEPTIONS ==========');
    if (!exc.length) console.log('  (none)');
    exc.forEach((e,i)=>console.log(`  ${i+1}. ${e}`));

    const out='D:/Claude/Project/Group RI/GL346_ExpRefund_Reconcile.csv';
    fs.writeFileSync(out,'﻿'+csv.join('\r\n'),'utf8');
    console.log('\nCSV:',out);
  } finally { await c.end(); }
})().catch(e=>{console.error('ERR:',e.message);process.exit(1);});

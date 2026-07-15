// Seed realistic mock data for Redmine #82686 rate test (clone of GL5557 template).
// Covers Rule A (prem_layer: all layers equal rate when effective_date>=cutoff)
//    and Rule B (inforce_member: rate_flag=1 & promise_date<cutoff -> policy snapshot rate, non-zero).
// Seeds Landing + Snapshot + Staging for ESTIMATE 202604 (and ACTUAL 2026Q2 when SIDE=act/both).
// MODE=rollback (default, dry-run) | commit.  SIDE=est (default) | act | both.
// Usage: MODE=rollback SIDE=est node seed-82686-mock.js
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const MODE = (process.env.MODE || 'rollback').toLowerCase();
const SIDE = (process.env.SIDE || 'est').toLowerCase();
const STG  = (process.env.STG  || '1') === '1'; // STG=0 -> seed source (snapshot) only, let batch build staging (approach A)
const CUTOFF = '2026-04-09';
const J = x => JSON.stringify(x, null, 1);
const BY = 'QA_TC_82686';

// ---- scenario (shared) ----
const POLICY = 'GLQA826';
const RATE = { life:0.2560, acc:0.0840, med:0.0000, tpd:0.0170 }; // policy snapshot rate (rate_flag=1)
const MEMBERS = [
  { cer:'00001', age:68, sex:'1', sa:3000000,  promise:'2026-02-01' },  // < cutoff, all in L1
  { cer:'00002', age:55, sex:'1', sa:25000000, promise:'2026-02-01' },  // < cutoff, spans L1+L2+L3
];
// GIB marginal bands: L1 0-5M, L2 5M-20M, L3 >20M
function slice(sa){ const L1=Math.min(sa,5000000); const L2=Math.max(0,Math.min(sa,20000000)-5000000); const L3=Math.max(0,sa-20000000); return {L1,L2,L3}; }
function layerInsure(){ const t={L1:0,L2:0,L3:0}; for(const m of MEMBERS){ const s=slice(m.sa); t.L1+=s.L1; t.L2+=s.L2; t.L3+=s.L3; } return t; }
const prem = (insure,rate)=> Math.round(insure/1000*rate*100)/100;

async function seedSide(c, side){
  const isEst = side==='est';
  const P = isEst ? { period:202604, snapPolT:'tx_est_snap_policy', snapCertT:'tx_est_snap_cert_inforce',
                      layerT:'tx_stg_est_prem_layer', memT:'tx_stg_est_inforce_member',
                      layerSeq:'seq_tx_stg_est_prem_layer', memSeq:'seq_tx_stg_est_inforce_member',
                      eff:'2026-04-30', quarter:2, layerBy:'SYSTEM' }
                  : { period:202606, snapPolT:'tx_act_snap_policy', snapCertT:'tx_act_snap_cert_inforce',
                      layerT:'tx_stg_act_prem_layer', memT:'tx_stg_act_inforce_member',
                      layerSeq:'seq_tx_stg_act_prem_layer', memSeq:'seq_tx_stg_act_inforce_member',
                      eff:'2026-06-30', quarter:2, layerBy:'test' };
  console.log(`\n################ SIDE=${side.toUpperCase()}  period=${P.period}  effective=${P.eff} ################`);

  // ---- process_hd (one grouping run for this mock) ----
  const hd = (await c.query(
    `INSERT INTO tx_rig_process_hd (rig_process_hd_id, process_code, status, usage_status, period, ri_type,
       sum_record, created_date, created_by, updated_date, updated_by, start_date, finish_date, percent, year, quarter, treaty_code)
     VALUES (nextval('seq_tx_rig_process_hd'), $1,'SUCCESS','ACTIVE',$2,'A', 0, NOW(),$3, NOW(),$3, NOW(), NOW(), NULL, 2026, $4, 'GIB_Grp_Direct_EB')
     RETURNING rig_process_hd_id`,
    [ (isEst?'EST':'ACT')+'_MOCK_82686', P.period, BY, P.quarter ])).rows[0].rig_process_hd_id;
  console.log('  process_hd id =', hd);

  // ---- SNAPSHOT policy (rate_flag=1, rates from snapshot) ----
  await c.query(
    `INSERT INTO ${P.snapPolT} (rig_v_policy_id, rig_process_hd_id, period, policy_no, policy_year, policy_code,
       policy_doc_date, company_code, first_date, promise_date, re_insur_date, lapse_date, pay_type, insum_type, adjust_dec,
       life_prem_rate, acc_prem_rate, med_prem_rate, tpd_prem_rate,
       policy_status, re_insur_no, expreience_refund, acc_prem, med_prem, cer_class_no,
       prefix_thai, company_name, company_name_eng, commision_foat, flg_member, f_receipt_date, policy_no_hd,
       funeral_prem, funeral_prem_rate, expire_date, qcl_docno, sale_option, sale_channel, created_date, created_by, rate_flag)
     VALUES (826001,$1,$2,$3,1,1, '2026-01-13',$4,$5,$6,'2026-12-31',NULL,0,0,0,
       $7,$8,$9,$10, 'B','2601826', false, 0, 0, 0,
       'บริษัท','QA MOCK 82686 (Gibraltar)','QA MOCK 82686','0',0,'2026-01-13',$3,
       0,0,'2026-12-30','QCL.QA/82686',0,0, NOW(),$11, 1)`,
    [hd, P.period, POLICY, '2568001075', P.eff, MEMBERS[0].promise, RATE.life, RATE.acc, RATE.med, RATE.tpd, BY]);
  console.log('  snapshot policy inserted (rate_flag=1, rates', RATE.life+'/'+RATE.acc+'/'+RATE.tpd+')');

  // ---- SNAPSHOT cert_inforce (per member) ----
  let vpol = 1490001;
  for (const m of MEMBERS) {
    const lp = prem(m.sa, RATE.life), ap = prem(m.sa, RATE.acc), tp = prem(m.sa, RATE.tpd);
    await c.query(
      `INSERT INTO ${P.snapCertT} (rig_v_pol_inforce_id, rig_process_hd_id, period, doc_no, policy_no,
         effect_date, change_date, cer_no, comp_code, cust_code, med_rate, age, sex, count_of_day,
         life_insur, acc_insur, med_insur, tpd_insur, life_prem, acc_prem, med_acc_prem, tpd_prem,
         total_prem, doc_date, company_code, company_head_code, re_insure_no, policy_name, company_name,
         promise_date, policy_year, tax_year, pay_type, lot_no, created_date, created_by, period_date)
       VALUES ($1,$2,$3,'INF.QA/82686',$4, $5::date,$5::date,$6,'2568001076','2568146324','',$7,$8,0,
         $9,$9,0,$9, $10,$11,0,$12, $13, '2026-01-12','2568001076','2568001075','2601826','QA MOCK','QA MOCK',
         $14::date,1,2026,0,1, NOW(),$15,$5::timestamp)`,
      [vpol++, hd, P.period, POLICY, P.eff, m.cer, m.age, m.sex, m.sa, lp, ap, tp, (lp+ap+tp), m.promise, BY]);
  }
  console.log('  snapshot cert_inforce inserted:', MEMBERS.length, 'members');

  if (!STG) {
    console.log('  STG=0 -> skipped staging inserts (batch will build staging from snapshot).');
    console.log(`  >> Run batch for: side=${side.toUpperCase()} period=${P.period} policy=${POLICY} effective=${P.eff} (>= cutoff ${CUTOFF})`);
    return;
  }
  // ---- STAGING prem_layer (Rule A: same rate on every layer) ----
  const t = layerInsure();
  for (const lv of ['L1','L2','L3']) {
    const ins = t[lv]; if (ins<=0 && lv!=='L1') continue;
    const idcol = 'stg_'+(isEst?'est':'act')+'_prem_layer_id';
    await c.query(
      `INSERT INTO ${P.layerT} (${idcol}, rig_process_hd_id, period, policy_no, effective_date, level,
         amount_life, amount_accident, amount_med_accident, amount_tpd,
         life_insure, accident_insure, med_accident_insure, tpd_insure,
         life_prem_rate, accident_prem_rate, med_accident_prem_rate, tpd_prem_rate,
         life_prem, life_extra_prem, accident_prem, accident_extra_prem, med_accident_prem, tpd_prem,
         ipd_prem, opd_prem, dental_prem, created_date, created_by)
       VALUES ( nextval('${P.layerSeq}'), $1,$2,$3,$4,$5,
         1,1,0,1,
         $6,$6,0,$6,
         $7,$8,$9,$10,
         $11,0,$12,0,0,$13,
         0,0,0, NOW(),$14)`,
      [hd, String(P.period), POLICY, P.eff, lv, ins, RATE.life, RATE.acc, RATE.med, RATE.tpd,
       prem(ins,RATE.life), prem(ins,RATE.acc), prem(ins,RATE.tpd), P.layerBy]);
  }
  console.log('  staging prem_layer inserted (L1/L2/L3, equal rates)');

  // ---- STAGING inforce_member (Rule B: rate_flag=1 & promise<cutoff -> snapshot rate) ----
  for (const m of MEMBERS) {
    const lp = prem(m.sa, RATE.life), ap = prem(m.sa, RATE.acc), tp = prem(m.sa, RATE.tpd);
    const idcol = 'stg_'+(isEst?'est':'act')+'_inforce_member_id';
    await c.query(
      `INSERT INTO ${P.memT} (${idcol}, rig_process_hd_id, period, policy_no,
         promise_date, policy_year, cer_no, sex, age, sum_insured_accident, class_no, created_date, created_by,
         updated_by, updated_date, rate_type, prem_rate_life, prem_rate_acc, prem_rate_med, prem_rate_tpd, pay_type,
         sum_insured_life, sum_insured_med, sum_insured_tpd, prem_life, prem_extra_life, prem_acc, prem_acc_extra,
         prem_med, prem_tpd, prem_ipd, prem_opd, prem_dental, treaty_code)
       VALUES (nextval('${P.memSeq}'),$1,$2,$3, $4,1,$5,'M',$6,$7,5, NOW(),$8, $8,NOW(),NULL,
         $9,$10,$11,$12,'Annual', $7,0,$7, $13,0,$14,0, 0,$15,0,0,0,'GIB_Grp_Direct_EB')`,
      [hd, P.period, POLICY, m.promise, m.cer, m.age, m.sa, BY,
       RATE.life, RATE.acc, RATE.med, RATE.tpd, lp, ap, tp]);
  }
  console.log('  staging inforce_member inserted:', MEMBERS.length, 'members (rate_flag=1, promise<cutoff)');

  // ---- VERIFY Rule A + Rule B on the just-inserted rows ----
  console.log('\n  --- VERIFY Rule A (prem_layer rates equal per policy, effective_date>=cutoff) ---');
  const ra = (await c.query(
    `SELECT level, effective_date, life_prem_rate, accident_prem_rate, tpd_prem_rate, life_insure, life_prem
     FROM ${P.layerT} WHERE policy_no=$1 AND rig_process_hd_id=$2 ORDER BY level`, [POLICY, hd])).rows;
  console.log(J(ra));
  const eq = ra.length>1 &&
    new Set(ra.map(r=>String(r.life_prem_rate))).size===1 &&
    new Set(ra.map(r=>String(r.accident_prem_rate))).size===1 &&
    new Set(ra.map(r=>String(r.tpd_prem_rate))).size===1;
  const geCut = ra.every(r=> new Date(r.effective_date) >= new Date(CUTOFF));
  console.log(`  Rule A => layers=${ra.length}, all-rates-equal=${eq}, effective>=cutoff=${geCut} => ${eq&&geCut?'✅ PASS':'❌ FAIL'}`);

  console.log('\n  --- VERIFY Rule B (rate_flag=1 & promise<cutoff -> member rate = snapshot, non-zero) ---');
  const rb = (await c.query(
    `SELECT m.cer_no, m.promise_date, m.prem_rate_life mL, p.life_prem_rate pL, m.prem_rate_acc mA, p.acc_prem_rate pA,
            m.prem_rate_tpd mT, p.tpd_prem_rate pT, p.rate_flag
     FROM ${P.memT} m JOIN ${P.snapPolT} p ON p.policy_no=m.policy_no AND p.rig_process_hd_id=m.rig_process_hd_id
     WHERE m.policy_no=$1 AND m.rig_process_hd_id=$2 ORDER BY m.cer_no`, [POLICY, hd])).rows;
  console.log(J(rb));
  const rbPass = rb.length>0 && rb.every(r=>
    String(r.rate_flag)==='1' && new Date(r.promise_date)<new Date(CUTOFF) &&
    Number(r.ml)>0 && Number(r.ml)===Number(r.pl) && Number(r.ma)===Number(r.pa) && Number(r.mt)===Number(r.pt));
  console.log(`  Rule B => members=${rb.length}, all rate=snapshot & non-zero => ${rbPass?'✅ PASS':'❌ FAIL'}`);
}

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log(`Connected. MODE=${MODE} SIDE=${SIDE}. Seeding mock #82686 (policy ${POLICY})...`);
  try {
    await c.query('BEGIN');
    if (SIDE==='est' || SIDE==='both') await seedSide(c, 'est');
    if (SIDE==='act' || SIDE==='both') await seedSide(c, 'act');
    if (MODE==='commit') { await c.query('COMMIT'); console.log('\n✅ COMMITTED — mock data persisted.'); }
    else { await c.query('ROLLBACK'); console.log('\n✅ ROLLBACK (dry-run) — inserts validated, no permanent change.'); }
  } catch (e) {
    await c.query('ROLLBACK').catch(()=>{});
    console.error('\n❌ ERROR:', e.message);
    process.exit(1);
  }
  await c.end();
})();

const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const R2 = n => Math.round(n*100)/100;

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // prem_layer components (proc 14587 = source of hd 452)
    const pl = (await c.query(`
      SELECT level, life_insure, accident_insure, life_prem, life_extra_prem, accident_prem, accident_extra_prem,
             life_prem_rate, accident_prem_rate
      FROM tx_stg_est_prem_layer WHERE policy_no='GL5557' ORDER BY level`)).rows;
    const L = {}; pl.forEach(r=>L[r.level]=r);

    // actual policy_dt (hd 452)
    const pd = (await c.query(`
      SELECT pd.level, pd.ri_prem_life, pd.ri_prem_acc
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE ph.rig_est_hd_id=452 AND pd.policy_no='GL5557' ORDER BY pd.level`)).rows;
    const A = {}; pd.forEach(r=>A[r.level]={life:Number(r.ri_prem_life), acc:Number(r.ri_prem_acc)});

    const F = 12;                 // Factor Mode of Payment (mode_pay = 12 monthly)
    const cede = {L1:0.15, L2:1.00, L3:0.00};

    // ---- LIFE ----
    // totals over ALL members (L1+L2 prem_layer; no L3 row)
    const sumLifePrem  = Number(L.L1.life_prem)+Number(L.L2.life_prem);
    const sumLifeExtra = Number(L.L1.life_extra_prem)+Number(L.L2.life_extra_prem);
    const PremLifeTotal = R2(F*(sumLifePrem+sumLifeExtra));

    // L2 members = SA in (5M,20M]. Only cer 00005 (SA=L.L2.life_insure=20M), rate=L.L2.life_prem_rate, extra=0
    const m_sa = Number(L.L2.life_insure), m_rate = Number(L.L2.life_prem_rate), m_extra = Number(L.L2.life_extra_prem);
    const PremLifeL2 = R2(
        F*m_rate*(m_sa-5000000)/1000 + (m_extra? F*m_extra*(m_sa-5000000)/m_sa : 0)
        // + L3 members' 15M middle slice -> none for GL5557
    );
    const PremLifeL3 = 0; // no member > 20M
    const PremLifeL1 = R2(PremLifeTotal - PremLifeL2 - PremLifeL3);

    // ---- ACC ----
    const sumAccPrem  = Number(L.L1.accident_prem)+Number(L.L2.accident_prem);
    const sumAccExtra = Number(L.L1.accident_extra_prem||0)+Number(L.L2.accident_extra_prem||0);
    const PremAccTotal = R2(F*(sumAccPrem+sumAccExtra));
    const a_sa = Number(L.L2.accident_insure), a_rate = Number(L.L2.accident_prem_rate);
    const PremAccL2 = R2(F*a_rate*(a_sa-5000000)/1000);
    const PremAccL3 = 0;
    const PremAccL1 = R2(PremAccTotal - PremAccL2 - PremAccL3);

    const out = (lbl, premL1,premL2,premL3) => {
      const ri = {L1:R2(premL1*cede.L1), L2:R2(premL2*cede.L2), L3:R2(premL3*cede.L3)};
      return ri;
    };
    const riLife = {L1:R2(PremLifeL1*cede.L1), L2:R2(PremLifeL2*cede.L2), L3:R2(PremLifeL3*cede.L3)};
    const riAcc  = {L1:R2(PremAccL1*cede.L1),  L2:R2(PremAccL2*cede.L2),  L3:R2(PremAccL3*cede.L3)};

    const ok = (a,b)=>Math.abs(a-b)<0.01?'✅ MATCH':'❌';
    console.log('FactorMode F =', F, '| mode_pay=12 (monthly)');
    console.log('\n========== LIFE ==========');
    console.log(`Σlife_prem=${f(sumLifePrem)}  Σlife_extra=${f(sumLifeExtra)}`);
    console.log(`Premium Life TOTAL = F×(Σprem+Σextra) = 12×(${f(sumLifePrem)}+${f(sumLifeExtra)}) = ${f(PremLifeTotal)}`);
    console.log(`Premium Life L2 = F×rate×(SA-5M)/1000 = 12×${m_rate}×(${f(m_sa)}-5,000,000)/1000 = ${f(PremLifeL2)}`);
    console.log(`Premium Life L3 = ${f(PremLifeL3)} (no member > 20M)`);
    console.log(`Premium Life L1 = TOTAL - L2 - L3 = ${f(PremLifeTotal)} - ${f(PremLifeL2)} - 0 = ${f(PremLifeL1)}`);
    console.log(`\n  ri_prem_life L1 = ${f(PremLifeL1)} × 15%  = ${f(riLife.L1)}   | actual ${f(A.L1.life)}  ${ok(riLife.L1,A.L1.life)}`);
    console.log(`  ri_prem_life L2 = ${f(PremLifeL2)} × 100% = ${f(riLife.L2)}   | actual ${f(A.L2.life)}  ${ok(riLife.L2,A.L2.life)}`);
    console.log(`  ri_prem_life L3 = ${f(PremLifeL3)} × 0%   = ${f(riLife.L3)}        | actual ${f(A.L3.life)}  ${ok(riLife.L3,A.L3.life)}`);

    console.log('\n========== ACCIDENT ==========');
    console.log(`Premium Acc TOTAL = 12×(${f(sumAccPrem)}+${f(sumAccExtra)}) = ${f(PremAccTotal)}`);
    console.log(`Premium Acc L2 = 12×${a_rate}×(${f(a_sa)}-5,000,000)/1000 = ${f(PremAccL2)}`);
    console.log(`Premium Acc L1 = ${f(PremAccTotal)} - ${f(PremAccL2)} = ${f(PremAccL1)}`);
    console.log(`\n  ri_prem_acc L1 = ${f(PremAccL1)} × 15%  = ${f(riAcc.L1)}    | actual ${f(A.L1.acc)}  ${ok(riAcc.L1,A.L1.acc)}`);
    console.log(`  ri_prem_acc L2 = ${f(PremAccL2)} × 100% = ${f(riAcc.L2)}    | actual ${f(A.L2.acc)}  ${ok(riAcc.L2,A.L2.acc)}`);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

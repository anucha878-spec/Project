const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const R2 = n => Math.round(n*100)/100;

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // ---- inputs from CURRENT (post-backfill) data ----
    const F = 1;                       // Factor Mode of Payment (mode_pay=1 annual)
    const cede = {L1:0.15, L2:1.00, L3:0.00};

    // member premiums (life) summed across all bands
    const bands = (await c.query(`
      SELECT CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2' ELSE 'L3' END band,
             SUM(life_prem)::numeric life_prem, SUM(life_e1_prem)::numeric life_extra
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505' GROUP BY 1`)).rows;
    const Bp = {}; bands.forEach(b=>Bp[b.band]=b);
    const sumLifePrem  = bands.reduce((s,b)=>s+Number(b.life_prem),0);
    const sumLifeExtra = bands.reduce((s,b)=>s+Number(b.life_extra),0);
    const PremLifeTotal = R2(F*(sumLifePrem+sumLifeExtra));

    // L2-band members (5M<SA<=20M) and L3-band members (SA>20M) with prem_rate_life
    const mem = (await c.query(`
      SELECT cer_no, sum_insured_life sa, prem_rate_life rate, prem_extra_life extra
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5505' AND sum_insured_life>5000000 ORDER BY sum_insured_life`)).rows;

    let L2 = 0, L3 = 0;
    const lines = [];
    for (const m of mem) {
      const sa=Number(m.sa), rate=Number(m.rate), ex=Number(m.extra);
      if (sa>5000000 && sa<=20000000) {           // L2-band member
        const c2 = F*rate*(sa-5000000)/1000 + (ex? F*ex*(sa-5000000)/sa : 0);
        L2 += c2; lines.push(`  L2-mem ${m.cer_no} SA=${f(sa)} rate=${rate}: L2 += F×${rate}×(${f(sa)}-5M)/1000 = ${f(c2)}`);
      } else if (sa>20000000) {                    // L3-band member
        const c2 = F*rate*15000000/1000 + (ex? F*ex*15000000/sa : 0);  // 15M middle slice -> L2
        const c3 = F*rate*(sa-20000000)/1000 + (ex? F*ex*(sa-20000000)/sa : 0); // top slice -> L3
        L2 += c2; L3 += c3;
        lines.push(`  L3-mem ${m.cer_no} SA=${f(sa)} rate=${rate}: L2 += F×${rate}×15M/1000 = ${f(c2)} ; L3 += F×${rate}×(${f(sa)}-20M)/1000 = ${f(c3)}`);
      }
    }
    L2=R2(L2); L3=R2(L3);
    const L1 = R2(PremLifeTotal - L2 - L3);

    const riL1=R2(L1*cede.L1), riL2=R2(L2*cede.L2), riL3=R2(L3*cede.L3);

    // actual policy_dt across the key runs
    const act = (await c.query(`
      SELECT ph.rig_est_hd_id, pd.level, pd.ri_prem_life
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE pd.policy_no='GL5505' AND ph.rig_est_hd_id IN (439,452) ORDER BY ph.rig_est_hd_id, pd.level`)).rows;

    console.log('===== GL5505 — formula (Factor=1, current post-backfill members) =====');
    console.log(`Σlife_prem=${f(sumLifePrem)}  Σextra=${f(sumLifeExtra)}  → Premium Life TOTAL = ${f(PremLifeTotal)}`);
    lines.forEach(l=>console.log(l));
    console.log(`\nEXPECTED Premium: L2=${f(L2)}  L3=${f(L3)}  L1(residual)=${f(L1)}`);
    console.log(`EXPECTED ri_prem_life: L1=${f(riL1)} (×15%)  L2=${f(riL2)} (×100%)  L3=${f(riL3)} (×0%)`);

    console.log('\n===== ACTUAL policy_dt =====');
    const byhd={}; act.forEach(r=>{byhd[r.rig_est_hd_id]=byhd[r.rig_est_hd_id]||{}; byhd[r.rig_est_hd_id][r.level]=Number(r.ri_prem_life);});
    for (const hd of ['439','452']) {
      const a=byhd[hd]||{};
      console.log(`  hd ${hd}: L1=${f(a.L1||0)}  L2=${f(a.L2||0)}  L3=${f(a.L3||0)}`);
    }
    console.log(`\n  hd 439 L1 ${f(byhd['439'].L1)} = TOTAL ${f(PremLifeTotal)} × 15% = ${f(PremLifeTotal*0.15)} ? ${Math.abs(byhd['439'].L1-PremLifeTotal*0.15)<0.01?'YES → full collapse to L1 (DEFECT confirmed at hd439)':'no'}`);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

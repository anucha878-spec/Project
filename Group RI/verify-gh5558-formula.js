const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const R2 = n => Math.round(n*100)/100;

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // GH5558 member-level: L2/L3 band members with rate
    console.log('=== GH5558 members with life SA>5M (cert + inforce_member rate) ===');
    const big = (await c.query(`
      SELECT cer_no, age, sex, life_insur, life_prem, life_e1_prem,
             ROUND((life_prem/NULLIF(life_insur,0)*1000)::numeric,4) implied_rate
      FROM tx_est_snap_cert_inforce WHERE policy_no='GH5558' AND life_insur>5000000 ORDER BY life_insur`)).rows;
    console.log(JSON.stringify(big,null,1));
    const memRate = (await c.query(`
      SELECT cer_no, sum_insured_life, prem_rate_life, prem_extra_life, prem_life
      FROM tx_stg_est_inforce_member WHERE policy_no='GH5558' AND sum_insured_life>5000000 ORDER BY sum_insured_life`)).rows;
    console.log('inforce_member rate:', JSON.stringify(memRate,null,1));

    // totals
    const tot = (await c.query(`
      SELECT SUM(life_prem)::numeric life_prem, SUM(life_e1_prem)::numeric life_extra
      FROM tx_est_snap_cert_inforce WHERE policy_no='GH5558'`)).rows[0];

    // actual policy_dt (latest = hd 366)
    const act = (await c.query(`
      SELECT pd.level, pd.ri_prem_life
      FROM tx_rig_est_policy_dt pd JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id=pd.rig_est_policy_hd_id
      WHERE pd.policy_no='GH5558' AND ph.rig_est_hd_id=366 ORDER BY pd.level`)).rows;
    const A={}; act.forEach(r=>A[r.level]=Number(r.ri_prem_life));

    const F=1, cede={L1:0.15,L2:1.00,L3:0.00};
    const Total = R2(F*(Number(tot.life_prem)+Number(tot.life_extra)));
    let L2=0,L3=0;
    const useRate = r => Number(r.prem_rate_life);
    for (const m of memRate) {
      const sa=Number(m.sum_insured_life), rate=Number(m.prem_rate_life), ex=Number(m.prem_extra_life);
      if (sa>5000000 && sa<=20000000) L2 += F*rate*(sa-5000000)/1000 + (ex?F*ex*(sa-5000000)/sa:0);
      else if (sa>20000000){ L2 += F*rate*15000000/1000; L3 += F*rate*(sa-20000000)/1000; }
    }
    L2=R2(L2); L3=R2(L3); const L1=R2(Total-L2-L3);
    const ri={L1:R2(L1*cede.L1),L2:R2(L2*cede.L2),L3:R2(L3*cede.L3)};
    const ok=(a,b)=>Math.abs((a||0)-(b||0))<0.01?'✅':'❌';

    console.log(`\nFactor=1 | Σlife_prem=${f(tot.life_prem)} Σextra=${f(tot.life_extra)} → Total=${f(Total)}`);
    console.log(`EXPECTED Premium: L2=${f(L2)} L3=${f(L3)} L1=${f(L1)}`);
    console.log(`EXPECTED ri: L1=${f(ri.L1)} L2=${f(ri.L2)} L3=${f(ri.L3)}`);
    console.log(`ACTUAL   ri: L1=${f(A.L1)} L2=${f(A.L2)} L3=${f(A.L3)}`);
    console.log(`MATCH:       L1 ${ok(ri.L1,A.L1)}  L2 ${ok(ri.L2,A.L2)}  L3 ${ok(ri.L3,A.L3)}`);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

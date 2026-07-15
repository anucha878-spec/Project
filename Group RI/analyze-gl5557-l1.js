const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const J = x => JSON.stringify(x, null, 1);
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 0) rate table: distinct codes + range of values for GL5557
    console.log('=== rate table codes/value-range for GL5557 ===');
    console.log(J((await c.query(`
      SELECT prem_rate_table_code, prem_rate_table_type, COUNT(*)::int n,
             MIN(value_age_or_class) amin, MAX(value_age_or_class) amax,
             MIN(value_life) life_min, MAX(value_life) life_max,
             MIN(value_acc) acc_min, MAX(value_acc) acc_max
      FROM tx_est_snap_prem_rate WHERE policy_no='GL5557' GROUP BY 1,2`)).rows));

    // 0b) search rate table for the implied L2 rates (life 2.304, acc 0.756) anywhere
    console.log('\n=== search rate table for life=2.304 OR acc=0.756 (any policy/age) ===');
    console.log(J((await c.query(`
      SELECT policy_no, prem_rate_table_code, value_age_or_class, value_gender, value_life, value_acc, value_tpd
      FROM tx_est_snap_prem_rate WHERE value_life=2.304 OR value_acc=0.756 LIMIT 20`)).rows));

    // 1) pull all 360 certs (raw) + rate-table life/acc by age (gender 1 & 2)
    const certs = (await c.query(`
      SELECT cer_no, age, sex, life_insur, acc_insur, tpd_insur,
             life_prem, acc_prem, tpd_prem, life_e1_prem, life_e1_rate,
             sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem, total_prem
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557'`)).rows;

    const rates = (await c.query(`
      SELECT value_age_or_class::int age, value_gender, value_life, value_acc, value_tpd
      FROM tx_est_snap_prem_rate WHERE policy_no='GL5557'`)).rows;
    const rmap = {};
    for (const r of rates) rmap[`${r.age}|${r.value_gender}`] = r;

    // helper: classify life-band (GIB L1<=5M, L2 5-20M, L3>20M)
    const bandLife = sa => sa<=5000000?'L1':(sa<=20000000?'L2':'L3');
    const bandAcc  = sa => sa<=5000000?'L1':(sa<=20000000?'L2':'L3');

    // accumulate candidate bases by life-band
    const acc = {};
    const add = (b,k,v)=>{ acc[b]??={}; acc[b][k]=(acc[b][k]||0)+v; };
    for (const r of certs) {
      const b = bandLife(Number(r.life_insur));
      const rt = rmap[`${r.age}|${r.sex}`] || {value_life:0,value_acc:0};
      const saL = Number(r.life_insur), saA = Number(r.acc_insur);
      add(b,'n',1);
      add(b,'sa_life',saL);
      add(b,'sa_acc',saA);
      add(b,'life_prem',Number(r.life_prem));               // actual member life prem
      add(b,'sum_life_prem',Number(r.sum_life_prem));        // cumulative
      add(b,'life_x_ratetbl', saL/1000*Number(rt.value_life)); // SA/1000 × age-rate(life)
      add(b,'acc_x_ratetbl',  saA/1000*Number(rt.value_acc));  // SA/1000 × age-rate(acc)
      add(b,'life_x_0256', saL/1000*0.256);                  // SA/1000 × prem_layer rate
      add(b,'acc_x_0084',  saA/1000*0.084);
      add(b,'acc_prem', Number(r.acc_prem));
      add(b,'sum_acc_prem', Number(r.sum_acc_prem));
    }
    console.log('\n=== candidate BASE sums by life-band ===');
    for (const b of ['L1','L2','L3']) {
      if (!acc[b]) continue;
      const a = acc[b];
      console.log(`\n  -- ${b} (n=${a.n}) --`);
      Object.keys(a).filter(k=>k!=='n').forEach(k=>console.log(`     ${k.padEnd(16)} = ${f(a[k])}`));
    }

    console.log('\n=== TARGETS ===');
    console.log('  L1 life base (ri/0.15) = 927,954.00 ; L1 acc base = 242,625.60');
    console.log('  L2 life base (ri/1.0)  = 46,080.00  ; L2 acc base = 15,120.00');
    console.log('  ri actual: L1 life 139,193.10 / acc 36,393.84 ; L2 life 46,080.00 / acc 15,120.00');

    // 2) detailed look at cer 00005 with its age rate
    const m5 = certs.find(x=>x.cer_no==='00005');
    const rt5 = rmap[`${m5.age}|${m5.sex}`];
    console.log('\n=== cer 00005 (L2) detail ===');
    console.log('  age', m5.age, 'sex', m5.sex, 'SA_life', f(m5.life_insur), 'SA_acc', f(m5.acc_insur));
    console.log('  life_prem', f(m5.life_prem), 'acc_prem', f(m5.acc_prem), 'sum_life_prem', f(m5.sum_life_prem));
    console.log('  rate table @age', m5.age, '=>', JSON.stringify(rt5));
    console.log('  SA/1000 × ratetbl_life =', f(Number(m5.life_insur)/1000*Number(rt5.value_life)));
    console.log('  46,080 / (SA/1000) =', (46080/(Number(m5.life_insur)/1000)).toFixed(4), '(implied life rate)');
    console.log('  15,120 / (SA/1000) =', (15120/(Number(m5.acc_insur)/1000)).toFixed(4), '(implied acc rate)');
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

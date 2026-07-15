const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:30000 };
const J = x => JSON.stringify(x, null, 1);
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:4});

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // ============ PART 1: GL346 Exp Refund — mode + all premium columns ============
    console.log('============ GL346 Exp Refund : mode_of_payment + premium columns ============');
    console.log(J((await c.query(`
      SELECT policy_year, doc_no, rd_type, mode_of_payment,
             premium, premium_all, premium_all_g, premium_statement, premium_adj, premium_inv, premium_e1
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' ORDER BY policy_year, rd_type, doc_no`)).rows));

    // staging premium_life/acc (annual base used in formula) vs snapshot premium_all_g
    console.log('\n--- GL346 staging premium_life/acc/tpd + total (the base I used) ---');
    console.log(J((await c.query(`SELECT policy_year, premium_life, premium_accident, premium_tpd, total_premium FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows));

    // ============ PART 2: mode distribution across exp_refund ============
    console.log('\n============ mode_of_payment distribution (exp_refund snapshot) ============');
    console.log(J((await c.query(`SELECT mode_of_payment, COUNT(*)::int n FROM tx_act_snap_exprefund GROUP BY mode_of_payment ORDER BY 1`)).rows));

    // Find a CLEARLY modal exp_refund policy (mode<>1) to test if premium is annualized
    console.log('\n============ exp_refund rows with mode<>annual : check premium vs premium_inv (modal) ============');
    console.log(J((await c.query(`
      SELECT policy_no, policy_year, rd_type, mode_of_payment, premium, premium_inv, premium_statement,
             ROUND((premium / NULLIF(premium_inv,0))::numeric,4) AS prem_div_inv
      FROM tx_act_snap_exprefund
      WHERE mode_of_payment IS NOT NULL AND mode_of_payment <> 1 AND premium_inv IS NOT NULL AND premium_inv<>0
      ORDER BY policy_no, policy_year LIMIT 25`)).rows));

    // ============ PART 3: GL5557 — policy mode + cert premium vs SA×rate (annual) ============
    console.log('\n============ GL5557 : policy mode_pay (est_snap_policy) ============');
    console.log(J((await c.query(`SELECT policy_no, period, mode_pay, policy_year FROM tx_est_snap_policy WHERE policy_no='GL5557'`).catch(()=>({rows:[{note:'no mode_pay col'}]}))).rows));

    console.log('\n--- GL5557 cert 00005 : premium columns + pay_type/mode (is life_prem annual or modal?) ---');
    console.log(J((await c.query(`
      SELECT cer_no, age, sex, pay_type, mode_of_payment, count_of_day, life_insur,
             life_prem, sum_life_prem, acc_prem, sum_acc_prem, total_prem, sum_total_prem
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557' AND cer_no='00005'`).catch(async e=>{
        // mode_of_payment may not exist on cert_inforce; retry without it
        return await c.query(`SELECT cer_no, age, sex, pay_type, count_of_day, life_insur, life_prem, sum_life_prem, acc_prem, sum_acc_prem, total_prem, sum_total_prem FROM tx_est_snap_cert_inforce WHERE policy_no='GL5557' AND cer_no='00005'`);
      })).rows));

    // age-68 annual rate from table → SA/1000 × annual_rate, compare to stored life_prem & sum_life_prem
    console.log('\n--- compare cer00005: SA/1000 × annual_rate(age68) vs stored premiums ---');
    const rt = (await c.query(`SELECT value_life, value_acc, value_tpd FROM tx_est_snap_prem_rate WHERE policy_no='GL5557' AND value_age_or_class=68 AND value_gender='1' LIMIT 1`)).rows[0];
    console.log('  rate@68:', J(rt));
    console.log('  annual life = 20,000 ×', rt.value_life, '=', f(20000*Number(rt.value_life)));
    console.log('  annual acc  = 20,000 ×', rt.value_acc, '=', f(20000*Number(rt.value_acc)));
    console.log('  stored life_prem=36,400 ; sum_life_prem=40,469.80  → /12,/4,/2 of annual? annual/12=',f(20000*Number(rt.value_life)/12));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

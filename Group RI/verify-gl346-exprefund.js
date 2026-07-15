const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const f = n => Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // ---- A) DETAIL per coverage: exp_refund_dt =? premium × (1-expense%) × refund%  (gross, pre-claim) ----
    console.log('===== A) PER-COVERAGE DETAIL: exp_refund_dt vs premium × total_amt% × g% =====');
    const dt = (await c.query(`
      SELECT policy_year, doc_no, rd_type, rd_name, premium,
             total_amt_percent, exp_refund_g_percent, exp_refund_dt
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' ORDER BY policy_year, rd_type, doc_no`)).rows;
    console.log('PY | doc           | cov | premium      | ×0.35 expected | exp_refund_dt | verdict');
    console.log('-'.repeat(95));
    for (const r of dt) {
      const exp = Number(r.premium) * (Number(r.total_amt_percent)/100) * (Number(r.exp_refund_g_percent)/100);
      const ok = Math.abs(exp - Number(r.exp_refund_dt)) < 0.01;
      const zeroed = Number(r.exp_refund_dt)===0 && exp>0;
      console.log(`${String(r.policy_year).padEnd(2)} | ${r.doc_no.padEnd(13)} | ${r.rd_type}  | ${f(r.premium).padStart(12)} | ${f(exp).padStart(14)} | ${f(r.exp_refund_dt).padStart(13)} | ${ok?'OK':(zeroed?'=0 (see net/claim)':'*** MISMATCH')}`);
    }

    // ---- B) POLICY-YEAR NET formula (staging) ----
    console.log('\n===== B) POLICY-YEAR NET (staging): exp_refund =? refund% × (total_prem×(1-expense%) − claim + LCF) =====');
    const stg = (await c.query(`
      SELECT policy_year, total_premium, premium_life, premium_accident, claim, claim_life, claim_add, claim_dismem,
             exp_refund_previous_year AS lcf, percent_exp_refund, percent_expense, exp_refund
      FROM tx_stg_act_exp_refund WHERE policy_no='GL346' ORDER BY policy_year`)).rows;
    for (const r of stg) {
      const rfd = Number(r.percent_exp_refund)/100, exp = Number(r.percent_expense)/100;
      const net = rfd * (Number(r.total_premium)*(1-exp) - Number(r.claim) + Number(r.lcf));
      const gross = rfd * (Number(r.total_premium)*(1-exp));
      console.log(`\n  PY${r.policy_year}: total_prem=${f(r.total_premium)} (life=${f(r.premium_life)} acc=${f(r.premium_accident)}) claim=${f(r.claim)} (L=${f(r.claim_life)}/add=${f(r.claim_add)}/dis=${f(r.claim_dismem)}) LCF=${f(r.lcf)} | %refund=${r.percent_exp_refund} %expense=${r.percent_expense}`);
      console.log(`    GROSS (pre-claim) = ${rfd} × (${f(r.total_premium)}×${1-exp}) = ${f(gross)}`);
      console.log(`    NET   (formula)   = ${rfd} × (${f(r.total_premium)}×${1-exp} − ${f(r.claim)} + ${f(r.lcf)}) = ${f(net)} ${net<=0?'→ ≤0 ⇒ EXCLUDE (TC-CR1-027)':''}`);
      console.log(`    STORED exp_refund = ${f(r.exp_refund)}  ${Math.abs(net-Number(r.exp_refund))<0.01?'== NET ✅':(Math.abs(gross-Number(r.exp_refund))<0.01?'== GROSS (claim NOT applied) ⚠️':'*** matches NEITHER net nor own-gross ***')}`);
    }

    // ---- C) cross-contamination check: is PY34 gross computed from PY33 premium? ----
    console.log('\n===== C) GROSS cross-year check (exp_refund_g per policy_year) =====');
    const g = (await c.query(`
      SELECT DISTINCT policy_year, premium_all_g, total_amt_percent, exp_refund_g_percent, exp_refund_g
      FROM tx_act_snap_exprefund WHERE policy_no='GL346' ORDER BY policy_year`)).rows;
    for (const r of g) {
      const exp = Number(r.premium_all_g)*(Number(r.total_amt_percent)/100)*(Number(r.exp_refund_g_percent)/100);
      const ok = Math.abs(exp-Number(r.exp_refund_g))<0.01;
      console.log(`  PY${r.policy_year}: premium_all_g=${f(r.premium_all_g)} ×0.35 = ${f(exp)} | exp_refund_g=${f(r.exp_refund_g)} ${ok?'OK':'*** MISMATCH (uses wrong premium?)'}`);
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

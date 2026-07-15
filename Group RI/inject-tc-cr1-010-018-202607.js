// ============================================================================
// #75852 re-inject — GL5505 GIB multi-layer fixture, RETARGETED to period 202607
// Retarget of validate-insert-tc-cr1-010-018.js (was 202605 / proc 14342/14340).
// Current landing (confirmed 2026-07-07): cert proc 19880, tpd proc 19878, period 202607,
//   policy proc 19874 (py2 rate_flag=1 Non-Unit), rate code 108 value_life=1.2 / value_acc=3.0,
//   max cer_no GL5505 = 00700 (00701-00708 do not collide).
//
// DRY_RUN=true  -> BEGIN / INSERT / ROLLBACK (validate only, nothing committed) [DEFAULT]
// DRY_RUN=false -> COMMIT  (Dev flips this to inject live, then runs Estimate 202607)
// ISOLATION: every row created_by='QA_TC_CR1_010_018' (cleanup at bottom).
// ============================================================================
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

const DRY_RUN  = true;      // <<< Dev: set false to COMMIT
const P_CERT   = 19880;     // 202607 cert_inforce proc
const P_TPD    = 19878;     // 202607 claimtpd proc
const PERIOD   = 202607;
const TAG      = 'QA_TC_CR1_010_018';

const CERT = `
WITH base AS (SELECT COALESCE(MAX(rig_v_pol_inforce_id),0) AS m FROM tx_rig_landing_cert_inforce)
INSERT INTO tx_rig_landing_cert_inforce (
  rig_v_pol_inforce_id, rig_process_hd_id, period, doc_no, policy_no, effect_date,
  cer_no, comp_code, company_code, company_head_code, re_insure_no,
  age, sex, life_insur, acc_insur, med_insur, tpd_insur,
  life_prem, acc_prem, med_acc_prem, tpd_prem, total_prem,
  status_member, doc_date, policy_name, company_name, promise_date,
  policy_year, pay_type, created_date, created_by,
  cust_code, change_date, period_date, tax_year,
  med_rate, count_of_day, status, lot_no,
  cremat_insur, life_e1_rate, life_e1_prem, cremat_prem,
  ipd_prem, opd_prem, major_plan_prem, dental_prem, mather_prem, hb_prem, opd_lab_prem,
  sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
  sum_life_e1_prem, sum_cremat_prem, sum_med_acc_prem, sum_ipd_prem, sum_opd_prem,
  sum_major_plan_prem, sum_dental_prem, sum_mather_prem, sum_hb_prem, sum_opd_lab_prem)
SELECT base.m + v.rn, ${P_CERT}, ${PERIOD}, 'INF.TEST/CR1', 'GL5505', DATE '2025-04-01',
  v.cer, '2568000316', '2568000316', '2568000316', '2504002',
  v.age, v.sex, v.life, v.acc, 0, v.tpd,
  v.life_prem, v.acc_prem, 0, 0, (v.life_prem + v.acc_prem),
  'I', DATE '2025-04-01', 'UBE (THAILAND) CO., LTD.', 'อูเบะ กรุ๊ป (ไทยแลนด์)', DATE '2026-04-01',
  2, 3, NOW(), '${TAG}',
  '25680' || v.cer, DATE '2026-04-01', TIMESTAMP '2026-04-01 00:00:00', 2026,
  '', 0, 0, 1,
  0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0.00,
  SUM(v.life_prem) OVER (), SUM(v.acc_prem) OVER (), 0, SUM(v.life_prem + v.acc_prem) OVER (),
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0.00
FROM base, (VALUES
  (1, '00701', 35, 1, 4000000,  0,       0,       4800,  0),
  (2, '00702', 45, 1, 12000000, 0,       0,       14400, 0),
  (3, '00703', 55, 2, 22000000, 0,       0,       26400, 0),
  (4, '00704', 40, 1, 0,        5000000, 0,       0,     15000),
  (5, '00705', 50, 2, 0,        5000000, 0,       0,     15000),
  (6, '00706', 60, 1, 0,        5000000, 0,       0,     15000),
  (7, '00707', 72, 1, 0,        5000000, 0,       0,     5000),
  (8, '00708', 58, 1, 5000000,  0,       5000000, 6000,  0)
) AS v(rn, cer, age, sex, life, acc, tpd, life_prem, acc_prem);`;

const TPD = `
INSERT INTO tx_rig_landing_claimtpd (
  rig_v_clm_tpd_id, rig_process_hd_id, period, inform_no, consider_date,
  policy_no, policy_year, certific_cust_no, cust_code, attn_age, status,
  effect_date, accident_date, accident_cause, policy_age,
  acc_insur, tpd_insur, claim_status, indemnity_rate, indemnity_amt,
  approve_acc_insur, approve_tpd_insur, approve_claim, approve_date,
  amount, pay_date, created_date, created_by,
  policy_code, prod_claim_code, loss_ratio, receive_no, receive_date)
SELECT
  (SELECT COALESCE(MAX(rig_v_clm_tpd_id),0)+1 FROM tx_rig_landing_claimtpd),
  ${P_TPD}, ${PERIOD}, 'TPDTC1018', DATE '2025-08-20',
  'GL5505', 2, '00708', '2568000316', 58, 'A',
  DATE '2025-04-01', DATE '2025-08-15', 'อุบัติเหตุ-ทุพพลภาพถาวรสิ้นเชิง', '1',
  5000000, 5000000, 1, 100, 3000000,
  5000000, 3000000, 3000000, DATE '2025-08-25',
  3000000, DATE '2025-08-30', NOW(), '${TAG}',
  1, '140400', 1.0000, '25680018', DATE '2025-08-20';`;

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log(`#75852 re-inject 202607  DRY_RUN=${DRY_RUN}  (cert proc ${P_CERT}, tpd proc ${P_TPD})\n`);
  try {
    await c.query('BEGIN');
    const r1 = await c.query(CERT);  console.log('cert_inforce INSERT rowCount =', r1.rowCount);
    const r2 = await c.query(TPD);   console.log('claimtpd     INSERT rowCount =', r2.rowCount);
    console.log('\n--- injected cert (layer split by SA band) ---');
    console.log(J((await c.query(`
      SELECT cer_no, life_insur, acc_insur, life_prem, acc_prem,
             CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2'
                  WHEN life_insur>20000000 THEN 'L3' ELSE '-' END life_band
      FROM tx_rig_landing_cert_inforce WHERE created_by='${TAG}' AND period=${PERIOD} ORDER BY cer_no`)).rows));
    if (DRY_RUN) { await c.query('ROLLBACK'); console.log('\n✅ VALIDATED — ROLLED BACK (nothing committed). Dev: set DRY_RUN=false to inject live.'); }
    else         { await c.query('COMMIT');   console.log('\n✅ COMMITTED to period '+PERIOD+'. Next: run Estimate 202607, then verify SC-001.'); }
  } catch (e) {
    await c.query('ROLLBACK').catch(()=>{});
    console.error('❌ FAILED:', e.message); process.exit(1);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

// CLEANUP after test:
//   DELETE FROM tx_rig_landing_claimtpd     WHERE created_by='QA_TC_CR1_010_018';
//   DELETE FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018';

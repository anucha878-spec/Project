// Dry-run validator: รัน 2 INSERT ของไฟล์ insert-tc-cr1-010-018-landing-gl5505.sql
// ภายใน transaction แล้ว ROLLBACK เสมอ — ตรวจว่า column list/type ถูกต้อง + ดูค่าที่เติม
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

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
SELECT base.m + v.rn, 14342, 202605, 'INF.TEST/CR1', 'GL5505', DATE '2025-04-01',
  v.cer, '2568000316', '2568000316', '2568000316', '2504002',
  v.age, v.sex, v.life, v.acc, 0, v.tpd,
  v.life_prem, v.acc_prem, 0, 0, (v.life_prem + v.acc_prem),
  'I', DATE '2025-04-01', 'UBE (THAILAND) CO., LTD.', 'อูเบะ กรุ๊ป (ไทยแลนด์)', DATE '2026-04-01',
  2, 3, NOW(), 'QA_TC_CR1_010_018',
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
  14340, 202605, 'TPDTC1018', DATE '2025-08-20',
  'GL5505', 2, '00708', '2568000316', 58, 'A',
  DATE '2025-04-01', DATE '2025-08-15', 'อุบัติเหตุ-ทุพพลภาพถาวรสิ้นเชิง', '1',
  5000000, 5000000, 1, 100, 3000000,
  5000000, 3000000, 3000000, DATE '2025-08-25',
  3000000, DATE '2025-08-30', NOW(), 'QA_TC_CR1_010_018',
  1, '140400', 1.0000, '25680018', DATE '2025-08-20';`;

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    await c.query('BEGIN');
    const r1 = await c.query(CERT);
    console.log('cert_inforce INSERT rowCount =', r1.rowCount);
    const r2 = await c.query(TPD);
    console.log('claimtpd     INSERT rowCount =', r2.rowCount);

    console.log('\n--- backfilled cert rows ---');
    console.log(J((await c.query(`
      SELECT cer_no, cust_code, tax_year, lot_no, status, med_rate,
             change_date::date change_date, period_date,
             sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
             end_date, approved_date, pol_end_date
      FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018' ORDER BY cer_no`)).rows));

    console.log('\n--- check sum_total = sum_life+sum_acc+sum_tpd (invariant) ---');
    console.log(J((await c.query(`
      SELECT DISTINCT sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
             (sum_life_prem+sum_acc_prem+sum_tpd_prem) calc,
             (sum_total_prem = sum_life_prem+sum_acc_prem+sum_tpd_prem) ok
      FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018'`)).rows));

    console.log('\n--- backfilled claimtpd row ---');
    console.log(J((await c.query(`
      SELECT certific_cust_no, policy_code, prod_claim_code, tpd_prod_code,
             loss_ratio, receive_no, receive_date::date receive_date
      FROM tx_rig_landing_claimtpd WHERE created_by='QA_TC_CR1_010_018'`)).rows));

    await c.query('ROLLBACK');
    console.log('\n✅ VALIDATION OK — rolled back (no data committed)');
  } catch (e) {
    await c.query('ROLLBACK').catch(()=>{});
    console.error('❌ VALIDATION FAILED:', e.message);
    process.exit(1);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

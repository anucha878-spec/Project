-- ============================================================================
-- BACKFILL NULL columns — ข้อมูลทดสอบ TC-CR1-010..018 ที่ COMMIT ไปแล้วบน live
--   target: created_by='QA_TC_CR1_010_018'  (8 cert + 1 claimtpd)
--   เติมคอลัมน์ที่เดิมเว้นว่าง ให้ตรงรูปแบบข้อมูลจริง (ดู insert-tc-cr1-010-018-landing-gl5505.sql)
--
-- default = ROLLBACK (dry-run). ตรวจผ่านแล้วเปลี่ยนเป็น COMMIT
-- idempotent: รันซ้ำได้ ค่าเหมือนเดิม (ไม่กรอง IS NULL เพื่อให้ผล deterministic)
-- ไม่แตะ: end_date / approved_date / pol_end_date (ข้อมูลจริงเว้น NULL — สมาชิก active 'I')
--         tpd_prod_code (claimtpd, ข้อมูลจริง fill 0%)
-- ============================================================================
BEGIN;

-- 1) cert_inforce — sum_*_prem คำนวณจากยอดรวม cohort จริงในตาราง (deterministic)
UPDATE tx_rig_landing_cert_inforce t SET
  cust_code        = '25680' || t.cer_no,
  change_date      = DATE '2026-04-01',
  period_date      = TIMESTAMP '2026-04-01 00:00:00',
  tax_year         = 2026,
  med_rate         = '',
  count_of_day     = 0,
  status           = 0,
  lot_no           = 1,
  cremat_insur     = 0, life_e1_rate = 0, life_e1_prem = 0, cremat_prem = 0,
  ipd_prem         = 0, opd_prem = 0, major_plan_prem = 0, dental_prem = 0,
  mather_prem      = 0, hb_prem = 0, opd_lab_prem = 0.00,
  sum_life_prem    = s.sl,
  sum_acc_prem     = s.sa,
  sum_tpd_prem     = 0,
  sum_total_prem   = s.st,
  sum_life_e1_prem = 0, sum_cremat_prem = 0, sum_med_acc_prem = 0, sum_ipd_prem = 0,
  sum_opd_prem     = 0, sum_major_plan_prem = 0, sum_dental_prem = 0, sum_mather_prem = 0,
  sum_hb_prem      = 0, sum_opd_lab_prem = 0.00
FROM (
  SELECT SUM(life_prem) sl, SUM(acc_prem) sa, SUM(life_prem + acc_prem + tpd_prem) st
  FROM tx_rig_landing_cert_inforce WHERE created_by = 'QA_TC_CR1_010_018'
) s
WHERE t.created_by = 'QA_TC_CR1_010_018';

-- 2) claimtpd
UPDATE tx_rig_landing_claimtpd SET
  policy_code     = 1,
  prod_claim_code = '140400',
  loss_ratio      = 1.0000,
  receive_no      = '25680018',
  receive_date    = DATE '2025-08-20'
WHERE created_by = 'QA_TC_CR1_010_018';

-- VERIFY
\echo '--- cert after backfill ---'
SELECT cer_no, cust_code, tax_year, lot_no, status, med_rate,
       change_date::date AS change_date, period_date,
       sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
       (sum_total_prem = sum_life_prem + sum_acc_prem + sum_tpd_prem) AS sum_ok,
       end_date, approved_date, pol_end_date
FROM tx_rig_landing_cert_inforce WHERE created_by = 'QA_TC_CR1_010_018' ORDER BY cer_no;

\echo '--- claimtpd after backfill ---'
SELECT certific_cust_no, policy_code, prod_claim_code, tpd_prod_code,
       loss_ratio, receive_no, receive_date::date AS receive_date
FROM tx_rig_landing_claimtpd WHERE created_by = 'QA_TC_CR1_010_018';

ROLLBACK;
-- COMMIT;

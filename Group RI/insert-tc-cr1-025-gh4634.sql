-- ============================================================================
-- TC-CR1-025 / TC-CR1-024 / TC-CR1-026 — Experience Refund Test Scenario
-- Policy: GH4634 (Group RI Treaty: GIB_Grp_Direct_EB)
-- Scenario: Claim > 0 with Life + AD&D + Dismemberment split + Loss carried fwd
-- TEST KEY: policy_year=8, period=202606  (แยกจาก production py=6/py=7)
--
-- CR#5 Formula (Redmine #66781, #66827):
--   C_t Life  = claim_life  - exp_refund_previous_year
--   C_t AD&D  = claim_add + claim_dismem
--   exp_refund = percent_exp_refund × (premium × (1-percent_expense) - claim + exp_refund_previous_year)
--
-- Coverage breakdown (rd_type):
--   01 Life | 02 AD&D | 10 TPD | 20 IPD | 22 OPD | 26 Accident Medical
--
-- Cleanup (ถ้าต้อง rollback):
--   DELETE FROM tx_stg_act_exp_refund    WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;
--   DELETE FROM tx_act_snap_exprefund    WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;
--   DELETE FROM tx_rig_landing_exprefund WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;
-- ============================================================================

BEGIN;

-- ============================================================================
-- LAYER 1: LANDING — tx_rig_landing_exprefund
-- ============================================================================
-- 6 rows = 6 coverage types (รวม 1 doc_no = EXP.TEST/CR1-025)
-- Header values (เหมือนกันทุก row): premium_all_g, claim_all, claim_reserve, adj_claim
-- Row-level: rd_type, rd_name, premium (เบี้ยของ coverage นั้นๆ)
-- ทุก row ใส่ claim_life/claim_add/claim_dismem (header-level breakdown ตามที่ Dev populate)

INSERT INTO tx_rig_landing_exprefund (
  rig_v_exp_id, rig_process_hd_id, period, doc_no, doc_date, at_date,
  mode_of_payment, policy_no, policy_year, period_begin_date, period_end_date, cal_date,
  company_code_head, company_name_head, company_code, company_name,
  lot_no, lot_no_all,
  premium_all, premium_all_g, claim_all,
  claim_reserve, claim_reserve_percent, last_year_claim_reserve,
  total_claim, total_amt, total_amt_percent,
  adj_claim, net_amt,
  exp_refund_g_percent, exp_refund_g, exp_refund,
  invoice_no, beneficiary_companycode, beneficiary_companyname,
  type, premium_statement, premium_adj, premium_inv, exp_refund_g_sum,
  rd_type, rd_name, premium,
  exp_refund_dt, premium_e1, exp_refund_e1, flg_cal,
  exp_refund_per_m, exp_refund_e1_per_m,
  created_date, created_by,
  claim_life, claim_add, claim_dismem
) VALUES
-- ============ rd=01 LIFE ============
(432, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '01', 'การประกันชีวิต', 10000000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000),

-- ============ rd=02 AD&D ============
(433, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '02', 'การประกันอุบัติเหตุ (กรณีเสียชีวิต)', 3500000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000),

-- ============ rd=10 TPD ============
(434, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '10', 'การประกันทุพพลภาพ (ทุกกรณี)', 500000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000),

-- ============ rd=20 IPD ============
(435, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '20', 'การประกันสุขภาพ แบบผู้ป่วยใน', 800000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000),

-- ============ rd=22 OPD ============
(436, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '22', 'การประกันแบบผู้ป่วยนอก', 400000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000),

-- ============ rd=26 Accident Medical ============
(437, 14053, 202606, 'EXP.TEST/CR1-025', '2025-12-15', '2025-12-15',
 3, 'GH4634', 8, '2025-07-01', '2026-06-30', '2025-12-16',
 '2561001068', 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ', '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 0, 0,
 15500000.0000, 15500000.0000, 8000000.0000,
 800000.0000, 10, 700000.0000,
 8100000.0000, -2000000.0000, 80,
 -2000000.0000, -2000000.0000,
 85, 0.0000, 0.0000,
 NULL, '2561001069', 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
 'R', 0.0000, 0.0000, 0.0000, 0.0000,
 '26', 'การประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ', 300000.0000,
 0.0000, 0.0000, 0.0000, true,
 0.0000, NULL,
 NOW(), 'QA_TC_CR1_025',
 5000000.0000, 2500000.0000, 500000.0000);


-- ============================================================================
-- LAYER 2: SNAPSHOT — tx_act_snap_exprefund
-- ============================================================================
-- โครงสร้างเหมือน landing 100% — copy ค่าทุกอย่างจาก landing (mirror)
-- ใช้ rig_v_exp_id ชุดเดียวกัน (snap = snapshot ที่ approved ของ landing)

INSERT INTO tx_act_snap_exprefund (
  rig_v_exp_id, rig_process_hd_id, period, doc_no, doc_date, at_date,
  mode_of_payment, policy_no, policy_year, period_begin_date, period_end_date, cal_date,
  company_code_head, company_name_head, company_code, company_name,
  lot_no, lot_no_all,
  premium_all, premium_all_g, claim_all,
  claim_reserve, claim_reserve_percent, last_year_claim_reserve,
  total_claim, total_amt, total_amt_percent,
  adj_claim, net_amt,
  exp_refund_g_percent, exp_refund_g, exp_refund,
  invoice_no, beneficiary_companycode, beneficiary_companyname,
  type, premium_statement, premium_adj, premium_inv, exp_refund_g_sum,
  rd_type, rd_name, premium,
  exp_refund_dt, premium_e1, exp_refund_e1, flg_cal,
  exp_refund_per_m, exp_refund_e1_per_m,
  created_date, created_by,
  claim_life, claim_add, claim_dismem
)
SELECT
  rig_v_exp_id, rig_process_hd_id, period, doc_no, doc_date, at_date,
  mode_of_payment, policy_no, policy_year, period_begin_date, period_end_date, cal_date,
  company_code_head, company_name_head, company_code, company_name,
  lot_no, lot_no_all,
  premium_all, premium_all_g, claim_all,
  claim_reserve, claim_reserve_percent, last_year_claim_reserve,
  total_claim, total_amt, total_amt_percent,
  adj_claim, net_amt,
  exp_refund_g_percent, exp_refund_g, exp_refund,
  invoice_no, beneficiary_companycode, beneficiary_companyname,
  type, premium_statement, premium_adj, premium_inv, exp_refund_g_sum,
  rd_type, rd_name, premium,
  exp_refund_dt, premium_e1, exp_refund_e1, flg_cal,
  exp_refund_per_m, exp_refund_e1_per_m,
  created_date, created_by,
  claim_life, claim_add, claim_dismem
FROM tx_rig_landing_exprefund
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
  AND doc_no='EXP.TEST/CR1-025';


-- ============================================================================
-- LAYER 3: STAGING — tx_stg_act_exp_refund
-- ============================================================================
-- 1 row ต่อ policy_no × policy_year × period (aggregated จาก snap)
-- premium_life/accident/tpd แยก, รวม total_premium = premium จริง
-- claim_life + claim_add + claim_dismem = ใช้สำหรับสูตร CR#5 split

INSERT INTO tx_stg_act_exp_refund (
  stg_act_exp_refund_id, rig_process_hd_id, period, policy_no, reinsur_no, policy_year,
  commencement_date, effective_date, end_date, paid_status,
  percent_exp_refund, percent_expense,
  premium_life, premium_accident, premium_tpd, total_premium,
  claim, exp_refund_previous_year, exp_refund,
  period_begin_date, period_end_date,
  created_date, created_by, updated_date, updated_by,
  claim_life, claim_add, claim_dismem
) VALUES (
  nextval('seq_tx_stg_act_exp_refund'),
  14053, 202606, 'GH4634', '1807012', 8,
  '2018-07-01', '2025-07-01', '2026-06-30', 'Not Paid',
  85, 20.00,
  10000000.0000, 3500000.0000, 500000.0000, 14000000.0000,
  8000000.0000, -2000000.0000, NULL,
  '2025-07-01', '2026-06-30',
  NOW(), 'QA_TC_CR1_025', NOW(), 'QA_TC_CR1_025',
  5000000.0000, 2500000.0000, 500000.0000
);


-- ============================================================================
-- COMPUTE & UPDATE exp_refund (apply CR#5 formula)
-- ============================================================================
-- exp_refund = percent_exp_refund × (premium × (1 - percent_expense) - claim + exp_refund_previous_year)
--            = 85% × (14,000,000 × (1 - 20%) - 8,000,000 + (-2,000,000))
--            = 85% × (11,200,000 - 8,000,000 - 2,000,000)
--            = 85% × 1,200,000
--            = 1,020,000.00

UPDATE tx_stg_act_exp_refund
SET exp_refund = ROUND(
  (percent_exp_refund::numeric / 100) *
  (total_premium * (1 - percent_expense::numeric / 100) - claim + exp_refund_previous_year),
  2)
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;


-- ============================================================================
-- VERIFICATION QUERIES (อ่านค่าหลัง INSERT)
-- ============================================================================
\echo '--- 1. Landing rows (6) ---'
SELECT rd_type, rd_name, premium, claim_life, claim_add, claim_dismem, adj_claim
FROM tx_rig_landing_exprefund
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
ORDER BY rd_type;

\echo '--- 2. Snap rows (6, mirror of landing) ---'
SELECT rd_type, rd_name, premium, claim_life, claim_add, claim_dismem, adj_claim
FROM tx_act_snap_exprefund
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
ORDER BY rd_type;

\echo '--- 3. Staging row + computed exp_refund ---'
SELECT policy_no, policy_year, period, total_premium, claim,
       exp_refund_previous_year AS loss_carried_fwd,
       claim_life, claim_add, claim_dismem,
       percent_exp_refund, percent_expense,
       exp_refund AS computed_exp_refund,
       -- CR#5 split formula
       (claim_life - exp_refund_previous_year) AS ct_life,
       (claim_add + claim_dismem) AS ct_add_and_d
FROM tx_stg_act_exp_refund
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;

-- ============================================================================
-- หาก dry-run แล้ว PASS → เปลี่ยน ROLLBACK เป็น COMMIT
-- ============================================================================
ROLLBACK;
-- COMMIT;

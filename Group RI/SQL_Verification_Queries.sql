-- =============================================================================
-- SQL Verification Queries for Group RI System
-- =============================================================================
-- Purpose : ใช้ตรวจสอบความถูกต้องของข้อมูลระหว่าง Landing -> Snapshot -> Staging -> Process -> EDW
-- Database: ปรับให้ตรงกับ DB ที่ใช้จริง (Oracle/SQL Server/MySQL/PostgreSQL)
-- Naming  : ตั้งสมมติฐาน table prefix:
--           ms_landing_xxx       = Landing layer (RIG_AUTO_01-13)
--           ms_snapshot_est_xxx  = Estimate Snapshot (EST_SNAPSHOT_01-12)
--           ms_snapshot_act_xxx  = Actual Snapshot (ACT_SNAPSHOT_01-13)
--           ms_staging_est_xxx   = Estimate Staging (EST_STAGING_01-08)
--           ms_staging_act_xxx   = Actual Staging (ACT_STAGING_01-11)
--           ms_process_log       = Process audit log
--           ms_config            = Master Configuration
-- =============================================================================


-- =============================================================================
-- SECTION 1: LANDING VERIFICATION (RIG-PS-01)
-- =============================================================================

-- 1.1 Row count comparison: Landing vs Source
-- Use this to verify dump completeness for each of the 13 RIG_AUTO_xx processes
SELECT
    'Policy' AS table_name,
    (SELECT COUNT(*) FROM vw_grp_policy)         AS source_count,
    (SELECT COUNT(*) FROM ms_landing_policy)     AS landing_count,
    (SELECT COUNT(*) FROM vw_grp_policy) - (SELECT COUNT(*) FROM ms_landing_policy) AS diff
UNION ALL SELECT 'Customer',
    (SELECT COUNT(*) FROM vw_grp_customer),
    (SELECT COUNT(*) FROM ms_landing_customer),
    (SELECT COUNT(*) FROM vw_grp_customer) - (SELECT COUNT(*) FROM ms_landing_customer)
UNION ALL SELECT 'Company',
    (SELECT COUNT(*) FROM vw_grp_company),
    (SELECT COUNT(*) FROM ms_landing_company),
    (SELECT COUNT(*) FROM vw_grp_company) - (SELECT COUNT(*) FROM ms_landing_company)
UNION ALL SELECT 'Claim_Death',
    (SELECT COUNT(*) FROM vw_grp_claim_death),
    (SELECT COUNT(*) FROM ms_landing_claim_death),
    (SELECT COUNT(*) FROM vw_grp_claim_death) - (SELECT COUNT(*) FROM ms_landing_claim_death)
-- ... add other 9 tables similarly
;

-- 1.2 Duplicate PK detection (should be empty)
SELECT PolicyNo, COUNT(*)
FROM ms_landing_policy
GROUP BY PolicyNo
HAVING COUNT(*) > 1;

SELECT ClaimNo, COUNT(*)
FROM ms_landing_claim_death
GROUP BY ClaimNo
HAVING COUNT(*) > 1;

-- 1.3 Mandatory NOT NULL field check
SELECT 'Policy missing PolicyNo' AS issue, COUNT(*) AS cnt
FROM ms_landing_policy WHERE PolicyNo IS NULL
UNION ALL
SELECT 'Policy missing EffectiveDate', COUNT(*) FROM ms_landing_policy WHERE EffectiveDate IS NULL
UNION ALL
SELECT 'Claim missing ClaimAmount', COUNT(*) FROM ms_landing_claim_death WHERE ClaimAmount IS NULL OR ClaimAmount <= 0;

-- 1.4 Thai character / encoding integrity sample
SELECT PolicyNo, PolicyName, LENGTH(PolicyName) AS name_len, OCTET_LENGTH(PolicyName) AS byte_len
FROM ms_landing_policy
WHERE PolicyName LIKE '%บริษัท%'
LIMIT 10;

-- 1.5 TaxID 13-digit preservation (leading zero check)
SELECT CustomerID, TaxID, LENGTH(TaxID) AS len
FROM ms_landing_customer
WHERE LENGTH(TaxID) <> 13 OR TaxID NOT LIKE '0%'
LIMIT 20;

-- 1.6 Date format & range sanity
SELECT MIN(EffectiveDate) AS min_eff, MAX(EffectiveDate) AS max_eff,
       MIN(ExpiryDate) AS min_exp,    MAX(ExpiryDate)    AS max_exp
FROM ms_landing_policy;

-- 1.7 Process log status check (last 7 days)
SELECT process_code, process_name, MAX(start_time) AS last_run, status, total_records
FROM ms_process_log
WHERE process_code LIKE 'RIG-PS-01-%'
  AND start_time >= CURRENT_DATE - INTERVAL '7' DAY
GROUP BY process_code, process_name, status, total_records
ORDER BY process_code;


-- =============================================================================
-- SECTION 2: ESTIMATE SNAPSHOT VERIFICATION (RIG-PS-02)
-- =============================================================================

-- 2.1 Snapshot vs Landing count with 1-year-lookback filter
-- Period = 2026-04 (period end = 2026-04-30)
SELECT
    (SELECT COUNT(*) FROM ms_landing_policy
        WHERE EffectiveDate >= DATE '2025-04-30' AND EffectiveDate <= DATE '2026-04-30') AS expected_count,
    (SELECT COUNT(*) FROM ms_snapshot_est_policy
        WHERE snapshot_period = '2026-04') AS actual_count;

-- 2.2 Date filter integrity: every snapshot row within 12-month window
SELECT COUNT(*) AS violations
FROM ms_snapshot_est_policy
WHERE snapshot_period = '2026-04'
  AND (EffectiveDate < DATE '2025-04-30' OR EffectiveDate > DATE '2026-04-30');

-- 2.3 Lapse status exclusion: snapshot should NOT contain Lapse/Cancelled
SELECT COUNT(*) AS lapse_in_snapshot
FROM ms_snapshot_est_policy
WHERE snapshot_period = '2026-04'
  AND Status IN ('Lapse', 'Cancelled');

-- 2.4 Multi-treaty conflict detection
-- Find PolicyNo appearing in more than one treaty
SELECT PolicyNo, COUNT(DISTINCT TreatyCode) AS treaty_cnt, GROUP_CONCAT(DISTINCT TreatyCode) AS treaties
FROM ms_snapshot_est_policy
WHERE snapshot_period = '2026-04'
GROUP BY PolicyNo
HAVING COUNT(DISTINCT TreatyCode) > 1;

-- 2.5 Claim period filter: claims within period
SELECT MIN(ApprovedDate) AS min_d, MAX(ApprovedDate) AS max_d, COUNT(*) AS cnt
FROM ms_snapshot_est_claim_death
WHERE snapshot_period = '2026-04';
-- Expect: min >= 2026-04-01, max <= 2026-04-30

-- 2.6 Snapshot timestamp consistency
SELECT snapshot_period, MIN(snapshot_date) AS min_snap, MAX(snapshot_date) AS max_snap, COUNT(DISTINCT snapshot_date) AS distinct_dates
FROM ms_snapshot_est_policy
GROUP BY snapshot_period;
-- Expect: distinct_dates = 1 per period

-- 2.7 Cross-table referential integrity (Cert -> Policy)
SELECT COUNT(*) AS orphan_certs
FROM ms_snapshot_est_cert_inforce ci
LEFT JOIN ms_snapshot_est_policy p
  ON ci.PolicyNo = p.PolicyNo AND ci.snapshot_period = p.snapshot_period
WHERE ci.snapshot_period = '2026-04'
  AND p.PolicyNo IS NULL;


-- =============================================================================
-- SECTION 3: ACTUAL SNAPSHOT VERIFICATION (RIG-PS-03)
-- =============================================================================

-- 3.1 Quarterly date filter: 2026Q1 = 2026-01-01 to 2026-03-31
SELECT COUNT(*) AS out_of_quarter
FROM ms_snapshot_act_claim_death
WHERE snapshot_quarter = '2026Q1'
  AND (ApprovedDate < DATE '2026-01-01' OR ApprovedDate > DATE '2026-03-31');

-- 3.2 Member over age check (Gibraltar Accident max 70)
SELECT COUNT(*) AS over_age_members
FROM ms_snapshot_act_cert_inforce ci
WHERE ci.snapshot_quarter = '2026Q1'
  AND ci.TreatyCode = 'Gibraltar'
  AND DATEDIFF(YEAR, ci.DOB, DATE '2026-03-31') > 70;

-- 3.3 Investigation Expense Q linkage to claim
SELECT ie.ExpenseID, ie.ClaimNo
FROM ms_snapshot_act_investigation_expense ie
LEFT JOIN ms_snapshot_act_claim_death cd ON ie.ClaimNo = cd.ClaimNo
LEFT JOIN ms_snapshot_act_claim_tpd ct ON ie.ClaimNo = ct.ClaimNo
LEFT JOIN ms_snapshot_act_claim_health ch ON ie.ClaimNo = ch.ClaimNo
WHERE ie.snapshot_quarter = '2026Q1'
  AND cd.ClaimNo IS NULL AND ct.ClaimNo IS NULL AND ch.ClaimNo IS NULL;
-- Expect 0 rows (every expense links to a claim)


-- =============================================================================
-- SECTION 4: STAGING VERIFICATION (RIG-PS-04 / RIG-PS-05)
-- =============================================================================

-- 4.1 Treaty filter integrity: each staging table contains only its treaty
SELECT DISTINCT TreatyCode FROM ms_staging_est_policy_daiichi;
-- Expect: only 'Dai-ichi'

SELECT DISTINCT TreatyCode FROM ms_staging_est_policy_gibraltar;
-- Expect: only 'Gibraltar'

SELECT DISTINCT TreatyCode FROM ms_staging_est_policy_thaire;
-- Expect: only 'Thaire'

-- 4.2 Layer split verification (Gibraltar)
-- For each member, sum of Layer SA must equal member's total SA (or capped at AAL)
SELECT
    MemberID,
    SUM(Layer1_SA + Layer2_SA + Layer3_SA) AS layer_total,
    MAX(Member_SA) AS member_sa,
    SUM(Layer1_SA + Layer2_SA + Layer3_SA) - MAX(Member_SA) AS diff
FROM ms_staging_est_layer_gibraltar
WHERE staging_period = '2026-04'
GROUP BY MemberID
HAVING SUM(Layer1_SA + Layer2_SA + Layer3_SA) <> MAX(Member_SA)
LIMIT 20;

-- 4.3 Layer boundary check: Layer 1 SA <= 5M, Layer 2 <= 15M, Layer 3 = remainder
SELECT MemberID, Member_SA, Layer1_SA, Layer2_SA, Layer3_SA
FROM ms_staging_est_layer_gibraltar
WHERE staging_period = '2026-04'
  AND (Layer1_SA > 5000000
       OR Layer2_SA > 15000000
       OR (Member_SA > 20000000 AND Layer3_SA <> Member_SA - 20000000)
       OR (Member_SA <= 5000000 AND (Layer2_SA <> 0 OR Layer3_SA <> 0))
       OR (Member_SA > 5000000 AND Member_SA <= 20000000 AND Layer3_SA <> 0))
LIMIT 20;

-- 4.4 Thaire Retention/QS/Surplus verification
-- Member SA - Retention (400K) - QS Cession (50% of 400K-2M) - Surplus (100% of 2M-10M) = retained or excess
SELECT MemberID, Member_SA, RetentionAmt, QS_CessionAmt, SurplusAmt, ExcessAAL_Amt,
       Member_SA - RetentionAmt - QS_CessionAmt - SurplusAmt - ExcessAAL_Amt AS unaccounted
FROM ms_staging_est_layer_thaire
WHERE staging_period = '2026-04'
  AND Member_SA - RetentionAmt - QS_CessionAmt - SurplusAmt - ExcessAAL_Amt > 0.01
LIMIT 20;

-- 4.5 Premium annualization spot-check
-- For Monthly mode: AnnualPremium should be PremiumPerPayment * 12
SELECT PolicyNo, PaymentMode, PremiumPerPayment, AnnualPremium,
       CASE PaymentMode
            WHEN 'Monthly'     THEN PremiumPerPayment * 12
            WHEN 'Quarterly'   THEN PremiumPerPayment * 4
            WHEN 'SemiAnnual'  THEN PremiumPerPayment * 2
            WHEN 'Annual'      THEN PremiumPerPayment
       END AS expected_annual,
       ABS(AnnualPremium - CASE PaymentMode
            WHEN 'Monthly'     THEN PremiumPerPayment * 12
            WHEN 'Quarterly'   THEN PremiumPerPayment * 4
            WHEN 'SemiAnnual'  THEN PremiumPerPayment * 2
            WHEN 'Annual'      THEN PremiumPerPayment
       END) AS diff
FROM ms_staging_est_premium
WHERE staging_period = '2026-04'
  AND ABS(AnnualPremium - CASE PaymentMode
            WHEN 'Monthly'     THEN PremiumPerPayment * 12
            WHEN 'Quarterly'   THEN PremiumPerPayment * 4
            WHEN 'SemiAnnual'  THEN PremiumPerPayment * 2
            WHEN 'Annual'      THEN PremiumPerPayment
       END) > 0.01
LIMIT 20;

-- 4.6 Dedup check: same policy reported in same policy year
SELECT PolicyNo, PolicyYear, COUNT(*) AS report_cnt
FROM ms_staging_est_report
WHERE staging_period BETWEEN '2026-01' AND '2026-12'
GROUP BY PolicyNo, PolicyYear
HAVING COUNT(*) > 1;


-- =============================================================================
-- SECTION 5: PROCESS / CALCULATION VERIFICATION (BRD PS-01 to PS-06)
-- =============================================================================

-- 5.1 Dai-ichi SOA percentage validation
-- Amounts column should equal 50% of base amount
SELECT period, ROUND(SUM(BaseAmount) * 0.50, 2) AS expected_amounts,
       ROUND(SUM(AmountsCalculated), 2) AS actual_amounts,
       ROUND(SUM(AmountsCalculated) - SUM(BaseAmount) * 0.50, 2) AS diff
FROM ms_process_est_daiichi_soa
WHERE period = '2026-04'
GROUP BY period;
-- Expect diff = 0 (within rounding tolerance)

-- 5.2 Gibraltar Layer 1 RI Premium Life = 15% * (PremiumLife + ExtraPremiumLife)
SELECT MemberID, Member_SA, PremiumLife, ExtraPremiumLife, RIPremiumLife_L1,
       ROUND(0.15 * (PremiumLife + ExtraPremiumLife), 2) AS expected
FROM ms_process_est_gibraltar
WHERE period = '2026-04' AND Member_SA <= 5000000
  AND ABS(RIPremiumLife_L1 - ROUND(0.15 * (PremiumLife + ExtraPremiumLife), 2)) > 0.01
LIMIT 20;

-- 5.3 Gibraltar Accident excluded for age > 70
SELECT MemberID, DOB, RIPremiumAccident
FROM ms_process_est_gibraltar
WHERE period = '2026-04'
  AND DATEDIFF(YEAR, DOB, DATE '2026-04-30') > 70
  AND RIPremiumAccident <> 0
LIMIT 20;
-- Expect 0 rows (all over-age members have RI Premium Accident = 0)

-- 5.4 Gibraltar RI Commission = 50% * RI Premium
SELECT MemberID, RIPremiumLife, RICommissionLife,
       ROUND(0.50 * RIPremiumLife, 2) AS expected
FROM ms_process_est_gibraltar
WHERE period = '2026-04'
  AND ABS(RICommissionLife - ROUND(0.50 * RIPremiumLife, 2)) > 0.01
LIMIT 20;

-- 5.5 Thaire SA Reassured calculation
-- Member SA <= 400K: SA Reassured = 0
-- 400K < SA <= 2M: SA Reassured = (SA - 400K) * 50%
-- 2M < SA <= 10M: SA Reassured = 800K (max QS) + (SA - 2M) * 100%
-- SA > 10M: SA Reassured = 800K + 8M = 8.8M
SELECT MemberID, Member_SA, SA_Reassured,
       CASE
            WHEN Member_SA <= 400000 THEN 0
            WHEN Member_SA <= 2000000 THEN (Member_SA - 400000) * 0.5
            WHEN Member_SA <= 10000000 THEN 800000 + (Member_SA - 2000000) * 1.0
            ELSE 8800000
       END AS expected_sa_reassured
FROM ms_process_est_thaire
WHERE period = '2026-04'
  AND ABS(SA_Reassured - CASE
            WHEN Member_SA <= 400000 THEN 0
            WHEN Member_SA <= 2000000 THEN (Member_SA - 400000) * 0.5
            WHEN Member_SA <= 10000000 THEN 800000 + (Member_SA - 2000000) * 1.0
            ELSE 8800000
       END) > 0.01
LIMIT 20;

-- 5.6 Thaire RI Commission = 25% * RI Premium
SELECT MemberID, RIPremium, RICommission,
       ROUND(0.25 * RIPremium, 2) AS expected
FROM ms_process_est_thaire
WHERE period = '2026-04'
  AND ABS(RICommission - ROUND(0.25 * RIPremium, 2)) > 0.01
LIMIT 20;

-- 5.7 Cross-check: BDR total = SOA total per period per treaty
SELECT period, treaty,
       (SELECT SUM(RIPremium) FROM ms_process_bdr WHERE period = '2026-04' AND treaty = 'Gibraltar') AS bdr_total,
       (SELECT SUM(RIPremium) FROM ms_process_soa WHERE period = '2026-04' AND treaty = 'Gibraltar') AS soa_total
FROM (SELECT '2026-04' AS period, 'Gibraltar' AS treaty) x;

-- 5.8 Rounding consistency: all amounts should be 2-decimal
SELECT COUNT(*) AS unrounded_count
FROM ms_process_est_gibraltar
WHERE period = '2026-04'
  AND (RIPremiumLife <> ROUND(RIPremiumLife, 2)
       OR RIPremiumAccident <> ROUND(RIPremiumAccident, 2)
       OR RICommissionLife <> ROUND(RICommissionLife, 2));


-- =============================================================================
-- SECTION 6: ACTUAL PROCESS / PROFIT COMMISSION (BRD PS-05 / PS-06 Q4)
-- =============================================================================

-- 6.1 Quarterly aggregation: Q1 Actual sum across months
SELECT TreatyCode, SUM(RIPremium) AS q1_premium, SUM(RIClaim) AS q1_claim
FROM ms_process_act_bdr
WHERE quarter = '2026Q1'
GROUP BY TreatyCode;

-- 6.2 Q4 Profit Commission triggered only in Q4
SELECT quarter, COUNT(*) AS pc_count
FROM ms_process_profit_commission
GROUP BY quarter;
-- Expect: rows only for Q4 (e.g., 2025Q4, 2026Q4)

-- 6.3 Profit Commission formula (Gibraltar example)
-- PC = (Earned Premium - Claim - Reinsurer Expense) * ER%
-- Earned Premium = Premium * (1 - Reserve%); Reserve = 50%
SELECT PolicyNo,
       Premium, Claim, ReinsurerExpense, ER_Rate, ProfitCommission,
       (Premium * 0.5 - Claim - ReinsurerExpense) * ER_Rate AS expected_pc
FROM ms_process_profit_commission
WHERE quarter = '2026Q4' AND TreatyCode = 'Gibraltar'
  AND ABS(ProfitCommission - GREATEST(0, (Premium * 0.5 - Claim - ReinsurerExpense) * ER_Rate)) > 0.01
LIMIT 20;

-- 6.4 PC non-negative
SELECT COUNT(*) AS negative_pc
FROM ms_process_profit_commission
WHERE quarter = '2026Q4' AND ProfitCommission < 0;
-- Expect: 0


-- =============================================================================
-- SECTION 7: EDW VERIFICATION (BRD PS-07)
-- =============================================================================

-- 7.1 Data sent to EDW = data in GRP final state
SELECT (SELECT SUM(RIPremium) FROM ms_process_est_daiichi_final WHERE period = '2026-04') AS grp_total,
       (SELECT SUM(RIPremium) FROM edw_ri_data WHERE period = '2026-04' AND treaty = 'Dai-ichi') AS edw_total;

-- 7.2 EDW timestamp / send log
SELECT period, treaty, MAX(sent_at) AS last_sent_at, sent_by
FROM ms_edw_send_log
WHERE period >= '2026-01'
GROUP BY period, treaty, sent_by
ORDER BY period DESC, treaty;


-- =============================================================================
-- SECTION 8: MASTER CONFIGURATION VERIFICATION (BRD PS-08)
-- =============================================================================

-- 8.1 Active configuration per treaty
SELECT treaty, config_key, config_value, effective_from, effective_to, maker, checker, approved_at
FROM ms_config
WHERE effective_to IS NULL OR effective_to > CURRENT_DATE
ORDER BY treaty, config_key;

-- 8.2 Pending config (not yet approved)
SELECT treaty, config_key, old_value, new_value, maker, submitted_at
FROM ms_config_pending
WHERE status = 'PENDING';
-- If not empty: Estimate/Actual process should be blocked

-- 8.3 Config version history
SELECT config_key, config_value, effective_from, maker, checker, approved_at
FROM ms_config_history
WHERE treaty = 'Gibraltar' AND config_key = 'Layer1_Cede_Life_Pct'
ORDER BY effective_from DESC;


-- =============================================================================
-- SECTION 9: AUDIT LOG QUERIES
-- =============================================================================

-- 9.1 All processes run today
SELECT process_code, process_name, status, total_records, start_time, end_time
FROM ms_process_log
WHERE DATE(start_time) = CURRENT_DATE
ORDER BY start_time DESC;

-- 9.2 Failed processes in last 7 days
SELECT process_code, status, error_message, start_time
FROM ms_process_log
WHERE status = 'FAILED'
  AND start_time >= CURRENT_DATE - INTERVAL '7' DAY
ORDER BY start_time DESC;

-- 9.3 Process duration analysis
SELECT process_code,
       AVG(EXTRACT(EPOCH FROM (end_time - start_time))) AS avg_seconds,
       MAX(EXTRACT(EPOCH FROM (end_time - start_time))) AS max_seconds,
       COUNT(*) AS runs
FROM ms_process_log
WHERE status = 'SUCCESS'
  AND start_time >= CURRENT_DATE - INTERVAL '30' DAY
GROUP BY process_code
ORDER BY max_seconds DESC;


-- =============================================================================
-- SECTION 10: RECONCILIATION QUERIES (Cross-System)
-- =============================================================================

-- 10.1 GRP estimate vs accounting GL posting
SELECT period, treaty,
       (SELECT SUM(amount) FROM ms_process_est_final WHERE period = e.period AND treaty = e.treaty) AS grp_amount,
       (SELECT SUM(amount) FROM accounting_gl_ri_posting WHERE period = e.period AND treaty = e.treaty) AS gl_amount
FROM (SELECT DISTINCT period, treaty FROM ms_process_est_final WHERE period = '2026-04') e;

-- 10.2 Sent to Reinsurer vs confirmed
SELECT treaty, period, sent_count, confirmed_count, pending_count
FROM (
    SELECT treaty, period,
           SUM(CASE WHEN status = 'SENT' THEN 1 ELSE 0 END) AS sent_count,
           SUM(CASE WHEN status = 'CONFIRMED' THEN 1 ELSE 0 END) AS confirmed_count,
           SUM(CASE WHEN status = 'PENDING' THEN 1 ELSE 0 END) AS pending_count
    FROM ms_reinsurer_send_log
    WHERE period = '2026-04'
    GROUP BY treaty, period
) x;


-- =============================================================================
-- USAGE NOTES
-- =============================================================================
-- 1) ปรับชื่อ table/column ให้ตรงกับ database schema จริง
-- 2) ปรับ syntax สำหรับ DBMS:
--    - Date interval syntax (Oracle: ADD_MONTHS; SQL Server: DATEADD; MySQL: DATE_SUB)
--    - GROUP_CONCAT (MySQL) vs STRING_AGG (PostgreSQL/SQL Server) vs LISTAGG (Oracle)
--    - DATEDIFF (SQL Server/MySQL) vs EXTRACT (PostgreSQL) vs MONTHS_BETWEEN (Oracle)
-- 3) Tolerance 0.01 ใช้สำหรับ floating-point comparison ปรับตาม decimal precision
-- 4) ใช้ EXPLAIN PLAN ตรวจ query performance ก่อนรันบน prod
-- 5) ถ้ามี volume สูง ให้ add LIMIT/TOP เพื่อ sample ดูก่อน

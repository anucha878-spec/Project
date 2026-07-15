-- ============================================================================
-- FIX: GH4634 TC-CR1-025 — populate exp_refund ที่ snap/landing layer
-- เพื่อให้ BDR engine มีค่าอ่าน → populate tot_*_ex_refund_paid_{life,add}
--
-- หลัก: BDR อ่านจาก tx_act_snap_exprefund.exp_refund ตรงๆ (ไม่ใช่จาก staging)
-- สำหรับ CR#5 split → ต้องใส่ exp_refund + claim_life/claim_add/claim_dismem ที่ snap layer
-- ============================================================================

BEGIN;

-- ========================================
-- Step 1: คำนวณ exp_refund ที่ถูกต้อง (CR#5 formula)
-- ========================================
-- exp_refund = 85% × (14,000,000 × (1 - 20%) - 8,000,000 + (-2,000,000))
--            = 85% × (11,200,000 - 8,000,000 - 2,000,000)
--            = 85% × 1,200,000
--            = 1,020,000.00

-- UPDATE staging row ให้ตรงสูตร (ถ้า stg.exp_refund ผิดอยู่)
UPDATE tx_stg_act_exp_refund
SET exp_refund = ROUND(
      (percent_exp_refund::numeric / 100) *
      (total_premium * (1 - percent_expense::numeric / 100) - claim + exp_refund_previous_year),
      2),
    updated_date = NOW(),
    updated_by = 'QA_FIX_CR1_025'
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;

-- ========================================
-- Step 2: UPDATE snap.exp_refund ให้ตรงกับ stg
-- ========================================
-- ค่า exp_refund ทุก row ของ doc_no เดียวกัน = ค่าเดียวกัน (policy-level)
-- ใส่ exp_refund = 1,020,000.00 ในทุก 6 rows ของ EXP.TEST/CR1-025

-- หมายเหตุ:
--   exp_refund (policy-level) = ค่าเดียว broadcast ให้ทุก row ของ doc เดียวกัน = 1,020,000
--   exp_refund_dt (per-coverage gross) = premium × percent_exp_refund × (1 - percent_expense)
--                                       = premium × 85% × 80% = premium × 0.68
UPDATE tx_act_snap_exprefund
SET exp_refund = 1020000.0000,
    exp_refund_g = 1020000.0000,
    exp_refund_g_sum = 1020000.0000,
    exp_refund_dt = ROUND(premium * 0.85 * (1 - 0.20), 2),
    flg_cal = true
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
  AND doc_no='EXP.TEST/CR1-025';

-- ========================================
-- Step 3: UPDATE landing เช่นกัน (เผื่อ Reconcile)
-- ========================================
UPDATE tx_rig_landing_exprefund
SET exp_refund = 1020000.0000,
    exp_refund_g = 1020000.0000,
    exp_refund_g_sum = 1020000.0000,
    exp_refund_dt = ROUND(premium * 0.85 * (1 - 0.20), 2),
    flg_cal = true
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
  AND doc_no='EXP.TEST/CR1-025';

-- ========================================
-- VERIFY
-- ========================================
\echo '--- Verify after fix ---'
SELECT 'staging' AS layer, exp_refund::text AS exp_refund, NULL AS rd_type, NULL AS exp_refund_dt
FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
UNION ALL
SELECT 'snap', exp_refund::text, rd_type, exp_refund_dt::text
FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
ORDER BY layer, rd_type;

-- ============================================================================
-- ROLLBACK สำหรับ dry-run / COMMIT เมื่อพร้อม
-- ============================================================================
ROLLBACK;
-- COMMIT;

-- ============================================================================
-- หลังจาก COMMIT แล้ว ต้อง:
-- 1. Re-run ACT_MAIN_PROCESS (ที่ทำการ generate BDR new_renew) สำหรับ period=202606
--    หรือ period ที่ map ของ GH4634 py=8
-- 2. หรือถ้า BDR ใช้ trigger ก็ต้อง UPDATE ที่ snap จะ trigger ให้ BDR recompute เอง
-- 3. หลังจาก re-run ตรวจ tot_ori_ex_refund_paid_life ของ GH4634 ใน BDR
--    คาดว่า = 1,020,000 × (Life ratio) (Life-only + AD&D split ตาม claim_life/add/dismem)
-- ============================================================================

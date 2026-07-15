-- ============================================================================
-- FIX #2: เปลี่ยน period จาก 202606 → 202605 ให้ตรงกับ active act_hd=618
--
-- Root cause: BDR engine JOIN snap_exprefund ผ่าน (policy_no, period)
-- Active act_hd=618 period=202605 → ต้องการ snap.period=202605
-- Test data ของเราอยู่ period=202606 → ถูก ignore
--
-- หลัง fix นี้ ต้อง re-run BDR generation เพื่อให้ regenerate row GH4634 py=8
-- ============================================================================

BEGIN;

-- Step 1: เปลี่ยน period ของ snap (ของเรามี 6 rows, ของจริงมี 210 rows ที่ py=6/7)
UPDATE tx_act_snap_exprefund
SET period = 202605
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
  AND doc_no='EXP.TEST/CR1-025';

-- Step 2: เปลี่ยน period ของ landing
UPDATE tx_rig_landing_exprefund
SET period = 202605
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
  AND doc_no='EXP.TEST/CR1-025';

-- Step 3: เปลี่ยน period ของ staging
UPDATE tx_stg_act_exp_refund
SET period = 202605
WHERE policy_no='GH4634' AND policy_year=8 AND period=202606;

-- Step 4: ผูก rig_process_hd_id ของ test snap → process_hd ที่ active (14086 = ACT_MAIN ของ act_hd=618)
--   ทำเพื่อกรณีที่ BDR engine ใช้ rig_process_hd_id เป็น secondary key
--   (เปลี่ยนจาก 14053 → 14086 หรือ 14088)
UPDATE tx_act_snap_exprefund
SET rig_process_hd_id = 14086
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND doc_no='EXP.TEST/CR1-025'
  AND rig_process_hd_id = 14053;

UPDATE tx_rig_landing_exprefund
SET rig_process_hd_id = 14086
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND doc_no='EXP.TEST/CR1-025'
  AND rig_process_hd_id = 14053;

UPDATE tx_stg_act_exp_refund
SET rig_process_hd_id = 14086
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND rig_process_hd_id = 14053;

-- Verify
\echo '--- After fix ---'
SELECT 'snap'    AS layer, COUNT(*) AS rows, MIN(rig_process_hd_id) AS hd, MIN(period) AS period, MAX(exp_refund) AS exp_refund
FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8
UNION ALL
SELECT 'landing', COUNT(*), MIN(rig_process_hd_id), MIN(period), MAX(exp_refund)
FROM tx_rig_landing_exprefund WHERE policy_no='GH4634' AND policy_year=8
UNION ALL
SELECT 'staging', COUNT(*), MIN(rig_process_hd_id), MIN(period), MAX(exp_refund)
FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' AND policy_year=8;

-- ROLLBACK สำหรับ dry-run / COMMIT เมื่อพร้อม
ROLLBACK;
-- COMMIT;

-- ============================================================================
-- หลังจาก COMMIT ต้อง re-run BDR generation:
-- 1. ผ่าน UI: trigger "Re-run Actual Process" → ACT_BORDEREAU จะ regenerate
--    BDR row GH4634 py=8 ที่ act_hd ใหม่ → จะดึง snap.exp_refund=1,020,000 มาใส่
-- 2. หรือผ่าน SQL: trigger function ที่ Dev จัดทำสำหรับ Re-process
-- ============================================================================

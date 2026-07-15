-- ============================================================================
-- FIX #3: เปลี่ยน rig_process_hd_id ของ snap/landing → 14023 (ACT_SNAPSHOT_10 ACTIVE)
--
-- Root cause หลัก: BDR engine filter snap rows ผ่าน Active Snapshot run (ACT_SNAPSHOT_10)
-- - GL2921 (ทำงานได้): snap.rig_process_hd_id = 14023 = ACT_SNAPSHOT_10 (records=431, ACTIVE)
-- - GH4634 ของเรา:    snap.rig_process_hd_id = 14053 = ACT_MAIN_PROCESS ❌
--
-- หลัง fix นี้: ของเรา (py=8) จะ co-exist กับของจริง (py=6, py=7) ใน snap_hd=14023
--              ไม่ทับเพราะแยกที่ policy_year + doc_no='EXP.TEST/CR1-025'
-- ============================================================================

BEGIN;

-- Step 1: snap_exprefund
UPDATE tx_act_snap_exprefund
SET rig_process_hd_id = 14023
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND doc_no='EXP.TEST/CR1-025'
  AND rig_process_hd_id = 14086;  -- หรือ 14053 ถ้ายังไม่ผ่าน fix รอบก่อน

-- Step 2: landing_exprefund (Reconcile source)
UPDATE tx_rig_landing_exprefund
SET rig_process_hd_id = 14023
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND doc_no='EXP.TEST/CR1-025'
  AND rig_process_hd_id = 14086;

-- หมายเหตุ: staging อาจไม่ต้องเปลี่ยน เพราะ BDR ดู snap ไม่ใช่ stg
-- แต่เพื่อความ consistent:
UPDATE tx_stg_act_exp_refund
SET rig_process_hd_id = 14023
WHERE policy_no='GH4634' AND policy_year=8 AND period=202605
  AND rig_process_hd_id = 14086;

-- Verify
\echo '--- After fix #3 ---'
SELECT 'snap' AS layer, COUNT(*) AS rows, MIN(rig_process_hd_id) AS hd, MIN(period) AS period
FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8
UNION ALL
SELECT 'landing', COUNT(*), MIN(rig_process_hd_id), MIN(period)
FROM tx_rig_landing_exprefund WHERE policy_no='GH4634' AND policy_year=8
UNION ALL
SELECT 'staging', COUNT(*), MIN(rig_process_hd_id), MIN(period)
FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' AND policy_year=8;

\echo '--- Co-exist check: snap_hd=14023 จะมี py=6, 7 (ของจริง) + py=8 (ของเรา) ---'
SELECT policy_year, COUNT(*) AS rows
FROM tx_act_snap_exprefund
WHERE policy_no='GH4634' AND rig_process_hd_id=14023
GROUP BY policy_year
ORDER BY policy_year;

-- ROLLBACK สำหรับ dry-run / COMMIT เมื่อพร้อม
ROLLBACK;
-- COMMIT;

-- ============================================================================
-- หลัง COMMIT ต้อง Re-run ACT_BORDEREAU เพื่อ generate BDR ใหม่ (act_hd=621)
-- ที่จะดึง snap GH4634 py=8 hd=14023 มาคำนวณ exp_refund
-- ============================================================================

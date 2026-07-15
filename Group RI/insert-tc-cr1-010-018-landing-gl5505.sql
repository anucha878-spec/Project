-- ============================================================================
-- TC-CR1-010 .. 018 — "CR After Golive Lot1" — LANDING-ONLY data setup
-- Policy: GL5505 (Treaty GIB_Grp_Direct_EB) — Non-Unit Rate
-- Companion ของ run-insert-tc-cr1-010-018.js (ข้อมูลชุดเดียวกัน)
--
-- *** อัปเดตเฉพาะตารางกลุ่ม Landing (tx_rig_landing_*) เท่านั้น ***
-- ป้อนข้อมูลดิบที่ขาด แล้วให้ pipeline คำนวณ layer / avg rate / หักอายุ>70 / report เอง
--
-- มีอยู่แล้วใน Landing (ไม่แตะ):
--   tx_rig_landing_policy    : GL5505 py2 rate_flag=1 (Non-Unit), py1 rate_flag=0 (Unit -> TC-013)
--   tx_rig_landing_prem_rate : rate table Non-Unit (code 108, value_life=1.2 flat, value_acc=3.0)
--   tx_rig_landing_cert_inforce : cert จริง 1,325 แถว (cer_no 00001-00700)
--
-- INSERT เฉพาะ 2 ตาราง (additive, cer_no ใหม่ 00701-00708 ไม่ชนของจริง):
--   1) tx_rig_landing_cert_inforce : member ทดสอบ 00701-00708
--   2) tx_rig_landing_claimtpd      : เคลม TPD ของ 00708 (TC-018)
--
-- Layer ไม่มีใน Landing -> derive จาก SA ตาม GIB band (cf_rig_treaty_cond_dt id=2):
--   L1: 0-5,000,000 | L2: 5,000,000.01-20,000,000 | L3: >20,000,000.01
--
-- Cert -> Layer:
--   00701 Life 4M -> L1 | 00702 Life 12M -> L2 | 00703 Life 22M -> L3
--   00704-00707 Accident (5M -> L1) | 00707 age 72 = อายุ>70 | 00708 Life 5M + TPD claim -> L1
--
-- *** NULL-COLUMN BACKFILL (เติมคอลัมน์ที่เดิมเว้นว่าง ให้ตรงรูปแบบข้อมูลจริงในระบบ) ***
--   ดูค่าจริงของ GL5505 period 202605 มา mirror:
--   - วันที่/งวด : tax_year=2026, change_date=period_date=2026-04-01 (สอดคล้อง PY2/202605)
--   - ค่าคงที่   : med_rate=''(blank), count_of_day=0, status=0, lot_no=1
--   - sum_*_prem : สมาชิกกลุ่มเดียวกันใช้ "ยอดรวมของกลุ่ม" ร่วมกัน (ยืนยัน sum_total=sum_life+sum_acc+sum_tpd)
--                  -> เติมเป็นผลรวม cohort ทดสอบผ่าน SUM() OVER ()  (life 51,600 / acc 50,000 / total 101,600)
--   - coverage ที่ไม่ใช้ (cremat/e1/ipd/opd/major/dental/mather/hb/opd_lab) = 0 ตามข้อมูลจริง
--   - cust_code  : รหัสรายสมาชิก 10 หลัก '25680'||cer_no (2568000701..708) ไม่ชนของจริง (256803xxxx)
--   - คงไว้ NULL : end_date / approved_date / pol_end_date (ข้อมูลจริง fill 0% — สมาชิก active 'I')
--
-- !!! หมายเหตุ: ข้อมูลชุดนี้ COMMIT ลง groupri@10.14.8.58 แล้ว (created_by='QA_TC_CR1_010_018')
--     ไฟล์นี้ default = ROLLBACK (dry-run). การรัน COMMIT บน DB เดิมจะสร้างข้อมูล "ซ้ำ"
--     (cer_no 00701-00708 อีกชุด, PK ใหม่). ใช้ COMMIT เฉพาะกับ environment ที่ยังไม่มีข้อมูลนี้.
-- ============================================================================

BEGIN;

-- ----------------------------------------------------------------------------
-- 1) tx_rig_landing_cert_inforce — member ทดสอบ 00701-00708
--    PK rig_v_pol_inforce_id = MAX+row (ไม่มี sequence default)
-- ----------------------------------------------------------------------------
WITH base AS (SELECT COALESCE(MAX(rig_v_pol_inforce_id),0) AS m FROM tx_rig_landing_cert_inforce)
INSERT INTO tx_rig_landing_cert_inforce (
  rig_v_pol_inforce_id, rig_process_hd_id, period, doc_no, policy_no, effect_date,
  cer_no, comp_code, company_code, company_head_code, re_insure_no,
  age, sex, life_insur, acc_insur, med_insur, tpd_insur,
  life_prem, acc_prem, med_acc_prem, tpd_prem, total_prem,
  status_member, doc_date, policy_name, company_name, promise_date,
  policy_year, pay_type, created_date, created_by,
  -- ↓↓↓ NULL-column backfill (mirror รูปแบบข้อมูลจริง) ↓↓↓
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
  -- backfill values --
  '25680' || v.cer, DATE '2026-04-01', TIMESTAMP '2026-04-01 00:00:00', 2026,
  '', 0, 0, 1,
  0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0.00,
  SUM(v.life_prem) OVER (), SUM(v.acc_prem) OVER (), 0, SUM(v.life_prem + v.acc_prem) OVER (),
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0.00
FROM base, (VALUES
  -- rn,  cer,    age, sex, life,     acc,     tpd,     life_prem, acc_prem      TC / Layer
  (1, '00701', 35, 1, 4000000,  0,       0,       4800,  0),     -- Life L1 (4M)   TC-010/011
  (2, '00702', 45, 1, 12000000, 0,       0,       14400, 0),     -- Life L2 (12M)  TC-011
  (3, '00703', 55, 2, 22000000, 0,       0,       26400, 0),     -- Life L3 (22M)  TC-011
  (4, '00704', 40, 1, 0,        5000000, 0,       0,     15000), -- Acc  L1        TC-012
  (5, '00705', 50, 2, 0,        5000000, 0,       0,     15000), -- Acc  L1        TC-012
  (6, '00706', 60, 1, 0,        5000000, 0,       0,     15000), -- Acc  L1        TC-012
  (7, '00707', 72, 1, 0,        5000000, 0,       0,     5000),  -- Acc  L1 อายุ>70 TC-012
  (8, '00708', 58, 1, 5000000,  0,       5000000, 6000,  0)      -- Life L1 + claim TC-018
) AS v(rn, cer, age, sex, life, acc, tpd, life_prem, acc_prem);

-- ----------------------------------------------------------------------------
-- 2) tx_rig_landing_claimtpd — เคลม TPD ของ cer 00708 (TC-018)
--    Original SI Life ถูกดึง downstream จาก cert 00708 (life_insur=5,000,000)
-- ----------------------------------------------------------------------------
INSERT INTO tx_rig_landing_claimtpd (
  rig_v_clm_tpd_id, rig_process_hd_id, period, inform_no, consider_date,
  policy_no, policy_year, certific_cust_no, cust_code, attn_age, status,
  effect_date, accident_date, accident_cause, policy_age,
  acc_insur, tpd_insur, claim_status, indemnity_rate, indemnity_amt,
  approve_acc_insur, approve_tpd_insur, approve_claim, approve_date,
  amount, pay_date, created_date, created_by,
  -- ↓↓↓ NULL-column backfill (mirror รูปแบบข้อมูลจริง) ↓↓↓
  policy_code, prod_claim_code, loss_ratio, receive_no, receive_date)
SELECT
  (SELECT COALESCE(MAX(rig_v_clm_tpd_id),0)+1 FROM tx_rig_landing_claimtpd),
  14340, 202605, 'TPDTC1018', DATE '2025-08-20',
  'GL5505', 2, '00708', '2568000316', 58, 'A',
  DATE '2025-04-01', DATE '2025-08-15', 'อุบัติเหตุ-ทุพพลภาพถาวรสิ้นเชิง', '1',
  5000000, 5000000, 1, 100, 3000000,
  5000000, 3000000, 3000000, DATE '2025-08-25',
  3000000, DATE '2025-08-30', NOW(), 'QA_TC_CR1_010_018',
  -- backfill: policy_code=1, prod_claim_code 140400 (TPD-paying claim analog), loss_ratio 1.0,
  --           receive_no/date ≈ consider_date (รูปแบบจริง receive_date=consider_date); tpd_prod_code คงไว้ NULL
  1, '140400', 1.0000, '25680018', DATE '2025-08-20';

-- ----------------------------------------------------------------------------
-- VERIFICATION
-- ----------------------------------------------------------------------------
\echo '--- Cert -> Layer breakdown + backfilled cols (derive จาก SA) ---'
SELECT cer_no, age, sex,
       CASE WHEN life_insur > 0 THEN 'LIFE' ELSE 'ACC' END AS kind,
       CASE WHEN GREATEST(life_insur, acc_insur) <= 5000000  THEN 'L1'
            WHEN GREATEST(life_insur, acc_insur) <= 20000000 THEN 'L2'
            ELSE 'L3' END AS layer,
       life_insur, acc_insur, life_prem, acc_prem,
       cust_code, tax_year, lot_no, change_date::date AS change_date,
       sum_life_prem, sum_acc_prem, sum_total_prem
FROM tx_rig_landing_cert_inforce
WHERE created_by = 'QA_TC_CR1_010_018'
ORDER BY cer_no;

\echo '--- TC-010/011 avg life rate = SUM(life_prem)/SUM(life_insur)*1000 (คาดหวัง 1.20) ---'
SELECT SUM(life_prem) AS sum_prem, SUM(life_insur) AS sum_sa,
       ROUND(SUM(life_prem)/SUM(life_insur)*1000, 2) AS avg_rate
FROM tx_rig_landing_cert_inforce
WHERE created_by = 'QA_TC_CR1_010_018' AND life_insur > 0;

\echo '--- TC-012 Accident: total / over-70 / L1 after deduct (คาดหวัง 45,000) ---'
SELECT SUM(acc_prem) AS total_acc,
       SUM(CASE WHEN age > 70 THEN acc_prem ELSE 0 END) AS over_70,
       SUM(CASE WHEN age <= 70 THEN acc_prem ELSE 0 END) AS l1_after_deduct
FROM tx_rig_landing_cert_inforce
WHERE created_by = 'QA_TC_CR1_010_018' AND acc_insur > 0;

\echo '--- TC-018 TPD claim + cert life_insur (Original SI Life) ---'
SELECT t.certific_cust_no, t.tpd_insur, t.approve_tpd_insur, t.claim_status,
       ci.life_insur AS original_si_life
FROM tx_rig_landing_claimtpd t
JOIN tx_rig_landing_cert_inforce ci
  ON ci.cer_no = t.certific_cust_no AND ci.created_by = 'QA_TC_CR1_010_018'
WHERE t.created_by = 'QA_TC_CR1_010_018';

-- ============================================================================
-- default = dry-run. ตรวจผ่านแล้วเปลี่ยน ROLLBACK เป็น COMMIT (ดูหมายเหตุ duplicate ด้านบน)
-- ============================================================================
ROLLBACK;
-- COMMIT;

-- ============================================================================
-- CLEANUP (ลบข้อมูลทดสอบที่ commit แล้ว):
--   DELETE FROM tx_rig_landing_claimtpd     WHERE created_by='QA_TC_CR1_010_018';
--   DELETE FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018';
-- ============================================================================

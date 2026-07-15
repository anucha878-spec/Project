# 03 — Test Cases

**Feature:** CSMS-003 — Grace Period 7 วัน · **Skill:** `/test-case-generator` · **Date:** 2026-07-09
**Input:** `01-requirement-review.md`, `02-e2e-test-patterns.md`, `00b-atom-inventory.md`
**Status ทุก TC = Not Run** (Leg A — design-side; execute อยู่หลัง hard wall)

## §0 อภิธานศัพท์ (ถอดรหัสเฉพาะโปรเจกต์)
- **Inforce** = กรมธรรม์มีผลบังคับ · **diff** = `grace_end_date − current_date` (วันปฏิทิน, ไม่รวมวันปัจจุบัน)
- **DNC** = Do Not Contact (`ili_policy_remark.remark_code`: ORD='1', IND/PA='4')
- **LINE result:** `E02`=ไม่พบ/ยังไม่ลงทะเบียน (คัดเข้า) · `E00`+`isBlockLine=false`=ลงทะเบียนแล้ว (คัดออก) · `E13`/ค่าว่าง=ผิดปกติ (skip+F)
- **skip+F** = ข้ามรายการ + บันทึก `SMS_GRACE_PERIOD_LOG.sms_sent_status='F'` (รอบทำงานต่อ) · **คัดออก** = ไม่อยู่กลุ่มเป้าหมาย (ไม่ log 'F')
- **dedup key** = `policy_no+due_date` · **fan-out** = 1 กรมธรรม์ = 1 SMS (ไม่รวมรายลูกค้า)
- **[ASSUMPTION]** = spec ไม่ระบุ รอ RQ-xxx (ห้ามแต่ง expected)

---

## 1. Summary
- **Total test cases: 41** (TC-001..TC-041)
- **Coverage:**
  - Requirement coverage = **14/14 FR = 100%** (+ SC ที่เป็น functional)
  - Atom coverage = **48/48 ✅ atoms มี ≥1 TC = 100%**; atom ❓/🔒 (8+6) → TC `[ASSUMPTION]` ชี้ RQ (ไม่นับยืนยัน)
  - Technique coverage: BVA หน้าต่างวัน 5/5 · Decision-table target-selection 8/8 feasible rules · State-transition 12/12 valid + 1 invalid + 1 undefined(RQ) · negative-per-skip-branch 5/5
- **Exit criteria:** Requirement coverage 100% ✅; ไม่มี High-priority scenario ตกหล่น. **แต่มี 4 TC เป็น `[ASSUMPTION]` (RQ-001..RQ-004)** → ต้องปิด RQ ก่อน sign-off (ไม่ block การออกแบบ).
- **Risk coverage:** High (date-window, fan-out, dedup, DNC/LINE) มี TC ครบ.

---

## 2. Test Case Suite

### 🔹 Flow FLOW-001 — คัดกรอง & ส่ง SMS ราย policy (happy)

### TC-001
- **Requirement ID:** FR-001 · **E2E Pattern Reference:** FLOW-001 · **Atoms:** AT-001,002
- **Title:** batch รันอัตโนมัติทุกวันเวลา 10:00 น. หนึ่งรอบ
- **Type:** E2E_FLOW_POSITIVE · **Priority:** High *(แก่นของ feature)*
- **Preconditions:** scheduler ตั้งค่ารอบ 10:00; มีข้อมูลกรมธรรม์เข้าเงื่อนไข *(independent)*
- **Test Steps:** 1) ตั้งเวลาระบบให้ถึง 10:00 น. 2) ปล่อยให้ scheduler ทำงาน 3) ตรวจว่ามี batch run เกิดขึ้น 1 ครั้ง
- **Expected Result:** batch เริ่มทำงานหนึ่งรอบ ณ 10:00 น. และมีบันทึกการเริ่มรอบ *(automation ref: job log start timestamp = 10:00 ±tolerance; timezone `[ASSUMPTION RQ-009]`)*

### TC-002
- **Requirement ID:** FR-002 · **E2E:** FLOW-001 · **Atoms:** AT-009
- **Title:** ดึงข้อมูลกรมธรรม์และคำนวณวันสิ้นสุดผ่อนผันจากสองตารางต้นทาง
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** `ili_policy_master` + `ili_notification_letter` มีข้อมูล synthetic
- **Test Steps:** 1) รัน batch 2) ตรวจว่าระบบ join สองตารางและได้ `grace_end_date` ต่อกรมธรรม์
- **Expected Result:** ทุกกรมธรรม์ที่ดึงมามีค่า `grace_end_date` คำนวณครบ *(automation ref: query result vs expected grace_end_date)*

### TC-003
- **Requirement ID:** FR-003 · **E2E:** FLOW-001 · **Atoms:** AT-003,004 · **Technique:** BVA diff=7 (boundary 3/5)
- **Title:** คัดเข้า เมื่อเหลือ 7 วันพอดีก่อนหมดผ่อนผัน
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** กรมธรรม์ Inforce, `grace_end_date=2026-05-26`, วันรัน `2026-05-19` (diff=7)
- **Test Steps:** 1) รัน batch วันที่ 2026-05-19 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** กรมธรรม์นั้น **ถูกคัดเข้า**กลุ่มเป้าหมาย *(automation ref: policy_no ปรากฏใน target set / CSV)*

### TC-004
- **Requirement ID:** FR-003 · **E2E:** FLOW-003 · **Atoms:** AT-005 · **Technique:** BVA diff=6 (min-1, 2/5)
- **Title:** คัดออก เมื่อเหลือ 6 วัน (น้อยกว่า 7)
- **Type:** EDGE_CASE · **Priority:** High
- **Preconditions:** Inforce, `grace_end_date=2026-05-25`, วันรัน 2026-05-19 (diff=6)
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** กรมธรรม์นั้น **ถูกคัดออก** (ไม่ส่ง, ไม่ต้อง log 'F') *(automation ref: policy_no ไม่อยู่ใน target set)*

### TC-005
- **Requirement ID:** FR-003 · **E2E:** FLOW-003 · **Atoms:** AT-006 · **Technique:** BVA diff=8 (max+1, 4/5)
- **Title:** คัดออก เมื่อเหลือ 8 วัน (มากกว่า 7)
- **Type:** EDGE_CASE · **Priority:** High
- **Preconditions:** Inforce, `grace_end_date=2026-05-27`, วันรัน 2026-05-19 (diff=8)
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** กรมธรรม์นั้น **ถูกคัดออก** *(automation ref: policy_no ไม่อยู่ใน target set)*

### TC-006
- **Requirement ID:** FR-003 · **E2E:** FLOW-003 · **Atoms:** AT-003 · **Technique:** BVA diff=5 & diff=9 (นอกช่วงทั้งสองฝั่ง, 1/5 & 5/5)
- **Title:** คัดออก เมื่อ diff = 5 และ 9 วัน (ยืนยันช่วงแคบเฉพาะ 7)
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** สองกรมธรรม์ Inforce diff=5 และ diff=9
- **Test Steps:** 1) รัน batch 2) ตรวจทั้งสอง
- **Expected Result:** ทั้งสองถูกคัดออก — ยืนยันเป็น "ตรง 7 เท่านั้น" ไม่ใช่ "≤7" หรือ "≥7"

### TC-007
- **Requirement ID:** FR-003 · **E2E:** FLOW-001 · **Atoms:** AT-007
- **Title:** ใช้จำนวนวันแจ้งเตือนจากค่าตั้งค่า (cf_catalog)
- **Type:** BUSINESS_RULE_TEST · **Priority:** Medium
- **Preconditions:** `cf_catalog` `config_type='REMINDER_DAYS'`, `config_value1='CSMS_GP_7Days'` = 7
- **Test Steps:** 1) ตรวจว่าระบบอ่านค่าจาก cf_catalog 2) รัน batch
- **Expected Result:** หน้าต่างวันที่ใช้คัด = ค่าที่ตั้งใน cf_catalog *(automation ref: อ่านค่า config ก่อนคัด)*

### TC-008 `[ASSUMPTION]`
- **Requirement ID:** FR-003 / Assumption · **E2E:** FLOW-001 · **Atoms:** AT-008
- **Title:** ไม่พบค่าตั้งจำนวนวัน → ใช้ค่าเริ่มต้น 7 วัน
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** ลบ/ไม่มี record ใน cf_catalog สำหรับ CSMS_GP_7Days
- **Test Steps:** 1) รัน batch 2) ตรวจหน้าต่างวัน
- **Expected Result:** ระบบใช้ค่า default = 7 วัน *(สมมติฐาน spec; ยืนยัน behavior เมื่อ config หายกับ SA)*

### TC-009
- **Requirement ID:** FR-004 · **E2E:** FLOW-003 · **Atoms:** AT-010
- **Title:** คัดออกกรมธรรม์ที่ไม่ใช่สถานะมีผลบังคับ (Inforce)
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** กรมธรรม์ diff=7 แต่สถานะ ≠ Inforce (เช่น Lapsed)
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ถูกคัดออกไม่ว่า grace_end_date จะเป็นอย่างไร *(automation ref: policy_no ไม่อยู่ใน target set)*

### TC-010
- **Requirement ID:** FR-004 / US1-AC3 · **E2E:** FLOW-001 · **Atoms:** AT-011 · **Technique:** EP policy_type 3 classes
- **Title:** คัดเข้าครบทั้งสามประเภท ORD / IND / PA เมื่อเข้าเงื่อนไข 7 วัน
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** สามกรมธรรม์ Inforce diff=7 ประเภท ORD, IND, PA (ไม่ติด DNC, LINE E02)
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ทั้งสามประเภทถูกคัดเข้าและได้ SMS *(automation ref: 3 policy_no อยู่ใน CSV)*

### TC-011
- **Requirement ID:** FR-004a · **E2E:** FLOW-001 · **Atoms:** AT-012,015
- **Title:** ใช้เบอร์หลัก (mobile1) เมื่อมีค่า
- **Type:** E2E_FLOW_POSITIVE · **Priority:** High
- **Preconditions:** กรมธรรม์เข้าเงื่อนไข, `mobile1` มีค่า, `mobile2` มีค่า
- **Test Steps:** 1) รัน batch 2) ตรวจเบอร์ที่ใช้ส่ง
- **Expected Result:** ส่งไป `mobile1`; log `mobile_no` = mobile1 *(automation ref: SMS_GRACE_PERIOD_LOG.mobile_no = mobile1)*

### TC-012
- **Requirement ID:** FR-004a · **E2E:** FLOW-002 · **Atoms:** AT-013,015
- **Title:** ใช้เบอร์สำรอง (mobile2) เมื่อเบอร์หลักว่าง
- **Type:** VALIDATION_TEST · **Priority:** High
- **Preconditions:** `mobile1` ว่าง/NULL, `mobile2` มีค่า
- **Test Steps:** 1) รัน batch 2) ตรวจเบอร์ที่ใช้ส่ง
- **Expected Result:** ส่งไป `mobile2`; log `mobile_no` = mobile2

### TC-013
- **Requirement ID:** FR-004a · **E2E:** FLOW-002 · **Atoms:** AT-014 · **Technique:** negative-branch 1/5
- **Title:** ข้ามรายการเมื่อเบอร์หลักและสำรองว่างทั้งคู่ + บันทึกไม่สำเร็จ
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Preconditions:** `mobile1` และ `mobile2` ว่าง/NULL ทั้งคู่, กรมธรรม์เข้าเงื่อนไขอื่นครบ
- **Test Steps:** 1) รัน batch 2) ตรวจการส่งและ log
- **Expected Result:** ไม่ส่ง SMS, บันทึก `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status='F'` (ไม่มี refer_no), รอบดำเนินต่อรายการถัดไป *(automation ref: log row status='F', refer_no NULL; รอบไม่หยุด)*

### 🔹 Flow FLOW-003 — การคัดกรอง DNC & LINE

### TC-014
- **Requirement ID:** FR-005 · **E2E:** FLOW-003 · **Atoms:** AT-016,018
- **Title:** คัดออกกรมธรรม์ ORD ที่ติดห้ามติดต่อ (remark_code='1')
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** ORD Inforce diff=7, `ili_policy_remark.remark_code='1'`
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ถูกคัดออก ไม่ส่ง SMS

### TC-015
- **Requirement ID:** FR-005 · **E2E:** FLOW-003 · **Atoms:** AT-017,018
- **Title:** คัดออกกรมธรรม์ IND/PA ที่ติดห้ามติดต่อ (remark_code='4')
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** IND และ PA Inforce diff=7, `remark_code='4'`
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ทั้ง IND และ PA ถูกคัดออก

### TC-016
- **Requirement ID:** FR-005 · **E2E:** FLOW-003 · **Atoms:** AT-016,017 · **Technique:** decision-table asymmetry
- **Title:** remark_code ไม่ตรงประเภท → ไม่คัดออก (ORD='4' / IND='1' ยังส่ง)
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** ORD ที่ `remark_code='4'` และ IND ที่ `remark_code='1'` (รหัสไม่ตรงกฎประเภท)
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ทั้งสองยัง**คงอยู่**ในกลุ่มเป้าหมาย (กฎ DNC ผูกรหัสตามประเภท: ORD='1', IND/PA='4' เท่านั้น)

### TC-017
- **Requirement ID:** FR-006 · **E2E:** FLOW-001 · **Atoms:** AT-019
- **Title:** เรียกบริการตรวจสถานะ LINE ด้วยพารามิเตอร์ channels='LINE'
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** mock `cisappapi@11.100.8.44` พร้อม
- **Test Steps:** 1) รัน batch 2) ตรวจ request ที่ยิงไป LINE API
- **Expected Result:** เรียก API พร้อม `channels='LINE'` ต่อ cardNo *(automation ref: mock ได้รับ param channels=LINE)*

### TC-018
- **Requirement ID:** FR-006a · **E2E:** FLOW-001 · **Atoms:** AT-020
- **Title:** map กรมธรรม์เป็น cardNo ก่อนเรียก LINE
- **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Preconditions:** กรมธรรม์มีข้อมูลลูกค้าที่ map cardNo ได้
- **Test Steps:** 1) รัน batch 2) ตรวจว่าเรียก LINE ด้วย cardNo ที่ map จาก policy_no
- **Expected Result:** ใช้ cardNo ที่ map ถูกต้องในการเรียก LINE

### TC-019
- **Requirement ID:** FR-006a · **E2E:** FLOW-002 · **Atoms:** AT-021 · **Technique:** negative-branch 2/5
- **Title:** ข้ามรายการเมื่อหา cardNo ไม่พบ + บันทึกไม่สำเร็จ
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Preconditions:** กรมธรรม์ที่ map cardNo ไม่ได้
- **Test Steps:** 1) รัน batch 2) ตรวจการส่งและ log
- **Expected Result:** skip + `sms_sent_status='F'`, ไม่หยุดรอบ, ให้ Manual Fix ย้อนหลัง

### TC-020
- **Requirement ID:** FR-007 · **E2E:** FLOW-001 · **Atoms:** AT-022
- **Title:** คัดเข้าเมื่อ LINE ตอบ E02 (ยังไม่ลงทะเบียน)
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** mock LINE ตอบ `E02`
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** คัดเข้าและส่ง SMS

### TC-021
- **Requirement ID:** FR-007 · **E2E:** FLOW-003 · **Atoms:** AT-023
- **Title:** คัดออกเมื่อ LINE ตอบ E00 และ isBlockLine=false (ลงทะเบียนแล้ว)
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** mock LINE ตอบ `E00`, `isBlockLine=false`
- **Test Steps:** 1) รัน batch 2) ตรวจกลุ่มเป้าหมาย
- **Expected Result:** ถูกคัดออก ไม่ส่ง SMS

### TC-022
- **Requirement ID:** FR-007 · **E2E:** FLOW-002 · **Atoms:** AT-024 · **Technique:** negative-branch 3/5
- **Title:** ข้ามรายการเมื่อ LINE ตอบผิดปกติ (E13 / ค่าว่าง) + บันทึกไม่สำเร็จ
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Preconditions:** mock LINE ตอบ `E13`, และอีกเคส `channel`/`isBlockLine` เป็นค่าว่าง
- **Test Steps:** 1) รัน batch 2) ตรวจการส่ง/ log/ ความต่อเนื่องของรอบ
- **Expected Result:** ทุกเคสผิดปกติ → skip + `sms_sent_status='F'`, **ไม่ retry รายรายการ**, รอบทำงานต่อ

### TC-023 `[ASSUMPTION — RQ-001]`
- **Requirement ID:** FR-007 · **E2E:** FLOW-001 (guard undefined) · **Atoms:** AT-025
- **Title:** LINE ตอบ E00 และ isBlockLine=true — พฤติกรรมยังไม่นิยาม
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** mock LINE ตอบ `E00`, `isBlockLine=true`
- **Test Steps:** 1) รัน batch 2) สังเกตว่าระบบคัดเข้า/คัดออก/skip
- **Expected Result:** **spec ไม่ระบุ → รอ RQ-001** (ห้ามแต่ง expected). บันทึกพฤติกรรมจริงเพื่อยืนยันกับ SA

### 🔹 Flow FLOW-006 — per-policy fan-out (dedup รายลูกค้า = ห้าม)

### TC-024
- **Requirement ID:** FR-008 / US1-AC5 · **E2E:** FLOW-006 · **Atoms:** AT-029,030
- **Title:** ลูกค้าเบอร์เดียวมี 2 กรมธรรม์เข้าเงื่อนไข → ได้ SMS 2 ข้อความ
- **Type:** BUSINESS_RULE_TEST · **Priority:** High *(กฎธุรกิจวิกฤต — ต่างจาก CSMS-001/002)*
- **Preconditions:** 1 cardNo/เบอร์เดียว มีกรมธรรม์ A และ B (ต่าง policy_no) ทั้งคู่ Inforce diff=7, LINE E02, ไม่ติด DNC
- **Test Steps:** 1) รัน batch 2) นับจำนวน SMS/แถว log ของลูกค้ารายนี้
- **Expected Result:** ได้รับ **2 ข้อความ** (1 ต่อกรมธรรม์), แต่ละข้อความอ้าง policy_no/due_date/grace_end_date ของตัวเอง; **ไม่ dedup รวมเป็น 1** *(automation ref: 2 log rows, 2 policy_no distinct)*

### TC-025
- **Requirement ID:** FR-008 · **E2E:** FLOW-006 · **Atoms:** AT-030,035
- **Title:** ลูกค้าเดียว 2 กรมธรรม์ต่าง due_date → ทั้งคู่ส่งได้ (คนละรอบ Due)
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** 1 cardNo, policy A (due_date=D1) และ policy B (due_date=D2, D1≠D2) ทั้งคู่ diff=7
- **Test Steps:** 1) รัน batch 2) ตรวจการส่ง
- **Expected Result:** ส่งทั้งสอง (due_date ต่างกัน = คนละรอบ Due, ไม่ชน dedup)

### 🔹 Flow FLOW-001/005 — dedup & idempotency

### TC-026
- **Requirement ID:** FR-008 / US5-AC1 · **E2E:** FLOW-003 · **Atoms:** AT-031,032
- **Title:** กันส่งซ้ำในรอบเดียวกัน — กรมธรรม์ที่เคยส่งแล้ว (policy_no+due_date เดิม) ถูกคัดออก
- **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Preconditions:** มีประวัติ `SMS_GRACE_PERIOD_LOG` status='S' ของ policy X + due_date D (รอบ Due ปัจจุบัน)
- **Test Steps:** 1) รัน batch ที่ policy X ยังเข้าเงื่อนไข 7 วัน 2) ตรวจการส่ง
- **Expected Result:** policy X **ถูกคัดออก** ไม่ส่งซ้ำ *(automation ref: ไม่มี log row ใหม่ของ X+D)*

### TC-027
- **Requirement ID:** FR-008 / US5-AC2 · **E2E:** FLOW-003 · **Atoms:** AT-033
- **Title:** รันวันถัดไป (due_date เดิม) → ไม่เลือกซ้ำ
- **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Preconditions:** policy X ส่งสำเร็จวันนี้ (due_date D); วันพรุ่งนี้ยังอยู่ในช่วงพิจารณา due_date D
- **Test Steps:** 1) รัน batch วันถัดไป 2) ตรวจการส่ง
- **Expected Result:** policy X ไม่ถูกเลือกซ้ำ (dedup ราย due_date D)

### TC-028
- **Requirement ID:** FR-014 · **E2E:** FLOW-005 · **Atoms:** AT-062,063,064
- **Title:** Manual Fix ย้อนหลัง — ส่งกลุ่มค้างโดยไม่ส่งซ้ำรายการที่สำเร็จแล้ว
- **Type:** STATE_TRANSITION_TEST · **Priority:** High
- **Preconditions:** IT_ADMIN สิทธิ์ครบ; รอบวันที่ D มีบางรายการ 'S' และบางรายการค้าง/ไม่ได้ส่ง; หน้า Admin Dashboard กลาง
- **Test Steps:** 1) IT_ADMIN เลือกวันที่ D 2) กดสั่งรัน Manual Batch 3) ตรวจการส่ง + audit
- **Expected Result:** เฉพาะรายการค้างได้รับ SMS; รายการ 'S' เดิม**ไม่ถูกส่งซ้ำ** (idempotent ด้วย FR-008); มี audit log ของการรัน Manual *(automation ref: ปุ่มบนหน้า Manual Fix + log rows)*

### TC-029 `[ASSUMPTION — RQ-002]`
- **Requirement ID:** FR-008 + FR-014 · **E2E:** FLOW-005 · **Atoms:** AT-034
- **Title:** dedup ตรวจสถานะใด — รายการที่เคย skip ('F') ต้องส่งใหม่ได้ผ่าน Manual Fix
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** policy Y เคย skip เป็น 'F' (เช่น cardNo เคยหาไม่พบ) ใน due_date D; ต่อมาข้อมูลถูกแก้
- **Test Steps:** 1) IT_ADMIN Manual Fix วันที่ D 2) ตรวจว่า policy Y ถูกส่งใหม่หรือถูกกันด้วย dedup
- **Expected Result:** **spec ไม่ระบุว่า dedup นับเฉพาะ 'S' หรือรวม 'F' → รอ RQ-002.** ถ้ารวม 'F' จะซ่อมไม่ได้ (ขัด FR-014). บันทึกพฤติกรรมจริง

### 🔹 Flow FLOW-001 — สร้างข้อความ & ไฟล์ CSV

### TC-030
- **Requirement ID:** FR-010 / US3-AC3 · **E2E:** FLOW-001 · **Atoms:** AT-041,042,043,044
- **Title:** แทนค่าตัวแปรในข้อความ SMS ครบถ้วนด้วยข้อมูลจริงราย policy
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** policy_no=3556782, due_date=12/04/2026, grace_end_date=26/05/2026
- **Test Steps:** 1) รัน batch 2) อ่านข้อความที่สร้าง
- **Expected Result:** ข้อความตรง template เป๊ะ โดย `${var1}`=3556782, `${var2}`=12/04/2026, `${var3}`=26/05/2026 (รูปแบบ DD/MM/YYYY) *(automation ref: string match กับ template ที่แทนค่าแล้ว)*

### TC-031
- **Requirement ID:** FR-009 · **E2E:** FLOW-001 · **Atoms:** AT-036,037
- **Title:** สร้างไฟล์ CSV แบบ UTF-8 ตามรูปแบบชื่อมาตรฐาน
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** มีกลุ่มเป้าหมายที่คัดกรองแล้ว
- **Test Steps:** 1) รัน batch 2) ตรวจไฟล์ CSV ที่สร้าง
- **Expected Result:** ไฟล์ encoding UTF-8, ชื่อรูปแบบ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` เช่น `MKT_CSMS_MKTGracePeriod7Days_690519100000.csv` *(automation ref: filename regex + BOM/encoding check)*

### TC-032 `[ASSUMPTION — RQ-003]`
- **Requirement ID:** FR-009 · **E2E:** FLOW-001 · **Atoms:** AT-040
- **Title:** โครงสร้างคอลัมน์ภายในไฟล์ CSV
- **Type:** INTEGRATION_TEST · **Priority:** Medium
- **Preconditions:** ไฟล์ CSV ที่สร้างจากกลุ่มเป้าหมาย
- **Test Steps:** 1) เปิดไฟล์ CSV 2) ตรวจคอลัมน์/ลำดับ/header
- **Expected Result:** **spec ไม่ระบุ schema ภายใน CSV → รอ RQ-003** (ห้ามแต่งคอลัมน์). ตรวจได้เมื่อ SA ให้ column spec

### TC-033 `[ASSUMPTION — RQ-004/RQ-010]`
- **Requirement ID:** FR-009 · **E2E:** FLOW-001 · **Atoms:** AT-038,039
- **Title:** ปี/era ใน timestamp ชื่อไฟล์ และค่าคงที่ department/SystemCode/Category
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** รัน batch วันที่ 2026-05-19 10:00
- **Test Steps:** 1) ตรวจ `YYMMDDhhmmss` ในชื่อไฟล์ 2) เทียบกับปีในข้อความ
- **Expected Result:** ตัวอย่าง `690519100000` บ่งชี้ปี **พ.ศ.** (2569) ขณะข้อความใช้ **ค.ศ.** — **รอ RQ-004 ยืนยัน era + RQ-010 ยืนยันค่าคงที่** (ห้ามสรุปเอง)

### 🔹 Flow FLOW-001 — นำส่ง & บันทึกผล

### TC-034
- **Requirement ID:** FR-011 · **E2E:** FLOW-001 · **Atoms:** AT-046,047
- **Title:** นำส่งไฟล์ CSV ไป SMS Gateway และรับ refer_no + สถานะรายรายการ
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** mock ESB→SMS Gateway ตอบ refer_no + สถานะ
- **Test Steps:** 1) รัน batch 2) ตรวจ response ที่รับกลับ
- **Expected Result:** ระบบได้รับ `refer_no` และสถานะการส่งรายรายการจาก Gateway

### TC-035
- **Requirement ID:** FR-012 / US4-AC1 · **E2E:** FLOW-001 · **Atoms:** AT-048,049,050,055
- **Title:** ส่งสำเร็จ → บันทึกครบทุก field + สถานะ 'S' + refer_no
- **Type:** BUSINESS_RULE_TEST · **Priority:** High
- **Preconditions:** Gateway ตอบสำเร็จพร้อม refer_no
- **Test Steps:** 1) รัน batch 2) ตรวจแถวใน `SMS_GRACE_PERIOD_LOG`
- **Expected Result:** log แถวนั้นมี `sms_sent_status='S'`, `refer_no` ที่ได้รับ, และ field ครบ (policy_no, policy_type, mobile_no, sms_message, due_date, grace_end_date, reminder_days, created_by, created_date) *(automation ref: assert ทุกคอลัมน์ไม่ NULL ตามนิยาม; created_by `[ASSUMPTION RQ-008]`)*

### TC-036
- **Requirement ID:** FR-012 / US4-AC2 · **E2E:** FLOW-002 · **Atoms:** AT-051
- **Title:** ส่งไม่สำเร็จ/ถูก skip → บันทึกสถานะ 'F' โดยไม่มี refer_no
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** High
- **Preconditions:** รายการที่ skip (จาก TC-013/019/022) หรือ Gateway ตอบ fail
- **Test Steps:** 1) รัน batch 2) ตรวจแถว log
- **Expected Result:** `sms_sent_status='F'`, `refer_no` ว่าง

### TC-037 `[ASSUMPTION — RQ-005]`
- **Requirement ID:** Edge (refer_no) · **E2E:** FLOW-002 · **Atoms:** AT-052 · **Technique:** negative-branch 4/5
- **Title:** SMS Gateway ตอบ refer_no ผิดรูปแบบ → บันทึก 'F'
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Preconditions:** mock Gateway ตอบ refer_no รูปแบบผิด
- **Test Steps:** 1) รัน batch 2) ตรวจ log
- **Expected Result:** บันทึก `sms_sent_status='F'` เพื่อ Manual Fix. **นิยาม "ผิดรูปแบบ" รอ RQ-005** (ห้ามแต่ง pattern เอง)

### TC-038
- **Requirement ID:** Assumption (Gateway) · **E2E:** FLOW-002 · **Atoms:** AT-053 · **Technique:** negative-branch 5/5
- **Title:** SMS Gateway ตอบ timeout/5xx → บันทึก 'F' ไม่ retry อัตโนมัติในรอบ daily
- **Type:** E2E_FLOW_NEGATIVE · **Priority:** Medium
- **Preconditions:** mock Gateway ตอบ 5xx/timeout
- **Test Steps:** 1) รัน batch 2) ตรวจ log + ว่าไม่มีการ retry อัตโนมัติ
- **Expected Result:** `sms_sent_status='F'`, ไม่ retry auto (ซ่อมผ่าน Manual Fix)

### 🔹 Flow FLOW-004 — ความล้มเหลวระดับรอบ & edge

### TC-039
- **Requirement ID:** FR-013 / US4-AC3 · **E2E:** FLOW-004 · **Atoms:** AT-056,057
- **Title:** ความล้มเหลวระดับรอบ → ส่ง email แจ้งทีม IT + ผู้ใช้งาน
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** จำลอง failure ระดับรอบ (เช่น DWConsole ดึงไม่ได้ / CSV สร้างไม่สำเร็จ)
- **Test Steps:** 1) รัน batch ในสภาวะล้มเหลว 2) ตรวจ email ที่ส่ง
- **Expected Result:** ส่ง email ถึงทีม IT Development + กลุ่มผู้ใช้งาน พร้อมรายละเอียด error + สรุป log *(SLA ≤15 นาที = SC-005; numeric SLA trigger `[ASSUMPTION RQ-006]`)*

### TC-040
- **Requirement ID:** Edge (CSV/API-down) · **E2E:** FLOW-004 · **Atoms:** AT-026,059
- **Title:** LINE API ล่มทั้งระบบ → retry ≤3 แล้วหยุดรอบ + email; และ CSV สร้างไม่สำเร็จ → รอบล้มเหลว
- **Type:** INTEGRATION_TEST · **Priority:** High
- **Preconditions:** mock LINE ล่มต่อเนื่อง; แยกเคส disk/สิทธิ์เขียน CSV ไม่ได้
- **Test Steps:** 1) รัน batch เคส LINE ล่ม → ตรวจ retry+หยุด+email 2) รัน batch เคส CSV fail → ตรวจหยุด+email
- **Expected Result:** LINE ล่ม: retry ≤3 ครั้ง (เว้นช่วง `[ASSUMPTION RQ-007]`) แล้วหยุดรอบ + email; CSV fail: ถือเป็นความล้มเหลวระดับรอบ → email + รอ Manual Fix

### TC-041
- **Requirement ID:** Edge · **E2E:** FLOW-003/005 · **Atoms:** AT-060,061
- **Title:** กรณีขอบ: grace_end ตรงวันหยุด (ไม่ scheduled) และ grace_end ถูกปรับหลังส่ง
- **Type:** EDGE_CASE · **Priority:** Medium
- **Preconditions:** (a) grace_end ตรงวัน batch ไม่ทำงาน; (b) กรมธรรม์ที่ส่งแล้วถูกปรับ grace_end ภายหลัง
- **Test Steps:** 1) ตรวจว่ากลุ่มที่พลาดรอบซ่อมได้ผ่าน Manual Fix 2) ตรวจว่าไม่ re-evaluate ย้อนหลังหลังส่งไปแล้ว
- **Expected Result:** (a) กลุ่มที่พลาดถูกซ่อมผ่าน Manual Fix; (b) ยึดผลตรวจ ณ เวลาประมวลผลของรอบนั้น (ไม่ย้อนแก้)

---

## 3. Coverage Analysis
- **Covered flows:** FLOW-001..006 ครบทุก flow
- **Partially covered:** FLOW-005 (Manual Fix) — idempotency ของ 'F' ขึ้นกับ RQ-002 (TC-029 assumption)
- **Not covered:** — (ไม่มี FR ที่ไม่มี TC)
- **Missing edge cases:** ไม่มีที่ระบุใน spec ที่ยังไม่ครอบ
- **Missing negative scenarios:** ครบ 5 skip-branch (mobile/cardNo/LINE/refer_no-format/Gateway-5xx)
- **Technique coverage (ตัวหาร):** BVA date-window 5/5 (diff 5,6,7,8,9) · Decision-table target-selection 8/8 feasible rules (Inforce×DNC×LINE×dedup×mobile) · State-transition 12/12 valid + 1 invalid + 1 undefined(RQ) · EP policy_type 3/3 · negative-per-branch 5/5
- **NFR flagged (out of functional scope):** SC-001/SC-002/SC-005/SC-006 → ดู `NFR-routing.md`

## 4. Traceability Matrix (FR → TC)

| FR | TC |
|---|---|
| FR-001 | TC-001 |
| FR-002 | TC-002 |
| FR-003 | TC-003,004,005,006,007,008 |
| FR-004 | TC-009,010 |
| FR-004a | TC-011,012,013 |
| FR-005 | TC-014,015,016 |
| FR-006 | TC-017 |
| FR-006a | TC-018,019 |
| FR-007 | TC-020,021,022,023 |
| FR-008 | TC-024,025,026,027,029 |
| FR-009 | TC-031,032,033 |
| FR-010 | TC-030 |
| FR-011 | TC-034 |
| FR-012 | TC-035,036,037,038 |
| FR-013 | TC-039 |
| FR-014 | TC-028,029 |
| Edge/Assumption | TC-040,041 |

## 5. Risk Highlights
- **High-risk critical:** date-window (TC-003..006), per-policy fan-out ไม่ dedup รายคน (TC-024), dedup/idempotency (TC-026..029), DNC/LINE ไม่ส่งผิดกลุ่ม (TC-014,015,021) → ทั้งหมดมี TC
- **`[ASSUMPTION]` blocking sign-off:** TC-023 (RQ-001), TC-029 (RQ-002), TC-032 (RQ-003), TC-033 (RQ-004) — ต้องปิด RQ ก่อน execute จริง
- **Integration-heavy:** LINE/ESB/Gateway/Email + CSV (ต้อง mock ครบ) — automation risk สูง (ดู 05)

## 03b — Google Sheet upload: **SKIPPED** (ตามคำสั่ง Leg A)

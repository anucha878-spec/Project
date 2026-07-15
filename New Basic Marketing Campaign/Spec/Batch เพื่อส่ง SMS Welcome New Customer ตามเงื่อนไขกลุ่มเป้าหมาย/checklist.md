# Requirements Quality Checklist — CSMS-001 "Welcome New Customer (LINE)"

**Purpose**: ตรวจสอบ *คุณภาพของ requirement* (spec.md) ก่อนเข้าขั้น `/plan` — เป็น "unit test ของตัวข้อกำหนด" ไม่ใช่การทดสอบระบบที่พัฒนาแล้ว
**Feature**: `002-batch-welcome-new-customer-line-sms`
**Created**: 2026-07-10
**Scope**: ความครบถ้วน / ความชัดเจน / ความสอดคล้อง / ความสามารถวัดผล / ครอบคลุม scenario & edge case / NFR / dependency & assumption
**สถานะ**: `[ ]` = ยังต้องตรวจ · `[x]` = ผ่าน · `[!]` = พบช่องว่าง/ต้องแก้ (ดู Gaps ท้ายไฟล์)

---

## 1. Requirement Completeness (ความครบถ้วน)

- [x] CHK001 มีข้อกำหนดครอบคลุมทั้ง flow หลัก: คัดเลือก → คัดกรอง → dedup → สร้างไฟล์ → ส่ง → บันทึก → แจ้งเตือน → Manual Fix หรือไม่? [FR-001..FR-021]
- [x] CHK002 ระบุประเภทกรมธรรม์ที่อยู่ใน scope ครบ (ORD/IND/PA) และเกณฑ์ "ตั้งแต่ปี 2026" ชัดเจนหรือไม่? [FR-002, FR-003]
- [x] CHK003 ระบุปลายทางการบันทึกครบทั้ง 2 ตาราง (`CSMS_LOG`, `WELCOME_NEW_CUST_LINE`) พร้อม field list หรือไม่? [FR-015, FR-016]
- [ ] CHK004 requirement ครอบคลุม "ค่า timeout/SLA ที่ใช้ตัดสินว่า batch ล้มเหลว" เป็นค่าที่วัดได้หรือไม่ หรือผลักไปขั้น plan ทั้งหมด? [FR-018 — "ใช้ค่ามาตรฐานเดิม" ยังไม่มีตัวเลข]
- [ ] CHK005 มีข้อกำหนดจำนวน retry และช่วงเว้น (interval) ของ Line Connect API เป็นค่าที่ทดสอบได้หรือไม่? [FR-008b — ระบุ "สูงสุด 3 ครั้ง เว้นช่วง" แต่ interval ไม่ระบุ]
- [x] CHK006 ระบุพฤติกรรมการ fallback ของ template ข้อความ (schedule → default category) หรือไม่? [FR-011]
- [ ] CHK007 มีข้อกำหนดขนาด/ปริมาณกลุ่มเป้าหมายต่อรอบ (volume) เพื่อออกแบบ scale หรือไม่? [Gap — spec นี้ไม่ระบุ volume ต่างจาก CSMS-002/003/004]

## 2. Requirement Clarity (ความชัดเจน / ปราศจากความกำกวม)

- [x] CHK008 นิยาม "T-1" และเวลา cutoff (10:00) ชัดเจน ไม่กำกวมหรือไม่? [FR-001, FR-002]
- [x] CHK009 เกณฑ์ eligibility 3 เงื่อนไข (BR-003) ระบุครบและ mutually-exclusive หรือไม่? [FR-006]
- [x] CHK010 การ map รหัสประเภทกรมธรรม์เพื่อตรวจ Do Not Contact ระบุชัด (ORD='O', IND IN ('I','G'), PA='P') หรือไม่? [FR-005]
- [ ] CHK011 คำว่า "ตามเวลาที่กำหนด" (FR-018) มีนิยามที่ทดสอบได้หรือยังเป็นข้อความลอย? [Ambiguity]
- [x] CHK012 เกณฑ์ dedup ในรอบ (fname+lname+mobile_no, MIN issue_date) และ tie-break (policy_no น้อยสุด) ชัดเจนหรือไม่? [FR-009, A-007]

## 3. Requirement Consistency (ความสอดคล้อง / ไม่ขัดแย้งกันเอง)

- [x] CHK013 กลไกกันส่งซ้ำ (FR-010 ตรวจ sms_sent_date IS NOT NULL) สอดคล้องกับการบันทึก 'F' (FR-016a) โดยไม่ขัดกันหรือไม่?
- [x] CHK014 key กันส่งซ้ำ (policy_no+policy_type+fname+lname) ใน FR-010 สอดคล้องกับ Acceptance Scenario US1 #6 หรือไม่?
- [x] CHK015 การ skip รายรายการ (FR-008/008a/011a) กับการหยุดทั้งรอบ (FR-008b/012a) แยกเงื่อนไขชัดเจน ไม่ทับซ้อนหรือไม่?
- [x] CHK016 sent_status ('S'/'F') ใช้นิยามเดียวกันทุกที่ (FR-016a, Key Entities, Clarifications) หรือไม่?

## 4. Acceptance Criteria Quality (คุณภาพเกณฑ์ยอมรับ & วัดผลได้)

- [x] CHK017 ทุก User Story มี Acceptance Scenario แบบ Given/When/Then ครบหรือไม่? [US1: 8, US2: 4, US3: 1]
- [x] CHK018 Success Criteria (SC-001..007) วัดผลได้เชิงปริมาณ (%, =0) หรือไม่?
- [ ] CHK019 SC-001 "ภายในรอบ 10:00" มีเกณฑ์เวลาสูงสุดที่ batch ต้องเสร็จหรือไม่ (เทียบ CSMS-003 SC-001 = 5 นาที)? [Gap — spec นี้ไม่มี performance SC]
- [x] CHK020 US3 (รายงาน) มีเพียง 1 acceptance scenario — ครอบคลุม breakdown ตาม policy_type และเหตุผลการตัดออกครบหรือไม่? [FR-021]

## 5. Edge Case Coverage (ครอบคลุมกรณีขอบ)

- [x] CHK021 ครอบคลุมเบอร์ว่าง (EC-001), หลายกรมธรรม์ issue_date เดียวกัน (EC-002), ผลนอก 3 เงื่อนไข (EC-003) หรือไม่?
- [x] CHK022 ครอบคลุม Manual Fix ซ้ำซ้อน/idempotent (EC-004), ไม่พบชื่อลูกค้า (EC-005), API ล่มทั้งระบบ (EC-007), ลิงก์หมดอายุ (EC-006) หรือไม่?
- [x] CHK023 ทุก edge case มี FR รองรับที่ traceable กลับได้หรือไม่? (EC-003→FR-008a, EC-005→FR-011a, EC-006→FR-012a, EC-007→FR-008b)
- [ ] CHK024 กรณี SMS Gateway ตอบ refer_no ผิดรูปแบบ/ส่งไม่สำเร็จรายรายการ มี edge case ระบุไว้หรือไม่? [Gap — CSMS-003 มี edge case นี้ แต่ CSMS-001 ไม่ระบุตรง ๆ]

## 6. Non-Functional Requirements (NFR)

- [ ] CHK025 มี NFR ด้าน performance/throughput (เวลาเสร็จต่อรอบ, จำนวน record สูงสุด) หรือไม่? [Gap]
- [!] CHK026 มี NFR ด้าน security/PII (การส่งเบอร์โทร+ชื่อลูกค้าในไฟล์ CSV, การเข้ารหัส, การเข้าถึงไฟล์) หรือไม่? [Gap — ไม่มี security/PII NFR เลย]
- [ ] CHK027 มี NFR ด้าน availability/retry/monitoring ที่วัดได้ (นอกเหนือ retry 3 ครั้ง) หรือไม่? [Partial]

## 7. Dependencies & Assumptions (ความพึ่งพา & สมมติฐาน)

- [x] CHK028 ระบุแหล่งข้อมูล/ระบบภายนอกครบ (ESB, SMS Gateway, Line Connect Inquiry, DWConsole, cf_catalog) พร้อม assumption ว่ามีอยู่แล้วหรือไม่? [A-001..A-006, Key Entities]
- [x] CHK029 assumption ที่ยังไม่ยืนยัน (A-007) ถูกแยกออกจากที่ยืนยันแล้ว (A-008..A-010) ชัดเจนหรือไม่?
- [ ] CHK030 assumption เรื่อง character limit/credit (A-011 "~140 ตัว ≈ 2 credits") ยืนยันกับ logic จริงหรือยังเป็นการประมาณ? [ต้องยืนยันขั้น plan]

---

## Gaps Found (สรุปช่องว่างที่ต้องปิดก่อน `/plan`)

| # | ประเด็น | อ้างอิง | ข้อเสนอ |
|---|---------|---------|---------|
| G1 | ไม่มี performance NFR (เวลาเสร็จต่อรอบ / จำนวน record สูงสุด) | CHK019, CHK025 | เพิ่ม SC เชิง performance เทียบ CSMS-003/004 (5 นาที / 10,000 รายการ) |
| G2 | ไม่มี security/PII NFR ทั้งที่ไฟล์ CSV มีชื่อ+เบอร์ลูกค้า | CHK026 | เพิ่ม NFR การป้องกันไฟล์/PII (ร่วมกับทั้ง 4 แคมเปญ) |
| G3 | retry interval และ timeout/SLA เป็นค่าลอย ("ค่ามาตรฐานเดิม") | CHK004, CHK005, CHK011 | ระบุค่าตัวเลขจริง หรือ mark เป็น plan-time decision ให้ชัด |
| G4 | ไม่ระบุ volume ต่อรอบ | CHK007 | เพิ่มตัวเลขคาดการณ์เพื่อออกแบบ batch call ตรวจสถานะ |
| G5 | ไม่มี edge case สำหรับ SMS Gateway ตอบผิดรูปแบบ/ล้มเหลวรายรายการ | CHK024 | เพิ่ม edge case + FR รองรับ (เทียบ CSMS-003) |

**สรุป**: spec CSMS-001 เป็นตัว baseline ที่สมบูรณ์ที่สุด (flow/error/log ครบ) แต่ยังขาด NFR (performance + security/PII) และค่า operational บางตัวยังเป็น plan-time — ปิด G1–G5 ก่อนเข้า `/plan`

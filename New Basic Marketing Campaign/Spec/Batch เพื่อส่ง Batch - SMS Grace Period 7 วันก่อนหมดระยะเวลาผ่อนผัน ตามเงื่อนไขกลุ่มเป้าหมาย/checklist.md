# Requirements Quality Checklist — CSMS-003 "Grace Period 7 วันก่อนหมดผ่อนผัน"

**Purpose**: ตรวจสอบ *คุณภาพของ requirement* (spec.md) ก่อนเข้าขั้น `/plan` — "unit test ของตัวข้อกำหนด" ไม่ใช่การทดสอบระบบ
**Feature**: `004-gp7-sms-batch`
**Created**: 2026-07-10
**Scope**: ความครบถ้วน / ความชัดเจน / ความสอดคล้อง / วัดผลได้ / scenario & edge case / NFR / dependency
**สถานะ**: `[ ]` ยังต้องตรวจ · `[x]` ผ่าน · `[!]` พบช่องว่าง/ต้องแก้ (ดู Gaps)

---

## 1. Requirement Completeness (ความครบถ้วน)

- [x] CHK001 ครอบคลุม flow: คัดกรอง grace 7 วัน → Do Not Contact → map cardNo → ตรวจ LINE → กันส่งซ้ำ → สร้างไฟล์ → ส่ง → log → แจ้งเตือน → Manual Fix หรือไม่? [FR-001..FR-014]
- [x] CHK002 ระบุแหล่งข้อมูลคำนวณ grace_end_date ครบ (`ili_policy_master` + `ili_notification_letter`) หรือไม่? [FR-002]
- [x] CHK003 ระบุ key กันส่งซ้ำเฉพาะ (`policy_no` + `due_date`) และ **ไม่ dedup รายลูกค้า** ต่างจาก CSMS-001/002 ชัดเจนหรือไม่? [FR-008]
- [x] CHK004 ระบุตาราง log ใหม่ (`SMS_GRACE_PERIOD_LOG`) พร้อม field list และสถานะ 'S'/'F' หรือไม่? [FR-012, Key Entities]
- [x] CHK005 ระบุ config จำนวนวัน (`cf_catalog`, REMINDER_DAYS, CSMS_GP_7Days, default 7) หรือไม่? [FR-003, Assumptions]

## 2. Requirement Clarity (ความชัดเจน)

- [x] CHK006 นิยามการนับ "7 วัน" (calendar days, `grace_end_date - current_date = 7`, ไม่รวมวันปัจจุบัน, ไม่พิจารณาเวลา) ชัดเจนหรือไม่? [FR-003, Clarifications]
- [x] CHK007 เกณฑ์ตรวจ LINE (E02→คัดเข้า, E00+isBlockLine=false→คัดออก, ผิดปกติ→skip+'F') ระบุครบหรือไม่? [FR-007]
- [x] CHK008 พฤติกรรม 1 ข้อความต่อกรมธรรม์ (ลูกค้าหลายกรมธรรม์ได้หลายข้อความ) ระบุชัดและมีเหตุผลอ้างอิงข้อมูลรายกรมธรรม์หรือไม่? [FR-008, US1 #5]
- [x] CHK009 การแทนค่าตัวแปร ($var1=policy_no, $var2=due_date, $var3=grace_end_date) และรูปแบบวันที่ (DD/MM/YYYY) ชัดเจนหรือไม่? [FR-010, US3 #3]
- [ ] CHK010 IP ปลายทางบริการตรวจ LINE (`cisappapi` ที่ `11.100.8.44`) ถูก hardcode ใน requirement — ควรเป็น config/endpoint นามธรรมหรือไม่? [Clarity/maintainability — FR-006]

## 3. Requirement Consistency (ความสอดคล้อง)

- [x] CHK011 การจัดการ error/log/Manual Fix ระบุว่าสืบทอดจาก CSMS-001/002 และไม่ขัดกับ key dedup ที่ต่างออกไปหรือไม่? [Assumptions]
- [x] CHK012 พฤติกรรมเบอร์ว่าง → skip+'F' (FR-004a) สอดคล้องกับ CSMS-003 ที่เลือก audit trail แทนการคัดออกเงียบ (ต่างจาก CSMS-001/002) ระบุความต่างไว้ชัดหรือไม่?
- [x] CHK013 US1–US5 มี priority ที่สอดคล้อง (US1–US4=P1, US5=P2) และไม่ขัดกับ flow dependency หรือไม่?
- [ ] CHK014 นิยาม "รอบ Due เดียวกัน" (due_date ตรงกัน) ใน FR-008/SC-003/Assumptions ใช้ตรงกันทุกที่หรือไม่? [ตรวจ cross-reference]

## 4. Acceptance Criteria Quality (วัดผลได้)

- [x] CHK015 ทุก User Story (US1:5, US2:3, US3:3, US4:4, US5:2) มี Given/When/Then ครบและ numbering เรียงถูกต้องหรือไม่?
- [x] CHK016 Success Criteria วัดผลได้ (5 นาที/10,000 รายการ, 99%, =0, ภายใน 15 นาที/1 ชม.) หรือไม่? [SC-001..007]
- [x] CHK017 SC-001 (performance) และ SC-002 (99% refer_no) เป็น NFR ที่วัดได้จริงหรือไม่?

## 5. Edge Case Coverage

- [x] CHK018 ครอบคลุม: grace_end_date ถูกปรับหลังส่ง, API ล่มทั้งระบบ, สร้าง CSV ไม่สำเร็จ, refer_no ผิดรูปแบบ, วันหยุด, เบอร์ว่างทั้งคู่, ไม่พบ cardNo หรือไม่?
- [x] CHK019 ทุก edge case มี FR รองรับ traceable (เบอร์ว่าง→FR-004a, cardNo→FR-006a, refer_no ผิด→FR-012/US4) หรือไม่?
- [x] CHK020 แยกกรณี "API ล่มทั้งระบบ" (retry→หยุดรอบ) ออกจาก "ผลผิดปกติรายรายการ" (skip+'F') ชัดเจนหรือไม่? [FR-007, Assumptions]

## 6. Non-Functional Requirements

- [x] CHK021 มี performance NFR (SC-001: เสร็จภายใน 5 นาที ต่อ 10,000 รายการ) หรือไม่?
- [x] CHK022 มี reliability NFR (SC-002: 99% ได้ refer_no; SC-005: email ภายใน 15 นาที; SC-006: ซ่อมภายใน 1 ชม.) หรือไม่?
- [!] CHK023 มี NFR ด้าน security/PII (ไฟล์ CSV มี policy_no+เบอร์, endpoint API ภายใน) หรือไม่? [Gap]
- [x] CHK024 ระบุ SLA บริการภายนอก (LINE API 5 วินาที, SMS Gateway 30 วินาที) เป็น assumption ที่ทดสอบได้หรือไม่? [Assumptions]

## 7. Dependencies & Assumptions

- [x] CHK025 ระบุการพึ่งพา DWConsole (3 ตาราง), cisappapi, SMS Gateway, cf_catalog ครบพร้อม assumption ความพร้อมหรือไม่?
- [x] CHK026 assumption เรื่อง config default (ไม่พบ→default 7 วัน) และ audit ของ Manual Batch ระบุไว้หรือไม่?
- [x] CHK027 ระบุการสืบทอดข้อยุติ error/retry/Manual Fix จาก CSMS-001/002 ชัดเจนหรือไม่? [Assumptions]

---

## Gaps Found (สรุปช่องว่างที่ต้องปิดก่อน `/plan`)

| # | ประเด็น | อ้างอิง | ข้อเสนอ |
|---|---------|---------|---------|
| G1 | ไม่มี security/PII NFR ทั้งที่ไฟล์ CSV มี policy_no + เบอร์ลูกค้า | CHK023 | เพิ่ม NFR ป้องกันไฟล์/PII ร่วมกับทั้ง 4 แคมเปญ |
| G2 | endpoint `11.100.8.44` ถูก hardcode ใน FR-006 | CHK010 | ย้ายเป็น config/endpoint นามธรรม เพื่อ maintainability + security |
| G3 | นิยาม "รอบ Due เดียวกัน" ควร cross-check ว่าใช้ตรงกันทุกที่ | CHK014 | ตรวจ FR-008 vs SC-003 vs Assumptions ให้ถ้อยคำตรงกัน |

**สรุป**: spec CSMS-003 มีคุณภาพสูง — Acceptance/SC ครบและวัดผลได้ (มี performance + reliability NFR ที่ CSMS-001/002 ขาด), edge case ครบและ traceable, numbering เรียงถูก ช่องว่างหลักเหลือเพียง **security/PII NFR** และการ hardcode endpoint

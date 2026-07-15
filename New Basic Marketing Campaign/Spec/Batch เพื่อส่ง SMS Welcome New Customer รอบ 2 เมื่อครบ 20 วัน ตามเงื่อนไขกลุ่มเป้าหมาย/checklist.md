# Requirements Quality Checklist — CSMS-002 "Welcome New Customer (Ocean Club)"

**Purpose**: ตรวจสอบ *คุณภาพของ requirement* (spec.md) ก่อนเข้าขั้น `/plan` — "unit test ของตัวข้อกำหนด" ไม่ใช่การทดสอบระบบ
**Feature**: `003-batch-welcome-new-customer-app-sms`
**Created**: 2026-07-10
**Scope**: ความครบถ้วน / ความชัดเจน / ความสอดคล้อง / วัดผลได้ / scenario & edge case / NFR / dependency
**สถานะ**: `[ ]` ยังต้องตรวจ · `[x]` ผ่าน · `[!]` พบช่องว่าง/ต้องแก้ (ดู Gaps)

---

## 1. Requirement Completeness (ความครบถ้วน)

- [x] CHK001 ครอบคลุม flow: ดึงกลุ่มเป้าหมายจาก CSMS-001 → ตรวจ Inforce/เบอร์ → Do Not Contact → ตรวจ 2 ช่องทาง → dedup → สร้างไฟล์ → ส่ง → log 2 ระดับ + เชื่อมโยงรอบแรก → แจ้งเตือน → Manual Fix หรือไม่? [FR-001..FR-020.2]
- [x] CHK002 ระบุ scope 4 ประเภทกรมธรรม์ (ORD/IND/GOV/PA) และเกณฑ์ Inforce ต่อประเภท (ORD/PA='1'; IND/GOV='1','2','3') ชัดเจนหรือไม่? [FR-004]
- [x] CHK003 ระบุการเชื่อมโยง ID กลับรายการรอบแรก (CSMS-001) เป็นข้อกำหนดหรือไม่? [FR-018.1]
- [ ] CHK004 requirement เรื่องรายงานสรุปประจำวันมี FR หมายเลขของตัวเองหรือถูกฝังใน FR อื่น? [!ปัญหา — ดู Gaps G1]
- [x] CHK005 ระบุการเพิ่มฟิลด์ `sent_status` ใน `WELCOME_NEW_CUST_APP` และการบันทึกทุกรายการ (S/F) หรือไม่? [FR-018.2]

## 2. Requirement Clarity (ความชัดเจน)

- [x] CHK006 นิยาม "ครบกำหนด 20 วัน" อ่านจาก config (DATE_COUNT) และปรับได้ ชัดเจนหรือไม่? [FR-003]
- [x] CHK007 เกณฑ์ส่ง SMS (E02+E02 หรือ E00+isBlockLine=true+E02) ระบุครบและไม่กำกวมหรือไม่? [FR-009, FR-010]
- [x] CHK008 ระบุเบอร์ที่ใช้ส่งจริง (mobile1 หลัก, mobile2 สำรอง จากข้อมูลปัจจุบัน ไม่ใช่จากรอบแรก) ชัดเจนหรือไม่? [FR-005]
- [!] CHK009 การ map รหัสประเภทกรมธรรม์ ('O'/'I'/'G'/'P' ตรงตัว) แต่เอกสารต้นทางใช้ '0'/'1' — ความไม่ตรงกันนี้ถูกระบุว่าต้องยืนยันขั้น plan หรือปล่อยกำกวม? [Ambiguity — ดู Gaps G2]

## 3. Requirement Consistency (ความสอดคล้อง)

- [!] CHK010 FR-020.2 รวม 2 เรื่องไว้ในข้อเดียว (การตีความช่วงวันที่ Manual Fix + ข้อกำหนดรายงานประจำวัน) — เป็นการปนข้อกำหนดที่ควรแยกหรือไม่? [Consistency defect — ดู Gaps G1]
- [x] CHK011 การสืบทอดข้อยุติจาก CSMS-001 (error/log/Manual Fix) ระบุ mapping FR ต่อ FR ชัดเจนหรือไม่? [Clarifications, Assumptions]
- [x] CHK012 dedup ระดับลูกค้า (FR-013.1) สอดคล้องกับ CSMS-001 (รายการเก่าสุด, tie-break policy_no) หรือไม่?
- [x] CHK013 กลไกกันส่งซ้ำข้ามรอบ (FR-013: policy_no+policy_type+เบอร์, sms_sent_date NOT NULL) สอดคล้องกับ FR-018.2 หรือไม่?

## 4. Acceptance Criteria Quality (วัดผลได้)

- [x] CHK014 ทุก User Story (US1:6, US2:3, US3:2) มี Given/When/Then ครบหรือไม่?
- [x] CHK015 Success Criteria (SC-001..007) วัดผลได้ (%, =0, ภายใน 15 นาที) หรือไม่?
- [x] CHK016 SC-006 (traceability กลับ CSMS-001 100%) มี FR รองรับ (FR-018.1) หรือไม่?
- [ ] CHK017 มี acceptance scenario สำหรับ "รายงานสรุปประจำวัน" ตรงกับข้อกำหนดที่ฝังใน FR-020.2 หรือไม่? [Gap — ไม่มี US/scenario รายงาน ต่างจาก CSMS-001 US3]

## 5. Edge Case Coverage

- [x] CHK018 ครอบคลุม: เปลี่ยนเบอร์ระหว่าง 20 วัน, ลงทะเบียน App หลังคัดกรองก่อนส่ง, config N ถูกเปลี่ยน, รอบแรกไม่มีข้อมูล หรือไม่?
- [x] CHK019 ครอบคลุมผลตรวจผิดปกติ (E13/ค่าว่าง) และไม่พบ cardNo → skip+'F' หรือไม่?
- [x] CHK020 ทุก edge case มี FR รองรับ traceable (ไม่พบ cardNo→FR-007, E13→FR-011, config→FR-016) หรือไม่?

## 6. Non-Functional Requirements

- [x] CHK021 มีการระบุ volume (~1,000 ราย/วัน) เพื่อออกแบบ batch call หรือไม่? [Clarifications, Assumptions]
- [ ] CHK022 มี performance NFR เชิงเวลา (batch เสร็จภายใน X นาที) หรือไม่? [Gap — ระบุ volume แต่ไม่มีเกณฑ์เวลา]
- [!] CHK023 มี NFR ด้าน security/PII (ไฟล์ CSV มีชื่อ+เบอร์+รางวัล, การเชื่อมโยง cardNo) หรือไม่? [Gap]
- [x] CHK024 SC-005 กำหนด email แจ้งเตือนภายใน 15 นาที — เป็น NFR ด้าน notification latency ที่วัดได้หรือไม่?

## 7. Dependencies & Assumptions

- [x] CHK025 ระบุการพึ่งพา CSMS-001 (ต้องทำงานปกติ+มีข้อมูลครบ) เป็น assumption ชัดเจนหรือไม่? [Assumptions "ระบบต้นน้ำพร้อมใช้"]
- [x] CHK026 assumption เรื่องอักขระรหัส ('O'/'I'/'G'/'P') และฟิลด์ #7 ที่หายไป ระบุว่าต้องตรวจกับโครงสร้างจริงขั้น plan หรือไม่?
- [x] CHK027 ระบุ config แคมเปญ (DATE_COUNT/REWARDS/LINE_LINK ต้อง active) และ template code '111' ครบหรือไม่? [FR-003, FR-014, FR-015]

---

## Gaps Found (สรุปช่องว่างที่ต้องปิดก่อน `/plan`)

| # | ประเด็น | อ้างอิง | ข้อเสนอ |
|---|---------|---------|---------|
| G1 | **FR-020.2 รวม 2 requirement** (การตีความช่วงวันที่ Manual Fix + รายงานประจำวัน) ในข้อเดียว → รายงานสูญเสียหมายเลข FR ของตัวเอง | CHK004, CHK010, CHK017 | แยกส่วนรายงานออกเป็น FR ใหม่ (เช่น FR-021) และเพิ่ม User Story/acceptance scenario รายงาน เทียบ CSMS-001 US3 |
| G2 | รหัสประเภทกรมธรรม์ 'O/I/G/P' (ตรงตัว) vs '0/1' ในเอกสารต้นทาง — ยังไม่ยุติจริง | CHK009 | ยืนยันอักขระรหัสจริงในระบบต้นทางขั้น plan และล็อกลง data contract |
| G3 | ไม่มี performance NFR เชิงเวลา (มีแต่ volume) | CHK022 | เพิ่มเกณฑ์เวลาเสร็จต่อรอบ เทียบ CSMS-003/004 |
| G4 | ไม่มี security/PII NFR | CHK023 | เพิ่ม NFR ป้องกันไฟล์/PII ร่วมกับทั้ง 4 แคมเปญ |

**สรุป**: spec CSMS-002 สืบทอดข้อยุติจาก CSMS-001 ครบ แต่มี **defect เชิงโครงสร้างที่ FR-020.2** (รวม 2 เรื่อง) ซึ่งควรแก้ก่อนเป็นลำดับแรก + ปิดช่องว่างรหัสประเภทกรมธรรม์และ NFR

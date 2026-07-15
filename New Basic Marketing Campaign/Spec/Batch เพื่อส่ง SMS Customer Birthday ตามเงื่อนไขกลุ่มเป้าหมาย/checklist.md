# Requirements Quality Checklist — CSMS-004 "Customer Birthday"

**Purpose**: ตรวจสอบ *คุณภาพของ requirement* (spec.md) ก่อนเข้าขั้น `/plan` — "unit test ของตัวข้อกำหนด" ไม่ใช่การทดสอบระบบ
**Feature**: `005-batch-birthday-sms`
**Created**: 2026-07-10
**Scope**: ความครบถ้วน / ความชัดเจน / ความสอดคล้อง / วัดผลได้ / scenario & edge case / NFR / dependency
**สถานะ**: `[ ]` ยังต้องตรวจ · `[x]` ผ่าน · `[!]` พบช่องว่าง/ต้องแก้ (ดู Gaps)

---

## 1. Requirement Completeness (ความครบถ้วน)

- [x] CHK001 ครอบคลุม flow: คัดกรองวันเกิด → Do Not Contact → คัดช่องทางตัวแทน → map cardNo → ตรวจ 2 ช่องทาง → กันส่งซ้ำ → ดึงของขวัญ/ลิงก์ → สร้างไฟล์ → ส่ง → log → แจ้งเตือน → Manual Fix หรือไม่? [FR-001..FR-014]
- [x] CHK002 ระบุ scope 4 ประเภท (ORD/IND/GOV/PA) + เกณฑ์ Inforce ต่อประเภท + เกณฑ์ช่องทางตัวแทน (title_desc/position_code/policy_org) ครบหรือไม่? [FR-004, FR-006, FR-007]
- [x] CHK003 ระบุคอลัมน์ CSV ตามลำดับ (mobile, var1-3, seq_no, datetime) และ category code '112' ชัดเจนหรือไม่? [FR-010, FR-010b]
- [x] CHK004 ระบุตารางกันส่งซ้ำใหม่ (`CUSTOMER_BIRTHDAY`) + `CSMS_LOG` พร้อม field list หรือไม่? [FR-012, Key Entities]
- [x] CHK005 ครอบคลุมความต่างเฉพาะ batch นี้ (ตรวจ 2 ช่องทาง, 09:00 น., ข้อความระดับลูกค้า) หรือไม่? [Business Context]

## 2. Requirement Clarity (ความชัดเจน)

- [x] CHK006 เกณฑ์เทียบวันเกิด "วัน/เดือน ตรงกับวันประมวลผล ไม่เทียบปี" ชัดเจนหรือไม่? [FR-002]
- [x] CHK007 กรณี 29 ก.พ. ปีไม่อธิกสุรทิน → ส่ง 28 ก.พ. ระบุชัดหรือไม่? [FR-003a, Clarifications]
- [x] CHK008 ตารางเกณฑ์ตรวจ 2 ช่องทาง (LINE/APP combination) ระบุครบทุกชุดและ mutually-exclusive หรือไม่? [FR-009]
- [x] CHK009 dedup ระดับลูกค้า (cardNo, 1 ข้อความ/ลูกค้า/วันเกิดปีนั้น) ระบุชัดและต่างจาก CSMS-003 หรือไม่? [FR-008c]
- [!] CHK010 รหัสประเภทกรมธรรม์ปนกันในไฟล์เดียว — FR-006 ใช้ ORD=`'0'`, FR-009/Key Entities ใช้ `'0'/'I'/'G'/'P'` ปนกับ 'O' ของ CSMS-001/002 — กำกวมหรือไม่? [Ambiguity — ดู Gaps G2]

## 3. Requirement Consistency (ความสอดคล้อง)

- [!] CHK011 Acceptance Scenario ของ US5 เรียงหมายเลขสลับ (1, 6, 7, 2, 3, 4, 5) — การ numbering ผิดลำดับเป็น defect เชิงเอกสารหรือไม่? [Consistency defect — ดู Gaps G1]
- [!] CHK012 FR การกันส่งซ้ำใช้หมายเลข `FR-008b`/`FR-008c` แต่ตัวเลข 008 ถูกจัดกลุ่มไว้ใต้หัวข้อ "การกันส่งซ้ำ" ขณะที่ FR-008 หลัก (map cardNo) อยู่หัวข้ออื่น — ลำดับหมายเลข FR สับสนหรือไม่? [Numbering — ดู Gaps G3]
- [x] CHK013 นิยาม `sms_sent_date` (DATE แต่ตัวอย่างเป็น timestamp, ใช้เทียบปีปัจจุบันกันส่งซ้ำ) ระบุการตีความไว้ใน Assumptions หรือไม่?
- [x] CHK014 GOV อยู่ใน scope ทุกขั้นคัดกรองแม้ตัวอย่างตารางยกเฉพาะ ORD/IND/PA — ระบุว่า GOV MUST ถูกบันทึกด้วยหรือไม่? [Assumptions]

## 4. Acceptance Criteria Quality (วัดผลได้)

- [ ] CHK015 ทุก User Story (US1:5, US2:5, US3:3, US4:5, US5:7) มี Given/When/Then ครบและ **numbering เรียงถูกต้อง** หรือไม่? [!US5 ผิดลำดับ — ดู Gaps G1]
- [x] CHK016 Success Criteria (SC-001..008) วัดผลได้ (5 นาที/10,000, 99%, =0, 100%, ภายใน 15 นาที/1 ชม.) หรือไม่?
- [x] CHK017 SC-008 (จำกัดกลุ่มเป้าหมายถูกต้อง 100% รวมช่องทางตัวแทน) มี FR รองรับ (FR-006/007/009) หรือไม่?

## 5. Edge Case Coverage

- [x] CHK018 ครอบคลุม: 29 ก.พ., หลายกรมธรรม์/ลูกค้าเดียว, เบอร์ว่างทั้งคู่, ไม่พบของขวัญ/ลิงก์ config, ไม่พบ template, App API ล่ม, วันหยุด, ประมวลผลข้ามเที่ยงคืน หรือไม่?
- [x] CHK019 ทุก edge case มี FR รองรับ traceable (29 ก.พ.→FR-003a, config ว่าง→FR-010a, dedup→FR-008c) หรือไม่?
- [x] CHK020 กรณี config ของขวัญ/ลิงก์ไม่ active → MUST NOT ส่งข้อความตัวแปรว่าง (skip+บันทึก+แจ้งเตือน) ระบุชัดหรือไม่? [FR-010a]

## 6. Non-Functional Requirements

- [x] CHK021 มี performance NFR (SC-001: เสร็จภายใน 5 นาที ต่อ 10,000 รายการ) หรือไม่?
- [x] CHK022 มี reliability NFR (SC-002: 99% refer_no; SC-006: email ภายใน 15 นาที; SC-007: ซ่อมภายใน 1 ชม.) หรือไม่?
- [!] CHK023 มี NFR ด้าน security/PII (ไฟล์ CSV มี fname+เบอร์+ของขวัญ, cardNo=เลขบัตรประชาชน) หรือไม่? [Gap — สำคัญเป็นพิเศษเพราะ FR-008 ระบุ cardNo = เลขบัตรประชาชน]
- [x] CHK024 ระบุ SLA บริการภายนอก (cisappapi 5 วินาที, SMS Gateway 30 วินาที) หรือไม่? [Assumptions]

## 7. Dependencies & Assumptions

- [x] CHK025 ระบุการพึ่งพา DWConsole (policy_master/remark/agent_master), cisappapi (2 operation), cf_catalog ครบหรือไม่?
- [x] CHK026 assumption เรื่อง category code '112' (แก้ข้อผิดพลาด '113' จากต้นทาง), ชื่อฟิลด์วันเกิด (birthdate=birthday), ชื่อตาราง (CUSTOMER_BIRTHDAY) ระบุชัดหรือไม่?
- [x] CHK027 ระบุการสืบทอดข้อยุติจาก CSMS-001/002/003 และการไม่รวมช่องทาง WEB ในการตัดสินใจ หรือไม่? [Assumptions]

---

## Gaps Found (สรุปช่องว่างที่ต้องปิดก่อน `/plan`)

| # | ประเด็น | อ้างอิง | ข้อเสนอ |
|---|---------|---------|---------|
| G1 | **Acceptance Scenario US5 numbering สลับ** (1, 6, 7, 2, 3, 4, 5) — อ่านยาก เสี่ยงตกหล่นตอนแปลงเป็น test case | CHK011, CHK015 | เรียงหมายเลขใหม่ให้ต่อเนื่อง 1–7 |
| G2 | รหัสประเภทกรมธรรม์ปนกัน ('0' ORD ใน FR-006 vs 'O'/'I'/'G'/'P' ที่อื่น) — ยังไม่ยุติ (ประเด็นร่วมกับ CSMS-002) | CHK010 | ล็อก data contract อักขระรหัสจริงขั้น plan ให้ตรงกันทั้ง 4 แคมเปญ |
| G3 | หมายเลข FR การกันส่งซ้ำ (FR-008b/008c) แทรกหลัง FR-009/010 ทำให้ลำดับสับสน | CHK012 | จัดหมายเลข FR เรียงตามลำดับ flow หรือ renumber |
| G4 | ไม่มี security/PII NFR — วิกฤตกว่าแคมเปญอื่นเพราะ cardNo = เลขบัตรประชาชน + ไฟล์มีชื่อ/เบอร์/ของขวัญ | CHK023 | เพิ่ม NFR ป้องกัน PII (การเข้ารหัสไฟล์, การเข้าถึง, การจัดเก็บเลขบัตร) — ควรทำเป็น NFR ร่วมทั้งโมดูล CSMS |

**สรุป**: spec CSMS-004 ครอบคลุมตรรกะเฉพาะตัว (2 ช่องทาง, 29 ก.พ., ช่องทางตัวแทน) ครบและมี performance/reliability NFR แต่มี **defect เชิงเอกสาร 2 จุด** (US5 numbering สลับ, FR numbering สับสน) และ **security/PII NFR ที่ขาดซึ่งวิกฤตเป็นพิเศษ** เพราะจัดการเลขบัตรประชาชน — แก้ G1/G3 (เอกสาร) ได้ทันที, G2/G4 ทำร่วมทั้งโมดูล

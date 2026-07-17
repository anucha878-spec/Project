# Feature Specification: UR 20260040 Improvement for OIC Timeline (ปรับปรุง R-Report)

**Feature Branch**: `003-oic-r-report`

**Created**: 2026-06-25

**Status**: Draft

**Input**: Redmine Main Task [#82562](https://redmine.ochi.link/issues/82562) — "Main Task — UR 20260040 Improvement for OIC timeline (ปรับปรุง R- Report)" และ Subtasks ทั้งหมด (#82566, #82576, #82580, #82581, #82583, #82584, #82585, #82586)

---

## Context & Source of Truth

ระบบ **RCC (Reconcile/Regulatory Closing)** ผลิตรายงานชุด **R-Report** เพื่อนำส่งสำนักงานคณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัย (**OIC / คปภ.**) ตาม Timeline ที่กฎหมายกำหนด งานปรับปรุงนี้แก้ไขรายงาน 4 ตระกูล:

| Report Family | รายงานปกติ | รายงาน ACC | Redmine Subtask | สถานะต้นทาง |
|---|---|---|---|---|
| R05 | R05 | R05ACC | [#82566](https://redmine.ochi.link/issues/82566) (+DB [#82583](https://redmine.ochi.link/issues/82583), [#82584](https://redmine.ochi.link/issues/82584)) | Resolved |
| R06 | R06 | R06ACC | [#82576](https://redmine.ochi.link/issues/82576) (+DB [#82585](https://redmine.ochi.link/issues/82585), [#82586](https://redmine.ochi.link/issues/82586)) | In Progress |
| R02 | R02 | R02ACC | [#82580](https://redmine.ochi.link/issues/82580) | New |
| R14 | — | R14ACC | [#82581](https://redmine.ochi.link/issues/82581) | New (รายละเอียดยังไม่ครบ) |

**Reference specs (ภายใน):** wiki.thaisamut.co.th (หน้า viewpage ตาม subtask) และตารางข้อมูล tx_rcc_reconcile_r05/r06, tx_rcc_adj_r05/r06.

**ผลกระทบเชิงเวลา (Period gating):** การยกเลิกเงื่อนไข Cost Center 830044 (ดู FR-013) ให้ **เริ่มมีผลตั้งแต่ Period 2027/01** เป็นต้นไป Period ก่อนหน้าต้องให้ผลลัพธ์เดิมไม่เปลี่ยน

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — R05/R05ACC สะท้อน GL Code และ Receive Payment Type ครบถ้วน (Priority: P1)

ทีม RCC/บัญชี ประมวลผลรายงาน R05 และ R05ACC ของงวดที่กำหนด ระบบต้องดึง GL Code ที่เพิ่มใหม่ แยกชุด GL ระหว่าง R05 กับ R05ACC อย่างถูกต้อง บันทึกค่า Receive Payment Type และจัดกลุ่ม (grouping) ตามคอลัมน์ที่เพิ่ม แล้ว Export ไฟล์ Excel R05ACC โดยมีคอลัมน์ Receive Payment Type ทั้ง 2 sheet

**Why this priority**: เป็น subtask ที่ Resolved แล้วและเป็นต้นแบบ (pattern) ของ R06 ต้องยืนยันความถูกต้องก่อนนำส่ง OIC; ผิดพลาดด้าน GL/ยอดเงินกระทบการกำกับโดยตรง

**Independent Test**: รัน R05 และ R05ACC ด้วยข้อมูลงวดตัวอย่าง (อ้างอิงไฟล์ตัวอย่าง R05ACC_202601_to_202601) แล้วเทียบ GL Code, ยอดเงิน, การ grouping และคอลัมน์ใน Excel กับ spec

**Acceptance Scenarios**:

1. **Given** มีรายการ GL Code 14011000 ในงวด **When** ประมวลผล R05 **Then** R05 ดึง GL 14011000 เข้ารายงาน และชุด GL ของ R05 ไม่ปนกับ R05ACC
2. **Given** มีรายการ GL 14011000, 14012000, 14013000, 21540005, 21540010, 21540015, 21540006 ในงวด **When** ประมวลผล R05ACC **Then** R05ACC ดึง GL ทั้ง 7 รายการเข้ารายงาน
3. **Given** GL 14011000 ผูก event code ML-0009 และ ML-0010 ใน config `cf_r05_gl_mapping` **When** ประมวลผล **Then** ยอดถูก map เข้าทั้ง `totalpremium_amount` และ `unallocated_premium`
4. **Given** รายการมีค่า Receive Payment Type **When** บันทึกลง tx_rcc_reconcile_r05 และ tx_rcc_adj_r05 **Then** field `receive_payment_type` ถูกบันทึก และเป็นหนึ่งใน Grouping Column
5. **Given** ประมวลผล R05ACC เสร็จ **When** Export Excel **Then** ทั้ง Sheet 1 และ Sheet 2 มีคอลัมน์ "Receive Payment Type"

---

### User Story 2 — R06/R06ACC รองรับ GL ใหม่ และเงื่อนไข Cost Center ตาม Period (Priority: P1)

ทีม RCC ประมวลผล R06 และ R06ACC ระบบต้องดึง GL ใหม่ (R06: 23521000; R06ACC: 23521000, 15531015) แยกชุด GL R06/R06ACC, รองรับ config `cf_rcc_gl_mapping` สำหรับ GL 23521000, บันทึก Receive Payment Type + grouping, Export Excel R06ACC มีคอลัมน์ Receive Payment Type และยกเลิกเงื่อนไข Cost Center 830044 สำหรับ GL 50551218/50551219/50551221 **ตั้งแต่ Period 2027/01**

**Why this priority**: subtask อยู่ระหว่างพัฒนา (In Progress) เป็นงานหลักของรอบนี้ และมีผลโดยตรงต่อยอดส่ง OIC

**Independent Test**: รัน R06/R06ACC ด้วยข้อมูลที่มี GL ใหม่และ Cost Center 830044 ในงวดก่อน/หลัง 2027/01 แล้วเทียบผลลัพธ์

**Acceptance Scenarios**:

1. **Given** มี GL 23521000 ในงวด **When** ประมวลผล R06 **Then** R06 ดึง GL 23521000 เข้ารายงาน
2. **Given** มี GL 23521000 และ 15531015 ในงวด **When** ประมวลผล R06ACC **Then** R06ACC ดึงทั้ง 2 GL เข้ารายงาน
3. **Given** งวด = 2026/12 และมีรายการ GL 50551218/50551219/50551221 ที่ Cost Center 830044 **When** ประมวลผล R06 **Then** ใช้เงื่อนไขเดิม (รายการที่เข้าเกณฑ์ถูกตัดออก) — ผลลัพธ์ไม่เปลี่ยนจากของเดิม
4. **Given** งวด = 2027/01 และมีรายการ GL 50551218/50551219/50551221 ที่ Cost Center 830044 **When** ประมวลผล R06/R06ACC **Then** ยกเลิกเงื่อนไขตัดออก — รายการถูกประมวลผลตามปกติ
5. **Given** ประมวลผล R06ACC เสร็จ **When** Export Excel **Then** Sheet 1 และ Sheet 2 มีคอลัมน์ "Receive Payment Type"

---

### User Story 3 — R02/R02ACC ปรับเงื่อนไข Cost Center ตาม Period (Priority: P2)

ทีม RCC ประมวลผล R02/R02ACC ซึ่ง **ใช้ตาราง GL Code ร่วมกัน (ไม่แยกชุด)** ระบบต้องยกเลิกเงื่อนไข Cost Center 830044 สำหรับ GL 50551218/50551219/50551221 ตั้งแต่ Period 2027/01

**Why this priority**: ขอบเขตเล็กกว่า (เฉพาะเงื่อนไข Cost Center) และ subtask ยังเป็น New

**Independent Test**: รัน R02/R02ACC ก่อน/หลัง Period 2027/01 ด้วยรายการ Cost Center 830044 แล้วเทียบผล

**Acceptance Scenarios**:

1. **Given** งวด < 2027/01 **When** ประมวลผล R02/R02ACC **Then** ใช้เงื่อนไข Cost Center เดิม
2. **Given** งวด ≥ 2027/01 **When** ประมวลผล R02/R02ACC **Then** ยกเลิกเงื่อนไขตัดออก รายการประมวลผลตามปกติ
3. **Given** R02 และ R02ACC **When** ตรวจชุด GL Code **Then** ทั้งสองใช้ตาราง GL Code เดียวกัน (ไม่มีการแยก)

---

### User Story 4 — โครงสร้างตารางรองรับ Receive Payment Type และค่า NULL (Priority: P1, Enabler)

DBA ปรับโครงสร้างตาราง tx_rcc_reconcile_r05/r06 และ tx_rcc_adj_r05/r06 ให้มี field `receive_payment_type` และให้ `disclosure_type`, `plan_code` รับค่า NULL ได้ เพื่อรองรับ logic การบันทึกใหม่

**Why this priority**: เป็น Enabler — User Story 1 และ 2 ทำงานไม่ได้ถ้า schema ยังไม่พร้อม

**Independent Test**: ตรวจ schema หลัง migration และทดสอบ insert ที่มี receive_payment_type และที่ disclosure_type/plan_code เป็น NULL

**Acceptance Scenarios**:

1. **Given** migration ทำงานบนตาราง 4 ตาราง **When** ตรวจ schema **Then** มี column `receive_payment_type` และ `disclosure_type`/`plan_code` เป็น nullable
2. **Given** บันทึกแถวที่ `disclosure_type` = NULL และ `plan_code` = NULL **When** insert **Then** บันทึกสำเร็จไม่ติด constraint
3. **Given** ข้อมูลเดิมก่อน migration **When** migration เสร็จ **Then** ข้อมูลเดิมยังครบถ้วน (ไม่สูญหาย/ไม่เพี้ยน)

---

### User Story 5 — R14ACC Improvement (Priority: P3)

ปรับปรุงรายงาน RCC R14ACC ตาม Redmine #82581

**Why this priority**: รายละเอียดข้อกำหนดใน Redmine ยังไม่ครบ ("ปรับปรุง RCC R14 ดังนี้" โดยไม่มีรายการย่อย)

**Independent Test**: รอข้อกำหนดที่ชัดเจนก่อนกำหนด acceptance criteria

**Acceptance Scenarios**:

1. [NEEDS CLARIFICATION: รายละเอียดการปรับปรุง R14ACC (#82581) ยังไม่ระบุใน Redmine — ต้องการ scope ที่ชัดเจน เช่น GL Code ที่เพิ่ม/เงื่อนไข/คอลัมน์ Excel หรือไม่]

---

### Edge Cases

- งวดที่ไม่มีรายการ GL ที่เพิ่มใหม่เลย → รายงานต้องประมวลผลผ่านโดยไม่ error และไม่มีแถวผิดปกติ
- รายการที่ `disclosure_type` หรือ `plan_code` เป็น NULL → ต้องไม่ทำให้ grouping/ผลรวมผิด
- งวดคาบเกี่ยว Period 2027/01 พอดี (boundary) → เงื่อนไข Cost Center ต้องสลับพฤติกรรมที่งวด 2027/01 ไม่ใช่ก่อนหรือหลัง
- GL 14011000 มีทั้ง event code ML-0009 และ ML-0010 ในงวดเดียว → ยอดต้อง map ครบทั้ง totalpremium_amount และ unallocated_premium โดยไม่นับซ้ำ
- รายการที่มี Cost Center 830044 แต่ไม่ได้ขึ้นต้นด้วย 1–7 → พฤติกรรมต้องคงเดิมทั้งก่อนและหลัง 2027/01
- การ Export Excel เมื่อไม่มีข้อมูล → ยังต้องมี header คอลัมน์ Receive Payment Type ครบ

## Requirements *(mandatory)*

### Functional Requirements

**GL Code Extraction & Splitting**
- **FR-001**: ระบบ MUST แยกชุดรายการ GL Code ระหว่างรายงานปกติกับรายงาน ACC สำหรับ R05/R05ACC และ R06/R06ACC (R02/R02ACC ใช้ชุดร่วมกัน — ไม่แยก)
- **FR-002**: R05 MUST ดึง GL Code 14011000 เพิ่ม
- **FR-003**: R05ACC MUST ดึง GL Code 14011000, 14012000, 14013000, 21540005, 21540010, 21540015, 21540006 เพิ่ม
- **FR-004**: R06 MUST ดึง GL Code 23521000 เพิ่ม
- **FR-005**: R06ACC MUST ดึง GL Code 23521000 และ 15531015 เพิ่ม

**GL Mapping Configuration**
- **FR-006**: Config `cf_r05_gl_mapping` MUST รองรับ GL Code 14011000 โดย map เข้าทั้ง `totalpremium_amount` และ `unallocated_premium` และเพิ่ม event code ML-0009, ML-0010
- **FR-007**: Config `cf_rcc_gl_mapping` MUST รองรับ GL Code 23521000 (สำหรับ R06/R06ACC)

**Data Persistence & Schema**
- **FR-008**: ตาราง tx_rcc_reconcile_r05, tx_rcc_adj_r05, tx_rcc_reconcile_r06, tx_rcc_adj_r06 MUST มี field `receive_payment_type`
- **FR-009**: ใน 4 ตารางข้างต้น field `disclosure_type` และ `plan_code` MUST รับค่า NULL ได้
- **FR-010**: Logic การบันทึกข้อมูล (R05/R06 ทั้ง reconcile และ adj) MUST บันทึกค่า `Receive Payment Type`, เพิ่มเงื่อนไขใน `Disclosure Type` และ `Plan Code`, และเพิ่ม `Receive Payment Type` เป็น Grouping Column

**Report Output (Excel Export)**
- **FR-011**: Excel export ของ R05ACC MUST มีคอลัมน์ "Receive Payment Type" ทั้ง Sheet 1 และ Sheet 2
- **FR-012**: Excel export ของ R06ACC MUST มีคอลัมน์ "Receive Payment Type" ทั้ง Sheet 1 และ Sheet 2

**Period-Gated Business Rule**
- **FR-013**: สำหรับ GL Code 50551218, 50551219, 50551221 ในรายงาน R02, R02ACC, R06, R06ACC ระบบ MUST ยกเลิกเงื่อนไขตรวจสอบเดิม ("หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ") โดย **เริ่มมีผลตั้งแต่ Period 2027/01** เป็นต้นไป Period ก่อนหน้าต้องคงพฤติกรรมเดิม

**Regression Safety**
- **FR-014**: การเปลี่ยนแปลงทั้งหมด MUST ไม่ทำให้ผลลัพธ์ของ Period ก่อน 2027/01 และของ GL Code ที่ไม่เกี่ยวข้องเปลี่ยนไป (no regression)
- **FR-015**: R14ACC — [NEEDS CLARIFICATION: ขอบเขตการปรับปรุงยังไม่ระบุใน Redmine #82581]

**Compliance with Project Standards** (อ้างอิง `docs/standard-practice.md`, `CONSTITUTION.md`)
- **FR-016**: ทุกวันที่ที่แสดงบนรายงาน/Excel export MUST เป็นพุทธศักราช (พ.ศ., DD/MM/YYYY) ส่วนที่เก็บใน DB คงเป็น ค.ศ. (ISO 8601)
- **FR-017**: ตัวเลขการเงินทุกค่าในรายงาน MUST ใช้ประเภทข้อมูลความแม่นยำสูง (DB: NUMERIC(15,2), Backend: BigDecimal) ห้ามใช้ float/double
- **FR-018**: รายงานทุกฉบับ MUST แสดง ชื่อรายงาน, เงื่อนไขการค้นหา (งวด/ช่วงเวลา), ชื่อผู้พิมพ์และวันเวลาที่พิมพ์ ตามมาตรฐาน Report

### Key Entities

- **tx_rcc_reconcile_r05 / r06**: ตารางพักผล reconcile ของ R05/R06 — เพิ่ม `receive_payment_type`; `disclosure_type`, `plan_code` เป็น nullable
- **tx_rcc_adj_r05 / r06**: ตารางรายการปรับปรุง (adjustment) ของ R05/R06 — โครงสร้างเดียวกับ reconcile ข้างต้น
- **cf_r05_gl_mapping**: config map GL Code → amount bucket + event code สำหรับ R05
- **cf_rcc_gl_mapping**: config map GL Code สำหรับ R06 (และ RCC ทั่วไป)
- **GL Code**: รหัสบัญชีแยกประเภทที่กำหนดว่ารายการใดเข้ารายงานใด
- **Receive Payment Type**: ประเภทการรับชำระ — field/column ใหม่ที่ต้องบันทึกและแสดงใน Excel
- **R05ACC / R06ACC Excel File**: ไฟล์นำส่งแบบ 2 sheet

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: รายงาน R05, R05ACC, R06, R06ACC, R02, R02ACC ที่ปรับปรุงแล้วให้ผลลัพธ์ตรงกับไฟล์/spec ตัวอย่าง 100% ของรายการ GL ที่ระบุ (0 รายการคลาดเคลื่อน)
- **SC-002**: รายการ GL Code ที่เพิ่มใหม่ทั้งหมด (14011000, 14012000, 14013000, 21540005/10/15, 21540006, 23521000, 15531015) ปรากฏในรายงานที่ถูกต้องครบ 100%
- **SC-003**: เงื่อนไข Cost Center 830044 ให้ผลเดิมในงวด ≤ 2026/12 และให้ผลใหม่ในงวด ≥ 2027/01 ครบทุกรายงาน (R02/R02ACC/R06/R06ACC) โดยไม่มี false switch
- **SC-004**: Excel export R05ACC และ R06ACC มีคอลัมน์ Receive Payment Type ครบทั้ง 2 sheet และค่าตรงกับข้อมูลในตาราง 100%
- **SC-005**: ไม่มี regression — ผลลัพธ์ของ Period และ GL ที่ไม่อยู่ในขอบเขตงานนี้ไม่เปลี่ยนแปลง (เทียบ baseline ก่อน/หลัง = เท่ากัน)
- **SC-006**: รายงาน/Export แต่ละฉบับประมวลผลเสร็จภายใน ≤ 30 วินาที ตาม SLA รายงาน (มาตรา 1, standard-practice)

## Assumptions

- ไฟล์ตัวอย่างและ spec บน wiki.thaisamut.co.th และ Google Sheets ที่อ้างใน Redmine เป็น source of truth สำหรับค่าที่คาดหวัง
- "Period" หมายถึงงวดบัญชีในรูปแบบ YYYY/MM (เช่น 2027/01 = มกราคม 2027 ค.ศ.) ตามที่ระบุใน Redmine
- โครงสร้างและ pattern ของ R05 (Resolved แล้ว) ใช้เป็นแม่แบบสำหรับ R06
- R02/R02ACC ใช้ตาราง GL Code ร่วมกัน ตามที่ระบุชัดใน #82580 ("R02 และ R02ACC ยังใช้ตาราง GL Code อันเดียวกัน ไม่มีปรับแยก")
- การปรับ schema (DB subtasks) จะถูก deploy ก่อน logic การบันทึก เพื่อให้ field พร้อมใช้
- ขอบเขตงานนี้คือการ "ปรับปรุงรายงานที่มีอยู่" ไม่ใช่สร้างรายงานใหม่ และไม่รวมการเปลี่ยน Timeline การนำส่ง OIC เอง
- R14ACC จะถูกกำหนด scope เพิ่มเติมเมื่อ Redmine #82581 มีรายละเอียดครบ

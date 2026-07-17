# UR 20260040 OIC R-Report Improvement — SIT Test Scenarios & Feature Categories
# Spec Source  : specs/003-oic-r-report/spec.md (จาก Redmine #82562 + subtasks)
# Standard     : BDD Gherkin (Given-When-Then)
# References   : docs/standard-practice.md, CONSTITUTION.md
# Coverage     : 6 Dimensions — Positive · Negative/Validation · Edge/Boundary · Idempotency/Re-run · Security/PII · Regression/Side-Effects
# Created      : 2026-06-25
# Feature Dir  : specs/003-oic-r-report/

---

## ส่วนที่ 0 — SIT Feature Category Map (สิ่งที่ร้องขอ: แยก Feature Category)

แบ่งงานทดสอบ SIT ออกเป็น **8 Feature Categories** โดย map กับ Functional Requirements และ Redmine subtasks ดังนี้

| # | SIT Feature Category | ครอบคลุม FR | Redmine Subtask | รายงานที่กระทบ | ความสำคัญ |
|---|----------------------|-------------|-----------------|----------------|-----------|
| **FC-1** | GL Code Extraction & Splitting | FR-001…FR-005 | #82566, #82576, #82580 | R02, R05, R06 (+ACC) | P1 |
| **FC-2** | GL Mapping Configuration | FR-006, FR-007 | #82566, #82576 | R05, R06 (+ACC) | P1 |
| **FC-3** | Database Schema Migration | FR-008, FR-009 | #82583, #82584, #82585, #82586 | tx_rcc_*_r05/r06 | P1 (Enabler) |
| **FC-4** | Data Persistence & Grouping Logic | FR-010 | #82566, #82576 | R05, R06 (+ACC) | P1 |
| **FC-5** | Excel Export / Report Output | FR-011, FR-012 | #82566, #82576 | R05ACC, R06ACC | P1 |
| **FC-6** | Period-Gated Cost Center Rule (830044) | FR-013 | #82576, #82580 | R02, R02ACC, R06, R06ACC | P1 |
| **FC-7** | Regression & Standards Compliance | FR-014, FR-016, FR-017, FR-018 | ทุก subtask | ทุกรายงาน | P1 |
| **FC-8** | R14ACC Improvement | FR-015 | #82581 | R14ACC | P3 (Blocked — รอ scope) |

> **หมายเหตุ FC-8**: ยังกำหนด Test Case ไม่ได้จนกว่า Redmine #82581 จะมีรายละเอียด — ดูส่วนท้าย

---

## ส่วนที่ 1 — Test Matrix Summary Table

| ID | Feature Category | Test Scenario Name | Dimension | Priority | Target Level |
|----|------------------|--------------------|-----------|----------|--------------|
| TC-001 | FC-1 GL Extraction | R05 ดึง GL 14011000 เพิ่มเข้ารายงาน | Positive | P1 | Integration |
| TC-002 | FC-1 GL Extraction | R05ACC ดึง GL ใหม่ครบ 7 รายการ | Positive | P1 | Integration |
| TC-003 | FC-1 GL Extraction | ชุด GL ของ R05 กับ R05ACC แยกจากกัน ไม่ปนกัน | Positive | P1 | Integration |
| TC-004 | FC-1 GL Extraction | R06 ดึง GL 23521000 เพิ่ม | Positive | P1 | Integration |
| TC-005 | FC-1 GL Extraction | R06ACC ดึง GL 23521000 และ 15531015 | Positive | P1 | Integration |
| TC-006 | FC-1 GL Extraction | R02/R02ACC ใช้ตาราง GL ร่วมกัน (ไม่แยก) | Positive | P2 | Integration |
| TC-007 | FC-1 GL Extraction | GL ที่ไม่อยู่ในขอบเขตไม่ถูกดึงเพิ่ม/หาย | Negative | P1 | Integration |
| TC-008 | FC-2 GL Mapping | GL 14011000 map เข้า totalpremium_amount และ unallocated_premium | Positive | P1 | Integration |
| TC-009 | FC-2 GL Mapping | เพิ่ม event code ML-0009, ML-0010 ใน cf_r05_gl_mapping | Positive | P1 | Unit |
| TC-010 | FC-2 GL Mapping | cf_rcc_gl_mapping รองรับ GL 23521000 | Positive | P1 | Unit |
| TC-011 | FC-2 GL Mapping | GL 14011000 มีทั้ง ML-0009 และ ML-0010 ในงวดเดียว ไม่นับยอดซ้ำ | Edge | P1 | Integration |
| TC-012 | FC-3 Schema | 4 ตารางมี column receive_payment_type หลัง migration | Positive | P1 | Unit |
| TC-013 | FC-3 Schema | disclosure_type / plan_code รับค่า NULL ได้ | Positive | P1 | Unit |
| TC-014 | FC-3 Schema | Insert แถวที่ disclosure_type=NULL, plan_code=NULL สำเร็จ | Positive | P1 | Integration |
| TC-015 | FC-3 Schema | ข้อมูลเดิมก่อน migration ยังครบถ้วน (no data loss) | Regression | P1 | Integration |
| TC-016 | FC-3 Schema | Rollback migration กลับสู่สถานะเดิมได้ | Negative | P2 | Integration |
| TC-017 | FC-4 Persistence | บันทึก receive_payment_type ลง tx_rcc_reconcile_r05 | Positive | P1 | Integration |
| TC-018 | FC-4 Persistence | บันทึก receive_payment_type ลง tx_rcc_adj_r05 | Positive | P1 | Integration |
| TC-019 | FC-4 Persistence | Grouping Column รวม receive_payment_type — ยอดจัดกลุ่มถูกต้อง | Positive | P1 | Integration |
| TC-020 | FC-4 Persistence | เงื่อนไขใหม่ของ Disclosure Type / Plan Code ทำงานถูกต้อง | Positive | P1 | Integration |
| TC-021 | FC-4 Persistence | แถว receive_payment_type ต่างกันไม่ถูกยุบรวมผิด | Negative | P1 | Integration |
| TC-022 | FC-4 Persistence | reconcile_r06 / adj_r06 บันทึกครบเหมือน R05 | Positive | P1 | Integration |
| TC-023 | FC-5 Excel | R05ACC Sheet 1 มีคอลัมน์ Receive Payment Type | Positive | P1 | E2E |
| TC-024 | FC-5 Excel | R05ACC Sheet 2 มีคอลัมน์ Receive Payment Type | Positive | P1 | E2E |
| TC-025 | FC-5 Excel | R06ACC Sheet 1 และ 2 มีคอลัมน์ Receive Payment Type | Positive | P1 | E2E |
| TC-026 | FC-5 Excel | ค่าใน Excel ตรงกับข้อมูลใน tx_rcc table 100% | Positive | P1 | E2E |
| TC-027 | FC-5 Excel | Export เมื่อไม่มีข้อมูล ยังมี header คอลัมน์ครบ | Edge | P2 | Integration |
| TC-028 | FC-5 Excel | คอลัมน์/ลำดับ sheet เดิมไม่ถูกย้าย/หาย (เทียบ template) | Regression | P1 | E2E |
| TC-029 | FC-6 Period Rule | งวด 2026/12 ใช้เงื่อนไข Cost Center 830044 เดิม (ตัดออก) | Positive | P1 | Integration |
| TC-030 | FC-6 Period Rule | งวด 2027/01 ยกเลิกเงื่อนไข — รายการประมวลผลปกติ | Positive | P1 | Integration |
| TC-031 | FC-6 Period Rule | Boundary: พฤติกรรมสลับที่งวด 2027/01 พอดี | Edge/Boundary | P1 | Integration |
| TC-032 | FC-6 Period Rule | Cost Center 830044 ที่ไม่ขึ้นต้น 1–7 พฤติกรรมคงเดิมทั้งก่อน/หลัง | Negative | P1 | Integration |
| TC-033 | FC-6 Period Rule | กฎมีผลครบทั้ง R02, R02ACC, R06, R06ACC สำหรับ GL 50551218/19/21 | Positive | P1 | Integration |
| TC-034 | FC-6 Period Rule | GL อื่นที่ Cost Center 830044 ไม่ถูกกระทบจากกฎนี้ | Negative | P2 | Integration |
| TC-035 | FC-7 Standards | วันที่บนรายงาน/Excel แสดงเป็น พ.ศ. (DD/MM/YYYY) | Security/Compliance | P1 | E2E |
| TC-036 | FC-7 Standards | ตัวเลขการเงินใช้ความแม่นยำสูง (ไม่มี rounding error) | Regression | P1 | Integration |
| TC-037 | FC-7 Standards | รายงานแสดง ชื่อรายงาน/เงื่อนไข/ผู้พิมพ์/วันเวลา ครบ | Positive | P2 | E2E |
| TC-038 | FC-7 Standards | PII (ถ้ามีในรายงาน) ถูก mask ตามมาตรฐาน | Security/PII | P2 | Integration |
| TC-039 | FC-7 Standards | Re-run งวดเดิมให้ผลเท่าเดิม (idempotent) | Idempotency/Re-run | P1 | Integration |
| TC-040 | FC-7 Standards | Baseline ก่อน/หลัง deploy ของ Period/GL นอกขอบเขต = เท่ากัน | Regression | P1 | E2E |
| TC-041 | FC-7 Standards | รายงาน/Export เสร็จภายใน ≤ 30 วินาที (SLA) | Performance | P2 | E2E |

**Total: 41 Test Cases** ใน 7 Feature Categories ที่ทดสอบได้ (FC-8 รอ scope)
**Priority: P1 = 31, P2 = 9, P3 = 1(blocked)**
**Dimension: Positive 19 · Negative 6 · Edge/Boundary 3 · Regression 5 · Security/Compliance 3 · Idempotency 1 · Performance 1 + Schema/Enabler**

---

## ส่วนที่ 2 — BDD Gherkin Scenarios แยกตาม Feature Category

# ═══════════════════════════════════════════════════════════════
# FC-1 : GL CODE EXTRACTION & SPLITTING (FR-001…FR-005)
# ═══════════════════════════════════════════════════════════════

Feature: GL Code Extraction and R / ACC Splitting
  As ทีม RCC ที่จัดทำรายงานส่ง OIC
  I want ระบบดึง GL Code ที่ถูกต้องและแยกชุดระหว่างรายงานปกติกับ ACC
  So that ยอดในรายงานแต่ละฉบับครบถ้วนและไม่ปนข้ามรายงาน

  Background:
    Given มีงวดทดสอบที่มีรายการเคลื่อนไหวของ GL Code ครบทุกชนิดที่เกี่ยวข้อง

  # TC-001
  Scenario: [TC-001] R05 ดึง GL 14011000 เพิ่มเข้ารายงาน
    Given มีรายการบัญชี GL Code "14011000" ในงวด
    When ประมวลผลรายงาน R05
    Then รายการ GL "14011000" ปรากฏในผลลัพธ์ R05
    And ยอดของ GL "14011000" ถูกรวมตามนิยามของ R05

  # TC-002
  Scenario: [TC-002] R05ACC ดึง GL ใหม่ครบ 7 รายการ
    Given มีรายการ GL "14011000","14012000","14013000","21540005","21540010","21540015","21540006" ในงวด
    When ประมวลผลรายงาน R05ACC
    Then GL ทั้ง 7 รายการปรากฏใน R05ACC ครบถ้วน

  # TC-003
  Scenario: [TC-003] ชุด GL ของ R05 กับ R05ACC แยกจากกัน
    Given GL "14012000" ถูกกำหนดให้อยู่เฉพาะชุดของ R05ACC
    When ประมวลผล R05 และ R05ACC ในงวดเดียวกัน
    Then GL "14012000" ปรากฏใน R05ACC
    And GL "14012000" ไม่ปรากฏใน R05
    And ชุด GL ของสองรายงานถูกดึงแยกตาม config คนละชุด

  # TC-004
  Scenario: [TC-004] R06 ดึง GL 23521000 เพิ่ม
    Given มีรายการ GL "23521000" ในงวด
    When ประมวลผล R06
    Then GL "23521000" ปรากฏใน R06

  # TC-005
  Scenario: [TC-005] R06ACC ดึง GL 23521000 และ 15531015
    Given มีรายการ GL "23521000" และ "15531015" ในงวด
    When ประมวลผล R06ACC
    Then GL "23521000" และ "15531015" ปรากฏใน R06ACC ครบ

  # TC-006
  Scenario: [TC-006] R02/R02ACC ใช้ตาราง GL ร่วมกัน
    When ตรวจสอบชุด GL Code ที่ R02 และ R02ACC ใช้
    Then ทั้งสองรายงานอ้างอิงตาราง GL Code ชุดเดียวกัน
    And ไม่มีการแยกชุด GL ระหว่าง R02 กับ R02ACC

  # TC-007
  Scenario: [TC-007] GL นอกขอบเขตไม่ถูกดึงเพิ่มหรือหายไป
    Given มี GL Code อื่นที่ไม่อยู่ในรายการปรับปรุงครั้งนี้
    When ประมวลผล R05/R05ACC/R06/R06ACC
    Then รายการ GL เดิมที่เคยออกรายงานยังออกครบเท่าเดิม
    And ไม่มี GL ใหม่ที่ไม่ได้ระบุถูกดึงเข้ามา


# ═══════════════════════════════════════════════════════════════
# FC-2 : GL MAPPING CONFIGURATION (FR-006, FR-007)
# ═══════════════════════════════════════════════════════════════

Feature: GL Mapping Configuration and Event Codes
  As ระบบประมวลผล RCC
  I want config GL mapping รองรับ GL และ event code ใหม่
  So that ยอดถูก map เข้าช่องที่ถูกต้อง

  # TC-008
  Scenario: [TC-008] GL 14011000 map เข้าทั้ง totalpremium_amount และ unallocated_premium
    Given config "cf_r05_gl_mapping" กำหนด GL "14011000" ให้ map ทั้ง totalpremium_amount และ unallocated_premium
    When ประมวลผล R05/R05ACC
    Then ยอดของ GL "14011000" ปรากฏในช่อง totalpremium_amount
    And ยอดของ GL "14011000" ปรากฏในช่อง unallocated_premium ตามนิยาม

  # TC-009
  Scenario: [TC-009] เพิ่ม event code ML-0009 และ ML-0010
    Given config "cf_r05_gl_mapping" สำหรับ GL "14011000"
    When ตรวจสอบ event code ที่ผูกกับ GL "14011000"
    Then พบ event code "ML-0009" และ "ML-0010"

  # TC-010
  Scenario: [TC-010] cf_rcc_gl_mapping รองรับ GL 23521000
    Given มีการ insert mapping ของ GL "23521000" ใน "cf_rcc_gl_mapping"
    When ประมวลผล R06/R06ACC
    Then GL "23521000" ถูก map ตาม config โดยไม่มี error "mapping not found"

  # TC-011
  Scenario: [TC-011] GL 14011000 มีทั้ง ML-0009 และ ML-0010 ในงวดเดียว — ไม่นับซ้ำ
    Given ในงวดมีรายการ GL "14011000" ทั้ง event "ML-0009" และ "ML-0010"
    When ประมวลผล R05ACC
    Then ยอดถูก map เข้าช่องที่กำหนดครบทั้งสอง event
    And ยอดรวมไม่ถูกนับซ้ำเกินจำนวนรายการจริง


# ═══════════════════════════════════════════════════════════════
# FC-3 : DATABASE SCHEMA MIGRATION (FR-008, FR-009)
# ═══════════════════════════════════════════════════════════════

Feature: Schema Migration for receive_payment_type and Nullable Fields
  As DBA
  I want ปรับ schema ตาราง tx_rcc_*_r05/r06 อย่างปลอดภัย
  So that logic การบันทึกใหม่ทำงานได้และข้อมูลเดิมไม่เสียหาย

  Background:
    Given ตารางเป้าหมาย: tx_rcc_reconcile_r05, tx_rcc_adj_r05, tx_rcc_reconcile_r06, tx_rcc_adj_r06

  # TC-012
  Scenario Outline: [TC-012] ทุกตารางมี column receive_payment_type หลัง migration
    When ตรวจ schema ของตาราง "<table>"
    Then พบ column "receive_payment_type"

    Examples:
      | table                   |
      | tx_rcc_reconcile_r05    |
      | tx_rcc_adj_r05          |
      | tx_rcc_reconcile_r06    |
      | tx_rcc_adj_r06          |

  # TC-013
  Scenario Outline: [TC-013] disclosure_type / plan_code รับค่า NULL ได้
    When ตรวจ constraint ของ column "<column>" ในตาราง "<table>"
    Then column "<column>" เป็น NULLABLE

    Examples:
      | table                | column          |
      | tx_rcc_reconcile_r05 | disclosure_type |
      | tx_rcc_reconcile_r05 | plan_code       |
      | tx_rcc_adj_r06       | disclosure_type |
      | tx_rcc_adj_r06       | plan_code       |

  # TC-014
  Scenario: [TC-014] Insert แถวที่ disclosure_type=NULL และ plan_code=NULL สำเร็จ
    Given schema migration เสร็จสมบูรณ์
    When insert แถวที่ disclosure_type=NULL, plan_code=NULL, receive_payment_type มีค่า
    Then insert สำเร็จโดยไม่ติด NOT NULL constraint

  # TC-015
  Scenario: [TC-015] ข้อมูลเดิมยังครบถ้วนหลัง migration
    Given จำนวนแถวและ checksum ของข้อมูลก่อน migration ถูกบันทึกไว้
    When รัน migration เพิ่ม column และปรับ nullable
    Then จำนวนแถวเท่าเดิม
    And ค่าข้อมูลในคอลัมน์เดิมไม่เปลี่ยนแปลง

  # TC-016
  Scenario: [TC-016] Rollback migration กลับสู่สถานะเดิมได้
    Given migration script มี rollback ที่กำหนดไว้
    When สั่ง rollback
    Then schema กลับสู่โครงสร้างก่อนการเปลี่ยนแปลงโดยข้อมูลไม่เสียหาย


# ═══════════════════════════════════════════════════════════════
# FC-4 : DATA PERSISTENCE & GROUPING LOGIC (FR-010)
# ═══════════════════════════════════════════════════════════════

Feature: Persistence of Receive Payment Type and Grouping
  As ระบบบันทึกผล reconcile/adjustment
  I want บันทึก receive_payment_type พร้อมเงื่อนไข disclosure/plan และ grouping ใหม่
  So that ยอดสรุปถูกจัดกลุ่มและตรงกับนิยามรายงาน

  Background:
    Given schema (FC-3) พร้อมใช้งานแล้ว

  # TC-017
  Scenario: [TC-017] บันทึก receive_payment_type ลง tx_rcc_reconcile_r05
    Given รายการ reconcile R05 ที่มีค่า Receive Payment Type
    When ประมวลผลและบันทึก
    Then field receive_payment_type ใน tx_rcc_reconcile_r05 มีค่าตรงกับ source

  # TC-018
  Scenario: [TC-018] บันทึก receive_payment_type ลง tx_rcc_adj_r05
    Given รายการ adjustment R05 ที่มีค่า Receive Payment Type
    When ประมวลผลและบันทึก
    Then field receive_payment_type ใน tx_rcc_adj_r05 มีค่าตรงกับ source

  # TC-019
  Scenario: [TC-019] Grouping Column รวม receive_payment_type — ยอดจัดกลุ่มถูกต้อง
    Given มีหลายรายการที่มี receive_payment_type ต่างกัน
    When ประมวลผลและจัดกลุ่ม (grouping)
    Then รายการถูกจัดกลุ่มโดยใช้ receive_payment_type เป็นหนึ่งใน key
    And ยอดรวมของแต่ละกลุ่มถูกต้องตามรายการต้นทาง

  # TC-020
  Scenario: [TC-020] เงื่อนไขใหม่ของ Disclosure Type / Plan Code ทำงานถูกต้อง
    Given รายการที่เข้าและไม่เข้าเงื่อนไข disclosure_type / plan_code ใหม่
    When ประมวลผลบันทึก
    Then ค่า disclosure_type / plan_code ถูกบันทึกตามเงื่อนไขใหม่ (รวมถึงกรณี NULL)

  # TC-021
  Scenario: [TC-021] แถวที่ receive_payment_type ต่างกันไม่ถูกยุบรวมผิด
    Given สองรายการเหมือนกันทุกฟิลด์ ยกเว้น receive_payment_type ต่างกัน
    When ประมวลผล grouping
    Then ทั้งสองรายการยังคงเป็นคนละกลุ่ม ไม่ถูกยุบรวมเป็นแถวเดียว

  # TC-022
  Scenario: [TC-022] reconcile_r06 / adj_r06 บันทึกครบเหมือน R05
    Given รายการ R06 reconcile และ adjustment ที่มี Receive Payment Type
    When ประมวลผลบันทึก
    Then tx_rcc_reconcile_r06 และ tx_rcc_adj_r06 บันทึก receive_payment_type + grouping ครบเช่นเดียวกับ R05


# ═══════════════════════════════════════════════════════════════
# FC-5 : EXCEL EXPORT / REPORT OUTPUT (FR-011, FR-012)
# ═══════════════════════════════════════════════════════════════

Feature: Excel Export with Receive Payment Type Column
  As ผู้จัดทำไฟล์นำส่ง OIC
  I want ไฟล์ Excel R05ACC/R06ACC มีคอลัมน์ Receive Payment Type ทั้ง 2 sheet
  So that ไฟล์นำส่งครบตามรูปแบบที่ คปภ. ต้องการ

  # TC-023
  Scenario: [TC-023] R05ACC Sheet 1 มีคอลัมน์ Receive Payment Type
    When generate ไฟล์ Excel R05ACC
    Then Sheet 1 มีคอลัมน์ "Receive Payment Type"

  # TC-024
  Scenario: [TC-024] R05ACC Sheet 2 มีคอลัมน์ Receive Payment Type
    When generate ไฟล์ Excel R05ACC
    Then Sheet 2 มีคอลัมน์ "Receive Payment Type"

  # TC-025
  Scenario: [TC-025] R06ACC Sheet 1 และ Sheet 2 มีคอลัมน์ Receive Payment Type
    When generate ไฟล์ Excel R06ACC
    Then ทั้ง Sheet 1 และ Sheet 2 มีคอลัมน์ "Receive Payment Type"

  # TC-026
  Scenario: [TC-026] ค่าใน Excel ตรงกับข้อมูลใน tx_rcc table
    Given ข้อมูลในตาราง tx_rcc_reconcile/adj ของงวด
    When generate Excel R05ACC/R06ACC
    Then ค่าในคอลัมน์ Receive Payment Type ของแต่ละแถวตรงกับค่าในตาราง 100%

  # TC-027
  Scenario: [TC-027] Export เมื่อไม่มีข้อมูล ยังมี header คอลัมน์ครบ
    Given งวดที่ไม่มีรายการเข้าเงื่อนไข
    When generate Excel
    Then ไฟล์ยังถูกสร้างได้โดยไม่ error
    And header รวมคอลัมน์ "Receive Payment Type" ยังครบทุก sheet

  # TC-028
  Scenario: [TC-028] คอลัมน์เดิมไม่ถูกย้าย/หายเทียบกับ template
    Given template ไฟล์นำส่งเดิมของ R05ACC/R06ACC
    When generate ไฟล์ใหม่
    Then คอลัมน์เดิมทั้งหมดยังอยู่ลำดับเดิม
    And คอลัมน์ Receive Payment Type ถูกเพิ่มในตำแหน่งตาม spec โดยไม่ทับคอลัมน์เดิม


# ═══════════════════════════════════════════════════════════════
# FC-6 : PERIOD-GATED COST CENTER RULE 830044 (FR-013)
# ═══════════════════════════════════════════════════════════════

Feature: Period-Gated Removal of Cost Center 830044 Exclusion
  As ระบบประมวลผล R02/R06
  I want ยกเลิกเงื่อนไข Cost Center 830044 สำหรับ GL 50551218/50551219/50551221 ตั้งแต่ Period 2027/01
  So that รายงานสะท้อนกฎใหม่ตามงวดที่กำหนดโดยไม่กระทบงวดเก่า

  Background:
    Given GL ที่เกี่ยวข้องคือ "50551218","50551219","50551221"
    And เงื่อนไขเดิม: "Cost Center = 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ออกรายงาน นอกนั้นปกติ"

  # TC-029
  Scenario: [TC-029] งวด 2026/12 ใช้เงื่อนไขเดิม (รายการเข้าเกณฑ์ถูกตัด)
    Given งวด = "2026/12"
    And มีรายการ GL "50551218" ที่ Cost Center "830044" และขึ้นต้นด้วยเลข 1–7
    When ประมวลผล R06
    Then รายการนั้นถูกตัดออกจากรายงาน (พฤติกรรมเดิม)

  # TC-030
  Scenario: [TC-030] งวด 2027/01 ยกเลิกเงื่อนไข — รายการประมวลผลปกติ
    Given งวด = "2027/01"
    And มีรายการ GL "50551218" ที่ Cost Center "830044" และขึ้นต้นด้วยเลข 1–7
    When ประมวลผล R06
    Then รายการนั้นถูกประมวลผลและออกรายงานตามปกติ (ไม่ถูกตัด)

  # TC-031
  Scenario Outline: [TC-031] Boundary — พฤติกรรมสลับที่งวด 2027/01 พอดี
    Given งวด = "<period>" และมีรายการ GL "50551219" Cost Center "830044" ขึ้นต้น 1–7
    When ประมวลผล R06
    Then รายการ "<result>"

    Examples:
      | period  | result            |
      | 2026/12 | ถูกตัดออก (เดิม)   |
      | 2027/01 | ออกรายงาน (ใหม่)  |
      | 2027/02 | ออกรายงาน (ใหม่)  |

  # TC-032
  Scenario: [TC-032] Cost Center 830044 ที่ไม่ขึ้นต้น 1–7 — พฤติกรรมคงเดิม
    Given มีรายการ GL "50551221" Cost Center "830044" ที่ไม่ได้ขึ้นต้นด้วย 1–7
    When ประมวลผลทั้งงวด 2026/12 และ 2027/01
    Then รายการประมวลผลตามปกติทั้งสองงวด (กฎเดิมไม่เคยตัดเคสนี้อยู่แล้ว)

  # TC-033
  Scenario Outline: [TC-033] กฎมีผลครบทุกรายงานที่เกี่ยวข้อง
    Given งวด = "2027/01" และมีรายการเข้าเกณฑ์เดิม
    When ประมวลผลรายงาน "<report>"
    Then เงื่อนไข Cost Center ถูกยกเลิกในรายงานนั้น

    Examples:
      | report  |
      | R02     |
      | R02ACC  |
      | R06     |
      | R06ACC  |

  # TC-034
  Scenario: [TC-034] GL อื่นที่ Cost Center 830044 ไม่ถูกกระทบ
    Given มีรายการ GL ที่ไม่ใช่ 50551218/50551219/50551221 ที่ Cost Center "830044"
    When ประมวลผลงวด 2027/01
    Then พฤติกรรมของ GL เหล่านั้นไม่เปลี่ยนจากเดิม (กฎนี้จำกัดเฉพาะ 3 GL)


# ═══════════════════════════════════════════════════════════════
# FC-7 : REGRESSION & STANDARDS COMPLIANCE (FR-014, FR-016…FR-018)
# ═══════════════════════════════════════════════════════════════

Feature: Standards Compliance and Regression Safety
  As QA / SA
  I want รายงานที่ปรับปรุงเป็นไปตามมาตรฐานบริษัทและไม่ทำให้ของเดิมพัง
  So that ผ่านเกณฑ์ตรวจรับและนำส่ง OIC ได้อย่างมั่นใจ

  # TC-035
  Scenario: [TC-035] วันที่บนรายงาน/Excel แสดงเป็น พ.ศ.
    Given ข้อมูลวันที่ใน DB เก็บเป็น ค.ศ. เช่น "2027-01-31"
    When แสดงผลบนรายงาน/Excel export
    Then วันที่แสดงเป็น พ.ศ. รูปแบบ DD/MM/YYYY เช่น "31/01/2570"

  # TC-036
  Scenario: [TC-036] ตัวเลขการเงินไม่มี rounding error
    Given รายการยอดเงินที่ต้องรวมจำนวนมาก
    When ประมวลผลและรวมยอดในรายงาน
    Then ยอดรวมตรงกับการคำนวณแบบ precision สูง (ไม่มีความคลาดเคลื่อนระดับสตางค์)

  # TC-037
  Scenario: [TC-037] รายงานแสดงข้อมูลหัวรายงานครบ
    When เปิด/พิมพ์รายงาน
    Then แสดง ชื่อรายงาน, เงื่อนไขการค้นหา (งวด/ช่วงเวลา), ชื่อผู้พิมพ์, วันเวลาที่พิมพ์

  # TC-038
  Scenario: [TC-038] PII ในรายงานถูก mask ตามมาตรฐาน (ถ้ามี)
    Given รายงาน/Export มีข้อมูลส่วนบุคคล (เช่น เลขบัตร, เลขกรมธรรม์) หากมี
    When แสดงผล
    Then ข้อมูลถูก mask ตาม docs/standard-practice.md มาตรา 6

  # TC-039
  Scenario: [TC-039] Re-run งวดเดิมให้ผลเท่าเดิม (idempotent)
    Given ประมวลผลงวดหนึ่งสำเร็จแล้ว
    When ประมวลผลงวดเดิมซ้ำ
    Then ผลลัพธ์ (ยอด, จำนวนแถว, ไฟล์ Excel) เท่ากับครั้งก่อนไม่เกิดข้อมูลซ้ำซ้อน

  # TC-040
  Scenario: [TC-040] Baseline regression ของ Period/GL นอกขอบเขต
    Given baseline ผลลัพธ์รายงานก่อน deploy ของงวดและ GL ที่ไม่อยู่ในขอบเขตงานนี้
    When deploy การเปลี่ยนแปลงทั้งหมดแล้วประมวลผลซ้ำ
    Then ผลลัพธ์เท่ากับ baseline ทุกประการ (no regression)

  # TC-041
  Scenario: [TC-041] รายงาน/Export เสร็จภายใน SLA
    Given ปริมาณข้อมูลระดับ production ของหนึ่งงวด
    When สั่งประมวลผล/Export
    Then ทำงานเสร็จภายใน ≤ 30 วินาที ตาม SLA รายงาน


# ═══════════════════════════════════════════════════════════════
# FC-8 : R14ACC IMPROVEMENT (FR-015) — BLOCKED
# ═══════════════════════════════════════════════════════════════
#
# Redmine #82581 ระบุเพียง "ปรับปรุง RCC R14 ดังนี้" โดยไม่มีรายการย่อย
# ยังกำหนด Test Case ที่ทดสอบได้ไม่ได้ — ต้องการข้อมูลเพิ่ม:
#   - GL Code ที่เพิ่ม/แก้ของ R14ACC (ถ้ามี)
#   - การเปลี่ยน schema / คอลัมน์ Excel (ถ้ามี)
#   - เงื่อนไข business rule / period gating (ถ้ามี)
# เมื่อได้ scope แล้วให้เพิ่ม TC-042 เป็นต้นไปในหมวดนี้

---

## ส่วนที่ 3 — ข้อสังเกตสำหรับทีม SIT

1. **ลำดับการทดสอบ**: FC-3 (Schema) เป็น Enabler ต้องผ่านก่อน FC-4, FC-5
2. **ข้อมูลทดสอบ Period gating (FC-6)**: ต้องเตรียมชุดข้อมูลคร่อมงวด 2026/12 ↔ 2027/01 ที่มี Cost Center 830044 + GL 50551218/19/21
3. **Baseline regression (TC-040)**: เก็บ snapshot ผลรายงานก่อน deploy เพื่อใช้เทียบ
4. **Source of truth ค่าคาดหวัง**: ไฟล์ตัวอย่าง R05ACC_202601_to_202601 (Google Sheets) และหน้า wiki.thaisamut.co.th ตามที่ลิงก์ใน Redmine แต่ละ subtask
5. **R14ACC (FC-8)**: ติดตามให้ BA เติมรายละเอียดใน #82581 ก่อนปิด SIT รอบนี้

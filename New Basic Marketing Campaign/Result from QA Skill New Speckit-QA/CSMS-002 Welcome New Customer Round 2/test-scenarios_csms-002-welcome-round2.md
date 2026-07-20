---
id: csms-002-welcome-round2
phase: qa
sub-phase: design (test scenarios + BDD + checklist)
spec-source: "Spec/Batch เพื่อส่ง SMS Welcome New Customer รอบ 2 เมื่อครบ 20 วัน ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md (2026-07-07, Draft)"
plan-source: "…/plan.md (2026-07-11, updated 2026-07-13)"
run-date: 2026-07-17
iteration: 2
total-tc: 92
status: designed — Not Run (no running app; execute out of scope)
---

# Test Scenarios — CSMS-002 "Welcome New Customer (Ocean Club)" รอบ 2 (+20 วัน)

**Feature**: `003-batch-welcome-new-customer-app-sms` · slug `csms-002-welcome-round2`
**System**: Centralized SMS (CSMS) — epirusapp monolith (Java 7 / WildFly 8 / Spring 3.2.2 / Camel 2.11.1)
**Batch**: `SmsWelcomeNewCustAppCamelBean` — daily 10:00 น. · ~1,000 ราย/วัน · `sms_category` `114` · ตาราง `WELCOME_NEW_CUST_APP`

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3

> **สถานะ: ยังไม่ยุติ (unresolved) — ต้องให้ SA/PO ตัดสินก่อนนำชุดทดสอบไปรันจริง**
> ชุดทดสอบด้านล่างออกแบบไว้ **ทั้งสองทาง** โดยเจตนา และ **ห้ามรันทั้งสองชุด** — เมื่อมีคำตัดสินแล้ว **ต้องลบชุดที่แพ้ออกหนึ่งชุด**

### ข้อขัดแย้ง (ตรวจสอบยืนยันด้วยตนเองแล้ว 2026-07-17)

| # | เอกสาร | บรรทัด | ข้อความจริงที่พบ |
|---|--------|--------|------------------|
| 1 | `spec.md` | **บรรทัด 151** | **FR-017**: "ระบบ MUST สร้างไฟล์นำส่ง (CSV, UTF-8) ตามรูปแบบชื่อไฟล์มาตรฐาน `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv` (ปีพุทธศักราช 2 หลัก) แล้วนำส่งผ่านช่องทางกลาง (ESB → SMS Gateway)" |
| 2 | `plan.md` | **บรรทัด 42** | "ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` เหมือน 002 (**FR-017 เดิมถูกตัดออกจาก spec.md แล้ว 2026-07-11** หลังตรวจโค้ดพบว่าไม่มี CSV infra ใดๆ ในระบบ)" |

### 🔴 CRITICAL — `plan.md` อ้างการแก้ `spec.md` ที่ไม่เคยเกิดขึ้นจริง (documentation-integrity defect)

**คำกล่าวอ้างของ `plan.md` เป็นเท็จ** — QA ตรวจ `spec.md` ฉบับปัจจุบัน (2026-07-17) แล้ว **ไม่พบการลบ FR-017 ใดๆ**
FR-017 ยังคงอยู่ครบถ้วนที่บรรทัด 151 และ **ไม่ได้อยู่ลำพัง** — ช่องทาง CSV ถูกถักทออยู่ทั่วทั้ง `spec.md` ถึง **5 จุด**:

| จุด | บรรทัด | หลักฐาน |
|-----|--------|---------|
| Scope (ใน scope) | 31 | "…ตัดรายการซ้ำ → **สร้างไฟล์ CSV** → ส่ง SMS ผ่านช่องทางกลาง (ESB → SMS Gateway)…" |
| US2 Acceptance Scenario 1 | 85 | "**Given** batch ไม่สามารถสกัดข้อมูลหรือ**สร้างไฟล์ CSV**ได้ตามรอบเวลา 10:00 น. …" |
| FR-017 | 151 | ข้อกำหนดเต็ม (ดูตารางบน) |
| FR-019 | 161 | "เมื่อเกิดความล้มเหลวระดับรอบ (สกัดข้อมูล/**สร้างไฟล์ไม่ได้**, ช่องทางนำส่งล่ม, …)" |
| Key Entities | 174 | "**ไฟล์นำส่ง (Interface File)**: ไฟล์ CSV UTF-8 ตามรูปแบบชื่อมาตรฐาน ที่ส่งเข้าช่องทางกลางเพื่อนำส่ง SMS" |

**นัยสำคัญ**: นี่ไม่ใช่แค่ "FR ตกค้าง" แต่เป็น **ความผิดพลาดเชิงความถูกต้องของเอกสาร (documentation-integrity)** ในตัวมันเอง —
`plan.md` ยืนยัน (assert) การแก้ไขเอกสารต้นทางที่ **ไม่เคยถูกดำเนินการ** ทำให้ผู้อ่าน `plan.md` เพียงลำพัง (เช่น Dev ที่จะ implement)
เข้าใจผิดว่า `spec.md` ยุติเรื่องนี้แล้ว ทั้งที่ `spec.md` ยังสั่งให้สร้าง CSV อยู่ **ความน่าเชื่อถือของคำกล่าวอ้าง "ปิดแล้ว/ตัดออกแล้ว"
อื่นๆ ใน `plan.md` จึงต้องถูกตรวจสอบซ้ำทั้งหมด** ก่อนใช้เป็นฐานของงาน implement (ดู CF-004 — คำกล่าวอ้าง `sms_category` `114` vs spec `'111'`)

### คำตัดสินของผู้ใช้ (2026-07-17) — ออกแบบทั้งสองทาง แล้ว flag

- **CSV path** — tag `@disputed @csv-path` — 6 TC: `TC-071`, `TC-083`, `TC-084`, `TC-085`, `TC-086`, `TC-087`
  (การสร้างไฟล์, UTF-8, รูปแบบชื่อ `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv`, สร้างไฟล์ไม่สำเร็จ → email แจ้งเตือน, PII ในไฟล์)
- **API path** — tag `@disputed @api-path` — 5 TC: `TC-088`, `TC-089`, `TC-090`, `TC-091`, `TC-092`
  (เรียก `sendSmsOtp` รายรายการ, response/refer_no รายครั้ง, ความล้มเหลวรายครั้ง, throughput 1,000 call, ยืนยันไม่มีไฟล์ CSV)

### กฎการใช้งานชุดทดสอบนี้

1. **ห้าม execute ทั้ง 11 TC พร้อมกัน** — สองชุดขัดแย้งกันโดยนิยาม ชุดหนึ่งจะ Fail เสมอไม่ว่าระบบจะถูกต้องเพียงใด
2. **ต้องมีคำตัดสินจาก SA/PO ก่อน** ว่า FR-017 คงอยู่ (CSV) หรือถูกตัดจริง (API)
3. **เมื่อตัดสินแล้ว ต้องลบชุดที่แพ้ออก 1 ชุด** ออกจากทั้ง `test-scenarios_*.md`, `test-cases_*.csv`, `test-data_*.json` และ **ต้องแก้เอกสารต้นทางให้ตรงกัน**:
   - ถ้าตัดสินว่า **API** → SA ต้องลบ FR-017 **จริง** + แก้ Scope (บรรทัด 31), US2 AS1 (85), FR-019 (161), Key Entities (174) ให้สอดคล้อง — และแก้คำอ้างวันที่ใน `plan.md` ที่เป็นเท็จ
   - ถ้าตัดสินว่า **CSV** → Dev ต้องสร้าง CSV infra ใหม่ (ตาม `plan.md` ระบุว่า **ไม่มี CSV infra ใดๆ ในระบบ**) และ `plan.md` ต้องถูกแก้ทั้ง Technical approach
4. **จนกว่าจะตัดสิน — feature นี้ยังไม่พร้อมเข้า SIT** ทั้ง 11 TC คงสถานะ `Not Run`

---

## 🔴 CRITICAL & Open Findings (surfaced by this design pass)

| ID | Severity | Finding | หลักฐาน / อ้างอิง | ปลายทาง |
|----|----------|---------|-------------------|---------|
| **CF-001** | **CRITICAL** | **`plan.md` อ้างการลบ FR-017 จาก `spec.md` ที่ไม่เคยเกิดขึ้น** — คำกล่าวอ้างเป็นเท็จ; ช่องทาง CSV ยังปรากฏ 5 จุดใน spec | `plan.md`:42 vs `spec.md`:31, 85, 151, 161, 174 | **SA/PO** — ต้องตัดสินและแก้เอกสารให้ตรง |
| **CF-002** | **CRITICAL** | **ไม่มี security/PII NFR ใดๆ ใน `spec.md`** ทั้งที่ระบบจัดการ **`cardNo` (เลขประจำตัวประชาชน)** + เบอร์มือถือ + ชื่อ-นามสกุล — `checklist.md` G4/CHK023 บันทึกเป็น known gap แล้วแต่ **ยังไม่ปิด** | `checklist.md`:50, 68 · `spec.md` ไม่มีหัวข้อ NFR/Security เลย | **SA + DPO** — ต้องเพิ่ม NFR; QA คลุมด้วย TC-063…TC-071 (9 Security TC) |
| **CF-003** | **HIGH** | **FR-020.2 รวม 2 requirement ในข้อเดียว** (การตีความช่วงวันที่ Manual Fix **+** ข้อกำหนดรายงานสรุปประจำวัน) → **ครึ่งที่เป็นรายงานสูญเสียหมายเลข FR ของตัวเอง** และไม่มี User Story/acceptance scenario รองรับ | `spec.md`:164 · `checklist.md` G1 (CHK004/CHK010/CHK017) | **SA** — ต้องแยกเป็น FR ใหม่ (`checklist.md` เสนอ `FR-021`) — **QA ไม่ตั้งเลข FR เองโดยพลการ**; TC-030/TC-082 ผูกกับ `FR-020.2` (ครึ่งรายงาน) ไว้ชั่วคราวและต้อง re-map เมื่อ SA แยก FR แล้ว |
| **CF-004** | **HIGH** | **รหัส SMS template ขัดแย้งกัน** — `spec.md` FR-014 ระบุ "ประเภทข้อความรหัส **'111'**" แต่ `plan.md` ระบุ `SMS_CATEGORY` code **`114`** (และ config code ของแคมเปญยืนยันเป็น `114`) — ไม่มีการ reconcile | `spec.md`:147 vs `plan.md`:9, 28, 113 | **SA/Dev** — TC-021/TC-078 ตรวจทั้งสองค่าและ flag; route ไป `/speckit-analyze` |
| **CF-005** | MEDIUM | **ไม่มี performance NFR เชิงเวลา** — ระบุ volume ~1,000/วัน แต่ไม่มีเกณฑ์ "รอบต้องเสร็จภายใน X นาที" ทั้งที่ SMS Gateway V3 ส่งได้ **ทีละ 1 รายการต่อ 1 HTTP call synchronous** และ `plan.md` เองยอมรับว่ายังไม่เคยวัด throughput จริง | `checklist.md` G3/CHK022 · `plan.md`:38 [NEEDS CLARIFICATION] | **SA** — TC-091 คลุมเชิงออกแบบ (@api-path) แต่ไม่มี threshold ให้ assert |
| **CF-006** | MEDIUM | **GOV policy path ไม่มี precedent** — `plan.md` ระบุ query `ili_policy_master`/`ili_policy_remark` สำหรับ GOV เป็น query ใหม่ทั้งหมด ไม่มีของเดิมจาก 002 และติด **[NEEDS DBA VERIFICATION]** ค้างอยู่ | `plan.md`:29 | **DBA** — TC-057 ออกแบบไว้แต่ blocked จนกว่า schema ยืนยัน |
| **CF-007** | MEDIUM | **รหัสประเภทกรมธรรม์ยังกำกวม** — `'O'/'I'/'G'/'P'` (spec Assumptions, ยืนยันจาก 002) vs `'0'/'1'` ในเอกสารต้นทาง — ปิดโดย "สันนิษฐานว่าเป็นความคลาดเคลื่อนจากการแปลง PDF" ไม่ใช่การยืนยันจาก data contract จริง | `spec.md`:43, 194 · `checklist.md` G2 | **DBA/SA** — TC-056 คลุม |
| **CF-008** | MEDIUM | **Cross-campaign dependency risk (CSMS-001)** — batch นี้อ่าน `WELCOME_NEW_CUST_LINE` ของ CSMS-001 เป็น **แหล่งกลุ่มเป้าหมายเพียงแหล่งเดียว** และผูก FK กลับ — เป็น integration surface จริงที่ spec ปิดด้วย assumption "ระบบต้นน้ำพร้อมใช้" เท่านั้น ไม่มี FR ป้องกัน | `spec.md`:198 (Assumptions) · `plan.md`:9, 30 | **SA** — TC-051/TC-062/TC-075 คลุม |
| **CF-009** | LOW→MEDIUM | **Cron bug ของ 002 ที่อาจถูก copy** — `plan.md` เตือนว่า 002 ใช้ `0 13 14 * * ?` (14:13 น.) ผิดจาก JavaDoc และ **ไม่เคยถูกแก้** — 003 ต้องตั้ง `0 0 10 * * ?` จริง | `plan.md`:44 | **Dev** — TC-002 คลุมโดยเฉพาะ |
| **CF-010** | INFO | **Coverage gate G10 (≥80%) ยังไม่มีคำตอบผูกมัด** — `plan.md` ค้าง [NEEDS CLARIFICATION] เรื่องยกระดับ coverage เหมือน 002 | `plan.md`:32 | **Platform Owner** |

---

## Test Matrix Summary Table

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|-------------------|----------------|----------|------|-------------------|
| TC-001 | FR-001 Daily Schedule | Batch ทำงานอัตโนมัติทุกวันเวลา 10:00 น. | Positive | P1 | @positive @smoke | Integration |
| TC-002 | FR-001 Daily Schedule | Cron expression เป็น `0 0 10 * * ?` จริง — ไม่ copy bug `0 13 14 * * ?` ของ 002 | Positive | P1 | @positive @regression | Unit |
| TC-003 | FR-002 Target Selection | ดึงกลุ่มเป้าหมายจาก `WELCOME_NEW_CUST_LINE` ที่ `sms_sent_date` ครบ N วันพอดี | Positive | P1 | @positive @smoke | Integration |
| TC-004 | FR-003 Config DATE_COUNT | อ่านค่า N จาก config `DATE_COUNT` ของ `CSMS_SNC_NewCustApp` ที่ Active (ค่าตั้งต้น 20) | Positive | P1 | @positive @smoke | Integration |
| TC-005 | FR-003 Config DATE_COUNT | เปลี่ยน N จาก 20 → 15 รอบถัดไปใช้ค่าใหม่โดยไม่ต้องแก้ระบบ | Positive | P1 | @positive | Integration |
| TC-006 | FR-004 Inforce | กรมธรรม์ ORD/PA สถานะ '1' → ผ่านเกณฑ์ Inforce | Positive | P1 | @positive | Integration |
| TC-007 | FR-004 Inforce | กรมธรรม์ IND/GOV สถานะ '1'/'2'/'3' → ผ่านเกณฑ์ Inforce | Positive | P1 | @positive | Integration |
| TC-008 | FR-005 Mobile Selection | ใช้ mobile1 เป็นเบอร์หลักในการส่ง | Positive | P1 | @positive @smoke | Integration |
| TC-009 | FR-005 Mobile Selection | mobile1 ว่าง → ใช้ mobile2 แทน | Positive | P1 | @positive | Integration |
| TC-010 | FR-005 Mobile Selection | ใช้เบอร์ปัจจุบันจาก `ili_policy_master` ไม่ใช่เบอร์จากประวัติรอบแรก | Positive | P1 | @positive | Integration |
| TC-011 | FR-006 Do Not Contact | ORD ที่มี remark code '1' → คัดออก ไม่ส่ง | Positive | P1 | @positive | Integration |
| TC-012 | FR-006 Do Not Contact | IND/GOV/PA ที่มี remark code '4' → คัดออก ไม่ส่ง | Positive | P1 | @positive | Integration |
| TC-013 | FR-007 cardNo Lookup | แปลง policy_no → cardNo สำเร็จผ่านบริการตรวจสอบข้อมูลลูกค้า | Positive | P1 | @positive | Integration |
| TC-014 | FR-008 Registration Check | ตรวจสถานะลงทะเบียนครบทั้ง 2 ช่องทาง (LINE + APP) ต่อลูกค้า 1 ราย | Positive | P1 | @positive @smoke | Integration |
| TC-015 | FR-009 Send Criteria (ก) | LINE=E02 และ APP=E02 → ส่ง SMS | Positive | P1 | @positive @smoke | Integration |
| TC-016 | FR-009 Send Criteria (ข) | LINE=E00 + isBlockLine=true และ APP=E02 → ส่ง SMS | Positive | P1 | @positive | Integration |
| TC-017 | FR-010 Exclusion | พบการลงทะเบียน APP แล้ว → คัดออก ไม่ส่ง | Positive | P1 | @positive @smoke | Integration |
| TC-018 | FR-010 Exclusion | พบการลงทะเบียน LINE โดย isBlockLine=false → คัดออก ไม่ส่ง | Positive | P1 | @positive | Integration |
| TC-019 | FR-013 Cross-round Dedup | เคยส่งรอบสองสำเร็จแล้ว (policy_no+policy_type+เบอร์ + มี `sms_sent_date`) → ไม่ส่งซ้ำ | Positive | P1 | @positive @smoke | Integration |
| TC-020 | FR-013.1 In-round Dedup | ลูกค้า 1 ราย หลายกรมธรรม์ในรอบเดียว → ส่ง 1 ข้อความ เลือกรายการเก่าสุด | Positive | P1 | @positive @smoke | Integration |
| TC-021 | FR-014 SMS Template | ดึงรูปแบบข้อความจากตารางกำหนดการข้อความตามรหัสประเภทข้อความ | Positive | P1 | @positive | Integration |
| TC-022 | FR-014 SMS Template | ไม่พบใน `sms_message_schedule` → fallback ไปตารางประเภทข้อความหลัก | Positive | P2 | @positive | Integration |
| TC-023 | FR-015 Message Render | แทนค่า ${var1} ชื่อ, ${var2} รางวัล, ${var3} ลิงก์ ครบถ้วนก่อนส่ง | Positive | P1 | @positive @smoke | Unit |
| TC-024 | FR-018 Two-level Log | บันทึกประวัติ 2 ระดับ: ภาพรวมรอบ (`CSMS_LOG`) + รายกรมธรรม์ (`WELCOME_NEW_CUST_APP`) | Positive | P1 | @positive @smoke | Integration |
| TC-025 | FR-018.1 FK Link | ประวัติรอบสองมี FK อ้างอิงกลับรายการรอบแรก (`WELCOME_NEW_CUST_LINE.ID`) | Positive | P1 | @positive @smoke | Integration |
| TC-026 | FR-018.2 sent_status | ส่งสำเร็จ → `sms_sent_date` = วันที่ส่ง และ `sent_status` = 'S' | Positive | P1 | @positive @smoke | Integration |
| TC-027 | FR-020 Manual Fix | IT Admin เลือกช่วงวันที่และสั่ง Manual Fix → ประมวลผลรอบนั้นใหม่ | Positive | P2 | @positive | E2E |
| TC-028 | FR-020 Manual Fix | ช่วงวันที่มีทั้งรายการสำเร็จและค้าง → ส่งเฉพาะรายการค้าง ไม่ส่งซ้ำ | Positive | P1 | @positive @smoke | E2E |
| TC-029 | FR-020.2 Manual Fix Date | ตีความช่วงวันที่ = วันประมวลผลของรอบ; หากลุ่มเป้าหมายจาก (วันที่เลือก − N) โดยใช้ N ปัจจุบัน | Positive | P2 | @positive | Integration |
| TC-030 | FR-020.2 Daily Report | ผลการส่งปรากฏในรายงานสรุปกลางของ CSMS พร้อม breakdown ตามประเภทกรมธรรม์ | Positive | P2 | @positive | Integration |
| TC-031 | SC-006 Traceability | ทุกรายการที่ส่งสำเร็จ trace กลับรายการรอบแรกได้ 100% | Positive | P1 | @positive | Integration |
| TC-032 | FR-019 Alert Email | ความล้มเหลวระดับรอบ → ส่ง email แจ้งเตือนทีม IT + User ทันที | Positive | P2 | @positive | Integration |
| TC-033 | FR-007 cardNo Lookup | ไม่พบ cardNo จากหมายเลขกรมธรรม์ → skip + `sent_status`='F' ไม่หยุดรอบ | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-034 | FR-011 Error Handling | ผลตรวจสถานะเป็น E13 → skip รายการนั้นทันที ไม่ retry ไม่หยุดรอบ + 'F' | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-035 | FR-011 Error Handling | channel/isBlockLine เป็นค่าว่าง/นอกเงื่อนไข → skip + 'F' ประมวลผลรายการถัดไปต่อ | Negative/Validation | P1 | @negative | Integration |
| TC-036 | FR-015.1 Missing Name | ไม่พบชื่อผู้เอาประกัน (${var1} ว่าง) → skip + 'F' MUST NOT ส่งข้อความไร้ชื่อ | Negative/Validation | P1 | @negative @smoke | Integration |
| TC-037 | FR-016 No Active Config | วันประมวลผลไม่มี config Active → หยุดรอบทั้งรอบ + แจ้งเตือน | Negative/Validation | P1 | @negative | Integration |
| TC-038 | FR-012 Service Down | บริการตรวจสถานะล่มทั้งระบบ → retry ≤3 ครั้งเว้นช่วง → หยุดรอบ + แจ้งเตือน | Negative/Validation | P1 | @negative | Integration |
| TC-039 | FR-004 Inforce | กรมธรรม์พ้นสภาพ (ไม่ Inforce) → คัดออก ไม่ส่ง | Negative/Validation | P1 | @negative | Integration |
| TC-040 | FR-005 Mobile Selection | mobile1 และ mobile2 ว่างทั้งคู่ → คัดออก ไม่ส่ง | Negative/Validation | P1 | @negative | Integration |
| TC-041 | FR-020.1 No Auto-retry | รอบ daily ปกติ MUST NOT ดึงรายการ 'F' ค้างมา retry อัตโนมัติ | Negative/Validation | P1 | @negative | Integration |
| TC-042 | FR-019 Alert Email | email ระบุชื่อ batch และ**ขั้นตอนที่ล้มเหลว** ตาม convention เดิม | Negative/Validation | P2 | @negative | Integration |
| TC-043 | FR-014 SMS Template | ไม่พบ template ทั้งตารางกำหนดการและตารางหลัก (fallback ล้มเหลว) | Negative/Validation | P2 | @negative | Integration |
| TC-044 | FR-015 Config | config REWARDS/LINE_LINK ไม่ Active → ปฏิบัติเหมือนไม่มี config (หยุดรอบ + แจ้ง) | Negative/Validation | P2 | @negative | Integration |
| TC-045 | FR-002 Target Selection | ข้อมูลรอบแรกผิดรูป (policy_no ว่าง/`sms_sent_date` NULL) → ไม่ทำให้รอบล่ม | Negative/Validation | P2 | @negative | Integration |
| TC-046 | FR-015 Message Render | ชื่อลูกค้าเป็น adversarial input (`${var2}`, `<script>`, `%`, emoji, RTL, NBSP) → แทนค่าแบบ literal ไม่เกิด template injection | Negative/Validation | P1 | @negative @security | Unit |
| TC-047 | FR-015 Message Render | ชื่อยาวสุด / ยาวเกิน → ความยาว SMS ที่ประกอบเสร็จอยู่ในเกณฑ์ ไม่ตัดตัวแปรทิ้ง | Negative/Validation | P2 | @negative @edge_case | Unit |
| TC-048 | FR-005 Mobile Selection | เบอร์โทร adversarial (สั้น/ยาวเกิน, ไม่ใช่ตัวเลข, `+66`, มีช่องว่าง, null byte) | Negative/Validation | P1 | @negative | Integration |
| TC-049 | FR-003 Config DATE_COUNT | ค่า N adversarial (0, -1, ไม่ใช่ตัวเลข, 9999) → validate ไม่ทำให้รอบล่มเงียบ | Negative/Validation | P2 | @negative | Integration |
| TC-050 | FR-020.2 Manual Fix Date | ช่วงวันที่ adversarial (end<start, ปี 9999, อดีตไกลมาก, start==end) | Negative/Validation | P2 | @negative | E2E |
| TC-051 | FR-002 Target Selection | รอบแรกของวันอ้างอิงไม่มีข้อมูลเลย → จบรอบปกติ ไม่ใช่ความล้มเหลว ไม่ส่ง email | Edge | P1 | @edge_case | Integration |
| TC-052 | FR-002 Target Selection | ขอบเขตการนับวัน: N−1 / N / N+1 วัน — ส่งเฉพาะ N พอดี | Edge | P1 | @edge_case @smoke | Integration |
| TC-053 | FR-009 Send Criteria | ลูกค้าลงทะเบียน App หลังคัดกรองแต่ก่อนส่งจริง → ยอมรับได้ (ตรวจ ณ เวลาประมวลผล) | Edge | P2 | @edge_case | Integration |
| TC-054 | FR-003 Config DATE_COUNT | เปลี่ยน N 20→15 ทำให้บาง cohort ถูกข้าม → กลไกกันส่งซ้ำยังทำงาน + ซ่อมผ่าน Manual Fix ได้ | Edge | P2 | @edge_case | Integration |
| TC-055 | FR-013.1 In-round Dedup | tie-break: วันเก่าสุดเท่ากัน → เลือก policy_no น้อยสุด (deterministic) | Edge | P1 | @edge_case | Unit |
| TC-056 | FR-004 Policy Type Map | map รหัสประเภท 'O'→ORD, 'I'→IND, 'G'→GOV, 'P'→PA ครบ 4 ประเภท (+ ความกำกวม '0'/'1') | Edge | P1 | @edge_case | Integration |
| TC-057 | FR-004 GOV Path | เส้นทาง GOV จาก `ili_policy_master`/`ili_policy_remark` (ไม่มี precedent จาก 002) | Edge | P1 | @edge_case | Integration |
| TC-058 | FR-005 Mobile Selection | ลูกค้าเปลี่ยนเบอร์ระหว่าง 20 วัน → ส่งเบอร์ปัจจุบัน + บันทึกเบอร์ที่ส่งจริงลงประวัติ | Edge | P1 | @edge_case | Integration |
| TC-059 | FR-001 Daily Schedule | Manual Fix รันทับซ้อนกับรอบ daily บน cohort เดียวกัน → ไม่ส่งซ้ำ | Concurrency | P1 | @concurrency | Integration |
| TC-060 | FR-013 Cross-round Dedup | ประมวลผลลูกค้ารายเดียวกันพร้อมกัน 2 thread → กันส่งซ้ำได้ (unique constraint) | Concurrency | P1 | @concurrency | Integration |
| TC-061 | FR-020 Manual Fix | IT Admin 2 คนสั่ง Manual Fix ช่วงวันที่ทับซ้อนพร้อมกัน → ไม่ส่งซ้ำ | Concurrency | P2 | @concurrency | E2E |
| TC-062 | FR-002 Target Selection | CSMS-001 กำลังเขียน `WELCOME_NEW_CUST_LINE` ขณะ batch นี้อ่าน → อ่านได้ consistent ไม่ล็อกกัน | Concurrency | P2 | @concurrency | Integration |
| TC-063 | FR-018 PDPA | **`cardNo` (เลขประจำตัวประชาชน) ถูกเก็บเป็น plain field** ใน `WELCOME_NEW_CUST_APP` — ไม่มี NFR รองรับ | Security | P1 | @security @pdpa | Integration |
| TC-064 | FR-015 PDPA | เนื้อหา SMS MUST NOT มี policy_no / cardNo / ข้อมูลการเงิน | Security | P1 | @security @pdpa @smoke | Unit |
| TC-065 | FR-015 PDPA | ข้อความมีช่องทาง opt-out (เบอร์ Call Center `1503`) ตาม precedent Principle I | Security | P1 | @security @pdpa | Unit |
| TC-066 | FR-006 PDPA | Do Not Contact เป็น PDPA control — ไม่มีรายการ DNC หลุดไปยัง gateway แม้แต่รายเดียว | Security | P1 | @security @pdpa | Integration |
| TC-067 | FR-002/FR-007 Injection | ข้อมูลจากรอบแรก/policy_no ที่มี SQL metacharacter → parameterized ไม่เกิด injection ใน 2-step query | Security | P1 | @security | Integration |
| TC-068 | FR-019 PDPA | email แจ้งเตือน MUST NOT รั่ว PII (ชื่อ/เบอร์/cardNo) ในเนื้อหา | Security | P1 | @security @pdpa | Integration |
| TC-069 | FR-020 RBAC | เฉพาะ `IT_ADMIN` เท่านั้นที่สั่ง Manual Fix ได้ — role อื่นถูกปฏิเสธ | Security | P1 | @security | E2E |
| TC-070 | FR-018 PDPA | `mobile_no`/`fname`/`lname` ใน log ไม่ถูก mask — ยืนยันขอบเขต waiver Principle IV และไม่ขยายเกินตาราง log | Security | P2 | @security @pdpa | Integration |
| TC-071 | FR-017 PDPA | **[DISPUTED-CSV]** ไฟล์ CSV มีชื่อ+เบอร์+รางวัล → สิทธิ์ไฟล์/การเก็บรักษา/การลบ ไม่มี NFR รองรับ | Security | P1 | @security @pdpa @disputed @csv-path | Integration |
| TC-072 | FR-013.1/FR-018.2 | รายการที่ไม่ถูกเลือกในรอบ (dedup) ยังถูกบันทึกประวัติเพื่อให้ reconcile ครบ | Side-Effects | P1 | @side_effect | Integration |
| TC-073 | FR-018 credit_amount | บันทึก `credit_amount` ต่อรายการด้วย logic เดิมของ CSMS (นอก scope การคำนวณ) | Side-Effects | P2 | @side_effect | Integration |
| TC-074 | FR-013 Dedup Scope | กลไกกันส่งซ้ำตรวจเฉพาะ `sms_sent_date IS NOT NULL` — รายการ 'F' ต้องไม่ถูกบล็อกจากการส่งใหม่ | Side-Effects | P1 | @side_effect @smoke | Integration |
| TC-075 | FR-002 Read-only | `WELCOME_NEW_CUST_LINE` ของ CSMS-001 ต้องถูกอ่านอย่างเดียว — ไม่มีการเขียน/แก้ไข | Side-Effects | P1 | @side_effect | Integration |
| TC-076 | FR-018 Gateway Result | `refer_no` และสถานะการส่งกลับจากช่องทางกลางถูกบันทึกลงประวัติ | Side-Effects | P1 | @side_effect | Integration |
| TC-077 | Plan Constraint | reuse `mappedSystemName` `CSMS_SNC_NewCust` ของ 002 → ไม่กระทบ traffic/โควตาของ 002 | Side-Effects | P2 | @side_effect | Integration |
| TC-078 | FR-014 Category Code | **[CF-004]** `SMS_CATEGORY` code ที่ใช้จริง — spec ระบุ '111' แต่ plan ระบุ `114` → ตรวจและ flag | Side-Effects | P1 | @side_effect @regression | Integration |
| TC-079 | FR-019 Alert UX | email แจ้งเตือนอ่านเข้าใจได้: subject/body ระบุ batch + ขั้นตอน + เวลา + สิ่งที่ต้องทำต่อ | UX/Usability | P2 | @ux_usability | Integration |
| TC-080 | FR-020 Manual Fix UX | หน้า Manual Fix: เลือกช่วงวันที่, feedback หลังสั่ง, empty state เมื่อไม่มีรายการค้าง | UX/Usability | P2 | @ux_usability | E2E |
| TC-081 | FR-020 Manual Fix UX | dropdown `sms-monitor` มีรายการ batch ใหม่ และค่ายาวไม่ทำ layout พัง | UX/Usability | P3 | @ux_usability | E2E |
| TC-082 | FR-020.2 Report UX | รายงานสรุปประจำวันอ่านออก: breakdown ตามประเภท + เหตุผลการคัดออก แยกชัด | UX/Usability | P2 | @ux_usability | E2E |
| TC-083 | FR-017 CSV | **[DISPUTED-CSV]** สร้างไฟล์นำส่ง CSV เข้ารหัส UTF-8 | Positive | P1 | @positive @disputed @csv-path | Integration |
| TC-084 | FR-017 CSV | **[DISPUTED-CSV]** ชื่อไฟล์ `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv` (ปี พ.ศ. 2 หลัก) | Positive | P1 | @positive @disputed @csv-path | Unit |
| TC-085 | FR-017 CSV | **[DISPUTED-CSV]** นำส่งไฟล์ผ่านช่องทางกลาง (ESB → SMS Gateway) | Positive | P1 | @positive @disputed @csv-path | Integration |
| TC-086 | FR-017/FR-019 CSV | **[DISPUTED-CSV]** สร้างไฟล์ CSV ไม่สำเร็จ → หยุดรอบ + email แจ้งเตือน (US2 AS1) | Negative/Validation | P1 | @negative @disputed @csv-path | Integration |
| TC-087 | FR-017 CSV | **[DISPUTED-CSV]** เนื้อหาไฟล์: ชื่อไทย UTF-8 ไม่เพี้ยน, comma/quote/newline ในชื่อถูก escape | Edge | P1 | @edge_case @disputed @csv-path | Integration |
| TC-088 | FR-017 API | **[DISPUTED-API]** เรียก SMS Gateway V3 `sendSmsOtp` แบบรายรายการ — 1 HTTP call ต่อลูกค้า 1 ราย | Positive | P1 | @positive @disputed @api-path | Integration |
| TC-089 | FR-017 API | **[DISPUTED-API]** response รายครั้งให้ `refer_no` + สถานะ และถูก map กลับรายการนั้นถูกต้อง | Positive | P1 | @positive @disputed @api-path | Integration |
| TC-090 | FR-017 API | **[DISPUTED-API]** call รายรายการล้มเหลว → `sent_status`='F' รายนั้น ไม่หยุดรอบ ทำรายการถัดไปต่อ | Negative/Validation | P1 | @negative @disputed @api-path | Integration |
| TC-091 | FR-017 API | **[DISPUTED-API]** ~1,000 call synchronous ต่อเนื่อง จบภายในกรอบเวลารอบ (ไม่มี NFR ให้ assert — CF-005) | Edge | P2 | @edge_case @disputed @api-path | Integration |
| TC-092 | FR-017 API | **[DISPUTED-API]** ยืนยันว่าไม่มีไฟล์ CSV ถูกสร้างที่ใดเลยในระบบ | Side-Effects | P1 | @side_effect @disputed @api-path | Integration |
| TC-093 | FR-019 Alert Email | ช่องทางนำส่ง (ESB/SMS Gateway) ล่มทั้งระบบ → หยุดรอบ + email แจ้งเตือน | Negative/Validation | P1 | @negative | Integration |
| TC-094 | FR-019 Alert Email | แหล่งข้อมูล (dwconsol) ผิดพลาด/ไม่พร้อมใช้ → หยุดรอบ + email แจ้งเตือน | Negative/Validation | P1 | @negative | Integration |

> **หมายเหตุ (coverage iteration 2)**: TC-093 และ TC-094 ถูกเพิ่มจากผลการ audit ของ mode `coverage` รอบที่ 1
> ซึ่งพบว่า FR-019 ระบุ trigger ความล้มเหลวระดับรอบไว้ **5 กรณี** แต่การออกแบบรอบแรกคลุมเพียง 3 กรณี
> (ดู `coverage-review_csms-002-welcome-round2.md` Pass 1)

---

## BDD Scenarios (Gherkin)

```gherkin
Feature: CSMS-002 — Batch ส่ง SMS Welcome New Customer (Ocean Club) รอบ 2

  Background:
    Given ระบบ CSMS มี batch "SmsWelcomeNewCustAppCamelBean" ติดตั้งอยู่
    And มี config แคมเปญ "CSMS_SNC_NewCustApp" สถานะ Active (DATE_COUNT=20, REWARDS, LINE_LINK)
    And มีตาราง "WELCOME_NEW_CUST_LINE" ของ CSMS-001 พร้อมข้อมูลประวัติการส่งรอบแรก
    And มีตาราง "WELCOME_NEW_CUST_APP" พร้อมฟิลด์ sent_status และ FK กลับ WELCOME_NEW_CUST_LINE
```

### Positive — การคัดเลือกกลุ่มเป้าหมายและการส่ง

```gherkin
# Covers: FR-001, SC-001
Scenario: TC-001 Batch ทำงานอัตโนมัติทุกวันเวลา 10:00 น.
  Given batch scheduler เปิดใช้งาน (smsWelcomeNewCustAppAutoStart = true)
  And มีกลุ่มเป้าหมายที่เข้าเงื่อนไขในวันประมวลผล
  When นาฬิการะบบถึงเวลา 10:00 น.
  Then route "smsWelcomeNewCustAppScheduler" เริ่มทำงานภายในรอบเวลานั้น
  And มีการบันทึกเวลาเริ่มรอบลง CSMS_LOG

# Covers: FR-001
Scenario: TC-002 Cron expression ต้องเป็น 10:00 น. จริง — ไม่ copy bug ของ 002
  Given ไฟล์ "spring-camel-smsSending.xml" มี route ของ batch นี้
  When ตรวจค่า cron expression ของ route
  Then ค่าต้องเป็น "0 0 10 * * ?"
  And ค่าต้อง NOT เป็น "0 13 14 * * ?" (bug ที่ตกค้างใน 002 ตาม plan.md:44)
  And ค่าต้องตรงกับที่ระบุใน comment/JavaDoc ของ bean

# Covers: FR-002, SC-001
Scenario: TC-003 ดึงกลุ่มเป้าหมายจากประวัติรอบแรกที่ครบกำหนด
  Given มีรายการใน WELCOME_NEW_CUST_LINE ที่ sent_status='S' และ sms_sent_date = วันประมวลผล − 20 วัน
  When batch ประมวลผลรอบ
  Then ระบบดึง policy_no, policy_type และเบอร์โทรของรายการนั้นมาตรวจสอบต่อ
  And รายการที่ sms_sent_date ไม่ครบกำหนดไม่ถูกดึงมา

# Covers: FR-003
Scenario: TC-004 อ่านจำนวนวันครบกำหนดจาก config กลาง
  Given cf_catalog มี row ประเภท DATE_COUNT ของแคมเปญ "CSMS_SNC_NewCustApp" สถานะ Active ค่า 20
  When batch เริ่มประมวลผล
  Then ระบบใช้ค่า N = 20 ในการคัดเลือกกลุ่มเป้าหมาย
  And ไม่มีค่า 20 ถูก hard-code ในโค้ด

# Covers: FR-003, US1-AS6
Scenario: TC-005 เปลี่ยนค่า config แล้วรอบถัดไปใช้ค่าใหม่ทันที
  Given ค่า DATE_COUNT ถูกเปลี่ยนจาก 20 เป็น 15 ขณะแคมเปญยัง Active
  When batch ประมวลผลรอบถัดไป
  Then ระบบคัดเลือกกลุ่มเป้าหมายที่ sms_sent_date = วันประมวลผล − 15 วัน
  And ไม่ต้อง restart หรือแก้ไขระบบใดๆ

# Covers: FR-004
Scenario Outline: TC-006 / TC-007 เกณฑ์ Inforce แยกตามประเภทกรมธรรม์
  Given ลูกค้ามีประวัติรอบแรกครบกำหนด N วัน
  And กรมธรรม์ประเภท "<policy_type>" มีสถานะ "<status>"
  When batch ตรวจสอบสถานะกรมธรรม์
  Then ผลการตรวจเป็น "<result>"

  Examples: TC-006 — ORD/PA ใช้สถานะ '1' เท่านั้น
    | policy_type | status | result |
    | ORD         | 1      | ผ่าน   |
    | PA          | 1      | ผ่าน   |

  Examples: TC-007 — IND/GOV ใช้สถานะ '1','2','3'
    | policy_type | status | result |
    | IND         | 1      | ผ่าน   |
    | IND         | 2      | ผ่าน   |
    | IND         | 3      | ผ่าน   |
    | GOV         | 1      | ผ่าน   |
    | GOV         | 2      | ผ่าน   |
    | GOV         | 3      | ผ่าน   |

# Covers: FR-005
Scenario Outline: TC-008 / TC-009 การเลือกเบอร์โทรศัพท์ที่ใช้ส่ง
  Given ข้อมูลกรมธรรม์ปัจจุบันมี mobile1 = "<mobile1>" และ mobile2 = "<mobile2>"
  When batch เลือกเบอร์ที่จะใช้ส่ง
  Then เบอร์ที่ใช้ส่งคือ "<used>"

  Examples:
    | mobile1     | mobile2     | used        | note   |
    | 0812345678  | 0898765432  | 0812345678  | TC-008 |
    | (ว่าง)      | 0898765432  | 0898765432  | TC-009 |
    |             | 0898765432  | 0898765432  | TC-009 |

# Covers: FR-005, EC "เบอร์ไม่ตรงกัน"
Scenario: TC-010 ใช้เบอร์ปัจจุบันจากกรมธรรม์ ไม่ใช่เบอร์จากประวัติรอบแรก
  Given ประวัติรอบแรกบันทึกเบอร์ "0811111111"
  And ข้อมูลกรมธรรม์ปัจจุบันมี mobile1 = "0822222222"
  When batch ประมวลผลและส่ง SMS
  Then SMS ถูกส่งไปยัง "0822222222"
  And เบอร์ "0811111111" ใช้เพื่อการอ้างอิง/ตามรอยเท่านั้น ไม่ถูกใช้ส่ง

# Covers: FR-006, SC-003
Scenario Outline: TC-011 / TC-012 คัดออกตามเงื่อนไข Do Not Contact
  Given กรมธรรม์ประเภท "<policy_type>" มี remark code "<remark>"
  When batch คัดกรอง Do Not Contact
  Then ลูกค้ารายนี้ถูก "<action>"

  Examples: TC-011 — ORD ใช้ remark '1'
    | policy_type | remark | action        |
    | ORD         | 1      | คัดออก ไม่ส่ง |
    | ORD         | 4      | ไม่คัดออก     |

  Examples: TC-012 — IND/GOV/PA ใช้ remark '4'
    | policy_type | remark | action        |
    | IND         | 4      | คัดออก ไม่ส่ง |
    | GOV         | 4      | คัดออก ไม่ส่ง |
    | PA          | 4      | คัดออก ไม่ส่ง |
    | IND         | 1      | ไม่คัดออก     |

# Covers: FR-007
Scenario: TC-013 แปลงหมายเลขกรมธรรม์เป็น cardNo สำเร็จ
  Given ลูกค้ามีกรมธรรม์ "P0000001" ที่ผ่านเกณฑ์คัดกรองแล้ว
  When batch เรียกบริการตรวจสอบข้อมูลลูกค้าเพื่อแปลง policy_no → cardNo
  Then ระบบได้ค่า cardNo กลับมาและใช้ตรวจสถานะลงทะเบียนต่อ

# Covers: FR-008
Scenario: TC-014 ตรวจสถานะลงทะเบียนครบทั้ง 2 ช่องทาง
  Given ลูกค้ามี cardNo ที่ค้นพบแล้ว
  When batch เรียก MsaCustlookupClient.checkWelcomeEligibility()
  Then มีการตรวจ channel "LINE" (Ocean Connect)
  And มีการตรวจ channel "APP" (Ocean Club App)
  And ผลของทั้งสองช่องทางถูกนำมาประเมินร่วมกันตาม FR-009/FR-010

# Covers: FR-009, FR-010, SC-001, SC-003
Scenario Outline: TC-015 / TC-016 / TC-017 / TC-018 เกณฑ์ตัดสินส่ง/ไม่ส่ง SMS
  Given ลูกค้าผ่านเกณฑ์เวลา/Inforce/เบอร์/Do Not Contact ครบ
  And ผลตรวจ LINE = "<line>" โดย isBlockLine = "<block>"
  And ผลตรวจ APP = "<app>"
  When batch ประเมินเกณฑ์การส่ง
  Then ระบบ "<action>"

  Examples:
    | line | block | app | action        | tc     |
    | E02  | -     | E02 | ส่ง SMS       | TC-015 |
    | E00  | true  | E02 | ส่ง SMS       | TC-016 |
    | E02  | -     | E00 | ไม่ส่ง (คัดออก) | TC-017 |
    | E00  | true  | E00 | ไม่ส่ง (คัดออก) | TC-017 |
    | E00  | false | E02 | ไม่ส่ง (คัดออก) | TC-018 |
    | E00  | false | E00 | ไม่ส่ง (คัดออก) | TC-018 |

# Covers: FR-013, SC-002
Scenario: TC-019 ไม่ส่งซ้ำข้ามรอบให้รายการที่เคยส่งสำเร็จ
  Given มีประวัติใน WELCOME_NEW_CUST_APP ที่ policy_no + policy_type + เบอร์โทร ตรงกับรายการปัจจุบัน
  And ประวัตินั้นมี sms_sent_date IS NOT NULL
  When batch ประมวลผลรอบถัดไป
  Then ระบบไม่ส่ง SMS ซ้ำให้ลูกค้ารายนี้

# Covers: FR-013.1, SC-002
Scenario: TC-020 ลูกค้า 1 รายหลายกรมธรรม์ในรอบเดียว → ส่ง 1 ข้อความ
  Given ลูกค้า "สมชาย ทดสอบ" เบอร์ "0812345678" มี 3 กรมธรรม์เข้าเงื่อนไขในรอบเดียวกัน
  When batch ทำ dedup ตาม (ชื่อ, นามสกุล, เบอร์โทร)
  Then มี SMS ถูกส่งเพียง 1 ข้อความ
  And รายการตัวแทนที่ถูกเลือกคือรายการที่ commencement/วันที่เก่าสุด
  And รายการที่ไม่ถูกเลือกยังถูกบันทึกประวัติเพื่อ reconcile (ดู TC-072)

# Covers: FR-014
Scenario: TC-021 ดึงรูปแบบข้อความจากตารางกำหนดการข้อความ
  Given sms_message_schedule มี template ของรหัสประเภทข้อความของแคมเปญนี้
  When batch เตรียมข้อความ
  Then ระบบใช้ template จาก sms_message_schedule
  # หมายเหตุ CF-004: spec.md FR-014 ระบุรหัส '111' แต่ plan.md ระบุ SMS_CATEGORY code 114 — ต้องยืนยันค่าจริง (ดู TC-078)

# Covers: FR-014
Scenario: TC-022 fallback ไปตารางประเภทข้อความหลักเมื่อไม่พบ
  Given sms_message_schedule ไม่มี template ของรหัสประเภทข้อความนี้
  And SMS_CATEGORY มี template ของรหัสนี้
  When batch เตรียมข้อความ
  Then ระบบใช้ template จาก SMS_CATEGORY แทน (fallback)
  And รอบไม่ล้มเหลว

# Covers: FR-015, SC-004
Scenario: TC-023 แทนค่าตัวแปรครบ 3 ตัวก่อนส่ง
  Given template มีตัวแปร ${var1}, ${var2}, ${var3}
  And config Active ให้ REWARDS = "100" และ LINE_LINK = "https://example.test/app"
  And ชื่อผู้เอาประกันคือ "สมชาย ทดสอบ"
  When WelcomeMessageRenderer.render() ประกอบข้อความ (overload 3 ตัวแปร)
  Then ข้อความที่ได้มีชื่อ "สมชาย ทดสอบ", มูลค่า "100" และลิงก์ครบถ้วน
  And ข้อความ MUST NOT มีรูปแบบ "${var" หลงเหลืออยู่เลย

# Covers: FR-018
Scenario: TC-024 บันทึกประวัติการส่ง 2 ระดับ
  Given batch ส่ง SMS สำเร็จให้ลูกค้า 1 ราย
  When ระบบบันทึกผล
  Then CSMS_LOG มีบันทึกระดับรอบ (ข้อความจริงที่ส่ง, ชื่อย่อประเภทข้อความ, เวลาสร้าง)
  And WELCOME_NEW_CUST_APP มีบันทึกรายกรมธรรม์ครบ (policy_no, policy_type, fname, lname, card_no, commencement_date, sms_sent_date, mobile_no, message, credit_amount, ผู้สร้าง/แก้ไข)

# Covers: FR-018.1, SC-006
Scenario: TC-025 ประวัติรอบสองเชื่อมโยงกลับรายการรอบแรก
  Given รายการรอบแรกใน WELCOME_NEW_CUST_LINE มี ID = 5001 เป็นต้นทางของกลุ่มเป้าหมายรายนี้
  When batch บันทึกประวัติรอบสอง
  Then record ใน WELCOME_NEW_CUST_APP มี FK อ้างอิงกลับไปยัง ID 5001
  And FK นี้ไม่เป็น NULL สำหรับทุกรายการที่มาจากรอบแรก

# Covers: FR-018.2
Scenario: TC-026 บันทึกรายการส่งสำเร็จด้วย sent_status='S'
  Given SMS ถูกส่งสำเร็จ
  When ระบบบันทึกผลลง WELCOME_NEW_CUST_APP
  Then sms_sent_date = วันที่ส่ง
  And sent_status = 'S'

# Covers: FR-020, SC-007
Scenario: TC-027 Manual Fix ประมวลผลรอบที่ล้มเหลวใหม่
  Given รอบ batch ของวันที่ 2026-07-10 ล้มเหลวทั้งรอบ (ไม่มีรายการใดถูกส่ง)
  When IT Admin เลือกช่วงวันที่ 2026-07-10 และสั่ง Manual Fix
  Then ระบบประมวลผลกลุ่มเป้าหมายของรอบวันนั้นใหม่
  And ส่ง SMS ให้รายการที่ยังไม่เคยส่งสำเร็จ

# Covers: FR-020, FR-013, SC-002, SC-007
Scenario: TC-028 Manual Fix ส่งเฉพาะรายการค้าง ไม่ส่งซ้ำ
  Given ช่วงวันที่ที่เลือกมีรายการ sent_status='S' จำนวน 10 ราย และรายการค้าง (sms_sent_date IS NULL) จำนวน 3 ราย
  When IT Admin สั่ง Manual Fix ช่วงวันที่นั้น
  Then มี SMS ถูกส่งเพียง 3 ข้อความ
  And ลูกค้า 10 รายที่สำเร็จแล้วไม่ได้รับข้อความซ้ำ

# Covers: FR-020.2
Scenario: TC-029 การตีความช่วงวันที่ Manual Fix
  Given ค่า N ปัจจุบันใน config = 20
  When IT Admin สั่ง Manual Fix สำหรับวันประมวลผล 2026-07-15
  Then ระบบหากลุ่มเป้าหมายจากประวัติรอบแรกที่ sms_sent_date = 2026-06-25 (2026-07-15 − 20 วัน)
  And ระบบใช้ค่า N ปัจจุบัน ณ เวลาสั่ง Manual Fix (ไม่ย้อนดูประวัติค่า config)

# Covers: FR-020.2 (ครึ่งรายงาน — ดู CF-003; FR number ยังไม่ถูกแยกโดย SA)
Scenario: TC-030 ผลการส่งปรากฏในรายงานสรุปกลางของ CSMS
  Given batch ประมวลผลรอบเสร็จสิ้น มีทั้งรายการ 'S', 'F' และรายการที่ถูกคัดออก
  When เปิดรายงานสรุปประจำวันกลางของ CSMS
  Then แคมเปญนี้ปรากฏเป็นอีกหนึ่งรายการในรายงานเดียวกัน (ไม่มีรายงานแยกใหม่)
  And รายงานแสดง: จำนวนประมวลผลทั้งหมด, ส่งสำเร็จ (S), ไม่สำเร็จ/skip (F)
  And รายงานแสดงจำนวนที่ถูกคัดออกแยกตามเหตุผล (Do Not Contact / ลงทะเบียนแล้ว / ซ้ำในรอบ / เคยส่งแล้ว)
  And รายงานมี breakdown ตามประเภทกรมธรรม์ (ORD/IND/GOV/PA)

# Covers: FR-018.1, SC-006
Scenario: TC-031 Traceability กลับรอบแรก 100%
  Given batch ประมวลผลและส่งสำเร็จ 100 รายการในรอบหนึ่ง
  When ตรวจสอบทุก record ที่ sent_status='S' ใน WELCOME_NEW_CUST_APP
  Then ทุก record มี FK ชี้ไปยังรายการ WELCOME_NEW_CUST_LINE ที่มีอยู่จริง
  And อัตราการ trace กลับได้ = 100% (0 orphan)

# Covers: FR-019, SC-005
Scenario: TC-032 แจ้งเตือน email เมื่อความล้มเหลวระดับรอบ
  Given batch ไม่สามารถสกัดข้อมูลกลุ่มเป้าหมายได้ตามรอบเวลา 10:00 น.
  When ระบบตรวจพบความล้มเหลว
  Then ระบบส่ง email ผ่าน OMail ไปยังทีม IT Development และกลุ่มผู้ใช้งาน
  And email ถูกส่งภายใน 15 นาทีนับจากตรวจพบ (SC-005)
```

### Negative / Validation

```gherkin
# Covers: FR-007, EC-005
Scenario: TC-033 ไม่พบ cardNo → skip + 'F' ไม่หยุดรอบ
  Given รอบมีกลุ่มเป้าหมาย 5 ราย
  And ลูกค้ารายที่ 3 ไม่พบ cardNo จากบริการตรวจสอบข้อมูลลูกค้า
  When batch ประมวลผล
  Then รายการที่ 3 ถูก skip และบันทึก WELCOME_NEW_CUST_APP ด้วย sent_status='F', sms_sent_date=NULL
  And รายการที่ 1,2,4,5 ยังถูกประมวลผลต่อจนจบ
  And รอบไม่ถูกหยุด และไม่มี email แจ้งเตือนระดับรอบ

# Covers: FR-011
Scenario: TC-034 ผลตรวจ E13 → skip ทันที ไม่ retry
  Given บริการตรวจสถานะตอบกลับ E13 (Error/Exception) สำหรับลูกค้ารายหนึ่ง
  When batch ประมวลผลรายการนั้น
  Then ระบบ skip รายการนั้นทันทีโดย MUST NOT retry
  And บันทึก sent_status='F' พร้อม sms_sent_date=NULL
  And ระบบประมวลผลรายการถัดไปต่อจนจบรอบ

# Covers: FR-011
Scenario Outline: TC-035 ค่านอกเหนือเงื่อนไข → skip + 'F'
  Given ผลตรวจสถานะตอบกลับ channel = "<channel>" และ isBlockLine = "<block>"
  When batch ประเมินเกณฑ์การส่ง
  Then ระบบ skip รายการนั้น + บันทึก sent_status='F'
  And ระบบไม่หยุดรอบ

  Examples:
    | channel | block  | note                      |
    |         |        | ค่าว่างทั้งคู่            |
    | LINE    |        | isBlockLine ว่าง          |
    | UNKNOWN | true   | channel นอกเงื่อนไข       |
    | LINE    | maybe  | isBlockLine ไม่ใช่ boolean |

# Covers: FR-015.1, SC-004
Scenario: TC-036 ไม่พบชื่อผู้เอาประกัน → skip ไม่ส่งข้อความไร้ชื่อ
  Given ลูกค้ารายหนึ่งผ่านเกณฑ์ทุกข้อ แต่ค่าที่ใช้แทน ${var1} เป็นค่าว่าง
  When batch เตรียมส่ง
  Then ระบบ MUST NOT ส่ง SMS ให้รายการนี้
  And บันทึก sent_status='F', sms_sent_date=NULL
  And ไม่มีข้อความที่ขึ้นต้นด้วยคำทักทายว่างเปล่าถูกส่งออกไป

# Covers: FR-016, US2-AS3
Scenario: TC-037 ไม่มี config Active → หยุดรอบทั้งรอบ + แจ้งเตือน
  Given วันประมวลผลไม่มีค่า config แคมเปญที่ Active เลย (จำนวนวัน/รางวัล/ลิงก์)
  When batch เริ่มประมวลผล
  Then ระบบหยุดรอบนั้นทั้งรอบ
  And ไม่มี SMS ถูกส่งแม้แต่รายการเดียว
  And ระบบส่ง email แจ้งเตือนตาม FR-019 ระบุขั้นตอนที่ล้มเหลว

# Covers: FR-012, US2-AS2
Scenario: TC-038 บริการตรวจสถานะล่มทั้งระบบ → retry ≤3 → หยุดรอบ
  Given บริการ msa-custlookup ไม่ตอบสนองทั้งระบบ
  When batch เรียกผ่าน WelcomeEligibilityRetry
  Then ระบบ retry สูงสุด 3 ครั้งโดยเว้นช่วงระหว่างครั้ง
  And หากยังไม่สำเร็จ ระบบหยุดรอบนั้น
  And ส่ง email แจ้งเตือนตาม FR-019
  And จำนวนครั้งที่เรียกทั้งหมด MUST NOT เกิน 4 (ครั้งแรก + retry 3)

# Covers: FR-004, SC-003
Scenario: TC-039 กรมธรรม์พ้นสภาพ → คัดออก
  Given ลูกค้าเข้าเงื่อนไขเวลา แต่กรมธรรม์ ORD มีสถานะ '9' (พ้นสภาพ)
  When batch คัดกรอง
  Then ลูกค้ารายนี้ถูกคัดออก ไม่มี SMS ถูกส่ง

# Covers: FR-005
Scenario: TC-040 ไม่มีเบอร์โทรที่ติดต่อได้ → คัดออก
  Given ข้อมูลกรมธรรม์มี mobile1 และ mobile2 ว่างทั้งคู่
  When batch คัดกรอง
  Then ลูกค้ารายนี้ถูกคัดออก ไม่มี SMS ถูกส่ง

# Covers: FR-020.1
Scenario: TC-041 รอบ daily ต้องไม่ auto-retry รายการ 'F'
  Given มีรายการ sent_status='F' ค้างอยู่จากรอบก่อนหน้า 5 รายการ
  When batch daily รอบถัดไปทำงาน
  Then ระบบ MUST NOT ดึงรายการ 'F' เหล่านั้นมา retry อัตโนมัติ
  And รายการ 'F' คงอยู่เพื่อรายงาน/audit
  And รายการ 'F' ถูกซ่อมได้ผ่าน Manual Fix เท่านั้น

# Covers: FR-019
Scenario: TC-042 เนื้อหา email ต้องระบุ batch และขั้นตอนที่ล้มเหลว
  Given เกิดความล้มเหลวระดับรอบที่ขั้นตอน "ตรวจสอบสถานะการลงทะเบียน"
  When ระบบส่ง email แจ้งเตือน
  Then email ระบุชื่อ batch ตาม convention เดิม (เช่น "BATCH-CSMS-WELCOME-APP")
  And email ระบุขั้นตอนที่ล้มเหลวอย่างชัดเจน
  And email ใช้รูปแบบมาตรฐานของ batch CSMS เดิม (ผู้รับ/subject/เนื้อหา)

# Covers: FR-014
Scenario: TC-043 ไม่พบ template ทั้งสองตาราง
  Given sms_message_schedule ไม่มี template ของรหัสนี้
  And SMS_CATEGORY ก็ไม่มี template ของรหัสนี้
  When batch เตรียมข้อความ
  Then ระบบ MUST NOT ส่งข้อความว่าง/ข้อความ template ดิบ
  And ระบบจัดการเป็นความล้มเหลวที่ตรวจสอบได้ (หยุดรอบ + แจ้งเตือน หรือ skip + 'F' ตามการตัดสินของ SA)
  # หมายเหตุ: spec.md ไม่ได้ระบุพฤติกรรมกรณี fallback ล้มเหลว → route ไป /speckit-checklist (requirement gap)

# Covers: FR-015, FR-016
Scenario Outline: TC-044 config ที่ไม่ Active ต้องไม่ถูกนำมาใช้
  Given config "<type>" ของแคมเปญมีสถานะ Inactive
  When batch เริ่มประมวลผล
  Then ระบบปฏิบัติเหมือนไม่มี config Active สำหรับค่านั้น (FR-016)
  And หยุดรอบ + ส่ง email แจ้งเตือน
  And MUST NOT ใช้ค่าจาก row ที่ Inactive

  Examples:
    | type      |
    | REWARDS   |
    | LINE_LINK |
    | DATE_COUNT |

# Covers: FR-002
Scenario Outline: TC-045 ข้อมูลรอบแรกผิดรูป → ไม่ทำให้รอบล่ม
  Given รายการใน WELCOME_NEW_CUST_LINE มี "<field>" เป็น "<value>"
  When batch ดึงกลุ่มเป้าหมาย
  Then รายการนั้นถูกจัดการอย่างปลอดภัย (ข้าม/บันทึก 'F') โดยรอบไม่ล่ม
  And ไม่มี NullPointerException หลุดขึ้นมาหยุดรอบ

  Examples:
    | field        | value  |
    | policy_no    | (ว่าง) |
    | policy_type  | (ว่าง) |
    | mobile_no    | (ว่าง) |
    | sms_sent_date| NULL   |

# Covers: FR-015, SC-004 — adversarial catalog §B
Scenario Outline: TC-046 ชื่อลูกค้า adversarial → แทนค่าแบบ literal ไม่เกิด injection
  Given ชื่อผู้เอาประกันในฐานข้อมูลคือ "<name>"
  When WelcomeMessageRenderer ประกอบข้อความ
  Then ค่า "<name>" ปรากฏในข้อความแบบ literal ทุกตัวอักษร
  And MUST NOT ถูกตีความเป็น placeholder/HTML/SQL
  And ข้อความสุดท้าย MUST NOT มี "${var" หลงเหลือ

  Examples:
    | name                  | why                                    |
    | ${var2}               | template injection — ต้องไม่ถูก re-render |
    | ${var1}${var3}        | nested placeholder                     |
    | <script>alert(1)</script> | XSS sink (ข้อความ/รายงาน/log)       |
    | "><b>bold            | markup breakout                        |
    | 100%_off              | LIKE metacharacter เป็น literal        |
    | O'Brien; DROP TABLE x-- | SQL metacharacter เป็น literal        |
    | สมชาย😀ทดสอบ          | emoji / non-BMP                        |
    | مرحبا سمชาย           | RTL mixing                             |
    | สมชาย ทดสอบ           | NBSP (U+00A0) แทน space ปกติ           |

# Covers: FR-015, SC-004 — adversarial catalog §B
Scenario Outline: TC-047 ความยาวชื่อที่ขอบเขต
  Given ชื่อผู้เอาประกันยาว <len> ตัวอักษร
  When ระบบประกอบข้อความและเตรียมส่ง
  Then พฤติกรรมเป็น "<expected>"
  And ตัวแปร ${var2} (รางวัล) และ ${var3} (ลิงก์) MUST NOT ถูกตัดหายไปจากข้อความ

  Examples:
    | len | expected                                    |
    | 1   | ส่งได้ปกติ                                  |
    | 100 | ส่งได้ปกติ                                  |
    | 255 | ส่งได้ที่ขอบเขตสูงสุดของ field              |
    | 256 | เกินขอบเขต — ต้องมีพฤติกรรมที่นิยามไว้ (ไม่ตัดลิงก์ทิ้ง) |

# Covers: FR-005 — adversarial catalog §B/§C
Scenario Outline: TC-048 เบอร์โทร adversarial
  Given ข้อมูลกรมธรรม์มี mobile1 = "<mobile>"
  When batch ตรวจสอบและเตรียมส่ง
  Then พฤติกรรมเป็น "<expected>"

  Examples:
    | mobile        | expected                                   |
    | 081234567     | สั้นกว่า 10 หลัก — ต้องมีพฤติกรรมนิยามไว้  |
    | 08123456789   | ยาวกว่า 10 หลัก — ต้องมีพฤติกรรมนิยามไว้   |
    | 08-1234-5678  | มีขีดคั่น — normalize หรือ reject          |
    |  0812345678   | มีช่องว่างหน้า/หลัง — trim                 |
    | +66812345678  | รูปแบบสากล — normalize หรือ reject         |
    | abcdefghij    | ไม่ใช่ตัวเลข — reject + 'F'                |
    | 0812345678  | null byte — reject/sanitize             |
  # หมายเหตุ: spec.md ไม่ได้นิยาม validation รูปแบบเบอร์ → route ไป /speckit-checklist

# Covers: FR-003 — adversarial catalog §C
Scenario Outline: TC-049 ค่า config N adversarial
  Given cf_catalog DATE_COUNT Active มีค่า "<n>"
  When batch เริ่มประมวลผล
  Then พฤติกรรมเป็น "<expected>"

  Examples:
    | n     | expected                                       |
    | 0     | ส่งวันเดียวกับรอบแรก — ต้องมีพฤติกรรมนิยามไว้    |
    | -1    | ค่าติดลบ — ต้อง reject + แจ้งเตือน ไม่ query อนาคต |
    | abc   | ไม่ใช่ตัวเลข — ต้อง reject + แจ้งเตือน ไม่ล่มเงียบ |
    | 9999  | ค่าสูงมาก — ไม่มีกลุ่มเป้าหมาย จบรอบปกติ         |
  # หมายเหตุ: spec.md ไม่ได้นิยามการ validate ค่า N → route ไป /speckit-checklist

# Covers: FR-020.2 — adversarial catalog §C
Scenario Outline: TC-050 ช่วงวันที่ Manual Fix adversarial
  Given IT Admin เลือกช่วงวันที่ start = "<start>" และ end = "<end>"
  When สั่ง Manual Fix
  Then พฤติกรรมเป็น "<expected>"

  Examples:
    | start      | end        | expected                          |
    | 2026-07-15 | 2026-07-10 | ช่วงกลับด้าน — reject + ข้อความชัดเจน |
    | 2026-07-10 | 2026-07-10 | วันเดียว — ประมวลผลวันนั้นได้      |
    | 9999-12-31 | 9999-12-31 | อนาคตไกล — ไม่มีเป้าหมาย ไม่ล่ม     |
    | 1900-01-01 | 2026-07-17 | ช่วงกว้างมาก — ต้องไม่ทำให้ระบบค้าง  |

# Covers: FR-019, SC-005 — เพิ่มจาก coverage iteration 1 (trigger "ช่องทางนำส่งล่ม")
Scenario: TC-093 ช่องทางนำส่งล่มทั้งระบบ → หยุดรอบ + email
  Given batch คัดกรองและเตรียมข้อมูลสำเร็จแล้ว
  And ช่องทางนำส่ง (ESB / SMS Gateway V3) ไม่ตอบสนองทั้งระบบ
  When batch พยายามนำส่ง
  Then ระบบหยุดรอบนั้น
  And ส่ง email แจ้งเตือนไปยังทีม IT Development และกลุ่มผู้ใช้งาน
  And email ระบุขั้นตอนที่ล้มเหลวคือ "นำส่งผ่านช่องทางกลาง"
  And email ถูกส่งภายใน 15 นาทีนับจากตรวจพบ (SC-005)
  And รายการที่ยังไม่ถูกส่งซ่อมได้ผ่าน Manual Fix (FR-020.1)
  # แยกจาก TC-090 (@api-path) อย่างชัดเจน: TC-090 = call รายรายการล้มเหลว → skip + 'F' ไม่หยุดรอบ
  # TC-093 = ช่องทางล่มทั้งระบบ → ความล้มเหลวระดับรอบ → หยุดรอบ (FR-019 trigger ที่ 2)

# Covers: FR-019, SC-005 — เพิ่มจาก coverage iteration 1 (trigger "แหล่งข้อมูลผิดพลาด")
Scenario: TC-094 แหล่งข้อมูลผิดพลาด/ไม่พร้อมใช้ → หยุดรอบ + email
  Given datasource "java:jboss/datasources/dwconsol" ไม่พร้อมใช้งาน (connection refused / datasource error)
  When batch พยายาม query ili_policy_master / ili_policy_remark
  Then ระบบหยุดรอบนั้น
  And ส่ง email แจ้งเตือนระบุขั้นตอนที่ล้มเหลวคือ "เข้าถึงแหล่งข้อมูลกรมธรรม์"
  And email ถูกส่งภายใน 15 นาทีนับจากตรวจพบ (SC-005)
  And MUST NOT บันทึกรายการทั้งรอบเป็น 'F' รายรายการ (เพราะเป็นความล้มเหลวระดับรอบ ไม่ใช่ระดับรายการ)
  # แยกจาก TC-045 (ข้อมูลผิดรูปรายแถว → ไม่ล่ม) และ TC-038 (บริการตรวจสถานะล่ม → retry×3 ก่อน)
  # FR-012 กำหนด retry เฉพาะ "บริการตรวจสอบสถานะ" — spec ไม่ได้กำหนด retry สำหรับ datasource
  # → ถ้า Dev ใส่ retry ที่นี่ด้วยถือเป็น scope นอกข้อกำหนด; ถ้าไม่ใส่ก็ถูกตาม spec — route ความกำกวมไป /speckit-checklist
```

### Edge

```gherkin
# Covers: FR-002, EC "รอบแรกไม่มีข้อมูล", CF-008
Scenario: TC-051 รอบแรกของวันอ้างอิงไม่มีข้อมูล → จบรอบปกติ
  Given ไม่มีรายการใดใน WELCOME_NEW_CUST_LINE ที่ sms_sent_date = วันประมวลผล − 20
  When batch ประมวลผล
  Then รอบจบลงตามปกติโดยไม่มีข้อผิดพลาด
  And MUST NOT ส่ง email แจ้งเตือนความล้มเหลว (นี่ไม่ใช่ความล้มเหลว)
  And มีบันทึกใน CSMS_LOG ว่ารอบนี้ไม่มีกลุ่มเป้าหมาย

# Covers: FR-002, FR-003, SC-001
Scenario Outline: TC-052 ขอบเขตการนับวันครบกำหนด
  Given รายการรอบแรกมี sms_sent_date = วันประมวลผล − <days> วัน
  And N = 20
  When batch คัดเลือกกลุ่มเป้าหมาย
  Then รายการนี้ "<selected>"

  Examples:
    | days | selected      |
    | 19   | ไม่ถูกเลือก   |
    | 20   | ถูกเลือก      |
    | 21   | ไม่ถูกเลือก   |

# Covers: FR-009, EC "ลงทะเบียนหลังคัดกรอง"
Scenario: TC-053 ลูกค้าลงทะเบียน App หลังคัดกรองแต่ก่อนส่งจริง
  Given ลูกค้าผ่านการคัดกรอง (APP=E02) เวลา 10:00:05
  And ลูกค้าลงทะเบียน App จริงเวลา 10:00:30
  When batch ส่ง SMS เวลา 10:00:45
  Then ยอมรับได้ — ระบบตรวจ ณ เวลาประมวลผลเท่านั้น
  And ไม่ถือเป็นข้อผิดพลาด (ไม่นับเข้า SC-003)

# Covers: FR-003, FR-013, EC "config ถูกเปลี่ยน"
Scenario: TC-054 เปลี่ยน N ทำให้ cohort ถูกข้าม
  Given ค่า N ถูกเปลี่ยนจาก 20 เป็น 15 ทำให้ cohort วันที่ 16-20 ถูกข้ามไป
  When batch ประมวลผลรอบถัดไป
  Then กลไกกันส่งซ้ำ (FR-013) ยังป้องกันการส่งเบิ้ลได้ครบ
  And cohort ที่ถูกข้ามสามารถซ่อมผ่าน Manual Fix ได้ในภายหลัง

# Covers: FR-013.1, SC-002
Scenario: TC-055 tie-break การเลือกรายการตัวแทน (deterministic)
  Given ลูกค้ารายเดียวมี 2 กรมธรรม์ที่ commencement_date เท่ากันทุกประการ
  And policy_no คือ "P0000009" และ "P0000002"
  When WelcomeDedupUtil เลือกรายการตัวแทน
  Then รายการที่ถูกเลือกคือ "P0000002" (policy_no น้อยสุด)
  And รันซ้ำด้วยข้อมูลชุดเดิมได้ผลเดิมทุกครั้ง (deterministic)

# Covers: FR-004, FR-018, CF-007
Scenario Outline: TC-056 การ map รหัสประเภทกรมธรรม์ครบ 4 ประเภท
  Given รหัสประเภทกรมธรรม์จากระบบต้นทางคือ "<code>"
  When batch บันทึกประเภทลงประวัติ
  Then ค่าที่บันทึกคือ "<mapped>"

  Examples:
    | code | mapped |
    | O    | ORD    |
    | I    | IND    |
    | G    | GOV    |
    | P    | PA     |
  # CF-007: เอกสารต้นทางแสดงรหัสเป็น '0'/'1' สำหรับ ORD/IND — spec ปิดด้วยข้อสันนิษฐาน "PDF conversion error"
  # ต้องยืนยันอักขระจริงกับ data contract ก่อนรัน TC นี้ มิฉะนั้นผลลัพธ์ไม่มีความหมาย

# Covers: FR-004, FR-006, CF-006
Scenario: TC-057 เส้นทาง GOV — query ใหม่ไม่มี precedent จาก 002
  Given กรมธรรม์ประเภท GOV สถานะ '2' ใน ili_policy_master
  And ไม่มี remark code '4' ใน ili_policy_remark
  When batch query ข้อมูลกรมธรรม์และ Do Not Contact
  Then ระบบดึงข้อมูล GOV ได้ครบถ้วนถูกต้อง (สถานะ, เบอร์, ชื่อ, commencement_date)
  And ลูกค้ารายนี้ผ่านเกณฑ์เข้าสู่ขั้นตอนตรวจสถานะลงทะเบียน
  # BLOCKED: plan.md:29 ค้าง [NEEDS DBA VERIFICATION] เรื่อง column/join จริงของ ili_policy_master สำหรับ GOV

# Covers: FR-005, FR-018, EC "เบอร์ไม่ตรงกัน"
Scenario: TC-058 ลูกค้าเปลี่ยนเบอร์ระหว่าง 20 วัน
  Given ประวัติรอบแรก (20 วันก่อน) บันทึกเบอร์ "0811111111"
  And ข้อมูลกรมธรรม์ปัจจุบันมี mobile1 = "0899999999"
  When batch ประมวลผลและส่ง SMS
  Then SMS ถูกส่งไปยัง "0899999999"
  And WELCOME_NEW_CUST_APP บันทึก mobile_no = "0899999999" (เบอร์ที่ส่งจริง)
  And FK ยังชี้กลับรายการรอบแรกเดิมได้ถูกต้อง
```

### Concurrency

```gherkin
# Covers: FR-001, FR-013, SC-002
Scenario: TC-059 Manual Fix ทับซ้อนกับรอบ daily บน cohort เดียวกัน
  Given รอบ daily เวลา 10:00 กำลังประมวลผล cohort ของวันนี้
  When IT Admin สั่ง Manual Fix ช่วงวันที่ที่ครอบคลุม cohort เดียวกันในเวลาเดียวกัน
  Then ลูกค้าแต่ละรายได้รับ SMS ไม่เกิน 1 ข้อความ
  And ไม่มี record ซ้ำ (policy_no+policy_type+เบอร์ + sms_sent_date NOT NULL) ใน WELCOME_NEW_CUST_APP

# Covers: FR-013, SC-002
Scenario: TC-060 ประมวลผลลูกค้ารายเดียวกันพร้อมกัน 2 thread
  Given 2 thread หยิบรายการของลูกค้ารายเดียวกันขึ้นมาประมวลผลพร้อมกัน
  When ทั้งสอง thread ผ่านการตรวจกันส่งซ้ำในเวลาไล่เลี่ยกัน (race window)
  Then มี SMS ถูกส่งเพียง 1 ข้อความ
  And มี record ที่ sms_sent_date NOT NULL เพียง 1 รายการ (unique constraint หรือ lock ป้องกัน)

# Covers: FR-020, SC-002
Scenario: TC-061 IT Admin 2 คนสั่ง Manual Fix ช่วงทับซ้อนพร้อมกัน
  Given IT Admin A สั่ง Manual Fix ช่วง 2026-07-10 ถึง 2026-07-12
  And IT Admin B สั่ง Manual Fix ช่วง 2026-07-11 ถึง 2026-07-13 ในเวลาเดียวกัน
  When ทั้งสองคำสั่งประมวลผลพร้อมกัน
  Then ลูกค้าในช่วงทับซ้อน (2026-07-11 ถึง 2026-07-12) ได้รับ SMS ไม่เกิน 1 ข้อความ

# Covers: FR-002, CF-008
Scenario: TC-062 CSMS-001 เขียนตารางขณะ batch นี้อ่าน
  Given batch CSMS-001 กำลัง INSERT ลง WELCOME_NEW_CUST_LINE
  When batch CSMS-002 อ่าน WELCOME_NEW_CUST_LINE ในเวลาเดียวกัน
  Then batch CSMS-002 อ่านข้อมูลได้แบบ consistent ไม่เกิด dirty read
  And ไม่เกิด lock contention ที่ทำให้ batch ใดหยุดทำงาน
  And batch CSMS-001 ไม่ถูกกระทบ (ยังทำงานปกติ)
```

### Security / PDPA

```gherkin
# Covers: FR-018 · Constitution Principle IV (waived) · CF-002
Scenario: TC-063 cardNo (เลขประจำตัวประชาชน) ถูกเก็บเป็น plain field
  Given batch บันทึกรายการลง WELCOME_NEW_CUST_APP
  When ตรวจสอบค่าในคอลัมน์ card_no
  Then ค่าที่เก็บเป็นเลขประจำตัวประชาชนแบบ plain (ไม่ mask/tokenize/encrypt)
  And พฤติกรรมนี้ตรงกับ waiver ของ Principle IV ที่ plan.md บันทึกไว้ (ยึด precedent 002)
  And บันทึกเป็น CRITICAL finding: spec.md ไม่มี security/PII NFR ใดๆ รองรับการเก็บ national ID
  # CF-002 — ต้องมี NFR จาก SA + DPO ก่อนขึ้น production ไม่ว่าผลทดสอบจะเป็นอย่างไร

# Covers: FR-015 · Constitution Principle II
Scenario: TC-064 ข้อความ SMS ต้องไม่มีข้อมูลอ่อนไหว
  Given batch ประกอบข้อความจาก template + ${var1}/${var2}/${var3}
  When ตรวจสอบข้อความสุดท้ายที่จะส่งออก
  Then ข้อความ MUST NOT มี policy_no
  And ข้อความ MUST NOT มี cardNo / เลขประจำตัวประชาชน
  And ข้อความ MUST NOT มีข้อมูลการเงิน (เบี้ย/ทุนประกัน)
  And ข้อความมีเฉพาะ ชื่อผู้เอาประกัน, มูลค่ารางวัล และลิงก์ดาวน์โหลด

# Covers: FR-015 · Constitution Principle I (PDPA-First)
Scenario: TC-065 ข้อความต้องมีช่องทาง opt-out
  Given plan.md ระบุว่า PDPA opt-out ใช้เบอร์ Call Center "1503" ที่มีในข้อความเดิม
  When ตรวจสอบ template ของแคมเปญนี้และข้อความที่ประกอบเสร็จ
  Then ข้อความมีเบอร์ "1503" เป็นช่องทาง opt-out
  # plan.md:56 ระบุ "เนื้อหาข้อความยังไม่ได้ร่างจริง — ต้องคง 1503 ไว้ในข้อความตอน implement" → ต้องตรวจตอน implement

# Covers: FR-006, SC-003 · PDPA
Scenario: TC-066 Do Not Contact เป็น PDPA control — ต้องไม่มีรายการหลุด
  Given รอบมีกลุ่มเป้าหมาย 100 ราย ซึ่ง 15 รายติดเงื่อนไข Do Not Contact
  When batch ประมวลผลจนจบรอบ
  Then จำนวน call/รายการที่ส่งไปยัง SMS Gateway = 85 พอดี
  And ลูกค้าทั้ง 15 รายที่ติด DNC MUST NOT ปรากฏใน payload ที่ส่งออกแม้แต่รายเดียว
  And อัตราการส่งไปยัง DNC = 0 (SC-003)

# Covers: FR-002, FR-007 · adversarial catalog §A
Scenario Outline: TC-067 SQL injection ผ่านข้อมูลจากรอบแรก / policy_no
  Given ข้อมูลจาก WELCOME_NEW_CUST_LINE มี policy_no = "<value>"
  When batch นำค่านั้นไปใช้ใน 2-step query (WELCOME_NEW_CUST_LINE → ili_policy_master/ili_policy_remark)
  Then query ต้องเป็น parameterized — MUST NOT เกิด SQL injection
  And MUST NOT มีตารางใดถูกลบ/แก้ไข
  And ค่านั้นถูกใช้เป็น literal ในการเปรียบเทียบเท่านั้น

  Examples:
    | value                    | why                        |
    | '; DROP TABLE ili_policy_master-- | injection ตรง       |
    | %' OR '1'='1             | injection + wildcard       |
    | P00%0001                 | LIKE wildcard เป็น literal |
    | P0000_01                 | single-char wildcard       |
  # หมายเหตุ: การ escape LIKE wildcard (functional/Minor) ต่างจาก SQL injection (security/Critical) — ทดสอบทั้งสองแยกกัน

# Covers: FR-019 · PDPA
Scenario: TC-068 email แจ้งเตือนต้องไม่รั่ว PII
  Given เกิดความล้มเหลวระดับรอบขณะมีข้อมูลลูกค้าอยู่ใน memory/context
  When ระบบส่ง email แจ้งเตือนผ่าน OMail
  Then เนื้อหา email MUST NOT มีชื่อ-นามสกุลลูกค้า
  And MUST NOT มีเบอร์โทรศัพท์
  And MUST NOT มี cardNo / policy_no
  And มีเพียงชื่อ batch, ขั้นตอนที่ล้มเหลว, เวลา และจำนวนสรุป (aggregate)

# Covers: FR-020 · Constitution Principle III (RBAC)
Scenario Outline: TC-069 เฉพาะ IT_ADMIN เท่านั้นที่สั่ง Manual Fix ได้
  Given ผู้ใช้ล็อกอินด้วย role "<role>"
  When พยายามสั่ง Manual Fix ของ batch นี้ผ่าน Admin Dashboard
  Then ผลลัพธ์คือ "<result>"

  Examples:
    | role       | result                    |
    | IT_ADMIN   | อนุญาต                    |
    | (ไม่ล็อกอิน) | ปฏิเสธ / redirect login   |
    | user ทั่วไป  | ปฏิเสธ (403)              |
  # ตรวจที่ระดับ server-side ด้วย — ไม่ใช่แค่ซ่อนปุ่มบน UI

# Covers: FR-018 · Constitution Principle IV (waived) · CF-002
Scenario: TC-070 ขอบเขตของ PII ใน log ต้องไม่ขยายเกิน waiver
  Given plan.md ยกเว้น Principle IV เฉพาะตาราง log ของ CSMS (mobile_no/fname/lname/card_no plain)
  When ตรวจสอบ CSMS_LOG และ WELCOME_NEW_CUST_APP หลังรอบประมวลผล
  Then PII ปรากฏเฉพาะในตาราง log ตามที่ waiver ครอบคลุมเท่านั้น
  And MUST NOT มี PII หลุดไปยัง application log file / stdout / stack trace
  And MUST NOT มี PII ใน log ระดับ DEBUG/INFO ที่เก็บนอกตาราง

# Covers: FR-017 · PDPA · CF-002 — DISPUTED (CSV path)
@disputed @csv-path
Scenario: TC-071 [DISPUTED-CSV] ไฟล์ CSV มี PII แต่ไม่มี NFR รองรับ
  Given ระบบสร้างไฟล์ "MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv" ตาม FR-017
  And ไฟล์มีชื่อผู้เอาประกัน + เบอร์โทรศัพท์ + มูลค่ารางวัล ของลูกค้า ~1,000 ราย
  When ตรวจสอบมาตรการป้องกันไฟล์
  Then ต้องมีการกำหนดสิทธิ์ไฟล์ (file permission) ไม่ให้อ่านได้โดยทั่วไป
  And ต้องมีนโยบายการเก็บรักษา/ลบไฟล์หลังนำส่ง (retention)
  And ต้องมีการป้องกันระหว่างนำส่งผ่าน ESB
  And บันทึก CRITICAL finding: spec.md ไม่มี NFR ใดๆ รองรับทั้ง 3 ข้อข้างต้น (checklist.md G4/CHK023)
  # ⚠️ TC นี้อยู่ในชุด CSV-path — รันได้ก็ต่อเมื่อ SA/PO ตัดสินว่า FR-017 คงอยู่
```

### Side-Effects

```gherkin
# Covers: FR-013.1, FR-018.2
Scenario: TC-072 รายการที่ไม่ถูกเลือกในรอบยังถูกบันทึกเพื่อ reconcile
  Given ลูกค้า 1 รายมี 3 กรมธรรม์เข้าเงื่อนไข และเลือกรายการตัวแทน 1 รายการ
  When batch บันทึกผลลง WELCOME_NEW_CUST_APP
  Then มีบันทึกครบทั้ง 3 รายการ (ไม่ใช่แค่รายการที่ส่ง)
  And รายการที่ไม่ถูกเลือกมีสถานะที่ทำให้ reconcile ยอดได้ครบตามแนวทาง CSMS-001
  And ยอดรวมในรายงานตรงกับจำนวนกรมธรรม์ที่เข้าเงื่อนไขจริง

# Covers: FR-018
Scenario: TC-073 บันทึก credit_amount ต่อรายการ
  Given batch ส่ง SMS สำเร็จ
  When ระบบบันทึกประวัติรายกรมธรรม์
  Then ฟิลด์ credit_amount มีค่าที่คำนวณด้วย logic เดิมของ CSMS
  And ค่านี้ไม่เป็น NULL สำหรับรายการที่ส่งสำเร็จ
  # การคำนวณ credit_amount อยู่นอก scope feature นี้ — ทดสอบเฉพาะว่ามีการบันทึก

# Covers: FR-013, FR-018.2, FR-020.1
Scenario: TC-074 กลไกกันส่งซ้ำต้องไม่บล็อกรายการ 'F'
  Given ลูกค้ารายหนึ่งมีประวัติ sent_status='F' และ sms_sent_date = NULL
  When Manual Fix ประมวลผลช่วงวันที่ที่ครอบคลุมรายการนี้
  Then กลไกกันส่งซ้ำ (FR-013) MUST NOT บล็อกรายการนี้ (เพราะตรวจเฉพาะ sms_sent_date IS NOT NULL)
  And ลูกค้ารายนี้ได้รับ SMS จากการซ่อม
  And record เดิมถูกอัปเดตหรือมี record ใหม่ที่ทำให้ reconcile ได้ถูกต้อง

# Covers: FR-002 · CF-008
Scenario: TC-075 ตารางของ CSMS-001 ต้องถูกอ่านอย่างเดียว
  Given snapshot ของ WELCOME_NEW_CUST_LINE ก่อน batch ทำงาน
  When batch CSMS-002 ประมวลผลจนจบรอบ
  Then ข้อมูลใน WELCOME_NEW_CUST_LINE ไม่ถูกแก้ไข/เพิ่ม/ลบแม้แต่ record เดียว
  And checksum/row count ก่อน-หลัง ตรงกันทุกประการ
  # spec.md ระบุชัด: "การเปลี่ยนแปลงใดๆ ต่อ batch CSMS-001 (รอบแรก)" อยู่นอก scope

# Covers: FR-018
Scenario: TC-076 บันทึก refer_no และสถานะการส่งกลับจากช่องทางกลาง
  Given ระบบนำส่ง SMS ผ่านช่องทางกลางสำเร็จ
  When ช่องทางกลางตอบกลับผลการส่ง
  Then refer_no ถูกบันทึกลงประวัติรายกรมธรรม์
  And สถานะการส่งที่ได้รับกลับถูกบันทึกคู่กัน
  And ค่าเหล่านี้ผูกกับรายการที่ถูกต้อง (ไม่สลับข้ามลูกค้า)

# Covers: plan.md constraint (mappedSystemName reuse)
Scenario: TC-077 reuse mappedSystemName ของ 002 โดยไม่กระทบ 002
  Given batch นี้ใช้ mappedSystemName "CSMS_SNC_NewCust" เดิมของ 002 (ยืนยัน 2026-07-13 ไม่ provision ใหม่)
  When batch ส่ง SMS ~1,000 รายการในรอบ 10:00 น.
  Then batch 002 ยังส่งได้ตามปกติในรอบของตัวเอง
  And ไม่เกิดการชนกันของโควตา/rate limit ฝั่ง ESB ที่ทำให้ batch ใดล้มเหลว
  And ข้อความของสองแคมเปญแยกกันถูกต้อง (ต่างกันผ่าน message param ไม่ใช่ mappedSystemName)

# Covers: FR-014 · CF-004
Scenario: TC-078 [CF-004] รหัส SMS_CATEGORY ที่ใช้จริง — spec '111' vs plan 114
  Given spec.md FR-014 (บรรทัด 147) ระบุ "ประเภทข้อความรหัส '111'"
  And plan.md (บรรทัด 9, 28, 113) ระบุ SMS_CATEGORY code "114"
  When ตรวจสอบ row ใน SMS_CATEGORY ที่ batch นี้ใช้จริง
  Then ค่าที่ใช้จริงต้องตรงกับเอกสารที่ SA ยืนยันเป็นทางการ
  And บันทึก HIGH finding: เอกสารสองฉบับระบุค่าไม่ตรงกันและไม่มีการ reconcile
  # ห้าม assert ค่าใดค่าหนึ่งจนกว่า SA จะยืนยัน — route ไป /speckit-analyze
```

### UX / Usability

> **หมายเหตุขอบเขต**: feature นี้เป็น **headless batch** ไม่มี UI ของตัวเอง — มิติ UX/Usability จึง map ไปยัง
> **admin surface ที่มนุษย์ใช้จริง** ได้แก่ (ก) email แจ้งเตือน (ข) หน้า Manual Fix / sms-monitor ของ Admin Dashboard
> (ค) รายงานสรุปประจำวัน — **ไม่ตัดมิตินี้ทิ้ง** ส่วนที่ตัดเฉพาะเจาะจงคือ **WCAG AA และ mobile/responsive**
> เนื่องจากหน้าเหล่านี้เป็น internal admin tool เดิมของ CSMS ที่ไม่อยู่ใน scope การออกแบบใหม่ของ feature นี้ (spec.md บรรทัด 33)

```gherkin
# Covers: FR-019, SC-005 · adversarial catalog §D
Scenario: TC-079 email แจ้งเตือนต้องอ่านแล้วลงมือต่อได้ทันที
  Given เกิดความล้มเหลวระดับรอบที่ขั้นตอน "สร้าง/นำส่งข้อมูล"
  When ทีม IT เปิด email แจ้งเตือน
  Then subject ระบุชื่อ batch และสถานะความล้มเหลวอย่างชัดเจนโดยไม่ต้องเปิดอ่าน body
  And body ระบุ: ขั้นตอนที่ล้มเหลว, เวลาที่เกิด, วันประมวลผลที่กระทบ
  And body ระบุสิ่งที่ต้องทำต่อ (เช่น ให้ใช้ Manual Fix ช่วงวันที่ใด)
  And ข้อความอ่านออกได้โดยไม่ต้องแปล stack trace ดิบ

# Covers: FR-020, SC-007 · adversarial catalog §D
Scenario: TC-080 หน้า Manual Fix ให้ feedback ครบวงจร
  Given IT Admin เปิดหน้า Manual Fix ของ batch นี้
  When เลือกช่วงวันที่และกดสั่งรัน
  Then มี feedback ยืนยันทันทีว่าคำสั่งถูกรับแล้ว (ไม่เงียบ)
  And เมื่อช่วงวันที่ที่เลือกไม่มีรายการค้าง มี empty state ที่บอกชัดว่า "ไม่มีรายการต้องซ่อม" (ไม่ใช่หน้าว่าง)
  And ระหว่างประมวลผลมีสถานะ loading/progress ที่มองเห็น
  And กดซ้ำรัวๆ ไม่ทำให้เกิดการสั่งรันซ้อน (double-submit)

# Covers: FR-020 · adversarial catalog §B (long value rendering)
Scenario: TC-081 dropdown sms-monitor รองรับรายการใหม่โดยไม่พัง layout
  Given หน้า sms-monitor.ftl มี dropdown เลือก batch
  When เปิดหน้าและดู dropdown
  Then มีรายการของ batch นี้ปรากฏและเลือกได้
  And ชื่อรายการที่ยาวไม่ทำให้ dropdown/layout ล้นหรือถูกตัดจนอ่านไม่ออก
  And รายการของ 002 (Welcome LINE) ยังอยู่ครบ ไม่ถูกแทนที่

# Covers: FR-020.2 (ครึ่งรายงาน — CF-003) · adversarial catalog §D
Scenario: TC-082 รายงานสรุปประจำวันอ่านเข้าใจได้
  Given รอบประมวลผลมี: ส่งสำเร็จ 800, 'F' 50, คัดออก 150 (DNC 40 / ลงทะเบียนแล้ว 90 / ซ้ำในรอบ 15 / เคยส่งแล้ว 5)
  When ผู้ใช้เปิดรายงานสรุปประจำวันกลางของ CSMS
  Then แคมเปญนี้แสดงเป็นแถว/ส่วนที่แยกออกจากแคมเปญอื่นได้ชัดเจน
  And เหตุผลการคัดออกแต่ละประเภทแสดงแยกกัน ไม่รวมเป็นก้อนเดียว
  And breakdown ตามประเภทกรมธรรม์ (ORD/IND/GOV/PA) อ่านออกและยอดรวมตรงกัน
  And สัดส่วนรายการ 'F' ที่สูงผิดปกติสังเกตเห็นได้จากรายงาน (เพราะไม่มี threshold alert แยก ตาม FR-020.2)
```

### ⚠️ DISPUTED — CSV path (`@disputed @csv-path`)

> **รันได้ก็ต่อเมื่อ SA/PO ตัดสินว่า FR-017 คงอยู่** — ถ้าตัดสินเป็น API path **ต้องลบทั้งบล็อกนี้ + TC-071**

```gherkin
# Covers: FR-017 — DISPUTED (CSV path)
@disputed @csv-path
Scenario: TC-083 [DISPUTED-CSV] สร้างไฟล์นำส่ง CSV เข้ารหัส UTF-8
  Given batch คัดกรองและ dedup กลุ่มเป้าหมายเสร็จแล้ว 800 ราย
  When batch สร้างไฟล์นำส่งตาม FR-017
  Then มีไฟล์ CSV ถูกสร้างขึ้น 1 ไฟล์ต่อรอบ
  And ไฟล์เข้ารหัสแบบ UTF-8
  And จำนวนแถวข้อมูลในไฟล์ = 800 (ตรงกับจำนวนที่ผ่านเกณฑ์)
  # ⚠️ plan.md:11,42 ยืนยันว่า "ไม่มี CSV infra ใดๆ ในระบบ" → TC นี้คาดว่าจะ Fail ถ้ารันกับ implementation ตาม plan

# Covers: FR-017 — DISPUTED (CSV path)
@disputed @csv-path
Scenario Outline: TC-084 [DISPUTED-CSV] รูปแบบชื่อไฟล์มาตรฐาน
  Given รอบประมวลผลเกิดขึ้น ณ เวลา "<datetime>" (ค.ศ.)
  When batch ตั้งชื่อไฟล์นำส่ง
  Then ชื่อไฟล์คือ "<filename>"
  And ชื่อไฟล์ตรงรูปแบบ MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv
  And YY เป็นปีพุทธศักราช 2 หลัก (ค.ศ. + 543)

  Examples:
    | datetime            | filename                                              |
    | 2026-07-17 10:00:00 | MKT_CSMS_MKTWelcomeNewCustApp_690717100000.csv        |
    | 2026-12-31 10:00:05 | MKT_CSMS_MKTWelcomeNewCustApp_691231100005.csv        |
    | 2027-01-01 10:00:00 | MKT_CSMS_MKTWelcomeNewCustApp_700101100000.csv        |
  # ขอบเขต พ.ศ. 2 หลัก: 2600 (พ.ศ. 3143 → '43') จะชนกับ พ.ศ. 2543 — นอกอายุระบบ แต่บันทึกเป็นข้อสังเกต

# Covers: FR-017 — DISPUTED (CSV path)
@disputed @csv-path
Scenario: TC-085 [DISPUTED-CSV] นำส่งไฟล์ผ่านช่องทางกลาง ESB → SMS Gateway
  Given ไฟล์ CSV ถูกสร้างสำเร็จ
  When batch นำส่งไฟล์
  Then ไฟล์ถูกส่งเข้าช่องทางกลาง (ESB)
  And ESB ส่งต่อไปยัง SMS Gateway
  And มีการบันทึกผลการนำส่งไฟล์ (สำเร็จ/ล้มเหลว) ลง log

# Covers: FR-017, FR-019, US2-AS1 — DISPUTED (CSV path)
@disputed @csv-path
Scenario: TC-086 [DISPUTED-CSV] สร้างไฟล์ CSV ไม่สำเร็จ → หยุดรอบ + email
  Given disk เต็ม หรือไม่มีสิทธิ์เขียนใน directory ปลายทาง
  When batch พยายามสร้างไฟล์ CSV ตามรอบเวลา 10:00 น.
  Then ระบบตรวจพบความล้มเหลว
  And ส่ง email แจ้งเตือนไปยังทีม IT Development และกลุ่มผู้ใช้งานทันที (FR-019)
  And email ระบุขั้นตอนที่ล้มเหลวคือ "สร้างไฟล์ CSV"
  And email ถูกส่งภายใน 15 นาทีนับจากตรวจพบ (SC-005)
  # นี่คือ US2 Acceptance Scenario 1 (spec.md บรรทัด 85) ที่อ้าง CSV โดยตรง — เป็นหลักฐานว่า CSV ไม่ได้ถูกตัดจาก spec

# Covers: FR-017 — DISPUTED (CSV path) · adversarial catalog §B
@disputed @csv-path
Scenario Outline: TC-087 [DISPUTED-CSV] ความถูกต้องของเนื้อหาไฟล์
  Given ลูกค้ามีชื่อ "<name>"
  When batch เขียนแถวข้อมูลลงไฟล์ CSV
  Then เนื้อหาในไฟล์เป็น "<expected>"
  And เปิดไฟล์ด้วย UTF-8 แล้วชื่อภาษาไทยไม่เพี้ยน (ไม่มี mojibake)

  Examples:
    | name              | expected                              |
    | สมชาย ทดสอบ       | ชื่อไทยอ่านออกครบถ้วน                 |
    | สมชาย, ทดสอบ      | comma ถูก escape/quote ไม่ทำให้คอลัมน์เลื่อน |
    | สมชาย "เอ" ทดสอบ  | double-quote ถูก escape ตามมาตรฐาน CSV |
    | สมชาย\nทดสอบ      | newline ในค่า ถูก quote ไม่ทำให้แถวแตก |
    | สมชาย😀ทดสอบ      | emoji/non-BMP เขียนได้ไม่พัง encoding  |
```

### ⚠️ DISPUTED — API path (`@disputed @api-path`)

> **รันได้ก็ต่อเมื่อ SA/PO ตัดสินว่า FR-017 ถูกตัดจริง** — ถ้าตัดสินเป็น CSV path **ต้องลบทั้งบล็อกนี้**

```gherkin
# Covers: FR-017 (ตามการตีความของ plan.md) — DISPUTED (API path)
@disputed @api-path
Scenario: TC-088 [DISPUTED-API] ส่งทีละรายการผ่าน sendSmsOtp
  Given batch คัดกรองและ dedup กลุ่มเป้าหมายเสร็จแล้ว 800 ราย
  When batch นำส่ง SMS
  Then มีการเรียก SMS Gateway V3 "sendSmsOtp" ทั้งหมด 800 ครั้ง (1 HTTP call ต่อลูกค้า 1 ราย)
  And แต่ละ call เป็น synchronous
  And แต่ละ call ใช้ mappedSystemName "CSMS_SNC_NewCust"
  And แต่ละ call มี message ที่แทนค่าตัวแปรครบแล้ว

# Covers: FR-017, FR-018 — DISPUTED (API path)
@disputed @api-path
Scenario: TC-089 [DISPUTED-API] response รายครั้งให้ refer_no และถูก map กลับถูกต้อง
  Given batch เรียก sendSmsOtp สำหรับลูกค้ารายหนึ่ง
  When gateway ตอบกลับพร้อม refer_no และสถานะ
  Then refer_no ถูกบันทึกลง record ของลูกค้ารายนั้นโดยเฉพาะ
  And สถานะที่ได้รับกลับถูกบันทึกคู่กัน
  And เมื่อส่ง 800 ราย → refer_no 800 ค่าไม่ซ้ำกันและไม่สลับข้ามลูกค้า

# Covers: FR-017, FR-018.2 — DISPUTED (API path)
@disputed @api-path
Scenario: TC-090 [DISPUTED-API] call รายรายการล้มเหลว → 'F' ไม่หยุดรอบ
  Given รอบมีกลุ่มเป้าหมาย 10 ราย
  And การเรียก sendSmsOtp ของรายที่ 4 ล้มเหลว (timeout / error response)
  When batch ประมวลผล
  Then รายการที่ 4 ถูกบันทึก sent_status='F' และ sms_sent_date=NULL
  And รายการที่ 5-10 ยังถูกส่งต่อจนจบ
  And รอบไม่ถูกหยุด (ต่างจาก FR-012 ที่บริการล่มทั้งระบบ)
  And รายการที่ 4 ซ่อมได้ผ่าน Manual Fix เท่านั้น (FR-020.1)

# Covers: FR-017 — DISPUTED (API path) · CF-005
@disputed @api-path
Scenario: TC-091 [DISPUTED-API] throughput ~1,000 call synchronous ต่อเนื่อง
  Given กลุ่มเป้าหมาย 1,000 ราย (ปริมาณที่ยืนยันใน spec.md Clarifications)
  And SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call แบบ synchronous
  When batch เริ่มรอบเวลา 10:00 น.
  Then รอบประมวลผลจบภายในกรอบเวลาที่ยอมรับได้
  And ไม่เกิด timeout ระดับรอบจากการเรียกสะสม
  And บันทึกเวลาที่ใช้จริงเพื่อใช้เป็น baseline
  # ⚠️ CF-005: spec.md ไม่มี performance NFR เชิงเวลา → ไม่มี threshold ให้ assert
  # plan.md:38 ยอมรับว่ายังไม่เคยวัด throughput จริงจาก 002 → TC นี้วัดได้แต่ตัดสิน Pass/Fail ไม่ได้จนกว่า SA กำหนดเกณฑ์

# Covers: FR-017 — DISPUTED (API path)
@disputed @api-path
Scenario: TC-092 [DISPUTED-API] ยืนยันว่าไม่มีไฟล์ CSV ถูกสร้างที่ใดเลย
  Given batch ประมวลผลรอบจนจบและส่ง SMS สำเร็จ
  When ตรวจสอบ filesystem ของ application server และ directory นำส่งของ ESB
  Then MUST NOT มีไฟล์ใดที่ตรงรูปแบบ "MKT_CSMS_MKTWelcomeNewCustApp_*.csv" ถูกสร้างขึ้น
  And MUST NOT มีไฟล์ชั่วคราว (.tmp/.part) ของกระบวนการสร้าง CSV
  And ไม่มีการเขียน PII ลง filesystem แม้ชั่วคราว
  # TC นี้เป็นภาพสะท้อนโดยตรงของ TC-083 — ถ้า TC-083 Pass, TC-092 ต้อง Fail และในทางกลับกัน
  # สองชุดนี้จึงห้ามรันพร้อมกันโดยเด็ดขาด
```

---

## Test Checklist

**System** = `Centralized SMS (CSMS) — epirusapp / WildFly 8 / Java 7` (คงที่ทั้งตาราง)
**Feature** = `CSMS-002 Welcome New Customer (Ocean Club) รอบ 2 — Batch SMS +20 วัน` (คงที่ทั้งตาราง)
**Test Status** = `Not Run` ทุกแถว · `Tested By` / `Tested Date` เว้นว่าง — ยังไม่มีการรันจริง (ไม่มี running app; `execute` นอก scope)

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Schedule | batch ทำงานอัตโนมัติ 10:00 น. | scheduler เปิด + มีกลุ่มเป้าหมาย | 1. รอถึง 10:00 2. ตรวจ log เริ่มรอบ | route เริ่มทำงานในรอบเวลานั้น + บันทึก CSMS_LOG | cohort 1 ราย ครบ 20 วัน | P1 | Not Run |  |  | - | FR-001 |
| TC-002 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Schedule | cron ต้องเป็น 10:00 จริง | มีไฟล์ spring-camel-smsSending.xml | 1. อ่าน cron ของ route | = `0 0 10 * * ?` และ ≠ `0 13 14 * * ?` | - | P1 | Not Run |  |  | - | CF-009 — bug ตกค้างของ 002 |
| TC-003 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Target Selection | ดึงกลุ่มเป้าหมายครบกำหนด | มีรายการรอบแรก sent_status='S' | 1. รัน batch 2. ตรวจ query result | ดึงเฉพาะ sms_sent_date = วันประมวลผล − 20 | WELCOME_NEW_CUST_LINE 3 แถว (19/20/21 วัน) | P1 | Not Run |  |  | - | FR-002 |
| TC-004 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | อ่าน N จาก config | cf_catalog DATE_COUNT Active = 20 | 1. รัน batch 2. ตรวจค่า N ที่ใช้ | N = 20 จาก config ไม่ hard-code | DATE_COUNT=20 | P1 | Not Run |  |  | - | FR-003 |
| TC-005 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | เปลี่ยน N แล้วใช้ทันที | แคมเปญ Active | 1. เปลี่ยน 20→15 2. รันรอบถัดไป | คัดจาก วันประมวลผล − 15 โดยไม่ restart | DATE_COUNT 20→15 | P1 | Not Run |  |  | - | FR-003 / US1-AS6 |
| TC-006 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | เกณฑ์ Inforce ORD/PA | กรมธรรม์ ORD/PA สถานะ '1' | 1. รัน batch 2. ตรวจการคัดกรอง | ผ่านเกณฑ์ Inforce | ORD='1', PA='1' | P1 | Not Run |  |  | - | FR-004 |
| TC-007 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | เกณฑ์ Inforce IND/GOV | IND/GOV สถานะ '1'/'2'/'3' | 1. รัน batch 2. ตรวจการคัดกรอง | ผ่านเกณฑ์ทั้ง 3 สถานะ | IND/GOV = 1,2,3 | P1 | Not Run |  |  | - | FR-004 |
| TC-008 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | ใช้ mobile1 เป็นหลัก | mobile1+mobile2 มีค่าทั้งคู่ | 1. รัน batch 2. ตรวจเบอร์ที่ส่ง | ส่งไป mobile1 | m1=0812345678, m2=0898765432 | P1 | Not Run |  |  | - | FR-005 |
| TC-009 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | mobile1 ว่าง → mobile2 | mobile1 ว่าง | 1. รัน batch 2. ตรวจเบอร์ที่ส่ง | ส่งไป mobile2 | m1='', m2=0898765432 | P1 | Not Run |  |  | - | FR-005 |
| TC-010 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | ใช้เบอร์ปัจจุบันไม่ใช่เบอร์รอบแรก | เบอร์รอบแรก ≠ เบอร์ปัจจุบัน | 1. รัน batch 2. ตรวจเบอร์ปลายทาง | ส่งไปเบอร์จาก ili_policy_master | รอบแรก 0811111111 / ปัจจุบัน 0822222222 | P1 | Not Run |  |  | - | FR-005 |
| TC-011 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Do Not Contact | ORD remark '1' → คัดออก | ORD มี remark '1' | 1. รัน batch 2. ตรวจว่าไม่ส่ง | คัดออก ไม่ส่ง SMS | ORD + remark '1' | P1 | Not Run |  |  | - | FR-006 |
| TC-012 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Do Not Contact | IND/GOV/PA remark '4' → คัดออก | มี remark '4' | 1. รัน batch 2. ตรวจว่าไม่ส่ง | คัดออกทั้ง 3 ประเภท | IND/GOV/PA + remark '4' | P1 | Not Run |  |  | - | FR-006 |
| TC-013 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Lookup | policy_no → cardNo สำเร็จ | ผ่านเกณฑ์คัดกรองแล้ว | 1. เรียกบริการ lookup | ได้ cardNo และไปตรวจสถานะต่อ | policy_no=P0000001 | P1 | Not Run |  |  | - | FR-007 |
| TC-014 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Registration Check | ตรวจครบ 2 ช่องทาง | มี cardNo | 1. เรียก checkWelcomeEligibility() | ตรวจทั้ง LINE และ APP | cardNo synthetic | P1 | Not Run |  |  | - | FR-008 |
| TC-015 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Send Criteria | E02+E02 → ส่ง | ผ่านเกณฑ์ครบ | 1. รัน batch 2. ตรวจการส่ง | ส่ง SMS | LINE=E02, APP=E02 | P1 | Not Run |  |  | - | FR-009(ก) |
| TC-016 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Send Criteria | E00+block+E02 → ส่ง | ผ่านเกณฑ์ครบ | 1. รัน batch 2. ตรวจการส่ง | ส่ง SMS | LINE=E00 block=true, APP=E02 | P1 | Not Run |  |  | - | FR-009(ข) |
| TC-017 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Send Criteria | APP ลงทะเบียนแล้ว → ไม่ส่ง | ผ่านเกณฑ์เวลา | 1. รัน batch 2. ตรวจว่าไม่ส่ง | คัดออก | APP=E00 | P1 | Not Run |  |  | - | FR-010 / SC-003 |
| TC-018 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Send Criteria | LINE ไม่บล็อก → ไม่ส่ง | ผ่านเกณฑ์เวลา | 1. รัน batch 2. ตรวจว่าไม่ส่ง | คัดออก | LINE=E00 block=false | P1 | Not Run |  |  | - | FR-010 / SC-003 |
| TC-019 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Dedup | ไม่ส่งซ้ำข้ามรอบ | มีประวัติส่งสำเร็จแล้ว | 1. รันรอบถัดไป 2. ตรวจการส่ง | ไม่ส่งซ้ำ | WELCOME_NEW_CUST_APP มี sms_sent_date | P1 | Not Run |  |  | - | FR-013 / SC-002 |
| TC-020 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Dedup | 1 ลูกค้า หลายกรมธรรม์ → 1 ข้อความ | 3 กรมธรรม์เข้าเงื่อนไข | 1. รัน batch 2. นับข้อความ | ส่ง 1 ข้อความ เลือกรายการเก่าสุด | ชื่อ-เบอร์เดียวกัน × 3 policy | P1 | Not Run |  |  | - | FR-013.1 / SC-002 |
| TC-021 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Template | ดึง template จากตารางกำหนดการ | มี template ในตาราง | 1. รัน batch 2. ตรวจ template ที่ใช้ | ใช้จาก sms_message_schedule | template code ตามที่ SA ยืนยัน | P1 | Not Run |  |  | - | FR-014 · CF-004 |
| TC-022 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Template | fallback ไปตารางหลัก | ไม่มีใน schedule มีใน SMS_CATEGORY | 1. รัน batch 2. ตรวจ template | ใช้จาก SMS_CATEGORY รอบไม่ล่ม | ลบ row schedule | P2 | Not Run |  |  | - | FR-014 |
| TC-023 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Render | แทนค่า 3 ตัวแปรครบ | config Active ครบ | 1. render ข้อความ | มีชื่อ/รางวัล/ลิงก์ ไม่มี ${var เหลือ | var1=สมชาย ทดสอบ, var2=100, var3=https://example.test/app | P1 | Not Run |  |  | - | FR-015 / SC-004 |
| TC-024 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Audit | บันทึก log 2 ระดับ | ส่งสำเร็จ 1 ราย | 1. รัน batch 2. ตรวจ 2 ตาราง | CSMS_LOG + WELCOME_NEW_CUST_APP ครบฟิลด์ | 1 ราย synthetic | P1 | Not Run |  |  | - | FR-018 |
| TC-025 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Audit | FK กลับรอบแรก | รายการรอบแรก ID=5001 | 1. รัน batch 2. ตรวจ FK | FK ชี้ไป ID 5001 ไม่ NULL | LINE.ID=5001 | P1 | Not Run |  |  | - | FR-018.1 / SC-006 |
| TC-026 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Audit | sent_status='S' เมื่อสำเร็จ | ส่งสำเร็จ | 1. ตรวจ record | sms_sent_date = วันที่ส่ง, sent_status='S' | 1 ราย | P1 | Not Run |  |  | - | FR-018.2 |
| TC-027 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Re-run | ซ่อมรอบที่ล้มเหลว | รอบ 2026-07-10 ล้มเหลว | 1. เลือกวันที่ 2. สั่ง Manual Fix | ประมวลผลใหม่ ส่งรายการที่ค้าง | รอบ 2026-07-10 ว่าง | P2 | Not Run |  |  | - | FR-020 / SC-007 |
| TC-028 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Re-run | ส่งเฉพาะรายการค้าง | 10 สำเร็จ + 3 ค้าง | 1. สั่ง Manual Fix 2. นับข้อความ | ส่ง 3 ข้อความ ไม่ส่งซ้ำ 10 ราย | 10 'S' + 3 NULL | P1 | Not Run |  |  | - | FR-020 / SC-002 |
| TC-029 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Re-run | ตีความช่วงวันที่ | N ปัจจุบัน = 20 | 1. Manual Fix วันที่ 2026-07-15 | หาเป้าหมายจาก sms_sent_date=2026-06-25 | N=20 | P2 | Not Run |  |  | - | FR-020.2 |
| TC-030 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Report | Reporting | ผลปรากฏในรายงานกลาง | รอบเสร็จมี S/F/คัดออก | 1. เปิดรายงานสรุปประจำวัน | มีแคมเปญนี้ + S/F + เหตุผลคัดออก + breakdown 4 ประเภท | 800 S / 50 F / 150 คัดออก | P2 | Not Run |  |  | - | FR-020.2 (ครึ่งรายงาน) · **CF-003 — FR ยังไม่ถูกแยก** |
| TC-031 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Audit | trace กลับรอบแรก 100% | ส่งสำเร็จ 100 ราย | 1. ตรวจทุก record 'S' | ทุก record มี FK ที่มีอยู่จริง 0 orphan | 100 ราย | P1 | Not Run |  |  | - | SC-006 |
| TC-032 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | Notification | email เมื่อล้มเหลวระดับรอบ | สกัดข้อมูลไม่ได้ | 1. จำลองล้มเหลว 2. ตรวจ email | ส่งถึง IT+User ภายใน 15 นาที | ปิดการเข้าถึงแหล่งข้อมูล | P2 | Not Run |  |  | - | FR-019 / SC-005 |
| TC-033 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Lookup | ไม่พบ cardNo → skip+'F' | 5 ราย รายที่ 3 ไม่พบ | 1. รัน batch 2. ตรวจ 5 record | รายที่ 3 = 'F' + NULL, อีก 4 รายทำต่อ รอบไม่หยุด | 5 ราย 1 รายไม่มี cardNo | P1 | Not Run |  |  | - | FR-007 / EC-005 |
| TC-034 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Error Handling | E13 → skip ไม่ retry | บริการตอบ E13 | 1. รัน batch 2. นับ call | skip ทันที ไม่ retry, 'F', ทำรายการถัดไป | mock E13 | P1 | Not Run |  |  | - | FR-011 |
| TC-035 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Error Handling | ค่านอกเงื่อนไข → skip+'F' | channel/isBlockLine ว่าง | 1. รัน batch 2. ตรวจ record | skip + 'F' รอบไม่หยุด | channel='' / block='' / UNKNOWN | P1 | Not Run |  |  | - | FR-011 |
| TC-036 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Render | ไม่พบชื่อ → ไม่ส่ง | ${var1} ว่าง | 1. รัน batch 2. ตรวจการส่ง | ไม่ส่ง + 'F' ไม่มีข้อความไร้ชื่อออกไป | fname='' lname='' | P1 | Not Run |  |  | - | FR-015.1 / SC-004 |
| TC-037 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | ไม่มี config Active → หยุดรอบ | ปิด config ทั้งหมด | 1. รัน batch 2. ตรวจผล | หยุดรอบ ไม่ส่งเลย + email | cf_catalog Inactive ทั้งหมด | P1 | Not Run |  |  | - | FR-016 / US2-AS3 |
| TC-038 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Error Handling | บริการล่ม → retry≤3 → หยุดรอบ | msa-custlookup ล่ม | 1. รัน batch 2. นับ call 3. ตรวจ email | retry 3 ครั้ง (รวม ≤4 call) หยุดรอบ + email | mock service down | P1 | Not Run |  |  | - | FR-012 / US2-AS2 |
| TC-039 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | พ้นสภาพ → คัดออก | ORD สถานะ '9' | 1. รัน batch | คัดออก ไม่ส่ง | ORD status='9' | P1 | Not Run |  |  | - | FR-004 / SC-003 |
| TC-040 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | ไม่มีเบอร์ → คัดออก | m1+m2 ว่างทั้งคู่ | 1. รัน batch | คัดออก ไม่ส่ง | m1='', m2='' | P1 | Not Run |  |  | - | FR-005 |
| TC-041 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Error Handling | daily ต้องไม่ auto-retry 'F' | 5 รายการ 'F' ค้าง | 1. รัน daily รอบถัดไป | ไม่ดึง 'F' มา retry, คงไว้เพื่อ audit | 5 × sent_status='F' | P1 | Not Run |  |  | - | FR-020.1 |
| TC-042 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | Notification | email ระบุ batch + ขั้นตอน | ล้มเหลวที่ขั้นตอนตรวจสถานะ | 1. ตรวจ subject/body | ระบุชื่อ batch + ขั้นตอนที่ล้มเหลว | จำลองล้มเหลว | P2 | Not Run |  |  | - | FR-019 |
| TC-043 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Template | fallback ล้มเหลวทั้งสองตาราง | ไม่มี template ทั้งคู่ | 1. รัน batch | ไม่ส่งข้อความว่าง/template ดิบ มีพฤติกรรมนิยาม | ลบ template ทั้ง 2 ตาราง | P2 | Not Run |  |  | - | FR-014 — **spec ไม่นิยามพฤติกรรม → /speckit-checklist** |
| TC-044 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | config Inactive ต้องไม่ถูกใช้ | REWARDS/LINE_LINK Inactive | 1. รัน batch | ปฏิบัติเหมือนไม่มี config → หยุด + แจ้ง | ตั้ง Inactive ทีละตัว | P2 | Not Run |  |  | - | FR-015 / FR-016 |
| TC-045 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Target Selection | ข้อมูลรอบแรกผิดรูป | policy_no/type/mobile ว่าง | 1. รัน batch | จัดการปลอดภัย รอบไม่ล่ม ไม่มี NPE | 4 แถวผิดรูป | P2 | Not Run |  |  | - | FR-002 |
| TC-046 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Render | ชื่อ adversarial → literal | ชื่อมี metachar/XSS/unicode | 1. render 2. ตรวจข้อความ | literal ทุกตัว ไม่ re-render ไม่มี ${var เหลือ | `${var2}`, `<script>`, `100%_off`, emoji, RTL, NBSP | P1 | Not Run |  |  | - | FR-015 · negative-input-catalog §B |
| TC-047 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Render | ความยาวชื่อที่ขอบเขต | ชื่อ 1/100/255/256 ตัว | 1. render 2. ตรวจความยาว | var2/var3 ไม่ถูกตัดหาย | 1/100/255/256 chars | P2 | Not Run |  |  | - | FR-015 · catalog §B |
| TC-048 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | เบอร์โทร adversarial | รูปแบบเบอร์ผิดปกติ | 1. รัน batch 2. ตรวจพฤติกรรม | มีพฤติกรรมนิยามไว้ ไม่ล่ม | สั้น/ยาว/+66/ขีด/ช่องว่าง/null byte | P1 | Not Run |  |  | - | FR-005 · **spec ไม่นิยาม validation → /speckit-checklist** |
| TC-049 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | ค่า N adversarial | DATE_COUNT = 0/-1/abc/9999 | 1. รัน batch | reject/แจ้งเตือน ไม่ล่มเงียบ | 0, -1, abc, 9999 | P2 | Not Run |  |  | - | FR-003 · catalog §C · **spec ไม่นิยาม → /speckit-checklist** |
| TC-050 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Validation | ช่วงวันที่ adversarial | end<start / 9999 / กว้างมาก | 1. สั่ง Manual Fix | reject พร้อมข้อความชัดเจน ไม่ค้าง | 4 ชุดช่วงวันที่ | P2 | Not Run |  |  | - | FR-020.2 · catalog §C |
| TC-051 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Target Selection | รอบแรกไม่มีข้อมูล → จบปกติ | ไม่มีรายการครบกำหนด | 1. รัน batch | จบปกติ ไม่มี email แจ้งเตือน + มี log | ตารางว่างสำหรับวันอ้างอิง | P1 | Not Run |  |  | - | FR-002 · CF-008 |
| TC-052 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Target Selection | ขอบเขตการนับวัน 19/20/21 | N=20 | 1. รัน batch 2. ตรวจการเลือก | เลือกเฉพาะ 20 วันพอดี | 3 แถว 19/20/21 วัน | P1 | Not Run |  |  | - | FR-002 / FR-003 |
| TC-053 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Send Criteria | ลงทะเบียนหลังคัดกรอง | ลงทะเบียนระหว่างรอบ | 1. คัดกรอง 2. ลงทะเบียน 3. ส่ง | ยอมรับได้ ไม่นับเป็นข้อผิดพลาด | timing race | P2 | Not Run |  |  | - | FR-009 / EC |
| TC-054 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Config | เปลี่ยน N ทำให้ cohort ถูกข้าม | N 20→15 | 1. เปลี่ยน N 2. รันหลายรอบ | ไม่ส่งเบิ้ล + cohort ที่ข้ามซ่อมได้ | cohort วัน 16-20 | P2 | Not Run |  |  | - | FR-003 / FR-013 |
| TC-055 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Dedup | tie-break deterministic | 2 policy วันเก่าสุดเท่ากัน | 1. dedup 2. รันซ้ำ | เลือก policy_no น้อยสุด ผลเดิมทุกครั้ง | P0000009 vs P0000002 | P1 | Not Run |  |  | - | FR-013.1 |
| TC-056 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Mapping | map รหัสประเภทครบ 4 | รหัส O/I/G/P | 1. รัน batch 2. ตรวจค่าใน log | O→ORD, I→IND, G→GOV, P→PA | O, I, G, P | P1 | Not Run |  |  | - | FR-004/FR-018 · **CF-007 ต้องยืนยันอักขระจริงก่อนรัน** |
| TC-057 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | เส้นทาง GOV (query ใหม่) | GOV สถานะ '2' ไม่มี remark '4' | 1. รัน batch 2. ตรวจการดึงข้อมูล | ดึงข้อมูล GOV ครบถ้วน ผ่านเกณฑ์ | GOV synthetic | P1 | Not Run |  |  | - | **CF-006 — BLOCKED: plan.md:29 [NEEDS DBA VERIFICATION]** |
| TC-058 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Filter | เปลี่ยนเบอร์ระหว่าง 20 วัน | เบอร์รอบแรก ≠ ปัจจุบัน | 1. รัน batch 2. ตรวจ record | ส่งเบอร์ปัจจุบัน + บันทึกเบอร์ที่ส่งจริง + FK ถูกต้อง | 0811111111 → 0899999999 | P1 | Not Run |  |  | - | FR-005 / FR-018 |
| TC-059 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Concurrency | Manual Fix ทับซ้อน daily | รันพร้อมกัน cohort เดียวกัน | 1. รัน daily 2. สั่ง Manual Fix พร้อมกัน | แต่ละรายได้ ≤1 ข้อความ ไม่มี record ซ้ำ | cohort ซ้อน | P1 | Not Run |  |  | - | FR-001 / FR-013 / SC-002 |
| TC-060 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Concurrency | race 2 thread ลูกค้าเดียวกัน | 2 thread พร้อมกัน | 1. จำลอง race window | ส่ง 1 ข้อความ 1 record (unique/lock) | ลูกค้ารายเดียว × 2 thread | P1 | Not Run |  |  | - | FR-013 / SC-002 |
| TC-061 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Concurrency | 2 Admin ช่วงทับซ้อน | A: 07-10..12, B: 07-11..13 | 1. สั่งพร้อมกัน | ช่วงทับซ้อนได้ ≤1 ข้อความ | 2 คำสั่งพร้อมกัน | P2 | Not Run |  |  | - | FR-020 / SC-002 |
| TC-062 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Concurrency | CSMS-001 เขียนขณะ 002 อ่าน | 001 กำลัง INSERT | 1. รันพร้อมกัน | อ่าน consistent ไม่ dirty read ไม่ล็อกกัน 001 ไม่กระทบ | 001 batch active | P2 | Not Run |  |  | - | FR-002 · **CF-008 cross-campaign** |
| TC-063 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | cardNo เก็บ plain (national ID) | บันทึกลง WELCOME_NEW_CUST_APP | 1. ตรวจคอลัมน์ card_no | plain ไม่ mask — ตรง waiver Principle IV | cardNo synthetic | P1 | Not Run |  |  | - | **CF-002 CRITICAL — spec ไม่มี security/PII NFR** |
| TC-064 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | ข้อความไม่มีข้อมูลอ่อนไหว | ข้อความประกอบเสร็จ | 1. ตรวจข้อความสุดท้าย | ไม่มี policy_no/cardNo/ข้อมูลการเงิน | ข้อความจริง | P1 | Not Run |  |  | - | FR-015 · Principle II |
| TC-065 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | ข้อความมี opt-out 1503 | template ของแคมเปญ | 1. ตรวจ template + ข้อความ | มีเบอร์ 1503 | template จริง | P1 | Not Run |  |  | - | Principle I · plan.md:56 ต้องตรวจตอน implement |
| TC-066 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | DNC ต้องไม่หลุดสักราย | 100 ราย 15 ติด DNC | 1. รัน batch 2. นับ payload | ส่งออก 85 พอดี DNC 0 ราย | 100 ราย / 15 DNC | P1 | Not Run |  |  | - | FR-006 / SC-003 · PDPA |
| TC-067 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | SQL injection ผ่าน policy_no | ค่ามี SQL metachar | 1. รัน 2-step query | parameterized ไม่ injection ไม่มีตารางถูกแก้ | `'; DROP TABLE--`, `%' OR '1'='1`, `P00%0001` | P1 | Not Run |  |  | - | FR-002/FR-007 · catalog §A |
| TC-068 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | Security | email ไม่รั่ว PII | ล้มเหลวขณะมีข้อมูลลูกค้า | 1. ตรวจเนื้อหา email | ไม่มีชื่อ/เบอร์/cardNo/policy_no มีแต่ aggregate | จำลองล้มเหลว | P1 | Not Run |  |  | - | FR-019 · PDPA |
| TC-069 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Security | RBAC Manual Fix | role ต่างๆ | 1. ลองสั่งด้วยแต่ละ role | เฉพาะ IT_ADMIN อนุญาต อื่นๆ 403 (ตรวจ server-side) | IT_ADMIN / user / anonymous | P1 | Not Run |  |  | - | FR-020 · Principle III |
| TC-070 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | PII ไม่หลุดเกิน waiver | หลังรอบประมวลผล | 1. ตรวจ log file/stdout/stack trace | PII เฉพาะในตาราง log ไม่หลุดออกนอก | log ระดับ DEBUG/INFO | P2 | Not Run |  |  | - | FR-018 · Principle IV waiver scope |
| TC-071 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Security | **[DISPUTED-CSV]** PII ในไฟล์ CSV | ไฟล์มี PII ~1,000 ราย | 1. ตรวจ permission/retention/transit | ต้องมีมาตรการทั้ง 3 — **spec ไม่มี NFR รองรับ** | ไฟล์ CSV | P1 | Not Run |  |  | - | **@disputed @csv-path · CF-002** |
| TC-072 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | รายการที่ไม่ถูกเลือกยังบันทึก | 3 กรมธรรม์ เลือก 1 | 1. รัน batch 2. นับ record | มีครบ 3 record reconcile ยอดตรง | 1 ลูกค้า × 3 policy | P1 | Not Run |  |  | - | FR-013.1 / FR-018.2 |
| TC-073 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | บันทึก credit_amount | ส่งสำเร็จ | 1. ตรวจฟิลด์ | มีค่า ไม่ NULL (logic เดิม CSMS) | 1 ราย | P2 | Not Run |  |  | - | FR-018 (การคำนวณนอก scope) |
| TC-074 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | Side-Effect | dedup ต้องไม่บล็อก 'F' | มี record 'F' + date NULL | 1. Manual Fix ช่วงนั้น | ส่งได้ (ตรวจเฉพาะ date NOT NULL) reconcile ถูก | sent_status='F' | P1 | Not Run |  |  | - | FR-013 / FR-018.2 / FR-020.1 |
| TC-075 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | ตาราง 001 อ่านอย่างเดียว | snapshot ก่อนรัน | 1. รัน batch 2. เทียบ checksum | ไม่มีการแก้/เพิ่ม/ลบ row count ตรงกัน | WELCOME_NEW_CUST_LINE | P1 | Not Run |  |  | - | FR-002 · CF-008 · spec ระบุนอก scope |
| TC-076 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | บันทึก refer_no + สถานะ | นำส่งสำเร็จ | 1. ตรวจ record | refer_no + สถานะถูกบันทึก ผูกรายการถูกต้อง | gateway response | P1 | Not Run |  |  | - | FR-018 |
| TC-077 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | reuse mappedSystemName ไม่กระทบ 002 | ใช้ CSMS_SNC_NewCust เดิม | 1. รันทั้ง 002 และ 003 | 002 ปกติ ไม่ชนโควตา ข้อความแยกถูกต้อง | mappedSystemName เดิม | P2 | Not Run |  |  | - | plan.md:19,43 (ยืนยัน 2026-07-13) |
| TC-078 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | Side-Effect | **[CF-004]** รหัส SMS_CATEGORY จริง | spec '111' vs plan 114 | 1. ตรวจ row ที่ batch ใช้จริง | ตรงกับที่ SA ยืนยันเป็นทางการ | SMS_CATEGORY | P1 | Not Run |  |  | - | **CF-004 HIGH — ห้าม assert จนกว่า SA ยืนยัน → /speckit-analyze** |
| TC-079 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | UX/Usability | email อ่านแล้วลงมือต่อได้ | ล้มเหลวขั้นตอนนำส่ง | 1. เปิด email | subject ชัด, body มีขั้นตอน/เวลา/สิ่งที่ต้องทำ ไม่ใช่ stack trace ดิบ | จำลองล้มเหลว | P2 | Not Run |  |  | - | FR-019 · catalog §D |
| TC-080 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | UX/Usability | feedback ครบวงจร | เปิดหน้า Manual Fix | 1. เลือกวันที่ 2. สั่งรัน 3. กดซ้ำ | ยืนยันทันที, empty state ชัด, loading, กันกดซ้ำ | ช่วงมี/ไม่มีรายการค้าง | P2 | Not Run |  |  | - | FR-020 · catalog §D |
| TC-081 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Manual Fix | UX/Usability | dropdown ไม่พัง layout | หน้า sms-monitor | 1. เปิดหน้า 2. ดู dropdown | มีรายการใหม่, ค่ายาวไม่ล้น, ของ 002 ยังอยู่ | dropdown entry ใหม่ | P3 | Not Run |  |  | - | FR-020 · catalog §B |
| TC-082 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Report | UX/Usability | รายงานอ่านเข้าใจได้ | 800 S / 50 F / 150 คัดออก | 1. เปิดรายงาน | แยกแคมเปญชัด, เหตุผลคัดออกแยก, breakdown ตรง, สังเกต 'F' สูงผิดปกติได้ | ยอดตัวอย่าง | P2 | Not Run |  |  | - | FR-020.2 · **CF-003** |
| TC-083 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | CSV | **[DISPUTED-CSV]** สร้างไฟล์ UTF-8 | dedup เสร็จ 800 ราย | 1. รัน batch 2. ตรวจไฟล์ | มี 1 ไฟล์ UTF-8, 800 แถว | 800 ราย | P1 | Not Run |  |  | - | **@disputed @csv-path · FR-017 · plan อ้างไม่มี CSV infra** |
| TC-084 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | CSV | **[DISPUTED-CSV]** รูปแบบชื่อไฟล์ | รอบ 10:00 | 1. ตรวจชื่อไฟล์ | MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv (พ.ศ. 2 หลัก) | 2026-07-17 10:00:00 → 690717100000 | P1 | Not Run |  |  | - | **@disputed @csv-path · FR-017** |
| TC-085 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | CSV | **[DISPUTED-CSV]** นำส่งผ่าน ESB | ไฟล์สร้างสำเร็จ | 1. นำส่ง 2. ตรวจ log | ไฟล์เข้า ESB → SMS Gateway + บันทึกผล | ไฟล์ CSV | P1 | Not Run |  |  | - | **@disputed @csv-path · FR-017** |
| TC-086 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | CSV | **[DISPUTED-CSV]** สร้างไฟล์ไม่ได้ → email | disk เต็ม/ไม่มีสิทธิ์เขียน | 1. รัน batch 2. ตรวจ email | หยุดรอบ + email ระบุขั้นตอน "สร้างไฟล์ CSV" ภายใน 15 นาที | disk full | P1 | Not Run |  |  | - | **@disputed @csv-path · US2-AS1 (spec.md:85)** |
| TC-087 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | CSV | **[DISPUTED-CSV]** เนื้อหาไฟล์ถูกต้อง | ชื่อมี comma/quote/newline/emoji | 1. เขียนไฟล์ 2. เปิดด้วย UTF-8 | ไทยไม่เพี้ยน, escape ถูกต้อง, คอลัมน์ไม่เลื่อน | 5 ชุดชื่อ adversarial | P1 | Not Run |  |  | - | **@disputed @csv-path · catalog §B** |
| TC-088 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | API | **[DISPUTED-API]** sendSmsOtp รายรายการ | dedup เสร็จ 800 ราย | 1. รัน batch 2. นับ call | 800 call, synchronous, mappedSystemName เดิม, message ครบ | 800 ราย | P1 | Not Run |  |  | - | **@disputed @api-path · plan.md:42** |
| TC-089 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | API | **[DISPUTED-API]** refer_no รายครั้ง map ถูก | gateway ตอบกลับ | 1. ตรวจ record ทุกราย | refer_no 800 ค่าไม่ซ้ำ ไม่สลับข้ามลูกค้า | 800 response | P1 | Not Run |  |  | - | **@disputed @api-path · FR-018** |
| TC-090 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | API | **[DISPUTED-API]** call ล้มเหลวราย → 'F' | 10 ราย รายที่ 4 ล้มเหลว | 1. รัน batch 2. ตรวจ record | รายที่ 4 = 'F', 5-10 ส่งต่อ, รอบไม่หยุด | 10 ราย 1 timeout | P1 | Not Run |  |  | - | **@disputed @api-path · FR-018.2/FR-020.1** |
| TC-091 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | API | **[DISPUTED-API]** throughput 1,000 call | 1,000 ราย synchronous | 1. รันรอบ 2. จับเวลา | จบในกรอบเวลา + บันทึก baseline | 1,000 ราย | P2 | Not Run |  |  | - | **@disputed @api-path · CF-005 — ไม่มี NFR ให้ assert** |
| TC-092 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | SMS Job | API | **[DISPUTED-API]** ไม่มีไฟล์ CSV ถูกสร้าง | รอบเสร็จส่งสำเร็จ | 1. ตรวจ filesystem + ESB dir | ไม่มี MKT_CSMS_*.csv / .tmp / PII บน disk | filesystem scan | P1 | Not Run |  |  | - | **@disputed @api-path · ภาพสะท้อนของ TC-083** |
| TC-093 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | Notification | ช่องทางนำส่งล่ม → หยุดรอบ + email | ESB/SMS Gateway ไม่ตอบสนองทั้งระบบ | 1. จำลอง gateway ล่ม 2. รัน batch 3. ตรวจ email | หยุดรอบ + email ระบุขั้นตอน "นำส่งผ่านช่องทางกลาง" ภายใน 15 นาที | mock ESB down | P1 | Not Run |  |  | - | FR-019 trigger 2 · **เพิ่มจาก coverage iteration 1** · แยกจาก TC-090 |
| TC-094 | Centralized SMS (CSMS) | CSMS-002 Welcome App รอบ 2 | Alert | Notification | แหล่งข้อมูลผิดพลาด → หยุดรอบ + email | dwconsol datasource ไม่พร้อมใช้ | 1. ปิด datasource 2. รัน batch 3. ตรวจ email | หยุดรอบ + email ระบุขั้นตอน "เข้าถึงแหล่งข้อมูลกรมธรรม์" ไม่บันทึก 'F' รายรายการทั้งรอบ | mock datasource down | P1 | Not Run |  |  | - | FR-019 trigger 3 · **เพิ่มจาก coverage iteration 1** · แยกจาก TC-045/TC-038 |

---

## Coverage Summary

### FR Coverage

| หน่วยวัด | ค่า |
|----------|-----|
| **Functional Requirements ทั้งหมด** | **26** (FR-001…FR-020.2 รวม sub-FR: FR-013.1, FR-015.1, FR-018.1, FR-018.2, FR-020.1, FR-020.2) |
| **FR ที่มี TC ≥ 1** | **26** |
| **FR Coverage** | **100%** |
| **Success Criteria ทั้งหมด** | **7** (SC-001…SC-007) |
| **SC ที่มี TC ≥ 1** | **7** |
| **SC Coverage** | **100%** |
| **Total Test Cases** | **94** (TC-001…TC-094) |
| **Uncovered requirements** | **ไม่มี (none)** |

> **Coverage iteration 2** — รอบแรกออกแบบ 92 TC และได้ verdict `gaps-found` จาก mode `coverage`:
> FR-019 ระบุ trigger ความล้มเหลวระดับรอบไว้ **5 กรณี** แต่คลุมจริงเพียง 3 → เพิ่ม **TC-093** (ช่องทางนำส่งล่ม)
> และ **TC-094** (แหล่งข้อมูลผิดพลาด) แล้ว re-run `coverage` → verdict `covered`

### Traceability — FR → TC

| FR | TCs |
|----|-----|
| FR-001 | TC-001, TC-002, TC-059 |
| FR-002 | TC-003, TC-045, TC-051, TC-052, TC-062, TC-067, TC-075 |
| FR-003 | TC-004, TC-005, TC-049, TC-052, TC-054 |
| FR-004 | TC-006, TC-007, TC-039, TC-056, TC-057 |
| FR-005 | TC-008, TC-009, TC-010, TC-040, TC-048, TC-058 |
| FR-006 | TC-011, TC-012, TC-057, TC-066 |
| FR-007 | TC-013, TC-033, TC-067 |
| FR-008 | TC-014 |
| FR-009 | TC-015, TC-016, TC-053 |
| FR-010 | TC-017, TC-018 |
| FR-011 | TC-034, TC-035 |
| FR-012 | TC-038 |
| FR-013 | TC-019, TC-054, TC-059, TC-060, TC-074 |
| FR-013.1 | TC-020, TC-055, TC-072 |
| FR-014 | TC-021, TC-022, TC-043, TC-078 |
| FR-015 | TC-023, TC-044, TC-046, TC-047, TC-064, TC-065 |
| FR-015.1 | TC-036 |
| FR-016 | TC-037, TC-044 |
| FR-017 | **[DISPUTED]** CSV: TC-071, TC-083, TC-084, TC-085, TC-086, TC-087 · API: TC-088, TC-089, TC-090, TC-091, TC-092 |
| FR-018 | TC-024, TC-058, TC-063, TC-070, TC-073, TC-076, TC-089 |
| FR-018.1 | TC-025, TC-031 |
| FR-018.2 | TC-026, TC-072, TC-074, TC-090 |
| FR-019 | TC-032, TC-042, TC-068, TC-079, TC-086, **TC-093**, **TC-094** |
| FR-020 | TC-027, TC-028, TC-061, TC-069, TC-080, TC-081 |
| FR-020.1 | TC-041, TC-074, TC-090 |
| FR-020.2 | TC-029, TC-030, TC-050, TC-082 |

### Traceability — SC → TC

| SC | TCs |
|----|-----|
| SC-001 | TC-001, TC-003, TC-015, TC-016, TC-052 |
| SC-002 | TC-019, TC-020, TC-028, TC-055, TC-059, TC-060, TC-061 |
| SC-003 | TC-011, TC-012, TC-017, TC-018, TC-039, TC-066 |
| SC-004 | TC-023, TC-036, TC-046, TC-047 |
| SC-005 | TC-032, TC-042, TC-086, **TC-093**, **TC-094** |
| SC-006 | TC-025, TC-031 |
| SC-007 | TC-027, TC-028, TC-074 |

### Per-Dimension Counts

| Test Dimension | Count | หมายเหตุ |
|----------------|-------|----------|
| Positive | **37** | TC-001…032 (32) + CSV TC-083/084/085 (3) + API TC-088/089 (2) |
| Negative/Validation | **22** | TC-033…050 (18) + CSV TC-086 (1) + API TC-090 (1) + **TC-093, TC-094 (2 — coverage iter. 2)** |
| Edge | **10** | TC-051…058 (8) + CSV TC-087 (1) + API TC-091 (1) |
| Concurrency | **4** | TC-059…062 |
| Security | **9** | TC-063…071 (รวม CSV TC-071) |
| Side-Effects | **8** | TC-072…078 (7) + API TC-092 (1) |
| UX/Usability | **4** | TC-079…082 |
| **รวม** | **94** | |

**ครบทั้ง 7 มิติ — ไม่มีมิติใดถูกตัดทิ้ง**
UX/Usability ของ headless batch map ไปยัง admin surface จริง (email แจ้งเตือน / Manual Fix / รายงาน) ตามที่ระบุไว้ในหัวข้อ UX ด้านบน
ส่วนที่ตัดเฉพาะเจาะจง: **WCAG AA** และ **mobile/responsive** — เพราะหน้าเหล่านี้เป็น internal admin tool เดิมของ CSMS ที่ `spec.md` บรรทัด 33 ระบุชัดว่าอยู่นอก scope การออกแบบของ feature นี้

### Priority Distribution

| Priority | Count |
|----------|-------|
| P1 | 70 |
| P2 | 23 |
| P3 | 1 |
| **รวม** | **94** |

*(นับจาก `test-cases_csms-002-welcome-round2.csv` ซึ่งเป็น source of truth — ตรงกับ Test Matrix ด้านบนทุกแถว)*

### Disputed TC Counts

| ชุด | Tags | Count | TC IDs |
|-----|------|-------|--------|
| CSV path | `@disputed @csv-path` | **6** | TC-071, TC-083, TC-084, TC-085, TC-086, TC-087 |
| API path | `@disputed @api-path` | **5** | TC-088, TC-089, TC-090, TC-091, TC-092 |
| **รวม disputed** | | **11** | **ห้ามรันทั้งสองชุด — ต้องลบชุดหนึ่งหลัง SA/PO ตัดสิน** |

### Constitution / PDPA Gate

| Principle | สถานะใน plan.md | Security-dimension TC ที่คลุม |
|-----------|-----------------|------------------------------|
| I. PDPA-First (opt-out) | ✅ ยึด precedent 002 (ใช้ 1503) | **TC-065** |
| II. Secure SMS Delivery | ✅ ส่วนใหญ่ผ่าน | **TC-064** (ไม่มีข้อมูลอ่อนไหวในข้อความ), TC-077 (rate/quota) |
| III. RBAC / SoD | ✅ ยกเว้นแล้ว (system batch) | **TC-069** (Manual Fix ยังต้องคุม RBAC จริง) |
| IV. Audit Trail (MUST NOT log sensitive fields) | ⚠️ **ยกเว้นแล้ว** — PII plain ในตาราง log | **TC-063** (cardNo plain), **TC-070** (ขอบเขต waiver ต้องไม่ขยาย) |
| V. Secure-by-Default Dev | ➡️ บังคับใช้ตอน implement | TC-067 (injection), TC-046 (template injection), TC-068 (PII leak ทาง email) |

> **🔴 CF-002 — CRITICAL (Constitution/PDPA gate)**: `spec.md` **ไม่มีหัวข้อ NFR ด้าน security/PII เลยแม้แต่ข้อเดียว**
> ทั้งที่ระบบจัดการ **cardNo = เลขประจำตัวประชาชน** + เบอร์มือถือ + ชื่อ-นามสกุล ของลูกค้า ~1,000 ราย/วัน
> `checklist.md` (G4 / CHK023) บันทึกช่องว่างนี้ไว้แล้วตั้งแต่ 2026-07-10 แต่ **ยังไม่ถูกปิด** — และ `plan.md`
> เลือก **ยกเว้น** Principle IV โดยยึด precedent ของ 002 แทนที่จะปิดช่องว่างนี้
> QA ปิดช่องด้วย **Security-dimension TC 9 รายการ (TC-063…TC-071)** ตามที่ SKILL §7 บังคับ **แต่**
> **QA ไม่สามารถประกาศ feature นี้ว่า "verified" ได้** จนกว่า SA + DPO จะเพิ่ม NFR ที่ระบุชัดว่า:
> (ก) cardNo/mobile ถูกป้องกันอย่างไรใน `WELCOME_NEW_CUST_APP` (ข) ขอบเขตการเข้าถึงตาราง log
> (ค) นโยบายการเก็บรักษา/ลบข้อมูล (ง) [ถ้าเป็น CSV path] การป้องกันไฟล์ที่มี PII ~1,000 ราย

### Known Open Issues — สรุปสำหรับ SA/PO

1. **🔴 CF-001** — `plan.md`:42 อ้างการลบ FR-017 จาก `spec.md` ที่ **ไม่เคยเกิดขึ้นจริง** → 11 TC ค้างเป็น disputed; ความน่าเชื่อถือของคำกล่าวอ้าง "ปิดแล้ว" อื่นใน `plan.md` ต้องตรวจซ้ำ
2. **🔴 CF-002** — ไม่มี security/PII NFR ทั้งที่จัดการ national ID → constitution gate ไม่ผ่านจนกว่า SA+DPO เพิ่ม NFR
3. **🟠 CF-003** — FR-020.2 รวม 2 requirement; ครึ่งที่เป็นรายงานไม่มีหมายเลข FR ของตัวเอง → **QA ไม่ตั้งเลข FR เอง**; TC-030/TC-082 ผูกกับ `FR-020.2` ชั่วคราวและต้อง re-map เมื่อ SA แยก FR (checklist.md เสนอ `FR-021`)
4. **🟠 CF-004** — รหัส SMS template ขัดแย้ง: spec `'111'` vs plan `114` → TC-021/TC-078 ห้าม assert จนกว่า SA ยืนยัน
5. **🟡 CF-005** — ไม่มี performance NFR เชิงเวลา → TC-091 วัดได้แต่ตัดสิน Pass/Fail ไม่ได้
6. **🟡 CF-006** — GOV query ค้าง [NEEDS DBA VERIFICATION] → TC-057 blocked
7. **🟡 CF-007** — รหัสประเภทกรมธรรม์ 'O/I/G/P' vs '0/1' ปิดด้วยข้อสันนิษฐาน ไม่ใช่ data contract → TC-056 ต้องยืนยันก่อนรัน
8. **🟡 CF-008** — cross-campaign dependency กับ CSMS-001 ปิดด้วย assumption เท่านั้น ไม่มี FR ป้องกัน → TC-051/TC-062/TC-075
9. **🟡 CF-009** — cron bug ของ 002 (`0 13 14 * * ?`) อาจถูก copy → TC-002
10. **⚪ CF-010** — Gate G10 coverage ≥80% ยังไม่มีคำตอบผูกมัดจาก Platform Owner

### Handoffs

- **`/speckit-analyze`** — CF-001 (plan อ้าง spec edit ที่ไม่เกิด), CF-004 (รหัส template '111' vs 114): เป็นความไม่สอดคล้อง **ระหว่าง artifact** โดยตรง
- **`/speckit-checklist`** — TC-043 (พฤติกรรมเมื่อ fallback template ล้มเหลวไม่ถูกนิยาม), TC-048 (ไม่มี validation รูปแบบเบอร์), TC-049 (ไม่มีการ validate ค่า N): เป็นช่องว่าง **คุณภาพของ requirement** ไม่ใช่ข้อบกพร่องของระบบ
- **SA + DPO** — CF-002 (security/PII NFR)
- **SA** — CF-003 (แยก FR-020.2), CF-005 (performance NFR)
- **DBA** — CF-006 (GOV schema), CF-007 (อักขระรหัสประเภทกรมธรรม์)

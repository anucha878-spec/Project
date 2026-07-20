# QA Pipeline Index — csms-002-welcome-round2

_Last updated: 2026-07-17_

**Feature**: CSMS-002 "Welcome New Customer (Ocean Club)" รอบ 2 (+20 วัน) · branch `003-batch-welcome-new-customer-app-sms`
**FEATURE_DIR**: `Result from QA Skill New Speckit-QA/CSMS-002 Welcome New Customer Round 2/`
**Spec source (read-only)**: `Spec/Batch เพื่อส่ง SMS Welcome New Customer รอบ 2 เมื่อครบ 20 วัน ตามเงื่อนไขกลุ่มเป้าหมาย/`

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | — | **blocked** | — | 2026-07-17 |
| 01 | design | `test-scenarios_csms-002-welcome-round2.md` · `test-cases_csms-002-welcome-round2.csv` | done | **2** | 2026-07-17 |
| 02 | risk | `risk-analysis_csms-002-welcome-round2.md` | done | 1 | 2026-07-17 |
| 03 | coverage | `coverage-review_csms-002-welcome-round2.md` | done (`covered`) | **2** | 2026-07-17 |
| 04 | test-data | `test-data_csms-002-welcome-round2.json` | done | 1 | 2026-07-17 |
| 05 | execute | `test-cases_csms-002-welcome-round2.csv` (statuses) | — | — | — |
| 06 | report | `verify-sit-run_<date>.md` · `SIT-Test-Document_<feature>.md` | — | — | — |
| 07 | regression | `verify-regression-run_<date>.md` | — | — | — |

## หมายเหตุต่อ Step

### 00 crosscheck — `blocked`
**เหตุผล**: **no upstream BRD/FRD/UR source available** — ไม่มีเอกสารต้นทางบนเครื่องนี้
`spec.md` อ้างถึง `C:\Users\akkarawat.le\Documents\Cowork_SpecKit\0SPEC_BATCH-CSMS-002_Welcome-New-Customer-OceanClub.md`
(UR20260070) แต่ path ดังกล่าวเป็นของเครื่องผู้ใช้อื่นและไม่มีอยู่จริงบนเครื่องนี้
→ ตาม SKILL §3.5.a ห้ามเดา/ห้ามแต่งเอกสารต้นทาง จึงบันทึกเป็น `blocked` ไม่ใช่ `done`
**ผลกระทบ**: ไม่สามารถยืนยันได้ว่า `spec.md` ตรงกับสิ่งที่ธุรกิจขอจริง — ความเสี่ยง Gap/Conflict/Extra-Scope
ระหว่างเอกสารต้นทาง ⇄ spec **ยังไม่ถูกตรวจ** และไม่ควรถือว่าไม่มี

### 01 design — iteration 2
- **94 TC** (TC-001…TC-094) · FR coverage **26/26 = 100%** · SC coverage **7/7 = 100%**
- **iteration 1** ออกแบบ 92 TC → `coverage` พบ gap → **iteration 2** เพิ่ม **TC-093, TC-094** (FR-019 trigger ที่ขาด)
- ทุก TC มี `Test Status = Not Run`, `Tested By`/`Tested Date` ว่าง — **ไม่มีการรันจริง** (ไม่มี running app)

### 02 risk — iteration 1
- P0: **6** · P1: **11** · P2: **8** · P3: **1** (นับตาม FR)
- **FR-017 = 18/18** — คะแนนสูงสุด ไม่ใช่เพราะซับซ้อน แต่เพราะ **ยังไม่มีใครรู้ว่าข้อกำหนดคืออะไร**

### 03 coverage — iteration 2, verdict `covered`
| Iteration | Verdict | สิ่งที่พบ |
|-----------|---------|-----------|
| 1 | `gaps-found` | FR-019 ระบุ trigger ความล้มเหลวระดับรอบ **5 กรณี** แต่คลุมเพียง 3 — ขาด "ช่องทางนำส่งล่ม" + "แหล่งข้อมูลผิดพลาด" |
| 2 | **`covered`** | ปิด gap ด้วย TC-093/TC-094; ไม่พบ Gap เหลือ; negative/edge ครบ; 7 มิติครบ |

### 04 test-data — iteration 1
- **SYNTHETIC ONLY** — ไม่มี PII จริงแม้แต่รายการเดียว (PDPA gate §7)
- 6 categories: `positive` (26) · `negative` (35) · `boundary` (10) · `business_rule` (10) · `e2e` (6) · `risk_based` (19)
- ทุก record ผูกกับ `tc_id` (TC-###) + `req_id` (FR-###/SC-###) จริง

### 05–07 execute / report / regression — **นอก scope**
ไม่มีโค้ดและไม่มีระบบที่รันได้บนเครื่องนี้ → **ห้ามบันทึกผลใดๆ** ทุก TC คงสถานะ `Not Run`
ตามหลัก no-fabrication (SKILL §"Never fabricate results")

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3 (ต้องอ่านก่อนใช้ artifact ใดๆ)

**ชุดทดสอบนี้ถูกออกแบบไว้ 2 ทางโดยเจตนา และ `feature นี้ยังไม่พร้อมเข้า SIT`**

| เอกสาร | บรรทัด | ข้อความ |
|--------|--------|---------|
| `spec.md` | **151** | **FR-017**: "ระบบ MUST สร้างไฟล์นำส่ง (CSV, UTF-8) … `MKT_CSMS_MKTWelcomeNewCustApp_[YYMMDDhhmmss].csv`" |
| `plan.md` | **42** | "ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` … (**FR-017 เดิมถูกตัดออกจาก spec.md แล้ว 2026-07-11**)" |

### 🔴 คำกล่าวอ้างของ `plan.md` เป็นเท็จ — ยืนยันด้วยการตรวจเองแล้ว (2026-07-17)
**FR-017 ไม่เคยถูกลบออกจาก `spec.md`** — ยังอยู่ครบที่บรรทัด 151 และช่องทาง CSV ปรากฏใน `spec.md` **5 จุด**:
บรรทัด **31** (Scope), **85** (US2 Acceptance Scenario 1), **151** (FR-017), **161** (FR-019), **174** (Key Entities "ไฟล์นำส่ง")
→ `plan.md` **ยืนยันการแก้ไขเอกสารที่ไม่เคยถูกดำเนินการ** = **documentation-integrity defect ในตัวมันเอง** (CF-001)

| ชุด | Tags | Count | TC IDs |
|-----|------|-------|--------|
| CSV path | `@disputed @csv-path` | **6** | TC-071, TC-083, TC-084, TC-085, TC-086, TC-087 |
| API path | `@disputed @api-path` | **5** | TC-088, TC-089, TC-090, TC-091, TC-092 |

**กฎ**: ทั้ง 11 TC คงสถานะ `Not Run` · **ห้ามรันทั้งสองชุดพร้อมกัน** (ขัดแย้งโดยนิยาม — ชุดหนึ่งจะ Fail เสมอ)
· ต้องมีคำตัดสินจาก **SA/PO** ก่อน · **เมื่อตัดสินแล้วต้องลบชุดที่แพ้ออก 1 ชุด** จากทั้ง `test-scenarios`, `test-cases.csv`, `test-data.json`
· และต้องแก้เอกสารต้นทางให้สอดคล้อง (ถ้า API → SA ต้องลบ FR-017 **จริง** + แก้ 4 จุดที่เหลือ; ถ้า CSV → Dev ต้องสร้าง CSV infra ที่ `plan.md` ยืนยันว่าไม่มี)

---

## 🔴 CRITICAL / Open Findings

| ID | Severity | Finding | ปลายทาง |
|----|----------|---------|---------|
| **CF-001** | **CRITICAL** | `plan.md`:42 อ้างการลบ FR-017 จาก `spec.md` ที่ **ไม่เคยเกิดขึ้น** → 11 TC ค้าง disputed; **ความน่าเชื่อถือของคำกล่าวอ้าง "ปิดแล้ว/ยืนยันแล้ว/ยกเว้นแล้ว" อื่นๆ ทั้งหมดใน `plan.md` ต้องถูกตรวจซ้ำ** | **SA/PO** · `/speckit-analyze` |
| **CF-002** | **CRITICAL** | **ไม่มี security/PII NFR ใน `spec.md` เลย** ทั้งที่จัดการ **cardNo = เลขประจำตัวประชาชน** + เบอร์ + ชื่อ ~1,000 ราย/วัน; `checklist.md` G4/CHK023 บันทึกไว้ตั้งแต่ 2026-07-10 แต่ยังไม่ปิด; `plan.md` เลือก **ยกเว้น** Principle IV แทนการปิดช่องว่าง → QA คลุมด้วย Security TC 9 รายการ **แต่ตาม SKILL §7 ปฏิเสธที่จะประกาศว่า "verified"** | **SA + DPO** |
| **CF-003** | HIGH | **FR-020.2 รวม 2 requirement** (Manual-Fix date + รายงาน) → **ครึ่งรายงานสูญเสียหมายเลข FR ของตัวเอง** และไม่มี US/scenario รองรับ; **QA ไม่ตั้งเลข FR เองโดยพลการ** — TC-030/TC-082 ผูกกับ `FR-020.2` ชั่วคราว ต้อง re-map เมื่อ SA แยก FR (`checklist.md` เสนอ `FR-021`) | **SA** |
| **CF-004** | HIGH | **รหัส SMS template ขัดแย้ง** — `spec.md`:147 ระบุ `'111'` แต่ `plan.md`:9,28,113 ระบุ `114` ไม่มีการ reconcile → TC-021/TC-078 **ห้าม assert** จนกว่า SA ยืนยัน | **SA** · `/speckit-analyze` |
| **CF-005** | MEDIUM | ไม่มี **performance NFR เชิงเวลา** ทั้งที่ gateway ส่งได้ทีละ 1 call synchronous และ `plan.md`:38 ยอมรับว่ายังไม่เคยวัด throughput จริง → TC-091 วัดได้แต่ตัดสิน Pass/Fail ไม่ได้ | **SA** |
| **CF-006** | MEDIUM | **GOV path ไม่มี precedent** — `plan.md`:29 ค้าง **[NEEDS DBA VERIFICATION]** column/join ของ `ili_policy_master` → **TC-057 blocked** | **DBA** |
| **CF-007** | MEDIUM | รหัสประเภทกรมธรรม์ **'O/I/G/P' vs '0/1'** ปิดด้วย *ข้อสันนิษฐาน* "PDF conversion error" ไม่ใช่ data contract จริง → TC-056 ต้องยืนยันก่อนรัน | **DBA/SA** |
| **CF-008** | MEDIUM | **Cross-campaign dependency (CSMS-001)** — เป็นแหล่งกลุ่มเป้าหมายเพียงแหล่งเดียว + FK กลับ; ปิดด้วย assumption "ระบบต้นน้ำพร้อมใช้" **ไม่มี FR ป้องกัน** → ถ้า CSMS-001 ล้มเหลว 20 วันก่อน รอบนี้จะ "จบปกติแบบไม่มีเป้าหมาย" (TC-051) **ซึ่งดูเหมือนสำเร็จทั้งที่ลูกค้าหายไปเงียบๆ — ไม่มี TC ใดจับได้เพราะไม่มีข้อกำหนดให้จับ** | **SA** |
| **CF-009** | LOW→MED | **Cron bug ของ 002** (`0 13 14 * * ?` = 14:13 น. ผิดจาก JavaDoc, ไม่เคยถูกแก้) อาจถูก copy → TC-002 (unit test เดียว ต้นทุนต่ำมาก — แนะนำรันตั้งแต่รอบแรกแม้ band P2) | **Dev** |
| **CF-010** | INFO | Gate G10 coverage ≥80% ยังไม่มีคำตอบผูกมัด (`plan.md`:32 [NEEDS CLARIFICATION]) | **Platform Owner** |

---

## Next Actions

1. **[BLOCKER · SA/PO]** ตัดสิน **CF-001** — FR-017 คงอยู่ (CSV) หรือถูกตัดจริง (API)? แล้ว **ลบชุด TC ที่แพ้ 1 ชุด**
   และ **แก้เอกสารต้นทางให้ตรงกันจริง** — ไม่ใช่แค่เขียนใน `plan.md` ว่าแก้แล้ว
2. **[BLOCKER · SA + DPO]** ปิด **CF-002** — เพิ่ม security/PII NFR ครอบคลุม: การป้องกัน cardNo/mobile ใน
   `WELCOME_NEW_CUST_APP`, ขอบเขตการเข้าถึงตาราง log, นโยบาย retention/ลบข้อมูล, [ถ้า CSV] การป้องกันไฟล์
3. **[SA]** แยก **FR-020.2** เป็น 2 FR (**CF-003**) แล้วแจ้ง QA เพื่อ re-map TC-030/TC-082
4. **[SA]** reconcile รหัส template `'111'` vs `114` (**CF-004**) · กำหนด performance NFR (**CF-005**)
5. **[DBA]** ปลดล็อก **CF-006** (GOV schema) และ **CF-007** (อักขระรหัสประเภทกรมธรรม์)
6. **[ทีม]** รัน `/speckit-analyze` — CF-001 และ CF-004 เป็นความไม่สอดคล้อง **ระหว่าง artifact** โดยตรง
7. **[ทีม]** รัน `/speckit-checklist` — ช่องว่างคุณภาพ requirement: พฤติกรรมเมื่อ fallback template ล้มเหลว (TC-043),
   validation รูปแบบเบอร์ (TC-048), การ validate ค่า N (TC-049), retry สำหรับ datasource (TC-094)
8. **[QA]** เมื่อ CF-001 + CF-002 ปิดแล้ว และมี implementation ที่รันได้ → `/speckit-qa execute`
   **ห้ามบันทึกผลใดๆ ก่อนหน้านั้น** — ทุก TC ต้องคงสถานะ `Not Run`

> **สถานะโดยรวม**: ชุดทดสอบ **พร้อม** (94 TC, coverage 100%, 7 มิติครบ, dataset synthetic ผูก TC/FR ครบ)
> แต่ **feature ยังไม่พร้อมเข้า SIT** — ติด 2 blocker ระดับ CRITICAL (CF-001, CF-002) ที่เป็นข้อบกพร่อง
> ของ **เอกสาร** ไม่ใช่ของโค้ด และ QA แก้เองไม่ได้

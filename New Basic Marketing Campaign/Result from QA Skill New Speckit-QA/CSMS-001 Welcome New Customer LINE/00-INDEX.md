# QA Pipeline Index — csms-001-welcome-line

_Last updated: 2026-07-17_

**Feature**: CSMS-001 Batch ส่ง SMS "Welcome New Customer (LINE)" (`002-batch-welcome-new-customer-line-sms`)
**System**: Centralized SMS (CSMS) — epirusapp / Ocean Life Web Portal
**Source (read-only)**: `Spec\Batch เพื่อส่ง SMS Welcome New Customer ตามเงื่อนไขกลุ่มเป้าหมาย\` — `spec.md` (2026-07-07), `plan.md` (2026-07-09), `checklist.md` (2026-07-10) · **ไม่มี `tasks.md`**
**FEATURE_DIR (artifacts)**: `Result from QA Skill New Speckit-QA\CSMS-001 Welcome New Customer LINE\`

> **QA เป็น read-only ต่อ `Spec\`** — ไม่มีการแก้ไขไฟล์ใด ๆ ใน input dir (SKILL §3.5: "Do not modify `spec.md`")

---

## Pipeline Ledger

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-001-welcome-line.md | **blocked** | — | 2026-07-17 |
| 01 | design | test-scenarios_csms-001-welcome-line.md · test-cases_csms-001-welcome-line.csv | **done** | 1 | 2026-07-17 |
| 02 | risk | risk-analysis_csms-001-welcome-line.md | **done** | 1 | 2026-07-17 |
| 03 | coverage | coverage-review_csms-001-welcome-line.md | **done** (verdict `covered`) | 1 | 2026-07-17 |
| 04 | test-data | test-data_csms-001-welcome-line.json | **done** | 1 | 2026-07-17 |
| 05 | execute | test-cases_csms-001-welcome-line.csv (statuses) | — | — | — |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-001-welcome-line.md | — | — | — |
| 07 | regression | verify-regression-run_<date>.md | — | — | — |

### เหตุผลของแต่ละสถานะ

- **00 `crosscheck` = `blocked`** — **เหตุผล: no upstream BRD/FRD/UR source available**
  `spec.md` อ้างเอกสารต้นทาง `SPEC_BATCH-CSMS-001_Welcome-New-Customer-LINE.md` v1.5 (wiki pageId=1337491540, 1337491572) แต่ **ไม่มีไฟล์นี้บนเครื่องนี้** และ auto-detect ตาม SKILL §3.5.a (`FRD*`, `BRD*`, `UR *`, `SPEC_FR*`, `*requirement*`) ไม่พบ candidate ใด ⇒ ไม่สามารถสร้าง two-way traceability matrix (source ⇄ spec) ได้
  **ไม่ fabricate** — ไม่มีการเดาเนื้อหา BRD และไม่มีการเขียน `crosscheck-brd-spec_*.md` ปลอม
  **ผลกระทบ**: ไม่ทราบว่า `spec.md` drift จากความต้องการทางธุรกิจจริงหรือไม่ · `design` รันบนสมมติฐานว่า `spec.md` = source of truth · **ถ้าหาเอกสารต้นทางเจอ ควรรัน `/speckit-qa crosscheck <path>` ก่อน แล้วทบทวน TC ที่อาจ bake drift ไว้**
- **01 `design` = `done`, iteration 1** — 88 TCs · 7 dimensions ครบ · coverage 100%
- **02 `risk` = `done`, iteration 1** — read-only ไม่แก้ TC · P0=8 / P1=9 / P2=8 / P3=2 FR
- **03 `coverage` = `done`, iteration 1, verdict `covered`** — audit-only · **ไม่พบ Gap ⇒ ไม่มี loop-back ไป `design` ⇒ iteration ไม่ถูก bump**
  *(iteration คงที่ 1 อย่างซื่อตรง — ไม่มีการ bump ปลอมให้ดูเหมือนมี re-work · เหตุที่ไม่พบ Gap: `design` สร้าง traceability spine ก่อนเขียน TC ตาม SKILL §3 จึงจับ FR ที่ไม่มี TC ได้ตั้งแต่ขั้นวางแผน — `coverage` จึงทำหน้าที่ยืนยันอิสระ)*
- **04 `test-data` = `done`, iteration 1** — 79 records · 6 arrays ครบ · ทุก record ผูกกับ TC-### และ FR-###/SC-### จริง (ตรวจด้วย script เทียบกับ tracker CSV: 0 error) · **SYNTHETIC ทั้งหมด**
- **05–07 = `—`** — **นอก scope**: ไม่มี code และไม่มี running app บนเครื่องนี้ (feature ยังไม่ implement) ⇒ `execute` / `report` / `regression` รันไม่ได้
  **TC ทุกข้อคง Status = `Not Run`** · `Tested By` / `Tested Date` เว้นว่าง · **ไม่มีการ fabricate ผลรัน** ตาม SKILL "Operating Principles: Never fabricate results"

---

## Artifacts ที่เขียนแล้ว

| # | ไฟล์ | ขนาดเนื้อหา |
|---|---|---|
| 1 | `00-INDEX.md` | ledger นี้ |
| 2 | `test-scenarios_csms-001-welcome-line.md` | Disputed section + 10 findings + Test Matrix (88 rows) + BDD Gherkin (88 scenarios) + Test Checklist 16 คอลัมน์ (88 rows) + Coverage Summary |
| 3 | `test-cases_csms-001-welcome-line.csv` | tracker 88 rows × 12 คอลัมน์ · Status=`Not Run` ทุกแถว |
| 4 | `risk-analysis_csms-001-welcome-line.md` | 6-axis score ต่อ FR · P0–P3 bands · Likelihood×Impact heatmap · test-first order |
| 5 | `coverage-review_csms-001-welcome-line.md` | Gap / Overlap / Missing-negative-edge passes · verdict `covered` |
| 6 | `test-data_csms-001-welcome-line.json` | 79 synthetic records · 6 categories |

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3 (บันทึกใน ledger ตามที่ผู้ใช้สั่ง)

**ข้อขัดแย้งที่ยังไม่มีผู้ตัดสิน**:

| ฝ่าย | เอกสาร | สาระ |
|---|---|---|
| CSV-path | **`spec.md` FR-013** | *"ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตาม naming convention `[Department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` … **ไฟล์นี้จำเป็นต้องสร้างก่อนเรียกบริการส่ง**"* (BR-007, Q-007 Closed) · ตัวอย่าง `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv` |
| API-path | **`plan.md`** (ไม่มี CSV เลย) | §Summary: *"ส่งทีละรายการผ่าน **SMS Gateway V3 (Infobip)** ด้วย `mappedSystemName='CSMS_SNC_NewCust'`"* · §Technical approach: *"loop ทีละราย + pre-render message เพราะ **SMS Gateway V3 ไม่มี bulk/template mechanism**"* · §Performance Goals: *"**ส่งได้ทีละ 1 รายการต่อ 1 HTTP call (ไม่มี bulk) ต่างจาก batch อื่นที่ส่งเป็นไฟล์ทีเดียว**"* |

**การจัดการของ QA (ตามการตัดสินของผู้ใช้)**: ออกแบบ TC ไว้ **ทั้งสองแนวทาง** พร้อม tag กำกับ

| ชุด | Tag | จำนวน | TC IDs |
|---|---|---|---|
| CSV-path | `@disputed @csv-path` | **7** | TC-077, TC-078, TC-079, TC-080, TC-081, TC-082, TC-083 |
| API-path | `@disputed @api-path` | **5** | TC-084, TC-085, TC-086, TC-087, TC-088 |
| **รวม** | | **12** (13.6% ของ 88 TCs) | |

> ⚠️ **ทั้งสองชุดต้องไม่ถูก execute พร้อมกัน**
> ⚠️ **เมื่อ SA/PO ตัดสินแล้ว ต้องลบชุดใดชุดหนึ่งทิ้งทั้งชุด** (exactly one of the two tagged sets will have to be deleted once ruled):
> - **spec.md FR-013 ชนะ** ⇒ ลบ `@api-path` (TC-084…TC-088) + `plan.md` ต้องเพิ่มขั้นตอนสร้างไฟล์ + ต้องปิด F-009 (พ.ศ. vs ค.ศ.) และ F-010 (ไม่มี column contract) ก่อน
> - **plan.md ชนะ** ⇒ ลบ `@csv-path` (TC-077…TC-083) + `spec.md` ต้องถอน/แก้ FR-013 **รวมถึง** §ขอบเขต (Scope), US2 Acceptance #1/#2 และ FR-018 ที่อ้าง "generate ไฟล์ไม่ได้" เป็น trigger ของ email
>
> **TC-087** (`@api-path` — "ยืนยันว่าไม่มีไฟล์ CSV") เป็น **canary**: เป็น TC ที่ assert "ความไม่มี" ของสิ่งที่ FR-013 บังคับให้มี ⇒ ตราบใดที่ TC-077 และ TC-087 อยู่ในชุดเดียวกันได้ แปลว่าข้อขัดแย้งยังไม่ถูกตัดสิน
>
> **Routing**: ข้อขัดแย้งระหว่าง artifact (spec ↔ plan) เป็นขอบเขตของ `/speckit-analyze` — QA บันทึกเป็น finding **F-001** และรอคำตัดสิน **ไม่เดาแทน SA/PO**

---

## CRITICAL / HIGH Findings (สรุป — รายละเอียดเต็มใน `test-scenarios_csms-001-welcome-line.md`)

| ID | Severity | Finding | อ้างอิง |
|---|---|---|---|
| **F-001** | **CRITICAL** | **Disputed interface** — spec.md FR-013 (CSV MUST) ขัดกับ plan.md (ไม่มี CSV, 1 record/HTTP call) ยังไม่มีผู้ตัดสิน | spec.md FR-013 · plan.md §Summary/§Technical approach/§Performance Goals |
| **F-002** | **CRITICAL** | **ไม่มี security/PII NFR เลย** ทั้งที่ batch จัดการ **card_no (เลขบัตรประชาชน)** + mobile_no และเก็บลงตารางแบบ plain | checklist.md **CHK026 `[!]` + Gap G2** · spec.md FR-016 |
| **F-003** | **CRITICAL** | **Constitution IV (ห้าม log PII) ถูกยกเว้นโดยอ้าง legacy pattern — โดยไม่มี compensating control ใด ๆ** (ไม่มี masking / access control / retention) | plan.md §Constitution Check ข้อ IV (Aor, 2026-07-09) · SKILL §7 |
| **F-004** | HIGH | **PDPA opt-out ปิดโดยอ้างเบอร์ 1503 แต่ไม่ผูก process กับ Do Not Contact List** ⇒ ลูกค้าโทรยกเลิกแล้วไม่มีกลไกกันส่งซ้ำรอบถัดไป | plan.md §Constitution Check ข้อ I (Aor, 2026-07-09) |
| **F-005** | HIGH | **ไม่มี performance NFR** (เวลาต่อรอบ / volume) ทั้งที่ plan.md เตือนเองว่า 1 record = 1 HTTP call ไม่มี bulk | checklist.md CHK019/CHK025/CHK007 + **G1, G4** · plan.md §Performance Goals `[NEEDS CLARIFICATION]` |
| **F-006** | HIGH | **ไม่มี edge case / FR รองรับ SMS Gateway ตอบ refer_no ผิดรูปแบบ หรือล้มเหลวรายรายการ** | checklist.md CHK024 + **G5** |
| **F-009** | HIGH | **FR-013 ขัดกับตัวอย่างของตัวเอง** — ระบุ "ปี **พ.ศ.** 2 หลัก" แต่ตัวอย่าง `..._**26**0516...csv` ใช้ **ค.ศ.** (พ.ศ. 2569 ต้องเป็น `69`) | spec.md FR-013 vs §US1 Example Data · *พบระหว่างออกแบบ TC* |
| **F-010** | HIGH | **FR-013 ไม่ระบุ column list / order / layout ของไฟล์ CSV เลย** ⇒ ไม่มี contract ให้ระบบปลายทางอ่าน | spec.md FR-013 · *พบระหว่างออกแบบ TC* |
| **F-007** | MEDIUM | retry interval (FR-008b "เว้นช่วง") + timeout/SLA (FR-018 "ตามเวลาที่กำหนด") เป็นค่าลอย ไม่มีตัวเลข | checklist.md CHK004/CHK005/CHK011 + **G3** |
| **F-008** | MEDIUM | ไม่ระบุพฤติกรรมเมื่อไม่พบ template ทั้ง `sms_message_schedule` และ `SMS_CATEGORY` (fallback chain ไม่มีปลายทาง) | spec.md FR-011 |

### §7 Constitution & PDPA Gate — สถานะ

**ทุก MUST-principle มี Security-dimension TC ครอบครบ** (I→TC-062 · II→TC-059/064 · III→TC-063 · IV→TC-060/061/066/068/083) ⇒ **ไม่มี CRITICAL coverage gap**

**แต่**: **F-002 + F-003** ทำให้ TC เหล่านั้น **assert ไม่ได้** (ไม่มีเกณฑ์ที่ SA/DPO รับรอง) ⇒ ตาม SKILL §7:
> **ห้ามประกาศ feature นี้ว่า "verified" จนกว่า F-002 และ F-003 จะปิด** ไม่ว่าผลรันจะเป็นอย่างไร

---

## สรุปตัวเลข

| ตัวชี้วัด | ค่า |
|---|---|
| Total TCs | **88** |
| FR/SC coverage | **34/34 = 100%** (27 FR + 7 SC) |
| Uncovered requirements | **0** |
| Dimensions ครบ | **7/7** (ยกเว้นเฉพาะ sub-area WCAG AA / responsive-mobile พร้อมเหตุผล) |
| Disputed TCs | **12** (7 csv-path + 5 api-path) |
| TCs ที่ **blocked** จนกว่าจะปิด finding | **11** |
| TCs ที่พร้อม execute (เมื่อมีระบบ + ปิด F-001) | **65** |
| CRITICAL findings | **3** (F-001, F-002, F-003) |
| HIGH findings | **5** (F-004, F-005, F-006, F-009, F-010) |
| MEDIUM findings | **2** (F-007, F-008) |
| Coverage iterations | **1** (ไม่มี loop-back) |
| Test-data records | **79** (synthetic only) |
| **Test Status** | **`Not Run` ทั้ง 88 ข้อ** — ไม่มีระบบให้รัน |

---

## Next Actions

### ต้องทำก่อนเริ่ม SIT (เรียงตามลำดับ)

| # | Action | เจ้าของ | ปิด finding |
|---|---|---|---|
| 1 | **ตัดสิน CSV vs SMS Gateway V3** แล้วลบ TC ชุดที่แพ้ทิ้งทั้งชุด + แก้ artifact ฝั่งที่ผิด | **SA + PO** | F-001 (+F-009, F-010 ถ้า CSV ชนะ) |
| 2 | **เพิ่ม security/PII NFR** (card_no + mobile_no: logging/masking, access control, retention, TLS, data minimization) | **SA + DPO** | F-002 |
| 3 | **ระบุ compensating control ของ Constitution IV ที่ถูกยกเว้น** — หรือทบทวนการยกเว้น | **Platform Owner + DPO** | F-003 |
| 4 | เพิ่ม performance NFR + volume ต่อรอบ | SA + PO | F-005 |
| 5 | เพิ่ม edge case/FR: Gateway ล้มเหลวรายรายการ + refer_no ผิดรูปแบบ (+ threshold แยกจาก "ล่มทั้งระบบ") | SA | F-006 |
| 6 | ระบุตัวเลข retry interval + timeout/SLA | SA | F-007 |
| 7 | ระบุปลายทางของ template fallback chain | SA | F-008 |
| 8 | ตัดสิน opt-out (1503) ว่าจะผูกกับ Do Not Contact List อย่างไร | Platform Owner | F-004 |
| 9 | หา **เอกสารต้นทาง** `SPEC_BATCH-CSMS-001_Welcome-New-Customer-LINE.md` v1.5 แล้วรัน `/speckit-qa crosscheck <path>` | SA / BA | ปลด `00 crosscheck` จาก `blocked` |

### requirement gap ที่ไม่มี FR ให้ทดสอบ (route → `/speckit-checklist` หรือ SA/Dev design decision)

normalization rule ของ dedup key (TC-049) · lock/TOCTOU ของ FR-010 (TC-056) · concurrency policy: daily vs Manual Fix vs round overlap (TC-055/057) · whitelist ของลิงก์ cf_catalog (TC-064) · format validation ของ mobile_no (TC-050) · CSV column contract (TC-080)

### หลังปิด blocker แล้ว

`/speckit-qa execute` → `/speckit-qa report` → `/speckit-qa regression` — **ทั้งหมดต้องรันบนเครื่อง/สภาพแวดล้อมที่เข้าถึง epirusapp ได้** (เครื่องนี้ไม่มี code และไม่มี running app)

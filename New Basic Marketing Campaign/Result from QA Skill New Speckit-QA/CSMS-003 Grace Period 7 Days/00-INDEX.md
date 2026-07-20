# QA Pipeline Index — csms-003-grace-period

_Last updated: 2026-07-17_

**Campaign**: CSMS-003 "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน ตามเงื่อนไขกลุ่มเป้าหมาย"
**Spec source (read-only)**: `Spec/Batch เพื่อส่ง Batch - SMS Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน ตามเงื่อนไขกลุ่มเป้าหมาย/` — `spec.md` (2026-07-09) · `plan.md` (2026-07-16) · `checklist.md` (2026-07-10) · **ไม่มี `tasks.md`**
**Feature branch (spec)**: `004-gp7-sms-batch` · **Target system**: epirusapp monolith (Java 7 / Spring 3.2.2 / Camel 2.11.1)

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-003-grace-period.md | **blocked** | — | 2026-07-17 |
| 01 | design | test-scenarios_csms-003-grace-period.md · test-cases_csms-003-grace-period.csv | done | **2** | 2026-07-17 |
| 02 | risk | risk-analysis_csms-003-grace-period.md | done | 1 | 2026-07-17 |
| 03 | coverage | coverage-review_csms-003-grace-period.md | done (`covered`) | **2** | 2026-07-17 |
| 04 | test-data | test-data_csms-003-grace-period.json | done | 1 | 2026-07-17 |
| 05 | execute | test-cases_csms-003-grace-period.csv (statuses) | — | — | — |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-003-grace-period.md | — | — | — |
| 07 | regression | verify-regression-run_<date>.md | — | — | — |

## เหตุผลของ Status

### `00 crosscheck` = **blocked**
**เหตุผล: no upstream BRD/FRD/UR source available** — ไม่มีเอกสารต้นทางอยู่บนเครื่องนี้ `spec.md` อ้างถึง `SPEC_BATCH-CSMS-003_GracePeriod7Day.md` (Process Specification, UR20260070: Basic Campaign (MCMP), แก้ไขล่าสุด 19/05/2026 โดย อัครวัฒน์ วัฒธนพงษ์) แต่ไฟล์นั้น **ไม่มีอยู่ในเครื่อง** → SKILL §3.5.a บังคับให้ abort แทนการเดา ห้ามสร้างผลลัพธ์ crosscheck ขึ้นมาเอง
**เปิด block ได้โดย**: `/speckit-qa crosscheck <path-to-SPEC_BATCH-CSMS-003_GracePeriod7Day.md>`
**ผลกระทบ**: ไม่มีใครยืนยันได้ว่า `spec.md` ตรงกับเอกสารต้นทางหรือไม่ — ข้อพิพาท CSV vs API ด้านล่างอาจถูกตัดจบทันทีถ้าได้เห็นเอกสารต้นทาง (`plan.md` เองอ้างว่า spec เดิม "อ้างอิงเอกสารต้นทาง V2/file-based")

### `01 design` = done, **iteration 2**
iteration 1 → `coverage` iteration 1 พบ 1 Gap (HIGH) → loop back → เพิ่ม **TC-090** → iteration 2

### `03 coverage` = done (`covered`), **iteration 2**
iteration 1 = `gaps-found` (Edge Case "รอบที่ batch ไม่ได้ scheduled / วันหยุด" ของ `spec.md` ไม่มี TC) → iteration 2 = `covered`

### `05 execute` / `06 report` / `07 regression` = **out of scope**
ไม่มี code / ไม่มี running app บนเครื่องนี้ → **ทุก TC มีสถานะ `Not Run`** และช่อง `Tested By` / `Tested Date` เว้นว่างทั้งหมด ตามกฎ no-fabrication (SKILL §Operating Principles) — **ห้ามแปลง `Not Run` เป็น `Pass` โดยไม่มีการรันจริง**

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3 (ยังไม่มีคำตัดสิน)

**`spec.md` บังคับ CSV**: **FR-009** (สร้างไฟล์ Interface CSV UTF-8 ชื่อ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv`) · **FR-011** (นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB)) · **User Story 3 "สร้างไฟล์ CSV และนำส่ง SMS Gateway" ทั้ง Story (Priority P1)** · ชื่อไฟล์ตัวอย่าง `MKT_CSMS_MKTGracePeriod7Days_690519100000.csv` · Edge Case "สร้างไฟล์ CSV ไม่สำเร็จ → email + Manual Fix"

**`plan.md` (บรรทัด ~39) ตัด CSV ทิ้ง**: "ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` (Clarification 2026-07-11, ตัดจาก spec เดิมที่อ้างอิงเอกสารต้นทาง V2/file-based)"

**สถานะ**: `plan.md` อ้าง Clarification 2026-07-11 แต่ **`spec.md` ไม่เคยถูกอัปเดต** — Clarifications section ของ `spec.md` มีเพียง Session **2026-07-07** ไม่มีร่องรอยของ 2026-07-11 เลย → **P1 User Story ทั้ง Story แขวนอยู่กับคำตัดสินนี้** และ **ยังไม่มีใครตัดสิน**

**ข้อยุติของผู้ใช้ (2026-07-17)**: ออกแบบ TC **ทั้งสองแนวทาง** แล้ว flag ไว้

| ชุด | Tag | จำนวน | TC |
|---|---|---|---|
| CSV path | `@disputed @csv-path` | **6** | TC-016, TC-017, TC-018, TC-036, TC-060, TC-074 |
| API path | `@disputed @api-path` | **5** | TC-019, TC-020, TC-021, TC-037, TC-066 |
| Plan-only (masking) | `@disputed @plan-only` | **1** | TC-075 |
| **รวม** | | **12** | ≈13% ของทั้งชุด |

**กติกาบังคับ**
1. **ห้ามรันทั้งสองชุด** — อธิบายระบบคนละระบบ รันทั้งคู่จะได้ Fail ปลอมอย่างน้อยหนึ่งชุดเสมอ
2. เมื่อ SA/PO ตัดสินแล้ว **ต้องลบชุดที่แพ้** ออกจาก `test-cases_*.csv` + `test-scenarios_*.md` + `test-data_*.json` แล้ว **re-run `/speckit-qa coverage` (iteration 3)**
3. ถ้า **API path ชนะ** → `spec.md` FR-009 / FR-011 / **US3 ทั้ง Story** ต้องถูกแก้/ถอน (งานของ SA ผ่าน `/speckit-specify`) — **ถ้า FR-009 ยังอยู่ใน spec แต่ TC ถูกลบ = CRITICAL coverage gap ทันที**
4. ถ้า **CSV path ชนะ** → `plan.md` §Constraints/§Summary/technical approach ต้องถูกรื้อ — implementation ที่มีอยู่ (`SmsGracePeriodCamelBean.java`) ผูกกับ `sendSmsOtp` แล้ว
5. **ชุดนี้ยังไม่ SIT-ready** จนกว่าจะมีคำตัดสิน

---

## CRITICAL Findings (ต้องปิดก่อน `report` จะประกาศ "verified" ได้)

| # | Finding | ผลกระทบ |
|---|---|---|
| **CRITICAL-1** | **ไม่มี security/PII NFR** ทั้งที่ batch จัดการ `cardNo` (เลขบัตรประชาชน) + `mobile1`/`mobile2` + `policy_no` และเขียน `mobile_no`/`sms_message` เป็น plain field ลง `SMS_GRACE_PERIOD_LOG` — `checklist.md` **G1/CHK023 ยังเปิดค้าง `[!]`** ขณะที่ `plan.md` อ้างว่า "ยกเว้นแล้วโดยยึด precedent 002/003" | **TC-068 / TC-070 / TC-074 assert ไม่ได้** — มี Security TC ครบตาม SKILL §7 แต่ไม่มีเกณฑ์ Pass/Fail → ถ้ารันต้องบันทึก **`Blocked`** ไม่ใช่ `Pass` · **Production gate = NO-GO** จนกว่าจะปิด |
| **CRITICAL-2** | **`plan.md` มี FR ที่ `spec.md` ไม่มีเลย** — `FR-010a` (`${var5}` = LINE_LINK) และ `FR-010c` (บังคับ mask `policy_no`); `plan.md` อ้างว่าข้อความจริงมี **5 ตัวแปร** และ `var4` = `grace_end_date` ขณะที่ `spec.md` FR-010/US3 ระบุ **3 ตัวแปร** (`${var1}`=`policy_no`, `${var2}`=`due_date`, `${var3}`=`grace_end_date`) | **ข้อความ SMS ที่จะส่งจริงยังไม่มีข้อยุติ** · **TC-013 ขัดกับ TC-075 โดยตรง** (เลขเต็ม vs `35xxx82`) — รันได้ทีละตัว · ถ้า plan ถูก → ต้อง **re-design TC ชุดแทนค่าตัวแปรใหม่ทั้งหมด** · `FR-010a` และ `${var4}` **ไม่มี TC โดยเจตนา** (trace กลับ spec ไม่ได้ = spec gap ไม่ใช่ coverage gap) |
| **CRITICAL-3** | **Interface นำส่งยังไม่มีข้อยุติ** — CSV (spec FR-009/FR-011/US3 P1) vs `sendSmsOtp` (plan) | **P1 User Story ทั้ง Story** อยู่ในข้อพิพาท · 11 TC ต้องถูกลบครึ่งหนึ่ง · ห้ามรันทั้งคู่ (ดู §Disputed Interface) |
| **CRITICAL-4** | **SC-001 (10,000 รายการ / 5 นาที) อาจเป็นไปไม่ได้ตามสถาปัตยกรรมที่ `plan.md` เลือก** — plan เขียนเองว่า "SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call synchronous (ไม่มี bulk)" + `spec.md` §Assumptions ให้ LINE API 5 วินาที/คำขอ → 10,000 lookups sequential ≈ **13.9 ชั่วโมง** vs เป้า **5 นาที**; plan ทิ้ง `[NEEDS CLARIFICATION]` ไว้เอง | **TC-064 / TC-065 / TC-066 คาดว่าจะ Fail** — ผลการวัดต้องส่งกลับให้ **SA ตัดสิน** (แก้ SC-001 หรือแก้สถาปัตยกรรม) **ไม่ใช่เปิดเป็น Defect ของ Dev ทันที** |

**ประเด็นรอง** (บันทึกไว้ ไม่ CRITICAL): `checklist.md` **G2** — endpoint `11.100.8.44` hardcode ใน FR-006 (→ TC-070) · **G3** — นิยาม "รอบ Due เดียวกัน" ต้อง cross-check FR-008 vs SC-003 vs Assumptions · **ชื่อ config ไม่ตรงกัน**: `spec.md` = `REMINDER_DAYS`/`CSMS_GP_7Days` vs `plan.md` = `DATE_COUNT`/`CSMS_SGP_GracePeriod` (→ `/speckit-analyze`)

---

## สรุปผลลัพธ์ของ design

| ตัวชี้วัด | ค่า |
|---|---|
| **Total TC** | **90** (+ `TC-030b` business_rule = **91 แถวใน CSV**) |
| **Coverage** | **FR 16/16 · SC 7/7 = 23/23 → 100%** |
| **CRITICAL coverage gaps** | 0 (ปิด 1 HIGH gap ใน iteration 1 → TC-090) |
| **มิติครบทั้ง 7** | Positive 21 · Negative/Validation 21 · Edge 19 · Concurrency 7 · Security 9 · Side-Effects 8 · UX/Usability 5 |
| **Priority** | P1 = 68 · P2 = 22 · P3 = 1 |
| **Risk bands** | P0 = 4 · P1 = 9 · P2 = 8 · P3 = 2 |
| **Test data records** | **96** (positive 22 · negative 20 · boundary 23 · business_rule 8 · e2e 7 · risk_based 16) — synthetic ทั้งหมด |
| **Execution status** | **ทุก TC = `Not Run`** (ไม่มีระบบให้รัน) |

### จุดเน้นของแคมเปญนี้ (ต่างจาก CSMS-001/002)

- **Date boundary = หัวใจ** → Edge 19 TC ครอบ ขอบเดือน · ขอบปี · leap day 29/02/2028 · ก.พ. 28 วันของปีปกติ · **พ.ศ. vs ค.ศ. (543 ปี — ชื่อไฟล์ใช้ พ.ศ. `69` แต่ data เป็น ค.ศ.)** · timezone (10:00 ไทย = 03:00 UTC) · `diff = 0` (หมดผ่อนผันวันนี้) · `diff < 0` (เลยผ่อนผันแล้ว) · time component · NULL/9999
- **Performance NFR มีจริง (ต่างจาก CSMS-001/002)** → SC-001 ได้ TC เฉพาะ **4 ตัว**: TC-059 (ขอบ 9999/10000/10001) · TC-064 (end-to-end 5 นาที) · TC-065 (LINE lookup throughput) · TC-066 (`sendSmsOtp` throughput, `@api-path`) — แยกขั้นตอนเพื่อชี้ว่า **ขั้นไหน** ทำให้เกิน 5 นาที (จำเป็นต่อ RCA)
- **Business rule ที่ขัดสัญชาตญาณ** → **TC-030b**: `E00` + `isBlockLine=true` → **SEND** (ไม่ suppress) ยืนยันโดย SA (`plan.md` R-004, ปิด 2026-07-14) — เหตุผล: ลูกค้าบล็อก LINE OA จึงรับแจ้งเตือนทาง LINE ไม่ได้ · **`spec.md` FR-007 ไม่ได้เขียน explicit** (เขียนแค่ "E00 และ isBlockLine=false → คัดออก") → ถ้า implement ตีความหลวมว่า "E00 = ลงทะเบียนแล้ว = คัดออก" จะ suppress ผิด → TC-030b คือ gate
- **LINE ช่องทางเดียว** (TC-009) — ต่างจาก Welcome campaigns ที่เช็ค LINE+APP
- **dedup รายกรมธรรม์** `policy_no`+`due_date` (TC-012/034/054/055) — ต่างจาก CSMS-001/002 ที่ dedup รายลูกค้า

---

## Next Actions

1. **SA/PO — ตัดสิน CRITICAL-3**: CSV (spec FR-009/FR-011/US3 P1) **หรือ** `sendSmsOtp` (plan) → ลบ TC ชุดที่แพ้ → re-run `/speckit-qa coverage` (iteration 3)
2. **SA/PO — ตัดสิน CRITICAL-2**: ข้อความ 3 ตัวแปร (spec) **หรือ** 5 ตัวแปร + mask `policy_no` (plan FR-010a/FR-010c) → เลือกระหว่าง TC-013 กับ TC-075 → ถ้า plan ชนะต้องขอ **ตารางผลลัพธ์ masked ของ IND/PA/GOV** ที่ยังไม่มีในเอกสารใด
3. **SA/DPO — ปิด CRITICAL-1**: เพิ่ม security/PII NFR (masking / retention / RBAC / encryption in transit) เพื่อให้ TC-068/070/074 assert ได้ — `/speckit-specify`
4. **SA — ปิด CRITICAL-4**: วัด throughput จริงจาก CSMS-001/002 ก่อน implement (ตามที่ `plan.md` เสนอเอง) แล้วตัดสินว่าจะแก้ SC-001 หรือแก้สถาปัตยกรรม
5. **ถ้าหาเอกสารต้นทางเจอ** → `/speckit-qa crosscheck <path>` เพื่อปลด block step 00 (อาจตัดจบข้อพิพาท CSV vs API ได้ทันที)
6. **ข้อขัดแย้งระหว่าง artifact** (CSV vs API, 3 vs 5 ตัวแปร, ชื่อ config) → `/speckit-analyze` · **คุณภาพถ้อยคำ requirement** (G2, G3, validation เบอร์, พฤติกรรมเมื่อเกิน 10,000, ขอบเขต "เข้าขั้นตอนส่ง", FR-013 ครอบ "รอบไม่เคยเริ่ม" หรือไม่) → `/speckit-checklist`
7. **หลัง implement เสร็จ** → `/speckit-qa execute` (ต้องมี running app + reachable environment ซึ่งยังไม่มีบนเครื่องนี้)

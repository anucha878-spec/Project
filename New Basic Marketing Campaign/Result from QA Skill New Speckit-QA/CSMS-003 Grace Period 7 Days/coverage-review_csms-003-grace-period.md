---
id: csms-003-grace-period
phase: qa
sub-phase: coverage-review
run-date: 2026-07-17
iteration: 2
verdict: covered
---

# Coverage Review — CSMS-003 "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"

**Audit-only**: mode นี้ตรวจ `test-cases_csms-003-grace-period.csv` + `test-scenarios_csms-003-grace-period.md` เทียบกับ FR/SC spine — **ไม่เขียน/ไม่แก้ TC เอง** เมื่อพบช่องว่างจะส่งกลับไป `design`

**ประวัติ iteration**

| Iteration | ผลตรวจ | การดำเนินการ |
|---|---|---|
| 1 | `gaps-found` — พบ **1 Gap (HIGH)**: Edge Case ของ `spec.md` ข้อ "รอบที่ batch ไม่ได้ scheduled (วันหยุด)" ไม่มี TC ครอบคลุม | loop back → `design` เพิ่ม **TC-090** |
| 2 | **`covered`** — ไม่มี Gap เหลือ / negative + edge ครบตาม catalog | → ไปต่อที่ `test-data` |

---

## Pass 1 — Gap (FR/SC ที่มีศูนย์ TC)

### Iteration 1 (ปิดแล้ว)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|---|---|---|---|---|
| **FR-001 / FR-014** (ผ่าน `spec.md` §Edge Cases) | "`grace_end_date` ตรงกับวันที่ batch ไม่ได้ scheduled (เช่น วันหยุด) → กลุ่มที่พลาดรอบซ่อมผ่าน Manual Fix" | — (none) | **HIGH** | Edge Case ที่ spec เขียนไว้ชัดแต่ไม่มี TC — ไม่ใช่ CRITICAL เพราะ FR-001/FR-014 เองมี TC อยู่แล้ว แต่ **พฤติกรรมเฉพาะนี้** (กลุ่มที่พลาดจะ "หายเงียบ" เพราะวันถัดไป diff = 6 ไม่ใช่ 7) ไม่มีอะไรตรวจ → **ปิดด้วย TC-090** ✅ |

### Iteration 2 (รอบปัจจุบัน)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|---|---|---|---|---|
| — | — | — | — | **ไม่พบ Gap** — FR ทั้ง 16 ข้อ และ SC ทั้ง 7 ข้อ มี ≥1 TC |

**ตรวจ Edge Cases ของ `spec.md` ครบทั้ง 7 ข้อ**

| Edge Case (spec.md) | TC |
|---|---|
| `grace_end_date` ถูกปรับหลัง batch ส่งไปแล้ว → ยึดผล ณ เวลาประมวลผล | TC-084 ✅ |
| LINE API ล่มทั้งระบบ → retry ≤3 → หยุดรอบ + email | TC-041 ✅ |
| สร้างไฟล์ CSV ไม่สำเร็จ → ล้มระดับรอบ + email + Manual Fix | TC-036 ✅ *(`@disputed @csv-path`)* |
| SMS Gateway ตอบ `refer_no` ผิดรูปแบบ → `'F'` | TC-035 ✅ |
| `grace_end_date` ตรงกับวันที่ batch ไม่ได้ scheduled (วันหยุด) | **TC-090** ✅ *(เพิ่ม iteration 2)* |
| `mobile1` + `mobile2` ว่างทั้งคู่ → skip + `'F'` | TC-024 ✅ |
| หา `cardNo` ไม่พบ → skip + `'F'` | TC-029 ✅ |

**ตรวจ constitution MUST-principle (SKILL §7)**

| Principle | มี Security-dimension TC? | สถานะ |
|---|---|---|
| I. PDPA-First (cardNo + mobile) | TC-069, TC-070, TC-071, TC-068 | ✅ มี TC — **แต่ยังไม่มี NFR ให้ assert** → ไม่ใช่ coverage gap แต่เป็น **CRITICAL-1** (spec gap) |
| II. Secure SMS Delivery (`policy_no` ในเนื้อความ) | TC-075 (`@disputed @plan-only`) | ⚠️ มี TC — แต่ FR-010c ที่มันอิงอยู่ **ไม่มีใน `spec.md`** → **CRITICAL-2** |
| III. RBAC / Separation of Duties | TC-073 | ✅ |
| IV. Audit Trail | TC-068, TC-077, TC-083 | ✅ |

> **ข้อสังเกตสำคัญ**: constitution gate **ผ่านในเชิง coverage** (ทุก MUST-principle มี Security TC ตาม SKILL §7) แต่ **ไม่ผ่านในเชิง executability** — TC-068/070/074 ไม่มีเกณฑ์ Pass/Fail เพราะ `checklist.md` G1 ยังเปิดค้าง นี่คือ **CRITICAL-1** ที่ต้องปิดก่อน report จะประกาศ "verified" ได้ (ดู `test-scenarios` §CRITICAL Findings)

---

## Pass 2 — Overlap (TC ที่ทับซ้อน)

| TCs | เงื่อนไขที่ assert ซ้ำ | คำแนะนำ |
|---|---|---|
| **TC-013 ↔ TC-075** | ทั้งคู่ assert ค่าของ `${var1}` ในข้อความ SMS | ⚠️ **ไม่ใช่ overlap ธรรมดา — เป็น CONTRADICTION**: TC-013 คาด `3556782` (เลขเต็ม ตาม spec FR-010) / TC-075 คาด `35xxx82` (masked ตาม plan FR-010c) → **ต้องลบทิ้งหนึ่งตัวเมื่อ SA/PO ตัดสิน** ห้าม merge (CRITICAL-2) |
| **TC-013 ↔ TC-017 ↔ TC-020** | การแทนค่า `${var1}`–`${var3}` | ไม่ใช่ overlap จริง — TC-013 ตรวจที่ **ตัวข้อความที่สร้าง** (Unit), TC-017 ตรวจที่ **แถวใน CSV** (`@csv-path`), TC-020 ตรวจที่ **payload ของ sendSmsOtp** (`@api-path`) → คนละ sink คนละ level; และ TC-017/TC-020 จะเหลือแค่ตัวเดียวหลังคำตัดสิน **ไม่ต้องแก้** |
| **TC-018 ↔ TC-021** | `refer_no` + SC-002 (99%) | คนละ path (`@csv-path` vs `@api-path`) — จะเหลือตัวเดียวหลังคำตัดสิน **ไม่ต้องแก้** |
| **TC-064 ↔ TC-065 ↔ TC-066** | SC-001 (5 นาที) | ไม่ใช่ overlap — TC-064 = end-to-end ทั้งรอบ, TC-065 = throughput ของ **ขั้น LINE lookup**, TC-066 = throughput ของ **ขั้นส่ง** (`@api-path`) → แยกกันเพื่อชี้ว่า **ขั้นไหน** ทำให้เกิน 5 นาที (จำเป็นต่อ RCA) **ไม่ต้องแก้** |
| **TC-034 ↔ TC-054 ↔ TC-055** | dedup key | ไม่ใช่ overlap — TC-034 = key ตรงกัน (block), TC-054 = `due_date` ต่าง (ไม่ block), TC-055 = `policy_no` ต่าง (ไม่ block) → เป็นการ **ตรึงขอบเขตของ key ทั้ง 3 ด้าน** ซึ่งจำเป็นเพราะ key นี้ **ต่างจาก CSMS-001/002** **ไม่ต้องแก้** |
| **TC-061 ↔ TC-067** | Manual Fix + ไม่ส่งซ้ำ | TC-061 = daily ชน Manual Fix / TC-067 = Manual Fix ชน Manual Fix → คนละ scenario **ไม่ต้องแก้** |
| **TC-030 ↔ TC-030b** | ผลตรวจ `E00` | **ตั้งใจให้คู่กัน** — assert คนละค่า `isBlockLine` (false → ไม่ส่ง / true → ส่ง) เป็น business_rule gate **ไม่ต้องแก้** |

**สรุป Pass 2**: ไม่มี overlap ที่ต้อง merge — มี **1 contradiction (TC-013 ↔ TC-075)** ซึ่งเป็นผลจากเอกสารขัดกัน ไม่ใช่ความซ้ำซ้อนของการออกแบบเทส (informational เท่านั้น — coverage ไม่ลบ TC เอง)

---

## Pass 3 — Missing Negative/Edge (เทียบ `templates/negative-input-catalog.md`)

| FR / Field | ชนิด field | แถว adversarial ที่ต้องมี | สถานะ |
|---|---|---|---|
| **FR-003** `grace_end_date` / `current_date` | **date** | §C: min/max boundary · start==end · past date · far-future (9999) · reversed | ✅ **ครบและเกินมาตรฐาน** — TC-043 (เดือน), TC-044 (ปี), TC-045 (leap), TC-046 (non-leap), TC-047 (**พ.ศ. vs ค.ศ.** — นอกเหนือ catalog), TC-048 (diff=0 = start==end), TC-049 (past), TC-050 (**timezone** — นอกเหนือ catalog), TC-051 (time component), TC-052 (NULL / 0000-00-00 / 9999 / 1900) |
| **FR-003** `cf_catalog` config | **numeric** | §C: min/max · min-1/max+1 · invalid | ✅ TC-039 (ไม่พบ→default), TC-040 (`'abc'` / `0` / `-1` / `9999` / ว่าง) |
| **FR-004a** `mobile1` / `mobile2` | **phone (free-text)** | §B: empty/whitespace · length · unicode/control · format | ✅ TC-024 (ว่าง/NULL/whitespace), TC-025 (ตัวอักษร / สั้น / ยาว / `+66` / dash / space / null byte) |
| **FR-010** `policy_no` (แทนค่าตัวแปร) | **free-text** | §B: max/max+1 · long-value rendering · metachar · XSS · unicode · null byte | ✅ TC-057 (leading zero / ยาวผิดปกติ / มีตัวอักษร), TC-072 (`'` / `%` / `_` / `'; DROP TABLE` / `${var1}` / `<script>` / **CSV formula injection** / null byte / NBSP-RTL) |
| **FR-010** `due_date` / `grace_end_date` (rendering) | **date** | §C: format · zero-pad | ✅ TC-056 (zero-pad DD/MM/YYYY), TC-047 (era) |
| **FR-002 / FR-014** date param, config | **date / free-text → SQL** | §A: SQL injection (แยกจาก wildcard) | ✅ TC-076 (`'; DROP TABLE--` / `' OR '1'='1` / `UNION SELECT` / `%`) — **แยก severity ชัด**: wildcard escaping (Minor) ≠ SQL injection (Critical) ตาม catalog §A |
| **FR-007** LINE response | **enum + boolean** | §C: permitted values · นอกเหนือ enum · ว่าง | ✅ TC-011 (E02), TC-030 (E00+false), TC-030b (E00+true), TC-031 (E13), TC-032 (ว่าง), TC-033 (E99 / body ว่าง / JSON ผิดโครง) |
| **FR-012** `refer_no` | **free-text** | §B: ว่าง · length · metachar | ✅ TC-035 (ว่าง / NULL / `!!!` / `<script>` / ยาวเกิน field) |
| **FR-014** Manual Fix date input | **date (UI)** | §C: past/future · reversed · invalid · §D: feedback | ✅ TC-087 (อนาคต / `19/05/2569` ผิดรูปแบบ / `abc` / ว่าง / `1900-01-01`) |
| **FR-012 / FR-014** admin UI | **§D state/flow** | sticky filter · empty state · post-action feedback · destructive confirm · double-submit | ✅ TC-085 (feedback), TC-088 (empty state / long value / 10000 แถว), TC-089 (confirm + double-submit) |
| **FR-005** `remark_code` | **enum** | permitted values · cross-mapping | ✅ TC-026, TC-027, TC-028 (cross-mapping), TC-058 (หลายรหัส) |

### มิติที่ขาดหรือถูกยกเว้น (ต้องมีคำอธิบาย 1 บรรทัด — SKILL §4)

| มิติ | สถานะ |
|---|---|
| Positive · Negative/Validation · Edge · Concurrency · Security · Side-Effects · UX/Usability | ✅ **ครบทั้ง 7** — ไม่มีมิติใดถูกยกเว้นทั้งมิติ |
| *(sub-area)* WCAG AA / mobile-responsive | ⚠️ ยกเว้นเฉพาะ sub-area พร้อมเหตุผล: `spec.md` §ขอบเขต ระบุ "นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard" — ใช้หน้าเดิม เพียงเพิ่ม batch เข้า list → **ถูกต้องตาม SKILL §4** (ยกเว้น sub-area ได้ ห้าม blanket-exclude ทั้งมิติ) |

### ประเด็นที่ route ออกนอก QA (ไม่นับเป็น gap ของ coverage)

| ประเด็น | ปลายทาง |
|---|---|
| **CSV vs `sendSmsOtp`** — spec FR-009/FR-011/US3(P1) ขัดกับ plan §Constraints | `/speckit-analyze` (ความสอดคล้องระหว่าง artifact) → SA/PO ตัดสิน → `/speckit-specify` แก้ spec |
| **3 ตัวแปร vs 5 ตัวแปร + FR-010a/FR-010c** — ไม่มีใน spec | `/speckit-analyze` → `/speckit-specify` |
| **ไม่มี security/PII NFR** (`checklist.md` G1) | `/speckit-specify` (SA/DPO เพิ่ม NFR) |
| **endpoint `11.100.8.44` hardcode** (`checklist.md` G2) | `/speckit-checklist` (คุณภาพ requirement) |
| **นิยาม "รอบ Due เดียวกัน"** cross-check FR-008 vs SC-003 vs Assumptions (`checklist.md` G3) | `/speckit-checklist` |
| **ชื่อ config ไม่ตรง**: spec `REMINDER_DAYS`/`CSMS_GP_7Days` vs plan `DATE_COUNT`/`CSMS_SGP_GracePeriod` | `/speckit-analyze` |
| **พฤติกรรมเมื่อเกิน 10000 รายการ** ยังไม่นิยาม (SC-001 บอกแค่ "สูงสุด") | `/speckit-checklist` |
| **ขอบเขต "เข้าขั้นตอนส่ง/ถูก skip"** ใน FR-012 กำกวม | `/speckit-checklist` |
| **FR-013 ครอบกรณี "รอบไม่เคยเริ่มเลย" หรือไม่** (พบจาก TC-090) | `/speckit-checklist` |
| **รูปแบบ validation เบอร์มือถือ** ไม่มีใน spec | `/speckit-checklist` |

---

## Verdict

### ✅ **`covered`** (iteration 2)

- **Pass 1 Gap**: 0 — FR 16/16 และ SC 7/7 มี ≥1 TC; Edge Cases ของ spec ครบ 7/7; constitution MUST-principle มี Security TC ครบ
- **Pass 2 Overlap**: ไม่มีรายการที่ต้อง merge (พบ 1 contradiction ที่รอคำตัดสิน — informational)
- **Pass 3 Negative/Edge**: ครบตาม `negative-input-catalog` ทุก field ประเภท free-text / numeric / date / phone / enum; 7 มิติครบ

→ **ไปต่อที่ `/speckit-qa test-data`**

### ⚠️ เงื่อนไขกำกับ verdict (verdict นี้พูดถึง *ความครบของการออกแบบ* เท่านั้น)

`covered` **ไม่ได้แปลว่าพร้อมรัน SIT** — ชุดนี้ยัง **ไม่ SIT-ready** ด้วยเหตุนอกขอบเขตของ coverage gate:

1. **12 TC อยู่ในข้อพิพาท** (6 `@csv-path` + 5 `@api-path` + 1 `@plan-only`) — **ต้องลบทิ้งอย่างน้อย 5–6 ตัว** เมื่อ SA/PO ตัดสิน แล้ว **re-run `coverage` (iteration 3)** เพราะการลบชุดใดชุดหนึ่งจะทำให้ **FR-009 หรือ FR-011 กลายเป็น Gap จริง** ทันที:
   - ถ้า **API path ชนะ** → **FR-009 จะเหลือ 0 TC** → นั่นไม่ใช่ coverage gap ที่ QA ต้องปิด แต่แปลว่า **FR-009 ต้องถูกถอนออกจาก spec** (งานของ SA) — ถ้า FR-009 ยังอยู่ใน spec แต่ไม่มี TC = **CRITICAL Gap จริง**
   - ถ้า **CSV path ชนะ** → `plan.md` §Constraints/§Summary ต้องถูกรื้อ และ TC-066 (throughput) หายไป → SC-001 ต้องประเมินใหม่
2. **TC-068 / TC-070 / TC-074 ยัง assert ไม่ได้** — ไม่มี security/PII NFR (CRITICAL-1) → ถ้ารันต้องบันทึก `Blocked` ไม่ใช่ `Pass`
3. **TC-013 ↔ TC-075 ขัดกันโดยตรง** — รันทั้งคู่ไม่ได้

---

## Coverage Summary

| ตัวชี้วัด | ค่า |
|---|---|
| Total FR | 16 |
| Total SC | 7 |
| **Total FR + SC** | **23** |
| มี ≥1 TC | **23** |
| **Coverage %** | **100%** |
| **CRITICAL gaps** | **0** (coverage) — *แต่มี **4 CRITICAL findings** จาก `design` ที่ไม่ใช่ coverage gap: ดู `test-scenarios` §CRITICAL Findings* |
| HIGH gaps | 0 (ปิดแล้ว 1 ใน iteration 1 → TC-090) |
| Total TC | **90** (+ `TC-030b` = **91 แถวใน CSV**) |
| TC ที่ disputed | **12** (6 `@csv-path` · 5 `@api-path` · 1 `@plan-only`) |
| Spec-side requirement ที่ไม่มี TC โดยเจตนา | **FR-010a**, **`${var4}`** (มีเฉพาะใน `plan.md` — trace กลับ `spec.md` ไม่ได้ → spec gap ไม่ใช่ coverage gap) |
| Iteration | **2** (1 = `gaps-found` → 2 = `covered`) |

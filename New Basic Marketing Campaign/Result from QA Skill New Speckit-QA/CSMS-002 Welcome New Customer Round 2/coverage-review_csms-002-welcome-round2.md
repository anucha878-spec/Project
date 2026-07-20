---
id: csms-002-welcome-round2
phase: qa
sub-phase: coverage-review
run-date: 2026-07-17
iteration: 2
verdict: covered
total-fr: 26
fr-with-tc: 26
coverage-pct: 100
critical-gaps: 0
---

# Coverage Review — CSMS-002 Welcome New Customer (Ocean Club) รอบ 2

**AUDIT ONLY** — mode นี้ตรวจสอบ `test-cases_*.csv` + `test-scenarios_*.md` เทียบกับ FR/SC spine
**ไม่เขียน/ไม่แก้ TC ใดๆ** — เมื่อพบช่องว่างจะส่งกลับไป `design` และ bump iteration

## ประวัติการวนรอบ (loop history)

| Iteration | Verdict | สิ่งที่พบ | การดำเนินการ |
|-----------|---------|-----------|---------------|
| **1** | `gaps-found` | FR-019 ระบุ trigger ความล้มเหลวระดับรอบไว้ **5 กรณี** แต่การออกแบบคลุมเพียง **3 กรณี** — ขาด "ช่องทางนำส่งล่ม" และ "แหล่งข้อมูลผิดพลาด" | ส่งกลับ `design` → เพิ่ม **TC-093**, **TC-094** (92 → 94 TC) |
| **2** | **`covered`** | ไม่พบ Gap; negative/edge ครบตาม catalog; 7 มิติครบ | → พร้อมเข้า `test-data` |

---

## Pass 1 — Gap (FR/SC ที่ไม่มี TC เลย)

### Iteration 1 — พบ Gap 2 รายการ (ปิดแล้วใน iteration 2)

| FR/SC | Requirement (short) | Mapped TC (iter. 1) | Severity | Note |
|-------|--------------------|--------------------|----------|------|
| FR-019 (trigger 2) | "ช่องทางนำส่งล่ม" → หยุดรอบ + email แจ้งเตือน | — (none) | **HIGH** | FR-019 (spec.md:161) ระบุ trigger ไว้ 5 กรณี: (1) สกัดข้อมูล/สร้างไฟล์ไม่ได้ (2) **ช่องทางนำส่งล่ม** (3) **แหล่งข้อมูลผิดพลาด** (4) บริการตรวจสอบสถานะล่ม (5) ไม่มี config Active — การออกแบบรอบแรกคลุมเฉพาะ (1) ผ่าน TC-032/TC-086, (4) ผ่าน TC-038, (5) ผ่าน TC-037 → **(2) ไม่มี TC** |
| FR-019 (trigger 3) | "แหล่งข้อมูลผิดพลาด" → หยุดรอบ + email แจ้งเตือน | — (none) | **HIGH** | trigger (3) ไม่มี TC — TC-045 คลุมเฉพาะ **ข้อมูลผิดรูปรายแถว** (ไม่หยุดรอบ) ซึ่งเป็นคนละกรณีกับ **datasource ทั้งตัวไม่พร้อมใช้** (หยุดรอบ) |

**เหตุผลที่จัด HIGH ไม่ใช่ CRITICAL**: ทั้งสองเป็นกลไก **ความน่าเชื่อถือ/การรับรู้ปัญหา** (US2, P2) ไม่ใช่ core business rule
หรือ data-integrity โดยตรง — แต่ยังคงเป็น Gap จริงที่ต้องปิดก่อนผ่านกด `covered` เพราะ US2 ทั้ง story ตั้งอยู่บน
สมมติฐานว่า "ความล้มเหลวระดับรอบทุกกรณีมี email" (SC-005 ใช้คำว่า **ทุกกรณี**) — การคลุมแค่ 3 ใน 5 จึงไม่พอ

### Iteration 2 — ไม่พบ Gap

| หน่วยวัด | ค่า |
|----------|-----|
| FR ทั้งหมด | **26** |
| FR ที่มี TC ≥ 1 | **26** |
| **Gap** | **0** |
| SC ทั้งหมด | **7** |
| SC ที่มี TC ≥ 1 | **7** |
| **Gap** | **0** |
| CRITICAL gaps | **0** |

**FR-019 หลังปิด Gap** — trigger ครบทั้ง 5:

| Trigger (spec.md:161) | TC ที่คลุม |
|----------------------|-----------|
| 1. สกัดข้อมูล/สร้างไฟล์ไม่ได้ | TC-032 · TC-086 *(@csv-path)* |
| 2. ช่องทางนำส่งล่ม | **TC-093** ✅ *(เพิ่ม iter. 2)* |
| 3. แหล่งข้อมูลผิดพลาด | **TC-094** ✅ *(เพิ่ม iter. 2)* |
| 4. บริการตรวจสอบสถานะล่ม | TC-038 |
| 5. ไม่มี config Active | TC-037 · TC-044 |
| + เนื้อหา/รูปแบบ email | TC-042 · TC-068 · TC-079 |

### หมายเหตุสำคัญ — FR-017 มี TC แต่ยัง "ปิดไม่ได้จริง"

FR-017 มี TC ถึง **11 รายการ** จึงไม่นับเป็น Gap ในเชิงกลไก **แต่ coverage นี้ไม่ได้แปลว่า requirement ถูกยืนยัน**:
TC ทั้ง 11 แบ่งเป็นสองชุดที่ **ขัดแย้งกันโดยนิยาม** (CSV 6 · API 5) และ **ต้องลบชุดหนึ่งทิ้ง** หลัง SA/PO ตัดสิน
→ coverage ที่แท้จริงของ FR-017 ณ วันนี้คือ **"ยังไม่ทราบว่าข้อกำหนดคืออะไร"** ไม่ใช่ "คลุมครบ 2 เท่า"
**นี่คือข้อจำกัดของ verdict `covered` ที่ผู้อ่านต้องรับทราบ** (ดู CF-001 ใน `test-scenarios_*.md`)

---

## Pass 2 — Overlap (TC ที่ทับซ้อนกัน)

*ให้ข้อมูลเท่านั้น — ไม่ลบ TC ใดโดยอัตโนมัติ*

| TCs | เงื่อนไขที่ assert ซ้ำกัน | ข้อเสนอ |
|-----|--------------------------|---------|
| **TC-083 ⟷ TC-092** | การมี/ไม่มีอยู่ของไฟล์ CSV | **ห้าม merge** — เป็นการทับซ้อนแบบ *ตรงข้าม* โดยเจตนา (ถ้าอันหนึ่ง Pass อีกอันต้อง Fail) เป็นผลจาก CF-001 ที่ยังไม่ยุติ; **ต้องลบชุดหนึ่งหลังคำตัดสิน** ไม่ใช่รวมกัน |
| **TC-076 ⟷ TC-089** | การบันทึก `refer_no` + สถานะการส่ง | **เก็บทั้งคู่** — TC-076 assert ข้อกำหนด FR-018 แบบ **channel-agnostic** (ต้องมี refer_no ไม่ว่านำส่งทางใด); TC-089 assert **กลไก per-call HTTP** เฉพาะ @api-path (800 call → 800 refer_no ไม่สลับ) → ถ้าตัดสินเป็น CSV path, TC-089 ถูกลบแต่ TC-076 ยังต้องคงอยู่ |
| **TC-010 ⟷ TC-058** | การใช้เบอร์ปัจจุบันแทนเบอร์รอบแรก | **เก็บทั้งคู่** — TC-010 assert *การเลือกเบอร์* (FR-005); TC-058 assert *ผลข้างเคียงครบวงจร* (บันทึกเบอร์ที่ส่งจริง + FK ยังถูกต้อง) ซึ่งเป็น Edge case ที่ระบุใน spec แยกต่างหาก |
| **TC-019 ⟷ TC-028 ⟷ TC-059/060/061** | การไม่ส่งซ้ำ | **เก็บทั้งหมด** — แต่ละอันทดสอบ *เส้นทางที่ต่างกัน*: ข้ามรอบ (019) / Manual Fix (028) / concurrency 3 แบบ (059-061) ซึ่ง SC-002 กำหนดว่าต้อง = 0 **ทั้งภายในรอบ ข้ามรอบ และจาก Manual Fix** |
| **TC-037 ⟷ TC-044** | ไม่มี config Active → หยุดรอบ | **เก็บทั้งคู่** — TC-037 = ไม่มี config เลย; TC-044 = มี row แต่สถานะ Inactive (คนละ failure mode: missing vs inactive) |
| **TC-052 ⟷ TC-003** | การเลือกตามจำนวนวัน | **เก็บทั้งคู่** — TC-003 = happy path; TC-052 = ขอบเขต 19/20/21 (Scenario Outline) |

**ไม่พบ overlap ที่ควรลบ** — ทุกคู่ที่ทับซ้อนมีเหตุผลรองรับหรือเป็นผลจากข้อขัดแย้งที่ยังไม่ยุติ

---

## Pass 3 — Missing Negative/Edge

ตรวจทุก field ที่เป็น free-text / search / numeric / date / phone เทียบกับ `templates/negative-input-catalog.md`

| FR/Field | ประเภท field | catalog rows ที่ applicable | สถานะ |
|----------|-------------|----------------------------|-------|
| **FR-015 ชื่อผู้เอาประกัน (${var1})** | free-text | §B: max/max+1, whitespace/empty, null byte/control, `<script>`/XSS, emoji/RTL/NBSP/homoglyph, long-value rendering | ✅ **ครบ** — TC-046 (metachar/XSS/unicode/RTL/NBSP + template injection `${var2}`), TC-047 (1/100/255/256), TC-036 (empty → skip) |
| **FR-005 เบอร์โทรศัพท์** | numeric/format | §B: length boundary, null byte, whitespace · §C: format validation | ✅ **ครบ** — TC-048 (สั้น/ยาว/ไม่ใช่ตัวเลข/`+66`/ขีด/ช่องว่าง/null byte), TC-040 (ว่างทั้งคู่) |
| **FR-003 ค่า N (DATE_COUNT)** | numeric | §C: min/min-1/max/max+1, ค่าติดลบ, non-numeric, far-future | ✅ **ครบ** — TC-049 (0/-1/abc/9999), TC-052 (ขอบเขต N−1/N/N+1) |
| **FR-020.2 ช่วงวันที่ Manual Fix** | date range | §C: reversed range, start==end, past/far-future, adjacent boundary | ✅ **ครบ** — TC-050 (end<start / start==end / 9999 / ช่วงกว้างมาก) |
| **FR-002 / FR-007 policy_no** | text → SQL | §A: LIKE `%`/`_` เป็น literal, SQL injection (แยกจากกัน) | ✅ **ครบ** — TC-067 ครอบคลุมทั้ง injection (`'; DROP TABLE--`, `%' OR '1'='1`) **และ** wildcard-as-literal (`P00%0001`, `P0000_01`) พร้อมระบุความต่างของ severity ไว้ชัดเจน |
| **FR-002 ข้อมูลจากรอบแรก** | text | §B: empty/null fields | ✅ **ครบ** — TC-045 (policy_no/type/mobile ว่าง, sms_sent_date NULL) |
| **FR-017 เนื้อหาไฟล์ CSV** *(@csv-path)* | free-text → file | §B: comma/quote/newline escape, unicode encoding | ✅ **ครบ** — TC-087 (comma/quote/newline/emoji/ไทย UTF-8) |
| **§D State/flow/feedback** | UX | sticky filter, empty state, loading, post-action feedback, double-submit, destructive confirm | ✅ **ครบ** — TC-080 (feedback/empty state/loading/double-submit), TC-081 (long value rendering), TC-079 (email actionable), TC-082 (รายงานอ่านออก) |

### การตรวจ 7 มิติ

| Dimension | Count | สถานะ |
|-----------|-------|-------|
| Positive | 37 | ✅ |
| Negative/Validation | 22 | ✅ |
| Edge | 10 | ✅ |
| Concurrency | 4 | ✅ |
| Security | 9 | ✅ |
| Side-Effects | 8 | ✅ |
| UX/Usability | 4 | ✅ **ไม่ถูกตัดทิ้ง** — map ไป admin surface จริง (email / Manual Fix / รายงาน) ตาม justification ที่ระบุใน `test-scenarios_*.md` |

**ครบทั้ง 7 มิติ — ไม่มีมิติใดถูก blanket-exclude**
การตัดเฉพาะเจาะจงที่มี justification: **WCAG AA** และ **mobile/responsive** เท่านั้น (internal admin tool เดิม, `spec.md`:33 ระบุนอก scope)
— ตรงตามกฎ §4 "exclude only a *specific* sub-area, never the whole dimension"

### ช่องว่างที่ **ไม่ใช่** ความผิดของ QA design (route ออกไปแล้ว)

| รายการ | เหตุผลที่ TC assert ไม่ได้ | ปลายทาง |
|--------|---------------------------|---------|
| TC-043 (fallback template ล้มเหลว) | `spec.md` ไม่ได้นิยามพฤติกรรม | `/speckit-checklist` |
| TC-048 (validation รูปแบบเบอร์) | `spec.md` ไม่มีกฎรูปแบบเบอร์ | `/speckit-checklist` |
| TC-049 (validate ค่า N) | `spec.md` ไม่มีกฎ validate config | `/speckit-checklist` |
| TC-094 (retry สำหรับ datasource?) | FR-012 กำหนด retry เฉพาะ "บริการตรวจสอบสถานะ" — ไม่ระบุว่า datasource ควร retry หรือไม่ | `/speckit-checklist` |
| TC-091 (throughput) | ไม่มี performance NFR (CF-005) | **SA** |
| TC-021/TC-078 (รหัส template) | เอกสารขัดแย้ง '111' vs `114` (CF-004) | `/speckit-analyze` |
| TC-071/083…092 (FR-017) | เอกสารขัดแย้ง + `plan.md` อ้าง spec edit ที่ไม่เกิด (CF-001) | **SA/PO** |
| TC-056/TC-057 (รหัสประเภท / GOV schema) | CF-006, CF-007 ค้าง [NEEDS DBA VERIFICATION] | **DBA** |

> TC เหล่านี้ **ถูกออกแบบไว้แล้วครบ** — ที่ขาดคือ *ข้อกำหนดที่จะใช้ตัดสิน Pass/Fail* ไม่ใช่ตัว test case
> `coverage` จึงไม่ถือเป็น Gap ของ design แต่บันทึกไว้เป็นเงื่อนไขที่ต้องปลดล็อกก่อน `execute`

---

## Verdict

### ✅ `covered` — พร้อมเข้า `/speckit-qa test-data`

- **Pass 1 (Gap)**: 0 gap — FR 26/26, SC 7/7 (**หลังปิด 2 gap ของ FR-019 ใน iteration 2**)
- **Pass 2 (Overlap)**: ไม่พบ overlap ที่ควรลบ; ความทับซ้อน TC-083⟷TC-092 เป็นผลจาก CF-001 โดยเจตนา
- **Pass 3 (Missing negative/edge)**: negative/edge จาก catalog ครบทุก field; 7 มิติครบ

### ⚠️ เงื่อนไขที่แนบมากับ verdict นี้ (ต้องอ่านคู่กัน)

`covered` ในที่นี้หมายถึง **"ชุดทดสอบคลุมข้อกำหนดที่เขียนไว้ครบแล้ว"** — **ไม่ได้** หมายความว่า feature พร้อมทดสอบ:

1. **🔴 FR-017 ยังไม่มีข้อกำหนดที่ยุติ** (CF-001) — 11 TC ค้างเป็น disputed; **ห้ามรันทั้งสองชุด**;
   ต้องลบ 1 ชุดหลัง SA/PO ตัดสิน → **feature นี้ยังไม่พร้อมเข้า SIT**
2. **🔴 Constitution/PDPA gate ยังไม่ผ่าน** (CF-002) — `spec.md` ไม่มี security/PII NFR ทั้งที่จัดการ
   **cardNo = เลขประจำตัวประชาชน**; QA คลุมด้วย Security TC 9 รายการตาม SKILL §7 แล้ว **แต่ตาม §7
   QA ปฏิเสธที่จะประกาศ feature นี้ว่า "verified"** จนกว่า SA + DPO จะเพิ่ม NFR
3. **🟠 TC-030/TC-082 ผูกกับ FR-020.2 ชั่วคราว** (CF-003) — ต้อง re-map เมื่อ SA แยก FR ของรายงานออกมา
4. **🟡 TC-056, TC-057 blocked ที่ DBA** (CF-006, CF-007) — รันได้แต่ผลไม่มีความหมายจนกว่า data contract ยืนยัน

## Coverage Summary

**Total FR/SC: 33 (26 FR + 7 SC) · with ≥1 TC: 33 · coverage %: 100% · CRITICAL gaps: 0 · Total TC: 94**

**Next**: `/speckit-qa test-data` — สร้าง synthetic dataset ผูกกับ TC-###/FR-### (ห้ามใช้ PII จริง)

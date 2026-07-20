---
id: csms-001-welcome-line
phase: qa
sub-phase: coverage-review
run-date: 2026-07-17
iteration: 1
verdict: covered
---

# Coverage Review — CSMS-001 Welcome New Customer (LINE)

**Mode**: `coverage` — **audit-only gate** · ตรวจ `test-cases_csms-001-welcome-line.csv` (88 TCs) + `test-scenarios_csms-001-welcome-line.md` เทียบกับ FR/SC spine ของ `spec.md`
**กฎ**: mode นี้ **ไม่เขียน/ไม่แก้ TC** — ถ้าพบ Gap จะส่งกลับไป `design` และ bump iteration

> **บันทึกความโปร่งใสของ iteration**: การ audit รอบนี้ **ไม่พบ Gap** จึง **ไม่มี loop-back ไป `design`** และ iteration คงอยู่ที่ **1** — ไม่มีการ bump ปลอมเพื่อให้ดูเหมือนมีการ re-work
> เหตุที่ไม่พบ Gap ตั้งแต่รอบแรก: `design` สร้าง traceability spine (FR/SC → TC) **ก่อน**เขียน TC ตาม SKILL §3 ทำให้ FR ที่ไม่มี TC ถูกจับได้ตั้งแต่ขั้นวางแผน ไม่ใช่ขั้น audit — audit รอบนี้จึงทำหน้าที่ **ยืนยันอิสระ** ไม่ใช่ค้นหาครั้งแรก

---

## Pass 1 — Gap (FR/SC ที่มี **ศูนย์** TC)

| FR/SC | Requirement (ย่อ) | Mapped TC | Severity | Note |
|---|---|---|---|---|
| — | — | — | — | **ไม่พบ Gap** — FR ทั้ง 27 ข้อ และ SC ทั้ง 7 ข้อ มี TC ครอบคลุมอย่างน้อย 1 ข้อ |

**ผลตรวจ**: 34/34 (100%) · **CRITICAL Gap = 0** · **HIGH Gap = 0**

### ตรวจ constitution MUST-principle → Security TC (SKILL §7)

| MUST-principle | สถานะใน plan.md | Security TC ที่ครอบ | ผ่าน gate? |
|---|---|---|---|
| **I. PDPA-First** (opt-out) | ✅ ปิดโดย Aor (ใช้เบอร์ 1503 เดิม) | TC-062 (DNC compliance) | ⚠️ **มี TC แต่ไม่มี requirement ให้ assert** — opt-out ไม่ผูก Do Not Contact (**F-004**) |
| **II. Secure SMS Delivery** | ✅ ส่วนใหญ่ผ่าน / ⚠️ 2 ข้อ | TC-059 (ไม่มี PII ในข้อความ), TC-064 (link injection) | ✅ มี TC · rate-limiting/anomaly ไม่มี design → ไม่มี TC (**ไม่ใช่ Gap ของ QA** — ไม่มี requirement) |
| **III. RBAC / SoD** | ✅ ยกเว้นโดย Aor (batch auto ไม่ต้องมี approver) | TC-063 (RBAC บน Manual Fix) | ✅ **ผ่าน** — การยกเว้นครอบเฉพาะ approval gate; access control ของ Manual Fix ยังบังคับใช้และมี TC |
| **IV. Audit Trail** (ห้าม log PII) | ✅ **ยกเว้นโดย Aor** (อ้าง legacy pattern) | TC-060, TC-061, TC-066, TC-068, TC-083 | ❌ **ไม่ผ่าน §7** — มี TC ครบทุกจุด **แต่ execute ไม่ได้** เพราะไม่มี NFR/เกณฑ์ที่ SA/DPO รับรอง (**F-002 + F-003**) |
| **V. Secure-by-Default Dev** | ➡️ บังคับตอน implement | — (นอก scope QA design) | n/a — Gates G1–G17 เป็นเรื่อง CI/CD pipeline |

**สรุป §7 Constitution Gate**: **ทุก MUST-principle มี Security-dimension TC ครอบครบ — ไม่มี CRITICAL Gap ในเชิง coverage**
**แต่**: Principle IV ถูก**ยกเว้นโดยไม่มี compensating control** ⇒ ตาม SKILL §7 **ห้ามประกาศ feature นี้ว่า "verified"** จนกว่า **F-002** (เพิ่ม security/PII NFR) และ **F-003** (compensating control) จะปิด
> นี่ **ไม่ใช่ coverage gap** (TC มีครบ) — เป็น **requirement gap** ที่ทำให้ TC ที่มีอยู่ assert ไม่ได้ · บันทึกเป็น CRITICAL finding แทน ไม่ใช่ `gaps-found`

---

## Pass 2 — Overlap (TC ที่ซ้ำซ้อน — informational เท่านั้น ไม่ลบอัตโนมัติ)

| TCs | เงื่อนไขที่ assert ซ้ำกัน | คำแนะนำ |
|---|---|---|
| TC-025 ↔ TC-002/005/006/010/011/014/015/016/017/018 | TC-025 (E2E happy path) เดินผ่านทุกขั้นตอนที่ TC-002…TC-018 แยกทดสอบ | **เก็บไว้ทั้งคู่ — ไม่ถือเป็น overlap ที่ต้องแก้** · TC-025 คือ E2E smoke ที่พิสูจน์การประกอบกัน (integration seam) ส่วน TC-002…018 คือ unit-of-behavior ที่ชี้จุดพังได้แม่นยำ · ถ้าลบตัวใดตัวหนึ่ง จะเสีย diagnosability หรือเสีย end-to-end proof |
| TC-039 ↔ TC-033/034/036/041 | TC-039 assert `sent_status='F'` ของ 4 กรณี ที่ TC-033/034/036/041 ก็ assert เช่นกัน | **เก็บไว้** — TC-033/034/036/041 ทดสอบ **การตัดสินใจ skip** (พฤติกรรม), TC-039 ทดสอบ **การบันทึกผล** (persistence) · เป็นคนละ assertion บน trigger เดียวกัน · ⚠️ ถ้าต้องการลดเวลารัน สามารถ merge TC-039 เข้าเป็น assertion เพิ่มของ 4 TC นั้นได้ |
| TC-062 ↔ TC-030/031 | ทั้งคู่ assert "ลูกค้าใน DNC ไม่ได้รับ SMS" | **เก็บไว้** — TC-030/031 คือ functional (ตัดออกจากกลุ่มเป้าหมาย), TC-062 คือ security/PDPA + **assert ลำดับ**ว่า DNC ต้องกรองก่อนเรียก Line Connect (ไม่ส่ง card_no ออกโดยไม่จำเป็น) — เป็น assertion ที่ TC-030/031 ไม่มี |
| TC-071 ↔ TC-024 | ทั้งคู่แตะการ reconcile รายงาน (SC-007) | **เก็บไว้** — TC-024 คือ "รายงานแสดงครบ" (FR-021), TC-071 คือ "ตัวเลขตรงกับข้อมูลจริง" (SC-007 side-effect) |
| TC-070 ↔ TC-069 | ทั้งคู่แตะ "ความล้มเหลวไม่ทำลายผลที่ทำไปแล้ว" | **เก็บไว้** — TC-069 = skip **รายตัว** (รอบเดินต่อ), TC-070 = หยุด **ทั้งรอบ** (รอบจบ) · เป็นเส้นแบ่งที่ spec แยกไว้ชัด (FR-008 vs FR-008b/012a) |
| **TC-077…083 ↔ TC-084…088** | ⚠️ **ทั้งสองชุด assert ช่องทางส่ง SMS ที่ขัดกัน** | ⚠️ **นี่ไม่ใช่ overlap ปกติ — เป็น disputed (F-001)** · **ห้าม merge · ห้าม execute ทั้งคู่** · เมื่อ SA/PO ตัดสิน **ต้องลบชุดใดชุดหนึ่งทิ้งทั้งชุด** |

**สรุป Pass 2**: ไม่มี overlap ที่เป็นความซ้ำซ้อนไร้ค่า (redundant-no-value) · ทุกคู่ที่ทับกันมี assertion ต่างกันที่อธิบายได้ · **ไม่มีคำแนะนำให้ลบ TC ใด** ยกเว้นชุด disputed ที่ต้องรอคำตัดสิน

---

## Pass 3 — Missing Negative / Edge (เทียบ `templates/negative-input-catalog.md`)

ตรวจทุก FR ที่แตะ **free-text / search / numeric / date / phone** field:

| FR / Field | ชนิด field | แถวใน catalog ที่ต้องมี | TC ที่ครอบ | ผล |
|---|---|---|---|---|
| **FR-002 / issue_date** | date | §C boundary (min/max), past/far-future, adjacent boundary | TC-027 (T-0/T-2/T-30/อนาคต), **TC-044** (00:00:00 / 23:59:59 ขอบ) | ✅ ครบ |
| **FR-003 / ปี Go-live** | date | §C boundary (min-1 / min) | **TC-045** (2025-12-31 / 2026-01-01) | ✅ ครบ |
| **FR-004 / mobile_no** | phone/numeric | §B whitespace-only/empty, §C boundary ความยาว, format variants | TC-029 (NULL/""/space/tab), **TC-050** (ขีด/ช่องว่าง/+66/9 หลัก/11 หลัก/ตัวอักษร/เบอร์บ้าน) | ✅ ครบ |
| **FR-005 / policy_type mapping** | enum | permitted-value matrix | **TC-032** (O / I / G / P ครบทุกค่า) | ✅ ครบ |
| **FR-009 / fname, lname, mobile_no** (dedup key) | free-text | §B whitespace/normalize, unicode/NBSP/homoglyph (dedup bypass), §A leading/trailing spaces | **TC-049** (trailing space / NBSP / leading space / เบอร์มีขีด / NFD vs NFC — 6 variants) | ✅ ครบ |
| **FR-011 / template** | free-text | §B `<script>`, null byte, control chars; format string; unknown placeholder | **TC-065** ($(var3) / ${jndi} / %s %n / SQL metachar / ว่าง — 6 payloads) | ✅ ครบ |
| **FR-012 / fname → $(var1)** | free-text | §B emoji/combining/RTL/NBSP/homoglyph, max length | **TC-048** (7 รูปแบบ), **TC-051** (70/71/134/135/140/500 ตัว) | ✅ ครบ |
| **FR-012 / ลิงก์ → $(var2)** | free-text (URL) | §B `<script>` XSS, §A SQL injection, extreme length | **TC-064** (evil domain / javascript: / `<script>` / SQL metachar / 2000 ตัว — 6 ค่า) | ✅ ครบ |
| **FR-012 / begin_date, expire_date** | date | §C adjacent boundary (inclusive/exclusive), start==end | **TC-047** (begin=run_date / expire=run_date / นอกช่วง 2 ทิศ) | ✅ ครบ |
| **FR-002/005/009/016 / fname, lname, card_no จากต้นทาง** | free-text → SQL | §A `%` / `_` LIKE wildcard **แยกจาก** SQL injection, §B null byte | **TC-067** (`'; DROP TABLE--` / `' OR '1'='1` / **`100%`** / **`a_b`** / UNION / null byte — 6 ค่า) | ✅ ครบ · **มีการแยก wildcard-as-literal (Minor) ออกจาก injection (Critical) ตามที่ catalog §A บังคับ** |
| **FR-015 / refer_no** | free-text | §B empty/whitespace-only, max length | **TC-042** (null / "" / "   " / "ERR" / ยาว 500) | ✅ ครบ *(แต่ blocked ที่ F-006)* |
| **FR-019 / ช่วงวันที่ Manual Fix** | date range | §C reversed range (end<start), past/far-future (9999), min-1 | TC-038 (start>today / end<start / ว่าง / format ผิด), **TC-052** (1 วัน / 17 วัน / 137 วัน / 9999 / ก่อน Go-live) | ✅ ครบ |
| **FR-013 / fname → CSV** ⚠ | free-text → CSV | CSV formula injection (`=` `+` `-` `@`), comma/quote/newline escaping | **TC-082** (8 payloads incl. `=cmd\|'/c calc'!A1`, `=HYPERLINK`), TC-080 (comma/quote/newline) | ✅ ครบ *(disputed set)* |
| **FR-017 / credit_amount** | numeric | §C boundary min/max | **TC-051** (70/71 = 1→2 credits, 134/135 = 2→3 credits) | ✅ ครบ |

### ตรวจ 7 Test Dimensions

| Dimension | จำนวน TC | ผล |
|---|---|---|
| Positive | 31 | ✅ |
| Negative/Validation | 20 | ✅ |
| Edge | 12 | ✅ |
| Concurrency | 4 | ✅ |
| Security | 12 | ✅ |
| Side-Effects | 6 | ✅ |
| **UX/Usability** | **3** | ✅ **ไม่ถูก blanket-exclude** |

**UX/Usability — ตรวจการยกเว้น (SKILL §4 ห้าม blanket-exclude)**:
feature เป็น **headless batch** ไม่มี UI ลูกค้า — แต่ **ไม่ได้ยกเว้นทั้ง dimension** · map ไป admin/ops surface ที่มีจริง 3 จุด: email แจ้งเตือน (TC-074), Manual Fix (TC-075), รายงาน (TC-076)
**ยกเว้นเฉพาะ sub-area พร้อมเหตุผล 1 บรรทัด**: *WCAG AA / responsive-mobile — ใช้หน้าจอกลางเดิมของ CSMS ที่อยู่นอก scope feature นี้ (Q-004 Closed: "ไม่ออกแบบ UI ใหม่ เพียงเพิ่ม batch เข้า list")* ✅ **ถูกต้องตามกฎ** (ยกเว้น sub-area ไม่ใช่ทั้ง dimension)

**ตรวจ catalog §D (State/flow/feedback → UX)**: sticky filter ✅ n/a (ไม่มี list/filter) · success feedback ✅ TC-075 (feedback + disable กัน double-submit) · empty/loading state ✅ TC-076 + TC-053 · post-action redirect ✅ n/a · destructive confirmation ✅ n/a (Manual Fix ไม่ทำลายข้อมูล — idempotent)

**สรุป Pass 3**: **ไม่พบ missing negative/edge** — ทุก free-text/numeric/date/phone field มีแถวจาก catalog ครบ · ไม่มี dimension ใดหายไปโดยไม่มีเหตุผล

---

## Verdict

### ✅ **`covered`** — ไม่มี Gap · negative/edge ครบ · 7 dimensions ครบ → **proceed to `/speckit-qa test-data`**

| เกณฑ์ | ผล |
|---|---|
| Pass 1 — Gap | ✅ 0 Gap (34/34 = 100%) |
| Pass 1 — constitution MUST-principle → Security TC | ✅ ทุก principle มี TC ครอบ |
| Pass 2 — Overlap ที่ไร้ค่า | ✅ ไม่มี (ทุกคู่มี assertion ต่างกัน) |
| Pass 3 — Missing negative/edge | ✅ ไม่มี (13 field × catalog ครบ) |
| Pass 3 — 7 dimensions | ✅ ครบ (ยกเว้น sub-area WCAG/responsive พร้อมเหตุผล) |
| **iteration** | **1 — ไม่มี loop-back** |

### ⚠️ คำเตือนที่ต้องอ่านคู่กับ verdict นี้

`covered` = **"ทุกข้อกำหนดมี TC"** — **ไม่ได้แปลว่า "พร้อม execute"** สองอย่างนี้ต่างกัน และ coverage gate ตอบได้แค่อย่างแรก

| # | ประเด็น | ทำไม coverage ยัง `covered` |
|---|---|---|
| 1 | **F-001 — disputed interface**: 12 TCs (13.6%) จะต้องถูกลบครึ่งหนึ่งหลัง SA/PO ตัดสิน | FR-013 และ FR-014 **มี TC ครอบทั้งคู่** ⇒ ไม่ใช่ coverage gap · เป็น **artifact contradiction** → route `/speckit-analyze` |
| 2 | **F-002 / F-003 — ไม่มี security/PII NFR + Constitution IV ยกเว้นโดยไม่มี compensating control** | TC-060/061/066/068/083 **มีอยู่ครบ** ⇒ ไม่ใช่ coverage gap · แต่ **assert ไม่ได้** เพราะไม่มีเกณฑ์ → **requirement gap** → `/speckit-checklist` + SA/DPO |
| 3 | **11 TCs execute ไม่ได้** (TC-042, 043, 054, 060, 061, 066, 068, 079, 080, 083, 088) | TC มีอยู่จริงและ map กับ FR ⇒ coverage นับว่าครอบ · การที่ **ไม่มีเกณฑ์ผ่าน/ตก** เป็นคนละมิติกับ coverage |
| 4 | **requirement gap 6 ข้อที่ไม่มี FR ให้ทดสอบเลย** (normalization rule, lock/TOCTOU, concurrency policy, link whitelist, phone format, opt-out↔DNC) | ไม่มี requirement ⇒ ไม่มี FR ⇒ **ไม่นับเป็น uncovered requirement** · QA ออกแบบ TC ไว้ล่วงหน้าแล้ว (TC-049, 056, 055/057, 064, 050, 062) บนค่าคาดหวังที่อนุมาน — **ต้องให้ SA ยืนยันก่อน execute** |

> **สรุปเชิงปฏิบัติ**: `design` เสร็จสมบูรณ์และ coverage ผ่าน — **แต่ SIT ยังเริ่มไม่ได้** จนกว่า F-001 / F-002 / F-003 จะปิด · ดู `risk-analysis_csms-001-welcome-line.md` §"รอบที่ 0 — BLOCKER"

---

## Coverage Summary

**Total FR/SC**: 34 (27 FR + 7 SC) · **มี ≥1 TC**: 34 · **coverage %**: **100%** · **CRITICAL gaps**: **0**

| | จำนวน |
|---|---|
| Total TCs | 88 |
| TCs ที่พร้อม execute (เมื่อมีระบบ + ปิด F-001) | 65 |
| TCs ที่ **disputed** (ต้องลบครึ่งหนึ่ง) | 12 |
| TCs ที่ **blocked** จนกว่าจะปิด finding | 11 |
| CRITICAL findings | 3 (F-001, F-002, F-003) |
| HIGH findings | 4 (F-004, F-005, F-006, F-009, F-010) |
| MEDIUM findings | 2 (F-007, F-008) |

**Next**: `/speckit-qa test-data` ✅ (รันแล้ว — `test-data_csms-001-welcome-line.json`)
`/speckit-qa execute` ❌ **นอก scope** — ไม่มี code และไม่มี running app บนเครื่องนี้ · TC ทุกข้อคง `Not Run`

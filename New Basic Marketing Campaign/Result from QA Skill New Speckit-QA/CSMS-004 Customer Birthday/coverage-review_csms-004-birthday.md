---
id: 005-batch-birthday-sms
phase: qa
sub-phase: coverage-review
run-date: 2026-07-17
iteration: 1
verdict: covered
---

# Coverage Review — CSMS-004 "Customer Birthday"

**AUDIT ONLY** — โหมดนี้ **ไม่เขียนและไม่แก้ TC** ตรวจ `test-cases_csms-004-birthday.csv` (103 TC) + `test-scenarios_csms-004-birthday.md` เทียบกับ FR/SC spine ของ `spec.md`

**ขอบเขตที่ตรวจ**: 20 FR + 8 SC = **28 ข้อกำหนด** · 103 TC

---

## Pass 1 — Gap (FR/SC ที่ไม่มี TC เลย)

| FR/SC | Requirement (ย่อ) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| — | — | — | — | **ไม่พบ Gap** |

**ผลการตรวจ**: ข้อกำหนดทั้ง **28/28** มี TC อย่างน้อย 1 ข้อ (ดูตาราง Traceability ท้าย `test-scenarios`) — **ไม่มี FR/SC ใดถูกทิ้งไว้โดยไม่มีการทดสอบ**

ตรวจเพิ่มเติมตามกฎของ gate:
- **FR ที่เป็น core business rule** (FR-002 เทียบวันเกิด, FR-006 DNC, FR-008b/008c dedup, FR-009 เกณฑ์ 2 ช่องทาง) → มี TC ครบทุกข้อ ✅
- **FR ที่เป็น permission** (FR-014 Manual Fix เฉพาะ IT_ADMIN) → TC-098 ทดสอบทั้งผ่าน UI และเรียก endpoint ตรง ✅
- **FR ที่เป็น data-integrity** (FR-012 audit log, FR-008b กันส่งซ้ำ) → มี TC ครบ ✅
- **Constitution MUST-principle** → ดู §Constitution Gate ด้านล่าง ⚠️

---

## Pass 2 — Overlap (TC ที่ทับซ้อนกัน)

| TCs | เงื่อนไขเดียวกันที่ assert | ข้อเสนอ |
|-----|------------------------|----------------|
| **TC-081 · TC-102** | ทั้งคู่ assert "10,000 รายการภายใน 5 นาที (SC-001)" | **เก็บไว้ทั้งคู่ — ไม่ใช่ความซ้ำซ้อนที่ควรลบ** TC-081 เป็น `@api-path` ที่วัดเฉพาะสมมติฐาน 10,000 HTTP call ทีละราย (33 call/วินาที) ส่วน TC-102 เป็นการวัดรอบรวมที่ไม่ผูกกับ interface ใด — **เมื่อ SA/PO ตัดสินให้ CSV ชนะ TC-081 จะถูกลบไปพร้อมชุด `@api-path` และ TC-102 จะเป็นตัวเดียวที่เหลือ** การลบ TC-102 ตอนนี้จะทำให้ SC-001 ไม่มี TC ในเส้นทาง CSV |
| **TC-070 · TC-102** | ทั้งคู่ใช้ชุดข้อมูล 10,000 ราย | **ไม่ซ้ำ** — TC-070 assert ความต่อเนื่องของ `seq_no` (ความถูกต้องของข้อมูล), TC-102 assert เวลา (performance) ใช้ dataset ร่วมกันได้เพื่อประหยัดการ setup |
| **TC-046 · TC-096** | ทั้งคู่แตะกลไกกันส่งซ้ำ (FR-008b) | **ไม่ซ้ำ** — TC-046 คือ dedup ของรอบ daily ที่รันซ้ำ; TC-096 คือ idempotency ของ **Manual Fix** ซึ่งเป็น entry point คนละทางที่ spec บังคับแยก (FR-014) |
| **TC-053 · TC-100** | ทั้งคู่เป็น Concurrency ที่ assert "1 ข้อความต่อ cardNo" | **ไม่ซ้ำ** — TC-053 คือ 2 instance ของรอบ daily ชนกัน; TC-100 คือ Manual Fix ชนกับรอบ daily ซึ่งเป็นสถานการณ์ที่ **SC-007 (ซ่อมภายใน 1 ชม.) ทำให้เกิดขึ้นจริงได้** — trigger ต่างกัน กลไกที่ต้องกันก็อาจต่างกัน |
| **TC-012–TC-016 · TC-050** | ทั้งกลุ่มแตะกฎ 29 ก.พ. | **ไม่ซ้ำ** — TC-012–016 คือการ *คัดเลือก* ในแต่ละ combination ของปี; TC-050 คือ *dedup ข้ามปี* ของลูกค้า 29 ก.พ. ซึ่งเป็นการรวมกฎ FR-003a เข้ากับ FR-008b |

**สรุป Pass 2**: **ไม่มี TC ที่ควรลบหรือ merge** — คู่ที่ดูคล้ายกันทั้งหมดตรวจแล้วว่า assert คนละเงื่อนไขหรืออยู่คนละ interface path (informational เท่านั้น — gate นี้ไม่ลบ TC อยู่แล้ว)

---

## Pass 3 — Missing Negative/Edge

ตรวจทุก FR ที่แตะ free-text / search / numeric / date / phone field เทียบกับ `templates/negative-input-catalog.md`

| FR/Field | ชนิด field | adversarial rows ที่ต้องมี | สถานะ |
|----------|-----------|--------------------------|-------|
| FR-002 `birthdate` | date | boundary, invalid date, transposition, era confusion | ✅ TC-006, TC-008, TC-009 |
| FR-003 Go Live | date | boundary min/min-1 | ✅ TC-011 |
| FR-003a 29 ก.พ. | date | leap/non-leap ทุก combination | ✅ TC-012–016 (4 combination ครบ) |
| FR-004 `policy_status` | enum | ค่าที่อนุญาต + ค่านอกชุด | ✅ TC-019 ('1','2','3' เข้า / '4' ออก) |
| FR-005 `mobile1`/`mobile2` | phone | empty/whitespace, ความยาว, non-numeric, รูปแบบสากล | ✅ TC-021, TC-022, TC-023 |
| FR-006 `policy_type`/`remark_code` | enum | cross-pairing, homoglyph ('0' vs 'O') | ✅ TC-026, TC-027 |
| FR-007 `policy_org` | numeric | min/min-1/max/max+1 ทั้ง 2 ช่วง | ✅ TC-030 (8 ค่า ครบทั้ง 2 ช่วง) |
| FR-007 `title_desc` | free-text | whitespace, substring, unicode/homoglyph ไทย | ✅ TC-031 |
| FR-008 `cardNo` | id/key | normalize, zero-width space, dedup bypass | ✅ TC-052 |
| FR-009 LINE/APP codes | enum | truth table ครบทุก combination | ✅ TC-036–040 (รวมกรณีที่ spec ไม่ได้ยกไว้ = TC-040) |
| FR-009a channel/isBlockLine | enum | ค่าว่าง/null ต้องไม่ default เป็น true | ✅ TC-043 |
| FR-010a `fname` | free-text | empty, ความยาว, emoji, RTL, NBSP | ✅ TC-064 |
| FR-010a config `REWARDS` | free-text | ไม่พบ, ไม่ active, ค่าว่าง, ซ้ำ | ✅ TC-055–058 |
| FR-010a `LINE_LINK` | url | scheme ไม่ปลอดภัย, open-redirect | ✅ TC-059 |
| FR-010a `begin_date`/`end_date` | date range | start == end, adjacent boundary | ✅ TC-061 |
| FR-010b `seq_no` | numeric | เริ่มที่ 1 ไม่ใช่ 0, ต่อเนื่อง, boundary 1/2/10000 | ✅ TC-070 |
| FR-010b `datetime` | date format | zero-pad, era (ค.ศ. vs พ.ศ.) | ✅ TC-071, TC-067 |
| FR-010b CSV cell | output/free-text | comma/quote/newline escape, formula injection | ✅ TC-072 |
| FR-014 ช่วงวันที่ Manual Fix | date range | past, far-future (9999), reversed range | ✅ TC-099 |

### rows ของ catalog ที่ **ไม่** ถูกใช้ (พร้อมเหตุผลหนึ่งบรรทัด — ตามกฎ)

| Catalog section | rows ที่ข้าม | เหตุผล |
|---|---|---|
| **§A ทั้ง section** (LIKE wildcard `%`/`_`, SQL injection ผ่านช่องค้นหา, metacharacter-as-literal) | ทั้งหมด | **ไม่มี free-text search field ที่ผู้ใช้ป้อนในแคมเปญนี้** — batch คัดกรองจาก DB ด้วยเงื่อนไขคงที่ ไม่มี search box; input เดียวจากมนุษย์คือ "ช่วงวันที่" ของ Manual Fix (ครอบคลุมด้วย TC-099) → **ไม่มี sink ให้ทดสอบ** |
| §B `<script>` / XSS | ข้าม | ไม่มี HTML sink — ปลายทางคือ SMS (plain text) และไฟล์ CSV; **ความเสี่ยง injection ที่มีจริงคือ CSV/formula injection ซึ่งครอบคลุมด้วย TC-072 แล้ว** |
| §B null byte / control chars | ข้าม (บางส่วน) | ครอบคลุมทางอ้อมด้วย TC-064 (unicode) และ TC-072 (CRLF ใน CSV) |
| §D sticky filter / PRG redirect | ข้าม | ไม่มีหน้าจอใหม่ (scope ระบุ "นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard") — UX ที่มีจริงครอบคลุมด้วย TC-093, TC-101 |

### การครอบคลุม 7 Dimension

| Dimension | จำนวน | สถานะ |
|---|---|---|
| Positive | 24 | ✅ |
| Negative/Validation | 25 | ✅ |
| Edge | 37 | ✅ |
| Concurrency | 2 | ✅ TC-053, TC-100 |
| Security | 10 | ✅ (รวม 6 PDPA) |
| Side-Effects | 3 | ✅ TC-086, TC-089, TC-090 |
| UX/Usability | 2 | ✅ TC-093, TC-101 — **ไม่ถูก blanket-exclude** |

**ไม่มีมิติใดขาดหายโดยไม่มีเหตุผลกำกับ** — UX/Usability ถูก map ไปที่ surface ที่มนุษย์เห็นจริงของ batch แบบ headless (email + หน้า Manual Fix) และตัดเฉพาะ sub-area (WCAG AA / responsive) พร้อมเหตุผล ตามที่ skill กำหนด

---

## Constitution & PDPA Gate (§7)

| หลักการ | มี Security-dimension TC รองรับ? | สถานะ |
|---|---|---|
| PII masking / PDPA (`cardNo` = เลขบัตรประชาชน) | ✅ TC-035, TC-073, TC-082, TC-087, TC-088, TC-092 (6 TC) | ⚠️ **มี TC แต่ไม่มีเกณฑ์ผ่าน** |
| RBAC (Manual Fix เฉพาะ IT_ADMIN) | ✅ TC-098 | ✅ |
| Audit trail | ✅ TC-084, TC-085, TC-090 | ✅ |

> **⚠️ ข้อจำกัดสำคัญของ gate นี้**: กฎของ gate คือ "MUST-principle ที่ไม่มี Security TC = CRITICAL gap" — ตามตัวอักษรแล้ว **ผ่าน** เพราะทุกประเด็น PII มี TC รองรับ
> **แต่ต้องบันทึกไว้ให้ชัด**: `spec.md` **ไม่มี security/PII NFR เลยแม้แต่ข้อเดียว** (F-001) ดังนั้น TC ทั้ง 6 ข้อ **มีอยู่แต่ตัดสิน Pass/Fail ไม่ได้** เพราะไม่มีเกณฑ์ที่เป็นทางการให้เทียบ — **นี่คือ gap ของตัว requirement ไม่ใช่ gap ของ coverage** จึงไม่ทำให้ verdict เป็น `gaps-found` (ซึ่งจะสั่งให้กลับไป `design` เพิ่ม TC — แต่การเพิ่ม TC **แก้ปัญหานี้ไม่ได้**)
> **ทางแก้ที่ถูกต้องคือ SA/PO เพิ่ม NFR** ไม่ใช่ QA เพิ่ม TC — coverage gate จึงส่งประเด็นนี้ออกไปเป็น **CRITICAL finding** แทน และ **`speckit-qa` MUST NOT ประกาศว่า feature นี้ "verified" จนกว่าจะปิด F-001**

---

## Verdict

### ✅ `covered` — iteration 1 (ไม่มีการ loop back ไป `design`)

**เหตุผล**:
- **Pass 1**: ไม่มี Gap — 28/28 ข้อกำหนดมี TC (100%)
- **Pass 2**: ไม่มี TC ซ้ำซ้อนที่ต้อง merge
- **Pass 3**: adversarial rows ที่ใช้ได้ครบทุก field type; rows ที่ข้ามมีเหตุผลกำกับครบ; 7 dimension ครบ
- **Constitution gate**: ทุก MUST-principle มี Security TC รองรับ

**iteration = 1** เพราะ **ไม่มีการ loop back เกิดขึ้นจริง** — `design` รอบแรกครอบคลุมครบตั้งแต่ต้น จึงไม่มีการ bump iteration ของ `design`/`risk`/`coverage` (การ bump โดยไม่มี rework จริงจะเป็นการรายงานเท็จ)

### ⚠️ เงื่อนไขที่ต้องเข้าใจก่อนใช้ verdict นี้

`covered` หมายถึง **"ชุดทดสอบครอบคลุมข้อกำหนดที่เขียนไว้ครบ"** เท่านั้น — **ไม่ได้** หมายถึง "พร้อมทดสอบ" หรือ "ข้อกำหนดถูกต้อง":

| ประเด็น | ผลกระทบ |
|---|---|
| **F-002 — CSV vs API ยังไม่ยุติ** | **19 TC (TC-065–083) รันไม่ได้** จนกว่าจะตัดสิน และ **ต้องลบทิ้งชุดหนึ่ง** เมื่อตัดสินแล้ว → **ต้อง re-run `coverage` (iteration 2)** หลังลบ เพื่อยืนยันว่า FR-010/010b/011 และ SC-001/SC-002 ยังมี TC เหลือครอบคลุมอยู่ |
| **F-001 — ไม่มี security/PII NFR (CRITICAL)** | 6 PDPA TC ตัดสิน Pass/Fail ไม่ได้ — **ห้ามประกาศ "verified"** จนกว่าจะปิด |
| **F-006 — ไม่มี `plan.md`** | คอลัมน์ `Target Test Level` ทั้ง 103 แถวเป็น **สมมติฐาน** → ต้อง review ใหม่เมื่อ plan.md มาถึง |
| **ไม่มีระบบให้รัน** | TC ทั้ง 103 ข้อเป็น `Not Run` — coverage ที่ 100% นี้คือ **designed coverage** ไม่ใช่ **executed coverage** (0%) |

> **designed 100% ≠ verified 0%** — ต้องรายงานแยกกันเสมอ ห้ามให้ตัวเลข 100% ถูกอ่านว่าระบบผ่านการทดสอบแล้ว

---

## Coverage Summary

**Total FR/SC**: 28 (20 FR + 8 SC) · **มี TC >= 1**: 28 · **Coverage**: **100%** · **CRITICAL gaps**: **0**

**Total TC**: 103 · **Executed**: 0 · **Executed %**: **0%** (ไม่มีระบบให้รัน)

**CRITICAL findings ที่ส่งออกจาก gate นี้** (ไม่ใช่ coverage gap แต่บล็อกการประกาศ "verified"):
- **F-001** — ไม่มี security/PII NFR ทั้งที่ `cardNo` = เลขบัตรประชาชน เป็น dedup key (ต้องให้ SA/PO เพิ่ม NFR)
- **F-002** — ข้อขัดแย้ง interface CSV vs API + รหัส category `112` vs `115` (ต้องให้ SA/PO ตัดสิน)

## Next Action

→ **`covered`** — เดินหน้าไป **`/speckit-qa test-data`** ได้
→ **แต่ต้องกลับมา re-run `coverage` (iteration 2) ทันทีที่ F-002 ถูกตัดสินและมีการลบชุด TC ที่แพ้ทิ้ง**

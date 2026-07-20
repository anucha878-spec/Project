---
id: csms-001-welcome-line
phase: qa
sub-phase: risk-analysis
spec-version: spec.md 2026-07-07 (Draft) · plan.md 2026-07-09 · checklist.md 2026-07-10
run-date: 2026-07-17
iteration: 1
p0: 8
p1: 9
p2: 8
p3: 2
---

# Risk Analysis — CSMS-001 Welcome New Customer (LINE)

**Mode**: `risk` (read-only — จัดลำดับ TC ที่มีอยู่ตามความเสี่ยง **ไม่สร้าง/ไม่แก้ TC**)
**Input**: `test-cases_csms-001-welcome-line.csv` (88 TCs) · `spec.md` (27 FRs, 7 SCs) · `plan.md` · `checklist.md`

## เกณฑ์การให้คะแนน (6 แกน · 0–3 ต่อแกน · เต็ม 18)

| แกน | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **Business-impact** | ไม่กระทบธุรกิจ | กระทบการรายงาน | กระทบลูกค้าบางส่วน | กระทบลูกค้าทุกราย / ผิดกฎหมาย / เสียชื่อเสียง |
| **Complexity** | ตรงไปตรงมา | มีเงื่อนไข 1-2 ชั้น | logic หลายเงื่อนไข/หลายแหล่ง | logic ซับซ้อน + state + timing |
| **Change-frequency** | คงที่ | เปลี่ยนนาน ๆ ครั้ง | เปลี่ยนตาม campaign | config เปลี่ยนบ่อย / ยังไม่นิ่ง (disputed) |
| **Integration-surface** | ภายในเท่านั้น | 1 ตาราง/component | ข้ามระบบภายใน (ESB/DB mirror) | บริการภายนอก (Line Connect / SMS Gateway / OMail) |
| **Data-sensitivity (PDPA)** | ไม่มีข้อมูลส่วนบุคคล | ข้อมูลไม่ระบุตัวตน | ชื่อ / เบอร์โทร | **card_no (เลขบัตรประชาชน)** |
| **Historical-defect** | ไม่เคยพบปัญหา | เคยพบเล็กน้อย | pattern นี้เคยมี defect | มี finding เปิดอยู่ตอนนี้ (F-00x) |

**Band**: `P0` ≥14 **หรือ** Data-sensitivity=3 ร่วมกับ constitution MUST-principle · `P1` 10–13 · `P2` 5–9 · `P3` 0–4

> **หมายเหตุ Historical-defect**: ไม่มี production history ของ batch นี้ (feature ใหม่ ยังไม่ implement) — จึงให้คะแนนจาก **(ก)** finding ที่เปิดอยู่จาก `checklist.md`/QA design (F-001…F-010) และ **(ข)** pattern ที่ batch CSMS เดิมเคยพลาด (ตาม `templates/negative-input-catalog.md` §Origin: DEF-001 `%` wildcard, UX-002 overflow) — ไม่ใช่การกุตัวเลข

---

## 6-Axis Risk Score (ต่อ FR)

| FR/SC | TCs | Business | Complexity | Change-freq | Integration | Data-sens (PDPA) | Hist-defect | Score | Band |
|---|---|---|---|---|---|---|---|---|---|
| **FR-013** ⚠ *disputed* | TC-077…083, TC-087 | 3 | 2 | 3 | 2 | 3 | 3 | **16** | **P0** |
| **FR-016** | TC-017, 025, 051, 060, 061, 067, 073, 080 | 3 | 1 | 1 | 1 | 3 | 3 | **12** | **P0** ¹ |
| **FR-006** | TC-006, 007, 008, 025, 054, 066, 071 | 3 | 3 | 1 | 3 | 3 | 2 | **15** | **P0** |
| **FR-005** | TC-005, 025, 030, 031, 032, 062, 067, 071, 072 | 3 | 2 | 2 | 2 | 3 | 2 | **14** | **P0** |
| **FR-014** | TC-015, 025, 041, 084…088 | 3 | 3 | 3 | 3 | 2 | 2 | **16** | **P0** |
| **FR-010** | TC-011, 025, 056, 071 | 3 | 2 | 1 | 1 | 2 | 3 | **12** | **P1** |
| **FR-009** | TC-010, 025, 046, 049, 067, 071 | 3 | 3 | 1 | 1 | 2 | 3 | **13** | **P1** |
| **FR-015** | TC-016, 025, 042, 060, 070, 073, 085 | 2 | 1 | 1 | 3 | 3 | 3 | **13** | **P0** ¹ |
| **FR-012** | TC-014, 025, 047, 048, 059, 064, 065, 072 | 3 | 2 | 3 | 1 | 2 | 2 | **13** | **P1** |
| **FR-012a** | TC-037, TC-070 | 3 | 1 | 3 | 1 | 0 | 2 | **10** | **P1** |
| **FR-008b** | TC-035, TC-070 | 3 | 2 | 1 | 3 | 1 | 2 | **12** | **P1** |
| **FR-002** | TC-002, 025, 026, 027, 044, 067, 072 | 3 | 2 | 1 | 2 | 3 | 1 | **12** | **P0** ¹ |
| **FR-016a** | TC-018, 025, 039, 041, 071, 086 | 2 | 2 | 1 | 1 | 2 | 2 | **10** | **P1** |
| **FR-020** | TC-022, 055, 058, 073 | 3 | 3 | 1 | 1 | 2 | 2 | **12** | **P1** |
| **FR-019** | TC-021, 038, 052, 058, 063, 075 | 2 | 2 | 1 | 1 | 2 | 2 | **10** | **P1** |
| **FR-018** | TC-020, 053, 070, 074, 081 | 3 | 1 | 1 | 3 | 1 | 2 | **11** | **P1** |
| **FR-008** | TC-033, 039, 069, 071 | 2 | 2 | 1 | 3 | 1 | 1 | **10** | **P1** |
| **FR-001** | TC-001, 020, 025, 053, 055, 057 | 3 | 1 | 0 | 1 | 1 | 2 | **8** | **P2** |
| **FR-004** | TC-004, 029, 050 | 2 | 1 | 1 | 1 | 2 | 2 | **9** | **P2** |
| **FR-011** | TC-012, 013, 043, 048, 065, 072 | 2 | 2 | 3 | 1 | 0 | 1 | **9** | **P2** |
| **FR-011a** | TC-036, TC-039 | 2 | 1 | 1 | 1 | 3 | 1 | **9** | **P2** ¹ |
| **FR-008a** | TC-034, TC-039 | 2 | 2 | 1 | 3 | 1 | 1 | **10** | **P1** |
| **FR-003** | TC-003, 028, 045 | 2 | 1 | 0 | 1 | 1 | 1 | **6** | **P2** |
| **FR-021** | TC-024, 053, 068, 071, 076 | 1 | 2 | 1 | 1 | 3 | 1 | **9** | **P2** ¹ |
| **FR-020a** | TC-023, TC-052 | 2 | 2 | 0 | 1 | 1 | 1 | **7** | **P2** |
| **FR-020b** | TC-040, TC-086 | 2 | 1 | 0 | 1 | 1 | 1 | **6** | **P2** |
| **FR-007** | TC-006, TC-009 | 1 | 1 | 0 | 2 | 1 | 0 | **5** | **P2** |
| **FR-017** | TC-019, TC-051 | 1 | 1 | 0 | 0 | 0 | 1 | **3** | **P3** |

¹ = **ยกระดับเป็น P0 ตามกฎ Data-sensitivity=3 + constitution MUST-principle** (SKILL §4.5 step 1) — FR เหล่านี้แตะ `card_no` (เลขบัตรประชาชน) โดยตรง และ Constitution Principle IV ("MUST NOT log sensitive fields: phone numbers, customer PII") เป็น MUST-principle ที่ **ถูกยกเว้นโดยไม่มี compensating control** (F-003)
*(FR-011a / FR-021 คะแนน 9 แต่แตะ card_no → กฎบังคับให้ขึ้น P0; แสดงเป็น P2 ในคอลัมน์ Band ตามคะแนนดิบ แต่ถูกรวมใน P0 test-first order ด้านล่าง — ดู "หมายเหตุการยกระดับ")*

### หมายเหตุการยกระดับ (P0 promotion by PDPA rule)

FR ที่แตะ `card_no` (Data-sensitivity=3): **FR-002, FR-005, FR-006, FR-011a, FR-013, FR-015, FR-016, FR-021**
ทั้ง 8 ข้อ **ถูกยกเป็น P0** โดยอัตโนมัติตามกฎ "Data-sensitivity=3 + MUST-principle" — ไม่ว่าคะแนนดิบจะเป็นเท่าใด

**สรุปการกระจาย band (หลังยกระดับ)**

| Band | จำนวน FR | FR |
|---|---|---|
| **P0** | **8** | FR-002, FR-005, FR-006, FR-011a, FR-013, FR-014, FR-015, FR-016 |
| **P1** | **9** | FR-008, FR-008a, FR-008b, FR-009, FR-010, FR-012, FR-012a, FR-018, FR-019, FR-020 *(10 ข้อ — ดูหมายเหตุ)* |
| **P2** | **8** | FR-001, FR-003, FR-004, FR-007, FR-011, FR-020a, FR-020b, FR-021 |
| **P3** | **2** | FR-017 *(+ ไม่มีข้ออื่น)* |

> **หมายเหตุความสอดคล้อง**: FR-014 คะแนน 16 (P0 โดยคะแนน) และ FR-021 ถูกยกเป็น P0 โดยกฎ PDPA แต่แสดงใน P2 ตามคะแนนดิบ — **test-first order ด้านล่างคือแหล่งอ้างอิงที่ผูกพัน** (ordering ที่ใช้จริง)

---

## Likelihood × Impact Heatmap

**Likelihood** = โอกาสที่ข้อกำหนดนั้นจะทำงานผิด (จาก Complexity + Integration-surface + finding ที่เปิดอยู่)
**Impact** = ผลกระทบเมื่อผิด (จาก Business-impact + Data-sensitivity)

|  | **Impact Low** | **Impact Med** | **Impact High** |
|---|---|---|---|
| **Likelihood High** | — | FR-011 (template chain — F-008) | **FR-013 (P0 — disputed F-001)** · **FR-014 (P0 — F-001/F-005/F-006)** · **FR-006 (P0 — external API + card_no)** |
| **Likelihood Med** | FR-007 | FR-008 · FR-008a · FR-012a · FR-018 · FR-019 · FR-020a | **FR-005 (P0)** · **FR-015 (P0)** · **FR-016 (P0)** · **FR-009 (P1 — dedup/normalize)** · **FR-010 (P1 — TOCTOU)** · **FR-012 (P1 — link injection)** · **FR-020 (P1)** · **FR-008b (P1)** |
| **Likelihood Low** | FR-017 (P3) · FR-020b | FR-001 · FR-003 · FR-004 | **FR-002 (P0 — card_no)** · **FR-011a (P0 — card_no)** · **FR-021 (P0 — PII in report)** |

**เซลล์ High×High (3 FR)** = จุดที่ต้องทดสอบก่อนเสมอ:
1. **FR-013** — ยังไม่รู้ด้วยซ้ำว่าต้องมีอยู่จริงหรือไม่ (F-001 disputed) + ไม่มี column contract (F-010) + ไม่มี PII NFR (F-002)
2. **FR-014** — สถาปัตยกรรมยังไม่นิ่ง (F-001) + ไม่มี performance NFR ทั้งที่ plan เตือนเอง (F-005) + ไม่มี edge case รายรายการ (F-006)
3. **FR-006** — logic 3 เงื่อนไข + พึ่งบริการภายนอก + ส่ง card_no ออกนอกระบบ

---

## Test-First Order

### รอบที่ 0 — **BLOCKER: ต้องปิดก่อนเริ่ม execute ใด ๆ**

| # | สิ่งที่ต้องปิด | Finding | ใครตัดสิน | กระทบ TC |
|---|---|---|---|---|
| 1 | **ตัดสิน CSV vs SMS Gateway V3** — spec.md FR-013 vs plan.md | **F-001** | SA + PO | 12 TCs (TC-077…088) — ต้องลบ 1 ใน 2 ชุด |
| 2 | **เพิ่ม security/PII NFR** (card_no + mobile_no) | **F-002** | SA + DPO | TC-060, 061, 066, 068, 083 |
| 3 | **compensating control ของ Constitution IV ที่ถูกยกเว้น** | **F-003** | Platform Owner + DPO | TC-060, TC-061 · **§7 gate — ห้ามประกาศ verified** |

> **§7 Constitution & PDPA Gate**: จนกว่า F-002 และ F-003 จะปิด **feature นี้ประกาศว่า "verified" ไม่ได้** ไม่ว่าผลรันจะเป็นอย่างไร

### รอบที่ 1 — P0 (ต้องรันก่อน และ **ต้องไม่เหลือ `Not Run` ตอน report**)

| ลำดับ | FR | TCs (P1 smoke ก่อน) | เหตุผล |
|---|---|---|---|
| 1 | **FR-006** | TC-006, TC-007, TC-008 → TC-066, TC-054 | logic 3 เงื่อนไขคือแก่นของการ "ไม่ส่งผิดกลุ่ม" (SC-002) + ส่ง card_no ออกนอกระบบ |
| 2 | **FR-005** | TC-030, TC-031, TC-032, TC-062 → TC-005 | ส่งหาลูกค้าที่ขอไม่ให้ติดต่อ = ละเมิด PDPA ทันที (SC-002); mapping ผิด = ตรวจไม่เจอทั้งหมด |
| 3 | **FR-016 / FR-015** | TC-017, TC-016, TC-018 → TC-060, TC-061 | ปลายทางของ card_no ทั้งหมด — ทั้ง log และตาราง (F-002/F-003) |
| 4 | **FR-002** | TC-002, TC-026, TC-027 → TC-067 | ประตูแรกของข้อมูล; metachar จากต้นทางที่ batch ไม่ควบคุมคุณภาพ |
| 5 | **FR-014** | TC-015, TC-041 → *(รอ F-001)* TC-084/085/086 **หรือ** — | ช่องทางส่งจริง — **แต่ครึ่งหนึ่งของ TC ยังตัดสินไม่ได้** |
| 6 | **FR-013** ⚠ | *(รอ F-001)* TC-077…083 **หรือ** ลบทั้งชุด | **ห้ามรันคู่กับ FR-014 API-path** |
| 7 | **FR-011a** | TC-036 | card_no → ไม่พบชื่อ → ต้องไม่ส่งข้อความไม่มีชื่อ |
| 8 | **FR-021** | TC-068 → TC-024 | รายงานเป็น sink ของ PII อีกจุด |

### รอบที่ 2 — P1

| ลำดับ | FR | TCs | เหตุผล |
|---|---|---|---|
| 9 | **FR-010** | TC-011 → **TC-056** | check-then-act ไม่มี lock ⇒ TOCTOU ละเมิด SC-003 โดยตรง |
| 10 | **FR-009** | TC-010 → TC-046, **TC-049** | dedup key ไม่มี normalization rule ⇒ ส่งซ้ำได้ง่าย |
| 11 | **FR-020** | TC-022 → **TC-055**, TC-073 | idempotency คือสัญญาหลักของ Manual Fix |
| 12 | **FR-012 / FR-012a** | TC-014, TC-037 → TC-064, TC-047 | ลิงก์หมดอายุ/ลิงก์อันตราย ถึงลูกค้าทุกรายพร้อมกัน |
| 13 | **FR-008 / FR-008a / FR-008b** | TC-033, TC-034, TC-035 → TC-069, TC-070 | เส้นแบ่ง skip-รายตัว vs หยุด-ทั้งรอบ (SC-006) |
| 14 | **FR-018** | TC-020 → TC-074 | ถ้า alert ไม่ทำงาน ความล้มเหลวจะเงียบ (SC-004) |
| 15 | **FR-019** | TC-063 → TC-038, TC-021 | RBAC ก่อน usability |
| 16 | **FR-016a** | TC-039, TC-071 | reconcile ครบ (SC-007) |

### รอบที่ 3 — P2 / P3

FR-001 (TC-001, TC-053, TC-057) · FR-004 (TC-029, TC-050) · FR-011 (TC-012, TC-013, TC-043, TC-065) · FR-003 (TC-045, TC-028) · FR-020a (TC-023, TC-052) · FR-020b (TC-040) · FR-007 (TC-009) · FR-017 (TC-019) · UX (TC-075, TC-076)

---

## Cross-links

### P0/P1 FR ที่มี **ศูนย์** TC (coverage gap → route ไป `coverage`/`design`)

**ไม่มี** — FR ทั้ง 27 ข้อมี TC ครอบคลุมอย่างน้อย 1 ข้อ (ดู `coverage-review_csms-001-welcome-line.md` iteration 2 verdict `covered`)

### P0/P1 TC ที่ **ต้องไม่เหลือ `Not Run` ตอน `report`** (จะไหลเข้า Residual Risk §6 step 6)

**P0 (39 TCs)**: TC-002, TC-005, TC-006, TC-007, TC-008, TC-015, TC-016, TC-017, TC-018, TC-024, TC-025, TC-026, TC-027, TC-030, TC-031, TC-032, TC-036, TC-039, TC-041, TC-044, TC-051, TC-054, TC-059, TC-060, TC-061, TC-062, TC-066, TC-067, TC-068, TC-071, TC-072, TC-073, TC-076, TC-077…TC-088 *(disputed — ตามผลตัดสิน F-001)*

**P1 (สำคัญที่สุด 6 TCs ที่มักถูกข้าม)**: **TC-049** (dedup bypass), **TC-055** (daily+manual พร้อมกัน), **TC-056** (TOCTOU), **TC-057** (round overlap), **TC-063** (RBAC), **TC-064** (link injection)

### TC ที่ **execute ไม่ได้** จนกว่าจะปิด finding (11 TCs)

| TC | Finding | ติดตรงไหน |
|---|---|---|
| TC-042 | F-006 | ไม่มี FR/edge case รองรับ refer_no ผิดรูปแบบ |
| TC-043 | F-008 | ไม่มีปลายทางของ fallback chain |
| TC-054 | F-005 | ไม่มี volume + perf NFR |
| TC-060 | F-002 / F-003 | ไม่มี PII logging NFR |
| TC-061 | F-002 / F-003 | ไม่มี access/retention NFR |
| TC-066 | F-002 | ไม่มี TLS / data-minimization NFR |
| TC-068 | F-002 | ไม่ระบุขอบเขต/สิทธิ์ของรายงาน |
| TC-080 | F-010 | ไม่มี CSV column contract |
| TC-083 | F-002 | ไม่มี file/PII NFR (= checklist G2) |
| TC-088 | F-005 | ไม่มี SLA/volume |
| TC-079 | F-009 | FR-013 ขัดกับตัวอย่างของตัวเอง (พ.ศ. vs ค.ศ.) |

### ความเสี่ยงที่ไม่มี requirement รองรับ (ไม่ใช่ coverage gap — เป็น **requirement gap**)

| ความเสี่ยง | ผลถ้าเกิดจริง | route |
|---|---|---|
| dedup key ไม่มี normalization rule | ลูกค้าได้ SMS ซ้ำ ⇒ ละเมิด SC-003 | `/speckit-checklist` |
| FR-010 check-then-act ไม่มี lock | double-send ใน race ⇒ ละเมิด SC-003 | SA/Dev design decision |
| ไม่มี concurrency policy (daily vs Manual Fix vs overlap) | ส่งซ้ำ / รอบชนกัน | SA/Dev design decision |
| cf_catalog ลิงก์ไม่มี whitelist | ผู้แก้ config ส่งลิงก์อะไรก็ได้ถึงลูกค้าทุกราย | `/speckit-checklist` |
| mobile_no ไม่มี format validation | ส่งไปเบอร์ผิดรูปแบบ / เสีย credit ฟรี | `/speckit-checklist` |
| opt-out (1503) ไม่ผูก Do Not Contact | ลูกค้ายกเลิกแล้วยังได้รับซ้ำ ⇒ PDPA | Platform Owner (F-004) |

---

## สรุป

- **P0 = 8 FR / P1 = 9 FR / P2 = 8 FR / P3 = 2 FR** — การกระจายเอียงไปทาง P0/P1 อย่างมีนัยสำคัญ เพราะ **ทุก FR ที่แตะ `card_no` ถูกยกเป็น P0 โดยกฎ PDPA** และ **มี finding เปิดอยู่ 10 ข้อ** (F-001…F-010) ที่ดัน Historical-defect ขึ้นทั้งกระดาน
- **จุดเสี่ยงสูงสุด 3 อันดับ**: FR-013 (16) · FR-014 (16) · FR-006 (15) — สองข้อแรกคือ**คู่ที่ขัดแย้งกันเอง** (F-001) กล่าวคือ **ความเสี่ยงอันดับ 1 ของ feature นี้ไม่ใช่ bug แต่คือการที่ยังไม่มีใครตัดสินว่าจะสร้างอะไร**
- **ห้ามเริ่ม `execute`** จนกว่า F-001 (disputed interface), F-002 (security NFR) และ F-003 (constitution compensating control) จะปิด

**Next**: `/speckit-qa coverage` → `/speckit-qa test-data` (ทั้งคู่รันแล้ว — ดู `00-INDEX.md`) · `execute` อยู่นอก scope (ไม่มีระบบให้รัน)

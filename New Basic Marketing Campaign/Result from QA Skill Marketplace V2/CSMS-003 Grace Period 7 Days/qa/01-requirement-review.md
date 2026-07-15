# 01 — Requirement Review (QA Review Report)

**Feature:** CSMS-003 — Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"
**Slug:** `csms-003-grace-period` · **Skill:** `/requirement-review` (Leg A) · **Date:** 2026-07-09
**Read scope (ตามจริง):** อ่าน `spec.md` เต็มทั้งไฟล์. **ไม่มี** `data-model.md` / `contracts/*` / mockup / diagram / `sources/` ใน feature folder (spec.md เป็น snapshot เดียว) → ไม่ได้ cross-check กับไฟล์อื่นเพราะไม่มี (ประกาศกัน false-positive). Atom sweep → `00b-atom-inventory.md` (62 atoms).

---

## 1. Summary
- **Overall Quality Score: 82 / 100**
- **Overall Risk Level: Medium**
- spec เขียนดีมากในเชิงโครงสร้าง: มี Clarifications 5 ข้อที่ปิด ambiguity สำคัญ (การนับวัน, per-policy fan-out, mobile fallback, cardNo, LINE abnormal), FR ครบ 14 ข้อ, acceptance scenarios ชัด, edge cases ครอบคลุม. จุดอ่อนหลักคือ **detail ระดับ integration ที่ทดสอบได้ยังขาด**: โครง CSV, era ของ timestamp, สถานะที่ dedup ตรวจ, กรณี LINE `E00 & isBlockLine=true`, และนิยาม refer_no "ผิดรูปแบบ" — ล้วนเป็น gap ที่ downstream ต้องปิดก่อน execute จริง.

## 2. Requirement Issues List

| ID | Type | Severity | Description | Impact | Suggestion |
|---|---|---|---|---|---|
| **RQ-001** | CONFLICT_REQUIREMENT / MISSING_REQUIREMENT | Major | FR-007/US2-AC2 นิยามเฉพาะ `E00 & isBlockLine=false → คัดออก` แต่ไม่ระบุ `E00 & isBlockLine=true` | dev/test ไม่รู้จะคัดเข้า/ออก/skip → เสี่ยงส่งผิดกลุ่มหรือ skip เงียบ | ระบุ branch `E00 & isBlockLine=true` ชัด (น่าจะ = ลงทะเบียนแต่บล็อก LINE → ยังส่ง SMS ได้?) |
| **RQ-002** | DATA_DEFINITION_GAP / BUSINESS_RULE_INCONSISTENCY | Major | FR-008 dedup key = `policy_no+due_date` แต่ไม่ระบุว่าตรวจประวัติที่ `sms_sent_status` ใด (เฉพาะ 'S' หรือรวม 'F') | ถ้ารวม 'F': รายการที่ skip ('F' จาก FR-004a/006a/007) จะถูกกันไม่ให้ส่งซ้ำ → Manual Fix (FR-014) ซ่อมไม่ได้ ขัดเจตนา audit-แล้วซ่อม | ระบุว่า dedup นับเฉพาะ `'S'` (ส่งสำเร็จ) — 'F' ต้องยังส่งใหม่ได้ผ่าน Manual Fix |
| **RQ-003** | DATA_DEFINITION_GAP | Major | FR-009 ให้ชื่อไฟล์แต่ไม่ระบุ schema ภายใน CSV (คอลัมน์/ลำดับ/header/delimiter/escape) | ตรวจ output CSV ไม่ได้; automation assert ไม่ได้; ส่ง Gateway อาจ mapping ผิด | เพิ่มตาราง column spec ของ CSV (ชื่อ, ลำดับ, ตัวอย่างแถว) |
| **RQ-004** | AMBIGUOUS_REQUIREMENT | Major | FR-009 `YYMMDDhhmmss` ตัวอย่าง `690519100000` = พ.ศ.2569 ขณะ `${var2/var3}` ในข้อความใช้ ค.ศ.2026 | ชื่อไฟล์ผิด era = Gateway/monitoring จับไฟล์ผิด; ความไม่สมมาตรอาจเป็น bug | ยืนยัน era ของ timestamp ชื่อไฟล์ (พ.ศ.) และ era ของ date ในข้อความ (ค.ศ.) อย่างชัดแจ้ง |
| **RQ-005** | NON_TESTABLE_REQUIREMENT | Major | Edge case "SMS Gateway ตอบ `refer_no` ผิดรูปแบบ → 'F'" แต่ไม่นิยามรูปแบบที่ถูกต้อง | เขียน expected/oracle ไม่ได้ → TC เป็น assumption | ระบุ pattern/ความยาว refer_no ที่ valid |
| **RQ-006** | AMBIGUOUS_REQUIREMENT | Minor | FR-013 "ทำงานไม่เสร็จตามเวลาที่กำหนด" ไม่มีตัวเลข SLA/timeout | ทดสอบ trigger email แบบ time-based ไม่ได้ | ระบุ threshold (เช่น ไม่จบภายใน N นาทีหลัง 10:00) |
| **RQ-007** | INCOMPLETE_ACCEPTANCE_CRITERIA | Minor | Assumption LINE API ล่ม retry ≤3 "แบบเว้นช่วง" ไม่ระบุช่วงเวลา | reproduce retry timing ไม่ได้ | ระบุ backoff interval |
| **RQ-008** | DATA_DEFINITION_GAP | Minor | `created_by` ใน log ไม่ระบุค่าที่ใช้สำหรับ auto vs manual | audit trail แยกที่มาไม่ได้ | ระบุค่า (SYSTEM_BATCH / IT_ADMIN username) |
| **RQ-009** | AMBIGUOUS_REQUIREMENT | Minor | เวลา 10:00 ไม่ระบุ timezone | boundary การนับวันข้าม timezone อาจเพี้ยน | ระบุ Asia/Bangkok |
| **RQ-010** | DATA_DEFINITION_GAP | Minor | `[department]/[SystemCode]/[Category]` = MKT/CSMS/MKTGracePeriod7Days มาจากตัวอย่างเท่านั้น | ชื่อไฟล์อาจผิดถ้าค่าจริงต่าง | ยืนยันเป็นค่าตายตัวตาม spec |

## 3. Missing Test Scenarios (ควรมี — ไม่ใช่เขียน TC จริง)
- **Positive:** date-window 7 พอดี (แต่ละ policy type ORD/IND/PA); mobile1 มีค่า → ใช้ mobile1; LINE E02 → ส่ง; per-policy fan-out (1 ลูกค้า 2 policy → 2 SMS); success → log 'S'+refer_no.
- **Negative/skip:** cardNo not found → skip+F; mobile1&2 ว่าง → skip+F; LINE E13/empty → skip+F; DNC ORD='1' / IND-PA='4' → คัดออก; E00&isBlockLine=false → คัดออก; refer_no malformed → 'F'.
- **Boundary:** diff 6/7/8; grace_end ตรงวันหยุด (ไม่ scheduled); reminder_days config = ค่าอื่น/ไม่พบ→default 7; ข้อความยาว/แทนค่า var ครบ.
- **Integration:** LINE API ล่มทั้งระบบ → retry ≤3 → หยุดรอบ+email; CSV สร้างไม่สำเร็จ → รอบ fail+email; Gateway timeout/5xx → 'F'.
- **State/idempotency:** dedup ใน-รอบ (policy_no+due_date เดียวกันไม่ส่งซ้ำ); re-run วันถัดไป due_date เดิม → ไม่ซ้ำ; Manual Fix re-run → ไม่ส่งซ้ำรายการ 'S'.

## 4. Questions for SA/BA
ดู RQ-001..RQ-010 ในตาราง §2 (มี Suggestion แนบ). **Blocker ต่อ automation/execution:** RQ-002 (dedup ตรวจ status ใด), RQ-003 (CSV schema). ที่เหลือทำ TC แบบ `[ASSUMPTION]` ได้ก่อน แต่ต้องปิดก่อน sign-off.

## 5. NFR presence
มี NFR ระบุชัด (SC-001 perf ≤5นาที/10k, SC-002 99% refer_no, SC-005 email ≤15นาที, SC-006 Manual Fix ≤1ชม.) → **route ออก functional track** (perf/reliability). ไม่ mark `MISSING_REQUIREMENT` เพราะ SA ระบุแล้ว; แต่ SC-006/SC-001 เป็น time-based ที่รอบ functional วัดไม่ได้ → บันทึกใน `NFR-routing` (03). security/a11y ไม่เกี่ยว (batch backend).

## 6. Testability Score
- **Testability: 78 / 100**
- **Reason:** business rule หลักทดสอบได้ชัด (date-window, filter, dedup, fan-out มี acceptance scenario + ค่าเป๊ะ). หัก ~22 จาก: (1) CSV schema/era ไม่ระบุ → assert output ไม่ได้ (RQ-003/004); (2) dedup-status ambiguity (RQ-002) ทำให้ idempotency oracle ไม่แน่นอน; (3) refer_no/ SLA/backoff numeric ขาด → time/format-based ทดสอบไม่ได้; (4) integration ต้องพึ่ง mock 3 ระบบ (LINE/ESB/Gateway) + env ที่ยังไม่มี.

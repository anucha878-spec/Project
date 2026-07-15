# 02 — E2E Test Patterns (structured flow artifact)

**Feature:** CSMS-003 — Grace Period 7 วัน · **Skill:** `/e2e-flow-designer` · **Date:** 2026-07-09
**Input:** `01-requirement-review.md`, `00b-atom-inventory.md`, `spec.md`

## 1. Summary
- **Flows: 6** (1 primary batch pipeline + 5 error/exception/manual paths)
- **State machine: 1** (วงจรของกรมธรรม์ 1 ฉบับต่อรอบ) — **9 states, 14 transitions (valid 12 / invalid 2)**
- **Scenario groups:** positive/negative/edge/boundary-trigger/role-variant ต่อ flow (ตาราง §4)
- **Coverage note:** flow ครอบ FR-001..FR-014 + atom กลุ่ม A–G ครบ. atom ที่เป็น RQ (AT-025/034/039/040/052/054/058/027/002) → mark `[ASSUMPTION]` ใน transition/guard ที่เกี่ยว (ห้ามเดา behavior).
- **Flow defects พบ:** `AMBIGUOUS_GUARD` ที่ node LINE-check (RQ-001 E00&isBlockLine=true), `UNDEFINED_STATE_TRANSITION`/guard ที่ dedup (RQ-002 ตรวจ status ใด) → ส่งกลับ 01.

## 2. User Journeys

#### FLOW-001: รอบ batch อัตโนมัติ คัดกรอง → ส่ง SMS ราย policy (primary/happy)
- **Actor:** SYSTEM_BATCH · **Trigger:** scheduler 10:00 น. ทุกวัน · **Pre-condition:** DWConsole + LINE + Gateway พร้อม, `SMS_GRACE_PERIOD_LOG` มีอยู่
- **Steps (atomic, ต่อ policy หลังดึงชุดข้อมูล):**
  1. อ่าน `reminder_days` จาก `cf_catalog` (`REMINDER_DAYS`/`CSMS_GP_7Days`); ไม่พบ → 7
  2. ดึงกรมธรรม์จาก `ili_policy_master`+`ili_notification_letter`, คำนวณ `grace_end_date`
  3. คัดเฉพาะ **Inforce** และ `grace_end_date − current_date = 7` (วันปฏิทิน, exclusive)
  4. คัดออก DNC (ORD `remark_code='1'`, IND/PA `='4'`)
  5. map `policy_no → cardNo`
  6. เรียก LINE `cisappapi channels='LINE'`; `E02` → คัดเข้า
  7. เลือกเบอร์: `mobile1` (ว่าง→`mobile2`)
  8. กันส่งซ้ำด้วย key `policy_no+due_date` (คัดออกถ้าเคยส่งในรอบ Due เดียวกัน)
  9. สร้าง CSV (UTF-8, ชื่อมาตรฐาน) แทนค่า `${var1..3}` ในข้อความ
  10. นำส่ง CSV → SMS Gateway (ESB), รับ `refer_no` + สถานะรายรายการ
  11. บันทึก `SMS_GRACE_PERIOD_LOG` (`sms_sent_status='S'` + `refer_no`)
- **Expected end-state:** ทุก policy ที่เข้าเงื่อนไขมี SMS 1 ข้อความ + log 'S'; **1 policy = 1 SMS** (ไม่ dedup รายคน)
- **Covers:** FR-001..FR-012 · AT-001,003,004,007,009,010,011,012,019,020,022,029,030,031,036-050

#### FLOW-002: skip รายรายการ (บันทึก 'F' — รอบทำงานต่อ) (error/exception)
- **Actor:** SYSTEM_BATCH · **Trigger:** เจอ record ผิดปกติระหว่าง FLOW-001
- **Branch → skip + log 'F' (ไม่ retry รายรายการ, ไม่หยุดรอบ):**
  - a) `cardNo` หาไม่พบ (FR-006a / AT-021)
  - b) `mobile1` และ `mobile2` ว่างทั้งคู่ (FR-004a / AT-014)
  - c) LINE ผลผิดปกติ `E13`/`channel` ว่าง/`isBlockLine` ว่าง/รหัสนอก E02,E00 (FR-007 / AT-024)
  - d) SMS Gateway ตอบ timeout/5xx หรือ `refer_no` ผิดรูปแบบ (Assumption/Edge / AT-052,053)
- **Expected end-state:** record นั้น log `'F'` (ไม่มี refer_no), รอบดำเนินต่อ record ถัดไป, ให้ IT Admin Manual Fix ย้อนหลัง
- **Covers:** FR-004a,006a,007,012 · AT-014,021,024,051,052

#### FLOW-003: คัดออก (filtered out — ไม่ส่ง ไม่ต้อง log 'F') (negative/positive-boundary)
- **Actor:** SYSTEM_BATCH
- **Branch คัดออก:** ไม่ Inforce · diff ≠ 7 · ติด DNC · LINE `E00 & isBlockLine=false` (ลงทะเบียนแล้ว) · เคยส่งแล้วในรอบ Due เดียวกัน (dedup)
- **Expected end-state:** ไม่อยู่ในกลุ่มเป้าหมาย, ไม่ส่ง SMS. (หมายเหตุ: การคัดออกเหล่านี้ **ไม่** บันทึก 'F' — ต่างจาก skip; spec แยก 2 พฤติกรรมชัด)
- **Covers:** FR-004,005,007,008 · AT-005,006,010,016,017,023,032

#### FLOW-004: ความล้มเหลวระดับรอบ → email + Manual Fix (error)
- **Actor:** SYSTEM_BATCH → IT team/User
- **Trigger:** LINE API ล่มทั้งระบบ (retry ≤3 เว้นช่วง แล้วไม่สำเร็จ) `[ASSUMPTION backoff=RQ-007]` · CSV สร้างไม่สำเร็จ (disk/สิทธิ์) · batch ไม่เสร็จตามเวลา `[ASSUMPTION SLA=RQ-006]`
- **Steps:** ตรวจพบ failure ระดับรอบ → หยุดรอบ → ส่ง email ทีม IT Dev + กลุ่มผู้ใช้งาน (รายละเอียด error + สรุป log) ภายใน 15 นาที
- **Expected end-state:** รอบหยุด, email ส่ง, กลุ่มที่ค้างรอ Manual Fix
- **Covers:** FR-013 · AT-026,056,057,059 · Edge (API-down, CSV-fail)

#### FLOW-005: Manual Fix ย้อนหลัง (idempotent re-run) (secondary/role-variant)
- **Actor:** IT_ADMIN · **Trigger:** เข้า Admin Dashboard กลาง CSMS เลือกวันที่ที่ต้องซ่อม
- **Steps:** เลือกวันที่ → สั่ง Manual Batch → ระบบดึง/คำนวณข้อมูลของวันนั้นใหม่ → **ตรวจ dedup (FR-008)** ข้ามรายการที่เคยส่งสำเร็จ → ส่งเฉพาะที่ค้าง → log
- **Expected end-state:** กลุ่มค้างได้รับ SMS ครบ, **ไม่ส่งซ้ำรายการ 'S'** เดิม, audit ของการรัน Manual ถูกบันทึก
- **Covers:** FR-014 · AT-062,063,064 · `[ASSUMPTION RQ-002: dedup ตรวจ 'S' เท่านั้น เพื่อให้ 'F' ซ่อมได้]`

#### FLOW-006: per-policy fan-out (business-rule critical)
- **Actor:** SYSTEM_BATCH · **Trigger:** ลูกค้า 1 คน (cardNo/เบอร์เดียว) มีหลายกรมธรรม์เข้าเงื่อนไข 7 วันในรอบเดียว
- **Steps:** แต่ละ policy เดินผ่าน FLOW-001 ของตัวเอง (ข้อความอ้าง policy_no/due_date/grace_end_date ราย policy) → dedup ที่ระดับ `policy_no+due_date` (ไม่ใช่ราย cardNo)
- **Expected end-state:** ลูกค้าได้รับ **N ข้อความ = N กรมธรรม์เข้าเงื่อนไข** (MUST NOT dedup รายลูกค้า)
- **Covers:** FR-008 · US1-AC5 · AT-029,030,031

## 3. State Machine — วงจรกรมธรรม์ 1 ฉบับ ต่อ 1 รอบ batch

States: `S0 ดึงเข้ามา` · `S1 ผ่านเกณฑ์วัน+Inforce` · `S2 ผ่าน DNC` · `S3 map cardNo แล้ว` · `S4 ผ่าน LINE (E02)` · `S5 เลือกเบอร์ได้` · `S6 ผ่าน dedup` · `S7-SENT (log 'S')` · `SKIP-F (log 'F')` · `EXCLUDED (คัดออก เงียบ)`

| From | Event | To | Guard/Condition | Actor | Valid? |
|---|---|---|---|---|---|
| S0 | ตรวจวัน+สถานะ | S1 | Inforce & diff=7 | SYSTEM_BATCH | ✅ |
| S0 | ตรวจวัน+สถานะ | EXCLUDED | ไม่ Inforce หรือ diff≠7 | SYSTEM_BATCH | ✅ |
| S1 | ตรวจ DNC | S2 | ไม่ติด remark | SYSTEM_BATCH | ✅ |
| S1 | ตรวจ DNC | EXCLUDED | ORD='1' / IND-PA='4' | SYSTEM_BATCH | ✅ |
| S2 | map cardNo | S3 | พบ cardNo | SYSTEM_BATCH | ✅ |
| S2 | map cardNo | SKIP-F | cardNo ไม่พบ | SYSTEM_BATCH | ✅ |
| S3 | เรียก LINE | S4 | ผล = E02 | SYSTEM_BATCH | ✅ |
| S3 | เรียก LINE | EXCLUDED | E00 & isBlockLine=false | SYSTEM_BATCH | ✅ |
| S3 | เรียก LINE | SKIP-F | E13/empty/รหัสอื่น | SYSTEM_BATCH | ✅ |
| S3 | เรียก LINE | `[ASSUMPTION]` | **E00 & isBlockLine=true** → undefined (RQ-001) | SYSTEM_BATCH | ❓ |
| S4 | เลือกเบอร์ | S5 | mobile1 หรือ mobile2 มีค่า | SYSTEM_BATCH | ✅ |
| S4 | เลือกเบอร์ | SKIP-F | mobile1&2 ว่างทั้งคู่ | SYSTEM_BATCH | ✅ |
| S5 | ตรวจ dedup | S6 | ไม่เคยส่งใน policy_no+due_date | SYSTEM_BATCH | ✅ |
| S5 | ตรวจ dedup | EXCLUDED | เคยส่งแล้ว (RQ-002: 'S' เท่านั้น?) | SYSTEM_BATCH | ✅ |
| S6 | ส่ง Gateway | S7-SENT | ได้ refer_no valid | SYSTEM_BATCH | ✅ |
| S6 | ส่ง Gateway | SKIP-F | timeout/5xx/refer_no ผิดรูปแบบ | SYSTEM_BATCH | ✅ |
| S7-SENT | Manual re-run | S7-SENT (no-op) | dedup กัน (idempotent) | IT_ADMIN | ✅ |
| EXCLUDED | ส่งซ้ำ | — | ไม่มี transition ออก | — | ❌ invalid |

**Total transitions = 14 (valid 12 · invalid 1 [EXCLUDED→ส่ง] · undefined/RQ 1 [E00&isBlockLine=true])** = ตัวหารให้ 03 derive state-transition TC + 04 audit.

## 4. Scenario Groups (per flow)

| Flow | Positive | Negative | Edge | Boundary-trigger | Role-variant |
|---|---|---|---|---|---|
| FLOW-001 | ส่งสำเร็จ ORD/IND/PA (E02, mobile1) | — | reminder_days config=อื่น/ไม่พบ→7 | diff=7 พอดี | SYSTEM_BATCH |
| FLOW-002 | — | cardNo ไม่พบ; mobile ว่างคู่; LINE E13/empty; Gateway 5xx; refer_no ผิดรูปแบบ | mobile1 ว่าง→mobile2 | — | SYSTEM_BATCH |
| FLOW-003 | E00&isBlockLine=false คัดออก | ไม่ Inforce; DNC | diff=6/8; grace_end วันหยุด | diff 6/7/8 | — |
| FLOW-004 | — | LINE ล่มทั้งระบบ→retry→หยุด+email; CSV fail | batch ไม่เสร็จตามเวลา | retry ≤3 | SYSTEM_BATCH→IT/User |
| FLOW-005 | Manual Fix ส่งกลุ่มค้าง | — | re-run ไม่ส่งซ้ำ 'S' | — | **IT_ADMIN** |
| FLOW-006 | 1 ลูกค้า 2 policy → 2 SMS | (MUST NOT) dedup รายคน | 2 policy ต่าง due_date | — | SYSTEM_BATCH |

## 5. Cross-System / Async Dependency Map

| Flow step | External/Service | Sync/Async | Race/Timing risk | External-fail behavior |
|---|---|---|---|---|
| FLOW-001.6 | LINE `cisappapi@11.100.8.44` | Sync (≤5s สมมติ) | ผลตอบช้า/ค่าว่าง → misclassify | รายรายการผิดปกติ→skip+F; ทั้งระบบล่ม→retry≤3→หยุด+email |
| FLOW-001.2 | DWConsole (DB) | Sync | grace_end ถูกปรับหลังดึง → ยึด ณ เวลาประมวลผล (AT-061) | ดึงไม่ได้ = รอบ fail+email |
| FLOW-001.10 | ESB → SMS Gateway | Sync (≤30s สมมติ) | refer_no ผิดรูปแบบ/ตอบช้า | timeout/5xx→'F' ไม่ retry auto (Manual Fix) |
| FLOW-001.9 | File system (CSV) | Sync | disk/สิทธิ์ | สร้างไม่สำเร็จ = รอบ fail+email |
| FLOW-004 | Email/SMTP | Async | email ไม่รับประกันผล | บันทึกความพยายาม (AT-065) |

## 6. Handoff Notes → 03
- **BVA:** หน้าต่างวัน `diff ∈ {5,6,7,8,9}` (โฟกัส 6/7/8) + grace_end ตรงวันหยุด. (FLOW-003)
- **Decision Table:** cond = {Inforce, diff=7, ไม่ติด DNC, cardNo พบ, LINE-result∈{E02/E00-false/abnormal}, mobile มีค่า, ยังไม่เคยส่ง} → derive rules (คัดเข้า/คัดออก/skip-F). (FLOW-001/002/003)
- **State-transition:** 12 valid transitions = 0-switch baseline บังคับ; invalid EXCLUDED→ส่ง = negative TC; idempotent no-op ที่ S7. (§3)
- **per-policy fan-out:** FLOW-006 = TC เฉพาะ (1 ลูกค้า→N SMS, ห้าม dedup รายคน).
- **`[ASSUMPTION]`/RQ ที่ต้องให้ SA ตอบก่อน finalize:** RQ-001 (E00&isBlockLine=true guard), RQ-002 (dedup ตรวจ status ใด — กระทบ FLOW-005 idempotency), RQ-003/004 (CSV schema/era — กระทบ assert output ของ FLOW-001.9).

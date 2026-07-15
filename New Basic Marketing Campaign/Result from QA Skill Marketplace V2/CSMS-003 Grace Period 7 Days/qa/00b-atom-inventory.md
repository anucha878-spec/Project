# 00b — Atom Inventory (QA-owned testable-atom ledger)

**Feature:** CSMS-003 — Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"
**Slug:** `csms-003-grace-period` · **Skill:** `/requirement-review` (Leg A) · **Date:** 2026-07-09
**Source read (scope):** `spec.md` (เต็มทั้งไฟล์). ไม่มี `data-model.md` / `contracts/` / mockup / `sources/` ใน feature นี้ (spec.md เป็น snapshot เดียว) → ไม่มีภาพ/diagram ให้เปิด (ประกาศตามจริงกัน false-positive).

**Status legend:** ✅ specified (ระบุใน spec) · ❓ RQ (SA ไม่ระบุ → ต้องถาม, ห้ามเดา) · 🔒 assumption (มีแต่จากตัวอย่าง/ที่อื่น ยังไม่ยืนยัน → RQ)

**Summary:** 62 atoms — ✅ 48 · ❓ RQ 8 · 🔒 assumption 6. RQ ที่ต้องยิงกลับ SA = 10 (RQ-001..RQ-010, บางตัวครอบหลาย atom). ทุก atom ✅ → downstream (03) ต้องมี ≥1 TC; atom ❓/🔒 → TC `[ASSUMPTION]` + ชี้ RQ ไม่ถือว่ายืนยัน.

---

## กลุ่ม A — การรัน batch & การคำนวณหน้าต่างวัน (FR-001..FR-003)

| Atom ID | FR/Source | Testable detail (atom) | สถานะ | RQ |
|---|---|---|---|---|
| AT-001 | FR-001 | batch รันอัตโนมัติ **ทุกวัน เวลา 10:00 น.** (1 รอบ/วัน) | ✅ | — |
| AT-002 | FR-001 / Assumption | timezone ของเวลา 10:00 (ICT?) ไม่ระบุใน spec | ❓ | RQ-009 |
| AT-003 | FR-003 / Clarif. | กฎหน้าต่างวัน = `grace_end_date − current_date = 7` **วันปฏิทิน**, ไม่รวมวันปัจจุบัน, ไม่พิจารณาเวลาในวัน | ✅ | — |
| AT-004 | US1-AC1 | boundary: diff = **7 พอดี** → คัดเข้า (เช่น grace_end 2026-05-26 รัน 2026-05-19) | ✅ | — |
| AT-005 | US1-AC2 | boundary: diff = **6** → คัดออก | ✅ | — |
| AT-006 | US1-AC2 | boundary: diff = **8** → คัดออก | ✅ | — |
| AT-007 | FR-003 | จำนวนวันแจ้งเตือนตั้งค่าได้จาก `cf_catalog` (`config_type='REMINDER_DAYS'`, `config_value1='CSMS_GP_7Days'`) | ✅ | — |
| AT-008 | Assumption | `cf_catalog` ไม่พบค่า → **default = 7** | 🔒 | — |
| AT-009 | FR-002 | ดึงข้อมูลจาก `public.ili_policy_master` + `public.ili_notification_letter` (DWConsole) เพื่อคำนวณ `grace_end_date` | ✅ | — |
| AT-010 | FR-004 / US1-AC4 | คัดเฉพาะสถานะ **Inforce**; ไม่ใช่ Inforce → คัดออกไม่ว่า grace_end จะเป็นค่าใด | ✅ | — |
| AT-011 | scope / US1-AC3 | ครอบคลุมประเภทกรมธรรม์ **ORD / IND / PA** ทั้งสาม | ✅ | — |

## กลุ่ม B — การเลือกเบอร์ส่ง (FR-004a)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-012 | FR-004a | ใช้ `mobile1` เป็นเบอร์หลัก | ✅ | — |
| AT-013 | FR-004a | `mobile1` ว่าง/NULL → ใช้ `mobile2` (สำรอง) | ✅ | — |
| AT-014 | FR-004a | `mobile1` และ `mobile2` ว่าง/NULL ทั้งคู่ → **skip + log `sms_sent_status='F'`** (รอบทำงานต่อ) | ✅ | — |
| AT-015 | Key Entity | เบอร์ที่ใช้ส่งจริงบันทึกเป็น `mobile_no` ใน log | ✅ | — |

## กลุ่ม C — การคัดกรอง Do Not Contact & LINE (FR-005..FR-007)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-016 | FR-005 | ORD ที่ `ili_policy_remark.remark_code='1'` → คัดออก | ✅ | — |
| AT-017 | FR-005 | IND/PA ที่ `remark_code='4'` → คัดออก | ✅ | — |
| AT-018 | FR-005 | แหล่ง remark = `public.ili_policy_remark` | ✅ | — |
| AT-019 | FR-006 | เรียก `cisappapi` ที่ `11.100.8.44` ด้วย `channels='LINE'` | ✅ | — |
| AT-020 | FR-006a | map `policy_no → cardNo` จากข้อมูลลูกค้าก่อนเรียก LINE | ✅ | — |
| AT-021 | FR-006a | `cardNo` หาไม่พบ → **skip + log 'F'** (รอบทำงานต่อ, ถือเป็นสัญญาณข้อมูลผิดปกติ) | ✅ | — |
| AT-022 | FR-007 | LINE `E02` (ไม่พบ/ยังไม่ลงทะเบียน) → **คัดเข้า** | ✅ | — |
| AT-023 | FR-007 | LINE `E00` และ `isBlockLine=false` (ลงทะเบียนแล้ว) → **คัดออก** | ✅ | — |
| AT-024 | FR-007 | ผลผิดปกติราย record (`E13` / `channel` ว่าง / `isBlockLine` ว่าง / รหัสนอก E02,E00) → **skip + log 'F'**, ไม่ retry รายรายการ, รอบทำงานต่อ | ✅ | — |
| AT-025 | FR-007 | `E00` **และ `isBlockLine=true`** → พฤติกรรมไม่ระบุ (spec ครอบเฉพาะ isBlockLine=false) | ❓ | RQ-001 |
| AT-026 | Edge/Assumption | LINE API ล่มทั้งระบบ → retry ≤3 ครั้งแบบเว้นช่วง แล้ว **หยุดรอบ + email** | 🔒 | — |
| AT-027 | Assumption | ระยะเวลาเว้นช่วง (backoff) ระหว่าง retry ไม่ระบุ | ❓ | RQ-007 |
| AT-028 | Assumption | LINE API ตอบภายใน 5 วินาที (สมมติฐาน, ไม่ทดสอบระดับ data) | 🔒 | — |

## กลุ่ม D — การกันส่งซ้ำ / per-policy fan-out (FR-008)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-029 | FR-008 | ส่ง **1 ข้อความต่อกรมธรรม์** ที่เข้าเงื่อนไข | ✅ | — |
| AT-030 | FR-008 / US1-AC5 | ลูกค้า 1 คน (เบอร์เดียว) หลายกรมธรรม์เข้าเงื่อนไข → ได้ SMS หลายข้อความ (**MUST NOT dedup รายลูกค้า**) | ✅ | — |
| AT-031 | FR-008 | dedup key = `policy_no + due_date` | ✅ | — |
| AT-032 | FR-008 / US5-AC1 | กรมธรรม์ที่เคยแจ้งเตือนในรอบ Due (`due_date`) เดียวกันแล้ว → คัดออกแม้เข้าเงื่อนไข 7 วัน | ✅ | — |
| AT-033 | US5-AC2 | รันวันถัดไป due_date เดิม → ไม่ถูกเลือกซ้ำ (idempotent ราย due) | ✅ | — |
| AT-034 | FR-008 | dedup ตรวจจากประวัติที่ `sms_sent_status` ใดบ้าง? (เฉพาะ 'S' หรือรวม 'F' ด้วย) — ไม่ระบุ; กระทบ Manual Fix ของรายการ 'F' | ❓ | RQ-002 |
| AT-035 | Assumption | นิยาม "รอบ Due เดียวกัน" = ค่า `due_date` ตรงกัน; due_date ต่างกัน = คนละรอบแม้ลูกค้าเดียวกัน | ✅ | — |

## กลุ่ม E — สร้างข้อความ & ไฟล์ CSV (FR-009, FR-010)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-036 | FR-009 | ไฟล์ CSV encoding **UTF-8** | ✅ | — |
| AT-037 | FR-009 | ชื่อไฟล์ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` | ✅ | — |
| AT-038 | FR-009 example | ค่า department=`MKT`, SystemCode=`CSMS`, Category=`MKTGracePeriod7Days` (มาจากตัวอย่างเท่านั้น) | 🔒 | RQ-010 |
| AT-039 | FR-009 example | `YYMMDDhhmmss` — ตัวอย่าง `690519100000` ใช้ปี **พ.ศ. (69=2569)** ขณะข้อความใช้ ค.ศ. → ยืนยัน era + ความไม่สมมาตร | ❓ | RQ-004 |
| AT-040 | FR-009 | **CSV column schema/ลำดับคอลัมน์/header** ไม่ระบุใน spec | ❓ | RQ-003 |
| AT-041 | FR-010 | `${var1}` = `policy_no` | ✅ | — |
| AT-042 | FR-010 / US3-AC3 | `${var2}` = `due_date` รูปแบบ **DD/MM/YYYY** (ค.ศ., ตัวอย่าง 12/04/2026) | ✅ | — |
| AT-043 | FR-010 / US3-AC3 | `${var3}` = `grace_end_date` รูปแบบ **DD/MM/YYYY** (ค.ศ., ตัวอย่าง 26/05/2026) | ✅ | — |
| AT-044 | US1 Example | ข้อความ SMS ตรงตาม template ที่ระบุเป๊ะ (แทนค่า var1-3 ครบ) | ✅ | — |
| AT-045 | Assumption | template Grace Period 7 วัน มีอยู่แล้วในระบบจัดการข้อความ, ไม่เปลี่ยนระหว่างประมวลผล | 🔒 | — |

## กลุ่ม F — นำส่ง SMS Gateway & บันทึก log (FR-011, FR-012)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-046 | FR-011 | นำส่งไฟล์ CSV → SMS Gateway ผ่าน Web Service (ESB) | ✅ | — |
| AT-047 | FR-011 | รับผลตอบกลับที่มี `refer_no` + สถานะการส่งรายรายการ | ✅ | — |
| AT-048 | FR-012 | บันทึก **ทุกรายการ** ที่เข้าขั้นตอนส่ง/ถูก skip ลง `SMS_GRACE_PERIOD_LOG` | ✅ | — |
| AT-049 | Key Entity | log fields ครบ: `id, policy_no, policy_type, mobile_no, sms_message, due_date, grace_end_date, reminder_days, sms_sent_status, refer_no, created_by, created_date` | ✅ | — |
| AT-050 | US4-AC1 | ส่งสำเร็จ → `sms_sent_status='S'` + `refer_no` ที่ได้รับ | ✅ | — |
| AT-051 | US4-AC2 | ส่งไม่สำเร็จ/ถูก skip → `sms_sent_status='F'` (ไม่มี refer_no) | ✅ | — |
| AT-052 | Edge | `refer_no` ผิดรูปแบบ → บันทึก 'F' — แต่ **นิยาม "ผิดรูปแบบ"/รูปแบบที่ถูกต้องไม่ระบุ** | ❓ | RQ-005 |
| AT-053 | Assumption | SMS Gateway ล้มเหลวชั่วคราว (timeout/5xx) → log 'F', ไม่ retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix) | 🔒 | — |
| AT-054 | Key Entity | ค่า `created_by` สำหรับรอบ batch vs manual ไม่ระบุ | ❓ | RQ-008 |
| AT-055 | SMS_..._LOG | ตาราง `SMS_GRACE_PERIOD_LOG` ต้องสร้างใหม่ (เฉพาะ batch นี้) | ✅ | — |

## กลุ่ม G — แจ้งเตือน & Manual Fix (FR-013, FR-014)

| Atom ID | FR/Source | Testable detail | สถานะ | RQ |
|---|---|---|---|---|
| AT-056 | FR-013 / US4-AC3 | batch ล้มเหลวระดับรอบทุกขั้นตอน → ส่ง email แจ้งทีม IT Development + กลุ่มผู้ใช้งาน พร้อมรายละเอียดข้อผิดพลาด + สรุป log | ✅ | — |
| AT-057 | SC-005 | email แจ้งภายใน **15 นาที** นับจากเวลาประมวลผลที่กำหนด | ✅ | — |
| AT-058 | FR-013 | เกณฑ์ "ทำงานไม่เสร็จตามเวลาที่กำหนด" (SLA/timeout numeric) ไม่ระบุตัวเลข | ❓ | RQ-006 |
| AT-059 | Edge | สร้างไฟล์ CSV ไม่สำเร็จ (disk/สิทธิ์) → ความล้มเหลวระดับรอบ → email + Manual Fix | ✅ | — |
| AT-060 | Edge | `grace_end_date` ตรงวันที่ batch ไม่ scheduled (วันหยุด) → กลุ่มที่พลาด ซ่อมผ่าน Manual Fix | ✅ | — |
| AT-061 | Edge | `grace_end_date` ถูกปรับ (ยืด/ลด) หลังส่งแล้ว → ยึดผลตรวจ ณ เวลาประมวลผลของรอบนั้น | ✅ | — |
| AT-062 | FR-014 / US4-AC4 | IT Admin สั่ง Manual Batch ย้อนหลังตามวันที่ ผ่าน Admin Dashboard กลาง CSMS | ✅ | — |
| AT-063 | FR-014 | Manual Batch **idempotent** — ไม่ส่งซ้ำรายการที่เคยส่งสำเร็จ (ตรวจด้วยกลไก FR-008) | ✅ | — |
| AT-064 | Roles | Manual รันได้เฉพาะ IT_ADMIN ที่มีสิทธิ์ + บันทึก audit ของการรัน Manual | ✅ | — |
| AT-065 | Assumption | email ส่งไป distribution list ที่ตั้งค่าไว้; ไม่รับประกันผลแต่บันทึกความพยายาม | 🔒 | — |

## กลุ่ม H — NFR / Measurable (SC-001..SC-007) — route ออก functional track

| Atom ID | SC | Testable detail | สถานะ | Route |
|---|---|---|---|---|
| AT-066 | SC-001 | perf: ประมวลผลเสร็จ ≤5 นาที ต่อ ≤10,000 รายการ/รอบ | ✅ (NFR) | perf track |
| AT-067 | SC-002 | 99% ของกรมธรรม์ที่คัดเลือกได้รับ `refer_no` | ✅ (NFR) | perf/reliability |
| AT-068 | SC-006 | Manual Fix ให้กลุ่มค้างครบภายใน 1 ชั่วโมง โดยไม่ส่งซ้ำ | ✅ (NFR) | ops/perf |
| AT-069 | SC-007 | เคารพความต้องการติดต่อ (DNC/LINE) 100% — ไม่ส่งผิดกลุ่ม | ✅ | functional (คลุมโดย AT-016..024) |

---

## RQ list (ยิงกลับ SA — QA ห้ามเดา)

| RQ ID | Type | Severity | Atom(s) | คำถาม |
|---|---|---|---|---|
| **RQ-001** | CONFLICT/MISSING_REQUIREMENT | Major | AT-025 | LINE ผลเป็น `E00` **และ `isBlockLine=true`** ควรทำอย่างไร? spec ครอบเฉพาะ `E00 & isBlockLine=false → คัดออก` — กรณี true ยังไม่นิยาม (คัดออก / skip+F / คัดเข้า?) |
| **RQ-002** | DATA_DEFINITION_GAP | Major | AT-034 | กลไก dedup (`policy_no+due_date`) ตรวจประวัติที่ `sms_sent_status` ใด? เฉพาะ `'S'` หรือรวม `'F'`? ถ้ารวม 'F' → รายการที่เคย skip ('F') จะถูกกันไม่ให้ส่งใหม่/Manual Fix ซ่อมไม่ได้ (ขัด FR-014 idempotent-แต่-ต้องซ่อมได้) |
| **RQ-003** | DATA_DEFINITION_GAP | Major | AT-040 | โครงสร้างไฟล์ CSV (รายชื่อคอลัมน์ / ลำดับ / มี header หรือไม่ / delimiter / การ escape) ไม่ระบุ — automation/manual ตรวจ CSV ไม่ได้ |
| **RQ-004** | AMBIGUOUS_REQUIREMENT | Major | AT-039 | `YYMMDDhhmmss` ในชื่อไฟล์ใช้ปีพ.ศ.หรือค.ศ.? ตัวอย่าง `690519...` = 2569 (พ.ศ.) ขณะ `${var2}/${var3}` ในข้อความใช้ ค.ศ. (2026) — ยืนยันว่าตั้งใจใช้ era ต่างกัน |
| **RQ-005** | NON_TESTABLE_REQUIREMENT | Major | AT-052 | รูปแบบ `refer_no` ที่ถือว่า "ถูกต้อง" คืออะไร (ความยาว/pattern)? นิยาม "ผิดรูปแบบ" ที่ทำให้บันทึก 'F' |
| **RQ-006** | AMBIGUOUS_REQUIREMENT | Minor | AT-058 | เกณฑ์เวลา/SLA ที่ถือว่า batch "ไม่เสร็จตามเวลาที่กำหนด" (นาที?) เพื่อ trigger email |
| **RQ-007** | INCOMPLETE_ACCEPTANCE_CRITERIA | Minor | AT-027 | ระยะเวลาเว้นช่วง (backoff) ระหว่าง retry LINE API ทั้งระบบล่ม (≤3 ครั้ง) เท่าไร |
| **RQ-008** | DATA_DEFINITION_GAP | Minor | AT-054 | ค่า `created_by` ใน `SMS_GRACE_PERIOD_LOG` สำหรับรอบ auto (`SYSTEM_BATCH`?) vs Manual (`IT_ADMIN`/username?) |
| **RQ-009** | AMBIGUOUS_REQUIREMENT | Minor | AT-002 | timezone อ้างอิงของเวลา 10:00 น. (Asia/Bangkok?) |
| **RQ-010** | DATA_DEFINITION_GAP | Minor | AT-038 | ค่าคงที่ `[department]/[SystemCode]/[Category]` (MKT/CSMS/MKTGracePeriod7Days) เป็นค่าตายตัวตาม spec หรือมาจากตัวอย่างเท่านั้น |

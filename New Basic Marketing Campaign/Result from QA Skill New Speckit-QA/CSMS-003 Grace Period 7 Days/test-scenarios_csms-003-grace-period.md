---
id: csms-003-grace-period
phase: qa
sub-phase: design (test scenarios + BDD)
spec-source: "Spec/Batch เพื่อส่ง Batch - SMS Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md (2026-07-09) + plan.md (2026-07-16)"
run-date: 2026-07-17
iteration: 2
total-tc: 89
---

# Test Scenarios — CSMS-003 "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน"

**Feature slug**: `csms-003-grace-period` · **Feature branch (spec)**: `004-gp7-sms-batch`
**System**: Centralized SMS (CSMS) — epirusapp monolith (Java 7 / Spring 3.2.2 / Camel 2.11.1), scheduled batch
**Scope of this design**: `spec.md` FR-001…FR-014 + SC-001…SC-007, `plan.md` technical constraints, `checklist.md` Gaps G1–G3.
**Execution status**: ทุก TC = `Not Run` — ไม่มีระบบ/โค้ดให้รันบนเครื่องนี้ (design-only pipeline; `execute`/`report` อยู่นอก scope)

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3

> **นี่คือข้อขัดแย้งระดับ P1 User Story ที่ยังไม่มีใครตัดสิน — อ่านก่อนนำ TC ชุดนี้ไปรัน**

`spec.md` และ `plan.md` ระบุ **กลไกนำส่ง SMS คนละแบบ** และไม่มีการ reconcile:

| ฝั่ง | เอกสาร | ข้อความอ้างอิง (ตรงตัว) |
|---|---|---|
| **CSV / file-based** | `spec.md` **FR-009** | "ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตามรูปแบบชื่อ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv`" |
| | `spec.md` **FR-011** | "ระบบ MUST นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB) และรับผลตอบกลับที่มี `refer_no`" |
| | `spec.md` **User Story 3 (P1)** | "สร้างไฟล์ CSV และนำส่ง SMS Gateway" — ทั้ง User Story พร้อม 3 Acceptance Scenarios |
| | `spec.md` US1 Example Data | ชื่อไฟล์ตัวอย่าง `MKT_CSMS_MKTGracePeriod7Days_690519100000.csv` |
| | `spec.md` Edge Cases | "สร้างไฟล์ CSV ไม่สำเร็จ (เช่น พื้นที่ดิสก์/สิทธิ์ไม่พอ) → ถือเป็นความล้มเหลวระดับรอบ ส่ง email แจ้งเตือน + Manual Fix" |
| **API / per-record** | `plan.md` §Constraints (บรรทัด ~39) | "**ไม่สร้างไฟล์ CSV** — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` (Clarification 2026-07-11, ตัดจาก spec เดิมที่อ้างอิงเอกสารต้นทาง V2/file-based)" |
| | `plan.md` §Summary | "ส่งทีละรายการผ่าน SMS Gateway V3 (`sendSmsOtp`, ไม่มี CSV)" |

**สถานะ**: `plan.md` อ้างว่ามี Clarification ลงวันที่ **2026-07-11** ที่ตัด CSV ออก — แต่ `spec.md` (แก้ไขล่าสุด 2026-07-09) **ไม่เคยถูกอัปเดตตาม** และ Clarifications section ของ `spec.md` มีเฉพาะ Session 2026-07-07 เท่านั้น **ไม่มีร่องรอยของ Clarification 2026-07-11 ใน spec.md เลย** → **User Story 3 ทั้ง Story (Priority P1) แขวนอยู่กับคำตัดสินนี้**

**ผลต่อการออกแบบเทส (ข้อยุติของผู้ใช้ 2026-07-17)**: ออกแบบ TC **ทั้งสองแนวทาง** และ flag ไว้ รอ SA/PO ตัดสิน

| ชุด | Tag | TC | ครอบคลุม |
|---|---|---|---|
| **CSV path** | `@disputed @csv-path` | TC-016, TC-017, TC-018, TC-036, TC-060, TC-074 (**6 TC**) | สร้างไฟล์ CSV, UTF-8, naming convention `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv`, แทนค่า `${var1}`/`${var2}`/`${var3}` ลงแถวใน CSV, นำส่งผ่าน ESB, สร้างไฟล์ไม่สำเร็จ → alert email, ไฟล์ที่ rest มี PII |
| **API path** | `@disputed @api-path` | TC-019, TC-020, TC-021, TC-037, TC-066 (**5 TC**) | per-record `sendSmsOtp` HTTP call, แทนค่าตัวแปรลง payload ราย call, `refer_no` ราย call, per-call failure, throughput 10,000 calls/5 นาที |
| **Plan-only (แถม)** | `@disputed @plan-only` | TC-075 (**1 TC**) | `FR-010c` policy_no masking — มีใน `plan.md` เท่านั้น ไม่มีใน `spec.md` (ดู CRITICAL-2) |

**กติกาบังคับ**:
1. **ห้ามรันทั้งสองชุด** — ทั้งสองชุดอธิบายระบบคนละระบบ การรันทั้งคู่จะให้ผล Fail ปลอมอย่างน้อยหนึ่งชุดเสมอ
2. เมื่อ SA/PO ตัดสินแล้ว **ต้องลบชุดที่แพ้ออกจาก `test-cases_csms-003-grace-period.csv` และไฟล์นี้** แล้ว re-run `/speckit-qa coverage` (iteration +1)
3. ถ้า **API path ชนะ** → `spec.md` FR-009 / FR-011 / **User Story 3 ทั้ง Story** ต้องถูกแก้/ถอน — เป็นงานของ SA (`/speckit-specify`) ไม่ใช่ QA
4. ถ้า **CSV path ชนะ** → `plan.md` §Constraints + §Summary + technical approach (`sendSmsOtp`) ต้องถูกรื้อ — implementation ที่มีอยู่ (`SmsGracePeriodCamelBean.java`) ผูกกับ `sendSmsOtp` แล้ว
5. **ชุดนี้ยังไม่ SIT-ready** จนกว่าจะมีคำตัดสิน — routing: ข้อขัดแย้งระหว่าง artifact → `/speckit-analyze`; คุณภาพถ้อยคำ requirement → `/speckit-checklist`; QA ไม่ตัดสินแทน

---

## CRITICAL Findings (ต้องปิดก่อนประกาศ "verified")

| # | Finding | อ้างอิง | ผลกระทบต่อ QA |
|---|---|---|---|
| **CRITICAL-1** | **ไม่มี security/PII NFR** ทั้งที่ batch จัดการ `cardNo` (เลขบัตรประชาชน) + `mobile1`/`mobile2` + `policy_no` และเขียน `mobile_no`/`sms_message` เป็น plain field ลง `SMS_GRACE_PERIOD_LOG` | `checklist.md` G1/CHK023 (`[!]` Gap ยังเปิดอยู่); `plan.md` Principle IV "ยกเว้นแล้ว (ยึด precedent 002/003)" | ไม่มี NFR = **ไม่มีเกณฑ์ Pass/Fail ที่วัดได้** สำหรับ TC-068…TC-076 → TC ชุด Security เขียนได้แต่ **assert ไม่ได้** จนกว่า SA/DPO จะกำหนด NFR (masking/retention/RBAC/encryption in transit) — **ต้องปิดก่อน Production gate** |
| **CRITICAL-2** | **`plan.md` มี FR ที่ `spec.md` ไม่มีเลย**: `FR-010a` (`${var5}` = LINE_LINK ลิงก์ QR ชำระเบี้ย) และ `FR-010c` (บังคับ mask `policy_no` ก่อนใส่ข้อความ) — และ `plan.md` อ้างว่า "ข้อความจริงมี **5 ตัวแปร**" + "`var4` เปลี่ยนความหมายจาก `due_end_date` เป็น `grace_end_date`" ขณะที่ `spec.md` FR-010/US3 ระบุแค่ **3 ตัวแปร** (`${var1}`=`policy_no`, `${var2}`=`due_date`, `${var3}`=`grace_end_date`) | `spec.md` FR-010, US1 ข้อความตัวอย่าง, US3 #3 · `plan.md` §Technical approach, §Constitution Check (II), §Storage, §Complexity Tracking | **ข้อความ SMS ที่จะส่งจริงยังไม่มีข้อยุติ** — TC-013/TC-020 (แทนค่าตัวแปร) ออกแบบตาม `spec.md` (3 ตัวแปร ตามข้อยุติของผู้ใช้) TC-075 ครอบ FR-010c แบบ plan-only. ถ้า plan ถูก → **ต้อง re-design TC ชุดแทนค่าตัวแปรใหม่ทั้งหมด** และ TC-013 จะขัดกับ TC-075 โดยตรง (เลขเต็ม vs เลข masked) |
| **CRITICAL-3** | **Interface นำส่งยังไม่มีข้อยุติ** — CSV (spec FR-009/FR-011/US3-P1) vs `sendSmsOtp` (plan) | ดู §"⚠️ Disputed Interface" ด้านบน | **P1 User Story ทั้ง Story** อยู่ในข้อพิพาท; 11 TC (6 csv-path + 5 api-path) ต้องถูกลบครึ่งหนึ่งเมื่อมีคำตัดสิน; ห้ามรันทั้งคู่ |
| **CRITICAL-4** | **SC-001 (10,000 รายการ/5 นาที) อาจเป็นไปไม่ได้ตามสถาปัตยกรรมที่ plan เลือก** — `plan.md` ยอมรับเองว่า "SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call synchronous (ไม่มี bulk)" + LINE API assumption 5 วินาที/คำขอ → 10,000 × (LINE lookup + sendSmsOtp) แบบ sequential เกิน 5 นาทีอย่างมีนัยสำคัญ และ plan ทิ้ง `[NEEDS CLARIFICATION]` ไว้ | `spec.md` SC-001 · `plan.md` §Performance Goals · `spec.md` Assumptions (LINE 5s / Gateway 30s) | TC-064/TC-065/TC-066 เป็น **performance gate ที่คาดว่าจะ Fail** ตามการออกแบบปัจจุบัน — ต้องวัด throughput จริงก่อน implement (ตามที่ plan เสนอ) หรือแก้ SC-001 |

**ประเด็นรอง (ไม่ CRITICAL แต่บันทึกไว้)**: `checklist.md` G2 — endpoint `11.100.8.44` hardcode ใน FR-006 (→ TC-070); G3 — นิยาม "รอบ Due เดียวกัน" ต้อง cross-check FR-008 vs SC-003 vs Assumptions (→ route `/speckit-checklist`).

---

## Test Matrix Summary Table

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|---|---|---|---|---|---|---|
| TC-001 | FR-001 Batch Scheduling | Batch รันอัตโนมัติทุกวันเวลา 10:00 น. (cron `0 0 10 * * ?`) | Positive | P1 | `@positive @smoke` | Integration |
| TC-002 | FR-002 Audience Query | ดึงข้อมูลกรมธรรม์จาก `ili_policy_master` + `ili_notification_letter` และคำนวณ `grace_end_date` ได้ | Positive | P1 | `@positive @smoke` | Integration |
| TC-003 | FR-003 7-Day Rule | `grace_end_date - current_date = 7` วันปฏิทิน → คัดเข้ากลุ่มเป้าหมาย (ORD/IND/PA) | Positive | P1 | `@positive @smoke` | Unit |
| TC-004 | FR-003 Config | อ่านจำนวนวันแจ้งเตือนจาก `cf_catalog` (`REMINDER_DAYS` / `CSMS_GP_7Days`) มาใช้จริง | Positive | P2 | `@positive @regression` | Integration |
| TC-005 | FR-004 Policy Status | คัดเฉพาะกรมธรรม์สถานะ Inforce (ORD/IND/PA) | Positive | P1 | `@positive @smoke` | Unit |
| TC-006 | FR-004a Mobile Selection | ใช้ `mobile1` เป็นเบอร์ส่งหลักเมื่อมีค่า | Positive | P1 | `@positive` | Unit |
| TC-007 | FR-004a Mobile Fallback | `mobile1` ว่าง → fallback ไปใช้ `mobile2` | Positive | P1 | `@positive` | Unit |
| TC-008 | FR-005 Do Not Contact | กรมธรรม์ที่ไม่ติด Do Not Contact ยังคงอยู่ในกลุ่มเป้าหมาย | Positive | P1 | `@positive` | Integration |
| TC-009 | FR-006 LINE Lookup | เรียก `msa-custlookup` ด้วย `channels='LINE'` **ช่องทางเดียว** (ไม่เช็ค APP) | Positive | P1 | `@positive @smoke` | Integration |
| TC-010 | FR-006a cardNo Mapping | map `policy_no` → `cardNo` จากข้อมูลลูกค้าสำเร็จก่อนเรียก LINE | Positive | P1 | `@positive` | Integration |
| TC-011 | FR-007 LINE Eligibility | ผลตรวจ `E02` (ไม่พบข้อมูล/ยังไม่ลงทะเบียน) → คัดเข้ากลุ่มเป้าหมาย | Positive | P1 | `@positive @smoke` | Unit |
| TC-012 | FR-008 Per-Policy Message | ลูกค้า 1 ราย (เบอร์เดียว) มี 2 กรมธรรม์เข้าเงื่อนไข → ได้ SMS 2 ข้อความ | Positive | P1 | `@positive @smoke` | Integration |
| TC-013 | FR-010 Template Substitution | แทนค่า `${var1}`=`policy_no`, `${var2}`=`due_date` (DD/MM/YYYY), `${var3}`=`grace_end_date` (DD/MM/YYYY) ครบ | Positive | P1 | `@positive @smoke` | Unit |
| TC-014 | FR-012 Success Logging | ส่งสำเร็จ → บันทึก `SMS_GRACE_PERIOD_LOG` `sms_sent_status='S'` + `refer_no` | Positive | P1 | `@positive @smoke` | Integration |
| TC-015 | FR-014 Manual Fix | IT Admin สั่งรัน Manual Batch ย้อนหลังของวันที่ที่เลือกได้สำเร็จ | Positive | P1 | `@positive @smoke` | E2E |
| TC-016 | FR-009 CSV Creation | **[DISPUTED]** สร้างไฟล์ CSV UTF-8 ชื่อตามรูปแบบ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` | Positive | P1 | `@positive @disputed @csv-path` | Integration |
| TC-017 | FR-009+FR-010 CSV Content | **[DISPUTED]** แทนค่าตัวแปร `${var1}`–`${var3}` ลงในแถวข้อมูลของไฟล์ CSV ถูกต้อง | Positive | P1 | `@positive @disputed @csv-path` | Integration |
| TC-018 | FR-011 CSV Delivery | **[DISPUTED]** นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB) และได้ `refer_no` + สถานะรายรายการกลับ | Positive | P1 | `@positive @disputed @csv-path` | Integration |
| TC-019 | FR-011 API Delivery | **[DISPUTED]** เรียก SMS Gateway V3 `sendSmsOtp` **1 HTTP call ต่อ 1 รายการ** (`mappedSystemName=CSMS_SGP_GracePeriod`, `sms_category=116`) | Positive | P1 | `@positive @disputed @api-path` | Integration |
| TC-020 | FR-010+FR-011 API Payload | **[DISPUTED]** แทนค่า `${var1}`–`${var3}` ลงใน payload ของ `sendSmsOtp` ราย call ถูกต้อง | Positive | P1 | `@positive @disputed @api-path` | Integration |
| TC-021 | FR-011+FR-012 API Response | **[DISPUTED]** รับ response ราย call → เก็บ `refer_no` ต่อรายการ → log `'S'` | Positive | P1 | `@positive @disputed @api-path` | Integration |
| TC-022 | FR-003 7-Day Rule | `grace_end_date - current_date ≠ 7` (6 / 8 / 14 วัน) → คัดออก | Negative/Validation | P1 | `@negative @smoke` | Unit |
| TC-023 | FR-004 Policy Status | สถานะไม่ใช่ Inforce (Lapse/Surrender/Matured) → คัดออกแม้ diff = 7 วัน | Negative/Validation | P1 | `@negative @smoke` | Unit |
| TC-024 | FR-004a Mobile Empty | `mobile1` และ `mobile2` ว่าง/NULL ทั้งคู่ → skip + log `'F'` + รอบทำงานต่อ | Negative/Validation | P1 | `@negative` | Integration |
| TC-025 | FR-004a Mobile Format | เบอร์ผิดรูปแบบ (ตัวอักษร / สั้น-ยาวเกิน / `+66` / มี space-dash / control char) → ไม่ทำให้รอบล้ม | Negative/Validation | P2 | `@negative @regression` | Unit |
| TC-026 | FR-005 Do Not Contact | ORD ที่มี `remark_code='1'` → คัดออก | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-027 | FR-005 Do Not Contact | IND/PA ที่มี `remark_code='4'` → คัดออก | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-028 | FR-005 Code Mapping | ORD ที่มี `remark_code='4'` / IND ที่มี `remark_code='1'` → **ไม่** ถูกคัดออก (mapping ผูกกับ policy_type) | Negative/Validation | P2 | `@negative @regression` | Unit |
| TC-029 | FR-006a cardNo Not Found | หา `cardNo` ของกรมธรรม์ไม่พบ → skip + log `'F'` + รอบทำงานต่อ | Negative/Validation | P1 | `@negative` | Integration |
| TC-030 | FR-007 LINE Registered | `E00` + `isBlockLine=false` → คัดออก (ลงทะเบียน LINE แล้ว) | Negative/Validation | P1 | `@negative @smoke` | Unit |
| TC-031 | FR-007 LINE Abnormal | `E13` → skip + log `'F'` **ไม่ retry รายรายการ** และรอบทำงานต่อ | Negative/Validation | P1 | `@negative` | Unit |
| TC-032 | FR-007 LINE Empty Field | `channel` หรือ `isBlockLine` เป็นค่าว่าง/NULL → skip + log `'F'` | Negative/Validation | P1 | `@negative` | Unit |
| TC-033 | FR-007 LINE Unknown Code | รหัสนอกเหนือ `E00`/`E02`/`E13` (เช่น `E99`, body ว่าง, JSON ผิดโครง) → skip + log `'F'` | Negative/Validation | P2 | `@negative @regression` | Unit |
| TC-034 | FR-008 Dedup | เคยส่งสำเร็จในรอบ Due เดียวกัน (`policy_no`+`due_date` ตรงกัน) → คัดออกแม้เข้าเงื่อนไข 7 วัน | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-035 | FR-012 Bad refer_no | SMS Gateway ตอบ `refer_no` ผิดรูปแบบ/ว่าง → บันทึกรายการนั้นด้วย `'F'` | Negative/Validation | P2 | `@negative @regression` | Integration |
| TC-036 | FR-009 CSV Failure | **[DISPUTED]** สร้างไฟล์ CSV ไม่สำเร็จ (disk เต็ม / สิทธิ์ไม่พอ / path ไม่มี) → ความล้มเหลวระดับรอบ + email แจ้งเตือน + Manual Fix | Negative/Validation | P1 | `@negative @disputed @csv-path` | Integration |
| TC-037 | FR-011 API Failure | **[DISPUTED]** `sendSmsOtp` ราย call ล้มเหลว (timeout / HTTP 5xx / SOAP fault) → log `'F'` รายนั้น ไม่ retry อัตโนมัติ รอบทำงานต่อ | Negative/Validation | P1 | `@negative @disputed @api-path` | Integration |
| TC-038 | FR-002 Empty Audience | ไม่มีกรมธรรม์เข้าเงื่อนไขเลย (0 รายการ) → รอบจบสถานะปกติ ไม่ error ไม่ส่ง email แจ้งล้มเหลว | Negative/Validation | P2 | `@negative @regression` | Integration |
| TC-039 | FR-003 Config Missing | ไม่พบ config `REMINDER_DAYS`/`CSMS_GP_7Days` ใน `cf_catalog` → default = 7 วัน | Negative/Validation | P1 | `@negative` | Unit |
| TC-040 | FR-003 Config Invalid | config เป็นค่าผิด (`'abc'`, `0`, `-1`, `9999`, ว่าง) → พฤติกรรมนิยามชัด ไม่คัดกลุ่มผิดแบบเงียบ | Negative/Validation | P2 | `@negative @regression` | Unit |
| TC-041 | FR-006 LINE API Down | LINE API ล่มทั้งระบบ → retry ≤3 ครั้งแบบเว้นช่วง → หยุดรอบ + email แจ้งเตือน (ต่างจาก skip รายรายการ) | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-042 | FR-013 Gateway Down | SMS Gateway ล่ม/timeout ทั้งระบบ → ทุกรายการ log `'F'` ไม่ retry อัตโนมัติ + email แจ้งความล้มเหลวระดับรอบ | Negative/Validation | P1 | `@negative` | Integration |
| TC-043 | FR-003 Month Boundary | ข้ามเดือน: `grace_end_date=01/06/2026` รันวันที่ `25/05/2026` → เข้ากลุ่ม (7 วันข้ามสิ้นเดือน 31 วัน) | Edge | P1 | `@edge_case @smoke` | Unit |
| TC-044 | FR-003 Year Boundary | ข้ามปี: `grace_end_date=03/01/2027` รันวันที่ `27/12/2026` → เข้ากลุ่ม | Edge | P1 | `@edge_case @smoke` | Unit |
| TC-045 | FR-003 Leap Day | ปีอธิกสุรทิน: `grace_end_date=29/02/2028` รันวันที่ `22/02/2028` → เข้ากลุ่ม (29 ก.พ. มีจริง) | Edge | P1 | `@edge_case` | Unit |
| TC-046 | FR-003 Non-Leap Feb | ปีปกติ: `grace_end_date=01/03/2027` รันวันที่ `22/02/2027` → เข้ากลุ่ม (ก.พ. 28 วัน — ห้ามคำนวณ 29 ก.พ. 2027) | Edge | P1 | `@edge_case` | Unit |
| TC-047 | FR-003 Buddhist Era | ข้อมูล/การแสดงผลปี พ.ศ. (2569) vs ค.ศ. (2026) → คำนวณ diff บนฐานเดียวกัน ไม่สลับ B.E./A.D. (543 ปี) | Edge | P1 | `@edge_case @smoke` | Unit |
| TC-048 | FR-003 Today Boundary | `grace_end_date = วันที่รัน` (diff = 0 — หมดผ่อนผันวันนี้) → คัดออก | Edge | P1 | `@edge_case @smoke` | Unit |
| TC-049 | FR-003 Past Date | `grace_end_date` เป็นอดีต (diff < 0 — เลยผ่อนผันแล้ว) → คัดออก | Edge | P1 | `@edge_case` | Unit |
| TC-050 | FR-003 Timezone | server TZ ≠ `Asia/Bangkok` (UTC / UTC+7) → `current_date` ณ 10:00 น. ไทยไม่เลื่อนวัน (ขอบ 00:00–07:00 UTC) | Edge | P1 | `@edge_case` | Unit |
| TC-051 | FR-003 Time Component | `grace_end_date` มีเวลาติดมา (`26/05/2026 23:59:59` / `00:00:00`) → เทียบวันล้วน ไม่พิจารณาเวลาในวัน | Edge | P1 | `@edge_case` | Unit |
| TC-052 | FR-003 Null/Invalid Date | `grace_end_date` เป็น NULL / `0000-00-00` / ปี 9999 → คัดออกอย่างปลอดภัย ไม่ throw ไม่ล้มรอบ | Edge | P2 | `@edge_case @regression` | Unit |
| TC-053 | FR-014 Manual Fix Date | Manual Fix ของวันย้อนหลัง → ใช้ business date ของวันนั้นเป็น `current_date` (ไม่ใช่วันนี้) กลุ่มเป้าหมายตรงกับรอบเดิม | Edge | P1 | `@edge_case @smoke` | E2E |
| TC-054 | FR-008 Dedup Key | กรมธรรม์เดิม `due_date` ใหม่ (คนละรอบ Due) → ส่งได้ ไม่ถูก dedup | Edge | P1 | `@edge_case` | Unit |
| TC-055 | FR-008 Dedup Key | คนละ `policy_no` แต่ `due_date` เดียวกัน (ลูกค้าเดียว/ต่างคน) → ส่งทั้งคู่ (ไม่ dedup รายลูกค้า) | Edge | P1 | `@edge_case @smoke` | Unit |
| TC-056 | FR-010 Date Format | วัน/เดือนหลักเดียว → zero-pad เป็น `01/04/2026` (ไม่ใช่ `1/4/2026`) ในทั้ง `${var2}` และ `${var3}` | Edge | P2 | `@edge_case @regression` | Unit |
| TC-057 | FR-010 Policy No Render | `policy_no` มี leading zero (`0035567`) / ยาวผิดปกติ / มีตัวอักษร → ไม่ถูกตัด ไม่ถูกแปลงเป็น numeric | Edge | P2 | `@edge_case @regression` | Unit |
| TC-058 | FR-005 Multi Remark | กรมธรรม์เดียวมีหลาย `remark_code` (มีทั้ง `'1'` และ `'4'` และรหัสอื่น) → คัดออกถ้ารหัสที่ตรง policy_type ปรากฏ | Edge | P2 | `@edge_case @regression` | Integration |
| TC-059 | SC-001 Volume Boundary | 10,000 รายการพอดี (ขอบ) และ 10,001 รายการ (เกินขอบ) → พฤติกรรมนิยามชัด ไม่ตัดข้อมูลเงียบ | Edge | P1 | `@edge_case @performance` | Integration |
| TC-060 | FR-009 Filename Timestamp | **[DISPUTED]** ส่วน `[YYMMDDhhmmss]` ของชื่อไฟล์ — ตัวอย่าง `690519100000` ใช้ **พ.ศ. 2 หลัก (69)** ไม่ใช่ ค.ศ. (26) → ยืนยัน convention และ hhmmss = เวลารันจริง | Edge | P1 | `@edge_case @disputed @csv-path` | Integration |
| TC-061 | FR-001+FR-014 Concurrency | Daily batch (10:00) และ Manual Fix รันพร้อมกันบนวันเดียวกัน → ไม่มีการส่งซ้ำ (dedup ยัง hold) | Concurrency | P1 | `@concurrency @smoke` | Integration |
| TC-062 | FR-001 Double Trigger | cron misfire / deploy หลาย node → รอบซ้อนกัน → รอบเดียวเท่านั้นประมวลผล (guard/lock) ไม่ส่งซ้ำ | Concurrency | P1 | `@concurrency` | Integration |
| TC-063 | FR-008 Race Condition | 2 thread/instance ประมวลผล `policy_no`+`due_date` เดียวกันพร้อมกัน → ส่งครั้งเดียว, log 1 แถว (unique constraint) | Concurrency | P1 | `@concurrency` | Integration |
| TC-064 | SC-001 Performance | รอบ 10,000 รายการเสร็จภายใน **5 นาที** (end-to-end: query → LINE → ส่ง → log) | Concurrency | P1 | `@concurrency @performance @smoke` | E2E |
| TC-065 | SC-001 LINE Throughput | LINE lookup 10,000 ครั้ง ที่ SLA 5 วินาที/คำขอ → ต้องไม่ทำให้รอบเกิน 5 นาที (ต้องมี batching/parallel/cache) | Concurrency | P1 | `@concurrency @performance` | Integration |
| TC-066 | SC-001 Gateway Throughput | **[DISPUTED]** `sendSmsOtp` = 1 synchronous HTTP call/รายการ × 10,000 → วัดว่าเข้าเกณฑ์ 5 นาทีหรือไม่ (plan.md ระบุเองว่าไม่มี bulk API) | Concurrency | P1 | `@concurrency @performance @disputed @api-path` | E2E |
| TC-067 | FR-014 Manual Idempotent | สั่ง Manual Fix วันเดียวกัน 2 ครั้งพร้อมกัน/ติด ๆ กัน → idempotent ไม่ส่งซ้ำรายการ `'S'` | Concurrency | P1 | `@concurrency @smoke` | E2E |
| TC-068 | PDPA / FR-012 Log PII | `SMS_GRACE_PERIOD_LOG` เก็บ `mobile_no` + `sms_message` (มี `policy_no`) เป็น plain — ต้องมีการควบคุมสิทธิ์เข้าถึง + retention ตาม NFR | Security | P1 | `@security @pdpa @smoke` | Integration |
| TC-069 | PDPA cardNo Leak | `cardNo` (เลขบัตรประชาชน) ต้องไม่ปรากฏใน SMS body / email แจ้งเตือน / application log / exception stack trace | Security | P1 | `@security @pdpa @smoke` | Integration |
| TC-070 | FR-006 Transport | เรียก `cisappapi` (`11.100.8.44`) — `cardNo` ต้องส่งผ่านช่องทางภายในที่ควบคุมได้เท่านั้น, request/response ต้องไม่ถูก log เต็ม (endpoint hardcode = `checklist.md` G2) | Security | P1 | `@security @pdpa` | Integration |
| TC-071 | FR-013 Alert PII | email แจ้งเตือนความล้มเหลว → มีเฉพาะสรุป log/ขั้นตอน ต้องไม่มี `mobile_no` / `cardNo` / `policy_no` เต็ม | Security | P1 | `@security @pdpa` | Integration |
| TC-072 | FR-010 Injection | ข้อมูลที่นำมาแทนค่าตัวแปรมี metacharacter (`'`, `"`, `%`, `_`, `\`, `<script>`, `${var1}` literal, null byte `U+0000`, control char, RTL/NBSP) → ถือเป็น literal ไม่เกิด injection / ไม่ re-substitute ซ้ำ / ไม่ทำ CSV formula injection (`=`,`+`,`-`,`@` นำหน้า) | Security | P1 | `@security @smoke` | Unit |
| TC-073 | FR-014 RBAC | ผู้ใช้ที่ไม่ใช่ `IT_ADMIN` เรียก Manual Fix (UI + direct HTTP POST) → ถูกปฏิเสธ; การรัน Manual ทุกครั้งถูกบันทึก audit (ใคร/เมื่อไร/วันที่ซ่อม) | Security | P1 | `@security @smoke` | E2E |
| TC-074 | FR-009 File at Rest | **[DISPUTED]** ไฟล์ CSV บน disk มี `policy_no` + เบอร์ลูกค้า → permission จำกัด, ไม่อยู่ใน path ที่ web เข้าถึงได้, มี retention/cleanup (**`checklist.md` G1 — ไม่มี NFR รองรับ**) | Security | P1 | `@security @pdpa @disputed @csv-path` | Integration |
| TC-075 | FR-010c Policy Masking | **[DISPUTED · plan-only]** `plan.md` บังคับ mask `policy_no` ก่อนใส่ข้อความ (`35xxx82` ผ่าน `formatPolicyNoMarking`, ORD/IND/PA/GOV) — **`spec.md` FR-010 ระบุ `${var1}`=`policy_no` เต็ม** → ขัดกับ TC-013 โดยตรง | Security | P1 | `@security @pdpa @disputed @plan-only` | Unit |
| TC-076 | FR-002+FR-014 SQL Injection | พารามิเตอร์ที่ควบคุมได้ (วันที่ Manual Fix, config `cf_catalog`) ที่ป้อนค่าอันตราย (`'; DROP TABLE--`, `%`, `1=1`) → query เป็น parameterized ไม่เกิด injection ต่อ DWConsole/epirusapp DB | Security | P1 | `@security @smoke` | Integration |
| TC-077 | FR-012 / SC-004 Log Completeness | **100%** ของรายการที่เข้าขั้นตอนส่ง/ถูก skip ถูกบันทึกครบทุก field (`policy_no`, `policy_type`, `mobile_no`, `sms_message`, `due_date`, `grace_end_date`, `reminder_days`, `sms_sent_status`, `refer_no`, `created_by`, `created_date`) | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-078 | FR-012 Log Scope | รายการที่ถูก **filter ออก** (Do Not Contact / `E00`+`isBlockLine=false` / dedup) ต้องไม่ถูกบันทึกลง log (ต่างจากรายการ "skip" ที่บันทึก `'F'`) | Side-Effects | P2 | `@side_effect @regression` | Integration |
| TC-079 | FR-013 / SC-005 Alert | ความล้มเหลวระดับรอบทุกกรณี → OMail ถึงทีม IT + กลุ่มผู้ใช้ **ภายใน 15 นาที** นับจากเวลาประมวลผล พร้อมระบุขั้นตอนที่ล้ม + สรุป log | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-080 | FR-014 / SC-006 Manual Repair | Manual Fix ซ่อมรอบที่ล้ม → รายการ `'S'` เดิมไม่ถูกส่งซ้ำ, รายการ `'F'`/ค้างได้รับ SMS ครบ **ภายใน 1 ชั่วโมง** | Side-Effects | P1 | `@side_effect @smoke` | E2E |
| TC-081 | FR-011 Category Isolation | `sms_category` = `116` (`MKTGracePeriod`) — ไม่ชนกับ `115` ที่จองไว้ให้ Birthday และไม่กระทบ category ของ CSMS-001/002 | Side-Effects | P1 | `@side_effect` | Integration |
| TC-082 | FR-012 No Dual-Write | บันทึกลง `SMS_GRACE_PERIOD_LOG` เท่านั้น — ต้องไม่มี dual-write ค้างไปยัง `all_sms_sent` / `csms_log` (โค้ด GRACE03 เดิม) | Side-Effects | P1 | `@side_effect @regression` | Integration |
| TC-083 | FR-012 Atomicity | รอบล้มกลางคัน (kill process / DB ตัด) → ต้องไม่มีรายการที่ "ส่ง SMS ออกแล้วแต่ไม่มี log" (จะทำให้ dedup พลาดและส่งซ้ำในรอบถัดไป) | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-084 | Edge Case (spec) Snapshot | `grace_end_date` ถูกปรับ (ยืด/ลด) **หลัง** batch ส่งแล้ว → ยึดผลตรวจ ณ เวลาประมวลผลของรอบนั้น ไม่ส่งใหม่/ไม่แก้ log ย้อนหลัง | Side-Effects | P2 | `@side_effect @regression` | Integration |
| TC-085 | FR-014 Admin UX | Admin Dashboard: batch นี้ปรากฏใน dropdown + เลือกวันที่ได้ + มี feedback หลังสั่งรัน (สถานะ/ผลสรุป) ไม่ใช่หน้าเงียบ | UX/Usability | P2 | `@ux_usability @regression` | E2E |
| TC-086 | FR-013 Alert Readability | email แจ้งเตือนอ่านรู้เรื่อง: ระบุชื่อ batch / วันที่รอบ / ขั้นตอนที่ล้ม / จำนวนรายการ — ไม่ใช่ stack trace ดิบล้วน | UX/Usability | P2 | `@ux_usability @regression` | Integration |
| TC-087 | FR-014 Input Feedback | Manual Fix ป้อนวันที่อนาคต / รูปแบบผิด / วันที่ไกลเกินไป → error message ชัดเจนบนหน้าจอ ไม่ใช่ HTTP 500 / หน้าขาว | UX/Usability | P2 | `@ux_usability @regression` | E2E |
| TC-088 | FR-012 Report Rendering | หน้ารายงาน/monitor ของ batch: 10,000 แถว, `sms_message` ยาวมาก, `refer_no` ว่าง, และกรณีไม่มีข้อมูล (empty state) → render ได้ ไม่ล้น layout ไม่ค้าง | UX/Usability | P3 | `@ux_usability` | E2E |
| TC-089 | FR-014 Double Submit | สั่ง Manual Fix แล้วกดซ้ำ/refresh ระหว่างรัน → มี confirm + สถานะกำลังทำงาน + กัน double-submit | UX/Usability | P2 | `@ux_usability @regression` | E2E |
| TC-090 | FR-001+FR-014 Missed Round | รอบที่ batch ไม่ได้ scheduled/ไม่ได้รัน (วันหยุด / server ดับ) → กลุ่มที่พลาด **ไม่ถูกส่งเลย** ในวันถัดไป (diff กลายเป็น 6) และต้องซ่อมผ่าน Manual Fix เท่านั้น | Edge | P1 | `@edge_case @smoke` | E2E |

**สรุปมิติที่ครอบคลุมทั้ง 7**: Positive 21 · Negative/Validation 21 · Edge 19 · Concurrency 7 · Security 9 · Side-Effects 8 · UX/Usability 5 = **90 TC** (+ `TC-030b` business_rule) — ไม่มีมิติใดถูกละเว้น

> **TC-090 เพิ่มจาก coverage loop-back (iteration 2)** — `coverage` iteration 1 พบว่า Edge Case ของ `spec.md` ข้อ "`grace_end_date` ตรงกับวันที่ batch ไม่ได้ scheduled (เช่น วันหยุด) → กลุ่มที่พลาดรอบซ่อมผ่าน Manual Fix" **ไม่มี TC ครอบคลุม** → loop back → เพิ่ม TC-090 → `coverage` iteration 2 = `covered`

> **หมายเหตุ UX/Usability**: batch นี้เป็น headless (ไม่มีหน้าจอผู้ใช้ปลายทาง) — มิติ UX/Usability จึง map ไปที่ **admin surfaces** ที่มนุษย์ใช้จริง: Admin Dashboard Manual Fix (TC-085/087/089), เนื้อหา email แจ้งเตือน (TC-086), และหน้ารายงาน/monitor (TC-088) ตามที่ SKILL §4 กำหนด (ห้าม blanket-exclude ทั้งมิติ) — **ยกเว้นเฉพาะ**: WCAG AA และ mobile/responsive ไม่ครอบคลุมในชุดนี้ เพราะหน้า Admin Dashboard เป็นหน้าเดิมที่อยู่นอก scope ของ feature นี้ (`spec.md` §ขอบเขต: "นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard")

---

## BDD Scenarios (Gherkin)

### กลุ่ม A — การคัดเลือกกลุ่มเป้าหมาย (FR-001 … FR-004a)

```gherkin
# Covers: FR-001, SC-001
Feature: TC-001 Batch รันอัตโนมัติทุกวันเวลา 10:00 น.
  Scenario: cron trigger ตรงเวลา 10:00 น.
    Given batch "Grace Period 7 Days" ถูก wire เข้า scheduler ด้วย cron expression "0 0 10 * * ?"
    And autoStart ถูกตั้งเป็น true ใน environment ทดสอบ
    When นาฬิกาของระบบ (Asia/Bangkok) ถึง 10:00:00 น.
    Then batch เริ่มทำงานหนึ่งรอบโดยอัตโนมัติ โดยไม่ต้องมีคนสั่ง
    And ไม่ใช้ cron "0 0 11 * * ?" ของโค้ด GRACE03 เดิม
```

```gherkin
# Covers: FR-002
Feature: TC-002 ดึงข้อมูลกรมธรรม์และคำนวณ grace_end_date
  Scenario: อ่านจาก DWConsole ครบสองตาราง
    Given ตาราง "public.ili_policy_master" และ "public.ili_notification_letter" บน DWConsole พร้อมใช้
    When batch เริ่มรอบประมวลผล
    Then ระบบดึงข้อมูลกรมธรรม์จากทั้งสองตารางร่วมกัน
    And คำนวณ "grace_end_date" ของแต่ละกรมธรรม์ได้ครบถ้วน
    And ได้ field ที่จำเป็นครบ: policy_no, policy_type, สถานะ, due_date, grace_end_date, mobile1, mobile2
```

```gherkin
# Covers: FR-003, SC-001
Feature: TC-003 กฎ 7 วันปฏิทินก่อนหมดระยะเวลาผ่อนผัน
  Scenario Outline: grace_end_date - current_date = 7 → คัดเข้ากลุ่มเป้าหมาย
    Given กรมธรรม์ "<policy_no>" ประเภท "<policy_type>" สถานะ Inforce
    And กรมธรรม์นั้นมี grace_end_date = "<grace_end_date>"
    When batch รันวันที่ "<run_date>" เวลา 10:00 น.
    Then กรมธรรม์นั้นถูกคัดเข้ากลุ่มเป้าหมาย

    Examples:
      | policy_no | policy_type | grace_end_date | run_date   |
      | 3556782   | ORD         | 2026-05-26     | 2026-05-19 |
      | 4001001   | IND         | 2026-05-26     | 2026-05-19 |
      | 5002002   | PA          | 2026-05-26     | 2026-05-19 |
```

```gherkin
# Covers: FR-003
Feature: TC-004 อ่านจำนวนวันแจ้งเตือนจาก cf_catalog
  Scenario Outline: ค่า config ถูกใช้จริงในการคัดกรอง
    Given cf_catalog มีแถว config_type = "REMINDER_DAYS" และ config_value1 = "CSMS_GP_7Days"
    And ค่าจำนวนวันที่ตั้งไว้ = "<days>"
    And กรมธรรม์ Inforce ที่มี grace_end_date ห่างจากวันรัน "<days>" วันปฏิทิน
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดเข้ากลุ่มเป้าหมาย
    And กรมธรรม์ที่ห่าง 7 วัน (แต่ config ไม่ใช่ 7) ถูกคัดออก

    Examples:
      | days |
      | 7    |
      | 5    |
```

```gherkin
# Covers: FR-004
Feature: TC-005 คัดเฉพาะกรมธรรม์สถานะ Inforce
  Scenario Outline: ประเภทกรมธรรม์ที่รองรับ ต้องเป็น Inforce เท่านั้น
    Given กรมธรรม์ประเภท "<policy_type>" สถานะ "Inforce" ที่เหลือ 7 วันก่อน grace_end_date
    When batch รัน
    Then กรมธรรม์นั้นอยู่ในกลุ่มเป้าหมาย

    Examples:
      | policy_type |
      | ORD         |
      | IND         |
      | PA          |
```

```gherkin
# Covers: FR-004a
Feature: TC-006 / TC-007 การเลือกเบอร์ส่ง (mobile1 หลัก, mobile2 สำรอง)
  Scenario: TC-006 ใช้ mobile1 เมื่อมีค่า
    Given กรมธรรม์ในกลุ่มเป้าหมายที่มี mobile1 = "0800000001" และ mobile2 = "0800000002"
    When batch เตรียมส่ง SMS ของกรมธรรม์นั้น
    Then ระบบใช้เบอร์ "0800000001" เป็นเบอร์ปลายทาง
    And บันทึก mobile_no = "0800000001" ลง SMS_GRACE_PERIOD_LOG

  Scenario: TC-007 fallback ไป mobile2 เมื่อ mobile1 ว่าง
    Given กรมธรรม์ในกลุ่มเป้าหมายที่มี mobile1 = NULL และ mobile2 = "0800000002"
    When batch เตรียมส่ง SMS ของกรมธรรม์นั้น
    Then ระบบใช้เบอร์ "0800000002" เป็นเบอร์ปลายทาง
    And บันทึก mobile_no = "0800000002" ลง SMS_GRACE_PERIOD_LOG
```

```gherkin
# Covers: FR-004a
Feature: TC-024 เบอร์ว่างทั้งสองช่อง
  Scenario Outline: mobile1 และ mobile2 ว่าง/NULL ทั้งคู่ → skip + log 'F'
    Given กรมธรรม์ในกลุ่มเป้าหมายที่มี mobile1 = "<m1>" และ mobile2 = "<m2>"
    When batch ประมวลผลกรมธรรม์นั้น
    Then ไม่มี SMS ถูกส่งสำหรับกรมธรรม์นั้น
    And มีแถวใน SMS_GRACE_PERIOD_LOG ที่ sms_sent_status = "F" และ refer_no ว่าง
    And รอบยังประมวลผลกรมธรรม์รายถัดไปต่อจนจบ (ไม่หยุดรอบ)

    Examples:
      | m1     | m2     |
      | NULL   | NULL   |
      | (ว่าง) | (ว่าง) |
      | (ช่องว่างล้วน) | NULL |
```

```gherkin
# Covers: FR-004a
Feature: TC-025 เบอร์ผิดรูปแบบ (adversarial — negative-input-catalog §C)
  Scenario Outline: ค่าเบอร์ที่ผิดรูปแบบต้องไม่ทำให้รอบล้ม
    Given กรมธรรม์ในกลุ่มเป้าหมายที่มี mobile1 = "<mobile>"
    When batch ประมวลผลกรมธรรม์นั้น
    Then รอบไม่ throw exception และประมวลผลรายถัดไปต่อ
    And ผลลัพธ์ถูกบันทึกลง SMS_GRACE_PERIOD_LOG ตามสถานะจริง ('S' หรือ 'F')
    # NOTE: spec.md ไม่ได้นิยาม validation รูปแบบเบอร์ → เกณฑ์ Pass/Fail ที่แน่นอน route ไป /speckit-checklist

    Examples:
      | mobile         |
      | 08000000AB     |
      | 080            |
      | 08000000000000 |
      | +66800000001   |
      | 080-000-0001   |
      | 080 000 0001   |
      | 0800000001  |
```

### กลุ่ม B — การคัดกรอง (FR-005, FR-006, FR-006a, FR-007)

```gherkin
# Covers: FR-005, SC-007
Feature: TC-008 / TC-026 / TC-027 / TC-028 Do Not Contact List
  Scenario: TC-008 ไม่ติด Do Not Contact → คงอยู่ในกลุ่มเป้าหมาย
    Given กรมธรรม์ ORD ที่เข้าเงื่อนไข 7 วัน และไม่มีแถวใน ili_policy_remark ที่ remark_code = "1"
    When batch รัน
    Then กรมธรรม์นั้นยังอยู่ในกลุ่มเป้าหมาย

  Scenario Outline: TC-026 / TC-027 คัดออกตาม remark_code ที่ตรงกับ policy_type
    Given กรมธรรม์ประเภท "<policy_type>" ที่มี ili_policy_remark.remark_code = "<remark_code>"
    And กรมธรรม์นั้นเข้าเงื่อนไข 7 วัน
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออกจากกลุ่มเป้าหมาย
    And ไม่มี SMS ถูกส่งให้กรมธรรม์นั้น

    Examples:
      | policy_type | remark_code |
      | ORD         | 1           |
      | IND         | 4           |
      | PA          | 4           |

  Scenario Outline: TC-028 remark_code ที่ไม่ตรงกับ policy_type → ไม่คัดออก
    Given กรมธรรม์ประเภท "<policy_type>" ที่มี remark_code = "<remark_code>" เท่านั้น
    And กรมธรรม์นั้นเข้าเงื่อนไข 7 วัน
    When batch รัน
    Then กรมธรรม์นั้นยังอยู่ในกลุ่มเป้าหมาย (mapping ผูกกับ policy_type)

    Examples:
      | policy_type | remark_code |
      | ORD         | 4           |
      | IND         | 1           |
      | PA          | 1           |
```

```gherkin
# Covers: FR-006
Feature: TC-009 ตรวจสถานะ LINE Ocean Connect ช่องทางเดียว
  Scenario: เรียก msa-custlookup ด้วย channels='LINE' เท่านั้น
    Given กรมธรรม์ในกลุ่มเป้าหมายที่ map cardNo ได้แล้ว
    When batch ตรวจสถานะการลงทะเบียนของ cardNo นั้น
    Then ระบบเรียก Web Service "cisappapi" (11.100.8.44) ผ่าน msa-custlookup ด้วยพารามิเตอร์ channels = "LINE"
    And ระบบ **ไม่** เรียกตรวจ channel "APP" (ต่างจาก CSMS-001/002 ที่ตรวจคู่ LINE+APP)
```

```gherkin
# Covers: FR-006a
Feature: TC-010 / TC-029 map policy_no → cardNo
  Scenario: TC-010 map สำเร็จ
    Given กรมธรรม์ "3556782" ที่มีข้อมูลลูกค้าผูกอยู่
    When batch map กรมธรรม์เป็น cardNo
    Then ได้ cardNo ของลูกค้ารายนั้น
    And ระบบเรียกตรวจ LINE ด้วย cardNo นั้น

  Scenario: TC-029 map ไม่สำเร็จ → skip + log 'F' + รอบทำงานต่อ
    Given กรมธรรม์ที่หา cardNo จากข้อมูลลูกค้าไม่พบ
    When batch ประมวลผลกรมธรรม์นั้น
    Then ระบบไม่เรียกตรวจ LINE สำหรับกรมธรรม์นั้น
    And ไม่มี SMS ถูกส่ง
    And มีแถวใน SMS_GRACE_PERIOD_LOG ที่ sms_sent_status = "F"
    And รอบไม่หยุด — ประมวลผลรายถัดไปต่อ (ถือเป็นสัญญาณข้อมูลผิดปกติ ไม่คัดออกเงียบ)
```

```gherkin
# Covers: FR-007, SC-007
Feature: TC-011 / TC-030 / TC-031 / TC-032 / TC-033 เกณฑ์ตัดสินจากผลตรวจ LINE
  Scenario Outline: การตัดสินตามรหัสผลตรวจ
    Given cardNo หนึ่งที่ผลตรวจ LINE ตอบกลับด้วย code = "<code>" และ isBlockLine = "<isBlockLine>"
    When batch ประมวลผลผลตอบกลับ
    Then ผลลัพธ์คือ "<outcome>"

    Examples:
      | TC     | code  | isBlockLine | outcome                                              |
      | TC-011 | E02   | (ไม่มี)     | คัดเข้ากลุ่มเป้าหมาย — ยังไม่ลงทะเบียน LINE → ส่ง SMS |
      | TC-030 | E00   | false       | คัดออก — ลงทะเบียน LINE แล้ว ไม่ส่ง SMS               |
      | TC-031 | E13   | (ใดก็ได้)   | skip + log 'F' ไม่ retry รายรายการ รอบทำงานต่อ        |
      | TC-032 | E00   | (ว่าง/NULL) | skip + log 'F' รอบทำงานต่อ                            |
      | TC-032 | (ว่าง) | false      | skip + log 'F' รอบทำงานต่อ                            |
      | TC-033 | E99   | false       | skip + log 'F' รอบทำงานต่อ                            |
      | TC-033 | (response body ว่าง) | -  | skip + log 'F' รอบทำงานต่อ                   |
      | TC-033 | (JSON ผิดโครงสร้าง)  | -  | skip + log 'F' รอบทำงานต่อ                   |
```

```gherkin
# Covers: FR-007
# ⚠️ BUSINESS RULE — ข้อยุติที่ขัดสัญชาตญาณ ยืนยันโดย SA (plan.md R-004, ปิด 2026-07-14)
Feature: TC-011b [business_rule] E00 + isBlockLine = true → **ต้องส่ง SMS**
  Scenario: ลูกค้าลงทะเบียน LINE แล้วแต่บล็อก LINE OA
    Given cardNo หนึ่งที่ผลตรวจ LINE ตอบกลับด้วย code = "E00" และ isBlockLine = true
    And กรมธรรม์ของลูกค้ารายนั้นเข้าเงื่อนไข 7 วัน และไม่ติด Do Not Contact
    When batch ประมวลผลผลตอบกลับ
    Then กรมธรรม์นั้น **ถูกคัดเข้ากลุ่มเป้าหมาย** และ SMS ถูกส่ง
    And ระบบ **ไม่** suppress รายการนี้ (แม้ code จะเป็น E00 เหมือน TC-030)
    # เหตุผล: ลูกค้าบล็อก LINE OA จึงรับแจ้งเตือนผ่าน LINE ไม่ได้ → SMS เป็นช่องทางเดียวที่เหลือ
    # ⚠️ ข้อควรระวัง: spec.md FR-007 เขียนว่า "คัดออกกรณี E00 และ isBlockLine = false" — ระบุเฉพาะ false
    #    แต่ไม่ได้เขียน explicit ว่า E00+true ต้องส่ง → กฎนี้อยู่ใน plan.md เท่านั้น
    #    หาก implement ตีความ "E00 = ลงทะเบียนแล้ว = คัดออก" แบบหลวม ๆ จะ suppress ผิด → TC นี้คือ gate
  # NOTE: TC นี้บันทึกเป็น TC-011 ตัวที่สองในรูป business_rule; ในตัวติดตาม CSV ใช้ ID TC-011 ร่วมกันไม่ได้
  #       → ดู TC-011 (Examples) สำหรับ E02 และ **TC-030b** ด้านล่างสำหรับกรณี E00+true
```

```gherkin
# Covers: FR-007
Feature: TC-030b [business_rule] ยืนยันขอบเขตของกฎ E00
  Scenario Outline: E00 แยกตาม isBlockLine
    Given ผลตรวจ LINE code = "E00" และ isBlockLine = "<isBlockLine>"
    When batch ตัดสินว่าจะส่ง SMS หรือไม่
    Then ผลลัพธ์ = "<decision>"

    Examples:
      | isBlockLine | decision                                  |
      | false       | ไม่ส่ง (คัดออก — รับแจ้งเตือนทาง LINE ได้) |
      | true        | **ส่ง** (บล็อก OA — รับทาง LINE ไม่ได้)    |
```

### กลุ่ม C — การกันส่งซ้ำ (FR-008)

```gherkin
# Covers: FR-008, SC-003
Feature: TC-012 / TC-034 / TC-054 / TC-055 dedup key = policy_no + due_date
  Scenario: TC-012 ลูกค้ารายเดียวมี 2 กรมธรรม์เข้าเงื่อนไข → ได้ 2 ข้อความ
    Given ลูกค้า cardNo "C-TEST-001" มีเบอร์ mobile1 = "0800000001"
    And ลูกค้ารายนั้นมีกรมธรรม์ "3556782" และ "3556783" ที่เข้าเงื่อนไข 7 วันในรอบเดียวกัน
    When batch รัน
    Then มี SMS ถูกส่งไปยัง "0800000001" จำนวน 2 ข้อความ (1 ข้อความต่อกรมธรรม์)
    And ข้อความแต่ละฉบับอ้างอิง policy_no / due_date / grace_end_date ของกรมธรรม์ตัวเอง
    And ระบบ **ไม่** dedup แบบรายลูกค้า (ต่างจาก CSMS-001/002)

  Scenario: TC-034 เคยส่งในรอบ Due เดียวกันแล้ว → คัดออก
    Given มีแถวใน SMS_GRACE_PERIOD_LOG ของ policy_no "3556782" + due_date "2026-04-12" ที่ sms_sent_status = "S"
    And กรมธรรม์ "3556782" ยังเข้าเงื่อนไข 7 วันในวันที่รัน
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออก ไม่มี SMS ถูกส่งซ้ำ

  Scenario: TC-054 กรมธรรม์เดิม due_date ใหม่ → ส่งได้
    Given มีแถวใน log ของ policy_no "3556782" + due_date "2026-04-12" (sms_sent_status = "S")
    And กรมธรรม์ "3556782" เข้าเงื่อนไข 7 วันอีกครั้งด้วย due_date = "2026-05-12"
    When batch รัน
    Then SMS ถูกส่งอีกครั้ง (คนละรอบ Due)

  Scenario: TC-055 คนละ policy_no แต่ due_date เดียวกัน → ส่งทั้งคู่
    Given กรมธรรม์ "3556782" และ "3556783" ที่มี due_date = "2026-04-12" เท่ากัน เข้าเงื่อนไขทั้งคู่
    When batch รัน
    Then SMS ถูกส่งทั้งสองกรมธรรม์
```

### กลุ่ม D — ขอบเขตวันที่ (Edge — หัวใจของแคมเปญนี้)

```gherkin
# Covers: FR-003
Feature: TC-022 กรมธรรม์ที่ผลต่างวันไม่เท่ากับ 7 → คัดออก
  Scenario Outline: diff ≠ 7
    Given กรมธรรม์ Inforce ที่มี grace_end_date = "<grace_end_date>"
    When batch รันวันที่ "2026-05-19"
    Then กรมธรรม์นั้นถูกคัดออก (diff = <diff>)

    Examples:
      | grace_end_date | diff |
      | 2026-05-25     | 6    |
      | 2026-05-27     | 8    |
      | 2026-06-02     | 14   |
      | 2026-05-20     | 1    |
```

```gherkin
# Covers: FR-003
Feature: TC-043 … TC-051 ขอบเขตวันปฏิทิน (calendar-day boundaries)
  Scenario Outline: การนับ 7 วันปฏิทินข้ามขอบเขตต่าง ๆ
    Given กรมธรรม์ Inforce ที่มี grace_end_date = "<grace_end_date>"
    When batch รันวันที่ "<run_date>" เวลา 10:00 น. (Asia/Bangkok)
    Then กรมธรรม์นั้น "<expected>"

    Examples:
      | TC     | กรณี                       | grace_end_date        | run_date   | expected            |
      | TC-043 | ข้ามเดือน (พ.ค. 31 วัน)     | 2026-06-01            | 2026-05-25 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-043 | ข้ามเดือน (มิ.ย. 30 วัน)    | 2026-07-02            | 2026-06-25 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-044 | ข้ามปี                      | 2027-01-03            | 2026-12-27 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-044 | ข้ามปี (สิ้นปีพอดี)          | 2027-01-01            | 2026-12-25 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-045 | ปีอธิกสุรทิน 29 ก.พ. มีจริง   | 2028-02-29            | 2028-02-22 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-045 | ข้าม 29 ก.พ.                | 2028-03-05            | 2028-02-27 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-046 | ปีปกติ ก.พ. 28 วัน           | 2027-03-01            | 2027-02-22 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | TC-048 | หมดผ่อนผันวันนี้ (diff = 0)  | 2026-05-19            | 2026-05-19 | ถูกคัดออก            |
      | TC-049 | เลยผ่อนผันแล้ว (diff = -1)   | 2026-05-18            | 2026-05-19 | ถูกคัดออก            |
      | TC-049 | เลยผ่อนผันนานแล้ว (diff = -30)| 2026-04-19           | 2026-05-19 | ถูกคัดออก            |

  # TC-047 Buddhist Era vs Gregorian
  Scenario Outline: ปี พ.ศ. ต้องไม่ถูกตีความเป็น ค.ศ. (และกลับกัน)
    Given ข้อมูล grace_end_date ที่ต้นทางแสดงเป็น "<stored>"
    When batch คำนวณผลต่างวันกับวันประมวลผล "2026-05-19" (ค.ศ.)
    Then ผลต่างที่ได้ = "<expected_diff>" วัน
    And ระบบไม่แปลงปีสลับ B.E./A.D. (ต่างกัน 543 ปี) ทำให้ได้ diff ผิดมหาศาล

    Examples:
      | stored                    | expected_diff |
      | 26/05/2026 (ค.ศ.)          | 7             |
      | 26/05/2569 (พ.ศ. เดียวกัน) | 7             |
      | 26/05/2026 ตีความเป็น พ.ศ. | ต้องไม่เกิด — ถ้าเกิดจะได้ diff ≈ -198,000 วัน |
    # ⚠️ บริบท: spec.md ระบุชื่อไฟล์ตัวอย่าง MKT_CSMS_MKTGracePeriod7Days_690519100000.csv
    #    ส่วน YY = "69" คือ พ.ศ. 2569 (ไม่ใช่ ค.ศ. 2069/26) → ระบบมีการใช้ทั้งสอง era จริง = ความเสี่ยงสูง

  # TC-050 Timezone
  Scenario Outline: server timezone ต้องไม่ทำให้ current_date เลื่อนวัน
    Given server ตั้ง timezone = "<tz>"
    And กรมธรรม์ที่มี grace_end_date = "2026-05-26"
    When batch รันในเวลา 10:00 น. ตามเวลาประเทศไทย (03:00 UTC)
    Then current_date ที่ใช้คำนวณ = "2026-05-19" เสมอ
    And กรมธรรม์นั้นถูกคัดเข้ากลุ่มเป้าหมาย

    Examples:
      | tz            |
      | Asia/Bangkok  |
      | UTC           |
      | Asia/Tokyo    |

  # TC-051 Time component
  Scenario Outline: grace_end_date ที่มีเวลาติดมา — เทียบวันล้วน
    Given กรมธรรม์ที่มี grace_end_date = "<value>"
    When batch รันวันที่ "2026-05-19" เวลา 10:00 น.
    Then กรมธรรม์นั้นถูกคัดเข้ากลุ่มเป้าหมาย (ไม่พิจารณาเวลาในวัน)

    Examples:
      | value                |
      | 2026-05-26 00:00:00  |
      | 2026-05-26 09:59:59  |
      | 2026-05-26 23:59:59  |

  # TC-052 Null / invalid
  Scenario Outline: ค่าวันที่ผิดปกติ
    Given กรมธรรม์ที่มี grace_end_date = "<value>"
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออกอย่างปลอดภัย
    And รอบไม่ throw exception และประมวลผลรายถัดไปต่อ

    Examples:
      | value       |
      | NULL        |
      | 0000-00-00  |
      | 9999-12-31  |
      | 1900-01-01  |
```

```gherkin
# Covers: FR-010
Feature: TC-013 / TC-056 / TC-057 การแทนค่าตัวแปรในข้อความ (per spec.md FR-010)
  Scenario: TC-013 แทนค่าครบทั้ง 3 ตัวแปร
    Given template ข้อความ Grace Period 7 วัน:
      """
      เรียน ผู้เอาประกันภัย กรมธรรม์เลขที่ ${var1} ครบกำหนดชำระเบี้ยฯ วันที่ ${var2} จะหมดระยะเวลาผ่อนผันในวันที่ ${var3} เพื่อความคุ้มครองที่ต่อเนื่อง ขอเชิญชำระเบี้ยฯ ได้ที่ธนาคาร/เคาน์เตอร์เซอร์วิส หรือคลิกดูรายละเอียดเพิ่มเติม สอบถามโทร. 1503
      """
    And กรมธรรม์ policy_no = "3556782", due_date = "2026-04-12", grace_end_date = "2026-05-26"
    When batch สร้างข้อความ SMS
    Then ${var1} ถูกแทนด้วย "3556782"
    And ${var2} ถูกแทนด้วย "12/04/2026" (DD/MM/YYYY)
    And ${var3} ถูกแทนด้วย "26/05/2026" (DD/MM/YYYY)
    And ไม่มี placeholder "${var" หลงเหลือในข้อความที่ส่งออก
    # ⚠️ CRITICAL-2: plan.md อ้างว่าข้อความจริงมี 5 ตัวแปร (var4=grace_end_date, var5=LINE_LINK)
    #    และ FR-010c บังคับ mask var1 → ถ้า plan ถูก TC นี้ต้อง re-design ทั้งหมด (ดู TC-075)

  Scenario Outline: TC-056 รูปแบบวันที่ต้อง zero-pad
    Given due_date = "<due>" และ grace_end_date = "<grace>"
    When batch สร้างข้อความ SMS
    Then ${var2} = "<var2>" และ ${var3} = "<var3>"

    Examples:
      | due        | grace      | var2       | var3       |
      | 2026-04-01 | 2026-04-08 | 01/04/2026 | 08/04/2026 |
      | 2026-01-05 | 2026-01-12 | 05/01/2026 | 12/01/2026 |
      | 2026-12-31 | 2027-01-07 | 31/12/2026 | 07/01/2027 |

  Scenario Outline: TC-057 policy_no ที่มีรูปแบบพิเศษ ต้องไม่ถูกแปลง
    Given policy_no = "<policy_no>"
    When batch สร้างข้อความ SMS
    Then ${var1} ในข้อความ = "<policy_no>" ตรงตัวอักษรทุกตัว (ไม่ตัด leading zero ไม่แปลงเป็น numeric ไม่ตัดความยาว)

    Examples:
      | policy_no       |
      | 0035567         |
      | 3556782         |
      | 355678200000001 |
      | PA-3556782      |
```

### กลุ่ม E — Interface นำส่ง [DISPUTED — ทั้งสองชุด ห้ามรันพร้อมกัน]

```gherkin
# Covers: FR-009, FR-010, FR-011, SC-002
# ⚠️ @disputed @csv-path — ชุดนี้ยึดตาม spec.md FR-009/FR-011/User Story 3 (P1)
#    ถ้า SA/PO ตัดสินให้ plan.md ชนะ (ไม่มี CSV) → ลบ Feature block นี้ทั้งบล็อกและ TC-016/017/018/036/060/074 ออกจาก CSV
Feature: [DISPUTED · CSV path] สร้างไฟล์ CSV และนำส่ง SMS Gateway

  Scenario: TC-016 สร้างไฟล์ CSV UTF-8 ตามรูปแบบชื่อ
    Given กลุ่มกรมธรรม์ที่ผ่านการคัดกรองแล้ว 3 รายการ
    When batch ประมวลผลรอบวันที่ 2026-05-19 เวลา 10:00:00
    Then ระบบสร้างไฟล์ CSV encoding UTF-8
    And ชื่อไฟล์ตรงรูปแบบ "[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv"
    And ชื่อไฟล์มีลักษณะเดียวกับตัวอย่าง "MKT_CSMS_MKTGracePeriod7Days_690519100000.csv"
    And ไฟล์อ่านกลับมาเป็นภาษาไทยได้ถูกต้อง ไม่เป็นอักขระเพี้ยน (mojibake)

  Scenario: TC-017 แทนค่าตัวแปรลงในแถวข้อมูลของ CSV
    Given กรมธรรม์ policy_no = "3556782", due_date = "2026-04-12", grace_end_date = "2026-05-26"
    When batch เขียนแถวข้อมูลลงไฟล์ CSV
    Then คอลัมน์ข้อความ SMS ในแถวนั้นมี "3556782" แทน ${var1}
    And มี "12/04/2026" แทน ${var2}
    And มี "26/05/2026" แทน ${var3}
    And ข้อความที่มี comma/quote/newline ถูก escape ตามมาตรฐาน CSV (ไม่ทำให้คอลัมน์เลื่อน)

  Scenario: TC-018 นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน ESB
    Given ไฟล์ CSV ที่มีรายการลูกค้า 3 รายการ
    When ระบบนำส่งไฟล์ไปยัง SMS Gateway ผ่าน Web Service (ESB)
    Then ระบบได้รับผลตอบกลับที่มี refer_no
    And ได้รับสถานะการส่งรายรายการ
    And ≥99% ของรายการที่คัดเลือกมี refer_no กลับมา (SC-002)

  Scenario Outline: TC-036 สร้างไฟล์ CSV ไม่สำเร็จ → ความล้มเหลวระดับรอบ
    Given สภาพแวดล้อมที่ "<condition>"
    When batch พยายามสร้างไฟล์ CSV
    Then การสร้างไฟล์ล้มเหลว
    And ระบบถือเป็นความล้มเหลว **ระดับรอบ**
    And ส่ง email แจ้งเตือนทีม IT Development และกลุ่มผู้ใช้งาน พร้อมรายละเอียดข้อผิดพลาดและสรุป log
    And IT Admin สามารถซ่อมรอบนั้นผ่าน Manual Fix ได้

    Examples:
      | condition                          |
      | พื้นที่ดิสก์เต็ม                     |
      | ไม่มีสิทธิ์เขียนใน output directory  |
      | output path ไม่มีอยู่จริง            |
      | ไฟล์ชื่อเดียวกันถูก lock อยู่         |

  Scenario Outline: TC-060 ส่วน timestamp ของชื่อไฟล์ (พ.ศ. 2 หลัก)
    Given batch รันวันที่ "<run_datetime>"
    When ระบบตั้งชื่อไฟล์ CSV
    Then ส่วน [YYMMDDhhmmss] ของชื่อไฟล์ = "<expected>"
    # ⚠️ ตัวอย่างใน spec (690519100000 สำหรับรอบ 19/05/2026 10:00) ยืนยันว่า YY = พ.ศ. 2 หลัก (2569 → 69)

    Examples:
      | run_datetime        | expected      |
      | 2026-05-19 10:00:00 | 690519100000  |
      | 2027-01-03 10:00:00 | 700103100000  |
      | 2026-12-31 10:00:00 | 691231100000  |
```

```gherkin
# Covers: FR-010, FR-011, FR-012, SC-002
# ⚠️ @disputed @api-path — ชุดนี้ยึดตาม plan.md §Constraints ("ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน sendSmsOtp")
#    ถ้า SA/PO ตัดสินให้ spec.md ชนะ (มี CSV) → ลบ Feature block นี้ทั้งบล็อกและ TC-019/020/021/037/066 ออกจาก CSV
Feature: [DISPUTED · API path] ส่งทีละรายการผ่าน SMS Gateway V3 sendSmsOtp

  Scenario: TC-019 เรียก sendSmsOtp หนึ่ง call ต่อหนึ่งรายการ
    Given กลุ่มกรมธรรม์ที่ผ่านการคัดกรองแล้ว 3 รายการ
    When batch นำส่ง SMS
    Then ระบบเรียก SmsGatewayMessageV3ESBService.sendSmsOtp จำนวน 3 ครั้ง (1 call ต่อ 1 รายการ)
    And ไม่มีไฟล์ CSV ถูกสร้างขึ้นในระบบไฟล์เลย
    And ทุก call ใช้ mappedSystemName = "CSMS_SGP_GracePeriod"
    And ทุก call ใช้ sms_category code = "116" (ไม่ใช่ 115 ที่จองไว้ให้ Birthday)

  Scenario: TC-020 แทนค่าตัวแปรลงใน payload ของแต่ละ call
    Given กรมธรรม์ policy_no = "3556782", due_date = "2026-04-12", grace_end_date = "2026-05-26"
    And เบอร์ปลายทางที่เลือกได้ = "0800000001"
    When batch เรียก sendSmsOtp สำหรับกรมธรรม์นั้น
    Then payload มีเบอร์ปลายทาง = "0800000001"
    And ข้อความใน payload มี "3556782" (${var1}), "12/04/2026" (${var2}), "26/05/2026" (${var3})
    And ไม่มี placeholder "${var" หลงเหลือใน payload

  Scenario: TC-021 รับ response ราย call → refer_no → log 'S'
    Given batch เรียก sendSmsOtp สำเร็จสำหรับกรมธรรม์ "3556782"
    When ระบบได้รับ response ของ call นั้น
    Then ระบบอ่าน refer_no จาก response ของรายการนั้นได้
    And บันทึกลง SMS_GRACE_PERIOD_LOG ด้วย sms_sent_status = "S" และ refer_no ที่ได้รับ
    And ≥99% ของรายการที่คัดเลือกได้ refer_no (SC-002)

  Scenario Outline: TC-037 call ราย record ล้มเหลว
    Given batch เรียก sendSmsOtp สำหรับกรมธรรม์หนึ่ง
    When call นั้นล้มเหลวด้วย "<failure>"
    Then บันทึกกรมธรรม์นั้นด้วย sms_sent_status = "F" และไม่มี refer_no
    And ระบบ **ไม่** retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix เท่านั้น)
    And รอบยังประมวลผลรายการถัดไปต่อจนจบ

    Examples:
      | failure                    |
      | HTTP timeout (>30 วินาที)   |
      | HTTP 500                   |
      | HTTP 503                   |
      | SOAP fault                 |
      | response ไม่มี refer_no     |
```

```gherkin
# Covers: FR-012
Feature: TC-035 refer_no ผิดรูปแบบ
  Scenario Outline: SMS Gateway ตอบ refer_no ที่ใช้ไม่ได้
    Given SMS Gateway ตอบกลับด้วย refer_no = "<refer_no>"
    When batch ประมวลผลผลตอบกลับของรายการนั้น
    Then บันทึกรายการนั้นด้วย sms_sent_status = "F" เพื่อ Manual Fix
    And รอบไม่หยุด

    Examples:
      | refer_no        |
      | (ว่าง)          |
      | NULL            |
      | !!!             |
      | <script>x</script> |
      | (ยาวเกินความยาว field ใน log) |
```

### กลุ่ม F — Log / Alert / Manual Fix (FR-012, FR-013, FR-014)

```gherkin
# Covers: FR-012, SC-004
Feature: TC-014 / TC-077 / TC-078 / TC-083 การบันทึก SMS_GRACE_PERIOD_LOG
  Scenario: TC-014 ส่งสำเร็จ → log 'S' + refer_no
    Given SMS ของกรมธรรม์ "3556782" ถูกส่งสำเร็จและได้ refer_no = "REF-0000001"
    When batch บันทึกผล
    Then มีแถวใน SMS_GRACE_PERIOD_LOG ที่ policy_no = "3556782", sms_sent_status = "S", refer_no = "REF-0000001"

  Scenario: TC-077 บันทึกครบทุก field 100% (SC-004)
    Given รอบที่ประมวลผล 100 รายการ (ส่งสำเร็จ 60, skip/ล้มเหลว 40)
    When รอบจบ
    Then มีแถวใน SMS_GRACE_PERIOD_LOG ครบ 100 แถว
    And ทุกแถวมีค่าครบใน field: id, policy_no, policy_type, mobile_no, sms_message, due_date, grace_end_date, reminder_days, sms_sent_status, created_by, created_date
    And แถวที่ sms_sent_status = "S" มี refer_no; แถวที่ = "F" ไม่มี refer_no

  Scenario Outline: TC-078 รายการที่ถูก filter ออกต้องไม่ถูกบันทึก
    Given กรมธรรม์ที่ถูกคัดออกด้วยเหตุ "<reason>"
    When รอบจบ
    Then ไม่มีแถวของกรมธรรม์นั้นใน SMS_GRACE_PERIOD_LOG ของรอบนี้
    # NOTE: spec.md FR-012 เขียนว่า "ทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip" — ขอบเขตของ "เข้าขั้นตอนส่ง" กำกวม
    #       → route ประเด็นถ้อยคำไป /speckit-checklist; TC นี้ assert ตามการตีความปัจจุบัน

    Examples:
      | reason                            |
      | ติด Do Not Contact (remark_code)   |
      | E00 + isBlockLine = false          |
      | dedup (policy_no + due_date ซ้ำ)    |
      | diff ≠ 7 วัน                       |

  Scenario: TC-083 Atomicity — ห้ามมี "ส่งแล้วแต่ไม่ได้ log"
    Given รอบกำลังส่ง SMS รายการที่ 50 จาก 100
    When process ถูกฆ่า / การเชื่อมต่อ DB ขาด ณ จังหวะหลังส่งแต่ก่อนบันทึก
    Then เมื่อรอบถัดไป (หรือ Manual Fix) รัน ต้องไม่เกิดการส่งซ้ำให้รายการที่ส่งไปแล้ว
    And หากยังเสี่ยง ต้องมีกลไกกู้คืน/ตรวจสอบที่ IT Admin ใช้ได้
```

```gherkin
# Covers: FR-013, SC-005
Feature: TC-042 / TC-079 / TC-086 การแจ้งเตือนความล้มเหลวระดับรอบ
  Scenario Outline: TC-079 ความล้มเหลวระดับรอบทุกขั้นตอน → OMail ภายใน 15 นาที
    Given รอบล้มเหลวที่ขั้นตอน "<step>"
    When ระบบตรวจพบความล้มเหลว
    Then ส่ง email ผ่าน OMail ถึง distribution list ของทีม IT Development และกลุ่มผู้ใช้งาน
    And email ถูกส่งภายใน 15 นาทีนับจากเวลาประมวลผลที่กำหนด (10:00 น.)
    And เนื้อหาระบุขั้นตอนที่ล้มเหลว + รายละเอียดข้อผิดพลาด + สรุป log

    Examples:
      | step                        |
      | ดึงข้อมูลจาก DWConsole       |
      | ตรวจสถานะ LINE (API ล่ม)     |
      | สร้าง/นำส่งข้อความ           |
      | บันทึก log                   |
      | รอบทำงานไม่เสร็จตามเวลา (SLA) |

  Scenario: TC-042 SMS Gateway ล่มทั้งระบบ
    Given SMS Gateway ไม่ตอบสนอง/timeout ทุกคำขอ
    When batch พยายามส่งรายการทั้งหมด
    Then ทุกรายการถูกบันทึกด้วย sms_sent_status = "F"
    And ระบบไม่ retry อัตโนมัติในรอบ daily
    And email แจ้งเตือนความล้มเหลวถูกส่งถึงทีม IT และผู้ใช้งาน

  Scenario: TC-086 [UX] เนื้อหา email อ่านรู้เรื่อง
    Given email แจ้งเตือนความล้มเหลวถูกสร้าง
    When ผู้รับ (IT / User) เปิดอ่าน
    Then email ระบุ: ชื่อ batch, วันที่/เวลาของรอบ, ขั้นตอนที่ล้ม, จำนวนรายการที่กระทบ, ขั้นตอนถัดไป (Manual Fix)
    And ไม่ใช่ stack trace ดิบล้วนโดยไม่มีบริบท
```

```gherkin
# Covers: FR-013
Feature: TC-041 LINE API ล่มทั้งระบบ (ต่างจาก skip รายรายการ)
  Scenario: retry ≤3 ครั้ง แล้วหยุดรอบ
    Given LINE Ocean Connect API (11.100.8.44) ไม่ตอบสนองทุกคำขอ
    When batch เรียกตรวจสถานะ LINE
    Then ระบบ retry สูงสุด 3 ครั้งแบบเว้นช่วง
    And เมื่อยังไม่สำเร็จ ระบบ **หยุดรอบนั้น** (ไม่ประมวลผลต่อ)
    And ส่ง email แจ้งเตือนทีม IT และกลุ่มผู้ใช้งาน
    And พฤติกรรมนี้ต่างจากผลตอบกลับผิดปกติรายรายการ (E13/ค่าว่าง) ที่ skip + 'F' โดยไม่หยุดรอบ
```

```gherkin
# Covers: FR-014, SC-006
Feature: TC-015 / TC-053 / TC-080 / TC-067 Manual Fix (idempotent)
  Scenario: TC-015 สั่งรัน Manual Batch ย้อนหลัง
    Given IT_ADMIN ที่มีสิทธิ์ เข้าหน้า Admin Dashboard กลางของ CSMS
    And batch "Grace Period 7 Days" ปรากฏใน list ของ batch ที่สั่งรันได้
    When IT_ADMIN เลือกวันที่ "2026-05-19" แล้วสั่งรัน Manual Batch
    Then ระบบคำนวณและดึงข้อมูลของวันที่ 2026-05-19 ใหม่
    And ประมวลผล/ส่ง SMS ให้กลุ่มที่ค้าง

  Scenario: TC-053 Manual Fix ใช้ business date ของวันที่เลือก
    Given วันนี้คือ 2026-05-25
    And IT_ADMIN สั่ง Manual Fix สำหรับวันที่ 2026-05-19
    When ระบบคัดกลุ่มเป้าหมาย
    Then ระบบใช้ current_date = "2026-05-19" ในการคำนวณ grace_end_date - current_date = 7
    And กลุ่มเป้าหมายที่ได้ = กรมธรรม์ที่มี grace_end_date = "2026-05-26"
    And **ไม่** ใช้วันที่วันนี้ (2026-05-25) ซึ่งจะให้กลุ่มผิด

  Scenario: TC-080 idempotent — ไม่ส่งซ้ำรายการที่สำเร็จแล้ว (SC-006)
    Given รอบวันที่ 2026-05-19 ส่งสำเร็จ 60 รายการ ('S') และค้าง/ล้มเหลว 40 รายการ ('F')
    When IT_ADMIN สั่ง Manual Fix สำหรับวันที่ 2026-05-19
    Then 60 รายการที่ 'S' ไม่ถูกส่งซ้ำ (ตรวจด้วยกลไก FR-008: policy_no + due_date)
    And 40 รายการที่ค้างได้รับ SMS จนครบ
    And งานซ่อมเสร็จภายใน 1 ชั่วโมง

  Scenario: TC-067 [concurrency] สั่ง Manual Fix ซ้ำพร้อมกัน
    Given IT_ADMIN สั่ง Manual Fix ของวันที่ 2026-05-19
    When มีการสั่ง Manual Fix ของวันเดียวกันอีกครั้งขณะที่รอบแรกยังทำงานอยู่
    Then ไม่มีกรมธรรม์ใดได้รับ SMS ซ้ำ
    And log ของกรมธรรม์เดียวกัน + due_date เดียวกัน ไม่เกิดแถวซ้ำที่ 'S' สองแถว
```

### กลุ่ม G — Concurrency & Performance (SC-001)

```gherkin
# Covers: FR-001, FR-008, FR-014, SC-003
Feature: TC-061 / TC-062 / TC-063 การทำงานพร้อมกัน
  Scenario: TC-061 daily batch + Manual Fix ชนกัน
    Given daily batch เริ่มรอบเวลา 10:00 น. ของวันที่ 2026-05-19
    When IT_ADMIN สั่ง Manual Fix ของวันที่ 2026-05-19 ขณะรอบ daily ยังทำงานอยู่
    Then ไม่มีกรมธรรม์ใดได้รับ SMS ซ้ำ (dedup policy_no + due_date ยังทำงาน)
    And SC-003 = 0 รายการส่งซ้ำ

  Scenario: TC-062 double trigger / หลาย node
    Given batch ถูก deploy บนมากกว่าหนึ่ง node หรือ cron misfire ทำให้ trigger สองครั้ง
    When ทั้งสอง trigger เริ่มรอบเวลาใกล้กัน
    Then มีเพียงรอบเดียวที่ประมวลผลจริง (มี guard/lock) หรือทั้งสองรอบไม่ทำให้เกิดการส่งซ้ำ
    And จำนวน SMS ที่ส่งออกทั้งหมด = จำนวนกรมธรรม์ที่เข้าเงื่อนไข (ไม่ใช่สองเท่า)

  Scenario: TC-063 race condition ระดับ record
    Given สอง thread ประมวลผล policy_no "3556782" + due_date "2026-04-12" พร้อมกัน
    When ทั้งสองพยายามส่งและบันทึก log
    Then SMS ถูกส่งเพียงครั้งเดียว
    And SMS_GRACE_PERIOD_LOG มีแถว 'S' ของ key นั้นเพียงแถวเดียว (unique constraint / lock)
```

```gherkin
# Covers: SC-001
# ⚠️ CRITICAL-4 — plan.md ยอมรับเองว่ายังไม่มี throughput จริงมายืนยันว่า 10,000/5 นาที ทำได้
Feature: TC-059 / TC-064 / TC-065 / TC-066 Performance NFR — 10,000 รายการ ภายใน 5 นาที

  Scenario Outline: TC-059 ขอบเขตปริมาณ
    Given ชุดข้อมูลสังเคราะห์ที่มีกรมธรรม์เข้าเงื่อนไข "<count>" รายการ
    When batch รันหนึ่งรอบ
    Then ระบบประมวลผล "<count>" รายการครบถ้วน ไม่ตัดข้อมูลเงียบ
    And จำนวนแถวใน SMS_GRACE_PERIOD_LOG = "<count>"

    Examples:
      | count  |
      | 9999   |
      | 10000  |
      | 10001  |

  Scenario: TC-064 รอบ 10,000 รายการเสร็จภายใน 5 นาที (SC-001)
    Given ชุดข้อมูลสังเคราะห์ 10,000 กรมธรรม์ที่เข้าเงื่อนไข 7 วัน
    And LINE API และ SMS Gateway ตอบสนองตาม SLA (5 วินาที / 30 วินาที)
    When batch เริ่มรอบเวลา 10:00:00 น.
    Then รอบจบสมบูรณ์ (query → LINE → ส่ง → log ครบทุกรายการ) ภายใน 10:05:00 น.
    And ไม่มี email แจ้งความล้มเหลวเรื่อง SLA

  Scenario: TC-065 throughput ของ LINE lookup
    Given ต้องตรวจสถานะ LINE จำนวน 10,000 cardNo
    And assumption ของ spec: LINE API ตอบภายใน 5 วินาทีต่อคำขอ
    When batch ตรวจทั้งหมด
    Then เวลารวมของขั้นตอน LINE lookup ต้องไม่ทำให้รอบเกิน 5 นาที
    And หากเรียกแบบ sequential (10,000 × สูงสุด 5 วินาที ≈ 13.9 ชั่วโมง) ถือว่า **Fail SC-001** → ต้องมี parallel/batching/cache
    # ⚠️ นี่คือ gate ที่คาดว่าจะ Fail ตามสถาปัตยกรรมปัจจุบัน — ผลที่ได้ต้องป้อนกลับให้ SA ตัดสิน SC-001

  Scenario: TC-066 [DISPUTED @api-path] throughput ของ sendSmsOtp
    Given plan.md ระบุว่า SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call แบบ synchronous (ไม่มี bulk)
    And ต้องส่ง 10,000 รายการในรอบเดียว
    When batch ส่งทั้งหมด
    Then เวลารวมของขั้นตอนส่งต้องไม่ทำให้รอบเกิน 5 นาที
    And ต้องบันทึกค่า throughput จริงที่วัดได้ (calls/วินาที) เพื่อป้อนกลับให้ plan.md [NEEDS CLARIFICATION]
    # หากชนะฝั่ง CSV path แทน → TC นี้ถูกลบ และ SC-001 ประเมินจาก TC-018 (ส่งไฟล์เดียว) ซึ่งเสี่ยงน้อยกว่ามาก
```

### กลุ่ม H — Security / PDPA (Constitution gate)

```gherkin
# Covers: FR-012 · Constitution Principle I (PDPA-First) / IV (Audit Trail)
# ⚠️ CRITICAL-1 — checklist.md G1/CHK023: ไม่มี security/PII NFR → เกณฑ์ Pass/Fail ยังไม่มี
Feature: TC-068 PII ในตาราง log
  Scenario: การเข้าถึง SMS_GRACE_PERIOD_LOG ต้องถูกควบคุม
    Given SMS_GRACE_PERIOD_LOG เก็บ mobile_no และ sms_message (มี policy_no ในเนื้อความ) เป็น plain field
    When ผู้ใช้ที่ไม่มีสิทธิ์พยายามอ่านตาราง/หน้ารายงานที่ query ตารางนี้
    Then การเข้าถึงถูกปฏิเสธ
    And มีนโยบาย retention/การลบข้อมูลที่ระบุชัด
    # BLOCKED-ON: NFR ที่ยังไม่มี — SA/DPO ต้องกำหนดก่อนจึงจะ assert ได้ (CRITICAL-1)
```

```gherkin
# Covers: FR-006, FR-006a, FR-013 · Constitution Principle I
Feature: TC-069 / TC-070 / TC-071 cardNo (เลขบัตรประชาชน) ต้องไม่รั่ว
  Scenario Outline: TC-069 cardNo ต้องไม่ปรากฏใน sink ปลายทาง
    Given รอบที่ประมวลผล cardNo "1234567890123" (สังเคราะห์)
    When ตรวจสอบ "<sink>"
    Then ไม่พบ cardNo เต็มใน sink นั้น

    Examples:
      | sink                              |
      | เนื้อความ SMS ที่ส่งออก             |
      | email แจ้งเตือนความล้มเหลว          |
      | application log / console output   |
      | exception stack trace              |
      | SMS_GRACE_PERIOD_LOG               |

  Scenario: TC-070 การส่ง cardNo ไปยัง cisappapi
    Given ระบบเรียก cisappapi ที่ 11.100.8.44 ด้วย cardNo
    When ตรวจสอบการเชื่อมต่อและการ log
    Then การเรียกเกิดขึ้นบนเครือข่ายภายในที่ควบคุมได้เท่านั้น
    And request/response ที่มี cardNo ต้องไม่ถูก log แบบเต็ม
    And endpoint ควรมาจาก config ไม่ใช่ค่า hardcode ในโค้ด (checklist.md G2)
    # BLOCKED-ON: ไม่มี NFR กำหนด encryption in transit / masking ใน log (CRITICAL-1)

  Scenario: TC-071 email แจ้งเตือนต้องไม่มี PII
    Given รอบล้มเหลวและระบบส่ง email แจ้งเตือน
    When ตรวจเนื้อหา email
    Then มีเพียงสรุป log/ขั้นตอน/จำนวน
    And ไม่มี mobile_no, cardNo, หรือ policy_no เต็มของลูกค้ารายใด
```

```gherkin
# Covers: FR-010 · negative-input-catalog §A/§B
Feature: TC-072 metacharacter / injection ในข้อมูลที่นำมาแทนค่าตัวแปร
  Scenario Outline: ค่าอันตรายต้องถูกปฏิบัติเป็น literal
    Given ข้อมูลกรมธรรม์ที่มีค่า "<value>" ใน field ที่ถูกนำไปแทนตัวแปร
    When batch สร้างข้อความ SMS และนำส่ง
    Then ค่านั้นถูกปฏิบัติเป็นข้อความธรรมดา (literal)
    And ไม่เกิด SQL injection (query เป็น parameterized)
    And ไม่เกิดการ re-substitute template ซ้ำ (placeholder ที่มาจากข้อมูลไม่ถูกแทนค่า)
    And ไม่เกิด CSV formula injection เมื่อเขียนลงไฟล์ (กรณี csv-path)
    And รอบไม่ throw exception

    Examples:
      | value             | ประเด็น                         |
      | O'Brien           | single quote                    |
      | 100%_off          | LIKE wildcard % และ _ (literal)  |
      | '; DROP TABLE x-- | SQL injection                   |
      | ${var1}           | template re-substitution         |
      | <script>alert(1)</script> | XSS ที่หน้ารายงาน         |
      | =cmd\|'/c calc'!A1 | CSV formula injection           |
      | (null byte U+0000) | control char                    |
      | (NBSP U+00A0 / RTL mark) | unicode                   |
```

```gherkin
# Covers: FR-014 · Constitution Principle III (RBAC)
Feature: TC-073 RBAC + audit ของ Manual Fix
  Scenario Outline: เฉพาะ IT_ADMIN เท่านั้นที่สั่ง Manual Fix ได้
    Given ผู้ใช้ที่มี role "<role>"
    When ผู้ใช้พยายามสั่ง Manual Fix ผ่าน "<channel>"
    Then ผลลัพธ์ = "<result>"

    Examples:
      | role      | channel              | result                        |
      | IT_ADMIN  | Admin Dashboard UI   | สั่งได้                        |
      | ผู้ใช้ทั่วไป | Admin Dashboard UI   | ไม่เห็นเมนู / ถูกปฏิเสธ         |
      | ผู้ใช้ทั่วไป | direct HTTP POST     | ถูกปฏิเสธ (401/403) ไม่ bypass |
      | ไม่ล็อกอิน  | direct HTTP POST     | ถูกปฏิเสธ                      |

  Scenario: audit ของการรัน Manual
    Given IT_ADMIN สั่ง Manual Fix ของวันที่ 2026-05-19
    When ตรวจสอบ audit
    Then มีบันทึกว่า ใคร / เมื่อไร / สั่งซ่อมวันที่ใด / ผลลัพธ์
```

```gherkin
# Covers: FR-009 · Constitution Principle I
# ⚠️ @disputed @csv-path — ถ้าไม่มี CSV (plan ชนะ) TC นี้ถูกลบ และความเสี่ยง PII-at-rest หายไปด้วย
Feature: TC-074 [DISPUTED · CSV path] ไฟล์ CSV ที่ rest มี PII
  Scenario: การป้องกันไฟล์ interface
    Given ไฟล์ "MKT_CSMS_MKTGracePeriod7Days_690519100000.csv" ที่มี policy_no + เบอร์ลูกค้าหลายพันแถว
    When ตรวจสอบไฟล์บน filesystem
    Then permission จำกัดเฉพาะ service account ที่จำเป็น
    And ไฟล์ไม่อยู่ใน path ที่เข้าถึงได้ผ่าน web
    And มีนโยบาย retention/cleanup หลังนำส่งสำเร็จ
    # BLOCKED-ON: checklist.md G1 — "ไม่มี security/PII NFR ทั้งที่ไฟล์ CSV มี policy_no + เบอร์ลูกค้า" (CRITICAL-1)
```

```gherkin
# Covers: FR-010c (plan.md เท่านั้น — ไม่มีใน spec.md) · Constitution Principle II
# ⚠️ @disputed @plan-only — ขัดกับ TC-013 โดยตรง
Feature: TC-075 [DISPUTED · plan-only] การ mask policy_no ในเนื้อความ SMS
  Scenario Outline: policy_no ต้องถูก mask ก่อนใส่ในข้อความ
    Given plan.md FR-010c บังคับให้ policy_no ผ่าน formatPolicyNoMarking (มาตรฐาน Common Validation)
    And กรมธรรม์ประเภท "<policy_type>" ที่มี policy_no = "<policy_no>"
    When batch สร้างข้อความ SMS
    Then ${var1} ในข้อความ = "<masked>" (ไม่ใช่เลขเต็ม)

    Examples:
      | policy_type | policy_no | masked      |
      | ORD         | 3556782   | 35xxx82     |
      | IND         | 4001001   | (ตามมาตรฐาน) |
      | PA          | 5002002   | (ตามมาตรฐาน) |
      | GOV         | 6003003   | (ตามมาตรฐาน) |

    # ⚠️⚠️ ขัดแย้งโดยตรงกับ TC-013 / spec.md FR-010 ("${var1} = policy_no") และ US3 #3
    #     spec.md ไม่มี FR-010c อยู่เลย · plan.md อ้างว่าปิดประเด็น Constitution II ด้วย FR-010c นี้
    #     → ต้องรันได้เพียงหนึ่งใน TC-013 หรือ TC-075 เท่านั้น รอ SA/PO ตัดสิน (CRITICAL-2)
    #     → ตารางผลลัพธ์ masked ที่แน่นอนของ IND/PA/GOV ยังไม่มีในเอกสารใด — ต้องขอจาก SA ก่อนรัน
```

```gherkin
# Covers: FR-002, FR-014 · negative-input-catalog §A
Feature: TC-076 SQL injection ผ่านพารามิเตอร์ที่ควบคุมได้
  Scenario Outline: ค่าที่ป้อนเข้าสู่ query ต้อง parameterized
    Given ผู้ใช้/config ป้อนค่า "<payload>" เข้าสู่ "<param>"
    When ระบบสร้างและรัน query ต่อ DWConsole / epirusapp DB
    Then ไม่เกิด SQL injection — ค่าถูกส่งเป็น bind parameter
    And ไม่มีตารางใดถูกแก้ไข/ลบ
    And ระบบตอบด้วย validation error ที่เหมาะสม (ไม่ใช่ 500 พร้อม SQL error ดิบ)

    Examples:
      | param                 | payload              |
      | วันที่ Manual Fix       | 2026-05-19'; DROP TABLE ili_policy_master-- |
      | วันที่ Manual Fix       | ' OR '1'='1          |
      | cf_catalog config_value | 7' UNION SELECT ...  |
      | cf_catalog config_value | %                    |
```

### กลุ่ม I — Side-Effects & UX

```gherkin
# Covers: FR-011, FR-012
Feature: TC-081 / TC-082 การแยกตัวจาก batch อื่น
  Scenario: TC-081 sms_category 116 ไม่ชนกับ 115
    Given sms_category ของ batch นี้ = "116" (MKTGracePeriod)
    And code "115" ถูกจองไว้ให้ 005-batch-birthday-sms
    When batch รันและส่ง SMS
    Then ทุกรายการถูกบันทึก/ส่งด้วย category 116
    And ไม่มีผลกระทบต่อ category ของ CSMS-001/002 หรือ Birthday

  Scenario: TC-082 ไม่มี dual-write ค้าง
    Given plan.md ระบุให้รื้อโค้ด GRACE03 เดิมที่ผูกกับ all_sms_sent / csms_log ออกทั้งหมด
    When batch รันหนึ่งรอบ
    Then มีการเขียนลง SMS_GRACE_PERIOD_LOG เท่านั้น
    And ไม่มีแถวใหม่ใน all_sms_sent หรือ csms_log ที่เกิดจาก batch นี้
```

```gherkin
# Covers: Edge Case (spec.md)
Feature: TC-084 grace_end_date ถูกปรับหลังส่งแล้ว
  Scenario: ยึดผลตรวจ ณ เวลาประมวลผล
    Given batch ส่ง SMS ให้กรมธรรม์ "3556782" ไปแล้วในรอบวันที่ 2026-05-19 (grace_end_date = 2026-05-26)
    When grace_end_date ของกรมธรรม์นั้นถูกปรับเป็น 2026-06-10 ในวันถัดมา
    And batch รันรอบวันที่ 2026-06-03 (diff = 7 อีกครั้ง)
    Then ระบบยึดผลตรวจ ณ เวลาประมวลผลของแต่ละรอบ
    And log ของรอบ 2026-05-19 ไม่ถูกแก้ย้อนหลัง
    And การส่งซ้ำถูกควบคุมด้วย dedup key (policy_no + due_date) — ถ้า due_date เดิม จะไม่ส่งซ้ำ
```

```gherkin
# Covers: FR-014
Feature: TC-085 / TC-087 / TC-089 [UX] Admin Dashboard Manual Fix
  Scenario: TC-085 batch ปรากฏและสั่งรันได้พร้อม feedback
    Given IT_ADMIN เปิดหน้า Manual Fix กลางของ CSMS
    When ดู dropdown รายการ batch
    Then มีรายการ "Grace Period 7 Days" ให้เลือก
    And เลือกวันที่ได้
    And หลังกดสั่งรัน มี feedback ชัดเจน (สถานะ/ผลสรุป/จำนวนรายการ) ไม่ใช่หน้าเงียบ

  Scenario Outline: TC-087 ป้อนวันที่ผิด → error message ชัดเจน
    Given IT_ADMIN อยู่ที่หน้า Manual Fix
    When ป้อนวันที่ "<input>" แล้วสั่งรัน
    Then ระบบแสดงข้อความ error ที่เข้าใจได้บนหน้าจอ
    And ไม่เกิด HTTP 500 / หน้าขาว / stack trace โผล่หน้าจอ

    Examples:
      | input       |
      | 2027-01-01 (อนาคต) |
      | 19/05/2569 (ผิดรูปแบบ) |
      | abc         |
      | (ว่าง)      |
      | 1900-01-01  |

  Scenario: TC-089 กัน double-submit
    Given IT_ADMIN สั่ง Manual Fix แล้ว
    When กดปุ่มซ้ำ / refresh หน้าระหว่างที่รอบกำลังทำงาน
    Then มี confirm ก่อนสั่ง และแสดงสถานะ "กำลังทำงาน"
    And ไม่เกิดการ submit ซ้อนที่ทำให้ส่ง SMS ซ้ำ
```

```gherkin
# Covers: FR-012
Feature: TC-088 [UX] หน้ารายงาน/monitor ของ batch
  Scenario Outline: การ render ข้อมูลปริมาณมากและค่าผิดปกติ
    Given หน้ารายงาน SMS Grace Period (ReportSmsGracePeriodAction) ที่อ่านจาก SMS_GRACE_PERIOD_LOG
    When แสดงผลกรณี "<case>"
    Then หน้าจอ render ได้ ไม่ค้าง ไม่ล้น layout

    Examples:
      | case                                   |
      | 10,000 แถวในรอบเดียว                    |
      | sms_message ยาวมาก (>500 อักขระ)         |
      | refer_no ว่าง (รายการ 'F')               |
      | ไม่มีข้อมูลของวันที่เลือก (empty state)    |
      | ข้อความภาษาไทย + emoji                   |
```

```gherkin
# Covers: FR-001, FR-014 · spec.md §Edge Cases ("grace_end_date ตรงกับวันที่ batch ไม่ได้ scheduled → ซ่อมผ่าน Manual Fix")
# เพิ่มจาก coverage loop-back iteration 2
Feature: TC-090 รอบที่พลาด (วันหยุด / server ดับ) → ซ่อมผ่าน Manual Fix เท่านั้น
  Scenario: กลุ่มที่พลาดรอบไม่ถูกเก็บตกโดยอัตโนมัติในวันถัดไป
    Given กรมธรรม์ "3556782" ที่มี grace_end_date = "2026-05-26"
    And รอบวันที่ "2026-05-19" (diff = 7) **ไม่ได้ทำงาน** เพราะ server ดับ / batch ไม่ได้ scheduled
    When batch รันตามปกติในวันที่ "2026-05-20"
    Then กรมธรรม์นั้น **ไม่** ถูกคัดเข้ากลุ่มเป้าหมาย (diff = 6 ไม่ใช่ 7)
    And ไม่มี SMS ถูกส่งให้กรมธรรม์นั้นโดยอัตโนมัติ
    And ไม่มีแถวใน SMS_GRACE_PERIOD_LOG ของกรมธรรม์นั้น
    # → กลุ่มที่พลาดรอบ "หายเงียบ" ถ้าไม่มีใครสังเกต — batch ไม่มีกลไกเก็บตกอัตโนมัติ

  Scenario: IT Admin ซ่อมรอบที่พลาดผ่าน Manual Fix
    Given รอบวันที่ "2026-05-19" ไม่ได้ทำงาน
    When IT_ADMIN สั่ง Manual Fix สำหรับวันที่ "2026-05-19"
    Then ระบบใช้ current_date = "2026-05-19" (ดู TC-053)
    And กรมธรรม์ "3556782" ถูกคัดเข้ากลุ่มและได้รับ SMS
    And ไม่มีการส่งซ้ำให้รายการที่เคยสำเร็จ (FR-008)

  Scenario: ตรวจว่ามีสัญญาณให้คนรู้ว่ารอบพลาด
    Given รอบวันที่ "2026-05-19" ไม่ได้ทำงานเลย (ไม่ใช่ล้มกลางคัน — ไม่เคยเริ่ม)
    When ถึงเวลาหลังรอบที่กำหนด
    Then ต้องมีสัญญาณให้ทีม IT/User ทราบว่ารอบไม่ได้ทำงาน (email/monitor)
    # ⚠️ FR-013 ครอบเฉพาะ "batch ล้มเหลวระดับรอบหรือทำงานไม่เสร็จตามเวลา"
    #    กรณี "ไม่เคยเริ่มเลย" (cron ไม่ fire / autoStart=false / server ดับ) ยังไม่ชัดว่าเข้าข่ายหรือไม่
    #    → route ไป /speckit-checklist (ความครบถ้วนของ FR-013) — QA ไม่ตัดสินแทน
```

---

## Test Checklist (16-column execution format)

**System** = `Centralized SMS (CSMS) — epirusapp` (คงที่ทุกแถว) · **Test Status** = `Not Run` ทุกแถว (ยังไม่มีการรันจริง) · **Tested By** / **Tested Date** เว้นว่างตามกฎ no-fabrication

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Centralized SMS (CSMS) — epirusapp | FR-001 Batch Scheduling | SMS Job | Schedule | batch รันเองเวลา 10:00 | scheduler ทำงาน autoStart=true | 1. รอเวลา 10:00 น. | รอบเริ่มอัตโนมัติด้วย cron `0 0 10 * * ?` | cron `0 0 10 * * ?` | P1 | Not Run |  |  | - | ห้ามใช้ `0 0 11 * * ?` ของ GRACE03 เดิม |
| TC-002 | Centralized SMS (CSMS) — epirusapp | FR-002 Audience Query | SMS Job | Query | ดึงข้อมูล + คำนวณ grace_end_date | DWConsole พร้อมใช้ | 1. รัน batch 2. ตรวจ query result | ได้ข้อมูลครบจาก 2 ตาราง + grace_end_date | ili_policy_master / ili_notification_letter | P1 | Not Run |  |  | - | SQL ใหม่ทั้งหมด (plan: rewrite DWSmsGrace03Notice.sql) |
| TC-003 | Centralized SMS (CSMS) — epirusapp | FR-003 7-Day Rule | SMS Job | Filter | diff = 7 → เข้ากลุ่ม | กรมธรรม์ Inforce | 1. ตั้ง grace_end_date=run+7 2. รัน | คัดเข้ากลุ่มเป้าหมายทุก policy_type | ORD 3556782 / IND 4001001 / PA 5002002 | P1 | Not Run |  |  | - | หัวใจของแคมเปญ |
| TC-004 | Centralized SMS (CSMS) — epirusapp | FR-003 Config | SMS Job | Config | อ่าน REMINDER_DAYS จาก cf_catalog | cf_catalog มีแถว config | 1. ตั้งค่า 5 2. รัน | คัดกลุ่มด้วย 5 วัน ไม่ใช่ 7 | config_type=REMINDER_DAYS, config_value1=CSMS_GP_7Days | P2 | Not Run |  |  | - | plan ระบุ config_type=DATE_COUNT, config_value1=CSMS_SGP_GracePeriod — ชื่อไม่ตรง spec |
| TC-005 | Centralized SMS (CSMS) — epirusapp | FR-004 Policy Status | SMS Job | Filter | Inforce เท่านั้น | มีกรมธรรม์หลายสถานะ | 1. รัน 2. ตรวจกลุ่ม | เฉพาะ Inforce เข้ากลุ่ม | ORD/IND/PA Inforce | P1 | Not Run |  |  | - |  |
| TC-006 | Centralized SMS (CSMS) — epirusapp | FR-004a Mobile Selection | SMS Job | Send | ใช้ mobile1 หลัก | mobile1 มีค่า | 1. รัน 2. ตรวจเบอร์ปลายทาง | ใช้ mobile1 + log mobile_no=mobile1 | mobile1=0800000001 mobile2=0800000002 | P1 | Not Run |  |  | - |  |
| TC-007 | Centralized SMS (CSMS) — epirusapp | FR-004a Mobile Fallback | SMS Job | Send | fallback mobile2 | mobile1 ว่าง | 1. รัน 2. ตรวจเบอร์ | ใช้ mobile2 | mobile1=NULL mobile2=0800000002 | P1 | Not Run |  |  | - |  |
| TC-008 | Centralized SMS (CSMS) — epirusapp | FR-005 Do Not Contact | SMS Job | Filter | ไม่ติด DNC → คงอยู่ | ไม่มี remark ที่ตรง | 1. รัน | คงอยู่ในกลุ่ม | ORD ไม่มี remark_code='1' | P1 | Not Run |  |  | - |  |
| TC-009 | Centralized SMS (CSMS) — epirusapp | FR-006 LINE Lookup | SMS Job | Integration | เรียก LINE ช่องทางเดียว | cardNo พร้อม | 1. รัน 2. ตรวจ request | channels='LINE' เท่านั้น ไม่เรียก APP | channels=LINE | P1 | Not Run |  |  | - | ต่างจาก CSMS-001/002 (LINE+APP) |
| TC-010 | Centralized SMS (CSMS) — epirusapp | FR-006a cardNo Mapping | SMS Job | Query | map policy→cardNo | ข้อมูลลูกค้าครบ | 1. รัน 2. ตรวจ cardNo | ได้ cardNo และเรียก LINE ด้วยค่านั้น | policy 3556782 → cardNo C-TEST-001 | P1 | Not Run |  |  | - |  |
| TC-011 | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Eligibility | SMS Job | Filter | E02 → ส่ง | LINE ตอบ E02 | 1. mock E02 2. รัน | คัดเข้ากลุ่ม + ส่ง SMS | code=E02 | P1 | Not Run |  |  | - |  |
| TC-012 | Centralized SMS (CSMS) — epirusapp | FR-008 Per-Policy Message | SMS Job | Send | 1 ข้อความต่อกรมธรรม์ | ลูกค้า 1 ราย 2 กรมธรรม์ | 1. รัน 2. นับ SMS | ได้ 2 ข้อความ อ้างอิงข้อมูลรายกรมธรรม์ | 3556782 + 3556783 เบอร์เดียวกัน | P1 | Not Run |  |  | - | ไม่ dedup รายลูกค้า (ต่างจาก 001/002) |
| TC-013 | Centralized SMS (CSMS) — epirusapp | FR-010 Template Substitution | SMS Job | Message | แทนค่า var1-var3 ครบ | template พร้อม | 1. รัน 2. อ่านข้อความ | var1=3556782, var2=12/04/2026, var3=26/05/2026 ไม่มี ${var} ค้าง | policy 3556782 / due 2026-04-12 / grace 2026-05-26 | P1 | Not Run |  |  | - | ⚠️ CRITICAL-2: plan อ้าง 5 ตัวแปร + mask var1 → ขัดกับ TC-075 |
| TC-014 | Centralized SMS (CSMS) — epirusapp | FR-012 Success Logging | SMS Job | Audit | log 'S' + refer_no | ส่งสำเร็จ | 1. รัน 2. query log | 'S' + refer_no ที่ได้รับ | refer_no=REF-0000001 | P1 | Not Run |  |  | - |  |
| TC-015 | Centralized SMS (CSMS) — epirusapp | FR-014 Manual Fix | Admin Dashboard | Manual Fix | สั่งรันย้อนหลังได้ | IT_ADMIN login | 1. เลือก batch 2. เลือกวันที่ 3. สั่งรัน | ระบบดึงข้อมูลวันนั้นและประมวลผลใหม่ | date=2026-05-19 | P1 | Not Run |  |  | - | plan: ของเดิมไม่มี wiring เลย (SmsMonitorAction) |
| TC-016 | Centralized SMS (CSMS) — epirusapp | FR-009 CSV Creation | SMS Job | Interface File | สร้าง CSV UTF-8 ตามชื่อ | มีกลุ่มเป้าหมาย | 1. รัน 2. ตรวจไฟล์ | ไฟล์ UTF-8 ชื่อตรงรูปแบบ อ่านไทยได้ | MKT_CSMS_MKTGracePeriod7Days_690519100000.csv | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path — ลบถ้า API path ชนะ |
| TC-017 | Centralized SMS (CSMS) — epirusapp | FR-009+FR-010 CSV Content | SMS Job | Interface File | แทนค่าตัวแปรใน CSV | ไฟล์ถูกสร้าง | 1. รัน 2. อ่านแถว | var1-var3 ถูกแทนค่า + escape ถูกต้อง | policy 3556782 | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path |
| TC-018 | Centralized SMS (CSMS) — epirusapp | FR-011 CSV Delivery | SMS Job | Interface File | ส่ง CSV ผ่าน ESB | ไฟล์พร้อม | 1. นำส่ง 2. อ่าน response | ได้ refer_no + สถานะรายรายการ ≥99% | 3 รายการ | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path · SC-002 |
| TC-019 | Centralized SMS (CSMS) — epirusapp | FR-011 API Delivery | SMS Job | Send | sendSmsOtp 1 call/รายการ | กลุ่มเป้าหมาย 3 ราย | 1. รัน 2. นับ call | 3 calls, ไม่มีไฟล์ CSV, mappedSystemName=CSMS_SGP_GracePeriod, category=116 | 3 รายการ | P1 | Not Run |  |  | - | ⚠️ @disputed @api-path — ลบถ้า CSV path ชนะ |
| TC-020 | Centralized SMS (CSMS) — epirusapp | FR-010+FR-011 API Payload | SMS Job | Send | แทนค่าตัวแปรใน payload | call พร้อมส่ง | 1. รัน 2. ตรวจ payload | เบอร์ + var1-var3 ถูกต้อง ไม่มี ${var} ค้าง | policy 3556782 / 0800000001 | P1 | Not Run |  |  | - | ⚠️ @disputed @api-path |
| TC-021 | Centralized SMS (CSMS) — epirusapp | FR-011+FR-012 API Response | SMS Job | Audit | refer_no ราย call → 'S' | call สำเร็จ | 1. รัน 2. query log | 'S' + refer_no ต่อรายการ ≥99% | refer_no=REF-0000001 | P1 | Not Run |  |  | - | ⚠️ @disputed @api-path · SC-002 |
| TC-022 | Centralized SMS (CSMS) — epirusapp | FR-003 7-Day Rule | SMS Job | Filter | diff ≠ 7 → คัดออก | กรมธรรม์ Inforce | 1. ตั้ง diff=6/8/14/1 2. รัน | คัดออกทุกกรณี | grace 2026-05-25/27, 2026-06-02, 2026-05-20 · run 2026-05-19 | P1 | Not Run |  |  | - |  |
| TC-023 | Centralized SMS (CSMS) — epirusapp | FR-004 Policy Status | SMS Job | Filter | non-Inforce → คัดออก | diff=7 แต่สถานะอื่น | 1. รัน | คัดออกไม่ว่า grace_end_date เป็นอย่างไร | Lapse / Surrender / Matured | P1 | Not Run |  |  | - |  |
| TC-024 | Centralized SMS (CSMS) — epirusapp | FR-004a Mobile Empty | SMS Job | Send | เบอร์ว่างทั้งคู่ → skip+'F' | mobile1/2 ว่าง | 1. รัน 2. query log | ไม่ส่ง + log 'F' + รอบทำงานต่อ | mobile1=NULL mobile2=NULL | P1 | Not Run |  |  | - | ต่างจาก 001/002 ที่คัดออกเงียบ |
| TC-025 | Centralized SMS (CSMS) — epirusapp | FR-004a Mobile Format | SMS Job | Send | เบอร์ผิดรูปแบบไม่ล้มรอบ | ค่า adversarial | 1. รัน | รอบไม่ล้ม + log ตามผลจริง | 08000000AB / 080 / +66800000001 / null byte | P2 | Not Run |  |  | - | spec ไม่นิยาม validation → route /speckit-checklist |
| TC-026 | Centralized SMS (CSMS) — epirusapp | FR-005 Do Not Contact | SMS Job | Filter | ORD remark '1' → คัดออก | มี remark | 1. รัน | คัดออก ไม่ส่ง | ORD + remark_code='1' | P1 | Not Run |  |  | - | SC-007 |
| TC-027 | Centralized SMS (CSMS) — epirusapp | FR-005 Do Not Contact | SMS Job | Filter | IND/PA remark '4' → คัดออก | มี remark | 1. รัน | คัดออก ไม่ส่ง | IND/PA + remark_code='4' | P1 | Not Run |  |  | - | SC-007 |
| TC-028 | Centralized SMS (CSMS) — epirusapp | FR-005 Code Mapping | SMS Job | Filter | รหัสไม่ตรง type → ไม่คัดออก | ORD+'4' / IND+'1' | 1. รัน | ยังอยู่ในกลุ่ม | ORD remark '4' / IND remark '1' | P2 | Not Run |  |  | - | mapping ผูกกับ policy_type |
| TC-029 | Centralized SMS (CSMS) — epirusapp | FR-006a cardNo Not Found | SMS Job | Query | ไม่พบ cardNo → skip+'F' | ข้อมูลลูกค้าขาด | 1. รัน 2. query log | ไม่เรียก LINE + log 'F' + รอบต่อ | policy ที่ไม่มี cardNo | P1 | Not Run |  |  | - | สัญญาณข้อมูลผิดปกติ |
| TC-030 | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Registered | SMS Job | Filter | E00+false → คัดออก | LINE ตอบ E00 | 1. mock 2. รัน | คัดออก ไม่ส่ง | code=E00 isBlockLine=false | P1 | Not Run |  |  | - | SC-007 |
| TC-031 | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Abnormal | SMS Job | Filter | E13 → skip+'F' | LINE ตอบ E13 | 1. mock 2. รัน | skip + 'F' ไม่ retry รายรายการ รอบต่อ | code=E13 | P1 | Not Run |  |  | - |  |
| TC-032 | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Empty Field | SMS Job | Filter | ค่าว่าง → skip+'F' | channel/isBlockLine ว่าง | 1. mock 2. รัน | skip + 'F' | code=E00 isBlockLine=NULL | P1 | Not Run |  |  | - |  |
| TC-033 | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Unknown Code | SMS Job | Filter | รหัสนอกเหนือ → skip+'F' | E99/body ว่าง/JSON ผิด | 1. mock 2. รัน | skip + 'F' | code=E99 / empty / malformed | P2 | Not Run |  |  | - |  |
| TC-034 | Centralized SMS (CSMS) — epirusapp | FR-008 Dedup | SMS Job | Dedup | รอบ Due เดิม → คัดออก | มี log 'S' อยู่แล้ว | 1. รัน 2. ตรวจ | คัดออก ไม่ส่งซ้ำ | policy 3556782 + due 2026-04-12 | P1 | Not Run |  |  | - | SC-003 = 0 |
| TC-035 | Centralized SMS (CSMS) — epirusapp | FR-012 Bad refer_no | SMS Job | Audit | refer_no ผิดรูปแบบ → 'F' | Gateway ตอบผิดรูป | 1. mock 2. รัน | log 'F' รอบไม่หยุด | refer_no ว่าง / NULL / !!! | P2 | Not Run |  |  | - |  |
| TC-036 | Centralized SMS (CSMS) — epirusapp | FR-009 CSV Failure | SMS Job | Interface File | สร้าง CSV ไม่สำเร็จ → รอบล้ม | disk เต็ม/สิทธิ์ไม่พอ | 1. จำลอง 2. รัน | ล้มระดับรอบ + email + Manual Fix ได้ | disk full / no write permission | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path |
| TC-037 | Centralized SMS (CSMS) — epirusapp | FR-011 API Failure | SMS Job | Send | call ล้มเหลว → 'F' | timeout/5xx | 1. mock 2. รัน | log 'F' ไม่ retry auto รอบต่อ | HTTP 500 / timeout 30s / SOAP fault | P1 | Not Run |  |  | - | ⚠️ @disputed @api-path |
| TC-038 | Centralized SMS (CSMS) — epirusapp | FR-002 Empty Audience | SMS Job | Query | 0 รายการ → จบปกติ | ไม่มีใครเข้าเงื่อนไข | 1. รัน | รอบจบปกติ ไม่ error ไม่ email แจ้งล้ม | 0 records | P2 | Not Run |  |  | - |  |
| TC-039 | Centralized SMS (CSMS) — epirusapp | FR-003 Config Missing | SMS Job | Config | ไม่พบ config → default 7 | ลบแถว cf_catalog | 1. รัน | ใช้ 7 วัน | (no config row) | P1 | Not Run |  |  | - |  |
| TC-040 | Centralized SMS (CSMS) — epirusapp | FR-003 Config Invalid | SMS Job | Config | config ผิด → พฤติกรรมนิยามชัด | ค่า invalid | 1. ตั้งค่า 2. รัน | ไม่คัดกลุ่มผิดแบบเงียบ | 'abc' / 0 / -1 / 9999 / ว่าง | P2 | Not Run |  |  | - | spec ระบุแค่ "ไม่พบ→default 7" → route /speckit-checklist |
| TC-041 | Centralized SMS (CSMS) — epirusapp | FR-006 LINE API Down | SMS Job | Integration | API ล่ม → retry≤3 → หยุดรอบ | API ไม่ตอบ | 1. จำลอง 2. รัน | retry ≤3 + หยุดรอบ + email | API 11.100.8.44 down | P1 | Not Run |  |  | - | ต่างจาก skip รายรายการ |
| TC-042 | Centralized SMS (CSMS) — epirusapp | FR-013 Gateway Down | SMS Job | Send | Gateway ล่ม → 'F' + email | Gateway timeout | 1. จำลอง 2. รัน | ทุกรายการ 'F' ไม่ retry auto + email | Gateway timeout ทุกคำขอ | P1 | Not Run |  |  | - |  |
| TC-043 | Centralized SMS (CSMS) — epirusapp | FR-003 Month Boundary | SMS Job | Filter | นับข้ามเดือนถูก | เดือน 30/31 วัน | 1. ตั้งค่า 2. รัน | เข้ากลุ่ม | grace 2026-06-01 run 2026-05-25 · grace 2026-07-02 run 2026-06-25 | P1 | Not Run |  |  | - |  |
| TC-044 | Centralized SMS (CSMS) — epirusapp | FR-003 Year Boundary | SMS Job | Filter | นับข้ามปีถูก | ข้ามปีปฏิทิน | 1. ตั้งค่า 2. รัน | เข้ากลุ่ม | grace 2027-01-03 run 2026-12-27 · grace 2027-01-01 run 2026-12-25 | P1 | Not Run |  |  | - |  |
| TC-045 | Centralized SMS (CSMS) — epirusapp | FR-003 Leap Day | SMS Job | Filter | 29 ก.พ. คำนวณถูก | ปีอธิกสุรทิน 2028 | 1. ตั้งค่า 2. รัน | เข้ากลุ่ม | grace 2028-02-29 run 2028-02-22 · grace 2028-03-05 run 2028-02-27 | P1 | Not Run |  |  | - |  |
| TC-046 | Centralized SMS (CSMS) — epirusapp | FR-003 Non-Leap Feb | SMS Job | Filter | ก.พ. 28 วัน คำนวณถูก | ปีปกติ 2027 | 1. ตั้งค่า 2. รัน | เข้ากลุ่ม ไม่คำนวณ 29 ก.พ. 2027 | grace 2027-03-01 run 2027-02-22 | P1 | Not Run |  |  | - |  |
| TC-047 | Centralized SMS (CSMS) — epirusapp | FR-003 Buddhist Era | SMS Job | Filter | พ.ศ./ค.ศ. ไม่สลับ | ข้อมูลมีทั้ง 2 era | 1. ตั้งค่า 2. รัน | diff = 7 ทั้งสองรูปแบบ ไม่เพี้ยน 543 ปี | 26/05/2026 vs 26/05/2569 | P1 | Not Run |  |  | - | ชื่อไฟล์ใช้ พ.ศ. `69` → ระบบใช้ 2 era จริง = เสี่ยงสูง |
| TC-048 | Centralized SMS (CSMS) — epirusapp | FR-003 Today Boundary | SMS Job | Filter | diff=0 → คัดออก | หมดผ่อนผันวันนี้ | 1. ตั้งค่า 2. รัน | คัดออก | grace 2026-05-19 run 2026-05-19 | P1 | Not Run |  |  | - |  |
| TC-049 | Centralized SMS (CSMS) — epirusapp | FR-003 Past Date | SMS Job | Filter | diff<0 → คัดออก | เลยผ่อนผันแล้ว | 1. ตั้งค่า 2. รัน | คัดออก | grace 2026-05-18 / 2026-04-19 run 2026-05-19 | P1 | Not Run |  |  | - |  |
| TC-050 | Centralized SMS (CSMS) — epirusapp | FR-003 Timezone | SMS Job | Filter | TZ ไม่ทำให้เลื่อนวัน | server TZ ต่าง | 1. ตั้ง TZ 2. รัน 10:00 ไทย | current_date=2026-05-19 เสมอ | TZ = Asia/Bangkok / UTC / Asia/Tokyo | P1 | Not Run |  |  | - | 10:00 ไทย = 03:00 UTC |
| TC-051 | Centralized SMS (CSMS) — epirusapp | FR-003 Time Component | SMS Job | Filter | เทียบวันล้วน | grace มีเวลาติดมา | 1. ตั้งค่า 2. รัน | เข้ากลุ่มทุกกรณี | 2026-05-26 00:00:00 / 09:59:59 / 23:59:59 | P1 | Not Run |  |  | - | Clarification 2026-07-07 |
| TC-052 | Centralized SMS (CSMS) — epirusapp | FR-003 Null/Invalid Date | SMS Job | Filter | ค่าวันที่ผิดปกติไม่ล้มรอบ | grace ผิดปกติ | 1. ตั้งค่า 2. รัน | คัดออกปลอดภัย ไม่ throw | NULL / 0000-00-00 / 9999-12-31 / 1900-01-01 | P2 | Not Run |  |  | - |  |
| TC-053 | Centralized SMS (CSMS) — epirusapp | FR-014 Manual Fix Date | Admin Dashboard | Manual Fix | ใช้ business date ของวันที่เลือก | วันนี้ ≠ วันที่ซ่อม | 1. สั่ง Manual วันที่ย้อนหลัง | current_date = วันที่เลือก กลุ่มตรงรอบเดิม | today=2026-05-25 fix=2026-05-19 | P1 | Not Run |  |  | - | ถ้าใช้วันนี้จะได้กลุ่มผิดทั้งหมด |
| TC-054 | Centralized SMS (CSMS) — epirusapp | FR-008 Dedup Key | SMS Job | Dedup | due_date ใหม่ → ส่งได้ | มี log ของ due เดิม | 1. รัน | ส่งได้ (คนละรอบ Due) | policy 3556782 due 2026-04-12 → 2026-05-12 | P1 | Not Run |  |  | - |  |
| TC-055 | Centralized SMS (CSMS) — epirusapp | FR-008 Dedup Key | SMS Job | Dedup | ต่าง policy due เดียวกัน → ส่งคู่ | 2 กรมธรรม์ | 1. รัน | ส่งทั้งคู่ ไม่ dedup รายลูกค้า | 3556782 + 3556783 due 2026-04-12 | P1 | Not Run |  |  | - | SC-003 |
| TC-056 | Centralized SMS (CSMS) — epirusapp | FR-010 Date Format | SMS Job | Message | zero-pad DD/MM/YYYY | วัน/เดือนหลักเดียว | 1. รัน 2. อ่านข้อความ | 01/04/2026 ไม่ใช่ 1/4/2026 | due 2026-04-01 grace 2026-04-08 | P2 | Not Run |  |  | - |  |
| TC-057 | Centralized SMS (CSMS) — epirusapp | FR-010 Policy No Render | SMS Job | Message | policy_no ไม่ถูกแปลง | leading zero/ยาว/มีตัวอักษร | 1. รัน 2. อ่านข้อความ | ตรงตัวทุกอักขระ | 0035567 / 355678200000001 / PA-3556782 | P2 | Not Run |  |  | - |  |
| TC-058 | Centralized SMS (CSMS) — epirusapp | FR-005 Multi Remark | SMS Job | Filter | หลาย remark_code | มีทั้ง '1' และ '4' | 1. รัน | คัดออกถ้ารหัสที่ตรง type ปรากฏ | ORD + remark '1','4','9' | P2 | Not Run |  |  | - |  |
| TC-059 | Centralized SMS (CSMS) — epirusapp | SC-001 Volume Boundary | SMS Job | Performance | ขอบ 10,000 รายการ | ชุดข้อมูลสังเคราะห์ | 1. รัน 2. นับ log | ประมวลผลครบ ไม่ตัดข้อมูลเงียบ | 9999 / 10000 / 10001 | P1 | Not Run |  |  | - |  |
| TC-060 | Centralized SMS (CSMS) — epirusapp | FR-009 Filename Timestamp | SMS Job | Interface File | YYMMDDhhmmss = พ.ศ. 2 หลัก | รันเวลาที่กำหนด | 1. รัน 2. อ่านชื่อไฟล์ | 690519100000 สำหรับ 19/05/2026 10:00 | run 2026-05-19 10:00 → 690519100000 | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path · ยืนยัน era convention |
| TC-061 | Centralized SMS (CSMS) — epirusapp | FR-001+FR-014 Concurrency | SMS Job | Concurrency | daily + Manual Fix ชนกัน | รอบ daily กำลังรัน | 1. สั่ง Manual ระหว่างรอบ | ไม่มีส่งซ้ำ | date=2026-05-19 | P1 | Not Run |  |  | - | SC-003 = 0 |
| TC-062 | Centralized SMS (CSMS) — epirusapp | FR-001 Double Trigger | SMS Job | Concurrency | cron ซ้อน/หลาย node | 2 trigger | 1. trigger 2 ครั้ง | รอบเดียวทำงาน / ไม่ส่งซ้ำ | 2 nodes | P1 | Not Run |  |  | - |  |
| TC-063 | Centralized SMS (CSMS) — epirusapp | FR-008 Race Condition | SMS Job | Concurrency | race ระดับ record | 2 threads | 1. รันคู่ขนาน | ส่งครั้งเดียว log 'S' แถวเดียว | policy 3556782 + due 2026-04-12 | P1 | Not Run |  |  | - | ต้องมี unique constraint |
| TC-064 | Centralized SMS (CSMS) — epirusapp | SC-001 Performance | SMS Job | Performance | 10,000 ราย ภายใน 5 นาที | SLA ปกติ | 1. รัน 10:00:00 | จบก่อน 10:05:00 | 10,000 records | P1 | Not Run |  |  | - | ⚠️ CRITICAL-4 คาดว่า Fail |
| TC-065 | Centralized SMS (CSMS) — epirusapp | SC-001 LINE Throughput | SMS Job | Performance | LINE lookup 10,000 ครั้ง | SLA 5 วิ/คำขอ | 1. วัดเวลา | ไม่ทำให้รอบเกิน 5 นาที | 10,000 cardNo | P1 | Not Run |  |  | - | sequential ≈ 13.9 ชม. → ต้อง parallel/cache |
| TC-066 | Centralized SMS (CSMS) — epirusapp | SC-001 Gateway Throughput | SMS Job | Performance | sendSmsOtp 10,000 calls | ไม่มี bulk API | 1. วัด throughput | ไม่เกิน 5 นาที + บันทึก calls/วินาที | 10,000 calls | P1 | Not Run |  |  | - | ⚠️ @disputed @api-path · CRITICAL-4 |
| TC-067 | Centralized SMS (CSMS) — epirusapp | FR-014 Manual Idempotent | Admin Dashboard | Concurrency | Manual Fix ซ้ำพร้อมกัน | รอบแรกยังรัน | 1. สั่งซ้ำ | ไม่ส่งซ้ำ ไม่มี log 'S' ซ้ำ | date=2026-05-19 ×2 | P1 | Not Run |  |  | - | SC-006 |
| TC-068 | Centralized SMS (CSMS) — epirusapp | FR-012 Log PII | SMS Job | Security | ควบคุมสิทธิ์เข้าถึง log | log มี PII plain | 1. เข้าถึงด้วย role ต่าง ๆ | ปฏิเสธผู้ไม่มีสิทธิ์ + มี retention | mobile_no / sms_message | P1 | Not Run |  |  | - | ⚠️ CRITICAL-1: ไม่มี NFR → assert ไม่ได้ |
| TC-069 | Centralized SMS (CSMS) — epirusapp | PDPA cardNo Leak | SMS Job | Security | cardNo ไม่รั่วทุก sink | รอบประมวลผลปกติ | 1. ตรวจทุก sink | ไม่พบ cardNo เต็ม | cardNo=1234567890123 (สังเคราะห์) | P1 | Not Run |  |  | - | เลขบัตรประชาชน = PII ระดับสูง |
| TC-070 | Centralized SMS (CSMS) — epirusapp | FR-006 Transport | SMS Job | Security | cardNo ผ่านช่องทางภายใน | เรียก cisappapi | 1. ตรวจ network + log | เครือข่ายภายใน + ไม่ log เต็ม + endpoint จาก config | 11.100.8.44 | P1 | Not Run |  |  | - | checklist G2 (hardcode endpoint) · CRITICAL-1 |
| TC-071 | Centralized SMS (CSMS) — epirusapp | FR-013 Alert PII | SMS Job | Security | email ไม่มี PII | รอบล้มเหลว | 1. อ่าน email | มีแค่สรุป log/ขั้นตอน | email แจ้งเตือน | P1 | Not Run |  |  | - |  |
| TC-072 | Centralized SMS (CSMS) — epirusapp | FR-010 Injection | SMS Job | Security | metachar เป็น literal | ค่า adversarial | 1. รัน 2. ตรวจผล | ไม่ injection/ไม่ re-substitute/ไม่ formula injection | O'Brien / 100%_off / '; DROP TABLE x-- / ${var1} / =cmd\|'/c calc'!A1 | P1 | Not Run |  |  | - | negative-input-catalog §A/§B |
| TC-073 | Centralized SMS (CSMS) — epirusapp | FR-014 RBAC | Admin Dashboard | Security | เฉพาะ IT_ADMIN | หลาย role | 1. ลอง UI 2. ลอง direct POST | ปฏิเสธผู้ไม่มีสิทธิ์ + audit ครบ | IT_ADMIN / ผู้ใช้ทั่วไป / ไม่ล็อกอิน | P1 | Not Run |  |  | - | Constitution III |
| TC-074 | Centralized SMS (CSMS) — epirusapp | FR-009 File at Rest | SMS Job | Security | ไฟล์ CSV มี PII | ไฟล์ถูกสร้าง | 1. ตรวจ permission/path/retention | จำกัดสิทธิ์ + ไม่อยู่ใน web path + มี cleanup | CSV หลายพันแถว | P1 | Not Run |  |  | - | ⚠️ @disputed @csv-path · CRITICAL-1 (checklist G1) |
| TC-075 | Centralized SMS (CSMS) — epirusapp | FR-010c Policy Masking | SMS Job | Security | mask policy_no ก่อนใส่ข้อความ | plan.md FR-010c | 1. รัน 2. อ่านข้อความ | var1 = 35xxx82 (ไม่ใช่เลขเต็ม) | ORD 3556782 → 35xxx82 | P1 | Not Run |  |  | - | ⚠️ @disputed @plan-only · ขัดกับ TC-013 · CRITICAL-2 · ตาราง masked ของ IND/PA/GOV ยังไม่มี |
| TC-076 | Centralized SMS (CSMS) — epirusapp | FR-002+FR-014 SQL Injection | SMS Job | Security | parameterized query | payload อันตราย | 1. ป้อนค่า 2. รัน | bind parameter ไม่มีตารางถูกแก้/ลบ | 2026-05-19'; DROP TABLE ili_policy_master-- | P1 | Not Run |  |  | - | negative-input-catalog §A |
| TC-077 | Centralized SMS (CSMS) — epirusapp | FR-012 Log Completeness | SMS Job | Side-Effect | 100% ถูกบันทึก (SC-004) | 100 รายการผสม | 1. รัน 2. นับ+ตรวจ field | 100 แถว ครบทุก field + 'S' มี refer_no / 'F' ไม่มี | 60 'S' + 40 'F' | P1 | Not Run |  |  | - | SC-004 |
| TC-078 | Centralized SMS (CSMS) — epirusapp | FR-012 Log Scope | SMS Job | Side-Effect | รายการ filter ออกไม่ถูก log | ถูกคัดออก | 1. รัน 2. query log | ไม่มีแถวของรายการที่ถูก filter | DNC / E00 / dedup / diff≠7 | P2 | Not Run |  |  | - | นิยาม "เข้าขั้นตอนส่ง" กำกวม → /speckit-checklist |
| TC-079 | Centralized SMS (CSMS) — epirusapp | FR-013 Alert | SMS Job | Side-Effect | email ≤15 นาที ทุกขั้นตอน | รอบล้มที่ขั้นต่าง ๆ | 1. จำลอง 2. จับเวลา | OMail ถึง IT+User ≤15 นาที ระบุขั้นตอน | ล้มที่ query/LINE/ส่ง/log/SLA | P1 | Not Run |  |  | - | SC-005 |
| TC-080 | Centralized SMS (CSMS) — epirusapp | FR-014 Manual Repair | Admin Dashboard | Side-Effect | ซ่อมครบใน 1 ชม. ไม่ส่งซ้ำ | 60 'S' + 40 'F' | 1. สั่ง Manual Fix | 'S' ไม่ซ้ำ, 'F' ได้รับครบ ภายใน 1 ชม. | date=2026-05-19 | P1 | Not Run |  |  | - | SC-006 |
| TC-081 | Centralized SMS (CSMS) — epirusapp | FR-011 Category Isolation | SMS Job | Side-Effect | category 116 ไม่ชน 115 | sms_category seed | 1. รัน 2. ตรวจ | ทุกรายการ category=116 ไม่กระทบ batch อื่น | 116 MKTGracePeriod / 115 Birthday | P1 | Not Run |  |  | - | plan R-005 |
| TC-082 | Centralized SMS (CSMS) — epirusapp | FR-012 No Dual-Write | SMS Job | Side-Effect | ไม่เขียน all_sms_sent/csms_log | โค้ด GRACE03 เดิม | 1. รัน 2. ตรวจ 3 ตาราง | เขียนเฉพาะ SMS_GRACE_PERIOD_LOG | all_sms_sent / csms_log | P1 | Not Run |  |  | - | plan §Constraints ห้ามเหลือ dual-write |
| TC-083 | Centralized SMS (CSMS) — epirusapp | FR-012 Atomicity | SMS Job | Side-Effect | ไม่มี sent-but-unlogged | kill กลางรอบ | 1. kill 2. รันซ้ำ | ไม่ส่งซ้ำรายการที่ส่งไปแล้ว | kill ที่รายการที่ 50/100 | P1 | Not Run |  |  | - | เสี่ยงต่อ SC-003 |
| TC-084 | Centralized SMS (CSMS) — epirusapp | Edge Case Snapshot | SMS Job | Side-Effect | ยึดผล ณ เวลาประมวลผล | grace ถูกปรับหลังส่ง | 1. ส่ง 2. ปรับ grace 3. รันรอบใหม่ | log เดิมไม่ถูกแก้ + dedup คุมการส่งซ้ำ | grace 2026-05-26 → 2026-06-10 | P2 | Not Run |  |  | - | spec §Edge Cases |
| TC-085 | Centralized SMS (CSMS) — epirusapp | FR-014 Admin UX | Admin Dashboard | UX | dropdown + วันที่ + feedback | IT_ADMIN login | 1. เปิดหน้า 2. สั่งรัน | มี batch ใน dropdown + feedback ชัด | Manual Fix page | P2 | Not Run |  |  | - | plan: ต้องเพิ่ม dropdown + js ใหม่ |
| TC-086 | Centralized SMS (CSMS) — epirusapp | FR-013 Alert Readability | SMS Job | UX | email อ่านรู้เรื่อง | email ถูกส่ง | 1. อ่าน email | ระบุ batch/วันที่/ขั้นตอน/จำนวน ไม่ใช่ stack trace ดิบ | email แจ้งเตือน | P2 | Not Run |  |  | - |  |
| TC-087 | Centralized SMS (CSMS) — epirusapp | FR-014 Input Feedback | Admin Dashboard | UX | error message ชัดเจน | ป้อนวันที่ผิด | 1. ป้อน 2. สั่งรัน | error บนหน้าจอ ไม่ใช่ 500/หน้าขาว | 2027-01-01 / 19/05/2569 / abc / ว่าง | P2 | Not Run |  |  | - | negative-input-catalog §D |
| TC-088 | Centralized SMS (CSMS) — epirusapp | FR-012 Report Rendering | Admin Dashboard | UX | render ปริมาณมาก/ค่าผิดปกติ | มีข้อมูลในรายงาน | 1. เปิดรายงาน | ไม่ค้าง ไม่ล้น layout + empty state | 10,000 แถว / message >500 ตัวอักษร / ไม่มีข้อมูล | P3 | Not Run |  |  | - | ReportSmsGracePeriodAction |
| TC-089 | Centralized SMS (CSMS) — epirusapp | FR-014 Double Submit | Admin Dashboard | UX | กัน double-submit | สั่ง Manual Fix แล้ว | 1. กดซ้ำ/refresh | confirm + สถานะกำลังทำงาน + ไม่ submit ซ้อน | Manual Fix page | P2 | Not Run |  |  | - | negative-input-catalog §D |
| TC-030b | Centralized SMS (CSMS) — epirusapp | FR-007 LINE Eligibility | SMS Job | Filter | E00+isBlockLine=true → ต้อง SEND | LINE ตอบ E00 + true | 1. mock E00+true 2. รัน 3. ตรวจว่ามี SMS ถูกส่ง | คัดเข้ากลุ่มและส่ง SMS — ไม่ suppress แม้ code=E00 | code=E00 isBlockLine=true | P1 | Not Run |  |  | - | ⚠️ business_rule ที่ขัดสัญชาตญาณ — ยืนยันโดย SA (plan R-004) · spec FR-007 ไม่ได้เขียน explicit |
| TC-090 | Centralized SMS (CSMS) — epirusapp | FR-001+FR-014 Missed Round | SMS Job / Admin Dashboard | Manual Fix | รอบที่พลาดต้องซ่อมด้วย Manual Fix เท่านั้น | รอบ 2026-05-19 ไม่ได้ทำงาน (วันหยุด/server ดับ) | 1. รัน batch วันที่ 2026-05-20 2. ตรวจกลุ่ม 3. สั่ง Manual Fix ของ 2026-05-19 | วันที่ 20 ไม่เก็บตกอัตโนมัติ (diff=6) / Manual Fix ของวันที่ 19 ส่งได้ครบ ไม่ส่งซ้ำ | grace 2026-05-26 · missed run 2026-05-19 | P1 | Not Run |  |  | - | เพิ่มจาก coverage loop-back iter.2 · spec §Edge Cases · สัญญาณ 'รอบไม่เคยเริ่ม' ยังไม่ชัดใน FR-013 → /speckit-checklist |

---

## Coverage Summary

### ความครอบคลุมข้อกำหนด

| หมวด | ทั้งหมด | มี ≥1 TC | ครอบคลุม % |
|---|---|---|---|
| **Functional Requirements** (FR-001, 002, 003, 004, 004a, 005, 006, 006a, 007, 008, 009, 010, 011, 012, 013, 014) | 16 | 16 | **100%** |
| **Success Criteria** (SC-001 … SC-007) | 7 | 7 | **100%** |
| **รวม (FR + SC)** | **23** | **23** | **100%** |

### แผนที่ FR → TC

| FR/SC | TC ที่ครอบคลุม |
|---|---|
| FR-001 | TC-001, TC-061, TC-062, TC-090 |
| FR-002 | TC-002, TC-038, TC-076 |
| FR-003 | TC-003, TC-004, TC-022, TC-039, TC-040, TC-043, TC-044, TC-045, TC-046, TC-047, TC-048, TC-049, TC-050, TC-051, TC-052 |
| FR-004 | TC-005, TC-023 |
| FR-004a | TC-006, TC-007, TC-024, TC-025 |
| FR-005 | TC-008, TC-026, TC-027, TC-028, TC-058 |
| FR-006 | TC-009, TC-041, TC-070 |
| FR-006a | TC-010, TC-029, TC-069 |
| FR-007 | TC-011, TC-030, TC-030b (business_rule E00+isBlockLine=true → SEND), TC-031, TC-032, TC-033 |
| FR-008 | TC-012, TC-034, TC-054, TC-055, TC-063 |
| FR-009 | TC-016, TC-017, TC-036, TC-060, TC-074 — **ทั้งหมด `@disputed @csv-path`** |
| FR-010 | TC-013, TC-020, TC-056, TC-057, TC-072 |
| FR-011 | TC-018, TC-019, TC-021, TC-037, TC-081 — **ทั้งหมด `@disputed`** (csv-path / api-path) |
| FR-012 | TC-014, TC-035, TC-077, TC-078, TC-082, TC-083, TC-068, TC-088 |
| FR-013 | TC-042, TC-071, TC-079, TC-086 |
| FR-014 | TC-015, TC-053, TC-061, TC-067, TC-073, TC-080, TC-085, TC-087, TC-089, TC-090 |
| SC-001 | TC-059, TC-064, TC-065, TC-066 |
| SC-002 | TC-018 (csv-path), TC-021 (api-path) |
| SC-003 | TC-012, TC-034, TC-054, TC-055, TC-061, TC-063, TC-083 |
| SC-004 | TC-077 |
| SC-005 | TC-079 |
| SC-006 | TC-067, TC-080 |
| SC-007 | TC-008, TC-026, TC-027, TC-030 |

### จำนวน TC ตามมิติ (7 มิติครบ)

| Test Dimension | จำนวน | หมายเหตุ |
|---|---|---|
| Positive | 21 | TC-001…TC-021 |
| Negative/Validation | 21 | TC-022…TC-042 |
| Edge | 19 | TC-043…TC-060 + TC-090 — **หนักที่ขอบเขตวันที่** (เดือน/ปี/leap/พ.ศ.-ค.ศ./TZ/diff=0/diff<0/NULL/รอบที่พลาด) |
| Concurrency | 7 | TC-061…TC-067 — รวม performance NFR (TC-064/065/066) |
| Security | 9 | TC-068…TC-076 — PDPA gate (cardNo + mobile + policy_no) |
| Side-Effects | 8 | TC-077…TC-084 |
| UX/Usability | 5 | TC-085…TC-089 — map ไป admin surfaces (headless batch) |
| **รวม** | **90** | (+ TC-030b = **91 แถวในตัวติดตาม CSV**) |

### จำนวน TC ตาม Priority

| Priority | จำนวน |
|---|---|
| P1 | 68 |
| P2 | 22 |
| P3 | 1 |
| **รวม** | **91** (90 TC + TC-030b) |

### TC ที่อยู่ในข้อพิพาท (disputed)

| Tag | จำนวน | TC |
|---|---|---|
| `@disputed @csv-path` | **6** | TC-016, TC-017, TC-018, TC-036, TC-060, TC-074 |
| `@disputed @api-path` | **5** | TC-019, TC-020, TC-021, TC-037, TC-066 |
| `@disputed @plan-only` | **1** | TC-075 |
| **รวม disputed** | **12** | (≈13.5% ของทั้งชุด) |

### รายการที่ยังไม่ครอบคลุม (uncovered — ระบุชัด)

| รายการ | เหตุผล |
|---|---|
| **FR-010a** (`plan.md`) — `${var5}` = LINE_LINK (ลิงก์ QR ชำระเบี้ย จาก `cf_catalog LINE_LINK`) | **ไม่มีใน `spec.md` เลย** — `spec.md` FR-010/US3 ระบุแค่ 3 ตัวแปร และข้อความตัวอย่างใน US1 เขียนว่า "คลิกดูรายละเอียดเพิ่มเติม" โดยไม่มี placeholder ลิงก์ → ออกแบบ TC ไม่ได้เพราะไม่มีข้อกำหนดฝั่ง spec ให้ trace **บันทึกไว้เป็น CRITICAL-2** รอ SA/PO ตัดสินโครงข้อความจริง (3 ตัวแปร vs 5 ตัวแปร) แล้วจึงกลับมา design |
| **`${var4}`** (`plan.md` — "เปลี่ยนความหมายจาก `due_end_date` เป็น `grace_end_date`") | เหตุผลเดียวกับ FR-010a — `spec.md` map `grace_end_date` ไปที่ `${var3}` ไม่ใช่ `${var4}` → **ขัดกันโดยตรง** ยังไม่มีคำตัดสิน |
| **NFR ด้าน security/PII** | **ไม่มีอยู่ใน spec เลย** (`checklist.md` G1/CHK023 `[!]`) — TC-068/070/074 เขียนไว้แล้วแต่ **assert ไม่ได้** จนกว่า SA/DPO จะกำหนดเกณฑ์ → **CRITICAL-1** |
| **WCAG AA / mobile-responsive** ของ Admin Dashboard | ยกเว้นโดยมีเหตุผล: `spec.md` §ขอบเขต ระบุ "นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard" — ใช้หน้าเดิม เพียงเพิ่ม batch เข้า list |
| **Coverage ระดับ code (Gate G10 ≥80%)** | `plan.md` §Testing ทิ้ง `[NEEDS CLARIFICATION]` ไว้ — ไม่มี coverage tooling ในระบบปัจจุบัน; อยู่นอก scope ของ design mode |

### สถานะพร้อมใช้งาน

**ยังไม่ SIT-ready** — ต้องปิด **CRITICAL-1 … CRITICAL-4** ก่อน โดยเฉพาะการตัดสิน **CSV vs sendSmsOtp** (P1 User Story ทั้ง Story) และ **โครงข้อความ 3 ตัวแปร vs 5 ตัวแปร + masking** เพราะทั้งสองเรื่องกำหนดว่า TC ชุดใดจะถูกลบทิ้ง

**Next**: `/speckit-qa risk` → `/speckit-qa coverage` → `/speckit-qa test-data`

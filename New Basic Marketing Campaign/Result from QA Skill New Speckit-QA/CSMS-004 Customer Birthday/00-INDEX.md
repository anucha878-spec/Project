# QA Pipeline Index — csms-004-birthday

_Last updated: 2026-07-17_

---

# 🚨 ADDENDUM (พบระหว่างรัน pipeline — อ่านก่อนใช้ artifacts ทั้งหมด)

## `plan.md` **ปรากฏขึ้นระหว่างการรัน pipeline นี้** และ **ตัดสินข้อขัดแย้งทั้งสองข้อแล้ว**

**ข้อเท็จจริงที่ตรวจสอบได้**:
- ตอนเริ่ม pipeline (14:49) directory `Spec/Batch เพื่อส่ง SMS Customer Birthday.../` มีเพียง `spec.md` + `checklist.md` — **ยืนยันด้วย `ls` ตอนเริ่มงาน**
- ตอนตรวจสอบครั้งสุดท้าย (15:39) พบ **`plan.md` (23,692 bytes, timestamp `Jul 17 15:16`)** — **สร้างขึ้นระหว่างที่ pipeline นี้กำลังทำงาน**
- **QA ไม่ได้เป็นผู้สร้างไฟล์นี้** — ทุกการเขียนของ pipeline นี้อยู่ใน FEATURE_DIR (`Result from QA Skill New Speckit-QA/`) เท่านั้น และ **ไม่มีการแก้ไข `Spec/` แม้แต่ไฟล์เดียว** (read-only ตามข้อกำหนด)
- ไฟล์เป็นของแคมเปญนี้จริง: `**Branch**: 005-batch-birthday-sms | **Date**: 2026-07-15 | **Spec**: spec.md`

## ผลกระทบต่อ findings — **F-002 และ F-006 ล้าสมัยแล้ว**

| Finding | สถานะเดิมใน artifacts | **ข้อเท็จจริงใหม่จาก `plan.md`** |
|---|---|---|
| **F-002** (CSV vs API) | "ยังไม่มีใครตัดสิน" | ❌ **ตัดสินแล้ว** — `plan.md` บรรทัด 40: *"ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway **V2M1** `sendSmsOtp` (**ยืนยันโดยผู้ใช้ 2026-07-15**, R-001)"* → **เส้นทาง API ชนะ** |
| **F-002** (`112` vs `115`) | "QA ไม่เลือกให้ — blocked" | ❌ **ตัดสินแล้ว** — `plan.md` บรรทัด 42: *"`sms_category_code` = **`115`** (ยืนยันแล้ว, **ไม่ใช่ `112`** ตามเอกสารต้นทาง)"* → **ข้อสรุปของ QA ถูกต้อง: `112` เป็นรหัสผิด** |
| **F-006** (ไม่มี plan.md) | "test level เป็นสมมติฐาน" | ❌ **ล้าสมัย** — มี `plan.md` แล้ว ต้อง re-review `Target Test Level` ทั้ง 103 แถวตาม Technical Context จริง |

## 🔧 สิ่งที่ต้องทำกับ artifacts (ยังไม่ได้ทำใน pipeline รอบนี้)

1. **ลบชุด `@disputed @csv-path` ทั้ง 13 TC (TC-065 – TC-077)** + test-data records ที่ผูกกัน (TD-040, TD-041, TD-075, TD-076, TD-077, TD-120, TD-144, TD-152) — **เส้นทาง CSV แพ้แล้ว**
2. **แก้ชุด `@api-path` (TC-078 – TC-083)**: ปัจจุบันเขียนอ้าง **SMS Gateway V3** ตาม plan ของแคมเปญพี่น้อง แต่ **`plan.md` ของแคมเปญนี้ระบุ `SmsGatewayMessageV2M1ESBService` (V2M1) ซึ่งเป็น *client คนละตัว*** (บรรทัด 21: *"**คนละ client กับ V3** ที่ 002/003/004 ใช้ (ยืนยันโดยผู้ใช้ 2026-07-15 + verified จาก source jar)"*) — method `sendSmsOtp` ชื่อเดียวกันแต่ service ต่างกัน → **ต้องแก้ TC-078–083 ให้อ้าง V2M1** และลบ tag `@disputed`
3. **TC-083 ยังคงมีคุณค่าและได้รับการยืนยันแล้ว** — เมื่อไม่มี CSV จริง **FR-010b (`seq_no`/`datetime`) กลายเป็นข้อกำหนดกำพร้าตามที่ TC-083 ทำนายไว้** → SA ต้องตัด FR-010/FR-010a(บางส่วน)/FR-010b/FR-011 ที่อ้าง CSV ออกจาก `spec.md` (spec ยังไม่ถูกแก้ — **`spec.md` ยัง Draft และยังบังคับ CSV อยู่**)
4. **⚠️ ข้อขัดแย้งใหม่ที่ยังไม่มีใครตัดสิน (NEW — F-014)**: **FR-008 ระบุให้ map `cardNo` ผ่าน Web Service** (`cisappapi` ที่ `11.100.8.44`, operation `customerByPolicyNoNotWhereCustomerStatus`) แต่ **`plan.md` บรรทัด 9 ระบุว่า** *"ดึง `cardNo` จากคอลัมน์ **`id_no` ใน `ili_policy_master` โดยตรง (ไม่ใช่ Web Service แยก — ดู research.md R-004)**"* → **TC-033, TC-034, TC-035 ทดสอบ Web Service ที่ออกแบบว่าจะไม่มีอยู่จริง** ต้องเขียนใหม่ให้ทดสอบการอ่านคอลัมน์ `id_no` แทน (และ TC-034 "ไม่พบ cardNo" เปลี่ยนความหมายเป็น "`id_no` เป็น NULL/ว่าง")
5. **Re-run `coverage` (iteration 2)** หลังลบ/แก้ TC เพื่อยืนยันว่า FR-010/010b/011 และ SC-001/SC-002 ยังมี TC ครอบคลุม
6. **F-001 (PDPA/cardNo) ยัง CRITICAL และยังไม่ถูกปิด** — `plan.md` บรรทัด 58 ปิดเฉพาะ Constitution "I. PDPA-First" ในประเด็น *เบอร์ติดต่อในเนื้อความ* เท่านั้น (ยืนยันว่า**ไม่ต้องมี**เบอร์ 1503 ในข้อความ ต่างจากพี่น้องโดยเจตนา) — **ไม่ได้แตะประเด็นการเก็บ/mask/retention ของ `cardNo` = เลขบัตรประชาชน ซึ่งเป็น dedup key เลย** และ **plan ยังยืนยันว่า cardNo ถูกอ่านตรงจาก `id_no` และเก็บลง `CUSTOMER_BIRTHDAY`** → ความเสี่ยง F-001 **เพิ่มขึ้น ไม่ได้ลดลง**

> **เหตุผลที่ยังไม่แก้ artifacts ในรอบนี้**: pipeline นี้ถูกสั่งงานบนสมมติฐานที่ระบุชัดว่า *"ไม่มี plan.md และยังไม่มีใครตัดสิน CSV vs API — ให้ออกแบบทั้งสองทางแล้ว flag"* การรื้อ 103 TC ใหม่ทั้งชุดจากไฟล์ที่เพิ่งปรากฏกลางรอบ **เกินขอบเขตที่ได้รับมอบหมาย** และควรให้ผู้สั่งงานตัดสินก่อน — **artifacts ทั้งหมดยังใช้ได้และครบถ้วน** เพียงแต่ต้องอ่านคู่กับ addendum นี้ ส่วนที่ต้องลบ/แก้ระบุไว้ครบแล้วข้างต้น
> **artifacts ที่กล่าวว่า "ไม่มี plan.md" หรือ "ยังไม่มีใครตัดสิน" จึงเป็นจริง ณ เวลาที่ออกแบบ (14:49–15:16) แต่ไม่เป็นจริงอีกต่อไป ณ 15:16 เป็นต้นไป**

---

**Feature**: `005-batch-birthday-sms` — Batch ส่ง SMS "Customer Birthday" (โมดูล CSMS)
**FEATURE_DIR**: `Result from QA Skill New Speckit-QA/CSMS-004 Customer Birthday/`
**Spec source (read-only)**: `Spec/Batch เพื่อส่ง SMS Customer Birthday ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md` + `checklist.md`

| Step | Mode | Artifact | Status | Iteration | Updated |
|------|------|----------|--------|-----------|---------|
| 00 | crosscheck | crosscheck-brd-spec_csms-004-birthday.md | **blocked** | — | 2026-07-17 |
| 01 | design | test-scenarios_csms-004-birthday.md · test-cases_csms-004-birthday.csv | done | 1 | 2026-07-17 |
| 02 | risk | risk-analysis_csms-004-birthday.md | done | 1 | 2026-07-17 |
| 03 | coverage | coverage-review_csms-004-birthday.md | done (`covered`) | 1 | 2026-07-17 |
| 04 | test-data | test-data_csms-004-birthday.json | done | 1 | 2026-07-17 |
| 05 | execute | test-cases_csms-004-birthday.csv (statuses) | — | — | — |
| 06 | report | verify-sit-run_<date>.md · SIT-Test-Document_csms-004-birthday.md | — | — | — |
| 07 | regression | verify-regression-run_<date>.md | — | — | — |

## เหตุผลของแต่ละสถานะ

### `00 crosscheck` = **blocked**

**เหตุผล: ไม่มีเอกสารต้นทาง BRD/FRD/UR อยู่บนเครื่องนี้** (`no upstream BRD/FRD/UR source available`)

`spec.md` อ้างถึงเอกสารต้นทาง `SPEC_BATCH-CSMS-004_BirthDay.md` (UR20260070, แก้ไข 06/05/2026 โดย อัครวัฒน์ วัฒธนพงษ์) และ learn note `2147_CSMS-004_BirthDay_QUICK-REFERENCE.md` — แต่ **ทั้งสองไฟล์ไม่มีอยู่ในเครื่องนี้** จึงไม่สามารถทำ two-way traceability matrix (source ⇄ spec) ได้
**ไม่ได้พยายามเดาหรือสร้างเนื้อหาต้นทางขึ้นเอง** — การ crosscheck โดยไม่มีต้นทางจริงเท่ากับกุผลลัพธ์
→ หากต้องการรัน: `/speckit-qa crosscheck <path-to-SPEC_BATCH-CSMS-004_BirthDay.md>`

> **ผลกระทบ**: `design` ถูกออกแบบจาก `spec.md` โดยตรงโดย **ยังไม่ได้ยืนยันว่า `spec.md` ตรงกับความต้องการต้นทางหรือไม่** — หาก spec drift จากต้นทาง ชุดทดสอบนี้จะ bake drift นั้นเข้าไปด้วย โดยเฉพาะประเด็นรหัส `112` (F-002) ซึ่งเป็นข้อที่ spec **ตีความเอกสารต้นทางเอง** (Assumptions ระบุว่าต้นทาง §5 เขียน `'113'` แต่ spec เลือกใช้ `'112'` ตาม §4.1) — **การ crosscheck จะตอบข้อนี้ได้ตรงที่สุด** จึงควรทำทันทีที่หาเอกสารต้นทางเจอ

### `01–04` = done, iteration 1

**ไม่มีการ loop back เกิดขึ้น** — `coverage` รอบแรกได้ verdict `covered` (28/28 ข้อกำหนดมี TC, ไม่มี Gap) จึงไม่มีการ bump iteration ของ `design`/`risk`/`coverage`
การ bump iteration โดยไม่มี rework จริงจะเป็นการรายงานเท็จ

### `05 execute` / `06 report` / `07 regression` = ไม่รัน (—)

**ไม่มี code และไม่มี running application ให้ทดสอบ** — pipeline นี้หยุดที่ `test-data` ตามข้อจำกัดของ environment
**TC ทั้ง 103 ข้อมีสถานะ `Not Run` ทั้งหมด** และ `Tested By` / `Tested Date` **เว้นว่างทุกแถว** — ไม่มีการกุผลลัพธ์ใด ๆ

> **designed 100% ≠ verified 0%** — ตัวเลข coverage 100% หมายถึง "ชุดทดสอบครอบคลุมข้อกำหนดครบ" **ไม่ได้แปลว่าระบบผ่านการทดสอบ** executed coverage = **0%**

---

## ⚠️ ข้อจำกัดสำคัญ: แคมเปญนี้ **ไม่มี `plan.md` และ `tasks.md`** (finding F-006)

**แคมเปญนี้เป็นแคมเปญเดียวใน 4 แคมเปญที่ไม่มี `plan.md`** ซึ่งจำกัดการตัดสินใจที่ปกติต้องอาศัย Technical Context โดยตรง:

| สิ่งที่ปกติ `plan.md` เป็นคนตัดสิน | สถานะจริง |
|---|---|
| **Test level** (Unit / Integration / E2E) ของทั้ง 103 TC | **เป็นสมมติฐาน** — กำหนดจากสิ่งที่ TC ออกแรงทดสอบจริง โดยอนุมานสถาปัตยกรรมจากแคมเปญพี่น้อง (Camel-managed scheduled bean + ESB clients + PostgreSQL) **ยังไม่มีใครยืนยัน** → ต้อง review ใหม่ทั้งตารางเมื่อ plan.md มาถึง |
| **Integration surface** (reuse client เดิม vs เขียนใหม่) | **ไม่ทราบ** → แยก Unit vs Integration ได้ไม่มั่นใจ |
| **กลไกกันรันซ้อน** (lock/guard) | **ไม่ทราบ** → TC-053 / TC-100 เขียนแบบ black-box ตามผลลัพธ์ ไม่อ้างกลไก |
| **ไฟล์/คลาสที่กระทบ** (จาก `tasks.md`) | **ไม่ทราบ** → ไม่มี TC ที่ผูกกับไฟล์ใด |
| **ข้อยุติ CSV vs API** | **ไม่มี** → เป็นที่มาของข้อขัดแย้งด้านล่าง |

**QA ไม่ประดิษฐ์ technical design แทน SA** — ทุกจุดที่ plan.md ควรเป็นคนตอบถูกประกาศเป็นสมมติฐานไว้อย่างชัดเจนใน `test-scenarios_csms-004-birthday.md` §Limitation

---

## ⚠️ ข้อขัดแย้งที่ยังไม่มีข้อยุติ: CSV vs SMS Gateway V3 (finding F-002)

`spec.md` ของแคมเปญนี้บังคับ **สร้างและนำส่งไฟล์ CSV** (FR-010 / FR-010b / FR-011) แต่ `plan.md` ของ **แคมเปญพี่น้องทั้งสาม** ออกแบบว่า **ไม่มี CSV** — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` โดยอ้าง clarification **2026-07-11** และการตรวจโค้ดที่พบว่า **ไม่มี CSV infrastructure ใดๆ ในระบบ**

**แคมเปญนี้ไม่มี `plan.md` เป็นของตัวเอง จึงไม่มีข้อโต้แย้งจากฝั่งออกแบบของตนเอง — ข้อขัดแย้งนี้สืบทอดมาจากแคมเปญพี่น้อง (inherited counter-design)** และ **ยังไม่มีใครตัดสิน**

**QA จึงออกแบบทดสอบไว้ทั้งสองทางและติด tag กำกับ**:

| ชุด | Tag | TC | จำนวน |
|---|---|---|---|
| เส้นทาง CSV | `@disputed @csv-path` | TC-065 – TC-077 | **13** |
| เส้นทาง API | `@disputed @api-path` | TC-078 – TC-083 | **6** |

> **⛔ ห้ามรันทั้งสองชุดพร้อมกัน** — ขัดแย้งกันโดยนิยาม ชุดหนึ่งจะ fail เสมอไม่ว่าระบบจะถูกต้องแค่ไหน
> **เมื่อ SA/PO ตัดสิน MUST ลบชุดที่แพ้ออกทั้งชุด** (พร้อม test-data records ที่ผูกกัน) แล้ว **re-run `coverage` (iteration 2)** เพื่อยืนยันว่า FR-010/010b/011 และ SC-001/SC-002 ยังมี TC เหลือครอบคลุม

**พ่วงด้วยความไม่ตรงกันของรหัส category**: FR-010 ระบุ `SMS_CATEGORY_CODE = '112'` แต่ทะเบียนรหัสของโครงการจอง **`115`** ไว้ให้แคมเปญนี้ (`113`=CSMS-001, `114`=CSMS-002, `116`=GP7) — **`112` ไม่ปรากฏในทะเบียนเลย** → TC-068 `blocked`

---

## CRITICAL findings (ต้องปิดก่อนประกาศว่า feature นี้ "verified")

| # | ระดับ | ประเด็น | บล็อกอะไร |
|---|---|---|---|
| **F-001** | **CRITICAL** | **ไม่มี security/PII NFR เลย ทั้งที่ `cardNo` = เลขบัตรประชาชน เป็น dedup key (FR-008c)** — `checklist.md` G4/CHK023 ชี้ประเด็นนี้เองและจัดว่าแคมเปญนี้แย่ที่สุดด้วยเหตุผลเดียวกัน | TC-035, TC-073, TC-082, TC-087, TC-088, TC-092 **มีอยู่แต่ตัดสิน Pass/Fail ไม่ได้** เพราะไม่มีเกณฑ์ที่เป็นทางการ — **ทางแก้คือ SA/PO เพิ่ม NFR ไม่ใช่ QA เพิ่ม TC** |
| **F-002** | **CRITICAL** | **ข้อขัดแย้ง interface CSV vs API + รหัส `112` vs `115`** | TC-065–TC-083 (19 TC) รันไม่ได้จนกว่าจะตัดสิน |
| **F-005** | MEDIUM | **US5 acceptance-scenario numbering สลับ (1, 6, 7, 2, 3, 4, 5)** — ยืนยันแล้วที่ spec.md บรรทัด 138–144 | QA **map TC ตามเนื้อหา ไม่ใช่ตามหมายเลข** และบันทึกวิธี map ไว้ใน `test-scenarios` §F-005 ครบทั้ง 7 scenario |
| **F-006** | MEDIUM | **ไม่มี `plan.md`** | `Target Test Level` ทั้ง 103 แถวเป็นสมมติฐาน |

(findings ทั้งหมด 13 ข้อ F-001 – F-013 ดู `test-scenarios_csms-004-birthday.md` §Findings)

---

## สรุปตัวเลข

| ตัวชี้วัด | ค่า |
|---|---|
| Test Cases | **103** (TC-001 – TC-103) |
| ข้อกำหนดที่ครอบคลุม | **28/28** (20 FR + 8 SC) = **100% designed coverage** |
| **Executed** | **0 / 103 = 0%** (ไม่มีระบบให้รัน) |
| Dimension | Positive 24 · Negative 25 · **Edge 37** · Concurrency 2 · Security 10 (PDPA 6) · Side-Effects 3 · UX/Usability 2 |
| Priority | P1 63 · P2 37 · P3 3 |
| Risk band | **P0 9** · P1 6 · P2 5 · P3 0 |
| Disputed TC | `@csv-path` 13 · `@api-path` 6 (**รวม 19**) |
| Test data records | **91** (6 arrays) — **synthetic ทั้งหมด, cardNo ขึ้นต้นด้วย 9 ทุกค่า (เลขบัตรจริงขึ้นต้น 1–8) จึงชนกับเลขจริงไม่ได้** |

## Next Actions

1. **SA/PO ตัดสิน F-002** (CSV vs API + รหัส `112`/`115`) → ลบชุด TC ที่แพ้ + re-run `coverage` (iteration 2)
2. **SA/PO เพิ่ม security/PII NFR (F-001)** → ปลดบล็อก 6 PDPA TC
3. **SA แก้ US5 numbering (F-005)** + **ล็อก data contract รหัสประเภทกรมธรรม์ (F-003)**
4. **เขียน `plan.md` (F-006)** → review `Target Test Level` ทั้งตาราง
5. หาเอกสารต้นทาง (`SPEC_BATCH-CSMS-004_BirthDay.md`) → รัน `/speckit-qa crosscheck <path>` เพื่อปลด `00` จาก `blocked`
6. เมื่อมี implementation แล้ว → `/speckit-qa execute`

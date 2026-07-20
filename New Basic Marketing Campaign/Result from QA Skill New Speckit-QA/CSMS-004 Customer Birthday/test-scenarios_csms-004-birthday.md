# Test Scenarios — CSMS-004 "Customer Birthday" (`csms-004-birthday`)

**Feature**: `005-batch-birthday-sms` · **Spec**: `Spec/Batch เพื่อส่ง SMS Customer Birthday ตามเงื่อนไขกลุ่มเป้าหมาย/spec.md` (2026-07-09)
**QA mode**: `design` · **Run date**: 2026-07-17 · **Total TCs**: 103 (`TC-001`–`TC-103`)
**Source artifacts read**: `spec.md`, `checklist.md` — **ไม่มี `plan.md` และ `tasks.md`** (ดู §Limitation)

---

## ⚠️ Disputed Interface — CSV vs SMS Gateway V3

> # 🚨 อ่าน `00-INDEX.md` §ADDENDUM ก่อน — ส่วนนี้ล้าสมัยแล้ว
>
> **`plan.md` ของแคมเปญนี้ปรากฏขึ้น (timestamp `Jul 17 15:16`) ระหว่างที่ pipeline นี้กำลังทำงาน — หลังจากที่ส่วนนี้ถูกเขียนไปแล้ว — และ *ตัดสินข้อขัดแย้งทั้งสองข้อเรียบร้อยแล้ว*:**
> - **ไม่สร้างไฟล์ CSV** — ส่งทีละรายการผ่าน SMS Gateway **V2M1** `sendSmsOtp` (ยืนยันโดยผู้ใช้ **2026-07-15**) → **เส้นทาง CSV แพ้ · ต้องลบ TC-065–TC-077 (13 TC) ทิ้ง**
> - **`sms_category_code` = `115`** (ยืนยันแล้ว, **ไม่ใช่ `112`**) → ข้อสรุปของ QA ถูกต้อง
> - ⚠️ **V2M1 ไม่ใช่ V3** — TC-078–083 เขียนอ้าง V3 ตามแคมเปญพี่น้อง แต่แคมเปญนี้ใช้ **client คนละตัว** → ต้องแก้
> - ⚠️ **ข้อขัดแย้งใหม่ (F-014)**: `plan.md` ดึง `cardNo` จากคอลัมน์ **`id_no` โดยตรง ไม่ใช่ Web Service** ตามที่ FR-008 ระบุ → **TC-033/034/035 ทดสอบสิ่งที่จะไม่มีอยู่จริง**
>
> เนื้อหาด้านล่างนี้ **เป็นจริง ณ เวลาที่ออกแบบ** และยังมีคุณค่าในฐานะบันทึกว่าข้อขัดแย้งคืออะไรและตัดสินไปทางใด — แต่ **ห้ามนำไปใช้เลือกชุดทดสอบโดยไม่อ่าน addendum**

**สถานะ ณ เวลาออกแบบ (ก่อน 15:16): ยังไม่มีข้อยุติ — ต้องให้ SA/PO ตัดสิน ก่อนนำชุดทดสอบนี้ไปใช้จริง**

spec.md ของแคมเปญนี้บังคับให้สร้างและนำส่ง **ไฟล์ CSV** แต่ plan.md ของแคมเปญพี่น้องทั้งสามออกแบบว่า **ไม่มี CSV** — ส่งทีละรายการผ่าน HTTP call ทั้งสองทางขัดกันโดยตรงและ **ไม่สามารถถูกต้องพร้อมกันได้**

### ฝั่งที่ 1 — CSV (สิ่งที่ spec.md ของแคมเปญนี้บังคับ)

| อ้างอิง | ข้อความใน spec |
|---|---|
| **FR-010** | "ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตามรูปแบบชื่อ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` (department=`MKT`, SystemCode=`CSMS`, Category จาก `SMS_CATEGORY` code `'112'` = `MKTBirthday`)" |
| **FR-010b** | "แต่ละแถวใน CSV MUST มีคอลัมน์ตามลำดับ: `mobile`, `var1`, `var2`, `var3`, `seq_no` (Running Number เริ่มจาก 1), `datetime` (`YYYY-MM-DD HH:MM`, ปี ค.ศ.)" |
| **FR-011** | "ระบบ MUST นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB) และรับผลตอบกลับที่มี `refer_no` และสถานะการส่งรายรายการ" |
| US1 Example Data | ชื่อไฟล์ตัวอย่าง `MKT_CSMS_MKTBirthday_690516090000.csv` |
| US4 AS-1/AS-4/AS-5, Key Entities "ไฟล์นำส่ง (Interface File)", Scope | ระบุ CSV ซ้ำอีกหลายจุด |

### ฝั่งที่ 2 — ไม่มี CSV (สิ่งที่ plan.md ของแคมเปญพี่น้องออกแบบไว้)

| อ้างอิง | ข้อความใน plan |
|---|---|
| **CSMS-003 (`003-batch-welcome-new-customer-app-sms/plan.md` บรรทัด 42)** | "ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` เหมือน 002 (FR-017 เดิมถูกตัดออกจาก spec.md แล้ว **2026-07-11** หลังตรวจโค้ดพบว่า **ไม่มี CSV infra ใดๆ ในระบบ**)" |
| **CSMS-003/GP7 (`004-batch-gp7-sms/plan.md` บรรทัด 39)** | "ไม่สร้างไฟล์ CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp` (Clarification **2026-07-11**, ตัดจาก spec เดิมที่อ้างอิงเอกสารต้นทาง V2/file-based)" |
| **CSMS-001 (`002-batch-welcome-new-customer-line-sms/plan.md` บรรทัด 37)** | "**SMS Gateway V3 ส่งได้ทีละ 1 รายการต่อ 1 HTTP call (ไม่มี bulk)** ต่างจาก batch อื่นที่ส่งเป็นไฟล์ทีเดียว" |

### ทำไมแคมเปญนี้ถึงพิเศษ — **ไม่มี plan.md เป็นของตัวเอง**

**แคมเปญนี้เป็นแคมเปญเดียวใน 4 แคมเปญที่ไม่มี `plan.md`** ดังนั้นจึง **ไม่มีข้อโต้แย้งจากฝั่งออกแบบของตัวเอง** — ข้อขัดแย้งนี้ **สืบทอดมาจากแคมเปญพี่น้องทั้งสาม** (inherited counter-design) ไม่ใช่ข้อขัดแย้งภายในเอกสารของแคมเปญนี้เอง พูดอีกอย่างคือ:

- spec.md ของ CSMS-004 **ไม่เคยถูกแก้** ตาม clarification 2026-07-11 ที่ตัด CSV ออกจาก CSMS-001/002/003
- แคมเปญพี่น้องตัด CSV ออกด้วยเหตุผลว่า **ตรวจโค้ดจริงแล้วไม่พบ CSV infrastructure ในระบบเลย** — เหตุผลนี้เป็นเรื่องของ **ทั้งระบบ** ไม่ใช่ของแคมเปญใดแคมเปญหนึ่ง จึงมีน้ำหนักสูงว่าใช้กับแคมเปญนี้ด้วย
- แต่ **ไม่มีใครตัดสินอย่างเป็นทางการ** และ QA ไม่มีอำนาจตัดสินแทน SA/PO

### ผลต่อชุดทดสอบนี้

**ออกแบบทดสอบไว้ทั้งสองทาง** และติด tag กำกับไว้ — รอข้อยุติจาก SA/PO:

| ชุด | Tag | TC | จำนวน |
|---|---|---|---|
| เส้นทาง CSV | `@disputed @csv-path` | TC-065 – TC-077 | **13** |
| เส้นทาง API (`sendSmsOtp`) | `@disputed @api-path` | TC-078 – TC-083 | **6** |

> **⛔ ห้ามรันทั้งสองชุดพร้อมกัน** — ทั้งสองชุดขัดแย้งกันโดยนิยาม ชุดหนึ่งจะ fail เสมอไม่ว่าระบบจะถูกต้องแค่ไหน
> **เมื่อ SA/PO ตัดสินแล้ว MUST ลบชุดที่แพ้ออกทั้งชุด** (พร้อม test-data ที่ผูกกับมัน) แล้ว re-run `coverage` — ไม่ใช่ปล่อยให้ค้างไว้ทั้งคู่
> TC-083 ออกแบบมาเพื่อพิสูจน์โดยเฉพาะว่า **ถ้าเลือกเส้นทาง API แล้ว FR-010b (`seq_no`/`datetime`) จะกลายเป็นข้อกำหนดกำพร้าทันที** — ข้อขัดแย้งนี้จึงไม่ใช่แค่ "เปลี่ยนวิธีส่ง" แต่ทำให้ FR ทั้งข้อไม่มีความหมาย

**ข้อสังเกตเพิ่ม (finding F-002)**: FR-010 ระบุ Category มาจาก `SMS_CATEGORY_CODE = '112'` แต่ **ทะเบียนรหัสของโครงการจอง `115` ไว้ให้แคมเปญนี้** — ดู §Findings

---

## Limitation — แคมเปญนี้ไม่มี `plan.md` (ต้องอ่านก่อนใช้ชุดทดสอบ)

`speckit-qa design` ปกติใช้ **Technical Context จาก `plan.md`** เพื่อตัดสิน **test level** (Unit / Integration / E2E) และ **integration surface** แคมเปญนี้ไม่มีทั้ง `plan.md` และ `tasks.md` ผลคือ:

| สิ่งที่ปกติ plan.md เป็นคนตัดสิน | สถานะในชุดทดสอบนี้ |
|---|---|
| **Test level ของแต่ละ TC** | **สมมติฐาน (assumed)** — กำหนดจาก "สิ่งที่ TC นั้นออกแรงทดสอบจริง" โดยอ้างสถาปัตยกรรมของแคมเปญพี่น้อง (Camel-managed scheduled bean ใน epirusapp + ESB clients + PostgreSQL) ว่าใช้กับแคมเปญนี้ด้วย — **ยังไม่มีใครยืนยัน** |
| **Integration surface** (มี client ตัวไหนอยู่แล้ว / ต้องเขียนใหม่) | **ไม่ทราบ** — ไม่ได้ระบุว่า reuse `MsaCustlookupClient` / `SmsFileGatewayWsClientFactory` หรือเขียนใหม่ จึงไม่สามารถแยก Unit vs Integration ได้อย่างมั่นใจ |
| **กลไกกันรันซ้อน** (Quartz lock / guard) | **ไม่ทราบ** → TC-053 / TC-100 (Concurrency) เขียนแบบ black-box ตามผลลัพธ์ที่ต้องการ ไม่อ้างกลไก |
| **ตำแหน่งไฟล์/คลาสที่กระทบ** | **ไม่ทราบ** (ไม่มี `tasks.md`) → ไม่มี TC ที่ผูกกับไฟล์ใดไฟล์หนึ่ง |
| **ข้อยุติ CSV vs API** | **ไม่มี** → เป็นที่มาของ §Disputed Interface ข้างต้น |

**สิ่งที่ QA ทำแทน**: ระบุ test level ตามพฤติกรรมที่ TC ทดสอบ (`Unit` เมื่อเป็นตรรกะล้วน, `Integration` เมื่อแตะ DB/external service, `E2E` เมื่อผ่าน Admin Dashboard หรือครบ flow) และ **ประกาศไว้ตรงนี้ว่าเป็นสมมติฐาน ไม่ใช่การออกแบบทางเทคนิค** — QA **ไม่ประดิษฐ์ technical design แทน SA** เมื่อ `plan.md` มาถึง ต้อง review คอลัมน์ `Target Test Level` ใหม่ทั้งตาราง

---

## Findings (สรุปประเด็นที่ต้องให้ SA/PO ตัดสิน)

| # | ระดับ | ประเด็น | อ้างอิง | TC ที่เกี่ยวข้อง |
|---|---|---|---|---|
| **F-001** | **CRITICAL** | **ไม่มี security/PII NFR เลย ทั้งที่ dedup key = `cardNo` = เลขบัตรประชาชน** | ดู §PDPA ด้านล่าง | TC-035, TC-073, TC-082, TC-087, TC-088, TC-092 |
| **F-002** | **CRITICAL** | **ข้อขัดแย้ง interface CSV vs API + รหัส category `112` vs `115`** | ดู §Disputed + ด้านล่าง | TC-065–TC-083 (โดยเฉพาะ TC-068, TC-083) |
| **F-003** | HIGH | รหัสประเภทกรมธรรม์ยังไม่ยุติ: `'0'` vs `'O'` / `'I'`/`'G'`/`'P'` | checklist G2; FR-006 ใช้ `'0'` แต่ Key Entities เขียน `'0'/'I'/'G'/'P'` ปนกับ `'O'` ของ CSMS-001/002 | TC-027 |
| **F-004** | MEDIUM | GOV อยู่ใน scope ไม่เท่ากันข้าม spec พี่น้อง | spec นี้รวม GOV ทุกขั้น (ORD/IND/GOV/PA) แต่ตัวอย่างตาราง `CUSTOMER_BIRTHDAY` ยกเฉพาะ ORD/IND/PA; CSMS-001 ไม่มี GOV | TC-017, TC-086 |
| **F-005** | MEDIUM | **US5 acceptance-scenario numbering สลับ (1, 6, 7, 2, 3, 4, 5)** | checklist G1 | ดู §US5 ด้านล่าง |
| **F-006** | MEDIUM | **ไม่มี `plan.md`** → test level เป็นสมมติฐาน | ดู §Limitation | ทั้งตาราง |
| **F-007** | LOW | หมายเลข FR สับสน (`FR-008b`/`FR-008c` แทรกหลัง FR-009/010) | checklist G3 | — (เอกสาร) |
| **F-008** | MEDIUM | ไม่มี validation รูปแบบเบอร์มือถือ | FR-005 พูดถึงแค่ว่าง/ไม่ว่าง | TC-023 |
| **F-009** | HIGH | ไม่ระบุกลไกกันรันซ้อน (daily รอบปกติ vs Manual Fix ที่ SC-007 ให้ซ่อมภายใน 1 ชม.) | FR-014 + SC-007 | TC-053, TC-100 |
| **F-010** | MEDIUM | ไม่มี constraint บังคับ "config เดียวต่อแคมเปญ active" ใน `cf_catalog` | Assumptions | TC-057 |
| **F-011** | MEDIUM | ค่า `LINE_LINK` จาก config ถูกส่งถึงลูกค้าโดยไม่มี validation | FR-010a | TC-059 |
| **F-012** | LOW | ไม่ระบุพฤติกรรมเมื่อกลุ่มเป้าหมายว่างเปล่า | FR-010 | TC-075 |
| **F-013** | LOW | ไม่ระบุเกณฑ์เลือก "กรมธรรม์ตัวแทน 1 ฉบับ" ต่อลูกค้าต่อรอบ | FR-008c + Assumptions | TC-089 |

### F-001 — PDPA / `cardNo` (CRITICAL — รุนแรงที่สุดใน 4 แคมเปญ)

`checklist.md` CHK023/G4 ระบุตรงว่า **"ไม่มี NFR ด้าน security/PII"** และให้เหตุผลว่า **"วิกฤตกว่าแคมเปญอื่นเพราะ `cardNo` = เลขบัตรประชาชน"** — QA ยืนยันการประเมินนี้และ **ไม่ลดระดับความรุนแรง**:

- **FR-008** บังคับ map กรมธรรม์เป็น `cardNo` = **เลขบัตรประชาชน** ผ่าน Web Service
- **FR-008c** ทำให้ `cardNo` กลายเป็น **dedup key** — ไม่ใช่แค่ข้อมูลที่ผ่านทาง แต่เป็น **คีย์ที่ต้องเก็บถาวรและอ่านซ้ำทุกปี**
- **FR-012** บังคับบันทึกลง `CUSTOMER_BIRTHDAY` (**ตารางใหม่ที่ต้องสร้างเฉพาะ batch นี้**) ครบทุก field รวมชื่อ/เบอร์
- **FR-013** ส่ง email แจ้งเตือน **ออกนอกระบบ** ไปยัง distribution list
- FR-010/FR-010b (ถ้าชนะ) ทำให้ **ไฟล์ CSV ที่มีชื่อ + เบอร์ ไปวางอยู่บน filesystem**

**ไม่มี requirement ข้อใดใน spec ระบุ**: การ mask/tokenize `cardNo`, สิทธิ์การเข้าถึง `CUSTOMER_BIRTHDAY`, การเข้ารหัส, retention/การลบ, หรือการห้าม log PII → **ทุกข้อข้างต้นจึงไม่มีเกณฑ์ผ่านที่เป็นทางการ** TC-035/073/082/087/088/092 เขียนไว้แล้วแต่ **ตัดสิน Pass/Fail ไม่ได้จนกว่าจะมี NFR** — นี่คือเหตุผลที่ F-001 เป็น CRITICAL ไม่ใช่ HIGH

> **หมายเหตุ precedent**: `plan.md` ของ CSMS-002/003 **ยกเว้น** Constitution "IV. Audit Trail" โดยยอมรับให้เก็บ `card_no`/`mobile_no`/`fname` เป็น plain field ด้วยเหตุผล "เป็น legacy architecture ทั้งระบบ" — **แต่ precedent นั้นไม่ครอบคลุมแคมเปญนี้โดยอัตโนมัติ** เพราะ (ก) แคมเปญนี้ไม่มี plan.md ที่จะบันทึกการยกเว้น (ข) แคมเปญนี้ใช้ `cardNo` เป็น **dedup key** ซึ่งต่างจากแคมเปญพี่น้องในเชิงปริมาณข้อมูลและอายุการเก็บ **ต้องมีการตัดสินอย่างชัดแจ้งสำหรับแคมเปญนี้**

### F-002 — รหัส category `112` vs `115`

| แหล่ง | รหัส | แคมเปญ |
|---|---|---|
| **spec.md ของแคมเปญนี้ (FR-010, FR-010a, Key Entities, Assumptions)** | **`112`** | Birthday |
| CSMS-001 `002-.../plan.md` บรรทัด 27 + spec.md บรรทัด 65 | `113` | `MKTWelcomeNewCust` |
| CSMS-002 `003-.../plan.md` บรรทัด 28 | `114` | Welcome รอบ 2 |
| **GP7 `004-.../plan.md` บรรทัด 41** | **"`115` จองไว้ให้ `005-batch-birthday-sms` แยกต่างหาก (R-005)"** | **← แคมเปญนี้** |
| GP7 `004-.../plan.md` บรรทัด 27, 41 | `116` = `MKTGracePeriod` (ยืนยันโดยผู้ใช้ 2026-07-11, แทนที่ข้อเสนอ `115` เดิม) | Grace Period |

**`112` ไม่ปรากฏในทะเบียนรหัสของโครงการเลย** ขณะที่ **`115` ถูกจองไว้ให้แคมเปญนี้โดยระบุชื่อ branch ตรงตัว** (`005-batch-birthday-sms`)

น่าสังเกตว่า Assumptions ของ spec **ป้องกัน `112` ไว้เอง** โดยบอกว่าเอกสารต้นทาง §5 ที่ระบุ `'113'` เป็น "ข้อผิดพลาดคัดลอกจาก CSMS-001" — ข้อสังเกตนี้ **ถูกครึ่งเดียว**: `113` เป็นของ CSMS-001 จริง แต่ข้อสรุปที่ตามมา (จึงต้องเป็น `112`) **ไม่ตรงกับทะเบียน** ที่ให้ `115` → **`112` มีแนวโน้มสูงว่าเป็นรหัสค้าง/ผิด**

**QA ไม่เลือกให้** — TC-068 ทำเครื่องหมาย `blocked` รอข้อยุติ ผลกระทบ: หากใช้รหัสผิด **ทั้ง 3 อย่างพังพร้อมกัน** คือ (1) ชื่อไฟล์/Category (FR-010) (2) การ query template (FR-010a) (3) `sms_category_name_abbr` ใน `CSMS_LOG` (FR-012)

### F-005 — US5 numbering สลับ (1, 6, 7, 2, 3, 4, 5)

Acceptance Scenarios ของ **User Story 5** ใน spec.md เรียงหมายเลขผิดลำดับจริง — ตรวจสอบยืนยันแล้วที่ spec.md บรรทัด 138–144:

| ลำดับที่ปรากฏจริง | เลขที่เขียนไว้ | เนื้อหา | TC ที่ map |
|---|---|---|---|
| 1 | **1** | กันส่งซ้ำ: `sms_sent_date` ปีปัจจุบัน is not null | TC-046 |
| 2 | **6** | ลูกค้า 1 ราย 2 กรมธรรม์ → 1 ข้อความ | TC-048 |
| 3 | **7** | เกิด 29 ก.พ. ปีไม่อธิกสุรทิน → ส่ง 28 ก.พ. | TC-012 |
| 4 | **2** | ส่งสำเร็จ → บันทึก `CUSTOMER_BIRTHDAY` + `CSMS_LOG` | TC-084 |
| 5 | **3** | ส่งไม่สำเร็จ/skip → บันทึกสถานะไม่สำเร็จ | TC-085 |
| 6 | **4** | ล้มเหลวระดับรอบ → email แจ้งเตือน | TC-091, TC-074 |
| 7 | **5** | Manual Fix ย้อนหลังโดยไม่ส่งซ้ำ | TC-095, TC-096 |

> **วิธีที่ QA ใช้ map**: **map ตามเนื้อหาของแต่ละ scenario ไม่ใช่ตามหมายเลขที่เขียนไว้** — เพราะหมายเลขเชื่อถือไม่ได้ ทุก TC ที่ผูกกับ US5 อ้าง scenario ด้วย **ลำดับที่ปรากฏจริง + เนื้อหา** (ดูคอลัมน์ Notes ของ TC-046/048/084/085/091/095) ทำให้ครบทั้ง 7 scenario โดยไม่ตกหล่น ซึ่งเป็นความเสี่ยงที่ checklist G1 เตือนไว้พอดี ("อ่านยาก เสี่ยงตกหล่นตอนแปลงเป็น test case")

---

## Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-001 | FR-001 Batch Schedule 09:00 | batch รันอัตโนมัติทุกวันเวลา 09:00 น. | Positive | P1 | @positive @smoke | Integration |
| TC-002 | FR-001 Batch Schedule 09:00 | วันเกิดตรงวันที่ batch ไม่ได้ scheduled (วันหยุด) | Edge | P2 | @edge_case @regression | Integration |
| TC-003 | FR-002 Birthday Day/Month Match | คัดลูกค้าที่วัน/เดือนเกิดตรงกับวันประมวลผล | Positive | P1 | @positive @smoke | Integration |
| TC-004 | FR-002 Birthday Day/Month Match | คัดออกลูกค้าที่วัน/เดือนเกิดไม่ตรงวันประมวลผล | Negative | P1 | @negative @smoke | Integration |
| TC-005 | FR-002 Birthday Day/Month Match | ปีเกิดต่างกันแต่วัน/เดือนตรงกัน ต้องถูกคัดเข้าทั้งหมด | Edge | P2 | @edge_case @regression | Integration |
| TC-006 | FR-002 Birthday Day/Month Match | วัน/เดือนสลับตำแหน่ง (month/day transposition) ต้องไม่ถูกคัดเข้า | Edge | P1 | @edge_case @smoke | Integration |
| TC-007 | FR-002 Birthday Day/Month Match | ลูกค้าที่เกิดในวันประมวลผลพอดี (อายุ 0 ปี) | Edge | P2 | @edge_case @regression | Integration |
| TC-008 | FR-002 Birthday Day/Month Match | birthdate เป็น NULL หรือค่าไม่ถูกต้อง | Negative | P2 | @negative @regression | Integration |
| TC-009 | FR-002 Birthday Day/Month Match | birthdate ถูกเก็บเป็น พ.ศ. แทน ค.ศ. | Edge | P2 | @edge_case @regression | Integration |
| TC-010 | FR-003 Go Live Guard | ไม่ส่งย้อนหลังก่อนวัน Go Live | Negative | P1 | @negative @smoke | Integration |
| TC-011 | FR-003 Go Live Guard | ขอบเขตวัน Go Live พอดี | Edge | P2 | @edge_case @regression | Integration |
| TC-012 | FR-003a Feb-29 Birthday Rule | เกิด 29 ก.พ. ปีไม่อธิกสุรทิน รันวันที่ 28 ก.พ. ต้องส่ง | Edge | P1 | @edge_case @smoke | Integration |
| TC-013 | FR-003a Feb-29 Birthday Rule | เกิด 29 ก.พ. ปีอธิกสุรทิน รันวันที่ 29 ก.พ. ต้องส่ง | Edge | P1 | @edge_case @smoke | Integration |
| TC-014 | FR-003a Feb-29 Birthday Rule | เกิด 29 ก.พ. ปีอธิกสุรทิน รันวันที่ 28 ก.พ. ต้องไม่ส่ง | Edge | P1 | @edge_case @smoke | Integration |
| TC-015 | FR-003a Feb-29 Birthday Rule | เกิด 29 ก.พ. ปีไม่อธิกสุรทิน รันวันที่ 1 มี.ค. ต้องไม่ส่ง | Edge | P2 | @edge_case @regression | Integration |
| TC-016 | FR-003a Feb-29 Birthday Rule | เกิด 28 ก.พ. และเกิด 29 ก.พ. ในวันรัน 28 ก.พ. ปีไม่อธิกสุรทิน | Edge | P2 | @edge_case @regression | Integration |
| TC-017 | FR-004 Inforce Policy Status | กรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce ถูกคัดเข้าครบทุกประเภท | Positive | P1 | @positive @smoke | Integration |
| TC-018 | FR-004 Inforce Policy Status | ORD/PA ที่ policy_status ไม่ใช่ '1' ถูกคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-019 | FR-004 Inforce Policy Status | ขอบเขต policy_status ของ IND/GOV ('1','2','3' เข้า; '4' ออก) | Edge | P1 | @edge_case @smoke | Integration |
| TC-020 | FR-005 Mobile Number Resolution | เลือกเบอร์จาก mobile1 เมื่อมีค่า | Positive | P1 | @positive @smoke | Integration |
| TC-021 | FR-005 Mobile Number Resolution | mobile1 เป็นช่องว่าง/whitespace ต้อง fallback ไป mobile2 | Edge | P2 | @edge_case @regression | Integration |
| TC-022 | FR-005 Mobile Number Resolution | mobile1 และ mobile2 ว่างทั้งคู่ ต้อง skip + บันทึก | Negative | P1 | @negative @smoke | Integration |
| TC-023 | FR-005 Mobile Number Resolution | เบอร์มือถือรูปแบบไม่ถูกต้อง | Negative | P2 | @negative @regression | Integration |
| TC-024 | FR-006 Do Not Contact Filter | ORD ที่ติด Do Not Contact (remark_code = '1') ถูกคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-025 | FR-006 Do Not Contact Filter | IND/GOV/PA ที่ติด Do Not Contact (remark_code = '4') ถูกคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-026 | FR-006 Do Not Contact Filter | รหัส remark ข้ามประเภท ต้องไม่ถูกคัดออกผิด | Edge | P2 | @edge_case @regression | Integration |
| TC-027 | FR-006 Do Not Contact Filter | ความกำกวมของรหัสประเภทกรมธรรม์ 'O' vs '0' | Edge | P2 | @edge_case @regression | Unit |
| TC-028 | FR-007 Agent-Channel Filter | ORD ที่เป็นชำระเอง (title_desc = 'ชำระเอง') ถูกคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-029 | FR-007 Agent-Channel Filter | IND/GOV/PA ที่ position_code = '99' (Orphan) ถูกคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-030 | FR-007 Agent-Channel Filter | ขอบเขต policy_org ที่อนุญาต | Edge | P1 | @edge_case @smoke | Integration |
| TC-031 | FR-007 Agent-Channel Filter | title_desc ที่ใกล้เคียงแต่ไม่เท่ากับ 'ชำระเอง' | Edge | P2 | @edge_case @regression | Integration |
| TC-032 | FR-006 Do Not Contact Filter | กรมธรรม์ช่องทางตัวแทนที่ไม่ติด Do Not Contact ยังอยู่ในกลุ่มเป้าหมาย | Positive | P1 | @positive @smoke | Integration |
| TC-033 | FR-008 Policy to cardNo Mapping | map policy_no เป็น cardNo ผ่าน cisappapi | Positive | P1 | @positive @smoke | Integration |
| TC-034 | FR-008 Policy to cardNo Mapping | ไม่พบ cardNo ของกรมธรรม์ ต้อง skip + บันทึก | Negative | P1 | @negative @smoke | Integration |
| TC-035 | FR-008 Policy to cardNo Mapping | cardNo (เลขบัตรประชาชน) ต้องไม่รั่วผ่าน URL/query string/log ของการเรียก API | Security | P1 | @security @smoke @pdpa | Integration |
| TC-036 | FR-009 Dual-Channel (LINE+APP) Check | LINE = E02 และ APP = E02 ต้องส่ง | Positive | P1 | @positive @smoke | Integration |
| TC-037 | FR-009 Dual-Channel (LINE+APP) Check | LINE = E00 + isBlockLine = true และ APP = E02 ต้องส่ง | Positive | P1 | @positive @smoke | Integration |
| TC-038 | FR-009 Dual-Channel (LINE+APP) Check | LINE = E00 + isBlockLine = false ต้องคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-039 | FR-009 Dual-Channel (LINE+APP) Check | APP = E00 ต้องคัดออก | Negative | P1 | @negative @smoke | Integration |
| TC-040 | FR-009 Dual-Channel (LINE+APP) Check | LINE = E00 + isBlockLine = true และ APP = E00 ต้องคัดออก | Edge | P2 | @edge_case @regression | Integration |
| TC-041 | FR-009 Dual-Channel (LINE+APP) Check | ช่องทาง WEB (BZB) ต้องไม่มีผลต่อการตัดสินใจ | Edge | P2 | @edge_case @regression | Integration |
| TC-042 | FR-009a Per-Record Abnormal Response | ผลตอบกลับ E13/Exception รายรายการ ต้อง skip + บันทึก ไม่ retry | Negative | P1 | @negative @smoke | Integration |
| TC-043 | FR-009a Per-Record Abnormal Response | channel หรือ isBlockLine เป็นค่าว่าง ต้อง skip + บันทึก | Negative | P2 | @negative @regression | Integration |
| TC-044 | FR-009 Dual-Channel (LINE+APP) Check | API ล่มทั้งระบบ ต้อง retry <=3 ครั้งแล้วหยุดรอบ + email | Edge | P2 | @edge_case @regression | Integration |
| TC-045 | FR-009 Dual-Channel (LINE+APP) Check | cisappapi ตอบช้าเกิน SLA 5 วินาที | Edge | P3 | @edge_case @regression | Integration |
| TC-046 | FR-008b Once-per-Birthday-Year Dedup | ลูกค้าที่เคยส่งในวันเกิดปีนี้แล้ว ต้องไม่ส่งซ้ำ | Negative | P1 | @negative @smoke | Integration |
| TC-047 | FR-008b Once-per-Birthday-Year Dedup | เคยส่งเมื่อปีที่แล้วเท่านั้น ต้องส่งได้อีกในปีนี้ | Positive | P1 | @positive @smoke | Integration |
| TC-048 | FR-008c Per-Customer (cardNo) Dedup | ลูกค้า 1 ราย (cardNo เดียว) มีหลายกรมธรรม์เข้าเงื่อนไข ต้องได้ 1 ข้อความ | Edge | P1 | @edge_case @smoke | Integration |
| TC-049 | FR-008b Once-per-Birthday-Year Dedup | ขอบเขตข้ามปีของ dedup (วันเกิด 1 ม.ค.) | Edge | P2 | @edge_case @regression | Integration |
| TC-050 | FR-008b Once-per-Birthday-Year Dedup | ขอบเขต dedup ของลูกค้าเกิด 29 ก.พ. ข้ามปีอธิกสุรทิน | Edge | P2 | @edge_case @regression | Integration |
| TC-051 | FR-008b Once-per-Birthday-Year Dedup | sms_sent_date ถูกเก็บเป็นปี พ.ศ. ทำให้ dedup เทียบผิดปี | Edge | P2 | @edge_case @regression | Integration |
| TC-052 | FR-008c Per-Customer (cardNo) Dedup | cardNo รูปแบบต่างกันเล็กน้อยทำให้ dedup ถูก bypass | Security | P2 | @security @regression | Integration |
| TC-053 | FR-008b Once-per-Birthday-Year Dedup | รัน batch 2 instance พร้อมกันในวันเดียว ต้องไม่ส่งซ้ำ | Concurrency | P1 | @concurrency @smoke | Integration |
| TC-054 | FR-010a Template + cf_catalog Config | ดึงของขวัญและลิงก์จาก cf_catalog ที่ active มาแทนค่าครบ | Positive | P1 | @positive @smoke | Integration |
| TC-055 | FR-010a Template + cf_catalog Config | ไม่พบ config ของขวัญ (REWARDS) ที่ active | Negative | P1 | @negative @smoke | Integration |
| TC-056 | FR-010a Template + cf_catalog Config | config ลิงก์ (LINE_LINK) มีอยู่แต่ไม่ active ('N') | Negative | P1 | @negative @smoke | Integration |
| TC-057 | FR-010a Template + cf_catalog Config | มี config active ซ้ำมากกว่า 1 แถวสำหรับแคมเปญเดียวกัน | Edge | P2 | @edge_case @regression | Integration |
| TC-058 | FR-010a Template + cf_catalog Config | ค่า config เป็น string ว่างหรือ whitespace | Negative | P2 | @negative @regression | Integration |
| TC-059 | FR-010a Template + cf_catalog Config | ค่า LINE_LINK เป็น URL ที่ไม่ปลอดภัย | Security | P2 | @security @regression | Integration |
| TC-060 | FR-010a Template + cf_catalog Config | ดึง template จาก sms_message_schedule ที่อยู่ในช่วงวันที่ | Positive | P1 | @positive @smoke | Integration |
| TC-061 | FR-010a Template + cf_catalog Config | ขอบเขตช่วงวันที่ของ template (begin_date/end_date) | Edge | P2 | @edge_case @regression | Integration |
| TC-062 | FR-010a Template + cf_catalog Config | fallback ไปที่ sms_category เมื่อไม่พบ template ใน schedule | Positive | P2 | @positive @regression | Integration |
| TC-063 | FR-010a Template + cf_catalog Config | ไม่พบ template ทั้ง sms_message_schedule และ sms_category | Negative | P1 | @negative @smoke | Integration |
| TC-064 | FR-010a Template + cf_catalog Config | fname ที่มีรูปแบบผิดปกติ | Edge | P2 | @edge_case @regression | Integration |
| TC-065 | FR-010 CSV Interface File | สร้างไฟล์ CSV encoding UTF-8 | Positive | P1 | @positive @disputed @csv-path @smoke | Integration |
| TC-066 | FR-010 CSV Interface File | ชื่อไฟล์ CSV ตามรูปแบบ [department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv | Positive | P1 | @positive @disputed @csv-path @smoke | Integration |
| TC-067 | FR-010 CSV Interface File | ชื่อไฟล์ใช้ปี พ.ศ. แต่คอลัมน์ datetime ใช้ปี ค.ศ. ในรอบเดียวกัน | Edge | P1 | @edge_case @disputed @csv-path @smoke | Integration |
| TC-068 | FR-010 CSV Interface File | รหัส SMS_CATEGORY_CODE '112' ขัดกับทะเบียนรหัสของโครงการที่จอง '115' | Negative | P1 | @negative @disputed @csv-path @smoke | Integration |
| TC-069 | FR-010b CSV Column Contract | ลำดับคอลัมน์ใน CSV ตรงตาม spec เป๊ะ | Positive | P1 | @positive @disputed @csv-path @smoke | Integration |
| TC-070 | FR-010b CSV Column Contract | seq_no เป็น Running Number เริ่มจาก 1 และต่อเนื่อง | Edge | P1 | @edge_case @disputed @csv-path @smoke | Integration |
| TC-071 | FR-010b CSV Column Contract | รูปแบบคอลัมน์ datetime = 'YYYY-MM-DD HH:MM' ปี ค.ศ. | Edge | P1 | @edge_case @disputed @csv-path @smoke | Integration |
| TC-072 | FR-010b CSV Column Contract | CSV injection จากค่าตัวแปรที่มาจากข้อมูล/config | Security | P1 | @security @disputed @csv-path @smoke | Integration |
| TC-073 | FR-010 CSV Interface File | ไฟล์ CSV ที่พัก ณ ระบบไฟล์มี PII (ชื่อ + เบอร์มือถือ) | Security | P1 | @security @disputed @csv-path @smoke @pdpa | Integration |
| TC-074 | FR-013 Failure Alert Email | สร้างไฟล์ CSV ไม่สำเร็จ ต้องส่ง email แจ้งเตือน | Negative | P1 | @negative @disputed @csv-path @smoke | Integration |
| TC-075 | FR-010 CSV Interface File | กลุ่มเป้าหมายว่างเปล่าในรอบนั้น | Edge | P2 | @edge_case @disputed @csv-path @regression | Integration |
| TC-076 | FR-011 SMS Gateway Delivery | นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน ESB และรับ refer_no | Positive | P1 | @positive @disputed @csv-path @smoke | E2E |
| TC-077 | FR-011 SMS Gateway Delivery | SMS Gateway ปฏิเสธไฟล์ CSV | Negative | P1 | @negative @disputed @csv-path @smoke | Integration |
| TC-078 | FR-011 SMS Gateway Delivery | ส่งทีละรายการผ่าน SMS Gateway V3 sendSmsOtp โดยไม่สร้างไฟล์ | Positive | P1 | @positive @disputed @api-path @smoke | E2E |
| TC-079 | FR-011 SMS Gateway Delivery | รับ refer_no รายรายการจากผลตอบกลับของแต่ละ call | Positive | P1 | @positive @disputed @api-path @smoke | Integration |
| TC-080 | FR-011 SMS Gateway Delivery | call รายรายการล้มเหลว รอบต้องทำงานต่อ | Negative | P1 | @negative @disputed @api-path @smoke | Integration |
| TC-081 | FR-011 SMS Gateway Delivery | ส่ง 10000 รายการทีละ call ภายใน 5 นาที | Edge | P1 | @edge_case @disputed @api-path @smoke | E2E |
| TC-082 | FR-011 SMS Gateway Delivery | cardNo/เบอร์มือถือใน payload ของ sendSmsOtp | Security | P1 | @security @disputed @api-path @smoke @pdpa | Integration |
| TC-083 | FR-010b CSV Column Contract | ข้อกำหนด seq_no และ datetime ไม่มีที่รองรับในเส้นทาง API | Edge | P2 | @edge_case @disputed @api-path @regression | Integration |
| TC-084 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | ส่งสำเร็จ ต้องบันทึก CUSTOMER_BIRTHDAY ครบทุก field และ CSMS_LOG | Positive | P1 | @positive @smoke | Integration |
| TC-085 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | ส่งไม่สำเร็จหรือถูก skip ต้องบันทึกด้วยสถานะไม่สำเร็จ | Positive | P1 | @positive @smoke | Integration |
| TC-086 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | กรมธรรม์ GOV ต้องถูกบันทึกใน CUSTOMER_BIRTHDAY ด้วย | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-087 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | CUSTOMER_BIRTHDAY เก็บ PII (cardNo/เบอร์/ชื่อ) ต้องมีการควบคุมการเข้าถึงและ masking | Security | P1 | @security @smoke @pdpa | Integration |
| TC-088 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | cardNo ต้องไม่ปรากฏใน CSMS_LOG และ application log | Security | P1 | @security @smoke @pdpa | Integration |
| TC-089 | FR-008c Per-Customer (cardNo) Dedup | บันทึกอ้างกรมธรรม์ตัวแทน 1 ฉบับต่อลูกค้าต่อรอบ | Side-Effects | P2 | @side_effect @regression | Integration |
| TC-090 | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | field audit ของ CUSTOMER_BIRTHDAY ถูกบันทึกครบ | Side-Effects | P3 | @side_effect @regression | Integration |
| TC-091 | FR-013 Failure Alert Email | batch ล้มเหลวระดับรอบ ต้อง email แจ้งทีม IT และ User ภายใน 15 นาที | Positive | P1 | @positive @smoke | Integration |
| TC-092 | FR-013 Failure Alert Email | email แจ้งเตือนต้องไม่มี PII (cardNo/เบอร์/ชื่อ) | Security | P1 | @security @smoke @pdpa | Integration |
| TC-093 | FR-013 Failure Alert Email | เนื้อหา email แจ้งเตือนอ่านแล้วลงมือแก้ได้จริง | UX/Usability | P2 | @ux_usability @regression | Integration |
| TC-094 | FR-013 Failure Alert Email | การส่ง email แจ้งเตือนล้มเหลวเอง | Edge | P3 | @edge_case @regression | Integration |
| TC-095 | FR-014 Manual Fix (Idempotent) | IT Admin สั่ง Manual Batch ย้อนหลังตามช่วงวันที่ | Positive | P1 | @positive @smoke | E2E |
| TC-096 | FR-014 Manual Fix (Idempotent) | Manual Fix ต้อง idempotent ไม่ส่งซ้ำรายการที่สำเร็จแล้ว | Positive | P1 | @positive @smoke | E2E |
| TC-097 | FR-014 Manual Fix (Idempotent) | Manual Fix ใช้วันที่ที่ระบุเป็นฐานเทียบวันเกิด ไม่ใช่วันที่กดรัน | Edge | P2 | @edge_case @regression | E2E |
| TC-098 | FR-014 Manual Fix (Idempotent) | เฉพาะ IT_ADMIN ที่ได้รับสิทธิ์เท่านั้นที่สั่ง Manual Batch ได้ | Security | P1 | @security @smoke | E2E |
| TC-099 | FR-014 Manual Fix (Idempotent) | ช่วงวันที่ของ Manual Fix ที่ไม่สมเหตุผล | Negative | P2 | @negative @regression | E2E |
| TC-100 | FR-014 Manual Fix (Idempotent) | สั่ง Manual Fix ขณะที่ batch รอบปกติกำลังทำงาน | Concurrency | P1 | @concurrency @smoke | E2E |
| TC-101 | FR-014 Manual Fix (Idempotent) | หน้า Manual Fix กลางแสดง batch CSMS-004 และผลการรัน | UX/Usability | P2 | @ux_usability @regression | E2E |
| TC-102 | SC-001 Throughput 10k / 5 min | ประมวลผล 10000 รายการภายใน 5 นาที | Edge | P2 | @edge_case @regression | E2E |
| TC-103 | SC-002 99% refer_no | 99% ของรายการที่คัดเลือกได้รับ refer_no | Positive | P2 | @positive @regression | E2E |

---

## BDD Scenarios (Gherkin)

### การคัดเลือกกลุ่มเป้าหมาย

```gherkin
# Covers: FR-001
Feature: Batch schedule 09:00

  @positive @smoke
  Scenario: TC-001 batch รันอัตโนมัติทุกวันเวลา 09:00 น.
    Given scheduler ของ batch CSMS-004 ถูกตั้งไว้ที่ 09:00 น.
    And มีลูกค้าเข้าเงื่อนไขวันเกิดอย่างน้อย 1 ราย
    When เวลาระบบเดินถึง 09:00 น.
    Then batch เริ่มทำงานที่ 09:00 น. ของวันนั้น
    And มีบันทึกการเริ่มรอบใน CSMS_LOG
    # หมายเหตุ: 09:00 เป็นจุดต่างเฉพาะแคมเปญนี้ (พี่น้องใช้ 10:00) — regression risk จาก copy-paste

  @edge_case @regression
  Scenario: TC-002 วันเกิดตรงวันที่ batch ไม่ได้ scheduled (วันหยุด)
    Given batch ไม่ถูก schedule ในวันหยุดที่ลูกค้ามีวันเกิด
    When ถึงวันหยุดนั้น
    Then ไม่มี SMS ถูกส่งในรอบนั้น
    When IT Admin ใช้ Manual Fix ระบุวันหยุดนั้น
    Then ลูกค้าที่ค้างได้รับ SMS ครบโดยไม่ส่งซ้ำ
```

```gherkin
# Covers: FR-002, SC-008
Feature: คัดลูกค้าที่วัน/เดือนเกิดตรงกับวันประมวลผล

  @positive @smoke
  Scenario: TC-003 วัน/เดือนเกิดตรงกับวันประมวลผล
    Given ลูกค้ามีกรมธรรม์ Inforce และ birthdate = "1970-05-16"
    When batch รันวันที่ "2026-05-16"
    Then ลูกค้านั้นถูกคัดเข้ากลุ่มเป้าหมาย

  @negative @smoke
  Scenario: TC-004 วัน/เดือนเกิดไม่ตรงวันประมวลผล
    Given ลูกค้ามีกรมธรรม์ Inforce และ birthdate = "1970-05-17"
    When batch รันวันที่ "2026-05-16"
    Then ลูกค้านั้นถูกคัดออก

  @edge_case @regression
  Scenario Outline: TC-005 ปีเกิดต่างกันแต่วัน/เดือนตรงกัน ต้องถูกคัดเข้าทั้งหมด
    Given ลูกค้ามีกรมธรรม์ Inforce และ birthdate = "<birthdate>"
    When batch รันวันที่ "2026-05-16"
    Then ลูกค้านั้นถูกคัดเข้ากลุ่มเป้าหมาย
    # ระบบเทียบเฉพาะวัน/เดือน ไม่เทียบปีเกิด

    Examples:
      | birthdate  |
      | 1935-05-16 |
      | 1970-05-16 |
      | 2025-05-16 |

  @edge_case @smoke
  Scenario Outline: TC-006 วัน/เดือนสลับตำแหน่ง (month/day transposition) ต้องไม่ถูกคัดเข้า
    Given ลูกค้ามีกรมธรรม์ Inforce และ birthdate = "<birthdate>"
    When batch รันวันที่ "2026-03-04"
    Then ลูกค้านั้น <ผลลัพธ์>
    # DD/MM vs MM/DD สลับกันเป็น defect ที่พบบ่อยในระบบไทย

    Examples:
      | birthdate  | ผลลัพธ์            |
      | 1970-03-04 | ถูกคัดเข้ากลุ่มเป้าหมาย |
      | 1970-04-03 | ถูกคัดออก           |

  @edge_case @regression
  Scenario: TC-007 ลูกค้าที่เกิดในวันประมวลผลพอดี (อายุ 0 ปี)
    Given ลูกค้าเกิด "2026-05-16" (ปีเดียวกับวันรัน) และมีกรมธรรม์ Inforce
    When batch รันวันที่ "2026-05-16"
    Then พฤติกรรมเป็นไปตามที่ SA ระบุอย่างชัดเจน
    And ไม่เกิด exception
    # spec ไม่ระบุกรณีนี้ — คาดหมายว่าคัดเข้าเพราะเทียบเฉพาะวัน/เดือน แต่ต้องให้ SA/PO ยืนยัน
    # (route ไป /speckit-checklist — เป็นคำถามต่อตัว requirement ไม่ใช่ต่อระบบ)

  @negative @regression
  Scenario Outline: TC-008 birthdate เป็น NULL หรือค่าไม่ถูกต้อง
    Given กรมธรรม์ Inforce ที่ birthdate = "<birthdate>"
    When batch รัน
    Then รายการถูก skip และบันทึกเพื่อ audit/Manual Fix
    And ไม่เกิด exception และรอบทำงานต่อ

    Examples:
      | birthdate  |
      | NULL       |
      | 0000-00-00 |
      | 1970-02-31 |

  @edge_case @regression
  Scenario: TC-009 birthdate ถูกเก็บเป็น พ.ศ. แทน ค.ศ.
    Given ข้อมูลมี birthdate = "2513-05-16" (พ.ศ.) ปนกับ "1970-05-16" (ค.ศ.)
    When batch รันวันที่ "2026-05-16"
    Then การเทียบวัน/เดือนยังถูกต้องทั้งสองแถว
    Or ระบบปฏิเสธข้อมูล พ.ศ. อย่างชัดเจนพร้อมบันทึก
    # ความเสี่ยง พ.ศ./ค.ศ. ปนกัน — spec ใช้ พ.ศ. ในชื่อไฟล์แต่ ค.ศ. ในคอลัมน์ datetime (F-002)
```

```gherkin
# Covers: FR-003
Feature: Go Live guard

  @negative @smoke
  Scenario: TC-010 ไม่ส่งย้อนหลังก่อนวัน Go Live
    Given วันเกิดลูกค้าตรงกับวันก่อน Go Live ของแคมเปญ
    When batch รันด้วยวันประมวลผลก่อน Go Live
    Then ระบบไม่ส่ง SMS ย้อนหลัง

  @edge_case @regression
  Scenario Outline: TC-011 ขอบเขตวัน Go Live พอดี
    Given วัน Go Live ของแคมเปญถูกกำหนดไว้
    When batch รันด้วยวันประมวลผล = "<วันที่>"
    Then ระบบ <ผลลัพธ์>

    Examples:
      | วันที่           | ผลลัพธ์  |
      | Go Live - 1 วัน | ไม่ส่ง   |
      | Go Live พอดี    | ส่ง     |
```

```gherkin
# Covers: FR-003a
Feature: กฎวันเกิด 29 กุมภาพันธ์ (Edge หนักที่สุดของแคมเปญนี้)

  @edge_case @smoke
  Scenario Outline: TC-012/TC-013/TC-014/TC-015 ลูกค้าเกิด 29 ก.พ. ในปีต่าง ๆ
    Given ลูกค้า birthdate = "1996-02-29" และมีกรมธรรม์ Inforce
    When batch รันวันที่ "<วันรัน>"
    Then ลูกค้านั้น <ผลลัพธ์>

    Examples:
      | TC     | วันรัน      | ปีอธิกสุรทิน | ผลลัพธ์            | เหตุผล                                    |
      | TC-012 | 2027-02-28 | ไม่ใช่       | ถูกคัดเข้าและได้รับ SMS | ปีไม่มี 29 ก.พ. → ส่ง 28 ก.พ. (FR-003a)      |
      | TC-013 | 2028-02-29 | ใช่         | ถูกคัดเข้าและได้รับ SMS | ปีอธิกสุรทิน → ส่ง 29 ก.พ. ตามปกติ          |
      | TC-014 | 2028-02-28 | ใช่         | ไม่ถูกคัดเข้า        | rule 28 ก.พ. ใช้เฉพาะปีที่ไม่มี 29 ก.พ.      |
      | TC-015 | 2027-03-01 | ไม่ใช่       | ไม่ถูกคัดเข้า        | spec ให้เลื่อนมา 28 ก.พ. ไม่ใช่ไป 1 มี.ค.    |

    # TC-014 ป้องกัน implement แบบ "always 28 Feb" (จะส่งผิดวัน/ซ้ำในปีอธิกสุรทิน)
    # TC-015 ป้องกัน implement แบบ roll-forward

  @edge_case @regression
  Scenario: TC-016 ลูกค้าเกิด 28 ก.พ. และลูกค้าเกิด 29 ก.พ. ในวันรัน 28 ก.พ. ปีไม่อธิกสุรทิน
    Given ลูกค้า A มี birthdate = "1980-02-28"
    And ลูกค้า B มี birthdate = "1996-02-29"
    And ปี 2027 ไม่ใช่ปีอธิกสุรทิน
    When batch รันวันที่ "2027-02-28"
    Then ทั้งลูกค้า A และลูกค้า B ถูกคัดเข้ากลุ่มเป้าหมาย
    And ลูกค้า A ได้รับ SMS 1 ข้อความเท่านั้น
    And ลูกค้า B ได้รับ SMS 1 ข้อความเท่านั้น
    # จุดที่ rule 28 ก.พ. ทับซ้อนกับลูกค้าที่เกิด 28 ก.พ. จริง
```

```gherkin
# Covers: FR-004, SC-008
Feature: คัดเฉพาะกรมธรรม์สถานะ Inforce

  @positive @smoke
  Scenario: TC-017 กรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce ถูกคัดเข้าครบทุกประเภท
    Given มีกรมธรรม์เข้าเงื่อนไขวันเกิดครบ 4 ประเภท (ORD, IND, GOV, PA) สถานะ Inforce
    When batch รัน
    Then ทั้ง ORD, IND, GOV และ PA ถูกคัดเข้ากลุ่มเป้าหมายครบ
    # GOV MUST อยู่ใน scope (F-004)

  @negative @smoke
  Scenario Outline: TC-018 ORD/PA ที่ policy_status ไม่ใช่ '1' ถูกคัดออก
    Given กรมธรรม์ "<ประเภท>" ที่ policy_status = "2" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออกแม้ตรงวันเกิด

    Examples:
      | ประเภท |
      | ORD   |
      | PA    |

  @edge_case @smoke
  Scenario Outline: TC-019 ขอบเขต policy_status ของ IND/GOV
    Given กรมธรรม์ "<ประเภท>" ที่ policy_status = "<status>" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้น <ผลลัพธ์>

    Examples:
      | ประเภท | status | ผลลัพธ์    |
      | IND   | 1      | ถูกคัดเข้า |
      | IND   | 2      | ถูกคัดเข้า |
      | IND   | 3      | ถูกคัดเข้า |
      | IND   | 4      | ถูกคัดออก |
      | GOV   | 1      | ถูกคัดเข้า |
      | GOV   | 3      | ถูกคัดเข้า |
      | GOV   | 4      | ถูกคัดออก |
```

```gherkin
# Covers: FR-005
Feature: การเลือกเบอร์มือถือ

  @positive @smoke
  Scenario: TC-020 เลือกเบอร์จาก mobile1 เมื่อมีค่า
    Given กรมธรรม์เข้าเงื่อนไขที่ mobile1 = "0845012341" และ mobile2 = "0899999999"
    When batch รัน
    Then ระบบใช้ "0845012341" เป็นเบอร์ส่ง

  @edge_case @regression
  Scenario: TC-021 mobile1 เป็น whitespace ต้อง fallback ไป mobile2
    Given กรมธรรม์เข้าเงื่อนไขที่ mobile1 = "   " และ mobile2 = "0899999999"
    When batch รัน
    Then ระบบใช้ "0899999999" เป็นเบอร์ส่ง
    # ทดสอบ nullif(trim(...)) จริง ไม่ใช่แค่ NULL

  @negative @smoke
  Scenario: TC-022 mobile1 และ mobile2 ว่างทั้งคู่
    Given กรมธรรม์เข้าเงื่อนไขที่ mobile1 = NULL และ mobile2 = ""
    When batch รัน
    Then รายการถูก skip ไม่ส่ง SMS
    And บันทึกเพื่อ Manual Fix
    And รอบทำงานต่อ

  @negative @regression
  Scenario Outline: TC-023 เบอร์มือถือรูปแบบไม่ถูกต้อง
    Given กรมธรรม์เข้าเงื่อนไขที่ mobile1 = "<mobile>"
    When batch รัน
    Then ระบบมีพฤติกรรมที่นิยามไว้ชัดเจน (normalize หรือ skip+บันทึก)
    And MUST NOT ส่งไปยังเบอร์ที่ผิดรูปแบบโดยเงียบ

    Examples:
      | mobile          | ประเด็น              |
      | 084-501-2341    | มีขีดคั่น            |
      | +66845012341    | รูปแบบสากล           |
      | 0845            | สั้นเกินไป           |
      | 08450123419999  | ยาวเกินไป            |
      | ABCDEFGHIJ      | ไม่ใช่ตัวเลข          |

    # spec ไม่มี validation รูปแบบเบอร์ (F-008) — negative-input-catalog §C
```

### การคัดกรอง (Do Not Contact + ช่องทางตัวแทน)

```gherkin
# Covers: FR-006, SC-008
Feature: Do Not Contact filter

  @negative @smoke
  Scenario: TC-024 ORD ที่ติด Do Not Contact (remark_code = '1')
    Given กรมธรรม์ ORD (policy_type = "0") ที่มี ili_policy_remark.remark_code = "1" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออกจากกลุ่มเป้าหมาย

  @negative @smoke
  Scenario Outline: TC-025 IND/GOV/PA ที่ติด Do Not Contact (remark_code = '4')
    Given กรมธรรม์ "<ประเภท>" (policy_type = "<code>") ที่มี remark_code = "4" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออก

    Examples:
      | ประเภท | code |
      | IND   | I    |
      | GOV   | G    |
      | PA    | P    |

  @edge_case @regression
  Scenario Outline: TC-026 รหัส remark ข้ามประเภท ต้องไม่ถูกคัดออกผิด
    Given กรมธรรม์ "<ประเภท>" ที่มี remark_code = "<remark>"
    When batch รัน
    Then กรมธรรม์นั้นยังคงอยู่ในกลุ่มเป้าหมาย
    # เกณฑ์ผูกกับคู่ (policy_type, remark_code) ไม่ใช่ remark_code เดี่ยว
    # ป้องกัน implement ที่ตัด remark_code IN ('1','4') โดยไม่ดู policy_type

    Examples:
      | ประเภท | remark |
      | ORD   | 4      |
      | PA    | 1      |

  @edge_case @regression
  Scenario: TC-027 ความกำกวมของรหัสประเภทกรมธรรม์ 'O' vs '0'
    Given ข้อมูลทดสอบมี policy_type = "0" (เลขศูนย์) และ "O" (ตัวโอ) ปนกัน
    When batch รัน
    Then data contract ของรหัส ORD ถูกล็อกไว้ชัดเจนและระบบคัดกรองตรงตามนั้นทุกแถว
    And ไม่มีกรมธรรม์ ORD หลุดการคัดกรอง Do Not Contact เพราะรหัสไม่ตรง
    # BLOCKED: F-003 / checklist G2 ยังไม่ยุติ — ต้องให้ SA ล็อก data contract ก่อน

  @positive @smoke
  Scenario: TC-032 กรมธรรม์ช่องทางตัวแทนที่ไม่ติด Do Not Contact ยังอยู่ในกลุ่มเป้าหมาย
    Given กรมธรรม์ ORD Inforce ตรงวันเกิด
    And ไม่มี remark
    And title_desc <> "ชำระเอง"
    And policy_org = 2070500
    When batch รัน
    Then กรมธรรม์นั้นคงอยู่ในกลุ่มเป้าหมาย
```

```gherkin
# Covers: FR-007, SC-008
Feature: คัดเฉพาะช่องทางตัวแทน (ไม่ใช่ชำระเอง/Orphan)

  @negative @smoke
  Scenario: TC-028 ORD ที่เป็นชำระเอง
    Given กรมธรรม์ ORD ที่ title_desc = "ชำระเอง" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออก (ไม่ใช่ช่องทางตัวแทน)

  @negative @smoke
  Scenario Outline: TC-029 IND/GOV/PA ที่ position_code = '99' (Orphan)
    Given กรมธรรม์ "<ประเภท>" ที่ position_code = "99" ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้นถูกคัดออก

    Examples:
      | ประเภท |
      | IND   |
      | GOV   |
      | PA    |

  @edge_case @smoke
  Scenario Outline: TC-030 ขอบเขต policy_org ที่อนุญาต
    Given กรมธรรม์ที่ policy_org = <policy_org> ตรงวันเกิด
    When batch รัน
    Then กรมธรรม์นั้น <ผลลัพธ์>

    Examples:
      | policy_org | ผลลัพธ์    | ขอบเขต       |
      | 2070000    | ถูกคัดออก | min - 1     |
      | 2070001    | ถูกคัดเข้า | min         |
      | 2079999    | ถูกคัดเข้า | max         |
      | 2080000    | ถูกคัดออก | max + 1     |
      | 5070000    | ถูกคัดออก | min - 1     |
      | 5070001    | ถูกคัดเข้า | min         |
      | 5079999    | ถูกคัดเข้า | max         |
      | 5080000    | ถูกคัดออก | max + 1     |

  @edge_case @regression
  Scenario Outline: TC-031 title_desc ที่ใกล้เคียงแต่ไม่เท่ากับ 'ชำระเอง'
    Given กรมธรรม์ ORD ที่ title_desc = "<title_desc>"
    When batch รัน
    Then พฤติกรรมการเทียบเป็นไปตามที่นิยามไว้อย่างสม่ำเสมอ
    And ไม่มีลูกค้าชำระเองหลุดเข้ากลุ่มเป้าหมาย

    Examples:
      | title_desc      | ประเด็น                            |
      | ชำระเอง␣         | มี space ต่อท้าย                    |
      | ␣ชำระเอง         | มี space นำหน้า                     |
      | ชำระเองผ่านบัตร   | เป็น substring                      |
      | ชําระเอง         | สระอา ('ำ' vs 'ํา') ต่างกันระดับ byte |

    # negative-input-catalog §B (whitespace / homoglyph / unicode)
```

### cardNo mapping + ตรวจ 2 ช่องทาง

```gherkin
# Covers: FR-008
Feature: map policy_no เป็น cardNo

  @positive @smoke
  Scenario: TC-033 map policy_no เป็น cardNo ผ่าน cisappapi
    Given กรมธรรม์ผ่านการคัดกรองแล้ว
    And cisappapi ตอบ cardNo ปกติ
    When batch เรียก operation "customerByPolicyNoNotWhereCustomerStatus"
    Then ระบบได้ cardNo ที่ถูกต้อง
    And ใช้ cardNo นั้นเป็นคีย์ต่อในขั้นตรวจช่องทาง

  @negative @smoke
  Scenario: TC-034 ไม่พบ cardNo ของกรมธรรม์
    Given cisappapi ตอบว่าไม่พบ cardNo สำหรับ policy_no ที่ส่งไป
    When batch ประมวลผล
    Then กรมธรรม์นั้นถูกคัดออก
    And บันทึกสถานะไม่สำเร็จเพื่อ Manual Fix
    And รอบไม่หยุด

  @security @smoke @pdpa
  Scenario: TC-035 cardNo ต้องไม่รั่วผ่าน URL/query string/log
    Given เปิด log ระดับ DEBUG/TRACE ของ HTTP client
    When batch รัน
    Then cardNo MUST NOT ปรากฏใน URL หรือ query string
    And cardNo MUST NOT ปรากฏใน access log
    And หาก cardNo อยู่ใน body ต้องผ่าน TLS และไม่ถูก log เป็น plaintext
    # PDPA CRITICAL (F-001) — ยังไม่มี security/PII NFR รองรับ จึงยังไม่มีเกณฑ์ผ่านที่เป็นทางการ
```

```gherkin
# Covers: FR-009, SC-008
Feature: ตรวจสถานะ 2 ช่องทาง (LINE Ocean Connect + Ocean Club App)

  @positive @negative @smoke
  Scenario Outline: TC-036/TC-037/TC-038/TC-039/TC-040 ตารางเกณฑ์การตัดสินใจส่ง
    Given cardNo ที่ LINE ตอบ "<LINE>" และ isBlockLine = "<isBlockLine>"
    And APP ตอบ "<APP>"
    When batch ประมวลผลผลตอบกลับ
    Then ลูกค้านั้น <ผลลัพธ์>

    Examples:
      | TC     | LINE | isBlockLine | APP | ผลลัพธ์  | เหตุผล                          |
      | TC-036 | E02  | -           | E02 | ส่ง     | ยังไม่สมัครช่องทางใดเลย            |
      | TC-037 | E00  | true        | E02 | ส่ง     | บล็อก LINE + ยังไม่มีแอป           |
      | TC-038 | E00  | false       | E02 | คัดออก  | ใช้งาน LINE อยู่                  |
      | TC-039 | E02  | -           | E00 | คัดออก  | มี Ocean Club App แล้ว            |
      | TC-040 | E00  | true        | E00 | คัดออก  | APP=E00 เหนือกว่า (เกณฑ์ส่งบังคับ APP=E02) |

    # TC-040 ปิดช่องว่างของตารางเกณฑ์ที่ spec ไม่ได้ยกกรณีนี้ตรง ๆ — ตรวจความครบถ้วนของ truth table

  @edge_case @regression
  Scenario: TC-041 ช่องทาง WEB (BZB) ต้องไม่มีผลต่อการตัดสินใจ
    Given cardNo ที่ LINE = "E02" และ APP = "E02" แต่ WEB = "E00"
    When batch ประมวลผล
    Then ลูกค้ายังถูกคัดเข้าและได้รับ SMS
    # Assumptions: ไม่รวมช่องทาง WEB ในการตัดสินใจ

  @edge_case @regression
  Scenario: TC-044 API ล่มทั้งระบบ ต้อง retry <=3 ครั้งแล้วหยุดรอบ + email
    Given cisappapi ไม่ตอบสนองทุกคำขอ
    When batch รัน
    Then ระบบ retry ไม่เกิน 3 ครั้งแบบเว้นช่วง
    And หยุดรอบ
    And ส่ง email แจ้งเตือน
    # ต่างจาก FR-009a ที่ skip รายรายการ — นี่คือความล้มเหลวระดับระบบ

  @edge_case
  Scenario Outline: TC-045 cisappapi ตอบช้าเกิน SLA 5 วินาที
    Given cisappapi ตอบสนองที่ <เวลา> วินาที
    When batch รัน
    Then พฤติกรรม timeout เป็นไปตาม SLA ที่ระบุใน Assumptions
    And รอบไม่ค้างไม่จบ

    Examples:
      | เวลา |
      | 4.9 |
      | 5.1 |

    # Assumptions ระบุ SLA 5 วินาที แต่ spec ไม่ระบุค่า timeout จริง — gap
```

```gherkin
# Covers: FR-009a
Feature: ผลตอบกลับรายรายการผิดปกติ

  @negative @smoke
  Scenario: TC-042 ผลตอบกลับ E13/Exception รายรายการ
    Given cardNo หนึ่งรายได้ผลตอบกลับ "E13"/Exception
    And รายอื่นได้ผลตอบกลับปกติ
    When batch ประมวลผล
    Then รายการนั้นถูก skip และบันทึกสถานะไม่สำเร็จ
    And ไม่มี retry รายรายการ
    And รอบยังประมวลผลรายอื่นต่อจนจบ

  @negative @regression
  Scenario Outline: TC-043 channel หรือ isBlockLine เป็นค่าว่าง
    Given ผลตอบกลับมี <field> = "<ค่า>"
    When batch ประมวลผล
    Then รายการถูก skip และบันทึกสถานะไม่สำเร็จ
    And ระบบไม่ตีความค่าว่างเป็น false โดยปริยาย
    And รอบทำงานต่อ

    Examples:
      | field       | ค่า  |
      | channel     |     |
      | isBlockLine |     |
      | isBlockLine | null |

    # ค่าว่างต้องไม่ถูก default เป็น "ส่ง"
```

### การกันส่งซ้ำ (dedup — key = cardNo)

```gherkin
# Covers: FR-008b, FR-008c, SC-003
Feature: กันส่งซ้ำ 1 ข้อความต่อลูกค้าต่อวันเกิดปีนั้น

  @negative @smoke
  Scenario: TC-046 ลูกค้าที่เคยส่งในวันเกิดปีนี้แล้ว ต้องไม่ส่งซ้ำ
    Given CUSTOMER_BIRTHDAY มีแถวของ cardNo นี้ที่ sms_sent_date เป็นวันในปีปัจจุบัน
    When batch รันวันเดิมซ้ำอีกรอบ
    Then ลูกค้านั้นถูกคัดออก ไม่ส่งซ้ำ
    And จำนวนการส่งซ้ำ = 0
    # US5 scenario ลำดับที่ 1 (เขียนเลข 1) / SC-003

  @positive @smoke
  Scenario: TC-047 เคยส่งเมื่อปีที่แล้วเท่านั้น ต้องส่งได้อีกในปีนี้
    Given CUSTOMER_BIRTHDAY มีแถวของ cardNo นี้ที่ sms_sent_date = "2026-05-16" เท่านั้น
    When batch รันวันที่ "2027-05-16"
    Then ลูกค้าได้รับ SMS อีกครั้งในปี 2027
    # Assumptions: "ปีถัดไปวันเกิดเดิมยังส่งได้"

  @edge_case @smoke
  Scenario: TC-048 ลูกค้า 1 ราย (cardNo เดียว) มีหลายกรมธรรม์เข้าเงื่อนไข
    Given cardNo เดียวมีกรมธรรม์ ORD และ PA เข้าเงื่อนไขวันเกิดในรอบเดียวกัน
    When batch รัน
    Then ลูกค้าได้รับ SMS 1 ข้อความเท่านั้น
    # dedup ระดับลูกค้า — ต่างจาก CSMS-003 (GP7) ที่ dedup รายกรมธรรม์
    # US5 scenario ลำดับที่ 2 (แต่เขียนเลข 6 — numbering สลับ, F-005)

  @edge_case @regression
  Scenario: TC-049 ขอบเขตข้ามปีของ dedup (วันเกิด 1 ม.ค.)
    Given ลูกค้า birthdate = "1980-01-01" และส่งสำเร็จแล้วเมื่อ "2026-01-01"
    When batch รันวันที่ "2026-12-31"
    Then ลูกค้าไม่ถูกคัดเข้า (ไม่ตรงวันเกิด)
    When batch รันวันที่ "2027-01-01"
    Then ลูกค้าได้รับ SMS 1 ข้อความ
    # dedup ข้ามขอบปีเป็นจุดที่ off-by-one เกิดง่ายที่สุด

  @edge_case @regression
  Scenario: TC-050 ขอบเขต dedup ของลูกค้าเกิด 29 ก.พ. ข้ามปีอธิกสุรทิน
    Given ลูกค้า birthdate = "1996-02-29"
    And ได้รับ SMS แล้วเมื่อ "2027-02-28" (ปีไม่อธิกสุรทิน)
    When batch รันวันที่ "2028-02-29" (ปีอธิกสุรทิน)
    Then ลูกค้าได้รับ SMS ในปี 2028
    # dedup เทียบปี ไม่ใช่เทียบวัน/เดือนที่เคยส่ง — จุดที่ implement พลาดง่าย

  @edge_case @regression
  Scenario: TC-051 sms_sent_date ถูกเก็บเป็นปี พ.ศ. ทำให้ dedup เทียบผิดปี
    Given CUSTOMER_BIRTHDAY มีแถวที่ sms_sent_date เก็บปี พ.ศ. ("2569") ปนกับ ค.ศ. ("2026")
    When batch รันวันที่ "2026-05-16"
    Then ระบบเทียบปีได้ถูกต้องตามชนิดข้อมูลที่นิยามไว้ (ค.ศ.)
    And ไม่เกิดทั้งการส่งซ้ำและการไม่ส่งโดยผิดพลาด
    # ความเสี่ยง พ.ศ./ค.ศ. ปนกัน (F-002)

  @security @regression
  Scenario Outline: TC-052 cardNo รูปแบบต่างกันเล็กน้อยทำให้ dedup ถูก bypass
    Given CUSTOMER_BIRTHDAY มีแถวของ cardNo "1000000000001"
    And ข้อมูลรอบนี้ให้ cardNo = "<cardNo รอบนี้>"
    When batch รัน
    Then ระบบ normalize cardNo ก่อนเทียบ
    And ลูกค้าได้รับ 1 ข้อความเท่านั้น

    Examples:
      | cardNo รอบนี้              | ประเด็น                |
      | ␣1000000000001            | มี space นำหน้า        |
      | 1000000000001␣            | มี space ต่อท้าย       |
      | 1000000000001<ZWSP>       | มี zero-width space   |

    # negative-input-catalog §B (unicode dedup bypass); dedup key = PII จึงจัดเป็น Security

  @concurrency @smoke
  Scenario: TC-053 รัน batch 2 instance พร้อมกันในวันเดียว
    Given ลูกค้า 1 ราย 1 cardNo เข้าเงื่อนไข
    When trigger batch 2 instance พร้อมกัน
    Then ลูกค้าได้รับ 1 ข้อความเท่านั้น
    And ไม่เกิดแถวซ้ำใน CUSTOMER_BIRTHDAY
    # spec ไม่ระบุกลไกกันรันซ้อน (F-009) — ไม่มี plan.md จึงไม่ทราบว่ามี Quartz/lock หรือไม่
```

### การสร้างข้อความจาก template + config

```gherkin
# Covers: FR-010a, SC-005
Feature: ดึง template และ config (cf_catalog) มาแทนค่าตัวแปร

  @positive @smoke
  Scenario: TC-054 ดึงของขวัญและลิงก์จาก cf_catalog ที่ active มาแทนค่าครบ
    Given cf_catalog มี config_type = "REWARDS", config_value1 = "CSMS_SBD_Birthday", active = "Y", ค่า = "500 เหรียญ"
    And cf_catalog มี config_type = "LINE_LINK", config_value1 = "CSMS_SBD_Birthday", active = "Y", ค่า = "https://lin.ee/JianZUe"
    And ลูกค้าที่ fname = "สมชัย"
    When batch render ข้อความ
    Then ข้อความมี var1 = "สมชัย"
    And ข้อความมี var2 = "500 เหรียญ"
    And ข้อความมี var3 = "https://lin.ee/JianZUe"
    And ไม่มีตัวแปรค้างในข้อความ

  @negative @smoke
  Scenario Outline: TC-055/TC-056/TC-058 config ที่จำเป็นไม่พบ / ไม่ active / ค่าว่าง
    Given cf_catalog มีสถานะ "<สถานะ config>"
    When batch ประมวลผล
    Then ระบบ MUST NOT ส่งข้อความที่ตัวแปรว่าง
    And skip รายการนั้น
    And บันทึกรายการ
    And แจ้งเตือน

    Examples:
      | TC     | สถานะ config                                  |
      | TC-055 | ไม่มีแถว REWARDS/CSMS_SBD_Birthday ที่ active     |
      | TC-056 | มีแถว LINE_LINK แต่ active = 'N'                |
      | TC-058 | มีแถว REWARDS active 'Y' แต่ค่าเป็น '' หรือ '   ' |

    # SC-005 = ไม่มีข้อความที่ตัวแปรว่างถูกส่งออก

  @edge_case @regression
  Scenario: TC-057 มี config active ซ้ำมากกว่า 1 แถวสำหรับแคมเปญเดียวกัน
    Given cf_catalog มี REWARDS/CSMS_SBD_Birthday active "Y" 2 แถว (ค่า "500 เหรียญ" และ "1000 เหรียญ")
    When batch รัน 2 รอบด้วยข้อมูลเดิม
    Then ระบบเลือกค่าแบบ deterministic (ค่าเดิมทุกรอบ)
    Or ถือเป็นความผิดพลาด config และแจ้งเตือน
    And MUST NOT สุ่มค่าต่างกันในแต่ละรอบ
    # Assumptions ระบุ "config เดียวต่อแคมเปญ active" แต่ไม่มี constraint บังคับ (F-010)

  @security @regression
  Scenario Outline: TC-059 ค่า LINE_LINK เป็น URL ที่ไม่ปลอดภัย
    Given cf_catalog มี LINE_LINK active "Y" ที่ค่า = "<url>"
    When batch render ข้อความ
    Then ระบบ validate scheme/โดเมนของลิงก์ก่อนใส่ในข้อความ
    Or มีการควบคุมการแก้ไข config ที่ตรวจสอบได้
    And ไม่ส่งลิงก์ phishing ให้ลูกค้าในนามบริษัท

    Examples:
      | url                              |
      | javascript:alert(1)              |
      | http://evil.example.com/phish    |
      | https://lin.ee/x?next=//evil.com |

    # config ที่ทีมการตลาดแก้ได้ถูกส่งตรงถึงลูกค้าโดยไม่มี validation (F-011)

  @positive @smoke
  Scenario: TC-060 ดึง template จาก sms_message_schedule ที่อยู่ในช่วงวันที่
    Given sms_message_schedule มีแถวที่ sms_category_code ตรงกับแคมเปญ
    And begin_date <= วันปัจจุบัน <= end_date
    When batch รัน
    Then ระบบใช้ template จาก sms_message_schedule (ไม่ fallback)

  @edge_case @regression
  Scenario Outline: TC-061 ขอบเขตช่วงวันที่ของ template
    Given sms_message_schedule มีแถวที่ begin_date = "2026-05-16" และ end_date = "2026-05-16"
    When batch รันวันที่ "<วันรัน>"
    Then ระบบใช้ <แหล่ง template>

    Examples:
      | วันรัน      | แหล่ง template       |
      | 2026-05-15 | fallback sms_category |
      | 2026-05-16 | sms_message_schedule  |
      | 2026-05-17 | fallback sms_category |

    # ขอบเขต inclusive ทั้งสองด้าน — negative-input-catalog §C (start == end)

  @positive @regression
  Scenario: TC-062 fallback ไปที่ sms_category เมื่อไม่พบ template ใน schedule
    Given sms_message_schedule ไม่มีแถวที่เข้าเงื่อนไข
    And sms_category มีข้อความ default
    When batch รัน
    Then ระบบใช้ข้อความจาก sms_category แทน
    And ส่งได้ตามปกติ

  @negative @smoke
  Scenario: TC-063 ไม่พบ template ทั้ง sms_message_schedule และ sms_category
    Given ทั้งสองตารางไม่มีข้อความสำหรับ category code ที่ใช้
    When batch รัน
    Then ถือเป็นความล้มเหลวระดับรอบ
    And ส่ง email แจ้งเตือน
    And ไม่มี SMS ถูกส่งออก

  @edge_case @regression
  Scenario Outline: TC-064 fname ที่มีรูปแบบผิดปกติ
    Given ลูกค้าที่ fname = "<fname>"
    When batch render ข้อความ
    Then ข้อความ render ได้โดยไม่เพี้ยน
    And ไม่มีตัวแปรค้าง
    And กรณี fname ว่างมีพฤติกรรมที่นิยามไว้ (skip หรือใช้คำนำหน้าแทน) ไม่ส่งข้อความว่างชื่อ

    Examples:
      | fname                    | ประเด็น          |
      |                          | ว่าง             |
      | ␣␣␣                      | whitespace-only |
      | <ชื่อยาว 200 อักขระ>       | ความยาว          |
      | สมชัย😀                   | emoji           |
      | <ชื่อที่มีอักขระ RTL>       | RTL             |
      | สมชัย<NBSP>ใจดี           | NBSP            |

    # negative-input-catalog §B; spec ไม่ระบุกรณี fname ว่าง — gap
```

### ⚠️ เส้นทาง CSV — `@disputed @csv-path` (TC-065 – TC-077)

> **ชุดนี้ตั้งอยู่บนสมมติฐานว่า spec.md ชนะ** (FR-010/FR-010b/FR-011 = สร้างและนำส่งไฟล์ CSV)
> **ห้ามรันคู่กับชุด `@api-path`** — ต้องลบชุดใดชุดหนึ่งทิ้งเมื่อ SA/PO ตัดสิน

```gherkin
# Covers: FR-010, FR-010b, FR-011, FR-013
Feature: สร้างและนำส่งไฟล์ CSV (DISPUTED — ดู §Disputed Interface)

  @disputed @csv-path @positive @smoke
  Scenario: TC-065 สร้างไฟล์ CSV encoding UTF-8
    Given กลุ่มเป้าหมายที่คัดกรองแล้วมีลูกค้าที่มีชื่อภาษาไทย
    When batch ประมวลผล
    Then ไฟล์ CSV ถูกสร้างด้วย encoding UTF-8
    And ชื่อภาษาไทยอ่านได้ถูกต้อง ไม่เป็นอักขระเพี้ยน

  @disputed @csv-path @positive @smoke
  Scenario: TC-066 ชื่อไฟล์ CSV ตามรูปแบบที่กำหนด
    Given batch รันวันที่ "2026-05-16" เวลา "09:00:00" น.
    And SMS_CATEGORY ให้ค่า Category = "MKTBirthday"
    When batch สร้างไฟล์
    Then ชื่อไฟล์ = "MKT_CSMS_MKTBirthday_690516090000.csv"
    # [department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv — ตัวอย่างจาก spec US1 Example Data

  @disputed @csv-path @edge_case @smoke
  Scenario: TC-067 ชื่อไฟล์ใช้ปี พ.ศ. แต่คอลัมน์ datetime ใช้ปี ค.ศ. ในรอบเดียวกัน
    Given batch รันวันที่ "2026-05-16" (= พ.ศ. 2569) เวลา "09:00" น.
    When batch สร้างไฟล์
    Then ส่วน YY ในชื่อไฟล์ = "69" (พ.ศ. 2569)
    And คอลัมน์ datetime ในไฟล์เดียวกัน = "2026-05-16 09:00" (ค.ศ.)
    And ทั้งสองค่าอ้างถึงวันเดียวกัน
    # การปน พ.ศ./ค.ศ. ในไฟล์เดียวเป็นความเสี่ยง defect เอง (F-002) — ต้องให้ SA ยืนยันว่าตั้งใจ

  @disputed @csv-path @negative @smoke
  Scenario: TC-068 รหัส SMS_CATEGORY_CODE '112' ขัดกับทะเบียนรหัสที่จอง '115'
    Given spec FR-010 ระบุ Category มาจาก SMS_CATEGORY_CODE = "112"
    And ทะเบียนรหัสของโครงการจอง "115" ไว้ให้ 005-batch-birthday-sms
    And "113" = CSMS-001, "114" = CSMS-002, "116" = GP7
    When ตรวจ SMS_CATEGORY ว่า code ใดให้ค่า "MKTBirthday"
    Then รหัสที่ระบบใช้ตรงกับรหัสที่ SA/PO ตัดสินอย่างเป็นทางการ
    And Category ที่ได้ = "MKTBirthday"
    # BLOCKED: F-002 ยังไม่มีข้อยุติ — หากใช้ '112' ที่ไม่มีในทะเบียน ต้องถือเป็น defect
    # ผลกระทบ: รหัสผิด → ชื่อไฟล์ (FR-010) + query template (FR-010a) + CSMS_LOG (FR-012) พังพร้อมกัน

  @disputed @csv-path @positive @smoke
  Scenario: TC-069 ลำดับคอลัมน์ใน CSV ตรงตาม spec เป๊ะ
    Given กลุ่มเป้าหมายที่คัดกรองแล้ว
    When batch สร้างไฟล์ CSV
    Then คอลัมน์เรียงตามลำดับ: "mobile", "var1", "var2", "var3", "seq_no", "datetime"
    And มีครบ 6 คอลัมน์ ไม่สลับตำแหน่ง ไม่ขาด ไม่เกิน
    # ลำดับผิด = SMS Gateway ตีความผิดทั้งไฟล์

  @disputed @csv-path @edge_case @smoke
  Scenario Outline: TC-070 seq_no เป็น Running Number เริ่มจาก 1 และต่อเนื่อง
    Given กลุ่มเป้าหมาย <จำนวน> ราย
    When batch สร้างไฟล์ CSV
    Then seq_no แถวแรก = 1
    And seq_no เพิ่มทีละ 1 ต่อเนื่องไม่ข้ามเลข ไม่ซ้ำ
    And seq_no แถวสุดท้าย = <จำนวน>

    Examples:
      | จำนวน  |
      | 1     |
      | 2     |
      | 10000 |

    # เริ่มที่ 1 ไม่ใช่ 0; boundary ตาม SC-001

  @disputed @csv-path @edge_case @smoke
  Scenario: TC-071 รูปแบบคอลัมน์ datetime
    Given batch รันวันที่ "2026-05-16" เวลา "09:00" น.
    When batch สร้างไฟล์ CSV
    Then ค่าคอลัมน์ datetime ทุกแถว = "2026-05-16 09:00"
    And ปีเป็น ค.ศ. 4 หลัก (ไม่ใช่ พ.ศ. 2569)
    And เดือน/วัน zero-pad
    And ชั่วโมง zero-pad เป็น "09" ไม่ใช่ "9"
    And ไม่มีวินาที
    # zero-pad ของ 09:00 เป็นจุดพลาดง่ายเฉพาะแคมเปญนี้ (รันตอน 09:00 — แคมเปญเดียวที่ไม่ใช่ 10:00)

  @disputed @csv-path @security @smoke
  Scenario Outline: TC-072 CSV injection จากค่าตัวแปรที่มาจากข้อมูล/config
    Given ค่าตัวแปรมี "<ค่า>"
    When batch สร้างไฟล์ CSV
    Then ค่าถูก quote และ escape ถูกต้องตาม RFC 4180
    And จำนวนคอลัมน์ต่อแถวไม่เพี้ยน
    And ค่าที่ขึ้นต้นด้วย = + - @ ไม่ถูกตีความเป็นสูตรเมื่อเปิดด้วย spreadsheet

    Examples:
      | ค่า              | ประเด็น          |
      | สมชัย, ใจดี       | comma           |
      | สมชัย"ใจดี        | อัญประกาศ        |
      | สมชัย<CRLF>ใจดี   | newline         |
      | =cmd\|' /C calc' | formula injection |

    # negative-input-catalog §B; ค่ามาจาก DB และ config ที่ทีมการตลาดแก้ได้

  @disputed @csv-path @security @smoke @pdpa
  Scenario: TC-073 ไฟล์ CSV ที่พัก ณ ระบบไฟล์มี PII
    Given batch สร้างไฟล์ CSV สำเร็จและไฟล์ยังอยู่บน server
    And ไฟล์มีชื่อลูกค้าและเบอร์มือถือ
    When ตรวจ path, file permission และเจ้าของไฟล์
    Then ไฟล์ถูกจำกัดสิทธิ์เฉพาะ service account ที่จำเป็น
    And มีนโยบายเข้ารหัส/จัดเก็บ/ลบที่ระบุไว้
    And ไฟล์ไม่ถูกวางในพื้นที่ที่เข้าถึงได้จากภายนอก
    # PDPA CRITICAL (F-001) — ยังไม่มี security/PII NFR จึงยังไม่มีเกณฑ์ผ่านที่เป็นทางการ

  @disputed @csv-path @negative @smoke
  Scenario Outline: TC-074 สร้างไฟล์ CSV ไม่สำเร็จ ต้องส่ง email แจ้งเตือน
    Given เกิดสภาวะ "<สาเหตุ>"
    When batch พยายามสร้างไฟล์
    Then ระบบตรวจพบความล้มเหลว
    And หยุดรอบ
    And ส่ง email แจ้งทีม IT Development และกลุ่มผู้ใช้งานทันที พร้อมรายละเอียดข้อผิดพลาด

    Examples:
      | สาเหตุ           |
      | ไม่มีสิทธิ์เขียน   |
      | disk เต็ม        |
      | path ไม่มีอยู่     |

    # US5 scenario ลำดับที่ 6 (เขียนเลข 4) / FR-013 ระบุ "สร้างไฟล์ CSV ไม่สำเร็จ" ไว้ตรง ๆ

  @disputed @csv-path @edge_case @regression
  Scenario: TC-075 กลุ่มเป้าหมายว่างเปล่าในรอบนั้น
    Given ไม่มีลูกค้าคนใดมีวันเกิดตรงกับวันประมวลผล
    When batch รัน
    Then พฤติกรรมเป็นไปตามที่นิยามไว้ (ไม่สร้างไฟล์ หรือสร้างไฟล์เปล่า)
    And รอบจบด้วยสถานะสำเร็จ
    And ไม่ส่ง email แจ้งความล้มเหลว
    And มีบันทึกใน CSMS_LOG
    # spec ไม่ระบุ (F-012) — ต้องไม่ถูกตีความว่าเป็นความล้มเหลวระดับรอบ

  @disputed @csv-path @positive @smoke
  Scenario: TC-076 นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน ESB และรับ refer_no
    Given ไฟล์ CSV ถูกสร้างเรียบร้อย
    And SMS Gateway พร้อมใช้งาน
    When batch นำส่งไฟล์ผ่าน Web Service (ESB)
    Then ระบบนำส่งไฟล์สำเร็จ
    And ได้รับผลตอบกลับที่มี refer_no
    And ได้รับสถานะการส่งรายรายการ

  @disputed @csv-path @negative @smoke
  Scenario: TC-077 SMS Gateway ปฏิเสธไฟล์ CSV
    Given SMS Gateway ตอบกลับด้วยความล้มเหลว (ไฟล์ผิดรูปแบบ / service ไม่พร้อม)
    When batch นำส่งไฟล์
    Then บันทึกรายการด้วยสถานะไม่สำเร็จ (ไม่มี refer_no)
    And ไม่ retry อัตโนมัติในรอบ daily
    And ซ่อมผ่าน Manual Fix ได้
    # ระดับไฟล์ล้มเหลว = ลูกค้าทั้งรอบไม่ได้รับ = blast radius สูงกว่า api-path (เทียบ TC-080)
```

### ⚠️ เส้นทาง API — `@disputed @api-path` (TC-078 – TC-083)

> **ชุดนี้ตั้งอยู่บนสมมติฐานว่า plan.md ของแคมเปญพี่น้องชนะ** (ไม่มี CSV — ส่งทีละรายการผ่าน SMS Gateway V3 `sendSmsOtp`)
> **ห้ามรันคู่กับชุด `@csv-path`** — ต้องลบชุดใดชุดหนึ่งทิ้งเมื่อ SA/PO ตัดสิน

```gherkin
# Covers: FR-011, FR-010b, SC-001, SC-002
Feature: ส่งทีละรายการผ่าน SMS Gateway V3 (DISPUTED — ดู §Disputed Interface)

  @disputed @api-path @positive @smoke
  Scenario: TC-078 ส่งทีละรายการผ่าน sendSmsOtp โดยไม่สร้างไฟล์
    Given กลุ่มเป้าหมายที่คัดกรองแล้ว 3 ราย
    And SMS Gateway V3 พร้อมใช้งาน
    When batch ประมวลผล
    Then เกิด 1 HTTP call ต่อ 1 ลูกค้า (รวม 3 call)
    And แต่ละ call มีเบอร์มือถือและข้อความที่ render var1/var2/var3 ครบ
    And ไม่มีไฟล์ CSV ถูกสร้าง

  @disputed @api-path @positive @smoke
  Scenario: TC-079 รับ refer_no รายรายการจากผลตอบกลับของแต่ละ call
    Given SMS Gateway V3 ตอบกลับ refer_no ต่อ call
    When batch ส่งครบทุกราย
    Then แต่ละรายการได้รับ refer_no ของตัวเอง
    And refer_no ถูกบันทึกลง CUSTOMER_BIRTHDAY ครบ (>= 99% ตาม SC-002)

  @disputed @api-path @negative @smoke
  Scenario: TC-080 call รายรายการล้มเหลว รอบต้องทำงานต่อ
    Given กลุ่มเป้าหมาย 3 ราย
    And ลูกค้ารายที่ 2 ได้ผลตอบกลับล้มเหลว/timeout
    When batch ประมวลผล
    Then รายที่ 2 ถูกบันทึกด้วยสถานะไม่สำเร็จ (ไม่มี refer_no)
    And รายที่ 1 และ 3 ส่งสำเร็จ
    And รอบไม่หยุด
    And ซ่อมรายที่ 2 ผ่าน Manual Fix ได้
    # blast radius ต่างจาก csv-path (TC-077) อย่างมีนัยสำคัญ

  @disputed @api-path @edge_case @smoke
  Scenario: TC-081 ส่ง 10000 รายการทีละ call ภายใน 5 นาที
    Given กลุ่มเป้าหมาย 10000 ราย
    And SMS Gateway V3 พร้อมใช้งาน
    When batch ประมวลผล
    Then รอบเสร็จภายใน 5 นาที (SC-001)
    And ส่งครบ 10000 call
    # plan.md ของ CSMS-001 เตือนเรื่องนี้ไว้เอง (SMS Gateway V3 ไม่มี bulk)
    # 10000 call ใน 300 วินาที = 33 call/วินาที — หากทำไม่ได้ ถือเป็น defect ของการเลือกสถาปัตยกรรม ไม่ใช่ปรับ SC

  @disputed @api-path @security @smoke @pdpa
  Scenario: TC-082 cardNo/เบอร์มือถือใน payload ของ sendSmsOtp
    Given เปิด log ระดับ DEBUG ของ SMS Gateway client
    When batch รัน
    Then การเรียกใช้ผ่านช่องทางที่เข้ารหัส (TLS)
    And payload ไม่มี cardNo เกินความจำเป็น
    And cardNo และเบอร์มือถือไม่ถูก log เป็น plaintext
    # PDPA CRITICAL (F-001)

  @disputed @api-path @edge_case @regression
  Scenario: TC-083 ข้อกำหนด seq_no และ datetime ไม่มีที่รองรับในเส้นทาง API
    Given เลือกใช้เส้นทาง sendSmsOtp (ไม่มีไฟล์ CSV)
    And FR-010b บังคับให้มี seq_no และ datetime
    When ตรวจว่า payload ของ sendSmsOtp รองรับ field ใดบ้าง
    Then ทุก field ที่ FR-010b บังคับมีที่อยู่ที่ระบุได้ (ใน payload หรือใน CUSTOMER_BIRTHDAY)
    And หากไม่มี ต้องถือว่า FR-010b เป็นข้อกำหนดกำพร้าที่ต้องตัดหรือย้ายอย่างเป็นทางการ
    # TC นี้พิสูจน์ว่าข้อขัดแย้ง CSV vs API ไม่ใช่แค่ "เปลี่ยนวิธีส่ง" แต่ทำให้ FR ทั้งข้อไม่มีความหมาย (F-002)
```

### การบันทึกประวัติ (audit)

```gherkin
# Covers: FR-012, FR-008c, SC-004
Feature: บันทึก CUSTOMER_BIRTHDAY และ CSMS_LOG

  @positive @smoke
  Scenario: TC-084 ส่งสำเร็จ ต้องบันทึกครบทุก field
    Given ลูกค้าได้รับ SMS สำเร็จพร้อม refer_no จาก Gateway
    When batch บันทึกผล
    Then CUSTOMER_BIRTHDAY มีค่าครบ: policy_no, policy_type, title_name, fname, lname, birthday, mobile_no, rewards, sms_message, sms_sent_date, credit_amount, refer_no/สถานะ
    And CSMS_LOG มีบันทึกภาพรวมพร้อม sms_category_name_abbr = "MKTBirthday"
    # US5 scenario ลำดับที่ 4 (แต่เขียนเลข 2 — numbering สลับ, F-005) / SC-004

  @positive @smoke
  Scenario Outline: TC-085 ส่งไม่สำเร็จหรือถูก skip ต้องบันทึกด้วยสถานะไม่สำเร็จ
    Given มีรายการที่ "<กรณี>" ในรอบเดียวกัน
    When batch บันทึกผล
    Then รายการถูกบันทึกด้วยสถานะไม่สำเร็จ
    And ไม่มี refer_no

    Examples:
      | กรณี                    |
      | ถูก skip (ไม่มีเบอร์)     |
      | ส่งไม่สำเร็จ (Gateway fail) |

    # 100% ของรายการที่เข้าขั้นตอนส่ง/ถูก skip ถูกบันทึก (SC-004)
    # US5 scenario ลำดับที่ 5 (แต่เขียนเลข 3 — numbering สลับ, F-005)

  @side_effect @regression
  Scenario: TC-086 กรมธรรม์ GOV ต้องถูกบันทึกใน CUSTOMER_BIRTHDAY ด้วย
    Given ลูกค้าที่มีกรมธรรม์ GOV เข้าเงื่อนไขและได้รับ SMS
    When batch บันทึกผล
    Then แถว GOV ถูกบันทึกครบเหมือนประเภทอื่น
    # ตัวอย่างในเอกสารที่ยกเฉพาะ ORD/IND/PA ไม่ใช่ข้อจำกัดของระบบ (F-004)

  @security @smoke @pdpa
  Scenario: TC-087 CUSTOMER_BIRTHDAY เก็บ PII ต้องมีการควบคุมการเข้าถึงและ masking
    Given ตาราง CUSTOMER_BIRTHDAY ถูกสร้างและมีข้อมูลจากการรัน batch
    When ตรวจ schema, สิทธิ์การเข้าถึง (grant) และนโยบาย retention
    Then มีการควบคุมการเข้าถึงที่ระบุได้
    And มีนโยบาย retention ที่ชัดเจน
    And มีข้อยุติเป็นทางการว่าจะ mask หรือยอมรับความเสี่ยงตาม precedent ของโมดูล CSMS
    # PDPA CRITICAL (F-001) — dedup key = cardNo = เลขบัตรประชาชน → รุนแรงที่สุดใน 4 แคมเปญ
    # precedent ยกเว้น Constitution IV ของ CSMS-002/003 ไม่ครอบคลุมแคมเปญนี้โดยอัตโนมัติ

  @security @smoke @pdpa
  Scenario: TC-088 cardNo ต้องไม่ปรากฏใน CSMS_LOG และ application log
    Given เปิด log ระดับปกติของ production
    And มีทั้งรายการสำเร็จและล้มเหลวในรอบ
    When batch รัน
    Then cardNo ไม่ปรากฏเป็น plaintext ใน CSMS_LOG
    And cardNo ไม่ปรากฏใน application log
    And cardNo ไม่ปรากฏใน exception/stack trace ของรายการที่ล้มเหลว
    # PDPA CRITICAL (F-001) — Key Entities ของ CSMS_LOG ไม่มี cardNo แต่ต้องพิสูจน์ว่าไม่รั่วผ่าน sms_message หรือ exception

  @side_effect @regression
  Scenario: TC-089 บันทึกอ้างกรมธรรม์ตัวแทน 1 ฉบับต่อลูกค้าต่อรอบ
    Given cardNo เดียวมีกรมธรรม์เข้าเงื่อนไข 2 ฉบับในรอบเดียวกัน
    When batch รัน 2 รอบด้วยข้อมูลเดิม
    Then มี 1 แถวต่อลูกค้าต่อรอบใน CUSTOMER_BIRTHDAY
    And แถวนั้นอ้างกรมธรรม์ตัวแทน 1 ฉบับ
    And การเลือกกรมธรรม์ตัวแทนเป็นแบบ deterministic (ฉบับเดิมทุกรอบ)
    # spec ไม่ระบุเกณฑ์เลือกกรมธรรม์ตัวแทน (F-013)

  @side_effect
  Scenario: TC-090 field audit ของ CUSTOMER_BIRTHDAY ถูกบันทึกครบ
    Given batch รันโดย SYSTEM_BATCH และ Manual Fix รันโดย IT_ADMIN
    When ตรวจ created_by, created_date, updated_by, updated_date
    Then field audit ถูกบันทึกครบ
    And แยกแยะได้ว่าแถวใดมาจากรอบอัตโนมัติและแถวใดมาจาก Manual Fix ของ IT Admin คนใด
```

### การแจ้งเตือน (email)

```gherkin
# Covers: FR-013, SC-006
Feature: email แจ้งเตือนเมื่อ batch ล้มเหลวระดับรอบ

  @positive @smoke
  Scenario: TC-091 batch ล้มเหลวระดับรอบ ต้อง email แจ้งภายใน 15 นาที
    Given เกิดความล้มเหลวระดับรอบ (เช่น DWConsole ไม่พร้อมใช้)
    When batch รันเวลา 09:00 น. และล้มเหลว
    Then email ถูกส่งถึง distribution list ของทีม IT Development และกลุ่มผู้ใช้งาน
    And ส่งภายใน 15 นาทีนับจาก 09:00 น. (SC-006)
    And email มีรายละเอียดข้อผิดพลาด
    # US5 scenario ลำดับที่ 6 (แต่เขียนเลข 4 — numbering สลับ, F-005)

  @security @smoke @pdpa
  Scenario: TC-092 email แจ้งเตือนต้องไม่มี PII
    Given เกิดความล้มเหลวระดับรอบขณะกำลังประมวลผลลูกค้าที่มีข้อมูลจริงในหน่วยความจำ
    When ระบบส่ง email แจ้งเตือน
    Then email มีเฉพาะรายละเอียดข้อผิดพลาดและตัวชี้วัดระดับรอบ
    And email MUST NOT มี cardNo
    And email MUST NOT มีเบอร์มือถือหรือชื่อลูกค้า
    And email MUST NOT มี stack trace ที่มี PII
    # PDPA CRITICAL (F-001) — email ออกนอกระบบไปยัง distribution list ที่ควบคุมผู้รับได้ยากกว่า DB

  @ux_usability @regression
  Scenario: TC-093 เนื้อหา email แจ้งเตือนอ่านแล้วลงมือแก้ได้จริง
    Given เกิดความล้มเหลวระดับรอบ
    When ผู้รับที่ไม่ได้อยู่กับระบบอ่าน email
    Then email ระบุได้ว่าเป็น batch ใด (CSMS-004)
    And ระบุวันที่ประมวลผล
    And ระบุขั้นตอนที่ล้มเหลว
    And ระบุจำนวนรายการที่กระทบ
    And ระบุขั้นถัดไป (Manual Fix)
    And หัวข้อ email แยกแยะจาก batch พี่น้องได้
    # batch แบบ headless ไม่มี UI — surface UX คือ email และหน้า Manual Fix (negative-input-catalog §D)

  @edge_case
  Scenario: TC-094 การส่ง email แจ้งเตือนล้มเหลวเอง
    Given batch ล้มเหลวระดับรอบ
    And mail server ไม่พร้อมใช้งาน
    When ระบบพยายามส่ง email
    Then ระบบบันทึกความพยายามส่งและความล้มเหลวไว้ใน log
    And ไม่เกิด exception ซ้อนที่กลบสาเหตุเดิม
    # Assumptions: "การส่ง email ไม่รับประกันผลแต่บันทึกความพยายาม"
```

### Manual Fix

```gherkin
# Covers: FR-014, FR-008b, SC-003, SC-007
Feature: Manual Fix ย้อนหลัง (idempotent)

  @positive @smoke
  Scenario: TC-095 IT Admin สั่ง Manual Batch ย้อนหลังตามช่วงวันที่
    Given รอบวันที่ "2026-05-16" ล้มเหลว
    And มีลูกค้า 50 รายที่ยังไม่ได้รับ SMS
    When IT Admin เข้า Admin Dashboard ด้วยสิทธิ์ IT_ADMIN
    And ระบุช่วงวันที่ "2026-05-16" แล้วสั่งรัน Manual Batch
    Then ลูกค้าที่ค้างทั้ง 50 รายได้รับ SMS ครบภายใน 1 ชั่วโมง (SC-007)
    And มีบันทึกผลครบ
    # US5 scenario ลำดับที่ 7 (แต่เขียนเลข 5 — numbering สลับ, F-005)

  @positive @smoke
  Scenario: TC-096 Manual Fix ต้อง idempotent ไม่ส่งซ้ำรายการที่สำเร็จแล้ว
    Given รอบวันที่ "2026-05-16" ส่งสำเร็จ 30 ราย และล้มเหลว 20 ราย
    When IT Admin สั่ง Manual Batch สำหรับวันที่ "2026-05-16" ครั้งที่ 1
    Then ระบบส่งเฉพาะ 20 รายที่ค้าง
    And 30 รายที่สำเร็จแล้วไม่ได้รับซ้ำ
    When IT Admin สั่ง Manual Batch ด้วยวันเดิมครั้งที่ 2
    Then ระบบไม่ส่ง SMS เลย
    # ตรวจด้วยกลไก FR-008b; รัน 2 ครั้งเพื่อพิสูจน์ idempotency จริง

  @edge_case @regression
  Scenario: TC-097 Manual Fix ใช้วันที่ที่ระบุเป็นฐานเทียบวันเกิด ไม่ใช่วันที่กดรัน
    Given วันปัจจุบันคือ "2026-05-20"
    When IT Admin กดรัน Manual Batch โดยระบุช่วงวันที่ = "2026-05-16"
    Then กลุ่มเป้าหมายคือลูกค้าที่วัน/เดือนเกิด = "05-16"
    And ไม่ใช่ลูกค้าที่วัน/เดือนเกิด = "05-20"
    And บันทึกเวลาอ้างอิงวันที่ที่ระบุ
    # spec Edge Cases: "ประมวลผลข้ามเที่ยงคืน/รอบ Manual ระบุวันย้อนหลัง"

  @security @smoke
  Scenario: TC-098 เฉพาะ IT_ADMIN ที่ได้รับสิทธิ์เท่านั้นที่สั่ง Manual Batch ได้
    Given มีผู้ใช้ทั่วไปที่ไม่มีสิทธิ์ และ IT_ADMIN ที่มีสิทธิ์
    When ผู้ใช้ทั่วไปพยายามสั่งรันผ่าน Admin Dashboard
    Then ระบบปฏิเสธ
    When ผู้ใช้ทั่วไปเรียก endpoint ของ Manual Batch ตรง ๆ โดยไม่ผ่าน UI
    Then ระบบปฏิเสธ
    When IT_ADMIN สั่งรัน
    Then ระบบอนุญาต
    And บันทึก audit ว่าใครสั่งรันเมื่อใดด้วยช่วงวันที่ใด
    # ทดสอบระดับ endpoint ไม่ใช่แค่ซ่อนปุ่ม

  @negative @regression
  Scenario Outline: TC-099 ช่วงวันที่ของ Manual Fix ที่ไม่สมเหตุผล
    Given IT Admin เข้า Admin Dashboard ด้วยสิทธิ์ IT_ADMIN
    When ระบุช่วงวันที่ "<ช่วงวันที่>"
    Then ระบบปฏิเสธพร้อมข้อความที่เข้าใจได้ หรือมีพฤติกรรมที่นิยามไว้ชัดเจน
    And ไม่เกิดการส่ง SMS ที่ไม่ควรส่ง
    And ไม่เกิด exception

    Examples:
      | ช่วงวันที่              | ประเด็น        |
      | 2027-01-01           | วันที่ในอนาคต   |
      | end < start          | ช่วงกลับด้าน    |
      | 9999-12-31           | far-future    |
      | วันก่อน Go Live        | ขัด FR-003    |
      | ช่วงกว้าง 1 ปี          | ช่วงกว้างมาก    |

    # negative-input-catalog §C; spec ไม่ระบุ validation ของช่วงวันที่ — gap

  @concurrency @smoke
  Scenario: TC-100 สั่ง Manual Fix ขณะที่ batch รอบปกติกำลังทำงาน
    Given batch รอบ 09:00 น. กำลังประมวลผลวันที่ "2026-05-16" อยู่
    When IT Admin สั่ง Manual Batch วันที่ "2026-05-16" พร้อมกัน
    Then ลูกค้าแต่ละราย (cardNo) ได้รับ 1 ข้อความเท่านั้น
    And ไม่เกิด race condition ระหว่างการอ่าน sms_sent_date กับการเขียนของอีกรอบ
    # ความเสี่ยงจริงเพราะ SC-007 ให้ซ่อมภายใน 1 ชม. ซึ่งอาจคาบเกี่ยวรอบปกติ (F-009)

  @ux_usability @regression
  Scenario: TC-101 หน้า Manual Fix กลางแสดง batch CSMS-004 และผลการรัน
    Given IT Admin เข้า Admin Dashboard กลางของ CSMS
    When เปิดหน้า Manual Fix
    Then batch CSMS-004 ปรากฏใน list ด้วยชื่อที่แยกแยะจาก CSMS-001/002/003 ได้
    When สั่งรัน
    Then มี feedback ระหว่างประมวลผล
    And เมื่อจบมีสรุปผล (จำนวนสำเร็จ/ล้มเหลว/ข้าม)
    And IT Admin รู้ว่าต้องทำอะไรต่อ
    # scope ระบุ "เพิ่ม batch นี้เข้า list" ของหน้าเดิม; negative-input-catalog §D (post-action feedback)
```

### Performance / Success Criteria

```gherkin
# Covers: SC-001, SC-002
Feature: ตัวชี้วัดระดับรอบ

  @edge_case @regression
  Scenario: TC-102 ประมวลผล 10000 รายการภายใน 5 นาที
    Given กลุ่มเป้าหมาย 10000 รายในสภาพแวดล้อมที่เทียบเคียง production
    When batch รันเวลา 09:00 น.
    Then รอบเสร็จภายใน 5 นาที
    And ประมวลผลครบ 10000 รายการ
    # ผลจะต่างกันมากระหว่าง csv-path กับ api-path (เทียบ TC-081) — ขึ้นกับข้อยุติ interface

  @positive @regression
  Scenario: TC-103 99% ของรายการที่คัดเลือกได้รับ refer_no
    Given กลุ่มเป้าหมาย >= 1000 ราย
    And SMS Gateway ทำงานปกติ
    When batch รัน
    Then อย่างน้อย 99% ของรายการที่คัดเลือกมี refer_no บันทึกไว้
```

---

## Test Checklist

รูปแบบ 16 คอลัมน์ตาม `templates/test-checklist.md` — หนึ่งแถวต่อหนึ่ง TC
`Test Status` = `Not Run` ทุกแถว · `Tested By` / `Tested Date` **เว้นว่าง** (ยังไม่มีการรันจริง — ไม่มีระบบให้รัน)

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-001 Batch Schedule 09:00 | SMS Job (Batch CSMS-004) | Schedule | batch รันอัตโนมัติทุกวันเวลา 09:00 น. | ตั้ง scheduler ของ batch CSMS-004 ไว้ที่ 09:00 น. และมีลูกค้าเข้าเงื่อนไขวันเกิดอย่างน้อย 1 ราย | 1. ตั้งเวลาระบบเป็น 08:59 น. 2. รอจนถึง 09:00 น. 3. ตรวจ log การเริ่มรอบ | batch เริ่มทำงานที่ 09:00 น. ของวันนั้น (ไม่ใช่ 10:00 น. แบบ batch พี่น้อง) และมีบันทึกเริ่มรอบใน CSMS_LOG | ดู test-data_csms-004-birthday.json (TC-001) — synthetic เท่านั้น | P1 | Not Run |  |  | - | เวลา 09:00 เป็นจุดต่างเฉพาะแคมเปญนี้ — regression risk จาก copy-paste 10:00 ของ CSMS-001/002/003 |
| TC-002 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-001 Batch Schedule 09:00 | SMS Job (Batch CSMS-004) | Schedule | วันเกิดตรงวันที่ batch ไม่ได้ scheduled (วันหยุด) | batch ไม่ถูก schedule ในวันหยุดที่ลูกค้ามีวันเกิด | 1. ปิด schedule ของวันหยุด 2. ตรวจว่าไม่มีการส่ง 3. ใช้ Manual Fix ระบุวันหยุดนั้น | รอบวันหยุดไม่ส่ง แต่ซ่อมย้อนหลังผ่าน Manual Fix ได้ครบโดยไม่ส่งซ้ำ | ดู test-data_csms-004-birthday.json (TC-002) — synthetic เท่านั้น | P2 | Not Run |  |  | - | spec Edge Cases ระบุให้ซ่อมผ่าน Manual Fix — เชื่อมกับ FR-014 |
| TC-003 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | คัดลูกค้าที่วัน/เดือนเกิดตรงกับวันประมวลผล | ลูกค้ามีกรมธรรม์ Inforce และ birthdate วัน/เดือน = วันประมวลผล 2026-05-16 | 1. เตรียมลูกค้า birthdate = 1970-05-16 2. รัน batch วันที่ 2026-05-16 3. ตรวจกลุ่มเป้าหมาย | ลูกค้าถูกคัดเข้ากลุ่มเป้าหมาย | ดู test-data_csms-004-birthday.json (TC-003) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US1 AS-1 |
| TC-004 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | คัดออกลูกค้าที่วัน/เดือนเกิดไม่ตรงวันประมวลผล | ลูกค้ามี birthdate = 1970-05-17 และรัน batch 2026-05-16 | 1. รัน batch วันที่ 2026-05-16 2. ตรวจกลุ่มเป้าหมาย | ลูกค้าถูกคัดออก | ดู test-data_csms-004-birthday.json (TC-004) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US1 AS-2 |
| TC-005 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | ปีเกิดต่างกันแต่วัน/เดือนตรงกัน ต้องถูกคัดเข้าทั้งหมด | ลูกค้า 3 รายเกิด 1935-05-16 / 1970-05-16 / 2025-05-16 | 1. รัน batch 2026-05-16 2. ตรวจกลุ่มเป้าหมาย | ทั้ง 3 รายถูกคัดเข้า — ระบบเทียบเฉพาะวัน/เดือน ไม่เทียบปีเกิด | ดู test-data_csms-004-birthday.json (TC-005) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ยืนยันว่าไม่มีการ filter ปีเกิดโดยไม่ตั้งใจ |
| TC-006 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | วัน/เดือนสลับตำแหน่ง (month/day transposition) ต้องไม่ถูกคัดเข้า | ลูกค้า A เกิด 1970-03-04 และลูกค้า B เกิด 1970-04-03 | 1. รัน batch วันที่ 2026-03-04 2. ตรวจกลุ่มเป้าหมาย | เฉพาะลูกค้า A ถูกคัดเข้า; ลูกค้า B ถูกคัดออก — ไม่มีการสลับ MM/DD | ดู test-data_csms-004-birthday.json (TC-006) — synthetic เท่านั้น | P1 | Not Run |  |  | - | Edge สำคัญ: DD/MM vs MM/DD ในระบบไทยเป็น defect ที่พบบ่อย |
| TC-007 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | ลูกค้าที่เกิดในวันประมวลผลพอดี (อายุ 0 ปี) | ลูกค้าเกิด 2026-05-16 (ปีเดียวกับวันรัน) มีกรมธรรม์ Inforce | 1. รัน batch 2026-05-16 2. ตรวจกลุ่มเป้าหมายและ log | พฤติกรรมเป็นไปตามที่ SA ระบุอย่างชัดเจน (คาดหมาย: คัดเข้าเพราะเทียบเฉพาะวัน/เดือน) และไม่เกิด exception | ดู test-data_csms-004-birthday.json (TC-007) — synthetic เท่านั้น | P2 | Not Run |  |  | - | spec ไม่ระบุ — ต้องให้ SA/PO ยืนยัน (route ไป /speckit-checklist) |
| TC-008 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | birthdate เป็น NULL หรือค่าไม่ถูกต้อง | กรมธรรม์ Inforce ที่ birthdate เป็น NULL / '0000-00-00' / วันที่ไม่มีจริง (31 ก.พ.) | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายและ log | รายการถูก skip + บันทึกเพื่อ audit/Manual Fix โดยไม่เกิด exception และรอบทำงานต่อ | ดู test-data_csms-004-birthday.json (TC-008) — synthetic เท่านั้น | P2 | Not Run |  |  | - | spec ไม่ระบุ birthdate NULL โดยตรง — อนุมานจากแนวทาง skip+log ของ FR-005 |
| TC-009 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-002 Birthday Day/Month Match | SMS Job (Batch CSMS-004) | Audience Selection | birthdate ถูกเก็บเป็น พ.ศ. แทน ค.ศ. | ข้อมูลบางแถวมี birthdate = 2513-05-16 (พ.ศ.) ปนกับ 1970-05-16 (ค.ศ.) | 1. รัน batch 2026-05-16 2. ตรวจการเทียบวัน/เดือน | การเทียบวัน/เดือนยังถูกต้องทั้งสองแถว หรือระบบปฏิเสธข้อมูล พ.ศ. อย่างชัดเจน + บันทึก | ดู test-data_csms-004-birthday.json (TC-009) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ความเสี่ยง พ.ศ./ค.ศ. ปนกัน — spec ใช้ พ.ศ. ในชื่อไฟล์แต่ ค.ศ. ในคอลัมน์ datetime |
| TC-010 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003 Go Live Guard | SMS Job (Batch CSMS-004) | Audience Selection | ไม่ส่งย้อนหลังก่อนวัน Go Live | วันเกิดลูกค้าตรงกับวันก่อน Go Live ของแคมเปญ | 1. ระบุวันประมวลผลก่อน Go Live 2. รัน batch 3. ตรวจการส่ง | ระบบไม่ส่ง SMS ย้อนหลัง (เริ่มเฉพาะตั้งแต่ Go Live / ปี ค.ศ. 2026 ขึ้นไป) | ดู test-data_csms-004-birthday.json (TC-010) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US1 AS-5 |
| TC-011 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003 Go Live Guard | SMS Job (Batch CSMS-004) | Audience Selection | ขอบเขตวัน Go Live พอดี | วันประมวลผล = วัน Go Live พอดี และ = Go Live - 1 วัน | 1. รัน batch ที่ Go Live - 1 2. รัน batch ที่ Go Live | Go Live - 1 ไม่ส่ง; Go Live ส่ง — ขอบเขตเป็นแบบ inclusive ที่วัน Go Live | ดู test-data_csms-004-birthday.json (TC-011) — synthetic เท่านั้น | P2 | Not Run |  |  | - | boundary min/min-1 จาก negative-input-catalog §C |
| TC-012 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003a Feb-29 Birthday Rule | SMS Job (Batch CSMS-004) | Audience Selection | เกิด 29 ก.พ. ปีไม่อธิกสุรทิน รันวันที่ 28 ก.พ. ต้องส่ง | ลูกค้า birthdate = 1996-02-29 กรมธรรม์ Inforce; ปี 2027 ไม่ใช่อธิกสุรทิน | 1. รัน batch วันที่ 2027-02-28 2. ตรวจกลุ่มเป้าหมาย | ลูกค้าถูกคัดเข้าและได้รับ SMS | ดู test-data_csms-004-birthday.json (TC-012) — synthetic เท่านั้น | P1 | Not Run |  |  | - | FR-003a + Clarification 2026-07-07; US5 AS ลำดับที่ 7 (numbering สลับ) |
| TC-013 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003a Feb-29 Birthday Rule | SMS Job (Batch CSMS-004) | Audience Selection | เกิด 29 ก.พ. ปีอธิกสุรทิน รันวันที่ 29 ก.พ. ต้องส่ง | ลูกค้า birthdate = 1996-02-29; ปี 2028 เป็นอธิกสุรทิน | 1. รัน batch วันที่ 2028-02-29 2. ตรวจกลุ่มเป้าหมาย | ลูกค้าถูกคัดเข้าและได้รับ SMS ตามปกติ | ดู test-data_csms-004-birthday.json (TC-013) — synthetic เท่านั้น | P1 | Not Run |  |  | - | FR-003a กรณีปกติ |
| TC-014 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003a Feb-29 Birthday Rule | SMS Job (Batch CSMS-004) | Audience Selection | เกิด 29 ก.พ. ปีอธิกสุรทิน รันวันที่ 28 ก.พ. ต้องไม่ส่ง | ลูกค้า birthdate = 1996-02-29; ปี 2028 เป็นอธิกสุรทิน | 1. รัน batch วันที่ 2028-02-28 2. ตรวจกลุ่มเป้าหมาย | ลูกค้าไม่ถูกคัดเข้าในวันที่ 28 ก.พ. ของปีอธิกสุรทิน (rule 28 ก.พ. ใช้เฉพาะปีที่ไม่มี 29 ก.พ.) | ดู test-data_csms-004-birthday.json (TC-014) — synthetic เท่านั้น | P1 | Not Run |  |  | - | ป้องกัน implement แบบ 'always 28 Feb' ซึ่งจะส่งซ้ำ/ผิดวันในปีอธิกสุรทิน |
| TC-015 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003a Feb-29 Birthday Rule | SMS Job (Batch CSMS-004) | Audience Selection | เกิด 29 ก.พ. ปีไม่อธิกสุรทิน รันวันที่ 1 มี.ค. ต้องไม่ส่ง | ลูกค้า birthdate = 1996-02-29; ปี 2027 ไม่ใช่อธิกสุรทิน | 1. รัน batch วันที่ 2027-03-01 2. ตรวจกลุ่มเป้าหมาย | ลูกค้าไม่ถูกคัดเข้า — spec ระบุให้เลื่อนมา 28 ก.พ. ไม่ใช่เลื่อนไป 1 มี.ค. | ดู test-data_csms-004-birthday.json (TC-015) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ป้องกัน implement แบบ roll-forward |
| TC-016 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-003a Feb-29 Birthday Rule | SMS Job (Batch CSMS-004) | Audience Selection | เกิด 28 ก.พ. และเกิด 29 ก.พ. ในวันรัน 28 ก.พ. ปีไม่อธิกสุรทิน | ลูกค้า A birthdate = 1980-02-28; ลูกค้า B birthdate = 1996-02-29; ปี 2027 ไม่อธิกสุรทิน | 1. รัน batch วันที่ 2027-02-28 2. นับข้อความต่อ cardNo | ทั้ง A และ B ถูกคัดเข้า และแต่ละรายได้รับ 1 ข้อความเท่านั้น (ไม่ปนกัน ไม่ซ้ำ) | ดู test-data_csms-004-birthday.json (TC-016) — synthetic เท่านั้น | P2 | Not Run |  |  | - | จุดที่ rule 28 ก.พ. ทับซ้อนกับลูกค้าที่เกิด 28 ก.พ. จริง |
| TC-017 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-004 Inforce Policy Status | SMS Job (Batch CSMS-004) | Audience Selection | กรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce ถูกคัดเข้าครบทุกประเภท | มีกรมธรรม์เข้าเงื่อนไขวันเกิดครบ 4 ประเภท สถานะ Inforce | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายแยกตามประเภท | ทั้ง ORD, IND, GOV และ PA ถูกคัดเข้าครบ — GOV MUST อยู่ใน scope | ดู test-data_csms-004-birthday.json (TC-017) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US1 AS-3; GOV เป็นจุดที่ spec พี่น้องไม่สอดคล้องกัน (finding F-004) |
| TC-018 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-004 Inforce Policy Status | SMS Job (Batch CSMS-004) | Audience Selection | ORD/PA ที่ policy_status ไม่ใช่ '1' ถูกคัดออก | กรมธรรม์ ORD และ PA ที่ policy_status = '2' ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ถูกคัดออกแม้ตรงวันเกิด | ดู test-data_csms-004-birthday.json (TC-018) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US1 AS-4 |
| TC-019 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-004 Inforce Policy Status | SMS Job (Batch CSMS-004) | Audience Selection | ขอบเขต policy_status ของ IND/GOV ('1','2','3' เข้า; '4' ออก) | กรมธรรม์ IND/GOV ที่ policy_status = '1','2','3','4' อย่างละ 1 ฉบับ ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายแยกตาม status | status '1','2','3' ถูกคัดเข้า; '4' ถูกคัดออก | ดู test-data_csms-004-birthday.json (TC-019) — synthetic เท่านั้น | P1 | Not Run |  |  | - | boundary ของ enum ที่อนุญาต — เกณฑ์ IND/GOV ต่างจาก ORD/PA |
| TC-020 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-005 Mobile Number Resolution | SMS Job (Batch CSMS-004) | Audience Selection | เลือกเบอร์จาก mobile1 เมื่อมีค่า | กรมธรรม์เข้าเงื่อนไขที่ mobile1 = 0845012341 และ mobile2 = 0899999999 | 1. รัน batch 2. ตรวจเบอร์ที่ใช้ส่ง | ระบบใช้ mobile1 (0845012341) เป็นเบอร์ส่ง | ดู test-data_csms-004-birthday.json (TC-020) — synthetic เท่านั้น | P1 | Not Run |  |  | - | coalesce(nullif(trim(mobile1)) ...) |
| TC-021 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-005 Mobile Number Resolution | SMS Job (Batch CSMS-004) | Audience Selection | mobile1 เป็นช่องว่าง/whitespace ต้อง fallback ไป mobile2 | mobile1 = '   ' (whitespace) และ mobile2 = 0899999999 | 1. รัน batch 2. ตรวจเบอร์ที่ใช้ส่ง | ระบบใช้ mobile2 — trim แล้วถือว่า mobile1 ว่าง | ดู test-data_csms-004-birthday.json (TC-021) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ทดสอบ nullif(trim(...)) จริง ไม่ใช่แค่ NULL |
| TC-022 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-005 Mobile Number Resolution | SMS Job (Batch CSMS-004) | Audience Selection | mobile1 และ mobile2 ว่างทั้งคู่ ต้อง skip + บันทึก | กรมธรรม์เข้าเงื่อนไขที่ mobile1 = NULL และ mobile2 = '' | 1. รัน batch 2. ตรวจการส่งและ log | รายการถูก skip ไม่ส่ง SMS + บันทึกเพื่อ Manual Fix และรอบทำงานต่อ | ดู test-data_csms-004-birthday.json (TC-022) — synthetic เท่านั้น | P1 | Not Run |  |  | - | spec Edge Cases + FR-005 |
| TC-023 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-005 Mobile Number Resolution | SMS Job (Batch CSMS-004) | Audience Selection | เบอร์มือถือรูปแบบไม่ถูกต้อง | mobile1 มีค่าเป็น '084-501-2341' / '+66845012341' / '0845' / '08450123419999' / 'ABCDEFGHIJ' | 1. รัน batch ต่อแต่ละรูปแบบ 2. ตรวจการส่ง/skip และ log | ระบบมีพฤติกรรมที่นิยามไว้ชัดเจน (normalize หรือ skip+บันทึก) และ MUST NOT ส่งไปยังเบอร์ที่ผิดรูปแบบโดยเงียบ | ดู test-data_csms-004-birthday.json (TC-023) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §C; spec ไม่มี validation รูปแบบเบอร์ — เป็น gap (finding F-008) |
| TC-024 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-006 Do Not Contact Filter | SMS Job (Batch CSMS-004) | Filtering | ORD ที่ติด Do Not Contact (remark_code = '1') ถูกคัดออก | กรมธรรม์ ORD (policy_type = '0') ที่มี ili_policy_remark.remark_code = '1' ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ถูกคัดออกจากกลุ่มเป้าหมาย | ดู test-data_csms-004-birthday.json (TC-024) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US2 AS-1 |
| TC-025 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-006 Do Not Contact Filter | SMS Job (Batch CSMS-004) | Filtering | IND/GOV/PA ที่ติด Do Not Contact (remark_code = '4') ถูกคัดออก | กรมธรรม์ IND/GOV/PA (policy_type = 'I'/'G'/'P') ที่มี remark_code = '4' ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายแยกตามประเภท | ทั้ง IND, GOV และ PA ถูกคัดออก | ดู test-data_csms-004-birthday.json (TC-025) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US2 AS-2 |
| TC-026 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-006 Do Not Contact Filter | SMS Job (Batch CSMS-004) | Filtering | รหัส remark ข้ามประเภท ต้องไม่ถูกคัดออกผิด | กรมธรรม์ ORD ที่มี remark_code = '4' และกรมธรรม์ PA ที่มี remark_code = '1' | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | ทั้งสองฉบับยังคงอยู่ในกลุ่มเป้าหมาย — เกณฑ์ผูกกับคู่ (policy_type, remark_code) ไม่ใช่ remark_code เดี่ยว | ดู test-data_csms-004-birthday.json (TC-026) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ป้องกัน implement ที่ตัด remark_code IN ('1','4') โดยไม่ดู policy_type |
| TC-027 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-006 Do Not Contact Filter | SMS Job (Batch CSMS-004) | Filtering | ความกำกวมของรหัสประเภทกรมธรรม์ 'O' vs '0' | ข้อมูลทดสอบมี policy_type = '0' (เลขศูนย์) และ 'O' (ตัวโอ) ปนกัน | 1. รัน batch 2. ตรวจการคัดกรอง ORD | data contract ของรหัส ORD ถูกล็อกไว้ชัดเจนและระบบคัดกรองตรงตามนั้นทุกแถว — ไม่มีกรมธรรม์ ORD หลุดการคัดกรอง Do Not Contact เพราะรหัสไม่ตรง | ดู test-data_csms-004-birthday.json (TC-027) — synthetic เท่านั้น | P2 | Not Run |  |  | - | checklist G2 ยังไม่ยุติ — finding F-003; blocked จนกว่า SA จะล็อก data contract |
| TC-028 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-007 Agent-Channel Filter | SMS Job (Batch CSMS-004) | Filtering | ORD ที่เป็นชำระเอง (title_desc = 'ชำระเอง') ถูกคัดออก | กรมธรรม์ ORD ที่ title_desc = 'ชำระเอง' ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ถูกคัดออก (ไม่ใช่ช่องทางตัวแทน) | ดู test-data_csms-004-birthday.json (TC-028) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US2 AS-3 |
| TC-029 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-007 Agent-Channel Filter | SMS Job (Batch CSMS-004) | Filtering | IND/GOV/PA ที่ position_code = '99' (Orphan) ถูกคัดออก | กรมธรรม์ IND/GOV/PA ที่ position_code = '99' ตรงวันเกิด | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | กรมธรรม์ถูกคัดออก | ดู test-data_csms-004-birthday.json (TC-029) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US2 AS-3 |
| TC-030 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-007 Agent-Channel Filter | SMS Job (Batch CSMS-004) | Filtering | ขอบเขต policy_org ที่อนุญาต | กรมธรรม์ที่ policy_org = 2070000 / 2070001 / 2079999 / 2080000 / 5070000 / 5070001 / 5079999 / 5080000 | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายแยกตามค่า | 2070001–2079999 และ 5070001–5079999 ถูกคัดเข้า; 2070000, 2080000, 5070000, 5080000 ถูกคัดออก | ดู test-data_csms-004-birthday.json (TC-030) — synthetic เท่านั้น | P1 | Not Run |  |  | - | boundary min/min-1/max/max+1 ทั้ง 2 ช่วง (negative-input-catalog §C) |
| TC-031 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-007 Agent-Channel Filter | SMS Job (Batch CSMS-004) | Filtering | title_desc ที่ใกล้เคียงแต่ไม่เท่ากับ 'ชำระเอง' | กรมธรรม์ ORD ที่ title_desc = 'ชำระเอง ' (มี space ต่อท้าย) / ' ชำระเอง' / 'ชำระเองผ่านบัตร' / 'ชําระเอง' (สระอาต่างอักขระ) | 1. รัน batch 2. ตรวจกลุ่มเป้าหมายแต่ละแถว | พฤติกรรมการเทียบ (exact vs trim vs unicode-normalize) เป็นไปตามที่นิยามไว้อย่างสม่ำเสมอ และไม่มีลูกค้าชำระเองหลุดเข้ากลุ่มเป้าหมาย | ดู test-data_csms-004-birthday.json (TC-031) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §B (whitespace/homoglyph/unicode) — ภาษาไทยมี 'ำ' vs 'ํา' ที่ต่างกันในระดับ byte |
| TC-032 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-006 Do Not Contact Filter | SMS Job (Batch CSMS-004) | Filtering | กรมธรรม์ช่องทางตัวแทนที่ไม่ติด Do Not Contact ยังอยู่ในกลุ่มเป้าหมาย | กรมธรรม์ ORD Inforce ตรงวันเกิด ไม่มี remark, title_desc <> 'ชำระเอง', policy_org = 2070500 | 1. รัน batch 2. ตรวจกลุ่มเป้าหมาย | กรมธรรม์คงอยู่ในกลุ่มเป้าหมาย | ดู test-data_csms-004-birthday.json (TC-032) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US2 AS-5 |
| TC-033 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008 Policy to cardNo Mapping | SMS Job (Batch CSMS-004) | Integration (cisappapi) | map policy_no เป็น cardNo ผ่าน cisappapi | กรมธรรม์ผ่านการคัดกรองแล้ว และ cisappapi ตอบ cardNo ปกติ | 1. รัน batch 2. ตรวจการเรียก operation customerByPolicyNoNotWhereCustomerStatus 3. ตรวจ cardNo ที่ได้ | ระบบได้ cardNo ที่ถูกต้องและใช้เป็นคีย์ต่อในขั้นตรวจช่องทาง | ดู test-data_csms-004-birthday.json (TC-033) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-1 (ส่วน map) |
| TC-034 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008 Policy to cardNo Mapping | SMS Job (Batch CSMS-004) | Integration (cisappapi) | ไม่พบ cardNo ของกรมธรรม์ ต้อง skip + บันทึก | cisappapi ตอบว่าไม่พบ cardNo สำหรับ policy_no ที่ส่งไป | 1. รัน batch 2. ตรวจการส่งและ log 3. ตรวจว่ารอบยังทำงานต่อ | กรมธรรม์ถูกคัดออก + บันทึกสถานะไม่สำเร็จเพื่อ Manual Fix และรอบไม่หยุด | ดู test-data_csms-004-birthday.json (TC-034) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-2 |
| TC-035 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008 Policy to cardNo Mapping | SMS Job (Batch CSMS-004) | Integration (cisappapi) | cardNo (เลขบัตรประชาชน) ต้องไม่รั่วผ่าน URL/query string/log ของการเรียก API | เปิด log ระดับ DEBUG/TRACE ของ HTTP client และรัน batch | 1. รัน batch 2. ตรวจ application log, access log และ URL ที่เรียก 3. ค้นหา cardNo 13 หลักใน log ทั้งหมด | cardNo MUST NOT ปรากฏใน URL/query string/access log; หากจำเป็นต้องอยู่ใน body ต้องผ่าน TLS และไม่ถูก log เป็น plaintext | ดู test-data_csms-004-birthday.json (TC-035) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — checklist G4 ไม่มี security/PII NFR รองรับ (finding F-001) |
| TC-036 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | LINE = E02 และ APP = E02 ต้องส่ง | cardNo ที่ LINE ตอบ E02 (ไม่พบ) และ APP ตอบ E02 (ไม่พบ) | 1. จำลองผลตอบกลับทั้ง 2 ช่องทาง 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้าถูกคัดเข้าและได้รับ SMS (ยังไม่สมัครช่องทางใดเลย) | ดู test-data_csms-004-birthday.json (TC-036) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-1 แถวที่ 1 / FR-009 |
| TC-037 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | LINE = E00 + isBlockLine = true และ APP = E02 ต้องส่ง | cardNo ที่ LINE ตอบ E00 พร้อม isBlockLine = true และ APP ตอบ E02 | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้าถูกคัดเข้าและได้รับ SMS (บล็อก LINE + ยังไม่มีแอป) | ดู test-data_csms-004-birthday.json (TC-037) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-1 แถวที่ 2 / FR-009 |
| TC-038 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | LINE = E00 + isBlockLine = false ต้องคัดออก | cardNo ที่ LINE ตอบ E00 พร้อม isBlockLine = false และ APP ตอบ E02 | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้าถูกคัดออก ไม่ได้รับ SMS (ใช้งาน LINE อยู่) | ดู test-data_csms-004-birthday.json (TC-038) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-1 แถวที่ 3 / FR-009 |
| TC-039 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | APP = E00 ต้องคัดออก | cardNo ที่ LINE ตอบ E02 และ APP ตอบ E00 | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้าถูกคัดออก ไม่ได้รับ SMS (มี Ocean Club App แล้ว) | ดู test-data_csms-004-birthday.json (TC-039) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-1 แถวที่ 3 / FR-009 |
| TC-040 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | LINE = E00 + isBlockLine = true และ APP = E00 ต้องคัดออก | cardNo ที่ LINE ตอบ E00 + isBlockLine = true และ APP ตอบ E00 | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้าถูกคัดออก — เงื่อนไข APP = E00 มีน้ำหนักเหนือกว่า (เพราะเกณฑ์ 'ส่ง' บังคับ APP = E02 เสมอ) | ดู test-data_csms-004-birthday.json (TC-040) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ปิดช่องว่างของตารางเกณฑ์ที่ไม่ได้ยกกรณีนี้ตรง ๆ — ตรวจความครบถ้วนของ truth table |
| TC-041 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | ช่องทาง WEB (BZB) ต้องไม่มีผลต่อการตัดสินใจ | cardNo ที่ LINE = E02, APP = E02 แต่ WEB = E00 | 1. จำลองผลตอบกลับครบ 3 ช่องทาง 2. รัน batch 3. ตรวจการตัดสินใจ | ลูกค้ายังถูกคัดเข้าและได้รับ SMS — WEB ไม่ถูกนำมาตัดสิน | ดู test-data_csms-004-birthday.json (TC-041) — synthetic เท่านั้น | P2 | Not Run |  |  | - | Assumptions: ไม่รวมช่องทาง WEB ในการตัดสินใจ |
| TC-042 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009a Per-Record Abnormal Response | SMS Job (Batch CSMS-004) | Integration (cisappapi) | ผลตอบกลับ E13/Exception รายรายการ ต้อง skip + บันทึก ไม่ retry | cardNo หนึ่งรายได้ผลตอบกลับ E13/Exception ขณะที่รายอื่นปกติ | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจ log การ retry และสถานะรอบ | รายการนั้นถูก skip + บันทึกสถานะไม่สำเร็จ ไม่มี retry รายรายการ และรอบยังประมวลผลรายอื่นต่อจนจบ | ดู test-data_csms-004-birthday.json (TC-042) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US3 AS-3 / FR-009a |
| TC-043 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009a Per-Record Abnormal Response | SMS Job (Batch CSMS-004) | Integration (cisappapi) | channel หรือ isBlockLine เป็นค่าว่าง ต้อง skip + บันทึก | ผลตอบกลับมี channel = '' หรือ isBlockLine = null/'' | 1. จำลองผลตอบกลับ 2. รัน batch 3. ตรวจการตัดสินใจและ log | รายการถูก skip + บันทึกสถานะไม่สำเร็จ ไม่ตีความค่าว่างเป็น false โดยปริยาย และรอบทำงานต่อ | ดู test-data_csms-004-birthday.json (TC-043) — synthetic เท่านั้น | P2 | Not Run |  |  | - | FR-009a — ค่าว่างต้องไม่ถูก default เป็น 'ส่ง' |
| TC-044 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | API ล่มทั้งระบบ ต้อง retry <=3 ครั้งแล้วหยุดรอบ + email | cisappapi ไม่ตอบสนองทุกคำขอ | 1. รัน batch 2. นับจำนวน retry และระยะเว้นช่วง 3. ตรวจสถานะรอบและ email | ระบบ retry ไม่เกิน 3 ครั้งแบบเว้นช่วง แล้วหยุดรอบ + ส่ง email แจ้งเตือน (ต่างจาก FR-009a ที่ skip รายรายการ) | ดู test-data_csms-004-birthday.json (TC-044) — synthetic เท่านั้น | P2 | Not Run |  |  | - | Assumptions + spec Edge Cases (แนวทาง CSMS-001/002) |
| TC-045 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-009 Dual-Channel (LINE+APP) Check | SMS Job (Batch CSMS-004) | Integration (cisappapi) | cisappapi ตอบช้าเกิน SLA 5 วินาที | cisappapi ตอบสนองที่ 4.9 วินาที และ 5.1 วินาที | 1. รัน batch ต่อแต่ละกรณี 2. ตรวจพฤติกรรม timeout | พฤติกรรม timeout เป็นไปตาม SLA ที่ระบุใน Assumptions และไม่ทำให้รอบค้างไม่จบ | ดู test-data_csms-004-birthday.json (TC-045) — synthetic เท่านั้น | P3 | Not Run |  |  | - | Assumptions ระบุ SLA 5 วินาที แต่ spec ไม่ระบุค่า timeout จริง — gap |
| TC-046 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | ลูกค้าที่เคยส่งในวันเกิดปีนี้แล้ว ต้องไม่ส่งซ้ำ | CUSTOMER_BIRTHDAY มีแถวของ cardNo นี้ที่ sms_sent_date เป็นวันในปีปัจจุบัน (is not null) | 1. รัน batch รอบแรก 2. รัน batch วันเดิมซ้ำอีกรอบ 3. นับจำนวน SMS ที่ส่งถึง cardNo นั้น | รอบที่สองคัดลูกค้าออก ไม่ส่งซ้ำ — จำนวนการส่งซ้ำ = 0 | ดู test-data_csms-004-birthday.json (TC-046) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS-1 / FR-008b / SC-003 |
| TC-047 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | เคยส่งเมื่อปีที่แล้วเท่านั้น ต้องส่งได้อีกในปีนี้ | CUSTOMER_BIRTHDAY มีแถวของ cardNo นี้ที่ sms_sent_date = 2026-05-16 เท่านั้น | 1. รัน batch วันที่ 2027-05-16 2. ตรวจการส่ง | ลูกค้าได้รับ SMS อีกครั้งในปี 2027 — การกันส่งซ้ำผูกกับปีปัจจุบันเท่านั้น | ดู test-data_csms-004-birthday.json (TC-047) — synthetic เท่านั้น | P1 | Not Run |  |  | - | Assumptions: 'ปีถัดไปวันเกิดเดิมยังส่งได้' |
| TC-048 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008c Per-Customer (cardNo) Dedup | SMS Job (Batch CSMS-004) | Dedup | ลูกค้า 1 ราย (cardNo เดียว) มีหลายกรมธรรม์เข้าเงื่อนไข ต้องได้ 1 ข้อความ | cardNo เดียวมีกรมธรรม์ ORD และ PA เข้าเงื่อนไขวันเกิดในรอบเดียวกัน | 1. รัน batch 2. นับจำนวน SMS ที่ส่งถึง cardNo นั้น 3. ตรวจแถวใน CUSTOMER_BIRTHDAY | ลูกค้าได้รับ SMS 1 ข้อความเท่านั้น (dedup ระดับลูกค้า) — ต่างจาก CSMS-003 ที่ dedup รายกรมธรรม์ | ดู test-data_csms-004-birthday.json (TC-048) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS ลำดับที่ 6 (numbering สลับ) / FR-008c / SC-003 |
| TC-049 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | ขอบเขตข้ามปีของ dedup (วันเกิด 1 ม.ค.) | ลูกค้า birthdate = 1980-01-01 ส่งสำเร็จแล้วเมื่อ 2026-01-01 | 1. รัน batch 2026-12-31 (ไม่ตรงวันเกิด) 2. รัน batch 2027-01-01 3. ตรวจการส่ง | 2026-12-31 ไม่ส่ง; 2027-01-01 ส่งได้ 1 ข้อความ — การเทียบปีข้าม year boundary ถูกต้อง | ดู test-data_csms-004-birthday.json (TC-049) — synthetic เท่านั้น | P2 | Not Run |  |  | - | dedup ข้ามขอบปีเป็นจุดที่ off-by-one เกิดง่ายที่สุด |
| TC-050 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | ขอบเขต dedup ของลูกค้าเกิด 29 ก.พ. ข้ามปีอธิกสุรทิน | ลูกค้า birthdate = 1996-02-29 ได้รับ SMS แล้วเมื่อ 2027-02-28 (ปีไม่อธิกสุรทิน) | 1. รัน batch 2028-02-29 (ปีอธิกสุรทิน) 2. ตรวจการส่ง | ลูกค้าได้รับ SMS ในปี 2028 — dedup เทียบปี ไม่ใช่เทียบวัน/เดือนที่เคยส่ง | ดู test-data_csms-004-birthday.json (TC-050) — synthetic เท่านั้น | P2 | Not Run |  |  | - | รวม rule 28 ก.พ. เข้ากับ dedup รายปี — จุดที่ implement พลาดได้ง่าย |
| TC-051 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | sms_sent_date ถูกเก็บเป็นปี พ.ศ. ทำให้ dedup เทียบผิดปี | CUSTOMER_BIRTHDAY มีแถวที่ sms_sent_date เก็บปี พ.ศ. (2569) ปนกับ ค.ศ. (2026) | 1. รัน batch 2026-05-16 2. ตรวจการตัดสินใจ dedup | ระบบเทียบปีได้ถูกต้องตามชนิดข้อมูลที่นิยามไว้ (ค.ศ.) และไม่เกิดทั้งส่งซ้ำและไม่ส่งโดยผิดพลาด | ดู test-data_csms-004-birthday.json (TC-051) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ความเสี่ยง พ.ศ./ค.ศ. ปนกัน (finding F-002) — spec ใช้ พ.ศ. ในชื่อไฟล์แต่ ค.ศ. ในคอลัมน์ datetime |
| TC-052 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008c Per-Customer (cardNo) Dedup | SMS Job (Batch CSMS-004) | Dedup | cardNo รูปแบบต่างกันเล็กน้อยทำให้ dedup ถูก bypass | CUSTOMER_BIRTHDAY มีแถวของ cardNo '1000000000001' และข้อมูลรอบนี้ให้ cardNo ' 1000000000001' (มี space) / '1000000000001' ที่มี zero-width space | 1. รัน batch 2. นับจำนวน SMS ที่ส่งถึงลูกค้ารายนั้น | ระบบ normalize cardNo ก่อนเทียบ — ลูกค้าได้รับ 1 ข้อความเท่านั้น ไม่เกิดการส่งซ้ำจากรูปแบบคีย์ที่ต่างกัน | ดู test-data_csms-004-birthday.json (TC-052) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §B (unicode dedup bypass); dedup key = PII จึงจัดเป็น Security |
| TC-053 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008b Once-per-Birthday-Year Dedup | SMS Job (Batch CSMS-004) | Dedup | รัน batch 2 instance พร้อมกันในวันเดียว ต้องไม่ส่งซ้ำ | เตรียมลูกค้า 1 ราย 1 cardNo เข้าเงื่อนไข และสามารถ trigger batch 2 instance พร้อมกันได้ | 1. trigger batch 2 instance พร้อมกัน 2. นับ SMS ที่ส่งถึง cardNo นั้น 3. ตรวจแถวใน CUSTOMER_BIRTHDAY | ลูกค้าได้รับ 1 ข้อความเท่านั้น — มีกลไกกันการทำงานซ้อน (lock/guard) และไม่เกิดแถวซ้ำใน CUSTOMER_BIRTHDAY | ดู test-data_csms-004-birthday.json (TC-053) — synthetic เท่านั้น | P1 | Not Run |  |  | - | spec ไม่ระบุกลไกกันรันซ้อน — เป็น gap (finding F-009); ไม่มี plan.md จึงไม่ทราบว่ามี Quartz/lock หรือไม่ |
| TC-054 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ดึงของขวัญและลิงก์จาก cf_catalog ที่ active มาแทนค่าครบ | cf_catalog มี REWARDS/CSMS_SBD_Birthday active 'Y' = '500 เหรียญ' และ LINE_LINK/CSMS_SBD_Birthday active 'Y' = 'https://lin.ee/JianZUe' | 1. รัน batch 2. ตรวจข้อความที่ render | ข้อความมี var1 = fname, var2 = '500 เหรียญ', var3 = 'https://lin.ee/JianZUe' ครบถ้วน ไม่มีตัวแปรค้าง | ดู test-data_csms-004-birthday.json (TC-054) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US4 AS-3 / FR-010a / SC-005 |
| TC-055 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ไม่พบ config ของขวัญ (REWARDS) ที่ active | cf_catalog ไม่มีแถว REWARDS/CSMS_SBD_Birthday ที่ active | 1. รัน batch 2. ตรวจการส่ง log และ email | ระบบ MUST NOT ส่งข้อความที่ var2 ว่าง — skip รายการ + บันทึก + แจ้งเตือน | ดู test-data_csms-004-birthday.json (TC-055) — synthetic เท่านั้น | P1 | Not Run |  |  | - | spec Edge Cases + FR-010a; SC-005 = ไม่มีข้อความตัวแปรว่างถูกส่งออก |
| TC-056 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | config ลิงก์ (LINE_LINK) มีอยู่แต่ไม่ active ('N') | cf_catalog มีแถว LINE_LINK/CSMS_SBD_Birthday แต่ active = 'N' | 1. รัน batch 2. ตรวจการส่ง log และ email | ระบบถือว่าไม่พบ config — skip รายการ + บันทึก + แจ้งเตือน ไม่ส่งข้อความที่ var3 ว่าง | ดู test-data_csms-004-birthday.json (TC-056) — synthetic เท่านั้น | P1 | Not Run |  |  | - | FR-010a ระบุ active 'Y' เท่านั้น |
| TC-057 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | มี config active ซ้ำมากกว่า 1 แถวสำหรับแคมเปญเดียวกัน | cf_catalog มี REWARDS/CSMS_SBD_Birthday active 'Y' 2 แถว (ค่า '500 เหรียญ' และ '1000 เหรียญ') | 1. รัน batch 2. ตรวจค่าที่ถูกเลือกใช้ 3. รัน batch ซ้ำอีกรอบด้วยข้อมูลเดิม | ระบบเลือกค่าแบบ deterministic (ค่าเดิมทุกรอบ) หรือถือเป็นความผิดพลาด config + แจ้งเตือน — MUST NOT สุ่มค่าต่างกันในแต่ละรอบ | ดู test-data_csms-004-birthday.json (TC-057) — synthetic เท่านั้น | P2 | Not Run |  |  | - | Assumptions ระบุ 'config เดียวต่อแคมเปญ active' แต่ไม่มี constraint บังคับ — gap (finding F-010) |
| TC-058 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ค่า config เป็น string ว่างหรือ whitespace | cf_catalog มีแถว REWARDS active 'Y' แต่ค่าของขวัญเป็น '' หรือ '   ' | 1. รัน batch 2. ตรวจการส่งและ log | ระบบถือว่าเป็นค่าที่ใช้ไม่ได้ — skip + บันทึก + แจ้งเตือน ไม่ส่งข้อความที่มีช่องว่างแทนของขวัญ | ดู test-data_csms-004-birthday.json (TC-058) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §B (whitespace-only); FR-010a พูดถึง 'ไม่พบ/ไม่ active' แต่ไม่พูดถึงค่าว่าง |
| TC-059 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ค่า LINE_LINK เป็น URL ที่ไม่ปลอดภัย | cf_catalog มี LINE_LINK active 'Y' ที่ค่าเป็น 'javascript:alert(1)' / 'http://evil.example.com/phish' / URL ที่มี open-redirect | 1. รัน batch 2. ตรวจข้อความที่ render และการส่ง | ระบบ validate scheme/โดเมนของลิงก์ก่อนใส่ในข้อความ หรือมีการควบคุมการแก้ไข config ที่ตรวจสอบได้ — ไม่ส่งลิงก์ phishing ให้ลูกค้าในนามบริษัท | ดู test-data_csms-004-birthday.json (TC-059) — synthetic เท่านั้น | P2 | Not Run |  |  | - | ความเสี่ยง: config ที่ทีมการตลาดแก้ได้ถูกส่งตรงถึงลูกค้าโดยไม่มี validation — gap (finding F-011) |
| TC-060 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ดึง template จาก sms_message_schedule ที่อยู่ในช่วงวันที่ | sms_message_schedule มีแถว sms_category_code = '112' ที่ begin_date <= วันปัจจุบัน <= end_date | 1. รัน batch 2. ตรวจ template ที่ใช้ | ระบบใช้ template จาก sms_message_schedule (ไม่ fallback) | ดู test-data_csms-004-birthday.json (TC-060) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US4 AS-2 / FR-010a |
| TC-061 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ขอบเขตช่วงวันที่ของ template (begin_date/end_date) | sms_message_schedule มีแถวที่ begin_date = 2026-05-16 และ end_date = 2026-05-16 | 1. รัน batch 2026-05-15 2. รัน batch 2026-05-16 3. รัน batch 2026-05-17 | 2026-05-15 และ 2026-05-17 ใช้ fallback; 2026-05-16 ใช้ template จาก schedule — ขอบเขตเป็น inclusive ทั้งสองด้าน | ดู test-data_csms-004-birthday.json (TC-061) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §C (start == end, adjacent boundary) |
| TC-062 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | fallback ไปที่ sms_category เมื่อไม่พบ template ใน schedule | sms_message_schedule ไม่มีแถวที่เข้าเงื่อนไข แต่ sms_category มีข้อความ default | 1. รัน batch 2. ตรวจ template ที่ใช้ | ระบบใช้ข้อความจาก sms_category แทน และส่งได้ตามปกติ | ดู test-data_csms-004-birthday.json (TC-062) — synthetic เท่านั้น | P2 | Not Run |  |  | - | US4 AS-2 / FR-010a |
| TC-063 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | ไม่พบ template ทั้ง sms_message_schedule และ sms_category | ทั้งสองตารางไม่มีข้อความสำหรับ category code ที่ใช้ | 1. รัน batch 2. ตรวจสถานะรอบและ email | ถือเป็นความล้มเหลวระดับรอบ + ส่ง email แจ้งเตือน ไม่มี SMS ถูกส่งออก | ดู test-data_csms-004-birthday.json (TC-063) — synthetic เท่านั้น | P1 | Not Run |  |  | - | spec Edge Cases |
| TC-064 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010a Template + cf_catalog Config | SMS Job (Batch CSMS-004) | Message Rendering | fname ที่มีรูปแบบผิดปกติ | ลูกค้าที่ fname = '' / '   ' / ชื่อยาว 200 อักขระ / ชื่อที่มี emoji / อักขระ RTL / NBSP | 1. รัน batch ต่อแต่ละกรณี 2. ตรวจข้อความที่ render และความยาว SMS | ข้อความ render ได้โดยไม่เพี้ยน ไม่มีตัวแปรค้าง และกรณี fname ว่างมีพฤติกรรมที่นิยามไว้ (skip หรือใช้คำนำหน้าแทน) ไม่ส่งข้อความว่าชื่อ | ดู test-data_csms-004-birthday.json (TC-064) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §B; spec ไม่ระบุกรณี fname ว่าง — gap |
| TC-065 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | สร้างไฟล์ CSV encoding UTF-8 | กลุ่มเป้าหมายที่คัดกรองแล้วมีอย่างน้อย 1 ราย ที่มีชื่อภาษาไทย | 1. รัน batch 2. เปิดไฟล์ CSV ที่สร้าง 3. ตรวจ encoding และอักขระไทย | ไฟล์ CSV ถูกสร้างด้วย encoding UTF-8 และชื่อภาษาไทยอ่านได้ถูกต้อง ไม่เป็นอักขระเพี้ยน | ดู test-data_csms-004-birthday.json (TC-065) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — ดู 'Disputed Interface' ใน test-scenarios; ห้ามรันชุดนี้คู่กับ @api-path |
| TC-066 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | ชื่อไฟล์ CSV ตามรูปแบบ [department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv | batch รันวันที่ 2026-05-16 เวลา 09:00:00 น. และ SMS_CATEGORY code ที่ใช้ให้ค่า Category = MKTBirthday | 1. รัน batch 2. ตรวจชื่อไฟล์ที่สร้าง | ชื่อไฟล์ = MKT_CSMS_MKTBirthday_690516090000.csv (department = MKT, SystemCode = CSMS, Category จาก SMS_CATEGORY) | ดู test-data_csms-004-birthday.json (TC-066) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — ตัวอย่างจาก spec US1 Example Data |
| TC-067 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | ชื่อไฟล์ใช้ปี พ.ศ. แต่คอลัมน์ datetime ใช้ปี ค.ศ. ในรอบเดียวกัน | batch รันวันที่ 2026-05-16 (= พ.ศ. 2569) เวลา 09:00 น. | 1. รัน batch 2. ตรวจส่วน YY ในชื่อไฟล์ 3. ตรวจคอลัมน์ datetime ในไฟล์เดียวกัน | ชื่อไฟล์มี YY = 69 (พ.ศ. 2569) ขณะที่คอลัมน์ datetime = '2026-05-16 09:00' (ค.ศ.) — ทั้งสองค่าอ้างวันเดียวกันและตรงตาม spec ทั้งคู่ | ดู test-data_csms-004-birthday.json (TC-067) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — การปน พ.ศ./ค.ศ. ในไฟล์เดียวเป็นความเสี่ยง defect เอง (finding F-002) ต้องให้ SA ยืนยันว่าตั้งใจ |
| TC-068 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | รหัส SMS_CATEGORY_CODE '112' ขัดกับทะเบียนรหัสของโครงการที่จอง '115' | SMS_CATEGORY มีแถว code '112' และ/หรือไม่มีแถว code '115' | 1. ตรวจ SMS_CATEGORY ว่า code ใดให้ค่า MKTBirthday 2. รัน batch 3. ตรวจ Category ในชื่อไฟล์และเงื่อนไข query template | รหัสที่ระบบใช้ตรงกับรหัสที่ SA/PO ตัดสินอย่างเป็นทางการ และ Category ที่ได้ = MKTBirthday — หากใช้ '112' ที่ไม่มีในทะเบียน ต้องถือเป็น defect | ดู test-data_csms-004-birthday.json (TC-068) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — BLOCKED: finding F-002 (112 vs 115) ยังไม่มีข้อยุติ; 113=CSMS-001 114=CSMS-002 116=GP7 |
| TC-069 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010b CSV Column Contract | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | ลำดับคอลัมน์ใน CSV ตรงตาม spec เป๊ะ | กลุ่มเป้าหมายที่คัดกรองแล้ว | 1. รัน batch 2. อ่านแถวข้อมูลแถวแรกของไฟล์ CSV 3. เทียบลำดับคอลัมน์ | คอลัมน์เรียงตามลำดับ: mobile, var1, var2, var3, seq_no, datetime — ครบ 6 คอลัมน์ ไม่สลับตำแหน่ง ไม่ขาด ไม่เกิน | ดู test-data_csms-004-birthday.json (TC-069) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — FR-010b ระบุลำดับไว้ชัด; ลำดับผิด = SMS Gateway ตีความผิดทั้งไฟล์ |
| TC-070 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010b CSV Column Contract | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | seq_no เป็น Running Number เริ่มจาก 1 และต่อเนื่อง | กลุ่มเป้าหมาย 1 ราย, 2 ราย และ 10000 ราย | 1. รัน batch ต่อแต่ละขนาด 2. ตรวจ seq_no แถวแรก แถวสุดท้าย และความต่อเนื่อง | seq_no เริ่มที่ 1 (ไม่ใช่ 0) เพิ่มทีละ 1 ต่อเนื่องไม่ข้ามเลข ไม่ซ้ำ และแถวสุดท้าย = จำนวนแถวทั้งหมด | ดู test-data_csms-004-birthday.json (TC-070) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — boundary 1/2/10000 ตาม SC-001 |
| TC-071 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010b CSV Column Contract | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | รูปแบบคอลัมน์ datetime = 'YYYY-MM-DD HH:MM' ปี ค.ศ. | batch รันวันที่ 2026-05-16 เวลา 09:00 น. | 1. รัน batch 2. ตรวจค่าคอลัมน์ datetime ทุกแถว | ค่า = '2026-05-16 09:00' — ปี ค.ศ. 4 หลัก, เดือน/วัน zero-pad, ชั่วโมง zero-pad เป็น '09' ไม่ใช่ '9', ไม่มีวินาที, ไม่ใช่ พ.ศ. 2569 | ดู test-data_csms-004-birthday.json (TC-071) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — zero-pad ของ 09:00 เป็นจุดพลาดง่ายเฉพาะแคมเปญนี้ (รันตอน 09:00) |
| TC-072 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010b CSV Column Contract | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | CSV injection จากค่าตัวแปรที่มาจากข้อมูล/config | ลูกค้าที่ fname = 'สมชัย, ใจดี' / 'สมชัย"ใจดี' (มีอัญประกาศ) / ชื่อที่มี CRLF และ config ของขวัญที่ค่าขึ้นต้นด้วย '=cmd\|' | 1. รัน batch 2. ตรวจไฟล์ CSV ที่สร้าง 3. เปิดไฟล์ด้วย spreadsheet | ค่าที่มี comma/quote/newline ถูก quote และ escape ถูกต้องตาม RFC 4180 — จำนวนคอลัมน์ต่อแถวไม่เพี้ยน และค่าที่ขึ้นต้นด้วย = + - @ ไม่ถูกตีความเป็นสูตรเมื่อเปิดด้วย spreadsheet | ดู test-data_csms-004-birthday.json (TC-072) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — negative-input-catalog §B; ค่ามาจาก DB และ config ที่ทีมการตลาดแก้ได้ |
| TC-073 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | ไฟล์ CSV ที่พัก ณ ระบบไฟล์มี PII (ชื่อ + เบอร์มือถือ) | batch สร้างไฟล์ CSV สำเร็จและไฟล์ยังอยู่บน server | 1. รัน batch 2. ตรวจ path สิทธิ์ไฟล์ (file permission) และเจ้าของไฟล์ 3. ตรวจนโยบายการเข้ารหัสและการลบไฟล์เมื่อพ้นกำหนด | ไฟล์ถูกจำกัดสิทธิ์เฉพาะ service account ที่จำเป็น มีนโยบายเข้ารหัส/จัดเก็บ/ลบที่ระบุไว้ และไม่ถูกวางในพื้นที่ที่เข้าถึงได้จากภายนอก | ดู test-data_csms-004-birthday.json (TC-073) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — @disputed @csv-path; ไม่มี security/PII NFR ใน spec (checklist G4 / finding F-001) จึงยังไม่มีเกณฑ์ผ่านที่เป็นทางการ |
| TC-074 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-013 Failure Alert Email | Alert Email | Alerting | สร้างไฟล์ CSV ไม่สำเร็จ ต้องส่ง email แจ้งเตือน | ทำให้การสร้างไฟล์ล้มเหลว (เช่น ไม่มีสิทธิ์เขียน / disk เต็ม / path ไม่มีอยู่) | 1. รัน batch 2. ตรวจสถานะรอบ 3. ตรวจ email แจ้งเตือน | ระบบตรวจพบความล้มเหลว หยุดรอบ และส่ง email แจ้งทีม IT Development และกลุ่มผู้ใช้งานทันที พร้อมรายละเอียดข้อผิดพลาด | ดู test-data_csms-004-birthday.json (TC-074) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — US5 AS ลำดับที่ 4 / FR-013 ระบุ 'สร้างไฟล์ CSV ไม่สำเร็จ' ไว้ตรง ๆ |
| TC-075 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010 CSV Interface File | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | กลุ่มเป้าหมายว่างเปล่าในรอบนั้น | ไม่มีลูกค้าคนใดมีวันเกิดตรงกับวันประมวลผล | 1. รัน batch 2. ตรวจว่ามีไฟล์ถูกสร้างหรือไม่ 3. ตรวจ CSMS_LOG และ email | พฤติกรรมเป็นไปตามที่นิยามไว้ (ไม่สร้างไฟล์ หรือสร้างไฟล์เปล่า) รอบจบสถานะสำเร็จ ไม่ส่ง email แจ้งความล้มเหลว และมีบันทึกใน CSMS_LOG | ดู test-data_csms-004-birthday.json (TC-075) — synthetic เท่านั้น | P2 | Not Run |  |  | - | @disputed @csv-path — spec ไม่ระบุ; ต้องไม่ถูกตีความว่าเป็นความล้มเหลวระดับรอบ (finding F-012) |
| TC-076 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน ESB และรับ refer_no | ไฟล์ CSV ถูกสร้างเรียบร้อยและ SMS Gateway พร้อมใช้งาน | 1. รัน batch 2. ตรวจการเรียก Web Service (ESB) 3. ตรวจผลตอบกลับ | ระบบนำส่งไฟล์สำเร็จและได้รับผลตอบกลับที่มี refer_no พร้อมสถานะการส่งรายรายการ | ดู test-data_csms-004-birthday.json (TC-076) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — US4 AS-5 / FR-011 |
| TC-077 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | SMS Gateway ปฏิเสธไฟล์ CSV | SMS Gateway ตอบกลับด้วยความล้มเหลว (ไฟล์ผิดรูปแบบ / service ไม่พร้อม) | 1. รัน batch 2. ตรวจการบันทึกผล 3. ตรวจว่ามีการ retry อัตโนมัติหรือไม่ | บันทึกรายการด้วยสถานะไม่สำเร็จ (ไม่มี refer_no) ไม่ retry อัตโนมัติในรอบ daily และให้ซ่อมผ่าน Manual Fix | ดู test-data_csms-004-birthday.json (TC-077) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @csv-path — Assumptions (SMS Gateway); ระดับไฟล์ล้มเหลว = ลูกค้าทั้งรอบไม่ได้รับ = blast radius สูงกว่า api-path |
| TC-078 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | ส่งทีละรายการผ่าน SMS Gateway V3 sendSmsOtp โดยไม่สร้างไฟล์ | กลุ่มเป้าหมายที่คัดกรองแล้ว 3 ราย และ SMS Gateway V3 พร้อมใช้งาน | 1. รัน batch 2. นับจำนวน HTTP call ที่เกิดขึ้น 3. ตรวจ payload แต่ละ call | เกิด 1 HTTP call ต่อ 1 ลูกค้า (3 call) โดยแต่ละ call มีข้อมูลเทียบเท่าคอลัมน์ CSV (เบอร์มือถือ + ข้อความที่ render var1/var2/var3 ครบ) และไม่มีไฟล์ CSV ถูกสร้าง | ดู test-data_csms-004-birthday.json (TC-078) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @api-path — ตาม plan.md ของ CSMS-001/002/003 (ไม่สร้างไฟล์ CSV; sendSmsOtp); ห้ามรันชุดนี้คู่กับ @csv-path |
| TC-079 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | รับ refer_no รายรายการจากผลตอบกลับของแต่ละ call | SMS Gateway V3 ตอบกลับ refer_no ต่อ call | 1. รัน batch 2. ตรวจผลตอบกลับแต่ละ call 3. ตรวจ CUSTOMER_BIRTHDAY | แต่ละรายการได้รับ refer_no ของตัวเองและถูกบันทึกลง CUSTOMER_BIRTHDAY ครบ (>= 99% ตาม SC-002) | ดู test-data_csms-004-birthday.json (TC-079) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @api-path |
| TC-080 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | call รายรายการล้มเหลว รอบต้องทำงานต่อ | ลูกค้ารายที่ 2 จาก 3 ราย ได้ผลตอบกลับล้มเหลว/timeout | 1. รัน batch 2. ตรวจการบันทึกผลแต่ละราย 3. ตรวจว่ารอบจบครบ 3 ราย | รายที่ 2 ถูกบันทึกด้วยสถานะไม่สำเร็จ (ไม่มี refer_no); รายที่ 1 และ 3 ส่งสำเร็จ; รอบไม่หยุด และซ่อมรายที่ 2 ผ่าน Manual Fix ได้ | ดู test-data_csms-004-birthday.json (TC-080) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @api-path — blast radius ต่างจาก csv-path (TC-077) อย่างมีนัยสำคัญ |
| TC-081 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | ส่ง 10000 รายการทีละ call ภายใน 5 นาที | กลุ่มเป้าหมาย 10000 ราย และ SMS Gateway V3 พร้อมใช้งาน | 1. รัน batch 2. จับเวลาตั้งแต่เริ่มถึงจบรอบ 3. นับจำนวน call ที่สำเร็จ | รอบเสร็จภายใน 5 นาที (SC-001) และส่งครบ 10000 call — หากทำไม่ได้ ต้องถือเป็น defect ของการเลือกสถาปัตยกรรม ไม่ใช่ปรับ SC | ดู test-data_csms-004-birthday.json (TC-081) — synthetic เท่านั้น | P1 | Not Run |  |  | - | @disputed @api-path — plan.md ของ CSMS-001 เตือนเรื่องนี้ไว้เอง (ไม่มี bulk); 10000 call ใน 300 วิ = 33 call/วินาที |
| TC-082 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-011 SMS Gateway Delivery | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | cardNo/เบอร์มือถือใน payload ของ sendSmsOtp | เปิด log ระดับ DEBUG ของ SMS Gateway client และรัน batch | 1. รัน batch 2. ตรวจ payload และ protocol ที่ใช้ 3. ค้นหา cardNo และเบอร์มือถือใน application log | การเรียกใช้ผ่านช่องทางที่เข้ารหัส (TLS) payload ไม่มี cardNo เกินจำเป็น และ cardNo/เบอร์ไม่ถูก log เป็น plaintext | ดู test-data_csms-004-birthday.json (TC-082) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — @disputed @api-path; ไม่มี security/PII NFR รองรับ (finding F-001) |
| TC-083 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-010b CSV Column Contract | SMS Job (Batch CSMS-004) | Interface File (DISPUTED) | ข้อกำหนด seq_no และ datetime ไม่มีที่รองรับในเส้นทาง API | เลือกใช้เส้นทาง sendSmsOtp (ไม่มีไฟล์ CSV) | 1. ตรวจ FR-010b ว่าบังคับ seq_no และ datetime 2. ตรวจว่า payload ของ sendSmsOtp รองรับ field ใดบ้าง 3. ตรวจว่าค่าเหล่านี้ถูกบันทึกที่ใด | ทุก field ที่ FR-010b บังคับมีที่อยู่ที่ระบุได้ (ใน payload หรือใน CUSTOMER_BIRTHDAY) — หากไม่มี ต้องถือว่า FR-010b เป็นข้อกำหนดกำพร้าที่ต้องตัดหรือย้ายอย่างเป็นทางการ | ดู test-data_csms-004-birthday.json (TC-083) — synthetic เท่านั้น | P2 | Not Run |  |  | - | @disputed @api-path — พิสูจน์ว่าข้อขัดแย้ง CSV vs API ทำให้ FR-010b ไม่มีความหมาย ไม่ใช่แค่เปลี่ยนวิธีส่ง (finding F-002) |
| TC-084 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | ส่งสำเร็จ ต้องบันทึก CUSTOMER_BIRTHDAY ครบทุก field และ CSMS_LOG | ลูกค้าได้รับ SMS สำเร็จพร้อม refer_no จาก Gateway | 1. รัน batch 2. ตรวจแถวใน CUSTOMER_BIRTHDAY 3. ตรวจแถวใน CSMS_LOG | CUSTOMER_BIRTHDAY มีค่าครบ: policy_no, policy_type, title_name, fname, lname, birthday, mobile_no, rewards, sms_message, sms_sent_date, credit_amount, refer_no/สถานะ; CSMS_LOG มีบันทึกภาพรวมพร้อม sms_category_name_abbr = MKTBirthday | ดู test-data_csms-004-birthday.json (TC-084) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS ลำดับที่ 2 (numbering สลับ) / FR-012 / SC-004 |
| TC-085 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | ส่งไม่สำเร็จหรือถูก skip ต้องบันทึกด้วยสถานะไม่สำเร็จ | มีรายการที่ถูก skip (ไม่มีเบอร์) และรายการที่ส่งไม่สำเร็จ (Gateway fail) ในรอบเดียวกัน | 1. รัน batch 2. ตรวจแถวใน CUSTOMER_BIRTHDAY ของทั้งสองกรณี | ทั้งสองกรณีถูกบันทึกด้วยสถานะไม่สำเร็จและไม่มี refer_no — 100% ของรายการที่เข้าขั้นตอนส่ง/ถูก skip ถูกบันทึก (SC-004) | ดู test-data_csms-004-birthday.json (TC-085) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS ลำดับที่ 3 (numbering สลับ) / FR-012 |
| TC-086 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | กรมธรรม์ GOV ต้องถูกบันทึกใน CUSTOMER_BIRTHDAY ด้วย | ลูกค้าที่มีกรมธรรม์ GOV เข้าเงื่อนไขและได้รับ SMS | 1. รัน batch 2. ตรวจแถวใน CUSTOMER_BIRTHDAY ที่ policy_type = GOV | แถว GOV ถูกบันทึกครบเหมือนประเภทอื่น — ตัวอย่างในเอกสารที่ยกเฉพาะ ORD/IND/PA ไม่ใช่ข้อจำกัดของระบบ | ดู test-data_csms-004-birthday.json (TC-086) — synthetic เท่านั้น | P2 | Not Run |  |  | - | Assumptions ระบุ GOV MUST ถูกบันทึก; GOV อยู่ใน scope ไม่เท่ากันข้าม spec พี่น้อง (finding F-004) |
| TC-087 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | CUSTOMER_BIRTHDAY เก็บ PII (cardNo/เบอร์/ชื่อ) ต้องมีการควบคุมการเข้าถึงและ masking | ตาราง CUSTOMER_BIRTHDAY ถูกสร้างและมีข้อมูลจากการรัน batch | 1. ตรวจ schema ว่ามีคอลัมน์ใดเก็บ cardNo/mobile_no/fname/lname 2. ตรวจสิทธิ์การเข้าถึงตาราง (grant) 3. ตรวจว่ามีการ mask/tokenize หรือไม่ 4. ตรวจนโยบายการเก็บรักษา (retention) | มีการควบคุมการเข้าถึงที่ระบุได้ นโยบาย retention ที่ชัดเจน และมีข้อยุติเป็นทางการว่าจะ mask หรือยอมรับความเสี่ยงตาม precedent ของโมดูล CSMS | ดู test-data_csms-004-birthday.json (TC-087) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — finding F-001; spec ไม่มี security/PII NFR เลย (checklist G4) — สำหรับแคมเปญนี้ dedup key = cardNo = เลขบัตรประชาชน จึงรุนแรงที่สุดใน 4 แคมเปญ |
| TC-088 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | cardNo ต้องไม่ปรากฏใน CSMS_LOG และ application log | เปิด log ระดับปกติของ production และรัน batch ที่มีทั้งรายการสำเร็จและล้มเหลว | 1. รัน batch 2. ค้นหาเลข 13 หลักใน CSMS_LOG 3. ค้นหาเลข 13 หลักใน application log / stack trace ของรายการที่ล้มเหลว | cardNo ไม่ปรากฏเป็น plaintext ใน CSMS_LOG และ application log รวมถึงใน exception/stack trace ของรายการที่ล้มเหลว | ดู test-data_csms-004-birthday.json (TC-088) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — finding F-001; Key Entities ของ CSMS_LOG ไม่มี cardNo แต่ต้องพิสูจน์ว่าไม่รั่วผ่าน sms_message หรือ exception |
| TC-089 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-008c Per-Customer (cardNo) Dedup | SMS Job (Batch CSMS-004) | Dedup | บันทึกอ้างกรมธรรม์ตัวแทน 1 ฉบับต่อลูกค้าต่อรอบ | cardNo เดียวมีกรมธรรม์เข้าเงื่อนไข 2 ฉบับในรอบเดียวกัน | 1. รัน batch 2. นับแถวใน CUSTOMER_BIRTHDAY ของ cardNo นั้นในรอบนั้น 3. รัน batch ซ้ำและเทียบว่าเลือกกรมธรรม์ฉบับเดิม | มี 1 แถวต่อลูกค้าต่อรอบ อ้างกรมธรรม์ตัวแทน 1 ฉบับ และการเลือกกรมธรรม์ตัวแทนเป็นแบบ deterministic (ฉบับเดิมทุกรอบ) | ดู test-data_csms-004-birthday.json (TC-089) — synthetic เท่านั้น | P2 | Not Run |  |  | - | Assumptions + FR-008c; spec ไม่ระบุเกณฑ์เลือกกรมธรรม์ตัวแทน — gap (finding F-013) |
| TC-090 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-012 Audit Log (CUSTOMER_BIRTHDAY/CSMS_LOG) | SMS Job (Batch CSMS-004) | Audit | field audit ของ CUSTOMER_BIRTHDAY ถูกบันทึกครบ | batch รันโดย SYSTEM_BATCH และ Manual Fix รันโดย IT_ADMIN | 1. รัน batch อัตโนมัติ 2. รัน Manual Fix 3. ตรวจ created_by, created_date, updated_by, updated_date | field audit ถูกบันทึกครบและแยกแยะได้ว่าแถวใดมาจากรอบอัตโนมัติและแถวใดมาจาก Manual Fix ของ IT Admin คนใด | ดู test-data_csms-004-birthday.json (TC-090) — synthetic เท่านั้น | P3 | Not Run |  |  | - | Key Entities ระบุ field เหล่านี้; จำเป็นต่อการตรวจสอบย้อนหลังของ Manual Fix |
| TC-091 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-013 Failure Alert Email | Alert Email | Alerting | batch ล้มเหลวระดับรอบ ต้อง email แจ้งทีม IT และ User ภายใน 15 นาที | ทำให้เกิดความล้มเหลวระดับรอบ (เช่น DWConsole ไม่พร้อมใช้) | 1. รัน batch เวลา 09:00 น. 2. จับเวลาที่ email ถูกส่ง 3. ตรวจผู้รับและเนื้อหา | email ถูกส่งถึง distribution list ของทีม IT Development และกลุ่มผู้ใช้งานภายใน 15 นาทีนับจาก 09:00 น. พร้อมรายละเอียดข้อผิดพลาด | ดู test-data_csms-004-birthday.json (TC-091) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS ลำดับที่ 4 (numbering สลับ) / FR-013 / SC-006 |
| TC-092 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-013 Failure Alert Email | Alert Email | Alerting | email แจ้งเตือนต้องไม่มี PII (cardNo/เบอร์/ชื่อ) | เกิดความล้มเหลวระดับรอบขณะกำลังประมวลผลลูกค้าที่มีข้อมูลจริงในหน่วยความจำ | 1. ทำให้ batch ล้มเหลวพร้อม exception ที่มีข้อมูลลูกค้า 2. ตรวจเนื้อหา email และไฟล์แนบ (ถ้ามี) | email มีเฉพาะรายละเอียดข้อผิดพลาดและตัวชี้วัดระดับรอบ — MUST NOT มี cardNo, เบอร์มือถือ, ชื่อลูกค้า หรือ stack trace ที่มี PII | ดู test-data_csms-004-birthday.json (TC-092) — synthetic เท่านั้น | P1 | Not Run |  |  | - | PDPA CRITICAL — finding F-001; email ออกนอกระบบไปยัง distribution list ที่ควบคุมผู้รับได้ยากกว่า DB |
| TC-093 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-013 Failure Alert Email | Alert Email | Alerting | เนื้อหา email แจ้งเตือนอ่านแล้วลงมือแก้ได้จริง | เกิดความล้มเหลวระดับรอบ | 1. ทำให้ batch ล้มเหลว 2. อ่าน email ในมุมผู้รับที่ไม่ได้อยู่กับระบบ | email ระบุได้ครบว่า batch ใด (CSMS-004) วันที่ประมวลผลใด ล้มเหลวขั้นตอนใด จำนวนรายการที่กระทบ และขั้นถัดไปคืออะไร (Manual Fix) — หัวข้อ email แยกแยะจาก batch พี่น้องได้ | ดู test-data_csms-004-birthday.json (TC-093) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §D (feedback presence) — batch แบบ headless ไม่มี UI จึง surface UX คือ email และหน้า Manual Fix |
| TC-094 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-013 Failure Alert Email | Alert Email | Alerting | การส่ง email แจ้งเตือนล้มเหลวเอง | mail server ไม่พร้อมใช้งานขณะ batch ล้มเหลว | 1. ทำให้ batch ล้มเหลว 2. ทำให้ mail server ไม่ตอบสนอง 3. ตรวจ log | ระบบบันทึกความพยายามส่ง email และความล้มเหลวไว้ใน log โดยไม่ทำให้เกิด exception ซ้อนที่กลบสาเหตุเดิม | ดู test-data_csms-004-birthday.json (TC-094) — synthetic เท่านั้น | P3 | Not Run |  |  | - | Assumptions: 'การส่ง email ไม่รับประกันผลแต่บันทึกความพยายาม' |
| TC-095 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | IT Admin สั่ง Manual Batch ย้อนหลังตามช่วงวันที่ | รอบวันที่ 2026-05-16 ล้มเหลว มีลูกค้า 50 รายที่ยังไม่ได้รับ SMS | 1. เข้า Admin Dashboard ด้วยสิทธิ์ IT_ADMIN 2. ระบุช่วงวันที่ 2026-05-16 3. สั่งรัน Manual Batch 4. ตรวจผล | ลูกค้าที่ค้างทั้ง 50 รายได้รับ SMS ครบภายใน 1 ชั่วโมง (SC-007) และมีบันทึกผลครบ | ดู test-data_csms-004-birthday.json (TC-095) — synthetic เท่านั้น | P1 | Not Run |  |  | - | US5 AS ลำดับที่ 5 (numbering สลับ) / FR-014 |
| TC-096 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | Manual Fix ต้อง idempotent ไม่ส่งซ้ำรายการที่สำเร็จแล้ว | รอบวันที่ 2026-05-16 ส่งสำเร็จ 30 ราย ล้มเหลว 20 ราย | 1. สั่ง Manual Batch สำหรับวันที่ 2026-05-16 2. นับ SMS ที่ส่งออก 3. สั่ง Manual Batch ซ้ำอีกครั้งด้วยวันเดิม 4. นับ SMS ที่ส่งออก | ครั้งแรกส่งเฉพาะ 20 รายที่ค้าง; ครั้งที่สองไม่ส่งเลย — 30 รายที่สำเร็จแล้วไม่ได้รับซ้ำ (ตรวจด้วยกลไก FR-008b) | ดู test-data_csms-004-birthday.json (TC-096) — synthetic เท่านั้น | P1 | Not Run |  |  | - | FR-014 + SC-003; รัน 2 ครั้งเพื่อพิสูจน์ idempotency จริง |
| TC-097 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | Manual Fix ใช้วันที่ที่ระบุเป็นฐานเทียบวันเกิด ไม่ใช่วันที่กดรัน | วันปัจจุบันคือ 2026-05-20 และต้องการซ่อมรอบวันที่ 2026-05-16 | 1. กดรัน Manual Batch วันที่ 2026-05-20 โดยระบุช่วงวันที่ = 2026-05-16 2. ตรวจกลุ่มเป้าหมายที่ได้ | กลุ่มเป้าหมายคือลูกค้าที่วัน/เดือนเกิด = 05-16 (ไม่ใช่ 05-20) และคอลัมน์/บันทึกเวลาอ้างอิงวันที่ที่ระบุ | ดู test-data_csms-004-birthday.json (TC-097) — synthetic เท่านั้น | P2 | Not Run |  |  | - | spec Edge Cases: 'ประมวลผลข้ามเที่ยงคืน/รอบ Manual ระบุวันย้อนหลัง' |
| TC-098 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | เฉพาะ IT_ADMIN ที่ได้รับสิทธิ์เท่านั้นที่สั่ง Manual Batch ได้ | มีผู้ใช้ 2 ราย: IT_ADMIN ที่มีสิทธิ์ และผู้ใช้ทั่วไปที่ไม่มีสิทธิ์ | 1. เข้า Admin Dashboard ด้วยผู้ใช้ทั่วไปแล้วพยายามสั่งรัน 2. เรียก endpoint ของ Manual Batch ตรง ๆ โดยไม่ผ่าน UI 3. เข้าด้วย IT_ADMIN แล้วสั่งรัน 4. ตรวจ audit | ผู้ใช้ทั่วไปถูกปฏิเสธทั้งผ่าน UI และเรียก endpoint ตรง; IT_ADMIN สั่งได้และมีการบันทึก audit ว่าใครสั่งรันเมื่อใดด้วยช่วงวันที่ใด | ดู test-data_csms-004-birthday.json (TC-098) — synthetic เท่านั้น | P1 | Not Run |  |  | - | Assumptions ระบุสิทธิ์ + audit; ทดสอบระดับ endpoint ไม่ใช่แค่ซ่อนปุ่ม |
| TC-099 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | ช่วงวันที่ของ Manual Fix ที่ไม่สมเหตุผล | เข้า Admin Dashboard ด้วยสิทธิ์ IT_ADMIN | 1. ระบุวันที่ในอนาคต (2027-01-01) 2. ระบุช่วงกลับด้าน (end < start) 3. ระบุปี 9999 4. ระบุวันก่อน Go Live 5. ระบุช่วงกว้างมาก (1 ปี) | ทุกกรณีถูกปฏิเสธพร้อมข้อความที่เข้าใจได้ หรือมีพฤติกรรมที่นิยามไว้ชัดเจน — ไม่เกิดการส่ง SMS ที่ไม่ควรส่งและไม่เกิด exception | ดู test-data_csms-004-birthday.json (TC-099) — synthetic เท่านั้น | P2 | Not Run |  |  | - | negative-input-catalog §C (past/far-future/reversed range); spec ไม่ระบุ validation ของช่วงวันที่ — gap |
| TC-100 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | สั่ง Manual Fix ขณะที่ batch รอบปกติกำลังทำงาน | batch รอบ 09:00 น. กำลังประมวลผลวันที่ 2026-05-16 อยู่ | 1. ระหว่างรอบปกติทำงาน สั่ง Manual Batch วันที่ 2026-05-16 พร้อมกัน 2. นับ SMS ที่ลูกค้าแต่ละ cardNo ได้รับ | ลูกค้าแต่ละรายได้รับ 1 ข้อความเท่านั้น — ไม่เกิด race condition ระหว่างการอ่าน sms_sent_date กับการเขียนของอีกรอบ | ดู test-data_csms-004-birthday.json (TC-100) — synthetic เท่านั้น | P1 | Not Run |  |  | - | ความเสี่ยงจริงเพราะ SC-007 ให้ซ่อมภายใน 1 ชม. ซึ่งอาจคาบเกี่ยวรอบปกติ; spec ไม่ระบุกลไกกัน (finding F-009) |
| TC-101 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | FR-014 Manual Fix (Idempotent) | Admin Dashboard — Manual Fix | Manual Fix | หน้า Manual Fix กลางแสดง batch CSMS-004 และผลการรัน | เข้า Admin Dashboard กลางของ CSMS ด้วยสิทธิ์ IT_ADMIN | 1. เปิดหน้า Manual Fix 2. ตรวจว่า batch นี้อยู่ใน list และแยกแยะจาก CSMS-001/002/003 ได้ 3. สั่งรันแล้วสังเกต feedback ระหว่างรอและเมื่อจบ | batch CSMS-004 ปรากฏใน list ด้วยชื่อที่แยกแยะได้ มี feedback ระหว่างประมวลผล และสรุปผลเมื่อจบ (จำนวนสำเร็จ/ล้มเหลว/ข้าม) ให้ IT Admin รู้ว่าต้องทำอะไรต่อ | ดู test-data_csms-004-birthday.json (TC-101) — synthetic เท่านั้น | P2 | Not Run |  |  | - | scope ระบุ 'เพิ่ม batch นี้เข้า list' ของหน้าเดิม; negative-input-catalog §D (post-action feedback) |
| TC-102 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | SC-001 Throughput 10k / 5 min | SMS Job (Batch CSMS-004) | Performance | ประมวลผล 10000 รายการภายใน 5 นาที | เตรียมกลุ่มเป้าหมาย 10000 รายในสภาพแวดล้อมที่เทียบเคียง production | 1. รัน batch 2. จับเวลาตั้งแต่ 09:00 น. จนจบรอบ 3. ตรวจจำนวนที่ประมวลผลครบ | รอบเสร็จภายใน 5 นาทีและประมวลผลครบ 10000 รายการ | ดู test-data_csms-004-birthday.json (TC-102) — synthetic เท่านั้น | P2 | Not Run |  |  | - | SC-001; ผลจะต่างกันมากระหว่าง csv-path กับ api-path (ดู TC-081) — จึงขึ้นกับข้อยุติ interface |
| TC-103 | Centralized SMS (CSMS) — Ocean Life Web Portal / epirusapp | SC-002 99% refer_no | SMS Job (Batch CSMS-004) | Delivery (DISPUTED) | 99% ของรายการที่คัดเลือกได้รับ refer_no | กลุ่มเป้าหมายขนาดใหญ่ (>= 1000 ราย) และ SMS Gateway ทำงานปกติ | 1. รัน batch 2. นับรายการที่มี refer_no เทียบกับรายการที่คัดเลือก | อย่างน้อย 99% ของรายการที่คัดเลือกมี refer_no บันทึกไว้ | ดู test-data_csms-004-birthday.json (TC-103) — synthetic เท่านั้น | P2 | Not Run |  |  | - | SC-002 |

---

## Coverage Summary

### ภาพรวม

| ตัวชี้วัด | ค่า |
|---|---|
| Functional Requirements ทั้งหมด | **20** (FR-001, 002, 003, 003a, 004, 005, 006, 007, 008, 008b, 008c, 009, 009a, 010, 010a, 010b, 011, 012, 013, 014) |
| Success Criteria ทั้งหมด | **8** (SC-001 – SC-008) |
| **รวมข้อกำหนดที่ต้องครอบคลุม** | **28** |
| ข้อกำหนดที่มี TC >= 1 | **28** |
| **Coverage** | **100%** |
| Test Cases ทั้งหมด | **103** (TC-001 – TC-103) |
| **ข้อกำหนดที่ไม่มี TC (uncovered)** | **ไม่มี — 0 ข้อ** |

### จำนวน TC ต่อ Dimension (ครบทั้ง 7 มิติ)

| Dimension | จำนวน | หมายเหตุ |
|---|---|---|
| Positive | 24 | |
| Negative/Validation | 25 | |
| **Edge** | **37** | หนักที่สุดตามที่ควรเป็น — 29 ก.พ. (TC-012–TC-016, TC-050), พ.ศ./ค.ศ. (TC-009, TC-051, TC-067, TC-071), transposition (TC-006), เกิดวันรัน (TC-007), dedup ข้ามปี (TC-049, TC-050) |
| Concurrency | 2 | TC-053 (2 instance), TC-100 (Manual Fix ทับรอบปกติ) |
| Security | 10 | รวม **6 TC ด้าน PDPA/cardNo**: TC-035, TC-073, TC-082, TC-087, TC-088, TC-092 |
| Side-Effects | 3 | TC-086, TC-089, TC-090 |
| **UX/Usability** | **2** | TC-093 (เนื้อหา email), TC-101 (หน้า Manual Fix) |
| **รวม** | **103** | |

> **UX/Usability — ไม่ถูกตัดทิ้ง**: batch นี้เป็น **headless** ไม่มี UI สำหรับลูกค้า จึง map มิตินี้ไปที่ **surface ที่มนุษย์เห็นจริง 2 จุด** คือ (1) **email แจ้งเตือน** ที่ทีม IT/User ต้องอ่านแล้วลงมือแก้ได้ (TC-093) และ (2) **หน้า Manual Fix** ที่ IT Admin ใช้งานจริง (TC-101) — ตามกฎของ skill ที่ห้าม blanket-exclude ทั้งมิติ
> **สิ่งที่ตัดออกอย่างเจาะจง** (พร้อมเหตุผลหนึ่งบรรทัด): **WCAG AA / responsive / mobile** — ไม่เกี่ยวข้อง เพราะไม่มีหน้าจอใหม่ในแคมเปญนี้ (scope ระบุชัดว่า "นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard" — ใช้หน้า Manual Fix กลางที่มีอยู่แล้ว เพียงเพิ่ม batch เข้า list)

### จำนวน TC ต่อ Priority

| Priority | จำนวน |
|---|---|
| P1 (smoke/critical path) | 63 |
| P2 (regression) | 37 |
| P3 (nice-to-have) | 3 |

### TC ที่ยัง `blocked` / ตัดสิน Pass-Fail ไม่ได้จนกว่าจะมีข้อยุติ

| TC | ติดที่ | Finding |
|---|---|---|
| TC-065 – TC-083 (19 TC) | ข้อขัดแย้ง CSV vs API — **ต้องลบชุดใดชุดหนึ่งทิ้ง** | F-002 |
| TC-068 | รหัส `112` vs `115` | F-002 |
| TC-027 | data contract `'0'` vs `'O'` | F-003 |
| TC-035, TC-073, TC-082, TC-087, TC-088, TC-092 | **ไม่มี security/PII NFR → ไม่มีเกณฑ์ผ่าน** | **F-001 (CRITICAL)** |
| TC-007 | spec ไม่ระบุกรณีเกิดวันรัน | — (route → `/speckit-checklist`) |

### การครอบคลุม negative-input-catalog

| ประเภท field | field ในแคมเปญนี้ | catalog rows ที่ใช้ | TC |
|---|---|---|---|
| **Date** | `birthdate`, วันประมวลผล, `begin_date`/`end_date`, ช่วง Manual Fix, `sms_sent_date` | boundary min/max ±1, start==end, past/far-future, reversed range | TC-011, TC-019, TC-030, TC-049, TC-050, TC-061, TC-099 |
| **Phone** | `mobile1`, `mobile2` | empty/whitespace, ความยาว, non-numeric, รูปแบบสากล | TC-021, TC-022, TC-023 |
| **Free-text** | `fname`, `title_desc`, ค่า config `REWARDS` | empty/whitespace-only, ความยาว, unicode/emoji/RTL/NBSP, homoglyph | TC-031, TC-058, TC-064 |
| **URL (config)** | `LINE_LINK` | scheme ที่ไม่ปลอดภัย, open-redirect | TC-059 |
| **ID / key** | `cardNo` | whitespace, zero-width space, normalize/dedup bypass | TC-052 |
| **Numeric** | `policy_org`, `seq_no` | min/min-1/max/max+1, เริ่มที่ 1 ไม่ใช่ 0 | TC-030, TC-070 |
| **Output file** | CSV cell | comma/quote/newline escape (RFC 4180), formula injection | TC-072 |
| **State/feedback** | email, หน้า Manual Fix | feedback presence, post-action summary | TC-093, TC-101 |

> **rows ที่ไม่ใช้ (พร้อมเหตุผล)**: **LIKE wildcard `%`/`_` และ SQL injection ผ่านช่องค้นหา** — แคมเปญนี้ **ไม่มี free-text search field ที่ผู้ใช้ป้อน** (batch คัดกรองจาก DB ด้วยเงื่อนไขคงที่; input เดียวจากมนุษย์คือ "ช่วงวันที่" ของ Manual Fix ซึ่งครอบคลุมด้วย TC-099 แล้ว) — ไม่มี sink ให้ทดสอบ

### Traceability — FR/SC → TC

| Requirement | TC | จำนวน |
|---|---|---|
| FR-001 | TC-001, TC-002 | 2 |
| FR-002 | TC-003 – TC-009 | 7 |
| FR-003 | TC-010, TC-011 | 2 |
| FR-003a | TC-012 – TC-016, TC-050 | 6 |
| FR-004 | TC-017, TC-018, TC-019 | 3 |
| FR-005 | TC-020 – TC-023 | 4 |
| FR-006 | TC-024, TC-025, TC-026, TC-027, TC-032 | 5 |
| FR-007 | TC-028, TC-029, TC-030, TC-031, TC-032 | 5 |
| FR-008 | TC-033, TC-034, TC-035 | 3 |
| FR-008b | TC-046, TC-047, TC-049, TC-050, TC-051, TC-053, TC-100 | 7 |
| FR-008c | TC-016, TC-048, TC-052, TC-053, TC-089 | 5 |
| FR-009 | TC-036 – TC-041, TC-044, TC-045 | 8 |
| FR-009a | TC-042, TC-043 | 2 |
| FR-010 | TC-065, TC-066, TC-067, TC-068, TC-073, TC-075 | 6 |
| FR-010a | TC-054 – TC-064 | 11 |
| FR-010b | TC-067, TC-069, TC-070, TC-071, TC-072, TC-083 | 6 |
| FR-011 | TC-076 – TC-082 | 7 |
| FR-012 | TC-084 – TC-090 | 7 |
| FR-013 | TC-044, TC-063, TC-074, TC-091 – TC-094 | 7 |
| FR-014 | TC-095 – TC-101 | 7 |
| SC-001 | TC-070, TC-081, TC-102 | 3 |
| SC-002 | TC-076, TC-079, TC-103 | 3 |
| SC-003 | TC-046, TC-048, TC-053, TC-096 | 4 |
| SC-004 | TC-084, TC-085 | 2 |
| SC-005 | TC-054, TC-055, TC-056, TC-064 | 4 |
| SC-006 | TC-091 | 1 |
| SC-007 | TC-095 | 1 |
| SC-008 | TC-017, TC-032, TC-036 – TC-039 | 6 |

**ไม่มี TC ที่ไม่ผูกกับข้อกำหนดใด** (ไม่มี scope creep)

---

## Next Actions

1. **SA/PO ตัดสินข้อขัดแย้ง CSV vs API (F-002)** → ลบชุด TC ที่แพ้ทิ้งทั้งชุด (13 หรือ 6 TC) + test-data ที่ผูกกัน → re-run `/speckit-qa coverage`
2. **SA/PO ตัดสินรหัส category `112` vs `115` (F-002)** → ปลดบล็อก TC-068
3. **เพิ่ม security/PII NFR (F-001 — CRITICAL)** → ปลดบล็อก TC-035/073/082/087/088/092 ซึ่งปัจจุบัน **ตัดสิน Pass/Fail ไม่ได้**
4. **SA แก้ US5 numbering (F-005)** และ **ล็อก data contract รหัสประเภทกรมธรรม์ (F-003)**
5. **เขียน `plan.md` ของแคมเปญนี้ (F-006)** → review คอลัมน์ `Target Test Level` ทั้งตารางใหม่
6. รัน `/speckit-qa risk` → `/speckit-qa coverage` → `/speckit-qa test-data`

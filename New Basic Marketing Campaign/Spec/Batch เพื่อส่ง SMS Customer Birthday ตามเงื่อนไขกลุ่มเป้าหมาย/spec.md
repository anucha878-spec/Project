# Feature Specification: Batch ส่ง SMS "Customer Birthday" (อวยพรวันเกิด + เชิญลงทะเบียน LINE Ocean Connect) — โมดูล CSMS

**Feature Branch**: `005-batch-birthday-sms`

**Created**: 2026-07-07

**Status**: Draft

**Input**: User description: "SPEC_BATCH-CSMS-004_BirthDay.md + learn note 2147_CSMS-004_BirthDay_QUICK-REFERENCE.md กำหนดตาม template STANDARD_REQ_TEMPLATE_v1_1 — โมดูล CSMS ระบบ Ocean Life Web Portal"

**เอกสารอ้างอิง (Source Requirement)**:
- `SPEC_BATCH-CSMS-004_BirthDay.md` (Process Specification, UR20260070: Basic Campaign (MCMP), แก้ไขล่าสุด 06/05/2026 โดย อัครวัฒน์ วัฒธนพงษ์)
- `_learn/2026-07-07/2147_CSMS-004_BirthDay_QUICK-REFERENCE.md` (สรุป + จุดที่ต้อง clarify)
- Feature ที่เกี่ยวข้อง: `specs/002-batch-welcome-new-customer-line-sms` (CSMS-001), `specs/003-batch-welcome-new-customer-app-sms` (CSMS-002), `specs/004-gp7-sms-batch` (CSMS-003) — batch พี่น้องในโมดูล CSMS เดียวกัน ใช้ข้อยุติเรื่องการจัดการ error/log/Manual Fix ร่วมกันโดยอนุโลม

---

## ภาพรวม (Business Context)

Batch process รายวันที่ส่ง SMS อวยพร **"สุขสันต์วันเกิด"** ให้ลูกค้าที่มีวัน/เดือนเกิดตรงกับวันประมวลผลปัจจุบัน เพื่อแสดงความใส่ใจต่อลูกค้า และใช้โอกาสนี้เชิญชวนให้ลงทะเบียนใช้งาน **LINE Ocean Connect** พร้อมมอบของขวัญวันเกิด (รางวัล) และแนบลิงก์ลงทะเบียน กลุ่มเป้าหมายจำกัดเฉพาะลูกค้าช่องทางตัวแทนที่ **ยังไม่ได้ใช้งานทั้ง LINE Ocean Connect และ Ocean Club App** ครอบคลุมกรมธรรม์ประเภทสามัญ (ORD), อุตสาหกรรม ปช. (IND), อุตสาหกรรม ขพ. (GOV) และอุบัติเหตุส่วนบุคคล (PA)

> **ความต่างจาก batch พี่น้อง**: batch นี้ตรวจสถานะการสมัคร **2 ช่องทางพร้อมกัน (LINE + Ocean Club App)** ก่อนตัดสินใจส่ง (ต่างจาก CSMS-001/003 ที่ตรวจเฉพาะ LINE), เวลาประมวลผล **09:00 น.** (ต่าง batch อื่น 10:00 น.), และข้อความเป็น **ระดับลูกค้า** (อ้างอิงชื่อ + ของขวัญ + ลิงก์ ไม่อ้างอิงข้อมูลรายกรมธรรม์)

**ผู้เกี่ยวข้อง (Roles)**

| Role                                        | สิทธิ์                                  | ขอบเขต                                                             |
| ------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------- |
| `SYSTEM_BATCH` — ระบบ Batch (Scheduled Job) | ประมวลผลอัตโนมัติ                       | ลูกค้า/กรมธรรม์ทุกฉบับที่เข้าเงื่อนไขวันเกิดของวันนั้น              |
| `IT_ADMIN` — ผู้ดูแลระบบ                    | Manual Trigger / Re-run เฉพาะ Batch Fix | เลือกช่วง "วันที่" ที่ต้องการซ่อมข้อมูล ผ่าน Admin Dashboard กลางของ CSMS |

**ขอบเขต (Scope)**

ใน scope: คัดกรองลูกค้าที่วัน/เดือนเกิดตรงกับวันประมวลผล (กรมธรรม์ ORD/IND/GOV/PA สถานะ Inforce) → คัดกรอง Do Not Contact List → คัดเฉพาะช่องทางตัวแทน (ไม่ใช่ชำระเอง/Orphan) → map กรมธรรม์เป็น cardNo → ตรวจสถานะ 2 ช่องทาง (LINE Ocean Connect + Ocean Club App) คัดเฉพาะที่ยังไม่ใช้งานทั้งคู่ → กันส่งซ้ำในรอบวันเกิดปีเดียวกัน → ดึงของขวัญ/ลิงก์จาก config → สร้างไฟล์ CSV → ส่ง SMS ผ่านช่องทางกลาง (ESB → SMS Gateway) → บันทึก Log → แจ้งเตือนเมื่อล้มเหลว → รองรับ Manual Fix

นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard (ใช้หน้า Manual Fix กลางของ CSMS ที่มีอยู่แล้ว เพียงเพิ่ม batch นี้เข้า list — แนวทางเดียวกับ CSMS-001/002/003), logic การคำนวณ credit เดิมของ CSMS, การกำหนดมูลค่าของขวัญ/แคมเปญรางวัล (บริหารผ่าน config `cf_catalog` โดยทีมการตลาด), การเปลี่ยนแปลงต่อ batch CSMS-001/002/003, การส่งย้อนหลังก่อนวัน Go Live

---

## Clarifications

### Session 2026-07-07

- Q: การกันส่งซ้ำ SMS อวยพรวันเกิด ควรทำระดับใด (ข้อความเป็นระดับลูกค้า ไม่มีข้อมูลรายกรมธรรม์ แต่ตาราง `CUSTOMER_BIRTHDAY` เก็บรายกรมธรรม์)? → A: **ระดับลูกค้า (cardNo)** — ส่ง **1 ข้อความต่อลูกค้าต่อวันเกิดปีนั้น** แม้ลูกค้ามีหลายกรมธรรม์เข้าเงื่อนไขในรอบเดียวกัน (เพราะข้อความอ้างอิงชื่อ+ของขวัญ+ลิงก์ ไม่อ้างอิงกรมธรรม์ การส่งซ้ำหลายฉบับจะรบกวนลูกค้าและสิ้นเปลือง) — ต่างจาก CSMS-003 (GP7) ที่ dedup รายกรมธรรม์เพราะข้อความอ้างอิง policy_no
- Q: ลูกค้าที่เกิด 29 กุมภาพันธ์ ในปีที่ไม่ใช่อธิกสุรทิน (ไม่มี 29 ก.พ.) ควรส่งวันใด? → A: **ส่งวันที่ 28 กุมภาพันธ์** ของปีนั้น (ส่งภายในเดือนเกิด ก่อนสิ้นเดือน — ลูกค้าได้รับในช่วงวันเกิดจริง)

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - ระบบคัดกรองและส่ง SMS อวยพรวันเกิดอัตโนมัติรายวัน (Priority: P1)

ในฐานะระบบ (`SYSTEM_BATCH`) ต้องการค้นหาลูกค้าที่มีวันและเดือนเกิดตรงกับวันประมวลผลปัจจุบัน มีกรมธรรม์สถานะ Inforce และยังไม่ได้ใช้งานทั้ง LINE Ocean Connect และ Ocean Club App แล้วส่ง SMS อวยพรวันเกิดพร้อมของขวัญและลิงก์ลงทะเบียน LINE โดยอัตโนมัติทุกวันเวลา 09:00 น. เพื่อสร้างความประทับใจและกระตุ้นการลงทะเบียน LINE Ocean Connect

**Why this priority**: เป็นแก่นของ feature — หากไม่มีการคัดกรองและส่ง SMS อัตโนมัติ feature นี้ไม่มีคุณค่าทางธุรกิจ ส่วนอื่น (Manual Fix, แจ้งเตือน) เป็นส่วนเสริมของ flow หลักนี้

**Independent Test**: เตรียมลูกค้าทดสอบที่มีกรมธรรม์ Inforce และ `birthdate` มีวัน/เดือนตรงกับวันประมวลผล แล้วรัน batch หนึ่งรอบ — ตรวจว่า SMS ถูกส่งไปยังเบอร์ที่ถูกต้องด้วยข้อความที่แทนค่าตัวแปรครบถ้วน (ชื่อ/ของขวัญ/ลิงก์) และบันทึกประวัติครบ โดยไม่ต้องพึ่ง User Story อื่น

**ตัวอย่างข้อมูลจริง (Example Data)**:
- ข้อความ SMS = `สุขสันต์วันเกิดคุณ สมชัย OCEAN LIFE ไทยสมุทร ขอมอบของขวัญวันเกิด 500 เหรียญ ลงทะเบียนรับได้ที่ LINE OCEAN CONNECT คลิก https://lin.ee/JianZUe (บริการลูกค้า > สิทธิพิเศษ > แลกรับสิทธิพิเศษ)`
- fname = `สมชัย`, ของขวัญ (var2) = `500 เหรียญ`, ลิงก์ (var3) = `https://lin.ee/JianZUe`, mobile = `0845012341`
- ชื่อไฟล์ CSV ตัวอย่าง = `MKT_CSMS_MKTBirthday_690516090000.csv` (พ.ศ. 2569 = 69, ประมวลผล 09:00 น.)

**Acceptance Scenarios**:

1. **Given** ลูกค้าที่มีกรมธรรม์ Inforce และ `birthdate` วัน/เดือน = วันประมวลผล `2026-05-16`, **When** batch รันวันที่ `2026-05-16`, **Then** ลูกค้านั้นถูกคัดเข้ากลุ่มเป้าหมาย
2. **Given** ลูกค้าที่ `birthdate` วัน/เดือน ≠ วันประมวลผล, **When** batch รัน, **Then** ลูกค้านั้นถูกคัดออก (เทียบเฉพาะวัน/เดือน ไม่เทียบปีเกิด)
3. **Given** มีกรมธรรม์เข้าเงื่อนไขหลายประเภท (ORD, IND, GOV, PA) สถานะ Inforce, **When** batch รัน, **Then** ทุกกรมธรรม์ที่เข้าเงื่อนไขถูกคัดเข้ากลุ่มเป้าหมาย
4. **Given** กรมธรรม์สถานะไม่ใช่ Inforce (ORD/PA `policy_status ≠ '1'`; IND/GOV `policy_status` ไม่อยู่ใน `'1','2','3'`), **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออกไม่ว่าจะตรงวันเกิดหรือไม่
5. **Given** วันเกิดของลูกค้าตรงกับวันก่อน Go Live ของแคมเปญ, **When** batch รัน, **Then** ระบบไม่ส่งย้อนหลัง (เริ่มส่งเฉพาะตั้งแต่วัน Go Live เป็นต้นไป, ปี ค.ศ. 2026 ขึ้นไป)

---

### User Story 2 - คัดกรองกลุ่มห้ามติดต่อ และคัดเฉพาะลูกค้าช่องทางตัวแทน (Priority: P1)

ในฐานะระบบต้องการคัดลูกค้าที่อยู่ใน Do Not Contact List และคัดเฉพาะกรมธรรม์ที่เป็นลูกค้าช่องทางตัวแทน (ไม่ใช่บัญชีชำระเองหรือ Orphan) เพื่อเคารพความต้องการลูกค้าและส่งให้ตรงกลุ่มเป้าหมายการตลาด

**Why this priority**: เป็นข้อกำหนดด้าน compliance และ business targeting ที่บังคับ — การส่งให้กลุ่มห้ามติดต่อละเมิดความต้องการลูกค้า และการส่งนอกกลุ่มช่องทางตัวแทนผิดวัตถุประสงค์แคมเปญ

**Independent Test**: รัน batch บนชุดข้อมูลที่มีสถานะห้ามติดต่อและช่องทางผสมกัน แล้วตรวจว่ากลไกคัดกรองทำงานถูกต้อง

**Acceptance Scenarios**:

1. **Given** กรมธรรม์ ORD (`policy_type = '0'`) ที่มี `ili_policy_remark.remark_code = '1'`, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออกจากกลุ่มเป้าหมาย
2. **Given** กรมธรรม์ IND/GOV/PA (`policy_type = 'I'/'G'/'P'`) ที่มี `remark_code = '4'`, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออก
3. **Given** กรมธรรม์ ORD ที่มี `title_desc = 'ชำระเอง'` หรือ IND/GOV/PA ที่มี `position_code = '99'`, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออก (ไม่ใช่ช่องทางตัวแทน)
4. **Given** กรมธรรม์ที่ `policy_org` ไม่อยู่ในช่วง `2070001–2079999` และ `5070001–5079999`, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออก
5. **Given** กรมธรรม์ที่ไม่ติด Do Not Contact และเป็นช่องทางตัวแทน, **When** batch รัน, **Then** กรมธรรม์นั้นคงอยู่ในกลุ่มเป้าหมาย

---

### User Story 3 - ตรวจสถานะการสมัคร 2 ช่องทาง (LINE + Ocean Club App) (Priority: P1)

ในฐานะระบบต้องการตรวจสถานะการสมัครใช้งานของลูกค้าทั้งช่องทาง LINE Ocean Connect และ Ocean Club App เพื่อส่ง SMS เชิญชวนเฉพาะลูกค้าที่ **ยังไม่ได้ใช้งานช่องทางดิจิทัลใดเลย** (หรือใช้ LINE ไม่ได้เพราะบล็อก และยังไม่มีแอป) หลีกเลี่ยงการเชิญชวนซ้ำกับลูกค้าที่ active อยู่แล้ว

**Why this priority**: เป็นเงื่อนไขเป้าหมายหลักของแคมเปญ (เชิญ "ผู้ที่ยังไม่ได้ลงทะเบียน") และเป็นตรรกะเฉพาะที่ต่างจาก batch พี่น้อง — หากคัดผิด จะส่งเชิญชวนให้ลูกค้าที่ใช้งานอยู่แล้ว เกิดความรำคาญและสิ้นเปลือง

**Independent Test**: จำลองผลตอบกลับ API ของทั้ง 2 ช่องทางในทุกชุดรวม (combination) แล้วตรวจว่าการตัดสินใจส่ง/คัดออกตรงตามตารางเกณฑ์

**Acceptance Scenarios**:

1. **Given** ระบบ map กรมธรรม์เป็น `cardNo` แล้วเรียก Web Service ตรวจสถานะทั้ง LINE และ App, **When** ประมวลผลผลตอบกลับ, **Then** ตัดสินตามตาราง:
   - LINE = `E02` (ไม่พบ) **และ** App = `E02` (ไม่พบ) → **ส่ง** (ยังไม่สมัครช่องทางใด)
   - LINE = `E00` + `isBlockLine = true` **และ** App = `E02` → **ส่ง** (LINE บล็อก + ยังไม่มีแอป)
   - LINE = `E00` + `isBlockLine = false` **หรือ** App = `E00` → **คัดออก** (ใช้งาน LINE อยู่ หรือมีแอปแล้ว)
2. **Given** ระบบเรียก API แล้วไม่พบ `cardNo` ของกรมธรรม์, **When** ประมวลผล, **Then** ตัดกรมธรรม์นั้นออกจากกลุ่มเป้าหมาย + บันทึกสถานะไม่สำเร็จเพื่อ Manual Fix (ไม่หยุดรอบ)
3. **Given** ผลตอบกลับ API รายรายการผิดปกติ (เช่น `E13`/Exception หรือ `channel`/`isBlockLine` เป็นค่าว่าง), **When** ประมวลผล, **Then** skip รายการนั้น + บันทึกสถานะไม่สำเร็จ ไม่ retry รายรายการ และรอบยังทำงานต่อ (แนวทางเดียวกับ CSMS-001/002/003)

---

### User Story 4 - สร้างข้อความจาก template + config และนำส่ง SMS Gateway (Priority: P1)

ในฐานะระบบต้องการดึงข้อความ template ของขวัญ (รางวัล) และลิงก์ลงทะเบียนจาก config แล้วสร้างไฟล์ CSV นำส่งผ่าน Web Service กลาง (ESB → SMS Gateway) และรับผลตอบกลับพร้อม `refer_no` เพื่อบันทึกประวัติ

**Why this priority**: เป็นจุด integration ที่ทำให้เกิดการส่ง SMS จริงพร้อมเนื้อหาแคมเปญที่ถูกต้อง — หากขาดขั้นนี้ ไม่มี SMS ถูกส่งออก

**Independent Test**: สร้างไฟล์ CSV จากข้อมูลตัวอย่างที่แทนค่า template ครบ แล้วตรวจรูปแบบไฟล์และการนำส่งไปยัง SMS Gateway

**Acceptance Scenarios**:

1. **Given** กลุ่มลูกค้าที่คัดกรองแล้ว, **When** batch ประมวลผล, **Then** สร้างไฟล์ CSV (UTF-8) ตามรูปแบบ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` เช่น `MKT_CSMS_MKTBirthday_690516090000.csv` โดย Category ดึงจาก `SMS_CATEGORY` ที่ `SMS_CATEGORY_CODE = '112'` (= `MKTBirthday`)
2. **Given** ระบบต้องดึงข้อความ, **When** batch ประมวลผล, **Then** ค้นหา template จาก `sms_message_schedule` (เงื่อนไข `sms_category_code = '112'` และวันปัจจุบันอยู่ระหว่าง `begin_date`–`end_date`); หากไม่พบ record ให้ดึงจาก `sms_category` แทน
3. **Given** ข้อความ template ที่มีตัวแปร, **When** batch สร้าง CSV, **Then** แทนค่าตัวแปรครบ: `$(var1)` = `fname`, `$(var2)` = มูลค่าของขวัญจาก `cf_catalog` (`config_type='REWARDS'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`), `$(var3)` = ลิงก์จาก `cf_catalog` (`config_type='LINE_LINK'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`)
4. **Given** แต่ละแถวข้อมูลในไฟล์, **When** สร้าง CSV, **Then** มีคอลัมน์ตามลำดับ: `mobile`, `var1`, `var2`, `var3`, `seq_no` (Running Number เริ่มจาก 1), `datetime` (รูปแบบ `YYYY-MM-DD HH:MM` ปี ค.ศ.)
5. **Given** ไฟล์ CSV ที่มีรายการลูกค้า, **When** ระบบนำส่ง SMS Gateway ผ่าน Web Service, **Then** ระบบได้รับผลตอบกลับที่มี `refer_no` และสถานะการส่งรายรายการ

---

### User Story 5 - บันทึกประวัติการส่ง กันส่งซ้ำในรอบวันเกิดปีเดียวกัน และจัดการข้อผิดพลาด (Priority: P1)

ในฐานะระบบต้องการบันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip ลง audit log พร้อมสถานะการส่ง กันการส่ง SMS อวยพรซ้ำในวันเกิดปีเดียวกัน และแจ้งเตือนเมื่อ batch ล้มเหลว เพื่อให้ติดตาม แก้ปัญหา และ Manual Fix ย้อนหลังได้

**Why this priority**: audit trail และการกันส่งซ้ำจำเป็นต่อ compliance คุณภาพบริการ และควบคุมค่าใช้จ่าย — ความล้มเหลวระดับรอบต้องแจ้งเตือนทันที

**Independent Test**: รัน batch วันเดิมซ้ำสองรอบ แล้วตรวจว่ารอบที่สองไม่ส่งซ้ำ และทุกรายการถูกบันทึกด้วยสถานะและ metadata ที่ถูกต้อง

**Acceptance Scenarios**:

1. **Given** ลูกค้าที่เคยส่ง SMS อวยพรในวันเกิดปีนี้แล้ว (มีประวัติใน `CUSTOMER_BIRTHDAY` ที่ `sms_sent_date` ของปีปัจจุบัน `is not null`), **When** batch รันซ้ำ, **Then** ลูกค้านั้นถูกคัดออก ไม่ส่งซ้ำ
6. **Given** ลูกค้ารายเดียว (cardNo เดียว) มีกรมธรรม์เข้าเงื่อนไขวันเกิด 2 ฉบับในรอบเดียวกัน, **When** batch รัน, **Then** ลูกค้าได้รับ SMS **1 ข้อความเท่านั้น** (dedup ระดับลูกค้า)
7. **Given** ลูกค้าที่ `birthdate = 29 ก.พ.`, **When** batch รันปีที่ไม่ใช่อธิกสุรทินในวันที่ `28 ก.พ.`, **Then** ลูกค้านั้นถูกคัดเข้ากลุ่มเป้าหมายและได้รับ SMS
2. **Given** SMS ส่งสำเร็จจาก Gateway, **When** ได้รับผลตอบกลับ, **Then** บันทึกลง `CUSTOMER_BIRTHDAY` ครบทุก field พร้อม `sms_sent_date` และ `refer_no`/สถานะที่ได้รับ และบันทึกภาพรวมลง `CSMS_LOG`
3. **Given** SMS ส่งไม่สำเร็จหรือถูก skip, **When** ประมวลผล, **Then** บันทึกด้วยสถานะไม่สำเร็จ (ไม่มี `refer_no`) เพื่อให้ IT Admin ตรวจสอบ/Manual Fix (แนวทางเดียวกับ CSMS-001/002/003)
4. **Given** batch ล้มเหลวระดับรอบหรือสร้างไฟล์ CSV ไม่สำเร็จภายในเวลาที่กำหนด, **When** ระบบตรวจพบ, **Then** ส่ง email แจ้งเตือนทีม IT Development และกลุ่มผู้ใช้งานทันที พร้อมรายละเอียดข้อผิดพลาด
5. **Given** batch ล้มเหลวหรือทำงานไม่สมบูรณ์, **When** IT Admin เข้าหน้า Admin Dashboard และระบุช่วง "วันที่", **Then** สามารถสั่งรัน Manual Batch ย้อนหลังได้ และระบบประมวลผล/ซ่อมข้อมูลของวันนั้นใหม่โดยไม่ส่งซ้ำรายการที่สำเร็จแล้ว

---

### Edge Cases

- ลูกค้าเกิดวันที่ **29 กุมภาพันธ์** (อธิกสุรทิน) — ในปีที่ไม่มี 29 ก.พ. ส่งวันที่ 28 ก.พ. → ดู FR-003a
- ลูกค้ารายเดียว (cardNo เดียว) มีหลายกรมธรรม์เข้าเงื่อนไขวันเกิดในรอบเดียว — ส่ง 1 ข้อความ (dedup ระดับลูกค้า) → ดู FR-008c
- กรมธรรม์มี `mobile1` และ `mobile2` ว่างทั้งคู่ → คัดออก/skip + บันทึกเพื่อ audit
- ไม่พบ record ของขวัญ (var2) หรือ ลิงก์ (var3) ใน `cf_catalog` ที่ active → ระบบควร skip รายการ/หยุดรอบ + แจ้งเตือน (ไม่ส่งข้อความที่ตัวแปรว่าง) → ดู FR-010a
- ไม่พบทั้ง template ใน `sms_message_schedule` และ `sms_category` → ถือเป็นความล้มเหลวระดับรอบ + email แจ้งเตือน
- Ocean Club App API ล่มทั้งระบบชั่วคราว → retry ≤3 ครั้งแบบเว้นช่วง แล้วหยุดรอบ + email (แนวทาง CSMS-001/002)
- วันเกิดลูกค้าตรงวันหยุดที่ batch ไม่ได้ scheduled → ซ่อมผ่าน Manual Fix
- ประมวลผลข้ามเที่ยงคืน/รอบ Manual ระบุวันย้อนหลัง → ใช้ "วันที่" ที่ระบุเป็นฐานเทียบวันเกิด ไม่ใช่วันที่กดรัน

## Requirements *(mandatory)*

### Functional Requirements

**การคัดเลือกกลุ่มเป้าหมาย**

- **FR-001**: ระบบ MUST รัน batch อัตโนมัติทุกวัน เวลา 09:00 น. เพื่อคัดกรองและประมวลผลการส่ง SMS อวยพรวันเกิด
- **FR-002**: ระบบ MUST ดึงข้อมูลจาก `public.ili_policy_master` (DWConsole) เพื่อหาลูกค้าที่ `birthdate` มี **วันและเดือน** ตรงกับวันประมวลผลปัจจุบัน (ไม่เทียบปีเกิด)
- **FR-003**: ระบบ MUST ส่งเฉพาะตั้งแต่วัน Go Live ของแคมเปญ (ปี ค.ศ. 2026 ขึ้นไป) และ MUST NOT ส่งย้อนหลังก่อนวัน Go Live
- **FR-003a**: กรณีลูกค้าเกิดวันที่ 29 กุมภาพันธ์ ในปีที่ไม่ใช่อธิกสุรทิน (ไม่มี 29 ก.พ.) ระบบ MUST ส่งในวันที่ **28 กุมภาพันธ์** ของปีนั้น (ในปีอธิกสุรทินส่งวันที่ 29 ก.พ. ตามปกติ)
- **FR-004**: ระบบ MUST คัดเฉพาะกรมธรรม์สถานะมีผลบังคับ (Inforce): ORD/PA ใช้ `policy_status = '1'`; IND/GOV ใช้ `policy_status` เป็น `'1'`, `'2'` หรือ `'3'`
- **FR-005**: ระบบ MUST เลือกเบอร์ส่งจากฟิลด์ที่ไม่ว่าง โดยใช้ logic `coalesce(nullif(trim(mobile1), ''), nullif(trim(mobile2), ''))` — หากทั้งสองช่องว่าง/NULL MUST คัดออก/skip รายการนั้น + บันทึกเพื่อ Manual Fix ภายหลัง (รอบทำงานต่อ)

**การคัดกรอง**

- **FR-006**: ระบบ MUST คัดออกกรมธรรม์ที่ติด Do Not Contact List (`public.ili_policy_remark`): ORD (`policy_type='0'`) ที่ `remark_code='1'`; IND (`'I'`)/GOV (`'G'`)/PA (`'P'`) ที่ `remark_code='4'`
- **FR-007**: ระบบ MUST คัดเฉพาะกรมธรรม์ช่องทางตัวแทน (ไม่ใช่ชำระเอง/Orphan) ตามเงื่อนไข: ORD → `title_desc <> 'ชำระเอง'`; IND/GOV/PA → `position_code <> '99'`; และทุกประเภท → `policy_org` อยู่ในช่วง `2070001–2079999` หรือ `5070001–5079999` (อ้างอิง `public.ili_policy_master`, `public.ili_agent_master`)

**การตรวจสถานะช่องทางดิจิทัล (2 ช่องทาง)**

- **FR-008**: ระบบ MUST map กรมธรรม์ (policy_no) เป็น `cardNo` (เลขบัตรประชาชน) ผ่าน Web Service (`cisappapi` ที่ `11.100.8.44`, operation `customerByPolicyNoNotWhereCustomerStatus`) — หาก `cardNo` หาไม่พบ MUST คัดออก/skip รายการนั้น + บันทึกเพื่อ Manual Fix (รอบทำงานต่อ)
- **FR-009**: ระบบ MUST ตรวจสถานะการสมัครทั้ง **LINE Ocean Connect** (`channels='LINE'`) และ **Ocean Club App** (`channels='APP'`) และ MUST ส่ง SMS เฉพาะเมื่อลูกค้ายังไม่ใช้งานทั้งสองช่องทาง ตามเกณฑ์:
  - `LINE=E02` **และ** `APP=E02` → ส่ง
  - `LINE=E00` + `isBlockLine=true` **และ** `APP=E02` → ส่ง
  - `LINE=E00` + `isBlockLine=false` **หรือ** `APP=E00` → คัดออก
- **FR-009a**: กรณีผลตอบกลับรายรายการผิดปกติ (เช่น `E13`/Exception หรือ `channel`/`isBlockLine` ค่าว่าง) ระบบ MUST skip รายการนั้น + บันทึกสถานะไม่สำเร็จ โดยไม่ retry รายรายการ และรอบ MUST ทำงานต่อ — ต่างจากกรณี API ล่มทั้งระบบ (ดู Assumptions) ที่ retry แล้วหยุดรอบ

**การกันส่งซ้ำ**

- **FR-008b**: ระบบ MUST กันส่ง SMS อวยพรซ้ำภายในวันเกิดปีเดียวกัน โดยตรวจประวัติที่ `CUSTOMER_BIRTHDAY` — หากพบว่าลูกค้ารายนั้นมี `sms_sent_date` ของปีปัจจุบัน `is not null` แล้ว MUST คัดออก การส่งซ้ำในรอบวันเกิดปีเดียวกันต้อง = 0
- **FR-008c**: การกันส่งซ้ำและการนับจำนวนข้อความ MUST ทำแบบ **รายลูกค้า (cardNo)** — ส่ง **1 ข้อความต่อลูกค้าต่อวันเกิดปีนั้น** แม้ลูกค้ามีหลายกรมธรรม์เข้าเงื่อนไขในรอบเดียวกัน (ระบบ MUST NOT ส่งหลายข้อความให้ลูกค้าคนเดียว) — แม้บันทึกใน `CUSTOMER_BIRTHDAY` จะอ้างกรมธรรม์ตัวแทน 1 ฉบับ การตัดสินส่ง/กันซ้ำใช้ระดับลูกค้า

**การสร้างข้อความและไฟล์**

- **FR-010**: ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตามรูปแบบชื่อ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` (department=`MKT`, SystemCode=`CSMS`, Category จาก `SMS_CATEGORY` code `'112'` = `MKTBirthday`)
- **FR-010a**: ระบบ MUST ดึงข้อความ template จาก `sms_message_schedule` (`sms_category_code='112'` และวันปัจจุบันอยู่ในช่วง `begin_date`–`end_date`); หากไม่พบ fallback ไปที่ `sms_category` — และ MUST แทนค่าตัวแปร: `$(var1)`=`fname`, `$(var2)`=มูลค่าของขวัญจาก `cf_catalog` (`config_type='REWARDS'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`), `$(var3)`=ลิงก์จาก `cf_catalog` (`config_type='LINE_LINK'`, `config_value1='CSMS_SBD_Birthday'`, active `'Y'`) — หากค่า config ใด ๆ ที่จำเป็นไม่พบ/ไม่ active ระบบ MUST NOT ส่งข้อความที่ตัวแปรว่าง แต่ให้ skip รายการ + บันทึก และแจ้งเตือน
- **FR-010b**: แต่ละแถวใน CSV MUST มีคอลัมน์ตามลำดับ: `mobile`, `var1`, `var2`, `var3`, `seq_no` (Running Number เริ่มจาก 1), `datetime` (`YYYY-MM-DD HH:MM`, ปี ค.ศ.)

**การส่งและบันทึกผล**

- **FR-011**: ระบบ MUST นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB) และรับผลตอบกลับที่มี `refer_no` และสถานะการส่งรายรายการ
- **FR-012**: ระบบ MUST บันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip ลง `CUSTOMER_BIRTHDAY` ครบทุก field (รวม `sms_sent_date`, `rewards`, `sms_message`, `credit_amount`, `refer_no`/สถานะ) และบันทึกภาพรวมการส่งลง `CSMS_LOG`

**การแจ้งเตือนและการซ่อมข้อมูล**

- **FR-013**: หาก batch ล้มเหลวระดับรอบ เกิด Exception หรือสร้างไฟล์ CSV ไม่สำเร็จภายในเวลาที่กำหนด ระบบ MUST ส่ง email แจ้งเตือนทีม IT Development และกลุ่มผู้ใช้งานทันที พร้อมรายละเอียดข้อผิดพลาด (ตามรูปแบบมาตรฐาน batch CSMS เดิม)
- **FR-014**: IT Admin MUST สามารถสั่งรัน Manual Batch ย้อนหลังโดยระบุช่วง "วันที่" ผ่าน Admin Dashboard กลางของ CSMS ได้ โดยระบบใช้วันที่ที่ระบุเป็นฐานเทียบวันเกิด และ MUST เป็นแบบ idempotent — ไม่ส่งซ้ำรายการที่เคยส่งสำเร็จแล้ว (ตรวจด้วยกลไก FR-008b)

### Key Entities

- **ลูกค้า (Customer)**: ระบุด้วย `cardNo` (map จากกรมธรรม์); มี `fname`, `lname`, `title_name`, `birthdate`/`birthday` (วันเกิด), เบอร์ `mobile1`/`mobile2` และสถานะการสมัคร LINE Ocean Connect + Ocean Club App — แหล่งอ้างอิง `public.ili_policy_master`
- **กรมธรรม์ (Policy)**: ระบุด้วย `policy_no`; มี `policy_type` (ORD/IND/GOV/PA หรือ code `'0'/'I'/'G'/'P'`), `policy_status` (Inforce), `title_desc`, `position_code`, `policy_org` — ใช้คัดกลุ่มช่องทางตัวแทน (`public.ili_policy_master`, `public.ili_agent_master`)
- **รายการห้ามติดต่อ (Do Not Contact)**: `remark_code` ใน `public.ili_policy_remark`; คัดออกตามประเภท (ORD='1', IND/GOV/PA='4')
- **สถานะช่องทางดิจิทัล (Digital Channel Status)**: ผลตรวจจากบริการภายนอก (`cisappapi`) ต่อ `cardNo` แยกช่องทาง `LINE`/`APP` → รหัส (E00/E02/E13) และ `isBlockLine`
- **ของขวัญ/ลิงก์แคมเปญ (Reward & Link Config)**: อ่านจาก `cf_catalog` — REWARDS (`CSMS_SBD_Birthday`) → มูลค่าของขวัญ (var2 เช่น "500 เหรียญ"); LINE_LINK (`CSMS_SBD_Birthday`) → ลิงก์ลงทะเบียน (var3) เฉพาะสถานะ active `'Y'`
- **แม่แบบข้อความ (SMS Message Template)**: ข้อความอวยพรวันเกิดพร้อมตัวแปร `$(var1)`–`$(var3)` — จาก `sms_message_schedule` (code `'112'`) fallback `sms_category`
- **ไฟล์นำส่ง (Interface File)**: ไฟล์ CSV UTF-8 ชื่อ `MKT_CSMS_MKTBirthday_[YYMMDDhhmmss].csv` ส่งเข้าช่องทางกลาง (ESB → SMS Gateway)
- **ประวัติภาพรวม (`CSMS_LOG`)**: บันทึกภาพรวมการส่งของระบบ — ฟิลด์หลัก: `ID`, `create_date`, `sms_category_name_abbr` (= `MKTBirthday`), `sms_message`
- **ประวัติรายกรมธรรม์แคมเปญวันเกิด (`CUSTOMER_BIRTHDAY`)**: บันทึกรายกรมธรรม์เพื่อกันส่งซ้ำ + audit — ฟิลด์หลัก: `id`, `policy_no`, `policy_type`, `title_name`, `fname`, `lname`, `birthday`, `mobile_no`, `rewards`, `sms_message`, `sms_sent_date` (คีย์กันส่งซ้ำ), `credit_amount`, `created_by`, `created_date`, `updated_by`, `updated_date` — **ต้องสร้างใหม่ (เฉพาะ batch นี้)**

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: batch ประมวลผลเสร็จภายใน 5 นาที สำหรับกลุ่มเป้าหมายสูงสุด 10,000 รายการต่อรอบ
- **SC-002**: 99% ของรายการที่คัดเลือกได้รับผลยืนยันการส่งพร้อม `refer_no` จาก SMS Gateway
- **SC-003**: ไม่มีการส่ง SMS อวยพรซ้ำสำหรับลูกค้าเดียวกัน (cardNo) ในวันเกิดปีเดียวกัน = 0 รายการ; ลูกค้าที่มีหลายกรมธรรม์เข้าเงื่อนไขได้รับ 1 ข้อความเท่านั้น
- **SC-004**: 100% ของรายการที่เข้าขั้นตอนส่ง/ถูก skip ถูกบันทึกใน `CUSTOMER_BIRTHDAY` ด้วยสถานะและ `refer_no` ที่ถูกต้อง และมีบันทึกภาพรวมใน `CSMS_LOG`
- **SC-005**: 100% ของ SMS ที่ส่งออกมีการแทนค่าตัวแปรครบ (ชื่อ/ของขวัญ/ลิงก์) — ไม่มีข้อความที่ตัวแปรว่างถูกส่งออก
- **SC-006**: ความล้มเหลวระดับรอบทุกกรณีมี email แจ้งเตือนถึงทีม IT และ User ภายใน 15 นาทีนับจากเวลาประมวลผลที่กำหนด
- **SC-007**: IT Admin ซ่อมข้อมูลรอบที่ล้มเหลวด้วย Manual Fix ให้กลุ่มที่ค้างได้รับ SMS ครบภายใน 1 ชั่วโมง โดยไม่เกิดการส่งซ้ำ
- **SC-008**: กลุ่มเป้าหมายถูกจำกัดถูกต้อง 100% — ไม่มีการส่งให้ลูกค้าที่ active LINE (ไม่บล็อก) หรือมี Ocean Club App แล้ว, กลุ่มห้ามติดต่อ, หรือกลุ่มนอกช่องทางตัวแทน

## Assumptions

- **สืบทอดข้อยุติจาก CSMS-001/002/003**: batch นี้อยู่ในโมดูล CSMS เดียวกัน จึงใช้ข้อยุติเดิมของ `specs/002`, `specs/003`, `specs/004` โดยอนุโลม ได้แก่ การบันทึกรายการไม่สำเร็จ/ถูก skip เพื่อ audit, retry บริการภายนอกระดับระบบ ≤3 ครั้งแล้วหยุดรอบ + email, email แจ้งเตือนครอบคลุมความล้มเหลวระดับรอบทุกขั้นตอน, เกณฑ์ timeout/SLA ใช้ค่ามาตรฐาน monitoring batch CSMS เดิม, Manual Fix ใช้หน้า Dashboard กลาง, และรายการไม่สำเร็จไม่ retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix)
- **ช่องทางที่ตรวจ (2 ช่องทาง)**: ตรวจ LINE Ocean Connect (`channels='LINE'`) และ Ocean Club App (`channels='APP'`) ผ่าน API `cisappapi` เดียวกัน โดยเรียกแยกช่องทาง — ไม่รวมช่องทาง `WEB` (BZB Web) ในการตัดสินใจ (ตามตารางเกณฑ์ต้นทางที่อ้างเฉพาะ LINE + APP)
- **รหัสหมวดหมู่ (category code)**: ใช้ `SMS_CATEGORY_CODE = '112'` = `MKTBirthday` ตามหัวข้อการสร้างไฟล์ (§4.1 ของเอกสารต้นทาง) — เอกสารต้นทาง §5 ที่ระบุ `'113'`/`MKTWelcomeNewCust` ถือเป็นข้อผิดพลาดคัดลอกจาก CSMS-001 และ **ไม่** นำมาใช้ (ดู learn note ข้อ 2)
- **ชื่อฟิลด์วันเกิด**: เอกสารต้นทางใช้ทั้ง `birthdate` (§3) และ `birthday` (§5) — ถือเป็นฟิลด์เดียวกัน (วันเกิดใน `public.ili_policy_master`)
- **`sms_sent_date` ความหมาย/ชนิด**: ประกาศเป็น `DATE` ในตาราง แต่ตัวอย่างเป็น timestamp — ใช้เป็นเครื่องหมายว่า "ส่งแล้วในวันเกิดปีนี้" โดยเทียบปีปัจจุบันเพื่อกันส่งซ้ำ (ปีถัดไปวันเกิดเดิมยังส่งได้)
- **ชื่อตารางกันส่งซ้ำ**: `CUSTOMER_BIRTHDAY` (เอกสาร §3.3 เขียน `CSMS-CUSTOMER_BIRTHDAY` ถือเป็นตารางเดียวกัน)
- **ประเภทกรมธรรม์ GOV**: อยู่ในขอบเขต (source §3 ระบุ GOV ในทุกขั้นคัดกรอง) แม้ตัวอย่างในตาราง `CUSTOMER_BIRTHDAY` จะยกเฉพาะ ORD/IND/PA เป็นตัวอย่าง — GOV MUST ถูกบันทึกด้วย
- **DWConsole พร้อมใช้**: ตาราง `public.ili_policy_master`, `public.ili_policy_remark`, `public.ili_agent_master` พร้อมใช้และเป็นข้อมูลล่าสุด ณ เวลาเริ่ม batch
- **Web Service `cisappapi` พร้อมใช้**: ที่ `11.100.8.44` พร้อมใช้และตอบสนองภายใน 5 วินาทีต่อคำขอ — หาก API ล่ม/ไม่ตอบสนองระดับระบบ ระบบ retry ≤3 ครั้งแบบเว้นช่วง หากยังไม่สำเร็จ MUST หยุดรอบ + email แจ้งเตือน (แนวทาง CSMS-001/002)
- **SMS Gateway พร้อมใช้**: Web Service ประมวลผลไฟล์ CSV ภายใน 30 วินาที — หากล้มเหลวชั่วคราวบันทึกรายการนั้นด้วยสถานะไม่สำเร็จและไม่ retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix)
- **มูลค่าของขวัญ/ลิงก์**: บริหารผ่าน `cf_catalog` (config เดียวต่อแคมเปญ active) โดยทีมการตลาด — batch อ่านค่าที่ active ณ เวลาประมวลผล ไม่คำนวณ/กำหนดเอง
- **Email แจ้งเตือน**: ส่งไปยัง distribution list ของทีม IT Development และกลุ่มผู้ใช้งานที่ตั้งค่าไว้; การส่ง email ไม่รับประกันผลแต่บันทึกความพยายาม
- **Manual Batch**: ทำได้เฉพาะ IT Admin ที่ได้รับสิทธิ์ผ่าน Admin Dashboard และมีการบันทึก audit ของการรัน Manual
- **การกันส่งซ้ำระดับลูกค้า**: ตัดสินด้วย `cardNo` (ดู Clarifications 2026-07-07 / FR-008c) — บันทึกใน `CUSTOMER_BIRTHDAY` อ้างกรมธรรม์ตัวแทน 1 ฉบับต่อลูกค้าต่อรอบ

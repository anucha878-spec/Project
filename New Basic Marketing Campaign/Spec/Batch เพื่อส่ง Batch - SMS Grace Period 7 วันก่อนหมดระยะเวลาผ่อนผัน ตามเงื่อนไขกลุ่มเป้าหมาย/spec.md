# Feature Specification: Batch ส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน" — โมดูล CSMS

**Feature Branch**: `004-gp7-sms-batch`

**Created**: 2026-07-07

**Status**: Draft

**Input**: User description: "SPEC_BATCH-CSMS-003_GracePeriod7Day.md กำหนดตาม template STANDARD_REQ_TEMPLATE"

**เอกสารอ้างอิง (Source Requirement)**:
- `SPEC_BATCH-CSMS-003_GracePeriod7Day.md` (Process Specification, UR20260070: Basic Campaign (MCMP), แก้ไขล่าสุด 19/05/2026 โดย อัครวัฒน์ วัฒธนพงษ์)
- Feature ที่เกี่ยวข้อง: `specs/002-batch-welcome-new-customer-line-sms` (CSMS-001), `specs/003-batch-welcome-new-customer-app-sms` (CSMS-002) — batch พี่น้องในโมดูล CSMS เดียวกัน ใช้ข้อยุติเรื่องการจัดการ error/log/Manual Fix ร่วมกันโดยอนุโลม

---

## ภาพรวม (Business Context)

Batch process จัดส่ง SMS "Grace Period 7 วันก่อนหมดระยะเวลาผ่อนผัน" เพื่อแจ้งเตือนลูกค้าที่กรมธรรม์มีผลบังคับ (Inforce) และเลยวันครบกำหนดชำระเบี้ยประกันภัย (Due Date) มาแล้ว แต่ยังอยู่ภายในระยะเวลาผ่อนผัน (Grace Period) โดยเหลืออีก 7 วันจะสิ้นสุดระยะเวลาผ่อนผัน — เพื่อกระตุ้นให้ลูกค้าชำระเบี้ยฯ ทันเวลาและคงความคุ้มครองอย่างต่อเนื่อง กลุ่มเป้าหมายจำกัดเฉพาะลูกค้าที่ **ยังไม่ได้ลงทะเบียน LINE Ocean Connect** ครอบคลุมกรมธรรม์ประเภทสามัญ (ORD), อุตสาหกรรม (IND) และอุบัติเหตุส่วนบุคคล (PA)

**ผู้เกี่ยวข้อง (Roles)**

| Role                                        | สิทธิ์                                  | ขอบเขต                                                                |
| ------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------- |
| `SYSTEM_BATCH` — ระบบ Batch (Scheduled Job) | ประมวลผลอัตโนมัติ                       | กรมธรรม์ทุกฉบับที่เข้าเงื่อนไข                                        |
| `IT_ADMIN` — ผู้ดูแลระบบ                    | Manual Trigger / Re-run เฉพาะ Batch Fix | เลือกวันที่ที่ต้องการซ่อมข้อมูล ผ่าน Admin Dashboard กลางของ CSMS     |

**ขอบเขต (Scope)**

ใน scope: คัดกรองกรมธรรม์ (ORD/IND/PA) สถานะ Inforce ที่เหลือ 7 วันก่อน `grace_end_date` → คัดกรอง Do Not Contact List → map กรมธรรม์เป็น cardNo → ตรวจสถานะ LINE Ocean Connect (คัดเฉพาะที่ยังไม่ลงทะเบียน) → กันส่งซ้ำในรอบ Due เดียวกัน → สร้างไฟล์ CSV → ส่ง SMS ผ่านช่องทางกลาง (ESB → SMS Gateway) → บันทึก Log → แจ้งเตือนเมื่อล้มเหลว → รองรับ Manual Fix

นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard (ใช้หน้า Manual Fix กลางของ CSMS ที่มีอยู่แล้ว เพียงเพิ่ม batch นี้เข้า list — แนวทางเดียวกับ CSMS-001/002), logic การคำนวณ credit เดิมของ CSMS, การเปลี่ยนแปลงต่อ batch CSMS-001/002

---

## Clarifications

### Session 2026-07-07

- Q: การนับ "7 วันก่อนหมดระยะเวลาผ่อนผัน" นับอย่างไร (calendar days / inclusive-exclusive)? → A: วันปฏิทิน (calendar days) แบบ `grace_end_date - current_date = 7` โดยไม่รวมวันปัจจุบัน — เทียบเป็นวันล้วน ไม่พิจารณาเวลาในวัน (การส่งเกิด ณ รอบ batch 10:00 น. เท่านั้น) สอดคล้องกับแนวทางนับวันแบบตรงวันของ CSMS-001/CSMS-002
- Q: เมื่อผลตรวจ LINE API รายรายการผิดปกติ (E13 / channel หรือ isBlockLine เป็นค่าว่าง / รหัสนอกเหนือ E02, E00) ระบบควรทำอย่างไร? → A: Skip รายการนั้น + บันทึกลง `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status='F'` โดยไม่ retry รายรายการและไม่หยุดทั้งรอบ ประมวลผลรายการถัดไปต่อจนจบ ให้ IT Admin ตรวจสอบ/Manual Fix ย้อนหลังได้ (แนวทางเดียวกับ CSMS-001/002; ต่างจากกรณี API ล่มทั้งระบบที่ retry ≤3 ครั้งแล้วหยุดรอบ + email)
- Q: ลูกค้ารายเดียว (เบอร์เดียวกัน) มีหลายกรมธรรม์เข้าเงื่อนไข 7 วันพร้อมกันในรอบเดียว ควรส่งกี่ข้อความ? → A: ส่ง **1 ข้อความต่อกรมธรรม์** — แต่ละกรมธรรม์ที่เข้าเงื่อนไขได้รับ SMS ของตัวเอง (เพราะข้อความอ้างอิง policy_no / due_date / grace_end_date รายกรมธรรม์ ลูกค้าต้องทราบทุกกรมธรรม์ที่ใกล้ขาดผ่อนผัน) กลไกกันส่งซ้ำใช้ key = `policy_no` + `due_date` (ไม่ dedup แบบรายลูกค้าเหมือน CSMS-001/002)
- Q: ใช้เบอร์ช่องไหนในการส่ง และจัดการอย่างไรเมื่อเบอร์ว่าง? → A: ใช้ `mobile1` เป็นหลัก หากว่างใช้ `mobile2`; หากว่างทั้งสองช่อง ให้ skip รายการนั้น + บันทึกลง `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status='F'` เพื่อให้ตรวจสอบ/Manual Fix ย้อนหลังได้ (เลือกบันทึก 'F' แทนการคัดออกเงียบ ๆ เพื่อ audit trail — ต่างจาก CSMS-001/002 ที่คัดออกเงียบ)
- Q: `cardNo` ที่ใช้เรียก LINE API ได้มาจากไหน และถ้าหาไม่พบทำอย่างไร? → A: map จากกรมธรรม์ (policy_no) ไปยัง `cardNo` ผ่านข้อมูลลูกค้า; หากหา `cardNo` ไม่พบ ให้ skip รายการนั้น + บันทึกลง `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status='F'` โดยไม่หยุดรอบ ให้ IT Admin ตรวจสอบ/Manual Fix ย้อนหลังได้ (ถือเป็นสัญญาณข้อมูลผิดปกติ — แนวทางเดียวกับ CSMS-002)

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - ระบบคัดกรองและส่ง SMS แจ้งเตือน 7 วันก่อนหมดผ่อนผันอัตโนมัติรายวัน (Priority: P1)

ในฐานะระบบ (`SYSTEM_BATCH`) ต้องการค้นหากรมธรรม์สถานะ Inforce ที่เหลืออีก 7 วันจะสิ้นสุดระยะเวลาผ่อนผัน (`grace_end_date - current_date = 7` วันปฏิทิน) และลูกค้ายังไม่ได้ลงทะเบียน LINE Ocean Connect แล้วส่ง SMS แจ้งเตือนโดยอัตโนมัติทุกวันเวลา 10:00 น. เพื่อกระตุ้นการชำระเบี้ยฯ ก่อนขาดความคุ้มครอง

**Why this priority**: เป็นแก่นของ feature — หากไม่มีการคัดกรองและส่ง SMS อัตโนมัติ feature นี้ไม่มีคุณค่าทางธุรกิจ ส่วนอื่น (Manual Fix, แจ้งเตือน) เป็นส่วนเสริมของ flow หลักนี้

**Independent Test**: เตรียมกรมธรรม์ทดสอบสถานะ Inforce ที่ `grace_end_date` เท่ากับวันประมวลผล + 7 วัน แล้วรัน batch หนึ่งรอบ — ตรวจว่า SMS ถูกส่งไปยังเบอร์ที่ถูกต้องด้วยข้อความที่แทนค่าตัวแปรครบถ้วน และบันทึกประวัติครบ โดยไม่ต้องพึ่ง User Story อื่น

**ตัวอย่างข้อมูลจริง (Example Data)**:
- ข้อความ SMS = `เรียน ผู้เอาประกันภัย กรมธรรม์เลขที่ ${var1} ครบกำหนดชำระเบี้ยฯ วันที่ ${var2} จะหมดระยะเวลาผ่อนผันในวันที่ ${var3} เพื่อความคุ้มครองที่ต่อเนื่อง ขอเชิญชำระเบี้ยฯ ได้ที่ธนาคาร/เคาน์เตอร์เซอร์วิส หรือคลิกดูรายละเอียดเพิ่มเติม สอบถามโทร. 1503`
- policy_no = `3556782` (ORD), due_date = `12/04/2026`, grace_end_date = `26/05/2026`
- ชื่อไฟล์ CSV ตัวอย่าง = `MKT_CSMS_MKTGracePeriod7Days_690519100000.csv`

**Acceptance Scenarios**:

1. **Given** กรมธรรม์สถานะ Inforce ที่ `grace_end_date = 2026-05-26`, **When** batch รันวันที่ `2026-05-19` (เหลือ 7 วันปฏิทินพอดี ไม่รวมวันปัจจุบัน), **Then** กรมธรรม์นั้นถูกคัดเข้ากลุ่มเป้าหมาย
2. **Given** กรมธรรม์ที่ `grace_end_date - current_date ≠ 7` วัน, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออก
3. **Given** มีกรมธรรม์เข้าเงื่อนไข 7 วันหลายประเภท (ORD, IND, PA), **When** batch รัน, **Then** ทุกกรมธรรม์ที่เข้าเงื่อนไขถูกคัดเข้ากลุ่มเป้าหมาย
4. **Given** กรมธรรม์สถานะไม่ใช่ Inforce, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออกไม่ว่าค่า grace_end_date จะเป็นอย่างไร
5. **Given** ลูกค้ารายเดียว (เบอร์เดียวกัน) มีกรมธรรม์เข้าเงื่อนไข 2 ฉบับในรอบเดียวกัน, **When** batch รัน, **Then** ลูกค้าได้รับ SMS 2 ข้อความ (1 ข้อความต่อกรมธรรม์) เพราะข้อความอ้างอิงข้อมูลรายกรมธรรม์

---

### User Story 2 - คัดกรองกลุ่มห้ามติดต่อและลูกค้าที่ลงทะเบียน LINE แล้ว (Priority: P1)

ในฐานะระบบต้องการคัดลูกค้าที่อยู่ใน Do Not Contact List และลูกค้าที่ลงทะเบียน LINE Ocean Connect แล้วออกจากกลุ่มเป้าหมาย เพื่อเคารพความต้องการลูกค้าและหลีกเลี่ยงการแจ้งเตือนซ้ำข้ามช่องทาง

**Why this priority**: เป็นข้อกำหนดด้าน compliance ที่บังคับ — การส่งให้กลุ่มห้ามติดต่อละเมิดความต้องการลูกค้า ส่วนการส่งให้ลูกค้าที่ลงทะเบียน LINE แล้วสร้างการแจ้งเตือนซ้ำ

**Independent Test**: รัน batch บนชุดข้อมูลที่มีสถานะการติดต่อผสมกัน แล้วตรวจว่ากลไกคัดกรองทำงานถูกต้อง

**Acceptance Scenarios**:

1. **Given** กรมธรรม์ ORD ที่มี `remark_code = '1'` หรือกรมธรรม์ IND/PA ที่มี `remark_code = '4'`, **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออกจากกลุ่มเป้าหมาย
2. **Given** ระบบเรียก LINE Ocean Connect API ด้วย `channels = 'LINE'` สำหรับ cardNo หนึ่ง, **When** ประมวลผลผลตอบกลับ, **Then**:
   - ผลเป็น `E02` (ไม่พบข้อมูล) → คัดเข้ากลุ่มเป้าหมาย (ยังไม่ลงทะเบียน)
   - ผลเป็น `E00` และ `isBlockLine = false` → คัดออก (ลงทะเบียนแล้ว)
   - ผลผิดปกติอื่น ๆ (เช่น `E13`, หรือ `channel`/`isBlockLine` เป็นค่าว่าง) → skip + บันทึก `sms_sent_status = 'F'` ให้ตรวจสอบ/Manual Fix ภายหลัง ไม่ส่ง แต่รอบยังทำงานต่อ
3. **Given** กรมธรรม์ที่ไม่ติด Do Not Contact และยังไม่ลงทะเบียน LINE, **When** batch รัน, **Then** กรมธรรม์นั้นคงอยู่ในกลุ่มเป้าหมาย

---

### User Story 3 - สร้างไฟล์ CSV และนำส่ง SMS Gateway (Priority: P1)

ในฐานะระบบต้องการสร้างไฟล์ CSV จากข้อมูลที่คัดกรองแล้วพร้อมข้อความ SMS นำส่งผ่าน Web Service กลาง (ESB → SMS Gateway) และรับผลตอบกลับพร้อม `refer_no` เพื่อบันทึกประวัติ

**Why this priority**: เป็นจุด integration ที่ทำให้เกิดการส่ง SMS จริง — หากขาดขั้นนี้ ไม่มี SMS ถูกส่งออก

**Independent Test**: สร้างไฟล์ CSV จากข้อมูลตัวอย่างแล้วตรวจรูปแบบไฟล์และการนำส่งไปยัง SMS Gateway

**Acceptance Scenarios**:

1. **Given** กลุ่มกรมธรรม์ที่คัดกรองแล้ว, **When** batch ประมวลผล, **Then** สร้างไฟล์ CSV (UTF-8) ตามรูปแบบ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` เช่น `MKT_CSMS_MKTGracePeriod7Days_690519100000.csv`
2. **Given** ไฟล์ CSV ที่มีรายการลูกค้า, **When** ระบบนำส่ง SMS Gateway ผ่าน Web Service, **Then** ระบบได้รับผลตอบกลับที่มี `refer_no` และสถานะการส่งรายรายการ
3. **Given** ข้อความ SMS ที่มีตัวแปร template, **When** batch สร้าง CSV, **Then** ตัวแปรถูกแทนค่าด้วยข้อมูลจริง: `${var1}` = `policy_no`, `${var2}` = `due_date` (DD/MM/YYYY), `${var3}` = `grace_end_date` (DD/MM/YYYY)

---

### User Story 4 - บันทึกประวัติการส่งและจัดการข้อผิดพลาด (Priority: P1)

ในฐานะระบบต้องการบันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip ลง audit log พร้อมสถานะการส่ง เพื่อให้ติดตาม แก้ปัญหา และ Manual Fix ย้อนหลังได้ และแจ้งเตือนเมื่อ batch ล้มเหลว

**Why this priority**: audit trail จำเป็นต่อ compliance การบริการลูกค้า และการ monitor batch — ความล้มเหลวระดับรอบต้องแจ้งเตือนทันที

**Independent Test**: รัน batch แล้วตรวจว่าทุกรายการถูกบันทึกด้วยสถานะและ metadata ที่ถูกต้อง

**Acceptance Scenarios**:

1. **Given** SMS ส่งสำเร็จจาก Gateway, **When** ได้รับผลตอบกลับ, **Then** บันทึกลง `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status = 'S'` และ `refer_no` ที่ได้รับ
2. **Given** SMS ส่งไม่สำเร็จหรือถูก skip, **When** ประมวลผล, **Then** บันทึกด้วย `sms_sent_status = 'F'` (ไม่มี refer_no)
3. **Given** batch ล้มเหลวระดับรอบไม่ว่าขั้นตอนใด, **When** ระบบตรวจพบ, **Then** ส่ง email แจ้งเตือนทีม IT Development และกลุ่มผู้ใช้งานทันที พร้อมรายละเอียดข้อผิดพลาดและสรุป log
4. **Given** batch ล้มเหลวหรือทำงานไม่สมบูรณ์, **When** IT Admin เข้าหน้า Admin Dashboard, **Then** สามารถสั่งรัน Manual Batch ย้อนหลังสำหรับวันที่ที่ต้องการได้ และระบบประมวลผล/ซ่อมข้อมูลของวันนั้นใหม่โดยไม่ส่งซ้ำรายการที่สำเร็จแล้ว

---

### User Story 5 - ป้องกันการส่งซ้ำในรอบ Due เดียวกัน (Priority: P2)

ในฐานะระบบต้องการตรวจประวัติการส่งเพื่อไม่ให้ส่ง SMS แจ้งเตือนซ้ำสำหรับกรมธรรม์เดียวกันในรอบ Due ชำระเบี้ยฯ เดียวกัน

**Why this priority**: ลดความรำคาญของลูกค้าและค่าใช้จ่าย SMS — สำคัญแต่รองจากการคัดเลือกกลุ่มเป้าหมายให้ถูกต้อง

**Independent Test**: รัน batch ต่อเนื่องหลายวัน แล้วตรวจว่ากรมธรรม์เดิมไม่ถูกแจ้งเตือนซ้ำในรอบ Due เดียวกัน

**Acceptance Scenarios**:

1. **Given** กรมธรรม์ที่ถูกแจ้งเตือนไปแล้วในรอบ Due ปัจจุบัน (มีประวัติ `policy_no` + `due_date` ตรงกัน), **When** batch รัน, **Then** กรมธรรม์นั้นถูกคัดออกแม้จะเข้าเงื่อนไข 7 วัน
2. **Given** กรมธรรม์มีบันทึกการแจ้งเตือนของวันนี้ใน `SMS_GRACE_PERIOD_LOG`, **When** batch รันวันถัดไป, **Then** กรมธรรม์นั้นไม่ถูกเลือกซ้ำ (due_date เดียวกัน)

---

### Edge Cases

- กรมธรรม์ถูกปรับ `grace_end_date` (ยืด/ลดวัน) หลัง batch ส่งแจ้งเตือนไปแล้ว → ยึดผลตรวจ ณ เวลาประมวลผลของรอบนั้น
- LINE Ocean Connect API ล่มทั้งระบบชั่วคราว → retry สูงสุด 3 ครั้งแบบเว้นช่วง แล้วหยุดรอบ + ส่ง email แจ้งเตือน (แนวทาง CSMS-001 FR-008b — ดู Assumptions)
- สร้างไฟล์ CSV ไม่สำเร็จ (เช่น พื้นที่ดิสก์/สิทธิ์ไม่พอ) → ถือเป็นความล้มเหลวระดับรอบ ส่ง email แจ้งเตือน + Manual Fix
- SMS Gateway ตอบกลับ `refer_no` ผิดรูปแบบ → บันทึกรายการนั้นด้วย `sms_sent_status = 'F'` เพื่อ Manual Fix
- `grace_end_date` ตรงกับวันที่ batch ไม่ได้ scheduled (เช่น วันหยุด) → กลุ่มที่พลาดรอบซ่อมผ่าน Manual Fix
- กรมธรรม์มี `mobile1` และ `mobile2` ว่างทั้งคู่ → skip + บันทึก `sms_sent_status = 'F'` (ดู FR-004a)
- หา `cardNo` ของกรมธรรม์ไม่พบจากข้อมูลลูกค้า → skip + บันทึก `sms_sent_status = 'F'` (ดู FR-006a)

## Requirements *(mandatory)*

### Functional Requirements

**การคัดเลือกกลุ่มเป้าหมาย**

- **FR-001**: ระบบ MUST รัน batch อัตโนมัติทุกวัน เวลา 10:00 น. เพื่อคัดกรองและประมวลผลการแจ้งเตือน Grace Period
- **FR-002**: ระบบ MUST ดึงข้อมูลจาก `public.ili_policy_master` ร่วมกับ `public.ili_notification_letter` (DWConsole) เพื่อดึงข้อมูลกรมธรรม์และคำนวณ `grace_end_date`
- **FR-003**: ระบบ MUST คัดกรมธรรม์ที่ผลต่าง **วันปฏิทิน** ระหว่าง `grace_end_date` กับวันประมวลผลปัจจุบันเท่ากับจำนวนวันแจ้งเตือนที่ตั้งค่าไว้ คือ `grace_end_date - current_date = 7` (เทียบวันล้วน ไม่รวมวันปัจจุบัน ไม่พิจารณาเวลาในวัน) — ค่าจำนวนวันตั้งค่าได้จาก `cf_catalog` โดย `config_type = 'REMINDER_DAYS'` และ `config_value1 = 'CSMS_GP_7Days'`
- **FR-004**: ระบบ MUST คัดเฉพาะกรมธรรม์สถานะมีผลบังคับ (Inforce) เท่านั้น
- **FR-004a**: ระบบ MUST เลือกเบอร์ส่งโดยใช้ `mobile1` เป็นหลัก และ `mobile2` เป็นสำรองเมื่อ `mobile1` ว่าง — หาก `mobile1` และ `mobile2` ว่าง/NULL ทั้งคู่ MUST skip รายการนั้น + บันทึกลง `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status = 'F'` เพื่อ Manual Fix ภายหลัง (รอบทำงานต่อ)

**การคัดกรอง**

- **FR-005**: ระบบ MUST คัดออกกรมธรรม์ที่ติด Do Not Contact List: ORD ที่มี `ili_policy_remark.remark_code = '1'` และ IND/PA ที่มี `remark_code = '4'`
- **FR-006**: ระบบ MUST เรียก Web Service API (`cisappapi` ที่ `11.100.8.44`) เพื่อตรวจสถานะการลงทะเบียน LINE Ocean Connect ด้วยพารามิเตอร์ `channels = 'LINE'`
- **FR-006a**: ระบบ MUST map กรมธรรม์ (policy_no) เป็น `cardNo` จากข้อมูลลูกค้าก่อนเรียกตรวจ LINE — หาก `cardNo` หาไม่พบ MUST skip รายการนั้น + บันทึก `sms_sent_status = 'F'` เพื่อ Manual Fix (รอบทำงานต่อ) ถือเป็นสัญญาณข้อมูลผิดปกติ ไม่คัดออกเงียบ ๆ
- **FR-007**: ระบบ MUST คัดเข้าเฉพาะลูกค้าที่ผลตรวจ LINE เป็น `E02` (ไม่พบข้อมูล/ยังไม่ลงทะเบียน); คัดออกกรณี `E00` และ `isBlockLine = false` — ผลตอบกลับผิดปกติอื่น ๆ รายรายการ (เช่น `E13` หรือ `channel`/`isBlockLine` เป็นค่าว่าง) MUST skip + บันทึก `sms_sent_status = 'F'` (ไม่ retry รายรายการ รอบ MUST ทำงานต่อ) ให้ IT Admin ตรวจสอบ/Manual Fix — ต่างจากกรณี API ล่มทั้งระบบ (ดู Assumptions) ที่ retry แล้วหยุดรอบ

**การกันส่งซ้ำ**

- **FR-008**: ระบบ MUST ส่ง SMS **1 ข้อความต่อกรมธรรม์ที่เข้าเงื่อนไข** (ลูกค้าที่มีหลายกรมธรรม์เข้าเงื่อนไขได้รับหลายข้อความ เพราะข้อความอ้างอิงข้อมูลรายกรมธรรม์) และ MUST ตรวจตารางประวัติการส่งเพื่อกันส่งซ้ำด้วย key = `policy_no` + `due_date` — กรมธรรม์ที่เคยแจ้งเตือนในรอบ Due (`due_date`) เดียวกันแล้ว MUST ถูกคัดออก; ระบบ MUST NOT dedup แบบรายลูกค้า

**การสร้างข้อความและไฟล์**

- **FR-009**: ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตามรูปแบบชื่อ `[department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv`
- **FR-010**: ระบบ MUST ดึง template ข้อความ SMS (ประเภทข้อความ Grace Period 7 วัน) และแทนค่าตัวแปรให้ครบ: `${var1}` = `policy_no`, `${var2}` = `due_date`, `${var3}` = `grace_end_date`

**การส่งและบันทึกผล**

- **FR-011**: ระบบ MUST นำส่งไฟล์ CSV ไปยัง SMS Gateway ผ่าน Web Service (ESB) และรับผลตอบกลับที่มี `refer_no` และสถานะการส่งรายรายการ
- **FR-012**: ระบบ MUST บันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip ลง `SMS_GRACE_PERIOD_LOG` ครบทุก field รวมสถานะการส่ง (`S`/`F`) และ `refer_no`

**การแจ้งเตือนและการซ่อมข้อมูล**

- **FR-013**: หาก batch ล้มเหลวระดับรอบหรือทำงานไม่เสร็จตามเวลาที่กำหนด ระบบ MUST ส่ง email แจ้งเตือนทีม IT Development และกลุ่มผู้ใช้งาน พร้อมรายละเอียดข้อผิดพลาด (ตามรูปแบบมาตรฐาน batch CSMS เดิม — แนวทางเดียวกับ CSMS-001/002)
- **FR-014**: IT Admin MUST สามารถสั่งรัน Manual Batch ย้อนหลังสำหรับวันที่ที่ต้องการผ่าน Admin Dashboard กลางของ CSMS ได้ โดยระบบคำนวณและดึงข้อมูลของวันนั้นใหม่ และ MUST เป็นแบบ idempotent — ไม่ส่งซ้ำรายการที่เคยส่งสำเร็จแล้ว (ตรวจด้วยกลไก FR-008)

### Key Entities

- **กรมธรรม์ (Policy)**: ระบุด้วย `policy_no`; มี `policy_type` (ORD/IND/PA), สถานะ (Inforce), `due_date`/`next_paid_date`, `grace_end_date` — แหล่งอ้างอิง `public.ili_policy_master`, `public.ili_notification_letter` (DWConsole)
- **ลูกค้า (Customer)**: ระบุด้วย `cardNo` (map จากกรมธรรม์); มีเบอร์ `mobile1` (หลัก) และ `mobile2` (สำรอง) สำหรับส่ง SMS และสถานะการลงทะเบียน LINE Ocean Connect — เบอร์ที่ใช้ส่งจริงบันทึกเป็น `mobile_no` ใน log
- **รายการห้ามติดต่อ (Do Not Contact)**: เก็บเป็น `remark_code` ใน `public.ili_policy_remark`; คัดออกตามประเภทกรมธรรม์ (ORD='1', IND/PA='4')
- **สถานะการลงทะเบียน LINE (Registration Status)**: ผลตรวจจากบริการภายนอก (`cisappapi`) ต่อ `cardNo` ด้วย `channels='LINE'` → รหัส (E02/E00/E13) และ `isBlockLine`
- **แม่แบบข้อความ (SMS Message Template)**: รูปแบบข้อความ Grace Period 7 วัน พร้อมตัวแปร `${var1}`–`${var3}`
- **ไฟล์นำส่ง (Interface File)**: ไฟล์ CSV UTF-8 ตามรูปแบบชื่อมาตรฐาน ส่งเข้าช่องทางกลาง (ESB → SMS Gateway)
- **ประวัติการส่ง (`SMS_GRACE_PERIOD_LOG`)**: บันทึกรายกรมธรรม์เพื่อกันส่งซ้ำ + audit — ฟิลด์หลัก: `id`, `policy_no`, `policy_type`, `mobile_no`, `sms_message`, `due_date`, `grace_end_date`, `reminder_days`, `sms_sent_status` ('S'=สำเร็จ, 'F'=ไม่สำเร็จ/ถูก skip), `refer_no`, `created_by`, `created_date` — **ต้องสร้างใหม่ (เฉพาะ batch นี้)**

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: batch ประมวลผลเสร็จภายใน 5 นาที สำหรับกรมธรรม์สูงสุด 10,000 รายการต่อรอบ
- **SC-002**: 99% ของกรมธรรม์ที่คัดเลือกได้รับผลยืนยันการส่งพร้อม `refer_no` จาก SMS Gateway
- **SC-003**: ไม่มีการส่ง SMS ซ้ำสำหรับกรมธรรม์เดียวกันในรอบ Due เดียวกัน (key `policy_no` + `due_date`) = 0 รายการ; ลูกค้าที่มีหลายกรมธรรม์เข้าเงื่อนไขได้รับ 1 ข้อความต่อกรมธรรม์ถูกต้อง
- **SC-004**: 100% ของรายการที่เข้าขั้นตอนส่ง/ถูก skip ถูกบันทึกใน `SMS_GRACE_PERIOD_LOG` ด้วย `sms_sent_status` และ `refer_no` ที่ถูกต้อง
- **SC-005**: ความล้มเหลวระดับรอบทุกกรณีมี email แจ้งเตือนถึงทีม IT และ User ภายใน 15 นาทีนับจากเวลาประมวลผลที่กำหนด
- **SC-006**: IT Admin ซ่อมข้อมูลรอบที่ล้มเหลวด้วย Manual Fix ให้กลุ่มที่ค้างได้รับ SMS ครบภายใน 1 ชั่วโมง โดยไม่เกิดการส่งซ้ำ
- **SC-007**: ความต้องการด้านการติดต่อของลูกค้า (do-not-contact, ลงทะเบียน LINE แล้ว) ได้รับการเคารพ 100% — ไม่มีการส่งผิดกลุ่ม

## Assumptions

- **สืบทอดข้อยุติจาก CSMS-001/002**: batch นี้อยู่ในโมดูล CSMS เดียวกัน จึงใช้ข้อยุติเดิมของ `specs/002` และ `specs/003` โดยอนุโลม ได้แก่ การบันทึกรายการไม่สำเร็จ/ถูก skip ด้วย `sms_sent_status='F'`, retry บริการภายนอก ≤3 ครั้ง, email แจ้งเตือนครอบคลุมความล้มเหลวระดับรอบทุกขั้นตอนโดยระบุขั้นตอน, เกณฑ์ timeout/SLA ใช้ค่ามาตรฐาน monitoring batch CSMS เดิม, Manual Fix ใช้หน้า Dashboard กลาง, และรายการ 'F' ไม่ retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix เท่านั้น)
- **DWConsole พร้อมใช้**: ตาราง `public.ili_policy_master`, `public.ili_notification_letter`, `public.ili_policy_remark` พร้อมใช้และเป็นข้อมูลล่าสุด ณ เวลาเริ่ม batch
- **LINE Ocean Connect API**: Web Service ที่ `11.100.8.44` (`cisappapi`) พร้อมใช้และตอบสนองภายใน 5 วินาทีต่อคำขอ — หาก API ล่ม/ไม่ตอบสนอง ระบบ retry สูงสุด 3 ครั้งแบบเว้นช่วง หากยังไม่สำเร็จ MUST หยุดรอบนั้น + ส่ง email แจ้งเตือนทีม IT และ User (แนวทาง CSMS-001 FR-008b)
- **SMS Gateway พร้อมใช้**: Web Service ประมวลผลไฟล์ CSV ภายใน 30 วินาที — หากล้มเหลวชั่วคราว (timeout, 5xx) บันทึกรายการนั้นด้วย `sms_sent_status='F'` และไม่ retry อัตโนมัติในรอบ daily (ซ่อมผ่าน Manual Fix เท่านั้น — แนวทาง CSMS-001/002)
- **แม่แบบข้อความ**: template ข้อความ Grace Period 7 วัน มีอยู่แล้วในระบบจัดการข้อความ และไม่เปลี่ยนแปลงระหว่างประมวลผล
- **ค่า config จำนวนวัน**: ค่าจำนวนวันแจ้งเตือน (7) ตั้งค่าได้จาก `cf_catalog`; หากไม่พบให้ default เป็น 7 วัน
- **Manual Batch**: การรัน Manual ทำได้เฉพาะ IT Admin ที่ได้รับสิทธิ์ผ่าน Admin Dashboard และมีการบันทึก audit ของการรัน Manual
- **Email แจ้งเตือน**: ส่งไปยัง distribution list ของทีม IT Development และกลุ่มผู้ใช้งานที่ตั้งค่าไว้; การส่ง email ไม่รับประกันผลแต่บันทึกความพยายาม
- **นิยามรอบ Due (billing cycle)**: "รอบ Due เดียวกัน" ตัดสินด้วยค่า `due_date` ที่ตรงกัน; กรมธรรม์ที่มี `due_date` ต่างกันถือเป็นคนละรอบแม้เป็นลูกค้าคนเดียวกัน

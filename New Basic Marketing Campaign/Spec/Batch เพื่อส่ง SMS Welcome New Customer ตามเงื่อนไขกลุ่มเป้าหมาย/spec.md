# Feature Specification: Batch ส่ง SMS "Welcome New Customer (LINE)" — โมดูล CSMS

**Feature Branch**: `002-batch-welcome-new-customer-line-sms`

**Created**: 2026-07-07

**Status**: Draft

**Input**: User description: "นำ Requirement จากไฟล์ SPEC_BATCH-CSMS-001_Welcome-New-Customer-LINE.md มาจัดทำ Feature Specification ภาษาไทย สำหรับ Batch \"Welcome New Customer (LINE)\" โมดูล CSMS ระบบ Ocean Life Web Portal"

**เอกสารอ้างอิง (Source Requirement)**: `SPEC_BATCH-CSMS-001_Welcome-New-Customer-LINE.md` v1.5 (Pre-Check 18/18 ✅, Open Issues Q-001–Q-007 ปิดครบทุกข้อ 07/07/2569) — ที่มาจาก wiki pageId=1337491540, 1337491572

---

## ภาพรวม (Business Context)

Batch process จัดส่ง SMS "Welcome New Customer" เพื่อต้อนรับลูกค้าใหม่ที่ซื้อกรมธรรม์ตั้งแต่ปี 2026 เป็นต้นไป ที่ได้รับการอนุมัติรับประกัน (Inforce) เรียบร้อยแล้ว และยังไม่ลงทะเบียน Line Ocean Connect เพื่อสร้างความประทับใจแรก ยืนยันความคุ้มครอง และเชิญชวนให้ลูกค้าลงทะเบียน Line Ocean Connect ครอบคลุมกรมธรรม์ประเภทสามัญ (ORD), อุตสาหกรรม (IND) และอุบัติเหตุส่วนบุคคล (PA)

**ผู้เกี่ยวข้อง (Roles)**

| Role                                        | สิทธิ์                                  | ขอบเขต                                                                |
| ------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------- |
| `SYSTEM_BATCH` — ระบบ Batch (Scheduled Job) | ประมวลผลอัตโนมัติ                       | ลูกค้าทุกรายที่เข้าเงื่อนไข                                           |
| `IT_ADMIN` — ผู้ดูแลระบบ                    | Manual Trigger / Re-run เฉพาะ Batch Fix | เลือกช่วงวันที่ที่ต้องการซ่อมข้อมูล ผ่าน Admin Dashboard กลางของ CSMS |

**ขอบเขต (Scope)**

ใน scope: ดึงข้อมูลกรมธรรม์ใหม่ (ORD/IND/PA) ที่ออกกรมธรรม์เมื่อวาน (T-1) สถานะ Inforce → คัดกรอง Do Not Contact List → ตรวจสถานะ Line Ocean Connect / Ocean Club → ตัดรายการซ้ำ → สร้างไฟล์ CSV → ส่ง SMS ผ่านช่องทางกลาง (ESB → SMS Gateway) → บันทึก Log → แจ้งเตือนเมื่อล้มเหลว → รองรับ Manual Fix

นอก scope: การออกแบบ UI/Field ใหม่ของ Admin Dashboard (ใช้หน้า Manual Fix กลางของ CSMS ที่มีอยู่แล้ว เพียงเพิ่ม batch นี้เข้า list — Q-004 Closed), รายละเอียด logic การคำนวณ credit_amount (ใช้ logic เดิมของ CSMS — Q-005 Closed)

---

## Clarifications

### Session 2026-07-07

- Q: "ช่วงวันที่ซ่อมข้อมูล" ที่ IT Admin เลือกบนหน้า Manual Fix หมายถึงวันที่แบบใด? → A: วันที่รอบ batch — วันที่ที่เลือกคือวันประมวลผลของรอบ batch ที่ล้มเหลว ระบบดึงกรมธรรม์ issue_date = T-1 ของแต่ละวันในช่วงที่เลือก
- Q: เมื่อผลตอบกลับจากบริการตรวจสอบสถานะ LINE/Ocean Club อยู่นอกเหนือ 3 เงื่อนไขที่ระบุ (เช่น channel=null, isBlockLine=null) ระบบควรทำอย่างไร? → A: Skip รายการนั้น + บันทึก log แยกไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง (แนวทางเดียวกับกรณี E13)
- Q: หากวันประมวลผลไม่มีลิงก์แคมเปญที่ active เลย (หมดอายุหรือ active_flag ≠ 'Y') ระบบควรทำอย่างไร? → A: หยุดส่งรอบนั้นทั้งรอบ + ส่ง email แจ้งเตือนทีม IT/User เหมือนกรณี batch ล้มเหลว — แก้ config แล้ว Manual Fix ย้อนหลัง
- Q: หาก card_no จากใบสมัครไม่พบข้อมูลชื่อ-นามสกุลในแหล่งข้อมูลลูกค้า ระบบควรทำอย่างไร? → A: Skip รายการนั้น + บันทึก log ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง (ไม่ส่งข้อความที่ไม่มีชื่อลูกค้า)
- Q: รายการที่ส่งไม่สำเร็จหรือถูก skip ควรถูกบันทึกลง `WELCOME_NEW_CUST_LINE` อย่างไร? → A: บันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip — รายการไม่สำเร็จบันทึก sms_sent_date = NULL และเพิ่มฟิลด์ `sent_status` ('F' = ไม่สำเร็จ/ถูก skip) ในตาราง `WELCOME_NEW_CUST_LINE` เพื่อให้รายงาน reconcile ได้ครบ, Manual Fix หารายการค้างจากตารางเดียว และไม่ขัดกลไกกันส่งซ้ำ (เช็คเฉพาะ sms_sent_date NOT NULL)
- Q: เมื่อเรียก Line Connect API ไม่ได้เลย (service down / timeout / HTTP 5xx ทั้งระบบ) ระบบควรทำอย่างไร? → A: Retry จำนวนจำกัด (สูงสุด 3 ครั้ง เว้นช่วง) ถ้ายังไม่ได้ → หยุดรอบนั้น + ส่ง email แจ้งเตือนทีม IT/User เหมือนกรณี batch ล้มเหลว → ซ่อมผ่าน Manual Fix
- Q: รายการที่ sent_status='F' (ส่งไม่สำเร็จ/ถูก skip) จะถูกนำกลับมาส่งใหม่ผ่านช่องทางใด? → A: รายการ 'F' ถือเป็นที่สิ้นสุดในรอบนั้น (บันทึกไว้เพื่อรายงาน/audit) — รอบ daily ไม่ retry อัตโนมัติ การส่งซ้ำทำผ่าน Manual Fix เท่านั้น (หยิบรายการที่ sms_sent_date IS NULL ในช่วงวันที่ที่เลือก)
- Q: Email แจ้งเตือนทีม IT/User ควรครอบคลุมความล้มเหลวขั้นตอนใดบ้าง? → A: ทุกความล้มเหลวระดับรอบ (round-level) — generate ไฟล์ไม่ได้, เรียก ESB/SMS Gateway ไม่ได้, ดึงข้อมูล/DB error, Line Connect API down, ไม่มีลิงก์แคมเปญ active — ใช้ email รูปแบบเดียวกันโดยระบุขั้นตอนที่ล้มเหลว
- Q: "ตามเวลาที่กำหนด" สำหรับการตัดสินว่า batch ล้มเหลว (เพื่อส่ง email แจ้งเตือน) คือเวลาใด? → A: ใช้เกณฑ์ timeout/SLA มาตรฐานของระบบ monitoring batch CSMS เดิม (ค่าจริงอ้างอิงจาก config ของระบบเดิมในขั้น plan)
- Q: หากรอบประมวลผลจบสำเร็จ แต่มีสัดส่วนรายการ sent_status='F' สูงผิดปกติ (เช่น E13 เกือบทั้งรอบ) ควรแจ้งเตือนหรือไม่? → A: ไม่ต้องแจ้งเตือนเพิ่ม — ติดตามผ่านรายงานประจำวัน (FR-021) เพียงพอ; ไม่เพิ่มกลไก threshold alert ใน scope นี้

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - ระบบส่ง SMS ต้อนรับลูกค้าใหม่อัตโนมัติรายวัน (Priority: P1)

ในฐานะระบบ (`SYSTEM_BATCH`) ต้องการค้นหาลูกค้าที่กรมธรรม์เพิ่งได้รับการอนุมัติ (Inforce) เมื่อวาน และยังไม่ลงทะเบียน Line Ocean Connect แล้วส่ง SMS ต้อนรับพร้อมลิงก์ลงทะเบียนโดยอัตโนมัติทุกวันเวลา 10:00 น. เพื่อให้ลูกค้าได้รับการยืนยันความคุ้มครองและถูกชักชวนให้ลงทะเบียน Line Ocean Connect ตั้งแต่ต้น

**Why this priority**: เป็นแก่นของ feature ทั้งหมด — หากไม่มีการคัดกรองและส่ง SMS อัตโนมัติ feature นี้ไม่มีคุณค่าทางธุรกิจ ส่วนอื่น (Manual Fix, รายงาน) เป็นส่วนเสริมของ flow หลักนี้

**Independent Test**: เตรียมข้อมูลกรมธรรม์ทดสอบที่ issue_date = เมื่อวาน สถานะ Inforce แล้วรัน batch หนึ่งรอบ — ตรวจว่า SMS ถูกส่งไปยังเบอร์ที่ถูกต้องด้วยข้อความที่ถูกต้อง และมีการบันทึกประวัติครบถ้วน โดยไม่ต้องพึ่ง User Story อื่น

**ตัวอย่างข้อมูลจริง (Example Data)**:

- ข้อความ SMS = `เรียน คุณสมชาย OCEAN LIFE ไทยสมุทร ให้ความคุ้มครองท่านแล้ว ดูรายละเอียดกรมธรรม์ผ่าน LINE OCEAN CONNECT คลิก https://lin.ee/xd7mW2g สอบถามโทร.1503`
- เบอร์ปลายทาง = `0845012341`, ชื่อ = `สมชาย`, policy_no = `2445901` (ORD)
- sms_category = `CSMS_SNC_NewCust` (sms_category_code = `113`, sms_category_name = `MKTWelcomeNewCust`)
- ชื่อไฟล์ CSV ตัวอย่าง = `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv`

**Acceptance Scenarios**:

1. **Given** กรมธรรม์เลขที่ `2445901` ประเภท ORD, issue_date = `2026-05-13` (เมื่อวาน), สถานะ Inforce, มีเบอร์โทร `0845012341`, ไม่อยู่ใน Do Not Contact List, ยังไม่ลงทะเบียน Line Ocean Connect (code="E02", channel="LINE") และไม่มี Ocean Club (code="E02", channel="APP"), **When** Batch รันเวลา 10:00 น. ของวันที่ `2026-05-14`, **Then** ระบบส่ง SMS ข้อความต้อนรับพร้อมลิงก์ `https://lin.ee/xd7mW2g` ไปยัง `0845012341` สำเร็จ และบันทึกลง `CSMS_LOG` และ `WELCOME_NEW_CUST_LINE` โดย `sms_sent_date = 2026-05-14 10:00:05`
2. **Given** กรมธรรม์เข้าเงื่อนไขทุกข้อ แต่ลูกค้าอยู่ใน Do Not Contact List (ORD → remark_code='1'), **When** Batch รัน, **Then** รายการนั้นถูกตัดออกจากกลุ่มเป้าหมาย และไม่มีการส่ง SMS ไปยังลูกค้ารายนั้น
3. **Given** ลูกค้าลงทะเบียน Line Ocean Connect แล้ว (พบ LINE และไม่บล็อก) หรือมี Ocean Club แล้ว, **When** Batch รัน, **Then** ลูกค้ารายนั้นไม่ได้รับ SMS (ALT-001)
4. **Given** ลูกค้าไม่มี Ocean Club และบล็อก LINE อยู่, **When** Batch รัน, **Then** ลูกค้ารายนั้น**ได้รับ** SMS (เข้าเงื่อนไขที่ 2 ของ BR-003)
5. **Given** ลูกค้ารายเดียวกัน (ชื่อ-นามสกุล-เบอร์โทรตรงกัน) มีกรมธรรม์เข้าเงื่อนไข 2 ฉบับในรอบประมวลผลเดียวกัน, **When** Batch รัน, **Then** ลูกค้าได้รับ SMS เพียง 1 ข้อความ โดยอ้างอิงกรมธรรม์ฉบับที่ issue_date เก่าที่สุด (MIN(issue_date))
6. **Given** ลูกค้าเคยได้รับ SMS นี้แล้วในรอบก่อนหน้า (พบประวัติ policy_no + policy_type + fname + lname ตรงกัน และ sms_sent_date ไม่ว่าง), **When** Batch รันรอบถัดไป, **Then** ลูกค้ารายนั้นถูกตัดออก ไม่ได้รับ SMS ซ้ำ (ALT-002)
7. **Given** บริการตรวจสอบสถานะ LINE ตอบกลับ `code = "E13"` (Generic Error) สำหรับลูกค้ารายหนึ่ง, **When** Batch ประมวลผล, **Then** ระบบข้าม (skip) รายการนั้นทันที บันทึก log รายการที่ skip ไว้เพื่อ Manual Fix ภายหลัง และประมวลผลรายการถัดไปต่อจนจบ (ALT-004, Q-003 Closed)
8. **Given** กรมธรรม์ issue_date = เมื่อวาน แต่เป็นกรมธรรม์ที่ออกก่อนปี 2026, **When** Batch รัน, **Then** รายการนั้นไม่ถูกดึงเข้ากลุ่มเป้าหมาย (ไม่ส่งย้อนหลังก่อน UR Go-live)

---

### User Story 2 - IT Admin ซ่อมข้อมูล Batch ที่รันไม่สำเร็จ (Manual Fix) (Priority: P2)

ในฐานะ IT Admin ต้องการเลือกช่วงวันที่ที่ต้องการซ่อมข้อมูลผ่านหน้า Manual Fix ของ Admin Dashboard กลาง CSMS แล้วสั่งรัน Batch ใหม่ด้วยตนเอง เพื่อให้ลูกค้าที่ควรได้รับ SMS ในวันที่ Batch ล้มเหลวยังคงได้รับข้อความโดยไม่ตกหล่น

**Why this priority**: เป็นกลไก recovery ที่จำเป็นต่อการปฏิบัติงานจริง แต่ทำงานต่อยอดจาก flow หลักใน Story 1 — ระบบยังส่ง SMS ได้แม้ยังไม่มีส่วนนี้

**Independent Test**: จำลอง Batch ล้มเหลวของวันหนึ่ง แล้วให้ IT Admin เลือก batch `BATCH-CSMS-WELCOME-LINE` ระบุช่วงวันที่นั้นบนหน้า Manual Fix กลาง กด Manual Batch — ตรวจว่ารายการที่ตกหล่นถูกส่ง และรายการที่เคยส่งสำเร็จแล้วไม่ถูกส่งซ้ำ

**ตัวอย่างข้อมูลจริง (Example Data)**: ใช้หน้า Manual Fix ของ Admin Dashboard กลาง CSMS ที่มีอยู่แล้ว (Q-004 Closed) — เลือก batch = `BATCH-CSMS-WELCOME-LINE`, ช่วงวันที่ซ่อมข้อมูล = `2026-05-15` ถึง `2026-05-15` แล้วกด Manual Batch

**Acceptance Scenarios**:

1. **Given** Batch วันที่ `2026-05-15` ไม่สามารถ generate ไฟล์ได้ตามเวลาที่กำหนด และมีอีเมลแจ้งเตือนไปยังทีม IT และ User แล้ว, **When** IT Admin เข้าหน้า Admin Dashboard เลือกช่วงวันที่ `2026-05-15` แล้วกด Manual Batch, **Then** ระบบประมวลผลย้อนหลังเฉพาะช่วงวันที่ที่เลือก โดยไม่ส่งซ้ำรายการที่เคยส่งสำเร็จแล้ว (ตรวจสอบผ่าน `WELCOME_NEW_CUST_LINE.sms_sent_date`)
2. **Given** Batch ไม่สามารถ generate ไฟล์ CSV ได้ตามเวลาที่กำหนด, **When** ระบบตรวจพบความล้มเหลว, **Then** ระบบส่ง Email แจ้งเตือนทีม IT และ User ตามรูปแบบมาตรฐานของ batch CSMS เดิม โดยระบุชื่อ batch = `BATCH-CSMS-WELCOME-LINE` (Q-002 Closed)
3. **Given** IT Admin กรอกช่วงวันที่ไม่ถูกต้อง (เช่น วันที่เริ่มต้นเกินวันปัจจุบัน หรือวันที่สิ้นสุดน้อยกว่าวันที่เริ่มต้น), **When** กด Manual Batch, **Then** ระบบแสดง validation และข้อความมาตรฐานของ Admin Dashboard กลาง CSMS และไม่เริ่มประมวลผล
4. **Given** ช่วงวันที่ที่เลือกเคยรันสำเร็จแล้วบางส่วน, **When** IT Admin สั่ง Manual Batch ซ้ำ, **Then** ระบบประมวลผลแบบ idempotent — รายการที่มีประวัติส่งสำเร็จแล้ว (sms_sent_date ไม่ว่าง) ไม่ถูกส่งซ้ำ (EC-004)

---

### User Story 3 - รายงานสรุปผลการส่ง SMS ประจำวัน (Priority: P3)

ในฐานะผู้ใช้งานฝ่ายธุรกิจ/ผู้ดูแลระบบ ต้องการรายงาน "รายงานการส่ง SMS Welcome New Customer (LINE)" สรุปยอดการส่งต่อวัน เพื่อติดตามผลการดำเนินงานและตรวจสอบความครบถ้วนของการส่ง

**Why this priority**: ใช้เพื่อ monitoring/reconcile — ไม่กระทบการส่ง SMS โดยตรง จึงมาหลัง flow หลักและกลไก recovery

**Independent Test**: หลัง batch รันเสร็จอย่างน้อย 1 รอบ เรียกดูรายงานของวันนั้น — ตรวจว่ายอดรวมในรายงานตรงกับข้อมูลจริงในประวัติการส่ง (`WELCOME_NEW_CUST_LINE`)

**Acceptance Scenarios**:

1. **Given** Batch ประมวลผลเสร็จในวันหนึ่ง, **When** เรียกดูรายงานของวันนั้น, **Then** รายงานแสดง: จำนวนรายการที่ประมวลผลทั้งหมด, จำนวนที่ส่งสำเร็จ, จำนวนที่ไม่สำเร็จ และจำนวนที่ถูกตัดออกตามเหตุผล (Do Not Contact / ลงทะเบียนแล้ว / รายการซ้ำในรอบ / เคยส่งแล้ว) พร้อม breakdown ตาม policy_type (ORD/IND/PA) — (Q-006 Closed)

---

### Edge Cases

- **EC-001 — เบอร์โทรว่าง**: กรมธรรม์ที่ mobile_no เป็น NULL หรือว่าง ต้องไม่ถูกดึงเข้ากลุ่มเป้าหมายตั้งแต่ขั้นตอนคัดเลือก (ใช้เฉพาะรายการที่มีเบอร์โทรศัพท์ติดต่อ)
- **EC-002 — กรมธรรม์หลายฉบับ issue_date เดียวกัน**: ลูกค้ารายเดียวกันมีกรมธรรม์ 2 ฉบับ (คนละประเภท) ออกวันเดียวกัน → ส่งเพียง 1 ครั้งตามกฎ dedup; กรณี issue_date เท่ากันทั้งคู่ ให้เลือกแบบ deterministic (ดู Assumptions — เสนอเลือก policy_no ที่น้อยที่สุด)
- **EC-003 — ผลตรวจสถานะนอกเหนือ 3 เงื่อนไข**: บริการตรวจสอบสถานะตอบกลับรูปแบบอื่น (เช่น channel=null, isBlockLine=null สำหรับกลุ่ม APP/WEB) → **skip รายการนั้น + บันทึก log** ไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง — แนวทางเดียวกับกรณี E13 (Clarified 2026-07-07)
- **EC-004 — Manual Fix ซ้ำซ้อน (idempotent)**: สั่ง Manual Fix ช่วงวันที่ที่เคยรันสำเร็จบางส่วน → รายการที่ sms_sent_date ไม่ว่าง ต้องไม่ถูกส่งซ้ำ
- **EC-005 — ไม่พบข้อมูลชื่อลูกค้า**: card_no จากใบสมัครไม่พบข้อมูลตรงกันในแหล่งข้อมูลลูกค้า → ข้าม (skip) รายการนั้น + บันทึก log เพื่อ Manual Fix ภายหลัง แบบเดียวกับกรณี E13 — ไม่ส่งข้อความที่ไม่มีชื่อลูกค้า (Clarified 2026-07-07)
- **EC-007 — บริการตรวจสอบสถานะล่มทั้งระบบ**: เรียก Line Connect API ไม่ได้เลย (down/timeout/system error) → retry สูงสุด 3 ครั้งแบบเว้นช่วง แล้วหยุดรอบ + email แจ้งเตือน (FR-008b) — ไม่ใช้แนว skip รายรายการ เพราะจะกลายเป็น skip ทั้งรอบโดยไม่มีผู้รับผิดชอบรับรู้ (Clarified 2026-07-07)
- **EC-006 — ลิงก์แคมเปญหมดอายุ**: ไม่มีลิงก์แคมเปญที่ active ในวันที่ประมวลผล (expire_date ผ่านไปแล้ว หรือ active_flag ≠ 'Y') → ไม่ส่ง SMS รอบนั้นทั้งรอบ และส่ง email แจ้งเตือนทีม IT + User แบบเดียวกับกรณี Batch ล้มเหลว (FR-018) — แก้ config แล้วซ่อมย้อนหลังผ่าน Manual Fix (Clarified 2026-07-07)

## Requirements *(mandatory)*

### Functional Requirements

**การคัดเลือกกลุ่มเป้าหมาย (Data Selection)**

- **FR-001**: ระบบ MUST รัน Batch อัตโนมัติทุกวัน เวลา 10:00 น. (Daily Scheduler) *(BR-001)*
- **FR-002**: ระบบ MUST ดึงกรมธรรม์ประเภท ORD, IND และ PA ที่ issue_date = T-1 (ย้อนหลัง 1 วันเทียบวันประมวลผล) และมีสถานะ Inforce เท่านั้น *(BR-001, PRE-001, PRE-002)*
- **FR-003**: ระบบ MUST ดึงเฉพาะกรมธรรม์ที่ออกตั้งแต่ปี 2026 เป็นต้นไป — ไม่ส่งย้อนหลังก่อนวันที่ UR Go-live *(BR-001, A-006)*
- **FR-004**: ระบบ MUST ดึงเฉพาะรายการที่มีเบอร์โทรศัพท์ติดต่อ — รายการที่ mobile_no เป็น NULL หรือว่างต้องไม่เข้ากลุ่มเป้าหมาย *(EC-001)*

**การคัดกรอง (Exclusion & Eligibility)**

- **FR-005**: ระบบ MUST ตัดรายการที่อยู่ใน Do Not Contact List ออกจากกลุ่มเป้าหมาย โดย ORD ตรวจด้วย remark_code='1' และ IND/PA ตรวจด้วย remark_code='4' และ MUST map รหัสประเภทกรมธรรม์ต้นทาง → ปลายทางก่อนตรวจ: **ORD='O', IND IN ('I','G'), PA='P'** *(BR-002, Q-001 Closed)*
- **FR-006**: ระบบ MUST ตรวจสอบสถานะการลงทะเบียน Line Ocean Connect และ Ocean Club ของลูกค้าแต่ละราย (ผ่านบริการ Line Connect Inquiry) และตัดสิน eligibility ตาม 3 เงื่อนไข: (1) ไม่พบทั้ง LINE และ Ocean Club → ส่ง SMS, (2) ไม่มี Ocean Club และบล็อก LINE → ส่ง SMS, (3) พบ LINE (ไม่บล็อก) หรือพบ Ocean Club → ไม่ส่ง *(BR-003)*
- **FR-007**: เมื่อบริการตรวจสอบสถานะตอบกลับ `code = "E02"` (Customer not found) ระบบ MUST ใช้เป็นเงื่อนไขภายในสำหรับตัดสิน eligibility ตาม FR-006 โดยไม่แสดงข้อความต่อผู้ใช้ *(MSG-002)*
- **FR-008**: เมื่อบริการตรวจสอบสถานะตอบกลับ `code = "E13"` (Generic Error) ระบบ MUST ข้าม (skip) รายการนั้นทันทีโดยไม่ retry และไม่หยุดทั้งรอบ, MUST บันทึก log รายการที่ skip เพื่อให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง และ MUST ประมวลผลรายการถัดไปต่อจนจบ *(MSG-003, ALT-004, Q-003 Closed)*
- **FR-008a**: เมื่อผลตอบกลับจากบริการตรวจสอบสถานะอยู่นอกเหนือ 3 เงื่อนไขของ FR-006 (เช่น channel=null, isBlockLine=null) ระบบ MUST ปฏิบัติแบบเดียวกับ FR-008 — skip รายการนั้น + บันทึก log แยกไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง โดยไม่หยุดรอบประมวลผล *(EC-003, Clarified 2026-07-07)*
- **FR-008b**: เมื่อ**เรียกบริการตรวจสอบสถานะไม่ได้เลย** (service down / timeout / system error ทั้งระบบ — ต่างจาก E13 ซึ่งเป็นการตอบกลับรายรายการ) ระบบ MUST retry จำนวนจำกัด (สูงสุด 3 ครั้ง แบบเว้นช่วง) — หากยังไม่สำเร็จ MUST หยุดรอบประมวลผลนั้น และส่ง Email แจ้งเตือนทีม IT และ User ผ่านช่องทางเดียวกับ FR-018 จากนั้นซ่อมข้อมูลย้อนหลังผ่าน Manual Fix (FR-019/FR-020) *(Clarified 2026-07-07)*

**การตัดรายการซ้ำ (Deduplication)**

- **FR-009**: ภายในรอบประมวลผลเดียวกัน หากพบชื่อ-นามสกุล-เบอร์โทรซ้ำกันมากกว่า 1 รายการ ระบบ MUST จัดกลุ่มตาม (fname, lname, mobile_no) และส่งเพียง 1 Transaction ต่อลูกค้า โดยเลือกรายการที่ MIN(issue_date) *(BR-004)*
- **FR-010**: ก่อนส่งทุกครั้ง ระบบ MUST ตรวจประวัติใน `WELCOME_NEW_CUST_LINE` — หากพบ policy_no + policy_type + fname + lname ตรงกัน และ sms_sent_date ไม่ว่าง MUST ตัดรายการนั้นออก ไม่ส่งซ้ำ *(BR-005, PRE-004)*

**การสร้างข้อความและไฟล์ (Message & File)**

- **FR-011**: ระบบ MUST สร้างข้อความ SMS จาก template ตามลำดับ: ใช้ template จากตารางกำหนดการข้อความ (sms_message_schedule) ก่อน หากไม่พบให้ fallback ไปใช้ข้อความ default ของหมวด SMS (msg_text ของ SMS_CATEGORY) *(BR-006)*
- **FR-011a**: หาก card_no ของรายการใดไม่พบข้อมูลชื่อ-นามสกุลในแหล่งข้อมูลลูกค้า ระบบ MUST skip รายการนั้น + บันทึก log แยกไว้ให้ IT Admin ตรวจสอบ/Manual Fix ภายหลัง (แนวทางเดียวกับ FR-008) — MUST NOT ส่งข้อความที่ไม่มีชื่อลูกค้า *(EC-005, Clarified 2026-07-07)*
- **FR-012**: ระบบ MUST แทนค่าตัวแปรในข้อความ: `$(var1)` = ชื่อลูกค้า และ `$(var2)` = ลิงก์แคมเปญจาก config กลาง (config_type='LINE_LINK', config_value1='CSMS_SNC_NewCust') โดย MUST ตรวจช่วงเวลา begin_date/expire_date และ active_flag='Y' เพื่อให้ได้ลิงก์ของแคมเปญที่ active ณ วันประมวลผล *(BR-006)*
- **FR-012a**: หากไม่พบลิงก์แคมเปญที่ active ณ วันประมวลผล ระบบ MUST หยุดการส่งรอบนั้นทั้งรอบ (ไม่ส่ง SMS ที่ไม่มีลิงก์หรือลิงก์หมดอายุ) และ MUST ส่ง Email แจ้งเตือนทีม IT และ User ผ่านช่องทางเดียวกับ FR-018 — รายการที่ค้างให้ซ่อมย้อนหลังผ่าน Manual Fix (FR-019/FR-020) หลังแก้ config *(EC-006, Clarified 2026-07-07)*
- **FR-013**: ระบบ MUST สร้างไฟล์ Interface (CSV) encoding UTF-8 ตาม naming convention `[Department]_[SystemCode]_[Category]_[YYMMDDhhmmss].csv` โดย Department="MKT", SystemCode="CSMS", Category=ชื่อย่อหมวด SMS (sms_category_name_abbr) และวันที่เป็นปี พ.ศ. 2 หลัก — ไฟล์นี้จำเป็นต้องสร้างก่อนเรียกบริการส่ง *(BR-007, Q-007 Closed)*

**การส่งและบันทึกผล (Delivery & Logging)**

- **FR-014**: ระบบ MUST เรียก Web Service กลาง (ESB) เพื่อส่ง SMS ผ่าน SMS Gateway *(POST-001)*
- **FR-015**: ระบบ MUST บันทึกประวัติการส่งลง `CSMS_LOG` พร้อม refer_no และสถานะการส่งที่ได้รับกลับจาก Web Service *(POST-002)*
- **FR-016**: ระบบ MUST บันทึกลง `WELCOME_NEW_CUST_LINE` ครบทุก field: policy_no, policy_type, title_name, fname, lname, card_no, issue_date, sms_sent_date, mobile_no, sms_message, credit_amount, sent_status, created_by="SYSTEM_BATCH", created_date *(POST-003)*
- **FR-016a**: ระบบ MUST บันทึก**ทุกรายการที่เข้าขั้นตอนส่งหรือถูก skip** ลง `WELCOME_NEW_CUST_LINE` — รายการที่ส่งสำเร็จบันทึก sms_sent_date = เวลาที่ส่ง และ sent_status = 'S'; รายการที่ส่งไม่สำเร็จหรือถูก skip (FR-008/FR-008a/FR-011a) บันทึก sms_sent_date = NULL และ sent_status = 'F' — เพื่อให้รายงาน reconcile ได้ครบถ้วน และ Manual Fix ค้นหารายการค้างได้จากตารางเดียว โดยไม่ขัดกลไกกันส่งซ้ำ (FR-010 ตรวจเฉพาะ sms_sent_date IS NOT NULL) *(Clarified 2026-07-07)*
- **FR-017**: ระบบ MUST คำนวณ credit_amount ด้วย logic การคำนวณ credit เดิมของระบบ CSMS (reuse วิธีเดียวกับ batch SMS อื่นที่มีอยู่แล้ว) *(Q-005 Closed)*

**การแจ้งเตือนและการกู้คืน (Notification & Recovery)**

- **FR-018**: หากรอบประมวลผลล้มเหลวในระดับรอบ (round-level) ไม่ว่าขั้นตอนใด — ไม่สามารถ generate ไฟล์ได้ตามเวลาที่กำหนด, เรียก ESB/SMS Gateway ไม่ได้, ดึงข้อมูลต้นทาง/บันทึกฐานข้อมูลล้มเหลว, บริการตรวจสอบสถานะล่มทั้งระบบ (FR-008b) หรือไม่มีลิงก์แคมเปญ active (FR-012a) — ระบบ MUST ส่ง Email แจ้งเตือนทีม IT และ User ตามรูปแบบมาตรฐานของ batch CSMS เดิม (ผู้รับ/subject/เนื้อหาตาม convention เดิม) โดยระบุชื่อ batch = `BATCH-CSMS-WELCOME-LINE` และ**ขั้นตอนที่ล้มเหลว** — เกณฑ์ "ตามเวลาที่กำหนด" ใช้ timeout/SLA มาตรฐานของระบบ monitoring batch CSMS เดิม *(BR-008, MSG-001, Q-002 Closed, Clarified 2026-07-07)*
- **FR-019**: IT Admin MUST สามารถสั่งรัน Manual Batch ผ่านหน้า Manual Fix ของ Admin Dashboard กลาง CSMS ได้ โดยเพิ่ม batch นี้เข้า list ของหน้าเดิม (ไม่ออกแบบ UI ใหม่) และระบุช่วงวันที่ซ่อมข้อมูล: วันที่เริ่มต้น (ต้องไม่เกินวันปัจจุบัน) และวันที่สิ้นสุด (ต้อง ≥ วันที่เริ่มต้น) — validation และข้อความ error ตามมาตรฐานหน้าจอกลางเดิม *(Q-004 Closed, MSG-004)*
- **FR-020**: การรัน Manual Batch MUST เป็นแบบ idempotent — ประมวลผลเฉพาะช่วงวันที่ที่เลือก และไม่ส่งซ้ำรายการที่เคยส่งสำเร็จแล้ว (ใช้กลไกตรวจประวัติเดียวกับ FR-010) *(ALT-003, EC-004)*
- **FR-020a**: ช่วงวันที่ซ่อมข้อมูลที่เลือก MUST ตีความเป็น **วันประมวลผลของรอบ batch ที่ล้มเหลว** — ระบบดึงกรมธรรม์ที่ issue_date = T-1 ของแต่ละวันในช่วงที่เลือก (เช่น เลือก `2026-05-15` → ดึงกรมธรรม์ issue_date = `2026-05-14`) เพื่อให้ผลลัพธ์เหมือนการ re-run รอบที่หายไปทุกประการ *(Clarified 2026-07-07)*
- **FR-020b**: การส่งซ้ำรายการที่ไม่สำเร็จ (sent_status='F') MUST ทำผ่าน Manual Fix **เท่านั้น** — รอบ daily ปกติ MUST NOT ดึงรายการ 'F' ค้างมา retry อัตโนมัติ; บันทึก 'F' คงไว้เพื่อรายงาน/audit และ Manual Fix หยิบเฉพาะรายการที่ sms_sent_date IS NULL ในช่วงวันที่ที่เลือกมาประมวลผลซ้ำ *(Clarified 2026-07-07)*

**รายงาน (Reporting)**

- **FR-021**: ระบบ MUST จัดทำ "รายงานการส่ง SMS Welcome New Customer (LINE)" สรุปยอดต่อวันจากข้อมูล `WELCOME_NEW_CUST_LINE` ประกอบด้วย: จำนวนที่ประมวลผลทั้งหมด, จำนวนที่ส่งสำเร็จ (sent_status='S'), จำนวนที่ไม่สำเร็จ/ถูก skip (sent_status='F') และจำนวนที่ถูกตัดออกตามเหตุผล (FR-005/FR-006/FR-009/FR-010) พร้อม breakdown ตาม policy_type — รายงานนี้เป็นช่องทางเดียวสำหรับติดตามสัดส่วนรายการ 'F' ที่สูงผิดปกติ (ไม่มีกลไก threshold alert แยก — Clarified 2026-07-07) *(Q-006 Closed)*

### Key Entities *(include if feature involves data)*

- **ข้อมูลหลักกรมธรรม์ (MasterPolicy — DWConsole)**: ใช้ตรวจวันเริ่มคุ้มครอง สถานะ และเบอร์โทร — แหล่งอ้างอิง `public.ili_policy_master` (มีอยู่แล้ว)
- **ใบสมัคร/กรมธรรม์รายประเภท (Application ORD/IND/PA)**: source หลักของ issue_date, policy_type, mobile_no, id_no, policy_no — แหล่งอ้างอิง `public.ili_application_osp_ord/ind/pa` (มีอยู่แล้ว)
- **ข้อมูลลูกค้า (Customer Data Analytics)**: mapping จาก card_no/id_no → คำนำหน้า-ชื่อ-นามสกุล — แหล่งอ้างอิง `public.ili_customer_data_analytics` (มีอยู่แล้ว)
- **Do Not Contact List**: รายการลูกค้าที่ระงับการติดต่อ — แหล่งอ้างอิง `public.ili_policy_remark` (remark_code, policy_no, policy_type) โดย policy_type mapping: ORD='O', IND IN ('I','G'), PA='P' (มีอยู่แล้ว, Q-001 Closed)
- **บริการตรวจสอบสถานะ (Line Connect API — Inquiry)**: บริการภายนอกตรวจสถานะการลงทะเบียน Line Ocean Connect / Ocean Club — Input: cardNo (list), channels, types / Output: code, channel, isBlockLine (มีอยู่แล้ว)
- **หมวด SMS (SMS Category)**: กำหนด category, ชื่อย่อ, ข้อความ default — `SMS_CATEGORY` (sms_category_code='113', sms_category_name='MKTWelcomeNewCust', sms_category_name_abbr) (มีอยู่แล้ว)
- **กำหนดการข้อความ (SMS Message Schedule)**: template ข้อความตาม schedule/campaign — ใช้ก่อน SMS_CATEGORY — `sms_message_schedule` (มีอยู่แล้ว)
- **Config กลาง (Config Catalog)**: เก็บลิงก์แคมเปญ (LINE_LINK) พร้อมช่วงเวลาและสถานะ active — `cf_catalog` (config_type, config_value1-4, active_flag) (มีอยู่แล้ว)
- **ประวัติการส่งระดับระบบ (CSMS Log)**: บันทึกประวัติการส่ง SMS ของ CSMS โดยรวม — `CSMS_LOG` (id, create_date, sms_category_name_abbr, sms_message) (มีอยู่แล้ว)
- **ประวัติการส่งของ batch นี้ (Welcome New Cust Line)**: บันทึกประวัติเฉพาะ batch นี้ เพื่อกันส่งซ้ำ + audit — `WELCOME_NEW_CUST_LINE` (id, policy_no, policy_type, title_name, fname, lname, card_no, issue_date, sms_sent_date, mobile_no, sms_message, credit_amount, sent_status ['S'=สำเร็จ, 'F'=ไม่สำเร็จ/ถูก skip — Clarified 2026-07-07], created_by, created_date, updated_by, updated_date) — **ต้องสร้างใหม่ (เฉพาะ batch นี้)** — บันทึกทุกรายการที่เข้าขั้นตอนส่ง/ถูก skip ตาม FR-016a

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: ลูกค้าใหม่ที่เข้าเงื่อนไขทุกราย (100%) ได้รับ SMS ต้อนรับภายในวันถัดจากวันที่กรมธรรม์ได้รับอนุมัติ (ภายในรอบประมวลผล 10:00 น.)
- **SC-002**: ลูกค้าที่อยู่ใน Do Not Contact List หรือลงทะเบียน Line Ocean Connect / Ocean Club แล้ว ได้รับ SMS = 0 ราย (ไม่มีการส่งผิดกลุ่ม)
- **SC-003**: ลูกค้า 1 ราย ได้รับ SMS ต้อนรับไม่เกิน 1 ข้อความตลอดแคมเปญ — จำนวนการส่งซ้ำ (ทั้งภายในรอบและข้ามรอบ รวมถึงจากการ Manual Fix) = 0 รายการ
- **SC-004**: ทุกครั้งที่ Batch ล้มเหลว (100%) ทีม IT และ User ได้รับอีเมลแจ้งเตือน และ IT Admin สามารถซ่อมข้อมูลย้อนหลังได้ครบถ้วนโดยไม่มีลูกค้าตกหล่น
- **SC-005**: ข้อความ SMS ที่ส่งจริงตรงกับ template และลิงก์แคมเปญที่ active ณ วันส่ง 100% (ไม่มีการส่งลิงก์หมดอายุ)
- **SC-006**: ความผิดพลาดรายบุคคล (เช่น ตรวจสถานะไม่ได้) ไม่ทำให้รอบประมวลผลหยุด — รายการอื่นในรอบเดียวกันถูกประมวลผลจนจบครบ 100% และรายการที่ถูกข้ามถูกบันทึกไว้ตรวจสอบได้ทุกรายการ
- **SC-007**: ยอดในรายงานประจำวัน (ส่งสำเร็จ/ไม่สำเร็จ/ถูกตัดออก) ตรงกับข้อมูลประวัติการส่งจริง 100% (reconcile ได้ครบ)

## Assumptions

*จากเอกสารต้นทาง (Section 14):*

- **A-001**: โครงสร้าง ESB / SMS Gateway และการเชื่อมต่อ Web Service มีอยู่แล้วและใช้งานได้ — batch นี้ reuse infra เดิมของ CSMS (ถ้าไม่มี ต้องเพิ่ม scope งาน integration)
- **A-002**: บริการตรวจสอบสถานะ (Line Connect Inquiry) มีอยู่แล้ว เสถียร และรองรับการเรียกแบบ batch (list cardNo) — ถ้าไม่รองรับหรือมี rate limit ต้องปรับ flow เป็นเรียกทีละราย
- **A-003**: ข้อมูล mapping card_no → ชื่อ-นามสกุล สะอาดและไม่ซ้ำซ้อนต่อ card_no — ถ้าไม่จริง อาจได้ชื่อผิดคนหรือ error ตอน join
- **A-004**: Do Not Contact List อัปเดตข้อมูลล่าสุดก่อน batch รันทุกวัน — ถ้าไม่ทันสมัย อาจส่ง SMS ให้ลูกค้าที่ไม่ต้องการถูกติดต่อ
- **A-005**: mapping policy_type สำหรับตรวจ Do Not Contact ยืนยันแล้ว (Q-001 Closed): ORD='O', IND IN ('I','G'), PA='P'
- **A-006**: Business ยอมรับให้ batch "ไม่ส่งย้อนหลัง" ก่อนวันที่ UR Go-live — ถ้าเปลี่ยนใจต้องการส่งย้อนหลัง ต้อง re-scope และเพิ่ม logic backfill

*ค่าตั้งต้นที่ผู้จัดทำ spec เสนอสำหรับ edge case ที่เอกสารต้นทางไม่ระบุ (ยืนยัน/ปรับได้ในขั้น `/speckit-clarify`):*

- **A-007 (EC-002)**: กรณี dedup ภายในรอบแล้ว issue_date เท่ากันทุกฉบับ ให้เลือกรายการแบบ deterministic โดยใช้ policy_no ที่น้อยที่สุด — เพื่อให้ผลการรันซ้ำได้ผลเดิมเสมอ
- ~~A-008 (EC-003)~~ → **ยืนยันแล้ว** (Clarified 2026-07-07): ผลตอบกลับนอกเหนือ 3 เงื่อนไข → skip + log ตาม FR-008a (ไม่ใช่แค่ "ไม่ส่ง" เฉย ๆ — ต้องบันทึกไว้ตรวจสอบได้)
- ~~A-009 (EC-005)~~ → **ยืนยันแล้ว** (Clarified 2026-07-07): ไม่พบชื่อลูกค้า → skip + log ตาม FR-011a
- ~~A-010 (EC-006)~~ → **ยืนยันแล้ว** (Clarified 2026-07-07): ไม่มีลิงก์ active → หยุดส่งทั้งรอบ + แจ้งเตือน ตาม FR-012a
- **A-011 (Pre-Check #15)**: requirement ไม่จำกัด character limit ของข้อความ — template ปัจจุบัน ~140 ตัวอักษร ≈ 2 credits ตามมาตรฐาน UCS-2 ภาษาไทย ค่าใช้จ่ายคำนวณตาม logic เดิมของ CSMS (Q-005 Closed)

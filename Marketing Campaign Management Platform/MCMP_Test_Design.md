# MCMP — Test Design & Test Cases (สำหรับ Software Tester)

> อ้างอิงจาก BRD_V0.1 (Project 20240278) — แปลง Process Step & Business Rules เป็น Test Artifacts ที่นำไปใช้ทดสอบได้ทันที
> **โครงสร้าง:** RTM → Test Scenarios → Test Cases (มี Step/Expected/Data) → Test Data Matrix → Risk/Open Issues
> **Legend Priority:** P1=Critical, P2=High, P3=Medium | **Type:** Pos=Positive, Neg=Negative, Bnd=Boundary

---

## 1. Requirement Traceability Matrix (RTM)

| Process Step ID | Requirement (ย่อ) | Scenario | จำนวน TC | Priority |
|---|---|---|---|---|
| 01-1 | Update/Insert ข้อมูลเข้า MCMP (Daily 23:00 / Realtime) | TS-01 | TC-01-01..04 | P1 |
| 01-2 | ตรวจจับ error ระหว่างดึงข้อมูล | TS-01 | TC-01-05..06 | P1 |
| 01-4 | Automail แจ้งผล 08:00 / กรณีไม่พบไฟล์ 09:00 | TS-01 | TC-01-07..09 | P2 |
| 01-5 / 01-7 | Upload Campaign/Activity (csv ≤5MB) + Popup validation | TS-02 | TC-02-01..09 | P1 |
| 01-0-4 | Maker/Checker นำเข้า Campaign & Activity | TS-03 | TC-03-01..05 | P1 |
| 02-3 | สร้าง Customer Segment + Filter + Exclude | TS-04 | TC-04-01..10 | P1 |
| 02-4 | Sync Audience ไป FB/Google Ads | TS-05 | TC-05-01..03 | P2 |
| 02-5 | สร้าง Campaign + ตั้งเวลา + Tag + Counter | TS-06 | TC-06-01..12 | P1 |
| 02-6 | สร้าง Message แยกช่องทาง + Shortlink + SMS credit | TS-07 | TC-07-01..09 | P1 |
| 02-7 | Maker/Checker ส่ง Campaign | TS-08 | TC-08-01..05 | P1 |
| 02-8 / 02-9 | ส่ง Campaign ตามเวลา/ช่องทาง + ยึด CIS | TS-09 | TC-09-01..06 | P1 |
| 02-10 | เก็บผล Sent/Open/Click/Unique + Monthly Report | TS-10 | TC-10-01..08 | P1 |
| 03-01 | นำเข้า LC จาก OSSS (≤10/จังหวัด, ≤10 จังหวัด) | TS-11 | TC-11-01..07 | P1 |
| 03-05 | บันทึก Lead หลายช่องทาง + Dedup | TS-12 | TC-12-01..12 | P1 |
| 03-06/07 | เส้นทาง Online (Digital Sale) vs ตัวแทน | TS-13 | TC-13-01..04 | P2 |
| 03-08 | Auto Assign + Round Robin + Lead Scoring | TS-14 | TC-14-01..14 | P1 |
| 03-09 | Manual Assign Lead | TS-15 | TC-15-01..05 | P2 |
| 03-10/11 | แจ้งเตือน + LC Connect Lead List/Detail | TS-16 | TC-16-01..06 | P2 |
| 03-12 | SLA 24 ชม. + ดึงคืน + ระงับ LC | TS-17 | TC-17-01..14 | P1 |
| 03-13 | บันทึกผลการติดต่อ + UW lookup + 3 ครั้ง + Retention | TS-18 | TC-18-01..16 | P1 |
| 03-14 | รายงาน Automail Daily 09:00 + Export | TS-19 | TC-19-01..04 | P2 |

---

## 2. Test Scenarios (ระดับภาพรวม)

- **TS-01** ดึงข้อมูลจากแหล่งต้นทางสำเร็จ/ล้มเหลว และการแจ้งผล
- **TS-02** อัปโหลดไฟล์ Campaign/Activity และการ Validate ไฟล์
- **TS-03** อนุมัติ/ไม่อนุมัติการนำเข้า Campaign & Activity (Maker/Checker)
- **TS-04** สร้างและกำหนดเงื่อนไข Customer Segment (รวม Exclude Consent/Do-not-contact)
- **TS-05** ส่ง Audience ไป Facebook/Google Ads
- **TS-06** สร้าง Campaign, ตั้งเวลาส่ง, Tag, Retarget, ตัวนับผล
- **TS-07** สร้าง Message แยกช่องทาง, Personalization, Shortlink, SMS credit
- **TS-08** ขออนุมัติและอนุมัติการส่ง Campaign
- **TS-09** ระบบส่ง Campaign ตามเวลา/ช่องทาง และ fallback CIS
- **TS-10** เก็บผลตอบรับ + รายงานสรุปรายเดือน
- **TS-11** นำเข้ารายชื่อ LC จาก OSSS
- **TS-12** บันทึก Lead จากทุกช่องทาง + ตรวจซ้ำ
- **TS-13** แยกเส้นทาง Online vs ตัวแทน
- **TS-14** Auto Assign Lead + Lead Scoring
- **TS-15** Manual Assign Lead
- **TS-16** แจ้งเตือนและจัดการ Lead บน LC Connect
- **TS-17** SLA การติดต่อ + ดึง Lead คืน + ระงับ LC
- **TS-18** บันทึกผลการติดต่อ + ตรวจสถานะ UW + กฎ 3 ครั้ง + Retention
- **TS-19** รายงานผล Lead

---

## 3. Detailed Test Cases

### TS-01 / TS-02 — Data Ingestion & File Upload

| TC ID | Title | Trace | Type | Pre-condition | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|---|
| TC-01-01 | ดึง Customer Daily สำเร็จ | 01-1 | Pos | มีข้อมูลใน CIS/DW | รอ batch 23:00 หรือ trigger ดึง | ข้อมูล Customer ถูก Insert/Update เข้า MCMP ครบ (Inforce+ไม่ Inforce, ทุกแบบประกัน) | P1 |
| TC-01-02 | Update ข้อมูลที่เปลี่ยนแปลง (ไม่สร้างซ้ำ) | 01-1 | Pos | Customer เดิมมีในระบบ + ต้นทางแก้ไข | รัน batch | ระเบียนเดิมถูก **Update** ไม่เกิด record ซ้ำ | P1 |
| TC-01-03 | ดึง Contact Center / FB Inbox แบบ Realtime | 01-1-(2) | Pos | มี case ใหม่ใน NBS | สร้าง case ใหม่ | ข้อมูลเข้า MCMP แบบ Realtime | P2 |
| TC-01-04 | ตัวแทน OSSS อัปเดต Near-realtime | 01-1-(5) | Pos | OSSS แก้คุณวุฒิ/ตำแหน่ง | แก้ข้อมูลใน OSSS | MCMP อัปเดตตามอัตโนมัติ | P2 |
| TC-01-05 | ดึงข้อมูลไม่สำเร็จ → ไป 01-4 | 01-2 | Neg | ทำให้ source ล่ม/ไฟล์เสีย | รัน batch | ระบบจับ error และข้ามไปขั้นแจ้งผล (ไม่บันทึกข้อมูลผิด) | P1 |
| TC-01-06 | ดึงสำเร็จ → จัดเก็บ + แจ้งผล | 01-2/01-3 | Pos | source ปกติ | รัน batch | บันทึกลงระบบส่วนกลาง + ส่ง Automail สำเร็จ | P1 |
| TC-01-07 | Automail แจ้งผลสำเร็จ เวลา 08:00 | 01-4 | Pos | batch เสร็จ | ตรวจเวลา/ผู้รับ/Template | อีเมลส่งถึงฝ่ายการตลาด 08:00 ตาม Template_Marketing Campaign | P2 |
| TC-01-08 | ไม่พบไฟล์ใน Path → Automail 09:00 | 01-0-(5) | Neg | ลบไฟล์ออกจาก Path | รัน batch | ส่ง Automail แจ้งฝ่ายที่เกี่ยวข้อง 09:00 | P2 |
| TC-01-09 | ดึง RFM แบบ Manual | 01-1-(6) | Pos | มีไฟล์ RFM | กดปุ่มประมวลผลบนหน้าจอ | ข้อมูล RFM ถูกนำเข้า | P2 |
| TC-02-01 | Upload csv ถูกต้อง | 01-5 | Pos | ไฟล์ csv 4MB, column ครบ | Upload ผ่าน UI | นำเข้าสำเร็จ ไป 01-3 | P1 |
| TC-02-02 | Upload ไฟล์ไม่ใช่ csv | 01-7(1) | Neg | ไฟล์ .xlsx/.pdf | Upload | Popup: "อัปโหลดเป็น csv เท่านั้น" | P1 |
| TC-02-03 | Upload ไฟล์ = 5MB พอดี | 01-7(1) | Bnd | ไฟล์ csv ขนาด 5.00MB | Upload | นำเข้าสำเร็จ (ขอบเขตยอมรับ) | P2 |
| TC-02-04 | Upload ไฟล์ > 5MB | 01-7(1) | Bnd | ไฟล์ csv 5.01MB | Upload | Popup: เกินขนาดที่กำหนด | P1 |
| TC-02-05 | คอลัมน์ไม่ครบ / ชื่อคอลัมน์ผิด | 01-7(2) | Neg | csv ตัดคอลัมน์ออก | Upload | Popup: โครงสร้าง/ชื่อคอลัมน์ไม่ถูกต้อง | P1 |
| TC-02-06 | ข้อมูลซ้ำกับที่เคยอัปโหลด | 01-7(3) | Neg | Upload ไฟล์เดิมซ้ำ | Upload | Popup: พบข้อมูลซ้ำ ไม่บันทึก | P1 |
| TC-02-07 | เกิด error ระหว่างบันทึก | 01-7(4) | Neg | จำลอง DB error | Upload | Popup: เกิดข้อผิดพลาด กรุณาลองใหม่ | P2 |
| TC-02-08 | ไฟล์ว่าง / 0 byte | 01-7 | Neg | csv ว่าง | Upload | ระบบปฏิเสธอย่างเหมาะสม (ไม่ crash) | P2 |
| TC-02-09 | csv ที่มีอักขระพิเศษ/encoding ภาษาไทย | 01-5 | Bnd | csv UTF-8 ไทย | Upload | นำเข้าได้ถูกต้อง ไม่เพี้ยน | P2 |
| TC-03-01 | Maker upload → แสดงรายการให้ตรวจ | 01-0-4-1/2 | Pos | สิทธิ์ Maker | Upload + เปิดดู | ระบบแสดงรายการข้อมูลให้ผู้บริหารตรวจ | P1 |
| TC-03-02 | Checker Approve → บันทึกเข้า CIS | 01-0-4-3/4 | Pos | สิทธิ์ Approver | กด Approve | บันทึกข้อมูลเข้า CIS + ส่ง Email แจ้งผล | P1 |
| TC-03-03 | Checker Reject + ระบุเหตุผล | 01-0-4-3/5 | Neg | สิทธิ์ Approver | กด Reject + กรอกเหตุผล | ไม่บันทึกข้อมูล + Email แจ้งผลพร้อมเหตุผล | P1 |
| TC-03-04 | Maker ไม่สามารถ Approve งานตัวเอง | 01-0-4 | Neg | login เป็น Maker | พยายามอนุมัติ | ระบบไม่อนุญาต (แยกบทบาท Maker/Checker) | P1 |
| TC-03-05 | Reject โดยไม่กรอกเหตุผล | 01-0-4-5 | Neg | สิทธิ์ Approver | กด Reject เว้นเหตุผลว่าง | ระบบบังคับให้กรอกเหตุผล | P2 |

### TS-04 — Customer Segment (02-3)

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-04-01 | สร้าง Segment ชื่อใหม่ | 02-3.1 | Pos | สร้าง Segment ชื่อไม่ซ้ำ | บันทึกสำเร็จ | P1 |
| TC-04-02 | ตั้งชื่อ Segment ซ้ำ | 02-3.1 | Neg | สร้างชื่อที่มีอยู่แล้ว | ระบบปฏิเสธ "ห้ามตั้งชื่อซ้ำ" | P1 |
| TC-04-03 | Active/Inactive โดยไม่ลบ | 02-3.1 | Pos | toggle สถานะ | สถานะเปลี่ยน ข้อมูลยังอยู่ | P2 |
| TC-04-04 | Clone Segment | 02-3.1 | Pos | กด Clone | ได้ Segment ใหม่ที่ copy เงื่อนไข | P2 |
| TC-04-05 | Filter หลาย Attribute ผสมกัน | 02-3.2 | Pos | เลือก gender + age range + province | ได้กลุ่มลูกค้าตรงทุกเงื่อนไข (AND) | P1 |
| TC-04-06 | Filter ด้วย RFM Group | 02-3.2 | Pos | เลือก RFM = Champions | ได้เฉพาะลูกค้ากลุ่มนั้น | P1 |
| TC-04-07 | Exclude Consent = No | 02-3.2 | Neg | เปิด exclude Consent No | ลูกค้า Consent=No ไม่อยู่ในกลุ่ม | P1 |
| TC-04-08 | Exclude Do-not-contact list | 02-3.2 | Neg | เปิด exclude do-not-contact | เบอร์ที่อยู่ใน do-not-contact ถูกตัดออก | P1 |
| TC-04-09 | แสดง metadata (Created by/on, Modified, ID) | 02-3.3 | Pos | เปิดดู Segment | แสดง user/date/running no ถูกต้อง | P3 |
| TC-04-10 | Export Raw Data by Campaign | 02-3.4 | Pos | กด Export | ได้ไฟล์ Raw Data ตาม Template | P2 |

### TS-06 / TS-07 — Campaign & Message (02-5, 02-6)

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-06-01 | สร้าง Campaign ชื่อไม่ซ้ำ | 02-5.1 | Pos | สร้าง | บันทึกสำเร็จ | P1 |
| TC-06-02 | ตั้งชื่อ Campaign ซ้ำ | 02-5.1 | Neg | ชื่อซ้ำ | ปฏิเสธ | P1 |
| TC-06-03 | เลือกหลายช่องทาง (SMS/Email/Line/App) | 02-5.1 | Pos | เลือกครบ 4 ช่องทาง | ผูก Message ได้ทุกช่องทาง | P1 |
| TC-06-04 | ส่งทันที (Immediate) | 02-5.1 | Pos | เลือก "ส่งทันที" + อนุมัติ | ส่งทันทีหลังอนุมัติ | P1 |
| TC-06-05 | ส่งตามเวลาที่กำหนด | 02-5.1 | Pos | ตั้งเวลาในอนาคต | ส่งตรงเวลาที่กำหนด | P1 |
| TC-06-06 | แก้เวลาส่งก่อนถึงกำหนด | 02-5.1 | Pos | แก้เวลาก่อนส่ง | เวลาส่งอัปเดต | P2 |
| TC-06-07 | กำหนดหลาย Tag / Tag ซ้ำชื่อได้ | 02-5.1 | Pos | ใส่ 2 Tag ชื่อซ้ำ Campaign อื่น | ระบบยอมรับ | P3 |
| TC-06-08 | สถานะ Campaign Publish/Off | 02-5.1 | Pos | เปลี่ยนสถานะ | แสดงสถานะถูกต้อง | P2 |
| TC-06-09 | Retarget จากกลุ่ม Open/Click | 02-5.1 | Pos | สร้าง retarget ตาม Action=Click | ส่งข้อมูลกลุ่มไป FB/Google | P2 |
| TC-06-10 | นับ Sent = เฉพาะที่ส่งสำเร็จ | 02-5/02-10 | Pos | ส่ง 100 สำเร็จ 95 | Sent = 95 | P1 |
| TC-06-11 | นับ Open = เฉพาะคนเปิดอ่าน | 02-10.2 | Pos | 40 คนเปิด | Open = 40 | P1 |
| TC-06-12 | นับ Unique Click (ไม่นับซ้ำ) | 02-10.4 | Bnd | 1 คนคลิก 3 ครั้ง | Unique Click +1 | P1 |
| TC-07-01 | สร้าง Message ชื่อไม่ซ้ำ | 02-6.1 | Pos | สร้าง | สำเร็จ | P2 |
| TC-07-02 | SMS = Text + Link เท่านั้น | 02-6.1 | Pos | สร้าง Message SMS | บังคับรูปแบบ Text+Link | P2 |
| TC-07-03 | Email/Line = Image + Text + Link | 02-6.1 | Pos | สร้าง Message Email | รองรับรูปภาพ+ข้อความ+ลิงก์ | P2 |
| TC-07-04 | Personalization variable | 02-6.1 | Pos | ใส่ตัวแปร {ชื่อ},{เลขกรมธรรม์} | Preview/ส่งจริงแสดงข้อมูลลูกค้าจริง | P1 |
| TC-07-05 | แปลง Link เป็น Shortlink (Infobip) | 02-6.1 | Pos | ติ๊ก shorten link | Link ถูกย่อ | P2 |
| TC-07-06 | นับ Character & Credit SMS | 02-6 | Pos | พิมพ์ข้อความ SMS | แสดงจำนวนตัวอักษร + credit ที่ใช้ | P2 |
| TC-07-07 | SMS ภาษาไทยเกิน 70 ตัว (multi-part) | 02-6 | Bnd | ใส่ไทยยาว | credit คำนวณตามจำนวน segment ถูกต้อง | P2 |
| TC-07-08 | Preview ข้อความ | 02-6.1 | Pos | กด Preview | แสดงตัวอย่างตรงช่องทาง | P3 |
| TC-07-09 | Clone Message | 02-6.1 | Pos | Clone | ได้ Message ใหม่ | P3 |

### TS-08 / TS-09 / TS-10 — Approval, Send & Tracking

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-08-01 | Maker สร้าง+ผูก Segment → ขออนุมัติ | 02-7-1 | Pos | สร้าง Campaign + ผูก Segment + ส่งขออนุมัติ | สถานะ "รออนุมัติ" | P1 |
| TC-08-02 | Approver อนุมัติ → ส่งตาม 02-8 | 02-7-2 | Pos | กด Approve | ระบบดำเนินการส่ง | P1 |
| TC-08-03 | Approver ไม่อนุมัติ → ไม่ส่ง | 02-7-2 | Neg | กด Reject | ระบบ**ไม่ส่ง** Campaign | P1 |
| TC-08-04 | Maker ไม่สามารถอนุมัติงานตนเอง | 02-7 | Neg | login Maker | ไม่อนุญาต | P1 |
| TC-08-05 | แก้ Campaign หลังอนุมัติแล้ว | 02-7 | Neg | พยายามแก้หลัง Approve | ตรวจสอบ behavior (ควรล็อก/ขออนุมัติใหม่) | P2 |
| TC-09-01 | ส่งตรงตามเวลาที่ตั้ง | 02-8 | Pos | ถึงเวลา schedule | ส่งครบทุกช่องทางที่ระบุ | P1 |
| TC-09-02 | ยึดเบอร์/อีเมลจาก CIS เมื่อข้อมูลหลายแหล่ง | 02-8 | Pos | ลูกค้ามีเบอร์ต่างกันหลายแหล่ง | ใช้เบอร์/อีเมลจาก CIS เท่านั้น | P1 |
| TC-09-03 | ส่งไม่สำเร็จบางราย → สรุปจำนวน+user | 02-8 | Neg | จำลองส่ง fail 5 ราย | ระบบสรุปจำนวน + รายชื่อที่ fail | P1 |
| TC-09-04 | ส่ง SMS ผ่าน Infobip | 02-8 | Pos | ส่งช่องทาง SMS | ลูกค้าได้รับ SMS | P2 |
| TC-09-05 | ลูกค้าได้รับครบทุกช่องทาง | 02-9 | Pos | ตรวจปลายทาง | ได้รับตามช่องทางที่ระบุ | P2 |
| TC-09-06 | ลูกค้าใน do-not-contact ไม่ได้รับ | 02-8 | Neg | มีลูกค้า do-not-contact ใน segment | ไม่ส่งให้ราย้นั้น | P1 |
| TC-10-01 | เก็บจำนวนผู้รับต่อ Campaign | 02-10.1 | Pos | ส่งเสร็จ | บันทึกจำนวนถูกต้อง | P1 |
| TC-10-02 | เก็บวัน-เวลาเปิดอ่านราย user | 02-10.5 | Pos | user เปิดอ่าน | บันทึก timestamp ราย user | P2 |
| TC-10-03 | Export Raw Data by User | 02-10 | Pos | กด Export | ได้ไฟล์ตาม Template | P2 |
| TC-10-04 | Automail Monthly Report | 02-10 | Pos | วันที่ 1 เดือนถัดไป 13:00 | ส่งสรุปรายเดือนตรงเวลา | P2 |
| TC-10-05 | เก็บข้อมูลไว้จนกว่าจะสั่งลบ | 02-10 | Pos | ผ่านไปหลายเดือน | ข้อมูลยังอยู่ | P3 |

### TS-11 — Import LC from OSSS (03-01)

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-11-01 | ดึง LC ด้วยตนเอง | 03-01.1 | Pos | เลือก LC + ดึง | ข้อมูล LC เข้าระบบครบ (Agent Code, ชื่อ, ตำแหน่ง, คุณวุฒิ, ผลงาน, สาขา, จังหวัด) | P1 |
| TC-11-02 | เลือก 10 รายชื่อ/จังหวัด พอดี | 03-01.1 | Bnd | เลือก 10 ชื่อใน 1 จังหวัด | ยอมรับ | P1 |
| TC-11-03 | เลือก 11 รายชื่อ/จังหวัด | 03-01.1 | Bnd | เลือก 11 ชื่อ | ปฏิเสธ/เตือนเกินกำหนด | P1 |
| TC-11-04 | เลือก 10 จังหวัด/ครั้ง พอดี | 03-01.1 | Bnd | 10 จังหวัด | ยอมรับ | P1 |
| TC-11-05 | เลือก 11 จังหวัด/ครั้ง | 03-01.1 | Bnd | 11 จังหวัด | ปฏิเสธ | P1 |
| TC-11-06 | ดึงหลายครั้งต่อวัน | 03-01.1 | Pos | ดึงซ้ำหลายครั้ง | ไม่จำกัดจำนวนครั้ง | P2 |
| TC-11-07 | LC แก้ข้อมูลใน OSSS → auto update | 03-01.4 | Pos | แก้คุณวุฒิใน OSSS | MCMP อัปเดตอัตโนมัติ | P2 |

### TS-12 — Record Lead & Dedup (03-05)

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-12-01 | Lead จาก Website (auto) | 03-05.1 | Pos | submit web form | บันทึกเข้าระบบอัตโนมัติ | P1 |
| TC-12-02 | Lead จาก Facebook (manual) | 03-05.2 | Pos | บันทึกทีละราย | บันทึกสำเร็จ | P1 |
| TC-12-03 | Contact Center บันทึกผ่าน VPN/VDI (WFH) | 03-05.3 | Pos | WFH + VPN | บันทึก Lead ได้ | P2 |
| TC-12-04 | บันทึก Lead Contact Center ไม่ผ่าน VPN (WFH) | 03-05.3 | Neg | WFH ไม่ต่อ VPN | ไม่สามารถบันทึก | P2 |
| TC-12-05 | Import Lead Excel/CSV (CRM) | 03-05.4 | Pos | Import ไฟล์ | นำเข้าหลายรายการ | P1 |
| TC-12-06 | Dedup ช่องทางเดียว — ยึดข้อมูลล่าสุด #2 | 03-05.6.1 | Pos | กรอกซ้ำ 2 ครั้งจาก Web | เก็บข้อมูล #2 (ล่าสุด) | P1 |
| TC-12-07 | Dedup ช่องทางเดียว — แบบประกันต่างกัน | 03-05.6.1 | Pos | #1 และ #2 ระบุแบบประกันต่างกัน | แสดงทั้ง 2 แบบประกัน | P1 |
| TC-12-08 | Dedup ช่องทางเดียว — แบบประกันเดียวกัน | 03-05.6.1 | Pos | #1=#2 แบบประกันเดียวกัน | แสดงแบบประกันเดียว | P2 |
| TC-12-09 | Dedup 2 ช่องทาง (Web+FB) | 03-05.6.2 | Pos | เบอร์เดียวกันจาก Web และ FB | ยึดข้อมูลล่าสุด + ระบุว่ามาจาก 2 ช่องทาง | P1 |
| TC-12-10 | Dedup 2 ช่องทาง — แบบประกันต่างกัน | 03-05.6.2 | Pos | แบบประกันต่างกัน | แสดงทั้ง 2 แบบประกัน | P2 |
| TC-12-11 | Lead ซ้ำ assign ให้ LC คนเดียว | 03-05.6 | Pos | Lead ซ้ำหลายครั้ง | assign LC คนเดียวกัน | P1 |
| TC-12-12 | นับจำนวนครั้ง/ช่องทางที่ฝาก Lead | 03-05.6 | Pos | ฝาก 3 ครั้ง | แสดงจำนวนครั้ง + ช่องทาง | P2 |

### TS-14 — Auto Assign & Lead Scoring (03-08)

| TC ID | Title | Trace | Type | Steps | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-14-01 | Assign ตามจังหวัด (ลำดับ 1) | 03-08.3.1 | Pos | Lead จังหวัด A, มี LC รับผิดชอบ A | assign ให้ LC จังหวัด A | P1 |
| TC-14-02 | ลำดับผลงานทุกงวด > บางงวด | 03-08.3.2/3 | Pos | 2 LC จังหวัดเดียวกัน ผลงานต่างระดับ | เลือก LC ผลงานทุกงวดก่อน | P1 |
| TC-14-03 | Tie-break จำนวนกรมธรรม์ใหม่ 3 งวด (ไม่รวม PA) | 03-08 | Pos | ผลงานเท่ากัน | เรียงตามจำนวนกรมธรรม์ใหม่มาก→น้อย | P1 |
| TC-14-04 | Tie-break รายได้สะสม 3 งวด | 03-08 | Pos | จำนวนกรมธรรม์เท่ากัน | เรียงตามรายได้สะสมมาก→น้อย | P2 |
| TC-14-05 | Round Robin — LC ล่าสุดไปท้ายคิว | 03-08 | Pos | assign Lead ติดกันหลายราย | กระจายหมุนเวียน ไม่กระจุก | P1 |
| TC-14-06 | Assign ใน Near-realtime | 03-08 | Pos | บันทึก Lead | assign ภายในเวลาสั้น | P1 |
| TC-14-07 | Assign ในวันหยุด | 03-08 | Pos | บันทึก Lead วันหยุด | ยัง assign ได้เหมือนวันทำการ | P1 |
| TC-14-08 | ไม่พบ candidate → Email การตลาด | 03-08 | Neg | Lead จังหวัดไม่มี LC | ส่ง Email ให้การตลาด Manual Assign | P1 |
| TC-14-09 | พบ candidate >1 → ตามเงื่อนไข/Manual | 03-08 | Pos | หลาย LC เข้าเงื่อนไข | ใช้เกณฑ์ลำดับ หรือเข้าสู่ Manual Assign | P1 |
| TC-14-10 | Lead Scoring = Hot (มีช่วงเวลาติดต่อ) | 03-08 | Pos | Lead ระบุ 09:00-12:00 | Scoring = Hot Lead | P1 |
| TC-14-11 | Lead Scoring = Warm (ไม่มีช่วงเวลา) | 03-08 | Pos | Lead ไม่ระบุเวลา | Scoring = Warm Lead | P1 |
| TC-14-12 | Assign LC คนเดียวต่อ 1 Lead | 03-08 | Pos | Lead ใหม่ | assign 1 LC เท่านั้น | P1 |
| TC-14-13 | Dedup เบอร์ทุกช่องทาง/ทุกเวลา | 03-08 | Pos | เบอร์ซ้ำ | จับได้ว่าเป็น Lead ซ้ำ | P1 |
| TC-14-14 | Notify New Lead หลัง assign | 03-08→03-10 | Pos | assign สำเร็จ | แจ้งเตือน LC ผ่าน LC Connect | P1 |

### TS-17 — SLA & Re-Assign (03-12) ⭐ จุดที่ต้องทดสอบ Boundary หนัก

| TC ID | Title | Trace | Type | Test Data / Scenario | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-17-01 | Hot Lead — เริ่มนับ SLA จากเวลานัด | 03-12.1 | Pos | นัด 13:00, LC บันทึกผล 13:30 (ภายใน 24ชม.) | ผ่าน SLA | P1 |
| TC-17-02 | Hot Lead — เกิน 24 ชม. | 03-12 | Bnd | นัด 13:00 วันที่ 1, บันทึก 14:00 วันที่ 2 | เกิน SLA → ดึงคืน | P1 |
| TC-17-03 | Hot Lead — ครบ 24 ชม. พอดี | 03-12 | Bnd | นัด 13:00 D1, บันทึก 13:00 D2 | ตรวจ behavior ที่ขอบเขต (กำหนดให้ชัด) | P1 |
| TC-17-04 | Warm Lead — assign ในเวลา 9-18 | 03-12.1 | Pos | assign 10:00, บันทึก 12:00 | นับจาก 10:00, ผ่าน SLA | P1 |
| TC-17-05 | Warm Lead — assign 07:00 (ก่อน 9:00) | 03-12 | Bnd | assign 07:00 → เริ่มนับ 09:00 วันเดียวกัน | SLA เริ่ม 09:00 | P1 |
| TC-17-06 | Warm Lead — assign 19:00 (หลัง 18:00) | 03-12 | Bnd | assign 19:00 → เริ่มนับ 09:00 วันถัดไป | SLA เริ่ม 09:00 วันถัดไป | P1 |
| TC-17-07 | Warm Lead — assign 18:00 พอดี | 03-12 | Bnd | assign 18:00 | ระบุชัดว่าเริ่มนับเมื่อใด (ขอบเขต) | P2 |
| TC-17-08 | LC ติดต่อตาม SLA → ไป 03-13 | 03-12.2 | Pos | บันทึกผลในเวลา | ดำเนินต่อบันทึกผล | P1 |
| TC-17-09 | LC ไม่ติดต่อใน SLA → ดึง Lead คืน auto | 03-12.3 | Neg | ปล่อยเกิน SLA | ระบบดึง Lead คืน Re-assign ตาม 03-08 | P1 |
| TC-17-10 | ระงับ LC 5 วัน | 03-12.3 | Pos | เลือก 5 วัน | LC ไม่ได้รับ Lead 5 วัน | P2 |
| TC-17-11 | ระงับ LC ถาวร | 03-12.3 | Bnd | เลือกถาวร | LC ไม่ได้รับ Lead จนกว่าจะปลด | P2 |
| TC-17-12 | Re-assign LC ใหม่ก็ไม่ติดต่อ → Email การตลาด 09:00 | 03-12.4 | Neg | LC ใหม่เกิน SLA | Email แจ้งการตลาด 09:00 ทุกวัน | P1 |
| TC-17-13 | นับ SLA ข้ามวันหยุด | 03-12 | Bnd | SLA คร่อมวันหยุด | ตรวจว่านับชั่วโมงต่อเนื่อง (ตาม BRD นับ 24 ชม. ต่อเนื่อง) | P2 |
| TC-17-14 | บันทึกผล "ติดต่อได้" + นัดใหม่ → SLA เริ่มจากวันนัด | 03-13/03-12 | Pos | นัดวันใหม่ | SLA เริ่มจากวันนัด 9-18, ภายใน 24ชม. | P1 |

### TS-18 — Contact Result, UW Lookup, 3-Attempt, Retention (03-13)

| TC ID | Title | Trace | Type | Steps / Data | Expected Result | Pri |
|---|---|---|---|---|---|---|
| TC-18-01 | ติดต่อได้: ขอตัดสินใจก่อน + Calendar | 03-13.1.1 | Pos | เลือกเหตุผล + นัดวัน | บันทึก + แจ้งเตือนล่วงหน้า 1 ชม. ก่อนนัด | P1 |
| TC-18-02 | ติดต่อได้: ไม่ซื้อ + เหตุผล | 03-13.1.2 | Pos | เลือกเหตุผลไม่ซื้อ | บันทึกผล | P2 |
| TC-18-03 | ติดต่อได้: ซื้อ — พบใบคำขอ+กรมธรรม์ | 03-13.1.3.1 | Pos | กรอกเลข, มีใน UW | สถานะ = "อนุมัติ" | P1 |
| TC-18-04 | ซื้อ — พบใบคำขอ ไม่พบกรมธรรม์ | 03-13.1.3.2 | Bnd | มีใบคำขอ ไม่มีกรมธรรม์ | แสดงสถานะตามระบบ UW | P1 |
| TC-18-05 | ซื้อ — ไม่พบทั้งคู่ | 03-13.1.3.3 | Neg | เลขไม่มีใน UW | สถานะ = "ไม่พบข้อมูล" + แก้ไขเลขได้ | P1 |
| TC-18-06 | ซื้อ — ส่ง Auto Email HRA + CC การตลาด | 03-13.1.3 | Pos | บันทึกการซื้อ | ส่ง Email ถึง HRA, CC การตลาด | P1 |
| TC-18-07 | ติดต่อไม่ได้ ครั้งที่ 1 + เหตุผล | 03-13.2 | Pos | บันทึกไม่ได้ฝากลีด | บันทึก + ต้องกรอกวันติดตาม ≤7 วัน | P1 |
| TC-18-08 | ติดต่อไม่ได้ ครั้งที่ 2 (>2 ครั้งไม่รับสาย) | 03-13.2 | Pos | บันทึกครั้งที่ 2 | บันทึกผล | P2 |
| TC-18-09 | วันติดตามเกิน 7 วัน | 03-13.3 | Bnd | เลือกวันที่ +8 วัน | ปฏิเสธ (ไม่เกิน 7 วัน) | P1 |
| TC-18-10 | วันติดตาม = 7 วันพอดี | 03-13.3 | Bnd | +7 วัน | ยอมรับ | P2 |
| TC-18-11 | กฎ 3 ครั้ง — ครั้งที่ 1 ไม่บันทึกใน SLA → ดึงคืน | 03-13 | Neg | เกิน SLA ครั้งที่ 1 | ดึง Lead กลับ Re-assign | P1 |
| TC-18-12 | กฎ 3 ครั้ง — บันทึกครบ 3 ครั้ง → ปิดเคส | 03-13 | Pos | บันทึกครั้งที่ 3 | ปิดเคส (ไม่ว่าซื้อหรือไม่) | P1 |
| TC-18-13 | SLA นับใหม่หลังบันทึกผลแต่ละครั้ง | 03-13 | Pos | บันทึกครั้งที่ 1→2 | SLA เริ่มนับใหม่หลังครั้งก่อน | P1 |
| TC-18-14 | Retention — Lead ปิดการขายไม่ได้เก็บ 3 เดือน | 03-13.4 | Bnd | Lead ค้าง 3 เดือน | ระบบลบอัตโนมัติหลัง 3 เดือน | P2 |
| TC-18-15 | Calendar — เลือกวันติดต่อจริง + Note | 03-13 | Pos | กรอกวันจริง + โน้ต | บันทึกได้ | P3 |
| TC-18-16 | แก้ไขเลขใบคำขอ/กรมธรรม์ใหม่ (กรณีไม่พบ) | 03-13.1.3.3 | Pos | แก้เลขแล้ว save | ระบบค้นหา UW ใหม่ | P2 |

### TS-15 / TS-16 / TS-19 — Manual Assign, LC Connect UI, Report

| TC ID | Title | Trace | Type | Expected Result | Pri |
|---|---|---|---|---|---|
| TC-15-01 | แสดงรายการ Lead ที่ยังไม่มี LC | 03-09.1 | Pos | แสดงข้อมูล Lead ครบ | P2 |
| TC-15-02 | เลือก Lead + เลือก LC + Assign | 03-09.2/3 | Pos | assign สำเร็จ | P1 |
| TC-15-03 | บันทึก Agent Code + วันเวลา + ผู้ assign | 03-09.4 | Pos | บันทึก audit ครบ | P1 |
| TC-15-04 | แจ้งเตือน New Lead หลัง Manual Assign | 03-09.5 | Pos | LC ได้รับแจ้งเตือน | P1 |
| TC-15-05 | Assign Lead ที่มี LC อยู่แล้ว (ซ้ำ) | 03-09 | Neg | ป้องกัน/เตือน | P2 |
| TC-16-01 | เข้าถึง Lead จากเมนู My Lead | 03-11.1 | Pos | เห็นรายการ Lead | P2 |
| TC-16-02 | เข้าถึง Lead จาก Notification | 03-11.1 | Pos | กดแจ้งเตือนเข้าหน้า Lead | P2 |
| TC-16-03 | Lead Status (ยังไม่ติดต่อ/ติดต่อแล้ว) | 03-11.2 | Pos | แสดงสถานะถูกต้อง | P2 |
| TC-16-04 | ปุ่มโทรออกจาก Lead Detail | 03-11.3 | Pos | กดโทรออกได้ | P2 |
| TC-16-05 | ข้อความแจ้งเตือน New Lead ถูกต้อง | 03-10.1 | Pos | "Lead ใหม่: คุณ[ชื่อ] สนใจ[แบบประกัน]..." | P2 |
| TC-16-06 | Mockup ตรงตาม Lead Management.pdf หน้า 7 | 03-11.4 | Pos | UI ตรง mockup | P3 |
| TC-19-01 | Automail Daily Report 09:00 | 03-14.1 | Pos | ส่ง Daily Report แนบ Excel/CSV | P2 |
| TC-19-02 | Export Summary CSV | 03-14.2 | Pos | ได้ไฟล์ CSV | P2 |
| TC-19-03 | Export Summary Excel | 03-14.2 | Pos | ได้ไฟล์ Excel | P2 |
| TC-19-04 | Raw Data: Lead Source Performance | 03-14 | Pos | แสดงจำนวน Lead/Assign/ติดต่อได้/ปิดได้ ตามช่องทาง | P2 |

---

## 4. Test Data Matrix (ข้อมูลทดสอบที่ต้องเตรียม)

| ชุดข้อมูล | รายละเอียด | ใช้กับ TC |
|---|---|---|
| Customer ปกติ | มีเบอร์+อีเมล, Consent=Y, Inforce | TS-04, TS-09 |
| Customer Consent=No | ต้องถูก exclude | TC-04-07, TC-09-06 |
| Customer ใน Do-not-contact | เบอร์ตรง do-not-contact list | TC-04-08, TC-09-06 |
| Customer หลายแหล่ง | เบอร์/อีเมลต่างกันใน CIS vs อื่น | TC-09-02 |
| ไฟล์ csv: ถูกต้อง / >5MB / =5MB / ผิด column / ซ้ำ / ว่าง / ไทย | ทดสอบ validation | TS-02 |
| LC: ผลงานทุกงวด / บางงวด / จังหวัดต่างกัน / กรมธรรม์ใหม่เท่ากัน | ทดสอบ Auto Assign | TS-14 |
| Lead Hot (มีช่วงเวลา) / Warm (ไม่มี) | Lead Scoring + SLA | TS-14, TS-17 |
| Lead ซ้ำ: 1 ช่องทาง / 2 ช่องทาง / แบบประกันเหมือน-ต่าง | Dedup | TS-12 |
| เลขใบคำขอ/กรมธรรม์: พบทั้งคู่ / พบใบคำขอไม่พบกรมธรรม์ / ไม่พบ | UW lookup | TC-18-03..05 |
| เวลา Assign: 07:00 / 10:00 / 18:00 / 19:00 | SLA boundary | TS-17 |
| Segment: RFM 11 กลุ่ม, CLV 6 ระดับ, Age group | Filter | TS-04 |

---

## 5. ความเสี่ยง / ประเด็นที่ Tester ต้องสอบถามก่อนทดสอบ (Open Issues)

> รายการเหล่านี้ใน BRD ยังกำกวมหรือสถานะ **Recheck** — ควร clarify ก่อนเขียน Expected ที่ชัดเจน

1. **ขอบเขต SLA "ครบ 24 ชม. พอดี"** — นับ inclusive/exclusive? (TC-17-03, TC-17-07) BRD ระบุ "ไม่เกิน 24 ชม." แต่ไม่ชี้พฤติกรรมที่จุดพอดี
2. **SLA นับข้ามวันหยุด** — BRD บอก "นับ 24 ชม." แต่บางจุดพูดถึงวันทำการ ต้อง confirm ว่าหยุดเสาร์-อาทิตย์มีผลต่อการนับหรือไม่ (TC-17-13)
3. **Raw Data Lead Source — แสดงหลายช่องทาง (comma)** — Issue #105 ยังสถานะ Recheck ว่าจะแสดง `,` หรือไม่
4. **จำนวน Campaign สูงสุดต่อลูกค้า/วัน** — BRD ระบุ "ไม่มี Logic ตายตัว" → ไม่มี cap ให้ทดสอบ (ยืนยัน)
5. **การแก้ Campaign หลังอนุมัติ** — ยังไม่ระบุชัดว่าล็อกหรือต้องขออนุมัติใหม่ (TC-08-05)
6. **Frequency การ Sync Customer/RFM จาก QuickSight** — BRD ระบุ Daily 23:00 แต่มี comment ว่าคณิตศาสตร์ประมวลผล monthly → confirm รอบจริง
7. **Performance/Volume** — ปริมาณ UTM data และระยะเวลาจัดเก็บยังไม่ระบุชัด (ผลต่อ Non-functional test)

---

## 6. แนวทาง Non-Functional Test (เบื้องต้น)

| ด้าน | สิ่งที่ควรทดสอบ |
|---|---|
| Performance | Batch ดึงข้อมูล Daily 23:00 เสร็จก่อน 08:00 (ก่อน Automail), การส่ง Campaign จำนวนมาก |
| Security | แยกสิทธิ์ Maker/Checker, การเข้าถึง Lead เฉพาะ LC เจ้าของ, VPN/VDI สำหรับ WFH |
| Integration | API FB/Google Ads, Infobip SMS, OSSS, UW, NBS, QuickSight/S3 |
| Data Integrity | Update vs Insert ไม่เกิด duplicate, ยึด CIS เป็น primary |
| Scheduling | Automail ตรงเวลา (08:00, 09:00, 13:00), SLA timer, Retention 3 เดือน |
| Compatibility | LC Connect บนมือถือ, การแสดงผล Email/Line รูปภาพ |

---
*จัดทำจาก BRD_V0.1 — ใช้คู่กับ `BRD_Summary_Workflow.md` (workflow) และ `brd_clean.txt` (ต้นฉบับ)*

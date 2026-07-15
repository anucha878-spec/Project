// ===== MCMP Test Artifacts — Source Data =====
// ใช้ร่วมกันระหว่าง build-excel.js และ build-csv.js

const projectOverview = [
  ['หัวข้อ', 'รายละเอียด'],
  ['Project Code', '20240278'],
  ['Project Name', 'Marketing Campaign Management Platform (MCMP / New System)'],
  ['Document', 'Business Requirement Document & Workflow v0.1 (07/05/2569)'],
  ['Owner', 'ฝ่ายการตลาด — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)'],
  ['ผู้จัดทำ', 'ชลลัดดา เจียรธีรวิทย์'],
  ['BA', 'ภิรญา (piraya.ph)'],
  ['วัตถุประสงค์ระบบ', 'แพลตฟอร์มกลางฝ่ายการตลาด: รวมข้อมูลลูกค้าเป็น Single View, สร้าง Customer Segment (RFM/CLV), สร้าง/ส่ง Campaign หลายช่องทาง, เชื่อม FB/Google Ads, บริหารจัดการ Lead'],
  ['ช่องทางส่ง Campaign', 'SMS / Email / Line Ocean Connect / Ocean Club App'],
  ['กระบวนการหลัก', '01 Data Ingestion | 02 Campaign Setting & Send | 03 Lead Management'],
  ['ระบบที่เกี่ยวข้อง', 'CIS, AS/400, LineOA, OSSS, NBS, GA4, HR, S3/Glue/Athena, QuickSight, GrowthAI, Infobip, Facebook Ads, Google Ads, LC Connect, UW'],
  ['Business Rule สำคัญ', 'ยึด CIS เป็นหลัก / Exclude Consent=No & Do-not-contact / Maker-Checker / SLA Lead 24 ชม. / Lead Scoring Hot-Warm / Retention 3 เดือน'],
  ['เอกสารชุดนี้', 'Test Design + Test Cases (180 TC, รวม GrowthAi +25) สำหรับ Software Tester'],
];

const processWorkflows = [
  ['Process', 'Step ID', 'ขั้นตอน (Process Step)', 'Business Rule / เงื่อนไขสำคัญ'],
  ['01 Data Ingestion', '01-1', 'Update/Insert ข้อมูลจากแหล่งต้นทางเข้า MCMP', 'Daily 23:00 / Realtime ตามแหล่ง; Update ไม่สร้างซ้ำ'],
  ['01 Data Ingestion', '01-2', 'ตรวจจับข้อผิดพลาด', 'สำเร็จ→01-3+01-4 ; ล้มเหลว→01-4'],
  ['01 Data Ingestion', '01-3', 'จัดเก็บข้อมูลลงระบบส่วนกลาง', '-'],
  ['01 Data Ingestion', '01-4', 'Automail แจ้งผลสำเร็จ/ไม่สำเร็จ', 'ส่ง 08:00 ทุกวัน; ไม่พบไฟล์ใน Path ส่ง 09:00'],
  ['01 Data Ingestion', '01-5', 'Upload ไฟล์ Campaign & Activity ผ่าน UI', 'csv เท่านั้น, ≤5MB, Weekly'],
  ['01 Data Ingestion', '01-6', 'ตรวจข้อผิดพลาดการ upload', '-'],
  ['01 Data Ingestion', '01-7', 'แสดง Popup แจ้งเตือน', '4 กรณี: ประเภท/ขนาดไฟล์, โครงสร้าง/ชื่อคอลัมน์, ข้อมูลซ้ำ, error ขณะบันทึก'],
  ['01 Data Ingestion', '01-0-4', 'Maker/Checker นำเข้า Campaign & Activity', 'Upload→ตรวจ→อนุมัติ/ไม่อนุมัติ(ระบุเหตุผล)→บันทึก CIS→Email'],
  ['02 Campaign', '02-1', 'คณิตศาสตร์วิเคราะห์ + Dashboard/Segment บน QuickSight', '-'],
  ['02 Campaign', '02-2', 'ดึง Customer + RFM จาก Dashboard เข้า MCMP', 'Manual คลิกประมวลผล'],
  ['02 Campaign', '02-3', 'สร้าง Customer Segment + เงื่อนไข', 'ชื่อห้ามซ้ำ, Active/Inactive, Clone, Filter หลาย attribute, Exclude Consent No & Do-not-contact, Export Raw Data'],
  ['02 Campaign', '02-4', 'Manual ส่ง Audience ไป FB/Google Ads', 'Customer Match ผ่าน API'],
  ['02 Campaign', '02-5', 'สร้าง Campaign + เงื่อนไข', 'ชื่อห้ามซ้ำ, เลือก Segment/ช่องทาง/Message, ตั้งเวลา 3 แบบ, Tag, Retarget, นับ Sent/Open/Click'],
  ['02 Campaign', '02-6', 'สร้าง Message แยกช่องทาง', 'SMS=Text+Link, Email/Line=Image+Text+Link, App=Text+Link, Personalization, Shortlink(Infobip), SMS char+credit'],
  ['02 Campaign', '02-7', 'Maker/Checker ขออนุมัติส่ง Campaign', '02-7-1 Maker สร้าง+ผูก Segment ; 02-7-2 Approver อนุมัติ/ไม่อนุมัติ'],
  ['02 Campaign', '02-8', 'ระบบส่ง Campaign ตามเวลา/ช่องทาง', 'ยึดเบอร์/อีเมล CIS; ส่งไม่สำเร็จสรุปจำนวน+user'],
  ['02 Campaign', '02-9', 'ลูกค้าได้รับ Campaign', '-'],
  ['02 Campaign', '02-10', 'เก็บผล + Action ลูกค้า', 'นับผู้รับ/Open/Click/Unique, timestamp ราย user, Export Raw Data, Automail Monthly (วันที่1 13:00)'],
  ['03 Lead', '03-01', 'นำเข้ารายชื่อ LC จาก OSSS', '≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง, ไม่จำกัดครั้ง/วัน, auto-update'],
  ['03 Lead', '03-02/03/04', 'ตรวจ error → Popup / จัดเก็บ', '-'],
  ['03 Lead', '03-05', 'บันทึก Lead จากช่องทาง', 'Website auto, FB/Contact Center manual(VPN/VDI ถ้า WFH), CRM Import; Dedup'],
  ['03 Lead', '03-06', 'ซื้อผ่านตัวแทนหรือไม่', 'Online→03-07 ; ตัวแทน→03-08'],
  ['03 Lead', '03-07', 'ส่ง Email ให้ Digital Sale', 'Realtime + Google Sheet'],
  ['03 Lead', '03-08', 'เกณฑ์ Auto Assign + Lead Scoring', 'จังหวัด→ผลงานทุกงวด→บางงวด→Round Robin; tie-break กรมธรรม์ใหม่ 3 งวด(ไม่รวม PA)→รายได้สะสม; Hot/Warm'],
  ['03 Lead', '03-09', 'Manual Assign Lead', 'เลือก Lead+LC, บันทึก Agent Code/วันเวลา/ผู้ assign'],
  ['03 Lead', '03-10', 'แจ้งเตือน New Lead ผ่าน LC Connect', 'ข้อความ "Lead ใหม่: คุณ[ชื่อ] สนใจ[แบบประกัน]..."'],
  ['03 Lead', '03-11', 'LC ติดต่อลูกค้า', 'My Lead menu, list, detail, ปุ่มโทรออก, Calendar'],
  ['03 Lead', '03-12', 'SLA การติดต่อ', 'Hot นับจากเวลานัด / Warm นับจาก assign (9-18น.); เกิน→ดึงคืน Re-assign + ระงับ LC (5/10/15/20/ถาวร) + Email การตลาด 09:00'],
  ['03 Lead', '03-13', 'บันทึกผลการติดต่อ', 'ติดต่อได้(ขอคิด/ไม่ซื้อ/ซื้อ+UW lookup), ติดต่อไม่ได้; ติดตาม ≤7 วัน; 3 ครั้ง→ปิดเคส; Retention 3 เดือน'],
  ['03 Lead', '03-14', 'รายงานผล Lead', 'Automail Daily 09:00, Export CSV/Excel'],
];

const rtm = [
  ['Process Step ID', 'Requirement (ย่อ)', 'Scenario', 'Test Case Range', 'Priority'],
  ['01-1', 'Update/Insert ข้อมูลเข้า MCMP', 'TS-01', 'TC-01-01..04', 'P1'],
  ['01-2', 'ตรวจจับ error', 'TS-01', 'TC-01-05..06', 'P1'],
  ['01-4', 'Automail แจ้งผล', 'TS-01', 'TC-01-07..09', 'P2'],
  ['01-5/01-7', 'Upload + Popup validation', 'TS-02', 'TC-02-01..09', 'P1'],
  ['01-0-4', 'Maker/Checker นำเข้า', 'TS-03', 'TC-03-01..05', 'P1'],
  ['02-3', 'Customer Segment + Filter + Exclude (+GrowthAi)', 'TS-04', 'TC-04-01..17', 'P1'],
  ['02-4', 'Sync Audience ไป Ads', 'TS-05', 'TC-05-01..03', 'P2'],
  ['02-5', 'Campaign + เวลา + Tag + Counter (+GrowthAi Flow Builder)', 'TS-06', 'TC-06-01..23', 'P1'],
  ['02-6', 'Message แยกช่องทาง + Shortlink (+GrowthAi)', 'TS-07', 'TC-07-01..11', 'P1'],
  ['02-7', 'Maker/Checker ส่ง Campaign', 'TS-08', 'TC-08-01..05', 'P1'],
  ['02-8/02-9', 'ส่ง Campaign + ยึด CIS', 'TS-09', 'TC-09-01..06', 'P1'],
  ['02-10', 'เก็บผล + Monthly Report (+GrowthAi Tracking cols)', 'TS-10', 'TC-10-01..10', 'P1'],
  ['03-01', 'นำเข้า LC จาก OSSS', 'TS-11', 'TC-11-01..07', 'P1'],
  ['03-05', 'บันทึก Lead + Dedup', 'TS-12', 'TC-12-01..12', 'P1'],
  ['03-06/07', 'Online vs ตัวแทน', 'TS-13', 'TC-13-01..04', 'P2'],
  ['03-08', 'Auto Assign + Lead Scoring', 'TS-14', 'TC-14-01..14', 'P1'],
  ['03-09', 'Manual Assign', 'TS-15', 'TC-15-01..05', 'P2'],
  ['03-10/11', 'LC Connect Lead List/Detail', 'TS-16', 'TC-16-01..06', 'P2'],
  ['03-12', 'SLA + ดึงคืน + ระงับ LC', 'TS-17', 'TC-17-01..14', 'P1'],
  ['03-13', 'บันทึกผล + UW + 3 ครั้ง + Retention', 'TS-18', 'TC-18-01..16', 'P1'],
  ['03-14', 'รายงาน Automail + Export', 'TS-19', 'TC-19-01..04', 'P2'],
];

const scenarios = [
  ['Scenario ID', 'Scenario', 'Module'],
  ['TS-01', 'ดึงข้อมูลจากแหล่งต้นทางสำเร็จ/ล้มเหลว และการแจ้งผล', '01 Data Ingestion'],
  ['TS-02', 'อัปโหลดไฟล์ Campaign/Activity และการ Validate ไฟล์', '01 Data Ingestion'],
  ['TS-03', 'อนุมัติ/ไม่อนุมัติการนำเข้า Campaign & Activity (Maker/Checker)', '01 Data Ingestion'],
  ['TS-04', 'สร้างและกำหนดเงื่อนไข Customer Segment (รวม Exclude)', '02 Campaign'],
  ['TS-05', 'ส่ง Audience ไป Facebook/Google Ads', '02 Campaign'],
  ['TS-06', 'สร้าง Campaign, ตั้งเวลาส่ง, Tag, Retarget, ตัวนับผล', '02 Campaign'],
  ['TS-07', 'สร้าง Message แยกช่องทาง, Personalization, Shortlink, SMS credit', '02 Campaign'],
  ['TS-08', 'ขออนุมัติและอนุมัติการส่ง Campaign', '02 Campaign'],
  ['TS-09', 'ระบบส่ง Campaign ตามเวลา/ช่องทาง และ fallback CIS', '02 Campaign'],
  ['TS-10', 'เก็บผลตอบรับ + รายงานสรุปรายเดือน', '02 Campaign'],
  ['TS-11', 'นำเข้ารายชื่อ LC จาก OSSS', '03 Lead'],
  ['TS-12', 'บันทึก Lead จากทุกช่องทาง + ตรวจซ้ำ', '03 Lead'],
  ['TS-13', 'แยกเส้นทาง Online vs ตัวแทน', '03 Lead'],
  ['TS-14', 'Auto Assign Lead + Lead Scoring', '03 Lead'],
  ['TS-15', 'Manual Assign Lead', '03 Lead'],
  ['TS-16', 'แจ้งเตือนและจัดการ Lead บน LC Connect', '03 Lead'],
  ['TS-17', 'SLA การติดต่อ + ดึง Lead คืน + ระงับ LC', '03 Lead'],
  ['TS-18', 'บันทึกผลการติดต่อ + UW + 3 ครั้ง + Retention', '03 Lead'],
  ['TS-19', 'รายงานผล Lead', '03 Lead'],
];

// ===== Master Test Cases =====
// fields: id, scenario, trace, title, type, priority, precondition, steps, expected, testData
const TC = (id, scenario, trace, title, type, priority, precondition, steps, expected, testData='') =>
  ({ id, scenario, trace, title, type, priority, precondition, steps, expected, testData });

const testCases = [
  // TS-01
  TC('TC-01-01','TS-01','01-1','ดึง Customer Daily สำเร็จ','Positive','P1','มีข้อมูลใน CIS/DW','รอ batch 23:00 หรือ trigger ดึงข้อมูล','ข้อมูล Customer ถูก Insert/Update เข้า MCMP ครบ (Inforce + ไม่ Inforce, ทุกแบบประกัน)','Customer ปกติ'),
  TC('TC-01-02','TS-01','01-1','Update ข้อมูลที่เปลี่ยนแปลง (ไม่สร้างซ้ำ)','Positive','P1','Customer เดิมมีในระบบ + ต้นทางแก้ไข','1. แก้ข้อมูล Customer ที่ต้นทาง\n2. รัน batch','ระเบียนเดิมถูก Update ไม่เกิด record ซ้ำ','Customer เดิม + แก้ไข'),
  TC('TC-01-03','TS-01','01-1-(2)','ดึง Contact Center / FB Inbox Realtime','Positive','P2','มี case ใหม่ใน NBS','สร้าง case ใหม่ใน NBS','ข้อมูลเข้า MCMP แบบ Realtime',''),
  TC('TC-01-04','TS-01','01-1-(5)','ตัวแทน OSSS อัปเดต Near-realtime','Positive','P2','OSSS มีการแก้ไขข้อมูล','แก้คุณวุฒิ/ตำแหน่งใน OSSS','MCMP อัปเดตตามอัตโนมัติ',''),
  TC('TC-01-05','TS-01','01-2','ดึงข้อมูลไม่สำเร็จ → ไป 01-4','Negative','P1','-','ทำให้ source ล่ม/ไฟล์เสีย แล้วรัน batch','ระบบจับ error ข้ามไปขั้นแจ้งผล ไม่บันทึกข้อมูลผิด',''),
  TC('TC-01-06','TS-01','01-2/01-3','ดึงสำเร็จ → จัดเก็บ + แจ้งผล','Positive','P1','source ปกติ','รัน batch','บันทึกลงระบบส่วนกลาง + ส่ง Automail สำเร็จ',''),
  TC('TC-01-07','TS-01','01-4','Automail แจ้งผลสำเร็จ 08:00','Positive','P2','batch เสร็จ','ตรวจเวลา/ผู้รับ/Template','อีเมลส่งถึงฝ่ายการตลาด 08:00 ตาม Template_Marketing Campaign',''),
  TC('TC-01-08','TS-01','01-0-(5)','ไม่พบไฟล์ใน Path → Automail 09:00','Negative','P2','-','ลบไฟล์ออกจาก Path แล้วรัน batch','ส่ง Automail แจ้งฝ่ายที่เกี่ยวข้อง 09:00',''),
  TC('TC-01-09','TS-01','01-1-(6)','ดึง RFM แบบ Manual','Positive','P2','มีไฟล์ RFM','กดปุ่มประมวลผลบนหน้าจอ','ข้อมูล RFM ถูกนำเข้า','RFM Actuary'),
  // TS-02
  TC('TC-02-01','TS-02','01-5','Upload csv ถูกต้อง','Positive','P1','ไฟล์ csv 4MB column ครบ','Upload ผ่าน UI','นำเข้าสำเร็จ ไป 01-3','csv 4MB ถูกต้อง'),
  TC('TC-02-02','TS-02','01-7(1)','Upload ไฟล์ไม่ใช่ csv','Negative','P1','ไฟล์ .xlsx/.pdf','Upload','Popup: อัปโหลดเป็น csv เท่านั้น','xlsx/pdf'),
  TC('TC-02-03','TS-02','01-7(1)','Upload ไฟล์ = 5MB พอดี','Boundary','P2','ไฟล์ csv 5.00MB','Upload','นำเข้าสำเร็จ (ขอบเขตยอมรับ)','csv 5.00MB'),
  TC('TC-02-04','TS-02','01-7(1)','Upload ไฟล์ > 5MB','Boundary','P1','ไฟล์ csv 5.01MB','Upload','Popup: เกินขนาดที่กำหนด','csv 5.01MB'),
  TC('TC-02-05','TS-02','01-7(2)','คอลัมน์ไม่ครบ/ชื่อผิด','Negative','P1','csv ตัดคอลัมน์ออก','Upload','Popup: โครงสร้าง/ชื่อคอลัมน์ไม่ถูกต้อง','csv column ผิด'),
  TC('TC-02-06','TS-02','01-7(3)','ข้อมูลซ้ำกับที่เคยอัปโหลด','Negative','P1','เคย upload ไฟล์นี้แล้ว','Upload ไฟล์เดิมซ้ำ','Popup: พบข้อมูลซ้ำ ไม่บันทึก','csv ซ้ำ'),
  TC('TC-02-07','TS-02','01-7(4)','เกิด error ระหว่างบันทึก','Negative','P2','จำลอง DB error','Upload','Popup: เกิดข้อผิดพลาด กรุณาลองใหม่',''),
  TC('TC-02-08','TS-02','01-7','ไฟล์ว่าง / 0 byte','Negative','P2','csv ว่าง','Upload','ระบบปฏิเสธอย่างเหมาะสม ไม่ crash','csv 0 byte'),
  TC('TC-02-09','TS-02','01-5','csv อักขระพิเศษ/ภาษาไทย','Boundary','P2','csv UTF-8 ไทย','Upload','นำเข้าได้ถูกต้อง ไม่เพี้ยน','csv ไทย UTF-8'),
  // TS-03
  TC('TC-03-01','TS-03','01-0-4-1/2','Maker upload → แสดงรายการตรวจ','Positive','P1','สิทธิ์ Maker','Upload + เปิดดูรายการ','ระบบแสดงรายการข้อมูลให้ผู้บริหารตรวจ',''),
  TC('TC-03-02','TS-03','01-0-4-3/4','Checker Approve → บันทึกเข้า CIS','Positive','P1','สิทธิ์ Approver','กด Approve','บันทึกข้อมูลเข้า CIS + ส่ง Email แจ้งผล',''),
  TC('TC-03-03','TS-03','01-0-4-3/5','Checker Reject + ระบุเหตุผล','Negative','P1','สิทธิ์ Approver','กด Reject + กรอกเหตุผล','ไม่บันทึกข้อมูล + Email แจ้งผลพร้อมเหตุผล',''),
  TC('TC-03-04','TS-03','01-0-4','Maker ไม่สามารถ Approve งานตัวเอง','Negative','P1','login เป็น Maker','พยายามอนุมัติงานตนเอง','ระบบไม่อนุญาต (แยกบทบาท Maker/Checker)',''),
  TC('TC-03-05','TS-03','01-0-4-5','Reject โดยไม่กรอกเหตุผล','Negative','P2','สิทธิ์ Approver','กด Reject เว้นเหตุผลว่าง','ระบบบังคับให้กรอกเหตุผล',''),
  // TS-04
  TC('TC-04-01','TS-04','02-3.1','สร้าง Segment ชื่อใหม่','Positive','P1','-','สร้าง Segment ชื่อไม่ซ้ำ','บันทึกสำเร็จ',''),
  TC('TC-04-02','TS-04','02-3.1','ตั้งชื่อ Segment ซ้ำ','Negative','P1','มี Segment ชื่อนี้แล้ว','สร้างชื่อที่มีอยู่แล้ว','ระบบปฏิเสธ "ห้ามตั้งชื่อซ้ำ"',''),
  TC('TC-04-03','TS-04','02-3.1','Active/Inactive โดยไม่ลบ','Positive','P2','มี Segment','toggle สถานะ','สถานะเปลี่ยน ข้อมูลยังอยู่',''),
  TC('TC-04-04','TS-04','02-3.1','Clone Segment','Positive','P2','มี Segment','กด Clone','ได้ Segment ใหม่ที่ copy เงื่อนไข',''),
  TC('TC-04-05','TS-04','02-3.2','Filter หลาย Attribute ผสมกัน','Positive','P1','-','เลือก gender + age range + province','ได้กลุ่มลูกค้าตรงทุกเงื่อนไข (AND)','Customer หลากหลาย'),
  TC('TC-04-06','TS-04','02-3.2','Filter ด้วย RFM Group','Positive','P1','มีข้อมูล RFM','เลือก RFM = Champions','ได้เฉพาะลูกค้ากลุ่มนั้น','RFM 11 กลุ่ม'),
  TC('TC-04-07','TS-04','02-3.2','Exclude Consent = No','Negative','P1','-','เปิด exclude Consent No','ลูกค้า Consent=No ไม่อยู่ในกลุ่ม','Customer Consent=No'),
  TC('TC-04-08','TS-04','02-3.2','Exclude Do-not-contact list','Negative','P1','-','เปิด exclude do-not-contact','เบอร์ที่อยู่ใน do-not-contact ถูกตัดออก','Customer ใน do-not-contact'),
  TC('TC-04-09','TS-04','02-3.3','แสดง metadata Segment','Positive','P3','มี Segment','เปิดดู Segment','แสดง Created by/on, Modified, running no ถูกต้อง',''),
  TC('TC-04-10','TS-04','02-3.4','Export Raw Data by Campaign','Positive','P2','มี Segment','กด Export','ได้ไฟล์ Raw Data ตาม Template',''),
  // TS-05
  TC('TC-05-01','TS-05','02-4','ส่ง Audience ไป Facebook Ads','Positive','P2','มี Segment','เลือก Segment + Manual คลิกส่ง FB Ads','FB Ads รับข้อมูลทำ Customer Match',''),
  TC('TC-05-02','TS-05','02-4','ส่ง Audience ไป Google Ads','Positive','P2','มี Segment','เลือก Segment + ส่ง Google Ads','Google Ads รับข้อมูล',''),
  TC('TC-05-03','TS-05','02-4','ส่งเฉพาะ Mobile No. แยกตาม Segment','Positive','P2','มี Segment','ส่ง Audience','ส่งเฉพาะ Mobile No. ของ Customer ตาม Segment',''),
  // TS-06
  TC('TC-06-01','TS-06','02-5.1','สร้าง Campaign ชื่อไม่ซ้ำ','Positive','P1','-','สร้าง Campaign','บันทึกสำเร็จ',''),
  TC('TC-06-02','TS-06','02-5.1','ตั้งชื่อ Campaign ซ้ำ','Negative','P1','มีชื่อนี้แล้ว','สร้างชื่อซ้ำ','ปฏิเสธ',''),
  TC('TC-06-03','TS-06','02-5.1','เลือกหลายช่องทาง','Positive','P1','มี Message ทุกช่องทาง','เลือกครบ 4 ช่องทาง','ผูก Message ได้ทุกช่องทาง',''),
  TC('TC-06-04','TS-06','02-5.1','ส่งทันที (Immediate)','Positive','P1','Campaign อนุมัติแล้ว','เลือก "ส่งทันที"','ส่งทันทีหลังอนุมัติ',''),
  TC('TC-06-05','TS-06','02-5.1','ส่งตามเวลาที่กำหนด','Positive','P1','-','ตั้งเวลาในอนาคต','ส่งตรงเวลาที่กำหนด',''),
  TC('TC-06-06','TS-06','02-5.1','แก้เวลาส่งก่อนถึงกำหนด','Positive','P2','Campaign ตั้งเวลาไว้','แก้เวลาก่อนส่ง','เวลาส่งอัปเดต',''),
  TC('TC-06-07','TS-06','02-5.1','หลาย Tag / Tag ซ้ำชื่อได้','Positive','P3','-','ใส่ 2 Tag ชื่อซ้ำ Campaign อื่น','ระบบยอมรับ',''),
  TC('TC-06-08','TS-06','02-5.1','สถานะ Publish/Off','Positive','P2','มี Campaign','เปลี่ยนสถานะ','แสดงสถานะถูกต้อง',''),
  TC('TC-06-09','TS-06','02-5.1','Retarget จากกลุ่ม Open/Click','Positive','P2','Campaign ส่งแล้ว','สร้าง retarget ตาม Action=Click','ส่งข้อมูลกลุ่มไป FB/Google',''),
  TC('TC-06-10','TS-06','02-5/02-10','นับ Sent = เฉพาะที่ส่งสำเร็จ','Positive','P1','ส่ง 100 สำเร็จ 95','ตรวจตัวเลข Sent','Sent = 95','ส่ง 100 fail 5'),
  TC('TC-06-11','TS-06','02-10.2','นับ Open = เฉพาะคนเปิดอ่าน','Positive','P1','40 คนเปิด','ตรวจ Open','Open = 40',''),
  TC('TC-06-12','TS-06','02-10.4','นับ Unique Click (ไม่นับซ้ำ)','Boundary','P1','1 คนคลิก 3 ครั้ง','ตรวจ Unique Click','Unique Click +1',''),
  // TS-07
  TC('TC-07-01','TS-07','02-6.1','สร้าง Message ชื่อไม่ซ้ำ','Positive','P2','-','สร้าง Message','สำเร็จ',''),
  TC('TC-07-02','TS-07','02-6.1','SMS = Text + Link เท่านั้น','Positive','P2','-','สร้าง Message SMS','บังคับรูปแบบ Text+Link',''),
  TC('TC-07-03','TS-07','02-6.1','Email/Line = Image + Text + Link','Positive','P2','-','สร้าง Message Email','รองรับรูปภาพ+ข้อความ+ลิงก์',''),
  TC('TC-07-04','TS-07','02-6.1','Personalization variable','Positive','P1','มีข้อมูลลูกค้า','ใส่ตัวแปร {ชื่อ},{เลขกรมธรรม์}','Preview/ส่งจริงแสดงข้อมูลลูกค้าจริง','Customer ชื่อ+กรมธรรม์'),
  TC('TC-07-05','TS-07','02-6.1','แปลง Link เป็น Shortlink (Infobip)','Positive','P2','-','ติ๊ก shorten link','Link ถูกย่อ',''),
  TC('TC-07-06','TS-07','02-6','นับ Character & Credit SMS','Positive','P2','-','พิมพ์ข้อความ SMS','แสดงจำนวนตัวอักษร + credit ที่ใช้',''),
  TC('TC-07-07','TS-07','02-6','SMS ภาษาไทยยาว (multi-part)','Boundary','P2','-','ใส่ข้อความไทยยาว','credit คำนวณตามจำนวน segment ถูกต้อง','SMS ไทยยาว'),
  TC('TC-07-08','TS-07','02-6.1','Preview ข้อความ','Positive','P3','-','กด Preview','แสดงตัวอย่างตรงช่องทาง',''),
  TC('TC-07-09','TS-07','02-6.1','Clone Message','Positive','P3','มี Message','Clone','ได้ Message ใหม่',''),
  // TS-08
  TC('TC-08-01','TS-08','02-7-1','Maker สร้าง+ผูก Segment → ขออนุมัติ','Positive','P1','สิทธิ์ Maker','สร้าง Campaign + ผูก Segment + ส่งขออนุมัติ','สถานะ "รออนุมัติ"',''),
  TC('TC-08-02','TS-08','02-7-2','Approver อนุมัติ → ส่งตาม 02-8','Positive','P1','สิทธิ์ Approver','กด Approve','ระบบดำเนินการส่ง Campaign',''),
  TC('TC-08-03','TS-08','02-7-2','Approver ไม่อนุมัติ → ไม่ส่ง','Negative','P1','สิทธิ์ Approver','กด Reject','ระบบไม่ส่ง Campaign',''),
  TC('TC-08-04','TS-08','02-7','Maker ไม่สามารถอนุมัติงานตนเอง','Negative','P1','login Maker','พยายามอนุมัติ','ไม่อนุญาต',''),
  TC('TC-08-05','TS-08','02-7','แก้ Campaign หลังอนุมัติแล้ว','Negative','P2','Campaign อนุมัติแล้ว','พยายามแก้หลัง Approve','ตรวจ behavior (ควรล็อก/ขออนุมัติใหม่) — ต้อง clarify',''),
  // TS-09
  TC('TC-09-01','TS-09','02-8','ส่งตรงตามเวลาที่ตั้ง','Positive','P1','Campaign อนุมัติ + ตั้งเวลา','ถึงเวลา schedule','ส่งครบทุกช่องทางที่ระบุ',''),
  TC('TC-09-02','TS-09','02-8','ยึดเบอร์/อีเมลจาก CIS','Positive','P1','ลูกค้ามีข้อมูลหลายแหล่ง','ส่ง Campaign','ใช้เบอร์/อีเมลจาก CIS เท่านั้น','Customer หลายแหล่ง'),
  TC('TC-09-03','TS-09','02-8','ส่งไม่สำเร็จบางราย → สรุปจำนวน+user','Negative','P1','-','จำลองส่ง fail 5 ราย','ระบบสรุปจำนวน + รายชื่อที่ fail','ส่ง fail 5'),
  TC('TC-09-04','TS-09','02-8','ส่ง SMS ผ่าน Infobip','Positive','P2','-','ส่งช่องทาง SMS','ลูกค้าได้รับ SMS',''),
  TC('TC-09-05','TS-09','02-9','ลูกค้าได้รับครบทุกช่องทาง','Positive','P2','-','ตรวจปลายทาง','ได้รับตามช่องทางที่ระบุ',''),
  TC('TC-09-06','TS-09','02-8','ลูกค้าใน do-not-contact ไม่ได้รับ','Negative','P1','มีลูกค้า do-not-contact ใน segment','ส่ง Campaign','ไม่ส่งให้รายนั้น','Customer do-not-contact'),
  // TS-10
  TC('TC-10-01','TS-10','02-10.1','เก็บจำนวนผู้รับต่อ Campaign','Positive','P1','ส่งเสร็จ','ตรวจตัวเลข','บันทึกจำนวนถูกต้อง',''),
  TC('TC-10-02','TS-10','02-10.5','เก็บวัน-เวลาเปิดอ่านราย user','Positive','P2','user เปิดอ่าน','ตรวจ log','บันทึก timestamp ราย user',''),
  TC('TC-10-03','TS-10','02-10','Export Raw Data by User','Positive','P2','มีข้อมูล','กด Export','ได้ไฟล์ตาม Template',''),
  TC('TC-10-04','TS-10','02-10','Automail Monthly Report','Positive','P2','สิ้นเดือน','วันที่ 1 เดือนถัดไป 13:00','ส่งสรุปรายเดือนตรงเวลา',''),
  TC('TC-10-05','TS-10','02-10','เก็บข้อมูลจนกว่าจะสั่งลบ','Positive','P3','ผ่านไปหลายเดือน','ตรวจข้อมูล','ข้อมูลยังอยู่',''),
  // TS-11
  TC('TC-11-01','TS-11','03-01.1','ดึง LC ด้วยตนเอง','Positive','P1','เชื่อม OSSS','เลือก LC + ดึง','ข้อมูล LC เข้าระบบครบ (Agent Code, ชื่อ, ตำแหน่ง, คุณวุฒิ, ผลงาน, สาขา, จังหวัด)',''),
  TC('TC-11-02','TS-11','03-01.1','เลือก 10 รายชื่อ/จังหวัด พอดี','Boundary','P1','-','เลือก 10 ชื่อใน 1 จังหวัด','ยอมรับ',''),
  TC('TC-11-03','TS-11','03-01.1','เลือก 11 รายชื่อ/จังหวัด','Boundary','P1','-','เลือก 11 ชื่อ','ปฏิเสธ/เตือนเกินกำหนด',''),
  TC('TC-11-04','TS-11','03-01.1','เลือก 10 จังหวัด/ครั้ง พอดี','Boundary','P1','-','เลือก 10 จังหวัด','ยอมรับ',''),
  TC('TC-11-05','TS-11','03-01.1','เลือก 11 จังหวัด/ครั้ง','Boundary','P1','-','เลือก 11 จังหวัด','ปฏิเสธ',''),
  TC('TC-11-06','TS-11','03-01.1','ดึงหลายครั้งต่อวัน','Positive','P2','-','ดึงซ้ำหลายครั้ง','ไม่จำกัดจำนวนครั้ง',''),
  TC('TC-11-07','TS-11','03-01.4','LC แก้ข้อมูลใน OSSS → auto update','Positive','P2','LC มีในระบบ','แก้คุณวุฒิใน OSSS','MCMP อัปเดตอัตโนมัติ',''),
  // TS-12
  TC('TC-12-01','TS-12','03-05.1','Lead จาก Website (auto)','Positive','P1','เชื่อมเว็บไซต์','submit web form','บันทึกเข้าระบบอัตโนมัติ',''),
  TC('TC-12-02','TS-12','03-05.2','Lead จาก Facebook (manual)','Positive','P1','สิทธิ์ User','บันทึกทีละราย','บันทึกสำเร็จ',''),
  TC('TC-12-03','TS-12','03-05.3','Contact Center ผ่าน VPN/VDI (WFH)','Positive','P2','WFH + VPN','บันทึก Lead','บันทึกได้',''),
  TC('TC-12-04','TS-12','03-05.3','บันทึก Contact Center ไม่ผ่าน VPN (WFH)','Negative','P2','WFH ไม่ต่อ VPN','พยายามบันทึก','ไม่สามารถบันทึก',''),
  TC('TC-12-05','TS-12','03-05.4','Import Lead Excel/CSV (CRM)','Positive','P1','มีไฟล์','Import','นำเข้าหลายรายการ','ไฟล์ Lead CRM'),
  TC('TC-12-06','TS-12','03-05.6.1','Dedup 1 ช่องทาง — ยึดล่าสุด #2','Positive','P1','-','กรอกซ้ำ 2 ครั้งจาก Web','เก็บข้อมูล #2 (ล่าสุด)','Lead ซ้ำ Web'),
  TC('TC-12-07','TS-12','03-05.6.1','Dedup 1 ช่องทาง — แบบประกันต่างกัน','Positive','P1','-','#1 และ #2 แบบประกันต่างกัน','แสดงทั้ง 2 แบบประกัน',''),
  TC('TC-12-08','TS-12','03-05.6.1','Dedup 1 ช่องทาง — แบบประกันเดียวกัน','Positive','P2','-','#1=#2 แบบประกันเดียวกัน','แสดงแบบประกันเดียว',''),
  TC('TC-12-09','TS-12','03-05.6.2','Dedup 2 ช่องทาง (Web+FB)','Positive','P1','-','เบอร์เดียวกันจาก Web และ FB','ยึดล่าสุด + ระบุว่ามาจาก 2 ช่องทาง','Lead Web+FB'),
  TC('TC-12-10','TS-12','03-05.6.2','Dedup 2 ช่องทาง — แบบประกันต่างกัน','Positive','P2','-','แบบประกันต่างกัน','แสดงทั้ง 2 แบบประกัน',''),
  TC('TC-12-11','TS-12','03-05.6','Lead ซ้ำ assign LC คนเดียว','Positive','P1','-','Lead ซ้ำหลายครั้ง','assign LC คนเดียวกัน',''),
  TC('TC-12-12','TS-12','03-05.6','นับจำนวนครั้ง/ช่องทางที่ฝาก Lead','Positive','P2','-','ฝาก 3 ครั้ง','แสดงจำนวนครั้ง + ช่องทาง',''),
  // TS-13
  TC('TC-13-01','TS-13','03-06','ลูกค้าซื้อผ่าน Online','Positive','P2','Lead บันทึกแล้ว','เลือกช่องทาง Online','ระบบส่งข้อมูลไป Google Sheet Digital Sale → 03-07',''),
  TC('TC-13-02','TS-13','03-06','ลูกค้าซื้อผ่านตัวแทน','Positive','P2','Lead บันทึกแล้ว','เลือกช่องทางตัวแทน','เข้าสู่เงื่อนไข Auto Assign 03-08',''),
  TC('TC-13-03','TS-13','03-07','ส่ง Email ให้ Digital Sale (Realtime)','Positive','P2','Lead online','บันทึก Lead online','ส่ง Email Realtime (ชื่อ, เบอร์, ช่วงเวลา, จังหวัด, อีเมล, แบบประกัน)',''),
  TC('TC-13-04','TS-13','03-07','ข้อมูลใน Email Digital Sale ครบถ้วน','Positive','P3','-','ตรวจเนื้อหา Email','มีข้อมูลครบตาม BRD',''),
  // TS-14
  TC('TC-14-01','TS-14','03-08.3.1','Assign ตามจังหวัด (ลำดับ 1)','Positive','P1','มี LC จังหวัด A','Lead จังหวัด A เข้าระบบ','assign ให้ LC จังหวัด A','LC จังหวัด A'),
  TC('TC-14-02','TS-14','03-08.3.2/3','ผลงานทุกงวด > บางงวด','Positive','P1','2 LC จังหวัดเดียวกัน','Lead เข้า','เลือก LC ผลงานทุกงวดก่อน','LC ผลงานต่างระดับ'),
  TC('TC-14-03','TS-14','03-08','Tie-break จำนวนกรมธรรม์ใหม่ 3 งวด (ไม่รวม PA)','Positive','P1','ผลงานเท่ากัน','Lead เข้า','เรียงตามจำนวนกรมธรรม์ใหม่มาก→น้อย','LC กรมธรรม์ต่างกัน'),
  TC('TC-14-04','TS-14','03-08','Tie-break รายได้สะสม 3 งวด','Positive','P2','จำนวนกรมธรรม์เท่ากัน','Lead เข้า','เรียงตามรายได้สะสมมาก→น้อย',''),
  TC('TC-14-05','TS-14','03-08','Round Robin — LC ล่าสุดไปท้ายคิว','Positive','P1','มีหลาย LC ในคิว','assign Lead ติดกันหลายราย','กระจายหมุนเวียน ไม่กระจุก',''),
  TC('TC-14-06','TS-14','03-08','Assign Near-realtime','Positive','P1','-','บันทึก Lead','assign ภายในเวลาสั้น',''),
  TC('TC-14-07','TS-14','03-08','Assign ในวันหยุด','Positive','P1','-','บันทึก Lead วันหยุด','ยัง assign ได้เหมือนวันทำการ',''),
  TC('TC-14-08','TS-14','03-08','ไม่พบ candidate → Email การตลาด','Negative','P1','Lead จังหวัดไม่มี LC','Lead เข้า','ส่ง Email ให้การตลาด Manual Assign','Lead จังหวัดไม่มี LC'),
  TC('TC-14-09','TS-14','03-08','พบ candidate >1 → ตามเงื่อนไข/Manual','Positive','P1','หลาย LC เข้าเงื่อนไข','Lead เข้า','ใช้เกณฑ์ลำดับ หรือเข้าสู่ Manual Assign',''),
  TC('TC-14-10','TS-14','03-08','Lead Scoring = Hot','Positive','P1','-','Lead ระบุช่วงเวลา 09:00-12:00','Scoring = Hot Lead','Lead Hot'),
  TC('TC-14-11','TS-14','03-08','Lead Scoring = Warm','Positive','P1','-','Lead ไม่ระบุช่วงเวลา','Scoring = Warm Lead','Lead Warm'),
  TC('TC-14-12','TS-14','03-08','Assign LC คนเดียวต่อ 1 Lead','Positive','P1','-','Lead ใหม่','assign 1 LC เท่านั้น',''),
  TC('TC-14-13','TS-14','03-08','Dedup เบอร์ทุกช่องทาง/ทุกเวลา','Positive','P1','-','เบอร์ซ้ำเข้าหลายช่องทาง','จับได้ว่าเป็น Lead ซ้ำ',''),
  TC('TC-14-14','TS-14','03-08→03-10','Notify New Lead หลัง assign','Positive','P1','assign สำเร็จ','ตรวจ LC Connect','แจ้งเตือน LC ผ่าน LC Connect',''),
  // TS-15
  TC('TC-15-01','TS-15','03-09.1','แสดงรายการ Lead ที่ยังไม่มี LC','Positive','P2','มี Lead ค้าง','เปิดหน้า Manual Assign','แสดงข้อมูล Lead ครบ',''),
  TC('TC-15-02','TS-15','03-09.2/3','เลือก Lead + LC + Assign','Positive','P1','มี Lead + LC','เลือก Lead, เลือก LC, Assign','assign สำเร็จ',''),
  TC('TC-15-03','TS-15','03-09.4','บันทึก Agent Code + วันเวลา + ผู้ assign','Positive','P1','assign แล้ว','ตรวจ audit log','บันทึกครบ',''),
  TC('TC-15-04','TS-15','03-09.5','แจ้งเตือน New Lead หลัง Manual Assign','Positive','P1','assign สำเร็จ','ตรวจ LC Connect','LC ได้รับแจ้งเตือน',''),
  TC('TC-15-05','TS-15','03-09','Assign Lead ที่มี LC อยู่แล้ว (ซ้ำ)','Negative','P2','Lead มี LC แล้ว','พยายาม assign ซ้ำ','ป้องกัน/เตือน',''),
  // TS-16
  TC('TC-16-01','TS-16','03-11.1','เข้าถึง Lead จากเมนู My Lead','Positive','P2','LC มี Lead','เปิด My Lead','เห็นรายการ Lead',''),
  TC('TC-16-02','TS-16','03-11.1','เข้าถึง Lead จาก Notification','Positive','P2','มีแจ้งเตือน','กดแจ้งเตือน','เข้าหน้า Lead',''),
  TC('TC-16-03','TS-16','03-11.2','Lead Status ถูกต้อง','Positive','P2','-','ดูรายการ','แสดงสถานะ ยังไม่ติดต่อ/ติดต่อแล้ว ถูกต้อง',''),
  TC('TC-16-04','TS-16','03-11.3','ปุ่มโทรออกจาก Lead Detail','Positive','P2','-','กดปุ่มโทร','โทรออกได้',''),
  TC('TC-16-05','TS-16','03-10.1','ข้อความแจ้งเตือน New Lead ถูกต้อง','Positive','P2','-','ดูข้อความแจ้งเตือน','"Lead ใหม่: คุณ[ชื่อ] สนใจ[แบบประกัน]..."',''),
  TC('TC-16-06','TS-16','03-11.4','UI ตรงตาม Mockup หน้า 7','Positive','P3','-','เทียบ Mockup','UI ตรง Mock Up - Lead Management.pdf',''),
  // TS-17
  TC('TC-17-01','TS-17','03-12.1','Hot — เริ่มนับ SLA จากเวลานัด','Positive','P1','Lead Hot','นัด 13:00, LC บันทึกผล 13:30','ผ่าน SLA','Hot นัด 13:00'),
  TC('TC-17-02','TS-17','03-12','Hot — เกิน 24 ชม.','Boundary','P1','Lead Hot','นัด 13:00 D1, บันทึก 14:00 D2','เกิน SLA → ดึง Lead คืน',''),
  TC('TC-17-03','TS-17','03-12','Hot — ครบ 24 ชม. พอดี','Boundary','P1','Lead Hot','นัด 13:00 D1, บันทึก 13:00 D2','ตรวจ behavior ที่ขอบเขต (ต้อง clarify inclusive/exclusive)',''),
  TC('TC-17-04','TS-17','03-12.1','Warm — assign ในเวลา 9-18','Positive','P1','Lead Warm','assign 10:00, บันทึก 12:00','นับจาก 10:00 ผ่าน SLA','Warm assign 10:00'),
  TC('TC-17-05','TS-17','03-12','Warm — assign 07:00 (ก่อน 9:00)','Boundary','P1','Lead Warm','assign 07:00','SLA เริ่มนับ 09:00 วันเดียวกัน','Warm assign 07:00'),
  TC('TC-17-06','TS-17','03-12','Warm — assign 19:00 (หลัง 18:00)','Boundary','P1','Lead Warm','assign 19:00','SLA เริ่มนับ 09:00 วันถัดไป','Warm assign 19:00'),
  TC('TC-17-07','TS-17','03-12','Warm — assign 18:00 พอดี','Boundary','P2','Lead Warm','assign 18:00','ระบุชัดว่าเริ่มนับเมื่อใด (ขอบเขต)',''),
  TC('TC-17-08','TS-17','03-12.2','ติดต่อตาม SLA → ไป 03-13','Positive','P1','-','บันทึกผลในเวลา','ดำเนินต่อบันทึกผล',''),
  TC('TC-17-09','TS-17','03-12.3','ไม่ติดต่อใน SLA → ดึง Lead คืน auto','Negative','P1','-','ปล่อยเกิน SLA','ระบบดึง Lead คืน Re-assign ตาม 03-08',''),
  TC('TC-17-10','TS-17','03-12.3','ระงับ LC 5 วัน','Positive','P2','LC เกิน SLA','เลือก 5 วัน','LC ไม่ได้รับ Lead 5 วัน',''),
  TC('TC-17-11','TS-17','03-12.3','ระงับ LC ถาวร','Boundary','P2','LC เกิน SLA','เลือกถาวร','LC ไม่ได้รับ Lead จนกว่าจะปลด',''),
  TC('TC-17-12','TS-17','03-12.4','Re-assign LC ใหม่ก็ไม่ติดต่อ → Email 09:00','Negative','P1','LC ใหม่เกิน SLA','รอ','Email แจ้งการตลาด 09:00 ทุกวัน',''),
  TC('TC-17-13','TS-17','03-12','นับ SLA ข้ามวันหยุด','Boundary','P2','SLA คร่อมวันหยุด','รอ','ตรวจการนับ 24 ชม. ต่อเนื่อง (ต้อง clarify)',''),
  TC('TC-17-14','TS-17','03-13/03-12','ติดต่อได้ + นัดใหม่ → SLA เริ่มจากวันนัด','Positive','P1','บันทึกผล "ติดต่อได้"','นัดวันใหม่','SLA เริ่มจากวันนัด 9-18 ภายใน 24 ชม.',''),
  // TS-18
  TC('TC-18-01','TS-18','03-13.1.1','ติดต่อได้: ขอตัดสินใจก่อน + Calendar','Positive','P1','Lead assign แล้ว','เลือกเหตุผล + นัดวัน','บันทึก + แจ้งเตือนล่วงหน้า 1 ชม. ก่อนนัด',''),
  TC('TC-18-02','TS-18','03-13.1.2','ติดต่อได้: ไม่ซื้อ + เหตุผล','Positive','P2','-','เลือกเหตุผลไม่ซื้อ','บันทึกผล',''),
  TC('TC-18-03','TS-18','03-13.1.3.1','ซื้อ — พบใบคำขอ+กรมธรรม์','Positive','P1','มีใน UW','กรอกเลข, ระบบ lookup','สถานะ = "อนุมัติ"','เลขพบทั้งคู่'),
  TC('TC-18-04','TS-18','03-13.1.3.2','ซื้อ — พบใบคำขอ ไม่พบกรมธรรม์','Boundary','P1','มีใบคำขอ','กรอกเลข','แสดงสถานะตามระบบ UW','พบใบคำขอ ไม่พบกรมธรรม์'),
  TC('TC-18-05','TS-18','03-13.1.3.3','ซื้อ — ไม่พบทั้งคู่','Negative','P1','-','กรอกเลขไม่มีใน UW','สถานะ = "ไม่พบข้อมูล" + แก้ไขเลขได้','เลขไม่พบ'),
  TC('TC-18-06','TS-18','03-13.1.3','ซื้อ — ส่ง Auto Email HRA + CC การตลาด','Positive','P1','บันทึกการซื้อ','save','ส่ง Email ถึง HRA, CC การตลาด',''),
  TC('TC-18-07','TS-18','03-13.2','ติดต่อไม่ได้ ครั้งที่ 1 + เหตุผล','Positive','P1','-','บันทึก ไม่ได้ฝากลีด','บันทึก + ต้องกรอกวันติดตาม ≤7 วัน',''),
  TC('TC-18-08','TS-18','03-13.2','ติดต่อไม่ได้ ครั้งที่ 2','Positive','P2','-','บันทึกครั้งที่ 2 (ไม่รับสาย >2 ครั้ง)','บันทึกผล',''),
  TC('TC-18-09','TS-18','03-13.3','วันติดตามเกิน 7 วัน','Boundary','P1','-','เลือกวันที่ +8 วัน','ปฏิเสธ (ไม่เกิน 7 วัน)',''),
  TC('TC-18-10','TS-18','03-13.3','วันติดตาม = 7 วันพอดี','Boundary','P2','-','+7 วัน','ยอมรับ',''),
  TC('TC-18-11','TS-18','03-13','กฎ 3 ครั้ง — ครั้งที่ 1 เกิน SLA → ดึงคืน','Negative','P1','-','เกิน SLA ครั้งที่ 1','ดึง Lead กลับ Re-assign',''),
  TC('TC-18-12','TS-18','03-13','กฎ 3 ครั้ง — ครบ 3 ครั้ง → ปิดเคส','Positive','P1','บันทึก 2 ครั้งแล้ว','บันทึกครั้งที่ 3','ปิดเคส (ไม่ว่าซื้อหรือไม่)',''),
  TC('TC-18-13','TS-18','03-13','SLA นับใหม่หลังบันทึกแต่ละครั้ง','Positive','P1','-','บันทึกครั้งที่ 1→2','SLA เริ่มนับใหม่หลังครั้งก่อน',''),
  TC('TC-18-14','TS-18','03-13.4','Retention — เก็บ 3 เดือนแล้วลบ','Boundary','P2','Lead ปิดไม่ได้','รอ 3 เดือน','ระบบลบอัตโนมัติหลัง 3 เดือน',''),
  TC('TC-18-15','TS-18','03-13','Calendar — เลือกวันจริง + Note','Positive','P3','-','กรอกวันจริง + โน้ต','บันทึกได้',''),
  TC('TC-18-16','TS-18','03-13.1.3.3','แก้ไขเลขใบคำขอ/กรมธรรม์ใหม่','Positive','P2','สถานะไม่พบข้อมูล','แก้เลขแล้ว save','ระบบค้นหา UW ใหม่',''),
  // TS-19
  TC('TC-19-01','TS-19','03-14.1','Automail Daily Report 09:00','Positive','P2','มีข้อมูล Lead','รอ 09:00','ส่ง Daily Report แนบ Excel/CSV',''),
  TC('TC-19-02','TS-19','03-14.2','Export Summary CSV','Positive','P2','มีข้อมูล','กด Export CSV','ได้ไฟล์ CSV',''),
  TC('TC-19-03','TS-19','03-14.2','Export Summary Excel','Positive','P2','มีข้อมูล','กด Export Excel','ได้ไฟล์ Excel',''),
  TC('TC-19-04','TS-19','03-14','Raw Data: Lead Source Performance','Positive','P2','มีข้อมูล','เปิด Raw Data','แสดงจำนวน Lead/Assign/ติดต่อได้/ปิดได้ ตามช่องทาง',''),
  // ===== GrowthAi spec — เพิ่มจากสไลด์ "ตัวอย่างการ Set up Segment/Message/Campaign (GrowthAi)" =====
  // TS-04 (เพิ่ม) — Segment
  TC('TC-04-11','TS-04','02-3/GAi','Refresh segment คำนวณสมาชิกใหม่','Positive','P2','มี Segment ที่มี filter','กด refresh','จำนวนสมาชิกถูก recompute ตามข้อมูลล่าสุด',''),
  TC('TC-04-12','TS-04','02-3/GAi','Delete segment','Positive','P1','มี Segment','กด delete + ยืนยัน','segment ถูกลบ; ถ้าผูกกับ campaign ที่ active → เตือน/บล็อก','Segment ผูก campaign'),
  TC('TC-04-13','TS-04','02-3/GAi','แสดงจำนวนลูกค้าใน segment (count badge)','Positive','P1','มี Segment ที่มี filter','เปิด segment','badge แสดงจำนวนตรงกับผล filter จริง',''),
  TC('TC-04-14','TS-04','02-3/GAi','Customer 360 จากใน segment','Positive','P2','มีลูกค้าใน segment','คลิกลูกค้า 1 ราย','แสดงโปรไฟล์ 360 (ช่องทาง, กรมธรรม์, activity) ถูกต้อง',''),
  TC('TC-04-15','TS-04','02-3/GAi','Filter channel-presence (มี Email ไม่มี App / ยังไม่เป็น Ocean Connect)','Positive','P1','มีข้อมูลช่องทางลูกค้า','สร้าง segment "มี Email และยังไม่มี Ocean Club App"','ได้เฉพาะลูกค้าที่ email=true AND app=false','Customer มี/ไม่มีแต่ละช่องทาง'),
  TC('TC-04-16','TS-04','02-3/GAi','Filter numeric (Health Score, CLV≥100k, เบี้ย<20k)','Positive','P1','มีข้อมูล CLV/Health Score','สร้าง segment "App=No, CLV≥100,000"','ได้เฉพาะลูกค้าที่ค่าตรงตามตัวเลข','Customer CLV หลายระดับ'),
  TC('TC-04-17','TS-04','02-3/GAi','Filter behavioral — เข้าหน้าบทความภาษี/ออมทรัพย์','Boundary','P2','มี event GA4','filter จาก web-visit behavior','เฉพาะลูกค้าที่มี event เข้าหน้าบทความนั้น (ตรวจ data source GA4)','GA4 event บทความ'),
  // TS-07 (เพิ่ม) — Message
  TC('TC-07-10','TS-07','02-6/GAi','Refresh / Delete message','Positive','P2','มี Message','กด refresh แล้ว delete','refresh โหลดค่าใหม่; delete ลบได้ (เตือนถ้าถูกใช้ใน campaign)','Message ผูก campaign'),
  TC('TC-07-11','TS-07','02-6/GAi','แสดง Message ID + จำนวน credit บนการ์ด','Positive','P2','มี Message','เปิดรายการ message','แสดง Message ID (running no) + credit ที่ message จะใช้ ถูกต้อง',''),
  // TS-06 (เพิ่ม) — Campaign Flow Builder
  TC('TC-06-13','TS-06','02-5/GAi','Add contact source = เลือก Segment','Positive','P1','มี Segment','ในcampaign กด Add contact source → เลือก segment','สมาชิกของ segment เข้าสู่ flow เป็น contact ของ campaign',''),
  TC('TC-06-14','TS-06','02-5/GAi','Decision node แตกเส้นทาง','Positive','P1','มี flow + contact','วาง Decision (เช่น "เปิดอ่าน email?")','contact ถูกแยกเข้า branch yes/no ถูกต้อง',''),
  TC('TC-06-15','TS-06','02-5/GAi','Condition node ตาม Contact tags','Positive','P1','contact มี tag','ตั้ง condition tag = "VIP"','เฉพาะ contact ที่มี tag ผ่านเข้า branch นั้น','Contact มี/ไม่มี tag'),
  TC('TC-06-16','TS-06','02-5/GAi','Action: Send email + email builder','Positive','P1','-','เพิ่ม action Send email → ออกแบบใน builder','อีเมลถูกสร้าง/ส่งตามที่ออกแบบ (รูป+ข้อความ+ลิงก์)',''),
  TC('TC-06-17','TS-06','02-5/GAi','Action: Send text message (เลือก Message เดิม)','Positive','P1','มี Message','เพิ่ม action → Select Message ที่มีอยู่','ผูก message เดิมเข้า action ได้ ส่งถูกช่องทาง',''),
  TC('TC-06-18','TS-06','02-5/GAi','Action: Mobile app message (push)','Positive','P2','contact มี app','เพิ่ม action mobile app message','push เข้า Ocean Club App ของ contact ที่มี app',''),
  TC('TC-06-19','TS-06','02-5/GAi','Action: Send a webhook','Positive','P2','มี endpoint','ตั้ง webhook URL ใน action','ระบบยิง HTTP request พร้อม payload contact เมื่อ contact ถึง node','webhook endpoint ทดสอบ'),
  TC('TC-06-20','TS-06','02-5/GAi','Action timing / delay ราย step','Boundary','P2','flow มีหลาย action','ตั้ง delay 2 วัน ก่อน action ถัดไป','action ถัดไปทำงานหลังครบ delay ไม่ใช่ทันที',''),
  TC('TC-06-21','TS-06','02-4/GAi','Upload segment → Facebook Custom Audience (Lookalike)','Positive','P2','มี Segment','จาก segment กด upload → FB','audience ถูกสร้างใน FB Ads (custom + lookalike base)',''),
  TC('TC-06-22','TS-06','02-4/GAi','Upload segment → Google Customer Match','Positive','P2','มี Segment','จาก segment กด upload → Google','customer match list ถูกสร้างใน Google Ads',''),
  TC('TC-06-23','TS-06','02-5/GAi','E2E flow: Segment → Decision → Condition → multi Action','Positive','P1','ส่วนประกอบครบ','ประกอบ flow ครบ แล้ว publish','contact ไหลผ่านทุก node และได้รับ message ตาม branch ถูกต้อง','flow ครบทุก node'),
  // TS-10 (เพิ่ม) — Campaign Tracking ตามคอลัมน์ GrowthAi
  TC('TC-10-06','TS-10','02-10/GAi','Total User ≠ Total Send','Boundary','P1','campaign 1,000 contact ส่งจริง 980','ตรวจ SUMMARY','Total User=1,000, Total Send=980 (แยกชัด)','campaign 1000/ส่ง 980'),
  TC('TC-10-07','TS-10','02-10/GAi','Total Credit ต่อ campaign','Positive','P1','ส่ง SMS ไทยยาว multi-part 980 ราย','ตรวจ Total Credit','Total Credit = ผลรวม credit ทุก segment ของทุกข้อความ ถูกต้อง','SMS ไทยยาว'),
  TC('TC-10-08-b','TS-10','02-10/GAi','Total Fail สรุปใน summary','Positive','P1','ส่ง fail 20 ราย','ตรวจ Total Fail','Total Fail=20 และ Total Send+Total Fail = Total User','ส่ง fail 20'),
  TC('TC-10-09','TS-10','02-10/GAi','Drill-down รายคลิกต่อ campaign','Positive','P2','campaign มีผลคลิก','คลิกเข้า campaign 1 ใน SUMMARY','แสดงรายชื่อ/จำนวนคลิก + Unique Click ของ campaign นั้น',''),
  TC('TC-10-10','TS-10','02-10/GAi','SUMMARY header ครบทุกคอลัมน์','Positive','P2','มีข้อมูล campaign','เปิดหน้า SUMMARY','มีครบ: Campaign ID, Name, Total User, Total Send, Total Credit, Total Fail, Total Click, Unique Click',''),
];

// ===== Production Lot =====
// Source: WBS xlsx (export 2026-07-15) — แท็บ "Development Effort" คอลัมน์ "Release" (1/2/3)
//   Lot 1 = Campaign Part 1 (ingest Customer/Policy/GA4/RFM -> Segment -> Sync Ads)          Go Live 19 ต.ค. 2026
//   Lot 2 = Lead Management ทั้งหมด (2.x)                                                     Go Live 1 ธ.ค. 2026
//   Lot 3 = Campaign Part 2 (ingest LineOA/FB Inbox/OceanClub, Campaign, Message, Tracking)  Go Live 6 พ.ค. 2027
const lotByScenario = {
  'TS-01': 1, 'TS-04': 1, 'TS-05': 1,
  'TS-02': 3, 'TS-03': 3, 'TS-06': 3, 'TS-07': 3, 'TS-08': 3, 'TS-09': 3, 'TS-10': 3,
  'TS-11': 2, 'TS-12': 2, 'TS-13': 2, 'TS-14': 2, 'TS-15': 2, 'TS-16': 2, 'TS-17': 2, 'TS-18': 2, 'TS-19': 2,
};
// Overrides — suites whose source system lands in a different Release than the suite default.
const lotByTC = {
  'TC-01-03': 3, // Contact Center / FB Inbox realtime -> 1.1.4 (Lot 3)
  'TC-01-04': 2, // ตัวแทน OSSS near-realtime -> 2.1.3 (Lot 2)
  'TC-04-15': 3, // Filter channel-presence ต้องมีข้อมูล Line OA (1.1.3) + Ocean Club App (1.1.5) -> Lot 3
};
const lots = [
  ['Lot', 'ขอบเขต', 'Go Live', 'QA MD', 'Test Cases'],
  [1, 'Campaign Part 1 — ingest Customer/Policy/GA4/RFM → Segment → Sync FB/Google Ads', '19 ต.ค. 2026', 27.0, 26],
  [2, 'Lead Management — ingest Lead/Agent/Income, Auto Assign + SLA, LC Connect', '1 ธ.ค. 2026', 27.5, 83],
  [3, 'Campaign Part 2 — ingest LineOA/FB Inbox/OceanClub, Campaign, Message, Tracking', '6 พ.ค. 2027', 43.5, 71],
];

const lotOf = t => lotByTC[t.id] ?? lotByScenario[t.scenario] ?? '';
testCases.forEach(t => { t.lot = lotOf(t); });

// Fail loudly rather than shipping blank Lot columns into Jira/TestRail.
const unmappedLot = testCases.filter(t => !t.lot);
if (unmappedLot.length) throw new Error(`data.js: ${unmappedLot.length} test case(s) have no Lot: ${unmappedLot.map(t => t.id).join(', ')}`);

// ===== Detailed Test Cases (step-by-step) — SLA module =====
const detailSLA = [
  {
    id:'TC-17-05', title:'SLA Warm Lead — assign ก่อนเวลา 09:00 ต้องเริ่มนับที่ 09:00', trace:'03-12 (Warm Lead)', priority:'P1', type:'Boundary',
    objective:'ยืนยันว่ากรณี Warm Lead ที่ถูก assign ก่อน 09:00 ระบบเริ่มนับ SLA ที่ 09:00 ของวันเดียวกัน',
    precondition:'มี LC พร้อมรับ Lead; Lead เป็น Warm (ไม่ระบุช่วงเวลาติดต่อ); ระบบเวลาตั้งถูกต้อง',
    testData:'Lead Warm, เวลา assign = 07:00 ของวันทำการ',
    steps:[
      ['สร้าง Lead Warm (ไม่กรอกช่วงเวลาให้ติดต่อกลับ) ให้ระบบ assign เวลา 07:00','Lead ถูก assign ให้ LC, Lead Scoring = Warm'],
      ['ตรวจค่า SLA Start Time ของ Lead','SLA Start = 09:00 ของวันเดียวกัน (ไม่ใช่ 07:00)'],
      ['ปล่อยให้ LC บันทึกผลเวลา 08:30 ของวันถัดไป (ภายใน 24 ชม. นับจาก 09:00)','ถือว่าอยู่ใน SLA (ผ่าน) เพราะ deadline = 09:00 วันถัดไป'],
      ['ทดสอบซ้ำโดย LC บันทึกผลเวลา 09:30 วันถัดไป','เกิน SLA → ระบบดึง Lead คืนเพื่อ Re-assign ตาม 03-08'],
    ],
  },
  {
    id:'TC-17-06', title:'SLA Warm Lead — assign หลัง 18:00 เริ่มนับ 09:00 วันถัดไป', trace:'03-12 (Warm Lead)', priority:'P1', type:'Boundary',
    objective:'ยืนยันว่ากรณี Warm Lead ที่ถูก assign หลัง 18:00 ระบบเริ่มนับ SLA ที่ 09:00 ของวันถัดไป',
    precondition:'มี LC พร้อมรับ Lead; Lead เป็น Warm',
    testData:'Lead Warm, เวลา assign = 19:00',
    steps:[
      ['สร้าง Lead Warm ให้ระบบ assign เวลา 19:00','Lead ถูก assign, Scoring = Warm'],
      ['ตรวจค่า SLA Start Time','SLA Start = 09:00 ของวันถัดไป'],
      ['LC บันทึกผลเวลา 08:00 ของวันถัดถัดไป (ภายใน 24 ชม.)','อยู่ใน SLA (ผ่าน)'],
      ['ทดสอบกรณี LC ไม่บันทึกจนเกิน 09:00 วันถัดถัดไป','เกิน SLA → ดึง Lead คืน Re-assign'],
    ],
  },
  {
    id:'TC-17-02', title:'SLA Hot Lead — เกิน 24 ชม. ต้องดึง Lead คืน', trace:'03-12 (Hot Lead)', priority:'P1', type:'Boundary',
    objective:'ยืนยันว่ากรณี Hot Lead เมื่อ LC ไม่บันทึกผลภายใน 24 ชม. นับจากเวลานัด ระบบดึง Lead คืน',
    precondition:'มี LC; Lead เป็น Hot (ระบุช่วงเวลาติดต่อกลับ)',
    testData:'Lead Hot, ช่วงเวลานัด = 13:00 ของวันที่ 1',
    steps:[
      ['สร้าง Lead Hot ระบุช่วงเวลาติดต่อ 13:00','Scoring = Hot, SLA นับจาก 13:00 D1'],
      ['ปล่อยให้ LC ไม่บันทึกผลจนถึง 14:00 ของวันที่ 2 (เกิน 24 ชม.)','เกิน SLA'],
      ['ตรวจสถานะ Lead','ระบบดึง Lead คืนอัตโนมัติเพื่อ Re-assign ตามคิว 03-08'],
      ['ตรวจสถานะ LC ที่พลาด SLA','LC ถูกระงับการรับ Lead ตามจำนวนวันที่กำหนด (5/10/15/20/ถาวร)'],
    ],
  },
  {
    id:'TC-17-12', title:'SLA — Re-assign แล้วยังเกิน SLA ต้อง Email แจ้งการตลาด 09:00', trace:'03-12.4', priority:'P1', type:'Negative',
    objective:'ยืนยันว่าเมื่อ Lead ถูก Re-assign ให้ LC ใหม่แล้วยังไม่ติดต่อตาม SLA ระบบส่ง Email แจ้งฝ่ายการตลาดเวลา 09:00 ทุกวัน',
    precondition:'Lead ถูกดึงคืนและ Re-assign ให้ LC ท่านใหม่แล้ว',
    testData:'Lead ที่ผ่านการ Re-assign 1 รอบ',
    steps:[
      ['ปล่อยให้ LC ท่านใหม่ไม่ติดต่อจนเกิน SLA','Lead ค้างเกิน SLA'],
      ['รอถึงเวลา 09:00','ระบบส่ง Email แจ้งฝ่ายการตลาดตาม Template_BRD_03-Lead Management'],
      ['ตรวจว่ามี Lead ดังกล่าวในเนื้อหา Email','Email ระบุ Lead ที่ค้างครบถ้วน'],
      ['รอวันถัดไป 09:00 (ถ้ายังค้าง)','ส่ง Email ซ้ำทุกวันจนกว่าจะจัดการ'],
    ],
  },
];

// ===== Detailed Test Cases (step-by-step) — Auto Assign module =====
const detailAutoAssign = [
  {
    id:'TC-14-02', title:'Auto Assign — ลำดับความสำคัญ จังหวัด → ผลงานทุกงวด → บางงวด', trace:'03-08.3', priority:'P1', type:'Positive',
    objective:'ยืนยันว่าระบบเลือก LC ตามลำดับ: รับผิดชอบจังหวัดเดียวกับ Lead → ผลงานทุกงวด → ผลงานบางงวด',
    precondition:'มี LC อย่างน้อย 3 คนในจังหวัดเดียวกัน ผลงานต่างระดับ',
    testData:'LC-A (จังหวัด X, ผลงานทุกงวด), LC-B (จังหวัด X, ผลงานบางงวด), LC-C (จังหวัด Y)',
    steps:[
      ['สร้าง Lead จังหวัด X','Lead Scoring คำนวณ'],
      ['ให้ระบบ Auto Assign','assign ให้ LC ในจังหวัด X เท่านั้น (ไม่ใช่ LC-C)'],
      ['ตรวจว่าเลือก LC-A หรือ LC-B','เลือก LC-A (ผลงานทุกงวด) ก่อน LC-B'],
      ['ปิดใช้งาน LC-A แล้วสร้าง Lead จังหวัด X ใหม่','assign ให้ LC-B (ผลงานบางงวด)'],
    ],
  },
  {
    id:'TC-14-03', title:'Auto Assign — Tie-break ด้วยจำนวนกรมธรรม์ใหม่ 3 งวด (ไม่รวม PA)', trace:'03-08', priority:'P1', type:'Positive',
    objective:'เมื่อ LC ผลงานระดับเดียวกัน ใช้จำนวนกรมธรรม์ใหม่ (ไม่รวม PA) ที่อนุมัติ 3 งวดย้อนหลัง มาก→น้อย',
    precondition:'มี LC 2 คนจังหวัดเดียวกัน ผลงานระดับเดียวกัน',
    testData:'LC-A: กรมธรรม์ใหม่ 3 งวด = 10 ฉบับ (ไม่รวม PA); LC-B = 7 ฉบับ',
    steps:[
      ['สร้าง Lead จังหวัดเดียวกับ LC-A และ LC-B','-'],
      ['ให้ระบบ Auto Assign','assign ให้ LC-A (กรมธรรม์ใหม่มากกว่า)'],
      ['ตรวจว่า PA ไม่ถูกนับ','ปรับข้อมูลให้ LC-B มี PA เพิ่มจนยอดรวมเกิน LC-A → ระบบยังเลือก LC-A (เพราะไม่นับ PA)'],
    ],
  },
  {
    id:'TC-14-05', title:'Auto Assign — Round Robin หมุนเวียนคิว ไม่กระจุกตัว', trace:'03-08', priority:'P1', type:'Positive',
    objective:'ยืนยันว่า LC ที่ได้รับ Lead ล่าสุดถูกเลื่อนไปท้ายคิว และ Lead ถัดไปไปยัง LC ลำดับถัดไป',
    precondition:'มี LC เข้าเงื่อนไขเท่ากัน 3 คน (LC-1, LC-2, LC-3) ในคิว',
    testData:'Lead ใหม่ 4 รายการต่อเนื่อง',
    steps:[
      ['สร้าง Lead รายการที่ 1','assign LC-1, LC-1 ไปท้ายคิว (คิว: LC-2, LC-3, LC-1)'],
      ['สร้าง Lead รายการที่ 2','assign LC-2 (คิว: LC-3, LC-1, LC-2)'],
      ['สร้าง Lead รายการที่ 3','assign LC-3 (คิว: LC-1, LC-2, LC-3)'],
      ['สร้าง Lead รายการที่ 4','assign LC-1 อีกครั้ง (วนครบรอบ) — ยืนยันกระจายเท่ากัน ไม่กระจุก'],
    ],
  },
  {
    id:'TC-14-10', title:'Lead Scoring — Hot vs Warm จากช่วงเวลาติดต่อ', trace:'03-08', priority:'P1', type:'Positive',
    objective:'ยืนยันการกำหนด Lead Scoring: มีช่วงเวลาติดต่อ = Hot, ไม่มี = Warm',
    precondition:'-',
    testData:'Lead A: ระบุ 09:00-12:00 ; Lead B: ไม่ระบุ',
    steps:[
      ['บันทึก Lead A พร้อมช่วงเวลา 09:00-12:00','Lead Scoring = Hot Lead'],
      ['บันทึก Lead B โดยเว้นช่วงเวลาว่าง','Lead Scoring = Warm Lead'],
      ['ตรวจว่า SLA ของ Hot นับจากเวลานัด, Warm นับจากเวลา assign','SLA คำนวณตาม Scoring ถูกต้อง'],
    ],
  },
  {
    id:'TC-14-08', title:'Auto Assign — ไม่พบ candidate ต้องแจ้ง Email ให้การตลาด Manual Assign', trace:'03-08', priority:'P1', type:'Negative',
    objective:'ยืนยันว่ากรณีไม่มี LC เข้าเงื่อนไข ระบบส่ง Email ให้การตลาดเพื่อ Manual Assign',
    precondition:'จังหวัดของ Lead ไม่มี LC รับผิดชอบ',
    testData:'Lead จังหวัดที่ไม่มี LC',
    steps:[
      ['สร้าง Lead ในจังหวัดที่ไม่มี LC','ระบบหา candidate ไม่พบ'],
      ['ตรวจ Email ฝ่ายการตลาด','ส่ง Email แจ้งให้ Manual Assign ตาม Template'],
      ['เปิดหน้า Manual Assign (03-09)','Lead ปรากฏในรายการรอ assign'],
    ],
  },
];

const testDataMatrix = [
  ['ชุดข้อมูล', 'รายละเอียด', 'ใช้กับ'],
  ['Customer ปกติ', 'มีเบอร์+อีเมล, Consent=Y, Inforce', 'TS-04, TS-09'],
  ['Customer Consent=No', 'ต้องถูก exclude', 'TC-04-07, TC-09-06'],
  ['Customer ใน Do-not-contact', 'เบอร์ตรง do-not-contact list', 'TC-04-08, TC-09-06'],
  ['Customer หลายแหล่ง', 'เบอร์/อีเมลต่างกันใน CIS vs อื่น', 'TC-09-02'],
  ['ไฟล์ csv (ถูกต้อง/>5MB/=5MB/column ผิด/ซ้ำ/ว่าง/ไทย)', 'ทดสอบ validation', 'TS-02'],
  ['LC ผลงานทุกงวด/บางงวด/จังหวัดต่างกัน/กรมธรรม์เท่ากัน', 'ทดสอบ Auto Assign', 'TS-14'],
  ['Lead Hot (มีช่วงเวลา)/Warm (ไม่มี)', 'Lead Scoring + SLA', 'TS-14, TS-17'],
  ['Lead ซ้ำ: 1 ช่องทาง/2 ช่องทาง/แบบประกันเหมือน-ต่าง', 'Dedup', 'TS-12'],
  ['เลขใบคำขอ/กรมธรรม์: พบทั้งคู่/พบใบคำขอไม่พบกรมธรรม์/ไม่พบ', 'UW lookup', 'TC-18-03..05'],
  ['เวลา Assign: 07:00/10:00/18:00/19:00', 'SLA boundary', 'TS-17'],
  ['Segment: RFM 11 กลุ่ม, CLV 6 ระดับ, Age group', 'Filter', 'TS-04'],
];

const defectProne = [
  ['Area', 'เหตุผลที่เสี่ยงสูง', 'TC ที่เกี่ยวข้อง', 'Mitigation'],
  ['SLA Calculation (Warm/Hot, นอกเวลาทำการ)', 'Logic เวลาซับซ้อน, ขอบเขต 09:00/18:00/24ชม., ข้ามวันหยุด', 'TC-17-02..14', 'เน้น Boundary test + clarify inclusive/exclusive'],
  ['Auto Assign Round Robin + Tie-break', 'ลำดับเงื่อนไขหลายชั้น, สถานะคิว, ไม่รวม PA', 'TC-14-02..05', 'ทดสอบลำดับ Lead ต่อเนื่อง + ตรวจ state คิว'],
  ['Lead Dedup (หลายช่องทาง)', 'กฎยึดข้อมูลล่าสุด + รวมแบบประกัน ซับซ้อน', 'TC-12-06..12', 'ทดสอบทุก combination ช่องทาง/แบบประกัน'],
  ['File Upload Validation', 'Boundary 5MB, encoding, column mapping', 'TC-02-02..09', 'เตรียมไฟล์ตัวอย่างครบทุกเคส'],
  ['Maker/Checker Authorization', 'แยกสิทธิ์, ป้องกันอนุมัติงานตนเอง', 'TC-03-04, TC-08-04', 'ทดสอบด้วยหลาย role'],
  ['Counter Sent/Open/Click/Unique', 'นิยามการนับต่างกัน, unique กันซ้ำ', 'TC-06-10..12', 'ตรวจสูตรนับกับ raw data'],
  ['Exclude Consent/Do-not-contact', 'ความปลอดภัย/Compliance — ส่งผิดมีผลทางกม.', 'TC-04-07/08, TC-09-06', 'ทดสอบทั้งตอน Segment และตอนส่งจริง'],
  ['UW Status Lookup', 'หลาย branch (พบ/พบบางส่วน/ไม่พบ) + แก้ไขเลข', 'TC-18-03..05,16', 'ทดสอบครบทุกสถานะ UW'],
  ['Multi-source Data → ยึด CIS', 'ความถูกต้องของ primary source', 'TC-09-02', 'ทดสอบเคสข้อมูลขัดแย้งหลายแหล่ง'],
  ['Scheduled Jobs (Automail/Batch)', 'เวลา 08:00/09:00/13:00/23:00, monthly', 'TC-01-07,08; TC-10-04; TC-19-01', 'ทดสอบ trigger ตามเวลา + timezone'],
];

const raci = [
  ['กิจกรรม / Deliverable', 'BA', 'SA/Dev', 'QA/Tester', 'Business User (MKT)', 'PM'],
  ['จัดทำ Test Plan', 'C', 'C', 'R/A', 'I', 'A'],
  ['ออกแบบ Test Cases', 'C', 'C', 'R/A', 'C', 'I'],
  ['เตรียม Test Data', 'C', 'R', 'R', 'C', 'I'],
  ['Review Test Cases', 'R', 'C', 'A', 'C', 'I'],
  ['Execute Test (SIT)', 'I', 'C', 'R/A', 'I', 'I'],
  ['Execute UAT', 'C', 'C', 'R', 'R/A', 'A'],
  ['Log/Triage Defect', 'C', 'R', 'R/A', 'I', 'I'],
  ['Fix Defect', 'I', 'R/A', 'C', 'I', 'I'],
  ['Verify Fix / Regression', 'I', 'C', 'R/A', 'I', 'I'],
  ['Clarify Open Issues (ข้อ Recheck)', 'R/A', 'C', 'C', 'R', 'A'],
  ['Sign-off ผลทดสอบ', 'C', 'C', 'R', 'A', 'A'],
];

const execTrackerHeader = ['TC ID','Lot','Module','Title','Priority','Type','Tester','Planned Date','Executed Date','Status','Defect ID','Comment'];

const openIssues = [
  ['No.', 'ประเด็น (Open Issue)', 'กระทบ TC', 'ผู้ที่ต้อง Clarify', 'สถานะ'],
  ['1', 'SLA "ครบ 24 ชม. พอดี" นับ inclusive/exclusive', 'TC-17-03, TC-17-07', 'BA/SA', 'Open'],
  ['2', 'SLA นับข้ามวันหยุด หรือนับเฉพาะวันทำการ', 'TC-17-13', 'BA/Business', 'Open'],
  ['3', 'Raw Data Lead Source แสดงหลายช่องทางแบบ comma (Issue #105)', 'TC-12-09, TC-19-04', 'BA/Business', 'Recheck'],
  ['4', 'จำนวน Campaign สูงสุดต่อลูกค้า/วัน (BRD ระบุไม่มี Logic ตายตัว)', '-', 'Business', 'ยืนยันว่าไม่มี cap'],
  ['5', 'การแก้ Campaign หลังอนุมัติ — ล็อก หรือขออนุมัติใหม่', 'TC-08-05', 'BA/SA', 'Open'],
  ['6', 'Frequency Sync Customer/RFM (Daily vs Monthly ของคณิตศาสตร์)', 'TC-01-09', 'BA/Actuary', 'Open'],
  ['7', 'ปริมาณ UTM data + ระยะเวลาจัดเก็บ (Non-functional)', '-', 'BA/IT', 'Open'],
  ['8', 'GrowthAi เป็น COTS/SaaS หรือ custom — กระทบ test strategy (config vs functional)', 'TS-04/06/07/10', 'SA/PM', 'Open'],
  ['9', 'Decision vs Condition node ต่างกันเชิง business อย่างไร', 'TC-06-14/15', 'BA/SA', 'Open'],
  ['10', 'Send a webhook ยิงไประบบใด (target integration)', 'TC-06-19', 'SA', 'Open'],
  ['11', 'สูตร Total Credit/Total Fail ตรงกับ Infobip billing reconcile หรือไม่', 'TC-10-07/08-b', 'BA/SA', 'Open'],
  ['12', 'Channel-presence field ("เป็น Ocean Connect แล้ว/ยัง") มาจาก source ใด + refresh บ่อยแค่ไหน', 'TC-04-15', 'BA/SA', 'Open'],
  ['13', 'LINE Ocean Connect ส่งผ่าน GrowthAi action ใด (ไม่มีใน action list)', 'TS-06', 'BA/SA', 'Open'],
];

module.exports = {
  projectOverview, processWorkflows, rtm, scenarios, testCases,
  detailSLA, detailAutoAssign, testDataMatrix, defectProne, raci,
  execTrackerHeader, openIssues,
  lotByScenario, lotByTC, lots,
};

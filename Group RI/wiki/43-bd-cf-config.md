===== PAGE 1302593864 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) =====
(empty page)


===== PAGE 1302593887 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer =====
(empty page)


===== PAGE 1302593898 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลในกรณีที่ยังไม่มีข้อมูล หรือค้นหาแล้วไม่พบข้อมูล |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ มีสถานะเป็นรอส่งพิจารณา และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่กำลังรอพิจารณาจาก Maker อีกคน |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาส่งกลับแก้ไข และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาอนุมัติ และมี Treaty ใช้งาน Reinsurer นี้แล้ว |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลรายการที่กำลังอยู่ระหว่างรอพิจารณา |

### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Reinsurer นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Reinsurer เพื่อเพิ่มข้อมูล Reinsurer
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Reinsurer ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Reinsurer
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Reinsurer
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Reinsurer เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นหน้าสำหรับค้นหาข้อมูลเท่านั้น

### รายละเอียดส่วนเงื่อนไขการค้นหา
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Status | ทั้งหมด | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Reinsurer | รอส่งพิจารณา |  |

### รายละเอียดส่วนการแสดงข้อมูล
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Reinsurer Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Reinsurer | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 6 | Icon | แก้ไขรายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" , "ส่งกลับแก้ไข" , "อนุมัติ" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกเรียกใช้งานจาก Treaty |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Cheker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอพิจารณา"แสดง Icon ต่อเมื่อผู้ใช้งานปัจจุบันไม่ใช่ผู้ที่ส่งรายการพิจารณา |
| 9 | Label | Reinsurer Code | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Reinsurer Name | ชื่อ Reinsurer | Gibraltar |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |


===== PAGE 1303511207 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer > BD-CF-001-SD001_01 หน้าจอหลัก =====
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลในกรณีที่ยังไม่มีข้อมูล หรือค้นหาแล้วไม่พบข้อมูล |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ มีสถานะเป็นรอส่งพิจารณา และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่กำลังรอพิจารณาจาก Maker อีกคน |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาส่งกลับแก้ไข และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาอนุมัติ และมี Treaty ใช้งาน Reinsurer นี้แล้ว |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลรายการที่กำลังอยู่ระหว่างรอพิจารณา |


===== PAGE 1303511210 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer > BD-CF-001-SD001_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Reinsurer นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Reinsurer เพื่อเพิ่มข้อมูล Reinsurer
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Reinsurer ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Reinsurer
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Reinsurer
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Reinsurer เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นหน้าสำหรับค้นหาข้อมูลเท่านั้น


===== PAGE 1303511215 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer > BD-CF-001-SD001_03 เงื่อนไขการค้นหา =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Status | ทั้งหมด | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Reinsurer | รอส่งพิจารณา |  |


===== PAGE 1303511221 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer > BD-CF-001-SD001_04 ส่วนการแสดงข้อมูล =====
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Reinsurer Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Reinsurer | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 6 | Icon | แก้ไขรายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" , "ส่งกลับแก้ไข" , "อนุมัติ" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกเรียกใช้งานจาก Treaty |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Cheker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอพิจารณา"แสดง Icon ต่อเมื่อผู้ใช้งานปัจจุบันไม่ใช่ผู้ที่ส่งรายการพิจารณา |
| 9 | Label | Reinsurer Code | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Reinsurer Name | ชื่อ Reinsurer | Gibraltar |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |


===== PAGE 1302593903 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD002 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่มรายการ" จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูล Reinsurerในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเพิ่ม/แก้ไขข้อมูล Reinsurer
| ส่วนบันทึกรายการ Reinsurer |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Free Text | Reinsurer Code | Enable | ชื่อย่อ Reinsurer | Gibraltar | Required Fieldรหัสย่อของบริษัท Reinsurance ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับบริษัทอื่น) |
| 2 | Free Text | Reinsurer Name | Enable | ชื่อ Reinsurer | The Gibraltar Life Insurance Co. Ltd. | Required Field |
| 3 | Dropdown List | Location | EnableDefault : กรุณาเลือก | แสดงข้อมูลLocalForeign | Local | Required Fieldประเภทที่ตั้งของบริษัทLocal = บริษัทในประเทศForeign = บริษัทต่างประเทศ |
| 4 | Dropdown List | Country | EnableDefault : กรุณาเลือก | กรณีเลือกข้อมูล Location เป็น Localแสดงข้อมูล Thailandกรณีเลือกข้อมูล Location เป็น Foreignแสดงข้อมูล ประเทศทั้งหมดยกเว้น Thailand | Thailand | Required Field |
| 5 | Free Text | Address | Enable | ที่อยู่/ที่ตั้งของบริษัท Reinsurer | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Free Text | Office Number | Enable | หมายเลขโทรศัพท์ | +81-120-372-269 |  |
|  |  | Information Office Number (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 7 | Free Text | Ext. | Enable | หมายเลขโทรศัพท์ต่อ | 1001 |  |
| 8 | Free Text | Fax | Enable | หมายเลขโทรสาร | +81-120-372-267 |  |
|  |  | Information Fax (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 9 | Free Text | Telephone | Enable | หมายเลขโทรศัพท์เคลื่อนที่ | +81-120-372-266 |  |
|  |  | Information Telephone (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local และ Foreign (suthanee.sa 08/06/2026) |  |  |
| 10 | Free Text | Email | Enable | อีเมล | Gibraltar@gmail.com | Required Field |
| 11 | Free Text | Website | Enable | เว็บไซต์ | https://www.gib-life.co.jp/ |  |
| 12 | Date | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2514 | Required Fieldวันที่เริ่มมีผลในการใช้งานข้อมูลบริษัท Reinsurance ในระบบ |
| 13 | Date | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field วันที่สิ้นสุดการใช้งานข้อมูลบริษัท Reinsurance (หลังจากวันนี้ระบบจะถือว่า “ไม่ใช้งานแล้ว”) |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล Reinsurer และเปลี่ยนสถานะรายการเป็น "รอส่งพิจารณา" |  |  |


===== PAGE 1303248898 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD002 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer > BD-CF-001-SD002_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303248900 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD002 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer > BD-CF-001-SD002_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่มรายการ" จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูล Reinsurerในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1303248906 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD002 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer > BD-CF-002-SD002_03 ส่วนการบันทึกรายการ Reinsurer =====
| ส่วนบันทึกรายการ Reinsurer |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Free Text | Reinsurer Code | Enable | ชื่อย่อ Reinsurer | Gibraltar | Required Fieldรหัสย่อของบริษัท Reinsurance ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับบริษัทอื่น) |
| 2 | Free Text | Reinsurer Name | Enable | ชื่อ Reinsurer | The Gibraltar Life Insurance Co. Ltd. | Required Field |
| 3 | Dropdown List | Location | EnableDefault : กรุณาเลือก | แสดงข้อมูลLocalForeign | Local | Required Fieldประเภทที่ตั้งของบริษัทLocal = บริษัทในประเทศForeign = บริษัทต่างประเทศ |
| 4 | Dropdown List | Country | EnableDefault : กรุณาเลือก | กรณีเลือกข้อมูล Location เป็น Localแสดงข้อมูล Thailandกรณีเลือกข้อมูล Location เป็น Foreignแสดงข้อมูล ประเทศทั้งหมดยกเว้น Thailand | Thailand | Required Field |
| 5 | Free Text | Address | Enable | ที่อยู่/ที่ตั้งของบริษัท Reinsurer | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Free Text | Office Number | Enable | หมายเลขโทรศัพท์ | +81-120-372-269 |  |
|  |  | Information Office Number (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 7 | Free Text | Ext. | Enable | หมายเลขโทรศัพท์ต่อ | 1001 |  |
| 8 | Free Text | Fax | Enable | หมายเลขโทรสาร | +81-120-372-267 |  |
|  |  | Information Fax (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 9 | Free Text | Telephone | Enable | หมายเลขโทรศัพท์เคลื่อนที่ | +81-120-372-266 |  |
|  |  | Information Telephone (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local และ Foreign (suthanee.sa 08/06/2026) |  |  |
| 10 | Free Text | Email | Enable | อีเมล | Gibraltar@gmail.com | Required Field |
| 11 | Free Text | Website | Enable | เว็บไซต์ | https://www.gib-life.co.jp/ |  |
| 12 | Date | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2514 | Required Fieldวันที่เริ่มมีผลในการใช้งานข้อมูลบริษัท Reinsurance ในระบบ |
| 13 | Date | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field วันที่สิ้นสุดการใช้งานข้อมูลบริษัท Reinsurance (หลังจากวันนี้ระบบจะถือว่า “ไม่ใช้งานแล้ว”) |


===== PAGE 1303248909 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD002 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer > BD-CF-002-SD002_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล Reinsurer และเปลี่ยนสถานะรายการเป็น "รอส่งพิจารณา" |  |  |


===== PAGE 1302593905 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการ Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนรายละเอียดข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ปิด | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม ปิด เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1303248916 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer > BD-CF-001-SD003_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303248918 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer > BD-CF-001-SD003_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการ Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล


===== PAGE 1303248920 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer > BD-CF-001-SD003_03 ส่วนการดูรายละเอียดข้อมูล Reinsurer =====
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |


===== PAGE 1303248923 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer > BD-CF-001-SD003_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ปิด | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม ปิด เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1302593907 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและพิจารณารายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- บันทึกผลพิจารณาข้อมูล Reinsurer
- กดปุ่ม ยกเลิก เพื่อยกเลิกการพิจารณาข้อมูล Reinsurer
- กดปุ่ม บันทึก เพื่อบันทึกผลพิจารณาข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ
- เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนพิจารณาข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |
| ส่วนการพิจารณาข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Dropdown List | ผลพิจารณา | แสดงข้อมูลอนุมัติส่งกลับแก้ไข | อนุมัติ | Required Fieldใช้เลือกผลการพิจารณารายการข้อมูล Reinsurer |
| 2 | Free Text | หมายเหตุ |  |  | Required Field เมื่อเลือก ผลพิจารณา เป็น "ส่งกลับแก้ไข" |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Reinsurer |  |  |


===== PAGE 1303248946 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer > BD-CF-001-SD004_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303248948 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer > BD-CF-001-SD004_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและพิจารณารายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- บันทึกผลพิจารณาข้อมูล Reinsurer
- กดปุ่ม ยกเลิก เพื่อยกเลิกการพิจารณาข้อมูล Reinsurer
- กดปุ่ม บันทึก เพื่อบันทึกผลพิจารณาข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ
- เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1303248950 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer > BD-CF-001-SD004_03 ส่วนการพิจารณาข้อมูล Reinsurer =====
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |
| ส่วนการพิจารณาข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Dropdown List | ผลพิจารณา | แสดงข้อมูลอนุมัติส่งกลับแก้ไข | อนุมัติ | Required Fieldใช้เลือกผลการพิจารณารายการข้อมูล Reinsurer |
| 2 | Free Text | หมายเหตุ |  |  | Required Field เมื่อเลือก ผลพิจารณา เป็น "ส่งกลับแก้ไข" |


===== PAGE 1303248952 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer > BD-CF-001-SD004_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Reinsurer |  |  |


===== PAGE 1302593911 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker ผู้สร้าง/แก้ไข/ส่งพิจารณา/พิจารณา ผู้ส่งพิจารณากับผู้อนุมัติรายการต้องไม่ใช่คนเดียวกัน)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Reinsurer
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Reinsurer ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Maker ผู้ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Maker ผู้ตรวจสอบข้อมูลแล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Maker ผู้ตรวจสอบข้อมูลส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Maker ผู้ตรวจสอบข้อมูลอนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1303248965 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer > BD-CF-001-SD005_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303248967 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer > BD-CF-001-SD005_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker ผู้สร้าง/แก้ไข/ส่งพิจารณา/พิจารณา ผู้ส่งพิจารณากับผู้อนุมัติรายการต้องไม่ใช่คนเดียวกัน)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Reinsurer
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล


===== PAGE 1303248969 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer > BD-CF-001-SD005_03 ส่วนการดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer =====
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Reinsurer ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Maker ผู้ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Maker ผู้ตรวจสอบข้อมูลแล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Maker ผู้ตรวจสอบข้อมูลส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Maker ผู้ตรวจสอบข้อมูลอนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |


===== PAGE 1303248971 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-001 กระบวนการจัดการข้อมูล Reinsurer > BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer > BD-CF-001-SD005_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1302593924 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty =====
(empty page)


===== PAGE 1302593927 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่กำลังอยู่ระหว่างส่งให้ Checker พิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาอนุมัติ |
|  | การแสดงผลสำหรับรายการเดิมที่มีการแก้ไขเพิ่มเติมหลังมีการอนุมัติไปแล้วอย่างน้อยหนึ่งครั้ง |
|  | การแสดงผลสำหรับรายการเดิมที่อยู่ระหว่างส่งพิจารณาหลังการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และข้อมูลยังไม่ครบหรือยังไม่พร้อมส่งพิจารณา และยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณาแต่ยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่กำลังอยู่ระหว่างรอพิจารณา สามารถเป็นรายการใหม่หรือรายการเดิมที่มีการแก้ไขทุกหัวข้อก็ได้ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างรอพิจารณา โดยมีการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขข้อมูลทุกหัวข้อ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่ถูกพิจารณาส่งกลับแก้ไขหลังจากแก้ไขแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |

### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Treaty นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Treaty เพื่อเพิ่มข้อมูล Treaty
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Treaty ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Treaty
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Treaty
- กดไอคอนดินสอเพื่อแก้ไขข้อมูล Treaty
- กดไอคอนนาฬิกาทราย เพื่อดูรายละเอียดของข้อมูล Treaty ที่อยู่ระหว่างรอพิจารณา
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Treaty เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Treaty

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา
- ในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา

### รายละเอียดส่วนเงื่อนไขการค้นหา
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | GIB_Grp_Direct_EB |  |
| 3 | Date Picker | Start Date | ค่าว่าง | วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 10/05/2025 |  |
| 4 | Date Picker | Expire Date | ค่าว่าง | วันที่ Expire Date ต้องมากกว่าเท่ากับ Start Date เสมอ | 10/05/2025 |  |
| 5 | Dropdown List | Status | กรณีเข้าใช้งานด้วยสิทธิ์ Maker ให้ Default เป็น "ทั้งหมด"กรณีเข้าใช้งานด้วยสิทธิ์ Cheker ให้ Default เป็น "รอพิจารณา" | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Treaty | รอส่งพิจารณา |  |

### รายละเอียดส่วนการแสดงข้อมูล
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Treaty | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะแสดงเมื่อมีการอนุมัติรายการไปแล้วอย่างน้อยครั้งหนึ่ง |
|  | Icon | รายละเอียดระหว่างรอพิจารณา | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกอนุมัติอย่างน้อย 1 ครั้ง |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 9 | Label | Reinsurer | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Treaty Code | ชื่อ Treaty | GIB_Grp_Direct_EB |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Icon | ตั้งค่าข้อมูลทั่วไป | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 14 | Icon | ตั้งค่า RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 15 | Icon | ตั้งค่ากรมธรรม์ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 16 | Icon | ตั้งค่า RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |


===== PAGE 1303511522 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty > BD-CF-002-SD001_01 หน้าจอหลัก =====
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่กำลังอยู่ระหว่างส่งให้ Checker พิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาอนุมัติ |
|  | การแสดงผลสำหรับรายการเดิมที่มีการแก้ไขเพิ่มเติมหลังมีการอนุมัติไปแล้วอย่างน้อยหนึ่งครั้ง |
|  | การแสดงผลสำหรับรายการเดิมที่อยู่ระหว่างส่งพิจารณาหลังการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และข้อมูลยังไม่ครบหรือยังไม่พร้อมส่งพิจารณา และยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณาแต่ยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่กำลังอยู่ระหว่างรอพิจารณา สามารถเป็นรายการใหม่หรือรายการเดิมที่มีการแก้ไขทุกหัวข้อก็ได้ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างรอพิจารณา โดยมีการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขข้อมูลทุกหัวข้อ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่ถูกพิจารณาส่งกลับแก้ไขหลังจากแก้ไขแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |


===== PAGE 1303511525 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty > BD-CF-002-SD001_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Treaty นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Treaty เพื่อเพิ่มข้อมูล Treaty
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Treaty ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Treaty
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Treaty
- กดไอคอนดินสอเพื่อแก้ไขข้อมูล Treaty
- กดไอคอนนาฬิกาทราย เพื่อดูรายละเอียดของข้อมูล Treaty ที่อยู่ระหว่างรอพิจารณา
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Treaty เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Treaty

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา
- ในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา


===== PAGE 1303511530 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty > BD-CF-002-SD001_03 เงื่อนไขการค้นหา =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | GIB_Grp_Direct_EB |  |
| 3 | Date Picker | Start Date | ค่าว่าง | วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 10/05/2025 |  |
| 4 | Date Picker | Expire Date | ค่าว่าง | วันที่ Expire Date ต้องมากกว่าเท่ากับ Start Date เสมอ | 10/05/2025 |  |
| 5 | Dropdown List | Status | กรณีเข้าใช้งานด้วยสิทธิ์ Maker ให้ Default เป็น "ทั้งหมด"กรณีเข้าใช้งานด้วยสิทธิ์ Cheker ให้ Default เป็น "รอพิจารณา" | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Treaty | รอส่งพิจารณา |  |


===== PAGE 1303511533 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty > BD-CF-002-SD001_04 ส่วนการแสดงข้อมูล =====
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Treaty | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะแสดงเมื่อมีการอนุมัติรายการไปแล้วอย่างน้อยครั้งหนึ่ง |
|  | Icon | รายละเอียดระหว่างรอพิจารณา | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกอนุมัติอย่างน้อย 1 ครั้ง |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 9 | Label | Reinsurer | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Treaty Code | ชื่อ Treaty | GIB_Grp_Direct_EB |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Icon | ตั้งค่าข้อมูลทั่วไป | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 14 | Icon | ตั้งค่า RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 15 | Icon | ตั้งค่ากรมธรรม์ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 16 | Icon | ตั้งค่า RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |


===== PAGE 1302593930 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty =====
(empty page)


===== PAGE 1302593961 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่ม Treaty " จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (เพิ่มใหม่) |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | Reinsurer | Enable | แสดงข้อมูลรายการ Reinsurer ทั้งหมด ที่มีสถานะ อนุมัติ | Gibraltar | Required Field |
| 2 | Icon | Information Reinsurer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 3 | Free Text | Treaty Code | Enable | ชื่อ Treaty | GIB_Grp_Direct_EB | Required Fieldรหัสของ Treaty ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับTreaty อื่น) |
| 4 | Icon | Information Treaty Code | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 5 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 6 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 7 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 8 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (แก้ไข) |
| 1 | Dropdown List | Reinsurer | Disable | ชื่อย่อ Reinsurer | Gibraltar | แสดงข้อมูลที่บันทึกไว้ |
| 2 | Free Text | Treaty Code | Disable | ชื่อ Treaty | GIB_Grp_Direct_EB | แสดงข้อมูลที่บันทึกไว้ |
| 3 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 4 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
| 5 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 6 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 7 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่าข้อมูลทั่วไปของ Treaty |  |  |


===== PAGE 1303511825 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป > BD-CF-002-SD002-1_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303511827 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป > BD-CF-002-SD002-1_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่ม Treaty " จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1303511829 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป > BD-CF-002-SD002-1_03 ส่วนการบันทึกรายการข้อมูลตั้งค่าข้อมูลทั่วไป =====
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (เพิ่มใหม่) |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | Reinsurer | Enable | แสดงข้อมูลรายการ Reinsurer ทั้งหมด ที่มีสถานะ อนุมัติ | Gibraltar | Required Field |
| 2 | Icon | Information Reinsurer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 3 | Free Text | Treaty Code | Enable | ชื่อ Treaty | GIB_Grp_Direct_EB | Required Fieldรหัสของ Treaty ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับTreaty อื่น) |
| 4 | Icon | Information Treaty Code | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 5 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 6 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 7 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 8 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (แก้ไข) |
| 1 | Dropdown List | Reinsurer | Disable | ชื่อย่อ Reinsurer | Gibraltar | แสดงข้อมูลที่บันทึกไว้ |
| 2 | Free Text | Treaty Code | Disable | ชื่อ Treaty | GIB_Grp_Direct_EB | แสดงข้อมูลที่บันทึกไว้ |
| 3 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 4 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
| 5 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 6 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 7 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |


===== PAGE 1303511831 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป > BD-CF-002-SD002-1_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่าข้อมูลทั่วไปของ Treaty |  |  |


===== PAGE 1302593971 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition =====
(empty page)


===== PAGE 1303740517 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Codition |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Codition |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Condition | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2549 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Condition แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Condition และปรับสถานะ รายการข้อมูลตั้งค่า RI Condition เป็น รอส่งพิจารณา |  |  |


===== PAGE 1303740496 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1_01 หน้าจอหลัก =====
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Codition |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Codition |


===== PAGE 1303740498 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1303740501 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1_03 ส่วนการบันทึกรายการข้อมูลตั้งค่า RI Condition =====
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Condition | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2549 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |


===== PAGE 1303740503 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-1_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Condition แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Condition และปรับสถานะ รายการข้อมูลตั้งค่า RI Condition เป็น รอส่งพิจารณา |  |  |


===== PAGE 1303740529 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Condition จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูลกรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่า RI Condition
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Condition |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
|  | Free Text | Minimum Sum Assured | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 2 | Free Text | RI Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 3 | Free Text | Profit Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 4 | Free Text | Administrative expenses | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 5 | Free Text | Reserve for unearned premiums | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 6 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 7 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 8 | Button | เพิ่ม Layer | Enable | เมื่อกดเพิ่ม ระบบจะแสดง Record ในตารางด้านล่างเพิ่มทีละ 1 Recordสามารถเพิ่มได้ไม่เกิน 3 record |  |  |
| 9 | Icon | Information RI Condition Layer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 10 | Icon | ลบรายการ | Enable | แสดงหน้ารายการ Layer ทุกครั้งเมื่อมีการเพิ่ม Layerเมื่อกด ระบบจะลบรายการ Layer นั้นในกรณีที่ลบแล้วมีรายการ Layer อื่น ๆ อยู่ ระบบจะเรียงลำดับ Layer ใหม่ โดยรายการแรกจะนับเป็น Layer 1 เสมอ |  |  |
| 11 | Free Text | Minimum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 12 | Free Text | Maximum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 13 | Free Text | Percentage Reinsurance | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลในแต่ละ Layer มีช่วงเงินที่ซ้อนทับกัน จะไม่อนุญาตให้บันทึกและแสดง Popup แจ้งเตือน ตัวอย่าง หากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Condition เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |


===== PAGE 1303740535 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1303740537 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Condition จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูลกรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้


===== PAGE 1303740539 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2_03 ส่วนการบันทึกรายการข้อมูลตั้งค่า RI Condition =====
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Condition |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
|  | Free Text | Minimum Sum Assured | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 2 | Free Text | RI Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 3 | Free Text | Profit Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 4 | Free Text | Administrative expenses | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 5 | Free Text | Reserve for unearned premiums | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 6 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 7 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 8 | Button | เพิ่ม Layer | Enable | เมื่อกดเพิ่ม ระบบจะแสดง Record ในตารางด้านล่างเพิ่มทีละ 1 Recordสามารถเพิ่มได้ไม่เกิน 3 record |  |  |
| 9 | Icon | Information RI Condition Layer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 10 | Icon | ลบรายการ | Enable | แสดงหน้ารายการ Layer ทุกครั้งเมื่อมีการเพิ่ม Layerเมื่อกด ระบบจะลบรายการ Layer นั้นในกรณีที่ลบแล้วมีรายการ Layer อื่น ๆ อยู่ ระบบจะเรียงลำดับ Layer ใหม่ โดยรายการแรกจะนับเป็น Layer 1 เสมอ |  |  |
| 11 | Free Text | Minimum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 12 | Free Text | Maximum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 13 | Free Text | Percentage Reinsurance | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |


===== PAGE 1303740541 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-2 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition > BD-CF-002-SD002-2-2_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลในแต่ละ Layer มีช่วงเงินที่ซ้อนทับกัน จะไม่อนุญาตให้บันทึกและแสดง Popup แจ้งเตือน ตัวอย่าง หากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Condition เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |


===== PAGE 1302593974 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ =====
(empty page)


===== PAGE 1304592385 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่ากรมธรรม์ |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่ากรมธรรม์ |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นการบันทึกข้อมูลรายกรมธรรม์

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจาก policy_no จากมากไปน้อย |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่ากรมธรรม์ | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | Refresh | เมื่อกดปุ่ม ระบบจะดึงข้อมูลกรมธรรม์ภายใต้ Reinsured No Thaire ทั้งหมดที่ระบบดึงข้อมูลมาเก็บไว้ มาแสดง |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  |  |
| 4 | Label | Policy No. | เลขที่กรมธรรม์ | GA2683 |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer ที่ถูกกำหนดบนของกรมธรรม์กลุ่ม | TG010 |  |
| 6 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะม่นำกรมธรรม์นี้ไปประมวลผล | Active |  |
| 7 | Label | Coverage Period From | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Coverage Period From ต้องน้อยกว่าเท่ากับ Coverage Period To เสมอ | 10/05/2568 |  |
| 8 | Label | Coverage Period To | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 |  |
| 9 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะบันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |


===== PAGE 1304592390 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1_1 หน้าจอหลัก =====
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่ากรมธรรม์ |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่ากรมธรรม์ |


===== PAGE 1304592392 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1_2 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นการบันทึกข้อมูลรายกรมธรรม์


===== PAGE 1304592394 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1_3 ส่วนการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ =====
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจาก policy_no จากมากไปน้อย |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่ากรมธรรม์ | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | Refresh | เมื่อกดปุ่ม ระบบจะดึงข้อมูลกรมธรรม์ภายใต้ Reinsured No Thaire ทั้งหมดที่ระบบดึงข้อมูลมาเก็บไว้ มาแสดง |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  |  |
| 4 | Label | Policy No. | เลขที่กรมธรรม์ | GA2683 |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer ที่ถูกกำหนดบนของกรมธรรม์กลุ่ม | TG010 |  |
| 6 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะม่นำกรมธรรม์นี้ไปประมวลผล | Active |  |
| 7 | Label | Coverage Period From | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Coverage Period From ต้องน้อยกว่าเท่ากับ Coverage Period To เสมอ | 10/05/2568 |  |
| 8 | Label | Coverage Period To | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 |  |
| 9 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |


===== PAGE 1304592396 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-1_4 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะบันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |


===== PAGE 1304592387 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่ากรมธรรม์
| ส่วนบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Toggle switch | เปิด/ปิดใช้งานกรมธรรม์ | Inactive | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะไม่นำกรมธรรม์นี้ไปประมวลผล | Inactive |  |
| 2 | Free Text | Current Policy No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | GA2683 |  |
| 3 | Free Text | Previous Policy No. | Disable | กรณีพบข้อมูลจากจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้ตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอกกรณีไม่พบข้อมูลจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้เปิด Field Previous Policy No เพื่อให้ผู้ใช้งานกรอกข้อมูลเพื่อค้นหากรมธรรม์ที่ถูก Config ไว้บนระบบเมื่อกรอกแล้วกดปุ่ม Search ระบบจะตรวจสอบข้อมูลว่ากรมธรรม์นั้นมีข้อมูลอยู่จริงหากไม่พบข้อมูลกรมธรรม์ ระบบจะแสดงข้อความสีแดงด้านล่าง "ไม่พบกรมธรรม์"หากพบข้อมูล ระบบจะตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  |  |
| 4 | Button | Search | Disable | เปิดให้กดได้เมื่อ Previous Policy No ไม่มีข้อมูล |  |  |
| 5 | Free Text | Policy Name | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | Ocean Life Insurance Public Company Limited (welfare group) |  |
| 6 | Free Text | Reinsured No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  |  |
| 7 | Free Text | Code Name | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | OLI | Required Field |
| 8 | Free Text | Commencement Date | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | GA2641 | Required Field |
| 9 | Free Text | Policy Year | Disable | ระบบจะแสดงจำนวนปี โดยคำนวณจากจำนวนเดือนระหว่างCoverage Period From และ Commencement Dateจากนั้นนำจำนวนเดือนที่ได้มาแปลงเป็นปี (นับรวมเดือนเริ่มต้นด้วย)ตัวอย่าง (ปัดเศษขึ้น):Commencement Date: มีนาคม 2022Coverage Period From: สิงหาคม 2023การคำนวณ:ระยะเวลาตั้งแต่ มี.ค. 2022 ถึง ส.ค. 2023 = 18 เดือนเมื่อนำมาแปลงเป็นปี = 1.5 ปีระบบทำการ ปัดเศษขึ้น → 2 ปี | 22 |  |
| 10 | Icon | Information Policy Year | Disable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 11 | Free Text | Age Limit | Enable |  | 60 | Required Field |
| 12 | Dropdown List | Occupation Class | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Occupation class | 1 | Required Field |
| 13 | Date Picker | Coverage Period From | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2024 |  |
| 14 | Date Picker | Coverage Period To | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2025 |  |
| 15 | Free Text | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable |  | 00001,00002 |  |
|  | Icon | Information CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 16 | Free Text | Remark | Enable |  |  |  |
| 17 | Dropdown List | Coverage | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Policy Coverage & Premium Type | AD&D Type 1 | Required Field |
| 18 | Free Text | AD&D | Enable |  | 20.50 | Required Field |
| 19 | Icon | Information AD&D | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 20 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Murder & Assault (MA) | Enable | แสดง Dropdown ตัวเลือกดังนี้0255075100 | 20.50 | Required Field |
| 21 | Free Text | Special Coverage | Enable |  | 20.50 | Required Field |
| 22 | Free Text | Loss finger of same hand | Enable |  | 20.50 | Required Field |
| 23 | Icon | Information Loss finger of same hand | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 24 | Free Text | RI Premium Loading for Motorcycle | Enable |  | 20.50 | Required Field |
| 25 | Free Text | RI Premium Loading for War | Enable |  | 20.50 | Required Field |
| 26 | Free Text | RI Premium Loading for Strike and Riot | Enable |  | 20.50 | Required Field |
| 27 | Free Text | RI Premium Loading for Sports and Activities | Enable |  | 20.50 | Required Field |
| 28 | Free Text | RI Premium Loading for Aircraft | Enable |  | 20.50 | Required Field |
| 29 | Free Text | Discount for MA | Disable | สัมพันธ์กับการกรอกข้อมูลใน Murder & Assault (MA) ต้องตรงกับ Config Discount for Murder&Assault ที่ % Sum Assured of Murder&Assualtกรณีที่กรอกตรงกัน ระบบจะแสดง Discount Rate ตามกำหนดกรณีกรอกไม่ตรงกับ ระบบจะไม่แสดงข้อมูล แต่จะไม่สามารถบันทึกข้อมูลทั้งหมดได้ เพราะระบบบังคับให้กรอก | 20.50 |  |
| 30 | Icon | Information Discount for MA | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 31 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Discount Group Volume | Enable | แสดง Dropdown ตัวเลือกดังนี้0101520253035 | 20.50 | Required Field |
| 32 | Icon | Information Discount Group Volume | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากตั้งค่า ปิดใช้งานกรมธรรม์ สามารถบันทึกข้อมูลได้โดยไม่ต้องกรอกข้อมูลตาม Field บังคับ |  |  |


===== PAGE 1304592403 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2_1 หน้าจอหลัก =====
(empty page)


===== PAGE 1304592414 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2_2 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1304592416 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2_3 ส่วนการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ =====
| ส่วนบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Toggle switch | เปิด/ปิดใช้งานกรมธรรม์ | Inactive | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะไม่นำกรมธรรม์นี้ไปประมวลผล | Inactive |  |
| 2 | Free Text | Current Policy No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | GA2683 |  |
| 3 | Free Text | Previous Policy No. | Disable | กรณีพบข้อมูลจากจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้ตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอกกรณีไม่พบข้อมูลจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้เปิด Field Previous Policy No เพื่อให้ผู้ใช้งานกรอกข้อมูลเพื่อค้นหากรมธรรม์ที่ถูก Config ไว้บนระบบเมื่อกรอกแล้วกดปุ่ม Search ระบบจะตรวจสอบข้อมูลว่ากรมธรรม์นั้นมีข้อมูลอยู่จริงหากไม่พบข้อมูลกรมธรรม์ ระบบจะแสดงข้อความสีแดงด้านล่าง "ไม่พบกรมธรรม์"หากพบข้อมูล ระบบจะตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  |  |
| 4 | Button | Search | Disable | เปิดให้กดได้เมื่อ Previous Policy No ไม่มีข้อมูล |  |  |
| 5 | Free Text | Policy Name | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | Ocean Life Insurance Public Company Limited (welfare group) |  |
| 6 | Free Text | Reinsured No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  |  |
| 7 | Free Text | Code Name | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | OLI | Required Field |
| 8 | Free Text | Commencement Date | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | GA2641 | Required Field |
| 9 | Free Text | Policy Year | Disable | ระบบจะแสดงจำนวนปี โดยคำนวณจากจำนวนเดือนระหว่างCoverage Period From และ Commencement Dateจากนั้นนำจำนวนเดือนที่ได้มาแปลงเป็นปี (นับรวมเดือนเริ่มต้นด้วย)ตัวอย่าง (ปัดเศษขึ้น):Commencement Date: มีนาคม 2022Coverage Period From: สิงหาคม 2023การคำนวณ:ระยะเวลาตั้งแต่ มี.ค. 2022 ถึง ส.ค. 2023 = 18 เดือนเมื่อนำมาแปลงเป็นปี = 1.5 ปีระบบทำการ ปัดเศษขึ้น → 2 ปี | 22 |  |
| 10 | Icon | Information Policy Year | Disable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 11 | Free Text | Age Limit | Enable |  | 60 | Required Field |
| 12 | Dropdown List | Occupation Class | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Occupation class | 1 | Required Field |
| 13 | Date Picker | Coverage Period From | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2024 |  |
| 14 | Date Picker | Coverage Period To | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2025 |  |
| 15 | Free Text | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable |  | 00001,00002 |  |
|  | Icon | Information CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 16 | Free Text | Remark | Enable |  |  |  |
| 17 | Dropdown List | Coverage | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Policy Coverage & Premium Type | AD&D Type 1 | Required Field |
| 18 | Free Text | AD&D | Enable |  | 20.50 | Required Field |
| 19 | Icon | Information AD&D | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 20 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Murder & Assault (MA) | Enable | แสดง Dropdown ตัวเลือกดังนี้0255075100 | 20.50 | Required Field |
| 21 | Free Text | Special Coverage | Enable |  | 20.50 | Required Field |
| 22 | Free Text | Loss finger of same hand | Enable |  | 20.50 | Required Field |
| 23 | Icon | Information Loss finger of same hand | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 24 | Free Text | RI Premium Loading for Motorcycle | Enable |  | 20.50 | Required Field |
| 25 | Free Text | RI Premium Loading for War | Enable |  | 20.50 | Required Field |
| 26 | Free Text | RI Premium Loading for Strike and Riot | Enable |  | 20.50 | Required Field |
| 27 | Free Text | RI Premium Loading for Sports and Activities | Enable |  | 20.50 | Required Field |
| 28 | Free Text | RI Premium Loading for Aircraft | Enable |  | 20.50 | Required Field |
| 29 | Free Text | Discount for MA | Disable | สัมพันธ์กับการกรอกข้อมูลใน Murder & Assault (MA) ต้องตรงกับ Config Discount for Murder&Assault ที่ % Sum Assured of Murder&Assualtกรณีที่กรอกตรงกัน ระบบจะแสดง Discount Rate ตามกำหนดกรณีกรอกไม่ตรงกับ ระบบจะไม่แสดงข้อมูล แต่จะไม่สามารถบันทึกข้อมูลทั้งหมดได้ เพราะระบบบังคับให้กรอก | 20.50 |  |
| 30 | Icon | Information Discount for MA | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 31 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Discount Group Volume | Enable | แสดง Dropdown ตัวเลือกดังนี้0101520253035 | 20.50 | Required Field |
| 32 | Icon | Information Discount Group Volume | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |


===== PAGE 1304592418 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-3 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ > BD-CF-002-SD002-3-3 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากตั้งค่า ปิดใช้งานกรมธรรม์ สามารถบันทึกข้อมูลได้โดยไม่ต้องกรอกข้อมูลตาม Field บังคับ |  |  |


===== PAGE 1302593977 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate =====
(empty page)


===== PAGE 1304592431 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Premium Rate |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Premium Rate |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Premium Rate | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2550 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Premium Rate แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Premium Rate และปรับสถานะ รายการข้อมูลตั้งค่า RI Premium Rate เป็น รอส่งพิจารณา |  |  |


===== PAGE 1304592435 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1_1 หน้าจอหลัก =====
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Premium Rate |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Premium Rate |


===== PAGE 1304592437 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1_2 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1304592439 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1_3 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate =====
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Premium Rate | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2550 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |


===== PAGE 1304592442 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-1_4 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Premium Rate แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Premium Rate และปรับสถานะ รายการข้อมูลตั้งค่า RI Premium Rate เป็น รอส่งพิจารณา |  |  |


===== PAGE 1304592433 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Premium Rate จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่า RI Premium Rate
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Premium Rate |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 2 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 3 | Free Text | RI Premium Rate | Enable | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 20.50 | Required Field |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Premium Rate เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |


===== PAGE 1304592453 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2_1 หน้าจอหลัก =====
(empty page)


===== PAGE 1304592456 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2_2 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Premium Rate จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1304592458 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2_3 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate =====
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Premium Rate |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 2 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 3 | Free Text | RI Premium Rate | Enable | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 20.50 | Required Field |


===== PAGE 1304592460 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD002 หน้าจอเพิ่มข้อมูล Treaty > BD-CF-002-SD002-4 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate > BD-CF-002-SD002-4-2_4 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Premium Rate เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |


===== PAGE 1302593932 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนรูปเอกสาร บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการดูรายละเอียดข้อมูล Treaty
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2543 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/2642 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/2642 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1304592494 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty > BD-CF-002-SD003_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1304592496 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty > BD-CF-002-SD003_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนรูปเอกสาร บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล


===== PAGE 1304592498 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty > BD-CF-002-SD003_03 ส่วนการดูรายละเอียดข้อมูล Treaty =====
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2543 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/2642 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/2642 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |


===== PAGE 1304592500 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty > BD-CF-002-SD003_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1302593952 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนค้อน บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วนสามารถบันทึกผลพิจารณาข้อมูล Treaty ได้
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- สามารถบันทึกผลพิจารณาข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนพิจารณาข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3009 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Treaty แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Treaty |  |  |


===== PAGE 1304985617 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty > BD-CF-002-SD004_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1304985628 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty > BD-CF-002-SD004_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนค้อน บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วนสามารถบันทึกผลพิจารณาข้อมูล Treaty ได้
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- สามารถบันทึกผลพิจารณาข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล


===== PAGE 1304985631 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty > BD-CF-002-SD004_03 ส่วนการพิจารณาข้อมูล Treaty =====
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3009 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |


===== PAGE 1304985635 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty > BD-CF-002-SD004_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Treaty แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Treaty |  |  |


===== PAGE 1302593954 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนนาฬิกาทราย บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3552 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1304985606 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty > BD-CF-002-SD005_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1304985608 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty > BD-CF-002-SD005_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนนาฬิกาทราย บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล


===== PAGE 1304985610 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty > BD-CF-002-SD005_03 ส่วนการดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty =====
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3552 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |


===== PAGE 1304985612 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty > BD-CF-002-SD005_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1302593957 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Treaty
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนดูประวัติเปลี่ยนสถานะข้อมูล Treaty
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Treaty ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Checker ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Checker แล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Checker ส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Checker อนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


===== PAGE 1304592477 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty > BD-CF-002-SD006_01 หน้าจอหลัก =====
(empty page)


===== PAGE 1304592479 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty > BD-CF-002-SD006_02 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Treaty
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล


===== PAGE 1304592481 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty > BD-CF-002-SD006_03 ส่วนการดูประวัติเปลี่ยนสถานะข้อมูล Treaty =====
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Treaty ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Checker ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Checker แล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Checker ส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Checker อนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |


===== PAGE 1304592483 | Software Requirements Specification > 03. Business Processes and Screens Design > 06. Module Master Config (CF) > BD-CF-002 กระบวนการจัดการข้อมูล Treaty > BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty > BD-CF-002-SD006_04 เงื่อนไขปุ่ม =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |


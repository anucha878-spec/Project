# EDW-MPS-SD010 หน้าจอนำเข้าข้อมูล Actual SA

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=936837635
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
##### Function EDW-MPS-SD010 หน้าจอนำเข้าข้อมูล Actual SA

**StateDiagram : [StateDiagram_EDW-MPS-SD010.png](http://wiki.thaisamut.co.th/download/attachments/936837635/Screen%20Shot%202565-02-08%20at%2015.19.34.png?version=1&modificationDate=1644309192551&api=v2)**

**ERDiagram: [er_mps_actsa.png](http://wiki.thaisamut.co.th/download/attachments/936837635/er_mps_actsa.png?version=1&modificationDate=1720774925998&api=v2)**

เป็นหน้าจอสำหรับฝ่ายคณิศาสตร์ทำการนำเข้าข้อมูลกรมธรรม์สามัญ อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์ ณ สิ้นเดือน

##### Mock-up / Wireframe

![](http://wiki.thaisamut.co.th/download/attachments/936837635/actual-sa.png?version=1&modificationDate=1660707616750&api=v2)

Screen EDW-MPS-SD010 หน้าจอนำเข้าข้อมูล Actual SA

![](http://wiki.thaisamut.co.th/download/attachments/936837635/as.png?version=1&modificationDate=1652235577811&api=v2)

Screen EDW-MPS-SD010_1 หน้าจอ popup ยืนยันการนำเข้าข้อมูล

![](http://wiki.thaisamut.co.th/download/attachments/936837635/Screen%20Shot%202565-02-23%20at%2012.54.01.png?version=1&modificationDate=1645595663701&api=v2)

Screen EDW-MPS-SD010_2 หน้าจอ popup hyperlink ORD - ActualSA

![](http://wiki.thaisamut.co.th/download/attachments/936837635/image2022-4-4%2016%3A13%3A38.png?version=1&modificationDate=1649063617837&api=v2)

Screen EDW-MPS-SD010_3 หน้าจอ popup hyperlink IND - ActualSA

##### Description

| No. | Topic | Description |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | เพื่อนำเข้าข้อมูล Monthly Policy Status Snapshot สำหรับกรมธรรม์สามัญ อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์ ณ สิ้นเดือน |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่ายคณิตศาสตร์ |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | เลขที่กรมธรรม์ที่มีการปรับมูลค่ากรมธรรม์ จากฐานข้อมูลในระบบ AS400 |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูล Monthly Policy Status Snapshot ข้อมูลกรมธรรม์สามัญ อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์รายละเอียดการนำเข้าข้อมูล |
| 5 | การกระทำกับหน้าจอ(Actions) | ดึงข้อมูลเลขที่กรมธรรม์สามัญ อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์ของกรมธรรม์ ณ สิ้นเดือนก่อนหน้าดูรายละเอียดการนำเข้าข้อมูลยืนยันหรือยกเลิกข้อมูลนำเข้า |
| 6 | อธิบายรายละเอียด(Description) | **Screen EDW-MPS-SD010 หน้าจอนำเข้าข้อมูล Actual SA** รายละเอียดดังนี้หน้าจอแสดงรายการข้อมูล ณ รอบการประมวลผลของรอบเดือนปัจจุบัน พร้อมสถานะรายการล่าสุด ประกอบด้วยข้อมูล ดังนี้Drop down “ประจำเดือน” แสดงเดือน ปีของรอบการประมวลผลปัจจุบัน โดยแสดงผลแบบ "YYYY/MM" โดยมีรูปแบบดังนี้MM แสดงเดือนเป็นตัวเลข 2 หลัก เช่น 01, 12YYYY แสดงปี ค.ศ. **พ.ศ.** เป็นตัวเลข 4 หลัก เช่น 2021 **2565**ระบบสามารถนำเข้าข้อมูลได้เฉพาะรอบการประมวลผลปัจจุบันแสดงรายการข้อมูลย้อนหลังได้ กรณีที่มีข้อมูลในระบบ (search ค้นหาเพิ่ม) เพื่อรองรับการทดสอบ SIT, UAT สำหรับการกำหนดรอบประมวลผลย้อนหลัง หรือล่วงหน้า จึงมีการปรับให้กำหนดค่า รอบประมวลผล จาก system configure จากเดิม default ที่เดือนปัจจุบัน - 1 โดยมีเงื่อนไขตาม [A17. การกำหนดรอบประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971014593)ปุ่ม “นำเข้าข้อมูล” สำหรับนำเข้าข้อมูลที่ปรับมูลค่ากรมธรรม์ของกรมธรรม์ โดยมีเงื่อนไขการ Enable และการดำเนินการดังนี้ Enable ปุ่ม "นำเข้าข้อมูล" ตามเงื่อนไขดังนี้เมื่อยังไม่มีรายการข้อมูลในรอบการประมวลผลปัจจุบันเมื่อสถานะรายการข้อมูลล่าสุดเป็น "นำเข้าไม่สำเร็จ" หรือ "ยกเลิกข้อมูล"หลังกดปุ่ม ระบบจะดำเนินการเปิดหน้าจอ Popup เพื่อระบุหมายเหตุ ยืนยันการนำเข้า หากกดปุ่มปิด หรือ “ยกเลิก” ระบบปิดหน้าจอ Popup และกลับสู่หน้าจอหลัก หากกดปุ่ม “ยืนยัน” ระบบดำเนินการ ดังนี้แสดง Alert Message “ระบบกำลังประมวลผลข้อมูล” และปรับสถานะรายการเป็น “กำลังดำเนินการ”ดึงข้อมูลมูลค่ากรมธรรม์ของกรมธรรม์สามัญ อุตสาหกรรม เพื่อ Update ข้อมูล Actual SA ที่ฐานข้อมูล Monthly Policy Status Snapshot โดยใช้ esb [WS_EDW3_10 ดึงข้อมูล actual sa](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=942866874)กรมธรรม์สามัญ ดึงข้อมูลจาก table [OICLIB_OMPPOLMS](http://wiki.thaisamut.co.th/display/APP/OICLIB_OMPPOLMS) field POACSA และ บันทึกข้อมูลที่ [tx_mps_actual_sa_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ord).current_sum_insured current_sum_assured ตัวอย่าง ต้องการดึงข้อมูลของเดือน มกราคม ให้ดึงข้อมูล period ทั้งเดือนคือตั้งแต่ 1 มกราคม - 31 มกราคมกรมธรรม์อุตสาหกรรม ดึงข้อมูลจาก table ACTLIB_RESMSMS0 field MSACSA และ ACTLIB.RESMATI, ACTLIB.RESMATG field MTACSA โดยไม่ต้องใช้เงื่อนไขในการค้นหาเนื่องจากข้อมูลจะเก็บเดือนก่อนหน้าเสมอ และ บันทึกข้อมูลที่ [tx_mps_actual_sa_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ind).current_sum_insured current_sum_assured หากดำเนินการเสร็จสิ้น ระบบดำเนินการดังนี้กรณีสำเร็จ ปรับสถานะเป็น "ยืนยันนำเข้าข้อมูลสำเร็จ"กรณีไม่สำเร็จ ปรับสถานะ “นำเข้าไม่สำเร็จ” พร้อมแจ้ง Error Message ที่ “หมายเหตุ”รายละเอียดของ Data Grid ดังนี้“ครั้งที่” แสดงจำนวนรายการนำเข้าข้อมูลในรอบการประมวลผลปัจจุบัน“ดำเนินการ” ภายใต้ column มีปุ่มการทำงาน ดังนี้ปุ่ม “ยกเลิก” สำหรับยกเลิกข้อมูลนำเข้า หากกดปุ่ม ระบบจะดำเนินการเปิด Popup เพื่อยืนยันการยกเลิกข้อมูล พร้อมระบุหมายเหตุ รายละเอียด ดังนี้ เงื่อนไขการ Enable ปุ่มเมื่อยังอยู่ในกระบวนการนำเข้าข้อมูล โดยสถานะข้อมูลนำเข้าในหน้าจอเป็น "รอยืนยันข้อมูล" หรือ "ยืนยันนำเข้าข้อมูลสำเร็จ”มีการ “ยกเลิกรายการ” จากหน้าจอ ประมวลผล MPS (อ้างอิง [MPS002-FD001](https://docs.google.com/document/d/1icFu-0Zyw472qLpycqeMJ1ZqkVnnaYeOxVWVgTzFPz8/edit#heading=h.8wk1chy15n90)) โดยสถานะรายการประมวลผลเป็น “รอนำเข้าข้อมูล” หรือ “รอนำส่งไฟล์เพื่อติด Tagging” "ยกเลิกรายการ"หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะเป็น “ยกเลิกข้อมูล”หากไม่สำเร็จ ไม่ปรับสถานะรายการ“วัน และเวลาดำเนินการ” แสดงวัน และเวลานำเข้าข้อมูล ในรูปแบบ DD/MM/YYYY HH:MM:SS รายละเอียด ดังนี้DD คือ วันที่แบบ 01-31MM คือ เดือนแบบ 01-12YYYY คือ ปี ค.ศ. แบบ 1999-9999 **พ.ศ. แบบ 2500-9999**HH คือ ชั่วโมง แบบ 00-24MM คือ นาที แบบ 00-60SS คือ วินาที แบบ 00-60“ผู้ดำเนินการ” แสดงผู้นำเข้าข้อมูล ในรูปแบบ Login ID“สถานะ” แสดงสถานะการนำเข้าข้อมูล (อ้างอิง สถานะ จาก Appendix [A10.5 สถานะรายการหน้าจอนำเข้าข้อมูล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=949911990))"ORD - actualSA" เป็น hyperlink แสดงจำนวนรายการกรมธรรม์สามัญ ที่มีการปรับมูลค่ากรมธรรม์ (อ้างอิง Screen EDW-MPS-SD010_2 หน้าจอ popup hyperlink ORD - ActualSA) โดยมีรายละเอียด field ดังนี้สถานะจำนวนกรมธรรม์เบี้ยรายปี คำนวณจากเบี้ย = [OICLIB_OMPPOLMS](http://wiki.thaisamut.co.th/display/APP/OICLIB_OMPPOLMS).POPREM + [OICLIB_OMPPOLMS](http://wiki.thaisamut.co.th/display/APP/OICLIB_OMPPOLMS).POEXPRหาโหมดการชำระจาก [OICLIB_OMPPOLMS](http://wiki.thaisamut.co.th/display/APP/OICLIB_OMPPOLMS).POMOD# จากนั้นเข้าสูตรเพื่อหาเบี้ยรายปี ถ้า mode 12; เบี้ยรายปี = เบี้ย * 1 ถ้า mode 6; เบี้ยรายปี = เบี้ย * 2 ถ้า mode 3; เบี้ยรายปี = เบี้ย * 4 ถ้า mode 1; เบี้ยรายปี = เบี้ย * 12ทุนเริ่มต้นทุนปัจจุบัน"IND - actualSA" เป็น hyperlink แสดงจำนวนรายการกรมธรรม์อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์ (อ้างอิง Screen EDW-MPS-SD010_3 หน้าจอ popup hyperlink IND - ActualSA) สถานะที่ไม่ใช่ "I","F","R" จะ fix field "จำนวนกรมธรรม์", "เบี้ยรายปี", "ทุนเริ่มต้น", "ทุนปัจจุบัน" เป็น 0 โดยมีรายละเอียด field ดังนี้สถานะจำนวนกรมธรรม์เบี้ยรายปี คำนวณโดยใช้ field MSPREM (เบี้ยรายเดือน) * 12ทุนเริ่มต้นทุนปัจจุบัน “หมายเหตุ” แสดงหมายเหตุที่ระบุจากการ Update ข้อมูลเข้าระบบ, การยืนยันข้อมูลนำเข้า, การยกเลิกข้อมูลนำเข้า, หรือ Error Message จากระบบกรณีพบ Invalid Data Format |
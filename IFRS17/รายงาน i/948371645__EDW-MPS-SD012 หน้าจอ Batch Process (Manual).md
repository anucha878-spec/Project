# EDW-MPS-SD012 หน้าจอ Batch Process (Manual)

- pageId: `948371645`
- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=948371645
- source: Playwright MCP capture

---
Execute

[ [Mock-up / Wireframe](#EDW-MPS-SD012หน้าจอBatchProcess(Manual)-Mock-up/Wireframe) ] [ [Description](#EDW-MPS-SD012หน้าจอBatchProcess(Manual)-Description) ]

หน้าจอสำหรับ QA ทำการ Execute Batch ข้อมูล Monthly Policy Status Snapshot เพื่อใช้สำหรับการทดสอบระบบ

##### Mock-up / Wireframe

![](http://wiki.thaisamut.co.th/download/attachments/948371645/2025-09-24_144531.png?version=1&modificationDate=1758707065007&api=v2)

Screen EDW-MPS-SD012 หน้าจอ Batch Process (Manual)

##### Description

| No. | Topic | Description | | | |
| --- | --- | --- | --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | เพื่อนำเข้าข้อมูล Monthly Policy Status Snapshot ของกรมธรรม์ประเภทสามัญ, Rider สามัญ, อุตสาหกรรม, อุบัติเหตุ, ยูนิตลิงค์, และประกันกลุ่ม โดยใช้สำหรับการทดสอบ SIT, UAT | | | |
| 2 | ผู้ใช้งาน (Target Users) | ฝ่าย QA | | | |
| 3 | ข้อมูลที่ป้อนสู่ระบบ(Input) | ข้อมูลกรมธรรม์ฐานข้อมูล AS400 และ SQL ประกันกลุ่ม | | | |
| 4 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลที่ตาราง Landing Monthly Policy Status Snapshot ประกอบด้วยข้อมูลกรมธรรม์หลัก ประกอบด้วยข้อมูลกรมธรรม์, ข้อมูลลูกค้าข้อมูล Rider ประกอบด้วยข้อมูลกรมธรรม์ Rider และข้อมูลลูกค้า | | | |
| 5 | การกระทำกับหน้าจอ(Actions) | Execute Batch Process | | | |
| 6 | อธิบายรายละเอียด(Description) | กรณี | รายการข้อมูล [A10.3_1 เงื่อนไข Enable/Disable ปุ่ม หน้าจอ ประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1263370506) | เงื่อนไข | หมายเหตุ |
| Untag | ขั้นตอนที่ข้อมูลถูกบันทึกลง Landing จังหวะ **Untag** | เข้าทั้ง 2 เงื่อนไข 1) กรณีพบว่าอยู่ในกระบวนการประมวลผล MPS (เงื่อนไขจาก สถานะ [หน้าจอประมวลผล MPS ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352)ของรอบประมวลผลปัจจุบัน มีรายการข้อมูลที่ [tx_mps_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_header).mps_process_status_id) 2) และสถานะประมวลผล MPS ไม่เป็น "ยกเลิกรายการ" | - เงื่อนไขเดิมก่อน New Closing OIC- กรณีกลุ่มข้อมูล Landing Untag จะไม่สามารถนำเข้าข้อมูลได้หลังจากเริ่มประมวลผล Untag | | |
| Master | ขั้นตอนที่ข้อมูลถูกบันทึกลง Landing จังหวะ** Master** | กรณีพบว่าอยู่ในกระบวนการประมวลผล MPS โดยสถานะของ [หน้าจอประมวลผล MPS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=918028352) เป็น "**กำลังดำเนินส่งข้อมูลเข้าระบบ EDW**" หรือ "**ระบบส่งข้อมูลเข้าระบบ EDW สำเร็จ**" | - ปรับเนื่องจาก New Closing OIC) - กรณีกลุ่มข้อมูล Landing Master จะไม่สามารถนำเข้าข้อมูลได้หลังจากเริ่มประมวลผล Master | | |

**หากรายการข้อมูล และสถานะการประมวลผล MPS เข้าเงื่อนไขตามตารางด้านบน เมื่อกดปุ่มให้แสดงข้อความ "ไม่สามารถประมวลผลได้ เนื่องจากอยู่ในกระบวนการประมวลผล MPS"**

**ปรับเพิ่มเติมจากโครงการ EDW 5.1 Group 1 เรื่องการ Lean Process ปรับปรุงข้อมูลกรมธรรม์สามัญ**

1. ระบบจะแสดงรายการ "ดึงข้อมูลสำหรับ ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส." ด้วยข้อมูลจาก Table : [tx_mps_backdate_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_hd)
2. ปุ่ม “Execute” สำหรับการ** I01 Main Policy Master GMM (แบบประกันสามัญ) **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
3. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
4. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้**ลบข้อมูล Landing I01 ของแบบประกันสามัญ ของ Period เดือนปัจจุบัน ([tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord))
5. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)

ลบข้อมูล Landing I01 ของแบบประกันสามัญ ([tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS001 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์สามัญ,บำนาญ, Credit Life (MRTA/MLTA)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896441)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I01 Main Policy Master GMM (แบบประกันอุตสาหกรรม) **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing I01 ของแบบประกันอุตสาหกรรม ของ Period เดือนปัจจุบัน ([tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)

ลบข้อมูล Landing I01 ของแบบประกันอุตสาหกรรม ([tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS002 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896444)

1. เงื่อนไขการดึงข้อมูล ดังนี้กรณีกธ.สถานะ active ดึงข้อมูลทั้งฐาน ข้อ 1,4 เรียก esb ด้วย เงื่อนไข ดังนี้status มีค่าเท่ากับ 'active'
2. policyType ทั้งปช. 'I' และขพ. ('G')

กรณีกธ.สถานะ lapse ข้อ 2, 5 ดึงด้วยเงื่อนไข วันที่ update date ภายในรอบประมวลผลปัจจุบัน - 1 เดือน ถึงรอบประมวลผลปัจจุบัน เรียก esb ด้วย เงื่อนไข ดังนี้

1. status มีค่าเท่ากับ 'lapse'
2. policyType ทั้งปช. 'I' และขพ. ('G')
3. fistYearMonth ด้วยปีเดือนของรอบประมวลผล ตัวอย่าง period = 202308 ให้ส่ง input ด้วยค่า 6607
4. endYearMonth ด้วยปีเดือนของรอบประมวลผล ตัวอย่าง period = 202308 ให้ส่ง input ด้วยค่า 6608

กรณีกธ.สถานะ inactive ดึงด้วยเงื่อนไข วันที่ update date ในช่วงเดือนรอบประมวลผลปัจจุบัน 04/Jun/24: ยกเลิกกระบวนการดึงข้อมูล inactive สิ้นเดือน เนื่องจากพบข้อมูล duplicate ใน process การอนุมัติสินไหมสิ้นผลแบบ daily process MTD-263

1. (กรณี golive UR Closing Timeline [02 - UR - Closing Timeline - Daily Update Policy Status & Movement](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1105527051)) มีการปรับ field เงื่อนไขที่ใช้ดึงข้อมูล inactive จากวันที่ update date เป็น วันที่สิ้นเดือนของงวดบัญชี [[UR - Closing Timeline] WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1124073544)- ข้อ 3.1 และ 6.1 เรียก esb ด้วย เงื่อนไข ดังนี้status มีค่าเท่ากับ 'inactive'
2. policyType ทั้งปช. 'I' และขพ. ('G')
3. monthYear ด้วยปีเดือนของรอบประมวลผลในรูปแบบ YYYYMM ตัวอย่าง period = 202308 ให้ส่ง input ด้วยค่า 256608 (จากเดิมส่งค่าด้วย YYMM 6609)

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I02 Rider Products Policy Master GMM (แบบประกันสามัญ) **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing I02 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)****

ลบข้อมูล Landing I02 ของแบบประกันสามัญ ([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS001 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์สามัญ,บำนาญ, Credit Life (MRTA/MLTA)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896441)ส่วนสัญญาเพิ่มเติม

1. **ปรับเพิ่มเติมจากโครงการ EDW 6 **ตรวจสอบข้อมูล แผนย่อยของแบบประกัน เพื่อ Update ข้อมูล SubRiderPlan ด้วยเงื่อนไข [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).sub_plan = [tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider).coverage_rider_code และ [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).rider_plan_code = [tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider).rider_codeกรณี**พบ**ข้อมูลตรงกันให้ Update ค่า SubRiderPlan ([tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider).sub_rider_plan) ที่ Landing Rider ORD ( [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).sub_rider_plan)
2. กรณี**ไม่****พบ**ข้อมูลไม่ตรงกันดำเนินการต่อในข้อถัดไป

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I02 Rider Products Policy Master GMM (แบบประกันอุตสาหกรรม) **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing I02 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)

ลบข้อมูล Landing I02 ของแบบประกันอุตสาหกรรม ([tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ[WS_EDW3_19 ดึงข้อมูลกรมธรรม์ rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=991101354)

1. Update ข้อมูลวันครบกำหนดสัญญาของ Rider อุตสาหกรรม (เนื่องจาก AS400 ไม่มีจัดเก็บข้อมูล โดยทางทีมคณิตศาสตร์จะคำนวณรายกธ. ให้ทาง MPS ดึงไปใช้งานต่อ)ดึงข้อมูล วันที่ครบกำหนดสัญญา (rider_maturity_date) จาก [tx_mps_i02_ind_mat_date](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
2. Update ค่า rider_maturity_date ที่ [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
Update ข้อมูล rider plan code ใหม่ ในรูปแบบอุตสาหกรรม เนื่องจากเดิม edw3 มีการดึงข้อมูลในรูปแบบสามัญ
1. ดึงข้อมูล แบบประกันสัญญาเพิ่มเติมในรูปแบบโค้ดอุตสาหกรรม (ind_rider_plan_code) จาก [tx_mps_i02_ind_mat_date](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
2. Update ค่า rider_plan_code ที่ [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
3. ตัวอย่าง | plan code ในรูปแบบสามัญ | plan code ในรูปแบบอุตสาหกรรม | | --- | --- | | 20 | 1 | | 20 | 2 | | 24 | 3 |

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I03 PA Products Policy Master GMM **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้
3. ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
4. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing I03 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03))
5. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)****

ลบข้อมูล Landing I03 ([tx_mps_landing_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS003 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุบัติเหตุ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896448)

1. ตรวจสอบกรมธรรม์ที่สถานะมีผลบังคับ(current_policy_status = **'I'**) และมี **maturity_date เป็นวันที่สิ้นเดือน **ของรอบประมวล (ตัวอย่าง: period 202310, maturity_date = 31/10/2023) ให้ดำเนินการดังนี้update current_policy_status ใส่ค่าเป็น **"M"**
2. update curr_policy_status_date ใส่ค่าเป็น** MaturityDate**

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ** I04 Unit Linked Products Policy Master VFA **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้
4. ลบข้อมูล Landing I04 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04))
5. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing I04 ([tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS004 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896450)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I05 Group YRT Inforce Policy PAA **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูลเมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
2. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้
3. ลบข้อมูล Landing I05 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing I05 ([tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS005 ข้อมูลกรมธรรม์ประเภทกรมธรรม์ประกันกลุ่ม เฉพาะสถานะกรมธรรม์ Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896452)

**ปรับเพิ่มเติมจาก New Closing OIC: **Insert รายการข้อมูลสำหรับ RI Support Booking OIC ที่ [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header) เพื่อรอการ Update รายการเมื่อนำเข้าสำเร็จครบทุก Treaty ดังนี้

1. รายการที่ Insert ที่ตาราง tx_mps_base_header > | mps_base_hd_id | cf_file_name_id | ms_import_status_id | sum_amount | transaction_date | updated_by | updated_date | created_by | created_date | period | remark | base_setup_flag | coi_flag | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | running number | อ้างอิงจากตาราง [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name) โดยลงค่าเป็น "87" (ข้อมูลกรมธรรม์ประกันเดี่ยว ที่ส่งประกันภัยต่อ สำหรับ Untag) | อ้างอิงสถานะจากตาราง [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status) โดยลงค่าสถานะเป็น "8" (รอนำเข้าข้อมูล) หมายเหตุ: ri update ตามเงื่อนไขดังนี้ - กรณีนำเข้าไม่สำเร็จ update ค่า 3 >> นำเข้าไม่สำเร็จ - กรณีนำเข้าสำเร็จ update ค่า 7 >> ยืนยันนำเข้าข้อมูลสำเร็จ (อ้างอิง: [WS_RI_41 [Update] อัพเดทสถานะการส่งข้อมูลเข้า EDW (Estimate) (OIC)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266090128) เงื่อนไข ข้อ 7.Update mps process (msa-adwetl)) | ri update ตามรายการรวม treaty ของ support booking รอบแรก แบบมี coi = false เช่น มี 41 treaty ที่สำเร็จ ลง 41 | วันที่ดำเนินการ | ri update | ri update | ผุ้สร้างรายการ | วันที่สร้างรายการ | รอบการประมวลผลformat YYYYMM | หมายเหตุ | False = On going | False = round 1 | | running number | อ้างอิงจากตาราง [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name) โดยลงค่าเป็น "88" (ข้อมูลกรมธรรม์ประกันเดี่ยว ที่ส่งประกันภัยต่อ สำหรับ Master) | ri update ตามรายการรวม treaty ของ support booking รอบสอง แบบมี coi = true เช่น มีการส่งมาเฉพาะ ul 2 treaty ลงค่า 2 | วันที่ดำเนินการ | ri update | ri update | ผุ้สร้างรายการ | วันที่สร้างรายการ | รอบการประมวลผลformat YYYYMM | หมายเหตุ | False = On going | True = round 2 (with coi) | |

**ปรับเพิ่มเติมจาก New Group RI: **Insert รายการข้อมูลสำหรับ RI Group ที่ [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header) เพื่อรอการ Update รายการเมื่อนำเข้าสำเร็จครบทุก Treaty ดังนี้

1. รายการที่ Insert ที่ตาราง tx_mps_base_header > | mps_base_hd_id | cf_file_name_id | ms_import_status_id | sum_amount | transaction_date | updated_by | updated_date | created_by | created_date | period | remark | base_setup_flag | coi_flag | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | running number | อ้างอิงจากตาราง [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name) โดยลงค่าเป็น "86" (ข้อมูลกรมธรรม์ประกันกลุ่ม ที่ส่งประกันภัยต่อ) | อ้างอิงสถานะจากตาราง [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status) โดยลงค่าสถานะเป็น "8" (รอนำเข้าข้อมูล) หมายเหตุ: ri update ตามเงื่อนไขดังนี้ - กรณีนำเข้าไม่สำเร็จ update ค่า 3 >> นำเข้าไม่สำเร็จ - กรณีนำเข้าสำเร็จ update ค่า 7 >> ยืนยันนำเข้าข้อมูลสำเร็จ (อ้างอิง: [WS-RIG-002-06 Update MPS Header (Estimate)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313669195)) | ri update ตามรายการ | ri update วันเวลาปัจจุบัน | ri update | ri update | ผุ้สร้างรายการ | วันที่สร้างรายการ | รอบการประมวลผลformat YYYYMM | หมายเหตุ | False = On going | False = round 1 |

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I01 ส่วนเงินกู้ PL อุตสาหกรรม **เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้
3. ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
4. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้
5. ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_policy_loan_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ind))
6. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_policy_loan_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_hd).ms_import_status_id = 6) ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing ([tx_mps_policy_loan_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ind))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS012 ดึงข้อมูลเงินกู้ PL อุตสาหกรรม ณ สิ้นเดือน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=943128662)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"
ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **กรมธรรม์อุตสาหกรรมที่มีการปรับปรุงข้อมูลสิ้นผล**(10/Jan/24 ปรับเพิ่มสำหรับ UR Closing Timeline [02 - UR - Closing Timeline - Daily Update Policy Status & Movement](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1105527051)) เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้
1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้
4. ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_update_status_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind) และ [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider))
5. ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการดังนี้[[UR - Closing Timeline] WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1124073544)- [WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=941064341) ข้อ 3.1 และ 6.1 (ref: [ADW-11466](http://jira.thaisamut.co.th/browse/ADW-11466) - [EDW-PH5.1][Lot1][ESB] - รบกวน ปรับแก้ Query ESB ของ WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม ให้สอดคล้องกับกระบวนการ UR Closing Time Line (ESB-4943) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) ) เรียก esb ด้วย เงื่อนไข ดังนี้status มีค่าเท่ากับ 'inactive'
6. policyType ทั้งปช. 'I' และขพ. ('G')
7. monthYear ด้วยปีเดือนของรอบประมวลผลในรูปแบบ YYYYMM ตัวอย่าง period = 202308 ให้ส่ง input ด้วยค่า 256608 (จากเดิมส่งค่าด้วย YYMM 6608)
[UR - Closing Timeline - WS_EDW3_20 ดึงข้อมูลกรมธรรม์ rider อุตสาหกรรม สำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1124073643)เรียก esb ด้วย เงื่อนไข ดังนี้
1. policyType ทั้งปช. 'I' และขพ. ('G')
2. monthYear ด้วยปีเดือนของรอบประมวลผลในรูปแบบ YYYYMM ตัวอย่าง period = 202308 ให้ส่ง input ด้วยค่า 256608 (จากเดิมส่งค่าด้วย YYMM 6608)
บันทึกข้อมูลกรมธรรม์ลง table detail
1. header: [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header)
2. ข้อมูลกธ.หลัก: [tx_mps_update_status_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind)
3. ข้อมูล Rider: [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider)
Update ข้อมูลวันครบกำหนดสัญญาของ Rider อุตสาหกรรม (เนื่องจาก AS400 ไม่มีจัดเก็บข้อมูล โดยทางทีมคณิตศาสตร์จะคำนวณรายกธ. ให้ทาง MPS ดึงไปใช้งานต่อ)
1. ดึงข้อมูล วันที่ครบกำหนดสัญญา (rider_maturity_date) จาก [tx_mps_i02_ind_mat_date](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
2. Update ค่า rider_maturity_date ที่ [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider) ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)

Update ข้อมูล rider plan code ใหม่ ในรูปแบบอุตสาหกรรม เนื่องจากเดิม edw3 มีการดึงข้อมูลในรูปแบบสามัญ

1. ดึงข้อมูล แบบประกันสัญญาเพิ่มเติมในรูปแบบโค้ดอุตสาหกรรม (ind_rider_plan_code) จาก [tx_mps_i02_ind_mat_date](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
2. Update ค่า rider_plan_code ที่ [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider) ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
3. ตัวอย่าง | plan code ในรูปแบบสามัญ | plan code ในรูปแบบอุตสาหกรรม | | --- | --- | | 20 | 1 | | 20 | 2 | | 24 | 3 |
Insert & Update รายการกรมธรรม์ที่ table landing
1. ข้อมูลกธ.หลัก: นำข้อมูลจาก [tx_mps_update_status_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind) update ลง [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) ด้วยเงื่อนไข**เลขกธ. (policy_number)** และ update field **movement_policy_flag** (กรณี Insert ลงค่า I , กรณี Update ลงค่า U)
2. ข้อมูล Rider: นำข้อมูลจาก [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider) update ลง [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind) ด้วยเงื่อนไข**เลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)** และ update field **movement_policy_flag** (กรณี Insert ลงค่า I , กรณี Update ลงค่า U)
Update ข้อมูลวันครบกำหนดสัญญาของ Rider อุตสาหกรรม (เนื่องจาก AS400 ไม่มีจัดเก็บข้อมูล โดยทางทีมคณิตศาสตร์จะคำนวณรายกธ. ให้ทาง MPS ดึงไปใช้งานต่อ)
1. ดึงข้อมูล วันที่ครบกำหนดสัญญา (rider_maturity_date) จาก[tx_mps_i02_ind_mat_date](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date)ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)
2. Update ค่า rider_maturity_date ที่ [tx_mps_update_status_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider) ด้วยเงื่อนไขเลขกธ. และแบบประกัน Rider (policy_number, rider_plan_code)

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ กรมธรรม์ที่มีข้อมูลรายการสินไหมส่งพิจารณา (14/Feb/24 ปรับเพิ่มสำหรับ ดึงข้อมูลรายการสินไหมที่ส่งพิจารณา ) เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_update_claim_death](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)****

ลบข้อมูล Landing ([tx_mps_update_claim_death](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการดังนี้ [EDW-MPS-PS016 ดึงข้อมูลรายการสินไหมที่ส่งพิจารณา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1132101999)

บันทึกข้อมูลกรมธรรม์ลง table detail

1. header: [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header)
2. ข้อมูลกธ.หลัก: [tx_mps_update_claim_death](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death)
Update รายการกรมธรรม์ที่ table landing
1. ข้อมูลกธ.หลัก: นำข้อมูลจาก [tx_mps_update_claim_death](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death) update ลง [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord), [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind), [tx_mps_landing_i03](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03) ด้วยเงื่อนไข**เลขกธ. (policy_number)**
2. update ค่า death_in_process_flag = Y
3. update ค่า death_in_process_date จาก [tx_mps_update_claim_death](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death) ลง table landing

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจากโครงการ EDW 5.1 Group 1 เรื่องการ Lean Process ปรับปรุงข้อมูลกรมธรรม์สามัญ**

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน ระบบดำเนินการลบข้อมูลที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord), [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_backdate_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_hd).ms_import_status_id = 6)

เรียกดูข้อมูลจาก [WS_EDW3_26 ตรวจสอบสถานะพร้อมดึงข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส.](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1143145090) โดย

1. **กรณีที่ข้อมูลที่ได้เป็น "EMPTY"**** **** **ระบบจะลงข้อมูลสถานะ "รอนำเข้าข้อมูล" จำนวนรายการ เป็น 0 และหมายเหตุ "ไม่พบข้อมูลนำเข้าประจำเดือน"
2. **กรณีที่ข้อมูลที่ได้เป็น "NODATA"** ระบบจะลงข้อมูลสถานะ "ยืนยันนำเข้าข้อมูลสำเร็จ" จำนวนรายการ เป็น 0 และหมายเหตุ "ไม่มีข้อมูลนำเข้าประจำเดือน"
3. **กรณีที่ข้อมูลที่ได้เป็น "COMPLETE"** ระบบจะทำการตามกระบวนการต่อไปนี้ดึงข้อมูลจาก [WS_EDW3_05 ดึงข้อมูลกรมธรรม์หลักสามัญ สำหรับธกส.backdate](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=940736574)**กรณีที่ไม่พบข้อมูล** ระบบจะลงข้อมูลสถานะ "นำเข้าไม่สำเร็จ" จำนวนรายการ เป็น 0 และหมายเหตุ "ไม่พบรายการข้อมูลนำเข้า กรุณาติดต่อทีม AS400"
4. **กรณีที่พบข้อมูล** ระบบจะลงข้อมูลสถานะ "ยืนยันนำเข้าข้อมูลสำเร็จ" จำนวนรายการ ตามจำนวนรายการข้อมูลที่พบ และบันทึกข้อมูลง [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord)
ดึงข้อมูลจาก [WS_EDW3_16 ดึงข้อมูลกรมธรรม์สามัญ ธกส. ส่วนสัญญาเพิ่มเติม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=965149004)
1. **กรณีที่พบข้อมูล** ให้บันทึกข้อมูลง [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider)
2. **ปรับเพิ่มเติมจากโครงการ EDW 6 **ตรวจสอบข้อมูล แผนย่อยของแบบประกัน เพื่อ Update ข้อมูล SubRiderPlan ด้วยเงื่อนไข [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).sub_plan = [tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider).coverage_rider_codeกรณี**พบ**ข้อมูลตรงกันให้ Update ค่า SubRiderPlan ([tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider).sub_rider_plan) ที่ Landing Rider ORD ( [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).sub_rider_plan)
3. กรณี**ไม่พบ**ข้อมูลไม่ตรงกันดำเนินการต่อในข้อถัดไป

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจากโครงการ UL Rider**

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ **I02 Rider Products Policy Master GMM (แบบประกัน Unit Linked**) เมื่อกดปุ่ม ระบบดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้ลบข้อมูล Landing I02 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)****

ลบข้อมูล Landing I02 ของแบบประกันยูนิต ลิงค์ ([tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS004 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896450)ส่วนสัญญาเพิ่มเติม

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจากโครงการ EDW 5.1 Group 3 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA**

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้**ลบข้อมูล Landing Customer ID ของ Period เดือนปัจจุบัน ([tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)

ลบข้อมูล Landing Customer ID ([tx_mps_landing_customer](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [EDW-MPS-PS018 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1205436570)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"
**ปรับเพิ่มเติมจากโครงการ EDW 6 ดึงข้อมูล PayorID สำหรับ Rider PB ที่ CIS**

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลสำหรับ ข้อมูล PayorID สำหรับ Rider PB ที่ CIS เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้**ลบข้อมูล Landing PayorID ของ Period เดือนปัจจุบัน ([tx_mps_landing_payor](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_payor))
4. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)

ลบข้อมูล Landing PayorID ([tx_mps_landing_payor](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_payor))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการดังนี้

1. เรียก service [WS_EDW3_28 ดึงข้อมูล PayorID ของ Rider PB ที่ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1220477124&focusedCommentId=1221918796#comment-1221918796) เพื่อทำการดึงข้อมูล
2. บันทึกข้อมูลกรมธรรม์ลง table detailheader: [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header)
3. detail: [tx_mps_landing_payor](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_payor)
Update ข้อมูล PayorID ของ Rider PB
1. ดึงข้อมูล PayorID (customer_id) จาก [tx_mps_landing_payor](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_payor) ด้วยเงื่อนไขเลขกรมธรรม์ (policy_number)
2. Update ค่า PayorID ที่ Landing Rider ORD ทั้ง 2 ตาราง ([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) และ [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider)) ด้วยเงื่อนไขเลขกรมธรรม์ และแบบประกัน Rider = 5 (policy_number, rider_plan_code = '5')

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจากโครงการ EDW 6 ดึงข้อมูลกลุ่มโรคและข้อมูลแผนย่อย ที่ Psuite**

ปุ่ม “Execute” สำหรับการ ดึงข้อมูลกลุ่มโรค และ ข้อมูลกลุ่มพจน์ในแต่ละกลุ่มโรค ที่ Psuite เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. ลบข้อมูล Landing Benefit_Group ,Benefit_Stage, Plan Rider ([psuite_mps_benefit_group](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_group) ,[psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage), [tx_mps_landing_plan_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider))
4. ตาราง Default UnhealthBenefit [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth)

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW3_29 ดึงข้อมูลกลุ่มโรค ที่ Psuite](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1230274904) และ [WS_EDW3_30 ดึงข้อมูลกลุ่มโรคและข้อมูลแผนย่อย ที่ Psuite](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1230274917) เพื่อทำการดึงข้อมูล

ดำเนินการทำค่า Default สำหรับ UnhealthBenefitName และ UnhealthBenefitPaid ตามกระบวนการ [การทำค่า Default สำหรับ UnhealthBenefitName และ UnhealthBenefitPaid](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1199407375)

1. บันทึกข้อมูลค่า Default ลง table detailheader: [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header)
2. detail: [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth)

กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"

กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจากโครงการ EDW 6 ดึงข้อมูลสินไหม Claim สำหรับช่องทางสาขา และ E-Claim ,Web Claim & API Web, Fax Claim จากฐานข้อมูลในระบบ CMS**

ปุ่ม “Execute” สำหรับการดึงข้อมูลสินไหม Claim สำหรับช่องทางสาขา และ E-Claim ,Web Claim & API Web, Fax Claim จากฐานข้อมูลในระบบ CMS เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. ลบข้อมูล Landing Claim ([tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim))** เฉพาะที่มีเงื่อนไข ****migrate_flag ไม่ใช่ 'Y'**
4. ตาราง unhealth_benefit ([tx_mps_mapping_unhealth_benefit](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_mapping_unhealth_benefit))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW3_31 ดึงข้อมูลสินไหม claim จากระบบ CMS ( สาขา และ E-Claim ,Web Claim & API Web, Fax Claim)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1232175312) เพื่อทำการดึงข้อมูล โดยบันทึกค่า [tx_mps_landing_claim](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_claim).migrate_flag = 'N'

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจาก New Closing OIC ดึงข้อมูล** **I04 Unit Linked Products Policy Master VFA สำหรับ New Closing OIC**

ปุ่ม “Execute” สำหรับการดึงข้อมูล I04 Unit Linked Products Policy Master VFA สำหรับ New Closing OIC จากฐานข้อมูลในระบบ AS400 เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้
4. ลบข้อมูล Landing I04 ของ Period เดือนปัจจุบัน ([tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic))
5. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing I04 ([tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW6_02 ดึงข้อมูลกรมธรรม์ UL สำหรับ New Closing OIC](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1259307450)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจาก New Product 77/17 ดึงข้อมูลแบบประกันที่มี Rider แฝงที่ AS400**

ปุ่ม “Execute” สำหรับการดึงข้อมูลแบบประกันที่มี Rider แฝง จากฐานข้อมูลในระบบ AS400 เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้

1. ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_hidden_bundle](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_hidden_bundle))
2. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing ([tx_mps_hidden_bundle](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_hidden_bundle))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW3_28 ดึงข้อมูลแบบประกันที่มี Rider แฝงที่ AS400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306165636)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจาก Health Standard - Copayment ดึงข้อมูลกรมธรรม์ที่มี RiderCopay ที่ AS400**

ปุ่ม “Execute” สำหรับการดึงข้อมูลกรมธรรม์ที่มี RiderCopay จากฐานข้อมูลในระบบ AS400 เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้

1. ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_rider_copay](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rider_copay))
2. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing ([tx_mps_rider_copay](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rider_copay))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW3_33 ดึงข้อมูลกรมธรรม์ที่มี RiderCopay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313145662)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

**ปรับเพิ่มเติมจาก 20250178 CA ปรับเพิ่มการเก็บข้อมูลช่องทางการรับเงิน สำหรับรายการรับเบี้ย ดึงข้อมูลช่องทางการขาย Full Time Agent**

ปุ่ม “Execute” สำหรับการดึงข้อมูลช่องทางการขาย Full Time Agent จากฐานข้อมูลในระบบ AS400 เมื่อกดปุ่มระบบจะดำเนินการ ดังนี้

1. ระบบแสดงหน้าจอ Popup ยืนยันการข้อมูล
2. เมื่อกดปุ่ม “ยืนยัน” จากหน้าจอ Popup ยืนยันการข้อมูล ระบบดำเนินการดังนี้ระบบจะแสดงสถานะของรายการเป็น "**กำลังดำเนินการ**"
3. **หากเป็นการ Re-process ไม่ใช่การ Execute ครั้งแรกของเดือน** ระบบดำเนินการลบข้อมูล Landing ที่นำเข้าก่อนหน้า ดังนี้

1. ลบข้อมูล Landing ของ Period เดือนปัจจุบัน ([tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel))
2. Update สถานะรายการข้อมูลก่อนหน้าให้เป็น ยกเลิกรายการ ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id = 6)
ลบข้อมูล Landing ([tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel))

ดึงข้อมูลจากระบบต้นทาง เข้ามาในระบบ EDW ETL ตามกระบวนการ [WS_EDW3_34 ดึงข้อมูลช่องทางการขาย Full Time Agent](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325269070)

1. กรณีที่ระบบประมวลผลสำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**ยืนยันนำเข้าข้อมูลสำเร็จ**"
2. กรณีที่ระบบประมวลผลไม่สำเร็จ ระบบจะแสดงสถานะของรายการเป็น "**นำเข้าไม่สำเร็จ**"

1. "รายการข้อมูล"“ดึงข้อมูลสำหรับ I01 Main Policy Master GMM (แบบประกันสามัญ)” สำหรับกรมธรรม์สามัญ อ้างอิง [EDW-MPS-PS001 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์สามัญ,บำนาญ, Credit Life (MRTA/MLTA)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896441)
2. "ดึงข้อมูลสำหรับ I01 Main Policy Master GMM (แบบประกันอุตสาหกรรม)" สำหรับกรมธรรม์อุตสาหกรรม อ้างอิง [EDW-MPS-PS002 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896444)
3. “ดึงข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกันสามัญ)” สำหรับกรมธรรม์ Rider สามัญ อ้างอิง [EDW-MPS-PS001 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์สามัญ,บำนาญ, Credit Life (MRTA/MLTA)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896441)
4. “ดึงข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกันอุตสาหกรรม)" สำหรับกรมธรรม์ Rider อุตสาหกรรม อ้างอิง [EDW-MPS-PS002 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896444)
5. “ดึงข้อมูลสำหรับ I03 PA Products Policy Master GMM ” สำหรับกรมธรรม์ PA อ้างอิง [EDW-MPS-PS003 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุบัติเหตุ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896448)
6. “ดึงข้อมูลสำหรับ I04 Unit linked Products Policy Master VFA ” สำหรับกรมธรรม์ UL อ้างอิง [EDW-MPS-PS004 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896450)
7. “ดึงข้อมูลสำหรับ I05 Group YRT Inforce Policy PAA ” สำหรับกรมธรรม์ประกันกลุ่ม อ้างอิง [EDW-MPS-PS005 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์ประกันกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896452)
8. "ดึงข้อมูลสำหรับ I01 ส่วนเงินกู้ PL อุตสาหกรรม " สำหรับส่วนเงินกู้ อ้างอิง [EDW-MPS-PS012 ดึงข้อมูลเงินกู้ PL อุตสาหกรรม ณ สิ้นเดือน](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=943128662)
9. "ดึงข้อมูลสำหรับ กรมธรรม์อุตสาหกรรมที่มีการปรับปรุงข้อมูลสิ้นผล" สำหรับส่วนกรมธรรม์อุตสาหกรรมที่สิ้นผล อ้างอิง [EDW-MPS-PS002 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896444)
10. "ดึงข้อมูลสำหรับ กรมธรรม์ที่มีข้อมูลรายการสินไหมส่งพิจารณา" สำหรับข้อมูลกรมธรรม์สามัญ อุตสาหกรรม อุบัติเหตุ อ้างอิง [MSA ค้นหาข้อมูลรายการสินไหมที่ส่งพิจารณา](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1132101892)**ปรับเพิ่มเติมจากโครงการ EDW 5.1 Group 1 เรื่องการ Lean Process ปรับปรุงข้อมูลกรมธรรม์สามัญ**
11. ดึงข้อมูลสำหรับ ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส." สำหรับข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. อ้างอิง [EDW-MPS-PS017 ดึงข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส.](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1143145120)**ปรับเพิ่มเติมจากโครงการ UL Rider**
12. ดึงข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกัน Unit Linked) สำหรับกรมธรรม์ Rider UL อ้างอิง [EDW-MPS-PS004 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896450)**ปรับเพิ่มเติมจากโครงการ EDW 5.1 Group 3 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA**
13. ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA อ้างอิง [EDW-MPS-PS018 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1205436570) **ปรับเพิ่มเติมจากโครงการ EDW 6 ดึงข้อมูล PayorID สำหรับ Rider PB ที่ CIS**
14. ดึงข้อมูลสำหรับ ข้อมูล PayorID สำหรับ Rider PB ที่ CIS อ้างอิง [WS_EDW3_28 ดึงข้อมูล PayorID ของ Rider PB ที่ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1220477124&focusedCommentId=1221918796#comment-1221918796)**ปรับเพิ่มเติมจากโครงการ EDW 6 ดึงข้อมูลกลุ่มโรคและข้อมูลแผนย่อย ที่ Psuite**
15. ดึงข้อมูลสำหรับ ข้อมูลกลุ่มโรค และ ข้อมูลกลุ่มพจน์ในแต่ละกลุ่มโรค ที่ Psuite อ้างอิง [WS_EDW3_29 ดึงข้อมูลกลุ่มโรค ที่ Psuite](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1230274904) และ [WS_EDW3_30 ดึงข้อมูลกลุ่มโรคและข้อมูลแผนย่อย ที่ Psuite](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1230274917) **ปรับเพิ่มเติมจากโครงการ EDW 6 **ดึงข้อมูลสินไหม Claim สำหรับช่องทางสาขา และ E-Claim ,Web Claim & API Web, Fax Claim จากฐานข้อมูลในระบบ CMS
16. ดึงข้อมูลสำหรับสินไหม สำหรับช่องทางสาขา และ E-Claim ,Web Claim & API Web, Fax Claim จากฐานข้อมูลในระบบ CMS อ้างอิง [WS_EDW3_31 ดึงข้อมูลสินไหม claim จากระบบ CMS ( สาขา และ E-Claim ,Web Claim & API Web, Fax Claim)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1232175312)**ปรับเพิ่มเติมจาก New Closing OIC **
17. ดึงข้อมูล I04 Unit Linked Products Policy Master VFA สำหรับ New Closing OIC จากฐานข้อมูลในระบบ AS400 อ้างอิง [WS_EDW6_02 ดึงข้อมูลกรมธรรม์ UL สำหรับ New Closing OIC](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1259307450)**ปรับเพิ่มเติมจาก New Product 77/17**
18. ดึงข้อมูลแบบประกันที่มี Rider แฝง จากฐานข้อมูลในระบบ AS400 อ้างอิง [WS_EDW3_28 ดึงข้อมูลแบบประกันที่มี Rider แฝงที่ AS400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306165636)**ปรับเพิ่มเติมจาก Health Standard - Copayment**
19. ดึงข้อมูลแบบประกันที่มี RiderCopay จากฐานข้อมูลในระบบ AS400 อ้างอิง [WS_EDW3_33 ดึงข้อมูลกรมธรรม์ที่มี RiderCopay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313145662)**ปรับเพิ่มเติมจาก 20250178 CA ปรับเพิ่มการเก็บข้อมูลช่องทางการรับเงิน สำหรับรายการรับเบี้ย**
20. ดึงข้อมูลแบบประกันที่มีช่องทางการขาย Full Time Agent จากฐานข้อมูลในระบบ AS400 อ้างอิง [WS_EDW3_34 ดึงข้อมูลช่องทางการขาย Full Time Agent](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325269070)

1. “จำนวนรายการ” แสดงจำนวนรายการกรมธรรม์
2. “สถานะข้อมูล” แสดงสถานะการประมวลผล Batch ข้อมูล (อ้างอิง สถานะ จาก Appendix [A10.4 สถานะการประมวลผล Batch](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471574))
3. "หมายเหตุ" แสดง Error Message จากระบบ โดยมีเงื่อนไขดังนี้Error กรณีเกิดการผิดพลาดที่ฝั่ง ESB ให้แสดงข้อความ "ประมวลผลไม่สำเร็จรบกวนติดต่อ IT Support"
4. Error กรณีไม่ได้เกิดการผิดพลาดที่ฝั่ง ESB ให้แสดงข้อความ "ประมวลผลไม่สำเร็จรบกวนลองใหม่อีกครั้ง"
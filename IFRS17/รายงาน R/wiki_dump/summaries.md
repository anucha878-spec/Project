# รายงาน R — สรุปเนื้อหาแต่ละหน้า

## รายงาน R

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1086750787
- total_chars: 3287

```
ควร config report ก่อน Run รายงาน R
เนื่องจากมีจำนวนรายงาน 20 รายงาน ไม่รวม One Page Summary (OPS)
อาจจะส่งผลให้ใช้เวลาในการประมวลผลนาน จึงจำเป็นต้อง ประมวลผล เฉพาะรายงาน R ที่ต้องการตรวจสอบเท่านั้น
วิธีการ config report
DB:adw
Query > select group_type_id ,group_type_code ,group_type_name ,expire_date ,* from ms_rcc_group_type mrgt;
ถ้าไม่อยากประมวลรายงาน R ที่ไม่เกี่ยวข้องให้มาเปลี่ยน expire date ให้หมดอายุ
เช่น รายงาน code  > R05 ไม่อยาก Run ประมวลผล ก็ให้มาเปลี่ยน expire date ให้หมดอายุ เดิม 2999-01-01 ใหม่ 2023-01-01
พอกดประมวลผลรายงาน R   ระบบจะไ่ม่แสดงรายงาน ที่ expire date หมดอายุไปแล้ว
Ref. ระบบ EDW รายงาน By QA Da 20230811.mp4
| Step
| ภาพ
| อื่น ๆ
| 1. เมนู ดูแลระบบ > จัดการข้อมูล Dashboard
ประเภท Event = Dally
วันที่บันทึกบัญชี (เริ่มต้น) = 02/08/2566
วันที่บันทึกบัญชี (สิ้นสุด) = 14/08/2566
กดปุ่ม "ค้นหา"
จากภาพให้ copy เลข Reference Number เก็บไว้
|
| Login NBS = boss
ถึงจะเห็นเมนูดูแลระบบ
หา Reference Number
เช่นทำรายการมาวันที่ 2/8/66 ข้อมูลจะเข้าวันที่ 3/8/66 เวลาประมาณ 10.00น. (Batch job)
วิธีการหา Reference no แบบที่ 2
Reference no ได้มาจากการกดปุ่ม Free Template จาก เมนู : ตรวจสอบ/อนุมัติรายการบัญชี
focus ref ที่ทำข้อมูลจากหน้าบ้านในเรื่องที่เราจะทดสอบ
| 2. Login เข้าระบบ NBS : acc1
3. เมนู ระบบงานให้บริการ
> ระบบ ระบบงาน Back Office
> ระบบ Enterprise Data Warehouse
> ระบบ Enterprise Data Warehouse
เมนู Reconcile data V2ปี พ.ศ. ตั้งแต่  = 2566/08
ถึง = 2566/08
"ปี ค.ศ. ตั้งแต่" และ "ถึง" จะแสดงให้ Auto ตาม พ.ศ. ที่เลือก
Reference no. = เอามาจากข้อข้างบน สามารถใส่เลข Reference no ได้หลายเลขโดยการใส่คอมม่า (,) คั่น
กดปุ่ม ประมวลผล
หมายเหตุ : Reference no. จะมีแค่ Env. test เท่านั้น บน Prod จะไม่มี
|
| Login NBS = acc1
ฝ่ายบัญชี
| 4. นำเข้าไฟล์รายการ GL Accounting
เป็นส่วน One Page Summary ที่เพิ่มการนำเข้าของไฟล์ GL Account หรือฝ่ายบัญชีเรียกว่า File "Trial_Balance" ได้มาจาก User ฝ่ายบัญชี
ทำรายการเดือนไหน ต้องเป็นไฟล์ขอเดือนนั้นๆ .csv
Upload ไฟล์ และกดปุ่ม ยืนยัน
ตัวอย่างไฟล์
Trial_Balance_202509_to_202509.csv
หมายเหตุ : กรณีประมวลผลมากกว่า 1 เดือน ให้ตั้งชื่อไฟล์เป็นเดือนที่เริ่ม ถึง เดือนที่ถึง ตย.การตั้งชื่อ Trial_Balance_202306_to_202307.csv
|
|
| 5.ถ้าประมวลผลสำเร็จ สถานะดำเนินการก็จะเปลี่ยนเป็น "รอยืนยันข้อมูล" และเกิดไฟล์ รายงาน ดังนี้
5.1 รายงาน Reconcile ของฝ่ายบัญชี (Download File ได้จากหน้าจอประมวลผล)
5.2 รายงาน R ของฝ่ายคณิตศาสคร์ (หยิบไฟล์จาก Share Path)
6. คลิกเครื่องหมายถูกตามภาพที่ 2
6.1 Download ไฟล์รายงาน Reconcile ของฝ่ายบัญชีมาตรวจสอบ
6.2 ถ้าตรวจสอบแล้วถูกต้องให้ติ๊กเครื่องหมายถูกหน้ารายงาน
6.3 ฝ่ายบัญชีจะทำการ กดปุ่ม "ยืนยันข้อมูล"
7. กรุณาเลือกผลการตรวจสอบ
7.1 เลือก "ยืนยันข้อมูล" หรือ "ยกเลิกการประมวลผล"
หมายเหตุ กรณีนี้เลือก "ยืนยันข้อมูล"
8.เมื่อกด "ยืนยันข้อมูล"
8.1 สถานะ "ยืนยันข้อมูลเรียบร้อยแล้ว"
8.2 สถานะดำเนินการ  "ยืนยันข้อมูล"
9. กลับมาหน้าแรก เครื่องหมายถูก หายไป และ สถานะดำเนินการ  "ยืนยันข้อมูลเรียบร้อยแล้ว"
10.ระบบจะ automail ส่งให้ฝ่ายคณิตศาสตร์ตามภาพ
11.ฝ่ายคณิตก็จะเข้า path เพื่อนำไฟล์มาตรวจสอบ
\\10.40.24.246\edw\SIT\IFRS17\Report R
\\10.40.24.246\edw\UAT\IFRS17\Report R
|
ความต่างขอชื่อ Folder
| Map network drive
1. ทำการ Mapping Drive : This PC -> Map network drive
2. ระบุ Network folder \\10.40.24.246\EDW
3. ระบุ Username / Password ดังนี้
username = edwad
Password = King@2021!
ตัวอย่าง
\\10.40.24.246\edw\SIT\IFRS17\Report R
\\10.40.24.246\edw\UAT\IFRS17\Report R
-->
```

## รายงาน R ทั้งหมด

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1259799764
- total_chars: 960

```
| รายงาน R
| Wiki
| R01
| Process การประมวลผลข้อมูลออกรายงาน R01
| R02
| Process การประมวลผลข้อมูลออกรายงาน R02
| R03
| Process การประมวลผลข้อมูลออกรายงาน R03
| R04
| Process การประมวลผลข้อมูลออกรายงาน R04
| R05
| Process การประมวลผลข้อมูลออกรายงาน R05
| R06
| Process การประมวลผลข้อมูลออกรายงาน R06
| R07
| Process การประมวลผลข้อมูลออกรายงาน R07
| R08
| Process การประมวลผลข้อมูลออกรายงาน R08
| R09
| Process การประมวลผลข้อมูลออกรายงาน R09
| R10
| Process การประมวลผลข้อมูลออกรายงาน R10
| R11
| Process การประมวลผลข้อมูลออกรายงาน R11
| R12
| Process การประมวลผลข้อมูลออกรายงาน R12
| R13
| Process การประมวลผลข้อมูลออกรายงาน R13
| R14
| Process การประมวลผลข้อมูลออกรายงาน R14
| R15
| Process การประมวลผลข้อมูลออกรายงาน R15
| R16
| Process การประมวลผลข้อมูลออกรายงาน R16
| R17
| Process การประมวลผลข้อมูลออกรายงาน R17
| R18
| rocess การประมวลผลข้อมูลออกรายงาน R18
| R19
| Process การประมวลผลข้อมูลออกรายงาน R19
| R20
| Process การประมวลผลข้อมูลออกรายงาน R20
-->
```

## ขั้นตอนการประมวลผลรายงาน R มากกว่า 1 เดือน

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1264025812
- total_chars: 1498

```
| ลำดับ
| Step
| File
| Screen
| Data test / DB
| 1.
| ระบบงาน Back Office
ระบบ Enterprise Data Warehouse
ระบบบ Enterprise Data Warehouse
เมนู Reconcile dataปี พ.ศ. ตั้งแต่  = 2568/09
ถึง = 2568/09
"ปี ค.ศ. ตั้งแต่" และ "ถึง" จะแสดงให้ Auto ตาม พ.ศ. ที่เลือก
Reference no. = EJ202509300014
กดปุ่ม ประมวลผล
หมายเหตุ : Reference no. จะมีแค่ Env. test เท่านั้น บน Prod จะไม่มี
| Trial_Balance_202509_to_202509.csv
|
| 1.ตั้งเบี้ยประกันค้างรับ&ค่าบำเหน็จค้างจ่าย UL
Ref : EJ202509300014
Posting Date : 30/09/2568
2.กลับเบี้ยประกันค้างรับ&ค่าบำเหน็จค้างจ่าย UL
Ref : EJ202510010013
Posting Date : 01/10/2568
|  2.
| เมื่อกดยืนยันข้อมูลเรียบร้อยแล้ว ตาม step เดิมรายงาน R
กดปุ่ม backup เพื่อยืนยันการ backup ข้อมูลเดือน 202509
|
|
| DB adw :tx_rcc_output_snapshot_rxx (xx คือตัวเลขรายงาน R)
backup เพื่อจะได้ไม่ต้องประมวลผลใหม่ทุกครั้งเป็นการลดเวลา
ตย. select renewal_commission ,* from tx_rcc_output_snapshot_r06 where "period" = '202509'and policy_no IN ('UL00002717');
หมายเหตุ : ทุกครั้งที่ประมวลผลรายงาน R จะถูก Insert ที่ tx_rcc_output_rXX (xx คือตัวเลขรายงาน R) ตลอด
ตย. select renewal_commission ,* from tx_rcc_output_r06 where  "period" = '202509'and  policy_no IN ('UL00002717');
และจะถูก delete ทิ้งเมื่อมีการประมวลผลรอบต่อไป แล้วถูก Insert ด้วยของใหม่แทนที่
| 3.
| ทำเดือน 10 ต่อ Step เหมือนข้อ 1-2
|
|
|
| 4.
| ประมวลผล 2 เดือน คือเดือน 9 และเดือน 10
| Trial_Balance_202509_to_202510.csv
ตัวอย่างไฟล์ R ที่รัน 2 เดือนพร้อมกัน
R06ACC_202509_to_202510.xlsx
R05ACC_202509_to_202510.xlsx
|
|
-->
```

## รายงาน R By ดา

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306854092
- total_chars: 33

```
Share Knowledge รายงาน R.xlsx
-->
```

## Process การประมวลผลข้อมูลออกรายงาน R01

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=975209084
- total_chars: 31699

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R01
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R01 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม Premium (model_type = PREMIUM) ให้ดูข้อมูลที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = PREMIUM
Re: cf_r01_gl_mapping | Account Code
| Account Name
| Collection Type
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว
| All ยกเว้น BENEFIT และ CLAIM
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 40512300
| เบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว
| All ยกเว้น BENEFIT และ CLAIM
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 50521111
| ส่วนลดตรงเบี้ยประกันชีวิต - ปีแรก
| All
| 50521112
| ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป
| All
| 50521121
| ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก
| All
| 50521122
| ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป
| All
| 50522111
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก
| All
| 50522112
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป
| All
| 50522113
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว
| All
| 50522121
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก
| All
| 50522122
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป
| All
| 50522131
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก
| All
| 50522132
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป
| All
หมายเหตุ: collection type ที่เป็น benefit จะแสดงที่ R04 และclaim จะแสดงที่ R03
กรณีที่เป็น Model ตามกลุ่ม Investment (model_type = INVESTMENT) ให้ดูข้อมูลที่ tx_adw_investment_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = INVESTMENT
| Account Code
| Account Name
| Collection Type
| 42022111
| ดอกเบี้ยรับ - ชำระเบี้ย
| All ยกเว้น BENEFIT และ CLAIM
นำข้อมูล ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail โดยมีเงื่อนไขดังนี้กรณีที่เป็น Model ตามกลุ่ม Premium ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
กรณีที่เป็น Model ตามกลุ่ม Investment ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_investment_detail_id = tx_adw_investment_detail.id
เงื่อนไขการดึงข้อมูลที่เข้าเงื่อนไขของ R01 ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 08, 07 --ปรับเพิ่มโครงการ UL Rider
Business Line สำหรับรายงาน R01
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 08
|
| PAR Product (เป็นแบบประกันสามัญ ที่มีเงินปันผล เช่น plan code OP01)
| 07
|
| Unit Linked --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล Account Code (tx_adw_double_entry_detail.gl_code) และตรวจสอบข้อมูล Type รับ/จ่าย ของรายงาน R01 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R01
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| Type รับ/จ่าย
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| Premium
| All
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| Premium
| All
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว
| Premium
| All
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| Premium
| All
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| Premium
| All
| 40512300
| เบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว
| Premium
| All
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| Premium
| All
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| Premium
| All
| 42022111
| ดอกเบี้ยรับ - ชำระเบี้ย
| Investment
| Cash
| 50521111
| ส่วนลดตรงเบี้ยประกันชีวิต - ปีแรก
| Premium
| All
| 50521112
| ส่วนลดตรงเบี้ยประกันชีวิต - ปีต่อไป
| Premium
| All
| 50521121
| ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีแรก
| Premium
| All
| 50521122
| ส่วนลดตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป
| Premium
| All
| 50522111
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก
| Premium
| All
| 50522112
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป
| Premium
| All
| 50522113
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว
| Premium
| All
| 50522121
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก
| Premium
| All
| 50522122
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป
| Premium
| All
| 50522131
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก
| Premium
| All
| 50522132
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป
| Premium
| All
--ปรับเพิ่มโครงการ UL Rider
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R01 (UL Rider)
| Account
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R02

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513382
- total_chars: 25484

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R02
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R02 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 08, 07 --ปรับเพิ่มโครงการ UL Rider
Business Line สำหรับรายงาน R02
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 08
|
| PAR Product (เป็นแบบประกันสามัญ ที่มีเงินปันผล เช่น plan code OP01)
| 07
|
| Unit Linked --ปรับเพิ่มโครงการ UL Rider
ปรับวันที่ 16-FEB-2023 ให้นำ Plan_code = 'NoOLI' ออก
ดึงข้อมูล UL เฉพาะกรมธรรม์ RIDER (tx_adw_transaction_detail.basic_rider_indicator = "RIDER") และจะต้องไม่นำ UL Type Rider = 'UDR" มาแสดง เนื่องจากจะอยู่ในรายงาน R06 เท่านั้น --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R02 ดังนี้ (tx_adw_double_entry_detail.gl_code)
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R02
| Account code
| Account name
| Table group
| Amount Type
| 50551101
| ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1
| Commission,OV
| InitialCommission
| 50551103
| ค่าบำเหน็จปีต่อไป ตัวแทน
| Commission,OV
| RenewalCommission
| 50551107
| ค่าบำเหน็จรับตรงประกันชีวิต-ชำระครั้งเดียว
| Commission,OV
| InitialCommission
| 50551108
| ค่าบำเหน็จ-เบี้ยเพิ่มพิเศษ
| Commission,OV
| InitialCommission
| 50551110
| ค่าเก็บเบี้ยประกันตัวแทน
| Commission,OV
| RenewalCommission
| 50551104
| ค่าอนุรักษ์เบี้ยปี 2
| Commission,OV
| RenewalOverride
| 50551105
| ค่าอนุรักษ์เบี้ยปี2ผจก.หน่วย
| Commission,OV
| RenewalOverride
| 50551115
| ค่าจัดงานตัวแทน
| Commission,OV
| InitialOverride
| 50551125
| ค่าโบนัสตัวแทน
| Commission,OV
| InitialOverride
| 50551126
| ค่าโบนัสประจำงวดFY
| Commission,OV
| InitialOverride
| 50551127
| ค่าสร้างฝ่ายบริหารตัวแทน - ปีแรก
| Commission,OV
| InitialOverride
| 50551128
| ค่าสรรหาตัวแทนใหม่-ฝ่ายบริหารตัวแทน
| Commission,OV
| InitialOverride
| 50551206
| เงินประจำตำแหน่งผลงาน-ปีแรก
| Commission,OV
| InitialOverride
| 50551208
| โบนัสผู้จัดการหน่วย
| Commission,OV
| InitialOverride
| 50551210
| ค่าจัดงานเบี้ยปีแรกงวดแรก
| Commission,OV
| InitialOverride
| 50551211
| ค่าจัดงานเบี้ยปีต่อไป
| Commission,OV
| RenewalOverride
| 50551215
| ค่าบริหารหน่วย
| Commission,OV
| InitialOverride
| 50551216
| ค่าบริหารทีม - ปีแรก
| Commission,OV
| InitialOverride
| 50551217
| ค่าสร้างฝ่ายบริหารขาย-ปีแรก
| Commission,OV
| InitialOverride
| 50551218
| ค่าบริหารทีมงานพิเศษ - ปีแรก
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| InitialOverride
| 50551219
| ค่าบริหารทีมงานพิเศษ
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| RenewalOverride
| 50551220
| เงินอุดหนุน
| Commission,OV
| InitialOverride
| 50551221
| โบนัสราย 3 งวด
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| InitialOverride
| 50551225
| เงินรางวัล
| Commission,OV
| RenewalOverride
| 50551226
| เงินรางวัล-ปีต่อ
| Commission,OV
| RenewalOverride
| 50551212
| ค่าอนุรักษ์เบี้ยปี2 (ผู้บริหาร)
| Commission,OV
| RenewalOverride
| 51090170
| ค่าบริการอื่น
เฉพาะ Cost Center เป็น 8300A9 ที่ใช้ประมวลผลออกรายงาน นอกนั้นไม่ต้องประมวลผลมาออกรายงาน
Note
Icon
Update 24-APR-2024
เนื่องจากมี UR โครงการ SP Life แจ้งแก้ไข GL 51090170, Cost Center 8300A9 ให้นำออกจากรายงาน R02 ให้ไปออกรายงาน R13 แทน ให้มีผลตั้งแต่ Period 04/2024 เป็นต้นไป
| Commission,OV
| InitialOverride
| 50551120
| เงินรับรองรายได้
| Commission,OV
| InitialOverride
| 50551109
| ค่าบริการแนะนำผลิตภัณฑ์(ค่าบำเหน็จทำประกัน)
Note
Icon
Napak.ph: Update 01-APR-2025 ปรับเพิ่ม new gl จาก ur การบันทึกบัญชีค่าจ้างค่าบำเหน็จ โครงการ SME Bank (20250023) มีผลตั้งแต่รอบประมวลผล 2025/04
| Commission,OV
| InitialCommission
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r02
ตาราง tx_rcc_reconcile_r02
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| ประมวลผลแยกตามประเภทผลิตภัณฑ์ ประกอบด้วย
| BL
| Product
| Disclosure Type
| 01
| อุตสาหกรรม
| Fix 'Life'
| 02
| สามัญ
| A6. กระบวนการบันทึกข้อ
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R03

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1037959184
- total_chars: 48551

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R03
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R03 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม CLAIM (model_type = CLAIM) ให้ดูข้อมูลที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = CLAIM
| Account Code
| Account Name
| Collection Type
| 50542105
| สินไหมประกันชีวิต
| All
| 50542106
| สินไหมประกันชีวิต-บำนาญ
| All
| 50542107
| สินไหมคุ้มครองผู้ชำระเบี้ย(PB) - ชีวิต
| All
| 50542110
| สินไหมอุบัติเหตุ
| All
| 50542115
| สินไหมคุ้มครองบุตร
| All
| 50542120
| เงินช่วยเหลือค่าทำศพ
| All
| 50542121
| Exgatia
| All
| 50542125
| สินไหมคืนเบี้ย
| All
| 50544110
| สินไหมทดแทนอุบัติเหตุ - ตรง
| All
| 50544111
| สินไหมอุบัติเหตุ-ไม่เสียชีวิต
| All
| 50544210
| สินไหมทุพพลภาพ - ตรง
| All
| 50544211
| สินไหมยกเว้นชำระเบี้ย (WP)
| All
| 50544212
| สินไหมคุ้มครองผู้ชำระเบี้ย(PB) - ทุพพลภาพ
| All
| 50545005
| สินไหมประกันสุขภาพ
| All
กรณีที่เป็น Model ตามกลุ่ม Investment (model_type = INVESTMENT) ให้ดูข้อมูลที่ tx_adw_investment_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = INVESTMENT
| Account Code
| Account Name
| Collection Type
| 11011100
| เงินกู้ประกันชีวิต
| CLAIM
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| CLAIM
| 42022110
| ดอกเบี้ยรับ - เงินกู้ประกันชีวิต
| CLAIM
| 42022112
| ดอกเบี้ยรับ - เงินกู้ประกันชีวิตอัตโนมัติ
| CLAIM
| 42022113
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ
| CLAIM
| 42022114
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต
| CLAIM
| 42022111
| ดอกเบี้ยรับ - ชำระเบี้ย
| CLAIM
กรณีที่เป็น Model ตามกลุ่ม Premium (model_type = PREMIUM) ให้ดูข้อมูลที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = PREMIUM
| Account Code
| Account Name
| Collection Type
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| CLAIM
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| CLAIM
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| CLAIM
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| CLAIM
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว
| CLAIM
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| CLAIM
| 40512300
| เบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว
| CLAIM
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| CLAIM
นำข้อมูล ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail โดยมีเงื่อนไขดังนี้
กรณีที่เป็น Model ตามกลุ่ม Claim ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_claim_detail_id = tx_adw_benefit_detail.id
กรณีที่เป็น Model ตามกลุ่ม Investment ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_investment_detail_id = tx_adw_investment_detail.idเงื่อนไขเพิ่มเติม จะไม่ดึงข้อมูลธุรกรรมกลุ่มปป.ดอกเบี้ยค้างรับ กรณีรับชำระดบ.ที่สาขาด้วย Death cliam (APL_MAC_24)
กรณีที่เป็น Model ตามกลุ่ม Premium ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 08, 07 --ปรับเพิ่มโครงการ UL Rider
Business Line สำหรับรายงาน R03
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 08
|
| PAR Product (เป็นแบบประกันสามัญ ที่มีเงินปันผล เช่น plan code OP01)
| 07
|
| Unit Linked --ปรับเพิ่มโครงการ UL Rider
ปรับวันที่ 16-FEB-2023 ให้นำ Plan_code = 'NoOLI' ออก
ดึงข้อมูล GL Code ของรายงาน R03 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R03
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| Type รับ/จ่าย
| 11011100
| เงินกู้ประกันชีวิต
| Investment
| CLAIM
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
| CLAIM
| 40511200
| เบี้ยประกันชีวิต-ปีต่อไป
| Premium
| CLAIM
| 40512200
| เบี้ยประกันอุบัติเหตุ-ปีต่อไป
| Premium
| CLAIM
| 40513200
| เบี้ยประกันสุขภาพ-ปีต่อไป
| Premium
| CLAIM
| 42022110
| ดอกเบี้ยเงินกู้ประกันชีวิต
| Investment
| CLAIM
| 42022112
| ดอกเบี้ยรับ-เงินกู้เพื่อชำระเบี้ยประกันอัตโนมัติ(APL)
| Investment
| CLAIM
| 42022113
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
| CLAIM
| 42022114
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต
| Investment
| CLAIM
| 50542105
| สินไหมประกันชีวิต
| Claim
| All
| 50542106
| สินไหมประกันชีวิต-บำนาญ
| Claim
| All
| 50542107
| สินไหมคุ้มครองผู้ชำระเบี้ย(PB) - ชีวิต
| Claim
| All
| 50542110
| สินไหมอุบัติเหตุ
| Claim
| All
| 50542115
| สินไหมคุ้มครองบุตร
| Claim
| All
| 50542120
| เงินช่วยเหลือค่าทำศพ
| Claim
| All
| 50542121
| Exgratia

…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R04

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=975536319
- total_chars: 40381

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R04
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R04 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม Benefit (model_type = BENEFIT) ให้ดูข้อมูลที่ tx_adw_benefit_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = BENEFIT
| Account Code
| Account Name
| Collection Type
| 50541005
| ครบกำหนดสัญญา
| All
| 50541010
| เงินทรงชีพ
| All
| 50541015
| เงินสมนาคุณ
| All
| 50543005
| เวนคืนกรมธรรม์
| All
| 50543006
| เวนคืนกรมธรรม์อัตโนมัติ-บำนาญ
| All
| 50543010
| เวนคืนกรมธรรม์อัตโนมัติ
| All
| 50547005
| เงินบำนาญ
| All
| 50547006
| เงินบำนาญ Non-guarantee
| All
| 50549005
| ดอกเบี้ยจ่ายตามเงื่อนไขกรมธรรม์
| All
| 50549015
| เงินจ่ายคืน
| All
กรณีที่เป็น Model ตามกลุ่ม Investment (model_type = INVESTMENT) ให้ดูข้อมูลที่ tx_adw_investment_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = INVESTMENT
| Account Code
| Account Name
| Collection Type
| 11011100
| เงินกู้ประกันชีวิต
| BENEFIT
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| BENEFIT
| 42022110
| ดอกเบี้ยรับ - เงินกู้ประกันชีวิต
| BENEFIT
| 42022111
| ดอกเบี้ยรับ - ชำระเบี้ย
| BENEFIT
| 42022112
| ดอกเบี้ยรับ - เงินกู้ประกันชีวิตอัตโนมัติ
| BENEFIT
| 42022113
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ
| BENEFIT
| 42022114
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต
| BENEFIT
Update 05-JAN-2023: กรณีที่เป็นข้อมูล Model: Investment จะไม่ต้องนำข้อมูลของ Event code: 203 และ 361 มาออกในรายงาน R04 และ RCC
กรณีที่เป็น Model ตามกลุ่ม Premium (model_type = PREMIUM) ให้ดูข้อมูลที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = PREMIUM
| Account Code
| Account Name
| Collection Type
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| BENEFIT
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| BENEFIT
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| BENEFIT
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| BENEFIT
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว
| BENEFIT
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| BENEFIT
| 40512300
| เบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว
| BENEFIT
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| BENEFIT
กรณีที่เป็น Model ตามกลุ่ม Other income (model_type = OTHER_INCOME) ให้ดูข้อมูลที่ tx_adw_other_income_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = OTHER_INCOME
| Account Code
| Account Name
| Collection Type
| 43040026
| รายได้ค่าบริการกรมธรรม์
| All
นำข้อมูล ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail โดยมีเงื่อนไขดังนี้
กรณีที่เป็น Model ตามกลุ่ม Benefit ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_benefit_detail_id = tx_adw_benefit_detail.id
กรณีที่เป็น Model ตามกลุ่ม Investment ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_investment_detail_id = tx_adw_investment_detail.idเงื่อนไขเพิ่มเติม จะไม่ดึงข้อมูลธุรกรรมกลุ่มปป.ดอกเบี้ยค้างรับ กรณีรับชำระดบ.ที่สาขาด้วย SR (APL_MAC_22) กับ ปป.ดอกเบี้ยค้างรับ กรณีรับชำระดบ.ที่สาขาด้วย MT (APL_MAC_23)
กรณีที่เป็น Model ตามกลุ่ม Premium ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
กรณีที่เป็น Model ตามกลุ่ม Other income ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_other_income_detail_id = tx_adw_other_income_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 08, 07 --ปรับเพิ่มโครงการ UL Rider
Business Line สำหรับรายงาน R04
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 08
|
| PAR Product (เป็นแบบประกันสามัญ ที่มีเงินปันผล เช่น plan code OP01)
| 07
|
| Unit Linked --ปรับเพิ่มโครงการ UL Rider
ปรับวันที่ 16-FEB-2023 ให้นำ Plan_code = 'NoOLI' ออก
ดึงข้อมูล GL Code ของรายงาน R04 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R04
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| Type รับ/จ่าย
| 11011100
| เงินกู้ประกันชีวิต
| Investment
| Benefit
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
| Benefit
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| Premium
| Benefit
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| Premium
| Benefit
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| Premium
| Benefit
| 42022110
| ดอกเบี้ยรับ - เงินกู้ประกันชีวิต
| Investment
| Benefit
| 42022111
| ดอกเบี้ยรับ - ชำระเบี้ย
| Investment
| Benefit
| 42022112
| ดอกเบี้ยร
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R05

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=972652954
- total_chars: 21433

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R05
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R05 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม PREMIUM (model_type = PREMIUM) ที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R05 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R05
| No.
| Account code
| Account name
| Model Type
| 1
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| PREMIUM
| 2
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| PREMIUM
| 3
| 40511100
| เบี้ยประกันชีวิต - ปีแรก (Premium Charge)
| PREMIUM
| 4
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป (Premium Charge)
| PREMIUM
| 5
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว (Single Premium Charge)
| PREMIUM
| 6
| 40511400
| เบี้ยประกันภัยเพิ่มพิเศษ (Top up Premium Charge)
| PREMIUM
| 7
| 40511500
| เบี้ยส่วนนำไปลงทุนของผู้เอาประกัน
| PREMIUM
| 8
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 9
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 10
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 11
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 12
| 50522111
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก
| PREMIUM
| 13
| 50522112
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป
| PREMIUM
| 14
| 50522113
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ชำระครั้งเดียว
| PREMIUM
| 15
| 50522116
| คืนเบี้ยประกันภัยเพิ่มพิเศษ (Top up Premium)
| PREMIUM
| 16
| 50522121
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 17
| 50522122
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 18
| 50522131
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 19
| 50522132
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป (Phase 2) (รายการนี้ยังไม่มีใน UL)
| PREMIUM
| 20
| 43040026
| รายได้ค่าบริการกรมธรรม์
| OTHER_INCOME
| 21
| 43040027
| รายได้ค่าการประกันภัย (COI Charge)
| OTHER_INCOME_FEE
| 22
| 43040028
| รายได้ค่าธรรมเนียมการรักษากรมธรรม์ (Policy fee)
| OTHER_INCOME_FEE
| 23
| 43040029
| รายได้ค่าธรรมเนียมการบริหารกรมธรรม์(Administration fee)
| OTHER_INCOME_FEE
| 24
| 43040030
| รายได้ค่าธรรมเนียมในการถอนเงินจากกรมธรรม์
| OTHER_INCOME_FEE
| 25
| 43040031
| รายได้ค่าธรรมเนียมการขอต่ออายุสัญญากรมธรรม์
| OTHER_INCOME_FEE
| 26
| 43040033
| รายได้ค่าธรรมเนียมในการสับเปลี่ยนกองทุน
| OTHER_INCOME_FEE
หมายเหตุ: ในรายงาน Reconcile & Adjustment posting จะแสดงเฉพาะข้อมูลผังบัญชี Model Type = PREMIUM เท่านั้น
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r05
ตาราง tx_rcc_reconcile_r05
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
เงื่อนไขเพิ่มเติม (28-JUNE-2022)
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r05
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r05
ตาราง tx_rcc_adj_r05
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 1
| Disclosure Type
| กรณีเป็น R05 ให้ Fix เป็น "Investment"
| 2
| Account Code
| tx_adw_double_entry_detail.gl_code
| 3
| Account Name
| tx_adw_double_entry_detail.gl_name
| 4
| BL
| tx_adw_double_entry_detail.business_line_code
| 5
| Plan Code
| Fix 'ALL'
| 6
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R06

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152608
- total_chars: 19133

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R06
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R06 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
กรณีที่เป็น RIDER ให้ดึงเฉพาะ UL Type Rider = 'UDR" มาแสดงเท่านั้น  --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R06 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R06
| Account code
| Account name
| Table group
| Amount Type
| 50551101
| ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1
Note
Icon
ยังไม่มาในการทดสอบครั้งนี้ จะต้องทดสอบหลังจากที่ UL เสร็จ ต้อง sync plan อีกครั้ง
| Commission,OV
| InitialCommission
| 50551103
| ค่าบำเหน็จปีต่อไป ตัวแทน
| Commission,OV
| RenewalCommission
| 50551107
| ค่าบำเหน็จรับตรงประกันชีวิต-ชำระครั้งเดียว
Note
Icon
ยังไม่มาในการทดสอบครั้งนี้ จะต้องทดสอบหลังจากที่ UL เสร็จ ต้อง sync plan อีกครั้ง
| Commission,OV
| InitialCommission
| 50551108
| ค่าบำเหน็จ - เบี้ยเพิ่มพิเศษ
| Commission,OV
| InitialCommission
| 50551110
| ค่าเก็บเบี้ยประกันตัวแทน
| Commission,OV
| RenewalCommission
| 50551104
| ค่าอนุรักษ์เบี้ยปี 2
| Commission,OV
| RenewalOverride
| 50551105
| ค่าอนุรักษ์เบี้ยปี 2 ผจก.หน่วย
| Commission,OV
| RenewalOverride
| 50551115
| ค่าจัดงานตัวแทน
| Commission,OV
| InitialOverride
| 50551125
| ค่าโบนัสตัวแทน
| Commission,OV
| InitialOverride
| 50551126
| ค่าโบนัสประจำงวด FY
| Commission,OV
| InitialOverride
| 50551127
| ค่าสร้างฝ่ายบริหารตัวแทน - ปีแรก
| Commission,OV
| InitialOverride
| 50551128
| ค่าสรรหาตัวแทนใหม่ - ฝ่ายบริหารตัวแทน
| Commission,OV
| InitialOverride
| 50551206
| เงินประจำตำแหน่งผลงาน - ปีแรก
| Commission,OV
| InitialOverride
| 50551208
| โบนัสผู้จัดการหน่วย
| Commission,OV
| InitialOverride
| 50551210
| ค่าจัดงานเบี้ยปีแรกงวดแรก
| Commission,OV
| InitialOverride
| 50551211
| ค่าจัดงานเบี้ยปีต่อไป
| Commission,OV
| RenewalOverride
| 50551215
| ค่าบริหารหน่วย
| Commission,OV
| InitialOverride
| 50551216
| ค่าบริหารทีม - ปีแรก
| Commission,OV
| InitialOverride
| 50551217
| ค่าสร้างฝ่ายบริหารขาย-ปีแรก
| Commission,OV
| InitialOverride
| 50551218
| ค่าบริหารทีมงานพิเศษ - ปีแรก
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| InitialOverride
| 50551219
| ค่าบริหารทีมงานพิเศษ
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| RenewalOverride
| 50551220
| เงินอุดหนุน
| Commission,OV
| InitialOverride
| 50551221
| โบนัสราย 3 งวด
หาก Cost Center เป็น 830044 และขึ้นต้นด้วย 1 ถึง 7 จะไม่ใช้ออกรายงาน นอกนั้นประมวลผลตามปกติ
| Commission,OV
| InitialOverride
| 50551225
| เงินรางวัล
| Commission,OV
| RenewalOverride
| 50551226
| เงินรางวัล - ปีต่อ
| Commission,OV
| RenewalOverride
| 50551212
| ค่าอนุรักษ์เบี้ยปี2 (ผู้บริหาร)
| Commission,OV
| RenewalOverride
| 51090170
| ค่าบริการอื่น
เฉพาะ Cost Center เป็น 8300A9 ที่ใช้ประมวลผลออกรายงาน นอกนั้นไม่ต้องประมวลผลมาออกรายงาน
Note
Icon
Update 24-APR-2024
เนื่องจากมี UR โครงการ SP Life แจ้งแก้ไข GL 51090170, Cost Center 8300A9 ให้นำออกจากรายงาน R06 ให้ไปออกรายงาน R13 แทน ให้มีผลตั้งแต่ Period 04/2024 เป็นต้นไป
| Commission,OV
| InitialOverride
| 50551120
| เงินรับรองรายได้
| Commission,OV
| InitialOverride
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r06
ตาราง tx_rcc_reconcile_r06
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r06
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R07

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1036648750
- total_chars: 20839

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R07
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R07 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลที่ Model ตามกลุ่ม Claim (model_type = CLAIM) ที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_claim_detail_id =  tx_adw_claim_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business Line Code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R07 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R07
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| Type รับ/จ่าย
| Remark
| 50542105
| สินไหมประกันชีวิต (ตาม SA)
| Claim
| Provision, Approve
|
| 50542120
| เงินช่วยเหลือค่าทำศพ
| Claim
| Accrual, Cash, Approve
|
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| Claim
| Cash
|
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| Claim
| Cash
|
| 50549005
| ดอกเบี้ยจ่ายตามเงื่อนไขกรมธรรม์
| Claim
| Cash
|
หมายเหตุ: ในรายงาน Reconcile & Adjustment posting จะแสดงเฉพาะข้อมูลผังบัญชี Model Type = Claim เท่านั้น
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r07
ตาราง tx_rcc_reconcile_r07
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r07
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r07
ตาราง tx_rcc_adj_r07
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r07 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r07
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r07
ตาราง tx_rcc_output_r07
| No
| Column Name
| Mapping
| 1
| period
| tx_adw_account_head.accounting_date บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
| 3
| portfolio_id
| 1. นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i04 (CoreEDW) ฟิล์ด policy_number, period
2. อ่านข้อมูล tx_mps_master_i04 (CoreEDW).portfolio_id มาบันทึกเป็น portfolio_id
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i04 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
| 4
| plan_code
| tx_adw_transaction_detail.plan_code_actuarial
| 5
| sales_channel
| tx_adw_transaction_policy.sale_channel
| 6
| sales_channel_code
| tx_adw_transaction_policy.channel_code
| 7
| business_line
| tx_adw_double_entry_detail.business_line_code
| 8
| effective_date
| tx_adw_claim_detail.contract_start_date
| 9
| mode_of_payment
| tx_adw_claim_detail.mode_of_payment
| 10
| annual_premium
| tx_adw_claim_detail.annual_premium
| 11
| modal_premium
| tx_adw_claim_detail.modal_premium
| 12
| claim_event_date
| tx_adw_claim_detail.claim_event_date
| 13
| claim_reported_date
| tx_adw_claim_detail.claim_report_date
| 14
| claim_status
| tx_adw_claim_detail.claim_status
| 15
| approve_date
| tx_adw_claim_detail.approve_date
| 16
| claim_paid_date
| tx_adw_claim_detail.claim_paid_date
| 17
| total_death_benefit
| tx
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R08

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=987004963
- total_chars: 20201

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R08
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R08 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม BENEFIT (model_type = BENEFIT) ที่ tx_adw_benefit_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R08
| Account code
| Account name
| Table group
| Remarks
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 53000000
| เงินปันผลตามกรมธรรม์ประกันภัย
| BENEFIT
| Loyalty Bonus
ข้อมูลที่ Model ตามกลุ่ม OTHER_INCOME (model_type = OTHER_INCOME) ที่ tx_adw_other_income_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R08
| Account code
| Account name
| Table group
| Remarks
| 43040026
| รายได้ค่าบริการกรมธรรม์
| BENEFIT OTHER_INCOME
| Other
นำข้อมูล tx_adw_benefit_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_benefit_detail_id = tx_adw_benefit_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R08 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R08
| Account code
| Account name
| Table group
| Remarks
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 53000000
| เงินปันผลตามกรมธรรม์ประกันภัย
| BENEFIT
| Loyalty Bonus
| 43040026
| รายได้ค่าบริการกรมธรรม์
| BENEFIT OTHER_INCOME
| Other
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r08
ตาราง tx_rcc_reconcile_r08
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R08 ให้ Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| กรณีเป็น R08 ให้ Fix เป็น "ALL"
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r08
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r08
ตาราง tx_rcc_adj_r08
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R08 ให้ Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| กรณีเป็น R08 ให้ Fix เป็น "ALL"
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r08 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r08
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r08
ตาราง tx_rcc_output_r08
| No
| Column Name
| Mapping
| 1
| period
| tx_adw_account_head.accounting_date  บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
| 3
| portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i04 (CoreEDW) ฟิล์ด policy_number, period
»» อ่านข้อมูล  tx_mps_master_i04 (CoreEDW).portfolio_id มาบันทึกเป็น portfolio_id
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i04 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
| 4
| plan_code
| tx_adw_transaction_detail.plan_code_actuarial
| 5
| sales_channel
| tx_adw_transaction_policy.sale_channel
| 6
| sales_channel_code
| tx_adw_transaction_policy.c
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R09

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=981729506
- total_chars: 26846

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R09
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R09 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม OTHER_INCOME_FEE(model_type = OTHER_INCOME_FEE) ที่ tx_adw_other_income_fee_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_other_income_fee_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_other_income_fee_detail.id = tx_adw_other_income_fee_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R09 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R09
| No.
| Account code
| Account name
| Table group
| Amount Type
| 1
| 43040027
| รายได้ค่าการประกันภัย (COI Charge)
| OTHER_INCOME_FEE
|
| 2
| 43040028
| รายได้ค่าธรรมเนียมการรักษากรมธรรม์ (Policy fee)
| OTHER_INCOME_FEE
|
| 3
| 43040029
| รายได้ค่าธรรมเนียมการบริหารกรมธรรม์(Administration fee)
| OTHER_INCOME_FEE
|
| 4
| 43040030
| รายได้ค่าธรรมเนียมในการถอนเงินจากกรมธรรม์
| OTHER_INCOME_FEE
|
| 5
| 43040031
| รายได้ค่าธรรมเนียมการขอต่ออายุสัญญากรมธรรม์
| OTHER_INCOME_FEE
|
| 6
| 43040032
| รายได้ค่าธรรมเนียมการขอใบแจ้งสถานะทางการเงินของกรมธรรม์
| OTHER_INCOME_FEE
|
| 7
| 43040033
| รายได้ค่าธรรมเนียมในการสับเปลี่ยนกองทุน
| OTHER_INCOME_FEE
|
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r09
ตาราง tx_rcc_reconcile_r09
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
เงื่อนไขเพิ่มเติม (28-JUNE-2022)
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r09
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r09
ตาราง tx_rcc_adj_r09
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Investment"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r09 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r09
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r09
ตาราง tx_rcc_output_r09
| No
| Column Name
| Mapping
| 1
| period
| tx_adw_account_head.accounting_date  บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
| 3
| portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i04 (CoreEDW) ฟิล์ด policy_number, period
»» อ่านข้อมูล tx_mps_master_i04 (CoreEDW).portfolio_id มาบันทึกเป็น portfolio_id
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i04 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
| 4
| coi_charge
| อ่านข้อมูลจาก cf_r09_gl_mapping.amount_type = "coi_charge" และนำข้อมูลที่ได้ไปหาข้อมูลการบันทึกบัญชีดังนี้
1. cf_r09_gl_mapping.account_code = tx_adw_double_entry_detail.gl_code
2. cf_r09_gl_mapping.ul_alteration_id = tx_adw_transaction_policy.source_event_code
3. cf_r09_gl_mapping.event_code = tx_adw_transaction_policy.alteration_type_code
นำข้อมูล tx_adw_double_entry_detail.gl_amount โดยดึงข้อมูลตาม GL Code และนำ GL Code ที่ได้มาเช็คใน cf_r09_gl_mapping.gl_type มีเงื่อนไขดังนี้
1. กรณีที่มีข้อมูลตรงกัน ให้แสดงเป็นเครื่องหมายบวก และนำค่ามาใช้งาน
2. กรณีที่มีข้อมูลไม่ตรงกัน ให้แสดงเป็นเครื่องหมายลบ และน
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R10

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=980582791
- total_chars: 22843

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R10
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R10 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Premium (model_type = PREMIUM) ที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
เงื่อนไขการดึงข้อมูลที่เข้าเงื่อนไขของ R10 ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R10
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA กลุ่ม
ดึงข้อมูล Account Code (tx_adw_double_entry_detail.gl_code) ของรายงาน R10 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R10
| Account code
| Account name
| Model type
| Premium type
| Remark
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 50522111
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีแรก
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522112
| คืนเบี้ยตรงเบี้ยประกันชีวิต - ปีต่อไป
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522121
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีแรก
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522122
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตุ - ปีต่อไป
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522131
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีแรก
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522132
| คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป
| PREMIUM
| RETURN กรณีคืนเบี้ย-บอกล้าง
| จากการสอบถามทาง Ph2 ปัจจุบันยังไม่มีการบันทึกผังนี้
| 50522114
| คืนเบี้ยตรงเบี้ยประกันชีวิตประสบการณ์ - ปีต่อไป
| PREMIUM
| EXPERIENCE REFUND กรณีคืนเบี้ย-บอกล้าง
|
| 50522124
| คืนเบี้ยตรงเบี้ยประกันอุบัติเหตประสบการณ์- ปีต่อไป
| PREMIUM
| EXPERIENCE REFUND กรณีคืนเบี้ย-บอกล้าง
|
| 50522134
| คืนเบี้ยประกันสุขภาพตามประสบการณ์ - ปีต่อไป
| PREMIUM
| EXPERIENCE REFUND กรณีคืนเบี้ย-บอกล้าง
|
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r10
ตาราง tx_rcc_reconcile_r10
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| ประมวลผลแยกตามประเภทผลิตภัณฑ์ ประกอบด้วย
| BL
| Product
| Disclosure Type
| 03
| กลุ่ม (เฉพาะ Group YRT)
| Fix 'Short-term'
| 05
| PA-กลุ่ม
| Fix 'Short-term'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| ประมวลผลแยกตามแบบประกัน ประกอบด้วย
| BL
| Product
| Plan Code
| 03
| กลุ่ม (เฉพาะ Group YRT)
| Fix 'ALL'
| 05
| PA-กลุ่ม
| Fix 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r10
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r10
ตาราง tx_rcc_adj_r10
| No
| Column
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R11

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=979796156
- total_chars: 25695

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R11
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R11 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R11
| Business Line
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R11 ดังนี้ (tx_adw_double_entry_detail.gl_code)
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R11
| Account code
| Account name
| Table group
| Amount Type
| 50551101
| ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1
| Commission,OV
| InitialCommission
| 50551103
| ค่าบำเหน็จปีต่อไป ตัวแทน
| Commission,OV
| RenewalCommission
| 50551206
| เงินประจำตำแหน่งผลงาน-ปีแรก
| Commission,OV
| InitialOverride
| 50551211
| ค่าจัดงานเบี้ยปีต่อไป
| Commission,OV
| RenewalOverride
| 50551126
| ค่าโบนัสประจำงวด FY
| Commission,OV
| InitialOverride
| 50551107
| Com รับตรงชีวิต-SP
| Commission,OV
| InitialCommission
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r11
ตาราง tx_rcc_reconcile_r11
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Short-term"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r11
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r11
ตาราง tx_rcc_adj_r11
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Short-term"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix เป็น "ALL"
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r11 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r11
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r11
ตาราง tx_rcc_output_r11
| No
| Column Name
| Mapping
| format
| 1
| period
| tx_adw_account_head.accounting_date
| บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
|
| 3
| policy_year
| tx_adw_transaction_policy.policy_year
|
| 4
| effective_date
| tx_adw_commission_ov_detail.contract_start_date
|
| 5
| end_coverage_date
| tx_adw_transaction_policy.maturity_date»» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number , period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.end_of_coverage_date มาบันทึก
|
| 6
| portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number, period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.portfolio_id มาบันทึกเป็น portfolio_id
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i05 (CoreEDW)
ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
|
| 7
| sales_channel
| tx_adw_transaction_policy.sale_channel
|
| 8
| sales_channel_code
| tx_adw_transaction_policy.channel_code
|
| 9
| business_line
| tx_adw_double_entry_detail.business_line_code
|
| 10
| mode_of_payment
| tx_adw_commission_ov_detail.mode_of_payment
| หากไม่มีข้อมูล (ค่าว่าง / nu
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R12

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1037664331
- total_chars: 21740

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R12
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R12 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหา ข้อมูลที่ Model ตามกลุ่ม Claim (model_type = CLAIM) ที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_claim_detail_id =  tx_adw_claim_detail.id
เงื่อนไขการดึงข้อมูลที่เข้าเงื่อนไขของ R12 ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R12
| Business Line
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA-กลุ่ม
ดึงข้อมูล Account Code (tx_adw_double_entry_detail.gl_code) ของรายงาน R12 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R12
| Account code
| Account name
| Type รับ/จ่าย
| Model Type
| 50542105
| สินไหมประกันชีวิต
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50542110
| สินไหมอุบัติเหตุ
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50544111
| สินไหมอุบัติเหตุ-ไม่เสียชีวิต
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50544110
| สินไหมทดแทนอุบัติเหตุ - ตรง
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50544210
| สินไหมทุพพลภาพ - ตรง
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50545005
| สินไหมประกันสุขภาพ
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50542125
| สินไหมคืนเบี้ย
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50542121
| Ex-gratia
| ยังไม่มีข้อมูล ทำเฟส 4
| ยังไม่มีข้อมูล ทำเฟส 4
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r12
ตาราง tx_rcc_reconcile_r12
| No
| Column Name
| Mapping
| 1
| period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| disclosure_type
| Fix เป็น "Short-term"
| 3
| account_code
| tx_adw_double_entry_detail.gl_code
| 4
| account_name
| tx_adw_double_entry_detail.gl_name
| 5
| business_line
| tx_adw_double_entry_detail.business_line_code
| 6
| plan_code
| ประมวลผลแยกตามแบบประกัน ประกอบด้วย
| BL
| Product
| Plan Code
| 03
| กลุ่ม (เฉพาะ Group YRT)
| Fix 'ALL'
| 05
| PA-กลุ่ม
| Fix 'ALL'
| 7
| amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| adj_posting
| tx_adw_double_entry_detail.gl_amount
กลับข้างและบันทึก ตัวอย่างเช่นtx_adw_double_entry_detail.gl_amount ได้ 1000 ให้ทำการบันทึกที่ Adj.Posting เป็น -1000
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r12
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r12
ตาราง tx_rcc_adj_r12
| No
| Column Name
| Mapping
| 1
| period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| disclosure_type
| Fix เป็น "Short-term"
| 3
| account_code
| tx_adw_double_entry_detail.gl_code
| 4
| account_name
| tx_adw_double_entry_detail.gl_name
| 5
| business_line
| tx_adw_double_entry_detail.business_line_code
| 6
| plan_code
| ประมวลผลแยกตามแบบประกัน ประกอบด้วย
| BL
| Product
| Plan Code
| 03
| กลุ่ม (เฉพาะ Group YRT)
| Fix 'ALL'
| 05
| PA-กลุ่ม
| Fix 'ALL'
| 7
| adj_posting
| tx_adw_double_entry_detail.gl_amount กลับข้างและบันทึก ตัวอย่างเช่น tx_adw_double_entry_detail.gl_amount ได้ 1000 ให้ทำการบันทึกที่ Adj.Posting เป็น -1000
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r12
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r12
ตาราง tx_rcc_output_r12
| No
| Column Name
| Mapping
| 1
| period
| tx_adw_account_head.accounting_date
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
| 3
| policy_year
| tx_adw_transaction_policy.policy_year
| 4
| effective_date
| tx_adw_claim_detail.contract_start_date
| 5
| end_coverage_date
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number , period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.end_of_coverage_date มาบันทึก
| 6
| portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number , period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.portfolio_id มาบันทึกเป็น portfol
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R13

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937132638
- total_chars: 12849

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R13
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
สร้าง Transaction ตาม period ที่ประมวลผลที่ tx_rcc_monthly_header
ตรวจสอบข้อมูลที่ tx_rcc_landing_r13_hd
สร้าง Transaction ที่ tx_rcc_monthly_detailกรณีไม่พบข้อมูล R13 ตาม period ที่ระบุ สถานะดำเนินการ = 'ประมวลผลไม่สำเร็จ'
กรณีพบข้อมูล R13 ระบุ สถานะดำเนินการ = 'รอยืนยันข้อมูล'ดึงข้อมูลจำนวนเงินจาก tx_rcc_landing_r13_hd.total_amount มา update ที่ tx_rcc_monthly_detail.total_amount ของรายการ R13กรณีประมวลผลมากกว่า 1 Period ให้ sum tx_rcc_landing_r13_hd.total_amount ของทุก period ไปที่ tx_rcc_monthly_detail.total_amount เพื่อแสดงผลในหน้าจอ
กรณีพบข้อมูลให้ Duplicate ข้อมูล R13 ที่ยืนยันมาจากระบบ EXP ตาม Table landing ดังนีกรณี ไม่พบข้อมูล R13 ที่มี period เดียวกันกับข้อมูลที่ส่งเข้าไปให้ดำเนินการ insert เพื่อสร้างรายการข้อมูลใหม่
กรณี พบข้อมูล R13 ที่มี period เดียวกันกับข้อมูลที่ส่งเข้าไปให้ดำเนินการ update ข้อมูลใหม่โดยล้างข้อมูลเดิมออกและ replace ข้อมูลชุดใหม่แทนที่่
| Ralated Output
| Output EXP DB
| Landing RCC DB
| RCC DB
| TO5
| tx_exp_proc_output_5
| tx_rcc_landing_adj_r13
| tx_rcc_adj_r13
| TO1.1
| tx_exp_proc_output_1_1
| tx_rcc_landing_r13_1
| tx_rcc_output_r13_1
| TO1.2
| tx_exp_proc_output_1_2
| tx_rcc_landing_r13_2
| tx_rcc_output_r13_2
| CR RCC-R13 (Sales promotion and Advertising )
| TO2
| tx_exp_proc_output_2
| tx_rcc_landing_r13_sale
| tx_rcc_output_r13_sale
| TO3
| tx_exp_proc_output_3
| tx_rcc_landing_r13_product
| tx_rcc_output_r13_product
| TO4
| tx_exp_proc_output_4
| tx_rcc_landing_r13_brand
| tx_rcc_output_r13_brand
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R13 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ ทีหน้าจอ EDW-RCC-SD002 หน้าจอแสดงรายละเอียด และยืนยันการออกรายงาน R
สร้างไฟล์ CSV R13 ไปวางไว้ที่ shared path (อ้างอิง EDW-RCC-RP013 สำหรับออกรายงาน R13 - Ordinary Products [OP] Expense Allocation GMM) โดย output ของไฟล์ R13.csv จะมีจำนวน 5 11 ไฟล์ ดังนี้
| No.
| Path
| File Name
| Template
| Remark
| 1
| $(Default Path)/ActurialReport/YYYYMM/
| R13_ExpenseAllocation_By_PortfolioID_{YEAR}{MM}_to_{YEAR}{MM}.csv
| R13_ExpenseAllocation_By_PortfolioID
| ใช้ข้อมูล mapping ตาม template
| 2
| $(Default Path)/ActurialReport/YYYYMM/
| R13_ExpenseAllocation_By_Sub_GroupID_{YEAR}{MM}_to_{YEAR}{MM}.csv
| R13_ExpenseAllocation_By_Sub_GroupID
| ใช้ข้อมูล mapping ตาม template
| 3
| $(Default Path)/ActurialReport/YYYYMM/
| R13_SalesPromotion_{YEAR}{MM}_to_{YEAR}{MM}.csv
| R13_SalesPromotion
| ใช้ข้อมูล mapping ตาม template
| 4
| $(Default Path)/ActurialReport/YYYYMM/
| R13_AdvertisingProduct_{YEAR}{MM}_to_{YEAR}{MM}.csv
| R13_AdvertisingProduct
| ใช้ข้อมูล mapping ตาม template
| 5
| $(Default Path)/ActurialReport/YYYYMM/
| R13_AdvertisingBranding_{YEAR}{MM}_to_{YEAR}{MM}.csv
| R13_AdvertisingBranding
| ใช้ข้อมูล mapping ตาม template
| --EDW PH5.1 เพิ่มการ Gen File แยก SalesPromotion, AdvertisingProduct ตาม Model GMM, PAA, VFA (19.03.2024)
| 6
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R02_SalesPromotion_YYYYMM_to_YYYYMM.csv
| R13_R02_SalesPromotion
| ใช้ข้อมูล mapping ตาม template
| 7
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R02_AdvertisingProduct_YYYYMM_to_YYYYMM.csv
| R13_R02_AdvertisingProduct
| ใช้ข้อมูล mapping ตาม template
| 8
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R06_SalesPromotion_YYYYMM_to_YYYYMM.csv
| R13_R06_SalesPromotion
| ใช้ข้อมูล mapping ตาม template
| 9
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R06_AdvertisingProduct_YYYYMM_to_YYYYMM.csv
| R13_R06_AdvertisingProduct
| ใช้ข้อมูล mapping ตาม template
| 10
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R11_SalesPromotion_YYYYMM_to_YYYYMM.csv
| R13_R11_SalesPromotion
| ใช้ข้อมูล mapping ตาม template
| 11
| $(Default Path)/ActurialReport/YYYYMM/
| R13_R11_AdvertisingProduct_YYYYMM_to_YYYYMM.csv
| R13_R11_AdvertisingProduct
| ใช้ข้อมูล mapping ตาม template
step3 : ฝ่ายบัญชี กด Download File ที่หน้าจอ EDW-RCC-SD002 หน้าจอแสดงรายละเอียด และยืนยันการออกรายงาน R
สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" หรือ "ยืนยันข้อมูล" เท่านั้นจากหน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
--EDW PH5.1 เพิ่มการคำนวณยอดรวมของ investment และ property (05.04.67) ระบบทำการ summary ข้อมูลดังนี้sum(tx_rcc_output_r13_1.investment) group ตาม period ที่จะ gen file
sum(tx_rcc_output_r13_1.property) group ตาม period ที่จะ gen file
ระบบจะนำช่วงวันที่ประมวลผล ปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง tx_rcc_landing_r13_hd
ทำการ Generate ข้อมูลไปยัง Excel file เพื่อ export ให้ผู้ใช้ โดยตั้งชื่อไฟล์เป็น R13ACC_YYYYMM_to_YYYYMM.xls ตามรายละเอียดดังนี้
ใช้ข้อมูลจากระบบ Expense Allocation ที่จัดเก็บตาม Process การประมวลผลข้อมูลออกรายงาน R13
ตารางอธิบายข้อมูลในไฟล์ excel
-- EDW PH5.1 ปรับรูปแบบรายงาน (09.04.67)
cf_rcc_template_field.cf_template_file_id = 5
สีและ Template ให้อ้างอิงตามตัวอย่างนี้ >> R13ACC_202402_to_202402.xls
กรณีมีข้อมูลมากกว่า 1 period ให้เว้น 2 บรรทัด ก่อนขึ้น period ถัดไป โดย period ถัดไป ให้นำหัวคอลัมน์มาแสดงด้วย และเรียงลำดับ period จากน้อยไปมาก (ตัวอย่างตาม Link)
| ส่วนที่ 1: Detail
เรียงข้อมูลตาม Account Code, GPV Expense Type จากน้อยไปมาก
กรณีค่าติดลบ ให้แสดงเป็น () ตัวอย่างเช่น -958.00 แสดงเป็น (958.00)
group ข้อมูลตาม Account Code, Direct/Indirect, Index Direct_1, Index Direct_2, BU, GPV Expense Type
หมายเหตุ: กรณี Account Code ขึ้นต้นด้วย 7 คอลัมน์ที่มีค่าเป็น 0 หรือ NULL หรือ '-' ให้แสดงเป็นค่าว่าง
| Column Name
| Format
| Validation
| Example
| DB Table
| DB Column
| Period
| Numeric (6)
|
| 202104
| tx_rcc_adj_r13
| period
| Account Code
| Numeric (8)
|
| 51011005
| tx_rcc_adj_r13
| account_code
| Account Name
| String (100)
|
| เงินเดือน
| tx_rcc_adj_r13
| account_name
| Amount before Deduct Non-recurring
| decimal (25,15)
|
| 464,745.500000000000000
| tx_rcc_adj_r13
| amt_bf_non_recurring
| Non-Recurring
| de
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R14

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1075413076
- total_chars: 34739

```
เกิดรายการ APLObjective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R14
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R14 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Investment (model_type = INVESTMENT) ที่ tx_adw_investment_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_investment_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_investment_detail_id =  tx_adw_investment_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้
ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 08
Business Line สำหรับรายงาน R14
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
| INDUSTRY
| อุตสาหกรรม (ปช, ขพ)
| 02
| ORDINARY
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 08
| PAR Product
| PAR Product
ข้อมูล GL Code ของรายงาน R14 ตามตารางด้านล่างดังนี้
GL สำหรับรายงาน R14
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| 11011100
| เงินกู้ประกันชีวิต
| Investment
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
| 42022110
| ดอกเบี้ยเงินกู้ประกันชีวิต
| Investment
| 42022112
| ดอกเบี้ยรับ-เงินกู้เพื่อชำระเบี้ยประกันอัตโนมัติ(APL)
| Investment
| 42022113
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
| 42022114
| ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิต
| Investment
ข้อมูล Event Code ของรายงาน R14 แบ่งตาม  field LoanRepay  ตามตาราง cf_r14_gl_mapping
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r14
ตาราง tx_rcc_reconcile_r14
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Policy Loan"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| ประมวลผลแยกตามแบบประกัน ประกอบด้วย
| BL
| Product
| Plan Code
| 01
| อุตสาหกรรม (ปช, ขพ)
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| เฉพาะ MRTA/MLTA
| Fix 'MRTA/MLTA'
| 08
| PAR Product
| Fix 'ALL'
| 7
| Event Type
| cf_r14_gl_mapping.event_type
ขั้นตอนการหาข้อมูล
tx_adw_double_entry_detail.event_code = cf_r14_gl_mapping.event_code
tx_adw_double_entry_detail.gl_type =  cf_r14_gl_mapping.account_type
tx_adw_double_entry_detail.gl_code = cf_r14_gl_mapping.account_code
(09.08.2023 by Pattaraporn.pu)
| 8
| Amount
| ขั้นตอนการหาข้อมูล
1.  หา Event Type ก่อน จัดกลุ่ม Event Type เดียวกันไว้ด้วยกัน
2. ดู GL Code จัดกลุ่ม GL Code กลุ่มเดียวกันไว้ด้วยกัน
3. ดู การลงบัญชีว่าเป็น Dr./Cr.
3.1 เจอ Dr. นำค่า tx_adw_double_entry_detail.gl_amount มาบวกกัน = ผลรวมฝั่ง Dr.
3.2 เจอ Cr. นำค่า tx_adw_double_entry_detail.gl_amount มาบวกกัน = ผลรวมฝั่ง Cr.
3.3 นำ ผลรวมฝั่ง Dr. - Cr. บันทึกข้อมูลที่ Amount
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
(09.08.2023 by Pattaraporn.pu)
| 9
| Adj.Posting
| นำ Field Amount ในลำดับที่ 8 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r14
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
| 7
| Event Type
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r14
ตาราง tx_rcc_adj_r14
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix เป็น "Policy Loan"
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| ประมวลผลแยกตามแบบประกัน ประกอบด้วย
| BL
| Product
| Plan Code
| 01
| อุตสาหกรรม
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| กลุ่ม (เฉพาะ MRTA/MLTA)
| Fix 'MRTA/MLTA'
| 08
| PAR Product
| Fix 'Life'
| 7
| Event Type
| cf_r14_gl_mapping.event_type
ขั้นตอนการหาข้อมูล
tx_adw_double_entry_detail.event_code = cf_r14_gl_mapping.event_code
tx_adw_double_entry_detail.gl_type =  cf_r14_gl_mapping.account_type
tx_adw_double_entry_detail.gl_code = cf_r14_gl_mapping.account_code
(09.08.2023 by Pattaraporn.pu)
| 8
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r14 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r14
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name

…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R15

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856125
- total_chars: 22470

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R15
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R15 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_PREMIUM (model_type = REINSURANCE_PREMIUM) ที่ tx_adw_premium_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_ri_detail_id = tx_adw_premium_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 07, 08  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R15
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 07
|
| Unit Linked
| 08
|
| PAR Product
ดึงข้อมูล GL Code ของรายงาน R15 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R15
| Account code
| Account name
| Table group
| 50531110
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.
| REINSURANCE_PREMIUM
| 50531210
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.
| REINSURANCE_PREMIUM
| 50532110
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.
| REINSURANCE_PREMIUM
| 50532210
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป- ตปท.
| REINSURANCE_PREMIUM
| 50533110
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก- ตปท.
| REINSURANCE_PREMIUM
| 50533210
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไป-ตปท
| REINSURANCE_PREMIUM
| 50531105
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.
| REINSURANCE_PREMIUM
| 50531205
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ในปท
| REINSURANCE_PREMIUM
| 50532105
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก- ใน ปท.
| REINSURANCE_PREMIUM
| 50532205
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป-ในปท.
| REINSURANCE_PREMIUM
| 50533105
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก-ใน ปท
| REINSURANCE_PREMIUM
| 50533205
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไปในปท
| REINSURANCE_PREMIUM
Update 27-MAR-2023: เพิ่มเงื่อนไขให้ดึงเฉพาะ tx_adw_premium_ri_detail.report_type = New, Renew, Alteration, New(Fac), Renew(Fac), Alteration(Fac)
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r15
ตาราง tx_rcc_reconcile_r15
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R15 ให้ Fix เป็น 'Life-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| | BL
| Product
| Plan Code
| 01
| อุตสาหกรรม
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| กลุ่ม (เฉพาะ MRTA/MLTA)
| Fix 'MRTA/MLTA'
| 04
| PA สามัญ
| Fix 'ALL'
| 07
| Unit Linked
| Fix 'ALL'
| 08
| PAR Product
| Fix 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r15
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r15
ตาราง tx_rcc_adj_r15
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R15 ให้ Fix เป็น 'Life-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| | BL
| Product
| Plan Code
| 01
| อุตสาหกรรม
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| กลุ่ม (เฉพาะ MRTA/MLTA)
| Fix 'MRTA/MLTA'
| 04
| PA สามัญ
| Fix 'ALL'
| 07
| Unit Linked
| Fix 'ALL'
| 08
| PAR Product
| Fix 'ALL'
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r15 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r15
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บ
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R16

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=992706987
- total_chars: 23608

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R16
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R16 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_COMMISSION_OV (model_type = REINSURANCE_COMMISSION_OV) ที่ tx_adw_commission_ov_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_commission_ov_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 07, 08  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R16
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 07
|
| Unit Linked
| 08
|
| PAR Product
ดึงข้อมูล GL Code ของรายงาน R16 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R16
| Account code
| Account name
| Table group
| 41510110
| ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ
| REINSURANCE_COMMISSION_OV
| 41510210
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.
| REINSURANCE_COMMISSION_OV
| 41510105
| ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ
| REINSURANCE_COMMISSION_OV
| 41510205
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ในประเทศ
| REINSURANCE_COMMISSION_OV
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r16
ตาราง tx_rcc_reconcile_r16
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R16 ให้ Fix เป็น 'Life-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| | BL
| Product
| Plan Code
| 01
| อุตสาหกรรม
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| กลุ่ม (เฉพาะ MRTA/MLTA)
| Fix 'MRTA/MLTA'
| 04
| PA สามัญ
| Fix 'ALL'
| 07
| Unit Linked
| Fix 'ALL'
| 08
| PAR Product
| Fix 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r16
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r16
ตาราง tx_rcc_adj_r16
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| กรณีเป็น R16 ให้ Fix เป็น 'Life-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| | BL
| Product
| Plan Code
| 01
| อุตสาหกรรม
| Fix 'ALL'
| 02
| สามัญ
| Fix 'ALL'
| 03
| กลุ่ม (เฉพาะ MRTA/MLTA)
| Fix 'MRTA/MLTA'
| 04
| PA สามัญ
| Fix 'ALL'
| 07
| Unit Linked
| Fix 'ALL'
| 08
| PAR Product
| Fix 'ALL'
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r16 มาใช้งาน
บันทึกข้อมูลที่ตาราง tx_rcc_output_r16
ตาราง tx_rcc_output_r16
| No
| Column Name
| Mapping
| 1
| period
| tx_adw_account_head.accounting_date
บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
| 3
| plan_code
| กรณี tx_adw_transaction_detail.basic_rider_indicator เป็น RIDER
ทำการหาข้อมูลตามกระบวนการ A7. กระบวนการบันทึก prophet_plan_code สำหรับ Bundle Rider
กรณี tx_adw_transaction_detail.basic_rider_indicator ไม่เป็น RIDER
ใช้ข้อมูล tx_adw_transaction_detail.plan_code_actuarial
| 4
| portfolio_id
| 1. นำ Policy No และ Period ไปอ่านที่ตาราง tx_mps_master_i01(CoreEDW), tx_mps_master_i03 (CoreEDW), tx_mps_master_i04 (CoreEDW) ฟิล์ด policy_number, period
2. อ่านข้อมูล tx_mps_master_i01(CoreEDW).portfolio_id, tx_mps_master_i03 (CoreEDW).portfolio_id, tx_mps_master_i04 (CoreEDW).portfolio_id มาบันทึก
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i01(CoreEDW), tx_mps_master_i03 (CoreEDW),tx_mps_master_i04 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
| 5
| ri_portfolio_id
| business log
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R17

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1003618348
- total_chars: 33220

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R17
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R17 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_CLAIM(model_type = REINSURANCE_CLAIM) ที่ tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม REINSURANCE_CLAIM (model_type = REINSURANCE_CLAIM) ให้ดูข้อมูลที่tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = REINSURANCE_CLAIM
| Account Code
| Account Name
| Model type
| 41011005
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41011010
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41012005
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41012010
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41030005
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ในประเทศ
| REINSURANCE_CLAIM
| 41030010
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ต่างประเทศ
| REINSURANCE_CLAIM
| 41040000
| ค่าเรียกร้องสินไหมรับคืนประกันภัยต่อ
| REINSURANCE_CLAIM
| 41520005
| ส่วนแบ่งกำไรรับ - ในประเทศ
| REINSURANCE_CLAIM
| 41520010
| ส่วนแบ่งกำไรรับ - ต่างประเทศ
| REINSURANCE_CLAIM
| 40546009
| ประมาณการสินไหมทดแทนชีวิตระยะสั้น Case-ประกันเดี่ยวต่อ
| REINSURANCE_CLAIM
| 40546010
| ประมาณการสินไหมทดแทนสภ.ระยะสั้น Case-ประกันเดี่ยวต่อ
| REINSURANCE_CLAIM
| 40546011
| ประมาณการสินไหมทดแทนอบ.ระยะสั้น Case-ประกันเดี่ยวต่อ
| REINSURANCE_CLAIM
| 40546006
| Case Reserve สินไหมชีวิตระยะสั้นเพิ่ม/ลด - RI
| REINSURANCE_CLAIM
| 40546007
| Case Reserve สินไหมสุขภาพระยะสั้นเพิ่ม/ลด - RI
| REINSURANCE_CLAIM
| 40546008
| Case Reserve สินไหมอุบัติเหตุระยะสั้นเพิ่ม/ลด - RI
| REINSURANCE_CLAIM
ca 20250243 (pongsathorn.pa 07/10/2025)
กรณีที่เป็น Model ตามกลุ่ม REINSURANCE_PREMIUM (model_type = REINSURANCE_PREMIUM) ให้ดูข้อมูลที่ tx_adw_premium_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = REINSURANCE_PREMIUM
| Account Code
| Account Name
| Model type
| 50531105
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.
| REINSURANCE_PREMIUM
| 50531110
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.
| REINSURANCE_PREMIUM
| 50531205
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ในปท
| REINSURANCE_PREMIUM
| 50531210
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.
| REINSURANCE_PREMIUM
| 50532105
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก- ใน ปท.
| REINSURANCE_PREMIUM
| 50532110
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.
| REINSURANCE_PREMIUM
| 50532205
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป-ในปท.
| REINSURANCE_PREMIUM
| 50532210
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป- ตปท.
| REINSURANCE_PREMIUM
| 50533105
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก-ใน ปท
| REINSURANCE_PREMIUM
| 50533110
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก- ตปท.
| REINSURANCE_PREMIUM
| 50533205
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไปในปท
| REINSURANCE_PREMIUM
| 50533210
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไป-ตปท
| REINSURANCE_PREMIUM
Update 27-MAR-2023: เพิ่มเงื่อนไขให้ดึงเฉพาะ tx_adw_premium_ri_detail.report_type = Claim, Claim(Fac)
นำข้อมูล ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail โดยมีเงื่อนไขดังนี้กรณีที่เป็น Model ตามกลุ่ม REINSURANCE_CLAIM ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_claim_ri_detail_id = tx_adw_claim_ri_detail.id
กรณีที่เป็น Model ตามกลุ่ม REINSURANCE_PREMIUM ให้หาข้อมูลที่ tx_adw_double_entry_detail.tx_adw_premium_ri_detail_id = tx_adw_premium_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 07, 08  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R17
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 07
|
| Unit Linked
| 08
|
| PAR Product
ดึงข้อมูล GL Code ของรายงาน R17 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R17
| Account code
| Account name
| Model type
| 41011005
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41011010
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41012005
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41012010
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41030005
| สิ
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R18

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1000079731
- total_chars: 20138

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R18
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R18 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_PREMIUM (model_type = REINSURANCE_PREMIUM) ที่ tx_adw_premium_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_ri_detail_id=  tx_adw_premium_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R18
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
| 'PAGROUP'
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R18 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R18
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Type รับ/จ่าย (tx_adw_premium_ri_detail.collection_type)
| 50531110
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.
| Reinsurance
| Accrued และ Cash
| 50531210
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.
| Reinsurance
| Accrued และ Cash
| 50532110
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.
| Reinsurance
| Accrued และ Cash
| 50532210
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป- ตปท.
| Reinsurance
| Accrued และ Cash
| 50533110
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก- ตปท.
| Reinsurance
| Accrued และ Cash
| 50533210
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไป-ตปท
| Reinsurance
| Accrued และ Cash
| 50531105
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.
| Reinsurance
| Accrued และ Cash
| 50531205
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ในปท
| Reinsurance
| Accrued และ Cash
| 50532105
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก- ใน ปท.
| Reinsurance
| Accrued และ Cash
| 50532205
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป-ในปท.
| Reinsurance
| Accrued และ Cash
| 50533105
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีแรก-ใน ปท
| Reinsurance
| Accrued และ Cash
| 50533205
| เบี้ยประกันสุขภาพจ่ายจากการเอาประกันต่อปีต่อไปในปท
| Reinsurance
| Accrued และ Cash
** ตรวจสอบ Type รับ/จ่าย
1. Type รับจ่าย = Cash ให้แปลง Field "RIType" เป็น Actual
2. Type รับจ่าย = Accrued ให้แปลง Field "RIType" เป็น Estimate
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r18
ตาราง tx_rcc_reconcile_r18
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r18
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r18
ตาราง tx_rcc_adj_r18
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r18 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r18
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r18
ตาราง tx_rcc_output_r18
| No
| Column Name
| Mapping
| Data Format
| Descriptions
| 1
| period
| tx_adw_account_head.accounting_date
|  บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| กำหนดให้ Period คือวันที่ทำบันทึกบัญชี (Posting Date)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
|
| เลขที่กรมธรรม์
| 3
| portfolio_id
| »» นำ Policy No. แล
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R19

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1001751049
- total_chars: 20800

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R19
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R19 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE COMMISSION OV (model_type = REINSURANCE_COMMISSION_OV) ที่ tx_adw_commission_ov_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_commission_ov_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R19
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R19 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R19
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Type รับ/จ่าย (tx_adw_commission_ov_ri_detail.collection_type)
| 41510110
| ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ
| Reinsurance
| Accrued และ Cash
| 41510210
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.
| Reinsurance
| Accrued และ Cash
| 41510205
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ในประเทศ
| Reinsurance
| Accrued และ Cash
| 41510105
| ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ
| Reinsurance
| Accrued และ Cash
** ตรวจสอบ Type รับ/จ่าย
1. Type รับจ่าย = Cash ให้แปลง Field "RIType" เป็น Actual
2. Type รับจ่าย = Accrued ให้แปลง Field "RIType" เป็น Estimate
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r19
ตาราง tx_rcc_reconcile_r19
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r19
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r19
ตาราง tx_rcc_adj_r19
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r19 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r19
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r19
ตาราง tx_rcc_output_r19
| No
| Column Name
| Mapping
| Data Format
| Descriptions
| 1
| period
| tx_adw_account_head.accounting_date
|  บันทึก Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| กำหนดให้ Period คือวันที่ทำบันทึกบัญชี (Posting Date)
| 2
| policy_no
| tx_adw_transaction_policy.policy_no
|
| เลขที่กรมธรรม์
| 3
| portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number , period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.portfolio_id มาบันทึกเป็น portfolio_id
>> กรณีไม่พบข้อมูล portfolio_id ที่ตาราง tx_mps_master_i05 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
|
| ICG Tagging
| 4
| ri_portfolio_id
| »» นำ Policy No. และ Period ไปอ่านที่ตาราง tx_mps_master_i05 ฟิล์ด policy_number , period, policy_year
»» อ่านข้อมูล tx_mps_master_i05.ri_portfolio_id มาบันทึกเป็น ri_portfolio_id
>> กรณีไม่พบข้อมูล ri_portfolio_id ที่ตาราง tx_mps_master_i05 (CoreEDW) ให้ทำการหา Auto Tagging A5. กระบวนการการติด Tagging รายงาน R กรณีไม่พบข้อมูลจากรายงาน I
|
| RCG Tagging
| 5
| sales_channel
| tx_adw_transaction_polic
…(truncated)
```

## Process การประมวลผลข้อมูลออกรายงาน R20

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1002209513
- total_chars: 23818

```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R20
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R20 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE CLAIM (model_type = REINSURANCE_CLAIM) ที่ tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_claim_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย  03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R20
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R20 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R20
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Amoun Type
| Type รับ/จ่าย (tx_adw_claim_ri_detail.collection_type)
| 41011010
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.
| Reinsurance
| PaidAmountLife
| Accrued และ Cash
| 41012010
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ตปท.
| Reinsurance
| PaidAmountAccidentDeath
| Accrued และ Cash
| 41030010
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ต่างประเทศ
| Reinsurance
| PaidAmountHealth
| Accrued และ Cash
| 41011005
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.
| Reinsurance
| PaidAmountLife
| Accrued และ Cash
| 41012005
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.
| Reinsurance
| PaidAmountAccidentDeath
| Accrued และ Cash
| 41030005
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ในประเทศ
| Reinsurance
| PaidAmountHealth
| Accrued และ Cash
| 41520010
| ส่วนแบ่งกำไรรับ - ต่างประเทศ
| Reinsurance
| ProfitCom
| Accrued และ Cash
| 41520005
| ส่วนแบ่งกำไรรับ - ในประเทศ
| Reinsurance
| ProfitCom
| Accrued และ Cash
| 41040000
| ค่าเรียกร้องสินไหมรับคืนประกันภัยต่อ
| Reinsurance
| ClaimRecoveryExpense
| Accrued และ Cash
| 40546006
| ประมาณการสินไหมทดแทนชีวิตระยะสั้น/Case Reserve-RE
| Reinsurance
| PaidAmountLife
| PROVISION
| 40546007
| ประมาณการสินไหมทดแทนสภ.ระยะสั้น/Case Reserve-RE
| Reinsurance
| PaidAmountHealth
| PROVISION
| 40546008
| ประมาณการสินไหมทดแทนอบ.ระยะสั้น/Case Reserve-RE
| Reinsurance
| PaidAmountAccidentDeath
| PROVISION
** ตรวจสอบ Type รับ/จ่าย
1. Type รับจ่าย = Cash ให้แปลง Field "RIType" เป็น Actual
2. Type รับจ่าย = Accrued ให้แปลง Field "RIType" เป็น Estimate
3. Type รับจ่าย = PROVISION ให้แปลง Field "RIType" เป็น Provision
นำข้อมูลที่ได้ไปบันทึกในตาราง โดยมีรายละเอียดดังนี้
บันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r20
ตาราง tx_rcc_reconcile_r20
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Amount
| tx_adw_double_entry_detail.gl_amount
| tx_adw_double_entry_detail.gl_type
| รูปแบบข้อมูล
| DR
| เป็นบวก
| CR
| เป็นลบ
** หากไม่มีข้อมูล (ค่าว่าง / null / 0) ให้บันทึกเป็นค่า 0
| 8
| Adj.Posting
| นำ Field Amount ในลำดับที่ 6 มากลับข้าง ตัวอย่างเช่น Amount ได้ยอดเป็น 1000 ใน Field นี้ ให้แสดงเป็น -1000
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r20
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Amount
| 2
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_adj_r20
ตาราง tx_rcc_adj_r20
| No
| Column Name
| Mapping
| 1
| Period
| แสดงผลเป็น Period เป็นรูปแบบ YYYYMM (ปี ค.ศ.)
| 2
| Disclosure Type
| Fix = 'Short-term-Re'
| 3
| Account Code
| tx_adw_double_entry_detail.gl_code
| 4
| Account Name
| tx_adw_double_entry_detail.gl_name
| 5
| BL
| tx_adw_double_entry_detail.business_line_code
| 6
| Plan Code
| Fix = 'ALL'
| 7
| Adj.Posting
| นำ Field Adj.Posting ที่อยู่ในขั้นตอนบันทึกข้อมูลที่ตาราง tx_rcc_reconcile_r20 มาใช้งาน
ประมวลผล Grouping และ Summary ตามรายการคอลัมน์ต่อไปนี้ แล้วบันทึกข้อมูลที่ตาราง tx_rcc_adj_r20
ทำการ Grouping Column ตามฟิล์ดดังนี้
| No
| Column Name
| 1
| Period
| 2
| Disclosure Type
| 3
| Account Code
| 4
| Account Name
| 5
| BL
| 6
| Plan Code
ทำการ Summary ยอดเงินตามฟิล์ดดังนี้
| 1
| Adj.Posting
บันทึกข้อมูลที่ตาราง tx_rcc_output_r20
ตาราง tx_rcc_output_r20
| No
| Column Name
| Mapping
| Data Format
| Descriptions
| 1
| period
| tx_adw_account_head.accounting_date
|  บันทึก Period เป็นร
…(truncated)
```

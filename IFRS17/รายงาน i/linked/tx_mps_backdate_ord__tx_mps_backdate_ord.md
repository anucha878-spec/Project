# tx_mps_backdate_ord

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_backdate_ord-TOC) ] [ [Convention](#tx_mps_backdate_ord-Convention) ] [ [Table : tx_mps_backdate_ord](#tx_mps_backdate_ord-Table:tx_mps_backdate_ord) ]

## Convention

Description: ข้อมูล Transaction MPS Backdate ของกรมธรรม์สามัญ

## Table : tx_mps_backdate_ord

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_backdate_ord_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_backdate_hd_id | FK | Numeric | 8 | | not null | [tx_mps_backdate_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_hd).mps_backdate_hd_id | | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | | 9000552 |
| 5 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | | 496 |
| 6 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเอาเงินประกัน | | | | | 100000.00 |
| 7 | eti_amount | | Numeric | 12,2 | | | เงินครบกำหนดสัญญาของ ETI | | | | | 0 |
| 8 | Insured_date_of_birth | | Date | | | | วันเกิดผู้เอาประกัน | | | | | 1997-11-17 |
| 9 | Insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | | 1 |
| 10 | Insured_issue_age | | Numeric | 3 | | | อายุของผู้เอาประกัน ณ. วันที่ซื้อ | | | | | 25 |
| 11 | Med | | Varchar | 1 | | | ตรวจสุขภาพ | | | | | Y |
| 12 | Standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | | Y |
| 13 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | | 3 |
| 14 | mode_of_payment | | Numeric | 2 | | | โหมดการชำระ | | | | | 12 |
| 15 | modal_premium | | Numeric | 12,2 | | | เบี้ย ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | | 10000.00 |
| 16 | extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยเพิ่มพิเศษ ณ ปัจจุบัน | | | | | 0 |
| 17 | total_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยรวม = เบี้ยประกันรายโหมด + เบี้ยประกันภัยเพิ่มพิเศษ | | | | | 10000.00 |
| 18 | premium_term | | Numeric | 5,2 | | | Premium term in year (กรณีแบบประกันจ่ายเบี้ย At age เช่น 85/60 จะต้องคำนวณ Premium term ตามระยะเวลาที่ชำระเบี้ย) | | | | | 15 |
| 19 | coverage_term | | Numeric | 5,2 | | | Coverage term in year กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง | | | | | 25 |
| 20 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | | 2022-04-28 |
| 21 | issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ | | | | | 2022-04-28 |
| 22 | maturity_date | | Date | | | | วันครบกำหนดสัญญา | | | | | 1947-04-28 |
| 23 | sales_channel_code | | Varchar | 50 | | | รหัสตัวเลข 7 digit ใน AS400 | | | | | 2076803 |
| 24 | current_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ | | | | | I |
| 25 | mode_of_pension_payment | | Varchar | 2 | | | โหมดรับเงินบำนาญ | | | | | 0 |
| 26 | loan_issue_date | | Date | | | | วันเริ่มสัญญาเงินกู้ | | | | | 2023-07-21 |
| 27 | apl_issue_date | | Date | | | | วันที่เกิด APL | | | | | 2023-07-21 |
| 28 | apl_principle_amount | | Numeric | 12,2 | | | จำนวนเงินต้น ของ APL ณ สิ้นเดือน | | | | | 0 |
| 29 | err_message | | Varchar | 500 | | | Error Message | | | | | |
| 30 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | | 2022-08-26 14:30:59 |
| 31 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | | 2022-08-26 14:30:59 |
| 32 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-08-26 14:30:59 |
| 33 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 34 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-08-26 14:30:59 |
| 35 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
| 36 | payment_term_flag | | CharVarchar | 1 | | | แบบระยะชำระเบี้ย | | | | | 0 |
| 37 | payment_term | | Numeric | 2,0 | | | ระยะเวลาชำระเบี้ยตามแบบประกัน | | | | | 15 |
| 38 | plan_term_flag | | CharVarchar | 1 | | | แบบระยะคุ้มครอง | | | | | 0 |
| 39 | plan_term | | Numeric | 3,0 | | | ระยะเวลาคุ้มครองตามแบบประกัน | | | | | 25 |
| 40 | policy_type | | CharVarchar | 1 | | | ประเภทกรมธรรม์ | | | | | E |
| 41 | plan_type | | CharVarchar | 10 | | | ประเภทแบบประกัน MRTA/MLTA | | | | | ORD |
| 42 | reinstate_date | | Date | | | | วันที่ Reinstate | | | | | 2023-07-21 |
| 43 | pay_to | | Date | | | | วันที่ชำระถึง | | | | | 2023-07-21 |
| 44 | reduce_date | | Date | | | | วันที่มีผลบังคับสลักหลัง รายการปิดบัญชีมูลค่าสำเร็จ (Reduced) | | | | | 2023-07-21 |
| 45 | extended_date | | Date | | | | วันที่มีผลสลักหลังขอขยายเวลาเอาประกัน (Extended) | | | | | 2023-07-21 |
| 46 | free_look_date | | Date | | | | วันที่ลูกค้าขอ freelook บอกล้าง | | | | | 1999-06-06 |
| 47 | death_date | | Date | | | | วันที่เสียชีวิต | | | | | 2005-06-06 |
| 48 | surrender_date | | Date | | | | วันที่เวนคืนกรมธรรม์ | | | | | 2001-07-24 |
| 49 | ocp_code | | Numeric | 4 | | | รหัสอาชีพ | | | | | 1300 |
| 50 | record_type | | Varchar | 1050 | | | ความหมายเดียวกับ reinstate_code | | | | | 08 |
| 51 | unhealth_benefit_name | | Varchar | 100 | | | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | | CI01-CI02-CI03-CI04-CI05-CI06-CI07 |
| 52 | unhealth_benefit_paid | | Varchar | 100 | | | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | | 001-000-102-002-110-000-010 |
| 53 | death_in_process_flag | | CharVarchar | 1 | | | อยู่ในช่วงพิจารณาสินไหมเสียชีวิต | | | | | Y |
| 54 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | | 2005-06-06 |
| 55 | auto_surrender_date | | Date | | | | วันที่ขาดผลจากกรณี Auto Surrender | | | | | 2005-06-06 |
| 56 | lapse_date | | Date | | | | วันที่ขาดผล | | | | | 2009-10-25 |
| *** 22/02/2024 ปรับจากโครงการ EDW 5.1 Group 1 เพิ่ม Field เก็บข้อมูลวันที่เปลี่ยนแปลงสถานะ Terminate** | | | | | | | | | | | | |
| 57 | terminate_date | | Date | | | | วันที่มีผลทำให้กรมธรรม์เกิดสถานะ Terminate | | | | | 2009-10-25 |
| **ปรับเพิ่มจากโครงการ EDW 5.1 Group 3** | | | | | | | | | | | | |
| 58 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | | |
| 59 | previous_effective_date | | Date | | | | วันเริ่มสัญญาของสัญญาหลักรอบก่อนหน้า | | | | | |
| 60 | xml_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันตาม OIC | | | | | |
| 61 | edw_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | | |
| 62 | underwrite_type | | Varchar | 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | | |
| 63 | sale_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | | |
| 64 | current_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | | |
| 65 | occupation_name | | Varchar | 30 | | | อาชีพของลูกค้า | | | | | |
| 66 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | | |
| 67 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | | | | | สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น Yไม่สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น N |
| 68 | prev_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ก่อนหน้า | | | | | |
| 69 | apl_interest_amount | | Numeric | 12,2 | | | จำนวนดอกเบี้ยของ APL ณ สิ้นเดือน | | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | | |
| 70 | partner_code | | Varchar | 6 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | | B000089 |
| 71 | loan_branch_code | | Varchar | 4 | | | สาขาที่ให้บริการเงินกู้ครั้งล่าสุด (เฉพาะ PolicyLoan) | | | | | 4610 |
| 72 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...." | | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
| 73 | emr | | Numeric | 4 | | | Extra Mortality Rate | | | | | 150 |
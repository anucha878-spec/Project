# tx_mps_landing_i01_ord

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i01_ord-TOC) ] [ [Convention](#tx_mps_landing_i01_ord-Convention) ] [ [Table : tx_mps_landing_i01_ord](#tx_mps_landing_i01_ord-Table:tx_mps_landing_i01_ord) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I01 สามัญ

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

## Table : tx_mps_landing_i01_ord

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i01_ord_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | | 1 |
| 3 | period | | Varchar | 2006 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | | 9000552 |
| 5 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | | 496 |
| 6 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเอาเงินประกัน | | | | | 100000.00 |
| 7 | eti_amount | | Numeric | 12,2 | | | เงินครบกำหนดสัญญาของ ETI | | | | | 0 |
| 8 | insured_date_of_birth | | Date | | | | วันเกิดผู้เอาประกัน | | | | | 1997-11-17 |
| 9 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | | 1 |
| 10 | insured_issue_age | | Numeric | 3 | | | อายุของผู้เอาประกัน ณ. วันที่ซื้อ | | | | | 25 |
| 11 | med | | Varchar | 1 | | | ตรวจสุขภาพ | | | | | Y |
| 12 | standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | | Y |
| 13 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | | 3 |
| 14 | mode_of_payment | | Numeric | 2 | | | โหมดการชำระ | | | | | 12 |
| 15 | modal_premium | | Numeric | 12,2 | | | เบี้ย ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | | 10000.00 |
| 16 | extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยเพิ่มพิเศษ ณ ปัจจุบัน | | | | | 0 |
| 17 | total_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยรวม = เบี้ยประกันรายโหมด + เบี้ยประกันภัยเพิ่มพิเศษ | | | | | 10000.00 |
| 18 | premium_term | | Numeric | 5,2 | | | Premium term in year (กรณีแบบประกันจ่ายเบี้ย At age เช่น 85/60 จะต้องคำนวณ Premium term ตามระยะเวลาที่ชำระเบี้ย) | | | | | 15 |
| 19 | coverage_term | | Numeric | 5,2 | | | Coverage term in year กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง | | | | | 25 |
| 20 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | | 1988-10-26 |
| 21 | issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ | | | | | 1988-10-26 |
| 22 | maturity_date | | Date | | | | วันครบกำหนดสัญญา | | | | | 2009-10-26 |
| 23 | sales_channel_code | | Varchar | 50 | | | รหัสตัวเลข 7 digit ใน AS400 | | | | | 2070900 |
| 24 | current_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ | | | | | M |
| 25 | prev_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ก่อนหน้า | | | | | I |
| 26 | mode_of_pension_payment | | Varchar | 2 | | | โหมดรับเงินบำนาญ | | | | | 0 |
| 27 | loan_issue_date | | Date | | | | วันเริ่มสัญญาเงินกู้ | | | | | 2023-07-21 |
| 28 | apl_issue_date | | Date | | | | วันที่เกิด APL | | | | | 2023-07-21 |
| 29 | apl_principle_amount | | Numeric | 12,2 | | | จำนวนเงินต้น ของ APL ณ สิ้นเดือน | | | | | 0 |
| 30 | apl_interest_amount | | Numeric | 12,2 | | | จำนวนดอกเบี้ย ของ APL ณ สิ้นเดือน | | | | | 0 |
| 31 | payment_term_flag | | CharVarchar | 1 | | | แบบระยะชำระเบี้ย | | | | | 0 |
| 32 | payment_term | | Numeric | 2 | | | ระยะเวลาชำระเบี้ยตามแบบประกัน | | | | | 21 |
| 33 | plan_term_flag | | CharVarchar | 1 | | | แบบระยะคุ้มครอง | | | | | 0 |
| 34 | plan_term | | Numeric | 3,0 | | | ระยะเวลาคุ้มครองตามแบบประกัน | | | | | 21 |
| 35 | policy_type | | CharVarchar | 1 | | | ประเภทกรมธรรม์W - Whole lifeE - ExtendedT - TermA - AnnualtyP - PAR | | | | | E |
| 36 | plan_type | | CharVarchar | 10 | | | ประเภทแบบประกัน MRTA/MLTA | | | | | ORD |
| 37 | reinstate_date | | Date | | | | วันที่ Reinstate | | | | | 2009-10-25 |
| 38 | pay_to | | Date | | | | วันที่ชำระถึง | | | | | 2009-10-25 |
| 39 | reduce_date | | Date | | | | วันที่มีผลบังคับสลักหลัง รายการปิดบัญชีมูลค่าสำเร็จ (Reduced) | | | | | 2009-10-25 |
| 40 | extended_date | | Date | | | | วันที่มีผลสลักหลังขอขยายเวลาเอาประกัน (Extended) | | | | | 2009-10-25 |
| 41 | free_look_date | | Date | | | | วันที่ลูกค้าขอ freelook บอกล้าง | | | | | 2009-10-25 |
| 42 | death_date | | Date | | | | วันที่เสียชีวิต | | | | | 2009-10-25 |
| 43 | surrender_date | | Date | | | | วันที่เวนคืนกรมธรรม์ | | | | | 2009-10-25 |
| 44 | err_message | | Varchar | 500 | | | Error Message | | | | | |
| 45 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | | 2022-09-09 19:36:45 |
| 46 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | | 2022-09-09 19:36:45 |
| 47 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-09-09 19:36:45 |
| 48 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 49 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-09-09 19:36:45 |
| 50 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
| 51 | ocp_code | | NumberNumeric | 4 | | | ชั้นอาชีพ | | | | | 6000 |
| 52 | record_type | | Varchar | 50 | | | ความหมายเดียวกับ reinstate_code | | | | | 08 |
| 53 | unhealth_benefit_name | | Varchar | 100255 | | | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | | CI01-CI02-CI03-CI04-CI05-CI06-CI07 |
| 54 | unhealth_benefit_paid | | Varchar | 100255 | | | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | | 001-000-102-002-110-000-010 |
| 55 | death_in_process_flag | | Varchar | 1 | | | อยู่ในช่วงพิจารณาสินไหมเสียชีวิต | | | | | Y |
| 56 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | | 2009-10-25 |
| 57 | auto_surrender_date | | Date | | | | วันที่ขาดผลจากกรณี Auto Surrender | | | | | 2009-10-25 |
| 58 | lapse_date | | Date | | | | วันที่ขาดผล | | | | | 2009-10-25 |
| *** 22/02/2024 ปรับจากโครงการ EDW 5.1 Group 1 เพิ่ม Field เก็บข้อมูลวันที่เปลี่ยนแปลงสถานะ Terminate** | | | | | | | | | | | | |
| 59 | terminate_date | | Date | | | | วันที่มีผลทำให้กรมธรรม์เกิดสถานะ Terminate | | | | | 2009-10-25 |
| **ปรับเพิ่มจากโครงการ EDW 5.1 Group 3** | | | | | | | | | | | | |
| 60 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | | |
| 61 | previous_effective_date | | Date | | | | วันเริ่มสัญญาของสัญญาหลักรอบก่อนหน้า | | | | | |
| 62 | xml_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันตาม OIC | | | | | |
| 63 | edw_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | | |
| 64 | underwrite_type | | Varchar | 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | | |
| 65 | sale_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | | |
| 66 | current_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | | |
| 67 | occupation_name | | Varchar | 30 | | | อาชีพของลูกค้า | | | | | |
| 68 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | | |
| 69 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | | | | | สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น Yไม่สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น N |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | | |
| 70 | partner_code | | Varchar | 6 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | | B000089 |
| 71 | loan_branch_code | | Varchar | 4 | | | สาขาที่ให้บริการเงินกู้ครั้งล่าสุด (เฉพาะ PolicyLoan) | | | | | 4610 |
| 72 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...." | | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
| 73 | emr | | Numeric | 4 | | | Extra Mortality Rate | | | | | 150 |
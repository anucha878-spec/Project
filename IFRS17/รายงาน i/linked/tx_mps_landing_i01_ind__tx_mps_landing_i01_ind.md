# tx_mps_landing_i01_ind

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i01_ind-TOC) ] [ [Convention](#tx_mps_landing_i01_ind-Convention) ] [ [Table : tx_mps_landing_i01_ind](#tx_mps_landing_i01_ind-Table:tx_mps_landing_i01_ind) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I01 อุตสาหกรรม

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

## Table : tx_mps_landing_i01_ind

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i01_ind_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | J7631611 |
| 5 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | 154 |
| 6 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเอาเงินประกัน | | | | 100000.00 |
| 7 | Insured_date_of_birth | | Date | | | | วันเกิดผู้เอาประกัน | | | | 1994-05-04 |
| 8 | Insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | 1 |
| 9 | Insured_issue_age | | Numeric | 3 | | | อายุของผู้เอาประกัน ณ. วันที่ซื้อ | | | | 50 |
| 10 | Med | | Varchar | 1 | | | ตรวจสุขภาพ | | | | N |
| 11 | Standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | Y |
| 12 | ocp_code | | Numeric | 4 | | | รหัสอาชีพ | | | | 7100 |
| 13 | ocp_class | | Numeric | 12,24 | | | ชั้นอาชีพ | | | | 1 |
| 14 | mode_of_payment | | Numeric | 2 | | | โหมดการชำระ | | | | 12 |
| 15 | modal_premium | | Numeric | 12,2 | | | เบี้ย ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | 500 |
| 16 | premium_term | | Numeric | 12,25,2 | | | Premium term in year (กรณีแบบประกันจ่ายเบี้ย At age เช่น 85/60 จะต้องคำนวณ Premium term ตามระยะเวลาที่ชำระเบี้ย) | | | | 14 |
| 17 | coverage_term | | Numeric | 12,25,2 | | | Coverage term in year กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง | | | | 20 |
| 18 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 1990-12-27 |
| 19 | issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ | | | | 1990-12-27 |
| 20 | maturity_date | | Date | | | | วันครบกำหนดสัญญา | | | | 2024-02-26 |
| 21 | sales_channel_code | | Varchar | 50 | | | รหัสตัวเลข 7 digit ใน AS400 | | | | 2075100 |
| 22 | current_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ | | | | 8 |
| 23 | prev_basic_policy_status | | Varchar | 1 | | | สถานะกรมธรรม์ก่อนหน้า | | | | 6 |
| 24 | disability_flag | | CharVarchar | 1 | | | สถานะทุพพลภาพ | มากกว่า 0 ถือว่าเป็นเคสทุพพลภาพ | | | 0 |
| 25 | installment | | Numeric | 4 | | | งวดชำระล่าสุด (ชำระครั้งสุดท้าย)Format: YYMM | YY = ปี 2 DigitsMM = เดือน 2 Digits | | | 6005 |
| 26 | current_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2004-02-26 |
| 27 | loan_issue_date | | Date | | | | วันเริ่มสัญญาเงินกู้ | | | | 2004-02-26 |
| 28 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 29 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 02:04:46 |
| 30 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-08-31 02:04:46 |
| 31 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 32 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 33 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 02:04:46 |
| 34 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 35 | policy_type | | varchar | 1 | | | ประเภทกรมธรรม์ | I = INDG = GOV | | | I |
| 36 | reinstate_old_comm_date | | Date | | | | วันเริ่มสัญญาเดิม จากการต่อสัญญา Reinstate | | | | 2003-06-14 |
| 37 | reinstate_new_comm_date | | Date | | | | วันเริ่มสัญญาใหม่ จากการต่อสัญญา Reinstate | | | | 2005-04-14 |
| 38 | freelook_flag | | varchar | 1 | | | Freelook flag เพื่อใช้แยกสถานะ C เนื่องจากปัจจุบันไม่มีสถานะ freelook ในระบบ AS400 | 1 = freelook0 = not freelook | | | |
| 39 | death_in_process_flag | | Varchar | 1 | | | อยู่ในช่วงพิจารณาสินไหมเสียชีวิต | | | | Y |
| 40 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | 2024-02-26 |
| 41 | auto_surrender_date | | Date | | | | วันที่ขาดผลจากกรณี Auto Surrender | | | | 2005-06-06 |
| 42 | movement_policy_flag | | varchar | 1 | | | จะมีค่าจากกระบวนการ [02 - UR - Closing Timeline - Daily Update Policy Status & Movement](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1105527051) | I = Insert U = update *กรณีเป็นข้อมูล ณ สิ้นเดือน ลงเป็น null | | | |
| **ปรับเพิ่มจากโครงการ EDW 5.1 Group 3** | | | | | | | | | | | |
| 43 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | |
| 44 | xml_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 45 | edw_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 46 | underwrite_type | | Varchar | 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 47 | agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 48 | occupation_name | | Varchar | 125 | | | อาชีพของลูกค้า | | | | |
| 49 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | |
| 50 | wp_date | | Date | | | | วันที่ได้รับสิทธิ์ WP | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 51 | loan_branch_code | | Varchar | 4 | | | สาขาที่ให้บริการเงินกู้ครั้งล่าสุด (เฉพาะ PolicyLoan) | | | | 4610 |
| 52 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...."เช่น อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
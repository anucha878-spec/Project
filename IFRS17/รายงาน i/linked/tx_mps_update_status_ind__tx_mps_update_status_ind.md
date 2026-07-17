# tx_mps_update_status_ind

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-TOC) ] [ [Convention](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-Convention) ] [ [Table : tx_mps_backdate_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind_hd#ttx_mps_backdate_ind_hd-Table:tx_mps_backdate_ind_hd)]

## Convention

Description:

## Table : tx_mps_update_status_ind

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_update_status_ind_id | PK | numeric (18) | | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | numeric (8) | | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | Period | | Varchar (6) | | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | Policy_Number | | Varchar (50) | | | not null | เลขที่กรมธรรม์ | | | | D5836834 |
| 5 | Plan_Code | | Varchar (50) | | | not null | แบบประกัน | | | | 25 |
| 6 | Initial_Sum_Insured | | numeric (12) | | 2 | not null | จำนวนเอาเงินประกัน | | | | 100000.00 |
| 7 | Insured_date_of_birth | | date | | | | วันเกิดผู้เอาประกัน | | | | 1994-05-04 |
| 8 | Insured_sex | | Varchar (1) | | | | เพศของผู้เอาประกัน | | | | 1 |
| 9 | Insured_issue_age | | numeric (3) | | | | อายุของผู้เอาประกัน ณ. วันที่ซื้อ | | | | 10 |
| 10 | Med | | Varchar (1) | | | | ตรวจสุขภาพ | | | | N |
| 11 | Standard | | Varchar (1) | | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | Y |
| 12 | Ocp_Class | | numeric (4) | | 2 | | ชั้นอาชีพ | | | | 1 |
| 13 | Mode_Of_Payment | | numeric (2) | | | | โหมดการชำระ | | | | 12 |
| 14 | Modal_Premium | | numeric (12) | | 2 | | เบี้ย ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | 500 |
| 15 | Premium_Term | | numeric (5) | | 2 | | Premium term in year (กรณีแบบประกันจ่ายเบี้ย At age เช่น 85/60 จะต้องคำนวณ Premium term ตามระยะเวลาที่ชำระเบี้ย) | | | | 14 |
| 16 | Coverage_Term | | numeric (5) | | 2 | | Coverage term in year กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง | | | | 20 |
| 17 | Effective_Date | | date | | | | วันที่เริ่มความคุ้มครอง | | | | 1990-12-27 |
| 18 | Issue_Date | | date | | | | วันที่รับรู้กรมธรรม์ | | | | 1990-12-27 |
| 19 | Sales_Channel_code | | Varchar (50) | | | | รหัสตัวเลข 7 digit ใน AS400 | | | | 2075100 |
| 20 | Current_basic_Policy_Status | | Varchar (1) | | | | สถานะกรมธรรม์ | | | | 8 |
| 21 | Prev_basic_Policy_Status | | Varchar (1) | | | | สถานะกรมธรรม์ก่อนหน้า | | | | 6 |
| 22 | loan_issue_date | | date | | | | วันเริ่มสัญญาเงินกู้ | | | | 2004-07-02 |
| 23 | err_message | | Varchar (500) | | | | Error Message | | | | |
| 24 | transaction_date | | timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 02:04:46 |
| 25 | as400_last_update_date | | timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-08-31 02:04:46 |
| 26 | create_datecreated_date | | timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 27 | create_bycreated_by | | Varchar (50) | | | not null | ผู้บันทึกรายการ | | | | boss |
| 28 | update_dateupdated_date | | timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 02:04:46 |
| 29 | update_byupdated_by | | Varchar (50) | | | | ผู้อัพเดทรายการ | | | | boss |
| 30 | ocp_code | | Numeric | 4 | | | รหัสอาชีพ | | | | 7100 |
| 31 | maturity_date | | Date | | | | วันครบกำหนดสัญญา | | | | 2024-02-26 |
| 32 | disability_flag | | CharVarchar | 1 | | | สถานะทุพพลภาพ | มากกว่า 0 ถือว่าเป็นเคสทุพพลภาพ | | | 0 |
| 33 | installment | | Numeric | 4 | | | งวดชำระล่าสุด (ชำระครั้งสุดท้าย)Format: YYMM | YY = ปี 2 DigitsMM = เดือน 2 Digits | | | 6005 |
| 34 | current_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2004-02-26 |
| 35 | policy_type | | varchar | 1 | | | ประเภทกรมธรรม์ | I = INDG = GOV | | | I |
| 36 | reinstate_old_comm_date | | Date | | | | วันเริ่มสัญญาเดิม จากการต่อสัญญา Reinstate | | | | 2003-06-14 |
| 37 | reinstate_new_comm_date | | Date | | | | วันเริ่มสัญญาใหม่ จากการต่อสัญญา Reinstate | | | | 2005-04-14 |
| 38 | freelook_flag | | varchar | 150 | | | Freelook flag เพื่อใช้แยกสถานะ C เนื่องจากปัจจุบันไม่มีสถานะ freelook ในระบบ AS400 | 1 = freelook0 = not freelook | | | |
| 39 | death_in_process_flag | | Charvarchar | 1 | | | อยู่ในช่วงพิจารณาสินไหมเสียชีวิต | | | | Y |
| 40 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | 2009-10-25 |
| 41 | auto_surrender_date | | Date | | | | วันที่ขาดผลจากกรณี Auto Surrender | | | | 2009-10-25 |
| **ปรับเพิ่มจากโครงการ EDW 5.1 Group 3** | | | | | | | | | | | |
| 42 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | |
| 43 | xml_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 44 | edw_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 45 | underwrite_type | | Varchar | 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 46 | agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 47 | occupation_name | | Varchar | 125 | | | อาชีพของลูกค้า | | | | |
| 48 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | |
| 49 | wp_date | | Date | | | | วันที่ได้รับสิทธิ์ WP | | | | |
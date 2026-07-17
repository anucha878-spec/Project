# tx_mps_landing_i04

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i04-TOC) ] [ [Convention](#tx_mps_landing_i04-Convention) ] [ [Table : tx_mps_landing_i04](#tx_mps_landing_i04-Table:tx_mps_landing_i04) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I04

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830)

## Table : tx_mps_landing_i04

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_untag_i04_idmps_landing_i04_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | unique_id | | Numeric | 8 | | not null | | | | | |
| 4 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | UL00000001 |
| 6 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | UL002 |
| 7 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ Prophet | ค่าว่าง | | | |
| 8 | initial_sum_insured | | Numeric | 22,222,3 | | | จำนวนเงินเอาประกันภัยเริ่มต้น | | | | 120000.00 |
| 9 | actual_sum_assured | | Numeric | 22,2 22,3 | | | จำนวนเงินเอาประกันภัยปัจจุบัน | | | | 120000.00 |
| 10 | issue_age | | Numeric | 3 | | | อายุเมื่อเริ่มทำประกัน | | | | 29 |
| 11 | regular_premium | | Numeric | 22,2 22,3 | | | เบี้ยประกันภัยหลักเริ่มต้น | | | | 1000.00 |
| 12 | last_month_regular_premium | | Numeric | 22,2 22,3 | | | เบี้ยประกันภัยหลักของเดือนที่แล้ว กรณีเดือนก่อนเป็น Premium Holiday จะแสดงค่าเป็น 0 | | | | 0 |
| 13 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 14 | date_of_birth_insured | | Date | | | | วันเกิดผู้เอาประกัน | | | | 1991-01-04 |
| 15 | med | | Varchar | 1 | | | เคสตรวจสุขภาพ / ไม่ตรวจสุขภาพ | | | | N |
| 16 | standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | B |
| 17 | ocp_class | | Numeric | 12,24 | | | ชั้นอาชีพ | | | | 1 |
| 18 | mode_of_payment | | Numeric | 2 3 | | | งวดการชำระเบี้ยประกันภัย | | | | 111 |
| 19 | modal_premium | | Numeric | 22,2 22,3 | | | เบี้ยรายโหมดล่าสุด | | | | 100000.00 |
| 20 | extra_premium | | Numeric | 22,2 22,3 | | | เบี้ยประกันภัยหลักสำหรับภัยต่ำกว่ามาตรฐาน | | | | 0 |
| 21 | premium_term | | Numeric | 22,2 22,3 | | | ระยะเวลาชำระเบี้ยประกันภัย | | | | 1 |
| 22 | coverage_term | | Numeric | 22,2 22,3 | | | ระยะเวลาเอาประกันภัย | | | | 70 |
| 23 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 2020-03-09 |
| 24 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | 2020-08-19 |
| 25 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | ค่าว่าง | | | |
| 26 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย | | | | 2073000 |
| 27 | policy_coverage_month | | Numeric | 3 | | | อายุกรมธรรม์เป็นเดือน | | | | 5 |
| 28 | policy_premium_month | | Numeric | 3 | | | เดือนกรมธรรม์ แต่ไม่รวมเดือนที่ใช้สิทธิ์ Premium holiday | | | | 1 |
| 29 | current_policy_status | | Varchar | 1 3 | | | สถานะกรมธรรม์ปัจจุบันของ UL ณ สิ้นเดือน | | | | AS |
| 30 | prev_month_policy_status | | Varchar | 1 3 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของ UL | | | | AS |
| 31 | prev_policy_status | | Varchar | 1 3 | | | สถานะกรมธรรม์ก่อนหน้า ก่อนสถานะปัจจุบันของ UL | | | | N |
| 32 | curr_premium_status | | Varchar | 1 | | | สถานะเบี้ยปัจจุบันของ UL ณ สิ้นเดือน | | | | 1 |
| 33 | prev_month_premium_status | | Varchar | 1 | | | สถานะเบี้ย ณ สิ้นเดือนก่อนของ UL | | | | 0 |
| 34 | prev_premium_status | | Varchar | 1 | | | สถานะเบี้ยก่อนหน้า ก่อนสถานะปัจจุบันของ UL | | | | 0 |
| 35 | curr_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ปัจจุบัน | | | | 2021-12-16 |
| 36 | prev_month_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ ณ สิ้นเดือนก่อน | | | | 2021-12-16 |
| 37 | prev_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ก่อนหน้า | | | | 2020-11-19 |
| 38 | curr_premium_status_date | | Date | | | | วันที่ สถานะเบี้ยปัจจุบัน | | | | 2020-11-19 |
| 39 | prev_month_premium_status_date | | Date | | | | วันที่ สถานะเบี้ย ณ สิ้นเดือนก่อน | | | | 2020-11-19 |
| 40 | prev_premium_status_date | | Date | | | | วันที่ สถานะเบี้ยก่อนหน้า | | | | |
| 41 | topup_premium_paid | | Numeric | 22,2 22,3 | | | เบี้ย Topup | | | | 0 |
| 42 | topup_premium_accum | | Numeric | 22,2 22,3 | | | เบี้ย Topup สะสม | | | | 10000.00 |
| 43 | last_month_regular_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชีกรมธรรม์ ณ สิ้นเดือนที่แล้ว คำนวณจาก Regular Premium หรือ Single Premium | | | | 0 |
| 44 | last_month_topup_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชีกรมธรรม์ ณ สิ้นเดือนที่แล้ว คำนวณจาก Top-up Premium | | | | 0 |
| 45 | end_month_regular_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชี เบี้ยประกันภัยหลัก ณ สิ้นเดือน | | | | 1459.90 |
| 46 | end_month_topup_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชี เบี้ย Topup ณ สิ้นเดือน | | | | 15237.78 |
| 47 | mvy_regular_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เบี้ยประกันภัยหลัก ณ สิ้นเดือน | | | | 0 |
| 48 | mvy_topup_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เบี้ย Topup ณ สิ้นเดือน | | | | 0 |
| 49 | average_regular_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เฉลี่ย เบี้ยประกันภัยหลัก | | | | 0 |
| 50 | withdrawal_regular_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าการถอนบางส่วน เบี้ยประกันภัยหลัก | | | | 0 |
| 51 | withdrawal_topup_premium_av | | Numeric | 22,2 22,3 | | | มูลค่าการถอนบางส่วน เบี้ย Topup | | | | 0 |
| 52 | withdrawal_regular_premium_av_accum | | Numeric | 22,2 22,3 | | | มูลค่าการถอนบางส่วน เบี้ยประกันภัยหลัก สะสม | | | | 0 |
| 53 | withdrawal_topup_premium_av_accum | | Numeric | 22,2 22,3 | | | มูลค่าการถอนบางส่วน เบี้ย Topup สะสม | | | | 0 |
| 54 | premium_holiday_flag | | Varchar | 1 | | | ใช้สิทธิ์ Premium holiday ในเดือนปัจจุบันหรือไม่ | | | | 1 |
| 55 | premium_deduction_flag | | Varchar | 1 | | | เคยลดเบี้ยหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 56 | sum_assured_deduction_flag | | Varchar | 1 | | | เคยลดทุนหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 57 | partial_withdrawal_flag | | Varchar | 1 | | | เคยใช้สิทธิ์ Partial Withdrawal จากการขายคืนหน่วยลงทุนของเบี้ยประกันภัยหลักหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 58 | loyalty_bonus_flag | | Varchar | 1 | | | ใช้สิทธิ์ Loyalty bonus ณ เดือนจ่าย Bonus หหรือไม่ | ปัจจุบันยังไม่มีค่าจากต้นทาง (UL ยังไม่ได้ลงข้อมูล) | | | |
| 59 | non_lapse_guarantee_flag | | Varchar | 1 | | | ใช้สิทธิ์ Non-lapse guarantee ในเดือนปัจจุบันหรือไม่ | | | | 0 |
| 60 | as400_last_update_date | | Date | | | | วันที่ AS400 Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 61 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 62 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 63 | last_update_date | | Timestamp | | | not null | วันที่ Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 64 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 65 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 66 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 67 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 68 | emr_rate | | Numeric | 6,2 | | | emr rate | | | | |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 69 | customer_id | | Varchar | 10 --> 25 | | | รหัสลูกค้า | | | | |
| 70 | xml_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 71 | edw_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 72 | underwrite_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 73 | sale_agency_code | | Numeric –> Varchar | 8,0 –> 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | |
| 74 | current_agency_code | | Numeric –> Varchar | 8,0 –> 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 75 | occupation_name | | Varchar | 255 | | | อาชีพของลูกค้า | | | | |
| 76 | income | | Numeric | 22,217,0 | | | รายได้ต่อปีของลูกค้า | | | | |
| 77 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | | | | |
| **ปรับการเพิ่มเติมจาก ช่องทางการขาย สำหรับ plan code UL005 - UL010 ** | | | | | | | | | | | |
| 78 | sales_channel_code_ud | | Varchar | 50 | | | Channel code | | | | 8100001 |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 79 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | B000089 |
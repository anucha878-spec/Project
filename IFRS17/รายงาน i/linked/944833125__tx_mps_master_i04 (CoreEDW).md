# tx_mps_master_i04 (CoreEDW)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833125
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i04(CoreEDW)-TOC) ] [ [Convention](#tx_mps_master_i04(CoreEDW)-Convention) ] [ [Table : tx_mps_master_i04](#tx_mps_master_i04(CoreEDW)-Table:tx_mps_master_i04) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I04 (Table Master ฝั่ง CoreEDW)

## Table : tx_mps_master_i04

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i04_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | UL00000001 |
| 4 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | UL002 |
| 5 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ Prophet | | | | SP02 |
| 6 | initial_sum_insured | | Numeric | 22,222,3 | | | จำนวนเงินเอาประกันภัยเริ่มต้น | | | | 120000.00 |
| 7 | actual_sum_assured | | Numeric | 22,222,3 | | | จำนวนเงินเอาประกันภัยปัจจุบัน | | | | 120000.00 |
| 8 | issue_age | | Numeric | 3 | | | อายุเมื่อเริ่มทำประกัน | | | | 30 |
| 9 | regular_premium | | Numeric | 22,222,3 | | | เบี้ยประกันภัยหลักเริ่มต้น | | | | 1000.00 |
| 10 | last_month_regular_premium | | Numeric | 22,222,3 | | | เบี้ยประกันภัยหลักของเดือนที่แล้ว กรณีเดือนก่อนเป็น Premium Holiday จะแสดงค่าเป็น 0 | | | | 0 |
| 11 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 12 | date_of_birth_insured | | Date | | | | วันเกิดผู้เอาประกัน | | | | 1991-01-04 |
| 13 | med | | Varchar | 1 | | | เคสตรวจสุขภาพ / ไม่ตรวจสุขภาพ | | | | N |
| 14 | standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | Y |
| 15 | ocp_class | | Numeric | 12,24 | | | ชั้นอาชีพ | | | | 1 |
| 16 | mode_of_payment | | Numeric | 3 | | | งวดการชำระเบี้ยประกันภัย | | | | 1 |
| 17 | modal_premium | | Numeric | 22,222,3 | | | เบี้ยรายโหมดล่าสุด | | | | 5000.00 |
| 18 | extra_premium | | Numeric | 22,222,3 | | | เบี้ยประกันภัยหลักสำหรับภัยต่ำกว่ามาตรฐาน | | | | 0 |
| 19 | premium_term | | Numeric | 22,222,3 | | | ระยะเวลาชำระเบี้ยประกันภัย | | | | 55.0 |
| 20 | coverage_term | | Numeric | 22,222,3 | | | ระยะเวลาเอาประกันภัย | | | | 55.0 |
| 21 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 1991-01-04 |
| 22 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | 1991-01-04 |
| 23 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | AGT |
| 24 | sales_channel_code | | Varchar | 50 | | | | | | | 2071500 |
| 25 | policy_coverage_month | | Numeric | 3 | | | อายุกรมธรรม์เป็นเดือน | | | | 24 |
| 26 | policy_premium_month | | Numeric | 3 | | | เดือนกรมธรรม์ แต่ไม่รวมเดือนที่ใช้สิทธิ์ Premium holiday | | | | 20 |
| 27 | current_policy_status | | Varchar | 3 | | | สถานะกรมธรรม์ปัจจุบันของ UL ณ สิ้นเดือน | | | | I |
| 28 | prev_month_policy_status | | Varchar | 3 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของ UL | | | | S |
| 29 | prev_policy_status | | Varchar | 3 | | | สถานะกรมธรรม์ก่อนหน้า ก่อนสถานะปัจจุบันของ UL | | | | D |
| 30 | curr_premium_status | | Varchar | 1 3 | | | สถานะเบี้ยปัจจุบันของ UL ณ สิ้นเดือน | | | | I |
| 31 | prev_month_premium_status | | Varchar | 1 3 | | | สถานะเบี้ย ณ สิ้นเดือนก่อนของ UL | | | | PH |
| 32 | prev_premium_status | | Varchar | 1 3 | | | สถานะเบี้ยก่อนหน้า ก่อนสถานะปัจจุบันของ UL | | | | F |
| 33 | curr_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ปัจจุบัน | | | | 1991-01-04 |
| 34 | prev_month_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ ณ สิ้นเดือนก่อน | | | | 1991-01-04 |
| 35 | prev_policy_status_date | | Date | | | | วันที่ สถานะกรมธรรม์ก่อนหน้า | | | | 1991-01-04 |
| 36 | curr_premium_status_date | | Date | | | | วันที่ สถานะเบี้ยปัจจุบัน | | | | 1991-01-04 |
| 37 | prev_month_premium_status_date | | Date | | | | วันที่ สถานะเบี้ย ณ สิ้นเดือนก่อน | | | | 1991-01-04 |
| 38 | prev_premium_status_date | | Date | | | | วันที่ สถานะเบี้ยก่อนหน้า | | | | 1991-01-04 |
| 39 | topup_premium_paid | | Numeric | 22,222,3 | | | เบี้ย Topup | | | | 1000.00 |
| 40 | topup_premium_accum | | Numeric | 22,222,3 | | | เบี้ย Topup สะสม | | | | 1000.00 |
| 41 | last_month_regular_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชีกรมธรรม์ ณ สิ้นเดือนที่แล้ว คำนวณจาก Regular Premium หรือ Single Premium | | | | 1000.00 |
| 42 | last_month_topup_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชีกรมธรรม์ ณ สิ้นเดือนที่แล้ว คำนวณจาก Top-up Premium | | | | 1000.00 |
| 43 | end_month_regular_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชี เบี้ยประกันภัยหลัก ณ สิ้นเดือน | | | | 1000.00 |
| 44 | end_month_topup_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชี เบี้ย Topup ณ สิ้นเดือน | | | | 1000.00 |
| 45 | mvy_regular_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เบี้ยประกันภัยหลัก ณ สิ้นเดือน | | | | 1000.00 |
| 46 | mvy_topup_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เบี้ย Topup ณ สิ้นเดือน | | | | 1000.00 |
| 47 | average_regular_premium_av | | Numeric | 22,222,3 | | | มูลค่าบัญชี ค่าธรรมเนียมรายเดือน เฉลี่ย เบี้ยประกันภัยหลัก | | | | 1000.00 |
| 48 | withdrawal_regular_premium_av | | Numeric | 22,222,3 | | | มูลค่าการถอนบางส่วน เบี้ยประกันภัยหลัก | | | | 1000.00 |
| 49 | withdrawal_topup_premium_av | | Numeric | 22,222,3 | | | มูลค่าการถอนบางส่วน เบี้ย Topup | | | | 1000.00 |
| 50 | withdrawal_regular_premium_av_accum | | Numeric | 22,222,3 | | | มูลค่าการถอนบางส่วน เบี้ยประกันภัยหลัก สะสม | | | | 1000.00 |
| 51 | withdrawal_topup_premium_av_accum | | Numeric | 22,222,3 | | | มูลค่าการถอนบางส่วน เบี้ย Topup สะสม | | | | 1000.00 |
| 52 | premium_holiday_flag | | Varchar | 1 | | | ใช้สิทธิ์ Premium holiday ในเดือนปัจจุบันหรือไม่ | | | | 0 |
| 53 | premium_deduction_flag | | Varchar | 1 | | | เคยลดเบี้ยหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 54 | sum_assured_deduction_flag | | Varchar | 1 | | | เคยลดทุนหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 55 | partial_withdrawal_flag | | Varchar | 1 | | | เคยใช้สิทธิ์ Partial Withdrawal จากการขายคืนหน่วยลงทุนของเบี้ยประกันภัยหลักหรือไม่ ตั้งแต่เริ่มสัญญาถึงเดือนปัจจุบัน | | | | 0 |
| 56 | loyalty_bonus_flag | | Varchar | 1 | | | ใช้สิทธิ์ Loyalty bonus ณ เดือนจ่าย Bonus หหรือไม่ | | | | 0 |
| 57 | non_lapse_guarantee_flag | | Varchar | 1 | | | ใช้สิทธิ์ Non-lapse guarantee ในเดือนปัจจุบันหรือไม่ | | | | 1 |
| 58 | portfolio_name | | Varchar | 50 | | | IFRS17 Portfolio name | | | | UNT_LNK |
| 59 | profitability_group | | Varchar | 50 | | | Profitability group | | | | ONRS |
| 60 | ri_portfolio_name | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | SPA_ADN |
| 61 | ri_profitability_group | | Varchar | 50 | | | RI Profitability group | | | | RIRE |
| 62 | portfolio_id | | Varchar | 50 | | | Insurance contract group (ICG) | | | | UNT_LNK-2022-ONRS |
| 63 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group (RCG) | | | | SPA_ADN-2022-RIRE |
| 64 | ri_commencement_date | | Date | | | | วันเริ่มสัญญา RI | | | | 2023-07-21 |
| 65 | treaty_code_1 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 1 | | | | THREL_UL |
| 66 | ri_method_1 | | Varchar | 50 | | | Method ของ RI 1 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | Surplus |
| 67 | ri_mode_of_payment_1 | | Numeric | 3 | | | โหมดการชำระ ของ RI 1 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 68 | ri_gross_premium_1 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 1 | | | | |
| 69 | ri_sum_assured_1 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 1 | | | | |
| 70 | ri_prev_net_amount_at_risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 1 | | | | |
| 71 | ri_current_net_amount_at_Risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 1 | | | | |
| 72 | treaty_code_2 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 2 | | | | THREL_UL |
| 73 | ri_method_2 | | Varchar | 50 | | | Method ของ RI 2 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | Surplus |
| 74 | ri_mode_of_payment_2 | | Numeric | 3 | | | โหมดการชำระ ของ RI 2 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 75 | ri_gross_premium_2 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 2 | | | | |
| 76 | ri_sum_assured_2 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 2 | | | | |
| 77 | ri_prev_net_amount_at_risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 2 | | | | |
| 78 | ri_current_net_amount_at_Risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 2 | | | | |
| 79 | treaty_code_3 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 3 | | | | THREL_UL |
| 80 | ri_method_3 | | Varchar | 50 | | | Method ของ RI 3 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | Surplus |
| 81 | ri_mode_of_payment_3 | | Numeric | 3 | | | โหมดการชำระ ของ RI 3 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 82 | ri_gross_premium_3 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 3 | | | | |
| 83 | ri_sum_assured_3 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 3 | | | | |
| 84 | ri_prev_net_amount_at_risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 3 | | | | |
| 85 | ri_current_net_amount_at_Risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 3 | | | | |
| 86 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 87 | as400_last_update_date | | Timestamp | | | not null | วันที่ Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 88 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 89 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 90 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 91 | update_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 92 | sub_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-Group** Level: ProphetPlan Code & Cohort & Profitability Group | | | | RP01-2022-REMC |
| 93 | sub_ri_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-RI Group** Level: Plan Code & **RI** Cohort & **RI** Profitability Group | | | | RP01-2022-REMC |
| 94 | emr_rate | | Numeric | 6,2 | | | emr rate | | | | |
| **(ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3)** | | | | | | | | | | | |
| 95 | customer_id | | Varchar | 10 --> 25 | | | รหัสลูกค้า | | | | |
| 96 | xml_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 97 | edw_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 98 | underwrite_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 99 | sale_agency_code | | Numeric –> Varchar | 8,0 –> 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | |
| 100 | current_agency_code | | Numeric –> Varchar | 8,0 –> 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 101 | occupation_name | | Varchar | 255 | | | อาชีพของลูกค้า | | | | |
| 102 | income | | Numeric | 22,217,0 | | | รายได้ต่อปีของลูกค้า | | | | |
| 103 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | | | | |
| 104 | source_sale_channel_code | | Varchar | 3 --> 50 | | | SalesChannelcode (ตามสาขาที่ขาย) | | | | |
| 105 | source_sale_channel | | Varchar | 255 --> 50 | | | SalesChannel (ตามสาขาที่ขาย) | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 106 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | B000089 |
| 107 | ri_status | | Varchar | 1 | | | ระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน | | | | Y |
| 108 | total_premium | | Numeric | 22,2 | | | เบี้ยรวมของ Standard + Extra ของกรมธรรม์หลัก | | | | 100000.00 |
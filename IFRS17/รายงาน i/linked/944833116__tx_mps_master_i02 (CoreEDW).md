# tx_mps_master_i02 (CoreEDW)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833116
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i02(CoreEDW)-TOC) ] [ [Convention](#tx_mps_master_i02(CoreEDW)-Convention) ] [ [Table : tx_mps_master_i02](#tx_mps_master_i02(CoreEDW)-Table:tx_mps_master_i02) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I02 (Table Master ฝั่ง CoreEDW)

## Table : tx_mps_master_i02

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i02_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | 9000552 |
| 4 | rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม | | | | 15 |
| 5 | prophet_rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติมในรูปแบบ Prophet | | | | OC98 |
| 6 | rider_initial_sum_insured | | Numeric | 12,2 | | | ทุนประกันเริ่มต้นของสัญญาเพิ่มเติม | | | | 100000.00 |
| 7 | rider_insured_issue_age | | Numeric | 3 | | | อายุเริ่มต้อนของผู้เอาประกันตอนซื้อ Rider (ปีแรก) หากกลับมาซื้อ Rider เดิมไม่เปลี่ยนวันที่ | | | | 30 |
| 8 | rider_payor_issue_age | | Numeric | 3 | | | อายุเริ่มต้อนของผู้ชำระเบี้ยตอนซื้อ Rider (ปีแรก) หากกลับมาซื้อ Rider เดิมไม่เปลี่ยนวันที่ | | | | 30 |
| 9 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 10 | payer_sex | | Varchar | 1 | | | เพศของผู้ชำระเบี้ย | | | | F |
| 11 | date_of_birth_insured | | Date | | | | วันเกิดผู้เอาประกัน | | | | 1997-11-17 |
| 12 | date_of_birth_payer | | Date | | | | วันเกิดผู้ชำระเบี้ย | | | | 1997-11-17 |
| 13 | med | | Varchar | 1 | | | ตรวจสุขภาพ | | | | Y |
| 14 | standard | | Varchar | 1 | | | Sub Standard Case | | | | N |
| 15 | ocp_class | | Numeric | 3 | | | ชั้นอาชีพ (ข้อมูลตามสัญญาหลัก) | | | | 1 |
| 16 | rider_mode_of_payment | | Numeric | 12,22 | | | โหมดการชำระ ณ. ปัจจุบัน ของสัญญาเพิ่มเติม (ข้อมูลตามสัญญาหลัก) | | | | 12 |
| 17 | rider_modal_premium | | Numeric | 12,2 | | | เบี้ยประกันรายโหมด ณ ปัจจุบัน สำหรับเบี้ยมาตรฐาน ของสัญญาเพิ่มเติม | | | | 1000.00 |
| 18 | rider_premium_term | | Numeric | 12,2 | | | ระยะเวลาชำระเบี้ย ของสัญญาเพิ่มเติม (กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง) | | | | 1.00 |
| 19 | rider_coverage_term | | Numeric | 12,2 | | | ระยะเวลาคุ้มครอง ของสัญญาเพิ่มเติม (กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง) | | | | 1.00 |
| 20 | premium_term | | Numeric | 12,2 | | | ระยะเวลาชำระเบี้ย ของสัญญาหลัก | | | | 1.00 |
| 21 | coverage_term | | Numeric | 12,2 | | | ระยะเวลาคุ้มครอง ของสัญญาหลัก | | | | 1.00 |
| 22 | basic_effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง ของสัญญาหลัก | | | | 1988-10-26 |
| 23 | basic_issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ ของสัญญาหลัก | | | | 1988-10-26 |
| 24 | rider_Effective_Date | | Date | | | | (วันที่เริ่มความคุ้มครอง) ของสัญญาเพิ่มเติม | | | | 1988-10-26 |
| 25 | rider_issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ ของสัญญาหลัก | | | | 1988-10-26 |
| 26 | SalesChannelsales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | AGT |
| 27 | SalesChannelcodesales_channel_code | | Varchar | 50 | | | 7 Numericdigit in AS400 | | | | 2072805 |
| 28 | rider_policy_month | | Numeric | 23 | | | อายุกรมธรรม์เป็นเดือน (Policy Month) ของสัญญาเพิ่มเติม | | | | 1 |
| 29 | current_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ ของสัญญาเพิ่มเติม | | | | I |
| 30 | previous_month_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของสัญญาเพิ่มเติม | | | | I |
| 31 | previous_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ก่อนหน้าของสัญญาเพิ่มเติม | | | | I |
| 32 | curr_rider_policy_status_date | | Date | | | | วันที่ชำระถึงของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 33 | previous_month_rider_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน ของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 34 | previous_rider_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) ของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 35 | current_basic_policy_status | | Varchar | 321 | | | สถานะกรมธรรม์ ของสัญญาหลัก | | | | I |
| 36 | previous_month_basic_policy_status | | Varchar | 321 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของสัญญาหลัก | | | | I |
| 37 | previous_basic_policy_status | | Varchar | 321 | | | สถานะกรมธรรม์ก่อนหน้าของสัญญาหลัก | | | | I |
| 38 | current_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็นสถานะปัจจุบันของสัญญาหลัก | | | | 2023-07-21 |
| 39 | previous_month_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน ของสัญญาหลัก | | | | 2023-07-21 |
| 40 | previous_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) ของสัญญาหลัก | | | | 2023-07-21 |
| 41 | rider_copay_client_claim_paid | | Numeric | 12,2 | | | กรมธรรม์ทำ Co-pay โดยระบุเป็น % ที่ลูกค้าต้องร่วมจ่ายค่าสินไหม (เฉพาะปีกรมธรรม์นั้นๆ) เช่น บริษัทจ่ายสินไหม 70% ลูกค้าจ่ายสินไหม 30% ดังนั้นต้องแสดงค่า 30% | | | | 0 |
| 42 | rider_copay_client_premium_discount | | Numeric | 12,2 | | | กธ.ทำ Co-pay โดยระบุเป็น % บริษัทลดเบี้ยให้ลูกค้า (เฉพาะปีกรมธรรม์นั้นๆ) เช่น บริษัทจ่าย 20% ลูกค้าจ่าย 80% ดังนั้นต้องแสดงค่า 20% | | | | 0 |
| 43 | rider_premium_experience_adjusted | | Numeric | 12,2 | | | กธ.มีการเพิ่มหรือลดเบี้ยตามประสบการณ์เดิมของลูกค้า ระบุเป็นเพิ่มเบี้ย (+) หรือลดเบี้ย (-) เป็น % ของเบี้ยเต็ม ตามประสบการณ์ที่ดีหรือแย่ ตั้งแต่ปีกธ.ที่ 2 เป็นต้นไป | | | | 0 |
| 44 | basic_maturity_date | | Date | | | | วันครบกำหนดสัญญาของสัญญาหลัก | | | | 2009-10-26 |
| 45 | prophet_plan_code | | Varchar | 50 | | | แบบประกันของสัญญาหลักในรูปแบบ Prophet | | | | OC98 |
| 46 | basic_policy_month | | Numeric | 3 | | | อายุกรมธรรม์เป็นเดือน (Policy Month) ของสัญญาหลัก | | | | 10 |
| 47 | basic_premium_term | | Numeric | 35,2 | | | ระยะชำระเบี้ยของสัญญาหลัก | | | | 1.00 |
| 48 | basic_initial_sum_insured | | Numeric | 16,412,2 | | | จำนวนเอาเงินประกันของสัญญาหลัก | | | | 100000.00 |
| 49 | basic_mode_of_payment | | Numeric | 2 | | | Mode of Payment ณ. ปัจจุบัน ของสัญญาหลัก | | | | 12 |
| 50 | basic_modal_premium | | Numeric | 16,412,2 | | | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐานของสัญญาหลัก | | | | 100000.00 |
| 51 | portfolio_name | | Varchar | 50 | | | IFRS17 Portfolio name | | | | ORD_END |
| 52 | profitability_group | | Varchar | 50 | | | Profitability group | | | | ONRS |
| 53 | ri_portfolio_name | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | ORD_MRN |
| 54 | ri_profitability_group | | Varchar | 50 | | | RI Profitability group | | | | RING |
| 55 | portfolio_id | | Varchar | 50 | | | Insurance contract group (ICG) | | | | ORD_END-2022-ONRS |
| 56 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group (RCG) | | | | ORD_MRN-2022-RING |
| 57 | ri_commencement_date | | Date | | | | วันเริ่มสัญญา RI | | | | 2023-07-21 |
| 58 | treaty_code_1 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 1 | | | | PLR_Ind_ORD |
| 59 | ri_method_1 | | Varchar | 50 | | | Method ของ RI 1 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 60 | ri_mode_of_payment_1 | | Numeric | 3 | | | โหมดการชำระ ของ RI 1 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 61 | ri_gross_premium_1 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 1 | | | | |
| 62 | ri_sum_assured_1 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 1 | | | | |
| 63 | ri_prev_net_amount_at_risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 1 | | | | |
| 64 | ri_current_net_amount_at_Risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 1 | | | | |
| 65 | treaty_code_2 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 2 | | | | |
| 66 | ri_method_2 | | Varchar | 50 | | | Method ของ RI 2 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 67 | ri_mode_of_payment_2 | | Numeric | 3 | | | โหมดการชำระ ของ RI 2 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 68 | ri_gross_premium_2 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 2 | | | | |
| 69 | ri_sum_assured_2 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 2 | | | | |
| 70 | ri_prev_net_amount_at_risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 2 | | | | |
| 71 | ri_current_net_amount_at_Risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 2 | | | | |
| 72 | treaty_code_3 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 3 | | | | |
| 73 | ri_method_3 | | Varchar | 50 | | | Method ของ RI 3 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 74 | ri_mode_of_payment_3 | | Numeric | 3 | | | โหมดการชำระ ของ RI 3 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 75 | ri_gross_premium_3 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 3 | | | | |
| 76 | ri_sum_assured_3 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 3 | | | | |
| 77 | ri_prev_net_amount_at_risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 3 | | | | |
| 78 | ri_current_net_amount_at_Risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 3 | | | | |
| 79 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-09-09 19:36:45 |
| 80 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-09-09 19:36:45 |
| 81 | create_datecreated_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 82 | create_bycreated_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 83 | update_dateupdated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 84 | update_byupdated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 85 | rider_claim_deductible | | Varchar | 20 | | | ความรับผิดส่วนแรก | | | | 0 |
| 86 | sub_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-Group** Level: ProphetPlan Code & Cohort & Profitability Group | | | | O098-2021-ONRS |
| 87 | policy_type | | Varchar | 10 | | | ประเภทกรมธรรม์ ORD/IND | | | | ORD |
| 88 | sub_ri_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-RI Group** Level: Plan Code & **RI** Cohort & **RI** Profitability Group | | | | O098-2021-ONRS |
| 89 | unhealth_benefit_name | | Varchar | 255 | | | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | CI01-CI02-CI03-CI04-CI05-CI06-CI07 |
| 90 | unhealth_benefit_paid | | Varchar | 255 | | | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | 001-000-102-002-110-000-010 |
| 91 | rider_maturity_date | | Date | | | | วันที่สิ้นสุดสัญญา | | | | 2023-07-01 |
| 92 | basic_insured_issue_age | | Numeric | 3 | | | อายุเริ่มต้อนของผู้เอาประกันตอนซื้อกธ.หลัก | | | | |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 93 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | 25672254368 |
| 94 | previous_rider_effective_date | | Date | | | | วันเริ่มสัญญาของสัญญาเพิ่มเติมรอบก่อนหน้า | | | | 29/05/2024 |
| 95 | xml_product_type | | Varchar | 100 | | | รายละเอียดของ XML Product Type | | | | ประกันชีวิตสามัญ - ชั่วระยะเวลา |
| 96 | edw_product_type | | Varchar | 100 | | | รายละเอียดของ EDW Product Type | | | | ORD-Term |
| 97 | underwrite_type | | Varchar | 100 | | | รายละเอียดของ Underwrite Type | | | | Full Underwriting |
| 98 | rider_extra_modal_premium | | Numeric | 12,2 | | | เบี้ย Extra ตามโหมดการชำระเบี้ย | | | | 750.00 |
| 99 | sale_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) (7 หลัก) | | | | 5411000 |
| 100 | current_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน (7 หลัก) | | | | 5411000 |
| 101 | occupation_name | | Varchar | 125 | | | อาชีพของลูกค้า | | | | เทคนิคการแพทย์ |
| 102 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | 50000.00 |
| 103 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น Yไม่สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น N | | | N |
| 104 | source_sale_channel_code | | Varchar | 50 | | | SalesChannelcode ตามสาขาที่ขายแรกเริ่ม | | | | 2072805 |
| 105 | source_sale_channel | | Varchar | 50 | | | SalesChannel ตามสาขาที่ขายแรกเริ่ม | | | | AGT |
| 106 | basic_policy_year | | Numeric | 3 | | | จำนวนปีกรมธรรม์ | | | | 1 |
| 107 | rider_policy_year | | Numeric | 3 | | | จำนวนปีกรมธรรม์ปัจจุบันของ Rider | | | | 1 |
| 108 | rider_pay_from | | Date | | | | วันเริ่มความคุ้มครองของปีกรมธรรม์ Rider นั้นๆ | | | | 29/05/2024 |
| 109 | rider_pay_to | | Date | | | | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์ Rider นั้นๆ | | | | 28/05/2028 |
| 110 | rider_ul_type | | Varchar | 4 | | | วิธีการชำระเงินของ rider เช่น PPR, UDR | | | | PPR |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 111 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | |
| 112 | ri_status | | Varchar | 1 | | | ระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน | | | | |
| 113 | rider_total_modal_premium | | Numeric | 12,2 | | | เบี้ยรวมของ Standard + Extra ของ Rider | | | | |
| 114 | total_premium | | Numeric | 12,2 | | | เบี้ยรวมของ Standard + Extra ของกรมธรรม์หลัก | | | | |
| 115 | payor_id | | Varchar | 25 | | | รหัสของผู้ชำระเบี้ย (รหัสนี้ใช้ตาม CISAD) เอาเฉพาะ PB กรณีอื่นเป็น Null หากผู้ชำระเบี้ยไม่ได้เป็นลูกค้า OLI ให้ใส่ Null | | | | |
| 116 | rider_copay_flag | | Varchar | 1 | | | สำหรับระบุ Y= กรมธรรม์นี้สามารถ CoPay N= กรมธรรม์นี้ไม่สามารถ CoPay สามารถอ้างอิงได้จากแบบประกันได้ (แบบประกัน version co-pay) | | | | |
| 117 | claim_accumulate | | Numeric | 12,2 | | | สินไหม Rider สะสมตลอดสัญญา (สำหรับแบบประกันที่จำเป็นในอนาคต) | | | | |
| 118 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...."เช่น อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง | | | | |
| 119 | sub_rider_plan | | Varchar | 200 | | | สำหรับระบุแผนย่อยของแบบประกัน (กรณีที่ทุนประกันอย่างเดียวไม่เพียงพอกับการแยกแบบประกันเช่น HSS แผน Platinum ทุน 100M มีแยกเป็น ไทย, เอเชีย, ทั่วโลก) | | | | |
| 120 | emr | | Numeric | 4 | | | Extra Mortality Rate Standdard = 0 50, 100, 150, 200 (สามารถหยิบได้จากกรมธรรม์หลัก) | | | | |
| 121 | rider_extra_premium_emr | | Numeric | 9,2 | | | ExtraPremium จากความเสี่ยงสุขภาพ | | | | |
| 122 | rider_extra_premium_ocpclass | | Numeric | 9,2 | | | ExtraPremium จากความเสี่ยงชั้นอาชีพ | | | | |
| **ปรับเพิ่มเติมจาก CA - สัญญาเพิ่มเติมคุ้มครองอุบัติเหตุ (CPA Extra) ประเภทสามัญ (Code Plan 83)_All Channel** | | | | | | | | | | | |
| 123 | rider_med_accident_premium | | Numeric | 14,2 | | | สำหรับบันทึกเบี้ยประกันมาตรฐาน(Standard) ของความคุ้มครองค่ารักษาพยาบาลจากอุบัติเหตุ | | | | |
| 124 | rider_extra_med_accident | | Numeric | 14,2 | | | สำหรับบันทึกเบี้ยประกันส่วนเพิ่ม(Extra) ของความคุ้มครองค่ารักษาพยาบาลจากอุบัติเหตุ | | | | |
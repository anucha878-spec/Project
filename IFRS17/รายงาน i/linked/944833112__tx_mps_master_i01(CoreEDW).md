# tx_mps_master_i01(CoreEDW)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833112
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i01(CoreEDW)-TOC) ] [ [Convention](#tx_mps_master_i01(CoreEDW)-Convention) ] [ [Table : tx_mps_master_i01](#tx_mps_master_i01(CoreEDW)-Table:tx_mps_master_i01) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I01 สามัญและอุตสาหกรรม (Table Master ฝั่ง CoreEDW)

## Table : tx_mps_master_i01

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i01_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | 1470411 |
| 4 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | C98 |
| 5 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ Prophet | | | | OC98 |
| 6 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเอาเงินประกัน | | | | 100000.00 |
| 7 | actual_sum_assured | | Numeric | 12,2 | | | มูลค่ากรมธรรม์ | | | | 100000.00 |
| 8 | eti_amount | | Numeric | 12,2 | | | เงินครบกำหนดสัญญาของ ETI | | | | 100000.00 |
| 9 | insured_date_of_birth | | Date | | | | วันเกิดผู้เอาประกัน | | | | 1997-11-17 |
| 10 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 11 | insured_issue_age | | Numeric | 3 | | | อายุของผู้เอาประกัน ณ. วันที่ซื้อ | | | | 30 |
| 12 | med | | Varchar | 1 | | | ตรวจสุขภาพ | | | | Y |
| 13 | standard | | Varchar | 1 | | | Sub Standard | | | | N |
| 14 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | 1 |
| 15 | mode_of_payment | | Numeric | 2 | | | โหมดการชำระ ณ. ปัจจุบัน | | | | 12 |
| 16 | modal_premium | | Numeric | 12,2 | | | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | 44690.00 |
| 17 | extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยเพิ่มพิเศษ ณ ปัจจุบัน | | | | 11220.00 |
| 18 | total_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยรวม = เบี้ยประกันรายโหมด + เบี้ยประกันภัยเพิ่มพิเศษ | | | | 55910.00 |
| 19 | premium_term | | Numeric | 5,2 | | | Premium term in year (กรณีแบบประกันจ่ายเบี้ย At age เช่น 85/60 จะต้องคำนวณ Premium term ตามระยะเวลาที่ชำระเบี้ย) | | | | 1.00 |
| 20 | coverage_term | | Numeric | 5,2 | | | Coverage term in year กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง | | | | 4.50 |
| 21 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 1988-10-26 |
| 22 | issue_date | | Date | | | | วันที่รับรู้กรมธรรม์ | | | | 1988-10-26 |
| 23 | maturity_date | | Date | | | | วันครบกำหนดสัญญา | | | | 2009-10-26 |
| 24 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี**EDW 5.1 Group 3**SalesChannel ตามสาขาที่ดูแลกรมธรรม์ | | | | AGT |
| 25 | sales_channel_code | | Varchar | 50 | | | 7 Numericdigit in AS400**EDW 5.1 Group 3**SalesChannelCode ตามสาขาที่ดูแลกรมธรรม์ | | | | 2072805 |
| 26 | policy_month | | Numeric | 3 | | | อายุกรมธรรม์เป็นเดือน | | | | 2 |
| 27 | current_basic_policy_status | | Varchar | 31 2 | | | สถานะกรมธรรม์ | | | | I |
| 28 | previous_month_basic_policy_status | | Varchar | 31 2 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ | | | | I |
| 29 | previous_basic_policy_status | | Varchar | 31 2 | | | สถานะกรมธรรม์ก่อนหน้า | | | | I |
| 30 | current_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2023-07-21 |
| 31 | previous_month_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน | | | | 2023-07-21 |
| 32 | previous_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) | | | | 2023-07-21 |
| 33 | mode_of_pension_payment | | Varchar | 2 1 | | | โหมดรับเงินบำนาญ | | | | 1 |
| 34 | tpd_premium | | Numeric | 12,2 | | | เบี้ยประกัน TPD Rider | | | | 0 |
| 35 | add_premium | | Numeric | 12,2 | | | เบี้ยประกัน ADD Rider | | | | 0 |
| 36 | ttd_premium | | Numeric | 12,2 | | | เบี้ยประกัน TTD Rider | | | | 0 |
| 37 | ame_premium | | Numeric | 12,2 | | | เบี้ยประกัน AME Rider | | | | 0 |
| 38 | tpd_sum_assured | | Numeric | 12,2 | | | ทุนประกัน TPD Rider | | | | 0 |
| 39 | add_sum_assured | | Numeric | 12,2 | | | ทุนประกัน ADD Rider | | | | 0 |
| 40 | ttd_sum_assured | | Numeric | 12,2 | | | ทุนประกัน TTD Rider | | | | 0 |
| 41 | ame_sum_assured | | Numeric | 12,2 | | | ทุนประกัน AME Rider | | | | 0 |
| 42 | loan_issue_date | | Date | | | | วันเริ่มสัญญาเงินกู้ (Policy Loan) | | | | 2023-07-21 |
| 43 | loan_principle_amount | | Numeric | 12,2 | | | จำนวนเงินต้น ของเงินกู้ตามกรมธรรม์ ณ สิ้นเดือน | | | | 0 |
| 44 | loan_interest_amount | | Numeric | 12,2 | | | จำนวนดอกเบี้ย ของเงินกู้ตามกรมธรรม์ ณ สิ้นเดือน | | | | 0 |
| 45 | loan_balance_amount | | Numeric | 12,2 | | | จำนวนเงินต้น + จำนวนดอกเบี้ย ของเงินกู้ตามกรมธรรม์ ณ สิ้นเดือน | | | | 0 |
| 46 | apl_issue_date | | Date | | | | วันที่เกิด APL | | | | 2023-07-21 |
| 47 | apl_principle_amount | | Numeric | 12,2 | | | จำนวนเงินต้น ของ APL ณ สิ้นเดือน | | | | 0 |
| 48 | apl_interest_amount | | Numeric | 12,2 | | | จำนวนดอกเบี้ย ของ APL ณ สิ้นเดือน | | | | 0 |
| 49 | apl_balance_amount | | Numeric | 12,2 | | | จำนวนเงินต้น + จำนวนดอกเบี้ย ของ APL ณ สิ้นเดือน | | | | 0 |
| 50 | loan_policy_month | | Numeric | 3 | | | จำนวนเดือนที่กู้ | | | | 0 |
| 51 | apl_policy_month | | Numeric | 3 | | | จำนวนเดือนที่ทำการ APL | | | | 0 |
| 52 | portfolio_name | | Varchar | 50 | | | IFRS17 Portfolio name | | | | ORD_END |
| 53 | profitability_group | | Varchar | 50 | | | Profitability group | | | | ONRS |
| 54 | ri_portfolio_name | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | ORD_MRN |
| 55 | ri_profitability_group | | Varchar | 50 | | | RI Profitability group | | | | RING |
| 56 | portfolio_id | | Varchar | 50 | | | Insurance contract group (ICG) | | | | ORD_END-2022-ONRS |
| 57 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group (RCG) | | | | ORD_MRN-2022-RING |
| 58 | ri_commencement_date | | Date | | | | วันเริ่มสัญญา RI | | | | 2023-07-21 |
| 59 | treaty_code_1 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 1 | | | | PLR_Ind_ORD |
| 60 | ri_method_1 | | Varchar | 50 | | | Method ของ RI 1 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 61 | ri_mode_of_payment_1 | | Numeric | 3 | | | โหมดการชำระ ของ RI 1 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 62 | ri_gross_premium_1 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 1 | | | | |
| 63 | ri_sum_assured_1 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 1 | | | | |
| 64 | ri_prev_net_amount_at_risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 1 | | | | |
| 65 | ri_current_net_amount_at_Risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 1 | | | | |
| 66 | treaty_code_2 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 2 | | | | |
| 67 | ri_method_2 | | Varchar | 50 | | | Method ของ RI 2 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 68 | ri_mode_of_payment_2 | | Numeric | 3 | | | โหมดการชำระ ของ RI 2 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 69 | ri_gross_premium_2 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 2 | | | | |
| 70 | ri_sum_assured_2 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 2 | | | | |
| 71 | ri_prev_net_amount_at_risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 2 | | | | |
| 72 | ri_current_net_amount_at_Risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 2 | | | | |
| 73 | treaty_code_3 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 3 | | | | |
| 74 | ri_method_3 | | Varchar | 50 | | | Method ของ RI 3 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 75 | ri_mode_of_payment_3 | | Numeric | 3 | | | โหมดการชำระ ของ RI 3 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 76 | ri_gross_premium_3 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 3 | | | | |
| 77 | ri_sum_assured_3 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 3 | | | | |
| 78 | ri_prev_net_amount_at_risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 3 | | | | |
| 79 | ri_current_net_amount_at_Risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 3 | | | | |
| 80 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-09-09 19:36:45 |
| 81 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-09-09 19:36:45 |
| 82 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 83 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 84 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 85 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 86 | policy_type | | Varchar | 10 | | | ประเภทกรมธรรม์ | สามัญ (ORD)Credit Life (MLTA,MRTA)บำนาญ (ANN) | | | ORD |
| 87 | ocp_code | | Numeric | 4 | | | รหัสอาชีพ | | | | 1000 |
| 88 | record_type | | Varchar | 50 | | | แยกประเภทกธ. จาก event ที่ขอ tagging | กรณีตั้งฐานบันทึก 'Transition'กรณี ongoing บันทึกเฉพาะตอน untagกรณี newcase บันทึก 'Newbusiness'กรณี reinstate แบบชำระย้อนหลัง บันทึก 'Reinstate'กรณี reinstate แบบต่อยกเว้น บันทึก 'Redate'กรณีไม่เข้าเงื่อนไขตามด้านบนบันทึก 'Other' | | | Transition |
| 89 | sub_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-Group** Level: ProphetPlan Code & Cohort & Profitability Group | | | | O098-2021-ONRS |
| 90 | sub_ri_group_id | | Varchar | 50 | | | การจัดกลุ่มแบบประกันตาม IFRS 17 Portfolio โดยจะทำการ Update ข้อมูลหลังจากทีมคณิตศาสตร์ได้ดำเนินการจัดทำ Initial Recognition และนำส่งข้อมูล ICG/RCG Tagging เรียบร้อยแล้ว IFRS17 **Sub-RI Group** Level: Plan Code & **RI** Cohort & **RI** Profitability Group | | | | O098-2021-ONRS |
| 91 | unhealth_benefit_name | | Varchar | 100 | | | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | CI01-CI02-CI03-CI04-CI05-CI06-CI07 |
| 92 | unhealth_benefit_paid | | Varchar | 100 | | | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | 001-000-102-002-110-000-010 |
| 93 | bundle_flag | | BooleanVarchar | | | | bundle flagTrue = กธ.หลักที่มี Bundle RiderFalse = กธ.หลักที่ไม่มี Bundle Rider | | | | True |
| **ปรับเพิ่มจากโครงการ EDW 5.1 Group 3** | | | | | | | | | | | |
| 94 | customer_id | | Varchar | 25 | | | รหัสของลูกค้าที่ระบบ CIS | | | | |
| 95 | previous_effective_date | | Date | | | | วันเริ่มสัญญาของสัญญาหลักรอบก่อนหน้า | | | | |
| 96 | xml_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 97 | edw_product_type | | Varchar | 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 98 | underwrite_type | | Varchar | 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 99 | sale_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) (7 หลัก) | | | | |
| 100 | current_agency_code | | Varchar | 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน (7 หลัก) | | | | |
| 101 | occupation_name | | Varchar | 125 | | | อาชีพของลูกค้า | | | | |
| 102 | income | | Numeric | 14,2 | | | รายได้ต่อปีของลูกค้า | | | | |
| 103 | smoke | | Varchar | 1 | | | สูบบุหรี่/ไม่สูบบุหรี่ | สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น Yไม่สูบบุหรี่ ให้ใส่ค่าในฟิลด์เป็น N | | | |
| 104 | source_sale_channel_code | | Varchar | 50 | | | SalesChannelcode ตามสาขาที่ขายแรกเริ่ม | | | | |
| 105 | source_sale_channel | | Varchar | 50 | | | SalesChannel ตามสาขาที่ขายแรกเริ่ม | | | | |
| 106 | policy_year | | Numeric | 3 | | | จำนวนปีกรมธรรม์ | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 107 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | B000089 |
| 108 | ri_status | | Varchar | 1 | | | ระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน | | | | Y |
| 109 | loan_branch_code | | Varchar | 7 | | | สาขาที่ให้บริการเงินกู้ครั้งล่าสุด (เฉพาะ PolicyLoan) | | | | 4610 |
| 110 | claim_accumulate | | Numeric | 12,2 | | | สินไหม Bundle Rider สะสมตลอดสัญญา (ปัจจุบันใช้ในแบบประกัน Better Life) | | | | |
| 111 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...." | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
| 112 | emr | | Numeric | 4 | | | Extra Mortality Rate | | | | 150 |
| 113 | extra_premium_emr | | Numeric | 12,2 | | | ExtraPremium จากความเสี่ยงสุขภาพ | | | | 11220 |
| 114 | extra_premium_ocpclass | | Numeric | 12,2 | | | ExtraPremium จากความเสี่ยงชั้นอาชีพ | | | | 0 |
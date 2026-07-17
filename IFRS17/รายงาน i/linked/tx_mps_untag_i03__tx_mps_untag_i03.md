# tx_mps_untag_i03

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i03
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_untag_i03-TOC) ] [ [Convention](#tx_mps_untag_i03-Convention) ] [ [Table : tx_mps_untag_i03](#tx_mps_untag_i03-Table:tx_mps_untag_i03) ]

## Convention

Description: ข้อมูล Transaction MPS Untag ของ I03

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS003-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933232906)

## Table : tx_mps_untag_i03

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_untag_i03_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_process_dt_id | FK | Numeric | 8 | | not null | [tx_mps_untag_detail](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_detail).mps_process_dt_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | MIC00001910 |
| 5 | policy_ref | | Varchar | 50 | | | เลขที่อ้างอิงกธ. (เลขที่ใบคำขอ) | | | | 0000001326 |
| 6 | first_policy | | Varchar | 50 | | | เลขที่กรมธรรม์เริ่มต้น | | | | MIC00001910 |
| 7 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | PA027 |
| 8 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ Prophet | | | | P027 |
| 9 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเงินเอาประกันภัยเริ่มต้น | | | | 100000.00 |
| 10 | actual_sum_insured | | Numeric | 12,2 | | | ทุนคุ้มครอง (ทุนประกันหลังที่เพิ่มตาม feature ของแบบประกัน) | | | | 100000.00 |
| 11 | issue_age | | Numeric | 3 | | | อายุเมื่อเริ่มทำประกัน | | | | 27 |
| 12 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 13 | med | | Varchar | 1 | | | เคสตรวจสุขภาพ / ไม่ตรวจสุขภาพ | | | | Y |
| 14 | standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | Y |
| 15 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | 1 |
| 16 | mode_of_payment | | Numeric | 2 | | | งวดการชำระเบี้ยประกันภัย | | | | 12 |
| 17 | modal_premium | | Numeric | 12,2 | | | เบี้ยรายโหมดล่าสุด | | | | 2800.00 |
| 18 | premium_term | | Numeric | 5,2 | | | ระยะเวลาชำระเบี้ยประกันภัย | | | | 1.00 |
| 19 | coverage_term | | Numeric | 5,2 | | | ระยะเวลาเอาประกันภัย | | | | 1.00 |
| 20 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 2022-03-08 |
| 21 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | 2022-03-08 |
| 22 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี (สาขาที่ดูแลกรมธรรม์) | | | | AGT |
| 23 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย (สาขาที่ดูแลกรมธรรม์) | | | | 2072805 |
| 24 | policy_month | | Numeric | 2 --> 3 | | | อายุกรมธรรม์เป็นเดือน | | | | 1 |
| 25 | policy_year | | Numeric | 2 | | | ปีกรมธรรม์ | | | | 1 |
| 26 | current_policy_status | | Varchar | 1 --> 3 | | | สถานะ | | | | I |
| 27 | prev_month_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ | | | | I |
| 28 | prev_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ก่อนหน้า | | | | I |
| 29 | curr_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2021-12-14 |
| 30 | prev_month_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน | | | | 2021-12-14 |
| 31 | prev_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) | | | | 2021-12-14 |
| 32 | sum_insured_add | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุทั่วไป | | | | 500000.00 |
| 33 | sum_insured_bon | | Numeric | 12,2 | | | ทุนประกัน ของ ผลประโยชน์กระดูกชิ้นใหญ่แตกหัก | | | | 15000.00 |
| 34 | sum_insured_dab | | Numeric | 12,2 | | | ทุนประกันของการชดเชยรายได้ระหว่างการเข้ารักษาตัวในโรงพยาบาล | | | | 500.00 |
| 35 | sum_insured_fur | | Numeric | 12,2 | | | ทุนประกันของค่าปลงศพ | | | | 10000.00 |
| 36 | sum_insured_hol | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุในวันหยุดนักขัตฤกษ์ | | | | 0 |
| 37 | sum_insured_mat | | Numeric | 12,2 | | | ทุนประกันของ Maturity มีเงินคืนตอนครบสัญญา | | | | 0 |
| 38 | sum_insured_med | | Numeric | 12,2 | | | ทุนประกันของการรักษาพยาบาลต่ออุบัติเหตุแต่ละครั้ง | | | | 50000.00 |
| 39 | sum_insured_mot | | Numeric | 12,2 | | | ทุนประกันของกรณีขับขี่หรือโดยสารรถจักรยานยนต์ | | | | 1000000.00 |
| 40 | sum_insured_mur | | Numeric | 12,2 | | | ทุนประกันของกรณีถูกฆาตกรรมหรือถูกทำร้ายร่างกายอุบัติเหตุทั่วไป | | | | 500000.00 |
| 41 | sum_insured_pub | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุสาธารณะ | | | | 0 |
| 42 | annual_premium_add | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุทั่วไป | | | | 1063.00 |
| 43 | annual_premium_bon | | Numeric | 12,2 | | | เบี้ยประกันของผลประโยชน์กระดูกชิ้นใหญ่แตกหัก | | | | 152.00 |
| 44 | annual_premium_dab | | Numeric | 12,2 | | | เบี้ยประกันของการชดเชยรายได้ระหว่างการเข้ารักษาตัวในโรงพยาบาล | | | | 352.00 |
| 45 | annual_premium_fur | | Numeric | 12,2 | | | เบี้ยประกันของค่าปลงศพ | | | | 128.00 |
| 46 | annual_premium_hol | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุในวันหยุดนักขัตฤกษ์ | | | | 0 |
| 47 | annual_premium_mat | | Numeric | 12,2 | | | เบี้ยประกันของ Maturity มีเงินคืนตอนครบสัญญา | | | | 0 |
| 48 | annual_premium_med | | Numeric | 12,2 | | | เบี้ยประกันของการรักษาพยาบาลต่ออุบัติเหตุแต่ละครั้ง | | | | 1518.00 |
| 49 | annual_premium_mot | | Numeric | 12,2 | | | เบี้ยประกันของกรณีขับขี่หรือโดยสารรถจักรยานยนต์ | | | | 500.00 |
| 50 | annual_premium_mur | | Numeric | 12,2 | | | เบี้ยประกันของกรณีถูกฆาตกรรมหรือถูกทำร้ายร่างกายอุบัติเหตุทั่วไป | | | | 187.00 |
| 51 | annual_premium_pub | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุสาธารณะ | | | | 0 |
| 52 | as400_last_update_date | | Date | | | | วันที่ AS400 Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 53 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 54 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 55 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 56 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 57 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 58 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 59 | ri_commencement_date | | Date | | | | วันเริ่มสัญญา RI | | | | 2023-07-21 |
| 60 | treaty_code_1 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 1 | | | | PLR_Ind_ORD |
| 61 | ri_method_1 | | Varchar | 50 | | | Method ของ RI 1 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 62 | ri_mode_of_payment_1 | | Numeric | 3 | | | โหมดการชำระ ของ RI 1 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 63 | ri_gross_premium_1 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 1 | | | | |
| 64 | ri_sum_assured_1 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 1 | | | | |
| 65 | ri_prev_net_amount_at_risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 1 | | | | |
| 66 | ri_current_net_amount_at_Risk_1 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 1 | | | | |
| 67 | treaty_code_2 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 2 | | | | |
| 68 | ri_method_2 | | Varchar | 50 | | | Method ของ RI 2 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 69 | ri_mode_of_payment_2 | | Numeric | 3 | | | โหมดการชำระ ของ RI 2 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 70 | ri_gross_premium_2 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 2 | | | | |
| 71 | ri_sum_assured_2 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 2 | | | | |
| 72 | ri_prev_net_amount_at_risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 2 | | | | |
| 73 | ri_current_net_amount_at_Risk_2 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 2 | | | | |
| 74 | treaty_code_3 | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ 3 | | | | |
| 75 | ri_method_3 | | Varchar | 50 | | | Method ของ RI 3 | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS-Surplus |
| 76 | ri_mode_of_payment_3 | | Numeric | 3 | | | โหมดการชำระ ของ RI 3 | 1 = รายเดือน3= ราย3เดือน6=ราย6เดือน12=ราย12เดือน | | | |
| 77 | ri_gross_premium_3 | | Numeric | 12,2 | | | เบี้ยประกันภัยที่ส่ง RI 3 | | | | |
| 78 | ri_sum_assured_3 | | Numeric | 12,2 | | | ทุนประกันภัยที่ส่ง RI 3 | | | | |
| 79 | ri_prev_net_amount_at_risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Previous) ของ RI 3 | | | | |
| 80 | ri_current_net_amount_at_Risk_3 | | Numeric | 12,2 | | | จำนวนเงินเสี่ยงภัยสุทธิ (Current) ของ RI 3 | | | | |
| 81 | portfolio_name | | Varchar | 50 | | | IFRS17 Portfolio name | | | | |
| 82 | profitability_group | | Varchar | 50 | | | Profitability group | | | | |
| 83 | ri_portfolio_name | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | |
| 84 | ri_profitability_group | | Varchar | 50 | | | RI Profitability group | | | | |
| 85 | portfolio_id | | Varchar | 50 | | | Insurance contract group (ICG) | | | | |
| 86 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group (RCG) | | | | |
| 87 | sum_insured_other | | VarcharNumeric | 25512,2 | | | ทุนประกัน ที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 88 | annual_premium_other | | VarcharNumeric | 25512,2 | | | เบี้ยประกัน ที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 89 | other_benefit_name | | Varchar | 25550 | | | ชื่อความคุ้มครองที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 90 | maturity_date | | Date | | | | วันที่สิ้นสุดสัญญา | | | | |
| **(ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3)** | | | | | | | | | | | |
| 91 | customer_id | | Varchar | 10 --> 25 | | | รหัสลูกค้า | | | | |
| 92 | xml_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 93 | edw_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 94 | underwrite_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 95 | sale_agency_code | | Numeric --> Varchar | 8,0 --> 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | |
| 96 | current_agency_code | | Numeric --> Varchar | 8,0 --> 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 97 | occupation_name | | Varchar | 255 | | | อาชีพของลูกค้า | | | | |
| 98 | income | | Numeric | 17,0 | | | รายได้ต่อปีของลูกค้า | | | | |
| 99 | source_sale_channel_code | | Varchar | 50 | | | SalesChannelcode (ตามสาขาที่ขาย) | | | | |
| 100 | source_sale_channel | | Varchar | 50 | | | SalesChannel (ตามสาขาที่ขาย) | | | | |
| 101 | pay_from | | Date | | | | วันเริ่มความคุ้มครองของปีกรมธรรม์ PA นั้นๆ | | | | |
| 102 | pay_to | | Date | | | | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์ PA นั้นๆ | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 103 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | B000089 |
| 104 | ri_status | | Varchar | 1 | | | ระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน | | | | Y |
| 105 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...." | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
| 106 | emr | | Numeric | 4 | | | Extra Mortality Rate | | | | 0 |
# tx_mps_landing_i03

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i03
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i03-TOC) ] [ [Convention](#tx_mps_landing_i03-Convention) ] [ [Table : tx_mps_landing_i03](#tx_mps_landing_i03-Table:tx_mps_landing_i03) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I03

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS003-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933232906)

## Table : tx_mps_landing_i03

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i03_id | PK | Numeric | 18 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 4 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | MIC00001910 |
| 6 | policy_ref | | Varchar | 50 | | | เลขที่อ้างอิงกธ. (เลขที่ใบคำขอ) | | | | 0000001326 |
| 7 | first_policy | | Varchar | 50 | | | เลขที่กรมธรรม์เริ่มต้น | | | | MIC00001910 |
| 6 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | PA043 |
| 7 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ Prophet | | | | |
| 8 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเงินเอาประกันภัยเริ่มต้น | | | | 100000.00 |
| 9 | actual_sum_insured | | Numeric | 12,2 | | | ทุนคุ้มครอง (ทุนประกันหลังที่เพิ่มตาม feature ของแบบประกัน) | | | | 100000.00 |
| 10 | issue_age | | Numeric | 3 | | | อายุเมื่อเริ่มทำประกัน | | | | 27 |
| 11 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 12 | med | | Varchar | 1 | | | เคสตรวจสุขภาพ / ไม่ตรวจสุขภาพ | | | | |
| 13 | standard | | Varchar | 1 | | | เคสปกติ / เคสภัยต่ำกว่ามาตรฐาน | | | | |
| 14 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | 1 |
| 15 | mode_of_payment | | Numeric | 2 | | | งวดการชำระเบี้ยประกันภัย | | | | 12 |
| 16 | modal_premium | | Numeric | 12,2 | | | เบี้ยรายโหมดล่าสุด | | | | 300 |
| 17 | extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยหลักสำหรับภัยต่ำกว่ามาตรฐาน | | | | |
| 18 | premium_term | | Numeric | 5,2 | | | ระยะเวลาชำระเบี้ยประกันภัย | | | | 1 |
| 19 | coverage_term | | Numeric | 5,2 | | | ระยะเวลาเอาประกันภัย | | | | 1 |
| 20 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 2022-03-08 |
| 21 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | 2022-03-08 |
| 22 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี (สาขาที่ดูแลกรมธรรม์) | | | | |
| 23 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย (สาขาที่ดูแลกรมธรรม์) | | | | 2071100 |
| 24 | policy_month | | Numeric | 2 | | | อายุกรมธรรม์เป็นเดือน | | | | |
| 25 | policy_year | | Numeric | 2 | | | ปีกรมธรรม์ | | | | 3 |
| 26 | current_policy_status | | Varchar | 1 --> 3 | | | สถานะ | | | | I |
| 27 | prev_month_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ | | | | |
| 28 | prev_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ก่อนหน้า | | | | |
| 29 | curr_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2021-12-14 |
| 30 | prev_month_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน | | | | |
| 31 | prev_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) | | | | |
| 32 | sum_insured_add | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุทั่วไป | | | | 500000.00 |
| 33 | sum_insured_bon | | Numeric | 12,2 | | | ทุนประกัน ของ ผลประโยชน์กระดูกชิ้นใหญ่แตกหัก | | | | 15000.00 |
| 34 | sum_insured_dab | | Numeric | 12,2 | | | ทุนประกันของการชดเชยรายได้ระหว่างการเข้ารักษาตัวในโรงพยาบาล | | | | 500.00 |
| 35 | sum_insured_fur | | Numeric | 12,2 | | | ทุนประกันของค่าปลงศพ | | | | 10000.00 |
| 36 | sum_insured_hol | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุในวันหยุดนักขัตฤกษ์ | | | | 0 |
| 37 | sum_insured_mat | | Numeric | 12,2 | | | ทุนประกันของ Maturity มีเงินคืนตอนครบสัญญา | | | | 0 |
| 38 | sum_insured_med | | Numeric | 12,2 | | | ทุนประกันของการรักษาพยาบาลต่ออุบัติเหตุแต่ละครั้ง | | | | 50000.00 |
| 38 | sum_insured_mot | | Numeric | 12,2 | | | ทุนประกันของกรณีขับขี่หรือโดยสารรถจักรยานยนต์ | | | | 1000000.00 |
| 39 | sum_insured_mur | | Numeric | 12,2 | | | ทุนประกันของกรณีถูกฆาตกรรมหรือถูกทำร้ายร่างกายอุบัติเหตุทั่วไป | | | | 500000.00 |
| 40 | sum_insured_pub | | Numeric | 12,2 | | | ทุนประกันของอุบัติเหตุสาธารณะ | | | | 0 |
| 41 | annual_premium_add | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุทั่วไป | | | | 1063.00 |
| 42 | annual_premium_bon | | Numeric | 12,2 | | | เบี้ยประกันของผลประโยชน์กระดูกชิ้นใหญ่แตกหัก | | | | 152.00 |
| 43 | annual_premium_dab | | Numeric | 12,2 | | | เบี้ยประกันของการชดเชยรายได้ระหว่างการเข้ารักษาตัวในโรงพยาบาล | | | | 352.00 |
| 44 | annual_premium_fur | | Numeric | 12,2 | | | เบี้ยประกันของค่าปลงศพ | | | | 128.00 |
| 45 | annual_premium_hol | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุในวันหยุดนักขัตฤกษ์ | | | | 0 |
| 46 | annual_premium_mat | | Numeric | 12,2 | | | เบี้ยประกันของ Maturity มีเงินคืนตอนครบสัญญา | | | | 0 |
| 47 | annual_premium_med | | Numeric | 12,2 | | | เบี้ยประกันของการรักษาพยาบาลต่ออุบัติเหตุแต่ละครั้ง | | | | 1518.00 |
| 48 | annual_premium_mot | | Numeric | 12,2 | | | เบี้ยประกันของกรณีขับขี่หรือโดยสารรถจักรยานยนต์ | | | | 500.00 |
| 49 | annual_premium_mur | | Numeric | 12,2 | | | เบี้ยประกันของกรณีถูกฆาตกรรมหรือถูกทำร้ายร่างกายอุบัติเหตุทั่วไป | | | | 187.00 |
| 50 | annual_premium_pub | | Numeric | 12,2 | | | เบี้ยประกันของอุบัติเหตุสาธารณะ | | | | 0 |
| 51 | as400_last_update_date | | Date | | | | วันที่ AS400 Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 52 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 53 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 54 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 55 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 56 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 57 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 58 | annual_premium_dab2 | | Numeric | 12,2 | | | เบี้ยประกันของเงินชดเชยรายวัน | | | | 0 |
| 59 | sum_insured_dab2 | | Numeric | 12,2 | | | ทุนประกันเบี้ยประกันของเงินชดเชยรายวัน | | | | |
| 60 | sum_insured_other | | VarcharNumeric | 25512,2 | | | ทุนประกัน ที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 61 | annual_premium_other | | VarcharNumeric | 25512,2 | | | เบี้ยประกัน ที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 62 | other_benefit_name | | Varchar | 25550 | | | ชื่อความคุ้มครองที่นอกเหนือจาก 10 ประเภทที่มีอยู่ในปัจจุบัน (ADD,BON,DAB,FUR,HOL,MAT,MED,MOT,MUR,PUB) | | | | |
| 63 | maturity_date | | Date | | | | วันที่สิ้นสุดสัญญา | | | | |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 1) | | | | | | | | | | | |
| 64 | death_in_process_flag | | Varchar | 1 | | | อยู่ในช่วงพิจารณาสินไหมเสียชีวิต | | | | Y |
| 65 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | 2024-02-26 |
| **(ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3)** | | | | | | | | | | | |
| 66 | customer_id | | Varchar | 10 --> 25 | | | รหัสลูกค้า | | | | |
| 67 | xml_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตาม OIC | | | | |
| 68 | edw_product_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันสำหรับ EDW | | | | |
| 69 | underwrite_type | | Varchar | 50 --> 100 | | | กลุ่มของแบบประกันตามการพิจารณารับประกัน | | | | |
| 70 | sale_agency_code | | Numeric --> Varchar | 8,0 --> 50 | | | รหัสตัวแทนที่ขายกรมธรรม์นี้ (จะไม่มีทางเปลี่ยน) | | | | |
| 71 | current_agency_code | | Numeric --> Varchar | 8,0 --> 50 | | | รหัสตัวแทนที่ดูแลกรมธรรม์ในปัจจุบัน | | | | |
| 72 | occupation_name | | Varchar | 255 | | | อาชีพของลูกค้า | | | | |
| 73 | income | | Numeric | 17,0 | | | รายได้ต่อปีของลูกค้า | | | | |
| 74 | pay_from | | Date | | | | วันเริ่มความคุ้มครองของปีกรมธรรม์ PA นั้นๆ | | | | |
| 75 | pay_to | | Date | | | | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์ PA นั้นๆ | | | | |
| 74 | stepup_rate | | Numeric | 12,2 | | | อัตราเพิ่มทุนคุ้มครอง (ทุนประกันหลังที่เพิ่มตาม feature ของแบบประกัน) | | | | |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 75 | partner_code | | Varchar | 10 | | | รหัสคู่ค้า (ปัจจุบันจะมีเฉพาะ Credit Life) | | | | B000089 |
| 76 | error_remark | | Varchar | 200 | | | ใช้ระบุ error ของกรมธรรม์ที่ operation ไม่สามารถแแก้ไข จัดเก็บเป็น "Description1_Description2_Description3_ ...." | | | | อายุไม่ถูกต้อง_วันเกิดเดิมไม่ถูกต้อง |
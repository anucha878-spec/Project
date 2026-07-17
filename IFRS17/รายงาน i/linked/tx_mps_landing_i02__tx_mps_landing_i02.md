# tx_mps_landing_i02

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i02-TOC) ] [ [Convention](#tx_mps_landing_i02-Convention) ] [ [Table : tx_mps_landing_i02](#tx_mps_landing_i02-Table:tx_mps_landing_i02) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I02

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS001-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933233265)

## Table : tx_mps_landing_i02

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i02_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | 9000552 |
| 5 | rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม | | | | 15 |
| 6 | rider_initial_sum_insured | | Numeric | 12,2 | | | ทุนประกันเริ่มต้นของสัญญาเพิ่มเติม | | | | 185 |
| 7 | payer_sex | | Varchar | 1 | | | เพศของผู้ชำระเบี้ย | | | | ญ |
| 8 | date_of_birth_payer | | Date | | | | วันเกิดผู้ชำระเบี้ย | | | | 1964-07-30 |
| 9 | standard | | Numeric | 12,2 | | | Sub Standard Case | | | | 0 |
| 10 | ocp_class | | Numeric | 3 | | | ชั้นอาชีพ (ข้อมูลตามสัญญาหลัก) | | | | 0 |
| 11 | ocp_code | | Numeric | 4 | | | รหัสอาชีพของผู้ชำระเบี้ย PB | | | | 0 |
| 12 | rider_maturity_date | | Date | | | | วันที่ครบกำหนดสัญญาของสัญญาเพิ่มเติม | | | | 2037-07-02 |
| 13 | rider_modal_premium | | Numeric | 12,2 | | | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน (เบี้ยปกติ + เบี้ย Extra) | | | | 750.00 |
| 14 | rider_premium_term | | Numeric | 12,2 | | | Premium term in year ของสัญญาเพิ่มเติม | | | | 0 |
| 15 | rider_coverage_term | | Numeric | 12,2 | | | ระยะเวลาคุ้มครอง ของสัญญาเพิ่มเติม (กรณีแบบประกันคุ้มครอง At age เช่น 90/x จะต้องคำนวณ Coverage term ตามระยะเวลาที่คุ้มครอง) | | | | 0 |
| 16 | rider_effective_date | | Date | | | | (วันที่เริ่มความคุ้มครอง) ของสัญญาเพิ่มเติม | | | | 1991-07-02 |
| 17 | curr_rider_policy_status_date | | Date | | | | วันที่ชำระถึงของสัญญาเพิ่มเติม | | | | 2023-07-01 |
| 18 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 19 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 20 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-08-31 16:37:16 |
| 21 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 22 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 23 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 24 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 25 | rider_group | | Varchar | 8 | | | ประเภทของ rider | | | | TTD |
| 26 | rider_claim_deductible | | Varchar | 20 | | | ความรับผิดส่วนแรก | | | | 20000 |
| 27 | unhealth_benefit_name | | Varchar | 255100 | | | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | CI01-CI02-CI03-CI04-CI05-CI06-CI07 |
| 28 | unhealth_benefit_paid code | | Varchar | 255100 | | | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | 001-000-102-002-110-000-010 |
| 29 | bundle_rider_flag | | Varchar | 1 | | | 'Y' คือ Bundle Rider'N' คือ Optional Rider | | | | Y |
| 30 | rider_premium | | Numeric | 12,2 | | | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน(เพิ่มใหม่ รองรับเคส Bundle Rider Sum เบี้ยใน I01 เนื่องจากต้องแยกระหว่าง เบี้ยปกติ และเบี้ย Extra) | | | | 750.00 |
| 31 | rider_extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยเพิ่มพิเศษ ณ ปัจจุบัน(เพิ่มใหม่ รองรับเคส Bundle Rider Sum เบี้ยใน I01 เนื่องจากต้องแยกระหว่าง เบี้ยปกติ และเบี้ย Extra) | | | | 750.00 |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 32 | xml_product_type | | Varchar | 100 | | | รายละเอียดของ XML Product Type | | | | ประกันชีวิตสามัญ - ชั่วระยะเวลา |
| 33 | edw_product_type | | Varchar | 100 | | | รายละเอียดของ EDW Product Type | | | | ORD-Term |
| 34 | underwrite_type | | Varchar | 100 | | | รายละเอียดของ Underwrite Type | | | | Full Underwriting |
| 35 | curr_rider_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยตามโหมดการชำระเบี้ย และอายุ ณ ปัจจุบัน | | | | 750.00 |
| 36 | curr_rider_extra_premium | | Numeric | 12,2 | | | เบี้ยประกันภัยเพิ่มพิเศษตามโหมดการชำระเบี้ย และอายุ ณ ปัจจุบัน | | | | 750.00 |
| 37 | curr_rider_effective_date | | Date | | | | วันที่เริ่มสัญญาของ rider ล่าสุด | | | | 1991-07-02 |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 38 | payor_id | | Varchar | 25 | | | รหัสของผู้ชำระเบี้ย (รหัสนี้ใช้ตาม CISAD) เอาเฉพาะ PB กรณีอื่นเป็น Null หากผู้ชำระเบี้ยไม่ได้เป็นลูกค้า OLI ให้ใส่ Null | | | | 25682255953 |
| 39 | rider_copay_flag | | Varchar | 1 | | | Fax สำหรับระบุ Y= กรมธรรม์นี้สามารถ CoPay N= กรมธรรม์นี้ไม่สามารถ CoPay สามารถอ้างอิงได้จากแบบประกันได้ (แบบประกัน version co-pay) | | | | Y |
| 40 | rider_extra_premium_emr | | Numeric | 9,2 | | | ExtraPremium จากความเสี่ยงสุขภาพ | | | | 1935282.59 |
| 41 | rider_extra_premium_ocpclass | | Numeric | 9,2 | | | ExtraPremium จากความเสี่ยงชั้นอาชีพ | | | | 1935282.59 |
| 42 | sub_plan | | Varchar | 50 | | | แผนย่อยของแบบประกัน จาก as400 | | | | HSS25KW |
| 43 | sub_rider_plan | | Varchar | 50 | | | แผนย่อยของแบบประกัน จาก psuiteสำหรับระบุแผนย่อยของแบบประกัน (กรณีที่ทุนประกันอย่างเดียวไม่เพียงพอกับการแยกแบบประกันเช่น HSS แผน Platinum ทุน 100M มีแยกเป็น ไทย, เอเชีย, ทั่วโลก)THAsiaWWNUS | | | | WWNUS |
| **ปรับเพิ่มเติมจาก CA - สัญญาเพิ่มเติมคุ้มครองอุบัติเหตุ (CPA Extra) ประเภทสามัญ (Code Plan 83)_All Channel** | | | | | | | | | | | |
| 44 | rider_med_accident_premium | | Numeric | 14,2 | | | สำหรับบันทึกเบี้ยประกันมาตรฐาน(Standard) ของความคุ้มครองค่ารักษาพยาบาลจากอุบัติเหตุ | | | | |
| **ปรับเพิ่มเติมจาก UR 20260075 - ปรับปรุงข้อมูลสำหรับ Rider ที่สามารถ WP ได้** | | | | | | | | | | | |
| 45 | rider_as400_status | | Varchar | 1 | | | สถานะ Rider จาก AS400 | | | | |
| 46 | rider_coverage_date | | Date | | | | วันที่คุ้มครองถึงของ Rider | | | | |
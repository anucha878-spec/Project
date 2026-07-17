# tx_mps_landing_i04_oic

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i04_oic-TOC) ] [ [Convention](#tx_mps_landing_i04_oic-Convention) ] [ [Table : tx_mps_landing_i04_oic](#tx_mps_landing_i04_oic-Table:tx_mps_landing_i04_oic) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I04 สำหรับ New Closing OIC

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830)

## Table : tx_mps_landing_i04_oic

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | landing_i04_oic_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | UL00000001 |
| 5 | plan_code | | Varchar | 50 | | | แบบประกัน | | | | UL002 |
| 6 | initial_sum_insured | | Numeric | 22,2 | | | จำนวนเงินเอาประกันภัยเริ่มต้น | | | | 120000.00 |
| 7 | actual_sum_assured | | Numeric | 22,2 | | | จำนวนเงินเอาประกันภัยปัจจุบัน | | | | 120000.00 |
| 8 | issue_age | | Numeric | 3 | | | อายุเมื่อเริ่มทำประกัน | | | | 29 |
| 9 | insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | F |
| 10 | ocp_class | | Numeric | 4 | | | ชั้นอาชีพ | | | | 1 |
| 11 | mode_of_payment | | Numeric | 3 | | | งวดการชำระเบี้ยประกันภัย | | | | 111 |
| 12 | modal_premium | | Numeric | 22,2 | | | เบี้ยรายโหมดล่าสุด | | | | 100000.00 |
| 13 | extra_premium | | Numeric | 22,2 | | | เบี้ยประกันภัยหลักสำหรับภัยต่ำกว่ามาตรฐาน | | | | 0 |
| 14 | premium_term | | Numeric | 22,2 | | | ระยะเวลาชำระเบี้ยประกันภัย | | | | 1 |
| 15 | coverage_term | | Numeric | 22,2 | | | ระยะเวลาเอาประกันภัย | | | | 70 |
| 16 | effective_date | | Date | | | | วันที่เริ่มความคุ้มครอง | | | | 2020-03-09 |
| 17 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย | | | | 2073000 |
| 18 | topup_premium_paid | | Numeric | 22,2 | | | เบี้ย Topup | | | | 0 |
| 19 | topup_premium_accum | | Numeric | 22,2 | | | เบี้ย Topup สะสม | | | | 10000.00 |
| 20 | emr_rate | | Numeric | 6,2 | | | emr rate | | | | 50 |
| 21 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 22 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 23 | last_update_date | | Timestamp | | | not null | วันที่ Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 24 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 25 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 26 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 27 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 28 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | 2020-03-09 |
| 29 | current_policy_status | | Varchar | 3 | | | สถานะกรมธรรม์ปัจจุบันของ UL ณ สิ้นเดือน | | | | I |
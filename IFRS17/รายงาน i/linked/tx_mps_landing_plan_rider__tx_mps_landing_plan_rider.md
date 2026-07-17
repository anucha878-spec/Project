# tx_mps_landing_plan_rider

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_plan_rider
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_plan_rider-TOC) ] [ [Convention](#tx_mps_landing_plan_rider-Convention) ] [ [Table : tx_mps_landing_plan_rider](#tx_mps_landing_plan_rider-Table:tx_mps_landing_plan_rider) ]

## Convention

Description: ข้อมูลชื่อแผนสุขภาพของ Rider Health ที่ Psuite

## Table : tx_mps_landing_plan_rider

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_plan_rider_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202207 |
| 4 | coverage_rider_code | | Varchar | 50 | | | รหัสแผนความคุ้มครองสัญญาเพิ่มเติมHSS25KHSS25KAHSS25KW | | | | | HSS25KW |
| 5 | plan_sum_insure | | Numeric | 14,2 | | | จำนวนเงินเอาประกันตามแผน | | | | | 100000000.00 |
| 6 | plan_sum_insure_name | | Varchar | 255 | | | ชื่อแผนความคุ้มครองHSS25000(TH)HSS25000(Asia)HSS25000(WWNUS) | | | | | HSS25000(WWNUS) |
| 7 | sub_rider_plan | | Varchar | 50 | | | สำหรับระบุแผนย่อยของแบบประกัน (กรณีที่ทุนประกันอย่างเดียวไม่เพียงพอกับการแยกแบบประกันเช่น HSS แผน Platinum ทุน 100M มีแยกเป็น ไทย, เอเชีย, ทั่วโลก)THAsiaWWNUS | | | | | WWNUS |
| 8 | rider_code | | Varchar | 4 | | | รหัสสัญญาเพิ่มเติม7180 | | | | | 80 |
| 9 | rider_name | | Varchar | 255 | | | ชื่อสัญญาเพิ่มเติม | | | | | คุ้มครองสุขภาพ ซูพรีม เฮลท์ (Supreme Health) |
| 10 | rider_short_name | | Varchar | 255 | | | ชื่อย่อสัญญาเพิ่มเติม | | | | | HSS |
| 11 | err_message | | Varchar | 500 | | | Error Message | | | | | |
| 12 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | | 2022-09-09 19:36:45 |
| 13 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-09-09 19:36:45 |
| 14 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 15 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-09-09 19:36:45 |
| 16 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
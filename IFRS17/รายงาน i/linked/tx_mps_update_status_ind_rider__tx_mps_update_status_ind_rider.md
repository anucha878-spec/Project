# tx_mps_update_status_ind_rider

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_status_ind_rider
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_update_status_ind_rider-TOC) ] [ [Convention](#tx_mps_update_status_ind_rider-Convention) ] [ [Table : tx_mps_update_status_ind_rider](#tx_mps_update_status_ind_rider-Table:tx_mps_update_status_ind_rider) ]

## Convention

Description:

## Table : tx_mps_update_status_ind_rider

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_update_status_ind_rider_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | | 0580396 |
| 5 | rider_status | | Varchar | 1 | | | สถานะ Riderบันทึกเฉพาะอุตสาหกรรม | | | | | 1 |
| 6 | rider_mode_of_payment | | Numeric | 2 | | | โหมดการชำระเบี้ย (1-12)บันทึกเฉพาะอุตสาหกรรม | | | | | 1 |
| 7 | max_age_reinstate | | Numeric | 3 | 0 | | อายุสูงสุดที่สามารถต่อสัญญาได้ | | | | | 99 |
| 8 | rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม | | | | | 19 |
| 9 | rider_initial_sum_insured | | Numeric | 12,2 | | | ทุนประกันเริ่มต้นของสัญญาเพิ่มเติม | | | | | 100000.00 |
| 10 | rider_modal_premium | | Numeric | 12,2 | | | Premium by Mode ณ. ปัจจุบัน เฉพาะเบี้ยมาตราฐาน | | | | | 7090.00 |
| 11 | standard | | Numeric | 12,2 | | | Sub Standard Case | | | | | 0 |
| 12 | rider_effective_date | | Date | | | | (วันที่เริ่มความคุ้มครอง) ของสัญญาเพิ่มเติม | | | | | 2010-09-13 |
| 13 | rider_maturity_date | | Date | | | | วันที่ครบกำหนดสัญญาของสัญญาเพิ่มเติม | | | | | 2020-09-13 |
| 14 | curr_rider_policy_status_date | | Date | | | | วันที่ชำระถึงของสัญญาเพิ่มเติม | | | | | 2022-09-12 |
| 15 | err_message | | Varchar | 500 | | | Error Message | | | | | |
| 16 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | | 2022-08-31 02:04:46 |
| 17 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | | 2022-08-31 02:04:46 |
| 18 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-08-31 02:04:46 |
| 19 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 20 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-08-31 02:04:46 |
| 21 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
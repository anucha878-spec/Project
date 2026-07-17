# tx_mps_master_i01_backup

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01_backup
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i01_backup-TOC) ] [ [Convention](#tx_mps_master_i01_backup-Convention) ] [ [Table : tx_mps_master_i01_backup](#tx_mps_master_i01_backup-Table:tx_mps_master_i01_backup) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I01 สามัญและอุตสาหกรรม Backup

## Table : tx_mps_master_i01_backup

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i01_backup_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | 1470411 |
| 4 | initial_sum_insured | | Numeric | 12,2 | | | จำนวนเอาเงินประกัน | | | | 100000.00 |
| 5 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | AGT |
| 6 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย | | | | 2072805 |
| 7 | current_basic_policy_status | | Varchar | 1 2 | | | สถานะกรมธรรม์ | | | | I |
| 8 | previous_month_basic_policy_status | | Varchar | 1 2 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ | | | | I |
| 9 | previous_basic_policy_status | | Varchar | 1 2 | | | สถานะกรมธรรม์ก่อนหน้า | | | | I |
| 10 | current_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2023-07-21 |
| 11 | previous_month_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน | | | | 2023-07-21 |
| 12 | previous_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) | | | | 2023-07-21 |
| 13 | loan_issue_date | | Date | | | | วันเริ่มสัญญาเงินกู้ (Policy Loan) | | | | 2023-07-21 |
| 14 | loan_balance_amount | | Numeric | 12,2 | | | จำนวนเงินต้น + จำนวนดอกเบี้ย ของเงินกู้ตามกรมธรรม์ ณ สิ้นเดือน | | | | 0 |
| 15 | apl_issue_date | | Date | | | | วันที่เกิด APL | | | | 2023-07-21 |
| 16 | apl_balance_amount | | Numeric | 12,2 | | | จำนวนเงินต้น + จำนวนดอกเบี้ย ของ APL ณ สิ้นเดือน | | | | 0 |
| 17 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-09-09 19:36:45 |
| 18 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 19 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 20 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 21 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
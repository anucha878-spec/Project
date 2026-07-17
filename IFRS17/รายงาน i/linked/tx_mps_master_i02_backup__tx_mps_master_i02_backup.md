# tx_mps_master_i02_backup

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02_backup
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i02_backup-TOC) ] [ [Convention](#tx_mps_master_i02_backup-Convention) ] [ [Table : tx_mps_master_i02_backup](#tx_mps_master_i02_backup-Table:tx_mps_master_i02_backup) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I02 Backup

## Table : tx_mps_master_i02_backup

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i02_backup_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | 9000552 |
| 4 | rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม | | | | 15 |
| 5 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | AGT |
| 6 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย | | | | 2072805 |
| 7 | current_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ ของสัญญาเพิ่มเติม | | | | I |
| 8 | previous_month_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของสัญญาเพิ่มเติม | | | | I |
| 9 | previous_rider_policy_status | | Varchar | 101 | | | สถานะกรมธรรม์ก่อนหน้าของสัญญาเพิ่มเติม | | | | I |
| 10 | curr_rider_policy_status_date | | Date | | | | วันที่ชำระถึงของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 11 | previous_month_rider_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน ของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 12 | previous_rider_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) ของสัญญาเพิ่มเติม | | | | 2023-07-21 |
| 13 | current_basic_policy_status | | Varchar | 21 | | | สถานะกรมธรรม์ ของสัญญาหลัก | | | | I |
| 14 | previous_month_basic_policy_status | | Varchar | 21 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของสัญญาหลัก | | | | I |
| 15 | previous_basic_policy_status | | Varchar | 21 | | | สถานะกรมธรรม์ก่อนหน้าของสัญญาหลัก | | | | I |
| 16 | current_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็นสถานะปัจจุบันของสัญญาหลัก | | | | 2023-07-21 |
| 17 | previous_month_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน ของสัญญาหลัก | | | | 2023-07-21 |
| 18 | previous_basic_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) ของสัญญาหลัก | | | | 2023-07-21 |
| 19 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-09-09 19:36:45 |
| 20 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 21 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 22 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 23 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
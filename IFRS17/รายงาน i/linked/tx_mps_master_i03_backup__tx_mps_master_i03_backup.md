# tx_mps_master_i03_backup

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i03_backup
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i03_backup-TOC) ] [ [Convention](#tx_mps_master_i03_backup-Convention) ] [ [Table : tx_mps_master_i03_backup](#tx_mps_master_i03_backup-Table:tx_mps_master_i03_backup) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I03 Backup

## Table : tx_mps_master_i03_backup

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i03_backup_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | MIC00001910 |
| 4 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | AGT |
| 5 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางขาย | | | | 2072805 |
| 6 | current_policy_status | | Varchar | 1 --> 3 | | | สถานะ | | | | I |
| 7 | prev_month_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ | | | | I |
| 8 | prev_policy_status | | Varchar | 1 --> 3 | | | สถานะกรมธรรม์ก่อนหน้า | | | | I |
| 9 | curr_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะปัจจุบัน | | | | 2021-12-14 |
| 10 | prev_month_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะ ณ สิ้นเดือนก่อน | | | | 2021-12-14 |
| 11 | prev_policy_status_date | | Date | | | | วันที่เปลี่ยนเป็น สถานะก่อนหน้า (System Date ที่ ปรับสถานะ) | | | | 2021-12-14 |
| 12 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 13 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 14 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 15 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 16 | update_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
# tx_mps_process_header

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_header
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_process_header-TOC) ] [ [Convention](#tx_mps_process_header-Convention) ] [ [Table : tx_mps_process_header](#tx_mps_process_header-Table:tx_mps_process_header) ]

## Convention

Description: ข้อมูล Transaction MPS Process Header

## Table : tx_mps_process_header

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_process_hd_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | group_type_id | FK | Numeric | 4 | | not null | [ms_mps_group_type](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_group_type).group_type_id | | | | 1 |
| 3 | mps_process_status_id | FK | Numeric | 4 | | not null | [ms_mps_process_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_process_status).mps_process_status_id | | | | 1 |
| 4 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 5 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 6 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 7 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 8 | created_date | | Timestamp | | | not null | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 9 | period | | Varchar | 6 | | | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 10 | shared_drive_folder | | Varchar | 6 | | | ชื่อ folder ใน shared drive ที่ระบบทำการวางไฟล์ | | | | 202207 |
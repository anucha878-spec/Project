# tx_mps_master_detail

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_detail
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_detail-TOC) ] [ [Convention](#tx_mps_master_detail-Convention) ] [ [Table : tx_mps_master_detail](#tx_mps_master_detail-Table:tx_mps_master_detail) ]

## Convention

Description: ข้อมูล Transaction MPS Process Detail

## Table : tx_mps_master_detail

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_dt_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_process_hd_id | FK | Numeric | 8 | | not null | [tx_mps_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_header).mps_process_hd_id | | | | 1 |
| 3 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 4 | ms_export_status_id | FK | Numeric | 4 | | not null | [ms_mps_export_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_export_status).ms_import_status_id | | | | 1 |
| 5 | period | | Numeric | 4 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 6 | sum_amount | | Numeric | 8 | | | จำนวนรวมของกรมธรรม์ | | | | 1000 |
| 7 | remark | | Varchar | 500 | | | หมายเหตุ | | | | |
| 8 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 9 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 10 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 11 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 12 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 13 | master_name | | Varchar | 4 | | | I01, I02, I03, I04, I05 | | | | I01 |
| 14 | process_step | | | | | | dev ใช้สำหรับอัพเดท progress bar | | | | |
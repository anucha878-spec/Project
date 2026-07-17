# tx_mps_import_icg

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_import_icg
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_import_icg-TOC) ] [ [Convention](#tx_mps_import_icg-Convention) ] [ [Table : tx_mps_import_icg](#tx_mps_import_icg-Table:tx_mps_import_icg) ]

## Convention

Description: ข้อมูล Transaction MPS Import ICG Tagging

## Table : tx_mps_import_icg

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_import_icg_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_process_hd_id | FK | Numeric | 8 | | not null | [tx_mps_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_header).mps_process_hd_id | | | | 1 |
| 3 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 4 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | | | 1 |
| 5 | sum_amount | | Numeric | 8 | | | จำนวนรายการที่นำเข้าทั้งหมด | | | | 100 |
| 6 | imp_file_name | | Varchar | 500 | | | ชื่อไฟล์นำเข้าสำเร็จ | | | | 202207_ICG_tagging_for_GMM_VFA |
| 7 | imp_file_available | | Boolean | | | not null | ไฟล์พร้อมใช้งานใช่หรือไม่ | True = ใช่False = ไม่ใช่ | | | True |
| 8 | err_file_name | | Varchar | 500 | | | ชื่อไฟล์นำเข้าไม่สำเร็จ | | | | 202207_ICG_tagging_for_GMM_VFA |
| 9 | err_file_available | | Boolean | | | not null | ไฟล์นำเข้าไม่สำเร็จใช่หรือไม่ | True = ใช่False = ไม่ใช่ | | | True |
| 10 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 11 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 12 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 13 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 14 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 15 | remark | | Varchar | 500 | | | หมายเหตุ | | | | |
| 16 | tagging_name | | Varchar | 8 | | not null | ICG, RCG, ICGRCG | | | | ICG |
| เพิ่มจากโครงการ EDW 5.1 Lot 1 by ariya.pi | | | | | | | | | | | |
| 17 | expected_amount | | Numeric | 8 | | | จำนวนรายการที่ต้องนำเข้าทั้งหมด | | | | 100 |
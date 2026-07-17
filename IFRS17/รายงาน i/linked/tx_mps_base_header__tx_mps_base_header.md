# tx_mps_base_header

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_base_header-TOC) ] [ [Convention](#tx_mps_base_header-Convention) ] [ [Table : tx_mps_base_header](#tx_mps_base_header-Table:tx_mps_base_header) ]

## Convention

Description: ข้อมูล Transaction MPS Base Header

## Table : tx_mps_base_header

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_base_hd_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 3 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | | | 1 |
| 4 | sum_amount | | Numeric | 8 | | | จำนวนรวมของกรมธรรม์ | | | | 1000 |
| 5 | period | | Varchar | 6 | | | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 6 | remark | | Varchar | 500 | | | หมายเหตุ | | | | |
| 7 | base_setup_flag | | Boolean | | | | เป็นตั้งฐานหรือไม่ | True = ตั้งฐานFalse = On going | | | True |
| 8 | transaction_date | | Timestamp | | | not null | วันที่ดำเนินการ | | | | 2022-08-29 16:36:06 |
| 9 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการล่าสุด | | | | boss |
| 10 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-29 16:36:06 |
| 11 | created_by | | Varchar | 50 | | not null | ผุ้สร้างรายการ | | | | boss |
| 12 | created_date | | Timestamp | | | not null | วันที่สร้างรายการ | | | | 2022-08-29 16:36:06 |
| 13 | coi_flag | | boolean | | | | True = round 2 (with coi)False = round 1 | | | | True |
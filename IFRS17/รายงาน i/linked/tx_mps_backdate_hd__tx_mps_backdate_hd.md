# tx_mps_backdate_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_backdate_hd-TOC) ] [ [Convention](#tx_mps_backdate_hd-Convention) ] [ [Table : tx_mps_backdate_hd](#tx_mps_backdate_hd-Table:tx_mps_backdate_hd) ]

## Convention

Description: ข้อมูล Transaction MPS Backdate Detail

## Table : tx_mps_backdate_hd

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_backdate_hd_id | FK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 3 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | | | 6 |
| 4 | period_year | | Varchar | 5 | | not null | ปีของ period ที่ทำรายการ | 4 Digits (ค.ศ.) | | | 2022 |
| 5 | period_month | | Varchar | 2 | | not null | เดือนของ period ที่ทำรายการ | 2 Digits | | | 07 |
| 6 | mps_process_status_id | FK | Numeric | 4 | | not null | | | | | |
| 7 | sum_records | | Numeric | 8 | | | จำนวนรายการ | | | | 3 |
| 8 | imp_file_name | | Varchar | 500 | | | ชื่อไฟล์ที่นำเข้าสำเร็จ | | | | 202207_ข้อมูลกรมธรรม์สามัญที่มีการปรับปรุงข้อมูล.xlsx |
| 9 | imp_file_available | | Boolean | | | not null | นำเข้าไฟล์สำเร็จหรือไม่ | True = นำเข้าสำเร็จFalse = นำเข้าไม่สำเร็จ | | | True |
| 10 | err_file_name | | Varchar | 500 | | | ชื่อไฟล์ที่นำเข้าไม่สำเร็จ | | | | 202207_ข้อมูลกรมธรรม์สามัญที่มีการปรับปรุงข้อมูล_Result.xlsx |
| 11 | err_file_available | | Boolean | | | not null | มี file error หรือไม่ | True = มีFalse = ไม่มี | | | False |
| 12 | no_data_flag | | Boolean | | | not null | ไม่มีข้อมูลนำเข้าใน period นั้นใช่หรือไม่ | True = ใช่ (ไม่มีข้อมูลนำเข้า)False = ไม่ใช่ | | | False |
| 13 | unuse_flag | | Boolean | | | not null | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน | | | True |
| 14 | remark | | Varchar | 500 | | | หมายเหตุ | | | | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| 15 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-25 16:00:50 |
| 16 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-25 16:00:50 |
| 17 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 18 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-25 16:00:50 |
| 19 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
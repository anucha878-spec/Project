# tx_mps_actual_sa_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_actual_sa_hd-TOC) ] [ [Convention](#tx_mps_actual_sa_hd-Convention) ] [ [Table : tx_mps_actual_sa_hd](#tx_mps_actual_sa_hd-Table:tx_mps_actual_sa_hd) ]

## Convention

Description: ข้อมูล Transaction MPS เตรียมข้อมูล Acture SA

## Table : tx_mps_actual_sa_hd

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_actual_sa_hd_id | FK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 3 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | | | 1 |
| 4 | period | | Varchar | 5 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | sum_amount_ord | | Numeric | 8 | | not null | จำนวนรายการรวมสามัญ | | | | 1461546 |
| 7 | sum_amount_ind | | Numeric | 8 | | not null | จำนวนรายการรวมอุตสาหกรรม | | | | 629335 |
| 8 | unuse_flag | | Boolean | | | not null | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน | | | True |
| 9 | remark | | Varchar | 500 | | | หมายเหตุ | | | | |
| 10 | transaction_date | | Timestamp | | | not null | วันที่ดำเนินการ | | | | 2022-08-18 12:37:37 |
| 11 | created_date | | Timestamp | | | not null | วันที่สร้างรายการ | | | | 2022-08-18 12:37:37 |
| 12 | created_by | | Varchar | 50 | | not null | ผุ้สร้างรายการ | | | | boss |
| 13 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-18 12:37:37 |
| 14 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการล่าสุด | | | | boss |
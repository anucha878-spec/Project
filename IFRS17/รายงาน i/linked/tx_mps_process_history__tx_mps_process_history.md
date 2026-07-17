# tx_mps_process_history

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_history
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_process_history-TOC) ] [ [Convention](#tx_mps_process_history-Convention) ] [ [Table : tx_mps_process_history](#tx_mps_process_history-Table:tx_mps_process_history) ]

## Convention

Description: ข้อมูล Transaction MPS Process History

## Table : tx_mps_process_history

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_process_his_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_process_hd_id | FK | Numeric | 8 | | not null | [tx_mps_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_process_header).mps_process_hd_id | | | | 1 |
| 3 | mps_process_status_id | FK | Numeric | 4 | | not null | [ms_mps_process_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_process_status).mps_process_status_id | | | | 1 |
| 4 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | remark | | Varchar | 500 | | | หมายเหตุ | | | | |
| 6 | transaction_date | | Timestamp | | | | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 7 | transaction_by | | Varchar | 500 | | | ผู้ทำรายการ | | | | boss |
| 8 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 9 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 10 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 11 | created_date | | Timestamp | | | not null | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
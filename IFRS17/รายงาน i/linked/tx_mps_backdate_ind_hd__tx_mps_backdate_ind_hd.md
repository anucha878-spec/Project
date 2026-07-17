# tx_mps_backdate_ind_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-TOC) ] [ [Convention](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-Convention) ] [ [Table : tx_mps_backdate_ind_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind_hd#ttx_mps_backdate_ind_hd-Table:tx_mps_backdate_ind_hd)]

## Convention

Description:

## Table : tx_mps_backdate_ind_hd

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_backdate_ind_hd_id | PK | numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name_id | FK | numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 3 | ms_import_status_id | FK | numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | | | 1 |
| 4 | sum_amount | | numeric | 8 | | | จำนวนรายการ | | | | 1000 |
| 5 | period | | Varchar | 6 | | | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 6 | Remark | | Varchar | 500 | | | หมายเหตุ | | | | ทดสอบยกเลิกข้อมูล #1 |
| | unuse_flag | | Boolean | | | not null | Flag สำหรับระบุว่ายังใช้งานหรือไม่True : ไม่ใช้งานแล้วFalse : ยังใช้งาน | | | | True |
| 7 | transaction_date | | transaction_date | | | not null | วันที่ทำรายการ | | | | 2022-08-18 12:36:49 |
| 8 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-18 12:36:49 |
| 9 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 10 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-18 12:36:49 |
| 11 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
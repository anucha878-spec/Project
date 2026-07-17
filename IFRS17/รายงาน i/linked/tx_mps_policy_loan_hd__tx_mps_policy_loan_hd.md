# tx_mps_policy_loan_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_policy_loan_hd-TOC) ] [ [Convention](#tx_mps_policy_loan_hd-Convention) ] [ [Table : tx_mps_policy_loan_hd](#tx_mps_policy_loan_hd-Table:tx_mps_policy_loan_hd) ]

## Convention

Description: ข้อมูล Transaction MPS Base Header ของส่วนข้อมูลเงินกู้

## Table : tx_mps_policy_loan_hd

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_policy_loan_hd_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 1 |
| 3 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_idยืนยันนำเข้าข้อมูลสำเร็จยกเลิกข้อมูลนำเข้าไม่สำเร็จ | | | | 1 |
| 4 | event_code | | Varchar | 25 | | not null | รหัสผังบัญชีที่กำหนดในระบบ EDW(02/08/2023 by pattaraporn.pu) | | | | |
| 5 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 6 | sum_policy_Number | | Numeric | 10 | | | จำนวนกรมธรรม์ที่มีเงินกู้ | | | | 51353 |
| 7 | sum_loan_amount | | Numeric | (12,2) | | | จำนวนเงินต้นของกรมธรรม์สามัญที่มีเงินกู้ | | | | 1550074115.42 |
| 8 | sum_interest_amount | | Numeric | (12,2) | | | จำนวนดอกเบี้ยของกรมธรรม์สามัญที่มีเงินกู้ | | | | 187500758.40 |
| 9 | sum_total_amount | | Numeric | (12,2) | | | "จำนวนเงินต้น" + "จำนวนดอกเบี้ย" ของกรมธรรม์สามัญที่มีเงินกู้ | | | | 1737574873.82 |
| 10 | unuse_flag | | boolean | | | not null | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน | | | False |
| 11 | remark | | Varchar | 500 | | | หมายเหตุ | | | | ทดสอบ |
| 12 | transaction_date | | Timestamp | | | not null | วันที่ดำเนินการ | | | | 2022-08-26 15:16:23 |
| 13 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการล่าสุด | | | | boss |
| 14 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-26 15:16:23 |
| 15 | created_by | | Varchar | 50 | | not null | ผุ้สร้างรายการ | | | | boss |
| 16 | created_date | | Timestamp | | | not null | วันที่สร้างรายการ | | | | 2022-08-26 15:16:23 |
| 17 | import_number | | Numeric | 1 | | | จำนวนครั้งที่นำเข้าข้อมูล (นับภายในเดือน) | | | | 2 |
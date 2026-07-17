# tx_mps_policy_loan_ind

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ind
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_policy_loan_ind-TOC) ] [ [Convention](#tx_mps_policy_loan_ind-Convention) ] [ [Table : tx_mps_policy_loan_ind](#tx_mps_policy_loan_ind-Table:tx_mps_policy_loan_ind) ]

## Convention

Description: ข้อมูล Transaction เงินกู้อุตสาหกรรม

## Table : tx_mps_policy_loan_ind

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_pl_ind_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | 1 |
| 2 | mps_base_hd_idmps_policy_loan_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | 1 |
| 3 | Period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | 202207 |
| 4 | Policy_Number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | J7054476 |
| 5 | loan_amount | | Numeric | (12,2) | | | เงินต้นคงเหลือ | | | 7300.00 |
| 6 | interest_amount | | Numeric | (12,2) | | | ดอกเบี้ยคงเหลือ | | | 4477.50 |
| 7 | total_amount | | Numeric | (12,2) | | | เงินต้นคงเหลือ + ดอกเบี้ยคงเหลือ | | | 11777.50 |
| 8 | err_message | | Varchar | 500 | | | Error Message | | | |
| 9 | transaction_date | | Timestamp | | | not null | วันที่ดำเนินการ | | | 2022-08-29 16:36:06 |
| 10 | as400_last_update_date | | Timestamp | | | not null | วันที่ดึงข้อมูลจากระบบ AS400 ล่าสุด | | | 2022-08-29 16:36:06 |
| 11 | created_date | | Timestamp | | | not null | วันที่สร้างรายการ | | | 2022-08-29 16:36:06 |
| 12 | created_by | | Varchar | 50 | | not null | ผุ้สร้างรายการ | | | boss |
| 13 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | 2022-08-29 16:36:06 |
| 13 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการล่าสุด | | | boss |
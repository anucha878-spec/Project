# tx_mps_landing_rcg

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_rcg
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_rcg-TOC) ] [ [Convention](#tx_mps_landing_rcg-Convention) ] [ [Table : tx_mps_landing_rcg](#tx_mps_landing_rcg-Table:tx_mps_landing_rcg) ]

## Convention

Description: ข้อมูล Transaction MPS Landing RCG Tagging

## Table : tx_mps_landing_rcg

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_rcg_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_import_icg_id | FK | Numeric | 8 | | not null | [tx_mps_import_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_import_icg).mps_import_icg_id | | | | 1 |
| 3 | row_no | | Numeric | 8 | | | ลำดับ | | | | 1 |
| 4 | period | | Varchar | 6 | | | รอบการประมวลผล format YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | policy_number | | Varchar | 50 | | | เลขที่กรมธรรม์ | | | | J7054476 |
| 6 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ prophet | | | | RO37 |
| 7 | ri_portfolio | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | INR_CIP |
| 8 | ri_cohort | | Varchar | 10 | | | ปี | | | | 2021 |
| 9 | ri_profitability | | Varchar | 10 | | | RI Profitability group | | | | RIRE |
| 10 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group(RCG) | | | | INR_CIP-2021-RIRE |
| 11 | error_message | | Varchar | 500 | | | Error Message | | | | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| 12 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-25 16:00:50 |
| 13 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 14 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-25 16:00:50 |
| 15 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 16 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-25 16:00:50 |
| 17 | match_flag | | Boolean | | | | Flag ตรวจสอบเลขที่กธ. tagging ข้อมูลระหว่าง tagging กับ untag ว่าตรงกันหรือไม่true = ตรงfalse = ไม่ตรง[ADW-4906](http://jira.thaisamut.co.th/browse/ADW-4906) (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) | | | | |
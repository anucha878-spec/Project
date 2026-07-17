# tx_mps_landing_icg

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_icg-TOC) ] [ [Convention](#tx_mps_landing_icg-Convention) ] [ [Table : tx_mps_landing_icg](#tx_mps_landing_icg-Table:tx_mps_landing_icg) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ICG Tagging

## Table : tx_mps_landing_icg

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_icg_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_import_icg_id | FK | Numeric | 8 | | not null | [tx_mps_import_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_import_icg).mps_import_icg_id | | | | 1 |
| 3 | row_no | | Numeric | 8 | | | ลำดับ | | | | 1 |
| 4 | period | | Varchar | 6 | | | รอบการประมวลผล ในรูปแบบ YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | policy_number | | Varchar | 50 | | | เลขที่กรมธรรม์ | | | | J7054476 |
| 6 | prophet_plan_code | | Varchar | 50 | | | แบบประกันในรูปแบบ prophet | | | | OC98 |
| 7 | portfolio | | Varchar | 50 | | | IFRS17 Portfolio name | | | | ORD_END |
| 8 | cohort | | Varchar | 10 | | | ปีที่เริ่มสัญญา | | | | 2021 |
| 9 | profitability | | Varchar | 10 | | | Profitability group | | | | NSPO |
| 10 | portfolio_id | | Varchar | 50 | | | Insurance contract group(ICG) | | | | ORD_END-2021-NSPO |
| 11 | error_message | | Varchar | 500 | | | Error Message | | | | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| 12 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-25 16:00:50 |
| 13 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 14 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-25 16:00:50 |
| 15 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 16 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-25 16:00:50 |
| 17 | match_flag | | Boolean | | | | Flag ตรวจสอบเลขที่กธ. tagging ข้อมูลระหว่าง tagging กับ untag ว่าตรงกันหรือไม่true = ตรงfalse = ไม่ตรง [ADW-4906](http://jira.thaisamut.co.th/browse/ADW-4906) (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) | | | | |
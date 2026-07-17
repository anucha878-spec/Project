# tx_mps_landing_icg_rcg

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_icg_rcg
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_icg_rcg-TOC) ] [ [Convention](#tx_mps_landing_icg_rcg-Convention) ] [ [Table : tx_mps_landing_icg_rcg](#tx_mps_landing_icg_rcg-Table:tx_mps_landing_icg_rcg) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ICG & RCG Tagging

## Table : tx_mps_landing_icg_rcg

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_icg_rcg_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_import_icg_id | FK | Numeric | 8 | | not null | [tx_mps_import_icg](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_import_icg).mps_import_icg_id | | | | 1 |
| 3 | row_no | | Numeric | 8 | | | ลำดับ | | | | 1 |
| 4 | period | | Varchar | 6 | | | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 5 | policy_number | | Varchar | 50 | | | เลขที่กรมธรรม์ | | | | J7054476 |
| 6 | policy_year | | Numeric | 3 | | | ปีกรมธรรม์ | | | | 1 |
| 7 | portfolio | | Varchar | 50 | | | IFRS17 Portfolio name | | | | GRP_YRT |
| 8 | cohort | | Varchar | 10 | | | ปีที่เริ่มสัญญา | YYYY = ปี 4 Digits (ค.ศ.) | | | 2022 |
| 9 | profitability | | Varchar | 10 | | | ชื่อย่อ กำไร/ขาดทุน | กำไร NSOPปานกลาง REMCขาดทุน ONRS | | | ONRS |
| 10 | ri_portfolio | | Varchar | 50 | | | IFRS17 RI Portfolio name | | | | GRP_MRP |
| 11 | ri_cohort | | Varchar | 10 | | | ปีที่เริ่มสัญญา | YYYY = ปี 4 Digits (ค.ศ.) | | | 2022 |
| 12 | ri_profitability | | Varchar | 10 | | | ชื่อย่อ กำไร/ขาดทุน | กำไร NSOPปานกลาง REMCขาดทุน ONRS | | | RING |
| 13 | portfolio_id | | Varchar | 50 | | | Insurance contract group(ICG) | | | | GRP_YRT-2022-ONRS |
| 14 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group(RCG) | | | | GRP_MRP-2022-RING |
| 15 | error_message | | Varchar | 500 | | | Error Message | | | | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| 16 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-25 16:00:50 |
| 17 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 18 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-25 16:00:50 |
| 19 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 20 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-25 16:00:50 |
| 21 | match_flag | | Boolean | | | | Flag ตรวจสอบเลขที่กธ. tagging ข้อมูลระหว่าง tagging กับ untag ว่าตรงกันหรือไม่true = ตรงfalse = ไม่ตรง[ADW-4906](http://jira.thaisamut.co.th/browse/ADW-4906) (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) | | | | |
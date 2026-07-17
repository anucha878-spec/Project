# tx_mps_mapping_unhealth_benefit

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_mapping_unhealth_benefit
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_mapping_unhealth_benefit-TOC) ] [ [Convention](#tx_mps_mapping_unhealth_benefit-Convention) ] [ [Table : tx_mps_mapping_unhealth_benefit](#tx_mps_mapping_unhealth_benefit-Table:tx_mps_mapping_unhealth_benefit) ]

## Convention

Description: ข้อมูล Transaction MPS เตรียมข้อมูลสินไหม Claim : unhealth benefit

## Table : tx_mps_mapping_unhealth_benefit

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_unhealth_benefit_id | PK | numeric | 8 | | not null | รหัสของตาราง | | | | 3423 |
| 2 | policy_no | | varchar | 20 | | not null | เลขกรมธรรม์ | | | | 761551 |
| 3 | rider_type | | varchar | 4 | | not null | ประเภทรหัสสัญญา | | | | ORD,IND,UL |
| 4 | rider_id | | numeric | 10,0 | | | รหัสสัญญาเพิ่มเติม | | | | 41 |
| 5 | unhealth_benefit_name | | varchar | 255 | | | รายการตามกลุ่มโรค | | | | CB01-CI02-DS03-PR04-CH05-CI06-NS07-DM08-CB09 |
| 6 | unhealth_benefit_paid | | varchar | 255 | | | นับจำนวนครั้งตามกลุ่มโรค | | | | XXX-2XX-0XX-0XX-XXX-XXX-XXX-XXX-XXX |
| 7 | transaction_date | | Timestamp | | | not null | วันที่ดำเนินการ | | | | 2022-08-18 12:37:37 |
| 8 | created_date | | Timestamp | | | not null | วันที่สร้างรายการ | | | | 2022-08-18 12:37:37 |
| 9 | created_by | | Varchar | 50 | | not null | ผุ้สร้างรายการ | | | | boss |
| 10 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-18 12:37:37 |
| 11 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการล่าสุด | | | | boss |
# tx_mps_default_unhealth

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_default_unhealth-TOC) ] [ [Convention](#tx_mps_default_unhealth-Convention) ]

## Convention

Description: ข้อมูล Default Unhealth Benefit Name and Unhealth Benefit Paid

Table : tx_mps_default_unhealth

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | unhealth_benefit_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | rider_plan_code | | Numeric | 10 | | not null | แบบประกันสัญญาเพิ่มเติม | | | | 24 |
| 5 | policy_type | | Varchar | 4 | | not null | ประเภทกรมธรรม์ | | | | IND |
| 6 | unhealth_benefit_name | | Varchar | 255 | | not null | ประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | 00X-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX |
| 7 | unhealth_benefit_paid | | Varchar | 255 | | not null | ความคุ้มครองที่จ่ายให้ลูกค้าไปแล้ว ตามประเภทความคุ้มครองที่ต้องจ่าย Claim ตาม Benefit State | | | | CB01-CI02-DS03-PR04-CH05-CI06-NS07-DM08-CB09 |
| 8 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 9 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
# tx_mps_landing_customer

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_customer
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_customer-TOC) ] [ [Convention](#tx_mps_landing_customer-Convention) ] [ [Table : tx_mps_landing_customer](#tx_mps_landing_customer-Table:tx_mps_landing_customer) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ Customer ID (สามัญ, อุตสาหกรรม, PA)

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS018 ดึงข้อมูล Customer ID สำหรับกรมธรรม์สามัญ อุตสาหกรรม และ PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1205436570)

## Table : tx_mps_landing_customer

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_customer_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202410 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | | 9000552 |
| 5 | policy_type | | Varchar | 3 | | not null | ประเภทกรมธรรม์ | | | | | IND |
| 6 | customer_id | | Varchar | 25 | | not null | รหัสของลูกค้าที่ระบบ CIS | | | | | 25672283850 |
| 7 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-09-09 19:36:45 |
| 8 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 9 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-09-09 19:36:45 |
| 10 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
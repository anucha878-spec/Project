# tx_mps_landing_payor

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_payor
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_payor-TOC) ] [ [Convention](#tx_mps_landing_payor-Convention) ] [ [Table : tx_mps_landing_payor](#tx_mps_landing_payor-Table:tx_mps_landing_payor) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ PayorID ของ Rider PB ที่ CIS (สามัญ)

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [Re: WS_EDW3_28 ดึงข้อมูล PayorID ของ Rider PB ที่ CIS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1220477124&focusedCommentId=1221918796#comment-1221918796)

## Table : tx_mps_landing_payor

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_payor_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | | 202410 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | | 9000552 |
| 5 | policy_type | | Varchar | 3 | | not null | ประเภทกรมธรรม์ | | | | | ORD |
| 6 | customer_id | | Varchar | 25 | | not null | รหัสของลูกค้าที่ระบบ CIS | | | | | 25672283850 |
| 7 | customer_role | | Varchar | 3 | | not null | หน้าที่ของลูกค้าสำหรับกรมธรรม์ | | | | | PAY |
| 8 | create_date_cis | | Date | | | not null | วันที่ทำรายการใน cis | | | | | 2019-01-12 18:25:21.878 |
| 9 | update_date_cis | | Date | | | | วันที่แก้ไขข้อมูลใน cis | | | | | 2025-01-12 19:50:20.001 |
| 10 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | | 2022-09-09 19:36:45 |
| 11 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | | boss |
| 12 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | | 2022-09-09 19:36:45 |
| 13 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | | boss |
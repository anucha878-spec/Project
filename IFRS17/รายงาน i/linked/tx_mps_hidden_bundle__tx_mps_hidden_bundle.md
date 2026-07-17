# tx_mps_hidden_bundle

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_hidden_bundle
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_hidden_bundle-TOC) ] [ [Convention](#tx_mps_hidden_bundle-Convention) ] [ [Table : tx_mps_hidden_bundle](#tx_mps_hidden_bundle-Table:tx_mps_hidden_bundle) ]

## Convention

Description: ข้อมูลจาก [WS_EDW3_28 ดึงข้อมูลแบบประกันที่มี Rider แฝงที่ AS400](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1306165636)

## Table : tx_mps_hidden_bundle

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_hidden_id | PK | Numeric | 4 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | plan_code | | Varchar | 5 | | | รหัสแบบประกัน สัญญาหลัก | | | | A50 |
| 4 | rider_plan_code | | Varchar | 5 | | | รหัสแบบประกัน สัญญาเพิ่มเติม | | | | 85 |
| 5 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 6 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 7 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 8 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
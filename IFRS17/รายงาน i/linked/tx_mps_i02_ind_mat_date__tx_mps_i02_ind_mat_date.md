# tx_mps_i02_ind_mat_date

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_i02_ind_mat_date
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_i02_ind_mat_date-TOC) ] [ [Convention](#tx_mps_i02_ind_mat_date-Convention) ]

## Convention

Description: ข้อมูล Initial ค่า วันสิ้นสุดสัญญา ของ I02 Rider อุตสาหกรรม เนื่องจาก AS400 ไม่มีจัดเก็บข้อมูล โดยทางทีมคณิตศาสตร์จะคำนวณรายกธ. ให้ทาง MPS ดึงไปใช้งานต่อ

Table : tx_mps_i02_ind_mat_date

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | tx_mps_i02_ind_mat_date_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | 1 |
| 2 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | J7631611 |
| 3 | rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม (ในรูปแบบโค้ดสามัญ) | | | | 154 |
| 4 | rider_maturity_date | | Date | | | | วันที่ครบกำหนดสัญญาของสัญญาเพิ่มเติม | | | | |
| 5 | rider_premium_term | | Numeric | 12,2 | | | ระยะเวลาชำระเบี้ย ของสัญญาเพิ่มเติม | | | | 4.0 |
| 6 | rider_coverage_term | | Numeric | 12,2 | | | ระยะเวลาคุ้มครอง ของสัญญาเพิ่มเติม | | | | 4.0 |
| 7 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 8 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 9 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 02:04:46 |
| 10 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |
| 11 | ind_rider_plan_code | | Varchar | 50 | | | แบบประกันสัญญาเพิ่มเติม ในรูปแบบโค้ดอุตสาหกรรม | | | | |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 12 | xml_product_type | | Varchar | 100 | | | รายละเอียดของ XML Product Type | | | | |
| 13 | edw_product_type | | Varchar | 100 | | | รายละเอียดของ EDW Product Type | | | | |
| 14 | underwrite_type | | Varchar | 100 | | | รายละเอียดของ Underwrite Type | | | | |
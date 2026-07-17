# tx_mps_sale_channel

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_sale_channel-TOC) ] [ [Convention](#tx_mps_sale_channel-Convention) ]

## Convention

Description: ข้อมูล Initial ค่า sale channel และ sale channel code เนื่องจาก AS400 ณ ปัจจุบันยังไม่มีการเพิ่มช่องทางการขาย full time agent จึงดำเนินการ workaround โดยการ manual ปรับข้อมูลเพื่อให้ทางคณิตศาสตร์สามารถนำข้อมูลไปใช้ต่อได้

Table : tx_mps_i02_ind_mat_date

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | tx_mps_sale_channel_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | 1 |
| | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| | period | | Varchar | | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 2 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | J7631611 |
| 3 | report_type | | Varchar | 50 | | not null | ประเภท I report | I01: สามัญ และอุตสาหกรรมI03: อุบัติเหตุi04: UL | | | I01 |
| 4 | sale_channel | | Varchar | 10 | | not null | ตัวย่อของรหัสช่องทางการขาย | | | | AGT |
| 5 | sale_channel_code | | Varchar | 10 | | not null | รหัสช่องทางการขาย | | | | 4070116 |
| 6 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 7 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
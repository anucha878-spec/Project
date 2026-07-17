# cf_r14_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r14_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
TOC

[ [Convention](#cf_r14_gl_mapping-Convention) ] [ [Table cf_r14_gl_mapping](#cf_r14_gl_mapping-Tablecf_r14_gl_mapping) ]

## Convention

## Table cf_r14_gl_mapping

ข้อมูลสำหรับ config เพื่อออกรายงาน R14

| **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **CONSTRAINT** | **COMMENT** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| id | PK | int | | | | uniqid | | | | |
| event_code | | varchar | 10 | | | รหัสผังบัญชีที่กำหนดในระบบ EDW | | | | APL_MAC_20 |
| account_type | | varchar | 2 | | | Dr/Cr | | | | DR |
| account_code | | varchar | 20 | | | รหัสบัญชีแยกประเภท | | | | 42022113 |
| gl_type | | varchar | 2 | | | การ set Dr/Cr เพื่อใช้เปรียบเทียบว่ายอดเงินจะเป็นค่าบวกหรือลบ เช่นถ้า account_type = Dr และ gl_type = Dr/ +ถ้า account_type = Cr และ gl_type = Dr/ -ถ้า account_type = Cr และ gl_type = Cr/ + | | | | |
| loan_type | | varchar | 3 | | | ประเภทการกู้PL : เงินกู้APL : เงินกู้อัติโนมัติ | | | | APL |
| amount_report | | varchar | 255 | | | field ที่จะนำไปแสดงที่รายงาน | | | | PrepaymentAmountInterest,CompoundInterestAmount |
| event_type | | varchar | 100 | | | รูปแบบการชำระเงินกู้ | | | | NormalPrepay |
| receive_type | | varchar | 50 | | | ประเภทการจ่ายเงิน | | | | CASH |
| active_flag | | boolean | | | | | | | | TRUE |
| offset_flag | | boolean | | | | เป็นเคสที่สามารถเกิด offset ได้0 = เกิดไม่ได้1 = เกิดได้ | | | | FALSE |
| created_date | | timestamp | | | | | | | | |
| created_by | | varchar | | | | | | | | |
| updated_date | | timestamp | | | | | | | | |
| updated_by | | varchar | | | | | | | | |
| **UR 20260040 Improvement for OIC timeline (ปรับปรุง R- Report) [Task #82581](https://redmine.ochi.link/issues/82581)** | | | | | | | | | | |
| r14_output_flag | | boolean | | | | true=ดึงลง tx_rcc_output_r14 (R14), false=เฉพาะ tx_rcc_reconcile_r14 (R05ACC only) | | | | |
| display_tagging_flag | | boolean | | | | true=แสดง disclosure_type และ plan_code ในรายงาน ACC, false=ไม่แสดง (บันทึกเป็น NULL) | | | | |
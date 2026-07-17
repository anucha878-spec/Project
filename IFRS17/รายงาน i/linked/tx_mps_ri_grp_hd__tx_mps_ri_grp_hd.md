# tx_mps_ri_grp_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_ri_grp_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_ri_grp_hd-TOC) ] [ [Convention](#tx_mps_ri_grp_hd-Convention) ] [ [Table : tx_mps_ri_grp_hd](#tx_mps_ri_grp_hd-Table:tx_mps_ri_grp_hd) ]

## Convention

Description: ตาราง Header ข้อมูลจากไฟล์นำเข้าของหน้าจอ [EDW-MPS-SD014 หน้าจอนำเข้าข้อมูลกรมธรรม์ประกันกลุ่ม ที่ส่งประกันภัยต่อ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1261469872)

## Table : tx_mps_ri_grp_hd

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_ri_grp_hd_id | FK | Numeric | 8 | | not null | รหัสของตาราง | | 1 |
| 2 | cf_file_name_id | FK | Numeric | 4 | | not null | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | 1 |
| 3 | ms_import_status_id | FK | Numeric | 4 | | not null | [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).ms_import_status_id | | 6 |
| 4 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | 202207 |
| 5 | sum_records | | Numeric | 8 | | | จำนวนรายการ | | 50 |
| 6 | sum_ri_life | | Numeric | 12,2 | | | ผลรวมของ RIPremiumLife | | 39,767.26 |
| 7 | sum_ri_accdeath | | Numeric | 12,2 | | | ผลรวมของ RIPremiumAccidentDeath | | 39,767.26 |
| 8 | sum_ri_medacc | | Numeric | 12,2 | | | ผลรวมของ RIPremiumMedAccident | | 39,767.26 |
| 9 | sum_ri_tpd | | Numeric | 12,2 | | | ผลรวมของ RIPremiumTPD | | 39,767.26 |
| 10 | sum_ri_ipd | | Numeric | 12,2 | | | ผลรวมของ RIPremiumIPD | | 39,767.26 |
| 11 | sum_ri_opd | | Numeric | 12,2 | | | ผลรวมของ RIPremiumOPD | | 39,767.26 |
| 12 | sum_ri_dental | | Numeric | 12,2 | | | ผลรวมของ RIPremiumDental | | 39,767.26 |
| 13 | sum_ri_other | | Numeric | 12,2 | | | ผลรวมของ RIPremiumOther | | 39,767.26 |
| 14 | imp_file_name | | Varchar | 500 | | | ชื่อไฟล์ที่นำเข้าสำเร็จ | | 202207_ข้อมูลกรมธรรม์สามัญที่มีการปรับปรุงข้อมูล.xlsx |
| 15 | imp_file_available | | Boolean | | | not null | นำเข้าไฟล์สำเร็จหรือไม่ | True = นำเข้าสำเร็จFalse = นำเข้าไม่สำเร็จ | True |
| 16 | err_file_name | | Varchar | 500 | | | ชื่อไฟล์ที่นำเข้าไม่สำเร็จ | | 202207_ข้อมูลกรมธรรม์สามัญที่มีการปรับปรุงข้อมูล_Result.xlsx |
| 17 | err_file_available | | Boolean | | | not null | มี file error หรือไม่ | True = มีFalse = ไม่มี | False |
| 18 | no_data_flag | | Boolean | | | not null | ไม่มีข้อมูลนำเข้าใน period นั้นใช่หรือไม่ | True = ใช่ (ไม่มีข้อมูลนำเข้า)False = ไม่ใช่ | False |
| 19 | unuse_flag | | Boolean | | | not null | Flag สำหรับระบุว่ายังใช้งานหรือไม่ | True : ไม่ใช้งานแล้วFalse : ยังใช้งาน | True |
| 20 | remark | | Varchar | 500 | | | หมายเหตุ | | จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์ |
| 21 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | 2022-08-25 16:00:50 |
| 22 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | 2022-08-25 16:00:50 |
| 23 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | boss |
| 24 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | 2022-08-25 16:00:50 |
| 25 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | boss |
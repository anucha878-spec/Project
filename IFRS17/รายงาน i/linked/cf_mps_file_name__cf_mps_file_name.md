# cf_mps_file_name

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_mps_file_name-TOC) ] [ [Convention](#cf_mps_file_name-Convention) ] [ [Table : cf_mps_file_name](#cf_mps_file_name-Table:cf_mps_file_name) ]

## Convention

Description: ข้อมูล Config MPS File Name

## Table : cf_mps_file_name

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | cf_file_name_id | PK | Numeric | 4 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_file_name | UK | Varchar | 255 | | not null | ชื่อไฟล์ | | | | ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. |
| 3 | cf_file_group_id | FK | Numeric | 8 | | not null | [ms_mps_group_type](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_group_type).group_type_id | | | | 1 |
| 4 | seq_no | | Numeric | 3 | | | ลำดับของไฟล์ | | | | 1 |
| 5 | begin_date | | Date | | | not null | วันที่เริ่มใช้งาน Config | | | | 2021-11-11 |
| 6 | expire_date | | Date | | | not null | วันที่สิ้นสุดการใช้งาน Config | | | | 2999-12-31 |
| 7 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-02-04 13:15:01 |
| 8 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | SYSTEM |
| 9 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-02-04 13:15:01 |
| 10 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | SYSTEM |

Data

| cf_file_name_id | cf_file_name | cf_file_group_id | seq_no | begin_date | expire_date | created_date | created_by | updated_date | updated_by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. | 1 | 1 | 2021-11-11 | 2999-12-31 | 2022-02-04 13:15:01 | SYSTEM | 2022-02-04 13:15:01 | SYSTEM |
| 2 | ดึงข้อมูลสำหรับ I01 Main Policy Master GMM ตั้งฐาน (แบบประกันสามัญ) | 2 | 1 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 3 | ข้อมูลกรมธรรม์สามัญ อุตสาหกรรม ที่มีการปรับมูลค่ากรมธรรม์ | 4 | 1 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-28 14:26:04 | SYSTEM |
| 4 | ดึงข้อมูลสำหรับ I02 Rider Products Policy Master ตั้งฐาน (แบบประกันสามัญ) | 2 | 3 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 5 | ดึงข้อมูลสำหรับ I03 PA Products Policy Master GMM ตั้งฐาน | 2 | 45 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 6 | ดึงข้อมูลสำหรับ I04 Unit Linked Products Policy Master VFA ตั้งฐาน | 2 | 56 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 7 | ดึงข้อมูลสำหรับ I05 Group YRT Inforce Policy PAA ตั้งฐาน | 2 | 67 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 8 | ดึงข้อมูลสำหรับ I01 Main Policy Master GMM ตั้งฐาน (แบบประกันอุตสาหกรรม) | 2 | 2 | 2021-11-11 | 2999-12-31 | 2022-02-21 14:17:50 | SYSTEM | 2022-03-03 15:40:34 | SYSTEM |
| 9 | ข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับปรุงข้อมูล | 3 | 1 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:21 | SYSTEM | 2022-02-21 9:16:21 | SYSTEM |
| 10 | ข้อมูลเงินกู้ตามกรมธรรม์โดยอัตโนมัติ (APL) (03/08/2023 by pattaraporn.pu | 6 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-01 16:17:35 | SYSTEM | 2022-03-01 16:17:35 | SYSTEM |
| 11 | ข้อมูลเงินกู้ตามกรมธรรม์ (แบบประกันอุตสาหกรรม) | 7 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-01 16:17:35 | SYSTEM | 2022-03-01 16:17:35 | SYSTEM |
| 12 | ข้อมูล I01 Main Policy Master GMM (untag) | 5 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-08 10:45:12 | SYSTEM | 2022-03-08 10:45:12 | SYSTEM |
| 13 | ข้อมูล I02 Rider Products Policy Master (untag) | 5 | 2 | 2021-11-11 | 2999-12-31 | 2022-03-08 10:45:12 | SYSTEM | 2022-03-08 10:45:12 | SYSTEM |
| 14 | ข้อมูล I03 PA Products Policy Master GMM (untag) | 5 | 3 | 2021-11-11 | 2999-12-31 | 2022-03-08 10:45:12 | SYSTEM | 2022-03-08 10:45:12 | SYSTEM |
| 15 | ข้อมูล I04 Unit Linked Products Policy Master VFA (untag) | 5 | 4 | 2021-11-11 | 2999-12-31 | 2022-03-08 10:45:12 | SYSTEM | 2022-03-08 10:45:12 | SYSTEM |
| 16 | ข้อมูล I05 Group YRT Inforce Policy PAA (untag) | 5 | 5 | 2021-11-11 | 2999-12-31 | 2022-03-08 10:45:12 | SYSTEM | 2022-03-08 10:45:12 | SYSTEM |
| 17 | ICG_tagging_for_GMM_VFA | 5 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 18 | RCG_tagging_for_GMM_VFA | 5 | 2 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 19 | ICG&RCG_tagging_for_PAA | 5 | 3 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 20 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty TOAB2B | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 21 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty TOACB | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 22 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty PacificReCI | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 23 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReCI50 | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 24 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty TOACREDIT | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 25 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty GIBMED | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 26 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty GIBMLTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 27 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty RGAMLTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 28 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReMLTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 29 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiRe_Share_RGAMLTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 30 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty TOAMLTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 31 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty RGAMRTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 32 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReMRTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 33 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiRe_Share_RGAMRTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 34 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty TOAMRTA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 35 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReNONMED | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 36 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReORDINARY | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 37 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiRePA | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 38 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty PacificReSTD | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 39 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty PacificReSUBSTD | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 40 | นำเข้าข้อมูล RI Estimate สำหรับ Treaty ThaiReSuper Health Care | 8 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 41 | ดึงข้อมูลสำหรับ I01 ส่วนข้อมูลเงินกู้ตามกรมธรรม์ ตั้งฐาน (แบบประกันอุตสาหกรรม) | 2 | 7 | 2021-11-11 | 2999-12-31 | 2022-02-21 9:16:19 | SYSTEM | 2022-02-21 9:16:19 | SYSTEM |
| 42 | ข้อมูล I01 Main Policy Master GMM | 5 | 1 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 43 | ข้อมูล I02 Rider Products Policy Master | 5 | 2 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 44 | ข้อมูล I03 PA Products Policy Master GMM | 5 | 3 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 45 | ข้อมูล I04 Unit Linked Products Policy Master VFA | 5 | 4 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 46 | ข้อมูล I05 Group YRT Inforce Policy PAA | 5 | 5 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 47 | ดึงข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกันอุตสาหกรรม) | 2 | 4 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 48 | ข้อมูลเงินกู้ดบ.ค้างรับ PL และ ภธ.ค้างจ่ายเกณฑ์สิทธิ์(สามัญ) | 6 | 2 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 49 | ดบ.ค้างรับ PL และ ภธ.ค้างจ่ายเกณฑ์สิทธิ์(อุตสาหกรรม) | 6 | 3 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| 50 | รายการ APL (ปรับงวดการชำระ) | 6 | 4 | 2021-11-11 | 2999-12-31 | 2022-03-11 19:54:33 | SYSTEM | 2022-03-11 19:54:33 | SYSTEM |
| **ปรับแก้ไขที่ EDW 5.1 Group 1** | | | | | | | | | |
| 62 | ดึงข้อมูลสำหรับ ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ เช่น ธกส. | 2 | 11 | 2024-03-25 | 2999-12-31 | 2024-03-19 00:00:00 | SYSTEM | 2024-03-19 00:00:00 | SYSTEM |
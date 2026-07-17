# cf_mps_process_name

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_process_name
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_mps_process_name-TOC) ] [ [Convention](#cf_mps_process_name-Convention) ] [ [Table : cf_mps_process_name](#cf_mps_process_name-Table:cf_mps_process_name) ]

## Convention

Description: ข้อมูล Config MPS Process Name

## Table : cf_mps_process_name

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_process_name_id | PK | Numeric | 4 | | not null | รหัสของตาราง | | | | 1 |
| 2 | cf_process_name | UK | Varchar | 255 | | not null | ชื่อกระบวนการ | | | | ข้อมูลสำหรับ I01 Main Policy Master GMM (แบบประกันสามัญ) |
| 3 | group_type_id | FK | Numeric | 8 | | not null | [ms_mps_group_type](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_group_type).group_type_id | | | | 5 |
| 4 | seq_no | | Numeric | 3 | | | ลำดับของกระบวนการ | | | | 1 |
| 5 | mapping_id | FK | Numeric | 3 | | | [cf_mps_file_name](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_file_name).cf_file_name_id | | | | 2 |
| 6 | header_table | | Varchar | 255 | | | ตาราง header ของกระบวนการ | | | | tx_mps_base_header |
| 7 | landing_table | | Varchar | 255 | | | ตาราง landing ของกระบวนการ | | | | tx_mps_landing_i01_ord |
| 8 | begin_date | | Date | | | not null | วันที่เริ่มใช้งาน Config | | | | 2021-11-11 |
| 9 | expire_date | | Date | | | not null | วันที่สิ้นสุดการใช้งาน Config | | | | 2999-12-31 |
| 10 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-02-04 13:15:01 |
| 11 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | SYSTEM |
| 12 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-02-04 13:15:01 |
| 13 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | SYSTEM |
| 14 | version | | varchar | 5 | | not null | สำหรับแยก version การดึง config ไปใช้งาน | | | | 1 |

Data

| mps_process_name_id | cf_process_name | group_type_id | seq_no | mapping_id | header_table | landing_table | begin_date | expire_date | created_date | created_by | updated_date | updated_by |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ข้อมูลสำหรับ I01 Main Policy Master GMM (แบบประกันสามัญ) | 5 | 1 | 2 | tx_mps_base_header | tx_mps_landing_i01_ord | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 2 | ข้อมูลสำหรับ I01 Main Policy Master GMM (แบบประกันอุตสาหกรรม) | 5 | 2 | 8 | tx_mps_base_header | tx_mps_landing_i01_ind | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 3 | ข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกันสามัญ) | 5 | 3 | 4 | tx_mps_base_header | tx_mps_landing_i02 | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 4 | ข้อมูลสำหรับ I03 PA Products Master GMM | 5 | 45 | 5 | tx_mps_base_header | tx_mps_landing_i03 | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 5 | ข้อมูลสำหรับ I04 Unit Linked Products Policy Master VFA | 5 | 56 | 6 | tx_mps_base_header | tx_mps_landing_i04 | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 6 | ข้อมูลสำหรับ I05 Group YRT Inforce Policy PAA | 5 | 67 | 7 | tx_mps_base_header | tx_mps_landing_i05 | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 7 | ข้อมูลปรับปรุงสำหรับกรมธรรม์สามัญ ธกส. | 5 | 78 | 1 | tx_mps_backdate_hd | tx_mps_backdate_ord | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 8 | ข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับปรุงข้อมูล | 5 | 89 | 9 | tx_mps_backdate_ind_hd | tx_mps_backdate_ind | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 9 | ข้อมูลปรับปรุงทุนประกันภัยรวม | 5 | 910 | 3 | tx_mps_actual_sa_hd | tx_mps_actual_sa_ord, tx_mps_actual_sa_ind | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 10 | ข้อมูลเงินกู้ตามกรมธรรม์ (แบบประกันสามัญ) | 5 | 1011 | 10 | tx_mps_policy_loan_hd | tx_mps_policy_loan_apl(02/08/2023 by pattaraporn.pu) | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 11 | ข้อมูลเงินกู้ตามกรมธรรม์ (แบบประกันอุตสาหกรรม) | 5 | 1112 | 11 | tx_mps_policy_loan_hdtx_mps_base_header | tx_mps_policy_loan_ind | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 12 | ข้อมูล RI Estimate สำหรับ Treaty TOAB2B | 5 | 1213 | 12 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 13 | ข้อมูล RI Estimate สำหรับ Treaty TOACB | 5 | 1314 | 13 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 14 | ข้อมูล RI Estimate สำหรับ Treaty PacificReCI | 5 | 1415 | 14 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 15 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReCI50 | 5 | 1516 | 15 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 16 | ข้อมูล RI Estimate สำหรับ Treaty TOACREDIT | 5 | 1617 | 16 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 17 | ข้อมูล RI Estimate สำหรับ Treaty GIBMED | 5 | 1718 | 17 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 18 | ข้อมูล RI Estimate สำหรับ Treaty GIBMLTA | 5 | 1819 | 18 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 19 | ข้อมูล RI Estimate สำหรับ Treaty RGAMLTA | 5 | 1920 | 19 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 20 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReMLTA | 5 | 2021 | 20 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 21 | ข้อมูล RI Estimate สำหรับ Treaty ThaiRe_Share_RGAMLTA | 5 | 2122 | 21 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 22 | ข้อมูล RI Estimate สำหรับ Treaty TOAMLTA | 5 | 2223 | 22 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 23 | ข้อมูล RI Estimate สำหรับ Treaty RGAMRTA | 5 | 2324 | 23 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 24 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReMRTA | 5 | 2425 | 24 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 25 | ข้อมูล RI Estimate สำหรับ Treaty ThaiRe_Share_RGAMRTA | 5 | 2526 | 25 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 26 | ข้อมูล RI Estimate สำหรับ Treaty TOAMRTA | 5 | 2627 | 26 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 27 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReNONMED | 5 | 2728 | 27 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 28 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReORDINARY | 5 | 2829 | 28 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 29 | ข้อมูล RI Estimate สำหรับ Treaty ThaiRePA | 5 | 2930 | 29 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 30 | ข้อมูล RI Estimate สำหรับ Treaty PacificReSTD | 5 | 3031 | 30 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 31 | ข้อมูล RI Estimate สำหรับ Treaty PacificReSUBSTD | 5 | 3132 | 31 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 32 | ข้อมูล RI Estimate สำหรับ Treaty ThaiReSuper Health Care | 5 | 3233 | 32 | | | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 33 | ข้อมูลสำหรับ I02 Rider Products Policy Master GMM (แบบประกันอุตสาหกรรม) | 5 | 4 | 47 | tx_mps_base_header | tx_mps_landing_i02_ind | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 37 | ข้อมูลเงินกู้ตามกรมธรรม์โดยอัตโนมัติ (APL) | 5 | 37 | | | | | | | | | |
| 38 | ข้อมูลเงินกู้ดบ.ค้างรับ PL และ ภธ.ค้างจ่ายเกณฑ์สิทธิ์(สามัญ) | 5 | 38 | 48 | tx_mps_policy_loan_hd | tx_mps_policy_loan_accrued_interest_tax | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 39 | ดบ.ค้างรับ PL และ ภธ.ค้างจ่ายเกณฑ์สิทธิ์(อุตสาหกรรม) | 5 | 39 | 49 | tx_mps_policy_loan_hd | tx_mps_policy_loan_accrued_interest_tax | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
| 40 | รายการ APL (ปรับงวดการชำระ) | 5 | 40 | 50 | tx_mps_policy_loan_hd | tx_mps_policy_loan_apl_manual | 2021-11-11 | 2999-12-31 | 2022-03-08 9:25:00 | SYSTEM | | |
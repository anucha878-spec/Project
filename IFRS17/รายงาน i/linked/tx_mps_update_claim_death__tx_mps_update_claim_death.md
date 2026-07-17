# tx_mps_update_claim_death

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_update_claim_death
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-TOC) ] [ [Convention](http://wiki.thaisamut.co.th/display/RDSADW/tx_exp_dvr_mly_header#tx_exp_dvr_mly_header-Convention) ] [ [Table : tx_mps_backdate_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind_hd#ttx_mps_backdate_ind_hd-Table:tx_mps_backdate_ind_hd)]

## Convention

Description:

## Table : tx_mps_update_claim_death

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_update_claim_death_id | PK | numeric (18) | | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | numeric (8) | | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar (6) | | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar (50) | | | not null | เลขที่กรมธรรม์ | | | | D5836834 |
| 5 | claim_type_code | | Varchar (50) | | | | ประเภทสินไหม | | | | DeathCL |
| 6 | assessor_commit_date | | Date | | | | วันและเวลาที่ Assessor ส่งพิจารณา | | | | 2009-10-25 |
| 7 | death_in_process_date | | Date | | | | วันที่ลูกค้าเสียชีวิต | | | | 2009-10-25 |
| 8 | created_date | | timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 02:04:46 |
| 9 | created_by | | Varchar (50) | | | not null | ผู้บันทึกรายการ | | | | boss |
| 10 | updated_date | | timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 02:04:46 |
| 11 | updated_by | | Varchar (50) | | | | ผู้อัพเดทรายการ | | | | boss |
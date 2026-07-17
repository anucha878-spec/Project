# WS_RI_41 [Update] อัพเดทสถานะการส่งข้อมูลเข้า EDW (Estimate) (OIC)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266090128
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-Overview) ] [ [Input](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-Input) ] [ [Process](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-Process) ] [ [Output](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-Output) ] [ [Exception](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-Exception) ] [ [Example Input & Output](#WS_RI_41[Update]อัพเดทสถานะการส่งข้อมูลเข้าEDW(Estimate)(OIC)-ExampleInput&Output) ]

## Overview

สำหรับ Update สถานะและ count จำนวนรายการที่ระบบ EDW (OIC)

**Repositories **: msa-adwetl

**Service path**

** POST: **/thaisamut/rs/adwetl/v1/reinsurance/update-process-status

** **

>
Icon

TYPE :

**อธิบายได้ดังนี้**

GET - Select

POST - Insert

PUT - Update

DELETE - Delete

## Input

| Name | Type | Require | Description | Example | Validation | Remark |
| --- | --- | --- | --- | --- | --- | --- |
| ri_process_hd_id | numeric | Require | PK [tx_ri_process_header_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header_oic) | 1 | | |
| ri_std_hd_id | numeric | Require | PK [tx_ri_std_hd_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_hd_oic) | 1 | | |
| treaty_code | char | Require | รหัสสัญญา | THREL_Ind_PA | | |

## Process

ดำเนินการ Update ข้อมูล ดังนี้

1. ตรวจสอบข้อมูลซ้ำกรณีพบข้อมูลที่มี [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd) (period,treaty_code,facult_flag) เดียวกันให้ update สถานะรายการ**ก่อนหน้า**ของ [tx_ri_process_header_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header_oic) ดังนี้ Update tx_ri_process_header_oic | No. | Name | Type | Condition | | --- | --- | --- | --- | | 1 | ri_process_hd_id | numeric | insert running id | | 2 | ri_process_status_id | numeric | **5** | | 3 | transaction_date | timestamp | **Timestamp ที่ update** | | 4 | update_by | char | **user login** | | 5 | update_date | timestamp | **Timestamp ที่ update** |

เมื่อสร้างข้อมูล [tx_ri_std_all_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_all_oic) สำเร็จ ([WS_RI_40](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1266090118)) ให้ update สถานะรายการ ที่ [tx_ri_process_header_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header_oic) ดังนี้

Update tx_ri_process_header_oic

| No. | Name | Type | Condition |
| --- | --- | --- | --- |
| 1 | ri_process_hd_id | numeric | insert running id |
| 2 | group_type_id | numeric | 2 |
| 3 | ri_process_status_id | numeric | 3 |
| 4 | mps_import_status_id | numeric | 7 |
| 5 | single_or_group | char | I |
| 6 | estimate_or_actual | char | E |
| 7 | transaction_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |
| 8 | update_by | char | user login |
| 9 | update_date | timestamp | Timestamp ที่สร้างข้อมูลสำเร็จ |
| 10 | create_by | char | user login |
| 11 | create_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |

Count จำนวนรายการข้อมูลของ [tx_ri_std_all_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_all_oic) ที่ Insert สำเร็จที่ [tx_ri_std_hd_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_hd_oic) ดังนี้

Update tx_ri_std_hd_oic

| No. | Name | Type | Condition |
| --- | --- | --- | --- |
| 1 | sum_records | numeric | > |

กรณี [tx_ri_std_hd_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_hd_oic).sum_records = 0

1. Return ri_process_status_id จาก [tx_ri_process_header_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header_oic).mps_import_status_id ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status (7)
2. Return process_status_name จาก [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).import_status_name ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status_desc (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังนี้ msa-adwetl >
3. ไม่ต้องทำข้อถัดไป

Update ข้อมูลสำหรับประมวลผล Support booking ที่ [tx_ri_std_all_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_all_oic) ดังนี้

Update tx_ri_std_all_oic

| No. | Name | Type | Condition |
| --- | --- | --- | --- |
| 1 | ri_method | char | > |
| 2 | ri_mode_of_payment | char | > |
| 3 | cpa_rider_flag | char | > |

Return ข้อมูลสถานะรายการ
1. Return ri_process_status_id จาก [tx_ri_process_header_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header_oic).mps_import_status_id ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status (7)
2. Return process_status_name จาก [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).import_status_name ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status_desc (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังนี้ msa-adwetl >
3. กรณี Error: responseCode = 100 ให้ insert [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status = 100
4. ให้ return exception log message size (255)

## Output

| Name | Type | Require | Description | Example | Validation | Remark |
| --- | --- | --- | --- | --- | --- | --- |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 | | if SUCCESS = 000if ERROR = 100 |
| mps_import_status_id | numeric | Require | id สถานะรายการ | 7 | | |
| import_status_name | string | Require | ชื่อสถานะรายการ | ยืนยันนำเข้าข้อมูลสำเร็จ | | |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```
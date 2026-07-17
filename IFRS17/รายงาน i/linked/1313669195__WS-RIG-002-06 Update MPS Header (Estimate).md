# WS-RIG-002-06 Update MPS Header (Estimate)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313669195
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS-RIG-002-06UpdateMPSHeader(Estimate)-Overview) ] [ [Input](#WS-RIG-002-06UpdateMPSHeader(Estimate)-Input) ] [ [Process](#WS-RIG-002-06UpdateMPSHeader(Estimate)-Process) ] [ [Output](#WS-RIG-002-06UpdateMPSHeader(Estimate)-Output) ] [ [Exception](#WS-RIG-002-06UpdateMPSHeader(Estimate)-Exception) ] [ [Example Input & Output](#WS-RIG-002-06UpdateMPSHeader(Estimate)-ExampleInput&Output) ]

## Overview

สำหรับ Update สถานะและ count จำนวนรายการที่ระบบ MPS เมื่อส่งข้อมูลลสำเร็จหรือไม่สำเร็จตามรอบประมวลผล

**Repositories **: msa-adwetl

**Service path**

** PUT: **

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
| rig_est_hd_id | numeric | Require | PK [tx_rig_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd) | 1 | | |
| responseCode | | Require | from [WS-RIG-002-07](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313669326) | 000 | | |
| closing_period | numeric | Require | [tx_rig_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd) | 202301 | | |

## Process

ดำเนินการ Update ข้อมูล ดังนี้

1. ตรวจสอบข้อมูลซ้ำ (*31/03/26)กรณีพบข้อมูลที่มี [tx_mps_rig_est_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rig_est_hd) (closing_period,cf_reinsurer_id,cf_treaty_id,treaty_code) เดียวกันให้ update สถานะรายการ**ก่อนหน้า**ของ [tx_mps_rig_est_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rig_est_hd) ดังนี้ | Name | Type | Update | Value | | --- | --- | --- | --- | | usage_status | Varchar | [tx_mps_rig_est_hd.usage_status](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rig_est_hd) | I |
กรณีส่งข้อมูลเข้าระบบ edw ครบแล้ว ประมวลผล success ทุกรายการ (*31/03/26) ตามรอบประมวลผลให้ update mps process ดังนี้
1. กรณี responseCode = 000 (SUCCESS) ทุกรายการ ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header) where cf_file_name_id = 86 and [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).period = [tx_rig_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd).closing_period msa-adwetl | No. | Name | Type | Condition | | --- | --- | --- | --- | | 1 | ms_import_status_id | numeric | 7 | | 2 | sum_amount | numeric | count(rig_est_hd_id) ที่ success ตามรอบประมวลผล | | 3 | updated_by | varchar | user login | | 4 | updated_date | date | Timestamp ที่ update | | 5 | remark | varchar | NULL | | 6 | coi_flag | boolean | NULL |
2. Return ข้อมูลสถานะรายการReturn ms_import_status_id จาก [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).ms_import_status_id ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status (7)
3. Return mps_status_desc จาก [ms_mps_import_status](http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status).import_status_name ไป Insert ที่ [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd).import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl >
กรณีพบ responseCode = 100 (Error) บางรายการ

1. ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header) where cf_file_name_id = 86 and [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).period = [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd) .closing_period msa-adwetl | No. | Name | Type | Condition | | --- | --- | --- | --- | | 1 | ms_import_status_id | numeric | 3 | | 2 | sum_amount | numeric | 0 | | 3 | updated_by | varchar | user login | | 4 | updated_date | date | Timestamp ที่ update | | 5 | remark | varchar | NULL | | 6 | coi_flag | boolean | NULL |
2. Return ข้อมูลสถานะรายการ ให้ insert [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSGRI/tx_rig_est_hd).mps_status = 100
3. ให้ return exception log message size (255)

1. กรณีมีการกดส่งข้อมูลมาใหม่ (ส่งซ้ำรายการเดิม) เมื่อตรวจสอบแล้วว่าส่งสำเร็จทั้งหมดทุกรายการให้กลับไป update ตามข้อ a. กรณี responseCode = 000 (SUCCESS)

## Output

| Name | Type | Require | Description | Example | Validation | Remark |
| --- | --- | --- | --- | --- | --- | --- |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000,100 | | if SUCCESS = 000if ERROR = 100 |
| mps_status | numeric | Require | id สถานะรายการ | 7,100 | | [tx_ri_est_hd](http://wiki.thaisamut.co.th/display/RDSINRI/13.+tx_ri_est_hd).mps_status |
| import_status_name | varchar | | ชื่อสถานะรายการ | ยืนยันนำเข้าข้อมูลสำเร็จ | | |
| sum_amount | numeric | Require | | 10 | | |
| updated_by | varchar | Require | | RI | | |
| updated_date | date | Require | Timestamp ที่ update | | | |
| remark | varchar | | หมายเหตุ | | | |
| coi_flag | boolean | Require | flag coi (รอบประมวลผล) | | | |
| usage_status | varchar | Require | A = Active I = Inactive | | | |

## Exception

## Example Input & Output

1.

>

```

```

>

```

```
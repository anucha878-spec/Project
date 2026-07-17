# tx_mps_nar_hd

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_hd
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
| **Database ** | adwetl | **Link Previous Version** | - |
| --- | --- | --- | --- |
| **Table** | tx_mps_nar_hd | **Data Source ** | - |
| **Project Name** | EDW PH4.1 | **Data Security ** | Internal Use |
| **Version** | 1.0 | **Objective ** | Application Data |
| **Created By** | Pongsathorn.pa | **Year Type** | A.D. |
| **Created Date (yyyy-mm-dd )** | 2023-06-28 | **Description** | จัดเก็บข้อมูลนำเข้าไฟล์ Monthly NAR (header) |
| **Updated By** | pongsathorn.pa | | |
| **Updated Date (yyyy-mm-dd )** | 2023-07-03 | | |

| No. | Key | Attribute Name | Data Type | Length | Null (Y/N) | Description | Datasource Table.Field | Function Transform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | PK | nar_hd_id | numeric | 18 | Y | รหัสของตาราง | | | | | | | 1 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 2 | FK | cf_file_name_id | numeric | 18 | Y | รหัสของชื่อไฟล์ | cf_mps_file_name.cf_file_name_id | | cf_mps_file_name | | | | 1 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 3 | FK | ms_import_status_id | numeric | 18 | Y | สถานะของรายการนำเข้าข้อมูล | ms_mps_import_status.ms_import_status_id | | ms_mps_import_status | | | | 1 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 4 | | period | varchar | 6 | Y | งวดประจำเดือน | | | | | | | 202301 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 5 | | import_file_name | varchar | 50 | Y | ชื่อไฟล์ | cf_mps_file_name.cf_file_name | | cf_mps_file_name | | | | 202305_Monthly_NAR_Export.csv | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 6 | | imp_file_available | boolean | | Y | flag การนำเข้าไฟล์ | | | | true = import available false = import unavailable | | | TRUE | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 7 | | policy_type | varchar | 50 | Y | ประเภทแบบประกัน | | | | | | | Ordinary | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 8 | | transaction_type | varchar | 50 | Y | ประเภทของรายการ | | | | | | | Inforce | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 9 | | no_of_transaction | numeric | **30,15** | | จำนวนรายการ | | | | | | | 1,000.00 | count(tx_mps_nar_ord_landing.nar_ord_id) count(tx_mps_nar_grp_landing.nar_grp_id) | [pongsathorn.pa](http://pongsathorn.pa) | |
| 10 | | ri_previous_nar | numeric | **30,15** | | ผลรวม RI previous net amount at risk | | | | | | | 1,000.12 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 11 | | ri_current_nar | numeric | **30,15** | | ผลรวม RI current net amount at risk | | | | | | | 1,000.12 | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 12 | | trans_start_date | timestamp | | | วันที่เริ่มนำเข้าข้อมูล | | | | | | | 5/10/2023 8:00:00 AM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 13 | | trans_end_date | timestamp | | | วันที่เริ่มนำเข้าข้อมูลสำเร็จ | | | | | | | 5/10/2023 8:00:00 AM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 14 | | transaction_by | varchar | 50 | | ผู้นำเข้าข้อมูล | | | | | | | SYSTEM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 15 | | remark | varchar | 500 | | หมายเหตุ | | | | | | | SYSTEM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 16 | | created_date | timestamp | | | วันที่สร้างรายการ | | | | | | | 5/10/2023 8:00:00 AM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 17 | | created_by | varchar | 50 | | ผู้สร้างรายการ | | | | | | | SYSTEM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 18 | | updated_date | timestamp | | | วันที่สร้างรายการ | | | | | | | 5/10/2023 8:00:00 AM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 19 | | updated_by | varchar | 50 | | ผู้อัพเดทรายการ | | | | | | | SYSTEM | | [pongsathorn.pa](http://pongsathorn.pa) | |
| 20 | | ri_premium | numeric | **30,15** | | ผลรวมเบี้ยประกันกลุ่ม i05 | | | | | | | 1,000.00 | | [pongsathorn.pa](http://pongsathorn.pa/) | |
| 21 | | coi_flag | boolean | | | True = round 2 (with coi)False = round 1 | | | | | | | True | | | |
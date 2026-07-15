===== PAGE 1313145189 | Functional Specification > 02. Process Specification. > RIG-PS-08 Prevalidate =====
Overview
Protocol
Operation
Input
Process
Output

## Overview
กระบวนการบันทึกข้อมูลที่ไม่สามารถนำเข้า Staging ได้สำหรับตรวจสอบหลังการประมวลผล Estimate หรือ Actual

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
Precondition
- ดำเนินการเมื่อกระบวนการ Insert staging ทำงานRIG-PS-04 Estimate - Staging TablesRIG-PS-05 Actual - Staging Tables
- RIG-PS-04 Estimate - Staging Tables
- RIG-PS-05 Actual - Staging Tables
- ตรวจสอบข้อมูลที่ Processing จาก Snapshot Landing ไปที่ Staging Tables ดังนี้ตรวจสอบเฉพาะ field จาก Snapshot Tables ที่ไม่สามารถ maping ลง table ปลายทางได้ (Staging Tables) *เนื่องจาก field ที่ Staging Tables isNotnullกรณีพบค่า Null หรือ Blank จาก Snapshot Tables ไม่สามารถ Insert ไปที่ Staging Tables ได้isNull or Blank or "กรณีพบค่าจาก Snapshot Tables ที่ไม่สามารถบันทึกลง Staging Tables ได้ตัวอย่างไม่สามารถ lookup ข้อมูล เช่น tx_est_snap_policy.pay_type ได้ค่ามาเป็น 4 แต่ใน cf_lookup_catalog ไม่สามารถ lookup ได้เนื่องจาก config ไว้แค่ 0-3 ทำให้บันทึกค่าเป็น varchar ตามเงื่อนไขไม่สำเร็จไม่สามารถแปลงข้อมูล เช่น พบ format timestamp ที่ไม่สามารถ convert ในรูปแบบ dd/mm/yyyy ได้ ตัวอย่าง ได้ค่า tx_est_snap_policy.first_date = 20-08-01 00:00:00 (ควรเป็น 2018-08-01 00:00:00) ทำให้แปลง Timestamp ไปที่ date ไม่ได้
- ตรวจสอบเฉพาะ field จาก Snapshot Tables ที่ไม่สามารถ maping ลง table ปลายทางได้ (Staging Tables) *เนื่องจาก field ที่ Staging Tables isNotnullกรณีพบค่า Null หรือ Blank จาก Snapshot Tables ไม่สามารถ Insert ไปที่ Staging Tables ได้isNull or Blank or "กรณีพบค่าจาก Snapshot Tables ที่ไม่สามารถบันทึกลง Staging Tables ได้ตัวอย่างไม่สามารถ lookup ข้อมูล เช่น tx_est_snap_policy.pay_type ได้ค่ามาเป็น 4 แต่ใน cf_lookup_catalog ไม่สามารถ lookup ได้เนื่องจาก config ไว้แค่ 0-3 ทำให้บันทึกค่าเป็น varchar ตามเงื่อนไขไม่สำเร็จไม่สามารถแปลงข้อมูล เช่น พบ format timestamp ที่ไม่สามารถ convert ในรูปแบบ dd/mm/yyyy ได้ ตัวอย่าง ได้ค่า tx_est_snap_policy.first_date = 20-08-01 00:00:00 (ควรเป็น 2018-08-01 00:00:00) ทำให้แปลง Timestamp ไปที่ date ไม่ได้
- กรณีพบค่า Null หรือ Blank จาก Snapshot Tables ไม่สามารถ Insert ไปที่ Staging Tables ได้isNull or Blank or "
- isNull or Blank or "
- กรณีพบค่าจาก Snapshot Tables ที่ไม่สามารถบันทึกลง Staging Tables ได้ตัวอย่างไม่สามารถ lookup ข้อมูล เช่น tx_est_snap_policy.pay_type ได้ค่ามาเป็น 4 แต่ใน cf_lookup_catalog ไม่สามารถ lookup ได้เนื่องจาก config ไว้แค่ 0-3 ทำให้บันทึกค่าเป็น varchar ตามเงื่อนไขไม่สำเร็จไม่สามารถแปลงข้อมูล เช่น พบ format timestamp ที่ไม่สามารถ convert ในรูปแบบ dd/mm/yyyy ได้ ตัวอย่าง ได้ค่า tx_est_snap_policy.first_date = 20-08-01 00:00:00 (ควรเป็น 2018-08-01 00:00:00) ทำให้แปลง Timestamp ไปที่ date ไม่ได้
- ตัวอย่างไม่สามารถ lookup ข้อมูล เช่น tx_est_snap_policy.pay_type ได้ค่ามาเป็น 4 แต่ใน cf_lookup_catalog ไม่สามารถ lookup ได้เนื่องจาก config ไว้แค่ 0-3 ทำให้บันทึกค่าเป็น varchar ตามเงื่อนไขไม่สำเร็จไม่สามารถแปลงข้อมูล เช่น พบ format timestamp ที่ไม่สามารถ convert ในรูปแบบ dd/mm/yyyy ได้ ตัวอย่าง ได้ค่า tx_est_snap_policy.first_date = 20-08-01 00:00:00 (ควรเป็น 2018-08-01 00:00:00) ทำให้แปลง Timestamp ไปที่ date ไม่ได้
- ไม่สามารถ lookup ข้อมูล เช่น tx_est_snap_policy.pay_type ได้ค่ามาเป็น 4 แต่ใน cf_lookup_catalog ไม่สามารถ lookup ได้เนื่องจาก config ไว้แค่ 0-3 ทำให้บันทึกค่าเป็น varchar ตามเงื่อนไขไม่สำเร็จ
- ไม่สามารถแปลงข้อมูล เช่น พบ format timestamp ที่ไม่สามารถ convert ในรูปแบบ dd/mm/yyyy ได้ ตัวอย่าง ได้ค่า tx_est_snap_policy.first_date = 20-08-01 00:00:00 (ควรเป็น 2018-08-01 00:00:00) ทำให้แปลง Timestamp ไปที่ date ไม่ได้
- เมื่อพบข้อมูล Error ตามกรณีข้างต้น ให้บันทึกข้อมูลไปที่ tx_stg_error_data ตามรายการจาก Snapshot Tables ที่ไม่ผ่าน pre-validate

## Output
| No. | Name | Data Type | Length | Not Null (Y/N) | Description | Input | เงื่อนไขในการบันทึก | Example |
| 1 | tx_stg_error_id | numeric | 8 | Y | เลขที่ Running |  | auto generate | 1 |
| 2 | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. จาก tx_rig_process_hd | tx_rig_process_hd.rig_process_hd_id |  | 1 |
| 3 | process_code | varchar | 20 | Y | Code ของ Process จาก tx_rig_process_hd | tx_rig_process_hd.process_code |  | RIG_AUTO_01 |
| 4 | period | numeric | 6 | Y | รอบประมวลผล | Snapshot Tables.period |  | 202512 |
| 5 | snap_table | varchar | 50 | N | ชื่อ Snapshot Table ที่ไม่สามารถบันทึกเข้า Staging Table | Snapshot Tables.table_name | ชื่อ Snapshot Landing ที่บันทึกลง Staging Tables ไม่สำเร็จ | tx_est_snap_policy |
| 6 | stg_table | varchar | 50 | N | ชื่อ Staging Table ที่ถูกดีดออก | Staging Tables.table_name | ชื่อ Staging Tables ของ Process ที่ดำเนินการ | tx_stg_est_all_policy |
| 7 | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ จาก Snapshot Table | Snapshot Tables.policy_no | บันทึก policy_no จาก Snapshot Landing ที่บันทึกลง Staging Tables ไม่สำเร็จ | GH1663 |
| 8 | promise_date | date |  | N | วันเริ่มสัญญาปีปัจจุบัน จาก Snapshot Table |  | บันทึก promise_date จาก Snapshot Landing ที่บันทึกลง Staging Tables ไม่สำเร็จกรณี Snapshot Landing ดังกล่าวไม่พบตาม mapping ข้างต้นให้ลงค่า null | 2023-08-11 |
| 9 | policy_year | numeric | 3 | N | ปีกรมธรรม์ จาก Snapshot Table |  | บันทึก policy_year จาก Snapshot Landing ที่บันทึกลง Staging Tables ไม่สำเร็จกรณี Snapshot Landing ดังกล่าวไม่พบตาม mapping ข้างต้นให้ลงค่า null | 18 |
| 10 | cer_no | varchar | 20 | N | เลขที่ลูกค้า จาก Snapshot Table |  | กรณีข้อมูลจาก Click here to expand... tx_est_snap_cert_inforce.cernotx_est_snap_cert_newbusiness.certific_cust_notx_est_snap_certificate_cust.certific_cust_notx_est_snap_claim_death.cernotx_est_snap_claimhealth.cernotx_est_snap_claimtpd.cerno กรณี Snapshot Landing ดังกล่าวไม่พบตาม mapping ข้างต้นให้ลงค่า null | 1 |
| 11 | inform_no | varchar | 12 | N | หมายเลขการเคลม จาก Snapshot Table |  | กรณีข้อมูลจาก Click here to expand... tx_est_snap_claim_death.inform_notx_est_snap_claimhealth.notify_notx_est_snap_claimtpd.inform_no กรณี Snapshot Landing ดังกล่าวไม่พบตาม mapping ข้างต้นให้ลงค่า null | 256701810 |
| 12 | err_desc | varchar | 255 | Y | เหตุผลกรณีไม่ผ่านการ validate |  | บันทึกสาเหตุตาม Pre-validate rule ต่อไปนี้กรณีพบค่า Null หรือ Blank ให้บันทึกข้อความไม่พบข้อมูลที่ Snapshotไม่สามารถ lookup ข้อมูลที่ cf_lookup_catalog ให้บันทึกข้อความไม่สามารถ lookup ข้อมูลที่ cf_lookup_catalog | ไม่พบข้อมูลที่ Snapshot |
| 13 | err_field | varchar | 500 | Y | Field name ที่ไม่ผ่าน pre-validate |  | บันทึก field name ที่ไม่ผ่าน pre-validate จาก Staging Tables{field_name_1}, {field_name_2}, {column_name_3},......*note จำนวนการแสดงผล {field_name} ขึ้นอยู่กับจำนวน field ที่ไม่ผ่าน pre-validate | sale_option, lapse_date, prev_policy_no |
| 14 | err_field_lookup | varchar | 255 | N | Field name staging (ที่เป็น lookup) ที่ไม่ผ่าน pre-validate |  |  |  |
| ข้อมูลระบบ |
| 1 | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | now() |  | 2023-06-09 15:49:19.872 +0700 |
| 2 | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  | system |
| 3 | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | now() |  | 2023-06-09 15:49:19.872 +0700 |
| 4 | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  | system |


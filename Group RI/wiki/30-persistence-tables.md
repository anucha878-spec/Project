===== PAGE 1289389386 | Functional Specification > 04. Persistence Specification. =====
(empty page)


===== PAGE 1291420246 | Functional Specification > 04. Persistence Specification. > Configuration =====
- cf_claim_type
- cf_lookup_catalog
- cf_ma_discount
- cf_reinsurer
- cf_reinsurer_history
- cf_rig_email
- cf_rig_nob
- cf_rig_pc_treaty
- cf_rig_template_field
- cf_rig_template_file
- cf_rig_template_sheet
- cf_rig_treaty
- cf_rig_treaty_cond_dt
- cf_rig_treaty_cond_hd
- cf_rig_treaty_dt
- cf_rig_treaty_general
- cf_rig_treaty_policy_hd
- cf_rig_treaty_prem_rate_dt
- cf_rig_treaty_prem_rate_hd
- cf_treaty_history


===== PAGE 1301807119 | Functional Specification > 04. Persistence Specification. > Configuration > cf_claim_type =====
| Database | ri group | Link Previous Version | - |
| Table | cf_claim_type | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/11/2025 | Description | เก็บข้อมูล Claim type grup |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_claim_type_id | numeric | default | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rd_no | varchar | 100 | Y | รหัสความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 3 |  | claim_type_source | varchar | 100 | Y | ประเภทความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 4 |  | claim_type_group | varchar | 100 | Y | กลุ่มความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 5 |  | description | varchar | 255 | N | คำอธิบาย |  |  |  |  |  |  |  |  |  |  |
| 6 |  | status | varchar | 50 | Y | สถานะ |  |  |  |  |  |  |  |  |  |  |
| 7 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 8 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 9 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 10 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |
| cf_claim_type_id | rd_no | claim_type_source | claim_type_group | status | description |
| 1 | 20 | IPD | IPD | A | การประกันสุขภาพ แบบผู้ป่วยใน |
| 2 | 21 | IPD-MP | IPD | A | การประกันสุขภาพ แบบผู้ป่วยใน (เพิ่มเติมพิเศษ) |
| 3 | 22 | OPD | OPD | A | การประกันแบบผู้ป่วยนอก |
| 4 | 23 | OPD-ER | IPD | A | การประกันแบบผู้ป่วยนอกฉุกเฉิน |
| 5 | 24 | CHECK UP | OPD | A | ค่าตรวจสุขภาพประจำปี |
| 6 | 25 | DT | Dental | A | คุ้มครองทันตกรรม |
| 7 | 26 | MED.ACC | MedAccident | A | การประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ |
| 8 | 30 | IPD-BC | IPD | A | การคลอดบุตร |
| 9 | 31 | HB | OPD | A | ค่าชดเชยรายได้ |
| 10 | 32 | DAB | IPD | A | ผลประโยชน์ค่าชดเชยรายได้รายวัน |
| 11 | 33 | Pandemic | IPD | A | การประกันคุ้มครองโรคติดต่อ |
| 12 | 41 | Exp-IPD | IPD | A | ขยายความคุ้มครองสุขภาพ แบบผู้ป่วยใน |
| 13 | 42 | Exp-OPD | OPD | A | ขยายความคุ้มครองสุขภาพ แบบผู้ป่วยนอก |
| 14 | 43 | Exp-ER | OPD | A | ขยายความคุ้มครองผู้ป่วยนอกฉุกเฉิน |
| 15 | 44 | Exp-IPD-BC | IPD | A | ขยายความคุ้มครองการคลอดบุตร |


===== PAGE 1301807125 | Functional Specification > 04. Persistence Specification. > Configuration > cf_claim_type > cf_claim_type innitial =====
| cf_claim_type_id | rd_no | claim_type_source | claim_type_group | status | description |
| 1 | 20 | IPD | IPD | A | การประกันสุขภาพ แบบผู้ป่วยใน |
| 2 | 21 | IPD-MP | IPD | A | การประกันสุขภาพ แบบผู้ป่วยใน (เพิ่มเติมพิเศษ) |
| 3 | 22 | OPD | OPD | A | การประกันแบบผู้ป่วยนอก |
| 4 | 23 | OPD-ER | IPD | A | การประกันแบบผู้ป่วยนอกฉุกเฉิน |
| 5 | 24 | CHECK UP | OPD | A | ค่าตรวจสุขภาพประจำปี |
| 6 | 25 | DT | Dental | A | คุ้มครองทันตกรรม |
| 7 | 26 | MED.ACC | MedAccident | A | การประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ |
| 8 | 30 | IPD-BC | IPD | A | การคลอดบุตร |
| 9 | 31 | HB | OPD | A | ค่าชดเชยรายได้ |
| 10 | 32 | DAB | IPD | A | ผลประโยชน์ค่าชดเชยรายได้รายวัน |
| 11 | 33 | Pandemic | IPD | A | การประกันคุ้มครองโรคติดต่อ |
| 12 | 41 | Exp-IPD | IPD | A | ขยายความคุ้มครองสุขภาพ แบบผู้ป่วยใน |
| 13 | 42 | Exp-OPD | OPD | A | ขยายความคุ้มครองสุขภาพ แบบผู้ป่วยนอก |
| 14 | 43 | Exp-ER | OPD | A | ขยายความคุ้มครองผู้ป่วยนอกฉุกเฉิน |
| 15 | 44 | Exp-IPD-BC | IPD | A | ขยายความคุ้มครองการคลอดบุตร |


===== PAGE 1291715731 | Functional Specification > 04. Persistence Specification. > Configuration > cf_lookup_catalog =====
| Database | ri group | Link Previous Version | - |
| Table | cf_lookup_catalog | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) |  | Description | เก็บข้อมูล Lookup Master ทั้งหมด |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_lookup_catalog_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | description | varchar | 255 | Y | ชื่อ lookup |  |  |  |  |  |  | อนุมัติ |  |  |  |
| 3 |  | lookup_key | varchar | 255 | N | ชื่อย่อที่ใช้แสดงผล และบันทึกลง database |  |  |  |  |  |  | APRV |  |  |  |
| 4 |  | parent_id | int8 | default by data type | N | รหัสกลุ่ม lookup |  |  |  |  |  |  | Thailand |  |  |  |
| 5 |  | created_by | varchar | 50 | Y | ชื่อผู้สร้าง |  |  |  |  |  |  | boss |  |  |  |
| 6 |  | created_date | Timestamp |  | Y | วันที่สร้าง |  |  |  |  |  |  | 2023-06-04 |  |  |  |


===== PAGE 1328185600 | Functional Specification > 04. Persistence Specification. > Configuration > cf_ma_discount =====
| Database | ri group | Link Previous Version | - |
| Table | cf_ma_discount | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 19/03/2026 | Description | เก็บข้อมูล Percent Discount ของ SA |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | ma_rate | numeric | 3 | Y | Percent SA |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | disc_rate | numeric | 3 | Y | Percent Discount |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 4 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
https://docs.google.com/spreadsheets/d/191aUM8ELKCQZnDQF9DpwVPAbUQcTsei510ARGUg1flw/edit?gid=614072290#gid=614072290


===== PAGE 1307934986 | Functional Specification > 04. Persistence Specification. > Configuration > cf_reinsurer =====
| Database | ri group | Link Previous Version | - |
| Table | cf_reinsurer | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | เก็บข้อมูล Reinsurer |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_reinsurer_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  | pongsathorn.pa14/08/2024 |  |
| 2 | UK | reinsurer_code | varchar | 50 | Y | ตัวย่อบริษัท Reinsurer |  |  |  |  |  |  | Thaire |  |  |  |
| 3 |  | reinsurer_name | varchar | 255 | Y | ชื่อบริษัท Reinsurer |  |  |  |  |  |  | บริษัท ไทยรีประกันชีวิต จำกัด(มหาชน) |  |  |  |
| 4 |  | location_code | varchar | 1 | Y | Code ของ Location |  |  |  |  |  |  | L |  |  |  |
| 5 |  | country_code | varchar | 50 | Y | Code ของประเทศ |  |  |  |  |  |  | THA |  |  |  |
| 6 |  | address | varchar | 500 | N | ที่อยู่ |  |  |  |  |  |  | Chiyoda City, Tokyo |  |  |  |
| 7 |  | office_number | varchar | 50 | N | หมายเลขโทรศัพท์สำนักงาน |  |  |  |  |  |  | 020202020 |  |  |  |
| 8 |  | office_number_ext | varchar | 50 | N | เบอร์ต่อ จากหมายเลขโทรศัพท์สำนักงาน |  |  |  |  |  |  | 315 |  |  |  |
| 9 |  | fax | varchar | 50 | N | เบอร์ Fax |  |  |  |  |  |  | 020202021 |  | pongsathorn.pa14/08/2024 |  |
| 10 |  | telephone | varchar | 50 | N | หมายเลขโทรศัพท์เคลื่อนที่ |  |  |  |  |  |  | 0892964027 |  |  |  |
| 11 |  | email | varchar | 100 | Y | Email |  |  |  |  |  |  | processing@thegibraltargrp.com |  |  |  |
| 12 |  | website | varchar | 100 | N | Website |  |  |  |  |  |  | https://www.thegibraltargrp.com/ |  |  |  |
| 13 |  | status | varchar | 1 | Y | สถานะการใช้งานรายการ กำหนดเมื่อสร้างเป็น A และเมือมีการกดลบเป็น I |  |  |  |  |  |  | A = Active ใช้งานI = InActive ไม่ใช้งาน |  |  |  |
| 14 |  | process_status | varchar | 10 | N | สถานะการอนุมัติ |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1002000 |  |  |  | APRV |  | suthanee.sa06/05/2024 |  |
| 15 |  | start_date | date |  | Y | วันที่เริ่มสัญญาประกันภัยต่อ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 16 |  | expire_date | date |  | Y | วันที่สิ้นสุดสัญญาประกันภัยต่อ |  |  |  |  |  |  | 2099-12-31 |  |  |  |
| 17 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 18 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 19 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 20 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307934988 | Functional Specification > 04. Persistence Specification. > Configuration > cf_reinsurer_history =====
| Database | ri group | Link Previous Version | - |
| Table | cf_reinsurer_history | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0v | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลรายการเปลี่ยนสถานะของ reinsurer |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_reinsurer_history_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_reinsurer_id | int8 | default by data type | Y | id ของรายการ reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | his_action | Varchar | 10 | Y | สถานะของรายการที่ถูกเปลี่ยน |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1002000 |  |  |  | APRV |  |  |  |
| 4 |  | his_remark | Varchar | 255 | N | หมายเหตุจากการพิจารณารายการ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 7 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1291420798 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_email =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_email | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | config email |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | email_code | varchar | 50 | Y | รหัสสำหรับแยกหัวข้อ Email |  |  |
| 2 |  | email_subject | varchar | 200 | Y | Subject ของอีเมล |  |  |
| 3 |  | email_from | varchar | 200 | Y | อีเมลจาก | appservice@ocean.co.th |  |
| 4 |  | email_to | varchar | 200 | N | อีเมลถึง | appservice@ocean.co.th |  |
| 5 |  | email_cc | varchar | 200 | N | ใช้เฉพาะ SIT | appservice@ocean.co.th |  |
| 6 |  | email_env | varchar | 10 | Y | กำหนดการส่งอีเมลตาม Environment | DEV | DEVSITUATPROD |
| 7 |  | status | varchar | 1 | Y | สถานะใช้งาน/ไม่ใช้งาน | A | A = ใช้งานI = ไม่ใช้งาน |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่สร้างรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้สร้างรายการ | boss |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |
*เป็น script adhoc ไม่ต้องเปิด Jira initial data ให้ dev แต่วัน golive ให้เปิด script initial ไปให้ ITD


===== PAGE 1336967207 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_nob =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_nob | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-04-27 | Description | เก็บข้อมูลประเภทธุรกิจของบริษัทประกันกลุ่ม ในกรณีที่ไม่มี DBD Code |
| Updated By |  |  | เพิ่มข้อมูลโดยการแจ้ง ITD ได้เลย (Adhoc) |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | rig_nob_id | int | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |
| 3 |  | type_business_th | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาไทย | มหาวิทยาลัยและสถาบันอุดมศึกษาอื่นๆ |  |
| 4 |  | type_business_en | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ | University | ผู้ใช้งานบันทึกข้อมูลจากหน้าจอจัดการ |
| 5 |  | remark | varchar | 250 | N | หมายเหตุ |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1319600762 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_pc_treaty =====
| Database | group ri | Link Previous Version | - |
| Table | cf_rig_pc_treaty | Data Source | - |
| Project Name | โครงการ Individual New RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 12/02/2026 | Description | เก็บข้อมูล Treaty ที่ต้องประมวลผล Profit Commission |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_pc_treaty_id | int8 |  | Y | id ของ Record |  |  |  |  |  |  | 1 | auto generate |  |  |
| 2 | FK | cf_treaty_id | int8 |  | Y | id ของ Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | treaty_code | varchar | 50 | Y | ชื่อ Code ของ Treaty |  |  |  |  |  |  |  |  |  |  |
| 4 |  | status | varchar | 1 | Y | สถานะของ Profit commA = Active สามารถประมวลผลได้I = Inactive ไม่สามารถประมวลผล |  |  |  |  |  |  |  |  |  |  |
| 5 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1291420362 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_template_field =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_template_field | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | config template field |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | cf_template_field_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | cf_template_file_id | numeric | 8 | Y | cf_template_file pk | 1 | cf_rig_template_file.cf_template_file_id |
| 3 |  | cf_template_sheet_id | numeric | 8 | N | cf_template_sheet pk | 1 | cf_rig_template_sheet.cf_template_sheet_id |
| 4 |  | seq_no | numeric | 4 | Y | ลำดับของ column | 1 |  |
| 5 |  | field_name | varchar | 50 | Y | ชื่อ column | No. |  |
| 6 |  | data_type | varchar | 50 | Y | ประเภทของข้อมูลใน column | varchar |  |
| 7 |  | format_data_type | varchar | 50 | N | Format ของข้อมูลใน column สำหรับ กรณี export | % |  |
| 8 |  | nullable_flag | boolean |  | Y | Flag null or notnull | TRUE | if true then nullif false then notnull |
| 9 |  | db_table | varchar | 50 | Y | Landing table | tx_landing_dt |  |
| 10 |  | db_field | varchar | 100 | Y | Landing field | row_no |  |
| 11 |  | display_flag | boolean |  | Y | Flag สำหรับกำหนดการ validate field_name | TRUE | if true then validate field_nameelse then do nothing |
| 12 |  | order_by_flag | boolean |  | N | Flag สำหรับกำหนด default order by | TRUE | if true then order by {field_name}else then do nothing |
| 13 |  | desc_or_asc | varchar | 10 | N | Flag สำหรับกำหนด default order by desc or asc | desc | if desc then order by descendingif asc then order by ascending |
| 14 |  | seq_order | numeric | 4 | N | ลำกับการ order by | 1 | if order_by_flag = true then read seq_orderelse then do nothingif order_by_flag = true and set seq_order = 1 then order by as first field |
| 15 |  | begin_date | date |  | Y | วันที่เริ่มใช้งาน Config | 2023-06-04 |  |
| 16 |  | expire_date | date |  | Y | วันที่สิ้นสุดการใช้งาน Config | 2999-12-31 |  |
| 17 |  | verify_header_flag | boolean |  | N | ต้องการตรวจสอบ header ของไฟล์หรือไม่ | FALSE |  |
| 18 |  | version | varchar | 50 | Y | version ของฟิลด์ | 1 | กรณีที่ generate ในส่วน version 1 จะ where condition version in ('1')กรณีที่ generate ในส่วน version 2 จะ where condition version in ('1','2')กรณีที่ generate ในส่วน version n จะ where condition version in ('1','2',...,'n') |
| 19 |  | text_align | varchar | 10 | N | รูปแบบการจัดข้อความ | left | leftrightcenter |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-04 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | boss |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-04 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |


===== PAGE 1291420392 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_template_file =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_template_file | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | config file name |
| Updated By | pongsathorm.pa |  |  |
| Updated Date (yyyy-mm-dd ) | 2025-10-15 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | cf_template_file_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | template_file_name | varchar | 255 | Y | Template file name | {YEAR}{MM}_Master Group Policy | YEAR = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits |
| 3 |  | verify_name_format | boolean |  | Y | ตรวจสอบ Format ชื่อไฟล์หรอไม่ | False | True = ตรวจสอบFalse = ไม่ตรวจสอบ |
| 4 |  | file_type | varchar | 10 | Y | นามสกุลของไฟล์ | csv | csvxlsx |
| 5 |  | import_export | varchar | 1 | Y | ประเภทของไฟล์ | I | I = ImportE = Export |
| 6 |  | status | varchar | 1 | Y | สถานะการใช้งาน Template | A | A = ActiveI = InActive |
| 7 |  | report_type | varchar | 3 | Y | ประเภทรายงาน | MLD | MLD = Master landingELD = Estimate landingALD = Actual landing |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-04 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | boss |  |
| 3 |  | updated_date | timestamp |  | N | วันที่อัพเดทรายการ | 2023-06-04 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |


===== PAGE 1291420419 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_template_sheet =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_template_sheet | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | config sheet name |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | cf_template_sheet_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | cf_template_file_id | numeric | 8 | Y | cf_template_file pk | 1 | cf_rig_template_file.cf_template_file_id |
| 3 |  | sheet_name | varchar | 50 | Y | ชื่อ sheet | Base_plan |  |
| 4 |  | seq_no | numeric | 4 | Y | ลำดับของ sheet | 1 |  |
| 5 |  | hd_row_count | numeric | 4 | Y | จำนวนบรรทัดของ header | 1 |  |
| 6 |  | begin_date | date |  |  | วันที่เริ่มใช้งาน Config | 2023-06-04 |  |
| 7 |  | expire_date | date |  |  | วันที่สิ้นสุดการใช้งาน Config | 2999-12-31 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-04 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | boss |  |
| 3 |  | updated_date | timestamp |  | N | วันที่อัพเดทรายการ | 2023-06-04 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |


===== PAGE 1307934990 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลหลัก Treaty |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_reinsurer_id | int8 | default by data type | Y | id ของ Reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 | Index | treaty_code | Varchar | 50 | Y | ชื่อ Treaty |  |  |  |  |  |  | THREL_Grp_CL_Cbank |  |  |  |
| 4 |  | contract_name | Varchar | 255 | Y | ตัวย่อบริษัท Reinsurer |  |  |  |  |  |  | THREL_Grp_CL_Cbank |  |  |  |
| 5 |  | process_status | Varchar | 10 | Y | สถานะ Process อนุมัติใช้งาน |  |  | Lookup ที่ cf_lookup_catalog parent_id = 1001200 |  |  |  | APRV |  |  |  |
| 6 |  | status | Varchar | 1 | N | สถานะใช้งานของรายการ |  |  |  |  |  |  | A = Active ใช้งาน I = InActive ไม่ใช้งาน |  |  | Default = SENT |
| 7 |  | approve | boolean |  | N | สถาน Approve ของ Treaty ถ้า Approve แล้วอย่างน้อย 1 ครั้ง จะเป็น True ตลอดไป |  |  |  |  |  |  |  |  |  |  |
| 8 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 9 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 10 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 11 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935007 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_cond_dt =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_cond_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลตั้งค่า RI Condition |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_cond_dt_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_cond_hd_id | int8 | default by data type | Y | id ของ Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | layer | Varchar | 10 | Y | Layer ของ condition |  |  |  |  |  |  | L1 |  |  |  |
| 4 |  | minimum | numeric | 20,2 | Y | ค่า SA น้อยสุดของ Layer |  |  |  |  |  |  | 100000.00 |  |  |  |
| 5 |  | maximum | numeric | 20,2 | Y | ค่า SA มากสุดของ Layer |  |  |  |  |  |  | 100000.00 |  |  |  |
| 6 |  | percent_re | numeric | 5,2 | Y | ค่า Percentage Reinsurance |  |  |  |  |  |  | 100.00 |  |  |  |
| 7 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 8 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 9 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 10 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935005 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_cond_hd =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_cond_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลตั้งค่า RI Condition |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_cond_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id ของ Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | ri_method | Varchar | 10 | Y | id ของ Reinsurer |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1000600 |  |  |  | QSSUR |  |  |  |
| 4 |  | min_sum_assured | numeric | 20,2 | Y | ตัวย่อบริษัท Reinsurer |  |  |  |  |  |  | 100000.00 |  |  |  |
| 5 |  | ri_com_rate | numeric | 5,2 | Y | ตัวย่อของ Treaty |  |  |  |  |  |  | 100.00 |  |  |  |
| 6 |  | percent_profit_comm | numeric | 5,2 | Y | ชื่องของ treaty |  |  |  |  |  |  | 100.00 |  |  |  |
| 7 |  | percent_admin_expense | numeric | 5,2 | Y | ชื่อของสัญญาประกันภัยต่อ |  |  |  |  |  |  | 100.00 |  |  |  |
| 8 |  | unearn_premium | numeric | 5,2 | Y | วันที่เริ่มสัญญาประกันภัยต่อ |  |  |  |  |  |  | 100.00 |  |  |  |
| 9 |  | effective_date_from | date |  | Y | วันที่สิ้นสุดสัญญาประกันภัยต่อ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 10 |  | effective_date_to | date |  | Y | จำนวนต่ำสุดของ SAR |  |  |  |  |  |  | 2099-06-04 |  |  |  |
| 11 |  | status | Varchar | 1 | Y | จำนวนสูงสุดของ SAR |  |  |  |  |  |  | A = Active ใช้งานI = InActive ไม่ใช้งานD = Draft อยู่ระหว่างแก้ไข |  |  |  |
| 12 |  | child_id | int8 | default by data type | N | id เดิมก่อนแก้ไข |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 2 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 4 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307934995 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_dt =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บตั้งค่ารายละเอียดแต่ละหัวข้อของ Treaty |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 18/03/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_dt | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id ของ Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | status_general | boolean |  | Y | สถานะเปิดใช้งาน ตั้งค่าตั้งค่า general |  |  |  |  |  |  | TRUE | Default = TRUE |  |  |
| 4 |  | process_status_general | Varchar | 50 | Y | สถานะอนุมัติข้อมูล |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1001200 |  |  |  | APRV |  |  |  |
| 5 |  | status_condition | boolean |  | N | สถานะเปิดใช้งาน ตั้งค่าตั้งค่า RI Condition |  |  |  |  |  |  | TRUE |  |  |  |
| 6 |  | process_status_condition | Varchar | 50 | N | สถานะอนุมัติข้อมูล |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1001200 |  |  |  | APRV |  |  |  |
| 7 |  | status_policy | boolean |  | N | สถานะเปิดใช้งาน ตั้งค่าตั้งค่ากรมธรรม์ |  |  |  |  |  |  | TRUE |  |  |  |
| 8 |  | process_status_policy | Varchar | 50 | N | สถานะอนุมัติข้อมูล |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1001200 |  |  |  | APRV |  |  |  |
| 9 |  | status_ri_premium | boolean |  | N | สถานะเปิดใช้งาน ตั้งค่า RI Premium Rate |  |  |  |  |  |  | TRUE |  |  |  |
| 10 |  | process_status_ri_premium | Varchar | 50 | N | สถานะอนุมัติข้อมูล |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1001200 |  |  |  | APRV |  |  |  |
|  |  | status | Varchar | 1 | N |  |  |  | A = Active ใช้งานD = Draft อยู่ระหว่างแก้ไข รออนุมัติI = Inactive ไม่ใช้งาน |  |  |  |  |  |  |  |
| 11 |  | created_date | Timestamp |  |  | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 12 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 13 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 14 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1313144838 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_general =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_general | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 16/01/2026 | Description | สำหรับเก็บข้อมูลทั่วไป Treaty |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_general_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id ของ Reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | benefit | Varchar | 50 | Y | benefit ของ Treaty |  |  |  |  |  |  | 1,2,3,4,5 |  |  |  |
| 4 |  | start_date | date |  | Y | ช่วงของวันที่ใช้งาน Treaty |  |  |  |  |  |  | THREL_Grp_CL_Cbank |  |  |  |
| 5 |  | expire_date | date |  | Y | ช่วงของวันที่ใช้งาน Treaty |  |  |  |  |  |  | APRV |  |  |  |
| 6 |  | status | Varchar | 1 | N | สถานะใช้งาน |  |  |  |  |  |  | A = Active ใช้งาน I = InActive ไม่ใช้งานD = Draft อยู่ระหว่างแก้ไข |  |  | Default = SENT |
| 7 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 8 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 9 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 10 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935011 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_policy_hd =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_policy_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลตั้งค่า RI Condition |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_policy_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | usage_process_status | boolean |  | Y | สถานะการนำกรมธรรม์ไปประมวลผล |  |  |  |  |  |  | A = Active ใช้งานI = InActive ไม่ใช้งาน |  |  |  |
| 4 |  | policy_no | Varchar | 20 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | 153198 |  |  |  |
| 5 |  | reinsurer_no | Varchar | 10 | Y | รหัส Reinsurer |  |  |  |  |  |  | TG010 |  |  |  |
| 6 |  | coverage_period_from | date |  | Y | ช่วงของวันที่คุ้มครองของกรมธรรม์ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 7 |  | coverage_period_to | date |  | Y | ช่วงของวันที่คุ้มครองของกรมธรรม์ |  |  |  |  |  |  | 2099-12-09 |  |  |  |
| 8 |  | previous_policy | Varchar | 20 | N | กรมธรรม์ก่อนหน้า |  |  |  |  |  |  | 1 |  |  |  |
| 9 |  | policy_name | Varchar | 100 | Y | ชื่อกรมธรรม์ |  |  |  |  |  |  | Ocean Life Insurance Public Company Limited (welfare group) |  |  |  |
| 10 |  | code_name | Varchar | 50 | N | ชื่อย่อกรมธรรม์ |  |  |  |  |  |  | OLI |  |  |  |
| 11 |  | com_date | date |  | Y | วันที่เริ่มต้นสัญญา |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 12 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  | 1 |  |  |  |
| 13 |  | age_limit | numeric | 3 | N | ข้อกำหนด อายุมากที่สุด ของกรมธรรม์ |  |  |  |  |  |  | 70 |  |  |  |
| 14 |  | occ_class | numeric | 1 | N | ข้อกำหนด Occupation class ของกรมธรรม์ |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1000700 |  |  |  | 1 |  |  |  |
| 15 |  | cert_no_incompliant | Varchar | 100 | N | กรมธรรม์ที่ยกเว้นข้อกำหนด อายุมากที่สุด |  |  |  |  |  |  | 00001 , 00002 |  |  |  |
| 16 |  | remark | Varchar | 500 | N | หมายเหตุ |  |  |  |  |  |  |  |  |  |  |
| 17 |  | coverage | Varchar | 10 | N | ความคุ้มครอง |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1000800 |  |  |  | ADD1 |  |  |  |
| 18 |  | percent_add | numeric | 5,2 | N | Percent AD&D and Total Permanent Disability |  |  |  |  |  |  | 100.00 |  |  |  |
| 19 |  | murder_assault | numeric | 5,2 | N | Percent Murder & Assault (MA) |  |  |  |  |  |  | 100.00 |  |  |  |
| 20 |  | special_coverage | numeric | 5,2 | N | Percent Special Coverage |  |  |  |  |  |  | 100.00 |  |  |  |
| 21 |  | loss_finger | numeric | 5,2 | N | Percent Loss of one thumb and one index finger of the same hand |  |  |  |  |  |  | 100.00 |  |  |  |
| 22 |  | prem_motorcycle | numeric | 5,2 | N | Percent RI Premium Loading for Motorcycle |  |  |  |  |  |  | 100.00 |  |  |  |
| 23 |  | prem_war | numeric | 5,2 | N | Percent RI Premium Loading for War |  |  |  |  |  |  | 100.00 |  |  |  |
| 24 |  | prem_strike_riot | numeric | 5,2 | N | Percent RI Premium Loading for Strike and Riot |  |  |  |  |  |  | 100.00 |  |  |  |
| 25 |  | prem_sports_activities | numeric | 5,2 | N | Percent RI Premium Loading for Sports and Activities |  |  |  |  |  |  | 100.00 |  |  |  |
| 26 |  | prem_aircraft | numeric | 5,2 | N | Percent RI Premium Loading for Aircraft |  |  |  |  |  |  | 100.00 |  |  |  |
| 27 |  | discount_murder_assault | numeric | 5,2 | N | Percent Discount for MA |  |  |  |  |  |  | 100.00 |  |  |  |
| 28 |  | discount_group_vol | numeric | 5,2 | N | Percent Discount Group Volume |  |  |  |  |  |  | 100.00 |  |  |  |
| 29 |  | previous_manual | boolean | 5,2 | N | สถานะการกำหนดกรมธรรม์ก่อนหน้า |  |  |  |  |  |  | TRUE = User กรอกมือFALSE = User ค้นหาจากระบบ |  |  |  |
| 30 |  | status | Varchar | 1 | Y |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | child_id | int8 | default by data type | N | id เดิมก่อนแก้ไข |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 2 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 4 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935025 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_prem_rate_dt =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_prem_rate_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 16/01/2026 | Description | สำหรับเก็บข้อมูลรายละเอียดตั้งค่า RI Premium Rate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_prem_rate_dt_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_prem_rate_hd_id | int8 | default by data type | Y | id ของ Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | type | Varchar | 50 | Y | ประเภทความคุ้มครอง |  |  |  |  |  |  | ADD1 |  |  |  |
| 4 |  | occ_class | numeric | 1 | Y | ชั้นอาชีพ |  |  |  |  |  |  | 1 |  |  |  |
| 5 |  | min_age | numeric | 3 | Y | อายุต่ำสุดในช่วง |  |  |  |  |  |  | 1 |  |  |  |
| 6 |  | max_age | numeric | 3 | Y | อายุมากสุดในช่วง |  |  |  |  |  |  | 20 |  |  |  |
| 7 |  | premium_rate | numeric | 10,4 | Y | Premium Rate |  |  |  |  |  |  | 1.245 |  |  |  |
| 8 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 9 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 10 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 11 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935016 | Functional Specification > 04. Persistence Specification. > Configuration > cf_rig_treaty_prem_rate_hd =====
| Database | ri group | Link Previous Version | - |
| Table | cf_rig_treaty_prem_rate_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลตั้งค่า RI Premium Rate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_rig_treaty_prem_rate_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id Temp Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | effective_date_from | date |  | Y | ช่วงของวันที่คุ้มครองของกรมธรรม์ที่เข้าเงื่อนไข RI Premium Rate |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 4 |  | effective_date_to | date |  | Y | ช่วงของวันที่คุ้มครองของกรมธรรม์ที่เข้าเงื่อนไข RI Premium Rate |  |  |  |  |  |  | 2099-12-09 |  |  |  |
| 5 |  | status | Varchar | 1 | Y | สถานะการใช้งาน |  |  |  |  |  |  | A = Active ใช้งานI = InActive ไม่ใช้งานD = Draft อยู่ระหว่างแก้ไข |  |  |  |
| 6 |  | child_id | int8 | default by data type | N | id เดิมก่อนแก้ไข |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 2 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  | 2024-12-09 |  |  |  |
| 4 |  | updated_by | Varchar | 50 | N | ผู้อัพเดทรายการล่าสุด |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1307935028 | Functional Specification > 04. Persistence Specification. > Configuration > cf_treaty_history =====
| Database | ri group | Link Previous Version | - |
| Table | cf_treaty_history | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0v | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 22/12/2025 | Description | สำหรับเก็บข้อมูลรายการเปลี่ยนสถานะของ Treaty |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | cf_treaty_history_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_rig_treaty_id | int8 | default by data type | Y | id ของรายการ reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | his_action | Varchar | 10 | Y | สถานะของรายการที่ถูกเปลี่ยน |  |  | Lookup ที่ cf_lookup_catalogparent_id = 1002000 |  |  |  | APRV |  |  |  |
| 4 |  | his_remark | Varchar | 255 | N | หมายเหตุจากการพิจารณารายการ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 7 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |


===== PAGE 1291420743 | Functional Specification > 04. Persistence Specification. > Master =====
- (ยกเลิก)ms_rig_nature_business
- ms_country
- ms_formular
- ms_rig_process


===== PAGE 1302593538 | Functional Specification > 04. Persistence Specification. > Master > (ยกเลิก)ms_rig_nature_business =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_nature_business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-27 | Description | เก็บข้อมูลประเภทธุรกิจของบริษัทประกันกลุ่ม |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 12/02/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | ms_rig_nature_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | dbd_code | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | 80309 |  |
| 3 |  | type_business_th | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาไทย | มหาวิทยาลัยและสถาบันอุดมศึกษาอื่นๆ |  |
| 4 |  | type_business_en | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ | University | ผู้ใช้งานบันทึกข้อมูลจากหน้าจอจัดการ |
| 5 |  | remark | varchar | 250 | N | หมายเหตุ |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1325859414 | Functional Specification > 04. Persistence Specification. > Master > ms_country =====
| Database | groupri | Link Previous Version | - |
| Table | ms_country | Data Source | - |
| Project Name | โครงการ Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 11/03/2026 | Description | เก็บข้อมูล รายชื่อประเทศ |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | country_code | varchar | 50 | Y | Code ของประเทศ |  |  |  |  |  |  | AUTCHNJPN |  |  |  |
| 2 |  | country_name_en | varchar | 255 | Y | ชื่อประเทศภาษาอังกฤษ |  |  |  |  |  |  | AustriaChinaJapan |  |  |  |
| 3 |  | country_name_th | varchar | 255 | Y | ชื่อประเทศภาษาไทย |  |  |  |  |  |  | ออสเตรียจีนญี่ปุ่น |  |  |  |
| 4 |  | location_code | varchar | 1 | Y | Code ของที่ตั้งประเทศ |  |  |  |  |  |  | L = LocalF = Foreign |  |  |  |
| 5 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 6 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
Data Sheet
https://docs.google.com/spreadsheets/d/191aUM8ELKCQZnDQF9DpwVPAbUQcTsei510ARGUg1flw/edit?gid=1081068945#gid=1081068945


===== PAGE 1317110105 | Functional Specification > 04. Persistence Specification. > Master > ms_formular =====
| Database | groupri | Link Previous Version | - |
| Table | ms_formular | Data Source | - |
| Project Name | โครงการ group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | bodin.it | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 02/02/2026 | Description | เก็บข้อมูล รายการสูตรของแต่ละค่าคำนวน |
| Updated By | bodin.it |  |  |
| Updated Date (yyyy-mm-dd ) | 02/02/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | FunctionTransform Data | Example | Remark |
| 1 | PK | ms_formula_id | int8 | default by data type | Y | id ของ Record |  | 3000101 |  |
| 2 | PK | treaty_code | Varchar | 50 | Y | ชื่อ Treaty |  | GIB_Grp_Direct_EB |  |
| 3 |  | formula_display | varchar | 255 | Y | ค่าคำนวณที่นำไปแสดงผลที่หน้าจอระบบ |  | ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX}) |  |
| 4 |  | formula | varchar | 255 | Y | ค่าคำนวณสำหรับนำไปใช้ประมวลผลต่อ |  | ({L2_PER} / 100) * (SUM_INSURED_ACCIDENT - {L1_INSU_MAX}) |  |
| 5 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  | 2023-06-04 |  |
| 6 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  | boss |  |
Data Sheet
https://docs.google.com/spreadsheets/d/1c6OhFMDl9XHfilA_gwk6KTC6qLCy-G_RMxqHT8MepYI/edit#gid=449823875


===== PAGE 1291420769 | Functional Specification > 04. Persistence Specification. > Master > ms_rig_process =====
| Database | ri group | Link Previous Version | - |
| Table | ms_rig_process | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | เก็บข้อมูลรายการ Batch Process |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | ms_process_id | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | process_code | varchar | 20 | Y | รหัสของ Batch Process | RIG_AUTO_01 |  |
| 3 |  | process_name | varchar | 255 | Y | ชื่อของ Batch Process | นำเข้าข้อมูลกรมธรรม์ประกันกลุ่ม |  |
| 4 |  | type | varchar | 1 | Y | ประเภทของ Batch Process (A = Auto, M = Manual) |  | A = AutoM = Manual |
| 5 |  | seq_landing | numeric | 3 | N | ลำดับประมวลผล | 1 |  |
| 6 |  | status_landing | varchar | 1 | N | สถานะการนำไปเป็นลำดับประมวลผล Auto | A | A = นำไปเป็นลำดับประมวลผล AutoI = ไม่นำไปเป็นลำดับประมวลผล Auto |
| 7 |  | process_group | varchar | 20 | N | กลุ่มของ Batch Process | LANDING, SNAPSHOT, STAGING |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-04 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | boss |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-04 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการล่าสุด | boss |  |


===== PAGE 1291419961 | Functional Specification > 04. Persistence Specification. > Transaction =====
- 01. View OceanLife
- 02. ESB feed : Oceanlife to RI Group
- 03. Snapshot Landing
- 04. Staging Tables
- 05. Prevalidated Table
- 06. Output Table
- lg_tracking_process
- tx_rig_act_claim_cms
- tx_rig_est_claim_cms
- tx_rig_nature_business
- tx_rig_policy_base
- tx_rig_process_hd
- tx_rig_profit_comm_base


===== PAGE 1297973349 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife =====
Table view ที่ feed dump มาจากระบบประกันกลุ่มทุกวัน
Ref: ประเมิน view


===== PAGE 1297973407 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertAlteration =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_CertAlteration | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
/*Edit V2 siriporn 23-12-2025 ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)*/    
CREATE VIEW [dbo].[RIG_View_CertAlteration]
AS
WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
	select PolicyNo, PolicyYear,-- PromiseDate,  ReInsur_No, ExpireDate,
	       'GLPOLICY' AS SourceTable 
	from GLPolicy Pol 
	where isnull(ReInsur_No,'') <> '' 
	--and Pol.policyno = 'gh125'
	and PromiseDate >= Dateadd(Year,-4,Getdate()) /*Limite Promisedate ย้อนหลัง 4 ปี*/
	union all
	select PolSub.PolicyNo, Pol.PolicyYear, --Pol.PromiseDate, Pol.ReInsur_No, Pol.ExpireDate ,
	       'GLOLDPOLICY' AS SourceTable 
	from GLOldPolicy Pol inner join GLPolicy PolSub
	on PolSub.PolicyNo = Pol.PolicyNo and isnull(Pol.PolicyYear,0) >= isnull(PolSub.PolicyYear,0) - 2
	where isnull(Pol.ReInsur_No,'') <> ''  
	and Pol.PromiseDate >= Dateadd(Year,-4,Getdate()) /*Limite Promisedate ย้อนหลัง 4 ปี*/
), -- จัดเรียงกรมธรรม์เพื่อแบ่งลำดับปี
 
 AllCertificates AS ( 
     SELECT Head.DocNo, Head.DocDate, Head.TransDate, Head.MthStatus, Head.PolicyNo, Head.PolicyYear, Head.DocStatus,  
			Detail.PolicyCode,  Detail.CertificCustNo, Detail.Custcode,   
			Detail.CompCodeBefore, Detail.CompCodeAfter, Detail.DeptCodeBefore, Detail.DeptCodeAfter, Detail.StatusAfter, Detail.StatusBefore,   			
			Detail.SalaryBefore, Detail.SalaryAfter, Detail.EmpNoBefore, Detail.EmpNoAfter ,
			Detail.ChangeDateBefore, Detail.ChangeDateAfter, Detail.EffectDate, Detail.EffectDateBefore, 
			/*Life*/
			Detail.ClassNoBefore, Detail.ClassNoAfter, Detail.CountOfDate, 
			/*Insure*/
			Detail.LifeInsurBefore, Detail.AccInsurBefore, Detail.MedInsurBefore, Detail.TPDInsurBefore, 
            Detail.LifeInsurAfter, Detail.AccInsurAfter, Detail.MedInsurAfter, Detail.TPDInsurAfter,
            /*Premium*/
			Detail.LifePremBefore, Detail.AccPremBefore, Detail.MedPremBefore, Detail.TPDPremBefore,  Detail.LifeE1PremBefore,   
			Detail.LifePremAfter,  Detail.AccPremAfter,  Detail.MedPremAfter, Detail.TPDPremAfter, Detail.LifeE1PremAfter,  
			Detail.LifePremDiff, Detail.AccPremDiff, Detail.MedPremDiff, Detail.TPDPremDiff, Detail.LifeE1PremDiff, 
			Detail.LifeE1RateBefore,  Detail.LifeE1RateAfter, 
			/*Health*/
			Detail.MedPlanBefore, Detail.MedRateBefore, Detail.MedPlanAfter, Detail.MedRateAfter, 
			/*Premium Health*/ 
			Detail.MedPremIPBefore, Detail.MedPremOPBefore, Detail.Dental_Before AS DentalBefore, 
			 Detail.MedPremIPAfter, Detail.MedPremOPAfter, Detail.Dental_After AS DentalAfter,
			Detail.MedPlanRateIPPremDiff, Detail.MedPlanRateOPPremDiff,   Detail.Dental_Diff AS DentalDiff, 			 
			Detail.Empyer,  Detail.Empyee
	FROM GLStatusOfChangeHead AS Head WITH (nolock) INNER JOIN GLStatusOfChange AS Detail WITH (nolock) ON Head.DocNo = Detail.DocNo 
    INNER JOIN AllPolicies  
    ON Head.PolicyNo = AllPolicies.PolicyNo
    AND Head.PolicyYear = AllPolicies.PolicyYear
    WHERE (Head.DocStatus <> 2) 
) 
select  ROW_NUMBER() OVER (
        ORDER BY C.PolicyNo ASC, C.PolicyYear DESC ,C.CertificCustNo ASC
        ) AS RigVAlterId,   * ,
        GETDATE() as CreatedDate,
        'SYSTEM' as CreatedBy,
        GETDATE() as UpdatedDate,
        'SYSTEM' as UpdatedBy
FROM AllCertificates C 
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVAlterId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | PK | DocNo | varchar | 20 | Y | เลขที่เอกสาร (MM64-XXXXX) |  |  |
| 3 |  | DocDate | datetime |  | Y | วันที่เอกสาร (Alteration Date) |  |  |
| 4 |  | TransDate | datetime |  | Y | วันที่ทำรายการ |  |  |
| 5 |  | MthStatus | numeric | 2 | Y | สถานะ |  |  |
| 6 |  | PolicyNo | varchar | 8 | Y | เลขที่กรมธรรม์ |  |  |
| 7 |  | PolicyYear | numeric | 4 | N | ปีกรมธรรม์ |  |  |
| 8 |  | DocStatus | numeric | 2 | Y | สถานะเอกสาร |  |  |
| 9 |  | PolicyCode | numeric | 1 | Y | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |
| 10 |  | CertificCustNo | varchar | 8 | Y | เลขที่ี่ Cerno สมาชิก |  |  |
| 11 |  | CustCode | varchar | 10 | Y | เลขที่ Custcode สมาชิก |  |  |
| 12 |  | CompCodeBefore | varchar | 10 | N | รหัสบริษัทก่อนการเปลี่ยนแปลง |  |  |
| 13 |  | CompCodeAfter | varchar | 10 | Y | รหัสบริษัทหลังการเปลี่ยนแปลง |  |  |
| 14 |  | DeptCodeBefore | varchar | 10 | N | รหัสหน่วยงานก่อนการเปลี่ยนแปลง |  |  |
| 15 |  | DeptCodeAfter | varchar | 10 | Y | รหัสหน่วยงานหลังการเปลี่ยนแปลง |  |  |
| 16 |  | StatusAfter | varchar | 1 | Y | Status หลังการเปลี่ยนแปลง |  |  |
| 17 |  | StatusBefore | varchar | 1 | N | Status ก่อนการเปลี่ยนแปลง |  |  |
| 18 |  | SalaryBefore | numeric | 14,2 | Y |  |  |  |
| 19 |  | SalaryAfter | numeric | 14,2 | Y |  |  |  |
| 20 |  | EmpNoBefore | varchar | 30 | N | รหัสพนักงานก่อนการเปลี่ยนแปลง |  |  |
| 21 |  | EmpNoAfter | varchar | 30 | N | รหัสพนักงานหลังการเปลี่ยนแปลง |  |  |
| 22 |  | ChangeDateBefore | datetime |  | N | Change Date ก่อนการเปลี่ยนแปลง |  |  |
| 23 |  | ChangeDateAfter | datetime |  | Y | Change Date หลังการเปลี่ยนแปลง |  |  |
| 24 |  | EffectDate | datetime |  | Y | วันเดือนปีที่มีผลบังคับ |  |  |
| 25 |  | EffectDateBefore | datetime |  | N |  |  |  |
| 26 |  | ClassNoBefore | numeric | 1 | N | Class No. ก่อนการเปลี่ยนแปลง |  |  |
| 27 |  | ClassNoAfter | numeric | 1 | N | Class No. หลังการเปลี่ยนแปลง |  |  |
| 28 |  | CountOfDate | numeric | 4 | N | จำนวนวัน |  |  |
| 29 |  | LifeInsurBefore | numeric | 14,2 | N | ทุนชีวิต-ก่อนการเปลี่ยนแปลง |  |  |
| 30 |  | AccInsurBefore | numeric | 14,2 | N | ทุน อบ.-ก่อนการเปลี่ยนแปลง |  |  |
| 31 |  | MedInsurBefore | numeric | 14,2 | N | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |  |  |
| 32 |  | TPDInsurBefore | numeric | 14,2 | N | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง |  |  |
| 33 |  | LifeInsurAfter | numeric | 14,2 | N | ทุนชีวิต-หลังการเปลี่ยนแปลง |  |  |
| 34 |  | AccInsurAfter | numeric | 14,2 | N | ทุน อบ.-หลังการเปลี่ยนแปลง |  |  |
| 35 |  | MedInsurAfter | numeric | 14,2 | N | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |  |  |
| 36 |  | TPDInsurAfter | numeric | 14,2 | N | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง |  |  |
| 37 |  | LifePremBefore | numeric | 14,2 | N | เบี้ยชีวิต-ก่อนการเปลี่ยนแปลง |  |  |
| 38 |  | AccPremBefore | numeric | 14,2 | N | เบี้ย อบ.-ก่อนการเปลี่ยนแปลง |  |  |
| 39 |  | MedPremBefore | numeric | 14,2 | N | เบี้ยค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |  |  |
| 40 |  | TPDPremBefore | numeric | 14,2 | N | เบี้ยทุพพลภาพ-ก่อนการเปลี่ยนแปลง |  |  |
| 41 |  | LifeE1PremBefore | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |  |  |
| 42 |  | LifePremAfter | numeric | 14,2 | N | เบี้ยชีวิต-หลังการเปลี่ยนแปลง |  |  |
| 43 |  | AccPremAfter | numeric | 14,2 | N | เบี้ย อบ.-หลังการเปลี่ยนแปลง |  |  |
| 44 |  | MedPremAfter | numeric | 14,2 | N | เบี้ยค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |  |  |
| 45 |  | TPDPremAfter | numeric | 14,2 | N | เบี้ยทุพพลภาพ-หลังการเปลี่ยนแปลง |  |  |
| 46 |  | LifeE1PremAfter | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |  |  |
| 47 |  | LifePremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยชีวิต |  |  |
| 48 |  | AccPremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยอบ. |  |  |
| 49 |  | MedPremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยค่ารักษาฯ..จาก อบ. |  |  |
| 50 |  | TPDPremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยทุพพลภาพ |  |  |
| 51 |  | LifeE1PremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต |  |  |
| 52 |  | LifeE1RateBefore | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |  |  |
| 53 |  | LifeE1RateAfter | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |  |  |
| 54 |  | MedPlanBefore | numeric | 4 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง |  |  |
| 55 |  | MedRateBefore | varchar | 1 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง |  |  |
| 56 |  | MedPlanAfter | numeric | 4 | N | แผนสุขภาพหลังการเปลี่ยนแปลง |  |  |
| 57 |  | MedRateAfter | varchar | 1 | N | แผนสุขภาพหลังการเปลี่ยนแปลง |  |  |
| 58 |  | MedPremIPBefore | numeric | 14,2 | N | เบี้ยคนไข้ใน-ก่อนการเปลี่ยนแปลง |  |  |
| 59 |  | MedPremOPBefore | numeric | 14,2 | N |  |  |  |
| 60 |  | DentalBefore | numeric | 14,2 | N | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง |  |  |
| 61 |  | MedPremIPAfter | numeric | 14,2 | N | เบี้ยคนไข้ใน-หลังการเปลี่ยนแปลง |  |  |
| 62 |  | MedPremOPAfter | numeric | 14,2 | N | เบี้ยคนไข้นอก-หลังการเปลี่ยนแปลง |  |  |
| 63 |  | DentalAfter | numeric | 14,2 | N | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง |  |  |
| 64 |  | MedPlanRateIPPremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยคนไข้ใน |  |  |
| 65 |  | MedPlanRateOPPremDiff | numeric | 14,2 | N | ผลต่างของเบี้ยคนไข้นอก |  |  |
| 66 |  | DentalDiff | numeric | 14,2 | N | ผลต่างของเบี้ยทันตกรรม |  |  |
| 67 |  | Empyer | numeric | 14,2 | N | จำนวนเงินที่นายจ้างจ่ายให้ |  |  |
| 68 |  | Empyee | numeric | 14,2 | N | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย |  |  |
| ข้อมูลระบบ |  |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197418 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertAlteration > View2 =====
| No. | Attribute Name | Table | Field | Description |
| 1 | RigVAlterId | RIG_View_CertAlteration | RigVAlterId | เลขที่ Running |
| 2 | DocNo | RIG_View_CertAlteration | DocNo | เลขที่เอกสาร (MM64-XXXXX) |
| 3 | DocDate | RIG_View_CertAlteration | DocDate | วันที่เอกสาร (Alteration Date) |
| 4 | TransDate | RIG_View_CertAlteration | TransDate | วันที่ทำรายการ |
| 5 | MthStatus | RIG_View_CertAlteration | MthStatus | สถานะ |
| 6 | PolicyNo | RIG_View_CertAlteration | PolicyNo | เลขที่กรมธรรม์ |
| 7 | PolicyYear | RIG_View_CertAlteration | PolicyYear | ปีกรมธรรม์ |
| 8 | DocStatus | RIG_View_CertAlteration | DocStatus | สถานะเอกสาร |
| 9 | PolicyCode | RIG_View_CertAlteration | PolicyCode | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |
| 10 | CertificCustNo | RIG_View_CertAlteration | CertificCustNo | เลขที่ี่ Cerno สมาชิก |
| 11 | Custcode | RIG_View_CertAlteration | Custcode | เลขที่ Custcode สมาชิก |
| 12 | CompCodeBefore | RIG_View_CertAlteration | CompCodeBefore | รหัสบริษัทก่อนการเปลี่ยนแปลง |
| 13 | CompCodeAfter | RIG_View_CertAlteration | CompCodeAfter | รหัสบริษัทหลังการเปลี่ยนแปลง |
| 14 | DeptCodeBefore | RIG_View_CertAlteration | DeptCodeBefore | รหัสหน่วยงานก่อนการเปลี่ยนแปลง |
| 15 | DeptCodeAfter | RIG_View_CertAlteration | DeptCodeAfter | รหัสหน่วยงานหลังการเปลี่ยนแปลง |
| 16 | StatusAfter | RIG_View_CertAlteration | StatusAfter | Status หลังการเปลี่ยนแปลง |
| 17 | StatusBefore | RIG_View_CertAlteration | StatusBefore | Status ก่อนการเปลี่ยนแปลง |
| 18 | SalaryBefore | RIG_View_CertAlteration | SalaryBefore |  |
| 19 | SalaryAfter | RIG_View_CertAlteration | SalaryAfter |  |
| 20 | EmpNoBefore | RIG_View_CertAlteration | EmpNoBefore | รหัสพนักงานก่อนการเปลี่ยนแปลง |
| 21 | EmpNoAfter | RIG_View_CertAlteration | EmpNoAfter | รหัสพนักงานหลังการเปลี่ยนแปลง |
| 22 | ChangeDateBefore | RIG_View_CertAlteration | ChangeDateBefore | Change Date ก่อนการเปลี่ยนแปลง |
| 23 | ChangeDateAfter | RIG_View_CertAlteration | ChangeDateAfter | Change Date หลังการเปลี่ยนแปลง |
| 24 | EffectDate | RIG_View_CertAlteration | EffectDate | วันเดือนปีที่มีผลบังคับ |
| 25 | EffectDateBefore | RIG_View_CertAlteration | EffectDateBefore |  |
| 26 | ClassNoBefore | RIG_View_CertAlteration | ClassNoBefore | Class No. ก่อนการเปลี่ยนแปลง |
| 27 | ClassNoAfter | RIG_View_CertAlteration | ClassNoAfter | Class No. หลังการเปลี่ยนแปลง |
| 28 | CountOfDate | RIG_View_CertAlteration | CountOfDate | จำนวนวัน |
| 29 | LifeInsurBefore | RIG_View_CertAlteration | LifeInsurBefore | ทุนชีวิต-ก่อนการเปลี่ยนแปลง |
| 30 | AccInsurBefore | RIG_View_CertAlteration | AccInsurBefore | ทุน อบ.-ก่อนการเปลี่ยนแปลง |
| 31 | MedInsurBefore | RIG_View_CertAlteration | MedInsurBefore | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |
| 32 | TPDInsurBefore | RIG_View_CertAlteration | TPDInsurBefore | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง |
| 33 | LifeInsurAfter | RIG_View_CertAlteration | LifeInsurAfter | ทุนชีวิต-หลังการเปลี่ยนแปลง |
| 34 | AccInsurAfter | RIG_View_CertAlteration | AccInsurAfter | ทุน อบ.-หลังการเปลี่ยนแปลง |
| 35 | MedInsurAfter | RIG_View_CertAlteration | MedInsurAfter | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |
| 36 | TPDInsurAfter | RIG_View_CertAlteration | TPDInsurAfter | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง |
| 37 | LifePremBefore | RIG_View_CertAlteration | LifePremBefore | เบี้ยชีวิต-ก่อนการเปลี่ยนแปลง |
| 38 | AccPremBefore | RIG_View_CertAlteration | AccPremBefore | เบี้ย อบ.-ก่อนการเปลี่ยนแปลง |
| 39 | MedPremBefore | RIG_View_CertAlteration | MedPremBefore | เบี้ยค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |
| 40 | TPDPremBefore | RIG_View_CertAlteration | TPDPremBefore | เบี้ยทุพพลภาพ-ก่อนการเปลี่ยนแปลง |
| 41 | LifeE1PremBefore | RIG_View_CertAlteration | LifeE1PremBefore | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |
| 42 | LifePremAfter | RIG_View_CertAlteration | LifePremAfter | เบี้ยชีวิต-หลังการเปลี่ยนแปลง |
| 43 | AccPremAfter | RIG_View_CertAlteration | AccPremAfter | เบี้ย อบ.-หลังการเปลี่ยนแปลง |
| 44 | MedPremAfter | RIG_View_CertAlteration | MedPremAfter | เบี้ยค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |
| 45 | TPDPremAfter | RIG_View_CertAlteration | TPDPremAfter | เบี้ยทุพพลภาพ-หลังการเปลี่ยนแปลง |
| 46 | LifeE1PremAfter | RIG_View_CertAlteration | LifeE1PremAfter | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |
| 47 | LifePremDiff | RIG_View_CertAlteration | LifePremDiff | ผลต่างของเบี้ยชีวิต |
| 48 | AccPremDiff | RIG_View_CertAlteration | AccPremDiff | ผลต่างของเบี้ยอบ. |
| 49 | MedPremDiff | RIG_View_CertAlteration | MedPremDiff | ผลต่างของเบี้ยค่ารักษาฯ..จาก อบ. |
| 50 | TPDPremDiff | RIG_View_CertAlteration | TPDPremDiff | ผลต่างของเบี้ยทุพพลภาพ |
| 51 | LifeE1PremDiff | RIG_View_CertAlteration | LifeE1PremDiff | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต |
| 52 | LifeE1RateBefore | RIG_View_CertAlteration | LifeE1RateBefore | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |
| 53 | LifeE1RateAfter | RIG_View_CertAlteration | LifeE1RateAfter | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |
| 54 | MedPlanBefore | RIG_View_CertAlteration | MedPlanBefore | แผนสุขภาพก่อนการเปลี่ยนแปลง |
| 55 | MedRateBefore | RIG_View_CertAlteration | MedRateBefore | แผนสุขภาพก่อนการเปลี่ยนแปลง |
| 56 | MedPlanAfter | RIG_View_CertAlteration | MedPlanAfter | แผนสุขภาพหลังการเปลี่ยนแปลง |
| 57 | MedRateAfter | RIG_View_CertAlteration | MedRateAfter | แผนสุขภาพหลังการเปลี่ยนแปลง |
| 58 | MedPremIPBefore | RIG_View_CertAlteration | MedPremIPBefore | เบี้ยคนไข้ใน-ก่อนการเปลี่ยนแปลง |
| 59 | MedPremOPBefore | RIG_View_CertAlteration | MedPremOPBefore |  |
| 60 | DentalBefore | RIG_View_CertAlteration | DentalBefore | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง |
| 61 | MedPremIPAfter | RIG_View_CertAlteration | MedPremIPAfter | เบี้ยคนไข้ใน-หลังการเปลี่ยนแปลง |
| 62 | MedPremOPAfter | RIG_View_CertAlteration | MedPremOPAfter | เบี้ยคนไข้นอก-หลังการเปลี่ยนแปลง |
| 63 | DentalAfter | RIG_View_CertAlteration | DentalAfter | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง |
| 64 | MedPlanRateIPPremDiff | RIG_View_CertAlteration | MedPlanRateIPPremDiff | ผลต่างของเบี้ยคนไข้ใน |
| 65 | MedPlanRateOPPremDiff | RIG_View_CertAlteration | MedPlanRateOPPremDiff | ผลต่างของเบี้ยคนไข้นอก |
| 66 | DentalDiff | RIG_View_CertAlteration | DentalDiff | ผลต่างของเบี้ยทันตกรรม |
| 67 | Empyer | RIG_View_CertAlteration | Empyer | จำนวนเงินที่นายจ้างจ่ายให้ |
| 68 | Empyee | RIG_View_CertAlteration | Empyee | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย |
| 69 | CreatedDate | RIG_View_CertAlteration | CreatedDate | วันที่บันทึกรายการ |
| 70 | CreatedBy | RIG_View_CertAlteration | CreatedBy | ผู้บันทึกรายการ |
| 71 | UpdatedDate | RIG_View_CertAlteration | UpdatedDate | วันที่ปรับปรุงรายการ |
| 72 | UpdatedBy | RIG_View_CertAlteration | UpdatedBy | ผู้ปรับปรุงรายการ |


===== PAGE 1297973413 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertificateCust =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_CertificateCust | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
CREATE VIEW [dbo].[RIG_View_CertificateCust]
AS
/******************************************************************************
Author:      Unknown (Legacy Code)
Create Date: Unknown
Description: Unknown
Task:        Unknown -- ใส่เลข Task หลักที่สร้างครั้งแรกที่นี่

-- History (บันทึกการแก้ไข)
Date        Author          Task ID      Description
----------  --------------  -----------  --------------------------------------
----------  Unknown         -------      Initial: Original System Logic
2025-12-19  siriporn     Task #-         ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)
2025-12-24  siriporn     Task #35439     เพิ่มเงื่อนไขการดึงข้อมูลใน VIEW RIG_View_CertificateCust
                                         กรณีที่ Status = C
                                           ให้ดึงเฉพาะข้อมูลย้อนหลัง 5 ปีที่ Table : glcertificatecust,gloldcertificatecust Field : ChangeDate
                                         กรณีที่ Status = L
                                           ให้ดึงเฉพาะข้อมูลย้อนหลัง 5 ปี เทียบกับปีปัจจุบัน Table : glpolicy,gloldpolicy Field : LapseDate
2026-01-16  siriporn     Task #-         กรองทุก Status ไม่เกิน 5 ปี
2026-04-16  sataporn.pr  Task #64311     แก้ไขข้อมูลค่า NULL ให้เป็น 0.0000

******************************************************************************/

WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
    select PolicyNo, PolicyYear, PolicyStatus, LapseDate, --Promisedate,
           'GLPOLICY' AS SourceTable 
    from GLPolicy Pol 
    where isnull(ReInsur_No,'') <> ''  
    and PromiseDate >= dateadd(year,-5,getdate())
    --and Pol.policyno = 'GH5500'--'GH4961'
    union all
    select PolSub.PolicyNo, Pol.PolicyYear, Pol.PolicyStatus, Pol.LapseDate,
           'GLOLDPOLICY' AS SourceTable 
    from GLOldPolicy Pol inner join GLPolicy PolSub
    on PolSub.PolicyNo = Pol.PolicyNo and isnull(Pol.PolicyYear,0) >= isnull(PolSub.PolicyYear,0) - 2
    where isnull(Pol.ReInsur_No,'') <> '' 
    and Pol.PromiseDate >= dateadd(year,-5,getdate())
    --and Pol.policyno = 'GH5500'--'GH4961'
), -- จัดเรียงกรมธรรม์เพื่อแบ่งลำดับปี
  
 AllCertificates AS ( 
    -- ชุดข้อมูล C เดิม (รวม GLCertCust และ GLOldCertCust เข้ากับ Customer)
    SELECT
        GLCertCust.PolicyCode, GLCertCust.PolicyNo, GLCertCust.PolicyYear, GLCertCust.CertificCustNo, GLCertCust.CustCode,
        GLCertCust.ClassNo, GLCertCust.EffectDate, GLCertCust.TransDate, GLCertCust.ChangeDate, GLCertCust.LifeExtraRate,
        GLCertCust.LifeInsur, GLCertCust.AccInsur, GLCertCust.MedInsur, GLCertCust.TPDInsur, GLCertCust.LifeE1Prem,
        GLCertCust.LifePrem, GLCertCust.AccPrem, GLCertCust.MedPrem, GLCertCust.Age, GLCertCust.Status, 
        GLCertCust.TPDPrem, GLCertCust.MedPlanRateIPPrem, GLCertCust.MedPlanRateOPPrem, GLCertCust.Dental,  
        GLCertCust.NetEmployer, GLCertCust.NetEmployee,  
        Cust.CustCode as cusCustCode,Cust.CompCode , Cust.Sex ,Cust.Birthday
    FROM
        OceanLife.dbo.GLCertificateCust AS GLCertCust with (nolock)
    INNER JOIN
        OceanLife.dbo.Customer AS Cust  with (nolock)
        ON Cust.CustCode = GLCertCust.custCode
    INNER JOIN AllPolicies  
    ON GLCertCust.PolicyNo = AllPolicies.PolicyNo
    AND GLCertCust.PolicyYear = AllPolicies.PolicyYear
    WHERE (((AllPolicies.PolicyStatus = 'L') AND (AllPolicies.LapseDate >= dateadd(year,-5,getdate())))
    OR     ((GLCertCust.Status <> 'L') AND (GLCertCust.ChangeDate >= dateadd(year,-5,getdate())))
    --OR     (GLCertCust.Status NOT IN ('C','L')) 
          )
    UNION ALL
    -- ชุดที่ 2: ข้อมูลปีกรมธรรม์ที่เก่ากว่า (GLOldCertificateCust)
    SELECT
        GLCertCust.PolicyCode, GLCertCust.PolicyNo, GLCertCust.PolicyYear, GLCertCust.CertificCustNo, GLCertCust.CustCode,
        GLCertCust.ClassNo, GLCertCust.EffectDate, GLCertCust.TransDate, GLCertCust.ChangeDate, GLCertCust.LifeExtraRate,
        GLCertCust.LifeInsur, GLCertCust.AccInsur, GLCertCust.MedInsur, GLCertCust.TPDInsur, GLCertCust.LifeE1Prem,
        GLCertCust.LifePrem, GLCertCust.AccPrem, GLCertCust.MedPrem, GLCertCust.Age, GLCertCust.Status, 
        GLCertCust.TPDPrem, GLCertCust.MedPlanRateIPPrem, GLCertCust.MedPlanRateOPPrem, GLCertCust.Dental,  
        GLCertCust.NetEmployer, GLCertCust.NetEmployee,  
        Cust.CustCode as cusCustCode,Cust.CompCode , Cust.Sex ,Cust.Birthday
    FROM
        OceanLife.dbo.GLOldCertificateCust AS GLCertCust with (nolock)
    INNER JOIN
        OceanLife.dbo.Customer AS Cust with (nolock)
        ON Cust.CustCode = GLCertCust.custCode
    INNER JOIN AllPolicies  
    ON GLCertCust.PolicyNo = AllPolicies.PolicyNo
    AND GLCertCust.PolicyYear = AllPolicies.PolicyYear
    WHERE (((AllPolicies.PolicyStatus = 'L') AND (AllPolicies.LapseDate >= dateadd(year,-5,getdate())))
    OR     ((GLCertCust.Status <> 'L') AND (GLCertCust.ChangeDate >= dateadd(year,-5,getdate())))
    --OR     (GLCertCust.Status NOT IN ('C','L')) 
          )
) 
select  ROW_NUMBER() OVER (
        ORDER BY C.PolicyNo ASC, C.PolicyYear DESC ,C.CertificCustNo ASC
        ) AS RigVCertId,          
        C.CertificCustNo , 
        C.CustCode , 
        C.PolicyCode , 
        C.PolicyNo , 
        C.PolicyYear,
        C.ClassNo , 
        C.EffectDate , 
        C.TransDate , 
        C.ChangeDate , 
        ISNULL(C.LifeExtraRate, 0.00) AS LifeExtraRate,
	    ISNULL(C.LifeInsur, 0.00)     AS LifeInsur,
	    ISNULL(C.AccInsur, 0.00)      AS AccInsur,
	    ISNULL(C.MedInsur, 0.00)      AS MedInsur,
	    ISNULL(C.TPDInsur, 0.00)      AS TPDInsur,
	    ISNULL(C.LifeE1Prem, 0.00)    AS LifeE1Prem,
	    ISNULL(C.LifePrem, 0.00)      AS LifePrem,
	    ISNULL(C.AccPrem, 0.00)       AS AccPrem,
	    ISNULL(C.MedPrem, 0.00)       AS MedPrem ,
        C.Age ,
        C.Status, 
        ISNULL(C.TPDPrem, 0.00)       AS TPDPrem ,
        ISNULL(C.MedPlanRateIPPrem, 0.00) AS MedPlanRateIPPrem ,
        ISNULL(C.MedPlanRateOPPrem, 0.00) AS MedPlanRateOPPrem ,
        ISNULL(C.Dental, 0.00)        AS Dental , 
        ISNULL(C.NetEmployer, 0.00)   AS NetEmployer ,
        ISNULL(C.NetEmployee, 0.00)   AS NetEmployee ,
        C.CompCode ,
        C.Sex , 
        C.Birthday,
        GETDATE() as CreatedDate,
        'SYSTEM' as CreatedBy,
        GETDATE() as UpdatedDate,
        'SYSTEM' as UpdatedBy
FROM AllCertificates C with (nolock)
GO ]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVCertId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | CertificCustNo | varchar | 8 | Y | รหัสผู้เอาประกัน |  |  |
| 3 |  | CustCode | varchar | 10 | Y | รหัสลูกค้า |  |  |
| 4 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |
| 5 |  | PolicyNo | varchar | 8 | Y | เลขที่กธ. |  |  |
| 6 |  | PolicyYear | numeric | 4 | N | กธ. ปีที่ |  |  |
| 7 |  | ClassNo | numeric | 1 | N | Class No. |  |  |
| 8 |  | EffectDate | datetime | 8 | N | วันเดือนปีที่มีผลบังคับ |  |  |
| 9 |  | TransDate | datetime | 8 | N | วันเดือนปีที่ทำเอกสาร |  |  |
| 10 |  | ChangeDate | datetime | 8 | N | วันเดือนปีที่เปลี่ยนแปลง |  |  |
| 11 |  | LifeExtraRate | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ ชีวิต |  |  |
| 12 |  | LifeInsur | numeric | 14,2 | N | ทุนชีวิต |  |  |
| 13 |  | AccInsur | numeric | 14,2 | N | ทุน อบ. |  |  |
| 14 |  | MedInsur | numeric | 14,2 | N | ทุนค่ารักษาจาก อบ. |  |  |
| 15 |  | TPDInsur | numeric | 14,2 | N | ทุนชีวิตทุพพลภาพ |  |  |
| 16 |  | LifeE1Prem | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ - ชีวิต |  |  |
| 17 |  | LifePrem | numeric | 14,2 | N | เบี้ยชีวิต |  |  |
| 18 |  | AccPrem | numeric | 14,2 | N | เบี้ย อบ. |  |  |
| 19 |  | MedPrem | numeric | 14,2 | N | เบี้ยค่ารักษาจาก อบ. |  |  |
| 20 |  | Age | numeric | 2 | N | อายุ |  |  |
| 21 |  | Status | char | 1 | N | สถานะผู้เอาประกัน | B New businessI RenewalA New MemberC CancelD DeathT Transfer (ย้ายบริษัท)O Age over LimitE ลดทุนN เพิ่มทุนL Lapse ตามกรมธรรม์ |  |
| 22 |  | TPDPrem | numeric | 14,2 | N | เบี้ยทุพพลภาพ |  |  |
| 23 |  | MedPlanRateIPPrem | numeric | 14,2 | N | เบี้ยสุขภาพผู้ป่วยใน |  |  |
| 24 |  | MedPlanRateOPPrem | numeric | 14,2 | N | เบี้ยสุขภาพผู้ป่วยนอก |  |  |
| 25 |  | Dental | numeric | 14,2 | N | เบี้ยทันตกรรม |  |  |
| 26 |  | NetEmployer | numeric | 14,2 | N | เบี้ยส่วนที่นายจ้างจ่าย |  |  |
| 27 |  | NetEmployee | numeric | 14,2 | N | เบี้ยส่วนที่ลูกจ้างจ่าย |  |  |
| 28 |  | CompCode | varchar | 10 | N | รหัสบริษัทที่สังกัด |  |  |
| 29 |  | Sex | varchar | 1 | N | เพศ |  |  |
| 30 |  | Birthday | datetime | 8 | N | วันเกิด |  |  |
| ข้อมูลระบบ |  |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197423 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertificateCust > View3 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVCertId | bigint | 19 | Y |
| 2 | CertificCustNo | varchar | 8 | Y |
| 3 | CustCode | varchar | 10 | Y |
| 4 | PolicyCode | tinyint | 3 | Y |
| 5 | PolicyNo | varchar | 8 | Y |
| 6 | PolicyYear | int | 10 | Y |
| 7 | ClassNo | tinyint | 3 | Y |
| 8 | EffectDate | datetime |  | Y |
| 9 | TransDate | datetime |  | Y |
| 10 | ChangeDate | datetime |  | Y |
| 11 | LifeExtraRate | numeric | 7,4 | Y |
| 12 | LifeInsur | money | 19,4 | Y |
| 13 | AccInsur | money | 19,4 | Y |
| 14 | MedInsur | money | 19,4 | Y |
| 15 | TPDInsur | money | 19,4 | Y |
| 16 | LifeE1Prem | money | 19,4 | Y |
| 17 | LifePrem | money | 19,4 | Y |
| 18 | AccPrem | money | 19,4 | Y |
| 19 | MedPrem | money | 19,4 | Y |
| 20 | Age | smallint | 5 | Y |
| 21 | Status | char | 1 | Y |
| 22 | TPDPrem | money | 19,4 | Y |
| 23 | MedPlanRateIPPrem | money | 19,4 | Y |
| 24 | MedPlanRateOPPrem | money | 19,4 | Y |
| 25 | Dental | money | 19,4 | Y |
| 26 | NetEmployer | money | 19,4 | Y |
| 27 | NetEmployee | money | 19,4 | Y |
| 28 | CompCode | varchar | 10,4 | Y |
| 29 | Sex | char | 1 | Y |
| 30 | Birthday | datetime |  | Y |
| 31 | CreatedDate | datetime |  | N |
| 32 | CreatedBy | varchar | 6 | N |
| 33 | UpdatedDate | datetime |  | N |
| 34 | UpdatedBy | varchar | 6 | N |


===== PAGE 1308950669 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertificateCust > เงื่อนไข RIG_View_CertificateCust =====
## RIG_View_CertificateCust
View สำหรับรวมข้อมูล Certificate รายบุคคล (Customer Certificate) ของกรมธรรม์ที่มี Reinsurance โดยดึงจากทั้ง GLCertificateCust และ GLOldCertificateCust และเติมข้อมูลลูกค้าจาก Customer

## เงื่อนไข (Summary)

### 1) คัดเลือกกรมธรรม์ที่เข้าเงื่อนไข (AllPolicies)
รวมรายการ PolicyNo + PolicyYear จาก 2 แหล่ง (UNION ALL)
- จาก GLPolicyReInsur_No ต้องไม่ว่าง (ISNULL(ReInsur_No,'') <> '')
- ReInsur_No ต้องไม่ว่าง (ISNULL(ReInsur_No,'') <> '')
- จาก GLOldPolicy (เชื่อมกับ GLPolicy)Join PolicyNo เท่ากันจำกัดปี: GLOldPolicy.PolicyYear >= GLPolicy.PolicyYear - 2GLOldPolicy.ReInsur_No ต้องไม่ว่าง
- Join PolicyNo เท่ากัน
- จำกัดปี: GLOldPolicy.PolicyYear >= GLPolicy.PolicyYear - 2
- GLOldPolicy.ReInsur_No ต้องไม่ว่าง

### 2) ดึง Certificate + Customer (AllCertificates)
รวมข้อมูล 2 ชุด (UNION ALL)
- ชุดที่ 1: GLCertificateCust + Customer
- ชุดที่ 2: GLOldCertificateCust + Customerโดยมีเงื่อนไข join เหมือนกัน
- Join Customer: Customer.CustCode = GLCertCust.CustCode
- Join AllPolicies: GLCertCust.PolicyNo/PolicyYear = AllPolicies.PolicyNo/PolicyYear

### 3) การจัดลำดับ/ไอดีใน View
- rig_v_cert_id = ROW_NUMBER() เรียงตามPolicyNo ASC, PolicyYear DESC, CertificCustNo ASC

### 4) ฟิลด์ระบบที่เติมเพิ่ม
- created_date/updated_date = GETDATE()
- created_by/updated_by = 'SYSTEM'

## Field Mapping (แยกสี)
Legend
- 🟦 GLCertificateCust
- 🟩 GLOldCertificateCust
- 🟪 Customer
- 🟨 System
หมายเหตุ: ฟิลด์ผลลัพธ์ select จาก AllCertificates C ดังนั้นฟิลด์ส่วนใหญ่ “มาจาก Certificate table” (เก่าหรือใหม่) และฟิลด์ลูกค้ามาจาก Customer
| Field | Source |
| rig_v_cert_id | 🟨 System (ROW_NUMBER order by PolicyNo ASC, PolicyYear DESC, CertificCustNo ASC) |
| CertificCustNo | 🟦/🟩 Certificate (GLCertificateCust หรือ GLOldCertificateCust) |
| CustCode | 🟦/🟩 Certificate |
| PolicyCode | 🟦/🟩 Certificate |
| PolicyNo | 🟦/🟩 Certificate |
| PolicyYear | 🟦/🟩 Certificate |
| ClassNo | 🟦/🟩 Certificate |
| EffectDate | 🟦/🟩 Certificate |
| TransDate | 🟦/🟩 Certificate |
| ChangeDate | 🟦/🟩 Certificate |
| LifeExtraRate | 🟦/🟩 Certificate |
| LifeInsur | 🟦/🟩 Certificate |
| AccInsur | 🟦/🟩 Certificate |
| MedInsur | 🟦/🟩 Certificate |
| TPDInsur | 🟦/🟩 Certificate |
| LifeE1Prem | 🟦/🟩 Certificate |
| LifePrem | 🟦/🟩 Certificate |
| AccPrem | 🟦/🟩 Certificate |
| MedPrem | 🟦/🟩 Certificate |
| Age | 🟦/🟩 Certificate |
| Status | 🟦/🟩 Certificate |
| TPDPrem | 🟦/🟩 Certificate |
| MedPlanRateIPPrem | 🟦/🟩 Certificate |
| MedPlanRateOPPrem | 🟦/🟩 Certificate |
| Dental | 🟦/🟩 Certificate |
| NetEmployer | 🟦/🟩 Certificate |
| NetEmployee | 🟦/🟩 Certificate |
| CompCode | 🟪 Customer |
| Sex | 🟪 Customer |
| Birthday | 🟪 Customer |
| created_date | 🟨 System (GETDATE) |
| created_by | 🟨 System ('SYSTEM') |
| updated_date | 🟨 System (GETDATE) |
| updated_by | 🟨 System ('SYSTEM') |


===== PAGE 1297973639 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertInforce =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_CertInforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife];
GO
/*Edit V2 siriporn 19-12-2025 ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)*/ 
/*Edit V3 siriporn 21-01-2026 ขอเพิ่ม PeriodDate*/ 
CREATE VIEW [dbo].[RIG_View_CertInforce]
AS
 
WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
	select PolicyNo, PolicyYear,-- PromiseDate,  ReInsur_No, ExpireDate,
	       'GLPOLICY' AS SourceTable 
	from GLPolicy Pol 
	where isnull(ReInsur_No,'') <> ''      
	--and Pol.policyno = 'gh125'
	union all
	select PolSub.PolicyNo, Pol.PolicyYear, --Pol.PromiseDate, Pol.ReInsur_No, Pol.ExpireDate ,
	       'GLOLDPOLICY' AS SourceTable 
	from GLOldPolicy Pol inner join GLPolicy PolSub
	on PolSub.PolicyNo = Pol.PolicyNo and isnull(Pol.PolicyYear,0) >= isnull(PolSub.PolicyYear,0) - 2
	where isnull(Pol.ReInsur_No,'') <> ''
	--and Pol.policyno = 'gh125'
) 
 
SELECT 
    ROW_NUMBER() OVER (
        ORDER BY IFHD.DOCNO ASC
        ) AS RigVPolInforceId,
    IFHD.DOCNO, IFHD.PolicyNo, IFDT.EffectDate, IFDT.EndDate, IFDT.ChangeDate,
    IFDT.CerNo, IFDT.CompCode, IFDT.CustCode, IFDT.MedRate, IFDT.Age, IFDT.Sex, IFDT.CountOfDay, 
	IFDT.LifeInsur, IFDT.CrematInsur, IFDT.AccInsur, IFDT.MedInsur, IFDT.TPDInsur, 
	IFDT.LifePrem, IFDT.LifeE1Rate,IFDT.LifeE1Prem, IFDT.CrematPrem,IFDT.AccPrem, IFDT.MedAccPrem, IFDT.TPDPrem,
	
	IFDT.IPDPrem,IFDT.OPDPrem,IFDT.MajorPlanPrem,IFDT.DentalPrem,
    IFDT.MatherPrem,IFDT.HBPrem, 0.00 as OPDLabPrem, 
	
	IFDT.StatusMember,IFDT.Status,IFDT.ApprovedDate,
    IFDT.TotalPrem, 
    
    IFHD.DOCDate, IFHD.CompanyCode,IFHD.CompanyHeadCode,
    IFHD.ReInsureNo,IFHD.PolicyName,IFHD.CompanyName,IFHD.PromiseDate,IFHD.PolEndDate,
    IFHD.PolicyYear,IFHD.TaxYear,IFHD.PayType,IFHD.LotNo,
	
	IFHD.SumLifePrem,IFHD.SumLifeE1Prem, IFHD.SumCrematPrem,IFHD.SumAccPrem,
 
	IFHD.SumMedAccPrem,
    IFHD.SumTPDPrem,IFHD.SumIPDPrem,IFHD.SumOPDPrem,IFHD.SumMajorPlanPrem,IFHD.SumDentalPrem,
    IFHD.SumMatherPrem,IFHD.SumHBPrem,  0.00 as SumOPDLabPrem, IFHD.SumTotalPrem, 
	IFHD.PeriodDate, IFHD.PeriodEndDate, /*Edit V3 siriporn 21-01-2026 ขอเพิ่ม PeriodDate*/ 
    GETDATE() as CreatedDate,
    'SYSTEM' as CreatedBy,
    GETDATE() as UpdatedDate,
    'SYSTEM' as UpdatedBy
FROM AllPolicies PC
    INNER JOIN dbo.ZGL_GLInforceHD IFHD ON PC.PolicyNo = IFHD.PolicyNo AND PC.PolicyYear = IFHD.PolicyYear
    INNER JOIN dbo.ZGL_GLInforceDT IFDT ON IFHD.DOCNO = IFDT.DOCNO
 WHERE IFHD.[Status] <> 2 
GO
    ]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVPolInforceId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | DOCNO | varchar | 20 | Y | เลขที่เอกสาร |  |  |
| 3 |  | PolicyNo | varchar | 20 | Y | เลขกรมธรรม์ |  |  |
| 4 |  | EffectDate | datetime |  | N | วันที่มีผลบังคับ |  |  |
| 5 |  | EndDate | datetime |  | N | วัันที่สิ้นสุด |  |  |
| 6 |  | ChangeDate | datetime |  | N | วันที่มีผลเปลี่ยนแปลง |  |  |
| 7 |  | CerNo | varchar | 20 | N | เลขที่ลูกค้า |  |  |
| 8 |  | CompCode | varchar | 20 | N | รหัสบริษัท |  |  |
| 9 |  | CustCode | varchar | 20 | N | รหัสลูกค้า |  |  |
| 10 |  | MedRate | varchar | 1 | N | อัตราเบี้ยสุขภาพ |  |  |
| 11 |  | Age | numeric | 2 | Y | อายุ |  |  |
| 12 |  | Sex | numeric | 2 | Y | เพศ |  |  |
| 13 |  | CountOfDay | numeric | 4 | Y | จำนวนวันที่มีผล |  |  |
| 14 |  | LifeInsur | numeric | 14,2 | N | ทุน - ชีวิต |  |  |
| 15 |  | CrematInsur | numeric | 14,2 | N | ทุน - ค่าปลงศพ |  |  |
| 16 |  | AccInsur | numeric | 14,2 | N | ทุน - อุบัติเหตุ |  |  |
| 17 |  | MedInsur | numeric | 14,2 | N | ทุน - ค่่ารักษา |  |  |
| 18 |  | TPDInsur | numeric | 14,2 | N | ทุน - ทุพพลภาพ |  |  |
| 19 |  | LifePrem | numeric | 14,2 | Y | เบี้ย - ชีวิต |  |  |
| 20 |  | LifeE1Rate | numeric | 14,2 | Y | อัตราเบี้ย Extra 1 คิดรายคน |  |  |
| 21 |  | LifeE1Prem | numeric | 14,2 | Y | เบี้ย - Extra 1 คิดรายคน |  |  |
| 22 |  | LifeE2Prem | numeric | 14,2 | Y | เบี้ย - Extra 2 คิดตามกรมธรรม์ |  |  |
| 23 |  | CrematPrem | numeric | 14,2 | Y | เบี้ย - ค่าปลงศพ |  |  |
| 24 |  | AccPrem | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ |  |  |
| 25 |  | AccE2Prem | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ Extra 2 คิดตามกรมธรรม์ |  |  |
| 26 |  | MedAccPrem | numeric | 14,2 | Y | เบี้ย - ค่่ารักษาพยาบาล |  |  |
| 27 |  | TPDPrem | numeric | 14,2 | Y | เบี้ย - ทุพพลภาพ |  |  |
| 28 |  | IPDPrem | numeric | 14,2 | Y | เบี้ย - คนไข้ใน |  |  |
| 29 |  | OPDPrem | numeric | 14,2 | Y | เบี้ย - คนไข้นอก |  |  |
| 30 |  | MajorPlanPrem | numeric | 14,2 | Y | เบี้ย - คนไข้ในเพิ่มพิเศษ |  |  |
| 31 |  | DentalPrem | numeric | 14,2 | Y | เบี้ย - ทันตกรรม |  |  |
| 32 |  | MatherPrem | numeric | 14,2 | Y | เบี้ย - คลอดบุตร |  |  |
| 33 |  | HBPrem | numeric | 14,2 | Y | เบี้ย - ชดเชยรายวัน |  |  |
| 34 |  | Holder | numeric | 14,2 | Y | สัดส่วนการชำระผู้ถือ |  |  |
| 35 |  | HolderUnit | numeric | 4 | Y | หน่วยนับ บาท / % |  |  |
| 36 |  | Member | numeric | 14,2 | Y | สัดส่วนการชำระสมาชิก |  |  |
| 37 |  | MemberUnit | numeric | 4 | Y | หน่วยนับ บาท / % |  |  |
| 38 |  | LifePremH | numeric | 14,2 | Y | เบี้ย - ชีวิต - ผู้ถือ |  |  |
| 39 |  | LifeE1RateH | numeric | 14,2 | Y | อัตราเบี้ย Extra 1 คิดรายคน - ผู้ถือ |  |  |
| 40 |  | LifeE1PremH | numeric | 14,2 | Y | เบี้ย - Extra 1 คิดรายคน - ผู้ถือ |  |  |
| 41 |  | LifeE2PremH | numeric | 14,2 | Y | เบี้ย - Extra 2 คิดตามกรมธรรม์ - ผู้ถือ |  |  |
| 42 |  | CrematPremH | numeric | 14,2 | Y | เบี้ย - ค่าปลงศพ - ผู้ถือ |  |  |
| 43 |  | AccPremH | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ - ผู้ถือ |  |  |
| 44 |  | AccE2PremH | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ Extra 2 คิดตามกรมธรรม์ - ผู้ถือ |  |  |
| 45 |  | MedAccPremH | numeric | 14,2 | Y | เบี้ย - ค่่ารักษาพยาบาล - ผู้ถือ |  |  |
| 46 |  | TPDPremH | numeric | 14,2 | Y | เบี้ย - ทุพพลภาพ - ผู้ถือ |  |  |
| 47 |  | IPDPremH | numeric | 14,2 | Y | เบี้ย - คนไข้ใน - ผู้ถือ |  |  |
| 48 |  | OPDPremH | numeric | 14,2 | Y | เบี้ย - คนไข้้นอก - ผู้ถือ |  |  |
| 49 |  | MajorPlanPremH | numeric | 14,2 | Y | เบี้ย - คนไข้ในเพิ่มพิเศษ - ผู้ถือ |  |  |
| 50 |  | DentalPremH | numeric | 14,2 | Y | เบี้ย - ทันตกรรม - ผู้ถือ |  |  |
| 51 |  | MatherPremH | numeric | 14,2 | Y | เบี้ย - คลอดบุตร - ผู้ถือ |  |  |
| 52 |  | HBPremH | numeric | 14,2 | Y | เบี้ย - ชดเชยรายวัน - ผู้ถือ |  |  |
| 53 |  | LifePremM | numeric | 14,2 | Y | เบี้ย - ชีวิต - สมาชิก |  |  |
| 54 |  | LifeE1RateM | numeric | 14,2 | Y | อัตราเบี้ย Extra 1 คิดรายคน - สมาชิก |  |  |
| 55 |  | LifeE1PremM | numeric | 14,2 | Y | เบี้ย - Extra 1 คิดรายคน - สมาชิก |  |  |
| 56 |  | LifeE2PremM | numeric | 14,2 | Y | เบี้ย - Extra 2 คิดตามกรมธรรม์ - สมาชิก |  |  |
| 57 |  | CrematPremM | numeric | 14,2 | Y | เบี้ย - ค่าปลงศพ - สมาชิก |  |  |
| 58 |  | AccPremM | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ - สมาชิก |  |  |
| 59 |  | AccE2PremM | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ Extra 2 คิดตามกรมธรรม์ - สมาชิก |  |  |
| 60 |  | MedAccPremM | numeric | 14,2 | Y | เบี้ย - ค่่ารักษาพยาบาล - สมาชิก |  |  |
| 61 |  | TPDPremM | numeric | 14,2 | Y | เบี้ย - ทุพพลภาพ - สมาชิก |  |  |
| 62 |  | IPDPremM | numeric | 14,2 | Y | เบี้ย - คนไข้ใน - สมาชิก |  |  |
| 63 |  | OPDPremM | numeric | 14,2 | Y | เบี้ย - คนไข้้นอก - สมาชิก |  |  |
| 64 |  | MajorPlanPremM | numeric | 14,2 | Y | เบี้ย - คนไข้ในเพิ่มพิเศษ - สมาชิก |  |  |
| 65 |  | DentalPremM | numeric | 14,2 | Y | เบี้ย - ทันตกรรม - สมาชิก |  |  |
| 66 |  | MatherPremM | numeric | 14,2 | Y | เบี้ย - คลอดบุตร - สมาชิก |  |  |
| 67 |  | HBPremM | numeric | 14,2 | Y | เบี้ย - ชดเชยรายวัน - สมาชิก |  |  |
| 68 |  | StatusMember | varchar | 1 | N | สถานะความคุ้มครอง |  |  |
| 69 |  | Status | numeric | 4 | Y | สถานะการใช้งาน |  |  |
| 70 |  | ApprovedDate | datetime |  | N | วันที่อนุมัติ |  |  |
| 71 |  | TotalPrem | numeric | 14,2 | N | เบี้ยรวมทั้งหมด |  |  |
| 72 |  | TotalPremH | numeric | 14,2 | N | เบี้ยรวมผู้ถือชำระ |  |  |
| 73 |  | TotalPremM | numeric | 14,2 | N | เบี้ยรวมสมาชิกชำระ |  |  |
| 74 |  | OPDLabPrem | numeric | 14,2 | N | เบี้ย OPD Lab รวมทั้งหมด |  |  |
| 75 |  | OPDLabPremH | numeric | 14,2 | N | เบี้ย OPD Lab ตาม Holder |  |  |
| 76 |  | OPDLabPremM | numeric | 14,2 | N | เบี้ย OPD Lab ตาม Member |  |  |
| 77 |  | DOCDate | datetime |  | N | วันที่จัดทำเอกสาร |  |  |
| 78 |  | PolicyNo | varchar | 20 | N | เลขกรมธรรม์ |  |  |
| 79 |  | CompanyCode | varchar | 20 | N | รหัสบริษัท |  |  |
| 80 |  | CompanyHeadCode | varchar | 20 | N | รหัสบริษัทต้นสังกัด |  |  |
| 81 |  | ReInsureNo | varchar | 20 | N | เลขที่ี่ประกันต่อ |  |  |
| 82 |  | PolicyName | varchar | 200 | N | ชื่อกรมธรรม์ |  |  |
| 83 |  | CompanyName | varchar | 200 | N | ชื่ื่อ บริษัทในเครือ |  |  |
| 84 |  | PromiseDate | datetime |  | N | วันที่เริ่มคุ้มครองกรมธรรม์ |  |  |
| 85 |  | PolEndDate | datetime |  | N | วันที่สิ้นสุดกรมธรรม์ |  |  |
| 86 |  | PolicyYear | numeric | 4 | Y | กรมธรรม์ปีที่ |  |  |
| 87 |  | TaxYear | numeric | 4 | Y | ปีภาษี |  |  |
| 88 |  | PayType | numeric | 4 | Y | ปีระเภทการจ่าย |  |  |
| 89 |  | LotNo | numeric | 4 | Y | งวดที่ |  |  |
| 90 |  | SumLifePrem | numeric | 14,2 | Y | เบี้ย - ชีวิต |  |  |
| 91 |  | SumLifeE1Prem | numeric | 14,2 | Y | เบี้ย - ชีวิตExtra 1 คิดรายคน |  |  |
| 92 |  | SumLifeE2Prem | numeric | 14,2 | Y | เบี้ย - ชีวิตExtra 2 คิดตามกรมธรรม์ |  |  |
| 93 |  | SumCrematPrem | numeric | 14,2 | Y | เบี้ย - ค่าปลงศพ |  |  |
| 94 |  | SumAccPrem | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ |  |  |
| 95 |  | SumAccE2Prem | numeric | 14,2 | Y | เบี้ย - อุบัติเหตุ Extra 2 คิดตามกรมธรรม์ |  |  |
| 96 |  | SumMedAccPrem | numeric | 14,2 | Y | เบี้ย - ค่ารักษาพยาบาล |  |  |
| 97 |  | SumTPDPrem | numeric | 14,2 | Y | เบี้ย - ทุพพลภาพ |  |  |
| 98 |  | SumIPDPrem | numeric | 14,2 | Y | เบี้ย - คนไข้ใน |  |  |
| 99 |  | SumOPDPrem | numeric | 14,2 | Y | เบี้ย - คนไข้นอก |  |  |
| 100 |  | SumMajorPlanPrem | numeric | 14,2 | Y | เบี้ย - คนไข้ในเพิ่มพิเศษ |  |  |
| 101 |  | SumDentalPrem | numeric | 14,2 | Y | เบี้ย - ทันตกรรม |  |  |
| 102 |  | SumMatherPrem | numeric | 14,2 | Y | เบี้ย - คลอดบุตร |  |  |
| 103 |  | SumHBPrem | numeric | 14,2 | Y | เบี้ย - ชดเชยรายวัน |  |  |
| 104 |  | SumTotalPrem | numeric | 14,2 | Y | เบี้ย - รวมทั้งหมด |  |  |
| 105 |  | Status | numeric | 4 | Y | สถานะ |  |  |
| 106 |  | CountCurrent | numeric | 4 | Y | จำนวนสมาชิกทั้งหมด |  |  |
| 107 |  | SumOPDLabPrem | numeric | 14,2 | Y | เบี้ยรวม OPD Lab |  |  |
| 108 |  | PeriodDate | datetime |  | Y | วันที่เริ่ม งวด |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197432 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertInforce > View4 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVPolInforceId | bigint | 19 | Y |
| 2 | DOCNO | varchar | 20 | N |
| 3 | PolicyNo | varchar | 20 | Y |
| 4 | EffectDate | datetime |  | Y |
| 5 | EndDate | datetime |  | Y |
| 6 | ChangeDate | datetime |  | Y |
| 7 | CerNo | varchar | 20 | Y |
| 8 | CompCode | varchar | 20 | Y |
| 9 | CustCode | varchar | 20 | Y |
| 10 | MedRate | varchar | 1 | Y |
| 11 | Age | smallint | 5 | N |
| 12 | Sex | smallint | 5 | N |
| 13 | CountOfDay | int | 10 | N |
| 14 | LifeInsur | money | 19,4 | Y |
| 15 | CrematInsur | money | 19,4 | Y |
| 16 | AccInsur | money | 19,4 | Y |
| 17 | MedInsur | money | 19,4 | Y |
| 18 | TPDInsur | money | 19,4 | Y |
| 19 | LifePrem | money | 19,4 | N |
| 20 | LifeE1Rate | money | 19,4 | N |
| 21 | LifeE1Prem | money | 19,4 | N |
| 22 | CrematPrem | money | 19,4 | N |
| 23 | AccPrem | money | 19,4 | N |
| 24 | MedAccPrem | money | 19,4 | N |
| 25 | TPDPrem | money | 19,4 | N |
| 26 | IPDPrem | money | 19,4 | N |
| 27 | OPDPrem | money | 19,4 | N |
| 28 | MajorPlanPrem | money | 19,4 | N |
| 29 | DentalPrem | money | 19,4 | N |
| 30 | MatherPrem | money | 19,4 | N |
| 31 | HBPrem | money | 19,4 | N |
| 32 | OPDLabPrem | numeric | 2,2 | N |
| 33 | StatusMember | char | 1 | Y |
| 34 | Status | int | 10 | N |
| 35 | ApprovedDate | datetime |  | Y |
| 36 | TotalPrem | money | 19,4 | Y |
| 37 | DOCDate | datetime |  | Y |
| 38 | CompanyCode | varchar | 20 | Y |
| 39 | CompanyHeadCode | varchar | 20 | Y |
| 40 | ReInsureNo | varchar | 20 | Y |
| 41 | PolicyName | varchar | 200 | Y |
| 42 | CompanyName | varchar | 200 | Y |
| 43 | PromiseDate | datetime |  | Y |
| 44 | PolEndDate | datetime |  | Y |
| 45 | PolicyYear | int | 10 | N |
| 46 | TaxYear | int | 10 | N |
| 47 | PayType | int | 10 | N |
| 48 | LotNo | int | 10 | N |
| 49 | SumLifePrem | money | 19,4 | N |
| 50 | SumLifeE1Prem | money | 19,4 | N |
| 51 | SumCrematPrem | money | 19,4 | N |
| 52 | SumAccPrem | money | 19,4 | N |
| 53 | SumMedAccPrem | money | 19,4 | N |
| 54 | SumTPDPrem | money | 19,4 | N |
| 55 | SumIPDPrem | money | 19,4 | N |
| 56 | SumOPDPrem | money | 19,4 | N |
| 57 | SumMajorPlanPrem | money | 19,4 | N |
| 58 | SumDentalPrem | money | 19,4 | N |
| 59 | SumMatherPrem | money | 19,4 | N |
| 60 | SumHBPrem | money | 19,4 | N |
| 61 | SumOPDLabPrem | numeric | 2,2 | N |
| 62 | SumTotalPrem | money | 19,4 | N |
| 63 | CreatedDate | datetime |  | N |
| 64 | CreatedBy | varchar | 6 | N |
| 65 | UpdatedDate | datetime |  | N |
| 66 | UpdatedBy | varchar | 6 | N |


===== PAGE 1308950631 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertInforce > เงื่อนไข RIG_View_CertInforce =====
## RIG_View_CertInforce – Summary

### วัตถุประสงค์
ใช้แสดงข้อมูล Inforce Certificate สำหรับกรมธรรม์ที่มี Reinsurance

### แหล่งข้อมูลและการเชื่อมตาราง
- GLPolicy / GLOldPolicyใช้คัดเลือกกรมธรรม์ที่มี ReInsur_No ไม่ว่างกรณี GLOldPolicy เลือกข้อมูลย้อนหลังไม่เกิน 2 ปี (เทียบกับ GLPolicy)
- ใช้คัดเลือกกรมธรรม์ที่มี ReInsur_No ไม่ว่าง
- กรณี GLOldPolicy เลือกข้อมูลย้อนหลังไม่เกิน 2 ปี (เทียบกับ GLPolicy)
- ZGL_GLInforceHDเชื่อมด้วย PolicyNo และ PolicyYear
- เชื่อมด้วย PolicyNo และ PolicyYear
- ZGL_GLInforceDTเชื่อมด้วย DOCNO
- เชื่อมด้วย DOCNO

### เงื่อนไขการคัดเลือกข้อมูล
- ต้องเป็นกรมธรรม์ที่มี ReInsur_No
- เลือกเฉพาะรายการที่ ZGL_GLInforceHD.Status <> 2

### ข้อมูลที่แสดงใน View
- ข้อมูลระดับกรมธรรม์ (จาก ZGL_GLInforceHD)Policy / Company / ReinsurancePromiseDate, PolicyYear, TaxYear, PayTypeเบี้ยรวมและเบี้ยแยกตามประเภท (Life, Acc, Med, TPD, ฯลฯ)
- Policy / Company / Reinsurance
- PromiseDate, PolicyYear, TaxYear, PayType
- เบี้ยรวมและเบี้ยแยกตามประเภท (Life, Acc, Med, TPD, ฯลฯ)
- ข้อมูลระดับสมาชิก (จาก ZGL_GLInforceDT)ช่วงคุ้มครอง (EffectDate – EndDate)ข้อมูลสมาชิก (Age, Sex, StatusMember)ทุนประกันและเบี้ยรายประเภทสถานะและวันที่อนุมัติ
- ช่วงคุ้มครอง (EffectDate – EndDate)
- ข้อมูลสมาชิก (Age, Sex, StatusMember)
- ทุนประกันและเบี้ยรายประเภท
- สถานะและวันที่อนุมัติ
- ฟิลด์ระบบRigVPolInforceId (ROW_NUMBER เรียงตาม DOCNO)OPDLabPrem / SumOPDLabPrem = 0CreatedDate / UpdatedDate = วันที่ระบบCreatedBy / UpdatedBy = SYSTEM
- RigVPolInforceId (ROW_NUMBER เรียงตาม DOCNO)
- OPDLabPrem / SumOPDLabPrem = 0
- CreatedDate / UpdatedDate = วันที่ระบบ
- CreatedBy / UpdatedBy = SYSTEM

### หมายเหตุ
- CTE AllPolicies ใช้สำหรับ คัดเลือกชุดกรมธรรม์ที่เข้าเงื่อนไขเท่านั้น
- ไม่ได้นำฟิลด์จาก AllPolicies มาแสดงในผลลัพธ์
| Field | Source |
| RigVPolInforceId | 🟨 System (ROW_NUMBER order by ZGL_GLInforceHD.DOCNO) |
| DOCNO | 🟦 ZGL_GLInforceHD |
| PolicyNo | 🟦 ZGL_GLInforceHD |
| EffectDate | 🟩 ZGL_GLInforceDT |
| EndDate | 🟩 ZGL_GLInforceDT |
| ChangeDate | 🟩 ZGL_GLInforceDT |
| CerNo | 🟩 ZGL_GLInforceDT |
| CompCode | 🟩 ZGL_GLInforceDT |
| CustCode | 🟩 ZGL_GLInforceDT |
| MedRate | 🟩 ZGL_GLInforceDT |
| Age | 🟩 ZGL_GLInforceDT |
| Sex | 🟩 ZGL_GLInforceDT |
| CountOfDay | 🟩 ZGL_GLInforceDT |
| LifeInsur | 🟩 ZGL_GLInforceDT |
| CrematInsur | 🟩 ZGL_GLInforceDT |
| AccInsur | 🟩 ZGL_GLInforceDT |
| MedInsur | 🟩 ZGL_GLInforceDT |
| TPDInsur | 🟩 ZGL_GLInforceDT |
| LifePrem | 🟩 ZGL_GLInforceDT |
| LifeE1Rate | 🟩 ZGL_GLInforceDT |
| LifeE1Prem | 🟩 ZGL_GLInforceDT |
| CrematPrem | 🟩 ZGL_GLInforceDT |
| AccPrem | 🟩 ZGL_GLInforceDT |
| MedAccPrem | 🟩 ZGL_GLInforceDT |
| TPDPrem | 🟩 ZGL_GLInforceDT |
| IPDPrem | 🟩 ZGL_GLInforceDT |
| OPDPrem | 🟩 ZGL_GLInforceDT |
| MajorPlanPrem | 🟩 ZGL_GLInforceDT |
| DentalPrem | 🟩 ZGL_GLInforceDT |
| MatherPrem | 🟩 ZGL_GLInforceDT |
| HBPrem | 🟩 ZGL_GLInforceDT |
| OPDLabPrem | 🟨 System (Fixed = 0.00) |
| StatusMember | 🟩 ZGL_GLInforceDT |
| Status | 🟩 ZGL_GLInforceDT |
| ApprovedDate | 🟩 ZGL_GLInforceDT |
| TotalPrem | 🟩 ZGL_GLInforceDT |
| DOCDate | 🟦 ZGL_GLInforceHD |
| CompanyCode | 🟦 ZGL_GLInforceHD |
| CompanyHeadCode | 🟦 ZGL_GLInforceHD |
| ReInsureNo | 🟦 ZGL_GLInforceHD |
| PolicyName | 🟦 ZGL_GLInforceHD |
| CompanyName | 🟦 ZGL_GLInforceHD |
| PromiseDate | 🟦 ZGL_GLInforceHD |
| PolEndDate | 🟦 ZGL_GLInforceHD |
| PolicyYear | 🟦 ZGL_GLInforceHD |
| TaxYear | 🟦 ZGL_GLInforceHD |
| PayType | 🟦 ZGL_GLInforceHD |
| LotNo | 🟦 ZGL_GLInforceHD |
| SumLifePrem | 🟦 ZGL_GLInforceHD |
| SumLifeE1Prem | 🟦 ZGL_GLInforceHD |
| SumCrematPrem | 🟦 ZGL_GLInforceHD |
| SumAccPrem | 🟦 ZGL_GLInforceHD |
| SumMedAccPrem | 🟦 ZGL_GLInforceHD |
| SumTPDPrem | 🟦 ZGL_GLInforceHD |
| SumIPDPrem | 🟦 ZGL_GLInforceHD |
| SumOPDPrem | 🟦 ZGL_GLInforceHD |
| SumMajorPlanPrem | 🟦 ZGL_GLInforceHD |
| SumDentalPrem | 🟦 ZGL_GLInforceHD |
| SumMatherPrem | 🟦 ZGL_GLInforceHD |
| SumHBPrem | 🟦 ZGL_GLInforceHD |
| SumOPDLabPrem | 🟨 System (Fixed = 0.00) |
| SumTotalPrem | 🟦 ZGL_GLInforceHD |
| CreatedDate | 🟨 System (GETDATE) |
| CreatedBy | 🟨 System |
| UpdatedDate | 🟨 System (GETDATE) |
| UpdatedBy | 🟨 System |


===== PAGE 1297973669 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertNewBusiness =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_CertNewBusiness | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
 
CREATE VIEW [dbo].[RIG_View_CertNewBusiness]
AS
/*Edit V2 siriporn 19-12-2025 ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)*/  
WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
	select PolicyNo, PolicyYear, 
	       'GLPOLICY' AS SourceTable 
	from GLPolicy Pol 
	where isnull(ReInsur_No,'') <> ''
	and PolicyStatus in ('B','I')
	--and Pol.policyno = 'gh125'
	union all
	select PolSub.PolicyNo, Pol.PolicyYear, 
	       'GLOLDPOLICY' AS SourceTable 
	from GLOldPolicy Pol inner join GLPolicy PolSub
	on PolSub.PolicyNo = Pol.PolicyNo and isnull(Pol.PolicyYear,0) >= isnull(PolSub.PolicyYear,0) - 2
	where isnull(Pol.ReInsur_No,'') <> ''  
	and PolSub.PolicyStatus in ('B','I')
), -- จัดเรียงกรมธรรม์เพื่อแบ่งลำดับปี
 
 AllCertificates AS ( 
    -- ชุดข้อมูล C เดิม (รวม GLCertCust และ GLOldCertCust เข้ากับ Customer)
    SELECT 
        GLCertCust.PolicyCode, GLCertCust.PolicyNo, GLCertCust.PolicyYear, GLCertCust.CertificCustNo, GLCertCust.CustCode,
        GLCertCust.ClassNo, GLCertCust.EffectDate, GLCertCust.TransDate, GLCertCust.ChangeDate, GLCertCust.LifeExtraRate,
        GLCertCust.LifeInsur, GLCertCust.AccInsur, GLCertCust.MedInsur, GLCertCust.TPDInsur, GLCertCust.LifeE1Prem,
        GLCertCust.LifePrem, GLCertCust.AccPrem, GLCertCust.MedPrem, GLCertCust.Age, GLCertCust.Status,         
		GLCertCust.TPDPrem, GLCertCust.MedPlanRateIPPrem, GLCertCust.MedPlanRateOPPrem, GLCertCust.Dental, 		 
		GLCertCust.NetEmployer, GLCertCust.NetEmployee, 		 
        Cust.CustCode as cusCustCode,Cust.CompCode , Cust.Sex ,Cust.Birthday
    FROM 
        OceanLife.dbo.GLCerNewBusiness AS GLCertCust with (nolock)
    INNER JOIN 
        OceanLife.dbo.Customer AS Cust  with (nolock)
        ON Cust.CustCode = GLCertCust.custCode
    INNER JOIN AllPolicies  
    ON GLCertCust.PolicyNo = AllPolicies.PolicyNo
    AND GLCertCust.PolicyYear = AllPolicies.PolicyYear
     
) 
select  ROW_NUMBER() OVER (
        ORDER BY C.PolicyNo ASC, C.PolicyYear DESC ,C.CertificCustNo ASC
        ) AS RigVCerId,          
        C.CertificCustNo , 
		C.CustCode , 
		C.PolicyCode , 
		C.PolicyNo , 
		C.PolicyYear,
        C.ClassNo , 
		C.EffectDate , 
		C.TransDate , 
		C.ChangeDate , 
		C.LifeExtraRate,
        C.LifeInsur , 
		C.AccInsur ,
		C.MedInsur ,
		C.TPDInsur ,
		C.LifeE1Prem ,
        C.LifePrem , 
		C.AccPrem ,
		C.MedPrem ,
		C.Age ,
		C.Status,
        
		C.TPDPrem ,
        C.MedPlanRateIPPrem ,
		C.MedPlanRateOPPrem ,
		C.Dental ,
		 
		C.NetEmployer ,
        C.NetEmployee ,
		 
		C.CompCode ,
		C.Sex , 
		C.Birthday,
        GETDATE() as CreatedDate,
        'SYSTEM' as CreatedBy,
        GETDATE() as UpdatedDate,
        'SYSTEM' as UpdatedBy
FROM AllCertificates C 
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVCerId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |
| 3 |  | PolicyNo | varchar | 8 | N | เลขที่กธ. |  |  |
| 4 |  | PolicyYear | numeric | 4 | N | กธ. ปีที่ |  |  |
| 5 | Index | CertificCustNo | varchar | 8 | N | รหัสผู้เอาประกัน |  |  |
| 6 |  | CustCode | varchar | 10 | N | รหัสลูกค้า |  |  |
| 7 |  | ClassNo | numeric | 1 | N | Class No. |  |  |
| 8 |  | EffectDate | datetime | 8 | N | วันเดือนปีที่มีผลบังคับ |  |  |
| 9 |  | LifeExtraRate | numeric | 5 | N | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต |  |  |
| 10 |  | LifeInsur | numeric | 14,2 | N | ทุน...ชีวิต |  |  |
| 11 |  | AccInsur | numeric | 14,2 | N | ทุน... อบ. |  |  |
| 12 |  | MedInsur | numeric | 14,2 | N | ทุน...ค่ารักษาจาก อบ. |  |  |
| 13 |  | TPDInsur | numeric | 14,2 | N | ทุน...ชีวิตทุพพลภาพ |  |  |
| 14 |  | LifeE1Prem | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ - ชีวิต |  |  |
| 15 |  | LifePrem | numeric | 14,2 | N | เบี้ย......ชีวิต |  |  |
| 16 |  | AccPrem | numeric | 14,2 | N | เบี้ย...... อบ. |  |  |
| 17 |  | MedPrem | numeric | 14,2 | N | เบี้ย......ค่ารักษาจาก อบ. |  |  |
| 18 |  | Age | numeric | 2 | N | อายุ |  |  |
| 19 |  | OutPatient | numeric | 8 | N | จำนวนผลประโยชน์ค่ารักษาผู้ป่วยนอก |  |  |
| 20 |  | Benefit | varchar | 50 | N |  |  |  |
| 21 |  | ClaimOut | numeric | 4 | N |  |  |  |
| 22 |  | ClaimIn | numeric | 4 | N |  |  |  |
| 23 |  | Status | char | 1 | N | สถานะผู้เอาประกัน |  |  |
| 24 |  | LifeE2Prem | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ2 - ชีวิต |  |  |
| 25 |  | AccE2Prem | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 2 - อบ. |  |  |
| 26 |  | MedE2Prem | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 2 - ค่ารักษาฯ..จาก อบ. |  |  |
| 27 |  | TPDE2Prem | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 2 - ทุพพลภาพ |  |  |
| 28 |  | TPDPrem | numeric | 14,2 | N | เบี้ย......ทุพพลภาพ |  |  |
| 29 |  | MedPlanRateIPPrem | numeric | 14,2 | N | เบี้ย......สุขภาพผู้ป่วยใน |  |  |
| 30 |  | MedPlanRateOPPrem | numeric | 14,2 | N | เบี้ย......สุขภาพผู้ป่วยนอก |  |  |
| 31 |  | Dental | numeric | 14,2 | N | เบี้ย......ทันตกรรม |  |  |
| 32 |  | NoOfDependent | int | 4 | N | จำนวนสมาชิกสมทบ |  |  |
| 33 |  | LifeExpRefund | numeric | 14,2 | N | เงินคืนตามประสบการณ์ - ชีวิต |  |  |
| 34 |  | AccExpRefund | numeric | 14,2 | N | เงินคืนตามประสบการณ์ - อบ. |  |  |
| 35 |  | MedExpRefund | numeric | 14,2 | N | เงินคืนตามประสบการณ์ - ค่ารักษาฯ..จาก อบ. |  |  |
| 36 |  | TPDExpRefund | numeric | 14,2 | N | เงินคืนตามประสบการณ์ - ทุพพลภาพ |  |  |
| 37 |  | LifeExtraRateRe | numeric | 14,2 | N | อัตราเบี้ย...เพิ่มพิเศษ - ชีวิต |  |  |
| 38 |  | NetEmployer | numeric | 14,2 | N | เบี้ย......ส่วนที่นายจ้างจ่าย |  |  |
| 39 |  | NetEmployee | numeric | 14,2 | N | เบี้ย......ส่วนที่ลูกจ้างจ่าย |  |  |
| 40 |  | E1Acc | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 1 - อบ. |  |  |
| 41 |  | E1Med | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 1 - ค่ารักษาฯ..จาก อบ. |  |  |
| 42 |  | E1TPD | numeric | 14,2 | N | เบี้ย...เพิ่มพิเศษ 1 - ทุพพลภาพ |  |  |
| 43 |  | LDisc | numeric | 14,2 | N | ส่วนลด - ชีวิต |  |  |
| 44 |  | ADisc | numeric | 14,2 | N | ส่วนลด - อบ. |  |  |
| 45 |  | MDisc | numeric | 14,2 | N | ส่วนลด - ค่ารักษาฯ..จาก อบ. |  |  |
| 46 |  | TDisc | numeric | 14,2 | N | ส่วนลด - ทุพพลภาพ |  |  |
| 47 |  | LExpE2 | numeric | 14,2 | N | เงินคืนตามประสบการณ์เพิ่มพิเศษ 2 - ชีวิต |  |  |
| 48 |  | AExpE2 | numeric | 14,2 | N | เงินคืนตามประสบการณ์เพิ่มพิเศษ 2 - อบ. |  |  |
| 49 |  | MExpE2 | numeric | 14,2 | N | เงินคืนตามประสบการณ์เพิ่มพิเศษ 2 - ค่ารักษาฯ..จาก อบ. |  |  |
| 50 |  | TExpE2 | numeric | 14,2 | N | เงินคืนตามประสบการณ์เพิ่มพิเศษ 2 - ทุพพลภาพ |  |  |
| 51 |  | LPremRe | numeric | 14,2 | N | เบี้ย......ต่อ - ชีวิต |  |  |
| 52 |  | APremRe | numeric | 14,2 | N | เบี้ย......ต่อ - อุบัตเหตุ |  |  |
| 53 |  | MPremRe | numeric | 14,2 | N | เบี้ย......ต่อ - ค่ารักษาฯ..จาก อบ. |  |  |
| 54 |  | TPremRe | numeric | 14,2 | N | เบี้ย......ต่อ - ทุพพลภาพ |  |  |
| 55 |  | LPremReE1 | numeric | 14,2 | N | เบี้ย......ต่อเพิ่มพิเศษ 1 - ชีวิต |  |  |
| 56 |  | LPremReE2 | numeric | 14,2 | N | เบี้ย......ต่อเพิ่มพิเศษ 2 - ชีวิต |  |  |
| 57 |  | APremReE2 | numeric | 14,2 | N | เบี้ย......ต่อเพิ่มพิเศษ - อบ. |  |  |
| 58 |  | MPremReE2 | numeric | 14,2 | N | เบี้ย......ต่อเพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. |  |  |
| 59 |  | TPremReE2 | numeric | 14,2 | N | เบี้ย......ต่อเพิ่มพิเศษ - ทุพพลภาพ |  |  |
| 60 |  | PolicyStatus | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) |  |  |
| ข้อมูลระบบ |  |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197437 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertNewBusiness > View5 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVCerId | bigint | 19 | Y |
| 2 | CertificCustNo | varchar | 8 | Y |
| 3 | CustCode | varchar | 10 | Y |
| 4 | PolicyCode | tinyint | 3 | Y |
| 5 | PolicyNo | varchar | 8 | Y |
| 6 | PolicyYear | int | 10 | Y |
| 7 | ClassNo | tinyint | 3 | Y |
| 8 | EffectDate | datetime |  | Y |
| 9 | TransDate | datetime |  | Y |
| 10 | ChangeDate | datetime |  | Y |
| 11 | LifeExtraRate | numeric | 7,4 | Y |
| 12 | LifeInsur | money | 19,4 | Y |
| 13 | AccInsur | money | 19,4 | Y |
| 14 | MedInsur | money | 19,4 | Y |
| 15 | TPDInsur | money | 19,4 | Y |
| 16 | LifeE1Prem | money | 19,4 | Y |
| 17 | LifePrem | money | 19,4 | Y |
| 18 | AccPrem | money | 19,4 | Y |
| 19 | MedPrem | money | 19,4 | Y |
| 20 | Age | smallint | 5 | Y |
| 21 | Status | char | 1 | Y |
| 22 | TPDPrem | money | 19,4 | Y |
| 23 | MedPlanRateIPPrem | money | 19,4 | Y |
| 24 | MedPlanRateOPPrem | money | 19,4 | Y |
| 25 | Dental | money | 19,4 | Y |
| 26 | NetEmployer | money | 19,4 | Y |
| 27 | NetEmployee | money | 19,4 | Y |
| 28 | CompCode | varchar | 10 | Y |
| 29 | Sex | char | 1 | Y |
| 30 | Birthday | datetime |  | Y |
| 31 | CreatedDate | datetime |  | N |
| 32 | CreatedBy | varchar | 6 | N |
| 33 | UpdatedDate | datetime |  | N |
| 34 | UpdatedBy | varchar | 6 | N |


===== PAGE 1308950634 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_CertNewBusiness > เงื่อนไข RIG_View_CertNewBusiness =====
## RIG_View_CertNewBusiness
สำหรับแสดงข้อมูล Certificate New Business ของกรมธรรม์ที่มี Reinsurance โดยคัดเลือกเฉพาะกรมธรรม์สถานะ B / I

### แหล่งข้อมูลและการเชื่อมตาราง
- คัดเลือกกรมธรรม์จาก GLPolicy / GLOldPolicy → ได้ชุด PolicyNo, PolicyYear (AllPolicies)
- ดึงข้อมูลใบรับรองจาก GLCerNewBusiness (GLCertCust) และเชื่อม Customer (Cust)
- เชื่อม AllPolicies กับ GLCerNewBusiness ด้วย PolicyNo + PolicyYear
- สุดท้าย select ออกมาจาก AllCertificates (C)

### เงื่อนไขการคัดเลือกข้อมูล
AllPolicies
- จาก GLPolicy:ReInsur_No ต้องไม่ว่างPolicyStatus in ('B','I')
- ReInsur_No ต้องไม่ว่าง
- PolicyStatus in ('B','I')
- จาก GLOldPolicy (เชื่อม GLPolicy):Join PolicyNo เท่ากันจำกัดปี: GLOldPolicy.PolicyYear >= GLPolicy.PolicyYear - 2GLOldPolicy.ReInsur_No ต้องไม่ว่างGLPolicy.PolicyStatus in ('B','I')
- Join PolicyNo เท่ากัน
- จำกัดปี: GLOldPolicy.PolicyYear >= GLPolicy.PolicyYear - 2
- GLOldPolicy.ReInsur_No ต้องไม่ว่าง
- GLPolicy.PolicyStatus in ('B','I')
AllCertificates
- ใช้ข้อมูลจาก GLCerNewBusiness ที่ match กับ AllPolicies เท่านั้น
- Join Customer ด้วย Cust.CustCode = GLCertCust.CustCode

### การจัดลำดับ/ไอดีใน View
- RigVCerId = ROW_NUMBER() เรียงตามPolicyNo ASC, PolicyYear DESC, CertificCustNo ASC
| Field | Source |
| RigVCerId | 🟨 System (ROW_NUMBER order by PolicyNo ASC, PolicyYear DESC, CertificCustNo ASC) |
| CertificCustNo | 🟦 GLCerNewBusiness |
| CustCode | 🟦 GLCerNewBusiness |
| PolicyCode | 🟦 GLCerNewBusiness |
| PolicyNo | 🟦 GLCerNewBusiness |
| PolicyYear | 🟦 GLCerNewBusiness |
| ClassNo | 🟦 GLCerNewBusiness |
| EffectDate | 🟦 GLCerNewBusiness |
| TransDate | 🟦 GLCerNewBusiness |
| ChangeDate | 🟦 GLCerNewBusiness |
| LifeExtraRate | 🟦 GLCerNewBusiness |
| LifeInsur | 🟦 GLCerNewBusiness |
| AccInsur | 🟦 GLCerNewBusiness |
| MedInsur | 🟦 GLCerNewBusiness |
| TPDInsur | 🟦 GLCerNewBusiness |
| LifeE1Prem | 🟦 GLCerNewBusiness |
| LifePrem | 🟦 GLCerNewBusiness |
| AccPrem | 🟦 GLCerNewBusiness |
| MedPrem | 🟦 GLCerNewBusiness |
| Age | 🟦 GLCerNewBusiness |
| Status | 🟦 GLCerNewBusiness |
| TPDPrem | 🟦 GLCerNewBusiness |
| MedPlanRateIPPrem | 🟦 GLCerNewBusiness |
| MedPlanRateOPPrem | 🟦 GLCerNewBusiness |
| Dental | 🟦 GLCerNewBusiness |
| NetEmployer | 🟦 GLCerNewBusiness |
| NetEmployee | 🟦 GLCerNewBusiness |
| CompCode | 🟪 Customer |
| Sex | 🟪 Customer |
| Birthday | 🟪 Customer |
| CreatedDate | 🟨 System (GETDATE) |
| CreatedBy | 🟨 System ('SYSTEM') |
| UpdatedDate | 🟨 System (GETDATE) |
| UpdatedBy | 🟨 System ('SYSTEM') |


===== PAGE 1297973470 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimDeath =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_ClaimDeath | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
CREATE  VIEW RIG_View_ClaimDeath
AS
SELECT 
    ROW_NUMBER() OVER (ORDER BY dc.InformNo, da.Sequence) AS RigVClmDeathId,
    dc.InformNo,
    dc.PolicyCode,
    dc.PolicyNo,
    dc.PolicyYear,
    dc.CertificCustNo,
    dc.InformDate,
    dc.ConsiderDate,
    dc.DeathDate,
    dc.DeathCauseInform,
    dc.DeathCauseReal,
    (select b.DetailEng from DeathCause b where b.DeathCode = dc.DeathCauseReal) as DeathCauseRemark,
    dc.Policy_Age as PolicyAge,
    dc.Attn_Age as AttnAge,
    dc.EffectDate,
    dc.LossRatio,
    da.Approve_Claim as ApproveClaim,
    da.LifeInsur,
    da.AccInsur,
    dc.LifeInsurRequest,
    dc.AccInsurRequest,
    da.Approve_Date as ApproveDate,
    da.PayChoice,
    da.ResultDate,
    db.ReceiveNo,
    db.ReceiveDate,
    db.PayDate,
    da.Sequence AS ConsiderSeq,
    GETDATE() AS CreatedDate,
    'System' AS CreatedBy,
    GETDATE() AS UpdatedDate,
    'System' AS UpdatedBy
FROM DeathClaimConsider dc
LEFT JOIN DeathClaimApprove da 
    ON dc.InformNo = da.InformNo
OUTER APPLY (
    SELECT TOP (1) dcb.*
    FROM DeathClaimBenefit dcb
    WHERE dcb.InformNo = dc.InformNo
      AND dcb.Sequence = da.Sequence
    ORDER BY dcb.PayDate ASC, dcb.BenefitNo ASC
) db
INNER JOIN RIG_View_CertificateCust c 
    ON c.policyNo = dc.PolicyNo
   AND c.policyYear = dc.PolicyYear
   AND c.CertificCustNo = dc.CertificCustNo;
GO

]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก | Table (Source) | Field (Source) |
| 1 | PK | RigVClmDeathId | numeric | 8 | Y | เลขที่ Running |  | auto generate |  |  |
| 2 | Index | InformNo | varchar | 9 | Y | เลขที่ใบรับแจ้ง |  |  | DeathClaimConsider | InformNo |
| 3 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  | DeathClaimConsider | PolicyCode |
| 4 |  | PolicyNo | varchar | 8 | N | เลขที่กรมธรรม์ |  |  | DeathClaimConsider | PolicyNo |
| 5 |  | PolicyYear | numeric | 4 | N | กรมธรรม์ปีที่ |  |  | DeathClaimConsider | PolicyYear |
| 6 |  | CertificCustNo | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน |  |  | DeathClaimConsider | CertificCustNo |
| 7 |  | InformDate | datetime |  | N | วันที่รับแจ้ง |  |  | DeathClaimConsider | InformDate |
| 8 |  | ConsiderDate | datetime |  | N | วันที่รับเอกสารใบพิจารณา |  |  | DeathClaimConsider | ConsiderDate |
| 9 |  | DeathDate | datetime |  | N | วันที่เสียชีวิต |  |  | DeathClaimConsider | DeathDate |
| 10 |  | DeathCauseInform | varchar | 3 | N | สาเหตุ-ที่แจ้ง |  |  | DeathClaimConsider | DeathCauseInform |
| 11 |  | DeathCauseReal | varchar | 3 | N | สาเหตุ-ที่ตรวจสอบแล้ว |  |  | DeathClaimConsider | DeathCauseReal |
| 12 |  | DeathCauseRemark | varchar | 60 | N | หมายเหตุ |  |  | DeathCause | DetailEng |
| 13 |  | PolicyAge | varchar | 6 | N | อายุกรมธรรม์นับจากวันเข้าร่วม |  |  | DeathClaimConsider | Policy_Age |
| 14 |  | AttnAge | numeric | 4 | N | อายุสมาชิก ณ วันที่เกิดเหตุ |  |  | DeathClaimConsider | Attn_Age |
| 15 |  | EffectDate | datetime |  | N | วันแรกที่เข้าทำประกันชีวิต |  |  | DeathClaimConsider | EffectDate |
| 16 |  | LossRatio | numeric | 4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) |  |  | DeathClaimConsider | LossRatio |
| 17 |  | ApproveClaim | numeric | 4 | N | ผลการพิจารณา |  |  | DeathClaimApprove | Approve_Claim |
| 18 |  | LifeInsur | numeric | 14,2 | N | ทุนชีวิต (ที่อนุมัติจ่าย) |  |  | DeathClaimApprove | LifeInsur |
| 19 |  | AccInsur | numeric | 14,2 | N | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) |  |  | DeathClaimApprove | AccInsur |
| 20 |  | LifeInsurRequest | numeric | 14,2 | Y | ทุนชีวิตตามแผน (ที่ซื้อ) |  |  | DeathClaimConsider | LifeInsurRequest |
| 21 |  | AccInsurRequest | numeric | 14,2 | Y | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) |  |  | DeathClaimConsider | AccInsurRequest |
| 22 |  | ApproveDate | datetime |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ |  |  | DeathClaimApprove | Approve_Date |
| 23 |  | PayChoice | numeric | 2 | Y | การจ่ายสินไหม |  |  | DeathClaimApprove | PayChoice |
| 24 |  | ResultDate | datetime |  | N | วันที่ทำรายการ |  |  | DeathClaimApprove | ResultDate |
| 25 |  | ReceiveNo | varchar | 8 | Y | เลขที่ใบเสร็จ |  |  | DeathClaimBenefit | ReceiveNo |
| 26 |  | ReceiveDate | datetime |  | N | วันที่ออกใบเสร็จ |  |  | DeathClaimBenefit | ResultDate |
| 27 |  | SumInsur | numeric | 14,2 | N | ยอดเงินรวมที่ผู้รับผลฯ ได้รับ |  |  | DeathClaimBenefit | SumInsur |
| 28 |  | PayDate | datetime | 8 | N | วันที่จ่ายเงิน |  |  | DeathClaimBenefit | PayDate |
| 29 |  | ConsiderSeq | int |  | N | การพิจารณาเคลมครั้งที่ |  |  | DeathClaimConsider | ConsiderSeq |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |  |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |  |  |


===== PAGE 1308197442 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimDeath > View6 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVClmDeathId | bigint | 19 | Y |
| 2 | InformNo | varchar | 9 | N |
| 3 | PolicyCode | tinyint | 3 | Y |
| 4 | PolicyNo | varchar | 8 | Y |
| 5 | PolicyYear | int | 10 | Y |
| 6 | CertificCustNo | varchar | 8 | Y |
| 7 | InformDate | datetime |  | Y |
| 8 | ConsiderDate | datetime |  | Y |
| 9 | DeathDate | datetime |  | Y |
| 10 | DeathCauseInform | varchar | 3 | Y |
| 11 | DeathCauseReal | varchar | 3 | Y |
| 12 | DeathCauseRemark | varchar | 50 | Y |
| 13 | PolicyAge | varchar | 6 | Y |
| 14 | AttnAge | int | 10 | Y |
| 15 | EffectDate | datetime |  | Y |
| 16 | LossRatio | smallmoney | 10,4 | Y |
| 17 | ApproveClaim | int | 10 | Y |
| 18 | LifeInsur | money | 19,4 | N |
| 19 | AccInsur | money | 19,4 | N |
| 20 | LifeInsurRequest | money | 19,4 | N |
| 21 | AccInsurRequest | money | 19,4 | N |
| 22 | ApproveDate | datetime |  | Y |
| 23 | PayChoice | smallint | 5 | N |
| 24 | ResultDate | datetime |  | Y |
| 25 | ReceiveNo | varchar | 8 | N |
| 26 | ReceiveDate | datetime |  | Y |
| 27 | SumInsur | money | 19,4 | Y |
| 28 | PayDate | datetime |  | Y |
| 29 | CreatedDate | datetime |  | N |
| 30 | CreatedBy | varchar | 6 | N |
| 31 | UpdatedDate | datetime |  | N |
| 32 | UpdatedBy | varchar | 6 | N |


===== PAGE 1297973620 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimHealth =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_ClaimHealth | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Create View
<![CDATA[USE [OceanLife];
GO
Create VIEW dbo.RIG_View_ClaimHealth
AS
WITH AllPolicies AS
(
    -- ดึงข้อมูลกรมธรรม์ที่เกี่ยวข้องในรอบ 4 ปี
    SELECT PolicyNo, PolicyYear, 'GLPOLICY' AS SourceTable
    FROM GLPolicy Pol WITH (NOLOCK)
    WHERE ISNULL(ReInsur_No, '') <> ''
      AND PromiseDate >= DATEADD(YEAR, -4, GETDATE())
    UNION ALL
    SELECT Pol.PolicyNo, Pol.PolicyYear, 'GLOLDPOLICY' AS SourceTable
    FROM GLOldPolicy Pol WITH (NOLOCK)
    INNER JOIN GLPolicy PolSub WITH (NOLOCK)
        ON PolSub.PolicyNo = Pol.PolicyNo
       AND ISNULL(Pol.PolicyYear, 0) >= ISNULL(PolSub.PolicyYear, 0) - 2
    WHERE ISNULL(Pol.ReInsur_No, '') <> ''
      AND Pol.PromiseDate >= DATEADD(YEAR, -4, GETDATE())
),
Claim_Combined AS
(
    -- รวมข้อมูลเคลมที่อนุมัติแล้วจากทุกตาราง
    SELECT
        Notify_No, ConsiderDate, RD_No, RefClaimNo, Attn_Age, CerStatus, EffectDate, Exp_Date, Policy_Age,
        Accident_date, Admit_Date, Discharge_Date, Claim_Status, Claim_By, Claim_Request, Claim_Discount,
        Claim_NoPaid, Claim_ExGratia, Claim_Right, Claim_DiffRight, Claim_ClientPiad, Other_Request, Other_Right,
        Other_Remark, Approve_Claim, Approve_Date, Final_Diagnosis_1,
		ISNULL(TT_ClaimIP_MA.DSPolicyyear, TT_ClaimIP_MA.PolicyYear) as PolicyYear
    FROM TT_ClaimIP_MA WITH (NOLOCK)
    INNER JOIN AllPolicies
        ON AllPolicies.PolicyNo = TT_ClaimIP_MA.PolicyNo
       AND AllPolicies.PolicyYear = ISNULL(TT_ClaimIP_MA.DSPolicyyear, TT_ClaimIP_MA.PolicyYear)
    UNION ALL
    SELECT
        Notify_No, ConsiderDate, RD_No, RefClaimNo, Attn_Age, CerStatus, EffectDate, Exp_Date, Policy_Age,
        Accident_date, Admit_Date, Discharge_Date, Claim_Status, Claim_By, Claim_Request, Claim_Discount,
        Claim_NoPaid, Claim_ExGratia, Claim_Right, Claim_DiffRight, Claim_ClientPiad, Other_Request, Other_Right,
        Other_Remark, Approve_Claim, Approve_Date, Final_Diagnosis_1,
		ISNULL(TT_ClaimOP_MA.DSPolicyyear, TT_ClaimOP_MA.PolicyYear) as PolicyYear
    FROM TT_ClaimOP_MA WITH (NOLOCK)
    INNER JOIN AllPolicies
        ON AllPolicies.PolicyNo = TT_ClaimOP_MA.PolicyNo
       AND AllPolicies.PolicyYear = ISNULL(TT_ClaimOP_MA.DSPolicyyear, TT_ClaimOP_MA.PolicyYear)
    UNION ALL
    SELECT
        Notify_No,
        ConsiderDate,
        RD_No,
        '' AS RefClaimNo,
        Attn_Age,
        CerStatus,
        EffectDate,
        Exp_Date,
        Policy_Age,
        AccidentDate   AS Accident_date,
        AdmitDate      AS Admit_Date,
        DischargeDate  AS Discharge_Date,
        -1             AS Claim_Status,
        Claim_By,
        Claim_Request,
        Claim_Discount,
        Claim_NoPaid,
        Claim_ExGratia,
        Claim_Right,
        Claim_DiffRight,
        Claim_ClientPaid AS Claim_ClientPiad,
        0              AS Other_Request,
        0              AS Other_Right,
        ''             AS Other_Remark,
        FaxClaim_Status AS Approve_Claim,
        AuditDate      AS Approve_Date,
        Final_Diagnosis1 AS Final_Diagnosis_1,
		TT_ClaimPA_MA.DSPolicyyear as PolicyYear
    FROM TT_ClaimPA_MA WITH (NOLOCK)
    INNER JOIN AllPolicies
        ON AllPolicies.PolicyNo = TT_ClaimPA_MA.PolicyNo
       AND AllPolicies.PolicyYear = TT_ClaimPA_MA.DSPolicyyear
)
SELECT
    -- N (Notify)
    ROW_NUMBER() OVER (ORDER BY N.Notify_No) AS RigVClmHealthId,
    N.Notify_No  AS NotifyNo,
    N.Notify_Date AS NotifyDate,
    N.FollowUp,
    N.Policy_Type AS PolicyType,
    N.PolicyNo,
    ISNULL(CC.Policyyear, N.DSPolicyyear) as PolicyYear, 
    N.Cerno,
    N.CustCode,
    N.Curr_Age AS CurrAge,
    N.Type_Claim AS TypeClaim,
    -- CC (Claim)
    CC.Final_Diagnosis_1 AS CauseOfClaim,
    ISNULL(ICD10.English, ICD10.Thai) AS CauseDetail,     -- JOIN ICD10
    Rider.RD_Abbreviation AS ClaimType,                   -- JOIN Rider
    CC.ConsiderDate,
    CC.RD_No AS RDNo,
    CC.RefClaimNo,
    CC.Attn_Age AS AttnAge,
    CC.CerStatus,
    CC.EffectDate,
    CC.Exp_Date AS ExpDate,
    CC.Policy_Age AS PolicyAge,
    CC.Accident_date AS AccidentDate,
    CC.Admit_Date AS AdmitDate,
    CC.Discharge_Date AS DischargeDate,
    CC.Claim_Status AS ClaimStatus,
    CC.Claim_By AS ClaimBy,
    CC.Claim_Request AS ClaimRequest,
    CC.Claim_Discount AS ClaimDiscount,
    CC.Claim_NoPaid AS ClaimNoPaid,
    CC.Claim_ExGratia AS ClaimExGratia,
    -- Rights (CC + MP)
    (ISNULL(CC.Claim_Right, 0) + ISNULL(MP.NetClaim_Right, 0)) AS ClaimRight,
    CC.Claim_DiffRight AS ClaimDiffRight,
    -- Other / Approve
    CC.Claim_ClientPiad AS ClaimClientPiad,
    CC.Other_Request AS OtherRequest,
    CC.Other_Right AS OtherRight,
    CC.Other_Remark AS OtherRemark,
    CC.Approve_Claim AS ApproveClaim,
    Lm.AuditDate AS ApproveDate,
    -- LB (Payment)
    LB.Occur_Date AS OccurDate,
    LB.Pay_Date AS PayDate,
    --LB.Pay_Amount AS PayAmount,
	COALESCE(LB.Pay_Amount, LM.AcPay_Amount, 0) AS PayAmount,
	CASE WHEN CC.RD_No = 26 THEN ISNULL(MI.MedInsur, 0) ELSE 0 END AS MedInsur,
    GETDATE() AS CreatedDate,
    'System' AS CreatedBy,
    GETDATE() AS UpdatedDate,
    'System' AS UpdatedBy
FROM dbo.TT_ClaimNotify N WITH (NOLOCK)
/*edit by Waratchayanan 06-05-69 https://redmine.ochi.link/issues/67581*/
--INNER JOIN AllPolicies P
--    ON P.PolicyNo = N.PolicyNo
--   AND P.PolicyYear = ISNULL(N.DSPolicyyear, N.PolicyYear)
--LEFT JOIN Claim_Combined CC
--    ON N.Notify_No = CC.Notify_No
LEFT JOIN Claim_Combined CC
   ON N.Notify_No = CC.Notify_No
INNER JOIN AllPolicies P
    ON P.PolicyNo = N.PolicyNo
   AND P.PolicyYear = CC.PolicyYear
LEFT JOIN TT_Ac_LogBook LB
    ON N.Notify_No = LB.Notify_No
INNER JOIN dbo.RIG_View_CertificateCust VCer WITH (NOLOCK)
    ON VCer.policyNo = N.policyNo
   AND VCer.policyYear =  ISNULL(CC.Policyyear, N.DSPolicyyear) 
   AND VCer.CertificCustNo = N.Cerno
-- Lookup tables
LEFT JOIN dbo.ICD10 ICD10 WITH (NOLOCK)
    ON CC.Final_Diagnosis_1 = ICD10.Code
LEFT JOIN dbo.BT_GrpRider Rider WITH (NOLOCK)
    ON CC.RD_No = Rider.RD_No
LEFT JOIN dbo.TT_ClaimMP_MA MP WITH (NOLOCK)
    ON N.Notify_No = MP.Notify_No
LEFT JOIN OceanLife.dbo.tt_logbookma LM
    ON n.Log_No = LM.Batch_No
OUTER APPLY
(
    SELECT TOP (1) X.MedInsur
    FROM
    (
        SELECT MedInsur
        FROM GLCertificateCust WITH (NOLOCK)
        WHERE PolicyNo = N.PolicyNo
          AND PolicyYear =  ISNULL(CC.Policyyear, N.DSPolicyyear)
          AND CertificCustNo = N.Cerno
        UNION ALL
        SELECT MedInsur
        FROM GLOldCertificateCust WITH (NOLOCK)
        WHERE PolicyNo = N.PolicyNo
          AND PolicyYear =  ISNULL(CC.Policyyear, N.DSPolicyyear)
          AND CertificCustNo = N.Cerno
    ) X
) MI;
GO




]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVClmHealthId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | NotifyNo | varchar | 12 | Y | เลขที่รับแจ้ง YYYY/MM/999999 |  |  |
| 3 |  | NotifyDate | datetime |  | N | วันที่แจ้ง/รับเอกสาร |  |  |
| 4 |  | FollowUp | varchar | 12 | N | Notify เดิม |  |  |
| 5 |  | PolicyType | numeric |  | N | ประเภทกรมธรรม์ |  |  |
| 6 |  | PolicyNo | varchar | 20 | N | เลขที่กรมธรรม์ |  |  |
| 7 |  | PolicyYear | numeric |  | N | ปีกรมธรรม์ |  |  |
| 8 |  | CerNo | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน |  |  |
| 9 |  | CustCode | varchar | 10 | N | รหัสลูกค้า |  |  |
| 10 |  | CurrAge | numeric | 3 | N | อายุผู้เอาประกัน (วันเกิด-วันที่บันทึก Notify_No.) |  |  |
| 11 |  | TypeClaim | numeric | 1 | N | ประเภทการเคลม 0 : เจ็บป่วย 1 : อุบัติเหตุ |  |  |
| 12 |  | CauseOfClaim | numeric | 1 | N | 0 : Motorcycle; 1 : Car; 2 : General; 3 : Murder |  |  |
| 13 |  | CauseDetail | varchar | 150 | N | สาเหตุการเกิดอุบัติเหตุ |  |  |
| 14 |  | ClaimType | varchar | 3 | Y | ประเภทเคลม |  |  |
| 15 |  | ConsiderDate | datetime |  | N | วันที่พิจารณา |  |  |
| 16 |  | RDNo | varchar | 2 | N | รหัสความคุ้มครอง |  |  |
| 17 |  | RefClaimNo | varchar | 20 | N | อ้างเลขที่เคลมเดิม |  |  |
| 18 |  | AttnAge | numeric | 3 | N | อายุผู้เอาประกัน |  |  |
| 19 |  | CerStatus | char | 1 | N | สถานะผู้เอาประกัน |  |  |
| 20 |  | EffectDate | datetime |  | N | วันที่มีผลบังคับ |  |  |
| 21 |  | ExpDate | datetime |  | N |  |  |  |
| 22 |  | PolicyAge | varchar | 6 | N | อายุกรมธรรม์ |  |  |
| 23 |  | AccidentDate | datetime |  | N | วันที่เกิดเหตุ |  |  |
| 24 |  | AdmitDate | datetime |  | N | วันที่เข้ารับการรักษา |  |  |
| 25 |  | DischargeDate | datetime |  | N | วันที่ออกจากโรงพยาบาล |  |  |
| 26 |  | ClaimStatus | numeric | 1 | N | 0:รักษาฯ,1:ผ่าตัด;2:อุบัติเหตุฯ;3:คลอดบุตร |  |  |
| 27 |  | ClaimBy | numeric | 1 | N | 0:โรงพยาบาล (Fax);1:โรงพยาบาล (Credit);2:ใบเสร็จ/ใบแจ้งหนี้ |  |  |
| 28 |  | ClaimRequest | numeric | 14,2 | N | ค่ารักษาฯ (เรียกร้อง) |  |  |
| 29 |  | ClaimDiscount | numeric | 14,2 | N | ส่วนลดค่ารักษาฯ |  |  |
| 30 |  | ClaimNoPaid | numeric | 14,2 | N | ส่วนค่ารักษาฯที่ไม่จ่าย |  |  |
| 31 |  | ClaimExGratia | numeric | 14,2 | N | ส่วนค่ารักษาฯที่อนุโลมจ่าย |  |  |
| 32 |  | ClaimRight | numeric | 14,2 | N | ค่ารักษาฯ (จ่าย) |  |  |
| 33 |  | ClaimDiffRight | numeric | 14,2 | N | ส่วนเกินจากการเคลม |  |  |
| 34 |  | ClaimClientPiad | numeric | 14,2 | N | จำนวนเงิน (ผู้เอาประกันต้องจ่าย) |  |  |
| 35 |  | OtherRequest | numeric | 14,2 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (เรียกร้อง) |  |  |
| 36 |  | OtherRight | numeric | 14,2 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (จ่าย) |  |  |
| 37 |  | OtherRemark | varchar | 50 | N | หมายเหตุ (ค่าใช้จ่ายเบ็ตเตล็ด) |  |  |
| 38 |  | ApproveClaim | varchar | 3 | N | สถานะการเคลม |  |  |
| 39 |  | ApproveDate | datetime |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ |  |  |
| 40 |  | OccurDate | datetime |  | N | วันที่เกิดเหตุ |  |  |
| 41 |  | PayDate | datetime |  | N | วันที่จ่าย |  |  |
| 42 |  | PayAmount | numeric | 14,2 | N | ยอดเงินจ่าย |  |  |
| 43 |  | MedInsur | numeric | 14,2 | N | ทุนค่ารักษาจาก อบ. (Med acc) |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197411 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimHealth > View1 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVClmDeathId | bigint | 19 | Y |
| 2 | InformNo | varchar | 9 | N |
| 3 | PolicyCode | tinyint | 3 | Y |
| 4 | PolicyNo | varchar | 8 | Y |
| 5 | PolicyYear | int | 10 | Y |
| 6 | CertificCustNo | varchar | 8 | Y |
| 7 | InformDate | datetime |  | Y |
| 8 | ConsiderDate | datetime |  | Y |
| 9 | DeathDate | datetime |  | Y |
| 10 | DeathCauseInform | varchar | 3 | Y |
| 11 | DeathCauseReal | varchar | 3 | Y |
| 12 | DeathCauseRemark | varchar | 50 | Y |
| 13 | PolicyAge | varchar | 6 | Y |
| 14 | AttnAge | int | 10 | Y |
| 15 | EffectDate | datetime |  | Y |
| 16 | LossRatio | smallmoney | 10,4 | Y |
| 17 | ApproveClaim | int | 10 | Y |
| 18 | LifeInsur | money | 19,4 | N |
| 19 | AccInsur | money | 19,4 | N |
| 20 | LifeInsurRequest | money | 19,4 | N |
| 21 | AccInsurRequest | money | 19,4 | N |
| 22 | ApproveDate | datetime |  | Y |
| 23 | PayChoice | smallint | 5 | N |
| 24 | ResultDate | datetime |  | Y |
| 25 | ReceiveNo | varchar | 8 | N |
| 26 | ReceiveDate | datetime |  | Y |
| 27 | SumInsur | money | 19,4 | Y |
| 28 | PayDate | datetime |  | Y |
| 29 | CreatedDate | datetime |  | N |
| 30 | CreatedBy | varchar | 6 | N |
| 31 | UpdatedDate | datetime |  | N |
| 32 | UpdatedBy | varchar | 6 | N |


===== PAGE 1297973489 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimTPD =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_ClaimTPD | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
Create  VIEW RIG_View_ClaimTPD  
AS
select ROW_NUMBER() OVER (ORDER BY cs.PolicyNo,cs.InformNo) AS RigVClmTpdId,
cs.InformNo as InformNo,
cs.ConsiderDate,
cs.PolicyCode,
cs.PolicyNo,
cs.PolicyYear,
cs.CertificCustNo,
cs.CustCode,
cs.Attn_Age as AttnAge,
cs.Status,
cs.EffectDate,
cs.AccidentDate,
cs.AccidentCause,
cs.Policy_Age as PolicyAge,
cs.ACCInsur,
cs.TPDInsur,
cs.ClaimStatus,
cs.ProdClaimCode,
cs.Indemnity_Rate as IndemnityRate,
cs.Indemnity_Amt as IndemnityAmt,
cs.TPDProdCode,
cs.LossRatio,
cs.Approve_ACCInsur as ApproveACCInsur,
cs.Approve_TPDInsur as ApproveTPDInsur,
ca.Approve_Claim as ApproveClaim,
ca.Approve_Date as ApproveDate,
cr.ReceiveNo,
cr.ReceiveDate,
cr.Amount,
cr.PayDate,
GETDATE() AS CreatedDate,
'System' AS CreatedBy,
GETDATE() AS UpdatedDate,
'System' AS UpdatedBy
from claimtpdconsider cs
left join claimtpdapprove ca on cs.InformNo = ca.InformNo
OUTER APPLY (
    SELECT TOP (1) a.*
    FROM claimtpdreceive a
    WHERE cs.InformNo = a.InformNo
    ORDER BY a.PayDate ASC
) cr 
inner join RIG_View_CertificateCust c on c.policyNo = cs.PolicyNo
and c.policyYear = cs.policyYear and c.CertificCustNo = cs.CertificCustNo
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVClmTpdId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | InformNo | varchar | 9 | Y | เลขที่รับแจ้ง |  |  |
| 3 |  | ConsiderDate | datetime |  | Y | วันที่แจ้ง/รับเอกสารใบพิจารณา |  |  |
| 4 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |
| 5 |  | PolicyNo | varchar | 8 | N | เลขที่กรมธรรม์ |  |  |
| 6 |  | PolicyYear | numeric | 4 | N | กรมธรรม์ปีที่ |  |  |
| 7 |  | CertificCustNo | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน |  |  |
| 8 |  | CustCode | varchar | 10 | N | รหัสลูกค้า |  |  |
| 9 |  | AttnAge | numeric | 4 | N | อายุผู้เอาประกัน |  |  |
| 10 |  | Status | varchar | 1 | N | สถานะผู้เอาประกัน |  |  |
| 11 |  | EffectDate | datetime |  | N | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ |  |  |
| 12 |  | AccidentDate | datetime |  | N | วันที่ประสบอุบัติเหตุ |  |  |
| 13 |  | AccidentCause | varchar | 50 | N | สาเหตุฯ |  |  |
| 14 |  | PolicyAge | varchar | 6 | N | อายุกรมธรรม์ |  |  |
| 15 |  | ACCInsur | numeric | 14,2 | N | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) |  |  |
| 16 |  | TPDInsur | numeric | 14,2 | N | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) |  |  |
| 17 |  | ClaimStatus | numeric | 14,2 | N | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ |  |  |
| 18 |  | ProdClaimCode | varchar | 6 | N | รหัสเคลม (สูญเสียอวัยวะ) |  |  |
| 19 |  | IndemnityRate | numeric | 14,2 | N | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur |  |  |
| 20 |  | IndemnityAmt | numeric | 14,2 | N | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) |  |  |
| 21 |  | TPDProdCode | varchar | 8 | N | รหัสความคุ้มครองทุพพลภาพ (TPD) |  |  |
| 22 |  | LossRatio | numeric | 14,2 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) |  |  |
| 23 |  | ApproveACCInsur | numeric | 14,2 | N | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) |  |  |
| 24 |  | ApproveTPDInsur | numeric | 14,2 | N | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) |  |  |
| 25 |  | ApproveClaim | numeric | 14,2 | N | ผลการพิจารณา |  |  |
| 26 |  | ApproveDate | datetime | 14,2 | N | วันที่ตรวจสอบ/สั่งงานต่อ |  |  |
| 27 |  | ReceiveNo | varchar | 8 | Y | เลขที่ใบเสร็จ |  |  |
| 28 |  | ReceiveDate | datetime |  | Y | วันที่ออกใบเสร็จ |  |  |
| 29 |  | Amount | numeric | 14,2 | N | ยอดเงินที่ต้องจ่าย |  |  |
| 30 |  | PayDate | datetime |  | N | วันที่จ่ายเงิน |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197461 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ClaimTPD > View7 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVClmTpdId | bigint | 19 | Y |
| 2 | InformNo | varchar | 9 | N |
| 3 | ConsiderDate | datetime |  | N |
| 4 | PolicyCode | tinyint | 3 | Y |
| 5 | PolicyNo | varchar | 8 | Y |
| 6 | PolicyYear | int | 10 | Y |
| 7 | CertificCustNo | varchar | 8 | Y |
| 8 | CustCode | varchar | 10 | Y |
| 9 | AttnAge | int | 10 | Y |
| 10 | Status | char | 1 | Y |
| 11 | EffectDate | datetime |  | Y |
| 12 | AccidentDate | datetime |  | Y |
| 13 | AccidentCause | varchar | 50 | Y |
| 14 | PolicyAge | varchar | 6 | Y |
| 15 | ACCInsur | money | 19,4 | Y |
| 16 | TPDInsur | money | 19,4 | Y |
| 17 | ClaimStatus | tinyint | 3 | Y |
| 18 | ProdClaimCode | varchar | 6 | Y |
| 19 | IndemnityRate | money | 19,4 | Y |
| 20 | IndemnityAmt | money | 19,4 | Y |
| 21 | TPDProdCode | varchar | 8 | Y |
| 22 | LossRatio | smallmoney | 10,4 | Y |
| 23 | ApproveACCInsur | money | 19,4 | Y |
| 24 | ApproveTPDInsur | money | 19,4 | Y |
| 25 | ApproveClaim | int | 10 | Y |
| 26 | ApproveDate | datetime |  | Y |
| 27 | ReceiveNo | varchar | 8 | Y |
| 28 | ReceiveDate | datetime |  | Y |
| 29 | Amount | money | 19,4 | Y |
| 30 | PayDate | datetime |  | Y |
| 31 | CreatedDate | datetime |  | N |
| 32 | CreatedBy | varchar | 6 | N |
| 33 | UpdatedDate | datetime |  | N |
| 34 | UpdatedBy | varchar | 6 | N |


===== PAGE 1297973456 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Company =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_Company | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
 /* Object: View [dbo].[RIG_View_Company] 
   Description: View สำหรับแสดงข้อมูลบริษัทจากกรมธรรม์ โดยดึงข้อมูลข้าม Database (OGL)
   Updated: [2025.11.20] by */
/*Edit V2 siriporn 19-12-2025 ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)*/ 
/*Edit V3 siriporn 19-02-2025 ขอเพิ่ม PolicyYear*/ 
Create VIEW [dbo].[RIG_View_Company]
AS
WITH AllCompanyDBD AS
(
    SELECT
        vGL.CompanyCode,
        vGL.PolicyNo, 
		vGL.PolicyYear, 
        cat.DBDCODE,
        cat.TypeBusiness,
        GETDATE() AS CreatedDate,
        'SYSTEM' AS CreatedBy,
        GETDATE() AS UpdatedDate,
        'SYSTEM' AS UpdatedBy
    FROM [dbo].[RIG_View_Policy] AS vGL
    LEFT JOIN OGL.dbo.OGL_QClosingHD AS qcl WITH (NOLOCK) 
        ON qcl.DOCNO = vGL.QCLDOCNO
    LEFT JOIN OGL.dbo.OGL_ProspectHD AS prs WITH (NOLOCK) 
        ON prs.Docno = qcl.DOCNOProspect 
    LEFT JOIN OGL.dbo.OGL_CompanyAtThai AS cat WITH (NOLOCK) 
        ON cat.Docno_PRS = prs.Docno 
        AND cat.DOCNO = prs.DOCNO_CompanyAtThai
    WHERE ISNULL(vGL.QCLDOCNO, '') <> ''
      AND ISNULL(cat.DBDCODE, '') <> ''
      AND qcl.Status <> 2 /*Edit by siriporn Case Cancel*/
      AND prs.Status <> 2 /*Edit by siriporn Case Cancel*/
      AND cat.Status <> 2 /*Edit by siriporn Case Cancel*/
	  and vGL.PromiseDate >= dateadd(year,-5,getdate())
	   
    GROUP BY
        vGL.CompanyCode,
        vGL.PolicyNo,
		vGL.PolicyYear, 
        cat.DBDCODE,
        cat.TypeBusiness 
)
SELECT 
    ROW_NUMBER() OVER (ORDER BY ADBD.CompanyCode ASC) AS RigVCompid,
    ADBD.*
FROM AllCompanyDBD AS ADBD;
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | RigVCompid | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | CompanyCode | varchar | 10 | Y | รหัสบริษัท |  |  |
| 3 | Index | PolicyNo | varchar | 8 | Y | เลขกรมธรรม์ |  |  |
| 4 |  | DBDCODE | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า |  |  |
| 5 |  | TypeBusiness | varchar | 250 | N | ประเภทธุรกิจของบริษัท |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197466 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Company > View8 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVCompid | bigint | 19 | Y |
| 2 | CompanyCode | varchar | 10 | Y |
| 3 | PolicyNo | varchar | 8 | N |
| 4 | DBDCODE | varchar | 20 | Y |
| 5 | TypeBusiness | varchar | 250 | Y |
| 6 | CreatedDate | datetime |  | N |
| 7 | CreatedBy | varchar | 6 | N |
| 8 | UpdatedDate | datetime |  | N |
| 9 | UpdatedBy | varchar | 6 | N |


===== PAGE 1308950672 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Company > เงื่อนไข RIG_View_Company =====
## RIG_View_Company
View สำหรับดึงข้อมูล เลขจดทะเบียนนิติบุคคล (DBD Code) และ ประเภทธุรกิจ ของบริษัท (Company) ที่ผูกกับกรมธรรม์ โดยอ้างอิง QCLDOCNO จาก RIG_View_Policy แล้วไปเชื่อมข้อมูลในฐาน OGL (QClosing → Prospect → CompanyAtThai)

## เงื่อนไข (Summary)

### แหล่งข้อมูลและการเชื่อมตาราง
เริ่มจาก RIG_View_Policy (vGL) แล้วเชื่อม OGL ดังนี้ (ทั้งหมดเป็น LEFT JOIN แต่มีเงื่อนไขกรองทำให้กลายเป็นต้องมีข้อมูลจริง)
- OGL_QClosingHD (qcl) : qcl.DOCNO = vGL.QCLDOCNO
- OGL_ProspectHD (prs) : prs.Docno = qcl.DOCNOProspect
- OGL_CompanyAtThai (cat) :cat.Docno_PRS = prs.Docno และ cat.DOCNO = prs.DOCNO_CompanyAtThai
- cat.Docno_PRS = prs.Docno และ cat.DOCNO = prs.DOCNO_CompanyAtThai

### เงื่อนไขคัดเลือกข้อมูล (WHERE)
- ต้องมี vGL.QCLDOCNO ไม่ว่าง
- ต้องมี cat.DBDCODE ไม่ว่าง
- ตัดรายการ Cancel ออก (Status <> 2) ทุกตารางใน chain:qcl.Status <> 2prs.Status <> 2cat.Status <> 2
- qcl.Status <> 2
- prs.Status <> 2
- cat.Status <> 2

### การจัดกลุ่ม (กันข้อมูลซ้ำ)
- GROUP BY vGL.CompanyCode, vGL.PolicyNo, cat.DBDCODE, cat.TypeBusiness

## RIG_View_Company – Field Mapping (แยกสี)
Legend
- 🟦 RIG_View_Policy (vGL)
- 🟩 OGL_QClosingHD (qcl) (ใช้ join/filter แต่ไม่ได้ select ออกมา)
- 🟪 OGL_ProspectHD (prs) (ใช้ join/filter แต่ไม่ได้ select ออกมา)
- 🟧 OGL_CompanyAtThai (cat)
- 🟨 System
| Field | Source |
| RigVCompid | 🟨 System (ROW_NUMBER order by CompanyCode ASC) |
| CompanyCode | 🟦 RIG_View_Policy (vGL.CompanyCode) |
| PolicyNo | 🟦 RIG_View_Policy (vGL.PolicyNo) |
| DBDCODE | 🟧 OGL_CompanyAtThai (cat.DBDCODE) |
| TypeBusiness | 🟧 OGL_CompanyAtThai (cat.TypeBusiness) |
| CreatedDate | 🟨 System (GETDATE) |
| CreatedBy | 🟨 System ('SYSTEM') |
| UpdatedDate | 🟨 System (GETDATE) |
| UpdatedBy | 🟨 System ('SYSTEM') |
หมายเหตุ (ใส่ท้ายตารางได้)
- แม้จะเป็น LEFT JOIN แต่มีเงื่อนไข QCLDOCNO <> '' และ DBDCODE <> '' ทำให้ผลลัพธ์จะมีเฉพาะรายการที่เชื่อม OGL ได้จริง
- qcl/prs/cat ถูกกรอง Status <> 2 เพื่อไม่เอารายการ Cancel


===== PAGE 1298301110 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ExpRefund =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_ExpRefund | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
/*Edit V2 siriporn 19-12-2025 ขอเปลี่ยนชื่อ Field ให้เป็นไปในทิศทางเดียวกันค่ะ (ของเดิมมี _ หรือเป็น snakecase)*/   
CREATE VIEW [dbo].[RIG_View_ExpRefund]
AS
WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
	select PolicyNo, PolicyYear,-- PromiseDate,  ReInsur_No, ExpireDate,
	       'GLPOLICY' AS SourceTable 
	from GLPolicy Pol 
	where isnull(ReInsur_No,'') <> '' 
	and ExpreienceRefund = 1
	and PromiseDate >= Dateadd(Year,-4,Getdate()) /*Limite Promisedate ย้อนหลัง 4 ปี*/
	union all
	select PolSub.PolicyNo, Pol.PolicyYear, --Pol.PromiseDate, Pol.ReInsur_No, Pol.ExpireDate ,
	       'GLOLDPOLICY' AS SourceTable 
	from GLOldPolicy Pol inner join GLPolicy PolSub
	on PolSub.PolicyNo = Pol.PolicyNo and isnull(Pol.PolicyYear,0) >= isnull(PolSub.PolicyYear,0) - 2
	where isnull(Pol.ReInsur_No,'') <> ''  
	and Pol.ExpreienceRefund = 1
	and Pol.PromiseDate >= Dateadd(Year,-4,Getdate()) /*Limite Promisedate ย้อนหลัง 4 ปี*/
), -- จัดเรียงกรมธรรม์เพื่อแบ่งลำดับปี
 
 AllExpRefund AS ( 
    SELECT  HD.DocNo, HD.DocDate, HD.AtDate, HD.ModeOfPayment, HD.PolicyNo, HD.PolicyYear, HD.PeriodBeginDate, HD.PeriodEndDate, HD.CalDate, 
			HD.CompanyCodeHead, HD.CompanyNameHead, HD.CompanyCode,  HD.CompanyName, HD.LotNo, HD.LotNoAll, HD.PremiumAll, HD.PremiumAllG, 
			HD.ClaimAll, HD.ClaimReserve, HD.ClaimReservePercent, HD.LastYearClaimReserve, HD.TotalClaim, HD.TotalAmt, HD.TotalAmtPercent,
			HD.ADJClaim, HD.NetAmt, HD.ExpRefundGPercent, HD.ExpRefundG, HD.ExpRefund, HD.InvoiceNo, 
			HD.Beneficiary_Companycode AS BeneficiaryCompanycode, 
			HD.Beneficiary_Companyname AS BeneficiaryCompanyname,   
			HD.Type, HD.PremiumStatement, HD.PremiumAdj, HD.PremiumInv, 
			HD.ExpRefundG_sum AS ExpRefundGSum, 
			DT.Type AS RDType, 
			Rid.RD_NAME AS RDNAME, DT.Premium, DT.ExpRefund AS ExpRefundDT, DT.PremiumE1, 
			DT.ExpRefundE1, DT.FlgCal, DT.ExpRefundPerM, DT.ExpRefundE1PerM
	FROM ZGL_GLExpRefund_HD AS HD WITH (nolock) INNER JOIN
		 ZGL_GLExpRefund_DT AS DT WITH (nolock) ON HD.DocNo = DT.DocNo
		 LEFT JOIN BT_GrpRider Rid WITH (nolock) ON Rid.RD_NO = DT.TYPE  
		 INNER JOIN AllPolicies  
			ON HD.PolicyNo = AllPolicies.PolicyNo
			AND HD.PolicyYear = AllPolicies.PolicyYear
	WHERE  (HD.Status > 2)
	--AND HD.DocNo = 'EXP.2568/00015'
) 
select  ROW_NUMBER() OVER (
        ORDER BY C.PolicyNo ASC, C.PolicyYear DESC
        ) AS RigVExpId,   * ,
        GETDATE() as CreatedDate,
        'SYSTEM' as CreatedBy,
        GETDATE() as UpdatedDate,
        'SYSTEM' as UpdatedBy
FROM AllExpRefund C 
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Exmple | เงื่อนไขการบันทึก |
| 1 | PK | RigVExpId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | DocNo | varchar | 20 | Y | เลขที่เอกสาร |  |  |
| 3 |  | DocDate | datetime |  | N | วันที่จัดทำเอกสาร |  |  |
| 4 |  | AtDate | datetime |  | N | วันที่จัดทำเอกสาร |  |  |
| 5 |  | ModeOfPayment | numeric | 4 | Y | ประเภทการจ่าย |  |  |
| 6 | Index | PolicyNo | varchar | 8 | N | เลขกรมธรรม์ |  |  |
| 7 |  | PolicyYear | numeric | 4 | Y | กรมธรรม์ปีที่ |  |  |
| 8 |  | PeriodBeginDate | datetime |  | N | วันที่มีผลบังคับ |  |  |
| 9 |  | PeriodEndDate | datetime |  | N | วันที่สิ้นสุด |  |  |
| 10 |  | CalDate | datetime |  | N | วันที่คำนวณ |  |  |
| 11 |  | CompanyCodeHead | varchar | 20 | N | รหัสผู้ทรงกรรม์ |  |  |
| 12 |  | CompanyNameHead | varchar | 150 | N | ชื่อผู้ทรงกรรม์ |  |  |
| 13 |  | CompanyCode | varchar | 20 | N | รหัสบริษัท |  |  |
| 14 |  | CompanyName | varchar | 150 | N | ชื่อบริษัท |  |  |
| 15 |  | LotNo | numeric | 4 | Y |  |  |  |
| 16 |  | LotNoAll | numeric | 4 | Y |  |  |  |
| 17 |  | PremiumAll | numeric | 19,4 | Y | เบี้ยประกันของบริษัท |  |  |
| 18 |  | PremiumAllG | numeric | 19,4 | Y | เบี้ยประกันทั้งกลุ่ม |  |  |
| 19 |  | ClaimAll | numeric | 19,4 | Y | สินไหมจ่าย |  |  |
| 20 |  | ClaimReserve | numeric | 19,4 | Y | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ |  |  |
| 21 |  | ClaimReservePercent | numeric | 4 | Y | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ |  |  |
| 22 |  | LastYearClaimReserve | numeric | 19,4 | Y | เงินสำรองสำหรับสินไหมที่ตั้งไว้ ณ สิ้นปีกรมธรรม์ที่ผ่านมา |  |  |
| 23 |  | TotalClaim | numeric | 19,4 | Y | รวมสินไหมทั้งหมด |  |  |
| 24 |  | TotalAmt | numeric | 19,4 | Y | เบี้ยประกัน-สินไหม |  |  |
| 25 |  | TotalAmtPercent | numeric | 4 | Y | ร้อยละของเบี้ยประกัน-สินไหม |  |  |
| 26 |  | ADJClaim | numeric | 19,4 | Y | สินไหมติดลบ ยกยอดมาจากปีก่อน |  |  |
| 27 |  | NetAmt | numeric | 19,4 | Y | ยอดรวมสุทธิ |  |  |
| 28 |  | ExpRefundGPercent | numeric | 4 | Y | คืนยอดกี่%ของเงินรวมสุทธิ |  |  |
| 29 |  | ExpRefundG | numeric | 19,4 | Y | ยอดของทั้งกรมธรรม์ |  |  |
| 30 |  | ExpRefund | numeric | 19,4 | Y | ยอดส่วนของบริษัท |  |  |
| 31 |  | InvoiceNo | varchar | 20 | N | อ้างอิงเลข InvoiceNo ที่นำไปใช้ |  |  |
| 32 |  | BeneficiaryCompanycode | varchar | 20 | N | รหัสบริษัทผู้รับผลประโยชน์เงินคืน |  |  |
| 33 |  | BeneficiaryCompanyname | varchar | 150 | N | ชื่อบริษัทผู้รับผลประโยชน์เงินคืน |  |  |
| 34 |  | Type | varchar | 10 | N | ประเภทการคำนวณ |  |  |
| 35 |  | PremiumStatement | numeric | 19,4 | Y | เบี้ยประกันจากStatement(กรณีทำแบบประมาณการ) |  |  |
| 36 |  | PremiumAdj | numeric | 19,4 | Y | เบี้ยประกันจากAdjust(กรณีทำแบบประมาณการ) |  |  |
| 37 |  | PremiumInv | numeric | 19,4 | Y | เบี้ยประกันจากInvoice (กรณีทำแบบประมาณการ) |  |  |
| 38 |  | ExpRefundGSum | numeric | 19,4 | N | ยอดเงินคืนรวมที่ผ่านการปัดเศษแล้ว |  |  |
| 39 |  | RDType | varchar |  | Y |  |  |  |
| 40 |  | RDNAME | varchar |  | N |  |  |  |
| 41 |  | Premium | numeric | 19,4 | Y | ยอดเบี้ย |  |  |
| 42 |  | ExpRefundDT | numeric | 19,4 | Y |  |  |  |
| 43 |  | PremiumE1 | numeric | 19,4 | Y | ยอดเบี้ย E1 |  |  |
| 44 |  | ExpRefundE1 | numeric | 19,4 | Y | ยอดเงินคืนตามประสบการณ์ E1 |  |  |
| 45 |  | FlgCal | boolean |  | N | ใช้คำนวณเงินคืนไหม |  |  |
| 46 |  | ExpRefundPerM | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์รายเดือน |  |  |
| 47 |  | ExpRefundE1PerM | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์E1รายเดือน |  |  |
| 48 |  | ClaimLife | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Life |  | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 49 |  | ClaimADD | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง ADD |  | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 50 |  | ClaimDismem | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Dismemberment |  | (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 10/06/2026) |
| 51 |  | PendingLife | numeric | 19,4 | N | ยอดรอดำเนินการเคลมความคุ้มครอง Life |  | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 52 |  | PendingADD | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง ADD |  | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 53 |  | PendingDismem | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง Dismemberment |  | (#CR_EXREFUND suthanee.sa 08/06/2026) (suthanee.sa 10/06/2026) |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197472 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_ExpRefund > View9 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVExpId | bigint | 19 | Y |
| 2 | DocNo | varchar | 20 | N |
| 3 | DocDate | datetime |  | Y |
| 4 | AtDate | datetime |  | Y |
| 5 | ModeOfPayment | int | 10 | N |
| 6 | PolicyNo | varchar | 8 | Y |
| 7 | PolicyYear | int | 10 | N |
| 8 | PeriodBeginDate | datetime |  | Y |
| 9 | PeriodEndDate | datetime |  | Y |
| 10 | CalDate | datetime |  | Y |
| 11 | CompanyCodeHead | varchar | 20 | Y |
| 12 | CompanyNameHead | varchar | 150 | Y |
| 13 | CompanyCode | varchar | 20 | Y |
| 14 | CompanyName | varchar | 150 | Y |
| 15 | LotNo | int | 10 | N |
| 16 | LotNoAll | int | 10 | N |
| 17 | PremiumAll | money | 19,4 | N |
| 18 | PremiumAllG | money | 19,4 | N |
| 19 | ClaimAll | money | 19,4 | N |
| 20 | ClaimReserve | money | 19,4 | N |
| 21 | ClaimReservePercent | int | 10 | N |
| 22 | LastYearClaimReserve | money | 19,4 | N |
| 23 | TotalClaim | money | 19,4 | N |
| 24 | TotalAmt | money | 19,4 | N |
| 25 | TotalAmtPercent | int | 10 | N |
| 26 | ADJClaim | money | 19,4 | N |
| 27 | NetAmt | money | 19,4 | N |
| 28 | ExpRefundGPercent | int | 10 | N |
| 29 | ExpRefundG | money | 19,4 | N |
| 30 | ExpRefund | money | 19,4 | N |
| 31 | InvoiceNo | varchar | 20 | Y |
| 32 | BeneficiaryCompanycode | varchar | 20 | Y |
| 33 | BeneficiaryCompanyname | varchar | 150 | Y |
| 34 | Type | varchar | 10 | Y |
| 35 | PremiumStatement | money | 19,4 | N |
| 36 | PremiumAdj | money | 19,4 | N |
| 37 | PremiumInv | money | 19,4 | N |
| 38 | ExpRefundGSum | money | 19,4 | Y |
| 39 | RDType | varchar | 20 | N |
| 40 | RDNAME | varchar | 50 | Y |
| 41 | Premium | money | 19,4 | N |
| 42 | ExpRefundDT | money | 19,4 | N |
| 43 | PremiumE1 | money | 19,4 | N |
| 44 | ExpRefundE1 | money | 19,4 | N |
| 45 | FlgCal | bit |  | Y |
| 46 | ExpRefundPerM | money | 19,4 | Y |
| 47 | ExpRefundE1PerM | money | 19,4 | Y |
| 48 | CreatedDate | datetime |  | N |
| 49 | CreatedBy | varchar | 6 | N |
| 50 | UpdatedDate | datetime |  | N |
| 51 | UpdatedBy | varchar | 6 | N |


===== PAGE 1329922098 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_GLSOPHead =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_GLSOPHead | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-03-26 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife];
GO
/*2026.03.26 V1
 2026.03.26 v2 นำฟิลด์เหล่านี้ออก --AmtLifeE2,  --AmtAccE2,   --AmtMedE2,   --AmtTPDE2,*/ 
CREATE VIEW [dbo].[RIG_View_GLSOPHead]
AS
-- =========================================
-- 🔥 BASE POLICY
-- =========================================
WITH BasePolicy AS (
    SELECT  
        PolicyNo, 
        PolicyYear, 
        PromiseDate, 
        ReInsur_No,
        PayType 
    FROM GLPolicy
    WHERE ISNULL(ReInsur_No,'') <> ''
    --  AND PromiseDate >= DATEADD(YEAR,-4,GETDATE())
    UNION ALL
    SELECT 
        Pol.PolicyNo, 
        Pol.PolicyYear, 
        Pol.PromiseDate, 
        Pol.ReInsur_No,
        Pol.PayType
    FROM GLOldPolicy Pol
    INNER JOIN GLPolicy PolSub
        ON PolSub.PolicyNo = Pol.PolicyNo
       AND ISNULL(Pol.PolicyYear,0) >= ISNULL(PolSub.PolicyYear,0) - 2
    WHERE ISNULL(Pol.ReInsur_No,'') <> ''
    --  AND Pol.PromiseDate >= DATEADD(YEAR,-4,GETDATE())
),
-- =========================================
-- 🔥 EXPAND MONTH
-- =========================================
MonthExpand AS (
    SELECT 
        B.PolicyNo,
        B.PolicyYear,
        B.ReInsur_No,
        B.PayType,
        DATEADD(MONTH, N.n, B.PromiseDate) AS Period
    FROM BasePolicy B
    CROSS APPLY (
        SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL 
        SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL
        SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL
        SELECT 9 UNION ALL SELECT 10 UNION ALL SELECT 11
    ) N
),
-- =========================================
-- 🔥 ใช้ ZGL_GLSOPHead (รวมแล้ว)
-- =========================================
FinalData AS (
    SELECT 
        M.PolicyNo,
        M.PolicyYear,        
        M.Period,
        M.ReInsur_No,
        M.PayType,
        H.DocNo,
        H.CompCode,
        H.TransDate,
        ISNULL(H.MthStatus,0) AS MthStatus,
        ISNULL(H.PremLife,0)   AS PremLife,
        ISNULL(H.PremAcc,0)    AS PremAcc,
        ISNULL(H.PremMed,0)    AS PremMed,
        ISNULL(H.PremTPD,0)    AS PremTPD,
        ISNULL(H.PremE1,0)     AS PremE1,
        ISNULL(H.TotalPrem,0)  AS TotalPrem,
        ISNULL(H.PremIP,0)     AS PremIP,
        ISNULL(H.PremOP,0)     AS PremOP,
        ISNULL(H.PremDental,0) AS PremDental,
        -- 🔥 ใช้ค่าที่รวมมาแล้ว
        ISNULL(H.LifeAmt,0) AS LifeAmt,
        ISNULL(H.AccAmt,0) AS AccAmt,
        ISNULL(H.MedAmt,0) AS MedAmt,
        ISNULL(H.TPDAmt,0) AS TPDAmt,
        ISNULL(H.LifeInsur,0) AS LifeInsur,
        ISNULL(H.AccInsur,0) AS AccInsur,
        ISNULL(H.MedInsur,0) AS MedInsur,
        ISNULL(H.TPDInsur,0) AS TPDInsur,
        ISNULL(H.AmtE1,0)      AS AmtE1,
        ISNULL(H.AmtLifeE2,0)  AS AmtLifeE2,
        ISNULL(H.AmtAccE2,0)   AS AmtAccE2,
        ISNULL(H.AmtMedE2,0)   AS AmtMedE2,
        ISNULL(H.AmtTPDE2,0)   AS AmtTPDE2,
        H.Remark,
        H.DocStatus,
        H.EditDateTime,
        H.DOCNO_INV,
        H.AlterPremDiff
    FROM MonthExpand M
    LEFT JOIN ZGL_GLSOPHead H
        ON M.PolicyNo = H.PolicyNo
       AND M.PolicyYear = H.PolicyYear
       AND M.Period = H.Period
   WHERE 
    EXISTS (
        SELECT 1
        FROM GLSOPHead D
        WHERE D.DocNo = H.DocNo
    )
)
-- =========================================
-- 🎯 FINAL OUTPUT
-- =========================================
SELECT 
    ROW_NUMBER() OVER (
     ORDER BY PolicyNo, PolicyYear, Period ,CompCode, DocNo
    ) AS RigVSOPID,
    DocNo,
    TransDate,
    Period,
    PolicyNo,
    MthStatus,
    PayType,
    PolicyYear,
    CompCode,
    PremLife,
    PremAcc,
    PremMed,
    PremTPD,
    PremE1,
    TotalPrem,
    PremIP,
    PremOP,
    PremDental,
    LifeInsur,
    AccInsur,
    MedInsur,
    TPDInsur,
    LifeAmt,
    AccAmt,
    MedAmt,
    TPDAmt,    
    AmtE1,
    --AmtLifeE2,
    --AmtAccE2,
    --AmtMedE2,
    --AmtTPDE2,
    Remark,
    DocStatus,
    EditDateTime,
    DOCNO_INV,
    AlterPremDiff,    
    GETDATE() AS CreatedDate,
    'SYSTEM' AS CreatedBy,
    GETDATE() AS UpdatedDate,
    'SYSTEM' AS UpdatedBy
FROM FinalData
WHERE MthStatus = 0 -- งวดปกติ
    --AND PolicyNo = 'GH032' -- FORTEST
    --AND PolicyYear = 32 -- FORTEST
    --AND Period >= '2022-01-01' -- FORTEST
    --AND Period <  '2026-12-31' -- FORTEST
--ORDER BY 
 --   PolicyNo,
  --  PolicyYear,
   -- Period,
  --  CompCode;]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |  |
| 1 | PK | RigVSOPID | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |  |
| 2 |  | DocNo | varchar | 20 | Y |  |  |  |  |
| 3 |  | TransDate | datetime | 8 | Y |  |  |  |  |
| 4 |  | Period | datetime | 8 | Y |  |  |  |  |
| 5 |  | PolicyNo | varchar | 8 | N |  |  |  |  |
| 6 |  | MthStatus | int | 4 | N |  |  |  |  |
| 7 |  | Paytype | int | 4 | N |  |  |  |  |
| 8 |  | PolicyYear | int | 4 | N |  |  |  |  |
| 9 |  | CompCode | varchar | 10 | N |  |  |  |  |
| 10 |  | PremLife | numeric | 8 | N |  |  |  |  |
| 11 |  | PremAcc | numeric | 8 | N |  |  |  |  |
| 12 |  | PremMed | numeric | 8 | N |  |  |  |  |
| 13 |  | PremTPD | numeric | 8 | N |  |  |  |  |
| 14 |  | PremE1 | numeric | 8 | N |  |  |  |  |
| 15 |  | TotalPrem | numeric | 8 | N |  |  |  |  |
| 16 |  | PremIP | numeric | 8 | N |  |  |  |  |
| 17 |  | PremOP | numeric | 8 | N |  |  |  |  |
| 18 |  | PremDental | numeric | 8 | N |  |  |  |  |
| 19 |  | LifeInsur | numeric | 8 | N |  |  |  |  |
| 20 |  | AccInsur | numeric | 8 | N |  |  |  |  |
| 21 |  | MedInsur | numeric | 8 | N |  |  |  |  |
| 22 |  | TPDInsur | numeric | 8 | N |  |  |  |  |
| 23 |  | LifeAmt | numeric | 8 | N |  |  |  |  |
| 24 |  | AccAmt | numeric | 8 | N |  |  |  |  |
| 25 |  | MedAmt | numeric | 8 | N |  |  |  |  |
| 26 |  | TPDAmt | numeric | 8 | N |  |  |  |  |
| 27 |  | AmtE1 | numeric | 8 | N |  |  |  |  |
| 28 |  | AmtLifeE2 | numeric | 8 | N |  |  |  |  |
| 29 |  | AmtAccE2 | numeric | 8 | N |  |  |  |  |
| 30 |  | AmtMedE2 | numeric | 8 | N |  |  |  |  |
| 31 |  | AmtTPDE2 | numeric | 8 | N |  |  |  |  |
| 32 |  | Remark | varchar | 255 | N |  |  |  |  |
| 33 |  | DocStatus | int | 2 | N |  |  |  |  |
| 34 |  | EditDateTime | datetime | 8 | N |  |  |  |  |
| 35 |  | DOCNO_INV | varchar | 20 | N |  |  |  |  |
| 36 |  | AlterPremDiff | numeric | 8 | N |  |  |  |  |
| 37 |  | created_date | datetime |  | N |  |  |  |  |
| 38 |  | created_by | varchar | 50 | N |  |  |  |  |
| 39 |  | updated_date | datetime |  | N |  |  |  |  |
| 40 |  | updated_by | varchar | 50 | N |  |  |  |  |


===== PAGE 1312489574 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_InvestigationExpense =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_InvestigationExpense | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-01-07 | Description |  |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 2026-04-23 |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
/*#64862 User RI แจ้งขอใช้วันที่ Eff Date ของกรมธรรม์ ในระบบคือ Promisedate วันที่เริ่มต้นสัญญาของกธ. ที่ event date เกิดเหตุ (Suthanee(SA),Naraphat(User)) 17/04/69*/
Create VIEW RIG_View_InvestigationExpense
AS
	SELECT
	  ROW_NUMBER() OVER (ORDER BY i.DocNo) AS RigVInvestigateExpenseID,
	  i.DocNo,
	  c.PolicyCode,
	  i.PolicyNo,
	  COALESCE(d.PolicyYear, t.PolicyYear, h.PolicyYear) AS PolicyYear,
	  --c.ChangeDate as EffectiveDate,
      p.PromiseDate as EffectiveDate, -- #64862 วันที่เริ่มต้นสัญญาของกธ.ที่ event date เกิดเหตุ (Suthanee(SA),Naraphat(User)) 17/04/69
	  i.CerNo,
	  i.ClaimNo,
	  COALESCE(d.ApproveDate, t.ApproveDate, h.ApproveDate) AS ApprovedDate,
	  COALESCE(d.EventDate, t.EventDate, h.EventDate) AS EventDate,
	  i.TotalExpenseAmount as ExpenseAmount,
	  i.DocDate,
	  i.ClaimType,
	  i.InformDate,
	  i.InvestSeq,
	  i.ConsiderSeq,
	  p.ReInsurNo,
	  i.DocStatus,
	  GETDATE() AS CreatedDate,
      'System' AS CreatedBy,
      GETDATE() AS UpdatedDate,
      'System' AS UpdatedBy
	FROM Investigate_Expense_Header i
	OUTER APPLY (
		SELECT TOP (1)
			vd.DeathDate   AS EventDate,
			vd.PolicyYear  AS PolicyYear,
			vd.ApproveDate AS ApproveDate
		FROM RIG_View_ClaimDeath vd
		WHERE i.ClaimType = 0
		  AND vd.InformNo = i.ClaimNo
		  AND vd.CertificCustNo = i.CerNo
		  and vd.PolicyNo = i.PolicyNo
		  and vd.ConsiderSeq = i.ConsiderSeq
		ORDER BY
		  CASE WHEN vd.ApproveDate IS NULL THEN 1 ELSE 0 END,
		  vd.ApproveDate DESC
	) d
	OUTER APPLY (
		SELECT TOP (1)
			vt.AccidentDate AS EventDate,
			vt.PolicyYear   AS PolicyYear,
			vt.ApproveDate  AS ApproveDate
		FROM RIG_View_ClaimTPD vt
		WHERE i.ClaimType = 1
		  AND vt.InformNo = i.ClaimNo
		  AND vt.CertificCustNo = i.CerNo
		  and vt.PolicyNo = i.PolicyNo
		ORDER BY
		  CASE WHEN vt.ApproveDate IS NULL THEN 1 ELSE 0 END,
		  vt.ApproveDate DESC
	) t
	OUTER APPLY (
		SELECT TOP (1)
			vh.AdmitDate   AS EventDate,
			vh.PolicyYear  AS PolicyYear,
			vh.ApproveDate AS ApproveDate
		FROM RIG_View_ClaimHealth vh
		WHERE i.ClaimType = 2
		  AND vh.NotifyNo = i.ClaimNo
		  AND vh.Cerno = i.CerNo
		  and vh.PolicyNo = i.PolicyNo
		ORDER BY
		  CASE WHEN vh.ApproveDate IS NULL THEN 1 ELSE 0 END,
		  vh.ApproveDate DESC
	) h
	left join RIG_View_Policy p  ON p.policyNo = i.PolicyNo
	 AND p.policyYear = COALESCE(d.PolicyYear, t.PolicyYear, h.PolicyYear)
	inner JOIN RIG_View_CertificateCust c
	  ON c.policyNo = i.PolicyNo
	 AND c.policyYear = COALESCE(d.PolicyYear, t.PolicyYear, h.PolicyYear)
	 AND c.CertificCustNo = i.CerNo;
 GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |  |
| 1 | PK | RigVInvestigateExpenseID | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |  |
| 2 | Index | DocNo | varchar | 20 | Y | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ |  |  |  |
| 3 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |  |
| 4 | Index | PolicyNo | varchar | 8 | Y | เลขที่กรมธรรม์ |  |  |  |
| 5 |  | PolicyYear | numeric | 4 | N | ปีกรมธรรม์ |  |  |  |
| 6 |  | Effective Date | datetime |  | N | วันเริ่มสัญญาปีปัจจุบัน |  |  |  |
| 7 |  | CerNo | varchar | 8 | N | เลขที่สมาชิก |  |  |  |
| 8 |  | ClaimNo | varchar | 20 | N | เลขที่สินไหมรับเรื่อง |  |  |  |
| 9 |  | Approved Date | datetime |  | N | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ |  |  |  |
| 10 |  | Event Date | datetime |  | N | วันที่เกิดเหตุ |  |  |  |
| 11 |  | ExpenseAmount | money |  | N | ค่าใช้จ่ายรวม |  |  |  |
| 12 |  | DocDate | datetime |  | N | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ |  |  |  |
| 13 |  | ClaimType | smallint |  | N | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง |  |  |  |
| 14 |  | InformDate | datetime |  | N | วันที่รับเรื่อง |  |  |  |
| 15 |  | InvestSeq | int |  | N | ส่งสอบครั้งที่ |  |  |  |
| 16 |  | ConsiderSeq | int |  | N | การพิจารณาเคลมครั้งที่ |  |  |  |
| 17 |  | ReInsurNo | varchar | 20 | Y | เลขที่กธ. ประกันต่อ Ref.Reinsurance |  |  |  |
| 18 |  | DocStatus | int |  | N | สถานะเอกสาร [0: Active, 2:ยกเลิก] |  |  |  |
| 19 |  | InvestiExpense | money |  | N | ค่าใช้จ่าย investigation |  |  | suthanee.sa 23/04/2026 #CR_INVEST |
| 20 |  | MedExpense | money |  | N | ค่าใช้จ่าย medical |  |  | suthanee.sa 23/04/2026 #CR_INVEST |
| 21 |  | LegalExpense | money |  | N | ค่าใช้จ่าย legal |  |  | suthanee.sa 23/04/2026 #CR_INVEST |
| ข้อมูลระบบ |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |  |


===== PAGE 1308950825 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_NatureBusiness =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_Nature_Business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife];
GO 
CREATE VIEW [dbo].[RIG_View_NatureBusiness]
AS
 
SELECT  ROW_NUMBER() OVER (
        ORDER BY Bus.CODE ASC
        ) AS RigVNatureBusinessID,
        Bus.CODE AS DBDCODE,
		Bus.ListDetail AS TypeBusiness,
        GETDATE() AS CreatedDate,
        'SYSTEM' AS CreatedBy,
        GETDATE() AS UpdatedDate,
        'SYSTEM' AS UpdatedBy
FROM ogl.dbo.OGL_MianBusiness Bus 
WHERE (ISNULL(Bus.CODE,'') <> '') 
AND LEN(ISNULL(Bus.CODE,'')) = 5
AND TypeUse = 'B'
AND Bus.CODE LIKE N'%[0-9]%' ---- %[^ก-๏ ]%'
 
GO
    ]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | RigVNatureBusinessID | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | DBDCODE | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า |  |  |
| 3 |  | TypeBusiness | varchar | 250 | N | ประเภทธุรกิจของบริษัท |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1297973352 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Policy =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_Policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-10 | Description | ข้อมูลกรมธรรม์ประกันกลุ่มที่มี Reinsurance จากทั้ง GLPOLICY และ GLOLDPOLICY ให้อยู่ในรูปแบบเดียวกัน |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
/******************************************************************************
Author:      Unknown (Legacy Code)
Create Date: Unknown
Description: Unknown
Task:        Unknown 

-- History (บันทึกการแก้ไข)
Date        Author          Task ID      Description
----------  --------------  -----------  --------------------------------------
----------  Unknown         -------      Initial: Original System Logic
2025-12-19  siriporn        -------      Edit V2 : Change field names to follow consistent naming convention (remove snake_case usage)
2025-12-23  siriporn        Task #35226  Edit V3 : Add fields in VIEW RIG_View_Policy
2026-04-02  sataporn.pr     Task #56761  Add : field TPDPrem / LifeE1Prem / MedPlanRateIPPrem / MedPlanRateOPPrem / Dental / LifeE2Prem
2026-04-02  sataporn.pr     Task #68635  Add : field CalculatePremFrom
******************************************************************************/
CREATE VIEW [dbo].[RIG_View_Policy]
AS
WITH AllPolicies AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
    SELECT
        PolicyNo, PolicyYear, PolicyCode, PolicyDocDate,  
        CompanyCode, FirstDate, PromiseDate, ReInsurDate, LapseDate,
        PayType, InsumType, AdjustDec, LifePremRate,
        AccPremRate, MedPremRate, TPDPremRate, LifeExtraRate, AccExtraRate,
        MedExtraRate, TPDExtraRate, PolicyStatus, ReInsur_No, ExpreienceRefund,
        LifePrem, AccPrem, MedPrem, TPDPrem,  Cer_Class_No,
        PolicyNo_Old, PrefixThai, CompanyName, CompanyNameEng, CommisionFoat,
        FlgMember, FReceiptDate, PolicyNo_HD, FuneralPrem, FuneralPremRate,
        ExpireDate,QCL_DOCNO, 
        SaleOption,
        SaleChannel,CalculatePremFrom,
        'GLPOLICY' AS SourceTable 
    FROM
        oceanlife.dbo.GLPOLICY with (nolock)  
    WHERE (Isnull(ReInsur_No,'') <> '')
     
    UNION ALL
     
    -- ดึงข้อมูลจากตาราง GLOLDPOLICY
    SELECT
        PolicyNo, PolicyYear, PolicyCode, PolicyDocDate, 
        CompanyCode, FirstDate, PromiseDate, ReInsurDate, LapseDate,
        PayType, InsumType, AdjustDec, LifePremRate,
        AccPremRate, MedPremRate, TPDPremRate, LifeExtraRate, AccExtraRate,
        MedExtraRate, TPDExtraRate, PolicyStatus, ReInsur_No, ExpreienceRefund,
        LifePrem, AccPrem, MedPrem, TPDPrem, Cer_Class_No,
        PolicyNo_Old, PrefixThai, CompanyName, CompanyNameEng, CommisionFoat,
        FlgMember, FReceiptDate, PolicyNo_HD, FuneralPrem, FuneralPremRate,
        ExpireDate,QCL_DOCNO,
        SaleOption,
        SaleChannel,CalculatePremFrom,
        'GLOLDPOLICY' AS SourceTable
    FROM
        oceanlife.dbo.GLOLDPOLICY with (nolock)  
    WHERE (Isnull(ReInsur_No,'') <> '')
)
SELECT  ROW_NUMBER() OVER (
        ORDER BY PolicyNo ASC, PolicyYear DESC
        ) AS RigVPolicyId,
        PolicyNo, 
        PolicyYear, 
        PolicyCode, 
        PolicyDocDate,  
        CompanyCode, 
        FirstDate, 
        PromiseDate, 
        ReInsurDate, 
        LapseDate,
        PayType, 
        InsumType, 
        AdjustDec, 
        LifePremRate,
        AccPremRate, 
        MedPremRate, 
        TPDPremRate, 
        LifeExtraRate, 
        AccExtraRate,
        MedExtraRate, 
        TPDExtraRate, 
        PolicyStatus, 
        ReInsur_No AS ReInsurNo, 
        ExpreienceRefund,
        LifePrem, AccPrem, MedPrem, TPDPrem,  
        Cer_Class_No  AS CerClassNo,
        PolicyNo_Old  AS PolicyNoOld, 
        PrefixThai, CompanyName, CompanyNameEng, CommisionFoat,
        FlgMember, FReceiptDate, PolicyNo_HD  AS PolicyNoHD, 
        FuneralPrem, FuneralPremRate,
        ExpireDate,QCL_DOCNO  AS QCLDOCNO, 
        SaleOption,
        SaleChannel,
        CalculatePremFrom,
        GETDATE() AS CreatedDate,
        'SYSTEM' AS CreatedBy,
        GETDATE() AS UpdatedDate,
        'SYSTEM' AS UpdatedBy
FROM
    AllPolicies
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | RigVPolicyId | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | PolicyNo | varchar | 8 | Y | เลขที่กธ. | CK |  |
| 3 |  | PolicyYear | numeric | 4 | N | กธ. ปีที่ | CK |  |
| 4 |  | PolicyCode | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  |  |
| 5 |  | PolicyDocDate | datetime |  | N | วันที่ที่ออกกธ. |  |  |
| 6 |  | ProposalNo | varchar | 8 | N | เลขที่ใบคำขอ |  |  |
| 7 |  | CompanyCode | varchar | 10 | Y | รหัสบริษัทผู้ถือกธ. |  |  |
| 8 |  | FirstDate | datetime |  | N | วันเริ่มสัญญาครั้งแรก |  |  |
| 9 |  | PromiseDate | datetime |  | N | วันเริ่มสัญญาปีปัจจุบัน |  |  |
| 10 |  | ReInsurDate | datetime |  | N | วันที่ต่อสัญญาครั้งต่อไป |  |  |
| 11 |  | LapseDate | datetime |  | N | วันที่ Lapse |  |  |
| 12 |  | TypeDiscount | numeric | 4 | N | ประเภทส่วนลด |  |  |
| 13 |  | PayType | numeric | 4 | N | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี |  |  |
| 14 |  | InsumType | numeric | 4 | N | ลักษณะทุน.0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class |  |  |
| 15 |  | AdjustDec | numeric | 4 | N | การปัดเศษทุน. (0 : ไม่ปัดเศษ 1 : ปัดเศษ) |  |  |
| 16 |  | LifePremRate | numeric | 14,2 | N | อัตราเบี้ยชีวิต |  |  |
| 17 |  | AccPremRate | numeric | 14,2 | N | อัตราเบี้ย อบ. |  |  |
| 18 |  | MedPremRate | numeric | 14,2 | N | อัตราเบี้ยค่ารักษาฯจาก อบ. |  |  |
| 19 |  | TPDPremRate | numeric | 14,2 | N | อัตราเบี้ยทุพพลภาพ |  |  |
| 20 |  | LifeExtraRate | numeric | 14,2 | N | อัตราเบี้ย.เพิ่มพิเศษ – ชีวิต |  |  |
| 21 |  | AccExtraRate | numeric | 14,2 | N | อัตราเบี้ย.เพิ่มพิเศษ - อบ. |  |  |
| 22 |  | MedExtraRate | numeric | 14,2 | N | อัตราเบี้ย.เพิ่มพิเศษ - ค่ารักษาฯจาก อบ. |  |  |
| 23 |  | TPDExtraRate | numeric | 14,2 | N | อัตราเบี้ย.เพิ่มพิเศษ – ทุพพลภาพ |  |  |
| 24 |  | PolicyStatus | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) |  |  |
| 25 |  | ReInsurNo | varchar | 10 | N | เลขที่กธ. ประกันต่อ |  |  |
| 26 |  | ExperienceRefund | boolean | 1 | N | เงินคืนตามประสบการณ์ |  |  |
| 27 |  | LifePrem | numeric | 14,2 | N | เบี้ยชีวิต |  |  |
| 28 |  | AccPrem | numeric | 14,2 | N | เบี้ย อบ. |  |  |
| 29 |  | MedPrem | numeric | 14,2 | N | เบี้ยค่ารักษาจาก อบ. |  |  |
| 30 |  | TPDPrem | numeric | 14,2 | N | เบี้ยทุพพลภาพ |  |  |
| 36 |  | CerClassNo | numeric | 4 | N | ประเภทสมาชิก |  |  |
| 37 |  | PolicyNoOld | varchar | 8 | N | เลขที่กรมธรรม์เดิม |  |  |
| 38 |  | PrefixThai | varchar | 100 | N | คำนำหน้าบริษัท |  |  |
| 39 |  | CompanyName | varchar | 150 | N | ชื่่อผู้ถือกรมธรรม์ |  |  |
| 40 |  | CompanyNameEng | varchar | 150 | N | ชื่่อผู้ถือกรมธรรม์ภาษาอังกฤษ |  |  |
| 41 |  | CommisionFoat | numeric | 14,2 | N | ค่าบำเหน็จ |  |  |
| 42 |  | FlgMember | numeric | 2 | Y | Flag member |  |  |
| 43 |  | FReceiptDate | datetime |  | N | วันทีออกใบเสร็จใบแรก |  |  |
| 44 |  | PolicyNoHD | varchar | 20 | N | กรมธรรม์แม่สำหรับอ้างอิง |  |  |
| 45 |  | FuneralPrem | numeric | 14,2 | Y | เบี้ยค่าปลงศพ |  |  |
| 46 |  | FuneralPremRate | numeric | 14,2 | Y | อัตราเบี้ยค่าปลงศพ |  |  |
| 47 |  | ExpireDate | datetime |  | N | วันที่สิ้นสุดความคุ้มครอง |  |  |
| 48 |  | QCLDOCNO | varchar | 50 | Y | เลขที่ ปิดการขาย |  |  |
|  |  | SaleOption |  |  |  |  |  |  |
|  |  | SaleChannel |  |  |  |  |  |  |
|  |  | CalculatePremFrom | int |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | CreatedDate | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | CreatedBy | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | UpdatedDate | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | UpdatedBy | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1308197478 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Policy > View10 =====
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVPolicyId | bigint | 19 | Y |
| 2 | PolicyNo | varchar | 8 | N |
| 3 | PolicyYear | int | 10 | Y |
| 4 | PolicyCode | tinyint | 3 | Y |
| 5 | PolicyDocDate | datetime |  | Y |
| 6 | CompanyCode | varchar | 10 | Y |
| 7 | FirstDate | datetime |  | Y |
| 8 | PromiseDate | datetime |  | Y |
| 9 | ReInsurDate | datetime |  | Y |
| 10 | LapseDate | datetime |  | Y |
| 11 | PayType | int | 10 | Y |
| 12 | InsumType | int | 10 | Y |
| 13 | AdjustDec | int | 10 | Y |
| 14 | LifePremRate | numeric | 7,4 | Y |
| 15 | AccPremRate | numeric | 7,4 | Y |
| 16 | MedPremRate | numeric | 7,4 | Y |
| 17 | TPDPremRate | numeric | 7,4 | Y |
| 18 | LifeExtraRate | numeric | 7,4 | Y |
| 19 | AccExtraRate | numeric | 7,4 | Y |
| 20 | MedExtraRate | numeric | 7,4 | Y |
| 21 | TPDExtraRate | numeric | 7,4 | Y |
| 22 | PolicyStatus | char | 1 | Y |
| 23 | ReInsurNo | varchar | 10 | Y |
| 24 | ExpreienceRefund | bit |  | Y |
| 25 | LifePrem | numeric | 7,2 | Y |
| 26 | AccPrem | numeric | 7,2 | Y |
| 27 | MedPrem | numeric | 7,2 | Y |
| 28 | TPDPrem | numeric | 7,2 | Y |
| 29 | CerClassNo | int | 10 | Y |
| 30 | PolicyNoOld | varchar | 8 | Y |
| 31 | PrefixThai | varchar | 100 | Y |
| 32 | CompanyName | varchar | 150 | Y |
| 33 | CompanyNameEng | varchar | 150 | Y |
| 34 | CommisionFoat | money | 19,4 | Y |
| 35 | FlgMember | smallint | 5 | N |
| 36 | FReceiptDate | datetime |  | Y |
| 37 | PolicyNoHD | varchar | 20 | Y |
| 38 | FuneralPrem | money | 19,4 | N |
| 39 | FuneralPremRate | money | 19,4 | N |
| 40 | ExpireDate | datetime |  | Y |
| 41 | QCLDOCNO | varchar | 20 | Y |
| 42 | CreatedDate | datetime |  | N |
| 43 | CreatedBy | varchar | 6 | N |
| 44 | UpdatedDate | datetime |  | N |
| 45 | UpdatedBy | varchar | 6 | N |


===== PAGE 1308950667 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Policy > เงื่อนไข RIG_View_Policy =====
## RIG_View_Policy
View สำหรับรวมข้อมูล Policy ที่มี Reinsurance จากทั้ง GLPOLICY และ GLOLDPOLICY ให้อยู่ในรูปแบบเดียวกัน

## เงื่อนไข (Summary)

### แหล่งข้อมูล
- GLPOLICY และ GLOLDPOLICY (รวมกันด้วย UNION ALL)

### เงื่อนไขคัดเลือกข้อมูล
- เลือกเฉพาะกรมธรรม์ที่มี ReInsur_No ไม่ว่างเงื่อนไข: ISNULL(ReInsur_No,'') <> ''
- เงื่อนไข: ISNULL(ReInsur_No,'') <> ''

### การจัดลำดับ/ไอดีใน View
- RigVPolicyId = ROW_NUMBER()
- เรียงตาม PolicyNo ASC, PolicyYear DESC

### ฟิลด์ระบบที่เติมเพิ่ม
- CreatedDate/UpdatedDate = GETDATE()
- CreatedBy/UpdatedBy = 'SYSTEM'

## RIG_View_Policy – Field Mapping (แยกสี)
Legend
- 🟦 GLPOLICY / GLOLDPOLICY (AllPolicies)
- 🟨 System
หมายเหตุ: ฟิลด์ทั้งหมด (ยกเว้น System) มาจาก CTE AllPolicies ซึ่งรวมมาจาก GLPOLICY และ GLOLDPOLICY ด้วยชุดฟิลด์เดียวกัน
| Field (Output) | Source |
| RigVPolicyId | 🟨 System (ROW_NUMBER order by PolicyNo ASC, PolicyYear DESC) |
| PolicyNo | 🟦 AllPolicies (GLPOLICY/GLOLDPOLICY) |
| PolicyYear | 🟦 AllPolicies |
| PolicyCode | 🟦 AllPolicies |
| PolicyDocDate | 🟦 AllPolicies |
| CompanyCode | 🟦 AllPolicies |
| FirstDate | 🟦 AllPolicies |
| PromiseDate | 🟦 AllPolicies |
| ReInsurDate | 🟦 AllPolicies |
| LapseDate | 🟦 AllPolicies |
| PayType | 🟦 AllPolicies |
| InsumType | 🟦 AllPolicies |
| AdjustDec | 🟦 AllPolicies |
| LifePremRate | 🟦 AllPolicies |
| AccPremRate | 🟦 AllPolicies |
| MedPremRate | 🟦 AllPolicies |
| TPDPremRate | 🟦 AllPolicies |
| LifeExtraRate | 🟦 AllPolicies |
| AccExtraRate | 🟦 AllPolicies |
| MedExtraRate | 🟦 AllPolicies |
| TPDExtraRate | 🟦 AllPolicies |
| PolicyStatus | 🟦 AllPolicies |
| ReInsurNo | 🟦 AllPolicies (ReInsur_No) |
| ExpreienceRefund | 🟦 AllPolicies |
| LifePrem | 🟦 AllPolicies |
| AccPrem | 🟦 AllPolicies |
| MedPrem | 🟦 AllPolicies |
| TPDPrem | 🟦 AllPolicies |
| CerClassNo | 🟦 AllPolicies (Cer_Class_No) |
| PolicyNoOld | 🟦 AllPolicies (PolicyNo_Old) |
| PrefixThai | 🟦 AllPolicies |
| CompanyName | 🟦 AllPolicies |
| CompanyNameEng | 🟦 AllPolicies |
| CommisionFoat | 🟦 AllPolicies |
| FlgMember | 🟦 AllPolicies |
| FReceiptDate | 🟦 AllPolicies |
| PolicyNoHD | 🟦 AllPolicies (PolicyNo_HD) |
| FuneralPrem | 🟦 AllPolicies |
| FuneralPremRate | 🟦 AllPolicies |
| ExpireDate | 🟦 AllPolicies |
| QCLDOCNO | 🟦 AllPolicies (QCL_DOCNO) |
| SaleOption | 🟦 AllPolicies |
| SaleChannel | 🟦 AllPolicies |
| CreatedDate | 🟨 System (GETDATE) |
| CreatedBy | 🟨 System ('SYSTEM') |
| UpdatedDate | 🟨 System (GETDATE) |
| UpdatedBy | 🟨 System ('SYSTEM') |


===== PAGE 1336967187 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_PremiumRate =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_PremiumRate | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-04-27 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[ USE [OceanLife]
GO
/*Create V1 sathit.na 27/04/2569 Task #66709 - (ประกันกลุ่ม) สร้าง view RIG_View_PremiumRate*/
CREATE VIEW [dbo].[RIG_View_PremiumRate]
AS
  SELECT ROW_NUMBER() OVER (ORDER BY PremRate.[PolicyNo] ASC, PremRate.[PolicyYear] DESC) AS RigVRateID
        ,PremRate.[DocNoUWR]
        ,PremRate.[PolicyNo]
        ,PremRate.[PolicyYear]
        ,PremRate.[PromiseDate]
        ,PremRate.[ExpireDate]
        ,PremRate.[PremRateTableCode]
        ,PremRate.[PremRateTableName]
        ,PremRate.[PremRateTableType]
        ,PremRate.[PremRateTableKind]
        ,PremRate.[ValueAgeOrClass]
        ,PremRate.[ValueGender]
        ,PremRate.[ValueLife]
        ,PremRate.[ValueAcc]
        ,PremRate.[ValueMedAcc]
        ,PremRate.[ValueTPD]
        ,PremRate.[Status]
        ,PremRate.[ImportDate]
        ,PremRate.[ImportUser]
        ,PremRate.[ApproveDate]
        ,PremRate.[ApproveUser]
        ,PremRate.[CancelDate]
        ,PremRate.[CancelUser]
        ,PremRate.[CancelRemark]
        ,GETDATE() AS CreatedDate
        ,'SYSTEM' AS CreatedBy
        ,GETDATE() AS UpdatedDate
        ,'SYSTEM' AS UpdatedBy
   FROM [OceanLife].[dbo].[ZGL_UWR_PremiumRateTable] PremRate 
        inner join 
        [OceanLife].[dbo].[RIG_View_Policy] AllPol
             on PremRate.[PolicyNo] = AllPol.[PolicyNo] and PremRate.[PolicyYear] = AllPol.[PolicyYear]
GO]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | RigVRateID | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | DocNoUWR | varchar | 20 | N | เลขเอกสาร Underwriter' Report |  |  |
| 3 |  | PolicyNo | varchar | 10 | N | เลขกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน |  |  |
| 4 |  | PolicyYear | numeric | 4 | N | ปีกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน |  |  |
| 5 |  | PromiseDate | datetime |  | N | วันที่เริ่มสัญญากรมธรรม์ |  |  |
| 6 |  | ExpireDate | datetime |  | N | วันที่สิ้นสุดสัญญากรมธรรม์ |  |  |
| 7 |  | PremRateTableCode | numeric | 4 | N | รหัสตารางเบี้ยหรืออัตราเบี้ย |  |  |
| 8 |  | PremRateTableName | varchar | 100 | N | ชื่อตารางเบี้ยหรืออัตราเบี้ย |  | จะตั้งชื่ออัตโนมัติมีรูปแบบดังนี้ PolicyNo+Y+PolicyYear+Age|Class+Rate|Premium ... ตัวอย่างเช่น ... กรมธรรม์ GH5500 ปีที่ 2 คำนวณตาม Class |
| 9 |  | PremRateTableType | varchar | 10 | N | ประเภทตารางว่าเป็นตารางอายุหรือตาราง Class |  | Age, AgeGender, Class |
| 10 |  | PremRateTableKind | varchar | 10 | N | ประเภทตารางว่าเป็นตารางเบี้ยหรืออัตราเบี้ย |  | Premium=เบี้ย, Rate=อัตราเบี้ย |
| 11 |  | ValueAgeOrClass | numeric | 4 | N | ค่าของอายุโดยเริ่มที่ 0-99, ค่าของ Class โดยเริ่มที่ 1-จำนวนแผน |  |  |
| 12 |  | ValueGender | varchar | 6 | N | ค่าของเพศ |  | All=ทั้งสองเพศ, Male=ชาย, Female=หญิง |
| 13 |  | ValueLife | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองชีวิต |  |  |
| 14 |  | ValueAcc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองอุบัติเหตุ |  |  |
| 15 |  | ValueMedAcc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 16 |  | ValueTPD | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองทุพพลภาพ |  |  |
| 17 |  | Status | numeric | 2 | N | สถานะรายการ |  | 0=Import, 1=Approved, 2=Cancel |
| 18 |  | ImportDate | datetime |  | N | วันที่นำเข้าตารางเบี้ย/อัตราเบี้ย |  |  |
| 19 |  | ImportUser | varchar | 30 | N | ผู้ที่นำเข้าตารางเบี้ย/อัตราเบี้ย |  |  |
| 20 |  | ApproveDate | datetime |  | N | วันที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย |  |  |
| 21 |  | ApproveUser | varchar | 30 | N | ผู้ที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย |  |  |
| 22 |  | CancelDate | datetime |  | N | วันที่ยกเลิกตารางเบี้ย/อัตราเบี้ย |  |  |
| 23 |  | CancelUser | varchar | 30 | N | ผู้ที่ยกเลิกตารางเบี้ย/อัตราเบี้ย |  |  |
| 24 |  | CancelRemark | varchar | 30 | N | หมายเหตุการยกเลิกตารางเบี้ย/อัตราเบี้ย |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1302593782 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_Unname =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_GLSOPHead | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-28 | Description | ตารางการคำนวนเบี้ย รายเดือน สำหรับ Manage |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | rig_glsophead_id | Bigint |  | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | doc_no | varchar | 20 |  | เลขที่เอกสาร |  |  |
| 3 |  | trans_date | datetime |  |  | วันที่เอกสาร |  |  |
| 4 | Index | period | datetime |  |  | วันที่งวด |  |  |
| 5 |  | policy_no | varchar | 8 |  | เลขกรมธรรม์ |  |  |
| 6 |  | mth_status | smallint |  |  | สถานะงวด |  | 0 งวดปกติ 1 งวดเพิ่มเติม |
| 7 |  | pay_type | smallint |  |  | ประเภทการชำระเงินของกธ. |  | 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี |
| 8 |  | term | smallint |  |  | งวดที่ |  |  |
| 9 |  | policy_year | numeric | 4 |  | กรมธรรม์ปีที่ |  |  |
| 10 |  | comp_code | varchar | 10 |  | รหัสบริษัท |  |  |
| 11 |  | prem_life | numeric | 14,2 |  | เบี้ย - ชีวิต |  |  |
| 12 |  | prem_acc | numeric | 14,2 |  | เบี้ย - อุบัติเหตุ |  |  |
| 13 |  | prem_med | numeric | 14,2 |  | เบี้ย - ค่ารักษาพยาบาล |  |  |
| 14 |  | prem_tpd | numeric | 14,2 |  | เบี้ย - ทุพพลภาพ |  |  |
| 15 |  | prem_e1 | numeric | 14,2 |  | เบี้ย - ชีวิต Extra1 |  |  |
| 16 |  | total_prem | numeric | 14,2 |  | เบี้ย - รวม |  |  |
| 17 |  | prem_ipd | numeric | 14,2 |  | เบี้ย - ผู้ป่วยใน |  |  |
| 18 |  | prem_opd | numeric | 14,2 |  | เบี้ย - ผู้ป่วยนอก |  |  |
| 19 |  | prem_dental | numeric | 14,2 |  | เบี้ย - ทันตกรรม |  |  |
| 20 |  | life_insur | numeric | 14,2 |  | ทุน - ชีวิต |  |  |
| 21 |  | acc_insur | numeric | 14,2 |  | ทุน - อุบัติเหตุ |  |  |
| 22 |  | med_insur | numeric | 14,2 |  | ทุน - ค่ารักษาพยาบาล |  |  |
| 23 |  | tpd_insur | numeric | 14,2 |  | ทุน - ทุพพลภาพ |  |  |
| 24 |  | life_amt | int4 |  |  | จำนวน - ชีวิต |  |  |
| 25 |  | acc_amt | int4 |  |  | จำนวน - อุบัติเหตุ |  |  |
| 26 |  | med_amt | int4 |  |  | จำนวน - ค่ารักษาพยาบาล |  |  |
| 27 |  | tpd_amt | int4 |  |  | จำนวน - ทุพพลภาพ |  |  |
| 28 |  | amt_e1 | int4 |  |  | จำนวน - ชีวิต Extra1 |  |  |
| 29 |  | amt_life_e2 | numeric | 14,2 |  | จำนวน - รวม |  |  |
| 30 |  | amt_acc_e2 | numeric | 14,2 |  | จำนวน - ผู้ป่วยใน |  |  |
| 31 |  | amt_med_e2 | numeric | 14,2 |  | จำนวน - ผูู้ป่วยนอก |  |  |
| 32 |  | amt_tpd_e2 | numeric | 14,2 |  | จำนวน - ทันตกรรม |  |  |
| 33 |  | remark | varchar | 255 |  | หมายเหตุเพิ่มเติม |  |  |
| 34 |  | doc_status | smallint |  |  | สถานะการใช้งาน |  |  |
| 35 |  | user_id | varchar | 50 |  | ผู้จัดทำรายการ |  |  |
| 36 |  | edit_datetime | datetime |  |  | วันที่แก้ไข |  |  |
| 37 |  | docno_inv | varchar | 20 |  | เลขที่ Invoice อ้างอิง |  |  |
| 38 |  | alter_prem_diff | numeric | 14,2 |  | เบี้ย Movement |  |  |
| 39 |  | has_attach_file | smallint |  |  | มีไฟล์แนบ |  |  |
| 40 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 41 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 42 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 43 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | rig_glsophead_id | Bigint |  | Y | เลขที่ Running | 1 | auto generate |
| 2 |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1310753011 | Functional Specification > 04. Persistence Specification. > Transaction > 01. View OceanLife > RIG_View_UnnamePolicy =====
| Database | ri group | Link Previous Version | - |
| Table | RIG_View_Unname_Policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-01-07 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
Database : SQLServer Oceanlife
Create View
<![CDATA[USE [OceanLife]
GO
/*Edit by siriporn.sr 13-01-26 เพิ่มการหยิบข้อมูล ReInsur_No เพื่อฝั่งระบบ Group RI ใช้สำหรับอ้างอิงการแยกสัญญาประกันต่อ  และเพิ่ม E1 TotalE1Amt, TotalE1Net*/
/*Edit by siriporn.sr 10-04-26 เพิ่ม Feild Movement สมาชิก Add. Ter. */
CREATE VIEW [dbo].[RIG_View_UnnamePolicy]
AS
 WITH AllPoliciesUnname AS (
    -- ดึงข้อมูลจากตาราง GLPOLICY
    SELECT
        PolicyNo, PolicyYear, ReInsur_No,
        'GLPOLICY' AS SourceTable 
    FROM Oceanlife.dbo.GLPOLICY WITH (NOLOCK)  
    WHERE (Isnull(ReInsur_No,'') <> '')
    AND PolicyUnname = 1 
    AND PromiseDate >= '2025-01-01' 
     
    UNION ALL
     
    -- ดึงข้อมูลจากตาราง GLOLDPOLICY
    SELECT
        PolicyNo, PolicyYear, ReInsur_No, 
        'GLOLDPOLICY' AS SourceTable
    FROM Oceanlife.dbo.GLOLDPOLICY WITH (NOLOCK)  
    WHERE (Isnull(ReInsur_No,'') <> '')
    AND PolicyUnname = 1
    AND PromiseDate >= '2025-01-01'
)
SELECT
    ROW_NUMBER() OVER (
        ORDER BY Head.PolicyNo, Head.CompCode, Head.Period, Head.MthStatus ASC
    ) AS RigVUnnameID,
    Head.PolicyCode,
    Head.Period,
    Head.PolicyNo,
    Head.MthStatus,
    Head.Paytype,
    Head.PolicyYear,
    Head.PromiseDate,
    Head.ReInsurDate,
    Head.TotalLife,
    Head.TotalAcc,
    Head.TotalMed,
    Head.TotalTPD,
    Head.GrandTotal,
    Head.CompCode,
    Head.DeptCode,
    Head.TotalLifeInsur,
    Head.TotalAccInsur,
    Head.TotalMedInsur,
    Head.TotalTPDInsur,
    Head.TotalLifeAmt,
    Head.TotalAccAmt,
    Head.TotalMedAmt,
    Head.TotalTPDAmt,
	/*Edit by siriporn.sr 10-04-26 เพิ่ม Feild Movement สมาชิก Add. Ter. */
    class.LastBill,
    class.Additions,
    class.Terminations,
    class.total,
    Head.DocNo, 
    /*Edit by siriporn.sr 13-01-26 เพิ่มการหยิบข้อมูล ReInsur_No เพื่อฝั่งระบบ Group RI ใช้สำหรับอ้างอิงการแยกสัญญาประกันต่อ 
    และเพิ่ม E1 TotalE1Amt, TotalE1Net*/
    AllPoliciesUnname.ReInsur_No AS ReInsurNo,
    Head.TotalE1Amt,
    Head.TotalE1Net,
    GETDATE() AS CreatedDate,
    'SYSTEM' AS CreatedBy,
    GETDATE() AS UpdatedDate,
    'SYSTEM' AS UpdatedBy
FROM OceanLife.dbo.GLSOPHead Head WITH (NOLOCK) 
INNER JOIN OceanLife.dbo.ZGL_GLSOPHead ZGLHead WITH (NOLOCK) ON Head.Docno = ZGLHead.Docno
INNER JOIN AllPoliciesUnname ON AllPoliciesUnname.PolicyNo = ZGLHead.PolicyNo 
                             AND AllPoliciesUnname.PolicyYear = ZGLHead.PolicyYear
INNER JOIN OceanLife.dbo.GLSOPClass class on class.DocNo = ZGLHead.DocNo  
WHERE ZGLHead.DocStatus <> 2; -- Cancel Record
 ]]>
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | RigVUnnameID | numeric | 8 | Y | เลขที่ Running | 1 | auto generate |
| 2 |  | PolicyCode | numeric | 1 | Y | ประเภทกธ. |  |  |
| 3 |  | Period | datetime |  | Y | งวดการคำนวณ |  |  |
| 4 | Index | PolicyNo | varchar | 8 | Y | เลขที่กรมธรรม์ |  |  |
| 5 |  | MthStatus | numeric | 1 | N |  |  | 0 = งวดปกติ1 = งวดเพิ่มเติม |
| 6 |  | Paytype | numeric | 4 | N | ประเภทการชำระเงินของกธ. |  | 0 : รายเดือน1 : ราย 3 เดือน2 : ราย 6 เดือน3 : รายปี |
| 7 |  | PolicyYear | numeric | 4 | N | ปีกรมธรรม์ |  |  |
| 8 |  | PromiseDate | datetime |  | N | วันเริ่มคุ้มครอง |  |  |
| 9 |  | ReInsurDate | datetime |  | N | วันต่อสัญญาปีต่อไป |  |  |
| 10 |  | TotalLife | numeric | 14,2 | N | เบี้ย.ชีวิต |  |  |
| 11 |  | TotalAcc | numeric | 14,2 | N | เบี้ยอบ. |  |  |
| 12 |  | TotalMed | numeric | 14,2 | N | เบี้ย.ค่ารักษาฯ..จาก อบ. |  |  |
| 13 |  | TotalTPD | numeric | 14,2 | N | เบี้ยทุพพลภาพ |  |  |
| 14 |  | TotalIP | numeric | 14,2 | N | เบี้ยคนไข้ใน |  |  |
| 15 |  | TotalOP | numeric | 14,2 | N | เบี้ยคนไข้นอก |  |  |
| 16 |  | TotalE1Amt | numeric | 14,2 | N | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ |  |  |
| 17 |  | TotalE1Net | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษรวม |  |  |
| 18 |  | GrandTotal | numeric | 14,2 | N | เบี้ยรวมทั้งหมด |  |  |
| 19 |  | CompCode | varchar | 10 | Y | รหัสบริษัท |  |  |
| 20 |  | DeptCode | varchar | 10 | Y | รหัสหน่วยงาน |  |  |
| 21 |  | TotalLifeInsur | numeric | 14,2 | N | ทุนชีวิต |  |  |
| 22 |  | TotalAccInsur | numeric | 14,2 | N | ทุนอบ. |  |  |
| 23 |  | TotalMedInsur | numeric | 14,2 | N | ทุนค่ารักษาฯ..จาก อบ. |  |  |
| 24 |  | TotalTPDInsur | numeric | 14,2 | N | ทุนทุพพลภาพ |  |  |
| 25 |  | TotalLifeAmt | int |  | N | จำนวนราย-ชีวิต |  |  |
| 26 |  | TotalAccAmt | int |  | N | จำนวนราย- อบ. |  |  |
| 27 |  | TotalMedAmt | int |  | N | จำนวนราย-ค่ารักษาฯ..จาก อบ. |  |  |
| 28 |  | TotalTPDAmt | int |  | N | จำนวนราย-ทุพพลภาพ |  |  |
| 29 |  | TotalE2Life | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ E2-ชีวิต |  |  |
| 30 |  | TotalE2Acc | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ E2- อบ. |  |  |
| 31 |  | TotalE2Med | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ E2-ค่ารักษาฯ..จาก อบ. |  |  |
| 32 |  | TotalE2TPD | numeric | 14,2 | N | เบี้ยเพิ่มพิเศษ E2-ทุพพลภาพ |  |  |
| 33 |  | Dental | numeric | 14,2 | N | เบี้ยทันตกรรม |  |  |
| 34 |  | DocNo | varchar | 20 | N | เลขที่เอกสาร |  |  |
| 35 |  | ReInsur_No | varchar | 10 | N | เลขที่กธ. ประกันต่อ |  |  |
| 36 |  | LastBill | int | 4 | N | จำนวนคนงวดก่อนหน้า |  |  |
| 37 |  | Additions | int | 4 | N | จำนวนคนงวดเพิ่ม |  |  |
| 38 |  | Terminations | int | 4 | N | จำนวนคนงวดยกเลิก |  |  |
| 39 |  | total | int | 4 | N | จำนวนคนรวม |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1300726206 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group =====
- tx_rig_landing_cert_inforce
- tx_rig_landing_unname_policy
- tx_rig_landing_policy
- tx_rig_landing_nature_business
- tx_rig_landing_investigation_expense
- tx_rig_landing_gl_sophead
- tx_rig_landing_exprefund
- tx_rig_landing_company
- tx_rig_landing_claimtpd
- tx_rig_landing_claimhealth
- tx_rig_landing_claimdeath
- tx_rig_landing_certnewbusiness
- tx_rig_landing_certificate_cust
- tx_rig_landing_certalteration


===== PAGE 1300987975 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_cert_inforce =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_cert_inforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_pol_inforce_id | int(8) |  | N | เลขที่ Running จากประกันกลุ่ม |  | RIG_View_CertInforce | rig_v_pol_inforce_id | tx_rig_landing_cert_inforce | rig_v_pol_inforce_id |
| 2 | FK | rig_process_hd_id | int(8) |  | N | เลขที่ process id จาก batch |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_cert_inforce | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_cert_inforce | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร |  | RIG_View_CertInforce | DOCNO | tx_rig_landing_cert_inforce | doc_no |
| 5 |  | policy_no | varchar | 20 | N | เลขกรมธรรม์ |  | RIG_View_CertInforce | PolicyNo | tx_rig_landing_cert_inforce | policy_no |
| 6 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ |  | RIG_View_CertInforce | EffectDate | tx_rig_landing_cert_inforce | effect_date |
| 7 |  | end_date | Timestamp |  | N | วัันที่สิ้นสุด |  | RIG_View_CertInforce | EndDate | tx_rig_landing_cert_inforce | end_date |
| 8 |  | change_date | Timestamp |  | N | วันที่มีผลเปลี่ยนแปลง |  | RIG_View_CertInforce | ChangeDate | tx_rig_landing_cert_inforce | change_date |
| 9 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า |  | RIG_View_CertInforce | CerNo | tx_rig_landing_cert_inforce | cer_no |
| 10 |  | comp_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompCode | tx_rig_landing_cert_inforce | comp_code |
| 11 |  | cust_code | varchar | 20 | N | รหัสลูกค้า |  | RIG_View_CertInforce | CustCode | tx_rig_landing_cert_inforce | cust_code |
| 12 |  | med_rate | varchar | 1 | N | อัตราเบี้ยสุขภาพ |  | RIG_View_CertInforce | MedRate | tx_rig_landing_cert_inforce | med_rate |
| 13 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertInforce | Age | tx_rig_landing_cert_inforce | age |
| 14 |  | sex | numeric | 5 | N | เพศ |  | RIG_View_CertInforce | Sex | tx_rig_landing_cert_inforce | sex |
| 15 |  | count_of_day | numeric | 10 | N | จำนวนวันที่มีผล |  | RIG_View_CertInforce | CountOfDay | tx_rig_landing_cert_inforce | count_of_day |
| 16 |  | life_insur | numeric | 19,4 | N | ทุน - ชีวิต |  | RIG_View_CertInforce | LifeInsur | tx_rig_landing_cert_inforce | life_insur |
| 17 |  | cremat_insur | numeric | 19,4 | N | ทุน - ค่าปลงศพ |  | RIG_View_CertInforce | CrematInsur | tx_rig_landing_cert_inforce | cremat_insur |
| 18 |  | acc_insur | numeric | 19,4 | N | ทุน - อุบัติเหตุ |  | RIG_View_CertInforce | AccInsur | tx_rig_landing_cert_inforce | acc_insur |
| 19 |  | med_insur | numeric | 19,4 | N | ทุน - ค่่ารักษา |  | RIG_View_CertInforce | MedInsur | tx_rig_landing_cert_inforce | med_insur |
| 20 |  | tpd_insur | numeric | 19,4 | N | ทุน - ทุพพลภาพ |  | RIG_View_CertInforce | TPDInsur | tx_rig_landing_cert_inforce | tpd_insur |
| 21 |  | life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | LifePrem | tx_rig_landing_cert_inforce | life_prem |
| 22 |  | life_e1_rate | numeric | 19,4 | N | อัตราเบี้ย Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Rate | tx_rig_landing_cert_inforce | life_e1_rate |
| 23 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย - Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Prem | tx_rig_landing_cert_inforce | life_e1_prem |
| 24 |  | cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | CrematPrem | tx_rig_landing_cert_inforce | cremat_prem |
| 25 |  | acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | AccPrem | tx_rig_landing_cert_inforce | acc_prem |
| 26 |  | med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่่ารักษาพยาบาล |  | RIG_View_CertInforce | MedAccPrem | tx_rig_landing_cert_inforce | med_acc_prem |
| 27 |  | tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | TPDPrem | tx_rig_landing_cert_inforce | tpd_prem |
| 28 |  | ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | IPDPrem | tx_rig_landing_cert_inforce | ipd_prem |
| 29 |  | opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | OPDPrem | tx_rig_landing_cert_inforce | opd_prem |
| 30 |  | major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | MajorPlanPrem | tx_rig_landing_cert_inforce | major_plan_prem |
| 31 |  | dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | DentalPrem | tx_rig_landing_cert_inforce | dental_prem |
| 32 |  | mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | MatherPrem | tx_rig_landing_cert_inforce | mather_prem |
| 33 |  | hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | HBPrem | tx_rig_landing_cert_inforce | hb_prem |
| 34 |  | status_member | varchar | 1 | N | สถานะความคุ้มครอง |  | RIG_View_CertInforce | StatusMember | tx_rig_landing_cert_inforce | status_member |
| 35 |  | status | numeric | 10 | N | สถานะการใช้งาน |  | RIG_View_CertInforce | Status | tx_rig_landing_cert_inforce | status |
| 36 |  | approved_date | Timestamp |  | N | วันที่อนุมัติ |  | RIG_View_CertInforce | ApprovedDate | tx_rig_landing_cert_inforce | approved_date |
| 37 |  | total_prem | numeric | 19,4 | N | เบี้ยรวมทั้งหมด |  | RIG_View_CertInforce | TotalPrem | tx_rig_landing_cert_inforce | total_prem |
| 38 |  | opd_lab_prem | numeric | 19,4 | N | เบี้ย OPD Lab รวมทั้งหมด |  | RIG_View_CertInforce | OPDLabPrem | tx_rig_landing_cert_inforce | opd_lab_prem |
| 39 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร |  | RIG_View_CertInforce | DOCDate | tx_rig_landing_cert_inforce | doc_date |
| 40 |  | company_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompanyCode | tx_rig_landing_cert_inforce | company_code |
| 41 |  | company_head_code | varchar | 20 | N | รหัสบริษัทต้นสังกัด |  | RIG_View_CertInforce | CompanyHeadCode | tx_rig_landing_cert_inforce | company_head_code |
| 42 |  | re_insure_no | varchar | 20 | N | เลขที่ี่ประกันต่อ |  | RIG_View_CertInforce | ReInsureNo | tx_rig_landing_cert_inforce | re_insure_no |
| 43 |  | policy_name | varchar | 200 | N | ชื่อกรมธรรม์ |  | RIG_View_CertInforce | PolicyName | tx_rig_landing_cert_inforce | policy_name |
| 44 |  | company_name | varchar | 200 | N | ชื่ื่อ บริษัทในเครือ |  | RIG_View_CertInforce | CompanyName | tx_rig_landing_cert_inforce | company_name |
| 45 |  | promise_date | Timestamp |  | N | วันที่เริ่มคุ้มครองกรมธรรม์ |  | RIG_View_CertInforce | PromiseDate | tx_rig_landing_cert_inforce | promise_date |
| 46 |  | pol_end_date | Timestamp |  | N | วันที่สิ้นสุดกรมธรรม์ |  | RIG_View_CertInforce | PolEndDate | tx_rig_landing_cert_inforce | pol_end_date |
| 47 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ |  | RIG_View_CertInforce | PolicyYear | tx_rig_landing_cert_inforce | policy_year |
| 48 |  | tax_year | numeric | 10 | N | ปีภาษี |  | RIG_View_CertInforce | TaxYear | tx_rig_landing_cert_inforce | tax_year |
| 49 |  | pay_type | numeric | 10 | N | ปีระเภทการจ่าย |  | RIG_View_CertInforce | PayType | tx_rig_landing_cert_inforce | pay_type |
| 50 |  | lot_no | numeric | 10 | N | งวดที่ |  | RIG_View_CertInforce | LotNo | tx_rig_landing_cert_inforce | lot_no |
| 51 |  | sum_life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | SumLifePrem | tx_rig_landing_cert_inforce | sum_life_prem |
| 52 |  | sum_life_e1_prem | numeric | 19,4 | N | เบี้ย - ชีวิตExtra 1 คิดรายคน |  | RIG_View_CertInforce | SumLifeE1Prem | tx_rig_landing_cert_inforce | sum_life_e1_prem |
| 53 |  | sum_cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | SumCrematPrem | tx_rig_landing_cert_inforce | sum_cremat_prem |
| 54 |  | sum_acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | SumAccPrem | tx_rig_landing_cert_inforce | sum_acc_prem |
| 55 |  | sum_med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่ารักษาพยาบาล |  | RIG_View_CertInforce | SumMedAccPrem | tx_rig_landing_cert_inforce | sum_med_acc_prem |
| 56 |  | sum_tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | SumTPDPrem | tx_rig_landing_cert_inforce | sum_tpd_prem |
| 57 |  | sum_ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | SumIPDPrem | tx_rig_landing_cert_inforce | sum_ipd_prem |
| 58 |  | sum_opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | SumOPDPrem | tx_rig_landing_cert_inforce | sum_opd_prem |
| 59 |  | sum_major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | SumMajorPlanPrem | tx_rig_landing_cert_inforce | sum_major_plan_prem |
| 60 |  | sum_dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | SumDentalPrem | tx_rig_landing_cert_inforce | sum_dental_prem |
| 61 |  | sum_mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | SumMatherPrem | tx_rig_landing_cert_inforce | sum_mather_prem |
| 62 |  | sum_hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | SumHBPrem | tx_rig_landing_cert_inforce | sum_hb_prem |
| 63 |  | sum_total_prem | numeric | 19,4 | N | เบี้ย - รวมทั้งหมด |  | RIG_View_CertInforce | SumTotalPrem | tx_rig_landing_cert_inforce | sum_total_prem |
| 64 |  | sum_opd_lab_prem | numeric | 2,2 | N | เบี้ยรวม OPD Lab |  | RIG_View_CertInforce | SumOPDLabPrem | tx_rig_landing_cert_inforce | sum_opd_lab_prem |
| 65 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertInforce | CreatedDate | tx_rig_landing_cert_inforce | created_date |
| 66 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertInforce | CreatedBy | tx_rig_landing_cert_inforce | created_by |
| 67 |  | period_date | Timestamp |  | N | วันที่เริ่มงวด |  | RIG_View_CertInforce | PeriodDate | tx_rig_landing_cert_inforce | period_date |


===== PAGE 1305412799 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_cert_inforce > LD7 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_pol_inforce_id | int(8) |  | N | เลขที่ Running จากประกันกลุ่ม |  | RIG_View_CertInforce | rig_v_pol_inforce_id | tx_rig_landing_cert_inforce | rig_v_pol_inforce_id |
| 2 | FK | rig_process_hd_id | int(8) |  | N | เลขที่ process id จาก batch |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_cert_inforce | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_cert_inforce | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร |  | RIG_View_CertInforce | DOCNO | tx_rig_landing_cert_inforce | doc_no |
| 5 |  | policy_no | varchar | 20 | N | เลขกรมธรรม์ |  | RIG_View_CertInforce | PolicyNo | tx_rig_landing_cert_inforce | policy_no |
| 6 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ |  | RIG_View_CertInforce | EffectDate | tx_rig_landing_cert_inforce | effect_date |
| 7 |  | end_date | Timestamp |  | N | วัันที่สิ้นสุด |  | RIG_View_CertInforce | EndDate | tx_rig_landing_cert_inforce | end_date |
| 8 |  | change_date | Timestamp |  | N | วันที่มีผลเปลี่ยนแปลง |  | RIG_View_CertInforce | ChangeDate | tx_rig_landing_cert_inforce | change_date |
| 9 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า |  | RIG_View_CertInforce | CerNo | tx_rig_landing_cert_inforce | cer_no |
| 10 |  | comp_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompCode | tx_rig_landing_cert_inforce | comp_code |
| 11 |  | cust_code | varchar | 20 | N | รหัสลูกค้า |  | RIG_View_CertInforce | CustCode | tx_rig_landing_cert_inforce | cust_code |
| 12 |  | med_rate | varchar | 1 | N | อัตราเบี้ยสุขภาพ |  | RIG_View_CertInforce | MedRate | tx_rig_landing_cert_inforce | med_rate |
| 13 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertInforce | Age | tx_rig_landing_cert_inforce | age |
| 14 |  | sex | numeric | 5 | N | เพศ |  | RIG_View_CertInforce | Sex | tx_rig_landing_cert_inforce | sex |
| 15 |  | count_of_day | numeric | 10 | N | จำนวนวันที่มีผล |  | RIG_View_CertInforce | CountOfDay | tx_rig_landing_cert_inforce | count_of_day |
| 16 |  | life_insur | numeric | 19,4 | N | ทุน - ชีวิต |  | RIG_View_CertInforce | LifeInsur | tx_rig_landing_cert_inforce | life_insur |
| 17 |  | cremat_insur | numeric | 19,4 | N | ทุน - ค่าปลงศพ |  | RIG_View_CertInforce | CrematInsur | tx_rig_landing_cert_inforce | cremat_insur |
| 18 |  | acc_insur | numeric | 19,4 | N | ทุน - อุบัติเหตุ |  | RIG_View_CertInforce | AccInsur | tx_rig_landing_cert_inforce | acc_insur |
| 19 |  | med_insur | numeric | 19,4 | N | ทุน - ค่่ารักษา |  | RIG_View_CertInforce | MedInsur | tx_rig_landing_cert_inforce | med_insur |
| 20 |  | tpd_insur | numeric | 19,4 | N | ทุน - ทุพพลภาพ |  | RIG_View_CertInforce | TPDInsur | tx_rig_landing_cert_inforce | tpd_insur |
| 21 |  | life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | LifePrem | tx_rig_landing_cert_inforce | life_prem |
| 22 |  | life_e1_rate | numeric | 19,4 | N | อัตราเบี้ย Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Rate | tx_rig_landing_cert_inforce | life_e1_rate |
| 23 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย - Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Prem | tx_rig_landing_cert_inforce | life_e1_prem |
| 24 |  | cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | CrematPrem | tx_rig_landing_cert_inforce | cremat_prem |
| 25 |  | acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | AccPrem | tx_rig_landing_cert_inforce | acc_prem |
| 26 |  | med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่่ารักษาพยาบาล |  | RIG_View_CertInforce | MedAccPrem | tx_rig_landing_cert_inforce | med_acc_prem |
| 27 |  | tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | TPDPrem | tx_rig_landing_cert_inforce | tpd_prem |
| 28 |  | ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | IPDPrem | tx_rig_landing_cert_inforce | ipd_prem |
| 29 |  | opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | OPDPrem | tx_rig_landing_cert_inforce | opd_prem |
| 30 |  | major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | MajorPlanPrem | tx_rig_landing_cert_inforce | major_plan_prem |
| 31 |  | dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | DentalPrem | tx_rig_landing_cert_inforce | dental_prem |
| 32 |  | mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | MatherPrem | tx_rig_landing_cert_inforce | mather_prem |
| 33 |  | hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | HBPrem | tx_rig_landing_cert_inforce | hb_prem |
| 34 |  | status_member | varchar | 1 | N | สถานะความคุ้มครอง |  | RIG_View_CertInforce | StatusMember | tx_rig_landing_cert_inforce | status_member |
| 35 |  | status | numeric | 10 | N | สถานะการใช้งาน |  | RIG_View_CertInforce | Status | tx_rig_landing_cert_inforce | status |
| 36 |  | approved_date | Timestamp |  | N | วันที่อนุมัติ |  | RIG_View_CertInforce | ApprovedDate | tx_rig_landing_cert_inforce | approved_date |
| 37 |  | total_prem | numeric | 19,4 | N | เบี้ยรวมทั้งหมด |  | RIG_View_CertInforce | TotalPrem | tx_rig_landing_cert_inforce | total_prem |
| 38 |  | opd_lab_prem | numeric | 19,4 | N | เบี้ย OPD Lab รวมทั้งหมด |  | RIG_View_CertInforce | OPDLabPrem | tx_rig_landing_cert_inforce | opd_lab_prem |
| 39 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร |  | RIG_View_CertInforce | DOCDate | tx_rig_landing_cert_inforce | doc_date |
| 40 |  | company_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompanyCode | tx_rig_landing_cert_inforce | company_code |
| 41 |  | company_head_code | varchar | 20 | N | รหัสบริษัทต้นสังกัด |  | RIG_View_CertInforce | CompanyHeadCode | tx_rig_landing_cert_inforce | company_head_code |
| 42 |  | re_insure_no | varchar | 20 | N | เลขที่ี่ประกันต่อ |  | RIG_View_CertInforce | ReInsureNo | tx_rig_landing_cert_inforce | re_insure_no |
| 43 |  | policy_name | varchar | 200 | N | ชื่อกรมธรรม์ |  | RIG_View_CertInforce | PolicyName | tx_rig_landing_cert_inforce | policy_name |
| 44 |  | company_name | varchar | 200 | N | ชื่ื่อ บริษัทในเครือ |  | RIG_View_CertInforce | CompanyName | tx_rig_landing_cert_inforce | company_name |
| 45 |  | promise_date | Timestamp |  | N | วันที่เริ่มคุ้มครองกรมธรรม์ |  | RIG_View_CertInforce | PromiseDate | tx_rig_landing_cert_inforce | promise_date |
| 46 |  | pol_end_date | Timestamp |  | N | วันที่สิ้นสุดกรมธรรม์ |  | RIG_View_CertInforce | PolEndDate | tx_rig_landing_cert_inforce | pol_end_date |
| 47 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ |  | RIG_View_CertInforce | PolicyYear | tx_rig_landing_cert_inforce | policy_year |
| 48 |  | tax_year | numeric | 10 | N | ปีภาษี |  | RIG_View_CertInforce | TaxYear | tx_rig_landing_cert_inforce | tax_year |
| 49 |  | pay_type | numeric | 10 | N | ปีระเภทการจ่าย |  | RIG_View_CertInforce | PayType | tx_rig_landing_cert_inforce | pay_type |
| 50 |  | lot_no | numeric | 10 | N | งวดที่ |  | RIG_View_CertInforce | LotNo | tx_rig_landing_cert_inforce | lot_no |
| 51 |  | sum_life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | SumLifePrem | tx_rig_landing_cert_inforce | sum_life_prem |
| 52 |  | sum_life_e1_prem | numeric | 19,4 | N | เบี้ย - ชีวิตExtra 1 คิดรายคน |  | RIG_View_CertInforce | SumLifeE1Prem | tx_rig_landing_cert_inforce | sum_life_e1_prem |
| 53 |  | sum_cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | SumCrematPrem | tx_rig_landing_cert_inforce | sum_cremat_prem |
| 54 |  | sum_acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | SumAccPrem | tx_rig_landing_cert_inforce | sum_acc_prem |
| 55 |  | sum_med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่ารักษาพยาบาล |  | RIG_View_CertInforce | SumMedAccPrem | tx_rig_landing_cert_inforce | sum_med_acc_prem |
| 56 |  | sum_tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | SumTPDPrem | tx_rig_landing_cert_inforce | sum_tpd_prem |
| 57 |  | sum_ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | SumIPDPrem | tx_rig_landing_cert_inforce | sum_ipd_prem |
| 58 |  | sum_opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | SumOPDPrem | tx_rig_landing_cert_inforce | sum_opd_prem |
| 59 |  | sum_major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | SumMajorPlanPrem | tx_rig_landing_cert_inforce | sum_major_plan_prem |
| 60 |  | sum_dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | SumDentalPrem | tx_rig_landing_cert_inforce | sum_dental_prem |
| 61 |  | sum_mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | SumMatherPrem | tx_rig_landing_cert_inforce | sum_mather_prem |
| 62 |  | sum_hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | SumHBPrem | tx_rig_landing_cert_inforce | sum_hb_prem |
| 63 |  | sum_total_prem | numeric | 19,4 | N | เบี้ย - รวมทั้งหมด |  | RIG_View_CertInforce | SumTotalPrem | tx_rig_landing_cert_inforce | sum_total_prem |
| 64 |  | sum_opd_lab_prem | numeric | 2,2 | N | เบี้ยรวม OPD Lab |  | RIG_View_CertInforce | SumOPDLabPrem | tx_rig_landing_cert_inforce | sum_opd_lab_prem |
| 65 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertInforce | CreatedDate | tx_rig_landing_cert_inforce | created_date |
| 66 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertInforce | CreatedBy | tx_rig_landing_cert_inforce | created_by |
| 67 |  | period_date | Timestamp |  | N | วันที่เริ่มงวด |  | RIG_View_CertInforce | PeriodDate | tx_rig_landing_cert_inforce | period_date |


===== PAGE 1300987981 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certalteration =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_certalteration | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_alter_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertAlteration | RIG_View_CertAlteration | RigVAlterId | tx_rig_landing_certalteration | rig_v_alter_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certalteration | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certalteration | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร (MM64-XXXXX) | RIG_View_CertAlteration | DocNo | tx_rig_landing_certalteration | doc_no |
| 5 |  | doc_date | Timestamp |  | N | วันที่เอกสาร (Alteration Date) | RIG_View_CertAlteration | DocDate | tx_rig_landing_certalteration | doc_date |
| 6 |  | trans_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_CertAlteration | TransDate | tx_rig_landing_certalteration | trans_date |
| 7 |  | mth_status | numeric | 1 | N | งวด 0 : งวดปกติ 1 : งวดเพิ่มเติม | RIG_View_CertAlteration | MthStatus | tx_rig_landing_certalteration | mth_status |
| 8 |  | policy_no | varchar | 8 | N | สถานะกรมธรรม์ | RIG_View_CertAlteration | PolicyNo | tx_rig_landing_certalteration | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_CertAlteration | PolicyYear | tx_rig_landing_certalteration | policy_year |
| 10 |  | doc_status | numeric | 5 | N | สถานะเอกสาร | RIG_View_CertAlteration | DocStatus | tx_rig_landing_certalteration | doc_status |
| 11 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertAlteration | PolicyCode | tx_rig_landing_certalteration | policy_code |
| 12 |  | certific_cust_no | varchar | 8 | N | เลขที่ี่ Cerno สมาชิก | RIG_View_CertAlteration | CertificCustNo | tx_rig_landing_certalteration | certific_cust_no |
| 13 |  | custcode | varchar | 10 | N | เลขที่ Custcode สมาชิก | RIG_View_CertAlteration | Custcode | tx_rig_landing_certalteration | custcode |
| 14 |  | comp_code_before | varchar | 10 | N | รหัสบริษัทก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeBefore | tx_rig_landing_certalteration | comp_code_before |
| 15 |  | comp_code_after | varchar | 10 | N | รหัสบริษัทหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeAfter | tx_rig_landing_certalteration | comp_code_after |
| 16 |  | dept_code_before | varchar | 10 | N | รหัสหน่วยงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeBefore | tx_rig_landing_certalteration | dept_code_before |
| 17 |  | dept_code_after | varchar | 10 | N | รหัสหน่วยงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeAfter | tx_rig_landing_certalteration | dept_code_after |
| 18 |  | status_after | varchar | 1 | N | Status หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusAfter | tx_rig_landing_certalteration | status_after |
| 19 |  | status_before | varchar | 1 | N | Status ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusBefore | tx_rig_landing_certalteration | status_before |
| 20 |  | salary_before | numeric | 19,4 | N | เงินเดือนก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryBefore | tx_rig_landing_certalteration | salary_before |
| 21 |  | salary_after | numeric | 19,4 | N | เงินเดือนหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryAfter | tx_rig_landing_certalteration | salary_after |
| 22 |  | emp_no_before | varchar | 30 | N | รหัสพนักงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoBefore | tx_rig_landing_certalteration | emp_no_before |
| 23 |  | emp_no_after | varchar | 30 | N | รหัสพนักงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoAfter | tx_rig_landing_certalteration | emp_no_after |
| 24 |  | change_date_before | Timestamp |  | N | Change Date ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateBefore | tx_rig_landing_certalteration | change_date_before |
| 25 |  | change_date_after | Timestamp |  | N | Change Date หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateAfter | tx_rig_landing_certalteration | change_date_after |
| 26 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertAlteration | EffectDate | tx_rig_landing_certalteration | effect_date |
| 27 |  | effect_date_before | Timestamp |  | N | วันที่มีผลบังคับก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EffectDateBefore | tx_rig_landing_certalteration | effect_date_before |
| 28 |  | class_no_before | numeric | 3 | N | Class No. ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoBefore | tx_rig_landing_certalteration | class_no_before |
| 29 |  | class_no_after | numeric | 3 | N | Class No. หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoAfter | tx_rig_landing_certalteration | class_no_after |
| 30 |  | count_of_date | numeric | 10 | N | จำนวนวัน | RIG_View_CertAlteration | CountOfDate | tx_rig_landing_certalteration | count_of_date |
| 31 |  | life_insur_before | numeric | 19,4 | N | ทุนชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurBefore | tx_rig_landing_certalteration | life_insur_before |
| 32 |  | acc_insur_before | numeric | 19,4 | N | ทุน อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurBefore | tx_rig_landing_certalteration | acc_insur_before |
| 33 |  | med_insur_before | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurBefore | tx_rig_landing_certalteration | med_insur_before |
| 34 |  | tpd_insur_before | numeric | 19,4 | N | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurBefore | tx_rig_landing_certalteration | tpd_insur_before |
| 35 |  | life_insur_after | numeric | 19,4 | N | ทุนชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurAfter | tx_rig_landing_certalteration | life_insur_after |
| 36 |  | acc_insur_after | numeric | 19,4 | N | ทุน อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurAfter | tx_rig_landing_certalteration | acc_insur_after |
| 37 |  | med_insur_after | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurAfter | tx_rig_landing_certalteration | med_insur_after |
| 38 |  | tpd_insur_after | numeric | 19,4 | N | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurAfter | tx_rig_landing_certalteration | tpd_insur_after |
| 39 |  | life_prem_before | numeric | 19,4 | N | เบี้ย-ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremBefore | tx_rig_landing_certalteration | life_prem_before |
| 40 |  | acc_prem_before | numeric | 19,4 | N | เบี้ย- อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremBefore | tx_rig_landing_certalteration | acc_prem_before |
| 41 |  | med_prem_before | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremBefore | tx_rig_landing_certalteration | med_prem_before |
| 42 |  | tpd_prem_before | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremBefore | tx_rig_landing_certalteration | tpd_prem_before |
| 43 |  | life_e1_prem_before | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremBefore | tx_rig_landing_certalteration | life_e1_prem_before |
| 44 |  | life_prem_after | numeric | 19,4 | N | เบี้ย-ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremAfter | tx_rig_landing_certalteration | life_prem_after |
| 45 |  | acc_prem_after | numeric | 19,4 | N | เบี้ย- อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremAfter | tx_rig_landing_certalteration | acc_prem_after |
| 46 |  | med_prem_after | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremAfter | tx_rig_landing_certalteration | med_prem_after |
| 47 |  | tpd_prem_after | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremAfter | tx_rig_landing_certalteration | tpd_prem_after |
| 48 |  | life_e1_prem_after | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremAfter | tx_rig_landing_certalteration | life_e1_prem_after |
| 49 |  | life_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ชีวิต | RIG_View_CertAlteration | LifePremDiff | tx_rig_landing_certalteration | life_prem_diff |
| 50 |  | acc_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย- อบ. | RIG_View_CertAlteration | AccPremDiff | tx_rig_landing_certalteration | acc_prem_diff |
| 51 |  | med_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ค่ารักษาฯ..จาก อบ. | RIG_View_CertAlteration | MedPremDiff | tx_rig_landing_certalteration | med_prem_diff |
| 52 |  | tpd_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ทุพพลภาพ | RIG_View_CertAlteration | TPDPremDiff | tx_rig_landing_certalteration | tpd_prem_diff |
| 53 |  | life_e1_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต | RIG_View_CertAlteration | LifeE1PremDiff | tx_rig_landing_certalteration | life_e1_prem_diff |
| 54 |  | life_e1_rate_before | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateBefore | tx_rig_landing_certalteration | life_e1_rate_before |
| 55 |  | life_e1_rate_after | numeric | 19.4 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateAfter | tx_rig_landing_certalteration | life_e1_rate_after |
| 56 |  | med_plan_before | numeric | 10 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanBefore | tx_rig_landing_certalteration | med_plan_before |
| 57 |  | med_rate_before | varchar | 1 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateBefore | tx_rig_landing_certalteration | med_rate_before |
| 58 |  | med_plan_after | numeric | 10 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanAfter | tx_rig_landing_certalteration | med_plan_after |
| 59 |  | med_rate_after | varchar | 1 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateAfter | tx_rig_landing_certalteration | med_rate_after |
| 60 |  | med_prem_ip_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPBefore | tx_rig_landing_certalteration | med_prem_ip_before |
| 61 |  | med_prem_op_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPBefore | tx_rig_landing_certalteration | med_prem_op_before |
| 62 |  | dental_before | numeric | 19,4 | N | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalBefore | tx_rig_landing_certalteration | dental_before |
| 63 |  | med_prem_ip_after | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPAfter | tx_rig_landing_certalteration | med_prem_ip_after |
| 64 |  | med_prem_op_after | numeric | 19,4 | N | เบี้ย-คนไข้นอก-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPAfter | tx_rig_landing_certalteration | med_prem_op_after |
| 65 |  | dental_after | numeric | 19,4 | N | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalAfter | tx_rig_landing_certalteration | dental_after |
| 66 |  | med_plan_rate_ip_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้ใน | RIG_View_CertAlteration | MedPlanRateIPPremDiff | tx_rig_landing_certalteration | med_plan_rate_ip_prem_diff |
| 67 |  | med_plan_rate_op_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้นอก | RIG_View_CertAlteration | MedPlanRateOPPremDiff | tx_rig_landing_certalteration | med_plan_rate_op_prem_diff |
| 68 |  | dental_diff | numeric | 19,4 | N | ผลต่างของเบี้ยทันตกรรม | RIG_View_CertAlteration | DentalDiff | tx_rig_landing_certalteration | dental_diff |
| 69 |  | empyer | numeric | 19,4 | N | จำนวนเงินที่นายจ้างจ่ายให้ | RIG_View_CertAlteration | Empyer | tx_rig_landing_certalteration | empyer |
| 70 |  | empyee | numeric | 19,4 | N | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย | RIG_View_CertAlteration | Empyee | tx_rig_landing_certalteration | empyee |
| 71 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertAlteration | CreatedDate | tx_rig_landing_certalteration | created_date |
| 72 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertAlteration | CreatedBy | tx_rig_landing_certalteration | created_by |


===== PAGE 1305412809 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certalteration > LD9 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_alter_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertAlteration | RIG_View_CertAlteration | RigVAlterId | tx_rig_landing_certalteration | rig_v_alter_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certalteration | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certalteration | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร (MM64-XXXXX) | RIG_View_CertAlteration | DocNo | tx_rig_landing_certalteration | doc_no |
| 5 |  | doc_date | Timestamp |  | N | วันที่เอกสาร (Alteration Date) | RIG_View_CertAlteration | DocDate | tx_rig_landing_certalteration | doc_date |
| 6 |  | trans_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_CertAlteration | TransDate | tx_rig_landing_certalteration | trans_date |
| 7 |  | mth_status | numeric | 1 | N | งวด 0 : งวดปกติ 1 : งวดเพิ่มเติม | RIG_View_CertAlteration | MthStatus | tx_rig_landing_certalteration | mth_status |
| 8 |  | policy_no | varchar | 8 | N | สถานะกรมธรรม์ | RIG_View_CertAlteration | PolicyNo | tx_rig_landing_certalteration | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_CertAlteration | PolicyYear | tx_rig_landing_certalteration | policy_year |
| 10 |  | doc_status | numeric | 5 | N | สถานะเอกสาร | RIG_View_CertAlteration | DocStatus | tx_rig_landing_certalteration | doc_status |
| 11 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertAlteration | PolicyCode | tx_rig_landing_certalteration | policy_code |
| 12 |  | certific_cust_no | varchar | 8 | N | เลขที่ี่ Cerno สมาชิก | RIG_View_CertAlteration | CertificCustNo | tx_rig_landing_certalteration | certific_cust_no |
| 13 |  | custcode | varchar | 10 | N | เลขที่ Custcode สมาชิก | RIG_View_CertAlteration | Custcode | tx_rig_landing_certalteration | custcode |
| 14 |  | comp_code_before | varchar | 10 | N | รหัสบริษัทก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeBefore | tx_rig_landing_certalteration | comp_code_before |
| 15 |  | comp_code_after | varchar | 10 | N | รหัสบริษัทหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeAfter | tx_rig_landing_certalteration | comp_code_after |
| 16 |  | dept_code_before | varchar | 10 | N | รหัสหน่วยงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeBefore | tx_rig_landing_certalteration | dept_code_before |
| 17 |  | dept_code_after | varchar | 10 | N | รหัสหน่วยงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeAfter | tx_rig_landing_certalteration | dept_code_after |
| 18 |  | status_after | varchar | 1 | N | Status หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusAfter | tx_rig_landing_certalteration | status_after |
| 19 |  | status_before | varchar | 1 | N | Status ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusBefore | tx_rig_landing_certalteration | status_before |
| 20 |  | salary_before | numeric | 19,4 | N | เงินเดือนก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryBefore | tx_rig_landing_certalteration | salary_before |
| 21 |  | salary_after | numeric | 19,4 | N | เงินเดือนหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryAfter | tx_rig_landing_certalteration | salary_after |
| 22 |  | emp_no_before | varchar | 30 | N | รหัสพนักงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoBefore | tx_rig_landing_certalteration | emp_no_before |
| 23 |  | emp_no_after | varchar | 30 | N | รหัสพนักงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoAfter | tx_rig_landing_certalteration | emp_no_after |
| 24 |  | change_date_before | Timestamp |  | N | Change Date ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateBefore | tx_rig_landing_certalteration | change_date_before |
| 25 |  | change_date_after | Timestamp |  | N | Change Date หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateAfter | tx_rig_landing_certalteration | change_date_after |
| 26 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertAlteration | EffectDate | tx_rig_landing_certalteration | effect_date |
| 27 |  | effect_date_before | Timestamp |  | N | วันที่มีผลบังคับก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EffectDateBefore | tx_rig_landing_certalteration | effect_date_before |
| 28 |  | class_no_before | numeric | 3 | N | Class No. ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoBefore | tx_rig_landing_certalteration | class_no_before |
| 29 |  | class_no_after | numeric | 3 | N | Class No. หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoAfter | tx_rig_landing_certalteration | class_no_after |
| 30 |  | count_of_date | numeric | 10 | N | จำนวนวัน | RIG_View_CertAlteration | CountOfDate | tx_rig_landing_certalteration | count_of_date |
| 31 |  | life_insur_before | numeric | 19,4 | N | ทุนชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurBefore | tx_rig_landing_certalteration | life_insur_before |
| 32 |  | acc_insur_before | numeric | 19,4 | N | ทุน อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurBefore | tx_rig_landing_certalteration | acc_insur_before |
| 33 |  | med_insur_before | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurBefore | tx_rig_landing_certalteration | med_insur_before |
| 34 |  | tpd_insur_before | numeric | 19,4 | N | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurBefore | tx_rig_landing_certalteration | tpd_insur_before |
| 35 |  | life_insur_after | numeric | 19,4 | N | ทุนชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurAfter | tx_rig_landing_certalteration | life_insur_after |
| 36 |  | acc_insur_after | numeric | 19,4 | N | ทุน อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurAfter | tx_rig_landing_certalteration | acc_insur_after |
| 37 |  | med_insur_after | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurAfter | tx_rig_landing_certalteration | med_insur_after |
| 38 |  | tpd_insur_after | numeric | 19,4 | N | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurAfter | tx_rig_landing_certalteration | tpd_insur_after |
| 39 |  | life_prem_before | numeric | 19,4 | N | เบี้ย-ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremBefore | tx_rig_landing_certalteration | life_prem_before |
| 40 |  | acc_prem_before | numeric | 19,4 | N | เบี้ย- อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremBefore | tx_rig_landing_certalteration | acc_prem_before |
| 41 |  | med_prem_before | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremBefore | tx_rig_landing_certalteration | med_prem_before |
| 42 |  | tpd_prem_before | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremBefore | tx_rig_landing_certalteration | tpd_prem_before |
| 43 |  | life_e1_prem_before | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremBefore | tx_rig_landing_certalteration | life_e1_prem_before |
| 44 |  | life_prem_after | numeric | 19,4 | N | เบี้ย-ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremAfter | tx_rig_landing_certalteration | life_prem_after |
| 45 |  | acc_prem_after | numeric | 19,4 | N | เบี้ย- อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremAfter | tx_rig_landing_certalteration | acc_prem_after |
| 46 |  | med_prem_after | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremAfter | tx_rig_landing_certalteration | med_prem_after |
| 47 |  | tpd_prem_after | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremAfter | tx_rig_landing_certalteration | tpd_prem_after |
| 48 |  | life_e1_prem_after | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremAfter | tx_rig_landing_certalteration | life_e1_prem_after |
| 49 |  | life_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ชีวิต | RIG_View_CertAlteration | LifePremDiff | tx_rig_landing_certalteration | life_prem_diff |
| 50 |  | acc_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย- อบ. | RIG_View_CertAlteration | AccPremDiff | tx_rig_landing_certalteration | acc_prem_diff |
| 51 |  | med_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ค่ารักษาฯ..จาก อบ. | RIG_View_CertAlteration | MedPremDiff | tx_rig_landing_certalteration | med_prem_diff |
| 52 |  | tpd_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ทุพพลภาพ | RIG_View_CertAlteration | TPDPremDiff | tx_rig_landing_certalteration | tpd_prem_diff |
| 53 |  | life_e1_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต | RIG_View_CertAlteration | LifeE1PremDiff | tx_rig_landing_certalteration | life_e1_prem_diff |
| 54 |  | life_e1_rate_before | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateBefore | tx_rig_landing_certalteration | life_e1_rate_before |
| 55 |  | life_e1_rate_after | numeric | 19.4 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateAfter | tx_rig_landing_certalteration | life_e1_rate_after |
| 56 |  | med_plan_before | numeric | 10 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanBefore | tx_rig_landing_certalteration | med_plan_before |
| 57 |  | med_rate_before | varchar | 1 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateBefore | tx_rig_landing_certalteration | med_rate_before |
| 58 |  | med_plan_after | numeric | 10 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanAfter | tx_rig_landing_certalteration | med_plan_after |
| 59 |  | med_rate_after | varchar | 1 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateAfter | tx_rig_landing_certalteration | med_rate_after |
| 60 |  | med_prem_ip_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPBefore | tx_rig_landing_certalteration | med_prem_ip_before |
| 61 |  | med_prem_op_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPBefore | tx_rig_landing_certalteration | med_prem_op_before |
| 62 |  | dental_before | numeric | 19,4 | N | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalBefore | tx_rig_landing_certalteration | dental_before |
| 63 |  | med_prem_ip_after | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPAfter | tx_rig_landing_certalteration | med_prem_ip_after |
| 64 |  | med_prem_op_after | numeric | 19,4 | N | เบี้ย-คนไข้นอก-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPAfter | tx_rig_landing_certalteration | med_prem_op_after |
| 65 |  | dental_after | numeric | 19,4 | N | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalAfter | tx_rig_landing_certalteration | dental_after |
| 66 |  | med_plan_rate_ip_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้ใน | RIG_View_CertAlteration | MedPlanRateIPPremDiff | tx_rig_landing_certalteration | med_plan_rate_ip_prem_diff |
| 67 |  | med_plan_rate_op_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้นอก | RIG_View_CertAlteration | MedPlanRateOPPremDiff | tx_rig_landing_certalteration | med_plan_rate_op_prem_diff |
| 68 |  | dental_diff | numeric | 19,4 | N | ผลต่างของเบี้ยทันตกรรม | RIG_View_CertAlteration | DentalDiff | tx_rig_landing_certalteration | dental_diff |
| 69 |  | empyer | numeric | 19,4 | N | จำนวนเงินที่นายจ้างจ่ายให้ | RIG_View_CertAlteration | Empyer | tx_rig_landing_certalteration | empyer |
| 70 |  | empyee | numeric | 19,4 | N | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย | RIG_View_CertAlteration | Empyee | tx_rig_landing_certalteration | empyee |
| 71 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertAlteration | CreatedDate | tx_rig_landing_certalteration | created_date |
| 72 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertAlteration | CreatedBy | tx_rig_landing_certalteration | created_by |


===== PAGE 1300726322 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certificate_cust =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_certificate_cust | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_cert_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertificateCust | RIG_View_CertificateCust | RigVCertId | tx_rig_landing_certificate_cust | rig_v_cert_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certificate_cust | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certificate_cust | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน | RIG_View_CertificateCust | CertificCustNo | tx_rig_landing_certificate_cust | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_CertificateCust | CustCode | tx_rig_landing_certificate_cust | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertificateCust | PolicyCode | tx_rig_landing_certificate_cust | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_CertificateCust | PolicyNo | tx_rig_landing_certificate_cust | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_CertificateCust | PolicyYear | tx_rig_landing_certificate_cust | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. | RIG_View_CertificateCust | ClassNo | tx_rig_landing_certificate_cust | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertificateCust | EffectDate | tx_rig_landing_certificate_cust | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร | RIG_View_CertificateCust | TransDate | tx_rig_landing_certificate_cust | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง | RIG_View_CertificateCust | ChangeDate | tx_rig_landing_certificate_cust | change_date |
| 13 |  | life_extra_rate | numeric | 7,4 | N | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต | RIG_View_CertificateCust | LifeExtraRate | tx_rig_landing_certificate_cust | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุน...ชีวิต | RIG_View_CertificateCust | LifeInsur | tx_rig_landing_certificate_cust | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน... อบ. | RIG_View_CertificateCust | AccInsur | tx_rig_landing_certificate_cust | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุน...ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedInsur | tx_rig_landing_certificate_cust | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุน...ชีวิตทุพพลภาพ | RIG_View_CertificateCust | TPDInsur | tx_rig_landing_certificate_cust | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย...เพิ่มพิเศษ - ชีวิต | RIG_View_CertificateCust | LifeE1Prem | tx_rig_landing_certificate_cust | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ย......ชีวิต | RIG_View_CertificateCust | LifePrem | tx_rig_landing_certificate_cust | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย...... อบ. | RIG_View_CertificateCust | AccPrem | tx_rig_landing_certificate_cust | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ย......ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedPrem | tx_rig_landing_certificate_cust | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ | RIG_View_CertificateCust | Age | tx_rig_landing_certificate_cust | age |
| 23 |  | status | char | 1 | N | สถานะผู้เอาประกัน | RIG_View_CertificateCust | Status | tx_rig_landing_certificate_cust | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ย......ทุพพลภาพ | RIG_View_CertificateCust | TPDPrem | tx_rig_landing_certificate_cust | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยใน | RIG_View_CertificateCust | MedPlanRateIPPrem | tx_rig_landing_certificate_cust | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยนอก | RIG_View_CertificateCust | MedPlanRateOPPrem | tx_rig_landing_certificate_cust | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ย......ทันตกรรม | RIG_View_CertificateCust | Dental | tx_rig_landing_certificate_cust | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ย......ส่วนที่นายจ้างจ่าย | RIG_View_CertificateCust | NetEmployer | tx_rig_landing_certificate_cust | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ย......ส่วนที่ลูกจ้างจ่าย | RIG_View_CertificateCust | NetEmployee | tx_rig_landing_certificate_cust | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด | RIG_View_CertificateCust | CompCode | tx_rig_landing_certificate_cust | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ | RIG_View_CertificateCust | Sex | tx_rig_landing_certificate_cust | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด | RIG_View_CertificateCust | Birthday | tx_rig_landing_certificate_cust | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertificateCust | CreatedDate | tx_rig_landing_certificate_cust | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertificateCust | CreatedBy | tx_rig_landing_certificate_cust | created_by |


===== PAGE 1305412765 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certificate_cust > LD2 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_cert_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertificateCust | RIG_View_CertificateCust | RigVCertId | tx_rig_landing_certificate_cust | rig_v_cert_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certificate_cust | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certificate_cust | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน | RIG_View_CertificateCust | CertificCustNo | tx_rig_landing_certificate_cust | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_CertificateCust | CustCode | tx_rig_landing_certificate_cust | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertificateCust | PolicyCode | tx_rig_landing_certificate_cust | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_CertificateCust | PolicyNo | tx_rig_landing_certificate_cust | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_CertificateCust | PolicyYear | tx_rig_landing_certificate_cust | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. | RIG_View_CertificateCust | ClassNo | tx_rig_landing_certificate_cust | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertificateCust | EffectDate | tx_rig_landing_certificate_cust | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร | RIG_View_CertificateCust | TransDate | tx_rig_landing_certificate_cust | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง | RIG_View_CertificateCust | ChangeDate | tx_rig_landing_certificate_cust | change_date |
| 13 |  | life_extra_rate | numeric | 7,4 | N | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต | RIG_View_CertificateCust | LifeExtraRate | tx_rig_landing_certificate_cust | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุน...ชีวิต | RIG_View_CertificateCust | LifeInsur | tx_rig_landing_certificate_cust | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน... อบ. | RIG_View_CertificateCust | AccInsur | tx_rig_landing_certificate_cust | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุน...ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedInsur | tx_rig_landing_certificate_cust | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุน...ชีวิตทุพพลภาพ | RIG_View_CertificateCust | TPDInsur | tx_rig_landing_certificate_cust | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย...เพิ่มพิเศษ - ชีวิต | RIG_View_CertificateCust | LifeE1Prem | tx_rig_landing_certificate_cust | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ย......ชีวิต | RIG_View_CertificateCust | LifePrem | tx_rig_landing_certificate_cust | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย...... อบ. | RIG_View_CertificateCust | AccPrem | tx_rig_landing_certificate_cust | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ย......ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedPrem | tx_rig_landing_certificate_cust | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ | RIG_View_CertificateCust | Age | tx_rig_landing_certificate_cust | age |
| 23 |  | status | char | 1 | N | สถานะผู้เอาประกัน | RIG_View_CertificateCust | Status | tx_rig_landing_certificate_cust | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ย......ทุพพลภาพ | RIG_View_CertificateCust | TPDPrem | tx_rig_landing_certificate_cust | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยใน | RIG_View_CertificateCust | MedPlanRateIPPrem | tx_rig_landing_certificate_cust | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยนอก | RIG_View_CertificateCust | MedPlanRateOPPrem | tx_rig_landing_certificate_cust | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ย......ทันตกรรม | RIG_View_CertificateCust | Dental | tx_rig_landing_certificate_cust | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ย......ส่วนที่นายจ้างจ่าย | RIG_View_CertificateCust | NetEmployer | tx_rig_landing_certificate_cust | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ย......ส่วนที่ลูกจ้างจ่าย | RIG_View_CertificateCust | NetEmployee | tx_rig_landing_certificate_cust | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด | RIG_View_CertificateCust | CompCode | tx_rig_landing_certificate_cust | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ | RIG_View_CertificateCust | Sex | tx_rig_landing_certificate_cust | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด | RIG_View_CertificateCust | Birthday | tx_rig_landing_certificate_cust | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertificateCust | CreatedDate | tx_rig_landing_certificate_cust | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertificateCust | CreatedBy | tx_rig_landing_certificate_cust | created_by |


===== PAGE 1300987978 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certnewbusiness =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_certnewbusiness | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | TB mapping snapshot |
| 1 | PK | rig_v_cer_id | int(8) |  | Y | เลขที่ Running |  | RIG_View_CertNewBusiness | RigVCerId | tx_rig_landing_certnewbusiness | rig_v_cer_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certnewbusiness | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_certnewbusiness | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน |  | RIG_View_CertNewBusiness | CertificCustNo | tx_rig_landing_certnewbusiness | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า |  | RIG_View_CertNewBusiness | CustCode | tx_rig_landing_certnewbusiness | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  | RIG_View_CertNewBusiness | PolicyCode | tx_rig_landing_certnewbusiness | plicy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. |  | RIG_View_CertNewBusiness | PolicyNo | tx_rig_landing_certnewbusiness | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ |  | RIG_View_CertNewBusiness | PolicyYear | tx_rig_landing_certnewbusiness | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. |  | RIG_View_CertNewBusiness | ClassNo | tx_rig_landing_certnewbusiness | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ |  | RIG_View_CertNewBusiness | EffectDate | tx_rig_landing_certnewbusiness | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร |  | RIG_View_CertNewBusiness | TransDate | tx_rig_landing_certnewbusiness | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง |  | RIG_View_CertNewBusiness | ChangeDate | tx_rig_landing_certnewbusiness | change_date |
| 13 |  | life_extra_rate | numeric | 7 10,4 | N | อัตราเบี้ยเพิ่มพิเศษ ชีวิต |  | RIG_View_CertNewBusiness | LifeExtraRate | tx_rig_landing_certnewbusiness | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต |  | RIG_View_CertNewBusiness | LifeInsur | tx_rig_landing_certnewbusiness | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน อบ. |  | RIG_View_CertNewBusiness | AccInsur | tx_rig_landing_certnewbusiness | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedInsur | tx_rig_landing_certnewbusiness | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุนชีวิตทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDInsur | tx_rig_landing_certnewbusiness | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ - ชีวิต |  | RIG_View_CertNewBusiness | LifeE1Prem | tx_rig_landing_certnewbusiness | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต |  | RIG_View_CertNewBusiness | LifePrem | tx_rig_landing_certnewbusiness | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. |  | RIG_View_CertNewBusiness | AccPrem | tx_rig_landing_certnewbusiness | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedPrem | tx_rig_landing_certnewbusiness | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertNewBusiness | Age | tx_rig_landing_certnewbusiness | age |
| 23 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน |  | RIG_View_CertNewBusiness | Status | tx_rig_landing_certnewbusiness | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDPrem | tx_rig_landing_certnewbusiness | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยใน |  | RIG_View_CertNewBusiness | MedPlanRateIPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยนอก |  | RIG_View_CertNewBusiness | MedPlanRateOPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม |  | RIG_View_CertNewBusiness | Dental | tx_rig_landing_certnewbusiness | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ยส่วนที่นายจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployer | tx_rig_landing_certnewbusiness | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ยส่วนที่ลูกจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployee | tx_rig_landing_certnewbusiness | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด |  | RIG_View_CertNewBusiness | CompCode | tx_rig_landing_certnewbusiness | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ |  | RIG_View_CertNewBusiness | Sex | tx_rig_landing_certnewbusiness | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด |  | RIG_View_CertNewBusiness | Birthday | tx_rig_landing_certnewbusiness | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedDate | tx_rig_landing_certnewbusiness | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedBy | tx_rig_landing_certnewbusiness | created_by |


===== PAGE 1305412804 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_certnewbusiness > LD8 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | TB mapping snapshot |
| 1 | PK | rig_v_cer_id | int(8) |  | Y | เลขที่ Running |  | RIG_View_CertNewBusiness | RigVCerId | tx_rig_landing_certnewbusiness | rig_v_cer_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certnewbusiness | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_certnewbusiness | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน |  | RIG_View_CertNewBusiness | CertificCustNo | tx_rig_landing_certnewbusiness | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า |  | RIG_View_CertNewBusiness | CustCode | tx_rig_landing_certnewbusiness | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  | RIG_View_CertNewBusiness | PolicyCode | tx_rig_landing_certnewbusiness | plicy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. |  | RIG_View_CertNewBusiness | PolicyNo | tx_rig_landing_certnewbusiness | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ |  | RIG_View_CertNewBusiness | PolicyYear | tx_rig_landing_certnewbusiness | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. |  | RIG_View_CertNewBusiness | ClassNo | tx_rig_landing_certnewbusiness | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ |  | RIG_View_CertNewBusiness | EffectDate | tx_rig_landing_certnewbusiness | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร |  | RIG_View_CertNewBusiness | TransDate | tx_rig_landing_certnewbusiness | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง |  | RIG_View_CertNewBusiness | ChangeDate | tx_rig_landing_certnewbusiness | change_date |
| 13 |  | life_extra_rate | numeric | 7 10,4 | N | อัตราเบี้ยเพิ่มพิเศษ ชีวิต |  | RIG_View_CertNewBusiness | LifeExtraRate | tx_rig_landing_certnewbusiness | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต |  | RIG_View_CertNewBusiness | LifeInsur | tx_rig_landing_certnewbusiness | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน อบ. |  | RIG_View_CertNewBusiness | AccInsur | tx_rig_landing_certnewbusiness | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedInsur | tx_rig_landing_certnewbusiness | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุนชีวิตทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDInsur | tx_rig_landing_certnewbusiness | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ - ชีวิต |  | RIG_View_CertNewBusiness | LifeE1Prem | tx_rig_landing_certnewbusiness | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต |  | RIG_View_CertNewBusiness | LifePrem | tx_rig_landing_certnewbusiness | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. |  | RIG_View_CertNewBusiness | AccPrem | tx_rig_landing_certnewbusiness | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedPrem | tx_rig_landing_certnewbusiness | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertNewBusiness | Age | tx_rig_landing_certnewbusiness | age |
| 23 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน |  | RIG_View_CertNewBusiness | Status | tx_rig_landing_certnewbusiness | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDPrem | tx_rig_landing_certnewbusiness | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยใน |  | RIG_View_CertNewBusiness | MedPlanRateIPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยนอก |  | RIG_View_CertNewBusiness | MedPlanRateOPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม |  | RIG_View_CertNewBusiness | Dental | tx_rig_landing_certnewbusiness | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ยส่วนที่นายจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployer | tx_rig_landing_certnewbusiness | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ยส่วนที่ลูกจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployee | tx_rig_landing_certnewbusiness | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด |  | RIG_View_CertNewBusiness | CompCode | tx_rig_landing_certnewbusiness | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ |  | RIG_View_CertNewBusiness | Sex | tx_rig_landing_certnewbusiness | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด |  | RIG_View_CertNewBusiness | Birthday | tx_rig_landing_certnewbusiness | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedDate | tx_rig_landing_certnewbusiness | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedBy | tx_rig_landing_certnewbusiness | created_by |


===== PAGE 1300726363 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimdeath =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_claimdeath | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_death_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimDeath | RigVClmDeathId | tx_rig_landing_claimdeath | rig_v_clm_death_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimdeath | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimdeath | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่ใบรับแจ้ง | RIG_View_ClaimDeath | InformNo | tx_rig_landing_claimdeath | inform_no |
| 5 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_ClaimDeath | PolicyCode | tx_rig_landing_claimdeath | policy_code |
| 6 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimDeath | PolicyNo | tx_rig_landing_claimdeath | policy_no |
| 7 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ClaimDeath | PolicyYear | tx_rig_landing_claimdeath | policy_year |
| 8 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimDeath | CertificCustNo | tx_rig_landing_claimdeath | certific_cust_no |
| 9 |  | inform_date | Timestamp |  | N | วันที่รับแจ้ง | RIG_View_ClaimDeath | InformDate | tx_rig_landing_claimdeath | inform_date |
| 10 |  | consider_date | Timestamp |  | N | วันที่รับเอกสารใบพิจารณา | RIG_View_ClaimDeath | ConsiderDate | tx_rig_landing_claimdeath | consider_date |
| 11 |  | death_date | Timestamp |  | N | วันที่เสียชีวิต | RIG_View_ClaimDeath | DeathDate | tx_rig_landing_claimdeath | death_date |
| 12 |  | death_cause_inform | varchar | 3 | N | สาเหตุ-ที่แจ้ง | RIG_View_ClaimDeath | DeathCauseInform | tx_rig_landing_claimdeath | death_cause_inform |
| 13 |  | death_cause_real | varchar | 3 | N | สาเหตุ-ที่ตรวจสอบแล้ว | RIG_View_ClaimDeath | DeathCauseReal | tx_rig_landing_claimdeath | death_cause_real |
| 14 |  | death_cause_remark | varchar | 50 | N | หมายเหตุ | RIG_View_ClaimDeath | DeathCauseRemark | tx_rig_landing_claimdeath | death_cause_remark |
| 15 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์นับจากวันเข้าร่วม | RIG_View_ClaimDeath | PolicyAge | tx_rig_landing_claimdeath | policy_age |
| 16 |  | attn_age | numeric | 10 | N | อายุผู้เอาประกัน | RIG_View_ClaimDeath | AttnAge | tx_rig_landing_claimdeath | attn_age |
| 17 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต | RIG_View_ClaimDeath | EffectDate | tx_rig_landing_claimdeath | effect_date |
| 18 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimDeath | LossRatio | tx_rig_landing_claimdeath | loss_ratio |
| 19 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา | RIG_View_ClaimDeath | ApproveClaim | tx_rig_landing_claimdeath | approve_claim |
| 20 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | LifeInsur | tx_rig_landing_claimdeath | life_insur |
| 21 |  | acc_insur | numeric | 19,4 | N | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | AccInsur | tx_rig_landing_claimdeath | acc_insur |
| 22 |  | life_insur_request | numeric | 19,4 | Y | ทุนชีวิตตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | LifeInsurRequest | tx_rig_landing_claimdeath | life_insur_request |
| 23 |  | acc_insur_request | numeric | 19,4 | Y | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | AccInsurRequest | tx_rig_landing_claimdeath | acc_insur_request |
| 24 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimDeath | ApproveDate | tx_rig_landing_claimdeath | approve_date |
| 25 |  | pay_choice | numeric | 5 | N | การจ่ายสินไหม | RIG_View_ClaimDeath | PayChoice | tx_rig_landing_claimdeath | pay_choice |
| 26 |  | result_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_ClaimDeath | ResultDate | tx_rig_landing_claimdeath | result_date |
| 27 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimDeath | ReceiveNo | tx_rig_landing_claimdeath | receive_no |
| 28 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimDeath | ReceiveDate | tx_rig_landing_claimdeath | receive_date |
| 29 |  | pay_date | Timestamp | 8 | N | วันที่จ่ายเงิน | RIG_View_ClaimDeath | PayDate | tx_rig_landing_claimdeath | pay_date |
| 30 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_ClaimDeath | ConsiderSeq | tx_rig_landing_claimdeath | consider_seq |
| 31 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_ClaimDeath | CreatedDate | tx_rig_landing_claimdeath | created_date |
| 32 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_ClaimDeath | CreatedBy | tx_rig_landing_claimdeath | created_by |


===== PAGE 1305412777 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimdeath > LD4 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_death_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimDeath | RigVClmDeathId | tx_rig_landing_claimdeath | rig_v_clm_death_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimdeath | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimdeath | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่ใบรับแจ้ง | RIG_View_ClaimDeath | InformNo | tx_rig_landing_claimdeath | inform_no |
| 5 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_ClaimDeath | PolicyCode | tx_rig_landing_claimdeath | policy_code |
| 6 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimDeath | PolicyNo | tx_rig_landing_claimdeath | policy_no |
| 7 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ClaimDeath | PolicyYear | tx_rig_landing_claimdeath | policy_year |
| 8 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimDeath | CertificCustNo | tx_rig_landing_claimdeath | certific_cust_no |
| 9 |  | inform_date | Timestamp |  | N | วันที่รับแจ้ง | RIG_View_ClaimDeath | InformDate | tx_rig_landing_claimdeath | inform_date |
| 10 |  | consider_date | Timestamp |  | N | วันที่รับเอกสารใบพิจารณา | RIG_View_ClaimDeath | ConsiderDate | tx_rig_landing_claimdeath | consider_date |
| 11 |  | death_date | Timestamp |  | N | วันที่เสียชีวิต | RIG_View_ClaimDeath | DeathDate | tx_rig_landing_claimdeath | death_date |
| 12 |  | death_cause_inform | varchar | 3 | N | สาเหตุ-ที่แจ้ง | RIG_View_ClaimDeath | DeathCauseInform | tx_rig_landing_claimdeath | death_cause_inform |
| 13 |  | death_cause_real | varchar | 3 | N | สาเหตุ-ที่ตรวจสอบแล้ว | RIG_View_ClaimDeath | DeathCauseReal | tx_rig_landing_claimdeath | death_cause_real |
| 14 |  | death_cause_remark | varchar | 50 | N | หมายเหตุ | RIG_View_ClaimDeath | DeathCauseRemark | tx_rig_landing_claimdeath | death_cause_remark |
| 15 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์นับจากวันเข้าร่วม | RIG_View_ClaimDeath | PolicyAge | tx_rig_landing_claimdeath | policy_age |
| 16 |  | attn_age | numeric | 10 | N | อายุผู้เอาประกัน | RIG_View_ClaimDeath | AttnAge | tx_rig_landing_claimdeath | attn_age |
| 17 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต | RIG_View_ClaimDeath | EffectDate | tx_rig_landing_claimdeath | effect_date |
| 18 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimDeath | LossRatio | tx_rig_landing_claimdeath | loss_ratio |
| 19 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา | RIG_View_ClaimDeath | ApproveClaim | tx_rig_landing_claimdeath | approve_claim |
| 20 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | LifeInsur | tx_rig_landing_claimdeath | life_insur |
| 21 |  | acc_insur | numeric | 19,4 | N | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | AccInsur | tx_rig_landing_claimdeath | acc_insur |
| 22 |  | life_insur_request | numeric | 19,4 | Y | ทุนชีวิตตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | LifeInsurRequest | tx_rig_landing_claimdeath | life_insur_request |
| 23 |  | acc_insur_request | numeric | 19,4 | Y | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | AccInsurRequest | tx_rig_landing_claimdeath | acc_insur_request |
| 24 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimDeath | ApproveDate | tx_rig_landing_claimdeath | approve_date |
| 25 |  | pay_choice | numeric | 5 | N | การจ่ายสินไหม | RIG_View_ClaimDeath | PayChoice | tx_rig_landing_claimdeath | pay_choice |
| 26 |  | result_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_ClaimDeath | ResultDate | tx_rig_landing_claimdeath | result_date |
| 27 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimDeath | ReceiveNo | tx_rig_landing_claimdeath | receive_no |
| 28 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimDeath | ReceiveDate | tx_rig_landing_claimdeath | receive_date |
| 29 |  | pay_date | Timestamp | 8 | N | วันที่จ่ายเงิน | RIG_View_ClaimDeath | PayDate | tx_rig_landing_claimdeath | pay_date |
| 30 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_ClaimDeath | ConsiderSeq | tx_rig_landing_claimdeath | consider_seq |
| 31 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_ClaimDeath | CreatedDate | tx_rig_landing_claimdeath | created_date |
| 32 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_ClaimDeath | CreatedBy | tx_rig_landing_claimdeath | created_by |


===== PAGE 1300726425 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimhealth =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_claimhealth | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_health_id | int(8) |  | Y | เลขที่ Running RIG_View_ClaimHealth | RIG_View_ClaimHealth | RigVClmHealthId | tx_rig_landing_claimhealth | rig_v_clm_health_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimhealth | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimhealth | period |
| 4 |  | notify_no | varchar | 12 | N | เลขที่รับแจ้ง YYYY/MM/999999 | RIG_View_ClaimHealth | NotifyNo | tx_rig_landing_claimhealth | notify_no |
| 5 |  | notify_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสาร | RIG_View_ClaimHealth | NotifyDate | tx_rig_landing_claimhealth | notify_date |
| 6 |  | follow_up | varchar | 12 | N | Notify เดิม | RIG_View_ClaimHealth | FollowUp | tx_rig_landing_claimhealth | follow_up |
| 7 |  | policy_type | numeric | 10 | N | ประเภทกรมธรรม์ | RIG_View_ClaimHealth | PolicyType | tx_rig_landing_claimhealth | policy_type |
| 8 |  | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ | RIG_View_ClaimHealth | PolicyNo | tx_rig_landing_claimhealth | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_ClaimHealth | PolicyYear | tx_rig_landing_claimhealth | policy_year |
| 10 |  | cerno | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimHealth | Cerno | tx_rig_landing_claimhealth | cerno |
| 11 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimHealth | CustCode | tx_rig_landing_claimhealth | cust_code |
| 12 |  | curr_age | numeric | 10 | N | อายุผู้เอาประกัน (วันเกิด-วันที่บันทึก Notify_No.) | RIG_View_ClaimHealth | CurrAge | tx_rig_landing_claimhealth | curr_age |
| 13 |  | type_claim | numeric | 10 | N | ประเภทการเคลม 0 : เจ็บป่วย 1 : อุบัติเหตุ | RIG_View_ClaimHealth | TypeClaim | tx_rig_landing_claimhealth | type_claim |
| 14 |  | cause_of_claim | varchar | 6 | N | 0 : Motorcycle; 1 : Car; 2 : General; 3 : Murder | RIG_View_ClaimHealth | CauseOfClaim | tx_rig_landing_claimhealth | cause_of_claim |
| 15 |  | cause_detail | varchar | 255 | N | สาเหตุการเกิดอุบัติเหตุ | RIG_View_ClaimHealth | CauseDetail | tx_rig_landing_claimhealth | cause_detail |
| 16 |  | claim_type | varchar | 10 | N | ประเภทเคลม | RIG_View_ClaimHealth | ClaimType | tx_rig_landing_claimhealth | claim_type |
| 17 |  | consider_date | Timestamp |  | N | วันที่พิจารณา | RIG_View_ClaimHealth | ConsiderDate | tx_rig_landing_claimhealth | consider_date |
| 18 |  | rd_no | varchar | 2 | N | รหัสความคุ้มครอง | RIG_View_ClaimHealth | RDNo | tx_rig_landing_claimhealth | rd_no |
| 19 |  | ref_claim_no | varchar | 20 | N | อ้างเลขที่เคลมเดิม | RIG_View_ClaimHealth | RefClaimNo | tx_rig_landing_claimhealth | ref_claim_no |
| 20 |  | attn_age | numeric | 3 | N | อายุผู้เอาประกัน | RIG_View_ClaimHealth | AttnAge | tx_rig_landing_claimhealth | attn_age |
| 21 |  | cer_status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimHealth | CerStatus | tx_rig_landing_claimhealth | cer_status |
| 22 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ClaimHealth | EffectDate | tx_rig_landing_claimhealth | effect_date |
| 23 |  | exp_date | Timestamp |  | N |  | RIG_View_ClaimHealth | ExpDate | tx_rig_landing_claimhealth | exp_date |
| 24 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimHealth | PolicyAge | tx_rig_landing_claimhealth | policy_age |
| 25 |  | accident_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | AccidentDate | tx_rig_landing_claimhealth | accident_date |
| 26 |  | admit_date | Timestamp |  | N | วันที่เข้ารับการรักษา | RIG_View_ClaimHealth | AdmitDate | tx_rig_landing_claimhealth | admit_date |
| 27 |  | discharge_date | Timestamp |  | N | วันที่ออกจากโรงพยาบาล | RIG_View_ClaimHealth | DischargeDate | tx_rig_landing_claimhealth | discharge_date |
| 28 |  | claim_status | numeric | 10 | N | 0:รักษาฯ,1:ผ่าตัด;2:อุบัติเหตุฯ;3:คลอดบุตร | RIG_View_ClaimHealth | ClaimStatus | tx_rig_landing_claimhealth | claim_status |
| 29 |  | claim_by | numeric | 10 | N | 0:โรงพยาบาล (Fax);1:โรงพยาบาล (Credit);2:ใบเสร็จ/ใบแจ้งหนี้ | RIG_View_ClaimHealth | ClaimBy | tx_rig_landing_claimhealth | claim_by |
| 30 |  | claim_request | numeric | 19,4 | N | ค่ารักษาฯ (เรียกร้อง) | RIG_View_ClaimHealth | ClaimRequest | tx_rig_landing_claimhealth | claim_request |
| 31 |  | claim_discount | numeric | 19,4 | N | ส่วนลดค่ารักษาฯ | RIG_View_ClaimHealth | ClaimDiscount | tx_rig_landing_claimhealth | claim_discount |
| 32 |  | claim_no_paid | numeric | 19,4 | N | ส่วนค่ารักษาฯที่ไม่จ่าย | RIG_View_ClaimHealth | ClaimNoPaid | tx_rig_landing_claimhealth | claim_no_paid |
| 33 |  | claim_ex_gratia | numeric | 19,4 | N | ส่วนค่ารักษาฯที่อนุโลมจ่าย | RIG_View_ClaimHealth | ClaimExGratia | tx_rig_landing_claimhealth | claim_ex_gratia |
| 34 |  | claim_right | numeric | 19,4 | N | ค่ารักษาฯ (จ่าย) | RIG_View_ClaimHealth | ClaimRight | tx_rig_landing_claimhealth | claim_right |
| 35 |  | claim_diff_right | numeric | 19,4 | N | ส่วนเกินจากการเคลม | RIG_View_ClaimHealth | ClaimDiffRight | tx_rig_landing_claimhealth | claim_diff_right |
| 36 |  | claim_client_piad | numeric | 19,4 | N | จำนวนเงิน (ผู้เอาประกันต้องจ่าย) | RIG_View_ClaimHealth | ClaimClientPiad | tx_rig_landing_claimhealth | claim_client_piad |
| 37 |  | other_request | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (เรียกร้อง) | RIG_View_ClaimHealth | OtherRequest | tx_rig_landing_claimhealth | other_request |
| 38 |  | other_right | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (จ่าย) | RIG_View_ClaimHealth | OtherRight | tx_rig_landing_claimhealth | other_right |
| 39 |  | other_remark | varchar | 50 | N | หมายเหตุ (ค่าใช้จ่ายเบ็ตเตล็ด) | RIG_View_ClaimHealth | OtherRemark | tx_rig_landing_claimhealth | other_remark |
| 40 |  | approve_claim | varchar | 3 | N | สถานะการเคลม | RIG_View_ClaimHealth | ApproveClaim | tx_rig_landing_claimhealth | approve_claim |
| 41 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimHealth | ApproveDate | tx_rig_landing_claimhealth | approve_date |
| 42 |  | occur_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | OccurDate | tx_rig_landing_claimhealth | occur_date |
| 43 |  | pay_date | Timestamp |  | N | วันที่จ่าย | RIG_View_ClaimHealth | PayDate | tx_rig_landing_claimhealth | pay_date |
| 44 |  | pay_amount | numeric | 19,4 | N | ยอดเงินจ่าย | RIG_View_ClaimHealth | PayAmount | tx_rig_landing_claimhealth | pay_amount |
| 45 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimHealth | CreatedBy | tx_rig_landing_claimhealth | created_date |
| 46 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimHealth | UpdatedDate | tx_rig_landing_claimhealth | created_by |
| 47 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาพยาบาล | RIG_View_ClaimHealth | MedInsur | tx_rig_landing_claimhealth | med_insur |


===== PAGE 1305412792 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimhealth > LD6 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_health_id | int(8) |  | Y | เลขที่ Running RIG_View_ClaimHealth | RIG_View_ClaimHealth | RigVClmHealthId | tx_rig_landing_claimhealth | rig_v_clm_health_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimhealth | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimhealth | period |
| 4 |  | notify_no | varchar | 12 | N | เลขที่รับแจ้ง YYYY/MM/999999 | RIG_View_ClaimHealth | NotifyNo | tx_rig_landing_claimhealth | notify_no |
| 5 |  | notify_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสาร | RIG_View_ClaimHealth | NotifyDate | tx_rig_landing_claimhealth | notify_date |
| 6 |  | follow_up | varchar | 12 | N | Notify เดิม | RIG_View_ClaimHealth | FollowUp | tx_rig_landing_claimhealth | follow_up |
| 7 |  | policy_type | numeric | 10 | N | ประเภทกรมธรรม์ | RIG_View_ClaimHealth | PolicyType | tx_rig_landing_claimhealth | policy_type |
| 8 |  | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ | RIG_View_ClaimHealth | PolicyNo | tx_rig_landing_claimhealth | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_ClaimHealth | PolicyYear | tx_rig_landing_claimhealth | policy_year |
| 10 |  | cerno | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimHealth | Cerno | tx_rig_landing_claimhealth | cerno |
| 11 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimHealth | CustCode | tx_rig_landing_claimhealth | cust_code |
| 12 |  | curr_age | numeric | 10 | N | อายุผู้เอาประกัน (วันเกิด-วันที่บันทึก Notify_No.) | RIG_View_ClaimHealth | CurrAge | tx_rig_landing_claimhealth | curr_age |
| 13 |  | type_claim | numeric | 10 | N | ประเภทการเคลม 0 : เจ็บป่วย 1 : อุบัติเหตุ | RIG_View_ClaimHealth | TypeClaim | tx_rig_landing_claimhealth | type_claim |
| 14 |  | cause_of_claim | varchar | 6 | N | 0 : Motorcycle; 1 : Car; 2 : General; 3 : Murder | RIG_View_ClaimHealth | CauseOfClaim | tx_rig_landing_claimhealth | cause_of_claim |
| 15 |  | cause_detail | varchar | 255 | N | สาเหตุการเกิดอุบัติเหตุ | RIG_View_ClaimHealth | CauseDetail | tx_rig_landing_claimhealth | cause_detail |
| 16 |  | claim_type | varchar | 10 | N | ประเภทเคลม | RIG_View_ClaimHealth | ClaimType | tx_rig_landing_claimhealth | claim_type |
| 17 |  | consider_date | Timestamp |  | N | วันที่พิจารณา | RIG_View_ClaimHealth | ConsiderDate | tx_rig_landing_claimhealth | consider_date |
| 18 |  | rd_no | varchar | 2 | N | รหัสความคุ้มครอง | RIG_View_ClaimHealth | RDNo | tx_rig_landing_claimhealth | rd_no |
| 19 |  | ref_claim_no | varchar | 20 | N | อ้างเลขที่เคลมเดิม | RIG_View_ClaimHealth | RefClaimNo | tx_rig_landing_claimhealth | ref_claim_no |
| 20 |  | attn_age | numeric | 3 | N | อายุผู้เอาประกัน | RIG_View_ClaimHealth | AttnAge | tx_rig_landing_claimhealth | attn_age |
| 21 |  | cer_status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimHealth | CerStatus | tx_rig_landing_claimhealth | cer_status |
| 22 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ClaimHealth | EffectDate | tx_rig_landing_claimhealth | effect_date |
| 23 |  | exp_date | Timestamp |  | N |  | RIG_View_ClaimHealth | ExpDate | tx_rig_landing_claimhealth | exp_date |
| 24 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimHealth | PolicyAge | tx_rig_landing_claimhealth | policy_age |
| 25 |  | accident_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | AccidentDate | tx_rig_landing_claimhealth | accident_date |
| 26 |  | admit_date | Timestamp |  | N | วันที่เข้ารับการรักษา | RIG_View_ClaimHealth | AdmitDate | tx_rig_landing_claimhealth | admit_date |
| 27 |  | discharge_date | Timestamp |  | N | วันที่ออกจากโรงพยาบาล | RIG_View_ClaimHealth | DischargeDate | tx_rig_landing_claimhealth | discharge_date |
| 28 |  | claim_status | numeric | 10 | N | 0:รักษาฯ,1:ผ่าตัด;2:อุบัติเหตุฯ;3:คลอดบุตร | RIG_View_ClaimHealth | ClaimStatus | tx_rig_landing_claimhealth | claim_status |
| 29 |  | claim_by | numeric | 10 | N | 0:โรงพยาบาล (Fax);1:โรงพยาบาล (Credit);2:ใบเสร็จ/ใบแจ้งหนี้ | RIG_View_ClaimHealth | ClaimBy | tx_rig_landing_claimhealth | claim_by |
| 30 |  | claim_request | numeric | 19,4 | N | ค่ารักษาฯ (เรียกร้อง) | RIG_View_ClaimHealth | ClaimRequest | tx_rig_landing_claimhealth | claim_request |
| 31 |  | claim_discount | numeric | 19,4 | N | ส่วนลดค่ารักษาฯ | RIG_View_ClaimHealth | ClaimDiscount | tx_rig_landing_claimhealth | claim_discount |
| 32 |  | claim_no_paid | numeric | 19,4 | N | ส่วนค่ารักษาฯที่ไม่จ่าย | RIG_View_ClaimHealth | ClaimNoPaid | tx_rig_landing_claimhealth | claim_no_paid |
| 33 |  | claim_ex_gratia | numeric | 19,4 | N | ส่วนค่ารักษาฯที่อนุโลมจ่าย | RIG_View_ClaimHealth | ClaimExGratia | tx_rig_landing_claimhealth | claim_ex_gratia |
| 34 |  | claim_right | numeric | 19,4 | N | ค่ารักษาฯ (จ่าย) | RIG_View_ClaimHealth | ClaimRight | tx_rig_landing_claimhealth | claim_right |
| 35 |  | claim_diff_right | numeric | 19,4 | N | ส่วนเกินจากการเคลม | RIG_View_ClaimHealth | ClaimDiffRight | tx_rig_landing_claimhealth | claim_diff_right |
| 36 |  | claim_client_piad | numeric | 19,4 | N | จำนวนเงิน (ผู้เอาประกันต้องจ่าย) | RIG_View_ClaimHealth | ClaimClientPiad | tx_rig_landing_claimhealth | claim_client_piad |
| 37 |  | other_request | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (เรียกร้อง) | RIG_View_ClaimHealth | OtherRequest | tx_rig_landing_claimhealth | other_request |
| 38 |  | other_right | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (จ่าย) | RIG_View_ClaimHealth | OtherRight | tx_rig_landing_claimhealth | other_right |
| 39 |  | other_remark | varchar | 50 | N | หมายเหตุ (ค่าใช้จ่ายเบ็ตเตล็ด) | RIG_View_ClaimHealth | OtherRemark | tx_rig_landing_claimhealth | other_remark |
| 40 |  | approve_claim | varchar | 3 | N | สถานะการเคลม | RIG_View_ClaimHealth | ApproveClaim | tx_rig_landing_claimhealth | approve_claim |
| 41 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimHealth | ApproveDate | tx_rig_landing_claimhealth | approve_date |
| 42 |  | occur_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | OccurDate | tx_rig_landing_claimhealth | occur_date |
| 43 |  | pay_date | Timestamp |  | N | วันที่จ่าย | RIG_View_ClaimHealth | PayDate | tx_rig_landing_claimhealth | pay_date |
| 44 |  | pay_amount | numeric | 19,4 | N | ยอดเงินจ่าย | RIG_View_ClaimHealth | PayAmount | tx_rig_landing_claimhealth | pay_amount |
| 45 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimHealth | CreatedBy | tx_rig_landing_claimhealth | created_date |
| 46 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimHealth | UpdatedDate | tx_rig_landing_claimhealth | created_by |
| 47 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาพยาบาล | RIG_View_ClaimHealth | MedInsur | tx_rig_landing_claimhealth | med_insur |


===== PAGE 1300726409 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimtpd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_claimtpd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_tpd_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimTPD | RigVClmTpdId | tx_rig_landing_claimtpd | rig_v_clm_tpd_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimtpd | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimtpd | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่รับแจ้ง | RIG_View_ClaimTPD | InformNo | tx_rig_landing_claimtpd | inform_no |
| 5 |  | consider_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสารใบพิจารณา | RIG_View_ClaimTPD | ConsiderDate | tx_rig_landing_claimtpd | consider_date |
| 6 |  | policy_code | numeric | 1 | N | ประเภทกธ. (0 : GH 1 : GL 2 : GU 3 : GA 4 : GS) | RIG_View_ClaimTPD | PolicyCode | tx_rig_landing_claimtpd | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimTPD | PolicyNo | tx_rig_landing_claimtpd | policy_no |
| 8 |  | policy_year | numeric | 4 | N | กรมธรรม์ปีที่ | RIG_View_ClaimTPD | PolicyYear | tx_rig_landing_claimtpd | policy_year |
| 9 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimTPD | CertificCustNo | tx_rig_landing_claimtpd | certific_cust_no |
| 10 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimTPD | CustCode | tx_rig_landing_claimtpd | cust_code |
| 11 |  | attn_age | numeric | 4 | N | อายุผู้เอาประกัน | RIG_View_ClaimTPD | AttnAge | tx_rig_landing_claimtpd | attn_age |
| 12 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimTPD | Status | tx_rig_landing_claimtpd | status |
| 13 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ | RIG_View_ClaimTPD | EffectDate | tx_rig_landing_claimtpd | effect_date |
| 14 |  | accident_date | Timestamp |  | N | วันที่ประสบอุบัติเหตุ | RIG_View_ClaimTPD | AccidentDate | tx_rig_landing_claimtpd | accident_date |
| 15 |  | accident_cause | varchar | 50 | N | สาเหตุฯ | RIG_View_ClaimTPD | AccidentCause | tx_rig_landing_claimtpd | accident_cause |
| 16 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimTPD | PolicyAge | tx_rig_landing_claimtpd | policy_age |
| 17 |  | acc_insur | numeric | 19,4 | N | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) | RIG_View_ClaimTPD | ACCInsur | tx_rig_landing_claimtpd | acc_insur |
| 18 |  | tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) | RIG_View_ClaimTPD | TPDInsur | tx_rig_landing_claimtpd | tpd_insur |
| 19 |  | claim_status | numeric | 3 | N | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ | RIG_View_ClaimTPD | ClaimStatus | tx_rig_landing_claimtpd | claim_status |
| 20 |  | prod_claim_code | varchar | 6 | N | รหัสเคลม (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | ProdClaimCode | tx_rig_landing_claimtpd | prod_claim_code |
| 21 |  | indemnity_rate | numeric | 19,4 | N | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur | RIG_View_ClaimTPD | Indemnity_Rate | tx_rig_landing_claimtpd | indemnity_rate |
| 22 |  | indemnity_amt | numeric | 19,4 | N | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | Indemnity_Amt | tx_rig_landing_claimtpd | indemnity_amt |
| 23 |  | tpd_prod_code | varchar | 8 | N | รหัสความคุ้มครองทุพพลภาพ (TPD) | RIG_View_ClaimTPD | TPDProdCode | tx_rig_landing_claimtpd | tpd_prod_code |
| 24 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimTPD | LossRatio | tx_rig_landing_claimtpd | loss_ratio |
| 25 |  | approve_acc_insur | numeric | 19,4 | N | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveACCInsur | tx_rig_landing_claimtpd | approve_acc_insur |
| 26 |  | approve_tpd_insur | numeric | 19,4 | N | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveTPDInsur | tx_rig_landing_claimtpd | approve_tpd_insur |
| 27 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา 0:อนุมัติ; 1:มีเหตุขัดข้อง; 2: ปฎิเสธ; 3:บอกล้าง | RIG_View_ClaimTPD | ApproveClaim | tx_rig_landing_claimtpd | approve_claim |
| 28 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ | RIG_View_ClaimTPD | ApproveDate | tx_rig_landing_claimtpd | approve_date |
| 29 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimTPD | ReceiveNo | tx_rig_landing_claimtpd | receive_no |
| 30 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimTPD | ReceiveDate | tx_rig_landing_claimtpd | receive_date |
| 31 |  | amount | numeric | 19,4 | N | ยอดเงินที่ต้องจ่าย | RIG_View_ClaimTPD | Amount | tx_rig_landing_claimtpd | amount |
| 32 |  | pay_date | Timestamp |  | N | วันที่จ่ายเงิน | RIG_View_ClaimTPD | PayDate | tx_rig_landing_claimtpd | pay_date |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimTPD | CreatedDate | tx_rig_landing_claimtpd | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimTPD | CreatedBy | tx_rig_landing_claimtpd | created_by |


===== PAGE 1305412784 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_claimtpd > LD5 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_tpd_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimTPD | RigVClmTpdId | tx_rig_landing_claimtpd | rig_v_clm_tpd_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimtpd | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimtpd | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่รับแจ้ง | RIG_View_ClaimTPD | InformNo | tx_rig_landing_claimtpd | inform_no |
| 5 |  | consider_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสารใบพิจารณา | RIG_View_ClaimTPD | ConsiderDate | tx_rig_landing_claimtpd | consider_date |
| 6 |  | policy_code | numeric | 1 | N | ประเภทกธ. (0 : GH 1 : GL 2 : GU 3 : GA 4 : GS) | RIG_View_ClaimTPD | PolicyCode | tx_rig_landing_claimtpd | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimTPD | PolicyNo | tx_rig_landing_claimtpd | policy_no |
| 8 |  | policy_year | numeric | 4 | N | กรมธรรม์ปีที่ | RIG_View_ClaimTPD | PolicyYear | tx_rig_landing_claimtpd | policy_year |
| 9 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimTPD | CertificCustNo | tx_rig_landing_claimtpd | certific_cust_no |
| 10 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimTPD | CustCode | tx_rig_landing_claimtpd | cust_code |
| 11 |  | attn_age | numeric | 4 | N | อายุผู้เอาประกัน | RIG_View_ClaimTPD | AttnAge | tx_rig_landing_claimtpd | attn_age |
| 12 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimTPD | Status | tx_rig_landing_claimtpd | status |
| 13 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ | RIG_View_ClaimTPD | EffectDate | tx_rig_landing_claimtpd | effect_date |
| 14 |  | accident_date | Timestamp |  | N | วันที่ประสบอุบัติเหตุ | RIG_View_ClaimTPD | AccidentDate | tx_rig_landing_claimtpd | accident_date |
| 15 |  | accident_cause | varchar | 50 | N | สาเหตุฯ | RIG_View_ClaimTPD | AccidentCause | tx_rig_landing_claimtpd | accident_cause |
| 16 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimTPD | PolicyAge | tx_rig_landing_claimtpd | policy_age |
| 17 |  | acc_insur | numeric | 19,4 | N | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) | RIG_View_ClaimTPD | ACCInsur | tx_rig_landing_claimtpd | acc_insur |
| 18 |  | tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) | RIG_View_ClaimTPD | TPDInsur | tx_rig_landing_claimtpd | tpd_insur |
| 19 |  | claim_status | numeric | 3 | N | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ | RIG_View_ClaimTPD | ClaimStatus | tx_rig_landing_claimtpd | claim_status |
| 20 |  | prod_claim_code | varchar | 6 | N | รหัสเคลม (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | ProdClaimCode | tx_rig_landing_claimtpd | prod_claim_code |
| 21 |  | indemnity_rate | numeric | 19,4 | N | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur | RIG_View_ClaimTPD | Indemnity_Rate | tx_rig_landing_claimtpd | indemnity_rate |
| 22 |  | indemnity_amt | numeric | 19,4 | N | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | Indemnity_Amt | tx_rig_landing_claimtpd | indemnity_amt |
| 23 |  | tpd_prod_code | varchar | 8 | N | รหัสความคุ้มครองทุพพลภาพ (TPD) | RIG_View_ClaimTPD | TPDProdCode | tx_rig_landing_claimtpd | tpd_prod_code |
| 24 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimTPD | LossRatio | tx_rig_landing_claimtpd | loss_ratio |
| 25 |  | approve_acc_insur | numeric | 19,4 | N | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveACCInsur | tx_rig_landing_claimtpd | approve_acc_insur |
| 26 |  | approve_tpd_insur | numeric | 19,4 | N | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveTPDInsur | tx_rig_landing_claimtpd | approve_tpd_insur |
| 27 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา 0:อนุมัติ; 1:มีเหตุขัดข้อง; 2: ปฎิเสธ; 3:บอกล้าง | RIG_View_ClaimTPD | ApproveClaim | tx_rig_landing_claimtpd | approve_claim |
| 28 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ | RIG_View_ClaimTPD | ApproveDate | tx_rig_landing_claimtpd | approve_date |
| 29 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimTPD | ReceiveNo | tx_rig_landing_claimtpd | receive_no |
| 30 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimTPD | ReceiveDate | tx_rig_landing_claimtpd | receive_date |
| 31 |  | amount | numeric | 19,4 | N | ยอดเงินที่ต้องจ่าย | RIG_View_ClaimTPD | Amount | tx_rig_landing_claimtpd | amount |
| 32 |  | pay_date | Timestamp |  | N | วันที่จ่ายเงิน | RIG_View_ClaimTPD | PayDate | tx_rig_landing_claimtpd | pay_date |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimTPD | CreatedDate | tx_rig_landing_claimtpd | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimTPD | CreatedBy | tx_rig_landing_claimtpd | created_by |


===== PAGE 1300726336 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_company =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_company | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล บริษัทคู่สัญญา/ลูกค้ากลุ่ม กับข้อมูล เลขจดทะเบียนนิติบุคคล (DBD Code) และ ประเภทธุรกิจ (Type of Business) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_comp_id | int(8) |  | Y | เลขที่ Running | RIG_View_Company | RigVCompid | tx_rig_landing_company | rig_v_comp_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_company | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_company | period |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | RIG_View_Company | PolicyNo | tx_rig_landing_company | policy_no |
| 5 |  | policy_year | numeric | 10 | Y | ปีกรมธรรม์ | RIG_View_Company | PolicYear | tx_rig_landing_company | policy_year |
| 6 |  | company_code | varchar | 10 | Y | รหัสบริษัท | RIG_View_Company | CompanyCode | tx_rig_landing_company | company_code |
| 7 |  | dbdcode | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_Company | DBDCODE | tx_rig_landing_company | dbdcode |
| 8 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_Company | TypeBusiness | tx_rig_landing_company | type_business |
| 9 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_Company | CreatedDate | tx_rig_landing_company | created_date |
| 10 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_Company | CreatedBy | tx_rig_landing_company | created_by |


===== PAGE 1305412768 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_company > LD3 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_comp_id | int(8) |  | Y | เลขที่ Running | RIG_View_Company | RigVCompid | tx_rig_landing_company | rig_v_comp_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_company | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_company | period |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | RIG_View_Company | PolicyNo | tx_rig_landing_company | policy_no |
| 5 |  | policy_year | numeric | 10 | Y | ปีกรมธรรม์ | RIG_View_Company | PolicYear | tx_rig_landing_company | policy_year |
| 6 |  | company_code | varchar | 10 | Y | รหัสบริษัท | RIG_View_Company | CompanyCode | tx_rig_landing_company | company_code |
| 7 |  | dbdcode | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_Company | DBDCODE | tx_rig_landing_company | dbdcode |
| 8 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_Company | TypeBusiness | tx_rig_landing_company | type_business |
| 9 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_Company | CreatedDate | tx_rig_landing_company | created_date |
| 10 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_Company | CreatedBy | tx_rig_landing_company | created_by |


===== PAGE 1300987987 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_exprefund =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_exprefund | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 10/06/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |  |
| 1 | PK | rig_v_exp_id | int(8) |  | Y | เลขที่ Running RIG_View_ExpRefund | RIG_View_ExpRefund | RigVExpId | tx_rig_landing_exprefund | rig_v_exp_id |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_exprefund | rig_process_hd_id |  |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_exprefund | period |  |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_ExpRefund | DocNo | tx_rig_landing_exprefund | doc_no |  |
| 5 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | DocDate | tx_rig_landing_exprefund | doc_date |  |
| 6 |  | at_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | AtDate | tx_rig_landing_exprefund | at_date |  |
| 7 |  | mode_of_payment | numeric | 10 | N | ประเภทการจ่าย | RIG_View_ExpRefund | ModeOfPayment | tx_rig_landing_exprefund | mode_of_payment |  |
| 8 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_ExpRefund | PolicyNo | tx_rig_landing_exprefund | policy_no |  |
| 9 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ExpRefund | PolicyYear | tx_rig_landing_exprefund | policy_year |  |
| 10 |  | period_begin_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ExpRefund | PeriodBeginDate | tx_rig_landing_exprefund | period_begin_date |  |
| 11 |  | period_end_date | Timestamp |  | N | วันที่สิ้นสุด | RIG_View_ExpRefund | PeriodEndDate | tx_rig_landing_exprefund | period_end_date |  |
| 12 |  | cal_date | Timestamp |  | N | วันที่คำนวณ | RIG_View_ExpRefund | CalDate | tx_rig_landing_exprefund | cal_date |  |
| 13 |  | company_code_head | varchar | 20 | N | รหัสผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyCodeHead | tx_rig_landing_exprefund | company_code_head |  |
| 14 |  | company_name_head | varchar | 150 | N | ชื่อผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyNameHead | tx_rig_landing_exprefund | company_name_head |  |
| 15 |  | company_code | varchar | 20 | N | รหัสบริษัท | RIG_View_ExpRefund | CompanyCode | tx_rig_landing_exprefund | company_code |  |
| 16 |  | company_name | varchar | 150 | N | ชื่อบริษัท | RIG_View_ExpRefund | CompanyName | tx_rig_landing_exprefund | company_name |  |
| 17 |  | lot_no | numeric | 4 | N |  | RIG_View_ExpRefund | LotNo | tx_rig_landing_exprefund | lot_no |  |
| 18 |  | lot_no_all | numeric | 4 | N |  | RIG_View_ExpRefund | LotNoAll | tx_rig_landing_exprefund | lot_no_all |  |
| 19 |  | premium_all | numeric | 19,4 | N | เบี้ยประกันของบริษัท | RIG_View_ExpRefund | PremiumAll | tx_rig_landing_exprefund | premium_all |  |
| 20 |  | premium_all_g | numeric | 19,4 | N | เบี้ยประกันทั้งกลุ่ม | RIG_View_ExpRefund | PremiumAllG | tx_rig_landing_exprefund | premium_all_g |  |
| 21 |  | claim_all | numeric | 19,4 | N | สินไหมจ่าย | RIG_View_ExpRefund | ClaimAll | tx_rig_landing_exprefund | claim_all |  |
| 22 |  | claim_reserve | numeric | 19,4 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReserve | tx_rig_landing_exprefund | claim_reserve |  |
| 23 |  | claim_reserve_percent | numeric | 10 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReservePercent | tx_rig_landing_exprefund | claim_reserve_percent |  |
| 24 |  | last_year_claim_reserve | numeric | 19,4 | N | เงินสำรองสำหรับสินไหมที่ตั้งไว้ ณ สิ้นปีกรมธรรม์ที่ผ่านมา | RIG_View_ExpRefund | LastYearClaimReserve | tx_rig_landing_exprefund | last_year_claim_reserve |  |
| 25 |  | total_claim | numeric | 19,4 | N | รวมสินไหมทั้งหมด | RIG_View_ExpRefund | TotalClaim | tx_rig_landing_exprefund | total_claim |  |
| 26 |  | total_amt | numeric | 19,4 | N | เบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmt | tx_rig_landing_exprefund | total_amt |  |
| 27 |  | total_amt_percent | numeric | 10 | N | ร้อยละของเบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmtPercent | tx_rig_landing_exprefund | total_amt_percent |  |
| 28 |  | adj_claim | numeric | 19,4 | N | สินไหมติดลบ ยกยอดมาจากปีก่อน | RIG_View_ExpRefund | ADJClaim | tx_rig_landing_exprefund | adj_claim |  |
| 29 |  | net_amt | numeric | 19,4 | N | ยอดรวมสุทธิ | RIG_View_ExpRefund | NetAmt | tx_rig_landing_exprefund | net_amt |  |
| 30 |  | exp_refund_g_percent | numeric | 10 | N | คืนยอดกี่%ของเงินรวมสุทธิ | RIG_View_ExpRefund | ExpRefundGPercent | tx_rig_landing_exprefund | exp_refund_g_percent |  |
| 31 |  | exp_refund_g | numeric | 19,4 | N | ยอดของทั้งกรรม์ | RIG_View_ExpRefund | ExpRefundG | tx_rig_landing_exprefund | exp_refund_g |  |
| 32 |  | exp_refund | numeric | 19,4 | N | ยอดส่วนของบริษัท | RIG_View_ExpRefund | ExpRefund | tx_rig_landing_exprefund | exp_refund |  |
| 33 |  | invoice_no | varchar | 20 | N | อ้างอิงเลข InvoiceNo ที่นำไปใช้ | RIG_View_ExpRefund | InvoiceNo | tx_rig_landing_exprefund | invoice_no |  |
| 34 |  | beneficiary_companycode | varchar | 20 | N | รหัสบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanycode | tx_rig_landing_exprefund | beneficiary_companycode |  |
| 35 |  | beneficiary_companyname | varchar | 150 | N | ชื่อบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanyname | tx_rig_landing_exprefund | beneficiary_companyname |  |
| 36 |  | type | varchar | 10 | N | ประเภทการคำนวณ | RIG_View_ExpRefund | Type | tx_rig_landing_exprefund | type |  |
| 37 |  | premium_statement | numeric | 19,4 | N | เบี้ยประกันจากStatement(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumStatement | tx_rig_landing_exprefund | premium_statement |  |
| 38 |  | premium_adj | numeric | 19,4 | N | เบี้ยประกันจากAdjust(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumAdj | tx_rig_landing_exprefund | premium_adj |  |
| 39 |  | premium_inv | numeric | 19,4 | N | เบี้ยประกันจากInvoice (กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumInv | tx_rig_landing_exprefund | premium_inv |  |
| 40 |  | exp_refund_g_sum | numeric | 19,4 | N | ยอดเงินคืนรวมที่ผ่านการปัดเศษแล้ว | RIG_View_ExpRefund | ExpRefundGSum | tx_rig_landing_exprefund | exp_refund_g_sum |  |
| 41 |  | rd_type | varchar | 20 | N | รหัสความคุ้มครอง | RIG_View_ExpRefund | RDType | tx_rig_landing_exprefund | rd_type |  |
| 42 |  | rd_name | varchar | 50 | N | รายละเอียดความคุ้มครอง | RIG_View_ExpRefund | RDNAME | tx_rig_landing_exprefund | rd_name |  |
| 43 |  | premium | numeric | 19,4 | N | ยอดเบี้ย | RIG_View_ExpRefund | Premium | tx_rig_landing_exprefund | premium |  |
| 44 |  | exp_refund_dt | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ | RIG_View_ExpRefund | ExpRefundDT | tx_rig_landing_exprefund | exp_refund_dt |  |
| 45 |  | premium_e1 | numeric | 19,4 | N | ยอดเบี้ย E1 | RIG_View_ExpRefund | PremiumE1 | tx_rig_landing_exprefund | premium_e1 |  |
| 46 |  | exp_refund_e1 | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ E1 | RIG_View_ExpRefund | ExpRefundE1 | tx_rig_landing_exprefund | exp_refund_e1 |  |
| 47 |  | flg_cal | boolean | 1 | N | ใช้คำนวณเงินคืนไหม | RIG_View_ExpRefund | FlgCal | tx_rig_landing_exprefund | flg_cal |  |
| 48 |  | exp_refund_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์รายเดือน | RIG_View_ExpRefund | ExpRefundPerM | tx_rig_landing_exprefund | exp_refund_per_m |  |
| 49 |  | exp_refund_e1_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์E1รายเดือน | RIG_View_ExpRefund | ExpRefundE1PerM | tx_rig_landing_exprefund | exp_refund_e1_per_m |  |
| 50 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ExpRefund | CreatedDate | tx_rig_landing_exprefund | created_date |  |
| 51 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ExpRefund | CreatedBy | tx_rig_landing_exprefund | created_by |  |
| 52 |  | claim_life | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Life | RIG_View_ExpRefund | ClaimLife | tx_rig_landing_exprefund | claim_life | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 53 |  | claim_add | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง ADD | RIG_View_ExpRefund | ClaimADD | tx_rig_landing_exprefund | claim_add | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 54 |  | claim_dismem | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Dismemberment | RIG_View_ExpRefund | ClaimDismem | tx_rig_landing_exprefund | claim_dismem | (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 10/06/2026) |
| 55 |  | pending_life | numeric | 19,4 | N | ยอดรอดำเนินการเคลมความคุ้มครอง Life | RIG_View_ExpRefund | PendingLife | tx_rig_landing_exprefund | pending_life | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 56 |  | pending_add | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง ADD | RIG_View_ExpRefund | PendingADD | tx_rig_landing_exprefund | pending_add | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 57 |  | pending_dismem | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง Dismemberment | RIG_View_ExpRefund | PendingDismem | tx_rig_landing_exprefund | pending_dismem | (#CR_EXREFUND suthanee.sa 08/06/2026) (suthanee.sa 10/06/2026) |


===== PAGE 1305412813 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_exprefund > LD10 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |  |
| 1 | PK | rig_v_exp_id | int(8) |  | Y | เลขที่ Running RIG_View_ExpRefund | RIG_View_ExpRefund | RigVExpId | tx_rig_landing_exprefund | rig_v_exp_id |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_exprefund | rig_process_hd_id |  |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_exprefund | period |  |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_ExpRefund | DocNo | tx_rig_landing_exprefund | doc_no |  |
| 5 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | DocDate | tx_rig_landing_exprefund | doc_date |  |
| 6 |  | at_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | AtDate | tx_rig_landing_exprefund | at_date |  |
| 7 |  | mode_of_payment | numeric | 10 | N | ประเภทการจ่าย | RIG_View_ExpRefund | ModeOfPayment | tx_rig_landing_exprefund | mode_of_payment |  |
| 8 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_ExpRefund | PolicyNo | tx_rig_landing_exprefund | policy_no |  |
| 9 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ExpRefund | PolicyYear | tx_rig_landing_exprefund | policy_year |  |
| 10 |  | period_begin_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ExpRefund | PeriodBeginDate | tx_rig_landing_exprefund | period_begin_date |  |
| 11 |  | period_end_date | Timestamp |  | N | วันที่สิ้นสุด | RIG_View_ExpRefund | PeriodEndDate | tx_rig_landing_exprefund | period_end_date |  |
| 12 |  | cal_date | Timestamp |  | N | วันที่คำนวณ | RIG_View_ExpRefund | CalDate | tx_rig_landing_exprefund | cal_date |  |
| 13 |  | company_code_head | varchar | 20 | N | รหัสผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyCodeHead | tx_rig_landing_exprefund | company_code_head |  |
| 14 |  | company_name_head | varchar | 150 | N | ชื่อผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyNameHead | tx_rig_landing_exprefund | company_name_head |  |
| 15 |  | company_code | varchar | 20 | N | รหัสบริษัท | RIG_View_ExpRefund | CompanyCode | tx_rig_landing_exprefund | company_code |  |
| 16 |  | company_name | varchar | 150 | N | ชื่อบริษัท | RIG_View_ExpRefund | CompanyName | tx_rig_landing_exprefund | company_name |  |
| 17 |  | lot_no | numeric | 4 | N |  | RIG_View_ExpRefund | LotNo | tx_rig_landing_exprefund | lot_no |  |
| 18 |  | lot_no_all | numeric | 4 | N |  | RIG_View_ExpRefund | LotNoAll | tx_rig_landing_exprefund | lot_no_all |  |
| 19 |  | premium_all | numeric | 19,4 | N | เบี้ยประกันของบริษัท | RIG_View_ExpRefund | PremiumAll | tx_rig_landing_exprefund | premium_all |  |
| 20 |  | premium_all_g | numeric | 19,4 | N | เบี้ยประกันทั้งกลุ่ม | RIG_View_ExpRefund | PremiumAllG | tx_rig_landing_exprefund | premium_all_g |  |
| 21 |  | claim_all | numeric | 19,4 | N | สินไหมจ่าย | RIG_View_ExpRefund | ClaimAll | tx_rig_landing_exprefund | claim_all |  |
| 22 |  | claim_reserve | numeric | 19,4 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReserve | tx_rig_landing_exprefund | claim_reserve |  |
| 23 |  | claim_reserve_percent | numeric | 10 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReservePercent | tx_rig_landing_exprefund | claim_reserve_percent |  |
| 24 |  | last_year_claim_reserve | numeric | 19,4 | N | เงินสำรองสำหรับสินไหมที่ตั้งไว้ ณ สิ้นปีกรมธรรม์ที่ผ่านมา | RIG_View_ExpRefund | LastYearClaimReserve | tx_rig_landing_exprefund | last_year_claim_reserve |  |
| 25 |  | total_claim | numeric | 19,4 | N | รวมสินไหมทั้งหมด | RIG_View_ExpRefund | TotalClaim | tx_rig_landing_exprefund | total_claim |  |
| 26 |  | total_amt | numeric | 19,4 | N | เบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmt | tx_rig_landing_exprefund | total_amt |  |
| 27 |  | total_amt_percent | numeric | 10 | N | ร้อยละของเบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmtPercent | tx_rig_landing_exprefund | total_amt_percent |  |
| 28 |  | adj_claim | numeric | 19,4 | N | สินไหมติดลบ ยกยอดมาจากปีก่อน | RIG_View_ExpRefund | ADJClaim | tx_rig_landing_exprefund | adj_claim |  |
| 29 |  | net_amt | numeric | 19,4 | N | ยอดรวมสุทธิ | RIG_View_ExpRefund | NetAmt | tx_rig_landing_exprefund | net_amt |  |
| 30 |  | exp_refund_g_percent | numeric | 10 | N | คืนยอดกี่%ของเงินรวมสุทธิ | RIG_View_ExpRefund | ExpRefundGPercent | tx_rig_landing_exprefund | exp_refund_g_percent |  |
| 31 |  | exp_refund_g | numeric | 19,4 | N | ยอดของทั้งกรรม์ | RIG_View_ExpRefund | ExpRefundG | tx_rig_landing_exprefund | exp_refund_g |  |
| 32 |  | exp_refund | numeric | 19,4 | N | ยอดส่วนของบริษัท | RIG_View_ExpRefund | ExpRefund | tx_rig_landing_exprefund | exp_refund |  |
| 33 |  | invoice_no | varchar | 20 | N | อ้างอิงเลข InvoiceNo ที่นำไปใช้ | RIG_View_ExpRefund | InvoiceNo | tx_rig_landing_exprefund | invoice_no |  |
| 34 |  | beneficiary_companycode | varchar | 20 | N | รหัสบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanycode | tx_rig_landing_exprefund | beneficiary_companycode |  |
| 35 |  | beneficiary_companyname | varchar | 150 | N | ชื่อบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanyname | tx_rig_landing_exprefund | beneficiary_companyname |  |
| 36 |  | type | varchar | 10 | N | ประเภทการคำนวณ | RIG_View_ExpRefund | Type | tx_rig_landing_exprefund | type |  |
| 37 |  | premium_statement | numeric | 19,4 | N | เบี้ยประกันจากStatement(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumStatement | tx_rig_landing_exprefund | premium_statement |  |
| 38 |  | premium_adj | numeric | 19,4 | N | เบี้ยประกันจากAdjust(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumAdj | tx_rig_landing_exprefund | premium_adj |  |
| 39 |  | premium_inv | numeric | 19,4 | N | เบี้ยประกันจากInvoice (กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumInv | tx_rig_landing_exprefund | premium_inv |  |
| 40 |  | exp_refund_g_sum | numeric | 19,4 | N | ยอดเงินคืนรวมที่ผ่านการปัดเศษแล้ว | RIG_View_ExpRefund | ExpRefundGSum | tx_rig_landing_exprefund | exp_refund_g_sum |  |
| 41 |  | rd_type | varchar | 20 | N | รหัสความคุ้มครอง | RIG_View_ExpRefund | RDType | tx_rig_landing_exprefund | rd_type |  |
| 42 |  | rd_name | varchar | 50 | N | รายละเอียดความคุ้มครอง | RIG_View_ExpRefund | RDNAME | tx_rig_landing_exprefund | rd_name |  |
| 43 |  | premium | numeric | 19,4 | N | ยอดเบี้ย | RIG_View_ExpRefund | Premium | tx_rig_landing_exprefund | premium |  |
| 44 |  | exp_refund_dt | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ | RIG_View_ExpRefund | ExpRefundDT | tx_rig_landing_exprefund | exp_refund_dt |  |
| 45 |  | premium_e1 | numeric | 19,4 | N | ยอดเบี้ย E1 | RIG_View_ExpRefund | PremiumE1 | tx_rig_landing_exprefund | premium_e1 |  |
| 46 |  | exp_refund_e1 | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ E1 | RIG_View_ExpRefund | ExpRefundE1 | tx_rig_landing_exprefund | exp_refund_e1 |  |
| 47 |  | flg_cal | boolean | 1 | N | ใช้คำนวณเงินคืนไหม | RIG_View_ExpRefund | FlgCal | tx_rig_landing_exprefund | flg_cal |  |
| 48 |  | exp_refund_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์รายเดือน | RIG_View_ExpRefund | ExpRefundPerM | tx_rig_landing_exprefund | exp_refund_per_m |  |
| 49 |  | exp_refund_e1_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์E1รายเดือน | RIG_View_ExpRefund | ExpRefundE1PerM | tx_rig_landing_exprefund | exp_refund_e1_per_m |  |
| 50 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ExpRefund | CreatedDate | tx_rig_landing_exprefund | created_date |  |
| 51 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ExpRefund | CreatedBy | tx_rig_landing_exprefund | created_by |  |
| 52 |  | claim_life | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Life | RIG_View_ExpRefund | ClaimLife | tx_rig_landing_exprefund | claim_life | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 53 |  | claim_add | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง ADD | RIG_View_ExpRefund | ClaimADD | tx_rig_landing_exprefund | claim_add | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 54 |  | claim_dismem | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Dismemberment | RIG_View_ExpRefund | ClaimDismem | tx_rig_landing_exprefund | claim_dismem | (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 10/06/2026) |
| 55 |  | pending_life | numeric | 19,4 | N | ยอดรอดำเนินการเคลมความคุ้มครอง Life | RIG_View_ExpRefund | PendingLife | tx_rig_landing_exprefund | pending_life | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 56 |  | pending_add | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง ADD | RIG_View_ExpRefund | PendingADD | tx_rig_landing_exprefund | pending_add | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 57 |  | pending_dismem | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง Dismemberment | RIG_View_ExpRefund | PendingDismem | tx_rig_landing_exprefund | pending_dismem | (#CR_EXREFUND suthanee.sa 08/06/2026) (suthanee.sa 10/06/2026) |


===== PAGE 1329922133 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_gl_sophead =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_gl_sophead | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-03-26 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_sop_id | int8 |  | Y | เลขที่ Running | RIG_View_GLSOPHead | RigVSOPID | tx_rig_landing_gl_sophead | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int8 |  | Y | rig_process_hd_id | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_gl_sophead | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | period tx_rig_process_hd | tx_rig_process_hd | period | tx_rig_landing_gl_sophead | period |
| 4 |  | doc_no | varchar | 20 | N | document no | RIG_View_GLSOPHead | DocNo | tx_rig_landing_gl_sophead | doc_no |
| 5 |  | trans_date | datetime | 8 | N | วันที่บันทึกรายการ | RIG_View_GLSOPHead | TransDate | tx_rig_landing_gl_sophead | trans_date |
| 6 |  | period_date | datetime | 8 | N | วันที่บันทึกตามรอบ | RIG_View_GLSOPHead | Period | tx_rig_landing_gl_sophead | period |
| 7 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_GLSOPHead | PolicyNo | tx_rig_landing_gl_sophead | policy_no |
| 8 |  | mth_status | int | 4 | N | สถานะงวด | RIG_View_GLSOPHead | MthStatus | tx_rig_landing_gl_sophead | mth_status |
| 9 |  | pay_type | int | 4 | N | ประเภทการจ่าย | RIG_View_GLSOPHead | Paytype | tx_rig_landing_gl_sophead | pay_type |
| 10 |  | policy_year | int | 4 | N | ปีกรมธรรม์ | RIG_View_GLSOPHead | PolicyYear | tx_rig_landing_gl_sophead | policy_year |
| 11 |  | comp_code | varchar | 10 | N | รหัสบริษัท | RIG_View_GLSOPHead | CompCode | tx_rig_landing_gl_sophead | comp_code |
| 12 |  | prem_life | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_GLSOPHead | PremLife | tx_rig_landing_gl_sophead | prem_life |
| 13 |  | prem_acc | numeric | 19,4 | N | เบี้ย acc | RIG_View_GLSOPHead | PremAcc | tx_rig_landing_gl_sophead | prem_acc |
| 14 |  | prem_med | numeric | 19,4 | N | เบี้ย med | RIG_View_GLSOPHead | PremMed | tx_rig_landing_gl_sophead | prem_med |
| 15 |  | prem_tpd | numeric | 19,4 | N | เบี้ย tpd | RIG_View_GLSOPHead | PremTPD | tx_rig_landing_gl_sophead | prem_tpd |
| 16 |  | prem_e1 | numeric | 19,4 | N | เบี้ยชีวิต extra | RIG_View_GLSOPHead | PremE1 | tx_rig_landing_gl_sophead | prem_e1 |
| 17 |  | total_prem | numeric | 19,4 | N | ผลรวมเบี้ย | RIG_View_GLSOPHead | TotalPrem | tx_rig_landing_gl_sophead | total_prem |
| 18 |  | prem_ip | numeric | 19,4 | N | เบี้ย ipd | RIG_View_GLSOPHead | PremIP | tx_rig_landing_gl_sophead | prem_ip |
| 19 |  | prem_op | numeric | 19,4 | N | เบี้ย opd | RIG_View_GLSOPHead | PremOP | tx_rig_landing_gl_sophead | prem_op |
| 20 |  | prem_dental | numeric | 19,4 | N | เบี้ย dental | RIG_View_GLSOPHead | PremDental | tx_rig_landing_gl_sophead | prem_dental |
| 21 |  | life_insur | numeric | 19,4 | N | ทุน ชีวิต | RIG_View_GLSOPHead | LifeInsur | tx_rig_landing_gl_sophead | life_insur |
| 22 |  | acc_insur | numeric | 19,4 | N | ทุน acc | RIG_View_GLSOPHead | AccInsur | tx_rig_landing_gl_sophead | acc_insur |
| 23 |  | med_insur | numeric | 19,4 | N | ทุน med | RIG_View_GLSOPHead | MedInsur | tx_rig_landing_gl_sophead | med_insur |
| 24 |  | tpd_insur | numeric | 19,4 | N | ทุน tpd | RIG_View_GLSOPHead | TPDInsur | tx_rig_landing_gl_sophead | tpd_insur |
| 25 |  | life_amt | int | 8 | N | จำนวนสมาชิก ชีวิต | RIG_View_GLSOPHead | LifeAmt | tx_rig_landing_gl_sophead | life_amt |
| 26 |  | acc_amt | int | 8 | N | จำนวนสมาชิก acc | RIG_View_GLSOPHead | AccAmt | tx_rig_landing_gl_sophead | acc_amt |
| 27 |  | med_amt | int | 8 | N | จำนวนสมาชิก med | RIG_View_GLSOPHead | MedAmt | tx_rig_landing_gl_sophead | med_amt |
| 28 |  | tpd_amt | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | TPDAmt | tx_rig_landing_gl_sophead | tpd_amt |
| 29 |  | amt_e1 | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | AmtE1 | tx_rig_landing_gl_sophead | amt_e1 |
| 30 |  | amt_life_e2 | numeric | 8 | N | จำนวนสมาชิก ชีวิต e2 | RIG_View_GLSOPHead | AmtLifeE2 | tx_rig_landing_gl_sophead | amt_life_e2 |
| 31 |  | amt_acc_e2 | numeric | 8 | N | จำนวนสมาชิก acc e2 | RIG_View_GLSOPHead | AmtAccE2 | tx_rig_landing_gl_sophead | amt_acc_e2 |
| 32 |  | amt_med_e2 | numeric | 8 | N | จำนวนสมาชิก med e2 | RIG_View_GLSOPHead | AmtMedE2 | tx_rig_landing_gl_sophead | amt_med_e2 |
| 33 |  | amt_tpd_e2 | numeric | 8 | N | จำนวนสมาชิก tpd e2 | RIG_View_GLSOPHead | AmtTPDE2 | tx_rig_landing_gl_sophead | amt_tpd_e2 |
| 34 |  | remark | varchar | 255 | N | หมายเหตุ | RIG_View_GLSOPHead | Remark | tx_rig_landing_gl_sophead | remark |
| 35 |  | doc_status | int | 2 | N | สถานะเอกสาร | RIG_View_GLSOPHead | DocStatus | tx_rig_landing_gl_sophead | doc_status |
| 36 |  | edit_date_time | datetime | 8 | N | วันที่แก้ไข | RIG_View_GLSOPHead | EditDateTime | tx_rig_landing_gl_sophead | edit_date_time |
| 37 |  | doc_no_inv | varchar | 20 | N | doc_no_inv | RIG_View_GLSOPHead | DOCNO_INV | tx_rig_landing_gl_sophead | doc_no_inv |
| 38 |  | alter_prem_diff | numeric | 19,4 | N | ผลต่างเบี้ย | RIG_View_GLSOPHead | AlterPremDiff | tx_rig_landing_gl_sophead | alter_prem_diff |
| 39 |  | created_date | datetime |  | N | วันที่สร้างรายการ | RIG_View_GLSOPHead | created_date | tx_rig_landing_gl_sophead | created_date |
| 40 |  | created_by | varchar | 50 | N | ผู้สร้างรายการ | RIG_View_GLSOPHead | created_by | tx_rig_landing_gl_sophead | created_by |
| 41 |  | updated_date | datetime |  | N | วันที่อัพเดทรายการ | RIG_View_GLSOPHead | updated_date | tx_rig_landing_gl_sophead | updated_date |
| 42 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการ | RIG_View_GLSOPHead | updated_by | tx_rig_landing_gl_sophead | updated_by |


===== PAGE 1329922135 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_gl_sophead > LD14 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_sop_id | int8 |  | Y | เลขที่ Running | RIG_View_GLSOPHead | RigVSOPID | tx_rig_landing_gl_sophead | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int8 |  | Y | rig_process_hd_id | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_gl_sophead | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | period tx_rig_process_hd | tx_rig_process_hd | period | tx_rig_landing_gl_sophead | period |
| 4 |  | doc_no | varchar | 20 | N | document no | RIG_View_GLSOPHead | DocNo | tx_rig_landing_gl_sophead | doc_no |
| 5 |  | trans_date | datetime | 8 | N | วันที่บันทึกรายการ | RIG_View_GLSOPHead | TransDate | tx_rig_landing_gl_sophead | trans_date |
| 6 |  | period_date | datetime | 8 | N | วันที่บันทึกตามรอบ | RIG_View_GLSOPHead | Period | tx_rig_landing_gl_sophead | period |
| 7 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_GLSOPHead | PolicyNo | tx_rig_landing_gl_sophead | policy_no |
| 8 |  | mth_status | int | 4 | N | สถานะงวด | RIG_View_GLSOPHead | MthStatus | tx_rig_landing_gl_sophead | mth_status |
| 9 |  | pay_type | int | 4 | N | ประเภทการจ่าย | RIG_View_GLSOPHead | Paytype | tx_rig_landing_gl_sophead | pay_type |
| 10 |  | policy_year | int | 4 | N | ปีกรมธรรม์ | RIG_View_GLSOPHead | PolicyYear | tx_rig_landing_gl_sophead | policy_year |
| 11 |  | comp_code | varchar | 10 | N | รหัสบริษัท | RIG_View_GLSOPHead | CompCode | tx_rig_landing_gl_sophead | comp_code |
| 12 |  | prem_life | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_GLSOPHead | PremLife | tx_rig_landing_gl_sophead | prem_life |
| 13 |  | prem_acc | numeric | 19,4 | N | เบี้ย acc | RIG_View_GLSOPHead | PremAcc | tx_rig_landing_gl_sophead | prem_acc |
| 14 |  | prem_med | numeric | 19,4 | N | เบี้ย med | RIG_View_GLSOPHead | PremMed | tx_rig_landing_gl_sophead | prem_med |
| 15 |  | prem_tpd | numeric | 19,4 | N | เบี้ย tpd | RIG_View_GLSOPHead | PremTPD | tx_rig_landing_gl_sophead | prem_tpd |
| 16 |  | prem_e1 | numeric | 19,4 | N | เบี้ยชีวิต extra | RIG_View_GLSOPHead | PremE1 | tx_rig_landing_gl_sophead | prem_e1 |
| 17 |  | total_prem | numeric | 19,4 | N | ผลรวมเบี้ย | RIG_View_GLSOPHead | TotalPrem | tx_rig_landing_gl_sophead | total_prem |
| 18 |  | prem_ip | numeric | 19,4 | N | เบี้ย ipd | RIG_View_GLSOPHead | PremIP | tx_rig_landing_gl_sophead | prem_ip |
| 19 |  | prem_op | numeric | 19,4 | N | เบี้ย opd | RIG_View_GLSOPHead | PremOP | tx_rig_landing_gl_sophead | prem_op |
| 20 |  | prem_dental | numeric | 19,4 | N | เบี้ย dental | RIG_View_GLSOPHead | PremDental | tx_rig_landing_gl_sophead | prem_dental |
| 21 |  | life_insur | numeric | 19,4 | N | ทุน ชีวิต | RIG_View_GLSOPHead | LifeInsur | tx_rig_landing_gl_sophead | life_insur |
| 22 |  | acc_insur | numeric | 19,4 | N | ทุน acc | RIG_View_GLSOPHead | AccInsur | tx_rig_landing_gl_sophead | acc_insur |
| 23 |  | med_insur | numeric | 19,4 | N | ทุน med | RIG_View_GLSOPHead | MedInsur | tx_rig_landing_gl_sophead | med_insur |
| 24 |  | tpd_insur | numeric | 19,4 | N | ทุน tpd | RIG_View_GLSOPHead | TPDInsur | tx_rig_landing_gl_sophead | tpd_insur |
| 25 |  | life_amt | int | 8 | N | จำนวนสมาชิก ชีวิต | RIG_View_GLSOPHead | LifeAmt | tx_rig_landing_gl_sophead | life_amt |
| 26 |  | acc_amt | int | 8 | N | จำนวนสมาชิก acc | RIG_View_GLSOPHead | AccAmt | tx_rig_landing_gl_sophead | acc_amt |
| 27 |  | med_amt | int | 8 | N | จำนวนสมาชิก med | RIG_View_GLSOPHead | MedAmt | tx_rig_landing_gl_sophead | med_amt |
| 28 |  | tpd_amt | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | TPDAmt | tx_rig_landing_gl_sophead | tpd_amt |
| 29 |  | amt_e1 | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | AmtE1 | tx_rig_landing_gl_sophead | amt_e1 |
| 30 |  | amt_life_e2 | numeric | 8 | N | จำนวนสมาชิก ชีวิต e2 | RIG_View_GLSOPHead | AmtLifeE2 | tx_rig_landing_gl_sophead | amt_life_e2 |
| 31 |  | amt_acc_e2 | numeric | 8 | N | จำนวนสมาชิก acc e2 | RIG_View_GLSOPHead | AmtAccE2 | tx_rig_landing_gl_sophead | amt_acc_e2 |
| 32 |  | amt_med_e2 | numeric | 8 | N | จำนวนสมาชิก med e2 | RIG_View_GLSOPHead | AmtMedE2 | tx_rig_landing_gl_sophead | amt_med_e2 |
| 33 |  | amt_tpd_e2 | numeric | 8 | N | จำนวนสมาชิก tpd e2 | RIG_View_GLSOPHead | AmtTPDE2 | tx_rig_landing_gl_sophead | amt_tpd_e2 |
| 34 |  | remark | varchar | 255 | N | หมายเหตุ | RIG_View_GLSOPHead | Remark | tx_rig_landing_gl_sophead | remark |
| 35 |  | doc_status | int | 2 | N | สถานะเอกสาร | RIG_View_GLSOPHead | DocStatus | tx_rig_landing_gl_sophead | doc_status |
| 36 |  | edit_date_time | datetime | 8 | N | วันที่แก้ไข | RIG_View_GLSOPHead | EditDateTime | tx_rig_landing_gl_sophead | edit_date_time |
| 37 |  | doc_no_inv | varchar | 20 | N | doc_no_inv | RIG_View_GLSOPHead | DOCNO_INV | tx_rig_landing_gl_sophead | doc_no_inv |
| 38 |  | alter_prem_diff | numeric | 19,4 | N | ผลต่างเบี้ย | RIG_View_GLSOPHead | AlterPremDiff | tx_rig_landing_gl_sophead | alter_prem_diff |
| 39 |  | created_date | datetime |  | N | วันที่สร้างรายการ | RIG_View_GLSOPHead | created_date | tx_rig_landing_gl_sophead | created_date |
| 40 |  | created_by | varchar | 50 | N | ผู้สร้างรายการ | RIG_View_GLSOPHead | created_by | tx_rig_landing_gl_sophead | created_by |
| 41 |  | updated_date | datetime |  | N | วันที่อัพเดทรายการ | RIG_View_GLSOPHead | updated_date | tx_rig_landing_gl_sophead | updated_date |
| 42 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการ | RIG_View_GLSOPHead | updated_by | tx_rig_landing_gl_sophead | updated_by |


===== PAGE 1312718886 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_investigation_expense =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_investigation_expense | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_investigation_exp_id | numeric | 8 | Y | เลขที่ Running | RIG_View_InvestigationExpense | RigVUnnameID | tx_rig_landing_investigation_expense | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_investigation_expense | rig_process_hd_id |
| 3 | Index | doc_no | varchar | 20 | Y | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocNo | tx_rig_landing_investigation_expense | doc_no |
| 4 |  | policy_code | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_InvestigationExpense | PolicyCode | tx_rig_landing_investigation_expense | policy_code |
| 5 | Index | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | RIG_View_InvestigationExpense | PolicyNo | tx_rig_landing_investigation_expense | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_InvestigationExpense | PolicyYear | tx_rig_landing_investigation_expense | policy_year |
| 7 |  | effective_date | datetime |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_InvestigationExpense | EffectiveDate | tx_rig_landing_investigation_expense | effective_date |
| 8 |  | cer_no | varchar | 8 | N | เลขที่สมาชิก | RIG_View_InvestigationExpense | CerNo | tx_rig_landing_investigation_expense | cer_no |
| 9 |  | claim_no | varchar | 20 | N | เลขที่สินไหมรับเรื่อง | RIG_View_InvestigationExpense | ClaimNo | tx_rig_landing_investigation_expense | claim_no |
| 10 |  | approved_date | datetime |  | N | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | RIG_View_InvestigationExpense | ApprovedDate | tx_rig_landing_investigation_expense | approved_date |
| 11 |  | event_date | datetime |  | N | วันที่เกิดเหตุ | RIG_View_InvestigationExpense | EventDate | tx_rig_landing_investigation_expense | event_date |
| 12 |  | expense_amount | money |  | N | ค่าใช้จ่ายรวม | RIG_View_InvestigationExpense | ExpenseAmount | tx_rig_landing_investigation_expense | expense_amount |
| 13 |  | doc_date | datetime |  | N | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocDate | tx_rig_landing_investigation_expense | doc_date |
| 14 |  | claim_type | varchar | 10 | N | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง | RIG_View_InvestigationExpense | ClaimType | tx_rig_landing_investigation_expense | claim_type |
| 15 |  | inform_date | datetime |  | N | วันที่รับเรื่อง | RIG_View_InvestigationExpense | InformDate | tx_rig_landing_investigation_expense | inform_date |
| 16 |  | invest_seq | int |  | N | ส่งสอบครั้งที่ | RIG_View_InvestigationExpense | InvestSeq | tx_rig_landing_investigation_expense | invest_seq |
| 17 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_InvestigationExpense | ConsiderSeq | tx_rig_landing_investigation_expense | consider_seq |
| 18 |  | reinsur_no | varchar | 20 | N | เลขที่ประกันต่อ ( Ref.Reinsurance ) | RIG_View_InvestigationExpense | ReInsurNo | tx_rig_landing_investigation_expense | reinsur_no |
| 19 |  | doc_status | int |  | N | สถานะเอกสาร [0: Active, 2:ยกเลิก] | RIG_View_InvestigationExpense | DocStatus | tx_rig_landing_investigation_expense | doc_status |
| 20 |  | investigation_expense | money |  | N | ค่าใช้จ่าย investigation | RIG_View_InvestigationExpense | InvestiExpense | tx_rig_landing_investigation_expense | investigation_expense |
| 21 |  | medical_expense | money |  | N | ค่าใช้จ่าย medical | RIG_View_InvestigationExpense | MedExpense | tx_rig_landing_investigation_expense | medical_expense |
| 22 |  | legal_expense | money |  | N | ค่าใช้จ่าย legal | RIG_View_InvestigationExpense | LegalExpense | tx_rig_landing_investigation_expense | legal_expense |
|  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_InvestigationExpense | created_date | tx_rig_landing_investigation_expense | created_date |
| 24 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_InvestigationExpense | created_by | tx_rig_landing_investigation_expense | created_by |


===== PAGE 1312718888 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_investigation_expense > LD13 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_investigation_exp_id | numeric | 8 | Y | เลขที่ Running | RIG_View_InvestigationExpense | RigVUnnameID | tx_rig_landing_investigation_expense | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_investigation_expense | rig_process_hd_id |
| 3 | Index | doc_no | varchar | 20 | Y | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocNo | tx_rig_landing_investigation_expense | doc_no |
| 4 |  | policy_code | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_InvestigationExpense | PolicyCode | tx_rig_landing_investigation_expense | policy_code |
| 5 | Index | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | RIG_View_InvestigationExpense | PolicyNo | tx_rig_landing_investigation_expense | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_InvestigationExpense | PolicyYear | tx_rig_landing_investigation_expense | policy_year |
| 7 |  | effective_date | datetime |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_InvestigationExpense | EffectiveDate | tx_rig_landing_investigation_expense | effective_date |
| 8 |  | cer_no | varchar | 8 | N | เลขที่สมาชิก | RIG_View_InvestigationExpense | CerNo | tx_rig_landing_investigation_expense | cer_no |
| 9 |  | claim_no | varchar | 20 | N | เลขที่สินไหมรับเรื่อง | RIG_View_InvestigationExpense | ClaimNo | tx_rig_landing_investigation_expense | claim_no |
| 10 |  | approved_date | datetime |  | N | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | RIG_View_InvestigationExpense | ApprovedDate | tx_rig_landing_investigation_expense | approved_date |
| 11 |  | event_date | datetime |  | N | วันที่เกิดเหตุ | RIG_View_InvestigationExpense | EventDate | tx_rig_landing_investigation_expense | event_date |
| 12 |  | expense_amount | money |  | N | ค่าใช้จ่ายรวม | RIG_View_InvestigationExpense | ExpenseAmount | tx_rig_landing_investigation_expense | expense_amount |
| 13 |  | doc_date | datetime |  | N | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocDate | tx_rig_landing_investigation_expense | doc_date |
| 14 |  | claim_type | varchar | 10 | N | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง | RIG_View_InvestigationExpense | ClaimType | tx_rig_landing_investigation_expense | claim_type |
| 15 |  | inform_date | datetime |  | N | วันที่รับเรื่อง | RIG_View_InvestigationExpense | InformDate | tx_rig_landing_investigation_expense | inform_date |
| 16 |  | invest_seq | int |  | N | ส่งสอบครั้งที่ | RIG_View_InvestigationExpense | InvestSeq | tx_rig_landing_investigation_expense | invest_seq |
| 17 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_InvestigationExpense | ConsiderSeq | tx_rig_landing_investigation_expense | consider_seq |
| 18 |  | reinsur_no | varchar | 20 | N | เลขที่ประกันต่อ ( Ref.Reinsurance ) | RIG_View_InvestigationExpense | ReInsurNo | tx_rig_landing_investigation_expense | reinsur_no |
| 19 |  | doc_status | int |  | N | สถานะเอกสาร [0: Active, 2:ยกเลิก] | RIG_View_InvestigationExpense | DocStatus | tx_rig_landing_investigation_expense | doc_status |
| 20 |  | investigation_expense | money |  | N | ค่าใช้จ่าย investigation | RIG_View_InvestigationExpense | InvestiExpense | tx_rig_landing_investigation_expense | investigation_expense |
| 21 |  | medical_expense | money |  | N | ค่าใช้จ่าย medical | RIG_View_InvestigationExpense | MedExpense | tx_rig_landing_investigation_expense | medical_expense |
| 22 |  | legal_expense | money |  | N | ค่าใช้จ่าย legal | RIG_View_InvestigationExpense | LegalExpense | tx_rig_landing_investigation_expense | legal_expense |
|  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_InvestigationExpense | created_date | tx_rig_landing_investigation_expense | created_date |
| 24 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_InvestigationExpense | created_by | tx_rig_landing_investigation_expense | created_by |


===== PAGE 1308950828 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_nature_business =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_nature_business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description | เก็บข้อมูลประเภทธุรกิจของบริษัทประกันกลุ่ม |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_view_nature_business_id | int(8) |  | Y | เลขที่ Running | RIG_View_NatureBusiness | RigVCompid | tx_rig_landing_nature_business | rig_view_nature_business_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_nature_business | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_nature_business | period |
| 4 |  | dbd_code | varchar | 20 | N | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_NatureBusiness | DBDCODE | tx_rig_landing_nature_business | dbd_code |
| 5 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_NatureBusiness | TypeBusiness | tx_rig_landing_nature_business | type_business |
| 6 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_NatureBusiness | CreatedDate | tx_rig_landing_nature_business | created_date |
| 7 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_NatureBusiness | CreatedBy | tx_rig_landing_nature_business | created_by |


===== PAGE 1312096487 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_nature_business > LD11 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_view_nature_business_id | int(8) |  | Y | เลขที่ Running | RIG_View_NatureBusiness | RigVCompid | tx_rig_landing_nature_business | rig_view_nature_business_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_nature_business | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_nature_business | period |
| 4 |  | dbd_code | varchar | 20 | N | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_NatureBusiness | DBDCODE | tx_rig_landing_nature_business | dbd_code |
| 5 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_NatureBusiness | TypeBusiness | tx_rig_landing_nature_business | type_business |
| 6 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_NatureBusiness | CreatedDate | tx_rig_landing_nature_business | created_date |
| 7 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_NatureBusiness | CreatedBy | tx_rig_landing_nature_business | created_by |


===== PAGE 1300726285 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูลกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_policy_id | int(8) |  | Y | เลขที่ Running | RIG_View_Policy | RigVPolicyId | tx_rig_landing_policy | rig_v_policy_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_policy | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_policy | period |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_Policy | PolicyNo | tx_rig_landing_policy | policy_no |
| 5 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_Policy | PolicyYear | tx_rig_landing_policy | policy_year |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_Policy | PolicyCode | tx_rig_landing_policy | policy_code |
| 7 |  | policy_doc_date | Timestamp |  | N | วันที่..ที่ออกกธ. | RIG_View_Policy | PolicyDocDate | tx_rig_landing_policy | policy_doc_date |
| 8 |  | company_code | varchar | 10 | N | รหัสบริษัทผู้ถือกธ. | RIG_View_Policy | CompanyCode | tx_rig_landing_policy | company_code |
| 9 |  | first_date | Timestamp |  | N | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy | FirstDate | tx_rig_landing_policy | first_date |
| 10 |  | promise_date | Timestamp |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy | PromiseDate | tx_rig_landing_policy | promise_date |
| 11 |  | re_insur_date | Timestamp |  | N | วันที่ต่อสัญญาครั้งต่อไป | RIG_View_Policy | ReInsurDate | tx_rig_landing_policy | re_insur_date |
| 12 |  | lapse_date | Timestamp |  | N | วันที่ Lapse | RIG_View_Policy | LapseDate | tx_rig_landing_policy | lapse_date |
| 13 |  | pay_type | numeric | 10 | N | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี | RIG_View_Policy | PayType | tx_rig_landing_policy | pay_type |
| 14 |  | insum_type | numeric | 10 | N | ลักษณะทุน...0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class | RIG_View_Policy | InsumType | tx_rig_landing_policy | insum_type |
| 15 |  | adjust_dec | numeric | 10 | N | การปัดเศษทุน... (0 : ไม่ปัดเศษ 1 : ปัดเศษ) | RIG_View_Policy | AdjustDec | tx_rig_landing_policy | adjust_dec |
| 16 |  | life_prem_rate | numeric | 19,4 | N | อัตราเบี้ยชีวิต | RIG_View_Policy | LifePremRate | tx_rig_landing_policy | life_prem_rate |
| 17 |  | acc_prem_rate | numeric | 19,4 | N | อัตราเบี้ย อบ. | RIG_View_Policy | AccPremRate | tx_rig_landing_policy | acc_prem_rate |
| 18 |  | med_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedPremRate | tx_rig_landing_policy | med_prem_rate |
| 19 |  | tpd_prem_rate | numeric | 19,4 | N | อัตราเบี้ยทุพพลภาพ | RIG_View_Policy | TPDPremRate | tx_rig_landing_policy | tpd_prem_rate |
| 20 |  | life_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ชีวิต | RIG_View_Policy | LifeExtraRate | tx_rig_landing_policy | life_extra_rate |
| 21 |  | acc_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - อบ. | RIG_View_Policy | AccExtraRate | tx_rig_landing_policy | acc_extra_rate |
| 22 |  | med_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedExtraRate | tx_rig_landing_policy | med_extra_rate |
| 23 |  | tpd_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ทุพพลภาพ | RIG_View_Policy | TPDExtraRate | tx_rig_landing_policy | tpd_extra_rate |
| 24 |  | policy_status | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) | RIG_View_Policy | PolicyStatus | tx_rig_landing_policy | policy_status |
| 25 |  | re_insur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_Policy | ReInsurNo | tx_rig_landing_policy | re_insur_no |
| 26 |  | expreience_refund | boolean | 1 | N | เงินคืนตามประสบการณ์ | RIG_View_Policy | ExpreienceRefund | tx_rig_landing_policy | expreience_refund |
| 27 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_Policy | LifePrem | tx_rig_landing_policy | life_prem |
| 28 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. | RIG_View_Policy | AccPrem | tx_rig_landing_policy | acc_prem |
| 29 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. | RIG_View_Policy | MedPrem | tx_rig_landing_policy | med_prem |
| 30 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_Policy | TPDPrem | tx_rig_landing_policy | tpd_prem |
| 31 |  | cer_class_no | numeric | 10 | N | ประเภทสมาชิก | RIG_View_Policy | CerClassNo | tx_rig_landing_policy | cer_class_no |
| 32 |  | policy_no_old | varchar | 8 | N | เลขที่กรมธรรม์เดิม | RIG_View_Policy | PolicyNoOld | tx_rig_landing_policy | policy_no_old |
| 33 |  | prefix_thai | varchar | 100 | N | คำนำหน้าบริษัท | RIG_View_Policy | PrefixThai | tx_rig_landing_policy | prefix_thai |
| 34 |  | company_name | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ | RIG_View_Policy | CompanyName | tx_rig_landing_policy | company_name |
| 35 |  | company_name_eng | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ภาษาอังกฤษ | RIG_View_Policy | CompanyNameEng | tx_rig_landing_policy | company_name_eng |
| 36 |  | commision_foat | numeric | 19,4 | N | ค่าบำเหน็จ | RIG_View_Policy | CommisionFoat | tx_rig_landing_policy | commision_foat |
| 37 |  | flg_member | numeric | 5 | N | Flag member | RIG_View_Policy | FlgMember | tx_rig_landing_policy | flg_member |
| 38 |  | f_receipt_date | Timestamp |  | N | วันทีออกใบเสร็จใบแรก | RIG_View_Policy | FReceiptDate | tx_rig_landing_policy | f_receipt_date |
| 39 |  | policy_no_hd | varchar | 20 | N | กรมธรรม์แม่สำหรับอ้างอิง | RIG_View_Policy | PolicyNoHD | tx_rig_landing_policy | policy_no_hd |
| 40 |  | funeral_prem | numeric | 19,4 | N | เบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPrem | tx_rig_landing_policy | funeral_prem |
| 41 |  | funeral_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPremRate | tx_rig_landing_policy | funeral_prem_rate |
| 42 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดความคุ้มครอง | RIG_View_Policy | ExpireDate | tx_rig_landing_policy | expire_date |
| 43 |  | qcl_docno | varchar | 20 | N | เลขที่ ปิดการขาย | RIG_View_Policy | QCLDOCNO | tx_rig_landing_policy | qcl_docno |
| 44 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง 0 ประกันชีวิตกลุ่ม 1 โบรกเกอร์ 2 ประกันชีวิตข้าราชการ 3 ช่องทางองค์กร 4 ตัวแทน 5 ผ่านสถาบันการเงิน | RIG_View_Policy | SaleOption | tx_rig_landing_policy | sale_option |
| 45 |  | sale_channel | numeric | 4 | N | ช่องทาง 0 Direct 1 Dai-ichi 2 Co-op | RIG_View_Policy | SaleChannel | tx_rig_landing_policy | sale_channel |
| 46 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_Policy | CreatedDate | tx_rig_landing_policy | created_date |
| 47 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_Policy | CreatedBy | tx_rig_landing_policy | created_by |
| 48 |  | rate_flag | numeric | 1 | N | วิธีคิด Premium Rate | RIG_View_Policy | CalculatePremFrom | tx_rig_landing_policy | rate_flag |


===== PAGE 1305412683 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_policy > LD1 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_policy_id | int(8) |  | Y | เลขที่ Running | RIG_View_Policy | RigVPolicyId | tx_rig_landing_policy | rig_v_policy_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_policy | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_policy | period |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_Policy | PolicyNo | tx_rig_landing_policy | policy_no |
| 5 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_Policy | PolicyYear | tx_rig_landing_policy | policy_year |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_Policy | PolicyCode | tx_rig_landing_policy | policy_code |
| 7 |  | policy_doc_date | Timestamp |  | N | วันที่..ที่ออกกธ. | RIG_View_Policy | PolicyDocDate | tx_rig_landing_policy | policy_doc_date |
| 8 |  | company_code | varchar | 10 | N | รหัสบริษัทผู้ถือกธ. | RIG_View_Policy | CompanyCode | tx_rig_landing_policy | company_code |
| 9 |  | first_date | Timestamp |  | N | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy | FirstDate | tx_rig_landing_policy | first_date |
| 10 |  | promise_date | Timestamp |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy | PromiseDate | tx_rig_landing_policy | promise_date |
| 11 |  | re_insur_date | Timestamp |  | N | วันที่ต่อสัญญาครั้งต่อไป | RIG_View_Policy | ReInsurDate | tx_rig_landing_policy | re_insur_date |
| 12 |  | lapse_date | Timestamp |  | N | วันที่ Lapse | RIG_View_Policy | LapseDate | tx_rig_landing_policy | lapse_date |
| 13 |  | pay_type | numeric | 10 | N | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี | RIG_View_Policy | PayType | tx_rig_landing_policy | pay_type |
| 14 |  | insum_type | numeric | 10 | N | ลักษณะทุน...0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class | RIG_View_Policy | InsumType | tx_rig_landing_policy | insum_type |
| 15 |  | adjust_dec | numeric | 10 | N | การปัดเศษทุน... (0 : ไม่ปัดเศษ 1 : ปัดเศษ) | RIG_View_Policy | AdjustDec | tx_rig_landing_policy | adjust_dec |
| 16 |  | life_prem_rate | numeric | 19,4 | N | อัตราเบี้ยชีวิต | RIG_View_Policy | LifePremRate | tx_rig_landing_policy | life_prem_rate |
| 17 |  | acc_prem_rate | numeric | 19,4 | N | อัตราเบี้ย อบ. | RIG_View_Policy | AccPremRate | tx_rig_landing_policy | acc_prem_rate |
| 18 |  | med_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedPremRate | tx_rig_landing_policy | med_prem_rate |
| 19 |  | tpd_prem_rate | numeric | 19,4 | N | อัตราเบี้ยทุพพลภาพ | RIG_View_Policy | TPDPremRate | tx_rig_landing_policy | tpd_prem_rate |
| 20 |  | life_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ชีวิต | RIG_View_Policy | LifeExtraRate | tx_rig_landing_policy | life_extra_rate |
| 21 |  | acc_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - อบ. | RIG_View_Policy | AccExtraRate | tx_rig_landing_policy | acc_extra_rate |
| 22 |  | med_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedExtraRate | tx_rig_landing_policy | med_extra_rate |
| 23 |  | tpd_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ทุพพลภาพ | RIG_View_Policy | TPDExtraRate | tx_rig_landing_policy | tpd_extra_rate |
| 24 |  | policy_status | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) | RIG_View_Policy | PolicyStatus | tx_rig_landing_policy | policy_status |
| 25 |  | re_insur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_Policy | ReInsurNo | tx_rig_landing_policy | re_insur_no |
| 26 |  | expreience_refund | boolean | 1 | N | เงินคืนตามประสบการณ์ | RIG_View_Policy | ExpreienceRefund | tx_rig_landing_policy | expreience_refund |
| 27 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_Policy | LifePrem | tx_rig_landing_policy | life_prem |
| 28 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. | RIG_View_Policy | AccPrem | tx_rig_landing_policy | acc_prem |
| 29 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. | RIG_View_Policy | MedPrem | tx_rig_landing_policy | med_prem |
| 30 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_Policy | TPDPrem | tx_rig_landing_policy | tpd_prem |
| 31 |  | cer_class_no | numeric | 10 | N | ประเภทสมาชิก | RIG_View_Policy | CerClassNo | tx_rig_landing_policy | cer_class_no |
| 32 |  | policy_no_old | varchar | 8 | N | เลขที่กรมธรรม์เดิม | RIG_View_Policy | PolicyNoOld | tx_rig_landing_policy | policy_no_old |
| 33 |  | prefix_thai | varchar | 100 | N | คำนำหน้าบริษัท | RIG_View_Policy | PrefixThai | tx_rig_landing_policy | prefix_thai |
| 34 |  | company_name | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ | RIG_View_Policy | CompanyName | tx_rig_landing_policy | company_name |
| 35 |  | company_name_eng | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ภาษาอังกฤษ | RIG_View_Policy | CompanyNameEng | tx_rig_landing_policy | company_name_eng |
| 36 |  | commision_foat | numeric | 19,4 | N | ค่าบำเหน็จ | RIG_View_Policy | CommisionFoat | tx_rig_landing_policy | commision_foat |
| 37 |  | flg_member | numeric | 5 | N | Flag member | RIG_View_Policy | FlgMember | tx_rig_landing_policy | flg_member |
| 38 |  | f_receipt_date | Timestamp |  | N | วันทีออกใบเสร็จใบแรก | RIG_View_Policy | FReceiptDate | tx_rig_landing_policy | f_receipt_date |
| 39 |  | policy_no_hd | varchar | 20 | N | กรมธรรม์แม่สำหรับอ้างอิง | RIG_View_Policy | PolicyNoHD | tx_rig_landing_policy | policy_no_hd |
| 40 |  | funeral_prem | numeric | 19,4 | N | เบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPrem | tx_rig_landing_policy | funeral_prem |
| 41 |  | funeral_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPremRate | tx_rig_landing_policy | funeral_prem_rate |
| 42 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดความคุ้มครอง | RIG_View_Policy | ExpireDate | tx_rig_landing_policy | expire_date |
| 43 |  | qcl_docno | varchar | 20 | N | เลขที่ ปิดการขาย | RIG_View_Policy | QCLDOCNO | tx_rig_landing_policy | qcl_docno |
| 44 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง 0 ประกันชีวิตกลุ่ม 1 โบรกเกอร์ 2 ประกันชีวิตข้าราชการ 3 ช่องทางองค์กร 4 ตัวแทน 5 ผ่านสถาบันการเงิน | RIG_View_Policy | SaleOption | tx_rig_landing_policy | sale_option |
| 45 |  | sale_channel | numeric | 4 | N | ช่องทาง 0 Direct 1 Dai-ichi 2 Co-op | RIG_View_Policy | SaleChannel | tx_rig_landing_policy | sale_channel |
| 46 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_Policy | CreatedDate | tx_rig_landing_policy | created_date |
| 47 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_Policy | CreatedBy | tx_rig_landing_policy | created_by |
| 48 |  | rate_flag | numeric | 1 | N | วิธีคิด Premium Rate | RIG_View_Policy | CalculatePremFrom | tx_rig_landing_policy | rate_flag |


===== PAGE 1336967224 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_prem_rate =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_prem_rate | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-04-27 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_rate_id | int(8) |  | Y | เลขที่ Running RIG_View_PremiumRate | RIG_View_PremiumRate | RigVRateID | tx_rig_landing_prem_rate | rig_v_rate_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_prem_rate | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | รอบประมวลผล งวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_prem_rate | period |
| 4 |  | doc_no_uwr | varchar | 20 | N | เลขเอกสาร Underwriter' Report | RIG_View_PremiumRate | DocNoUWR | tx_rig_landing_prem_rate | doc_no_uwr |
| 5 |  | policy_no | varchar | 10 | N | เลขกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyNo | tx_rig_landing_prem_rate | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyYear | tx_rig_landing_prem_rate | policy_year |
| 7 |  | promise_date | Timestamp |  | N | วันที่เริ่มสัญญากรมธรรม์ | RIG_View_PremiumRate | PromiseDate | tx_rig_landing_prem_rate | promise_date |
| 8 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดสัญญากรมธรรม์ | RIG_View_PremiumRate | ExpireDate | tx_rig_landing_prem_rate | expire_date |
| 9 |  | prem_rate_table_code | numeric | 4 | N | รหัสตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableCode | tx_rig_landing_prem_rate | prem_rate_table_code |
| 10 |  | prem_rate_table_name | varchar | 100 | N | ชื่อตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableName | tx_rig_landing_prem_rate | prem_rate_table_name |
| 11 |  | prem_rate_table_type | varchar | 10 | N | ประเภทตารางว่าเป็นตารางอายุหรือตาราง Class | RIG_View_PremiumRate | PremRateTableType | tx_rig_landing_prem_rate | prem_rate_table_type |
| 12 |  | prem_rate_table_kind | varchar | 10 | N | ประเภทตารางว่าเป็นตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableKind | tx_rig_landing_prem_rate | prem_rate_table_kind |
| 13 |  | value_age_or_class | numeric | 4 | N | ค่าของอายุโดยเริ่มที่ 0-99, ค่าของ Class โดยเริ่มที่ 1-จำนวนแผน | RIG_View_PremiumRate | ValueAgeOrClass | tx_rig_landing_prem_rate | value_age_or_class |
| 14 |  | value_gender | varchar | 6 | N | ค่าของเพศ | RIG_View_PremiumRate | ValueGender | tx_rig_landing_prem_rate | value_gender |
| 15 |  | value_life | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองชีวิต | RIG_View_PremiumRate | ValueLife | tx_rig_landing_prem_rate | value_life |
| 16 |  | value_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองอุบัติเหตุ | RIG_View_PremiumRate | ValueAcc | tx_rig_landing_prem_rate | value_acc |
| 17 |  | value_med_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | RIG_View_PremiumRate | ValueMedAcc | tx_rig_landing_prem_rate | value_med_acc |
| 18 |  | value_tpd | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองทุพพลภาพ | RIG_View_PremiumRate | ValueTPD | tx_rig_landing_prem_rate | value_tpd |
| 19 |  | status | numeric | 2 | N | สถานะรายการ | RIG_View_PremiumRate | Status | tx_rig_landing_prem_rate | status |
| 20 |  | import_date | Timestamp |  | N | วันที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportDate | tx_rig_landing_prem_rate | import_date |
| 21 |  | import_user | varchar | 30 | N | ผู้ที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportUser | tx_rig_landing_prem_rate | import_user |
| 22 |  | approve_date | Timestamp |  | N | วันที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveDate | tx_rig_landing_prem_rate | approve_date |
| 23 |  | approve_user | varchar | 30 | N | ผู้ที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveUser | tx_rig_landing_prem_rate | approve_user |
| 24 |  | cancel_date | Timestamp |  | N | วันที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelDate | tx_rig_landing_prem_rate | cancel_date |
| 25 |  | cancel_user | varchar | 30 | N | ผู้ที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelUser | tx_rig_landing_prem_rate | cancel_user |
| 26 |  | cancel_remark | varchar | 30 | N | หมายเหตุการยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelRemark | tx_rig_landing_prem_rate | cancel_remark |
| 27 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_PremiumRate | CreatedDate | tx_rig_landing_prem_rate | created_date |
| 28 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_PremiumRate | CreatedBy | tx_rig_landing_prem_rate | created_by |


===== PAGE 1336967236 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_prem_rate > LD15 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_rate_id | int(8) |  | Y | เลขที่ Running RIG_View_PremiumRate | RIG_View_PremiumRate | RigVRateID | tx_rig_landing_prem_rate | rig_v_rate_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_prem_rate | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | รอบประมวลผล งวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_prem_rate | period |
| 4 |  | doc_no_uwr | varchar | 20 | N | เลขเอกสาร Underwriter' Report | RIG_View_PremiumRate | DocNoUWR | tx_rig_landing_prem_rate | doc_no_uwr |
| 5 |  | policy_no | varchar | 10 | N | เลขกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyNo | tx_rig_landing_prem_rate | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyYear | tx_rig_landing_prem_rate | policy_year |
| 7 |  | promise_date | Timestamp |  | N | วันที่เริ่มสัญญากรมธรรม์ | RIG_View_PremiumRate | PromiseDate | tx_rig_landing_prem_rate | promise_date |
| 8 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดสัญญากรมธรรม์ | RIG_View_PremiumRate | ExpireDate | tx_rig_landing_prem_rate | expire_date |
| 9 |  | prem_rate_table_code | numeric | 4 | N | รหัสตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableCode | tx_rig_landing_prem_rate | prem_rate_table_code |
| 10 |  | prem_rate_table_name | varchar | 100 | N | ชื่อตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableName | tx_rig_landing_prem_rate | prem_rate_table_name |
| 11 |  | prem_rate_table_type | varchar | 10 | N | ประเภทตารางว่าเป็นตารางอายุหรือตาราง Class | RIG_View_PremiumRate | PremRateTableType | tx_rig_landing_prem_rate | prem_rate_table_type |
| 12 |  | prem_rate_table_kind | varchar | 10 | N | ประเภทตารางว่าเป็นตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableKind | tx_rig_landing_prem_rate | prem_rate_table_kind |
| 13 |  | value_age_or_class | numeric | 4 | N | ค่าของอายุโดยเริ่มที่ 0-99, ค่าของ Class โดยเริ่มที่ 1-จำนวนแผน | RIG_View_PremiumRate | ValueAgeOrClass | tx_rig_landing_prem_rate | value_age_or_class |
| 14 |  | value_gender | varchar | 6 | N | ค่าของเพศ | RIG_View_PremiumRate | ValueGender | tx_rig_landing_prem_rate | value_gender |
| 15 |  | value_life | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองชีวิต | RIG_View_PremiumRate | ValueLife | tx_rig_landing_prem_rate | value_life |
| 16 |  | value_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองอุบัติเหตุ | RIG_View_PremiumRate | ValueAcc | tx_rig_landing_prem_rate | value_acc |
| 17 |  | value_med_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | RIG_View_PremiumRate | ValueMedAcc | tx_rig_landing_prem_rate | value_med_acc |
| 18 |  | value_tpd | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองทุพพลภาพ | RIG_View_PremiumRate | ValueTPD | tx_rig_landing_prem_rate | value_tpd |
| 19 |  | status | numeric | 2 | N | สถานะรายการ | RIG_View_PremiumRate | Status | tx_rig_landing_prem_rate | status |
| 20 |  | import_date | Timestamp |  | N | วันที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportDate | tx_rig_landing_prem_rate | import_date |
| 21 |  | import_user | varchar | 30 | N | ผู้ที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportUser | tx_rig_landing_prem_rate | import_user |
| 22 |  | approve_date | Timestamp |  | N | วันที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveDate | tx_rig_landing_prem_rate | approve_date |
| 23 |  | approve_user | varchar | 30 | N | ผู้ที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveUser | tx_rig_landing_prem_rate | approve_user |
| 24 |  | cancel_date | Timestamp |  | N | วันที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelDate | tx_rig_landing_prem_rate | cancel_date |
| 25 |  | cancel_user | varchar | 30 | N | ผู้ที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelUser | tx_rig_landing_prem_rate | cancel_user |
| 26 |  | cancel_remark | varchar | 30 | N | หมายเหตุการยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelRemark | tx_rig_landing_prem_rate | cancel_remark |
| 27 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_PremiumRate | CreatedDate | tx_rig_landing_prem_rate | created_date |
| 28 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_PremiumRate | CreatedBy | tx_rig_landing_prem_rate | created_by |


===== PAGE 1312260751 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_unname_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_landing_unname_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_unname_id | int(8) |  | Y | เลขที่ Running RIG_View_UnnamePolicy | RIG_View_UnnamePolicy | RigVUnnameID | tx_rig_landing_unname_policy | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_unname_policy | rig_process_hd_id |
| 3 |  | period | Timestamp |  | N | รอบประมวลผลงวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_unname_policy | period |
| 2 |  | policy_code | numeric | 1 | N | ประเภทกธ. | RIG_View_UnnamePolicy | PolicyCode | tx_rig_landing_unname_policy | policy_code |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_UnnamePolicy | PolicyNo | tx_rig_landing_unname_policy | policy_no |
| 5 |  | mth_status | numeric | 1 | N |  | RIG_View_UnnamePolicy | MthStatus | tx_rig_landing_unname_policy | mth_status |
| 6 |  | pay_type | numeric | 4 | N | ประเภทการชำระเงินของกธ. | RIG_View_UnnamePolicy | Paytype | tx_rig_landing_unname_policy | pay_type |
| 7 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_UnnamePolicy | PolicyYear | tx_rig_landing_unname_policy | policy_year |
| 8 |  | promise_date | Timestamp |  | N | วันเริ่มคุ้มครอง | RIG_View_UnnamePolicy | PromiseDate | tx_rig_landing_unname_policy | promise_date |
| 9 |  | reinsur_date | Timestamp |  | N | วันต่อสัญญาปีต่อไป | RIG_View_UnnamePolicy | ReInsurDate | tx_rig_landing_unname_policy | reinsur_date |
| 10 |  | total_life | numeric | 19,4 | N | เบี้ย.ชีวิต | RIG_View_UnnamePolicy | TotalLife | tx_rig_landing_unname_policy | total_life |
| 11 |  | total_acc | numeric | 19,4 | N | เบี้ยอบ. | RIG_View_UnnamePolicy | TotalAcc | tx_rig_landing_unname_policy | total_acc |
| 12 |  | total_med | numeric | 19,4 | N | เบี้ย.ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMed | tx_rig_landing_unname_policy | total_med |
| 13 |  | total_tpd | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPD | tx_rig_landing_unname_policy | total_tpd |
| 14 |  | total_ipd | numeric | 19,4 | N | เบี้ยคนไข้ใน | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_ipd |
| 15 |  | total_opd | numeric | 19,4 | N | เบี้ยคนไข้นอก | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_opd |
| 16 |  | total_e1_amt | numeric | 19,4 | N | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ | RIG_View_UnnamePolicy | TotalE1Amt | tx_rig_landing_unname_policy | total_e1_amt |
| 17 |  | total_e1_net | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษรวม | RIG_View_UnnamePolicy | TotalE1Net | tx_rig_landing_unname_policy | total_e1_net |
| 18 |  | grand_total | numeric | 19,4 | N | เบี้ยรวมทั้งหมด | RIG_View_UnnamePolicy | GrandTotal | tx_rig_landing_unname_policy | grand_total |
| 19 |  | company_code | varchar | 10 | N | รหัสบริษัท | RIG_View_UnnamePolicy | CompCode | tx_rig_landing_unname_policy | company_code |
| 20 |  | department_code | varchar | 10 | N | รหัสหน่วยงาน | RIG_View_UnnamePolicy | DeptCode | tx_rig_landing_unname_policy | department_code |
| 21 |  | total_life_insur | numeric | 19,4 | N | ทุนชีวิต | RIG_View_UnnamePolicy | TotalLifeInsur | tx_rig_landing_unname_policy | total_life_insur |
| 22 |  | total_acc_insur | numeric | 19,4 | N | ทุนอบ. | RIG_View_UnnamePolicy | TotalAccInsur | tx_rig_landing_unname_policy | total_acc_insur |
| 23 |  | total_med_insur | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedInsur | tx_rig_landing_unname_policy | total_med_insur |
| 24 |  | total_tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDInsur | tx_rig_landing_unname_policy | total_tpd_insur |
| 25 |  | total_life_amt | numeric | 19,4 | N | จำนวนราย-ชีวิต | RIG_View_UnnamePolicy | TotalLifeAmt | tx_rig_landing_unname_policy | total_life_amt |
| 26 |  | total_acc_amt | numeric | 19,4 | N | จำนวนราย- อบ. | RIG_View_UnnamePolicy | TotalAccAmt | tx_rig_landing_unname_policy | total_acc_amt |
| 27 |  | total_med_amt | numeric | 19,4 | N | จำนวนราย-ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedAmt | tx_rig_landing_unname_policy | total_med_amt |
| 28 |  | total_tpd_amt | numeric | 19,4 | N | จำนวนราย-ทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDAmt | tx_rig_landing_unname_policy | total_tpd_amt |
| 29 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | dental |
| 30 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_UnnamePolicy | DocNo | tx_rig_landing_unname_policy | doc_no |
| 31 |  | reInsur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_UnnamePolicy | ReInsur_No | tx_rig_landing_unname_policy | reInsur_no |
| 32 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_UnnamePolicy | CreatedDate | tx_rig_landing_unname_policy | created_date |
| 33 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_UnnamePolicy | CreatedBy | tx_rig_landing_unname_policy | created_by |
| 34 |  | period_date | Timestamp |  | N | งวดการคำนวณ | RIG_View_UnnamePolicy | Period | tx_rig_landing_unname_policy | period_date |
| 35 |  | no_previous | numeric | 4 | N | จำนวนคนงวดก่อนหน้า | RIG_View_UnnamePolicy | LastBill | tx_rig_landing_unname_policy | no_previous |
| 36 |  | no_additions | numeric | 4 | N | จำนวนคนงวดเพิ่ม | RIG_View_UnnamePolicy | Additions | tx_rig_landing_unname_policy | no_additions |
| 37 |  | no_terminations | numeric | 4 | N | จำนวนคนงวดยกเลิก | RIG_View_UnnamePolicy | Terminations | tx_rig_landing_unname_policy | no_terminations |
| 38 |  | no_total | numeric | 4 | N | จำนวนคนรวม | RIG_View_UnnamePolicy | total | tx_rig_landing_unname_policy | no_total |


===== PAGE 1312260787 | Functional Specification > 04. Persistence Specification. > Transaction > 02. ESB feed : Oceanlife to RI Group > tx_rig_landing_unname_policy > LD12 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_unname_id | int(8) |  | Y | เลขที่ Running RIG_View_UnnamePolicy | RIG_View_UnnamePolicy | RigVUnnameID | tx_rig_landing_unname_policy | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_unname_policy | rig_process_hd_id |
| 3 |  | period | Timestamp |  | N | รอบประมวลผลงวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_unname_policy | period |
| 2 |  | policy_code | numeric | 1 | N | ประเภทกธ. | RIG_View_UnnamePolicy | PolicyCode | tx_rig_landing_unname_policy | policy_code |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_UnnamePolicy | PolicyNo | tx_rig_landing_unname_policy | policy_no |
| 5 |  | mth_status | numeric | 1 | N |  | RIG_View_UnnamePolicy | MthStatus | tx_rig_landing_unname_policy | mth_status |
| 6 |  | pay_type | numeric | 4 | N | ประเภทการชำระเงินของกธ. | RIG_View_UnnamePolicy | Paytype | tx_rig_landing_unname_policy | pay_type |
| 7 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_UnnamePolicy | PolicyYear | tx_rig_landing_unname_policy | policy_year |
| 8 |  | promise_date | Timestamp |  | N | วันเริ่มคุ้มครอง | RIG_View_UnnamePolicy | PromiseDate | tx_rig_landing_unname_policy | promise_date |
| 9 |  | reinsur_date | Timestamp |  | N | วันต่อสัญญาปีต่อไป | RIG_View_UnnamePolicy | ReInsurDate | tx_rig_landing_unname_policy | reinsur_date |
| 10 |  | total_life | numeric | 19,4 | N | เบี้ย.ชีวิต | RIG_View_UnnamePolicy | TotalLife | tx_rig_landing_unname_policy | total_life |
| 11 |  | total_acc | numeric | 19,4 | N | เบี้ยอบ. | RIG_View_UnnamePolicy | TotalAcc | tx_rig_landing_unname_policy | total_acc |
| 12 |  | total_med | numeric | 19,4 | N | เบี้ย.ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMed | tx_rig_landing_unname_policy | total_med |
| 13 |  | total_tpd | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPD | tx_rig_landing_unname_policy | total_tpd |
| 14 |  | total_ipd | numeric | 19,4 | N | เบี้ยคนไข้ใน | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_ipd |
| 15 |  | total_opd | numeric | 19,4 | N | เบี้ยคนไข้นอก | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_opd |
| 16 |  | total_e1_amt | numeric | 19,4 | N | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ | RIG_View_UnnamePolicy | TotalE1Amt | tx_rig_landing_unname_policy | total_e1_amt |
| 17 |  | total_e1_net | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษรวม | RIG_View_UnnamePolicy | TotalE1Net | tx_rig_landing_unname_policy | total_e1_net |
| 18 |  | grand_total | numeric | 19,4 | N | เบี้ยรวมทั้งหมด | RIG_View_UnnamePolicy | GrandTotal | tx_rig_landing_unname_policy | grand_total |
| 19 |  | company_code | varchar | 10 | N | รหัสบริษัท | RIG_View_UnnamePolicy | CompCode | tx_rig_landing_unname_policy | company_code |
| 20 |  | department_code | varchar | 10 | N | รหัสหน่วยงาน | RIG_View_UnnamePolicy | DeptCode | tx_rig_landing_unname_policy | department_code |
| 21 |  | total_life_insur | numeric | 19,4 | N | ทุนชีวิต | RIG_View_UnnamePolicy | TotalLifeInsur | tx_rig_landing_unname_policy | total_life_insur |
| 22 |  | total_acc_insur | numeric | 19,4 | N | ทุนอบ. | RIG_View_UnnamePolicy | TotalAccInsur | tx_rig_landing_unname_policy | total_acc_insur |
| 23 |  | total_med_insur | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedInsur | tx_rig_landing_unname_policy | total_med_insur |
| 24 |  | total_tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDInsur | tx_rig_landing_unname_policy | total_tpd_insur |
| 25 |  | total_life_amt | numeric | 19,4 | N | จำนวนราย-ชีวิต | RIG_View_UnnamePolicy | TotalLifeAmt | tx_rig_landing_unname_policy | total_life_amt |
| 26 |  | total_acc_amt | numeric | 19,4 | N | จำนวนราย- อบ. | RIG_View_UnnamePolicy | TotalAccAmt | tx_rig_landing_unname_policy | total_acc_amt |
| 27 |  | total_med_amt | numeric | 19,4 | N | จำนวนราย-ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedAmt | tx_rig_landing_unname_policy | total_med_amt |
| 28 |  | total_tpd_amt | numeric | 19,4 | N | จำนวนราย-ทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDAmt | tx_rig_landing_unname_policy | total_tpd_amt |
| 29 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | dental |
| 30 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_UnnamePolicy | DocNo | tx_rig_landing_unname_policy | doc_no |
| 31 |  | reInsur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_UnnamePolicy | ReInsur_No | tx_rig_landing_unname_policy | reInsur_no |
| 32 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_UnnamePolicy | CreatedDate | tx_rig_landing_unname_policy | created_date |
| 33 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_UnnamePolicy | CreatedBy | tx_rig_landing_unname_policy | created_by |
| 34 |  | period_date | Timestamp |  | N | งวดการคำนวณ | RIG_View_UnnamePolicy | Period | tx_rig_landing_unname_policy | period_date |
| 35 |  | no_previous | numeric | 4 | N | จำนวนคนงวดก่อนหน้า | RIG_View_UnnamePolicy | LastBill | tx_rig_landing_unname_policy | no_previous |
| 36 |  | no_additions | numeric | 4 | N | จำนวนคนงวดเพิ่ม | RIG_View_UnnamePolicy | Additions | tx_rig_landing_unname_policy | no_additions |
| 37 |  | no_terminations | numeric | 4 | N | จำนวนคนงวดยกเลิก | RIG_View_UnnamePolicy | Terminations | tx_rig_landing_unname_policy | no_terminations |
| 38 |  | no_total | numeric | 4 | N | จำนวนคนรวม | RIG_View_UnnamePolicy | total | tx_rig_landing_unname_policy | no_total |


===== PAGE 1308950548 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing =====
(empty page)


===== PAGE 1312096888 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing =====
- tx_est_snap_cert_inforce
- tx_est_snap_unname_policy
- tx_est_snap_policy
- tx_est_snap_nature_business
- tx_est_snap_company
- tx_est_snap_claimtpd
- tx_est_snap_claim_death
- tx_est_snap_certificate_cust
- tx_est_snap_cert_newbusiness


===== PAGE 1308950616 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_cert_inforce =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_cert_inforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_pol_inforce_id | int(8) |  | N | เลขที่ Running จากประกันกลุ่ม |  | RIG_View_CertInforce | rig_v_pol_inforce_id | tx_rig_landing_cert_inforce | rig_v_pol_inforce_id |
| 2 | FK | rig_process_hd_id | int(8) |  | N | เลขที่ process id จาก batch |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_cert_inforce | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_cert_inforce | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร |  | RIG_View_CertInforce | DOCNO | tx_rig_landing_cert_inforce | doc_no |
| 5 |  | policy_no | varchar | 20 | N | เลขกรมธรรม์ |  | RIG_View_CertInforce | PolicyNo | tx_rig_landing_cert_inforce | policy_no |
| 6 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ |  | RIG_View_CertInforce | EffectDate | tx_rig_landing_cert_inforce | effect_date |
| 7 |  | end_date | Timestamp |  | N | วัันที่สิ้นสุด |  | RIG_View_CertInforce | EndDate | tx_rig_landing_cert_inforce | end_date |
| 8 |  | change_date | Timestamp |  | N | วันที่มีผลเปลี่ยนแปลง |  | RIG_View_CertInforce | ChangeDate | tx_rig_landing_cert_inforce | change_date |
| 9 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า |  | RIG_View_CertInforce | CerNo | tx_rig_landing_cert_inforce | cer_no |
| 10 |  | comp_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompCode | tx_rig_landing_cert_inforce | comp_code |
| 11 |  | cust_code | varchar | 20 | N | รหัสลูกค้า |  | RIG_View_CertInforce | CustCode | tx_rig_landing_cert_inforce | cust_code |
| 12 |  | med_rate | varchar | 1 | N | อัตราเบี้ยสุขภาพ |  | RIG_View_CertInforce | MedRate | tx_rig_landing_cert_inforce | med_rate |
| 13 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertInforce | Age | tx_rig_landing_cert_inforce | age |
| 14 |  | sex | numeric | 5 | N | เพศ |  | RIG_View_CertInforce | Sex | tx_rig_landing_cert_inforce | sex |
| 15 |  | count_of_day | numeric | 10 | N | จำนวนวันที่มีผล |  | RIG_View_CertInforce | CountOfDay | tx_rig_landing_cert_inforce | count_of_day |
| 16 |  | life_insur | numeric | 19,4 | N | ทุน - ชีวิต |  | RIG_View_CertInforce | LifeInsur | tx_rig_landing_cert_inforce | life_insur |
| 17 |  | cremat_insur | numeric | 19,4 | N | ทุน - ค่าปลงศพ |  | RIG_View_CertInforce | CrematInsur | tx_rig_landing_cert_inforce | cremat_insur |
| 18 |  | acc_insur | numeric | 19,4 | N | ทุน - อุบัติเหตุ |  | RIG_View_CertInforce | AccInsur | tx_rig_landing_cert_inforce | acc_insur |
| 19 |  | med_insur | numeric | 19,4 | N | ทุน - ค่่ารักษา |  | RIG_View_CertInforce | MedInsur | tx_rig_landing_cert_inforce | med_insur |
| 20 |  | tpd_insur | numeric | 19,4 | N | ทุน - ทุพพลภาพ |  | RIG_View_CertInforce | TPDInsur | tx_rig_landing_cert_inforce | tpd_insur |
| 21 |  | life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | LifePrem | tx_rig_landing_cert_inforce | life_prem |
| 22 |  | life_e1_rate | numeric | 19,4 | N | อัตราเบี้ย Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Rate | tx_rig_landing_cert_inforce | life_e1_rate |
| 23 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย - Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Prem | tx_rig_landing_cert_inforce | life_e1_prem |
| 24 |  | cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | CrematPrem | tx_rig_landing_cert_inforce | cremat_prem |
| 25 |  | acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | AccPrem | tx_rig_landing_cert_inforce | acc_prem |
| 26 |  | med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่่ารักษาพยาบาล |  | RIG_View_CertInforce | MedAccPrem | tx_rig_landing_cert_inforce | med_acc_prem |
| 27 |  | tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | TPDPrem | tx_rig_landing_cert_inforce | tpd_prem |
| 28 |  | ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | IPDPrem | tx_rig_landing_cert_inforce | ipd_prem |
| 29 |  | opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | OPDPrem | tx_rig_landing_cert_inforce | opd_prem |
| 30 |  | major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | MajorPlanPrem | tx_rig_landing_cert_inforce | major_plan_prem |
| 31 |  | dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | DentalPrem | tx_rig_landing_cert_inforce | dental_prem |
| 32 |  | mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | MatherPrem | tx_rig_landing_cert_inforce | mather_prem |
| 33 |  | hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | HBPrem | tx_rig_landing_cert_inforce | hb_prem |
| 34 |  | status_member | varchar | 1 | N | สถานะความคุ้มครอง |  | RIG_View_CertInforce | StatusMember | tx_rig_landing_cert_inforce | status_member |
| 35 |  | status | numeric | 10 | N | สถานะการใช้งาน |  | RIG_View_CertInforce | Status | tx_rig_landing_cert_inforce | status |
| 36 |  | approved_date | Timestamp |  | N | วันที่อนุมัติ |  | RIG_View_CertInforce | ApprovedDate | tx_rig_landing_cert_inforce | approved_date |
| 37 |  | total_prem | numeric | 19,4 | N | เบี้ยรวมทั้งหมด |  | RIG_View_CertInforce | TotalPrem | tx_rig_landing_cert_inforce | total_prem |
| 38 |  | opd_lab_prem | numeric | 19,4 | N | เบี้ย OPD Lab รวมทั้งหมด |  | RIG_View_CertInforce | OPDLabPrem | tx_rig_landing_cert_inforce | opd_lab_prem |
| 39 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร |  | RIG_View_CertInforce | DOCDate | tx_rig_landing_cert_inforce | doc_date |
| 40 |  | company_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompanyCode | tx_rig_landing_cert_inforce | company_code |
| 41 |  | company_head_code | varchar | 20 | N | รหัสบริษัทต้นสังกัด |  | RIG_View_CertInforce | CompanyHeadCode | tx_rig_landing_cert_inforce | company_head_code |
| 42 |  | re_insure_no | varchar | 20 | N | เลขที่ี่ประกันต่อ |  | RIG_View_CertInforce | ReInsureNo | tx_rig_landing_cert_inforce | re_insure_no |
| 43 |  | policy_name | varchar | 200 | N | ชื่อกรมธรรม์ |  | RIG_View_CertInforce | PolicyName | tx_rig_landing_cert_inforce | policy_name |
| 44 |  | company_name | varchar | 200 | N | ชื่ื่อ บริษัทในเครือ |  | RIG_View_CertInforce | CompanyName | tx_rig_landing_cert_inforce | company_name |
| 45 |  | promise_date | Timestamp |  | N | วันที่เริ่มคุ้มครองกรมธรรม์ |  | RIG_View_CertInforce | PromiseDate | tx_rig_landing_cert_inforce | promise_date |
| 46 |  | pol_end_date | Timestamp |  | N | วันที่สิ้นสุดกรมธรรม์ |  | RIG_View_CertInforce | PolEndDate | tx_rig_landing_cert_inforce | pol_end_date |
| 47 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ |  | RIG_View_CertInforce | PolicyYear | tx_rig_landing_cert_inforce | policy_year |
| 48 |  | tax_year | numeric | 10 | N | ปีภาษี |  | RIG_View_CertInforce | TaxYear | tx_rig_landing_cert_inforce | tax_year |
| 49 |  | pay_type | numeric | 10 | N | ปีระเภทการจ่าย |  | RIG_View_CertInforce | PayType | tx_rig_landing_cert_inforce | pay_type |
| 50 |  | lot_no | numeric | 10 | N | งวดที่ |  | RIG_View_CertInforce | LotNo | tx_rig_landing_cert_inforce | lot_no |
| 51 |  | sum_life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | SumLifePrem | tx_rig_landing_cert_inforce | sum_life_prem |
| 52 |  | sum_life_e1_prem | numeric | 19,4 | N | เบี้ย - ชีวิตExtra 1 คิดรายคน |  | RIG_View_CertInforce | SumLifeE1Prem | tx_rig_landing_cert_inforce | sum_life_e1_prem |
| 53 |  | sum_cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | SumCrematPrem | tx_rig_landing_cert_inforce | sum_cremat_prem |
| 54 |  | sum_acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | SumAccPrem | tx_rig_landing_cert_inforce | sum_acc_prem |
| 55 |  | sum_med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่ารักษาพยาบาล |  | RIG_View_CertInforce | SumMedAccPrem | tx_rig_landing_cert_inforce | sum_med_acc_prem |
| 56 |  | sum_tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | SumTPDPrem | tx_rig_landing_cert_inforce | sum_tpd_prem |
| 57 |  | sum_ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | SumIPDPrem | tx_rig_landing_cert_inforce | sum_ipd_prem |
| 58 |  | sum_opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | SumOPDPrem | tx_rig_landing_cert_inforce | sum_opd_prem |
| 59 |  | sum_major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | SumMajorPlanPrem | tx_rig_landing_cert_inforce | sum_major_plan_prem |
| 60 |  | sum_dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | SumDentalPrem | tx_rig_landing_cert_inforce | sum_dental_prem |
| 61 |  | sum_mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | SumMatherPrem | tx_rig_landing_cert_inforce | sum_mather_prem |
| 62 |  | sum_hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | SumHBPrem | tx_rig_landing_cert_inforce | sum_hb_prem |
| 63 |  | sum_total_prem | numeric | 19,4 | N | เบี้ย - รวมทั้งหมด |  | RIG_View_CertInforce | SumTotalPrem | tx_rig_landing_cert_inforce | sum_total_prem |
| 64 |  | sum_opd_lab_prem | numeric | 2,2 | N | เบี้ยรวม OPD Lab |  | RIG_View_CertInforce | SumOPDLabPrem | tx_rig_landing_cert_inforce | sum_opd_lab_prem |
| 65 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertInforce | CreatedDate | tx_rig_landing_cert_inforce | created_date |
| 66 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertInforce | CreatedBy | tx_rig_landing_cert_inforce | created_by |
| 67 |  | period_date | Timestamp |  | N | วันที่เริ่มงวด |  | RIG_View_CertInforce | PeriodDate | tx_rig_landing_cert_inforce | period_date |


===== PAGE 1308950676 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_cert_newbusiness =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_cert_newbusiness | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | TB mapping snapshot |
| 1 | PK | rig_v_cer_id | int(8) |  | Y | เลขที่ Running |  | RIG_View_CertNewBusiness | RigVCerId | tx_rig_landing_certnewbusiness | rig_v_cer_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certnewbusiness | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_certnewbusiness | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน |  | RIG_View_CertNewBusiness | CertificCustNo | tx_rig_landing_certnewbusiness | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า |  | RIG_View_CertNewBusiness | CustCode | tx_rig_landing_certnewbusiness | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  | RIG_View_CertNewBusiness | PolicyCode | tx_rig_landing_certnewbusiness | plicy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. |  | RIG_View_CertNewBusiness | PolicyNo | tx_rig_landing_certnewbusiness | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ |  | RIG_View_CertNewBusiness | PolicyYear | tx_rig_landing_certnewbusiness | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. |  | RIG_View_CertNewBusiness | ClassNo | tx_rig_landing_certnewbusiness | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ |  | RIG_View_CertNewBusiness | EffectDate | tx_rig_landing_certnewbusiness | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร |  | RIG_View_CertNewBusiness | TransDate | tx_rig_landing_certnewbusiness | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง |  | RIG_View_CertNewBusiness | ChangeDate | tx_rig_landing_certnewbusiness | change_date |
| 13 |  | life_extra_rate | numeric | 7 10,4 | N | อัตราเบี้ยเพิ่มพิเศษ ชีวิต |  | RIG_View_CertNewBusiness | LifeExtraRate | tx_rig_landing_certnewbusiness | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต |  | RIG_View_CertNewBusiness | LifeInsur | tx_rig_landing_certnewbusiness | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน อบ. |  | RIG_View_CertNewBusiness | AccInsur | tx_rig_landing_certnewbusiness | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedInsur | tx_rig_landing_certnewbusiness | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุนชีวิตทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDInsur | tx_rig_landing_certnewbusiness | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ - ชีวิต |  | RIG_View_CertNewBusiness | LifeE1Prem | tx_rig_landing_certnewbusiness | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต |  | RIG_View_CertNewBusiness | LifePrem | tx_rig_landing_certnewbusiness | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. |  | RIG_View_CertNewBusiness | AccPrem | tx_rig_landing_certnewbusiness | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. |  | RIG_View_CertNewBusiness | MedPrem | tx_rig_landing_certnewbusiness | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertNewBusiness | Age | tx_rig_landing_certnewbusiness | age |
| 23 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน |  | RIG_View_CertNewBusiness | Status | tx_rig_landing_certnewbusiness | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ |  | RIG_View_CertNewBusiness | TPDPrem | tx_rig_landing_certnewbusiness | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยใน |  | RIG_View_CertNewBusiness | MedPlanRateIPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ยสุขภาพผู้ป่วยนอก |  | RIG_View_CertNewBusiness | MedPlanRateOPPrem | tx_rig_landing_certnewbusiness | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม |  | RIG_View_CertNewBusiness | Dental | tx_rig_landing_certnewbusiness | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ยส่วนที่นายจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployer | tx_rig_landing_certnewbusiness | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ยส่วนที่ลูกจ้างจ่าย |  | RIG_View_CertNewBusiness | NetEmployee | tx_rig_landing_certnewbusiness | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด |  | RIG_View_CertNewBusiness | CompCode | tx_rig_landing_certnewbusiness | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ |  | RIG_View_CertNewBusiness | Sex | tx_rig_landing_certnewbusiness | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด |  | RIG_View_CertNewBusiness | Birthday | tx_rig_landing_certnewbusiness | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedDate | tx_rig_landing_certnewbusiness | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertNewBusiness | CreatedBy | tx_rig_landing_certnewbusiness | created_by |


===== PAGE 1308950558 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_certificate_cust =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_certificate_cust | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_cert_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertificateCust | RIG_View_CertificateCust | RigVCertId | tx_rig_landing_certificate_cust | rig_v_cert_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certificate_cust | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certificate_cust | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน | RIG_View_CertificateCust | CertificCustNo | tx_rig_landing_certificate_cust | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_CertificateCust | CustCode | tx_rig_landing_certificate_cust | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertificateCust | PolicyCode | tx_rig_landing_certificate_cust | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_CertificateCust | PolicyNo | tx_rig_landing_certificate_cust | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_CertificateCust | PolicyYear | tx_rig_landing_certificate_cust | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. | RIG_View_CertificateCust | ClassNo | tx_rig_landing_certificate_cust | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertificateCust | EffectDate | tx_rig_landing_certificate_cust | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร | RIG_View_CertificateCust | TransDate | tx_rig_landing_certificate_cust | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง | RIG_View_CertificateCust | ChangeDate | tx_rig_landing_certificate_cust | change_date |
| 13 |  | life_extra_rate | numeric | 7,4 | N | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต | RIG_View_CertificateCust | LifeExtraRate | tx_rig_landing_certificate_cust | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุน...ชีวิต | RIG_View_CertificateCust | LifeInsur | tx_rig_landing_certificate_cust | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน... อบ. | RIG_View_CertificateCust | AccInsur | tx_rig_landing_certificate_cust | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุน...ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedInsur | tx_rig_landing_certificate_cust | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุน...ชีวิตทุพพลภาพ | RIG_View_CertificateCust | TPDInsur | tx_rig_landing_certificate_cust | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย...เพิ่มพิเศษ - ชีวิต | RIG_View_CertificateCust | LifeE1Prem | tx_rig_landing_certificate_cust | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ย......ชีวิต | RIG_View_CertificateCust | LifePrem | tx_rig_landing_certificate_cust | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย...... อบ. | RIG_View_CertificateCust | AccPrem | tx_rig_landing_certificate_cust | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ย......ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedPrem | tx_rig_landing_certificate_cust | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ | RIG_View_CertificateCust | Age | tx_rig_landing_certificate_cust | age |
| 23 |  | status | char | 1 | N | สถานะผู้เอาประกัน | RIG_View_CertificateCust | Status | tx_rig_landing_certificate_cust | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ย......ทุพพลภาพ | RIG_View_CertificateCust | TPDPrem | tx_rig_landing_certificate_cust | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยใน | RIG_View_CertificateCust | MedPlanRateIPPrem | tx_rig_landing_certificate_cust | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยนอก | RIG_View_CertificateCust | MedPlanRateOPPrem | tx_rig_landing_certificate_cust | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ย......ทันตกรรม | RIG_View_CertificateCust | Dental | tx_rig_landing_certificate_cust | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ย......ส่วนที่นายจ้างจ่าย | RIG_View_CertificateCust | NetEmployer | tx_rig_landing_certificate_cust | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ย......ส่วนที่ลูกจ้างจ่าย | RIG_View_CertificateCust | NetEmployee | tx_rig_landing_certificate_cust | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด | RIG_View_CertificateCust | CompCode | tx_rig_landing_certificate_cust | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ | RIG_View_CertificateCust | Sex | tx_rig_landing_certificate_cust | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด | RIG_View_CertificateCust | Birthday | tx_rig_landing_certificate_cust | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertificateCust | CreatedDate | tx_rig_landing_certificate_cust | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertificateCust | CreatedBy | tx_rig_landing_certificate_cust | created_by |


===== PAGE 1308950822 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_claim_death =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_claim_death | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_death_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimDeath | RigVClmDeathId | tx_rig_landing_claimdeath | rig_v_clm_death_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimdeath | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimdeath | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่ใบรับแจ้ง | RIG_View_ClaimDeath | InformNo | tx_rig_landing_claimdeath | inform_no |
| 5 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_ClaimDeath | PolicyCode | tx_rig_landing_claimdeath | policy_code |
| 6 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimDeath | PolicyNo | tx_rig_landing_claimdeath | policy_no |
| 7 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ClaimDeath | PolicyYear | tx_rig_landing_claimdeath | policy_year |
| 8 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimDeath | CertificCustNo | tx_rig_landing_claimdeath | certific_cust_no |
| 9 |  | inform_date | Timestamp |  | N | วันที่รับแจ้ง | RIG_View_ClaimDeath | InformDate | tx_rig_landing_claimdeath | inform_date |
| 10 |  | consider_date | Timestamp |  | N | วันที่รับเอกสารใบพิจารณา | RIG_View_ClaimDeath | ConsiderDate | tx_rig_landing_claimdeath | consider_date |
| 11 |  | death_date | Timestamp |  | N | วันที่เสียชีวิต | RIG_View_ClaimDeath | DeathDate | tx_rig_landing_claimdeath | death_date |
| 12 |  | death_cause_inform | varchar | 3 | N | สาเหตุ-ที่แจ้ง | RIG_View_ClaimDeath | DeathCauseInform | tx_rig_landing_claimdeath | death_cause_inform |
| 13 |  | death_cause_real | varchar | 3 | N | สาเหตุ-ที่ตรวจสอบแล้ว | RIG_View_ClaimDeath | DeathCauseReal | tx_rig_landing_claimdeath | death_cause_real |
| 14 |  | death_cause_remark | varchar | 50 | N | หมายเหตุ | RIG_View_ClaimDeath | DeathCauseRemark | tx_rig_landing_claimdeath | death_cause_remark |
| 15 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์นับจากวันเข้าร่วม | RIG_View_ClaimDeath | PolicyAge | tx_rig_landing_claimdeath | policy_age |
| 16 |  | attn_age | numeric | 10 | N | อายุผู้เอาประกัน | RIG_View_ClaimDeath | AttnAge | tx_rig_landing_claimdeath | attn_age |
| 17 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต | RIG_View_ClaimDeath | EffectDate | tx_rig_landing_claimdeath | effect_date |
| 18 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimDeath | LossRatio | tx_rig_landing_claimdeath | loss_ratio |
| 19 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา | RIG_View_ClaimDeath | ApproveClaim | tx_rig_landing_claimdeath | approve_claim |
| 20 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | LifeInsur | tx_rig_landing_claimdeath | life_insur |
| 21 |  | acc_insur | numeric | 19,4 | N | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | AccInsur | tx_rig_landing_claimdeath | acc_insur |
| 22 |  | life_insur_request | numeric | 19,4 | Y | ทุนชีวิตตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | LifeInsurRequest | tx_rig_landing_claimdeath | life_insur_request |
| 23 |  | acc_insur_request | numeric | 19,4 | Y | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | AccInsurRequest | tx_rig_landing_claimdeath | acc_insur_request |
| 24 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimDeath | ApproveDate | tx_rig_landing_claimdeath | approve_date |
| 25 |  | pay_choice | numeric | 5 | N | การจ่ายสินไหม | RIG_View_ClaimDeath | PayChoice | tx_rig_landing_claimdeath | pay_choice |
| 26 |  | result_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_ClaimDeath | ResultDate | tx_rig_landing_claimdeath | result_date |
| 27 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimDeath | ReceiveNo | tx_rig_landing_claimdeath | receive_no |
| 28 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimDeath | ReceiveDate | tx_rig_landing_claimdeath | receive_date |
| 29 |  | pay_date | Timestamp | 8 | N | วันที่จ่ายเงิน | RIG_View_ClaimDeath | PayDate | tx_rig_landing_claimdeath | pay_date |
| 30 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_ClaimDeath | ConsiderSeq | tx_rig_landing_claimdeath | consider_seq |
| 31 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_ClaimDeath | CreatedDate | tx_rig_landing_claimdeath | created_date |
| 32 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_ClaimDeath | CreatedBy | tx_rig_landing_claimdeath | created_by |


===== PAGE 1309999112 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_claimhealth =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_claimhealth | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-05 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_health_id | int(8) |  | Y | เลขที่ Running RIG_View_ClaimHealth | RIG_View_ClaimHealth | RigVClmHealthId | tx_rig_landing_claimhealth | rig_v_clm_health_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimhealth | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimhealth | period |
| 4 |  | notify_no | varchar | 12 | N | เลขที่รับแจ้ง YYYY/MM/999999 | RIG_View_ClaimHealth | NotifyNo | tx_rig_landing_claimhealth | notify_no |
| 5 |  | notify_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสาร | RIG_View_ClaimHealth | NotifyDate | tx_rig_landing_claimhealth | notify_date |
| 6 |  | follow_up | varchar | 12 | N | Notify เดิม | RIG_View_ClaimHealth | FollowUp | tx_rig_landing_claimhealth | follow_up |
| 7 |  | policy_type | numeric | 10 | N | ประเภทกรมธรรม์ | RIG_View_ClaimHealth | PolicyType | tx_rig_landing_claimhealth | policy_type |
| 8 |  | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ | RIG_View_ClaimHealth | PolicyNo | tx_rig_landing_claimhealth | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_ClaimHealth | PolicyYear | tx_rig_landing_claimhealth | policy_year |
| 10 |  | cerno | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimHealth | Cerno | tx_rig_landing_claimhealth | cerno |
| 11 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimHealth | CustCode | tx_rig_landing_claimhealth | cust_code |
| 12 |  | curr_age | numeric | 10 | N | อายุผู้เอาประกัน (วันเกิด-วันที่บันทึก Notify_No.) | RIG_View_ClaimHealth | CurrAge | tx_rig_landing_claimhealth | curr_age |
| 13 |  | type_claim | numeric | 10 | N | ประเภทการเคลม 0 : เจ็บป่วย 1 : อุบัติเหตุ | RIG_View_ClaimHealth | TypeClaim | tx_rig_landing_claimhealth | type_claim |
| 14 |  | cause_of_claim | varchar | 6 | N | 0 : Motorcycle; 1 : Car; 2 : General; 3 : Murder | RIG_View_ClaimHealth | CauseOfClaim | tx_rig_landing_claimhealth | cause_of_claim |
| 15 |  | cause_detail | varchar | 255 | N | สาเหตุการเกิดอุบัติเหตุ | RIG_View_ClaimHealth | CauseDetail | tx_rig_landing_claimhealth | cause_detail |
| 16 |  | claim_type | varchar | 10 | N | ประเภทเคลม | RIG_View_ClaimHealth | ClaimType | tx_rig_landing_claimhealth | claim_type |
| 17 |  | consider_date | Timestamp |  | N | วันที่พิจารณา | RIG_View_ClaimHealth | ConsiderDate | tx_rig_landing_claimhealth | consider_date |
| 18 |  | rd_no | varchar | 2 | N | รหัสความคุ้มครอง | RIG_View_ClaimHealth | RDNo | tx_rig_landing_claimhealth | rd_no |
| 19 |  | ref_claim_no | varchar | 20 | N | อ้างเลขที่เคลมเดิม | RIG_View_ClaimHealth | RefClaimNo | tx_rig_landing_claimhealth | ref_claim_no |
| 20 |  | attn_age | numeric | 3 | N | อายุผู้เอาประกัน | RIG_View_ClaimHealth | AttnAge | tx_rig_landing_claimhealth | attn_age |
| 21 |  | cer_status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimHealth | CerStatus | tx_rig_landing_claimhealth | cer_status |
| 22 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ClaimHealth | EffectDate | tx_rig_landing_claimhealth | effect_date |
| 23 |  | exp_date | Timestamp |  | N |  | RIG_View_ClaimHealth | ExpDate | tx_rig_landing_claimhealth | exp_date |
| 24 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimHealth | PolicyAge | tx_rig_landing_claimhealth | policy_age |
| 25 |  | accident_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | AccidentDate | tx_rig_landing_claimhealth | accident_date |
| 26 |  | admit_date | Timestamp |  | N | วันที่เข้ารับการรักษา | RIG_View_ClaimHealth | AdmitDate | tx_rig_landing_claimhealth | admit_date |
| 27 |  | discharge_date | Timestamp |  | N | วันที่ออกจากโรงพยาบาล | RIG_View_ClaimHealth | DischargeDate | tx_rig_landing_claimhealth | discharge_date |
| 28 |  | claim_status | numeric | 10 | N | 0:รักษาฯ,1:ผ่าตัด;2:อุบัติเหตุฯ;3:คลอดบุตร | RIG_View_ClaimHealth | ClaimStatus | tx_rig_landing_claimhealth | claim_status |
| 29 |  | claim_by | numeric | 10 | N | 0:โรงพยาบาล (Fax);1:โรงพยาบาล (Credit);2:ใบเสร็จ/ใบแจ้งหนี้ | RIG_View_ClaimHealth | ClaimBy | tx_rig_landing_claimhealth | claim_by |
| 30 |  | claim_request | numeric | 19,4 | N | ค่ารักษาฯ (เรียกร้อง) | RIG_View_ClaimHealth | ClaimRequest | tx_rig_landing_claimhealth | claim_request |
| 31 |  | claim_discount | numeric | 19,4 | N | ส่วนลดค่ารักษาฯ | RIG_View_ClaimHealth | ClaimDiscount | tx_rig_landing_claimhealth | claim_discount |
| 32 |  | claim_no_paid | numeric | 19,4 | N | ส่วนค่ารักษาฯที่ไม่จ่าย | RIG_View_ClaimHealth | ClaimNoPaid | tx_rig_landing_claimhealth | claim_no_paid |
| 33 |  | claim_ex_gratia | numeric | 19,4 | N | ส่วนค่ารักษาฯที่อนุโลมจ่าย | RIG_View_ClaimHealth | ClaimExGratia | tx_rig_landing_claimhealth | claim_ex_gratia |
| 34 |  | claim_right | numeric | 19,4 | N | ค่ารักษาฯ (จ่าย) | RIG_View_ClaimHealth | ClaimRight | tx_rig_landing_claimhealth | claim_right |
| 35 |  | claim_diff_right | numeric | 19,4 | N | ส่วนเกินจากการเคลม | RIG_View_ClaimHealth | ClaimDiffRight | tx_rig_landing_claimhealth | claim_diff_right |
| 36 |  | claim_client_piad | numeric | 19,4 | N | จำนวนเงิน (ผู้เอาประกันต้องจ่าย) | RIG_View_ClaimHealth | ClaimClientPiad | tx_rig_landing_claimhealth | claim_client_piad |
| 37 |  | other_request | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (เรียกร้อง) | RIG_View_ClaimHealth | OtherRequest | tx_rig_landing_claimhealth | other_request |
| 38 |  | other_right | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (จ่าย) | RIG_View_ClaimHealth | OtherRight | tx_rig_landing_claimhealth | other_right |
| 39 |  | other_remark | varchar | 50 | N | หมายเหตุ (ค่าใช้จ่ายเบ็ตเตล็ด) | RIG_View_ClaimHealth | OtherRemark | tx_rig_landing_claimhealth | other_remark |
| 40 |  | approve_claim | varchar | 3 | N | สถานะการเคลม | RIG_View_ClaimHealth | ApproveClaim | tx_rig_landing_claimhealth | approve_claim |
| 41 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimHealth | ApproveDate | tx_rig_landing_claimhealth | approve_date |
| 42 |  | occur_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | OccurDate | tx_rig_landing_claimhealth | occur_date |
| 43 |  | pay_date | Timestamp |  | N | วันที่จ่าย | RIG_View_ClaimHealth | PayDate | tx_rig_landing_claimhealth | pay_date |
| 44 |  | pay_amount | numeric | 19,4 | N | ยอดเงินจ่าย | RIG_View_ClaimHealth | PayAmount | tx_rig_landing_claimhealth | pay_amount |
| 45 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimHealth | CreatedBy | tx_rig_landing_claimhealth | created_date |
| 46 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimHealth | UpdatedDate | tx_rig_landing_claimhealth | created_by |
| 47 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาพยาบาล | RIG_View_ClaimHealth | MedInsur | tx_rig_landing_claimhealth | med_insur |


===== PAGE 1309999109 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_claimtpd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_claimtpd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-05 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_tpd_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimTPD | RigVClmTpdId | tx_rig_landing_claimtpd | rig_v_clm_tpd_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimtpd | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimtpd | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่รับแจ้ง | RIG_View_ClaimTPD | InformNo | tx_rig_landing_claimtpd | inform_no |
| 5 |  | consider_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสารใบพิจารณา | RIG_View_ClaimTPD | ConsiderDate | tx_rig_landing_claimtpd | consider_date |
| 6 |  | policy_code | numeric | 1 | N | ประเภทกธ. (0 : GH 1 : GL 2 : GU 3 : GA 4 : GS) | RIG_View_ClaimTPD | PolicyCode | tx_rig_landing_claimtpd | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimTPD | PolicyNo | tx_rig_landing_claimtpd | policy_no |
| 8 |  | policy_year | numeric | 4 | N | กรมธรรม์ปีที่ | RIG_View_ClaimTPD | PolicyYear | tx_rig_landing_claimtpd | policy_year |
| 9 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimTPD | CertificCustNo | tx_rig_landing_claimtpd | certific_cust_no |
| 10 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimTPD | CustCode | tx_rig_landing_claimtpd | cust_code |
| 11 |  | attn_age | numeric | 4 | N | อายุผู้เอาประกัน | RIG_View_ClaimTPD | AttnAge | tx_rig_landing_claimtpd | attn_age |
| 12 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimTPD | Status | tx_rig_landing_claimtpd | status |
| 13 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ | RIG_View_ClaimTPD | EffectDate | tx_rig_landing_claimtpd | effect_date |
| 14 |  | accident_date | Timestamp |  | N | วันที่ประสบอุบัติเหตุ | RIG_View_ClaimTPD | AccidentDate | tx_rig_landing_claimtpd | accident_date |
| 15 |  | accident_cause | varchar | 50 | N | สาเหตุฯ | RIG_View_ClaimTPD | AccidentCause | tx_rig_landing_claimtpd | accident_cause |
| 16 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimTPD | PolicyAge | tx_rig_landing_claimtpd | policy_age |
| 17 |  | acc_insur | numeric | 19,4 | N | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) | RIG_View_ClaimTPD | ACCInsur | tx_rig_landing_claimtpd | acc_insur |
| 18 |  | tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) | RIG_View_ClaimTPD | TPDInsur | tx_rig_landing_claimtpd | tpd_insur |
| 19 |  | claim_status | numeric | 3 | N | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ | RIG_View_ClaimTPD | ClaimStatus | tx_rig_landing_claimtpd | claim_status |
| 20 |  | prod_claim_code | varchar | 6 | N | รหัสเคลม (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | ProdClaimCode | tx_rig_landing_claimtpd | prod_claim_code |
| 21 |  | indemnity_rate | numeric | 19,4 | N | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur | RIG_View_ClaimTPD | Indemnity_Rate | tx_rig_landing_claimtpd | indemnity_rate |
| 22 |  | indemnity_amt | numeric | 19,4 | N | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | Indemnity_Amt | tx_rig_landing_claimtpd | indemnity_amt |
| 23 |  | tpd_prod_code | varchar | 8 | N | รหัสความคุ้มครองทุพพลภาพ (TPD) | RIG_View_ClaimTPD | TPDProdCode | tx_rig_landing_claimtpd | tpd_prod_code |
| 24 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimTPD | LossRatio | tx_rig_landing_claimtpd | loss_ratio |
| 25 |  | approve_acc_insur | numeric | 19,4 | N | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveACCInsur | tx_rig_landing_claimtpd | approve_acc_insur |
| 26 |  | approve_tpd_insur | numeric | 19,4 | N | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveTPDInsur | tx_rig_landing_claimtpd | approve_tpd_insur |
| 27 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา 0:อนุมัติ; 1:มีเหตุขัดข้อง; 2: ปฎิเสธ; 3:บอกล้าง | RIG_View_ClaimTPD | ApproveClaim | tx_rig_landing_claimtpd | approve_claim |
| 28 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ | RIG_View_ClaimTPD | ApproveDate | tx_rig_landing_claimtpd | approve_date |
| 29 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimTPD | ReceiveNo | tx_rig_landing_claimtpd | receive_no |
| 30 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimTPD | ReceiveDate | tx_rig_landing_claimtpd | receive_date |
| 31 |  | amount | numeric | 19,4 | N | ยอดเงินที่ต้องจ่าย | RIG_View_ClaimTPD | Amount | tx_rig_landing_claimtpd | amount |
| 32 |  | pay_date | Timestamp |  | N | วันที่จ่ายเงิน | RIG_View_ClaimTPD | PayDate | tx_rig_landing_claimtpd | pay_date |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimTPD | CreatedDate | tx_rig_landing_claimtpd | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimTPD | CreatedBy | tx_rig_landing_claimtpd | created_by |


===== PAGE 1308950575 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_company =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_company | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_comp_id | int(8) |  | Y | เลขที่ Running | RIG_View_Company | RigVCompid | tx_rig_landing_company | rig_v_comp_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_company | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_company | period |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | RIG_View_Company | PolicyNo | tx_rig_landing_company | policy_no |
| 5 |  | policy_year | numeric | 10 | Y | ปีกรมธรรม์ | RIG_View_Company | PolicYear | tx_rig_landing_company | policy_year |
| 6 |  | company_code | varchar | 10 | Y | รหัสบริษัท | RIG_View_Company | CompanyCode | tx_rig_landing_company | company_code |
| 7 |  | dbdcode | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_Company | DBDCODE | tx_rig_landing_company | dbdcode |
| 8 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_Company | TypeBusiness | tx_rig_landing_company | type_business |
| 9 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_Company | CreatedDate | tx_rig_landing_company | created_date |
| 10 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_Company | CreatedBy | tx_rig_landing_company | created_by |


===== PAGE 1312260429 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_nature_business =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_nature_business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_view_nature_business_id | int(8) |  | Y | เลขที่ Running | RIG_View_NatureBusiness | RigVCompid | tx_rig_landing_nature_business | rig_view_nature_business_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_nature_business | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_nature_business | period |
| 4 |  | dbd_code | varchar | 20 | N | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_NatureBusiness | DBDCODE | tx_rig_landing_nature_business | dbd_code |
| 5 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_NatureBusiness | TypeBusiness | tx_rig_landing_nature_business | type_business |
| 6 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_NatureBusiness | CreatedDate | tx_rig_landing_nature_business | created_date |
| 7 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_NatureBusiness | CreatedBy | tx_rig_landing_nature_business | created_by |


===== PAGE 1308950546 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_policy_id | int(8) |  | Y | เลขที่ Running | RIG_View_Policy | RigVPolicyId | tx_rig_landing_policy | rig_v_policy_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_policy | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_policy | period |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_Policy | PolicyNo | tx_rig_landing_policy | policy_no |
| 5 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_Policy | PolicyYear | tx_rig_landing_policy | policy_year |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_Policy | PolicyCode | tx_rig_landing_policy | policy_code |
| 7 |  | policy_doc_date | Timestamp |  | N | วันที่..ที่ออกกธ. | RIG_View_Policy | PolicyDocDate | tx_rig_landing_policy | policy_doc_date |
| 8 |  | company_code | varchar | 10 | N | รหัสบริษัทผู้ถือกธ. | RIG_View_Policy | CompanyCode | tx_rig_landing_policy | company_code |
| 9 |  | first_date | Timestamp |  | N | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy | FirstDate | tx_rig_landing_policy | first_date |
| 10 |  | promise_date | Timestamp |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy | PromiseDate | tx_rig_landing_policy | promise_date |
| 11 |  | re_insur_date | Timestamp |  | N | วันที่ต่อสัญญาครั้งต่อไป | RIG_View_Policy | ReInsurDate | tx_rig_landing_policy | re_insur_date |
| 12 |  | lapse_date | Timestamp |  | N | วันที่ Lapse | RIG_View_Policy | LapseDate | tx_rig_landing_policy | lapse_date |
| 13 |  | pay_type | numeric | 10 | N | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี | RIG_View_Policy | PayType | tx_rig_landing_policy | pay_type |
| 14 |  | insum_type | numeric | 10 | N | ลักษณะทุน...0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class | RIG_View_Policy | InsumType | tx_rig_landing_policy | insum_type |
| 15 |  | adjust_dec | numeric | 10 | N | การปัดเศษทุน... (0 : ไม่ปัดเศษ 1 : ปัดเศษ) | RIG_View_Policy | AdjustDec | tx_rig_landing_policy | adjust_dec |
| 16 |  | life_prem_rate | numeric | 19,4 | N | อัตราเบี้ยชีวิต | RIG_View_Policy | LifePremRate | tx_rig_landing_policy | life_prem_rate |
| 17 |  | acc_prem_rate | numeric | 19,4 | N | อัตราเบี้ย อบ. | RIG_View_Policy | AccPremRate | tx_rig_landing_policy | acc_prem_rate |
| 18 |  | med_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedPremRate | tx_rig_landing_policy | med_prem_rate |
| 19 |  | tpd_prem_rate | numeric | 19,4 | N | อัตราเบี้ยทุพพลภาพ | RIG_View_Policy | TPDPremRate | tx_rig_landing_policy | tpd_prem_rate |
| 20 |  | life_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ชีวิต | RIG_View_Policy | LifeExtraRate | tx_rig_landing_policy | life_extra_rate |
| 21 |  | acc_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - อบ. | RIG_View_Policy | AccExtraRate | tx_rig_landing_policy | acc_extra_rate |
| 22 |  | med_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedExtraRate | tx_rig_landing_policy | med_extra_rate |
| 23 |  | tpd_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ทุพพลภาพ | RIG_View_Policy | TPDExtraRate | tx_rig_landing_policy | tpd_extra_rate |
| 24 |  | policy_status | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) | RIG_View_Policy | PolicyStatus | tx_rig_landing_policy | policy_status |
| 25 |  | re_insur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_Policy | ReInsurNo | tx_rig_landing_policy | re_insur_no |
| 26 |  | expreience_refund | boolean | 1 | N | เงินคืนตามประสบการณ์ | RIG_View_Policy | ExpreienceRefund | tx_rig_landing_policy | expreience_refund |
| 27 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_Policy | LifePrem | tx_rig_landing_policy | life_prem |
| 28 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. | RIG_View_Policy | AccPrem | tx_rig_landing_policy | acc_prem |
| 29 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. | RIG_View_Policy | MedPrem | tx_rig_landing_policy | med_prem |
| 30 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_Policy | TPDPrem | tx_rig_landing_policy | tpd_prem |
| 31 |  | cer_class_no | numeric | 10 | N | ประเภทสมาชิก | RIG_View_Policy | CerClassNo | tx_rig_landing_policy | cer_class_no |
| 32 |  | policy_no_old | varchar | 8 | N | เลขที่กรมธรรม์เดิม | RIG_View_Policy | PolicyNoOld | tx_rig_landing_policy | policy_no_old |
| 33 |  | prefix_thai | varchar | 100 | N | คำนำหน้าบริษัท | RIG_View_Policy | PrefixThai | tx_rig_landing_policy | prefix_thai |
| 34 |  | company_name | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ | RIG_View_Policy | CompanyName | tx_rig_landing_policy | company_name |
| 35 |  | company_name_eng | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ภาษาอังกฤษ | RIG_View_Policy | CompanyNameEng | tx_rig_landing_policy | company_name_eng |
| 36 |  | commision_foat | numeric | 19,4 | N | ค่าบำเหน็จ | RIG_View_Policy | CommisionFoat | tx_rig_landing_policy | commision_foat |
| 37 |  | flg_member | numeric | 5 | N | Flag member | RIG_View_Policy | FlgMember | tx_rig_landing_policy | flg_member |
| 38 |  | f_receipt_date | Timestamp |  | N | วันทีออกใบเสร็จใบแรก | RIG_View_Policy | FReceiptDate | tx_rig_landing_policy | f_receipt_date |
| 39 |  | policy_no_hd | varchar | 20 | N | กรมธรรม์แม่สำหรับอ้างอิง | RIG_View_Policy | PolicyNoHD | tx_rig_landing_policy | policy_no_hd |
| 40 |  | funeral_prem | numeric | 19,4 | N | เบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPrem | tx_rig_landing_policy | funeral_prem |
| 41 |  | funeral_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPremRate | tx_rig_landing_policy | funeral_prem_rate |
| 42 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดความคุ้มครอง | RIG_View_Policy | ExpireDate | tx_rig_landing_policy | expire_date |
| 43 |  | qcl_docno | varchar | 20 | N | เลขที่ ปิดการขาย | RIG_View_Policy | QCLDOCNO | tx_rig_landing_policy | qcl_docno |
| 44 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง 0 ประกันชีวิตกลุ่ม 1 โบรกเกอร์ 2 ประกันชีวิตข้าราชการ 3 ช่องทางองค์กร 4 ตัวแทน 5 ผ่านสถาบันการเงิน | RIG_View_Policy | SaleOption | tx_rig_landing_policy | sale_option |
| 45 |  | sale_channel | numeric | 4 | N | ช่องทาง 0 Direct 1 Dai-ichi 2 Co-op | RIG_View_Policy | SaleChannel | tx_rig_landing_policy | sale_channel |
| 46 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_Policy | CreatedDate | tx_rig_landing_policy | created_date |
| 47 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_Policy | CreatedBy | tx_rig_landing_policy | created_by |
| 48 |  | rate_flag | numeric | 1 | N | วิธีคิด Premium Rate | RIG_View_Policy | CalculatePremFrom | tx_rig_landing_policy | rate_flag |


===== PAGE 1336967242 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_prem_rate =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_prem_rate | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By |  | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-04-27 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_rate_id | int(8) |  | Y | เลขที่ Running RIG_View_PremiumRate | RIG_View_PremiumRate | RigVRateID | tx_rig_landing_prem_rate | rig_v_rate_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_prem_rate | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | รอบประมวลผล งวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_prem_rate | period |
| 4 |  | doc_no_uwr | varchar | 20 | N | เลขเอกสาร Underwriter' Report | RIG_View_PremiumRate | DocNoUWR | tx_rig_landing_prem_rate | doc_no_uwr |
| 5 |  | policy_no | varchar | 10 | N | เลขกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyNo | tx_rig_landing_prem_rate | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyYear | tx_rig_landing_prem_rate | policy_year |
| 7 |  | promise_date | Timestamp |  | N | วันที่เริ่มสัญญากรมธรรม์ | RIG_View_PremiumRate | PromiseDate | tx_rig_landing_prem_rate | promise_date |
| 8 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดสัญญากรมธรรม์ | RIG_View_PremiumRate | ExpireDate | tx_rig_landing_prem_rate | expire_date |
| 9 |  | prem_rate_table_code | numeric | 4 | N | รหัสตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableCode | tx_rig_landing_prem_rate | prem_rate_table_code |
| 10 |  | prem_rate_table_name | varchar | 100 | N | ชื่อตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableName | tx_rig_landing_prem_rate | prem_rate_table_name |
| 11 |  | prem_rate_table_type | varchar | 10 | N | ประเภทตารางว่าเป็นตารางอายุหรือตาราง Class | RIG_View_PremiumRate | PremRateTableType | tx_rig_landing_prem_rate | prem_rate_table_type |
| 12 |  | prem_rate_table_kind | varchar | 10 | N | ประเภทตารางว่าเป็นตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableKind | tx_rig_landing_prem_rate | prem_rate_table_kind |
| 13 |  | value_age_or_class | numeric | 4 | N | ค่าของอายุโดยเริ่มที่ 0-99, ค่าของ Class โดยเริ่มที่ 1-จำนวนแผน | RIG_View_PremiumRate | ValueAgeOrClass | tx_rig_landing_prem_rate | value_age_or_class |
| 14 |  | value_gender | varchar | 6 | N | ค่าของเพศ | RIG_View_PremiumRate | ValueGender | tx_rig_landing_prem_rate | value_gender |
| 15 |  | value_life | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองชีวิต | RIG_View_PremiumRate | ValueLife | tx_rig_landing_prem_rate | value_life |
| 16 |  | value_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองอุบัติเหตุ | RIG_View_PremiumRate | ValueAcc | tx_rig_landing_prem_rate | value_acc |
| 17 |  | value_med_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | RIG_View_PremiumRate | ValueMedAcc | tx_rig_landing_prem_rate | value_med_acc |
| 18 |  | value_tpd | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองทุพพลภาพ | RIG_View_PremiumRate | ValueTPD | tx_rig_landing_prem_rate | value_tpd |
| 19 |  | status | numeric | 2 | N | สถานะรายการ | RIG_View_PremiumRate | Status | tx_rig_landing_prem_rate | status |
| 20 |  | import_date | Timestamp |  | N | วันที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportDate | tx_rig_landing_prem_rate | import_date |
| 21 |  | import_user | varchar | 30 | N | ผู้ที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportUser | tx_rig_landing_prem_rate | import_user |
| 22 |  | approve_date | Timestamp |  | N | วันที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveDate | tx_rig_landing_prem_rate | approve_date |
| 23 |  | approve_user | varchar | 30 | N | ผู้ที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveUser | tx_rig_landing_prem_rate | approve_user |
| 24 |  | cancel_date | Timestamp |  | N | วันที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelDate | tx_rig_landing_prem_rate | cancel_date |
| 25 |  | cancel_user | varchar | 30 | N | ผู้ที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelUser | tx_rig_landing_prem_rate | cancel_user |
| 26 |  | cancel_remark | varchar | 30 | N | หมายเหตุการยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelRemark | tx_rig_landing_prem_rate | cancel_remark |
| 27 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_PremiumRate | CreatedDate | tx_rig_landing_prem_rate | created_date |
| 28 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_PremiumRate | CreatedBy | tx_rig_landing_prem_rate | created_by |


===== PAGE 1312260810 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 01. Estimate - Snapshot Landing > tx_est_snap_unname_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_est_snap_unname_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By |  | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-13-13 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_unname_id | int(8) |  | Y | เลขที่ Running RIG_View_UnnamePolicy | RIG_View_UnnamePolicy | RigVUnnameID | tx_rig_landing_unname_policy | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_unname_policy | rig_process_hd_id |
| 3 |  | period | Timestamp |  | N | รอบประมวลผลงวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_unname_policy | period |
| 2 |  | policy_code | numeric | 1 | N | ประเภทกธ. | RIG_View_UnnamePolicy | PolicyCode | tx_rig_landing_unname_policy | policy_code |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_UnnamePolicy | PolicyNo | tx_rig_landing_unname_policy | policy_no |
| 5 |  | mth_status | numeric | 1 | N |  | RIG_View_UnnamePolicy | MthStatus | tx_rig_landing_unname_policy | mth_status |
| 6 |  | pay_type | numeric | 4 | N | ประเภทการชำระเงินของกธ. | RIG_View_UnnamePolicy | Paytype | tx_rig_landing_unname_policy | pay_type |
| 7 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_UnnamePolicy | PolicyYear | tx_rig_landing_unname_policy | policy_year |
| 8 |  | promise_date | Timestamp |  | N | วันเริ่มคุ้มครอง | RIG_View_UnnamePolicy | PromiseDate | tx_rig_landing_unname_policy | promise_date |
| 9 |  | reinsur_date | Timestamp |  | N | วันต่อสัญญาปีต่อไป | RIG_View_UnnamePolicy | ReInsurDate | tx_rig_landing_unname_policy | reinsur_date |
| 10 |  | total_life | numeric | 19,4 | N | เบี้ย.ชีวิต | RIG_View_UnnamePolicy | TotalLife | tx_rig_landing_unname_policy | total_life |
| 11 |  | total_acc | numeric | 19,4 | N | เบี้ยอบ. | RIG_View_UnnamePolicy | TotalAcc | tx_rig_landing_unname_policy | total_acc |
| 12 |  | total_med | numeric | 19,4 | N | เบี้ย.ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMed | tx_rig_landing_unname_policy | total_med |
| 13 |  | total_tpd | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPD | tx_rig_landing_unname_policy | total_tpd |
| 14 |  | total_ipd | numeric | 19,4 | N | เบี้ยคนไข้ใน | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_ipd |
| 15 |  | total_opd | numeric | 19,4 | N | เบี้ยคนไข้นอก | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_opd |
| 16 |  | total_e1_amt | numeric | 19,4 | N | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ | RIG_View_UnnamePolicy | TotalE1Amt | tx_rig_landing_unname_policy | total_e1_amt |
| 17 |  | total_e1_net | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษรวม | RIG_View_UnnamePolicy | TotalE1Net | tx_rig_landing_unname_policy | total_e1_net |
| 18 |  | grand_total | numeric | 19,4 | N | เบี้ยรวมทั้งหมด | RIG_View_UnnamePolicy | GrandTotal | tx_rig_landing_unname_policy | grand_total |
| 19 |  | company_code | varchar | 10 | N | รหัสบริษัท | RIG_View_UnnamePolicy | CompCode | tx_rig_landing_unname_policy | company_code |
| 20 |  | department_code | varchar | 10 | N | รหัสหน่วยงาน | RIG_View_UnnamePolicy | DeptCode | tx_rig_landing_unname_policy | department_code |
| 21 |  | total_life_insur | numeric | 19,4 | N | ทุนชีวิต | RIG_View_UnnamePolicy | TotalLifeInsur | tx_rig_landing_unname_policy | total_life_insur |
| 22 |  | total_acc_insur | numeric | 19,4 | N | ทุนอบ. | RIG_View_UnnamePolicy | TotalAccInsur | tx_rig_landing_unname_policy | total_acc_insur |
| 23 |  | total_med_insur | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedInsur | tx_rig_landing_unname_policy | total_med_insur |
| 24 |  | total_tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDInsur | tx_rig_landing_unname_policy | total_tpd_insur |
| 25 |  | total_life_amt | numeric | 19,4 | N | จำนวนราย-ชีวิต | RIG_View_UnnamePolicy | TotalLifeAmt | tx_rig_landing_unname_policy | total_life_amt |
| 26 |  | total_acc_amt | numeric | 19,4 | N | จำนวนราย- อบ. | RIG_View_UnnamePolicy | TotalAccAmt | tx_rig_landing_unname_policy | total_acc_amt |
| 27 |  | total_med_amt | numeric | 19,4 | N | จำนวนราย-ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedAmt | tx_rig_landing_unname_policy | total_med_amt |
| 28 |  | total_tpd_amt | numeric | 19,4 | N | จำนวนราย-ทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDAmt | tx_rig_landing_unname_policy | total_tpd_amt |
| 29 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | dental |
| 30 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_UnnamePolicy | DocNo | tx_rig_landing_unname_policy | doc_no |
| 31 |  | reInsur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_UnnamePolicy | ReInsur_No | tx_rig_landing_unname_policy | reInsur_no |
| 32 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_UnnamePolicy | CreatedDate | tx_rig_landing_unname_policy | created_date |
| 33 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_UnnamePolicy | CreatedBy | tx_rig_landing_unname_policy | created_by |
| 34 |  | period_date | Timestamp |  | N | งวดการคำนวณ | RIG_View_UnnamePolicy | Period | tx_rig_landing_unname_policy | period_date |
| 35 |  | no_previous | numeric | 4 | N | จำนวนคนงวดก่อนหน้า | RIG_View_UnnamePolicy | LastBill | tx_rig_landing_unname_policy | no_previous |
| 36 |  | no_additions | numeric | 4 | N | จำนวนคนงวดเพิ่ม | RIG_View_UnnamePolicy | Additions | tx_rig_landing_unname_policy | no_additions |
| 37 |  | no_terminations | numeric | 4 | N | จำนวนคนงวดยกเลิก | RIG_View_UnnamePolicy | Terminations | tx_rig_landing_unname_policy | no_terminations |
| 38 |  | no_total | numeric | 4 | N | จำนวนคนรวม | RIG_View_UnnamePolicy | total | tx_rig_landing_unname_policy | no_total |


===== PAGE 1312096890 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing =====
- tx_act_snap_cert_inforce
- tx_act_snap_unname_policy
- tx_act_snap_policy
- tx_act_snap_nature_business
- tx_act_snap_investigation_expense
- tx_act_snap_gl_sophead
- tx_act_snap_exprefund
- tx_act_snap_company
- tx_act_snap_claimtpd
- tx_act_snap_claimhealth
- tx_act_snap_claim_death
- tx_act_snap_certificate_cust
- tx_act_snap_certalteration


===== PAGE 1312096922 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_cert_inforce =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_cert_inforce | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-21 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_pol_inforce_id | int(8) |  | N | เลขที่ Running จากประกันกลุ่ม |  | RIG_View_CertInforce | rig_v_pol_inforce_id | tx_rig_landing_cert_inforce | rig_v_pol_inforce_id |
| 2 | FK | rig_process_hd_id | int(8) |  | N | เลขที่ process id จาก batch |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_cert_inforce | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | งวดทำรายการ |  | tx_rig_process_hd | period | tx_rig_landing_cert_inforce | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร |  | RIG_View_CertInforce | DOCNO | tx_rig_landing_cert_inforce | doc_no |
| 5 |  | policy_no | varchar | 20 | N | เลขกรมธรรม์ |  | RIG_View_CertInforce | PolicyNo | tx_rig_landing_cert_inforce | policy_no |
| 6 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ |  | RIG_View_CertInforce | EffectDate | tx_rig_landing_cert_inforce | effect_date |
| 7 |  | end_date | Timestamp |  | N | วัันที่สิ้นสุด |  | RIG_View_CertInforce | EndDate | tx_rig_landing_cert_inforce | end_date |
| 8 |  | change_date | Timestamp |  | N | วันที่มีผลเปลี่ยนแปลง |  | RIG_View_CertInforce | ChangeDate | tx_rig_landing_cert_inforce | change_date |
| 9 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า |  | RIG_View_CertInforce | CerNo | tx_rig_landing_cert_inforce | cer_no |
| 10 |  | comp_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompCode | tx_rig_landing_cert_inforce | comp_code |
| 11 |  | cust_code | varchar | 20 | N | รหัสลูกค้า |  | RIG_View_CertInforce | CustCode | tx_rig_landing_cert_inforce | cust_code |
| 12 |  | med_rate | varchar | 1 | N | อัตราเบี้ยสุขภาพ |  | RIG_View_CertInforce | MedRate | tx_rig_landing_cert_inforce | med_rate |
| 13 |  | age | numeric | 5 | N | อายุ |  | RIG_View_CertInforce | Age | tx_rig_landing_cert_inforce | age |
| 14 |  | sex | numeric | 5 | N | เพศ |  | RIG_View_CertInforce | Sex | tx_rig_landing_cert_inforce | sex |
| 15 |  | count_of_day | numeric | 10 | N | จำนวนวันที่มีผล |  | RIG_View_CertInforce | CountOfDay | tx_rig_landing_cert_inforce | count_of_day |
| 16 |  | life_insur | numeric | 19,4 | N | ทุน - ชีวิต |  | RIG_View_CertInforce | LifeInsur | tx_rig_landing_cert_inforce | life_insur |
| 17 |  | cremat_insur | numeric | 19,4 | N | ทุน - ค่าปลงศพ |  | RIG_View_CertInforce | CrematInsur | tx_rig_landing_cert_inforce | cremat_insur |
| 18 |  | acc_insur | numeric | 19,4 | N | ทุน - อุบัติเหตุ |  | RIG_View_CertInforce | AccInsur | tx_rig_landing_cert_inforce | acc_insur |
| 19 |  | med_insur | numeric | 19,4 | N | ทุน - ค่่ารักษา |  | RIG_View_CertInforce | MedInsur | tx_rig_landing_cert_inforce | med_insur |
| 20 |  | tpd_insur | numeric | 19,4 | N | ทุน - ทุพพลภาพ |  | RIG_View_CertInforce | TPDInsur | tx_rig_landing_cert_inforce | tpd_insur |
| 21 |  | life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | LifePrem | tx_rig_landing_cert_inforce | life_prem |
| 22 |  | life_e1_rate | numeric | 19,4 | N | อัตราเบี้ย Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Rate | tx_rig_landing_cert_inforce | life_e1_rate |
| 23 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย - Extra 1 คิดรายคน |  | RIG_View_CertInforce | LifeE1Prem | tx_rig_landing_cert_inforce | life_e1_prem |
| 24 |  | cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | CrematPrem | tx_rig_landing_cert_inforce | cremat_prem |
| 25 |  | acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | AccPrem | tx_rig_landing_cert_inforce | acc_prem |
| 26 |  | med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่่ารักษาพยาบาล |  | RIG_View_CertInforce | MedAccPrem | tx_rig_landing_cert_inforce | med_acc_prem |
| 27 |  | tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | TPDPrem | tx_rig_landing_cert_inforce | tpd_prem |
| 28 |  | ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | IPDPrem | tx_rig_landing_cert_inforce | ipd_prem |
| 29 |  | opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | OPDPrem | tx_rig_landing_cert_inforce | opd_prem |
| 30 |  | major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | MajorPlanPrem | tx_rig_landing_cert_inforce | major_plan_prem |
| 31 |  | dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | DentalPrem | tx_rig_landing_cert_inforce | dental_prem |
| 32 |  | mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | MatherPrem | tx_rig_landing_cert_inforce | mather_prem |
| 33 |  | hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | HBPrem | tx_rig_landing_cert_inforce | hb_prem |
| 34 |  | status_member | varchar | 1 | N | สถานะความคุ้มครอง |  | RIG_View_CertInforce | StatusMember | tx_rig_landing_cert_inforce | status_member |
| 35 |  | status | numeric | 10 | N | สถานะการใช้งาน |  | RIG_View_CertInforce | Status | tx_rig_landing_cert_inforce | status |
| 36 |  | approved_date | Timestamp |  | N | วันที่อนุมัติ |  | RIG_View_CertInforce | ApprovedDate | tx_rig_landing_cert_inforce | approved_date |
| 37 |  | total_prem | numeric | 19,4 | N | เบี้ยรวมทั้งหมด |  | RIG_View_CertInforce | TotalPrem | tx_rig_landing_cert_inforce | total_prem |
| 38 |  | opd_lab_prem | numeric | 19,4 | N | เบี้ย OPD Lab รวมทั้งหมด |  | RIG_View_CertInforce | OPDLabPrem | tx_rig_landing_cert_inforce | opd_lab_prem |
| 39 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร |  | RIG_View_CertInforce | DOCDate | tx_rig_landing_cert_inforce | doc_date |
| 40 |  | company_code | varchar | 20 | N | รหัสบริษัท |  | RIG_View_CertInforce | CompanyCode | tx_rig_landing_cert_inforce | company_code |
| 41 |  | company_head_code | varchar | 20 | N | รหัสบริษัทต้นสังกัด |  | RIG_View_CertInforce | CompanyHeadCode | tx_rig_landing_cert_inforce | company_head_code |
| 42 |  | re_insure_no | varchar | 20 | N | เลขที่ี่ประกันต่อ |  | RIG_View_CertInforce | ReInsureNo | tx_rig_landing_cert_inforce | re_insure_no |
| 43 |  | policy_name | varchar | 200 | N | ชื่อกรมธรรม์ |  | RIG_View_CertInforce | PolicyName | tx_rig_landing_cert_inforce | policy_name |
| 44 |  | company_name | varchar | 200 | N | ชื่ื่อ บริษัทในเครือ |  | RIG_View_CertInforce | CompanyName | tx_rig_landing_cert_inforce | company_name |
| 45 |  | promise_date | Timestamp |  | N | วันที่เริ่มคุ้มครองกรมธรรม์ |  | RIG_View_CertInforce | PromiseDate | tx_rig_landing_cert_inforce | promise_date |
| 46 |  | pol_end_date | Timestamp |  | N | วันที่สิ้นสุดกรมธรรม์ |  | RIG_View_CertInforce | PolEndDate | tx_rig_landing_cert_inforce | pol_end_date |
| 47 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ |  | RIG_View_CertInforce | PolicyYear | tx_rig_landing_cert_inforce | policy_year |
| 48 |  | tax_year | numeric | 10 | N | ปีภาษี |  | RIG_View_CertInforce | TaxYear | tx_rig_landing_cert_inforce | tax_year |
| 49 |  | pay_type | numeric | 10 | N | ปีระเภทการจ่าย |  | RIG_View_CertInforce | PayType | tx_rig_landing_cert_inforce | pay_type |
| 50 |  | lot_no | numeric | 10 | N | งวดที่ |  | RIG_View_CertInforce | LotNo | tx_rig_landing_cert_inforce | lot_no |
| 51 |  | sum_life_prem | numeric | 19,4 | N | เบี้ย - ชีวิต |  | RIG_View_CertInforce | SumLifePrem | tx_rig_landing_cert_inforce | sum_life_prem |
| 52 |  | sum_life_e1_prem | numeric | 19,4 | N | เบี้ย - ชีวิตExtra 1 คิดรายคน |  | RIG_View_CertInforce | SumLifeE1Prem | tx_rig_landing_cert_inforce | sum_life_e1_prem |
| 53 |  | sum_cremat_prem | numeric | 19,4 | N | เบี้ย - ค่าปลงศพ |  | RIG_View_CertInforce | SumCrematPrem | tx_rig_landing_cert_inforce | sum_cremat_prem |
| 54 |  | sum_acc_prem | numeric | 19,4 | N | เบี้ย - อุบัติเหตุ |  | RIG_View_CertInforce | SumAccPrem | tx_rig_landing_cert_inforce | sum_acc_prem |
| 55 |  | sum_med_acc_prem | numeric | 19,4 | N | เบี้ย - ค่ารักษาพยาบาล |  | RIG_View_CertInforce | SumMedAccPrem | tx_rig_landing_cert_inforce | sum_med_acc_prem |
| 56 |  | sum_tpd_prem | numeric | 19,4 | N | เบี้ย - ทุพพลภาพ |  | RIG_View_CertInforce | SumTPDPrem | tx_rig_landing_cert_inforce | sum_tpd_prem |
| 57 |  | sum_ipd_prem | numeric | 19,4 | N | เบี้ย - คนไข้ใน |  | RIG_View_CertInforce | SumIPDPrem | tx_rig_landing_cert_inforce | sum_ipd_prem |
| 58 |  | sum_opd_prem | numeric | 19,4 | N | เบี้ย - คนไข้นอก |  | RIG_View_CertInforce | SumOPDPrem | tx_rig_landing_cert_inforce | sum_opd_prem |
| 59 |  | sum_major_plan_prem | numeric | 19,4 | N | เบี้ย - คนไข้ในเพิ่มพิเศษ |  | RIG_View_CertInforce | SumMajorPlanPrem | tx_rig_landing_cert_inforce | sum_major_plan_prem |
| 60 |  | sum_dental_prem | numeric | 19,4 | N | เบี้ย - ทันตกรรม |  | RIG_View_CertInforce | SumDentalPrem | tx_rig_landing_cert_inforce | sum_dental_prem |
| 61 |  | sum_mather_prem | numeric | 19,4 | N | เบี้ย - คลอดบุตร |  | RIG_View_CertInforce | SumMatherPrem | tx_rig_landing_cert_inforce | sum_mather_prem |
| 62 |  | sum_hb_prem | numeric | 19,4 | N | เบี้ย - ชดเชยรายวัน |  | RIG_View_CertInforce | SumHBPrem | tx_rig_landing_cert_inforce | sum_hb_prem |
| 63 |  | sum_total_prem | numeric | 19,4 | N | เบี้ย - รวมทั้งหมด |  | RIG_View_CertInforce | SumTotalPrem | tx_rig_landing_cert_inforce | sum_total_prem |
| 64 |  | sum_opd_lab_prem | numeric | 2,2 | N | เบี้ยรวม OPD Lab |  | RIG_View_CertInforce | SumOPDLabPrem | tx_rig_landing_cert_inforce | sum_opd_lab_prem |
| 65 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ |  | RIG_View_CertInforce | CreatedDate | tx_rig_landing_cert_inforce | created_date |
| 66 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ |  | RIG_View_CertInforce | CreatedBy | tx_rig_landing_cert_inforce | created_by |
| 67 |  | period_date | Timestamp |  | N | วันที่เริ่มงวด |  | RIG_View_CertInforce | PeriodDate | tx_rig_landing_cert_inforce | period_date |


===== PAGE 1312096950 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_certalteration =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_certalteration | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_alter_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertAlteration | RIG_View_CertAlteration | RigVAlterId | tx_rig_landing_certalteration | rig_v_alter_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certalteration | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certalteration | period |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร (MM64-XXXXX) | RIG_View_CertAlteration | DocNo | tx_rig_landing_certalteration | doc_no |
| 5 |  | doc_date | Timestamp |  | N | วันที่เอกสาร (Alteration Date) | RIG_View_CertAlteration | DocDate | tx_rig_landing_certalteration | doc_date |
| 6 |  | trans_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_CertAlteration | TransDate | tx_rig_landing_certalteration | trans_date |
| 7 |  | mth_status | numeric | 1 | N | งวด 0 : งวดปกติ 1 : งวดเพิ่มเติม | RIG_View_CertAlteration | MthStatus | tx_rig_landing_certalteration | mth_status |
| 8 |  | policy_no | varchar | 8 | N | สถานะกรมธรรม์ | RIG_View_CertAlteration | PolicyNo | tx_rig_landing_certalteration | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_CertAlteration | PolicyYear | tx_rig_landing_certalteration | policy_year |
| 10 |  | doc_status | numeric | 5 | N | สถานะเอกสาร | RIG_View_CertAlteration | DocStatus | tx_rig_landing_certalteration | doc_status |
| 11 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertAlteration | PolicyCode | tx_rig_landing_certalteration | policy_code |
| 12 |  | certific_cust_no | varchar | 8 | N | เลขที่ี่ Cerno สมาชิก | RIG_View_CertAlteration | CertificCustNo | tx_rig_landing_certalteration | certific_cust_no |
| 13 |  | custcode | varchar | 10 | N | เลขที่ Custcode สมาชิก | RIG_View_CertAlteration | Custcode | tx_rig_landing_certalteration | custcode |
| 14 |  | comp_code_before | varchar | 10 | N | รหัสบริษัทก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeBefore | tx_rig_landing_certalteration | comp_code_before |
| 15 |  | comp_code_after | varchar | 10 | N | รหัสบริษัทหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | CompCodeAfter | tx_rig_landing_certalteration | comp_code_after |
| 16 |  | dept_code_before | varchar | 10 | N | รหัสหน่วยงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeBefore | tx_rig_landing_certalteration | dept_code_before |
| 17 |  | dept_code_after | varchar | 10 | N | รหัสหน่วยงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DeptCodeAfter | tx_rig_landing_certalteration | dept_code_after |
| 18 |  | status_after | varchar | 1 | N | Status หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusAfter | tx_rig_landing_certalteration | status_after |
| 19 |  | status_before | varchar | 1 | N | Status ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | StatusBefore | tx_rig_landing_certalteration | status_before |
| 20 |  | salary_before | numeric | 19,4 | N | เงินเดือนก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryBefore | tx_rig_landing_certalteration | salary_before |
| 21 |  | salary_after | numeric | 19,4 | N | เงินเดือนหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | SalaryAfter | tx_rig_landing_certalteration | salary_after |
| 22 |  | emp_no_before | varchar | 30 | N | รหัสพนักงานก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoBefore | tx_rig_landing_certalteration | emp_no_before |
| 23 |  | emp_no_after | varchar | 30 | N | รหัสพนักงานหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | EmpNoAfter | tx_rig_landing_certalteration | emp_no_after |
| 24 |  | change_date_before | Timestamp |  | N | Change Date ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateBefore | tx_rig_landing_certalteration | change_date_before |
| 25 |  | change_date_after | Timestamp |  | N | Change Date หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ChangeDateAfter | tx_rig_landing_certalteration | change_date_after |
| 26 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertAlteration | EffectDate | tx_rig_landing_certalteration | effect_date |
| 27 |  | effect_date_before | Timestamp |  | N | วันที่มีผลบังคับก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | EffectDateBefore | tx_rig_landing_certalteration | effect_date_before |
| 28 |  | class_no_before | numeric | 3 | N | Class No. ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoBefore | tx_rig_landing_certalteration | class_no_before |
| 29 |  | class_no_after | numeric | 3 | N | Class No. หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | ClassNoAfter | tx_rig_landing_certalteration | class_no_after |
| 30 |  | count_of_date | numeric | 10 | N | จำนวนวัน | RIG_View_CertAlteration | CountOfDate | tx_rig_landing_certalteration | count_of_date |
| 31 |  | life_insur_before | numeric | 19,4 | N | ทุนชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurBefore | tx_rig_landing_certalteration | life_insur_before |
| 32 |  | acc_insur_before | numeric | 19,4 | N | ทุน อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurBefore | tx_rig_landing_certalteration | acc_insur_before |
| 33 |  | med_insur_before | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurBefore | tx_rig_landing_certalteration | med_insur_before |
| 34 |  | tpd_insur_before | numeric | 19,4 | N | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurBefore | tx_rig_landing_certalteration | tpd_insur_before |
| 35 |  | life_insur_after | numeric | 19,4 | N | ทุนชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeInsurAfter | tx_rig_landing_certalteration | life_insur_after |
| 36 |  | acc_insur_after | numeric | 19,4 | N | ทุน อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccInsurAfter | tx_rig_landing_certalteration | acc_insur_after |
| 37 |  | med_insur_after | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedInsurAfter | tx_rig_landing_certalteration | med_insur_after |
| 38 |  | tpd_insur_after | numeric | 19,4 | N | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDInsurAfter | tx_rig_landing_certalteration | tpd_insur_after |
| 39 |  | life_prem_before | numeric | 19,4 | N | เบี้ย-ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremBefore | tx_rig_landing_certalteration | life_prem_before |
| 40 |  | acc_prem_before | numeric | 19,4 | N | เบี้ย- อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremBefore | tx_rig_landing_certalteration | acc_prem_before |
| 41 |  | med_prem_before | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremBefore | tx_rig_landing_certalteration | med_prem_before |
| 42 |  | tpd_prem_before | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremBefore | tx_rig_landing_certalteration | tpd_prem_before |
| 43 |  | life_e1_prem_before | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremBefore | tx_rig_landing_certalteration | life_e1_prem_before |
| 44 |  | life_prem_after | numeric | 19,4 | N | เบี้ย-ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifePremAfter | tx_rig_landing_certalteration | life_prem_after |
| 45 |  | acc_prem_after | numeric | 19,4 | N | เบี้ย- อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | AccPremAfter | tx_rig_landing_certalteration | acc_prem_after |
| 46 |  | med_prem_after | numeric | 19,4 | N | เบี้ย-ค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremAfter | tx_rig_landing_certalteration | med_prem_after |
| 47 |  | tpd_prem_after | numeric | 19,4 | N | เบี้ย-ทุพพลภาพ-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | TPDPremAfter | tx_rig_landing_certalteration | tpd_prem_after |
| 48 |  | life_e1_prem_after | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1PremAfter | tx_rig_landing_certalteration | life_e1_prem_after |
| 49 |  | life_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ชีวิต | RIG_View_CertAlteration | LifePremDiff | tx_rig_landing_certalteration | life_prem_diff |
| 50 |  | acc_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย- อบ. | RIG_View_CertAlteration | AccPremDiff | tx_rig_landing_certalteration | acc_prem_diff |
| 51 |  | med_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ค่ารักษาฯ..จาก อบ. | RIG_View_CertAlteration | MedPremDiff | tx_rig_landing_certalteration | med_prem_diff |
| 52 |  | tpd_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ย-ทุพพลภาพ | RIG_View_CertAlteration | TPDPremDiff | tx_rig_landing_certalteration | tpd_prem_diff |
| 53 |  | life_e1_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต | RIG_View_CertAlteration | LifeE1PremDiff | tx_rig_landing_certalteration | life_e1_prem_diff |
| 54 |  | life_e1_rate_before | numeric | 14,2 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateBefore | tx_rig_landing_certalteration | life_e1_rate_before |
| 55 |  | life_e1_rate_after | numeric | 19.4 | N | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | LifeE1RateAfter | tx_rig_landing_certalteration | life_e1_rate_after |
| 56 |  | med_plan_before | numeric | 10 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanBefore | tx_rig_landing_certalteration | med_plan_before |
| 57 |  | med_rate_before | varchar | 1 | N | แผนสุขภาพก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateBefore | tx_rig_landing_certalteration | med_rate_before |
| 58 |  | med_plan_after | numeric | 10 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPlanAfter | tx_rig_landing_certalteration | med_plan_after |
| 59 |  | med_rate_after | varchar | 1 | N | แผนสุขภาพหลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedRateAfter | tx_rig_landing_certalteration | med_rate_after |
| 60 |  | med_prem_ip_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPBefore | tx_rig_landing_certalteration | med_prem_ip_before |
| 61 |  | med_prem_op_before | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPBefore | tx_rig_landing_certalteration | med_prem_op_before |
| 62 |  | dental_before | numeric | 19,4 | N | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalBefore | tx_rig_landing_certalteration | dental_before |
| 63 |  | med_prem_ip_after | numeric | 19,4 | N | เบี้ย-คนไข้ใน-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremIPAfter | tx_rig_landing_certalteration | med_prem_ip_after |
| 64 |  | med_prem_op_after | numeric | 19,4 | N | เบี้ย-คนไข้นอก-หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | MedPremOPAfter | tx_rig_landing_certalteration | med_prem_op_after |
| 65 |  | dental_after | numeric | 19,4 | N | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง | RIG_View_CertAlteration | DentalAfter | tx_rig_landing_certalteration | dental_after |
| 66 |  | med_plan_rate_ip_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้ใน | RIG_View_CertAlteration | MedPlanRateIPPremDiff | tx_rig_landing_certalteration | med_plan_rate_ip_prem_diff |
| 67 |  | med_plan_rate_op_prem_diff | numeric | 19,4 | N | ผลต่างของเบี้ยคนไข้นอก | RIG_View_CertAlteration | MedPlanRateOPPremDiff | tx_rig_landing_certalteration | med_plan_rate_op_prem_diff |
| 68 |  | dental_diff | numeric | 19,4 | N | ผลต่างของเบี้ยทันตกรรม | RIG_View_CertAlteration | DentalDiff | tx_rig_landing_certalteration | dental_diff |
| 69 |  | empyer | numeric | 19,4 | N | จำนวนเงินที่นายจ้างจ่ายให้ | RIG_View_CertAlteration | Empyer | tx_rig_landing_certalteration | empyer |
| 70 |  | empyee | numeric | 19,4 | N | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย | RIG_View_CertAlteration | Empyee | tx_rig_landing_certalteration | empyee |
| 71 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertAlteration | CreatedDate | tx_rig_landing_certalteration | created_date |
| 72 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertAlteration | CreatedBy | tx_rig_landing_certalteration | created_by |


===== PAGE 1312096927 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_certificate_cust =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_certificate_cust | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_cert_id | int(8) |  | Y | เลขที่ Running จาก RIG_View_CertificateCust | RIG_View_CertificateCust | RigVCertId | tx_rig_landing_certificate_cust | rig_v_cert_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running จาก tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_certificate_cust | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_certificate_cust | period |
| 4 |  | certific_cust_no | varchar | 8 | N | รหัสผู้เอาประกัน | RIG_View_CertificateCust | CertificCustNo | tx_rig_landing_certificate_cust | certific_cust_no |
| 5 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_CertificateCust | CustCode | tx_rig_landing_certificate_cust | cust_code |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_CertificateCust | PolicyCode | tx_rig_landing_certificate_cust | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_CertificateCust | PolicyNo | tx_rig_landing_certificate_cust | policy_no |
| 8 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_CertificateCust | PolicyYear | tx_rig_landing_certificate_cust | policy_year |
| 9 |  | class_no | numeric | 3 | N | Class No. | RIG_View_CertificateCust | ClassNo | tx_rig_landing_certificate_cust | class_no |
| 10 |  | effect_date | Timestamp |  | N | วันเดือนปีที่มีผลบังคับ | RIG_View_CertificateCust | EffectDate | tx_rig_landing_certificate_cust | effect_date |
| 11 |  | trans_date | Timestamp |  | N | วันเดือนปีที่ทำเอกสาร | RIG_View_CertificateCust | TransDate | tx_rig_landing_certificate_cust | trans_date |
| 12 |  | change_date | Timestamp |  | N | วันเดือนปีที่เปลี่ยนแปลง | RIG_View_CertificateCust | ChangeDate | tx_rig_landing_certificate_cust | change_date |
| 13 |  | life_extra_rate | numeric | 7,4 | N | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต | RIG_View_CertificateCust | LifeExtraRate | tx_rig_landing_certificate_cust | life_extra_rate |
| 14 |  | life_insur | numeric | 19,4 | N | ทุน...ชีวิต | RIG_View_CertificateCust | LifeInsur | tx_rig_landing_certificate_cust | life_insur |
| 15 |  | acc_insur | numeric | 19,4 | N | ทุน... อบ. | RIG_View_CertificateCust | AccInsur | tx_rig_landing_certificate_cust | acc_insur |
| 16 |  | med_insur | numeric | 19,4 | N | ทุน...ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedInsur | tx_rig_landing_certificate_cust | med_insur |
| 17 |  | tpd_insur | numeric | 19,4 | N | ทุน...ชีวิตทุพพลภาพ | RIG_View_CertificateCust | TPDInsur | tx_rig_landing_certificate_cust | tpd_insur |
| 18 |  | life_e1_prem | numeric | 19,4 | N | เบี้ย...เพิ่มพิเศษ - ชีวิต | RIG_View_CertificateCust | LifeE1Prem | tx_rig_landing_certificate_cust | life_e1_prem |
| 19 |  | life_prem | numeric | 19,4 | N | เบี้ย......ชีวิต | RIG_View_CertificateCust | LifePrem | tx_rig_landing_certificate_cust | life_prem |
| 20 |  | acc_prem | numeric | 19,4 | N | เบี้ย...... อบ. | RIG_View_CertificateCust | AccPrem | tx_rig_landing_certificate_cust | acc_prem |
| 21 |  | med_prem | numeric | 19,4 | N | เบี้ย......ค่ารักษาจาก อบ. | RIG_View_CertificateCust | MedPrem | tx_rig_landing_certificate_cust | med_prem |
| 22 |  | age | numeric | 5 | N | อายุ | RIG_View_CertificateCust | Age | tx_rig_landing_certificate_cust | age |
| 23 |  | status | char | 1 | N | สถานะผู้เอาประกัน | RIG_View_CertificateCust | Status | tx_rig_landing_certificate_cust | status |
| 24 |  | tpd_prem | numeric | 19,4 | N | เบี้ย......ทุพพลภาพ | RIG_View_CertificateCust | TPDPrem | tx_rig_landing_certificate_cust | tpd_prem |
| 25 |  | med_plan_rate_ip_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยใน | RIG_View_CertificateCust | MedPlanRateIPPrem | tx_rig_landing_certificate_cust | med_plan_rate_ip_prem |
| 26 |  | med_plan_rate_op_prem | numeric | 19,4 | N | เบี้ย......สุขภาพผู้ป่วยนอก | RIG_View_CertificateCust | MedPlanRateOPPrem | tx_rig_landing_certificate_cust | med_plan_rate_op_prem |
| 27 |  | dental | numeric | 19,4 | N | เบี้ย......ทันตกรรม | RIG_View_CertificateCust | Dental | tx_rig_landing_certificate_cust | dental |
| 28 |  | net_employer | numeric | 19,4 | N | เบี้ย......ส่วนที่นายจ้างจ่าย | RIG_View_CertificateCust | NetEmployer | tx_rig_landing_certificate_cust | net_employer |
| 29 |  | net_employee | numeric | 19,4 | N | เบี้ย......ส่วนที่ลูกจ้างจ่าย | RIG_View_CertificateCust | NetEmployee | tx_rig_landing_certificate_cust | net_employee |
| 30 |  | comp_code | varchar | 10 | N | รหัสบริษัทที่สังกัด | RIG_View_CertificateCust | CompCode | tx_rig_landing_certificate_cust | comp_code |
| 31 |  | sex | varchar | 1 | N | เพศ | RIG_View_CertificateCust | Sex | tx_rig_landing_certificate_cust | sex |
| 32 |  | birthday | Timestamp |  | N | วันเกิด | RIG_View_CertificateCust | Birthday | tx_rig_landing_certificate_cust | birthday |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_CertificateCust | CreatedDate | tx_rig_landing_certificate_cust | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_CertificateCust | CreatedBy | tx_rig_landing_certificate_cust | created_by |


===== PAGE 1312096930 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_claim_death =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_claim_death | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_death_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimDeath | RigVClmDeathId | tx_rig_landing_claimdeath | rig_v_clm_death_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimdeath | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimdeath | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่ใบรับแจ้ง | RIG_View_ClaimDeath | InformNo | tx_rig_landing_claimdeath | inform_no |
| 5 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_ClaimDeath | PolicyCode | tx_rig_landing_claimdeath | policy_code |
| 6 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimDeath | PolicyNo | tx_rig_landing_claimdeath | policy_no |
| 7 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ClaimDeath | PolicyYear | tx_rig_landing_claimdeath | policy_year |
| 8 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimDeath | CertificCustNo | tx_rig_landing_claimdeath | certific_cust_no |
| 9 |  | inform_date | Timestamp |  | N | วันที่รับแจ้ง | RIG_View_ClaimDeath | InformDate | tx_rig_landing_claimdeath | inform_date |
| 10 |  | consider_date | Timestamp |  | N | วันที่รับเอกสารใบพิจารณา | RIG_View_ClaimDeath | ConsiderDate | tx_rig_landing_claimdeath | consider_date |
| 11 |  | death_date | Timestamp |  | N | วันที่เสียชีวิต | RIG_View_ClaimDeath | DeathDate | tx_rig_landing_claimdeath | death_date |
| 12 |  | death_cause_inform | varchar | 3 | N | สาเหตุ-ที่แจ้ง | RIG_View_ClaimDeath | DeathCauseInform | tx_rig_landing_claimdeath | death_cause_inform |
| 13 |  | death_cause_real | varchar | 3 | N | สาเหตุ-ที่ตรวจสอบแล้ว | RIG_View_ClaimDeath | DeathCauseReal | tx_rig_landing_claimdeath | death_cause_real |
| 14 |  | death_cause_remark | varchar | 50 | N | หมายเหตุ | RIG_View_ClaimDeath | DeathCauseRemark | tx_rig_landing_claimdeath | death_cause_remark |
| 15 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์นับจากวันเข้าร่วม | RIG_View_ClaimDeath | PolicyAge | tx_rig_landing_claimdeath | policy_age |
| 16 |  | attn_age | numeric | 10 | N | อายุผู้เอาประกัน | RIG_View_ClaimDeath | AttnAge | tx_rig_landing_claimdeath | attn_age |
| 17 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต | RIG_View_ClaimDeath | EffectDate | tx_rig_landing_claimdeath | effect_date |
| 18 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimDeath | LossRatio | tx_rig_landing_claimdeath | loss_ratio |
| 19 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา | RIG_View_ClaimDeath | ApproveClaim | tx_rig_landing_claimdeath | approve_claim |
| 20 |  | life_insur | numeric | 19,4 | N | ทุนชีวิต (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | LifeInsur | tx_rig_landing_claimdeath | life_insur |
| 21 |  | acc_insur | numeric | 19,4 | N | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) | RIG_View_ClaimDeath | AccInsur | tx_rig_landing_claimdeath | acc_insur |
| 22 |  | life_insur_request | numeric | 19,4 | Y | ทุนชีวิตตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | LifeInsurRequest | tx_rig_landing_claimdeath | life_insur_request |
| 23 |  | acc_insur_request | numeric | 19,4 | Y | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) | RIG_View_ClaimDeath | AccInsurRequest | tx_rig_landing_claimdeath | acc_insur_request |
| 24 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimDeath | ApproveDate | tx_rig_landing_claimdeath | approve_date |
| 25 |  | pay_choice | numeric | 5 | N | การจ่ายสินไหม | RIG_View_ClaimDeath | PayChoice | tx_rig_landing_claimdeath | pay_choice |
| 26 |  | result_date | Timestamp |  | N | วันที่ทำรายการ | RIG_View_ClaimDeath | ResultDate | tx_rig_landing_claimdeath | result_date |
| 27 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimDeath | ReceiveNo | tx_rig_landing_claimdeath | receive_no |
| 28 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimDeath | ReceiveDate | tx_rig_landing_claimdeath | receive_date |
| 29 |  | pay_date | Timestamp | 8 | N | วันที่จ่ายเงิน | RIG_View_ClaimDeath | PayDate | tx_rig_landing_claimdeath | pay_date |
| 30 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_ClaimDeath | ConsiderSeq | tx_rig_landing_claimdeath | consider_seq |
| 31 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_ClaimDeath | CreatedDate | tx_rig_landing_claimdeath | created_date |
| 32 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_ClaimDeath | CreatedBy | tx_rig_landing_claimdeath | created_by |


===== PAGE 1312096933 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_claimhealth =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_claimhealth | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-05 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_health_id | int(8) |  | Y | เลขที่ Running RIG_View_ClaimHealth | RIG_View_ClaimHealth | RigVClmHealthId | tx_rig_landing_claimhealth | rig_v_clm_health_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimhealth | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimhealth | period |
| 4 |  | notify_no | varchar | 12 | N | เลขที่รับแจ้ง YYYY/MM/999999 | RIG_View_ClaimHealth | NotifyNo | tx_rig_landing_claimhealth | notify_no |
| 5 |  | notify_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสาร | RIG_View_ClaimHealth | NotifyDate | tx_rig_landing_claimhealth | notify_date |
| 6 |  | follow_up | varchar | 12 | N | Notify เดิม | RIG_View_ClaimHealth | FollowUp | tx_rig_landing_claimhealth | follow_up |
| 7 |  | policy_type | numeric | 10 | N | ประเภทกรมธรรม์ | RIG_View_ClaimHealth | PolicyType | tx_rig_landing_claimhealth | policy_type |
| 8 |  | policy_no | varchar | 20 | N | เลขที่กรมธรรม์ | RIG_View_ClaimHealth | PolicyNo | tx_rig_landing_claimhealth | policy_no |
| 9 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | RIG_View_ClaimHealth | PolicyYear | tx_rig_landing_claimhealth | policy_year |
| 10 |  | cerno | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimHealth | Cerno | tx_rig_landing_claimhealth | cerno |
| 11 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimHealth | CustCode | tx_rig_landing_claimhealth | cust_code |
| 12 |  | curr_age | numeric | 10 | N | อายุผู้เอาประกัน (วันเกิด-วันที่บันทึก Notify_No.) | RIG_View_ClaimHealth | CurrAge | tx_rig_landing_claimhealth | curr_age |
| 13 |  | type_claim | numeric | 10 | N | ประเภทการเคลม 0 : เจ็บป่วย 1 : อุบัติเหตุ | RIG_View_ClaimHealth | TypeClaim | tx_rig_landing_claimhealth | type_claim |
| 14 |  | cause_of_claim | varchar | 6 | N | 0 : Motorcycle; 1 : Car; 2 : General; 3 : Murder | RIG_View_ClaimHealth | CauseOfClaim | tx_rig_landing_claimhealth | cause_of_claim |
| 15 |  | cause_detail | varchar | 255 | N | สาเหตุการเกิดอุบัติเหตุ | RIG_View_ClaimHealth | CauseDetail | tx_rig_landing_claimhealth | cause_detail |
| 16 |  | claim_type | varchar | 10 | N | ประเภทเคลม | RIG_View_ClaimHealth | ClaimType | tx_rig_landing_claimhealth | claim_type |
| 17 |  | consider_date | Timestamp |  | N | วันที่พิจารณา | RIG_View_ClaimHealth | ConsiderDate | tx_rig_landing_claimhealth | consider_date |
| 18 |  | rd_no | varchar | 2 | N | รหัสความคุ้มครอง | RIG_View_ClaimHealth | RDNo | tx_rig_landing_claimhealth | rd_no |
| 19 |  | ref_claim_no | varchar | 20 | N | อ้างเลขที่เคลมเดิม | RIG_View_ClaimHealth | RefClaimNo | tx_rig_landing_claimhealth | ref_claim_no |
| 20 |  | attn_age | numeric | 3 | N | อายุผู้เอาประกัน | RIG_View_ClaimHealth | AttnAge | tx_rig_landing_claimhealth | attn_age |
| 21 |  | cer_status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimHealth | CerStatus | tx_rig_landing_claimhealth | cer_status |
| 22 |  | effect_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ClaimHealth | EffectDate | tx_rig_landing_claimhealth | effect_date |
| 23 |  | exp_date | Timestamp |  | N |  | RIG_View_ClaimHealth | ExpDate | tx_rig_landing_claimhealth | exp_date |
| 24 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimHealth | PolicyAge | tx_rig_landing_claimhealth | policy_age |
| 25 |  | accident_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | AccidentDate | tx_rig_landing_claimhealth | accident_date |
| 26 |  | admit_date | Timestamp |  | N | วันที่เข้ารับการรักษา | RIG_View_ClaimHealth | AdmitDate | tx_rig_landing_claimhealth | admit_date |
| 27 |  | discharge_date | Timestamp |  | N | วันที่ออกจากโรงพยาบาล | RIG_View_ClaimHealth | DischargeDate | tx_rig_landing_claimhealth | discharge_date |
| 28 |  | claim_status | numeric | 10 | N | 0:รักษาฯ,1:ผ่าตัด;2:อุบัติเหตุฯ;3:คลอดบุตร | RIG_View_ClaimHealth | ClaimStatus | tx_rig_landing_claimhealth | claim_status |
| 29 |  | claim_by | numeric | 10 | N | 0:โรงพยาบาล (Fax);1:โรงพยาบาล (Credit);2:ใบเสร็จ/ใบแจ้งหนี้ | RIG_View_ClaimHealth | ClaimBy | tx_rig_landing_claimhealth | claim_by |
| 30 |  | claim_request | numeric | 19,4 | N | ค่ารักษาฯ (เรียกร้อง) | RIG_View_ClaimHealth | ClaimRequest | tx_rig_landing_claimhealth | claim_request |
| 31 |  | claim_discount | numeric | 19,4 | N | ส่วนลดค่ารักษาฯ | RIG_View_ClaimHealth | ClaimDiscount | tx_rig_landing_claimhealth | claim_discount |
| 32 |  | claim_no_paid | numeric | 19,4 | N | ส่วนค่ารักษาฯที่ไม่จ่าย | RIG_View_ClaimHealth | ClaimNoPaid | tx_rig_landing_claimhealth | claim_no_paid |
| 33 |  | claim_ex_gratia | numeric | 19,4 | N | ส่วนค่ารักษาฯที่อนุโลมจ่าย | RIG_View_ClaimHealth | ClaimExGratia | tx_rig_landing_claimhealth | claim_ex_gratia |
| 34 |  | claim_right | numeric | 19,4 | N | ค่ารักษาฯ (จ่าย) | RIG_View_ClaimHealth | ClaimRight | tx_rig_landing_claimhealth | claim_right |
| 35 |  | claim_diff_right | numeric | 19,4 | N | ส่วนเกินจากการเคลม | RIG_View_ClaimHealth | ClaimDiffRight | tx_rig_landing_claimhealth | claim_diff_right |
| 36 |  | claim_client_piad | numeric | 19,4 | N | จำนวนเงิน (ผู้เอาประกันต้องจ่าย) | RIG_View_ClaimHealth | ClaimClientPiad | tx_rig_landing_claimhealth | claim_client_piad |
| 37 |  | other_request | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (เรียกร้อง) | RIG_View_ClaimHealth | OtherRequest | tx_rig_landing_claimhealth | other_request |
| 38 |  | other_right | numeric | 19,4 | N | ค่าใช้จ่ายเบ็ดเตล็ดอื่นๆ (จ่าย) | RIG_View_ClaimHealth | OtherRight | tx_rig_landing_claimhealth | other_right |
| 39 |  | other_remark | varchar | 50 | N | หมายเหตุ (ค่าใช้จ่ายเบ็ตเตล็ด) | RIG_View_ClaimHealth | OtherRemark | tx_rig_landing_claimhealth | other_remark |
| 40 |  | approve_claim | varchar | 3 | N | สถานะการเคลม | RIG_View_ClaimHealth | ApproveClaim | tx_rig_landing_claimhealth | approve_claim |
| 41 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | RIG_View_ClaimHealth | ApproveDate | tx_rig_landing_claimhealth | approve_date |
| 42 |  | occur_date | Timestamp |  | N | วันที่เกิดเหตุ | RIG_View_ClaimHealth | OccurDate | tx_rig_landing_claimhealth | occur_date |
| 43 |  | pay_date | Timestamp |  | N | วันที่จ่าย | RIG_View_ClaimHealth | PayDate | tx_rig_landing_claimhealth | pay_date |
| 44 |  | pay_amount | numeric | 19,4 | N | ยอดเงินจ่าย | RIG_View_ClaimHealth | PayAmount | tx_rig_landing_claimhealth | pay_amount |
| 45 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimHealth | CreatedBy | tx_rig_landing_claimhealth | created_date |
| 46 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimHealth | UpdatedDate | tx_rig_landing_claimhealth | created_by |
| 47 |  | med_insur | numeric | 19,4 | N | ทุนค่ารักษาพยาบาล | RIG_View_ClaimHealth | MedInsur | tx_rig_landing_claimhealth | med_insur |


===== PAGE 1312096935 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_claimtpd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_claimtpd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-05 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_clm_tpd_id | int(8) |  | Y | เลขที่ Running | RIG_View_ClaimTPD | RigVClmTpdId | tx_rig_landing_claimtpd | rig_v_clm_tpd_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_claimtpd | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_claimtpd | period |
| 4 |  | inform_no | varchar | 9 | N | เลขที่รับแจ้ง | RIG_View_ClaimTPD | InformNo | tx_rig_landing_claimtpd | inform_no |
| 5 |  | consider_date | Timestamp |  | N | วันที่แจ้ง/รับเอกสารใบพิจารณา | RIG_View_ClaimTPD | ConsiderDate | tx_rig_landing_claimtpd | consider_date |
| 6 |  | policy_code | numeric | 1 | N | ประเภทกธ. (0 : GH 1 : GL 2 : GU 3 : GA 4 : GS) | RIG_View_ClaimTPD | PolicyCode | tx_rig_landing_claimtpd | policy_code |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_ClaimTPD | PolicyNo | tx_rig_landing_claimtpd | policy_no |
| 8 |  | policy_year | numeric | 4 | N | กรมธรรม์ปีที่ | RIG_View_ClaimTPD | PolicyYear | tx_rig_landing_claimtpd | policy_year |
| 9 |  | certific_cust_no | varchar | 8 | N | เลขที่สมาชิกผู้เอาประกัน | RIG_View_ClaimTPD | CertificCustNo | tx_rig_landing_claimtpd | certific_cust_no |
| 10 |  | cust_code | varchar | 10 | N | รหัสลูกค้า | RIG_View_ClaimTPD | CustCode | tx_rig_landing_claimtpd | cust_code |
| 11 |  | attn_age | numeric | 4 | N | อายุผู้เอาประกัน | RIG_View_ClaimTPD | AttnAge | tx_rig_landing_claimtpd | attn_age |
| 12 |  | status | varchar | 1 | N | สถานะผู้เอาประกัน | RIG_View_ClaimTPD | Status | tx_rig_landing_claimtpd | status |
| 13 |  | effect_date | Timestamp |  | N | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ | RIG_View_ClaimTPD | EffectDate | tx_rig_landing_claimtpd | effect_date |
| 14 |  | accident_date | Timestamp |  | N | วันที่ประสบอุบัติเหตุ | RIG_View_ClaimTPD | AccidentDate | tx_rig_landing_claimtpd | accident_date |
| 15 |  | accident_cause | varchar | 50 | N | สาเหตุฯ | RIG_View_ClaimTPD | AccidentCause | tx_rig_landing_claimtpd | accident_cause |
| 16 |  | policy_age | varchar | 6 | N | อายุกรมธรรม์ | RIG_View_ClaimTPD | PolicyAge | tx_rig_landing_claimtpd | policy_age |
| 17 |  | acc_insur | numeric | 19,4 | N | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) | RIG_View_ClaimTPD | ACCInsur | tx_rig_landing_claimtpd | acc_insur |
| 18 |  | tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) | RIG_View_ClaimTPD | TPDInsur | tx_rig_landing_claimtpd | tpd_insur |
| 19 |  | claim_status | numeric | 3 | N | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ | RIG_View_ClaimTPD | ClaimStatus | tx_rig_landing_claimtpd | claim_status |
| 20 |  | prod_claim_code | varchar | 6 | N | รหัสเคลม (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | ProdClaimCode | tx_rig_landing_claimtpd | prod_claim_code |
| 21 |  | indemnity_rate | numeric | 19,4 | N | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur | RIG_View_ClaimTPD | Indemnity_Rate | tx_rig_landing_claimtpd | indemnity_rate |
| 22 |  | indemnity_amt | numeric | 19,4 | N | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) | RIG_View_ClaimTPD | Indemnity_Amt | tx_rig_landing_claimtpd | indemnity_amt |
| 23 |  | tpd_prod_code | varchar | 8 | N | รหัสความคุ้มครองทุพพลภาพ (TPD) | RIG_View_ClaimTPD | TPDProdCode | tx_rig_landing_claimtpd | tpd_prod_code |
| 24 |  | loss_ratio | numeric | 10,4 | N | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | RIG_View_ClaimTPD | LossRatio | tx_rig_landing_claimtpd | loss_ratio |
| 25 |  | approve_acc_insur | numeric | 19,4 | N | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveACCInsur | tx_rig_landing_claimtpd | approve_acc_insur |
| 26 |  | approve_tpd_insur | numeric | 19,4 | N | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) | RIG_View_ClaimTPD | ApproveTPDInsur | tx_rig_landing_claimtpd | approve_tpd_insur |
| 27 |  | approve_claim | numeric | 10 | N | ผลการพิจารณา 0:อนุมัติ; 1:มีเหตุขัดข้อง; 2: ปฎิเสธ; 3:บอกล้าง | RIG_View_ClaimTPD | ApproveClaim | tx_rig_landing_claimtpd | approve_claim |
| 28 |  | approve_date | Timestamp |  | N | วันที่ตรวจสอบ/สั่งงานต่อ | RIG_View_ClaimTPD | ApproveDate | tx_rig_landing_claimtpd | approve_date |
| 29 |  | receive_no | varchar | 8 | N | เลขที่ใบเสร็จ | RIG_View_ClaimTPD | ReceiveNo | tx_rig_landing_claimtpd | receive_no |
| 30 |  | receive_date | Timestamp |  | N | วันที่ออกใบเสร็จ | RIG_View_ClaimTPD | ReceiveDate | tx_rig_landing_claimtpd | receive_date |
| 31 |  | amount | numeric | 19,4 | N | ยอดเงินที่ต้องจ่าย | RIG_View_ClaimTPD | Amount | tx_rig_landing_claimtpd | amount |
| 32 |  | pay_date | Timestamp |  | N | วันที่จ่ายเงิน | RIG_View_ClaimTPD | PayDate | tx_rig_landing_claimtpd | pay_date |
| 33 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ClaimTPD | CreatedDate | tx_rig_landing_claimtpd | created_date |
| 34 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ClaimTPD | CreatedBy | tx_rig_landing_claimtpd | created_by |


===== PAGE 1312096937 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_company =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_company | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_comp_id | int(8) |  | Y | เลขที่ Running | RIG_View_Company | RigVCompid | tx_rig_landing_company | rig_v_comp_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_company | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_company | period |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | RIG_View_Company | PolicyNo | tx_rig_landing_company | policy_no |
| 5 |  | policy_year | numeric | 10 | Y | ปีกรมธรรม์ | RIG_View_Company | PolicYear | tx_rig_landing_company | policy_year |
| 6 |  | company_code | varchar | 10 | Y | รหัสบริษัท | RIG_View_Company | CompanyCode | tx_rig_landing_company | company_code |
| 7 |  | dbdcode | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_Company | DBDCODE | tx_rig_landing_company | dbdcode |
| 8 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_Company | TypeBusiness | tx_rig_landing_company | type_business |
| 9 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_Company | CreatedDate | tx_rig_landing_company | created_date |
| 10 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_Company | CreatedBy | tx_rig_landing_company | created_by |


===== PAGE 1312096954 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_exprefund =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_exprefund | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 27/04/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |  |
| 1 | PK | rig_v_exp_id | int(8) |  | Y | เลขที่ Running RIG_View_ExpRefund | RIG_View_ExpRefund | RigVExpId | tx_rig_landing_exprefund | rig_v_exp_id |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_exprefund | rig_process_hd_id |  |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_exprefund | period |  |
| 4 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_ExpRefund | DocNo | tx_rig_landing_exprefund | doc_no |  |
| 5 |  | doc_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | DocDate | tx_rig_landing_exprefund | doc_date |  |
| 6 |  | at_date | Timestamp |  | N | วันที่จัดทำเอกสาร | RIG_View_ExpRefund | AtDate | tx_rig_landing_exprefund | at_date |  |
| 7 |  | mode_of_payment | numeric | 10 | N | ประเภทการจ่าย | RIG_View_ExpRefund | ModeOfPayment | tx_rig_landing_exprefund | mode_of_payment |  |
| 8 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_ExpRefund | PolicyNo | tx_rig_landing_exprefund | policy_no |  |
| 9 |  | policy_year | numeric | 10 | N | กรมธรรม์ปีที่ | RIG_View_ExpRefund | PolicyYear | tx_rig_landing_exprefund | policy_year |  |
| 10 |  | period_begin_date | Timestamp |  | N | วันที่มีผลบังคับ | RIG_View_ExpRefund | PeriodBeginDate | tx_rig_landing_exprefund | period_begin_date |  |
| 11 |  | period_end_date | Timestamp |  | N | วันที่สิ้นสุด | RIG_View_ExpRefund | PeriodEndDate | tx_rig_landing_exprefund | period_end_date |  |
| 12 |  | cal_date | Timestamp |  | N | วันที่คำนวณ | RIG_View_ExpRefund | CalDate | tx_rig_landing_exprefund | cal_date |  |
| 13 |  | company_code_head | varchar | 20 | N | รหัสผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyCodeHead | tx_rig_landing_exprefund | company_code_head |  |
| 14 |  | company_name_head | varchar | 150 | N | ชื่อผู้ทรงกรรม์ | RIG_View_ExpRefund | CompanyNameHead | tx_rig_landing_exprefund | company_name_head |  |
| 15 |  | company_code | varchar | 20 | N | รหัสบริษัท | RIG_View_ExpRefund | CompanyCode | tx_rig_landing_exprefund | company_code |  |
| 16 |  | company_name | varchar | 150 | N | ชื่อบริษัท | RIG_View_ExpRefund | CompanyName | tx_rig_landing_exprefund | company_name |  |
| 17 |  | lot_no | numeric | 4 | N |  | RIG_View_ExpRefund | LotNo | tx_rig_landing_exprefund | lot_no |  |
| 18 |  | lot_no_all | numeric | 4 | N |  | RIG_View_ExpRefund | LotNoAll | tx_rig_landing_exprefund | lot_no_all |  |
| 19 |  | premium_all | numeric | 19,4 | N | เบี้ยประกันของบริษัท | RIG_View_ExpRefund | PremiumAll | tx_rig_landing_exprefund | premium_all |  |
| 20 |  | premium_all_g | numeric | 19,4 | N | เบี้ยประกันทั้งกลุ่ม | RIG_View_ExpRefund | PremiumAllG | tx_rig_landing_exprefund | premium_all_g |  |
| 21 |  | claim_all | numeric | 19,4 | N | สินไหมจ่าย | RIG_View_ExpRefund | ClaimAll | tx_rig_landing_exprefund | claim_all |  |
| 22 |  | claim_reserve | numeric | 19,4 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReserve | tx_rig_landing_exprefund | claim_reserve |  |
| 23 |  | claim_reserve_percent | numeric | 10 | N | ตั้งสำรองสำหรับสินไหมที่อาจเกิดขึ้นแล้ว แต่ยังไม่ได้จ่าย ณ สิ้นปีกรมธรรม์ | RIG_View_ExpRefund | ClaimReservePercent | tx_rig_landing_exprefund | claim_reserve_percent |  |
| 24 |  | last_year_claim_reserve | numeric | 19,4 | N | เงินสำรองสำหรับสินไหมที่ตั้งไว้ ณ สิ้นปีกรมธรรม์ที่ผ่านมา | RIG_View_ExpRefund | LastYearClaimReserve | tx_rig_landing_exprefund | last_year_claim_reserve |  |
| 25 |  | total_claim | numeric | 19,4 | N | รวมสินไหมทั้งหมด | RIG_View_ExpRefund | TotalClaim | tx_rig_landing_exprefund | total_claim |  |
| 26 |  | total_amt | numeric | 19,4 | N | เบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmt | tx_rig_landing_exprefund | total_amt |  |
| 27 |  | total_amt_percent | numeric | 10 | N | ร้อยละของเบี้ยประกัน-สินไหม | RIG_View_ExpRefund | TotalAmtPercent | tx_rig_landing_exprefund | total_amt_percent |  |
| 28 |  | adj_claim | numeric | 19,4 | N | สินไหมติดลบ ยกยอดมาจากปีก่อน | RIG_View_ExpRefund | ADJClaim | tx_rig_landing_exprefund | adj_claim |  |
| 29 |  | net_amt | numeric | 19,4 | N | ยอดรวมสุทธิ | RIG_View_ExpRefund | NetAmt | tx_rig_landing_exprefund | net_amt |  |
| 30 |  | exp_refund_g_percent | numeric | 10 | N | คืนยอดกี่%ของเงินรวมสุทธิ | RIG_View_ExpRefund | ExpRefundGPercent | tx_rig_landing_exprefund | exp_refund_g_percent |  |
| 31 |  | exp_refund_g | numeric | 19,4 | N | ยอดของทั้งกรรม์ | RIG_View_ExpRefund | ExpRefundG | tx_rig_landing_exprefund | exp_refund_g |  |
| 32 |  | exp_refund | numeric | 19,4 | N | ยอดส่วนของบริษัท | RIG_View_ExpRefund | ExpRefund | tx_rig_landing_exprefund | exp_refund |  |
| 33 |  | invoice_no | varchar | 20 | N | อ้างอิงเลข InvoiceNo ที่นำไปใช้ | RIG_View_ExpRefund | InvoiceNo | tx_rig_landing_exprefund | invoice_no |  |
| 34 |  | beneficiary_companycode | varchar | 20 | N | รหัสบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanycode | tx_rig_landing_exprefund | beneficiary_companycode |  |
| 35 |  | beneficiary_companyname | varchar | 150 | N | ชื่อบริษัทผู้รับผลประโยชน์เงินคืน | RIG_View_ExpRefund | BeneficiaryCompanyname | tx_rig_landing_exprefund | beneficiary_companyname |  |
| 36 |  | type | varchar | 10 | N | ประเภทการคำนวณ | RIG_View_ExpRefund | Type | tx_rig_landing_exprefund | type |  |
| 37 |  | premium_statement | numeric | 19,4 | N | เบี้ยประกันจากStatement(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumStatement | tx_rig_landing_exprefund | premium_statement |  |
| 38 |  | premium_adj | numeric | 19,4 | N | เบี้ยประกันจากAdjust(กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumAdj | tx_rig_landing_exprefund | premium_adj |  |
| 39 |  | premium_inv | numeric | 19,4 | N | เบี้ยประกันจากInvoice (กรณีทำแบบประมาณการ) | RIG_View_ExpRefund | PremiumInv | tx_rig_landing_exprefund | premium_inv |  |
| 40 |  | exp_refund_g_sum | numeric | 19,4 | N | ยอดเงินคืนรวมที่ผ่านการปัดเศษแล้ว | RIG_View_ExpRefund | ExpRefundGSum | tx_rig_landing_exprefund | exp_refund_g_sum |  |
| 41 |  | rd_type | varchar | 20 | N | รหัสความคุ้มครอง | RIG_View_ExpRefund | RDType | tx_rig_landing_exprefund | rd_type |  |
| 42 |  | rd_name | varchar | 50 | N | รายละเอียดความคุ้มครอง | RIG_View_ExpRefund | RDNAME | tx_rig_landing_exprefund | rd_name |  |
| 43 |  | premium | numeric | 19,4 | N | ยอดเบี้ย | RIG_View_ExpRefund | Premium | tx_rig_landing_exprefund | premium |  |
| 44 |  | exp_refund_dt | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ | RIG_View_ExpRefund | ExpRefundDT | tx_rig_landing_exprefund | exp_refund_dt |  |
| 45 |  | premium_e1 | numeric | 19,4 | N | ยอดเบี้ย E1 | RIG_View_ExpRefund | PremiumE1 | tx_rig_landing_exprefund | premium_e1 |  |
| 46 |  | exp_refund_e1 | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์ E1 | RIG_View_ExpRefund | ExpRefundE1 | tx_rig_landing_exprefund | exp_refund_e1 |  |
| 47 |  | flg_cal | boolean | 1 | N | ใช้คำนวณเงินคืนไหม | RIG_View_ExpRefund | FlgCal | tx_rig_landing_exprefund | flg_cal |  |
| 48 |  | exp_refund_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์รายเดือน | RIG_View_ExpRefund | ExpRefundPerM | tx_rig_landing_exprefund | exp_refund_per_m |  |
| 49 |  | exp_refund_e1_per_m | numeric | 19,4 | N | ยอดเงินคืนตามประสบการณ์E1รายเดือน | RIG_View_ExpRefund | ExpRefundE1PerM | tx_rig_landing_exprefund | exp_refund_e1_per_m |  |
| 50 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_ExpRefund | CreatedDate | tx_rig_landing_exprefund | created_date |  |
| 51 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_ExpRefund | CreatedBy | tx_rig_landing_exprefund | created_by |  |
| 52 |  | claim_life | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Life | RIG_View_ExpRefund | ClaimLife | tx_rig_landing_exprefund | claim_life | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 53 |  | claim_add | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง ADD | RIG_View_ExpRefund | ClaimADD | tx_rig_landing_exprefund | claim_add | (#CR_EXREFUND suthanee.sa 27/04/2026) |
| 54 |  | claim_dismem | numeric | 19,4 | N | ยอดเงินเคลมความคุ้มครอง Dismemberment | RIG_View_ExpRefund | ClaimDismem | tx_rig_landing_exprefund | claim_dismem | (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 10/06/2026) |
| 55 |  | pending_life | numeric | 19,4 | N | ยอดรอดำเนินการเคลมความคุ้มครอง Life | RIG_View_ExpRefund | PendingLife | tx_rig_landing_exprefund | pending_life | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 56 |  | pending_add | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง ADD | RIG_View_ExpRefund | PendingADD | tx_rig_landing_exprefund | pending_add | (#CR_EXREFUND suthanee.sa 08/06/2026) |
| 57 |  | pending_dismem | numeric | 19,4 | N | ยอดรอดำเนินการความคุ้มครอง Dismemberment | RIG_View_ExpRefund | PendingDismem | tx_rig_landing_exprefund | pending_dismem | (#CR_EXREFUND suthanee.sa 08/06/2026) (suthanee.sa 10/06/2026) |


===== PAGE 1329922156 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_gl_sophead =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_gl_sophead | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-03-26 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_sop_id | int8 |  | Y | เลขที่ Running | RIG_View_GLSOPHead | RigVSOPID | tx_rig_landing_gl_sophead | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int8 |  | Y | rig_process_hd_id | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_gl_sophead | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | period tx_rig_process_hd | tx_rig_process_hd | period | tx_rig_landing_gl_sophead | period |
| 4 |  | doc_no | varchar | 20 | N | document no | RIG_View_GLSOPHead | DocNo | tx_rig_landing_gl_sophead | doc_no |
| 5 |  | trans_date | datetime | 8 | N | วันที่บันทึกรายการ | RIG_View_GLSOPHead | TransDate | tx_rig_landing_gl_sophead | trans_date |
| 6 |  | period_date | datetime | 8 | N | วันที่บันทึกตามรอบ | RIG_View_GLSOPHead | Period | tx_rig_landing_gl_sophead | period |
| 7 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | RIG_View_GLSOPHead | PolicyNo | tx_rig_landing_gl_sophead | policy_no |
| 8 |  | mth_status | int | 4 | N | สถานะงวด | RIG_View_GLSOPHead | MthStatus | tx_rig_landing_gl_sophead | mth_status |
| 9 |  | pay_type | int | 4 | N | ประเภทการจ่าย | RIG_View_GLSOPHead | Paytype | tx_rig_landing_gl_sophead | pay_type |
| 10 |  | policy_year | int | 4 | N | ปีกรมธรรม์ | RIG_View_GLSOPHead | PolicyYear | tx_rig_landing_gl_sophead | policy_year |
| 11 |  | comp_code | varchar | 10 | N | รหัสบริษัท | RIG_View_GLSOPHead | CompCode | tx_rig_landing_gl_sophead | comp_code |
| 12 |  | prem_life | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_GLSOPHead | PremLife | tx_rig_landing_gl_sophead | prem_life |
| 13 |  | prem_acc | numeric | 19,4 | N | เบี้ย acc | RIG_View_GLSOPHead | PremAcc | tx_rig_landing_gl_sophead | prem_acc |
| 14 |  | prem_med | numeric | 19,4 | N | เบี้ย med | RIG_View_GLSOPHead | PremMed | tx_rig_landing_gl_sophead | prem_med |
| 15 |  | prem_tpd | numeric | 19,4 | N | เบี้ย tpd | RIG_View_GLSOPHead | PremTPD | tx_rig_landing_gl_sophead | prem_tpd |
| 16 |  | prem_e1 | numeric | 19,4 | N | เบี้ยชีวิต extra | RIG_View_GLSOPHead | PremE1 | tx_rig_landing_gl_sophead | prem_e1 |
| 17 |  | total_prem | numeric | 19,4 | N | ผลรวมเบี้ย | RIG_View_GLSOPHead | TotalPrem | tx_rig_landing_gl_sophead | total_prem |
| 18 |  | prem_ip | numeric | 19,4 | N | เบี้ย ipd | RIG_View_GLSOPHead | PremIP | tx_rig_landing_gl_sophead | prem_ip |
| 19 |  | prem_op | numeric | 19,4 | N | เบี้ย opd | RIG_View_GLSOPHead | PremOP | tx_rig_landing_gl_sophead | prem_op |
| 20 |  | prem_dental | numeric | 19,4 | N | เบี้ย dental | RIG_View_GLSOPHead | PremDental | tx_rig_landing_gl_sophead | prem_dental |
| 21 |  | life_insur | numeric | 19,4 | N | ทุน ชีวิต | RIG_View_GLSOPHead | LifeInsur | tx_rig_landing_gl_sophead | life_insur |
| 22 |  | acc_insur | numeric | 19,4 | N | ทุน acc | RIG_View_GLSOPHead | AccInsur | tx_rig_landing_gl_sophead | acc_insur |
| 23 |  | med_insur | numeric | 19,4 | N | ทุน med | RIG_View_GLSOPHead | MedInsur | tx_rig_landing_gl_sophead | med_insur |
| 24 |  | tpd_insur | numeric | 19,4 | N | ทุน tpd | RIG_View_GLSOPHead | TPDInsur | tx_rig_landing_gl_sophead | tpd_insur |
| 25 |  | life_amt | int | 8 | N | จำนวนสมาชิก ชีวิต | RIG_View_GLSOPHead | LifeAmt | tx_rig_landing_gl_sophead | life_amt |
| 26 |  | acc_amt | int | 8 | N | จำนวนสมาชิก acc | RIG_View_GLSOPHead | AccAmt | tx_rig_landing_gl_sophead | acc_amt |
| 27 |  | med_amt | int | 8 | N | จำนวนสมาชิก med | RIG_View_GLSOPHead | MedAmt | tx_rig_landing_gl_sophead | med_amt |
| 28 |  | tpd_amt | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | TPDAmt | tx_rig_landing_gl_sophead | tpd_amt |
| 29 |  | amt_e1 | int | 8 | N | จำนวนสมาชิก tpd | RIG_View_GLSOPHead | AmtE1 | tx_rig_landing_gl_sophead | amt_e1 |
| 30 |  | amt_life_e2 | numeric | 8 | N | จำนวนสมาชิก ชีวิต e2 | RIG_View_GLSOPHead | AmtLifeE2 | tx_rig_landing_gl_sophead | amt_life_e2 |
| 31 |  | amt_acc_e2 | numeric | 8 | N | จำนวนสมาชิก acc e2 | RIG_View_GLSOPHead | AmtAccE2 | tx_rig_landing_gl_sophead | amt_acc_e2 |
| 32 |  | amt_med_e2 | numeric | 8 | N | จำนวนสมาชิก med e2 | RIG_View_GLSOPHead | AmtMedE2 | tx_rig_landing_gl_sophead | amt_med_e2 |
| 33 |  | amt_tpd_e2 | numeric | 8 | N | จำนวนสมาชิก tpd e2 | RIG_View_GLSOPHead | AmtTPDE2 | tx_rig_landing_gl_sophead | amt_tpd_e2 |
| 34 |  | remark | varchar | 255 | N | หมายเหตุ | RIG_View_GLSOPHead | Remark | tx_rig_landing_gl_sophead | remark |
| 35 |  | doc_status | int | 2 | N | สถานะเอกสาร | RIG_View_GLSOPHead | DocStatus | tx_rig_landing_gl_sophead | doc_status |
| 36 |  | edit_date_time | datetime | 8 | N | วันที่แก้ไข | RIG_View_GLSOPHead | EditDateTime | tx_rig_landing_gl_sophead | edit_date_time |
| 37 |  | doc_no_inv | varchar | 20 | N | doc_no_inv | RIG_View_GLSOPHead | DOCNO_INV | tx_rig_landing_gl_sophead | doc_no_inv |
| 38 |  | alter_prem_diff | numeric | 19,4 | N | ผลต่างเบี้ย | RIG_View_GLSOPHead | AlterPremDiff | tx_rig_landing_gl_sophead | alter_prem_diff |
| 39 |  | created_date | datetime |  | N | วันที่สร้างรายการ | RIG_View_GLSOPHead | created_date | tx_rig_landing_gl_sophead | created_date |
| 40 |  | created_by | varchar | 50 | N | ผู้สร้างรายการ | RIG_View_GLSOPHead | created_by | tx_rig_landing_gl_sophead | created_by |
| 41 |  | updated_date | datetime |  | N | วันที่อัพเดทรายการ | RIG_View_GLSOPHead | updated_date | tx_rig_landing_gl_sophead | updated_date |
| 42 |  | updated_by | varchar | 50 | N | ผู้อัพเดทรายการ | RIG_View_GLSOPHead | updated_by | tx_rig_landing_gl_sophead | updated_by |


===== PAGE 1312718910 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_investigation_expense =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_investigation_expense | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_investigation_exp_id | numeric | 8 | Y | เลขที่ Running | RIG_View_InvestigationExpense | RigVUnnameID | tx_rig_landing_investigation_expense | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_investigation_expense | rig_process_hd_id |
| 3 | Index | doc_no | varchar | 20 | Y | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocNo | tx_rig_landing_investigation_expense | doc_no |
| 4 |  | policy_code | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_InvestigationExpense | PolicyCode | tx_rig_landing_investigation_expense | policy_code |
| 5 | Index | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | RIG_View_InvestigationExpense | PolicyNo | tx_rig_landing_investigation_expense | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_InvestigationExpense | PolicyYear | tx_rig_landing_investigation_expense | policy_year |
| 7 |  | effective_date | datetime |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_InvestigationExpense | EffectiveDate | tx_rig_landing_investigation_expense | effective_date |
| 8 |  | cer_no | varchar | 8 | N | เลขที่สมาชิก | RIG_View_InvestigationExpense | CerNo | tx_rig_landing_investigation_expense | cer_no |
| 9 |  | claim_no | varchar | 20 | N | เลขที่สินไหมรับเรื่อง | RIG_View_InvestigationExpense | ClaimNo | tx_rig_landing_investigation_expense | claim_no |
| 10 |  | approved_date | datetime |  | N | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | RIG_View_InvestigationExpense | ApprovedDate | tx_rig_landing_investigation_expense | approved_date |
| 11 |  | event_date | datetime |  | N | วันที่เกิดเหตุ | RIG_View_InvestigationExpense | EventDate | tx_rig_landing_investigation_expense | event_date |
| 12 |  | expense_amount | money |  | N | ค่าใช้จ่ายรวม | RIG_View_InvestigationExpense | ExpenseAmount | tx_rig_landing_investigation_expense | expense_amount |
| 13 |  | doc_date | datetime |  | N | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | RIG_View_InvestigationExpense | DocDate | tx_rig_landing_investigation_expense | doc_date |
| 14 |  | claim_type | varchar | 10 | N | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง | RIG_View_InvestigationExpense | ClaimType | tx_rig_landing_investigation_expense | claim_type |
| 15 |  | inform_date | datetime |  | N | วันที่รับเรื่อง | RIG_View_InvestigationExpense | InformDate | tx_rig_landing_investigation_expense | inform_date |
| 16 |  | invest_seq | int |  | N | ส่งสอบครั้งที่ | RIG_View_InvestigationExpense | InvestSeq | tx_rig_landing_investigation_expense | invest_seq |
| 17 |  | consider_seq | int |  | N | การพิจารณาเคลมครั้งที่ | RIG_View_InvestigationExpense | ConsiderSeq | tx_rig_landing_investigation_expense | consider_seq |
| 18 |  | reinsur_no | varchar | 20 | N | เลขที่ประกันต่อ ( Ref.Reinsurance ) | RIG_View_InvestigationExpense | ReInsurNo | tx_rig_landing_investigation_expense | reinsur_no |
| 19 |  | doc_status | int |  | N | สถานะเอกสาร [0: Active, 2:ยกเลิก] | RIG_View_InvestigationExpense | DocStatus | tx_rig_landing_investigation_expense | doc_status |
| 20 |  | investigation_expense | money |  | N | ค่าใช้จ่าย investigation | RIG_View_InvestigationExpense | InvestiExpense | tx_rig_landing_investigation_expense | investigation_expense |
| 21 |  | medical_expense | money |  | N | ค่าใช้จ่าย medical | RIG_View_InvestigationExpense | MedExpense | tx_rig_landing_investigation_expense | medical_expense |
| 22 |  | legal_expense | money |  | N | ค่าใช้จ่าย legal | RIG_View_InvestigationExpense | LegalExpense | tx_rig_landing_investigation_expense | legal_expense |
|  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | created_date | timestamp |  | Y | วันที่บันทึกรายการ | RIG_View_InvestigationExpense | created_date | tx_rig_landing_investigation_expense | created_date |
| 24 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | RIG_View_InvestigationExpense | created_by | tx_rig_landing_investigation_expense | created_by |


===== PAGE 1312096957 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_nature_business =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_nature_business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_view_nature_business_id | int(8) |  | Y | เลขที่ Running | RIG_View_NatureBusiness | RigVCompid | tx_rig_landing_nature_business | rig_view_nature_business_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y |  | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_nature_business | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_nature_business | period |
| 4 |  | dbd_code | varchar | 20 | N | รหัสกรมพัฒนาธุรกิจการค้า | RIG_View_NatureBusiness | DBDCODE | tx_rig_landing_nature_business | dbd_code |
| 5 |  | type_business | varchar | 250 | N | ประเภทธุรกิจของบริษัท | RIG_View_NatureBusiness | TypeBusiness | tx_rig_landing_nature_business | type_business |
| 6 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_NatureBusiness | CreatedDate | tx_rig_landing_nature_business | created_date |
| 7 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_NatureBusiness | CreatedBy | tx_rig_landing_nature_business | created_by |


===== PAGE 1312096939 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-20 | Description | ข้อมูล snapshot ณ สิ้นเดือน ของกรมธรรม์ประกันกลุ่ม เฉพาะกรมธรรม์ที่ส่ง reinsurance |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_policy_id | int(8) |  | Y | เลขที่ Running | RIG_View_Policy | RigVPolicyId | tx_rig_landing_policy | rig_v_policy_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_policy | rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | งวดทำรายการ | tx_rig_process_hd | period | tx_rig_landing_policy | period |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กธ. | RIG_View_Policy | PolicyNo | tx_rig_landing_policy | policy_no |
| 5 |  | policy_year | numeric | 10 | N | กธ. ปีที่ | RIG_View_Policy | PolicyYear | tx_rig_landing_policy | policy_year |
| 6 |  | policy_code | numeric | 3 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | RIG_View_Policy | PolicyCode | tx_rig_landing_policy | policy_code |
| 7 |  | policy_doc_date | Timestamp |  | N | วันที่..ที่ออกกธ. | RIG_View_Policy | PolicyDocDate | tx_rig_landing_policy | policy_doc_date |
| 8 |  | company_code | varchar | 10 | N | รหัสบริษัทผู้ถือกธ. | RIG_View_Policy | CompanyCode | tx_rig_landing_policy | company_code |
| 9 |  | first_date | Timestamp |  | N | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy | FirstDate | tx_rig_landing_policy | first_date |
| 10 |  | promise_date | Timestamp |  | N | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy | PromiseDate | tx_rig_landing_policy | promise_date |
| 11 |  | re_insur_date | Timestamp |  | N | วันที่ต่อสัญญาครั้งต่อไป | RIG_View_Policy | ReInsurDate | tx_rig_landing_policy | re_insur_date |
| 12 |  | lapse_date | Timestamp |  | N | วันที่ Lapse | RIG_View_Policy | LapseDate | tx_rig_landing_policy | lapse_date |
| 13 |  | pay_type | numeric | 10 | N | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี | RIG_View_Policy | PayType | tx_rig_landing_policy | pay_type |
| 14 |  | insum_type | numeric | 10 | N | ลักษณะทุน...0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class | RIG_View_Policy | InsumType | tx_rig_landing_policy | insum_type |
| 15 |  | adjust_dec | numeric | 10 | N | การปัดเศษทุน... (0 : ไม่ปัดเศษ 1 : ปัดเศษ) | RIG_View_Policy | AdjustDec | tx_rig_landing_policy | adjust_dec |
| 16 |  | life_prem_rate | numeric | 19,4 | N | อัตราเบี้ยชีวิต | RIG_View_Policy | LifePremRate | tx_rig_landing_policy | life_prem_rate |
| 17 |  | acc_prem_rate | numeric | 19,4 | N | อัตราเบี้ย อบ. | RIG_View_Policy | AccPremRate | tx_rig_landing_policy | acc_prem_rate |
| 18 |  | med_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedPremRate | tx_rig_landing_policy | med_prem_rate |
| 19 |  | tpd_prem_rate | numeric | 19,4 | N | อัตราเบี้ยทุพพลภาพ | RIG_View_Policy | TPDPremRate | tx_rig_landing_policy | tpd_prem_rate |
| 20 |  | life_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ชีวิต | RIG_View_Policy | LifeExtraRate | tx_rig_landing_policy | life_extra_rate |
| 21 |  | acc_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - อบ. | RIG_View_Policy | AccExtraRate | tx_rig_landing_policy | acc_extra_rate |
| 22 |  | med_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. | RIG_View_Policy | MedExtraRate | tx_rig_landing_policy | med_extra_rate |
| 23 |  | tpd_extra_rate | numeric | 19,4 | N | อัตราเบี้ย...เพิ่มพิเศษ – ทุพพลภาพ | RIG_View_Policy | TPDExtraRate | tx_rig_landing_policy | tpd_extra_rate |
| 24 |  | policy_status | char | 1 | N | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) | RIG_View_Policy | PolicyStatus | tx_rig_landing_policy | policy_status |
| 25 |  | re_insur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_Policy | ReInsurNo | tx_rig_landing_policy | re_insur_no |
| 26 |  | expreience_refund | boolean | 1 | N | เงินคืนตามประสบการณ์ | RIG_View_Policy | ExpreienceRefund | tx_rig_landing_policy | expreience_refund |
| 27 |  | life_prem | numeric | 19,4 | N | เบี้ยชีวิต | RIG_View_Policy | LifePrem | tx_rig_landing_policy | life_prem |
| 28 |  | acc_prem | numeric | 19,4 | N | เบี้ย อบ. | RIG_View_Policy | AccPrem | tx_rig_landing_policy | acc_prem |
| 29 |  | med_prem | numeric | 19,4 | N | เบี้ยค่ารักษาจาก อบ. | RIG_View_Policy | MedPrem | tx_rig_landing_policy | med_prem |
| 30 |  | tpd_prem | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_Policy | TPDPrem | tx_rig_landing_policy | tpd_prem |
| 31 |  | cer_class_no | numeric | 10 | N | ประเภทสมาชิก | RIG_View_Policy | CerClassNo | tx_rig_landing_policy | cer_class_no |
| 32 |  | policy_no_old | varchar | 8 | N | เลขที่กรมธรรม์เดิม | RIG_View_Policy | PolicyNoOld | tx_rig_landing_policy | policy_no_old |
| 33 |  | prefix_thai | varchar | 100 | N | คำนำหน้าบริษัท | RIG_View_Policy | PrefixThai | tx_rig_landing_policy | prefix_thai |
| 34 |  | company_name | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ | RIG_View_Policy | CompanyName | tx_rig_landing_policy | company_name |
| 35 |  | company_name_eng | varchar | 150 | N | ชื่อผู้ถือกรมธรรม์ภาษาอังกฤษ | RIG_View_Policy | CompanyNameEng | tx_rig_landing_policy | company_name_eng |
| 36 |  | commision_foat | numeric | 19,4 | N | ค่าบำเหน็จ | RIG_View_Policy | CommisionFoat | tx_rig_landing_policy | commision_foat |
| 37 |  | flg_member | numeric | 5 | N | Flag member | RIG_View_Policy | FlgMember | tx_rig_landing_policy | flg_member |
| 38 |  | f_receipt_date | Timestamp |  | N | วันทีออกใบเสร็จใบแรก | RIG_View_Policy | FReceiptDate | tx_rig_landing_policy | f_receipt_date |
| 39 |  | policy_no_hd | varchar | 20 | N | กรมธรรม์แม่สำหรับอ้างอิง | RIG_View_Policy | PolicyNoHD | tx_rig_landing_policy | policy_no_hd |
| 40 |  | funeral_prem | numeric | 19,4 | N | เบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPrem | tx_rig_landing_policy | funeral_prem |
| 41 |  | funeral_prem_rate | numeric | 19,4 | N | อัตราเบี้ยค่าปลงศพ | RIG_View_Policy | FuneralPremRate | tx_rig_landing_policy | funeral_prem_rate |
| 42 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดความคุ้มครอง | RIG_View_Policy | ExpireDate | tx_rig_landing_policy | expire_date |
| 43 |  | qcl_docno | varchar | 20 | N | เลขที่ ปิดการขาย | RIG_View_Policy | QCLDOCNO | tx_rig_landing_policy | qcl_docno |
| 44 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง 0 ประกันชีวิตกลุ่ม 1 โบรกเกอร์ 2 ประกันชีวิตข้าราชการ 3 ช่องทางองค์กร 4 ตัวแทน 5 ผ่านสถาบันการเงิน | RIG_View_Policy | SaleOption | tx_rig_landing_policy | sale_option |
| 45 |  | sale_channel | numeric | 4 | N | ช่องทาง 0 Direct 1 Dai-ichi 2 Co-op | RIG_View_Policy | SaleChannel | tx_rig_landing_policy | sale_channel |
| 46 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_Policy | CreatedDate | tx_rig_landing_policy | created_date |
| 47 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_Policy | CreatedBy | tx_rig_landing_policy | created_by |
| 48 |  | rate_flag | numeric | 1 | N | วิธีคิด Premium Rate | RIG_View_Policy | CalculatePremFrom | tx_rig_landing_policy | rate_flag |


===== PAGE 1336967244 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_prem_rate =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_prem_rate | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-04-27 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_rate_id | int(8) |  | Y | เลขที่ Running RIG_View_PremiumRate | RIG_View_PremiumRate | RigVRateID | tx_rig_landing_prem_rate | rig_v_rate_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_prem_rate | rig_process_hd_id |
| 3 |  | period | numeric | 6 | N | รอบประมวลผล งวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_prem_rate | period |
| 4 |  | doc_no_uwr | varchar | 20 | N | เลขเอกสาร Underwriter' Report | RIG_View_PremiumRate | DocNoUWR | tx_rig_landing_prem_rate | doc_no_uwr |
| 5 |  | policy_no | varchar | 10 | N | เลขกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyNo | tx_rig_landing_prem_rate | policy_no |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ที่ถูกเอาตารางเบี้ยหรืออัตราเบี้ยนี้ไปคิดเบี้ยประกัน | RIG_View_PremiumRate | PolicyYear | tx_rig_landing_prem_rate | policy_year |
| 7 |  | promise_date | Timestamp |  | N | วันที่เริ่มสัญญากรมธรรม์ | RIG_View_PremiumRate | PromiseDate | tx_rig_landing_prem_rate | promise_date |
| 8 |  | expire_date | Timestamp |  | N | วันที่สิ้นสุดสัญญากรมธรรม์ | RIG_View_PremiumRate | ExpireDate | tx_rig_landing_prem_rate | expire_date |
| 9 |  | prem_rate_table_code | numeric | 4 | N | รหัสตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableCode | tx_rig_landing_prem_rate | prem_rate_table_code |
| 10 |  | prem_rate_table_name | varchar | 100 | N | ชื่อตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableName | tx_rig_landing_prem_rate | prem_rate_table_name |
| 11 |  | prem_rate_table_type | varchar | 10 | N | ประเภทตารางว่าเป็นตารางอายุหรือตาราง Class | RIG_View_PremiumRate | PremRateTableType | tx_rig_landing_prem_rate | prem_rate_table_type |
| 12 |  | prem_rate_table_kind | varchar | 10 | N | ประเภทตารางว่าเป็นตารางเบี้ยหรืออัตราเบี้ย | RIG_View_PremiumRate | PremRateTableKind | tx_rig_landing_prem_rate | prem_rate_table_kind |
| 13 |  | value_age_or_class | numeric | 4 | N | ค่าของอายุโดยเริ่มที่ 0-99, ค่าของ Class โดยเริ่มที่ 1-จำนวนแผน | RIG_View_PremiumRate | ValueAgeOrClass | tx_rig_landing_prem_rate | value_age_or_class |
| 14 |  | value_gender | varchar | 6 | N | ค่าของเพศ | RIG_View_PremiumRate | ValueGender | tx_rig_landing_prem_rate | value_gender |
| 15 |  | value_life | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองชีวิต | RIG_View_PremiumRate | ValueLife | tx_rig_landing_prem_rate | value_life |
| 16 |  | value_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองอุบัติเหตุ | RIG_View_PremiumRate | ValueAcc | tx_rig_landing_prem_rate | value_acc |
| 17 |  | value_med_acc | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | RIG_View_PremiumRate | ValueMedAcc | tx_rig_landing_prem_rate | value_med_acc |
| 18 |  | value_tpd | numeric | 14,4 | N | เบี้ยหรืออัตราเบี้ย ความคุ้มครองทุพพลภาพ | RIG_View_PremiumRate | ValueTPD | tx_rig_landing_prem_rate | value_tpd |
| 19 |  | status | numeric | 2 | N | สถานะรายการ | RIG_View_PremiumRate | Status | tx_rig_landing_prem_rate | status |
| 20 |  | import_date | Timestamp |  | N | วันที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportDate | tx_rig_landing_prem_rate | import_date |
| 21 |  | import_user | varchar | 30 | N | ผู้ที่นำเข้าตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ImportUser | tx_rig_landing_prem_rate | import_user |
| 22 |  | approve_date | Timestamp |  | N | วันที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveDate | tx_rig_landing_prem_rate | approve_date |
| 23 |  | approve_user | varchar | 30 | N | ผู้ที่ยืนยันข้อมูลตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | ApproveUser | tx_rig_landing_prem_rate | approve_user |
| 24 |  | cancel_date | Timestamp |  | N | วันที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelDate | tx_rig_landing_prem_rate | cancel_date |
| 25 |  | cancel_user | varchar | 30 | N | ผู้ที่ยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelUser | tx_rig_landing_prem_rate | cancel_user |
| 26 |  | cancel_remark | varchar | 30 | N | หมายเหตุการยกเลิกตารางเบี้ย/อัตราเบี้ย | RIG_View_PremiumRate | CancelRemark | tx_rig_landing_prem_rate | cancel_remark |
| 27 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_PremiumRate | CreatedDate | tx_rig_landing_prem_rate | created_date |
| 28 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_PremiumRate | CreatedBy | tx_rig_landing_prem_rate | created_by |


===== PAGE 1312489524 | Functional Specification > 04. Persistence Specification. > Transaction > 03. Snapshot Landing > 02. Actual - Snapshot Landing > tx_act_snap_unname_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_act_snap_unname_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | Pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-14 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | TB mapping landing | Field mapping landing | TB mapping snapshot | Field mapping snapshot |
| 1 | PK | rig_v_unname_id | int(8) |  | Y | เลขที่ Running RIG_View_UnnamePolicy | RIG_View_UnnamePolicy | RigVUnnameID | tx_rig_landing_unname_policy | rig_v_unname_id |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running tx_rig_process_hd | tx_rig_process_hd | rig_process_hd_id | tx_rig_landing_unname_policy | rig_process_hd_id |
| 3 |  | period | Timestamp |  | N | รอบประมวลผลงวดการคำนวณ | tx_rig_process_hd | Period | tx_rig_landing_unname_policy | period |
| 2 |  | policy_code | numeric | 1 | N | ประเภทกธ. | RIG_View_UnnamePolicy | PolicyCode | tx_rig_landing_unname_policy | policy_code |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | RIG_View_UnnamePolicy | PolicyNo | tx_rig_landing_unname_policy | policy_no |
| 5 |  | mth_status | numeric | 1 | N |  | RIG_View_UnnamePolicy | MthStatus | tx_rig_landing_unname_policy | mth_status |
| 6 |  | pay_type | numeric | 4 | N | ประเภทการชำระเงินของกธ. | RIG_View_UnnamePolicy | Paytype | tx_rig_landing_unname_policy | pay_type |
| 7 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ | RIG_View_UnnamePolicy | PolicyYear | tx_rig_landing_unname_policy | policy_year |
| 8 |  | promise_date | Timestamp |  | N | วันเริ่มคุ้มครอง | RIG_View_UnnamePolicy | PromiseDate | tx_rig_landing_unname_policy | promise_date |
| 9 |  | reinsur_date | Timestamp |  | N | วันต่อสัญญาปีต่อไป | RIG_View_UnnamePolicy | ReInsurDate | tx_rig_landing_unname_policy | reinsur_date |
| 10 |  | total_life | numeric | 19,4 | N | เบี้ย.ชีวิต | RIG_View_UnnamePolicy | TotalLife | tx_rig_landing_unname_policy | total_life |
| 11 |  | total_acc | numeric | 19,4 | N | เบี้ยอบ. | RIG_View_UnnamePolicy | TotalAcc | tx_rig_landing_unname_policy | total_acc |
| 12 |  | total_med | numeric | 19,4 | N | เบี้ย.ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMed | tx_rig_landing_unname_policy | total_med |
| 13 |  | total_tpd | numeric | 19,4 | N | เบี้ยทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPD | tx_rig_landing_unname_policy | total_tpd |
| 14 |  | total_ipd | numeric | 19,4 | N | เบี้ยคนไข้ใน | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_ipd |
| 15 |  | total_opd | numeric | 19,4 | N | เบี้ยคนไข้นอก | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | total_opd |
| 16 |  | total_e1_amt | numeric | 19,4 | N | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ | RIG_View_UnnamePolicy | TotalE1Amt | tx_rig_landing_unname_policy | total_e1_amt |
| 17 |  | total_e1_net | numeric | 19,4 | N | เบี้ยเพิ่มพิเศษรวม | RIG_View_UnnamePolicy | TotalE1Net | tx_rig_landing_unname_policy | total_e1_net |
| 18 |  | grand_total | numeric | 19,4 | N | เบี้ยรวมทั้งหมด | RIG_View_UnnamePolicy | GrandTotal | tx_rig_landing_unname_policy | grand_total |
| 19 |  | company_code | varchar | 10 | N | รหัสบริษัท | RIG_View_UnnamePolicy | CompCode | tx_rig_landing_unname_policy | company_code |
| 20 |  | department_code | varchar | 10 | N | รหัสหน่วยงาน | RIG_View_UnnamePolicy | DeptCode | tx_rig_landing_unname_policy | department_code |
| 21 |  | total_life_insur | numeric | 19,4 | N | ทุนชีวิต | RIG_View_UnnamePolicy | TotalLifeInsur | tx_rig_landing_unname_policy | total_life_insur |
| 22 |  | total_acc_insur | numeric | 19,4 | N | ทุนอบ. | RIG_View_UnnamePolicy | TotalAccInsur | tx_rig_landing_unname_policy | total_acc_insur |
| 23 |  | total_med_insur | numeric | 19,4 | N | ทุนค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedInsur | tx_rig_landing_unname_policy | total_med_insur |
| 24 |  | total_tpd_insur | numeric | 19,4 | N | ทุนทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDInsur | tx_rig_landing_unname_policy | total_tpd_insur |
| 25 |  | total_life_amt | numeric | 19,4 | N | จำนวนราย-ชีวิต | RIG_View_UnnamePolicy | TotalLifeAmt | tx_rig_landing_unname_policy | total_life_amt |
| 26 |  | total_acc_amt | numeric | 19,4 | N | จำนวนราย- อบ. | RIG_View_UnnamePolicy | TotalAccAmt | tx_rig_landing_unname_policy | total_acc_amt |
| 27 |  | total_med_amt | numeric | 19,4 | N | จำนวนราย-ค่ารักษาฯ..จาก อบ. | RIG_View_UnnamePolicy | TotalMedAmt | tx_rig_landing_unname_policy | total_med_amt |
| 28 |  | total_tpd_amt | numeric | 19,4 | N | จำนวนราย-ทุพพลภาพ | RIG_View_UnnamePolicy | TotalTPDAmt | tx_rig_landing_unname_policy | total_tpd_amt |
| 29 |  | dental | numeric | 19,4 | N | เบี้ยทันตกรรม | RIG_View_UnnamePolicy | 0 | tx_rig_landing_unname_policy | dental |
| 30 |  | doc_no | varchar | 20 | N | เลขที่เอกสาร | RIG_View_UnnamePolicy | DocNo | tx_rig_landing_unname_policy | doc_no |
| 31 |  | reInsur_no | varchar | 10 | N | เลขที่กธ. ประกันต่อ | RIG_View_UnnamePolicy | ReInsur_No | tx_rig_landing_unname_policy | reInsur_no |
| 32 |  | created_date | Timestamp |  | N | วันที่บันทึกรายการ | RIG_View_UnnamePolicy | CreatedDate | tx_rig_landing_unname_policy | created_date |
| 33 |  | created_by | varchar | 50 | N | ผู้บันทึกรายการ | RIG_View_UnnamePolicy | CreatedBy | tx_rig_landing_unname_policy | created_by |
| 34 |  | period_date | Timestamp |  | N | งวดการคำนวณ | RIG_View_UnnamePolicy | Period | tx_rig_landing_unname_policy | period_date |
| 35 |  | no_previous | numeric | 4 | N | จำนวนคนงวดก่อนหน้า | RIG_View_UnnamePolicy | LastBill | tx_rig_landing_unname_policy | no_previous |
| 36 |  | no_additions | numeric | 4 | N | จำนวนคนงวดเพิ่ม | RIG_View_UnnamePolicy | Additions | tx_rig_landing_unname_policy | no_additions |
| 37 |  | no_terminations | numeric | 4 | N | จำนวนคนงวดยกเลิก | RIG_View_UnnamePolicy | Terminations | tx_rig_landing_unname_policy | no_terminations |
| 38 |  | no_total | numeric | 4 | N | จำนวนคนรวม | RIG_View_UnnamePolicy | total | tx_rig_landing_unname_policy | no_total |


===== PAGE 1308950539 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables =====
(empty page)


===== PAGE 1313145122 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables =====
- tx_stg_est_all_policy
- tx_stg_est_tpd_claim
- tx_stg_est_prem_layer
- tx_stg_est_policy_1y
- tx_stg_est_list_dt
- tx_stg_est_inforce_member
- tx_stg_est_health_claim
- tx_stg_est_death_claim


===== PAGE 1307935298 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_all_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_all_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | ตารางข้อมูลตั้งต้น (Input) ของระบบ Group RI สำหรับการประมวลผล Estimate ซึ่งรวบรวมข้อมูลกรมธรรม์ทั้งหมดที่เข้าเงื่อนไขก่อนการประมวลผลในแต่ละรอบ |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_policy_all_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | รอบประมวลผล | 202512 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 6 |  | first_date | date |  | Y | วันเริ่มสัญญาครั้งแรก | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | end_date | date |  | Y | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | 2024-08-11 |  |
| 9 |  | reinsur_no | varchar | 10 | Y | เลขที่กรมธรรม์ ประกันต่อ | 2311016 |  |
| 10 |  | treaty_code | varchar | 50 | Y | รหัสสัญญาประกันภัยต่อ |  |  |
| 11 |  | sale_option | numeric | 4 | Y | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน | 2 |  |
| 12 |  | sale_channel_code | numeric | 4 | Y | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op | 1 |  |
| 13 |  | pay_type | varchar | 50 | Y | ประเภทการชำระเบี้ย | Monthly |  |
| 14 |  | policy_name | varchar | 255 | Y | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED | กรณีเป็นภาษาอังกฤษ ให้บันทึกด้วยตัวพิมพ์ใหญ่ |
| 15 |  | dbd_code | varchar | 20 | Y | ประเภทธุรกิจ | 64202 |  |
| 16 |  | status | varchar | 20 | Y | สถานะของกรมธรรม์ จากประกันกลุ่ม | Inforce |  |
| 17 |  | ri_status | varchar | 20 | Y | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period | Inforce |  |
| 18 |  | lapse_date | date |  | N | วันที่ไม่ต่อสัญญา | 2026-01-01 |  |
| 19 |  | prev_policy_no | varchar | 8 | N | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | GH1662 |  |
| 20 |  | expreience_refund | varchar | 1 | Y | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่ | Y |  |
| 21 |  | f_receipt_date | date |  |  | วันทีออกใบเสร็จใบแรก | 2026-01-01 |  |
| 22 |  | expire_date | date |  |  | วันที่สิ้นสุดความคุ้มครอง | 2027-12-31 |  |
| 23 |  | rate_flag | numeric | 1 | N | ประเภทอัตราเบี้ย | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1312260823 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_death_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_death_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลม ชีวิต (Life Claim) และ อุบัติเหตุเสียชีวิต (Accident Death) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_clm_death_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | 202209 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | promise_date | date |  | Y | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | 2022-09-26 |  |
| 6 |  | policy_year | numeric | 2 | Y | ปีกรมธรรม์ | 7 |  |
| 7 |  | reinsur_no | varchar | 10 | Y | เลขที่กรมธรรม์ประกันต่อ | 1807003 |  |
| 8 |  | certific_cust_no | varchar | 8 | Y | หมายเลขสมาชิก | 1610 |  |
| 9 |  | attn_age | numeric | 2 | Y | อายุของผู้เอาประกัน | 28 |  |
| 10 |  | sex | varchar | 1 | Y | เพศM = ผู้ชายF = ผู้หญิง | F |  |
| 11 |  | death_date | date |  | Y | วันที่เกิดเหตุ | 2022-09-26 |  |
| 12 |  | approve_date | date |  | Y | วันที่อนุมัติ | 2022-09-26 |  |
| 13 |  | life_insur_request | numeric | 14,2 | Y | ทุนชีวิต ตามแผน (ที่ซื้อ) | 300,000.00 |  |
| 14 |  | acc_insur_request | numeric | 14,2 | Y | ทุนอุบัติเหตุ ตามแผน (ที่ซื้อ) | 300,000.00 |  |
| 15 |  | claim_life | numeric | 14,2 | Y | เคลมชีวิตที่อนุมัติ | 300,000.00 |  |
| 16 |  | claim_acc | numeric | 14,2 | Y | เคลมอุบัติเหตุที่อนุมัติ | 300,000.00 |  |
| 17 |  | total_claim | numeric | 14,2 | Y | จำนวนเงินที่จ่าย | 300,000.00 |  |
| 18 |  | claim_type | varchar | 10 | Y | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | Death |  |
| 19 |  | pay_date | date |  | Y | วันที่จ่ายเงิน | 2022-09-26 |  |
| 20 |  | death_cause_remark | varchar | 255 | Y | สาเหตุการเคลม | Acute gastroenteritis |  |
| 21 |  | investigate_expense | numeric | 14,2 | Y | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| 22 |  | inform_no | varchar | 12 | Y | หมายเลขการเคลม | 256701810 |  |
| 23 |  | treaty_code | varchar | 50 | Y | รหัสสัญญา | DAI_Grp_Daiichi_Coins |  |
| 24 |  | class_no | numeric | 3 | Y | Ocupation Class | 1 |  |
| 25 |  | consider_seq | numeric | 5 | N | การพิจารณาเคลมครั้งที่ | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1312489770 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_health_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_health_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลมสุขภาพ สำหรับการประมวลผล estimate |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_est_clm_health_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น |  |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |
| 5 |  | reinsur_no | varchar | 10 | Y | เลขที่กรมธรรม์ ประกันต่อ |  |  |
| 6 |  | effective_date | date |  | Y | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ |  |  |
| 7 |  | policy_year | numeric | 2 | Y | ปีกรมธรรม์ |  |  |
| 8 |  | cert_no | varchar | 8 | Y | หมายเลขสมาชิก |  |  |
| 9 |  | age | numeric | 2 | Y | อายุของผู้เอาประกัน |  |  |
| 10 |  | sex | varchar | 1 | Y | เพศ |  |  |
| 11 |  | accident_date | date |  | Y | วันที่เกิดเหตุ |  |  |
| 12 |  | approved_date | date |  | Y | วันที่อนุมัติ |  |  |
| 13 |  | claim_amount | numeric | 14,2 | Y | จำนวนเงินที่จ่าย |  |  |
| 14 |  | claim_type | varchar | 100 | Y | ประเภทรับแจ้ง |  |  |
| 15 |  | pay_date | date |  | Y | วันที่จ่ายเงิน |  |  |
| 16 |  | claim_cause | varchar | 255 | Y | สาเหตุการเคลม |  |  |
| 17 |  | notify_no | varchar | 12 | Y | หมายเลขการเคลม |  |  |
| 18 |  | investigation_expense | numeric | 14,2 | Y | ค่าใช้จ่ายในการสืบสวน |  |  |
| 19 |  | treaty_code | varchar | 50 | Y | รหัสสัญญา |  |  |
| 20 |  | class_no | numeric | 3 | Y | Ocupation Class | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1312489780 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_inforce_member =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_inforce_member | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-14 | Description | จัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_inforce_member_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 10 | N | รอบประมวลผล | 202512 |  |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | promise_date | date |  | N | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ | 18 |  |
| 7 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า | 1 |  |
| 8 |  | sex | varchar | 1 | N | เพศ | M |  |
| 9 |  | age | numeric | 2 | N | อายุ | 14 |  |
| 10 |  | sum_insured_accident | numeric | 14,2 | N | ทุนประกันชีวิต อุบัติเหตุ | 1000.15 |  |
| 11 |  | class_no | numeric | 3 | N | Ocupation Class | 1 |  |
| 12 |  | rate_type | varchar | 20 | N | ประเภทอัตราเบี้ย |  |  |
| 13 |  | prem_rate_life | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองชีวิต |  |  |
| 14 |  | prem_rate_acc | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ |  |  |
| 15 |  | prem_rate_med | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 16 |  | prem_rate_tpd | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองทุพพลภาพ |  |  |
| 17 |  | pay_type | varchar | 20 | N | ประเภทการชำระเงินของกธ |  |  |
| 18 |  | sum_insured_life | numeric | 14,2 | N | ทุนประกันชีวิต |  |  |
| 19 |  | sum_insured_med | numeric | 14,2 | N | ทุนประกันค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 20 |  | sum_insured_tpd | numeric | 14,2 | N | ทุนประกันทุพพลภาพ |  |  |
| 21 |  | prem_life | numeric | 14,2 | N | เบี้ย ความคุ้มครองชีวิต |  |  |
| 22 |  | prem_extra_life | numeric | 14,2 | N | เบี้ย ความคุ้มครองชีวิต พิเศษ |  |  |
| 23 |  | prem_acc | numeric | 14,2 | N | เบี้ย ความคุ้มครองอุบัติเหตุ |  |  |
| 24 |  | prem_acc_extra | numeric | 14,2 | N | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ |  |  |
| 25 |  | prem_med | numeric |  |  | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 26 |  | prem_tpd | numeric | 14,2 | N | เบี้ย ทุพพลภาพ |  |  |
| 27 |  | prem_ipd | numeric | 14,2 | N | เบี้ย IPD |  |  |
| 28 |  | prem_opd | numeric | 14,2 | N | เบี้ย OPD |  |  |
| 29 |  | prem_dental | numeric | 14,2 | N | เบี้ย ทันตกรรม |  |  |
| 30 |  | treaty_code | varchar | 20 | N | รหัสสัญญา |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1292239105 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_list_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_list_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-17 | Description | เก็บข้อมูล detail ของ List of policy กธ.ที่ส่ง reinsurance ของ Estimate |
| Updated By | suthane.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 2026-01-09 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_list_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | reinsur_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 6 |  | first_date | date |  |  | วันเริ่มสัญญาครั้งแรก |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  |  | วันเริ่มสัญญาปีปัจจุบัน |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | expire_date | date |  |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 9 |  | pay_type | numeric | 1 |  | ประเภทการชำระเบี้ย | 1 |  |
| 10 |  | payment_mode | varchar | 20 |  | ประเภทการชำระเบี้ย สำหรับออกรายงานให้ user | Annual | QuarterlyAnnualSemi AnnualMonthly |
| 11 |  | policy_name | varchar | 100 |  | ชื่อกรมธรรม์ | อี ซี เอฟ พรีซิชั่น (ประเทศไทย) จำกัด |  |
| 12 |  | nature_of_business | varchar | 250 |  | ประเภทของธุรกิจ |  |  |
| 13 |  | policy_status | varchar | 1 |  | สถานะของกรมธรรม์ จากประกันกลุ่ม | I |  |
| 14 |  | policy_status_report | varchar | 20 |  | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user | Inforce |  |
| 15 |  | ri_status | varchar | 20 |  | สถานะของกรมธรรม์ สำหรับ Group RI | Inforce |  |
| 16 |  | lapse_date | date |  |  | วันที่ไม่ต่อสัญญา |  | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 17 |  | policy_no_old | varchar | 8 |  | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | GL1742 |  |
| 18 |  | expreience_refund | numeric | 1 |  | เงินคืนตามประสบการณ์ | 1 |  |
| 19 |  | expreience_rf_report | varchar | 3 |  | เงินคืนตามประสบการณ์ สำหรับออกรายงานให้ user | Yes | YesNo |
| 20 |  | unname | numeric | 1 |  | ระบุว่าเป็นกรมธรรม์ Unname | 1 |  |
| 21 |  | type | varchar | 15 |  | ประเภทชุดข้อมูลที่ดึงจากตาราง | glpolicy | glpolicygloldpolicy |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1291715840 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_policy_1y =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_policy_1y | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-15 | Description | ข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี ณ รอบการประมวลผล โดยครอบคลุมกรมธรรม์ที่ส่ง Reinsurance ทั้งหมด |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_pol_1y_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
|  |  | period | numeric | 6 | N | รอบประมวลผล | 202104 |  |
| 3 |  | reinsur_no | varchar | 10 | N | เลขประกันภัยต่อ |  |  |
| 4 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ | 18 |  |
| 6 |  | first_date | date |  | N | วันเริ่มสัญญาครั้งแรก | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  | N | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | expire_date | date |  | N | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 9 |  | policy_status | varchar | 1 | N | สถานะของกรมธรรม์ จากประกันกลุ่ม | I |  |
| 10 |  | report_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user | Inforce |  |
| 11 |  | ri_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับ Group RI | Inforce |  |
| 12 |  | no_of_member | numeric | 8 | N | จำนวน member ทั้งหมด | 100 |  |
| 13 |  | no_of_member_active | numeric | 8 | N | จำนวน member ที่ active | 50 |  |
| 14 |  | no_of_member_inactive | numeric | 8 | N | จำนวน member ที่ Inactive | 50 |  |
| 15 |  | no_of_member_life | numeric | 8 | N | จำนวนสมาชิกที่มีทุนชีวิต | 100 |  |
| 16 |  | no_of_member_accident_death | numeric | 8 | N | จำนวนสมาชิกที่มีทุนชีวิต อุบัติเหตุ | 0 |  |
| 17 |  | no_of_member_med_accident | numeric | 8 | N | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 100 |  |
| 18 |  | no_of_member_tpd | numeric | 8 | N | จำนวนสมาชิกที่มีทุนทุพพลภาพ | 15 |  |
| 19 |  | sum_insured_life | numeric | 20,2 | N | ทุนชีวิตรวม | 50,000 |  |
| 20 |  | sum_insured_accident_death | numeric | 20,2 | N | ทุนชีวิต อุบัติเหตุรวม | 50,000 |  |
| 21 |  | sum_insured_med_accident | numeric | 20,2 | N | ทุนค่ารักษาพยาบาล อุบัติเหตุรวม | 50,000 |  |
| 22 |  | sum_insured_tpd | numeric | 20,2 | N | ทุนทุพพลภาพรวม | 50,000 |  |
| 23 |  | unname | varchar | 1 | N | ระบุว่าเป็นกรมธรรม์ Unname | Y | Y = กรมธรรม์ unname |
| 24 |  | treaty_code | varchar | 50 | N | รหัสประกันภัยต่อ |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1310753119 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_prem_layer =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_prem_layer | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-07-01 | Description | ตารางข้อมูลข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_est_prem_layer_id | int(8) |  | Y | Running id |  |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | Running id from proess hd |  |  |
| 3 |  | period | varchar | 6 | Y | รอบประมวลผล | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH024 |  |
| 5 |  | effective_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | level | varchar | 2 | Y | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | L1 |  |
| 7 |  | amount_life | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 117 |  |
| 8 |  | amount_accident | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 117 |  |
| 9 |  | amount_med_accident | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 10 |  | amount_tpd | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 11 |  | life_insure | numeric | 14,2 | Y | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 12 |  | accident_insure | numeric | 14,2 | Y | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 13 |  | med_accident_insure | numeric | 14,2 | Y | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 14 |  | tpd_insure | numeric | 14,2 | Y | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 15 |  | life_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | 3.3 |  |
| 16 |  | accident_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 17 |  | med_accident_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 18 |  | tpd_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 19 |  | life_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองชีวิต | 38,610.00 |  |
| 20 |  | life_extra_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองชีวิต (Extra) | 0 |  |
| 21 |  | accident_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 16,731.00 |  |
| 22 |  | accident_extra_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 0 |  |
| 23 |  | med_accident_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | 16,731.00 |  |
| 24 |  | tpd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองทุพพลภาพ | 16,731.00 |  |
| 25 |  | ipd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองผู้ป่วยใน | 100,000.00 |  |
| 26 |  | opd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองผู้ป่วยนอก | 100,000.00 |  |
| 27 |  | dental_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองทันตกรรม | 100,000.00 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1312489612 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 01. Estimate - Staging Tables > tx_stg_est_tpd_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_est_tpd_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลม TPD และ Dismemberment |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_est_clm_tpd_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | Y | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | 1701001 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | reinsur_no | varchar | 10 | Y | เลขที่กรมธรรม์ ประกันต่อ |  |  |
| 6 |  | promise_date | date |  | Y | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | 2022-09-26 |  |
| 7 |  | policy_year | numeric | 2 | Y | ปีกรมธรรม์ | 16 |  |
| 8 |  | certific_cust_no | varchar | 8 | Y | หมายเลขสมาชิก | 1610 |  |
| 9 |  | attn_age | numeric | 2 | Y | อายุของผู้เอาประกัน | 30 |  |
| 10 |  | sex | varchar | 1 | Y | เพศ | F |  |
| 11 |  | accident_date | date |  | Y | วันที่เกิดเหตุ | 2022-09-26 |  |
| 12 |  | approved_date | date |  | Y | วันที่อนุมัติ | 2022-09-26 |  |
| 13 |  | dismemberment_insur_request | numeric | 14,2 | Y | ทุนประกันชีวิต อุบัติเหตุ |  |  |
| 14 |  | tpd_insur_request | numeric | 14,2 | Y | ทุนประกันชีวิต ทุพพลภาพ |  |  |
|  |  | life_insur | numeric | 14,2 | N | ทุนประกันชีวิต |  |  |
| 15 |  | claim_accident | numeric | 14,2 | Y | ยอดเคลมอุบัติเหตุที่อนุมัติ |  |  |
| 16 |  | claim_tpd | numeric | 14,2 | Y | ยอดเคลมทุพพลภาพที่อนุมัติ |  |  |
| 17 |  | total_claim | numeric | 14,2 | Y | จำนวนเงินที่จ่าย |  |  |
| 18 |  | claim_type | varchar | 20 | Y | ประเภทรับแจ้ง | TPD |  |
| 19 |  | pay_date | date |  | Y | วันที่จ่ายเงิน | 2022-09-26 |  |
| 20 |  | claim_cause | varchar | 80 | Y | สาเหตุการเคลม | Acute gastroenteritis |  |
| 21 |  | investigation_expense | numeric | 14,2 | Y | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| 22 |  | inform_no | varchar | 12 | Y | หมายเลขการเคลม | 256701810 |  |
| 23 |  | treaty_code | varchar | 50 | Y | รหัสสัญญา | DAI_Grp_Daiichi_Coins |  |
| 24 |  | class_no | numeric | 3 | Y | Ocupation Class | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313145124 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables =====
- tx_stg_act_all_policy
- tx_stg_act_tpd_claim
- tx_stg_act_prem_movement
- tx_stg_act_prem_layer
- tx_stg_act_member_over_age
- tx_stg_act_investigation_expense
- tx_stg_act_inforce_policy
- tx_stg_act_inforce_member
- tx_stg_act_health_claim
- tx_stg_act_exp_refund
- tx_stg_act_death_claim
- tx_stg_act_alteration


===== PAGE 1313899631 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_all_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_all_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | ตารางข้อมูลตั้งต้น (Input) ของระบบ Group RI สำหรับการประมวลผล actual ซึ่งรวบรวมข้อมูลกรมธรรม์ทั้งหมดที่เข้าเงื่อนไขก่อนการประมวลผลในแต่ละรอบ |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_act_all_policy_idrig_policy_all_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | numeric | 6 | Y | รอบประมวลผล | 202512 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 6 |  | first_date | date |  | Y | วันเริ่มสัญญาครั้งแรก | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 7 |  | promise_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 8 |  | end_date | date |  | Y | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | 2024-08-11 |  |
| 9 |  | reinsur_no | varchar | 10 | Y | เลขที่กรมธรรม์ ประกันต่อ | 2311016 |  |
| 10 |  | treaty_code | varchar | 50 | Y | รหัสสัญญาประกันภัยต่อ |  |  |
| 11 |  | sale_option | numeric | 4 | Y | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน | 2 |  |
| 12 |  | sale_channel_code | numeric | 4 | Y | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op | 1 |  |
| 13 |  | pay_type | varchar | 50 | Y | ประเภทการชำระเบี้ย | Monthly |  |
| 14 |  | policy_name | varchar | 255 | Y | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED | กรณีเป็นภาษาอังกฤษ ให้บันทึกด้วยตัวพิมพ์ใหญ่ |
| 15 |  | dbd_code | varchar | 20 | Y | ประเภทธุรกิจ | 64202 |  |
| 16 |  | status | varchar | 20 | Y | สถานะของกรมธรรม์ จากประกันกลุ่ม | Inforce |  |
| 17 |  | ri_status | varchar | 20 | Y | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period | Inforce |  |
| 18 |  | lapse_date | date |  | Y | วันที่ไม่ต่อสัญญา | 2026-01-01 |  |
| 19 |  | prev_policy_no | varchar | 8 | Y | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | GH1662 |  |
| 20 |  | expreience_refund | varchar | 1 | Y | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่ | Y |  |
| 21 |  | f_receipt_date | date |  |  | วันทีออกใบเสร็จใบแรก | 2026-01-01 |  |
| 22 |  | expire_date | date |  |  | วันที่สิ้นสุดความคุ้มครอง | 2027-12-31 |  |
| 23 |  | rate_flag | numeric | 1 | N | ประเภทอัตราเบี้ย | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1314422981 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_alteration =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_alteration | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-21 | Description | ข้อมูลสลักหลัง |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_alteration_id | int(8) |  | Y | Running id |  |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | Running id from tx_rig_process_hd |  |  |
| 3 |  | period | numeric | 6 | Y | Period ของข้อมูล | 202104 |  |
| 4 |  | reinsur_no | varchar | 10 | Y | เลขประกันภัยต่อ | GH024 |  |
| 5 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | 2023-08-11 | 2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | document_date | datetime |  | Y | วันที่ทำรายการ |  |  |
| 7 |  | alteration_movement | varchar | 50 | Y | ประเภทสลักหลัง |  |  |
| 8 |  | alteration_status | varchar | 50 | Y | สถานะสลักหลัง |  |  |
| 9 |  | alteration_date | datetime |  | Y | วันที่มีผลบังคับของสลักหลัง |  |  |
| 10 |  | member_effective_date | datetime |  | Y | วันเริ่มคุ้มครองของสมาชิก |  |  |
| 11 |  | cert_no | varchar | 8 | Y | หมายเลขสมาชิก |  |  |
| 12 |  | sex | varchar | 1 | Y | เพศ |  |  |
| 13 |  | age | numeric | 2 | Y | อายุ |  |  |
| 14 |  | sum_insured_accident | numeric | 14,2 | Y | จำนวนทุนชีวิต (อุบัติเหตุ) |  |  |
| 15 |  | sum_insured_accident_before | numeric | 14,2 | Y | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่ม/ลด ทุน |  |  |
| 16 |  | sum_insured_accident_after | numeric | 14,2 | Y | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่ม/ลด ทุน |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313899644 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_death_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_death_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลม ชีวิต (Life Claim) และ อุบัติเหตุเสียชีวิต (Accident Death) |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_act_clm_death_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | N | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | 202209 |  |
| 4 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | promise_date | date |  | N | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | 2022-09-26 |  |
| 6 |  | policy_year | numeric | 2 | N | ปีกรมธรรม์ | 7 |  |
| 7 |  | reinsur_no | varchar | 10 | N | เลขที่กรมธรรม์ประกันต่อ | 1807003 |  |
| 8 |  | certific_cust_no | varchar | 8 | N | หมายเลขสมาชิก | 1610 |  |
| 9 |  | attn_age | numeric | 2 | N | อายุของผู้เอาประกัน | 28 |  |
| 10 |  | sex | varchar | 1 | N | เพศM = ผู้ชายF = ผู้หญิง | F |  |
| 11 |  | death_date | date |  | N | วันที่เกิดเหตุ | 2022-09-26 |  |
| 12 |  | approve_date | date |  | N | วันที่อนุมัติ | 2022-09-26 |  |
| 13 |  | life_insur_request | numeric | 14,2 | N | ทุนชีวิต ตามแผน (ที่ซื้อ) | 300,000.00 |  |
| 14 |  | acc_insur_request | numeric | 14,2 | N | ทุนอุบัติเหตุ ตามแผน (ที่ซื้อ) | 300,000.00 |  |
| 15 |  | claim_life | numeric | 14,2 | N | เคลมชีวิตที่อนุมัติ | 300,000.00 |  |
| 16 |  | claim_acc | numeric | 14,2 | N | เคลมอุบัติเหตุที่อนุมัติ | 300,000.00 |  |
| 17 |  | total_claim | numeric | 14,2 | N | จำนวนเงินที่จ่าย | 300,000.00 |  |
| 18 |  | claim_type | varchar | 10 | N | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | Death |  |
| 19 |  | pay_date | date |  | N | วันที่จ่ายเงิน | 2022-09-26 |  |
| 20 |  | death_cause_remark | varchar | 255 | N | สาเหตุการเคลม | Acute gastroenteritis |  |
| 21 |  | investigate_expense | numeric | 14,2 | N | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| 22 |  | inform_no | varchar | 12 | N | หมายเลขการเคลม | 256701810 |  |
| 23 |  | treaty_code | varchar | 50 | N | รหัสสัญญา | DAI_Grp_Daiichi_Coins |  |
| 24 |  | class_no | numeric | 3 | N | Ocupation Class | 1 |  |
| 25 |  | claim_status | numeric | 10 | N | สถานะเคลม | 1 |  |
| 26 |  | consider_seq | numeric | 5 | N | การพิจารณาเคลมครั้งที่ |  | 1 |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1314423164 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_exp_refund =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_exp_refund | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-21 | Description | ข้อมูลเงินคืนตามค่าประสบการณ์ |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 2026-06-10 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_exp_refund_id | int(8) |  | Y | Running id |  |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | Running id from tx_rig_process_hd |  |  |
| 3 |  | period | numeric | 6 | Y | Period | 202501 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ | GL2542 |  |
| 5 |  | reinsur_no | varchar | 10 | Y | เลขประกันภัยต่อ | 2306018 |  |
| 6 |  | policy_year | numeric | 2 | Y | ปีกรมธรรม์ | 14 |  |
| 7 |  | commencement_date | date |  | Y | วันเริ่มสัญญาครั้งแรก | 16/06/2010 |  |
| 8 |  | effective_date | date |  | Y | วันที่คุ้มครอง | 16/06/2023 |  |
| 9 |  | end_date | date |  | Y | วันที่สิ้นความคุ้มครอง | 15/06/2024 |  |
| 10 |  | paid_status | varchar | 10 | Y | เป็นการบอกว่าใน Policy Year นี้มีการจ่าย Experience Refund หรือไม่ | Paid |  |
| 11 |  | percent_exp_refund | numeric | 4 | Y | %การจ่าย Experience Refund | 75 |  |
| 12 |  | percent_expense | numeric | 14,2 | Y | %ค่าใช้จ่าย | 25 |  |
| 13 |  | premium_life | numeric | 14,2 | Y | เบี้ยประกันภัยรับ(ชีวิต) ทั้งปีใน Policy Year นี้ | 1,000.15 |  |
| 14 |  | premium_accident | numeric | 14,2 | Y | เบี้ยประกันภัยรับ(อุบัติเหตุ) ทั้งปีใน Policy Year นี้ | 1,000.15 |  |
| 15 |  | premium_tpd | numeric | 14,2 | Y | เบี้ยประกันภัยรับ(TPD) ทั้งปีใน Policy Year นี้ | 1,000.15 |  |
| 16 |  | total_premium | numeric | 14,2 | Y | เบี้ยประกันภัยรับทั้งปีใน Policy Year นี้ | 1,000.15 |  |
| 17 |  | claim | numeric | 14,2 | Y | สินไหมที่เกิดขึ้นใน Policy Year นี้ | 1,000.15 |  |
| 18 |  | exp_refund_previous_year | numeric | 14,2 | Y | ยอดติดลบ Experience Refund จากปีก่อนหน้า | 1,000.15 |  |
| 19 |  | exp_refund | numeric | 14,2 | Y | ยอด Experience Refund ที่ต้องจ่าย | 1,000.15 |  |
| 20 |  | period_begin_date | date |  | Y | วันที่มีผลบังคับของ Experience Refund | 15/06/2024 |  |
| 21 |  | period_end_date | date |  | Y | วันlสิ้นสุดผลบังคับของ Experience Refund | 15/06/2024 |  |
| 22 |  | claim_life | numeric | 14,2 | N | ยอดเงินเคลมความคุ้มครอง Life (#CR_EXREFUND suthanee.sa 27/04/2026) | 1,000.15 |  |
| 23 |  | claim_add | numeric | 14,2 | N | ยอดเงินเคลมความคุ้มครอง ADD (#CR_EXREFUND suthanee.sa 27/04/2026) | 1,000.15 |  |
| 24 |  | claim_dismem | numeric | 14,2 | N | ยอดเงินเคลมความคุ้มครอง Dismemberment (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 10/06/2026) | 1,000.15 |  |
| 25 |  | pending_life | numeric | 14,2 | N | ยอดรอดำเนินการเคลมความคุ้มครอง Life (#CR_EXREFUND suthanee.sa 08/06/2026) | 1,000.15 |  |
| 26 |  | pending_add | numeric | 14,2 | N | ยอดรอดำเนินการความคุ้มครอง ADD (#CR_EXREFUND suthanee.sa 08/06/2026) | 1,000.15 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313899648 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_health_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_health_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลมสุขภาพ สำหรับการประมวลผล actual |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_clm_health_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | N | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น |  |  |
| 4 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ |  |  |
| 5 |  | reinsur_no | varchar | 10 | N | เลขที่กรมธรรม์ ประกันต่อ |  |  |
| 6 |  | effective_date | date |  | N | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ |  |  |
| 7 |  | policy_year | numeric | 2 | N | ปีกรมธรรม์ |  |  |
| 8 |  | cert_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |
| 9 |  | age | numeric | 2 | N | อายุของผู้เอาประกัน |  |  |
| 10 |  | sex | varchar | 1 | N | เพศ |  |  |
| 11 |  | accident_date | date |  | N | วันที่เกิดเหตุ |  |  |
| 12 |  | approved_date | date |  | N | วันที่อนุมัติ |  |  |
| 13 |  | claim_amount | numeric | 14,2 | N | จำนวนเงินที่จ่าย |  |  |
| 14 |  | claim_type | varchar | 10 | N | ประเภทรับแจ้ง |  |  |
| 15 |  | pay_date | date |  | N | วันที่จ่ายเงิน |  |  |
| 16 |  | claim_cause | varchar | 80 | N | สาเหตุการเคลม |  |  |
| 17 |  | notify_no | varchar | 12 | N | หมายเลขการเคลม |  |  |
| 18 |  | investigation_expense | numeric | 14,2 | N | ค่าใช้จ่ายในการสืบสวน |  |  |
| 19 |  | treaty_code | varchar | 50 | N | รหัสสัญญา |  |  |
| 20 |  | class_no | numeric | 3 | N | Ocupation Class | 1 |  |
| 21 |  | claim_status | numeric | 3 | N | สถานะเคลม | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313899653 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_inforce_member =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_inforce_member | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-14 | Description | จัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_act_inforce_member_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 10 | Y | รอบประมวลผล | 202512 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH1663 |  |
| 5 |  | promise_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ | 18 |  |
| 7 |  | cer_no | varchar | 20 | Y | เลขที่ลูกค้า | 1 |  |
| 8 |  | sex | varchar | 1 | Y | เพศ | M |  |
| 9 |  | age | numeric | 2 | Y | อายุ | 14 |  |
| 10 |  | sum_insured_accident | numeric | 14,2 | Y | ทุนประกันชีวิต อุบัติเหตุ | 1000.15 |  |
| 11 |  | class_no | numeric | 3 | Y | Ocupation Class | 1 |  |
| 12 |  | rate_type | varchar | 20 | N | ประเภทอัตราเบี้ย |  |  |
| 13 |  | prem_rate_life | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองชีวิต |  |  |
| 14 |  | prem_rate_acc | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ |  |  |
| 15 |  | prem_rate_med | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 16 |  | prem_rate_tpd | numeric | 14,4 | N | อัตราเบี้ย ความคุ้มครองทุพพลภาพ |  |  |
| 17 |  | pay_type | varchar | 20 | N | ประเภทการชำระเงินของกธ |  |  |
| 18 |  | sum_insured_life | numeric | 14,2 | N | ทุนประกันชีวิต |  |  |
| 19 |  | sum_insured_med | numeric | 14,2 | N | ทุนประกันค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 20 |  | sum_insured_tpd | numeric | 14,2 | N | ทุนประกันทุพพลภาพ |  |  |
| 21 |  | prem_life | numeric | 14,2 | N | เบี้ย ความคุ้มครองชีวิต |  |  |
| 22 |  | prem_extra_life | numeric | 14,2 | N | เบี้ย ความคุ้มครองชีวิต พิเศษ |  |  |
| 23 |  | prem_acc | numeric | 14,2 | N | เบี้ย ความคุ้มครองอุบัติเหตุ |  |  |
| 24 |  | prem_acc_extra | numeric | 14,2 | N | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ |  |  |
| 25 |  | prem_med |  | 14,2 | N | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ |  |  |
| 26 |  | prem_tpd | numeric | 14,2 | N | เบี้ย ทุพพลภาพ |  |  |
| 27 |  | prem_ipd | numeric | 14,2 | N | เบี้ย IPD |  |  |
| 28 |  | prem_opd | numeric | 14,2 | N | เบี้ย OPD |  |  |
| 29 |  | prem_dental | numeric | 14,2 | N | เบี้ย ทันตกรรม |  |  |
| 30 |  | treaty_code | varchar | 20 | N | รหัสสัญญา |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1314947605 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_inforce_policy =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_inforce_policy | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-14 | Description | กรมธรรม์ที่ยังมีผลบังคับ (Inforce) (R17) List of inforce by policy |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_inforce_pol_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period_date | date | 6 | N | Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด) | 01/12/2018 |  |
| 4 |  | reinsur_no | varchar | 10 | N | เลขประกันภัยต่อ |  |  |
| 5 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ |  | 2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | commencement_date | date |  | N | วันเริ่มสัญญาครั้งแรก |  |  |
| 7 |  | effective_date | date |  | N | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ |  |  |
| 8 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ |  |  |
| 9 |  | status | varchar | 1 | N | สถานะของกรมธรรม์ จากประกันกลุ่ม | I |  |
| 10 |  | ri_status | varchar | 50 | N | สถานะของกรมธรรม์ สำหรับ Group RI | New Business |  |
| 11 |  | no_member_life | numeric | 6 | N | จำนวนสมาชิกที่มีทุนชีวิต | 1,000 |  |
| 12 |  | no_member_accident_death | numeric | 6 | N | จำนวนสมาชิกที่มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี | 1,000 |  |
| 13 |  | no_member_med_accident | numeric | 6 | N | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 1,000 |  |
| 14 |  | no_member_tpd | numeric | 6 | N | จำนวนสมาชิกที่มีทุนทุพพลภาพ | 1,000 |  |
| 15 |  | sum_insured_life | numeric | 14,2 | N | ทุนชีวิตรวม | 600,000.15 |  |
| 16 |  | sum_insured_accident_death | numeric | 14,2 | N | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 600,000.15 |  |
| 17 |  | sum_insured_med_accident | numeric | 14,2 | N | ทุนค่ารักษาพยาบาล อุบัติเหตุรวม | 600,000.15 |  |
| 18 |  | sum_insured_tpd | numeric | 14,2 | N | ทุนทุพพลภาพรวม | 600,000.15 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313898949 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_investigation_expense =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_investigation_expense | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-12-24 | Description |  |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 2026-04-10 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | เงื่อนไขการบันทึก | Example |
| 1 | PK | stg_act_investigation_exp_id | numeric | 8 | Y | เลขที่ Running |  |  |
| 2 | FK | rig_process_hd_id | numeric | 8 | Y | Running id from proess hd |  |  |
| 3 |  | doc_no | varchar | 20 | N | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ |  |  |
| 4 |  | policy_code | numeric | 1 | N | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |  | 0 |
| 5 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ |  | GH4639 |
| 6 |  | policy_year | numeric | 4 | N | ปีกรมธรรม์ |  | 2 |
| 7 |  | effective_date | date |  | N | วันเริ่มสัญญาปีปัจจุบัน |  | 01/09/2025 |
| 8 |  | cer_no | varchar | 8 | N | เลขที่สมาชิก |  | 1600 |
| 9 |  | claim_no | varchar | 20 | N | เลขที่สินไหมรับเรื่อง |  | 256701810 |
| 10 |  | approved_date | date |  | N | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ |  | 01/10/2025 |
| 11 |  | event_date | date |  | N | วันที่เกิดเหตุ |  | 01/10/2025 |
| 12 |  | expense_amount | numeric | 18,2 | N | ค่าใช้จ่ายรวม |  | 18,000.00 |
| 13 |  | doc_date | date |  | N | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ |  | 01/10/2025 |
| 14 |  | claim_type | numericvarchar | 31020 | N | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง |  | 1 |
| 15 |  | inform_date | date |  | N | วันที่รับเรื่อง |  | 01/10/2025 |
| 16 |  | invest_seq | numeric | 5 | N | ส่งสอบครั้งที่ |  | 1 |
| 17 |  | consider_seq | numeric | 5 | N | การพิจารณาเคลมครั้งที่ |  | 1 |
| 18 |  | reinsur_no | varchar | 20 | N | เลขที่กธ. ประกันต่อ Ref.Reinsurance |  | 1701001 |
| 19 |  | doc_status | numeric | 5 | N | สถานะเอกสาร [0: Active, 2:ยกเลิก] |  | 0 |
| 20 |  | investigation_expense | numeric | 18,2 | N | ค่าใช้จ่าย investigation |  |  |
| 21 |  | medical_expense | numeric | 18,2 | N | ค่าใช้จ่าย medical |  |  |
| 22 |  | legal_expense | numeric | 18,2 | N | ค่าใช้จ่าย legal |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |
ref. tx_rig_landing_investigation_expense


===== PAGE 1314947635 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_member_over_age =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_member_over_age | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-14 | Description | ข้อมูสมาชิคที่มีอายุมากกว่า 70 ปี |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_member_over_age_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | อ้างอิงเลขที่ Running No. |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period_date | date | 6 | N | Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด) | 18/04/2024 | dd/mm/yyy (AD.) |
| 4 |  | policy_no | varchar | 10 | N | เลขกรมธรรม์ |  |  |
| 5 |  | effective_date | date | 8 | N | วันที่คุ้มครอง | 18/04/2024 | dd/mm/yyy (AD.) |
| 6 |  | payment_mode | varchar |  | N | ประเภทการชำระเบี้ย | Annual | pay_type = 0 THEN 'Monthly'pay_type = 1 THEN 'Quarterly'pay_type = 2 THEN 'Semi Annual'pay_type = 3 THEN 'Annual' |
| 7 |  | cert_no | varchar | 10 | N | หมายเลขสมาชิก | 71 |  |
| 8 |  | age | numeric | 4 | N | อายุของผู้เอาประกัน | 73 | #,###coalesce(#,0) |
| 9 |  | accident_insure | numeric | 1 | N | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | 1,000,000.15 | #,###.##coalesce(#,0.00) |
| 10 |  | accident_premium | numeric | 50 | N | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | 1,000.15 | #,###.##coalesce(#,0.00) |
| 11 |  | policy_year | numeric | 10 | N | ปีกรมธรรม์ | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1314422897 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_prem_layer =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_prem_layer | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-21 | Description | ตารางข้อมูลข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | stg_act_prem_layer_id | int(8) |  | Y | Running id |  |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | Running id from proess hd |  |  |
| 3 |  | period | varchar | 6 | Y | รอบประมวลผล | 202104 |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขที่กรมธรรม์ | GH024 |  |
| 5 |  | effective_date | date |  | Y | วันเริ่มสัญญาปีปัจจุบัน | 2023-08-11 | '2023-08-11 00:00:00.000' >> '2023-08-11' |
| 6 |  | level | varchar | 2 | Y | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | L1 |  |
| 7 |  | amount_life | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 117 |  |
| 8 |  | amount_accident | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 117 |  |
| 9 |  | amount_med_accident | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 10 |  | amount_tpd | numeric | 14,0 | Y | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 11 |  | life_insure | numeric | 14,2 | Y | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 12 |  | accident_insure | numeric | 14,2 | Y | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 13 |  | med_accident_insure | numeric | 14,2 | Y | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 14 |  | tpd_insure | numeric | 14,2 | Y | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | 11,700,000.00 |  |
| 15 |  | life_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | 3.3 |  |
| 16 |  | accident_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 17 |  | med_accident_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 18 |  | tpd_prem_rate | numeric | 14,414,2 | Y | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | 1.43 |  |
| 19 |  | life_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองชีวิต | 38,610.00 |  |
| 20 |  | life_extra_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองชีวิต (Extra) | 0 |  |
| 21 |  | accident_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 16,731.00 |  |
| 22 |  | accident_extra_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 0 |  |
| 23 |  | med_accident_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | 16,731.00 |  |
| 24 |  | tpd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองทุพพลภาพ | 16,731.00 |  |
| 25 |  | ipd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองผู้ป่วยใน | 100,000.00 |  |
| 26 |  | opd_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองผู้ป่วยนอก | 100,000.00 |  |
| 27 |  | dental_prem | numeric | 14,2 | Y | เบี้ยของความคุ้มครองทันตกรรม | 100,000.00 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1314423021 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_prem_movement =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_prem_movement | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-21 | Description | ข้อมูล Premium and movement |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_prem_movement_id | int(8) |  | Y | Running id |  |  |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | Running id from proess hd |  |  |
| 3 |  | period | numeric |  | Y | Period ที่คำนวณจาก PromiseDate | 201812 |  |
| 4 |  | period_date | date |  | Y | Period ที่คำนวณจาก PromiseDate | 01/12/2018 |  |
| 5 |  | policy_no | varchar |  | Y | เลขกรมธรรม์ | GH4495 |  |
| 6 |  | reinsur_no | varchar |  | Y | เลขประกันภัยต่อ | 1706008 |  |
| 7 |  | payment_mode | varchar |  | Y | ประเภทการชำระเบี้ยประกันภัย | Quarterly |  |
| 8 |  | policy_year |  |  | Y | ปีกรรมธรรม์ | 1 |  |
| 9 |  | effective_date | datetime |  | Y | วันที่คุ้มครอง | 01/12/2018 |  |
| 10 |  | end_date | datetime |  | Y | วันที่สิ้นความคุ้มครอง | 01/11/2019 |  |
| 11 |  | no_mem_previous | numeric | 6 | Y | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | 31 |  |
| 12 |  | no_mem_addition | numeric | 6 | Y | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | 3 |  |
| 13 |  | no_mem_cancellation | numeric | 6 | Y | จำนวนสมาชิกที่ลดลงใน Period นี้ | 8 |  |
| 14 |  | no_mem_total | numeric | 6 | Y | จำนวนสมาชิกทั้งหมดใน Period นี้ | 26 |  |
| 15 |  | premium_life | numeric | 14,2 | Y | เบี้ยชีวิต | 1,000.15 |  |
| 16 |  | premium_accident | numeric | 14,2 | Y | เบี้ยอุบัติเหตุ | 1,000.15 |  |
| 17 |  | premium_med_acc | numeric | 14,2 | Y | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | 1,000.15 |  |
| 18 |  | premium_tpd | numeric | 14,2 | Y | เบี้ย TPD | 1,000.15 |  |
| 19 |  | premium_e1 | numeric | 14,2 | Y | เบี้ยชีวิต (Extra) | 1,000.15 |  |
| 20 |  | premium_ipd | numeric | 14,2 | Y | เบี้ย IPD | 1,000.15 |  |
| 21 |  | premium_opd | numeric | 14,2 | Y | เบี้ย OPD | 1,000.15 |  |
| 22 |  | premium_dental | numeric | 14,2 | Y | เบี้ย ทันตกรรม | 1,000.15 |  |
| 23 |  | premium_med_total | numeric | 14,2 | Y | เบี้ยค่ารักษาพยาบาลทั้งหมด | 1,000.15 |  |
| 24 |  | premium_total | numeric | 14,2 | Y | เบี้ยทั้งหมด | 1,000.15 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313899646 | Functional Specification > 04. Persistence Specification. > Transaction > 04. Staging Tables > 02. Actual - Staging Tables > tx_stg_act_tpd_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_act_tpd_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | napak.ph | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ข้อมูลสินไหมเคลม TPD และ Dismemberment |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | stg_act_clm_tpd_id | int(8) |  | Y | เลขที่ Running |  | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | เลขที่ Running |  | จาก tx_rig_process_hd.rig_process_hd_id |
| 3 |  | period | varchar | 5 | N | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | 1701001 |  |
| 4 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ | GH4639 |  |
| 5 |  | reinsure_no | varchar | 10 | N | เลขที่กรมธรรม์ ประกันต่อ |  |  |
| 6 |  | promise_date | date |  | N | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | 2022-09-26 |  |
| 7 |  | policy_year | numeric | 2 | N | ปีกรมธรรม์ | 16 |  |
| 8 |  | certific_cust_no | varchar | 8 | N | หมายเลขสมาชิก | 1610 |  |
| 9 |  | attn_age | numeric | 2 | N | อายุของผู้เอาประกัน | 30 |  |
| 10 |  | sex | varchar | 1 | N | เพศ | F |  |
| 11 |  | accident_date | date |  | N | วันที่เกิดเหตุ | 2022-09-26 |  |
| 12 |  | approved_date | date |  | N | วันที่อนุมัติ | 2022-09-26 |  |
| 13 |  | dismemberment_insur_request | numeric | 14,2 | N | ทุนประกันชีวิต อุบัติเหตุ |  |  |
| 14 |  | tpd_insur_request | numeric | 14,2 | N | ทุนประกันชีวิต ทุพพลภาพ |  |  |
|  |  | life_insur | numeric | 14,2 | N | ทุนประกันชีวิต |  |  |
| 15 |  | claim_accident | numeric | 14,2 | N | ยอดเคลมอุบัติเหตุที่อนุมัติ |  |  |
| 16 |  | claim_tpd | numeric | 14,2 | N | ยอดเคลมทุพพลภาพที่อนุมัติ |  |  |
| 17 |  | total_claim | numeric | 14,2 | N | จำนวนเงินที่จ่าย |  |  |
| 18 |  | claim_type | varchar | 20 | N | ประเภทรับแจ้ง | TPD |  |
| 19 |  | pay_date | date |  | N | วันที่จ่ายเงิน | 2022-09-26 |  |
| 20 |  | claim_cause | varchar | 80 | N | สาเหตุการเคลม | Acute gastroenteritis |  |
| 21 |  | investigation_expense | numeric | 14,2 | N | ค่าใช้จ่ายในการสืบสวน | 0 |  |
| 22 |  | inform_no | varchar | 12 | N | หมายเลขการเคลม | 256701810 |  |
| 23 |  | treaty_code | varchar | 50 | N | รหัสสัญญา | DAI_Grp_Daiichi_Coins |  |
| 24 |  | class_no | numeric | 3 | N | Ocupation Class | 1 |  |
| 25 |  | claim_status | numeric | 3 | N | สถานะเคลม | 1 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1313145133 | Functional Specification > 04. Persistence Specification. > Transaction > 05. Prevalidated Table =====
(empty page)


===== PAGE 1313145166 | Functional Specification > 04. Persistence Specification. > Transaction > 05. Prevalidated Table > tx_stg_error_data =====
| Database | ri group | Link Previous Version | - |
| Table | tx_stg_error_data | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-16 | Description |  |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | tx_stg_error_id | int(8) |  | Y | เลขที่ Running | 1 | auto generate |
| 2 | FK | rig_process_hd_id | int(8) |  | Y | อ้างอิงเลขที่ Running No. จาก tx_rig_process_hd | 1 |  |
|  |  | rig_est_hd_id | int(8) |  | N | from tx_rig_est_hd | 1 |  |
|  |  | rig_act_hd_id | int(8) |  | N | from tx_rig_act_hd | 1 |  |
| 3 |  | process_code | varchar | 20 | Y | Code ของ Process จาก tx_rig_process_hd | RIG_AUTO_01 |  |
| 4 |  | period | numeric | 6 | Y | รอบประมวลผล | 202512 |  |
| 4 |  | treaty_code | varchar | 50 | N | รหัสสัญญาประกันภัยต่อ | GIB_Grp_Direct_EB |  |
| 5 |  | snap_table | varchar | 255 | N | ชื่อ Snapshot Table ที่ไม่สามารถบันทึกเข้า Staging Table | tx_est_snap_policy |  |
| 6 |  | stg_table | varchar | 50 | N | ชื่อ Staging Table ที่ถูกดีดออก | tx_stg_est_all_policy |  |
| 7 |  | policy_no | varchar | 8 | N | เลขที่กรมธรรม์ จาก Snapshot Table | GH1663 |  |
| 8 |  | promise_date | date |  | N | วันเริ่มสัญญาปีปัจจุบัน จาก Snapshot Table | 2023-08-11 |  |
| 9 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ จาก Snapshot Table | 18 |  |
| 10 |  | cer_no | varchar | 20 | N | เลขที่ลูกค้า จาก Snapshot Table | 1 |  |
| 11 |  | inform_no | varchar | 12 | N | หมายเลขการเคลม จาก Snapshot Table | 256701810 |  |
| 12 |  | err_desc | varchar | 255 | Y | เหตุผลกรณีไม่ผ่านการ validate | ไม่พบข้อมูลที่ Snapshot |  |
| 13 |  | err_field | varchar | 500 | N | Field name staging ที่ไม่ผ่าน pre-validate | sale_option, lapse_date, prev_policy_no |  |
| 14 |  | err_field_lookup | varchar | 255 | N | Field name staging (ที่เป็น lookup) ที่ไม่ผ่าน pre-validate |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1309999115 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table =====
(empty page)


===== PAGE 1313145135 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table =====
- tx_rig_est_bdr
- tx_rig_est_soa_hd
- tx_rig_est_soa_dt
- tx_rig_est_policy_hd
- tx_rig_est_policy_dt
- tx_rig_est_pol_mem
- tx_rig_est_mem_dt
- tx_rig_est_hd


===== PAGE 1315537212 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > [ยกเลิก] tx_rig_est_output_i =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_output_i | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By |  | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2026 | Description |  |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | id | numeric |  | Y |  |  |  |  |  |  |  |  |  |  |  |
| 2 | Index | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 3 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  | 3 |  |  |  |
| 4 |  | movement | varchar | 1 | N |  |  |  |  |  |  |  | D |  |  |  |
| 5 |  | ri_commencement_date | timestamp | date | Y | วันเริ่มสัญญาครั้งแรก |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 6 |  | treaty_code | varchar | 50 | Y | Treaty รหัสสัญญาประกันภัยต่อ |  |  |  |  |  |  | GIB_Grp_Direct_EB |  |  |  |
| 7 |  | ri_method | varchar | 10 | N | RI Method ของ Treaty |  |  |  |  |  |  |  |  |  |  |
| 8 |  | ri_premium_life | numeric | 14,2 | N | เบี้ย life |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 9 |  | ri_premium_accident_death | numeric | 14,2 | N | เบี้ย accident death |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 10 |  | ri_premium_med_accident | numeric | 14,2 | N | เบี้ย med accident |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 11 |  | ri_premium_tpd | numeric | 14,2 | N | เบี้ย tpd |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 12 |  | ri_premium_ipd | numeric | 14,2 | N | เบี้ย ipd |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 13 |  | ri_premium_opd | numeric | 14,2 | N | เบี้ย opd |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 14 |  | ri_premium_dental | numeric | 14,2 | N | เบี้ย dental |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 15 |  | ri_premium_other | numeric | 14,2 | N | เบี้ยอื่น ๆ |  |  |  |  |  |  | 125,000.00 |  |  |  |
| 16 |  | ms_ri_treaty_id | numeric | 4 | N | รหัส treaty ของ edw-ri |  |  |  |  |  |  | 2 |  |  |  |
| 17 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 18 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 19 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 20 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1313144890 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_bdr =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_bdr | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_bdr_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_est_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_est_hd | tx_rig_est_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | data_quarter | varchar | 6 | Y | ปีและ Quarter ของงวดรายการ |  |  |  |  |  |  | 2023Q1 |  |  |  |
| 4 |  | period | numeric | 6 | N | เดือนและปีของวันที่กรมธรรม์มีผลในรอบปีนั้น ๆ |  |  |  |  |  |  |  |  |  |  |
| 5 |  | closing_period | numeric | 6 | N | เดือนและปีของรอบการประมวลผล |  |  |  |  |  |  |  |  |  |  |
| 6 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 7 |  | reinsurer_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 8 |  | ri_com_date | date |  | Y | วันเริ่มสัญญาครั้งแรก |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 9 |  | effective_date | date |  | Y | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 10 |  | mode_pay | Varchar | 50 | N | ประเภทการชำระเบี้ย |  |  |  |  |  |  | Monthly |  |  |  |
| 11 |  | ri_prem_life | numeric | 14,2 | Y | ผลรวมเบี้ย life |  |  |  |  |  |  | 250000 |  |  |  |
| 12 |  | ri_prem_acc | numeric | 14,2 | Y | ผลรวมเบี้ย accident |  |  |  |  |  |  | 250000 |  |  |  |
| 13 |  | ri_comm_life | numeric | 14,2 | Y | ผลรวม commission life |  |  |  |  |  |  | 250000 |  |  |  |
| 14 |  | ri_comm_acc | numeric | 14,2 | Y | ผลรวม commission accident |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_comm_tpd | numeric | 14,2 | N | ผลรวม commission TPD |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_comm_ttd | numeric | 14,2 | N | ผลรวม commission TTD |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_comm_medical | numeric | 14,2 | N | ผลรวม commission medical |  |  |  |  |  |  | 250000 |  |  |  |
| 15 |  | ri_prem_1st_life | numeric | 14,2 | Y | ผลรวมเบี้ยปีแรก life |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | ri_prem_1st_add | numeric | 14,2 | Y | ผลรวมเบี้ยปีแรก add |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | ri_prem_1st_tpd | numeric | 14,2 | Y | ผลรวมเบี้ยปีแรก tpd |  |  |  |  |  |  | 250000 |  |  |  |
| 18 |  | ri_prem_1st_med | numeric | 14,2 | Y | ผลรวมเบี้ยปีแรก med |  |  |  |  |  |  | 250000 |  |  |  |
| 19 |  | ri_prem_1st_tot | numeric | 14,2 | Y | ผลรวมเบี้ยปีแรก med |  |  |  |  |  |  | 250000 |  |  |  |
| 20 |  | ri_prem_renew_life | numeric | 14,2 | Y | ผลรวมเบี้ยปีต่อ med |  |  |  |  |  |  | 250000 |  |  |  |
| 21 |  | ri_prem_renew_add | numeric | 14,2 | Y | ผลรวมเบี้ยปีต่อ med |  |  |  |  |  |  | 250000 |  |  |  |
| 22 |  | ri_prem_renew_tpd | numeric | 14,2 | Y | ผลรวมเบี้ยปีต่อ med |  |  |  |  |  |  | 250000 |  |  |  |
| 23 |  | ri_prem_renew_med | numeric | 14,2 | Y | ผลรวมเบี้ยปีต่อ med |  |  |  |  |  |  | 250000 |  |  |  |
| 24 |  | ri_prem_renew_tot | numeric | 14,2 | Y | ผลรวมเบี้ยปีต่อทั้งหมด |  |  |  |  |  |  | 250000 |  |  |  |
| 25 |  | event_date | date |  | N | วันที่เกิดเหตุ |  |  |  |  |  |  | 250000 |  |  |  |
| 26 |  | ri_claim_life | numeric | 14,2 | Y | ผลรวมรายการเคลม life |  |  |  |  |  |  | 250000 |  |  |  |
| 27 |  | ri_claim_add | numeric | 14,2 | Y | ผลรวมรายการเคลม add |  |  |  |  |  |  | 250000 |  |  |  |
| 28 |  | ri_claim_tpd | numeric | 14,2 | Y | ผลรวมรายการเคลม tpd |  |  |  |  |  |  | 250000 |  |  |  |
| 29 |  | ri_claim_med | numeric | 14,2 | Y | ผลรวมรายการเคลม med |  |  |  |  |  |  | 250000 |  |  |  |
| 30 |  | ri_claim_tot | numeric | 14,2 | Y | ผลรวมรายการเคลมทั้งหมด |  |  |  |  |  |  | 250000 |  |  |  |
| 31 |  | recov_claim_life | numeric | 14,2 | Y | ผลรวม Recovery claim ของ life |  |  |  |  |  |  | 250000 |  |  |  |
| 32 |  | recov_claim_acc | numeric | 14,2 | Y | ผลรวม Recovery claim ของ accident |  |  |  |  |  |  | 250000 |  |  |  |
| 33 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง |  |  |  |  |  |  | 0 |  |  |  |
| 34 |  | sale_channel | numeric | 4 | N | ช่องทาง |  |  |  |  |  |  | 0 |  |  |  |
| 33 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1309999117 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | closing_period | numeric | 6 | Y | รอบที่ทำรายการ ประมวลผล |  |  |  |  |  |  | 202301 |  |  |  |
| 3 |  | cf_reinsurer_id | int8 | default by data type | Y | id ของ Reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 4 |  | cf_treaty_id | int8 | default by data type | Y | id ของ Treaty |  |  |  |  |  |  | 1 |  |  |  |
| 5 |  | treaty_code | Varchar | 50 | Y | ตัวย่อของ Treaty |  |  |  |  |  |  | GIB_Ind_ORD_Med |  |  |  |
| 6 |  | status | Varchar | 50 | Y | สถานะของการประมวลผล Lookup ที่ cf_lookup_catalogparent_id = 1001300 |  |  |  |  |  |  | PROCESSING |  |  |  |
| 7 |  | edw_status | numeric | 4 | N | สถานะพิจารณาเข้า EDWLookup ที่ cf_lookup_catalog parent_id = 1001700 |  |  |  |  |  |  | 1 |  |  |  |
| 8 |  | edw_status_desc | varchar | 50 | N | ชื่อสถานะพิจารณาเข้า EDW Lookup ที่ cf_lookup_catalog parent_id = 1001700 |  |  |  |  |  |  | รอส่งขออนุมัติเข้า EDW |  |  |  |
| 9 |  | ri_std_hd_id | int8 | default by data type | N | ID อ้างอิงจากระบบ EDW |  |  |  |  |  |  | 1 |  |  |  |
| 10 |  | mps_status | numeric | 4 | N | สถานะพิจารณาเข้า EDW (mps)Lookup ที่ cf_lookup_catalog parent_id = 1001900 |  |  |  |  |  |  | 1 |  |  |  |
| 11 |  | mps_status_desc | varchar | 50 | N | ชื่อสถานะพิจารณาเข้า EDW (mps) |  |  |  |  |  |  | กำลังดำเนินการ |  |  |  |
| 12 |  | ri_std_hd_id_oic | int8 | default by data type | N | ID อ้างอิงจากระบบ EDW (OIC) |  |  |  |  |  |  | 1 |  |  |  |
| 13 |  | ri_premium | numeric | 20,2 | Y | ค่า ri_premium จากการประมวลผลของ Treaty (ขาจ่าย) |  |  |  |  |  |  | 250000 |  |  |  |
| 14 |  | ri_commission | numeric | 20,2 | Y | ค่า ri_commission จากการประมวลผลของ Treaty (ขารับ) |  |  |  |  |  |  | 250000 |  |  |  |
| 15 |  | claim_recovery | numeric | 20,2 | Y | ค่า claim_recovery จากการประมวลผลของ Treaty (ขารับ) |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | due_to | numeric | 20,2 | Y | ค่า due_to จากการประมวลผลของ Treatyยอดรับยอดจ่าย ถ้าเป็นบวกเราได้รับจาก RE ถ้าเป็นลบ เราต้องจ่ายให้ RE |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | remark | Varchar | 500 | N | แสดง Error ของการประมวลผล |  |  |  |  |  |  |  |  |  |  |
| 18 |  | usage_status | Varchar | 1 | N | สถานะใช้งานรายการ Estimate |  |  |  |  |  |  | A = ActiveI = Inactive |  |  |  |
| 19 |  | ri_method | Varchar | 10 | N | RI Method ของ Treaty |  |  |  |  |  |  |  |  |  |  |
| 20 |  | sum_records | numeric | 8 | N | จำนวน Record ที่เกิดขึ้นใน BDR |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1313898892 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_mem_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_mem_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการกรมธรรม์ใน Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_mem_claim_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_est_policy_dt_id | int8 | default by data type | Y | id ของ Record tx_rig_est_hd | tx_rig_est_policy_dt |  |  |  |  |  | 1 |  |  |  |
| 3 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 4 |  | ri_claim_life | numeric | 14,2 | Y | ค่าเคลมชีวิตรายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 5 |  | ri_claim_add | numeric | 14,2 | Y | ค่าเคลมชีวิตรายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 6 |  | ri_claim_dismen | numeric | 14,2 | Y | ค่าเคลม Dismemberment รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 7 |  | ri_claim_acc_death | numeric | 14,2 | Y | ค่าเคลม TPD รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 8 |  | ri_claim_med | numeric | 14,2 | Y | ค่าเคลม med รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
|  |  | ri_claim_tpd | numeric | 14,2 | Y | ค่าเคลม TPD รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 9 |  | re_claim_life | numeric | 14,2 | Y | ค่า recovery life รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 10 |  | re_claim_add | numeric | 14,2 | Y | ค่า recovery add รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 11 |  | re_claim_dismem | numeric | 14,2 | Y | ค่า recovery Dismemberment รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 12 |  | re_claim_acc_death | numeric | 14,2 | Y | ค่า recovery accident รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 13 |  | re_claim_tpd | numeric | 14,2 | Y | ค่า recovery tpd รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 14 |  | re_claim_med | numeric | 14,2 | Y | ค่า recovery med รายบุคคล |  |  |  |  |  |  | 25000 |  |  |  |
| 15 |  | event | date |  | N | วันที่เกิดเหตุ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1321304336 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_pol_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_pol_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 19/02/2025 | Description | เก็บข้อมูลรายการสมาชิกเพื่อตรวจสอบข้อมูล |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 |  | rig_est_pol_mem_id | int8 | default by data type |  |  |  |  |  |  |  |  |  |  |  |
| 2 | index | treaty_code | varchar | 50 |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | policy_no | varchar | 8 |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | policy_code | numeric | 1 |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | cer_no | varchar | 9 |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | policy_status | varchar | 20 |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | minimum | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | maximum | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | percent_re | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | sr_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sr_mur | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | sr_load | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | period | numeric | 6 |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | promise_date | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | policy_year | numeric | 3 |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | sex | varchar | 1 |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | age | numeric | 3 |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sum_insured_accident | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | class_no | numeric | 3 |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | ri_prem_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | ri_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | all_per_load | numeric | 5,2 |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | ri_prem_load | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | ri_prem_disc_ma | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | ri_prem_disc_gv | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | sum_disc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | age_limit | numeric | 3 |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | occ | numeric | 1 |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | cer_incom | varchar | 9 |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | polic_cov | date |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | per_add | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | per_mur | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | per_spe_cov | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | per_los_fing | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | per_mot | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | per_war | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | per_strike | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | per_sport | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | per_air | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | per_dis_mur | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | per_dis_vol | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | min_sum_asu | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | ri_prem_tot | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | com_date | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | cov_from | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | cov_to | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | re_code | varchar | 20 |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | re_code_full | varchar | 20 |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | report_pol_status | varchar | 20 |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | ri_pol_status | varchar | 20 |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | mem_active | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | sum_ins_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | sum_ins_acc_death | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | sum_ins_acc_med | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | sum_ins_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | unname_status | varchar | 1 |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | closing_period | numeric | 6 |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | data_qut | varchar | 6 |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | rig_est_hd_id | int8 | default by data type |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | condition_id | int8 | default by data type |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | ri_com_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | pay_type | varchar | 50 |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | l1_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | l1_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | l1_per | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | l2_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 68 |  | l2_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | l2_per | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 70 |  | l3_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | l3_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 72 |  | l3_per | numeric | 3,2 |  |  |  |  |  |  |  |  |  |  |  |
| 73 |  | l1_l2_mid | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 74 |  | l1_mem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  | l2_mem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  | l3_mem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  | sum_mem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  | l1_mem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | l2_mem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  | l3_mem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | sum_mem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  | l1_ins_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | l2_ins_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  | l3_ins_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | suml_ins_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  | l1_ins_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  | l2_ins_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  | l3_ins_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  | suml_ins_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | pre_l1_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  | pre_l2_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | pre_l3_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  | pre_l1_exprem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | pre_l2_exprem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  | pre_l3_exprem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  | sum_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 97 |  | sum_exprem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 98 |  | pre_sum_all_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 99 |  | pre_l1_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  | pre_l2_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 101 |  | pre_l3_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 102 |  | pre_l1_exprem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  | pre_l2_exprem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 104 |  | pre_l3_exprem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 105 |  | sum_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 106 |  | sum_exprem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 107 |  | pre_sum_all_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 108 |  | l1_prem_life_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 109 |  | l2_prem_life_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 110 |  | l3_prem_life_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 111 |  | l1_prem_acc_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 112 |  | l2_prem_acc_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 113 |  | l3_prem_acc_rate | numeric | 10,4 |  |  |  |  |  |  |  |  |  |  |  |
| 114 |  | sum_all_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 115 |  | sum_all_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 116 |  | l3_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 117 |  | l2_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 118 |  | l1_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 119 |  | l3_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 120 |  | l2_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 121 |  | l1_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 122 |  | l1_ri_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 123 |  | l2_ri_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 124 |  | l3_ri_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 125 |  | l1_ri_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 126 |  | l2_ri_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 127 |  | l3_ri_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 128 |  | sum_ri_prem_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 129 |  | sum_ri_prem_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 130 |  | ri_com_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 131 |  | ri_com_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 132 |  | eff_date | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 133 |  | cert_no | varchar | 8 |  |  |  |  |  |  |  |  |  |  |  |
| 134 |  | att_age | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 135 |  | death_date | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 136 |  | acc_date | Date |  |  |  |  |  |  |  |  |  |  |  |  |
| 137 |  | sum_ins_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 138 |  | sum_ins_dismem | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 139 |  | sum_ins_health | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 140 |  | claim_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 141 |  | claim_acc | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 142 |  | claim_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 143 |  | tot_claim | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 144 |  | occ_class | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 145 |  | invest_expense | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 146 |  | l1_insu_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 147 |  | l1_insu_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 148 |  | l2_insu_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 149 |  | l2_insu_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 150 |  | l3_insu_min | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 151 |  | l3_insu_max | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 152 |  | claim_acc_layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 153 |  | claim_life_layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 154 |  | claim_dismem_layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 155 |  | claim_tpd_layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 156 |  | claim_health_layer | varchar | 2 |  |  |  |  |  |  |  |  |  |  |  |
| 157 |  | polic_claim_acc_death | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 158 |  | polic_claim_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 159 |  | polic_claim_dismem | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 160 |  | polic_claim_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 161 |  | polic_claim_health | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 162 |  | l1_ri_claim_acc_death | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 163 |  | l1_ri_claim_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 164 |  | l1_ri_claim_dismem | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 165 |  | l1_ri_claim_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 166 |  | l1_ri_claim_health | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 167 |  | l1_ri_claim_add | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 168 |  | l2_ri_claim_acc_death | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 169 |  | l2_ri_claim_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 170 |  | l2_ri_claim_dismem | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 171 |  | l2_ri_claim_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 172 |  | l3_ri_claim_acc_death | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 173 |  | l3_ri_claim_life | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 174 |  | l3_ri_claim_dismem | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 175 |  | l3_ri_claim_tpd | numeric | 14,2 |  |  |  |  |  |  |  |  |  |  |  |
| 176 |  | created_date | time stamp |  |  |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1313898890 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_policy_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_policy_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_policy_dt_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_est_policy_hd_id | int8 | default by data type | Y | งวดทำรายการ | tx_rig_est_policy_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | policy_no | varchar | 8 | Y | ปีและ Quarter ของงวดทำรายการ |  |  |  |  |  |  | GH1663 |  |  |  |
| 4 |  | level | varchar | 2 | Y | รอบที่ทำรายการ |  |  |  |  |  |  | L1 |  |  |  |
| 5 |  | ri_prem_life | numeric | 20,2 | Y | ค่าเบี้ยชีวิตตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 6 |  | ri_prem_acc | numeric | 20,2 | Y | ค่าเบี้ยอุบัติเหตุตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 7 |  | ri_prem_load | numeric | 20,2 | Y | ค่าเบี้ยตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_prem_tpd | numeric | 20,2 | N | ค่าเบี้ย tpd ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_prem_ttd | numeric | 20,2 | N | ค่าเบี้ย ttd ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
|  |  | ri_prem_medical | numeric | 20,2 | N | ค่าเบี้ย medical ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 8 |  | ri_prem_disc_ma | numeric | 20,2 | Y | ส่วนลด Discount for Murder&Assault ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 9 |  | ri_prem_disc_gv | numeric | 20,2 | Y | ส่วนลด Discount for Group Volumn ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 10 |  | sum_disc | numeric | 20,2 | Y | ผลรวมของส่วนลดตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 11 |  | sum_ri_claim_life | numeric | 20,2 | Y | ค่าเคลมชีวิต Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 12 |  | sum_ri_claim_add | numeric | 20,2 | Y | ค่าเคลม ADD ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 13 |  | sum_ri_claim_dismem | numeric | 20,2 | Y | ค่าเคลม ADD ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 14 |  | sum_ri_claim_acc_death | numeric | 20,2 | Y | ค่าเคลม ADD ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 15 |  | sum_ri_claim_tpd | numeric | 20,2 | Y | ค่าเคลม ADD ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | sum_ri_claim_med | numeric | 20,2 | Y | ค่าเคลม ADD ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | sum_re_claim_life | numeric | 20,2 | Y | ค่า Recovery life ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 18 |  | sum_re_claim_add | numeric | 20,2 | Y | ค่า Recovery add ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 19 |  | sum_re_claim_dismem | numeric | 20,2 | Y | ค่า Recovery Dismemberment ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 20 |  | sum_re_claim_acc_death | numeric | 20,2 | Y | ค่า Recovery accident ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 21 |  | sum_re_claim_tpd | numeric | 20,2 | Y | ค่า Recovery tpd ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 22 |  | sum_re_claim_med | numeric | 20,2 | Y | ค่า Recovery med ตาม Layer (level) |  |  |  |  |  |  | 250000 |  |  |  |
| 23 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 24 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 25 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 26 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1313898886 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_policy_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_policy_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการกรมธรรม์ใน Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_policy_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_est_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_est_hd | tx_rig_est_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 4 |  | reinsurer_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ri_com_date | date |  | Y | วันเริ่มสัญญาครั้งแรก |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 6 |  | effective_date | date |  | Y | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 7 |  | mode_pay | Varchar | 50 | N | ประเภทการชำระเบี้ย |  |  |  |  |  |  | Monthly |  |  |  |
| 8 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | data_quarter | varchar | 6 | N | ปีและ Quarter ของงวดรายการ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | period | numeric | 6 | N | เดือนและปีของ effective_date |  |  |  |  |  |  |  |  |  |  |
|  |  | policy_status | varchar | 20 | N | สถานะของกรมธรรม์ จากประกันกลุ่ม |  |  |  |  |  |  |  |  |  |  |
|  |  | report_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user |  |  |  |  |  |  |  |  |  |  |
|  |  | ri_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับ Group RI |  |  |  |  |  |  |  |  |  |  |
|  |  | expire_date | date |  | N | วันที่สิ้นสุดความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
|  |  | f_receipt_date | date |  | N | วันทีออกใบเสร็จใบแรก |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 13 |  | updated_date | Timestamp |  | Y | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 14 |  | updated_by | varchar | 50 | Y | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1313439969 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_soa_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_soa_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 17/01/2026 | Description | เก็บข้อมูลเพื่อออกรายงาน SOA |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 29/01/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_soa_dt_id | int8 | 19 | Y | เลขที่ Running auto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_est_soa_hd_id | int8 | 19 | Y | id ของ tx_rig_est_soa_hd | tx_rig_est_soa_hd.rig_est_soa_hd_id |  |  |  |  |  |  |  |  |  |
| ข้อมูลประมวลผล SOA |
| 1 |  | prem_new_life | numeric | 14,2 | N | Reinsurance premium New Business LIFE |  |  |  |  |  |  |  |  |  |  |
| 2 |  | prem_new_add | numeric | 14,2 | N | Reinsurance premium New Business AD&D |  |  |  |  |  |  |  |  |  |  |
| 3 |  | prem_new_tpd | numeric | 14,2 | N | Reinsurance premium New Business TPD |  |  |  |  |  |  |  |  |  |  |
| 4 |  | prem_new_ttd | numeric | 14,2 | N | Reinsurance premium New Business TTD |  |  |  |  |  |  |  |  |  |  |
| 5 |  | prem_new_medical | numeric | 14,2 | N | Reinsurance premium New Business MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 6 |  | prem_new_total | numeric | 14,2 | N | Total Reinsurance premium New Business |  |  |  |  |  |  |  |  |  |  |
| 7 |  | prem_renew_1y_life | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) LIFE |  |  |  |  |  |  |  |  |  |  |
| 8 |  | prem_renew_1y_add | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) AD&D |  |  |  |  |  |  |  |  |  |  |
| 9 |  | prem_renew_1y_tpd | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) TPD |  |  |  |  |  |  |  |  |  |  |
| 10 |  | prem_renew_1y_ttd | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) TTD |  |  |  |  |  |  |  |  |  |  |
| 11 |  | prem_renew_1y_medical | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 12 |  | prem_renew_1y_total | numeric | 14,2 | N | Total Reinsurance premium Renewal Business (1 st yr.) |  |  |  |  |  |  |  |  |  |  |
| 13 |  | prem_renew_life | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) LIFE |  |  |  |  |  |  |  |  |  |  |
| 14 |  | prem_renew_add | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) AD&D |  |  |  |  |  |  |  |  |  |  |
| 15 |  | prem_renew_tpd | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) TPD |  |  |  |  |  |  |  |  |  |  |
| 16 |  | prem_renew_ttd | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) TTD |  |  |  |  |  |  |  |  |  |  |
| 17 |  | prem_renew_medical | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 18 |  | prem_renew_total | numeric | 14,2 | N | Total Reinsurance premium Renewal Business (Renewal) |  |  |  |  |  |  |  |  |  |  |
| 19 |  | comm_new_life | numeric | 14,2 | N | Commission 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 20 |  | comm_new_add | numeric | 14,2 | N | Commission 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 21 |  | comm_new_tpd | numeric | 14,2 | N | Commission 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 22 |  | comm_new_ttd | numeric | 14,2 | N | Commission 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 23 |  | comm_new_medical | numeric | 14,2 | N | Commission 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 24 |  | comm_new_total | numeric | 14,2 | N | Total Commission 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 25 |  | comm_renew_life | numeric | 14,2 | N | Commission Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 26 |  | comm_renew_add | numeric | 14,2 | N | Commission Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 27 |  | comm_renew_tpd | numeric | 14,2 | N | Commission Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 28 |  | comm_renew_ttd | numeric | 14,2 | N | Commission Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 29 |  | comm_renew_medical | numeric | 14,2 | N | Commission Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 30 |  | comm_renew_total | numeric | 14,2 | N | Total Commission Renewal |  |  |  |  |  |  |  |  |  |  |
| 31 |  | comm_refund_new_life | numeric | 14,2 | N | Commission Refund 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 32 |  | comm_refund_new_add | numeric | 14,2 | N | Commission Refund 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 33 |  | comm_refund_new_tpd | numeric | 14,2 | N | Commission Refund 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 34 |  | comm_refund_new_ttd | numeric | 14,2 | N | Commission Refund 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 35 |  | comm_refund_new_medical | numeric | 14,2 | N | Commission Refund 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 36 |  | comm_refund_new_total | numeric | 14,2 | N | Total Commission Refund 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 37 |  | comm_refund_renew_life | numeric | 14,2 | N | Commission Refund Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 38 |  | comm_refund_renew_add | numeric | 14,2 | N | Commission Refund Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 39 |  | comm_refund_renew_tpd | numeric | 14,2 | N | Commission Refund Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 40 |  | comm_refund_renew_ttd | numeric | 14,2 | N | Commission Refund Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 41 |  | comm_refund_renew_medical | numeric | 14,2 | N | Commission Refund Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 42 |  | comm_refund_renew_total | numeric | 14,2 | N | Total Commission Refund Renewal |  |  |  |  |  |  |  |  |  |  |
| 43 |  | comm_refund_new_claim_life | numeric | 14,2 | N | Commission Refund 1 st yr. Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 44 |  | comm_refund_new_claim_add | numeric | 14,2 | N | Commission Refund 1 st yr. Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 45 |  | comm_refund_new_claim_tpd | numeric | 14,2 | N | Commission Refund 1 st yr. Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 46 |  | comm_refund_new_claim_ttd | numeric | 14,2 | N | Commission Refund 1 st yr. Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 47 |  | comm_refund_new_claim_medical | numeric | 14,2 | N | Commission Refund 1 st yr. Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 48 |  | comm_refund_new_claim_total | numeric | 14,2 | N | Total Commission Refund 1 st yr. Claim |  |  |  |  |  |  |  |  |  |  |
| 49 |  | comm_refund_renew_claim_life | numeric | 14,2 | N | Commission Refund Renewal Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 50 |  | comm_refund_renew_claim_add | numeric | 14,2 | N | Commission Refund Renewal Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 51 |  | comm_refund_renew_claim_tpd | numeric | 14,2 | N | Commission Refund Renewal Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 52 |  | comm_refund_renew_claim_ttd | numeric | 14,2 | N | Commission Refund Renewal Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 53 |  | comm_refund_renew_claim_medical | numeric | 14,2 | N | Commission Refund Renewal Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 54 |  | comm_refund_renew_claim_total | numeric | 14,2 | N | Total Commission Refund Renewal Claim |  |  |  |  |  |  |  |  |  |  |
| 55 |  | prem_refund_new_life | numeric | 14,2 | N | Premium Refund 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 56 |  | prem_refund_new_add | numeric | 14,2 | N | Premium Refund 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 57 |  | prem_refund_new_tpd | numeric | 14,2 | N | Premium Refund 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 58 |  | prem_refund_new_ttd | numeric | 14,2 | N | Premium Refund 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 59 |  | prem_refund_new_medical | numeric | 14,2 | N | Premium Refund 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 60 |  | prem_refund_new_total | numeric | 14,2 | N | Total Premium Refund 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 61 |  | prem_refund_renew_life | numeric | 14,2 | N | Premium Refund Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 62 |  | prem_refund_renew_add | numeric | 14,2 | N | Premium Refund Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 63 |  | prem_refund_renew_tpd | numeric | 14,2 | N | Premium Refund Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 64 |  | prem_refund_renew_ttd | numeric | 14,2 | N | Premium Refund Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 65 |  | prem_refund_renew_medical | numeric | 14,2 | N | Premium Refund Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 66 |  | prem_refund_renew_total | numeric | 14,2 | N | Total Premium Refund Renewal |  |  |  |  |  |  |  |  |  |  |
| 67 |  | prem_refund_new_claim_life | numeric | 14,2 | N | Premium Refund 1 st yr. Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 68 |  | prem_refund_new_claim_add | numeric | 14,2 | N | Premium Refund 1 st yr. Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 69 |  | prem_refund_new_claim_tpd | numeric | 14,2 | N | Premium Refund 1 st yr. Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 70 |  | prem_refund_new_claim_ttd | numeric | 14,2 | N | Premium Refund 1 st yr. Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 71 |  | prem_refund_new_claim_medical | numeric | 14,2 | N | Premium Refund 1 st yr. Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 72 |  | prem_refund_new_claim_total | numeric | 14,2 | N | Total Premium Refund 1 st yr. Claim |  |  |  |  |  |  |  |  |  |  |
| 73 |  | prem_refund_renew_claim_life | numeric | 14,2 | N | Premium Refund Renewal Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 74 |  | prem_refund_renew_claim_add | numeric | 14,2 | N | Premium Refund Renewal Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 75 |  | prem_refund_renew_claim_tpd | numeric | 14,2 | N | Premium Refund Renewal Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 76 |  | prem_refund_renew_claim_ttd | numeric | 14,2 | N | Premium Refund Renewal Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 77 |  | prem_refund_renew_claim_medical | numeric | 14,2 | N | Premium Refund Renewal Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 78 |  | prem_refund_renew_claim_total | numeric | 14,2 | N | Total Premium Refund Renewal Claim |  |  |  |  |  |  |  |  |  |  |
| 79 |  | revival_prem_new_life | numeric | 14,2 | N | Revival Premiums 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 80 |  | revival_prem_new_add | numeric | 14,2 | N | Revival Premiums 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 81 |  | revival_prem_new_tpd | numeric | 14,2 | N | Revival Premiums 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 82 |  | revival_prem_new_ttd | numeric | 14,2 | N | Revival Premiums 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 83 |  | revival_prem_new_medical | numeric | 14,2 | N | Revival Premiums 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 84 |  | revival_prem_new_total | numeric | 14,2 | N | Total Revival Premiums 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 85 |  | revival_prem_renew_life | numeric | 14,2 | N | Revival Premiums Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 86 |  | revival_prem_renew_add | numeric | 14,2 | N | Revival Premiums Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 87 |  | revival_prem_renew_tpd | numeric | 14,2 | N | Revival Premiums Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 88 |  | revival_prem_renew_ttd | numeric | 14,2 | N | Revival Premiums Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 89 |  | revival_prem_renew_medical | numeric | 14,2 | N | Revival Premiums Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 90 |  | revival_prem_renew_total | numeric | 14,2 | N | Total Revival Premiums Renewal |  |  |  |  |  |  |  |  |  |  |
| 91 |  | claim_new_life | numeric | 14,2 | N | Claim 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 92 |  | claim_new_add | numeric | 14,2 | N | Claim 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 93 |  | claim_new_tpd | numeric | 14,2 | N | Claim 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 94 |  | claim_new_ttd | numeric | 14,2 | N | Claim 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 95 |  | claim_new_medical | numeric | 14,2 | N | Claim 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 96 |  | claim_new_total | numeric | 14,2 | N | Total Claim 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 97 |  | claim_renew_life | numeric | 14,2 | N | Claim Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 98 |  | claim_renew_add | numeric | 14,2 | N | Claim Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 99 |  | claim_renew_tpd | numeric | 14,2 | N | Claim Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 100 |  | claim_renew_ttd | numeric | 14,2 | N | Claim Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 101 |  | claim_renew_medical | numeric | 14,2 | N | Claim Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 102 |  | claim_renew_total | numeric | 14,2 | N | Total Claim Renewal |  |  |  |  |  |  |  |  |  |  |
| 103 |  | claim_exp_investigation_fee | numeric | 14,2 | N | Claim Expenses INVESTIGATION FEE |  |  |  |  |  |  |  |  |  |  |
| 104 |  | claim_exp_legal_fee | numeric | 14,2 | N | Claim Expenses LEGAL FEE |  |  |  |  |  |  |  |  |  |  |
| 105 |  | claim_exp_ex_gratia | numeric | 14,2 | N | Claim Expenses EX GRATIA |  |  |  |  |  |  |  |  |  |  |
| 106 |  | claim_exp_med | numeric | 14,2 | N | Claim Expenses MEDICAL EVIDENCE |  |  |  |  |  |  |  |  |  |  |
| 107 |  | claim_exp_total | numeric | 14,2 | N | Total Claim Expenses |  |  |  |  |  |  |  |  |  |  |
| 108 |  | admin_comm_remittance | numeric | 14,2 | N | Admin. Commission (Remittance) |  |  |  |  |  |  |  |  |  |  |
| 109 |  | experience_refund_share | numeric | 14,2 | N | Experience Refund Share |  |  |  |  |  |  |  |  |  |  |
| 110 |  | profit_comm | numeric | 14,2 | N | Profit Commission |  |  |  |  |  |  |  |  |  |  |
| 111 |  | sub_total_due_to_reinsurer | numeric | 14,2 | N | Sub Total (due to Reinsurer) |  |  |  |  |  |  |  |  |  |  |
| 112 |  | sub_total_due_from_reinsurer | numeric | 14,2 | N | Sub Total (due from Reinsurer) |  |  |  |  |  |  |  |  |  |  |
| 113 |  | due_to_reinsurer | numeric | 14,2 | N | due to Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 114 |  | due_from_reinsurer | numeric | 14,2 | N | due from Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 115 |  | remark | varchar | 100 | N | remark |  |  |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทีกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทีกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1316324078 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 01. Estimate - Output Table > tx_rig_est_soa_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_soa_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 29/01/2026 | Description | เก็บข้อมูลเพื่อออกรายงาน SOA |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_est_soa_hd_id | int8 | 19 | Y | เลขที่ Running auto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_est_hd_id | int8 | 19 | Y | id ของ tx_rig_est_hd | tx_rig_est_hd.rig_est_hd_id |  |  |  |  |  |  |  |  |  |
| ข้อมูลประมวลผล SOA |
| 1 |  | period | numeric | 6 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | total_profit_comm | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | net_balance_due_to_reinsurer | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทีกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทีกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1313145137 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table =====
- tx_rig_act_alter_mem
- tx_rig_profit_hd
- tx_rig_profit_dt
- tx_rig_profit_comm
- tx_rig_pc_offset
- tx_rig_allocation_profit
- tx_rig_act_soa_hd
- tx_rig_act_soa_dt
- tx_rig_act_policy_layer
- tx_rig_act_policy_hd
- tx_rig_act_pol_mem
- tx_rig_act_hd
- tx_rig_act_claim_mem
- tx_rig_act_bdr_pol_mem
- tx_rig_act_bdr_new_renew
- tx_rig_act_bdr_claim_mem
- tx_rig_act_bdr_claim
- tx_rig_act_bdr_alter_mem
- tx_rig_act_bdr_alter


===== PAGE 1318879312 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_alter_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_alter_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_alter_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_policy_layer_id | int8 | default by data type | Y | id ของ Record tx_rig_act_policy_layer | tx_rig_act_policy_layer |  |  |  |  |  | 1 |  |  |  |
| 3 |  | cession_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 4 |  | name | varchar | 100 | N | ชื่อสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sex | varchar | 1 | N | เพศสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 6 |  | dob | date |  | N | วันเกิดสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 7 |  | age | numeric | 2 | N | อายุสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 8 |  | cov_period | varchar | 50 | N | ช่วงวันที่คุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 9 |  | alter_type | varchar | 2 | N | ประเภท Alter |  |  |  |  |  |  |  |  |  |  |
| 10 |  | entrant_date | date |  | N | วันที่มีผลบังคับของสลักหลังเริ่มคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 11 |  | withdrawal_date | date |  | N | วันที่มีผลบังคับของสลักหลังสิ้นสุดคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 12 |  | num_of_date | numeric | 4 | N | จำนวนวันที่คุ้มครอง |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | sum_insu_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | sum_insu_mur_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | sum_insu_mot_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | sum_insu_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sum_re_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sum_re_mur_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | sum_re_mot_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sum_re_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | re_prem_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | re_prem_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | re_prem_dis_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sum_insu_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | sum_insu_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | sum_insu_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | sum_insu_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | sum_re_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | sum_re_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | sum_re_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sum_re_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | re_prem_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | re_prem_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | re_prem_dis | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | sum_insu_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | sum_insu_mur_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | sum_insu_mot_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | sum_insu_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | sum_re_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | sum_re_mur_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | sum_re_mot_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | sum_re_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | re_prem_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | re_prem_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | re_prem_dis_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | sum_insu_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | sum_re_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | re_prem_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
13/02/2026


===== PAGE 1317404894 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_alter =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_alter | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_alter_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_hd_id | int8 | default by data type | Y | id ของ tx_rig_act_hd | tx_rig_act_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | closing_quarter | varchar | 6 | Y | ปีและ Quarter ของงวดรายการ |  |  |  |  |  |  | 2023Q1 |  |  |  |
| 4 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 5 |  | reinsurer_no | varchar | 10 | N | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ri_com_date | date |  | N | วันเริ่มสัญญาครั้งแรก |  |  |  |  |  |  | 2023-08-11 |  |  |  |
|  |  | first_date | date |  | N | วันเริ่มสัญญาครั้งแรก (ใหม่) |  |  |  |  |  |  |  |  |  |  |
| 7 |  | effective_date_from | date |  | N | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 8 |  | effective_date_to | date |  | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | mode_pay | Varchar | 50 | N | ประเภทการชำระเบี้ย |  |  |  |  |  |  | Monthly |  |  |  |
| 10 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | pol_name | varchar | 255 | N | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | nob | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 13 |  | policy_status | varchar | 15 | N | สถานะของกรมธรรม์ สำหรับ Group RI |  |  |  |  |  |  |  |  |  |  |
| 14 |  | renew_lapse_date | date |  | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | policy_period | varchar | 6 | N | ปีและเดือนของวันที่เริ่มต้นสัญญา |  |  |  |  |  |  |  |  |  |  |
| 16 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน |  |  |  |  |  |  |  |  |  |  |
| 17 |  | sale_channel_code | numeric | 4 | N | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op |  |  |  |  |  |  |  |  |  |  |
| 18 |  | code_name_pol | varchar | 50 | N | ชื่อย่อกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 19 |  | type_coverage_pol | varchar | 5 | N | ประเภทความคุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 20 |  | occ_class | numeric | 1 | N | ชั้นอาชีพ |  |  |  |  |  |  |  |  |  |  |
| 21 |  | policy_ri_period | varchar | 50 | N | ช่วงวันที่คุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1317896230 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_alter_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_alter_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_alter_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_bdr_alter_id | int8 | default by data type | Y | id ของ Record tx_rig_act_bdr_claim | tx_rig_act_bdr_claim |  |  |  |  |  | 1 |  |  |  |
| 3 |  | seq | numeric | 4 | N | running seq. รายการ Alter |  |  |  |  |  |  |  |  |  |  |
| 4 |  | cession_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 5 |  | name | varchar | 100 | N | ชื่อสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sex | varchar | 1 | N | เพศสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 7 |  | dob | date |  | N | วันเกิดสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 8 |  | age | numeric | 2 | N | อายุสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 9 |  | cov_period | varchar | 50 | N | ช่วงวันที่คุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 10 |  | alter_type | varchar | 2 | N | ประเภท Alter |  |  |  |  |  |  |  |  |  |  |
| 11 |  | entrant_date | date |  | N | วันที่มีผลบังคับของสลักหลังเริ่มคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 12 |  | withdrawal_date | date |  | N | วันที่มีผลบังคับของสลักหลังสิ้นสุดคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 13 |  | num_of_date | numeric | 4 | N | จำนวนวันที่คุ้มครอง |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | sum_insu_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | sum_insu_mur_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | sum_insu_mot_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | sum_insu_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sum_re_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sum_re_mur_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | sum_re_mot_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sum_re_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | re_prem_acc_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | re_prem_load_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | re_prem_dis_bf | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sum_insu_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | sum_insu_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | sum_insu_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | sum_insu_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | sum_re_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | sum_re_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | sum_re_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sum_re_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | re_prem_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | re_prem_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | re_prem_dis | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | sum_insu_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | sum_insu_mur_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | sum_insu_mot_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | sum_insu_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | sum_re_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | sum_re_mur_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | sum_re_mot_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | sum_re_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | re_prem_acc_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | re_prem_load_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | re_prem_dis_diff | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | sum_insu_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | sum_re_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | re_prem_x | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1317404892 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_claim =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_claim | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 27/04/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_claim_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_act_hd | tx_rig_act_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | closing_quarter | varchar | 6 | Y | ปีและ Quarter ของงวดรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | data_period | varchar | 30 | N | เดือน period ที่อยู่ภายใต้ Quarter |  |  |  |  |  |  |  |  |  |  |
| 5 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | reinsurer_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 7 |  | ri_com_date | date |  | Y | วันเริ่มสัญญาครั้งแรก |  |  |  |  |  |  |  |  |  |  |
|  |  | first_date | date |  | N | วันเริ่มสัญญาครั้งแรก (ใหม่) |  |  |  |  |  |  |  |  |  |  |
| 8 |  | effective_date_from | date |  | Y | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | effective_date_to | date |  | N | วันที่สิ้นสุดของกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | mode_pay | Varchar | 50 | Y | ประเภทการชำระเบี้ย |  |  |  |  |  |  |  |  |  |  |
| 11 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | policy_period | Varchar | 6 | N | ปีและเดือนของวันที่เริ่มต้นสัญญา |  |  |  |  |  |  |  |  |  |  |
| 13 |  | pol_name | Varchar | 255 | N | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 14 |  | nob | Varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 15 |  | policy_status | Varchar | 15 | N | สถานะของกรมธรรม์ สำหรับ Group RI |  |  |  |  |  |  |  |  |  |  |
| 16 |  | renew_lapse_date | date |  | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | policy_period | Varchar | 50 | N | ช่วงวันที่คุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 18 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sale_channel_code | numeric | 4 | N | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op |  |  |  |  |  |  |  |  |  |  |
| 20 |  | code_name_pol | varchar | 50 | N | ชื่อย่อกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 21 |  | type_coverage_pol | varchar | 5 | N | ประเภทความคุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 22 |  | occ_class | numeric | 1 | N | ชั้นอาชีพ |  |  |  |  |  |  |  |  |  |  |
| 23 |  | policy_ri_period | varchar | 50 | N | ช่วงวันที่คุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | frequency_acc | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | frequency_tpd | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | frequency_ipd | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | frequency_opd | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | frequency_dental | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | frequency_med_acc | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | sum_frequency | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sum_amo_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | sum_amo_paid_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | sum_amo_paid_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | sum_amo_paid_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sum_amo_paid_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | sum_amo_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | sum_amo_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | sum_amo_paid_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | sum_amo_paid_tot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | sum_amo_paid_grand_tot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | sum_re_claim_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sum_re_claim_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | sum_re_claim_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | sum_re_claim_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | sum_re_claim_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | sum_re_claim_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | sum_re_claim_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | sum_re_claim_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | sum_re_claim_tot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | l1_ori_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | l2_ori_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | l3_ori_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | tot_ori_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | l1_ori_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | l2_ori_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | l3_ori_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | tot_ori_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | l1_ori_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | l2_ori_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | l3_ori_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | tot_ori_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | l1_ori_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | l2_ori_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | l3_ori_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | tot_ori_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | l1_re_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | l2_re_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | l3_re_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | tot_re_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | l1_re_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | l2_re_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | l3_re_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | tot_re_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | l1_re_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | l2_re_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | l3_re_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | tot_re_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | l1_re_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | l2_re_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | l3_re_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | tot_re_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | l1_re_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | l2_re_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | l3_re_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | tot_re_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | l1_re_claim_paid_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | l2_re_claim_paid_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | l3_re_claim_paid_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | tot_re_claim_paid_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | l1_re_claim_paid_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | l2_re_claim_paid_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | l3_re_claim_paid_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | tot_re_claim_paid_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | l1_ori_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | l2_ori_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | l3_ori_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | tot_ori_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | l1_re_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | l2_re_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | l3_re_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | tot_re_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | tot_re_claim_inv_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 54 |  | tot_re_claim_leg_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 55 |  | tot_re_claim_med_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | premium_rate_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | premium_rate_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | l1_member_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | l2_member_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | l3_member_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | tot_member_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | l1_member_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | l2_member_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | l3_member_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | tot_member_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | l1_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | l2_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | l3_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | tot_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | l1_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | l2_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | l3_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | tot_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | l1_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | l2_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | l3_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | l1_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | l2_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | l3_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | tot_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | l1_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | l2_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | l3_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | tot_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1317896225 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_claim_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_claim_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 12/03/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_claim_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_bdr_claim_id | int8 | default by data type | Y | id ของ Record tx_rig_act_bdr_claim | tx_rig_act_bdr_claim |  |  |  |  |  | 1 |  |  |  |
| 3 |  | seq | numeric | 5 | N | จำนวนลำดับรายการเคลม |  |  |  |  |  |  |  |  |  |  |
| 4 |  | cession_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 5 |  | name | varchar | 100 | N | ชื่อสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sex | varchar | 1 | N | เพศสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 7 |  | dob | date |  | N | วันเกิดสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 8 |  | age | numeric | 2 | N | อายุสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 9 |  | event_date | date |  | N | วันที่เกิดเหตุ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | cause | varchar | 255 | N | สาเหตุ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | approve_date | date |  | N | วันที่อนุมัติ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | pay_date | date |  | N | วันที่จ่าย |  |  |  |  |  |  |  |  |  |  |
| 13 |  | class_plan | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | incurre_amo | numeric | 14,2 | N | ทุนของรายการเคลม |  |  |  |  |  |  |  |  |  |  |
| 15 |  | claim_status | varchar | 50 | N | สถานะเคลม |  |  |  |  |  |  |  |  |  |  |
| 16 |  | claim_type | varchar | 20 | N | ประเภทเคลม |  |  |  |  |  |  |  |  |  |  |
|  |  | claim_no | varchar | 20 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | ori_sum_insu_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | ori_sum_insu_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | ori_sum_insu_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | ori_sum_insu_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ori_sum_insu_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ori_sum_insu_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | ori_sum_insu_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | ori_sum_insu_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | amo_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | amo_paid_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | amo_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | amo_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | amo_paid_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | amo_paid_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | amo_paid_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | amo_paid_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | amo_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | amo_paid_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | re_claim_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | re_claim_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | re_claim_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | re_claim_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | re_claim_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | re_claim_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | re_claim_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | re_claim_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | re_claim_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | re_claim_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | remark | varchar | 100 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | re_claim_inv_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 31 |  | re_claim_leg_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 32 |  | re_claim_med_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | claim_benefits | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | paid_claim_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | paid_inv_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | re_claim_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | re_inv_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1316552917 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_new_renew =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_new_renew | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Actual |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_new_renew_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_act_hd | tx_rig_act_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | closing_quarter | varchar | 6 | Y | quarter ที่ประมวลผล |  |  |  |  |  |  | 2023Q1 |  |  |  |
| 4 |  | policy_no | varchar | 8 | N | เลขกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 5 |  | reinsurer_no | varchar | 10 | N | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ri_com_date | date |  | N | วันที่เริ่มต้นสัญญาแรก |  |  |  |  |  |  | GH1663 |  |  |  |
| 7 |  | first_date | date |  | N | วันเริ่มสัญญาครั้งแรก (ใหม่) |  |  |  |  |  |  |  |  |  |  |
| 8 |  | effective_date_from | date |  | N | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 9 |  | effective_date_to | date |  | N | วันสิ้นสุดกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | mode_pay | Varchar | 50 | N | ประเภทการชำระเบี้ย |  |  |  |  |  |  | Monthly |  |  |  |
| 11 |  | policy_year | numeric | 3 | N | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | pol_name | varchar | 255 | N | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ |  |  |  |  |  |  | 250000 |  |  |  |
| 13 |  | nob | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ |  |  |  |  |  |  | 250000 |  |  |  |
| 14 |  | policy_status | varchar | 15 | N | สถานะของกรมธรรม์ สำหรับ Group RI |  |  |  |  |  |  | 250000 |  |  |  |
| 15 |  | renew_lapse_date | date |  | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | policy_period | varchar | 6 | N | เดือนและปีของวันที่เริ่มต้นสัญญา |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน |  |  |  |  |  |  |  |  |  |  |
| 18 |  | sale_channel_code | numeric | 4 | N | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op |  |  |  |  |  |  |  |  |  |  |
| 19 |  | code_name_pol | varchar | 50 | N | ชื่อย่อกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 20 |  | policy_ri_period | varchar | 50 | N | ช่วงวันที่คุ้มครองกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 21 |  | full_year | Boolean |  | N | Flag แสดงว่ากรมธรรม์เป็นการคำนวณครบรอบปีหรือไม่ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | premium_rate_life | numeric | 5,4 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 2 |  | premium_rate_add | numeric | 5,4 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | l1_member_life | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 4 |  | l2_member_life | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 5 |  | l3_member_life | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 6 |  | tot_member_life | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 7 |  | l1_member_add | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 8 |  | l2_member_add | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 9 |  | l3_member_add | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 10 |  | tot_member_add | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 11 |  | l1_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 12 |  | l2_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 13 |  | l3_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 14 |  | tot_ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | l1_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | l2_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | l3_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 18 |  | tot_ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | l1_ori_sa_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | l2_ori_sa_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | l3_ori_sa_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | tot_ori_sa_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | l1_ori_sa_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | l2_ori_sa_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | l3_ori_sa_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | tot_ori_sa_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | l1_ori_sa_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | l2_ori_sa_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | l3_ori_sa_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | tot_ori_sa_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | l1_ori_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 32 |  | l2_ori_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 33 |  | l3_ori_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 34 |  | tot_ori_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | l1_ori_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 36 |  | l2_ori_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 37 |  | l3_ori_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | tot_ori_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | l1_ori_nb_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | l2_ori_nb_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | l3_ori_nb_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | tot_ori_nb_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | l1_ori_nb_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | l2_ori_nb_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | l3_ori_nb_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | tot_ori_nb_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | l1_ori_nb_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | l2_ori_nb_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | l3_ori_nb_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | tot_ori_nb_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | l1_ori_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | l2_ori_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | l3_ori_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | tot_ori_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | l1_ori_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | l2_ori_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | l3_ori_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | tot_ori_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | l1_ori_ren_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | l2_ori_ren_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | l3_ori_ren_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | tot_ori_ren_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | l1_ori_ren_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | l2_ori_ren_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | l3_ori_ren_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | tot_ori_ren_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | l1_ori_ren_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 68 |  | l2_ori_ren_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | l3_ori_ren_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 70 |  | tot_ori_ren_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | l1_ori_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 72 |  | l2_ori_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 73 |  | l3_ori_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 74 |  | tot_ori_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  | l1_ori_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  | l2_ori_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  | l3_ori_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  | tot_ori_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | l1_ori_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  | l2_ori_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | l3_ori_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  | tot_ori_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | l1_ori_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  | l2_ori_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | l3_ori_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  | tot_ori_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  | l1_ori_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  | l2_ori_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  | l3_ori_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | tot_ori_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  | l1_ori_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | l2_ori_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  | l3_ori_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | tot_ori_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  | l1_ori_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  | l2_ori_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 97 |  | l3_ori_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 98 |  | tot_ori_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 99 |  | l1_ori_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  | l2_ori_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 101 |  | l3_ori_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 102 |  | tot_ori_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  | l1_ori_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 104 |  | l2_ori_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 105 |  | l3_ori_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 106 |  | tot_ori_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 107 |  | l1_ori_tl_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 108 |  | l2_ori_tl_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 109 |  | l3_ori_tl_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 110 |  | tot_ori_tl_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 111 |  | l1_ori_tl_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 112 |  | l2_ori_tl_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 113 |  | l3_ori_tl_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 114 |  | tot_ori_tl_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 115 |  | l1_ori_tl_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 116 |  | l2_ori_tl_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 117 |  | l3_ori_tl_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 118 |  | tot_ori_tl_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 123 |  | l1_ori_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 124 |  | l2_ori_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 125 |  | l3_ori_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 126 |  | tot_ori_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 127 |  | l1_ori_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 128 |  | l2_ori_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 129 |  | l3_ori_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 130 |  | tot_ori_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 131 |  | l1_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 132 |  | l2_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 133 |  | l3_re_share_per | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 134 |  | l1_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 135 |  | l2_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 136 |  | l3_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 137 |  | tot_re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 138 |  | l1_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 139 |  | l2_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 140 |  | l3_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 141 |  | tot_re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 142 |  | l1_re_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 143 |  | l2_re_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 144 |  | l3_re_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 145 |  | tot_re_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 146 |  | l1_re_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 147 |  | l2_re_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 148 |  | l3_re_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 149 |  | tot_re_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 150 |  | l1_re_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 151 |  | l2_re_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 152 |  | l3_re_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 153 |  | tot_re_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 154 |  | l1_re_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 155 |  | l2_re_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 156 |  | l3_re_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 157 |  | tot_re_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 158 |  | l1_re_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 159 |  | l2_re_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 160 |  | l3_re_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 161 |  | tot_re_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 162 |  | l1_re_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 163 |  | l2_re_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 164 |  | l3_re_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 165 |  | tot_re_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 166 |  | l1_re_rev_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 167 |  | l2_re_rev_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 168 |  | l3_re_rev_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 169 |  | tot_re_rev_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 170 |  | l1_re_rev_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 171 |  | l2_re_rev_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 172 |  | l3_re_rev_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 173 |  | tot_re_rev_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 174 |  | l1_re_rev_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 175 |  | l2_re_rev_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 176 |  | l3_re_rev_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 177 |  | tot_re_rev_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 178 |  | l1_re_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 179 |  | l2_re_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 180 |  | l3_re_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 181 |  | tot_re_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 182 |  | l1_re_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 183 |  | l2_re_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 184 |  | l3_re_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 185 |  | tot_re_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 186 |  | l1_re_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 187 |  | l2_re_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 188 |  | l3_re_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 189 |  | tot_re_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 190 |  | l1_re_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 191 |  | l2_re_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 192 |  | l3_re_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 193 |  | tot_re_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 194 |  | l1_re_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 195 |  | l2_re_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 196 |  | l3_re_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 197 |  | tot_re_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 198 |  | l1_re_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 199 |  | l2_re_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 200 |  | l3_re_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 201 |  | tot_re_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 202 |  | l1_re_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 203 |  | l2_re_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 204 |  | l3_re_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 205 |  | tot_re_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 206 |  | l1_com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 207 |  | l2_com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 208 |  | l3_com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 209 |  | tot_com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 210 |  | l1_com_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 211 |  | l2_com_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 212 |  | l3_com_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 213 |  | tot_com_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 214 |  | l1_com_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 215 |  | l2_com_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 216 |  | l3_com_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 217 |  | tot_com_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 218 |  | l1_com_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 219 |  | l2_com_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 220 |  | l3_com_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 221 |  | tot_com_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 222 |  | l1_com_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 223 |  | l2_com_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 224 |  | l3_com_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 225 |  | tot_com_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 226 |  | l1_com_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 227 |  | l2_com_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 228 |  | l3_com_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 229 |  | tot_com_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 230 |  | l1_com_refund_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 231 |  | l2_com_refund_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 232 |  | l3_com_refund_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 233 |  | tot_com_refund_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 234 |  | l1_com_refund_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 235 |  | l2_com_refund_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 236 |  | l3_com_refund_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 237 |  | tot_com_refund_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 238 |  | l1_com_refund_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 239 |  | l2_com_refund_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 240 |  | l3_com_refund_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 241 |  | tot_com_refund_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 242 |  | l1_com_refund_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 243 |  | l2_com_refund_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 244 |  | l3_com_refund_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 245 |  | tot_com_refund_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 246 |  | l1_re_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 247 |  | l2_re_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 248 |  | l3_re_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 249 |  | tot_re_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 250 |  | l1_re_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 251 |  | l2_re_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 252 |  | l3_re_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 253 |  | tot_re_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 254 |  | remark | varchar | 100 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | number_of_mem_life | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | number_of_mem_acc | numeric | 5 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | ex_refund_rate_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | ex_refund_rate_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ex_pol_year_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ex_pol_year_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | gross_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | gross_prem_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | claim_paid_year_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | claim_paid_year_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | re_ex_refund | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | ori_ex_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | ori_ex_refund_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | net_re_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | net_re_prem_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | re_com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | re_com_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | re_ex_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | re_ex_refund_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1317896220 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_bdr_pol_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_bdr_pol_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_bdr_pol_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_bdr_new_renew_id | int8 | default by data type | Y | id ของ tx_rig_act_bdr_new_renew | tx_rig_act_bdr_new_renew |  |  |  |  |  | 1 |  |  |  |
| 3 |  | cession_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 4 |  | name | varchar | 100 | N | ชื่อ |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sex | varchar | 1 | N | เพศ |  |  |  |  |  |  |  |  |  |  |
| 6 |  | dob | date |  | N | วันเกิด |  |  |  |  |  |  |  |  |  |  |
| 7 |  | age | numeric | 2 | N | อายุ |  |  |  |  |  |  |  |  |  |  |
| 8 |  | occ_class | numeric | 1 | N | ชั้นอาชีพ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | add_type | varchar | 4 | N | ประเภทความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | sa_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | sa_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | sa_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sa_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | sr_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sr_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | sr_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | sr_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | ri_rate | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | prem_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | prem_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | prem_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | prem_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | prem_dis | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | tot_prem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | com | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | remark | varchar | 255 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1318879310 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_claim_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_claim_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_claim_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_policy_layer_id | int8 | default by data type | Y | id ของ Record tx_rig_act_policy_layer | tx_rig_act_policy_layer |  |  |  |  |  | 1 |  |  |  |
| 4 |  | cession_no | varchar | 8 | N | หมายเลขสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 5 |  | name | varchar | 100 | N | ชื่อสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sex | varchar | 1 | N | เพศสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 7 |  | dob | date |  | N | วันเกิดสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 8 |  | age | numeric | 2 | N | อายุสมาชิก |  |  |  |  |  |  |  |  |  |  |
| 9 |  | event_date | date |  | N | วันที่เกิดเหตุ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | cause | varchar | 255 | N | สาเหตุ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | approve_date | date |  | N | วันที่อนุมัติ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | pay_date | date |  | N | วันที่จ่าย |  |  |  |  |  |  |  |  |  |  |
| 13 |  | class_plan | varchar | 1 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | incurre_amo | numeric | 14,2 | N | ทุนของรายการเคลม |  |  |  |  |  |  |  |  |  |  |
| 15 |  | claim_status | varchar | 50 | N | สถานะเคลม |  |  |  |  |  |  |  |  |  |  |
| 16 |  | claim_type | varchar | 20 | N | ประเภทเคลม |  |  |  |  |  |  |  |  |  |  |
|  |  | claim_no | varchar | 20 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | ori_sum_insu_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | ori_sum_insu_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | ori_sum_insu_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | ori_sum_insu_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ori_sum_insu_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ori_sum_insu_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | ori_sum_insu_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | ori_sum_insu_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | amo_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | amo_paid_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | amo_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | amo_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | amo_paid_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | amo_paid_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | amo_paid_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | amo_paid_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | amo_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | amo_paid_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | re_claim_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | re_claim_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | re_claim_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | re_claim_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | re_claim_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | re_claim_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | re_claim_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | re_claim_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | re_claim_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | re_claim_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | re_claim_inv_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 30 |  | re_claim_leg_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 31 |  | re_claim_med_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | claim_benefits | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | paid_claim_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | paid_inv_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | re_claim_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | re_inv_report | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1315536967 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Actual |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | cf_reinsurer_id | int8 | default by data type | Y | id ของ Reinsurer cf_reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | cf_treaty_id | int8 | default by data type | Y | id ของ Treaty cf_rig_treaty |  |  |  |  |  |  | 1 |  |  |  |
| 4 |  | treaty_code | Varchar | 50 | Y | ตัวย่อของ Treaty |  |  |  |  |  |  | GIB_Ind_ORD_Med |  |  |  |
| 5 |  | closing_quarter | Varchar | 6 | Y | รอบประมวลผล |  |  |  |  |  |  | 2026Q1 |  |  |  |
| 6 |  | quarter_year | numeric | 4 | Y | ปีประมวลผล |  |  |  |  |  |  | 2026 |  |  |  |
| 7 |  | quarter | numeric | 1 | Y | quarter ประมวลผล |  |  |  |  |  |  | 1 |  |  |  |
| 8 |  | status | Varchar | 50 | Y | สถานะของการประมวลผล Lookup ที่ cf_lookup_catalogparent_id = 1001300 |  |  |  |  |  |  | PROCESSING |  |  |  |
| 9 |  | edw_status | numeric | 4 | N | สถานะพิจารณาเข้า EDWLookup ที่ cf_lookup_catalog parent_id = 1001700 |  |  |  |  |  |  | 1 |  |  |  |
| 10 |  | edw_status_desc | varchar | 50 | N | ชื่อสถานะพิจารณาเข้า EDW Lookup ที่ cf_lookup_catalog parent_id = 1001700 |  |  |  |  |  |  | รอส่งขออนุมัติเข้า EDW |  |  |  |
| 11 |  | ri_std_hd_id | int8 | default by data type | N | ID อ้างอิงจากระบบ EDW |  |  |  |  |  |  | 1 |  |  |  |
| 12 |  | mps_status | numeric | 4 | N | สถานะพิจารณาเข้า EDW (mps)Lookup ที่ cf_lookup_catalog parent_id = 1001900 |  |  |  |  |  |  | 1 |  |  |  |
| 13 |  | mps_status_desc | varchar | 50 | N | ชื่อสถานะพิจารณาเข้า EDW (mps) |  |  |  |  |  |  | กำลังดำเนินการ |  |  |  |
| 14 |  | ri_std_hd_id_oic | int8 | default by data type | N | ID อ้างอิงจากระบบ EDW (OIC) |  |  |  |  |  |  | 1 |  |  |  |
| 15 |  | ri_premium | numeric | 20,2 | N | ค่า ri_premium จากการประมวลผลของ Treaty (ขาจ่าย) |  |  |  |  |  |  | 250000 |  |  |  |
| 16 |  | ri_commission | numeric | 20,2 | N | ค่า ri_commission จากการประมวลผลของ Treaty (ขารับ) |  |  |  |  |  |  | 250000 |  |  |  |
| 17 |  | claim_recovery | numeric | 20,2 | N | ค่า claim_recovery จากการประมวลผลของ Treaty (ขารับ) |  |  |  |  |  |  | 250000 |  |  |  |
| 18 |  | sum_pc_current_treaty | numeric | 20,2 | N | ผลรวมค่า Profit Comm จาก Allocation เฉพาะ Treaty |  |  |  |  |  |  |  |  |  |  |
| 19 |  | due_to | numeric | 20,2 | N | ค่า due_to จากการประมวลผลของ Treatyยอดรับยอดจ่าย ถ้าเป็นบวกเราได้รับจาก RE ถ้าเป็นลบ เราต้องจ่ายให้ RE |  |  |  |  |  |  | 250000 |  |  |  |
| 20 |  | remark | Varchar | 500 | N | แสดง Error ของการประมวลผล |  |  |  |  |  |  |  |  |  |  |
| 21 |  | usage_status | Varchar | 1 | N | สถานะใช้งานรายการ Estimate |  |  |  |  |  |  | A = ActiveI = Inactive |  |  |  |
| 22 |  | ri_method | Varchar | 10 | N | RI Method ของ Treaty |  |  |  |  |  |  |  |  |  |  |
| 23 |  | sum_records | numeric | 8 | N | จำนวน Record ที่เกิดขึ้นใน BDR |  |  |  |  |  |  |  |  |  |  |
| 24 |  | period | numeric | 6 | Y | งวดทำรายการ | 202601 | ณ วันที่ run actual |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1318879308 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_pol_mem =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_pol_mem | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_pol_mem_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_policy_layer_id | int8 | default by data type | Y | id ของ Record tx_rig_act_policy_layer | tx_rig_act_policy_layer |  |  |  |  |  | 1 |  |  |  |
| 3 |  | cession_no | varchar | 8 | N | เลขที่ลูกค้า |  |  |  |  |  |  |  |  |  |  |
| 4 |  | name | varchar | 100 | N | ชื่อลูกค้า |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sex | varchar | 1 | N | เพศลูกค้า |  |  |  |  |  |  |  |  |  |  |
| 6 |  | dob | varchar | 15 | N | วันเกิดลูกค้า |  |  |  |  |  |  |  |  |  |  |
| 7 |  | age | numeric | 3 | N | อายุลูกค้า |  |  |  |  |  |  |  |  |  |  |
| 8 |  | occ_class | numeric | 1 | N | occupation class ของกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | add_type | varchar | 4 | N | ประเภทความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 2 |  | sa_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | sa_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | sa_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | sa_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | sa_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sr_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | sr_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | sr_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | sr_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sr_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | ri_rate | numeric | 5,4 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | prem_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | prem_mur | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | prem_mot | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | prem_load | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | prem_special | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | prem_dis | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | tot_prem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | com_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
com_acc


===== PAGE 1318879304 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_policy_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_policy_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการกรมธรรม์ใน Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_policy_hd_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_act_hd | tx_rig_act_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 4 |  | reinsurer_no | varchar | 10 | Y | เลขประกันภัยต่อ |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ri_com_date | date |  | Y | วันเริ่มสัญญาครั้งแรก (เดิม) |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 6 |  | first_date | date |  | N | วันเริ่มสัญญาครั้งแรก (ใหม่) |  |  |  |  |  |  |  |  |  |  |
| 7 |  | effective_date | date |  | Y | วันที่มีผลของกรมธรรม์ |  |  |  |  |  |  | 2023-08-11 |  |  |  |
| 8 |  | mode_pay | Varchar | 50 | Y | ประเภทการชำระเบี้ย |  |  |  |  |  |  | Monthly |  |  |  |
| 9 |  | policy_year | numeric | 3 | Y | ปีกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | data_quarter | varchar | 6 | N | ปีและ Quarter ของงวดรายการ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | period | numeric | 6 | N | เดือนและปีของ effective_date |  |  |  |  |  |  |  |  |  |  |
| 12 |  | policy_status | varchar | 20 | N | สถานะของกรมธรรม์ จากประกันกลุ่ม |  |  |  |  |  |  |  |  |  |  |
| 13 |  | report_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user |  |  |  |  |  |  |  |  |  |  |
| 14 |  | ri_policy_status | varchar | 20 | N | สถานะของกรมธรรม์ สำหรับ Group RI |  |  |  |  |  |  |  |  |  |  |
| 15 |  | pol_name | varchar | 255 | N | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 16 |  | nob | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ |  |  |  |  |  |  |  |  |  |  |
| 17 |  | renew_lapse_date | date |  | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | policy_period | numeric | 6 | N | เดือนและปีของวันที่เริ่มต้นสัญญา |  |  |  |  |  |  |  |  |  |  |
| 19 |  | sale_option | numeric | 4 | N | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน |  |  |  |  |  |  |  |  |  |  |
| 20 |  | sale_channel_code | numeric | 4 | N | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op |  |  |  |  |  |  |  |  |  |  |
| 21 |  | code_name_pol | Varchar | 50 | N | ชื่อย่อกรมธรรม์ |  |  |  |  |  |  |  |  |  |  |
| 22 |  | policy_ri_period | Varchar | 50 | N | ช่วงวันที่คุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 23 |  | expire_date | date |  | N | วันที่สิ้นสุดความคุ้มครอง |  |  |  |  |  |  |  |  |  |  |
| 24 |  | f_receipt_date | date |  | N | วันทีออกใบเสร็จใบแรก |  |  |  |  |  |  |  |  |  |  |
| 25 |  | full_year | Boolean |  | N | Flag แสดงว่ากรมธรรม์เป็นการคำนวณครบรอบปีหรือไม่ |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | number_of_mem_life | numeric | 5 | N | จำนวนสมาชิกความคุ้มครอง Life |  |  |  |  |  |  |  |  |  |  |
| 2 |  | number_of_mem_acc | numeric | 5 | N | จำนวนสมาชิกความคุ้มครอง Life |  |  |  |  |  |  |  |  |  |  |
| 3 |  | ex_refund_rate_life | numeric | 14,2 | N | Experience Refund Rate |  |  |  |  |  |  |  |  |  |  |
| 4 |  | ex_refund_rate_acc | numeric | 14,2 | N | Experience Refund Rate |  |  |  |  |  |  |  |  |  |  |
| 5 |  | ex_pol_year_life | numeric | 14,2 | N | Expense at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ex_pol_year_acc | numeric | 14,2 | N | Expense at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 7 |  | gross_prem_life | numeric | 14,2 | N | Gross Premium at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 8 |  | gross_prem_acc | numeric | 14,2 | N | Gross Premium at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 9 |  | claim_paid_year_life | numeric | 14,2 | N | Claims Paid at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 10 |  | claim_paid_year_acc | numeric | 14,2 | N | Claims Paid at the t policy year |  |  |  |  |  |  |  |  |  |  |
| 11 |  | re_ex_refund | numeric | 14,2 | N | Experience Refund |  |  |  |  |  |  |  |  |  |  |
| 12 |  | ori_ex_refund_life | numeric | 14,2 | N | Original Experience Refund paid by the Ceding Company |  |  |  |  |  |  |  |  |  |  |
| 13 |  | ori_ex_refund_acc | numeric | 14,2 | N | Original Experience Refund paid by the Ceding Company |  |  |  |  |  |  |  |  |  |  |
| 14 |  | net_re_prem_life | numeric | 14,2 | N | Net reinsurance premium to the Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 15 |  | net_re_prem_acc | numeric | 14,2 | N | Net reinsurance premium to the Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 16 |  | re_com_life | numeric | 14,2 | N | Reinsurance Commission |  |  |  |  |  |  |  |  |  |  |
| 17 |  | re_com_acc | numeric | 14,2 | N | Reinsurance Commission |  |  |  |  |  |  |  |  |  |  |
| 18 |  | re_ex_refund_life | numeric | 14,2 | N | Reinsurance Experience Refund |  |  |  |  |  |  |  |  |  |  |
| 19 |  | re_ex_refund_acc | numeric | 14,2 | N | Reinsurance Experience Refund |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1318879306 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_policy_layer =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_policy_layer | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2025 | Description | เก็บข้อมูลรายการประมวลผล Actual |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 27/04/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_policy_layer_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | rig_act_policy_hd_id | int8 | default by data type | Y | id ของ Record tx_rig_act_policy_hd | tx_rig_act_policy_hd |  |  |  |  |  | 1 |  |  |  |
| 3 |  | policy_no | varchar | 8 | Y | เลขกรมธรรม์ |  |  |  |  |  |  | GH1663 |  |  |  |
| 4 |  | level | varchar | 2 | Y | Layer |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | premium_rate_life | numeric | 10,4 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 2 |  | premium_rate_add | numeric | 10,4 | N |  |  |  |  |  |  |  |  |  |  |  |
| 3 |  | member_life | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 4 |  | member_add | numeric | 10 | N |  |  |  |  |  |  |  | 250000 |  |  |  |
| 5 |  | ori_sa_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | ori_sa_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | ori_sa_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | ori_sa_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | ori_sa_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 10 |  | ori_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | ori_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | ori_nb_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | ori_nb_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | ori_nb_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | ori_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  | ori_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | ori_ren_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | ori_ren_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | ori_ren_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | ori_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | ori_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | ori_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | ori_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | ori_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | ori_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | ori_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | ori_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | ori_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | ori_tl_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | ori_tl_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | ori_tl_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | ori_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | ori_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | ori_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | ori_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | ori_claim_paid_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | ori_claim_paid_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | ori_claim_paid_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | ori_claim_paid_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | ori_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | ori_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | ori_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | ori_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | re_sr_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | re_sr_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | re_nb_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | re_nb_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | re_ren_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | re_ren_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | re_rev_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | re_rev_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | re_rev_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | re_rev_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | re_rev_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | re_refund_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | re_refund_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | re_refund_prem_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | re_refund_prem_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | re_refund_prem_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | re_tl_prem_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | re_tl_prem_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | re_claim_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | re_claim_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | re_claim_paid_dismem | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | re_claim_paid_di | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | re_claim_paid_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | re_claim_paid_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 68 |  | re_claim_paid_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | re_claim_paid_med_acc | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 70 |  | re_claim_paid_ipd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | re_claim_paid_opd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 72 |  | re_claim_paid_dental | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 73 |  | re_inv | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 74 |  | com_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  | com_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  | com_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  | com_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  | com_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | com_refund_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  | com_refund_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | com_refund_tpd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  | com_refund_ttd | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | com_refund_med | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  | re_ex_refund_paid_life | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | re_ex_refund_paid_add | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  | re_claim_inv_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 87 |  | re_claim_leg_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
| 88 |  | re_claim_med_ex | numeric | 14,2 | N |  |  |  |  |  |  |  |  |  |  | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1316553184 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_soa_dt =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_soa_dt | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By |  | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 17/01/2026 | Description | เก็บข้อมูลเพื่อออกรายงาน SOA |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 29/01/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_soa_dt_id | int8 | 19 | Y | เลขที่ Running auto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_act_soa_hd_id | int8 | 19 | Y | id ของ tx_rig_act_soa_hd | tx_rig_act_soa_hd.rig_act_soa_hd_id |  |  |  |  |  |  |  |  |  |
| ข้อมูลประมวลผล SOA |
| 1 |  | prem_new_life | numeric | 14,2 | N | Reinsurance premium New Business LIFE |  |  |  |  |  |  |  |  |  |  |
| 2 |  | prem_new_add | numeric | 14,2 | N | Reinsurance premium New Business AD&D |  |  |  |  |  |  |  |  |  |  |
| 3 |  | prem_new_tpd | numeric | 14,2 | N | Reinsurance premium New Business TPD |  |  |  |  |  |  |  |  |  |  |
| 4 |  | prem_new_ttd | numeric | 14,2 | N | Reinsurance premium New Business TTD |  |  |  |  |  |  |  |  |  |  |
| 5 |  | prem_new_medical | numeric | 14,2 | N | Reinsurance premium New Business MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 6 |  | prem_new_total | numeric | 14,2 | N | Total Reinsurance premium New Business |  |  |  |  |  |  |  |  |  |  |
| 7 |  | prem_renew_1y_life | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) LIFE |  |  |  |  |  |  |  |  |  |  |
| 8 |  | prem_renew_1y_add | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) AD&D |  |  |  |  |  |  |  |  |  |  |
| 9 |  | prem_renew_1y_tpd | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) TPD |  |  |  |  |  |  |  |  |  |  |
| 10 |  | prem_renew_1y_ttd | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) TTD |  |  |  |  |  |  |  |  |  |  |
| 11 |  | prem_renew_1y_medical | numeric | 14,2 | N | Reinsurance premium Renewal Business (1 st yr.) MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 12 |  | prem_renew_1y_total | numeric | 14,2 | N | Total Reinsurance premium Renewal Business (1 st yr.) |  |  |  |  |  |  |  |  |  |  |
| 13 |  | prem_renew_life | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) LIFE |  |  |  |  |  |  |  |  |  |  |
| 14 |  | prem_renew_add | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) AD&D |  |  |  |  |  |  |  |  |  |  |
| 15 |  | prem_renew_tpd | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) TPD |  |  |  |  |  |  |  |  |  |  |
| 16 |  | prem_renew_ttd | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) TTD |  |  |  |  |  |  |  |  |  |  |
| 17 |  | prem_renew_medical | numeric | 14,2 | N | Reinsurance premium Renewal Business (Renewal) MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 18 |  | prem_renew_total | numeric | 14,2 | N | Total Reinsurance premium Renewal Business (Renewal) |  |  |  |  |  |  |  |  |  |  |
| 19 |  | comm_new_life | numeric | 14,2 | N | Commission 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 20 |  | comm_new_add | numeric | 14,2 | N | Commission 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 21 |  | comm_new_tpd | numeric | 14,2 | N | Commission 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 22 |  | comm_new_ttd | numeric | 14,2 | N | Commission 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 23 |  | comm_new_medical | numeric | 14,2 | N | Commission 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 24 |  | comm_new_total | numeric | 14,2 | N | Total Commission 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 25 |  | comm_renew_life | numeric | 14,2 | N | Commission Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 26 |  | comm_renew_add | numeric | 14,2 | N | Commission Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 27 |  | comm_renew_tpd | numeric | 14,2 | N | Commission Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 28 |  | comm_renew_ttd | numeric | 14,2 | N | Commission Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 29 |  | comm_renew_medical | numeric | 14,2 | N | Commission Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 30 |  | comm_renew_total | numeric | 14,2 | N | Total Commission Renewal |  |  |  |  |  |  |  |  |  |  |
| 31 |  | comm_refund_new_life | numeric | 14,2 | N | Commission Refund 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 32 |  | comm_refund_new_add | numeric | 14,2 | N | Commission Refund 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 33 |  | comm_refund_new_tpd | numeric | 14,2 | N | Commission Refund 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 34 |  | comm_refund_new_ttd | numeric | 14,2 | N | Commission Refund 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 35 |  | comm_refund_new_medical | numeric | 14,2 | N | Commission Refund 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 36 |  | comm_refund_new_total | numeric | 14,2 | N | Total Commission Refund 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 37 |  | comm_refund_renew_life | numeric | 14,2 | N | Commission Refund Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 38 |  | comm_refund_renew_add | numeric | 14,2 | N | Commission Refund Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 39 |  | comm_refund_renew_tpd | numeric | 14,2 | N | Commission Refund Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 40 |  | comm_refund_renew_ttd | numeric | 14,2 | N | Commission Refund Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 41 |  | comm_refund_renew_medical | numeric | 14,2 | N | Commission Refund Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 42 |  | comm_refund_renew_total | numeric | 14,2 | N | Total Commission Refund Renewal |  |  |  |  |  |  |  |  |  |  |
| 43 |  | comm_refund_new_claim_life | numeric | 14,2 | N | Commission Refund 1 st yr. Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 44 |  | comm_refund_new_claim_add | numeric | 14,2 | N | Commission Refund 1 st yr. Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 45 |  | comm_refund_new_claim_tpd | numeric | 14,2 | N | Commission Refund 1 st yr. Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 46 |  | comm_refund_new_claim_ttd | numeric | 14,2 | N | Commission Refund 1 st yr. Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 47 |  | comm_refund_new_claim_medical | numeric | 14,2 | N | Commission Refund 1 st yr. Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 48 |  | comm_refund_new_claim_total | numeric | 14,2 | N | Total Commission Refund 1 st yr. Claim |  |  |  |  |  |  |  |  |  |  |
| 49 |  | comm_refund_renew_claim_life | numeric | 14,2 | N | Commission Refund Renewal Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 50 |  | comm_refund_renew_claim_add | numeric | 14,2 | N | Commission Refund Renewal Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 51 |  | comm_refund_renew_claim_tpd | numeric | 14,2 | N | Commission Refund Renewal Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 52 |  | comm_refund_renew_claim_ttd | numeric | 14,2 | N | Commission Refund Renewal Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 53 |  | comm_refund_renew_claim_medical | numeric | 14,2 | N | Commission Refund Renewal Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 54 |  | comm_refund_renew_claim_total | numeric | 14,2 | N | Total Commission Refund Renewal Claim |  |  |  |  |  |  |  |  |  |  |
| 55 |  | prem_refund_new_life | numeric | 14,2 | N | Premium Refund 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 56 |  | prem_refund_new_add | numeric | 14,2 | N | Premium Refund 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 57 |  | prem_refund_new_tpd | numeric | 14,2 | N | Premium Refund 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 58 |  | prem_refund_new_ttd | numeric | 14,2 | N | Premium Refund 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 59 |  | prem_refund_new_medical | numeric | 14,2 | N | Premium Refund 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 60 |  | prem_refund_new_total | numeric | 14,2 | N | Total Premium Refund 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 61 |  | prem_refund_renew_life | numeric | 14,2 | N | Premium Refund Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 62 |  | prem_refund_renew_add | numeric | 14,2 | N | Premium Refund Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 63 |  | prem_refund_renew_tpd | numeric | 14,2 | N | Premium Refund Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 64 |  | prem_refund_renew_ttd | numeric | 14,2 | N | Premium Refund Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 65 |  | prem_refund_renew_medical | numeric | 14,2 | N | Premium Refund Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 66 |  | prem_refund_renew_total | numeric | 14,2 | N | Total Premium Refund Renewal |  |  |  |  |  |  |  |  |  |  |
| 67 |  | prem_refund_new_claim_life | numeric | 14,2 | N | Premium Refund 1 st yr. Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 68 |  | prem_refund_new_claim_add | numeric | 14,2 | N | Premium Refund 1 st yr. Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 69 |  | prem_refund_new_claim_tpd | numeric | 14,2 | N | Premium Refund 1 st yr. Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 70 |  | prem_refund_new_claim_ttd | numeric | 14,2 | N | Premium Refund 1 st yr. Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 71 |  | prem_refund_new_claim_medical | numeric | 14,2 | N | Premium Refund 1 st yr. Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 72 |  | prem_refund_new_claim_total | numeric | 14,2 | N | Total Premium Refund 1 st yr. Claim |  |  |  |  |  |  |  |  |  |  |
| 73 |  | prem_refund_renew_claim_life | numeric | 14,2 | N | Premium Refund Renewal Claim LIFE |  |  |  |  |  |  |  |  |  |  |
| 74 |  | prem_refund_renew_claim_add | numeric | 14,2 | N | Premium Refund Renewal Claim AD&D |  |  |  |  |  |  |  |  |  |  |
| 75 |  | prem_refund_renew_claim_tpd | numeric | 14,2 | N | Premium Refund Renewal Claim TPD |  |  |  |  |  |  |  |  |  |  |
| 76 |  | prem_refund_renew_claim_ttd | numeric | 14,2 | N | Premium Refund Renewal Claim TTD |  |  |  |  |  |  |  |  |  |  |
| 77 |  | prem_refund_renew_claim_medical | numeric | 14,2 | N | Premium Refund Renewal Claim MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 78 |  | prem_refund_renew_claim_total | numeric | 14,2 | N | Total Premium Refund Renewal Claim |  |  |  |  |  |  |  |  |  |  |
| 79 |  | revival_prem_new_life | numeric | 14,2 | N | Revival Premiums 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 80 |  | revival_prem_new_add | numeric | 14,2 | N | Revival Premiums 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 81 |  | revival_prem_new_tpd | numeric | 14,2 | N | Revival Premiums 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 82 |  | revival_prem_new_ttd | numeric | 14,2 | N | Revival Premiums 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 83 |  | revival_prem_new_medical | numeric | 14,2 | N | Revival Premiums 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 84 |  | revival_prem_new_total | numeric | 14,2 | N | Total Revival Premiums 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 85 |  | revival_prem_renew_life | numeric | 14,2 | N | Revival Premiums Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 86 |  | revival_prem_renew_add | numeric | 14,2 | N | Revival Premiums Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 87 |  | revival_prem_renew_tpd | numeric | 14,2 | N | Revival Premiums Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 88 |  | revival_prem_renew_ttd | numeric | 14,2 | N | Revival Premiums Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 89 |  | revival_prem_renew_medical | numeric | 14,2 | N | Revival Premiums Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 90 |  | revival_prem_renew_total | numeric | 14,2 | N | Total Revival Premiums Renewal |  |  |  |  |  |  |  |  |  |  |
| 91 |  | claim_new_life | numeric | 14,2 | N | Claim 1 st yr. LIFE |  |  |  |  |  |  |  |  |  |  |
| 92 |  | claim_new_add | numeric | 14,2 | N | Claim 1 st yr. AD&D |  |  |  |  |  |  |  |  |  |  |
| 93 |  | claim_new_tpd | numeric | 14,2 | N | Claim 1 st yr. TPD |  |  |  |  |  |  |  |  |  |  |
| 94 |  | claim_new_ttd | numeric | 14,2 | N | Claim 1 st yr. TTD |  |  |  |  |  |  |  |  |  |  |
| 95 |  | claim_new_medical | numeric | 14,2 | N | Claim 1 st yr. MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 96 |  | claim_new_total | numeric | 14,2 | N | Total Claim 1 st yr. |  |  |  |  |  |  |  |  |  |  |
| 97 |  | claim_renew_life | numeric | 14,2 | N | Claim Renewal LIFE |  |  |  |  |  |  |  |  |  |  |
| 98 |  | claim_renew_add | numeric | 14,2 | N | Claim Renewal AD&D |  |  |  |  |  |  |  |  |  |  |
| 99 |  | claim_renew_tpd | numeric | 14,2 | N | Claim Renewal TPD |  |  |  |  |  |  |  |  |  |  |
| 100 |  | claim_renew_ttd | numeric | 14,2 | N | Claim Renewal TTD |  |  |  |  |  |  |  |  |  |  |
| 101 |  | claim_renew_medical | numeric | 14,2 | N | Claim Renewal MEDICAL |  |  |  |  |  |  |  |  |  |  |
| 102 |  | claim_renew_total | numeric | 14,2 | N | Total Claim Renewal |  |  |  |  |  |  |  |  |  |  |
| 103 |  | claim_exp_investigation_fee | numeric | 14,2 | N | Claim Expenses INVESTIGATION FEE |  |  |  |  |  |  |  |  |  |  |
| 104 |  | claim_exp_legal_fee | numeric | 14,2 | N | Claim Expenses LEGAL FEE |  |  |  |  |  |  |  |  |  |  |
| 105 |  | claim_exp_ex_gratia | numeric | 14,2 | N | Claim Expenses EX GRATIA |  |  |  |  |  |  |  |  |  |  |
| 106 |  | claim_exp_med | numeric | 14,2 | N | Claim Expenses MEDICAL EVIDENCE |  |  |  |  |  |  |  |  |  |  |
| 107 |  | claim_exp_total | numeric | 14,2 | N | Total Claim Expenses |  |  |  |  |  |  |  |  |  |  |
| 108 |  | admin_comm_remittance | numeric | 14,2 | N | Admin. Commission (Remittance) |  |  |  |  |  |  |  |  |  |  |
| 109 |  | experience_refund_share | numeric | 14,2 | N | Experience Refund Share |  |  |  |  |  |  |  |  |  |  |
| 110 |  | profit_comm | numeric | 14,2 | N | Profit Commission |  |  |  |  |  |  |  |  |  |  |
| 111 |  | sub_total_due_to_reinsurer | numeric | 14,2 | N | Sub Total (due to Reinsurer) |  |  |  |  |  |  |  |  |  |  |
| 112 |  | sub_total_due_from_reinsurer | numeric | 14,2 | N | Sub Total (due from Reinsurer) |  |  |  |  |  |  |  |  |  |  |
| 113 |  | due_to_reinsurer | numeric | 14,2 | N | due to Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 114 |  | due_from_reinsurer | numeric | 14,2 | N | due from Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 115 |  | remark | varchar | 100 | N | remark |  |  |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทีกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทีกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1316553186 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_act_soa_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_soa_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 29/01/2026 | Description | เก็บข้อมูลเพื่อออกรายงาน SOA |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_act_soa_hd_id | int8 | 19 | Y | เลขที่ Running auto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_act_hd_id | int8 | 19 | Y | id ของ tx_rig_act_hd | tx_rig_act_hd.rig_act_hd_id |  |  |  |  |  |  |  |  |  |
| ข้อมูลประมวลผล SOA |
| 1 |  | period | varchar | 100 | N | remark |  |  |  |  |  |  |  |  |  |  |
| 2 |  | total_profit_comm | numeric | 19,4 | N | Total pc |  |  |  |  |  |  |  |  |  |  |
| 3 |  | net_balance_due_to_reinsurer | numeric | 19,4 | N | net balance re |  |  |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทีกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทีกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1317109856 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_allocation_profit =====
| Database | newri | Link Previous Version | - |
| Table | tx_rig_allocation_profit | Data Source | - |
| Project Name | โครงการ Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 02/02/2026 | Description | เก็บข้อมูลรายการ Allocation ของ Profit Comm |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_allocation_profit_id | int8 |  | Y | เลขที่ Runningauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_profit_dt_id | int8 |  | Y | tx_rig_profit_dt.rig_profit_dt_id |  |  |  |  |  |  | 1 |  |  |  |
| 4 |  | treaty_code | varchar | 50 | Y | รหัสสัญญา |  |  |  |  |  |  | 1 |  |  |  |
| 5 |  | year | int | 4 | Y | ปีที่คำนวณการ Allocation |  |  |  |  |  |  | 2026 |  |  |  |
| 6 |  | policy_no | varchar | 50 | Y | กรมธรรม์ที่มีการ Allocation |  |  |  |  |  |  | GH1111 |  |  |  |
| 7 |  | total_ri_prem | numeric | 25, 2 | Y | จำนวน RI Premium ทั้งหมดภายในปีนั้นของ Policy |  |  |  |  |  |  | 1000.00 |  |  |  |
| 8 |  | pc_allocation | numeric | 25, 2 | Y | จำนวน Allocation ของแต่ละ Policy |  |  |  |  |  |  | 2000.00 |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | Varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1319600322 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_pc_offset =====
| Database | newri | Link Previous Version | - |
| Table | tx_rig_pc_offset | Data Source | - |
| Project Name | โครงการ Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 19/10/2566 | Description | เก็บข้อมูลการ offest Profit commission |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_pc_offset_id | int8 |  | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 3 | FK | cf_reinsurer_id | int8 |  | Y | cf_reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 4 |  | quarter_year | numeric | 4 | Y | Quarter year |  |  |  |  |  |  |  |  |  |  |
| 5 |  | reinsurer_code | varchar | 50 | Y | reinsurer_code |  |  |  |  |  |  |  |  |  |  |
| 6 |  | total_ri_prem | numeric | 19,4 | Y | ผลรวม RI premium ทั้งหมด |  |  |  |  |  |  |  |  |  |  |
| 7 |  | total_ri_pc | numeric | 19,4 | Y | ผลรวม RI profit comm ทั้งหมด |  |  |  |  |  |  |  |  |  |  |
| 8 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | update_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | update_by | varchar | 50 | N | ผู้อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1316553335 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_profit_comm =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_profit_comm | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 20/01/2025 | Description | เก็บข้อมูลรายการประมวลผล Profit Commission |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | profit_comm_id | int(8) |  | Y | เลขที่ Running auto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_act_hd_id | int(8) |  | Y | act hd id | tx_rig_act_hd.rig_act_hd_id |  |  |  |  |  |  |  |  |  |
|  | FK | rig_profit_dt_id | int(8) |  | Y | rig_profit_dt_id | tx_rig_profit_dt.rig_profit_dt_id |  |  |  |  |  |  |  |  |  |
| 3 |  | cf_treaty_id | int(8) |  | Y | cf_treaty_id | tx_rig_act_hd.cf_treaty_id |  |  |  |  |  |  |  |  |  |
| 4 |  | treaty_code | varchar | 50 | Y | รหัสสัญญา |  |  |  |  |  |  |  |  |  |  |
| 5 |  | quarter_year | numeric | 4 | Y | ปีไตรมาส |  |  |  |  |  |  |  |  |  |  |
| 6 |  | unearn_prem_begin | numeric | 19,4 | N | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ ต้นปีบัญชีปัจจุบัน |  |  |  |  |  |  |  |  |  |  |
| 7 |  | reserve_claim_begin | numeric | 19,4 | N | เงินสำรองค่าสินไหมค้างจ่าย ณ ต้นปีบัญชีปัจจุบัน |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sum_prem | numeric | 19,4 | N | เบี้ยประกันสุทธิของปีปัจจุบัน หลังหักเบี้ยคืน (Refund Premium) แล้ว |  |  |  |  |  |  |  |  |  |  |
| 9 |  | total_income | numeric | 19,4 | N | ผลรวมของรายได้ทั้งหมดในส่วน Incomes |  |  |  |  |  |  |  |  |  |  |
| 10 |  | sum_claim | numeric | 19,4 | N | ค่าสินไหม ค่าตรวจสอบ และค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในปีปัจจุบัน |  |  |  |  |  |  |  |  |  |  |
| 11 |  | sum_prem_admin | numeric | 19,4 | N | ค่าใช้จ่ายในการดำเนินงานของ Reinsurer |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sum_prem_unearn | numeric | 19,4 | N | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปี |  |  |  |  |  |  |  |  |  |  |
| 13 |  | reserve_claim_end | numeric | 19,4 | N | เงินสำรองค่าสินไหมค้างจ่าย ณ สิ้นปี |  |  |  |  |  |  |  |  |  |  |
| 14 |  | sum_comm | numeric | 19,4 | N | ค่านายหน้าประกันต่อที่จ่ายให้ Reinsurer ในปีนั้น |  |  |  |  |  |  |  |  |  |  |
| 15 |  | sum_experience | numeric | 19,4 | N | เงิน Experience Refund ที่บริษัทรับประกันต่อจ่ายคืนให้ สำหรับกรมธรรม์ GLI ในปีปัจจุบัน |  |  |  |  |  |  |  |  |  |  |
| 16 |  | negative_net_balance | numeric | 19,4 | N | ยอดขาดทุนสุทธิ ที่ยกมาจากการคำนวณของปีก่อนหน้า |  |  |  |  |  |  |  |  |  |  |
| 17 |  | total_outgoes | numeric | 19,4 | N | ผลรวมของรายจ่ายทั้งหมดในส่วน Outgoes |  |  |  |  |  |  |  |  |  |  |
| 18 |  | net_balance | numeric | 19,4 | N | ผลต่างสุทธิระหว่างรายได้และรายจ่าย |  |  |  |  |  |  |  |  |  |  |
| 19 |  | percent_profit_comm | numeric | 19,4 | N | อัตราส่วนแบ่งกำไร (Profit Commission Rate) ตามสัญญาประกันต่อ |  |  |  |  |  |  |  |  |  |  |
| 20 |  | net_profit_comm | numeric | 19,4 | N | จำนวนเงิน Profit Commission ที่ Reinsurer ต้องจ่ายคืนสำหรับปีปัจจุบัน |  |  |  |  |  |  |  |  |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | timestamp |  | Y | วันที่บันทีกรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทีกรายการ |  |  |  |  |  |  | system |  |  |  |
| 3 |  | updated_date | timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  | 2023-06-09 15:49:19.872 +0700 |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  | system |  |  |  |


===== PAGE 1319600177 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_profit_dt =====
| Database | newri | Link Previous Version | - |
| Table | tx_rig_profit_dt | Data Source | - |
| Project Name | โครงการ Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 12/02/2026 | Description | เก็บข้อมูล Profit commission process (detail) |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_profit_dt_id | int8 |  | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | rig_act_hd_id | int8 |  | Y | tx_rig_act_hd.rig_act_hd_id |  |  |  |  |  |  | 1 |  |  |  |
| 3 | FK | rig_profit_hd_id | int8 |  |  | tx_rig_profit_hd.rig_profit_hd_id |  |  |  |  |  |  |  |  |  |  |
| 4 | FK | cf_reinsurer_id | int8 |  | Y | cf_reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 5 | FK | cf_treaty_id | int8 |  | Y | cf_rig_treaty |  |  |  |  |  |  | 1 |  |  |  |
| 6 |  | quarter_year | numeric | 4 | Y | Quarter year |  |  |  |  |  |  | 2025 |  |  |  |
| 7 |  | reinsurer_code | varchar | 50 | Y | reinsurer_code |  |  |  |  |  |  |  |  |  |  |
| 8 |  | treaty_code | varchar | 50 | Y | treaty_code |  |  |  |  |  |  |  |  |  |  |
| 9 |  | soa_flag | boolean |  | Y | flag สำหรับระบุยอด Profit Comm ใน SOA Template |  |  |  |  |  |  |  |  |  |  |
| 10 |  | total_ri_prem | numeric | 19,4 | Y | ผลรวม RI premium ของ rig_profit_dt_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | total_ri_pc | numeric | 19,4 | Y | ผลรวม RI profit comm ของ rig_profit_dt_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 12 |  | sum_pc_allocation | numeric | 19,4 | Y | ผลรวม sum_pc_allocation ของ rig_profit_dt_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 13 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 14 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 15 |  | update_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |
| 16 |  | update_by | varchar | 50 | N | ผู้อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1319600564 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > 02. Actual - Output Table > tx_rig_profit_hd =====
| Database | newri | Link Previous Version | - |
| Table | tx_rig_profit_hd | Data Source | - |
| Project Name | โครงการ Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 12/02/2026 | Description | เก็บข้อมูล Profit commission process (HD) |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_profit_hd_id | int8 |  | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | FK | cf_reinsurer_id | int8 |  | Y | cf_reinsurer |  |  |  |  |  |  | 1 |  |  |  |
| 3 |  | year | numeric | 4 | Y | Quarter year |  |  |  |  |  |  | 2025 |  |  |  |
| 4 |  | reinsurer_code | varchar | 50 | Y | reinsurer_code |  |  |  |  |  |  |  |  |  |  |
| 5 |  | status | varchar | 20 | Y | สถานะของการประมวลผล Profit CommLookup ที่ cf_lookup_catalogparent_id = 1003000 |  |  |  |  |  |  |  | SUCCESSS |  |  |
| 6 |  | total_ri_prem | numeric | 19,4 | Y | ผลรวม RI premium ของ rig_profit_hd_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 7 |  | total_ri_pc | numeric | 19,4 | Y | ผลรวม RI profit comm ของ rig_profit_hd_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 8 |  | sum_pc_allocation | numeric | 19,4 | Y | ผลรวม sum_pc_allocation ของ rig_profit_hd_id นี้ |  |  |  |  |  |  |  |  |  |  |
| 9 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 10 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 11 |  | update_date | Timestamp |  | N | วันที่อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |
| 112 |  | update_by | varchar | 50 | N | ผู้อัพเดทรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1319601495 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > tx_rig_path_file =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_path_file | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลรายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | path_key | Varchar | 50 | Y | เส้นทางไฟล์ |  |  |  |  |  |  | LND_STG |  |  |  |
| 2 |  | directory | Varchar | 200 | Y | โครงสร้างจัดระเบียบไฟล์และโฟลเดอร์แบบลำดับชั้น |  |  |  |  |  |  | \groupri\landing\{period}\report_landing\ |  |  |  |
| 3 |  | description | Varchar | 200 | Y | รายละเอียด |  |  |  |  |  |  | list policy |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1319370813 | Functional Specification > 04. Persistence Specification. > Transaction > 06. Output Table > tx_rig_path_key =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_path_key | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | suthanee.sa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 13/02/2026 | Description | เก็บข้อมูลไฟล์รายการประมวลผล Estimate |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | DatasourceTable.Field | FunctionTransform Data | Lookup Table.Field | Possible Value | Min Value | Max Value | Example | เงื่อนไขในการบันทึก | Updated By | Remark |
| 1 | PK | rig_path_key_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 |  | report_type | Varchar | 15 | Y | EST_STG/ EST_BDR / ACT_STG |  |  |  |  |  |  | EST / ACT |  |  |  |
| 3 |  | rig_hd_id | int8 | default by data type | Y | id ของ Estimate |  |  |  |  |  |  | 1 | tx_rig_process_hd.rig_process_hd_id tx_rig_est_hd.rig_est_hd_id |  |  |
| 5 | FK | path_key | Varchar | 50 | Y | ตัวย่อของ Treaty |  |  |  |  |  |  |  |  |  |  |
|  |  | file_name | Varchar | 100 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  |  |  |  |  |


===== PAGE 1312260202 | Functional Specification > 04. Persistence Specification. > Transaction > lg_tracking_process =====
| Database | ri group | Link Previous Version | - |
| Table | lg_tracking_process | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-13 | Description | ตารางเก็บข้อมูลสถานะการทำงาน |
| Updated By | pongsathorn.pa |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Condition | Example |
| 1 | PK | tracking_id | varchar | 100 | Y | UUID |  |  |
| 2 |  | process_name | varchar | 100 | Y | ชื่อกระบวนการการทำงาน |  |  |
| 3 |  | status | varchar | 50 | Y | สถานะการทำงาน |  |  |
| 4 |  | remark | varchar | 255 | N | หมายเหตุ(เพิ่มเติม) |  |  |
| 5 |  | percent | numeric | 3,0 | N | เก็บ Percent การประมวลผล |  |  |
| 6 |  | current_step | varchar | 100 | N | process ปัจจุบัน |  |  |
| 7 |  | start_date | timestamp |  | N | วันเวลาที่เริ่มประมวลผล |  |  |
| 8 |  | finish_date | timestamp |  | N | วันเวลาที่เสร็จสิ้นประมวลผล |  |  |
| 9 |  | treaty_code | varchar | 50 | N | ตัวย่อของ Treaty |  |  |
| 10 |  | period | numeric | 6,0 | N | งวดทำรายการ |  |  |
| 11 |  | row_count_new_renew | numeric | 10,0 | N | จำนวนรายการ new_renew |  |  |
| 12 |  | row_count_alter | numeric | 10,0 | N | จำนวนรายการ alter |  |  |
| 13 |  | row_count_claim | numeric | 10,0 | N | จำนวนรายการ claim |  |  |
| 14 |  | ref_key | bigint | 64,0 | N | id อ้างอิง |  |  |
| 15 |  | created_date | timestamp |  | Y | วันที่สร้างรายการ |  |  |
| 16 |  | created_by | varchar | 50 | Y | ผู้สร้างรายการ |  |  |
| 17 |  | updated_date | timestamp |  | N | วันที่แก้ไขรายการ |  |  |
| 18 |  | updated_by | varchar | 50 | N | ผู้แก้ไขรายการ |  |  |


===== PAGE 1327432229 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_act_claim_cms =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_act_claim_cms | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 10/03/2026 | Description | เก็บข้อมูลการจ่ายของระบบ New Claim นำเข้าผ่าน msa-claimtx |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | id | numeric | 10 | Y | รหัสอ้างอิงรายการเตรียมจ่าย |  |  |
| 2 |  | batch_billing_no | varchar | 25 | N | เลขที่รับเรื่องวางบิล |  |  |
| 3 |  | batch_no | varchar | 25 | N | เลขที่คุมเอกสาร (ระบบพิจารณาสินไหมเดิม) |  |  |
| 4 |  | policy_no | varchar | 20 | Y | เลขที่กรมธรรม์ |  |  |
| 5 |  | claim_no | varchar | 25 | Y | เลขที่สินไหม |  |  |
| 6 |  | claim_channel | varchar | 20 | N | ช่องทางการเรียกร้อง |  |  |
| 7 |  | certificate_no | varchar | 10 | Y | Certificate Number |  |  |
| 8 |  | paid | numeric | 15,2 | N | ยอดอนุมัติจ่าย รพ. |  |  |
| 9 |  | discount | numeric | 15,2 | N | ส่วนลด รพ. |  |  |
| 10 |  | client_paid | numeric | 15,2 | N | ยอดเรียกเก็บลูกค้า |  |  |
| 11 |  | approval_status | varchar | 20 | N | สถานะการพิจารณา (ระดับรายการ)WVE = รอตรวจสอบVTS = ตรวจสอบสำเร็จCANT = ยกเลิกรายการ |  |  |
| 12 |  | approval_date | timestamp |  | N | วันที่พิจารณาสินไหม |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1325564636 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_est_claim_cms =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_est_claim_cms | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | pongsathorn.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 10/03/2026 | Description | เก็บข้อมูลการจ่ายของระบบ New Claim นำเข้าผ่าน msa-claimtx |
| Updated By |  |  |  |
| Updated Date (yyyy-mm-dd ) |  |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | id | numeric | 10 | Y | รหัสอ้างอิงรายการเตรียมจ่าย |  |  |
| 2 |  | batch_billing_no | varchar | 25 | N | เลขที่รับเรื่องวางบิล |  |  |
| 3 |  | batch_no | varchar | 25 | N | เลขที่คุมเอกสาร (ระบบพิจารณาสินไหมเดิม) |  |  |
| 4 |  | policy_no | varchar | 20 | Y | เลขที่กรมธรรม์ |  |  |
| 5 |  | claim_no | varchar | 25 | Y | เลขที่สินไหม |  |  |
| 6 |  | claim_channel | varchar | 20 | N | ช่องทางการเรียกร้อง |  |  |
| 7 |  | certificate_no | varchar | 10 | Y | Certificate Number |  |  |
| 8 |  | paid | numeric | 15,2 | N | ยอดอนุมัติจ่าย รพ. |  |  |
| 9 |  | discount | numeric | 15,2 | N | ส่วนลด รพ. |  |  |
| 10 |  | client_paid | numeric | 15,2 | N | ยอดเรียกเก็บลูกค้า |  |  |
| 11 |  | approval_status | varchar | 20 | N | สถานะการพิจารณา (ระดับรายการ)WVE = รอตรวจสอบVTS = ตรวจสอบสำเร็จCANT = ยกเลิกรายการ |  |  |
| 12 |  | approval_date | timestamp |  | N | วันที่พิจารณาสินไหม |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1325564769 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_est_claim_cms > LD_DW_CMS =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | id | numeric | 10 | Y | รหัสอ้างอิงรายการเตรียมจ่าย |  |  |
| 2 |  | batch_billing_no | varchar | 25 | N | เลขที่รับเรื่องวางบิล |  |  |
| 3 |  | batch_no | varchar | 25 | N | เลขที่คุมเอกสาร (ระบบพิจารณาสินไหมเดิม) |  |  |
| 4 |  | policy_no | varchar | 20 | Y | เลขที่กรมธรรม์ |  |  |
| 5 |  | claim_no | varchar | 25 | Y | เลขที่สินไหม |  |  |
| 6 |  | claim_channel | varchar | 20 | N | ช่องทางการเรียกร้อง |  |  |
| 7 |  | certificate_no | varchar | 10 | Y | Certificate Number |  |  |
| 8 |  | paid | numeric | 15,2 | N | ยอดอนุมัติจ่าย รพ. |  |  |
| 9 |  | discount | numeric | 15,2 | N | ส่วนลด รพ. |  |  |
| 10 |  | client_paid | numeric | 15,2 | N | ยอดเรียกเก็บลูกค้า |  |  |
| 11 |  | approval_status | varchar | 20 | N | สถานะการพิจารณา (ระดับรายการ)WVE = รอตรวจสอบVTS = ตรวจสอบสำเร็จCANT = ยกเลิกรายการ |  |  |
| 12 |  | approval_date | timestamp |  | N | วันที่พิจารณาสินไหม |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEM |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1319601491 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_nature_business =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_nature_business | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-27 | Description | เก็บข้อมูลประเภทธุรกิจของบริษัทประกันกลุ่ม |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 12/02/2026 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขการบันทึก |
| 1 | PK | rig_nature_business_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | Index | dbd_code | varchar | 20 | Y | รหัสกรมพัฒนาธุรกิจการค้า | 80309 |  |
| 3 |  | type_business_th | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาไทย | มหาวิทยาลัยและสถาบันอุดมศึกษาอื่นๆ |  |
| 4 |  | type_business_en | varchar | 250 | N | ประเภทธุรกิจของบริษัท ภาษาอังกฤษ | University | ผู้ใช้งานบันทึกข้อมูลจากหน้าจอจัดการ |
| 5 |  | remark | varchar | 250 | N | หมายเหตุ |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | System |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | System |  |


===== PAGE 1301807481 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_policy_base =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_policy_base | Data Source | tx_mps_master_i05 |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-11-25 | Description | เก็บข้อมูลตั้งฐานกรมธรรม์ประกันกลุ่มที่เคยมีการส่งประกันต่อก่อนเริ่มระบบ New Group RIประมวลผลข้อมูลมากจาก tx_mps_master_i05 อ้างอิงการดึงข้อมูล IRI-GRP-014 ตั้งฐานกรมธรรม์ |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_policy_base_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 | index | policy_no | varchar | 50 | Y | เลขที่กรมธรรม์ | GH1993 |  |
| 3 | index | policy_year | Numeric | 2 | Y | ปีกรมธรรม์ | 2 |  |
| 4 |  | policy_status | varchar | 201 | N | สถานะของกรมธรรม์ประกันกลุ่ม | I |  |
| 5 |  | treaty_code | varchar | 50 | N | รหัสสัญญาบริษัทประกันภัยต่อ |  |  |
| 6 |  | ri_status | varchar | 20 | NY | สถานะการส่งประกันภัยต่อ |  |  |
| 7 |  | ri_commencement_date | date |  | N | วันเริ่มสัญญาประกันภัยต่อ | 25/11/2015 |  |
| 8 |  | period | varchar | 6 | NY | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | 202512 |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEMSYSTEM_MIGRATE |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1291419974 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_process_hd =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_process_hd | Data Source | - |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | koawkamol.pa | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2025-10-14 | Description | เก็บข้อมูล header ของรายการกรมธรรม์ประกันกลุ่ม ที่ส่งประกันต่อ |
| Updated By | suthanee.sa |  |  |
| Updated Date (yyyy-mm-dd ) | 2026-01-23 |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_process_hd_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | process_code | varchar | 20 | Y | Code ของ Process | RIG_AUTO_01 |  |
| 3 |  | status | varchar | 10 | Y |  | SUCCESS, ERROR | if batch success then 'Success'if batch error then 'Error' |
| 4 |  | usage_status | varchar | 10 | Y |  | ACTIVE, INACTIVE |  |
| 5 |  | period | numeric | 6 | N | งวดทำรายการ | 202301 | ณ วันที่ batch run |
| 6 |  | ri_type | varchar | 1 | Y | Estimate/ Actual/ Master | E,A,M | if Estimate then 'E' if Actual then 'A'if Master then 'M' |
| 7 |  | sum_record | int4 | default by data type | Y | จำนวนรวมรายการ | 1,000 |  |
| 8 |  | start_date | timestamp |  | N | วันเวลาที่เริ่มประมวลผล | 2023-06-09 15:49:19.872 +0700 |  |
| 9 |  | finish_date | timestamp |  | N | วันเวลาที่เสร็จสิ้นประมวลผล | 2023-06-09 15:49:19.872 +0700 |  |
| 10 |  | percent | numeric | 3,0 | N | เก็บ Percent การประมวลผล |  |  |
| 11 |  | year | numeric | 4 | N | ปีที่ทำรายการ | 2023 |  |
| 12 |  | quarter | numeric | 1 | N | Quater ทำรายการ | 1 |  |
| 13 |  | treaty_code | varchar | 100 | N | Treaty Code |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | system |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | system |  |


===== PAGE 1316094708 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_profit_comm_base =====
| Database | ri group | Link Previous Version | - |
| Table | tx_rig_profit_comm_base | Data Source | tx_ri_std_all |
| Project Name | โครงการ New Group RI | Data Security | Internal Use |
| Version | 1.0 | Objective | Application Data |
| Created By | akkarawat.le | Year Type | A.D. |
| Created Date (yyyy-mm-dd ) | 2026-01-28 | Description | เก็บข้อมูลตั้งฐาน Profit Commission |
| Updated By | - |  |  |
| Updated Date (yyyy-mm-dd ) | - |  |  |
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_profit_comm_base_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | year | varchar | 4 | Y | ปีงบประมาณข้อมูล Profit Commission | 2 | yyyy |
| 3 |  | period | varchar | 6 | N | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | 202512 | yyyyMM |
| 4 |  | ri_period | varchar | 64 | N | งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) | 202512 | yyyyMM |
| 5 | index | reinsurer | varchar | 50 | Y | บริษัทส่งประกันภัยต่อ | GH1993 |  |
| 6 | index | treaty_code | varchar | 50 | N | สัญญาส่งประกันภัยต่อ | I |  |
| 7 |  | total_premium | numeric | 25,2 | N | ผลรวมเบี้ยประกันภัยจาก STD | 1,500,000.00 | #,###.## |
| 8 |  | negative_net_balance | numeric | 25,2 | N | ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า | -500,000.00 | #,###.##**เฉพาะข้อมูลจาก File Profit Commission |
| 9 |  | quarter_year | varchar | 4 | N | ปีที่ส่งประกันภัยต่อ | 2025 | yyyy |
| 10 |  | quarter_period | varchar | 2 | N | ไตรมาสส่งประกันภัยต่อ | Q1 |  |
| 11 |  | profit_flag | varchar | 1 | Y | R = ข้อมูลจาก STD ManualRII = ข้อมูลจาก File |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEMSYSTEM_MIGRATE |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


===== PAGE 1316094712 | Functional Specification > 04. Persistence Specification. > Transaction > tx_rig_profit_comm_base > BS_PF_01 =====
| No. | Key | Attribute Name | Data Type | Length | Not Null (Y/N) | Description | Example | เงื่อนไขในการบันทึก |
| 1 | PK | rig_profit_comm_base_id | numeric | 8 | Y | เลขที่ Running |  | auto generate |
| 2 |  | year | varchar | 4 | Y | ปีงบประมาณข้อมูล Profit Commission | 2 | yyyy |
| 3 |  | period | varchar | 6 | N | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | 202512 | yyyyMM |
| 4 |  | ri_period | varchar | 64 | N | งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) | 202512 | yyyyMM |
| 5 | index | reinsurer | varchar | 50 | Y | บริษัทส่งประกันภัยต่อ | GH1993 |  |
| 6 | index | treaty_code | varchar | 50 | N | สัญญาส่งประกันภัยต่อ | I |  |
| 7 |  | total_premium | numeric | 25,2 | N | ผลรวมเบี้ยประกันภัยจาก STD | 1,500,000.00 | #,###.## |
| 8 |  | negative_net_balance | numeric | 25,2 | N | ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า | -500,000.00 | #,###.##**เฉพาะข้อมูลจาก File Profit Commission |
| 9 |  | quarter_year | varchar | 4 | N | ปีที่ส่งประกันภัยต่อ | 2025 | yyyy |
| 10 |  | quarter_period | varchar | 2 | N | ไตรมาสส่งประกันภัยต่อ | Q1 |  |
| 11 |  | profit_flag | varchar | 1 | Y | R = ข้อมูลจาก STD ManualRII = ข้อมูลจาก File |  |  |
| ข้อมูลระบบ |
| 1 |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 2 |  | created_by | varchar | 50 | Y | ผู้บันทึกรายการ | SYSTEMSYSTEM_MIGRATE |  |
| 3 |  | updated_date | Timestamp |  | N | วันที่ปรับปรุงรายการ | 2023-06-09 15:49:19.872 +0700 |  |
| 4 |  | updated_by | varchar | 50 | N | ผู้ปรับปรุงรายการ | SYSTEM |  |


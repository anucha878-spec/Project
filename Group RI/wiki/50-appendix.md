===== PAGE 1291420709 | Functional Specification > 09. Appendix =====
(empty page)


===== PAGE 1291420727 | Functional Specification > 09. Appendix > A01. Template e-mail แจ้งผลการประมวลผล =====
(empty page)


===== PAGE 1322189031 | Functional Specification > 09. Appendix > A01. Template e-mail แจ้งผลการประมวลผล > Template e-mail แจ้งผลการนำเข้าข้อมูลกรณีผิดปกติ (Actual) =====
Email สำหรับแจ้ง เจ้าหน้าที่ IT Support โดยจะส่งกรณีที่พบ tx_rig_process_hd.status = 'ERROR' อย่างน้อย 1 รายการ เท่านั้น
เพื่อดำเนินการประสานงานผู้เกี่ยวข้องแก้ไขข้อมูลหรือ re-trigger process ที่พบปัญหาในลำกับต่อไป
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $SystemDate | วันเวลา ณ ปัจจุบัน |  | วันเวลา ณ ปัจจุบันที่ กระบวนการนำเข้าข้อมูลทั้งหมดสำเร็จ | 01/01/2026 24:00:00 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_process_hd.period | group by tx_rig_process_hd.period (YYYY/MM) | 2026/01 |
| $StartDate | วันที่เริ่มนำเข้าข้อมูล | tx_rig_process_hd.created_date | ใช้ tx_rig_process_hd.created_date ลำดับแรกของ process DD/MM/YYYY (ค.ศ.) HH:MM:SS (24hr.) | 01/01/2026 24:00:00 |
| $sumCountErr | จำนวนรายการที่ไม่สำเร็จ | tx_rig_process_hd | count รายการที่ tx_rig_process_hd.status = 'ERROR' | 3 |
| $runningNo | ลำดับของ process | ms_rig_process.seq_landing | แสดงลำดับของรายการตาม ms_rig_process.process_group จากน้อยไปมาก | 1 |
| $processCode | Process Code | ms_rig_process.process_code | แสดง Process Code ตาม ms_rig_process.process_code | RIG_AUTO_01 |
| $processName | Process Name | ms_rig_process.process_name | แสดง Process Name ตาม ms_rig_process.process_name | RIG-PS-01-01 Policy |
| $status | Process Status | tx_rig_process_hd.status | แสดง Process Status ตาม tx_rig_process_hd.status | SUCCESS |
| $responseCode | Exception error |  | throw exception error กรณี tx_rig_process_hd.status = 'ERROR'กรณี tx_rig_process_hd.status = 'SUCCESS' ไม่ต้องแสดง |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Data_Actual" มาค้นหาที่ตาราง cf_rig_email โดยเทียบกับ cf_rig_email .email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_rig_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
|  |
| From | cf_rig_email .email_from |
| To | cf_rig_email .email_from |
| CC | cf_rig_email .email_cc |
| Subject | cf_rig_email .email_subject วันที่ $systemDate |
| Detail | เรียน เจ้าหน้าที่ IT Supportพบปัญหาที่กระบวนการเตรียมข้อมูลสำหรับประมวลผล Actual Group RIช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $StartDate ตรวจพบจำนวนรายการที่ไม่สำเร็จทั้งหมด $sumCountErr รายการ ดังนี้Landing Process (ms_rig_process where process_group = 'RIG_LANDING')No.Process CodeProcess NameStatusResponse$runningNo$processCode$processName$status$responseCode Snapshot Process (ms_rig_process where process_group = 'RIG_ACT_SNAPSHOT')No.Process CodeProcess NameStatusResponse$runningNo$processCode$processName$status$responseCode Staging Process (ms_rig_process where process_group = 'RIG_ACT_STAGING')No.Process CodeProcess NameStatusResponse$runningNo$procesCode$processName$status$responseCode จึงเรียนมาเพื่อทราบและประสานงานผู้ที่เกี่ยวข้องเพื่อแก้ไขปัญหาในลำดับถัดไปNew Group RI |


===== PAGE 1322188892 | Functional Specification > 09. Appendix > A01. Template e-mail แจ้งผลการประมวลผล > Template e-mail แจ้งผลการนำเข้าข้อมูลกรณีผิดปกติ (Estimate) =====
Email สำหรับแจ้ง เจ้าหน้าที่ IT Support โดยจะส่งกรณีที่พบ tx_rig_process_hd.status = 'ERROR' อย่างน้อย 1 รายการ เท่านั้น
เพื่อดำเนินการประสานงานผู้เกี่ยวข้องแก้ไขข้อมูลหรือ re-trigger process ที่พบปัญหาในลำกับต่อไป
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $SystemDate | วันเวลา ณ ปัจจุบัน |  | วันเวลา ณ ปัจจุบันที่ กระบวนการนำเข้าข้อมูลทั้งหมดสำเร็จ | 01/01/2026 24:00:00 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_process_hd.period | group by tx_rig_process_hd.period (YYYY/MM) | 2026/01 |
| $StartDate | วันที่เริ่มนำเข้าข้อมูล | tx_rig_process_hd.created_date | ใช้ tx_rig_process_hd.created_date ลำดับแรกของ process DD/MM/YYYY (ค.ศ.) HH:MM:SS (24hr.) | 01/01/2026 24:00:00 |
| $sumCountErr | จำนวนรายการที่ไม่สำเร็จ | tx_rig_process_hd | count รายการที่ tx_rig_process_hd.status = 'ERROR' | 3 |
| $runningNo | ลำดับของ process | ms_rig_process.seq_landing | แสดงลำดับของรายการตาม ms_rig_process.process_group จากน้อยไปมาก | 1 |
| $processCode | Process Code | ms_rig_process.process_code | แสดง Process Code ตาม ms_rig_process.process_code | RIG_AUTO_01 |
| $processName | Process Name | ms_rig_process.process_name | แสดง Process Name ตาม ms_rig_process.process_name | RIG-PS-01-01 Policy |
| $status | Process Status | tx_rig_process_hd.status | แสดง Process Status ตาม tx_rig_process_hd.status | SUCCESS |
| $responseCode | Exception error |  | throw exception error กรณี tx_rig_process_hd.status = 'ERROR'กรณี tx_rig_process_hd.status = 'SUCCESS' ไม่ต้องแสดง |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Data_Estimate" มาค้นหาที่ตาราง cf_rig_email โดยเทียบกับ cf_rig_email .email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_rig_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
|  |
| From | cf_rig_email .email_from |
| To | cf_rig_email .email_from |
| CC | cf_rig_email .email_cc |
| Subject | cf_rig_email .email_subject วันที่ $systemDate |
| Detail | เรียน เจ้าหน้าที่ IT Supportพบปัญหาที่กระบวนการเตรียมข้อมูลสำหรับประมวลผล Estimate Group RIช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $StartDate ตรวจพบจำนวนรายการที่ไม่สำเร็จทั้งหมด $sumCountErr รายการ ดังนี้Landing Process (ms_rig_process where process_group = 'RIG_LANDING')No.Process CodeProcess NameStatusResponse$runningNo$processCode$processName$status$responseCode Snapshot Process (ms_rig_process where process_group = 'RIG_EST_SNAPSHOT')No.Process CodeProcess NameStatusResponse$runningNo$processCode$processName$status$responseCode Staging Process (ms_rig_process where process_group = 'RIG_EST_STAGING')No.Process CodeProcess NameStatusResponse$runningNo$procesCode$processName$status$responseCode จึงเรียนมาเพื่อทราบและประสานงานผู้ที่เกี่ยวข้องเพื่อแก้ไขปัญหาในลำดับถัดไปNew Group RI |


===== PAGE 1316552943 | Functional Specification > 09. Appendix > A01. Template e-mail แจ้งผลการประมวลผล > Template e-mail แจ้งผลการประมวลผล - Actual =====
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_act_hd_id เท่ากับ tx_rig_act_hd.rig_act_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_act_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_act_hd.closing_quarter | YYYY/QQ | 2022/Q1 |
| $status | ผลการประมวลผล | tx_rig_act_hd.status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_act_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_act_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_act_hd.rig_act_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Actual" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Actual |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>)สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Actual ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |


===== PAGE 1316552941 | Functional Specification > 09. Appendix > A01. Template e-mail แจ้งผลการประมวลผล > Template e-mail แจ้งผลการประมวลผล - Estimate =====
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_est_hd_id เท่ากับ tx_rig_est_hd.rig_est_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_est_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_est_hd.closing_period | YYYY/MM | 2022/01 |
| $status | ผลการประมวลผล | tx_rig_est_hd .status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_est_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_est_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_est_hd.rig_est_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Estimate" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Estimate |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>) สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Estimate ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |
고전파0 - SOOP


===== PAGE 1291715430 | Functional Specification > 09. Appendix > A02. Batch Process =====
(empty page)


===== PAGE 1292239494 | Functional Specification > 09. Appendix > A04. Landing report template (Export report) =====
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |


===== PAGE 1292239518 | Functional Specification > 09. Appendix > A05. Landing report template (sheet name) =====
| การแสดงชื่อ Sheet |
| ตาม Report Detail |


===== PAGE 1292239534 | Functional Specification > 09. Appendix > A06. Landing report template (footer) =====
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1292239568 | Functional Specification > 09. Appendix > A07. Landing report template (detail) =====
| Report Detail Section |
| ตาม Report Detail |


===== PAGE 1292239575 | Functional Specification > 09. Appendix > A07. Landing report template (detail) > A07.1 detail db_table =====
| ฟิลด์ใน cf_rig_template_field |  |
| field_name | บอกชื่อ Column ในรายงาน |
| db_table | แสดงชื่อ Table ที่ใช้ดึงข้อมูล |
| db_field | แสดงชื่อฟิลด์ที่ใช้ดึงข้อมูล |
| seq_no | ใช้ order by ข้อมูล |
| format_data_type | กำหนดรูปแบบการแสดงผลในรายงานตามFomat Data ดูจาก cf_rig_template_field.format_data_typeข้อมูลFormat Dataตัวอย่างหมายเหตุข้อมูลวันที่dd/MM/yyyy26/02/2016 ข้อมูลวันที่dd/MMM/yyyy27-Jun-2022 ข้อมูลจำนวนเงิน#,###.00500,000.00กรณีที่เป็นค่า null มาให้แสดงค่าใน Report เป็น -ข้อมูลจำนวน %#,###.00'%'50.00% |
| text_align | กำหนดรูปแบบในการวางข้อมูล มีค่าเป็น 'left', 'right', 'center' |
| กรณีที่ข้อมูลที่มี cf_template_field.data_type = numeric แต่ค่าในฟิลด์เป็นค่า Null ให้แสดงค่าในรายงานเป็น 0.00 |


===== PAGE 1292239581 | Functional Specification > 09. Appendix > A07. Landing report template (detail) > A07.2 Format - Report Detail =====
Fomat Data ดูจาก cf_rig_template_field.format_data_type
| ข้อมูล | Format Data | ตัวอย่าง | หมายเหตุ |
| ข้อมูลวันที่ | dd/MM/yyyy | 26/02/2016 |  |
| ข้อมูลวันที่ | dd/MMM/yyyy | 27-Jun-2022 |  |
| ข้อมูลจำนวนเงิน | #,###.00 | 500,000.00 | กรณีที่เป็นค่า null มาให้แสดงค่าใน Report เป็น - |
| ข้อมูลจำนวน % | #,###.00'%' | 50.00% |  |


===== PAGE 1294992069 | Functional Specification > 09. Appendix > A08. Process การตรวจสอบไฟล์นำเข้า =====
- ตรวจสอบว่ามีการทำรายการหรือไม่กรณีมีการเลือก "Checkbox" ไม่มีข้อมูลนำเข้า ให้กลับสู่หน้าจอหลัก พร้อมทั้งแสดงรายการเพื่อยืนยัน พร้อมหมายเหตุ "ไม่มีข้อมูล Update ในรอบปัจจุบัน"กรณีมีการ Upload File ข้อมูล ให้ดำเนินการตรวจสอบต่อในข้อ bกรณีไม่ได้เลือก Checkbox และ ไม่ได้ Upload File จะ Disable ปุ่มบันทึก
- กรณีมีการเลือก "Checkbox" ไม่มีข้อมูลนำเข้า ให้กลับสู่หน้าจอหลัก พร้อมทั้งแสดงรายการเพื่อยืนยัน พร้อมหมายเหตุ "ไม่มีข้อมูล Update ในรอบปัจจุบัน"
- กรณีมีการ Upload File ข้อมูล ให้ดำเนินการตรวจสอบต่อในข้อ b
- กรณีไม่ได้เลือก Checkbox และ ไม่ได้ Upload File จะ Disable ปุ่มบันทึก
- ตรวจสอบ Format ไฟล์นำเข้า โดยนามสกุลที่สามารถ Upload ไฟล์ได้เฉพาะ xlsxหากไม่เป็น Excel ระบบแสดง Popup ข้อความ "ไม่สามารถทำรายการได้ เนื่องจากรูปแบบไฟล์นำเข้าไม่ถูกต้อง" และจบกระบวนการทำงานหากเป็น Excel ระบบแสดง Popup ข้อความ “ระบบกำลังประมวลผลข้อมูล” และระบบปรับสถานะรายการเป็น “กำลังดำเนินการ”
- หากไม่เป็น Excel ระบบแสดง Popup ข้อความ "ไม่สามารถทำรายการได้ เนื่องจากรูปแบบไฟล์นำเข้าไม่ถูกต้อง" และจบกระบวนการทำงาน
- หากเป็น Excel ระบบแสดง Popup ข้อความ “ระบบกำลังประมวลผลข้อมูล” และระบบปรับสถานะรายการเป็น “กำลังดำเนินการ”
- นำเข้า Excel ไฟล์ข้อมูล
- ระบบทำการตรวจสอบความถูกต้องของไฟล์นำเข้า ซึ่งหากพบ error มากกว่า 1 เคส ให้แสดงหมายเหตุต่อกันโดยมี , คั่น โดยตรวจสอบตามรายการดังนี้ตรวจสอบ จำนวนคอลัมน์ ของไฟล์นำเข้าว่าถูกต้องหรือไม่หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบ ชื่อคอลัมน์ ว่าถูกต้องหรือไม่หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากชื่อคอลัมน์ถูกต้อง ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลของแต่ละคอลัมน์ ว่าตรงตาม Data Type ที่กำหนดหรือไม่ เช่น ต้องเป็นตัวเลขเท่านั้นหากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลที่เป็นวันที่ (Date) ว่าถูกต้องหรือไม่ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detailหากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลว่าเป็นรายการ Duplicate หรือไม่หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- ตรวจสอบ จำนวนคอลัมน์ ของไฟล์นำเข้าว่าถูกต้องหรือไม่หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไป
- หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"
- แสดง วันที่และเวลาดำเนินการ
- แสดง ผู้ดำเนินการ
- ปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"
- แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"
- หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไป
- ตรวจสอบ ชื่อคอลัมน์ ว่าถูกต้องหรือไม่
- หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"
- แสดง วันที่และเวลาดำเนินการ
- แสดง ผู้ดำเนินการ
- ปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"
- แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"
- หากชื่อคอลัมน์ถูกต้อง ให้ดำเนินการตรวจสอบในข้อถัดไป
- ตรวจสอบข้อมูลของแต่ละคอลัมน์ ว่าตรงตาม Data Type ที่กำหนดหรือไม่ เช่น ต้องเป็นตัวเลขเท่านั้นหากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- หากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"
- แสดง วันที่และเวลาดำเนินการ
- แสดง ผู้ดำเนินการ
- ปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"
- แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"
- หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- ตรวจสอบข้อมูลที่เป็นวันที่ (Date) ว่าถูกต้องหรือไม่ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detailหากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detail
- หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detail
- แสดง วันที่และเวลาดำเนินการ
- แสดง ผู้ดำเนินการ
- ปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"
- แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"
- และบันทึกข้อมูลในลงตาราง header และ detail
- หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- ตรวจสอบข้อมูลว่าเป็นรายการ Duplicate หรือไม่หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป
- หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"
- แสดง วันที่และเวลาดำเนินการ
- แสดง ผู้ดำเนินการ
- ปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"
- แสดงหมายเหตุ "พบรายการซ้ำ"
- หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป


===== PAGE 1292862006 | Functional Specification > 09. Appendix > A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checker =====
wiki ที่เกี่ยวข้อง
- IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense
- (ยกเลิก)ms_rig_import_status
เงื่อนไขของปุ่มในหน้าจอกับสถานะรายการข้อมูล
| Status | Descriptions |
| กำลังดำเนินการ | ระบบกำลังดำเนินการตรวจสอบ และนำเข้าข้อมูลระบบแสดงจำนวนรายการ แต่ยังไม่สามารถ download error file ได้ระบบ Disable ปุ่ม "นำเข้าไฟล์ข้อมูล" และ "อนุมัติ" และ "ยืนยันส่งอนุมัติ" และ "ยกเลิก" |
| รูปแบบไฟล์ไม่ถูกต้อง | ระบบตรวจสอบพบรูปแบบไฟล์ไม่ถูกต้องระบบ Disable ปุ่ม "อนุมัติ" และ "ยืนยันส่งอนุมัติ" และ "ยกเลิก" |
| นำเข้าไม่สำเร็จ | ระบบนำเข้าข้อมูลไม่สำเร็จระบบ Disable ปุ่ม "อนุมัติ" และ "ยืนยันส่งอนุมัติ" และ "ยกเลิก" |
| รอยืนยันส่งอนุมัติ | ระบบนำเข้าข้อมูลสำเร็จ และรอ Maker ส่งต่อให้ทาง Checker ตรวจสอบข้อมูลระบบ Disable ปุ่ม "นำเข้าไฟล์ข้อมูล" และ "อนุมัติ" |
| รออนุมัติข้อมูล | ระบบนำเข้าข้อมูลสำเร็จ และรอ Checker ยืนยันส่งดำเนินการ Master ต่อได้ระบบ Disable ปุ่ม "นำเข้าไฟล์ข้อมูล" และ "ยืนยันส่งอนุมัติ" |
| ยืนยันนำเข้าข้อมูลสำเร็จ | ระบบยืนยันนำเข้าข้อมูลสำเร็จระบบ Disable ปุ่ม "นำเข้าไฟล์ข้อมูล" และ "อนุมัติ" และ "ยืนยันส่งอนุมัติ" |
| ยกเลิกข้อมูล | เมื่อมีการยกเลิกข้อมูลนำเข้าครั้งก่อนหน้าในรอบประมวลผลเดิมระบบ Disable ปุ่ม "อนุมัติ" และ "ยืนยันส่งอนุมัติ" และ "ยกเลิก" |


===== PAGE 1295483139 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ =====
รายการ Input/Output ที่สามารถ Export Excel ได้จากหน้าจอระบบ พร้อมระบุกรณีที่ไม่สามารถดาวน์โหลดได้ โดยต้องดูผลลัพธ์ผ่านหน้าจอแทน เพื่อให้ User เข้าใจช่องทางการเข้าถึงข้อมูลในแต่ละส่วนได้อย่างถูกต้อง
| หมวด | รายการ | ประเภทข้อมูล | วิธีการได้ผลลัพธ์ |  | หมายเหตุ |
| Master | List of Policy_YYYYMM (1 file master) | ปุ่ม Manual | ✅ ดาวน์โหลดได้ | A09-4 ตัวอย่าง output file - List of Policy |  |
| Estimate | List of Policy_YYYYMM (1 file master) | Landing - อัตโนมัติ | ✅ ดาวน์โหลดได้ | A09-4 ตัวอย่าง output file - List of Policy |  |
|  | ข้อมูลกรมธรรม์ ณ ต้นสัญญา (2 ไฟล์ gib, thaire) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Claim_YYYYMM (3 ไฟล์ Death, Dis, TPD, Health) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Estimated Premium_Gibraltar_Layer (1 file gib) | Landing - อัตโนมัติ | ✅ ดาวน์โหลดได้ |  |  |
|  | List of Inforce by member (1 file Thaire) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Unnamed / BDR / SOA | input ผ่านหน้าจอ | 🔍 ดูผ่านหน้าจอ |  |  |
|  | Estimate File | Output - Estimate | ✅ ดาวน์โหลดได้ | A09-6 ตัวอย่าง output file - Estimate GIBA09-1 ตัวอย่าง output file - Estimate DaiichiA09-7 ตัวอย่าง output file - Estimate Thaire | ไฟล์สำหรับให้ user ตรวจสอบผลลัพธ์จากการประมวลผล Estimate ก่อนส่งเข้า EDW บัญชี |
|  | SOA | Output - Estimate | ✅ ดาวน์โหลดได้ | A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA FileA09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileA09-9 ตัวอย่าง output file - Thaire - Estimate SOA File |  |
| Actual | List of Policy (1 file master) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Alteration_YYYYQQ (4 ไฟล์ เพิ่มใหม่/ลาออก/เพิ่มทุน/ลดทุน Thaire) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Policy Inforce actual (2 file gib, daichi) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Premium_Actual เบี้ยและ movement (2 file gib, daichi) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Experience Refund (1 file Gib) | Landing - อัตโนมัติ | ✅ ดาวน์โหลดได้ |  |  |
|  | ข้อมูลสมาชิกที่อายุเกิน 70 ปี (1 file Gib) | Landing - อัตโนมัติ | ✅ ดาวน์โหลดได้ | A09-11 ตัวอย่าง output file - ข้อมูลสมาชิกที่อายุเกิน 70 ปี |  |
|  | Claim_YYYYMM (3 ไฟล์ Death, Dis, TPD) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Premium_Gibraltar_Layer (1 file gib) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | List of Inforce by member (1 file Thaire) | Landing - อัตโนมัติ | ❌ ไม่ต้องดาวน์โหลด |  |  |
|  | Investigate expense (1 file) | input ผ่านหน้าจอ | 🔍 ดูผ่านหน้าจอ |  |  |
|  | Unnamed / BDR / SOA / Report to Reinsurer | input ผ่านหน้าจอ | 🔍 ดูผ่านหน้าจอ |  |  |
|  | BDR | Output - Actual | ✅ ดาวน์โหลดได้ |  |  |
|  | SOA | Output - Actual | ✅ ดาวน์โหลดได้ |  |  |
|  | Report to Reinsurer | Output - Actual | ✅ ดาวน์โหลดได้ |  |  |


===== PAGE 1306395230 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-1 ตัวอย่าง output file - Estimate Daiichi =====
ชื่อไฟล์ "Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น Est_Daiichi_202410
| ชื่อคอลัมน์ | คำอธิบาย | ตัวอย่าง |
| Pol. No | เลขกรมธรรม์ | GH1694 |
| DG. No. | เลขประกันภัยต่อ | DG003 |
| Comm.Date | วันเริ่มสัญญาครั้งแรกแสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 19/02/2007 |
| Eff. Date | วันที่มีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 19/02/2025 |
| Mode of Payment | ประเภทการชำระเบี้ยAnnualSemi AnnualQuarterlyMonthly | Annual |
| 1st RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต สำหรับปีกรมธรรม์แรกบันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| 1st RI Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ สำหรับปีกรมธรรม์แรกบันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| 1st RI Premium TPD | เบี้ยประกันภัยต่อความคุ้มครองทุพพลภาพถาวรสิ้นเชิง สำหรับปีกรมธรรม์แรกบันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| 1st RI Premium Med | เบี้ยประกันภัยต่อความคุ้มครองสุขภาพ สำหรับปีกรมธรรม์แรกบันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| 1st RI Premium Total | ยอดรวมเบี้ยประกันภัยต่อสำหรับปีกรมธรรม์แรกบันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| Renewal RI Premium Life | เบี้ยประกันภัยต่อความคุ้มครองชีวิต สำหรับปีต่ออายุกรมธรรม์บันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| Renewal RI Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ สำหรับปีต่ออายุกรมธรรม์บันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| Renewal RI Premium TPD | เบี้ยประกันภัยต่อความคุ้มครองทุพพลภาพถาวรสิ้นเชิง สำหรับปีต่ออายุกรมธรรม์บันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| Renewal RI Premium Med | เบี้ยประกันภัยต่อความคุ้มครองสุขภาพ สำหรับปีต่ออายุกรมธรรม์บันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| Renewal RI Premium Total | ยอดรวมเบี้ยประกันภัยต่อสำหรับปีต่ออายุกรมธรรม์บันทึกค่าเป็น 0 เสมอ เนื่องจากไม่ประมวลผล ri estimate premium | 0 |
| RI Claim Life | จำนวนเงิน RI Claim ความคุ้มครองชีวิต | 2,500.00 |
| RI Claim AD&D | จำนวนเงิน RI Claim ความคุ้มครองอุบัติเหตุเสียชีวิตและสูญเสียอวัยวะ | 2,500.00 |
| RI Claim TPD | จำนวนเงิน RI Claim ความคุ้มครองทุพพลภาพถาวรสิ้นเชิง | 2,500.00 |
| RI Claim Med | จำนวนเงิน RI Claim ความคุ้มครองสุขภาพ | 2,500.00 |
| RI Claim Total | ยอดรวม RI Claim ทั้งหมด | 2,500.00 |
| Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงานกรณีเป็นข้อมูลเบี้ยประกัน:กำหนดตาม Effective Dateกรณีเป็นข้อมูลสินไหม:กำหนดตาม Closing Period | 2025Q1 |
| RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงานกำหนดตาม Effective Date | 202502 |
| Closing Period | รอบประมวลผลตามรอบปิดบัญชี | 202502 |


===== PAGE 1306395276 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA File =====
#### ตัวอย่าง

#### รายละเอียด
- รูปแบบการตั้งชื่อไฟล์ SOAชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401YYYYMM = Closing Period
- ชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401
- YYYYMM = Closing Period
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการ BD-EP-001 ประมวลผล Estimate เพื่อเอกสารสรุปบัญชีระหว่างบริษัทประกันกับ Reinsurerใช้แสดงยอดที่ต้อง ชำระ / รับคืน ในแต่ละงวด ตามสัญญาประกันภัยต่อ
- หลักเกณฑ์การจำแนก New Business และ Renewal สำหรับกรมธรรม์ที่มีการชำระเบี้ย ระบบจะทำการจำแนกประเภทงานเป็น New Business หรือ Renewal โดยพิจารณาจากข้อมูลในไฟล์นำเข้า EDW A09-1 ตัวอย่าง output file - Estimate Daiichi ตามหลักเกณฑ์ดังนี้New Business : Comm.Date เท่ากับ Eff.DateRenewal : Comm.Date น้อยกว่า Eff.Date
- New Business : Comm.Date เท่ากับ Eff.Date
- Renewal : Comm.Date น้อยกว่า Eff.Date
- เบี้ยประกันภัยของ Daiichi จะพิจารณาเฉพาะความคุ้มครองในส่วน Life, Accident Death (AD&D), TPD, Medical เท่านั้น
- หลักเกณฑ์การแสดงค่าใน SOAระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE FROM REINSURER (Dr.)Claim: 1 st yr. Type Life, AD&D, TPD, Medical Claim: Renewal Type Life, AD&D, TPD, Medical รายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE FROM REINSURER (Dr.)Claim: 1 st yr. Type Life, AD&D, TPD, Medical Claim: Renewal Type Life, AD&D, TPD, Medical รายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ฝั่ง DUE FROM REINSURER (Dr.)Claim: 1 st yr. Type Life, AD&D, TPD, Medical Claim: Renewal Type Life, AD&D, TPD, Medical
- Claim: 1 st yr. Type Life, AD&D, TPD, Medical
- Claim: Renewal Type Life, AD&D, TPD, Medical
- รายการอื่นทั้งหมดให้แสดงค่าเป็น 0
| No |  | ฟิลด์ | คำอธิบาย | ตัวอย่าง |
| 1 | ส่วน Header | Statement Account for Month, Year | Month , Year จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | Statement Account for October, 2024 |
| 2 | ส่วน Header | No. YYYY.MM | YYYY.MM จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| 2.1 | ส่วน Header | Date: | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 19-Dec-2025 |
| 3 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Reinsurance Premium | แสดงค่าเป็น 0 | - |
| 4 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Commission | แสดงค่าเป็น 0 | - |
| 5 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Premium Refunds | แสดงค่าเป็น 0 | - |
| 6 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Commission Refunds | แสดงค่าเป็น 0 | - |
| 7 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Revival Premium | แสดงค่าเป็น 0 | - |
| 8 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Claim | ส่วน Claim ใน SOA จะแบ่งเป็น 3 ช่วงหลัก ๆ คือClaim : 1st yr. (เคลมของกรมธรรม์ปีแรก / New Business)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตAD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD : เคลมทุพพลภาพถาวรสิ้นเชิงTTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาลClaim : Renewal (เคลมของกรมธรรม์ต่ออายุ)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตAD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD : เคลมทุพพลภาพถาวรสิ้นเชิงTTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาลClaim Expenses (ค่าใช้จ่ายที่เกี่ยวข้องกับการจัดการเคลม) แสดงค่าเป็น 0INVESTIGATION FEE : ค่าตรวจสอบ / สืบสวนเคลมLEGAL FEE : ค่ากฎหมายMEDICAL EVIDENCE : ค่าขอเอกสารทางการแพทย์ | 558,793.50 |
| 9 | ฝั่ง DUE FROM REINSURER (Dr.) | Admin. Commission (Remittance) :Experience Refund Share :Profit Commission : | แสดงค่าเป็น 0 | - |
| 10 | ฝั่ง DUE TO REINSURER (Cr.) | sub totalDUE TO REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE TO REINSURER DUE TO REINSURER คือ ยอดสุทธิที่บริษัทต้องจ่ายให้ Reinsurerคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer < Sub total ฝั่ง Due To Reinsurer) DUE TO REINSURER = Sub total ฝั่ง Due To Reinsurer− Sub total ฝั่ง Due From Reinsurerไม่เช่นนั้น = 0 | - |
| 11 | ฝั่ง DUE FROM REINSURER (Dr.) | sub totalDUE FROM REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE FROM REINSURER DUE FROM REINSURER คือ ยอดสุทธิที่ Reinsurer ต้องจ่ายให้บริษัทคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer > Sub total ฝั่ง Due To Reinsurer) DUE FROM REINSURER = Sub total ฝั่ง Due From Reinsurer − Sub total ฝั่ง Due To Reinsurerไม่เช่นนั้น = 0 | 558,793.50 |


===== PAGE 1307115730 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-3 ตัวอย่าง output file - i report =====
#### รายละเอียด
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการ BD-EP-001 ประมวลผล Estimate เพื่อนำส่งข้อมูลเข้าสู่ระบบ MPS เพื่อใช้เป็นข้อมูลตั้งต้น สำหรับการปรับปรุงข้อมูล Reinsurance (RI) ในส่วน I05 (Master)
- รายงานนี้จะแสดงเฉพาะข้อมูล Estimate Premium เท่านั้น โดยจะไม่แสดงข้อมูลของ Treaty Dai-ichi เนื่องจากสัญญาดังกล่าวไม่มีการประมวลผลเบี้ยประกันภัยต่อ
| ฟิลด์ | ความหมาย | เงื่อนไขการบันทึกข้อมูล | ตัวอย่าง |
| Treaty Gibraltar | Treaty Thaire | Treaty Dai-ichi |
| PolicyNumber | เลขที่กรมธรรม์ |  |  |  | GH5119 |
| PolicyYear | ปีกรมธรรม์ |  |  |  | 1 |
| Movement | บันทึกเป็นค่าว่างเสมอ เพื่อรองรับการบันทึกข้อมูลแบบ Manual ในอนาคต |  |  |  |  |
| RICommencementDate | Effective Date ของกรมธรรม์ ณ ปีกรมธรรม์น้นแสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 |  |  |  | 01/01/2002 |
| TreatyCode | รหัส Treaty ของกรมธรรม์ |  |  |  | GIB_Grp_Direct_EB |
| RIMethod | วิธีการส่งประกันภัยต่อของ Treatyใช้ค่าจาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยจะต้องอยู่ในช่วง Effective Date From ถึง Effective Date To ภายใต้ RI Condition ของ Treaty นั้น |  |  |  | QS-Surplus |
| RIPremiumLife | จำนวนเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | ใช้ค่า RI Premium Life ตามที่คำนวณได้ | ไม่มี RI Premium Life ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 8,612.39 |
| RIPremiumAccidentDeath | จำนวนเบี้ยประกันภัยต่อในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต | ใช้ค่า RI Premium Accident ตามที่คำนวณได้ | ใช้ค่า RI Premium Accident ตามที่คำนวณได้ | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumMedAccident | จำนวนเบี้ยประกันภัยต่อในส่วนค่ารักษาพยาบาลจากอุบัติเหตุ | ไม่มี RI Premium Medical Accident ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium Medical Accident ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumTPD | จำนวนเบี้ยประกันภัยต่อในส่วนความคุ้มครองทุพพลภาพถาวรสิ้นเชิง | ไม่มี RI Premium TPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium TPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumIPD | จำนวนเบี้ยประกันภัยต่อในส่วนค่ารักษาพยาบาลผู้ป่วยใน | ไม่มี RI Premium IPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium IPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumOPD | จำนวนเบี้ยประกันภัยต่อในส่วนค่ารักษาพยาบาลผู้ป่วยนอก | ไม่มี RI Premium OPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium OPD ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumDental | จำนวนเบี้ยประกันภัยต่อในส่วนค่ารักษาทางทันตกรรม | ไม่มี RI Premium Dental ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium Dental ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |
| RIPremiumOther | จำนวนเบี้ยประกันภัยต่อในความคุ้มครองอื่น ๆ ที่ไม่อยู่ในหมวด Life, Accident, Medical, TPD, IPD, OPD และ Dental | ไม่มี RI Premium Other ให้แสดงค่าเป็น 0 เท่านั้น | ไม่มี RI Premium Other ให้แสดงค่าเป็น 0 เท่านั้น | ไม่ส่ง Estimate Premium ให้แสดงค่าเป็น 0 เท่านั้น | 0 |


===== PAGE 1307116285 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-4 ตัวอย่าง output file - List of Policy =====
ชื่อไฟล์ "List of Policy_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น List of Policy_202410
| ชื่อคอลัมน์ | คำอธิบาย | ตัวอย่าง |
| ReinsuredNo | เลขประกันภัยต่อ | GH1694 |
| PolicyNo | เลขกรมธรรม์ | DG003 |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | 19/2/2007 |
| Effective Date | วันที่เริ่มมีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 1 - 12DD คือ วัน 1 - 31 | 19/2/2024 |
| End Date | วันที่สิ้นสุดมีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 1 - 12DD คือ วัน 1 - 31 | Annual |
| Policy Year | ปีกรมธรรม์ | 1 |
| Payment Mode | ประเภทการชำระเบี้ย | Quarterly |
| Policy Name | ชื่อกรมธรรม์ | SIAM NISTRANS CO.,LTD. |
| Nature of Business | ประเภทของธุรกิจ | Logistics |
| Status | สถานะของกรมธรรม์ จากประกันกลุ่ม | New business |
| RI Status | สถานะของกรมธรรม์ สำหรับ Group RIโดยมีเงื่อนไข ดังนี้1. กรณีสถานะต้นทาง = Inforce, New Business 1.1 กรมธรรม์มี End Date (วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น) มากกว่าหรือเท่ากับ วันที่สิ้นเดือนของ Closing Period นั้น จึงจะถือว่ากรมธรรม์นั้นมีผลบังคับ โดยจะแสดงค่าเป็น Inforce / New Business ขึ้นกับ Policy Yearถ้า Policy Year = 1 แสดงค่า New Businessถ้า Policy Year > 1 แสดงค่า Inforce1.2 กรมธรรม์มี End Date (วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น) น้อยกว่า วันที่สิ้นเดือนของ Closing Period นั้น จึงจะถือว่ากรมธรรม์นั้นสิ้นสุด โดยจะแสดงค่าเป็น Lapsed2. กรณีสถานะต้นทาง = Lapse ให้แสดงเป็น Lapse | Inforce |
| Lapse Date | วันที่ไม่ต่อสัญญาแสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 1 - 12DD คือ วัน 1 - 31 | 19/2/2024 |
| Previous PolicyNo | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | GH1693 |
| Experience Refund | เงินคืนตามประสบการณ์ | Yes |


===== PAGE 1307116294 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-5 ตัวอย่าง output file - List of Policy =====
ชื่อไฟล์ "List_of Policy_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น List of Policy_202410
| ชื่อคอลัมน์ | คำอธิบาย | ตัวอย่าง |
| ReinsuredNo | เลขประกันภัยต่อ | GH1694 |
| PolicyNo | เลขกรมธรรม์ | DG003 |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | 19/2/2007 |
| Effective Date | วันที่เริ่มมีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 1 - 12DD คือ วัน 1 - 31 | 19/2/2024 |
| End Date | วันที่สิ้นสุดมีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 1 - 12DD คือ วัน 1 - 31 | Annual |
| Policy Year | ปีกรมธรรม์ | 1 |
| Status | สถานะของกรมธรรม์ จากประกันกลุ่ม | New business |
| RI Status | สถานะของกรมธรรม์ สำหรับ Group RIโดยมีเงื่อนไข ดังนี้1. กรณีสถานะต้นทาง = Inforce, New Business 1.1 กรมธรรม์มี End Date (วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น) มากกว่าหรือเท่ากับ วันที่สิ้นเดือนของ Closing Period นั้น จึงจะถือว่ากรมธรรม์นั้นมีผลบังคับ โดยจะแสดงค่าเป็น Inforce / New Business ขึ้นกับ Policy Yearถ้า Policy Year = 1 แสดงค่า New Businessถ้า Policy Year > 1 แสดงค่า Inforce1.2 กรมธรรม์มี End Date (วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น) น้อยกว่า วันที่สิ้นเดือนของ Closing Period นั้น จึงจะถือว่ากรมธรรม์นั้นสิ้นสุด โดยจะแสดงค่าเป็น Lapsed2. กรณีสถานะต้นทาง = Lapse ให้แสดงเป็น Lapse | Inforce |
| No. Member Life | จำนวนสมาชิกที่มีทุนชีวิต | 1000.00 |
| No. Member AccidentDeath | จำนวนสมาชิกที่มีทุนชีวิต อุบัติเหตุ | 1000.00 |
| No. Member MedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 1000.00 |
| No. Member TPD | จำนวนสมาชิกที่มีทุนทุพพลภาพ | 1000.00 |
| Sum Insured Life | ทุนชีวิตรวมจะมีค่าเมื่อ No. Member Life > 0 | 1000.00 |
| Sum Insured AccidentDeath | ทุนชีวิต อุบัติเหตุรวมจะมีค่าเมื่อ No. Member AccidentDeath > 0 | 1000.00 |
| Sum Insured MedAccident | ทุนค่ารักษาพยาบาล อุบัติเหตุรวมจะมีค่าเมื่อ No. Member MedAccident > 0 | 1000.00 |
| Sum Insured TPD | ทุนทุพพลภาพรวมจะมีค่าเมื่อ No. Member TPD > 0 | 1000.00 |


===== PAGE 1307312146 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-6 ตัวอย่าง output file - Estimate GIB =====
ชื่อไฟล์ "Est_GIB_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น Est_GIB_202410
| ชื่อคอลัมน์ | คำอธิบาย | ตัวอย่าง |
| PolicyNo | เลขกรมธรรม์ | GH5476 |
| RI Com.Date | วันเริ่มสัญญาครั้งแรกแสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 01/10/2024 |
| Eff.Date | วันที่มีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 01/10/2024 |
| RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | 6,311.25 |
| RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 6,311.25 |
| RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | 3,155.63 |
| RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 3,155.63 |
| Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลมหากกรมธรรม์มีการเคลมมากกว่าหนึ่งรายการ ระบบจะนำ วันที่เกิดอุบัติเหตุ (Accident Date) ที่เก่าที่สุด ของสมาชิกในกรมธรรม์นั้น มาใช้เป็น Event Date |  |
| Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | 0.00 |
| Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 0.00 |
| Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงานกรณีเป็นข้อมูลเบี้ยประกัน:กำหนดตาม Effective Dateกรณีเป็นข้อมูลสินไหม:กำหนดตาม Closing Period | 2024Q4 |
| RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงานกำหนดตาม Effective Date | 202410 |
| Closing Period | รอบประมวลผลตามรอบปิดบัญชี | 202410 |


===== PAGE 1307312159 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-7 ตัวอย่าง output file - Estimate Thaire =====
ชื่อไฟล์ "Est_Thaire_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น Est_Thaire_202410
| ชื่อคอลัมน์ | คำอธิบาย | ตัวอย่าง |
| PolicyNo | เลขกรมธรรม์ | GH5476 |
| RI Com.Date | วันเริ่มสัญญาครั้งแรกแสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 01/10/2024 |
| Eff.Date | วันที่มีผลของกรมธรรม์แสดงในรูปแบบ DD/MM/YYYYYYYY คือ ปี ค.ศ. 1999 - 9999MM คือ เดือน 01 - 12DD คือ วัน 01 - 31 | 01/10/2024 |
| RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิตแสดงค่าเป็น 0 | 0 |
| RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 6,311.25 |
| RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิตแสดงค่าเป็น 0 | 0 |
| RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 3,155.63 |
| Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลมหากกรมธรรม์มีการเคลมมากกว่าหนึ่งรายการ ระบบจะนำ วันที่เกิดอุบัติเหตุ (Accident Date) ที่เก่าที่สุด ของสมาชิกในกรมธรรม์นั้น มาใช้เป็น Event Date |  |
| Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | 0.00 |
| Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | 0.00 |
| Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงานกรณีเป็นข้อมูลเบี้ยประกัน:กำหนดตาม Effective Dateกรณีเป็นข้อมูลสินไหม:กำหนดตาม Closing Period | 2024Q4 |
| RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงานกำหนดตาม Effective Date | 202410 |
| Closing Period | รอบประมวลผลตามรอบปิดบัญชี | 202410 |


===== PAGE 1307312297 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA File =====
#### ตัวอย่าง

#### รายละเอียด
- ระบบจะแยกไฟล์ SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Periodตัวอย่าง Closing Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_GIB_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_GIB_202401_M12กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_GIB_202401_M01
- ตัวอย่าง Closing Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_GIB_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_GIB_202401_M12กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_GIB_202401_M01
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_GIB_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_GIB_202401_M12
- Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_GIB_202401_M01
- แสดงในไฟล์ SOA_Est_GIB_202401_M01
- Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_GIB_202401_M12
- แสดงในไฟล์ SOA_Est_GIB_202401_M12
- กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_GIB_202401_M01
- กรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_GIB_202401_M01
- รูปแบบการตั้งชื่อไฟล์ SOAชื่อไฟล์ "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01YYYYMM = Closing PeriodMXX = เดือนของ Eff Date สำหรับกรมธรรม์ที่มีการชำระเบี้ย
- ชื่อไฟล์ "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01
- YYYYMM = Closing Period
- MXX = เดือนของ Eff Date สำหรับกรมธรรม์ที่มีการชำระเบี้ย
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการ BD-EP-001 ประมวลผล Estimate เพื่อเอกสารสรุปบัญชีระหว่างบริษัทประกันกับ Reinsurerใช้แสดงยอดที่ต้อง ชำระ / รับคืน ในแต่ละงวด ตามสัญญาประกันภัยต่อ
- หลักเกณฑ์การจำแนก New Business และ Renewal สำหรับกรมธรรม์ที่มีการชำระเบี้ย ระบบจะทำการจำแนกประเภทงานเป็น New Business หรือ Renewal โดยพิจารณาจากข้อมูลในไฟล์นำเข้า EDW A09-6 ตัวอย่าง output file - Estimate GIBตามหลักเกณฑ์ดังนี้New Business : RI Com.Date เท่ากับ Eff.DateRenewal : RI Com.Date น้อยกว่า Eff.Date
- New Business : RI Com.Date เท่ากับ Eff.Date
- Renewal : RI Com.Date น้อยกว่า Eff.Date
- เบี้ยประกันภัยของ Gibraltar จะพิจารณาเฉพาะความคุ้มครองในส่วน Life, Accident Death (AD&D) เท่านั้น
- หลักเกณฑ์การแสดงค่าใน SOAระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&DReinsurance Premium: Renewal Business Type Life, AD&Dฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DCommission: Renewal Type Life, AD&DClaim: 1 st yr. Type Life, AD&DClaim: Renewal Type Life, AD&Dรายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&DReinsurance Premium: Renewal Business Type Life, AD&Dฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DCommission: Renewal Type Life, AD&DClaim: 1 st yr. Type Life, AD&DClaim: Renewal Type Life, AD&Dรายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&DReinsurance Premium: Renewal Business Type Life, AD&D
- Reinsurance Premium: New Business Type Life, AD&D
- Reinsurance Premium: Renewal Business Type Life, AD&D
- ฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DCommission: Renewal Type Life, AD&DClaim: 1 st yr. Type Life, AD&DClaim: Renewal Type Life, AD&D
- Commission: 1 st yr. Type Life, AD&D
- Commission: Renewal Type Life, AD&D
- Claim: 1 st yr. Type Life, AD&D
- Claim: Renewal Type Life, AD&D
- รายการอื่นทั้งหมดให้แสดงค่าเป็น 0
| No | ส่วนการแสดงผล | ฟิลด์ | คำอธิบาย | ตัวอย่าง |
| 1 | ส่วน Header | Statement Account for Month, Year | Month , Year จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่าStatement Account for October, 2024 | Statement Account for October, 2024 |
| 1.1 | ส่วน Header | (Additional EB Group with Comm. Date falling in Month, Year) | Month , Year จะเปลี่ยนไปตามเดือน RI Periodเช่น Closing 202410 จะต้องแสดงว่า Additional EB Group with Comm. Date falling in October, 2024เช่น ทำ Closing Period 202410เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in September, 2024) | (Additional EB Group with Comm. Date falling in October, 2024) |
| 2 | ส่วน Header | No. YYYY.MM | YYYY.MM จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| 2.1 | ส่วน Header | Date: | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 19-Dec-2025 |
| 3 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Reinsurance Premium | ระบบแสดงผลรวมเบี้ยจากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้New Business: แสดงผลรวมเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Business (1 st yr.): แสดงค่าเป็น 0Renewal Business (Renewal):โดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 4 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Commission | ระบบแสดงผลรวมคอมมิชชั่นจากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้New Business: แสดงผลรวมคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Business (Renewal): แสดงผลรวมคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 5 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Premium Refunds | แสดงค่าเป็น 0 | - |
| 6 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Commission Refunds | แสดงค่าเป็น 0 | - |
| 7 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Revival Premium | แสดงค่าเป็น 0 | - |
| 8 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Claim | ส่วน Claim ใน SOA จะแบ่งเป็น 3 ช่วงหลัก ๆ คือClaim : 1st yr. (เคลมของกรมธรรม์ปีแรก / New Business)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตAD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Claim : Renewal (เคลมของกรมธรรม์ต่ออายุ)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตAD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Claim Expenses (ค่าใช้จ่ายที่เกี่ยวข้องกับการจัดการเคลม) แสดงค่าเป็น 0INVESTIGATION FEE : ค่าตรวจสอบ / สืบสวนเคลมLEGAL FEE : ค่ากฎหมายMEDICAL EVIDENCE : ค่าขอเอกสารทางการแพทย์ | 89,084.53 |
| 9 | ฝั่ง DUE FROM REINSURER (Dr.) | Admin. Commission (Remittance) :Experience Refund Share :Profit Commission : | แสดงค่าเป็น 0 | - |
| 10 | ฝั่ง DUE TO REINSURER (Cr.) | sub totalDUE TO REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE TO REINSURER (Cr.)DUE TO REINSURER คือ ยอดสุทธิที่บริษัทต้องจ่ายให้ Reinsurerคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer < Sub total ฝั่ง Due To Reinsurer)DUE TO REINSURER = Sub total ฝั่ง Due To Reinsurer − Sub total ฝั่ง Due From Reinsurer ไม่เช่นนั้น = 0 | - |
| 11 | ฝั่ง DUE FROM REINSURER (Dr.) | sub totalDUE FROM REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE FROM REINSURER (Cr.)DUE FROM REINSURER คือ ยอดสุทธิที่ Reinsurer ต้องจ่ายให้บริษัทคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer > Sub total ฝั่ง Due To Reinsurer) DUE FROM REINSURER = Sub total ฝั่ง Due From Reinsurer − Sub total ฝั่ง Due To Reinsurerไม่เช่นนั้น = 0 | 89,084.53 |


===== PAGE 1307312299 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-9 ตัวอย่าง output file - Thaire - Estimate SOA File =====
#### ตัวอย่าง

#### รายละเอียด
- ระบบจะแยกไฟล์ SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Periodตัวอย่าง Closing Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_Thaire_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_Thaire_202401_M12กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- ตัวอย่าง Closing Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_Thaire_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_Thaire_202401_M12กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_Thaire_202401_M01Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_Thaire_202401_M12
- Eff Date = 202401 → RI Period = 202401แสดงในไฟล์ SOA_Est_Thaire_202401_M01
- แสดงในไฟล์ SOA_Est_Thaire_202401_M01
- Eff Date = 202312 → RI Period = 202312แสดงในไฟล์ SOA_Est_Thaire_202401_M12
- แสดงในไฟล์ SOA_Est_Thaire_202401_M12
- กรณีกรมธรรม์ที่มีเคลม (Claim) ไม่พิจารณา Eff Dateกรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- กรมธรรม์ที่มีเคลมทุกฉบับจะถูกรวมและแสดงตาม Closing Period จึงแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- รูปแบบการตั้งชื่อไฟล์ SOAชื่อไฟล์ "SOA_Est_Thaire_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401_M01YYYYMM = Closing PeriodMXX = เดือนของ Eff Date สำหรับกรมธรรม์ที่มีการชำระเบี้ย
- ชื่อไฟล์ "SOA_Est_Thaire_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401_M01
- YYYYMM = Closing Period
- MXX = เดือนของ Eff Date สำหรับกรมธรรม์ที่มีการชำระเบี้ย
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการ BD-EP-001 ประมวลผล Estimate เพื่อเอกสารสรุปบัญชีระหว่างบริษัทประกันกับ Reinsurerใช้แสดงยอดที่ต้อง ชำระ / รับคืน ในแต่ละงวด ตามสัญญาประกันภัยต่อ
- หลักเกณฑ์การจำแนก New Business และ Renewal สำหรับกรมธรรม์ที่มีการชำระเบี้ย ระบบจะทำการจำแนกประเภทงานเป็น New Business หรือ Renewal โดยพิจารณาจากข้อมูลในไฟล์นำเข้า EDW A09-7 ตัวอย่าง output file - Estimate Thaire ตามหลักเกณฑ์ดังนี้New Business : RI Com.Date เท่ากับ Eff.DateRenewal : RI Com.Date น้อยกว่า Eff.Date
- New Business : RI Com.Date เท่ากับ Eff.Date
- Renewal : RI Com.Date น้อยกว่า Eff.Date
- เบี้ยประกันภัยของ Thaire จะพิจารณาเฉพาะความคุ้มครองในส่วน Accident Death (AD&D) เท่านั้น
- หลักเกณฑ์การแสดงค่าใน SOAระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&Dฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DClaim: 1 st yr. Type Life, AD&Dรายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ระบบจะแสดงค่า (กรณีมีข้อมูล) เฉพาะรายการที่กำหนด ดังนี้ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&Dฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DClaim: 1 st yr. Type Life, AD&Dรายการอื่นทั้งหมดให้แสดงค่าเป็น 0
- ฝั่ง DUE TO REINSURER (Cr.)Reinsurance Premium: New Business Type Life, AD&D
- Reinsurance Premium: New Business Type Life, AD&D
- ฝั่ง DUE FROM REINSURER (Dr.)Commission: 1 st yr. Type Life, AD&DClaim: 1 st yr. Type Life, AD&D
- Commission: 1 st yr. Type Life, AD&D
- Claim: 1 st yr. Type Life, AD&D
- รายการอื่นทั้งหมดให้แสดงค่าเป็น 0
| No | ส่วนการแสดงผล | ฟิลด์ | คำอธิบาย | ตัวอย่าง |
| 1 | ส่วน Header | Statement Account for Month, Year | Month , Year จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | Statement Account for October, 2024 |
| 2 | ส่วน Header | Additional Group PA with Comm. Date falling in Month, Year | Month , Year จะเปลี่ยนไปตามเดือน RI Periodเช่น Closing 202410 จะต้องแสดงว่า Additional Group PA with Comm. Date falling in October, 2024เช่น ทำ Closing Period 202410เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in September, 2024) | (Additional Group PA with Comm. Date falling in October, 2024) |
| 3 | ส่วน Header | No. YYYY.MM | YYYY.MM จะเปลี่ยนไปตามเดือน Closing Periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| 4 | ส่วน Header | Date: | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 19-Dec-2025 |
| 5 | DUE TO REINSURER (Cr.) | Reinsurance premium :New BusinessLIFEAD&DTPDTTDMEDICALTOTALRenewal Business (1 st yr.)LIFEAD&DTPDTTDMEDICALTOTALRenewal Business (Renewal)LIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงผลรวมเบี้ยจากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้New Business: แสดงผลรวมเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Business (1 st yr.): แสดงค่าเป็น 0Renewal Business (Renewal): แสดงค่าเป็น 0 | 338,786.14 |
| 6 | DUE FROM REINSURER (Dr.) | Commission :1 st yr.LIFEAD&DTPDTTDMEDICALTOTALRenewalLIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงผลรวมเบี้ยจากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลคอมมิชชั่น ดังนี้1 st yr.: แสดงผลรวมค่าคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงค่าเป็น 0 | 84,701.22 |
| 7 | DUE FROM REINSURER (Dr.) | Premium Refund :1 st yr.LIFEAD&DTPDTTDMEDICALTOTALRenewalLIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงผลรวมเงินเบี้ยประกันภัยต่อที่ Reinsurer คืนให้บริษัทจากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูล ดังนี้1 st yr.: แสดงค่าเป็น 0Renewal: แสดงค่าเป็น 0 | - |
| 8 | DUE TO REINSURER (Cr.) | Commission Refund :1 st yr.LIFEAD&DTPDTTDMEDICALTOTALRenewalLIFEAD&DTPDTTDMEDICALTOTAL1 st yr. ClaimLIFEAD&DTPDTTDMEDICALTOTALRenewal ClaimLIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงผลรวมค่าคอมมิชชั่นประกันภัยต่อที่ Reinsurer คืนให้บริษัท จากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูล ดังนี้1 st yr.: แสดงค่าเป็น 0Renewal: แสดงค่าเป็น 01 st yr. Claim: แสดงค่าเป็น 0Renewal Claim: แสดงค่าเป็น 0 | - |
| 9 | DUE FROM REINSURER (Dr.) | Claim :1 st yr.LIFEAD&DTPDTTDMEDICALTOTALRenewalLIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงผลรวมสินไหม จากการประมวลผล Estimate ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูล ดังนี้1 st yr.: แสดงผลรวมสินไหมโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงค่าเป็น 0 | - |
| 10 | DUE TO REINSURER (Cr.) | Revival Premiums1 st yr.LIFEAD&DTPDTTDMEDICALTOTALRenewalLIFEAD&DTPDTTDMEDICALTOTAL | ระบบแสดงจำนวนเงินเบี้ยประกันภัยต่อที่บริษัทต้องชำระให้ Reinsurer จากการนำกรมธรรม์กลับมามีผลบังคับอีกครั้ง1 st yr.: แสดงค่าเป็น 0Renewal: แสดงค่าเป็น 0 | - |
| 11 | DUE FROM REINSURER (Dr.) | Admin. Commission (Remittance) : Experience Refund Share : Profit Commission : | แสดงค่าเป็น 0 | - |
| 12 | DUE TO REINSURER (Cr.) | sub totalDUE TO REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE TO REINSURER DUE TO REINSURER คือ ยอดสุทธิที่บริษัทต้องจ่ายให้ Reinsurerคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer < Sub total ฝั่ง Due To Reinsurer) DUE TO REINSURER = Sub total ฝั่ง Due To Reinsurer − Sub total ฝั่ง Due From Reinsurerไม่เช่นนั้น = 0 | - |
| 13 | DUE FROM REINSURER (Dr.) | sub totalDUE FROM REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE FROM REINSURER DUE FROM REINSURER คือ ยอดสุทธิที่ Reinsurer ต้องจ่ายให้บริษัทคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer > Sub total ฝั่ง Due To Reinsurer) DUE FROM REINSURER = Sub total ฝั่ง Due From Reinsurer − Sub total ฝั่ง Due To Reinsurerไม่เช่นนั้น = 0 | 84,701.22 |


===== PAGE 1307312692 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-10 ตัวอย่าง output file - Estimated Premium =====
| ชื่อฟิลด์ | คำอธิบาย | ตัวอย่าง |
| PolicyNo | เลขกรมธรรม์ | GH024 |
| Effective Date | วันที่คุ้มครอง | 01/01/2025 |
| Level | การแบ่ง Layer ส่ง Reinsurance ตามทุนของสมาชิกแต่ละคน- Layer 1 (L1) : เมื่อทุนของสมาชิกแต่ละคนไม่เกิน 5 ล้านบาท- Layer 2 (L2) : เมื่อทุนของสมาชิกแต่ละคนเกิน 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาท- Layer 3 (L3) : เมื่อทุนของสมาชิกแต่ละคนเกิน 20 ล้านบาท | L1 |
| Amount Life | จำนวนสมาชิกที่มีทุนชีวิต | 18 |
| Amount Accident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปี | 18 |
| Amount MedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 117 |
| Amount TPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ | 117 |
| Life Insure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ | 11,700,000.00 |
| Accident Insure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 11,700,000.00 |
| MedAccident Insure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 11,700,000.00 |
| TPD Insure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์ | 11,700,000.00 |
| Life Premium Rate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | 3.30 |
| Accident Premium Rate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |
| MedAccident Premium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | 1.43 |
| TPD Premium Rate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | 1.43 |
| Life Premium | เบี้ยของความคุ้มครองชีวิต | 38,610.00 |
| Life Extra Premium | เบี้ยของความคุ้มครองชีวิต (Extra) | 0.00 |
| Accident Premium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 16,731.00 |
| Accident Extra Premium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra)ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 0.00 |
| MedAccident Premium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | 16,731.00 |
| TPD Premium | เบี้ยของความคุ้มครองทุพพลภาพ | 16,731.00 |
| IPD Premium | เบี้ยของความคุ้มครองผู้ป่วยใน | 100,000.00 |
| OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | 100,000.00 |
| Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | 100,000.00 |


===== PAGE 1313439794 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-11 ตัวอย่าง output file - Actual BDR - Experience Refund =====
(empty page)


===== PAGE 1307312705 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-11 ตัวอย่าง output file - ข้อมูลสมาชิกที่อายุเกิน 70 ปี =====
| ชื่อฟิลด์ | คำอธิบาย | ตัวอย่าง |
| PolicyNo | เลขกรมธรรม์ | GH4078 |
| Effective Date | วันที่คุ้มครอง | 18/04/2024 |
| Payment Mode | ประเภทการชำระเบี้ย | Annual |
| CertNo | หมายเลขสมาชิก | 00071 |
| Age | อายุของผู้เอาประกัน | 73 |
| Accident Insure | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | 1,000,000.00 |
| Accident Premium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | 1,840.00 |


===== PAGE 1313439880 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar =====
- ไฟล์ BDRการตั้งชื่อไฟล์ชื่อไฟล์ EB Group_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่างเช่น 2024Q2ชื่อไฟล์ EB Group_2024Q2.xlsxจะประกอบด้วย Sheet ดังต่อไปนี้Bordereau_YYYYQQ:ใช้สำหรับแสดงข้อมูล Bordereau ของไตรมาสที่รายงานA09-12-1 ตัวอย่าง output file - Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQClaim Notification_YYYYMMใช้สำหรับแสดงข้อมูลการแจ้งเคลมรายเดือนโดยใน 1 ไตรมาส จะมีจำนวน 3 Sheet (ตาม 3 เดือนของไตรมาสนั้น)A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQExperience Refundใช้สำหรับแสดงข้อมูล Experience Refund ของกรมธรรม์A09-12-3 ตัวอย่าง output file - BDR - Experience Refund
- การตั้งชื่อไฟล์ชื่อไฟล์ EB Group_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่างเช่น 2024Q2ชื่อไฟล์ EB Group_2024Q2.xlsx
- ชื่อไฟล์ EB Group_YYYYQQYYYY = Quarter YearQQ = Quarter No
- YYYY = Quarter Year
- QQ = Quarter No
- ตัวอย่างเช่น 2024Q2ชื่อไฟล์ EB Group_2024Q2.xlsx
- ชื่อไฟล์ EB Group_2024Q2.xlsx
- จะประกอบด้วย Sheet ดังต่อไปนี้Bordereau_YYYYQQ:ใช้สำหรับแสดงข้อมูล Bordereau ของไตรมาสที่รายงานA09-12-1 ตัวอย่าง output file - Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQClaim Notification_YYYYMMใช้สำหรับแสดงข้อมูลการแจ้งเคลมรายเดือนโดยใน 1 ไตรมาส จะมีจำนวน 3 Sheet (ตาม 3 เดือนของไตรมาสนั้น)A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQExperience Refundใช้สำหรับแสดงข้อมูล Experience Refund ของกรมธรรม์A09-12-3 ตัวอย่าง output file - BDR - Experience Refund
- Bordereau_YYYYQQ:ใช้สำหรับแสดงข้อมูล Bordereau ของไตรมาสที่รายงานA09-12-1 ตัวอย่าง output file - Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- ใช้สำหรับแสดงข้อมูล Bordereau ของไตรมาสที่รายงาน
- A09-12-1 ตัวอย่าง output file - Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- Claim Notification_YYYYMMใช้สำหรับแสดงข้อมูลการแจ้งเคลมรายเดือนโดยใน 1 ไตรมาส จะมีจำนวน 3 Sheet (ตาม 3 เดือนของไตรมาสนั้น)A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQ
- ใช้สำหรับแสดงข้อมูลการแจ้งเคลมรายเดือน
- โดยใน 1 ไตรมาส จะมีจำนวน 3 Sheet (ตาม 3 เดือนของไตรมาสนั้น)
- A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQ
- Experience Refundใช้สำหรับแสดงข้อมูล Experience Refund ของกรมธรรม์A09-12-3 ตัวอย่าง output file - BDR - Experience Refund
- ใช้สำหรับแสดงข้อมูล Experience Refund ของกรมธรรม์
- A09-12-3 ตัวอย่าง output file - BDR - Experience Refund
- ไฟล์นำเข้า EDW: A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQการตั้งชื่อไฟล์ และชื่อชีทรูปแบบชื่อไฟล์ Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่าง เช่น Act_GIB_2024Q2
- การตั้งชื่อไฟล์ และชื่อชีทรูปแบบชื่อไฟล์ Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่าง เช่น Act_GIB_2024Q2
- รูปแบบชื่อไฟล์ Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter No
- YYYY = Quarter Year
- QQ = Quarter No
- ตัวอย่าง เช่น Act_GIB_2024Q2
- ไฟล์ SOA: A09-12-6 ตัวอย่าง output file - EDW - SOA_Act_GIB_YYYYQQการตั้งชื่อไฟล์ และชื่อชีทรูปแบบชื่อไฟล์ SOA_Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่าง เช่น SOA_Act_GIB_2024Q2
- การตั้งชื่อไฟล์ และชื่อชีทรูปแบบชื่อไฟล์ SOA_Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter Noตัวอย่าง เช่น SOA_Act_GIB_2024Q2
- รูปแบบชื่อไฟล์ SOA_Act_GIB_YYYYQQYYYY = Quarter YearQQ = Quarter No
- YYYY = Quarter Year
- QQ = Quarter No
- ตัวอย่าง เช่น SOA_Act_GIB_2024Q2
- ไฟล์ Profit Commission: A09-12-7 ตัวอย่าง output file - Gibraltar - Profit Commissionชื่อไฟล์: Profit Commission_EB_YYYYYYYY = Quarter Yearชื่อชีท: Sheet Profit Commission YYYYYYYY = Quarter Yearตัวอย่างเช่นทำ Profit Commisson ของปี 2024ชื่อไฟล์ Profit Commission_EB_2024.xlsxชื่อ Sheet Profit Commission 2024
- ชื่อไฟล์: Profit Commission_EB_YYYYYYYY = Quarter Year
- YYYY = Quarter Year
- ชื่อชีท: Sheet Profit Commission YYYYYYYY = Quarter Year
- YYYY = Quarter Year
- ตัวอย่างเช่นทำ Profit Commisson ของปี 2024ชื่อไฟล์ Profit Commission_EB_2024.xlsxชื่อ Sheet Profit Commission 2024
- ชื่อไฟล์ Profit Commission_EB_2024.xlsx
- ชื่อ Sheet Profit Commission 2024


===== PAGE 1313439883 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ =====
| หัวข้อ | คำอธิบาย | Process | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| Quarterly Reinsurance List : Year YYYY QQ | ระบุปีและไตรมาสของรายงาน โดยแสดงค่าตาม Quarter Period |  | - |  | Quarterly Reinsurance List : Year 2024 2Q |
| No. YYYY QQ | ระบุปีและไตรมาสของรายงาน โดยแสดงค่าตาม Quarter Period |  | - |  | 2024 2Q |
| RI No. | เลขอ้างอิงการส่งงานประกันต่อ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 1701001 |
| Pol No | เลขกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | GH032 |
| Policy Name | ชื่อกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | FELIX HOTEL MANAGEMENT CO., LTD |
| Nature of Business | ประเภทธุรกิจของกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | HOTEL BUSINESS |
| Mode of Payment | โหมดชำระเบี้ย | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 0 |
| Policy Status | สถานะกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่า Policy Status จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 2 |
| Comm. Date | วันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurer | ข้อมูลกรมธรรม์ | แสดงค่าจาก RICommencementDate จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 01/01/2017 |
| Renewal/ Lapsed Date | วันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 01/01/2024 |
| Pol. Yr. | ปีกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่า Pol. Yr. จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refundเป็นปีที่ต้องคำนวณตามเงื่อนไขเลข reinsurno | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 8 |
| Policy Period | ช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2024 - 31/12/2024 |
| Premium Rate (% p.a.): Life | อัตราเบี้ยประกันชีวิตรายปี | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงข้อมูลที่รายการผลรวมของ Layer 1–3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 2.70 |
| Premium Rate (% p.a.): AD&D | อัตราเบี้ยประกันอุบัติเหตุรายปี | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงข้อมูลที่รายการผลรวมของ Layer 1–3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 1.32 |
| SA Layer | ชั้นทุนประกันของสมาชิก |  | แสดงค่า ดังนี้แสดงค่า 1 กรณีเป็นข้อมูล Layer 1แสดงค่า 2 กรณีเป็นข้อมูล Layer 2แสดงค่า 3 กรณีเป็นข้อมูล Layer 3แสดงค่า ว่าง กรณีเป็นผลรวมของ Layer 1-3 |  | 1 |
| ส่วน Original Policy |  |  |  |  |  |
| Members: Life | จำนวนสมาชิกความคุ้มครอง Life แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงผลเป็นจำนวนเต็ม (ไม่มีทศนิยม)กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 162 |
| Members: AD&D | จำนวนสมาชิกความคุ้มครอง AD&D แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงผลเป็นจำนวนเต็ม (ไม่มีทศนิยม)กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 162 |
| TL SA: Life | ทุนประกันรวม (Sum Assured) ของ Life แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 35,200,000.00 |
| TL SA: AD&D | ทุนประกันรวม (Sum Assured) ของ AD&D แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: Life | เบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: Life | เบี้ยประกันต่อ Life สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: Life | เบี้ยปรับเพิ่ม Life (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: AD&D | เบี้ยปรับเพิ่ม AD&D (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: Life | เบี้ยคืน Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: AD&D | เบี้ยคืน AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: Life | เบี้ยประกันต่อ Life รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: AD&D | เบี้ยประกันต่อ AD&D รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Life | ค่าสินไหม Life ที่บริษัทจ่าย | Claim | แสดงค่ายอดผลรวม Amount Paid: Life จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: AD&D | ค่าสินไหม AD&D ที่บริษัทจ่าย | Claim | แสดงค่ายอดผลรวม Amount Paid: Accident จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Dismemberment | ค่าสินไหม Dismemberment | Claim | แสดงค่ายอดผลรวม Amount Paid: Dismemberment จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Claim Paid: DI | ค่าสินไหม Disability Income | Claim | แสดงค่ายอดผลรวม Amount Paid: DI จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Investigation & Legal Expense | ค่าใช้จ่ายสอบสวนและกฎหมาย | Claim | แสดงค่ายอดผลรวม Amount Paid By Insurer: Investigation & Legal Expense จาก Step 6 BD-AP-001-02-03 RI Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: Life | เงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่ายอดผลรวม Original Experience Refund paid by the Ceding Company จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: AD&D | เงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่ายอดผลรวม Original Experience Refund paid by the Ceding Company จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Accident | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| ส่วน Reinsurance |  |  |  |  |  |
| % SA share: Life | สัดส่วนทุนประกันต่อที่ใช้สำหรับ Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวรวม Layer 1–3 แสดงค่าว่าง | 15% |
| % SA share: AD&D | สัดส่วนทุนประกันต่อที่ใช้สำหรับ AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวรวม Layer 1–3 แสดงค่าว่าง | 15% |
| TL SR: Life | จำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 5,280,000.00 |
| TL SR: AD&D | จำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 5,280,000.00 |
| New Business Premium: Life | เบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: Life | เบี้ยประกันต่อ Life สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: Life | เบี้ยปรับเพิ่ม Life (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: AD&D | เบี้ยปรับเพิ่ม AD&D (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: Life | เบี้ยคืน Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: AD&D | เบี้ยคืน AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: Life | เบี้ยประกันต่อ Life รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: AD&D | เบี้ยประกันต่อ AD&D รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Life | ค่าสินไหม Life ที่บริษัทจ่าย | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: Life จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: AD&D | ค่าสินไหม AD&D ที่บริษัทจ่าย | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: AD&D จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Dismemberment | ค่าสินไหมกรณีสูญเสียอวัยวะ | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: Dismemberment จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: DI | ค่าสินไหม Disability Income | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: DI จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Investigation & Legal Expense | ค่าใช้จ่ายสอบสวนและกฎหมาย | Claim | แสดงจากส่วน Reinsurance ค่า Investigation & Legal Expense จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| RI Commission: Life | ค่าคอมมิชชั่นประกันต่อ Life | Commission | คำนวณจากส่วน reinsurance ค่า TL Premium: Life แยกตาม Layer (L1–L3) คูณด้วย RI Commission Rate%ROUND(TL Premium: Life × RI Commission Rate%, 2)RI Commission Rate% ดึงค่าจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ RI Commission Rate% ที่ถูกต้องสำหรับรอบประมวลผลนั้น | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| RI Commission: AD&D | ค่าคอมมิชชั่นประกันต่อ AD&D | Commission | คำนวณจากส่วน reinsurance ค่า TL Premium: AD&D แยกตาม Layer (L1–L3) คูณด้วย RI Commission Rate%ROUND(TL Premium: AD&D × RI Commission Rate%, 2)RI Commission Rate% ดึงค่าจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ RI Commission Rate% ที่ถูกต้องสำหรับรอบประมวลผลนั้น | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Experience Refund paid to clients: Life | เงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่า Reinsurance Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Life | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: AD&D | เงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่า Reinsurance Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Accident | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |


===== PAGE 1313145890 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQ =====
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ ดึงข้อมูลจาก BD-AP-001-02-03 RI Claim | Display Rule | ตัวอย่าง |
| No. run | ลำดับรายการในรายงาน | เรียงตาม PolicyNo หากเป็น PolicyNo เดียวกัน ให้ใช้เลข No. เดียวกัน |  | 1 |
| RI No. | เลขอ้างอิงการส่งงานประกันต่อ | แสดงค่า RI No. |  | 1701001 |
| Pol No | เลขกรมธรรม์ | แสดงค่า Pol No |  | GH124 |
| Policy Name | ชื่อกรมธรรม์ | แสดงค่า PolicyName | กรณีเป็นภาษาอังกฤษ ให้แสดงด้วยตัวพิมพ์ใหญ่ | CONSULTANTS OF TECHNOLOGY CO.,LTD. |
| Policy Period | ช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น | ดึงค่า Policy Period | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2024 - 31/12/2024 |
| Cession No. | หมายเลขสมาชิก (CertNo) | ดึงค่า Cession No. |  | 00250 |
| Effective Date | วันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurer | ดึงค่าจาก Effective Date | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2017 |
| Age | อายุสมาชิก ณ วันที่เกิดเหตุ | ดึงค่าจาก Age | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 50 |
| Date of Death / Disability | วันที่เสียชีวิต หรือ Accident Date | ดึงค่าจาก Date of Death / Disability | แสดงผลในรูปแบบ วัน/เดือน/ปี | 25/03/2024 |
| Cause of Death / Disability | สาเหตุการเสียชีวิต / อุบัติเหตุ / การเจ็บป่วย | ดึงค่า Cause of Death / Disability |  | Blood Infection |
| Original Sum Insured: Life | ทุนประกันชีวิตของสมาชิก | ดึงค่า Original Sum Insured: Life | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 100,000 |
| Original Sum Insured: Accident | ทุนประกันอุบัติเหตุของสมาชิก | ดึงค่า Original Sum Insured: Accident | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 0 |
| Payment Date | วันที่จ่ายเงิน | ดึงค่า Payment Date | แสดงผลในรูปแบบ วัน/เดือน/ปี | 10/05/2024 |
| Accounting Entries in the (Pol.yr.) | ปีกรมธรรม์ | ดึงค่า Accounting Entries in the (Pol.yr.) | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 8 |
| Status | การเสียชีวิตของสมาชิกในรายการเคลมนี้ เป็น การเสียชีวิตทั่วไป หรือเป็น การเสียชีวิตจากอุบัติเหตุ | ดึงค่า Status |  | Normal |
| Amount Paid: Life | จำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย | ดึงค่า Amount Paid: Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 100,000.00 |
| Amount Paid: Accident | จำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย | ดึงค่า Amount Paid: Accident | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Amount Paid: Dismemberment | จำนวนเงินสินไหมสูญเสียอวัยวะ ที่บริษัทอนุมัติจ่าย | ดึงค่า Amount Paid: Dismemberment | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Amount Paid: DI | ค่าสินไหม Disability Income ที่บริษัทอนุมัติจ่าย | ดึงค่า Amount Paid: DI | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Amount Paid By Insurer: Investigation & Legal Expense | ค่าใช้จ่ายในการสอบสวนที่บริษัทอนุมัติจ่าย | ดึงค่า Amount Paid By Insurer: Investigation & Legal Expense | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share: Life | จำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 15,000.00 |
| Reinsurer's Share: Accident | จำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Accident | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share: Dismemberment | จำนวนเงินสินไหมสูญเสียอวัยวะ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Dismemberment | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share: DI | ค่าสินไหม Disability Income ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: DI | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share: Investigation & Legal Expense | ค่าใช้จ่ายในการสอบสวนที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Investigation & Legal Expense | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Remark | หมายเหตุ | ดึงค่า Remark |  |  |


===== PAGE 1313439797 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-3 ตัวอย่าง output file - BDR - Experience Refund =====
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| Group No. | รหัสอ้างอิงของกรมธรรม์ที่มีการคำนวณและจ่าย Experience Refund ในรอบการประมวลผล (Period) ที่เลือกโดยระบบจะใช้ Group No. เพื่อระบุว่าเงิน Experience Refund รายการนี้เป็นของกรมธรรม์ใด และเป็นของความคุ้มครองประเภทใด | Group No. ต้องอ้างอิงจาก PolicyNo ของกรมธรรม์ที่มีการจ่าย Experience Refundแสดงค่า Policy No_CoverageType จาก BD-AP-001-02-04 Experience Refund | 1 Group No. = 1 กรมธรรม์ + 1 ประเภทความคุ้มครองระบบต้อง แยก Group No. ตามประเภทความคุ้มครอง ดังนี้:LifeAccident (ถ้ามี) | GL1644_Life |
| Policy Year | ปีกรมธรรม์สำหรับส่ง Reinsurer | แสดงค่า Pol. Yr. จาก BD-AP-001-02-04 Experience Refundเป็นปีกรมธรรม์จากการคำนวณจาก RICommencementDate | แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม | 1 |
| Number of member | จำนวนสมาชิกทั้งหมดในปีกรมธรรม์ แยกตามความคุ้มครอง | แสดงค่า Number of member จาก BD-AP-001-02-04 Experience Refund แยกตามความคุ้มครอง | แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม | 2,294 |
| Experience Refund Rate (A) | อัตรา % Experience Refund | แสดงค่า Experience Refund Rate (A) จาก BD-AP-001-02-04 Experience Refund | แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยมแสดงหน่วยเป็นเปอร์เซ็นต์ (%) | 75% |
| Expense at the t policy year (Et) | อัตราค่าใช้จ่าย | แสดงค่า Expense at the t policy year (Et) จาก BD-AP-001-02-04 Experience Refund | แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยมแสดงหน่วยเป็นเปอร์เซ็นต์ (%) | 25% |
| Gross Premium at the t policy year (Pt) | เบี้ยรวมทั้งปีกรมธรรม์ | แสดงค่า Gross Premium at the t policy year (Pt) จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 230,569.22 |
| Claims Paid at the t policy year (Ct) * | ค่าสินไหมรวมทั้งปีกรมธรรม์ | แสดงค่า Claims Paid at the t policy year (Ct) * จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Original Experience Refund paid by the Ceding Company | เงิน ER ที่บริษัทคืนลูกค้า | แสดงค่า Original Experience Refund paid by the Ceding Company จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 129,695.19 |
| Net reinsurance premium to the Reinsurer | เบี้ย RI สุทธิย้อนหลังทั้งปี | แสดงค่า Net reinsurance premium to the Reinsurer จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 34,636.21 |
| Reinsurance Commission | Commission RI ย้อนหลังทั้งปี | แสดงค่า Reinsurance Commission จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 17,318.11 |
| Reinsurance Experience Refund | เงิน ER ที่ Reinsurer ต้องรับผิดชอบ | แสดงค่า Reinsurance Experience Refund จาก BD-AP-001-02-04 Experience Refund | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 17,318.10 |


===== PAGE 1313439893 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQ =====
ชื่อไฟล์ "Act_GIB_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล เช่น Act_GIB_2024Q2
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| PolicyNo | เลขที่กรมธรรม์ | ใส่ PolicyNo จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ |  | GH032 |
| RI Com.Date | วันที่เริ่มต้นสัญญาครั้งแรก | ดึงค่า CommencementDate จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund |  | 01/01/2017 |
| Renewal Date | วันที่เริ่มต้นสัญญาตามปีกรมธรรม์ | ดึงข้อมูลวันที่เริ่มต้นจาก Policy Period จาก จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ |  | 01/01/2024 |
| Policy Year | ปีกรมธรรม์ | คำนวณจากEDW Policy Year = ปีของ Renewal Date - ปีของ RI Com. Date + 1 ปี | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 8 |
| RI NB Premium Life | เบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก | ตรวจสอบ EDW Policy Year = 1ดึงข้อมูลส่วน reinsurance ค่า New Business Premium: Life หรือ Renewal Premium: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI NB Premium AD&D | เบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก | ตรวจสอบ EDW Policy Year = 1ดึงข้อมูลส่วน reinsurance ค่า New Business Premium: AD&D หรือ Renewal Premium: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Renewal Premium Life | เบี้ยประกันต่อ Life สำหรับปีต่ออายุ | ตรวจสอบ EDW Policy Year > 1ดึงข้อมูลส่วน reinsurance ค่า New Business Premium: Life หรือ Renewal Premium: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Renewal Premium AD&D | เบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ | ตรวจสอบ EDW Policy Year > 1ดึงข้อมูลส่วน reinsurance ค่าNew Business Premium: AD&D หรือ Renewal Premium: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 35.00 |
| RI Revival Premium Life | เบี้ยปรับเพิ่ม Life (Movement) | ดึงข้อมูลส่วน reinsurance ค่า Revivals Premium: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Revival Premium AD&D | เบี้ยปรับเพิ่ม AD&D (Movement) | ดึงข้อมูลส่วน reinsurance ค่า Revivals Premium: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Refund Premium Life | เบี้ยคืน Life | ดึงข้อมูลส่วน reinsurance ค่า Refund Premium: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Refund Premium AD&D | เบี้ยคืน AD&D | ดึงข้อมูลส่วน reinsurance ค่า Refund Premium: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Commission Life | ค่าคอมมิชชั่นประกันต่อ Life | ดึงข้อมูลส่วน reinsurance ค่า RI Commission : Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Commission AD&D | ค่าคอมมิชชั่นประกันต่อ AD&D | ดึงข้อมูลส่วน reinsurance ค่า RI Commission : AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Claim Paid Life | ค่าสินไหม Life ที่บริษัทจ่าย | ดึงข้อมูลส่วน reinsurance ค่า Claim Paid: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Claim Paid AD&D | ค่าสินไหมกรณีอุบัติเหตุ | ดึงข้อมูลส่วน reinsurance ค่า Claim Paid: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Claim Paid Dismemberment | ค่าสินไหมค่าสินไหมกรณีสูญเสียอวัยวะ | ดึงข้อมูลส่วน reinsurance ค่า Claim Paid: Dismemberment จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| RI Claim Investigation & Legal Expense | ค่าใช้จ่ายสอบสวนและกฎหมาย | ดึงข้อมูลส่วน reinsurance ค่า Investigation & Legal Expense จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Experience Refund Life | เงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน | ดึงข้อมูลส่วน reinsurance ค่า Experience Refund paid to clients: Life จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Experience Refund AD&D | เงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน | ดึงข้อมูลส่วน reinsurance ค่า Experience Refund paid to clients: AD&D จาก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Claim Return Premium | เบี้ยประกันที่ต้องคืนเนื่องจากเหตุที่เกี่ยวข้องกับสินไหม | กำหนดค่า 0 | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Data Quarter | ไตรมาสของข้อมูลที่ใช้ในการประมวลผลรายงาน (เช่น 2024Q2) | ตาม Quarter Period ที่ประมวลผลแสดงในรูปแบบ YYYYQQYYYY = ปีค.ศQQ = Quarter Period |  | 2024Q2 |
| RI Period | งวดการประมวลผลสำหรับการส่งรายงานประกันต่อให้ Reinsurer | แสดงค่าด้วยปีและเดือนของ Renewal Date | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 202401 |


===== PAGE 1313439915 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-6 ตัวอย่าง output file - EDW - SOA_Act_GIB_YYYYQQ =====
#### รายละเอียด
- ระบบจะออกรายงาน 1 ไฟล์ SOA ตาม Quarter Period
- รูปแบบการตั้งชื่อไฟล์ SOAชื่อไฟล์ "SOA_Act_GIB_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล Quarter Period เช่น SOA_Act_GIB_2024Q2
- ชื่อไฟล์ "SOA_Act_GIB_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล Quarter Period เช่น SOA_Act_GIB_2024Q2
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการประมวลผลออกไฟล์ EDW BD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOA เพื่อใช้เป็นเอกสารสรุปบัญชีระหว่างบริษัทประกันกับ Reinsurerใช้แสดงยอดที่ต้อง ชำระ / รับคืน ในแต่ละงวด ตามสัญญาประกันภัยต่อ
- ขอบเขตข้อมูลที่ใช้ระบบใช้ข้อมูลจาก ไฟล์นำเข้า EDW A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQขอบเขตความคุ้มครองของ Gibraltar Group EBLifeAccident Death (AD&D)ไม่รวมความคุ้มครองประเภทอื่น
- ระบบใช้ข้อมูลจาก ไฟล์นำเข้า EDW A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQ
- ขอบเขตความคุ้มครองของ Gibraltar Group EBLifeAccident Death (AD&D)
- Life
- Accident Death (AD&D)
- ไม่รวมความคุ้มครองประเภทอื่น
- การดูยอดเงิน New business หรือ Renewal ให้ดูปีกรมธรรม์ตามระบบหน้าบ้าน (จาก BD-PS-001 ข้อมูล Master group policy (List of policy)) เท่านั้น
| No | ส่วนการแสดงผล | ฟิลด์ | คำอธิบาย | ตัวอย่าง |
| 1 | ส่วน Header | Statement Account for Quarter, Year | Quarter, Year จะเปลี่ยนไปตามเดือน Quarter Periodเช่น Quarter 2024Q2 จะต้องแสดงว่าStatement Account for 2nd Quarter, 2024 | Statement Account for 2nd Quarter, 2024 |
| 2 | ส่วน Header | No. YYYY.QQ | YYYY.QQ จะเปลี่ยนไปตามเดือน Quarter Periodเช่น Quarter 2024Q2 จะต้องแสดงว่า 2024.Q2 | 2024.Q2 |
| 3 | ส่วน Header | Date: | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 19-Dec-2025 |
| 4 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Reinsurance Premium | ระบบแสดงผลรวมเบี้ยจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้New Business: แสดงผลรวมเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่า RI NB Premium LifeAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่า RI NB Premium AD&DTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Business (1 st yr.): แสดงค่าเป็น 0Renewal Business (Renewal): แสดงผลรวมเบี้ยปีต่อ โดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่าจาก RI Renewal Premium LifeAD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Renewal Premium AD&DTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 5 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Commission | ระบบแสดงผลรวมคอมมิชชั่นจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตคำนวณจาก Round((Reinsurance Premium: New Business Type Life + Revival Premiums: 1st yr. Type Life) x RI Commission Rate% , 2)AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุคำนวณจาก Round((Reinsurance Premium: New Business Type AD&D + Revival Premiums: 1st yr. Type AD&D) x RI Commission Rate% , 2)TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตคำนวณจาก RI Commission Life + Commission Refund: 1st yr. Type Life + Commission Refund: Renewal Type Life - Commission: 1 st yr. Type Life AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุคำนวณจาก RI Commission AD&D + Commission Refund: 1st yr. Type AD&D + Commission Refund: Renewal Type AD&D - Commission: 1 st yr. Type AD&D TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 6 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Premium Refund | ระบบแสดงผลรวมเงินคืนเบี้ยจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเงินคืนเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่าจาก RI Refund Premium Life สำหรับปีกรมธรรม์ = 1AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Refund Premium AD&D สำหรับปีกรมธรรม์ = 1TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมเงินคืนเบี้ยปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่าจาก RI Refund Premium Life สำหรับปีกรมธรรม์ > 1AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Refund Premium AD&D สำหรับปีกรมธรรม์ > 1TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 01 st yr. Claim: แสดงผลรวมเงินคืนสินไหมปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Claim: แสดงผลรวมเงินคืนสินไหมปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 7 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Commission Refund | ระบบแสดงผลรวมเงินคืนคอมมิชชั่นจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเงินคืนคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตคำนวณจาก Round(Premium Refund: 1st yr. Type Life x RI Commission Rate% , 2)AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุคำนวณจาก Round(Premium Refund: 1st yr. Type AD&D x RI Commission Rate% , 2)TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตคำนวณจาก Round(Premium Refund: Renewal Type Life x RI Commission Rate% , 2)AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุคำนวณจาก Round(Premium Refund: Renewal Type AD&D x RI Commission Rate% , 2)TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 01 st yr. Claim: แสดงผลรวมเงินคืนคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Claim: แสดงผลรวมเงินคืนคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 8 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Claim | ส่วน Claim ใน SOA จะแบ่งเป็น 3 ช่วงหลัก ๆ คือ1st yr. (เคลมของกรมธรรม์ปีแรก / New Business)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตใช้ค่าจาก RI Claim Paid Life สำหรับปีกรมธรรม์ = 1AD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Claim Paid AD&D + RI Claim Paid Dismemberment สำหรับปีกรมธรรม์ = 1TPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal (เคลมของกรมธรรม์ต่ออายุ)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิตใช้ค่าจาก RI Claim Paid Life สำหรับปีกรมธรรม์ > 1AD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Claim Paid AD&D + RI Claim Paid Dismemberment สำหรับปีกรมธรรม์ > 1TPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Claim Expenses (ค่าใช้จ่ายที่เกี่ยวข้องกับการจัดการเคลม)INVESTIGATION FEE : ค่าตรวจสอบ / สืบสวนเคลมใช้ค่าจาก RI Claim Investigation & Legal ExpenseLEGAL FEE : ค่ากฎหมาย แสดงค่าเป็น 0MEDICAL EVIDENCE : ค่าขอเอกสารทางการแพทย์ แสดงค่าเป็น 0 | 89,084.53 |
| 9 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Revival Premiums | ระบบแสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่าจาก RI Revival Premiums Lifeสำหรับปีกรมธรรม์ = 1AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Revival Premiums AD&Dสำหรับปีกรมธรรม์ = 1TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิตใช้ค่าจาก RI Revival Premiums Life สำหรับปีกรมธรรม์ > 1AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าจาก RI Revival Premiums AD&D สำหรับปีกรมธรรม์ > 1TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 10 | ฝั่ง DUE FROM REINSURER (Dr.) | Admin. Commission (Remittance) :Experience Refund Share :Profit Commission : | Admin. Commission (Remittance) : แสดงค่าเป็น 0Experience Refund Share :คำนวณจาก Experience Refund Life + Experience Refund AD&DProfit Commission :จะมีค่าเฉพาะ Actual Quarter 4สำหรับ Quarter อื่น ให้ออก 0ใช้ค่าจาก Profit Commission for current year จาก BD-AP-001-02-07 ประมวลผล Profit Commission | - |
| 11 | ฝั่ง DUE TO REINSURER (Cr.) | sub totalDUE TO REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE TO REINSURER (Cr.)DUE TO REINSURER คือ ยอดสุทธิที่บริษัทต้องจ่ายให้ Reinsurerคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer < Sub total ฝั่ง Due To Reinsurer)DUE TO REINSURER = Sub total ฝั่ง Due To Reinsurer − Sub total ฝั่ง Due From Reinsurer ไม่เช่นนั้น = 0 | - |
| 12 | ฝั่ง DUE FROM REINSURER (Dr.) | sub totalDUE FROM REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE FROM REINSURER (Dr.)DUE FROM REINSURER คือ ยอดสุทธิที่ Reinsurer ต้องจ่ายให้บริษัทคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer > Sub total ฝั่ง Due To Reinsurer) DUE FROM REINSURER = Sub total ฝั่ง Due From Reinsurer − Sub total ฝั่ง Due To Reinsurerไม่เช่นนั้น = 0 | 89,084.53 |


===== PAGE 1313439929 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-12 ตัวอย่าง output file - Actual Gibraltar > A09-12-7 ตัวอย่าง output file - Gibraltar - Profit Commission =====
ระบบดึงข้อมูลจาก BD-AP-001-02-07 ประมวลผล Profit Commission
| ข้อมูล | ความหมาย | เงื่อนไขการบันทึกข้อมูลดึงค่าจาก BD-AP-001-02-07 ประมวลผล Profit Commission Step 4 | ตัวอย่าง |
| Incomes |  |  |  |
| (1) Unearned premium at the beginning of the current year; | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ ต้นปีบัญชีปัจจุบัน (Unearned Premium ต้นงวด) | (1) Unearned premium at the beginning of the current year; | 8,887,113.65 |
| (2) Reserves for outstanding claims at the beginning of the current year (if any); | เงินสำรองค่าสินไหมค้างจ่าย ณ ต้นปีบัญชีปัจจุบัน (ถ้ามี) | (2) Reserves for outstanding claims at the beginning of the current year (if any); | 0 |
| (3) Net premium income after deducting premium refunds for the current year; | เบี้ยประกันสุทธิของปีปัจจุบัน หลังหักเบี้ยคืน (Refund Premium) แล้ว | (3) Net premium income after deducting premium refunds for the current year; | 15,797,083.07 |
| Total (A) | ผลรวมของรายได้ทั้งหมดในส่วน Incomes | Total (A) | 24,684,196.72 |
| Outgoes |  |  |  |
| (4) Claims, Investigation and legal expenses paid (Inclusive of those paid by special remittances, if any) in the current year; | ค่าสินไหม ค่าตรวจสอบ และค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในปีปัจจุบันรวมถึงรายการที่จ่ายผ่านช่องทางพิเศษ (ถ้ามี) | (4) Claims, Investigation and legal expenses paid (Inclusive of those paid by special remittances, if any) in the current year; | 6,572,545.20 |
| (5) Business expenses of the Reinsurer for the current year ((3) x 10%); | ค่าใช้จ่ายในการดำเนินงานของ Reinsurerคำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (5) Business expenses of the Reinsurer for the current year ((3) x 10%);การแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses% | (5) Business expenses of the Reinsurer for the current year ((3) x Administrative expenses%); | 1,579,708.31 |
| (6) Unearned premium at the end of the current year ((3) x 50%); | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปีคำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (6) Unearned premium at the end of the current year ((3) x 50%);การแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums% | (6) Unearned premium at the end of the current year ((3) x Reserve for unearned premiums%); | 7,898,541.54 |
| (7) Reserves for outstanding claims at the end of the year (if any); | เงินสำรองค่าสินไหมค้างจ่าย ณ สิ้นปี (ถ้ามี) | (7) Reserves for outstanding claims at the end of the year (if any); | 0 |
| (8) Reinsurance Commission paid during the year; | ค่านายหน้าประกันต่อที่จ่ายให้ Reinsurer ในปีนั้น | (8) Reinsurance Commission paid during the year; | 7,898,542.65 |
| (9) Reinsurance Experience Refund for original GLI paid in the current year; | เงิน Experience Refund ที่บริษัทรับประกันต่อจ่ายคืนให้ สำหรับกรมธรรม์ GLI ในปีปัจจุบัน | (9) Reinsurance Experience Refund for original GLI paid in the current year; | 57,159.17 |
| (10) Negative net balance of the Incomes and Outgoes carried over from the previous year (if any); | ยอดขาดทุนสุทธิ (ถ้ามี) ที่ยกมาจากการคำนวณของปีก่อนหน้า | (10) Negative net balance of the Incomes and Outgoes carried over from the previous year (if any); | 3,662,427.81 |
| Total (B) | ผลรวมของรายจ่ายทั้งหมดในส่วน Outgoes | Total (B) | 27,668,924.68 |
| Net balance of Incomes and Outgoes (A - B) | ผลต่างสุทธิระหว่างรายได้และรายจ่าย | Net balance of Incomes and Outgoes (A - B) | -2,984,727.96 |
| Rate of profit commission | อัตราส่วนแบ่งกำไร (Profit Commission Rate) ตามสัญญาประกันต่อ | Rate of profit commission | 50% |
| Profit Commission for current year | จำนวนเงิน Profit Commission ที่ Reinsurer ต้องจ่ายคืนสำหรับปีปัจจุบัน | Profit Commission for current year | 0 |


===== PAGE 1313669127 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA =====
(empty page)


===== PAGE 1313669129 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No =====
- การตั้งชื่อไฟล์ และ SheetFile: GroupPA_Renewal_Code Name_YYYYQQ_Policy No.xlsxSheet: Renewal_Code Name_YYYYQQ_Policy No
- File: GroupPA_Renewal_Code Name_YYYYQQ_Policy No.xlsx
- Sheet: Renewal_Code Name_YYYYQQ_Policy No
- ตัวอย่างPolicy No GA2641 Code Name OLI Actual Report 2024Q1File: GroupPA_Renewal_OLI_2024Q1_GA2641.xlsxSheet: Renewal_OLI_2024Q1_GA2641
- Policy No GA2641 Code Name OLI Actual Report 2024Q1
- File: GroupPA_Renewal_OLI_2024Q1_GA2641.xlsx
- Sheet: Renewal_OLI_2024Q1_GA2641
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 3rd Quarter 2024 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 15 July 2025 |
| Group Name | ชื่อกรมธรรม์ | แสดงค่า Policy Name จาก BD-AP-001-03-01 Renewal |  | Sirindhorn International Institute of Technology |
| Policy Number | เลขกรมธรรม์ | แสดงค่า POLICY No. จาก BD-AP-001-03-01 Renewal |  | GA2663 |
| Period of Coverage | ช่วงวันที่เริ่มความคุ้มครองในปีกธ.นั้นๆ ถึงวันที่สิ้นสุดความคุ้มครอง | แสดงค่า Renewal Date - End Date จาก BD-AP-001-03-01 Renewal | แสดงในรูปแบบบ วัน เดือน ปี | 01/08/24 - 01/08/25 |
| No. | ลำดับ |  | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Cession No. | เลขสมาชิก | แสดงค่า Cession No. จาก BD-AP-001-03-01 Renewal |  | 00001 |
| Name | ชื่อของสมาชิก | แสดงค่าว่าง |  |  |
| Sex | เพศของสมาชิก | แสดงค่า Sex จาก BD-AP-001-03-01 Renewal |  | F |
| Date of Birth | วันเกิดของสมาชิก | แสดงค่าว่าง |  |  |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | แสดงค่า Age จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 29 |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครอง ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Sum assured Accident | ทุนประกัน สำหรับความคุ้มครองอุบัติเหตุ | แสดงค่า Sum Assured Accident จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,200,000 |
| Sum assured Murder | ทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละราย | แสดงค่า Sum Assured Murder จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,200,000 |
| Sum assured Loadings | ทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ | แสดงค่า Sum Assured Loadings จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,200,000 |
| Sum reassured Accident | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ | แสดงค่า Sum Reassured Accident จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 400,000 |
| Sum reassured Murder | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม | แสดงค่า Sum Reassured Murder จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 400,000 |
| Sum reassured Loadings | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษ | แสดงค่า Sum Reassured Loadings จาก BD-AP-001-03-01 Renewal | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 400,000 |
| RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition | แสดงค่า RI Rate จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 1.10 |
| Premium Accident | เบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ คำนวณจาก Sum Reassured Accident และ RI Rate | แสดงค่า Premium Accident จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 440.00 |
| Premium Loadings | เบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ คำนวณจาก Sum Reassured Loadings และ RI Rate และผลรวมของ RI Premium Loading จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | แสดงค่า Premium Loadings จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 44.00 |
| Premium Discount | ผลรวมส่วนลดของความคุ้มครอง Murder & Assault (MA) และส่วนลดตามขนาดกลุ่ม ซึ่งคำนวณจากเบี้ยอุบัติเหตุและเบี้ยส่วนเพิ่มตามเงื่อนไขที่กำหนด | แสดงค่า Premium Discount จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 145.20 |
| Total Premium | เบี้ยประกันต่อรวมสุทธิของสมาชิกแต่ละราย หลังหักส่วนลดแล้ว | แสดงค่า Total Premium จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 338.80 |
| Commission | ค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ คำนวณจาก Total Premium ตามอัตราที่กำหนด | แสดงค่า Commission จาก BD-AP-001-03-01 Renewal | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 84.70 |
| Remark | หมายเหตุ |  |  |  |
| Total - Sum assured Accident | ผลรวมทุนประกัน สำหรับความคุ้มครองอุบัติเหตุ | ผลรวมของ Sum assured Accident | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,410,600,000 |
| Total - Sum assured Murder | ผลรวมทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละราย | ผลรวมของ Sum Assured Murder | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,410,600,000 |
| Total - Sum assured Loadings | ผลรวมทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ | ผลรวมของ Sum Assured Loadings | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1,410,600,000 |
| Total - Sum reassured Accident | ผลรวมทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ | ผลรวมของ Sum Reassured Accident | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 394,150,000 |
| Total - Sum reassured Murder | ผลรวมทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม | ผลรวมของ Sum Reassured Murder | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 394,150,000 |
| Total - Sum reassured Loadings | ผลรวมทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษ | ผลรวมของ Sum Reassured Loadings | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 394,150,000 |
| Total - Premium Accident | ผลรวมเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ | ผลรวมของ Premium Accident | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 439,982.00 |
| Total - Premium Loadings | ผลรวมเบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ | ผลรวมของ Premium Loadings | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 43,998.20 |
| Total - Premium Discount | ผลรวมส่วนลดเบี้ยประกันภัยต่อ | ผลรวมของ Premium Discount | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 145,194.06 |
| Total - Total Premium | ผลรวมเบี้ยประกันต่อรวมสุทธิ หลังหักส่วนลดแล้ว | ผลรวมของ Total Premium | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 338,786.14 |
| Total - Commission | ผลรวมค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ | ผลรวมของ Commission | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 84,701.22 |


===== PAGE 1313669134 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No =====
|  | Alteration | Claim |
| ชื่อไฟล์สำหรับข้อมูล Alteration | GroupPA_Alteration_{CodeName}_{YYYYQQ}_{PolicyNo}.xlsxYYYY = Quarter YearQQ = Quarter NoCodeName = ดึงค่าตัวย่อชื่อกรมธรรม์จาก Code Name ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | GroupPA_Claim_{CodeName}_{YYYYQQ}_{PolicyNo}.xlsxYYYY = Quarter YearQQ = Quarter NoCodeName = ดึงค่าตัวย่อชื่อกรมธรรม์จาก Code Name ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| การตั้งชื่อ Sheet | ภายในไฟล์ Alteration ระบบจะต้องสร้าง Sheet แยกตามประเภทของ Alterationโดยตั้งชื่อ Sheet ตามรูปแบบ {AlterationType}_{CodeName}_{YYYYQQ}_{PolicyNo}ระบบเรียงลำดับ sheet จาก NM, CL, IC, DC ตามลำดับAlterationTypeTypeDescriptionAlteration TypeNew Member / Additionการเพิ่มสมาชิกใหม่NMCancellation / TerminationการยกเลิกสมาชิกCLIncreased Sum Assuredการเพิ่มทุนประกันICDecreased Sum AssuredการลดทุนประกันDC | ภายในไฟล์ Claim ระบบจะต้องสร้าง Sheet แยกตามเลขกรมธรรม์โดยตั้งชื่อ Sheet ตามรูปแบบ Claim_CodeName_YYYYQQ_Policy NoAlterationType TypeDescriptionAlteration TypeClaimการเคลมสินไหมClaim |
| ตัวอย่าง | Policy No: GA2641Code Name: OLIQuarter: 2024Q3Generated File NameGroupPA_Alteration_OLI_2024Q3_GA2641.xlsxGenerated Sheet NameNM_OLI_2024Q3_GA2641CL_OLI_2024Q3_GA2641IC_OLI_2024Q3_GA2641DC_OLI_2024Q3_GA2641 | Policy No: GA2641Code Name: OLIQuarter: 2024Q3Generated File NameGroupPA_Claim_OLI_2024Q3_GA2641.xlsxGenerated Sheet NameClaim_OLI_2019Q4_GA2387 |
| wiki | A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / AdditionA09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / TerminationA09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum AssuredA09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured | A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death |
| remarks | ถ้ากรมธรม์มี Alteration ไม่ครบทุก Type จะไม่แสดงชีท Alteration Type ดังกล่าว โดยระบบแสดงเฉพาะชีทที่มีข้อมูล เช่น หากใน Quarter Period ที่เลือก ไม่พบรายการสมาชิกลาออก (Termination) ระบบ ไม่ต้องสร้างชีท Terminate | ถ้ากรมธรม์ไม่มี ข้อมูลเคลม จะไม่แสดงไฟล์เคลม โดยระบบ generate เฉพาะไฟล์ที่มีข้อมูล |


===== PAGE 1313669139 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No > A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / Addition =====
- ระบบแสดง 1 sheet ต่อ 1 กรมธรรม์
- ระบบแสดง 1 บรรทัดต่อ 1 เลขที่สมาชิก
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 3rd Quarter 2024 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 16 July 2025 |
| Policyholder | ชื่อกรมธรรม์ | แสดงค่า Policy Name จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination |  | Ocean Life Insurance Public Company Limited |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครอง ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า POLICY No. จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเฉพาะรายการแรกสุด | GA2641 |
| Cert. No. | เลขสมาชิก | ดึงค่า Cert. No. จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination |  | 01600 |
| Name - Surname | ชื่อ และนามสกุลของสมาชิก | แสดงค่าว่าง |  |  |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 34 |
| Coverage Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง | ดึงค่า Coverage Period - Begin และ Coverage Period - End จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครองแสดงผลในรูปแบบ วัน/เดือน/ปี | 01/07/2024 - 01/01/2025 |
| Entrant Date | วันที่สมาชิกเริ่มเข้าเป็นผู้เอาประกันภายใต้กรมธรรม์ (วันที่เริ่มมีความคุ้มครองครั้งแรก) | ดึงค่า Entrant Date จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/07/2024 |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | ดึงค่า No. of Day จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 184 |
| SUM INSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM INSURED/1,000 MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 MURDER จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM INSURED/1,000 LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM REINSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| SUM REINSURED/1,000 MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 MURDER จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| SUM REINSURED/1,000 LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| REINSURANCE PREMIUM ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | ดึงค่า REINSURANCE PREMIUM ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 55.30 |
| REINSURANCE PREMIUM LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | ดึงค่า REINSURANCE PREMIUM LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 5.53 |
| REINSURANCE PREMIUM DISCOUNT | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | ดึงค่า REINSURANCE PREMIUM DISCOUNT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 18.25 |
| TOTAL - Cert. No. | จำนวนสมาชิกทั้งหมด | นับจำนวนจาก Cert. No. หน่วยเป็น persons | หน่วยเป็น persons | 36 persons |
| TOTAL - SUM INSURED/1,000 ACCIDENT | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 ACCIDENT | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 26,600 |
| TOTAL - SUM INSURED/1,000 MURDER | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 MURDER | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 26,600 |
| TOTAL - SUM INSURED/1,000 LOADINGS | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 LOADINGS | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 26,600 |
| TOTAL - SUM REINSURED/1,000 ACCIDENT | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 ACCIDENT | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 6,100 |
| TOTAL - SUM REINSURED/1,000 MURDER | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 MURDER | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 6,100 |
| TOTAL - SUM REINSURED/1,000 LOADINGS | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 LOADINGS | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 6,100 |
| TOTAL - REINSURANCE PREMIUM ACCIDENT | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | ยอดผลรวมของ REINSURANCE PREMIUM ACCIDENT | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 2,382.48 |
| TOTAL - REINSURANCE PREMIUM LOADINGS | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | ยอดผลรวมของ REINSURANCE PREMIUM LOADINGS | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 238.32 |
| TOTAL - REINSURANCE PREMIUM DISCOUNT | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | ยอดผลรวมของ REINSURANCE PREMIUM DISCOUNT | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 786.19 |


===== PAGE 1313669146 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No > A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / Termination =====
- ระบบแสดง 1 sheet ต่อ 1 กรมธรรม์
- ระบบแสดง 1 บรรทัดต่อ 1 เลขที่สมาชิก
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 3rd Quarter 2024 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 16 July 2025 |
| Policyholder | ชื่อกรมธรรม์ | แสดงค่า Policy Name จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination |  | Ocean Life Insurance Public Company Limited |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครอง ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า POLICY No. จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเฉพาะรายการแรกสุด | GA2641 |
| Cert. No. | เลขสมาชิก | ดึงค่า Cert. No. จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination |  | 01600 |
| Name - Surname | ชื่อ และนามสกุลของสมาชิก | แสดงค่าว่าง |  |  |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 34 |
| Coverage Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง | ดึงค่า Coverage Period - Begin และ Coverage Period - End จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครองแสดงผลในรูปแบบ วัน/เดือน/ปี | 01/07/2024 - 01/01/2025 |
| Withdrawal Date | วันที่สมาชิกลาออก | ดึงค่า Withdrawal Date จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/07/2024 |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | ดึงค่า No. of Day จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 184 |
| SUM INSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM INSURED/1,000 MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 MURDER จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM INSURED/1,000 LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ดึงค่า SUM INSURED/1,000 LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600 |
| SUM REINSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| SUM REINSURED/1,000 MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 MURDER จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| SUM REINSURED/1,000 LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ดึงค่า SUM REINSURED/1,000 LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 100 |
| REINSURANCE PREMIUM ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | ดึงค่า REINSURANCE PREMIUM ACCIDENT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 55.30 |
| REINSURANCE PREMIUM LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | ดึงค่า REINSURANCE PREMIUM LOADINGS จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 5.53 |
| REINSURANCE PREMIUM DISCOUNT | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | ดึงค่า REINSURANCE PREMIUM DISCOUNT จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 18.25 |
| TOTAL - Cert. No. | จำนวนสมาชิกทั้งหมด | นับจำนวนจาก Cert. No. หน่วยเป็น persons | หน่วยเป็น persons | 23 persons |
| TOTAL - SUM INSURED/1,000 ACCIDENT | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 ACCIDENT | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 18,500 |
| TOTAL - SUM INSURED/1,000 MURDER | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 MURDER | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 18,500 |
| TOTAL - SUM INSURED/1,000 LOADINGS | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | ยอดผลรวมของ SUM INSURED/1,000 LOADINGS | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 18,500 |
| TOTAL - SUM REINSURED/1,000 ACCIDENT | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 ACCIDENT | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 4,650 |
| TOTAL - SUM REINSURED/1,000 MURDER | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 MURDER | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 4,650 |
| TOTAL - SUM REINSURED/1,000 LOADINGS | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | ยอดผลรวมของ SUM REINSURED/1,000 LOADINGS | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 4,650 |
| TOTAL - REINSURANCE PREMIUM ACCIDENT | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | ยอดผลรวมของ REINSURANCE PREMIUM ACCIDENT | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 2,165.53 |
| TOTAL - REINSURANCE PREMIUM LOADINGS | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | ยอดผลรวมของ REINSURANCE PREMIUM LOADINGS | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 216.55 |
| TOTAL - REINSURANCE PREMIUM DISCOUNT | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | ยอดผลรวมของ REINSURANCE PREMIUM DISCOUNT | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 714.51 |


===== PAGE 1313669148 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No > A09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum Assured =====
- ระบบแสดง 1 sheet ต่อ 1 กรมธรรม์
- 1 รายสมาชิกจะต้องมี 3 แถวข้อมูล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการของแต่ละแถว จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 3rd Quarter 2024 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 16 July 2025 |
| Policyholder | ชื่อกรมธรรม์ | แสดงค่า Policy Name |  | Ocean Life Insurance Public Company Limited |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครอง ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า POLICY No. | แสดงเฉพาะรายการแรกสุด | GA2641 |
| Cert. No. | เลขสมาชิก | ดึงค่า Cert. No. | แสดงเฉพาะรายการแรกสุด | 01349 |
| Name - Surname | ชื่อ และนามสกุลของสมาชิก | แสดงค่าว่าง | แสดงเฉพาะรายการแรกสุด |  |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age | แสดงเฉพาะรายการแรกสุดแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 43 |
| Coverage Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง | ดึงค่า Coverage Period - Begin และ Coverage Period - End | แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครองแสดงผลในรูปแบบ วัน/เดือน/ปีแสดงเฉพาะรายการแรกสุด | 01/01/2024 - 01/01/2025 |
| Effective Date | วันที่มีผลบังคับสลักหลัง | ดึงค่า Effective Date | แสดงผลในรูปแบบ วัน/เดือน/ปีแสดงเฉพาะรายการแรกสุด | 01/08/2024 |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | ดึงค่า No. of Day | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แสดงเฉพาะรายการแรกสุด | 153 |
| SA / SR / RI Prem.(Before Change) ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| SA / SR / RI Prem.(After Change) ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| SA / SR / RI Prem.(After Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  | 2,000 |
| SA / SR / RI Prem.(After Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| SA / SR / RI Prem.(After Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| SA / SR / RI Prem.(Increased) ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| SA / SR / RI Prem.(Increased) MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  | 500 |
| SA / SR / RI Prem.(Increased) LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| SA / SR / RI Prem.(Increased) DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Increased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR Increased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - Cert. No. | จำนวนสมาชิกทั้งหมด | นับจำนวนจาก Cert. No. หน่วยเป็น persons | หน่วยเป็น persons | 3 persons |
| TOTAL - SA / SR / RI Prem.(Before Change) ACCIDENT | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) MURDER | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) LOADINGS | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) DISCOUNT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - SA / SR / RI Prem.(After Change) ACCIDENT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) MURDER | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) LOADINGS | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) DISCOUNT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - SA / SR / RI Prem.(Increased) ACCIDENT | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Increased) MURDER | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Increased) LOADINGS | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Increased) DISCOUNT | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |


===== PAGE 1313669150 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No > A09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured =====
- ระบบแสดง 1 sheet ต่อ 1 กรมธรรม์
- 1 รายสมาชิกจะต้องมี 3 แถวข้อมูล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการของแต่ละแถว จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 3rd Quarter 2024 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 16 July 2025 |
| Policyholder | ชื่อกรมธรรม์ | แสดงค่า Policy Name |  | Ocean Life Insurance Public Company Limited |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า POLICY No. | แสดงเฉพาะรายการแรกสุด | GA2641 |
| Cert. No. | เลขสมาชิก | ดึงค่า Cert. No. | แสดงเฉพาะรายการแรกสุด | 01349 |
| Name - Surname | ชื่อ และนามสกุลของสมาชิก | แสดงค่าว่าง | แสดงเฉพาะรายการแรกสุด |  |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age | แสดงเฉพาะรายการแรกสุดแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 43 |
| Coverage Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง | ดึงค่า Coverage Period - Begin และ Coverage Period - End | แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครองแสดงผลในรูปแบบ วัน/เดือน/ปีแสดงเฉพาะรายการแรกสุด | 01/01/2024 - 01/01/2025 |
| Effective Date | วันที่มีผลบังคับสลักหลัง | ดึงค่า Effective Date | แสดงผลในรูปแบบ วัน/เดือน/ปีแสดงเฉพาะรายการแรกสุด | 01/08/2024 |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | ดึงค่า No. of Day | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แสดงเฉพาะรายการแรกสุด | 153 |
| SA / SR / RI Prem.(Before Change) ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| SA / SR / RI Prem.(Before Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| SA / SR / RI Prem.(After Change) ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| SA / SR / RI Prem.(After Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  | 2,000 |
| SA / SR / RI Prem.(After Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| SA / SR / RI Prem.(After Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| SA / SR / RI Prem.(Decreased) ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Decreased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Decreased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Decreased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| SA / SR / RI Prem.(Decreased) MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Decreased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Decreased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Decreased MURDER กำหนดเป็นค่าว่าง |  | 500 |
| SA / SR / RI Prem.(Decreased) LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Decreased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ดึงค่า SR Decreased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ดึงค่า RI Prem. Decreased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| SA / SR / RI Prem.(Decreased) DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Decreased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR Decreased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. Decreased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - Cert. No. | จำนวนสมาชิกทั้งหมด | นับจำนวนจาก Cert. No. หน่วยเป็น persons | หน่วยเป็น person | 1 person |
| TOTAL - SA / SR / RI Prem.(Before Change) ACCIDENT | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) MURDER | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) LOADINGS | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 1,500 |
| TOTAL - SA / SR / RI Prem.(Before Change) DISCOUNT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - SA / SR / RI Prem.(After Change) ACCIDENT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) MURDER | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) LOADINGS | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 2,000 |
| TOTAL - SA / SR / RI Prem.(After Change) DISCOUNT | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |
| TOTAL - SA / SR / RI Prem.(Decreased) ACCIDENT | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Decreased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Decreased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Decreased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Decreased) MURDER | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Decreased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Decreased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Decreased MURDER กำหนดเป็นค่าว่าง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Decreased) LOADINGS | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Decreased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 2 ผลรวมค่า SR Decreased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวที่ 3 ผลรวมค่า RI Prem. Decreased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  | 500 |
| TOTAL - SA / SR / RI Prem.(Decreased) DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่ลดลงจากการเปลี่ยนแปลง | แถวที่ 1 ดึงค่า SA Decreased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 2 ดึงค่า SR Decreased DISCOUNT กำหนดเป็นค่าว่างแถวที่ 3 ดึงค่า RI Prem. Decreased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง |  |  |


===== PAGE 1313669153 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No > A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death =====
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| QQ Quarter YYYY | QQ Quarter YYYY จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actual | YYYY = Quarter YearQQ = Quarter Period |  | 4th Quarter 2019 |
| Date | แสดงวันที่ปัจจุบันที่ดึงรายงาน |  | แสดงในรูปแบบบ วัน เดือน ปี | 06 December 2024 |
| Policyholder | ชื่อกรมธรรม์ | แสดงค่า Policy Name จาก BD-AP-001-03-02-01 Alteration - Claim |  | Ocean Life Insurance Public Company Limited |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Class จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Type | ประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Type จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 1 |
| Policy No. | เลขกรมธรรม์ | แสดงจากค่า Policy No. จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงเฉพาะรายการแรกสุด | GA2387 |
| Cert. No. | เลขสมาชิก | แสดงจากค่า Cert. No. จาก BD-AP-001-03-02-01 Alteration - Claim |  | 00088 |
| Effective Date | วันที่เริ่มคุ้มครองปีปัจจุบัน | แสดงจากค่า Effective Date จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2019 |
| Expiry Date | วันที่สิ้นสุดความคุ้มครอง | แสดงจากค่า Expiry Date จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2020 |
| Deceased's Name | ชื่อ และนามสกุลของผู้เอาประกัน | แสดงค่าว่าง |  |  |
| Sex | เพศผู้เอาประกัน | แสดงจากค่า Sex จาก BD-AP-001-03-02-01 Alteration - Claim |  | F |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | แสดงจากค่า Age จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 39 |
| Event Date | วันที่เกิดเหตุ/วันที่เสียชีวิต | แสดงจากค่า Event Date จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 23/11/2019 |
| Cause | สาเหตุของการเคลม เช่น เสียชีวิต อุบัติเหตุ หรือสาเหตุอื่นตามเงื่อนไขกรมธรรม์ | แสดงจากค่า Cause จาก BD-AP-001-03-02-01 Alteration - Claim |  | Asphyxiation due to Accident |
| Claim Benefits | ทุนประกันตามความคุ้มครอง | แสดงจากค่า Claim Benefits จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600,000 |
| Approval Date | วันที่อนุมัติสินไหม | แสดงจากค่า Approval Date จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 25/11/2019 |
| Incurred Amount | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | แสดงจากค่า Incurred Amount จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 600,000.00 |
| Paid Amount Claim | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | แสดงจากค่า Paid Amount Claim จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 600,000.00 |
| Paid Amount Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย | แสดงจากค่า Paid Amount Investigation Expense จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share Claim | จำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer | แสดงจากค่า Reinsurer's Share Claim จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 100,000.00 |
| Reinsurer's Share Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer | แสดงจากค่า Reinsurer's Share Investigation Expense จาก BD-AP-001-03-02-01 Alteration - Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| TOTAL - Claim Benefits | ผลรวมทุนประกันตามความคุ้มครอง | ผลรวมของ Claim Benefits | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | 600,000 |
| TOTAL - Incurred Amount | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | ผลรวมของ Incurred Amount | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 600,000.00 |
| TOTAL - Paid Amount Claim | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | ผลรวมของ Paid Amount Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 600,000.00 |
| TOTAL - Paid Amount Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย | ผลรวมของ Paid Amount Investigation Expense | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| TOTAL - Reinsurer's Share Claim | ผลรวมจำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer | ผลรวมของ Reinsurer's Share Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 100,000.00 |
| TOTAL - Reinsurer's Share Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer | ผลรวมของ Reinsurer's Share Investigation Expense | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |


===== PAGE 1313669276 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQ =====
- ชื่อไฟล์ "Act_Thaire_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล เช่น Act_Thaire_2024Q2รูปแบบการแสดงข้อมูลระบบแสดง 1 บรรทัด ต่อ 1 กรมธรรม์ ต่อ 1 ปีกรมธรรม์ หัวข้อคำอธิบายเงื่อนไขการบันทึกรายการDisplay Ruleตัวอย่างPolicyNoเลขที่กรมธรรม์ใส่ Pol No จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA GH032RI Com.Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurerข้อมูล Commencement Date จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA 01/01/2017Renewal Dateวันที่เริ่มต้นสัญญาตามปีกรมธรรม์ ดึงข้อมูล Renewal Date จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA 01/01/2024Policy Yearปีกรมธรรม์ดึงค่า Pol yr. จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SAแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)8RI NB Premium Lifeเบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรกกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI NB Premium AD&Dเบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรกคำนวณผลรวมจาก Total -Total Premium ของปีกรมธรรม์ = 1 จาก A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy Noแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Renewal Premium Lifeเบี้ยประกันต่อ Life สำหรับปีต่ออายุกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Renewal Premium AD&Dเบี้ยประกันต่อ AD&D สำหรับปีต่ออายุคำนวณผลรวมจาก Total - Total Premium ของปีกรมธรรม์ > 1 จาก A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy Noแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Revival Premium Lifeเบี้ยปรับเพิ่ม Life (Movement)กำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Revival Premium AD&Dเบี้ยปรับเพิ่ม AD&D (Movement)คำนวณผลรวมจาก Total Premium จาก Round( TOTAL REINSURANCE PREMIUM ACCIDENT + TOTAL REINSURANCE PREMIUM LOADINGS - TOTAL REINSURANCE PREMIUM DISCOUNT , 2)A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / AdditionA09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum Assuredแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Refund Premium Lifeเบี้ยคืน Lifeกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Refund Premium AD&Dเบี้ยคืน AD&Dคำนวณผลรวมจาก Total Premium จากRound( TOTAL REINSURANCE PREMIUM ACCIDENT + TOTAL REINSURANCE PREMIUM LOADINGS - TOTAL REINSURANCE PREMIUM DISCOUNT , 2)A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / TerminationA09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assuredแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Commission Lifeค่าคอมมิชชั่นประกันต่อ Lifeกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Commission AD&Dค่าคอมมิชชั่นประกันต่อ AD&Dคำนวณ 3 steps ดังนี้step 1: คิด RI Commission AD&D ที่ได้รับ จากการคำนวณยอดผลรวมของ Commission จาก 3 ส่วนค่า Commission จาก BD-AP-001-03-01 Renewalค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน New Memberค่า Commission - Increased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SAstep 2: คิด RI Commission AD&D ที่จ่ายคืน จากการคำนวณยอดผลรวมของ Commission จาก 2 ส่วนค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน Terminationค่า Commission - Decreased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SAstep 3: คำนวณยอด RI Commission AD&D net = RI Commission AD&D ที่ได้รับ - RI Commission AD&D ที่จ่ายคืนแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Refund Commission Lifeค่า refund คอมมิชชั่นประกันต่อ Lifeกำหนดค่า 0 RI Refund Commission AD&Dค่า refund คอมมิชชั่นประกันต่อ AD&Dคำนวณผลรวม Commission จากA09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / TerminationA09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured RI Claim Paid Lifeค่าสินไหม Life ที่บริษัทจ่ายกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Claim Paid AD&Dค่าสินไหมกรณีสูญเสียอวัยวะคำนวณผลรวมจาก Reinsurer's Share Claim จากA09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Deathแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00RI Claim Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมายคำนวณผลรวมจาก Reinsurer's Share Investigation Expense จากA09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Deathแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00Claim Return Premiumเบี้ยประกันที่ต้องคืนเนื่องจากเหตุที่เกี่ยวข้องกับสินไหมกำหนดค่า 0แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00Claim Recovery Date กำหนดค่าว่าง Data Quarterไตรมาสของข้อมูลที่ใช้ในการประมวลผลรายงาน (เช่น 2024Q2)ตาม Quarter Period ที่ประมวลผลแสดงในรูปแบบ YYYYQQYYYY = ปีค.ศQQ = Quarter Period 2024Q2RI Periodงวดการประมวลผลสำหรับการส่งรายงานประกันต่อให้ Reinsurerแสดงค่าด้วยปีและเดือนของ Renewal Date 202401
- ระบบแสดง 1 บรรทัด ต่อ 1 กรมธรรม์ ต่อ 1 ปีกรมธรรม์
- ใส่ Pol No จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ข้อมูล Commencement Date จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ดึงข้อมูล Renewal Date จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ดึงค่า Pol yr. จาก BD-AP-001-03-01 Renewal, BD-AP-001-03-02-01 Alteration - Claim, BD-AP-001-03-02-02 Alteration - New Member และ Termination, BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Total -Total Premium ของปีกรมธรรม์ = 1 จาก A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Total - Total Premium ของปีกรมธรรม์ > 1 จาก A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Total Premium จาก Round( TOTAL REINSURANCE PREMIUM ACCIDENT + TOTAL REINSURANCE PREMIUM LOADINGS - TOTAL REINSURANCE PREMIUM DISCOUNT , 2)A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / AdditionA09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum Assured
- A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / Addition
- A09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum Assured
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Total Premium จากRound( TOTAL REINSURANCE PREMIUM ACCIDENT + TOTAL REINSURANCE PREMIUM LOADINGS - TOTAL REINSURANCE PREMIUM DISCOUNT , 2)A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / TerminationA09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured
- A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / Termination
- A09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณ 3 steps ดังนี้step 1: คิด RI Commission AD&D ที่ได้รับ จากการคำนวณยอดผลรวมของ Commission จาก 3 ส่วนค่า Commission จาก BD-AP-001-03-01 Renewalค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน New Memberค่า Commission - Increased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SAstep 2: คิด RI Commission AD&D ที่จ่ายคืน จากการคำนวณยอดผลรวมของ Commission จาก 2 ส่วนค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน Terminationค่า Commission - Decreased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SAstep 3: คำนวณยอด RI Commission AD&D net = RI Commission AD&D ที่ได้รับ - RI Commission AD&D ที่จ่ายคืน
- step 1: คิด RI Commission AD&D ที่ได้รับ จากการคำนวณยอดผลรวมของ Commission จาก 3 ส่วนค่า Commission จาก BD-AP-001-03-01 Renewalค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน New Memberค่า Commission - Increased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ค่า Commission จาก BD-AP-001-03-01 Renewalค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน New Memberค่า Commission - Increased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ค่า Commission จาก BD-AP-001-03-01 Renewal
- ค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน New Member
- ค่า Commission - Increased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- step 2: คิด RI Commission AD&D ที่จ่ายคืน จากการคำนวณยอดผลรวมของ Commission จาก 2 ส่วนค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน Terminationค่า Commission - Decreased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน Terminationค่า Commission - Decreased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- ค่า Commission จาก BD-AP-001-03-02-02 Alteration - New Member และ Termination ส่วน Termination
- ค่า Commission - Decreased จาก BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA
- step 3: คำนวณยอด RI Commission AD&D net = RI Commission AD&D ที่ได้รับ - RI Commission AD&D ที่จ่ายคืน
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / TerminationA09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured
- A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / Termination
- A09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Reinsurer's Share Claim จากA09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death
- A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- คำนวณผลรวมจาก Reinsurer's Share Investigation Expense จากA09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death
- A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่า 0
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- กำหนดค่าว่าง
- ตาม Quarter Period ที่ประมวลผล
- แสดงในรูปแบบ YYYYQQYYYY = ปีค.ศQQ = Quarter Period
- YYYY = ปีค.ศ
- QQ = Quarter Period
- แสดงค่าด้วยปีและเดือนของ Renewal Date


===== PAGE 1313898854 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-4 ตัวอย่าง output file - Thaire - Profit Commission =====
ระบบดึงข้อมูลจาก BD-AP-001-03-05 ประมวลผลออกรายงาน Profit Commission
| No. | ฟิลด์ | ความหมาย | เงื่อนไขการบันทึกข้อมูล | ตัวอย่าง |
| 0 | PROFIT COMMISSION FOR YEAR YYYY | ยอด Profit Commission สำหรับปี YYYY | YYYY แสดงค่าปี Quarter Year | PROFIT COMMISSION FOR YEAR 2024 |
| 0.1 | YYYY | ปี Quarter | YYYY แสดงค่าปี Quarter Year | 2024 |
|  | Income | หมวดรายได้ที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission |  |  |
| 1 | Reassurance premium net of cancellations and discount falling due during the year | เบี้ยประกันต่อสุทธิของปี หลังหักรายการยกเลิกกรมธรรม์และส่วนลดเบี้ยที่ถึงกำหนดในปีนั้น | แสดงค่าจาก (1) Reassurance premium net of cancellations and discount falling due during the year | 650,069.03 |
| 2 | Reserve for unearned premiums as at the beginning of the year | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ ต้นปี | แสดงค่าจาก (2) Reserve for unearned premiums as at the beginning of the year | 321,816.50 |
| 3 | Total (Income) | ผลรวมของรายได้ทั้งหมดในหมวด Income | แสดงค่าจาก (3) Total (Income) | 971,885.53 |
|  | Outgo | หมวดค่าใช้จ่ายและรายการหักที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission |  |  |
| 4 | Claims and legal expenses paid during the year | ค่าสินไหมและค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในระหว่างปี | แสดงค่าจาก (4) Claims and legal expenses paid during the year | 0.00 |
| 5 | Administrative expenses : Administrative expenses% of the reassurance premiums | ค่าใช้จ่ายในการบริหาร คิดเป็น Administrative expenses% ของเบี้ยประกันต่อ | แสดงค่าจาก (5) Administrative expenses : Administrative expenses% of the reassurance premiumsส่วน template การแสดงผล Administrative expenses : 10% of the reassurance premiumsการแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses% | 65,006.90 |
| 6 | Reserve for unearned premiums as at the end of the year = Reserve for unearned premiums% of the reassurance premiums | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ สิ้นปี คิดเป็น Reserve for unearned premiums% ของเบี้ยประกันต่อ | แสดงค่าจาก (6) Reserve for unearned premiums as at the end of the year = Reserve for unearned premiums% of the reassurance premiumsส่วน template การแสดงผล Reserve for unearned premiums as at the end of the year = 50% of the reassurance premiumsการแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums% | 325,034.52 |
| 7 | Reserve for claims, if any, as at the end of the year | เงินสำรองค่าสินไหม ณ สิ้นปี (ถ้ามี) | แสดงค่าจาก (7) Reserve for claims, if any, as at the end of the year | 0.00 |
| 8 | Commissions, if any, due during the year | ค่าคอมมิชชั่นที่ถึงกำหนดจ่ายในระหว่างปี (ถ้ามี) | แสดงค่าจาก (8) Commissions, if any, due during the year | 162,523.62 |
| 9 | Any loss carried forward from the previous profit commission statement | ยอดขาดทุนสะสมที่ยกมาจากรอบ Profit Commission ก่อนหน้า | แสดงค่าจาก (9) Any loss carried forward from the previous profit commission statement | 0 |
| 10 | Total (Outgo) | ผลรวมของค่าใช้จ่ายและรายการหักทั้งหมดในหมวด Outgo | แสดงค่าจาก (10) Total (Outgo) | 552,565.04 |
| 11 | Profit for Year YYYY | กำไรสุทธิของปี Quarter Year หลังหักรายจ่ายและเงินสำรองทั้งหมดแล้ว | แสดงค่าจาก (11) Profit for Year YYYYส่วน template การแสดงผล Profit for Year YYYYการแสดงค่า YYYY ให้ดึงค่าจาก Quarter Yearตัวอย่าง Profit for Year 2024 | 419,320.49 |
| 12 | Total profit commission for year YYYY | ยอด Profit Commission ทั้งหมดที่ต้องจ่ายให้คู่สัญญาสำหรับปี YYYY | แสดงค่าจาก (12) Total profit commission for year YYYYส่วน template การแสดงผล Total profit commission for year YYYYการแสดงค่า YYYY ให้ดึงค่าจาก Quarter Yearตัวอย่าง Total profit commission for year 2024 | 209,660.25 |
| 13 | Profit Commission Rate | Profit Commission Rate | แสดงค่าจาก (13) Profit Commission Rate | 50% |


===== PAGE 1313898570 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-13 ตัวอย่าง output file - Actual Thaire Group PA > A09-12-5 ตัวอย่าง output file - SOA - SOA_Act_Thaire_YYYYQQ =====
#### รายละเอียด
- ระบบจะออกรายงาน 1 ไฟล์ SOA ตาม Quarter Period
- รูปแบบการตั้งชื่อไฟล์ SOAชื่อไฟล์ "SOA_Act_Thaire_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล Quarter Period เช่น SOA_Act_Thaire_2024Q1
- ชื่อไฟล์ "SOA_Act_Thaire_YYYYQQ" โดย YYYYQQ คือ รอบประมวลผล Quarter Period เช่น SOA_Act_Thaire_2024Q1
- เป็นข้อมูล output ในรูปแบบ excel file ที่ได้จากการประมวลผลออกไฟล์ EDW BD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA เพื่อใช้เป็นเอกสารสรุปบัญชีระหว่างบริษัทประกันกับ Reinsurerใช้แสดงยอดที่ต้อง ชำระ / รับคืน ในแต่ละงวด ตามสัญญาประกันภัยต่อ
- ขอบเขตข้อมูลที่ใช้ระบบใช้ข้อมูลจาก ไฟล์นำเข้า EDW A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQเบี้ยประกันภัยของ Thaire จะพิจารณาเฉพาะความคุ้มครองในส่วน Accident Death (AD&D) เท่านั้นไม่รวมความคุ้มครองประเภทอื่น
- ระบบใช้ข้อมูลจาก ไฟล์นำเข้า EDW A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQ
- เบี้ยประกันภัยของ Thaire จะพิจารณาเฉพาะความคุ้มครองในส่วน Accident Death (AD&D) เท่านั้น
- ไม่รวมความคุ้มครองประเภทอื่น
| No | ส่วนการแสดงผล | ฟิลด์ | คำอธิบาย | ตัวอย่าง |
| 1 | ส่วน Header | Statement Account for Quarter, Year | Quarter, Year จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actualเช่น Quarter 2024Q3 จะต้องแสดงว่าStatement Account for 3rd Quarter, 2024 | Statement Account for 3rd Quarter, 2024 |
| 2 | ส่วน Header | No. YYYY.QQ | YYYY.QQ จะเปลี่ยนไปตาม Quarter Period ที่ทำรายงาน Actualเช่น Quarter 2024Q3 จะต้องแสดงว่า 2024.Q3 | 2024.Q3 |
| 3 | ส่วน Header | Date: | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 19-Dec-2025 |
| 4 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Reinsurance Premium | ระบบแสดงผลรวมเบี้ยจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้New Business: แสดงผลรวมเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวม RI NB Premium AD&DTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Business (1 st yr.): แสดงค่าเป็น 0Renewal Business (Renewal): แสดงผลรวมเบี้ยปีต่อ โดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 5 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Commission | ระบบแสดงผลรวมคอมมิชชั่นจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวม RI Commission AD&D ส่วนที่ 1 (ส่วนที่ได้จากบริษัทประกันภัยต่อ)TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 6 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Premium Refunds | ระบบแสดงผลรวมเงินคืนเบี้ยจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเงินคืนเบี้ยปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวม RI Refund Premium AD&DTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมเงินคืนเบี้ยปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 01 st yr. Claim: แสดงผลรวมเงินคืนสินไหมปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Claim: แสดงผลรวมเงินคืนสินไหมปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 7 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Commission Refunds | ระบบแสดงผลรวมเงินคืนคอมมิชชั่นจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเงินคืนคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวมของ RI Commission AD&D ส่วนที่ 2 (ส่วนที่จ่ายคืนให้บริษัทประกันภัยต่อ)แสดง 0 อ้างอิงเอกสาาร SRS นำสูตรออกแล้ว A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 01 st yr. Claim: แสดงผลรวมเงินคืนคอมมิชชั่นปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal Claim: แสดงผลรวมเงินคืนคอมมิชชั่นปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 8 | ฝั่ง DUE FROM REINSURER (Dr.) | ส่วน Claim | ส่วน Claim ใน SOA จะแบ่งเป็น 3 ช่วงหลัก ๆ คือ1st yr. (เคลมของกรมธรรม์ปีแรก / New Business)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิต แสดงค่าเป็น 0AD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวมของ RI Claim Paid AD&DTPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal (เคลมของกรมธรรม์ต่ออายุ)แต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE : เคลมกรณีเสียชีวิต แสดงค่าเป็น 0AD&D : เคลมอุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD : เคลมทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD : เคลมทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL : เคลมค่ารักษาพยาบาล แสดงค่าเป็น 0Claim Expenses (ค่าใช้จ่ายที่เกี่ยวข้องกับการจัดการเคลม)INVESTIGATION FEE : ค่าตรวจสอบ / สืบสวนเคลมใช้ค่าผลรวมของ RI Claim Investigation & Legal ExpenseLEGAL FEE : ค่ากฎหมาย แสดงค่าเป็น 0MEDICAL EVIDENCE : ค่าขอเอกสารทางการแพทย์ แสดงค่าเป็น 0 | 89,084.53 |
| 9 | ฝั่ง DUE TO REINSURER (Cr.) | ส่วน Revival Premium | ระบบแสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มจากการประมวลผล Actual ตามรอบประมวลผล โดยแบ่งเป็นส่วนข้อมูลเบี้ย ดังนี้1 st yr.: แสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มปีแรกโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุใช้ค่าผลรวมจาก RI Revivals Premium AD&DTPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0Renewal: แสดงผลรวมเบี้ยที่ต้องเรียกเก็บเพิ่มปีต่อโดยแต่ละช่วงจะแยกยอดตาม ประเภทความคุ้มครอง (Benefit Type)LIFE :กรณีเสียชีวิต แสดงค่าเป็น 0AD&D :อุบัติเหตุ / ทุพพลภาพจากอุบัติเหตุ แสดงค่าเป็น 0TPD :ทุพพลภาพถาวรสิ้นเชิง แสดงค่าเป็น 0TTD :ทุพพลภาพชั่วคราว แสดงค่าเป็น 0MEDICAL :ค่ารักษาพยาบาล แสดงค่าเป็น 0 | - |
| 10 | ฝั่ง DUE FROM REINSURER (Dr.) | Admin. Commission (Remittance) :Experience Refund Share :Profit Commission : | Admin. Commission (Remittance) : แสดงค่าเป็น 0Experience Refund Share : แสดงค่าเป็น 0Profit Commission :จะมีค่าเฉพาะ Actual Quarter 4สำหรับ Quarter อื่น ให้ออก 0ใช้ค่าจาก Total profit commission for year YYYY จาก BD-AP-001-03-05 ประมวลผลออกรายงาน Profit Commission | - |
| 11 | ฝั่ง DUE TO REINSURER (Cr.) | sub totalDUE TO REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE TO REINSURER (Cr.)DUE TO REINSURER คือ ยอดสุทธิที่บริษัทต้องจ่ายให้ Reinsurerคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer < Sub total ฝั่ง Due To Reinsurer)DUE TO REINSURER = Sub total ฝั่ง Due To Reinsurer − Sub total ฝั่ง Due From Reinsurerไม่เช่นนั้น = 0 | - |
| 12 | ฝั่ง DUE FROM REINSURER (Dr.) | sub totalDUE FROM REINSURER | sub total คือ ผลรวมของรายการทั้งหมดในฝั่ง DUE FROM REINSURER (Dr.)DUE FROM REINSURER คือ ยอดสุทธิที่ Reinsurer ต้องจ่ายให้บริษัทคำนวณจากการเอา Sub total สองฝั่งมาตัดกันถ้า (Sub total ฝั่ง Due From Reinsurer > Sub total ฝั่ง Due To Reinsurer)DUE FROM REINSURER = Sub total ฝั่ง Due From Reinsurer − Sub total ฝั่ง Due To Reinsurerไม่เช่นนั้น = 0 | 89,084.53 |
Like


===== PAGE 1313899300 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-14 ตัวอย่าง output file - Actual Dai-ichi =====
(empty page)


===== PAGE 1313899349 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-14 ตัวอย่าง output file - Actual Dai-ichi > A09-14-1 ตัวอย่าง output file - BDR - DT Claim =====
- รูปแบบการแสดงผล 1 บรรทัดต่อ 1 ต่อ 1 กรมธรรม์, Effective Date, เลขที่สมาชิก, เลขที่สินไหมกรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- กรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- ให้รวมเป็นบรรทัดเดียวกัน
- โดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| Date | วันที่ออกรายงาน | แสดงวันที่ออกรายงาน | แสดงผลในรูปแบบ วัน/เดือน/ปี | 26/06/2024 |
| No. DC. | ลำดับรายการในรายงาน | ระบบต้องกำหนดลำดับหมายเลขลำดับแยกตาม Quarter โดยเริ่มต้นที่หมายเลข 1 ในทุก Quarter และเรียงลำดับเพิ่มขึ้นตามจำนวนกรมธรรม์ที่อยู่ใน Quarter นั้น โดยไม่ต่อเนื่องจาก Quarter ก่อนหน้าตัวอย่างใน Quarter 2025Q1 มี 10 กธ. ระบบจะกำหนดหมายเลขเป็น 1–10และเมื่อเข้าสู่ Quarter 2025Q2 หากมี 5 กธ. ระบบจะกำหนดหมายเลขเป็น 1–5 | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| Pol.No. | เลขกรมธรรม์ | ดึงค่า Pol.No. จาก BD-AP-001-01-01 Claim |  | GH3977 |
| RI No. | เลขอ้างอิงการส่งประกันต่อ | ดึงค่า RI No. จาก BD-AP-001-01-01 Claim |  | DG246 |
| Name | ชื่อกรมธรรม์ | ดึงค่า PolicyName จาก BD-AP-001-01-01 Claim |  | NTN MANUFACTURING (THAILAND) CO.,LTD. AND AFFILIATES |
| Beginning | วันที่เริ่มต้นความคุ้มครอง | ดึงค่า Effective Date จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/08/2022 |
| End | วันที่สิ้นสุดความคุ้มครอง | ดึงค่า EndDate จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 31/07/2023 |
| No. | ลำดับสมาชิกที่ Claim ของแต่ละ Pol No | แสดงลำดับของเลขสมาชิกภายใต้กรมธรรม์ในรายงาน | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| Cession No. | หมายเลขสมาชิก (CertNo) | ดึงค่า Cession No. จาก BD-AP-001-01-01 Claim |  | 03156 |
| Effective Date | วันที่เริ่มสัญญาครั้งแรก | ดึงค่า Commencement Date จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 15/06/2020 |
| Deceased's Name | ชื่อผู้เอาประกัน | แสดงค่าว่าง | แสดงค่าว่าง |  |
| Date of Birth | วันเกิดผู้เอาประกัน | แสดงค่าว่าง | แสดงค่าว่าง |  |
| Age | อายุผู้เอาประกัน | ดึงค่า Age จาก BD-AP-001-01-01 Claim | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 25 |
| Date of Death | วันที่เสียชีวิต | ดึงค่า EventDate จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 29/07/2023 |
| Cause of Death | สาเหตุการเสียชีวิต | ดึงค่า Cause จาก BD-AP-001-01-01 Claim |  | Motorcycle Accident |
| Original Sum Insured Life | ทุนประกันชีวิตของสมาชิก | ดึงค่า Claim Benefits จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Life | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 20,000 |
| Original Sum Insured Accident | ทุนประกันอุบัติเหตุของสมาชิก | ดึงค่า Claim Benefits จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Accident Death | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 100,000 |
| Payment Date | วันที่พิจารณาสินไหมวันที่จ่ายเงิน | ดึงค่า Payment Date จาก BD-AP-001-01-01 Claimถ้ามี Payment Date คนละวัน ให้ใช้ Payment Date ล่าสุด | แสดงผลในรูปแบบ วัน/เดือน/ปี | 18/01/2024 |
| Amount Paid By Insurer Life | จำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย | ดึงค่า Claim Amount จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 20,000.00 |
| Amount Paid By Insurer Accident | จำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย | ดึงค่า Claim Amount จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Accident Death | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 100,000.00 |
| Reinsurer's Share Life | จำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Life จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 10,000.00 |
| Reinsurer's Share Accident | จำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share: Accident จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Accident Death | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 50,000.00 |
| TOTAL - Original Sum Insured Life | ผลรวมทุนประกันชีวิตของสมาชิก | ผลรวมจำนวนทุนประกันชีวิตของสมาชิกในตารางข้อมูลทั้งหมด | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 420,000 |
| TOTAL - Original Sum Insured Accident | ผลรวมทุนประกันอุบัติเหตุของสมาชิก | ผลรวมจำนวนทุนประกันอุบัติเหตุของสมาชิกในตารางข้อมูลทั้งหมด | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 850,000 |
| TOTAL - Amount Paid By Insurer Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย | ผลรวมผลรวมจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่ายในตารางข้อมูลทั้งหมด | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 420,000.00 |
| TOTAL - Amount Paid By Insurer Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่ายในตารางข้อมูลทั้งหมด | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 300,000.00 |
| TOTAL - Reinsurer's Share Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ผลรวมจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อในตารางข้อมูลทั้งหมด | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 210,000.00 |
| TOTAL - Reinsurer's Share Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อในตารางข้อมูลทั้งหมด | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 150,000.00 |


===== PAGE 1313899364 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-14 ตัวอย่าง output file - Actual Dai-ichi > A09-14-2 ตัวอย่าง output file - BDR - Med.Acc. =====
- รูปแบบการแสดงผล 1 บรรทัดต่อ 1 กรมธรรม์, Effective Date
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ ดึงข้อมูลจาก | Display Rule | ตัวอย่าง |
| Date | วันที่ออกรายงาน | แสดงวันที่ออกรายงาน | แสดงผลในรูปแบบ วัน/เดือน/ปี | 26/06/2024 |
| No. | ลำดับรายการในรายงาน | แสดงลำดับในรายงาน | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| Policy No. | เลขกรมธรรม์ | ดึงค่า Pol.No. จาก BD-AP-001-01-01 Claim |  | GH4433 |
| Reinsurance No. | เลขอ้างอิงการส่งประกันต่อ | ดึงค่า RI No. จาก BD-AP-001-01-01 Claim |  | DG013 |
| Policy Name | ชื่อกรมธรรม์ | ดึงค่า PolicyName จาก BD-AP-001-01-01 Claim |  | E C F PRECISION (THAILAND) CO.,LTD. |
| Period | ใส่ Effective Date ถึงวันสุดท้ายที่คุ้มครองของ Effective Date นั้นโดยใช้ Format Month DD, YYYY - Month DD, YYYY | ดึงค่า Effective Date, End Date จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ เดือน วัน, ปี | July 23, 2023 - July 22, 2024 |
| Frequency | รวมจำนวน Claim Type MedAccident ทั้งหมดของ PolicyNo และ Effective Date เดียวกัน | รวมจำนวนของ Claim Type MedAccident ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Period | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| Amount (Baht) | รวม Claim Amount Type MedAccident ทั้งหมดของ PolicyNo และ Effective Date เดียวกัน | รวมยอดสินไหม Claim Amount ของ Claim Type MedAccident ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Period | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 1,310.00 |
| TOTAL - Policy Name | ผลรวมจำนวนกรมธรรม์ทั้งหมด | รวมจำนวนกรมธรรม์ โดยนับแยกตามวันที่เริ่มความคุ้มครองด้วย เช่น หากกรมธรรม์มี 2 ปีกรมธรรม์ หรือ 2 period ความคุ้มครองให้นับเป็น 2 | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 16 Policies |
| TOTAL - Amount (Baht) | ผลรวมจำนวนเงินสินไหมทั้งหมด | รวมยอดสินไหม Claim Amount ของ Claim Type MedAccident ทั้งหมดภายใต้ Quarter Period ในตารางข้อมูลทั้งหมด | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 412,902.05 |


===== PAGE 1313899575 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-14 ตัวอย่าง output file - Actual Dai-ichi > A09-14-3 ตัวอย่าง output file - BDR - MedClaim =====
- รูปแบบการออกรายงานข้อมูลใน 1 sheet จะรวมทุกกรมธรรม์ โดยแสดงแยกตารางของแต่ละกรมธรรม์ และ Effective Date1 ตารางจะแสดง 3 แถวแยกแถวตาม Quarter Month ด้วยเงื่อนไขวันที่พิจารณาสินไหมตัวอย่าง Quarter2024Q2แถวที่ 1 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน April, 2024แถวที่ 2 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน May, 2024แถวที่ 3 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน June, 2024
- ข้อมูลใน 1 sheet จะรวมทุกกรมธรรม์ โดยแสดงแยกตารางของแต่ละกรมธรรม์ และ Effective Date
- 1 ตารางจะแสดง 3 แถวแยกแถวตาม Quarter Month ด้วยเงื่อนไขวันที่พิจารณาสินไหมตัวอย่าง Quarter2024Q2แถวที่ 1 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน April, 2024แถวที่ 2 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน May, 2024แถวที่ 3 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน June, 2024
- ตัวอย่าง Quarter2024Q2แถวที่ 1 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน April, 2024แถวที่ 2 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน May, 2024แถวที่ 3 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน June, 2024
- แถวที่ 1 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน April, 2024
- แถวที่ 2 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน May, 2024
- แถวที่ 3 คือกลุ่มข้อมูลสินไหมที่อนุมัติในเดือน June, 2024
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ ดึงข้อมูลจาก | Display Rule | ตัวอย่าง |
| Date | วันที่ออกรายงาน | แสดงวันที่ออกรายงาน | แสดงผลในรูปแบบ วัน/เดือน/ปี | 26/06/2024 |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | ดึงค่า Commencement Date จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ เดือน วัน, ปี | July 23, 2017 |
| Policy Name | ชื่อกรมธรรม์ | ดึงค่า PolicyName จาก BD-AP-001-01-01 Claim |  | E C F PRECISION (THAILAND) CO.,LTD. |
| Original Policy No. | เลขกรมธรรม์ | ดึงค่า Pol.No. จาก BD-AP-001-01-01 Claim |  | GH4433 |
| Policy Year | ปีกรมธรรม์ | ดึงค่า Policy Year จาก BD-AP-001-01-01 Claim | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 7 |
| Period | Effective Date ถึงวันสุดท้ายที่คุ้มครองของ Effective Date นั้น | ดึงค่า Effective Date, End Date จาก BD-AP-001-01-01 Claim | Month DD, YYYY - Month DD, YYYY | July 23, 2023 - July 22, 2024 |
| Reinsurance No. | เลขอ้างอิงการส่งประกันต่อ | ดึงค่า RI No. จาก BD-AP-001-01-01 Claim |  | DG013 |
| Month | เดือนจาก Quarter Month | แสดง Quarter Month | แสดงผลในรูปแบบ เดือน, ปี | April, 2024 |
| OPD Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยนอก (OPD) ในเดือนนั้น ๆ | รวมจำนวนของ Claim Type OPD ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 0 |
| OPD Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยนอก (OPD) รวมทั้งหมด ในเดือนนั้น ๆ หน่วยเป็นบาท | รวมยอดเงินสินไหมของ Claim Type OPD ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| IPD Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยใน (IPD)ในเดือนนั้น ๆ | รวมจำนวนของ Claim Type IPD ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| IPD Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยใน (IPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท | รวมยอดเงินสินไหมของ Claim Type IPD ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 13,000.00 |
| DENTAL Frequency | จำนวนครั้งของสินไหมค่าทันตกรรม (Dental)ในเดือนนั้น ๆ | รวมจำนวนของ Claim Type Dental ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 0 |
| DENTAL Amount (Baht) | ยอดเงินสินไหมค่าทันตกรรม (Dental) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท | รวมยอดเงินสินไหมของ Claim Type Dental ทั้งหมดของ PolicyNo และ Effective Date เดียวกันภายใต้ Quarter Periodโดยแบ่งตาม Quarter Month หรือเดือนที่อนุมัติสินไหม | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| TOTAL Frequency | จำนวนครั้งของสินไหม(OPD + IPD + Dental) ในเดือนนั้น ๆ | จำนวนครั้งของสินไหม(OPD + IPD + Dental) | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| TOTAL Amount (Baht) | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) ในเดือนนั้น ๆ หน่วยเป็นบาท | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 13,000.00 |
| Grand Total - Frequency | จำนวนครั้งของสินไหมตามประเภทความคุ้มครองของ Quarter ภายใต้กรมธรรม์ และวันเริ่มคุ้มครองเดียวกัน | จำนวนครั้งของสินไหมตามประเภทความคุ้มครองในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 1 |
| Grand Total - TOTAL Amount (Baht) | ยอดเงินสินไหมรวมทั้งหมดตามประเภทความคุ้มครอง ของ Quarter ภายใต้กรมธรรม์ และวันเริ่มคุ้มครองเดียวกัน หน่วยเป็นบาท | ยอดเงินสินไหมรวมทั้งหมดตามประเภทความคุ้มครอง ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 13,000.00 |


===== PAGE 1313899584 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > A09-14 ตัวอย่าง output file - Actual Dai-ichi > A09-14-4 ตัวอย่าง output file - BDR - Dismemberment Claim =====
- รูปแบบการออกรายงานข้อมูลใน 1 sheet จะรวมทุกกรมธรรม์ โดยแสดงแยกตารางของแต่ละกรมธรรม์1 บรรทัดจะแสดงต่อ 1 กรมธรรม์, Effective Date, เลขที่สมาชิก, เลขที่สินไหมกรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- ข้อมูลใน 1 sheet จะรวมทุกกรมธรรม์ โดยแสดงแยกตารางของแต่ละกรมธรรม์
- 1 บรรทัดจะแสดงต่อ 1 กรมธรรม์, Effective Date, เลขที่สมาชิก, เลขที่สินไหมกรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- กรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- ให้รวมเป็นบรรทัดเดียวกัน
- โดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
| หัวข้อ | ความหมาย |  |  | ตัวอย่าง |
| No. DMC | ลำดับ Dismemberment Claim | ระบบต้องกำหนดลำดับหมายเลขลำดับแยกตาม Quarter โดยเริ่มต้นที่หมายเลข 1 ในทุก Quarter และเรียงลำดับเพิ่มขึ้นตามจำนวนกรมธรรม์ที่อยู่ใน Quarter นั้น โดยไม่ต่อเนื่องจาก Quarter ก่อนหน้าตัวอย่างใน Quarter 2025Q1 มี 10 Cases ระบบจะกำหนดหมายเลขเป็น 1–10และเมื่อเข้าสู่ Quarter 2025Q2 หากมี 5 Cases ระบบจะกำหนดหมายเลขเป็น 1–5 |  | No. DMC. 1 |
| Date | วันที่ออกรายงาน | แสดงวันที่ออกรายงาน | แสดงผลในรูปแบบ วัน/เดือน/ปี | 26/06/2024 |
| Pol. No. | เลขที่กรมธรรม์ | ดึงค่า Pol.No. จาก BD-AP-001-01-01 Claim |  | GH2001 |
| RI No. | เลขอ้างอิงการส่งประกันต่อ | ดึงค่า RI No. จาก BD-AP-001-01-01 Claim |  | DG082 |
| Name | ชื่อกรมธรรม์ | ดึงค่า PolicyName จาก BD-AP-001-01-01 Claim |  | ZEON CHEMICALS (THAILAND) CO.,LTD. |
| For the period From | Effective Date ถึงวันสุดท้ายที่คุ้มครองของ Effective Date นั้น | ดึงค่า Effective Date, End Date จาก BD-AP-001-01-01 Claim | Format Month DD, YYYY - Month DD, YYYY | For the period From July 1, 2023 - June 30, 2024 |
| No. | ลำดับรายการในรายงาน | แสดงลำดับในรายงาน |  | 1 |
| Cession No. | หมายเลขสมาชิก (CertNo) | ดึงค่า Cession No. จาก BD-AP-001-01-01 Claim |  | 00447 |
| Effective Date | วันที่เริ่มต้นความคุ้มครอง | ดึงค่า Commencement Date จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 02/12/2020 |
| Claimant's Name | ชื่อ นามสกุลผู้เอาประกัน | แสดงค่าว่าง |  |  |
| Date of Birth | วันเกิดผู้เอาประกัน | แสดงค่าว่าง |  |  |
| Age | อายุผู้เอาประกัน | ดึงค่า Age จาก BD-AP-001-01-01 Claim | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 25 |
| Event Date | วันที่เกิดเหตุ | ดึงค่า EventDate จาก BD-AP-001-01-01 Claim | แสดงผลในรูปแบบ วัน/เดือน/ปี | 17/07/2023 |
| Cause of Dismemberment / Result | สาเหตุการเคลม | ดึงค่า Cause จาก BD-AP-001-01-01 Claim |  | Loss of the left eye due to motorcycle accident. |
| Original SA Dismemberment | ทุนตามความคุ้มครอง Dismemberment | ดึงค่า Claim Benefits จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Dismemberment | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 200,000 |
| Original SA TPD | ทุนตามความคุ้มครอง TPD | ดึงค่า Claim Benefits จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น TPD | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 200,000 |
| Payment Date | วันที่พิจารณาสินไหมวันที่จ่ายเงิน | ดึงค่า Payment Date จาก BD-AP-001-01-01 Claimถ้ามี Payment Date คนละวัน ให้ใช้ Payment Date ล่าสุด | แสดงผลในรูปแบบ วัน/เดือน/ปี | 25/10/2023 |
| Amount Paid By Insurer Dismemberment | จำนวนเงินสินไหม Dismemberment ที่บริษัทอนุมัติจ่าย | ดึงค่า Claim Amount จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น Dismemberment | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 120,000.00 |
| Amount Paid By Insurer TPD | จำนวนเงินสินไหม TPD ที่บริษัทอนุมัติจ่าย | ดึงค่า Claim Amount จาก BD-AP-001-01-01 Claim หากมี ClaimType เป็น TPD | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Reinsurer's Share Dismemberment | จำนวนเงินสินไหม Dismemberment ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share Dismemberment จาก BD-AP-001-01-01 Claim จาก Step 5 | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 60,000.00 |
| Reinsurer's Share TPD | จำนวนเงินสินไหม TPD ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ดึงค่า Reinsurer's Share TPD จาก BD-AP-001-01-01 Claim จาก Step 5 | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| TOTAL - Original SA Dismemberment | ผลรวมทุนตามความคุ้มครอง Dismemberment | ผลรวมทุนตามความคุ้มครอง Dismemberment ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 200,000 |
| TOTAL - Original SA TPD | ผลรวมทุนตามความคุ้มครอง TPD | ผลรวมทุนตามความคุ้มครอง TPD ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยจำนวนเต็ม ไม่มีทศนิยม | 200,000 |
| TOTAL - Amount Paid By Insurer Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่บริษัทอนุมัติจ่าย | ผลรวมจำนวนเงินสินไหม Dismemberment ที่บริษัทอนุมัติจ่าย ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 120,000.00 |
| TOTAL - Amount Paid By Insurer TPD | ผลรวมจำนวนเงินสินไหม TPD ที่บริษัทอนุมัติจ่าย | ผลรวมจำนวนเงินสินไหม TPD ที่บริษัทอนุมัติจ่าย ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| TOTAL - Reinsurer's Share Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ผลรวมจำนวนเงินสินไหม Dismemberment ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 60,000.00 |
| TOTAL - Reinsurer's Share TPD | ผลรวมจำนวนเงินสินไหม TPD ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ | ผลรวมจำนวนเงินสินไหม TPD ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ ในตารางข้อมูลของกรมธรรม์ และวันเริ่มคุ้มครองนั้นๆ | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |


===== PAGE 1313439775 | Functional Specification > 09. Appendix > A09. สรุปการ Export Excel และการแสดงผลผ่านหน้าจอ > s =====
(empty page)


===== PAGE 1319601478 | Functional Specification > 09. Appendix > A10. เก็บข้อมูล Export File =====
| No. | tx_rig_path_key | ข้อมูล |
| 1 | rig_path_key_id | running no. |
| 2 | report_type | ตรวจสอบ Report Type จากกาารสร้างไฟล์ตาม Template ข้างต้น |
| 3 | rig_hd_id | tx_rig_est_hd.rig_est_hd_idtx_rig_act_hd.rig_act_hd_id |
| 4 | path_key | เส้นทางไฟล์ |
| 5 | file_name | tx_rig_est_hd.treaty_codetx_rig_act_hd.treaty_code |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | SYSTEM |
| No. | tx_rig_path_file | ข้อมูล |
| 1 | path_key | เส้นทางไฟล์ |
| 2 | directory | โครงสร้างจัดระเบียบไฟล์และโฟลเดอร์แบบลำดับชั้น |
| 3 | description | รายละเอียด |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1322353339 | Functional Specification > 09. Appendix > A11. Report oder =====
| การเรียงลำดับข้อมูล |
| Group By1. รายการที่มีเฉพาะเบี้ย และ รายการที่มีทั้งเบี้ยและเคลมรายการเหล่านี้มีค่า ไม่เป็น 0 tx_rig_est_bdr.ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_med, ri_prem_1st_tot, ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tpd, ri_prem_renew_med, ri_prem_renew_tot2. รายการที่มีเฉพาะเคลมรายการเหล่านี้ไม่มีค่าหรือเป็น 0 tx_rig_est_bdr.ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_med, ri_prem_1st_tot, ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tpd, ri_prem_renew_med, ri_prem_renew_totOrder by เลขกรมธรรม์ (policy_no) จากน้อยไปมาก (ASC)กรณี policy_no เดียวกัน ให้เรียงตามปีกรมธรรม์ (policy_year) จากน้อยไปมาก (ASC) |


===== PAGE 1324155492 | Functional Specification > 09. Appendix > A12. Report oder Actual EDW =====
| การเรียงลำดับข้อมูล |
| Group By1. รายการที่มีเฉพาะเบี้ย และ รายการที่มีทั้งเบี้ยและเคลมรายการเหล่านี้มีค่า ไม่เป็น 0 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life, tot_re_nb_prem_add, tot_re_ren_prem_life, tot_re_ren_prem_add, tot_re_rev_prem_life, tot_re_rev_prem_add, tot_re_refund_prem_add2. รายการที่มีเฉพาะเคลมรายการเหล่านี้ไม่มีค่าหรือเป็น 0 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life, tot_re_nb_prem_add, tot_re_ren_prem_life, tot_re_ren_prem_add, tot_re_rev_prem_life, tot_re_rev_prem_add, tot_re_refund_prem_addOrder by เลขกรมธรรม์ (policy_no) จากน้อยไปมาก (ASC)กรณี policy_no เดียวกัน ให้เรียงตามปีกรมธรรม์ (policy_year) จากน้อยไปมาก (ASC) |


===== PAGE 1329627929 | Functional Specification > 09. Appendix > A13. การแยกสินไหมตามความคุ้มครองของข้อมูล Experience Refund =====
| ประเภทความคุ้มครอง | ประเภทสินไหม |
| Life | สินไหมชีวิต |
| Accident | สินไหมอุบัติเหตุชีวิต เคลมด้วยทุนอุบัติเหตุ |
| Dismemberment | สินไหมสูญเสียสอวัยวะ เคลมด้วยทุนอุบัติเหตุสินไหมทุพพลภาพอุบัติเหตุ เคลมด้วยทุนอุบัติเหตุ |
| TPD | สินไหมทุพพลภาพอุบัติเหตุ เคลมด้วยทุน TPD |
| Health | สินไหมสุขภาพ |


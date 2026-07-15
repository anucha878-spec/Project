# IRI-PS-035 นำเข้าข้อมูลกรมธรรม์ที่เข้าเงื่อนไข Copayment

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1271529753  
> **Page ID:** 1271529753  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-035 นำเข้าข้อมูลกรมธรรม์ที่เข้าเงื่อนไข Copayment

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลกรมธรรม์ที่เข้าเงื่อนไข Copayment |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing (Back up): ทุกวันสิ้นเดือน เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing กรณี ongoing (Main): ทุกวันสิ้นเดือน เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing |
| 4 | ข้อมูลตั้งต้น(Input) | policy_no, rider_code, policy_year |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_49 ค้นหาข้อมูล Copayment ทั้งเข้าเงื่อนไขและไม่เข้าเงื่อนไข](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560051) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_49](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1275560051) ตามรอบประมวลผล ให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Backup เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_21_R1statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typeORDsum_recordcountauto_or_facultAround1 บันทึกข้อมูลลงที่ Backup detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNochar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)policy_no 2riderCodenumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)rider_code 3policyYearnumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)policy_year 4policyYearContractStartDatedate[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)policy_year_start 5policyYearContractEndDatedate[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)policy_year_end 6copayPercentnumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)copay_percent 7discountPremPercentnumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)discount_prem_perccent 8recordStatuschar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)record_status 9sourceCreateDatenumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_create_date 10sourceCreateTimenumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_create_time 11sourceCreateUserchar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_create_user 12sourceCreateSystemchar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_create_system 13sourceUpdateDatenumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_update_date 14sourceUpdateTimenumeric[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_update_time 15sourceUpdateUserchar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_update_user 16sourceUpdateSystemchar[tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1)scr_update_system สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Main เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_21statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typeORDsum_recordcountauto_or_facultAround2 บันทึกข้อมูลลงที่ Main detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNochar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)policy_no 2riderCodenumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)rider_code 3policyYearnumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)policy_year 4policyYearContractStartDatedate[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)policy_year_start 5policyYearContractEndDatedate[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)policy_year_end 6copayPercentnumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)copay_percent 7discountPremPercentnumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)discount_prem_perccent 8recordStatuschar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)record_status 9sourceCreateDatenumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_create_date 10sourceCreateTimenumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_create_time 11sourceCreateUserchar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_create_user 12sourceCreateSystemchar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_create_system 13sourceUpdateDatenumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_update_date 14sourceUpdateTimenumeric[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_update_time 15sourceUpdateUserchar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_update_user 16sourceUpdateSystemchar[tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt)scr_update_system |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_21_R1 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | ORD |
| sum_record | count |
| auto_or_facult | A |
| round | 1 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | policy_no |  |
| 2 | riderCode | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | rider_code |  |
| 3 | policyYear | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | policy_year |  |
| 4 | policyYearContractStartDate | date | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | policy_year_start |  |
| 5 | policyYearContractEndDate | date | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | policy_year_end |  |
| 6 | copayPercent | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | copay_percent |  |
| 7 | discountPremPercent | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | discount_prem_perccent |  |
| 8 | recordStatus | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | record_status |  |
| 9 | sourceCreateDate | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_create_date |  |
| 10 | sourceCreateTime | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_create_time |  |
| 11 | sourceCreateUser | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_create_user |  |
| 12 | sourceCreateSystem | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_create_system |  |
| 13 | sourceUpdateDate | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_update_date |  |
| 14 | sourceUpdateTime | numeric | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_update_time |  |
| 15 | sourceUpdateUser | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_update_user |  |
| 16 | sourceUpdateSystem | char | [tx_ri_copay_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/16.+tx_ri_copay_dt_r1) | scr_update_system |  |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_21 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | ORD |
| sum_record | count |
| auto_or_facult | A |
| round | 2 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | policy_no |  |
| 2 | riderCode | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | rider_code |  |
| 3 | policyYear | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | policy_year |  |
| 4 | policyYearContractStartDate | date | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | policy_year_start |  |
| 5 | policyYearContractEndDate | date | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | policy_year_end |  |
| 6 | copayPercent | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | copay_percent |  |
| 7 | discountPremPercent | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | discount_prem_perccent |  |
| 8 | recordStatus | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | record_status |  |
| 9 | sourceCreateDate | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_create_date |  |
| 10 | sourceCreateTime | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_create_time |  |
| 11 | sourceCreateUser | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_create_user |  |
| 12 | sourceCreateSystem | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_create_system |  |
| 13 | sourceUpdateDate | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_update_date |  |
| 14 | sourceUpdateTime | numeric | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_update_time |  |
| 15 | sourceUpdateUser | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_update_user |  |
| 16 | sourceUpdateSystem | char | [tx_ri_copay_dt](http://wiki.thaisamut.co.th/display/RDSINRI/65.+tx_ri_copay_dt) | scr_update_system |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_21'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
| **From** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from |
| **To** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to |
| **CC** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc |
| **SUBJECT** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> |
| **DESCRIPTION** | เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI |
| Error Process | [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name |
| Response | <Exception Message ที่ระบบ Throw Exception ออกมา> |
| **FROM** | [appservice@ocean.co.th](mailto:appservice@ocean.co.th) |
| **TO** | [ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th) |
| **CC** |  |
| **SUBJECT** | [Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00 |
| **DESCRIPTION** | เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
| **Error Process** | RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto |
| **Response** | java.lang.RuntimeException: Call service has error Could not send Message. |

# IRI-PS-036 นำเข้าข้อมูลสินไหมจากระบบ CMS

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1274052621  
> **Page ID:** 1274052621  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-036 นำเข้าข้อมูลสินไหมจากระบบ CMS

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลสินไหมจากระบบ CMS |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing (Back up): ทุกวันสิ้นเดือน เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing กรณี ongoing (Main): ทุกวันสิ้นเดือน เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing |
| 4 | ข้อมูลตั้งต้น(Input) | period |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_48 ค้นหารายการอนุมัติสินไหม cms](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273266911) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_48](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1273266911) ตามรอบประมวลผล ให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Backup เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_22_R1statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typeORDsum_recordcountauto_or_facultAround1 บันทึกข้อมูลลงที่ Backup detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policy_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)policy_no 2hd_updated_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)hd_updated_date 3claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_no 4as400_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)as400_claim_no 5rv_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rv_claim_no 6rv_created_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rv_created_date 7revoke_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)revoke_amount 8cp_rv_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_rv_claim_no 9cp_created_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_created_date 10rider_codenumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rider_code 11rider_planvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rider_plan 12policy_typevarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)policy_type 13approval_status [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)approval_status 14claim_type_codevarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_code 15claim_type_abbvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_abb 16claim_type_descvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_desc 17event_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)event_date 18cp_policy_yearnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_policy_year 19cp_claim_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_claim_amount 20cp_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_amount 21cp_client_oldnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_client_old 22cp_client_newnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_client_new สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Main เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_22statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typeORDsum_recordcountauto_or_facultAround2 บันทึกข้อมูลลงที่ Main detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policy_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)policy_no 2hd_updated_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)hd_updated_date 3claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_no 4as400_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)as400_claim_no 5rv_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rv_claim_no 6rv_created_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rv_created_date 7revoke_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)revoke_amount 8cp_rv_claim_novarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_rv_claim_no 9cp_created_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_created_date 10rider_codenumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rider_code 11rider_planvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)rider_plan 12policy_typevarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)policy_type 13approval_status [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)approval_status 14claim_type_codevarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_code 15claim_type_abbvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_abb 16claim_type_descvarchar[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)claim_type_desc 17event_datedate[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)event_date 18cp_policy_yearnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_policy_year 19cp_claim_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_claim_amount 20cp_amountnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_amount 21cp_client_oldnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_client_old 22cp_client_newnumeric[tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms)cp_client_new |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_22_R1 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | ORD |
| sum_record | count |
| auto_or_facult | A |
| round | 1 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policy_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | policy_no |  |
| 2 | hd_updated_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | hd_updated_date |  |
| 3 | claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_no |  |
| 4 | as400_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | as400_claim_no |  |
| 5 | rv_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rv_claim_no |  |
| 6 | rv_created_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rv_created_date |  |
| 7 | revoke_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | revoke_amount |  |
| 8 | cp_rv_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_rv_claim_no |  |
| 9 | cp_created_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_created_date |  |
| 10 | rider_code | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rider_code |  |
| 11 | rider_plan | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rider_plan |  |
| 12 | policy_type | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | policy_type |  |
| 13 | approval_status |  | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | approval_status |  |
| 14 | claim_type_code | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_code |  |
| 15 | claim_type_abb | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_abb |  |
| 16 | claim_type_desc | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_desc |  |
| 17 | event_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | event_date |  |
| 18 | cp_policy_year | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_policy_year |  |
| 19 | cp_claim_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_claim_amount |  |
| 20 | cp_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_amount |  |
| 21 | cp_client_old | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_client_old |  |
| 22 | cp_client_new | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_client_new |  |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_22 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | ORD |
| sum_record | count |
| auto_or_facult | A |
| round | 2 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policy_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | policy_no |  |
| 2 | hd_updated_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | hd_updated_date |  |
| 3 | claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_no |  |
| 4 | as400_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | as400_claim_no |  |
| 5 | rv_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rv_claim_no |  |
| 6 | rv_created_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rv_created_date |  |
| 7 | revoke_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | revoke_amount |  |
| 8 | cp_rv_claim_no | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_rv_claim_no |  |
| 9 | cp_created_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_created_date |  |
| 10 | rider_code | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rider_code |  |
| 11 | rider_plan | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | rider_plan |  |
| 12 | policy_type | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | policy_type |  |
| 13 | approval_status |  | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | approval_status |  |
| 14 | claim_type_code | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_code |  |
| 15 | claim_type_abb | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_abb |  |
| 16 | claim_type_desc | varchar | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | claim_type_desc |  |
| 17 | event_date | date | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | event_date |  |
| 18 | cp_policy_year | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_policy_year |  |
| 19 | cp_claim_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_claim_amount |  |
| 20 | cp_amount | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_amount |  |
| 21 | cp_client_old | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_client_old |  |
| 22 | cp_client_new | numeric | [tx_ri_claim_cms](http://wiki.thaisamut.co.th/display/RDSINRI/66.+tx_ri_claim_cms) | cp_client_new |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_20'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

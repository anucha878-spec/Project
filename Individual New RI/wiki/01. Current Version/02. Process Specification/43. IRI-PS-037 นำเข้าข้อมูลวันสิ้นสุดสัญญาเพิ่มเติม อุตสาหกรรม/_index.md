# IRI-PS-037 นำเข้าข้อมูลวันสิ้นสุดสัญญาเพิ่มเติม อุตสาหกรรม

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475302  
> **Page ID:** 1280475302  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-037 นำเข้าข้อมูลวันสิ้นสุดสัญญาเพิ่มเติม อุตสาหกรรม

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลวันสิ้นสุดสัญญาเพิ่มเติม อุตสาหกรรม |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batch กรณี ongoing (Main): ทุกวันสิ้นเดือน เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_50 ค้นหารายการวันสิ้นสุดสัญญาเพิ่มเติม อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475268) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_50](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1280475268) ตามรอบประมวลผล ให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Main เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_23statusSuccess, Errorperiodณ วันที่ batch runri_typeNpolicy_typeINDsum_recordcountauto_or_facultAround2 บันทึกข้อมูลลงที่ Main detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policy_numbervarchar[tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider)policy_no 2rider_plan_codedate[tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider)rider_plan_code 3ind_rider_plan_codevarchar[tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider)ind_rider_plan_code 4rider_maturity_datevarchar[tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider)rider_maturity_date |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_23 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | N |
| policy_type | IND |
| sum_record | count |
| auto_or_facult | A |
| round | 2 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policy_number | varchar | [tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider) | policy_no |  |
| 2 | rider_plan_code | date | [tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider) | rider_plan_code |  |
| 3 | ind_rider_plan_code | varchar | [tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider) | ind_rider_plan_code |  |
| 4 | rider_maturity_date | varchar | [tx_ri_ind_mat_rider](http://wiki.thaisamut.co.th/display/RDSINRI/67.+tx_ri_ind_mat_rider) | rider_maturity_date |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_23'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

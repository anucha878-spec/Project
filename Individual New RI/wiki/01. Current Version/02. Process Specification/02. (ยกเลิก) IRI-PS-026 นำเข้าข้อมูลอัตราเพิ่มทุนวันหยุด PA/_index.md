# (ยกเลิก) IRI-PS-026 นำเข้าข้อมูลอัตราเพิ่มทุนวันหยุด PA

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1172963540  
> **Page ID:** 1172963540  
> **Path:** Home / Current Version / 02. Process Specification / (ยกเลิก) IRI-PS-026 นำเข้าข้อมูลอัตราเพิ่มทุนวันหยุด PA

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลอัตราเพิ่มทุนวันหยุด PA |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing : ทุกวัน เวลา 21.00PM |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_32_ข้อมูลอัตราเพิ่มทุนวันหยุด PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1172963494) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_32_ข้อมูล Rate วันหยุด PA](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1172963494) โดย dumpfeed ทุกวันเวลา 21.00PMกรณีการ dumpfeed โดยที่ใน [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) ยังไม่เคยมีข้อมูลอยู่เลยสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_20statusSuccess, Errorperiodณ วันที่ dumpfeed (202301)ri_typenullpolicy_typePAsum_recordจำนวนรวมรายการauto_or_facultnullบันทึกข้อมูลลงที่ [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) ดังตารางด้านล่างกรณีการ Run Process โดยที่ใน [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) เคยมีข้อมูลอยู่แล้วให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ เช่น เมื่อ feed ใหม่ตามรอบหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_codeสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)บันทึกข้อมูลลงที่ [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) ดังนี้ Service Parameter Landing Table No.NameTypeTableFieldCondition1riderPlannumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)rider_plan 2startDatenumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) [](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)start_date 3endDatenumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)end_date 4srRatenumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)sr_rate 5statusstring[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)status 6updateDatenumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)update_date 7updateTimenumeric[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)update_time 8updateBystring[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0)update_by |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_20 |
| status | Success, Error |
| period | ณ วันที่ dumpfeed (202301) |
| ri_type | null |
| policy_type | PA |
| sum_record | จำนวนรวมรายการ |
| auto_or_facult | null |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | riderPlan | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | rider_plan |  |
| 2 | startDate | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) [](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | start_date |  |
| 3 | endDate | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | end_date |  |
| 4 | srRate | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | sr_rate |  |
| 5 | status | string | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | status |  |
| 6 | updateDate | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | update_date |  |
| 7 | updateTime | numeric | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | update_time |  |
| 8 | updateBy | string | [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/display/RDSINRI/20.+dm_ppalib_tbratsa0) | update_by |  |
| 7 | กรณีพบปัญหาการทำงาน | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_20'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

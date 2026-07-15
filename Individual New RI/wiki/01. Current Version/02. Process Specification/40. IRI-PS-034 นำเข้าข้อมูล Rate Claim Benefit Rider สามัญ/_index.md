# IRI-PS-034 นำเข้าข้อมูล Rate Claim Benefit Rider สามัญ

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269530691  
> **Page ID:** 1269530691  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-034 นำเข้าข้อมูล Rate Claim Benefit Rider สามัญ

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูล Rate Claim Benefit Rider สามัญ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing : ทุกสิ้นเดือน เวลา 22.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_47 ดึงข้อมูล Rate Claim Benefit Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269530742) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_47 ดึงข้อมูล Rate Claim Benefit Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1269530742) ตามรอบประมวลผลกรณีการ Run Process โดยที่ใน [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) ยังไม่เคยมีข้อมูลอยู่เลยสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_20statusSuccess, Errorperiodณ วันที่ batch run (202301)ri_typenullpolicy_typeORDsum_recordจำนวนรวมรายการauto_or_facultnullบันทึกข้อมูลลงที่ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) ดังตารางด้านล่างกรณีการ Run Process โดยที่ใน [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) เคยมีข้อมูลอยู่แล้วให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_codeสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)บันทึกข้อมูลลงที่ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) ดังนี้ Service Parameter Landing Table No.NameTypeTableFieldCondition1riderPlanCodenumeric[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)rider_plan_code 2minCovYeardecimal[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)min_cov_year 3maxCovYeardecimal[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)max_cov_year 4coverageCodevarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)coverage_code 5docNovarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)doc_no 6coverageDescvarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)coverage_desc 7coverageTypevarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)coverage_type 8benefitRatedecimal[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)benefit_rate 9benefitMultiplevarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)benefit_multiple 10payConditionvarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)pay_condition 11unitTypevarchar[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)unit_type 12noOfDaydecimal[ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate)no_of_day *หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_20 |
| status | Success, Error |
| period | ณ วันที่ batch run (202301) |
| ri_type | null |
| policy_type | ORD |
| sum_record | จำนวนรวมรายการ |
| auto_or_facult | null |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | riderPlanCode | numeric | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | rider_plan_code |  |
| 2 | minCovYear | decimal | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | min_cov_year |  |
| 3 | maxCovYear | decimal | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | max_cov_year |  |
| 4 | coverageCode | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | coverage_code |  |
| 5 | docNo | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | doc_no |  |
| 6 | coverageDesc | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | coverage_desc |  |
| 7 | coverageType | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | coverage_type |  |
| 8 | benefitRate | decimal | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | benefit_rate |  |
| 9 | benefitMultiple | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | benefit_multiple |  |
| 10 | payCondition | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | pay_condition |  |
| 11 | unitType | varchar | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | unit_type |  |
| 12 | noOfDay | decimal | [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/27.+ms_claim_bef_ord_rate) | no_of_day |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_18'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

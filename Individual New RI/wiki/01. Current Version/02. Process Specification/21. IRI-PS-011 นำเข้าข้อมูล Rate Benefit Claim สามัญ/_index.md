# IRI-PS-011 นำเข้าข้อมูล Rate Benefit Claim สามัญ

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1118929110  
> **Page ID:** 1118929110  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-011 นำเข้าข้อมูล Rate Benefit Claim สามัญ

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูล Rate ทุนประกัน |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing : ทุกสิ้นเดือน เวลา 22.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | ใช้ข้อมูล input ของแต่ละ treaty จาก [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).status = 'A'planCode = [cf_base_plancode_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+cf_base_plancode_dt).plan_codewhere cf_plancode_hd_id in (select cf_plancode_hd_id from [cf_plancode_hd](http://wiki.thaisamut.co.th/display/RDSINRI/02.+cf_plancode_hd) where cf_treaty_id in ([cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty))) |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_15 ดึงข้อมูล Benefit Claim](/pages/viewpage.action?pageId=1118568649) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_15 ดึงข้อมูล Benefit Claim](/pages/viewpage.action?pageId=1118568649) ตามรอบประมวลผลกรณีการ Run Process โดยที่ใน [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) ยังไม่เคยมีข้อมูลอยู่เลยสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_11statusSuccess, Errorperiodณ วันที่ batch run (202301)ri_typenullpolicy_typeORDsum_recordจำนวนรวมรายการauto_or_facultnullบันทึกข้อมูลลงที่ [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) ดังตารางด้านล่างกรณีการ Run Process โดยที่ใน [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) เคยมีข้อมูลอยู่แล้วให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_codeสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)บันทึกข้อมูลลงที่ [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) ดังนี้ Service Parameter Landing Table No.Name TypeTableFieldCondition1planCodeVarchar[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)plan_code 2policyYearnumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)policy_year 3minAgenumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)min_age 4maxAgenumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)max_age 5benefitClaimnumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)benefit_claim 6benefitRefundnumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)benefit_refund 7benefitComnumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)benefit_com 8benefitDivnumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)benefit_div 9benefitMaturitynumeric[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)benefit_maturity 10refTableVarchar[ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim)ref_table *หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_11 |
| status | Success, Error |
| period | ณ วันที่ batch run (202301) |
| ri_type | null |
| policy_type | ORD |
| sum_record | จำนวนรวมรายการ |
| auto_or_facult | null |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | planCode | Varchar | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | plan_code |  |
| 2 | policyYear | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | policy_year |  |
| 3 | minAge | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | min_age |  |
| 4 | maxAge | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | max_age |  |
| 5 | benefitClaim | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | benefit_claim |  |
| 6 | benefitRefund | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | benefit_refund |  |
| 7 | benefitCom | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | benefit_com |  |
| 8 | benefitDiv | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | benefit_div |  |
| 9 | benefitMaturity | numeric | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | benefit_maturity |  |
| 10 | refTable | Varchar | [ms_benefit_claim](/display/RDSINRI/13.+ms_benefit_claim) | ref_table |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch ProcessAdd : 21/12/2566 thidarat.lu | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_11'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

# IRI-PS-000 นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1114439685  
> **Page ID:** 1114439685  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-000 นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing : ทุกวัน เวลา 05.00 น. (ตี 5 ของทุกวัน)กรณี ongoing : ทุกวัน เวลา 02.00 น. (ตี 2 ของทุกวัน) [![](http://jira.thaisamut.co.th/images/icons/issuetypes/task.png)IRI-4753](http://jira.thaisamut.co.th/browse/IRI-4753) - [New-RI] ปรับ เวลา batch ri_auto_00 เป็น 02:00 (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_00 ดึงข้อมูล Base Plan Code และ Rider Code ทุกประเภท](http://wiki.thaisamut.co.th/x/BIEwQg) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_00 ดึงข้อมูล Base Plan Code และ Rider Code ทุกประเภท](http://wiki.thaisamut.co.th/x/BIEwQg) ตามรอบประมวลผลกรณีการ Run Process โดยที่ใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) ยังไม่เคยมีข้อมูลอยู่เลยสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)Field NameValueri_process_hd_idauto generateprocess_codeRI_BH_00statusSuccess, Errorperiodณ วันที่ batch run (202301)ri_typenullpolicy_typenullsum_recordจำนวนรวมรายการauto_or_facultnullบันทึกข้อมูลลงที่ [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) ดังตารางด้านล่างกรณีการ Run Process โดยที่ใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) เคยมีข้อมูลอยู่แล้วเปรียบเทียบจำนวน Row ที่มีการ Run Service ใหม่ กับ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd).sum_record ของครั้งล่าสุดใน Table เปรียบเทียบแล้วเท่ากันสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) เพื่อบันทึกสถานะการ Run Process ล่าสุดเปรียบเทียบแล้วไม่เท่ากันสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) เพื่อบันทึกสถานะการ Run Process ล่าสุดตรวจสอบ [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_code[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_type[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_group[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_nameหากไม่มีข้อมูลที่ตรงกันทั้ง 3 Field ให้ Insert ข้อมูลใหม่ (เพิ่มเมื่อไม่เคยมีอยู่) ใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) ดังตารางด้านล่างหากข้อมูลที่ตรงกันทั้ง 3 Field ให้ ตรวจสอบความแตกต่างของ Field ดังนี้ ถ้ามีแตกต่างให้ Update[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).shortName[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).riderType[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policyCoverage[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).productName Service Parameter Landing Table No.Name TypeTableFieldCondition1policyTypeVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ)policy_type 2productGroupVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) product_group 3shortNameVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) short_name 4riderTypeVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) rider_type 5policyCoverageVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) ms_policy_coverage_type_code 6planCodeVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) plan_code 7productNameVarchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) product_name 8 Varchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) sent_reinsurer_statusDefault "NEW"9 Varchar[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) set_treaty_statusDefault "NOTIM"10covYearNumeric[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) cov_year 11payYearNumeric[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) pay_year 12coditionCovyearNumeric[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) condition_cov_year 13coditionPayyearNumeric[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) condition_pay_year |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_BH_00 |
| status | Success, Error |
| period | ณ วันที่ batch run (202301) |
| ri_type | null |
| policy_type | null |
| sum_record | จำนวนรวมรายการ |
| auto_or_facult | null |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyType | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | policy_type |  |
| 2 | productGroup | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | product_group |  |
| 3 | shortName | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | short_name |  |
| 4 | riderType | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | rider_type |  |
| 5 | policyCoverage | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | ms_policy_coverage_type_code |  |
| 6 | planCode | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | plan_code |  |
| 7 | productName | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | product_name |  |
| 8 |  | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | sent_reinsurer_status | Default "NEW" |
| 9 |  | Varchar | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | set_treaty_status | Default "NOTIM" |
| 10 | covYear | Numeric | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | cov_year |  |
| 11 | payYear | Numeric | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | pay_year |  |
| 12 | coditionCovyear | Numeric | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | condition_cov_year |  |
| 13 | coditionPayyear | Numeric | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) | condition_pay_year |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch ProcessAdd : 21/12/2566 thidarat.lu | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_00' นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

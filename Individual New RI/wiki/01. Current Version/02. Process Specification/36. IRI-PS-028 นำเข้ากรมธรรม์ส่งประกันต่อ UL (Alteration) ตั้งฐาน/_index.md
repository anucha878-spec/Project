# IRI-PS-028 นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) ตั้งฐาน

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1237450945  
> **Page ID:** 1237450945  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-028 นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) ตั้งฐาน

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) ตั้งฐาน |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batch กรณี ongoing : ตรวจสอบว่าข้อมูล Landing ประจำเดือนแล้วหรือไม่ โดยให้ไปเช็คกับ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd).created_by กรณีพบข้อมูลแล้วไม่ต้อง run ซ้ำ |
| 4 | ข้อมูลตั้งต้น(Input) | period จากรอบประมวลผล เช่น run 30/01/23 = 202301 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_20 ค้นหากรมธรรม์ส่งประกันต่อ UL (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1128529927) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_20 ค้นหากรมธรรม์ส่งประกันต่อ UL (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1128529927) ตามรอบประมวลผลให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_17statusSuccess, Errorperiodณ วันที่ batch run (202301)ri_typenullpolicy_typeULsum_recordจำนวนรวมรายการบันทึกข้อมูลลงที่ [tx_ri_ul_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/63.+tx_ri_ul_alteration_dt_initial) ดังนี้ Service Parameter No.NameType FieldCondition1productCodestring[tx_ri_ul_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/63.+tx_ri_ul_alteration_dt_initial)product_type 2policyNostring policy_no 3genderstring gender 4birthDatedate birth_date20230604 >> 2023-06-04 15:03:005commencementDatedate commencement_date20230604 >> 2023-06-04 15:03:006alterationDatedate alteration_date20230604 >> 2023-06-04 15:03:007policyYearnumeric policy_year 8sumInsuredLifenumeric sum_insured_life 9previousSanumeric previous_sa 10regularPremiumAmountnumeric regular_premium_amount 11remarkstring product_type 12policyStatusThstring policy_status_th 13policyStatusEngstring policy_status_eng 14planCodestring plan_code 15occupationnumeric occupation 16maturityDatedate maturity_date20230604 >> 2023-06-04 15:03:0017initialPremiumnumeric initial_premium 18updateDatedate update_date20230604 >> 2023-06-04 15:03:00 |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_17 |
| status | Success, Error |
| period | ณ วันที่ batch run (202301) |
| ri_type | null |
| policy_type | UL |
| sum_record | จำนวนรวมรายการ |
|  | Service Parameter |  |  |  |  |
| No. | Name | Type |  | Field | Condition |
| 1 | productCode | string | [tx_ri_ul_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/63.+tx_ri_ul_alteration_dt_initial) | product_type |  |
| 2 | policyNo | string |  | policy_no |  |
| 3 | gender | string |  | gender |  |
| 4 | birthDate | date |  | birth_date | 20230604 >> 2023-06-04 15:03:00 |
| 5 | commencementDate | date |  | commencement_date | 20230604 >> 2023-06-04 15:03:00 |
| 6 | alterationDate | date |  | alteration_date | 20230604 >> 2023-06-04 15:03:00 |
| 7 | policyYear | numeric |  | policy_year |  |
| 8 | sumInsuredLife | numeric |  | sum_insured_life |  |
| 9 | previousSa | numeric |  | previous_sa |  |
| 10 | regularPremiumAmount | numeric |  | regular_premium_amount |  |
| 11 | remark | string |  | product_type |  |
| 12 | policyStatusTh | string |  | policy_status_th |  |
| 13 | policyStatusEng | string |  | policy_status_eng |  |
| 14 | planCode | string |  | plan_code |  |
| 15 | occupation | numeric |  | occupation |  |
| 16 | maturityDate | date |  | maturity_date | 20230604 >> 2023-06-04 15:03:00 |
| 17 | initialPremium | numeric |  | initial_premium |  |
| 18 | updateDate | date |  | update_date | 20230604 >> 2023-06-04 15:03:00 |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_17_INI'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

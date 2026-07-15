# IRI-PS-025 นำเข้าข้อมูล ค่าการประกันภัย (Cost of Insurance) UL

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1138196964  
> **Page ID:** 1138196964  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-025 นำเข้าข้อมูล ค่าการประกันภัย (Cost of Insurance) UL

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูล ค่าการประกันภัย (Cost of Insurance) UL |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing (Back up):ทุกวันสิ้นเดือน เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing กรณี ongoing (Main) :ตรวจสอบว่าข้อมูล Landing ประจำเดือนแล้วหรือไม่ โดยให้ไปเช็คกับ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd).created_by กรณีพบข้อมูลแล้วไม่ต้อง run ซ้ำกรณีไม่พบข้อมูล [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) เนื่องจากยังไม่ได้ landing ข้อมูล ให้ run laning ทุกวันที่ 2 ของเดือน กรณีวันที่ 2 ตรงกับวันหยุดให้ run วันถัดไปจนถึงวันที่ 7 ณ เวลา 23.30 08.00 AM (#OIC suthanee.sa 09/07/2025) โดยให้ตรวจสอบวันวันหยุดโดย Service [OliHolidayWsListV1ESBService](http://wiki.thaisamut.co.th/display/RDSCP/List+of+services) และรวมถึงวันเสาร์-อาทิตย์ก็นับเป็นวันหยุดด้วยระบบจะทำงานได้ก็ต่อเมื่อ เป็นวันทำการวันที่ 2 นับตั้งแต่วันที่ 2 ของเดือน (suthanee.sa 06/11/2025)กรณีวันปัจจุบันเป็นวันทำการวันที่ 1 นับตั้งแต่วันที่ 1 ให้ระบบไม่ต้องทำงานใด ๆกรณีวันปัจจุบันเป็นวันทำการวันที่ 2 นับตั้งแต่วันที่ 1 ให้ระบบดึงข้อมูล COI และประมวลผล UL โดน flag_coi เป็น TRUE |
| 4 | ข้อมูลตั้งต้น(Input) | period จากรอบประมวลผล เช่น run 30/01/23 = 202301 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_21 ค้นหาข้อมูลค่าการประกันภัย UL (COI)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1137508587) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_21 ค้นหาข้อมูลค่าการประกันภัย UL (COI)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1137508587) ตามรอบประมวลผล ให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Backup เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_19_R1statusSuccess, Errorperiodณ วันที่ batch runri_typeApolicy_typeULsum_recordcountauto_or_facultAround1 บันทึกข้อมูลลงที่ Backup detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNostring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)policy_no 2productstring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)product 3productCodestring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)product_code 4alterIdstring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)alter_id 5effectiveDatedate[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)effective_date20230604 >> 2023-06-04 15:03:006alterTypeIdstring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)alter_type_id 7alterTypeNamestring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)alter_type_name 8chargeTypeIdnumeric[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)charge_type_id 9chargeTypestring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)charge_type 10alterStatusstring[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)alter_status 11chargeRatenumeric[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)charge_rate 12chargeAmountnumeric[tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1)charge_amount สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Main เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... ใช้บันทึกทั้งในรอบที่ทำ Auto วันทำการวันที่ 2 และในกรณีกด Run จากหน้าจอ [09. Manual Batch Process](http://wiki.thaisamut.co.th/display/RDSINRI/09.+Manual+Batch+Process)Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_19statusSuccess, Errorperiodณ วันที่ batch run - 1 เดือน (suthanee.sa 2025/09/04)ri_typeApolicy_typeULsum_recordcountauto_or_facultAround2 บันทึกข้อมูลลงที่ Main detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNostring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)policy_no 2productstring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)product 3productCodestring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)product_code 4alterIdstring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)alter_id 5effectiveDatedate[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)effective_date20230604 >> 2023-06-04 15:03:006alterTypeIdstring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)alter_type_id 7alterTypeNamestring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)alter_type_name 8chargeTypeIdnumeric[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)charge_type_id 9chargeTypestring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)charge_type 10alterStatusstring[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)alter_status 11chargeRatenumeric[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)charge_rate 12chargeAmountnumeric[tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt)charge_amount |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_19_R1 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | A |
| policy_type | UL |
| sum_record | count |
| auto_or_facult | A |
| round | 1 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | policy_no |  |
| 2 | product | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | product |  |
| 3 | productCode | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | product_code |  |
| 4 | alterId | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | alter_id |  |
| 5 | effectiveDate | date | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | effective_date | 20230604 >> 2023-06-04 15:03:00 |
| 6 | alterTypeId | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | alter_type_id |  |
| 7 | alterTypeName | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | alter_type_name |  |
| 8 | chargeTypeId | numeric | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | charge_type_id |  |
| 9 | chargeType | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | charge_type |  |
| 10 | alterStatus | string | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | alter_status |  |
| 11 | chargeRate | numeric | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | charge_rate |  |
| 12 | chargeAmount | numeric | [tx_ri_ul_coi_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_ri_ul_coi_dt_r1) | charge_amount |  |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_19 |
| status | Success, Error |
| period | ณ วันที่ batch run - 1 เดือน (suthanee.sa 2025/09/04) |
| ri_type | A |
| policy_type | UL |
| sum_record | count |
| auto_or_facult | A |
| round | 2 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | policy_no |  |
| 2 | product | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | product |  |
| 3 | productCode | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | product_code |  |
| 4 | alterId | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | alter_id |  |
| 5 | effectiveDate | date | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | effective_date | 20230604 >> 2023-06-04 15:03:00 |
| 6 | alterTypeId | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | alter_type_id |  |
| 7 | alterTypeName | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | alter_type_name |  |
| 8 | chargeTypeId | numeric | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | charge_type_id |  |
| 9 | chargeType | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | charge_type |  |
| 10 | alterStatus | string | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | alter_status |  |
| 11 | chargeRate | numeric | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | charge_rate |  |
| 12 | chargeAmount | numeric | [tx_ri_ul_coi_dt](http://wiki.thaisamut.co.th/display/RDSINRI/44.+tx_ri_ul_coi_dt) | charge_amount |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_19'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

# IRI-PS-026 นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) ตั้งฐาน

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1237450898  
> **Page ID:** 1237450898  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-026 นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) ตั้งฐาน

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batch |
| 4 | ข้อมูลตั้งต้น(Input) | period จากรอบประมวลผล เช่น run 30/01/23 = 202301 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_03 ค้นหากรมธรรม์ส่งประกันต่อสามัญ (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1096450888) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_03 ค้นหากรมธรรม์ส่งประกันต่อสามัญ (Alteration) Auto](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1096450888) ตามรอบประมวลผลให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ ri_type, policy_type, auto_or_facult (A) process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น successสร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd)บันทึกข้อมูลลงที่ [tx_ri_ord_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/61.+tx_ri_ord_alteration_dt_initial) ดังนี้ Service ParameterLanding Table No.NameTypeTableFieldCondition1policyNostring[tx_ri_ord_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/61.+tx_ri_ord_alteration_dt_initial)policy_no 2alterationDatedate alteration_date660604 >> 2023-06-04 15:03:003commencementDatedate commencement_date660604 >> 2023-06-04 15:03:004lapseDatedate lapse_date660604 >> 2023-06-04 15:03:005maturityDatedate maturity_date660604 >> 2023-06-04 15:03:006initialSABigDecimal initial_sa 7previousInitialSaBigDecimal previous_initial_sa 8premiumBaseBigDecimal premium_base 9premiumExtraBaseBigDecimal premium_extra_base 10emrRateBigDecimal emr_rate 11uwEmrRateBigDecimal uw_emr_rate 12saleChannelCodestring sale_channel_code 13saleChannelstring sale_channel 14policyStatusstring policy_status 15previousPolicyStatusstring previous_policy_status 16standardstring standard 17percentEMRBigDecimal percent_emr 18titleNamestring cust_title_name 19customerNamestring cust_name 20customerSurnamestring cust_surname 21sexstring cust_sex 22issueAgeint cust_issued_age 23birthDatedate cust_birth_date660604 >> 2023-06-04 15:03:0024idCardstring cust_id_card 25occupationstring cust_occ_name 26occClassstring cust_occ_class 27provincestring cust_province 28cisCusNostring cust_cis_no 29planCodestring plan_code 30planNamestring plan_name 31planTypesting plan_type 34premiumExtraRiderBigDecimal premium_extra_rider 35riderTypestring rider_type 36riderCodestring rider_code 37riderCode2string rider_code_2 38emrRateRiderBigDecimal emr_rate_rider 39policyAppDatedate policy_app_date660604 >> 2023-06-04 15:03:0040certNosting cert_no 41coverageTermint coverage_term 42planIdsting plan_id 43riderCodeEmrint rider_code_emr 44riderComDatedate rider_com_date 45cessionNosting cession_no 46approvedCasesting approved_case 47provinceEngsting province_eng 48countrysting country 49countryEngsting country_eng 50medsting med 51alterationCodesting alteration_code 52alterationCasesting alteration_case 53alterEffDatedate alter_eff_date660604 >> 2023-06-04 15:03:0054updateDatedate update_alter_date660604 >> 2023-06-04 15:03:00 |
|  | Service Parameter | Landing Table |  |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | string | [tx_ri_ord_alteration_dt_initial](http://wiki.thaisamut.co.th/display/RDSINRI/61.+tx_ri_ord_alteration_dt_initial) | policy_no |  |
| 2 | alterationDate | date |  | alteration_date | 660604 >> 2023-06-04 15:03:00 |
| 3 | commencementDate | date |  | commencement_date | 660604 >> 2023-06-04 15:03:00 |
| 4 | lapseDate | date |  | lapse_date | 660604 >> 2023-06-04 15:03:00 |
| 5 | maturityDate | date |  | maturity_date | 660604 >> 2023-06-04 15:03:00 |
| 6 | initialSA | BigDecimal |  | initial_sa |  |
| 7 | previousInitialSa | BigDecimal |  | previous_initial_sa |  |
| 8 | premiumBase | BigDecimal |  | premium_base |  |
| 9 | premiumExtraBase | BigDecimal |  | premium_extra_base |  |
| 10 | emrRate | BigDecimal |  | emr_rate |  |
| 11 | uwEmrRate | BigDecimal |  | uw_emr_rate |  |
| 12 | saleChannelCode | string |  | sale_channel_code |  |
| 13 | saleChannel | string |  | sale_channel |  |
| 14 | policyStatus | string |  | policy_status |  |
| 15 | previousPolicyStatus | string |  | previous_policy_status |  |
| 16 | standard | string |  | standard |  |
| 17 | percentEMR | BigDecimal |  | percent_emr |  |
| 18 | titleName | string |  | cust_title_name |  |
| 19 | customerName | string |  | cust_name |  |
| 20 | customerSurname | string |  | cust_surname |  |
| 21 | sex | string |  | cust_sex |  |
| 22 | issueAge | int |  | cust_issued_age |  |
| 23 | birthDate | date |  | cust_birth_date | 660604 >> 2023-06-04 15:03:00 |
| 24 | idCard | string |  | cust_id_card |  |
| 25 | occupation | string |  | cust_occ_name |  |
| 26 | occClass | string |  | cust_occ_class |  |
| 27 | province | string |  | cust_province |  |
| 28 | cisCusNo | string |  | cust_cis_no |  |
| 29 | planCode | string |  | plan_code |  |
| 30 | planName | string |  | plan_name |  |
| 31 | planType | sting |  | plan_type |  |
| 34 | premiumExtraRider | BigDecimal |  | premium_extra_rider |  |
| 35 | riderType | string |  | rider_type |  |
| 36 | riderCode | string |  | rider_code |  |
| 37 | riderCode2 | string |  | rider_code_2 |  |
| 38 | emrRateRider | BigDecimal |  | emr_rate_rider |  |
| 39 | policyAppDate | date |  | policy_app_date | 660604 >> 2023-06-04 15:03:00 |
| 40 | certNo | sting |  | cert_no |  |
| 41 | coverageTerm | int |  | coverage_term |  |
| 42 | planId | sting |  | plan_id |  |
| 43 | riderCodeEmr | int |  | rider_code_emr |  |
| 44 | riderComDate | date |  | rider_com_date |  |
| 45 | cessionNo | sting |  | cession_no |  |
| 46 | approvedCase | sting |  | approved_case |  |
| 47 | provinceEng | sting |  | province_eng |  |
| 48 | country | sting |  | country |  |
| 49 | countryEng | sting |  | country_eng |  |
| 50 | med | sting |  | med |  |
| 51 | alterationCode | sting |  | alteration_code |  |
| 52 | alterationCase | sting |  | alteration_case |  |
| 53 | alterEffDate | date |  | alter_eff_date | 660604 >> 2023-06-04 15:03:00 |
| 54 | updateDate | date |  | update_alter_date | 660604 >> 2023-06-04 15:03:00 |
| 7 | กรณีพบปัญหาการทำงานของ Batch ProcessAdd : 21/12/2566 thidarat.lu | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_02_INI'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

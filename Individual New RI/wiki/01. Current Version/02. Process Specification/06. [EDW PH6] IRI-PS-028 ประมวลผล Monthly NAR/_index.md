# [EDW PH6] IRI-PS-028 ประมวลผล Monthly NAR

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1220739108  
> **Page ID:** 1220739108  
> **Path:** Home / Current Version / 02. Process Specification / [EDW PH6] IRI-PS-028 ประมวลผล Monthly NAR

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | ประมวลผล Monthly NAR |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | Auto : เริ่มประมวลผลเมื่อ [IRI-PS-030 ส่งข้อมูล Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/AgB3Sw) ทำงานเสร็จ หรือ [IRI-PS-032 ส่งข้อมูล UL Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/EwB3Sw) (suthanee.sa 11/07/2025 #OIC)Manual : Trigger จากหน้าจอ [10. หน้าจอส่งข้อมูล Mark Policy และ Current NAR](http://wiki.thaisamut.co.th/x/kAF3S) |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลที่ได้จาก [IRI-PS-014 ประมวลผล Estimate (Auto)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1122763155) |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | - |
| 6 | อธิบายรายละเอียด(Description) | Flow การประมวลผล ใช้ข้อมูล Period จากการส่งข้อมูล Estimate ไปยัง MPS เสร็จเสมอโดยระบบต้องตรวจสอบว่ามีรายการประมวลผล Estimate รายการใดใหม่ และต้องทำใหม่คู่กับ Estimateกรณีที่เป็นรายการ Treaty UL (treaty_code มี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).treaty_code = รายการ lookup_key ใน cf_lookup_catalog.parent_id = 1005700)ถ้าเป็นวันที่ 1 ระบบจะยังคงบันทุก .coi_flag เป็น FALSE เสมอถ้าเป็นวันที่ 2 เป็นต้นไป ระบบต้องตรวจสอบก่อนว่าวันนั้นเป็นวันหยุดหรือไม่ ถ้าเป็นวันหยุดยังคงบันทึก.coi_flag เป็น FALSE ถ้าไม่ใช่วันหยุด จึงจะบันทึกเป็น TRUE ได้![](/download/attachments/1220739108/Screenshot%202025-08-06%20152707.png?version=1&modificationDate=1754468852410&api=v2)**กรณี Auto #OIC** แสดงรายละเอียด ตรวจสอบรายการข้อมูลทั้งหมดสำหรับการประมวลผลข้อมูลTable ข้อมูลFieldParameterเงื่อนไขข้อมูลตัวอย่างข้อมูล**ID**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)ri_est_hd_id{EST_HD_ID}ทุกรายการ1**Reinsurer**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)reinsurer_code{REINSURER_CODE}ทุกรายการThaire**Treaty** **Code**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)treaty_code{TREATY_CODE}ทุกรายการTHREL_Ind_CI50_Rider**Facultative**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)facult_flag{FACULT_FLAG}ทุกรายการFALSE**Period**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)period{PERIOD}ทุกรายการที่อยู่ใน period ปัจจุบัน202301**Status**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)status{STATUS}เท่ากับ "SUCCESS" หรีอ "APPROVE" หรือ "PROCESSINGEDW"SUCCESS**Usage Status**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)usage_status{USE_STATUS}เท่ากับ "A"A กรณีเป็นกระบวนการต่อมาจาก [IRI-PS-030 ส่งข้อมูล Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/AgB3Sw) ให้ประมวลผลทุก Treatyกรณีเป็นกระบวนการต่อมาจาก [IRI-PS-032 ส่งข้อมูล UL Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/EwB3Sw) ให้ประมวลผลตาม treaty_code มี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).treaty_code = รายการ lookup_key ใน cf_lookup_catalog.parent_id = 1005700สร้างรายการที่ tx_ri_monthly_nar_hdField NameValueri_monthly_nar_hd_idauto generateri_est_hd_id{EST_HD_ID}period{PERIOD}reinsurer_code{REINSURER_CODE}treaty_code{TREATY_CODE}facult_flag{FACULT_FLAG}ri_premium_modetx_ri_est_hd.ri_premium_modetypeNARsum_record0statusPROCESSBDRdest_statusnullremarknullusage_statusAcontent_idnullsum_ri_current_nar0sum_ri_previous_nar0****3. นำรายการใน tx_ri_est_hd.ri_est_hd_id ไปประมวลผล[01. Current Monthly NAR](http://wiki.thaisamut.co.th/x/cgDDS)4. ไปยัง Process [[EDW PH6] IRI-PS-027 ส่งข้อมูลไปยังระบบปลายทาง Monthly NAR](http://wiki.thaisamut.co.th/x/xwDDS) โดยมีเงื่อนไขดังนี้ (suthanee.sa 11/07/2025 #OIC)กรณีเป็นกระบวนการต่อมาจาก [IRI-PS-030 ส่งข้อมูล Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/AgB3Sw) ให้ส่งข้อมูลทุก Treatyกรณีเป็นกระบวนการต่อมาจาก [IRI-PS-032 ส่งข้อมูล UL Estimate ไปยัง MPS Auto](http://wiki.thaisamut.co.th/x/EwB3Sw) ให้ส่งข้อมูลตาม treaty_code มี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).treaty_code = รายการ lookup_key ใน cf_lookup_catalog.parent_id = 1005700 **กรณี Manual** แสดงรายละเอียด รับข้อมูลมาจากหน้าจอข้อมูลTable ข้อมูลFieldParameter ตัวอย่างข้อมูล**ID**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)ri_est_hd_id{EST_HD_ID}ค้นหาทุก ID ตาม ข้อมูลที่เลือกในหน้าจอ โดย [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).usage_status ต้องเท่ากับ A1**Reinsurer**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)reinsurer_code{REINSURER_CODE}จากข้อมูลที่เลือกในหน้าจอThaire**Treaty** **Code**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)treaty_code{TREATY_CODE}จากข้อมูลที่เลือกในหน้าจอTHREL_Ind_CI50_Rider**Facultative**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)facult_flag{FACULT_FLAG} FALSE**Period**[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)period{PERIOD}จากข้อมูลที่เลือกในหน้าจอ202301กรณีกดมาจากปุ่มประมวลผลซ้ำ (มีรายการเดิมอยู่) ให้ Update tx_ri_monthly_nar_hd.usage_status = Iสร้างรายการที่ tx_ri_monthly_nar_hdField NameValueri_monthly_nar_hd_idauto generateri_est_hd_id{EST_HD_ID}period{PERIOD}reinsurer_code{REINSURER_CODE}treaty_code{TREATY_CODE}facult_flag{FACULT_FLAG}ri_premium_modetx_ri_est_hd.ri_premium_modetypeNARsum_record0statusPROCESSBDRdest_statusnullremarknullusage_statusAcontent_idnullsum_ri_current_nar0sum_ri_previous_nar0****3. นำรายการใน tx_ri_est_hd.ri_est_hd_id ไปประมวลผล[01. Current Monthly NAR](http://wiki.thaisamut.co.th/x/cgDDS) |
| ข้อมูล | Table ข้อมูล | Field | Parameter | เงื่อนไขข้อมูล | ตัวอย่างข้อมูล |
| **ID** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | ri_est_hd_id | {EST_HD_ID} | ทุกรายการ | 1 |
| **Reinsurer** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | reinsurer_code | {REINSURER_CODE} | ทุกรายการ | Thaire |
| **Treaty** **Code** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | treaty_code | {TREATY_CODE} | ทุกรายการ | THREL_Ind_CI50_Rider |
| **Facultative** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | facult_flag | {FACULT_FLAG} | ทุกรายการ | FALSE |
| **Period** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | period | {PERIOD} | ทุกรายการที่อยู่ใน period ปัจจุบัน | 202301 |
| **Status** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | status | {STATUS} | เท่ากับ "SUCCESS" หรีอ "APPROVE" หรือ "PROCESSINGEDW" | SUCCESS |
| **Usage Status** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | usage_status | {USE_STATUS} | เท่ากับ "A" | A |
| Field Name | Value |
| ri_monthly_nar_hd_id | auto generate |
| ri_est_hd_id | {EST_HD_ID} |
| period | {PERIOD} |
| reinsurer_code | {REINSURER_CODE} |
| treaty_code | {TREATY_CODE} |
| facult_flag | {FACULT_FLAG} |
| ri_premium_mode | tx_ri_est_hd.ri_premium_mode |
| type | NAR |
| sum_record | 0 |
| status | PROCESSBDR |
| dest_status | null |
| remark | null |
| usage_status | A |
| content_id | null |
| sum_ri_current_nar | 0 |
| sum_ri_previous_nar | 0 |
| ข้อมูล | Table ข้อมูล | Field | Parameter |  | ตัวอย่างข้อมูล |
| **ID** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | ri_est_hd_id | {EST_HD_ID} | ค้นหาทุก ID ตาม ข้อมูลที่เลือกในหน้าจอ โดย [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).usage_status ต้องเท่ากับ A | 1 |
| **Reinsurer** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | reinsurer_code | {REINSURER_CODE} | จากข้อมูลที่เลือกในหน้าจอ | Thaire |
| **Treaty** **Code** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | treaty_code | {TREATY_CODE} | จากข้อมูลที่เลือกในหน้าจอ | THREL_Ind_CI50_Rider |
| **Facultative** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | facult_flag | {FACULT_FLAG} |  | FALSE |
| **Period** | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | period | {PERIOD} | จากข้อมูลที่เลือกในหน้าจอ | 202301 |
| Field Name | Value |
| ri_monthly_nar_hd_id | auto generate |
| ri_est_hd_id | {EST_HD_ID} |
| period | {PERIOD} |
| reinsurer_code | {REINSURER_CODE} |
| treaty_code | {TREATY_CODE} |
| facult_flag | {FACULT_FLAG} |
| ri_premium_mode | tx_ri_est_hd.ri_premium_mode |
| type | NAR |
| sum_record | 0 |
| status | PROCESSBDR |
| dest_status | null |
| remark | null |
| usage_status | A |
| content_id | null |
| sum_ri_current_nar | 0 |
| sum_ri_previous_nar | 0 |
| 7. | กรณีพบปัญหาการทำงานของ Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Process_Estimate'process_code = 'RI_AUTO_NAR' (suthanee.sa 19/08/2025)นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

# IRI-PS-017 นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1123778594  
> **Page ID:** 1123778594  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-017 นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | กรณี Manual : Trigger จากหน้าจอ manual sync batchกรณี ongoing (Back up): ทุกวันสิ้นเดือน เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing กรณี ongoing (Main): ทุกวันสิ้นเดือน เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing |
| 4 | ข้อมูลตั้งต้น(Input) | period จากรอบประมวลผล เช่น run 30/01/23 = 202301 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | [WS_RI_18 ค้นหาข้อมูลค่าส่งสอบจากระบบ CMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1122173109) |
| 6 | อธิบายรายละเอียด(Description) | ดึงข้อมูลจาก [WS_RI_18 ค้นหาข้อมูลค่าส่งสอบจากระบบ CMS](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1122173109) ตามรอบประมวลผล ให้ลบข้อมูลออกทั้ง 2 ตาราง และ insert ใหม่ตามรอบประมวลผล เช่น เมื่อ batch run ใหม่ตามรอบเดือนหรือมีการ กด run manual ที่หน้าจอ (ทั้งกรณี success และซ่อม error)key ในการลบคือ process_code*หมายเหตุ:* กรณีไม่พบข้อมูล ให้ทำการลบข้อมูลออกทั้ง 2 ตาราง และ insert รายการที่ [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) โดยบันทึก status เป็น success สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Backup เริ่มเวลา 08.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_14_R1statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typenullsum_recordcountauto_or_facultAround1 บันทึกข้อมูลลงที่ Backup detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNochar[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)policy_no 2claimNochar[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)claim_no 3riderPlanchar[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)rider_plan 4riderCodenumeric[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)rider_code 5isClaimAvailablenumeric[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)is_claim_available 6createdInvDatetimestamp[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)created_inv_date 7riGroupCodenumeric[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)ri_group_code 8riGroupNamechar[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)ri_group_name 9totalAmountnumeric[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)total_amount 10as400ClaimNochar[tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1)as400_claim_no สร้าง [tx_ri_process_hd](http://wiki.thaisamut.co.th/display/RDSINRI/01.+tx_ri_process_hd) สำหรับ Main เริ่มเวลา 22.00 น. โดยตรวจสอบ queue ตาม [ms_process](http://wiki.thaisamut.co.th/display/RDSBIZPAY/ms_process).seq_landing Click here to expand... Field NameValueri_process_hd_idauto generateprocess_codeRI_AUTO_14statusSuccess, Errorperiodณ วันที่ batch runri_typeCpolicy_typenullsum_recordcountauto_or_facultAround2 บันทึกข้อมูลลงที่ Main detail ดังนี้ Click here to expand... Service Parameter Landing Table No.NameTypeTableFieldCondition1policyNochar[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)policy_no 2claimNochar[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)claim_no 3riderPlanchar[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)rider_plan 4riderCodenumeric[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)rider_code 5isClaimAvailablenumeric[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)is_claim_available 6createdInvDatetimestamp[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)created_inv_date 7riGroupCodenumeric[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)ri_group_code 8riGroupNamechar[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)ri_group_name 9totalAmountnumeric[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)total_amount 10as400ClaimNochar[tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt)as400_claim_no |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_14_R1 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | null |
| sum_record | count |
| auto_or_facult | A |
| round | 1 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | char | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | policy_no |  |
| 2 | claimNo | char | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | claim_no |  |
| 3 | riderPlan | char | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | rider_plan |  |
| 4 | riderCode | numeric | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | rider_code |  |
| 5 | isClaimAvailable | numeric | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | is_claim_available |  |
| 6 | createdInvDate | timestamp | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | created_inv_date |  |
| 7 | riGroupCode | numeric | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | ri_group_code |  |
| 8 | riGroupName | char | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | ri_group_name |  |
| 9 | totalAmount | numeric | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | total_amount |  |
| 10 | as400ClaimNo | char | [tx_ri_inv_claim_dt_r1](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_inv_claim_dt_r1) | as400_claim_no |  |
| Field Name | Value |
| ri_process_hd_id | auto generate |
| process_code | RI_AUTO_14 |
| status | Success, Error |
| period | ณ วันที่ batch run |
| ri_type | C |
| policy_type | null |
| sum_record | count |
| auto_or_facult | A |
| round | 2 |
|  | Service Parameter |  | Landing Table |  |  |
| No. | Name | Type | Table | Field | Condition |
| 1 | policyNo | char | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | policy_no |  |
| 2 | claimNo | char | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | claim_no |  |
| 3 | riderPlan | char | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | rider_plan |  |
| 4 | riderCode | numeric | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | rider_code |  |
| 5 | isClaimAvailable | numeric | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | is_claim_available |  |
| 6 | createdInvDate | timestamp | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | created_inv_date |  |
| 7 | riGroupCode | numeric | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | ri_group_code |  |
| 8 | riGroupName | char | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | ri_group_name |  |
| 9 | totalAmount | numeric | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | total_amount |  |
| 10 | as400ClaimNo | char | [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt) | as400_claim_no |  |
| 7 | กรณีพบปัญหาการทำงานของ Batch Process | ส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Landing'process_code = 'RI_AUTO_14'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการ [[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name] วันที่ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> รายละเอียด ดังนี้Error Process[ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameResponse<Exception Message ที่ระบบ Throw Exception ออกมา> จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการ Run Batch นำเข้าข้อมูลกรมธรรม์ วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาที่กระบวนการนำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto วันที่ 31/08/2566 18:00:00 รายละเอียด ดังนี้**Error Process**RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto**Response**java.lang.RuntimeException: Call service has error Could not send Message. จึงเรียนมาเพื่อทราบ Individual New RI |
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

# IRI-PS-015 ประมวลผล Estimate (Manual)

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1123778576  
> **Page ID:** 1123778576  
> **Path:** Home / Current Version / 02. Process Specification / IRI-PS-015 ประมวลผล Estimate (Manual)

---

| **No.** | **Topic** | **Description** |
| --- | --- | --- |
| 1 | วัตถุประสงค์(Objective) | ประมวลผล Estimate (Auto) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล (Time) | - |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | - |
| 6 | อธิบายรายละเอียด(Description) | ตรวจสอบ Batch Process แสดงรายละเอียด ข้อมูลTableFieldConditionรหัสของ Batch Process tx_ri_process_hdprocess_codeเท่ากับ ms_process.process_code ที่มี ms_process.type = A ทั้งหมดสถานะผลการ Run Batch Process แต่ละครั้งtx_ri_process_hdstatusเท่ากับ Success ทั้งหมด รายชื่อ Batch รายชื่อ Batch ที่ต้อง Success ทั้งหมด **process_code****process_name**1RI_AUTO_00นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท 2RI_AUTO_01นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto 3RI_AUTO_02นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto4RI_AUTO_03 นำเข้าข้อมูลกรมธรรม์ PA (New,Renew) Auto5RI_AUTO_04นำเข้าข้อมูลกรมธรรม์ UL (New,Renew) Auto 6RI_AUTO_05นำเข้าข้อมูลกรมธรรม์อุตสาหกรรม (New,Renew) Auto 7RI_AUTO_06นำเข้าข้อมูลกรมธรรม์สามัญ (Master Claim) 8RI_AUTO_07นำเข้าข้อมูลกรมธรรม์สามัญ (Health Claim) 9RI_AUTO_08นำเข้าข้อมูลกรมธรรม์ PA (Claim)10RI_AUTO_09นำเข้าข้อมูลกรมธรรม์ UL (Claim) 11RI_AUTO_10นำเข้าข้อมูล Rate ทุนประกัน สามัญ 12RI_AUTO_11นำเข้าข้อมูล Rate Benefit Claim สามัญ 13RI_AUTO_13นำเข้าข้อมูลกรมธรรม์ส่งประกันต่อ CB Rider (Claim)14RI_AUTO_14นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS 15RI_AUTO_15นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Alteration) 17RI_AUTO_17นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) กรณีมี tx_ri_process_hd.process_code ใด Error ในรายการล่าสุดส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Process_Estimate'process_code = 'RI_xxx_xx'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameกระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00 เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Autoกระบวนการ RI_AUTO_03 : นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto จึงเรียนมาเพื่อทราบ Individual New RI งวดทำรายการtx_ri_process_hdperiodรอบ Period ล่าสุด กรณี Success ทั้งหมด**เลือก Treaty (Auto)** แสดงรายละเอียด ค่า Parameter ที่ได้รับมาจากหน้าจอข้อมูลParameterตัวอย่างข้อมูลcf_treaty_id{TREATY_ID}9treaty_code {TREATY_CODE}THREL_Ind_CI50_Riderperiod{PERIOD}202212fac_flag{FAC_FLAG}TRUEri_mode{RI_MODE}1 2. ตรวจสอบสถานะ Treatyข้อมูลTableFieldConditionรหัสของ Treaty Treaty[cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ)cf_treaty_idID ของ Treatyสถานะการใช้งานรายการ Treaty[cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ)statusเท่ากับ A3. กรณี Treaty ที่ [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).status = AUpdate [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).usage_status = IInsert รายการใหม่Field NameValueri_est_hd_idauto generateperiodงวดทำรายการ (period) เช่น 202312cf_reinsurer_idID Reinsurer ของ Treaty ที่ Run Processreinsurer_codeReinsurer Code ของ Treaty ที่ Run Processcf_treaty_idID ของ Treaty ที่ Run Processtreaty_codeTreaty Code ที่ Run ProcessstatusPROCESSING รอประมวลผลedw_statusnullri_premium_mode[cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).ri_premium_modefacult_flagFalseri_premium0ri_commission0claim_recovery0due_to0remarknullusage_statusA เข้าสู่กระบวนการถัดไปกรณี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).fac_flag = FALSE การคัดเลือกกรมธรรม์จาก [01. Auto (New&Renew)](http://wiki.thaisamut.co.th/x/dIITQw)กรณี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).fac_flag = TRUE การคัดเลือกกรมธรรม์จาก [02. Facult (New & Renew)](http://wiki.thaisamut.co.th/x/eIITQw)4. กรณี Treaty ที่ [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).status <> Aตรวจสอบ [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).tx_tmp_treaty_id ของรายการนั้นนำ [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).tx_tmp_treaty_id ที่ได้ ตรวจสอบใน [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ) เพื่อหารายการที่มี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).status = AUpdate [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).usage_status = I ที่รายการ [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) เดิมInsert รายการใหม่ Field NameValueri_est_hd_idauto generateperiodงวดทำรายการ (period) เช่น 202312cf_reinsurer_idID Reinsurer ของ Treaty ที่ Run Processreinsurer_codeReinsurer Code ของ Treaty ที่ Run Processcf_treaty_idด้วย [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).cf_treaty_id ใหม่ที่ได้มาtreaty_codeTreaty Code ที่ Run ProcessstatusPROCESSING รอประมวลผลedw_statusnullri_premium_mode[cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).ri_premium_modefacult_flagFalseri_premium0ri_commission0claim_recovery0due_to0remarknullusage_statusAเข้าสู่กระบวนการถัดไป กรณี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).fac_flag = FALSE การคัดเลือกกรมธรรม์จาก [01. Auto (New&Renew)](http://wiki.thaisamut.co.th/x/dIITQw)กรณี [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ).fac_flag = TRUE การคัดเลือกกรมธรรม์จาก [02. Facult (New & Renew)](http://wiki.thaisamut.co.th/x/eIITQw)5. Update หลังการประมวลผลข้อมูลTableFieldConditionผลการประมวลผล[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)statusประมวลผลทั้งหมด 5 รายการ[01. New&Renew Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445944)[02. Manual Claim](http://wiki.thaisamut.co.th/display/RDSINRI/02.+Manual+Claim)[03. Alteration Manual](http://wiki.thaisamut.co.th/display/RDSINRI/03.+Alteration+Manual)[04. Process Mapping Table Estimate & Bordereau (Manual)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445978)[05. Process Mapping Table SOA (Manual)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445980)กรณีประมวลผลสำเร็จ บันทึก 'SUCCESS'กรณีประมวลผลไม่สำเร็จ บันทึ 'ERROR'สาเหตุการประมวลผลไม่สำเร็จ[tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ)remark 6. ตรวจสอบ Template ID ของ รายการ Treaty ที่ประมวลผล เพื่อสร้าง File ตาม Template ที่กำหนดกรณีTableหมายเหตุกรณีไม่ใช่ FACcf_treaty.est_auto_template_id กรณี FACcf_treaty.est_fac_template_idกรณีไม่มีการกำหนด ให้ใช้ Template เดียวกับ กรณีไม่ใช่ FAC |
| ข้อมูล | Table | Field | Condition |
| รหัสของ Batch Process | tx_ri_process_hd | process_code | เท่ากับ ms_process.process_code ที่มี ms_process.type = A ทั้งหมด |
| สถานะผลการ Run Batch Process แต่ละครั้ง | tx_ri_process_hd | status | เท่ากับ Success ทั้งหมด รายชื่อ Batch รายชื่อ Batch ที่ต้อง Success ทั้งหมด **process_code****process_name**1RI_AUTO_00นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท 2RI_AUTO_01นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto 3RI_AUTO_02นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto4RI_AUTO_03 นำเข้าข้อมูลกรมธรรม์ PA (New,Renew) Auto5RI_AUTO_04นำเข้าข้อมูลกรมธรรม์ UL (New,Renew) Auto 6RI_AUTO_05นำเข้าข้อมูลกรมธรรม์อุตสาหกรรม (New,Renew) Auto 7RI_AUTO_06นำเข้าข้อมูลกรมธรรม์สามัญ (Master Claim) 8RI_AUTO_07นำเข้าข้อมูลกรมธรรม์สามัญ (Health Claim) 9RI_AUTO_08นำเข้าข้อมูลกรมธรรม์ PA (Claim)10RI_AUTO_09นำเข้าข้อมูลกรมธรรม์ UL (Claim) 11RI_AUTO_10นำเข้าข้อมูล Rate ทุนประกัน สามัญ 12RI_AUTO_11นำเข้าข้อมูล Rate Benefit Claim สามัญ 13RI_AUTO_13นำเข้าข้อมูลกรมธรรม์ส่งประกันต่อ CB Rider (Claim)14RI_AUTO_14นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS 15RI_AUTO_15นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Alteration) 17RI_AUTO_17นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) กรณีมี tx_ri_process_hd.process_code ใด Error ในรายการล่าสุดส่ง e-mail แจ้ง IT Supportemail_code = 'RI_Process_Estimate'process_code = 'RI_xxx_xx'นำ email_code มาค้นหาที่ตาราง [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email) โดยเทียบกับ [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_code <![CDATA[DB:reinsurance SELECT email_subject, email_from, email_to, email_cc FROM cf_email WHERE email_code = (:emailCode) AND status = &#39;A&#39;]]> นำ process_code มาค้นหาที่ตาราง [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process) โดยเทียบกับ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code <![CDATA[DB:reinsurance SELECT process_code, process_name FROM ms_process WHERE process_code = (:processCode)]]> นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้**From**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from**To**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to**CC**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc**SUBJECT**[cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> **DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameกระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name จึงเรียนมาเพื่อทราบ Individual New RI ตัวอย่าง e-mail **FROM**[appservice@ocean.co.th](mailto:appservice@ocean.co.th)**TO**[ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th)**CC** **SUBJECT**[Individual New RI] แจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00**DESCRIPTION**เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00 เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Autoกระบวนการ RI_AUTO_03 : นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto จึงเรียนมาเพื่อทราบ Individual New RI |
|  | **process_code** | **process_name** |
| 1 | RI_AUTO_00 | นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท |
| 2 | RI_AUTO_01 | นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto |
| 3 | RI_AUTO_02 | นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto |
| 4 | RI_AUTO_03 | นำเข้าข้อมูลกรมธรรม์ PA (New,Renew) Auto |
| 5 | RI_AUTO_04 | นำเข้าข้อมูลกรมธรรม์ UL (New,Renew) Auto |
| 6 | RI_AUTO_05 | นำเข้าข้อมูลกรมธรรม์อุตสาหกรรม (New,Renew) Auto |
| 7 | RI_AUTO_06 | นำเข้าข้อมูลกรมธรรม์สามัญ (Master Claim) |
| 8 | RI_AUTO_07 | นำเข้าข้อมูลกรมธรรม์สามัญ (Health Claim) |
| 9 | RI_AUTO_08 | นำเข้าข้อมูลกรมธรรม์ PA (Claim) |
| 10 | RI_AUTO_09 | นำเข้าข้อมูลกรมธรรม์ UL (Claim) |
| 11 | RI_AUTO_10 | นำเข้าข้อมูล Rate ทุนประกัน สามัญ |
| 12 | RI_AUTO_11 | นำเข้าข้อมูล Rate Benefit Claim สามัญ |
| 13 | RI_AUTO_13 | นำเข้าข้อมูลกรมธรรม์ส่งประกันต่อ CB Rider (Claim) |
| 14 | RI_AUTO_14 | นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS |
| 15 | RI_AUTO_15 | นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Alteration) |
| 17 | RI_AUTO_17 | นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) |
| **From** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_from |
| **To** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_to |
| **CC** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_cc |
| **SUBJECT** | [cf_email](http://wiki.thaisamut.co.th/display/RDSINRI/cf_email).email_subject วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> |
| **DESCRIPTION** | เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ <system date DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)> เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_nameกระบวนการ [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_code : [ms_process](http://wiki.thaisamut.co.th/display/RDSINRI/11.+ms_process).process_name จึงเรียนมาเพื่อทราบ Individual New RI |
| **FROM** | [appservice@ocean.co.th](mailto:appservice@ocean.co.th) |
| **TO** | [ITSupport@ocean.co.th](mailto:ITSupport@ocean.co.th) |
| **CC** |  |
| **SUBJECT** | [Individual New RI] แจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00 |
| **DESCRIPTION** | เรียน เจ้าหน้าที่ IT Support ขอแจ้งเกิดปัญหาการประมวลผล Estimate วันที่ 31/08/2566 18:00:00 เนื่องจากการ Run Batch นำเข้าข้อมูลกรมธรรม์มีปัญหา โดยมีรายการดังนี้กระบวนการ RI_AUTO_01 : นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Autoกระบวนการ RI_AUTO_03 : นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto จึงเรียนมาเพื่อทราบ Individual New RI |
| งวดทำรายการ | tx_ri_process_hd | period | รอบ Period ล่าสุด |
| ข้อมูล | Parameter | ตัวอย่างข้อมูล |
| cf_treaty_id | {TREATY_ID} | 9 |
| treaty_code | {TREATY_CODE} | THREL_Ind_CI50_Rider |
| period | {PERIOD} | 202212 |
| fac_flag | {FAC_FLAG} | TRUE |
| ri_mode | {RI_MODE} | 1 |
| ข้อมูล | Table | Field | Condition |
| รหัสของ Treaty Treaty | [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ) | cf_treaty_id | ID ของ Treaty |
| สถานะการใช้งานรายการ Treaty | [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ) | status | เท่ากับ A |
| Field Name | Value |
| ri_est_hd_id | auto generate |
| period | งวดทำรายการ (period) เช่น 202312 |
| cf_reinsurer_id | ID Reinsurer ของ Treaty ที่ Run Process |
| reinsurer_code | Reinsurer Code ของ Treaty ที่ Run Process |
| cf_treaty_id | ID ของ Treaty ที่ Run Process |
| treaty_code | Treaty Code ที่ Run Process |
| status | PROCESSING รอประมวลผล |
| edw_status | null |
| ri_premium_mode | [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).ri_premium_mode |
| facult_flag | False |
| ri_premium | 0 |
| ri_commission | 0 |
| claim_recovery | 0 |
| due_to | 0 |
| remark | null |
| usage_status | A |
| Field Name | Value |
| ri_est_hd_id | auto generate |
| period | งวดทำรายการ (period) เช่น 202312 |
| cf_reinsurer_id | ID Reinsurer ของ Treaty ที่ Run Process |
| reinsurer_code | Reinsurer Code ของ Treaty ที่ Run Process |
| cf_treaty_id | ด้วย [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).cf_treaty_id ใหม่ที่ได้มา |
| treaty_code | Treaty Code ที่ Run Process |
| status | PROCESSING รอประมวลผล |
| edw_status | null |
| ri_premium_mode | [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).ri_premium_mode |
| facult_flag | False |
| ri_premium | 0 |
| ri_commission | 0 |
| claim_recovery | 0 |
| due_to | 0 |
| remark | null |
| usage_status | A |
| ข้อมูล | Table | Field | Condition |
| ผลการประมวลผล | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | status | ประมวลผลทั้งหมด 5 รายการ[01. New&Renew Manual](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445944)[02. Manual Claim](http://wiki.thaisamut.co.th/display/RDSINRI/02.+Manual+Claim)[03. Alteration Manual](http://wiki.thaisamut.co.th/display/RDSINRI/03.+Alteration+Manual)[04. Process Mapping Table Estimate & Bordereau (Manual)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445978)[05. Process Mapping Table SOA (Manual)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1133445980)กรณีประมวลผลสำเร็จ บันทึก 'SUCCESS'กรณีประมวลผลไม่สำเร็จ บันทึ 'ERROR' |
| สาเหตุการประมวลผลไม่สำเร็จ | [tx_ri_est_hd](http://wiki.thaisamut.co.th/x/B4DKQQ) | remark |  |
| กรณี | Table | หมายเหตุ |
| กรณีไม่ใช่ FAC | cf_treaty.est_auto_template_id |  |
| กรณี FAC | cf_treaty.est_fac_template_id | กรณีไม่มีการกำหนด ให้ใช้ Template เดียวกับ กรณีไม่ใช่ FAC |

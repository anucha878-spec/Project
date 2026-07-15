===== PAGE 1309999106 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ประมวลผล Actual (Manual) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | Trigger จากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actualเมื่อกดประมวลผลระบบสร้างข้อมูล snapshot, staging เพียงครั้งเดียวต่อ YYYY/QQRIG-PS-03 Actual - Snapshot Landing TablesRIG-PS-05 Actual - Staging Tablesกรณีต้องการ update ข้อมูล snapshot, staging ต้องดำเนินการโดยกระบวนการ manual เท่านั้น |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบประมวลผลของข้อมูล (yyyyQQ) |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | Report NameReport TypeRIG-RP-001 Policy_{FROM}_{TO}_{TREATY}LND_STGRIG-RP-003 Act_PremiumLayer_{YYYY}{QQ}ACT_STGRIG-RP-004 Alteration_{YYYY}{QQ}ACT_STGRIG-RP-005 Premium_Movement_{YYYY}{QQ}ACT_STGRIG-RP-006 MemberOverAge_{YYYY}{QQ}ACT_STGRIG-RP-007 InvestigationExpense_{YYYY}{QQ}ACT_STGRIG-RP-017 BDR Act - Gibraltar (Reinsurer)ACT_BDRRIG-RP-018 BDR Act Thaire (Reinsurer)ACT_BDRRIG-RP-019 BDR Act - Daiichi (Reinsurer)ACT_BDRRIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW)ACT_BDRRIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW)ACT_BDRRIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ}ACT_SOA |
| 6 | อธิบายรายละเอียด(Description) | ทริกเกอร์ จากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual ให้ดำเนินการเริ่มทำงานตามขั้นตอนดังนี้1. ตรวจสอบ Treaty ที่ต้องประมวลผล (ACT)ประมวลผลตาม Treaty2. ประมวลผล Actual - DAI_Grp_Daiichi_Coins3. ประมวลผล Actual - GIB_Grp_Direct_EB4. ประมวลผล Actual - THREL_Grp_PA5. Mapping Database Actual BDR (ACT)6. ประมวลผล Actual SOA7. Mapping Output File (ACT)8. เก็บข้อมูล Export File9. แจ้งผลการการประมวลผล (ACT) |


===== PAGE 1289389366 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 1. ตรวจสอบ Treaty ที่ต้องประมวลผล (ACT) =====
1. ตรวจสอบ Treaty ใน Table Config
- ตรวจสอบข้อมูลใน cf_rig_treaty โดยมีเงื่อนไขดังนี้cf_rig_treaty.approve = TRUEcf_rig_treaty.status = APeriod ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_dateเก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- cf_rig_treaty.approve = TRUE
- cf_rig_treaty.status = A
- Period ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_date
- เก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- สร้างรายการที่ tx_rig_act_hd ดังนี้tx_rig_act_hd Fieldข้อมูลเงื่อนไขตัวอย่างrig_act_hd_id running no.1period รอบ Period ที่ประมวลผล202410data_quarter ปีของ Period ที่ประมวลผล ต่อด้วย QX โดยแปลง X จากการตรวจสอบเดือนการประมวลผล แบ่งออกเป็น 4 เลขดังนี้กรณีเดือนของ Period ที่ประมวลผล (เลขสองหลักท้ายของ period)= 01 หรือ 02 หรือ 03 แปลง X เป็น 1 จะได้ค่า Q1= 04 หรือ 05 หรือ 06 แปลง X เป็น 2 จะได้ค่า Q2= 07 หรือ 08 หรือ 09 แปลง X เป็น 3 จะได้ค่า Q3= 10 หรือ 11 หรือ 12 แปลง X เป็น 4 จะได้ค่า Q42024Q4losing_period รอบ Period ที่ประมวลผล202410cf_reinsurer_idcf_rig_treaty.cf_reinsurer_idของ Treaty ที่กำลังประมวลผล cf_treaty_idcf_rig_treaty.cf_rig_treaty_idของ Treaty ที่กำลังประมวลผล treaty_codecf_rig_treaty.treaty_codeจากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล status เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" edw_status NULL edw_status_desc NULL ri_std_hd_id NULL ri_std_hd_id_oic NULL ri_premium เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก ri_commission เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก claim_recovery เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก due_to เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก remark กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง usage_status เมื่อสร้างรายการครั้งแรกให้บันทึก A created_date now() created_by เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM updated_date NULL updated_by NULL
ค้นหา Treaty ทั้งหมดที่ถูก Config ไว้ แต่เลือกเฉพาะกรมธรรม์ที่เคยอนุมัติ Approve แล้วอย่างน้อยหนึ่งครั้ง และยังมีสถานะใช้งาน และยังมีวันที่เปิดใช้งานอยู่ในปัจจุบัน จากนั้นเก็บ ID ของ Treaty นั้นไว้เพื่อไปค้นหารายการรายละเอียด Config ของกรมธรรม์ต่อ
2. เตรียมข้อมูลประมวลผล
- นำรายการ Treaty ที่ผ่านเงื่อนไขข้อ 1 มาเตรียมข้อมูลสำหรับประมวลผลดังนี้Parameterเงื่อนไข ค่าที่เก็บลง Parameter{TREATY_CODE}ตาม {TREATY_ID} จากข้อ 1 cf_rig_treaty.treaty_code{RE_CODE}ตรวจสอบที่ cf_lookup_catalog ที่ cf_lookup_catalog.parent_id = 1000100นำ cf_rig_treaty.treaty_code เทียบกับ cf_lookup_catalog.description เก็บค่า cf_lookup_catalog.lookup_key ที่ได้{GENERAL_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_id ที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_general ที่ได้{CONDITION_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_condition ที่ได้{POLICY_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_policy ที่ได้{RIPREM_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_ri_premium ที่ได้
- ตรวจสอบ ID ของแต่ละรายการที่ถูก Approve ล่าสุด ของแต่ละหัวข้อParameterเงื่อนไขค่าที่เก็บลง Parameter{GENERAL_ID}ถ้า {GENERAL_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_general.cf_rig_treaty_id ที่รายการ cf_rig_treaty_general.status = "A"เก็บค่า cf_rig_treaty_general.cf_rig_treaty_general_id ที่ได้{CONDITION_ID}ถ้า {CONDITION_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_cond_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toเก็บค่า cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ที่ได้{POLICY_ID}ถ้า {POLICY_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_policy_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_policy_hd.status = "A"เก็บค่า cf_rig_treaty_policy_hd.cf_rig_treaty_policy_hd_id ที่ได้{RIPREM_ID}ถ้า {RIPREM_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_prem_rate_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_prem_rate_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_toเก็บค่า cf_rig_treaty_prem_rate_hd.cf_rig_treaty_prem_rate_hd_id ที่ได้
ค้นหา Reinsurer No ของ Treaty นั้นเพื่อนำไปค้นหากรมธรรม์ที่อยู่ภายใต้ Treaty นี้ทั้งหมด รวมถึงสถานะการใช้งาน Config ต่าง ๆ สำหรับเอาไว้เช็กต่อในการประมวลผล ถ้ามีการ Config ส่วนใดเป็น FALSE แต่มีการคำนวณที่ต้องเลือกใช้ ก็จะสามารถข้ามกระบวนการนั้นไปได้เลย
เก็บ ID ของรายการที่มีสถานะเป็น A เท่านั้น เนื่องจากภายใต้ Table Config จะมีรายการที่ถูก Config ไว้ทั้งหมด 3 แบบด้วยกัน คือ
- A: Active สถานะนี้เกิดจากการอนุมัติใช้งาน Treaty แล้วอย่างน้อย 1 ครั้ง และจะใช้ข้อมูลที่มีสถานะ A นี้สำหรับการประมวลผลทุกครั้ง
- I: Inactive สถานะนี้เกิดจากหลังการอนุมัติหรือมีการแก้ไขข้อมูลแล้วอนุมัติจนทำให้มีรายการสถานะ A ขึ้นมาใหม่แล้ว รายการสถานะ A เดิมจะต้องเปลี่ยนเป็น I เพื่อให้ระบบอ่านได้ถูกว่าต้องใช้ข้อมูลรายการไหนสำหรับการประมวลผล แต่ยังสามารถตรวจสอบประวัติรายการ A เดิมจาก I ได้
- D: สถานะนี้เกิดในครั้งแรกที่สร้างข้อมูล และเกิดขึ้นหลังจากการอนุมัติและกำลังอยู่ระหว่างการแก้ไขข้อมูลใหม่ เพราะระบบจะสร้างรายการขึ้นมาใหม่เสมอ เพื่อให้สถานะ A เดิมยังอยู่และนำไปประมวลผลได้ และ D จะใช้แก้ไขไปจนกว่าจะมีการอนุมัติ เมื่ออนุมัติรายการ D จะกลายเป็นรายการ A ใหม่ และรายการ A เก่า จะมีสถานะเป็น I ตามลำดับ


===== PAGE 1316553444 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 2. ประมวลผล Actual - DAI_Grp_Daiichi_Coins =====
### /*<![CDATA[*/
div.rbtoc1782955707186 {padding: 0px;}
div.rbtoc1782955707186 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955707186 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

การคำนวณ RI Claim (ACT)
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการต่อ
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปดำเนินการต่อ

##### การคำนวณ RI Claim (ACT)
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_death_claim, tx_stg_act_tpd_claim, tx_stg_act_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_health_claim.approved_dateดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น benefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_health_claim benefit = 4 parameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no{CLAIM_STATUS} claim_status เฉพาะรายการที่มีสถานะเป็น A0 และ A1 เท่านั้น (Suthanee.sa 20/03/2026)นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code{NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business .type_business_en ถ้าเป็นค่าว่าง ให้ออกเป็นค่าว่าง{SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{LAPSE_DATE}lapse_date{PAY_MODE}pay_type{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_health_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_health_claim.approved_date
- tx_stg_act_death_claim.approve_date
- tx_stg_act_tpd_claim.approved_date
- tx_stg_act_health_claim.approved_date
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น benefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_health_claim benefit = 4 parameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no{CLAIM_STATUS} claim_status เฉพาะรายการที่มีสถานะเป็น A0 และ A1 เท่านั้น (Suthanee.sa 20/03/2026)
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น benefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_health_claim benefit = 4 parameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no{CLAIM_STATUS} claim_status เฉพาะรายการที่มีสถานะเป็น A0 และ A1 เท่านั้น (Suthanee.sa 20/03/2026)
- tx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)
- tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 เท่านั้น (Suthanee.sa 20/03/2026)
- tx_stg_act_health_claim benefit = 4 parameterเงื่อนไขtx_stg_act_health_claim{POLICY_NO} policy_no{RE_CODE_FULL} reinsure_no{COV_FROM} effective_date{POLICY_YEAR} policy_year{CERT_NO} certific_cust_no{ATT_AGE} attn_age{SEX} sex{ACC_DATE} accident_date{APR_DATE} approve_date{CLAIM_TYPE} claim_type{CLAIM_IPD}ถ้า {CLAIM_TYPE} เท่ากับ IPDclaim_amount{CLAIM_OPD}ถ้า {CLAIM_TYPE} เท่ากับ OPDclaim_amount{CLAIM_DENTAL}ถ้า {CLAIM_TYPE} เท่ากับ Dentalclaim_amount{CLAIM_MED_ACC}ถ้า {CLAIM_TYPE} เท่ากับ MedAccidentclaim_amount{PAY_DATE} pay_date{CLAIM_CAUSE} claim_cause{INFROM_NO} notify_no{CLASS_NO} class_no{CLAIM_STATUS} claim_status เฉพาะรายการที่มีสถานะเป็น A0 และ A1 เท่านั้น (Suthanee.sa 20/03/2026)
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no{COM_DATE}first_date{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_STATUS}status{RI_POL_STATUS}ri_status{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code{NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business .type_business_en ถ้าเป็นค่าว่าง ให้ออกเป็นค่าว่าง{SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{LAPSE_DATE}lapse_date{PAY_MODE}pay_type{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆFix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- Fix ค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมทุกรายการparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_act_death_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeRound({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}เท่ากับ Accident DeathRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_act_tpd_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ TPDRound({L1_PER} / 100) * {CLAIM_TPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_TPD}เท่ากับ DismembermentRound({L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_act_health_claim{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}
- {CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ IPDRound({L1_PER} / 100) * {CLAIM_IPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_IPD}เท่ากับ OPDRound({L1_PER} / 100) * {CLAIM_OPD}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_OPD}เท่ากับ DentalRound({L1_PER} / 100) * {CLAIM_DENTAL}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DENTAL}เท่ากับ MedAccidentRound({L1_PER} / 100) * {CLAIM_MED_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_MED_ACC}


===== PAGE 1316553451 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 3. ประมวลผล Actual - GIB_Grp_Direct_EB =====
### /*<![CDATA[*/
div.rbtoc1782955707816 {padding: 0px;}
div.rbtoc1782955707816 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955707816 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/



การคัดเลือกกรมธรรม์ (ACT) สำหรับประมวลผล RI Premium / Movement (Revivals / Refund) / คำนวณMovement เมื่อครบปีกรมธรรม์
การคำนวณ RI Premium (ACT)
การคำนวณ RI Commission (ACT)
การคำนวณ RI Claim (ACT)
การคำนวณ Experience Refund (ACT)
การคำนวณและการออก Report
- การดึงข้อมูล จะดึงกรมธรรม์ทุกกรมที่ยังมีผลอยู่ใน Q ที่ประมวลผลอยู่เสมอ เช่น กรมเริ่มต้นเดือน 1 แต่ประมวลผล Q2 ก็จะต้องนำมาประมวลผล
- การคำนวณ Premium จะประมวลผลเฉพาะรายการในเดือนแรกของการเริ่มสัญญานั้นเท่านั้น คือ effective_date ตรงกับ period_date
- การคำนวณ Movement เมื่อครบปีกรมธรรม์ จะคำนวณเฉพาะรายการสุดท้ายของปีเท่านั้น คือรายการที่ end_date ตรงกับ {PERIOD_DATE_TO} ที่ระบบคำนวณขึ้นมา
- การคำนวณ Movement (Revivals / Refund) จะคำนวณทุกรอบที่ ไม่ตรงกับข้อ 2 และ 3
- ในกรณีที่เจอรายการที่ข้อ 1 จะมีการคำนวณ SA เสมอ แต่อาจจะไม่มีการคำนวณเบี้ย เพราะไม่ตรงกับข้อ 1 และไม่เข้าเงื่อนไขข้อ 4 แต่ถ้าอยู่ใน Q ต้องเอาไปออก BDR เสมอ
- การคำนวณเคลมจะเจอทั้งรายการที่อนุมัติและปฏิเสธ กรณีเจอปฏิเสธ ให้ตรงสอบก่อนว่ามีค่า Investigate Expense หรือไม่ ถ้ามีให้นำไปคำนวณและออก BDR ถ้าไม่มีให้ตัดออก
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "GIB_Grp_Direct_EB" ให้ดำเนินการต่อ

##### การคัดเลือกกรมธรรม์ (ACT) สำหรับประมวลผล RI Premium / Movement (Revivals / Refund) / คำนวณMovement เมื่อครบปีกรมธรรม์
การคัดเลือกกรมธรรม์ (ACT)
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี {PERIOD_MONTH} อยู่ในช่วงของวันที่ใน Quarter ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMMกรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์ เพราะใน 1 กรมธรรม์ต้องแยกออกเป็น 12 เดือน)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{PAY_MODE_GIB}payment_modeโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ effective_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปีparameter (เฉพาะรายการเดือนแรกของกรมธรรม์คำนวณเท่านั้น {COV_FROM} = {PERIOD_DATE_FROM}){Y_PREM_ACC}{PREM_ACC} * {PAY_MODE}{Y_PREM_LIFE_E1}({PREM_LIFE} + {PREM_E1}) * {PAY_MODE}tx_stg_act_all_policy (ต่อกรมธรรม์)parametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no{FIRST_DATE}first_date{COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล{LAPSE_DATE}lapse_date กรณีที่ lapse_date มีค่า ให้ตรวจสอบวันที่ lapse_date - 1 วัน #CR_LAPSE 21/04/2026กรณีที่ {POLICY_STATUS} = Lapsed และ มี lapse_date ให้นำวันที่ promise_date ถึง lapse_date มาตรวจสอบรอบในการประมวลผล หาก รอบ Quarter ที่กำลังประมวลผล ไม่ครอบคุลมช่วงวันที่นั้นแล้ว ไม่ต้องนำกรมธรรม์นั้นไปประมวลผล (suthanee.sa 10/04/2026)ถ้าวันที่่นั้นอยู่ในรอบ Quarter ที่กำลังประมวลผล หรือไม่ กรณีอยู่ในรอบที่ประมวลผล ให้ประมวลผลแบบครบรอบปีกรมธรรม์ #CR_LAPSE 21/04/2026โดยการนำ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} - {PERIOD_DATE_TO} ของทุกรอบใน Q นั้น#CR_LAPSE 21/04/2026 ถ้าวันที่ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} ของรายการที่น้อยที่สุดของรอบใน Q นั้นนับว่าเป็นรายการที่ Lap ก่อนก่อนรอบ Quarter ให้ย้อนกลับไปตรวจสอบกรมธรรม์นั้นว่าเคยทำกรมธรรม์ครบรอบปีหรือยัง โดยค้นหาใน tx_rig_act_bdr_new_renew โดยจะสามารถได้รายการมามากกว่า 1 รายการ ตาม Qtx_rig_act_bdr_new_renewใช้ parameter ของกรมธรรม์ที่กำลังประมวลผลอยู่ดังนี้ ไปค้นหาใน tx_rig_act_bdr_new_renewpolicy_no{POLICY_NO}policy_year{POLICY_YEAR_RI}effective_date_from{COV_FROM}ตรวจสอบ Field full_yearถ้ามีรายการที่เท่ากับ TRUE ไม่ต้องนำกรมธรรม์นั้นไปประมวลผลต่อถ้ามีรายการที่เท่ากับ FALSE ให้นำไปประมวลผลครบรอบปีโดย tx_rig_act_bdr_new_renew.rig_act_hd_id นั้น ใน tx_rig_act_hd.rig_act_hd_id ต้องมี tx_rig_act_hd.usage_status = A เท่านั้น{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}rate_flag (#CR_RATE suthanee.sa 12/05/2026) tx_stg_act_inforce_policy (ข้อมูลต้นสัญญาของกรมธรรม์)เฉพาะรายการที่ period_date อยู่ในช่วงของ Quater ที่กำลังประมวลผล หรือถ้าไม่มี ให้เลือกรายการก่อนหน้าที่อยู่ใกล้กับ Quater ที่กำลังประมวลผลมากที่สุดกรณีที่หยิบไปเจอรายการที่ no_member_life = 0 ให้ข้ามรายการนั้นไปหยิบรายการก่อนหน้า จนกว่าจะพบรอบที่มีค่า (suthanee.sa 24/04/2026 #ISSUE_176)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)เฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลกรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{SUM_LIFE_PREM} {L1_LIFE_PREM} + {L2_LIFE_PREM} + {L3_LIFE_PREM}{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{SUM_LIFE_EXTRA_PREM} {L1_LIFE_EXTRA_PREM} + {L2_LIFE_EXTRA_PREM} + {L3_LIFE_EXTRA_PREM}{SUM_LIFE_PREM_EX} {SUM_LIFE_PREM} + {SUM_LIFE_EXTRA_PREM}{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{SUM_ACC_PREM} {L1_ACC_PREM} + {L2_ACC_PREM} + {L3_ACC_PREM}{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_prem{SUM_ACC_EX_PREM} {L1_ACC_EX_PREM} + {L2_ACC_EX_PREM} + {L3_ACC_EX_PREM}{SUM_ACC_PREM_EX} {SUM_ACC_PREM} + {SUM_ACC_EX_PREM}กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} {L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} {L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_premส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_act_inforce_member #CR_RATEParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_life{L3_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_life{L2_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_accคำนวณหาค่าเฉลี่ยของ Rate สำหรับออก Report #CR_RATEParameterค่าที่เก็บลง Parameter{PREM_LIFE_RATE}Round(({SUM_LIFE_PREM_EX} / {SUM_LIFE_INS}) * 1000,2){PREM_ACC_RATE}Round(({SUM_ACC_PREM_EX} / {SUM_ACC_INS}) * 1000,2)tx_stg_act_member_over_ageparametertx_stg_act_member_over_age {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_act_prem_movement.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์นั้นสำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี {PERIOD_MONTH} อยู่ในช่วงของวันที่ใน Quarter ที่ต้องการประมวลผลโดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- โดยให้กำหนด {PERIOD_MONTH} จาก ปีและเดือนของ tx_stg_act_prem_movement.period_date รูปแบบ YYYYMM
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมด
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์ เพราะใน 1 กรมธรรม์ต้องแยกออกเป็น 12 เดือน)tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{PAY_MODE_GIB}payment_modeโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ effective_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date แปลงค่าเบี้ยให้เป็นรายปีparameter (เฉพาะรายการเดือนแรกของกรมธรรม์คำนวณเท่านั้น {COV_FROM} = {PERIOD_DATE_FROM}){Y_PREM_ACC}{PREM_ACC} * {PAY_MODE}{Y_PREM_LIFE_E1}({PREM_LIFE} + {PREM_E1}) * {PAY_MODE}tx_stg_act_all_policy (ต่อกรมธรรม์)parametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no{FIRST_DATE}first_date{COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล{LAPSE_DATE}lapse_date กรณีที่ lapse_date มีค่า ให้ตรวจสอบวันที่ lapse_date - 1 วัน #CR_LAPSE 21/04/2026กรณีที่ {POLICY_STATUS} = Lapsed และ มี lapse_date ให้นำวันที่ promise_date ถึง lapse_date มาตรวจสอบรอบในการประมวลผล หาก รอบ Quarter ที่กำลังประมวลผล ไม่ครอบคุลมช่วงวันที่นั้นแล้ว ไม่ต้องนำกรมธรรม์นั้นไปประมวลผล (suthanee.sa 10/04/2026)ถ้าวันที่่นั้นอยู่ในรอบ Quarter ที่กำลังประมวลผล หรือไม่ กรณีอยู่ในรอบที่ประมวลผล ให้ประมวลผลแบบครบรอบปีกรมธรรม์ #CR_LAPSE 21/04/2026โดยการนำ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} - {PERIOD_DATE_TO} ของทุกรอบใน Q นั้น#CR_LAPSE 21/04/2026 ถ้าวันที่ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} ของรายการที่น้อยที่สุดของรอบใน Q นั้นนับว่าเป็นรายการที่ Lap ก่อนก่อนรอบ Quarter ให้ย้อนกลับไปตรวจสอบกรมธรรม์นั้นว่าเคยทำกรมธรรม์ครบรอบปีหรือยัง โดยค้นหาใน tx_rig_act_bdr_new_renew โดยจะสามารถได้รายการมามากกว่า 1 รายการ ตาม Qtx_rig_act_bdr_new_renewใช้ parameter ของกรมธรรม์ที่กำลังประมวลผลอยู่ดังนี้ ไปค้นหาใน tx_rig_act_bdr_new_renewpolicy_no{POLICY_NO}policy_year{POLICY_YEAR_RI}effective_date_from{COV_FROM}ตรวจสอบ Field full_yearถ้ามีรายการที่เท่ากับ TRUE ไม่ต้องนำกรมธรรม์นั้นไปประมวลผลต่อถ้ามีรายการที่เท่ากับ FALSE ให้นำไปประมวลผลครบรอบปีโดย tx_rig_act_bdr_new_renew.rig_act_hd_id นั้น ใน tx_rig_act_hd.rig_act_hd_id ต้องมี tx_rig_act_hd.usage_status = A เท่านั้น{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}rate_flag (#CR_RATE suthanee.sa 12/05/2026) tx_stg_act_inforce_policy (ข้อมูลต้นสัญญาของกรมธรรม์)เฉพาะรายการที่ period_date อยู่ในช่วงของ Quater ที่กำลังประมวลผล หรือถ้าไม่มี ให้เลือกรายการก่อนหน้าที่อยู่ใกล้กับ Quater ที่กำลังประมวลผลมากที่สุดกรณีที่หยิบไปเจอรายการที่ no_member_life = 0 ให้ข้ามรายการนั้นไปหยิบรายการก่อนหน้า จนกว่าจะพบรอบที่มีค่า (suthanee.sa 24/04/2026 #ISSUE_176)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_deathtx_stg_act_prem_layer (ต่อรายการ)เฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลกรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{SUM_LIFE_PREM} {L1_LIFE_PREM} + {L2_LIFE_PREM} + {L3_LIFE_PREM}{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{SUM_LIFE_EXTRA_PREM} {L1_LIFE_EXTRA_PREM} + {L2_LIFE_EXTRA_PREM} + {L3_LIFE_EXTRA_PREM}{SUM_LIFE_PREM_EX} {SUM_LIFE_PREM} + {SUM_LIFE_EXTRA_PREM}{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{SUM_ACC_PREM} {L1_ACC_PREM} + {L2_ACC_PREM} + {L3_ACC_PREM}{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_prem{SUM_ACC_EX_PREM} {L1_ACC_EX_PREM} + {L2_ACC_EX_PREM} + {L3_ACC_EX_PREM}{SUM_ACC_PREM_EX} {SUM_ACC_PREM} + {SUM_ACC_EX_PREM}กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} {L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} {L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_premส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_act_inforce_member #CR_RATEParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_life{L3_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_life{L2_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_accคำนวณหาค่าเฉลี่ยของ Rate สำหรับออก Report #CR_RATEParameterค่าที่เก็บลง Parameter{PREM_LIFE_RATE}Round(({SUM_LIFE_PREM_EX} / {SUM_LIFE_INS}) * 1000,2){PREM_ACC_RATE}Round(({SUM_ACC_PREM_EX} / {SUM_ACC_INS}) * 1000,2)tx_stg_act_member_over_ageparametertx_stg_act_member_over_age {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{PAY_MODE_GIB}payment_modeโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2{COV_FROM}effective_date{COV_TO}end_date{MEM_PREVIOUS}no_mem_previous{MEM_ADD}no_mem_addition{MEM_CANCEL}no_mem_cancellation{MEM_TOT}no_mem_total{PREM_LIFE}premium_life{PREM_ACC}premium_accident{PREM_E1}premium_e1{PREM_LIFE_E1}premium_life + premium_e1{PERIOD_DATE_FROM}period_date{PERIOD_DATE_TO}บวกเพิ่มจาก period_date ไปอีก 1 เดือนตามตัวอย่างในตาราง{PERIOD_DATE_FROM}{PERIOD_DATE_TO}31/10/256629/11/256630/11/256630/12/256631/12/256630/01/256731/01/256728/02/256729/02/256730/03/256731/03/256730/04/2567{PERIOD_MONTH}ปีและเดือนของ effective_date{POLICY_YEAR}policy_year {PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date
- แปลงค่าเบี้ยให้เป็นรายปีparameter (เฉพาะรายการเดือนแรกของกรมธรรม์คำนวณเท่านั้น {COV_FROM} = {PERIOD_DATE_FROM}){Y_PREM_ACC}{PREM_ACC} * {PAY_MODE}{Y_PREM_LIFE_E1}({PREM_LIFE} + {PREM_E1}) * {PAY_MODE}
- tx_stg_act_all_policy (ต่อกรมธรรม์)parametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no{FIRST_DATE}first_date{COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_FROM}promise_date{COV_TO}end_date{POLICY_YEAR}policy_year{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed{LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล{LAPSE_DATE}lapse_date กรณีที่ lapse_date มีค่า ให้ตรวจสอบวันที่ lapse_date - 1 วัน #CR_LAPSE 21/04/2026กรณีที่ {POLICY_STATUS} = Lapsed และ มี lapse_date ให้นำวันที่ promise_date ถึง lapse_date มาตรวจสอบรอบในการประมวลผล หาก รอบ Quarter ที่กำลังประมวลผล ไม่ครอบคุลมช่วงวันที่นั้นแล้ว ไม่ต้องนำกรมธรรม์นั้นไปประมวลผล (suthanee.sa 10/04/2026)ถ้าวันที่่นั้นอยู่ในรอบ Quarter ที่กำลังประมวลผล หรือไม่ กรณีอยู่ในรอบที่ประมวลผล ให้ประมวลผลแบบครบรอบปีกรมธรรม์ #CR_LAPSE 21/04/2026โดยการนำ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} - {PERIOD_DATE_TO} ของทุกรอบใน Q นั้น#CR_LAPSE 21/04/2026 ถ้าวันที่ {LAPSE_DATE} ไปเทียบกับ {PERIOD_DATE_FROM} ของรายการที่น้อยที่สุดของรอบใน Q นั้นนับว่าเป็นรายการที่ Lap ก่อนก่อนรอบ Quarter ให้ย้อนกลับไปตรวจสอบกรมธรรม์นั้นว่าเคยทำกรมธรรม์ครบรอบปีหรือยัง โดยค้นหาใน tx_rig_act_bdr_new_renew โดยจะสามารถได้รายการมามากกว่า 1 รายการ ตาม Qtx_rig_act_bdr_new_renewใช้ parameter ของกรมธรรม์ที่กำลังประมวลผลอยู่ดังนี้ ไปค้นหาใน tx_rig_act_bdr_new_renewpolicy_no{POLICY_NO}policy_year{POLICY_YEAR_RI}effective_date_from{COV_FROM}ตรวจสอบ Field full_yearถ้ามีรายการที่เท่ากับ TRUE ไม่ต้องนำกรมธรรม์นั้นไปประมวลผลต่อถ้ามีรายการที่เท่ากับ FALSE ให้นำไปประมวลผลครบรอบปีโดย tx_rig_act_bdr_new_renew.rig_act_hd_id นั้น ใน tx_rig_act_hd.rig_act_hd_id ต้องมี tx_rig_act_hd.usage_status = A เท่านั้น{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}rate_flag (#CR_RATE suthanee.sa 12/05/2026)
- tx_stg_act_inforce_policy (ข้อมูลต้นสัญญาของกรมธรรม์)เฉพาะรายการที่ period_date อยู่ในช่วงของ Quater ที่กำลังประมวลผล หรือถ้าไม่มี ให้เลือกรายการก่อนหน้าที่อยู่ใกล้กับ Quater ที่กำลังประมวลผลมากที่สุดกรณีที่หยิบไปเจอรายการที่ no_member_life = 0 ให้ข้ามรายการนั้นไปหยิบรายการก่อนหน้า จนกว่าจะพบรอบที่มีค่า (suthanee.sa 24/04/2026 #ISSUE_176)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- tx_stg_act_prem_layer (ต่อรายการ)เฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลกรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{SUM_LIFE_PREM} {L1_LIFE_PREM} + {L2_LIFE_PREM} + {L3_LIFE_PREM}{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{SUM_LIFE_EXTRA_PREM} {L1_LIFE_EXTRA_PREM} + {L2_LIFE_EXTRA_PREM} + {L3_LIFE_EXTRA_PREM}{SUM_LIFE_PREM_EX} {SUM_LIFE_PREM} + {SUM_LIFE_EXTRA_PREM}{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{SUM_ACC_PREM} {L1_ACC_PREM} + {L2_ACC_PREM} + {L3_ACC_PREM}{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_prem{SUM_ACC_EX_PREM} {L1_ACC_EX_PREM} + {L2_ACC_EX_PREM} + {L3_ACC_EX_PREM}{SUM_ACC_PREM_EX} {SUM_ACC_PREM} + {SUM_ACC_EX_PREM}กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} {L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} {L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_premส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_act_inforce_member #CR_RATEParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_life{L3_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_life{L2_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_accคำนวณหาค่าเฉลี่ยของ Rate สำหรับออก Report #CR_RATEParameterค่าที่เก็บลง Parameter{PREM_LIFE_RATE}Round(({SUM_LIFE_PREM_EX} / {SUM_LIFE_INS}) * 1000,2){PREM_ACC_RATE}Round(({SUM_ACC_PREM_EX} / {SUM_ACC_INS}) * 1000,2)
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L2_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2life_prem_rate{L3_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate{L2_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L2accident_prem_rate{L3_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L3accident_prem_rate{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{SUM_LIFE_PREM} {L1_LIFE_PREM} + {L2_LIFE_PREM} + {L3_LIFE_PREM}{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{SUM_LIFE_EXTRA_PREM} {L1_LIFE_EXTRA_PREM} + {L2_LIFE_EXTRA_PREM} + {L3_LIFE_EXTRA_PREM}{SUM_LIFE_PREM_EX} {SUM_LIFE_PREM} + {SUM_LIFE_EXTRA_PREM}{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{SUM_ACC_PREM} {L1_ACC_PREM} + {L2_ACC_PREM} + {L3_ACC_PREM}{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_prem{SUM_ACC_EX_PREM} {L1_ACC_EX_PREM} + {L2_ACC_EX_PREM} + {L3_ACC_EX_PREM}{SUM_ACC_PREM_EX} {SUM_ACC_PREM} + {SUM_ACC_EX_PREM}
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} {L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} {L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_premส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_act_inforce_member #CR_RATEParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_life{L3_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_life{L2_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_accคำนวณหาค่าเฉลี่ยของ Rate สำหรับออก Report #CR_RATEParameterค่าที่เก็บลง Parameter{PREM_LIFE_RATE}Round(({SUM_LIFE_PREM_EX} / {SUM_LIFE_INS}) * 1000,2){PREM_ACC_RATE}Round(({SUM_ACC_PREM_EX} / {SUM_ACC_INS}) * 1000,2)
- ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์parametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} {L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} {L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_prem{L2_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_prem{L3_LIFE_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_prem{L1_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L1life_extra_prem{L2_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L2life_extra_prem{L3_LIFE_EXTRA_PREM}ถ้า tx_stg_act_prem_layer.level = L3life_extra_prem{L1_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_prem{L2_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_prem{L3_ACC_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_prem{L1_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L1accident_extra_prem{L2_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L2accident_extra_prem{L3_ACC_EX_PREM}ถ้า tx_stg_act_prem_layer.level = L3accident_extra_prem
- ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_act_inforce_member #CR_RATEParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_life{L3_INS_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_life{L2_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_act_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_act_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_act_inforce_member.prem_rate_acc
- คำนวณหาค่าเฉลี่ยของ Rate สำหรับออก Report #CR_RATEParameterค่าที่เก็บลง Parameter{PREM_LIFE_RATE}Round(({SUM_LIFE_PREM_EX} / {SUM_LIFE_INS}) * 1000,2){PREM_ACC_RATE}Round(({SUM_ACC_PREM_EX} / {SUM_ACC_INS}) * 1000,2)
- tx_stg_act_member_over_ageparametertx_stg_act_member_over_age {POLICY_NO}policy_no{CERT_NO}cert_no{POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{Y_SUM_ACC_PREM_OVER}ผลรวม {Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {POLICY_YEAR}
3. กรมธรรม์ที่ end_date ตรงกับ {PERIOD_DATE_TO}
- กรณีเลือกไปเจอกรมธรรม์ที่มี เดือนและปี tx_stg_act_prem_movement.end_date ตรงกับ {PERIOD_DATE_TO} ให้ดึงรายการกรมธรรม์เดียวกัน ที่มี tx_stg_act_prem_movement.policy_year เดียวกันของรายการนั้นมาทั้งหมดtx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1 tx_stg_act_member_over_ageparametertx_stg_act_member_over_age{POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}
- tx_stg_act_prem_movement parametertx_stg_act_prem_movement{POLICY_NO}policy_no{RE_CODE_FULL}reinsured_no{BF_PAY_MODE}payment_modeโหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2{BF_POLICY_YEAR}policy_year{BF_COV_FROM}effective_date{BF_COV_TO}end_date{BF_SUM_PREM_LIFE}ผลรวมของทั้ง 12 เดือน premium_life{BF_SUM_PREM_ACC}ผลรวมของทั้ง 12 เดือน premium_accident{BF_SUM_PREM_E1}ผลรวมของทั้ง 12 เดือน premium_e1{BF_SUM_PREM_LIFE_E1}premium_life + premium_e1
- tx_stg_act_member_over_ageparametertx_stg_act_member_over_age{POLICY_NO}policy_no{CERT_NO}cert_no{BF_POLICY_YEAR}policy_year{AGE}age{ACC_INS}accident_insure{ACC_PREM}accident_premium{BF_Y_ACC_PREM_OVER}{ACC_PREM} * {PAY_MODE}{BF_Y_SUM_ACC_PREM_OVER}ผลรวม {BF_Y_ACC_PREM_OVER} ของทุกคน ใน {POLICY_NO} เดียวกัน และ {BF_POLICY_YEAR}

##### การคำนวณ RI Premium (ACT)
การคำนวณ RI Premium (ACT)
2. เตรียมข้อมูล Layer
เตรียมข้อมูล Layer ดังนี้
โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}
| Parameter | เงื่อนไขการค้นหา | ค่าที่เก็บลง Parameter |
| {L1_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.minimum |
| {L1_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.maximum |
| {L1_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L1 | cf_rig_treaty_cond_dt.percent_re |
| {L2_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.minimum |
| {L2_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.maximum |
| {L2_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L2 | cf_rig_treaty_cond_dt.percent_re |
| {L3_MIN} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.minimum |
| {L3_MAX} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.maximum |
| {L3_PER} | ถ้า cf_rig_treaty_cond_dt.layer = L3 | cf_rig_treaty_cond_dt.percent_re |
| {L1_L2_MID} |  | {L2_MAX} - {L1_MAX} |
3. คำนวณแยก Layer
คำนวณแยก Layer ของกรมธรรม์
| ความคุ้มครอง | Parameter | คำนวณ |
| LIFE | {L2_SA_LIFE} | Round( {L2_LIFE_INS} − ({L1_MAX} * {L2_MEM_LIFE}) + ({L1_L2_MID} * {L3_MEM_LIFE}) , 2 ) |
| {L3_SA_LIFE} | Round( {L3_LIFE_INS} − ({L2_MAX} * {L3_MEM_LIFE}) , 2 ) |
| {L1_SA_LIFE} | {INS_LIFE} − {L2_SA_LIFE} − {L3_SA_LIFE} |
| {TOT_SA_LIFE} | {L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} |
| {L1_SR_LIFE} | Round( {L1_SA_LIFE} * {L1_PER} / 100 , 2 ) |
| {L2_SR_LIFE} | Round( {L2_SA_LIFE} * {L2_PER} / 100 , 2 ) |
| {L3_SR_LIFE} | Round( {L3_SA_LIFE} * {L3_PER} / 100 , 2 ) |
| {TOT_SR_LIFE} | {L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} |
| ACC | {L2_SA_ACC} | Round( {L2_ACC_INS} − ({L1_MAX} * {L2_MEM_ACC}) + ({L1_L2_MID} * {L3_MEM_ACC}) , 2 ) |
| {L3_SA_ACC} | Round( {L3_ACC_INS} − ({L2_MAX} * {L3_MEM_ACC}) , 2 ) |
| {L1_SA_ACC} | {INS_ACC_DEATH} − {L2_SA_ACC} − {L3_SA_ACC} |
| {TOT_SA_ACC} | {L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} |
| {L1_SR_ACC} | Round( {L1_SA_ACC} * {L1_PER} / 100 , 2 ) |
| {L2_SR_ACC} | Round( {L2_SA_ACC} * {L2_PER} / 100 , 2 ) |
| {L3_SR_ACC} | Round( {L3_SA_ACC} * {L3_PER} / 100 , 2 ) |
| {TOT_SR_ACC} | {L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC} |
4. คำนวณ Premium
- เลือกเฉพาะรายการที่ ปีและเดือนของ {COV_FROM} เท่ากับ {PERIOD_MONTH} (นับเป็นรายการแรกของกรมธรรม์นั้น ๆ ต้องคำนวณเบี้ย)
- หาเบี้ยตั้งต้นของ Accident นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)เก็บค่าใน {Y_SUM_PREM_ACC}
- นำค่า {Y_PREM_ACC} - {Y_SUM_ACC_PREM_OVER} (ของ {POLICY_YEAR} เดียวกับรายการที่กำลังประมวลผล)
- เก็บค่าใน {Y_SUM_PREM_ACC}
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)คำนวณดังนี้ (ในกรณีที่ไม่มีทุนความคุ้มครองใน Layer ใด ไม่ต้องคำนวณใน Layer นั้น) #CR_RATE ความคุ้มครองParameterคำนวณLIFE{L2_PREM_LIFE}Round( ( {L2_LIFE_PREM_RATE} * {PAY_MODE} ) * {L2_SA_LIFE} / 1000 , 2){L3_PREM_LIFE}Round( ( {L3_LIFE_PREM_RATE} * {PAY_MODE} ) * {L3_SA_LIFE} / 1000 , 2){L1_PREM_LIFE}Round( {Y_PREM_LIFE_E1} - {L2_PREM_LIFE} - {L3_PREM_LIFE} , 2){TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}Round( {L1_PREM_LIFE} * {L1_PER} / 100 , 2){L2_RI_PREM_LIFE}Round( {L2_PREM_LIFE} * {L2_PER} / 100 , 2){L3_RI_PREM_LIFE}Round( {L3_PREM_LIFE} * {L3_PER} / 100 , 2){TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}ACC{L2_PREM_ACC}Round( ( {L2_ACC_PREM_RATE} * {PAY_MODE} ) * {L2_SA_ACC} / 1000 , 2){L3_PREM_ACC}Round( ( {L3_ACC_PREM_RATE} * {PAY_MODE} ) * {L3_SA_ACC} / 1000 , 2){L1_PREM_ACC}Round( {Y_SUM_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC} , 2){TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC} {L1_RI_PREM_ACC}Round( {L1_PREM_ACC} * {L1_PER} / 100 , 2){L2_RI_PREM_ACC}Round( {L2_PREM_ACC} * {L2_PER} / 100 , 2){L3_RI_PREM_ACC}Round( {L3_PREM_ACC} * {L3_PER} / 100 , 2){TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEคำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_MODE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_MODE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})){L2_PREM_LIFE_BY_MEM}คนที่อยู่ใน Layer 3 ต้องคำนวณใน Layer 2 ด้วย(({PAY_MODE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_MODE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) +(({PAY_MODE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_MODE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}คนที่อยู่ใน Layer 3 ต้องคำนวณใน Layer 2 ด้วย(({PAY_MODE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) +(({PAY_MODE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) +(({PAY_MODE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round( {Y_PREM_LIFE_E1} - {L2_PREM_LIFE} - {L3_PREM_LIFE} , 2){TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}Round( {L1_PREM_LIFE} * {L1_PER} / 100 , 2){L2_RI_PREM_LIFE}Round( {L2_PREM_LIFE} * {L2_PER} / 100 , 2){L3_RI_PREM_LIFE}Round( {L3_PREM_LIFE} * {L3_PER} / 100 , 2){TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}{L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round( {Y_SUM_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC} , 2){TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC} {L1_RI_PREM_ACC}Round( {L1_PREM_ACC} * {L1_PER} / 100 , 2){L2_RI_PREM_ACC}Round( {L2_PREM_ACC} * {L2_PER} / 100 , 2){L3_RI_PREM_ACC}Round( {L3_PREM_ACC} * {L3_PER} / 100 , 2){TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- คำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_MODE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_MODE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})){L2_PREM_LIFE_BY_MEM}คนที่อยู่ใน Layer 3 ต้องคำนวณใน Layer 2 ด้วย(({PAY_MODE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_MODE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) +(({PAY_MODE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_MODE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}คนที่อยู่ใน Layer 3 ต้องคำนวณใน Layer 2 ด้วย(({PAY_MODE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) +(({PAY_MODE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) +(({PAY_MODE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) +(({PAY_MODE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})
- รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round( {Y_PREM_LIFE_E1} - {L2_PREM_LIFE} - {L3_PREM_LIFE} , 2){TOT_PREM_LIFE}{L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{L1_RI_PREM_LIFE}Round( {L1_PREM_LIFE} * {L1_PER} / 100 , 2){L2_RI_PREM_LIFE}Round( {L2_PREM_LIFE} * {L2_PER} / 100 , 2){L3_RI_PREM_LIFE}Round( {L3_PREM_LIFE} * {L3_PER} / 100 , 2){TOT_RI_PREM_LIFE}{L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}{L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round( {Y_SUM_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC} , 2){TOT_PREM_ACC}{L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC} {L1_RI_PREM_ACC}Round( {L1_PREM_ACC} * {L1_PER} / 100 , 2){L2_RI_PREM_ACC}Round( {L2_PREM_ACC} * {L2_PER} / 100 , 2){L3_RI_PREM_ACC}Round( {L3_PREM_ACC} * {L3_PER} / 100 , 2){TOT_RI_PREM_ACC}{L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- นำกรมธรรม์ที่คำนวณ Premium ทั้งหมดมาตรวจสอบเงื่อนไขดังนี้ (#CR_EXREFUND Suthanee.sa 28/04/2026) เลือกเฉพาะกรมธรรม์ที่tx_stg_act_all_policy.ri_status <> Lapsedนำกรมธรรม์ทั้งหมดตรวจสอบใน tx_stg_act_exp_refund โดย กรมธรรม์ที่ถูกคำนวณในรอบปัจจุบัน จะมี policy_year เป็นรอบปีปกติตรวจสอบว่า tx_stg_act_all_policy.expreience_refund ของ tx_stg_act_all_policy.policy_year - 1 ต้องมีค่า = Yesนำกรมธรรม์ที่ได้ไปตรวจสอบต่อtx_stg_act_all_policy.policy_no = tx_stg_act_exp_refund.policy_no ให้ tx_stg_act_all_policy.policy_year - 1 = tx_stg_act_exp_refund.policy_year tx_stg_act_exp_refund.premium_life และ tx_stg_act_exp_refund.premium_accident ไม่เท่ากับ 0 (มีค่าเป็น 0 ตัวใดตัวหนึ่งได้)กรณีไม่พบข้อมูลที่ตรงกัน ให้บันทึกกรมธรรม์เหล่านั้นใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "008" <![CDATA[ต้องการตรวจสอบว่ากรมธรรม์ที่มีการต่อสัญญาใหม่ทั้งหมด และกรมธรรม์ปีก่อนหน้านี้สถานะว่าต้องจ่าย expreience_refund ว่ามียอดจ่าย expreience_refund หรือไม่]]>
- เลือกเฉพาะกรมธรรม์ที่tx_stg_act_all_policy.ri_status <> Lapsed
- tx_stg_act_all_policy.ri_status <> Lapsed
- นำกรมธรรม์ทั้งหมดตรวจสอบใน tx_stg_act_exp_refund โดย กรมธรรม์ที่ถูกคำนวณในรอบปัจจุบัน จะมี policy_year เป็นรอบปีปกติตรวจสอบว่า tx_stg_act_all_policy.expreience_refund ของ tx_stg_act_all_policy.policy_year - 1 ต้องมีค่า = Yesนำกรมธรรม์ที่ได้ไปตรวจสอบต่อtx_stg_act_all_policy.policy_no = tx_stg_act_exp_refund.policy_no ให้ tx_stg_act_all_policy.policy_year - 1 = tx_stg_act_exp_refund.policy_year tx_stg_act_exp_refund.premium_life และ tx_stg_act_exp_refund.premium_accident ไม่เท่ากับ 0 (มีค่าเป็น 0 ตัวใดตัวหนึ่งได้)
- ตรวจสอบว่า tx_stg_act_all_policy.expreience_refund ของ tx_stg_act_all_policy.policy_year - 1 ต้องมีค่า = Yes
- นำกรมธรรม์ที่ได้ไปตรวจสอบต่อtx_stg_act_all_policy.policy_no = tx_stg_act_exp_refund.policy_no ให้ tx_stg_act_all_policy.policy_year - 1 = tx_stg_act_exp_refund.policy_year tx_stg_act_exp_refund.premium_life และ tx_stg_act_exp_refund.premium_accident ไม่เท่ากับ 0 (มีค่าเป็น 0 ตัวใดตัวหนึ่งได้)
- tx_stg_act_all_policy.policy_no = tx_stg_act_exp_refund.policy_no
- ให้ tx_stg_act_all_policy.policy_year - 1 = tx_stg_act_exp_refund.policy_year
- tx_stg_act_exp_refund.premium_life และ tx_stg_act_exp_refund.premium_accident ไม่เท่ากับ 0 (มีค่าเป็น 0 ตัวใดตัวหนึ่งได้)
- กรณีไม่พบข้อมูลที่ตรงกัน ให้บันทึกกรมธรรม์เหล่านั้นใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "008"
5. คำนวณ Movement (Revivals / Refund)
1. คำนวณ Movement ระหว่างปีกรมธรรม์
- เลือกเฉพาะรายการที่ ปีและเดือนของ {COV_FROM} ไม่เท่ากับ {PERIOD_MONTH} (นับเป็นรายการแรกของกรมธรรม์นั้น ๆ ต้องคำนวณเบี้ย)
- เก็บข้อมูลใน Level 1 เท่านั้น
- ตรวจสอบ {PAY_MODE} ของกรมธรรม์นั้นถ้าเท่ากับ 1Parameterคำนวณ{REVIVAL_PREM_LIFE}{PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0ถ้าไม่เท่ากับ 1Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0
- ถ้าเท่ากับ 1Parameterคำนวณ{REVIVAL_PREM_LIFE}{PREM_LIFE_E1} ≥ 0{REVIVAL_PREM_ACC}{PREM_ACC} ≥ 0{REFUND_PREM_LIFE}{PREM_LIFE_E1} < 0{REFUND_PREM_ACC}{PREM_ACC} < 0
- ถ้าไม่เท่ากับ 1Parameterคำนวณ{REVIVAL_PREM_LIFE}0{REVIVAL_PREM_ACC}0{REFUND_PREM_LIFE}0{REFUND_PREM_ACC}0
- รวมทุกรายการภายในปีกรมเดียวกันเข้าด้วยกันParameterคำนวณ{SUM_REVIVAL_PREM_LIFE}SUM({REVIVAL_PREM_LIFE}){SUM_REVIVAL_PREM_ACC}SUM({REVIVAL_PREM_ACC}){SUM_REFUND_PREM_LIFE}SUM({REFUND_PREM_LIFE}){SUM_REFUND_PREM_ACC}SUM({REFUND_PREM_ACC})
- คำนวณส่วน Reinsurance Parameter คำนวณ{RI_SUM_REVIVAL_PREM_LIFE}Round( {SUM_REVIVAL_PREM_LIFE} * {L1_PER} / 100 , 2){RI_SUM_REVIVAL_PREM_ACC}Round( {SUM_REVIVAL_PREM_ACC} * {L1_PER} / 100 , 2){RI_SUM_REFUND_PREM_LIFE}Round( {SUM_REFUND_PREM_LIFE} * {L1_PER} / 100 , 2){RI_SUM_REFUND_PREM_ACC}Round( {SUM_REFUND_PREM_ACC} * {L1_PER} / 100 , 2)
6. คำนวณกรณีครบปีกรมธรรม์
1. ค้นหา Premium ของทั้งปีที่จ่ายไปแล้ว โดยค้นหาใน tx_rig_act_bdr_new_renew โดยจะสามารถได้รายการมามากกว่า 1 รายการ ตาม Q
| tx_rig_act_bdr_new_renew | ใช้ parameter ของกรมธรรม์ที่กำลังประมวลผลอยู่ดังนี้ ไปค้นหาใน tx_rig_act_bdr_new_renew |
| policy_no | {POLICY_NO} |
| policy_year | {POLICY_YEAR_RI} |
| effective_date_from | {COV_FROM} |
| โดย tx_rig_act_bdr_new_renew.rig_act_hd_id นั้น ใน tx_rig_act_hd.rig_act_hd_id ต้องมี tx_rig_act_hd.usage_status = A เท่านั้น (suthanee.sa 26/02/2026) |
2. รวม Premium ของกรมทุก Q ดังนี้
| Parameter | tx_rig_act_bdr_new_renew |
| {CURRENT_PAY_PREM_LIFE} | tot_ori_tl_prem_life |
| {CURRENT_PAY_PREM_ACC} | tot_ori_tl_prem_add |
3. ในกรณีที่รอบ Q นั้น มีการ คำนวณ Movement (Revivals / Refund) ด้วย ให้รวมค่า เหล่านี้ใน parameter ข้อ 2 ด้วย (รอบนี้ไม่ได้บันทึกในฐานข้อมูล ไม่ต้องรวมเพิ่มเข้ามา มันจะทำให้ข้อมูลเบิ้ล)
| Parameter | ค่าที่ได้จากการคำนวณ Movement (Revivals / Refund) ในเดือนก่อนหน้าใน Q เดียวกัน |
| {CURRENT_PAY_PREM_LIFE} | {SUM_REVIVAL_PREM_LIFE} - {SUM_REFUND_PREM_LIFE} |
| {CURRENT_PAY_PREM_ACC} | {SUM_REVIVAL_PREM_ACC} - {SUM_REFUND_PREM_ACC} |
4. {SUM_PREM_LIFE_YBEFORE} = {BF_SUM_PREM_LIFE_E1} - {CURRENT_PAY_PREM_LIFE}
5. {SUM_PREM_ACC_YBEFORE} = {BF_SUM_PREM_ACC} - {BF_Y_SUM_ACC_PREM_OVER} - {CURRENT_PAY_PREM_ACC}
| Parameter | คำนวณ |
| {SUM_REVIVAL_PREM_LIFE} | {SUM_PREM_LIFE_YBEFORE} ≥ 0 |
| {SUM_REVIVAL_PREM_ACC} | {SUM_PREM_ACC_YBEFORE} ≥ 0 |
| {SUM_REFUND_PREM_LIFE} | {SUM_PREM_LIFE_YBEFORE} < 0 |
| {SUM_REFUND_PREM_ACC} | {SUM_PREM_ACC_YBEFORE} < 0 |
6. คำนวณส่วน Reinsurance
| Parameter | คำนวณ |
| {RI_SUM_REVIVAL_PREM_LIFE} | Round( {SUM_REVIVAL_PREM_LIFE} * {L1_PER} / 100 , 2) |
| {RI_SUM_REVIVAL_PREM_ACC} | Round( {SUM_REVIVAL_PREM_ACC} * {L1_PER} / 100 , 2) |
| {RI_SUM_REFUND_PREM_LIFE} | Round( {SUM_REFUND_PREM_LIFE} * {L1_PER} / 100 , 2) |
| {RI_SUM_REFUND_PREM_ACC} | Round( {SUM_REFUND_PREM_ACC} * {L1_PER} / 100 , 2) |
7. เป็นกรณีกรมธรรม์ครบรอบปี หรือการคำนวณแบบครบรอบปี ให้เก็บ {FULL_YEAR} = TRUE (#CR_LAPSE suthanee.sa 21/04/2026)
7. คำนวณเบี้ยทั้งหมด
- คำนวณ Premium ทั้งหมดของแต่ละกรมธรรม์ (suthanee.sa 16/04/2026)Parameterคำนวณ{L1_TL_PREM_LIFE}{L1_PREM_LIFE} + {SUM_REVIVAL_PREM_LIFE} - {SUM_REFUND_PREM_LIFE}{L2_TL_PREM_LIFE}{L2_PREM_LIFE}{L3_TL_PREM_LIFE}{L3_PREM_LIFE}{L1_TL_PREM_ACC}{L1_PREM_ACC} + {SUM_REVIVAL_PREM_ACC} - {SUM_REFUND_PREM_ACC}{L2_TL_PREM_ACC}{L2_PREM_ACC}{L3_TL_PREM_ACC}{L3_PREM_ACC}
- คำนวณ RI Premium ทั้งหมดของแต่ละกรมธรรม์Parameterคำนวณ {RI_L1_TL_PREM_LIFE}{L1_RI_PREM_LIFE} + {RI_SUM_REVIVAL_PREM_LIFE} - {RI_SUM_REFUND_PREM_LIFE}(suthanee.sa 16/04/2026){RI_L2_TL_PREM_LIFE}{L2_RI_PREM_LIFE}(suthanee.sa 16/04/2026){RI_L3_TL_PREM_LIFE}{L3_RI_PREM_LIFE}(suthanee.sa 16/04/2026){TOT_RI_TL_PREM_LIFE}{RI_L1_TL_PREM_LIFE} + {RI_L2_TL_PREM_LIFE} + {RI_L3_TL_PREM_LIFE} {RI_L1_TL_PREM_ACC}{L1_RI_PREM_ACC} + {RI_SUM_REVIVAL_PREM_ACC} - {RI_SUM_REFUND_PREM_ACC}(suthanee.sa 16/04/2026){RI_L2_TL_PREM_ACC}{L2_RI_PREM_ACC}(suthanee.sa 16/04/2026){RI_L3_TL_PREM_ACC}{L3_RI_PREM_ACC}(suthanee.sa 16/04/2026){TOT_RI_TL_PREM_ACC}{RI_L1_TL_PREM_ACC} + {RI_L2_TL_PREM_ACC} + {RI_L3_TL_PREM_ACC}
7. คำนวณ Rate สำหรับออก Report
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEParameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026) #CR_RATEParameterคำนวณ{PREM_RATE_LIFE_REPORT}Round( ({PREM_LIFE_RATE} * {PAY_MODE}) , 4) Round((({SUM_LIFE_PREM_EX} * {PAY_MODE}) / {SUM_LIFE_INS}) * 1000,4){PREM_RATE_ACC_REPORT}Round( ({PREM_ACC_RATE} * {PAY_MODE}) , 4) Round((({SUM_ACC_PREM_EX} * {PAY_MODE}) / {SUM_ACC_INS}) * 1000,4)

##### การคำนวณ RI Commission (ACT)
การคำนวณ RI Commission (ACT)
1. คำนวณ RI Commission
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterคำนวณ{RI_COMM_L1_LIFE}Round( {RI_L1_TL_PREM_LIFE} * {RI_COM_RATE} / 100 , 2) {RI_COMM_L2_LIFE}Round( {RI_L2_TL_PREM_LIFE} * {RI_COM_RATE} / 100 , 2) {RI_COMM_L3_LIFE}Round( {RI_L3_TL_PREM_LIFE} * {RI_COM_RATE} / 100 , 2) {TOT_RI_COMM_LIFE}{RI_COMM_L1_LIFE} + {RI_COMM_L2_LIFE} + {RI_COMM_L3_LIFE}{RI_COMM_L1_ACC}Round( {RI_L1_TL_PREM_ACC} * {RI_COM_RATE} / 100 , 2) {RI_COMM_L2_ACC}Round( {RI_L2_TL_PREM_ACC} * {RI_COM_RATE} / 100 , 2) {RI_COMM_L3_ACC}Round( {RI_L3_TL_PREM_ACC} * {RI_COM_RATE} / 100 , 2) {TOT_RI_COMM_ACC}{RI_COMM_L1_ACC} + {RI_COMM_L2_ACC} + {RI_COMM_L3_ACC}

##### การคำนวณ RI Claim (ACT)
การคำนวณ RI Claim (ACT)
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_death_claim, tx_stg_act_tpd_claim, tx_stg_act_investigation_expenseโดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_noเลือกเฉพาะกรมธรรม์ที่มี claim_status = 0 และ 2 เท่านั้นดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น (#AFTER_CLAIM)benefit(#AFTER_CLAIM)1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 1 , 5 (#AFTER_CLAIM)parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"กรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมากรณีถ้ารายการนั้นมีทั้ง {CLAIM_LIFE} และ {CLAIM_ACC} ต้องแยกเป็น 2 รายการ{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ คือการจ่ายสินไหม (ถึงแม้จ่ายเพียงตัวใดตัวหนึ่ง ก็ถือว่าอนุมัติ เช่น จ่ายชีวิต, ปฏิเสธอุบัติเหตุ)1 : มีเหตุขัดข้อง หมายถึง ส่งเรื่องให้ บ.ไดมอนด์ฯ สอบสวนข้อมูล2 : ปฎิเสธ หมายถึง การปฏิเสธจ่ายสินไหมทั้งหมด และไม่คืนเบี้ย 3 : บอกล้าง หมายถึง สัญญาเป็นโมฆียะ และคืนเบี้ยให้ tx_stg_act_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 2 , 3 (#AFTER_CLAIM)parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{LIFE_INS}life_insur (suthanee.sa 09/04/2026){CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ1 : มีเหตุขัดข้อง2 : ปฏิเสธการจ่าย3 : บอกล้าง tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {INFROM_NO} = {DOC_NO} {CLAIM_NO} (suthanee.sa 27/03/2026) กับ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นกรณีที่รายการเคลม มีมากกว่า 1 ความคุ้มครอง ในรายการเคลมเดียวกัน ให้ประมวลผล investigation_expense เพียงครั้งเดียวเท่ากันเช่น กรณี Claim death มีทั้ง Life และ Acc Death ให้ประมวลผลกับรายการ Lifeหรือ กรณี Dismem กับ TPD ให้ประมวลผลกับ Dismem (suthanee.sa 03/04/2026)parametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล แต่ต้องนำทุนไปแสดงเสมอ นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policy parametertx_stg_act_all_policy{POLICY_NO}policy_no{FIRST_DATE}first_date{COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{COV_FROM} ของรายการเคลมแต่ละรายการ{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed{PERIOD}เดือนและปีของ effective_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล{LAPSE_DATE}lapse_date{PAY_MODE}pay_type{PAY_MODE_GIB}pay_typeโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) tx_stg_act_inforce_policy (ข้อมูลต้นสัญญาของกรมธรรม์)เฉพาะรายการที่ period_date อยู่ในช่วงของ Quater ที่กำลังประมวลผล หรือถ้าไม่มี ให้เลือกรายการก่อนหน้าที่อยู่ใกล้กับ Quater ที่กำลังประมวลผลมากที่สุดกรณีที่หยิบไปเจอรายการที่ no_member_life = 0 ให้ข้ามรายการนั้นไปหยิบรายการก่อนหน้า จนกว่าจะพบรอบที่มีค่า (suthanee.sa 24/04/2026 #ISSUE_176)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_prem_layerเฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rateParameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_health_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_act_death_claim.approve_date
- tx_stg_act_tpd_claim.approved_date
- tx_stg_act_health_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- เลือกเฉพาะกรมธรรม์ที่มี claim_status = 0 และ 2 เท่านั้น
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น (#AFTER_CLAIM)benefit(#AFTER_CLAIM)1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 1 , 5 (#AFTER_CLAIM)parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"กรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมากรณีถ้ารายการนั้นมีทั้ง {CLAIM_LIFE} และ {CLAIM_ACC} ต้องแยกเป็น 2 รายการ{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ คือการจ่ายสินไหม (ถึงแม้จ่ายเพียงตัวใดตัวหนึ่ง ก็ถือว่าอนุมัติ เช่น จ่ายชีวิต, ปฏิเสธอุบัติเหตุ)1 : มีเหตุขัดข้อง หมายถึง ส่งเรื่องให้ บ.ไดมอนด์ฯ สอบสวนข้อมูล2 : ปฎิเสธ หมายถึง การปฏิเสธจ่ายสินไหมทั้งหมด และไม่คืนเบี้ย 3 : บอกล้าง หมายถึง สัญญาเป็นโมฆียะ และคืนเบี้ยให้ tx_stg_act_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 2 , 3 (#AFTER_CLAIM)parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{LIFE_INS}life_insur (suthanee.sa 09/04/2026){CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ1 : มีเหตุขัดข้อง2 : ปฏิเสธการจ่าย3 : บอกล้าง tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {INFROM_NO} = {DOC_NO} {CLAIM_NO} (suthanee.sa 27/03/2026) กับ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นกรณีที่รายการเคลม มีมากกว่า 1 ความคุ้มครอง ในรายการเคลมเดียวกัน ให้ประมวลผล investigation_expense เพียงครั้งเดียวเท่ากันเช่น กรณี Claim death มีทั้ง Life และ Acc Death ให้ประมวลผลกับรายการ Lifeหรือ กรณี Dismem กับ TPD ให้ประมวลผลกับ Dismem (suthanee.sa 03/04/2026)parametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล แต่ต้องนำทุนไปแสดงเสมอ
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้น (#AFTER_CLAIM)benefit(#AFTER_CLAIM)1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Deathtx_stg_act_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 1 , 5 (#AFTER_CLAIM)parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"กรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมากรณีถ้ารายการนั้นมีทั้ง {CLAIM_LIFE} และ {CLAIM_ACC} ต้องแยกเป็น 2 รายการ{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ คือการจ่ายสินไหม (ถึงแม้จ่ายเพียงตัวใดตัวหนึ่ง ก็ถือว่าอนุมัติ เช่น จ่ายชีวิต, ปฏิเสธอุบัติเหตุ)1 : มีเหตุขัดข้อง หมายถึง ส่งเรื่องให้ บ.ไดมอนด์ฯ สอบสวนข้อมูล2 : ปฎิเสธ หมายถึง การปฏิเสธจ่ายสินไหมทั้งหมด และไม่คืนเบี้ย 3 : บอกล้าง หมายถึง สัญญาเป็นโมฆียะ และคืนเบี้ยให้ tx_stg_act_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 2 , 3 (#AFTER_CLAIM)parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{LIFE_INS}life_insur (suthanee.sa 09/04/2026){CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ1 : มีเหตุขัดข้อง2 : ปฏิเสธการจ่าย3 : บอกล้าง
- tx_stg_act_death_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 1 , 5 (#AFTER_CLAIM)parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}ถ้า {CLAIM_LIFE} > 0 เท่ากับ "Life" ถ้า {CLAIM_ACC} > 0 เท่ากับ "Accident Death"กรณีที่รายการนั้น {CLAIM_TYPE} = Accident Death และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมากรณีถ้ารายการนั้นมีทั้ง {CLAIM_LIFE} และ {CLAIM_ACC} ต้องแยกเป็น 2 รายการ{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ คือการจ่ายสินไหม (ถึงแม้จ่ายเพียงตัวใดตัวหนึ่ง ก็ถือว่าอนุมัติ เช่น จ่ายชีวิต, ปฏิเสธอุบัติเหตุ)1 : มีเหตุขัดข้อง หมายถึง ส่งเรื่องให้ บ.ไดมอนด์ฯ สอบสวนข้อมูล2 : ปฎิเสธ หมายถึง การปฏิเสธจ่ายสินไหมทั้งหมด และไม่คืนเบี้ย 3 : บอกล้าง หมายถึง สัญญาเป็นโมฆียะ และคืนเบี้ยให้
- tx_stg_act_tpd_claimกรณีที่รายการนั้น {CLAIM_TYPE} = Dismemberment และ {ATT_AGE} > 70 ไม่ต้องดึงรายการนั้นมา benefit = 2 , 3 (#AFTER_CLAIM)parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request{TPD_INS}tpd_insur_request{LIFE_INS}life_insur (suthanee.sa 09/04/2026){CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status 0 : อนุมัติ1 : มีเหตุขัดข้อง2 : ปฏิเสธการจ่าย3 : บอกล้าง
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {INFROM_NO} = {DOC_NO} {CLAIM_NO} (suthanee.sa 27/03/2026) กับ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นกรณีที่รายการเคลม มีมากกว่า 1 ความคุ้มครอง ในรายการเคลมเดียวกัน ให้ประมวลผล investigation_expense เพียงครั้งเดียวเท่ากันเช่น กรณี Claim death มีทั้ง Life และ Acc Death ให้ประมวลผลกับรายการ Lifeหรือ กรณี Dismem กับ TPD ให้ประมวลผลกับ Dismem (suthanee.sa 03/04/2026)parametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล แต่ต้องนำทุนไปแสดงเสมอ
- เลือกเฉพาะรายการที่มี รายการเคลม {INFROM_NO} = {DOC_NO} {CLAIM_NO} (suthanee.sa 27/03/2026) กับ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้น
- กรณีที่รายการเคลม มีมากกว่า 1 ความคุ้มครอง ในรายการเคลมเดียวกัน ให้ประมวลผล investigation_expense เพียงครั้งเดียวเท่ากันเช่น กรณี Claim death มีทั้ง Life และ Acc Death ให้ประมวลผลกับรายการ Lifeหรือ กรณี Dismem กับ TPD ให้ประมวลผลกับ Dismem (suthanee.sa 03/04/2026)parametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026
- รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล แต่ต้องนำทุนไปแสดงเสมอ
- นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policy parametertx_stg_act_all_policy{POLICY_NO}policy_no{FIRST_DATE}first_date{COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017{COV_TO}end_date{RE_CODE_FULL}reinsur_no{POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1{COV_FROM} ของรายการเคลมแต่ละรายการ{POLICY_STATUS}status{RI_POL_STATUS}ri_status{GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed{PERIOD}เดือนและปีของ effective_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date{POL_NAME}policy_name{DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026){SALE_OPTION}sale_option{SALE_CHANEL}sale_channel_code{CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล{LAPSE_DATE}lapse_date{PAY_MODE}pay_type{PAY_MODE_GIB}pay_typeโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2{EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026){F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026)
- tx_stg_act_inforce_policy (ข้อมูลต้นสัญญาของกรมธรรม์)เฉพาะรายการที่ period_date อยู่ในช่วงของ Quater ที่กำลังประมวลผล หรือถ้าไม่มี ให้เลือกรายการก่อนหน้าที่อยู่ใกล้กับ Quater ที่กำลังประมวลผลมากที่สุดกรณีที่หยิบไปเจอรายการที่ no_member_life = 0 ให้ข้ามรายการนั้นไปหยิบรายการก่อนหน้า จนกว่าจะพบรอบที่มีค่า (suthanee.sa 24/04/2026 #ISSUE_176)parametertx_stg_act_inforce_policy{POLICY_NO}policy_no{COMM_DATE}commencement_date{COV_FROM}effective_date{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_prem_layerเฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rateParameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
- เตรียมข้อมูล Layer ดังนี้2. เตรียมข้อมูล Layer โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- คำนวณแยก Layer ของกรมธรรม์ (คำนวณทุกกรมที่อยู่ในรอบ Q นั้นเสมอ) ความคุ้มครอง Parameter คำนวณLIFE {L2_SA_LIFE} Round( {L2_LIFE_INS} − ({L1_MAX} * {L2_MEM_LIFE}) + ({L1_L2_MID} * {L3_MEM_LIFE}) , 2 ){L3_SA_LIFE} Round( {L3_LIFE_INS} − ({L2_MAX} * {L3_MEM_LIFE}) , 2 ){L1_SA_LIFE} {INS_LIFE} − {L2_SA_LIFE} − {L3_SA_LIFE} {TOT_SA_LIFE}{L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} {L1_SR_LIFE} Round( {L1_SA_LIFE} * {L1_PER} / 100 , 2 ){L2_SR_LIFE} Round( {L2_SA_LIFE} * {L2_PER} / 100 , 2 ){L3_SR_LIFE} Round( {L3_SA_LIFE} * {L3_PER} / 100 , 2 ){TOT_SR_LIFE}{L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} ACC {L2_SA_ACC} Round( {L2_ACC_INS} − ({L1_MAX} * {L2_MEM_ACC}) + ({L1_L2_MID} * {L3_MEM_ACC}) , 2 ){L3_SA_ACC} Round( {L3_ACC_INS} − ({L2_MAX} * {L3_MEM_ACC}) , 2 ){L1_SA_ACC} {INS_ACC_DEATH} − {L2_SA_ACC} − {L3_SA_ACC} {TOT_SA_ACC}{L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} {L1_SR_ACC} Round( {L1_SA_ACC} * {L1_PER} / 100 , 2 ){L2_SR_ACC} Round( {L2_SA_ACC} * {L2_PER} / 100 , 2 ){L3_SR_ACC} Round( {L3_SA_ACC} * {L3_PER} / 100 , 2 ){TOT_SR_ACC}{L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC}
2. ตรวจสอบค่า Percentage Reinsurance
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆจากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_act_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_act_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calimนำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"
- นำ {COV_FROM} ของแต่ละกรมธรรม์ มาตรวจสอบว่าตรงกับรายการ {CONDITION_ID} ใด ด้วยการนำ {COV_FROM} เทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to{COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- {COV_FROM} ต้องอยู่ในช่วงเวลาของรายการนั้น ๆ
- จากนั้นนำทุนของรายการเคลม ไปตรวจสอบว่าต้องใช้ข้อมูลใน Layer ใดถ้าข้อมูลมาจาก tx_stg_act_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}ถ้าข้อมูลมาจาก tx_stg_act_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Dismemberment{DISMEM_INS}ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ถ้าข้อมูลมาจาก tx_stg_act_death_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Life{LIFE_INS}เท่ากับ Accident Death{ACC_INS}
- ถ้าข้อมูลมาจาก tx_stg_act_tpd_claim{CLAIM_TYPE}ให้ใช้ค่าเท่ากับ Dismemberment{DISMEM_INS}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expenseให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- ให้ดูว่าตรงกับรายการเคลมใน Table ไหน จากนั้นใช้ค่าทุนเดียวกันกับ Table Calim
- นำค่าทุนที่ได้ ไปตรวจสอบ Layer โดยการเปรียบเทียบกับ {XX_XXXX_MIN} และ {XX_XXXX_MAX}ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้นparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- ถ้าตรงกับช่วงของ L1 ให้เก็บค่า {L1_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L2 ให้เก็บค่า {L2_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
- ถ้าตรงกับช่วงของ L3 ให้เก็บค่า {L3_PER} เป็น Percentage Reinsurance ของรายการเคลมนั้น
3. คำนวณ RI Claim แยกตามความคุ้มครอง
- ถ้าข้อมูลมาจาก tx_stg_act_death_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE} คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeLayer 1Round( ({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}Layer 2Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_LIFE} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}Layer 3Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_LIFE} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathLayer 1Round( ( {L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}Layer 2Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}Layer 3Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE} คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ LifeLayer 1Round( ({L1_PER} / 100) * {CLAIM_LIFE}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_LIFE}Layer 2Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_LIFE} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_LIFE}Layer 3Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_LIFE} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_LIFE}เท่ากับ Accident DeathLayer 1Round( ( {L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_ACC_DEATH}Layer 2Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_ACC_DEATH}Layer 3Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_ACC_DEATH}
- ถ้าข้อมูลมาจาก tx_stg_act_tpd_claimแทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound( ( {L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- แทนค่า {LX_PER} ด้วย ค่าที่ได้จากการตรวจสอบทุน{CLAIM_TYPE}คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DBเท่ากับ DismembermentRound( ( {L1_PER} / 100) * {CLAIM_ACC}, 2)ถ้าเป็น L1 ให้เก็บใน {L1_RI_CLAIM_DISMEM}Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}) , 2)ถ้าเป็น L2 ให้เก็บใน {L2_RI_CLAIM_DISMEM}Round( ({L1_PER} / 100) * {L1_INSU_MAX} ,2) + Round( ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX}) ,2) + Round( ({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}) , 2)ถ้าเป็น L3 ให้เก็บใน {L3_RI_CLAIM_DISMEM}
- ถ้าข้อมูลมาจาก tx_stg_act_investigation_expense #M06 suthanee.sa 21/04/2026คำนวณเก็บค่าใน Parameter เพื่อนำไป Mapping ลง DB Round( ({L1_PER} / 100) * {INV_AMOUNT}, 2)เก็บไปตาม Layer ของรายการเคลม {RI_CLAIM_EXPENSE_INV}#M06 suthanee.sa 21/04/2026Round( ({L1_PER} / 100) * {LEG_AMOUNT}, 2)เก็บไปตาม Layer ของรายการเคลม {RI_CLAIM_EXPENSE_LEG}#M06 suthanee.sa 21/04/2026Round( ({L1_PER} / 100) * {MED_AMOUNT}, 2)เก็บไปตาม Layer ของรายการเคลม {RI_CLAIM_EXPENSE_MED}#M06 suthanee.sa 21/04/2026
- รวมค่า Expense #M06 suthanee.sa 21/04/2026Parameter คำนวณ {SUM_RI_CLAIM_EXPENSE_INV}{RI_CLAIM_INVEST} + {RI_CLAIM_LEG} + {RI_CLAIM_MED}#M06 suthanee.sa 21/04/2026
4. คำนวณยอดผลรวมในระดับ Policy
| Parameter | คำนวณ |
| {RI_CLAIM_LIFE} | {L1_RI_CLAIM_LIFE} + {L2_RI_CLAIM_LIFE} + {L3_RI_CLAIM_LIFE} |
| {RI_CLAIM_ACC_DEATH} | {L1_RI_CLAIM_ACC_DEATH} + {L2_RI_CLAIM_ACC_DEATH} + {L3_RI_CLAIM_ACC_DEATH} |
| {RI_CLAIM_DISMEM} | {L1_RI_CLAIM_DISMEM} + {L2_RI_CLAIM_DISMEM} + {L3_RI_CLAIM_DISMEM} |
| {RI_CLAIM_INVEST} | {L1_RI_CLAIM_INVEST} + {L2_RI_CLAIM_INVEST} + {L3_RI_CLAIM_INVEST} |

##### การคำนวณ Experience Refund (ACT)
การคำนวณ Experience Refund (ACT)
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_exp_refund โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_date ของรายการที่มี Effective Date อยู่ภายในช่วง Quarter ของปีก่อนหน้า (เนื่องจาก experience refund จะคำนวณเมื่อครบปีกรมธรรม์) เช่น รายงาน 2024Q2 → ระบบจะดึงรายการที่มี Effective Date อยู่ระหว่าง 01/04/2023 – 30/06/2024ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundเฉพาะรายการที่ tx_stg_act_exp_refund.paid_status = Paid เท่านั้น (suthanee.sa 26/03/2026) parametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accidentถ้ามีทั้ง 2 ค่า ให้แยกการคำนวณเป็น 2 รายการ ถ้ามีค่าอย่างใดอย่างหนึ่ง ให้ประมวลผลความคุ้มครองเดียว{PEND_CLAIM_LAST} (suthanee.sa 09/06/2026 #CR_EXREFUND) ตรวจสอบข้อมูลจาก {POLICY_NO} เดียวกัน ที่ {POLICY_YEAR} เท่ากับ {POLICY_YEAR} - 1 (หมายถึงใช้ข้อมูลของปีก่อนหน้าของกรมที่กำลังทำ ER)เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก pending_lifeถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก pending_add{CLAIM} เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก claim (claim_life + pending_life) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + claim_dismem + pending_add + pending_dismem) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + pending_add) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026){EX_REFUND_PREVY}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ดึงค่าจาก exp_refund_previous_yearถ้า {COV_TYPE} = Accident ให้เป็น 0{EX_REFUND}exp_refund{CLAIM_PAID_POL}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ {CLAIM} - {EX_REFUND_PREVY}ถ้า {COV_TYPE} = Accident ให้เป็น {CLAIM} (#CR_EXREFUND suthanee.sa 25/05/2026){PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_inforce_policy ที่ตรงกันดังนี้)เฉพาะรายการที่ period_date ตรงกับเดือนที่เริ่มต้นของปีกรมธรรม์ effective_dateparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{COV_FROM}effective_date{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death tx_stg_act_all_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_all_policy ที่ตรงกันดังนี้){POLICY_NO} = tx_stg_act_all_policy.policy_no{COV_FROM} = tx_stg_act_all_policy.promise_dateparametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no {FIRST_DATE}first_date {COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017 {COV_FROM}promise_date {COV_TO}end_date {POLICY_YEAR}policy_yearรายการกรมธรรม์ของ tx_stg_act_exp_refund ที่มีค่า premium_life หรือ premium_accidentให้ตรวจสอบว่ามีกรมธรรม์ที่มี policy_no เดียวกัน มีค่า policy_year + 1 ด้วยหรือไม่ไม่ว่าจะมีหรือไม่มี ให้นำไปประมวลผลตามปกติแต่ถ้าไม่มี ให้บันทึกกรมธรรม์เหล่านั้นใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "008" เพิ่มเติม <![CDATA[ต้องการตรวจสอบว่า กรมธรรม์ที่มีค่าใช้จ่าย exp_refund มีการต่อสัญญาจริง ๆ หรือไม่ เพราะปกติเราจะไม่จ่ายหากไม่มีการต่อสัญญากรมธรรม์]]> (#CR_EXREFUND suthanee.sa 28/04/2026){POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1 {POLICY_STATUS}status {RI_POL_STATUS}ri_status {GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed {LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ {PERIOD}เดือนและปีของ effective_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {POL_NAME}policy_name {DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {SALE_OPTION}sale_option {SALE_CHANEL}sale_channel_code {LAPSE_DATE}lapse_date {PAY_MODE}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_date {PAY_MODE_GIB}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_dateโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2 {EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_prem_layerเฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate Parameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_exp_refund.reinsur_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี effective_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_exp_refund.effective_date ของรายการที่มี Effective Date อยู่ภายในช่วง Quarter ของปีก่อนหน้า (เนื่องจาก experience refund จะคำนวณเมื่อครบปีกรมธรรม์) เช่น รายงาน 2024Q2 → ระบบจะดึงรายการที่มี Effective Date อยู่ระหว่าง 01/04/2023 – 30/06/2024
- tx_stg_act_exp_refund.effective_date ของรายการที่มี Effective Date อยู่ภายในช่วง Quarter ของปีก่อนหน้า (เนื่องจาก experience refund จะคำนวณเมื่อครบปีกรมธรรม์) เช่น รายงาน 2024Q2 → ระบบจะดึงรายการที่มี Effective Date อยู่ระหว่าง 01/04/2023 – 30/06/2024
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_exp_refundเฉพาะรายการที่ tx_stg_act_exp_refund.paid_status = Paid เท่านั้น (suthanee.sa 26/03/2026) parametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accidentถ้ามีทั้ง 2 ค่า ให้แยกการคำนวณเป็น 2 รายการ ถ้ามีค่าอย่างใดอย่างหนึ่ง ให้ประมวลผลความคุ้มครองเดียว{PEND_CLAIM_LAST} (suthanee.sa 09/06/2026 #CR_EXREFUND) ตรวจสอบข้อมูลจาก {POLICY_NO} เดียวกัน ที่ {POLICY_YEAR} เท่ากับ {POLICY_YEAR} - 1 (หมายถึงใช้ข้อมูลของปีก่อนหน้าของกรมที่กำลังทำ ER)เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก pending_lifeถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก pending_add{CLAIM} เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก claim (claim_life + pending_life) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + claim_dismem + pending_add + pending_dismem) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + pending_add) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026){EX_REFUND_PREVY}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ดึงค่าจาก exp_refund_previous_yearถ้า {COV_TYPE} = Accident ให้เป็น 0{EX_REFUND}exp_refund{CLAIM_PAID_POL}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ {CLAIM} - {EX_REFUND_PREVY}ถ้า {COV_TYPE} = Accident ให้เป็น {CLAIM} (#CR_EXREFUND suthanee.sa 25/05/2026){PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_datetx_stg_act_inforce_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_inforce_policy ที่ตรงกันดังนี้)เฉพาะรายการที่ period_date ตรงกับเดือนที่เริ่มต้นของปีกรมธรรม์ effective_dateparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{COV_FROM}effective_date{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death tx_stg_act_all_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_all_policy ที่ตรงกันดังนี้){POLICY_NO} = tx_stg_act_all_policy.policy_no{COV_FROM} = tx_stg_act_all_policy.promise_dateparametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no {FIRST_DATE}first_date {COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017 {COV_FROM}promise_date {COV_TO}end_date {POLICY_YEAR}policy_yearรายการกรมธรรม์ของ tx_stg_act_exp_refund ที่มีค่า premium_life หรือ premium_accidentให้ตรวจสอบว่ามีกรมธรรม์ที่มี policy_no เดียวกัน มีค่า policy_year + 1 ด้วยหรือไม่ไม่ว่าจะมีหรือไม่มี ให้นำไปประมวลผลตามปกติแต่ถ้าไม่มี ให้บันทึกกรมธรรม์เหล่านั้นใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "008" เพิ่มเติม <![CDATA[ต้องการตรวจสอบว่า กรมธรรม์ที่มีค่าใช้จ่าย exp_refund มีการต่อสัญญาจริง ๆ หรือไม่ เพราะปกติเราจะไม่จ่ายหากไม่มีการต่อสัญญากรมธรรม์]]> (#CR_EXREFUND suthanee.sa 28/04/2026){POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1 {POLICY_STATUS}status {RI_POL_STATUS}ri_status {GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed {LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ {PERIOD}เดือนและปีของ effective_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {POL_NAME}policy_name {DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {SALE_OPTION}sale_option {SALE_CHANEL}sale_channel_code {LAPSE_DATE}lapse_date {PAY_MODE}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_date {PAY_MODE_GIB}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_dateโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2 {EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026) นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_prem_layerเฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate Parameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- tx_stg_act_exp_refundเฉพาะรายการที่ tx_stg_act_exp_refund.paid_status = Paid เท่านั้น (suthanee.sa 26/03/2026) parametertx_stg_act_exp_refund{POLICY_NO}policy_no{COV_FROM}effective_date{COV_TO}end_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsur_no{PAID_STATUS}paid_status{PER_EXP_REFUND}percent_exp_refund{PER_EXPENSE}percent_expense{PREMIUM_LIFE}premium_life{PREMIUM_ACC}premium_accident{PREMIUM_TPD}premium_tpd{TOT_PREMIUM}total_premium{COV_TYPE}ถ้า {PREMIUM_LIFE} > 0 เก็บค่า Life ถ้า {PREMIUM_ACC} > 0 เก็บค่า Accidentถ้ามีทั้ง 2 ค่า ให้แยกการคำนวณเป็น 2 รายการ ถ้ามีค่าอย่างใดอย่างหนึ่ง ให้ประมวลผลความคุ้มครองเดียว{PEND_CLAIM_LAST} (suthanee.sa 09/06/2026 #CR_EXREFUND) ตรวจสอบข้อมูลจาก {POLICY_NO} เดียวกัน ที่ {POLICY_YEAR} เท่ากับ {POLICY_YEAR} - 1 (หมายถึงใช้ข้อมูลของปีก่อนหน้าของกรมที่กำลังทำ ER)เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก pending_lifeถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก pending_add{CLAIM} เมื่อแบ่งรายการจาก {COV_TYPE} แล้วถ้า {COV_TYPE} = Life ให้ดึงค่าจาก claim (claim_life + pending_life) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + claim_dismem + pending_add + pending_dismem) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026)ถ้า {COV_TYPE} = Accident ให้ดึงค่าจาก 0 (claim_add + pending_add) - {PEND_CLAIM_LAST} (#CR_EXREFUND suthanee.sa 27/04/2026) (suthanee.sa 09/06/2026){EX_REFUND_PREVY}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ดึงค่าจาก exp_refund_previous_yearถ้า {COV_TYPE} = Accident ให้เป็น 0{EX_REFUND}exp_refund{CLAIM_PAID_POL}เมื่อแบ่งรายการจาก {COV_TYPE} แล้ว ถ้า {COV_TYPE} = Life ให้ {CLAIM} - {EX_REFUND_PREVY}ถ้า {COV_TYPE} = Accident ให้เป็น {CLAIM} (#CR_EXREFUND suthanee.sa 25/05/2026){PERIOD_BEGIN_DATE}period_begin_date{PERIOD_END_DATE}period_end_date
- tx_stg_act_inforce_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_inforce_policy ที่ตรงกันดังนี้)เฉพาะรายการที่ period_date ตรงกับเดือนที่เริ่มต้นของปีกรมธรรม์ effective_dateparametertx_stg_act_inforce_policy {POLICY_NO}policy_no{COV_FROM}effective_date{POLICY_YEAR}policy_year{MEM_LIFE}no_member_life{MEM_ACC_DEATH}no_member_accident_death{INS_LIFE}sum_insured_life{INS_ACC_DEATH}sum_insured_accident_death
- เฉพาะรายการที่ period_date ตรงกับเดือนที่เริ่มต้นของปีกรมธรรม์ effective_date
- tx_stg_act_all_policy (ค้นหาจากการนำ parameter จาก tx_stg_act_exp_refund ไปหาที่ tx_stg_act_all_policy ที่ตรงกันดังนี้){POLICY_NO} = tx_stg_act_all_policy.policy_no{COV_FROM} = tx_stg_act_all_policy.promise_dateparametertx_stg_act_all_policy {POLICY_NO}policy_no {RE_CODE_FULL}reinsur_no {FIRST_DATE}first_date {COM_DATE}1) ใช้วันที่และเดือนจาก first_date2) ใช้ปี จากเลข reinsur_no 2 ตัวแรก จากเช่น reinsur_no 1701123 จะได้ปี 2017 {COV_FROM}promise_date {COV_TO}end_date {POLICY_YEAR}policy_yearรายการกรมธรรม์ของ tx_stg_act_exp_refund ที่มีค่า premium_life หรือ premium_accidentให้ตรวจสอบว่ามีกรมธรรม์ที่มี policy_no เดียวกัน มีค่า policy_year + 1 ด้วยหรือไม่ไม่ว่าจะมีหรือไม่มี ให้นำไปประมวลผลตามปกติแต่ถ้าไม่มี ให้บันทึกกรมธรรม์เหล่านั้นใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "008" เพิ่มเติม <![CDATA[ต้องการตรวจสอบว่า กรมธรรม์ที่มีค่าใช้จ่าย exp_refund มีการต่อสัญญาจริง ๆ หรือไม่ เพราะปกติเราจะไม่จ่ายหากไม่มีการต่อสัญญากรมธรรม์]]> (#CR_EXREFUND suthanee.sa 28/04/2026){POLICY_YEAR_RI}(ปีของ {COV_FROM} - ปีของ {COM_DATE}) + 1 {POLICY_STATUS}status {RI_POL_STATUS}ri_status {GIB_RI_STATUS}ถ้า {POLICY_STATUS} (suthanee.sa 09/04/2026) = "Inforce" หรือ "New Business" ให้ตรวจสอบ {POLICY_YEAR_RI}ถ้า {POLICY_YEAR_RI} = 1 เก็บ New Businessถ้า {POLICY_YEAR_RI} > 1 เก็บ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น Lapsed ลงสถานะเป็น Lapsed {LATEST_RI_POL_STATUS}ri_status ของเลขกรมธรรม์ที่เป็นสถานะล่าสุดของปีล่าสุด กรณีที่มีข้อมูลกรมธรรม์มากกว่า 1 รายการ {PERIOD}เดือนและปีของ effective_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {POL_NAME}policy_name {DBD_CODE}dbd_code - กรณี dbd_code เป็นค่าว่างให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {NOB}นำ dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en มาแสดง - กรณี type_business_en เป็นค่าว่างให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"- กรณี ไม่สามารถ Mapping ข้อมูลที่ tx_rig_nature_business ได้ ให้ตรวจสอบข้อมูลในตาราง cf_rig_nob โดยนำ policy_no เทียบกับ cf_rig_nob.policy_no <![CDATA[- กรณีพบข้อมูลตรงกัน ให้นำ type_business_en ไปแสดง - กรณีไม่พบข้อมูล ให้แสดงค่าว่าง และ เก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "007"]]> (#CR_RATE 27/04/2026) {SALE_OPTION}sale_option {SALE_CHANEL}sale_channel_code {LAPSE_DATE}lapse_date {PAY_MODE}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_date {PAY_MODE_GIB}นำ policy_no กับ promise_date ไปหาข้อมูลใน tx_stg_act_all_policy.pay_type โดยนำ promise_date เทียบกับ effective_dateโหมดชำระเบี้ยPayment Mode สำหรับออก BDRAnnual3Monthly0Quarterly1Semi-Annual2 {EXPIRE_DATE}expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}f_receipt_date (suthanee.sa 24/03/2026)
- {POLICY_NO} = tx_stg_act_all_policy.policy_no
- {COV_FROM} = tx_stg_act_all_policy.promise_date
- นำ {POLICY_NO} และ {COV_FROM} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_prem_layerเฉพาะรายการที่ policy_no และ effective_date ตรงกับกรมธรรม์ที่กำลังประมวลผลparametertx_stg_act_prem_layer {POLICY_NO}policy_no {COV_FROM}effective_date {L1_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L1{MEM_LIFE} - {L2_MEM_LIFE} - {L3_MEM_LIFE} (suthanee.sa 29/03/2026){L2_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L2amount_life{L3_MEM_LIFE}ถ้า tx_stg_act_prem_layer.level = L3amount_life{L1_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L1{MEM_ACC_DEATH} - {L2_MEM_ACC} - {L3_MEM_ACC} (suthanee.sa 29/03/2026){L2_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L2amount_accident{L3_MEM_ACC}ถ้า tx_stg_act_prem_layer.level = L3amount_accident{L1_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L1life_insure{L2_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L2life_insure{L3_LIFE_INS}ถ้า tx_stg_act_prem_layer.level = L3life_insure{SUM_LIFE_INS} {L1_LIFE_INS} + {L2_LIFE_INS} + {L3_LIFE_INS}{L1_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L1accident_insure{L2_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L2accident_insure{L3_ACC_INS}ถ้า tx_stg_act_prem_layer.level = L3accident_insure{SUM_ACC_INS} {L1_ACC_INS} + {L2_ACC_INS} + {L3_ACC_INS}{L1_LIFE_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1life_prem_rate{L1_ACC_PREM_RATE}ถ้า tx_stg_act_prem_layer.level = L1accident_prem_rate Parameterคำนวณ {PREM_RATE_LIFE_REPORT}Round( ({L1_LIFE_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870{PREM_RATE_ACC_REPORT}Round( ({L1_ACC_PREM_RATE} * {PAY_MODE}) , 4) ปรับ Round 4 ตำแหน่ง (#AFTER suthanee.sa 06/05/2026) https://redmine.ochi.link/issues/64870
- ตรวจสอบ {POLICY_STATUS} ที่ได้ ต้องไม่เท่ากับ Lapseกรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อกรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "006"
- กรณีไม่เท่ากับ Lapse จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Lapse จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "006"
- เตรียมข้อมูล Layer ดังนี้2. เตรียมข้อมูล Layer โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- คำนวณแยก Layer ของกรมธรรม์ (คำนวณทุกกรมที่อยู่ในรอบ Q นั้นเสมอ) ความคุ้มครอง Parameter คำนวณLIFE {L2_SA_LIFE} Round( {L2_LIFE_INS} − ({L1_MAX} * {L2_MEM_LIFE}) + ({L1_L2_MID} * {L3_MEM_LIFE}) , 2 ){L3_SA_LIFE} Round( {L3_LIFE_INS} − ({L2_MAX} * {L3_MEM_LIFE}) , 2 ){L1_SA_LIFE} {INS_LIFE} − {L2_SA_LIFE} − {L3_SA_LIFE} {TOT_SA_LIFE}{L1_SA_LIFE} + {L2_SA_LIFE} + {L3_SA_LIFE} {L1_SR_LIFE} Round( {L1_SA_LIFE} * {L1_PER} / 100 , 2 ){L2_SR_LIFE} Round( {L2_SA_LIFE} * {L2_PER} / 100 , 2 ){L3_SR_LIFE} Round( {L3_SA_LIFE} * {L3_PER} / 100 , 2 ){TOT_SR_LIFE}{L1_SR_LIFE} + {L2_SR_LIFE} + {L3_SR_LIFE} ACC {L2_SA_ACC} Round( {L2_ACC_INS} − ({L1_MAX} * {L2_MEM_ACC}) + ({L1_L2_MID} * {L3_MEM_ACC}) , 2 ){L3_SA_ACC} Round( {L3_ACC_INS} − ({L2_MAX} * {L3_MEM_ACC}) , 2 ){L1_SA_ACC} {INS_ACC_DEATH} − {L2_SA_ACC} − {L3_SA_ACC} {TOT_SA_ACC}{L1_SA_ACC} + {L2_SA_ACC} + {L3_SA_ACC} {L1_SR_ACC} Round( {L1_SA_ACC} * {L1_PER} / 100 , 2 ){L2_SR_ACC} Round( {L2_SA_ACC} * {L2_PER} / 100 , 2 ){L3_SR_ACC} Round( {L3_SA_ACC} * {L3_PER} / 100 , 2 ){TOT_SR_ACC}{L1_SR_ACC} + {L2_SR_ACC} + {L3_SR_ACC}
3. ดึงข้อมูลกรมธรรม์ในรอบที่มีการคำนวณ Experience Refund
1. ค้นหา Premium (เบี้ย RI สุทธิย้อนหลังทั้งปี) และ Commission (Commission RI ย้อนหลังทั้งปี) ของทั้งปีที่จ่ายไปแล้ว โดยค้นหาใน tx_rig_act_bdr_new_renew โดยจะสามารถได้รายการมามากกว่า 1 รายการ ตาม Q
| tx_rig_act_bdr_new_renew | ใช้ parameter ของกรมธรรม์ที่กำลังประมวลผลอยู่ดังนี้ ไปค้นหาใน tx_rig_act_bdr_new_renew |
| policy_no | {POLICY_NO} |
| policy_year | {POLICY_YEAR_RI} |
| effective_date_from | {COV_FROM} |
| โดย tx_rig_act_bdr_new_renew.rig_act_hd_id นั้น ใน tx_rig_act_hd.rig_act_hd_id ต้องมี tx_rig_act_hd.usage_status = A เท่านั้น (suthanee.sa 26/02/2026) |
2. รวมของกรมทุก Q ดังนี้
| Parameter | tx_rig_act_bdr_new_renew |  |
| {NET_RE_PREM_LIFE} | (tot_re_nb_prem_life + tot_re_ren_prem_life + tot_re_rev_prem_life - tot_re_refund_prem_life) + ({RI_SUM_REVIVAL_PREM_LIFE} - {RI_SUM_REFUND_PREM_LIFE}) | {RI_SUM_REVIVAL_PREM_LIFE} กับ {RI_SUM_REFUND_PREM_LIFE} ที่เกิดขึ้นในรอบ Q เดียวกัน (suthanee.sa 27/03/2026) |
| {NET_RE_PREM_ACC} | (tot_re_nb_prem_add + tot_re_ren_prem_add + tot_re_rev_prem_add - tot_re_refund_prem_add) + ({RI_SUM_REVIVAL_PREM_ADD} - {RI_SUM_REFUND_PREM_ADD}) | {RI_SUM_REVIVAL_PREM_ADD} กับ {RI_SUM_REFUND_PREM_ADD} ที่เกิดขึ้นในรอบ Q เดียวกัน (suthanee.sa 27/03/2026) |
| {RE_COMM_LIFE} | tot_com_life + tot_com_refund_life + {TOT_RI_COMM_LIFE}(suthanee.sa 07/04/2026) | {TOT_RI_COMM_LIFE} ที่เกิดขึ้นในรอบ Q เดียวกัน (suthanee.sa 30/03/2026) |
| {RE_COMM_ACC} | tot_com_add + tot_com_refund_add + {TOT_RI_COMM_ACC}(suthanee.sa 07/04/2026) | {TOT_RI_COMM_ACC} ที่เกิดขึ้นในรอบ Q เดียวกัน (suthanee.sa 30/03/2026) |
4. คำนวณ Experience Refund
| parameter |  |  |  |
| {OER_PAID_LIFE} | Round ( ( ( {PREMIUM_LIFE} * (1 - ({PER_EXPENSE} / 100) ) ) - ( {CLAIM} - {EX_REFUND_PREVY} ) ) * ({PER_EXP_REFUND} / 100) , 2) | {CLAIM} ของ {COV_TYPE} = Life | เมื่อคำนวณเรียบร้อยแล้ว ถึงแม้ว่าจะมี ACC หรือไม่ก็ตาม ให้นำทั้ง 2 ค่ารวมกันในกรณีที่ รวมกันแล้ว มีค่า > 0 ให้นำทั้ง 2 ค่าไปออก Report ปกติในกรณีที่ รวมกันแล้ว มีค่า <= 0 ไม่ต้องประมวลผลต่อและไม่ต้องออก Report(#CR_RATE suthanee.sa 20/05/2026) |
| {OER_PAID_ACC} | Round ( ( ( {PREMIUM_ACC} * (1 - ({PER_EXPENSE} / 100) ) ) - {CLAIM} ) * ({PER_EXP_REFUND} / 100) , 2) | {CLAIM} ของ {COV_TYPE} = Accident |
| {NET_PREM_COM_LIFE} | {NET_RE_PREM_LIFE} - {RE_COMM_LIFE} |  |  |
| {NET_PREM_COM_ACC} | {NET_RE_PREM_ACC} - {RE_COMM_ACC} |  |  |
| {EX_REFUND_PROP_LIFE} | Round ( {NET_RE_PREM_LIFE} / {PREMIUM_LIFE} * {OER_PAID_LIFE} , 2 ) |  |  |
| {EX_REFUND_PROP_ACC} | Round ( {NET_RE_PREM_ACC} / {PREMIUM_ACC} * {OER_PAID_ACC} , 2 ) |  |  |
| {RE_EXP_REFUND_LIFE} | ถ้า {EX_REFUND_PROP_LIFE} ≤ {NET_PREM_COM_LIFE} ให้ใช้ค่า {EX_REFUND_PROP_LIFE}นอกเหนือจากนั้นให้ใช้ {NET_PREM_COM_LIFE} |  |  |
| {RE_EXP_REFUND_ACC} | ถ้า {EX_REFUND_PROP_ACC} ≤ {NET_PREM_COM_ACC} ให้ใช้ค่า {EX_REFUND_PROP_ACC}นอกเหนือจากนั้นให้ใช้ {NET_PREM_COM_ACC} |  |  |


===== PAGE 1316553446 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 4. ประมวลผล Actual - THREL_Grp_PA =====
### /*<![CDATA[*/
div.rbtoc1782955707498 {padding: 0px;}
div.rbtoc1782955707498 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955707498 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/



การคัดเลือกกรมธรรม์ (ACT)
การคำนวณ RI Premium (ACT)
การคำนวณ RI Commission (ACT)
การคำนวณ Alteration (ACT)
การคำนวณ RI Claim (ACT)
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ
- ถ้าเท่ากับ "THREL_Grp_PA" ให้ดำเนินการต่อ

##### การคัดเลือกกรมธรรม์ (ACT)
การคัดเลือกกรมธรรม์ (ACT)
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYYPeriod YYYY01 = 01/01/YYYY - 31/01/YYYYPeriod YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYYPeriod YYYY03 = 01/03/YYYY - 31/03/YYYY
- Period YYYY01 = 01/01/YYYY - 31/01/YYYY
- Period YYYY02 = 01/02/YYYY - วันที่สิ้นเดือน/02/YYYY
- Period YYYY03 = 01/03/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYYPeriod YYYY04 = 01/04/YYYY - 30/04/YYYYPeriod YYYY05 = 01/05/YYYY - 31/05/YYYYPeriod YYYY06 = 01/06/YYYY - 30/06/YYYY
- Period YYYY04 = 01/04/YYYY - 30/04/YYYY
- Period YYYY05 = 01/05/YYYY - 31/05/YYYY
- Period YYYY06 = 01/06/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYYPeriod YYYY07 = 01/07/YYYY - 31/07/YYYYPeriod YYYY08 = 01/08/YYYY - 31/08/YYYYPeriod YYYY09 = 01/09/YYYY - 30/09/YYYY
- Period YYYY07 = 01/07/YYYY - 31/07/YYYY
- Period YYYY08 = 01/08/YYYY - 31/08/YYYY
- Period YYYY09 = 01/09/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYYPeriod YYYY10 = 01/10/YYYY - 31/10/YYYYPeriod YYYY11 = 01/11/YYYY - 30/11/YYYYPeriod YYYY12 = 01/12/YYYY - 31/12/YYYY
- Period YYYY10 = 01/10/YYYY - 31/10/YYYY
- Period YYYY11 = 01/11/YYYY - 30/11/YYYY
- Period YYYY12 = 01/12/YYYY - 31/12/YYYY
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผลดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_name {DBD_CODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code {NOB}นำ นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en ถ้าเป็นค่าว่าง ให้ใช้ tx_rig_nature_business.type_business_th {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_option {SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_channel_code {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {PAY_MODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026) tx_stg_act_inforce_member (ค้นหาด้วย {POLICY_NO} = policy_no และ {COV_FROM} = promise_date)parametertx_stg_act_inforce_member {CERT_NO}cer_no{SEX}sex{AGE}age{CLASS_NO_CERT}class_no
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- cf_rig_treaty_policy_hd.coverage_period_from อยู่ในช่วง Quarter Period ที่ประมวลผล
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_name {DBD_CODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code {NOB}นำ นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en ถ้าเป็นค่าว่าง ให้ใช้ tx_rig_nature_business.type_business_th {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_option {SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_channel_code {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {PAY_MODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026) tx_stg_act_inforce_member (ค้นหาด้วย {POLICY_NO} = policy_no และ {COV_FROM} = promise_date)parametertx_stg_act_inforce_member {CERT_NO}cer_no{SEX}sex{AGE}age{CLASS_NO_CERT}class_no
- parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_name {DBD_CODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code {NOB}นำ นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.dbd_code ไปค้นหาที่ tx_rig_nature_business.dbd_code ใช้ข้อมูล tx_rig_nature_business.type_business_en ถ้าเป็นค่าว่าง ให้ใช้ tx_rig_nature_business.type_business_th {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_option {SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.sale_channel_code {CLOSING_QUARTER}ปีและ Q ของรอบการประมวลผล {PAY_MODE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026)
- tx_stg_act_inforce_member (ค้นหาด้วย {POLICY_NO} = policy_no และ {COV_FROM} = promise_date)parametertx_stg_act_inforce_member {CERT_NO}cer_no{SEX}sex{AGE}age{CLASS_NO_CERT}class_no

##### การคำนวณ RI Premium (ACT)
การคำนวณ RI Premium (ACT)
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_act_inforce_member โดยtx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- tx_stg_act_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_act_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_act_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_act_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_act_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
2. คำนวณ SA
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาคำนวณหาค่า SA ของแต่ละสมาชิกดังนี้parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
- parameterคำนวณ{SA_ACC}tx_stg_act_inforce_member.sum_insured_accident{SA_MUR}{SA_ACC} * ({PER_MUR} / 100){SA_LOADING}{SA_ACC} * ({PER_SPE_COV} / 100)
3. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_act_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_ACC}กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_ACC}กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_ACC}กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_MUR}กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_MUR}กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_MUR}กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_LOADING}กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_LOADING}กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_LOADING}
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_ACC}
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_ACC}
- กรณี {SA_ACC} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_ACC}
- กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_MUR}
- กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_MUR}
- กรณี {SA_MUR} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_MUR}
- กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1 = {L1_SA_LOADING}
- กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2 = {L2_SA_LOADING}
- กรณี {SA_LOADING} มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3 = {L3_SA_LOADING}
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * ({SA_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * ({SA_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน{L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
4. คำนวณ RI Premium
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_act_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_act_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2
- tx_stg_act_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round( ( ( {L1_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 ){L2_RI_PREM_LOAD} = Round( ( ( {L2_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 ){L3_RI_PREM_LOAD} = Round( ( ( {L3_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 )
- {L1_RI_PREM_LOAD} = Round( ( ( {L1_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 )
- {L2_RI_PREM_LOAD} = Round( ( ( {L2_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 )
- {L3_RI_PREM_LOAD} = Round( ( ( {L3_SR_LOAD} / 1000 ) * {RI_PREM_RATE} ) * ( {ALL_PER_LOAD} / 100 ) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L1_RI_PREM_ACC} ) / 100 , 2){L2_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L2_RI_PREM_ACC} ) / 100 , 2){L3_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L3_RI_PREM_ACC} ) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L1_RI_PREM_ACC} ) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L2_RI_PREM_ACC} ) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round( ( {PER_DIS_MUR} × {L3_RI_PREM_ACC} ) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L1_RI_PREM_ACC}) + {L1_RI_PREM_LOAD} ), 2){L2_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L2_RI_PREM_ACC}) + {L2_RI_PREM_LOAD} ), 2){L3_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L3_RI_PREM_ACC}) + {L3_RI_PREM_LOAD} ), 2)
- {L1_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L1_RI_PREM_ACC}) + {L1_RI_PREM_LOAD} ), 2)
- {L2_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L2_RI_PREM_ACC}) + {L2_RI_PREM_LOAD} ), 2)
- {L3_RI_PREM_DISC_GV} = Round( ({PER_DIS_VOL} / 100) × ( ( (1 − ({PER_DIS_MUR} / 100) ) × {L3_RI_PREM_ACC}) + {L3_RI_PREM_LOAD} ), 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ RI Premium Total{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)

##### การคำนวณ RI Commission (ACT)
การคำนวณ RI Commission (ACT)
1. คำนวณ RI Commission
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณRound( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )เก็บค่าลงใน {RI_COM_ACC}
- Round( ({RI_COM_RATE} / 100 ) × {RI_PREM_TOT} , 2 )
- เก็บค่าลงใน {RI_COM_ACC}

##### การคำนวณ Alteration (ACT)
การคำนวณ Alteration (ACT)
2. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_alteration โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after สนใจรายการ tx_stg_act_alteration เป็นหลัก คือมีรายการ Alter ที่เป็นของ Treaty นั้นตามเงื่อนไขรอบที่ดึง เอามาหมดจากนั้นหาข้อมูลรายละเอียดกรมอื่น ๆ ที่ all policy ด้วยเลขกรม (pa เปลี่ยนเลขกรมทุกปี)tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no {COM_DATE}first_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_FROM}promise_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_TO}end_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{PAY_MODE}pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026) ดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {NUM_DAY_YEAR}{COV_TO} - {COV_FROM} {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_nameUpdate Suthanee.sa 11/03/2026
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_alteration.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี วันที่ดังนี้อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- tx_stg_act_alteration.document_date tx_stg_act_alteration.alteration_dateการดำเนินการอยู่ใน Quarter ประมวลผลและอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่ก่อน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นอยู่ใน Quarter ประมวลผลและอยู่หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ใน Quarter ประมวลผลประมวลผลและแสดงผลในรอบ Quarter นั้นก่อน Quarter ประมวลผล (ภายใน 1 ปี)และอยู่ก่อน Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้นเกิน 1 ปีจาก Quarter ที่ประมวลผลและก่อน/อยู่ใน/หลัง Quarter ประมวลผลไม่ประมวลผลและไม่แสดงผลในรอบ Quarter นั้น
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after สนใจรายการ tx_stg_act_alteration เป็นหลัก คือมีรายการ Alter ที่เป็นของ Treaty นั้นตามเงื่อนไขรอบที่ดึง เอามาหมดจากนั้นหาข้อมูลรายละเอียดกรมอื่น ๆ ที่ all policy ด้วยเลขกรม (pa เปลี่ยนเลขกรมทุกปี)tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no {COM_DATE}first_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_FROM}promise_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_TO}end_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{PAY_MODE}pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026) ดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {NUM_DAY_YEAR}{COV_TO} - {COV_FROM} {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_nameUpdate Suthanee.sa 11/03/2026
- tx_stg_act_alteration parametertx_stg_act_alteration {POLICY_NO}policy_no {RE_CODE_FULL}reinsure_no {DOC_DATE}document_dateวันที่ทำรายการ{AL_MOVE}alteration_movementประเภทสลักหลัง{AL_STATUS}alteration_statusสถานะสลักหลัง{AL_DATE}alteration_dateวันที่มีผลบังคับของสลักหลัง{MEM_EFF_DATE}member_effective_dateวันเริ่มคุ้มครองของสมาชิก{CERT_NO}cert_no {SEX}sex {AGE}age {INS_ACC_DEATH}sum_insured_accident {INS_ACC_DEATH_BEF}sum_insured_accident_before {INS_ACC_DEATH_AFT}sum_insured_accident_after สนใจรายการ tx_stg_act_alteration เป็นหลัก คือมีรายการ Alter ที่เป็นของ Treaty นั้นตามเงื่อนไขรอบที่ดึง เอามาหมดจากนั้นหาข้อมูลรายละเอียดกรมอื่น ๆ ที่ all policy ด้วยเลขกรม (pa เปลี่ยนเลขกรมทุกปี)
- tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no {COM_DATE}first_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_FROM}promise_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{COV_TO}end_dateไม่ดึงจากที่นี่ suthanee.sa 02/03/2026{PAY_MODE}pay_type {EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026) {F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026)
- ดึงข้อมูลกรมธรรม์ที่ cf_rig_treaty_policy_hd โดยcf_rig_treaty_policy_hd.policy_no = {POLICY_NO}{AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {NUM_DAY_YEAR}{COV_TO} - {COV_FROM} {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_nameUpdate Suthanee.sa 11/03/2026
- cf_rig_treaty_policy_hd.policy_no = {POLICY_NO}
- {AL_DATE} อยู่ในช่วง cf_rig_treaty_policy_hd.coverage_period_from และ cf_rig_treaty_policy_hd.coverage_period_to ของกรมธรรม์นั้นparametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {NUM_DAY_YEAR}{COV_TO} - {COV_FROM} {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {CODE_NAME_POL}code_name {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.ri_status {POL_NAME}นำ {POLICY_NO} ไปหาใน tx_stg_act_all_policy.policy_nameUpdate Suthanee.sa 11/03/2026
- แบ่งชุดประเภทข้อมูลดังนี้ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยAlteration Type New Member / Addition{NM}{AL_MOVE} = AdditionCancellation / Termination{CL}{AL_MOVE} = TerminationIncreased Sum Assured{IC}{AL_MOVE} = IncreaseSADecreased Sum Assured{DC}{AL_MOVE} = DecreaseSA
- Alteration Type New Member / Addition{NM}{AL_MOVE} = AdditionCancellation / Termination{CL}{AL_MOVE} = TerminationIncreased Sum Assured{IC}{AL_MOVE} = IncreaseSADecreased Sum Assured{DC}{AL_MOVE} = DecreaseSA
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จาก tx_stg_act_alteration{INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- {INS_ACC_DEATH} มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual "004"
- เตรียมข้อมูล Layer ดังนี้ โดยตรวจสอบตาม {COV_FROM} ของกรมธรรม์ที่กำลังคำนวณอยู่ ตรวจสอบกับวันที่ Effective Date From – Effective Date To ของรายการที่เป็น A ใน {CONDITION_ID}Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum / 1000{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum / 1000{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum / 1000{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum / 1000{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum / 1000{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum / 1000{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX} / 1000
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ของกรมธรรม์
- ค้นหา Rate ของสมาชิกแต่ละคนที่cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2{AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age{OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2
- {AGE} มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมดRound({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )เก็บค่าลงใน {ALL_PER_LOAD}
- Round({PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}), 2 )
- เก็บค่าลงใน {ALL_PER_LOAD}
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า RI Commission Rateเก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
3. Alteration - New Member และ Termination
- สำหรับชุดข้อมูล {NM} และ {CL} คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)คำนวณ REINSURANCE PREMIUMParameterคำนวณ {RE_PREM_ACC}Round( {SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {RE_PREM_LOAD}Round( {SUM_RE_INS_LOAD} * {RI_PREM_RATE} * ( {ALL_PER_LOAD} / 100 ) * {NUM_DAY_COV} / {NUM_DAY_YEAR} , 2 )ปรับแก้ {ALL_PER_LOAD} / 100 suthanee.sa 03/02/2026{RE_PREM_DIS_MA}Round( ( {PER_DIS_MUR} / 100 ) * {RE_PREM_ACC} , 2 )เพิ่ม Round suthanee.sa 05/03/2026{RE_PREM_DIS_GV}Round( ( {PER_DIS_VOL} / 100 ) * ( ( ( 1 - ( {PER_DIS_MUR / 100 ) ) * {RE_PREM_ACC} ) + {RE_PREM_LOAD} ), 2 )ปรับแก้ {PER_DIS_MUR} / 100 และเพิ่ม () กับ Round suthanee.sa 05/03/2026{SUM_DISC}Round( {RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}, 2 ) {RE_COM}Round( ( {RE_PREM_ACC} + {RE_PREM_LOAD} - {SUM_DISC} ) * ( {RI_COM_RATE} / 100 ) , 2 )ปรับแก้ {RI_COM_RATE} / 100 suthanee.sa 03/02/2026
- คำนวณ SUM INSURED และ SUM REINSUREDParameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}{SUM_INS_ACC_DEATH}{INS_ACC_DEATH} / 1000{SUM_INS_MUR}{SUM_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_INS_LOAD}{SUM_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)Parameterคำนวณค่าที่เก็บ{SUM_RE_INS_ACC_DEATH}ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SUM_INS_ACC_DEATH} - {L1_MAX}) * ({L2_PER} / 100)ถ้า {SUM_INS_ACC_DEATH} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SUM_INS_ACC_DEATH} - {L2_MAX}) * ({L3_PER} / 100){SUM_RE_INS_MUR} {SUM_RE_INS_ACC_DEATH} * ({PER_MUR} / 100){SUM_RE_INS_LOAD} {SUM_RE_INS_ACC_DEATH} * ({PER_SPE_COV} / 100)
- คำนวณ REINSURANCE PREMIUMParameterคำนวณ {RE_PREM_ACC}Round( {SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {RE_PREM_LOAD}Round( {SUM_RE_INS_LOAD} * {RI_PREM_RATE} * ( {ALL_PER_LOAD} / 100 ) * {NUM_DAY_COV} / {NUM_DAY_YEAR} , 2 )ปรับแก้ {ALL_PER_LOAD} / 100 suthanee.sa 03/02/2026{RE_PREM_DIS_MA}Round( ( {PER_DIS_MUR} / 100 ) * {RE_PREM_ACC} , 2 )เพิ่ม Round suthanee.sa 05/03/2026{RE_PREM_DIS_GV}Round( ( {PER_DIS_VOL} / 100 ) * ( ( ( 1 - ( {PER_DIS_MUR / 100 ) ) * {RE_PREM_ACC} ) + {RE_PREM_LOAD} ), 2 )ปรับแก้ {PER_DIS_MUR} / 100 และเพิ่ม () กับ Round suthanee.sa 05/03/2026{SUM_DISC}Round( {RE_PREM_DIS_MA} + {RE_PREM_DIS_GV}, 2 ) {RE_COM}Round( ( {RE_PREM_ACC} + {RE_PREM_LOAD} - {SUM_DISC} ) * ( {RI_COM_RATE} / 100 ) , 2 )ปรับแก้ {RI_COM_RATE} / 100 suthanee.sa 03/02/2026
3. Alteration - Increased SA และ Decreased SA
- สำหรับชุดข้อมูล {IC} และ {DC} Parameter คำนวณ{NUM_DAY_COV}{COV_TO} - {AL_DATE}
- คำนวณ SA / SR / RI Prem.(Before Change) ACCIDENT Parameter คำนวณ {SA_ACC_BEF}{INS_ACC_DEATH_BEF} / 1000 {SR_ACC_BEF}ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0 ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_BEF} - {L1_MAX}) * ({L2_PER} / 100) ถ้า {SA_ACC_BEF} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_BEF} - {L2_MAX}) * ({L3_PER} / 100) {RE_PREM_ACC_BEF}Round({SR_ACC_BEF} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {SA_MUR_BEF}{SA_ACC_BEF} * ({PER_MUR} / 100) {SR_MUR_BEF}{SR_ACC_BEF} * ({PER_MUR} / 100) {RE_PREM_MUR_BEF}0 {SA_LOAD_BEF}{SA_ACC_BEF} * ({PER_SPE_COV} / 100) {SR_LOAD_BEF}{SR_ACC_BEF} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_BEF}Round({SR_LOAD_BEF} * {RI_PREM_RATE} * ({ALL_PER_LOAD} / 100) * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {SA_DIS_BEF}0 {SR_DIS_BEF}0 {RE_PREM_DIS_MA_BEF}Round(({PER_DIS_MUR} / 100) * {RE_PREM_ACC_BEF}, 2 ) เพิ่ม Round {RE_PREM_DIS_GV_BEF}Round( ( {PER_DIS_VOL} / 100 ) * ( ( (1 - ({PER_DIS_MUR} / 100 ) ) * {RE_PREM_ACC_BEF} ) + {RE_PREM_LOAD_BEF} ), 2 ) ปรับแก้ {PER_DIS_MUR} / 100 และเพิ่ม () กับ Round suthanee.sa 05/03/2026{SUM_DISC_BEF}Round({RE_PREM_DIS_MA_BEF} + {RE_PREM_DIS_GV_BEF}, 2 ) เพิ่ม Round suthanee.sa 03/02/2026
- คำนวณ SA / SR / RI Prem.(After Change) ACCIDENT (กรณีบันทึกข้อมูลลง tx_rig_act_alter_mem ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 12/03/2026)Parameterคำนวณ {SA_ACC_AFT}{INS_ACC_DEATH_AFT} / 1000 {SR_ACC_AFT}ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L1_MIN} และ น้อยกว่าหรือเท่ากับ {L1_MAX}0 ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L2_MIN} และ น้อยกว่าหรือเท่ากับ {L2_MAX}({SA_ACC_AFT} - {L1_MAX}) * ({L2_PER} / 100) ถ้า {SA_ACC_AFT} มากกว่าหรือเท่ากับ {L3_MIN} และ น้อยกว่าหรือเท่ากับ {L3_MAX}({L2_MAX} - {L1_MAX}) * ({L2_PER} / 100) + ({SA_ACC_AFT} - {L2_MAX}) * ({L3_PER} / 100) {RE_PREM_ACC_AFT} Round({SR_ACC_AFT} * {RI_PREM_RATE} * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {SA_MUR_AFT}{SA_ACC_AFT} * ({PER_MUR} / 100) {SR_MUR_AFT}{SR_ACC_AFT} * ({PER_MUR} / 100) {RE_PREM_MUR_AFT}0 {SA_LOAD_AFT}{SA_ACC_AFT} * ({PER_SPE_COV} / 100) {SR_LOAD_AFT}{SR_ACC_AFT} * ({PER_SPE_COV} / 100) {RE_PREM_LOAD_AFT}Round({SR_LOAD_AFT} * {RI_PREM_RATE} * ({ALL_PER_LOAD} / 100) * {NUM_DAY_COV} / {NUM_DAY_YEAR}, 2 ) {SA_DIS_AFT}0 {SR_DIS_AFT}0 {RE_PREM_DIS_MA_AFT}Round(({PER_DIS_MUR} / 100) * {RE_PREM_ACC_AFT}, 2 ) เพิ่ม Round {RE_PREM_DIS_GV_AFT}Round( ( {PER_DIS_VOL} / 100) * ( ( (1 - ({PER_DIS_MUR} / 100 ) ) * {RE_PREM_ACC_AFT} ) + {RE_PREM_LOAD_AFT} ), 2 ) ปรับแก้ {PER_DIS_MUR} / 100 และเพิ่ม () กับ Round suthanee.sa 05/03/2026{SUM_DISC_AFT}Round({RE_PREM_DIS_MA_AFT} + {RE_PREM_DIS_GV_AFT}, 2 ) เพิ่ม Round suthanee.sa 03/02/2026เฉพาะ Increased 4. คำนวณ SA / SR / RI Prem.(Increased) ACCIDENT Parameterคำนวณ {SA_INC_ACC}{SA_ACC_AFT} - {SA_ACC_BEF}{SR_INC_ACC}{SR_ACC_AFT} - {SR_ACC_BEF}{RE_PREM_INC_ACC }{RE_PREM_ACC_AFT} - {RE_PREM_ACC_BEF}5. คำนวณ SA / SR / RI Prem.(Increased) MURDER Parameterคำนวณ {SA_INC_MUR}{SA_MUR_AFT} - {SA_MUR_BEF}{SR_INC_MUR}{SR_MUR_AFT} - {SR_MUR_BEF}{RE_PREM_INC_MUR }06. คำนวณ SA / SR / RI Prem.(Increased) LOADINGS Parameterคำนวณ {SA_INC_LOAD}{SA_LOAD_AFT} - {SA_LOAD_BEF}{SR_INC_LOAD}{SR_LOAD_AFT} - {SR_LOAD_BEF}{RE_PREM_INC_LOAD }{RE_PREM_LOAD_AFT} - {RE_PREM_LOAD_BEF}7. คำนวณ SA / SR / RI Prem.(Increased) DISCOUNT Parameterคำนวณ {SA_INC_DIS}0{SR_INC_DIS}0{RE_PREM_INC_DIS }{SUM_DISC_AFT} - {SUM_DISC_BEF}8. คำนวณ Commission - Increased Parameterคำนวณ {RE_COM_INC}Round( ( {RE_PREM_INC_ACC } + {RE_PREM_INC_LOAD} - {RE_PREM_INC_DIS } ) * ( {RI_COM_RATE} / 100 ) , 2 )เพิ่ม {RI_COM_RATE} / 100 suthanee.sa 03/02/2026 เฉพาะ Decreased 4. คำนวณ SA / SR / RI Prem.(Decreased) ACCIDENT Parameterคำนวณ {SA_DEC_ACC}{SA_ACC_BEF} - {SA_ACC_AFT}{SR_DEC_ACC}{SR_ACC_BEF} - {SR_ACC_AFT}{RE_PREM_DEC_ACC}{RE_PREM_ACC_BEF} - {RE_PREM_ACC_AFT}5. คำนวณ SA / SR / RI Prem.(Decreased) MURDER Parameterคำนวณ {SA_DEC_MUR}{SA_MUR_BEF} - {SA_MUR_AFT}{SR_DEC_MUR}{SR_MUR_BEF} - {SR_MUR_AFT}{RE_PREM_DEC_MUR}06. คำนวณ SA / SR / RI Prem.(Decreased) LOADINGS Parameterคำนวณ {SA_DEC_LOAD}{SA_LOAD_BEF} - {SA_LOAD_AFT}{SR_DEC_LOAD}{SR_LOAD_BEF} - {SR_LOAD_AFT}{RE_PREM_DEC_LOAD}{RE_PREM_LOAD_BEF} - {RE_PREM_LOAD_AFT}7.คำนวณ SA / SR / RI Prem.(Decreased) DISCOUNT Parameterคำนวณ {SA_DEC_DIS}0{SR_DEC_DIS}0{RE_PREM_DEC_DIS}{SUM_DISC_BEF} - {SUM_DISC_AFT}8. คำนวณ Commission - Decreased Parameterคำนวณ {RE_COM_DEC}Round( ( {RE_PREM_DEC_ACC } + {RE_PREM_DEC_LOAD} - {RE_PREM_DEC_DIS} ) * ( {RI_COM_RATE} / 100 ) , 2 )เพิ่ม {RI_COM_RATE} / 100 suthanee.sa 03/02/2026

##### การคำนวณ RI Claim (ACT)
การคำนวณ RI Claim (ACT)
2. คัดเลือกกรมธรรม์
1. คัดเลือกกรมธรรม์
- แปลง Quater ที่ต้องการประมวลผลเป็นช่วงวันที่Q1 = 01/01/YYYY - 31/03/YYYYQ2 = 01/04/YYYY - 30/06/YYYYQ3 = 01/07/YYYY - 30/09/YYYYQ4 = 01/10/YYYY - 31-12/YYYY
- Q1 = 01/01/YYYY - 31/03/YYYY
- Q2 = 01/04/YYYY - 30/06/YYYY
- Q3 = 01/07/YYYY - 30/09/YYYY
- Q4 = 01/10/YYYY - 31-12/YYYY
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_act_death_claim, tx_stg_act_tpd_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปเลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_noดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Death tx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{TPD_INS}tpd_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {DOC_NO} และ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no {COM_DATE}first_dateเปลี่ยนที่ดึง suthanee.sa 09/03/2026{COV_TO}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.coverage_period_toเปลี่ยนที่ดึง suthanee.sa 03/02/2026{RE_CODE_FULL}reinsur_no {POLICY_STATUS}status {RI_POL_STATUS}ri_status {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {CODE_NAME_POL}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.code_name {PAY_MODE}pay_type {SALE_OPTION}sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}sale_channel_code (suthanee.sa 26/02/2026) {POL_NAME}policy_name(suthanee.sa 11/03/2026){POLIC_COV}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.coverage(suthanee.sa 12/03/2026){EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026)(suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026)(suthanee.sa 24/03/2026){OCC}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.occ_class(suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกในtx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปtx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_death_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_tpd_claim.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- tx_stg_act_investigation_expense.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- เลือกเฉพาะกรมธรรม์ที่มี approved_date อยู่ในช่วงของวันที่ใน Quater ที่ต้องการประมวลผลtx_stg_act_death_claim.approve_datetx_stg_act_tpd_claim.approved_datetx_stg_act_investigation_expense.reinsured_no
- tx_stg_act_death_claim.approve_date
- tx_stg_act_tpd_claim.approved_date
- tx_stg_act_investigation_expense.reinsured_no
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Death tx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{TPD_INS}tpd_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {DOC_NO} และ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit 1Life2TPD/Dismemberment3Dismemberment4Medical5Accident Death tx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{TPD_INS}tpd_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {DOC_NO} และ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล
- tx_stg_act_death_claim benefit = 1 , 5parametertx_stg_act_death_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{DEATH_DATE}death_date{APR_DATE}approve_date{LIFE_INS}life_insur_request{ACC_INS}acc_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_LIFE}claim_life{CLAIM_ACC}claim_acc{CLAIM_TOT}total_claim{CLAIM_TYPE}เลือกเฉพาะรายการที่ {CLAIM_ACC} > 0 เท่ากับ "Accident Death"{PAY_DATE}pay_date{DEATH_CAUSE}death_cause_remark{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)
- tx_stg_act_tpd_claim benefit = 2 , 3parametertx_stg_act_tpd_claim{POLICY_NO}policy_no{COV_FROM}promise_date{POLICY_YEAR}policy_year{RE_CODE_FULL}reinsure_no{CERT_NO}certific_cust_no{ATT_AGE}attn_age{SEX}sex{ACC_DATE}accident_date{APR_DATE}approve_date{DISMEM_INS}dismemberment_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{TPD_INS}tpd_insur_request ถ้าน้อยกว่าเท่ากับ {L1_INSU_MAX} ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ{CLAIM_ACC}claim_accident{CLAIM_TPD}claim_tpd{CLAIM_TOT}total_claim{CLAIM_TYPE}claim_type{PAY_DATE}pay_date{CLAIM_CAUSE}claim_cause{INFROM_NO}inform_no{CLASS_NO}class_no{CLAIM_STATUS}claim_status เฉพาะรายการที่มีสถานะเป็น 0 หรือ 2 เท่านั้น (Suthanee.sa 20/03/2026)
- tx_stg_act_investigation_expenseเลือกเฉพาะรายการที่มี รายการเคลม {DOC_NO} และ {CLAIM_TYPE} ตรงกับ tx_stg_act_death_claim กับ tx_stg_act_tpd_claim ที่ถูกดึงมาตามเงื่อนไขแล้วเท่านั้นparametertx_stg_act_investigation_expense {DOC_NO}doc_no {POLICY_CODE}policy_code {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COV_FROM}effective_date {CERT_NO}cert_no {CLAIM_NO}claim_no {APR_DATE}approve_date {EVENT_DATE}event_date {EXPEN_AMOUNT}expense_amount {DOC_DATE}doc_date {CLAIM_TYPE}claim_type {INFROM_DATE}inform_date {RE_CODE_FULL}reinsure_no {DOC_STATUS}doc_status {INV_AMOUNT}investigation_expense#M06 suthanee.sa 21/04/2026{LEG_AMOUNT}medical_expense#M06 suthanee.sa 21/04/2026{MED_AMOUNT}legal_expense#M06 suthanee.sa 21/04/2026
- รายการที่นำไปประมวลผลต่อ กรณี {CLAIM_STATUS} มีค่าไม่เท่ากับ 0 และไม่มีรายการ tx_stg_act_investigation_expense ไม่ต้องนำไปประมวลผล
- นำ {POLICY_NO} ที่ได้ ไปดึงข้อมูลเพิ่มเติมใน tx_stg_act_all_policyparametertx_stg_act_all_policy {POLICY_NO}policy_no {COM_DATE}first_dateเปลี่ยนที่ดึง suthanee.sa 09/03/2026{COV_TO}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.coverage_period_toเปลี่ยนที่ดึง suthanee.sa 03/02/2026{RE_CODE_FULL}reinsur_no {POLICY_STATUS}status {RI_POL_STATUS}ri_status {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {CODE_NAME_POL}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.code_name {PAY_MODE}pay_type {SALE_OPTION}sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}sale_channel_code (suthanee.sa 26/02/2026) {POL_NAME}policy_name(suthanee.sa 11/03/2026){POLIC_COV}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.coverage(suthanee.sa 12/03/2026){EXPIRE_DATE}นำ {POLICY_NO} expire_date (suthanee.sa 24/03/2026)(suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} f_receipt_date (suthanee.sa 24/03/2026)(suthanee.sa 24/03/2026){OCC}นำ {POLICY_NO} ไปหาที่ cf_rig_treaty_policy_hd.occ_class(suthanee.sa 24/03/2026)
- ตรวจสอบ {RI_POL_STATUS} ที่ได้ ต้องไม่เท่ากับ Cancelตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยกรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อกรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
- กรณีไม่เท่ากับ Cancel จะนำไปประมวลผลต่อ
- กรณีเท่ากับ Cancel จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "005"
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากรายการเคลมทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment ให้ใช้ค่า {DISMEM_INS}และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ทึนของรายการเคลมต้อง มากกว่าเท่ากับ {MIN_SUM_ASU} โดยถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment ให้ใช้ค่า {DISMEM_INS}
- ถ้า {CLAIM_TYPE} = Accident Death ให้ใช้ค่า {ACC_INS}
- ถ้า {CLAIM_TYPE} = TPD ให้ใช้ค่า {TPD_INS}
- ถ้า {CLAIM_TYPE} = Dismemberment ให้ใช้ค่า {DISMEM_INS}
- และ {AGE} น้อยกว่าหรือเท่ากับ {AGE_LIMIT} ของกรมธรรม์นั้นกรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ {CERT_NO} ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข {CERT_NO} ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มา parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX} ตรวจสอบ {ACC_INS} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ {SR_ACC_DEATH}ถ้า {ACC_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {ACC_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_ACC} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 ) (เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {ACC_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( ( ({CLAIM_ACC} - {L2_INSU_MAX}) * ({L3_PER} / 100) ) + ( ( {L2_INSU_MAX} - {L1_INSU_MAX} ) * ( {L2_PER} / 100 ) ) , 2 ) ตรวจสอบ {DISMEM_INS} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ {SR_DISMEM}ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_ACC} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 )(เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( ( ({CLAIM_ACC} - {L2_INSU_MAX}) * ({L3_PER} / 100)) + ( ( {L2_INSU_MAX} - {L1_INSU_MAX} ) * ( {L2_PER} / 100) ) , 2 ) ตรวจสอบ {TPD_INS} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ {SR_TPD}ถ้า {TPD_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {TPD_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_TPD} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 )(เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {TPD_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( (({CLAIM_TPD} - {L2_INSU_MAX}) * ({L3_PER} / 100)) + (({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)) , 2 )
- ตรวจสอบ {ACC_INS} เพื่อแบ่ง Layer (Accident Death)parameterเงื่อนไขการแบ่งคำนวณ {SR_ACC_DEATH}ถ้า {ACC_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {ACC_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_ACC} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 ) (เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {ACC_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( ( ({CLAIM_ACC} - {L2_INSU_MAX}) * ({L3_PER} / 100) ) + ( ( {L2_INSU_MAX} - {L1_INSU_MAX} ) * ( {L2_PER} / 100 ) ) , 2 )
- ตรวจสอบ {DISMEM_INS} เพื่อแบ่ง Layer (Dismemberment)parameterเงื่อนไขการแบ่งคำนวณ {SR_DISMEM}ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_ACC} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 )(เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {DISMEM_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( ( ({CLAIM_ACC} - {L2_INSU_MAX}) * ({L3_PER} / 100)) + ( ( {L2_INSU_MAX} - {L1_INSU_MAX} ) * ( {L2_PER} / 100) ) , 2 )
- ตรวจสอบ {TPD_INS} เพื่อแบ่ง Layer (TPD)parameterเงื่อนไขการแบ่งคำนวณ {SR_TPD}ถ้า {TPD_INS} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}0 ไม่คำนวณ ไม่ส่งประกันต่อ ของรายการคเลมนั้น ๆ (suthanee.sa 09/03/2026) ถ้า {TPD_INS} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Round ( ({CLAIM_TPD} - {L1_INSU_MAX}) * ({L2_PER} / 100) , 2 )(เปลี่ยนจาก {L1_L2_MID} เป็น {L1_INSU_MAX} suthanee.sa 30/03/2026)ถ้า {TPD_INS} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}Round ( (({CLAIM_TPD} - {L2_INSU_MAX}) * ({L3_PER} / 100)) + (({L2_INSU_MAX} - {L1_INSU_MAX}) * ({L2_PER} / 100)) , 2 )
2. คำนวณ RI Claim
- คำนวณ Reinsurer's Share Claimparameterคำนวณ{RE_CLAIM_ACC_DEATH}Round ( {SR_ACC_DEATH} * ({CLAIM_ACC} / {ACC_INS}) , 2 ){RE_CLAIM_DISMEM}Round ( {SR_DISMEM} * ({CLAIM_ACC} / {DISMEM_INS}) , 2 ){RE_CLAIM_TPD}Round ( {SR_TPD} * ({CLAIM_ACC} / {TPD_INS}) , 2 )
- คำนวณ Reinsurer's Share Investigation Expense ประเภท Investigation ให้ดูตามรายการเคลมparameterคำนวณ {RE_INV_ACC_DEATH}Round ( {SR_ACC_DEATH} * ({INV_AMOUNT} / {ACC_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_LEG_ACC_DEATH}Round ( {SR_ACC_DEATH} * ({LEG_AMOUNT} / {ACC_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_MED_ACC_DEATH}Round ( {SR_ACC_DEATH} * ({MED_AMOUNT} / {ACC_INS}) , 2 )#M06 suthanee.sa 21/04/2026{SUM_RE_EXP_ACC_DEATH}{RE_INV_ACC_DEATH} + {RE_LEG_ACC_DEATH} + {RE_MED_ACC_DEATH}#M06 suthanee.sa 21/04/2026{RE_INV_DISMEM}Round ( {SR_DISMEM} * ({INV_AMOUNT} / {DISMEM_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_LEG_DISMEM}Round ( {SR_DISMEM} * ({LEG_AMOUNT} / {DISMEM_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_MED_DISMEM}Round ( {SR_DISMEM} * ({MED_AMOUNT} / {DISMEM_INS}) , 2 )#M06 suthanee.sa 21/04/2026{SUM_RE_EXP_DISMEM}{RE_INV_DISMEM} + {RE_LEG_DISMEM} + {RE_MED_DISMEM}#M06 suthanee.sa 21/04/2026{RE_INV_TPD}Round ( {SR_TPD} * ({INV_AMOUNT} / {TPD_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_LEG_TPD}Round ( {SR_TPD} * ({LEG_AMOUNT} / {TPD_INS}) , 2 )#M06 suthanee.sa 21/04/2026{RE_MED_TPD}Round ( {SR_TPD} * ({MED_AMOUNT} / {TPD_INS}) , 2 )#M06 suthanee.sa 21/04/2026{SUM_RE_EXP_TPD}{RE_INV_TPD} + {RE_LEG_TPD} + {RE_MED_TPD}#M06 suthanee.sa 21/04/2026
- รวมค่า Expense #M06 suthanee.sa 21/04/2026parameterคำนวณ {RI_CLAIM_EXPENSE_INV}{RE_INV_ACC_DEATH} + {RE_INV_DISMEM} + {RE_INV_TPD}#M06 suthanee.sa 23/04/2026{RI_CLAIM_EXPENSE_LEG}{RE_LEG_ACC_DEATH} + {RE_LEG_DISMEM} + {RE_LEG_TPD}#M06 suthanee.sa 23/04/2026{RI_CLAIM_EXPENSE_MED}{RE_MED_ACC_DEATH} + {RE_MED_DISMEM} + {RE_MED_TPD}#M06 suthanee.sa 23/04/2026{SUM_RI_CLAIM_EXPENSE_INV}{RI_CLAIM_EXPENSE_INV} + {RI_CLAIM_EXPENSE_LEG} + {RI_CLAIM_EXPENSE_MED}#M06 suthanee.sa 23/04/2026


===== PAGE 1312096925 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) =====
##### /*<![CDATA[*/
div.rbtoc1782955710479 {padding: 0px;}
div.rbtoc1782955710479 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955710479 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

tx_rig_act_hd
tx_rig_act_policy_hd
tx_rig_act_policy_layer
tx_rig_act_pol_mem
tx_rig_act_claim_mem
tx_rig_act_alter_mem
tx_rig_act_bdr_new_renew
tx_rig_act_bdr_pol_mem
tx_rig_act_bdr_claim
tx_rig_act_bdr_claim_mem
tx_rig_act_bdr_alter
tx_rig_act_bdr_alter_mem
tx_rig_policy_base

##### tx_rig_act_hd
tx_rig_act_hd
| No. | Attribute Name |  |
| 1 | rig_act_hd_id | running no. |
| 2 | cf_reinsurer_id | cf_reinsurer.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 3 | cf_treaty_id | cf_rig_treaty.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 4 | treaty_code | {TREATY_CODE} |
| 5 | closing_quarter | Quarter ที่ประมวลผล ex. 2026Q1 |
| 6 | quarter_year | ปีประมวลผล ex. 2026 |
| 7 | quarter | quarter ประมวลผล ex. 1 |
| 8 | status | A |
| 9 | edw_status | NULL |
| 10 | edw_status_desc | NULL |
| 11 | ri_std_hd_id | NULL |
| 12 | mps_status | NULL |
| 13 | mps_status_desc | NULL |
| 14 | ri_std_hd_id_oic | NULL |
| 15 | ri_premium | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 16 | ri_commission | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 17 | claim_recovery | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 18 | sum_pc_current_treaty | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 19 | due_to | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 20 | remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |
| 21 | usage_status | เมื่อสร้างรายการครั้งแรกให้บันทึก A |
| 22 | ri_method | {TREATY_CODE} ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 |
| 23 | sum_records | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 24 | period | ปีและเดือนของงวดทำรายการ ณ วันที่ run actua |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_policy_hd
tx_rig_act_policy_hd
Group ข้อมูลตาม policy_no , effective_date , data_quarter
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_hd_id | running no. |  |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | reinsurer_no | {RE_CODE_FULL} |  |
| 5 | ri_com_date | {COM_DATE} |  |
| 6 | first_date | treaty_code = "GIB_Grp_Direct_EB"{FIRST_DATE}treaty_code <> "GIB_Grp_Direct_EB"{COM_DATE} |  |
| 7 | effective_date | {COV_FROM} หรือ {EFF_DATE}ในกรณีที่เป็น {POLICY_NO} เดียวกัน และมีค่า {COV_FROM} หรือ {EFF_DATE} เท่ากัน ไม่ต้องสร้างรายการเพิ่ม |  |
| 8 | mode_pay | ถ้า treaty_code = "GIB_Grp_Direct_EB"{PAY_MODE_GIB}treaty_code <> "GIB_Grp_Direct_EB"{PAY_MODE} |  |
| 9 | policy_year | treaty_code = "GIB_Grp_Direct_EB"{POLICY_YEAR_RI} treaty_code <> "GIB_Grp_Direct_EB"{POLICY_YEAR} |  |
| 10 | data_quarter | {DATA_QUT} |  |
| 11 | period | {PERIOD} |  |
| 12 | policy_status | treaty_code = "GIB_Grp_Direct_EB"นำค่า {GIB_RI_STATUS} ที่ได้ แปลงค่าใน cf_lookup_catalogที่ cf_lookup_catalog.parent_id = 1003300ถ้า {GIB_RI_STATUS} = cf_lookup_catalog.lookup_key ใดให้นำ cf_lookup_catalog.description มาเก็บข้อมูลtreaty_code <> "GIB_Grp_Direct_EB"{POLICY_STATUS} |  |
| 13 | report_policy_status | {REPORT_POL_STATUS} |  |
| 14 | ri_policy_status | {RI_POL_STATUS} |  |
| 15 | pol_name | {POL_NAME} |  |
| 16 | nob | {NOB} |  |
| 17 | renew_lapse_date | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceให้บันทึก {COV_FROM}ถ้า {GIB_RI_STATUS} = Lapsedให้บันทึก {LAPSE_DATE} treaty_code <> "GIB_Grp_Direct_EB"NULL |  |
| 18 | policy_period | {PERIOD} |  |
| 19 | sale_option | {SALE_OPTION} |  |
| 20 | sale_channel_code | {SALE_CHANEL} |  |
| 21 | code_name_pol | {CODE_NAME_POL} |  |
| 22 | policy_ri_period | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceบันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025ถ้า {GIB_RI_STATUS} = Lapsedบันทึก "{COV_FROM}" + " - " + ({LAPSE_DATE} - 1 วัน) ตัวอย่าง 01/02/2025 - 31/12/2025treaty_code <> "GIB_Grp_Direct_EB"บันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025(suthanee.sa 10/04/2026) |  |
| 23 | expire_date | {EXPIRE_DATE} (suthanee.sa 24/03/2026) |  |
| 24 | f_receipt_date | {F_RECIEPT} (suthanee.sa 24/03/2026) |  |
| 25 | full_year | {FULL_YEAR} (suthanee.sa 21/04/2026) |  |
|  |  |  |  |
| 1 | number_of_mem_life | {MEM_LIFE} | จากกระบวน การคำนวณ Experience Refund (ACT) เฉพาะ treaty_code = "GIB_Grp_Direct_EB" โดยในกรมธรรม์เดียวกัน สามารถคำนวณได้ทั้ง Life และ Accident ถ้ามีค่าในความคุ้มครองใด ให้ลงได้ใน record เดียวกัน |
| 2 | number_of_mem_acc | {MEM_ACC_DEATH} |
| 3 | ex_refund_rate_life | ถ้า {COV_TYPE} = Life{PER_EXP_REFUND} |
| 4 | ex_refund_rate_acc | ถ้า {COV_TYPE} = Accident{PER_EXP_REFUND} |
| 5 | ex_pol_year_life | ถ้า {COV_TYPE} = Life{PER_EXPENSE} |
| 6 | ex_pol_year_acc | ถ้า {COV_TYPE} = Accident{PER_EXPENSE} |
| 7 | gross_prem_life | {PREMIUM_LIFE} |
| 8 | gross_prem_acc | {PREMIUM_ACC} |
| 9 | claim_paid_year_life | ถ้า {COV_TYPE} = Lifeให้บันทึก {CLAIM_PAID_POL} |
| 10 | claim_paid_year_acc | ถ้า {COV_TYPE} = Accidentให้บันทึก {CLAIM_PAID_POL} |
| 11 | ori_ex_refund_life | {OER_PAID_LIFE} |
| 12 | ori_ex_refund_acc | {OER_PAID_ACC} |
| 13 | net_re_prem_life | {NET_RE_PREM_LIFE} |
| 14 | net_re_prem_acc | {NET_RE_PREM_ACC} |
| 15 | re_com_life | {RE_COMM_LIFE} |
| 16 | re_com_acc | {RE_COMM_ACC} |
| 17 | re_ex_refund_life | {RE_EXP_REFUND_LIFE} |
| 18 | re_ex_refund_acc | {RE_EXP_REFUND_ACC} |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_policy_layer
tx_rig_act_policy_layer
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_layer_id | running no. |  |
| 2 | rig_act_policy_hd_id | tx_rig_act_policy_hd.rig_act_policy_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | level | สร้างรายการ 3 รายการ เสมอL1L2L3 |  |
| ถ้าดึงข้อมูลจาก Tabletx_rig_act_pol_memtx_rig_act_claim_memtx_rig_act_alter_memให้รวมข้อมูลตาม levelถ้าเป็น parameter ให้เลือกลงข้อมูลตาม Layer (LX) |
| 1 | premium_rate_life | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_LIFE_REPORT} treaty_code = "THREL_Grp_PA"0 |  |
| 2 | premium_rate_add | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_ACC_REPORT} treaty_code = "THREL_Grp_PA"tx_rig_act_pol_mem.ri_rate (ตาม Layer ของทุนของสมาชิกคนนั้น) |  |
| 3 | member_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_LIFE}กรณี Level 2 = {L2_MEM_LIFE}กรณี Level 3 = {L3_MEM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 4 | member_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_ACC}กรณี Level 2 = {L2_MEM_ACC}กรณี Level 3 = {L3_MEM_ACC} treaty_code = "THREL_Grp_PA"นับจำนวนสมาชิกตาม tx_rig_act_pol_mem.cession_no ของแต่ละ Layer |  |
| 5 | ori_sa_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_LIFE}กรณี Level 2 = {L2_SA_LIFE}กรณี Level 3 = {L3_SA_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_life ของทุกคน |  |
| 6 | ori_sa_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_ACC}กรณี Level 2 = {L2_SA_ACC}กรณี Level 3 = {L3_SA_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_acc ทุกคน |  |
| 7 | ori_sa_tpd | 0 |  |
| 8 | ori_sa_ttd | 0 |  |
| 9 | ori_sa_med | 0 |  |
| 10 | ori_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 11 | ori_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 12 | ori_nb_prem_tpd | 0 |  |
| 13 | ori_nb_prem_ttd | 0 |  |
| 14 | ori_nb_prem_med | 0 |  |
| 15 | ori_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 16 | ori_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 17 | ori_ren_prem_tpd | 0 |  |
| 18 | ori_ren_prem_ttd | 0 |  |
| 19 | ori_ren_prem_med | 0 |  |
| 20 | ori_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_LIFE} |  |
| 21 | ori_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_ACC} |  |
| 22 | ori_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 23 | ori_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 24 | ori_refund_prem_tpd | 0 |  |
| 25 | ori_refund_prem_ttd | 0 |  |
| 26 | ori_refund_prem_med | 0 |  |
| 27 | ori_tl_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_life + ori_ren_prem_life + ori_rev_prem_life - ori_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 28 | ori_tl_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_add + ori_ren_prem_add + ori_rev_prem_add - ori_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 29 | ori_tl_prem_tpd | 0 |  |
| 30 | ori_tl_prem_ttd | 0 |  |
| 31 | ori_tl_prem_med | 0 |  |
| 32 | ori_claim_paid_life | tx_rig_act_claim_mem.amo_paid_life ของทุกคน |  |
| 33 | ori_claim_paid_add | tx_rig_act_claim_mem.amo_paid_acc ของทุกคน |  |
| 34 | ori_claim_paid_dismem | tx_rig_act_claim_mem.amo_paid_dismem ของทุกคน |  |
| 35 | ori_claim_paid_tpd | tx_rig_act_claim_mem.amo_paid_tpd ของทุกคน |  |
| 36 | ori_claim_paid_ipd | tx_rig_act_claim_mem.amo_paid_ipd ของทุกคน |  |
| 37 | ori_claim_paid_opd | tx_rig_act_claim_mem.amo_paid_opd ของทุกคน |  |
| 38 | ori_claim_paid_dental | tx_rig_act_claim_mem.amo_paid_dental ของทุกคน |  |
| 39 | ori_claim_paid_med_acc | tx_rig_act_claim_mem.amo_paid_med_acc ของทุกคน |  |
| 40 | ori_claim_paid_di | 0 |  |
| 41 | ori_inv | tx_rig_act_claim_mem.amo_paid_inv ของทุกคน |  |
| 42 | ori_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Life{OER_PAID_LIFE} |  |
| 43 | ori_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Accident{OER_PAID_ACC} |  |
| 44 | re_sr_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_life ของทุกคน |  |
| 45 | re_sr_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_acc ของทุกคน |  |
| 46 | re_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 10 |  |
| 47 | re_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 48 | re_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 10 |  |
| 49 | re_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 50 | re_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_LIFE} |  |
| 51 | re_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_ACC} treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Addition และ IncreaseSA กรณี tx_rig_act_alter_mem.alter_type = Addition // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = IncreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 52 | re_rev_prem_tpd | 0 |  |
| 53 | re_rev_prem_ttd | 0 |  |
| 54 | re_rev_prem_med | 0 |  |
| 55 | re_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1{RI_SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 56 | re_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{RI_SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Termination และ DecreaseSAกรณี tx_rig_act_alter_mem.alter_type = Termination // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = DecreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 57 | re_refund_prem_tpd | 0 |  |
| 58 | re_refund_prem_ttd | 0 |  |
| 59 | re_refund_prem_med | 0 |  |
| 60 | re_tl_prem_life | re_nb_prem_life + re_ren_prem_life + re_rev_prem_life - re_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 61 | re_tl_prem_add | re_nb_prem_add + re_ren_prem_add + re_rev_prem_add - re_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 62 | re_claim_paid_life | tx_rig_act_claim_mem.re_claim_life ของทุกคน |  |
| 63 | re_claim_paid_add | tx_rig_act_claim_mem.re_claim_acc ของทุกคน |  |
| 64 | re_claim_paid_dismem | tx_rig_act_claim_mem.re_claim_dismem ของทุกคน |  |
| 65 | re_claim_paid_di | 0 |  |
| 66 | re_claim_paid_tpd | tx_rig_act_claim_mem.re_claim_tpd ของทุกคน |  |
| 67 | re_claim_paid_ttd | 0 |  |
| 68 | re_claim_paid_med | 0 |  |
| 69 | re_claim_paid_med_acc | tx_rig_act_claim_mem.re_claim_med_acc ของทุกคน |  |
| 70 | re_claim_paid_ipd | tx_rig_act_claim_mem.re_claim_ipd ของทุกคน |  |
| 71 | re_claim_paid_opd | tx_rig_act_claim_mem.re_claim_opd ของทุกคน |  |
| 72 | re_claim_paid_dental | tx_rig_act_claim_mem.re_claim_dental ของทุกคน |  |
| 73 | re_inv | tx_rig_act_claim_mem.re_claim_inv ของทุกคน |  |
| 74 | com_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} ถ้า {TREATY_CODE} <> GIB_Grp_Direct_EB{RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 75 | com_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC} ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_ADD} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Additionรวมค่า {RE_COM_INC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026) รวมค่า tx_rig_act_pol_mem.com_acc ของทุกคนใช้ในสูตรจากนั้นtx_rig_act_pol_mem.com_acc + {RE_COM_ADD} + {RE_COM_INC} |  |
| 76 | com_tpd | 0 |  |
| 77 | com_ttd | 0 |  |
| 78 | com_med | 0 |  |
| 79 | com_refund_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 80 | com_refund_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026)0ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_TER} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Termination รวมค่า {RE_COM_DEC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026)จากนั้น{RE_COM_TER} + {RE_COM_DEC}เก็บตาม Layer ที่คำนวณ |  |
| 81 | com_refund_tpd | 0 |  |
| 82 | com_refund_ttd | 0 |  |
| 83 | com_refund_med | 0 |  |
| 84 | re_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Life {RE_EXP_REFUND_LIFE} |  |
| 85 | re_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Accident{RE_EXP_REFUND_ACC} |  |
| 86 | re_claim_inv_ex | tx_rig_act_claim_mem.re_claim_inv_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 87 | re_claim_leg_ex | tx_rig_act_claim_mem.re_claim_leg_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 88 | re_claim_med_ex | tx_rig_act_claim_mem.re_claim_med_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_pol_mem
tx_rig_act_pol_mem
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | occ_class | {OCC} |
| 9 | add_type | {POLIC_COV} |
|  |  |  |
| 1 | sa_life | {L1_SA_LIFE}{L2_SA_LIFE}{L3_SA_LIFE} |
| 2 | sa_acc | {L1_SA_ACC}{L2_SA_ACC}{L3_SA_ACC} |
| 3 | sa_mur | {L1_SA_MUR}{L2_SA_MUR}{L3_SA_MUR} |
| 4 | sa_mot | 0 |
| 5 | sa_load | {L1_SA_LOADING}{L2_SA_LOADING}{L3_SA_LOADING} |
| 6 | sa_special | 0 |
| 7 | sr_life | {L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} |
| 8 | sr_acc | {L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} |
| 9 | sr_mur | {L1_SR_MUR}{L2_SR_MUR}{L3_SR_MUR} |
| 10 | sr_mot | 0 |
| 11 | sr_load | {L1_SR_LOAD}{L2_SR_LOAD}{L3_SR_LOAD} |
| 12 | sr_special | 0 |
| 13 | ri_rate | {RI_PREM_RATE} |
| 14 | prem_life | {RI_L1_TL_PREM_LIFE}{RI_L2_TL_PREM_LIFE}{RI_L3_TL_PREM_LIFE} |
| 15 | prem_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_L1_TL_PREM_ACC}{RI_L2_TL_PREM_ACC}{RI_L3_TL_PREM_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} |
| 16 | prem_mur | 0 |
| 17 | prem_mot | 0 |
| 18 | prem_load | {L1_RI_PREM_LOAD}{L2_RI_PREM_LOAD}{L3_RI_PREM_LOAD} |
| 19 | prem_special | 0 |
| 20 | prem_dis | {L1_SUM_DISC}{L2_SUM_DISC} {L3_SUM_DISC} |
| 21 | tot_prem | prem_life + prem_acc + prem_mur + prem_mot + prem_load + prem_special - prem_dis |
| 22 | com_life | {RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |
| 23 | com_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{RI_COM_ACC} ลงข้อมูลตาม Layer บุคคล |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_claim_mem
tx_rig_act_claim_mem
| No. | Attribute Name |  |  |
| 1 | rig_act_claim_mem_id | running no. |  |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |  |
| 3 | cession_no | {CERT_NO} |  |
| 4 | name | NULL |  |
| 5 | sex | {SEX} |  |
| 6 | dob | NULL |  |
| 7 | age | {ATT_AGE} |  |
| 8 | event_date | {DEATH_DATE} หรือ {ACC_DATE} |  |
| 9 | cause | {DEATH_CAUSE} หรือ {CLAIM_CAUSE} |  |
| 10 | approve_date | {APR_DATE} |  |
| 11 | pay_date | {PAY_DATE} |  |
| 12 | class_plan | ตรวจสอบถ้า ori_sum_insu_acc = 600Aถ้า ori_sum_insu_acc = 1200Bถ้า ori_sum_insu_acc = 1500Cถ้า ori_sum_insu_acc = 2000Dถ้า ori_sum_insu_acc = 3000Eถ้า ori_sum_insu_acc = 5500F |  |
| 13 | incurre_amo | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 14 | claim_status | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_TYPE} = Life หรือ Dismemberment เก็บค่า Normalถ้า {CLAIM_TYPE} = Accident Deathตรวจสอบค่า {ACC_INS} * 2ถ้า {CLAIM_ACC} มากกว่าเท่ากับเก็บค่า Accidental Deathถ้า {CLAIM_ACC} น้อยกว่าเก็บค่า Normal treaty_code <> "GIB_Grp_Direct_EB"{CLAIM_STATUS} |  |
| 15 | claim_type | {CLAIM_TYPE} |  |
| 16 | claim_no | {INFROM_NO}แม้ว่ารายการนั้นจะมีค่า investigation_expense แต่ก็ต้องมีค่าเคลมมาก่อนเสมอ เพราะฉะนั้นให้ค่า {INFROM_NO} ของรายการเคลม(suthanee.sa 30/03/2026) |  |
|  |  |  |  |
| 1 | ori_sum_insu_life | {LIFE_INS} |  |
| 2 | ori_sum_insu_acc | {ACC_INS} |  |
| 3 | ori_sum_insu_tpd | {TPD_INS} |  |
| 4 | ori_sum_insu_dismem | {DISMEM_INS} |  |
| 5 | ori_sum_insu_ipd | 0 |  |
| 6 | ori_sum_insu_opd | 0 |  |
| 7 | ori_sum_insu_dental | 0 |  |
| 8 | ori_sum_insu_med_acc | 0 |  |
| 9 | amo_paid_life | {CLAIM_LIFE} |  |
| 10 | amo_paid_acc | เฉพาะรายการที่ {CLAIM_TYPE} <> Dismemberment{CLAIM_ACC} |  |
| 11 | amo_paid_tpd | {CLAIM_TPD} |  |
| 12 | amo_paid_dismem | เฉพาะรายการที่ {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 13 | amo_paid_ipd | {CLAIM_IPD} |  |
| 14 | amo_paid_opd | {CLAIM_OPD} |  |
| 15 | amo_paid_dental | {CLAIM_DENTAL} |  |
| 16 | amo_paid_med_acc | {CLAIM_MED_ACC} |  |
| 17 | amo_paid_di | 0 |  |
| 18 | amo_paid_inv | {EXPEN_AMOUNT} |  |
| 19 | re_claim_life | {L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE} |  |
| 20 | re_claim_acc | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH} |  |
| 21 | re_claim_tpd | {RE_CLAIM_TPD}{L1_RI_CLAIM_TPD} |  |
| 22 | re_claim_dismem | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM} |  |
| 23 | re_claim_ipd | {L1_RI_CLAIM_IPD} |  |
| 24 | re_claim_opd | {L1_RI_CLAIM_OPD} |  |
| 25 | re_claim_dental | {L1_RI_CLAIM_DENTAL} |  |
| 26 | re_claim_med_acc | {L1_RI_CLAIM_MED_ACC} |  |
| 27 | re_claim_di | {L1_RI_CLAIM_MED_ACC} |  |
| 28 | re_claim_inv | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 29 | re_claim_inv_ex | {RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 30 | re_claim_leg_ex | {RI_CLAIM_EXPENSE_LEG} | #M06 suthanee.sa 21/04/2026 |
| 31 | re_claim_med_ex | {RI_CLAIM_EXPENSE_MED} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
|  | claim_benefits | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 2 | paid_claim_report | ถ้า {CLAIM_TYPE} = Life{CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Death{CLAIM_ACC}ถ้า {CLAIM_TYPE} = TPD{CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 3 | paid_inv_report | {EXPEN_AMOUNT} |  |
| 4 | re_claim_report | ถ้า {CLAIM_TYPE} = Life{L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Deathtreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}ถ้า {CLAIM_TYPE} = TPD{L1_RI_CLAIM_IPD}{RE_CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismembermenttreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM} |  |
| 5 | re_inv_report | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |

##### tx_rig_act_alter_mem
tx_rig_act_alter_mem (กรณีบันทึกข้อมูลลง tx_rig_act_alter_mem ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 12/03/2026)
| No. | Attribute Name |  |
| 1 | rig_act_alter_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | cov_period | ถ้า {AL_MOVE} = Addition{AL_DATE} + "-" + {COV_TO}ถ้า {AL_MOVE} = Termination , IncreaseSA , DecreaseSA{MEM_EFF_DATE} + " - " + {COV_TO}รูปแบบ 01.07.24 - 01.08.24DD.MM.YY - DD.MM.YY |
| 9 | alter_type | ถ้า {AL_MOVE} = AdditionNMถ้า {AL_MOVE} = TerminationCLถ้า {AL_MOVE} = IncreaseSA ICถ้า {AL_MOVE} = DecreaseSADC |
| 10 | entrant_date | ถ้า {AL_MOVE} = Addition , IncreaseSA , DecreaseSA {AL_DATE} |
| 11 | withdrawal_date | ถ้า {AL_MOVE} = Termination{AL_DATE} |
| 12 | num_of_date | {NUM_DAY_COV} |
|  |  |  |
| 1 | sum_insu_acc_bf | {SA_ACC_BEF} |
| 2 | sum_insu_mur_bf | {SA_MUR_BEF} |
| 3 | sum_insu_mot_bf | 0 |
| 4 | sum_insu_load_bf | {SA_LOAD_BEF} |
| 5 | sum_re_acc_bf | {SR_ACC_BEF} |
| 6 | sum_re_mur_bf | {SR_MUR_BEF} |
| 7 | sum_re_mot_bf | 0 |
| 8 | sum_re_load_bf | {SR_LOAD_BEF} |
| 9 | re_prem_acc_bf | {RE_PREM_ACC_BEF} |
| 10 | re_prem_load_bf | {RE_PREM_LOAD_BEF} |
| 11 | re_prem_dis_bf | {SUM_DISC_BEF} |
| 12 | sum_insu_acc | {AL_MOVE} = Addition และ Termination{SUM_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_ACC_AFT} |
| 13 | sum_insu_mur | {AL_MOVE} = Addition และ Termination{SUM_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_MUR_AFT} |
| 14 | sum_insu_mot | 0 |
| 15 | sum_insu_load | {AL_MOVE} = Addition และ Termination{SUM_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_LOAD_AFT} |
| 16 | sum_re_acc | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_ACC_AFT} |
| 17 | sum_re_mur | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_MUR_AFT} |
| 18 | sum_re_mot | 0 |
| 19 | sum_re_load | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_LOAD_AFT} |
| 20 | re_prem_acc | {AL_MOVE} = Addition และ Termination{RE_PREM_ACC}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_ACC_AFT} |
| 21 | re_prem_load | {AL_MOVE} = Addition และ Termination{RE_PREM_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_LOAD_AFT} |
| 22 | re_prem_dis | {AL_MOVE} = Addition และ Termination{SUM_DISC}{AL_MOVE} = IncreaseSA และ DecreaseSA{SUM_DISC_AFT} |
| 23 | sum_insu_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_acc_bf - sum_insu_accเก็บลงด้วยค่าบวกเสมอ |
| 24 | sum_insu_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_mur_bf - sum_insu_murเก็บลงด้วยค่าบวกเสมอ |
| 25 | sum_insu_mot_diff | 0 |
| 26 | sum_insu_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_load_bf - sum_insu_loadเก็บลงด้วยค่าบวกเสมอ |
| 27 | sum_re_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_acc_bf - sum_re_accเก็บลงด้วยค่าบวกเสมอ |
| 28 | sum_re_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_mur_bf - sum_re_murเก็บลงด้วยค่าบวกเสมอ |
| 29 | sum_re_mot_diff | 0 |
| 30 | sum_re_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_load_bf - sum_re_loadเก็บลงด้วยค่าบวกเสมอ |
| 31 | re_prem_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_acc_bf - re_prem_accเก็บลงด้วยค่าบวกเสมอ |
| 32 | re_prem_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_load_bf - re_prem_loadเก็บลงด้วยค่าบวกเสมอ |
| 33 | re_prem_dis_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_dis_bf - re_prem_disเก็บลงด้วยค่าบวกเสมอ |
| 34 | sum_insu_x | {AL_MOVE} = IncreaseSA และ DecreaseSAถ้า sum_insu_acc_bf = 600Aถ้า sum_insu_acc_bf = 1200Bถ้า sum_insu_acc_bf = 1500Cถ้า sum_insu_acc_bf = 2000Dถ้า sum_insu_acc_bf = 3000Eถ้า sum_insu_acc_bf = 5500F{AL_MOVE} = Addition และ Terminationถ้า sum_insu_acc = 600Aถ้า sum_insu_acc = 1200Bถ้า sum_insu_acc = 1500Cถ้า sum_insu_acc = 2000Dถ้า sum_insu_acc = 3000Eถ้า sum_insu_acc = 5500F |
| 35 | sum_re_x | sum_insu_x |
| 36 | re_prem_x | sum_insu_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_new_renew
tx_rig_act_bdr_new_renew
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_new_renew_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | ri_no | tx_rig_act_policy_hd.reinsurer_no |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd.reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd.ri_com_date |
| 8 | first_date | tx_rig_act_policy_hd.first_date |
| 9 | effective_date_from | tx_rig_act_policy_hd.effective_date |
| 10 | effective_date_to | {COV_TO} |
| 11 | mode_pay | tx_rig_act_policy_hd.mode_pay |
| 12 | policy_year | tx_rig_act_policy_hd.policy_year |
| 13 | pol_name | tx_rig_act_policy_hd.pol_name |
| 14 | nob | tx_rig_act_policy_hd.nob |
| 15 | policy_status | tx_rig_act_policy_hd.policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd.renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd.policy_period |
| 18 | sale_option | tx_rig_act_policy_hd.sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd.sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd.code_name_pol |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
| 22 | full_year | tx_rig_act_policy_hd.full_year |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_ori_sa_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_tpd |
| 20 | l2_ori_sa_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_tpd |
| 21 | l3_ori_sa_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_tpd |
| 22 | tot_ori_sa_tpd | l1_ori_sa_tpd + l2_ori_sa_tpd + l3_ori_sa_tpd |
| 23 | l1_ori_sa_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_ttd |
| 24 | l2_ori_sa_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_ttd |
| 25 | l3_ori_sa_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_ttd |
| 26 | tot_ori_sa_ttd | l1_ori_sa_ttd + l2_ori_sa_ttd + l3_ori_sa_ttd |
| 27 | l1_ori_sa_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_med |
| 28 | l2_ori_sa_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_med |
| 29 | l3_ori_sa_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_med |
| 30 | tot_ori_sa_med | l1_ori_sa_med + l2_ori_sa_med + l3_ori_sa_med |
| 31 | l1_ori_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_life |
| 32 | l2_ori_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_life |
| 33 | l3_ori_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_life |
| 34 | tot_ori_nb_prem_life | l1_ori_nb_prem_life + l2_ori_nb_prem_life + l3_ori_nb_prem_life |
| 35 | l1_ori_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_add |
| 36 | l2_ori_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_add |
| 37 | l3_ori_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_add |
| 38 | tot_ori_nb_prem_add | l1_ori_nb_prem_add + l2_ori_nb_prem_add + l3_ori_nb_prem_add |
| 39 | l1_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 40 | l2_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 41 | l3_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 42 | tot_ori_nb_prem_tpd | l1_ori_nb_prem_tpd + l2_ori_nb_prem_tpd + l3_ori_nb_prem_tpd |
| 43 | l1_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 44 | l2_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 45 | l3_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 46 | tot_ori_nb_prem_ttd | l1_ori_nb_prem_ttd + l2_ori_nb_prem_ttd + l3_ori_nb_prem_ttd |
| 47 | l1_ori_nb_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_med |
| 48 | l2_ori_nb_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_med |
| 49 | l3_ori_nb_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_med |
| 50 | tot_ori_nb_prem_med | l1_ori_nb_prem_med + l2_ori_nb_prem_med + l3_ori_nb_prem_med |
| 51 | l1_ori_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_life |
| 52 | l2_ori_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_life |
| 53 | l3_ori_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_life |
| 54 | tot_ori_ren_prem_life | l1_ori_ren_prem_life + l2_ori_ren_prem_life + l3_ori_ren_prem_life |
| 55 | l1_ori_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_add |
| 56 | l2_ori_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_add |
| 57 | l3_ori_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_add |
| 58 | tot_ori_ren_prem_add | l1_ori_ren_prem_add + l2_ori_ren_prem_add + l3_ori_ren_prem_add |
| 59 | l1_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 60 | l2_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 61 | l3_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 62 | tot_ori_ren_prem_tpd | l1_ori_ren_prem_tpd + l2_ori_ren_prem_tpd + l3_ori_ren_prem_tpd |
| 63 | l1_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 64 | l2_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 65 | l3_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 66 | tot_ori_ren_prem_ttd | l1_ori_ren_prem_ttd + l2_ori_ren_prem_ttd + l3_ori_ren_prem_ttd |
| 67 | l1_ori_ren_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_med |
| 68 | l2_ori_ren_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_med |
| 69 | l3_ori_ren_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_med |
| 70 | tot_ori_ren_prem_med | l1_ori_ren_prem_med + l2_ori_ren_prem_med + l3_ori_ren_prem_med |
| 71 | l1_ori_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_life |
| 72 | l2_ori_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_life |
| 73 | l3_ori_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_life |
| 74 | tot_ori_rev_prem_life | l1_ori_rev_prem_life + l2_ori_rev_prem_life + l3_ori_rev_prem_life |
| 75 | l1_ori_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_add |
| 76 | l2_ori_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_add |
| 77 | l3_ori_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_add |
| 78 | tot_ori_rev_prem_add | l1_ori_rev_prem_add + l2_ori_rev_prem_add + l3_ori_rev_prem_add |
| 79 | l1_ori_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_life |
| 80 | l2_ori_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_life |
| 81 | l3_ori_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_life |
| 82 | tot_ori_refund_prem_life | l1_ori_refund_prem_life + l2_ori_refund_prem_life + l3_ori_refund_prem_life |
| 83 | l1_ori_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_add |
| 84 | l2_ori_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_add |
| 85 | l3_ori_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_add |
| 86 | tot_ori_refund_prem_add | l1_ori_refund_prem_add + l2_ori_refund_prem_add + l3_ori_refund_prem_add |
| 87 | l1_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 88 | l2_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 89 | l3_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 90 | tot_ori_refund_prem_tpd | l1_ori_refund_prem_tpd + l2_ori_refund_prem_tpd + l3_ori_refund_prem_tpd |
| 91 | l1_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 92 | l2_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 93 | l3_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 94 | tot_ori_refund_prem_ttd | l1_ori_refund_prem_ttd + l2_ori_refund_prem_ttd + l3_ori_refund_prem_ttd |
| 95 | l1_ori_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_med |
| 96 | l2_ori_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_med |
| 97 | l3_ori_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_med |
| 98 | tot_ori_refund_prem_med | l1_ori_refund_prem_med + l2_ori_refund_prem_med + l3_ori_refund_prem_med |
| 99 | l1_ori_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_life |
| 100 | l2_ori_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_life |
| 101 | l3_ori_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_life |
| 102 | tot_ori_tl_prem_life | l1_ori_tl_prem_life + l2_ori_tl_prem_life + l3_ori_tl_prem_life |
| 103 | l1_ori_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_add |
| 104 | l2_ori_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_add |
| 105 | l3_ori_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_add |
| 106 | tot_ori_tl_prem_add | l1_ori_tl_prem_add + l2_ori_tl_prem_add + l3_ori_tl_prem_add |
| 107 | l1_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 108 | l2_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 109 | l3_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 110 | tot_ori_tl_prem_tpd | l1_ori_tl_prem_tpd + l2_ori_tl_prem_tpd + l3_ori_tl_prem_tpd |
| 111 | l1_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 112 | l2_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 113 | l3_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 114 | tot_ori_tl_prem_ttd | l1_ori_tl_prem_ttd + l2_ori_tl_prem_ttd + l3_ori_tl_prem_ttd |
| 115 | l1_ori_tl_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_med |
| 116 | l2_ori_tl_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_med |
| 117 | l3_ori_tl_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_med |
| 118 | tot_ori_tl_prem_med | l1_ori_tl_prem_med + l2_ori_tl_prem_med + l3_ori_tl_prem_med |
| 119 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_life |
| 120 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_life |
| 121 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_life |
| 122 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 123 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_add |
| 124 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_add |
| 125 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_add |
| 126 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 127 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 128 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 129 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 130 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 131 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 132 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 133 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 134 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 135 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 136 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 137 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 138 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 139 | l1_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 140 | l2_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 141 | l3_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 142 | tot_ori_ex_refund_paid_life | l1_ori_ex_refund_paid_life + l2_ori_ex_refund_paid_life + l3_ori_ex_refund_paid_life |
| 143 | l1_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 144 | l2_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 145 | l3_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 146 | tot_ori_ex_refund_paid_add | l1_ori_ex_refund_paid_add + l2_ori_ex_refund_paid_add + l3_ori_ex_refund_paid_add |
| 147 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 148 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 149 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 150 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 151 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 152 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 153 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 154 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 155 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 156 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 157 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
| 158 | l1_re_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_life |
| 159 | l2_re_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_life |
| 160 | l3_re_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_life |
| 161 | tot_re_nb_prem_life | l1_re_nb_prem_life + l2_re_nb_prem_life + l3_re_nb_prem_life |
| 162 | l1_re_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_add |
| 163 | l2_re_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_add |
| 164 | l3_re_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_add |
| 165 | tot_re_nb_prem_add | l1_re_nb_prem_add + l2_re_nb_prem_add + l3_re_nb_prem_add |
| 166 | l1_re_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_life |
| 167 | l2_re_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_life |
| 168 | l3_re_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_life |
| 169 | tot_re_ren_prem_life | l1_re_ren_prem_life + l2_re_ren_prem_life + l3_re_ren_prem_life |
| 170 | l1_re_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_add |
| 171 | l2_re_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_add |
| 172 | l3_re_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_add |
| 173 | tot_re_ren_prem_add | l1_re_ren_prem_add + l2_re_ren_prem_add + l3_re_ren_prem_add |
| 174 | l1_re_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_life |
| 175 | l2_re_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_life |
| 176 | l3_re_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_life |
| 177 | tot_re_rev_prem_life | l1_re_rev_prem_life + l2_re_rev_prem_life + l3_re_rev_prem_life |
| 178 | l1_re_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_add |
| 179 | l2_re_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_add |
| 180 | l3_re_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_add |
| 181 | tot_re_rev_prem_add | l1_re_rev_prem_add + l2_re_rev_prem_add + l3_re_rev_prem_add |
| 182 | l1_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_tpd |
| 183 | l2_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_tpd |
| 184 | l3_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_tpd |
| 185 | tot_re_rev_prem_tpd | l1_re_rev_prem_tpd + l2_re_rev_prem_tpd + l3_re_rev_prem_tpd |
| 186 | l1_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_ttd |
| 187 | l2_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_ttd |
| 188 | l3_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_ttd |
| 189 | tot_re_rev_prem_ttd | l1_re_rev_prem_ttd + l2_re_rev_prem_ttd + l3_re_rev_prem_ttd |
| 190 | l1_re_rev_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_med |
| 191 | l2_re_rev_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_med |
| 192 | l3_re_rev_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_med |
| 193 | tot_re_rev_prem_med | l1_re_rev_prem_med + l2_re_rev_prem_med + l3_re_rev_prem_med |
| 194 | l1_re_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_life |
| 195 | l2_re_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_life |
| 196 | l3_re_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_life |
| 197 | tot_re_refund_prem_life | l1_re_refund_prem_life + l2_re_refund_prem_life + l3_re_refund_prem_life |
| 198 | l1_re_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_add |
| 199 | l2_re_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_add |
| 200 | l3_re_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_add |
| 201 | tot_re_refund_prem_add | l1_re_refund_prem_add + l2_re_refund_prem_add + l3_re_refund_prem_add |
| 202 | l1_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_tpd |
| 203 | l2_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_tpd |
| 204 | l3_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_tpd |
| 205 | tot_re_refund_prem_tpd | l1_re_refund_prem_tpd + l2_re_refund_prem_tpd + l3_re_refund_prem_tpd |
| 206 | l1_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_ttd |
| 207 | l2_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_ttd |
| 208 | l3_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_ttd |
| 209 | tot_re_refund_prem_ttd | l1_re_refund_prem_ttd + l2_re_refund_prem_ttd + l3_re_refund_prem_ttd |
| 210 | l1_re_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_med |
| 211 | l2_re_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_med |
| 212 | l3_re_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_med |
| 213 | tot_re_refund_prem_med | l1_re_refund_prem_med + l2_re_refund_prem_med + l3_re_refund_prem_med |
| 214 | l1_re_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_life |
| 215 | l2_re_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_life |
| 216 | l3_re_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_life |
| 217 | tot_re_tl_prem_life | l1_re_tl_prem_life + l2_re_tl_prem_life + l3_re_tl_prem_life |
| 218 | l1_re_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_add |
| 219 | l2_re_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_add |
| 220 | l3_re_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_add |
| 221 | tot_re_tl_prem_add | l1_re_tl_prem_add + l2_re_tl_prem_add + l3_re_tl_prem_add |
| 222 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_life |
| 223 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_life |
| 224 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_life |
| 225 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 226 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_add |
| 227 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_add |
| 228 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_add |
| 229 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 230 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_dismem |
| 231 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_dismem |
| 232 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_dismem |
| 233 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 234 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 235 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 236 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 237 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 238 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_tpd |
| 239 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_tpd |
| 240 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_tpd |
| 241 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 242 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 243 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 244 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 245 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 246 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med |
| 247 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med |
| 248 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med |
| 249 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 254 | l1_com_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_life |
| 255 | l2_com_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_life |
| 256 | l3_com_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_life |
| 257 | tot_com_life | l1_com_life + l2_com_life + l3_com_life |
| 258 | l1_com_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_add |
| 259 | l2_com_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_add |
| 260 | l3_com_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_add |
| 261 | tot_com_add | l1_com_add + l2_com_add + l3_com_add |
| 262 | l1_com_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_tpd |
| 263 | l2_com_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_tpd |
| 264 | l3_com_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_tpd |
| 265 | tot_com_tpd | l1_com_tpd + l2_com_tpd + l3_com_tpd |
| 266 | l1_com_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_ttd |
| 267 | l2_com_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_ttd |
| 268 | l3_com_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_ttd |
| 269 | tot_com_ttd | l1_com_ttd + l2_com_ttd + l3_com_ttd |
| 270 | l1_com_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_med |
| 271 | l2_com_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_med |
| 272 | l3_com_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_med |
| 273 | tot_com_med | l1_com_med + l2_com_med + l3_com_med |
| 274 | l1_com_refund_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_life |
| 275 | l2_com_refund_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_life |
| 276 | l3_com_refund_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_life |
| 277 | tot_com_refund_life | l1_com_refund_life + l2_com_refund_life + l3_com_refund_life |
| 278 | l1_com_refund_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_add |
| 279 | l2_com_refund_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_add |
| 280 | l3_com_refund_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_add |
| 281 | tot_com_refund_add | l1_com_refund_add + l2_com_refund_add + l3_com_refund_add |
| 282 | l1_com_refund_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_tpd |
| 283 | l2_com_refund_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_tpd |
| 284 | l3_com_refund_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_tpd |
| 285 | tot_com_refund_tpd | l1_com_refund_tpd + l2_com_refund_tpd + l3_com_refund_tpd |
| 286 | l1_com_refund_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_ttd |
| 287 | l2_com_refund_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_ttd |
| 288 | l3_com_refund_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_ttd |
| 289 | tot_com_refund_ttd | l1_com_refund_ttd + l2_com_refund_ttd + l3_com_refund_ttd |
| 290 | l1_com_refund_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_med |
| 291 | l2_com_refund_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_med |
| 292 | l3_com_refund_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_med |
| 293 | tot_com_refund_med | l1_com_refund_med + l2_com_refund_med + l3_com_refund_med |
| 294 | l1_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 295 | l2_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 296 | l3_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 297 | tot_re_ex_refund_paid_life | l1_re_ex_refund_paid_life + l2_re_ex_refund_paid_life + l3_re_ex_refund_paid_life |
| 298 | l1_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 299 | l2_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 300 | l3_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 301 | tot_re_ex_refund_paid_add | l1_re_ex_refund_paid_add + l2_re_ex_refund_paid_add + l3_re_ex_refund_paid_add |
| 302 | remark |  |
|  |  |  |
| 1 | number_of_mem_life | tx_rig_act_policy_hd.number_of_mem_life |
| 2 | number_of_mem_acc | tx_rig_act_policy_hd.number_of_mem_acc |
| 3 | ex_refund_rate_life | tx_rig_act_policy_hd.ex_refund_rate_life |
| 4 | ex_refund_rate_acc | tx_rig_act_policy_hd.ex_refund_rate_acc |
| 5 | ex_pol_year_life | tx_rig_act_policy_hd.ex_pol_year_life |
| 6 | ex_pol_year_acc | tx_rig_act_policy_hd.ex_pol_year_acc |
| 7 | gross_prem_life | tx_rig_act_policy_hd.gross_prem_life |
| 8 | gross_prem_acc | tx_rig_act_policy_hd.gross_prem_acc |
| 9 | claim_paid_year_life | tx_rig_act_policy_hd.claim_paid_year_life |
| 10 | claim_paid_year_acc | tx_rig_act_policy_hd.claim_paid_year_acc |
| 11 | re_ex_refund | tx_rig_act_policy_hd.re_ex_refund |
| 12 | ori_ex_refund_life | tx_rig_act_policy_hd.ori_ex_refund_life |
| 13 | ori_ex_refund_acc | tx_rig_act_policy_hd.ori_ex_refund_acc |
| 14 | net_re_prem_life | tx_rig_act_policy_hd.net_re_prem_life |
| 15 | net_re_prem_acc | tx_rig_act_policy_hd.net_re_prem_acc |
| 16 | re_com_life | tx_rig_act_policy_hd.re_com_life |
| 17 | re_com_acc | tx_rig_act_policy_hd.re_com_acc |
| 18 | re_ex_refund_life | tx_rig_act_policy_hd.re_ex_refund_life |
| 19 | re_ex_refund_acc | tx_rig_act_policy_hd.re_ex_refund_acc |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_pol_mem
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_bdr_new_renew_id | tx_rig_act_bdr_new_renew.rig_act_bdr_new_renew_id |
| 3 | cession_no | tx_rig_act_pol_mem.cession_no |
| 4 | name | tx_rig_act_pol_mem .name |
| 5 | sex | tx_rig_act_pol_mem .sex |
| 6 | dob | tx_rig_act_pol_mem .dob |
| 7 | age | tx_rig_act_pol_mem .age |
| 8 | occ_class | tx_rig_act_pol_mem .class |
| 9 | add_type | tx_rig_act_pol_mem .add_typeแปลงนำค่า tx_rig_act_pol_mem .add_type ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 06/03/2026) |
|  |  | tx_rig_act_pol_mem |
| 1 | sa_life | sa_acc |
| 2 | sa_mur | sa_mur |
| 3 | sa_mot | sa_mot |
| 4 | sa_load | sa_load |
| 5 | sa_special | sa_special |
| 6 | sr_life | sr_acc |
| 7 | sr_mur | sr_mur |
| 8 | sr_mot | sr_mot |
| 9 | sr_load | sr_load |
| 10 | sr_special | sr_special |
| 11 | ri_rate | ri_rate |
| 12 | prem_life | prem_acc |
| 13 | prem_mur | prem_mur |
| 14 | prem_mot | prem_mot |
| 15 | prem_load | prem_load |
| 16 | prem_special | prem_special |
| 17 | prem_dis | prem_dis |
| 18 | tot_prem | tot_prem |
| 19 | com | com_acc |
| 20 | remark |  |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_claim
tx_rig_act_bdr_claim
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | data_period | สร้างรายการตาม เดือน period ที่อยู่ภายใต้ Quarter |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 8 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 9 | effective_date_to | {COV_TO} |
| 10 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 11 | policy_year | tx_rig_act_policy_hd .policy_year |
| 12 | policy_period | tx_rig_act_policy_hd .policy_period |
| 13 | pol_name | tx_rig_act_policy_hd .pol_name |
| 14 | nob | tx_rig_act_policy_hd .nob |
| 15 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd .policy_period |
| 18 | sale_option | tx_rig_act_policy_hd .sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 21 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 22 | occ_class | {OCC} |
| 23 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  | รวมทุกรายการใน tx_rig_act_bdr_claim_mem แยกตาม เดือน period ที่อยู่ภายใต้ Quarterโดยดูจาก tx_rig_act_claim_mem.approve_date |
| 1 | frequency_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = Accident Death |
| 2 | frequency_tpd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = TPD และ Dismemberment |
| 3 | frequency_ipd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = IPD |
| 4 | frequency_opd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = OPD |
| 5 | frequency_dental | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = DENTAL |
| 6 | frequency_med_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = MedAccident |
| 7 | sum_frequency | frequency_acc + frequency_tpd + frequency_ipd + frequency_opd + frequency_dental + frequency_med_acc |
| 8 | sum_amo_paid_life | tx_rig_act_bdr_claim_mem.amo_paid_life |
| 9 | sum_amo_paid_ipd | tx_rig_act_bdr_claim_mem.amo_paid_ipd |
| 10 | sum_amo_paid_opd | tx_rig_act_bdr_claim_mem.amo_paid_opd |
| 11 | sum_amo_paid_dental | tx_rig_act_bdr_claim_mem.amo_paid_dental |
| 12 | sum_amo_paid_acc | tx_rig_act_bdr_claim_mem.amo_paid_acc |
| 13 | sum_amo_paid_tpd | tx_rig_act_bdr_claim_mem.amo_paid_tpd |
| 14 | sum_amo_paid_dismem | tx_rig_act_bdr_claim_mem.amo_paid_dismem |
| 15 | sum_amo_paid_med_acc | tx_rig_act_bdr_claim_mem.amo_paid_med_acc |
| 16 | sum_amo_paid_tot | sum_amo_paid_life + sum_amo_paid_ipd + sum_amo_paid_opd + sum_amo_paid_dental + sum_amo_paid_acc + sum_amo_paid_tpd sum_amo_paid_dismem + sum_amo_paid_med_acc |
| 17 | sum_amo_paid_grand_tot | 0 |
| 18 | sum_re_claim_life | tx_rig_act_bdr_claim_mem.re_claim_life |
| 19 | sum_re_claim_acc | tx_rig_act_bdr_claim_mem.re_claim_acc |
| 20 | sum_re_claim_ipd | tx_rig_act_bdr_claim_mem.re_claim_ipd |
| 21 | sum_re_claim_opd | tx_rig_act_bdr_claim_mem.re_claim_opd |
| 22 | sum_re_claim_dental | tx_rig_act_bdr_claim_mem.re_claim_dental |
| 23 | sum_re_claim_tpd | tx_rig_act_bdr_claim_mem.re_claim_tpd |
| 24 | sum_re_claim_dismem | tx_rig_act_bdr_claim_mem.re_claim_dismem |
| 25 | sum_re_claim_med_acc | tx_rig_act_bdr_claim_mem.re_claim_med_acc |
| 26 | sum_re_claim_tot | sum_re_claim_life + sum_re_claim_acc + sum_re_claim_ipd + sum_re_claim_opd + sum_re_claim_dental + sum_re_claim_tpd + sum_re_claim_dismem + sum_re_claim_med_acc |
|  |  |  |
| 1 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 2 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 3 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 4 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 5 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 6 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 7 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 8 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 9 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 10 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 11 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 12 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 13 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 14 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 15 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 16 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 17 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 18 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 19 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 20 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 21 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 22 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 23 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 24 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 25 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 26 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 27 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 28 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 29 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 30 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 31 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 32 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 33 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 34 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 35 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 36 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 37 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 38 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 39 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 40 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 41 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 42 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 43 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 44 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 45 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 46 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 47 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 48 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 49 | l1_re_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_inv |
| 50 | l2_re_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_inv |
| 51 | l3_re_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_inv |
| 52 | tot_re_inv | l1_re_inv + l2_re_inv + l3_re_inv |
| 53 | tot_re_claim_inv_ex | tx_rig_act_policy_layer.re_claim_inv_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 54 | tot_re_claim_leg_ex | tx_rig_act_policy_layer.re_claim_leg_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 55 | tot_re_claim_med_ex | tx_rig_act_policy_layer.re_claim_med_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 20 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 21 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 22 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 23 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 24 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 25 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 26 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 27 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 28 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 29 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_claim_mem
| No. | Attribute Name | tx_rig_act_claim_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | event_date | event_date |
| 10 | cause | cause |
| 11 | approve_date | approve_date |
| 12 | pay_date | pay_date |
| 13 | class_plan | class_plan |
| 14 | incurre_amo | incurre_amo |
| 15 | claim_status | claim_status |
| 16 | claim_type | claim_type |
| 16 | claim_no | claim_no (suthanee.sa 30/03/2026) |
|  |  |  |
| 1 | ori_sum_insu_life | ori_sum_insu_life |
| 2 | ori_sum_insu_acc | ori_sum_insu_acc |
| 3 | ori_sum_insu_tpd | ori_sum_insu_tpd |
| 4 | ori_sum_insu_dismem | ori_sum_insu_dismem |
| 5 | ori_sum_insu_ipd | ori_sum_insu_ipd |
| 6 | ori_sum_insu_opd | ori_sum_insu_opd |
| 7 | ori_sum_insu_dental | ori_sum_insu_dental |
| 8 | ori_sum_insu_med_acc | ori_sum_insu_med_acc |
| 9 | amo_paid_life | amo_paid_life |
| 10 | amo_paid_acc | amo_paid_acc |
| 11 | amo_paid_tpd | amo_paid_tpd |
| 12 | amo_paid_dismem | amo_paid_dismem |
| 13 | amo_paid_ipd | amo_paid_ipd |
| 14 | amo_paid_opd | amo_paid_opd |
| 15 | amo_paid_dental | amo_paid_dental |
| 16 | amo_paid_med_acc | amo_paid_med_acc |
| 17 | amo_paid_di | amo_paid_di |
| 18 | amo_paid_inv | amo_paid_inv |
| 19 | re_claim_life | re_claim_life |
| 20 | re_claim_acc | re_claim_acc |
| 21 | re_claim_tpd | re_claim_tpd |
| 22 | re_claim_dismem | re_claim_dismem |
| 23 | re_claim_ipd | re_claim_ipd |
| 24 | re_claim_opd | re_claim_opd |
| 25 | re_claim_dental | re_claim_dental |
| 26 | re_claim_med_acc | re_claim_med_acc |
| 27 | re_claim_di | re_claim_di |
| 28 | re_claim_inv | re_claim_inv |
| 29 | remark | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_STATUS} ไม่เท่ากับ 0บันทึก "Decline Claim" |
| 30 | re_claim_inv_ex | re_claim_inv_ex (#M06 27/04/2026 suthanee.sa) |
| 31 | re_claim_leg_ex | re_claim_leg_ex (#M06 27/04/2026 suthanee.sa) |
| 32 | re_claim_med_ex | re_claim_med_ex (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | claim_benefits | claim_benefits |
| 2 | paid_claim_report | paid_claim_report |
| 3 | paid_inv_report | paid_inv_report |
| 4 | re_claim_report | re_claim_report |
| 5 | re_inv_report | re_inv_report |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_alter
tx_rig_act_bdr_alter
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | policy_no | tx_rig_act_policy_hd.policy_no |
| 5 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 6 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 7 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 8 | effective_date_to | {COV_TO} |
| 9 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 10 | policy_year | tx_rig_act_policy_hd .policy_year |
| 11 | pol_name | tx_rig_act_policy_hd .pol_name |
| 12 | nob | tx_rig_act_policy_hd .nob |
| 13 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 14 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 15 | policy_period | tx_rig_act_policy_hd .policy_period |
| 16 | sale_option | tx_rig_act_policy_hd .sale_option |
| 17 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 18 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 19 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 20 | occ_class | {OCC} |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_act_bdr_alter_mem
| No. | Attribute Name | tx_rig_act_alter_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | cov_period | cov_period |
| 10 | alter_type | alter_type |
| 11 | entrant_date | entrant_date |
| 12 | withdrawal_date | withdrawal_date |
| 13 | num_of_date | num_of_date |
|  |  |  |
| 1 | sum_insu_acc_bf | sum_insu_acc_bf |
| 2 | sum_insu_mur_bf | sum_insu_mur_bf |
| 3 | sum_insu_mot_bf | sum_insu_mot_bf |
| 4 | sum_insu_load_bf | sum_insu_load_bf |
| 5 | sum_re_acc_bf | sum_re_acc_bf |
| 6 | sum_re_mur_bf | sum_re_mur_bf |
| 7 | sum_re_mot_bf | sum_re_mot_bf |
| 8 | sum_re_load_bf | sum_re_load_bf |
| 9 | re_prem_acc_bf | re_prem_acc_bf |
| 10 | re_prem_load_bf | re_prem_load_bf |
| 11 | re_prem_dis_bf | re_prem_dis_bf |
| 12 | sum_insu_acc | sum_insu_acc |
| 13 | sum_insu_mur | sum_insu_mur |
| 14 | sum_insu_mot | sum_insu_mot |
| 15 | sum_insu_load | sum_insu_load |
| 16 | sum_re_acc | sum_re_acc |
| 17 | sum_re_mur | sum_re_mur |
| 18 | sum_re_mot | sum_re_mot |
| 19 | sum_re_load | sum_re_load |
| 20 | re_prem_acc | re_prem_acc |
| 21 | re_prem_load | re_prem_load |
| 22 | re_prem_dis | re_prem_dis |
| 23 | sum_insu_acc_diff | sum_insu_acc_diff |
| 24 | sum_insu_mur_diff | sum_insu_mur_diff |
| 25 | sum_insu_mot_diff | sum_insu_mot_diff |
| 26 | sum_insu_load_diff | sum_insu_load_diff |
| 27 | sum_re_acc_diff | sum_re_acc_diff |
| 28 | sum_re_mur_diff | sum_re_mur_diff |
| 29 | sum_re_mot_diff | sum_re_mot_diff |
| 30 | sum_re_load_diff | sum_re_load_diff |
| 31 | re_prem_acc_diff | re_prem_acc_diff |
| 32 | re_prem_load_diff | re_prem_load_diff |
| 33 | re_prem_dis_diff | re_prem_dis_diff |
| 34 | sum_insu_x | sum_insu_x |
| 35 | sum_re_x | sum_re_x |
| 36 | re_prem_x | re_prem_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |

##### tx_rig_policy_base
ถ้า treaty_code = "GIB_Grp_Direct_EB"
(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1
treaty_code <> "GIB_Grp_Direct_EB"
tx_rig_act_policy_hd.policy_year
บันทึกเฉพาะกรมธรรม์ที่ tx_rig_act_policy_hd.policy_no และ policy_year จากเงื่อนไขมาเทียบ แล้วยังไม่พบใน Table
| No. | Attribute Name |  |
| 1 | rig_policy_base_id | running no. |
| 2 | policy_no | tx_rig_act_policy_hd.policy_no |
| 3 | policy_year | treaty_code = "GIB_Grp_Direct_EB"(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1treaty_code <> "GIB_Grp_Direct_EB"tx_rig_act_policy_hd.policy_year |
| 4 (suthanee.sa 25/02/2026) | policy_status | tx_rig_act_policy_hd.policy_status |
| 5 | treaty_code | tx_rig_act_hd.treaty_code |
| 6 (suthanee.sa 25/02/2026) | ri_status | tx_rig_act_policy_hd.ri_policy_status |
| 7 | ri_commencement_date | tx_rig_act_policy_hd.effective_date (suthanee.sa 26/02/2026) |
| 8 | period | tx_rig_act_hd.closing_quarter |
| ข้อมูลระบบ |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370771 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 1. tx_rig_act_hd (Mapping) =====
tx_rig_act_hd
| No. | Attribute Name |  |
| 1 | rig_act_hd_id | running no. |
| 2 | cf_reinsurer_id | cf_reinsurer.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 3 | cf_treaty_id | cf_rig_treaty.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |
| 4 | treaty_code | {TREATY_CODE} |
| 5 | closing_quarter | Quarter ที่ประมวลผล ex. 2026Q1 |
| 6 | quarter_year | ปีประมวลผล ex. 2026 |
| 7 | quarter | quarter ประมวลผล ex. 1 |
| 8 | status | A |
| 9 | edw_status | NULL |
| 10 | edw_status_desc | NULL |
| 11 | ri_std_hd_id | NULL |
| 12 | mps_status | NULL |
| 13 | mps_status_desc | NULL |
| 14 | ri_std_hd_id_oic | NULL |
| 15 | ri_premium | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 16 | ri_commission | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 17 | claim_recovery | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 18 | sum_pc_current_treaty | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 19 | due_to | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 20 | remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |
| 21 | usage_status | เมื่อสร้างรายการครั้งแรกให้บันทึก A |
| 22 | ri_method | {TREATY_CODE} ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 |
| 23 | sum_records | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |
| 24 | period | ปีและเดือนของงวดทำรายการ ณ วันที่ run actua |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370768 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 2. tx_rig_act_policy_hd (Mapping) =====
tx_rig_act_policy_hd
Group ข้อมูลตาม policy_no , effective_date , data_quarter
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_hd_id | running no. |  |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | reinsurer_no | {RE_CODE_FULL} |  |
| 5 | ri_com_date | {COM_DATE} |  |
| 6 | first_date | treaty_code = "GIB_Grp_Direct_EB"{FIRST_DATE}treaty_code <> "GIB_Grp_Direct_EB"{COM_DATE} |  |
| 7 | effective_date | {COV_FROM} หรือ {EFF_DATE}ในกรณีที่เป็น {POLICY_NO} เดียวกัน และมีค่า {COV_FROM} หรือ {EFF_DATE} เท่ากัน ไม่ต้องสร้างรายการเพิ่ม |  |
| 8 | mode_pay | ถ้า treaty_code = "GIB_Grp_Direct_EB"{PAY_MODE_GIB}treaty_code <> "GIB_Grp_Direct_EB"{PAY_MODE} |  |
| 9 | policy_year | treaty_code = "GIB_Grp_Direct_EB"{POLICY_YEAR_RI} treaty_code <> "GIB_Grp_Direct_EB"{POLICY_YEAR} |  |
| 10 | data_quarter | {DATA_QUT} |  |
| 11 | period | {PERIOD} |  |
| 12 | policy_status | treaty_code = "GIB_Grp_Direct_EB"นำค่า {GIB_RI_STATUS} ที่ได้ แปลงค่าใน cf_lookup_catalogที่ cf_lookup_catalog.parent_id = 1003300ถ้า {GIB_RI_STATUS} = cf_lookup_catalog.lookup_key ใดให้นำ cf_lookup_catalog.description มาเก็บข้อมูลtreaty_code <> "GIB_Grp_Direct_EB"{POLICY_STATUS} |  |
| 13 | report_policy_status | {REPORT_POL_STATUS} |  |
| 14 | ri_policy_status | {RI_POL_STATUS} |  |
| 15 | pol_name | {POL_NAME} |  |
| 16 | nob | {NOB} |  |
| 17 | renew_lapse_date | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceให้บันทึก {COV_FROM}ถ้า {GIB_RI_STATUS} = Lapsedให้บันทึก {LAPSE_DATE} treaty_code <> "GIB_Grp_Direct_EB"NULL |  |
| 18 | policy_period | {PERIOD} |  |
| 19 | sale_option | {SALE_OPTION} |  |
| 20 | sale_channel_code | {SALE_CHANEL} |  |
| 21 | code_name_pol | {CODE_NAME_POL} |  |
| 22 | policy_ri_period | treaty_code = "GIB_Grp_Direct_EB"ถ้า {GIB_RI_STATUS} = New Business หรือ Inforceบันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025ถ้า {GIB_RI_STATUS} = Lapsedบันทึก "{COV_FROM}" + " - " + ({LAPSE_DATE} - 1 วัน) ตัวอย่าง 01/02/2025 - 31/12/2025treaty_code <> "GIB_Grp_Direct_EB"บันทึก "{COV_FROM}" + " - " + {COV_TO} ตัวอย่าง 01/01/2025 - 31/12/2025(suthanee.sa 10/04/2026) |  |
| 23 | expire_date | {EXPIRE_DATE} (suthanee.sa 24/03/2026) |  |
| 24 | f_receipt_date | {F_RECIEPT} (suthanee.sa 24/03/2026) |  |
| 25 | full_year | {FULL_YEAR} (suthanee.sa 21/04/2026) |  |
|  |  |  |  |
| 1 | number_of_mem_life | {MEM_LIFE} | จากกระบวน การคำนวณ Experience Refund (ACT) เฉพาะ treaty_code = "GIB_Grp_Direct_EB" โดยในกรมธรรม์เดียวกัน สามารถคำนวณได้ทั้ง Life และ Accident ถ้ามีค่าในความคุ้มครองใด ให้ลงได้ใน record เดียวกัน |
| 2 | number_of_mem_acc | {MEM_ACC_DEATH} |
| 3 | ex_refund_rate_life | ถ้า {COV_TYPE} = Life{PER_EXP_REFUND} |
| 4 | ex_refund_rate_acc | ถ้า {COV_TYPE} = Accident{PER_EXP_REFUND} |
| 5 | ex_pol_year_life | ถ้า {COV_TYPE} = Life{PER_EXPENSE} |
| 6 | ex_pol_year_acc | ถ้า {COV_TYPE} = Accident{PER_EXPENSE} |
| 7 | gross_prem_life | {PREMIUM_LIFE} |
| 8 | gross_prem_acc | {PREMIUM_ACC} |
| 9 | claim_paid_year_life | ถ้า {COV_TYPE} = Lifeให้บันทึก {CLAIM_PAID_POL} |
| 10 | claim_paid_year_acc | ถ้า {COV_TYPE} = Accidentให้บันทึก {CLAIM_PAID_POL} |
| 11 | ori_ex_refund_life | {OER_PAID_LIFE} |
| 12 | ori_ex_refund_acc | {OER_PAID_ACC} |
| 13 | net_re_prem_life | {NET_RE_PREM_LIFE} |
| 14 | net_re_prem_acc | {NET_RE_PREM_ACC} |
| 15 | re_com_life | {RE_COMM_LIFE} |
| 16 | re_com_acc | {RE_COMM_ACC} |
| 17 | re_ex_refund_life | {RE_EXP_REFUND_LIFE} |
| 18 | re_ex_refund_acc | {RE_EXP_REFUND_ACC} |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |


===== PAGE 1319370776 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 3. tx_rig_act_policy_layer (Mapping) =====
tx_rig_act_policy_layer
| No. | Attribute Name |  |  |
| 1 | rig_act_policy_layer_id | running no. |  |
| 2 | rig_act_policy_hd_id | tx_rig_act_policy_hd.rig_act_policy_hd_id |  |
| 3 | policy_no | {POLICY_NO} |  |
| 4 | level | สร้างรายการ 3 รายการ เสมอL1L2L3 |  |
| ถ้าดึงข้อมูลจาก Tabletx_rig_act_pol_memtx_rig_act_claim_memtx_rig_act_alter_memให้รวมข้อมูลตาม levelถ้าเป็น parameter ให้เลือกลงข้อมูลตาม Layer (LX) |
| 1 | premium_rate_life | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_LIFE_REPORT} treaty_code = "THREL_Grp_PA"0 |  |
| 2 | premium_rate_add | treaty_code = "GIB_Grp_Direct_EB"บันทึกเฉพาะ Level 1{PREM_RATE_ACC_REPORT} treaty_code = "THREL_Grp_PA"tx_rig_act_pol_mem.ri_rate (ตาม Layer ของทุนของสมาชิกคนนั้น) |  |
| 3 | member_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_LIFE}กรณี Level 2 = {L2_MEM_LIFE}กรณี Level 3 = {L3_MEM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 4 | member_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_MEM_ACC}กรณี Level 2 = {L2_MEM_ACC}กรณี Level 3 = {L3_MEM_ACC} treaty_code = "THREL_Grp_PA"นับจำนวนสมาชิกตาม tx_rig_act_pol_mem.cession_no ของแต่ละ Layer |  |
| 5 | ori_sa_life | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_LIFE}กรณี Level 2 = {L2_SA_LIFE}กรณี Level 3 = {L3_SA_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_life ของทุกคน |  |
| 6 | ori_sa_add | treaty_code = "GIB_Grp_Direct_EB"กรณี Level 1 = {L1_SA_ACC}กรณี Level 2 = {L2_SA_ACC}กรณี Level 3 = {L3_SA_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sa_acc ทุกคน |  |
| 7 | ori_sa_tpd | 0 |  |
| 8 | ori_sa_ttd | 0 |  |
| 9 | ori_sa_med | 0 |  |
| 10 | ori_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 11 | ori_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year = 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 12 | ori_nb_prem_tpd | 0 |  |
| 13 | ori_nb_prem_ttd | 0 |  |
| 14 | ori_nb_prem_med | 0 |  |
| 15 | ori_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_LIFE}{L2_PREM_LIFE}{L3_PREM_LIFE} treaty_code = "THREL_Grp_PA"0 |  |
| 16 | ori_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ policy_year > 1{L1_PREM_ACC}{L2_PREM_ACC}{L3_PREM_ACC} treaty_code = "THREL_Grp_PA"0 |  |
| 17 | ori_ren_prem_tpd | 0 |  |
| 18 | ori_ren_prem_ttd | 0 |  |
| 19 | ori_ren_prem_med | 0 |  |
| 20 | ori_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_LIFE} |  |
| 21 | ori_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REVIVAL_PREM_ACC} |  |
| 22 | ori_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 23 | ori_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1{SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 24 | ori_refund_prem_tpd | 0 |  |
| 25 | ori_refund_prem_ttd | 0 |  |
| 26 | ori_refund_prem_med | 0 |  |
| 27 | ori_tl_prem_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_life + ori_ren_prem_life + ori_rev_prem_life - ori_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 28 | ori_tl_prem_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ori_nb_prem_add + ori_ren_prem_add + ori_rev_prem_add - ori_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 29 | ori_tl_prem_tpd | 0 |  |
| 30 | ori_tl_prem_ttd | 0 |  |
| 31 | ori_tl_prem_med | 0 |  |
| 32 | ori_claim_paid_life | tx_rig_act_claim_mem.amo_paid_life ของทุกคน |  |
| 33 | ori_claim_paid_add | tx_rig_act_claim_mem.amo_paid_acc ของทุกคน |  |
| 34 | ori_claim_paid_dismem | tx_rig_act_claim_mem.amo_paid_dismem ของทุกคน |  |
| 35 | ori_claim_paid_tpd | tx_rig_act_claim_mem.amo_paid_tpd ของทุกคน |  |
| 36 | ori_claim_paid_ipd | tx_rig_act_claim_mem.amo_paid_ipd ของทุกคน |  |
| 37 | ori_claim_paid_opd | tx_rig_act_claim_mem.amo_paid_opd ของทุกคน |  |
| 38 | ori_claim_paid_dental | tx_rig_act_claim_mem.amo_paid_dental ของทุกคน |  |
| 39 | ori_claim_paid_med_acc | tx_rig_act_claim_mem.amo_paid_med_acc ของทุกคน |  |
| 40 | ori_claim_paid_di | 0 |  |
| 41 | ori_inv | tx_rig_act_claim_mem.amo_paid_inv ของทุกคน |  |
| 42 | ori_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Life{OER_PAID_LIFE} |  |
| 43 | ori_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1ถ้า {COV_TYPE} = Accident{OER_PAID_ACC} |  |
| 44 | re_sr_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_life ของทุกคน |  |
| 45 | re_sr_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} treaty_code = "THREL_Grp_PA"ผลรวมของ tx_rig_act_pol_mem.sr_acc ของทุกคน |  |
| 46 | re_nb_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 10 |  |
| 47 | re_nb_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year = 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year = 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 48 | re_ren_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_LIFE}{L2_RI_PREM_LIFE}{L3_RI_PREM_LIFE} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 10 |  |
| 49 | re_ren_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ policy_year > 1{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} treaty_code = "THREL_Grp_PA"เฉพาะ policy_year > 1ผลรวมของ tx_rig_act_pol_mem.tot_prem ทุกคน |  |
| 50 | re_rev_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_LIFE} |  |
| 51 | re_rev_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1 {RI_SUM_REVIVAL_PREM_ACC} treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Addition และ IncreaseSA กรณี tx_rig_act_alter_mem.alter_type = Addition // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = IncreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 52 | re_rev_prem_tpd | 0 |  |
| 53 | re_rev_prem_ttd | 0 |  |
| 54 | re_rev_prem_med | 0 |  |
| 55 | re_refund_prem_life | treaty_code = "GIB_Grp_Direct_EB" ของทุกคนเฉพาะ level = 1{RI_SUM_REFUND_PREM_LIFE}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) |  |
| 56 | re_refund_prem_add | treaty_code = "GIB_Grp_Direct_EB" ของทุกคน{RI_SUM_REFUND_PREM_ACC}(ถ้าค่าติดลบต้องเก็บเป็นค่า + เสมอ) treaty_code = "THREL_Grp_PA"รวมค่าตาม Field จาก tx_rig_act_alter_mem เฉพาะรายการที่ tx_rig_act_alter_mem.alter_type = Termination และ DecreaseSAกรณี tx_rig_act_alter_mem.alter_type = Termination // Round(tx_rig_act_alter_mem.(re_prem_acc + re_prem_load - re_prem_dis),2)กรณี tx_rig_act_alter_mem.alter_type = DecreaseSA // Round(tx_rig_act_alter_mem.(re_prem_acc_diff + re_prem_load_diff - re_prem_dis_diff),2)รวมสองค่าเข้าด้วยกัน |  |
| 57 | re_refund_prem_tpd | 0 |  |
| 58 | re_refund_prem_ttd | 0 |  |
| 59 | re_refund_prem_med | 0 |  |
| 60 | re_tl_prem_life | re_nb_prem_life + re_ren_prem_life + re_rev_prem_life - re_refund_prem_life(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 61 | re_tl_prem_add | re_nb_prem_add + re_ren_prem_add + re_rev_prem_add - re_refund_prem_add(ถ้าค่าติดลบ เก็บเป็นค่า - ) |  |
| 62 | re_claim_paid_life | tx_rig_act_claim_mem.re_claim_life ของทุกคน |  |
| 63 | re_claim_paid_add | tx_rig_act_claim_mem.re_claim_acc ของทุกคน |  |
| 64 | re_claim_paid_dismem | tx_rig_act_claim_mem.re_claim_dismem ของทุกคน |  |
| 65 | re_claim_paid_di | 0 |  |
| 66 | re_claim_paid_tpd | tx_rig_act_claim_mem.re_claim_tpd ของทุกคน |  |
| 67 | re_claim_paid_ttd | 0 |  |
| 68 | re_claim_paid_med | 0 |  |
| 69 | re_claim_paid_med_acc | tx_rig_act_claim_mem.re_claim_med_acc ของทุกคน |  |
| 70 | re_claim_paid_ipd | tx_rig_act_claim_mem.re_claim_ipd ของทุกคน |  |
| 71 | re_claim_paid_opd | tx_rig_act_claim_mem.re_claim_opd ของทุกคน |  |
| 72 | re_claim_paid_dental | tx_rig_act_claim_mem.re_claim_dental ของทุกคน |  |
| 73 | re_inv | tx_rig_act_claim_mem.re_claim_inv ของทุกคน |  |
| 74 | com_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} ถ้า {TREATY_CODE} <> GIB_Grp_Direct_EB{RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 75 | com_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าบวก (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC} ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_ADD} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Additionรวมค่า {RE_COM_INC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026) รวมค่า tx_rig_act_pol_mem.com_acc ของทุกคนใช้ในสูตรจากนั้นtx_rig_act_pol_mem.com_acc + {RE_COM_ADD} + {RE_COM_INC} |  |
| 76 | com_tpd | 0 |  |
| 77 | com_ttd | 0 |  |
| 78 | com_med | 0 |  |
| 79 | com_refund_life | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |  |
| 80 | com_refund_add | ถ้า {TREATY_CODE} = GIB_Grp_Direct_EBให้ลงที่ Field นี้ก็ต่อเมื่อ ค่าด้านล่างเป็นค่าลบ (suthanee.sa 07/04/2026){RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} <> THREL_Grp_PA และ GIB_Grp_Direct_EB (suthanee.sa 07/04/2026)0ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_COM_TER} = รวมค่า {RE_COM} ของสมาชิกทุกคนที่ ถ้า {AL_MOVE} = Termination รวมค่า {RE_COM_DEC} ของทุกคนใช้ในสูตร (ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 18/03/2026)จากนั้น{RE_COM_TER} + {RE_COM_DEC}เก็บตาม Layer ที่คำนวณ |  |
| 81 | com_refund_tpd | 0 |  |
| 82 | com_refund_ttd | 0 |  |
| 83 | com_refund_med | 0 |  |
| 84 | re_ex_refund_paid_life | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Life {RE_EXP_REFUND_LIFE} |  |
| 85 | re_ex_refund_paid_add | treaty_code = "GIB_Grp_Direct_EB"เฉพาะ level = 1ถ้า {COV_TYPE} = Accident{RE_EXP_REFUND_ACC} |  |
| 86 | re_claim_inv_ex | tx_rig_act_claim_mem.re_claim_inv_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 87 | re_claim_leg_ex | tx_rig_act_claim_mem.re_claim_leg_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
| 88 | re_claim_med_ex | tx_rig_act_claim_mem.re_claim_med_ex ของทุกคน | #M06 suthanee.sa 27/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |


===== PAGE 1319370779 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 4. tx_rig_act_pol_mem (Mapping) =====
tx_rig_act_pol_mem
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | occ_class | {OCC} |
| 9 | add_type | {POLIC_COV} |
|  |  |  |
| 1 | sa_life | {L1_SA_LIFE}{L2_SA_LIFE}{L3_SA_LIFE} |
| 2 | sa_acc | {L1_SA_ACC}{L2_SA_ACC}{L3_SA_ACC} |
| 3 | sa_mur | {L1_SA_MUR}{L2_SA_MUR}{L3_SA_MUR} |
| 4 | sa_mot | 0 |
| 5 | sa_load | {L1_SA_LOADING}{L2_SA_LOADING}{L3_SA_LOADING} |
| 6 | sa_special | 0 |
| 7 | sr_life | {L1_SR_LIFE} {L2_SR_LIFE} {L3_SR_LIFE} |
| 8 | sr_acc | {L1_SR_ACC} {L2_SR_ACC} {L3_SR_ACC} |
| 9 | sr_mur | {L1_SR_MUR}{L2_SR_MUR}{L3_SR_MUR} |
| 10 | sr_mot | 0 |
| 11 | sr_load | {L1_SR_LOAD}{L2_SR_LOAD}{L3_SR_LOAD} |
| 12 | sr_special | 0 |
| 13 | ri_rate | {RI_PREM_RATE} |
| 14 | prem_life | {RI_L1_TL_PREM_LIFE}{RI_L2_TL_PREM_LIFE}{RI_L3_TL_PREM_LIFE} |
| 15 | prem_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_L1_TL_PREM_ACC}{RI_L2_TL_PREM_ACC}{RI_L3_TL_PREM_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{L1_RI_PREM_ACC}{L2_RI_PREM_ACC}{L3_RI_PREM_ACC} |
| 16 | prem_mur | 0 |
| 17 | prem_mot | 0 |
| 18 | prem_load | {L1_RI_PREM_LOAD}{L2_RI_PREM_LOAD}{L3_RI_PREM_LOAD} |
| 19 | prem_special | 0 |
| 20 | prem_dis | {L1_SUM_DISC}{L2_SUM_DISC} {L3_SUM_DISC} |
| 21 | tot_prem | prem_life + prem_acc + prem_mur + prem_mot + prem_load + prem_special - prem_dis |
| 22 | com_life | {RI_COMM_L1_LIFE}{RI_COMM_L2_LIFE}{RI_COMM_L3_LIFE} |
| 23 | com_acc | ถ้า {TREATY_CODE} <> THREL_Grp_PA{RI_COMM_L1_ACC}{RI_COMM_L2_ACC}{RI_COMM_L3_ACC}ถ้า {TREATY_CODE} = THREL_Grp_PA{RI_COM_ACC} ลงข้อมูลตาม Layer บุคคล |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370783 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 5. tx_rig_act_claim_mem (Mapping) =====
tx_rig_act_claim_mem
| No. | Attribute Name |  |  |
| 1 | rig_act_claim_mem_id | running no. |  |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |  |
| 3 | cession_no | {CERT_NO} |  |
| 4 | name | NULL |  |
| 5 | sex | {SEX} |  |
| 6 | dob | NULL |  |
| 7 | age | {ATT_AGE} |  |
| 8 | event_date | {DEATH_DATE} หรือ {ACC_DATE} |  |
| 9 | cause | {DEATH_CAUSE} หรือ {CLAIM_CAUSE} |  |
| 10 | approve_date | {APR_DATE} |  |
| 11 | pay_date | {PAY_DATE} |  |
| 12 | class_plan | ตรวจสอบถ้า ori_sum_insu_acc = 600Aถ้า ori_sum_insu_acc = 1200Bถ้า ori_sum_insu_acc = 1500Cถ้า ori_sum_insu_acc = 2000Dถ้า ori_sum_insu_acc = 3000Eถ้า ori_sum_insu_acc = 5500F |  |
| 13 | incurre_amo | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 14 | claim_status | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_TYPE} = Life หรือ Dismemberment เก็บค่า Normalถ้า {CLAIM_TYPE} = Accident Deathตรวจสอบค่า {ACC_INS} * 2ถ้า {CLAIM_ACC} มากกว่าเท่ากับเก็บค่า Accidental Deathถ้า {CLAIM_ACC} น้อยกว่าเก็บค่า Normal treaty_code <> "GIB_Grp_Direct_EB"{CLAIM_STATUS} |  |
| 15 | claim_type | {CLAIM_TYPE} |  |
| 16 | claim_no | {INFROM_NO}แม้ว่ารายการนั้นจะมีค่า investigation_expense แต่ก็ต้องมีค่าเคลมมาก่อนเสมอ เพราะฉะนั้นให้ค่า {INFROM_NO} ของรายการเคลม(suthanee.sa 30/03/2026) |  |
|  |  |  |  |
| 1 | ori_sum_insu_life | {LIFE_INS} |  |
| 2 | ori_sum_insu_acc | {ACC_INS} |  |
| 3 | ori_sum_insu_tpd | {TPD_INS} |  |
| 4 | ori_sum_insu_dismem | {DISMEM_INS} |  |
| 5 | ori_sum_insu_ipd | 0 |  |
| 6 | ori_sum_insu_opd | 0 |  |
| 7 | ori_sum_insu_dental | 0 |  |
| 8 | ori_sum_insu_med_acc | 0 |  |
| 9 | amo_paid_life | {CLAIM_LIFE} |  |
| 10 | amo_paid_acc | เฉพาะรายการที่ {CLAIM_TYPE} <> Dismemberment{CLAIM_ACC} |  |
| 11 | amo_paid_tpd | {CLAIM_TPD} |  |
| 12 | amo_paid_dismem | เฉพาะรายการที่ {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 13 | amo_paid_ipd | {CLAIM_IPD} |  |
| 14 | amo_paid_opd | {CLAIM_OPD} |  |
| 15 | amo_paid_dental | {CLAIM_DENTAL} |  |
| 16 | amo_paid_med_acc | {CLAIM_MED_ACC} |  |
| 17 | amo_paid_di | 0 |  |
| 18 | amo_paid_inv | {EXPEN_AMOUNT} |  |
| 19 | re_claim_life | {L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE} |  |
| 20 | re_claim_acc | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH} |  |
| 21 | re_claim_tpd | {RE_CLAIM_TPD}{L1_RI_CLAIM_TPD} |  |
| 22 | re_claim_dismem | treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM}treaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM} |  |
| 23 | re_claim_ipd | {L1_RI_CLAIM_IPD} |  |
| 24 | re_claim_opd | {L1_RI_CLAIM_OPD} |  |
| 25 | re_claim_dental | {L1_RI_CLAIM_DENTAL} |  |
| 26 | re_claim_med_acc | {L1_RI_CLAIM_MED_ACC} |  |
| 27 | re_claim_di | {L1_RI_CLAIM_MED_ACC} |  |
| 28 | re_claim_inv | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 29 | re_claim_inv_ex | {RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
| 30 | re_claim_leg_ex | {RI_CLAIM_EXPENSE_LEG} | #M06 suthanee.sa 21/04/2026 |
| 31 | re_claim_med_ex | {RI_CLAIM_EXPENSE_MED} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
|  | claim_benefits | ถ้า {CLAIM_TYPE} = Life{LIFE_INS}ถ้า {CLAIM_TYPE} = Accident Death{ACC_INS}ถ้า {CLAIM_TYPE} = TPD{TPD_INS}ถ้า {CLAIM_TYPE} = Dismemberment{DISMEM_INS} |  |
| 2 | paid_claim_report | ถ้า {CLAIM_TYPE} = Life{CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Death{CLAIM_ACC}ถ้า {CLAIM_TYPE} = TPD{CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismemberment{CLAIM_ACC} |  |
| 3 | paid_inv_report | {EXPEN_AMOUNT} |  |
| 4 | re_claim_report | ถ้า {CLAIM_TYPE} = Life{L1_RI_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}{L3_RI_CLAIM_LIFE}ถ้า {CLAIM_TYPE} = Accident Deathtreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_ACC_DEATH}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}ถ้า {CLAIM_TYPE} = TPD{L1_RI_CLAIM_IPD}{RE_CLAIM_TPD}ถ้า {CLAIM_TYPE} = Dismembermenttreaty_code <> "GIB_Grp_Direct_EB"{RE_CLAIM_DISMEM}treaty_code = "GIB_Grp_Direct_EB"{L1_RI_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM} |  |
| 5 | re_inv_report | ถ้า {TREATY_CODE} <> THREL_Grp_PA{L1_RI_CLAIM_INVEST}{L2_RI_CLAIM_INVEST}{L3_RI_CLAIM_INVEST}ถ้า {TREATY_CODE} = THREL_Grp_PA{RE_INV_ACC_DEATH}{RE_INV_DISMEM}{RE_INV_TPD}{SUM_RI_CLAIM_EXPENSE_INV} | #M06 suthanee.sa 21/04/2026 |
|  |  |  |  |
| 1 | created_date | now() |  |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| 3 | updated_date | NULL |  |
| 4 | updated_by | NULL |  |


===== PAGE 1319370787 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 6. tx_rig_act_alter_mem (Mapping) =====
tx_rig_act_alter_mem (กรณีบันทึกข้อมูลลง tx_rig_act_alter_mem ให้ดูตาม Level ของค่า {SA_ACC_AFT} suthanee.sa 12/03/2026)
| No. | Attribute Name |  |
| 1 | rig_act_alter_mem_id | running no. |
| 2 | rig_act_policy_layer_id | tx_rig_act_policy_layer.rig_act_policy_layer_id |
| 3 | cession_no | {CERT_NO} |
| 4 | name | NULL |
| 5 | sex | {SEX} |
| 6 | dob | NULL |
| 7 | age | {AGE} |
| 8 | cov_period | ถ้า {AL_MOVE} = Addition{AL_DATE} + "-" + {COV_TO}ถ้า {AL_MOVE} = Termination , IncreaseSA , DecreaseSA{MEM_EFF_DATE} + " - " + {COV_TO}รูปแบบ 01.07.24 - 01.08.24DD.MM.YY - DD.MM.YY |
| 9 | alter_type | ถ้า {AL_MOVE} = AdditionNMถ้า {AL_MOVE} = TerminationCLถ้า {AL_MOVE} = IncreaseSA ICถ้า {AL_MOVE} = DecreaseSADC |
| 10 | entrant_date | ถ้า {AL_MOVE} = Addition , IncreaseSA , DecreaseSA {AL_DATE} |
| 11 | withdrawal_date | ถ้า {AL_MOVE} = Termination{AL_DATE} |
| 12 | num_of_date | {NUM_DAY_COV} |
|  |  |  |
| 1 | sum_insu_acc_bf | {SA_ACC_BEF} |
| 2 | sum_insu_mur_bf | {SA_MUR_BEF} |
| 3 | sum_insu_mot_bf | 0 |
| 4 | sum_insu_load_bf | {SA_LOAD_BEF} |
| 5 | sum_re_acc_bf | {SR_ACC_BEF} |
| 6 | sum_re_mur_bf | {SR_MUR_BEF} |
| 7 | sum_re_mot_bf | 0 |
| 8 | sum_re_load_bf | {SR_LOAD_BEF} |
| 9 | re_prem_acc_bf | {RE_PREM_ACC_BEF} |
| 10 | re_prem_load_bf | {RE_PREM_LOAD_BEF} |
| 11 | re_prem_dis_bf | {SUM_DISC_BEF} |
| 12 | sum_insu_acc | {AL_MOVE} = Addition และ Termination{SUM_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_ACC_AFT} |
| 13 | sum_insu_mur | {AL_MOVE} = Addition และ Termination{SUM_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_MUR_AFT} |
| 14 | sum_insu_mot | 0 |
| 15 | sum_insu_load | {AL_MOVE} = Addition และ Termination{SUM_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SA_LOAD_AFT} |
| 16 | sum_re_acc | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_ACC_DEATH}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_ACC_AFT} |
| 17 | sum_re_mur | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_MUR}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_MUR_AFT} |
| 18 | sum_re_mot | 0 |
| 19 | sum_re_load | {AL_MOVE} = Addition และ Termination{SUM_RE_INS_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{SR_LOAD_AFT} |
| 20 | re_prem_acc | {AL_MOVE} = Addition และ Termination{RE_PREM_ACC}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_ACC_AFT} |
| 21 | re_prem_load | {AL_MOVE} = Addition และ Termination{RE_PREM_LOAD}{AL_MOVE} = IncreaseSA และ DecreaseSA{RE_PREM_LOAD_AFT} |
| 22 | re_prem_dis | {AL_MOVE} = Addition และ Termination{SUM_DISC}{AL_MOVE} = IncreaseSA และ DecreaseSA{SUM_DISC_AFT} |
| 23 | sum_insu_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_acc_bf - sum_insu_accเก็บลงด้วยค่าบวกเสมอ |
| 24 | sum_insu_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_mur_bf - sum_insu_murเก็บลงด้วยค่าบวกเสมอ |
| 25 | sum_insu_mot_diff | 0 |
| 26 | sum_insu_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_insu_load_bf - sum_insu_loadเก็บลงด้วยค่าบวกเสมอ |
| 27 | sum_re_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_acc_bf - sum_re_accเก็บลงด้วยค่าบวกเสมอ |
| 28 | sum_re_mur_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_mur_bf - sum_re_murเก็บลงด้วยค่าบวกเสมอ |
| 29 | sum_re_mot_diff | 0 |
| 30 | sum_re_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAsum_re_load_bf - sum_re_loadเก็บลงด้วยค่าบวกเสมอ |
| 31 | re_prem_acc_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_acc_bf - re_prem_accเก็บลงด้วยค่าบวกเสมอ |
| 32 | re_prem_load_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_load_bf - re_prem_loadเก็บลงด้วยค่าบวกเสมอ |
| 33 | re_prem_dis_diff | เฉพาะ {AL_MOVE} = IncreaseSA และ DecreaseSAre_prem_dis_bf - re_prem_disเก็บลงด้วยค่าบวกเสมอ |
| 34 | sum_insu_x | {AL_MOVE} = IncreaseSA และ DecreaseSAถ้า sum_insu_acc_bf = 600Aถ้า sum_insu_acc_bf = 1200Bถ้า sum_insu_acc_bf = 1500Cถ้า sum_insu_acc_bf = 2000Dถ้า sum_insu_acc_bf = 3000Eถ้า sum_insu_acc_bf = 5500F{AL_MOVE} = Addition และ Terminationถ้า sum_insu_acc = 600Aถ้า sum_insu_acc = 1200Bถ้า sum_insu_acc = 1500Cถ้า sum_insu_acc = 2000Dถ้า sum_insu_acc = 3000Eถ้า sum_insu_acc = 5500F |
| 35 | sum_re_x | sum_insu_x |
| 36 | re_prem_x | sum_insu_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370790 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 7. tx_rig_act_bdr_new_renew (Mapping) =====
tx_rig_act_bdr_new_renew
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_new_renew_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | ri_no | tx_rig_act_policy_hd.reinsurer_no |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd.reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd.ri_com_date |
| 8 | first_date | tx_rig_act_policy_hd.first_date |
| 9 | effective_date_from | tx_rig_act_policy_hd.effective_date |
| 10 | effective_date_to | {COV_TO} |
| 11 | mode_pay | tx_rig_act_policy_hd.mode_pay |
| 12 | policy_year | tx_rig_act_policy_hd.policy_year |
| 13 | pol_name | tx_rig_act_policy_hd.pol_name |
| 14 | nob | tx_rig_act_policy_hd.nob |
| 15 | policy_status | tx_rig_act_policy_hd.policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd.renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd.policy_period |
| 18 | sale_option | tx_rig_act_policy_hd.sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd.sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd.code_name_pol |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
| 22 | full_year | tx_rig_act_policy_hd.full_year |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_ori_sa_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_tpd |
| 20 | l2_ori_sa_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_tpd |
| 21 | l3_ori_sa_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_tpd |
| 22 | tot_ori_sa_tpd | l1_ori_sa_tpd + l2_ori_sa_tpd + l3_ori_sa_tpd |
| 23 | l1_ori_sa_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_ttd |
| 24 | l2_ori_sa_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_ttd |
| 25 | l3_ori_sa_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_ttd |
| 26 | tot_ori_sa_ttd | l1_ori_sa_ttd + l2_ori_sa_ttd + l3_ori_sa_ttd |
| 27 | l1_ori_sa_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_med |
| 28 | l2_ori_sa_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_med |
| 29 | l3_ori_sa_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_med |
| 30 | tot_ori_sa_med | l1_ori_sa_med + l2_ori_sa_med + l3_ori_sa_med |
| 31 | l1_ori_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_life |
| 32 | l2_ori_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_life |
| 33 | l3_ori_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_life |
| 34 | tot_ori_nb_prem_life | l1_ori_nb_prem_life + l2_ori_nb_prem_life + l3_ori_nb_prem_life |
| 35 | l1_ori_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_add |
| 36 | l2_ori_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_add |
| 37 | l3_ori_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_add |
| 38 | tot_ori_nb_prem_add | l1_ori_nb_prem_add + l2_ori_nb_prem_add + l3_ori_nb_prem_add |
| 39 | l1_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 40 | l2_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 41 | l3_ori_nb_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_tpd |
| 42 | tot_ori_nb_prem_tpd | l1_ori_nb_prem_tpd + l2_ori_nb_prem_tpd + l3_ori_nb_prem_tpd |
| 43 | l1_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 44 | l2_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 45 | l3_ori_nb_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_ttd |
| 46 | tot_ori_nb_prem_ttd | l1_ori_nb_prem_ttd + l2_ori_nb_prem_ttd + l3_ori_nb_prem_ttd |
| 47 | l1_ori_nb_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_nb_prem_med |
| 48 | l2_ori_nb_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_nb_prem_med |
| 49 | l3_ori_nb_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_nb_prem_med |
| 50 | tot_ori_nb_prem_med | l1_ori_nb_prem_med + l2_ori_nb_prem_med + l3_ori_nb_prem_med |
| 51 | l1_ori_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_life |
| 52 | l2_ori_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_life |
| 53 | l3_ori_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_life |
| 54 | tot_ori_ren_prem_life | l1_ori_ren_prem_life + l2_ori_ren_prem_life + l3_ori_ren_prem_life |
| 55 | l1_ori_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_add |
| 56 | l2_ori_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_add |
| 57 | l3_ori_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_add |
| 58 | tot_ori_ren_prem_add | l1_ori_ren_prem_add + l2_ori_ren_prem_add + l3_ori_ren_prem_add |
| 59 | l1_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 60 | l2_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 61 | l3_ori_ren_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_tpd |
| 62 | tot_ori_ren_prem_tpd | l1_ori_ren_prem_tpd + l2_ori_ren_prem_tpd + l3_ori_ren_prem_tpd |
| 63 | l1_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 64 | l2_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 65 | l3_ori_ren_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_ttd |
| 66 | tot_ori_ren_prem_ttd | l1_ori_ren_prem_ttd + l2_ori_ren_prem_ttd + l3_ori_ren_prem_ttd |
| 67 | l1_ori_ren_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ren_prem_med |
| 68 | l2_ori_ren_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ren_prem_med |
| 69 | l3_ori_ren_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ren_prem_med |
| 70 | tot_ori_ren_prem_med | l1_ori_ren_prem_med + l2_ori_ren_prem_med + l3_ori_ren_prem_med |
| 71 | l1_ori_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_life |
| 72 | l2_ori_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_life |
| 73 | l3_ori_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_life |
| 74 | tot_ori_rev_prem_life | l1_ori_rev_prem_life + l2_ori_rev_prem_life + l3_ori_rev_prem_life |
| 75 | l1_ori_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_rev_prem_add |
| 76 | l2_ori_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_rev_prem_add |
| 77 | l3_ori_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_rev_prem_add |
| 78 | tot_ori_rev_prem_add | l1_ori_rev_prem_add + l2_ori_rev_prem_add + l3_ori_rev_prem_add |
| 79 | l1_ori_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_life |
| 80 | l2_ori_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_life |
| 81 | l3_ori_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_life |
| 82 | tot_ori_refund_prem_life | l1_ori_refund_prem_life + l2_ori_refund_prem_life + l3_ori_refund_prem_life |
| 83 | l1_ori_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_add |
| 84 | l2_ori_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_add |
| 85 | l3_ori_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_add |
| 86 | tot_ori_refund_prem_add | l1_ori_refund_prem_add + l2_ori_refund_prem_add + l3_ori_refund_prem_add |
| 87 | l1_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 88 | l2_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 89 | l3_ori_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_tpd |
| 90 | tot_ori_refund_prem_tpd | l1_ori_refund_prem_tpd + l2_ori_refund_prem_tpd + l3_ori_refund_prem_tpd |
| 91 | l1_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 92 | l2_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 93 | l3_ori_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_ttd |
| 94 | tot_ori_refund_prem_ttd | l1_ori_refund_prem_ttd + l2_ori_refund_prem_ttd + l3_ori_refund_prem_ttd |
| 95 | l1_ori_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_refund_prem_med |
| 96 | l2_ori_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_refund_prem_med |
| 97 | l3_ori_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_refund_prem_med |
| 98 | tot_ori_refund_prem_med | l1_ori_refund_prem_med + l2_ori_refund_prem_med + l3_ori_refund_prem_med |
| 99 | l1_ori_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_life |
| 100 | l2_ori_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_life |
| 101 | l3_ori_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_life |
| 102 | tot_ori_tl_prem_life | l1_ori_tl_prem_life + l2_ori_tl_prem_life + l3_ori_tl_prem_life |
| 103 | l1_ori_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_add |
| 104 | l2_ori_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_add |
| 105 | l3_ori_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_add |
| 106 | tot_ori_tl_prem_add | l1_ori_tl_prem_add + l2_ori_tl_prem_add + l3_ori_tl_prem_add |
| 107 | l1_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 108 | l2_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 109 | l3_ori_tl_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_tpd |
| 110 | tot_ori_tl_prem_tpd | l1_ori_tl_prem_tpd + l2_ori_tl_prem_tpd + l3_ori_tl_prem_tpd |
| 111 | l1_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 112 | l2_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 113 | l3_ori_tl_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_ttd |
| 114 | tot_ori_tl_prem_ttd | l1_ori_tl_prem_ttd + l2_ori_tl_prem_ttd + l3_ori_tl_prem_ttd |
| 115 | l1_ori_tl_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_tl_prem_med |
| 116 | l2_ori_tl_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_tl_prem_med |
| 117 | l3_ori_tl_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_tl_prem_med |
| 118 | tot_ori_tl_prem_med | l1_ori_tl_prem_med + l2_ori_tl_prem_med + l3_ori_tl_prem_med |
| 119 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_life |
| 120 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_life |
| 121 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_life |
| 122 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 123 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_add |
| 124 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_add |
| 125 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_add |
| 126 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 127 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 128 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 129 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_dismem |
| 130 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 131 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 132 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 133 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 134 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 135 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 136 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 137 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 138 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 139 | l1_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 140 | l2_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 141 | l3_ori_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_life |
| 142 | tot_ori_ex_refund_paid_life | l1_ori_ex_refund_paid_life + l2_ori_ex_refund_paid_life + l3_ori_ex_refund_paid_life |
| 143 | l1_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 144 | l2_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 145 | l3_ori_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_ex_refund_paid_add |
| 146 | tot_ori_ex_refund_paid_add | l1_ori_ex_refund_paid_add + l2_ori_ex_refund_paid_add + l3_ori_ex_refund_paid_add |
| 147 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 148 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 149 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 150 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 151 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 152 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 153 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 154 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 155 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 156 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 157 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
| 158 | l1_re_nb_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_life |
| 159 | l2_re_nb_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_life |
| 160 | l3_re_nb_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_life |
| 161 | tot_re_nb_prem_life | l1_re_nb_prem_life + l2_re_nb_prem_life + l3_re_nb_prem_life |
| 162 | l1_re_nb_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_nb_prem_add |
| 163 | l2_re_nb_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_nb_prem_add |
| 164 | l3_re_nb_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_nb_prem_add |
| 165 | tot_re_nb_prem_add | l1_re_nb_prem_add + l2_re_nb_prem_add + l3_re_nb_prem_add |
| 166 | l1_re_ren_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_life |
| 167 | l2_re_ren_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_life |
| 168 | l3_re_ren_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_life |
| 169 | tot_re_ren_prem_life | l1_re_ren_prem_life + l2_re_ren_prem_life + l3_re_ren_prem_life |
| 170 | l1_re_ren_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ren_prem_add |
| 171 | l2_re_ren_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ren_prem_add |
| 172 | l3_re_ren_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ren_prem_add |
| 173 | tot_re_ren_prem_add | l1_re_ren_prem_add + l2_re_ren_prem_add + l3_re_ren_prem_add |
| 174 | l1_re_rev_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_life |
| 175 | l2_re_rev_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_life |
| 176 | l3_re_rev_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_life |
| 177 | tot_re_rev_prem_life | l1_re_rev_prem_life + l2_re_rev_prem_life + l3_re_rev_prem_life |
| 178 | l1_re_rev_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_add |
| 179 | l2_re_rev_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_add |
| 180 | l3_re_rev_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_add |
| 181 | tot_re_rev_prem_add | l1_re_rev_prem_add + l2_re_rev_prem_add + l3_re_rev_prem_add |
| 182 | l1_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_tpd |
| 183 | l2_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_tpd |
| 184 | l3_re_rev_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_tpd |
| 185 | tot_re_rev_prem_tpd | l1_re_rev_prem_tpd + l2_re_rev_prem_tpd + l3_re_rev_prem_tpd |
| 186 | l1_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_ttd |
| 187 | l2_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_ttd |
| 188 | l3_re_rev_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_ttd |
| 189 | tot_re_rev_prem_ttd | l1_re_rev_prem_ttd + l2_re_rev_prem_ttd + l3_re_rev_prem_ttd |
| 190 | l1_re_rev_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_rev_prem_med |
| 191 | l2_re_rev_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_rev_prem_med |
| 192 | l3_re_rev_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_rev_prem_med |
| 193 | tot_re_rev_prem_med | l1_re_rev_prem_med + l2_re_rev_prem_med + l3_re_rev_prem_med |
| 194 | l1_re_refund_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_life |
| 195 | l2_re_refund_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_life |
| 196 | l3_re_refund_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_life |
| 197 | tot_re_refund_prem_life | l1_re_refund_prem_life + l2_re_refund_prem_life + l3_re_refund_prem_life |
| 198 | l1_re_refund_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_add |
| 199 | l2_re_refund_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_add |
| 200 | l3_re_refund_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_add |
| 201 | tot_re_refund_prem_add | l1_re_refund_prem_add + l2_re_refund_prem_add + l3_re_refund_prem_add |
| 202 | l1_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_tpd |
| 203 | l2_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_tpd |
| 204 | l3_re_refund_prem_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_tpd |
| 205 | tot_re_refund_prem_tpd | l1_re_refund_prem_tpd + l2_re_refund_prem_tpd + l3_re_refund_prem_tpd |
| 206 | l1_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_ttd |
| 207 | l2_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_ttd |
| 208 | l3_re_refund_prem_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_ttd |
| 209 | tot_re_refund_prem_ttd | l1_re_refund_prem_ttd + l2_re_refund_prem_ttd + l3_re_refund_prem_ttd |
| 210 | l1_re_refund_prem_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_refund_prem_med |
| 211 | l2_re_refund_prem_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_refund_prem_med |
| 212 | l3_re_refund_prem_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_refund_prem_med |
| 213 | tot_re_refund_prem_med | l1_re_refund_prem_med + l2_re_refund_prem_med + l3_re_refund_prem_med |
| 214 | l1_re_tl_prem_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_life |
| 215 | l2_re_tl_prem_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_life |
| 216 | l3_re_tl_prem_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_life |
| 217 | tot_re_tl_prem_life | l1_re_tl_prem_life + l2_re_tl_prem_life + l3_re_tl_prem_life |
| 218 | l1_re_tl_prem_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_tl_prem_add |
| 219 | l2_re_tl_prem_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_tl_prem_add |
| 220 | l3_re_tl_prem_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_tl_prem_add |
| 221 | tot_re_tl_prem_add | l1_re_tl_prem_add + l2_re_tl_prem_add + l3_re_tl_prem_add |
| 222 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_life |
| 223 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_life |
| 224 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_life |
| 225 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 226 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_add |
| 227 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_add |
| 228 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_add |
| 229 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 230 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_dismem |
| 231 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_dismem |
| 232 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_dismem |
| 233 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 234 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 235 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 236 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 237 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 238 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_tpd |
| 239 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_tpd |
| 240 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_tpd |
| 241 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 242 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 243 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 244 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 245 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 246 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med |
| 247 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med |
| 248 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med |
| 249 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 254 | l1_com_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_life |
| 255 | l2_com_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_life |
| 256 | l3_com_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_life |
| 257 | tot_com_life | l1_com_life + l2_com_life + l3_com_life |
| 258 | l1_com_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_add |
| 259 | l2_com_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_add |
| 260 | l3_com_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_add |
| 261 | tot_com_add | l1_com_add + l2_com_add + l3_com_add |
| 262 | l1_com_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_tpd |
| 263 | l2_com_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_tpd |
| 264 | l3_com_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_tpd |
| 265 | tot_com_tpd | l1_com_tpd + l2_com_tpd + l3_com_tpd |
| 266 | l1_com_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_ttd |
| 267 | l2_com_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_ttd |
| 268 | l3_com_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_ttd |
| 269 | tot_com_ttd | l1_com_ttd + l2_com_ttd + l3_com_ttd |
| 270 | l1_com_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_med |
| 271 | l2_com_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_med |
| 272 | l3_com_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_med |
| 273 | tot_com_med | l1_com_med + l2_com_med + l3_com_med |
| 274 | l1_com_refund_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_life |
| 275 | l2_com_refund_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_life |
| 276 | l3_com_refund_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_life |
| 277 | tot_com_refund_life | l1_com_refund_life + l2_com_refund_life + l3_com_refund_life |
| 278 | l1_com_refund_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_add |
| 279 | l2_com_refund_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_add |
| 280 | l3_com_refund_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_add |
| 281 | tot_com_refund_add | l1_com_refund_add + l2_com_refund_add + l3_com_refund_add |
| 282 | l1_com_refund_tpd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_tpd |
| 283 | l2_com_refund_tpd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_tpd |
| 284 | l3_com_refund_tpd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_tpd |
| 285 | tot_com_refund_tpd | l1_com_refund_tpd + l2_com_refund_tpd + l3_com_refund_tpd |
| 286 | l1_com_refund_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_ttd |
| 287 | l2_com_refund_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_ttd |
| 288 | l3_com_refund_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_ttd |
| 289 | tot_com_refund_ttd | l1_com_refund_ttd + l2_com_refund_ttd + l3_com_refund_ttd |
| 290 | l1_com_refund_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.com_refund_med |
| 291 | l2_com_refund_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.com_refund_med |
| 292 | l3_com_refund_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.com_refund_med |
| 293 | tot_com_refund_med | l1_com_refund_med + l2_com_refund_med + l3_com_refund_med |
| 294 | l1_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 295 | l2_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 296 | l3_re_ex_refund_paid_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_life |
| 297 | tot_re_ex_refund_paid_life | l1_re_ex_refund_paid_life + l2_re_ex_refund_paid_life + l3_re_ex_refund_paid_life |
| 298 | l1_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 299 | l2_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 300 | l3_re_ex_refund_paid_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_ex_refund_paid_add |
| 301 | tot_re_ex_refund_paid_add | l1_re_ex_refund_paid_add + l2_re_ex_refund_paid_add + l3_re_ex_refund_paid_add |
| 302 | remark |  |
|  |  |  |
| 1 | number_of_mem_life | tx_rig_act_policy_hd.number_of_mem_life |
| 2 | number_of_mem_acc | tx_rig_act_policy_hd.number_of_mem_acc |
| 3 | ex_refund_rate_life | tx_rig_act_policy_hd.ex_refund_rate_life |
| 4 | ex_refund_rate_acc | tx_rig_act_policy_hd.ex_refund_rate_acc |
| 5 | ex_pol_year_life | tx_rig_act_policy_hd.ex_pol_year_life |
| 6 | ex_pol_year_acc | tx_rig_act_policy_hd.ex_pol_year_acc |
| 7 | gross_prem_life | tx_rig_act_policy_hd.gross_prem_life |
| 8 | gross_prem_acc | tx_rig_act_policy_hd.gross_prem_acc |
| 9 | claim_paid_year_life | tx_rig_act_policy_hd.claim_paid_year_life |
| 10 | claim_paid_year_acc | tx_rig_act_policy_hd.claim_paid_year_acc |
| 11 | re_ex_refund | tx_rig_act_policy_hd.re_ex_refund |
| 12 | ori_ex_refund_life | tx_rig_act_policy_hd.ori_ex_refund_life |
| 13 | ori_ex_refund_acc | tx_rig_act_policy_hd.ori_ex_refund_acc |
| 14 | net_re_prem_life | tx_rig_act_policy_hd.net_re_prem_life |
| 15 | net_re_prem_acc | tx_rig_act_policy_hd.net_re_prem_acc |
| 16 | re_com_life | tx_rig_act_policy_hd.re_com_life |
| 17 | re_com_acc | tx_rig_act_policy_hd.re_com_acc |
| 18 | re_ex_refund_life | tx_rig_act_policy_hd.re_ex_refund_life |
| 19 | re_ex_refund_acc | tx_rig_act_policy_hd.re_ex_refund_acc |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319961127 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 7. tx_rig_act_bdr_new_renew (Mapping) > level1 =====
tx_rig_act_policy_layer.level = 1


===== PAGE 1319961130 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 7. tx_rig_act_bdr_new_renew (Mapping) > level2 =====
tx_rig_act_policy_layer.level = 2


===== PAGE 1319961133 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 7. tx_rig_act_bdr_new_renew (Mapping) > level3 =====
tx_rig_act_policy_layer.level = 3


===== PAGE 1319370793 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 8. tx_rig_act_bdr_pol_mem (Mapping) =====
| No. | Attribute Name |  |
| 1 | rig_act_bdr_pol_mem_id | running no. |
| 2 | rig_act_bdr_new_renew_id | tx_rig_act_bdr_new_renew.rig_act_bdr_new_renew_id |
| 3 | cession_no | tx_rig_act_pol_mem.cession_no |
| 4 | name | tx_rig_act_pol_mem .name |
| 5 | sex | tx_rig_act_pol_mem .sex |
| 6 | dob | tx_rig_act_pol_mem .dob |
| 7 | age | tx_rig_act_pol_mem .age |
| 8 | occ_class | tx_rig_act_pol_mem .class |
| 9 | add_type | tx_rig_act_pol_mem .add_typeแปลงนำค่า tx_rig_act_pol_mem .add_type ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 06/03/2026) |
|  |  | tx_rig_act_pol_mem |
| 1 | sa_life | sa_acc |
| 2 | sa_mur | sa_mur |
| 3 | sa_mot | sa_mot |
| 4 | sa_load | sa_load |
| 5 | sa_special | sa_special |
| 6 | sr_life | sr_acc |
| 7 | sr_mur | sr_mur |
| 8 | sr_mot | sr_mot |
| 9 | sr_load | sr_load |
| 10 | sr_special | sr_special |
| 11 | ri_rate | ri_rate |
| 12 | prem_life | prem_acc |
| 13 | prem_mur | prem_mur |
| 14 | prem_mot | prem_mot |
| 15 | prem_load | prem_load |
| 16 | prem_special | prem_special |
| 17 | prem_dis | prem_dis |
| 18 | tot_prem | tot_prem |
| 19 | com | com_acc |
| 20 | remark |  |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370796 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 9. tx_rig_act_bdr_alter (Mapping) =====
tx_rig_act_bdr_alter
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | policy_no | tx_rig_act_policy_hd.policy_no |
| 5 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 6 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 7 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 8 | effective_date_to | {COV_TO} |
| 9 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 10 | policy_year | tx_rig_act_policy_hd .policy_year |
| 11 | pol_name | tx_rig_act_policy_hd .pol_name |
| 12 | nob | tx_rig_act_policy_hd .nob |
| 13 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 14 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 15 | policy_period | tx_rig_act_policy_hd .policy_period |
| 16 | sale_option | tx_rig_act_policy_hd .sale_option |
| 17 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 18 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 19 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 20 | occ_class | {OCC} |
| 21 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370799 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 10. tx_rig_act_bdr_alter_mem (Mapping) =====
| No. | Attribute Name | tx_rig_act_alter_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | cov_period | cov_period |
| 10 | alter_type | alter_type |
| 11 | entrant_date | entrant_date |
| 12 | withdrawal_date | withdrawal_date |
| 13 | num_of_date | num_of_date |
|  |  |  |
| 1 | sum_insu_acc_bf | sum_insu_acc_bf |
| 2 | sum_insu_mur_bf | sum_insu_mur_bf |
| 3 | sum_insu_mot_bf | sum_insu_mot_bf |
| 4 | sum_insu_load_bf | sum_insu_load_bf |
| 5 | sum_re_acc_bf | sum_re_acc_bf |
| 6 | sum_re_mur_bf | sum_re_mur_bf |
| 7 | sum_re_mot_bf | sum_re_mot_bf |
| 8 | sum_re_load_bf | sum_re_load_bf |
| 9 | re_prem_acc_bf | re_prem_acc_bf |
| 10 | re_prem_load_bf | re_prem_load_bf |
| 11 | re_prem_dis_bf | re_prem_dis_bf |
| 12 | sum_insu_acc | sum_insu_acc |
| 13 | sum_insu_mur | sum_insu_mur |
| 14 | sum_insu_mot | sum_insu_mot |
| 15 | sum_insu_load | sum_insu_load |
| 16 | sum_re_acc | sum_re_acc |
| 17 | sum_re_mur | sum_re_mur |
| 18 | sum_re_mot | sum_re_mot |
| 19 | sum_re_load | sum_re_load |
| 20 | re_prem_acc | re_prem_acc |
| 21 | re_prem_load | re_prem_load |
| 22 | re_prem_dis | re_prem_dis |
| 23 | sum_insu_acc_diff | sum_insu_acc_diff |
| 24 | sum_insu_mur_diff | sum_insu_mur_diff |
| 25 | sum_insu_mot_diff | sum_insu_mot_diff |
| 26 | sum_insu_load_diff | sum_insu_load_diff |
| 27 | sum_re_acc_diff | sum_re_acc_diff |
| 28 | sum_re_mur_diff | sum_re_mur_diff |
| 29 | sum_re_mot_diff | sum_re_mot_diff |
| 30 | sum_re_load_diff | sum_re_load_diff |
| 31 | re_prem_acc_diff | re_prem_acc_diff |
| 32 | re_prem_load_diff | re_prem_load_diff |
| 33 | re_prem_dis_diff | re_prem_dis_diff |
| 34 | sum_insu_x | sum_insu_x |
| 35 | sum_re_x | sum_re_x |
| 36 | re_prem_x | re_prem_x |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370802 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 11. tx_rig_act_bdr_claim (Mapping) =====
tx_rig_act_bdr_claim
Group ข้อมูลตาม tx_rig_act_policy_hd.policy_no , effective_date , data_quarter
| No. | Attribute Name |  |
| 1 | rig_act_bdr_claim_id | running no. |
| 2 | rig_act_hd_id | tx_rig_act_hd.rig_act_hd_id |
| 3 | closing_quarter | tx_rig_act_hd.closing_quarter |
| 4 | data_period | สร้างรายการตาม เดือน period ที่อยู่ภายใต้ Quarter |
| 5 | policy_no | tx_rig_act_policy_hd.policy_no |
| 6 | reinsurer_no | tx_rig_act_policy_hd .reinsurer_no |
| 7 | ri_com_date | tx_rig_act_policy_hd .ri_com_date |
|  | first_date | tx_rig_act_policy_hd.first_date |
| 8 | effective_date_from | tx_rig_act_policy_hd .effective_date |
| 9 | effective_date_to | {COV_TO} |
| 10 | mode_pay | tx_rig_act_policy_hd .mode_pay |
| 11 | policy_year | tx_rig_act_policy_hd .policy_year |
| 12 | policy_period | tx_rig_act_policy_hd .policy_period |
| 13 | pol_name | tx_rig_act_policy_hd .pol_name |
| 14 | nob | tx_rig_act_policy_hd .nob |
| 15 | policy_status | tx_rig_act_policy_hd .report_policy_status |
| 16 | renew_lapse_date | tx_rig_act_policy_hd .renew_lapse_date |
| 17 | policy_period | tx_rig_act_policy_hd .policy_period |
| 18 | sale_option | tx_rig_act_policy_hd .sale_option |
| 19 | sale_channel_code | tx_rig_act_policy_hd .sale_channel_code |
| 20 | code_name_pol | tx_rig_act_policy_hd .code_name_pol |
| 21 | type_coverage_pol | {POLIC_COV}แปลงค่า {POLIC_COV} ที่ได้ เทียบกับ cf_lookup_catalog.lookup_keyที่ cf_lookup_catalog.parent_id = 1003200จากนั้นนำค่า cf_lookup_catalog.description มาเก็บไว้(suthanee.sa 11/03/2026) |
| 22 | occ_class | {OCC} |
| 23 | policy_ri_period | tx_rig_act_policy_hd.policy_ri_period |
|  |  | รวมทุกรายการใน tx_rig_act_bdr_claim_mem แยกตาม เดือน period ที่อยู่ภายใต้ Quarterโดยดูจาก tx_rig_act_claim_mem.approve_date |
| 1 | frequency_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = Accident Death |
| 2 | frequency_tpd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = TPD และ Dismemberment |
| 3 | frequency_ipd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = IPD |
| 4 | frequency_opd | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = OPD |
| 5 | frequency_dental | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = DENTAL |
| 6 | frequency_med_acc | sum จำนวนการรายการเป็น tx_rig_act_bdr_claim_mem.claim_type = MedAccident |
| 7 | sum_frequency | frequency_acc + frequency_tpd + frequency_ipd + frequency_opd + frequency_dental + frequency_med_acc |
| 8 | sum_amo_paid_life | tx_rig_act_bdr_claim_mem.amo_paid_life |
| 9 | sum_amo_paid_ipd | tx_rig_act_bdr_claim_mem.amo_paid_ipd |
| 10 | sum_amo_paid_opd | tx_rig_act_bdr_claim_mem.amo_paid_opd |
| 11 | sum_amo_paid_dental | tx_rig_act_bdr_claim_mem.amo_paid_dental |
| 12 | sum_amo_paid_acc | tx_rig_act_bdr_claim_mem.amo_paid_acc |
| 13 | sum_amo_paid_tpd | tx_rig_act_bdr_claim_mem.amo_paid_tpd |
| 14 | sum_amo_paid_dismem | tx_rig_act_bdr_claim_mem.amo_paid_dismem |
| 15 | sum_amo_paid_med_acc | tx_rig_act_bdr_claim_mem.amo_paid_med_acc |
| 16 | sum_amo_paid_tot | sum_amo_paid_life + sum_amo_paid_ipd + sum_amo_paid_opd + sum_amo_paid_dental + sum_amo_paid_acc + sum_amo_paid_tpd sum_amo_paid_dismem + sum_amo_paid_med_acc |
| 17 | sum_amo_paid_grand_tot | 0 |
| 18 | sum_re_claim_life | tx_rig_act_bdr_claim_mem.re_claim_life |
| 19 | sum_re_claim_acc | tx_rig_act_bdr_claim_mem.re_claim_acc |
| 20 | sum_re_claim_ipd | tx_rig_act_bdr_claim_mem.re_claim_ipd |
| 21 | sum_re_claim_opd | tx_rig_act_bdr_claim_mem.re_claim_opd |
| 22 | sum_re_claim_dental | tx_rig_act_bdr_claim_mem.re_claim_dental |
| 23 | sum_re_claim_tpd | tx_rig_act_bdr_claim_mem.re_claim_tpd |
| 24 | sum_re_claim_dismem | tx_rig_act_bdr_claim_mem.re_claim_dismem |
| 25 | sum_re_claim_med_acc | tx_rig_act_bdr_claim_mem.re_claim_med_acc |
| 26 | sum_re_claim_tot | sum_re_claim_life + sum_re_claim_acc + sum_re_claim_ipd + sum_re_claim_opd + sum_re_claim_dental + sum_re_claim_tpd + sum_re_claim_dismem + sum_re_claim_med_acc |
|  |  |  |
| 1 | l1_ori_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 2 | l2_ori_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 3 | l3_ori_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_life |
| 4 | tot_ori_claim_paid_life | l1_ori_claim_paid_life + l2_ori_claim_paid_life + l3_ori_claim_paid_life |
| 5 | l1_ori_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 6 | l2_ori_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 7 | l3_ori_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_add |
| 8 | tot_ori_claim_paid_add | l1_ori_claim_paid_add + l2_ori_claim_paid_add + l3_ori_claim_paid_add |
| 9 | l1_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 10 | l2_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 11 | l3_ori_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.amo_paid_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.ori_claim_paid_dismem |
| 12 | tot_ori_claim_paid_dismem | l1_ori_claim_paid_dismem + l2_ori_claim_paid_dismem + l3_ori_claim_paid_dismem |
| 13 | l1_ori_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_claim_paid_di |
| 14 | l2_ori_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_claim_paid_di |
| 15 | l3_ori_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_claim_paid_di |
| 16 | tot_ori_claim_paid_di | l1_ori_claim_paid_di + l2_ori_claim_paid_di + l3_ori_claim_paid_di |
| 17 | l1_re_claim_paid_life | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 18 | l2_re_claim_paid_life | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 19 | l3_re_claim_paid_life | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_life ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_life |
| 20 | tot_re_claim_paid_life | l1_re_claim_paid_life + l2_re_claim_paid_life + l3_re_claim_paid_life |
| 21 | l1_re_claim_paid_add | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 22 | l2_re_claim_paid_add | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 23 | l3_re_claim_paid_add | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_acc ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_add |
| 24 | tot_re_claim_paid_add | l1_re_claim_paid_add + l2_re_claim_paid_add + l3_re_claim_paid_add |
| 25 | l1_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 26 | l2_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 27 | l3_re_claim_paid_dismem | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_dismem ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_dismem |
| 28 | tot_re_claim_paid_dismem | l1_re_claim_paid_dismem + l2_re_claim_paid_dismem + l3_re_claim_paid_dismem |
| 29 | l1_re_claim_paid_di | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_di |
| 30 | l2_re_claim_paid_di | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_di |
| 31 | l3_re_claim_paid_di | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_di |
| 32 | tot_re_claim_paid_di | l1_re_claim_paid_di + l2_re_claim_paid_di + l3_re_claim_paid_di |
| 33 | l1_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 1SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 1แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 34 | l2_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 2SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 2แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 35 | l3_re_claim_paid_tpd | tx_rig_act_policy_layer.level = 3SUM เฉพาะ tx_rig_act_claim_mem.re_claim_tpd ของทุกคนภายใต้ Layer 3แยกตาม tx_rig_act_claim_mem.approve_datetx_rig_act_policy_layer.re_claim_paid_tpd |
| 36 | tot_re_claim_paid_tpd | l1_re_claim_paid_tpd + l2_re_claim_paid_tpd + l3_re_claim_paid_tpd |
| 37 | l1_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_ttd |
| 38 | l2_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_ttd |
| 39 | l3_re_claim_paid_ttd | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_ttd |
| 40 | tot_re_claim_paid_ttd | l1_re_claim_paid_ttd + l2_re_claim_paid_ttd + l3_re_claim_paid_ttd |
| 41 | l1_re_claim_paid_med | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 42 | l2_re_claim_paid_med | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 43 | l3_re_claim_paid_med | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_claim_paid_med + tx_rig_act_policy_layer.re_claim_paid_med_acc + tx_rig_act_policy_layer.re_claim_paid_ipd + tx_rig_act_policy_layer.re_claim_paid_opd + tx_rig_act_policy_layer.re_claim_paid_dental |
| 44 | tot_re_claim_paid_med | l1_re_claim_paid_med + l2_re_claim_paid_med + l3_re_claim_paid_med |
| 45 | l1_ori_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_inv |
| 46 | l2_ori_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_inv |
| 47 | l3_ori_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_inv |
| 48 | tot_ori_inv | l1_ori_inv + l2_ori_inv + l3_ori_inv |
| 49 | l1_re_inv | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_inv |
| 50 | l2_re_inv | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_inv |
| 51 | l3_re_inv | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_inv |
| 52 | tot_re_inv | l1_re_inv + l2_re_inv + l3_re_inv |
| 53 | tot_re_claim_inv_ex | tx_rig_act_policy_layer.re_claim_inv_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 54 | tot_re_claim_leg_ex | tx_rig_act_policy_layer.re_claim_leg_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
| 55 | tot_re_claim_med_ex | tx_rig_act_policy_layer.re_claim_med_ex ทุก layer (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | premium_rate_life | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_life |
| 2 | premium_rate_add | ผลรวม 3 level ของ tx_rig_act_policy_layer.premium_rate_add |
| 3 | l1_member_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_life |
| 4 | l2_member_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_life |
| 5 | l3_member_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_life |
| 6 | tot_member_life | l1_member_life + l2_member_life + l3_member_life |
| 7 | l1_member_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.member_add |
| 8 | l2_member_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.member_add |
| 9 | l3_member_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.member_add |
| 10 | tot_member_add | l1_member_add + l2_member_add + l3_member_add |
| 11 | l1_ori_sa_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_life |
| 12 | l2_ori_sa_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_life |
| 13 | l3_ori_sa_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_life |
| 14 | tot_ori_sa_life | l1_ori_sa_life + l2_ori_sa_life + l3_ori_sa_life |
| 15 | l1_ori_sa_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.ori_sa_add |
| 16 | l2_ori_sa_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.ori_sa_add |
| 17 | l3_ori_sa_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.ori_sa_add |
| 18 | tot_ori_sa_add | l1_ori_sa_add + l2_ori_sa_add + l3_ori_sa_add |
| 19 | l1_re_share_per | tx_rig_act_policy_layer.level = 1{L1_PER} |
| 20 | l2_re_share_per | tx_rig_act_policy_layer.level = 2{L2_PER} |
| 21 | l3_re_share_per | tx_rig_act_policy_layer.level = 3{L3_PER} |
| 22 | l1_re_sr_life | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_life |
| 23 | l2_re_sr_life | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_life |
| 24 | l3_re_sr_life | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_life |
| 25 | tot_re_sr_life | l1_re_sr_life + l2_re_sr_life + l3_re_sr_life |
| 26 | l1_re_sr_add | tx_rig_act_policy_layer.level = 1tx_rig_act_policy_layer.re_sr_add |
| 27 | l2_re_sr_add | tx_rig_act_policy_layer.level = 2tx_rig_act_policy_layer.re_sr_add |
| 28 | l3_re_sr_add | tx_rig_act_policy_layer.level = 3tx_rig_act_policy_layer.re_sr_add |
| 29 | tot_re_sr_add | l1_re_sr_add + l2_re_sr_add + l3_re_sr_add |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370805 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 12. tx_rig_act_bdr_claim_mem (Mapping) =====
| No. | Attribute Name | tx_rig_act_claim_mem |
| 1 | rig_act_bdr_claim_mem_id | running no. |
| 2 | rig_act_bdr_claim_id | tx_rig_act_bdr_claim.rig_act_bdr_claim_id |
| 3 | seq | running seq. |
| 4 | cession_no | cession_no |
| 5 | name | name |
| 6 | sex | sex |
| 7 | dob | dob |
| 8 | age | age |
| 9 | event_date | event_date |
| 10 | cause | cause |
| 11 | approve_date | approve_date |
| 12 | pay_date | pay_date |
| 13 | class_plan | class_plan |
| 14 | incurre_amo | incurre_amo |
| 15 | claim_status | claim_status |
| 16 | claim_type | claim_type |
| 16 | claim_no | claim_no (suthanee.sa 30/03/2026) |
|  |  |  |
| 1 | ori_sum_insu_life | ori_sum_insu_life |
| 2 | ori_sum_insu_acc | ori_sum_insu_acc |
| 3 | ori_sum_insu_tpd | ori_sum_insu_tpd |
| 4 | ori_sum_insu_dismem | ori_sum_insu_dismem |
| 5 | ori_sum_insu_ipd | ori_sum_insu_ipd |
| 6 | ori_sum_insu_opd | ori_sum_insu_opd |
| 7 | ori_sum_insu_dental | ori_sum_insu_dental |
| 8 | ori_sum_insu_med_acc | ori_sum_insu_med_acc |
| 9 | amo_paid_life | amo_paid_life |
| 10 | amo_paid_acc | amo_paid_acc |
| 11 | amo_paid_tpd | amo_paid_tpd |
| 12 | amo_paid_dismem | amo_paid_dismem |
| 13 | amo_paid_ipd | amo_paid_ipd |
| 14 | amo_paid_opd | amo_paid_opd |
| 15 | amo_paid_dental | amo_paid_dental |
| 16 | amo_paid_med_acc | amo_paid_med_acc |
| 17 | amo_paid_di | amo_paid_di |
| 18 | amo_paid_inv | amo_paid_inv |
| 19 | re_claim_life | re_claim_life |
| 20 | re_claim_acc | re_claim_acc |
| 21 | re_claim_tpd | re_claim_tpd |
| 22 | re_claim_dismem | re_claim_dismem |
| 23 | re_claim_ipd | re_claim_ipd |
| 24 | re_claim_opd | re_claim_opd |
| 25 | re_claim_dental | re_claim_dental |
| 26 | re_claim_med_acc | re_claim_med_acc |
| 27 | re_claim_di | re_claim_di |
| 28 | re_claim_inv | re_claim_inv |
| 29 | remark | treaty_code = "GIB_Grp_Direct_EB"ถ้า {CLAIM_STATUS} ไม่เท่ากับ 0บันทึก "Decline Claim" |
| 30 | re_claim_inv_ex | re_claim_inv_ex (#M06 27/04/2026 suthanee.sa) |
| 31 | re_claim_leg_ex | re_claim_leg_ex (#M06 27/04/2026 suthanee.sa) |
| 32 | re_claim_med_ex | re_claim_med_ex (#M06 27/04/2026 suthanee.sa) |
|  |  |  |
| 1 | claim_benefits | claim_benefits |
| 2 | paid_claim_report | paid_claim_report |
| 3 | paid_inv_report | paid_inv_report |
| 4 | re_claim_report | re_claim_report |
| 5 | re_inv_report | re_inv_report |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1319370807 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > 13. tx_rig_policy_base (Mapping) =====
ถ้า treaty_code = "GIB_Grp_Direct_EB"
(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1
treaty_code <> "GIB_Grp_Direct_EB"
tx_rig_act_policy_hd.policy_year
บันทึกเฉพาะกรมธรรม์ที่ tx_rig_act_policy_hd.policy_no และ policy_year จากเงื่อนไขมาเทียบ แล้วยังไม่พบใน Table
| No. | Attribute Name |  |
| 1 | rig_policy_base_id | running no. |
| 2 | policy_no | tx_rig_act_policy_hd.policy_no |
| 3 | policy_year | treaty_code = "GIB_Grp_Direct_EB"(ปีของ tx_rig_act_policy_hd.effective_date_from - ปีของ tx_rig_act_policy_hd.first_date) +1treaty_code <> "GIB_Grp_Direct_EB"tx_rig_act_policy_hd.policy_year |
| 4 (suthanee.sa 25/02/2026) | policy_status | tx_rig_act_policy_hd.policy_status |
| 5 | treaty_code | tx_rig_act_hd.treaty_code |
| 6 (suthanee.sa 25/02/2026) | ri_status | tx_rig_act_policy_hd.ri_policy_status |
| 7 | ri_commencement_date | tx_rig_act_policy_hd.effective_date (suthanee.sa 26/02/2026) |
| 8 | period | tx_rig_act_hd.closing_quarter |
| ข้อมูลระบบ |
| 1 | created_date | now() |
| 2 | created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1322353294 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > treaty_code_daiichi =====
treaty_code = "DAI_Grp_Daiichi_Coins"


===== PAGE 1322353290 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > treaty_code_gib =====
treaty_code = "GIB_Grp_Direct_EB"


===== PAGE 1322353292 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 5. Mapping Database Actual BDR (ACT) > treaty_code_thaire =====
treaty_code = "THREL_Grp_PA"


===== PAGE 1299022256 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA =====
### เงื่อนไขในการประมวลผล SOA
ตรวจสอบ Treaty ที่ประมวลผล
- ตรวจสอบ tx_rig_act_hd.treaty_code กับ cf_rig_pc_treaty.treaty_code ถ้า cf_rig_pc_treaty.status = Aประมวลผลปกติถ้า cf_rig_pc_treaty.status = Iข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
- ถ้า cf_rig_pc_treaty.status = Aประมวลผลปกติ
- ประมวลผลปกติ
- ถ้า cf_rig_pc_treaty.status = Iข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
- ข้าม Process การประมวลผล SOA และไม่ต้องสร้าง tx_rig_act_soa_hd.rig_act_soa_hd_id
คำนวณเพิ่มเติมสำหรับ Treaty GIB_Grp_Direct_EB
ตรวจสอบ tx_rig_act_hd.treaty_code ถ้าเท่ากับ "GIB_Grp_Direct_EB"
ให้ประมวลผลเพิ่มเติมดังนี้ (เนื่องจากการลงข้อมูลใน SOA ต้องลงเหมือนกับของ EDW ซึ่งปีกรมธรรม์ที่ใช้งานต้องใช้วิธีเดียวกันกับที่ลง EDW)
- เตรียมข้อมูลดึงข้อมูล cf_rig_treaty_cond_hd.ri_com_rate = {RI_COM_RATE} ของ Treaty โดยตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)แบ่งข้อมูลของกรมธรรม์ทั้งหมดออกเป็นปีแรกและปีต่อ โดย{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- ดึงข้อมูล cf_rig_treaty_cond_hd.ri_com_rate = {RI_COM_RATE} ของ Treaty โดยตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)
- ตรวจสอบรายการใน cf_rig_treaty_cond_hd.status ที่เป็น A ซึ่งอาจมีได้มากกว่า 1 รายการ ต้องนำ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to คู่กับ {RI_COM_RATE} มาด้วยเสมอ
- นำ tx_rig_act_bdr_new_renew.effective_date_from ของกรมธรรม์ เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to ของ {RI_COM_RATE} เพื่อตรวจสอบว่า กรมธรรม์นั้นจะต้องใช้ {RI_COM_RATE} ชุดใด (#AFTER suthanee.sa 06/05/2026)
- แบ่งข้อมูลของกรมธรรม์ทั้งหมดออกเป็นปีแรกและปีต่อ โดย{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- {POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from - ปีของ tx_rig_act_bdr_new_renew.first_date + 1
- {POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_claim.effective_date_from - ปีของ tx_rig_act_bdr_claim.first_date + 1
- คำนวณข้อมูลแต่ละกรมและผลรวมทุกกรม ฝั่ง DUE TO REINSURER (Cr.) - Commission Refundกรณีที่เป็น {POLICY_YEAR_GIB} = 1{SOA_REF_COM_F_LIFE}คำนวณจาก Round(Premium Refund: 1st yr. Type Life x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_life * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_F_LIFE}รวม {SOA_REF_COM_F_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_REF_COM_F_ADD}คำนวณจาก Round(Premium Refund: 1st yr. Type AD&D x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_add * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_F_ADD}รวม {SOA_REF_COM_F_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) กรณีที่เป็น {POLICY_YEAR_GIB} > 1{SOA_REF_COM_R_LIFE}คำนวณจาก Round(Premium Refund: Renewal Type Life x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_life * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_R_LIFE}รวม {SOA_REF_COM_R_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_REF_COM_R_ADD}คำนวณจาก Round(Premium Refund: Renewal Type AD&D x RI Commission Rate% , 2)Round ( tx_rig_act_bdr_new_renew.tot_re_refund_prem_add * {RI_COM_RATE} , 2 )Sum tot_re_refund_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_REF_COM_R_ADD}รวม {SOA_REF_COM_R_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) ฝั่ง DUE FROM REINSURER (Dr.) - Commission กรณีที่เป็น {POLICY_YEAR_GIB} = 1 {SOA_COM_F_LIFE}คำนวณจาก Round((Reinsurance Premium: New Business Type Life + Revival Premiums: 1st yr. Type Life) x RI Commission Rate% , 2)Round ( (tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew.tot_re_ren_prem_life + tx_rig_act_bdr_new_renew + tot_re_rev_prem_life) * {RI_COM_RATE} , 2 )Sum tot_re_nb_prem_life, tot_re_ren_prem_life, tot_re_rev_prem_life ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_COM_F_LIFE}รวม {SOA_COM_F_LIFE} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) {SOA_COM_F_ADD}คำนวณจาก Round((Reinsurance Premium: New Business Type AD&D + Revival Premiums: 1st yr. Type AD&D) x RI Commission Rate% , 2)Round ( (tx_rig_act_bdr_new_renew.tot_re_nb_prem_add + tx_rig_act_bdr_new_renew.tot_re_ren_prem_add + tx_rig_act_bdr_new_renew + tot_re_rev_prem_add) * {RI_COM_RATE} , 2 )Sum tot_re_nb_prem_add, tot_re_ren_prem_add, tot_re_rev_prem_add ของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วจึงนำเข้าสูตร (#AFTER suthanee.sa 06/05/2026){SUM_SOA_COM_F_ADD}รวม {SOA_COM_F_ADD} ของทุกกรม เข้าด้วยกันถ้ามี {RI_COM_RATE} มากกว่า 1 เรท เมื่อได้ค่าตามสูตรของแต่ละเรทแล้ว จึงนำค่าทั้งหมดมารวมกัน (#AFTER suthanee.sa 06/05/2026) กรณีที่เป็น {POLICY_YEAR_GIB} > 1{SOA_COM_R_LIFE}คำนวณจาก RI Commission Life + Commission Refund: 1st yr. Type Life + Commission Refund: Renewal Type Life - Commission: 1 st yr. Type Lifetx_rig_act_bdr_new_renew.tot_com_life + tot_com_refund_life + (suthanee.sa 07/04/2026) {SOA_REF_COM_F_LIFE} + {SOA_REF_COM_R_LIFE} - {SOA_COM_F_LIFE} {SUM_SOA_COM_R_LIFE}รวม {SOA_COM_R_LIFE} ของทุกกรม เข้าด้วยกัน {SOA_COM_R_ADD}คำนวณจาก RI Commission AD&D + Commission Refund: 1st yr. Type AD&D + Commission Refund: Renewal Type AD&D - Commission: 1 st yr. Type AD&Dtx_rig_act_bdr_new_renew.tot_com_add + tot_com_refund_add + (suthanee.sa 07/04/2026){SOA_REF_COM_F_ADD} + {SOA_REF_COM_R_ADD} - {SOA_COM_F_ADD} {SUM_SOA_COM_R_ADD}รวม {SOA_COM_R_ADD} ของทุกกรม เข้าด้วยกัน
tx_rig_act_soa_dt
| Field | เงื่อนไข |
| rig_act_soa_dt_id | running no. |
| rig_act_soa_hd_id | id ของ tx_rig_act_soa_hd |
| prem_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_nb_prem_add + tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew.tot_re_nb_prem_life + tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_ren_prem_add + tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | บันทึก {SUM_SOA_COM_F_LIFE} |
| comm_new_add | บันทึก {SUM_SOA_COM_F_ADD} |
| comm_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | บันทึก {SUM_SOA_COM_R_LIFE} |
| comm_renew_add | บันทึก {SUM_SOA_COM_R_ADD} |
| comm_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_new_life + prem_refund_new_add + prem_refund_new_tpd + prem_refund_new_ttd + prem_refund_new_medical) |
| prem_refund_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_renew_life + prem_refund_renew_add + prem_refund_renew_tpd + prem_refund_renew_ttd + prem_refund_renew_medical) |
| prem_refund_new_claim_life | Fix 0 |
| prem_refund_new_claim_add | Fix 0 |
| prem_refund_new_claim_tpd | Fix 0 |
| prem_refund_new_claim_ttd | Fix 0 |
| prem_refund_new_claim_medical | Fix 0 |
| prem_refund_new_claim_total | Fix 0 |
| prem_refund_renew_claim_life | Fix 0 |
| prem_refund_renew_claim_add | Fix 0 |
| prem_refund_renew_claim_tpd | Fix 0 |
| prem_refund_renew_claim_ttd | Fix 0 |
| prem_refund_renew_claim_medical | Fix 0 |
| prem_refund_renew_claim_total | Fix 0 |
| comm_refund_new_life | บันทึกค่า {SUM_SOA_REF_COM_F_LIFE} |
| comm_refund_new_add | บันทึกค่า {SUM_SOA_REF_COM_F_ADD} |
| comm_refund_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_tpd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_com_refund_med ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_new_life + comm_refund_new_add + comm_refund_new_tpd + comm_refund_new_ttd + comm_refund_new_medical) |
| comm_refund_renew_life | บันทึกค่า {SUM_SOA_REF_COM_R_LIFE} |
| comm_refund_renew_add | บันทึกค่า {SUM_SOA_REF_COM_R_ADD} |
| comm_refund_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_com_refund_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_renew_life + comm_refund_renew_add + comm_refund_renew_tpd + comm_refund_renew_ttd + comm_refund_renew_medical) |
| comm_refund_new_claim_life | Fix 0 |
| comm_refund_new_claim_add | Fix 0 |
| comm_refund_new_claim_tpd | Fix 0 |
| comm_refund_new_claim_ttd | Fix 0 |
| comm_refund_new_claim_medical | Fix 0 |
| comm_refund_new_claim_total | Fix 0 |
| comm_refund_renew_claim_life | Fix 0 |
| comm_refund_renew_claim_add | Fix 0 |
| comm_refund_renew_claim_tpd | Fix 0 |
| comm_refund_renew_claim_ttd | Fix 0 |
| comm_refund_renew_claim_medical | Fix 0 |
| comm_refund_renew_claim_total | Fix 0 |
| claim_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim .tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_total | ผลรวมของ tx_rig_act_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim.tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_total | ผลรวมของ tx_rig_act_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | tx_rig_act_bdr_claim.tot_re_inv** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | ผลรวมของ tx_rig_act_soa_dt.(claim_exp_investigation_fee + claim_exp_legal_fee + claim_exp_med) |
| revival_prem_new_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} = 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_new_life + revival_prem_new_add + revival_prem_new_tpd + revival_prem_new_ttd + revival_prem_new_medical) |
| revival_prem_renew_life | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_add | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_tpd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_ttd | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_medical | เฉพาะรายการที่ {POLICY_YEAR_GIB} {POLICY_YEAR_GIB} > 1 tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_renew_life + revival_prem_renew_add + revival_prem_renew_tpd + revival_prem_renew_ttd + revival_prem_renew_medical) |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | tx_rig_act_bdr_new_renew.tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| profit_comm | tx_rig_act_hd.sum_pc_current_treaty |
| sub_total_due_to_reinsurer | tx_rig_act_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_act_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total + experience_refund_share (suthanee.sa 09/04/2026)) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
Mapping SOA Report
เงื่อนไขในการดึงข้อมูลหลัก
tx_rig_act_soa_hd
| Field | เงื่อนไข |
| rig_act_soa_hd_id | running no. |
| rig_act_hd_id | id ของ tx_rig_act_hd |
| period | แยกตามรายการ tx_rig_act_policy_hd.period ที่เกิดขึ้นภายใต้ tx_rig_act_hd ของ closing_period นั้น |
| total_profit_comm | Fix 0 |
| net_balance_due_to_reinsurer | Fix 0 |
tx_rig_act_soa_dt
| Field | เงื่อนไข |
| rig_act_soa_dt_id | running no. |
| rig_act_soa_hd_id | id ของ tx_rig_act_soa_hd |
| prem_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew.tot_re_nb_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_nb_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_ren_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_ren_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_new_life + prem_refund_new_add + prem_refund_new_tpd + prem_refund_new_ttd + prem_refund_new_medical) |
| prem_refund_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_refund_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| prem_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(prem_refund_renew_life + prem_refund_renew_add + prem_refund_renew_tpd + prem_refund_renew_ttd + prem_refund_renew_medical) |
| prem_refund_new_claim_life | Fix 0 |
| prem_refund_new_claim_add | Fix 0 |
| prem_refund_new_claim_tpd | Fix 0 |
| prem_refund_new_claim_ttd | Fix 0 |
| prem_refund_new_claim_medical | Fix 0 |
| prem_refund_new_claim_total | Fix 0 |
| prem_refund_renew_claim_life | Fix 0 |
| prem_refund_renew_claim_add | Fix 0 |
| prem_refund_renew_claim_tpd | Fix 0 |
| prem_refund_renew_claim_ttd | Fix 0 |
| prem_refund_renew_claim_medical | Fix 0 |
| prem_refund_renew_claim_total | Fix 0 |
| comm_refund_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_life ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_add ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_tpd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_ttd ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_com_refund_med ** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_new_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_new_life + comm_refund_new_add + comm_refund_new_tpd + comm_refund_new_ttd + comm_refund_new_medical) |
| comm_refund_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_com_refund_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| comm_refund_renew_total | ผลรวมของ tx_rig_act_soa_dt.(comm_refund_renew_life + comm_refund_renew_add + comm_refund_renew_tpd + comm_refund_renew_ttd + comm_refund_renew_medical) |
| comm_refund_new_claim_life | Fix 0 |
| comm_refund_new_claim_add | Fix 0 |
| comm_refund_new_claim_tpd | Fix 0 |
| comm_refund_new_claim_ttd | Fix 0 |
| comm_refund_new_claim_medical | Fix 0 |
| comm_refund_new_claim_total | Fix 0 |
| comm_refund_renew_claim_life | Fix 0 |
| comm_refund_renew_claim_add | Fix 0 |
| comm_refund_renew_claim_tpd | Fix 0 |
| comm_refund_renew_claim_ttd | Fix 0 |
| comm_refund_renew_claim_medical | Fix 0 |
| comm_refund_renew_claim_total | Fix 0 |
| claim_new_life | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_add | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim .tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_tpd | ถ้า tx_rig_act_bdr_claim.policy_year = 1 tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_ttd | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_medical | ถ้า tx_rig_act_bdr_claim.policy_year = 1tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_new_total | ผลรวมของ tx_rig_act_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_add | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_add + tx_rig_act_bdr_claim.tot_re_claim_paid_dismem** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_tpd | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_ttd | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_medical | ถ้า tx_rig_act_bdr_claim.policy_year > 1tx_rig_act_bdr_claim.tot_re_claim_paid_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_renew_total | ผลรวมของ tx_rig_act_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | tx_rig_act_bdr_claim.tot_re_inv** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | ผลรวมของ tx_rig_act_soa_dt.(claim_exp_investigation_fee + claim_exp_legal_fee + claim_exp_med) |
| revival_prem_new_life | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_add | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year = 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_new_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_new_life + revival_prem_new_add + revival_prem_new_tpd + revival_prem_new_ttd + revival_prem_new_medical) |
| revival_prem_renew_life | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_life** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_add | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_tpd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_tpd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_ttd | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_ttd** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_medical | ถ้า tx_rig_act_bdr_new_renew.policy_year > 1tx_rig_act_bdr_new_renew .tot_re_rev_prem_med** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| revival_prem_renew_total | ผลรวมของ tx_rig_act_soa_dt.(revival_prem_renew_life + revival_prem_renew_add + revival_prem_renew_tpd + revival_prem_renew_ttd + revival_prem_renew_medical) |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | tx_rig_act_bdr_new_renew.tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน ** |
| profit_comm | tx_rig_act_hd.sum_pc_current_treaty |
| sub_total_due_to_reinsurer | tx_rig_act_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_act_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total + experience_refund_share (suthanee.sa 09/04/2026)) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
จากนั้นให้อัปเดทข้อมูลที่ tx_rig_act_soa_hd
| Field | สูตรคำนวณ |
| tx_rig_act_soa_hd.net_balance_due_to_reinsurer | tx_rig_act_soa_dt.sub_total_due_to_reinsurer - tx_rig_act_soa_dt.sub_total_due_from_reinsurer |


===== PAGE 1322189655 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > calim_new_actual =====
tx_rig_act_bdr_claim.policy_year = 1


===== PAGE 1322189661 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > calim_renew_actual =====
tx_rig_act_bdr_claim.policy_year > 1


===== PAGE 1318879755 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > new_actual =====
tx_rig_act_bdr_new_renew.policy_year = 1


===== PAGE 1328382590 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > POLICY_YEAR_GIB_1 =====
{POLICY_YEAR_GIB}
{POLICY_YEAR_GIB} = 1


===== PAGE 1328382592 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > POLICY_YEAR_GIB_2 =====
{POLICY_YEAR_GIB}
{POLICY_YEAR_GIB} > 1


===== PAGE 1318879758 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > renew_actual =====
tx_rig_act_bdr_new_renew.policy_year > 1


===== PAGE 1318879747 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 6. ประมวลผล Actual SOA > sum_premium_actual =====
** SUM ทุกรายการที่อยู่ภายใต้ closing_quater เดียวกัน **


===== PAGE 1307935178 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 7. Mapping Output File (ACT) =====
| Reconcile |  | Report Type |
| RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} |  | LND_STG |
| RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-004 Alteration_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-005 Premium_Movement_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-006 MemberOverAge_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-007 InvestigationExpense_{YYYY}{QQ} |  | ACT_STG |
| Actual |  | Report Type | เงื่อนไขการสร้าง File |
| RIG-RP-017 BDR Act - Gibraltar (Reinsurer) |  | ACT_BDR | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-018 BDR Act Thaire (Reinsurer) |  | ACT_BDR | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-019 BDR Act - Daiichi (Reinsurer) |  | ACT_BDR | กรณี treaty_code = DAI_Grp_Daiichi_Coins |
| RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) |  | ACT_BDR | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) |  | ACT_BDR | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} |  | ACT_SOA | กรณี treaty_code = THREL_Grp_PAหรือ กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-015 Profit Commission_EB_{YYYY} |  | ACT_PROFIT | กรณี treaty_code = GIB_Grp_Direct_EB |
| RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} |  | ACT_PROFIT | กรณี treaty_code = THREL_Grp_PA |
| RIG-RP-020 Allocation_Profit Commission_{YYYY} |  | ACT_ALLOC | กรณี treaty_code = GIB_Grp_Direct_EBหรือ กรณี treaty_code = THREL_Grp_PA |


===== PAGE 1319601474 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 8. เก็บข้อมูล Export File =====
File ต้นทางจาก User https://drive.google.com/drive/folders/1U3VGr7qTYfTxm2O1C-6Tb_UdbZIZ55Rq
| Reconcile |  | Report Type |
| RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} |  | LND_STG |
| RIG-RP-002 Est_PremiumLayer_{YYYY}{MM} |  | EST_STG |
| RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-004 Alteration_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-005 Premium_Movement_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-006 MemberOverAge_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-007 InvestigationExpense_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-022 Est_MemberLayer_{YYYY}{MM} |  | EST_STG |
| RIG-RP-023 Act_MemberLayer_{YYYY}{QQ} |  | ACT_STG |
| Estimate |  | Report Type |
| RIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-011 SOA_Est_{YYYY}{MM} |  | EST_SOA |
| RIG-RP-012 I_Master_{YYYY}{MM} |  | EST_MPS |
| Actual |  | Report Type |
| RIG-RP-017 BDR Act - Gibraltar (Reinsurer) |  | ACT_BDR |
| RIG-RP-018 BDR Act Thaire (Reinsurer) |  | ACT_BDR |
| RIG-RP-019 BDR Act - Daiichi (Reinsurer) |  | ACT_BDR |
| RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) |  | ACT_BDR |
| RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) |  | ACT_BDR |
| RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} |  | ACT_SOA |
| Profit Comm |  | Report Type |
| RIG-RP-015 Profit Commission_EB_{YYYY} |  | ACT_PROFIT |
| RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} |  | ACT_PROFIT |
| RIG-RP-020 Allocation_Profit Commission_{YYYY} |  | ACT_PROFIT |
| No. | tx_rig_path_key | ข้อมูล |
| 1 | rig_path_key_id | running no. |
| 2 | report_type | ตรวจสอบ Report Type จากกาารสร้างไฟล์ตาม Template ข้างต้น |
| 3 | rig_hd_id | tx_rig_est_hd.rig_est_hd_idtx_rig_act_hd.rig_act_hd_id |
| 4 | path_key | เส้นทางไฟล์ |
| 5 | file_name | tx_rig_est_hd.treaty_codetx_rig_act_hd.treaty_code |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | SYSTEM |
| No. | tx_rig_path_file | ข้อมูล |
| 1 | path_key | เส้นทางไฟล์ |
| 2 | directory | โครงสร้างจัดระเบียบไฟล์และโฟลเดอร์แบบลำดับชั้น |
| 3 | description | รายละเอียด |
|  |  |  |
| 1 | created_date | now() |
| 2 | created_by | SYSTEM |
| 3 | updated_date | NULL |
| 4 | updated_by | NULL |


===== PAGE 1307935013 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > 9. แจ้งผลการการประมวลผล (ACT) =====
1. Update ผลการประมวลผล
tx_rig_act_hd
หลังการประมวลผลเสร็จสิ้น ให้อัปเดทข้อมูลดังนี้
| Field | เงื่อนไข | ตัวอย่าง |
| status | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" | SUCCESS |
| ri_premium | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. รวม Premium tx_rig_act_bdr_new_renew(tot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add + tot_re_rev_prem_tpd + tot_re_rev_prem_ttd + tot_re_rev_prem_med ) (suthanee.sa update 09/03/2026) 2. รวม Refund tx_rig_act_bdr_new_renew(tot_ori_refund_prem_life + tot_ori_refund_prem_add +(suthanee.sa 07/04/2026) tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add + (suthanee.sa 16/04/2026) tot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med) (suthanee.sa update 09/03/2026) จากนั้นเอาข้อ 2. - ข้อ 1 (มีโอกาสติดลบได้ เป็นปกติ) (suthanee.sa update 09/03/2026)กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| ri_commission | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. Commission tx_rig_act_bdr_new_renew (tot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med + tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add) (suthanee.sa update 09/03/2026)(suthanee.sa 16/04/2026) 2. Commission Refund abs(tx_rig_act_bdr_new_renew (tot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_med)) (suthanee.sa update 25/03/2026)(suthanee.sa update 09/04/2026) จากนั้นเอาข้อ 1. - ข้อ 2 (มีโอกาสติดลบได้ เป็นปกติ) (suthanee.sa update 25/03/2026)กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| claim_recovery | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ1. รวม Claim tx_rig_act_bdr_claim (tot_re_inv + tot_re_claim_paid_life + tot_re_claim_paid_add + tot_re_claim_paid_dismem + tot_re_claim_paid_di + tot_re_claim_paid_tpd + tot_re_claim_paid_ttd + tot_re_claim_paid_med) + tx_rig_act_bdr_new_renew(tot_re_ex_refund_paid_life + tot_re_ex_refund_paid_add) (suthanee.sa update 09/03/2026) (suthanee.sa 10/04/2026) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| due_to | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ sum(ri_premium, ri_commission, claim_recovery) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| sum_records | นับจำนวนรายการที่เกิดขึ้นใน tx_rig_act_bdr_new_renew | 100 |
| updated_date | now() |  |
| updated_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
2. Template Email
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_act_hd_id เท่ากับ tx_rig_act_hd.rig_act_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_act_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_act_hd.closing_quarter | YYYY/QQ | 2022/Q1 |
| $status | ผลการประมวลผล | tx_rig_act_hd.status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_act_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_act_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_act_hd.rig_act_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Actual" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Actual |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>)สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Actual ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Actual มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |


===== PAGE 1310753224 | Functional Specification > 02. Process Specification. > RIG-PS-07 ประมวลผล Actual > กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Actual =====
2. เงื่อนไขการบันทึกลง tx_stg_error_data
| Field | ข้อมูลที่บันทึก | ตัวอย่าง |
| process_code | ACT_MAIN_PROCESS | ACT_MAIN_PROCESS |
| period | {CLOSING_PERIOD} | 202512 |
| treaty_code | {TREATY_CODE} | GIB_Grp_Direct_EB |
| snap_table | NULL |  |
| stg_table | NULL |  |
| policy_no | {POLICY_NO} | GH1663 |
| promise_date | {COV_FROM} | 2023-08-11 |
| policy_year | {POLICY_YEAR} | 18 |
| cer_no | {CERT_NO} | 1 |
| inform_no |  |  |
| err_desc | เหตุผลกรณีไม่ผ่านการ validateนำค่าไปตรวจสอบใน cf_lookup_catalog.parent_id = 1002900 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วบันทึก cf_lookup_catalog.description | ไม่พบข้อมูลที่ Snapshot |
| err_field | NULL |  |


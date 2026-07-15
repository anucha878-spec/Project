===== PAGE 1308459473 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ประมวลผล Estimate (Auto) |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | <Business Process Name / Business Process ID> |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-04 Estimate - Staging Tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบประมวลผลของข้อมูล (yyyyMM)กรณีที่ process RIG-PS-04 Estimate - Staging Tables ทำงานเสร็จก่อน 00.00 น. ของวันที่ 1 ให้ใช้ period ตามเดือนและปีของวันที่ประมวลผล Estimateกรณีที่ process RIG-PS-04 Estimate - Staging Tables ทำงานเสร็จหลัง 00.00 น. ของวันที่ 1 ให้ใช้ period เดือน - 1 และปีของวันที่ประมวลผล Estimateเช่น กรณี process RIG-PS-04 Estimate - Staging Tables ทำงานเสร็จในวันที่ 31/01/2025 เวลา 23.59 น. Period = 202501กรณี process RIG-PS-04 Estimate - Staging Tables ทำงานเสร็จในวันที่ 1/02/2025 เวลา 00.00 น. Period = 202501 โดยเอาเดือน - ด้วย 1 |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | Report NameReport TypeRIG-RP-001 Policy_{FROM}_{TO}_{TREATY}LND_STGRIG-RP-002 Est_PremiumLayer_{YYYY}{MM}EST_STGRIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW)EST_BDRRIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW)EST_BDRRIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW)EST_BDRRIG-RP-011 SOA_Est_{YYYY}{MM}EST_SOARIG-RP-012 I_Master_{YYYY}{MM}EST_MASTERI |
| 6 | อธิบายรายละเอียด(Description) | ตรวจสอบ RIG-PS-04 Estimate - Staging Tables ต้องทำงานเสร็จสมบูรณ์แล้ว ระบบจะทริกเกอร์ RIG-PS-06 ประมวลผล Estimate ให้ดำเนินการโดยอัตโนมัติเริ่มทำงานตามขั้นตอนดังนี้ Process Estimate |


===== PAGE 1312490014 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 1. ตรวจสอบ Treaty ที่ต้องประมวลผล =====
1. ตรวจสอบ Treaty ใน Table Config
- ตรวจสอบข้อมูลใน cf_rig_treaty โดยมีเงื่อนไขดังนี้cf_rig_treaty.approve = TRUEcf_rig_treaty.status = APeriod ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general .expire_dateเก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- cf_rig_treaty.approve = TRUE
- cf_rig_treaty.status = A
- Period ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general .expire_date
- เก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- สร้างรายการที่ tx_rig_est_hd ดังนี้tx_rig_est_hd Fieldข้อมูลเงื่อนไขตัวอย่างrig_est_hd_id running no.1closing_period รอบ Period ที่ประมวลผล202410cf_reinsurer_idcf_rig_treaty.cf_reinsurer_idของ Treaty ที่กำลังประมวลผล cf_treaty_idcf_rig_treaty.cf_rig_treaty_idของ Treaty ที่กำลังประมวลผล treaty_codecf_rig_treaty.treaty_codeจากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล status เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" edw_status NULL edw_status_desc NULL ri_std_hd_id NULL mps_status NULL mps_status_desc NULL ri_std_hd_id_oic NULL ri_premium เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก ri_commission เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก claim_recovery เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก due_to เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก remark กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง usage_status เมื่อสร้างรายการครั้งแรกให้บันทึก A ri_method treaty_code จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 sum_records เมื่อสร้างรายการครั้งแรกให้บันทึก 0 created_date now() created_by เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM updated_date NULL updated_by NULL
ค้นหา Treaty ทั้งหมดที่ถูก Config ไว้ แต่เลือกเฉพาะกรมธรรม์ที่เคยอนุมัติ Approve แล้วอย่างน้อยหนึ่งครั้ง และยังมีสถานะใช้งาน และยังมีวันที่เปิดใช้งานอยู่ในปัจจุบัน จากนั้นเก็บ ID ของ Treaty นั้นไว้เพื่อไปค้นหารายการรายละเอียด Config ของกรมธรรม์ต่อ
2. เตรียมข้อมูลประมวลผล
- นำรายการ Treaty ที่ผ่านเงื่อนไขข้อ 1 มาเตรียมข้อมูลสำหรับประมวลผลดังนี้Parameterเงื่อนไขค่าที่เก็บลง Parameter{TREATY_CODE}ตาม {TREATY_ID} จากข้อ 1cf_rig_treaty.treaty_code{RE_CODE}ตรวจสอบที่ cf_lookup_catalog ที่ cf_lookup_catalog.parent_id = 1000100นำ cf_rig_treaty.treaty_code เทียบกับ cf_lookup_catalog.descriptionเก็บค่า cf_lookup_catalog.lookup_key ที่ได้{GENERAL_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_id เก็บค่า cf_rig_treaty_dt.status_general ที่ได้{CONDITION_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_condition ที่ได้{POLICY_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_policy ที่ได้{RIPREM_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_ri_premium ที่ได้
- ตรวจสอบ ID ของแต่ละรายการที่ถูก Approve ล่าสุด ของแต่ละหัวข้อParameterเงื่อนไขค่าที่เก็บลง Parameter{GENERAL_ID}ถ้า {GENERAL_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_general.cf_rig_treaty_id ที่รายการ cf_rig_treaty_general.status = "A"เก็บค่า cf_rig_treaty_general.cf_rig_treaty_general_id ที่ได้{CONDITION_ID}ถ้า {CONDITION_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_cond_hd.status = "A"และ วันที่เริ่มต้นสัญญาของกรมธรรม์นั้น อยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toเก็บค่า cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ที่ได้{POLICY_ID}ถ้า {POLICY_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_policy_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_policy_hd.status = "A"เก็บค่า cf_rig_treaty_policy_hd.cf_rig_treaty_policy_hd_id ที่ได้{RIPREM_ID}ถ้า {RIPREM_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_prem_rate_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_prem_rate_hd.status = "A"และ วันที่เริ่มต้นสัญญาของกรมธรรม์นั้น อยู่ในช่วงของ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_toเก็บค่า cf_rig_treaty_prem_rate_hd.cf_rig_treaty_prem_rate_hd_id ที่ได้
ค้นหา Reinsurer No ของ Treaty นั้นเพื่อนำไปค้นหากรมธรรม์ที่อยู่ภายใต้ Treaty นี้ทั้งหมด รวมถึงสถานะการใช้งาน Config ต่าง ๆ สำหรับเอาไว้เช็กต่อในการประมวลผล ถ้ามีการ Config ส่วนใดเป็น FALSE แต่มีการคำนวณที่ต้องเลือกใช้ ก็จะสามารถข้ามกระบวนการนั้นไปได้เลย
เก็บ ID ของรายการที่มีสถานะเป็น A เท่านั้น เนื่องจากภายใต้ Table Config จะมีรายการที่ถูก Config ไว้ทั้งหมด 3 แบบด้วยกัน คือ
- A: Active สถานะนี้เกิดจากการอนุมัติใช้งาน Treaty แล้วอย่างน้อย 1 ครั้ง และจะใช้ข้อมูลที่มีสถานะ A นี้สำหรับการประมวลผลทุกครั้ง
- I: Inactive สถานะนี้เกิดจากหลังการอนุมัติหรือมีการแก้ไขข้อมูลแล้วอนุมัติจนทำให้มีรายการสถานะ A ขึ้นมาใหม่แล้ว รายการสถานะ A เดิมจะต้องเปลี่ยนเป็น I เพื่อให้ระบบอ่านได้ถูกว่าต้องใช้ข้อมูลรายการไหนสำหรับการประมวลผล แต่ยังสามารถตรวจสอบประวัติรายการ A เดิมจาก I ได้
- D: สถานะนี้เกิดในครั้งแรกที่สร้างข้อมูล และเกิดขึ้นหลังจากการอนุมัติและกำลังอยู่ระหว่างการแก้ไขข้อมูลใหม่ เพราะระบบจะสร้างรายการขึ้นมาใหม่เสมอ เพื่อให้สถานะ A เดิมยังอยู่และนำไปประมวลผลได้ และ D จะใช้แก้ไขไปจนกว่าจะมีการอนุมัติ เมื่ออนุมัติรายการ D จะกลายเป็นรายการ A ใหม่ และรายการ A เก่า จะมีสถานะเป็น I ตามลำดับ


===== PAGE 1312490007 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 2. การคัดเลือกกรมธรรม์ =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปทำขั้นตอน 5. การคำนวณ RI Claimถ้าไม่เท่ากับ "DAI_Grp_Daiichi_Coins" ให้ตรวจสอบข้อต่อไป
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปทำขั้นตอน 5. การคำนวณ RI Claim
- ถ้าไม่เท่ากับ "DAI_Grp_Daiichi_Coins" ให้ตรวจสอบข้อต่อไป
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
ตรวจสอบวิธีการ Config Treaty ในหัวข้อการ Config Policy เนื่องจากการเปิดหรือปิดใช้งาน Config Policy เป็นการกำหนดทิศทางเงื่อนไขการคำนวณ RI Premium, RI Comission ของ Treaty นั้น ๆ
2. คัดเลือกกรมธรรม์ (TRUE)
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- นำ {POLICY_NO} ที่ได้ ไปตรวจสอบที่ tx_stg_est_policy_1yตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- ตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- กรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้
- กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- นำ {POLICY_NO} ที่ได้ไปตรวจสอบที่ tx_rig_policy_base โดยค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
- ค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- tx_rig_policy_base.policy_no = {POLICY_NO}
- tx_rig_policy_base.policy_year= {POLICY_YEAR}
- tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"
- กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
เตรียมข้อมูลกรมธรรม์สำหรับประมวลผลกรณีเปิดใช้งาน Config Treaty ในหัวข้อ Config Policy ระบบจะต้องนำ Policy ที่ถูก Config ไว้มาตั้งเป็นข้อมูลหลัก แล้วจึงไปตรวจสอบกับข้อมูลอื่น ๆ ต่อว่ากรมธรรม์นั้นจะต้องประมวลผลต่อหรือไม่
3. คัดเลือกกรมธรรม์ (FALSE)
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_policy_1y โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_est_policy_1y.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_est_policy_1y.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- นำ {POLICY_NO} ที่ได้ ไปตรวจสอบที่ tx_stg_est_policy_1yตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- ตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- กรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้
- กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- นำ {POLICY_NO} ที่ได้ไปตรวจสอบที่ tx_rig_policy_base โดยค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
- ค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- tx_rig_policy_base.policy_no = {POLICY_NO}
- tx_rig_policy_base.policy_year= {POLICY_YEAR}
- tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"
- กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
เตรียมข้อมูลกรมธรรม์สำหรับประมวลผลกรณีปิดใช้งาน Config Treaty ในหัวข้อ Config Policy ระบบจะต้องค้นหากรมธรรม์ทั้งหมดใน Table นำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี ที่มี Reinsurer No ตรงกับ Treaty ที่กำลังประมวลผล


===== PAGE 1312719152 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 3. การคำนวณ RI Premium =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_est_inforce_member โดยtx_stg_est_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_est_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_est_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT}กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- tx_stg_est_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_est_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_est_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT}กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
2. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_est_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
3. คำนวณ RI Premium
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_to
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2
- tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round((({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L2_RI_PREM_LOAD} = Round((({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L3_RI_PREM_LOAD} = Round((({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L1_RI_PREM_LOAD} = Round((({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L2_RI_PREM_LOAD} = Round((({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L3_RI_PREM_LOAD} = Round((({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2){L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2){L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2){L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2){L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- {L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2)
- {L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2)
- {L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ Total RI Premium (suthanee.sa 26/01/2026){L1_TOT_PREM} = Round({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD} - {SUM_DISC} , 2){L2_TOT_PREM} = Round({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD} - {SUM_DISC} , 2){L3_TOT_PREM} = Round({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L1_TOT_PREM} = Round({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L2_TOT_PREM} = Round({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L3_TOT_PREM} = Round({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD} - {SUM_DISC} , 2)
4. คำนวณ Total Premium
- คำนวณ RI Premium Total โดยรวมทุกสมาชิกภายในกรมเข้าด้วยกัน{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
3. คัดเลือกกรมธรรม์ (FALSE)
1. ตรวจสอบประเภทการชำระเบี้ยของกรมธรรม์
- นำ {POLICY_NO} และ {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบประเภทการชำระเบี้ย ใน tx_stg_est_all_policy โดยtx_stg_est_all_policy.policy_no เท่ากับ {POLICY_NO}tx_stg_est_all_policy.policy_year เท่ากับ {POLICY_YEAR} (สำหรับป้องกันการเปลี่ยนแปลงโหมดเมื่อเปลี่ยนปีกรมธรรม์)นำค่า tx_stg_est_all_policy.pay_type มาแปลงค่าดังนี้ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2เก็บค่าที่ได้ไว้ใน {PAY_TYPE}
- tx_stg_est_all_policy.policy_no เท่ากับ {POLICY_NO}
- tx_stg_est_all_policy.policy_year เท่ากับ {POLICY_YEAR} (สำหรับป้องกันการเปลี่ยนแปลงโหมดเมื่อเปลี่ยนปีกรมธรรม์)
- นำค่า tx_stg_est_all_policy.pay_type มาแปลงค่าดังนี้ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2
- ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1
- ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12
- ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4
- ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2
- เก็บค่าที่ได้ไว้ใน {PAY_TYPE}
2. คำนวณ Premium
1. เตรียมข้อมูลสำหรับการประมวลผล
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- {CONDITION_ID} ที่ได้จาก ตรวจสอบหารายการที่ตรงกับ cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id เตรียมข้อมูล Layer ดังนี้Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- เตรียมข้อมูล Layer ดังนี้Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- {POLICY_NO} และ {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบ ใน tx_stg_est_prem_layer #CR_RATEเตรียมข้อมูลของแต่ละกรมธรรม์ดังนี้กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rateกรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- เตรียมข้อมูลของแต่ละกรมธรรม์ดังนี้กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rateกรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rate
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}
- ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
2. คำนวณ Premium Layer
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)คำนวณดังนี้ (ในกรณีที่ไม่มีทุนความคุ้มครองใน Layer ใด ไม่ต้องคำนวณใน Layer นั้น) (suthanee.sa 28/02/2026)Parameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}{PAY_TYPE} * ({L3_PREM_LIFE_RATE} / 1000) * ({L3_INS_LIFE} - ({L3_MEM_LIFE} * {L2_MAX})){L2_PREM_LIFE}{PAY_TYPE} * ({L2_PREM_LIFE_RATE} / 1000) * ({L2_INS_LIFE} - ({L2_MEM_LIFE} * {L1_MAX}) + ({L3_MEM_LIFE} * {L1_L2_MID})){L1_PREM_LIFE}{SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE}{L3_PREM_ACC}{PAY_TYPE} * ({L3_PREM_ACC_RATE} / 1000) * ({L3_INS_ACC} - ({L3_MEM_ACC} * {L2_MAX})){L2_PREM_ACC}{PAY_TYPE} * ({L2_PREM_ACC_RATE} / 1000) * ({L2_INS_ACC} - ({L2_MEM_ACC} * {L1_MAX}) + ({L3_MEM_ACC} * {L1_L2_MID})){L1_PREM_ACC}{SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC}
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)คำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_TYPE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})) {L2_PREM_LIFE_BY_MEM}สมาชิกที่มีทุน Life อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_TYPE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}สมาชิกที่มีทุน ACC อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round({SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE},2){L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round({SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC},2)
- คำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_TYPE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})) {L2_PREM_LIFE_BY_MEM}สมาชิกที่มีทุน Life อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_TYPE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}สมาชิกที่มีทุน ACC อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})
- รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round({SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE},2){L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round({SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC},2)
3. คำนวณ RI Premium
- คำนวณดังนี้Parameterค่าที่เก็บลง Parameter{L1_RI_PREM_LIFE}Round(({L1_PER} × {L1_PREM_LIFE}) / 100, 2){L2_RI_PREM_LIFE}Round(({L2_PER} × {L2_PREM_LIFE}) / 100, 2){L3_RI_PREM_LIFE}Round(({L3_PER} × {L3_PREM_LIFE}) / 100, 2){L1_RI_PREM_ACC}Round(({L1_PER} × {L1_PREM_ACC}) / 100, 2){L2_RI_PREM_ACC}Round(({L2_PER} × {L2_PREM_ACC}) / 100, 2){L3_RI_PREM_ACC}Round(({L3_PER} × {L3_PREM_ACC}) / 100, 2){SUM_RI_PREM_LIFE}ผลรวมของ {L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}{SUM_RI_PREM_ACC}ผลรวมของ {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}


===== PAGE 1312490011 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 4. การคำนวณ RI Commission =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI Comm ของแต่ละคน (suthanee.sa 26/02/2026){L1_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L1_TOT_PREM} , 2 ){L2_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L2_TOT_PREM} , 2 ){L3_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L3_TOT_PREM} , 2 )
- {L1_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L1_TOT_PREM} , 2 )
- {L2_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L2_TOT_PREM} , 2 )
- {L3_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L3_TOT_PREM} , 2 )
- คำนวณ RI Comm ของทุกคน (suthanee.sa 26/02/2026){L1_RI_COM_ACC} + {L2_RI_COM_ACC} + {L3_RI_COM_ACC}เก็บค่าลงใน {RI_COM_ACC}
- {L1_RI_COM_ACC} + {L2_RI_COM_ACC} + {L3_RI_COM_ACC}
- เก็บค่าลงใน {RI_COM_ACC}
3. คัดเลือกกรมธรรม์ (FALSE)
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ={CONDITION_ID}เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ={CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterค่าที่เก็บลง Parameter{RI_COM_LIFE}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_LIFE}, 2){RI_COM_ACC}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_ACC}, 2)
- Parameterค่าที่เก็บลง Parameter{RI_COM_LIFE}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_LIFE}, 2){RI_COM_ACC}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_ACC}, 2)


===== PAGE 1312490016 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 5. การคำนวณ RI Claim =====
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
1. ตรวจสอบข้อมูลกรมธรรม์รายการเคลม
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim และ tx_stg_est_tpd_claim และ tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย commaตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย commaตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800
- จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย comma
- ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
2. ตรวจสอบ Layer
- กรณีชุดข้อมูล {POLIC_CLAIM_ACC_DEATH}
- ตรวจสอบ {SUM_INS_ACC} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_DISMEM}ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_TPD}ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
2. คำนวณ RI Claim
- คำนวณ SRกรณีที่สมาชิกรายนั้นอยู่ Layer 1 ให้กำหนดค่า {SR_ACC} = 0ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)กรณีที่สมาชิกรายนั้นอยู่ Layer 2 ให้คำนวณดังนี้{SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ Layer 3 ให้คำนวณดังนี้{SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})(suthanee.sa 05/03/2026 (เปลี่ยน parameter {SUM_INS_ACC}))
- กรณีที่สมาชิกรายนั้นอยู่ Layer 1 ให้กำหนดค่า {SR_ACC} = 0ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)
- ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)
- กรณีที่สมาชิกรายนั้นอยู่ Layer 2 ให้คำนวณดังนี้{SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})
- {SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ Layer 3 ให้คำนวณดังนี้{SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ RI ClaimLayerParameter Layer 1{L1_RI_CLAIM_ACC_DEATH}({CLAIM_ACC} / {SUM_INS_ACC}) * {SR_ACC}Layer 2{L2_RI_CLAIM_ACC_DEATH}Layer 3{L3_RI_CLAIM_ACC_DEATH}Layer 1{L1_RI_CLAIM_DISMEM}({CLAIM_ACC} / {SUM_INS_DISMEM}) * {SR_ACC}Layer 2{L2_RI_CLAIM_DISMEM}Layer 3{L3_RI_CLAIM_DISMEM}Layer 1{L1_RI_CLAIM_TPD}({CLAIM_TPD} / {SUM_INS_TPD}) * {SR_ACC}Layer 2{L2_RI_CLAIM_TPD}Layer 3{L3_RI_CLAIM_TPD}
3. คำนวณ Claim Recovery
- คำนวณ Claim Recovery Parameter Layer 1{L1_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_ACC_DEATH}ผลรวมของ {L2_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_ACC_DEATH}ผลรวมของ {L3_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3Layer 1{L1_RE_CLAIM_DISMEM}ผลรวมของ {L1_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_DISMEM}ผลรวมของ {L2_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_DISMEM}ผลรวมของ {L3_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3Layer 1{L1_RE_CLAIM_TPD}ผลรวมของ {L1_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_TPD}ผลรวมของ {L2_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_TPD}ผลรวมของ {L3_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3
3. คัดเลือกกรมธรรม์ (FALSE)
1. ตรวจสอบข้อมูลกรมธรรม์รายการเคลม
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim และ tx_stg_est_tpd_claim และ tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treatyดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treaty
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800
- ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treaty
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
2. ตรวจสอบ Layer
- กรณีชุดข้อมูล {POLIC_CLAIM_ACC_DEATH}
- ตรวจสอบ {SUM_INS_ACC} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_LIFE}
- ตรวจสอบ {SUM_INS_LIFE} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_DISMEM}ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_TPD}ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_HEALTH}ตรวจสอบ {SUM_INS_HEALTH} เพื่อแบ่ง Layerกรณีมี treaty_code = DAI_Grp_Daiichi_Coins ให้ข้ามการตรวจสอบนี้ไป เพราะมีอยู่ภายใต้ Layer 1 เท่านั้น (suthanee.sa 20/02/2026)Layerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_HEALTH} เพื่อแบ่ง Layerกรณีมี treaty_code = DAI_Grp_Daiichi_Coins ให้ข้ามการตรวจสอบนี้ไป เพราะมีอยู่ภายใต้ Layer 1 เท่านั้น (suthanee.sa 20/02/2026)Layerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
2. คำนวณ RI Claim
- คำนวณ RI Claim ชุดข้อมูลParameter รายการเคลม Layer 1{POLIC_CLAIM_ACC_DEATH}{L1_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {CLAIM_ACC},2) {POLIC_CLAIM_LIFE}{L1_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {CLAIM_LIFE},2) {POLIC_CLAIM_DISMEM}{L1_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {CLAIM_ACC},2) {POLIC_CLAIM_TPD}{L1_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {CLAIM_TPD},2) {POLIC_CLAIM_HEALTH}{L1_RI_CLAIM_HEALTH}Round(({L1_PER} / 100) * {TOT_CLAIM},2) ใช้ค่า {CLAIM_ACC} จาก {POLIC_CLAIM_ACC_DEATH}ใช้ค่า {CLAIM_ACC} จาก {POLIC_CLAIM_DISMEM}{L1_RI_CLAIM_ADD}Round(({L1_PER} / 100) * ({CLAIM_ACC} + {CLAIM_ACC}),2) รายการเคลม Layer 2{POLIC_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}),2) {POLIC_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_LIFE} - {L1_INSU_MAX}),2) {POLIC_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}),2) {POLIC_CLAIM_TPD}{L2_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_TPD} - {L1_INSU_MAX}),2) รายการเคลม Layer 3{POLIC_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}),2) {POLIC_CLAIM_LIFE}{L3_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_LIFE} - {L2_INSU_MAX}),2) {POLIC_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}),2) {POLIC_CLAIM_TPD}{L3_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_TPD} - {L2_INSU_MAX}),2)
3. คำนวณ Claim Recovery
- คำนวณ Claim RecoveryParameter {L1_RE_CLAIM_LIFE}ผลรวมของ {L1_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_LIFE}ผลรวมของ {L2_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_LIFE}ผลรวมของ {L3_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_ACC_DEATH}ผลรวมของ {L2_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_ACC_DEATH}ผลรวมของ {L3_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_DISMEM}ผลรวมของ {L1_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_DISMEM}ผลรวมของ {L2_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_DISMEM}ผลรวมของ {L3_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_TPD}ผลรวมของ {L1_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_TPD}ผลรวมของ {L2_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_TPD}ผลรวมของ {L3_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RI_CLAIM_HEALTH}ผลรวมของ {L1_RI_CLAIM_HEALTH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RI_CLAIM_ADD}ผลรวมของ {L1_RI_CLAIM_ADD} ทุกคนในกรมเดียวกันในปีเดียวกัน{RE_CLAIM_LIFE}ผลรวมของ {L1_RE_CLAIM_LIFE} + {L2_RE_CLAIM_LIFE} + {L3_RE_CLAIM_LIFE}{SUM_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RE_CLAIM_ACC_DEATH} + {L2_RE_CLAIM_ACC_DEATH} + {L3_RE_CLAIM_ACC_DEATH}{SUM_RE_CLAIM_DISMEM}ผลรวมของ {L1_RE_CLAIM_DISMEM} + {L2_RE_CLAIM_DISMEM} + {L3_RE_CLAIM_DISMEM}{SUM_RE_CLAIM_TPD}ผลรวมของ {L1_RE_CLAIM_TPD} + {L2_RE_CLAIM_TPD} + {L3_RE_CLAIM_TPD}{RE_CLAIM_ACC}ผลรวมของ {SUM_RE_CLAIM_ACC_DEATH} + {SUM_RE_CLAIM_DISMEM}


===== PAGE 1312490056 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 6. Mapping Database Estimate BDR =====
/*<![CDATA[*/
div.rbtoc1782955703551 {padding: 0px;}
div.rbtoc1782955703551 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955703551 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Table tx_rig_est_hd
- Table tx_rig_est_policy_hd
- Table tx_rig_est_policy_dt
- Table tx_rig_est_mem_dt
- Table tx_rig_est_bdr
- Table tx_rig_policy_base

##### Table tx_rig_est_hd
tx_rig_est_hd
| Field | เงื่อนไข | ตัวอย่าง |
| rig_est_hd_id | running no. | 1 |
| closing_period | {CLOSING_PERIOD} | 202410 |
| cf_reinsurer_id | cf_rig_treaty.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |  |
| cf_treaty_id | cf_rig_treaty.cf_rig_treaty_id ของ Treaty ที่กำลังประมวลผล |  |
| treaty_code | {TREATY_CODE} จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล |  |
| status | เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" |  |
| edw_status | NULL |  |
| edw_status_desc | NULL |  |
| ri_std_hd_id | NULL |  |
| mps_status | NULL |  |
| mps_status_desc | NULL |  |
| ri_std_hd_id_oic | NULL |  |
| ri_premium | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| ri_commission | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| claim_recovery | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| due_to | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| usage_status | เมื่อสร้างรายการครั้งแรกให้บันทึก A |  |
| ri_method | {TREATY_CODE} จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 |  |
| sum_records | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| created_date | now() |  |
| created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| updated_date | NULL |  |
| updated_by | NULL |  |

##### Table tx_rig_est_policy_hd
tx_rig_est_policy_hd
Group ข้อมูลตาม policy_no , effective_date , data_quarter
| Field | เงื่อนไข |
| rig_est_policy_hd_id | running no. |
| rig_est_hd_id | tx_rig_est_hd.rig_est_hd_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| reinsurer_no | {RE_CODE_FULL} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| ri_com_date | {COM_DATE} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| effective_date | {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์{EFF_DATE} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claimในกรณีที่เป็น {POLICY_NO} เดียวกัน และมีค่า {COV_FROM} หรือ {EFF_DATE} เท่ากัน ไม่ต้องสร้างรายการเพิ่ม |
| mode_pay | {PAY_TYPE} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| policy_year | {POLICY_YEAR} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| period | {PERIOD} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| data_quarter | {DATA_QUT} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| policy_status | {POLICY_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| report_policy_status | {REPORT_POL_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| ri_policy_status | {RI_POL_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| expire_date | {EXPIRE_DATE} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 24/03/2026) |
| f_receipt_date | {F_RECIEPT} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 24/03/2026) |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |

##### Table tx_rig_est_policy_dt
tx_rig_est_policy_dt
| Field | เงื่อนไข |
| rig_est_policy_dt_id | running no. |
| rig_est_policy_hd_id | tx_rig_est_policy_hd.rig_est_policy_hd_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| level | สร้างรายการ 3 รายการ เสมอL1L2L3 |
| ri_prem_life | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_LIFE} ถ้า = L2 ให้ใช้ {L2_RI_PREM_LIFE} ถ้า = L3 ให้ใช้ {L3_RI_PREM_LIFE} |
| ri_prem_acc | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_ACC} ถ้า = L2 ให้ใช้ {L2_RI_PREM_ACC} ถ้า = L3 ให้ใช้ {L3_RI_PREM_ACC} |
| ri_prem_load | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_LOAD}ถ้า = L2 ให้ใช้ {L2_RI_PREM_LOAD}ถ้า = L3 ให้ใช้ {L3_RI_PREM_LOAD} |
| ri_prem_tpd | 0 |
| ri_prem_ttd | 0 |
| ri_prem_medical | 0 |
| ri_prem_disc_ma | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_DISC_MA}ถ้า = L2 ให้ใช้ {L2_RI_PREM_DISC_MA}ถ้า = L3 ให้ใช้ {L3_RI_PREM_DISC_MA} |
| ri_prem_disc_gv | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_DISC_GV}ถ้า = L2 ให้ใช้ {L2_RI_PREM_DISC_GV}ถ้า = L3 ให้ใช้ {L3_RI_PREM_DISC_GV} |
| sum_disc | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_SUM_DISC}ถ้า = L2 ให้ใช้ {L2_SUM_DISC}ถ้า = L3 ให้ใช้ {L3_SUM_DISC} |
| sum_ri_claim_life | ผลรวมของ tx_rig_est_mem_claim.ri_claim_life ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_add | ผลรวมของ tx_rig_est_mem_claim.ri_claim_add ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_dismem | ผลรวมของ tx_rig_est_mem_claim.ri_claim_dismem ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_acc_death | ผลรวมของ tx_rig_est_mem_claim.ri_claim_acc_death ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_tpd | ผลรวมของ tx_rig_est_mem_claim.ri_claim_tpd ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_med | ผลรวมของ tx_rig_est_mem_claim.ri_claim_med ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_life | ผลรวมของ tx_rig_est_mem_claim.re_claim_life ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_add | ผลรวมของ tx_rig_est_mem_claim.re_claim_add ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_dismem | ผลรวมของ tx_rig_est_mem_claim.re_claim_dismem ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_acc_death | ผลรวมของ tx_rig_est_mem_claim.re_claim_acc_death ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_tpd | ผลรวมของ tx_rig_est_mem_claim.re_claim_tpd ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_med | ผลรวมของ tx_rig_est_mem_claim.re_claim_med ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |
|  |  |

##### Table tx_rig_est_mem_dt
tx_rig_est_mem_dt
| Field | เงื่อนไข |
| rig_est_mem_claim_id | running no. |
| rig_est_policy_dt_id | tx_rig_est_policy_dt.rig_est_policy_dt_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claim |
| event_date | {ACC_DATE} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claim |
| ri_claim_life | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_LIFE}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_LIFE}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_LIFE} |
| ri_claim_add | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ADD} |
| ri_claim_dismem | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_DISMEM}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_DISMEM}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_DISMEM} |
| ri_claim_acc_death | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ACC_DEATH}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_ACC_DEATH}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_ACC_DEATH} |
| ri_claim_tpd | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_TPD} ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_TPD} ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_TPD} |
| ri_claim_med | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_HEALTH} |
| re_claim_life | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_LIFE}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_LIFE}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_LIFE} |
| re_claim_add | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ADD} |
| re_claim_dismem | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_DISMEM}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_DISMEM} ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_DISMEM} |
| re_claim_acc_death | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_ACC_DEATH}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_ACC_DEATH}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_ACC_DEATH} |
| re_claim_tpd | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_TPD}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_TPD}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_TPD} |
| re_claim_med | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_HEALTH} |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |
|  |  |

##### Table tx_rig_est_bdr
tx_rig_est_bdr
ข้อมูลที่ tx_rig_est_hd.rig_est_hd_id เดียวกันทั้งหมด
Group ข้อมูลตาม tx_rig_est_policy_hd.policy_no , effective_date , data_quarter
|  |  |
| rig_est_bdr_id | running no. |
| rig_est_hd_id | tx_rig_est_hd .rig_est_hd_id |
| policy_no | tx_rig_est_policy_hd.policy_no |
| reinsurer_no | tx_rig_est_policy_hd.reinsurer_no |
| ri_com_date | tx_rig_est_policy_hd.ri_com_date |
| effective_date | tx_rig_est_policy_hd.effective_date |
| mode_pay | tx_rig_est_policy_hd.mode_pay |
| period | tx_rig_est_policy_hd.period |
| data_quarter | tx_rig_est_policy_hd.data_quarter |
| closing_period | tx_rig_est_hd.closing_period |
| ri_prem_life | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ Fix 0กรณีที่ {POLICY_STATUS} = FALSEใช้ ผลรวมของ tx_rig_est_policy_dt.ri_prem_life ทั้ง 3 Layer |
| ri_prem_acc | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ Round((ผลรวมของ tx_rig_est_policy_dt.ri_prem_acc ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.ri_prem_load ทั้ง 3 Layer) - (ผลรวมของ tx_rig_est_policy_dt.sum_disc ทั้ง 3 Layer) , 2)กรณีที่ {POLICY_STATUS} = FALSEใช้ ผลรวมของ tx_rig_est_policy_dt.ri_prem_acc ทั้ง 3 Layer |
| ri_comm_life | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ ใช้ Fix 0กรณีที่ {POLICY_STATUS} = FALSEใช้ {RI_COM_LIFE} ที่ได้จากขั้นตอน 4. การคำนวณ RI Commission |
| ri_comm_acc | {RI_COM_ACC} ที่ได้จากขั้นตอน 4. การคำนวณ RI Commission |
| ri_comm_tpd | Fix 0 |
| ri_comm_ttd | Fix 0 |
| ri_comm_medical | Fix 0 |
| ri_prem_1st_life | Fix 0 |
| ri_prem_1st_add | Fix 0 |
| ri_prem_1st_tpd | Fix 0 |
| ri_prem_1st_med | Fix 0 |
| ri_prem_1st_tot | Fix 0 |
| ri_prem_renew_life | Fix 0 |
| ri_prem_renew_add | Fix 0 |
| ri_prem_renew_tpd | Fix 0 |
| ri_prem_renew_med | Fix 0 |
| ri_prem_renew_tot | Fix 0 |
| event_date | tx_rig_est_mem_dt.event_date หากกรมธรรม์มีการเคลมมากกว่าหนึ่งรายการ ภายใต้ tx_rig_est_policy_hd.rig_est_policy_hd_id เดียวกัน ให้นำ tx_rig_est_mem_dt.event_date วันที่เกิดอุบัติเหตุ (Accident Date) ที่เก่าที่สุด ของสมาชิกในกรมธรรม์นั้น มาใช้เป็น Event Date |
| ri_claim_life | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_life ทั้ง 3 Layer |
| ri_claim_add | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer)กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) |
| ri_claim_tpd | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUE0กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer) |
| ri_claim_med | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_med ทั้ง 3 Layer |
| ri_claim_tot | ผลรวมของ tx_rig_est_bdr.ri_claim_life + tx_rig_est_bdr.ri_claim_add + tx_rig_est_bdr.ri_claim_tpd + tx_rig_est_bdr.ri_claim_med |
| recov_claim_life | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_life ทั้ง 3 Layer |
| recov_claim_acc | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer)กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) |
| policy_year | tx_rig_est_policy_hd.policy_year |
| sale_option | {SALE_OPTION} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 26/02/2026) |
| sale_channel | {SALE_CHANEL} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 26/02/2026) |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |

##### Table tx_rig_policy_base
tx_rig_policy_base
- บันทึกเฉพาะกรมธรรม์ที่ยังไม่เคยถูกบันทึกเท่านั้น โดยตรวจสอบจาก policy_no, policy_year และ ri_commencement_date
- ตามเงื่อนไขการประมวลผล กรมธรรม์ Treaty PA จะมี policy_year = 1 เสมอ เนื่องจากเปลี่ยนเลขกรมธรรม์ทุกปี
| No. | Field | Description | Data Source | Example |
| 1 | rig_policy_base_id | เลขที่ Running |  |  |
| 2 | policy_no | เลขที่กรมธรรม์ | tx_rig_est_policy_hd.policy_no |  |
| 3 | policy_year | ปีกรมธรรม์ | tx_rig_est_policy_hd.policy_year |  |
| 4 (suthanee.sa 25/02/2026) | policy_status | สถานะของกรมธรรม์ประกันกลุ่ม | tx_rig_est_policy_hd.policy_status |  |
| 5 | treaty_code | รหัสสัญญาบริษัทประกันภัยต่อ | tx_rig_est_hd.treaty_code |  |
| 6 (suthanee.sa 25/02/2026) | ri_status | สถานะการส่งประกันภัยต่อ | tx_rig_est_policy_hd.ri_policy_status |  |
| 7 | ri_commencement_date | วันเริ่มสัญญาประกันภัยต่อ | tx_rig_est_policy_hd.effective_date (suthanee.sa 26/02/2026) |  |
| 8 | period | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | tx_rig_est_hd.closing_period |  |
| 9 | created_date | วันที่บันทึกรายการ |  |  |
| 10 | created_by | ผู้บันทึกรายการ |  |  |
| 11 | updated_date | วันที่ปรับปรุงรายการ |  |  |
| 12 | updated_by | ผู้ปรับปรุงรายการ |  |  |


===== PAGE 1314194015 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 7. ประมวลผล Estimate SOA =====
### เงื่อนไขในการประมวลผล SOA
Mapping SOA Report
เงื่อนไขในการดึงข้อมูลหลัก
tx_rig_est_soa_hd
| Field | เงื่อนไข |
| rig_est_soa_hd_id | running no. |
| rig_est_hd_id | id ของ tx_rig_est_hd |
| period | แยกตามรายการ tx_rig_est_policy_hd.period ที่เกิดขึ้นภายใต้ tx_rig_est_hd ของ closing_period นั้น |
| total_profit_comm | Fix 0 |
| net_balance_due_to_reinsurer | Fix 0 |
tx_rig_est_soa_dt
ในกรณีที่ค่า numeric ทุกค่าเป็น 0 ไม่ต้องลงข้อมูลเพื่อไม่ให้ออก Sheet SOA
| Field | เงื่อนไข |
| rig_est_soa_dt_id | running no. |
| rig_est_soa_hd_id | id ของ tx_rig_est_soa_hd |
| prem_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_prem_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_prem_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_est_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_prem_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_prem_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_est_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_tpd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_tpd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_ttd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_ttd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_medical | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_medical** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_est_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_tpd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_tpd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_ttd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_ttd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_medical | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_medical** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_est_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | Fix 0 |
| prem_refund_new_add | Fix 0 |
| prem_refund_new_tpd | Fix 0 |
| prem_refund_new_ttd | Fix 0 |
| prem_refund_new_medical | Fix 0 |
| prem_refund_new_total | Fix 0 |
| prem_refund_renew_life | Fix 0 |
| prem_refund_renew_add | Fix 0 |
| prem_refund_renew_tpd | Fix 0 |
| prem_refund_renew_ttd | Fix 0 |
| prem_refund_renew_medical | Fix 0 |
| prem_refund_renew_total | Fix 0 |
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
| comm_refund_new_life | Fix 0 |
| comm_refund_new_add | Fix 0 |
| comm_refund_new_tpd | Fix 0 |
| comm_refund_new_ttd | Fix 0 |
| comm_refund_new_medical | Fix 0 |
| comm_refund_new_total | Fix 0 |
| comm_refund_renew_life | Fix 0 |
| comm_refund_renew_add | Fix 0 |
| comm_refund_renew_tpd | Fix 0 |
| comm_refund_renew_ttd | Fix 0 |
| comm_refund_renew_medical | Fix 0 |
| comm_refund_renew_total | Fix 0 |
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
| claim_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_life**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_add**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_tpd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_tpd**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_ttd | Fix 0 |
| claim_new_medical | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_med**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_total | ผลรวมของ tx_rig_est_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_life**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_add**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_tpd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_tpd**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_ttd | Fix 0 |
| claim_renew_medical | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_med**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_total | ผลรวมของ tx_rig_est_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | Fix 0 |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | Fix 0 |
| revival_prem_new_life | Fix 0 |
| revival_prem_new_add | Fix 0 |
| revival_prem_new_tpd | Fix 0 |
| revival_prem_new_ttd | Fix 0 |
| revival_prem_new_medical | Fix 0 |
| revival_prem_new_total | Fix 0 |
| revival_prem_renew_life | Fix 0 |
| revival_prem_renew_add | Fix 0 |
| revival_prem_renew_tpd | Fix 0 |
| revival_prem_renew_ttd | Fix 0 |
| revival_prem_renew_medical | Fix 0 |
| revival_prem_renew_total | Fix 0 |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | Fix 0 |
| profit_comm | Fix 0 |
| sub_total_due_to_reinsurer | tx_rig_est_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_est_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
จากนั้นให้อัปเดทข้อมูลที่ tx_rig_est_soa_hd
| Field | สูตรคำนวณ |
| tx_rig_est_soa_hd.net_balance_due_to_reinsurer | tx_rig_est_soa_dt.sub_total_due_to_reinsurer - tx_rig_est_soa_dt.sub_total_due_from_reinsurer |


===== PAGE 1314652185 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 7. ประมวลผล Estimate SOA > new =====
tx_rig_est_bdr.policy_year = 1


===== PAGE 1314652187 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 7. ประมวลผล Estimate SOA > renew =====
tx_rig_est_bdr.policy_year > 1


===== PAGE 1314652520 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 7. ประมวลผล Estimate SOA > sum_claim =====
**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง**


===== PAGE 1316324192 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 7. ประมวลผล Estimate SOA > sum_premium =====
** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน **


===== PAGE 1312490060 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 8. Mapping Output File =====
Estimate BDR
สร้างไฟล์ Export BDR
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_Daiichi_{YYYY}{MM} | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Dai-ichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-1 ตัวอย่าง output file - Estimate Daiichi |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | DG. No. |  | tx_rig_est_bdr | reinsurer_no | left |  |
| 3 | Comm. Date |  | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 4 | Eff.Date | วันที่คุ้มครอง | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 5 | Mode of Payment | ประเภทการชำระเบี้ยประกันภัย | tx_rig_est_bdr | mode_pay | left | Quarterly |
| 6 | 1st RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_1st_life | right | 1,000.15 |
| 7 | 1st RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_1st_add | right | 1,000.15 |
| 8 | 1st RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_1st_tpd | right | 1,000.15 |
| 9 | 1st RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_1st_med | right | 1,000.15 |
| 10 | 1st RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_1st_tot | right | 1,000.15 |
| 11 | Renewal RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_renew_life | right | 1,000.15 |
| 12 | Renewal RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_renew_add | right | 1,000.15 |
| 13 | Renewal RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_renew_tpd | right | 1,000.15 |
| 14 | Renewal RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_renew_med | right | 1,000.15 |
| 15 | Renewal RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_renew_tot | right | 1,000.15 |
| 16 | RI Claim Life | เคลมชีวิต | tx_rig_est_bdr | ri_claim_life | right | 300,000.00 |
| 17 | RI Claim AD&D | เคลมอุบัติเหตุ | tx_rig_est_bdr | ri_claim_add | right | 300,000.00 |
| 18 | RI Claim TPD | เคลมอุบัติเหตุทุพลภาพ | tx_rig_est_bdr | ri_claim_tpd | right |  |
| 19 | RI Claim Med | เคลมสุขภาพ | tx_rig_est_bdr | ri_claim_med | right | 300,000.00 |
| 20 | RI Claim Total | เคลมทั้งหมด | tx_rig_est_bdr | ri_claim_tot | right |  |
| 21 | Data Quarter |  | tx_rig_est_bdr | data_quarter | center | 2018Q4 |
| 22 | RI Period | รอบประมวลผล | tx_rig_est_bdr | period | center | 201812 |
| 23 | Closing Period | Period ตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = THREL_Grp_PA
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = GIB_Grp_Direct_EB
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_GIB_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-6 ตัวอย่าง output file - Estimate GIB |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
Estimate SOA
1. เงื่อนไขการสร้างไฟล์ของ Treaty
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
DAI_Grp_Daiichi_Coins
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401
- YYYYMM = Closing Period
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
|  |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Dai-Ichi Life Insurance Company Limited |  |
| {#005} | Group Reinsurance |  |
| {#006} | July 12, 2006 |  |
A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA File
SOA_Est_Daiichi_YYYYMM
{TREATY_CODE} = THREL_Grp_PA
THREL_Grp_PA
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Thaire_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
ระบบจะแยกชีท SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Period
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional Group PA with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd.periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | Thaire Life Assurance Public Co., Ltd. |  |
| {#005} | Group PA |  |
| {#006} | January 1, 2013 |  |
A09-9 ตัวอย่าง output file - Thaire - Estimate SOA File
SOA_Est_Thaire_YYYYMM
{TREATY_CODE} = GIB_Grp_Direct_EB
GIB_Grp_Direct_EB
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_GIB_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
- ชื่อชีท "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional EB Group with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd .periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Gibraltar Life Insurance Co., Ltd. |  |
| {#005} | Group Reinsurance Business (EB Group) |  |
| {#006} | January 1, 2017 |  |
A09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileSOA_Est_GIB_YYYYMM
2. Mapping File
| DUE TO REINSURER (Cr.) | DUE FROM REINSURER (Dr.) |
| Reinsurance premium : | New Business | - LIFE | prem_new_life | Commission : | 1 st yr. | - LIFE | comm_new_life |
|  |  | - AD&D | prem_new_add |  |  | - AD&D | comm_new_add |
|  |  | - TPD | prem_new_tpd |  |  | - TPD | comm_new_tpd |
|  |  | - TTD | prem_new_ttd |  |  | - TTD | comm_new_ttd |
|  |  | - MEDICAL | prem_new_medical |  |  | - MEDICAL | comm_new_medical |
|  | TOTAL | prem_new_total |  | TOTAL | comm_new_total |
|  | Renewal Business | - LIFE | prem_renew_1y_life |  | Renewal | - LIFE | comm_renew_life |
|  | (1 st yr.) | - AD&D | prem_renew_1y_add |  |  | - AD&D | comm_renew_add |
|  |  | - TPD | prem_renew_1y_tpd |  |  | - TPD | comm_renew_tpd |
|  |  | - TTD | prem_renew_1y_ttd |  |  | - TTD | comm_renew_ttd |
|  |  | - MEDICAL- | prem_renew_1y_medical |  |  | - MEDICAL | comm_renew_medical |
|  | TOTAL | prem_renew_1y_total |  | TOTAL | comm_renew_total |
|  | Renewal Business | - LIFE | prem_renew_life | Premium Refund : | 1 st yr. | - LIFE | prem_refund_new_life |
|  | (Renewal) | - AD&D | prem_renew_add |  |  | - AD&D | prem_refund_new_add |
|  |  | - TPD | prem_renew_tpd |  |  | - TPD | prem_refund_new_tpd |
|  |  | - TTD | prem_renew_ttd |  |  | - TTD | prem_refund_new_ttd |
|  |  | - MEDICAL | prem_renew_medical |  |  | - MEDICAL | prem_refund_new_medical |
|  | TOTAL | prem_renew_total |  | TOTAL | prem_refund_new_total |
| Commission Refund : | 1 st yr. | - LIFE | comm_refund_new_life |  | Renewal | - LIFE | prem_refund_renew_life |
|  |  | - AD&D | comm_refund_new_add |  |  | - AD&D | prem_refund_renew_add |
|  |  | - TPD | comm_refund_new_tpd |  |  | - TPD | prem_refund_renew_tpd |
|  |  | - TTD | comm_refund_new_ttd |  |  | - TTD | prem_refund_renew_ttd |
|  |  | - MEDICAL | comm_refund_new_medical |  |  | - MEDICAL | prem_refund_renew_medical |
|  | TOTAL | comm_refund_new_total |  | TOTAL | prem_refund_renew_total |
|  | Renewal | - LIFE | comm_refund_renew_life |  | 1 st yr. Claim | - LIFE | prem_refund_new_claim_life |
|  |  | - AD&D | comm_refund_renew_add |  |  | - AD&D | prem_refund_new_claim_add |
|  |  | - TPD | comm_refund_renew_tpd |  |  | - TPD | prem_refund_new_claim_tpd |
|  |  | - TTD | comm_refund_renew_ttd |  |  | - TTD | prem_refund_new_claim_ttd |
|  |  | - MEDICAL | comm_refund_renew_medical |  |  | - MEDICAL | prem_refund_new_claim_medical |
|  | TOTAL | comm_refund_renew_total |  | TOTAL | prem_refund_new_claim_total |
|  | 1 st yr. Claim | - LIFE | comm_refund_new_claim_life |  | Renewal Claim | - LIFE | prem_refund_renew_claim_life |
|  |  | - AD&D | comm_refund_new_claim_add |  |  | - AD&D | prem_refund_renew_claim_add |
|  |  | - TPD | comm_refund_new_claim_tpd |  |  | - TPD | prem_refund_renew_claim_tpd |
|  |  | - TTD | comm_refund_new_claim_ttd |  |  | - TTD | prem_refund_renew_claim_ttd |
|  |  | - MEDICAL | comm_refund_new_claim_medical |  |  | - MEDICAL | prem_refund_renew_claim_medical |
|  | TOTAL | comm_refund_new_claim_total |  | TOTAL | prem_refund_renew_claim_total |
|  | Renewal Claim | - LIFE | comm_refund_renew_claim_life | Claim : | 1 st yr. | - LIFE | claim_new_life |
|  |  | - AD&D | comm_refund_renew_claim_add |  |  | - AD&D | claim_new_add |
|  |  | - TPD | comm_refund_renew_claim_tpd |  |  | - TPD | claim_new_tpd |
|  |  | - TTD | comm_refund_renew_claim_ttd |  |  | - TTD | claim_new_ttd |
|  |  | - MEDICAL | comm_refund_renew_claim_medical |  |  | - MEDICAL | claim_new_medical |
|  | TOTAL | comm_refund_renew_claim_total |  | TOTAL | claim_new_total |
| Revival Premiums | 1 st yr. | - LIFE | revival_prem_new_life |  | Renewal | - LIFE | claim_renew_life |
|  |  | - AD&D | revival_prem_new_add |  |  | - AD&D | claim_renew_add |
|  |  | - TPD | revival_prem_new_tpd |  |  | - TPD | claim_renew_tpd |
|  |  | - TTD | revival_prem_new_ttd |  |  | - TTD | claim_renew_ttd |
|  |  | - MEDICAL | revival_prem_new_medical |  |  | - MEDICAL | claim_renew_medical |
|  | TOTAL | revival_prem_new_total |  | TOTAL | claim_renew_total |
|  | Renewal | - LIFE | revival_prem_renew_life |  | Claim Expenses | - INVESTIGATION FEE | claim_exp_investigation_fee |
|  |  | - AD&D | revival_prem_renew_add |  |  | - LEGAL FEE | claim_exp_legal_fee |
|  |  | - TPD | revival_prem_renew_tpd |  |  | - MEDICAL EVIDENCE | claim_exp_med |
|  |  | - TTD | revival_prem_renew_ttd |  | TOTAL | claim_exp_total |
|  |  | - MEDICAL | revival_prem_renew_medical | Admin. Commission (Remittance) : | admin_comm_remittance |
|  | TOTAL | revival_prem_renew_total | Experience Refund Share : | experience_refund_share |
|  | Profit Commission : | profit_comm |
| SUB TOTAL | sub_total_due_to_reinsurer | SUB TOTAL | sub_total_due_from_reinsurer |
| DUE TO REINSURER | due_to_reinsurer | DUE FROM REINSURER | due_from_reinsurer |


===== PAGE 1314194028 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 8. Mapping Output File > 9.1. Estimate BDR =====
สร้างไฟล์ Export BDR
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_Daiichi_{YYYY}{MM} | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Dai-ichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-1 ตัวอย่าง output file - Estimate Daiichi |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | DG. No. |  | tx_rig_est_bdr | reinsurer_no | left |  |
| 3 | Comm. Date |  | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 4 | Eff.Date | วันที่คุ้มครอง | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 5 | Mode of Payment | ประเภทการชำระเบี้ยประกันภัย | tx_rig_est_bdr | mode_pay | left | Quarterly |
| 6 | 1st RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_1st_life | right | 1,000.15 |
| 7 | 1st RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_1st_add | right | 1,000.15 |
| 8 | 1st RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_1st_tpd | right | 1,000.15 |
| 9 | 1st RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_1st_med | right | 1,000.15 |
| 10 | 1st RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_1st_tot | right | 1,000.15 |
| 11 | Renewal RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_renew_life | right | 1,000.15 |
| 12 | Renewal RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_renew_add | right | 1,000.15 |
| 13 | Renewal RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_renew_tpd | right | 1,000.15 |
| 14 | Renewal RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_renew_med | right | 1,000.15 |
| 15 | Renewal RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_renew_tot | right | 1,000.15 |
| 16 | RI Claim Life | เคลมชีวิต | tx_rig_est_bdr | ri_claim_life | right | 300,000.00 |
| 17 | RI Claim AD&D | เคลมอุบัติเหตุ | tx_rig_est_bdr | ri_claim_add | right | 300,000.00 |
| 18 | RI Claim TPD | เคลมอุบัติเหตุทุพลภาพ | tx_rig_est_bdr | ri_claim_tpd | right |  |
| 19 | RI Claim Med | เคลมสุขภาพ | tx_rig_est_bdr | ri_claim_med | right | 300,000.00 |
| 20 | RI Claim Total | เคลมทั้งหมด | tx_rig_est_bdr | ri_claim_tot | right |  |
| 21 | Data Quarter |  | tx_rig_est_bdr | data_quarter | center | 2018Q4 |
| 22 | RI Period | รอบประมวลผล | tx_rig_est_bdr | period | center | 201812 |
| 23 | Closing Period | Period ตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = THREL_Grp_PA
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = GIB_Grp_Direct_EB
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_GIB_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-6 ตัวอย่าง output file - Estimate GIB |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |


===== PAGE 1314194032 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 8. Mapping Output File > 9.2. Estimate SOA =====
1. เงื่อนไขการสร้างไฟล์ของ Treaty
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
DAI_Grp_Daiichi_Coins
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401
- YYYYMM = Closing Period
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
|  |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Dai-Ichi Life Insurance Company Limited |  |
| {#005} | Group Reinsurance |  |
| {#006} | July 12, 2006 |  |
A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA File
SOA_Est_Daiichi_YYYYMM
{TREATY_CODE} = THREL_Grp_PA
THREL_Grp_PA
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Thaire_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
ระบบจะแยกชีท SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Period
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional Group PA with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd.periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | Thaire Life Assurance Public Co., Ltd. |  |
| {#005} | Group PA |  |
| {#006} | January 1, 2013 |  |
A09-9 ตัวอย่าง output file - Thaire - Estimate SOA File
SOA_Est_Thaire_YYYYMM
{TREATY_CODE} = GIB_Grp_Direct_EB
GIB_Grp_Direct_EB
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_GIB_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
- ชื่อชีท "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional EB Group with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd .periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Gibraltar Life Insurance Co., Ltd. |  |
| {#005} | Group Reinsurance Business (EB Group) |  |
| {#006} | January 1, 2017 |  |
A09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileSOA_Est_GIB_YYYYMM
2. Mapping File
| DUE TO REINSURER (Cr.) | DUE FROM REINSURER (Dr.) |
| Reinsurance premium : | New Business | - LIFE | prem_new_life | Commission : | 1 st yr. | - LIFE | comm_new_life |
|  |  | - AD&D | prem_new_add |  |  | - AD&D | comm_new_add |
|  |  | - TPD | prem_new_tpd |  |  | - TPD | comm_new_tpd |
|  |  | - TTD | prem_new_ttd |  |  | - TTD | comm_new_ttd |
|  |  | - MEDICAL | prem_new_medical |  |  | - MEDICAL | comm_new_medical |
|  | TOTAL | prem_new_total |  | TOTAL | comm_new_total |
|  | Renewal Business | - LIFE | prem_renew_1y_life |  | Renewal | - LIFE | comm_renew_life |
|  | (1 st yr.) | - AD&D | prem_renew_1y_add |  |  | - AD&D | comm_renew_add |
|  |  | - TPD | prem_renew_1y_tpd |  |  | - TPD | comm_renew_tpd |
|  |  | - TTD | prem_renew_1y_ttd |  |  | - TTD | comm_renew_ttd |
|  |  | - MEDICAL- | prem_renew_1y_medical |  |  | - MEDICAL | comm_renew_medical |
|  | TOTAL | prem_renew_1y_total |  | TOTAL | comm_renew_total |
|  | Renewal Business | - LIFE | prem_renew_life | Premium Refund : | 1 st yr. | - LIFE | prem_refund_new_life |
|  | (Renewal) | - AD&D | prem_renew_add |  |  | - AD&D | prem_refund_new_add |
|  |  | - TPD | prem_renew_tpd |  |  | - TPD | prem_refund_new_tpd |
|  |  | - TTD | prem_renew_ttd |  |  | - TTD | prem_refund_new_ttd |
|  |  | - MEDICAL | prem_renew_medical |  |  | - MEDICAL | prem_refund_new_medical |
|  | TOTAL | prem_renew_total |  | TOTAL | prem_refund_new_total |
| Commission Refund : | 1 st yr. | - LIFE | comm_refund_new_life |  | Renewal | - LIFE | prem_refund_renew_life |
|  |  | - AD&D | comm_refund_new_add |  |  | - AD&D | prem_refund_renew_add |
|  |  | - TPD | comm_refund_new_tpd |  |  | - TPD | prem_refund_renew_tpd |
|  |  | - TTD | comm_refund_new_ttd |  |  | - TTD | prem_refund_renew_ttd |
|  |  | - MEDICAL | comm_refund_new_medical |  |  | - MEDICAL | prem_refund_renew_medical |
|  | TOTAL | comm_refund_new_total |  | TOTAL | prem_refund_renew_total |
|  | Renewal | - LIFE | comm_refund_renew_life |  | 1 st yr. Claim | - LIFE | prem_refund_new_claim_life |
|  |  | - AD&D | comm_refund_renew_add |  |  | - AD&D | prem_refund_new_claim_add |
|  |  | - TPD | comm_refund_renew_tpd |  |  | - TPD | prem_refund_new_claim_tpd |
|  |  | - TTD | comm_refund_renew_ttd |  |  | - TTD | prem_refund_new_claim_ttd |
|  |  | - MEDICAL | comm_refund_renew_medical |  |  | - MEDICAL | prem_refund_new_claim_medical |
|  | TOTAL | comm_refund_renew_total |  | TOTAL | prem_refund_new_claim_total |
|  | 1 st yr. Claim | - LIFE | comm_refund_new_claim_life |  | Renewal Claim | - LIFE | prem_refund_renew_claim_life |
|  |  | - AD&D | comm_refund_new_claim_add |  |  | - AD&D | prem_refund_renew_claim_add |
|  |  | - TPD | comm_refund_new_claim_tpd |  |  | - TPD | prem_refund_renew_claim_tpd |
|  |  | - TTD | comm_refund_new_claim_ttd |  |  | - TTD | prem_refund_renew_claim_ttd |
|  |  | - MEDICAL | comm_refund_new_claim_medical |  |  | - MEDICAL | prem_refund_renew_claim_medical |
|  | TOTAL | comm_refund_new_claim_total |  | TOTAL | prem_refund_renew_claim_total |
|  | Renewal Claim | - LIFE | comm_refund_renew_claim_life | Claim : | 1 st yr. | - LIFE | claim_new_life |
|  |  | - AD&D | comm_refund_renew_claim_add |  |  | - AD&D | claim_new_add |
|  |  | - TPD | comm_refund_renew_claim_tpd |  |  | - TPD | claim_new_tpd |
|  |  | - TTD | comm_refund_renew_claim_ttd |  |  | - TTD | claim_new_ttd |
|  |  | - MEDICAL | comm_refund_renew_claim_medical |  |  | - MEDICAL | claim_new_medical |
|  | TOTAL | comm_refund_renew_claim_total |  | TOTAL | claim_new_total |
| Revival Premiums | 1 st yr. | - LIFE | revival_prem_new_life |  | Renewal | - LIFE | claim_renew_life |
|  |  | - AD&D | revival_prem_new_add |  |  | - AD&D | claim_renew_add |
|  |  | - TPD | revival_prem_new_tpd |  |  | - TPD | claim_renew_tpd |
|  |  | - TTD | revival_prem_new_ttd |  |  | - TTD | claim_renew_ttd |
|  |  | - MEDICAL | revival_prem_new_medical |  |  | - MEDICAL | claim_renew_medical |
|  | TOTAL | revival_prem_new_total |  | TOTAL | claim_renew_total |
|  | Renewal | - LIFE | revival_prem_renew_life |  | Claim Expenses | - INVESTIGATION FEE | claim_exp_investigation_fee |
|  |  | - AD&D | revival_prem_renew_add |  |  | - LEGAL FEE | claim_exp_legal_fee |
|  |  | - TPD | revival_prem_renew_tpd |  |  | - MEDICAL EVIDENCE | claim_exp_med |
|  |  | - TTD | revival_prem_renew_ttd |  | TOTAL | claim_exp_total |
|  |  | - MEDICAL | revival_prem_renew_medical | Admin. Commission (Remittance) : | admin_comm_remittance |
|  | TOTAL | revival_prem_renew_total | Experience Refund Share : | experience_refund_share |
|  | Profit Commission : | profit_comm |
| SUB TOTAL | sub_total_due_to_reinsurer | SUB TOTAL | sub_total_due_from_reinsurer |
| DUE TO REINSURER | due_to_reinsurer | DUE FROM REINSURER | due_from_reinsurer |


===== PAGE 1319601488 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 9. เก็บข้อมูล Export File =====
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


===== PAGE 1312490139 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > 10. แจ้งผลการการประมวลผล =====
1. Update ผลการประมวลผล
tx_rig_est_hd
หลังการประมวลผลเสร็จสิ้น ให้อัปเดทข้อมูลดังนี้
| Field | เงื่อนไข | ตัวอย่าง |
| status | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" | SUCCESS |
| ri_premium | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_prem_life + ri_prem_acc) * -1 กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท(บันทึกเป็นค่าติดลบ suthanee.sa 06/03/2026) | 100000 |
| ri_commission | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_comm_life + ri_comm_acc) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| claim_recovery | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_claim_life + ri_claim_med + recov_claim_acc + ri_claim_tpd (suthanee.sa 25/03/2026)) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| due_to | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ sum(ri_premium, ri_commission, claim_recovery) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| sum_records | นับจำนวนรายการที่เกิดขึ้นใน tx_rig_est_bdr | 100 |
| updated_date | now() |  |
| updated_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
2. Template Email
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_est_hd_id เท่ากับ tx_rig_est_hd.rig_est_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_est_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_est_hd.closing_period | YYYY/MM | 2022/01 |
| $status | ผลการประมวลผล | tx_rig_est_hd .status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_est_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_est_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_est_hd.rig_est_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Estimate" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Estimate |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>) สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Estimate ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |
고전파0 - SOOP


===== PAGE 1312490072 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > Process Estimate =====
1. ตรวจสอบ Treaty ที่ต้องประมวลผล
1. ตรวจสอบ Treaty ใน Table Config
- ตรวจสอบข้อมูลใน cf_rig_treaty โดยมีเงื่อนไขดังนี้cf_rig_treaty.approve = TRUEcf_rig_treaty.status = APeriod ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general .expire_dateเก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- cf_rig_treaty.approve = TRUE
- cf_rig_treaty.status = A
- Period ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general .expire_date
- เก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- สร้างรายการที่ tx_rig_est_hd ดังนี้tx_rig_est_hd Fieldข้อมูลเงื่อนไขตัวอย่างrig_est_hd_id running no.1closing_period รอบ Period ที่ประมวลผล202410cf_reinsurer_idcf_rig_treaty.cf_reinsurer_idของ Treaty ที่กำลังประมวลผล cf_treaty_idcf_rig_treaty.cf_rig_treaty_idของ Treaty ที่กำลังประมวลผล treaty_codecf_rig_treaty.treaty_codeจากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล status เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" edw_status NULL edw_status_desc NULL ri_std_hd_id NULL mps_status NULL mps_status_desc NULL ri_std_hd_id_oic NULL ri_premium เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก ri_commission เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก claim_recovery เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก due_to เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก remark กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง usage_status เมื่อสร้างรายการครั้งแรกให้บันทึก A ri_method treaty_code จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 sum_records เมื่อสร้างรายการครั้งแรกให้บันทึก 0 created_date now() created_by เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM updated_date NULL updated_by NULL
ค้นหา Treaty ทั้งหมดที่ถูก Config ไว้ แต่เลือกเฉพาะกรมธรรม์ที่เคยอนุมัติ Approve แล้วอย่างน้อยหนึ่งครั้ง และยังมีสถานะใช้งาน และยังมีวันที่เปิดใช้งานอยู่ในปัจจุบัน จากนั้นเก็บ ID ของ Treaty นั้นไว้เพื่อไปค้นหารายการรายละเอียด Config ของกรมธรรม์ต่อ
2. เตรียมข้อมูลประมวลผล
- นำรายการ Treaty ที่ผ่านเงื่อนไขข้อ 1 มาเตรียมข้อมูลสำหรับประมวลผลดังนี้Parameterเงื่อนไขค่าที่เก็บลง Parameter{TREATY_CODE}ตาม {TREATY_ID} จากข้อ 1cf_rig_treaty.treaty_code{RE_CODE}ตรวจสอบที่ cf_lookup_catalog ที่ cf_lookup_catalog.parent_id = 1000100นำ cf_rig_treaty.treaty_code เทียบกับ cf_lookup_catalog.descriptionเก็บค่า cf_lookup_catalog.lookup_key ที่ได้{GENERAL_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_id เก็บค่า cf_rig_treaty_dt.status_general ที่ได้{CONDITION_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_condition ที่ได้{POLICY_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_policy ที่ได้{RIPREM_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idเก็บค่า cf_rig_treaty_dt.status_ri_premium ที่ได้
- ตรวจสอบ ID ของแต่ละรายการที่ถูก Approve ล่าสุด ของแต่ละหัวข้อParameterเงื่อนไขค่าที่เก็บลง Parameter{GENERAL_ID}ถ้า {GENERAL_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_general.cf_rig_treaty_id ที่รายการ cf_rig_treaty_general.status = "A"เก็บค่า cf_rig_treaty_general.cf_rig_treaty_general_id ที่ได้{CONDITION_ID}ถ้า {CONDITION_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_cond_hd.status = "A"และ วันที่เริ่มต้นสัญญาของกรมธรรม์นั้น อยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toเก็บค่า cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ที่ได้{POLICY_ID}ถ้า {POLICY_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_policy_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_policy_hd.status = "A"เก็บค่า cf_rig_treaty_policy_hd.cf_rig_treaty_policy_hd_id ที่ได้{RIPREM_ID}ถ้า {RIPREM_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_prem_rate_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_prem_rate_hd.status = "A"และ วันที่เริ่มต้นสัญญาของกรมธรรม์นั้น อยู่ในช่วงของ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_toเก็บค่า cf_rig_treaty_prem_rate_hd.cf_rig_treaty_prem_rate_hd_id ที่ได้
ค้นหา Reinsurer No ของ Treaty นั้นเพื่อนำไปค้นหากรมธรรม์ที่อยู่ภายใต้ Treaty นี้ทั้งหมด รวมถึงสถานะการใช้งาน Config ต่าง ๆ สำหรับเอาไว้เช็กต่อในการประมวลผล ถ้ามีการ Config ส่วนใดเป็น FALSE แต่มีการคำนวณที่ต้องเลือกใช้ ก็จะสามารถข้ามกระบวนการนั้นไปได้เลย
เก็บ ID ของรายการที่มีสถานะเป็น A เท่านั้น เนื่องจากภายใต้ Table Config จะมีรายการที่ถูก Config ไว้ทั้งหมด 3 แบบด้วยกัน คือ
- A: Active สถานะนี้เกิดจากการอนุมัติใช้งาน Treaty แล้วอย่างน้อย 1 ครั้ง และจะใช้ข้อมูลที่มีสถานะ A นี้สำหรับการประมวลผลทุกครั้ง
- I: Inactive สถานะนี้เกิดจากหลังการอนุมัติหรือมีการแก้ไขข้อมูลแล้วอนุมัติจนทำให้มีรายการสถานะ A ขึ้นมาใหม่แล้ว รายการสถานะ A เดิมจะต้องเปลี่ยนเป็น I เพื่อให้ระบบอ่านได้ถูกว่าต้องใช้ข้อมูลรายการไหนสำหรับการประมวลผล แต่ยังสามารถตรวจสอบประวัติรายการ A เดิมจาก I ได้
- D: สถานะนี้เกิดในครั้งแรกที่สร้างข้อมูล และเกิดขึ้นหลังจากการอนุมัติและกำลังอยู่ระหว่างการแก้ไขข้อมูลใหม่ เพราะระบบจะสร้างรายการขึ้นมาใหม่เสมอ เพื่อให้สถานะ A เดิมยังอยู่และนำไปประมวลผลได้ และ D จะใช้แก้ไขไปจนกว่าจะมีการอนุมัติ เมื่ออนุมัติรายการ D จะกลายเป็นรายการ A ใหม่ และรายการ A เก่า จะมีสถานะเป็น I ตามลำดับ
2. การคัดเลือกกรมธรรม์
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {TREATY_CODE}ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปทำขั้นตอน 5. การคำนวณ RI Claimถ้าไม่เท่ากับ "DAI_Grp_Daiichi_Coins" ให้ตรวจสอบข้อต่อไป
- ถ้าเท่ากับ "DAI_Grp_Daiichi_Coins" ให้ข้ามไปทำขั้นตอน 5. การคำนวณ RI Claim
- ถ้าไม่เท่ากับ "DAI_Grp_Daiichi_Coins" ให้ตรวจสอบข้อต่อไป
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
ตรวจสอบวิธีการ Config Treaty ในหัวข้อการ Config Policy เนื่องจากการเปิดหรือปิดใช้งาน Config Policy เป็นการกำหนดทิศทางเงื่อนไขการคำนวณ RI Premium, RI Comission ของ Treaty นั้น ๆ
2. คัดเลือกกรมธรรม์ (TRUE)
- นำ {POLICY_ID} ของทุกรายการที่ได้ ไปดึงข้อมูล cf_rig_treaty_policy_hd.policy_no โดยมีเงื่อนไขดังนี้cf_rig_treaty_policy_hd.status = "A"cf_rig_treaty_policy_hd.usage_process_status = "A"ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- cf_rig_treaty_policy_hd.status = "A"
- cf_rig_treaty_policy_hd.usage_process_status = "A"
- ดึงข้อมูลรายละเอียดของกรมธรรม์ดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- parametercf_rig_treaty_policy_hd {POLICY_NO}policy_no {COM_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.first_dateUpdate Suthanee.sa 09/03/2026{COV_FROM}coverage_period_from {COV_TO}coverage_period_to {POLICY_YEAR}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_yearUpdate Suthanee.sa 09/03/2026{AGE_LIMIT}age_limit {OCC}occ_class {CER_INCOM}cert_no_incompliant {POLIC_COV}coverage {PER_ADD}percent_add {PER_MUR}murder_assault {PER_SPE_COV}special_coverage {PER_LOS_FING}loss_finger {PER_MOT}prem_motorcycle {PER_WAR}prem_war {PER_STRIKE}prem_strike_riot {PER_SPORT}prem_sports_activities {PER_AIR}prem_aircraft {PER_DIS_MUR}discount_murder_assualt {PER_DIS_VOL}discount_group_vol {PERIOD}เดือนและปีของ coverage_period_from {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ coverage_period_from {RE_CODE_FULL}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.reinsur_no {POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.policy_status {REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.report_policy_status {RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_policy_1y.ri_policy_status {SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- นำ {POLICY_NO} ที่ได้ ไปตรวจสอบที่ tx_stg_est_policy_1yตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- ตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- กรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้
- กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- นำ {POLICY_NO} ที่ได้ไปตรวจสอบที่ tx_rig_policy_base โดยค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
- ค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- tx_rig_policy_base.policy_no = {POLICY_NO}
- tx_rig_policy_base.policy_year= {POLICY_YEAR}
- tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"
- กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
เตรียมข้อมูลกรมธรรม์สำหรับประมวลผลกรณีเปิดใช้งาน Config Treaty ในหัวข้อ Config Policy ระบบจะต้องนำ Policy ที่ถูก Config ไว้มาตั้งเป็นข้อมูลหลัก แล้วจึงไปตรวจสอบกับข้อมูลอื่น ๆ ต่อว่ากรมธรรม์นั้นจะต้องประมวลผลต่อหรือไม่
3. คัดเลือกกรมธรรม์ (FALSE)
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_policy_1y โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_est_policy_1y.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไปดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน tx_stg_est_policy_1y.reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อกรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อ
- กรณีที่ไม่พบข้อมูลหรือ {RE_CODE} ไม่ตรง ให้ข้ามการประมวลผลกรมธรรม์สำหรับ Treaty นั้นไป
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- parametertx_stg_est_policy_1y {POLICY_NO}policy_no {POLICY_YEAR}policy_year {COM_DATE}first_date {COV_FROM}promise_date {COV_TO}expire_date {RE_CODE_FULL}reinsur_no {POLICY_STATUS}policy_status {REPORT_POL_STATUS}report_policy_status {RI_POL_STATUS}ri_policy_status {MEM_ACTIVE}no_of_member_active {SUM_INS_LIFE}sum_insured_life {SUM_INS_ACC_DEATH}sum_insured_accident_death {SUM_INS_ACC_MED}sum_insured_med_accident {SUM_INS_TPD}sum_insured_tpd {UNNAME_STATUS}unname {PERIOD}เดือนและปีของ promise_date {CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล {DATA_QUT}ปีและรอบ Quater ของเดือนของ promise_date {SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026) {SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026) {EXPIRE_DATE}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026) {RATE_FLAG}นำ {POLICY_NO} และ {COV_FROM} ไปหาใน tx_stg_est_all_policy.rate_flag(#CR_RATE suthanee.sa 11/05/2026)
- นำ {POLICY_NO} ที่ได้ ไปตรวจสอบที่ tx_stg_est_policy_1yตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- ตรวจสอบ tx_stg_est_policy_1y.no_of_member_activeกรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- กรณีมากกว่า 0 จะนำไปประมวลผลต่อใน Period นี้
- กรณีเท่ากับ 0 จะไม่นำไปประมวลผลต่อใน Period นี้ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "002"
- นำ {POLICY_NO} ที่ได้ไปตรวจสอบที่ tx_rig_policy_base โดยค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
- ค้นหาข้อมูลที่ตรงกันดังนี้tx_rig_policy_base.policy_no = {POLICY_NO}tx_rig_policy_base.policy_year= {POLICY_YEAR}tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- tx_rig_policy_base.policy_no = {POLICY_NO}
- tx_rig_policy_base.policy_year= {POLICY_YEAR}
- tx_rig_policy_base.ri_commencement_date = {COV_FROM}
- กรณีพบข้อมูล {POLICY_NO} จะไม่นำไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "003"
- กรณีที่ไม่พบข้อมูล {POLICY_NO} จะนำไปประมวลผลต่อ
เตรียมข้อมูลกรมธรรม์สำหรับประมวลผลกรณีปิดใช้งาน Config Treaty ในหัวข้อ Config Policy ระบบจะต้องค้นหากรมธรรม์ทั้งหมดใน Table นำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี ที่มี Reinsurer No ตรงกับ Treaty ที่กำลังประมวลผล
3. การคำนวณ RI Premium
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
1. ตรวจสอบรายการสมาชิก
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ตรวจสอบค่า Minimum Sum Assuredcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.min_sum_assured ใน {MIN_SUM_ASU}
- นำ {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบรายชื่อสมาชิกในกรมธรรม์ที่ tx_stg_est_inforce_member โดยtx_stg_est_inforce_member.policy_no เท่ากับ {POLICY_NO}และ tx_stg_est_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}และ tx_stg_est_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT}กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- tx_stg_est_inforce_member.policy_no เท่ากับ {POLICY_NO}
- และ tx_stg_est_inforce_member.sum_insured_accident มากกว่าเท่ากับ {MIN_SUM_ASU}
- และ tx_stg_est_inforce_member.age น้อยกว่าหรือเท่ากับ {AGE_LIMIT}กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- กรณีรายชื่อสมาชิกที่มีอายุเกินกว่าค่า {AGE_LIMIT} ให้นำ tx_stg_est_inforce_member.cer_no ตรวจสอบกับ {CER_INCOM} แยกรายการด้วย comma ,ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
- ถ้ามีเลข tx_stg_est_inforce_member.cer_no ตรงกับ {CER_INCOM} ให้นำไปประมวลผลต่อ
- ถ้ามีเลข tx_stg_est_inforce_member.cer_no ไม่ตรงกับ {CER_INCOM} ไม่นำรายการสมาชิกรายนั้นไปประมวลผลต่อ และไปเก็บข้อมูลใน กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate "004"
2. คำนวณ SR
- เตรียมข้อมูลคำนวณ SR ตาม Config Treaty หัวข้อ RI Conditionparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re
- นำ tx_stg_est_inforce_member.sum_insured_accident ของแต่ละรายสมาชิก มาตรวจสอบ Layer ดังนี้กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L1_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L1_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L1
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L2_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L2_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L2
- กรณี tx_stg_est_inforce_member.sum_insured_accident มากกว่าหรือเท่ากับ {L3_INSU_MIN} และ น้อยกว่าหรือเท่ากับ {L3_INSU_MAX} หมายถึงสมาชิกรายนี้อยู่ L3
- คำนวณ SR Accident จัดเก็บในกรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L1 ให้กำหนดค่า {L1_SR_ACC} = 0
- กรณีที่สมาชิกรายนั้นอยู่ L2 ให้คำนวณดังนี้{L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})
- {L2_SR_ACC} = ({L2_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ L3 ให้คำนวณดังนี้{L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {L3_SR_ACC} = ({L3_PER} / 100) * (tx_stg_est_inforce_member.sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ SR Murder & Assault จัดเก็บใน {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100{L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100{L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- {L1_SR_MUR} = {L1_SR_ACC} * {PER_MUR} / 100
- {L2_SR_MUR} = {L2_SR_ACC} * {PER_MUR} / 100
- {L3_SR_MUR} = {L3_SR_ACC} * {PER_MUR} / 100
- คำนวณ SR Loadings จัดเก็บใน{L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100{L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100{L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
- {L1_SR_LOAD} = {L1_SR_ACC} * {PER_SPE_COV} / 100
- {L2_SR_LOAD} = {L2_SR_ACC} * {PER_SPE_COV} / 100
- {L3_SR_LOAD} = {L3_SR_ACC} * {PER_SPE_COV} / 100
3. คำนวณ RI Premium
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_to
- เตรียมข้อมูลคำนวณ RI Premium ตาม Config Treaty ที่หัวข้อ ตั้งค่า RI Premium Rate
- {POLIC_COV} ที่ได้มาจาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล
- ค้นหา Rate ของสมาชิกแต่ละคนที่ cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_classเก็บค่าลงใน {RI_PREM_RATE}
- cf_rig_treaty_prem_rate_dt.premium_rate โดยถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2 tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- ถ้า {POLIC_COV} = ADD1 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD1 หรือ {POLIC_COV} = ADD2 ให้ใช้ค่าที่ cf_rig_treaty_prem_rate_dt.type = ADD2
- tx_stg_est_inforce_member.age มากกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.min_age และน้อยกว่าหรือเท่ากับ cf_rig_treaty_prem_rate_dt.max_age
- {OCC} = cf_rig_treaty_prem_rate_dt.occ_class
- เก็บค่าลงใน {RI_PREM_RATE}
- คำนวณ RI Premium Accident{L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 ){L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L1_RI_PREM_ACC} = Round({L1_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L2_RI_PREM_ACC} = Round({L2_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- {L3_RI_PREM_ACC} = Round({L3_SR_ACC} / 1000 * {RI_PREM_RATE} , 2 )
- ค้นหา ผลรวมเปอร์เซ็นต์ Loading ของความคุ้มครองทั้งหมด{PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}เก็บค่าลงใน {ALL_PER_LOAD}
- {PER_MOT} + {PER_WAR} + {PER_STRIKE} + {PER_SPORT} + {PER_AIR}
- เก็บค่าลงใน {ALL_PER_LOAD}
- คำนวณ RI Premium Loadings{L1_RI_PREM_LOAD} = Round((({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L2_RI_PREM_LOAD} = Round((({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 ){L3_RI_PREM_LOAD} = Round((({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L1_RI_PREM_LOAD} = Round((({L1_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L2_RI_PREM_LOAD} = Round((({L2_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- {L3_RI_PREM_LOAD} = Round((({L3_SR_LOAD} / 1000) * {RI_PREM_RATE}) * ({ALL_PER_LOAD} / 100) , 2 )
- คำนวณ RI Premium Discount MA{L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2){L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2){L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- {L1_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L1_RI_PREM_ACC}) / 100 , 2)
- {L2_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L2_RI_PREM_ACC}) / 100 , 2)
- {L3_RI_PREM_DISC_MA} = Round(({PER_DIS_MUR} × {L3_RI_PREM_ACC}) / 100 , 2)
- คำนวณ RI Premium Discount Group Volumn{L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2){L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2){L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- {L1_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD}) , 2)
- {L2_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD}) , 2)
- {L3_RI_PREM_DISC_GV} = Round((({PER_DIS_VOL} / 100) × (1 − ({PER_DIS_MUR} / 100))) × ({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD}) , 2)
- คำนวณ RI Premium Discount{L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2){L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2){L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- {L1_SUM_DISC} = Round({L1_RI_PREM_DISC_MA} + {L1_RI_PREM_DISC_GV} , 2)
- {L2_SUM_DISC} = Round({L2_RI_PREM_DISC_MA} + {L2_RI_PREM_DISC_GV} , 2)
- {L3_SUM_DISC} = Round({L3_RI_PREM_DISC_MA} + {L3_RI_PREM_DISC_GV} , 2)
- คำนวณ Total RI Premium (suthanee.sa 26/01/2026){L1_TOT_PREM} = Round({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD} - {SUM_DISC} , 2){L2_TOT_PREM} = Round({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD} - {SUM_DISC} , 2){L3_TOT_PREM} = Round({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L1_TOT_PREM} = Round({L1_RI_PREM_ACC} + {L1_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L2_TOT_PREM} = Round({L2_RI_PREM_ACC} + {L2_RI_PREM_LOAD} - {SUM_DISC} , 2)
- {L3_TOT_PREM} = Round({L3_RI_PREM_ACC} + {L3_RI_PREM_LOAD} - {SUM_DISC} , 2)
4. คำนวณ Total Premium
- คำนวณ RI Premium Total โดยรวมทุกสมาชิกภายในกรมเข้าด้วยกัน{RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}{RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}{SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}{RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
- {RI_PREM_ACC} = {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
- {RI_PREM_LOAD} = {L1_RI_PREM_LOAD} + {L2_RI_PREM_LOAD} + {L3_RI_PREM_LOAD}
- {SUM_DISC} = {L1_SUM_DISC} + {L2_SUM_DISC} + {L3_SUM_DISC}
- {RI_PREM_TOT} = Round({RI_PREM_ACC} + {RI_PREM_LOAD} - {SUM_DISC} , 2)
3. คัดเลือกกรมธรรม์ (FALSE)
1. ตรวจสอบประเภทการชำระเบี้ยของกรมธรรม์
- นำ {POLICY_NO} และ {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบประเภทการชำระเบี้ย ใน tx_stg_est_all_policy โดยtx_stg_est_all_policy.policy_no เท่ากับ {POLICY_NO}tx_stg_est_all_policy.policy_year เท่ากับ {POLICY_YEAR} (สำหรับป้องกันการเปลี่ยนแปลงโหมดเมื่อเปลี่ยนปีกรมธรรม์)นำค่า tx_stg_est_all_policy.pay_type มาแปลงค่าดังนี้ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2เก็บค่าที่ได้ไว้ใน {PAY_TYPE}
- tx_stg_est_all_policy.policy_no เท่ากับ {POLICY_NO}
- tx_stg_est_all_policy.policy_year เท่ากับ {POLICY_YEAR} (สำหรับป้องกันการเปลี่ยนแปลงโหมดเมื่อเปลี่ยนปีกรมธรรม์)
- นำค่า tx_stg_est_all_policy.pay_type มาแปลงค่าดังนี้ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2
- ถ้า เท่ากับ "Annual" ให้แปลงเป็น 1
- ถ้า เท่ากับ "Monthly" ให้แปลงเป็น 12
- ถ้า เท่ากับ "Quarterly" ให้แปลงเป็น 4
- ถ้า เท่ากับ "Semi Annual" ให้แปลงเป็น 2
- เก็บค่าที่ได้ไว้ใน {PAY_TYPE}
2. คำนวณ Premium
1. เตรียมข้อมูลสำหรับการประมวลผล
- ตรวจสอบ {COV_FROM} ของกรมธรรม์ที่กำลังจะประมวลผล ว่าต้องใช้ {CONDITION_ID} รายการใด โดยนำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- นำ {COV_FROM} เปรียบเทียบกับ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- {CONDITION_ID} ที่ได้จาก ตรวจสอบหารายการที่ตรงกับ cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id เตรียมข้อมูล Layer ดังนี้Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- เตรียมข้อมูล Layer ดังนี้Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.maximum{L1_PER}ถ้า cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.percent_re{L2_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.maximum{L2_PER}ถ้า cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.percent_re{L3_MIN}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_MAX}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.maximum{L3_PER}ถ้า cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_MAX} - {L1_MAX}
- {POLICY_NO} และ {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ มาตรวจสอบ ใน tx_stg_est_prem_layer #CR_RATEเตรียมข้อมูลของแต่ละกรมธรรม์ดังนี้กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rateกรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- เตรียมข้อมูลของแต่ละกรมธรรม์ดังนี้กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rateกรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE}{L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE} {L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC}{L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC} เบี้ยตามความคุ้มครอง ตาม Layer{PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}Rate เบี้ย{L1_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem_rate{L2_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem_rate{L3_PREM_LIFE_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem_rate{L1_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem_rate{L2_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem_rate{L3_PREM_ACC_RATE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem_rate
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
- ส่วนของข้อมูลที่เก็บเป็นรายกรมธรรม์Parameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterจำนวนสมาชิก ตาม Layer{L1_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_life{L2_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_life{L3_MEM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_life{SUM_MEM_LIFE} รวมค่า {L1_MEM_LIFE} + {L2_MEM_LIFE} + {L3_MEM_LIFE}{L1_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.amount_accident{L2_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.amount_accident{L3_MEM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.amount_accident{SUM_MEM_ACC} รวมค่า {L1_MEM_ACC} + {L2_MEM_ACC} + {L3_MEM_ACC}ทุนตามความคุ้มครอง ตาม Layer{L1_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_insure{L2_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_insure{L3_INS_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_insure{SUML_INS_LIFE} {L1_INS_LIFE} + {L2_INS_LIFE} + {L3_INS_LIFE}{L1_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_insure{L2_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_insure{L3_INS_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_insure{SUML_INS_ACC} {L1_INS_ACC} + {L2_INS_ACC} + {L3_INS_ACC}เบี้ยตามความคุ้มครอง ตาม Layer {PRE_L1_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_prem{PRE_L2_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_prem{PRE_L3_PREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_prem{PRE_L1_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.life_extra_prem{PRE_L2_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.life_extra_prem{PRE_L3_EXPREM_LIFE}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.life_extra_prem{SUM_PREM_LIFE} รวมค่า {L1_PREM_LIFE} + {L2_PREM_LIFE} + {L3_PREM_LIFE}{SUM_EXPREM_LIFE} รวมค่า {L1_EXPREM_LIFE} + {L2_EXPREM_LIFE} + {L3_EXPREM_LIFE}{PRE_SUM_ALL_PREM_LIFE} รวมค่า {SUM_PREM_LIFE} + {SUM_EXPREM_LIFE}{PRE_L1_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_prem{PRE_L2_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_prem{PRE_L3_PREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_prem{PRE_L1_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L1tx_stg_est_prem_layer.accident_extra_prem{PRE_L2_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L2tx_stg_est_prem_layer.accident_extra_prem{PRE_L3_EXPREM_ACC}ถ้า tx_stg_est_prem_layer.level = L3tx_stg_est_prem_layer.accident_extra_prem{SUM_PREM_ACC} รวมค่า {L1_PREM_ACC} + {L2_PREM_ACC} + {L3_PREM_ACC}{SUM_EXPREM_ACC} รวมค่า {L1_EXPREM_ACC} + {L2_EXPREM_ACC} + {L3_EXPREM_ACC}{PRE_SUM_ALL_PREM_ACC} รวมค่า {SUM_PREM_ACC} + {SUM_EXPREM_ACC}
- ส่วนของ Layer 2 และ 3 ที่ต้องคำนวณรายสมาชิก ภายใต้กรมธรรม์เดียวกัน โดยการไปค้นหาข้อมูลใน tx_stg_est_inforce_memberParameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameterทุนตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{L2_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_life {L3_INS_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_life {L2_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.sum_insured_accident{L3_INS_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.sum_insured_accidentเบี้ยตามความคุ้มครอง ตาม Layer ของแต่ละสมาชิก{PRE_L2_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_life{PRE_L3_PREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_life{PRE_L2_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L3_EXPREM_LIFE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_extra_life{PRE_L2_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L3_PREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc{PRE_L2_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_acc_extra{PRE_L3_EXPREM_ACC_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_acc_extraRate เบี้ย{L2_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_life{L3_PREM_LIFE_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_life อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_life{L2_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L2_MIN} และ {L2_MAX}tx_stg_est_inforce_member.prem_rate_acc{L3_PREM_ACC_RATE_BY_MEM}ถ้า tx_stg_est_inforce_member.sum_insured_accident อยู่ในช่วงของ {L3_MIN} และ {L3_MAX}tx_stg_est_inforce_member.prem_rate_acc
2. คำนวณ Premium Layer
- กรณีที่กรมธรรม์นั้นไม่มี Layer 2 และ Layer 3 หรือ กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} ไม่เท่ากับ 1 หรือ มี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} น้อยกว่าวันที่ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)คำนวณดังนี้ (ในกรณีที่ไม่มีทุนความคุ้มครองใน Layer ใด ไม่ต้องคำนวณใน Layer นั้น) (suthanee.sa 28/02/2026)Parameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}{PAY_TYPE} * ({L3_PREM_LIFE_RATE} / 1000) * ({L3_INS_LIFE} - ({L3_MEM_LIFE} * {L2_MAX})){L2_PREM_LIFE}{PAY_TYPE} * ({L2_PREM_LIFE_RATE} / 1000) * ({L2_INS_LIFE} - ({L2_MEM_LIFE} * {L1_MAX}) + ({L3_MEM_LIFE} * {L1_L2_MID})){L1_PREM_LIFE}{SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE}{L3_PREM_ACC}{PAY_TYPE} * ({L3_PREM_ACC_RATE} / 1000) * ({L3_INS_ACC} - ({L3_MEM_ACC} * {L2_MAX})){L2_PREM_ACC}{PAY_TYPE} * ({L2_PREM_ACC_RATE} / 1000) * ({L2_INS_ACC} - ({L2_MEM_ACC} * {L1_MAX}) + ({L3_MEM_ACC} * {L1_L2_MID})){L1_PREM_ACC}{SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC}
- กรณีที่กรมธรรม์นั้นมี Layer 2 หรือ Layer 3 และ {RATE_FLAG} เท่ากับ 1 และ {COV_FROM} มากกว่าเท่ากับวันที่ ใน cf_lookup_catalog.description ที่ cf_lookup_catalog.parent_id = 1003500 และ cf_lookup_catalog.lookup_key = CR_RATE_DATE (suthanee.sa 27/05/2026)คำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_TYPE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})) {L2_PREM_LIFE_BY_MEM}สมาชิกที่มีทุน Life อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_TYPE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}สมาชิกที่มีทุน ACC อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round({SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE},2){L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round({SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC},2)
- คำนวณรายสมาชิกก่อนParameter ค่าที่เก็บลง Parameter{L3_PREM_LIFE_BY_MEM} (({PAY_TYPE} * {L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM} - {L2_MAX}) / {L3_INS_LIFE_BY_MEM})) {L2_PREM_LIFE_BY_MEM}สมาชิกที่มีทุน Life อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_LIFE_BY_MEM}) * (({L2_INS_LIFE_BY_MEM} - {L1_MAX}) / {L2_INS_LIFE_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_LIFE_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_LIFE_BY_MEM}) / {L3_INS_LIFE_BY_MEM}){L3_PREM_ACC_BY_MEM} (({PAY_TYPE} * {L3_PREM_ACC_RATE_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) * (({L3_INS_ACC_BY_MEM} - {L2_MAX}) / {L3_INS_ACC_BY_MEM})){L2_PREM_ACC_BY_MEM}สมาชิกที่มีทุน ACC อยู่ใน Layer 3 ต้องถูกนำมาคิด Layer 2 ด้วย(({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / 1000)) + (({PAY_TYPE} * {PRE_L2_EXPREM_ACC_BY_MEM}) * (({L2_INS_ACC_BY_MEM} - {L1_MAX}) / {L2_INS_ACC_BY_MEM})) + (({PAY_TYPE} * {L2_PREM_ACC_RATE_BY_MEM}) * ({L1_L2_MID} / 1000)) + (({PAY_TYPE} * {PRE_L3_EXPREM_ACC_BY_MEM}) / {L3_INS_ACC_BY_MEM})
- รวมค่าเบี้ยของทุกสมาชิกเข้าด้วยกันParameterค่าที่เก็บลง Parameter{SUM_ALL_PREM_LIFE}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE},2){SUM_ALL_PREM_ACC}Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_ACC},2){L3_PREM_LIFE}Round(SUM{L3_PREM_LIFE_BY_MEM},2){L2_PREM_LIFE}Round(SUM{L2_PREM_LIFE_BY_MEM},2){L1_PREM_LIFE}Round({SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE},2){L3_PREM_ACC}Round(SUM{L3_PREM_ACC_BY_MEM},2){L2_PREM_ACC}Round(SUM{L2_PREM_ACC_BY_MEM},2){L1_PREM_ACC}Round({SUM_ALL_PREM_ACC} - {L2_PREM_ACC} - {L3_PREM_ACC},2)
3. คำนวณ RI Premium
- คำนวณดังนี้Parameterค่าที่เก็บลง Parameter{L1_RI_PREM_LIFE}Round(({L1_PER} × {L1_PREM_LIFE}) / 100, 2){L2_RI_PREM_LIFE}Round(({L2_PER} × {L2_PREM_LIFE}) / 100, 2){L3_RI_PREM_LIFE}Round(({L3_PER} × {L3_PREM_LIFE}) / 100, 2){L1_RI_PREM_ACC}Round(({L1_PER} × {L1_PREM_ACC}) / 100, 2){L2_RI_PREM_ACC}Round(({L2_PER} × {L2_PREM_ACC}) / 100, 2){L3_RI_PREM_ACC}Round(({L3_PER} × {L3_PREM_ACC}) / 100, 2){SUM_RI_PREM_LIFE}ผลรวมของ {L1_RI_PREM_LIFE} + {L2_RI_PREM_LIFE} + {L3_RI_PREM_LIFE}{SUM_RI_PREM_ACC}ผลรวมของ {L1_RI_PREM_ACC} + {L2_RI_PREM_ACC} + {L3_RI_PREM_ACC}
4. การคำนวณ RI Commission
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID} เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id = {CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI Comm ของแต่ละคน (suthanee.sa 26/02/2026){L1_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L1_TOT_PREM} , 2 ){L2_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L2_TOT_PREM} , 2 ){L3_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L3_TOT_PREM} , 2 )
- {L1_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L1_TOT_PREM} , 2 )
- {L2_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L2_TOT_PREM} , 2 )
- {L3_RI_COM_ACC} = Round(({RI_COM_RATE} / 100 ) × {L3_TOT_PREM} , 2 )
- คำนวณ RI Comm ของทุกคน (suthanee.sa 26/02/2026){L1_RI_COM_ACC} + {L2_RI_COM_ACC} + {L3_RI_COM_ACC}เก็บค่าลงใน {RI_COM_ACC}
- {L1_RI_COM_ACC} + {L2_RI_COM_ACC} + {L3_RI_COM_ACC}
- เก็บค่าลงใน {RI_COM_ACC}
3. คัดเลือกกรมธรรม์ (FALSE)
- ตรวจสอบค่า RI Commission Rate โดยนำ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ตรวจสอบใน cf_rig_treaty_cond_hdcf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ={CONDITION_ID}เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ={CONDITION_ID}
- เก็บค่า cf_rig_treaty_cond_hd.ri_com_rate ใน {RI_COM_RATE}
- คำนวณ RI CommissionParameterค่าที่เก็บลง Parameter{RI_COM_LIFE}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_LIFE}, 2){RI_COM_ACC}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_ACC}, 2)
- Parameterค่าที่เก็บลง Parameter{RI_COM_LIFE}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_LIFE}, 2){RI_COM_ACC}Round(({RI_COM_RATE} / 100) × {SUM_RI_PREM_ACC}, 2)
5. การคำนวณ RI Claim
1. ตรวจสอบ Config Treaty
- ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- กรณีที่ {POLICY_STATUS} = TRUEใช้เงื่อนไขข้อ 2
- ใช้เงื่อนไขข้อ 2
- กรณีที่ {POLICY_STATUS} = FALSEใช้เงื่อนไขข้อ 3
- ใช้เงื่อนไขข้อ 3
2. คัดเลือกกรมธรรม์ (TRUE)
1. ตรวจสอบข้อมูลกรมธรรม์รายการเคลม
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim และ tx_stg_est_tpd_claim และ tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย commaตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย commaตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_notx_stg_est_all_policy.policy_yeartx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_yeartx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800
- จากนั้นตรวจสอบกับเงื่อนไขของแต่ละกรมธรรม์โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมcf_rig_treaty_policy_hd.policy_notx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_nocf_rig_treaty_policy_hd.age_limittx_stg_est_death_claim.attn_age หรือ tx_stg_est_tpd_claim.attn_age หรือ tx_stg_est_health_claim.attn_age ต้องน้อยกว่าหรือเท่ากับ cf_rig_treaty_policy_hd.age_limitcf_rig_treaty_policy_hd.cert_no_incompliantกรณีที่มากกว่า cf_rig_treaty_policy_hd.age_limitให้ตรวจสอบ tx_stg_est_death_claim.certific_cust_no หรือ tx_stg_est_tpd_claim.certific_cust_no หรือ tx_stg_est_health_claim.cert_noว่ามีค่าอยู่ใน cf_rig_treaty_policy_hd.cert_no_incompliant หรือไม่โดยค่าใน cf_rig_treaty_policy_hd.cert_no_incompliant จะถูกเก็บมากกว่า 1 ค่า แบ่งด้วย comma
- ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 {POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_acc > 0{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_acc = 0
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{COM_DATE}หาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.first_date ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{PAY_TYPE}หาค่า tx_stg_est_all_policy .pay_type ด้วย tx_stg_est_death_claim.policy_no และ tx_stg_est_death_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_tpd_claim.policy_no และ tx_stg_est_tpd_claim.policy_yearหาค่า tx_stg_est_all_policy.pay_type ด้วย tx_stg_est_health_claim.policy_no และ tx_stg_est_health_claim.policy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{ACC_DATE}death_dateaccident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request (suthanee.sa 23/03/2026)dismemberment_insur_request (suthanee.sa 23/03/2026) {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){POLICY_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){REPORT_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.report_policy_status{RI_POL_STATUS}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){SALE_OPTION}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){SUM_INS_ACC}นำ {POLICY_NO} กับ {CERT_NO} ไปหาใน tx_stg_est_inforce_member.sum_insured_accident (suthanee.sa 05/03/2026){EXPIRE_DATE}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
2. ตรวจสอบ Layer
- กรณีชุดข้อมูล {POLIC_CLAIM_ACC_DEATH}
- ตรวจสอบ {SUM_INS_ACC} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_DISMEM}ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_TPD}ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
2. คำนวณ RI Claim
- คำนวณ SRกรณีที่สมาชิกรายนั้นอยู่ Layer 1 ให้กำหนดค่า {SR_ACC} = 0ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)กรณีที่สมาชิกรายนั้นอยู่ Layer 2 ให้คำนวณดังนี้{SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})กรณีที่สมาชิกรายนั้นอยู่ Layer 3 ให้คำนวณดังนี้{SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})(suthanee.sa 05/03/2026 (เปลี่ยน parameter {SUM_INS_ACC}))
- กรณีที่สมาชิกรายนั้นอยู่ Layer 1 ให้กำหนดค่า {SR_ACC} = 0ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)
- ไม่ต้องนำไปประมวลผลต่อ ในรายการนั้น (suthanee.sa 09/03/2025)
- กรณีที่สมาชิกรายนั้นอยู่ Layer 2 ให้คำนวณดังนี้{SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})
- {SR_ACC} = ({L2_PER} / 100) * ({SUM_INS_ACC} - {L1_INSU_MAX})
- กรณีที่สมาชิกรายนั้นอยู่ Layer 3 ให้คำนวณดังนี้{SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- {SR_ACC} = ({L3_PER} / 100) * ({SUM_INS_ACC} - {L2_INSU_MAX}) + ({L2_PER} / 100) * ({L2_INSU_MAX} - {L1_INSU_MAX})
- คำนวณ RI ClaimLayerParameter Layer 1{L1_RI_CLAIM_ACC_DEATH}({CLAIM_ACC} / {SUM_INS_ACC}) * {SR_ACC}Layer 2{L2_RI_CLAIM_ACC_DEATH}Layer 3{L3_RI_CLAIM_ACC_DEATH}Layer 1{L1_RI_CLAIM_DISMEM}({CLAIM_ACC} / {SUM_INS_DISMEM}) * {SR_ACC}Layer 2{L2_RI_CLAIM_DISMEM}Layer 3{L3_RI_CLAIM_DISMEM}Layer 1{L1_RI_CLAIM_TPD}({CLAIM_TPD} / {SUM_INS_TPD}) * {SR_ACC}Layer 2{L2_RI_CLAIM_TPD}Layer 3{L3_RI_CLAIM_TPD}
3. คำนวณ Claim Recovery
- คำนวณ Claim Recovery Parameter Layer 1{L1_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_ACC_DEATH}ผลรวมของ {L2_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_ACC_DEATH}ผลรวมของ {L3_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3Layer 1{L1_RE_CLAIM_DISMEM}ผลรวมของ {L1_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_DISMEM}ผลรวมของ {L2_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_DISMEM}ผลรวมของ {L3_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3Layer 1{L1_RE_CLAIM_TPD}ผลรวมของ {L1_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 1Layer 2{L2_RE_CLAIM_TPD}ผลรวมของ {L2_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 2Layer 3{L3_RE_CLAIM_TPD}ผลรวมของ {L3_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน ใน Layer 3
3. คัดเลือกกรมธรรม์ (FALSE)
1. ตรวจสอบข้อมูลกรมธรรม์รายการเคลม
- นำ {RE_CODE} ของ Treaty ที่กำลังประมวลผล ไปค้นหากรมธรรม์ที่ tx_stg_est_death_claim และ tx_stg_est_tpd_claim และ tx_stg_est_health_claim โดย{RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treatyดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- {RE_CODE} ต้องตรงกับตัวอักษร 2 ตัวแรกใน Field reinsured_noกรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treaty
- กรณีที่พบข้อมูลกรมธรรม์นั้นจะนำไปประมวลผลต่อนำข้อมูลไปค้นหาใน โดยค้นหาใน tx_stg_est_all_policyชุดข้อมูลการเคลมtx_stg_est_all_policy.policy_no tx_stg_est_death_claim.policy_no หรือ tx_stg_est_tpd_claim.policy_no หรือ tx_stg_est_health_claim.policy_no tx_stg_est_all_policy.policy_year tx_stg_est_death_claim.policy_year หรือ tx_stg_est_tpd_claim.policy_year หรือ tx_stg_est_health_claim.policy_year tx_stg_est_all_policy.ri_statusเท่ากับ cf_lookup_catalog.lookup_key ที่อยู่ในภายใต้ข้อมูล cf_lookup_catalog.parent_id = 1002800
- ตรวจสอบชุดข้อมูลของกรมธรรม์ที่ยังตรงเงื่อนไขชุดข้อมูลกรมธรรม์ที่เข้าเงื่อนไขเงื่อนไข{POLIC_CLAIM_ACC_DEATH}tx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_LIFE}tx_stg_est_death_claim.claim_acc = 0{POLIC_CLAIM_DISMEM}tx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 70{POLIC_CLAIM_TPD}tx_stg_est_tpd_claim.claim_type = "TPD"{POLIC_CLAIM_HEALTH}ทุกรายการที่ tx_stg_est_health_claim.reinsured_no ตรงกับ Treaty
- ดึงข้อมูลรายละเอียดของกรมธรรม์ที่ต้องไปประมวลผลต่อดังนี้ (สามารถพบได้มากกว่า 1 กรมธรรม์)ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ cf_rig_treaty_general.benefit ของแต่ละ Treaty ที่กำลังประมวลผล และดึงข้อมูลเคลมตามเฉพาะความคุ้มครองของ Treaty นั้นbenefit เงื่อนไขแต่ละความคุ้มครอง1Lifetx_stg_est_death_claim.claim_acc = 02TPD/Dismembermenttx_stg_est_tpd_claim.claim_type = "TPD"3Dismembermenttx_stg_est_tpd_claim.claim_type = "Dismemberment" และ tx_stg_est_tpd_claim.attn_age น้อยกว่าเท่ากับ 704Medicalทุกรายการใน tx_stg_est_health_claim5Accident Deathtx_stg_est_death_claim.claim_acc > 0 และ tx_stg_est_death_claim.attn_age น้อยกว่าเท่ากับ 70 benefit = 1 , 5benefit = 2 , 3benefit = 4parametertx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim{POLICY_NO}policy_no policy_nopolicy_no{POLICY_YEAR}policy_yearpolicy_yearpolicy_year{EFF_DATE}promise_datepromise_dateeffective_date{CERT_NO}certific_cust_nocertific_cust_nocert_no{ATT_AGE}attn_ageattn_ageage{SEX}sexsexsex{DEATH_DATE}death_date {ACC_DATE} accident_dateaccident_date{SUM_INS_LIFE}life_insur_request {SUM_INS_ACC}acc_insur_request {SUM_INS_DISMEM} dismemberment_insur_request {SUM_INS_TPD} tpd_insur_request {SUM_INS_HEALTH} med_insur{CLAIM_LIFE}claim_life {CLAIM_ACC}claim_accclaim_accident {CLAIM_TPD} claim_tpd {TOT_CLAIM}total_claimtotal_claimclaim_amount{OCC_CLASS}class_no {INVEST_EXPENSE}investigate_expenseinvestigation_expenseinvestigation_expense{PERIOD}เดือนและปีของ promise_date{CLOSING_PERIOD}เดือนและปีของรอบการประมวลผล{DATA_QUT}ปีและรอบ Quater ของเดือนที่ประมวลผล (suthanee.sa 17/02/2025){SALE_OPTION}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_option (suthanee.sa 26/02/2026){SALE_CHANEL}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.sale_channel_code (suthanee.sa 26/02/2026){PAY_TYPE}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.pay_type (suthanee.sa 27/02/2026){POLICY_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.status (suthanee.sa 18/03/2026){RI_POL_STATUS}นำ {POLICY_NO} และ {POLICY_YEAR} ไปหาใน tx_stg_est_all_policy.ri_status (suthanee.sa 18/03/2026){EXPIRE_DATE}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.expire_date (suthanee.sa 24/03/2026){F_RECIEPT}นำ {POLICY_NO} และ {EFF_DATE} ไปหาใน tx_stg_est_all_policy.f_receipt_date (suthanee.sa 24/03/2026)
- ตรวจสอบ Percentage Reinsurance ของแต่ละรายการเคลม (ตามระดับ Layer ของ Sum Assured ของสมาชิก)Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
- Parameterเงื่อนไขการค้นหา{CONDITION_ID}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_idที่รายการ cf_rig_treaty_cond_hd.status = "A"และ {EFF_DATE} ของรายการเคลมอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_to
- ดึงข้อมูลจาก cf_rig_treaty_cond_dt ที่ {CONDITION_ID} ตามที่ได้มาparameterเงื่อนไขการค้นหาค่าที่เก็บลง Parameter{L1_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L1cf_rig_treaty_cond_dt.minimum{L1_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L1_PER}cf_rig_treaty_cond_dt.percent_re{L2_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L2cf_rig_treaty_cond_dt.minimum{L2_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L2_PER}cf_rig_treaty_cond_dt.percent_re{L3_INSU_MIN}ภายใต้ {CONDITION_ID} ที่ได้จาก 1. ตรวจสอบ Treaty ที่ต้องประมวลผล และ {CONDITION_ID} = cf_rig_treaty_cond_dt.cf_rig_treaty_cond_hd_id และ cf_rig_treaty_cond_dt.layer = L3cf_rig_treaty_cond_dt.minimum{L3_INSU_MAX}cf_rig_treaty_cond_dt.maximum{L3_PER}cf_rig_treaty_cond_dt.percent_re{L1_L2_MID} {L2_INSU_MAX} - {L1_INSU_MAX}
2. ตรวจสอบ Layer
- กรณีชุดข้อมูล {POLIC_CLAIM_ACC_DEATH}
- ตรวจสอบ {SUM_INS_ACC} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_ACC} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_LIFE}
- ตรวจสอบ {SUM_INS_LIFE} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_LIFE} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_DISMEM}ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_DISMEM} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_DISMEM} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_TPD}ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_TPD} เพื่อแบ่ง LayerLayerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_TPD} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- กรณีชุดข้อมูล {POLIC_CLAIM_HEALTH}ตรวจสอบ {SUM_INS_HEALTH} เพื่อแบ่ง Layerกรณีมี treaty_code = DAI_Grp_Daiichi_Coins ให้ข้ามการตรวจสอบนี้ไป เพราะมีอยู่ภายใต้ Layer 1 เท่านั้น (suthanee.sa 20/02/2026)Layerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
- ตรวจสอบ {SUM_INS_HEALTH} เพื่อแบ่ง Layerกรณีมี treaty_code = DAI_Grp_Daiichi_Coins ให้ข้ามการตรวจสอบนี้ไป เพราะมีอยู่ภายใต้ Layer 1 เท่านั้น (suthanee.sa 20/02/2026)Layerเงื่อนไขการแบ่งLayer 1ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L1_INSU_MIN} และน้อยกว่าเท่ากับ {L1_INSU_MAX}Layer 2ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L2_INSU_MIN} และน้อยกว่าเท่ากับ {L2_INSU_MAX}Layer 3ถ้า {SUM_INS_HEALTH} มากกว่าเท่ากับ {L3_INSU_MIN} และน้อยกว่าเท่ากับ {L3_INSU_MAX}
2. คำนวณ RI Claim
- คำนวณ RI Claim ชุดข้อมูลParameter รายการเคลม Layer 1{POLIC_CLAIM_ACC_DEATH}{L1_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {CLAIM_ACC},2) {POLIC_CLAIM_LIFE}{L1_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {CLAIM_LIFE},2) {POLIC_CLAIM_DISMEM}{L1_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {CLAIM_ACC},2) {POLIC_CLAIM_TPD}{L1_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {CLAIM_TPD},2) {POLIC_CLAIM_HEALTH}{L1_RI_CLAIM_HEALTH}Round(({L1_PER} / 100) * {TOT_CLAIM},2) ใช้ค่า {CLAIM_ACC} จาก {POLIC_CLAIM_ACC_DEATH}ใช้ค่า {CLAIM_ACC} จาก {POLIC_CLAIM_DISMEM}{L1_RI_CLAIM_ADD}Round(({L1_PER} / 100) * ({CLAIM_ACC} + {CLAIM_ACC}),2) รายการเคลม Layer 2{POLIC_CLAIM_ACC_DEATH}{L2_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}),2) {POLIC_CLAIM_LIFE}{L2_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_LIFE} - {L1_INSU_MAX}),2) {POLIC_CLAIM_DISMEM}{L2_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_ACC} - {L1_INSU_MAX}),2) {POLIC_CLAIM_TPD}{L2_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * ({CLAIM_TPD} - {L1_INSU_MAX}),2) รายการเคลม Layer 3{POLIC_CLAIM_ACC_DEATH}{L3_RI_CLAIM_ACC_DEATH}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}),2) {POLIC_CLAIM_LIFE}{L3_RI_CLAIM_LIFE}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_LIFE} - {L2_INSU_MAX}),2) {POLIC_CLAIM_DISMEM}{L3_RI_CLAIM_DISMEM}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_ACC} - {L2_INSU_MAX}),2) {POLIC_CLAIM_TPD}{L3_RI_CLAIM_TPD}Round(({L1_PER} / 100) * {L1_INSU_MAX},2) + Round(({L2_PER} / 100) * {L1_L2_MID},2) + Round(({L3_PER} / 100) * ({CLAIM_TPD} - {L2_INSU_MAX}),2)
3. คำนวณ Claim Recovery
- คำนวณ Claim RecoveryParameter {L1_RE_CLAIM_LIFE}ผลรวมของ {L1_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_LIFE}ผลรวมของ {L2_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_LIFE}ผลรวมของ {L3_RI_CLAIM_LIFE} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_ACC_DEATH}ผลรวมของ {L2_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_ACC_DEATH}ผลรวมของ {L3_RI_CLAIM_ACC_DEATH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_DISMEM}ผลรวมของ {L1_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_DISMEM}ผลรวมของ {L2_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_DISMEM}ผลรวมของ {L3_RI_CLAIM_DISMEM} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RE_CLAIM_TPD}ผลรวมของ {L1_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L2_RE_CLAIM_TPD}ผลรวมของ {L2_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L3_RE_CLAIM_TPD}ผลรวมของ {L3_RI_CLAIM_TPD} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RI_CLAIM_HEALTH}ผลรวมของ {L1_RI_CLAIM_HEALTH} ทุกคนในกรมเดียวกันในปีเดียวกัน{L1_RI_CLAIM_ADD}ผลรวมของ {L1_RI_CLAIM_ADD} ทุกคนในกรมเดียวกันในปีเดียวกัน{RE_CLAIM_LIFE}ผลรวมของ {L1_RE_CLAIM_LIFE} + {L2_RE_CLAIM_LIFE} + {L3_RE_CLAIM_LIFE}{SUM_RE_CLAIM_ACC_DEATH}ผลรวมของ {L1_RE_CLAIM_ACC_DEATH} + {L2_RE_CLAIM_ACC_DEATH} + {L3_RE_CLAIM_ACC_DEATH}{SUM_RE_CLAIM_DISMEM}ผลรวมของ {L1_RE_CLAIM_DISMEM} + {L2_RE_CLAIM_DISMEM} + {L3_RE_CLAIM_DISMEM}{SUM_RE_CLAIM_TPD}ผลรวมของ {L1_RE_CLAIM_TPD} + {L2_RE_CLAIM_TPD} + {L3_RE_CLAIM_TPD}{RE_CLAIM_ACC}ผลรวมของ {SUM_RE_CLAIM_ACC_DEATH} + {SUM_RE_CLAIM_DISMEM}
6. Mapping Database
/*<![CDATA[*/
div.rbtoc1782955706232 {padding: 0px;}
div.rbtoc1782955706232 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955706232 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Table tx_rig_est_hd
- Table tx_rig_est_policy_hd
- Table tx_rig_est_policy_dt
- Table tx_rig_est_mem_dt
- Table tx_rig_est_bdr
- Table tx_rig_policy_base

##### Table tx_rig_est_hd
tx_rig_est_hd
| Field | เงื่อนไข | ตัวอย่าง |
| rig_est_hd_id | running no. | 1 |
| closing_period | {CLOSING_PERIOD} | 202410 |
| cf_reinsurer_id | cf_rig_treaty.cf_reinsurer_id ของ Treaty ที่กำลังประมวลผล |  |
| cf_treaty_id | cf_rig_treaty.cf_rig_treaty_id ของ Treaty ที่กำลังประมวลผล |  |
| treaty_code | {TREATY_CODE} จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล |  |
| status | เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" |  |
| edw_status | NULL |  |
| edw_status_desc | NULL |  |
| ri_std_hd_id | NULL |  |
| mps_status | NULL |  |
| mps_status_desc | NULL |  |
| ri_std_hd_id_oic | NULL |  |
| ri_premium | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| ri_commission | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| claim_recovery | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| due_to | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| usage_status | เมื่อสร้างรายการครั้งแรกให้บันทึก A |  |
| ri_method | {TREATY_CODE} จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล ค้นหาข้อมูลใน cf_rig_treatyนำ cf_rig_treaty.cf_rig_treaty_id ค้นหา cf_rig_treaty_cond_hd.ri_method ที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idแปลงค่า cf_rig_treaty_cond_hd.ri_method ที่ได้ โดยดูจาก Lookup ที่ cf_lookup_catalog.parent_id = 1000600 |  |
| sum_records | เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก |  |
| created_date | now() |  |
| created_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
| updated_date | NULL |  |
| updated_by | NULL |  |

##### Table tx_rig_est_policy_hd
tx_rig_est_policy_hd
Group ข้อมูลตาม policy_no , effective_date , data_quarter
| Field | เงื่อนไข |
| rig_est_policy_hd_id | running no. |
| rig_est_hd_id | tx_rig_est_hd.rig_est_hd_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| reinsurer_no | {RE_CODE_FULL} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| ri_com_date | {COM_DATE} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| effective_date | {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์{EFF_DATE} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claimในกรณีที่เป็น {POLICY_NO} เดียวกัน และมีค่า {COV_FROM} หรือ {EFF_DATE} เท่ากัน ไม่ต้องสร้างรายการเพิ่ม |
| mode_pay | {PAY_TYPE} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| policy_year | {POLICY_YEAR} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| period | {PERIOD} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| data_quarter | {DATA_QUT} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| policy_status | {POLICY_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| report_policy_status | {REPORT_POL_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| ri_policy_status | {RI_POL_STATUS} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| expire_date | {EXPIRE_DATE} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 24/03/2026) |
| f_receipt_date | {F_RECIEPT} 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 24/03/2026) |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |

##### Table tx_rig_est_policy_dt
tx_rig_est_policy_dt
| Field | เงื่อนไข |
| rig_est_policy_dt_id | running no. |
| rig_est_policy_hd_id | tx_rig_est_policy_hd.rig_est_policy_hd_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim |
| level | สร้างรายการ 3 รายการ เสมอL1L2L3 |
| ri_prem_life | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_LIFE} ถ้า = L2 ให้ใช้ {L2_RI_PREM_LIFE} ถ้า = L3 ให้ใช้ {L3_RI_PREM_LIFE} |
| ri_prem_acc | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_ACC} ถ้า = L2 ให้ใช้ {L2_RI_PREM_ACC} ถ้า = L3 ให้ใช้ {L3_RI_PREM_ACC} |
| ri_prem_load | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_LOAD}ถ้า = L2 ให้ใช้ {L2_RI_PREM_LOAD}ถ้า = L3 ให้ใช้ {L3_RI_PREM_LOAD} |
| ri_prem_tpd | 0 |
| ri_prem_ttd | 0 |
| ri_prem_medical | 0 |
| ri_prem_disc_ma | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_DISC_MA}ถ้า = L2 ให้ใช้ {L2_RI_PREM_DISC_MA}ถ้า = L3 ให้ใช้ {L3_RI_PREM_DISC_MA} |
| ri_prem_disc_gv | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_PREM_DISC_GV}ถ้า = L2 ให้ใช้ {L2_RI_PREM_DISC_GV}ถ้า = L3 ให้ใช้ {L3_RI_PREM_DISC_GV} |
| sum_disc | ได้จากขั้นตอน 3. การคำนวณ RI Premiumตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_SUM_DISC}ถ้า = L2 ให้ใช้ {L2_SUM_DISC}ถ้า = L3 ให้ใช้ {L3_SUM_DISC} |
| sum_ri_claim_life | ผลรวมของ tx_rig_est_mem_claim.ri_claim_life ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_add | ผลรวมของ tx_rig_est_mem_claim.ri_claim_add ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_dismem | ผลรวมของ tx_rig_est_mem_claim.ri_claim_dismem ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_acc_death | ผลรวมของ tx_rig_est_mem_claim.ri_claim_acc_death ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_tpd | ผลรวมของ tx_rig_est_mem_claim.ri_claim_tpd ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_ri_claim_med | ผลรวมของ tx_rig_est_mem_claim.ri_claim_med ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_life | ผลรวมของ tx_rig_est_mem_claim.re_claim_life ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_add | ผลรวมของ tx_rig_est_mem_claim.re_claim_add ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_dismem | ผลรวมของ tx_rig_est_mem_claim.re_claim_dismem ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_acc_death | ผลรวมของ tx_rig_est_mem_claim.re_claim_acc_death ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_tpd | ผลรวมของ tx_rig_est_mem_claim.re_claim_tpd ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| sum_re_claim_med | ผลรวมของ tx_rig_est_mem_claim.re_claim_med ทุกสมาชิกในกรมธรรม์เดียวกัน Layer เดียวกันและกรมธรรม์มี effective_date ตรงกัน |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |
|  |  |

##### Table tx_rig_est_mem_dt
tx_rig_est_mem_dt
| Field | เงื่อนไข |
| rig_est_mem_claim_id | running no. |
| rig_est_policy_dt_id | tx_rig_est_policy_dt.rig_est_policy_dt_id |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claim |
| event_date | {ACC_DATE} ที่ได้จากขั้นตอน 5. การคำนวณ RI Claim |
| ri_claim_life | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_LIFE}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_LIFE}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_LIFE} |
| ri_claim_add | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ADD} |
| ri_claim_dismem | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_DISMEM}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_DISMEM}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_DISMEM} |
| ri_claim_acc_death | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ACC_DEATH}ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_ACC_DEATH}ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_ACC_DEATH} |
| ri_claim_tpd | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_TPD} ถ้า = L2 ให้ใช้ {L2_RI_CLAIM_TPD} ถ้า = L3 ให้ใช้ {L3_RI_CLAIM_TPD} |
| ri_claim_med | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_HEALTH} |
| re_claim_life | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_LIFE}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_LIFE}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_LIFE} |
| re_claim_add | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_ADD} |
| re_claim_dismem | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_DISMEM}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_DISMEM} ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_DISMEM} |
| re_claim_acc_death | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_ACC_DEATH}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_ACC_DEATH}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_ACC_DEATH} |
| re_claim_tpd | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RE_CLAIM_TPD}ถ้า = L2 ให้ใช้ {L2_RE_CLAIM_TPD}ถ้า = L3 ให้ใช้ {L3_RE_CLAIM_TPD} |
| re_claim_med | ตรวจสอบ tx_rig_est_policy_dt.levelถ้า = L1 ให้ใช้ {L1_RI_CLAIM_HEALTH} |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |
|  |  |

##### Table tx_rig_est_bdr
tx_rig_est_bdr
ข้อมูลที่ tx_rig_est_hd.rig_est_hd_id เดียวกันทั้งหมด
Group ข้อมูลตาม tx_rig_est_policy_hd.policy_no , effective_date , data_quarter
|  |  |
| rig_est_bdr_id | running no. |
| rig_est_hd_id | tx_rig_est_hd .rig_est_hd_id |
| policy_no | tx_rig_est_policy_hd.policy_no |
| reinsurer_no | tx_rig_est_policy_hd.reinsurer_no |
| ri_com_date | tx_rig_est_policy_hd.ri_com_date |
| effective_date | tx_rig_est_policy_hd.effective_date |
| mode_pay | tx_rig_est_policy_hd.mode_pay |
| period | tx_rig_est_policy_hd.period |
| data_quarter | tx_rig_est_policy_hd.data_quarter |
| closing_period | tx_rig_est_hd.closing_period |
| ri_prem_life | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ Fix 0กรณีที่ {POLICY_STATUS} = FALSEใช้ ผลรวมของ tx_rig_est_policy_dt.ri_prem_life ทั้ง 3 Layer |
| ri_prem_acc | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ Round((ผลรวมของ tx_rig_est_policy_dt.ri_prem_acc ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.ri_prem_load ทั้ง 3 Layer) - (ผลรวมของ tx_rig_est_policy_dt.sum_disc ทั้ง 3 Layer) , 2)กรณีที่ {POLICY_STATUS} = FALSEใช้ ผลรวมของ tx_rig_est_policy_dt.ri_prem_acc ทั้ง 3 Layer |
| ri_comm_life | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ ใช้ Fix 0กรณีที่ {POLICY_STATUS} = FALSEใช้ {RI_COM_LIFE} ที่ได้จากขั้นตอน 4. การคำนวณ RI Commission |
| ri_comm_acc | {RI_COM_ACC} ที่ได้จากขั้นตอน 4. การคำนวณ RI Commission |
| ri_comm_tpd | Fix 0 |
| ri_comm_ttd | Fix 0 |
| ri_comm_medical | Fix 0 |
| ri_prem_1st_life | Fix 0 |
| ri_prem_1st_add | Fix 0 |
| ri_prem_1st_tpd | Fix 0 |
| ri_prem_1st_med | Fix 0 |
| ri_prem_1st_tot | Fix 0 |
| ri_prem_renew_life | Fix 0 |
| ri_prem_renew_add | Fix 0 |
| ri_prem_renew_tpd | Fix 0 |
| ri_prem_renew_med | Fix 0 |
| ri_prem_renew_tot | Fix 0 |
| event_date | tx_rig_est_mem_dt.event_date หากกรมธรรม์มีการเคลมมากกว่าหนึ่งรายการ ภายใต้ tx_rig_est_policy_hd.rig_est_policy_hd_id เดียวกัน ให้นำ tx_rig_est_mem_dt.event_date วันที่เกิดอุบัติเหตุ (Accident Date) ที่เก่าที่สุด ของสมาชิกในกรมธรรม์นั้น มาใช้เป็น Event Date |
| ri_claim_life | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_life ทั้ง 3 Layer |
| ri_claim_add | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer)กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) |
| ri_claim_tpd | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUE0กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer) |
| ri_claim_med | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_med ทั้ง 3 Layer |
| ri_claim_tot | ผลรวมของ tx_rig_est_bdr.ri_claim_life + tx_rig_est_bdr.ri_claim_add + tx_rig_est_bdr.ri_claim_tpd + tx_rig_est_bdr.ri_claim_med |
| recov_claim_life | ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_life ทั้ง 3 Layer |
| recov_claim_acc | ตรวจสอบ {POLICY_STATUS}กรณีที่ {POLICY_STATUS} = TRUEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_tpd ทั้ง 3 Layer)กรณีที่ {POLICY_STATUS} = FALSEใช้ (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_acc_death ทั้ง 3 Layer) + (ผลรวมของ tx_rig_est_policy_dt.sum_re_claim_dismem ทั้ง 3 Layer) |
| policy_year | tx_rig_est_policy_hd.policy_year |
| sale_option | {SALE_OPTION} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 26/02/2026) |
| sale_channel | {SALE_CHANEL} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ หรือ 5. การคำนวณ RI Claim (suthanee.sa 26/02/2026) |
| created_date |  |
| created_by |  |
| updated_date |  |
| updated_by |  |

##### Table tx_rig_policy_base
tx_rig_policy_base
- บันทึกเฉพาะกรมธรรม์ที่ยังไม่เคยถูกบันทึกเท่านั้น โดยตรวจสอบจาก policy_no, policy_year และ ri_commencement_date
- ตามเงื่อนไขการประมวลผล กรมธรรม์ Treaty PA จะมี policy_year = 1 เสมอ เนื่องจากเปลี่ยนเลขกรมธรรม์ทุกปี
| No. | Field | Description | Data Source | Example |
| 1 | rig_policy_base_id | เลขที่ Running |  |  |
| 2 | policy_no | เลขที่กรมธรรม์ | tx_rig_est_policy_hd.policy_no |  |
| 3 | policy_year | ปีกรมธรรม์ | tx_rig_est_policy_hd.policy_year |  |
| 4 (suthanee.sa 25/02/2026) | policy_status | สถานะของกรมธรรม์ประกันกลุ่ม | tx_rig_est_policy_hd.policy_status |  |
| 5 | treaty_code | รหัสสัญญาบริษัทประกันภัยต่อ | tx_rig_est_hd.treaty_code |  |
| 6 (suthanee.sa 25/02/2026) | ri_status | สถานะการส่งประกันภัยต่อ | tx_rig_est_policy_hd.ri_policy_status |  |
| 7 | ri_commencement_date | วันเริ่มสัญญาประกันภัยต่อ | tx_rig_est_policy_hd.effective_date (suthanee.sa 26/02/2026) |  |
| 8 | period | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | tx_rig_est_hd.closing_period |  |
| 9 | created_date | วันที่บันทึกรายการ |  |  |
| 10 | created_by | ผู้บันทึกรายการ |  |  |
| 11 | updated_date | วันที่ปรับปรุงรายการ |  |  |
| 12 | updated_by | ผู้ปรับปรุงรายการ |  |  |
7. ประมวลผล Estimate SOA

### เงื่อนไขในการประมวลผล SOA
Mapping SOA Report
เงื่อนไขในการดึงข้อมูลหลัก
tx_rig_est_soa_hd
| Field | เงื่อนไข |
| rig_est_soa_hd_id | running no. |
| rig_est_hd_id | id ของ tx_rig_est_hd |
| period | แยกตามรายการ tx_rig_est_policy_hd.period ที่เกิดขึ้นภายใต้ tx_rig_est_hd ของ closing_period นั้น |
| total_profit_comm | Fix 0 |
| net_balance_due_to_reinsurer | Fix 0 |
tx_rig_est_soa_dt
ในกรณีที่ค่า numeric ทุกค่าเป็น 0 ไม่ต้องลงข้อมูลเพื่อไม่ให้ออก Sheet SOA
| Field | เงื่อนไข |
| rig_est_soa_dt_id | running no. |
| rig_est_soa_hd_id | id ของ tx_rig_est_soa_hd |
| prem_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_prem_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_prem_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_new_tpd | 0 |
| prem_new_ttd | 0 |
| prem_new_medical | 0 |
| prem_new_total | ผลรวมของ tx_rig_est_soa_dt.(prem_new_life + prem_new_add + prem_new_tpd + prem_new_ttd + prem_new_medical) |
| prem_renew_1y_life | Fix 0 |
| prem_renew_1y_add | Fix 0 |
| prem_renew_1y_tpd | Fix 0 |
| prem_renew_1y_ttd | Fix 0 |
| prem_renew_1y_medical | Fix 0 |
| prem_renew_1y_total | Fix 0 |
| prem_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_prem_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_prem_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| prem_renew_tpd | 0 |
| prem_renew_ttd | 0 |
| prem_renew_medical | 0 |
| prem_renew_total | ผลรวมของ tx_rig_est_soa_dt.(prem_renew_life + prem_renew_add + prem_renew_tpd + prem_renew_ttd + prem_renew_medical) |
| comm_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_tpd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_tpd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_ttd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_ttd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_medical | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_comm_medical** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_new_total | ผลรวมของ tx_rig_est_soa_dt.(comm_new_life + comm_new_add + comm_new_tpd + comm_new_ttd + comm_new_medical) |
| comm_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_life** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_acc** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_tpd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_tpd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_ttd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_ttd** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_medical | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_comm_medical** SUM ทุกรายการที่อยู่ภายใต้ Period เดียวกัน ** |
| comm_renew_total | ผลรวมของ tx_rig_est_soa_dt.(comm_renew_life + comm_renew_add + comm_renew_tpd + comm_renew_ttd + comm_renew_medical) |
| prem_refund_new_life | Fix 0 |
| prem_refund_new_add | Fix 0 |
| prem_refund_new_tpd | Fix 0 |
| prem_refund_new_ttd | Fix 0 |
| prem_refund_new_medical | Fix 0 |
| prem_refund_new_total | Fix 0 |
| prem_refund_renew_life | Fix 0 |
| prem_refund_renew_add | Fix 0 |
| prem_refund_renew_tpd | Fix 0 |
| prem_refund_renew_ttd | Fix 0 |
| prem_refund_renew_medical | Fix 0 |
| prem_refund_renew_total | Fix 0 |
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
| comm_refund_new_life | Fix 0 |
| comm_refund_new_add | Fix 0 |
| comm_refund_new_tpd | Fix 0 |
| comm_refund_new_ttd | Fix 0 |
| comm_refund_new_medical | Fix 0 |
| comm_refund_new_total | Fix 0 |
| comm_refund_renew_life | Fix 0 |
| comm_refund_renew_add | Fix 0 |
| comm_refund_renew_tpd | Fix 0 |
| comm_refund_renew_ttd | Fix 0 |
| comm_refund_renew_medical | Fix 0 |
| comm_refund_renew_total | Fix 0 |
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
| claim_new_life | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_life**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_add | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_add**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_tpd | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_tpd**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_ttd | Fix 0 |
| claim_new_medical | ถ้า tx_rig_est_bdr.policy_year = 1tx_rig_est_bdr.ri_claim_med**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_new_total | ผลรวมของ tx_rig_est_soa_dt.(claim_new_life + claim_new_add + claim_new_tpd + claim_new_ttd + claim_new_medical) |
| claim_renew_life | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_life**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_add | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_add**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_tpd | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_tpd**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_ttd | Fix 0 |
| claim_renew_medical | ถ้า tx_rig_est_bdr.policy_year > 1tx_rig_est_bdr.ri_claim_med**รวมรายการทุก period ใส่ไว้ในรายการที่มี period เท่ากับ closing_period ส่วน period อื่นให้ใส่ 0****ในกรณีที่ไม่มีรายการใดที่มี period เท่ากับ closing_period เลย แต่มีรายการเคลม ต้องสร้างชีทรองรับ closing_period เสมอ เพื่อออกรายการเคลมให้ถูกต้อง** |
| claim_renew_total | ผลรวมของ tx_rig_est_soa_dt.(claim_renew_life + claim_renew_add + claim_renew_tpd + claim_renew_ttd + claim_renew_medical) |
| claim_exp_investigation_fee | Fix 0 |
| claim_exp_legal_fee | Fix 0 |
| claim_exp_med | Fix 0 |
| claim_exp_total | Fix 0 |
| revival_prem_new_life | Fix 0 |
| revival_prem_new_add | Fix 0 |
| revival_prem_new_tpd | Fix 0 |
| revival_prem_new_ttd | Fix 0 |
| revival_prem_new_medical | Fix 0 |
| revival_prem_new_total | Fix 0 |
| revival_prem_renew_life | Fix 0 |
| revival_prem_renew_add | Fix 0 |
| revival_prem_renew_tpd | Fix 0 |
| revival_prem_renew_ttd | Fix 0 |
| revival_prem_renew_medical | Fix 0 |
| revival_prem_renew_total | Fix 0 |
| admin_comm_remittance | Fix 0 |
| experience_refund_share | Fix 0 |
| profit_comm | Fix 0 |
| sub_total_due_to_reinsurer | tx_rig_est_soa_dt.(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_new_total + comm_refund_renew_life + comm_refund_renew_total + comm_refund_new_claim_total + comm_refund_renew_claim_total + revival_prem_new_total + revival_prem_renew_total) |
| due_to_reinsurer | ถ้า sub_total_due_from_reinsurer < sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_to_reinsurer - sub_total_due_from_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
| sub_total_due_from_reinsurer | tx_rig_est_soa_dt.(comm_new_total + comm_renew_total + prem_refund_new_total + prem_refund_renew_total + prem_refund_new_claim_total + prem_refund_renew_claim_total + claim_new_total + claim_renew_total + claim_exp_total) |
| due_from_reinsurer | ถ้า sub_total_due_from_reinsurer > sub_total_due_to_reinsurerใหัมีค่าเท่ากับ sub_total_due_from_reinsurer - sub_total_due_to_reinsurerนอกเหนือจากนั้นให้มีค่าเป็น 0 |
จากนั้นให้อัปเดทข้อมูลที่ tx_rig_est_soa_hd
| Field | สูตรคำนวณ |
| tx_rig_est_soa_hd.net_balance_due_to_reinsurer | tx_rig_est_soa_dt.sub_total_due_to_reinsurer - tx_rig_est_soa_dt.sub_total_due_from_reinsurer |
8. Mapping Output File
Estimate BDR
สร้างไฟล์ Export BDR
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_Daiichi_{YYYY}{MM} | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Dai-ichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-1 ตัวอย่าง output file - Estimate Daiichi |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | DG. No. |  | tx_rig_est_bdr | reinsurer_no | left |  |
| 3 | Comm. Date |  | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 4 | Eff.Date | วันที่คุ้มครอง | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 5 | Mode of Payment | ประเภทการชำระเบี้ยประกันภัย | tx_rig_est_bdr | mode_pay | left | Quarterly |
| 6 | 1st RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_1st_life | right | 1,000.15 |
| 7 | 1st RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_1st_add | right | 1,000.15 |
| 8 | 1st RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_1st_tpd | right | 1,000.15 |
| 9 | 1st RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_1st_med | right | 1,000.15 |
| 10 | 1st RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_1st_tot | right | 1,000.15 |
| 11 | Renewal RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_renew_life | right | 1,000.15 |
| 12 | Renewal RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_renew_add | right | 1,000.15 |
| 13 | Renewal RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_renew_tpd | right | 1,000.15 |
| 14 | Renewal RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_renew_med | right | 1,000.15 |
| 15 | Renewal RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_renew_tot | right | 1,000.15 |
| 16 | RI Claim Life | เคลมชีวิต | tx_rig_est_bdr | ri_claim_life | right | 300,000.00 |
| 17 | RI Claim AD&D | เคลมอุบัติเหตุ | tx_rig_est_bdr | ri_claim_add | right | 300,000.00 |
| 18 | RI Claim TPD | เคลมอุบัติเหตุทุพลภาพ | tx_rig_est_bdr | ri_claim_tpd | right |  |
| 19 | RI Claim Med | เคลมสุขภาพ | tx_rig_est_bdr | ri_claim_med | right | 300,000.00 |
| 20 | RI Claim Total | เคลมทั้งหมด | tx_rig_est_bdr | ri_claim_tot | right |  |
| 21 | Data Quarter |  | tx_rig_est_bdr | data_quarter | center | 2018Q4 |
| 22 | RI Period | รอบประมวลผล | tx_rig_est_bdr | period | center | 201812 |
| 23 | Closing Period | Period ตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = THREL_Grp_PA
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
{TREATY_CODE} = GIB_Grp_Direct_EB
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_GIB_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-6 ตัวอย่าง output file - Estimate GIB |
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |
Estimate SOA
1. เงื่อนไขการสร้างไฟล์ของ Treaty
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
DAI_Grp_Daiichi_Coins
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401
- YYYYMM = Closing Period
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
|  |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Dai-Ichi Life Insurance Company Limited |  |
| {#005} | Group Reinsurance |  |
| {#006} | July 12, 2006 |  |
A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA File
SOA_Est_Daiichi_YYYYMM
{TREATY_CODE} = THREL_Grp_PA
THREL_Grp_PA
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Thaire_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
ระบบจะแยกชีท SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Period
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional Group PA with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd.periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | Thaire Life Assurance Public Co., Ltd. |  |
| {#005} | Group PA |  |
| {#006} | January 1, 2013 |  |
A09-9 ตัวอย่าง output file - Thaire - Estimate SOA File
SOA_Est_Thaire_YYYYMM
{TREATY_CODE} = GIB_Grp_Direct_EB
GIB_Grp_Direct_EB
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_GIB_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
- ชื่อชีท "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional EB Group with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd .periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Gibraltar Life Insurance Co., Ltd. |  |
| {#005} | Group Reinsurance Business (EB Group) |  |
| {#006} | January 1, 2017 |  |
A09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileSOA_Est_GIB_YYYYMM
2. Mapping File
| DUE TO REINSURER (Cr.) | DUE FROM REINSURER (Dr.) |
| Reinsurance premium : | New Business | - LIFE | prem_new_life | Commission : | 1 st yr. | - LIFE | comm_new_life |
|  |  | - AD&D | prem_new_add |  |  | - AD&D | comm_new_add |
|  |  | - TPD | prem_new_tpd |  |  | - TPD | comm_new_tpd |
|  |  | - TTD | prem_new_ttd |  |  | - TTD | comm_new_ttd |
|  |  | - MEDICAL | prem_new_medical |  |  | - MEDICAL | comm_new_medical |
|  | TOTAL | prem_new_total |  | TOTAL | comm_new_total |
|  | Renewal Business | - LIFE | prem_renew_1y_life |  | Renewal | - LIFE | comm_renew_life |
|  | (1 st yr.) | - AD&D | prem_renew_1y_add |  |  | - AD&D | comm_renew_add |
|  |  | - TPD | prem_renew_1y_tpd |  |  | - TPD | comm_renew_tpd |
|  |  | - TTD | prem_renew_1y_ttd |  |  | - TTD | comm_renew_ttd |
|  |  | - MEDICAL- | prem_renew_1y_medical |  |  | - MEDICAL | comm_renew_medical |
|  | TOTAL | prem_renew_1y_total |  | TOTAL | comm_renew_total |
|  | Renewal Business | - LIFE | prem_renew_life | Premium Refund : | 1 st yr. | - LIFE | prem_refund_new_life |
|  | (Renewal) | - AD&D | prem_renew_add |  |  | - AD&D | prem_refund_new_add |
|  |  | - TPD | prem_renew_tpd |  |  | - TPD | prem_refund_new_tpd |
|  |  | - TTD | prem_renew_ttd |  |  | - TTD | prem_refund_new_ttd |
|  |  | - MEDICAL | prem_renew_medical |  |  | - MEDICAL | prem_refund_new_medical |
|  | TOTAL | prem_renew_total |  | TOTAL | prem_refund_new_total |
| Commission Refund : | 1 st yr. | - LIFE | comm_refund_new_life |  | Renewal | - LIFE | prem_refund_renew_life |
|  |  | - AD&D | comm_refund_new_add |  |  | - AD&D | prem_refund_renew_add |
|  |  | - TPD | comm_refund_new_tpd |  |  | - TPD | prem_refund_renew_tpd |
|  |  | - TTD | comm_refund_new_ttd |  |  | - TTD | prem_refund_renew_ttd |
|  |  | - MEDICAL | comm_refund_new_medical |  |  | - MEDICAL | prem_refund_renew_medical |
|  | TOTAL | comm_refund_new_total |  | TOTAL | prem_refund_renew_total |
|  | Renewal | - LIFE | comm_refund_renew_life |  | 1 st yr. Claim | - LIFE | prem_refund_new_claim_life |
|  |  | - AD&D | comm_refund_renew_add |  |  | - AD&D | prem_refund_new_claim_add |
|  |  | - TPD | comm_refund_renew_tpd |  |  | - TPD | prem_refund_new_claim_tpd |
|  |  | - TTD | comm_refund_renew_ttd |  |  | - TTD | prem_refund_new_claim_ttd |
|  |  | - MEDICAL | comm_refund_renew_medical |  |  | - MEDICAL | prem_refund_new_claim_medical |
|  | TOTAL | comm_refund_renew_total |  | TOTAL | prem_refund_new_claim_total |
|  | 1 st yr. Claim | - LIFE | comm_refund_new_claim_life |  | Renewal Claim | - LIFE | prem_refund_renew_claim_life |
|  |  | - AD&D | comm_refund_new_claim_add |  |  | - AD&D | prem_refund_renew_claim_add |
|  |  | - TPD | comm_refund_new_claim_tpd |  |  | - TPD | prem_refund_renew_claim_tpd |
|  |  | - TTD | comm_refund_new_claim_ttd |  |  | - TTD | prem_refund_renew_claim_ttd |
|  |  | - MEDICAL | comm_refund_new_claim_medical |  |  | - MEDICAL | prem_refund_renew_claim_medical |
|  | TOTAL | comm_refund_new_claim_total |  | TOTAL | prem_refund_renew_claim_total |
|  | Renewal Claim | - LIFE | comm_refund_renew_claim_life | Claim : | 1 st yr. | - LIFE | claim_new_life |
|  |  | - AD&D | comm_refund_renew_claim_add |  |  | - AD&D | claim_new_add |
|  |  | - TPD | comm_refund_renew_claim_tpd |  |  | - TPD | claim_new_tpd |
|  |  | - TTD | comm_refund_renew_claim_ttd |  |  | - TTD | claim_new_ttd |
|  |  | - MEDICAL | comm_refund_renew_claim_medical |  |  | - MEDICAL | claim_new_medical |
|  | TOTAL | comm_refund_renew_claim_total |  | TOTAL | claim_new_total |
| Revival Premiums | 1 st yr. | - LIFE | revival_prem_new_life |  | Renewal | - LIFE | claim_renew_life |
|  |  | - AD&D | revival_prem_new_add |  |  | - AD&D | claim_renew_add |
|  |  | - TPD | revival_prem_new_tpd |  |  | - TPD | claim_renew_tpd |
|  |  | - TTD | revival_prem_new_ttd |  |  | - TTD | claim_renew_ttd |
|  |  | - MEDICAL | revival_prem_new_medical |  |  | - MEDICAL | claim_renew_medical |
|  | TOTAL | revival_prem_new_total |  | TOTAL | claim_renew_total |
|  | Renewal | - LIFE | revival_prem_renew_life |  | Claim Expenses | - INVESTIGATION FEE | claim_exp_investigation_fee |
|  |  | - AD&D | revival_prem_renew_add |  |  | - LEGAL FEE | claim_exp_legal_fee |
|  |  | - TPD | revival_prem_renew_tpd |  |  | - MEDICAL EVIDENCE | claim_exp_med |
|  |  | - TTD | revival_prem_renew_ttd |  | TOTAL | claim_exp_total |
|  |  | - MEDICAL | revival_prem_renew_medical | Admin. Commission (Remittance) : | admin_comm_remittance |
|  | TOTAL | revival_prem_renew_total | Experience Refund Share : | experience_refund_share |
|  | Profit Commission : | profit_comm |
| SUB TOTAL | sub_total_due_to_reinsurer | SUB TOTAL | sub_total_due_from_reinsurer |
| DUE TO REINSURER | due_to_reinsurer | DUE FROM REINSURER | due_from_reinsurer |
9. เก็บข้อมูล Export File
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
10. แจ้งผลการการประมวลผล
1. Update ผลการประมวลผล
tx_rig_est_hd
หลังการประมวลผลเสร็จสิ้น ให้อัปเดทข้อมูลดังนี้
| Field | เงื่อนไข | ตัวอย่าง |
| status | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" | SUCCESS |
| ri_premium | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_prem_life + ri_prem_acc) * -1 กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท(บันทึกเป็นค่าติดลบ suthanee.sa 06/03/2026) | 100000 |
| ri_commission | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_comm_life + ri_comm_acc) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| claim_recovery | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ tx_rig_est_bdr(ri_claim_life + ri_claim_med + recov_claim_acc + ri_claim_tpd (suthanee.sa 25/03/2026)) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| due_to | กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึกผลรวมของ sum(ri_premium, ri_commission, claim_recovery) กรณีประมวลผลไม่สำเร็จ ไม่ต้องอัปเดท | 100000 |
| remark | กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง |  |
| sum_records | นับจำนวนรายการที่เกิดขึ้นใน tx_rig_est_bdr | 100 |
| updated_date | now() |  |
| updated_by | เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM |  |
2. Template Email
1. เตรียมข้อมูลก่อนส่งอีเมล
| Parameter | Description | Data source | Display | Example |
| $runningNo | ลำดับของรายการ |  | จำนวนรายการ Group ตาม tx_stg_error_data.process_code เฉพาะรายการที่tx_stg_error_data.rig_est_hd_id เท่ากับ tx_rig_est_hd.rig_est_hd_id (suthanee.sa 26/02/2026)และ tx_stg_error_data.treaty_code เท่ากับ tx_rig_est_hd.treaty_code | 1 |
| $closingPeriod | งวดของการประมวลผลข้อมูล | tx_rig_est_hd.closing_period | YYYY/MM | 2022/01 |
| $status | ผลการประมวลผล | tx_rig_est_hd .status | ถ้า = SUCCESS ให้แสดง "ประมวลผลสำเร็จ"ถ้า = ERROR ให้แสดง "ประมวลไม่ผลสำเร็จ" | ประมวลผลสำเร็จ |
| $treaty | รหัสสัญญา | tx_rig_est_hd.treaty_code | treaty_code | THREL_Grp_PA |
| $processName | ชื่อของ Process | ms_rig_process.process_name | นำ tx_stg_error_data.process_code ที่ได้ ไปค้นหาใน ms_rig_process.process_code แล้วนำค่า ms_rig_process.process_name มาแสดง | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty |
| $countErr | จำนวนรายการที่ถูกนำออกจากการประมวลผล |  | นับจำนวนรายการที่เกิดขึ้นโดย Group ตาม tx_stg_error_data.process_code |  |
| $sumCountErr | จำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด |  | รวมจำนวนรายการที่เกิดขึ้นทั้งหมดของ $countErr |  |
| $ProcessText | ข้อความสำหรับกรณีมีรายการถูกนำออก |  | ถ้า $countErr > 0 ให้แสดง "แยกตาม Process ได้ดังนี้"ถ้า $countErr = 0 ไม่ต้องแสดง |  |
| $UpdateDate | วันและเวลาที่ประมวลผลเสร็จ | tx_rig_est_hd.updated_date |  |  |
| $PathKey | ตำแหน่งที่ตั้งไฟล์ | tx_rig_path_key.path_key | ที่ tx_rig_path_key.rig_hd_id = tx_rig_est_hd.rig_est_hd_id |  |
2. ข้อมูลในการส่งอีเมล
นำ email_code = "RIG_Process_Estimate" มาค้นหาที่ตาราง cf_email โดยเทียบกับ cf_email.email_code
<![CDATA[SELECT email_subject, email_from, email_to, email_cc
FROM cf_email
WHERE email_code = (:emailCode)
AND status = 'A']]>
นำข้อมูลที่ได้มาแสดงตาม Template ดังนี้
| Estimate |
| From | cf_email.email_from |
| To | cf_email.email_from |
| CC | cf_email.email_cc |
| Subject | cf_email.email_subject $closingPeriod Treaty $treaty |
| Detail | เรียน ทีมประกันภัยต่อ ผู้เกี่ยวข้องส่วนประกันภัยต่อ (suthanee.sa 31/03/2026)แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : $closingPeriodวัน เวลา ที่ประมวลผล : $UpdateDate (ในรูปแบบ <DD/MM/YYYY (พ.ศ.) HH:MM:SS (24hr.)>) สถานะการประมวลผล : $statusตำแหน่ง File : $PathKey (suthanee.sa 05/03/2026) ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด $sumCountErr รายการ $ProcessTextลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก$runningNo$treaty$processName$countErr |
| FROM | appservice@ocean.co.th |
| TO | ITSupport@ocean.co.th |
| CC |  |
| SUBJECT | [Group RI] ผลการนำเข้าข้อมูลและการประมวลผล Estimate ประจำเดือน 202506 Treaty GIB_Grp_Direct_EB |
| DESCRIPTION | เรียน ผู้เกี่ยวข้องส่วนประกันภัยต่อ แจ้งผลการดำเนินการประมวลผล Estimate มีรายละเอียดดังนี้ช่วงประมวลผลข้อมูล : 202506วัน เวลา ที่ประมวลผล : 18/02/2026 11:17:17สถานะการประมวลผล : ประมวลผลสำเร็จ ตรวจพบจำนวนรายการที่ถูกนำออกจากการประมวลผลทั้งหมด 14 รายการ แยกตาม Process ได้ดังนี้ลำดับที่Treaty CodeProcess Nameจำนวนรายการที่ถูกนำออก1THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty12THREL_Grp_PAนำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี23THREL_Grp_PAนำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล14THREL_Grp_PAข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย55THREL_Grp_PAจัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member16THREL_Grp_PAประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น37THREL_Grp_PAประมวลผล Estimate1 จึงเรียนมาเพื่อทราบGroup RI |
고전파0 - SOOP


===== PAGE 1313899154 | Functional Specification > 02. Process Specification. > RIG-PS-06 ประมวลผล Estimate > กระบวนการบันทึก Error หรือการตัดรายการประมวลผลออกในขั้นตอน Estimate =====
2. เงื่อนไขการบันทึกลง tx_stg_error_data
| Field | ข้อมูลที่บันทึก | ตัวอย่าง |
| process_code | EST_MAIN_PROCESS | EST_MAIN_PROCESS |
| period | {CLOSING_PERIOD} ที่ได้จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล | 202512 |
| treaty_code | {TREATY_CODE} ที่ได้จากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล | GIB_Grp_Direct_EB |
| snap_table | NULL |  |
| stg_table | NULL |  |
| policy_no | {POLICY_NO} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ | GH1663 |
| promise_date | {COV_FROM} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ | 2023-08-11 |
| policy_year | {POLICY_YEAR} ที่ได้จากขั้นตอน 2. การคัดเลือกกรมธรรม์ | 18 |
| cer_no | tx_stg_est_inforce_member.cer_no ที่ได้จากขั้นตอน 3. การคำนวณ RI Premium | 1 |
| inform_no |  |  |
| err_desc | เหตุผลกรณีไม่ผ่านการ validateนำค่าไปตรวจสอบใน cf_lookup_catalog.parent_id = 1002900 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วบันทึก cf_lookup_catalog.description | ไม่พบข้อมูลที่ Snapshot |
| err_field | NULL |  |


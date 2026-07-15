# Process ข้อมูล (R01) List of inforce by member (Estimate)

> **Source:** [http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1299022576](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1299022576) (pageId=1299022576)
> **Breadcrumb:** Functional Specification > 02. Process Specification > RIG-PS-04 Estimate - Staging Tables > Batch EST-005 ข้อมูล (R01) List of inforce by member > Process ข้อมูล (R01) List of inforce by member (Estimate)
> **Refreshed:** 2026-07-08 (Confluence RDSGRI "New Group RI")
> **Tables:** 2 | **Text length:** 11231

---

[ Overview ] [ Protocol ] [ Operation ] [ Input ] [ Process ] [ Output ] [ Exception ]

### Overview

<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก DataOne (SQLServer)>

### Protocol

Icon

<SOAP,HESSIAN,REST>

### Operation

refer : ESB WebService Design Pattern

Icon

TYPE : <inquiry,bulk,delete,update,add>

<ชื่อ operation>

### Input

-

### Process

| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| --- | --- | --- | --- | --- |
| ข้อมูลกรมธรรม์ |  |  |  |  |
| 1 | group ri | tx_est_snap_cert_inforce | ข้อมูลสมาชิกในกรมธรรม์ประกันกลุ่ม | tx_est_snap_cert_inforce.status_member in ('I','B') tx_est_snap_cert_inforce.lot_no = 1 (ข้อมูลต้นสัญญาสำหรับใบเสร็จใบแรก) |
| 2 | group ri | tx_est_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_est_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" tx_est_snap_policy.promise_date |
| 3 | group ri | tx_est_snap_prem_rate | ข้อมูลอัตราเบี้ย | x_est_snap_prem_rate.policy_no tx_est_snap_prem_rate.policy_year |

1. ดึงข้อมูลจาก tx_est_snap_policy เฉพาะ tx_est_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26 เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญา ใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501' ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
2. ดึงข้อมูลรายสมาชิกปัจจุบันจาก tx_est_snap_cert_inforce โดย left join ด้วยเงื่อนไข tx_est_snap_policy.policy_no = tx_est_snap_cert_inforce.policy_no tx_est_snap_policy.policy_year = tx_est_snap_cert_inforce.policy_year กรองเงื่อนไข สถานะสมาชิกมีผลที่ tx_est_snap_cert_inforce.status_member in ('I','B')  และเลือกข้อมูลต้นสัญญา: tx_est_snap_cert_inforce.lot_no = 1 กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26 โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
3. กรณี rate_flag = 1 ดึงข้อมูลอัตราเบี้ยจาก tx_est_snap_prem_rate  --07/05/26 โดย left join ด้วยเงื่อนไข tx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_no tx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year

### Output

<แสดงข้อมูลที่ได้รับจาก external service นี้>

| No. | Name | Description | Input | Type (Source) | Size | Output tx_stg_est_inforce_member | รูปแบบการบันทึก | Example |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Period | Period ตามรอบประมวลผล | tx_est_snap_policy.period | numeric | 6 | period | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_est_snap_cert_inforce.policy_no | varchar | 20 | policy_no |  |  |
| 3 | PromiseDate | วันที่คุ้มครอง | tx_est_snap_cert_inforce.promise_date | datetime |  | promise_date | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_policy.policy_year | numeric | 4 | policy_year |  | 1 |
| 5 | CertNo | หมายเลขสมาชิก | tx_est_snap_cert_inforce.cer_no | varchar | 20 | cer_no |  | 1 |
| 6 | Sex | เพศ | tx_est_snap_cert_inforce.sex | varchar | 1 | sex | แปลงค่าจาก tx_est_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | M |
| 7 | Age | อายุ | tx_est_snap_cert_inforce.age | numeric | 2 | age | ## | 34 |
| 8 | AccidentSumInsured | ทุนประกันชีวิต อุบัติเหตุ | tx_est_snap_cert_inforce.acc_insur | numeric | 14,2 | sum_insured_accident | #,###.00 coalesce(#,0.00) | 1,000.15 |
| 9 | ClassNo | Ocupation Class | tx_est_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |
| 10 | ModeOfPayment | ประเภทการจ่าย | tx_est_snap_policy.pay_type | numeric | 10 | pay_type | if pay_type = 0 then 'Monthly' if pay_type = 1 then 'Quarterly' if pay_type = 2 then 'Semi Annua' if pay_type = 3 then 'Annual' | --07/05/26 |
| 11 | TypePremiumRate | ประเภทอัตราเบี้ย | tx_est_snap_policy.rate_flag tx_est_snap_prem_rate.prem_rate_table_type | numeric | 1 | rate_type | if rate_flag = 0 then 'Unit Rate' if rate_flag = 1 then tx_est_snap_prem_rate.prem_rate_table_type if rate_flag = 2 then 'Unit Premium' | --07/05/26 |
| 12 | LifeSumInsured | ทุนประกันชีวิต | tx_est_snap_cert_inforce.life_insur | numeric | 14,2 | sum_insured_life | coalesce(#,0.00) | --07/05/26 |
| 13 | MedAccidentSumInsured | ทุนประกันค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_cert_inforce.med_insur | numeric | 14,2 | sum_insured_med | coalesce(#,0.00) | --07/05/26 |
| 14 | TPDSumInsured | ทุนประกันทุพพลภาพ | tx_est_snap_cert_inforce.tpd_insur | numeric | 14,2 | sum_insured_tpd | coalesce(#,0.00) | --07/05/26 |
| 15 | LifePremiumRate | อัตราเบี้ย ความคุ้มครองชีวิต | tx_est_snap_policy.life_prem_rate tx_est_snap_prem_rate.value_life | numeric | 14,2 | prem_rate_life | if rate_flag = 0 then tx_est_snap_policy.life_prem_rate if rate_flag = 2 then 0.00 if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.life_prem_rate   if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class' and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_life AgeGender  when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class and tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female) then tx_est_snap_prem_rate.value_life Age  when tx_est_snap_prem_rate.prem_rate_table_type = 'Age' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_life | --07/05/26 |
| 16 | AccidentPremiumRate | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ | tx_est_snap_policy.acc_prem_rate tx_est_snap_prem_rate.value_acc | numeric | 14,2 | prem_rate_acc | if rate_flag = 0 then tx_est_snap_policy.acc_prem_rate if rate_flag = 2 then 0.00   if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.acc_prem_rate   if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class' and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_acc AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class and tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female) then tx_est_snap_prem_rate.value_acc Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_acc | --07/05/26 |
| 17 | MedAccidentPremiumRate | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_policy.med_prem_rate tx_est_snap_prem_rate.value_med_acc | numeric | 14,2 | prem_rate_med | if rate_flag = 0 then tx_est_snap_policy.med_prem_rate if rate_flag = 2 then 0.00   if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.med_prem_rate   if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class' and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_med_acc AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class and tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female) then tx_est_snap_prem_rate.value_med_acc Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_med_acc | --07/05/26 |
| 18 | TPDPremiumRate | อัตราเบี้ย ความคุ้มครองทุพพลภาพ | tx_est_snap_policy.tpd_prem_rate tx_est_snap_prem_rate.value_tpd | numeric | 14,2 | prem_rate_tpd | if rate_flag = 0 then tx_est_snap_policy.tpd_prem_rate if rate_flag = 2 then 0.00   if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.tpd_prem_rate   if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class' and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_tpd AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class and tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female) then tx_est_snap_prem_rate.value_tpd Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age' and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_class then tx_est_snap_prem_rate.value_tpd | --07/05/26 |
| 19 | LifePremium | เบี้ย ความคุ้มครองชีวิต | tx_est_snap_cert_inforce.life_prem | numeric | 14,2 | prem_life | coalesce(#,0.00) | --07/05/26 |
| 20 | LifeExtraPremium | เบี้ย ความคุ้มครองชีวิต พิเศษ | tx_est_snap_cert_inforce.life_e1_prem | numeric | 14,2 | prem_extra_life | coalesce(#,0.00) | --07/05/26 |
| 21 | AccidentPremium | เบี้ย ความคุ้มครองอุบัติเหตุ | tx_est_snap_cert_inforce.acc_prem | numeric | 14,2 | prem_acc | coalesce(#,0.00) | --07/05/26 |
| 22 | AccidentExtraPremium | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ | 0.00 | numeric | 14,2 | prem_acc_extra | fix 0.00 | --07/05/26 |
| 23 | MedAccidentPremium | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_cert_inforce.med_acc_prem | numeric | 14,2 | prem_med | coalesce(#,0.00) | --07/05/26 |
| 24 | TPDPremium | เบี้ย ทุพพลภาพ | tx_est_snap_cert_inforce.tpd_prem | numeric | 14,2 | prem_tpd | coalesce(#,0.00) | --07/05/26 |
| 25 | IPDPremium | เบี้ย IPD | tx_est_snap_cert_inforce.ipd_prem | numeric | 14,2 | prem_ipd | coalesce(#,0.00) | --07/05/26 |
| 26 | OPDPremium | เบี้ย OPD | tx_est_snap_cert_inforce.opd_prem | numeric | 14,2 | prem_opd | coalesce(#,0.00) | --07/05/26 |
| 27 | DentalPremium | เบี้ย ทันตกรรม | tx_est_snap_cert_inforce.dental_prem | numeric | 14,2 | prem_dental | coalesce(#,0.00) | --07/05/26 |
| 28 | TreatyCode | รหัสสัญญา | tx_est_snap_cert_inforce.re_insure_no | varchar | 50 | treaty_code | แปลงค่าจาก tx_est_snap_cert_inforce.re_insure_no โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | --07/05/26 |

### Exception

<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

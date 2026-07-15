# 01 การประมวลผล Actual SA

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471509  
> **Page ID:** 1116471509  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 01 การประมวลผล Actual SA

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การคำนวณ Actual SA
การคำนวณ Actual SA มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Initial SA | จำนวนเงินเอาประกัน Base | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Premium Base | เบี้ยหลัก |
|  | Plan Code | รหัสแบบประกัน Base |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ (ปัจจุบัน) |
|  | Policy Month | เดือนกรมธรรม์ (ปัจจุบัน) |
|  | Attained Age | อายุปัจจุบัน |
| Auto Rider | Initial SA Rider | จำนวนเงินเอาประกัน Rider |
|  | Rider Code | รหัสแบบประกัน Rider |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
| FAC Base | Initial SA | จำนวนเงินเอาประกัน Base | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw) |
|  | Premium Base | เบี้ยหลัก |
|  | Plan Code | รหัสแบบประกัน Base |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ (ปัจจุบัน) |
|  | Policy Month | เดือนกรมธรรม์ (ปัจจุบัน) |
|  | Attained Age | อายุปัจจุบัน |
| FAC Rider | Initial SA Rider | จำนวนเงินเอาประกัน Rider |
|  | Rider Code | รหัสแบบประกัน Rider |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |

1. คำนวณด้วยชุดข้อมูล Current_Policy_New, Current_Policy_Renew และ Current_Policy_Renew_RI
2. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
3. นำ Initial SA และ Initial SA Rider มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

แสดงรายละเอียด
| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| Actual SA | LIFE | 3000101 | 2000101 | ไม่กำหนด |  |  |
| 3000102 | 2000101 | ทุกสูตรตามลำดับ (Initial SA * ตารางทุนลดตามแบบประกัน/1,000, Initial SA * %Death benefit, เบี้ยประกัน * %Death benefit, Initial SA) |  | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตามลำดับด้วยสูตรตามลำดับดังนี้ [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id = 300010330001043000105 3000106หากสามารถคำนวณในสูตรลำดับใดได้แล้ว ไม่ต้องคำนวณในลำดับถัดไป สามารถใช้ค่า Actual SA Life ที่คำนวณนั้นได้เลย |
| 3000103 | 2000101 | (Initial SA * sa_rate) / 1,000{INITIAL_SA_LIFE} * {INITIAL_RATE} / 1000 | Initial SA = 9,500,000 sa_rate = 1,000 = (9500000 * 1000) / 1,000 = 9,500,000 | วิธีการหาค่าในตารางทุนลดตามแบบประกัน {INITIAL_RATE} ([ms_sa_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/12.+ms_sa_ord_rate))ตรวจสอบประเภทแบบประกัน (SP,RP) 25/04/2025กรณี SP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year = 1 then Policy Month - 1กรณี RP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year > 1 then Policy Monthวิธีหา Rateนำ Plan Code, Policy Month (หลังการตรวจประเภทแบบประกัน), Initial SA และ Effective Date ดูจาก Period ที่จะประมวลผล ไปหา sa_rate ในตาราง [ms_sa_ord_rate](http://wiki.thaisamut.co.th/display/RDSINRI/12.+ms_sa_ord_rate)นำค่า sa_rate ที่ได้มาคำนวณตามสูตร |
| 3000104 | 2000101 | Premium Base * %Death benefit{PREMIUM_BASE} * {DEATH_BENEFIT} | Premium Base = 9,500,000 %Death benefit = 1 = 9500000 * 1 = 9,500,000 | วิธีการหาค่า %Death benefit ([ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim)) หา benefit_claim ในตาราง [ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim) โดยค้นหาตามลำดับ ref_table ดังนี้[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'OLPBEFT4' โดยนำ Plan Code และ Policy Yearนำค่า benefit_claim ที่ได้มาคำนวณตามสูตร |
| 3000105 | 2000101 | Initial SA * %Death benefitตรวจสอบสถานะกรมธรรม์ cf_lookup_catalog.parent_id = 1005300 ตรวจสอบข้อมูล policy_status ที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005300 AND policy_status = cf_lookup_catalog.lookup_key กรณีพบสถานะกรมธรรม์ที่ cf_lookup_catalog{INITIAL_SA_LIFE} กรณีไม่พบสถานะกรมธรรม์ที่ cf_lookup_catalog{INITIAL_SA_LIFE} * {DEATH_BENEFIT} | Initial SA = 9,500,000 %Death benefit = 1 = 9500000 * 1 = 9,500,000 | วิธีการหาค่า %Death benefit ([ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim))ORDหา benefit_claim ในตาราง [ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim) โดยค้นหาตามลำดับ ref_table ดังนี้[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'OLPBEF11' โดยนำ Plan Code และ Attained Age[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'OLPBEFT3' โดยนำ Plan Code และ Attained Age (กรณีพบข้อมูลที่ OLPBEFT3 แต่ค่าที่ได้เป็น 0 ให้ข้ามไปทำข้อต่อไป) Suthanee.sa 19/08/2025[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'OLPBEFT2' โดยนำ Plan Code, Policy Year และ Attained Age[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'OLPBEFTB' โดยนำ Plan Code และ Policy Yearนำค่า benefit_claim ที่ได้มาคำนวณตามสูตร IND (25/03/2025) หา benefit_claim ในตาราง [ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim) โดยค้นหาตามลำดับ ref_table ดังนี้[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'TABTRIP'โดยใช้ Plan Code (plan_code) และ Policy Year (policy_year) และ Attained Age (max_age)[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'PRCEDTB0'โดยใช้ Plan Code (plan_code) และ Policy Year (policy_year)[ms_benefit_claim](http://wiki.thaisamut.co.th/display/RDSINRI/13.+ms_benefit_claim).ref_table = 'TABRED'โดยใช้ Plan Code (plan_code) และ Policy Year (policy_year)นำค่า benefit_claim ที่ได้มาคำนวณตามสูตร |
| 3000106 | 2000101 | Initial SA{INITIAL_SA_LIFE} | Initial SA = 9,500,000 = 9,500,000 |  |
| Actual SA | ADD | 3000107 | 2000102 | ไม่กำหนด |  |  |
| 3000108 | 2000102 | Initial SA Rider * %Additional Benefit{INITIAL_SA_ADD} * {ADDITIONAL_BENEFIT} | Initial SA = 9,500,000 %Additional Benefit = 1 = 9500000 * 1 = 9,500,000 | วิธีการหาค่า %Additional Benefit {ADDITIONAL_BENEFIT} ([dm_ppalib_tbincasa](http://wiki.thaisamut.co.th/x/MoGxQg))*กรณี %Additional Benefit เป็น 0 หรือค้นหาข้อมูลไม่พบ กำหนดให้ %Additional Benefit เป็น 1*กรณี %Additional Benefit เป็น 0 หรือค้นหาข้อมูลไม่พบ กำหนดให้ %Additional Benefit เป็น 1นำ Plan Code และ Policy Year ไปหา sa_rate ในตาราง [dm_ppalib_tbincasa](http://wiki.thaisamut.co.th/x/MoGxQg) นำค่า sa_rate ที่ได้มาคำนวณตามสูตร |
| 3000109 | 2000102 | Initial SA Rider{INITIAL_SA_ADD} | Initial SA Rider = 9,500,000 = 9,500,000 | Initial SA ADD จาก Rider Code ADD |
| 3000409 (CR) | 2000102 | Actual SA LIFE{ACTUAL_SA_LIFE} |  |  |
| 3000410 (CR) | 2000102 | ใช้สูตรตาม Package Code (L = 0, P = Actual SA LIFE, N = Actual SA LIFE) |  | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ 1.ตรวจสอบ package_code **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = Actual SA LIFE {ACTUAL_SA_LIFE}N = Actual SA LIFE {ACTUAL_SA_LIFE} |
| 3000432 | 2000102 | Initial SA ADD * %Death benefit{INITIAL_SA_ADD} * {DEATH_BENEFIT} |  | นำค่าที่ได้มาจาก LandingRider Code (rider_code) Policy Year Riderหา benefit_rate ในตาราง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw)โดย rider_code = [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).rider_plan_codePolicy Year Rider อยู่ระหว่าง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).min_cov_year และ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).max_cov_yearนำค่าที่ได้ไป /100จากนั้นเก็บลงใน {DEATH_BENEFIT} หมายเหตุ : กรณีไม่พบค่า benefit_rate ให้ {DEATH_BENEFIT} = 1 เสมอ |
| Actual SA | TPD | 3000110 | 2000103 | ไม่กำหนด |  |  |
| 3000111 | 2000103 | Initial SA Rider{INITIAL_SA_TPD} | Initial SA Rider = 9,500,000 = 9,500,000 | Initial SA TPD จาก Rider Code TPD |
| 3000406 | 2000103 | Actual SA LIFE{ACTUAL_SA_LIFE} |  |  |
| 3000411 (CR) | 2000103 | ใช้สูตรตาม Package Code (L = 0, P = Actual SA LIFE, N = Actual SA LIFE) |  | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = Actual SA LIFE {ACTUAL_SA_LIFE}N = Actual SA LIFE {ACTUAL_SA_LIFE} |
| 3000433 | 2000103 | Initial SA TPD * %Death benefit{INITIAL_SA_TPD} * {DEATH_BENEFIT} |  | นำค่าที่ได้มาจาก LandingRider Code (rider_code) Policy Year Riderหา benefit_rate ในตาราง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw)โดย rider_code = [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).rider_plan_codePolicy Year Rider อยู่ระหว่าง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).min_cov_year และ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).max_cov_yearนำค่าที่ได้ไป /100จากนั้นเก็บลงใน {DEATH_BENEFIT} หมายเหตุ : กรณีไม่พบค่า benefit_rate ให้ {DEATH_BENEFIT} = 1 เสมอ |
| Actual SA | TTD | 3000112 | 2000104 | ไม่กำหนด |  |  |
| 3000113 | 2000104 | Initial SA Rider{INITIAL_SA_TTD} | Initial SA Rider = 9,500,000 = 9,500,000 | Initial SA TTD จาก Rider Code TTD |
| 3000434 | 2000104 | Initial SA TTD * %Death benefit{INITIAL_SA_TTD} * {DEATH_BENEFIT} |  | นำค่าที่ได้มาจาก LandingRider Code (rider_code) Policy Year Riderหา benefit_rate ในตาราง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw)โดย rider_code = [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).rider_plan_codePolicy Year Rider อยู่ระหว่าง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).min_cov_year และ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).max_cov_yearนำค่าที่ได้ไป /100จากนั้นเก็บลงใน {DEATH_BENEFIT} หมายเหตุ : กรณีไม่พบค่า benefit_rate ให้ {DEATH_BENEFIT} = 1 เสมอ |
| Actual SA | RIDER | 3000114 | 2000105 | ไม่กำหนด |  |  |
| 3000115 | 2000105 | Initial SA Rider{INITIAL_SA_RIDER} | Initial SA Rider = 9,500,000 = 9,500,000 | Initial SA RIDER จาก Rider Code RIDER |
| 3000435 | 2000105 | Initial SA RIDER * %Death benefit{INITIAL_SA_RIDER} * {DEATH_BENEFIT} |  | นำค่าที่ได้มาจาก LandingRider Code (rider_code) Policy Year Riderหา benefit_rate ในตาราง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw)โดย rider_code = [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).rider_plan_codePolicy Year Rider อยู่ระหว่าง [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).min_cov_year และ [ms_claim_bef_ord_rate](http://wiki.thaisamut.co.th/x/VYCrSw).max_cov_yearนำค่าที่ได้ไป /100จากนั้นเก็บลงใน {DEATH_BENEFIT} หมายเหตุ : กรณีไม่พบค่า benefit_rate ให้ {DEATH_BENEFIT} = 1 เสมอ |
| Actual SA | MURDER | 3000116 | 2000106 | ไม่กำหนด |  |  |
| 3000117 | 2000106 | {INITIAL_MURDER} |  | {INITAIL_SA_MURDER}อ้างอิงรายละเอียด [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw) |
| Actual SA | MOTORCYCLE | 3000118 | 2000107 | ไม่กำหนด |  |  |
| 3000119 | 2000107 | {INITIAL_MOTORCYCLE} |  | {INITAIL_SA_MOTORCYCLE}อ้างอิงรายละเอียด [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw) |
| Actual SA | PUBLIC | 3000120 | 2000108 | ไม่กำหนด |  |  |
| 3000121 | 2000108 | {INITIAL_PUBLIC} |  | {INITAIL_SA_PUBLIC}อ้างอิงรายละเอียด [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw) |
| Actual SA | HOLIDAY | 3000122 | 2000109 | ไม่กำหนด |  |  |
| 3000123 | 2000109 | {INITIAL_HOLIDAY} |  | {INITAIL_SA_HOLIDAY}อ้างอิงรายละเอียด [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw) |

- นำค่า Actual SA ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ชุดกรมธรรม์ Current Policy New และ Current Policy Renewข้อมูลประเภทความคุ้มครองParameterActual SALIFE{ACTUAL_SA_LIFE}Actual SAADD{ACTUAL_SA_ADD}Actual SATPD{ACTUAL_SA_TPD}Actual SATTD{ACTUAL_SA_TTD}Actual SARIDER{ACTUAL_SA_RIDER}Actual SAMURDER{ACTUAL_SA_MURDER}Actual SAMOTORCYCLE{ACTUAL_SA_MOTORCYCLE}Actual SAPUBLIC{ACTUAL_SA_PUBLIC} **(CR#3)** ค้นหาอัตราเพิ่มทุนโดย{SR_RATE} = 1นำ {SR_RATE} * {ACTUAL_SA_PUBLIC} แล้วบันทึกค่าใหม่ลงไปอีกครั้ง Actual SAHOLIDAY{ACTUAL_SA_HOLIDAY} **(CR#3)** ค้นหาอัตราเพิ่มทุนโดย   [dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/x/xwDqRQ)srrid@เท่ากับ 4[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/x/xwDqRQ)srsdteน้อยกว่าหรือเท่ากับวันที่เกิดเหตุ [tx_ri_pa_new_renew_dt](http://wiki.thaisamut.co.th/x/_wFgQg).effective_date[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/x/xwDqRQ)sredteมากกว่าหรือเท่ากับวันที่เกิดเหตุ [tx_ri_pa_new_renew_dt](http://wiki.thaisamut.co.th/x/_wFgQg).effective_date[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/x/xwDqRQ)srstasเท่ากับ A[dm_ppalib_tbratsa0](http://wiki.thaisamut.co.th/x/xwDqRQ)srrateอัตราเพิ่มทุนที่ได้ {SR_RATE}  นำ {SR_RATE} * {ACTUAL_SA_HOLIDAY} แล้วบันทึกค่าใหม่ลงไปอีกครั้ง

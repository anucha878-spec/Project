# 14 การประมวลผล RI Premium

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471531  
> **Page ID:** 1116471531  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 14 การประมวลผล RI Premium

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Premium
การประมวลผล RI Premium มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Plan Code | รหัสแบบประกัน Base | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Occupation Class | ชั้นอาชีพ |
|  | Attained Age | อายุปัจจุบัน |
|  | Gender | เพศ |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {ACTUAL_SA_LIFE} | NAR Life | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |
|  | {PREVIOUS_SR_LIFE} | Previous NAR Life | [02 การประมวลผล Previous Actual SA](http://wiki.thaisamut.co.th/x/_ACMQg) |
|  | {SR_LIFE} | NAR Life | [09 การประมวลผล SR](http://wiki.thaisamut.co.th/x/LIBwQw) |
|  | {PREVIOUS_SR_LIFE} | Previous NAR Life | [10 การประมวลผล Previous SR](http://wiki.thaisamut.co.th/x/AQGMQg) |
| Auto Rider | Rider Code | รหัสแบบประกัน Rider | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Occupation Class | ชั้นอาชีพ |
|  | Attained Age Rider | อายุปัจจุบัน |
|  | Gender | เพศ |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Actual SA {ACTUAL_SA_ADD}Actual SA ADD{ACTUAL_SA_TPD}Actual SA TPD{ACTUAL_SA_TTD}Actual SA TTD{ACTUAL_SA_RIDER}Actual SA RIDER{ACTUAL_SA_MURDER}Actual SA MURDER{ACTUAL_SA_MOTORCYCLE}Actual SA MOTORCYCLE{ACTUAL_SA_PUBLIC}Actual SA PUBLIC{ACTUAL_SA_HOIDAY}Actual SA HOIDAY | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |
|  |  |
| {ACTUAL_SA_ADD} | Actual SA ADD |
| {ACTUAL_SA_TPD} | Actual SA TPD |
| {ACTUAL_SA_TTD} | Actual SA TTD |
| {ACTUAL_SA_RIDER} | Actual SA RIDER |
| {ACTUAL_SA_MURDER} | Actual SA MURDER |
| {ACTUAL_SA_MOTORCYCLE} | Actual SA MOTORCYCLE |
| {ACTUAL_SA_PUBLIC} | Actual SA PUBLIC |
| {ACTUAL_SA_HOIDAY} | Actual SA HOIDAY |
|  | Previous Actual SA {PREVIOUS_ACTUAL_SA_ADD}Previous Actual SA ADD{PREVIOUS_ACTUAL_SA_TPD}Previous Actual SA TPD{PREVIOUS_ACTUAL_SA_TTD}Previous Actual SA TTD{PREVIOUS_ACTUAL_SA_RIDER}Previous Actual SA RIDER{PREVIOUS_ACTUAL_SA_MURDER}Previous Actual SA MURDER{PREVIOUS_ACTUAL_SA_MOTORCYCLE}Previous Actual SA MOTORCYCLE{PREVIOUS_ACTUAL_SA_PUBLIC}Previous Actual SA PUBLIC{PREVIOUS_ACTUAL_SA_HOIDAY}Previous Actual SA HOIDAY | [02 การประมวลผล Previous Actual SA](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  |  |
| {PREVIOUS_ACTUAL_SA_ADD} | Previous Actual SA ADD |
| {PREVIOUS_ACTUAL_SA_TPD} | Previous Actual SA TPD |
| {PREVIOUS_ACTUAL_SA_TTD} | Previous Actual SA TTD |
| {PREVIOUS_ACTUAL_SA_RIDER} | Previous Actual SA RIDER |
| {PREVIOUS_ACTUAL_SA_MURDER} | Previous Actual SA MURDER |
| {PREVIOUS_ACTUAL_SA_MOTORCYCLE} | Previous Actual SA MOTORCYCLE |
| {PREVIOUS_ACTUAL_SA_PUBLIC} | Previous Actual SA PUBLIC |
| {PREVIOUS_ACTUAL_SA_HOIDAY} | Previous Actual SA HOIDAY |
|  | SR {SR_ADD}SR ADD{SR_TPD}SR TPD{SR_TTD}SR TTD{SR_RIDER}SR RIDER{SR_MURDER}SR MURDER{SR_MOTORCYCLE}SR MOTORCYCLE{SR_PUBLIC}SR PUBLIC{SR_HOLIDAY}SR HOIDAY | [09 การประมวลผล SR](http://wiki.thaisamut.co.th/x/LIBwQw) |
|  |  |
| {SR_ADD} | SR ADD |
| {SR_TPD} | SR TPD |
| {SR_TTD} | SR TTD |
| {SR_RIDER} | SR RIDER |
| {SR_MURDER} | SR MURDER |
| {SR_MOTORCYCLE} | SR MOTORCYCLE |
| {SR_PUBLIC} | SR PUBLIC |
| {SR_HOLIDAY} | SR HOIDAY |
|  | Previous SR {PREVIOUS_SR_ADD}Previous SR ADD{PREVIOUS_SR_TPD}Previous SR TPD{PREVIOUS_SR_TTD}Previous SR TTD{PREVIOUS_SR_RIDER}Previous SR RIDER{PREVIOUS_SR_MURDER}Previous SR MURDER{PREVIOUS_SR_MOTORCYCLE}Previous SR MOTORCYCLE{PREVIOUS_SR_PUBLIC}Previous SR PUBLIC{PREVIOUS_SR_HOLIDAY}Previous SR HOIDAY | [10 การประมวลผล Previous SR](http://wiki.thaisamut.co.th/x/AQGMQg) |
|  |  |
| {PREVIOUS_SR_ADD} | Previous SR ADD |
| {PREVIOUS_SR_TPD} | Previous SR TPD |
| {PREVIOUS_SR_TTD} | Previous SR TTD |
| {PREVIOUS_SR_RIDER} | Previous SR RIDER |
| {PREVIOUS_SR_MURDER} | Previous SR MURDER |
| {PREVIOUS_SR_MOTORCYCLE} | Previous SR MOTORCYCLE |
| {PREVIOUS_SR_PUBLIC} | Previous SR PUBLIC |
| {PREVIOUS_SR_HOLIDAY} | Previous SR HOIDAY |
| FAC Base | Plan Code | รหัสแบบประกัน Base | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Occupation Class | ชั้นอาชีพ |
|  | Attained Age | อายุปัจจุบัน |
|  | Gender | เพศ |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {ACTUAL_SA_LIFE} | Actual SA Life | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |
|  | {PREVIOUS_SR_LIFE} | Previous Actual SA Life | [02 การประมวลผล Previous Actual SA](http://wiki.thaisamut.co.th/x/_ACMQg) |
|  | {SR_LIFE} | SR Life | [09 การประมวลผล SR](http://wiki.thaisamut.co.th/x/LIBwQw) |
|  | {PREVIOUS_SR_LIFE} | Previous SR Life | [10 การประมวลผล Previous SR](http://wiki.thaisamut.co.th/x/AQGMQg) |
| FAC Rider | Rider Code | รหัสแบบประกัน Rider | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Occupation Class | ชั้นอาชีพ |
|  | Attained Age Rider | อายุปัจจุบัน |
|  | Gender | เพศ |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Actual SA {ACTUAL_SA_ADD}Actual SA ADD{ACTUAL_SA_TPD}Actual SA TPD{ACTUAL_SA_TTD}Actual SA TTD{ACTUAL_SA_RIDER}Actual SA RIDER{ACTUAL_SA_MURDER}Actual SA MURDER{ACTUAL_SA_MOTORCYCLE}Actual SA MOTORCYCLE{ACTUAL_SA_PUBLIC}Actual SA PUBLIC{ACTUAL_SA_HOIDAY}Actual SA HOIDAY | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |
|  |  |
| {ACTUAL_SA_ADD} | Actual SA ADD |
| {ACTUAL_SA_TPD} | Actual SA TPD |
| {ACTUAL_SA_TTD} | Actual SA TTD |
| {ACTUAL_SA_RIDER} | Actual SA RIDER |
| {ACTUAL_SA_MURDER} | Actual SA MURDER |
| {ACTUAL_SA_MOTORCYCLE} | Actual SA MOTORCYCLE |
| {ACTUAL_SA_PUBLIC} | Actual SA PUBLIC |
| {ACTUAL_SA_HOIDAY} | Actual SA HOIDAY |
|  | Previous Actual SA {PREVIOUS_ACTUAL_SA_ADD}Previous Actual SA ADD{PREVIOUS_ACTUAL_SA_TPD}Previous Actual SA TPD{PREVIOUS_ACTUAL_SA_TTD}Previous Actual SA TTD{PREVIOUS_ACTUAL_SA_RIDER}Previous Actual SA RIDER{PREVIOUS_ACTUAL_SA_MURDER}Previous Actual SA MURDER{PREVIOUS_ACTUAL_SA_MOTORCYCLE}Previous Actual SA MOTORCYCLE{PREVIOUS_ACTUAL_SA_PUBLIC}Previous Actual SA PUBLIC{PREVIOUS_ACTUAL_SA_HOIDAY}Previous Actual SA HOIDAY | [02 การประมวลผล Previous Actual SA](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  |  |
| {PREVIOUS_ACTUAL_SA_ADD} | Previous Actual SA ADD |
| {PREVIOUS_ACTUAL_SA_TPD} | Previous Actual SA TPD |
| {PREVIOUS_ACTUAL_SA_TTD} | Previous Actual SA TTD |
| {PREVIOUS_ACTUAL_SA_RIDER} | Previous Actual SA RIDER |
| {PREVIOUS_ACTUAL_SA_MURDER} | Previous Actual SA MURDER |
| {PREVIOUS_ACTUAL_SA_MOTORCYCLE} | Previous Actual SA MOTORCYCLE |
| {PREVIOUS_ACTUAL_SA_PUBLIC} | Previous Actual SA PUBLIC |
| {PREVIOUS_ACTUAL_SA_HOIDAY} | Previous Actual SA HOIDAY |
|  | SR {SR_ADD}SR ADD{SR_TPD}SR TPD{SR_TTD}SR TTD{SR_RIDER}SR RIDER{SR_MURDER}SR MURDER{SR_MOTORCYCLE}SR MOTORCYCLE{SR_PUBLIC}SR PUBLIC{SR_HOLIDAY}SR HOIDAY | [09 การประมวลผล SR](http://wiki.thaisamut.co.th/x/LIBwQw) |
|  |  |
| {SR_ADD} | SR ADD |
| {SR_TPD} | SR TPD |
| {SR_TTD} | SR TTD |
| {SR_RIDER} | SR RIDER |
| {SR_MURDER} | SR MURDER |
| {SR_MOTORCYCLE} | SR MOTORCYCLE |
| {SR_PUBLIC} | SR PUBLIC |
| {SR_HOLIDAY} | SR HOIDAY |
|  | Previous SR {PREVIOUS_SR_ADD}Previous SR ADD{PREVIOUS_SR_TPD}Previous SR TPD{PREVIOUS_SR_TTD}Previous SR TTD{PREVIOUS_SR_RIDER}Previous SR RIDER{PREVIOUS_SR_MURDER}Previous SR MURDER{PREVIOUS_SR_MOTORCYCLE}Previous SR MOTORCYCLE{PREVIOUS_SR_PUBLIC}Previous SR PUBLIC{PREVIOUS_SR_HOLIDAY}Previous SR HOIDAY | [10 การประมวลผล Previous SR](http://wiki.thaisamut.co.th/x/AQGMQg) |
|  |  |
| {PREVIOUS_SR_ADD} | Previous SR ADD |
| {PREVIOUS_SR_TPD} | Previous SR TPD |
| {PREVIOUS_SR_TTD} | Previous SR TTD |
| {PREVIOUS_SR_RIDER} | Previous SR RIDER |
| {PREVIOUS_SR_MURDER} | Previous SR MURDER |
| {PREVIOUS_SR_MOTORCYCLE} | Previous SR MOTORCYCLE |
| {PREVIOUS_SR_PUBLIC} | Previous SR PUBLIC |
| {PREVIOUS_SR_HOLIDAY} | Previous SR HOIDAY |

1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI
2. ดึงข้อมูลที่ใช้ในการคำนวณ

i. กรณีเป็น RI Premium ประเภท Set up By Treaty ([cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET') CR#3

แสดงรายละเอียด
1. ค้นหา  cf_prem_by_treaty_hd_id ในตาราง [cf_prem_by_treaty_hd](http://wiki.thaisamut.co.th/display/RDSINRI/17.+cf_prem_by_treaty_hd)

ข้อมูล input

| Name | Description | Value | remark |
| --- | --- | --- | --- |
| cfPremiumRateId | id ของ [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate) | ได้จากข้อ ii |  |
| policyCoverageType | ประเภทความคุ้มครอง Product | ขึ้นอยู่กับประเภทความคุ้มครองของ RI Premium ที่จะคำนวณ | - LIFE - ADD - TPD - TTD - RIDER |
| occClass | Occupation Class | Occupation Class | เฉพาะ policyCoverageType = ADDกรณีภายใน [cf_prem_by_treaty_hd](http://wiki.thaisamut.co.th/display/RDSINRI/17.+cf_prem_by_treaty_hd).occ_class บันทึกเป็น 0 หมายถึงครอบคลุมทุก Occ Class (22/11/2024 suthanee.sa) |
| effectiveDateFrom | ช่วงเริ่มต้นของวันที่เริ่มต้นสัญญา | วันที่เริ่มต้นสัญญากรมธรรม์ | เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้Base : Commencement DateRider : Commencement Date Rider |
| effectiveDateTo | ช่วงสิ้นสุดของวันที่เริ่มต้นสัญญา |
| startDate CR#3 | วันที่มีผลบังคับใช้ตั้งแต่ | รอบที่ประมวลผล | ตรวจสอบรายการที่สามารถใช้งานได้ จากการเทียบวันที่เริ่มต้นสัญญา จากนั้นเปรียบเทียบ Period การประมวลผล เพื่อตรวจสอบว่าต้องใช้รายการไหน |
| expireDate CR#3 | วันที่มีผลบังคับใช้ถึง |

2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_treaty_dt](http://wiki.thaisamut.co.th/display/RDSINRI/18.+cf_prem_by_treaty_dt)

1. ข้อมูล inputNameDescriptionValueremarkcfPremByTreatyHdIdid ของ [cf_prem_by_treaty_hd](http://wiki.thaisamut.co.th/display/RDSINRI/17.+cf_prem_by_treaty_hd)ได้จากข้อ 1 genderเพศของผู้เอาประกันภัยGender ageอายุของผู้เอาประกัน ณ ปัจจุบัน   BaseAttained AgeRiderAttained Age Rider

ii. กรณีเป็น RI Premium ประเภท Set up By Product ([cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'PRD') CR#3

แสดงรายละเอียด
1. ค้นหา
cf_prem_by_product_hd_id
ในตาราง
cf_prem_by_product_hd
1. ข้อมูล inputNameDescriptionValueremarkcfPremiumRateIdid ของ [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate)ได้จากข้อ ii effectiveDateFrom[cf_plancode_hd](http://wiki.thaisamut.co.th/x/AAGaQQ).effective_date_from วันที่เริ่มต้นสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้Base : Commencement DateRider : Commencement Date RidereffectiveDateTo[cf_plancode_hd](http://wiki.thaisamut.co.th/x/AAGaQQ).effective_date_tostartDate CR#3วันที่มีผลบังคับใช้ตั้งแต่รอบที่ประมวลผลตรวจสอบรายการที่สามารถใช้งานได้ จากการเทียบวันที่เริ่มต้นสัญญา จากนั้นเปรียบเทียบ Period การประมวลผล เพื่อตรวจสอบว่าต้องใช้รายการไหนexpireDate CR#3วันที่มีผลบังคับใช้ถึง
2. ค้นหา cf_prem_by_product_hd_id ในตาราง [cf_prem_by_product_hd](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1107427507)

2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_product_dt](http://wiki.thaisamut.co.th/display/RDSINRI/20.+cf_prem_by_product_dt)

1. ข้อมูล inputNameDescriptionValueremarkcfPremByProductHdIdid ของ [cf_prem_by_product_hd](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1107427507)ได้จากข้อ 1 policyTypeประเภทกรมธรรม์[ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).policy_typeนำ planCode ตาม RI Premium ที่จะคำนวณ ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).policy_type productGroupกลุ่มกรมธรรม์[ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).product_group นำ planCode ตาม RI Premium ที่จะคำนวณ ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).product_groupplanCodeรหัสแบบประกันPlan Code genderเพศของผู้เอาประกันภัยGender ageอายุของผู้เอาประกัน ณ ปัจจุบัน [](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471456) BaseAttained AgeRiderAttained Age Rider
2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_product_dt](http://wiki.thaisamut.co.th/display/RDSINRI/20.+cf_prem_by_product_dt)

iii. กรณีเป็น RI Premium ประเภท Set up By แผนกรมธรรม์ ([cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'PLN') CR#3

แสดงรายละเอียด
1. ค้นหา cf_prem_by_plan_hd_id ในตาราง [cf_prem_by_plan_hd](http://wiki.thaisamut.co.th/display/RDSINRI/21.+cf_prem_by_plan_hd)

1. ข้อมูล inputNameDescriptionValueremarkcfPremiumRateIdid ของ [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate)ได้จากข้อ ii sumInsuredทุนประกันInitial SA Rider effectiveDateFromช่วงเริ่มต้นของวันที่เริ่มต้นสัญญาวันที่เริ่มต้นสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้Base : Commencement DateRider : Commencement Date RidereffectiveDateToช่วงสิ้นสุดของวันที่เริ่มต้นสัญญาstartDate CR#3วันที่มีผลบังคับใช้ตั้งแต่รอบที่ประมวลผลตรวจสอบรายการที่สามารถใช้งานได้ จากการเทียบวันที่เริ่มต้นสัญญา จากนั้นเปรียบเทียบ Period การประมวลผล เพื่อตรวจสอบว่าต้องใช้รายการไหนexpireDate CR#3วันที่มีผลบังคับใช้ถึง
2. ค้นหา cf_prem_by_plan_hd_id ในตาราง [cf_prem_by_plan_hd](http://wiki.thaisamut.co.th/display/RDSINRI/21.+cf_prem_by_plan_hd)

2.
ค้นหา RI Premium rate ในตาราง
cf_prem_by_plan_dt
1. ข้อมูล inputNameDescriptionValueremarkcfPremByPlanHdIdid ของ [cf_prem_by_plan_hd](http://wiki.thaisamut.co.th/display/RDSINRI/21.+cf_prem_by_plan_hd)ได้จากข้อ 1 ageอายุของผู้เอาประกัน ณ ปัจจุบัน   BaseAttained AgeRiderAttained Age Rider
2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_plan_dt](http://wiki.thaisamut.co.th/display/RDSINRI/22.+cf_prem_by_plan_dt)

iv. กรณีเป็น RI Premium ประเภท Set up By Package ([cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'PAC') CR#3

แสดงรายละเอียด
1. ค้นหา cf_prem_by_package_hd_id ในตาราง [cf_prem_by_package_hd](http://wiki.thaisamut.co.th/display/RDSINRI/23.+cf_prem_by_package_hd)

1. ข้อมูล inputNameDescriptionValueremarkcfPremiumRateIdid ของ [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate)ได้จากข้อ ii effectiveDateFromช่วงเริ่มต้นของวันที่เริ่มต้นสัญญาวันที่เริ่มต้นสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้Base : Commencement DateRider : Commencement Date RidereffectiveDateToช่วงสิ้นสุดของวันที่เริ่มต้นสัญญา startDate CR#3วันที่มีผลบังคับใช้ตั้งแต่รอบที่ประมวลผลตรวจสอบรายการที่สามารถใช้งานได้ จากการเทียบวันที่เริ่มต้นสัญญา จากนั้นเปรียบเทียบ Period การประมวลผล เพื่อตรวจสอบว่าต้องใช้รายการไหนexpireDate CR#3วันที่มีผลบังคับใช้ถึง
2. ค้นหา cf_prem_by_package_hd_id ในตาราง [cf_prem_by_package_hd](http://wiki.thaisamut.co.th/display/RDSINRI/23.+cf_prem_by_package_hd)

2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_package_dt](http://wiki.thaisamut.co.th/display/RDSINRI/24.+cf_prem_by_package_dt)

1. ข้อมูล inputNameDescriptionValueremarktmpPremByPackageHdIdid ของ [cf_prem_by_package_hd](http://wiki.thaisamut.co.th/display/RDSINRI/23.+cf_prem_by_package_hd)ได้จากข้อ 1 policyTypeประเภทกรมธรรม์[ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).policy_typeนำ Plan Code ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).policy_type productGroupกลุ่มกรมธรรม์[ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).product_group นำ Plan Code ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).product_groupplanCodeรหัสแบบประกันPlan Code genderเพศของผู้เอาประกันภัยGender ageอายุของผู้เอาประกัน ณ ปัจจุบัน   BaseAttained AgeRiderAttained Age Rider
2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_package_dt](http://wiki.thaisamut.co.th/display/RDSINRI/24.+cf_prem_by_package_dt)

v. กรณีเป็น RI Premium ประเภท Set up By กลุ่มโรค ([cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP120') CR#3

แสดงรายละเอียด
1. ค้นหา cf_prem_by_grp_ci_hd_id ในตาราง [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+cf_prem_by_grp_ci_hd)

1. ข้อมูล inputNameDescriptionValueremarkcfPremiumRateIdid ของ [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate)ได้จากข้อ ii premGroupCodeCode ของแผนกรมธรรม์ต้องคำนวณตามคำนวณ Group Code ที่ถูกกำหนดไว้ในระบบ [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+cf_prem_by_grp_ci_hd).prem_group_codeเช่น มีการบันทึกทั้งหมด 7 รายการ ให้หาค่าเรททีละรายการที่มีการบันทึก เมื่อได้เรทแล้วให้นำไปคำนวณตามสูตรที่บันทึกไว้จากนั้นให้เก็บลงในค่า parameter ตามที่กำหนด effectiveDateFromช่วงเริ่มต้นของวันที่เริ่มต้นสัญญาวันที่เริ่มต้นสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้Base : Commencement DateRider : Commencement Date RidereffectiveDateToช่วงสิ้นสุดของวันที่เริ่มต้นสัญญาstartDate CR#3วันที่มีผลบังคับใช้ตั้งแต่รอบที่ประมวลผลตรวจสอบรายการที่สามารถใช้งานได้ จากการเทียบวันที่เริ่มต้นสัญญา จากนั้นเปรียบเทียบ Period การประมวลผล เพื่อตรวจสอบว่าต้องใช้รายการไหน expireDate CR#3วันที่มีผลบังคับใช้ถึง
2. ค้นหา cf_prem_by_grp_ci_hd_id ในตาราง [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+cf_prem_by_grp_ci_hd)

2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_grp_ci_dt](http://wiki.thaisamut.co.th/display/RDSINRI/26.+cf_prem_by_grp_ci_dt)

1. ข้อมูล inputNameDescriptionValueremarkcfPremByGrpCiHdIdid ของ [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/display/RDSINRI/25.+cf_prem_by_grp_ci_hd)ได้จากข้อ 1 genderเพศของผู้เอาประกันภัยGender ageอายุของผู้เอาประกัน ณ ปัจจุบัน BaseAttained AgeRiderAttained Age Rider
2. ค้นหา RI Premium rate ในตาราง [cf_prem_by_grp_ci_dt](http://wiki.thaisamut.co.th/display/RDSINRI/26.+cf_prem_by_grp_ci_dt)

1. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
2. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้    แสดงรายละเอียด  ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ) หมายเหตุRI PremiumLIFE30003052000192ไม่กำหนด  30003062000192(SR LIFE * RI premium rate LIFE) / 1000 {RI_PREM_RATE_LIFE} * {SR_LIFE} / 1000กรณีเป็น RI Premium ประเภท Set up By Package RI premium rate = life_prem_rateกรณีไม่พบข้อมูล RI premium rate ให้ RI Premium = 030003072000192(SR LIFE / Actual SA LIFE) * RI premium rate LIFE ({SR_LIFE} / {ACTUAL_SA}) * {RI_PREM_RATE_LIFE} RI PremiumADD30003082000193ไม่กำหนด  30003092000193(RI premium rate ADD * SR ADD) / Actual SA ADD ({RI_PREM_RATE_ADD} * {SR_ADD}) / {ACTUAL_SA_ADD} กรณีเป็น RI Premium ประเภท Set up By Package ให้ทำการตรวจสอบ Occupation Classกรณี Occupation Class = 1 ให้ RI premium rate = acc_cls1_prem_rateกรณี Occupation Class = 2 ให้ RI premium rate = acc_cls2_prem_rateกรณี Occupation Class = 3 ให้ RI premium rate = acc_cls3_prem_rate กรณี Occupation Class ไม่ใช่ 1, 2, 3 ให้ RI Premium = 0 กรณีไม่พบข้อมูล RI premium rate ให้ RI Premium = 0 30003102000193(SR ADD * RI premium rate ADD) / 1000({RI_PREM_RATE_ADD} * {SR_ADD}) / 100030003112000193SR ADD * RI premium rate ADD {SR_ADD} * {RI_PREM_RATE_ADD} RI PremiumTPD30003122000194ไม่กำหนด  30003132000194(RI premium rate TPD / SR TPD) * Actual SA TPD {RI_PREM_RATE_TPD} * {SR_TPD} / {ACTUAL_SA_TPD} กรณีไม่พบข้อมูล RI premium rate ให้ RI Premium = 0 30003142000194SR TPD * RI premium rate TPD / 1000 {SR_TPD} * {RI_PREM_RATE_TPD} / 1000RI PremiumTTD30003152000195ไม่กำหนด  30003162000195(RI premium rate TTD * SR TTD) / Actual SA TTD ({RI_PREM_RATE_TTD} * {SR_TTD}) / {ACTUAL_SA_TTD} กรณีไม่พบข้อมูล RI premium rate ให้ RI Premium = 030003172000195SR TTD * RI premium rate TTD / 1000 {SR_TTD} * {RI_PREM_RATE_TTD} / 1000RI PremiumRIDER30003182000196ไม่กำหนด  30003192000196(RI premium rate RIDER * SR RIDER) / Actual SA RIDER ({RI_PREM_RATE_RIDER} * {SR_RIDER}) / {ACTUAL_SA_RIDER} กรณีเป็น RI Premium ประเภท Set up By Package RI premium rate = cancer_prem_rateกรณีไม่พบข้อมูล RI premium rate ให้ RI Premium = 030003202000196SR RIDER * RI premium rate RIDER / 1000 {SR_RIDER} * {RI_PREM_RATE_RIDER} / 1000
3. นำค่า RI Premium ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้    แสดงรายละเอียด  ข้อมูลประเภทความคุ้มครองParameter RI PremiumLIFE{RI_PREMIUM_LIFE}RI PremiumADD{RI_PREMIUM_ADD}RI PremiumTPD{RI_PREMIUM_TPD}RI PremiumTTD{RI_PREMIUM_TTD}RI PremiumRIDERกรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC' {RI_PREMIUM_RIDER} กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP120' ถ้า  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP1'  {RI_PREM_RIDER_G1}  หรือ[cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP2'  {RI_PREM_RIDER_G2}  หรือ  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP3'  {RI_PREM_RIDER_G3}  หรือ  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP4'  {RI_PREM_RIDER_G4}  หรือ  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP5'  {RI_PREM_RIDER_G5}  หรือ  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP6'  {RI_PREM_RIDER_G6}  หรือ  [cf_prem_by_grp_ci_hd](http://wiki.thaisamut.co.th/x/g4HoQQ).prem_group_code = 'GROUP7' {RI_PREM_RIDER_SP} และ นำค่าทั้งหมด รวมกันเก็บไว้ใน  {RI_PREMIUM_RIDER} ={RI_PREM_RIDER_G1} + {RI_PREM_RIDER_G2} + {RI_PREM_RIDER_G3} + {RI_PREM_RIDER_G4} + {RI_PREM_RIDER_G5} + {RI_PREM_RIDER_G6} + {RI_PREM_RIDER_SP}
4. ตรวจสอบค่า Premium ที่ได้

ตรวจสอบ Premium
แสดงรายละเอียด
- ตรวจสอบ Treaty ที่ประมวลผล เท่ากับ lookup_key ใน cf_lookup_catalog.parent_id = 1006100base premium > 0 ส่งประกันต่อbase premium = 0 ไม่ต้องส่งประกันต่อrider ตรวจสอบ Package Code ของ Plan Code ถ้า = P แล้ว premium base > 0 ต้องส่งประกันต่อถ้า = P แล้ว premium base = 0 ไม่ต้องส่งประกันต่อถ้า <> P แล้ว premium rider > 0 ต้องส่งประกันต่อถ้า <> P แล้ว premium rider = 0 ไม่ต้องส่งประกันต่อ
- ตรวจสอบ Treaty ที่ประมวลผล เท่ากับ lookup_key ใน cf_lookup_catalog.parent_id = 1006200base premium > 0 ส่งประกันต่อbase premium = 0 ไม่ต้องส่งประกันต่อrider ตรวจสอบรายการ Baseถ้า premium base > 0 ต้องส่งประกันต่อถ้า premium base = 0 ไม่ต้องส่งประกันต่อ
- ถ้าไม่อยู่ใน cf_lookup_catalog.parent_id = 1006100, 1006200premium = 0 ไม่ต้องส่งประกันต่อ

(suthanee.sa 19/06/2025) (suthanee.sa 14/07/2025) (suthanee.sa 17/07/2025)

# 16 การประมวลผล RI Commission

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471538  
> **Page ID:** 1116471538  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 16 การประมวลผล RI Commission

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Commission
การประมวลผล RI Commission มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Plan Code | รหัสแบบประกัน Base | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ |
|  | Policy Term | ระยะเวลาความคุ้มครอง |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {RI_PREMIUM_LIFE} | RI Premium Life | [14 การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg) |
| Auto Rider | Rider Code | รหัสแบบประกัน Rider | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Policy Year Rider | ปีกรมธรรม์ของ Rider |
|  | Policy Term Rider | จำนวนปีความคุ้มครองของ Rider |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | RI Premium {RI_PREMIUM_ADD}RI Premium ADD{RI_PREMIUM_TPD}RI Premium TPD{RI_PREMIUM_TTD}RI Premium TTD{RI_PREMIUM_RIDER}RI Premium RIDER | [14 การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg) |
|  |  |
| {RI_PREMIUM_ADD} | RI Premium ADD |
| {RI_PREMIUM_TPD} | RI Premium TPD |
| {RI_PREMIUM_TTD} | RI Premium TTD |
| {RI_PREMIUM_RIDER} | RI Premium RIDER |
| FAC Base | Plan Code | รหัสแบบประกัน Base | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ |
|  | Policy Term | ระยะเวลาความคุ้มครอง |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {RI_PREMIUM_LIFE} | RI Premium Life | [14 การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg) |
| FAC Rider | Rider Code | รหัสแบบประกัน Rider | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Policy Year Rider | ปีกรมธรรม์ของ Rider |
|  | Policy Term Rider | จำนวนปีความคุ้มครองของ Rider |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | RI Premium {RI_PREMIUM_ADD}RI Premium ADD{RI_PREMIUM_TPD}RI Premium TPD{RI_PREMIUM_TTD}RI Premium TTD{RI_PREMIUM_RIDER}RI Premium RIDER | [14 การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg) |
|  |  |
| {RI_PREMIUM_ADD} | RI Premium ADD |
| {RI_PREMIUM_TPD} | RI Premium TPD |
| {RI_PREMIUM_TTD} | RI Premium TTD |
| {RI_PREMIUM_RIDER} | RI Premium RIDER |

1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล RI Premium ที่ได้จาก [การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg)ดึงข้อมูล RI Commission rate นำ [cf_treaty](http://wiki.thaisamut.co.th/display/RDSINRI/01.+cf_treaty).treaty_id ไปเทียบกับ [cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate).cf_treaty_id จะได้ [cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate).cf_comm_rate_id, ms_comm_typeกรณีเป็น RI Commission rate รูปแบบ Year ([cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate).ms_comm_type = 'YEAR')    แสดงรายละเอียด  1. ค้นหา RI Commission rate ในตาราง [cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)ข้อมูล inputNameDescriptionValueremarkcfCommissionRateIdid ของ [cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate)ได้จากข้อ ii effectiveDateFromวันที่มีผลบังคับใช้ตั้งแต่วันที่เริ่มต้นและสิ้นสุดสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้BASE : Commencement DateRider : Commencement Date RidereffectiveDateToวันที่มีผลบังคับใช้ถึงวันที่เริ่มต้นและสิ้นสุดสัญญากรมธรรม์ค้นหา RI Commission rate ในตาราง [cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)ConditionTableFieldกรณีปีแรกของ Base[cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)first_year_comm_rateกรณีปีต่อของ Base[cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)renew_year_comm_rateกรณีปีแรกของ Rider[cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)rider_first_year_comm_rateกรณีปีต่อของ Rider[cf_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)rider_renew_year_comm_rate[เ](http://wiki.thaisamut.co.th/display/RDSINRI/14.+cf_comm_by_year)ก็บค่าลงใน {RI_COMM_RATE}  กรณีเป็น RI Commission ประเภท Policy ([cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate).ms_comm_type = 'TERM')    แสดงรายละเอียด  1. ค้นหา RI Commission rate ในตาราง [cf_comm_by_term](http://wiki.thaisamut.co.th/display/RDSINRI/15.+cf_comm_by_term)ข้อมูล inputNameDescriptionValueremarkcfCommissionRateIdid ของ [cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate)ได้จากข้อ ii policyYearจำนวน Yearปีกรมธรรม์ กรณีที่ ปีกรมธรรม์ ที่ได้ มากกว่าหรือเท่ากับจำนวน Year มากที่สุดที่บันทึกไว้ ให้ใช้ค่าของ จำนวน Year ที่มากที่สุดเสมอ policyTermจำนวน Term ระยะเวลาความคุ้มครอง กรณีที่ ระยะเวลาความคุ้มครอง ที่ได้ มากกว่าหรือเท่ากับจำนวน Term มากที่สุดที่บันทึกไว้ ให้ใช้ค่าของ จำนวน Term ที่มากที่สุดเสมอ effectiveDateFromวันที่มีผลบังคับใช้ตั้งแต่วันที่เริ่มต้นและสิ้นสุดสัญญากรมธรรม์เทียบกับวันที่เริ่มสัญญาของกรมธรรม์ อยู่ระหว่าง effective_date_from - effective_date_to ที่กำหนดไว้BASE : Commencement DateRider : Commencement Date RidereffectiveDateToวันที่มีผลบังคับใช้ถึงวันที่เริ่มต้นและสิ้นสุดสัญญากรมธรรม์ค้นหา RI Commission rate ในตาราง [cf_comm_by_term เ](http://wiki.thaisamut.co.th/display/RDSINRI/15.+cf_comm_by_term)ก็บค่าลงใน {RI_COMM_RATE}  กรณีเป็น RI Commission ประเภท Policy ([cf_commission_rate](http://wiki.thaisamut.co.th/display/RDSINRI/13.+cf_commission_rate).ms_comm_type = 'NOFIG') ไม่ต้องประมวลผล RI Commission
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ) ตัวอย่างการคำนวณหมายเหตุRI CommissionLIFE30003312000202ไม่กำหนด RI Premium LIFE = 3,216,873.5 RI Commission rate = 1.71 = 3216873.5 * 1.71 = 5,500,853.69            กรณี RI Commission rate รูปแบบ Yearตรวจสอบ Report typeกรณี Report type = 'New' ให้ RI Commission rate = [tx_tmp_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+tx_tmp_comm_by_year).first_year_comm_rate กรณี Report type = 'Renew' ให้ RI Commission rate = [tx_tmp_comm_by_year](http://wiki.thaisamut.co.th/display/RDSINRI/14.+tx_tmp_comm_by_year).renew_year_comm_rateกรณี RI Commission rate รูปแบบ Term ให้ RI Commission rate = [tx_tmp_comm_by_term](http://wiki.thaisamut.co.th/display/RDSINRI/15.+tx_tmp_comm_by_term).comm_rate            30003322000202RI Premium LIFE * RI Commission rate {RI_PREMIUM_LIFE} * {RI_COMM_RATE} RI CommissionADD30003332000203ไม่กำหนด 30003342000203RI Premium ADD * RI Commission rate {RI_PREMIUM_ADD} * {RI_COMM_RATE} 30003352000203Round(RI premium ADD * 0.45,2) ROUND({RI_PREMIUM_ADD} * 0.45,2)RI CommissionTPD30003362000204ไม่กำหนด 30003372000204RI Premium TPD * RI Commission rate {RI_PREMIUM_TPD} * {RI_COMM_RATE} RI CommissionTTD30003382000205ไม่กำหนด 30003392000205RI Premium TTD * RI Commission rate {RI_PREMIUM_TTD} * {RI_COMM_RATE} RI CommissionRIDER30003402000206ไม่กำหนด 30003412000206RI Premium RIDER * RI Commission rate {RI_PREMIUM_RIDER} * {RI_COMM_RATE}
5. นำค่า RI Commission ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter RI CommissionLIFE{RI_COMM_LIFE}RI CommissionADD{RI_COMM_ADD}RI CommissionTPD{RI_COMM_TPD}RI CommissionTTD{RI_COMM_TTD}RI CommissionRIDER {RI_COMM_RIDER}

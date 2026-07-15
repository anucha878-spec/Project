# 05 การประมวลผล Net Amount at Risk

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471527  
> **Page ID:** 1116471527  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 05 การประมวลผล Net Amount at Risk

---

การประมวลผล Net Amount at Risk
การประมวลผล Net Amount at Risk มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล  Current_Policy_New, Current_Policy_Renew และ Current_Policy_Renew_RI[การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล Actual SA ที่ได้จาก [การคำนวณ Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg)ดึงข้อมูล Reserve amount ที่ได้จาก [การประมวลผล Reserve amount](http://wiki.thaisamut.co.th/x/5QCMQg)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id

นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| Net Amount at Risk | LIFE | 3000167 | 2000129 | ไม่กำหนด | Actual SA = 9,500,000 Reserve amount = 33,126.5 = 9500000 - 33126.5 = 9,466,873.5 |  |
| 3000168 | 2000129 | Actual SA LIFE - Reserve amount LIFE {ACTUAL_SA_LIFE} - {RESERVE_AMOUNT_LIFE} |  |
| Net Amount at Risk | ADD | 3000169 | 2000130 | ไม่กำหนด |  |
| 3000170 | 2000130 | Actual SA ADD - Reserve amount ADD {ACTUAL_SA_ADD} - {RESERVE_AMOUNT_ADD} |  |
| 3000415 (CR) | 2000130 | ใช้สูตรตาม Package Code (L = 0, P = NAR LIFE, N = NAR LIFE) |  | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = NAR LIFE {NAR_LIFE}N = NAR LIFE {NAR_LIFE} |
| 3000421 (CR 03/02/2025) | 2000130 | NAR LIFE {NAR_LIFE} |  |  |
| Net Amount at Risk | TPD | 3000171 | 2000131 | ไม่กำหนด |  |  |
| 3000172 | 2000131 | Actual SA TPD - Reserve amount TPD {ACTUAL_SA_TPD} - {RESERVE_AMOUNT_TPD} | Actual SA = 9,500,000 Reserve amount = 33,126.5 = 9500000 - 33126.5 = 9,466,873.5 |  |
| 3000416 (CR) | 2000131 | ใช้สูตรตาม Package Code (L = 0, P = NAR LIFE, N = NAR LIFE) |  | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = NAR LIFE {NAR_LIFE}N = NAR LIFE {NAR_LIFE} |
| 3000422 (CR 03/02/2025) | 2000131 | NAR LIFE {NAR_LIFE} |  |  |
| Net Amount at Risk | TTD | 3000173 | 2000132 | ไม่กำหนด | Actual SA = 9,500,000 Reserve amount = 33,126.5 = 9500000 - 33126.5 = 9,466,873.5 |  |
| 3000174 | 2000132 | Actual SA TTD - Reserve amount TTD {ACTUAL_SA_TTD} - {RESERVE_AMOUNT_TTD} |  |
| Net Amount at Risk | RIDER | 3000175 | 2000133 | ไม่กำหนด |  |
| 3000176 | 2000133 | Actual SA RIDER - Reserve amount RIDER {ACTUAL_SA_RIDER} - {RESERVE_AMOUNT_RIDER} |  |
| Net Amount at Risk | MURDER | 3000177 | 2000134 | ไม่กำหนด |  |
| 3000178 | 2000134 | Actual SA MURDER (PA) {ACTUAL_SA_MURDER} |  |
| Net Amount at Risk | MOTORCYCLE | 3000179 | 2000135 | ไม่กำหนด |  |
| 3000180 | 2000135 | Actual SA MOTORCYCLE (PA) {ACTUAL_SA_MOTORCYCLE} |  |
| Net Amount at Risk | PUBLIC | 3000181 | 2000136 | ไม่กำหนด |  |
| 3000182 | 2000136 | Actual SA PUBLIC (PA) {ACTUAL_SA_PUBLIC} |  |
| Net Amount at Risk | HOLIDAY | 3000183 | 2000137 | ไม่กำหนด |  |
| 3000184 | 2000137 | Actual SA HOLIDAY (PA) {ACTUAL_SA_HOIDAY} |  |

1. นำค่า Net Amount at Risk ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | Parameter | กระบวนการหลังจากผ่าน Main Process ข้อ 12 ขั้นตอนการเลือก Policy ส่งประกันต่อ แล้ว CR#3 |
| --- | --- | --- | --- |
| Net Amount at Risk | LIFE | {NAR_LIFE} | ตรวจสอบ Treaty ที่กำลังประมวลผล ใน [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw) ถ้า Treaty ที่กำลังประมวลผล = [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).treaty_code และ สถานะรายการ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).status = Aกรมธรรม์ที่มีวันที่เริ่มต้นสัญญา อยู่ในช่วงของ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).effective_date_from และ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).effective_date_to ของรายการนั้นให้นำค่า NAR ที่ได้ ไปคูณกับ percent / 100 และจัดเก็บค่านั้นลงในฐานข้อมูล({NAR_LIFE} * percent) / 100 ({NAR_ADD} * percent) / 100({NAR_TPD} * percent) / 100({NAR_TTD} * percent) / 100({NAR_RIDER} * percent) / 100 |
| Net Amount at Risk | ADD | {NAR_ADD} |
| Net Amount at Risk | TPD | {NAR_TPD} |
| Net Amount at Risk | TTD | {NAR_TTD} |
| Net Amount at Risk | RIDER | {NAR_RIDER} |
| Net Amount at Risk | MURDER | {NAR_MURDER} |  |
| Net Amount at Risk | MOTORCYCLE | {NAR_MOTORCYCLE} |  |
| Net Amount at Risk | PUBLIC | {NAR_PUBLIC} |  |
| Net Amount at Risk | HOLIDAY | {NAR_HOLIDAY} |  |

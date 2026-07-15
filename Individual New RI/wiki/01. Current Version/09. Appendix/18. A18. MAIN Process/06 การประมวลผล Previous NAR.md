# 06 การประมวลผล Previous NAR

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446312  
> **Page ID:** 1131446312  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 06 การประมวลผล Previous NAR

---

การประมวลผล Previous NAR
การประมวลผล Previous NAR มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล Previous_Policy [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ค้นหากรมธรรม์ก่อนหน้า โดยนำ ID Card ของผู้เอาประกัน ไปค้นหาเลขที่กรมธรรม์ที่อยู่ใน T3000417reaty เดียวกัน
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำรายการล่าสุดของกรมธรรม์ Previous ที่ถูกสร้าง มาคำนวณ โดยดูจาก Effective Date From (suthanee.sa 2024/11/22)

นำ [Previous Actual SA](http://wiki.thaisamut.co.th/x/_ACMQg) และ [Reserve amount](http://wiki.thaisamut.co.th/x/oACMQg) ที่ได้จาก [การประมวลผล Net Amount at Risk](http://wiki.thaisamut.co.th/x/5wCMQgg) ของ**กรมธรรม์ก่อนหน้า**ทั้งหมด ตามแต่ละประเภทความคุ้มครอง มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| Previous NAR | LIFE | 3000185 | 2000138 | ไม่กำหนด | Previous Policy 1: NAR = 5,500,000 Previous Policy 2: NAR = 4,000,000 |  |
| 3000186 | 2000138 | Previous Actual SA LIFE - Reserve amount LIFE {PREVIOUS_ACTUAL_SA_LIFE} - {PREVIOUS_RESERVE_AMOUNT_LIFE} |  |
| Previous NAR | ADD | 3000187 | 2000139 | ไม่กำหนด |  |
| 3000188 | 2000139 | Previous Actual SA ADD - Reserve amount ADD {PREVIOUS_ACTUAL_SA_ADD} - {PREVIOUS_RESERVE_AMOUNT_ADD} |  |
| 3000417 (CR) | 2000139 | ใช้สูตรตาม Package Code (L = 0, P = Previous NAR LIFE, N = Previous NAR LIFE) | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = Previous NAR LIFE {PREVIOUS_NAR_LIFE}N = Previous NAR LIFE {PREVIOUS_NAR_LIFE} |
| 3000423 (CR 03/02/2025) | 2000139 | Previous NAR LIFE {PREVIOUS_NAR_LIFE} |  |
| Previous NAR | TPD | 3000189 | 2000140 | ไม่กำหนด |  |
| 3000190 | 2000140 | Previous Actual SA TPD - Reserve amount TPD {PREVIOUS_ACTUAL_SA_TPD} - {PREVIOUS_RESERVE_AMOUNT_TPD} |  |
| 3000418 (CR) | 2000140 | ใช้สูตรตาม Package Code (L = 0, P = Previous NAR LIFE, N = Previous NAR LIFE) | กรณีเลือก ms_formular.ms_formula_id นี้ ให้คำนวณตาม package_code ที่พบดังนี้ **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description L = 0P = Previous NAR LIFE {PREVIOUS_NAR_LIFE}N = Previous NAR LIFE {PREVIOUS_NAR_LIFE} |
| 3000424 (CR 03/02/2025) | 2000140 | Previous NAR LIFE {PREVIOUS_NAR_LIFE} |  |
| Previous NAR | TTD | 3000191 | 2000141 | ไม่กำหนด |  |
| 3000192 | 2000141 | Previous Actual SA TTD - Reserve amount TTD {PREVIOUS_ACTUAL_SA_TTD} - {PREVIOUS_RESERVE_AMOUNT_TTD} |  |
| Previous NAR | RIDER | 3000193 | 2000142 | ไม่กำหนด |  |
| 3000194 | 2000142 | Previous Actual SA RIDER - Reserve amount RIDER {PREVIOUS_ACTUAL_SA_RIDER} - {PREVIOUS_RESERVE_AMOUNT_RIDER} |  |
| Previous NAR | MURDER | 3000195 | 2000143 | ไม่กำหนด |  |
| 3000196 | 2000143 | Actual SA MURDER (PA) {ACTUAL_SA_MURDER} |  |
| Previous NAR | MOTORCYCLE | 3000197 | 2000144 | ไม่กำหนด |  |
| 3000198 | 2000144 | Actual SA MOTORCYCLE (PA) {ACTUAL_SA_MOTORCYCLE} |  |
| Previous NAR | PUBLIC | 3000199 | 2000145 | ไม่กำหนด |  |
| 3000200 | 2000145 | Actual SA PUBLIC (PA) {ACTUAL_SA_PUBLIC} |  |
| Previous NAR | HOLIDAY | 3000201 | 2000146 | ไม่กำหนด |  |
| 3000202 | 2000146 | Actual SA HOLIDAY (PA) {ACTUAL_SA_HOIDAY} |  |

1. นำค่า Previous NAR ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter กระบวนการหลังจากผ่าน Main Process ข้อ 12 ขั้นตอนการเลือก Policy ส่งประกันต่อ แล้ว CR#3Previous NARLIFE{PREVIOUS_NAR_LIFE}ตรวจสอบ Treaty ที่กำลังประมวลผล ใน [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw) ถ้า Treaty ที่กำลังประมวลผล = [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).treaty_code และ สถานะรายการ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).status = Aกรมธรรม์ที่มีวันที่เริ่มต้นสัญญา อยู่ในช่วงของ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).effective_date_from และ [ms_treaty_share](http://wiki.thaisamut.co.th/x/kYFORw).effective_date_to ของรายการนั้นให้นำค่า NAR ที่ได้ ไปคูณกับ percent / 100 และจัดเก็บค่านั้นลงในฐานข้อมูล({PREVIOUS_NAR_LIFE} * percent) / 100 ({PREVIOUS_NAR_ADD} * percent) / 100({PREVIOUS_NAR_TPD} * percent) / 100({PREVIOUS_NAR_TTD} * percent) / 100({PREVIOUS_NAR_RIDER} * percent) / 100Previous NARADD{PREVIOUS_NAR_ADD}Previous NARTPD{PREVIOUS_NAR_TPD}Previous NARTTD{PREVIOUS_NAR_TTD}Previous NARRIDER {PREVIOUS_NAR_RIDER}Previous NARMURDER{ACTUAL_SA_MURDER} Previous NARMOTORCYCLE{ACTUAL_SA_MOTORCYCLE} Previous NARPUBLIC{ACTUAL_SA_PUBLIC} Previous NARHOLIDAY{ACTUAL_SA_HOIDAY}

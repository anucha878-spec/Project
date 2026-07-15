# 07 การประมวลผล Total NAR

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471692  
> **Page ID:** 1116471692  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 07 การประมวลผล Total NAR

---

การประมวลผล Total NAR
การประมวลผล Total NAR มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล  Current_Policy_New, Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล [NAR](http://wiki.thaisamut.co.th/x/5wCMQgg) และ [Previous NAR](http://wiki.thaisamut.co.th/x/KIBwQw)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal NARLIFE30002032000147ไม่กำหนดNAR = 5,500,000 Previous NAR = 4,000,000 = 5500000 + 4000000= 9,500,000             30002042000147NAR LIFE + Previous NAR LIFE {NAR_LIFE} + {PREVIOUS_NAR_LIFE}  Total NARADD30002052000148ไม่กำหนด 30002062000148NAR ADD + Previous NAR ADD {NAR_ADD} + {PREVIOUS_NAR_ADD}  Total NARTPD30002072000149ไม่กำหนด 30002082000149NAR TPD + Previous NAR TPD {NAR_TPD} + {PREVIOUS_NAR_TPD}  Total NARTTD30002092000150ไม่กำหนด 30002102000150NAR TTD + Previous NAR TTD {NAR_TTD} + {PREVIOUS_NAR_TTD}  Total NARRIDER 30002112000151ไม่กำหนด 3000212 2000151NAR RIDER + Previous NAR RIDER {NAR_RIDER} + {PREVIOUS_NAR_RIDER}  Total NARMURDER30002132000152ไม่กำหนด 30002142000152NAR MURDER + Previous NAR MURDER (PA) {NAR_MURDER} + {PREVIOUS_NAR_MURDER}  Total NARMOTORCYCLE30002152000153ไม่กำหนด 30002162000153NAR MOTORCYCLE + Previous NAR MOTORCYCLE (PA) {NAR_MOTORCYCLE} + {PREVIOUS_NAR_MOTORCYCLE}  Total NARPUBLIC30002172000154ไม่กำหนด 30002182000154NAR PUBLIC + Previous NAR PUBLIC (PA) {NAR_PUBLIC} + {PREVIOUS_NAR_PUBLIC}  Total NARHOLIDAY30002192000155ไม่กำหนด 30002202000155NAR HOLIDAY + Previous NAR HOLIDAY (PA) {NAR_HOLIDAY} + {PREVIOUS_NAR_HOLIDAY}
5. นำค่า Total NAR ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Total NARLIFE{TOTAL_NAR_LIFE}Total NARADD{TOTAL_NAR_ADD}Total NARTPD{TOTAL_NAR_TPD}Total NARTTD{TOTAL_NAR_TTD}Total NARRIDER {TOTAL_NAR_RIDER}Total NARMURDER{TOTAL_NAR_MURDER}Total NARMOTORCYCLE{TOTAL_NAR_MOTORCYCLE}Total NARPUBLIC{TOTAL_NAR_PUBLIC}Total NARHOLIDAY{TOTAL_NAR_HOLIDAY}

# 18 การประมวลผล Total RI premium

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446326  
> **Page ID:** 1131446326  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 18 การประมวลผล Total RI premium

---

การประมวลผล Total RI premium
การประมวลผล
Total RI premium
มีขั้นตอนดังนี้
1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณRI Premium รวมทุกประเภทความคุ้มครอง ที่ได้จาก [การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal RI premiumALL30003522000212ไม่กำหนด  30003532000212RI Premium LIFE + RI Premium ADD + RI Premium TPD + RI Premium TTD + RI Premium Rider {RI_PREMIUM_LIFE} + {RI_PREMIUM_ADD} + {RI_PREMIUM_TPD} + {RI_PREMIUM_TTD} + {RI_PREMIUM_RIDER} RI Premium LIFE = 4,000,000RI Premium ADD = 200,000 RI Premium TPD = 200,000RI Premium TTD = 200,000RI Premium Rider = 200,000   = 4,000,000 + 200,000 + 200,000 + 200,000 + 200,000 = 4,800,000
5. นำค่า Total RI Premium ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Total RI premiumALL{TOTAL_RI_PREMIUM}

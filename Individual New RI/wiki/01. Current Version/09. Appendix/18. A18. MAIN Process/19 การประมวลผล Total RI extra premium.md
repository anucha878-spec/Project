# 19 การประมวลผล Total RI extra premium

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446328  
> **Page ID:** 1131446328  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 19 การประมวลผล Total RI extra premium

---

การประมวลผล Total RI extra premium
การประมวลผล
Total RI premium
มีขั้นตอนดังนี้
1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณRI Extra Premium รวมทุกประเภทความคุ้มครอง ที่ได้จาก [การประมวลผล RI Extra Premium](http://wiki.thaisamut.co.th/x/7QCMQg)[](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471692)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal RI extra premiumALL30003542000213ไม่กำหนด  30003552000213RI extra premium LIFE + RI extra premium ADD + RI extra premium TPD + RI extra premium TTD + RI extra premium Rider {RI_EXTRA_PREM_LIFE} + {RI_EXTRA_PREM_ADD} + {RI_EXTRA_PREM_TPD} + {RI_EXTRA_PREM_TTD} + {RI_EXTRA_PREM_RIDER} RI extra Premium LIFE = 4,000,000RI extra Premium ADD = 200,000 RI extra Premium TPD = 200,000RI extra Premium TTD = 200,000RI extra Premium Rider = 200,000   = 4,000,000 + 200,000 + 200,000 + 200,000 + 200,000 = 4,800,000
5. นำค่า Total RI extra premium ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Total RI extra premiumALL{TOTAL_RI_EXTRA_PREMIUM}

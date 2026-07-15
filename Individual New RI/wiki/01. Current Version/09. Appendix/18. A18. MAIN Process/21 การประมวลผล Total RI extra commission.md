# 21 การประมวลผล Total RI extra commission

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446332  
> **Page ID:** 1131446332  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 21 การประมวลผล Total RI extra commission

---

การประมวลผล Total RI extra commission
การประมวลผล
Total RI premium
มีขั้นตอนดังนี้
1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณRI Extra Commission รวมทุกประเภทความคุ้มครอง ที่ได้จาก [การประมวลผล RI Extra Commission](http://wiki.thaisamut.co.th/x/9ACMQg)[](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471590)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal RI extra commissionALL30003582000215ไม่กำหนด  30003592000215RI extra commission LIFE + RI extra commission ADD + RI extra commission TPD + RI extra commission TTD + RI extra commission Rider {RI_EXTRA_COMM_LIFE} + {RI_EXTRA_COMM_ADD} + {RI_EXTRA_COMM_TPD} + {RI_EXTRA_COMM_TTD} + {RI_EXTRA_COMM_RIDER} RI extra commission LIFE = 4,000,000RI extra commission  ADD = 200,000 RI extra commission TPD = 200,000RI extra commission TTD = 200,000RI extra commission Rider = 200,000  = 4,000,000 + 200,000 + 200,000 + 200,000 + 200,000 = 4,800,000
5. นำค่า Total RI extra commission ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Total RI extra commissionALL{TOTAL_RI_EXTRA_COMMISSION}

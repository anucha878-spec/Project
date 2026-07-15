# 20 การประมวลผล Total RI commission

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1131446330  
> **Page ID:** 1131446330  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 20 การประมวลผล Total RI commission

---

การประมวลผล Total RI commission
การประมวลผล
Total RI premium
มีขั้นตอนดังนี้
1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณRI Commission รวมทุกประเภทความคุ้มครอง ที่ได้จาก [การประมวลผล RI Commission](http://wiki.thaisamut.co.th/x/8gCMQg)[](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471590)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal RI commissionALL30003562000214ไม่กำหนด  30003572000214RI commission LIFE + RI commission ADD + RI commission TPD + RI commission TTD + RI commission Rider {RI_COMM_LIFE} + {RI_COMM_ADD} + {RI_COMM_TPD} + {RI_COMM_TTD} + {RI_COMM_RIDER} RI commission  LIFE = 4,000,000RI commission  ADD = 200,000 RI commission  TPD = 200,000RI commission  TTD = 200,000RI commission  Rider = 200,000  = 4,000,000 + 200,000 + 200,000 + 200,000 + 200,000 = 4,800,000
5. นำค่า Total RI commission ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Total RI commissionALL{TOTAL_RI_COMMISSION}

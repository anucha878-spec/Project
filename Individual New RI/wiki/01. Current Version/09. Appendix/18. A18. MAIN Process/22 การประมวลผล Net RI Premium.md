# 22 การประมวลผล Net RI Premium

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453418  
> **Page ID:** 1119453418  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 22 การประมวลผล Net RI Premium

---

การประมวลผล Net RI Premium
การประมวลผล Net RI Premium มีขั้นตอนดังนี้
1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณ[Total RI premium](http://wiki.thaisamut.co.th/x/NoBwQw)[Total RI extra premium](http://wiki.thaisamut.co.th/x/OIBwQw)[Total RI commission](http://wiki.thaisamut.co.th/x/OoBwQw)[Total RI extra commission](http://wiki.thaisamut.co.th/x/6oC5Qg)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุNet RI PremiumALL30003602000216ไม่กำหนด  30003612000216(Total RI premium + Total RI extra premium) - (Total RI commission + Total RI extra commission) ({TOTAL_RI_PREM} + {TOTAL_RI_EXTRA_PREM}) - ({TOTAL_RI_COMM} + {TOTAL_RI_EXTRA_COMM})  Total RI premium = 4,000,000Total RI extra premium = 5,500,000 Total RI commission = 200,000Total RI extra commission = 40,000 = (4000000 + 5500000) - (200000 + 40000)= 9,260,000
5. นำค่า Net RI Premium ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameter Net RI PremiumALL{NET_RI_PREM}

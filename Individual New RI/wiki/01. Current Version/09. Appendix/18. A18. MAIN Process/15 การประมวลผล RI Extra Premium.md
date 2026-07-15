# 15 การประมวลผล RI Extra Premium

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471533  
> **Page ID:** 1116471533  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 15 การประมวลผล RI Extra Premium

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Extra Premium
การประมวลผล RI Extra Premium มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล RI premium ที่ได้จาก [การประมวลผล RI Premium](http://wiki.thaisamut.co.th/x/6wCMQg) ดึงข้อมูล EMR% ที่ได้จาก [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id

นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| RI Extra Premium | LIFE | 3000321 | 2000197 | ไม่กำหนด | RI premium = 9,500,000 EMR% = 72 = 9500000 * 72 = 684,000,000 |  |
| 3000322 | 2000197 | RI premium LIFE * EMR% {RI_PREMIUM_LIFE} * ({EMR} / 100) |  |
| RI Extra Premium | ADD | 3000323 | 2000198 | ไม่กำหนด |  |
| 3000324 | 2000198 | RI premium ADD * EMR%{RI_PREMIUM_ADD} * ({EMR} / 100) |  |
| RI Extra Premium | TPD | 3000325 | 2000199 | ไม่กำหนด |  |
| 3000326 | 2000199 | RI premium TPD * EMR% {RI_PREMIUM_TPD} * ({EMR} / 100) |  |
| RI Extra Premium | TTD | 3000327 | 2000200 | ไม่กำหนด |  |
| 3000328 | 2000200 | RI premium TTD * EMR% {RI_PREMIUM_TTD} * ({EMR} / 100) |  |
| RI Extra Premium | RIDER | 3000329 | 2000201 | ไม่กำหนด |  |
| 3000330 | 2000201 | RI premium RIDER * EMR% กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC'{RI_PREMIUM_RIDER} * ({EMR} / 100) กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP' {RI_PREM_RIDER_G1} * ({EMR} / 100) {RI_PREM_RIDER_G2} * ({EMR} / 100) {RI_PREM_RIDER_G3} * ({EMR} / 100){RI_PREM_RIDER_G4} * ({EMR} / 100){RI_PREM_RIDER_G5} * ({EMR} / 100){RI_PREM_RIDER_G6} * ({EMR} / 100){RI_PREM_RIDER_SP} * ({EMR} / 100) |  |

นำค่า RI Extra Premium ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | Parameter |
| --- | --- | --- |
| RI Extra Premium | LIFE | {RI_EXTRA_PREM_LIFE} |
| RI Extra Premium | ADD | {RI_EXTRA_PREM_ADD} |
| RI Extra Premium | TPD | {RI_EXTRA_PREM_TPD} |
| RI Extra Premium | TTD | {RI_EXTRA_PREM_TTD} |
| RI Extra Premium | RIDER | กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC'{RI_EXTRA_PREM_RIDER} กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP' {RI_EXTRA_PREM_RIDER_G1}{RI_EXTRA_PREM_RIDER_G2}{RI_EXTRA_PREM_RIDER_G3}{RI_EXTRA_PREM_RIDER_G4}{RI_EXTRA_PREM_RIDER_G5}{RI_EXTRA_PREM_RIDER_G6}{RI_EXTRA_PREM_RIDER_G7}และ นำค่าทั้งหมด รวมกันเก็บไว้ใน {RI_EXTRA_PREM_RIDER} {RI_EXTRA_PREM_RIDER_G1} + {RI_EXTRA_PREM_RIDER_G2} + {RI_EXTRA_PREM_RIDER_G3} + {RI_EXTRA_PREM_RIDER_G4} + {RI_EXTRA_PREM_RIDER_G5} + {RI_EXTRA_PREM_RIDER_G6} + {RI_EXTRA_PREM_RIDER_G7} |

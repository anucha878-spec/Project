# 17 การประมวลผล RI Extra Commission

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471540  
> **Page ID:** 1116471540  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 17 การประมวลผล RI Extra Commission

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Extra Commission
การประมวลผล RI Extra Commission มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI[การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล RI Commission ที่ได้จาก [การประมวลผล RI Commission](http://wiki.thaisamut.co.th/x/8gCMQg) ดึงข้อมูล EMR% ที่ได้จาก [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| RI Extra Commission | LIFE | 3000342 | 2000207 | ไม่กำหนด | RI Commission = 9,500,000 EMR% = 72 = 9500000 * 72 = 684,000,000 |  |
| 3000343 | 2000207 | RI Commission LIFE * EMR% {RI_COMM_LIFE} * ({EMR} / 100) |  |
| RI Extra Commission | ADD | 3000344 | 2000208 | ไม่กำหนด |  |
| 3000345 | 2000208 | RI Commission ADD * EMR% {RI_COMM_ADD} * ({EMR} / 100) |  |
| RI Extra Commission | TPD | 3000346 | 2000209 | ไม่กำหนด |  |
| 3000347 | 2000209 | RI Commission TPD * EMR% {RI_COMM_TPD} * ({EMR} / 100) |  |
| RI Extra Commission | TTD | 3000348 | 2000210 | ไม่กำหนด |  |
| 3000349 | 2000210 | RI Commission TTD * EMR% {RI_COMM_TTD} * ({EMR} / 100) |  |
| RI Extra Commission | RIDER | 3000350 | 2000211 | ไม่กำหนด |  |
| 3000351 | 2000211 | RI Commission RIDER * EMR% {RI_COMM_RIDER} * ({EMR} / 100) |  |

5. นำค่า RI Extra Commission ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

| ข้อมูล | ประเภทความคุ้มครอง | Parameter |
| --- | --- | --- |
| RI Extra Commission | LIFE | {RI_EXTRA_COMM_LIFE} |
| RI Extra Commission | ADD | {RI_EXTRA_COMM_ADD} |
| RI Extra Commission | TPD | {RI_EXTRA_COMM_TPD} |
| RI Extra Commission | TTD | {RI_EXTRA_COMM_TTD} |
| RI Extra Commission | RIDER | {RI_EXTRA_COMM_RIDER} |

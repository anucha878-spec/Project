# 11 การประมวลผล Total SR

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471590  
> **Page ID:** 1116471590  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 11 การประมวลผล Total SR

---

การประมวลผล Total SR
การประมวลผล Total SR มีขั้นตอนดังนี้

1. คำนวณด้วยชุดข้อมูล Current_Policy_New , Current_Policy_Renew และ Current_Policy_Renew_RI [การดึงข้อมูลกรมธรรม์](http://wiki.thaisamut.co.th/x/joCWQg)
2. ดึงข้อมูลที่ใช้ในการคำนวณดึงข้อมูล SR ที่ได้จาก [การประมวลผล SR](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471529) ดึงข้อมูล Previous SR ที่ได้จาก [การประมวลผล Previous SR](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471553)
3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
4. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้ข้อมูลประเภทความคุ้มครอง[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id[ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_idสูตร (Round 2 ตำแหน่งเสมอ)ตัวอย่างการคำนวณหมายเหตุTotal SRLIFE30002692000174ไม่กำหนดSR = 5,500,000 Previous SR = 4,000,000 = 5500000 + 4000000= 9,500,000         คำนวณผลรวม SR ของลูกค้าคนเดียวกันภายใน Treaty เดียวกัน30002702000174SR LIFE + Previous SR LIFE {SR_LIFE} + {PREVIOUS_SR_LIFE} Total SRADD30002712000175ไม่กำหนด30002722000175SR ADD + Previous SR ADD {SR_ADD} + {PREVIOUS_SR_ADD} Total SRTPD30002732000176ไม่กำหนด30002742000176SR TPD + Previous SR TPD {SR_TPD} + {PREVIOUS_SR_TPD} Total SRTTD30002752000177ไม่กำหนด30002762000177SR TTD + Previous SR TTD {SR_TTD} + {PREVIOUS_SR_TTD} Total SRRIDER 30002772000178ไม่กำหนด30002782000178SR RIDER + Previous SR RIDER {SR_RIDER} + {PREVIOUS_SR_RIDER} Total SRMURDER30002792000179ไม่กำหนด30002802000179SR MURDER + Previous SR MURDER (PA) {SR_MURDER} + {PREVIOUS_SR_MURDER} Total SRMOTORCYCLE30002812000180ไม่กำหนด30002822000180SR MOTORCYCLE + Previous SR MOTORCYCLE (PA) {SR_MOTORCYCLE} + {PREVIOUS_SR_MOTORCYCLE} Total SRPUBLIC30002832000181ไม่กำหนด30002842000181SR PUBLIC + Previous SR PUBLIC (PA) {SR_PUBLIC} + {PREVIOUS_SR_PUBLIC} Total SRHOLIDAY30002852000182ไม่กำหนด30002862000182SR HOLIDAY + Previous SR HOLIDAY (PA) {SR_HOLIDAY} + {PREVIOUS_SR_HOLIDAY}
5. นำค่า Total SR ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้ข้อมูลประเภทความคุ้มครองParameterTotal SRLIFE{TOTAL_SR_LIFE}Total SRADD{TOTAL_SR_ADD}Total SRTPD{TOTAL_SR_TPD}Total SRTTD{TOTAL_SR_TTD}Total SRRIDER{TOTAL_SR_RIDER}Total SRMURDER{TOTAL_SR_MURDER}Total SRMOTORCYCLE{TOTAL_SR_MOTORCYCLE}Total SRPUBLIC{TOTAL_SR_PUBLIC}Total SRHOLIDAY{TOTAL_SR_HOLIDAY}

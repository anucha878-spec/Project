# 28 การประมวลผล RI Extra commission refund

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453426  
> **Page ID:** 1119453426  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 28 การประมวลผล RI Extra commission refund

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

RI Extra commission refund
การประมวลผล RI Extra commission refund มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Plan Code | รหัสแบบประกัน Base | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Commencement Date | วันเริ่มสัญญา |
|  | Current Effective Date From | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ตั้งแต่ |
|  | Current Effective Date To | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ถึง |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | {RI_EXTRA_COMM_LIFE} | RI Extra Commission Life | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
| Auto Rider | Rider Code | รหัสแบบประกัน Rider | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Current Effective Date From Rider | วันที่กรมธรรม์ Rider มีผลบังคับใช้ ณ ปัจจุบัน ตั้งแต่ |
|  | Current Effective Date To Rider | วันที่กรมธรรม์ Rider มีผลบังคับใช้ ณ ปัจจุบัน ถึง |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | RI Premium {RI_EXTRA_COMM_ADD}RI Extra Commission ADD{RI_EXTRA_COMM_TPD}RI Extra Commission TPD{RI_EXTRA_COMM_TTD}RI Extra Commission TTD{RI_EXTRA_COMM_RIDER}RI Extra Commission RIDER | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  |  |
| {RI_EXTRA_COMM_ADD} | RI Extra Commission ADD |
| {RI_EXTRA_COMM_TPD} | RI Extra Commission TPD |
| {RI_EXTRA_COMM_TTD} | RI Extra Commission TTD |
| {RI_EXTRA_COMM_RIDER} | RI Extra Commission RIDER |
| FAC Base | Plan Code | รหัสแบบประกัน Base | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Commencement Date | วันเริ่มสัญญา |
|  | Current Effective Date From | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ตั้งแต่ |
|  | Current Effective Date To | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ถึง |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | {RI_EXTRA_COMM_LIFE} | RI Commission Life | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
| FAC Rider | Rider Code | รหัสแบบประกัน Rider | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Current Effective Date From Rider | วันที่กรมธรรม์ Rider มีผลบังคับใช้ ณ ปัจจุบัน ตั้งแต่ |
|  | Current Effective Date To Rider | วันที่กรมธรรม์ Rider มีผลบังคับใช้ ณ ปัจจุบัน ถึง |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | RI Premium {RI_EXTRA_COMM_ADD}RI Extra Commission ADD{RI_EXTRA_COMM_TPD}RI Extra Commission TPD{RI_EXTRA_COMM_TTD}RIExtra Commission TTD{RI_EXTRA_COMM_RIDER}RI Extra Commission RIDER | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  |  |
| {RI_EXTRA_COMM_ADD} | RI Extra Commission ADD |
| {RI_EXTRA_COMM_TPD} | RI Extra Commission TPD |
| {RI_EXTRA_COMM_TTD} | RIExtra Commission TTD |
| {RI_EXTRA_COMM_RIDER} | RI Extra Commission RIDER |

**เงื่อนไขการนำรายการไปคำนวณ สำหรับสถานะ Alteration (suthanee.sa 26/11/2024)**

![](/download/attachments/1119453426/Screenshot%202024-11-26%20100939.png?version=1&modificationDate=1732610368303&api=v2)

**เงื่อนไขการนำรายการไปคำนวณ สำหรับสถานะ Claim (suthanee.sa 26/11/2024)**

![](/download/attachments/1223589917/image2025-2-21%2014%3A30%3A26.png?version=1&modificationDate=1740123026313&api=v2)

SRS V4.2
![](/download/attachments/1223589917/2568-02-04%2010_31_11-Window.png?version=1&modificationDate=1738639906620&api=v2)

1. ตรวจสอบ [24 การประมวลผล RI Extra Premium refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1121911175) กรณี {RI_EXTRA_PREM_REFUND_LIFE},{RI_EXTRA_PREM_REFUND_ADD}, {RI_EXTRA_PREM_REFUND_TPD}, {RI_EXTRA_PREM_REFUND_TTD}, {RI_EXTRA_PREM_REFUND_RIDER} **หากทั้งหมดมีค่าเป็น 0****ให้ทำข้ามการคำนวณ**[28 การประมวลผล RI Extra commission refund](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453426)
2. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
3. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ms_cal_case | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) | ความคุ้มครอง | Parameter | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RI Extra Commission refund | Monthly | 3000376 | 2000223 | ไม่กำหนด |  |  |  |
| 3000377 | 2000223 | RI extra commission * (No. of day of non-coverage in a coverage month / No. of day in a coverage month) | LIFEโดยนำค่า {RI_EXTRA_COMM_LIFE} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) | ************{NUM_OF_DAY_IN_MONTH} = วันทั้งเดือน{NUM_OF_DAY_COVER_IN_MONTH} = วันที่คุ้มครองในเดือนนั้น{NUM_OF_DAY_NON_COVER_IN_MONTH} = วันที่ไม่คุ้มครองในเดือนนั้น**********Base**วิธีการคำนวณวันทั้งเดือน {NUM_OF_DAY_IN_MONTH} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก)วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH} *****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*********หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง**** **Rider** วิธีการคำนวณวันทั้งเดือน {NUM_OF_DAY_IN_MONTH} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก)วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_MONTH} ={NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider**ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*********หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง******************ตัวอย่าง******กรมธรรม์****Current Effective Date From = 01/01/2024Current Effective Date To = 31/01/2024Alteration Date = 16/01/2024 ****{NUM_OF_DAY_IN_MONTH} = 31{NUM_OF_DAY_COVER_IN_MONTH} = 15 {NUM_OF_DAY_NON_COVER_IN_MONTH} = 31 - 15 = 16******** |
| ADDโดยนำค่า {RI_EXTRA_COMM_ADD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| TPDโดยนำค่า {RI_EXTRA_COMM_TPD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| TTDโดยนำค่า {RI_EXTRA_COMM_TTD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| RIDERโดยนำค่า {RI_EXTRA_COMM_RIDER} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| RI Extra Commission refund | Yearly | 3000378 | 2000224 | ไม่กำหนด |  |  |  |
| 3000379 | 2000224 | RI extra commission * (No. of day of non-coverage in a coverage year / No. of day in a coverage year) | LIFEโดยนำค่า {RI_EXTRA_COMM_LIFE} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) | ********{NUM_OF_DAY_IN_YEAR} = วันทั้งปี{NUM_OF_DAY_COVER_IN_YEAR} = วันที่คุ้มครองในปีนั้น{NUM_OF_DAY_NON_COVER_IN_YEAR} = วันที่ไม่คุ้มครองในปีนั้น{FIRST_EFFECTIVE_DATE_FROM} = วันที่คุ้มครองสำหรับการคำนวณรอบแรก กรณีเป็นรูปแบบ A และ E ที่คำนวณครั้งที่ 2 **Base**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ {FIRST_EFFECTIVE_DATE_FROM} ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** ******Rider**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ {FIRST_EFFECTIVE_DATE_FROM} ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider**ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** กรณีไม่ใช่รูปแบบ A และ E ที่คำนวณครั้งที่ 2 **Base**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง********Rider**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider**ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** **ตัวอย่าง**กรมธรรม์Current Effective Date From = 01/01/2024Current Effective Date To = 31/12/2024Alteration Date = 16/06/2024 {NUM_OF_DAY_IN_YEAR} = 366{NUM_OF_DAY_COVER_IN_YEAR} = 167 {NUM_OF_DAY_NON_COVER_IN_YEAR} = 366 - 167 = 199 ![](/download/attachments/1133445576/image2025-3-12%2018%3A37%3A18.png?version=1&modificationDate=1741779439197&api=v2) |
| ADDโดยนำค่า {RI_EXTRA_COMM_ADD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| TPDโดยนำค่า {RI_EXTRA_COMM_TPD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| TTDโดยนำค่า {RI_EXTRA_COMM_TTD} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| RIDERโดยนำค่า {RI_EXTRA_COMM_RIDER} แทนค่า {RI_EXTRA_COMM} ในสูตร | {RI_EXTRA_COMM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |

1. นำค่า RI Extra commission refund ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้กรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = "IN" , "EX" , "RP" , "RE" **ให้บันทึกค่าเป็น ติดลบ ( - )** กรณี [tx_ri_ul_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/36.+tx_ri_ul_alteration_dt).remark = "Increase SA" **ให้บันทึกค่าเป็น ติดลบ ( - )**

| ข้อมูล |  | Parameter |
| --- | --- | --- |
| RI Extra Commission refund | LIFE | {RI_EXTRA_COMM_REFUND_LIFE} |
| RI Extra Commission refund | ADD | {RI_EXTRA_COMM_REFUND_ADD} |
| RI Extra Commission refund | TPD | {RI_EXTRA_COMM_REFUND_TPD} |
| RI Extra Commission refund | TTD | {RI_EXTRA_COMM_REFUND_TTD} |
| RI Extra Commission refund | RIDER | {RI_EXTRA_COMM_REFUND_RIDER} |

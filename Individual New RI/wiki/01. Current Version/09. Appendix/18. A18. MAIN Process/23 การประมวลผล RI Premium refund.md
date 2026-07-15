# 23 การประมวลผล RI Premium refund

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453421  
> **Page ID:** 1119453421  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 23 การประมวลผล RI Premium refund

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Premium refund
การประมวลผล RI Premium refund มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Plan Code | รหัสแบบประกัน Base | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Commencement Date | วันเริ่มสัญญา |
|  | Current Effective Date From | วันที่เริ่มความคุ้มครองในรอบ |
|  | Current Effective Date To | วันที่สิ้นสุดความคุ้มครองในรอบ |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง / วันที่มีผลสลักหลัง |
|  | Event Date | วันที่เกิดเหตุ |
|  | {RI_PREMIUM_LIFE} | RI Premium Life | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
| Auto Rider | Rider Code | รหัสแบบประกัน Rider | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Current Effective Date From Rider | วันที่เริ่มความคุ้มครองในรอบ |
|  | Current Effective Date To Rider | วันที่สิ้นสุดความคุ้มครองในรอบ |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | RI Premium {RI_PREMIUM_ADD}RI Premium ADD{RI_PREMIUM_TPD}RI Premium TPD{RI_PREMIUM_TTD}RI Premium TTD{RI_PREMIUM_RIDER}RI Premium RIDER | [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  |  |
| {RI_PREMIUM_ADD} | RI Premium ADD |
| {RI_PREMIUM_TPD} | RI Premium TPD |
| {RI_PREMIUM_TTD} | RI Premium TTD |
| {RI_PREMIUM_RIDER} | RI Premium RIDER |
| FAC Base | Plan Code | รหัสแบบประกัน Base | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Commencement Date | วันเริ่มสัญญา |
|  | Current Effective Date From | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ตั้งแต่ |
|  | Current Effective Date To | วันที่กรมธรรม์มีผลบังคับใช้ ณ ปัจจุบัน ถึง |
|  | Alteration date | วันที่มีการเปลี่ยนแปลง |
|  | Event Date | วันที่เกิดเหตุ |
|  | {RI_PREMIUM_LIFE} | RI Premium Life | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
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
|  | RI Premium {RI_PREMIUM_ADD}RI Premium ADD{RI_PREMIUM_TPD}RI Premium TPD{RI_PREMIUM_TTD}RI Premium TTD{RI_PREMIUM_RIDER}RI Premium RIDER | [00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  |  |
| {RI_PREMIUM_ADD} | RI Premium ADD |
| {RI_PREMIUM_TPD} | RI Premium TPD |
| {RI_PREMIUM_TTD} | RI Premium TTD |
| {RI_PREMIUM_RIDER} | RI Premium RIDER |

**เงื่อนไขการนำรายการไปคำนวณ สำหรับสถานะ Alteration (suthanee.sa 26/11/2024)**

![](/download/attachments/1119453421/image2024-11-26%2010%3A9%3A43.png?version=1&modificationDate=1732590584313&api=v2)

* กรณีเป็นการต่อสัญญาแบบชำระเบี้ยย้อนหลัง(Reinstate) โหมดรายเดือน ไม่ต้องคำนวณ Premium Refund เนื่องจากจะเป็นการเรียกเก็บที่ New/Renew ย้อนหลังตามงวดที่ต่อสัญญา

IRI-3374
-
	        [New-RI][SIT][EST] - Mapfre_Grp_CL_NonCBank_MRTA (Alter) Alter Code RE (Reinstate) ไม่แสดงข้อมูลใน Report
                (
Closed
)
**เงื่อนไขการนำรายการไปคำนวณ สำหรับสถานะ Claim (suthanee.sa 26/11/2024)**

![](/download/attachments/1223589917/image2025-2-21%2014%3A30%3A26.png?version=1&modificationDate=1740123026313&api=v2)

SRS V4.2
![](/download/attachments/1223589917/2568-02-04%2010_31_11-Window.png?version=1&modificationDate=1738639906620&api=v2)

1. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
2. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล | ms_cal_case | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ | ความคุ้มครอง | Parameter | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RI Premium refund | Monthly | 3000362 | 2000217 | ไม่กำหนด |  |  |  |
| 3000363 | 2000217 | RI premium *(No. of day of non-coverage in a coverage month / No. of day in a coverage month) | LIFEโดยนำค่า {RI_PREMIUM_LIFE} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) | {NUM_OF_DAY_IN_MONTH} = วันทั้งเดือน{NUM_OF_DAY_COVER_IN_MONTH} = วันที่คุ้มครองในเดือนนั้น{NUM_OF_DAY_NON_COVER_IN_MONTH} = วันที่ไม่คุ้มครองในเดือนนั้น ******Base**วิธีการคำนวณวันทั้งเดือน {NUM_OF_DAY_IN_MONTH} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month วันที่คุ้มครองในเดือนนั้น กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = DAY{NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก)กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = MONTH {NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) ถ้า {NUM_OF_DAY_COVER_IN_MONTH} > 0 ให้ {NUM_OF_DAY_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} ถ้า {NUM_OF_DAY_COVER_IN_MONTH} = 0 ให้ = 0วิธีการคำนวณ No. of day of non-coverage in a coverage month วันที่ไม่คุ้มครองในเดือนนั้นกรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = DAY{NUM_OF_DAY_NON_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH}กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = MONTH {NUM_OF_DAY_NON_COVER_IN_MONTH} ถ้า {NUM_OF_DAY_COVER_IN_MONTH} > 0 {NUM_OF_DAY_NON_COVER_IN_MONTH} = 0ถ้า {NUM_OF_DAY_COVER_IN_MONTH} = 0 ให้ {NUM_OF_DAY_NON_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH}*****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** **Rider** วิธีการคำนวณวันทั้งเดือน {NUM_OF_DAY_IN_MONTH} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month วันที่คุ้มครองในเดือนนั้นกรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = DAY{NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date Rider แล้วบวก 1 (เนื่องจากต้องนับวันแรก)กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = MONTH {NUM_OF_DAY_COVER_IN_MONTH} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date Rider แล้วบวก 1 (เนื่องจากต้องนับวันแรก) ถ้า {NUM_OF_DAY_COVER_IN_MONTH} > 0 ให้ {NUM_OF_DAY_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} ถ้า {NUM_OF_DAY_COVER_IN_MONTH} = 0 ให้ = 0วิธีการคำนวณ No. of day of non-coverage in a coverage month วันที่ไม่คุ้มครองในเดือนนั้น กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = DAY{NUM_OF_DAY_NON_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH}กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = MONTH {NUM_OF_DAY_NON_COVER_IN_MONTH} ถ้า {NUM_OF_DAY_COVER_IN_MONTH} > 0 ให้ {NUM_OF_DAY_NON_COVER_IN_MONTH} = 0ถ้า {NUM_OF_DAY_COVER_IN_MONTH} = 0 ให้ {NUM_OF_DAY_NON_COVER_IN_MONTH} = {NUM_OF_DAY_IN_MONTH} - {NUM_OF_DAY_COVER_IN_MONTH}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider** ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก ในการหา วันที่คุ้มครองในเดือนนั้น เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง********ตัวอย่าง**กรมธรรม์ Current Effective Date From = 01/01/2024Current Effective Date To = 31/01/2024Alteration Date = 16/01/2024 กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = DAY{NUM_OF_DAY_IN_MONTH} = 31{NUM_OF_DAY_COVER_IN_MONTH} = 15 {NUM_OF_DAY_NON_COVER_IN_MONTH} = 31 - 15 = 16กรณี [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_cal_fraction_day = MONTH {NUM_OF_DAY_IN_MONTH} = 31{NUM_OF_DAY_COVER_IN_MONTH} = 31 {NUM_OF_DAY_NON_COVER_IN_MONTH} = 31 - 31 = 0 **** |
| ADDโดยนำค่า {RI_PREMIUM_ADD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| TPDโดยนำค่า {RI_PREMIUM_TPD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| TTDโดยนำค่า {RI_PREMIUM_TTD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| RIDERโดยนำค่า {RI_PREMIUM_RIDER} แทนค่า {RI_PREMIUM} ในสูตร | กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC'{RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) [กรณี cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP'สูตรคำนวณ{RI_PREM_RIDER_G1} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G2} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G3} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G4} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G5} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G6} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}){RI_PREM_RIDER_G7} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| สูตรคำนวณ |
| {RI_PREM_RIDER_G1} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G2} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G3} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G4} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G5} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G6} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| {RI_PREM_RIDER_G7} * ({NUM_OF_DAY_NON_COVER_IN_MONTH} / {NUM_OF_DAY_IN_MONTH}) |
| RI Premium refund | Yearly | 3000364 | 2000218 | ไม่กำหนด |  |  |  |
| 3000365 | 2000218 | RI premium *(No. of day of non-coverage in a coverage year / No. of day in a coverage year) | LIFEโดยนำค่า {RI_PREMIUM_LIFE} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) | ********{NUM_OF_DAY_IN_YEAR} = วันทั้งปี{NUM_OF_DAY_COVER_IN_YEAR} = วันที่คุ้มครองในปีนั้น{NUM_OF_DAY_NON_COVER_IN_YEAR} = วันที่ไม่คุ้มครองในปีนั้น{FIRST_EFFECTIVE_DATE_FROM} = วันที่คุ้มครองสำหรับการคำนวณรอบแรก กรณีเป็นรูปแบบ A และ E ที่คำนวณครั้งที่ 2 **Base**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ {FIRST_EFFECTIVE_DATE_FROM} ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** ******Rider**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ {FIRST_EFFECTIVE_DATE_FROM} ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider**ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** กรณีไม่ใช่รูปแบบ A และ E ที่คำนวณครั้งที่ 2 **Base**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From - Current Effective Date To ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง********Rider**วิธีการคำนวณวันทั้งปี{NUM_OF_DAY_IN_YEAR} นับจำนวนวันตั้งแต่วันที่ Current Effective Date From ไปจนถึงวัน Effect Date To แล้วบวก 1 (เนื่องจากต้องนับวันสุดท้าย)วิธีการคำนวณ No. of day in a coverage month{NUM_OF_DAY_COVER_IN_YEAR} = นับจำนวนวันตั้งแต่วันที่ Current Effective Date From Rider ไปจนถึงวันที่ Alteration date หรือ Event Date แล้วบวก 1 (เนื่องจากต้องนับวันแรก) วิธีการคำนวณ No. of day of non-coverage in a coverage month {NUM_OF_DAY_NON_COVER_IN_YEAR} = {NUM_OF_DAY_IN_YEAR} - {NUM_OF_DAY_COVER_IN_YEAR}*****หมายเหตุ : Current Effective Date From Rider - Current Effective Date To **Rider**ให้ดูตามรอบที่เกิด Alteration date หรือ Event Date*******หมายเหตุ2 : ตัดการบวก 1 ออก **ในการหา วันที่คุ้มครองในเดือนนั้น**เนื่องจากระบบนับวันแรกเสมออยู่แล้ว และวันที่มีผลการเปลี่ยนแปลง ไม่อยู่ในวันที่คุ้มครอง** **ตัวอย่าง**กรมธรรม์Current Effective Date From = 01/01/2024Current Effective Date To = 31/12/2024Alteration Date = 16/06/2024 {NUM_OF_DAY_IN_YEAR} = 366{NUM_OF_DAY_COVER_IN_YEAR} = 167 {NUM_OF_DAY_NON_COVER_IN_YEAR} = 366 - 167 = 199 ![](/download/attachments/1133445576/image2025-3-12%2018%3A37%3A18.png?version=1&modificationDate=1741779439197&api=v2) |
| ADDโดยนำค่า {RI_PREMIUM_ADD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| TPDโดยนำค่า {RI_PREMIUM_TPD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| TTDโดยนำค่า {RI_PREMIUM_TTD} แทนค่า {RI_PREMIUM} ในสูตร | {RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| RIDERโดยนำค่า {RI_PREMIUM_RIDER} แทนค่า {RI_PREMIUM} ในสูตร | กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC'{RI_PREMIUM} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) [กรณี cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP' สูตรคำนวณ{RI_PREM_RIDER_G1} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G2} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G3} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G4} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G5} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G6} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}){RI_PREM_RIDER_G7} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| สูตรคำนวณ |
| {RI_PREM_RIDER_G1} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G2} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G3} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G4} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G5} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G6} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| {RI_PREM_RIDER_G7} * ({NUM_OF_DAY_NON_COVER_IN_YEAR} / {NUM_OF_DAY_IN_YEAR}) |
| 3000366 | 2000218 | RI premium *(1-%Short term premium) (PA) | ADD | {RI_PREMIUM_ADD} * (1 - {SHORT_TERM_PREM}) | วิธีการคำนวณ %Short term premium หาจำนวนเดือนระหว่างวันที่เริ่มสัญญากับวันที่มีการเปลี่ยนแปลง = ROUNDUP(DATEDIF(Commencement Date RiderCurrent Effective Date From, Alteration date หรือ Claim Date, "D")/30) ***** กรณี ROUNDUP แล้วได้ค่าเกิน 12 ให้ปรับเป็น 12 เสมอ *** (suthanee.sa 24/01/2025)**นำจำนวนเดือนที่ได้ไปหา ที่ [ms_short_term_premium](http://wiki.thaisamut.co.th/x/u4B6Qw).coverage_period นำค่า [ms_short_term_premium](http://wiki.thaisamut.co.th/x/u4B6Qw).per_year_premium ที่ได้ ไป หาร /100 นำค่าเก็บไว้ที่ {SHORT_TERM_PREM} |

1. นำค่า RI Premium refund ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้กรณี [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/03.+tx_ri_ord_alteration_dt).alteration_code = "IN" , "EX" , "RP" , "RE" **ให้บันทึกค่าเป็น ติดลบ ( - )** กรณี [tx_ri_ul_alteration_dt](http://wiki.thaisamut.co.th/display/RDSINRI/36.+tx_ri_ul_alteration_dt).remark = "Increase SA" **ให้บันทึกค่าเป็น ติดลบ ( - )**

| ข้อมูล |  | Parameter |
| --- | --- | --- |
| RI Premium refund | LIFE | {RI_PREM_REFUND_LIFE} |
| RI Premium refund | ADD | {RI_PREM_REFUND_ADD} |
| RI Premium refund | TPD | {RI_PREM_REFUND_TPD} |
| RI Premium refund | TTD | {RI_PREM_REFUND_TTD} |
| RI Premium refund | RIDER | กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'TRET' , 'PRD' , 'PLN' , 'PAC'{RI_PREM_REFUND_RIDER} กรณี [cf_premium_rate](http://wiki.thaisamut.co.th/display/RDSINRI/16.+cf_premium_rate).ms_prem_rate = 'GRP' {RI_PREM_REFUND_RIDER_G1} {RI_PREM_REFUND_RIDER_G2} {RI_PREM_REFUND_RIDER_G3} {RI_PREM_REFUND_RIDER_G4} {RI_PREM_REFUND_RIDER_G5} {RI_PREM_REFUND_RIDER_G6}{RI_PREM_REFUND_RIDER_SP} และ นำค่าทั้งหมด รวมกันเก็บไว้ใน {RI_PREM_REFUND_RIDER} ={RI_PREM_REFUND_RIDER_G1} + {RI_PREM_REFUND_RIDER_G2} + {RI_PREM_REFUND_RIDER_G3} + {RI_PREM_REFUND_RIDER_G4} + {RI_PREM_REFUND_RIDER_G5} + {RI_PREM_REFUND_RIDER_G6} + {RI_PREM_REFUND_RIDER_SP} |

# 31 การประมวลผล RI Claim amount

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453428  
> **Page ID:** 1119453428  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 31 การประมวลผล RI Claim amount

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Claim amount Auto
การประมวลผล RI Claim amount มีขั้นตอนดังนี้

แสดงรายละเอียด
1. ดึงข้อมูล Claim Amount [00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw){CLAIM_AMOUNT_LIFE} {CLAIM_AMOUNT_ADD}{CLAIM_AMOUNT_TPD}{CLAIM_AMOUNT_TTD}{CLAIM_AMOUNT_RIDER}{CLAIM_AMOUNT_PUB}{CLAIM_AMOUNT_HOL}{CLAIM_AMOUNT_MOT}{CLAIM_AMOUNT_MUR}
2. ดึงข้อมูล Claim Exgratia [00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) {EXGRATIA_AMOUNT}
3. ดึงข้อมูล [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) / หาจากของเดิม หรือคำนวนใหม่โดยเอาวันที่ event date เป็นตัวตั้ง
4. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
5. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

แสดงสูตร
******หมายเหตุ : การจัดเก็บค่า {PER_CLAIM} ให้เก็บเป็นค่า Round Up ทศนิยม 2 ตำแหน่งเสมอ**

| ข้อมูล |  | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id |  | สูตร (Round 2 ตำแหน่งเสมอ) | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- |
| RI Claim amount | LIFE | 3000380 | 2000225 |  | ไม่กำหนด |  |
| 3000381 | 2000225 |  | SR LIFE * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_LIFE} * {PER_CLAIM}) / 100 | คำนวณหาค่า {PER_CLAIM} = ({CLAIM_AMOUNT_LIFE} / {ACTUAL_SA_LIFE_BY_EVENT}) * 100 |
| 3000431 (IRI-3386) | 2000225 |  | {SR_LIFE} | {SR_LIFE} |
| RI Claim amount | ADD | 3000382 | 2000226 |  | ไม่กำหนด |  |
| 3000383 | 2000226 | กรณีกรมธรรม์อื่น ๆ | SR ADD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_ADD} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_ADD} / {ACTUAL_SA_ADD_BY_EVENT}) * 100 |
| กรณีกรมธรรม์ PA Rider = 0 | ({SR_ADD} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_ADD} / {ACTUAL_SA_ADD_BY_EVENT}) * 100 |
| กรณีกรมธรรม์ PA Rider = 1 | ({SR_PUBLIC} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_PUB} / {ACTUAL_SA_PUBLIC_BY_EVENT}) * 100 |
| กรณีกรมธรรม์ PA Rider = 4 | ({SR_HOLIDAY} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_HOL} / {ACTUAL_SA_HOIDAY_BY_EVENT}) * 100 |
| กรณีกรมธรรม์ PA Rider = 8 | ({SR_MOTORCYCLE} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_MOT} / {ACTUAL_SA_MOTORCYCLE_BY_EVENT}) * 100 |
| กรณีกรมธรรม์ PA Rider = 9 | ({SR_MURDER} * {PER_CLAIM}) / 100 | คำนวณหาค่า{PER_CLAIM} = ({CLAIM_AMOUNT_MUR} / {ACTUAL_SA_MURDER_BY_EVENT}) * 100 |
| RI Claim amount | TPD | 3000384 | 2000227 |  | ไม่กำหนด |  |
| 3000385 | 2000227 |  | SR TPD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_TTD} * {PER_CLAIM}) / 100 | คำนวณหาค่า {PER_CLAIM} = ({CLAIM_AMOUNT_TPD} / {ACTUAL_SA_TPD_BY_EVENT}) * 100 |
| RI Claim amount | TTD | 3000386 | 2000228 |  | ไม่กำหนด |  |
| 3000387 | 2000228 |  | SR TTD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_TTD} * {PER_CLAIM}) / 100 | คำนวณหาค่า {PER_CLAIM} = ({CLAIM_AMOUNT_TTD} / {ACTUAL_SA_TTD_BY_EVENT}) * 100 |
| RI Claim amount | RIDER | 3000388 | 2000229 |  | ไม่กำหนด |  |
| 3000389 | 2000229 |  | SR RIDER * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date){SR_RIDER} * {PER_CLAIM} / 100 | คำนวณหาค่า {PER_CLAIM} = ({CLAIM_AMOUNT_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) * 100 |
| 3000408 | 2000229 |  | Claim approved amount * SR RIDER / Actual SA RIDER (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date){CLAIM_AMOUNT_RIDER} * ({SR_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) | คำนวณหาค่า {PER_CLAIM} = ({CLAIM_AMOUNT_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) * 100 |
| RI Claim amount | EXGRATIA | 3000390 | 2000230 |  | ไม่กำหนด |  |
| 3000391 | 2000230 |  | Exgratia amount * SR LIFE / Actual SA LIFE {EXGRATIA_AMOUNT_LIFE} * ({SR_LIFE} / {ACTUAL_SA_LIFE_BY_EVENT}) |  |
| 3000392 | 2000230 |  | Exgratia amount * SR ADD / Actual SA ADD (PA){EXGRATIA_AMOUNT_ADD} * ({SR_ADD} / {ACTUAL_SA_ADD_BY_EVENT}) |  |
| 3000405 | 2000230 |  | Exgratia amount * SR Rider / Actual SA Rider{EXGRATIA_AMOUNT_RIDER} * ({SR_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) |  |

การประมวลผล RI Claim amount FAC
การประมวลผล RI Claim amount มีขั้นตอนดังนี้

แสดงรายละเอียด
1. ดึงข้อมูล Claim Amount [00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw){CLAIM_AMOUNT_LIFE} {CLAIM_AMOUNT_ADD}{CLAIM_AMOUNT_TPD}{CLAIM_AMOUNT_TTD}{CLAIM_AMOUNT_RIDER}{CLAIM_AMOUNT_PUB}{CLAIM_AMOUNT_HOL}{CLAIM_AMOUNT_MOT}{CLAIM_AMOUNT_MUR}
2. ดึงข้อมูล Claim Exgratia [00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) {EXGRATIA_AMOUNT}
3. ดึงข้อมูล [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) / หาจากของเดิม หรือคำนวนใหม่โดยเอาวันที่ event date เป็นตัวตั้ง
4. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
5. ตรวจสอบค่า Config ของ กรมธรรม์ FAC และการคำนวณ Percent Claim {PER_CLAIM}ตรวจสอบ Percent {PER_INITIAL} ของทุนที่กำหนดให้ Treaty ที่กำลังประมวลผล

******หมายเหตุ : การจัดเก็บค่า {PER_INITIAL} และ****{PER_CLAIM} ให้เก็บเป็นค่า Round Up ทศนิยม 2 ตำแหน่งเสมอ**

|  |  |  | {PER_INITIAL} | {PER_CLAIM} |
| --- | --- | --- | --- | --- |
| [cf_policy_fac_hd](http://wiki.thaisamut.co.th/x/aIDtQQ) | initial_sa |  | (sa_life * 100) / initial_sa (suthanee.sa 18/02/2025) | ({CLAIM_AMOUNT_LIFE} / {ACTUAL_SA_LIFE_BY_EVENT}) * {PER_INITIAL} |
| [cf_policy_fac_dt](http://wiki.thaisamut.co.th/x/f4DtQQ) | sa_life (suthanee.sa 18/02/2025) |  |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ) | initial_sa | นำรายการ Rider ทุกตัวภายใต้กรมธรรม์ ไปตรวจสอบความคุ้มครอง ใน Table ms_product จากนั้นรวมเฉพาะรายการที่มีความคุ้มครองเป็น ADDค่าจาก กรมธรรม์ FACเทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_codeORD[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_typeRIDER[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_groupนำค่า [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).ms_policy_coverage_type_code ที่เป็น ADDแล้วรวม initial_sa เป็นค่าทุนเต็มของ ADD | (sa_add * 100) / initial_sa (suthanee.sa 18/02/2025) | ({CLAIM_AMOUNT_ADD} / {ACTUAL_SA_ADD_BY_EVENT}) * {PER_INITIAL} |
| ค่าจาก กรมธรรม์ FAC | เทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_code |
| ORD | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_type |
| RIDER | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_group |
| [cf_policy_fac_dt](http://wiki.thaisamut.co.th/x/f4DtQQ) | sa_add (suthanee.sa 18/02/2025) |  |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ) | initial_sa | นำรายการ Rider ทุกตัวภายใต้กรมธรรม์ ไปตรวจสอบความคุ้มครอง ใน Table ms_product จากนั้นรวมเฉพาะรายการที่มีความคุ้มครองเป็น TPDค่าจาก กรมธรรม์ FACเทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_codeORD[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_typeRIDER[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_groupนำค่า [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).ms_policy_coverage_type_code ที่เป็น TPDแล้วรวม initial_sa เป็นค่าทุนเต็มของ TPD | (sa_tpd * 100) / initial_sa (suthanee.sa 18/02/2025) | ({CLAIM_AMOUNT_TPD} / {ACTUAL_SA_TPD_BY_EVENT}) * {PER_INITIAL} |
| ค่าจาก กรมธรรม์ FAC | เทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_code |
| ORD | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_type |
| RIDER | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_group |
| [cf_policy_fac_dt](http://wiki.thaisamut.co.th/x/f4DtQQ) | sa_tpd (suthanee.sa 18/02/2025) |  |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ) | initial_sa | นำรายการ Rider ทุกตัวภายใต้กรมธรรม์ ไปตรวจสอบความคุ้มครอง ใน Table ms_product จากนั้นรวมเฉพาะรายการที่มีความคุ้มครองเป็น TTDค่าจาก กรมธรรม์ FACเทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_codeORD[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_typeRIDER[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_groupนำค่า [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).ms_policy_coverage_type_code ที่เป็น TTDแล้วรวม initial_sa เป็นค่าทุนเต็มของ TTD | (sa_ttd * 100) / initial_sa (suthanee.sa 18/02/2025) | ({CLAIM_AMOUNT_TTD} / {ACTUAL_SA_TTD_BY_EVENT}) * {PER_INITIAL} |
| ค่าจาก กรมธรรม์ FAC | เทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_code |
| ORD | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_type |
| RIDER | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_group |
| [cf_policy_fac_dt](http://wiki.thaisamut.co.th/x/f4DtQQ) | sa_ttd (suthanee.sa 18/02/2025) |  |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ) | initial_sa | นำรายการ Rider ทุกตัวภายใต้กรมธรรม์ ไปตรวจสอบความคุ้มครอง ใน Table ms_product จากนั้นรวมเฉพาะรายการที่มีความคุ้มครองเป็น RIDERค่าจาก กรมธรรม์ FACเทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_codeORD[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_typeRIDER[ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_groupนำค่า [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).ms_policy_coverage_type_code ที่เป็น RIDERแล้วรวม initial_sa เป็นค่าทุนเต็มของ RIDER | (sa_rider * 100) / initial_sa (suthanee.sa 18/02/2025) | ({CLAIM_AMOUNT_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) * {PER_INITIAL} |
| ค่าจาก กรมธรรม์ FAC | เทียบค่าใน [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ) |
| [cf_rider_fac](http://wiki.thaisamut.co.th/x/b4DtQQ).rider_code | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).plan_code |
| ORD | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).policy_type |
| RIDER | [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).product_group |
| [cf_policy_fac_dt](http://wiki.thaisamut.co.th/x/f4DtQQ) | sa_rider (suthanee.sa 18/02/2025) |  |

8. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

แสดงสูตร
การประมวลผล RI Claim amount FAC
| ข้อมูล |  | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id |  | สูตร (Round 2 ตำแหน่งเสมอ) |
| --- | --- | --- | --- | --- | --- |
| RI Claim amount | LIFE | 3000380 | 2000225 |  | ไม่กำหนด |
| 3000381 | 2000225 |  | SR LIFE * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_LIFE} * {PER_CLAIM}) / 100 |
| 3000431 (IRI-3386) | 2000225 |  | {SR_LIFE} |
| RI Claim amount | ADD | 3000382 | 2000226 |  | ไม่กำหนด |
| 3000383 | 2000226 | กรณีกรมธรรม์อื่น ๆ | SR ADD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_ADD} * {PER_CLAIM}) / 100 |
| RI Claim amount | TPD | 3000384 | 2000227 |  | ไม่กำหนด |
| 3000385 | 2000227 |  | SR TPD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_TTD} * {PER_CLAIM}) / 100 |
| RI Claim amount | TTD | 3000386 | 2000228 |  | ไม่กำหนด |
| 3000387 | 2000228 |  | SR TTD * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_TTD} * {PER_CLAIM}) / 100 |
| RI Claim amount | RIDER | 3000388 | 2000229 |  | ไม่กำหนด |
| 3000389 | 2000229 |  | SR RIDER * % claim approved (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date)({SR_RIDER} * {PER_CLAIM}) / 100 |
| 3000408 | 2000229 |  | Claim approved amount * SR RIDER / Actual SA RIDER (ณ ช่วงเดือน หรือ ปี ที่เกิด Event date){CLAIM_AMOUNT_RIDER} * ({SR_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) |
| RI Claim amount | EXGRATIA | 3000390 | 2000230 |  | ไม่กำหนด |
| 3000391 | 2000230 |  | Exgratia amount * SR LIFE / Actual SA LIFE {EXGRATIA_AMOUNT_LIFE} * ({SR_LIFE} / {ACTUAL_SA_LIFE_BY_EVENT}) |
| 3000392 | 2000230 |  | Exgratia amount * SR ADD / Actual SA ADD (PA){EXGRATIA_AMOUNT_ADD} * ({SR_ADD} / {ACTUAL_SA_ADD_BY_EVENT}) |
| 3000405 | 2000230 |  | Exgratia amount * SR Rider / Actual SA Rider{EXGRATIA_AMOUNT_RIDER} * ({SR_RIDER} / {ACTUAL_SA_RIDER_BY_EVENT}) |

นำค่า RI Claim amount ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

| ข้อมูล |  |  | Parameter |
| --- | --- | --- | --- |
| RI Claim amount | LIFE | {RI_CLIAM_AMOUNT_LIFE} - {COPAY_CLIAM_AMOUNT_LIFE} | {RI_CLIAM_AMOUNT_LIFE} |
| RI Claim amount | ADD | {RI_CLIAM_AMOUNT_ADD} - {COPAY_CLIAM_AMOUNT_ADD} | {RI_CLIAM_AMOUNT_ADD} |
| RI Claim amount | TPD | {RI_CLIAM_AMOUNT_TPD} - {COPAY_CLIAM_AMOUNT_TPD} | {RI_CLIAM_AMOUNT_TPD} |
| RI Claim amount | TTD | {RI_CLIAM_AMOUNT_TTD} - {COPAY_CLIAM_AMOUNT_TTD} | {RI_CLIAM_AMOUNT_TTD} |
| RI Claim amount | RIDER | {RI_CLIAM_AMOUNT_RIDER} - {COPAY_CLIAM_AMOUNT_RIDER} | {RI_CLIAM_AMOUNT_RIDER} |
| RI Claim amount | PUB |  | {RI_CLIAM_AMOUNT_PUB} |
| RI Claim amount | HOL |  | {RI_CLIAM_AMOUNT_HOL} |
| RI Claim amount | MOT |  | {RI_CLIAM_AMOUNT_MOT} |
| RI Claim amount | MUR |  | {RI_CLIAM_AMOUNT_MUR} |
| RI Claim amount | EXGRATIA |  | {RI_CLIAM_AMOUNT_EXG} |

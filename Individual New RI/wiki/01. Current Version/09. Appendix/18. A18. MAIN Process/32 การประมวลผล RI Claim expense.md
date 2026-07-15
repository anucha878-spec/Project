# 32 การประมวลผล RI Claim expense

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1119453430  
> **Page ID:** 1119453430  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 32 การประมวลผล RI Claim expense

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล RI Claim expense
การประมวลผล RI Claim expense มีขั้นตอนดังนี้
1. ดึงข้อมูลที่ใช้ในการคำนวณ
2. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id
3. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

| ข้อมูล |  | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) |  | การคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RI Claim expense | LIFE | 3000393 | 2000231 | ไม่กำหนด |  |  |  |
| 3000394 | 2000231 | (Claim expense LIFE *RI Claim amount LIFE)/Claim amount LIFE | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_LIFE} * {RI_CLIAM_AMOUNT_LIFE}) / {CLAIM_AMOUNT_LIFE} |  |
| ถ้า = 2Legalโดยนำค่า {EXPENSE_LEG_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ถ้า = 2 ให้คำนวณ ({EXPENSE_LIFE} * {RI_CLIAM_AMOUNT_LIFE}) / {CLAIM_AMOUNT_LIFE} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ถ้า = 3 ให้คำนวณ ({EXPENSE_LIFE} * {RI_CLIAM_AMOUNT_LIFE}) / {CLAIM_AMOUNT_LIFE} |  |
| RI Claim expense | ADD | 3000395 | 2000232 | ไม่กำหนด |  |  |  |
| 3000396 | 2000232 | (Claim expense ADD *RI Claim amount ADD)/Claim amount ADD | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_ADD} * {RI_CLIAM_AMOUNT_ADD}) / {CLAIM_AMOUNT_ADD} |  |
| ถ้า = 2Legalโดยนำค่า {EXPENSE_LEG_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ถ้า = 2 ให้คำนวณ ({EXPENSE_ADD} * {RI_CLIAM_AMOUNT_ADD}) / {CLAIM_AMOUNT_ADD} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ถ้า = 3 ให้คำนวณ ({EXPENSE_ADD} * {RI_CLIAM_AMOUNT_ADD}) / {CLAIM_AMOUNT_ADD} |  |
| RI Claim expense | TPD | 3000397 | 2000233 | ไม่กำหนด |  |  |  |
| 3000398 | 2000233 | (Claim expense TPD *RI Claim amount TPD)/Claim amount TPD | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_TPD} * {RI_CLIAM_AMOUNT_TPD}) / {CLAIM_AMOUNT_TPD} |  |
| ถ้า = 2Legalโดยนำค่า {EXPENSE_LEG_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ถ้า = 2 ให้คำนวณ ({EXPENSE_TPD} * {RI_CLIAM_AMOUNT_TPD}) / {CLAIM_AMOUNT_TPD} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ถ้า = 3 ให้คำนวณ ({EXPENSE_TPD} * {RI_CLIAM_AMOUNT_TPD}) / {CLAIM_AMOUNT_TPD} |  |
| RI Claim expense | TTD | 3000399 | 2000234 | ไม่กำหนด |  |  |  |
| 3000400 | 2000234 | (Claim expense TTD *RI Claim amount TTD)/Claim amount TTD | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_TTD} * {RI_CLIAM_AMOUNT_TTD}) / {CLAIM_AMOUNT_TTD} |  |
| ถ้า = 2Legalโดยนำค่า {EXPENSE_LEG_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ถ้า = 2 ให้คำนวณ ({EXPENSE_TTD} * {RI_CLIAM_AMOUNT_TTD}) / {CLAIM_AMOUNT_TTD} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ถ้า = 3 ให้คำนวณ ({EXPENSE_TTD} * {RI_CLIAM_AMOUNT_TTD}) / {CLAIM_AMOUNT_TTD} |  |
| RI Claim expense | RIDER | 3000401 | 2000235 | ไม่กำหนด |  |  |  |
| 3000402 | 2000235 | (Claim expense RIDER *RI Claim amount RIDER)/Claim amount RIDER | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_RIDER} * {RI_CLIAM_AMOUNT_RIDER}) / {CLAIM_AMOUNT_RIDER} |  |
| ถ้า = 2Legalโดยนำค่า {EXPENSE_LEG_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ถ้า = 2 ให้คำนวณ ({EXPENSE_RIDER} * {RI_CLIAM_AMOUNT_RIDER}) / {CLAIM_AMOUNT_RIDER} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ถ้า = 3 ให้คำนวณ ({EXPENSE_RIDER} * {RI_CLIAM_AMOUNT_RIDER}) / {CLAIM_AMOUNT_RIDER} |  |
| กรณี RI Claim expense (CR#3)Policy TypeData TableValueORD[tx_ri_ord_master_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/07.+tx_ri_ord_master_claim_dt).claim_status 2 (ปฏิเสธ), 3 (ปฏิเสธ/คืนเบี้ย)PA[tx_ri_pa_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/09.+tx_ri_pa_claim_dt).claim_statusF (ปฏิเสธ)UL[tx_ri_ul_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/10.+tx_ri_ul_claim_dt).claim_process_status_codeRJS (ปฏิเสธ)IND[tx_ri_ind_cb_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_ind_cb_claim_dt).claim_statusRJ (ปฏิเสธ)ORD[tx_ri_ord_health_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/08.+tx_ri_ord_health_claim_dt).approveClaimD4 (กรมธรรม์สิ้นผลบังคับ)D6 (บอกล้างกรมธรรม์)D7 (ยกเลิกสัญญาแนบท้าย) | LIFE | (Claim expense LIFE * SR LIFE)/Actual SA LIFE By Event Date | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_MED_LIFE} * {SR_LIFE}) / {ACTUAL_SA_LIFE_BY_EVENT} |  |
| Policy Type | Data Table | Value |
| ORD | [tx_ri_ord_master_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/07.+tx_ri_ord_master_claim_dt).claim_status | 2 (ปฏิเสธ), 3 (ปฏิเสธ/คืนเบี้ย) |
| PA | [tx_ri_pa_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/09.+tx_ri_pa_claim_dt).claim_status | F (ปฏิเสธ) |
| UL | [tx_ri_ul_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/10.+tx_ri_ul_claim_dt).claim_process_status_code | RJS (ปฏิเสธ) |
| IND | [tx_ri_ind_cb_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/11.+tx_ri_ind_cb_claim_dt).claim_status | RJ (ปฏิเสธ) |
| ORD | [tx_ri_ord_health_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/08.+tx_ri_ord_health_claim_dt).approveClaim | D4 (กรมธรรม์สิ้นผลบังคับ)D6 (บอกล้างกรมธรรม์)D7 (ยกเลิกสัญญาแนบท้าย) |
| ถ้า = 2 Legalโดยนำค่า {EXPENSE_LEG_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ถ้า = 2 ให้คำนวณ({EXPENSE_LEG_LIFE} * {SR_LIFE}) / {ACTUAL_SA_LIFE_BY_EVENT} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_LIFE} แทนค่า {EXPENSE_LIFE} ในสูตร | ถ้า = 3 ให้คำนวณ({EXPENSE_INV_LIFE} * {SR_LIFE}) / {ACTUAL_SA_LIFE_BY_EVENT} |  |
| ADD | (Claim expense ADD * SR ADD)/Actual SA ADD By Event Date | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_MED_ADD} * {SR_ADD}) / {ACTUAL_SA_ADD_BY_EVENT} |  |
| ถ้า = 2 Legalโดยนำค่า {EXPENSE_LEG_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ถ้า = 2 ให้คำนวณ({EXPENSE_LEG_ADD} * {SR_ADD}) / {ACTUAL_SA_ADD_BY_EVENT} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_ADD} แทนค่า {EXPENSE_ADD} ในสูตร | ถ้า = 3 ให้คำนวณ({EXPENSE_INV_ADD} * {SR_ADD}) / {ACTUAL_SA_ADD_BY_EVENT} |  |
| TPD | (Claim expense TPD * SR TPD)/Actual SA TPD By Event Date | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_MED_TPD} * {SR_TPD}) / {ACTUAL_SA_TPD_BY_EVENT} |  |
| ถ้า = 2 Legalโดยนำค่า {EXPENSE_LEG_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ถ้า = 2 ให้คำนวณ({EXPENSE_LEG_TPD} * {SR_TPD}) / {ACTUAL_SA_TPD_BY_EVENT} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_TPD} แทนค่า {EXPENSE_TPD} ในสูตร | ถ้า = 3 ให้คำนวณ({EXPENSE_INV_TPD} * {SR_TPD}) / {ACTUAL_SA_TPD_BY_EVENT} |  |
| TTD | (Claim expense TTD * SR TTD)/Actual SA TTD By Event Date | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_MED_TTD} * {SR_TTD}) / {ACTUAL_SA_TTD_BY_EVENT} |  |
| ถ้า = 2 Legalโดยนำค่า {EXPENSE_LEG_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ถ้า = 2 ให้คำนวณ({EXPENSE_LEG_TTD} * {SR_TTD}) / {ACTUAL_SA_TTD_BY_EVENT} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_TTD} แทนค่า {EXPENSE_TTD} ในสูตร | ถ้า = 3 ให้คำนวณ({EXPENSE_INV_TTD} * {SR_TTD}) / {ACTUAL_SA_TTD_BY_EVENT} |  |
| RIDER | (Claim expense RIDER * SR RIDER)/Actual SA RIDER By Event Date | ถ้า = 1Medicalโดยนำค่า {EXPENSE_MED_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ตรวจสอบ [tx_ri_inv_claim_dt](http://wiki.thaisamut.co.th/display/RDSINRI/12.+tx_ri_inv_claim_dt).ri_group_codeถ้า = 1 ให้คำนวณ({EXPENSE_MED_RIDER} * {SR_RIDER}) / {ACTUAL_SA_RIDER_BY_EVENT} |  |
| ถ้า = 2 Legalโดยนำค่า {EXPENSE_LEG_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ถ้า = 2 ให้คำนวณ({EXPENSE_LEG_RIDER} * {SR_RIDER}) / {ACTUAL_SA_RIDER_BY_EVENT} |  |
| ถ้า = 3Investigationโดยนำค่า {EXPENSE_INV_RIDER} แทนค่า {EXPENSE_RIDER} ในสูตร | ถ้า = 3 ให้คำนวณ({EXPENSE_INV_RIDER} * {SR_RIDER}) / {ACTUAL_SA_RIDER_BY_EVENT} |  |

นำค่า RI Claim expense ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

| ข้อมูล |  | Parameter |
| --- | --- | --- |
| RI Claim expense | LIFE | {RI_CLIAM_EXPENSE_MEDICAL_LIFE} |
| {RI_CLIAM_EXPENSE_LEGAL_FEE_LIFE} |
| {RI_CLIAM_EXPENSE_INVESTIGATION_LIFE} |
| ADD | {RI_CLIAM_EXPENSE_MEDICAL_ADD} |
| {RI_CLIAM_EXPENSE_LEGAL_FEE_ADD} |
| {RI_CLIAM_EXPENSE_INVESTIGATION_ADD} |
| TPD | {RI_CLIAM_EXPENSE_MEDICAL_TPD} |
| {RI_CLIAM_EXPENSE_LEGAL_FEE_TPD} |
| {RI_CLIAM_EXPENSE_INVESTIGATION_TPD} |
| TTD | {RI_CLIAM_EXPENSE_MEDICAL_TTD} |
| {RI_CLIAM_EXPENSE_LEGAL_FEE_TTD} |
| {RI_CLIAM_EXPENSE_INVESTIGATION_TTD} |
| RIDER | {RI_CLIAM_EXPENSE_MEDICAL_RIDER} |
| {RI_CLIAM_EXPENSE_LEGAL_FEE_RIDER} |
| {RI_CLIAM_EXPENSE_INVESTIGATION_RIDER} |

# 04 การประมวลผล Previous Reserve amount

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471456  
> **Page ID:** 1116471456  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 04 การประมวลผล Previous Reserve amount

---

***การปัดทศนิยม ให้คำนวณค่าตามสูตรทั้งหมดจนเสร็จแล้ว กรณีมีทศนิยมหลายจุด ให้ตัดเหลือเพียง 3 จุด แล้วปัดตามเงื่อนไข 0-4 ปัดลง 5-9 ปัดขึ้น ให้เหลือทศนิยม 2 จุด***

การประมวลผล Reserve amount
การประมวลผล Reserve amount มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Initial SA | จำนวนเงินเอาประกัน Base | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) *****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Plan Code | รหัสแบบประกัน Base |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ (ปัจจุบัน) |
|  | Policy Month | เดือนกรมธรรม์ (ปัจจุบัน) |
|  | Gender | เพศของผู้เอาประกันภัย |
|  | Issue Age | อายุของผู้เอาประกัน ณ วันที่ออกกรมธรรม์ |
|  | COI | อัตรา COI |
|  | Policy Status | สถานะของกรมธรรม์ |
| Auto Rider | Initial SA Rider | จำนวนเงินเอาประกัน Rider |
|  | Issue Age Rider | อายุของผู้เอาประกัน ณ วันที่ออกประกันเพิ่มเติม |
|  | Actual SA Rider | Actual SA ของประเภทความคุ้มครอง Rider กรณี Rider มีประเภทความคุ้มครองเป็น Rider | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |
| FAC Base | Initial SA | จำนวนเงินเอาประกัน Base | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Rider Code | รหัสแบบประกัน Rider |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Policy Year | ปีกรมธรรม์ (ปัจจุบัน) |
|  | Policy Month | เดือนกรมธรรม์ (ปัจจุบัน) |
|  | Gender | เพศของผู้เอาประกันภัย |
|  | Issue Age | อายุของผู้เอาประกัน ณ วันที่ออกกรมธรรม์ |
|  | COI | อัตรา COI |
|  | Policy Status | สถานะของกรมธรรม์ |
| FAC Rider | Initial SA Rider | จำนวนเงินเอาประกัน Rider |
|  | Issue Age Rider | อายุของผู้เอาประกัน ณ วันที่ออกประกันเพิ่มเติม |
|  | Actual SA Rider | Actual SA ของประเภทความคุ้มครอง Rider กรณี Rider มีประเภทความคุ้มครองเป็น Rider | [01 การประมวลผล Actual SA](http://wiki.thaisamut.co.th/x/1QCMQg) |

1. คำนวณด้วยชุดข้อมูล Previous_Policy

2. วิธีการหาค่า reserve rate มีดังนี้ **(CA#3)**

แสดงรายละเอียด
1. กรณีเป็น Base ให้นำ Plan Code ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ ms_product_id
2. กรณีเป็น Rider ให้นำ Rider Code ไปเทียบกับ [ms_product](http://wiki.thaisamut.co.th/display/RDSINRI/08.+ms_product).plan_code จะได้ ms_product_idกรณีที่พบการ Config File ให้ค้นหา Rate เหมือนการค้นหาของ Baseกรณีไม่พบรายการ Config Fileให้ตรวจสอบ Base Plan ของ Rider นั้น ว่าตรงกับ [ms_special_plancode](http://wiki.thaisamut.co.th/display/RDSINRI/28.+ms_special_plancode).plan_code ที่มี [ms_special_plancode](http://wiki.thaisamut.co.th/display/RDSINRI/28.+ms_special_plancode).status เป็น A หรือไม่ถ้าพบ ให้ค้นหา Rate เหมือนการค้นหาของ Baseถ้าไม่พบ ให้ข้ามการค้นหา Rate และให้ Rate = 0 (suthanee.sa 15/15/2025)
3. นำ ms_product_id ไปเทียบกับ [cf_reserve_rate_hd](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_hd).ms_product_id จะได้ cf_reserve_rate_hd_id
4. ข้อมูล input สำหรับใช้ในการค้นหา reserve rate ในตาราง [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt)

|  | Name | Description | Value |
| --- | --- | --- | --- |
| 1 | cfReserveRateHdId | id ของ [cf_reserve_rate_hd](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_hd) | ได้จากข้อ d |
| 2 | gender | เพศของผู้เอาประกันภัย | Gender |
| 3 | age | อายุของผู้เอาประกันตอนซื้อกรมธรรม์ | กรณีเป็น Base Plan ใช้ Issue Ageกรณีเป็น Rider Plan ใช้ Issue Age Rider (suthanee.sa 17/09/2025) |
| 4 | durationUnit | หน่วยของ duration | ตรวจสอบ [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_durationกรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 1ให้เลือกกรองเฉพาะรายการที่เป็น "MONTH" เท่านั้นกรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 12ให้เลือกกรองเฉพาะรายการที่เป็น "YEAR" เท่านั้นกรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 3ให้ตรวจสอบ [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_typeถ้า [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_type = "MRTA" ให้เลือกกรองเฉพาะรายการที่เป็น "MONTH" ถ้า [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_type = "MLTA" ให้เลือกกรองเฉพาะรายการที่เป็น "YEAR"กรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 0ให้ค่า {RESERVE_RATE} = 0 |
| 5 | duration | ระยะเวลา | กรณีเป็น Base Plan ใช้ Policy Year หรือ Policy Monthกรณีเป็น Rider Plan ใช้ Policy Year Rider หรือ Policy Month Rider (suthanee.sa 17/09/2025) ตรวจสอบ [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_typeถ้าเท่ากับ "MRTA"ให้ ตรวจสอบประเภทแบบประกัน (SP,RP) กรณี SP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year = 1 then Policy Month - 1กรณี RP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year > 1 then Policy Monthถ้าเท่ากับ "MLTA"ให้ ตรวจสอบประเภทแบบประกัน (SP,RP) กรณี SP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year = 1 then Policy Year - 1กรณี RP > if [ms_product](http://wiki.thaisamut.co.th/x/5gCaQQ).pay_year > 1 then Policy Year ** จากนั้นตรวจสอบวิธีการเลือกใช้ reserve_duration ของ Treaty นั้น ให้ดูค่าจากด้านบนในกรณีที่ [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_type = "MRTA" หรือ "MLTA" ** (suthanee.sa 03/07/2025) กรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 1ให้ใช้ Policy Month ในการเทียบข้อมูลกรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 12ให้ใช้ Policy Yearในการเทียบข้อมูลกรณี [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).reserve_duration = 3ให้ตรวจสอบ [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_typeถ้า [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_type = "MRTA" ให้ใช้ Policy Month ในการเทียบข้อมูลถ้า [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/display/RDSINRI/02.+tx_ri_ord_new_renew_dt).plan_type = "MLTA" ให้ใช้ Policy Yearในการเทียบข้อมูล |
| 6 | policyStatus | สถานะกรมธรรม์ | ใช้สถานะของ Base เสมอ (suthanee.sa 17/09/2025)กรณีเป็นกรมธรรม์ ORD ให้เปรียบเทียบค่าตาม Processที่มาข้อมูลเปรียบเทียบกับแปลงเป็นกรณี New/Renew[tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/x/UgFgQg).policy_statusLookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1003900[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) .descriptionLookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1003900[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).lookup_keyกรณี Alteration ที่ต้องประมวลผลใหม่[tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/x/0gFgQg).policy_status กรณีเป็นกรมธรรม์ IND ให้เปรียบเทียบค่าตาม Processที่มาข้อมูลเปรียบเทียบกับแปลงเป็นกรณี New/Renew[tx_ri_ind_new_renew_dt](http://wiki.thaisamut.co.th/x/UQBtQg).policy_statusLookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1004100[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).descriptionLookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1004100[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).lookup_keyกรณี Alteration ที่ต้องประมวลผลใหม่[tx_ri_ind_alteration_dt](http://wiki.thaisamut.co.th/x/rQFUQw).policy_status |
| Process | ที่มาข้อมูล | เปรียบเทียบกับ | แปลงเป็น |
| กรณี New/Renew | [tx_ri_ord_new_renew_dt](http://wiki.thaisamut.co.th/x/UgFgQg).policy_status | Lookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1003900[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) .description | Lookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1003900[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).lookup_key |
| กรณี Alteration ที่ต้องประมวลผลใหม่ | [tx_ri_ord_alteration_dt](http://wiki.thaisamut.co.th/x/0gFgQg).policy_status |
| Process | ที่มาข้อมูล | เปรียบเทียบกับ | แปลงเป็น |
| กรณี New/Renew | [tx_ri_ind_new_renew_dt](http://wiki.thaisamut.co.th/x/UQBtQg).policy_status | Lookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1004100[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).description | Lookup ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) parent_id = 1004100[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).lookup_key |
| กรณี Alteration ที่ต้องประมวลผลใหม่ | [tx_ri_ind_alteration_dt](http://wiki.thaisamut.co.th/x/rQFUQw).policy_status |
| 7 | product_group | ประเภทรายการที่กำลังคำนวณ | กรณีเป็น Base Plan เลือกหาเฉพาะที่ [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).product_group = BASEกรณีเป็น Rider Plan เลือกหาเฉพาะที่ [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).product_group = RIDER |
| 8 | reserveRate | ค่า Reserve Rate | ถ้า [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).prorate = FALSEนำค่าที่ได้จากข้อ 1 - 6 ค้นหาในตาราง [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt)reserveRate = Field [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).reserve_rate ที่ได้ เก็บลงใน {RESERVE_RATE} cf_reserve_rate_dtค่าที่ได้มาgenderข้อ 2 genderageข้อ 3duration_unitข้อ 4 durationUnitdurationข้อ 5 durationstatusข้อ 6 policyStatus ถ้า [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).prorate = TRUE ต้องประมวลผล Rate ด้วยสูตร Rate1 + (จำนวนเดือนภายในปีกรมธรรม์ * (Rate2 - Rate1)/12)เก็บผลที่ได้ใน {RESERVE_RATE}Rate1 = [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).reserve_rate2cf_reserve_rate_dtค่าที่ได้มาgenderข้อ 2 genderageข้อ 3duration_unitข้อ 4 durationUnitdurationข้อ 5 duration - 1statusข้อ 6 policyStatusRate2 = [cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).reserve_rate cf_reserve_rate_dtค่าที่ได้มาgenderข้อ 2 genderageข้อ 3duration_unitข้อ 4 durationUnitdurationข้อ 5 durationstatusข้อ 6 policyStatus **ตัวอย่าง**Rate 1 = Reserve rate ของปีกรมธรรม์ก่อนหน้า ([cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).reserve_rate2) Rate 2 = Reserve rate ของปีกรมธรรม์ปัจจุบัน ([cf_reserve_rate_dt](http://wiki.thaisamut.co.th/display/RDSINRI/cf_reserve_rate_dt).reserve_rate) จำนวนเดือนภายในปีกรมธรรม์ Ex. Com. date = 5/7/2017 Eff. date = 5/3/2024 ลบกันได้ 6 ปี 8 เดือนปีกรมธรรม์ = 7 Rate 1 = Reserve rate ของปีกรม์ที่ 6 Rate 2 = Reserve rate ของปีกรม์ที่ 7 จำนวนเดือนภายในปีกรมธรรม์ = 8 (กรณีมีค่าน้อยกว่าหรือเท่ากับ 0 ให้เป็น 1 เสมอ) (suthanee.sa 31/10/2025)![](https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEX%2Fcp9pLL6Ekcn9adLZUUaCPDCwMouKOe8gy09xEow07c8Hi%2FE2n12K02AZ9XQ4L75o58TBE1xZ7LW861bCn7gNKP5kQMNmEMRj3gUqOAL8aNNwEmM%2BtChI%2F7P%2FgstSurvr%2BsWiJLv8zUrcIZgbpffGAoBH67SQ6aoYDD4svJq29sSxJxjlEOMMb6p21gUlEcJL47W3Iy9ovVhcl0lI5qX%2F0xVHZJ9cd242HMhr%2BBjxMTJCLcnqZ1GcozB4eV9NM7UEVOoCWgNOhXlD0dmFHBEDiaIFTgroUmxWXCSG1L6mNmX6TrqhBnPFIRrjCo68qfKz8vqkohZc7K5qdb1SGfOZaWH4R20clTyodtL3rQXxxO0Ue5N%2FCBzstHHBU5CFiS5rVWeu0PyeFIE4%2F%2Bjjg7ScPqJvDMub17t7SGaDdsAQmmnCr%2B689GfMomWpOfDy3Sl4U5aT8uLvgPy1Q8kLPESW6wvNurGraFIRd9E1v4H%2Fz9oAGIHGYxezNgSeoHfTOwOoUF0oSrV%2FOj9IgJVab7R3%2FVhgNw1%2Fe68YDdyuLm5u1sMAlb%2BRaq4UBGsGFEjD&sz=w1705-h910) 166.7265+ (8 * (191.9021 - 166.7265)/12) = 183.51023 ปัดให้เหลือ 4 จุด ตั้งแต่ 0 - 4 ให้ปัดลง 5 - 9 ให้ปัดขึ้น183.5102 = {RESERVE_RATE} |
| cf_reserve_rate_dt | ค่าที่ได้มา |
| gender | ข้อ 2 gender |
| age | ข้อ 3 |
| duration_unit | ข้อ 4 durationUnit |
| duration | ข้อ 5 duration |
| status | ข้อ 6 policyStatus |
| cf_reserve_rate_dt | ค่าที่ได้มา |
| gender | ข้อ 2 gender |
| age | ข้อ 3 |
| duration_unit | ข้อ 4 durationUnit |
| duration | ข้อ 5 duration - 1 |
| status | ข้อ 6 policyStatus |
| cf_reserve_rate_dt | ค่าที่ได้มา |
| gender | ข้อ 2 gender |
| age | ข้อ 3 |
| duration_unit | ข้อ 4 durationUnit |
| duration | ข้อ 5 duration |
| status | ข้อ 6 policyStatus |

3. ตรวจสอบ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_formula_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id และ [cf_treaty_cal](http://wiki.thaisamut.co.th/display/RDSINRI/27.+cf_treaty_cal).ms_calculation_id = [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id

4. นำรายการล่าสุดของกรมธรรม์ Previous ที่ถูกสร้าง มาคำนวณ โดยดูจาก Effective Date From (suthanee.sa 2024/11/22)

5. นำข้อมูลที่ได้มาเข้าสูตรคำนวณตาม ms_formula_id, ms_calculation_id ดังนี้

แสดงรายละเอียด
**Previous Reserve amount (**คำนวณด้วยชุดข้อมูล Previous_Policy**)**

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) |  | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Previous Reserve amount | LIFE | 3000157 | 2000124 | ไม่กำหนด |  |  |  |
| 3000158 | 2000124 | (Initial SA * reserve rate) / 1,000 | ({PREVIOUS_INITIAL_SA_LIFE} * {PREVIOUS_RESERVE_RATE}) / 1000 | Initial SA = 9,500,000 reserve rate = 3.487 = (9500000 * 3.487) / 1000 = 33,126.5 |  |
| 3000404 | 2000124 | Monthly COI / 2 * 12 (UL) | ({COI} / 2) * 12 |  |  |
| Previous Reserve amount | ADD | 3000159 | 2000125 | ไม่กำหนด |  |  |  |
| 3000160 | 2000125 | (Initial SA Rider * reserve rate) / 1,000 | ({PREVIOUS_INITIAL_SA_ADD} * {PREVIOUS_RESERVE_RATE}) / 1000 | Initial SA Rider = 9,500,000 reserve rate = 0 = (9500000 * 0) / 1000 = 0.00 | Initial SA ADD จาก Rider Code ADD |
| Previous Reserve amount | TPD | 3000161 | 2000126 | ไม่กำหนด |  |  |
| 3000162 | 2000126 | (Initial SA Rider * reserve rate) / 1,000 | ({PREVIOUS_INITIAL_SA_TPD} * {PREVIOUS_RESERVE_RATE}) / 1000 | Initial SA TPD จาก Rider Code TPD |
| Previous Reserve amount | TTD | 3000163 | 2000127 | ไม่กำหนด |  |  |
| 3000164 | 2000127 | (Initial SA Rider * reserve rate) / 1,000 | ({PREVIOUS_INITIAL_SA_TTD} * {PREVIOUS_RESERVE_RATE}) / 1000 | Initial SA TTD จาก Rider Code TTD |
| Previous Reserve amount | RIDER | 3000165 | 2000128 | ไม่กำหนด |  |  |
| 3000166 | 2000128 | ROUND(Actual SA Rider (RIDER) * reserve rate / 1000,2) | ({PREVIOUS_INITIAL_SA_RIDER} * {PREVIOUS_RESERVE_RATE}) / 1000 | Actual SA Rider = 9,500,000 reserve rate = 0 = round((9500000 * 0) / 1000,2) = 0.00 |  |

CR 13/02/2025

| ข้อมูล | ประเภทความคุ้มครอง | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_formula_id | [ms_formular](http://wiki.thaisamut.co.th/display/RDSINRI/03.+ms_formular).ms_calculation_id | สูตร (Round 2 ตำแหน่งเสมอ) |  | ตัวอย่างการคำนวณ | หมายเหตุ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Previous Reserve amount | ADD | 3000429 | 2000125 | Previous Reserve amount LIFE | **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description ใช้สูตรตาม Package Code (L = 0, P = Previous Reserve amount LIFE, N = Previous Reserve amount LIFE) | Initial SA = 9,500,000 reserve rate = 3.487 = (9500000 * 3.487) / 1000 = 33,126.5 |  |
| Previous Reserve amount | TPD | 3000430 | 2000126 | Previous Reserve amount LIFE | **การหา packgae_code** <![CDATA[select * from ms_partner_code_hd t1 left join ms_partner_code_dt t2 on t1.ms_partner_code_hd_id = t2.ms_partner_code_hd_id where t1.treaty_code = :treaty_code and t2.plan_code = :plan_code;]]> กรณีไม่พบข้อมูลในข้อ 1 ให้ทำในข้อ 2 ต่อ 2.ตรวจสอบ cf_lookup_catalog.parent_id = 1005000 ตรวจสอบข้อมูลที่ตาราง cf_lookup_catalog ด้วยเงื่อนไขcf_lookup_catalog.parent_id = 1005000 และtreaty_code = cf_lookup_catalog.lookup_keyกรณีพบข้อมูลให้ใช้ cf_lookup_catalog.description ใช้สูตรตาม Package Code (L = 0, P = Previous Reserve amount LIFE, N = Previous Reserve amount LIFE) |  |

5. นำค่า Reserve amount ที่ได้จากการคำนวณ มาบันทึกตาม Parameter ดังนี้

1. Previous Policyข้อมูลประเภทความคุ้มครองParameterPrevious Reserve amountLIFE{PREVIOUS_RESERVE_AMOUNT_LIFE}Previous Reserve amountADD{PREVIOUS_RESERVE_AMOUNT_ADD}Previous Reserve amountTPD{PREVIOUS_RESERVE_AMOUNT_TPD}Previous Reserve amountTTD{PREVIOUS_RESERVE_AMOUNT_TTD}Previous Reserve amountRIDER{PREVIOUS_RESERVE_AMOUNT_RIDER}

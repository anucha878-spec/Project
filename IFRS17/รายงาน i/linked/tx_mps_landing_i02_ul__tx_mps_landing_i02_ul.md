# tx_mps_landing_i02_ul

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
```
rider_ul_type
```

## TOC

[ [TOC](#tx_mps_landing_i02_ul-TOC) ] [ [Convention](#tx_mps_landing_i02_ul-Convention) ] [ [Table : tx_mps_landing_i02_ul](#tx_mps_landing_i02_ul-Table:tx_mps_landing_i02_ul) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I02 UL

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS004-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1161625941)

## Table : tx_mps_landing_i02_ul

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i02_ul_id | PK | Numeric | 18 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_no | | NumericVarchar | 450 | | not null | เลขที่กรมธรรม์ของกรมธรรม์หลัก | | | | |
| 5 | policy_year | | Varchar | 4 | | | ปี กธ.หลัก ณ as of | | | | |
| 6 | rider_code | | Varchar | 4 | | not null | rider code ควรเซทรหัส rider ให้ตรงกับ AS400 | | | | |
| 7 | rider_ul_type | | NumericVarchar | 4 | | | วิธีการชำระเงินของ rider เช่น PPR, UDR | | | | |
| 8 | rider_issued_age | | Numeric | 17 | | | อายุ ณ commencement_date ของ rider (อายุ ณ ปีกธ.ที่ 1) ใช้หลักการนับอายุเดียวกับกรมธรรม์หลัก | | | | |
| 9 | rider_commencement_date | | Date | | | | วันเริ่มความคุ้มครอง rider ปีกธ.ที่ 1 (วันที่เริ่ม rider นี้ครั้งแรก) | | | | |
| 10 | rider_renewal_date | | Date | | | | วันที่กรมธรรม์ rider กลับมามีผลบังคับครั้งล่าสุดนับจากปีกรมธรรม์ rider นั้นๆ | | | | |
| 11 | rider_maturity_date | | Date | | | | วันสิ้นสุดตามพิกัดการค้า (อายุถึงก่อน หรือแบบประกันหลักสิ้นสุดก่อน) เช่น แบบประกันหลักคุ้มครองถึงอายุ 99 ปี แต่ Rider คุ้มครองถึงอายุ 70 ปี ปัจจุบันอายุ 40 ปี ซื้อ Rider วันที่ 25/8/2021 ดังนั้น Rider สิ้นสุดรวมต่ออายุวันที่ 25/8/2051 (30 ปี) แต่กธ.หลักสิ้นสุดวันที่ 25/8/2080 (59 ปี) ให้ Rider_maturity_date แสดงวันที่ 25/8/2051 (เลือกค่า Min ของปี) | | | | |
| 12 | rider_mode_of_payment | | Numeric | 4 | | | โหมดการชำระเบี้ยของ rider ล่าสุด 12 = ชำระเบี้ยรายปี 6 = ชำระเบี้ยราย 6 เดือน 3 = ชำระเบี้ยราย 3 เดือน 1 = ชำระเบี้ยรายเดือน ใช้เหมือนกรมธรรม์หลัก | | | | |
| 13 | rider_attained_age | | Numeric | 17 | | | อายุุปัจจุบันของลูกค้า อิงตามการนับอายุของกรมธรรม์หลัก | | | | |
| 14 | rider_coverage_start_date | | Date | | | | วันเริ่มความคุ้มครอง rider ตาม rider_policy_year ของปีกรมธรรม์นั้นๆ เช่น Rider_policy_year=1 Rider_coverage_start_date=30/01/2021 Rider_policy_year=2 Rider_coverage_start_date=30/01/2022 | | | | |
| 15 | rider_pay_to_date | | Date | | | | วันที่ชำระถึง ตาม rider_policy_year (สอดคล้องกับการชำระเบี้ย) เช่น ชำระบี้ยมาแล้ว 3 เดือนในปีกรมธรรม์ Rider_pay_to_date=29/04/2021 ชำระบี้ยมาแล้ว 6 เดือนในปีกรมธรรม์ Rider_pay_to_date=29/07/2021 Main, Rider ไม่นับ Advance premium | | | | |
| 16 | rider_group | | Varchar | 1 | | | ประเภทของ rider ที่เกิดสินไหม Mapping ตาม AS400 ถ้า Accident rider -> A Health rider -> H Other -> O | | | | |
| 17 | rider_sum_assured | | VarcharNumeric | 25512,2 | | | ทุนประกันของแผน(Plan) rider ณ ปัจจุบัน เช่น HC600 ให้แสดง 600 | | | | |
| 18 | rider_oic_name | | Varchar | 255 | | | ชื่อของ rider_code ตามคปภ. อนุมัติ | | | | |
| 19 | rider_marketing_name | | Varchar | 255 | | | ชื่อของ rider_code ตาม marketing (ชื่อที่ใช้ในการขาย) ตย. ชื่อ RDABN2 ใน AS400 เช่น CPA2.6 DAB CI50 | | | | |
| 20 | rider_payment_time | | Numeric | 22,3 | | | จำนวนเดือนที่ชำระแล้ว (นับเฉพาะในปีกรมธรรม์นั้นๆ ดังนั้นมีแค่ 1-12 เท่านั้น) | | | | |
| 21 | rider_premium | | Numeric | 22,3 | | | เบี้ยประกันสะสมตามรอบปี กธ. (rider_policy_year) (เบี้ยที่ลูกค้าชำระจริง) | | | | |
| 22 | rider_health_extra_premium | | Numeric | 22,3 | | | เบี้ยประกันเพิ่มพิเศษสะสมตามรอบปี กธ. (rider_policy_year) เบี้ยประกันเพิ่มพิเศษตามระดับความเสี่ยงของสุขภาพ เฉพาะส่วน Extra Premium เท่านั้นไม่รวมเบี้ย Standard | | | | |
| 23 | rider_occu_extra_premium | | Numeric | 22,3 | | | เบี้ยประกันเพิ่มพิเศษสะสมตามรอบปี กธ. (rider_policy_year) เบี้ยประกันเพิ่มพิเศษตามระดับอาชีพ เฉพาะส่วน Extra Premium เท่านั้นไม่รวมเบี้ย Standard | | | | |
| 24 | rider_health_emr | | Numeric | 22,3 | | | % Extra Mortality เนื่องจากสุขภาพ เช่น 125% (ถ้ามี) ** EMR% ถูกกำหนดโดยฝ่ายพิจารณารับประกันเป็นรายกรมธรรม์ ** กรณีที่เป็น Standard จะใส่ 0 | | | | |
| 25 | rider_health_emr_amount | | Numeric | 22,3 | | | | | | | |
| 26 | rider_occu_class | | Numeric | 17 | | | Rider Occupation class ตาม UW | | | | |
| 27 | rider_status_effect_date | | Date | | | | วันที่สถานะของ rider มีผลดังนี้ (สัมพันธ์กับ Rider_status_current) เช่น Death = วันที่เสียชีวิต Inforce = วันที่เริ่มกรมธรรม์ครั้งล่าสุด Lapse = วันที่ขาดผล(ย้อนหลัง) Surrender = วันที่ใช้คำนวณมูลค่าเวนคืน … *ใช้ status ตามที่ระบบกำหนด | | | | |
| 28 | rider_status_current | | Varchar | 50 | | | สถานะ กธ. ณ ปัจจุบัน *ใช้ status ตามที่ระบบกำหนด ใช้สถานะตามฝ่ายปฏิบัติการ แล้วส่งให้ทางคณิตศาสตร์ทำความเข้าใจ ** รอหารือก่อน ** | | | | |
| 29 | rider_branch_code | | Varchar | 150 | | | Code สาขาที่ขายสัญญาเพิ่มเติม จะถูก Freeze ไว้ | | | | |
| 30 | rider_branch_name | | Varchar | 150 | | | ชื่อสาขาที่ขายสัญญาเพิ่มเติม | | | | |
| 31 | rider_branch_province | | Varchar | 150 | | | จังหวัดของสาขาที่ขายสัญญาเพิ่มเติม | | | | |
| 32 | rider_channel_code | | Varchar | 150 | | | Code ช่องทางที่ขายสัญญาเพิ่มเติม | | | | |
| 33 | rider_sale_agent_code | | Varchar | 7 | | | รหัสของตัวแทนที่ขาย rider ตัวนี้ (รหัส 7 หลักของตัวแทน) | | | | |
| 34 | rider_current_agent_code | | Varchar | 10 | | | รหัสของตัวแทนที่ดูแล rider นี้ในปัจจุบัน (รหัส 7 หลักของตัวแทน) | | | | |
| 35 | rider_co_pay_status | | Varchar | 10 | | | สถานะสำหรับ Co-pay ตามตาราง co-pay_status ใน sheet "table mapping" *** IT ต้องไปจับกับ condition ของ Co-pay เช่น Loss Ratio (สามารถปรึกษารายละเอียดจากฝ่ายสินไหม) *** | | | | |
| 36 | rider_co_pay_client_claim_paid | | Numeric | 22,3 | | | กรณีกรมธรรม์ทำ Co-pay โดยระบุเป็น % ที่ลูกค้าต้องร่วมจ่ายค่าสินไหม (เฉพาะปีกรมธรรม์นั้นๆ) หากไม่มีการทำ Co-pay ให้ระบุเป็น 0% เช่น บริษัทจ่ายสินไหม 70% ลูกค้าจ่ายสินไหม 30% ดังนั้นต้องแสดงค่า 30% | | | | |
| 37 | rider_co_pay_client_premium_discount | | Numeric | 22,3 | | | กรณีกรมธรรม์ทำ Co-pay โดยระบุเป็น % บริษัทลดเบี้ยให้ลูกค้า (เฉพาะปีกรมธรรม์นั้นๆ) หากไม่มีการทำ Co-pay ให้ระบุเป็น 0% เช่น บริษัทจ่าย 20% ลูกค้าจ่าย 80% ดังนั้นต้องแสดงค่า 20% | | | | |
| 38 | rider_premium_experience_adjusted | | Numeric | 22,3 | | | กรณีกรมธรรม์มีการเพิ่มหรือลดเบี้ยตามประสบการณ์เดิมของลูกค้า ในฟิลด์จะระบุเป็นเพิ่มเบี้ย (+) หรือลดเบี้ย (-) เป็น % ของเบี้ยเต็ม ตามประสบการณ์ที่ดีหรือแย่ ตั้งแต่ปีกรมธรรม์ที่ 2 เป็นต้นไป | | | | |
| 39 | rider_commission | | Numeric | 22,3 | | | % Commission ของ Rider ในรอบปีกรมธรรม์นั้นๆ | | | | |
| 40 | rider_insured_sex | | Varchar | 1 | | | เพศของผู้เอาประกัน | | | | |
| 41 | rider_med | | Varchar | 1 | | | Rider นี้ตรวจสุขภาพหรือไม่ ตรวจสุขภาพ = med ไม่ตรวจสุขภาพ = non-med **ถ้า Rider ยังไม่มีข้อมูลนี้แยกมา ให้ใส่เป็นของหลักแทน | | | | |
| 42 | rider_standard | | NumericVarchar | 22,31 | | | Rider นี้เป็นความเสี่ยงมาตราฐานหรือไม่ มาตราฐาน = Standard เสี่ยงกว่ามาตราฐาน = SubStandard **ถ้า Rider ยังไม่มีข้อมูลนี้แยกมา ให้ใส่เป็นของหลักแทน | | | | |
| 43 | rider_coverage_term | | Numeric | 22,3 | | | ระยะเวลาเอาประกันภัย ของกรมธรรม์ Rider | | | | |
| 44 | rider_payment_term | | Numeric | 412,2 | | | ระยะเวลาชำระเบี้ยประกันภัย ของกรมธรรม์ Rider | | | | |
| 45 | rider_claim_deductible | | NumericNumeric | 22,39 | | | ระบุจำนวนเงินที่ deduct ตาม Product feature เช่น D0, D20000, D50000 - กรณีไม่มี deduct ให้ default ค่าว่าง | | | | |
| 46 | rider_modal_premium | | Numeric | 22,3 | | | เบี้ยตาม mode *** ไม่รวม ExtraPremium | | | | |
| 47 | rider_modal_premium_extra | | Numeric | 22,3 | | | เบี้ยตาม mode ส่วน ExtraPremium | | | | |
| 48 | rider_unhealth_benefit_name | | Varchar | 150 | | | ฟิลด์ที่ใช้สำหรับแบบประกัน Rider ที่มีการ tag benefit รายละเอียดตาม Sheet Tag Benefit Rider | | | | |
| 49 | rider_unhealth_benefit_paid | | Varchar | 150 | | | ฟิลด์ที่ใช้สำหรับแบบประกัน Rider ที่มีการ tag benefit รายละเอียดตาม Sheet Tag Benefit Rider | | | | |
| 50 | main_commencement_date | | Date | | | | วันเริ่มความคุ้มครอง ของกรมธรรม์หลัก | | | | |
| 51 | main_maturity_date | | Date | | | | วันสิ้นสุดสัญญา ของกรมธรรม์หลัก | | | | |
| 52 | main_coverage_term | | Numeric | 22,3 | | | ระยะเวลาเอาประกันภัย ของกรมธรรม์หลัก | | | | |
| 53 | main_payment_term | | VarcharNumeric | 1022,3 | | | ระยะเวลาชำระเบี้ยประกันภัย ของกรมธรรม์หลัก | | | | |
| 54 | main_plan_code | | Varchar | 50 | | | รหัสแบบประกัน ของกรมธรรม์หลัก | | | | |
| 55 | mode_of_payment | | VarcharNumeric | 1504 | | | งวดการชำระเบี้ยประกันภัย ของกรมธรรม์หลัก 99 = Single 12 = ชำระเบี้ยรายปี 6 = ชำระเบี้ยราย 6 เดือน 3 = ชำระเบี้ยราย 3 เดือน 1 = ชำระเบี้ยรายเดือน ให้แสดงค่าเป็น 1,3,6,12,99 | | | | |
| 56 | policy_status_current | | NumericVarchar | 22,350 | | | สถานะของกรมธรรม์ (สิ้นเดือนปัจจุบัน) ของกรมธรรม์หลัก เช่น Inforce, Surrender, Lapsed, Premium Holiday, Auto Premium Holiday, Free Look, Death, Reinstatement, Non-Lapse Guaranteed เป็นต้น ให้แสดงข้อมูลตามคอลัมน์ "plsavc" ในชีท "UAT#1 list status ของ IT" เช่น I, D, L, N, S, F, AS, M, V และ Z | | | | |
| 57 | initial_premium | | Numeric | 22,3 | | | เบี้ยประกันภัยหลักเริ่มต้น ของกรมธรรม์หลัก เงื่อนไขเดียวกับ Initial_premium ของ RIVA13 | | | | |
| 58 | premium_paid | | Numeric | 22,3 | | | เบี้ยประกันภัยหลักที่ลูกค้าชำระภายในเดือนปัจจุบัน อ้างอิงจากใบเสร็จ ของกรมธรรม์หลัก | | | | |
| 59 | premium_status_current | | Numeric | 4 | | | สถานะของการชำระเบี้ย (สิ้นเดือนปัจจุบัน) เช่น ชำระปกติ (Premium Paying), หยุดพักชำระเบี้ยประกันภัย (Premium Holiday), ชำระครบ (Fully Paid) ให้แสดงข้อมูลตามคอลัมน์ "ppscnm" ในชีท "UAT#1 list status ของ IT" เช่น 1, 2 และ 3 | | | | |
| 60 | status_date_current | | Date | | | | วันที่เปลี่ยนสถานะกรมธรรม์ (ปัจจุบัน) | | | | |
| 61 | policy_status_last_month | | NumericVarchar | 1710 | | | สถานะของกรมธรรม์ (สิ้นเดือนที่ผ่านมา) เช่น Inforce, Surrender, Lapsed, Premium Holiday, Auto Premium Holiday, Free Look, Death, Reinstatement, Non-Lapse Guaranteed เป็นต้น ให้แสดงข้อมูลตามคอลัมน์ "plsavc" ในชีท "UAT#1 list status ของ IT" เช่น I, D, L, N, S, F, AS, M, V และ Z | | | | |
| 62 | status_date_last_month | | Date | | | | วันที่เปลี่ยนสถานะกรมธรรม์ (สิ้นเดือนที่ผ่านมา) | | | | |
| 63 | policy_status_last | | NumericVarchar | 1710 | | | สถานะของกรมธรรม์ (ครั้งก่อน) เช่น Inforce, Surrender, Lapsed, Premium Holiday, Auto Premium Holiday, Free Look, Death, Reinstatement, Non-Lapse Guaranteed เป็นต้น ให้แสดงข้อมูลตามคอลัมน์ "plsavc" ในชีท "UAT#1 list status ของ IT" เช่น I, D, L, N, S, F, AS, M, V และ Z | | | | |
| 64 | status_date_last | | Date | | | | วันที่เปลี่ยนสถานะกรมธรรม์ (ครั้งก่อน) | | | | |
| 65 | policy_month | | Numeric | 4 | | | เดือนกรมธรรม์ เช่น เดือนกรมธรรม์ที่ 1,2,…,23,…,50,… รวมเดือนที่ใช้สิทธิ์ Premium Holiday และ Lapse | | | | |
| 66 | initial_sa | | Numeric | 22,3 | | | จำนวนเงินเอาประกันภัยเริ่มต้น ใช้ตามที่ระบุไว้ในหน้าตารางกรมธรรม์ หรือบันทึกสลักหลัง (ถ้ามี) หมายเหตุ : 1. Regular Premium Initial_SA = จำนวนเท่าของ Regular Premium 2. Single Premium Initial_SA = X% ของ Single Premium สำหรับแบบประกันนี้ X = 120% | | | | |
| 67 | modal_premium_paid | | Numeric | 22,3 | | | Last updated modal premium (Based on latest policy endosement) เบี้ยตามโหมดตามการ update ล่าสุด (รวมทั้งจากการปรับจากสลักหลัง) | | | | |
| 68 | as_of_monthly | | Date | | | | สรุปรายงาน ณ สิ้นเดือนที่ | | | | |
| 69 | basic_insured_issue_age | | Numeric | 4 | | | อายุเมื่อเริ่มทำประกัน | | | | |
| 70 | date_of_birth_insured | | Date | | | | วันเดือนปีเกิดของผู้เอาประกันภัย | | | | |
| 71 | issue_date | | Date | | | | วันที่ออกกรมธรรม์ | | | | |
| 72 | xml_product_type | | Varchar | 100 | | | รายละเอียดของ XML Product Type | | | | |
| 73 | edw_product_type | | Varchar | 100 | | | รายละเอียดของ EDW Product Type | | | | |
| 74 | udw_product_type | | Varchar | 100 | | | รายละเอียดของ Underwrite Type | | | | |
| 75 | rider_pay_from_date | | Date | | | | วันเริ่มความคุ้มครองของปีกรมธรรม์ Rider นั้นๆ | | | | |
| 76 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 77 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 78 | as400_last_update_date | | Timestamp | | | not null | วันที่อัพเดทรายการ ของ as400 | | | | 2022-08-31 16:37:16 |
| 79 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 80 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 81 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 82 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 83 | rider_premium_period | | Numeric | 22,3 | | | เบี้ยตาม period ของกรมธรรม์สัญญาเพิ่มเติม *ไม่รวม ExtraPremium | | | | 9100 |
| 84 | rider_extra_premium_period | | Numeric | 22,3 | | | เบี้ยเพิ่มพิเศษตาม period ของกรมธรรม์สัญญาเพิ่มเติม | | | | 9100 |
| 85 | rider_policy_year_period | | Numeric | 4 | | | ปีกรมธรรม์ปัจจุบันของสัญญาเพิ่มเติม | | | | 1 |
| 86 | rider_age_period | | Numeric | 4 | | | อายุผู้เอาประกันภัย(ปี) ตามปีกรมธรรม์ปัจจุบันของสัญญาเพิ่มเติม | | | | 37 |
| 87 | coverage_rider_code | | Varchar | 50 | | | รหัสแผน | | | | HS1000 |
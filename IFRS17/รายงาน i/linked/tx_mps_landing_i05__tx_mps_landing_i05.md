# tx_mps_landing_i05

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_landing_i05-TOC) ] [ [Convention](#tx_mps_landing_i05-Convention) ] [ [Table : tx_mps_landing_i05](#tx_mps_landing_i05-Table:tx_mps_landing_i05) ]

## Convention

Description: ข้อมูล Transaction MPS Landing ของ I05

สามารถดูเงื่อนไข และคำอธิบายเพิ่มเติมได้ที่ [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)

## Table : tx_mps_landing_i05

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_landing_i05_id | PK | Numeric | 188 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| 3 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 4 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | GA1006 |
| 5 | policy_year | | Numeric | 2 | | | ปีกรมธรรม์ | | | | 2 |
| 6 | effective_date | | Date | | | | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | | | | 2001-09-27 |
| 7 | end_of_coverage_date | | Date | | | | วันสิ้นสุดความคุ้มครองของกรมธรรม์ปีนั้นๆ | | | | 2002-09-27 |
| 8 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | ค่าว่าง | | | |
| 9 | sales_channel_code | | Varchar | 50 | | | รหัสตัวเลข 7 digit | ค่าว่าง | | | |
| 10 | mode_of_payment | | Numeric | 1 | | | โหมดการชำระ | | | | 3 |
| 11 | receive_date | | Date | | | | วันที่อนุมัติ เริ่มสัญญา / ต่อสัญญา | | | | 2004-10-15 |
| 12 | no_of_member | | Numeric | 3 6 8 | | | จำนวน member ณ. วันที่ตกลงสัญญา | | | | 291 |
| 13 | sale_option | | Varchar | 1 | | | ช่องทางตัวแทน | | | | 0 |
| 14 | channel_desc | | Varchar | 50 | | | ช่องทางจัดจำหน่าย | | | | 0 |
| 15 | policy_status | | Varchar | 1 | | | สถานะของกรมธรรม์ | | | | L |
| 16 | modal_premium_life | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองชีวิต | | | | 0 |
| 17 | modal_premium_accident_death | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองอุบัติชีวิต | | | | 202.50 |
| 18 | modal_premium_med_accident | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองอุบัติค่ารักษา | | | | 472.50 |
| 19 | modal_premium_tpd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองทุพลภาพ | | | | 0 |
| 20 | modal_premium_ipd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยใน | | | | 127696.00 |
| 21 | modal_premium_opd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยนอก | | | | 188767.00 |
| 22 | modal_premium_dental | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองทันตกรรม | | | | 0 |
| 23 | modal_premium_other | | Numeric | 12,2 | | | เบี้ยหน้ากรมธรรม์ในความคุ้มครองอื่นๆ | ปัจจุบันยังไม่มีค่าลง | | | 0 |
| 24 | commission_rate_option_1 | | Numeric | 12,2 | | | % ค่าคอมมิสชั่น (ไม่ต้องแยก Coverage) | | | | 22.00 |
| 25 | commission_rate_option_2 | | Numeric | 12,2 | | | % ค่าคอมมิสชั่นที่แฝงใน Sale Promotion (ไม่ต้องแยก Coverage) (ถ้ามี) | | | | 22.00 |
| 26 | err_message | | Varchar | 500 | | | Error Message | | | | |
| 27 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 28 | last_update_date | | Timestamp | | | not null | วันที่ Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 29 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 30 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 31 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 32 | updated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| 33 | no_of_member_active | | Numeric | 6 8 | | | จำนวน member ที่ active | | | | 302 |
| 34 | no_of_member_inactive | | Numeric | 6 8 | | | จำนวน member ที่ inactive | | | | 128 |
| 35 | sql_last_update_date | | Date | | | | วันที่ Update ข้อมูลล่าสุดจาก SQL | | | | 2022-08-31 16:37:16 |
| 36 | type | | Varchar | 15 | | | ประเภทชุดข้อมูลที่ดึงจากตาราง | glpolicygloldpolicy | | | glpolicy |
| 37 | life_prem | | Numeric | 12,2 | | | เบี้ยชีวิต | | | | 1280.00 |
| 38 | life_e1prem | | Numeric | 12,2 | | | เบี้ยชีวิตเพิ่มพิเศษ | ลงค่าเป็น 0 เนื่องจากยังไม่มีค่าลง user ให้ทำเผื่อไว้ก่อน | | | 0 |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 39 | master_type_business_name | | Varchar | 250 | | | ชื่อประเภทธุรกิจตามเลขที่กรมธรรม์ | | | | การผลิตและประกอบชิ้นส่วนและอุปกรณ์ผลิตภัณฑ์อิเล็คทรอนิคส์ |
| 40 | master_province_thai | | Varchar | 35 | | | ชื่อจังหวัดของเลขที่กรมธรรม์ | | | | จ.ชลบุรี |
| 41 | policy_name | | Varchar | 100 | | | ชื่อกรมธรรม์ | | | | คอลิบรี แอสเซมบลี (ประเทศไทย) จำกัด |
| 42 | policy_type | | Varchar | 50 | | | ประเภทของกรมธรรม์ | | | | สมัครใจ |
| 43 | sum_insured_life | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง Life | | | | 1935282.59 |
| 44 | sum_insured_accident_death | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง Accident Death | | | | 1935282.59 |
| 45 | sum_insured_med_accident | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง Med Accident | | | | 1935282.59 |
| 46 | sum_insured_tpd | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง TPD | | | | 1935282.59 |
| 47 | sum_insured_ipd | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง IPD | | | | 1935282.59 |
| 48 | sum_insured_opd | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง OPD | | | | 1935282.59 |
| 49 | sum_insured_dental | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครอง dental | | | | 1935282.59 |
| 50 | sum_insured_other | | Numeric | 20,2 | | | ทุนประกันรวมความคุ้มครองอื่นๆ นอกเหนือจากด้านบน | | | | 0 |
| 51 | no_of_member_life | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Life | | | | 954 |
| 52 | no_of_member_accident_death | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Accident Death | | | | 954 |
| 53 | no_of_member_med_accident | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Med Accident | | | | 954 |
| 54 | no_of_member_tpd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง TPD | | | | 954 |
| 55 | agent_code | | Varchar | 7 | | | รหัสของพนักงานที่ขาย หรือดูแลกรมธรรม์นี้ตามแต่ปีกรมธรรม์ | | | | 5411000 |
| 56 | sale_code | | Varchar | 8 | | | รหัสของพนักงานที่รับผิดชอบ - Operation | | | | 00022968 |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 57 | no_of_member_ipd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง IPD | | | | 954 |
| 58 | no_of_member_opd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง OPD | | | | 954 |
| 59 | no_of_member_dental | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Dental | | | | 954 |
| 60 | policy_number_ref | | Varchar | 50 | | | เลขที่กรมธรรม์ของบริษัทแม่ ของปีก่อน (สำหรับกรณีที่มีการเปลี่ยนเลขที่กรมธรรม์ ของ GA & GS) | | | | GA1006 |
| 61 | fcl | | Numeric | 20,2 | | | Free Cover Limit ทุนประกันภัยที่ไม่ต้องตรวจสุขภาพ หากเกิดสินไหมแล้วบริษัทยังคงต้องจ่ายตามปกติ | | | | 200000.00 |
| 62 | company_name | | Varchar | 150 | | | ชื่อของบริษัทแม่ | | | | เอส.พี.เอส. คอนซัลติ้ง เซอร์วิส จำกัด |
| 63 | company_codedbd_code | | Varchar | 1020 | | | Code ของ DBD ของบริษัทแม่ (ประเภทธุรกิจ) | | | | 2566000788 |
| 64 | first_date | | Date | | | | วันเริ่มสัญญา (ครั้งแรก) ของกรมธรรม์นี้ | | | | 2023-06-01 00:00:00.000 |
| 65 | male | | Numeric | 8 | | | จำนวนสมาชิกเพศชายที่ Active | | | | 154 |
| 66 | female | | Numeric | 8 | | | จำนวนสมาชิกเพศหญิงที่ Active | | | | 161 |
| 67 | unname | | Numeric | 1 | | | ระบุว่าเป็นกรมธรรม์ Unname NULL : กธ. ปกติ 0 : กธ. ปกติ 1 : กธ. Unname | | | | 1 |
| 68 | reinsur_no | | Varchar | 10 | | | เลขที่กรมธรรม์ ประกันต่อ | | | | 1704001 |
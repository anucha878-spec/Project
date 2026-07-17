# tx_mps_master_i05 (CoreEDW)

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=944833132
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_master_i05(CoreEDW)-TOC) ] [ [Convention](#tx_mps_master_i05(CoreEDW)-Convention) ] [ [Table : tx_mps_master_i05](#tx_mps_master_i05(CoreEDW)-Table:tx_mps_master_i05) ]

## Convention

Description: ข้อมูล Transaction MPS Master ของ I05 (Table Master ฝั่ง CoreEDW)

## Table : tx_mps_master_i05

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_master_i05_id | PK | Numeric | 818 | | not null | รหัสของตาราง | | | | 1 |
| 2 | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | not null | เลขที่กรมธรรม์ | | | | GH021 |
| 4 | policy_year | | Numeric | 2 | | | ปีกรมธรรม์ | | | | 1 |
| 5 | effective_date | | Date | | | | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | | | | 2022-04-15 |
| 6 | end_of_coverage_date | | Date | | | | วันสิ้นสุดความคุ้มครองของกรมธรรม์ปีนั้นๆ | | | | 2023-04-14 |
| 7 | sales_channel | | Varchar | 50 | | | ช่องทางขายใช้ตัวย่อตามบัญชี | | | | ALG |
| 8 | sales_channel_code | | Varchar | 50 | | | รหัสช่องทางการขาย | | | | 8300001 |
| 9 | mode_of_payment | | Numeric | 1 2 | | | โหมดการชำระ | | | | 12 |
| 10 | receive_date | | Date | | | | วันที่อนุมัติ เริ่มสัญญา / ต่อสัญญา | | | | 1993-04-15 |
| 11 | no_of_member | | Numeric | 6 8 | | | จำนวน member ณ. วันที่ตกลงสัญญา | | | | 310 |
| 12 | sale_option | | Varchar | 1 50 | | | ช่องทางตัวแทน | | | | ฝ่ายสถาบันการเงิน |
| 13 | channel_desc | | Varchar | 50 | | | ช่องทางจัดจำหน่าย | | | | Dai-ichi |
| 14 | policy_status | | Varchar | 1 10 | | | สถานะของกรมธรรม์ | | | | Active |
| 15 | modal_premium_life | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองชีวิต | | | | 43000.00 |
| 16 | modal_premium_accident_death | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองอุบัติชีวิต | | | | 30100.00 |
| 17 | modal_premium_med_accident | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองอุบัติค่ารักษา | | | | 0 |
| 18 | modal_premium_tpd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองทุพลภาพ | | | | 6020.00 |
| 19 | modal_premium_ipd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยใน | | | | 337904.00 |
| 20 | modal_premium_opd | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยนอก | | | | 562749.00 |
| 21 | modal_premium_dental | | Numeric | 12,2 | | | เบี้ยตามหน้ากรมธรรม์ในความคุ้มครองทันตกรรม | | | | 0 |
| 22 | modal_premium_other | | Numeric | 12,2 | | | เบี้ยหน้ากรมธรรม์ในความคุ้มครองอื่นๆ | | | | 0 |
| 23 | commission_rate_option_1 | | Numeric | 12,2 | | | % ค่าคอมมิสชั่น (ไม่ต้องแยก Coverage) | | | | 20.00 |
| 24 | commission_rate_option_2 | | Numeric | 12,2 | | | % ค่าคอมมิสชั่นที่แฝงใน Sale Promotion (ไม่ต้องแยก Coverage) (ถ้ามี) | | | | 5.00 |
| 25 | portfolio_id | | Varchar | 50 | | | Insurance contract group (ICG) | | | | GRP_YRT-2022-ONRS |
| 26 | ri_portfolio_id | | Varchar | 50 | | | Reinsruance contract group(RCG) | | | | GRP_MRP-2022-RING |
| 27 | ri_premium_life | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองชีวิต | | | | |
| 28 | ri_premium_accident_death | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองอุบัติชีวิต | | | | |
| 29 | ri_premium_med_accident | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองอุบัติค่ารักษา | | | | |
| 30 | ri_premium_tpd | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองทุพลภาพ | | | | |
| 31 | ri_premium_ipd | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยใน | | | | |
| 32 | ri_premium_opd | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองสุขภาพผู้ป่วยนอก | | | | |
| 33 | ri_premium_dental | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองทันตกรรม | | | | |
| 34 | ri_premium_other | | Numeric | 12,2 | | | ประมาณการณ์ Premium ส่ง Reinsurance ของกรมธรรม์ในความคุ้มครองอื่นๆนอกเหนือจากด้านบน | | | | |
| 35 | ri_commencement_date | | Date | | | | วันเริ่มสัญญา RI | | | | 2022-04-15 |
| 36 | treaty_code | | Varchar | 50 | | | รหัสบริษัทประกันภัยต่อ | | | | DAI_Grp_Daiichi_Coins |
| 37 | ri_method | | Varchar | 50 | | | Method ของ RI | 1 - QS2 - Surplus5 - QS-Surplus6 - Surplus-QS | | | QS |
| 38 | transaction_date | | Timestamp | | | not null | วันที่ทำรายการ | | | | 2022-08-31 16:37:16 |
| 39 | sql_last_update_date | | Timestamp | | | not null | วันที่ Update ข้อมูลล่าสุด | | | | 2022-08-31 16:37:16 |
| 40 | create_datecreated_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-08-31 16:37:16 |
| 41 | create_bycreated_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 42 | update_dateupdated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-08-31 16:37:16 |
| 43 | update_byupdated_by | | Varchar | 50 | | | ผู้บันทึกรายการ | | | | boss |
| (ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 3) | | | | | | | | | | | |
| 44 | master_type_business_name | | Varchar | 250 | | | ชื่อประเภทธุรกิจตามเลขที่กรมธรรม์ | | | | การผลิตและประกอบชิ้นส่วนและอุปกรณ์ผลิตภัณฑ์อิเล็คทรอนิคส์ |
| 45 | master_province_thai | | Varchar | 35 | | | ชื่อจังหวัดของเลขที่กรมธรรม์ | | | | จ.ชลบุรี |
| 46 | policy_name | | Varchar | 100 | | | ชื่อกรมธรรม์ | | | | คอลิบรี แอสเซมบลี (ประเทศไทย) จำกัด |
| 47 | policy_type | | Varchar | 50 | | | ประเภทของกรมธรรม์ | | | | สมัครใจ |
| 48 | sum_insured_life | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง Life | | | | 1935282.59 |
| 49 | sum_insured_accident_death | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง Accident Death | | | | 1935282.59 |
| 50 | sum_insured_med_accident | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง Med Accident | | | | 1935282.59 |
| 51 | sum_insured_tpd | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง TPD | | | | 1935282.59 |
| 52 | sum_insured_ipd | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง IPD | | | | 1935282.59 |
| 53 | sum_insured_opd | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง OPD | | | | 1935282.59 |
| 54 | sum_insured_dental | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครอง Dental | | | | 1935282.59 |
| 55 | sum_insured_other | | Numeric | 12,220,2 | | | ทุนประกันรวมความคุ้มครองอื่นๆ นอกเหนือจากด้านบน | | | | 0 |
| 56 | no_of_member_life | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Life | | | | 954 |
| 57 | no_of_member_accident_death | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Accident Death | | | | 954 |
| 58 | no_of_member_med_accident | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Med Accident | | | | 954 |
| 59 | no_of_member_tpd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง TPD | | | | 954 |
| 60 | agent_code | | Varchar | 7 | | | รหัสของพนักงานที่ขาย หรือดูแลกรมธรรม์นี้ตามแต่ปีกรมธรรม์ | | | | 5411000 |
| 61 | source_sale_channel | | Varchar | 50 | | | SalesChannel ตามสาขาที่ขายแรกเริ่ม | | | | ALG |
| 62 | source_sale_channel_code | | Varchar | 50 | | | SalesChannelcode ตามสาขาที่ขายแรกเริ่ม | | | | 8300001 |
| **ปรับเพิ่มเติมจาก Project EDW-P6** | | | | | | | | | | | |
| 63 | no_of_member_ipd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง IPD | | | | 954 |
| 64 | no_of_member_opd | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง OPD | | | | 954 |
| 65 | no_of_member_dental | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง Dental | | | | 954 |
| 66 | no_of_member_other | | Numeric | 8 | | | จำนวนสมาชิกที่ได้รับความคุ้มครอง อื่นๆ | | | | 0 |
| 67 | policy_number_ref | | Varchar | 50 | | | เลขที่กรมธรรม์ของบริษัทแม่ ของปีก่อน(สำหรับกรณีที่มีการเปลี่ยนเลขที่กรมธรรม์ ของ GA & GS) | | | | GA1006 |
| 68 | ri_status | | Varchar | 1 | | | ระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน | | | | Y |
| 69 | fcl | | Numeric | 20,2 | | | Free Cover Limit ทุนประกันภัยที่ไม่ต้องตรวจสุขภาพ หากเกิดสินไหมแล้วบริษัทยังคงต้องจ่ายตามปกติ | | | | 200000.00 |
| 70 | company_name | | Varchar | 150 | | | ชื่อของบริษัทแม่ | | | | เอส.พี.เอส. คอนซัลติ้ง เซอร์วิส จำกัด |
| 71 | company_codedbd_code | | Varchar | 1020 | | | Code ของ DBD ของบริษัทแม่ (ประเภทธุรกิจ) | | | | 2566000788 |
| 72 | first_effective_date | | Date | | | | วันเริ่มสัญญา (ครั้งแรก) ของกรมธรรม์นี้ กรณี GA หรือ GS ต้องนับกรมธรรม์เริ่มแรก(ก่อนเปลี่ยนเลขกรมธรรม์) | | | | 2023-06-01 |
| 73 | female_ratio | | Numeric | 3,2 | | | สัดส่วนจำนวน member ผู้หญิงต่อ member ทั้งหมด | | | | 0.52 |
| 74 | unname | | Numeric | 1 | | | ระบุว่าเป็นกรมธรรม์ Unname NULL : กธ. ปกติ0 : กธ. ปกติ1 : กธ. Unname | | | | 1 |
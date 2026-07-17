# Process Generate I04 Untag

- url: http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
>
Icon

กำหนดให้ $รอบประมวลผลปัจจุบัน มีค่าเท่ากับ ปีเดือนปัจจุบัน - 1 เดือน โดยให้ดึงค่าจาก [A17. การกำหนดรอบประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971014593)

แต่สำหรับการทดสอบ SIT, UAT สามารถปรับให้รอบประมวลผล ย้อนหลัง หรือล่วงหน้าได้มากกว่า 1 เดือน

>
**1. หากธ.ที่เข้าเงื่อนไขขอ Tagging**

>
**1.1 กรณีตั้งฐาน**

[tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = True หาเงื่อนไขจากกรมธรรม์สถานะ Active รายละเอียดดังนี้

1. ดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน
2. current_policy_status มีสถานะ Active (อ้างอิง: [A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))

เพื่อรองรับการทดสอบ SIT, UAT ในรอบประมวลผลย้อนหลัง หรือรอบประมวลผลในอนาคต หากพบว่าไม่มีการ set up ให้ปีเดือนปัจจุบัน - 1 เดือน ให้ระบบเช็คเงื่อนไข วันที่ issue กรมธรรม์เพิ่มเติม

1. issue_date

>
**1.2 กรณี ongoing**

กรณี On going [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = False มี 2 กลุ่มข้อมูล

- กลุ่ม 1: กธ.ที่เคสใหม่, เคสใหม่ที่มีการ Freelook, หรือ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging
- กลุ่ม 2: กธ.ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม

>
**ข้อมูลกลุ่มที่ 1: หากรมธรรม์เคสใหม่, เคสใหม่ที่มีการ Freelook, หรือ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging**

1. **หากรมธรรม์เคสใหม่, เคสใหม่ที่มีการ Freelook** โดยดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) [tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน
2. effective_date issue_date = วันที่เริ่มสัญญาตั้งแต่เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน จนถึงวันที่สิ้นเดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน (ตัวอย่าง รอบประมวลผล 05/2022 issue date ต้องมากกว่าหรือเท่ากับ 01/05/2022 แต่น้อยกว่าหรือเท่ากับวันที่ 31/05/2022)
3. หากพบตามเงื่อนไข ให้ตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูลใน Master โดยค้นหาที่ตาราง [tx_mps_master_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i04) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์
**หากรมธรรม์ Reinstate**โดยดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) [tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic) ด้วยเงื่อนไข ดังนี้
1. period = $รอบประมวลผลปัจจุบัน
2. current_policy_status มีสถานะ Active (อ้างอิง:[A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))
3. effective_date issue_date

>
**ข้อมูลกลุ่มที่ 2: หากรมธรรม์ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม หากรมธรรม์ที่เข้า 2 เงื่อนไข ดังนี้**

1. ดึงข้อมูลกรมธรรม์ที่มีข้อมูล RI ในรอบเดือนปัจจุบันจาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไขดังนี้ period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
4. code_plan = แบบประกัน
5. movement ไม่ใช่ค่า 'R' หรือ 'U' = 'A'
6. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3)
นำกรมธรรม์จากข้อ 1. ไปหากรมธรรม์ที่ยังไม่เคยมีข้อมูล RCG Tagging จาก [tx_mps_master_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i04) ด้วยเงื่อนไข ri_portfolio_id เป็นค่าว่าง

>
**2. บันทึกข้อมูลกรมธรรม์หลักที่ตาราง untag**

นำ List กธ.ที่ผ่านเงื่อนไขจากข้อ 1. มาเตรียมข้อมูล เพื่อบันทึกลงตาราง untag โดยแยกเงื่อนไขการเตรียมข้อมูลเป็น 2 กรณี ดังนี้

- **กรณีที่ 1: กรณีไม่ใช่การขอ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ.จาก Landing (2.1)**
- **กรณีที่ 2: กรณีขอเฉพาะ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ. จาก Landing และดึงข้อมูล ICG Tagging และข้อมูลกธ. ณ สิ้นเดือนก่อนหน้า จาก Master (2.2)** ****

>
**2.1 กรณีไม่ใช่การขอ rcg tagging เพิ่มเติม**

1. นำข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) [tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์จากข้อ 1.1.1
2. บันทึกข้อมูลที่ตาราง untag ตามเงื่อนไข mapping field (อ้างอิง Field จาก Column "Landing" จาก [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830))

>
**2.2 กรณีขอ RCG Tagging เพิ่มเติม**

1. ดึงข้อมูลสำหรับบันทึกข้อมูล untag ดังนี้ข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) [tx_mps_landing_i04_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04_oic) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์จากข้อ 1.1.2
2. ข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i04) ด้วยเงื่อนไข policy_number
บันทึกข้อมูลที่ตาราง untag ตามเงื่อนไข mapping field (อ้างอิง Field จาก Column "Landing" จาก [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830))

>
**3. Update ส่วนข้อมูล Reinsurance**

ทำ 2 ขั้นตอน ดังนี้

>
**3.1 ดึงข้อมูล Reinsurance**

1. ดึงข้อมูล RI จาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไข period)
2. policy_number = เลขที่กรมธรรม์
3. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
4. code_plan = แบบประกัน
5. movement ไม่ใช่ค่า 'R' หรือ 'U' = 'A'
6. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3)
ตรวจสอบค่าเบี้ยของ RI (ri_premium) ว่า เป็น 0 หรือไม่
1. กรณีค่าเบี้ยของ RI **เป็น** 0 ถือว่า ไม่เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการดังนี้ไม่เข้าเงื่อนไขในข้อ **3.2 Update ส่วนข้อมูล Reinsurance ที่ตาราง untag **และ** (PH4.1) Update ข้อมูล RI NAR**
2. ดำเนินการต่อในข้อ** 4. กรองข้อมูลกธ.ที่ duplicate**** **และ** 5. Generate ข้อมูลกรมธรรม์ออกมาเป็น I04 File ในรูปแบบ .csv**
3. กรณีผลรวม **ไม่เป็น** 0 ถือว่า เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการตามข้อถัดไป

>
**3.2 Update ส่วนข้อมูล Reinsurance ที่ตาราง untag**

Update ข้อมูล RI ที่ตาราง [tx_mps_untag_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน, policy_number = เลขที่กรมธรรม์, plan_code = แบบประกัน โดย update ค่า ดังนี้

| Update [tx_mps_untag_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04) | Source: [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt)tx_ri_support_bk_oic | Remarks |
| --- | --- | --- |
| ri_commencement_date | ri_commencement_date | |
| treaty_code_1 | treaty_code | |
| ri_method_1 | ri_method | รูปแบบข้อมูล "QS", "Surplus", "QS-Surplus", "Surplus-QS" |
| ri_mode_of_payment_1 | ri_mode_of_payment | กรณีพบเป็น 'Y' ให้บันทึก 12กรณีพบเป็น 'M' ให้บันทึก 1 |
| ri_gross_premium_1 | ri_premium | |
| ri_sum_assured_1 | ri_sumassured | |
| ri_prev_net_amount_at_risk_1 | ri_previous_nar | หาก Treaty ใดไม่มีข้อมูล ให้แสดงค่า ศูนย์ |
| ri_current_net_amount_at_Risk_1 | ri_current_nar , total_nar | ยกเลิกเงื่อนไขการหยิบค่า total nar เพราะเป็นค่าจาก current + previousกรณีค่า ri_current_nar เป็น ค่าว่าง, null, 0 ให้ไปหยิบค่า total_nar มาลงแทน |

>
Icon

![(star)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/star_yellow.png) **หากข้อมูลกรมธรรม์เดียวกัน แต่นำส่ง Reinsurer มากกว่า 1 Treaty ให้ แสดงข้อมูลตามตารางด้านบนเป็น _2 และ _3 ตามลำดับ**

(ปรับเนื่องจาก New Closing OIC) ยกเลิกการ Update ข้อมูล RI NAR เนื่องจากข้อมูล มาไม่ทันในรอบประมวล Untag

Spec (PH4.1)

>
**(PH4.1) Update ข้อมูล RI NAR**

1. ตรวจสอบข้อมูล [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ด้วยเงื่อนไขดังนี้period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์ หากพบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ period = Untag period
3. policy_number = Untag policy_number
4. treaty_code = Untag treaty_code
5. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i04 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i04** | | --- | --- | --- | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

หากไม่พบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ **ยกเลิกเงื่อนไขในส่วนนี้ เนื่องจากจะทำให้ Conflict กับเงื่อนไขของการตรวจสอบ RI Premium = 0**

1. period = Untag period
2. policy_number = Untag policy_number
3. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i04 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i04** | | --- | --- | --- | | treaty_code_1 | if treaty_code_1 is null | treaty_code_1 | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

Spec (PH6)

>
**(ปรับจาก Project EDW-P6: 15/10/2567) Update ข้อมูล RI NAR**

ตรวจสอบข้อมูล [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar)ด้วยเงื่อนไขดังนี้

- period = Untag period
- policy_number = Untag policy_number
- prophet_plan_code = Untag prophet_plan_code (ตัดออกเนื่องจากตาราง [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) จะไม่ส่ง prophet_plan_code มาให้ ส่งแต่ plan_code)
- plan_code = Untag plan_code
- treaty_code = Untag treaty_code
- nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business')

กรณีพบข้อมูลตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i04 **ดังนี้

| Untag | [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) | [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) | เงื่อนไขเพิ่มเติม |
| --- | --- | --- | --- |
| ri_prev_net_amount_at_risk | ri_previous_nar | ri_previous_nar | **Step1 ดึงค่าจาก Support Booking**ri_previous_nar กรณีมีค่ามากกว่า 0ri_previous_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_previous_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |
| ri_current_net_amount_at_Risk | ri_current_nar | ri_current_nar | **Step1 ดึงค่าจาก Support Booking**ri_current_nar กรณีมีค่ามากกว่า 0ri_current_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_current_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |

**![](http://wiki.thaisamut.co.th/download/attachments/942604594/lightbulb_on.png?version=1&modificationDate=1728975508169&api=v2) แสดงชุดข้อมูลให้สอดคล้องกับ Treaty_1, Treaty_2, Treaty_3**

>
**เพิ่ม process workaround ช่องทางการขาย full time agent**

สำหรับการ workaround update ช่องทางการขาย full time agent ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel)

1. ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel) ค้นหาด้วยเลขที่กธ.
2. ให้ update ข้อมูลในตาราง untag ค่าดังนี้sale_channel_code, **(ปรับเพิ่ม 06/12/67) **source_sale_channel_code (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel_code
3. sale_channel, **(ปรับเพิ่ม 06/12/67) **source_sale_channel (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel

remark: [ADW-12424](http://jira.thaisamut.co.th/browse/ADW-12424) - [EDW-PH5.1][Group3][MPS-UAT]รบกวนตรวจสอบ UAT I04 UL เนื่องจาก Untag, Master ไม่แสดงค่า mode_of_payment, sales_channel,Customer_id (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed)

>
**4. กรองข้อมูลกธ.ที่ duplicate**

ระบบดำเนินการกรองข้อมูลกรมธรรม์ที่ duplicate เนื่องจากระบบ gen tagging ไม่รองรับการนำเข้ากรมธรรม์ duplicate และเพื่อนำไปออกรายงานตรวจสอบข้อมูลต้นทางเพิ่มเติม

1. ดึงข้อมูลจาก [tx_mps_untag_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน
2. ตรวจสอบหากพบจำนวนของเลขที่กรมธรรม์ใด มากกว่า 1 รายการ บันทึกข้อมูลที่ [tx_mps_untag_i04_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04_dup)
3. ลบข้อมูลจาก [tx_mps_untag_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i04)

>
**5. Generate ข้อมูลกรมธรรม์ออกมาเป็น I04 File ในรูปแบบ .csv**

1. ชื่อไฟล์ อ้างอิง [A3.4 รูปแบบเอกสาร Output ไฟล์ I01-I05](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=925729003)
2. ชื่อ Column อ้างอิงจาก ตาราง output ที่ Column "I04 Report Column Name" จาก [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830)
3. Value ให้นำค่าจากตาราง Untag มาบันทึก (อ้างอิง Field จากคอลัมน์ "Untag" จาก [EDW-MPS-PS004-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930840830))
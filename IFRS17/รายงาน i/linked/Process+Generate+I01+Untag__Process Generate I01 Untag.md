# Process Generate I01 Untag

- url: http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I01+Untag
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
>
Icon

กำหนดให้ $รอบประมวลผลปัจจุบัน มีค่าเท่ากับ ปีเดือนปัจจุบัน - 1 เดือน โดยให้ดึงค่าจาก [A17. การกำหนดรอบประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971014593)

แต่สำหรับการทดสอบ SIT, UAT สามารถปรับให้รอบประมวลผล ย้อนหลัง หรือล่วงหน้าได้มากกว่า 1 เดือน

>
**1. หากธ.ที่เข้าเงื่อนไขขอ Tagging**

กรณีตั้งฐาน...

>
**1.1 กรณีตั้งฐาน**

[tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = True หาเงื่อนไขจากกรมธรรม์สถานะ Active รายละเอียดดังนี้

>
**ประเภทสามัญ**

1. ดึงข้อมูลกรมธรรม์หลัก**ข้อมูลกลุ่มที่ 1**: จากกระบวนการสิ้นเดือน จากตาราง [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)
2. **ข้อมูลกลุ่มที่ 2**: จากกระบวนการนำเข้ากธ. ธกส. backdate จากตาราง [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord)
ตรวจสอบเงื่อนไข ดังนี้
1. period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. current_basic_policy_status มีสถานะ Active (อ้างอิง: [A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))
ตรวจสอบว่าเป็นกรมธรรม์ที่มาจาก กระบวนการนำเข้าของ ธกส จากตาราง [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord) ใช่หรือไม่

1. กรณีใช่ ไม่ต้องตรวจสอบเงื่อนไข วันที่ issue กรมธรรม์เพิ่มเติม ให้ดำเนินการตามข้อถัดไป
2. กรณีไม่ใช่ ให้ตรวจสอบเงื่อนไข วันที่ issue กรมธรรม์เพิ่มเติม ดังนี้

เพื่อรองรับการทดสอบ SIT, UAT ในรอบประมวลผลย้อนหลัง หรือรอบประมวลผลในอนาคต หากไม่พบการ set up ให้ปีเดือนปัจจุบัน - 1 เดือน ให้ระบบเช็คเงื่อนไข วันที่ issue กรมธรรม์เพิ่มเติม

1. กรณีพบ issue_date: issue_date

>
**ประเภทอุตสาหกรรม**

1. ดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. current_basic_policy_status มีสถานะ Active (อ้างอิง: [A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))

ตรวจสอบวันที่ issue_date ดังนี้ เพื่อรองรับการทดสอบ SIT, UAT ในรอบประมวลผลย้อนหลัง หรือรอบประมวลผลในอนาคต หากไม่พบการ set up ให้ปีเดือนปัจจุบัน - 1 เดือน ให้ระบบเช็คเงื่อนไข วันที่ issue กรมธรรม์เพิ่มเติม

1. กรณีพบ issue_date: issue_date ตรวจสอบต้องไม่ใช่กลุ่มกธ.จาก ข้อมูลปรับสถานะกธ.สิ้นผลประจำเดือน เงื่อนไขดังนี้ (20/12/65 prod issue41 ADW-6284)
1. ดึงข้อมูลจาก [tx_mps_backdate_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind)period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์

>
**1.2 กรณี ongoing**

กรณี On going [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = False มี 2 กลุ่มข้อมูล

- กลุ่ม 1: กธ.ที่เคสใหม่, เคสใหม่ที่มีการ Freelook, หรือ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging
- กลุ่ม 2: กธ.ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม

>
**ข้อมูลกลุ่มที่ 1: หากรมธรรม์เคสใหม่, เคสใหม่ที่มีการ Freelook, หรือ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging**

กลุ่ม 1: ประกอบด้วย 2 กลุ่มกรมธรรม์

1.1 กลุ่มกธ. เคสใหม่, เคสใหม่ที่มีการ Freelook

1.2 กลุ่มกธ. Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging

>
**1.1 กลุ่มข้อมูลเคสใหม่, เคสใหม่ที่มีการ Freelook**

>
**ประเภทสามัญ**

1. ดึงข้อมูลกรมธรรม์หลัก กรณีเป็น **ข้อมูลกลุ่มที่ 1**: จากกระบวนการสิ้นเดือน จากตาราง [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord) ตรวจสอบเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. **issue_date **effective_date** **= วันที่ issue date ตั้งแต่ 1 2 เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน จนถึงวันที่สิ้นเดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน (ตัวอย่าง รอบประมวลผล 05/2022 Issue date ต้องมากกว่าหรือเท่ากับ 01/04/2022 แต่น้อยกว่าวันที่ 01/06/2022)
3. หากพบตามเงื่อนไข ให้ตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูลใน Master โดยค้นหาที่ตาราง [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์
ดึงข้อมูลกรมธรรม์หลัก กรณีเป็น **ข้อมูลกลุ่มที่ 2**: จากกระบวนการนำเข้ากธ. ธกส. backdate จากตาราง [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord) ตรวจสอบเงื่อนไข ดังนี้
1. period = $รอบประมวลผลปัจจุบัน
2. หากพบตามเงื่อนไข ให้ตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูลใน Master โดยค้นหาที่ตาราง [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์

>
**ประเภทอุตสาหกรรม**

1. ดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. issue_date effective_date = วันที่เริ่มสัญญาตั้งแต่ 2 เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน จนถึงวันที่สิ้นเดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน วันปัจจุบัน
หากพบตามเงื่อนไข (1.) ให้ตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูลใน Master โดยค้นหาที่ตาราง [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์

>
**1.2 กลุ่มข้อมูลกรมธรรม์ Reinstate**

>
**ประเภทสามัญ**

1. ดึงข้อมูลกรมธรรม์หลัก **ข้อมูลกลุ่มที่ 1**: จากกระบวนการสิ้นเดือน จากตาราง [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord) ตรวจสอบเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน
2. current_basic_policy_status มีสถานะ Active (อ้างอิง: [A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))
3. ตรวจสอบวันที่ issue date และวันเริ่มสัญญา ต้องไม่เกินวันที่สิ้นเดือนของรอบประมวลผล กรณีมี issue date: issue_date หากพบตามเงื่อนไขให้นำเลขกรมธรรม์ข้างต้น ไปตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูล ICG Tagging ค้นหาที่ตาราง [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์ดึงข้อมูลกรมธรรม์หลัก **ข้อมูลกลุ่มที่ 2**: จากกระบวนการนำเข้ากธ. ธกส. backdate จากตาราง [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord) ตรวจสอบเงื่อนไข ดังนี้
1. period = $รอบประมวลผลปัจจุบัน
2. หากพบตามเงื่อนไขให้นำเลขกรมธรรม์ข้างต้น ไปตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูล ICG Tagging ค้นหาที่ตาราง[tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01)ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์
ตรวจสอบต้องไม่ใช่กลุ่มกธ.จาก 1.1 กลุ่มกธ. เคสใหม่, เคสใหม่ที่มีการ Freelook

>
**ประเภทอุตสาหกรรม**

1. ดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. current_basic_policy_status มีสถานะ Active (อ้างอิง: [A5. การกำหนดสถานะกรมธรรม์ Active และ Non Active](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471597))
3. ตรวจสอบวันที่ issue date และวันเริ่มสัญญา ต้องไม่เกินวันที่สิ้นเดือนของรอบประมวลผล กรณีมี issue date: issue_date หากพบตามเงื่อนไข ให้นำเลขกรมธรรม์ข้างต้น ไปตรวจสอบหากรมธรรม์ที่ยังไม่เคยมีข้อมูลใน ค้นหาที่ตาราง [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_number = เลขที่กรมธรรม์ตรวจสอบต้องไม่ใช่กลุ่มกธ.จาก 1.1 กลุ่มกธ. เคสใหม่, เคสใหม่ที่มีการ Freelook

>
**ข้อมูลกลุ่มที่ 2 (เฉพาะสามัญ): หากรมธรรม์ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม หากรมธรรม์ที่เข้า 2 เงื่อนไข ดังนี้**

1. ดึงข้อมูลกรมธรรม์ที่มีข้อมูล RI ในรอบเดือนปัจจุบันจาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไขดังนี้ period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
4. code_plan = แบบประกัน (หากเป็นกธ. MRTA/MLTA ไม่ใช้เงื่อนไข code_plan)
5. **base_or_rider = 'Base' **(หากเป็นกธ. MRTA/MLTA ไม่ใช้เงื่อนไข code_plan)
6. movement = 'A'
7. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3)
นำกรมธรรม์ที่ได้ตามเงื่อนไข ไปตรวจสอบต้องเป็นกรมธรรม์ที่เคยมีข้อมูลใน [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) แต่ยังไม่เคยมีข้อมูล RCG Tagging ด้วยเงื่อนไข ri_portfolio_id เป็นค่าว่าง

>
**2. บันทึกข้อมูลกรมธรรม์หลักที่ตาราง untag**

นำ List กธ.ที่ผ่านเงื่อนไขจากข้อ 1. มาเตรียมข้อมูล เพื่อบันทึกลงตาราง [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) โดยแยกเงื่อนไขการเตรียมข้อมูลเป็น 2 กรณี ดังนี้

- **กรณีที่ 1: กรณีไม่ใช่การขอ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ.จาก Landing (2.1)**
- **กรณีที่ 2: กรณีขอเฉพาะ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ. จาก Landing และดึงข้อมูล ICG Tagging และข้อมูลกธ. ณ สิ้นเดือนก่อนหน้า จาก Master (2.2)**

>
**2.1 กรณีไม่ใช่การขอ rcg tagging เพิ่มเติม**

>
**ประเภทสามัญ**

1. ดึงข้อมูลกรมธรรม์ ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์**ข้อมูลกลุ่มที่ 1**: จากกระบวนการสิ้นเดือน ส่วนกธ.หลักจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)
2. ส่วน Rider จาก [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)
**ข้อมูลกลุ่มที่ 2**: จากกระบวนการนำเข้ากธ. ธกส. backdate
1. ส่วนกธ.หลักจาก [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord)
2. ส่วน Rider จาก [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider)
เงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

>
**ประเภทอุตสาหกรรม**

1. ดึงข้อมูลกรมธรรม์จากตาราง [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์
2. เงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)

>
**2.2 กรณีขอ RCG Tagging เพิ่มเติม (เฉพาะสามัญ)**

1. ดึงข้อมูลกรมธรรม์ จากกระบวนการสิ้นเดือน ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์ส่วนกธ.หลักจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)
2. ส่วน Rider จาก [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)
ดึงข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01) ด้วยเงื่อนไข policy_numberเงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

>
**3. Update ข้อมูลกรมธรรม์เพิ่มเติม**

>
**ประเภทสามัญ**

>
**ข้อมูลเงินกู้**

1. Clear ข้อมูลเงินกู้ทุกกรมธรรม์ โดยการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ค่า loan_principle_amount, loan_interest_amount, loan_balance_amount ให้เป็น 0 เนื่องจากตารางข้อมูลสามัญ จะลบข้อมูลเงินกู้ที่ Inactive ออกจากตารางทุกเดือน (18/08/22)
2. ให้ระบบ Clear ค่า PL และ APL กรณี PL ระบบจะเคลียร์ค่าวันที่กู้ และยอดเงิน: loan_issue_date, loan_principle_amount, loan_interest_amount, loan_balance_amount, loan_policy_month
3. กรณี APL ระบบเคลียร์ค่าวันที่กู้ และยอดเงิน: apl_issue_date, apl_principle_amount, apl_interest_amount, apl_balance_amount, apl_policy_month
ดึงข้อมูลด้วยเงื่อนไขดังนี้
1. ข้อมูล APL Auto ดึงข้อมูลจาก AS400:[tx_mps_policy_loan_apl](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_apl)
2. period =$รอบประมวลผลปัจจุบัน
3. policy_number = เลขที่กรมธรรม์
ข้อมูล APL Manual ดึงข้อมูลจาก Support Booking
1. [tx_mps_policy_loan_apl_manual](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_apl_manual)
2. period =$รอบประมวลผลปัจจุบัน
3. policy_number = เลขที่กรมธรรม์
ข้อมูล PL ดึงข้อมูลจาก Support Booking (event_code = 'AIT_M_03')
1. [tx_mps_policy_loan_accrued_interest_tax](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_accrued_interest_tax)
2. period =$รอบประมวลผลปัจจุบัน
3. policy_number = เลขที่กรมธรรม์ (07/08/2023 by pattaraporn.pu)
บันทึกวันที่กู้ และยอดเงินกู้ที่ [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)ตรวจสอบยอดเงินกู้เดือนปัจจุบัน (total_amount) กับยอดเงินกู้ของเดือนก่อนหน้า ([tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).loan_balance_amount)
1. กรณีพบยอดเงินกู้ของเดือนก่อนหน้า แต่ไม่พบยอดเงินกู้เดือนปัจจุบัน ให้ทำการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ดังนี้ค่า loan_issue_date เป็น ค่าว่าง ""
2. ค่า loan_principle_amount, loan_interest_amount, loan_balance_amount เป็น 0
กรณีพบยอดเงินกู้เดือนปัจจุบัน และ เดือนก่อนหน้า ให้ดำเนิการ Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120) โดยมีฟิลด์ดังนี้
1. loan_principle_amount
2. loan_interest_amount
3. loan_balance_amount
ยอดเงินกู้ apl เดือนปัจจุบัน ([tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord). apl_principle_amount + apl_interest_amount) กับยอดเงินกู้ apl ของเดือนก่อนหน้า ([tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).apl_balance_amount)
1. กรณีพบยอดเงินกู้ apl ของเดือนก่อนหน้า แต่ไม่พบยอดเงินกู้ apl เดือนปัจจุบัน ให้ทำการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ดังนี้ apl_issue_date ค่าว่าง ""
2. apl_principle_amount, apl_interest_amount, apl_balance_amount เป็น 0
กรณีพบยอดเงินกู้ apl เดือนปัจจุบัน และ เดือนก่อนหน้า ให้ดำเนิการ Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

>
**ข้อมูล Actual SA**

1. กรณีสามัญ จะไม่ Clear ข้อมูล Actual SA ก่อน Update เนื่องจากตารางข้อมูลสามัญ ไม่มีการลบข้อมูลกรมธรรม์ที่ Inactive ออกจากตาราง (18/08/22)
2. ดึงข้อมูลจาก [tx_mps_actual_sa_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ord).current_sum_assured ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
3. policy_number = เลขที่กรมธรรม์
Update ข้อมูลที่ actual_sum_assured เงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)

>
**ข้อมูล Rider MRTA/MLTA**

1. กรณี plan_type มีค่าเป็น 'MLTA' หรือ 'MRTA' ให้ดึงข้อมูลจาก [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) หรือ [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. บันทึกเฉพาะกรณี rider ที่ยังมีผล ด้วยเงื่อนไข กรณีตั้งฐาน และพบการ set up ให้ปีเดือนปัจจุบัน - 1 เดือน: [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)/[tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).created_date Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120) โดยมีฟิลด์ดังนี้
1. tpd_premium
2. add_premium
3. ttd_premium
4. ame_premium
5. tpd_sum_assured
6. add_sum_assured
7. ttd_sum_assured
8. ame_sum_assured

>
**ข้อมูล Reinsurance**

เนื่องจากข้อมูลประเภทแบบประกัน MRTA/MLTA จะเก็บข้อมูลในรายงาน I01 เท่านั้น ดังนั้นหากมีการส่งประกันภัยต่อในส่วนของแบบสัญญาเพิ่มเติมด้วย ระบบจะต้อง sum ข้อมูลแบบประกันหลัก รวมกับแบบสัญญาเพิ่มเติม Rider เพื่อบันทึกค่าเฉพาะในไฟล์ I01

โดยแยกการ update ข้อมูลเป็น 2 กรณี ดังนี้

1. กรณีที่ 1: แบบประกันไม่ใช่ประเภท MRTA/MLTA
2. กรณีที่ 2: แบบประกันประเภท MRTA/MLTA

>
**กรณีแบบประกันไม่ใช่ประเภท MRTA/MLTA**

1. ดึงข้อมูลจาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไข period)
2. policy_number = เลขที่กรมธรรม์
3. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
4. movement = 'A' ไม่ใช่ค่า 'R' หรือ 'U'
5. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3) (ปรับการตรวจสอบ Bundle เพื่อรองรับ new product 88/8 (plan code A10) อ้างอิง: [ADW-13480](http://jira.thaisamut.co.th/browse/ADW-13480) - [MPS][i01][88/8] - เพิ่มเงื่อนไข RI เพื่อรองรับ Product 88/8 กรณี Bundle สำหรับ i01 (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) , [ADW-13639](http://jira.thaisamut.co.th/browse/ADW-13639) - [EDW-PH6][MPS][UAT]รบกวนตรวจสอบ New Case : 88/8(A10) กรณีเป็น Bundle Rider และส่งประกันภัยต่อ RI เฉพาะ Rider(84) แต่ระบบไม่นำข้อมูล RI ไปบันทึก Untag i01/Master i01(Period 202507) (![](http://jira.thaisamut.co.th/images/icons/statuses/closed.png) Closed) , [https://redmine.ochi.link/issues/42802](https://redmine.ochi.link/issues/42802))
6. ตรวจสอบว่าเป็นเคสที่มีการส่งประกันภัยต่อ ที่มี Bundle Rider และมีเงื่อนไขพิเศษหรือไม่ ดังนี้ กรณีเป็นแบบประกันหลักที่ **ไม่มี Bundle **([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).bundle_rider_flag = N) ใช้ข้อมูล RI จากรายการดังนี้base_or_rider = 'Base' และ code_plan = แบบประกันหลักกรณี**พบ**รายการของ Base ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ให้หยิบค่าจากรายการของ Base
7. กรณี**ไม่พบ**รายการของ Base ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) (พบเฉพาะ rider) ไม่ต้องลงค่ารายการใดเลย เสมือนว่าไม่ได้มีการขอ rcg tagging
กรณีเป็นแบบประกันหลักที่ **มี Bundle**([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).bundle_rider_flag = Y)**แต่ไม่พบ Plancode ใน**[cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri) ([tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord).plan_code <> [cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri).plan_code) ใช้ข้อมูล RI จากรายการดังนี้
1. base_or_rider = 'Base' และ code_plan = แบบประกันหลักกรณี**พบ**รายการของ Base ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ให้หยิบค่าจากรายการของ Base
2. กรณี**ไม่พบ**รายการของ Base ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) (พบเฉพาะ rider) ไม่ต้องลงค่ารายการใดเลย เสมือนว่าไม่ได้มีการขอ rcg tagging
กรณีเป็นแบบประกันหลักที่ **มี Bundle**([tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).bundle_rider_flag = Y )**และพบ** **Plancode ใน**[cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri) ([tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord).plan_code = [cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri).plan_code)ให้ตรวจสอบค่า base_bundle_flag ดังนี้
1. [cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri).base_bundle_flag = **FALSE **ใช้ข้อมูล RI จากรายการดังนี้ จากรายการ ดังนี้

1. ข้อมูล RI นอกเหนือจากค่าเบี้ย ri_gross_premium_x ใช้ข้อมูลจาก Basebase_or_rider = 'Base' และ code_plan = แบบประกันหลัก
ข้อมูล **RI** ค่าเบี้ย ri_gross_premium_x ใช้ข้อมูล **Bundle Rider** **ทั้งหมด** ตามเงื่อนไข (อ้างอิง: [https://redmine.ochi.link/issues/58807](https://redmine.ochi.link/issues/58807))
1. base_or_rider = 'Rider' และ code_plan = rider plan code ของ Bundle Rider
2. treaty_code = treaty_code (หากไม่พบ treaty_code ใน config จะมีผลกับทุก treaty_code) ปรับเงื่อนไขเพิ่มเติมในวันที่ 3/12/2568 เนื่องจาก user แจ้งเคส a10 ไม่มีค่า rider ใน period 202512 (ref: [https://redmine.ochi.link/issues/31793](https://redmine.ochi.link/issues/31793))กรณี**พบ**รายการของ Rider ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ให้หยิบค่าจากรายการของ Rider
3. กรณี**ไม่พบ**รายการของ Rider ที่ [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) (พบเฉพาะ Base) ไม่ต้องลงค่ารายการใดเลย เสมือนว่าไม่ได้มีการขอ rcg tagging
[cf_mps_bundle_ri](http://wiki.thaisamut.co.th/display/RDSADW/cf_mps_bundle_ri).base_bundle_flag = **TRUE**ใช้ข้อมูล RI จากรายการดังนี้ จากรายการ ดังนี้

1. ข้อมูล RI นอกเหนือจากค่าเบี้ย ri_gross_premium_x ใช้ข้อมูลจาก Basebase_or_rider = 'Base' และ code_plan = แบบประกันหลัก
ข้อมูลค่าเบี้ย ri_gross_premium_x ใช้ข้อมูล **Base +****Bundle Rider** ตามเงื่อนไข
1. base_or_rider = 'Base' และ code_plan = แบบประกันหลัก
2. base_or_rider = 'Rider' และ code_plan = rider plan code ของ Bundle Rider
3. treaty_code = treaty_code (หากไม่พบ treaty_code ใน config จะมีผลกับทุก treaty_code)
ตรวจสอบค่าเบี้ยของ RI (ri_premium) ว่า เป็น 0 หรือไม่
1. กรณีค่าเบี้ยของ RI **เป็น** 0 ถือว่า ไม่เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการดังนี้ไม่เข้าเงื่อนไขในข้อ 3, 4, **(PH4.1) Update ข้อมูล RI NAR**
2. ดำเนินการต่อในข้อ **ข้อมูลประเภท event ที่ส่งขอ Tag**
3. กรณีผลรวม **ไม่เป็น** 0 ถือว่า เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการตามข้อถัดไป

ตรวจสอบต้องไม่ใช่แบบประกันประเภท MRTA/MLTA โดยเงื่อนไขจาก **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).**policy_type ไม่มีค่าเป็น 'MLTA' หรือ 'MRTA' หากพบตามเงื่อนไขข้างต้น ให้ Update ข้อมูล RI ที่ตาราง **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)** ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน, policy_number = เลขที่กรมธรรม์, plan_code = แบบประกัน โดย update ค่า ดังนี้

| Update **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)** | Source: [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt)tx_ri_support_bk_oic | Remarks |
| --- | --- | --- |
| ri_commencement_date | ri_commencement_date | |
| treaty_code_1 | treaty_code | |
| ri_method_1 | ri_method | รูปแบบข้อมูล "QS", "Surplus", "QS-Surplus", "Surplus-QS" |
| ri_mode_of_payment_1 | ri_mode_of_payment | |
| ri_gross_premium_1 | ri_premium | |
| ri_sum_assured_1 | ri_sumassured | |
| ri_prev_net_amount_at_risk_1 | ri_previous_nar | หาก Treaty ใดไม่มีข้อมูล ให้แสดงค่า ศูนย์ |
| ri_current_net_amount_at_Risk_1 | ri_current_nar, total_nar | ยกเลิกเงื่อนไขการหยิบค่า total nar เพราะเป็นค่าจาก current + previous กรณีค่า ri_current_nar เป็น ค่าว่าง, null, 0 ให้ไปหยิบค่า total_nar มาลงแทน |

1. **![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากข้อมูลกรมธรรม์เดียวกัน แต่นำส่ง Reinsurer มากกว่า 1 Treaty ให้ แสดงข้อมูลตามตารางด้านบนเป็น _2 และ _3 ตามลำดับ**

>
**กรณีแบบประกันประเภท MRTA/MLTA**

1. ตรวจสอบต้องเป็นแบบประกันประเภท MRTA/MLTA โดยเงื่อนไขจาก **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).**policy_type มีค่าเป็น 'MLTA' หรือ 'MRTA'
2. ดึงข้อมูลจาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไข period)
3. policy_number = เลขที่กรมธรรม์
4. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
5. movement = 'A'****
6. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3)
ตรวจสอบค่าเบี้ยของ RI (ri_premium) ว่า เป็น 0 หรือไม่
1. กรณีค่าเบี้ยของ RI **เป็น** 0 ถือว่า ไม่เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการดังนี้ไม่เข้าเงื่อนไขในข้อ 4, **(PH4.1) Update ข้อมูล RI NAR**
2. ดำเนินการต่อในข้อ **ข้อมูลประเภท event ที่ส่งขอ Tag**
3. กรณีผลรวม **ไม่เป็น** 0 ถือว่า เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการตามข้อถัดไป

หากพบตามเงื่อนไขข้างต้น ให้ Update ข้อมูล RI ที่ตาราง **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)** ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน, policy_number = เลขที่กรมธรรม์ โดย grouping ข้อมูลตามแต่ละ treaty code โดยupdate ค่า ดังนี้

| Update **[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)** | Source: [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt)tx_ri_support_bk_oic | Remarks |
| --- | --- | --- |
| ri_commencement_date | ri_commencement_date | |
| treaty_code_1 | treaty_code | |
| ri_method_1 | ri_method | รูปแบบข้อมูล "QS", "Surplus", "QS-Surplus", "Surplus-QS" |
| ri_mode_of_payment_1 | ri_mode_of_payment | |
| ri_gross_premium_1 | ri_premium | ![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากพบมากกว่า 1 record ที่มี treaty code เดียวกัน ให้ sum ทุกรายการ |
| ri_sum_assured_1 | ri_sumassured | ![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากพบมากกว่า 1 record ที่มี treaty code เดียวกัน ให้ sum ทุกรายการ |
| ri_prev_net_amount_at_risk_1 | ri_previous_nar | ![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากพบมากกว่า 1 record ที่มี treaty code เดียวกัน ให้ sum ทุกรายการ |
| ri_current_net_amount_at_Risk_1 | ri_current_nar, total_nar | ![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากพบมากกว่า 1 record ที่มี treaty code เดียวกัน ให้ sum ทุกรายการ ยกเลิกเงื่อนไขการหยิบค่า total nar เพราะเป็นค่าจาก current + previousกรณีค่า ri_current_nar เป็น ค่าว่าง, null, 0 ให้ไปหยิบค่า total_nar มาลงแทน |

1. **![](http://wiki.thaisamut.co.th/download/attachments/942604594/lightbulb_on.png?version=1&modificationDate=1728975508169&api=v2) หากข้อมูลกรมธรรม์เดียวกัน แต่นำส่ง Reinsurer มากกว่า 1 Treaty ให้ แสดงข้อมูลตามตารางด้านบนเป็น _2 และ _3 ตามลำดับ**

(ปรับเนื่องจาก New Closing OIC) ยกเลิกการ Update ข้อมูล RI NAR เนื่องจากข้อมูล มาไม่ทันในรอบประมวล Untag

Spec (PH4.1)

>
**(PH4.1) Update ข้อมูล RI NAR**

1. ตรวจสอบข้อมูล [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ด้วยเงื่อนไขดังนี้period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์ หากพบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ period = Untag period
3. policy_number = Untag policy_number
4. prophet_plan_code = Untag prophet_plan_code
5. treaty_code = Untag treaty_code
6. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i01 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i01** | | --- | --- | --- | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

หากไม่พบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ **BY Aof: ยกเลิกเงื่อนไขในส่วนนี้ เนื่องจากจะทำให้ Conflict กับเงื่อนไขของการตรวจสอบ RI Premium = 0**

1. period = Untag period
2. policy_number = Untag policy_number
3. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i01 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i01** | | --- | --- | --- | | treaty_code_1 | if treaty_code_1 is null | treaty_code_1 | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

Spec (PH6)

>
**(ปรับจาก Project EDW-P6: 15/10/2567) Update ข้อมูล RI NAR**

ตรวจสอบข้อมูล [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) ด้วยเงื่อนไขดังนี้

- period = Untag period
- policy_number = Untag policy_number
- prophet_plan_code = Untag prophet_plan_code (ตัดออกเนื่องจากตาราง [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) จะไม่ส่ง prophet_plan_code มาให้ ส่งแต่ plan_code)
- plan_code = Untag plan_code
- treaty_code = Untag treaty_code
- nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business')

กรณีพบข้อมูลตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i01 **ดังนี้

| Untag | [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) | [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) | เงื่อนไขเพิ่มเติม |
| --- | --- | --- | --- |
| ri_prev_net_amount_at_risk | ri_previous_nar | ri_previous_nar | **Step1 ดึงค่าจาก Support Booking**ri_previous_nar กรณีมีค่ามากกว่า 0ri_previous_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_previous_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |
| ri_current_net_amount_at_Risk | ri_current_nar | ri_current_nar | **Step1 ดึงค่าจาก Support Booking**ri_current_nar กรณีมีค่ามากกว่า 0ri_current_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_current_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |

**![](http://wiki.thaisamut.co.th/download/attachments/942604594/lightbulb_on.png?version=1&modificationDate=1728975508169&api=v2) แสดงชุดข้อมูลให้สอดคล้องกับ Treaty_1, Treaty_2, Treaty_3**

>
**ข้อมูลประเภท event ที่ส่งขอ Tag**

พิจารณาข้อมูลเพื่อบันทึกค่า RecordType เพื่อใช้แยกประเภท event ที่ส่งขอ Tagging

1. กรณีตั้งฐาน บันทึกค่า 'Transition'
2. กรณี Ongoing แยกเงื่อนไข ดังนี้กรณีกลุ่มข้อมูลเคสใหม่, เคสใหม่ที่มีการ Freelook บันทึก 'Newbusiness'
3. กรณีกลุ่มข้อมูลกรมธรรม์ Reinstate ตรวจสอบข้อมูลสลักหลังจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord).record_type reinstate_codeหากมีค่า '08' บันทึกค่า 'Reinstate'
4. หากมีค่า '09' บันทึกค่า 'Redate'
กรณีขอแต่เฉพาะ RCG Tagging: ให้ใช้ค่าเดิมจากรอบประมวลผลก่อนหน้า [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).record_type****กรณีไม่เข้าเงื่อนไขใดๆตามด้านบน บันทึก 'Other'Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120) ฟิลด์ record_type

>
**ประเภทอุตสาหกรรม**

>
**ข้อมูลเงินกู้**

1. Clear ข้อมูลเงินกู้ทุกกรมธรรม์ โดยการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ค่า loan_principle_amount, loan_interest_amount, loan_balance_amount ให้เป็น 0 เนื่องจากตารางข้อมูลอุตสาหกรรม จะลบข้อมูลเงินกู้ที่ Inactive ออกจากตารางทุกเดือน (18/08/22)
2. ให้ระบบ Clear ค่า PL ค่าวันที่กู้ และยอดเงิน: loan_issue_date, loan_principle_amount, loan_interest_amount, loan_balance_amount, loan_policy_month
3. ดึงข้อมูลด้วยเงื่อนไขดังนี้ ข้อมูล PL ดึงข้อมูลจาก Support Booking (event_code = 'AIT_M_03')[tx_mps_policy_loan_accrued_interest_tax](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_accrued_interest_tax)
4. period =$รอบประมวลผลปัจจุบัน
5. policy_number = เลขที่กรมธรรม์ (07/08/2023 by pattaraporn.pu)
บันทึกวันที่กู้ และยอดเงินกู้ที่ [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)

นำ [tx_mps_policy_loan_accrued_interest_tax](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_accrued_interest_tax).mps_policy_loan_hd_id ไปหาที่ [tx_mps_policy_loan_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_hd).mps_policy_loan_hd_id ตรวจสอบค่า event_code = 'AIT_M_01'

ตรวจสอบยอดเงินกู้เดือนปัจจุบัน ([tx_mps_policy_loan_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_policy_loan_ind).total_amount) กับยอดเงินกู้ของเดือนก่อนหน้า ([tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).loan_balance_amount)
1. กรณีพบยอดเงินกู้ของเดือนก่อนหน้า แต่ไม่พบยอดเงินกู้เดือนปัจจุบัน ให้ทำการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ดังนี้ค่า loan_issue_date เป็น ค่าว่าง ""
2. ค่า loan_principle_amount, loan_interest_amount, loan_balance_amount เป็น 0
กรณีพบยอดเงินกู้เดือนปัจจุบัน และ เดือนก่อนหน้า ให้ดำเนิการ Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358) โดยมีฟิลด์ดังนี้
1. loan_principle_amount
2. loan_interest_amount
3. loan_balance_amount

>
**ข้อมูล Actual SA**

1. Clear ข้อมูล Actual SA ทุกกรมธรรม์ โดยการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ค่า actual_sum_assured ให้เป็น 0 เนื่องจากตารางข้อมูลอุตสาหกรรม จะลบข้อมูลกรมธรรม์ที่ Inactive ออกจากตารางทุกเดือน (18/08/22)
2. ดึงข้อมูลจาก [tx_mps_actual_sa_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ind).current_sum_assured ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
3. policy_number = เลขที่กรมธรรม์
ตรวจสอบข้อมูล Actual SA ปัจจุบัน ([tx_mps_actual_sa_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_actual_sa_ind).current_sum_insured) กับ Actual SA ของเดือนก่อนหน้า ([tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).actual_sum_assured)
1. กรณีพบยอด Actual SA ของเดือนก่อนหน้า แต่ไม่พบยอด Actual SA เดือนปัจจุบัน ให้ทำการ Update [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).actual_sum_assured ให้เป็น 0
2. กรณีพบยอด Actual SA ปัจจุบัน และเดือนก่อนหน้า ให้ดำเนิการ Update ข้อมูลที่ actual_sum_assured เงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)

>
**ข้อมูลปรับสถานะกธ.สิ้นผลประจำเดือน**

1. ดึงข้อมูลจาก [tx_mps_backdate_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind) ด้วยเงื่อนไขperiod = $รอบประมวลผลปัจจุบัน เดือนปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
**Update ข้อมูลกรมธรรม์ทั้งหมด** ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)

>
**ข้อมูลประเภท event ที่ส่งขอ Tag**

พิจารณาข้อมูลเพื่อบันทึกค่า RecordType เพื่อใช้แยกประเภท event ที่ส่งขอ Tagging

1. กรณีตั้งฐาน บันทึกค่า 'Transition'
2. กรณี Ongoing แยกเงื่อนไข ดังนี้กรณีกลุ่มข้อมูลเคสใหม่, เคสใหม่ที่มีการ Freelook บันทึก 'Newbusiness'
3. กรณีกลุ่มข้อมูลกรมธรรม์ Reinstate ตรวจสอบข้อมูลสลักหลังจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind).reinstate_old_comm_date และ reinstate_new_comm_dateหาก reinstate_old_comm_date = reinstate_new_comm_date บันทึกค่า 'Reinstate'
4. หาก reinstate_old_comm_date <> reinstate_new_comm_date บันทึกค่า 'Redate'
กรณีขอแต่เฉพาะ RCG Tagging: ให้ใช้ค่าเดิมที่เคยของรอบประมวลก่อนหน้า [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01).record_type****กรณีไม่เข้าเงื่อนไขใดๆตามด้านบน บันทึก 'Other'Update ข้อมูล ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358) ฟิลด์ record_type

>
**EDW4.1 แก้ไขสถานะของกรมธรรม์(BasicPolicyStatus) ที่มี Valuation ปัจจุบันผ่านพ้นวัน Maturity ไปแล้ว แต่สถานะปัจจุบันของกรมธรรม์ยังเป็นมีผลบังคับอยู่ (I, F, R, E, W, PB)**

BR#48 ให้ระบบ EDW ปรับ BasicPolicyStatus เป็น Maturity(M) สำหรับกรมธรรม์ที่ผ่านพ้นวัน Maturity ไปแล้ว แต่สถานะปัจจุบันของกรมธรรม์ยังเป็นมีผลบังคับอยู่ (I, F, R, E, W, PB) และปรับปรุงฟิลด์อื่นๆ ที่มีความเกี่ยวข้อง ดังนี้

1. หลังจากจบกระบวนการบันทึกข้อมูลตามข้อด้านบน ให้ระบบตรวจสอบเงื่อนไข ดังนี้
2. วัน Valuation เกินกว่าหรือเท่ากับ วัน MaturityDate: $วันที่สิ้นเดือนของรอบประมวลผล >=[tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).maturity_date
3. สถานะกรมธรรม์ยังมีผลบังคับ: [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).curr_basic_policy_status เป็น E, F, I, R, W, PB
4. [curr_basic_policy_status_date ไม่เกิน MaturityDate: tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).curr_basic_policy_status_date กรณีเข้าเงื่อนไข ระบบ Update ดังต่อไปนี้
1. [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).curr_basic_policy_status ใส่ค่าเป็น "M"
2. [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).curr_basic_policy_status_date ใส่ค่าเป็น MaturityDate
3. [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).actual_sum_assured ใส่ค่าเป็น 0
กรณีไม่เข้าเงื่อนไข ให้ระบบดำเนินการข้อถัดไป

>
*** 22/02/2024 ปรับจากโครงการ EDW 5.1 Group 1 ปรับเพิ่มเติมการระบุ Actual SA = 0 ของกรณีสถานะกรมธรรม์ D-P**

ระบบจะตรวจสอบสถานะกรมธรรม์ปัจจุบันเพิ่มเติมว่าเป็น D-P ([tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).current_basic_policy_status = 'D-P') หรือไม่

1. กรณีที่เข้าเงื่อนไข ระบบจะต้อง Update ค่า Actual SA = 0 ([tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01).actual_sum_assured = 0)
2. กรณีไม่เข้าเงื่อนไข ให้ระบบดำเนินการข้อถัดไป

>
**เพิ่ม process workaround ช่องทางการขาย full time agent**

สำหรับการ workaround update ช่องทางการขาย full time agent ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel)

1. ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel) ค้นหาด้วยเลขที่กธ.
2. ให้ update ข้อมูลในตาราง untag ค่าดังนี้sale_channel_code, **(ปรับเพิ่ม 06/12/67) **source_sale_channel_code (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel_code
3. sale_channel, **(ปรับเพิ่ม 06/12/67) **source_sale_channel (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel

>
**4. กรองข้อมูลกธ.ที่ duplicate**

ระบบดำเนินการกรองข้อมูลกรมธรรม์ที่ duplicate เนื่องจากระบบ gen tagging ไม่รองรับการนำเข้ากรมธรรม์ duplicate และเพื่อนำไปออกรายงานตรวจสอบข้อมูลต้นทางเพิ่มเติม

1. ดึงข้อมูลจาก [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน
2. ตรวจสอบหากพบจำนวนของเลขที่กรมธรรม์ใด มากกว่า 1 รายการ บันทึกข้อมูลที่ [tx_mps_untag_i01_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01_dup)
3. ลบข้อมูลจาก [tx_mps_untag_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)

>
**5. Generate ข้อมูลกรมธรรม์ออกมาเป็น I01 File ในรูปแบบ .csv**

- Generate ข้อมูลกรมธรรม์ออกมาเป็น I01 File ในรูปแบบ .csvชื่อไฟล์ อ้างอิง [A3.4 รูปแบบเอกสาร Output ไฟล์ I01-I05](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=925729003)
- ชื่อ Column อ้างอิงจากตาราง output ที่ Column "I01 Report Column Name" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120), [EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)
- Value ให้นำค่าจากตาราง Untag มาบันทึก อ้างอิง mapping field จาก column "Output Untag" จาก [EDW-MPS-PS001-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์สามัญ,](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930513120)[EDW-MPS-PS002-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937394358)
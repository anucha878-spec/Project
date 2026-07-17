# Process Generate I05 Untag

- url: http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I05+Untag
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
>
Icon

กำหนดให้ $รอบประมวลผลปัจจุบัน มีค่าเท่ากับ ปีเดือนปัจจุบัน - 1 เดือน โดยให้ดึงค่าจาก [A17. การกำหนดรอบประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971014593)

แต่สำหรับการทดสอบ SIT, UAT สามารถปรับให้รอบประมวลผล ย้อนหลัง หรือล่วงหน้าได้มากกว่า 1 เดือน

>
**1. หากรมธรรม์ที่เข้าเงื่อนไขขอ Tagging**

หากรมธรรม์ที่เข้าเงื่อนไขการติด tagging โดยดึงข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) ด้วยเงื่อนไข ดังนี้

- period = $รอบประมวลผลปัจจุบัน
- กรณีพบกรมธรรม์เดียวกัน แต่เป็นคนละปีกรมธรรม์ ให้เลือกข้อมูลของปีกรมธรรม์ที่ อยู่ในช่วงมีผลบังคับตามเงื่อนไขด้านล่าง

>
**1.1 กรณีตั้งฐาน**

กรณีตั้งฐาน ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = True)

- หากรมธรรม์ที่มีผลบังคับ ณ วันที่ดึงข้อมูล โดย วันที่สิ้นเดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน จะต้อง น้อยกว่าหรือเท่ากับ end_of_coverage_date จึงถือว่าเป็น กรมธรรม์มีผลบังคับ

- effective_date
**1.2 กรณี ongoing**

กรณีOngoing ([tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = False) มี 2 กลุ่มข้อมูล

- กลุ่ม 1: กธ.ที่ไม่มี ICG Tagging (เคสใหม่ ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging)
- กลุ่ม 2: กธ.ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม

>
**ข้อมูลกลุ่มที่ 1: หากรมธรรม์เคสใหม่ ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging**

- หากรมธรรม์ที่มีผลบังคับ ณ วันที่ดึงข้อมูล โดย วันที่สิ้นเดือนก่อนหน้าของ $รอบประมวลผลปัจจุบัน จะต้อง น้อยกว่าหรือเท่ากับ end_of_coverage_date จึงถือว่าเป็น กรมธรรม์มีผลบังคับ (นำเงื่อนไขออกเพื่อให้กรมประกันกลุ่มสามารถนำมาติด tagging ได้ทั้ง active และ inactive อ้างอิง [BRD4.1 ข้อ 44](https://docs.google.com/spreadsheets/d/1mQ7rCEHe-WlevSuUp_f6W4WECvM9rKtLLne64BVQBc8/edit#gid=1116338595))

- effective_date
**ข้อมูลกลุ่มที่ 2: หากรมธรรม์ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม หากรมธรรม์ที่เข้า 2 เงื่อนไข ดังนี้**

1. ดึงข้อมูลกรมธรรม์ที่มีข้อมูล RI ในรอบเดือนปัจจุบันจาก [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt) ด้วยเงื่อนไขดังนี้ period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. policy_year = ปีกรมธรรม์
4. movement = A
5. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3)
(ปรับเนื่องจาก New Closing OIC) ตรวจสอบ ReInsur_No ([tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05).reinsur_no) หากพบค่าดังต่อไปนี้ถือว่าเข้าเงื่อนไข เคสขอ RCG Tagging เพิ่มเติม
1. กรณี 2 หลักแรก = **DG** (TreatyCode = DAI_Grp_Daiichi_Coins)
2. กรณี 2 หลักแรก = **TG** (TreatyCode = THREL_Grp_PA )
3. กรณี 2 หลักแรก เป็น**ตัวเลข** (TreatyCode = GIB_Grp_Direct_EB )
นำกรมธรรม์ที่ได้จากข้อ 1. ไปหากรมธรรม์ที่ยังไม่เคยมีข้อมูล RCG Tagging จาก [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ด้วยเงื่อนไขดังนี้
1. [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05).ri_portfolio_id เป็นค่าว่าง
2. ปีของ [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt).policy_year effective_date = ปีของ [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05).policy_year effective_date

>
**2. บันทึกข้อมูลกรมธรรม์หลักที่ตาราง untag**

นำ List กธ.ที่ผ่านเงื่อนไขจากข้อ 1. มาเตรียมข้อมูล เพื่อบันทึกลงตาราง untag โดยแยกเงื่อนไขการเตรียมข้อมูลเป็น 2 กรณี ดังนี้

- **กรณีที่ 1: กรณีไม่ใช่การขอ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ.จาก Landing (2.1)**
- **กรณีที่ 2: กรณีขอเฉพาะ RCG Tagging เพิ่มเติม ให้ดึงข้อมูลกธ. จาก Landing และดึงข้อมูล ICG Tagging และข้อมูลกธ. ณ สิ้นเดือนก่อนหน้า จาก Master (2.2)** ****

>
**2.1 กรณีไม่ใช่การขอ rcg tagging เพิ่มเติม**

1. นำข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) ด้วยเงื่อนไขจากข้อ 1.1 และ 1.2 กลุ่มที่ 1 ดังนี้period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. policy_year = ปีกรมธรรม์
บันทึกข้อมูลที่ตาราง [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ตามเงื่อนไข mapping field จาก Column "Landing" แปลงเป็น Column "Untag" ใน [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298))

>
**2.2 กรณีขอ RCG Tagging เพิ่มเติม**

1. ดึงข้อมูลสำหรับบันทึกข้อมูล untag ดังนี้ข้อมูลกรมธรรม์หลักจาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) ด้วยเงื่อนไขจากข้อ 1.2 กลุ่มที่ 2 ดังนี้period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์
3. policy_year = ปีกรมธรรม์
ข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ด้วยเงื่อนไข policy_number และ policy_year บันทึกข้อมูลที่ตาราง [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ตามเงื่อนไข mapping field จาก Column "Landing" "Master" แปลงเป็น Column "Untag" ใน [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298))

เงื่อนไขเดิมใน 5.1

>
**(EDW Ph5.1 Group 3) 3. Update ข้อมูลกรมธรรม์เก่า ที่ตาราง tx_mps_untag_i05**

>
**3.1 บันทึกข้อมูลกรมธรรม์**

1. ตรวจสอบ เบี้ย 8 field เพื่อแยกเงื่อนไขการ update ข้อมูล**เบี้ย**ตรวจสอบ เบี้ย 8 field ที่ [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ว่าเป็น 0 หรือไม่ >> กรณี **เป็น 0 หรือ null** ให้ Update ข้อมูลเบี้ยที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) >> กรณี **ไม่เป็น 0 หรือ null **ให้ Update ข้อมูลเบี้ยที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05)
2. ข้อมูลค่าเบี้ย 8 field ได้แก่modal_premium_life
3. modal_premium_accident_death
4. modal_premium_med_accident
5. modal_premium_tpd
6. modal_premium_ipd
7. modal_premium_opd
8. modal_premium_dental
9. modal_premium_other
10. ระบบทำการ update ข้อมูลเบี้ย 8 field ดังกล่าวที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)

ตรวจสอบ ทุนประกัน 8 field เพื่อแยกเงื่อนไขการ update ข้อมูล**ทุนประกัน**

1. ตรวจสอบ ทุนประกัน 8 field ที่ [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ว่าเป็น 0 หรือไม่ >> กรณี **เป็น 0 หรือ null** ให้ Update ค่าทุนประกันที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) >> กรณี **ไม่เป็น 0 หรือ null** ให้ Update ค่าทุนประกันที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05)
2. ข้อมูลค่าทุนประกัน 8 field ได้แก่sum_insured_life
3. sum_insured_accident_death
4. sum_insured_med_accident
5. sum_insured_tpd
6. sum_insured_ipd
7. sum_insured_opd
8. sum_insured_dental
9. sum_insured_other
10. ระบบทำการ update ข้อมูลเบี้ย 8 field ดังกล่าวที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)

ดำเนินการ update ข้อมูล field อื่น นอกเหนือจาก ข้อมูลเบี้ย 8 field และ ข้อมูลทุนประกัน 8 field ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)****

>
**(EDW Ph6) 3. Update ข้อมูลกรมธรรม์เก่า ที่ตาราง tx_mps_untag_i05**

>
**3.1 บันทึกข้อมูลกรมธรรม์**

ตรวจสอบ **สถานะกรมธรรม์** ตาม [A4.6 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=935886987) เพื่อแยกเงื่อนไขการ update ข้อมูล** ค่าเบี้ย, ค่าทุน **โดยมีรายละเอียดดังนี้

ค่าเบี้ย

>

- modal_premium_life
- modal_premium_accident_death
- modal_premium_med_accident
- modal_premium_tpd
- modal_premium_ipd
- modal_premium_opd
- modal_premium_dental
- modal_premium_other

ค่าทุน

>

- sum_insured_life
- sum_insured_accident_death
- sum_insured_med_accident
- sum_insured_tpd
- sum_insured_ipd
- sum_insured_opd
- sum_insured_dental
- sum_insured_other

- กรณีสถานะกรมธรรม์เป็น "**Cancel**" ให้ Update ข้อมูลที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก** ****[tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) **ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)
- กรณีสถานะกรมธรรม์เป็น "**Expired**" >> ตรวจสอบต่อว่าเป็นกรมธรรม์ที่เข้าระบบครั้งแรกหรือไม่ โดยค้นหาที่ [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ด้วย Key "policy_number" และ "policy_year"กรณี**ไม่พบ**ที่ Master i05 คือ เป็นกรมธรรม์ที่เข้าระบบครั้งแรก >> ดำเนินการ **update ****ค่าเบี้ย, ค่าทุน **ที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)
- กรณี**พบ**ที่ Master i05 คือ เป็นกรมธรรม์ที่เคยเข้าระบบแล้ว >> **ไม่ต้อง update****ค่าเบี้ย, ค่าทุน**
กรณีสถานะกรมธรรม์เป็น "**Active**" ให้ ตรวจสอบต่อว่าเป็นเคส Unname หรือไม่
- กรณีพบค่า unname = 1 คือเป็นกรมธรรม์ Unname >> ตรวจสอบต่อว่าเป็นกรมธรรม์ที่เข้าระบบครั้งแรกหรือไม่ โดยค้นหาที่ [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05) ด้วย Key "policy_number" และ "policy_year"กรณี**ไม่พบ**ที่ Master i05 คือ เป็นกรมธรรม์ที่เข้าระบบครั้งแรก >> ดำเนินการ **update** **ค่าเบี้ย, ค่าทุน **ที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก [tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05) ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)
- กรณี**พบ**ที่ Master i05 คือ เป็นกรมธรรม์ที่เคยเข้าระบบแล้ว >> **ไม่ต้อง update** **ค่าเบี้ย, ค่าทุน**
กรณีพบค่า unname = 0 หรือ null คือไม่เป็นกรมธรรม์ Unname ดำเนินการ **update** **ค่าเบี้ย, ค่าทุน**ที่ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) จาก **[tx_mps_landing_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i05)** ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)****

และดำเนินการ update ข้อมูล field อื่น ตามเงื่อนไข [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)****

>
**4. Update ส่วนข้อมูล Reinsurance**

(ปรับเนื่องจาก New Closing OIC) ยกเลิกการ Update ส่วนข้อมูล Reinsurance เนื่องจากข้อมูล มาไม่ทันในรอบประมวล Untag

Spec (PH6)

ทำ 2 ขั้นตอน ดังนี้

>
**4.1 ดึงข้อมูล Reinsurance**

- ดึงข้อมูล RI จาก [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไข period)
- policy_number = เลขที่กรมธรรม์
- policy_year = ปีกรมธรรม์
- movement = A
- ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag).ri_process_status_id = 3)
- [tx_mps_master_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i05).ri_portfolio_id เป็นค่าว่าง (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไขนี้)
- ปีของ [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt).policy_year effective_date = ปีของ [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05).policy_year effective_date
ตรวจสอบผลรวมค่าเบี้ยของ RI ว่า เป็น 0 หรือไม่
- โดยค่าเบี้ยของ RI ได้แก่premium_life
- premium_add
- premium_med_acc
- premium_tpd
- premium_ipd
- premium_opd
- premium_dental
กรณีผลรวม **เป็น** 0 ถือว่า ไม่เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการดังนี้
- ไม่เข้าเงื่อนไขในข้อ **3.2 Update ส่วนข้อมูล Reinsurance ที่ตาราง untag**
- ดำเนินการต่อในข้อ** 4. กรองข้อมูลกธ.ที่ duplicate **และ** 5.Generate ข้อมูลกรมธรรม์ออกมาเป็น I05 File ในรูปแบบ .csv**
กรณีผลรวม **ไม่เป็น** 0 ถือว่า เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการตามข้อถัดไป

>
**4.2 Update ส่วนข้อมูล Reinsurance ที่ตาราง untag**

Update ข้อมูล RI ที่ตาราง [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ดังนี้

- กรณีพบ transaction มี ri_type เป็น 'E' ให้ลงข้อมูลตามขา Estimate
- กรณีพบ transaction มี ri_type เป็น 'A' ให้ลงข้อมูลตามขา Actual
- กรณีพบ 2 transaction ที่มี ri_type เป็น 'E' และ 'A' ให้ลงข้อมูลตามขา Actual

| Update: [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) | Source: [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt)ขา Estimate (ri_type = E) | Source: [tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt)ขา Actual (ri_type = A) | Remarks |
| --- | --- | --- | --- |
| ri_commencement_date | กรณีพบรายการที่มีข้อมูลการส่ง RI ให้บันทึกค่าด้วยค่า [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05).effective_datecommencement_dateeffective_dateri_commencement_date | กรณีพบรายการที่มีข้อมูลการส่ง RI ให้บันทึกค่าด้วยค่า [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05).effective_date commencement_dateeffective_dateri_commencement_date | ปรับแก้ให้ใช้ค่า ri comm date จากวันเริ่มสัญญาที่สอดคล้องกับปีกธ.ที่ทำรายการ (วันเริ่มสัญญาของแต่ปีกธ.)เดิมใช้ค่าจาก support booking โดยทางทีมคณิตแจ้งว่า ไม่สามารถใช้ได้เนื่องจาก RI เก็บเป็นวันสัญญาแรกของแต่ละสัญญา[tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt).effective_date คือ วันที่มีผลในไฟล์ของ User (RI มาหยิบจาก MPS)[tx_ri_support_bk_grp_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_grp_dt).commencement_date คือ วันเริ่มต้น ที่ RI ดึงจาก effective_date ของ MPS เพื่อบันทึกบัญชี |
| treaty_code | treaty_code | treaty_code | |
| ri_method | ri_method | ri_method | |
| ri_premium_life | premium_life | premium_life | |
| ri_premium_accident_death | premium_add | premium_add | |
| ri_premium_med_accident | ไม่มีการลงข้อมูลจากต้นทาง | premium_med_acc | |
| ri_premium_tpd | premium_tpd | premium_tpd | |
| ri_premium_ipd | premium_med | premium_ipd | Estimate และ Actual เป็นคนละฟิล์ดกัน |
| ri_premium_opd | ไม่มีการลงข้อมูลจากต้นทาง | premium_opd | |
| ri_premium_dental | ไม่มีการลงข้อมูลจากต้นทาง | premium_dental | |
| ri_premium_other | ไม่มีการลงข้อมูลจากต้นทาง | ไม่มีการลงข้อมูลจากต้นทาง | |

>
**5. กรองข้อมูลกธ.ที่ duplicate**

ระบบดำเนินการกรองข้อมูลกรมธรรม์ที่ duplicate เนื่องจากระบบ gen tagging ไม่รองรับการนำเข้ากรมธรรม์ duplicate และเพื่อนำไปออกรายงานตรวจสอบข้อมูลต้นทางเพิ่มเติม

- ดึงข้อมูลจาก [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน
- ตรวจสอบหากพบจำนวนของ **key เลขที่กรมธรรม์และปีกรมธรรม์ **ใดมากกว่า 1 รายการ บันทึกข้อมูลที่ [tx_mps_untag_i05_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05_dup)
- ลบข้อมูลจาก [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05)

>
**6.Generate ข้อมูลกรมธรรม์ออกมาเป็น I05 File ในรูปแบบ .csv**

- ชื่อไฟล์ อ้างอิง [A3.4 รูปแบบเอกสาร Output ไฟล์ I01-I05](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=925729003)
- ชื่อ Column อ้างอิงจาก ตาราง output ที่ Column "I05 Column Name" จาก [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298)
- Value ให้นำค่าจากตาราง [tx_mps_untag_i05](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i05) มาบันทึก (อ้างอิง Field จาก Column "**Untag**" ใน [EDW-MPS-PS005-02 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ประกันภัยกลุ่ม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=932872298))
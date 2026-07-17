# Process Generate I02 Untag

- url: http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I02+Untag
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[untag_I02.png](http://wiki.thaisamut.co.th/download/attachments/944144691/MPS_stateDiagram-Page-12.drawio%20%281%29.png?version=1&modificationDate=1656057342235&api=v2)

>
Icon

กำหนดให้ $รอบประมวลผลปัจจุบัน มีค่าเท่ากับ ปีเดือนปัจจุบัน - 1 เดือน โดยให้ดึงค่าจาก [A17. การกำหนดรอบประมวลผล](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=971014593)

แต่สำหรับการทดสอบ SIT, UAT สามารถปรับให้รอบประมวลผล ย้อนหลัง หรือล่วงหน้าได้มากกว่า 1 เดือน

>
**Precondition**

Process หลังจาก [Process Generate I01 Untag](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I01+Untag) และ [Process Generate I04 Untag](http://wiki.thaisamut.co.th/display/RDSADW/Process+Generate+I04+Untag) ทำงานสำเร็จ เนื่องจากนำค่าจากกรมธรรม์หลักมา update เช่น สถานะกรมธรรม์หลัก, วันที่ที่ทำให้สถานะกรมธรรม์หลักเปลี่ยนแปลง เป็นต้น

| Title | คำอธิบาย | | | |
| --- | --- | --- | --- | --- |
| **1.** | **หากธ.ที่เข้าเงื่อนไขขอ Tagging**** ** | | | |
| | **1.1** | **กรณีตั้งฐาน** | tx_mps_base_header.base_setup_flag = True หาเงื่อนไขจากกรมธรรม์สถานะ Active โดยประกอบด้วย 2 กลุ่มข้อมูล | |
| | ประเภทสามัญ | step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน | ข้อมูลกลุ่มที่ 2: จากกระบวนการนำเข้ากธ. ธกส. backdate |
| 1 | ดึงข้อมูลกรมธรรม์หลัก และ Rider | | | |
| | ดึงข้อมูลจากตาราง [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) | ดึงข้อมูลจากจากตาราง [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider) | | |
| 1.1 | ตรวจสอบข้อมูล Rider ที่มีสถานะ active | | | |
| | period = $รอบประมวลผลปัจจุบันcurrent_basic_policy_status มีสถานะ Active (อ้างอิง: [A4.2 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471537))เงื่อนไข bundle_rider_flag ต้องไม่ใช่ 'Y' | period = $รอบประมวลผลปัจจุบันและมีเงื่อนไข bundle_rider_flag ต้องไม่ใช่ 'Y' | | |
| 2 | ตรวจสอบข้อมูลกรมธรรม์หลัก ต้องไม่ใช่แบบประกันไม่ใช่ประเภท MRTA/MLTA | | | |
| | ดึงข้อมูลจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)ตรวจสอบเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบันplan_type ต้องไม่ใช่ 'MRTA' หรือ 'MLTA'bundle_rider_flag ต้องไม่ใช่ 'Y'policy_number = [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).policy_numberตรวจสอบวันที่เริ่มสัญญากรณีพบ issue_date: issue_date ประเภทอุตสาหกรรม
- ข้อมูลจากกระบวนการสิ้นเดือน [EDW-MPS-PS002 ดึงข้อมูลกรมธรรม์ประเภทกรมธรรม์อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=919896444) ส่วน Rider Click here to expand... | step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน | | --- | --- | | 1 | ดึงข้อมูลกรมธรรม์หลัก และ Rider | | | ส่วนข้อมูลกรมธรรม์หลัก: [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind)ส่วนข้อมูล Rider: [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind) | | 1.1 | ตรวจสอบข้อมูล Rider ที่มีสถานะ active | | | period = $รอบประมวลผลปัจจุบันcurrent_basic_policy_status มีสถานะ Active (อ้างอิง: [A4.7 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856128))ตรวจสอบวันเริ่มสัญญากรณีพบ issue_date: issue_date
**1.2** **กรณี ongoing**

[tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).base_setup_flag = False มี 2 กลุ่มข้อมูล

- กลุ่ม 1: ประกอบด้วย 2 กลุ่มกรมธรรม์กลุ่มกธ. เคสใหม่, เคสใหม่ที่มีการ Freelook
- กลุ่มกธ. Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging
กลุ่ม 2: กธ.มีการส่งประกันภัยต่อย้อนหลัง กรณี** กลุ่ม Rider เคสใหม่ ที่กธ.หลักเคยมี icg tagging แล้ว และไม่ขอ RCG (ไม่ส่งประกันภัยต่อ) จะถูกทำผ่านกระบวนการ [Process ส่งข้อมูลเข้าระบบ EDW ของ I02](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=946143398)** **1.2.1****หากรมธรรม์เคสใหม่, เคสใหม่ที่มีการ Freelook ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging**

ประเภทสามัญ

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน | ข้อมูลกลุ่มที่ 2: จากกระบวนการนำเข้ากธ. ธกส. backdate |
| --- | --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider | |
| | ดึงข้อมูลจาก [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ bundle_rider_flag ต้องไม่ใช่ 'Y' | ดึงข้อมูลจากจาก [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ bundle_rider_flag ต้องไม่ใช่ 'Y' |
| 2 | ดึงข้อมูลกรมธรรม์หลัก | |
| | ดึงข้อมูลจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord) | ดึงข้อมูลจาก [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord) |
| 2.1 | ตรวจสอบข้อมูลกรมธรรม์หลัก ต้องไม่ใช่แบบประกันไม่ใช่ประเภท MRTA/MLTA และต้องเป็นกรมธรรม์เคสใหม่ภายใน 2 เดือนก่อนหน้า | |
| | period = $รอบประมวลผลปัจจุบันplan_type ต้องไม่ใช่ 'MRTA' หรือ 'MLTA'bundle_rider_flag ต้องไม่ใช่ 'Y'policy_number = [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02).policy_numberissue_date = วันที่ issue กรมธรรม์หลัก ตั้งแต่** 1** เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบันจนถึงวันที่สิ้นเดือนของ$รอบประมวลผลปัจจุบัน และ effective_date ของ Rider ประเภทอุตสาหกรรม

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน |
| --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider |
| | ดึงข้อมูลจาก [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน |
| 2 | ดึงข้อมูลกรมธรรม์หลัก |
| | ดึงข้อมูลจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind) |
| 2.1 | ตรวจสอบข้อมูลกรมธรรม์หลัก ต้องเป็นกรมธรรม์เคสใหม่ภายใน 2 เดือนก่อนหน้า |
| | period = $รอบประมวลผลปัจจุบันpolicy_number = [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind).policy_numberissue_date = วันที่ issue กรมธรรม์หลัก ตั้งแต่** 2** เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบันจนถึงวันที่สิ้นเดือนของ$รอบประมวลผลปัจจุบัน และ effective_date ของ Rider ประเภท ยูนิต ลิงค์

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน |
| --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider |
| | ดึงข้อมูลจาก [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน |
| 2 | ดึงข้อมูลกรมธรรม์หลัก |
| | ดึงข้อมูลจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04) |
| **2.1** | **ตรวจสอบข้อมูลกรมธรรม์หลัก ต้องเป็นกรมธรรม์เคสใหม่ภายใน เดือนก่อนหน้า** |
| | period = $รอบประมวลผลปัจจุบันpolicy_number = [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul).policy_noissue_date = วันที่ issue กรมธรรม์หลัก ตั้งแต่** 1** เดือนก่อนหน้าของ $รอบประมวลผลปัจจุบันจนถึงวันที่สิ้นเดือนของ$รอบประมวลผลปัจจุบัน และ effective_date ของ Rider **1.2.2****หากรมธรรม์ Reinstate ในรอบการประมวลผลเดือนปัจจุบัน ที่ยังไม่เคยมีข้อมูลใน Master Tagging** ประเภทสามัญ

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน | ข้อมูลกลุ่มที่ 2: จากกระบวนการนำเข้ากธ. ธกส. backdate |
| --- | --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider | |
| | ดึงข้อมูลจากตาราง [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02) และมีเงื่อนไข bundle_rider_flag ต้องไม่ใช่ 'Y' | (26/12: ตัดเงื่อนไขธกสออกจาก reinstate เนื่องจากจะมีแค่กรณีเคสใหม่) |
| 2 | ตรวจสอบข้อมูล Rider ที่มีสถานะ active | |
| | period = $รอบประมวลผลปัจจุบันมีสถานะ Active (อ้างอิง: [A4.2 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=917471537))effective_date ของ Rider ประเภทอุตสาหกรรม

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน |
| --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider |
| | ดึงข้อมูลจากตาราง [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind) |
| 2 | ตรวจสอบข้อมูล Rider ที่มีสถานะ active |
| | period = $รอบประมวลผลปัจจุบันมีสถานะ Active (อ้างอิง: [A4.7 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856128)) effective_date ของ Rider ประเภท ยูนิต ลิงค์

Click here to expand...

| step | ข้อมูลกลุ่มที่ 1 จากกระบวนการสิ้นเดือน |
| --- | --- |
| 1 | ดึงข้อมูลกรมธรรม์ Rider |
| | ดึงข้อมูลจากตาราง [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul) |
| 2 | ตรวจสอบข้อมูล Rider ที่มีสถานะ active |
| | period = $รอบประมวลผลปัจจุบันมีสถานะ Active (อ้างอิง: [A4.8 การกำหนดตัวย่อสถานะกรมธรรม์ ประเภทกรมธรรม์ Rider Unit Linked](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1165983934))effective_date ของ Rider ([tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul).rider_commencement_date)** **1.2.3****หากรมธรรม์ส่งประกันภัยต่อย้อนหลัง หากรมธรรม์ที่มี ICG Tagging แต่มีการขอ RCG Tagging เพิ่มเติม (อ้างอิงเงื่อนไข support booking ในข้อ 3. Update ส่วนข้อมูล Reinsurance) **

นำกรมธรรม์ที่ได้ตามเงื่อนไข ไปตรวจสอบต้องเป็นกรมธรรม์พบข้อมูล [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) แต่ไม่เคยมีข้อมูล RCG Tagging ด้วยเงื่อนไข ri_portfolio_id เป็นค่าว่าง

**2.**

**บันทึกข้อมูลกรมธรรม์หลักที่ตาราง untag: **นำ List กธ.ที่ผ่านเงื่อนไขจากข้อ 1. มาเตรียมข้อมูล เพื่อบันทึกลงตาราง untag

ประเภทสามัญ

Click here to expand...

1. ดึงข้อมูลกรมธรรม์ ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์**ข้อมูลกลุ่มที่ 1**: จากกระบวนการสิ้นเดือนส่วนกธ.หลักจาก [tx_mps_landing_i01_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ord)
2. ส่วน Rider จาก [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)
**ข้อมูลกลุ่มที่ 2**: จากกระบวนการนำเข้ากธ. ธกส. backdate
1. ส่วนกธ.หลักจาก [tx_mps_backdate_ord](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ord)
2. ส่วน Rider จาก [tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider)
กรณี Rider รายการใดพบกธ.หลักเคยมี ICG Tagging แล้วให้ดึงข้อมูล icg tagging เพิ่มเติม
1. ดึงข้อมูล ICG Tagging จาก [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01)ด้วยเงื่อนไขpolicy_number = [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)/[tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).policy_number
กรณีที่เคยมีข้อมูลใน [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) ให้ดึงข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02)ด้วยเงื่อนไข
1. policy_number = [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)/[tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).policy_number
2. rider_plan_code = [tx_mps_landing_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02)/[tx_mps_backdate_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_rider).rider_plan_code
บันทึกข้อมูลที่ตาราง [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) เงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS001-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933233265)

ประเภทอุตสาหกรรม

Click here to expand...

1. ดึงข้อมูลกรมธรรม์จากกระบวนการสิ้นเดือน ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์ส่วนกธ.หลักจาก [tx_mps_landing_i01_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i01_ind)
2. ส่วน Rider จาก [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind)
กรณี Rider รายการใดพบกธ.หลักเคยมี ICG Tagging แล้วให้ดึงข้อมูล icg tagging เพิ่มเติม
1. ดึงข้อมูล ICG Tagging จาก [tx_mps_master_i01](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i01)ด้วยเงื่อนไขpolicy_number = [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind).policy_number
กรณีที่เคยมีข้อมูลใน [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) ให้ดึงข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02)ด้วยเงื่อนไข
1. policy_number = [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind).policy_number
2. rider_plan_code = [tx_mps_landing_i02_ind](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ind).rider_plan_code
บันทึกข้อมูลที่ตาราง [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) เงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856270)

ประเภท ยูนิต ลิงค์

Click here to expand...

1. ดึงข้อมูลกรมธรรม์จากกระบวนการสิ้นเดือน ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ policy_number = เลขที่กรมธรรม์ส่วนกธ.หลักจาก [tx_mps_landing_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i04)
2. ส่วน Rider จาก [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul)
กรณี Rider รายการใดพบกธ.หลักเคยมี ICG Tagging แล้วให้ดึงข้อมูล icg tagging เพิ่มเติม
1. ดึงข้อมูล ICG Tagging จาก [tx_mps_master_i04](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i04) ด้วยเงื่อนไขpolicy_number = [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul).policy_no
กรณีที่เคยมีข้อมูลใน [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) ให้ดึงข้อมูล ICG Tagging และข้อมูลสำหรับคำนวณเกี่ยวกับสถานะกรมธรรม์ ณ สิ้นเดือนก่อนของกรมธรรม์ จาก [tx_mps_master_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_master_i02) ด้วยเงื่อนไข
1. policy_number = [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul).policy_no
2. plan_code = [tx_mps_landing_i02_ul](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_i02_ul).rider_code
บันทึกข้อมูลที่ตาราง [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) เงื่อนไขการบันทึกข้อมูลอ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS004-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1161625941)

**3.****Update ส่วนข้อมูล Reinsurance** **3.1****ดึงข้อมูล Reinsurance**

Click here to expand...

1. ดึงข้อมูล RI จาก [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic) ด้วยเงื่อนไข ดังนี้period = $รอบประมวลผลปัจจุบัน (หากเป็นการตั้งฐาน ไม่ใช้เงื่อนไข period)
2. policy_number = [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).policy_number
3. report_type มีค่าเป็น 'New', 'Renew', 'New(Fac)', 'Renew(Fac)' โดย convert ให้เป็น UPPERCASE ทั้งหมดทั้ง Key และ Value
4. code_plan = [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).rider_plan_code
5. **base_or_rider = 'Rider'**
6. movement = 'A'
7. ri_std_hd_id = [tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_hd).ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ ([tx_ri_std_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_std_hd).ri_process_hd_id = [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header).ri_process_hd_id และ [tx_ri_process_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_process_header).ri_process_status_id = 3) tx_ri_std_hd_oic.ri_std_hd_id และต้องเป็น header ที่มีสถานะนำเข้าสำเร็จ (tx_ri_std_hd_oic.ri_process_hd_id = tx_ri_process_header_oic.ri_process_hd_id และ tx_ri_process_header_oic.ri_process_status_id = 3)
ตรวจสอบค่าเบี้ยของ RI (ri_premium) ว่า เป็น 0 หรือไม่
1. กรณีค่าเบี้ยของ RI **เป็น** 0 ถือว่า ไม่เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการดังนี้ไม่เข้าเงื่อนไขในข้อ **3.2 Update ส่วนข้อมูล Reinsurance ที่ตาราง untag **และ** (PH4.1) Update ข้อมูล RI NAR**
2. ดำเนินการต่อในข้อ** 4. Update ข้อมูล Rider ที่ปรับสถานะกธ.สิ้นผลประจำเดือน (เฉพาะอุตสาหกรรม) **
3. กรณีผลรวม **ไม่เป็น** 0 ถือว่า เข้าเงื่อนไขการส่งประกันภัยต่อ ดำเนินการตามข้อถัดไป

**3.2****Update ส่วนข้อมูล Reinsurance ที่ตาราง untag**

Click here to expand...

Update ข้อมูล RI ที่ตาราง [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) ด้วยเงื่อนไข

- period = $รอบประมวลผลปัจจุบัน
- policy_number = [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic).policy_number
- rider_plan_code = [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) [tx_ri_support_bk_oic](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_oic).code_plan

หากพบตามเงื่อนไขข้างต้น ให้ Update ข้อมูลดังนี้

| Update [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) | Source: [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt)tx_ri_support_bk_oic | Remarks |
| --- | --- | --- |
| ri_commencement_date | ri_commencement_date | |
| treaty_code_1 | treaty_code | |
| ri_method_1 | ri_method | รูปแบบข้อมูล "QS", "Surplus", "QS-Surplus", "Surplus-QS" |
| ri_mode_of_payment_1 | ri_mode_of_payment | กรณีพบเป็น 'Y' ให้บันทึก 12กรณีพบเป็น 'M' ให้บันทึก 1 |
| ri_gross_premium_1 | ri_premium | |
| ri_sum_assured_1 | ri_sumassured | |
| ri_prev_net_amount_at_risk_1 | ri_previous_nar | หาก Treaty ใดไม่มีข้อมูล ให้แสดงค่า ศูนย์ |
| ri_current_net_amount_at_Risk_1 | ri_current_nar, total_nar | ยกเลิกเงื่อนไขการหยิบค่า total nar เพราะเป็นค่าจาก current + previous กรณีค่า ri_current_nar เป็น ค่าว่าง, null, 0 ให้ไปหยิบค่า total_nar มาลงแทน |

**![(lightbulb)](http://wiki.thaisamut.co.th/s/en_GB-1988229788/4528/eaa35c45b124c018e6c8bf70a069c3c2f63fd66d.9/_/images/icons/emoticons/lightbulb_on.png) หากข้อมูลกรมธรรม์เดียวกัน แต่นำส่ง Reinsurer มากกว่า 1 Treaty ให้ แสดงข้อมูลตามตารางด้านบนเป็น _2 และ _3 ตามลำดับ**

(ปรับเนื่องจาก New Closing OIC) ยกเลิกการ Update ข้อมูล RI NAR เนื่องจากข้อมูล มาไม่ทันในรอบประมวล Untag

Spec (PH4.1)

>
**(PH4.1) Update ข้อมูล RI NAR**

1. ตรวจสอบข้อมูล [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ด้วยเงื่อนไขดังนี้period = $รอบประมวลผลปัจจุบัน
2. policy_number = เลขที่กรมธรรม์ หากพบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ period = Untag period
3. policy_number = Untag policy_number
4. prophet_plan_code = Untag prophet_rider_plan_code
5. treaty_code = Untag treaty_code
6. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i02 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i02** | | --- | --- | --- | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

หากไม่พบข้อมูลที่ [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) ให้ดึงข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ด้วยเงื่อนไข ดังนี้ **ยกเลิกเงื่อนไขในส่วนนี้ เนื่องจากจะทำให้ Conflict กับเงื่อนไขของการตรวจสอบ RI Premium = 0**

1. period = Untag period
2. policy_number = Untag policy_number
3. nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business') กรณีพบข้อมูลจาก [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) ตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i02 **ดังนี้ | Source: [tx_mps_nar_ord_landing](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_nar_ord_landing) | Data untag condition | Update **tx_mps_untag_i02** | | --- | --- | --- | | treaty_code_1 | if treaty_code_1 is null | treaty_code_1 | | ri_previous_nar_1 | if ri_prev_net_amount_at_risk_1

Spec (PH6)

>
**(ปรับจาก Project EDW-P6: 16/10/2567) Update ข้อมูล RI NAR**

ตรวจสอบข้อมูล [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) ด้วยเงื่อนไขดังนี้

- period = Untag period
- policy_number = Untag policy_number
- prophet_plan_code = Untag prophet_rider_plan_code (ตัดออกเนื่องจากตาราง [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) จะไม่ส่ง prophet_plan_code มาให้ ส่งแต่ plan_code)
- plan_code = Untag rider_plan_code ([tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) ลงค่า rider_plan_code ฟิลเดียวกับของกรมหลักที่ plan_code)
- treaty_code = Untag treaty_code
- nar_hd_id = nar_hd_id in (select nar_hd_id from tx_mps_nar_hd where ms_import_status_id = '7' and transaction_type = 'New business')

กรณีพบข้อมูลตามเงื่อนไขข้างต้น ให้ Update ข้อมูล NAR ที่ตาราง **tx_mps_untag_i02 **ดังนี้

| Untag | [tx_ri_support_bk_dt](http://wiki.thaisamut.co.th/display/RDSADW/tx_ri_support_bk_dt) | [tx_mps_landing_nar](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_landing_nar) | เงื่อนไขเพิ่มเติม |
| --- | --- | --- | --- |
| ri_prev_net_amount_at_risk | ri_previous_nar | ri_previous_nar | **Step1 ดึงค่าจาก Support Booking**ri_previous_nar กรณีมีค่ามากกว่า 0ri_previous_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_previous_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |
| ri_current_net_amount_at_Risk | ri_current_nar | ri_current_nar | **Step1 ดึงค่าจาก Support Booking**ri_current_nar กรณีมีค่ามากกว่า 0ri_current_nar กรณีค่าเป็น ค่าว่าง, null, 0 ให้ตรวจสอบ Monthly NAR ใน Step2**Step2 กรณีไม่พบค่าใน Support Booking ให้ดึงค่าจาก Monthly NAR**ใช้ค่าจาก ri_current_nar กรณีมีค่ามากกว่า 0**Step3 กรณีไม่พบใน Monthly NAR ให้ใช้ค่าจาก Master เดือนก่อนหน้า** |

**![](http://wiki.thaisamut.co.th/download/attachments/942604594/lightbulb_on.png?version=1&modificationDate=1728975508169&api=v2) แสดงชุดข้อมูลให้สอดคล้องกับ Treaty_1, Treaty_2, Treaty_3**

**4.****Update ข้อมูล Rider ที่ปรับสถานะกธ.สิ้นผลประจำเดือน (เฉพาะอุตสาหกรรม)**
1. ดึงข้อมูลจาก [tx_mps_backdate_ind_rider](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_backdate_ind_rider) ด้วยเงื่อนไขperiod = $รอบประมวลผลปัจจุบัน
2. policy_number = [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).policy_number (เลขที่กรมธรรม์)
3. rider_plan_code = [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).rider_plan_code
**Update ข้อมูลกรมธรรม์ทั้งหมด** ตามเงื่อนไข mapping field อ้างอิงจาก Column "Input Untag" จาก [EDW-MPS-PS002-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856270)4.1เพิ่ม process workaround ช่องทางการขาย full time agent
>

สำหรับการ workaround update ช่องทางการขาย full time agent ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel)

1. ตรวจสอบหากพบเลขที่กธ.จากตาราง [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel) ค้นหาด้วยเลขที่กธ.
2. ให้ update ข้อมูลในตาราง untag ค่าดังนี้sale_channel_code, **(ปรับเพิ่ม 06/12/67) **source_sale_channel_code (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel_code
3. sale_channel, **(ปรับเพิ่ม 06/12/67) **source_sale_channel (เฉพาะขา ICG) = [tx_mps_sale_channel](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_sale_channel).sale_channel

**5.****กรองข้อมูลกธ.ที่ duplicate**
ระบบดำเนินการกรองข้อมูลกรมธรรม์ที่ duplicate เนื่องจากระบบ gen tagging ไม่รองรับการนำเข้ากรมธรรม์ duplicate และเพื่อนำไปออกรายงานตรวจสอบข้อมูลต้นทางเพิ่มเติม

1. ดึงข้อมูลจาก [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน (grouping ข้อมูลด้วยเงื่อนไข policy_number และ rider_plan_code)
2. ตรวจสอบหากพบจำนวนรายการใด มากกว่า 1 รายการบันทึกข้อมูลที่ [tx_mps_untag_i02_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02_dup)
3. ลบข้อมูลจาก [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02)

กรองข้อมูลกธ.หลักที่ duplicate โดยดึงข้อมูลจาก [tx_mps_untag_i01_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01_dup) ด้วยเงื่อนไข period = $รอบประมวลผลปัจจุบัน และ [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).policy_number = [tx_mps_untag_i01_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01_dup).policy_number

ตรวจสอบหากพบเลขกรมธรรม์ให้ดำเนินการดังนี้

1. บันทึกข้อมูลที่ [tx_mps_untag_i02_dup](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02_dup)
2. ลบข้อมูลจาก [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02)
5.1

EDW4.1 เพิ่มกระบวนการแก้ไขสถานะของกรมธรรม์(BasicPolicyStatus) ที่มี Valuation ปัจจุบันผ่านพ้นวัน Maturity ไปแล้ว แต่สถานะปัจจุบันของกรมธรรม์ยังเป็นมีผลบังคับอยู่ (I, F, R, E, W, PB)

BR#48 ให้ระบบ EDW ปรับ BasicPolicyStatus เป็น Maturity(M) สำหรับกรมธรรม์ที่ผ่านพ้นวัน Maturity ไปแล้ว แต่สถานะปัจจุบันของกรมธรรม์ยังเป็นมีผลบังคับอยู่ (I, F, R, E, W, PB) และปรับปรุงฟิลด์อื่นๆ ที่มีความเกี่ยวข้อง ดังนี้

1. หลังจากจบกระบวนการบันทึกข้อมูลตามข้อด้านบน ให้ระบบตรวจสอบเงื่อนไข ดังนี้
2. วัน Valuation เกินกว่าหรือเท่ากับ วัน MaturityDate: $วันที่สิ้นเดือนของรอบประมวลผล >= [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).basic_maturity_date
3. สถานะกรมธรรม์ยังมีผลบังคับ: [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).current_basic_policy_status เป็น E, F, I, R, W, PB
4. [curr_basic_policy_status_date ไม่เกิน MaturityDate:](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i01)[tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).current_basic_policy_status_date กรณีเข้าเงื่อนไข ระบบ Update ดังต่อไปนี้
1. [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).current_basic_policy_statusใส่ค่าเป็น "M"
2. [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).current_basic_policy_status_date ใส่บันทึกค่าจาก [tx_mps_untag_i02](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_untag_i02).basic_maturity_date
กรณีไม่เข้าเงื่อนไข ให้ระบบดำเนินการข้อถัดไป**6.****Generate ข้อมูลกรมธรรม์ออกมาเป็น I02 File ในรูปแบบ .csv**
1. ชื่อไฟล์ อ้างอิง [A3.4 รูปแบบเอกสาร Output ไฟล์ I01-I05](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=925729003)
2. ชื่อ Column อ้างอิงจากตาราง output ที่ Column "I02 Report Column Name" จาก [EDW-MPS-PS001-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933233265)
3. [EDW-MPS-PS002-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856270)
4. [EDW-MPS-PS004-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1161625941)
5. Value ให้นำค่าจากตาราง Untag มาบันทึก อ้างอิง mapping field จาก column "Output Untag" จาก [EDW-MPS-PS001-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider สามัญ](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=933233265)
6. [EDW-MPS-PS002-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider อุตสาหกรรม](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=989856270)
7. [EDW-MPS-PS004-04 เงื่อนไขการบันทึกข้อมูลกรมธรรม์ Rider ยูนิต ลิงค์](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1161625941)

****
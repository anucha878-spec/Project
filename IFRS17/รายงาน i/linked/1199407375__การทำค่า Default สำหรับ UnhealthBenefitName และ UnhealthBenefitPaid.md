# การทำค่า Default สำหรับ UnhealthBenefitName และ UnhealthBenefitPaid

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1199407375
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
# Objectives

- เพื่อแสดงค่า Default สำหรับ Rider สัญญาเพิ่มเติมที่มีความคุ้มครองกลุ่มโรคร้ายแรง และนำไปแสดงลงค่า UnhealthBenefitName และ UnhealthBenefitPaid ในรายงาน Untag, Master ของ i01-i02

# Overview

1. ดึงข้อมูลกลุ่มโรค จากระบบ P-Suite ที่ตาราง [psuite_mps_benefit_group](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_group)
2. ดึงข้อมูลกลุ่มพจน์ในแต่ละกลุ่มโรค จากระบบ P-Suite ที่ตาราง [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage)
3. เข้าเงื่อนไขการทำข้อมูลค่า Default ของ UnhealthBenefitName และ UnhealthBenefitPaid
4. บันทึกค่าลงตาราง [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth) เพื่อเตรียมข้อมูลสำหรับการประมวลผล รายงาน Untag, Master ของ i01-i02

# Process

>
**ค่า rider_plan_code และ policy_type**

ทำการ group by ค่า rider_id และ policy_type จากตาราง [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage) จะได้ค่าตั้งต้นของสัญญาเพิ่มเติมที่มีความคุ้มครองกลุ่มโรคร้ายแรง

- บันทึกค่า [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).rider_id ที่ group by ได้ ลงค่าที่ [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth).rider_plan_code
- บันทึกค่า [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).policy_type ที่ group by ได้ ลงค่าที่ [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth).policy_type

>
**ค่า unhealth_benefit_name**

format ที่ต้องการของ unhealth_benefit_name คือ 'ชื่อกลุ่มโรคที่ 1' + '-' + 'ชื่อกลุ่มโรคที่ 2' + '-' + 'ชื่อกลุ่มโรคที่ 3' ...

- ตรวจสอบชื่อของกลุ่มโรคจาก [psuite_mps_benefit_group](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_group).benefit_group_abbr
- เรียงลำดับชื่อของกลุ่มโรคจาก [psuite_mps_benefit_group](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_group).benefit_group โดยเริ่มจาก 'กลุ่มที่ 1' จนครบทุกกลุ่ม (ปัจจุบันมี 9 กลุ่มโรค)
- แต่ละกลุ่มมี **-** เป็นตัวคั่นกลางระหว่างกลุ่มโรค
- ตัวอย่าง: CB01-CI02-DS03-PR04-CH05-CI06-NS07-DM08-CB09
- บันทึกค่าทุก Rider ที่มีความคุ้มครองกลุ่มโรคร้ายแรง ที่ [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth).unhealth_benefit_name

>
**ค่า unhealth_benefit_paid**

format ที่ต้องการของ unhealth_benefit_paid คือ 'ค่า default การเคลมกลุ่มโรคที่ 1' + '-' + 'ค่า default การเคลมกลุ่มโรคที่ 2' + '-' + 'ค่า default การเคลมกลุ่มโรคที่ 3' ...

- ตรวจสอบ ลำดับพจน์ ของ 'ค่า default การเคลมกลุ่มโรค' ได้จาก [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).benefit_stage_position ซึ่ง format ข้อมูลที่ต้องการคือ 'ZYX'Z = พจน์แรก
- Y = พจน์ที่ 2
- X = พจน์ที่ 3
ตรวจสอบ ระยะของโรค ของ 'ค่า default การเคลมกลุ่มโรค' ได้จาก [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).benefit_stage
- กรณี**พบ**ข้อมูล ที่พจน์ไหน ให้บันทึกค่าที่พจน์นั้นเป็น **'0'**
- กรณี**ไม่พบ**ข้อมูล ที่พจน์ไหน ให้ตรวจสอบต่อที่ค่า [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).fix_value แล้วนำค่านั้นมาบันทึก (ปัจจุบัน ค่า fix_value ลงเป็น **'X'**)
เรียงลำดับ 'ค่า default การเคลมกลุ่มโรค' จาก [psuite_mps_benefit_stage](http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_stage).benefit_group โดยเริ่มจาก 'กลุ่มที่ 1' จนครบทุกกลุ่ม (ปัจจุบันมี 9 กลุ่มโรค)แต่ละค่ามี **-** เป็นตัวคั่นกลางระหว่างค่า default การเคลมกลุ่มโรคตัวอย่าง: 000-000-XXX-XXX-000-000-000-000-0XXบันทึกค่าที่ [tx_mps_default_unhealth](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_default_unhealth).unhealth_benefit_paid

>
**ตัวอย่างค่า Default ที่ต้องการ**

![](http://wiki.thaisamut.co.th/download/attachments/1199407375/u.png?version=7&modificationDate=1749011425957&api=v2)
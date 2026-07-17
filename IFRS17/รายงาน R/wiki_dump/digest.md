# รายงาน R — Digest (per-report distinctive content)

## R01 — Process การประมวลผลข้อมูลออกรายงาน R01

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R01

**ตาราง master/config:** cf_r01_gl_mapping
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_premium_detail, tx_adw_transaction_detail_id, tx_adw_investment_detail, tx_adw_double_entry_detail, tx_adw_premium_detail_id, tx_adw_investment_detail_id
**Account Codes (จำนวน 20):** 40511100, 40511200, 40511300, 40512100, 40512200, 40512300, 40513100, 40513200, 42022111, 50521111, 50521112, 50521121, 50521122, 50522111, 50522112, 50522113, 50522121, 50522122, 50522131, 50522132

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R01
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R01 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม Premium (model_type = PREMIUM) ให้ดูข้อมูลที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = PREMIUM
Re: cf_r01_gl_mapping | Account Code
| Account Name
| Collection Type
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว
| All ยกเว้น BENEFIT และ CLAIM
| 40512100
| เบี้ยประกันอุบัติเหตุ - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40512200
| เบี้ยประกันอุบัติเหตุ - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 40512300
| เบี้ยประกันอุบัติเหตุ - ชำระครั้งเดียว
| All ยกเว้น BENEFIT และ CLAIM
| 40513100
| เบี้ยประกันสุขภาพ - ปีแรก
| All ยกเว้น BENEFIT และ CLAIM
| 40513200
| เบี้ยประกันสุขภาพ - ปีต่อไป
| All ยกเว้น BENEFIT และ CLAIM
| 50521111
| ส่วนลดตรงเบี้ยประกันชีวิต - ปีแรก
```

## R02 — Process การประมวลผลข้อมูลออกรายงาน R02

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R02

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_commission_ov_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_detail_id, tx_rcc_reconcile_r02
**Account Codes (จำนวน 29):** 50551101, 50551103, 50551104, 50551105, 50551107, 50551108, 50551109, 50551110, 50551115, 50551120, 50551125, 50551126, 50551127, 50551128, 50551206, 50551208, 50551210, 50551211, 50551212, 50551215, 50551216, 50551217, 50551218, 50551219, 50551220, 50551221, 50551225, 50551226, 51090170

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R02
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R02 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 08, 07 --ปรับเพิ่มโครงการ UL Rider
Business Line สำหรับรายงาน R02
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 08
|
| PAR Product (เป็นแบบประกันสามัญ ที่มีเงินปันผล เช่น plan code OP01)
| 07
|
| Unit Linked --ปรับเพิ่มโครงการ UL Rider
ปรับวันที่ 16-FEB-2023 ให้นำ Plan_code = 'NoOLI' ออก
ดึงข้อมูล UL เฉพาะกรมธรรม์ RIDER (tx_adw_transaction_detail.basic_rider_indicator = "RIDER") และจะต้องไม่นำ UL Type Rider = 'UDR" มาแสดง เนื่องจากจะอยู่ในรายงาน R06 เท่านั้น --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R02 ดังนี้ (tx_adw_double_entry_detail.gl_code)
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R02
| Account code
| Account name
```

## R03 — Process การประมวลผลข้อมูลออกรายงาน R03

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R03

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_claim_detail, tx_adw_transaction_detail_id, tx_adw_investment_detail, tx_adw_premium_detail, tx_adw_double_entry_detail, tx_adw_claim_detail_id, tx_adw_benefit_detail, tx_adw_investment_detail_id, tx_adw_premium_detail_id
**Account Codes (จำนวน 27):** 40511100, 40511200, 40511300, 40512100, 40512200, 40512300, 40513100, 40513200, 42022110, 42022111, 42022112, 42022113, 42022114, 50542105, 50542106, 50542107, 50542110, 50542115, 50542120, 50542121, 50542125, 50544110, 50544111, 50544210, 50544211, 50544212, 50545005

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R03
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R03 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม CLAIM (model_type = CLAIM) ให้ดูข้อมูลที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = CLAIM
| Account Code
| Account Name
| Collection Type
| 50542105
| สินไหมประกันชีวิต
| All
| 50542106
| สินไหมประกันชีวิต-บำนาญ
| All
| 50542107
| สินไหมคุ้มครองผู้ชำระเบี้ย(PB) - ชีวิต
| All
| 50542110
| สินไหมอุบัติเหตุ
| All
| 50542115
| สินไหมคุ้มครองบุตร
| All
| 50542120
| เงินช่วยเหลือค่าทำศพ
| All
| 50542121
| Exgatia
| All
| 50542125
| สินไหมคืนเบี้ย
| All
| 50544110
| สินไหมทดแทนอุบัติเหตุ - ตรง
```

## R04 — Process การประมวลผลข้อมูลออกรายงาน R04

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R04

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_benefit_detail, tx_adw_transaction_detail_id, tx_adw_investment_detail, tx_adw_premium_detail, tx_adw_other_income_detail, tx_adw_double_entry_detail, tx_adw_benefit_detail_id, tx_adw_investment_detail_id, tx_adw_premium_detail_id, tx_adw_other_income_detail_id
**Account Codes (จำนวน 24):** 40511100, 40511200, 40511300, 40512100, 40512200, 40512300, 40513100, 40513200, 42022110, 42022111, 42022112, 42022113, 42022114, 43040026, 50541005, 50541010, 50541015, 50543005, 50543006, 50543010, 50547005, 50547006, 50549005, 50549015

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R04
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R04 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม Benefit (model_type = BENEFIT) ให้ดูข้อมูลที่ tx_adw_benefit_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = BENEFIT
| Account Code
| Account Name
| Collection Type
| 50541005
| ครบกำหนดสัญญา
| All
| 50541010
| เงินทรงชีพ
| All
| 50541015
| เงินสมนาคุณ
| All
| 50543005
| เวนคืนกรมธรรม์
| All
| 50543006
| เวนคืนกรมธรรม์อัตโนมัติ-บำนาญ
| All
| 50543010
| เวนคืนกรมธรรม์อัตโนมัติ
| All
| 50547005
| เงินบำนาญ
| All
| 50547006
| เงินบำนาญ Non-guarantee
| All
| 50549005
| ดอกเบี้ยจ่ายตามเงื่อนไขกรมธรรม์
```

## R05 — Process การประมวลผลข้อมูลออกรายงาน R05

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R05

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_premium_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_premium_detail_id, tx_rcc_reconcile_r05, tx_rcc_adj_r05
**Account Codes (จำนวน 24):** 40511100, 40511200, 40511300, 40511400, 40511500, 40512100, 40512200, 40513100, 40513200, 43040026, 43040027, 43040028, 43040029, 43040030, 43040031, 43040033, 50522111, 50522112, 50522113, 50522116, 50522121, 50522122, 50522131, 50522132

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R05
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R05 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม PREMIUM (model_type = PREMIUM) ที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R05 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R05
| No.
| Account code
| Account name
| Model Type
| 1
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| PREMIUM
| 2
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| PREMIUM
| 3
| 40511100
| เบี้ยประกันชีวิต - ปีแรก (Premium Charge)
| PREMIUM
| 4
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป (Premium Charge)
| PREMIUM
| 5
| 40511300
| เบี้ยประกันชีวิต - ชำระครั้งเดียว (Single Premium Charge)
| PREMIUM
| 6
```

## R06 — Process การประมวลผลข้อมูลออกรายงาน R06

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R06

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_commission_ov_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_detail_id, tx_rcc_reconcile_r06
**Account Codes (จำนวน 28):** 50551101, 50551103, 50551104, 50551105, 50551107, 50551108, 50551110, 50551115, 50551120, 50551125, 50551126, 50551127, 50551128, 50551206, 50551208, 50551210, 50551211, 50551212, 50551215, 50551216, 50551217, 50551218, 50551219, 50551220, 50551221, 50551225, 50551226, 51090170

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R06
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R06 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
กรณีที่เป็น RIDER ให้ดึงเฉพาะ UL Type Rider = 'UDR" มาแสดงเท่านั้น  --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R06 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R06
| Account code
| Account name
| Table group
| Amount Type
| 50551101
| ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1
Note
Icon
ยังไม่มาในการทดสอบครั้งนี้ จะต้องทดสอบหลังจากที่ UL เสร็จ ต้อง sync plan อีกครั้ง
| Commission,OV
| InitialCommission
| 50551103
| ค่าบำเหน็จปีต่อไป ตัวแทน
| Commission,OV
| RenewalCommission
| 50551107
| ค่าบำเหน็จรับตรงประกันชีวิต-ชำระครั้งเดียว
Note
Icon
ยังไม่มาในการทดสอบครั้งนี้ จะต้องทดสอบหลังจากที่ UL เสร็จ ต้อง sync plan อีกครั้ง
| Commission,OV
| InitialCommission
| 50551108
| ค่าบำเหน็จ - เบี้ยเพิ่มพิเศษ
| Commission,OV
```

## R07 — Process การประมวลผลข้อมูลออกรายงาน R07

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R07

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_claim_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_claim_detail_id, tx_rcc_reconcile_r07, tx_rcc_adj_r07, tx_rcc_output_r07
**Account Codes (จำนวน 3):** 50542105, 50542120, 50549005

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R07
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R07 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลที่ Model ตามกลุ่ม Claim (model_type = CLAIM) ที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_claim_detail_id =  tx_adw_claim_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business Line Code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R07 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R07
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| Type รับ/จ่าย
| Remark
| 50542105
| สินไหมประกันชีวิต (ตาม SA)
| Claim
| Provision, Approve
|
| 50542120
| เงินช่วยเหลือค่าทำศพ
| Claim
| Accrual, Cash, Approve
|
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| Claim
| Cash
|
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| Claim
| Cash
|
```

## R08 — Process การประมวลผลข้อมูลออกรายงาน R08

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R08

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_benefit_detail, tx_adw_transaction_detail_id, tx_adw_other_income_detail, tx_adw_double_entry_detail, tx_adw_benefit_detail_id, tx_rcc_reconcile_r08, tx_rcc_adj_r08, tx_rcc_output_r08
**Account Codes (จำนวน 2):** 43040026, 53000000

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R08
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R08 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม BENEFIT (model_type = BENEFIT) ที่ tx_adw_benefit_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R08
| Account code
| Account name
| Table group
| Remarks
| 23570001
| หนี้สินจากสัญญาลงทุน-Fund
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 23570002
| หนี้สินจากสัญญาลงทุน-GL
| BENEFIT
| Auto Surrender, Surrender, Partial Withdraw, Maturity
| 53000000
| เงินปันผลตามกรมธรรม์ประกันภัย
| BENEFIT
| Loyalty Bonus
ข้อมูลที่ Model ตามกลุ่ม OTHER_INCOME (model_type = OTHER_INCOME) ที่ tx_adw_other_income_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R08
| Account code
| Account name
| Table group
| Remarks
| 43040026
| รายได้ค่าบริการกรมธรรม์
| BENEFIT OTHER_INCOME
| Other
นำข้อมูล tx_adw_benefit_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_benefit_detail_id = tx_adw_benefit_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
```

## R09 — Process การประมวลผลข้อมูลออกรายงาน R09

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R09

**ตาราง master/config:** cf_r09_gl_mapping
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_other_income_fee_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_rcc_reconcile_r09, tx_rcc_adj_r09, tx_rcc_output_r09
**Account Codes (จำนวน 7):** 43040027, 43040028, 43040029, 43040030, 43040031, 43040032, 43040033

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R09
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R09 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม OTHER_INCOME_FEE(model_type = OTHER_INCOME_FEE) ที่ tx_adw_other_income_fee_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_other_income_fee_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_other_income_fee_detail.id = tx_adw_other_income_fee_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม UL ให้ใช้ Business line code ที่เป็น Unit Linked = "07" (tx_adw_double_entry_detail.business_line_code)
ดึงข้อมูล UL เฉพาะกรมธรรม์หลักเท่านั้น (tx_adw_transaction_detail.basic_rider_indicator = "BASIC") --ปรับเพิ่มโครงการ UL Rider
ดึงข้อมูล GL Code ของรายงาน R09 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R09
| No.
| Account code
| Account name
| Table group
| Amount Type
| 1
| 43040027
| รายได้ค่าการประกันภัย (COI Charge)
| OTHER_INCOME_FEE
|
| 2
| 43040028
| รายได้ค่าธรรมเนียมการรักษากรมธรรม์ (Policy fee)
| OTHER_INCOME_FEE
|
| 3
| 43040029
| รายได้ค่าธรรมเนียมการบริหารกรมธรรม์(Administration fee)
| OTHER_INCOME_FEE
|
| 4
| 43040030
| รายได้ค่าธรรมเนียมในการถอนเงินจากกรมธรรม์
| OTHER_INCOME_FEE
|
```

## R10 — Process การประมวลผลข้อมูลออกรายงาน R10

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R10

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_premium_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_premium_detail_id, tx_rcc_reconcile_r10, tx_rcc_adj_r10
**Account Codes (จำนวน 15):** 40511100, 40511200, 40512100, 40512200, 40513100, 40513200, 50522111, 50522112, 50522114, 50522121, 50522122, 50522124, 50522131, 50522132, 50522134

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R10
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R10 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Premium (model_type = PREMIUM) ที่ tx_adw_premium_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_detail_id = tx_adw_premium_detail.id
เงื่อนไขการดึงข้อมูลที่เข้าเงื่อนไขของ R10 ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R10
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA กลุ่ม
ดึงข้อมูล Account Code (tx_adw_double_entry_detail.gl_code) ของรายงาน R10 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R10
| Account code
| Account name
| Model type
| Premium type
| Remark
| 40511100
| เบี้ยประกันชีวิต - ปีแรก
| PREMIUM
| NORMAL กรณีชำระเบี้ยตามปกติของลูกค้า
MOVEMENT กรณีชำระเบี้ยส่วนต่างของจำนวนสมาชิกที่เพิ่มขึ้น-ลดลงระหว่างปี
|
| 40511200
| เบี้ยประกันชีวิต - ปีต่อไป
```

## R11 — Process การประมวลผลข้อมูลออกรายงาน R11

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R11

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_commission_ov_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_detail_id, tx_rcc_reconcile_r11, tx_rcc_adj_r11, tx_rcc_output_r11
**Account Codes (จำนวน 6):** 50551101, 50551103, 50551107, 50551126, 50551206, 50551211

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R11
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R11 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Commission, OV (model_type = COMMISSION_OV) ที่ tx_adw_commission_ov_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_detail_id = tx_adw_commission_ov_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R11
| Business Line
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R11 ดังนี้ (tx_adw_double_entry_detail.gl_code)
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R11
| Account code
| Account name
| Table group
| Amount Type
| 50551101
| ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1
| Commission,OV
| InitialCommission
| 50551103
| ค่าบำเหน็จปีต่อไป ตัวแทน
| Commission,OV
| RenewalCommission
| 50551206
```

## R12 — Process การประมวลผลข้อมูลออกรายงาน R12

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R12

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_claim_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_claim_detail_id, tx_rcc_reconcile_r12, tx_rcc_adj_r12, tx_rcc_output_r12
**Account Codes (จำนวน 8):** 50542105, 50542110, 50542121, 50542125, 50544110, 50544111, 50544210, 50545005

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R12
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R12 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหา ข้อมูลที่ Model ตามกลุ่ม Claim (model_type = CLAIM) ที่ tx_adw_claim_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_detail.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_claim_detail_id =  tx_adw_claim_detail.id
เงื่อนไขการดึงข้อมูลที่เข้าเงื่อนไขของ R12 ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R12
| Business Line
| tx_adw_transaction_policy.policy_category
| tx_adw_transaction_detail.plan_code_actuarial
| Product
| 03
| 'GROUP'
| 'GYRT'
| กลุ่ม เฉพาะ Group YRT
| 05
|
|
| PA-กลุ่ม
ดึงข้อมูล Account Code (tx_adw_double_entry_detail.gl_code) ของรายงาน R12 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R12
| Account code
| Account name
| Type รับ/จ่าย
| Model Type
| 50542105
| สินไหมประกันชีวิต
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50542110
| สินไหมอุบัติเหตุ
| PROVISION, APPROVE, ACCRUAL
| CLAIM
| 50544111
```

## R13 — Process การประมวลผลข้อมูลออกรายงาน R13

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R13

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_rcc_monthly_header, tx_rcc_landing_r13_hd, tx_rcc_monthly_detail, tx_rcc_landing_adj_r13, tx_rcc_adj_r13, tx_rcc_landing_r13_1, tx_rcc_output_r13_1, tx_rcc_landing_r13_2, tx_rcc_output_r13_2, tx_rcc_landing_r13_sale, tx_rcc_output_r13_sale, tx_rcc_landing_r13_product, tx_rcc_output_r13_product, tx_rcc_landing_r13_brand, tx_rcc_output_r13_brand
**Account Codes (จำนวน 1):** 51011005

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R13
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
สร้าง Transaction ตาม period ที่ประมวลผลที่ tx_rcc_monthly_header
ตรวจสอบข้อมูลที่ tx_rcc_landing_r13_hd
สร้าง Transaction ที่ tx_rcc_monthly_detailกรณีไม่พบข้อมูล R13 ตาม period ที่ระบุ สถานะดำเนินการ = 'ประมวลผลไม่สำเร็จ'
กรณีพบข้อมูล R13 ระบุ สถานะดำเนินการ = 'รอยืนยันข้อมูล'ดึงข้อมูลจำนวนเงินจาก tx_rcc_landing_r13_hd.total_amount มา update ที่ tx_rcc_monthly_detail.total_amount ของรายการ R13กรณีประมวลผลมากกว่า 1 Period ให้ sum tx_rcc_landing_r13_hd.total_amount ของทุก period ไปที่ tx_rcc_monthly_detail.total_amount เพื่อแสดงผลในหน้าจอ
กรณีพบข้อมูลให้ Duplicate ข้อมูล R13 ที่ยืนยันมาจากระบบ EXP ตาม Table landing ดังนีกรณี ไม่พบข้อมูล R13 ที่มี period เดียวกันกับข้อมูลที่ส่งเข้าไปให้ดำเนินการ insert เพื่อสร้างรายการข้อมูลใหม่
กรณี พบข้อมูล R13 ที่มี period เดียวกันกับข้อมูลที่ส่งเข้าไปให้ดำเนินการ update ข้อมูลใหม่โดยล้างข้อมูลเดิมออกและ replace ข้อมูลชุดใหม่แทนที่่
| Ralated Output
| Output EXP DB
| Landing RCC DB
| RCC DB
| TO5
| tx_exp_proc_output_5
| tx_rcc_landing_adj_r13
| tx_rcc_adj_r13
| TO1.1
| tx_exp_proc_output_1_1
| tx_rcc_landing_r13_1
| tx_rcc_output_r13_1
| TO1.2
| tx_exp_proc_output_1_2
| tx_rcc_landing_r13_2
| tx_rcc_output_r13_2
| CR RCC-R13 (Sales promotion and Advertising )
| TO2
| tx_exp_proc_output_2
| tx_rcc_landing_r13_sale
| tx_rcc_output_r13_sale
| TO3
| tx_exp_proc_output_3
| tx_rcc_landing_r13_product
| tx_rcc_output_r13_product
| TO4
| tx_exp_proc_output_4
| tx_rcc_landing_r13_brand
| tx_rcc_output_r13_brand
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R13 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ ทีหน้าจอ EDW-RCC-SD002 หน้าจอแสดงรายละเอียด และยืนยันการออกรายงาน R
```

## R14 — Process การประมวลผลข้อมูลออกรายงาน R14

**Objective:** 

**ตาราง master/config:** cf_r14_gl_mapping
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_investment_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_investment_detail_id, tx_rcc_reconcile_r14, tx_rcc_adj_r14
**Account Codes (จำนวน 4):** 42022110, 42022112, 42022113, 42022114

**First content lines:**
```
```
เกิดรายการ APLObjective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R14
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R14 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม Investment (model_type = INVESTMENT) ที่ tx_adw_investment_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_investment_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_investment_detail_id =  tx_adw_investment_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้
ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 08
Business Line สำหรับรายงาน R14
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
| INDUSTRY
| อุตสาหกรรม (ปช, ขพ)
| 02
| ORDINARY
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 08
| PAR Product
| PAR Product
ข้อมูล GL Code ของรายงาน R14 ตามตารางด้านล่างดังนี้
GL สำหรับรายงาน R14
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Model Type
| 11011100
| เงินกู้ประกันชีวิต
| Investment
| 11012100
| เงินกู้ประกันชีวิตอัตโนมัติ
| Investment
```

## R15 — Process การประมวลผลข้อมูลออกรายงาน R15

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R15

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_premium_ri_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_premium_ri_detail_id, tx_rcc_reconcile_r15, tx_rcc_adj_r15
**Account Codes (จำนวน 12):** 50531105, 50531110, 50531205, 50531210, 50532105, 50532110, 50532205, 50532210, 50533105, 50533110, 50533205, 50533210

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R15
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R15 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_PREMIUM (model_type = REINSURANCE_PREMIUM) ที่ tx_adw_premium_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_ri_detail_id = tx_adw_premium_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 07, 08  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R15
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 07
|
| Unit Linked
| 08
|
| PAR Product
ดึงข้อมูล GL Code ของรายงาน R15 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R15
| Account code
| Account name
| Table group
| 50531110
```

## R16 — Process การประมวลผลข้อมูลออกรายงาน R16

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R16

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_commission_ov_ri_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_ri_detail_id, tx_rcc_reconcile_r16, tx_rcc_adj_r16, tx_rcc_output_r16
**Account Codes (จำนวน 4):** 41510105, 41510110, 41510205, 41510210

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R16
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R16 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_COMMISSION_OV (model_type = REINSURANCE_COMMISSION_OV) ที่ tx_adw_commission_ov_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_commission_ov_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 01, 02, 03 (เฉพาะ MRTA/MLTA), 04, 07, 08  (tx_adw_double_entry_detail.business_line_code)
Business Line สำหรับรายงาน R16
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 01
|
| อุตสาหกรรม (ปช, ขพ)
| 02
|
| สามัญ
| 03
| 'ORDINARY' (เลือกเฉพาะสามัญ เนื่องจาก 03 มีส่วน MRTA/MLTA และประกันกลุ่ม)
| กลุ่ม (เฉพาะ MRTA/MLTA)
| 04
|
| PA สามัญ
| 07
|
| Unit Linked
| 08
|
| PAR Product
ดึงข้อมูล GL Code ของรายงาน R16 ดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R16
| Account code
| Account name
| Table group
| 41510110
```

## R17 — Process การประมวลผลข้อมูลออกรายงาน R17

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R17

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_claim_ri_detail, tx_adw_transaction_detail_id, tx_adw_premium_ri_detail, tx_adw_double_entry_detail, tx_adw_claim_ri_detail_id, tx_adw_premium_ri_detail_id
**Account Codes (จำนวน 27):** 40546006, 40546007, 40546008, 40546009, 40546010, 40546011, 41011005, 41011010, 41012005, 41012010, 41030005, 41030010, 41040000, 41520005, 41520010, 50531105, 50531110, 50531205, 50531210, 50532105, 50532110, 50532205, 50532210, 50533105, 50533110, 50533205, 50533210

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R17
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R17 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_CLAIM(model_type = REINSURANCE_CLAIM) ที่ tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูล ดังนี้กรณีที่เป็น Model ตามกลุ่ม REINSURANCE_CLAIM (model_type = REINSURANCE_CLAIM) ให้ดูข้อมูลที่tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
Account Code ส่วนของ Model Type = REINSURANCE_CLAIM
| Account Code
| Account Name
| Model type
| 41011005
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41011010
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41012005
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.
| REINSURANCE_CLAIM
| 41012010
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ตปท.
| REINSURANCE_CLAIM
| 41030005
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ในประเทศ
| REINSURANCE_CLAIM
| 41030010
| สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ต่างประเทศ
| REINSURANCE_CLAIM
| 41040000
| ค่าเรียกร้องสินไหมรับคืนประกันภัยต่อ
| REINSURANCE_CLAIM
| 41520005
| ส่วนแบ่งกำไรรับ - ในประเทศ
| REINSURANCE_CLAIM
| 41520010
```

## R18 — Process การประมวลผลข้อมูลออกรายงาน R18

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R18

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_premium_ri_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_premium_ri_detail_id, tx_rcc_reconcile_r18, tx_rcc_adj_r18, tx_rcc_output_r18
**Account Codes (จำนวน 12):** 50531105, 50531110, 50531205, 50531210, 50532105, 50532110, 50532205, 50532210, 50533105, 50533110, 50533205, 50533210

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R18
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R18 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE_PREMIUM (model_type = REINSURANCE_PREMIUM) ที่ tx_adw_premium_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_premium_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_premium_ri_detail_id=  tx_adw_premium_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R18
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
| 'PAGROUP'
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R18 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R18
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Type รับ/จ่าย (tx_adw_premium_ri_detail.collection_type)
| 50531110
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.
| Reinsurance
| Accrued และ Cash
| 50531210
| เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.
| Reinsurance
| Accrued และ Cash
| 50532110
| เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.
| Reinsurance
| Accrued และ Cash
```

## R19 — Process การประมวลผลข้อมูลออกรายงาน R19

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R19

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_commission_ov_ri_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_ri_detail_id, tx_rcc_reconcile_r19, tx_rcc_adj_r19, tx_rcc_output_r19, tx_adw_transaction_polic
**Account Codes (จำนวน 4):** 41510105, 41510110, 41510205, 41510210

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R19
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R19 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE COMMISSION OV (model_type = REINSURANCE_COMMISSION_OV) ที่ tx_adw_commission_ov_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_commission_ov_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_commission_ov_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย 03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R19
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R19 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R19
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Type รับ/จ่าย (tx_adw_commission_ov_ri_detail.collection_type)
| 41510110
| ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ
| Reinsurance
| Accrued และ Cash
| 41510210
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.
| Reinsurance
| Accrued และ Cash
| 41510205
| ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ในประเทศ
| Reinsurance
| Accrued และ Cash
```

## R20 — Process การประมวลผลข้อมูลออกรายงาน R20

**Objective:** ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R20

**ตาราง master/config:** -
**ตาราง EDW (tx_*/ms_*):** tx_adw_account_head, tx_adw_account_head_system, tx_adw_account_head_id, tx_adw_transaction_policy, tx_adw_account_head_system_id, tx_adw_transaction_detail, tx_adw_transaction_policy_id, tx_adw_claim_ri_detail, tx_adw_transaction_detail_id, tx_adw_double_entry_detail, tx_adw_commission_ov_ri_detail_id, tx_rcc_reconcile_r20, tx_rcc_adj_r20, tx_rcc_output_r20
**Account Codes (จำนวน 12):** 40546006, 40546007, 40546008, 41011005, 41011010, 41012005, 41012010, 41030005, 41030010, 41040000, 41520005, 41520010

**First content lines:**
```
```
Objective : ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R20
Precondition : เมื่อฝ่ายบัญชีประมวลผล และพิจารณายืนยันข้อมูลการประมวลผลแล้ว ให้ระบบบันทึกข้อมูล Reconcile actual data and Adjustment posting เข้า EDW โดยมีเงื่อนไขดังนี้
step1 : ฝ่ายบัญชี กดประมวลผลข้อมูลที่หน้าจอ EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R
step2 : ฝ่ายบัญชี เลือกข้อมูลเพื่อยืนยันการออกรายงาน R20 เพื่อส่งต่อให้ฝ่ายคณิตศาสตร์นำข้อมูลไปใช้งานต่อ
หาวันที่บันทึกบัญชีจาก Period หน้าจอ: ระบบนำปี และเดือนที่ได้รับจากหน้าจอ โดยใช้เงื่อนไข วันที่เริ่มต้น และวันที่สิ้นสุดของเดือนที่ต้องการไปหาที่ตาราง tx_adw_account_head.accounting_date ให้นำ id ที่ได้ไปดำเนินการต่อ
หา Transaction ที่มีการบันทึกบัญชี: นำข้อมูลจากตาราง tx_adw_account_head.id ที่ได้จากข้อ 1 ไปหาข้อมูลต่อที่ tx_adw_account_head_system.tx_adw_account_head_id = tx_adw_account_head.id and tx_adw_account_head_system.status = 'POST' and tx_adw_account_head_system.post_approved_date is not null
นำข้อมูลจากตาราง tx_adw_account_head_system.id ที่ได้จากข้อ 2 ไปหาข้อมูลต่อที่ tx_adw_transaction_policy.tx_adw_account_head_system_id = tx_adw_account_head_system.id จากนั้นจะได้กลุ่มของข้อมูลเป็น Transaction ตามวันที่ปิดบัญชีที่ได้จากหน้าจอในข้อ 1 ให้นำข้อมูลที่ได้จากตาราง tx_adw_transaction_policy ไปดำเนินการต่อ
นำข้อมูลจากตาราง tx_adw_transaction_policy.id ที่ได้จากข้อ 3 ไปหาข้อมูลต่อที่ tx_adw_transaction_detail.tx_adw_transaction_policy_id = tx_adw_transaction_policy.id
นำข้อมูล tx_adw_transaction_detail.id ที่ได้จากข้อ 4 ไปหาข้อมูลที่ Model ตามกลุ่ม REINSURANCE CLAIM (model_type = REINSURANCE_CLAIM) ที่ tx_adw_claim_ri_detail.tx_adw_transaction_detail_id = tx_adw_transaction_detail.id
นำข้อมูล tx_adw_claim_ri_detail.id ที่ได้จากข้อ 5 ไปหาข้อมูลต่อที่ tx_adw_double_entry_detail.tx_adw_commission_ov_ri_detail_id = tx_adw_claim_ri_detail.id
เงื่อนไขการดึงข้อมูล ดังนี้ดึงข้อมูลที่เป็นกลุ่ม GMM ให้ใช้ Business Line ประกอบด้วย  03 (เฉพาะ ประกันกลุ่ม), 05
Business Line สำหรับรายงาน R20
| tx_adw_double_entry_detail.business_line_code
| tx_adw_transaction_policy.policy_category
| Product
| 03
| 'GROUP'
| กลุ่ม เฉพาะ Group YRT
| 05
|
| PA-กลุ่ม
ดึงข้อมูล GL Code ของรายงาน R20 โดยตรวจสอบ Type รับจ่าย ตามตารางด้านล่างดังนี้
ตารางแสดงข้อมูล GL Code สำหรับรายงาน R20
| Account code (tx_adw_double_entry_detail.gl_code)
| Account name
| Table group
| Amoun Type
| Type รับ/จ่าย (tx_adw_claim_ri_detail.collection_type)
| 41011010
| สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.
| Reinsurance
| PaidAmountLife
| Accrued และ Cash
| 41012010
| สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ตปท.
| Reinsurance
| PaidAmountAccidentDeath
| Accrued และ Cash
| 41030010
```

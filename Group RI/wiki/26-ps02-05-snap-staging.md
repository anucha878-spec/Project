===== PAGE 1308459297 | Functional Specification > 02. Process Specification. > RIG-PS-02 Estimate - Snapshot Landing tables =====
#### วัตถุประสงค์
เพื่อเก็บชุดข้อมูลที่เตรียมไว้ก่อนนำไปประมวลผลเข้า Staging Table โดยมีวัตถุประสงค์เพื่อให้ข้อมูลที่ใช้ประมวลผลใน Staging Table เพื่อให้รันซ้ำ ตรวจสอบย้อนหลัง และควบคุมคุณภาพข้อมูลได้

#### ขอบเขตการทำงาน (Scope)
- ทำเฉพาะตารางที่เกี่ยวข้อง ตามขอบเขตการประมวลผล Esimate
- ข้อมูลที่นำมาสร้าง snapshot จะถูกดึงด้วย “เงื่อนไขกรองข้อมูล”
- Snapshot ข้อมูล ณ คืนวันที่สิ้นเดือน หลังจากกระบวนการ Dump Feed RIG-PS-01 Landing Tables: Group Policy to Group RI สำเร็จ

#### รายละเอียด
| Process | ตารางที่ใช้ดึงข้อมูล | เงื่อนไขกรองข้อมูล | ตารางสำหรับบันทึกข้อมูล | คำนวณเบี้ย/เคลม |
| RIG-PS-01-01 Policy | tx_rig_landing_policy | เลือกกรมธรรม์ และปีกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_rig_landing_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025หรือเลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimdeathtx_rig_landing_claimtpdtx_rig_landing_claimhealthใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี approve_date อยู่ระหว่างวันที่ 1 มกราคม 2025 ถึง 31 มกราคม 2025การเลือกกรมธรรม์ฺ และปีกรมธรรม์ ให้ Join ด้วยเงื่อนไข policy_no และ policy_year | tx_est_snap_policy | All |
| RIG-PS-01-02 Customer | tx_rig_landing_certificate_cust | เลือกกรมธรรม์ และปีกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาหรือเลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลทั้งนี้สามารถใช้กรมธรรม์ และปีกรมธรรม์จาก output ของ RIG-PS-01-01 Policy ตาราง tx_est_snap_policy ในการเลือกข้อมูลได้หมายเหตุ ต้องประมวลผล RIG-PS-01-01 Policy ก่อนเสมอ | tx_est_snap_certificate_cust | All |
| RIG-PS-01-07 Certificate Inforce | tx_rig_landing_cert_inforce | เลือกสมาชิกที่กรมธรรม์และปีกรมธรรม์อยู่ในกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_rig_landing_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025การเลือกกรมธรรม์ฺ และปีกรมธรรม์ ให้ Join ด้วยเงื่อนไข policy_no และ policy_year | tx_est_snap_cert_inforce | เบี้ย |
| RIG-PS-01-08 Certificate New Business | tx_rig_landing_certnewbusiness | ไม่ต้อง scope เพราะเป็น Newbusiness มีข้อมูลแค่ปีแรก | tx_est_snap_cert_newbusiness | เบี้ย |
| RIG-PS-01-03 Company | tx_rig_landing_company | ไม่กรองเงื่อนไข | tx_est_snap_company | All |
| RIG-PS-01-04 Claim Death | tx_rig_landing_claimdeath | เลือกกรมธรรม์ ที่กรมธรรม์และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimdeathใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี approve_date อยู่ระหว่างวันที่ 1 มกราคม 2025 ถึง 31 มกราคม 2025 | tx_est_snap_claim_death | เคลม |
| RIG-PS-01-05 Claim TPD | tx_rig_landing_claimtpd | เลือกกรมธรรม์ ที่กรมธรรม์และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimtpdใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี approve_date อยู่ระหว่างวันที่ 1 มกราคม 2025 ถึง 31 มกราคม 2025 | tx_est_snap_claimtpd | เคลม |
| RIG-PS-01-06 Claim Health | tx_rig_landing_claimhealth | เลือกกรมธรรม์ ที่กรมธรรม์และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimhealthใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี approve_date อยู่ระหว่างวันที่ 1 มกราคม 2025 ถึง 31 มกราคม 2025 | tx_est_snap_claimhealth | เคลม |
| RIG-PS-01-12 Unname Policy | tx_rig_landing_unname_policy | เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_rig_landing_unname_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025 | tx_est_snap_unname_policy | All |
| RIG-PS-01-17 Premium Rate | tx_rig_landing_prem_rate | ไม่กรองเงื่อนไข | tx_est_snap_prem_rate | เบี้ย |


===== PAGE 1305412444 | Functional Specification > 02. Process Specification. > RIG-PS-03 Actual - Snapshot Landing Tables =====
#### วัตถุประสงค์
เพื่อเก็บชุดข้อมูลที่เตรียมไว้ก่อนนำไปประมวลผลเข้า Staging Table โดยมีวัตถุประสงค์เพื่อให้ข้อมูลที่ใช้ประมวลผลใน Staging Table เพื่อให้รันซ้ำ ตรวจสอบย้อนหลัง และควบคุมคุณภาพข้อมูลได้

#### ขอบเขตการทำงาน (Scope)
- ทำเฉพาะตารางที่เกี่ยวข้อง ตามขอบเขตการประมวลผล Actual
- ข้อมูลที่นำมาสร้าง snapshot จะถูกดึงด้วย “เงื่อนไขกรองข้อมูล” ตาม rule ของงาน หรือเงื่อนไขทางธุรกิจอื่น ๆ
- Snapshot ข้อมูล ณ คืนวันที่สิ้นเดือน หลังจากกระบวนการ Dump Feed RIG-PS-01 Landing Tables: Group Policy to Group RI สำเร็จ

#### รายละเอียด
| Process | ตารางที่ใช้ดึงข้อมูล | เงื่อนไขกรองข้อมูล | ตารางสำหรับบันทึกข้อมูล | คำนวณเบี้ย/เคลม |
| RIG-PS-01-01 Policy | tx_rig_landing_policy | เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_rig_landing_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2'ระบบจะดึงข้อมูลที่มี promise_date ในรอบ q2 คือ เดือน 4,5,6 ให้ย้อนหลังไป เอา q2 ของปีที่แล้ว คือ 1 เมษา 2025 ถึง 30 มิย 2026หรือเลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimdeathtx_rig_landing_claimtpdtx_rig_landing_claimhealthใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2''ระบบจะดึงข้อมูลที่มี approve_date ในรอบ q2 คือ เดือน 4,5,6 คือ 1 เมษา 2026 ถึง 30 มิย 2026การเลือกกรมธรรม์ฺ และปีกรมธรรม์ ให้ Join ด้วยเงื่อนไข policy_no และ policy_year | tx_act_snap_policy | All |
| RIG-PS-01-02 Customer | tx_rig_landing_certificate_cust | เลือกสมาชิกที่อยู่ในกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาหรือเลือกสมาชิก และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลทั้งนี้สามารถใช้กรมธรรม์ และปีกรมธรรม์จาก output ของ RIG-PS-01-01 Policy ตาราง tx_act_snap_policy ในการเลือกข้อมูลได้หมายเหตุ ต้องประมวลผล RIG-PS-01-01 Policy ก่อนเสมอ | tx_act_snap_certificate_cust | All |
| RIG-PS-01-07 Certificate Inforce | tx_rig_landing_cert_inforce | ไม่กรองเงื่อนไขเลือกสมาชิกที่อยู่ในกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_rig_landing_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2'ระบบจะดึงข้อมูลที่มี promise_date ในรอบ q2 คือ เดือน 4,5,6 ให้ย้อนหลังไป เอา q2 ของปีที่แล้ว คือ 1 เมษา 2025 ถึง 30 มิย 2026การเลือกกรมธรรม์ฺ และปีกรมธรรม์ ให้ Join ด้วยเงื่อนไข policy_no และ policy_year | tx_act_snap_cert_inforce | เบี้ย |
| RIG-PS-01-03 Company | tx_rig_landing_company | ไม่กรองเงื่อนไข | tx_act_snap_company | All |
| RIG-PS-01-04 Claim Death | tx_rig_landing_claimdeath | เลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimdeathใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2''ระบบจะดึงข้อมูลที่มี approve_date ในรอบ q2 คือ เดือน 4,5,6 คือ 1 เมษา 2026 ถึง 30 มิย 2026 | tx_act_snap_claim_death | เคลม |
| RIG-PS-01-05 Claim TPD | tx_rig_landing_claimtpd | เลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimtpdใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2''ระบบจะดึงข้อมูลที่มี approve_date ในรอบ q2 คือ เดือน 4,5,6 คือ 1 เมษา 2026 ถึง 30 มิย 2026 | tx_act_snap_claimtpd | เคลม |
| RIG-PS-01-06 Claim Health | tx_rig_landing_claimhealth | เลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลตารางข้อมูลเคลม ดังนี้tx_rig_landing_claimhealthใช้ฟิลด์ approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2''ระบบจะดึงข้อมูลที่มี approve_date ในรอบ q2 คือ เดือน 4,5,6 คือ 1 เมษา 2026 ถึง 30 มิย 2026 | tx_act_snap_claimhealth | เคลม |
| RIG-PS-01-09 Certificate Alteration | tx_rig_landing_certalteration | ไม่กรองเงื่อนไข | tx_act_snap_certalteration | All |
| RIG-PS-01-10 Experience Refund | tx_rig_landing_exprefund | ไม่กรองเงื่อนไข | tx_act_snap_exprefund | เคลม |
| RIG-PS-01-11 Nature of business | tx_rig_landing_nature_business | ไม่กรองเงื่อนไข | tx_act_snap_nature_business | All |
| RIG-PS-01-12 Unname Policy | tx_rig_landing_unname_policy | ไม่กรองเงื่อนไข | tx_act_snap_unname_policy | All |
| RIG-PS-01-13 Investigation Expense | tx_rig_landing_investigation_expense | ไม่กรองเงื่อนไขเลือกกรมธรรม์ และปีกรมธรรม์ที่มีการเคลมภายในรอบประมวลผลใช้ฟิลด์ tx_rig_landing_investigation_expense.approve_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '2026Q2''ระบบจะดึงข้อมูลที่มี approve_date ในรอบ q2 คือ เดือน 4,5,6 คือ 1 เมษา 2026 ถึง 30 มิย 2026 | tx_act_snap_investigation_expense | เคลม |
| RIG-PS-01-16 Inforce (R17) | tx_rig_landing_gl_sophead | ไม่กรองเงื่อนไข | tx_act_snap_gl_sophead | All |
| RIG-PS-01-17 Premium Rate | tx_rig_landing_prem_rate | ไม่กรองเงื่อนไข | tx_act_snap_prem_rate | เบี้ย |


===== PAGE 1305412273 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables =====
Batch Process ทำงานหลังจากกระบวนการ RIG-PS-02 Estimate - Snapshot Landing tables เสร็จสิ้นทั้งหมด
| Batch ID | Batch Name | Description | Target Table | Snapshot | Estimate | Service | Dependency |  |
| EST-001 | ข้อมูล List of policy | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty | tx_stg_est_all_policy | ณ สิ้นเดือนตามรอบประมวลผล | Premium, Claim | Process List of policy (Estimate) |  | tx_est_snap_policytx_est_snap_company |
| EST-002 | ข้อมูล กรรมธรรม์ ณ ต้นสัญญา | นำเข้าข้อมูลกรมธรรม์ที่มีวันเริ่มสัญญา (Effective Date) ย้อนหลังไม่เกิน 1 ปี | tx_stg_est_policy_1y | ณ สิ้นเดือนตามรอบประมวลผล | Premium | Process ข้อมูลกรรมธรรม์ ณ ต้นสัญญา (Estimate) |  | tx_est_snap_policytx_est_snap_unname_policytx_est_snap_certificate_cust |
| EST-003 | ข้อมูล Claim | นำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายในรอบประมวลผล | tx_stg_est_death_claimtx_stg_est_tpd_claimtx_stg_est_health_claim | ณ สิ้นเดือนตามรอบประมวลผล | Claim | Process ดึงข้อมูล Claim Death (Estimate)Process ดึงข้อมูล Claim Dismemberment/TPD (Estimate)Process ดึงข้อมูล Claim Health (Estimate) |  | tx_est_snap_policytx_est_snap_certificate_custtx_est_snap_claim_deathtx_est_snap_claimtpdtx_est_snap_claimhealth |
| EST-004 | ข้อมูล Estimated Premium Layer | ข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย | tx_stg_est_prem_layer | ณ สิ้นเดือนตามรอบประมวลผล | Premium | Process ข้อมูล Estimated Premium Layer |  | tx_est_snap_policytx_est_snap_cert_newbusinesstx_est_snap_certificate_custtx_snap_cert_inforcetx_est_snap_unname_policy |
| EST-005 | ข้อมูล (R01) List of inforce by member | จัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by member | tx_stg_est_inforce_member | ณ สิ้นเดือนตามรอบประมวลผล | Premium | Process ข้อมูล (R01) List of inforce by member (Estimate) |  | tx_est_snap_policytx_est_snap_cert_inforcetx_est_snap_certificate_cust |
| EST-006 | กระบวนการดึงข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance | ประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น | tx_rig_policy_base | ทำครั้งเดียวเพื่อตั้งฐาน | Premium |  |  |  |


===== PAGE 1291419946 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-001 ข้อมูล List of policy =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ดึงข้อมูลกรมธรรม์จากระบบประกันกลุ่ม โดยพิจารณาเฉพาะกรมธรรม์ที่มีการส่งต่อประกันภัยต่อ (Reinsurance) เท่านั้นสามารถเลือกประมวลผลเฉพาะ Treaty ที่ต้องการ ได้การดึงข้อมูลจะอ้างอิงข้อมูล ณ วันที่สิ้นเดือนของรอบประมวลผล (Closing Period) เพื่อให้ได้ข้อมูลกรมธรรม์ตามสถานะจริงของรอบงวดนั้นข้อมูลที่ดึงมา จะถูกนำไปใช้เป็น input สำหรับการประมวลผล Estimate ในขั้นตอนถัดไปของระบบ Group RI |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-01,PS-02,PS-03,PS-04,PS-05,PS-06 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-02 Estimate - Snapshot Landing tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Treaty Code = รหัสสัญญาประกันภัยต่อ ใช้ระบุเพิ่มเติมเมื่อมีการเลือกใช้ RI Policy Flag |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ประจำรอบเดือนตาม Period ที่ระบุ โดยเป็นข้อมูลกรมธรรม์ทุกสถานะที่ผ่านการคัดกรองตามเงื่อนไข Input ที่กำหนด |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล List of policy (Estimate)ระบบบันทึกข้อมูลที่ตาราง tx_stg_est_all_policyNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No 17010012PolicyNovarchar8เลขที่กรมธรรม์RIG_View_Policy.PolicyNo GH16634Commencement Datedate วันเริ่มสัญญาครั้งแรกRIG_View_Policy.FirstDatedd/mm/yyyy (AD.)15/11/20066EffectiveDatedate วันเริ่มสัญญาปีปัจจุบันRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)15/11/20247EndDatedate วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้นRIG_View_Policy.ExpireDatedd/mm/yyyy (AD.)14/11/20253PolicyYearnumeric3ปีกรมธรรม์RIG_View_Policy.PolicyYear 198PaymentModenumeric1ประเภทการชำระเบี้ยRIG_View_Policy.PayTypePayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' Annual9PolicyNamevarchar255ชื่อกรมธรรม์ (ชื่อบริษัท)RIG_View_Policy.CompanyNameEng, CompanyNameif CompanyName ไม่เป็นภาษาอังกฤษให้ใช้ข้อมูลที่ CompanyNameEng*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมดMEIKI ENGINEERING (THAILAND) COMPANY LIMITED10NatureOfBusinessvarchar255ประเภทธุรกิจRIG_View_Company.DBDCODEเป็นหน้าจอให้ User mapping DBD code ด้วย Type of business ภาษาไทยกับภาษาอังกฤษ*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมดLogistics11Statusvarchar1สถานะของกรมธรรม์ จากประกันกลุ่มRIG_View_Policy.PolicyStatusif RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed'Inforce12RIStatusvarchar50สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedRIG_View_Policy.PolicyStatusif RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed'Inforce13LapseDatedate วันที่ไม่ต่อสัญญาRIG_View_Policy.LapseDatedd/mm/yyyy (AD.)14/11/202514PreviousPolicyNovarchar8เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี)RIG_View_Policy.PolicyNo_Old GH166215ExperienceRefundnumeric1Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExperienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExperienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes)RIG_View_Policy.ExperienceRefundif RIG_View_Policy.ExperienceRefund = 0 then 'No'if RIG_View_Policy.ExperienceRefund= 1 then 'Yes'No TreatyCodevarchar50รหัสประกันภัยต่อ SaleOptionnumeric4ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงินRIG_View_Policy.SaleOption SaleChannelCodenumeric4ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-opRIG_View_Policy.SaleChannel FirstReceiptDatedate วันทีออกใบเสร็จใบแรกRIG_View_Policy.FReceiptDate ExpireDatedate วันที่สิ้นสุดความคุ้มครองRIG_View_Policy.ExpireDate RateTypenumeric1ประเภทอัตราเบี้ยRIG_View_Policy.CalculatePremFrom |


===== PAGE 1290010893 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-001 ข้อมูล List of policy > Process ข้อมูล List of policy (Estimate) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก RIG-PS-02 Estimate - Snapshot Landing tables>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy
- ดึงข้อมูลบริษัทจาก tx_est_snap_companyโดย left join ด้วยเงื่อนไข ดังนี้tx_est_snap_company.company_code = tx_est_snap_policy.company_codetx_est_snap_company.policy_year = tx_est_snap_policy.policy_year
- tx_est_snap_company.company_code = tx_est_snap_policy.company_code
- tx_est_snap_company.policy_year = tx_est_snap_policy.policy_year
- รหัส treaty code สามารถอ่านได้จาก configure ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100
- ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size (Source) | Output tx_stg_est_all_policy | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล | tx_est_snap_policy.period | varchar | 6 | period |  |  |
| 2 | ReinsuredNo | เลขประกันภัยต่อ | tx_est_snap_policy.reinsur_no | varchar | 10 | reinsur_no |  | 1701001 |
| 3 | PolicyNo | เลขที่กรมธรรม์ | tx_est_snap_policy.policy_no | varchar | 8 | policy_no |  | GH1663 |
| 4 | Commencement Date | วันเริ่มสัญญาครั้งแรก | tx_est_snap_policy.first_date | date |  | first_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-11-15 |
| 5 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_est_snap_policy.promise_date | date |  | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 6 | EndDate | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | tx_est_snap_policy.expire_date | date |  | end_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 7 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_policy.policy_year | numeric | 3 | policy_year |  | 19 |
| 8 | PaymentMode | ประเภทการชำระเบี้ย | tx_est_snap_policy.pay_type | numeric | 1 | pay_type | แปลงค่า tx_est_snap_policy.pay_type โดยนำค่าไปตรวจสอบใน cf_lookup_catalog.parent_id = 1002300 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | Annual |
| 9 | PolicyName | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ | tx_est_snap_policy.company_name_eng, company_name | varchar | 255 | policy_name | ระบบจะดึงค่าชื่อบริษัทจากฟิลด์ tx_est_snap_policy.company_name_eng เป็นลำดับแรกกรณีที่ company_name_eng ไม่มีค่า หรือมีค่าเป็น NULL ระบบจะใช้ค่าจากฟิลด์ tx_est_snap_policy.company_nameแทนในการบันทึกและประมวลผลข้อมูลแปลงค่าให้เป็นตัวพิมพ์ใหญ่ทั้งหมด (Uppercase) ก่อนบันทึก | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED |
| 10 | dbd_code | ประเภทธุรกิจ | tx_est_snap_company.dbdcode | varchar | 20 | dbd_code | tx_est_snap_company.company_code = tx_est_snap_policy.company_codetx_est_snap_company.policy_year = tx_est_snap_policy.policy_year | 64202 |
| 11 | Status | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_est_snap_policy.policy_status | varchar | 1 | status | แปลงค่าจาก tx_est_snap_policy.policy_status โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002400 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | Inforce |
| 12 | RIStatus | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed |  | varchar | 20 | ri_status | แปลงค่าจาก tx_est_snap_policy.policy_statusถ้า tx_est_snap_policy.expire_date => วันที่สิ้นเดือนของ Periodตรวจสอบ tx_est_snap_policy.policy_year = 1 ให้บันทึกค่าเป็น 'New Business'ตรวจสอบ tx_est_snap_policy.policy_year > 1 ให้บันทึกค่าเป็น 'Inforce'ถ้า tx_est_snap_policy.expire_date < วันที่สิ้นเดือนของ tx_est_snap_policy.period ให้บันทึกค่าเป็น 'Lapsed'tx_est_snap_policy.policy_status = 'C' then 'Cancel' | Inforce |
| 13 | LapseDate | วันที่ไม่ต่อสัญญา | tx_est_snap_policy.lapse_date | date |  | lapse_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 14 | PreviousPolicyNo | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | tx_est_snap_policy.policy_no_old | varchar | 8 | prev_policy_no |  | GH1662 |
| 15 | ExperienceRefund | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExperienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExperienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes) | tx_est_snap_policy.expreience_refund | numeric | 1 | exp_refund | ตรวจสอบ tx_est_snap_policy.expreience_refund โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002600 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | N |
| 16 | TreatyCode | รหัสประกันภัยต่อ |  | varchar | 50 | treaty_code | ระบบแปลงค่าจาก tx_est_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | THREL_Grp_PA |
| 17 | SaleOption | ฝ่ายขาย/ช่องทาง 0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน | tx_est_snap_policy.sale_option | numeric | 4 | sale_option |  | 1 |
| 18 | SaleChannelCode | ช่องทางการขาย 0 = Direct1 = Dai-ichi 2 = Co-op | tx_est_snap_policy.sale_channel_code | numeric | 4 | sale_channel_code |  | 1 |
| 19 | FirstReceiptDate | วันทีออกใบเสร็จใบแรก | tx_est_snap_policy.f_receipt_date | date |  | f_receipt_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 20 | ExpireDate | วันที่สิ้นสุดความคุ้มครอง | tx_est_snap_policy.expire_date | date |  | expire_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 21 | RateType | ประเภทอัตราเบี้ย | tx_est_snap_policy.rate_flag | numeric | 1 | rate_flag |  | 1 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294991993 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-001 ข้อมูล List of policy > Process ข้อมูล List of policy (Estimate) > WS_RIG_001 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 1701001 |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1663 |
| 4 | Commencement Date | date |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 15/11/2006 |
| 6 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 15/11/2024 |
| 7 | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 14/11/2025 |
| 3 | PolicyYear | numeric | 3 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 19 |
| 8 | PaymentMode | numeric | 1 | ประเภทการชำระเบี้ย | RIG_View_Policy.PayType | PayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Annual |
| 9 | PolicyName | varchar | 255 | ชื่อกรมธรรม์ (ชื่อบริษัท) | RIG_View_Policy.CompanyNameEng, CompanyName | if CompanyName ไม่เป็นภาษาอังกฤษให้ใช้ข้อมูลที่ CompanyNameEng*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมด | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED |
| 10 | NatureOfBusiness | varchar | 255 | ประเภทธุรกิจ | RIG_View_Company.DBDCODE | เป็นหน้าจอให้ User mapping DBD code ด้วย Type of business ภาษาไทยกับภาษาอังกฤษ*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมด | Logistics |
| 11 | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed' | Inforce |
| 12 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed' | Inforce |
| 13 | LapseDate | date |  | วันที่ไม่ต่อสัญญา | RIG_View_Policy.LapseDate | dd/mm/yyyy (AD.) | 14/11/2025 |
| 14 | PreviousPolicyNo | varchar | 8 | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | RIG_View_Policy.PolicyNo_Old |  | GH1662 |
| 15 | ExperienceRefund | numeric | 1 | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExperienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExperienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes) | RIG_View_Policy.ExperienceRefund | if RIG_View_Policy.ExperienceRefund = 0 then 'No'if RIG_View_Policy.ExperienceRefund= 1 then 'Yes' | No |
|  | TreatyCode | varchar | 50 | รหัสประกันภัยต่อ |  |  |  |
|  | SaleOption | numeric | 4 | ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน | RIG_View_Policy.SaleOption |  |  |
|  | SaleChannelCode | numeric | 4 | ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-op | RIG_View_Policy.SaleChannel |  |  |
|  | FirstReceiptDate | date |  | วันทีออกใบเสร็จใบแรก | RIG_View_Policy.FReceiptDate |  |  |
|  | ExpireDate | date |  | วันที่สิ้นสุดความคุ้มครอง | RIG_View_Policy.ExpireDate |  |  |
|  | RateType | numeric | 1 | ประเภทอัตราเบี้ย | RIG_View_Policy.CalculatePremFrom |  |  |


===== PAGE 1291715747 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-002 ข้อมูล กรรมธรรม์ ณ ต้นสัญญา =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลกรมธรรม์ ณ ต้นสัญญา โดยอ้างอิงจากช่วงเวลา Effective Date (PromiseDate) ย้อนหลัง 1 ปีจากรอบเดือนปิดงาน (Closing Period) ที่ระบุ โดยระบบจะทำการคัดกรองกรมธรรม์ที่มีวันเริ่มสัญญาอยู่ภายในช่วงเวลากำหนดเพื่อให้ได้ข้อมูลกรมธรรม์ที่เกี่ยวข้องสำหรับใช้ในการประมวลผลประจำเดือนอย่างถูกต้องและครบถ้วน ตัวอย่าง ดังนี้ สำหรับ Closing Period ‘202501’ จะดึงข้อมูลกรมธรรม์ที่มี Effective Date ระหว่าง ‘2024-02-01’ ถึง ‘2025-01-31’ สำหรับ Closing Period ‘202502’ จะดึงข้อมูลกรมธรรม์ที่มี Effective Date ระหว่าง ‘2024-03-01’ ถึง ‘2025-02-28’ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-01,PS-02,PS-03,PS-04,PS-05,PS-06 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-02 Estimate - Snapshot Landing tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Effective From = เดือนและปีที่ใช้เป็นช่วงเริ่มต้นของวันที่กรมธรรม์มีผลบังคับEffective To = เดือนและปีที่ใช้เป็นช่วงสิ้นสุดของวันที่กรมธรรม์มีผลบังคับTreaty Code = รหัสสัญญาประกันภัยต่อที่ใช้สำหรับคัดกรองข้อมูลกรมธรรม์ตามสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ ณ ต้นสัญญาที่อยู่ภายในช่วง Effective Date ตามที่กำหนด (Effective From – Effective To) พร้อมคัดกรองตามรหัสสัญญา (Treaty Code) หากมีการระบุ โดยข้อมูลที่ได้จะเป็นรายการกรมธรรม์ที่เริ่มมีผลบังคับภายในช่วงเวลา 1 ปีย้อนหลังของรอบ Closing และพร้อมสำหรับนำไปใช้ในการประมวลผลรายเดือน |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูลกรรมธรรม์ ณ ต้นสัญญา (Estimate)ระบบบันทึกข้อมูลที่ตาราง tx_stg_est_policy_1yNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' 17010012PolicyNovarchar8เลขที่กรมธรรม์RIG_View_Policy.PolicyNo GH16633PolicyYearnumeric3ปีกรมธรรม์RIG_View_Policy.PolicyYear 184CommencementDatedate วันเริ่มสัญญาครั้งแรกRIG_View_Policy.FirstDatedd/mm/yyyy (AD.)15/11/20065EffectiveDatedate วันเริ่มสัญญาปีปัจจุบันRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)15/11/20236EndDatedate วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้นRIG_View_Policy.ExpireDatedd/mm/yyyy (AD.)15/11/20247Statusvarchar50สถานะของกรมธรรม์ จากประกันกลุ่มRIG_View_Policy.PolicyStatusif RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed'New Business8RIStatusvarchar50สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedRIG_View_Policy.PolicyStatusif RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed'New Business9NoOfMembernumeric8จำนวน member ทั้งหมด ที่ Active และ InactiveRIG_View_CertInforce.count(CerNo))#,###นับจำนวนสมาชิกทั้งหมด1010NoOfMemberActivenumeric8จำนวน member ที่ active โดยพิจารณาจากรายการที่มีสถานะไม่อยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.count(CerNo)#,###นับจำนวนสมาชิกที่ Active เท่านั้น1011NoOfMemberInactivenumeric8จำนวน member ที่ Inactive โดยพิจารณาจากรายการที่มีสถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.count(CerNo)#,###นับจำนวนสมาชิกที่ Inactive เท่านั้น1012NoOfMemberLifenumeric8จำนวนสมาชิกที่มีทุนชีวิตที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')LifePrem > 0 or LifeE1Prem > 0 or LifeE2Prem > 0)#,###นับจำนวนสมาชิกที่ Active และทุนชีวิต > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง -1013NoOfMemberAccidentDeathnumeric8จำนวนสมาชิกที่มีทุนอุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')AccPrem > 0 or AccE2Prem > 0#,###นับจำนวนสมาชิกที่ Active และทุนอุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง -1014NoOfMemberMedAccidentnumeric8จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')MedPrem > 0#,###นับจำนวนสมาชิกที่ Active และทุนค่ารักษาพยาบาล อุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง -1015NoOfMemberTPDnumeric8จำนวนสมาชิกที่มีทุนทุพพลภาพที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')TPDPrem > 0#,###นับจำนวนสมาชิกที่ Active และทุนทุพพลภาพ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง -1016SumInsuredLifenumeric14,2ทุนชีวิตรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.sum(LifeInsur)StatusMember NOT IN ('C','D','L')#,###.##กรณีไม่มีข้อมูลแสดง 0.0010,000.0017SumInsuredAccidentDeathnumeric14,2ทุนชีวิต อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.sum(AccInsur)StatusMember NOT IN ('C','D','L')#,###.##กรณีไม่มีข้อมูลแสดง 0.0010,000.0018SumInsuredMedAccidentnumeric14,2ทุนค่ารักษาพยาบาล อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’RIG_View_CertInforce.sum(MedInsur)StatusMember NOT IN ('C','D','L')#,###.##กรณีไม่มีข้อมูลแสดง 0.0010,000.0019SumInsuredTPDnumeric14,2ทุนทุพพลภาพรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’RIG_View_CertInforce.sum(TPDInsur)StatusMember NOT IN ('C','D','L')#,###.##กรณีไม่มีข้อมูลแสดง 0.0010,000.00 |


===== PAGE 1291714752 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-002 ข้อมูล กรรมธรรม์ ณ ต้นสัญญา > Process ข้อมูลกรรมธรรม์ ณ ต้นสัญญา (Estimate) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก RIG-PS-02 Estimate - Snapshot Landing tables>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_unname_policy (Step1)โดยกรองเงื่อนไข ดังนี้tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_notx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_yearเลือกข้อมูลงวดต้นสัญญาtx_est_snap_unname_policy.period_date = tx_est_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_dateสถานะไม่เป็น 'ยกเลิก'tx_est_snap_policy.policy_status <> 'C'เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025โดยต้อง sum ยอดเบี้ย และจำนวนสมาชิกภายใต้ policy_no และ policy_year เดียวกัน ดังนั้น แม้มีหลาย company_code ภายใต้ policy_no และ policy_year เดียวกัน ให้รวมเป็น 1 รายการ
- tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_no
- tx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_year
- เลือกข้อมูลงวดต้นสัญญาtx_est_snap_unname_policy.period_date = tx_est_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- tx_est_snap_unname_policy.period_date = tx_est_snap_unname_policy.promise_date
- group by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- สถานะไม่เป็น 'ยกเลิก'tx_est_snap_policy.policy_status <> 'C'
- tx_est_snap_policy.policy_status <> 'C'
- เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูล
- ตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- โดยต้อง sum ยอดเบี้ย และจำนวนสมาชิกภายใต้ policy_no และ policy_year เดียวกัน ดังนั้น แม้มีหลาย company_code ภายใต้ policy_no และ policy_year เดียวกัน ให้รวมเป็น 1 รายการ
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy (Step2) *กรณีพบกรมธรรม์ที่ข้อ 1 แล้วไม่ต้องดึงซ้ำ โดยกรองเงื่อนไข ดังนี้สถานะไม่เป็น 'ยกเลิก'policy_status <> 'C'เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- สถานะไม่เป็น 'ยกเลิก'policy_status <> 'C'
- policy_status <> 'C'
- เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูล
- ตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ดึงข้อมูลรายสมาชิกปัจจุบันจาก tx_est_snap_certificate_cust โดย left join ด้วยเงื่อนไข ดังนี้tx_est_snap_policy.policy_no= tx_est_snap_certificate_cust.policy_notx_est_snap_policy.policy_year= tx_est_snap_certificate_cust.policy_year
- tx_est_snap_policy.policy_no= tx_est_snap_certificate_cust.policy_no
- tx_est_snap_policy.policy_year= tx_est_snap_certificate_cust.policy_year
- รหัส treaty code สามารถอ่านได้จาก configure ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100
- ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | เงื่อนไขการบันทึก |
| Step1 | Step2 | Type | Size | ตารางบันทึกข้อมูล tx_stg_est_policy_1y | Step1 | Step2 | รูปแบบการบันทึก | Example |
| 1 | Period | รอบประมวลผล | tx_est_snap_unname_policy.period | tx_est_snap_policy.period | varchar | 6 | period | period | period |  |  |
| 2 | ReinsuredNo | เลขประกันภัยต่อ | tx_est_snap_unname_policy.reInsur_no | tx_est_snap_policy.reinsured_no | varchar | 10 | reinsured_no | reInsur_no | reinsured_no |  | 1701001 |
| 3 | PolicyNo | เลขที่กรมธรรม์ | tx_est_snap_unname_policy.policy_no | tx_est_snap_policy.policy_no | varchar | 8 | policy_no | policy_no | policy_no |  | GH1663 |
| 4 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_unname_policy.policy_year | tx_est_snap_policy.policy_year | numeric | 3 | policy_year | policy_year | policy_year |  | 18 |
| 5 | CommencementDate | วันเริ่มสัญญาครั้งแรก | tx_est_snap_policy.first_date | timestamp |  | first_date | first_date | first_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-11-15 |
| 6 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_est_snap_unname_policy.promise_date | tx_est_snap_policy.promise_date | timestamp |  | promise_date | promise_date | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-11-15 |
| 7 | EndDate | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | tx_est_snap_policy.expire_date | timestamp |  | expire_date | expire_date | expire_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-11-15 |
| 8 | PolicyStatus | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_est_snap_policy.policy_status | varchar | 20 | policy_status |  |  |  |  |
| 9 | ReportPolicyStatus | สถานะของกรมธรรม์ สำหรับออกรายงานให้ user | tx_est_snap_policy.policy_status |  | 20 | report_policy_status |  | แปลงค่าจาก tx_est_snap_policy.policy_status โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002400 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  | New Business |
| 10 | RIPolicyStatus | สถานะของกรมธรรม์ สำหรับ Group RI Click here to expand... ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | tx_est_snap_policy.policy_yeartx_est_snap_policy.expire_date | varchar | 20 | ri_policy_status |  | แปลงค่าจาก tx_est_snap_policy.policy_year และ tx_est_snap_policy.expire_dateกรณีกธ.ยังอยู่ในความคุ้มครองเงื่อนไข: tx_est_snap_policy.expire_date >= วันที่สิ้นเดือนของ Periodตรวจสอบปีกธ.กรณีปีกธ.ที่ 1 ให้บันทึกค่าเป็น 'New Business'กรณีปีกธ. > 1 ให้บันทึกค่าเป็น 'Inforce'กรณีกธ.ไม่อยู่ในความคุ้มครองเงื่อนไข: tx_est_snap_policy.expire_date < วันที่สิ้นเดือนของ Periodให้บันทึกค่าเป็น 'Lapsed'กรณีสถานะจาก snapshot เป็น L ลงสถานะเป็น Lapsed |  | New Business |
| 11 | NoOfMember | จำนวน member ทั้งหมด ที่ Active และ Inactive | sum(tx_est_snap_unname_policy.total_life_amt) sum(tx_est_snap_unname_policy.total_acc_amt) sum(tx_est_snap_unname_policy.total_med_amt) sum(tx_est_snap_unname_policy.total_tpd_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no | numeric | 8 | no_of_member | sum(total_life_amt ,total_acc_amt ,total_med_amt ,total_tpd_amt) | count(certific_cust_no) |  | 10 |
| 12 | NoOfMemberActive | จำนวน member ที่ active โดยพิจารณาจากรายการที่มีสถานะไม่อยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_life_amt) sum(tx_est_snap_unname_policy.total_acc_amt) sum(tx_est_snap_unname_policy.total_med_amt) sum(tx_est_snap_unname_policy.total_tpd_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status | numeric | 8 | no_of_member_active | sum(total_life_amt ,total_acc_amt ,total_med_amt ,total_tpd_amt) | count(certific_cust_no)where status NOT IN ('C','D','L') |  | 10 |
| 13 | NoOfMemberInactive | จำนวน member ที่ Inactive โดยพิจารณาจากรายการที่มีสถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | - | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status | numeric | 8 | no_of_member_inactive | 0 | count(certific_cust_no)where status IN ('C','D','L') |  | 10 |
| 14 | NoOfMemberLife | จำนวนสมาชิกที่มีทุนชีวิตที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_life_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status tx_est_snap_certificate_cust.life_insur | numeric | 8 | no_of_member_life | total_life_amt | count(certific_cust_no)where status NOT IN ('C','D','L')and life_insur > 0 |  | 10 |
| 15 | NoOfMemberAccidentDeath | จำนวนสมาชิกที่มีทุนอุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | sum(tx_est_snap_unname_policy.total_acc_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status tx_est_snap_certificate_cust.acc_insur | numeric | 8 | no_of_member_accident_death | total_acc_amt | count(certific_cust_no)where status NOT IN ('C','D','L')and acc_insur > 0 |  | 10 |
| 16 | NoOfMemberMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_med_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status tx_est_snap_certificate_cust.med_insur | numeric | 8 | no_of_member_med_accident | total_med_amt | count(certific_cust_no)where status NOT IN ('C','D','L')and med_insur > 0 |  | 10 |
| 17 | NoOfMemberTPD | จำนวนสมาชิกที่มีทุนทุพพลภาพที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_tpd_amt)where period_date = promise_date | tx_est_snap_certificate_cust.certific_cust_no tx_est_snap_certificate_cust.status tx_est_snap_certificate_cust.tpd_insur | numeric | 8 | no_of_member_tpd | total_tpd_amt | count(certific_cust_no)where status NOT IN ('C','D','L')and tpd_insur > 0 |  | 10 |
| 18 | SumInsuredLife | ทุนชีวิตรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_life_insur)where period_date = promise_date | tx_est_snap_certificate_cust.sum(life_insur) tx_est_snap_certificate_cust.status | numeric | 14,2 | sum_insured_life | total_life_insur | sum(life_insur)where status NOT IN ('C','D','L') |  | 10,000.00 |
| 19 | SumInsuredAccidentDeath | ทุนชีวิต อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_acc_insur)where period_date = promise_date | tx_est_snap_certificate_cust.sum(acc_insur) tx_est_snap_certificate_cust.status | numeric | 14,2 | sum_insured_accident_death | total_acc_insur | sum(acc_insur)where status NOT IN ('C','D','L') |  | 10,000.00 |
| 20 | SumInsuredMedAccident | ทุนค่ารักษาพยาบาลอุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | sum(tx_est_snap_unname_policy.total_med_insur)where period_date = promise_date | tx_est_snap_certificate_cust.sum(med_insur) tx_est_snap_certificate_cust.status | numeric | 14,2 | sum_insured_med_accident | total_med_insur | sum(med_insur)where status NOT IN ('C','D','L') |  | 10,000.00 |
| 21 | SumInsuredTPD | ทุนทุพพลภาพรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | sum(tx_est_snap_unname_policy.total_tpd_insur)where period_date = promise_date | tx_est_snap_certificate_cust.sum(tpd_insur) tx_est_snap_certificate_cust.status | numeric | 14,2 | sum_insured_tpd | total_tpd_insur | sum(tpd_insur)where status NOT IN ('C','D','L') |  | 10,000.00 |
| 22 | TreatyCode | รหัสประกันภัยต่อ | tx_est_snap_unname_policy.reInsur_no | tx_est_snap_policy.re_insur_no | varchar | 10 | treaty_code | reInsur_no | ระบบแปลงค่าจาก โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า ReInsur_No ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  | DAI_Grp_Daiichi_Coins |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992019 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-002 ข้อมูล กรรมธรรม์ ณ ต้นสัญญา > Process ข้อมูลกรรมธรรม์ ณ ต้นสัญญา (Estimate) > WS_RIG_002 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No | คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' | 1701001 |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1663 |
| 3 | PolicyYear | numeric | 3 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 18 |
| 4 | CommencementDate | date |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 15/11/2006 |
| 5 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 15/11/2023 |
| 6 | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 15/11/2024 |
| 7 | Status | varchar | 50 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed' | New Business |
| 8 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed' | New Business |
| 9 | NoOfMember | numeric | 8 | จำนวน member ทั้งหมด ที่ Active และ Inactive | RIG_View_CertInforce.count(CerNo)) | #,###นับจำนวนสมาชิกทั้งหมด | 10 |
| 10 | NoOfMemberActive | numeric | 8 | จำนวน member ที่ active โดยพิจารณาจากรายการที่มีสถานะไม่อยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.count(CerNo) | #,###นับจำนวนสมาชิกที่ Active เท่านั้น | 10 |
| 11 | NoOfMemberInactive | numeric | 8 | จำนวน member ที่ Inactive โดยพิจารณาจากรายการที่มีสถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.count(CerNo) | #,###นับจำนวนสมาชิกที่ Inactive เท่านั้น | 10 |
| 12 | NoOfMemberLife | numeric | 8 | จำนวนสมาชิกที่มีทุนชีวิตที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')LifePrem > 0 or LifeE1Prem > 0 or LifeE2Prem > 0) | #,###นับจำนวนสมาชิกที่ Active และทุนชีวิต > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 13 | NoOfMemberAccidentDeath | numeric | 8 | จำนวนสมาชิกที่มีทุนอุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')AccPrem > 0 or AccE2Prem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนอุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 14 | NoOfMemberMedAccident | numeric | 8 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')MedPrem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนค่ารักษาพยาบาล อุบัติเหตุ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 15 | NoOfMemberTPD | numeric | 8 | จำนวนสมาชิกที่มีทุนทุพพลภาพที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.count(CerNo)StatusMember NOT IN ('C','D','L')TPDPrem > 0 | #,###นับจำนวนสมาชิกที่ Active และทุนทุพพลภาพ > 0 เท่านั้นกรณีไม่มีข้อมูลแสดง - | 10 |
| 16 | SumInsuredLife | numeric | 14,2 | ทุนชีวิตรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.sum(LifeInsur)StatusMember NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 17 | SumInsuredAccidentDeath | numeric | 14,2 | ทุนชีวิต อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.sum(AccInsur)StatusMember NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 18 | SumInsuredMedAccident | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’’ | RIG_View_CertInforce.sum(MedInsur)StatusMember NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |
| 19 | SumInsuredTPD | numeric | 14,2 | ทุนทุพพลภาพรวมของสมาชิกที่ Active โดยพิจารณาจากรายการที่ ไม่มี สถานะอยู่ในกลุ่ม ‘C’, ‘D’ หรือ ‘L’ | RIG_View_CertInforce.sum(TPDInsur)StatusMember NOT IN ('C','D','L') | #,###.##กรณีไม่มีข้อมูลแสดง 0.00 | 10,000.00 |


===== PAGE 1291714686 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าธุรกรรม Claim ที่มีการพิจารณาแล้ว (Death,TPD,Health)จัดเตรียมข้อมูลสำหรับนำเข้าสินไหม โดยเป็นรายการเคลมที่ได้รับการพิจารณา ทั้งกรณีอนุมัติ และปฏิเสธสินไหมในเดือนนั้น ทั้งประเภท Death, TPD และ Health เพื่อใช้ในการประมวลผล |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-01,PS-02,PS-03,PS-04,PS-05,PS-06 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-02 Estimate - Snapshot Landing tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูลTreaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | แบ่งเป็นข้อมูลตามประเภทของสินไหมดังนี้Claim Death ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Death (Estimate) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimDeath.Approve_DateyyyyMM2022092PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH46393EffectiveDate datetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyy01/09/20224PolicyYearnumeric2ปีกรมธรรม์RIG_View_Policy.PolicyYear 75ReinsurNovarchar10เลขที่กรมธรรม์ประกันต่อRIG_View_Policy.ReInsur_No 18070036Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 016107Agenumeric2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 288Sexvarchar1เพศRIG_View_CertificateCust.sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimDeath.DeathDatedd/mm/yyyy (AD.)07/09/202210ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimDeath.Approve_Datedd/mm/yyyy (AD.)23/09/202211SumInsuredLifenumeric14,2ทุนประกันชีวิตRIG_View_CertificateCust.LifeInsur#,###.##300,000.0012SumInsuredAccidentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertificateCust.AccInsur#,###.##300,000.0013ClaimLifenumeric14,2เคลมชีวิตRIG_View_ClaimDeath.LifeInsur#,###.##300,000.0014ClaimAccidentnumeric14,2เคลมอุบัติเหตุRIG_View_ClaimDeath.AccInsur#,###.##300,000.0015TotalClaimnumeric14,2จำนวนเงินที่จ่ายclaim_life+claim_acc#,###.##300,000.0016Typevarchar10ประเภทรับแจ้งกำหนดให้มีค่า “Death”fix 'Death' Death17PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimDeath.PayDatedd/mm/yyyy (AD.)26/09/202218ClaimCausevarchar255สาเหตุการเคลมRIG_View_ClaimDeath.DeathCauseRemark Acute gastroenteritis19InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.0020ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimDeath.InformNo 25670181021ConsiderSeqint การพิจารณาเคลมครั้งที่RIG_View_ClaimDeath.ConsiderSeq Claim TPD/Dismemberment ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Dismemberment/TPD (Estimate) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimTPD.Approve_DateyyyyMM (AD.)2007052PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH17263ReinsurNovarchar10เลขที่กรมธรรม์ ประกันต่อRIG_View_Policy.ReInsur_No DG0094EffectiveDatedatetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)12/05/20075PolicyYearnumeric2ปีกรมธรรม์RIG_View_Policy.PolicyYear 26Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 006067Agenumeric2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 228Sexvarchar1เพศRIG_View_CertificateCust.sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimTPD.AccidentDatedd/mm/yyyy (AD.)27/05/200710ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimTPD.Approve_Datedd/mm/yyyy (AD.)27/05/200711SumInsuredLifenumeric14,2ทุนประกันชีวิตRIG_View_CertificateCust.LifeInsur#,###.##300,000.0012SumInsuredDismenbermentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertificateCust.AccInsur#,###.##300,000.0013SumInsuredTPDnumeric14,2ทุนประกันชีวิต ทุพพลภาพRIG_View_CertificateCust.TPDInsur#,###.##300,000.0014ClaimLifenumeric14,2เคลมชีวิตfix 0.00 0.0015ClaimAccidentnumeric14,2เคลมอุบัติเหตุRIG_View_ClaimTPD.Approve_ACCInsur#,###.##300,000.0016ClaimTPDnumeric14,2เคลมทุพพลภาพRIG_View_ClaimTPD.Approve_TPDInsur#,###.##300,000.0017TotalClaimnumeric14,2จำนวนเงินที่จ่ายclaim_acc+claim_tpd 300,000.0018Typevarchar10ประเภทรับแจ้งหาก ClaimStatus = 0 ให้จัดประเภทเป็น Dismembermentหาก ClaimStatus อยู่ในช่วง 1 หรือ 2 ให้จัดประเภทเป็น TPDRIG_View_ClaimTPD.ClaimStatusif RIG_View_ClaimTPD.ClaimStatus = 0 then 'Dismemberment'if RIG_View_ClaimTPD.ClaimStatus in (1,2) then 'TPD'TPD19PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimTPD.PayDatedd/mm/yyyy (AD.)28/05/200720ClaimCausevarchar80สาเหตุการเคลมRIG_View_ClaimTPD.AccidentCause Motor(อุบัติเหตุรถจักรยานยนต์)21InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.0022ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimTPD.InformNo 255200005Claim Health ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Health (Estimate) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimHealth.Approve_DateyyyyMM (AD.)2019092PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH19543ReinsurNovarchar10เลขที่กรมธรรม์ ประกันต่อRIG_View_Policy.ReInsur_No DG0714EffectiveDatedatetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)01/09/20195PolicyYearint2ปีกรมธรรม์RIG_View_Policy.PolicyYear 16Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 101977Ageint2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 258Sexvarchar1เพศRIG_View_CertificateCust.Sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimHealth.Accident_Datedd/mm/yyyy (AD.)01/09/201910ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimHealth.Approve_Datedd/mm/yyyy (AD.)21/09/201911ClaimAmountint14,2จำนวนเงินที่จ่ายRIG_View_ClaimHealth.Claim_Right#,###.##300,000.0012Typevarchar10ประเภทรับแจ้งRIG_View_ClaimHealth.ClaimTypeif RIG_View_ClaimHealth.RD_No = cf_claim_type.rd_no then cf_claim_type.claim_type_groupelse 'Other'ข้อมูลที่ Config สำหรับ grouping claim type ใน cf_claim_type.claim_type_groupcf_claim_type_idrd_noclaim_type_sourceclaim_type_groupstatusdescription120IPDIPDAการประกันสุขภาพ แบบผู้ป่วยใน221IPD-MPIPDAการประกันสุขภาพ แบบผู้ป่วยใน (เพิ่มเติมพิเศษ)322OPDOPDAการประกันแบบผู้ป่วยนอก423OPD-ERIPDAการประกันแบบผู้ป่วยนอกฉุกเฉิน524CHECK UPOPDAค่าตรวจสุขภาพประจำปี625DTDentalAคุ้มครองทันตกรรม726MED.ACCMedAccidentAการประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ830IPD-BCIPDAการคลอดบุตร931HBOPDAค่าชดเชยรายได้1032DABIPDAผลประโยชน์ค่าชดเชยรายได้รายวัน1133PandemicIPDAการประกันคุ้มครองโรคติดต่อ1241Exp-IPDIPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยใน1342Exp-OPDOPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยนอก1443Exp-EROPDAขยายความคุ้มครองผู้ป่วยนอกฉุกเฉิน1544Exp-IPD-BCIPDAขยายความคุ้มครองการคลอดบุตรIPD13PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimHealth.PayDatedd/mm/yyyy (AD.)22/09/201914ClaimCausevarchar80สาเหตุการเคลมRIG_View_ClaimHealth.Claim_Cause URI15ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimHealth.Notify_N 20090900000116InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.00 |


===== PAGE 1290404055 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Death (Estimate) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม ชีวิต (Life Claim) และ อุบัติเหตุเสียชีวิต (Accident Death) เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงเฉพาะสินไหมที่อยู่ในสถานะ อนุมัติ เท่านั้น
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติตรงกับเดือนปีตามรอบประมวลผล
- ไม่ดึงสินไหมที่ยังไม่ผ่านการพิจารณา หรือพิจารณานอกเดือนที่เลือก
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| Period | string | Require | ช่วงเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |

## Process
- ดึงข้อมูลสินไหมจาก tx_est_snap_claim_death โดยกรองเงื่อนไข ดังนี้ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claim_death.approve_claim มีค่าเท่ากับ 0ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claim_death.approve_date
- ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claim_death.approve_claim มีค่าเท่ากับ 0
- tx_est_snap_claim_death.approve_claim มีค่าเท่ากับ 0
- ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claim_death.approve_date
- tx_est_snap_claim_death.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy โดย Join ด้วยเงื่อนไขดังนี้tx_est_snap_policy.policy_no = tx_est_snap_claim_death.policy_notx_est_snap_policy.policy_year = tx_est_snap_claim_death.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.policy_no = tx_est_snap_claim_death.policy_no
- tx_est_snap_policy.policy_year = tx_est_snap_claim_death.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_est_snap_certificate_cust โดย Join ด้วยเงื่อนไขดังนี้
- tx_est_snap_certificate_cust.policy_no = tx_est_snap_claim_death.policy_no
- tx_est_snap_certificate_cust.policy_year = tx_est_snap_claim_death.policy_year
- tx_est_snap_certificate_cust.certific_cust_no = tx_est_snap_claim_death.certific_cust_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Type (Source) | Size | Description | Field | Outputtx_stg_est_death_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_est_snap_claim_death.period | period |  | 202209 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | tx_est_snap_claim_death.policy_no | policy_no |  | GH4639 |
| 3 | EffectiveDate | date |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_est_snap_policy.promise_date | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 4 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | tx_est_snap_claim_death.policy_year | policy_year |  | 7 |
| 5 | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ประกันต่อ | tx_est_snap_policy.re_insur_no | reinsure_no |  | 1807003 |
| 6 | Certno | varchar | 8 | หมายเลขสมาชิก | tx_est_snap_claim_death.certific_cust_no | certific_cust_no |  | 01610 |
| 7 | Age | numeric | 2 | อายุของผู้เอาประกัน | tx_est_snap_claim_death.attn_age | attn_age |  | 28 |
| 8 | Sex | varchar | 1 | เพศ1 = ผู้ชาย2 = ผู้หญิง | tx_est_snap_certificate_cust.sex | sex | แปลงค่าจาก tx_est_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | date |  | วันที่เกิดเหตุ | tx_est_snap_claim_death.death_date | death_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 10 | ApprovedDate | date |  | วันที่อนุมัติ | tx_est_snap_claim_death.approve_date | approve_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 11 | SumInsuredLife | numeric | 14,2 | ทุนชีวิต ตามแผน (ที่ซื้อ) | tx_est_snap_claim_death.life_insur_request | life_insur_request |  | 300,000.00 |
| 12 | SumInsuredAccident | numeric | 14,2 | ทุนอุบัติเหตุ ตามแผน (ที่ซื้อ) | tx_est_snap_claim_death.acc_insur_request | acc_insur_request |  | 300,000.00 |
| 13 | ClaimLife | numeric | 14,2 | เคลมชีวิตที่อนุมัติ | tx_est_snap_claim_death.life_insur | claim_life |  | 300,000.00 |
| 14 | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุที่อนุมัติ | tx_est_snap_claim_death.acc_insur | claim_acc |  | 300,000.00 |
| 15 | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_life+claim_acc | total_claim | ผลรวมของ tx_est_snap_claim_death.life_insur และ tx_est_snap_claim_death.acc_insur | 300,000.00 |
| 16 | Type | varchar | 10 | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | fix 'Death' | claim_type | fix 'Death' | Death |
| 17 | PaymentDate | date |  | วันที่จ่ายเงิน | tx_est_snap_claim_death.pay_date | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 18 | ClaimCause | varchar | 255 | สาเหตุการเคลม | tx_est_snap_claim_death.death_cause_remark | death_cause_remark |  | Acute gastroenteritis |
| 19 | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน |  | investigate_expense | fix 0 | 0.00 |
| 20 | ClaimNo | varchar | 12 | หมายเลขการเคลม | tx_est_snap_claim_death.inform_no | inform_no |  | 256701810 |
| 21 | TreatyCode | varchar | 50 | รหัสสัญญา | tx_est_snap_policy.re_insur_no | treaty_code | ระบบแปลงค่าจาก tx_est_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | DAI_Grp_Daiichi_Coins |
| 22 | ClassNo | numeric | 3 | Occupation class | tx_est_snap_certificate_cust.class_no | class_no |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992021 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Death (Estimate) > WS_RIG_003 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimDeath.Approve_Date | yyyyMM | 202209 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH4639 |
| 3 | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyy | 01/09/2022 |
| 4 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 7 |
| 5 | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ประกันต่อ | RIG_View_Policy.ReInsur_No |  | 1807003 |
| 6 | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 01610 |
| 7 | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 28 |
| 8 | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.sex | if 1 then 'M', if 2 the 'F' | F |
| 9 | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimDeath.DeathDate | dd/mm/yyyy (AD.) | 07/09/2022 |
| 10 | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimDeath.Approve_Date | dd/mm/yyyy (AD.) | 23/09/2022 |
| 11 | SumInsuredLife | numeric | 14,2 | ทุนประกันชีวิต | RIG_View_CertificateCust.LifeInsur | #,###.## | 300,000.00 |
| 12 | SumInsuredAccident | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertificateCust.AccInsur | #,###.## | 300,000.00 |
| 13 | ClaimLife | numeric | 14,2 | เคลมชีวิต | RIG_View_ClaimDeath.LifeInsur | #,###.## | 300,000.00 |
| 14 | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุ | RIG_View_ClaimDeath.AccInsur | #,###.## | 300,000.00 |
| 15 | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_life+claim_acc | #,###.## | 300,000.00 |
| 16 | Type | varchar | 10 | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | fix 'Death' |  | Death |
| 17 | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimDeath.PayDate | dd/mm/yyyy (AD.) | 26/09/2022 |
| 18 | ClaimCause | varchar | 255 | สาเหตุการเคลม | RIG_View_ClaimDeath.DeathCauseRemark |  | Acute gastroenteritis |
| 19 | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน | fix 0.00 |  | 0.00 |
| 20 | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimDeath.InformNo |  | 256701810 |
| 21 | ConsiderSeq | int |  | การพิจารณาเคลมครั้งที่ | RIG_View_ClaimDeath.ConsiderSeq |  |  |


===== PAGE 1291714840 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Dismemberment/TPD (Estimate) =====
Overview
Protocol
Operation
Input
Process
Query
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม Dismemberment และ TPD เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงเฉพาะสินไหมที่อยู่ในสถานะ อนุมัติ เท่านั้น
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติตรงกับเดือนปีตามรอบประมวลผล
- ไม่ดึงสินไหมที่ยังไม่ผ่านการพิจารณา หรือพิจารณานอกเดือนที่เลือก
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| period | string | Require | ช่วงเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |

## Process
- ดึงข้อมูลสินไหมจาก tx_est_snap_claimtpd โดยกรองเงื่อนไข ดังนี้ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claimtpd.approve_claim มีค่าเท่ากับ 0ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claimtpd.approve_date
- ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claimtpd.approve_claim มีค่าเท่ากับ 0
- tx_est_snap_claimtpd.approve_claim มีค่าเท่ากับ 0
- ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claimtpd.approve_date
- tx_est_snap_claimtpd.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy โดย Join ด้วยเงื่อนไขดังนี้tx_est_snap_policy.policy_no = tx_est_snap_claimtpd.policy_notx_est_snap_policy.policy_year = tx_est_snap_claimtpd.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.policy_no = tx_est_snap_claimtpd.policy_no
- tx_est_snap_policy.policy_year = tx_est_snap_claimtpd.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_est_snap_certificate_cust โดย Join ด้วยเงื่อนไขดังนี้
- tx_est_snap_certificate_cust.policy_no = tx_est_snap_claimtpd.policy_no
- tx_est_snap_certificate_cust.policy_year = tx_est_snap_claimtpd.policy_year
- tx_est_snap_certificate_cust.certific_cust_no = tx_est_snap_claimtpd.certific_cust_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Query
<![CDATA[with snap_claim_tpd as ( 
  select 
    rig_v_clm_tpd_id, period, policy_no, policy_year, certific_cust_no, attn_age, 
    accident_date, approve_date, acc_insur, tpd_insur, approve_acc_insur, 
    approve_tpd_insur, claim_status, pay_date, accident_cause, inform_no 
  from tx_est_snap_claimtpd 
  where approve_claim = 0 
    and approve_date between :periodStartDateMinus12Month and :periodLastDate 
), batch as ( 
  select * 
  from snap_claim_tpd 
  where rig_v_clm_tpd_id > coalesce(cast(:lastId as bigint), 0) 
  order by rig_v_clm_tpd_id 
  limit :limit 
), 
 inserted as ( 
insert into tx_stg_est_tpd_claim ( 
  rig_process_hd_id, 
  period, 
  policy_no, 
  reinsur_no, 
  promise_date, 
  policy_year, 
  certific_cust_no, 
  attn_age, 
  sex, 
  accident_date, 
  approved_date, 
  dismemberment_insur_request, 
  tpd_insur_request,
  life_insur, --new
  claim_accident, 
  claim_tpd, 
  total_claim, 
  claim_type, 
  pay_date, 
  claim_cause, 
  investigation_expense, 
  inform_no, 
  treaty_code, 
  class_no, 
  created_date, 
  created_by, 
  updated_date, 
  updated_by 
) 
select 
  :rigProcessHdId, 
  batch.\"period\", 
  batch.policy_no, 
  snap_policy.re_insur_no, 
  snap_policy.promise_date, 
  batch.policy_year, 
  batch.certific_cust_no, 
  batch.attn_age, 
  coalesce(sex_lkp.description, snap_cer_cust.sex) as sex, 
  batch.accident_date, 
  batch.approve_date as approved_date, 
  batch.acc_insur as dismemberment_insur_request, 
  batch.tpd_insur as tpd_insur_request, 
  snap_cer_cust.life_insur as life_insur --new
  batch.approve_acc_insur as claim_accident, 
  batch.approve_tpd_insur as claim_tpd,
  (coalesce(batch.approve_acc_insur, 0) + coalesce(batch.approve_tpd_insur, 0)) as total_claim, 
  coalesce(type_lkp.description, batch.claim_status::varchar) as claim_type, 
  batch.pay_date, 
  batch.accident_cause as claim_cause, 
  0 as investigation_expense, 
  batch.inform_no, 
  coalesce(treaty_lkp.description, snap_policy.re_insur_no) as treaty_code, 
  snap_cer_cust.class_no as class_no, 
  now(), :userName, now(), :userName 
from batch 
join tx_est_snap_policy snap_policy 
  on snap_policy.policy_no = batch.policy_no 
 and snap_policy.policy_year = batch.policy_year 
join tx_est_snap_certificate_cust snap_cer_cust 
  on snap_cer_cust.policy_no = batch.policy_no 
 and snap_cer_cust.policy_year = batch.policy_year 
 and snap_cer_cust.certific_cust_no = batch.certific_cust_no 
left join cf_lookup_catalog sex_lkp 
  on sex_lkp.parent_id = 1002500 
 and sex_lkp.lookup_key = snap_cer_cust.sex 
left join cf_lookup_catalog type_lkp 
  on type_lkp.parent_id = 1002700 
 and type_lkp.lookup_key = batch.claim_status::varchar 
left join lateral ( 
  select l.description 
  from cf_lookup_catalog l 
  where l.parent_id = 1000100 
    and ( 
      snap_policy.re_insur_no like l.lookup_key 
      or (l.lookup_key = '[0-9][0-9]%' and snap_policy.re_insur_no ~ '^[0-9]{2}') 
    ) 
  order by length(l.lookup_key) desc 
  limit 1 
) treaty_lkp on true 
where snap_policy.re_insur_no is not null 
  and snap_policy.re_insur_no <> '' 
returning 1 ) 
 select 
  (select count(*) from inserted) as insert_row_count, 
  (select max(rig_v_clm_tpd_id) from batch) as max_id ;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size (Source) | Outputtx_stg_est_tpd_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_est_snap_claimtpd.period | varchar | 5 | period |  | 1701001 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_est_snap_claimtpd.policy_no | varchar | 8 | policy_no |  | GH4639 |
| 3 | ReinsurNo | เลขที่กรมธรรม์ ประกันต่อ | tx_est_snap_policy.reinsure_no | varchar | 10 | reinsure_no |  |  |
| 4 | EffectiveDate | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_est_snap_policy.promise_date | date |  | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 5 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_claimtpd.policy_year | numeric | 2 | policy_year |  | 16 |
| 6 | Certno | หมายเลขสมาชิก | tx_est_snap_claimtpd.certific_cust_no | varchar | 8 | certific_cust_no |  | 01610 |
| 7 | Age | อายุของผู้เอาประกัน | tx_est_snap_claimtpd.attn_age | numeric | 2 | attn_age |  | 30 |
| 8 | Sex | เพศ | tx_est_snap_certificate_cust.sex | varchar | 1 | sex | แปลงค่าจาก tx_est_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | วันที่เกิดเหตุ | tx_est_snap_claimtpd.accident_date | date |  | accident_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 10 | ApprovedDate | วันที่อนุมัติ | tx_est_snap_claimtpd.approve_date | date |  | approved_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 12 | SumInsuredDismenberment | ทุนประกันชีวิต อุบัติเหตุ | tx_est_snap_claimtpd.acc_insur | numeric | 14,2 | dismemberment_insur_request |  |  |
| 13 | SumInsuredTPD | ทุนประกันชีวิต ทุพพลภาพ | tx_est_snap_claimtpd.tpd_insur | numeric | 14,2 | tpd_insur_request |  |  |
|  | SumInsuredLife | ทุนประกันชีวิต | tx_est_snap_certificate_cust.life_insur | numeric | 14,2 | life_insur |  |  |
| 15 | ClaimAccident | เคลมอุบัติเหตุ | tx_est_snap_claimtpd.approve_acc_insur | numeric | 14,2 | claim_accident |  |  |
| 16 | ClaimTPD | เคลมทุพพลภาพ | tx_est_snap_claimtpd.approve_tpd_insur | numeric | 14,2 | claim_tpd |  |  |
| 17 | TotalClaim | จำนวนเงินที่จ่าย |  | numeric | 14,2 | total_claim | ผลรวมของ tx_est_snap_claimtpd.approve_acc_insur และ tx_est_snap_claimtpd.approve_tpd_insur |  |
| 18 | Type | ประเภทรับแจ้ง0:สูญเสียอวัยวะ1:ทุพพลภาพทุกกรณี (TPD)2:ทุพพลภาพจากอุบัติเหตุ | tx_est_snap_claimtpd.claim_status | varchar | 20 | claim_type | แปลงค่าจาก tx_est_snap_claimtpd.claim_status โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002700 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  |
| 19 | PaymentDate | วันที่จ่ายเงิน | tx_est_snap_claimtpd.pay_date | date |  | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 20 | ClaimCause | สาเหตุการเคลม | tx_est_snap_claimtpd.accident_cause | varchar | 80 | claim_cause |  |  |
| 21 | InvestigationExpense | ค่าใช้จ่ายในการสืบสวน |  | numeric | 14,2 | investigation_expense | บันทึกค่า 0 | 0 |
| 22 | ClaimNo | หมายเลขการเคลม | tx_est_snap_claimtpd.inform_no | varchar | 12 | inform_no |  |  |
| 23 | TreatyCode | รหัสสัญญา | tx_est_snap_policy.re_insur_no | varchar | 50 | treaty_code | ระบบแปลงค่าจาก tx_est_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  |
| 22 | ClassNo | Occupation class | tx_est_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992023 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Dismemberment/TPD (Estimate) > WS_RIG_004 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimTPD.Approve_Date | yyyyMM (AD.) | 200705 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1726 |
| 3 | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ ประกันต่อ | RIG_View_Policy.ReInsur_No |  | DG009 |
| 4 | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 12/05/2007 |
| 5 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 2 |
| 6 | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 00606 |
| 7 | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 22 |
| 8 | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.sex | if 1 then 'M', if 2 the 'F' | F |
| 9 | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimTPD.AccidentDate | dd/mm/yyyy (AD.) | 27/05/2007 |
| 10 | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimTPD.Approve_Date | dd/mm/yyyy (AD.) | 27/05/2007 |
| 11 | SumInsuredLife | numeric | 14,2 | ทุนประกันชีวิต | RIG_View_CertificateCust.LifeInsur | #,###.## | 300,000.00 |
| 12 | SumInsuredDismenberment | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertificateCust.AccInsur | #,###.## | 300,000.00 |
| 13 | SumInsuredTPD | numeric | 14,2 | ทุนประกันชีวิต ทุพพลภาพ | RIG_View_CertificateCust.TPDInsur | #,###.## | 300,000.00 |
| 14 | ClaimLife | numeric | 14,2 | เคลมชีวิต | fix 0.00 |  | 0.00 |
| 15 | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุ | RIG_View_ClaimTPD.Approve_ACCInsur | #,###.## | 300,000.00 |
| 16 | ClaimTPD | numeric | 14,2 | เคลมทุพพลภาพ | RIG_View_ClaimTPD.Approve_TPDInsur | #,###.## | 300,000.00 |
| 17 | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_acc+claim_tpd |  | 300,000.00 |
| 18 | Type | varchar | 10 | ประเภทรับแจ้งหาก ClaimStatus = 0 ให้จัดประเภทเป็น Dismembermentหาก ClaimStatus อยู่ในช่วง 1 หรือ 2 ให้จัดประเภทเป็น TPD | RIG_View_ClaimTPD.ClaimStatus | if RIG_View_ClaimTPD.ClaimStatus = 0 then 'Dismemberment'if RIG_View_ClaimTPD.ClaimStatus in (1,2) then 'TPD' | TPD |
| 19 | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimTPD.PayDate | dd/mm/yyyy (AD.) | 28/05/2007 |
| 20 | ClaimCause | varchar | 80 | สาเหตุการเคลม | RIG_View_ClaimTPD.AccidentCause |  | Motor(อุบัติเหตุรถจักรยานยนต์) |
| 21 | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน | fix 0.00 |  | 0.00 |
| 22 | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimTPD.InformNo |  | 255200005 |


===== PAGE 1291714845 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Health (Estimate) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม Health เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงเฉพาะสินไหมที่อยู่ในสถานะ อนุมัติ เท่านั้น
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติตรงกับเดือนปีตามรอบประมวลผล
- ไม่ดึงสินไหมที่ยังไม่ผ่านการพิจารณา หรือพิจารณานอกเดือนที่เลือก
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| period | string | Require | ช่วงเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |

## Process
- ดึงข้อมูลสินไหมจาก tx_est_snap_claimhealth โดยกรองเงื่อนไข ดังนี้ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claimhealth.approve_claim in ('A0,'A1')ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claimhealth.approve_date
- ต้องมีสถานะเป็นอนุมัติ tx_est_snap_claimhealth.approve_claim in ('A0,'A1')
- tx_est_snap_claimhealth.approve_claim in ('A0,'A1')
- ต้องมีวันที่พิจารณาอยู่ภายในรอบประมวลผลtx_est_snap_claimhealth.approve_date
- tx_est_snap_claimhealth.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy โดย Join ด้วยเงื่อนไขดังนี้tx_est_snap_policy.policy_no = tx_est_snap_claimhealth.policy_notx_est_snap_policy.policy_year = tx_est_snap_claimhealth.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.policy_no = tx_est_snap_claimhealth.policy_no
- tx_est_snap_policy.policy_year = tx_est_snap_claimhealth.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_est_snap_policy.re_insur_no ต้องมีค่า
- tx_est_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_est_snap_certificate_cust โดย Join ด้วยเงื่อนไขดังนี้
- tx_est_snap_certificate_cust.policy_no = tx_est_snap_claimhealth.policy_no
- tx_est_snap_certificate_cust.policy_year = tx_est_snap_claimhealth.policy_year
- tx_est_snap_certificate_cust.certific_cust_no = tx_est_snap_claimhealth.certific_cust_no
- ดึงประเภทการเคลมจาก cf_claim_type โดย Join ด้วยเงื่อนไข ดังนี้cf_claim_type.rd_No = tx_est_snap_claimhealth.rd_no
- cf_claim_type.rd_No = tx_est_snap_claimhealth.rd_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้
- Left join ดึงยอดจ่ายจากระบบ cms ที่ tx_rig_est_claim_cmstx_est_snap_claimhealth.notify_no = tx_rig_est_claim_cms.claim_numbertx_est_snap_claimhealth.policy_no = tx_rig_est_claim_cms.policy_no
- tx_est_snap_claimhealth.notify_no = tx_rig_est_claim_cms.claim_number
- tx_est_snap_claimhealth.policy_no = tx_rig_est_claim_cms.policy_no

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Field | Type (Source) | Size | Outputtx_stg_est_health_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_est_snap_claimhealth.period | varchar | 5 | period | yyyyMM (AD.) | 201909 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_est_snap_claimhealth.policy_no | varchar | 8 | policy_no |  | GH1954 |
| 3 | ReinsurNo | เลขที่กรมธรรม์ ประกันต่อ | tx_est_snap_policy.re_insur_no | varchar | 10 | reinsure_no |  | DG071 |
| 4 | EffectiveDate | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_est_snap_policy.promise_date | date |  | effective_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 01/09/2019 |
| 5 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_claimhealth.policy_year | numeric | 2 | policy_year |  | 1 |
| 6 | Certno | หมายเลขสมาชิก | tx_est_snap_claimhealth.cerno | varchar | 8 | cert_no |  | 10197 |
| 7 | Age | อายุของผู้เอาประกัน | tx_est_snap_claimhealth.attn_age | numeric | 2 | age |  | 25 |
| 8 | Sex | เพศ | tx_est_snap_certificate_cust.sex | varchar | 1 | sex | แปลงค่าจาก tx_est_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | วันที่เกิดเหตุ | tx_est_snap_claimhealth.accident_date | date |  | accident_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 01/09/2019 |
| 10 | ApprovedDate | วันที่อนุมัติ | tx_est_snap_claimhealth.approve_date | date |  | approved_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 21/09/2019 |
| 11 | ClaimAmount | จำนวนเงินที่จ่าย | CASEWHEN tx_est_snap_claimhealth.pay_amount > 0 THEN GREATEST(COALESCE(tx_est_snap_claimhealth.pay_amount, 0) - COALESCE(tx_rig_est_claim_cms.client_paid, 0), 0) ELSE GREATEST(COALESCE(tx_rig_est_claim_cms.paid, 0) - COALESCE(tx_rig_est_claim_cms.client_paid, 0), 0)END AS claim_amountCASE WHEN tx_est_snap_claimhealth.pay_amount > 0 THENGREATEST(COALESCE(tx_est_snap_claimhealth.pay_amount, 0) - COALESCE(tx_rig_est_claim_cms.client_paid, 0), 0) ELSE -- เช็คว่าถ้าผลลัพธ์เป็น 0 ให้ไปใช้ claim_right แทน COALESCE( NULLIF(GREATEST(COALESCE(tx_rig_est_claim_cms.paid, 0) - COALESCE(tx_rig_est_claim_cms.client_paid, 0), 0), 0), tx_est_snap_claimhealth.claim_right, 0 )END AS claim_amount | numeric | 14,2 | claim_amount |  | 300,000.00 |
| 12 | Type | ประเภทรับแจ้ง | cf_claim_type.claim_type_group | varchar | 10 | claim_type | กรณีพบค่า cf_claim_type.claim_type_group ให้ใช้ค่าจาก cf_claim_type.claim_type_groupกรณีไม่พบค่า ให้บันทึกค่า 'Other' | IPD |
| 13 | PaymentDate | วันที่จ่ายเงิน | tx_est_snap_claimhealth.pay_date | date |  | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 22/09/2019 |
| 14 | ClaimCause | สาเหตุการเคลม | tx_est_snap_claimhealth.cause_detail | varchar | 255 | claim_cause |  | URI |
| 15 | ClaimNo | หมายเลขการเคลม | tx_est_snap_claimhealth.notify_no | varchar | 12 | notify_no |  | 200909000001 |
| 16 | InvestigationExpense | ค่าใช้จ่ายในการสืบสวน |  | numeric | 14,2 | investigation_expense | บันทึกค่า 0 | 0 |
| 17 | TreatyCode | รหัสสัญญา | tx_est_snap_policy.re_insur_no | varchar | 50 |  | ระบบแปลงค่าจาก tx_est_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า ReInsur_No ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | DAI_Grp_Daiichi_Coins |
| 18 | ClassNo | Occupation class | tx_est_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992026 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Health (Estimate) > WS_RIG_005 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | RIG_View_ClaimHealth.Approve_Date | yyyyMM (AD.) | 201909 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH1954 |
| 3 | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ ประกันต่อ | RIG_View_Policy.ReInsur_No |  | DG071 |
| 4 | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 01/09/2019 |
| 5 | PolicyYear | int | 2 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  | 1 |
| 6 | Certno | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertificateCust.CertificCustNo |  | 10197 |
| 7 | Age | int | 2 | อายุของผู้เอาประกัน | RIG_View_CertificateCust.Age |  | 25 |
| 8 | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.Sex | if 1 then 'M', if 2 the 'F' | F |
| 9 | AccidentDate | datetime |  | วันที่เกิดเหตุ | RIG_View_ClaimHealth.Accident_Date | dd/mm/yyyy (AD.) | 01/09/2019 |
| 10 | ApprovedDate | datetime |  | วันที่อนุมัติ | RIG_View_ClaimHealth.Approve_Date | dd/mm/yyyy (AD.) | 21/09/2019 |
| 11 | ClaimAmount | int | 14,2 | จำนวนเงินที่จ่าย | RIG_View_ClaimHealth.Claim_Right | #,###.## | 300,000.00 |
| 12 | Type | varchar | 10 | ประเภทรับแจ้ง | RIG_View_ClaimHealth.ClaimType | if RIG_View_ClaimHealth.RD_No = cf_claim_type.rd_no then cf_claim_type.claim_type_groupelse 'Other'ข้อมูลที่ Config สำหรับ grouping claim type ใน cf_claim_type.claim_type_groupcf_claim_type_idrd_noclaim_type_sourceclaim_type_groupstatusdescription120IPDIPDAการประกันสุขภาพ แบบผู้ป่วยใน221IPD-MPIPDAการประกันสุขภาพ แบบผู้ป่วยใน (เพิ่มเติมพิเศษ)322OPDOPDAการประกันแบบผู้ป่วยนอก423OPD-ERIPDAการประกันแบบผู้ป่วยนอกฉุกเฉิน524CHECK UPOPDAค่าตรวจสุขภาพประจำปี625DTDentalAคุ้มครองทันตกรรม726MED.ACCMedAccidentAการประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ830IPD-BCIPDAการคลอดบุตร931HBOPDAค่าชดเชยรายได้1032DABIPDAผลประโยชน์ค่าชดเชยรายได้รายวัน1133PandemicIPDAการประกันคุ้มครองโรคติดต่อ1241Exp-IPDIPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยใน1342Exp-OPDOPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยนอก1443Exp-EROPDAขยายความคุ้มครองผู้ป่วยนอกฉุกเฉิน1544Exp-IPD-BCIPDAขยายความคุ้มครองการคลอดบุตร | IPD |
| 13 | PaymentDate | datetime |  | วันที่จ่ายเงิน | RIG_View_ClaimHealth.PayDate | dd/mm/yyyy (AD.) | 22/09/2019 |
| 14 | ClaimCause | varchar | 80 | สาเหตุการเคลม | RIG_View_ClaimHealth.Claim_Cause |  | URI |
| 15 | ClaimNo | varchar | 12 | หมายเลขการเคลม | RIG_View_ClaimHealth.Notify_N |  | 200909000001 |
| 16 | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน | fix 0.00 |  | 0.00 |


===== PAGE 1299022376 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-004 ข้อมูล Estimated Premium Layer =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย และจัดแบ่งชั้นความคุ้มครอง (Layer 1–3) ตามช่วงทุนที่กำหนด พร้อมรวบรวมจำนวนสมาชิก ทุนคุ้มครอง และอัตราเบี้ยประกันภัยในแต่ละประเภท เพื่อใช้ในการคำนวณเบี้ย Reinsurance และประกอบการวิเคราะห์ความเสี่ยงของกรมธรรม์ โดยข้อมูลที่ได้จะครอบคลุมเลขกรมธรรม์ ช่วงวันที่คุ้มครอง การแบ่ง Layer ตามระดับทุน รวมถึงจำนวนสมาชิก ทุนคุ้มครองในแต่ละหมวด และอัตราเบี้ยต่อทุน 1,000 บาท ตลอดจนยอดเบี้ยประกันภัยของความคุ้มครองทุกประเภทภายในกรมธรรม์นั้น |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-02,PS-05 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-02 Estimate - Snapshot Landing tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูล โดยอ้างอิงจากปีและเดือนของ PromiseDate (วันเริ่มสัญญาของปีปัจจุบัน) เช่น หาก PromiseDate = ‘2025-09-30’ จะได้ Period = ‘202509’Treaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ที่ตรงตามรอบเดือน (Period) และการคัดกรองตามรหัสสัญญา (Treaty Code)ข้อมูลผลลัพธ์จะประกอบด้วยรายละเอียดกรมธรรม์ที่อยู่ในช่วงความคุ้มครองของปีปัจจุบันตาม PromiseDate และพร้อมสำหรับนำไปใช้ในการประมวลผล |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process EST-004 ข้อมูล Estimated Premium Layerระบบบันทึกข้อมูลที่ตาราง tx_stg_est_prem_layerNo.NameType (Source)SizeDescriptionFieldgroup by cf_layer_by_treaty.layer_of_sa,RIG_View_CertInforce.PolicyNoเงื่อนไขการบันทึกExample1Periodvarchar6รอบประมวลผลRIG_View_Policy.PromiseDateyyyyMM (AD.)2021042PolicyNovarchar8เลขที่กรมธรรม์RIG_View_Policy.PolicyNo GH0243EffectiveDatedatetime วันเริ่มสัญญาปีปัจจุบันRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)01/01/20254Levelvarchar2การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาทcf_layer_by_treaty.layer_of_sa L15AmountLifenumeric14,0จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)1176AmountAccidentnumeric14,0จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)1177AmountMedAccidentnumeric14,0จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.008AmountTPDnumeric14,0จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.009LifeInsurenumeric14,2ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.LifeInsur)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0010AccidentInsurenumeric14,2ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.AccInsur)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0011MedAccidentInsurenumeric14,2ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.MedInsur)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0012TPDInsurenumeric14,2ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.TPDInsur)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0013LifePremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาทRIG_View_Policy.LifePremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)3.3014AccidentPremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาทRIG_View_Policy.AccPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4315MedAccidentPremium Ratenumeric14,414,2Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาทRIG_View_Policy.MedPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4316TPDPremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาทRIG_View_Policy.TPDPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4317LifePremiumnumeric14,2เบี้ยของความคุ้มครองชีวิตsum(RIG_View_CertInforce.LifePrem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)38,610.0018LifeExtraPremiumnumeric14,2เบี้ยของความคุ้มครองชีวิต (Extra)sum(RIG_View_CertInforce.LifeE1Prem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)0.0019AccidentPremiumnumeric14,2เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปีsum(RIG_View_CertInforce.AccPrem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)16,731.0020AccidentExtraPremiumnumeric14,2เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปีsum(RIG_View_CertInforce.AccE2Prem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)0.0021MedAccidentPremiumnumeric14,2เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุsum(RIG_View_CertInforce.MedAccPrem)where RIG_View_CertInforce.MedAccPrem <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedAccPrem > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)16,731.0022TPDPremiumnumeric14,2เบี้ยของความคุ้มครองทุพพลภาพsum(RIG_View_CertInforce.TPDPrem)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)16,731.0023IPDPremiumnumeric14,2เบี้ยของความคุ้มครองผู้ป่วยในsum(RIG_View_CertInforce.IPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.0024OPD Premiumnumeric14,2เบี้ยของความคุ้มครองผู้ป่วยนอกsum(RIG_View_CertInforce.OPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.0025Dental Premiumnumeric14,2เบี้ยของความคุ้มครองทันตกรรมsum(RIG_View_CertInforce.DentalPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.00 |


===== PAGE 1291976971 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-004 ข้อมูล Estimated Premium Layer > Process ข้อมูล Estimated Premium Layer =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูล Estimated Premium Layer>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_est_snap_policy โดยกรองเงื่อนไข ดังนี้
- สถานะกรมธรรม์มีผล
- policy_status not in ('L','C')
- ไม่ใช่กรมธรรม์ GL
- policy code <> 2
- ดึงข้อมูลสมาชิก โดยแบ่งเป็น 3 กลุ่ม และตรวจสอบตามลำดับ หากพบข้อมูลในกลุ่มลำดับที่ 1 ให้ใช้ข้อมูลจากกลุ่มนั้นทันที หากไม่พบจึงพิจารณากลุ่มถัดไปตามลำดับStep 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_unname_policy โดยเงื่อนไขการ Join ดังนี้tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_notx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_yeartx_est_snap_unname_policy.period_date = tx_est_snap_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_dateStep 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_snap_cert_inforce.policy_no = tx_est_snap_policy.policy_notx_snap_cert_inforce.policy_year = tx_est_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1Step 3: ข้อมูลสมาชิกปัจจุบันเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_est_snap_certificate_cust.policy_no = tx_est_snap_policy.policy_notx_est_snap_certificate_cust.policy_year = tx_est_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')Step 4: ข้อมูลสมาชิก New businessเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_cert_newbusiness โดยเงื่อนไขการ Join ดังนี้tx_est_snap_cert_newbusiness.policy_no = tx_est_snap_cert_newbusiness.policy_notx_est_snap_cert_newbusiness.policy_year = tx_est_snap_cert_newbusiness.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_cert_newbusiness.status in ('B')
- Step 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_unname_policy โดยเงื่อนไขการ Join ดังนี้tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_notx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_yeartx_est_snap_unname_policy.period_date = tx_est_snap_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_unname_policy โดยเงื่อนไขการ Join ดังนี้tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_notx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_yeartx_est_snap_unname_policy.period_date = tx_est_snap_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- tx_est_snap_unname_policy.policy_no = tx_est_snap_policy.policy_no
- tx_est_snap_unname_policy.policy_year = tx_est_snap_policy.policy_year
- tx_est_snap_unname_policy.period_date = tx_est_snap_policy.promise_date
- group by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- Step 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_snap_cert_inforce.policy_no = tx_est_snap_policy.policy_notx_snap_cert_inforce.policy_year = tx_est_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_snap_cert_inforce.policy_no = tx_est_snap_policy.policy_notx_snap_cert_inforce.policy_year = tx_est_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- tx_snap_cert_inforce.policy_no = tx_est_snap_policy.policy_no
- tx_snap_cert_inforce.policy_year = tx_est_snap_policy.policy_year
- กรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- tx_snap_cert_inforce.lot_no = 1
- Step 3: ข้อมูลสมาชิกปัจจุบันเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_est_snap_certificate_cust.policy_no = tx_est_snap_policy.policy_notx_est_snap_certificate_cust.policy_year = tx_est_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_est_snap_certificate_cust.policy_no = tx_est_snap_policy.policy_notx_est_snap_certificate_cust.policy_year = tx_est_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- tx_est_snap_certificate_cust.policy_no = tx_est_snap_policy.policy_no
- tx_est_snap_certificate_cust.policy_year = tx_est_snap_policy.policy_year
- กรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- tx_est_snap_certificate_cust .status in ('I','B')
- Step 4: ข้อมูลสมาชิก New businessเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_cert_newbusiness โดยเงื่อนไขการ Join ดังนี้tx_est_snap_cert_newbusiness.policy_no = tx_est_snap_cert_newbusiness.policy_notx_est_snap_cert_newbusiness.policy_year = tx_est_snap_cert_newbusiness.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_cert_newbusiness.status in ('B')
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_est_snap_cert_newbusiness โดยเงื่อนไขการ Join ดังนี้tx_est_snap_cert_newbusiness.policy_no = tx_est_snap_cert_newbusiness.policy_notx_est_snap_cert_newbusiness.policy_year = tx_est_snap_cert_newbusiness.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_cert_newbusiness.status in ('B')
- tx_est_snap_cert_newbusiness.policy_no = tx_est_snap_cert_newbusiness.policy_no
- tx_est_snap_cert_newbusiness.policy_year = tx_est_snap_cert_newbusiness.policy_year
- กรองสถานะสมาชิกต้องมีผลtx_est_snap_cert_newbusiness.status in ('B')
- tx_est_snap_cert_newbusiness.status in ('B')
- สำหรับข้อมูลลำดับที่ 2, 3 และ 4 จะต้องมีการจัดกลุ่มสมาชิกตาม Layer ที่กำหนด ตามเงื่อนไขทุนชีวิตของแต่ละรายสมาชิก ตัวอย่าง ปัจจุบันมี 3 LayersLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้นดึงข้อมูล ri condition เพื่อใช้กำหนดเรททุน Layerดึงข้อมูลจาก cf_rig_condition_dtlookup ดังนี้ Click here to expand... cf_rig_condition_dt.cf_rig_treaty_cond_hd_id = cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idcf_rig_treaty.treaty_code = **tx_est_snap_policy.re_insur_no (cf_lookup_catalog.description where parent_id = 1000100)**พิจารณาจาก อักขระ 2 หลักแรก ของค่า tx_est_snap_policy.re_insur_noนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description ให้พิจารณาทุนชีวิตของสมาชิก แล้วจับคู่กับช่วงของ Layerสมาชิกจะอยู่ใน Layer ใด เมื่อ ทุน (LifeInsure,AccidentInsure,MedAccidentInsure,TPDInsure) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximumกรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0
- ตัวอย่าง ปัจจุบันมี 3 LayersLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูล ri condition เพื่อใช้กำหนดเรททุน Layerดึงข้อมูลจาก cf_rig_condition_dtlookup ดังนี้ Click here to expand... cf_rig_condition_dt.cf_rig_treaty_cond_hd_id = cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idcf_rig_treaty.treaty_code = **tx_est_snap_policy.re_insur_no (cf_lookup_catalog.description where parent_id = 1000100)**พิจารณาจาก อักขระ 2 หลักแรก ของค่า tx_est_snap_policy.re_insur_noนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description
- ดึงข้อมูลจาก cf_rig_condition_dtlookup ดังนี้ Click here to expand... cf_rig_condition_dt.cf_rig_treaty_cond_hd_id = cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idcf_rig_treaty.treaty_code = **tx_est_snap_policy.re_insur_no (cf_lookup_catalog.description where parent_id = 1000100)**พิจารณาจาก อักขระ 2 หลักแรก ของค่า tx_est_snap_policy.re_insur_noนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description
- lookup ดังนี้ Click here to expand... cf_rig_condition_dt.cf_rig_treaty_cond_hd_id = cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id cf_rig_treaty_cond_hd.cf_rig_treaty_id = cf_rig_treaty.cf_rig_treaty_idcf_rig_treaty.treaty_code = **tx_est_snap_policy.re_insur_no (cf_lookup_catalog.description where parent_id = 1000100)**พิจารณาจาก อักขระ 2 หลักแรก ของค่า tx_est_snap_policy.re_insur_noนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description
- นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description
- ให้พิจารณาทุนชีวิตของสมาชิก แล้วจับคู่กับช่วงของ Layerสมาชิกจะอยู่ใน Layer ใด เมื่อ ทุน (LifeInsure,AccidentInsure,MedAccidentInsure,TPDInsure) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximumกรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0
- สมาชิกจะอยู่ใน Layer ใด เมื่อ ทุน (LifeInsure,AccidentInsure,MedAccidentInsure,TPDInsure) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- กรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input ข้อมูล | เงื่อนไขการบันทึก |
| Step 1 | Step 2 | Step 3 | Step 4 | Type | Size | Outputtx_stg_est_prem_layer | Step 1 | Step 2 | Step 3 | Step 4 | รูปแบบการบันทึก | Example |
| 1 | Period | รอบประมวลผล | tx_est_snap_policy.period | varchar | 6 | period |  |  |  |  | yyyyMM (AD.) | 202104 |
| 2 | PolicyNo | เลขที่กรมธรรม์ | tx_est_snap_policy.policy_no | varchar | 8 | policy_no |  |  |  |  |  | GH024 |
| 3 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_est_snap_policy.promise_date | datetime |  | effective_date |  |  |  |  | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ Click here to expand... จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | Default = 1 | cf_rig_condition_dt.layer | varchar | 2 | level |  |  |  |  |  | L1 |
| 5 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_life_amt)where period_date = promise_date | tx_snap_cert_inforce.cer_notx_snap_cert_inforce.life_insur | tx_est_snap_certificate_cust.cer_notx_est_snap_certificate_cust.life_insur | tx_est_snap_cert_newbusiness.cust_codetx_est_snap_cert_newbusiness.life_insur | numeric | 14,0 | amount_life | total_life_amt | count(cer_no)where life_insur > 0 | count(cer_no)where life_insur > 0 | count(cer_no)where life_insur > 0 | #,###.##coalesce(#,0) | 117 |
| 6 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_acc_amt)where period_date = promise_date | tx_snap_cert_inforce.cer_notx_snap_cert_inforce.acc_insurtx_snap_cert_inforce.age | tx_est_snap_certificate_cust.cer_notx_est_snap_certificate_cust.acc_insurtx_est_snap_certificate_cust.age | tx_est_snap_cert_newbusiness.cust_codetx_est_snap_cert_newbusiness.acc_insurtx_est_snap_cert_newbusiness.age | numeric | 14,0 | amount_accident | total_acc_amt | count(cer_no)where acc_insur > 0 and age <=70 | count(cer_no)where acc_insur > 0 and age <=70 | count(cust_code)where life_insur > 0 and age <=70 | #,###.##coalesce(#,0) | 117 |
| 7 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_med_amt)where period_date = promise_date | tx_snap_cert_inforce.cer_notx_snap_cert_inforce.med_insur | tx_est_snap_certificate_cust.cer_notx_est_snap_certificate_cust.med_insur | tx_est_snap_cert_newbusiness.cust_codetx_est_snap_cert_newbusiness.med_insur | numeric | 14,0 | amount_med_accident | total_med_amt | count(cer_no)where med_insur > 0 | count(cer_no)where med_insur > 0 | count(cust_code)where med_insur > 0 | #,###.##coalesce(#,0) | 11,700,000.00 |
| 8 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_tpd_amt)where period_date = promise_date | tx_snap_cert_inforce.cer_notx_snap_cert_inforce.tpd_insur | tx_est_snap_certificate_cust.cer_notx_est_snap_certificate_cust.tpd_insur | tx_est_snap_cert_newbusiness.cust_codetx_est_snap_cert_newbusiness.tpd_insur | numeric | 14,0 | amount_tpd | total_tpd_amt | count(cer_no)where tpd_insur > 0 | count(cer_no)where tpd_insur > 0 and | count(cust_code)where tpd_insur > 0 and | #,###.##coalesce(#,0) | 11,700,000.00 |
| 9 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_life_insur)where period_date = promise_date | tx_snap_cert_inforce.life_insur | tx_est_snap_certificate_cust.life_insur | tx_est_snap_cert_newbusiness.life_insur | numeric | 14,2 | life_insure | total_life_insur | sum(life_insur) | sum(life_insur) | sum(life_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 10 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_acc_insur)where period_date = promise_date | tx_snap_cert_inforce.acc_insurtx_snap_cert_inforce.age | tx_est_snap_certificate_cust.acc_insurtx_est_snap_certificate_cust.age | tx_est_snap_cert_newbusiness.acc_insurtx_est_snap_cert_newbusiness.age | numeric | 14,2 | accident_insure | total_acc_insur | sum(acc_insur)where age <=70 | sum(acc_insur)where age <=70 | sum(acc_insur)where age <=70 | #,###.##coalesce(#,0) | 11,700,000.00 |
| 11 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_med_insur)where period_date = promise_date | tx_snap_cert_inforce.med_insur | tx_est_snap_certificate_cust.med_insurtx_est_snap_certificate_cust.status | tx_est_snap_cert_newbusiness.cust_codetx_est_snap_cert_newbusiness.med_insur | numeric | 14,2 | med_accident_insure | total_med_insur | sum(med_insur) | sum(med_insur) | sum(med_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 12 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_est_snap_unname_policy.total_tpd_insur)where period_date = promise_date | tx_snap_cert_inforce.tpd_insur | tx_est_snap_certificate_cust.tpd_insur | tx_est_snap_cert_newbusiness.tpd_insur | numeric | 14,2 | tpd_insure | total_tpd_insur | sum(tpd_insur) | sum(tpd_insur) | sum(tpd_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 13 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | life_prem_rate | life_prem_rate | life_prem_rate | life_prem_rate | life_prem_rate | #,###.##coalesce(#,0) | 3.3 |
| 14 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | accident_prem_rate | acc_prem_rate | acc_prem_rate | acc_prem_rate | acc_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 15 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | med_accident_prem_rate | med_prem_rate | med_prem_rate | med_prem_rate | med_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 16 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_est_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_est_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 tx_est_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | tpd_prem_rate | tpd_prem_rate | tpd_prem_rateer | tpd_prem_rate | tpd_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 17 | LifePremium | เบี้ยของความคุ้มครองชีวิต | sum(tx_est_snap_unname_policy.total_life)group by policy_no | tx_snap_cert_inforce.life_premtx_snap_cert_inforce.life_insur | tx_est_snap_certificate_cust.life_premtx_est_snap_certificate_cust.life_insur | tx_est_snap_cert_newbusiness.life_premtx_est_snap_cert_newbusiness.life_insur | numeric | 14,2 | life_prem | total_life | sum(life_prem) | sum(life_prem) | sum(life_prem) | #,###.##coalesce(#,0) | 38,610.00 |
| 18 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | sum(tx_est_snap_unname_policy.total_e1_net)group by policy_no | tx_snap_cert_inforce.life_e1_premtx_snap_cert_inforce.life_insur | tx_est_snap_certificate_cust.life_e1_premtx_est_snap_certificate_cust.life_insur | tx_est_snap_cert_newbusiness.life_e1_premtx_est_snap_cert_newbusiness.life_insur | numeric | 14,2 | life_extra_prem | total_e1_net | sum(life_e1_prem) | sum(life_e1_prem) | sum(life_e1_prem) | #,###.##coalesce(#,0) | 0 |
| 19 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(tx_est_snap_unname_policy.total_acc)group by policy_no | tx_snap_cert_inforce.acc_prem | tx_est_snap_certificate_cust.acc_prem | tx_est_snap_cert_newbusiness.acc_prem | numeric | 14,2 | accident_prem | total_acc | sum(acc_prem)where age <=70 | sum(acc_prem)where age <=70 | sum(acc_prem)where age <=70 | #,###.##coalesce(#,0) | 16,731.00 |
| 20 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 0 | 0 | 0 | 0 | numeric | 14,2 | accident_extra_prem | 0 | 0 | 0 | 0 | #,###.##coalesce(#,0) | 0 |
| 21 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | sum(tx_est_snap_unname_policy.total_med)group by policy_no | tx_snap_cert_inforce.med_acc_prem | tx_est_snap_certificate_cust.med_acc_prem | tx_est_snap_cert_newbusiness.med_prem | numeric | 14,2 | med_accident_prem | total_med | sum(med_acc_prem) | sum(med_acc_prem) | sum(med_prem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 22 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | sum(tx_est_snap_unname_policy.total_tpd)group by policy_no | tx_snap_cert_inforce.tpd_prem | tx_est_snap_certificate_cust.tpd_prem | tx_est_snap_cert_newbusiness.tpd_prem | numeric | 14,2 | tpd_prem | total_tpd | sum(tpd_prem) | sum(tpd_prem) | sum(tpd_prem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 23 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | sum(tx_est_snap_unname_policy.total_ipd)group by policy_no | tx_snap_cert_inforce.ipd_premtx_snap_cert_inforce.policy_no | tx_est_snap_certificate_cust.med_plan_rate_ip_premtx_est_snap_certificate_cust.policy_no | tx_est_snap_cert_newbusiness.med_plan_rate_ip_premtx_est_snap_cert_newbusiness.statustx_est_snap_cert_newbusiness.policy_no | numeric | 14,2 | ipd_prem | total_ipd | sum(ipd_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_ip_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_ip_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 24 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | sum(tx_est_snap_unname_policy.total_opd)group by policy_no | tx_snap_cert_inforce.opd_premtx_snap_cert_inforce.policy_no | tx_est_snap_certificate_cust.med_plan_rate_op_premtx_est_snap_certificate_cust.policy_no | tx_est_snap_cert_newbusiness.med_plan_rate_op_premtx_est_snap_cert_newbusiness.policy_no | numeric | 14,2 | opd_prem | total_opd | sum(opd_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_op_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_op_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 25 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | sum(tx_est_snap_unname_policy.total_dental)group by policy_no | tx_snap_cert_inforce.dental_premtx_snap_cert_inforce.policy_no | tx_est_snap_certificate_cust.dentaltx_snap_cert_inforce.policy_no | tx_est_snap_cert_newbusiness.dentaltx_est_snap_cert_newbusiness.policy_no | numeric | 14,2 | dental_prem | dental | sum(dental_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(dental) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(dental) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992031 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-004 ข้อมูล Estimated Premium Layer > Process ข้อมูล Estimated Premium Layer > WS_RIG_006 Output =====
| No. | Name | Type (Source) | Size | Description | Fieldgroup by cf_layer_by_treaty.layer_of_sa,RIG_View_CertInforce.PolicyNo | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 6 | รอบประมวลผล | RIG_View_Policy.PromiseDate | yyyyMM (AD.) | 202104 |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH024 |
| 3 | EffectiveDate | datetime |  | วันเริ่มสัญญาปีปัจจุบัน | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | Level | varchar | 2 | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | cf_layer_by_treaty.layer_of_sa |  | L1 |
| 5 | AmountLife | numeric | 14,0 | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 117 |
| 6 | AmountAccident | numeric | 14,0 | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 117 |
| 7 | AmountMedAccident | numeric | 14,0 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 8 | AmountTPD | numeric | 14,0 | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 9 | LifeInsure | numeric | 14,2 | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.LifeInsur)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 10 | AccidentInsure | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.AccInsur)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 11 | MedAccidentInsure | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.MedInsur)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 12 | TPDInsure | numeric | 14,2 | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(RIG_View_CertInforce.TPDInsur)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 11,700,000.00 |
| 13 | LifePremiumRate | numeric | 14,414,2 | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | RIG_View_Policy.LifePremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.####coalesce(#,0) | 3.30 |
| 14 | AccidentPremiumRate | numeric | 14,414,2 | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | RIG_View_Policy.AccPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.####coalesce(#,0) | 1.43 |
| 15 | MedAccidentPremium Rate | numeric | 14,414,2 | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | RIG_View_Policy.MedPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.####coalesce(#,0) | 1.43 |
| 16 | TPDPremiumRate | numeric | 14,414,2 | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | RIG_View_Policy.TPDPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.####coalesce(#,0) | 1.43 |
| 17 | LifePremium | numeric | 14,2 | เบี้ยของความคุ้มครองชีวิต | sum(RIG_View_CertInforce.LifePrem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 38,610.00 |
| 18 | LifeExtraPremium | numeric | 14,2 | เบี้ยของความคุ้มครองชีวิต (Extra) | sum(RIG_View_CertInforce.LifeE1Prem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 0.00 |
| 19 | AccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(RIG_View_CertInforce.AccPrem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 16,731.00 |
| 20 | AccidentExtraPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(RIG_View_CertInforce.AccE2Prem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0) | 0.00 |
| 21 | MedAccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | sum(RIG_View_CertInforce.MedAccPrem)where RIG_View_CertInforce.MedAccPrem <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedAccPrem > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0.00) | 16,731.00 |
| 22 | TPDPremium | numeric | 14,2 | เบี้ยของความคุ้มครองทุพพลภาพ | sum(RIG_View_CertInforce.TPDPrem)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0.00) | 16,731.00 |
| 23 | IPDPremium | numeric | 14,2 | เบี้ยของความคุ้มครองผู้ป่วยใน | sum(RIG_View_CertInforce.IPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0.00) | 100,000.00 |
| 24 | OPD Premium | numeric | 14,2 | เบี้ยของความคุ้มครองผู้ป่วยนอก | sum(RIG_View_CertInforce.OPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0.00) | 100,000.00 |
| 25 | Dental Premium | numeric | 14,2 | เบี้ยของความคุ้มครองทันตกรรม | sum(RIG_View_CertInforce.DentalPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.##coalesce(#,0.00) | 100,000.00 |


===== PAGE 1292239021 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-005 ข้อมูล (R01) List of inforce by member =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | จัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by memberโดยดึงข้อมูลสำคัญที่เกี่ยวข้องกับความคุ้มครองของสมาชิก ได้แก่ เลขกรมธรรม์ ช่วงวันที่คุ้มครอง หมายเลขสมาชิก เพศ อายุ รวมถึงทุนคุ้มครองประเภทต่าง ๆ เช่น ทุนประกันชีวิตและทุนอุบัติเหตุ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-03,PS-06 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-02 Estimate - Snapshot Landing tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูล โดยจับจาก ปี/เดือน ของ PromiseDate (วันเริ่มสัญญาปีปัจจุบัน) เช่นวันที่ '2025-09-30'จะได้ Period = '202509'Treaty Code = รหัสสัญญาประกันภัยต่อที่ใช้สำหรับคัดกรองข้อมูลกรมธรรม์ตามสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายละเอียดของสมาชิกภายใต้กรมธรรม์ที่ตรงกับงวดข้อมูล (Period) และรหัสสัญญา (Treaty Code) ที่ระบุ โดยข้อมูลจะประกอบด้วยเลขกรมธรรม์ ช่วงวันที่คุ้มครอง หมายเลขสมาชิก เพศ อายุ รวมถึงทุนคุ้มครองประเภทต่าง ๆ เช่น ทุนประกันชีวิตและทุนอุบัติเหตุ*ไม่มีรายการสมาชิกที่เป็น Alteration |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก WS_RIG_007 ข้อมูล (R01) List of inforce by member ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลระบบบันทึกข้อมูลที่ตาราง tx_stg_est_inforce_memberNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodnumeric6Period รอบประมวลผลข้อมูลที่กำหนดจากเดือนและปีของวันที่เริ่มมีผลคุ้มครองของสมาชิก โดยระบบจะนำปีและเดือนของ PromiseDate มาแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นตัวระบุงวดข้อมูลของกรมธรรม์หรือสมาชิกในรอบนั้นตัวอย่าง:EffectDate = 2025-01-15 → Period = 202501RIG_View_Policy.PromiseDatePolicyStatus not in ('L',C')yyyyMM (AD.)2025012PolicyNovarchar20เลขกรมธรรม์RIG_View_CertInforce.PolicyNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') 3EffectiveDatedatetime วันที่คุ้มครองRIG_View_CertInforce.PromiseDatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')dd/mm/yyyy (AD.)01/01/20254PolicyYearnumeric4ปีกรมธรรม์RIG_View_Policy.PolicyYearPolicyStatus not in ('L',C') 15CertNovarchar20หมายเลขสมาชิกRIG_View_CertInforce.CerNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') 000016Sexvarchar1เพศRIG_View_CertInforce.SexPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')if RIG_View_CertInforce.Sex = 1 then 'M'if RIG_View_CertInforce.Sex = 2 then 'F'M7Agenumeric2อายุRIG_View_CertInforce.AgePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')##348SumInsuredAccidentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertInforce.AccInsurPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.00coalesce(#,0.00)1,000.15 |


===== PAGE 1299022576 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-005 ข้อมูล (R01) List of inforce by member > Process ข้อมูล (R01) List of inforce by member (Estimate) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก DataOne (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | group ri | tx_est_snap_cert_inforce | ข้อมูลสมาชิกในกรมธรรม์ประกันกลุ่ม | tx_est_snap_cert_inforce.status_member in ('I','B')tx_est_snap_cert_inforce.lot_no = 1 (ข้อมูลต้นสัญญาสำหรับใบเสร็จใบแรก) |
| 2 | group ri | tx_est_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_est_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%"tx_est_snap_policy.promise_date |
| 3 | group ri | tx_est_snap_prem_rate | ข้อมูลอัตราเบี้ย | x_est_snap_prem_rate.policy_notx_est_snap_prem_rate.policy_year |
- ดึงข้อมูลจาก tx_est_snap_policyเฉพาะ tx_est_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- เฉพาะ tx_est_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26
- เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปีตามเงื่อนไขต้นสัญญาใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ใช้ tx_est_snap_policy.promise_date เป็นเงื่อนไขในการกำหนดช่วงข้อมูลตัวอย่าง เมื่อเลือก Period = '202501'ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ระบบจะดึงข้อมูลที่มี promise_date อยู่ระหว่างวันที่ 1 กุมภาพันธ์ 2024 ถึง 31 มกราคม 2025
- ดึงข้อมูลรายสมาชิกปัจจุบันจาก tx_est_snap_cert_inforceโดย left join ด้วยเงื่อนไขtx_est_snap_policy.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_policy.policy_year = tx_est_snap_cert_inforce.policy_yearกรองเงื่อนไขสถานะสมาชิกมีผลที่ tx_est_snap_cert_inforce.status_member in ('I','B') และเลือกข้อมูลต้นสัญญา: tx_est_snap_cert_inforce.lot_no = 1กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- โดย left join ด้วยเงื่อนไขtx_est_snap_policy.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_policy.policy_year = tx_est_snap_cert_inforce.policy_year
- tx_est_snap_policy.policy_no = tx_est_snap_cert_inforce.policy_no
- tx_est_snap_policy.policy_year = tx_est_snap_cert_inforce.policy_year
- กรองเงื่อนไขสถานะสมาชิกมีผลที่ tx_est_snap_cert_inforce.status_member in ('I','B') และเลือกข้อมูลต้นสัญญา: tx_est_snap_cert_inforce.lot_no = 1กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- สถานะสมาชิกมีผลที่ tx_est_snap_cert_inforce.status_member in ('I','B')
- และเลือกข้อมูลต้นสัญญา: tx_est_snap_cert_inforce.lot_no = 1
- กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- กรณี rate_flag = 1 ดึงข้อมูลอัตราเบี้ยจาก tx_est_snap_prem_rate --07/05/26โดย left join ด้วยเงื่อนไขtx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year
- โดย left join ด้วยเงื่อนไขtx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year
- tx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_no
- tx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size | Outputtx_stg_est_inforce_member | รูปแบบการบันทึก | Example |
| 1 | Period | Period ตามรอบประมวลผล | tx_est_snap_policy.period | numeric | 6 | period | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_est_snap_cert_inforce.policy_no | varchar | 20 | policy_no |  |  |
| 3 | PromiseDate | วันที่คุ้มครอง | tx_est_snap_cert_inforce.promise_date | datetime |  | promise_date | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | PolicyYear | ปีกรมธรรม์ | tx_est_snap_policy.policy_year | numeric | 4 | policy_year |  | 1 |
| 5 | CertNo | หมายเลขสมาชิก | tx_est_snap_cert_inforce.cer_no | varchar | 20 | cer_no |  | 1 |
| 6 | Sex | เพศ | tx_est_snap_cert_inforce.sex | varchar | 1 | sex | แปลงค่าจาก tx_est_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | M |
| 7 | Age | อายุ | tx_est_snap_cert_inforce.age | numeric | 2 | age | ## | 34 |
| 8 | AccidentSumInsured | ทุนประกันชีวิต อุบัติเหตุ | tx_est_snap_cert_inforce.acc_insur | numeric | 14,2 | sum_insured_accident | #,###.00coalesce(#,0.00) | 1,000.15 |
| 9 | ClassNo | Ocupation Class | tx_est_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |
| 10 | ModeOfPayment | ประเภทการจ่าย | tx_est_snap_policy.pay_type | numeric | 10 | pay_type | if pay_type = 0 then 'Monthly'if pay_type = 1 then 'Quarterly'if pay_type = 2 then 'Semi Annua'if pay_type = 3 then 'Annual' | --07/05/26 |
| 11 | TypePremiumRate | ประเภทอัตราเบี้ย | tx_est_snap_policy.rate_flagtx_est_snap_prem_rate.prem_rate_table_type | numeric | 1 | rate_type | if rate_flag = 0 then 'Unit Rate'if rate_flag = 1 then tx_est_snap_prem_rate.prem_rate_table_typeif rate_flag = 2 then 'Unit Premium' | --07/05/26 |
| 12 | LifeSumInsured | ทุนประกันชีวิต | tx_est_snap_cert_inforce.life_insur | numeric | 14,2 | sum_insured_life | coalesce(#,0.00) | --07/05/26 |
| 13 | MedAccidentSumInsured | ทุนประกันค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_cert_inforce.med_insur | numeric | 14,2 | sum_insured_med | coalesce(#,0.00) | --07/05/26 |
| 14 | TPDSumInsured | ทุนประกันทุพพลภาพ | tx_est_snap_cert_inforce.tpd_insur | numeric | 14,2 | sum_insured_tpd | coalesce(#,0.00) | --07/05/26 |
| 15 | LifePremiumRate | อัตราเบี้ย ความคุ้มครองชีวิต | tx_est_snap_policy.life_prem_ratetx_est_snap_prem_rate.value_life | numeric | 14,2 | prem_rate_life | if rate_flag = 0 then tx_est_snap_policy.life_prem_rateif rate_flag = 2 then 0.00if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.life_prem_rate if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class'and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_life AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classand tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_est_snap_prem_rate.value_life Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_life | --07/05/26 |
| 16 | AccidentPremiumRate | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ | tx_est_snap_policy.acc_prem_ratetx_est_snap_prem_rate.value_acc | numeric | 14,2 | prem_rate_acc | if rate_flag = 0 then tx_est_snap_policy.acc_prem_rateif rate_flag = 2 then 0.00 if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.acc_prem_rate if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class'and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_acc AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classand tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_est_snap_prem_rate.value_acc Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_acc | --07/05/26 |
| 17 | MedAccidentPremiumRate | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_policy.med_prem_ratetx_est_snap_prem_rate.value_med_acc | numeric | 14,2 | prem_rate_med | if rate_flag = 0 then tx_est_snap_policy.med_prem_rateif rate_flag = 2 then 0.00 if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.med_prem_rate if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class'and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_med_acc AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classand tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_est_snap_prem_rate.value_med_acc Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_med_acc | --07/05/26 |
| 18 | TPDPremiumRate | อัตราเบี้ย ความคุ้มครองทุพพลภาพ | tx_est_snap_policy.tpd_prem_ratetx_est_snap_prem_rate.value_tpd | numeric | 14,2 | prem_rate_tpd | if rate_flag = 0 then tx_est_snap_policy.tpd_prem_rateif rate_flag = 2 then 0.00 if tx_est_snap_policy.rate_flag = 1 แต่ tx_est_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_est_snap_policy.tpd_prem_rate if tx_est_snap_policy.rate_flag = 1 และ tx_est_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_est_snap_prem_rate.prem_rate_table_type = 'Class'and tx_est_snap_certificate_cust.class_no = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_tpd AgeGender when tx_est_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classand tx_est_snap_cert_inforce.sex = tx_est_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_est_snap_prem_rate.value_tpd Age when tx_est_snap_prem_rate.prem_rate_table_type = 'Age'and tx_est_snap_cert_inforce.age = tx_est_snap_prem_rate.value_age_or_classthen tx_est_snap_prem_rate.value_tpd | --07/05/26 |
| 19 | LifePremium | เบี้ย ความคุ้มครองชีวิต | tx_est_snap_cert_inforce.life_prem | numeric | 14,2 | prem_life | coalesce(#,0.00) | --07/05/26 |
| 20 | LifeExtraPremium | เบี้ย ความคุ้มครองชีวิต พิเศษ | tx_est_snap_cert_inforce.life_e1_prem | numeric | 14,2 | prem_extra_life | coalesce(#,0.00) | --07/05/26 |
| 21 | AccidentPremium | เบี้ย ความคุ้มครองอุบัติเหตุ | tx_est_snap_cert_inforce.acc_prem | numeric | 14,2 | prem_acc | coalesce(#,0.00) | --07/05/26 |
| 22 | AccidentExtraPremium | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ | 0.00 | numeric | 14,2 | prem_acc_extra | fix 0.00 | --07/05/26 |
| 23 | MedAccidentPremium | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_est_snap_cert_inforce.med_acc_prem | numeric | 14,2 | prem_med | coalesce(#,0.00) | --07/05/26 |
| 24 | TPDPremium | เบี้ย ทุพพลภาพ | tx_est_snap_cert_inforce.tpd_prem | numeric | 14,2 | prem_tpd | coalesce(#,0.00) | --07/05/26 |
| 25 | IPDPremium | เบี้ย IPD | tx_est_snap_cert_inforce.ipd_prem | numeric | 14,2 | prem_ipd | coalesce(#,0.00) | --07/05/26 |
| 26 | OPDPremium | เบี้ย OPD | tx_est_snap_cert_inforce.opd_prem | numeric | 14,2 | prem_opd | coalesce(#,0.00) | --07/05/26 |
| 27 | DentalPremium | เบี้ย ทันตกรรม | tx_est_snap_cert_inforce.dental_prem | numeric | 14,2 | prem_dental | coalesce(#,0.00) | --07/05/26 |
| 28 | TreatyCode | รหัสสัญญา | tx_est_snap_cert_inforce.re_insure_no | varchar | 50 | treaty_code | แปลงค่าจาก tx_est_snap_cert_inforce.re_insure_no โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | --07/05/26 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1299251243 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-005 ข้อมูล (R01) List of inforce by member > Process ข้อมูล (R01) List of inforce by member (Estimate) > WS_RIG_007 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period รอบประมวลผลข้อมูลที่กำหนดจากเดือนและปีของวันที่เริ่มมีผลคุ้มครองของสมาชิก โดยระบบจะนำปีและเดือนของ PromiseDate มาแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นตัวระบุงวดข้อมูลของกรมธรรม์หรือสมาชิกในรอบนั้นตัวอย่าง:EffectDate = 2025-01-15 → Period = 202501 | RIG_View_Policy.PromiseDatePolicyStatus not in ('L',C') | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | varchar | 20 | เลขกรมธรรม์ | RIG_View_CertInforce.PolicyNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') |  |  |
| 3 | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_CertInforce.PromiseDatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | PolicyYear | numeric | 4 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYearPolicyStatus not in ('L',C') |  | 1 |
| 5 | CertNo | varchar | 20 | หมายเลขสมาชิก | RIG_View_CertInforce.CerNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') |  | 00001 |
| 6 | Sex | varchar | 1 | เพศ | RIG_View_CertInforce.SexPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | if RIG_View_CertInforce.Sex = 1 then 'M'if RIG_View_CertInforce.Sex = 2 then 'F' | M |
| 7 | Age | numeric | 2 | อายุ | RIG_View_CertInforce.AgePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | ## | 34 |
| 8 | SumInsuredAccident | numeric | 14,2 | ทุนประกันชีวิต อุบัติเหตุ | RIG_View_CertInforce.AccInsurPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') | #,###.00coalesce(#,0.00) | 1,000.15 |


===== PAGE 1301807413 | Functional Specification > 02. Process Specification. > RIG-PS-04 Estimate - Staging Tables > Batch EST-006 กระบวนการดึงข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance =====
SRS Ref. :: BD-PS-014 ข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น(Initial Data Migration) ให้กับระบบงาน New Group RI โดยมีเป้าหมายเพื่อให้ระบบสามารถตรวจสอบได้อย่างถูกต้องว่า “กรมธรรม์ใดเคยส่ง RI แล้ว”ก่อนเริ่มต้นการประมวลผลจริงในระบบใหม่ ลดความเสี่ยงของการส่งข้อมูลซ้ำและเพิ่มความถูกต้องของข้อมูลตามประวัติ RI เดิมของบริษัทนำเข้าข้อมูลลง Database ของระบบ New Group RI เพื่อใช้เป็นข้อมูลตั้งต้นของระบบ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | เป็นกระบวนการตั้งต้น (Pre-Process) ก่อนที่ระบบ New Group RI จะเริ่มประมวลผลข้อมูลการส่งประกันภัยต่อตามรอบปกติ |
| 3 | เวลาประมวลผล(Time) | ดำเนินการประมวลผลเพียง ครั้งเดียว (One-time) เพื่อตั้งฐาน ก่อนการเริ่มใช้งานระบบ New Group RI |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ที่เคยส่ง Reinsurance ที่จะถูกนำไปตั้งเป็นฐานข้อมูลสำหรับระบบงาน New Group RI ประกอบด้วยpolicy_number : ข้อมูลเลขที่กรมธรรม์policy_year: ปีกรมธรรม์policy_status : ข้อมูลสถานะของกรมธรรม์treaty_code : ข้อมูลรหัสสัญญาบริษัทประกันภัยต่อri_commencement_date : ข้อมูลวันเริ่มสัญญาประกันภัยต่อri_status : สถานะระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก tx_mps_master_i05 โดยพิจารณาเงื่อนไขที่หยิบข้อมูล ดังนี้ฟิล์ด treaty_code มีบันทึกข้อมูล และไม่เป็นค่าว่าง และไม่เป็นค่า NULLหยิบข้อมูล และจัดเก็บข้อมูลลงตาราง tx_rig_policy_base ตามฟิล์ดต่อไปนี้No.FieldDescriptionData Sourceเงื่อนไขการบันทึกExample1rig_policy_base_idเลขที่ RunningSeq. ระบบสร้างเลขที่อัตโนมัติ 2policy_noเลขที่กรมธรรม์tx_mps_master_i05 .policy_numberไม่เป็นค่าว่าง และไม่เป็นค่า NULL 3policy_yearปีกรมธรรม์tx_mps_master_i05 .policy_yearไม่เป็นค่าว่าง และไม่เป็นค่า NULL 4policy_statusสถานะของกรมธรรม์ประกันกลุ่มtx_mps_master_i05 .policy_status 5treaty_codeรหัสสัญญาบริษัทประกันภัยต่อtx_mps_master_i05 .treaty_code ไม่เป็นค่าว่าง และไม่เป็นค่า NULL 6ri_statusสถานะการส่งประกันภัยต่อtx_mps_master_i05 .ri_status 7ri_commencement_dateวันเริ่มสัญญาประกันภัยต่อtx_mps_master_i05 .ri_commencement_date 8periodรอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า)ระบุค่าเป็น NULLสำหรับการ Migrate ตั้งฐานกรมธรรม์ 9created_dateวันที่บันทึกรายการCurrent System Date 10created_byผู้บันทึกรายการระบุค่าเป็น 'SYSTEM_MIGRATE' 11updated_dateวันที่ปรับปรุงรายการระบุค่าเป็น NULL 12updated_byผู้ปรับปรุงรายการระบุค่าเป็น NULL |


===== PAGE 1309999561 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables =====
Batch Process ทำงานหลังจากกระบวนการ RIG-PS-03 Actual - Snapshot View Tables เสร็จสิ้นทั้งหมด
| Batch ID | Batch Name | Description | Target (Landing Table) | Actual | GIB | Thaire | dai-ichi | Service | Dependency | Snap Table |
| ACT-001 | ข้อมูล List of policy | นำเข้าข้อมูลกรมธรรม์ตามรอบเดือน พร้อมรองรับการคัดกรองกรมธรรม์ที่มี RI ตาม Treaty | tx_stg_act_all_policy | All |  |  |  | Process ข้อมูล List of policy (Actual) |  | tx_act_snap_policytx_act_snap_company |
| ACT-002 | ข้อมูล Alteration | นำเข้าข้อมูลสลักหลัง | tx_stg_act_alteration | Alteration |  |  |  | Process ข้อมูล Alteration |  | tx_act_snap_policytx_act_snap_certalterationtx_act_snap_certificate_cust |
| ACT-003 | ข้อมูล Claim | นำเข้าข้อมูลสินไหมที่มี วันที่อนุมัติอยู่ภายใน Quarter Period | tx_stg_act_tpd_claimtx_stg_act_health_claimtx_stg_act_death_claim | Claim |  |  |  | Process ดึงข้อมูล Claim Death (Actual)Process ดึงข้อมูล Claim Dismemberment/TPD (Actual)Process ดึงข้อมูล Claim Health (Actual) |  | tx_act_snap_policytx_act_snap_certificate_custtx_act_snap_claim_deathtx_act_snap_claimtpdtx_act_snap_claimhealth |
| ACT-004 | Actual Premium Layer | ข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย | tx_stg_act_prem_layer | Prem |  |  |  | Process ข้อมูล Actual Premium Layer |  | tx_act_snap_policytx_act_snap_unname_policytx_act_snap_cert_inforcetx_act_snap_certificate_cust |
| ACT-005 | ข้อมูล (R01) List of inforce by member | ข้อมูลสมาชิก ณ ต้นงวด โดยดึงกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปี ตั้งแต่ วันแรกของ Quarter Period – 1 ปีถึงวันสุดท้ายของ Quarter Period | tx_stg_act_inforce_member | Prem, Claim |  |  |  | Process ข้อมูล (R01) List of inforce by member (Actual) |  | tx_act_snap_policytx_act_snap_cert_inforce |
| ACT-006 | ข้อมูล (R17) List of inforce by policy | ข้อมูลกรมธรรม์ที่ยังมีผลบังคับ (Inforce) (R17) | tx_stg_act_inforce_policy | Prem, Exp |  |  |  | Process ข้อมูล (R17) List of inforce by policy |  | tx_act_snap_policytx_act_snap_cert_inforce |
| ACT-007 | ข้อมูล (R61) Premium and movement (Actual) | ข้อมูล Premium and movment | tx_stg_act_prem_movment | Prem, Exp |  |  |  | Process ข้อมูล (R61) Premium and movement |  | tx_act_snap_policytx_act_snap_cert_inforcetx_act_snap_unname_policytx_act_snap_certalteration |
| ACT-008 | ข้อมูล Member over age (Actual) | ข้อมูลสมาชิกที่อายุเกิน 70 ปี | tx_stg_act_member_over_age | Prem |  |  |  | Process ข้อมูล Member over age |  | tx_act_snap_policytx_act_snap_cert_inforce |
| ACT-009 | ข้อมูล Investigate Expense | ค่าใช้จ่ายสอบสวน | tx_stg_act_investigation_expense | Claim |  |  |  | Process Investigate expense |  | tx_act_snap_investigation_expensetx_act_snap_claim_deathtx_act_snap_claimtpdtx_act_snap_claimhealth |
| ACT-010 | ข้อมูล Experience Refund (Actual) | ข้อมูลเงินคืนตามประสบการณ์ | tx_stg_act_exp_refund | Exp |  |  |  | Process ข้อมูล Experience Refund |  | tx_act_snap_policytx_act_snap_exprefund |
| ACT-011 | ข้อมูลตั้งฐาน Profit Commission |  |  | Prem |  |  |  |  |  |  |
|  |  |  |  | dbdcode |  |  |  |  |  |  |


===== PAGE 1312489724 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-001 ข้อมูล List of policy =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ดึงข้อมูลกรมธรรม์จากระบบประกันกลุ่ม โดยพิจารณาเฉพาะกรมธรรม์ที่มีการส่งต่อประกันภัยต่อ (Reinsurance) เท่านั้นสามารถเลือกประมวลผลเฉพาะ Treaty ที่ต้องการ ได้การดึงข้อมูลจะอ้างอิงข้อมูล ณ วันที่ทำรายการประมวลผล Actual เพื่อให้ได้ข้อมูลกรมธรรม์ตามสถานะจริงของรอบงวดนั้นข้อมูลที่ดึงมา จะถูกนำไปใช้เป็น input สำหรับการประมวลผล Actual ในขั้นตอนถัดไปของระบบ Group RI |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-01,PS-02,PS-03,PS-04,PS-05,PS-06 |
| 3 | เวลาประมวลผล(Time) | จะเริ่มทำงาน หลังจาก process RIG-PS-03 Actual - Snapshot Landing Tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Treaty Code = รหัสสัญญาประกันภัยต่อ ใช้ระบุเพิ่มเติมเมื่อมีการเลือกใช้ RI Policy Flag |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ประจำรอบเดือนตาม Period ที่ระบุ โดยเป็นข้อมูลกรมธรรม์ทุกสถานะที่ผ่านการคัดกรองตามเงื่อนไข Input ที่กำหนด |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล List of policy (Actual)ระบบบันทึกข้อมูลที่ตาราง tx_stg_act_all_policyNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No 17010012PolicyNovarchar8เลขที่กรมธรรม์RIG_View_Policy.PolicyNo GH16634Commencement Datedate วันเริ่มสัญญาครั้งแรกRIG_View_Policy.FirstDatedd/mm/yyyy (AD.)15/11/20066EffectiveDatedate วันเริ่มสัญญาปีปัจจุบันRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)15/11/20247EndDatedate วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้นRIG_View_Policy.ExpireDatedd/mm/yyyy (AD.)14/11/20253PolicyYearnumeric3ปีกรมธรรม์RIG_View_Policy.PolicyYear 198PaymentModenumeric1ประเภทการชำระเบี้ยRIG_View_Policy.PayTypePayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' Annual9PolicyNamevarchar255ชื่อกรมธรรม์ (ชื่อบริษัท)RIG_View_Policy.CompanyNameEng, CompanyNameif CompanyName ไม่เป็นภาษาอังกฤษให้ใช้ข้อมูลที่ CompanyNameEng*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมดMEIKI ENGINEERING (THAILAND) COMPANY LIMITED10NatureOfBusinessvarchar255ประเภทธุรกิจRIG_View_Company.DBDCODEเป็นหน้าจอให้ User mapping DBD code ด้วย Type of business ภาษาไทยกับภาษาอังกฤษ*โดยเป็นตัวพิมพ์ใหญ่ทั้งหมดLogistics11Statusvarchar1สถานะของกรมธรรม์ จากประกันกลุ่มRIG_View_Policy.PolicyStatusif RIG_View_Policy.PolicyStatus = 'I' then 'Inforce'if RIG_View_Policy.PolicyStatus = 'B' then 'New Business'if RIG_View_Policy.PolicyStatus = 'C' then 'Cancel'if RIG_View_Policy.PolicyStatus = 'L' then 'Lapsed'Inforce12RIStatusvarchar50สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedRIG_View_Policy.PolicyStatusif RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Periodif RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period then 'Lapsed'Inforce13LapseDatedate วันที่ไม่ต่อสัญญาRIG_View_Policy.LapseDatedd/mm/yyyy (AD.)14/11/202514PreviousPolicyNovarchar8เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี)RIG_View_Policy.PolicyNo_Old GH166215ExperienceRefundnumeric1Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExperienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExperienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes)RIG_View_Policy.ExperienceRefundif RIG_View_Policy.ExperienceRefund = 0 then 'No'if RIG_View_Policy.ExperienceRefund= 1 then 'Yes'No TreatyCodevarchar50รหัสประกันภัยต่อ SaleOptionnumeric4ฝ่ายขาย/ช่องทาง0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงินRIG_View_Policy.SaleOption SaleChannelCodenumeric4ช่องทางการขาย0 = Direct1 = Dai-ichi2 = Co-opRIG_View_Policy.SaleChannel FirstReceiptDatedate วันทีออกใบเสร็จใบแรกRIG_View_Policy.FReceiptDate ExpireDatedate วันที่สิ้นสุดความคุ้มครองRIG_View_Policy.ExpireDate RateTypenumeric1ประเภทอัตราเบี้ยRIG_View_Policy.CalculatePremFrom |


===== PAGE 1314194291 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-001 ข้อมูล List of policy > Process ข้อมูล List of policy (Actual) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก RIG-PS-03 Actual - Snapshot Landing Tables>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy
- ดึงข้อมูลบริษัทจาก tx_act_snap_companyleft join ด้วยเงื่อนไข ดังนี้tx_act_snap_company.company_code = tx_act_snap_policy.company_codetx_act_snap_company.policy_year = tx_act_snap_policy.policy_year
- tx_act_snap_company.company_code = tx_act_snap_policy.company_code
- tx_act_snap_company.policy_year = tx_act_snap_policy.policy_year
- รหัส treaty code สามารถอ่านได้จาก configure ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100
- ดึงค่า lookup_key จากตาราง cf_lookup_catalog ด้วยเงื่อนไข parent_id = 1000100
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size (Source) | Output tx_stg_act_all_policy | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล | tx_act_snap_policy.period | varchar | 6 | period |  |  |
| 2 | ReinsuredNo | เลขประกันภัยต่อ | tx_act_snap_policy.reinsur_no | varchar | 10 | reinsur_no |  | 1701001 |
| 3 | PolicyNo | เลขที่กรมธรรม์ | tx_act_snap_policy.policy_no | varchar | 8 | policy_no |  | GH1663 |
| 4 | Commencement Date | วันเริ่มสัญญาครั้งแรก | tx_act_snap_policy.first_date | date |  | first_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-11-15 |
| 5 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_act_snap_policy.promise_date | date |  | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 6 | EndDate | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | tx_act_snap_policy.expire_date | date |  | end_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 7 | PolicyYear | ปีกรมธรรม์ | tx_act_snap_policy.policy_year | numeric | 3 | policy_year |  | 19 |
| 8 | PaymentMode | ประเภทการชำระเบี้ย | tx_act_snap_policy.pay_type | numeric | 1 | pay_type | แปลงค่า tx_act_snap_policy.pay_type โดยนำค่าไปตรวจสอบใน cf_lookup_catalog.parent_id = 1002300 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | Annual |
| 9 | PolicyName | ชื่อกรมธรรม์ (ชื่อบริษัท) ในรูปแบบภาษาอังกฤษ | tx_act_snap_policy.company_name_eng, company_name | varchar | 255 | policy_name | ระบบจะดึงค่าชื่อบริษัทจากฟิลด์ tx_act_snap_policy.company_name_eng เป็นลำดับแรกกรณีที่ company_name_eng ไม่มีค่า หรือมีค่าเป็น NULL ระบบจะใช้ค่าจากฟิลด์ tx_act_snap_policy.company_nameแทนในการบันทึกและประมวลผลข้อมูลแปลงค่าให้เป็นตัวพิมพ์ใหญ่ทั้งหมด (Uppercase) ก่อนบันทึก | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED |
| 10 | dbd_code | ประเภทธุรกิจ | tx_act_snap_company.dbdcode | varchar | 20 | dbd_code | tx_act_snap_company.company_code = tx_act_snap_policy.company_codetx_act_snap_company.policy_year = tx_act_snap_policy.policy_year | 64202 |
| 11 | Status | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_act_snap_policy.policy_status | varchar | 1 | status | แปลงค่าจาก tx_act_snap_policy.policy_status โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002400 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | Inforce |
| 12 | RIStatus | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed |  | varchar | 20 | ri_status | แปลงค่าจาก tx_act_snap_policy.policy_statusถ้า tx_act_snap_policy.expire_date => วันที่สิ้นเดือนของ Periodตรวจสอบ tx_act_snap_policy.policy_year = 1 ให้บันทึกค่าเป็น 'New Business'ตรวจสอบ tx_act_snap_policy.policy_year > 1 ให้บันทึกค่าเป็น 'Inforce'ถ้า tx_act_snap_policy.expire_date < วันที่สิ้นเดือนของ tx_act_snap_policy.period ให้บันทึกค่าเป็น 'Lapsed' | Inforce |
| 13 | LapseDate | วันที่ไม่ต่อสัญญา | tx_act_snap_policy.lapse_date | date |  | lapse_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 14 | PreviousPolicyNo | เลขกรมธรรม์เก่า (สำหรับกรมธรรม์ที่มีการเปลี่ยนเลขกรมธรรม์ทุกปี) | tx_act_snap_policy.policy_no_old | varchar | 8 | prev_policy_no |  | GH1662 |
| 15 | ExperienceRefund | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่หากค่า ExperienceRefund = 0 หมายถึง ไม่มีเงินคืนตามประสบการณ์ (No)หากค่า ExperienceRefund = 1 หมายถึง มีเงินคืนตามประสบการณ์ (Yes) | tx_act_snap_policy.expreience_refund | numeric | 1 | exp_refund | ตรวจสอบ tx_act_snap_policy.expreience_refund โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002600 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | N |
| 16 | TreatyCode | รหัสประกันภัยต่อ |  | varchar | 50 | treaty_code | ระบบแปลงค่าจาก tx_act_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | THREL_Grp_PA |
| 17 | SaleOption | ฝ่ายขาย/ช่องทาง 0 = ประกันชีวิตกลุ่ม1 = โบรกเกอร์2 = ประกันชีวิตข้าราชการ3 = ช่องทางองค์กร4 = ตัวแทน5 = ผ่านสถาบันการเงิน | tx_act_snap_policy.sale_option | numeric | 4 | sale_option |  | 1 |
| 18 | SaleChannelCode | ช่องทางการขาย 0 = Direct1 = Dai-ichi 2 = Co-op | tx_act_snap_policy.sale_channel_code | numeric | 4 | sale_channel_code |  | 1 |
| 19 | FirstReceiptDate | วันทีออกใบเสร็จใบแรก | tx_act_snap_policy.f_receipt_date | date |  | f_receipt_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 20 | ExpireDate | วันที่สิ้นสุดความคุ้มครอง | tx_act_snap_policy.expire_date | date |  | expire_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2026-01-02 |
| 21 | RateType | ประเภทอัตราเบี้ย | tx_act_snap_policy.rate_flag | numeric | 1 | rate_flag |  | 1 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1292239023 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-002 ข้อมูล Alteration =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลการเปลี่ยนแปลงความคุ้มครอง (Alteration) ของสมาชิกภายใต้กรมธรรม์ โดยครอบคลุมรายการสลักหลังประเภทต่าง ๆ ได้แก่Addition (สมาชิกใหม่)Termination (สมาชิกลาออก)IncreasedSA (สมาชิกเพิ่มทุน)DecreasedSA (สมาชิกลดทุน)โดยข้อมูลที่นำเข้าใช้สำหรับติดตามความเคลื่อนไหวของจำนวนสมาชิกและทุนคุ้มครอง รวมถึงเป็นฐานข้อมูลสำหรับการคำนวณเบี้ยและการประมวลผลด้านประกันภัยต่อ (Reinsurance) ตามสัญญา (Treaty) ในแต่ละรอบงวดข้อมูล |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-06 |
| 3 | เวลาประมวลผล(Time) | ทุกวันที่ 1 ของเดือน เริ่มเวลา 01.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | Period = Period ของข้อมูล อ้างอิงจากเดือนและปีของ วันที่ทำรายการสลักหลัง (DocumentDate ของ Alteration) โดยแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นงวดข้อมูลของการประมวลผลTreaty Code = รหัสสัญญาประกันภัยต่อ ใช้สำหรับคัดกรองเฉพาะรายการ Alteration ที่อยู่ภายใต้สัญญาที่ต้องการพิจารณา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลรายการเคลื่อนไหวของสมาชิกตามกรมธรรม์ในรอบ Period และ Treaty Code ที่ระบุ โดยแยกตามประเภทการเปลี่ยนแปลง (Addition, Termination, IncreasedSA, DecreasedSA) และมีโครงสร้างข้อมูลหลัก โดย AlterationStatus <> Death ดังนี้สำหรับรายการที่มีทุนเดี่ยว (เช่น Addition / Termination)เลขกรมธรรม์วันที่ทำรายการวันที่มีผลบังคับวันเริ่มคุ้มครองของสมาชิกหมายเลขสมาชิกเพศอายุจำนวนทุนชีวิต (รวมถึงทุนอุบัติเหตุ หากมีการกำหนดร่วมกัน)สำหรับรายการที่มีการเปลี่ยนแปลงทุน (IncreasedSA / DecreasedSA)เลขกรมธรรม์วันที่ทำรายการวันที่มีผลบังคับวันเริ่มคุ้มครองของสมาชิกหมายเลขสมาชิกเพศอายุจำนวนทุนชีวิต (อุบัติเหตุ) ก่อน การเปลี่ยนแปลงจำนวนทุนชีวิต (อุบัติเหตุ) หลัง การเปลี่ยนแปลง |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล Alteration ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodnumeric6Period ของข้อมูลRIG_View_CertAlteration.DocDateyyyyMM (AD.)2024012ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No 17010013PolicyNovarchar8เลขกรมธรรม์RIG_View_CertAlteration.PolicyNo 4DocumentDatedatetime วันที่ทำรายการRIG_View_CertAlteration.DocDatedd/mm/yyyy (AD.)07/01/20245AlterationMovementvarchar 50ประเภทสลักหลังหาก StatusAfter = 'A'⇒ ประเภทสลักหลังคือ Addition (สมาชิกใหม่ที่เพิ่มเข้ามาในกรมธรรม์)หาก StatusAfter อยู่ใน ('C')⇒ ประเภทสลักหลังคือ Termination (สมาชิกลาออก/สิ้นสุดความคุ้มครอง)หาก StatusAfter = 'N'⇒ ประเภทสลักหลังคือ IncreaseSA (สมาชิกเพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ ประเภทสลักหลังคือ DecreaseSA (สมาชิกลดทุนคุ้มครอง)RIG_View_CertAlteration.StatusAfterif StatusAfter = 'A' then 'Addition'if StatusAfter in ('C') then 'Termination'if StatusAfter = 'N' then 'IncreaseSA'if StatusAfter = 'E' then 'DecreaseSA'Addition6AlterationStatusvarchar 50สถานะสลักหลังหาก StatusAfter = 'A'⇒ แสดงสถานะ New Member (สมาชิกใหม่)หาก StatusAfter = 'C'⇒ แสดงสถานะ Cancel (ยกเลิกความคุ้มครอง)หาก StatusAfter = 'N'⇒ แสดงสถานะ Increase (เพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ แสดงสถานะ Decrease (ลดทุนคุ้มครอง)RIG_View_CertAlteration.StatusAfterif StatusAfter = 'A' then 'New Member'if StatusAfter = 'C' then 'Cancel'if StatusAfter = 'N' then 'Increase'if StatusAfter = 'E' then 'Decrease'New Member7AlterationDatedatetime วันที่มีผลบังคับของสลักหลังRIG_View_CertAlteration.ChangeDateAfterdd/mm/yyyy (AD.)07/01/20248MemberEffectiveDatedatetime วันเริ่มคุ้มครองของสมาชิกRIG_View_CertAlteration.EffectDatedd/mm/yyyy (AD.)07/01/20249CertNovarchar8หมายเลขสมาชิกRIG_View_CertAlteration.CertificCustNo 0160010Sexvarchar1เพศRIG_View_CertificateCust.Sexif RIG_View_CertificateCust.Sex = 1 then 'M'if RIG_View_CertificateCust.Sex = 2 then 'F'M11Agenumeric2อายุRIG_View_CertificateCust.Age 3412SumInsuredAccidentnumeric14,2จำนวนทุนชีวิต (อุบัติเหตุ)RIG_View_CertAlteration.AccInsurAfter#,###.00coalesce(#,0.00)1,000.1513SumInsuredAccident_Beforenumeric14,2จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่ม/ลด ทุนRIG_View_CertAlteration.AccInsurBefore#,###.00coalesce(#,0.00)600,000.1514SumInsuredAccident_Afternumeric14,2จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่ม/ลด ทุนRIG_View_CertAlteration.AccInsurAfter#,###.00coalesce(#,0.00)500,000.15 |


===== PAGE 1299022571 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-002 ข้อมูล Alteration > Process ข้อมูล Alteration =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก DataOne (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | group ri | tx_act_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_act_snap_policy.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_policy.policy_year = tx_act_snap_certalteration.policy_year |
| ข้อมูลสลักหลัง |
| 1 | group ri | tx_act_snap_certalteration | ข้อมูลบันทึกการเปลี่ยนแปลงสถานะ | tx_act_snap_policy.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_policy.policy_year = tx_act_snap_certalteration.policy_year |
| ข้อมูลสมาชิก |
| 1 | group ri | tx_act_snap_certificate_cust | ข้อมูลรายละเอียดสมาชิก | tx_act_snap_certificate_cust.certific_cust_no= tx_act_snap_certalteration.certific_cust_notx_act_snap_certificate_cust.policy_no = tx_act_snap_certalteration.policy_no tx_act_snap_certificate_cust.policy_year = tx_act_snap_certalteration.policy_year |
บันทึกไปที่ tx_stg_act_alteration

## Output
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period ของข้อมูล | tx_act_snap_certalteration.period | yyyyMM (AD.) | 202401 |
| 2 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | tx_act_snap_policy.reinsur_no |  | 1701001 |
| 3 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | tx_act_snap_certalteration.policy_no |  |  |
| 4 | DocumentDate | datetime |  | วันที่ทำรายการ | tx_act_snap_certalteration.doc_date | dd/mm/yyyy (AD.) | 07/01/2024 |
| 5 | AlterationMovement | varchar | 50 | ประเภทสลักหลังหาก StatusAfter = 'A'⇒ ประเภทสลักหลังคือ Addition (สมาชิกใหม่ที่เพิ่มเข้ามาในกรมธรรม์)หาก StatusAfter อยู่ใน ('C')⇒ ประเภทสลักหลังคือ Termination (สมาชิกลาออก/สิ้นสุดความคุ้มครอง)หาก StatusAfter = 'N'⇒ ประเภทสลักหลังคือ IncreaseSA (สมาชิกเพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ ประเภทสลักหลังคือ DecreaseSA (สมาชิกลดทุนคุ้มครอง) | tx_act_snap_certalteration.status_after | if status_after = 'A' then 'Addition'if status_after in ('C') then 'Termination'if status_after = 'N' then 'IncreaseSA'if status_after = 'E' then 'DecreaseSA'20/02/2026if status_after = 'D' then 'Death'if status_after = 'O' then 'Age Over Limit'if status_after = 'T' then 'Transfer' | Addition |
| 6 | AlterationStatus | varchar | 50 | สถานะสลักหลังหาก StatusAfter = 'A'⇒ แสดงสถานะ New Member (สมาชิกใหม่)หาก StatusAfter = 'C'⇒ แสดงสถานะ Cancel (ยกเลิกความคุ้มครอง)หาก StatusAfter = 'N'⇒ แสดงสถานะ Increase (เพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ แสดงสถานะ Decrease (ลดทุนคุ้มครอง) | tx_act_snap_certalteration.status_after | if status_after = 'A' then 'New Member'if status_after = 'C' then 'Cancel'if status_after = 'N' then 'Increase'if status_after = 'E' then 'Decrease'20/02/2026if status_after = 'D' then 'Death'if status_after = 'O' then 'Age Over Limit'if status_after = 'T' then 'Transfer' | New Member |
| 7 | AlterationDate | datetime |  | วันที่มีผลบังคับของสลักหลัง | tx_act_snap_certalteration.change_date_after | dd/mm/yyyy (AD.) | 07/01/2024 |
| 8 | MemberEffectiveDate | datetime |  | วันเริ่มคุ้มครองของสมาชิก | tx_act_snap_certalteration.effect_date | dd/mm/yyyy (AD.) | 07/01/2024 |
| 9 | CertNo | varchar | 8 | หมายเลขสมาชิก | tx_act_snap_certalteration.certific_cust_no |  | 01600 |
| 10 | Sex | varchar | 1 | เพศ | tx_act_snap_certificate_cust.sex | if RIG_View_CertificateCust.Sex = 1 then 'M'if RIG_View_CertificateCust.Sex = 2 then 'F' | M |
| 11 | Age | numeric | 2 | อายุ | tx_act_snap_certificate_cust.age |  | 34 |
| 12 | SumInsuredAccident | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) | tx_act_snap_certalteration.acc_insur_after | #,###.00coalesce(#,0.00) | 1,000.15 |
| 13 | SumInsuredAccident_Before | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่ม/ลด ทุน | tx_act_snap_certalteration.acc_insur_before | #,###.00coalesce(#,0.00) | 600,000.15 |
| 14 | SumInsuredAccident_After | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่ม/ลด ทุน | tx_act_snap_certalteration.acc_insur_after | #,###.00coalesce(#,0.00) | 500,000.15 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1299251521 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-002 ข้อมูล Alteration > Process ข้อมูล Alteration > WS_RIG_008 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period ของข้อมูล | RIG_View_CertAlteration.DocDate | yyyyMM (AD.) | 202401 |
| 2 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 1701001 |
| 3 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_CertAlteration.PolicyNo |  |  |
| 4 | DocumentDate | datetime |  | วันที่ทำรายการ | RIG_View_CertAlteration.DocDate | dd/mm/yyyy (AD.) | 07/01/2024 |
| 5 | AlterationMovement | varchar | 50 | ประเภทสลักหลังหาก StatusAfter = 'A'⇒ ประเภทสลักหลังคือ Addition (สมาชิกใหม่ที่เพิ่มเข้ามาในกรมธรรม์)หาก StatusAfter อยู่ใน ('C')⇒ ประเภทสลักหลังคือ Termination (สมาชิกลาออก/สิ้นสุดความคุ้มครอง)หาก StatusAfter = 'N'⇒ ประเภทสลักหลังคือ IncreaseSA (สมาชิกเพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ ประเภทสลักหลังคือ DecreaseSA (สมาชิกลดทุนคุ้มครอง) | RIG_View_CertAlteration.StatusAfter | if StatusAfter = 'A' then 'Addition'if StatusAfter in ('C') then 'Termination'if StatusAfter = 'N' then 'IncreaseSA'if StatusAfter = 'E' then 'DecreaseSA' | Addition |
| 6 | AlterationStatus | varchar | 50 | สถานะสลักหลังหาก StatusAfter = 'A'⇒ แสดงสถานะ New Member (สมาชิกใหม่)หาก StatusAfter = 'C'⇒ แสดงสถานะ Cancel (ยกเลิกความคุ้มครอง)หาก StatusAfter = 'N'⇒ แสดงสถานะ Increase (เพิ่มทุนคุ้มครอง)หาก StatusAfter = 'E'⇒ แสดงสถานะ Decrease (ลดทุนคุ้มครอง) | RIG_View_CertAlteration.StatusAfter | if StatusAfter = 'A' then 'New Member'if StatusAfter = 'C' then 'Cancel'if StatusAfter = 'N' then 'Increase'if StatusAfter = 'E' then 'Decrease' | New Member |
| 7 | AlterationDate | datetime |  | วันที่มีผลบังคับของสลักหลัง | RIG_View_CertAlteration.ChangeDateAfter | dd/mm/yyyy (AD.) | 07/01/2024 |
| 8 | MemberEffectiveDate | datetime |  | วันเริ่มคุ้มครองของสมาชิก | RIG_View_CertAlteration.EffectDate | dd/mm/yyyy (AD.) | 07/01/2024 |
| 9 | CertNo | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertAlteration.CertificCustNo |  | 01600 |
| 10 | Sex | varchar | 1 | เพศ | RIG_View_CertificateCust.Sex | if RIG_View_CertificateCust.Sex = 1 then 'M'if RIG_View_CertificateCust.Sex = 2 then 'F' | M |
| 11 | Age | numeric | 2 | อายุ | RIG_View_CertificateCust.Age |  | 34 |
| 12 | SumInsuredAccident | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) | RIG_View_CertAlteration.AccInsurAfter | #,###.00coalesce(#,0.00) | 1,000.15 |
| 13 | SumInsuredAccident_Before | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่ม/ลด ทุน | RIG_View_CertAlteration.AccInsurBefore | #,###.00coalesce(#,0.00) | 600,000.15 |
| 14 | SumInsuredAccident_After | numeric | 14,2 | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่ม/ลด ทุน | RIG_View_CertAlteration.AccInsurAfter | #,###.00coalesce(#,0.00) | 500,000.15 |


===== PAGE 1312489726 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-003 ข้อมูล Claim =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าธุรกรรม Claim ที่มีการพิจารณาแล้ว (Death,TPD,Health)จัดเตรียมข้อมูลสำหรับนำเข้าสินไหม โดยเป็นรายการเคลมที่ได้รับการพิจารณา ทั้งกรณีอนุมัติ และปฏิเสธสินไหมในเดือนนั้น ทั้งประเภท Death, TPD และ Health เพื่อใช้ในการประมวลผล |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-01,PS-02,PS-03,PS-04,PS-05,PS-06 |
| 3 | เวลาประมวลผล(Time) | ทุกวันที่ 1 ของทุกเดือน เวลา 00.01 น. |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูลTreaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | แบ่งเป็นข้อมูลตามประเภทของสินไหมดังนี้Claim Death ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Death (Actual) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้ Click here to expand... No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimDeath.Approve_DateyyyyMM2022092PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH46393EffectiveDate datetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyy01/09/20224PolicyYearnumeric2ปีกรมธรรม์RIG_View_Policy.PolicyYear 75ReinsurNovarchar10เลขที่กรมธรรม์ประกันต่อRIG_View_Policy.ReInsur_No 18070036Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 016107Agenumeric2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 288Sexvarchar1เพศRIG_View_CertificateCust.sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimDeath.DeathDatedd/mm/yyyy (AD.)07/09/202210ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimDeath.Approve_Datedd/mm/yyyy (AD.)23/09/202211SumInsuredLifenumeric14,2ทุนประกันชีวิตRIG_View_CertificateCust.LifeInsur#,###.##300,000.0012SumInsuredAccidentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertificateCust.AccInsur#,###.##300,000.0013ClaimLifenumeric14,2เคลมชีวิตRIG_View_ClaimDeath.LifeInsur#,###.##300,000.0014ClaimAccidentnumeric14,2เคลมอุบัติเหตุRIG_View_ClaimDeath.AccInsur#,###.##300,000.0015TotalClaimnumeric14,2จำนวนเงินที่จ่ายclaim_life+claim_acc#,###.##300,000.0016Typevarchar10ประเภทรับแจ้งกำหนดให้มีค่า “Death”fix 'Death' Death17PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimDeath.PayDatedd/mm/yyyy (AD.)26/09/202218ClaimCausevarchar255สาเหตุการเคลมRIG_View_ClaimDeath.DeathCauseRemark Acute gastroenteritis19InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.0020ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimDeath.InformNo 25670181021ConsiderSeqint การพิจารณาเคลมครั้งที่RIG_View_ClaimDeath.ConsiderSeq Claim TPD/Dismemberment ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Dismemberment/TPD (Actual) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้ Click here to expand... No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimTPD.Approve_DateyyyyMM (AD.)2007052PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH17263ReinsurNovarchar10เลขที่กรมธรรม์ ประกันต่อRIG_View_Policy.ReInsur_No DG0094EffectiveDatedatetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)12/05/20075PolicyYearnumeric2ปีกรมธรรม์RIG_View_Policy.PolicyYear 26Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 006067Agenumeric2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 228Sexvarchar1เพศRIG_View_CertificateCust.sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimTPD.AccidentDatedd/mm/yyyy (AD.)27/05/200710ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimTPD.Approve_Datedd/mm/yyyy (AD.)27/05/200711SumInsuredLifenumeric14,2ทุนประกันชีวิตRIG_View_CertificateCust.LifeInsur#,###.##300,000.0012SumInsuredDismenbermentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertificateCust.AccInsur#,###.##300,000.0013SumInsuredTPDnumeric14,2ทุนประกันชีวิต ทุพพลภาพRIG_View_CertificateCust.TPDInsur#,###.##300,000.0014ClaimLifenumeric14,2เคลมชีวิตfix 0.00 0.0015ClaimAccidentnumeric14,2เคลมอุบัติเหตุRIG_View_ClaimTPD.Approve_ACCInsur#,###.##300,000.0016ClaimTPDnumeric14,2เคลมทุพพลภาพRIG_View_ClaimTPD.Approve_TPDInsur#,###.##300,000.0017TotalClaimnumeric14,2จำนวนเงินที่จ่ายclaim_acc+claim_tpd 300,000.0018Typevarchar10ประเภทรับแจ้งหาก ClaimStatus = 0 ให้จัดประเภทเป็น Dismembermentหาก ClaimStatus อยู่ในช่วง 1 หรือ 2 ให้จัดประเภทเป็น TPDRIG_View_ClaimTPD.ClaimStatusif RIG_View_ClaimTPD.ClaimStatus = 0 then 'Dismemberment'if RIG_View_ClaimTPD.ClaimStatus in (1,2) then 'TPD'TPD19PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimTPD.PayDatedd/mm/yyyy (AD.)28/05/200720ClaimCausevarchar80สาเหตุการเคลมRIG_View_ClaimTPD.AccidentCause Motor(อุบัติเหตุรถจักรยานยนต์)21InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.0022ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimTPD.InformNo 255200005 Claim Health ระบบดึงข้อมูลจาก Process ดึงข้อมูล Claim Health (Actual) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้ Click here to expand... No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar5รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้นRIG_View_ClaimHealth.Approve_DateyyyyMM (AD.)2019092PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo GH19543ReinsurNovarchar10เลขที่กรมธรรม์ ประกันต่อRIG_View_Policy.ReInsur_No DG0714EffectiveDatedatetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)01/09/20195PolicyYearint2ปีกรมธรรม์RIG_View_Policy.PolicyYear 16Certnovarchar8หมายเลขสมาชิกRIG_View_CertificateCust.CertificCustNo 101977Ageint2อายุของผู้เอาประกันRIG_View_CertificateCust.Age 258Sexvarchar1เพศRIG_View_CertificateCust.Sexif 1 then 'M', if 2 the 'F'F9AccidentDatedatetime วันที่เกิดเหตุRIG_View_ClaimHealth.Accident_Datedd/mm/yyyy (AD.)01/09/201910ApprovedDatedatetime วันที่อนุมัติRIG_View_ClaimHealth.Approve_Datedd/mm/yyyy (AD.)21/09/201911ClaimAmountint14,2จำนวนเงินที่จ่ายRIG_View_ClaimHealth.Claim_Right#,###.##300,000.0012Typevarchar10ประเภทรับแจ้งRIG_View_ClaimHealth.ClaimTypeif RIG_View_ClaimHealth.RD_No = cf_claim_type.rd_no then cf_claim_type.claim_type_groupelse 'Other'ข้อมูลที่ Config สำหรับ grouping claim type ใน cf_claim_type.claim_type_groupcf_claim_type_idrd_noclaim_type_sourceclaim_type_groupstatusdescription120IPDIPDAการประกันสุขภาพ แบบผู้ป่วยใน221IPD-MPIPDAการประกันสุขภาพ แบบผู้ป่วยใน (เพิ่มเติมพิเศษ)322OPDOPDAการประกันแบบผู้ป่วยนอก423OPD-ERIPDAการประกันแบบผู้ป่วยนอกฉุกเฉิน524CHECK UPOPDAค่าตรวจสุขภาพประจำปี625DTDentalAคุ้มครองทันตกรรม726MED.ACCMedAccidentAการประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ830IPD-BCIPDAการคลอดบุตร931HBOPDAค่าชดเชยรายได้1032DABIPDAผลประโยชน์ค่าชดเชยรายได้รายวัน1133PandemicIPDAการประกันคุ้มครองโรคติดต่อ1241Exp-IPDIPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยใน1342Exp-OPDOPDAขยายความคุ้มครองสุขภาพ แบบผู้ป่วยนอก1443Exp-EROPDAขยายความคุ้มครองผู้ป่วยนอกฉุกเฉิน1544Exp-IPD-BCIPDAขยายความคุ้มครองการคลอดบุตรIPD13PaymentDatedatetime วันที่จ่ายเงินRIG_View_ClaimHealth.PayDatedd/mm/yyyy (AD.)22/09/201914ClaimCausevarchar80สาเหตุการเคลมRIG_View_ClaimHealth.Claim_Cause URI15ClaimNovarchar12หมายเลขการเคลมRIG_View_ClaimHealth.Notify_N 20090900000116InvestigationExpensenumeric14,2ค่าใช้จ่ายในการสืบสวนfix 0.00 0.00 |


===== PAGE 1314194301 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Death (Actual) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม ชีวิต (Life Claim) และ อุบัติเหตุเสียชีวิต (Accident Death) เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงสินไหมทุกสถานะ เช่น อนุมัติ, ปฎิเสธ
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติ อยู่ภายในรอบ Quarter Period
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| PeriodFrom | string | Required | ช่วงเริ่มต้นของเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |
| PeriodTo | string | Required | ช่วงสิ้นสุดของเดือน/ปีที่ค้นหา | 202504 |  | yyyyMM (AD.) |
| TreatyCode | list | Optional | รหัสสัญญา สามารถค้นหาได้มากกว่า 1 treaty ได้ | DAI_Grp_Daiichi_Coins |  |  |
ให้ดู Quarter Period จากค่าที่ได้รับมาจากหน้าจอ (suthanee.sa 23/04/2026)

## Process
- ดึงข้อมูลสินไหมจาก tx_act_snap_claim_death โดยกรองเงื่อนไข ดังนี้ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Periodตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024Field วันที่พิจารณาสินไหม: tx_act_snap_claim_death.approve_date
- ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Period
- ตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- รายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- Field วันที่พิจารณาสินไหม: tx_act_snap_claim_death.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy โดย inner Join ด้วยเงื่อนไขดังนี้tx_act_snap_policy.policy_no = tx_act_snap_claim_death.policy_notx_act_snap_policy.policy_year = tx_act_snap_claim_death.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.policy_no = tx_act_snap_claim_death.policy_no
- tx_act_snap_policy.policy_year = tx_act_snap_claim_death.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_act_snap_certalteration โดย Left Join ด้วยเงื่อนไขดังนี้
- tx_act_snap_certalteration.policy_no = tx_act_snap_claim_death.policy_no
- tx_act_snap_certalteration.policy_year = tx_act_snap_claim_death.policy_year
- tx_act_snap_certalteration.certific_cust_no = tx_act_snap_claim_death.certific_cust_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Type (Source) | Size | Description | Field | Outputtx_stg_act_death_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 5 | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_act_snap_claim_death.period | period |  | 202209 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | tx_act_snap_claim_death.policy_no | policy_no |  | GH4639 |
| 3 | EffectiveDate | date |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_act_snap_policy.promise_date | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 4 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | tx_act_snap_claim_death.policy_year | policy_year |  | 7 |
| 5 | ReinsurNo | varchar | 10 | เลขที่กรมธรรม์ประกันต่อ | tx_act_snap_policy.re_insur_no | reinsure_no |  | 1807003 |
| 6 | Certno | varchar | 8 | หมายเลขสมาชิก | tx_act_snap_claim_death.certific_cust_no | certific_cust_no |  | 01610 |
| 7 | Age | numeric | 2 | อายุของผู้เอาประกัน | tx_act_snap_claim_death.attn_age | attn_age |  | 28 |
| 8 | Sex | varchar | 1 | เพศ1 = ผู้ชาย2 = ผู้หญิง | tx_act_snap_certificate_cust.sex | sex | แปลงค่าจาก tx_act_snap_certificate_cust.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | date |  | วันที่เกิดเหตุ | tx_act_snap_claim_death.death_date | death_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 10 | ApprovedDate | date |  | วันที่อนุมัติ | tx_act_snap_claim_death.approve_date | approve_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 11 | SumInsuredLife | numeric | 14,2 | ทุนชีวิต ตามแผน (ที่ซื้อ) | tx_act_snap_claim_death.life_insur_request | life_insur_request |  | 300,000.00 |
| 12 | SumInsuredAccident | numeric | 14,2 | ทุนอุบัติเหตุ ตามแผน (ที่ซื้อ) | tx_act_snap_claim_death.acc_insur_request | acc_insur_request |  | 300,000.00 |
| 13 | ClaimLife | numeric | 14,2 | เคลมชีวิตที่อนุมัติ | tx_act_snap_claim_death.life_insur | claim_life |  | 300,000.00 |
| 14 | ClaimAccident | numeric | 14,2 | เคลมอุบัติเหตุที่อนุมัติ | tx_act_snap_claim_death.acc_insur | claim_acc |  | 300,000.00 |
| 15 | TotalClaim | numeric | 14,2 | จำนวนเงินที่จ่าย | claim_life+claim_acc | total_claim | ผลรวมของ tx_act_snap_claim_death.life_insur และ tx_act_snap_claim_death.acc_insur | 300,000.00 |
| 16 | Type | varchar | 10 | ประเภทรับแจ้งกำหนดให้มีค่า “Death” | fix 'Death' | claim_type | fix 'Death' | Death |
| 17 | PaymentDate | date |  | วันที่จ่ายเงิน | tx_act_snap_claim_death.pay_date | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 18 | ClaimCause | varchar | 255 | สาเหตุการเคลม | tx_act_snap_claim_death.death_cause_remark | death_cause_remark |  | Acute gastroenteritis |
| 19 | InvestigationExpense | numeric | 14,2 | ค่าใช้จ่ายในการสืบสวน |  | investigate_expense | fix 0 | 0.00 |
| 20 | ClaimNo | varchar | 12 | หมายเลขการเคลม | tx_act_snap_claim_death.inform_no | inform_no |  | 256701810 |
| 21 | TreatyCode | varchar | 50 | รหัสสัญญา | tx_act_snap_policy.re_insur_no | treaty_code | ระบบแปลงค่าจาก tx_act_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | DAI_Grp_Daiichi_Coins |
| 22 | ClassNo | numeric | 3 | Occupation class | tx_act_snap_certificate_cust.class_no | class_no |  |  |
| 23 | ClaimStatus | numeric | 3 | สถานะเคลม | tx_act_snap_claim_death.approve_claim | claim_status |  |  |
| 24 | ConsiderSeq | int |  | การพิจารณาเคลมครั้งที่ | tx_act_snap_claim_death.consider_seq | consider_seq |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1314194309 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Dismemberment/TPD (Actual) =====
Overview
Protocol
Operation
Input
Process
Query
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม Dismemberment และ TPD เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงสินไหมทุกสถานะ เช่น อนุมัติ, ปฎิเสธ
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติ อยู่ภายในรอบ Quarter Period
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| PeriodFrom | string | Required | ช่วงเริ่มต้นของเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |
| PeriodTo | string | Required | ช่วงสิ้นสุดของเดือน/ปีที่ค้นหา | 202504 |  | yyyyMM (AD.) |
ให้ดู Quarter Period จากค่าที่ได้รับมาจากหน้าจอ (suthanee.sa 23/04/2026)

## Process
- ดึงข้อมูลสินไหมจาก tx_act_snap_claimtpd โดยกรองเงื่อนไข ดังนี้ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Periodตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024tx_act_snap_claimtpd.approve_date
- ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Period
- ตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- รายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- tx_act_snap_claimtpd.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy โดย Inner Join ด้วยเงื่อนไขดังนี้tx_act_snap_policy.policy_no = tx_act_snap_claimtpd.policy_notx_act_snap_policy.policy_year = tx_act_snap_claimtpd.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.policy_no = tx_act_snap_claimtpd.policy_no
- tx_act_snap_policy.policy_year = tx_act_snap_claimtpd.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_act_snap_certificate_custโดย Join ด้วยเงื่อนไขดังนี้
- tx_act_snap_certificate_cust.policy_no = tx_act_snap_claimtpd.policy_no
- tx_act_snap_certificate_cust.policy_year = tx_act_snap_claimtpd.policy_year
- tx_act_snap_certificate_cust.certific_cust_no = tx_act_snap_claimtpd.certific_cust_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้

## Query
<![CDATA[with date_params as ( 
  select 
    to_date(:periodFrom || '01', 'YYYYMMDD')::date as date_from, 
    (to_date(:periodTo || '01', 'YYYYMMDD') + interval '1 month' - interval '1 day')::date as date_to 
), 
tpd_claim_batch as ( 
  select 
    row_number() over (order by tpd.rig_v_clm_tpd_id) as rn, 
    tpd.rig_v_clm_tpd_id, 
    :rigProcessHdId as rig_process_hd_id, 
    tpd.period, 
    tpd.policy_no, 
    pol.re_insur_no as reinsure_no, 
    pol.promise_date, 
    tpd.policy_year, 
    tpd.certific_cust_no, 
    tpd.attn_age, 
    coalesce(lk.description, cust.sex::varchar) as sex, 
    tpd.accident_date, 
    tpd.approve_date, 
    tpd.acc_insur as dismemberment_insur_request, 
    tpd.tpd_insur as tpd_insur_request, 
    cust.life_insur as life_insur --new
    tpd.approve_acc_insur as claim_accident, 
    tpd.approve_tpd_insur as claim_tpd, 
    (coalesce(tpd.approve_acc_insur,0) + coalesce(tpd.approve_tpd_insur,0)) as total_claim, 
    coalesce(type_lkp.description, tpd.claim_status::varchar) as claim_type,  
    tpd.pay_date as pay_date, 
    tpd.accident_cause as claim_cause, 
    tpd.inform_no as inform_no, 
    0::numeric as investigate_expense, 
    coalesce(treaty_lkp.description, pol.re_insur_no) as treaty_code, 
    cust.class_no as class_no, 
    tpd.approve_claim 
  from tx_act_snap_claimtpd tpd 
  join date_params p on true 
  join tx_act_snap_policy pol 
    on pol.policy_no = tpd.policy_no 
   and pol.policy_year = tpd.policy_year 
   and pol.re_insur_no is not null 
  left join tx_act_snap_certificate_cust cust 
    on cust.policy_no = tpd.policy_no 
   and cust.policy_year = tpd.policy_year 
   and cust.certific_cust_no = tpd.certific_cust_no 
  left join cf_lookup_catalog lk 
    on lk.parent_id = 1002500 
   and lk.lookup_key = cust.sex::varchar 
 left join cf_lookup_catalog type_lkp  
  on type_lkp.parent_id = 1002700  
 and type_lkp.lookup_key = tpd.claim_status::varchar  
  left join lateral ( 
    select l.description 
    from cf_lookup_catalog l 
    where l.parent_id = 1000100 
      and ( 
        pol.re_insur_no like l.lookup_key 
        or (l.lookup_key = '[0-9][0-9]%' and pol.re_insur_no ~ '^[0-9]{2}') 
      ) 
    order by length(l.lookup_key) desc 
    limit 1 
  ) treaty_lkp on true 
  where tpd.approve_date >= p.date_from 
    and tpd.approve_date < (p.date_to + interval '1 day') 
 and treaty_lkp.description in (<treatyDescList>) 
 and tpd.rig_v_clm_tpd_id > :lastId 
  order by tpd.rig_v_clm_tpd_id 
  limit :limit 
), 
max_death as ( 
  select max(rig_v_clm_tpd_id) as max_last_id 
  from tpd_claim_batch 
), 
ins as ( 
  insert into tx_stg_act_tpd_claim ( 
rig_process_hd_id, 
period, 
policy_no, 
reinsur_no, 
promise_date, 
policy_year, 
certific_cust_no, 
attn_age, 
sex, 
accident_date, 
approved_date, 
dismemberment_insur_request, 
tpd_insur_request, 
life_insur, --new
claim_accident, 
claim_tpd, 
total_claim, 
claim_type, 
pay_date, 
claim_cause, 
inform_no, 
investigation_expense, 
treaty_code, 
class_no, 
claim_status, 
created_date, 
created_by, 
updated_date, 
updated_by 
  ) 
  select 
    b.rig_process_hd_id, b.period, b.policy_no, b.reinsure_no, b.promise_date, b.policy_year, 
    b.certific_cust_no, b.attn_age, b.sex, b.accident_date, b.approve_date, 
    b.dismemberment_insur_request, b.tpd_insur_request, b.life_insur,--new
    b.claim_accident, b.claim_tpd, b.total_claim, b.claim_type, 
    b.pay_date, b.claim_cause, b.inform_no, b.investigate_expense, b.treaty_code, b.class_no, b.approve_claim, 
    now(), :userName, now(), :userName 
  from tpd_claim_batch b 
  returning 1 
) 
select 
  (select count(*) from ins) as insert_row_count, 
  (select max_last_id from max_death) as max_id;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size (Source) | Outputtx_stg_act_tpd_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_act_snap_claimtpd.period | varchar | 5 | period |  | 1701001 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_act_snap_claimtpd.policy_no | varchar | 8 | policy_no |  | GH4639 |
| 3 | ReinsurNo | เลขที่กรมธรรม์ ประกันต่อ | tx_est_snap_policy.reinsure_no | varchar | 10 | reinsure_no |  |  |
| 4 | EffectiveDate | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_est_snap_policy.promise_date | date |  | promise_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 5 | PolicyYear | ปีกรมธรรม์ | tx_act_snap_claimtpd.policy_year | numeric | 2 | policy_year |  | 16 |
| 6 | Certno | หมายเลขสมาชิก | tx_act_snap_claimtpd.certific_cust_no | varchar | 8 | certific_cust_no |  | 01610 |
| 7 | Age | อายุของผู้เอาประกัน | tx_act_snap_claimtpd.attn_age | numeric | 2 | attn_age |  | 30 |
| 8 | Sex | เพศ | tx_act_snap_certificate_cust.sex | varchar | 1 | sex | แปลงค่าจาก tx_act_snap_certificate_cust.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | วันที่เกิดเหตุ | tx_act_snap_claimtpd.accident_date | date |  | accident_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 10 | ApprovedDate | วันที่อนุมัติ | tx_act_snap_claimtpd.approve_date | date |  | approved_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 12 | SumInsuredDismenberment | ทุนประกันชีวิต อุบัติเหตุ | tx_act_snap_claimtpd.acc_insur | numeric | 14,2 | dismemberment_insur_request |  |  |
| 13 | SumInsuredTPD | ทุนประกันชีวิต ทุพพลภาพ | tx_act_snap_claimtpd.tpd_insur | numeric | 14,2 | tpd_insur_request |  |  |
|  | SumInsuredLife | ทุนประกันชีวิต | tx_act_snap_certificate_cust.life_insur | numeric | 14,2 | life_insur |  |  |
| 15 | ClaimAccident | เคลมอุบัติเหตุ | tx_act_snap_claimtpd.approve_acc_insur | numeric | 14,2 | claim_accident |  |  |
| 16 | ClaimTPD | เคลมทุพพลภาพ | tx_act_snap_claimtpd.approve_tpd_insur | numeric | 14,2 | claim_tpd |  |  |
| 17 | TotalClaim | จำนวนเงินที่จ่าย |  | numeric | 14,2 | total_claim | ผลรวมของ tx_act_snap_claimtpd.approve_acc_insur และ tx_act_snap_claimtpd.approve_tpd_insur |  |
| 18 | Type | ประเภทรับแจ้ง0:สูญเสียอวัยวะ1:ทุพพลภาพทุกกรณี (TPD)2:ทุพพลภาพจากอุบัติเหตุ | tx_act_snap_claimtpd.claim_status | varchar | 20 | claim_type | แปลงค่าจาก tx_act_snap_claimtpd.claim_status โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002700 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  |
| 19 | PaymentDate | วันที่จ่ายเงิน | tx_act_snap_claimtpd.pay_date | date |  | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 2022-09-26 |
| 20 | ClaimCause | สาเหตุการเคลม | tx_act_snap_claimtpd.accident_cause | varchar | 80 | claim_cause |  |  |
| 21 | InvestigationExpense | ค่าใช้จ่ายในการสืบสวน |  | numeric | 14,2 | investigation_expense | บันทึกค่า 0 | 0 |
| 22 | ClaimNo | หมายเลขการเคลม | tx_act_snap_claimtpd.inform_no | varchar | 12 | inform_no |  |  |
| 23 | TreatyCode | รหัสสัญญา | tx_act_snap_policy.re_insur_no | varchar | 50 | treaty_code | ระบบแปลงค่าจาก tx_act_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า re_insur_no ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description |  |
| 22 | ClassNo | Occupation class | tx_act_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |
| 23 | ClaimStatus | สถานะเคลม | tx_act_snap_claimtpd.claim_statustx_act_snap_claimtpd.approve_claim (suthanee.sa 24/03/2026) | numeric | 3 | claim_status |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1314194312 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-003 ข้อมูล Claim > Process ดึงข้อมูล Claim Health (Actual) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
สำหรับดึงข้อมูลสินไหมเคลม Health เพื่อใช้ในกระบวนการ Reinsurance โดยรองรับการเลือกดึงข้อมูลเฉพาะ บาง Treaty ตามที่ระบุ
เงื่อนไขในการดึงข้อมูล
- ดึงเฉพาะกรมธรรม์ที่มีการส่ง Reinsurance เท่านั้น
- ดึงสินไหมทุกสถานะ เช่น อนุมัติ, ปฎิเสธ
- ดึงเฉพาะสินไหมที่มี เดือนของวันที่อนุมัติ อยู่ภายในรอบ Quarter Period
ขอบเขตการเลือกข้อมูล
- รองรับการเลือก Treaty แบบระบุรายการ

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| PeriodFrom | string | Required | ช่วงเริ่มต้นของเดือน/ปีที่ค้นหา | 202501 |  | yyyyMM (AD.) |
| PeriodTo | string | Required | ช่วงสิ้นสุดของเดือน/ปีที่ค้นหา | 202504 |  | yyyyMM (AD.) |
ให้ดู Quarter Period จากค่าที่ได้รับมาจากหน้าจอ (suthanee.sa 23/04/2026)

## Process
- ดึงข้อมูลสินไหมจาก tx_act_snap_claimhealth โดยกรองเงื่อนไข ดังนี้ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Periodตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024Field วันที่พิจารณาสินไหม: tx_act_snap_claimhealth.approve_date
- ต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Period
- ตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- รายงาน 2024Q2 → เลือก Claim ที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- Field วันที่พิจารณาสินไหม: tx_act_snap_claimhealth.approve_date
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy โดย Inner Join ด้วยเงื่อนไขดังนี้tx_act_snap_policy.policy_no = tx_act_snap_claimhealth.policy_notx_act_snap_policy.policy_year = tx_act_snap_claimhealth.policy_yearโดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.policy_no = tx_act_snap_claimhealth.policy_no
- tx_act_snap_policy.policy_year = tx_act_snap_claimhealth.policy_year
- โดยกรองเงื่อนไข ดังนี้ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- ต้องเป็นรายการที่ส่ง Reinsurance เท่านั้นtx_act_snap_policy.re_insur_no ต้องมีค่า
- tx_act_snap_policy.re_insur_no ต้องมีค่า
- ดึงข้อมูลสมาชิกจาก tx_act_snap_certificate_custโดย Join ด้วยเงื่อนไขดังนี้
- tx_act_snap_certificate_cust.policy_no = tx_act_snap_claimhealth.policy_no
- tx_act_snap_certificate_cust.policy_year = tx_act_snap_claimhealth.policy_year
- tx_act_snap_certificate_cust.certific_cust_no = tx_act_snap_claimhealth.certific_cust_no
- ดึงประเภทการเคลมจาก cf_claim_type โดย Join ด้วยเงื่อนไข ดังนี้cf_claim_type.rd_No = tx_act_snap_claimhealth.rd_no
- cf_claim_type.rd_No = tx_act_snap_claimhealth.rd_no
- ระบบต้องรองรับการดึงข้อมูลสินไหม แค่เฉพาะบาง Treaty Code ได้
- Left join ดึงยอดจ่ายจากระบบ cms ที่ tx_rig_act_claim_cmstx_act_snap_claimhealth.notify_no = tx_rig_act_claim_cms.claim_numbertx_act_snap_claimhealth.policy_no = tx_rig_act_claim_cms.policy_no
- tx_act_snap_claimhealth.notify_no = tx_rig_act_claim_cms.claim_number
- tx_act_snap_claimhealth.policy_no = tx_rig_act_claim_cms.policy_no

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Field | Type (Source) | Size | Outputtx_stg_act_health_claim | เงื่อนไขการบันทึก | Example |
| 1 | Period | รอบประมวลผล กำหนดจากเดือนที่มีการอนุมัติสินไหมนั้น | tx_act_snap_claimhealth.period | varchar | 5 | period | yyyyMM (AD.) | 201909 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_act_snap_claimhealth.policy_no | varchar | 8 | policy_no |  | GH1954 |
| 3 | ReinsurNo | เลขที่กรมธรรม์ ประกันต่อ | tx_act_snap_policy.re_insur_no | varchar | 10 | reinsure_no |  | DG071 |
| 4 | EffectiveDate | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_act_snap_policy.promise_date | date |  | effective_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 01/09/2019 |
| 5 | PolicyYear | ปีกรมธรรม์ | tx_act_snap_claimhealth.policy_year | numeric | 2 | policy_year |  | 1 |
| 6 | Certno | หมายเลขสมาชิก | tx_act_snap_claimhealth.cerno | varchar | 8 | cert_no |  | 10197 |
| 7 | Age | อายุของผู้เอาประกัน | tx_act_snap_claimhealth.attn_age | numeric | 2 | age |  | 25 |
| 8 | Sex | เพศ | tx_act_snap_certificate_cust.sex | varchar | 1 | sex | แปลงค่าจาก tx_act_snap_certificate_cust.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | F |
| 9 | AccidentDate | วันที่เกิดเหตุ | tx_act_snap_claimhealth.accident_date | date |  | accident_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 01/09/2019 |
| 10 | ApprovedDate | วันที่อนุมัติ | tx_act_snap_claimhealth.approve_date | date |  | approved_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 21/09/2019 |
| 11 | ClaimAmount | จำนวนเงินที่จ่าย | CASEWHEN tx_act_snap_claimhealth.pay_amount > 0 THEN GREATEST(COALESCE(tx_act_snap_claimhealth.pay_amount, 0) - COALESCE(tx_rig_act_claim_cms.client_paid, 0), 0) ELSE GREATEST(COALESCE(tx_rig_act_claim_cms.paid, 0) - COALESCE(tx_rig_act_claim_cms.client_paid, 0), 0)END AS claim_amountCASE WHEN tx_act_snap_claimhealth.pay_amount > 0 THEN GREATEST(COALESCE(tx_act_snap_claimhealth.pay_amount, 0) - COALESCE(tx_rig_act_claim_cms.client_paid, 0), 0) ELSE -- เช็คว่าถ้าผลลัพธ์เป็น 0 ให้ไปใช้ claim_right แทน COALESCE( NULLIF(GREATEST(COALESCE(tx_rig_act_claim_cms.paid, 0) - COALESCE(tx_rig_act_claim_cms.client_paid, 0), 0), 0), tx_act_snap_claimhealth.claim_right, 0 )END AS claim_amount | numeric | 14,2 | claim_amount |  | 300,000.00 |
| 12 | Type | ประเภทรับแจ้ง | cf_claim_type.claim_type_group | varchar | 10 | claim_type | กรณีพบค่า cf_claim_type.claim_type_group ให้ใช้ค่าจาก cf_claim_type.claim_type_groupกรณีไม่พบค่า ให้บันทึกค่า 'Other' | IPD |
| 13 | PaymentDate | วันที่จ่ายเงิน | tx_act_snap_claimhealth.pay_date | date |  | pay_date | แปลงค่า: YYYYMMDD (ค.ศ.) | 22/09/2019 |
| 14 | ClaimCause | สาเหตุการเคลม | tx_act_snap_claimhealth.cause_detail | varchar | 255 | claim_cause |  | URI |
| 15 | ClaimNo | หมายเลขการเคลม | tx_act_snap_claimhealth.notify_no | varchar | 12 | notify_no |  | 200909000001 |
| 16 | InvestigationExpense | ค่าใช้จ่ายในการสืบสวน |  | numeric | 14,2 | investigation_expense | บันทึกค่า 0 | 0 |
| 17 | TreatyCode | รหัสสัญญา | tx_act_snap_policy.re_insur_no | varchar | 50 |  | ระบบแปลงค่าจาก tx_act_snap_policy.re_insur_no โดยพิจารณาจาก อักขระ 2 หลักแรก ของค่า ReInsur_No ตามเงื่อนไขดังนี้นำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | DAI_Grp_Daiichi_Coins |
| 18 | ClassNo | Occupation class | tx_act_snap_certificate_cust.class_no | numeric | 3 | class_no |  |  |
| 19 | ClaimStatus | สถานะเคลม | tx_act_snap_claimhealth.approve_claim | numeric | 3 | claim_status |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1312489728 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-004 ข้อมูล Actual Premium Layer =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ข้อมูลแยก Layer ของแต่ละกรมธรรม์ภายใต้สัญญา Gibraltar Group EB โดยพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย และจัดแบ่งชั้นความคุ้มครอง (Layer 1–3) ตามช่วงทุนที่กำหนด พร้อมรวบรวมจำนวนสมาชิก ทุนคุ้มครอง และอัตราเบี้ยประกันภัยในแต่ละประเภท เพื่อใช้ในการคำนวณเบี้ย Reinsurance และประกอบการวิเคราะห์ความเสี่ยงของกรมธรรม์ โดยข้อมูลที่ได้จะครอบคลุมเลขกรมธรรม์ ช่วงวันที่คุ้มครอง การแบ่ง Layer ตามระดับทุน รวมถึงจำนวนสมาชิก ทุนคุ้มครองในแต่ละหมวด และอัตราเบี้ยต่อทุน 1,000 บาท ตลอดจนยอดเบี้ยประกันภัยของความคุ้มครองทุกประเภทภายในกรมธรรม์นั้น |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-02,PS-05 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-03 Actual - Snapshot View Tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูล โดยอ้างอิงจากปีและเดือนของ PromiseDate (วันเริ่มสัญญาของปีปัจจุบัน) เช่น หาก PromiseDate = ‘2025-09-30’ จะได้ Period = ‘202509’Treaty_code = รหัสสัญญา click for lookup... <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ที่ตรงตามรอบเดือน (Period) และการคัดกรองตามรหัสสัญญา (Treaty Code)ข้อมูลผลลัพธ์จะประกอบด้วยรายละเอียดกรมธรรม์ที่อยู่ในช่วงความคุ้มครองของปีปัจจุบันตาม PromiseDate และพร้อมสำหรับนำไปใช้ในการประมวลผล |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล Actual Premium Layerระบบบันทึกข้อมูลที่ตาราง tx_stg_act_prem_layerNo.NameType (Source)SizeDescriptionFieldgroup by cf_layer_by_treaty.layer_of_sa,RIG_View_CertInforce.PolicyNoเงื่อนไขการบันทึกExample1Periodvarchar6รอบประมวลผลRIG_View_Policy.PromiseDateyyyyMM (AD.)2021042PolicyNovarchar8เลขที่กรมธรรม์RIG_View_Policy.PolicyNo GH0243EffectiveDatedatetime วันเริ่มสัญญาปีปัจจุบันRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)01/01/20254Levelvarchar2การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาทcf_layer_by_treaty.layer_of_sa L15AmountLifenumeric14,0จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)1176AmountAccidentnumeric14,0จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)1177AmountMedAccidentnumeric14,0จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.008AmountTPDnumeric14,0จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)count(RIG_View_CertInforce.CerNo)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.009LifeInsurenumeric14,2ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.LifeInsur)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0010AccidentInsurenumeric14,2ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.AccInsur)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0011MedAccidentInsurenumeric14,2ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.MedInsur)where RIG_View_CertInforce.MedInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0012TPDInsurenumeric14,2ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level)sum(RIG_View_CertInforce.TPDInsur)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)11,700,000.0013LifePremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาทRIG_View_Policy.LifePremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)3.3014AccidentPremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาทRIG_View_Policy.AccPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4315MedAccidentPremium Ratenumeric14,414,2Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาทRIG_View_Policy.MedPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4316TPDPremiumRatenumeric14,414,2Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาทRIG_View_Policy.TPDPremRatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.####coalesce(#,0)1.4317LifePremiumnumeric14,2เบี้ยของความคุ้มครองชีวิตsum(RIG_View_CertInforce.LifePrem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)38,610.0018LifeExtraPremiumnumeric14,2เบี้ยของความคุ้มครองชีวิต (Extra)sum(RIG_View_CertInforce.LifeE1Prem)where RIG_View_CertInforce.LifeInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.LifeInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)0.0019AccidentPremiumnumeric14,2เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปีsum(RIG_View_CertInforce.AccPrem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)16,731.0020AccidentExtraPremiumnumeric14,2เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปีsum(RIG_View_CertInforce.AccE2Prem)where RIG_View_CertInforce.AccInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.AccInsur > cf_layer_by_treaty.minimum_sawhere RIG_View_CertInforce.Age <= 70PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0)0.0021MedAccidentPremiumnumeric14,2เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุsum(RIG_View_CertInforce.MedAccPrem)where RIG_View_CertInforce.MedAccPrem <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.MedAccPrem > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)16,731.0022TPDPremiumnumeric14,2เบี้ยของความคุ้มครองทุพพลภาพsum(RIG_View_CertInforce.TPDPrem)where RIG_View_CertInforce.TPDInsur <= cf_layer_by_treaty.maximum_sa and RIG_View_CertInforce.TPDInsur > cf_layer_by_treaty.minimum_saPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)16,731.0023IPDPremiumnumeric14,2เบี้ยของความคุ้มครองผู้ป่วยในsum(RIG_View_CertInforce.IPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.0024OPD Premiumnumeric14,2เบี้ยของความคุ้มครองผู้ป่วยนอกsum(RIG_View_CertInforce.OPDPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.0025Dental Premiumnumeric14,2เบี้ยของความคุ้มครองทันตกรรมsum(RIG_View_CertInforce.DentalPrem)group by PolicyNo and Level = 1 (Level อื่นๆภายใต้ PolicyNo เดียวกันระบุ 0.00)PolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.##coalesce(#,0.00)100,000.00 |


===== PAGE 1314423105 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-004 ข้อมูล Actual Premium Layer > Process ข้อมูล Actual Premium Layer =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูล Estimated Premium Layer>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy โดยกรองเงื่อนไข ดังนี้
- สถานะกรมธรรม์มีผล
- policy_status not in ('L','C')
- ไม่ใช่กรมธรรม์ GL
- policy code <> 2
- ดึงข้อมูลสมาชิก โดยแบ่งเป็น 3 กลุ่ม และตรวจสอบตามลำดับ หากพบข้อมูลในกลุ่มลำดับที่ 1 ให้ใช้ข้อมูลจากกลุ่มนั้นทันที หากไม่พบจึงพิจารณากลุ่มถัดไปตามลำดับStep 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_dateStep 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1Step 3: ข้อมูลสมาชิกปัจจุบันเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_act_snap_certificate_cust.policy_no = tx_act_snap_policy.policy_notx_act_snap_certificate_cust.policy_year = tx_act_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- Step 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_no
- tx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_year
- tx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_date
- group by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- Step 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_yearกรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_no
- tx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_year
- กรองเงื่อนไข Lotno แรกtx_snap_cert_inforce.lot_no = 1
- tx_snap_cert_inforce.lot_no = 1
- Step 3: ข้อมูลสมาชิกปัจจุบันเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_act_snap_certificate_cust.policy_no = tx_act_snap_policy.policy_notx_act_snap_certificate_cust.policy_year = tx_act_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_certificate_cust โดยเงื่อนไขการ Join ดังนี้tx_act_snap_certificate_cust.policy_no = tx_act_snap_policy.policy_notx_act_snap_certificate_cust.policy_year = tx_act_snap_policy.policy_yearกรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- tx_act_snap_certificate_cust.policy_no = tx_act_snap_policy.policy_no
- tx_act_snap_certificate_cust.policy_year = tx_act_snap_policy.policy_year
- กรองสถานะสมาชิกต้องมีผลtx_est_snap_certificate_cust .status in ('I','B')
- tx_est_snap_certificate_cust .status in ('I','B')
- สำหรับข้อมูลลำดับที่ 2, 3 จะต้องมีการจัดกลุ่มสมาชิกตาม Layer ที่กำหนด ตามเงื่อนไขทุนชีวิตของแต่ละรายสมาชิก ตัวอย่าง ปัจจุบันมี 3 LayersLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้นดึงข้อมูล ri condition เพื่อใช้กำหนดเรททุน Layerดึงข้อมูลจาก cf_rig_condition_dtให้พิจารณาทุนชีวิตของสมาชิก แล้วจับคู่กับช่วงของ Layerสมาชิกจะอยู่ใน Layer ใด เมื่อ ทุนชีวิตของสมาชิก > minimum และ ทุนชีวิตของสมาชิก <= maximumกรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0
- ตัวอย่าง ปัจจุบันมี 3 LayersLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูล ri condition เพื่อใช้กำหนดเรททุน Layerดึงข้อมูลจาก cf_rig_condition_dt
- ดึงข้อมูลจาก cf_rig_condition_dt
- ให้พิจารณาทุนชีวิตของสมาชิก แล้วจับคู่กับช่วงของ Layerสมาชิกจะอยู่ใน Layer ใด เมื่อ ทุนชีวิตของสมาชิก > minimum และ ทุนชีวิตของสมาชิก <= maximumกรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0
- สมาชิกจะอยู่ใน Layer ใด เมื่อ ทุนชีวิตของสมาชิก > minimum และ ทุนชีวิตของสมาชิก <= maximum
- กรณีสมาชิกมีค่าทุนชีวิตเป็น NULL ให้กำหนดเป็น 0

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input ข้อมูล | เงื่อนไขการบันทึก |
| Step 1 | Step 2 | Step 3 | Type | Size | Outputtx_stg_act_prem_layer | Step 1 | Step 2 | Step 3 | รูปแบบการบันทึก | Example |
| 1 | Period | รอบประมวลผล | tx_act_snap_policy.period | varchar | 6 | period |  |  |  | yyyyMM (AD.) | 202104 |
| 2 | PolicyNo | เลขที่กรมธรรม์ | tx_act_snap_policy.policy_no | varchar | 8 | policy_no |  |  |  |  | GH024 |
| 3 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_act_snap_policy.promise_date | datetime |  | effective_date |  |  |  | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ Click here to expand... จะพิจารณาจากทุนคุ้มครองของสมาชิกแต่ละราย โดยต้องระบุเป็นหนึ่งในชั้นความคุ้มครองต่อไปนี้ และต้องไม่เป็นค่าว่าง:L1 = Layer 1 : ทุนคุ้มครองไม่เกิน 5 ล้านบาทL2 = Layer 2 : ทุนคุ้มครองมากกว่า 5 ล้านบาท แต่ไม่เกิน 20 ล้านบาทL3 = Layer 3 : ทุนคุ้มครองมากกว่า 20 ล้านบาท | Default = 1 | cf_rig_condition_dt.layer | cf_rig_condition_dt.layer | varchar | 2 | level |  |  |  |  | L1 |
| 5 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_life_amt)where period_date = promise_date | tx_act_snap_cert_inforce.cer_notx_act_snap_cert_inforce.life_insur | tx_act_snap_certificate_cust.cer_notx_act_snap_certificate_cust.life_insur | numeric | 14,0 | amount_life | total_life_amt | count(cer_no)where life_insur > 0 | count(cer_no)where life_insur > 0 | #,###.##coalesce(#,0) | 117 |
| 6 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_acc_amt)where period_date = promise_date | tx_act_snap_cert_inforce.cer_notx_act_snap_cert_inforce.acc_insurtx_act_snap_cert_inforce.age | tx_act_snap_certificate_cust.cer_notx_act_snap_certificate_cust.acc_insurtx_act_snap_certificate_cust.age | numeric | 14,0 | amount_accident | total_acc_amt | count(cer_no)where acc_insur > 0 and age <=70 | count(cer_no)where acc_insur > 0 and age <=70 | #,###.##coalesce(#,0) | 117 |
| 7 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_med_amt)where period_date = promise_date | tx_act_snap_cert_inforce.cer_notx_act_snap_cert_inforce.med_insur | tx_act_snap_certificate_cust.cer_notx_act_snap_certificate_cust.med_insur | numeric | 14,0 | amount_med_accident | total_med_amt | count(cer_no)where med_insur > 0 | count(cer_no)where med_insur > 0 | #,###.##coalesce(#,0) | 11,700,000.00 |
| 8 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_tpd_amt)where period_date = promise_date | tx_act_snap_cert_inforce.cer_notx_act_snap_cert_inforce.tpd_insur | tx_act_snap_certificate_cust.cer_notx_act_snap_certificate_cust.tpd_insur | numeric | 14,0 | amount_tpd | total_tpd_amt | count(cer_no)where tpd_insur > 0 | count(cer_no)where tpd_insur > 0 and | #,###.##coalesce(#,0) | 11,700,000.00 |
| 9 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_life_insur)where period_date = promise_date | tx_act_snap_cert_inforce.life_insur | tx_act_snap_certificate_cust.life_insur | numeric | 14,2 | life_insure | total_life_insur | sum(life_insur) | sum(life_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 10 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_acc_insur)where period_date = promise_date | tx_act_snap_cert_inforce.acc_insurtx_act_snap_cert_inforce.age | tx_act_snap_certificate_cust.acc_insurtx_act_snap_certificate_cust.age | numeric | 14,2 | accident_insure | total_acc_insur | sum(acc_insur)where age <=70 | sum(acc_insur)where age <=70 | #,###.##coalesce(#,0) | 11,700,000.00 |
| 11 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_med_insur)where period_date = promise_date | tx_act_snap_cert_inforce.med_insur | tx_act_snap_certificate_cust.med_insurtx_act_snap_certificate_cust.status | numeric | 14,2 | med_accident_insure | total_med_insur | sum(med_insur) | sum(med_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 12 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | sum(tx_act_snap_unname_policy.total_tpd_insur)where period_date = promise_date | tx_act_snap_cert_inforce.tpd_insur | tx_act_snap_certificate_cust.tpd_insur | numeric | 14,2 | tpd_insure | total_tpd_insur | sum(tpd_insur) | sum(tpd_insur) | #,###.##coalesce(#,0) | 11,700,000.00 |
| 13 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((LifePremium + LifeExtraPremium) / LifeInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.life_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | life_prem_rate | life_prem_rate | life_prem_rate | life_prem_rate | #,###.##coalesce(#,0) | 3.3 |
| 14 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round(((AccidentPremium + AccidentExtraPremium) / AccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.acc_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | accident_prem_rate | acc_prem_rate | acc_prem_rate | acc_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 15 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((MedAccidentPremium / MedAccidentInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.med_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | med_accident_prem_rate | med_prem_rate | med_prem_rate | med_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 16 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | ถ้า tx_act_snap_policy.rate_flag = 1 และ EffectiveDate มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Round((TPDPremium / TPDInsure) * 1000 , 4) แสดงรายละเอียด (ผลรวมเบี้ยแยกแต่ละความคุ้มครอง( / ผลรวมทุนแยกแต่ละความคุ้มครอง) x 1,000 ถ้า tx_act_snap_policy.rate_flag <> 1 หรือ tx_est_snap_policy.rate_flag = 1 แต่ EffectiveDate น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500tx_act_snap_policy.tpd_prem_rateหมายเหตุ : ทุก Layer จะแสดง Rate เท่ากัน | numeric | 14,2 | tpd_prem_rate | tpd_prem_rate | tpd_prem_rateer | tpd_prem_rate | #,###.##coalesce(#,0) | 1.43 |
| 17 | LifePremium | เบี้ยของความคุ้มครองชีวิต | sum(tx_act_snap_unname_policy.total_life)group by policy_no | tx_act_snap_cert_inforce.life_premtx_act_snap_cert_inforce.life_insur | tx_act_snap_certificate_cust.life_premtx_act_snap_certificate_cust.life_insur | numeric | 14,2 | life_prem | total_life | sum(life_prem) | sum(life_prem) | #,###.##coalesce(#,0) | 38,610.00 |
| 18 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | sum(tx_act_snap_unname_policy.total_e1_net)group by policy_no | tx_act_snap_cert_inforce.life_e1_premtx_act_snap_cert_inforce.life_insur | tx_act_snap_certificate_cust.life_e1_premtx_act_snap_certificate_cust.life_insur | numeric | 14,2 | life_extra_prem | total_e1_net | sum(life_e1_prem) | sum(life_e1_prem) | #,###.##coalesce(#,0) | 0 |
| 19 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(tx_act_snap_unname_policy..total_acc)group by policy_no | tx_act_snap_cert_inforce.acc_premtx_act_snap_cert_inforce.acc_insur | tx_act_snap_certificate_cust.acc_premtx_act_snap_certificate_cust.acc_insur | numeric | 14,2 | accident_prem | total_acc | sum(acc_prem)where age <=70 | sum(acc_prem)where age <=70 | #,###.##coalesce(#,0) | 16,731.00 |
| 20 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | 0 | 0 | 0 | numeric | 14,2 | accident_extra_prem | 0 | 0 | 0 | #,###.##coalesce(#,0) | 0 |
| 21 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | sum(tx_act_snap_unname_policy.total_med)group by policy_no | tx_act_snap_cert_inforce.med_acc_prem | tx_act_snap_certificate_cust.med_acc_prem | numeric | 14,2 | med_accident_prem | total_med | sum(med_acc_prem) | sum(med_acc_prem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 22 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | sum(tx_act_snap_unname_policy.total_tpd)group by policy_no | tx_act_snap_cert_inforce.tpd_prem | tx_act_snap_certificate_cust.tpd_prem | numeric | 14,2 | tpd_prem | total_tpd | sum(tpd_prem) | sum(tpd_prem) | #,###.##coalesce(#,0.00) | 16,731.00 |
| 23 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | sum(tx_act_snap_unname_policy.total_ipd)group by policy_no | tx_act_snap_cert_inforce.ipd_premtx_act_snap_cert_inforce.policy_no | tx_act_snap_certificate_cust.med_plan_rate_ip_premtx_act_snap_certificate_cust.policy_no | numeric | 14,2 | ipd_prem | total_ipd | sum(ipd_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_ip_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 24 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | sum(tx_act_snap_unname_policy.total_opd)group by policy_no | tx_act_snap_cert_inforce.opd_premtx_act_snap_cert_inforce.policy_no | tx_act_snap_certificate_cust.med_plan_rate_op_premtx_act_snap_certificate_cust.policy_no | numeric | 14,2 | opd_prem | total_opd | sum(opd_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(med_plan_rate_op_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |
| 25 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | sum(tx_act_snap_unname_policy.dental)group by policy_no | tx_act_snap_cert_inforce.dental_premtx_act_snap_cert_inforce.policy_no | tx_act_snap_certificate_cust.dentaltx_act_snap_certificate_cust.policy_no | numeric | 14,2 | dental_prem | dental | sum(dental_prem) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | sum(dental) where Level = 1 (Level อื่นๆภายใต้ policy_no เดียวกันระบุ 0.00) | #,###.##coalesce(#,0.00) | 100,000.00 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1312489730 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-005 ข้อมูล (R01) List of inforce by member =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | จัดเตรียมข้อมูลรายละเอียดของสมาชิกภายใต้แต่ละกรมธรรม์ (R01) List of inforce by memberโดยดึงข้อมูลสำคัญที่เกี่ยวข้องกับความคุ้มครองของสมาชิก ได้แก่ เลขกรมธรรม์ ช่วงวันที่คุ้มครอง หมายเลขสมาชิก เพศ อายุ รวมถึงทุนคุ้มครองประเภทต่าง ๆ เช่น ทุนประกันชีวิตและทุนอุบัติเหตุ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-03,PS-06 |
| 3 | เวลาประมวลผล(Time) | ณ สิ้นเดือน และจะเริ่มทำงาน หลังจาก process RIG-PS-03 Actual - Snapshot Landing Tables ทำงานเสร็จสมบูรณ์ทั้งหมด |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูล โดยจับจาก ปี/เดือน ของ PromiseDate (วันเริ่มสัญญาปีปัจจุบัน) เช่นวันที่ '2025-09-30'จะได้ Period = '202509'Treaty Code = รหัสสัญญาประกันภัยต่อที่ใช้สำหรับคัดกรองข้อมูลกรมธรรม์ตามสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายละเอียดของสมาชิกภายใต้กรมธรรม์ที่ตรงกับงวดข้อมูล (Period) และรหัสสัญญา (Treaty Code) ที่ระบุ โดยข้อมูลจะประกอบด้วยเลขกรมธรรม์ ช่วงวันที่คุ้มครอง หมายเลขสมาชิก เพศ อายุ รวมถึงทุนคุ้มครองประเภทต่าง ๆ เช่น ทุนประกันชีวิตและทุนอุบัติเหตุ*ไม่มีรายการสมาชิกที่เป็น Alteration |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล (R01) List of inforce by member (Actual) ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลระบบบันทึกข้อมูลที่ตาราง tx_stg_act_inforce_memberNo.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodnumeric6Period รอบประมวลผลข้อมูลที่กำหนดจากเดือนและปีของวันที่เริ่มมีผลคุ้มครองของสมาชิก โดยระบบจะนำปีและเดือนของ PromiseDate มาแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นตัวระบุงวดข้อมูลของกรมธรรม์หรือสมาชิกในรอบนั้นตัวอย่าง:EffectDate = 2025-01-15 → Period = 202501RIG_View_Policy.PromiseDatePolicyStatus not in ('L',C')yyyyMM (AD.)2025012PolicyNovarchar20เลขกรมธรรม์RIG_View_CertInforce.PolicyNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') 3EffectiveDatedatetime วันที่คุ้มครองRIG_View_CertInforce.PromiseDatePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')dd/mm/yyyy (AD.)01/01/20254PolicyYearnumeric4ปีกรมธรรม์RIG_View_Policy.PolicyYearPolicyStatus not in ('L',C') 15CertNovarchar20หมายเลขสมาชิกRIG_View_CertInforce.CerNoPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B') 000016Sexvarchar1เพศRIG_View_CertInforce.SexPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')if RIG_View_CertInforce.Sex = 1 then 'M'if RIG_View_CertInforce.Sex = 2 then 'F'M7Agenumeric2อายุRIG_View_CertInforce.AgePolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')##348SumInsuredAccidentnumeric14,2ทุนประกันชีวิต อุบัติเหตุRIG_View_CertInforce.AccInsurPolicyStatus not in ('L',C')RIG_View_CertInforce.StatusMember in ('I','B')#,###.00coalesce(#,0.00)1,000.15 |


===== PAGE 1314194317 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-005 ข้อมูล (R01) List of inforce by member > Process ข้อมูล (R01) List of inforce by member (Actual) =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
- ดึงข้อมูลข้อมูลสมาชิก ณ ต้นงวด
- เอาเฉพาะกรมธรรม์ที่ ส่ง Reinsurer Treaty Thaire
- ดึงกรมธรรม์ที่มีวันเริ่มสัญญาย้อนหลัง 1 ปี
- สถานะ Member เป็น Active

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลจาก tx_act_snap_policyเอาเฉพาะกรมธรรม์ที่ ส่ง Reinsurer Treaty Thairetx_act_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปี ตั้งแต่ วันแรกของ Quarter Period – 1 ปีถึงวันสุดท้ายของ Quarter Periodวันเริ่มสัญญาดึงจาก ใช้ tx_act_snap_policy.promise_dateตัวอย่างทำ Report 2024Q3 จะดึงกรมธรรม์ที่มีวัน promise_date ตั้งแต่ 01/07/2023 - 30/09/2024
- เอาเฉพาะกรมธรรม์ที่ ส่ง Reinsurer Treaty Thairetx_act_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26
- tx_act_snap_policy.re_insur_no like "TG%" and "[0-9][0-9]%" (THREL_Grp_PA,GIB_Grp_Direct_EB) --07/05/26
- เลือกกรมธรรม์ที่เริ่มสัญญาย้อนหลัง 1 ปี ตั้งแต่ วันแรกของ Quarter Period – 1 ปีถึงวันสุดท้ายของ Quarter Periodวันเริ่มสัญญาดึงจาก ใช้ tx_act_snap_policy.promise_dateตัวอย่างทำ Report 2024Q3 จะดึงกรมธรรม์ที่มีวัน promise_date ตั้งแต่ 01/07/2023 - 30/09/2024
- วันเริ่มสัญญาดึงจาก ใช้ tx_act_snap_policy.promise_date
- ตัวอย่าง
- ทำ Report 2024Q3 จะดึงกรมธรรม์ที่มีวัน promise_date ตั้งแต่ 01/07/2023 - 30/09/2024
- ดึงข้อมูลรายสมาชิกปัจจุบันจาก tx_act_snap_cert_inforceโดย left join ด้วยเงื่อนไข tx_act_snap_policy.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_policy.policy_year = tx_act_snap_cert_inforce.policy_yearกรองข้อมูลดังนี้สถานะ member มีผล: tx_act_snap_cert_inforce.status_member in ('I','B') เป็นข้อมูลต้นสัญญา tx_act_snap_cert_inforce.lot_no = 1กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- โดย left join ด้วยเงื่อนไข tx_act_snap_policy.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_policy.policy_year = tx_act_snap_cert_inforce.policy_year
- tx_act_snap_policy.policy_no = tx_act_snap_cert_inforce.policy_no
- tx_act_snap_policy.policy_year = tx_act_snap_cert_inforce.policy_year
- กรองข้อมูลดังนี้สถานะ member มีผล: tx_act_snap_cert_inforce.status_member in ('I','B') เป็นข้อมูลต้นสัญญา tx_act_snap_cert_inforce.lot_no = 1กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- สถานะ member มีผล: tx_act_snap_cert_inforce.status_member in ('I','B')
- เป็นข้อมูลต้นสัญญา tx_act_snap_cert_inforce.lot_no = 1
- กรณีสมาชิกของกรมธรรม์ภายใต้ GIB_Grp_Direct_EB ให้เลือกเฉพาะสมาชิกที่มีทุนที่อยู่ใน layer 2 และ 3 เท่านั้น --07/05/26โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- โดยตรวจสอบ layer จาก cf_rig_treaty_cond_dt ด้วยทุน (LifeSumInsured,AccidentSumInsured,MedAccidentSumInsured,TPDSumInsured) ของสมาชิก > minimum และ ทุนของสมาชิก <= maximum
- กรณี rate_flag = 1 ดึงข้อมูลอัตราเบี้ยจาก tx_est_snap_prem_rate --07/05/26โดย left join ด้วยเงื่อนไขtx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year
- โดย left join ด้วยเงื่อนไขtx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_notx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year
- tx_est_snap_prem_rate.policy_no = tx_est_snap_cert_inforce.policy_no
- tx_est_snap_prem_rate.policy_year = tx_est_snap_cert_inforce.policy_year

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| No. | Name | Description | Input | Type (Source) | Size | Outputtx_stg_act_inforce_member | รูปแบบการบันทึก | Example |
| 1 | Period | Period รอบประมวลผลข้อมูลที่กำหนดจากเดือนและปีของวันที่เริ่มมีผลคุ้มครองของสมาชิกโดยระบบจะนำปีและเดือนของ PromiseDate มาแปลงให้อยู่ในรูปแบบ YYYYMM เพื่อใช้เป็นตัวระบุงวดข้อมูลของกรมธรรม์หรือสมาชิกในรอบนั้นตัวอย่าง:EffectDate = 2025-01-15 → Period = 202501 | tx_act_snap_policy.period | numeric | 6 | period | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | เลขกรมธรรม์ | tx_act_snap_cert_inforce.policy_no | varchar | 20 | policy_no |  |  |
| 3 | PromiseDate | วันที่คุ้มครอง | tx_act_snap_cert_inforce.promise_date | datetime |  | promise_date | dd/mm/yyyy (AD.) | 01/01/2025 |
| 4 | PolicyYear | ปีกรมธรรม์ | tx_act_snap_policy.policy_year | numeric | 4 | policy_year |  | 1 |
| 5 | CertNo | หมายเลขสมาชิก | tx_act_snap_cert_inforce.cer_no | varchar | 20 | cer_no |  | 1 |
| 6 | Sex | เพศ | tx_act_snap_cert_inforce.sex | varchar | 1 | sex | แปลงค่าจาก tx_act_snap_cert_inforce.sex โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002500 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | M |
| 7 | Age | อายุ | tx_act_snap_cert_inforce.age | numeric | 2 | age | ## | 34 |
| 8 | SumInsuredAccident | ทุนประกันชีวิต อุบัติเหตุ | tx_act_snap_cert_inforce.acc_insur | numeric | 14,2 | sum_insured_accident | #,###.00coalesce(#,0.00) | 1,000.15 |
| 9 | ClassNo | Ocupation Class | tx_act_snap_certificate_cust.class_no | numeric | 3 | class_no |  | --07/05/26 |
| 10 | ModeOfPayment | ประเภทการจ่าย | tx_act_snap_policy.pay_type | numeric | 10 | pay_type | if pay_type = 0 then 'Monthly'if pay_type = 1 then 'Quarterly'if pay_type = 2 then 'Semi Annua'if pay_type = 3 then 'Annual' | --07/05/26 |
| 11 | TypePremiumRate | ประเภทอัตราเบี้ย | tx_act_snap_policy.rate_flagtx_act_snap_prem_rate.prem_rate_table_type | numeric | 1 | rate_type | if rate_flag = 0 then 'Unit Rate'if rate_flag = 1 then tx_act_snap_prem_rate.prem_rate_table_typeif rate_flag = 2 then 'Unit Premium' | --07/05/26 |
| 12 | LifeSumInsured | ทุนประกันชีวิต | tx_act_snap_cert_inforce.life_insur | numeric | 14,2 | sum_insured_life | coalesce(#,0.00) | --07/05/26 |
| 13 | MedAccidentSumInsured | ทุนประกันค่ารักษาเนื่องจากอุบัติเหตุ | tx_act_snap_cert_inforce.med_insur | numeric | 14,2 | sum_insured_med | coalesce(#,0.00) | --07/05/26 |
| 14 | TPDSumInsured | ทุนประกันทุพพลภาพ | tx_act_snap_cert_inforce.tpd_insur | numeric | 14,2 | sum_insured_tpd | coalesce(#,0.00) | --07/05/26 |
| 15 | LifePremiumRate | อัตราเบี้ย ความคุ้มครองชีวิต | tx_act_snap_policy.life_prem_ratetx_act_snap_prem_rate.value_life | numeric | 14,2 | prem_rate_life | if rate_flag = 0 then tx_act_snap_policy.life_prem_rateif rate_flag = 2 then 0.00 if tx_act_snap_policy.rate_flag = 1 แต่ tx_act_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_act_snap_policy.life_prem_rate if tx_act_snap_policy.rate_flag = 1 และ tx_act_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_act_snap_prem_rate.prem_rate_table_type = 'Class'and tx_act_snap_certificate_cust.class_no = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_life AgeGender when tx_act_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classand tx_act_snap_cert_inforce.sex = tx_act_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_act_snap_prem_rate.value_life Age when tx_act_snap_prem_rate.prem_rate_table_type = 'Age'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_life | --07/05/26 |
| 16 | AccidentPremiumRate | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ | tx_act_snap_policy.acc_prem_ratetx_act_snap_prem_rate.value_acc | numeric | 14,2 | prem_rate_acc | if rate_flag = 0 then tx_act_snap_policy.acc_prem_rateif rate_flag = 2 then 0.00 if tx_act_snap_policy.rate_flag = 1 แต่ tx_act_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_act_snap_policy.acc_prem_rate if tx_act_snap_policy.rate_flag = 1 และ tx_act_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_act_snap_prem_rate.prem_rate_table_type = 'Class'and tx_act_snap_certificate_cust.class_no = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_acc AgeGender when tx_act_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classand tx_act_snap_cert_inforce.sex = tx_act_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_act_snap_prem_rate.value_acc Age when tx_act_snap_prem_rate.prem_rate_table_type = 'Age'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_acc | --07/05/26 |
| 17 | MedAccidentPremiumRate | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_act_snap_policy.med_prem_ratetx_act_snap_prem_rate.value_med_acc | numeric | 14,2 | prem_rate_med | if rate_flag = 0 then tx_act_snap_policy.med_prem_rateif rate_flag = 2 then 0.00 if tx_act_snap_policy.rate_flag = 1 แต่ tx_act_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_act_snap_policy.med_prem_rate if tx_act_snap_policy.rate_flag = 1 และ tx_act_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_act_snap_prem_rate.prem_rate_table_type = 'Class'and tx_act_snap_certificate_cust.class_no = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_med_acc AgeGender when tx_act_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classand tx_act_snap_cert_inforce.sex = tx_act_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_act_snap_prem_rate.value_med_acc Age when tx_act_snap_prem_rate.prem_rate_table_type = 'Age'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_med_acc | --07/05/26 |
| 18 | TPDPremiumRate | อัตราเบี้ย ความคุ้มครองทุพพลภาพ | tx_act_snap_policy.tpd_prem_ratetx_act_snap_prem_rate.value_tpd | numeric | 14,2 | prem_rate_tpd | if rate_flag = 0 then tx_act_snap_policy.tpd_prem_rateif rate_flag = 2 then 0.00 if tx_act_snap_policy.rate_flag = 1 แต่ tx_act_snap_policy.promise_date น้อยกว่า cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500 then tx_act_snap_policy.tpd_prem_rate if tx_act_snap_policy.rate_flag = 1 และ tx_act_snap_policy.promise_date มากกว่าเท่ากับ cf_lookup_catalog.description ที่ cf_lookup_catalog.lookup_key = CR_RATE_DATE และ cf_lookup_catalog.parent_id = 1003500Class when tx_act_snap_prem_rate.prem_rate_table_type = 'Class'and tx_act_snap_certificate_cust.class_no = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_tpd AgeGender when tx_act_snap_prem_rate.prem_rate_table_type = 'AgeGender'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classand tx_act_snap_cert_inforce.sex = tx_act_snap_prem_rate.value_gender (1 = Male, 2 = Female)then tx_act_snap_prem_rate.value_tpd Age when tx_act_snap_prem_rate.prem_rate_table_type = 'Age'and tx_act_snap_cert_inforce.age = tx_act_snap_prem_rate.value_age_or_classthen tx_act_snap_prem_rate.value_tpd | --07/05/26 |
| 19 | LifePremium | เบี้ย ความคุ้มครองชีวิต | tx_act_snap_cert_inforce.life_prem | numeric | 14,2 | prem_life | coalesce(#,0.00) | --07/05/26 |
| 20 | LifeExtraPremium | เบี้ย ความคุ้มครองชีวิต พิเศษ | tx_act_snap_cert_inforce.life_e1_prem | numeric | 14,2 | prem_extra_life | coalesce(#,0.00) | --07/05/26 |
| 21 | AccidentPremium | เบี้ย ความคุ้มครองอุบัติเหตุ | tx_act_snap_cert_inforce.acc_prem | numeric | 14,2 | prem_acc | coalesce(#,0.00) | --07/05/26 |
| 22 | AccidentExtraPremium | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ | 0.00 | numeric | 14,2 | prem_acc_extra | fix 0.00 | --07/05/26 |
| 23 | MedAccidentPremium | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_act_snap_cert_inforce.med_acc_prem | numeric | 14,2 | prem_med | coalesce(#,0.00) | --07/05/26 |
| 24 | TPDPremium | เบี้ย ทุพพลภาพ | tx_act_snap_cert_inforce.tpd_prem | numeric | 14,2 | prem_tpd | coalesce(#,0.00) | --07/05/26 |
| 25 | IPDPremium | เบี้ย IPD | tx_act_snap_cert_inforce.ipd_prem | numeric | 14,2 | prem_ipd | coalesce(#,0.00) | --07/05/26 |
| 26 | OPDPremium | เบี้ย OPD | tx_act_snap_cert_inforce.opd_prem | numeric | 14,2 | prem_opd | coalesce(#,0.00) | --07/05/26 |
| 27 | DentalPremium | เบี้ย ทันตกรรม | tx_act_snap_cert_inforce.dental_prem | numeric | 14,2 | prem_dental | coalesce(#,0.00) | --07/05/26 |
| 28 | TreatyCode | รหัสสัญญา | tx_act_snap_cert_inforce.re_insure_no | varchar | 50 | treaty_code | แปลงค่าจาก tx_act_snap_cert_inforce.re_insure_no โดยนำค่าไปตรวจสอบใน cf_lookup_catalog .parent_id = 1000100 นำค่าที่ได้ เทียบกับ cf_lookup_catalog.lookup_key แล้วแปลงเป็น cf_lookup_catalog.description | --07/05/26 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1312489733 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-006 ข้อมูล (R17) List of inforce by policy =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลกรมธรรม์ที่ยังมีผลบังคับ (Inforce) ตามรายงาน R17 ของแต่ละเดือน โดยอ้างอิงจากรอบงวดข้อมูล (Period) และรหัสสัญญาประกันภัยต่อ (Treaty Code) ที่ระบุ ข้อมูลที่จัดเตรียมจะสะท้อนสถานะของกรมธรรม์ จำนวนสมาชิก และทุนคุ้มครองในแต่ละประเภท |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-04, PS-05 |
| 3 | เวลาประมวลผล(Time) | ทุกวันที่ 1 ของเดือน เริ่มเวลา 01.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | Period = Period ของข้อมูล R17 รายเดือนTreaty Code= รหัสสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ที่ยังมีผลบังคับตามรายงาน R17 ของงวดข้อมูลที่ระบุ โดยผ่านการคัดกรองตาม Period และ Treaty Code ข้อมูลที่ได้จะประกอบด้วยสถานะกรมธรรม์ตามเกณฑ์ Group RI จำนวนสมาชิก และทุนคุ้มครองในแต่ละประเภท การนับสมาชิกก็ต้องเป็นสมาชิกที่ active ใน ณ period นั้น ๆ |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล (R17) List of inforce by policy (Estimate) และบันทึกลง tx_stg_act_inforce_policy ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodnumeric6Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด)RIG_View_CertInforce.PeriodDateเดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019dd/mm/yyyy (AD.)01/12/20182ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No 3PolicyNovarchar8เลขกรมธรรม์RIG_View_Policy.PolicyNo 4CommencementDatedatetime วันเริ่มสัญญาครั้งแรกRIG_View_Policy.FirstDatedd/mm/yyy (AD.) 5EffectiveDatedatetime วันที่มีผลบังคับของปีกรมธรรม์นั้นๆRIG_View_Policy.PromiseDatedd/mm/yyy (AD.) 6PolicyYearnumeric4ปีกรมธรรม์RIG_View_Policy.PolicyYear 7Statusvarchar1สถานะของกรมธรรม์ จากประกันกลุ่มRIG_View_Policy.PolicyStatusin ('I','B','L') I8RIStatusvarchar50สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedRIG_View_Policy.PolicyStatusif RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Period (Closing Period)if RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period (Closing Period) then 'Lapsed'New Business9NoMemberLifenumeric4จำนวนสมาชิกที่มีทุนชีวิตcount(RIG_View_CertInforce.CerNo) where LifeInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')นับจำนวนสมาชิกที มีทุนชีวิต#,###coalesce(#,0)1,00010NoMemberAccidentDeathnumeric4จำนวนสมาชิกที่มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปีcount(RIG_View_CertInforce.CerNo) where AccInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')RIG_View_CertificateCust.Age <= 70นับจำนวนสมาชิกที มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี#,###.00coalesce(#,0)1,00011NoMemberMedAccidentnumeric4จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุcount(RIG_View_CertInforce.CerNo) where MedInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')#,###.00coalesce(#,0)1,00012NoMemberTPDnumeric4จำนวนสมาชิกที่มีทุนทุพพลภาพcount(RIG_View_CertInforce.CerNo) where TPDInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')#,###.00coalesce(#,0)1,00013SumInsuredLifenumeric14,2ทุนชีวิตรวมsum(RIG_View_CertInforce.LifeInsur)RIG_View_CertInforce.StatusMember not in ('C','D')#,###.00coalesce(#,0.00)600,000.1514SumInsuredAccidentDeathnumeric14,2ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปีsum(RIG_View_CertInforce.AccInsur)RIG_View_CertInforce.StatusMember not in ('C','D')RIG_View_CertificateCust.Age <= 70#,###.00coalesce(#,0.00)600,000.1515SumInsuredMedAccidentnumeric14,2ทุนค่ารักษาพยาบาล อุบัติเหตุรวมsum(RIG_View_CertInforce.MedInsur)RIG_View_CertInforce.StatusMember not in ('C','D')#,###.00coalesce(#,0.00)600,000.1516SumInsuredTPDnumeric14,2ทุนทุพพลภาพรวมsum(RIG_View_CertInforce.TPDInsur)RIG_View_CertInforce.StatusMember not in ('C','D')#,###.00coalesce(#,0.00)600,000.15 |


===== PAGE 1291976816 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-006 ข้อมูล (R17) List of inforce by policy > Process ข้อมูล (R17) List of inforce by policy =====
Overview
Protocol
Operation
Input
Process
1. ตารางที่ใช้ (Data Sources)
2. กระบวนการ Join และการรวมกลุ่มข้อมูล (Join Logic)
3. ตรรกะการคำนวณ (Calculation Logic)
สรุปขั้นตอนการทำงานของ Query
SA query
Output
Exception

## Overview
<ข้อมูล List of inforce by policy>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | group ri | tx_act_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_act_snap_policy.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_cert_inforce.policy_year |
| 2 | group ri | tx_act_snap_cert_inforce | ข้อมูลสมาชิก ณ ต้นงวด |
| 3 | group ri | tx_act_snap_certificate_cust | ข้อมูลสมาชิก | tx_act_snap_certificate_cust.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_certificate_cust.policy_year = tx_act_snap_cert_inforce.policy_yeartx_act_snap_certificate_cust.cer_no = tx_act_snap_cert_inforce.cer_no |
| 4 | group ri | tx_act_snap_certalteration | ข้อมูลสลักหลัง | tx_act_snap_certalteration.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_certalteration.policy_year = tx_act_snap_cert_inforce.policy_year |
| 5 | group ri | tx_rig_landing_gl_sophead | ข้อมูล R17 | tx_rig_landing_gl_sophead.policy_no = tx_act_snap_cert_inforce.policy_notx_rig_landing_gl_sophead.policy_year = tx_act_snap_cert_inforce.policy_year |
บันทึกไปที่ tx_stg_act_inforce_policy

### 1. ตารางที่ใช้ (Data Sources)
- tx_act_snap_gl_sophead (SOP Base): เป็นตารางหลักที่เก็บข้อมูลยอดรวมรายกรมธรรม์ (Header level) แยกตามบริษัทประกัน (comp_code)
- tx_act_snap_policy (Policy Info): เก็บข้อมูลหลักของกรมธรรม์ เช่น วันเริ่มคุ้มครอง, วันหมดอายุ และสถานะ
- tx_act_snap_cert_inforce (Member Details): เก็บข้อมูลรายตัวสมาชิก เพื่อใช้เช็คสถานะ (status_member) และยอด acc_insur รายคน
- tx_act_snap_certificate_cust (Customer Info): เก็บข้อมูลส่วนตัวลูกค้า โดยเฉพาะ "อายุ" (age)

### 2. กระบวนการ Join และการรวมกลุ่มข้อมูล (Join Logic)
กระบวนการถูกแบ่งออกเป็น 3 เลเยอร์หลัก เพื่อป้องกันข้อมูลซ้ำซ้อน (Cartesian Product):
A. เลเยอร์การคำนวณส่วนลด (CTE exclude_acc):
- Join: ระหว่าง cert_inforce (t) และ certificate_cust (cc) ด้วย policy_no, policy_year, และ cer_no
- Filter: เลือกเฉพาะ age > 70 และ status_member ที่ไม่ใช่ 'C', 'D', 'T'
- Aggregation: Group By ตามรอบบัญชีและเลขกรมธรรม์ เพื่อยุบยอด comp_code ให้เหลือบรรทัดเดียว เตรียมไว้ไปหักลบในระดับกรมธรรม์
B. เลเยอร์สรุปยอด SOP (CTE sop_base):
- Aggregation: ทำการ SUM ข้อมูลจากตาราง sophead ทุกรายการ (ทุก comp_code) ให้รวมเป็นก้อนเดียวต่อหนึ่งกรมธรรม์ต่อรอบ เพื่อให้ได้ยอด Total ก่อนนำไป Adjust
C. เลเยอร์ข้อมูลกรมธรรม์ (CTE policy_info & Main Query):
- Join: นำ sop_base เป็นตัวตั้ง Left Join กับ exclude_acc และ policy_info โดยใช้ Key หลักคือ period_date, policy_no, และ policy_year

### 3. ตรรกะการคำนวณ (Calculation Logic)

#### การคำนวณสถานะ (Status Logic)
มีการคำนวณสถานะ 2 รูปแบบ:
- Status: แปลงรหัสตัวเดียวเป็นคำเต็ม (I -> Inforce, B -> New Business, L -> Lapsed, C -> Cancel)
- RI Status: ใช้ Logic พิเศษเช็คความต่อเนื่อง:ถ้าสถานะเป็น 'C' หรือ 'L' ให้เป็น Cancel/Lapsed ทันทีถ้าเป็น 'I' หรือ 'B' ให้เช็ค expire_date เทียบกับ "วันสุดท้ายของรอบเดือนนั้นๆ"ถ้ายังไม่หมดอายุ: ดู policy_year (ปี 1 เป็น New Business, ปี > 1 เป็น Inforce)ถ้าหมดอายุก่อนสิ้นเดือน: ให้ถือว่าเป็น Lapsed
- ถ้าสถานะเป็น 'C' หรือ 'L' ให้เป็น Cancel/Lapsed ทันที
- ถ้าเป็น 'I' หรือ 'B' ให้เช็ค expire_date เทียบกับ "วันสุดท้ายของรอบเดือนนั้นๆ"ถ้ายังไม่หมดอายุ: ดู policy_year (ปี 1 เป็น New Business, ปี > 1 เป็น Inforce)ถ้าหมดอายุก่อนสิ้นเดือน: ให้ถือว่าเป็น Lapsed
- ถ้ายังไม่หมดอายุ: ดู policy_year (ปี 1 เป็น New Business, ปี > 1 เป็น Inforce)
- ถ้าหมดอายุก่อนสิ้นเดือน: ให้ถือว่าเป็น Lapsed

#### การคำนวณยอดสุทธิ (Net Amount Calculation)
ยอดส่วนใหญ่จะดึงมาจาก SOP โดยตรง ยกเว้น Accident (อุบัติเหตุ) ที่ใช้สูตรดังนี้:
| รายการ | Business Logic (สูตรการคำนวณ) |
| Sum Insured Life/Med/TPD | SUM(insur) จากตาราง sophead โดยตรง |
| Sum Insured Accident | SUM(sophead.acc_insur) - SUM(cert_inforce.acc_insur เฉพาะคนอายุ > 70) |
| Member Count Accident | SUM(sophead.acc_amt) - COUNT(cert_inforce เฉพาะคนอายุ > 70) |

### สรุปขั้นตอนการทำงานของ Query
- คัดกรอง คนอายุเกิน 70 ที่มีสถานะปกติออกมานับยอดรอไว้
- ยุบรวม ยอดจาก SOP Head ทุกบรรทัดให้เป็นยอดรวมกรมธรรม์
- นำยอดจาก (2) มาลบด้วย (1) เพื่อให้ได้ยอดสุทธิที่ RI

## SA query
<![CDATA[with exclude_acc as (
  select
    policy_no,
    policy_year,
    sum(acc_insur) as ex_acc_insur,
    count(cer_no) as ex_acc_amt
  from (
    select distinct on (t.policy_no, t.policy_year, t.cer_no)
      t.policy_no, t.policy_year, t.cer_no, t.acc_insur
    from tx_act_snap_cert_inforce t 
    join tx_act_snap_certificate_cust cc on cc.policy_no = t.policy_no and cc.policy_year = t.policy_year and cc.certific_cust_no = t.cer_no 
    where cc.age > 70 and t.status_member not in ('C','D')
    and t.acc_insur > 0 --29/04/26
    order by t.policy_no, t.policy_year, t.cer_no, t.period_date desc
  ) sub
  group by policy_no, policy_year
),
sop_base as (
  select
    s.period_date, s.policy_no, s.policy_year,
    sum(s.life_insur) as total_life_insur,
    sum(s.acc_insur)  as total_acc_insur,
    sum(s.med_insur)  as total_med_insur,
    sum(s.tpd_insur)  as total_tpd_insur,
    sum(s.life_amt)   as total_life_amt,
    sum(s.acc_amt)    as total_acc_amt,
    sum(s.med_amt)    as total_med_amt,
    sum(s.tpd_amt)    as total_tpd_amt
  from tx_act_snap_gl_sophead s
  group by s.period_date, s.policy_no, s.policy_year
),
policy_info as (
  select
    p.policy_no, p.policy_year, p.re_insur_no, 
    p.first_date as commencement_date, p.promise_date as effective_date, 
    p.policy_status as raw_status,
    p.policy_status as status,
    p.expire_date
  from tx_act_snap_policy p
),
unname_grouped AS ( 
  SELECT
    policy_no, policy_year, promise_date, period_date,  
    SUM(COALESCE(no_total, 0))::numeric AS current_month_inforce,  
    SUM(COALESCE(no_additions,0))::numeric AS no_mem_addition,
    SUM(COALESCE(no_terminations,0))::numeric AS no_mem_cancellation
  FROM tx_act_snap_unname_policy  
  GROUP BY 1, 2, 3, 4
),
final_base AS (
  select
    s.*,
    uc.current_month_inforce,
    uc.no_mem_addition,
    uc.no_mem_cancellation,
    -- ตรวจสอบว่าเป็นเคสที่ต้องคำนวณใหม่หรือไม่ (ถ้า Join ติดค่าจาก unname_grouped แสดงว่าเป็นเคสพิเศษ)
    CASE WHEN uc.policy_no IS NOT NULL THEN 'Y' ELSE 'N' END as is_unname_case,
    ROW_NUMBER() OVER (PARTITION BY s.policy_no ORDER BY s.policy_year, s.period_date) as row_idx
  from sop_base s
  left join unname_grouped uc on s.policy_no = uc.policy_no and s.policy_year = uc.policy_year and s.period_date = uc.period_date
),
unname_calculated AS (
    SELECT
        *,
        SUM(no_mem_addition - no_mem_cancellation) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) +  
        FIRST_VALUE(total_life_amt - (no_mem_addition - no_mem_cancellation)) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) AS calculated_no_total_life, --06/05/26
        SUM(no_mem_addition - no_mem_cancellation) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) +  
        FIRST_VALUE(total_acc_amt - (no_mem_addition - no_mem_cancellation)) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) AS calculated_no_total_acc, --06/05/26
        FIRST_VALUE(total_life_insur::numeric) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) as first_si_life, --06/05/26
        FIRST_VALUE(total_acc_insur::numeric) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) as first_si_acc, --06/05/26
        FIRST_VALUE(COALESCE(total_life_amt)::numeric) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) as first_mem_life, --06/05/26
        FIRST_VALUE(COALESCE(total_acc_amt)::numeric) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) as first_mem_acc --06/05/26
    FROM final_base
)
select
    s.period_date, pi.re_insur_no, s.policy_no, pi.commencement_date, pi.effective_date, s.policy_year, pi.status,
    case
      when pi.raw_status = 'C' then 'Cancel'
      when pi.raw_status = 'L' then 'Lapsed'
      when pi.raw_status in ('I','B') then
        case
          when pi.expire_date >= (date_trunc('month', s.period_date) + interval '1 month - 1 day')::date then
            case when s.policy_year = 1 then 'New Business' when s.policy_year > 1 then 'Inforce' else null end
          when pi.expire_date < (date_trunc('month', s.period_date) + interval '1 month - 1 day')::date then 'Lapsed'
          else null
        end
      else null
    end as ri_status, 
    COALESCE(s.calculated_no_total_life, s.total_life_amt) as no_member_life,  --06/05/26
    CASE
        WHEN s.calculated_no_total_acc IS NOT NULL THEN s.calculated_no_total_acc --06/05/26
        WHEN (s.total_acc_amt - coalesce(ex.ex_acc_amt, 0)) < 0 THEN 0 
        ELSE (s.total_acc_amt - coalesce(ex.ex_acc_amt, 0)) 
    END as no_member_accident_death,
    s.total_med_amt as no_member_med_accident, 
    s.total_tpd_amt as no_member_tpd, 
    -- คอลัมน์ Sum Insured Life
    CASE
        -- 1. ถ้าเป็น Policy พิเศษ (Unnamed) และไม่ใช่งวดแรก ให้ใช้สูตรคำนวณใหม่
        WHEN s.is_unname_case = 'Y' AND s.row_idx > 1 AND s.first_mem_life > 0  --06/05/26
            THEN (s.first_si_life / s.first_mem_life) * s.calculated_no_total_life --06/05/26
        -- 2. กรณีอื่นๆ ทั้งหมด (งวดแรก หรือ Policy ปกติ) ให้ดึงค่าดิบตามเดิม
        ELSE s.total_life_insur 
    END as sum_insured_life,
    -- คอลัมน์ Sum Insured Accident Death
    CASE
        -- 1. ถ้าเป็น Policy พิเศษ (Unnamed) และไม่ใช่งวดแรก ให้ใช้สูตรคำนวณใหม่
        WHEN s.is_unname_case = 'Y' AND s.row_idx > 1 AND s.first_mem_acc > 0  --06/05/26
            THEN (s.first_si_acc / s.first_mem_acc) * s.calculated_no_total_acc --06/05/26
        -- 2. กรณีงวดแรกของ Unname หรือ Policy อื่นๆ ให้ใช้ Logic หักลบปกติ
        ELSE
            CASE WHEN (s.total_acc_insur - coalesce(ex.ex_acc_insur, 0)) < 0 THEN 0 ELSE (s.total_acc_insur - coalesce(ex.ex_acc_insur, 0)) END
    END as sum_insured_accident_death,
    s.total_med_insur as sum_insured_med_accident, 
    s.total_tpd_insur as sum_insured_tpd
    --,first_si_life,first_si_acc,first_mem_life,first_mem_acc
    --,now(), :userName, now(), :userName
from unname_calculated s
left join exclude_acc ex on s.policy_no = ex.policy_no and s.policy_year = ex.policy_year
left join policy_info pi on s.policy_no = pi.policy_no and s.policy_year = pi.policy_year
--WHERE s.policy_no = 'GH5368' and s.policy_year = '3' and s.period_date = '2025-12-23 00:00:00'
--WHERE s.policy_no = 'GL4635'
/*where not exists (                 select 1 
                from public.tx_stg_act_inforce_policy a 
                where a.period_date = s.period_date 
                  and a.policy_no = s.policy_no 
                  and a.policy_year = s.policy_year 
                  )*/
order by s.period_date;]]>

## Output
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PeriodDate | numeric | 6 | Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด) | tx_rig_landing_gl_sophead.period_date | dd/mm/yyyy (AD.) | 01/12/2018 |
| 2 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | tx_act_snap_policy.re_insur_no |  |  |
| 3 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | tx_act_snap_policy.policy_no |  |  |
| 4 | CommencementDate | date |  | วันเริ่มสัญญาครั้งแรก | tx_act_snap_policy.first_date | dd/mm/yyy (AD.) |  |
| 5 | EffectiveDate | date |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | tx_act_snap_policy.promise_date | dd/mm/yyy (AD.) |  |
| 6 | PolicyYear | numeric | 4 | ปีกรมธรรม์ | tx_rig_landing_gl_sophead.policy_year |  |  |
| 7 | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_act_snap_policy.policy_statusin ('I','B','L') |  | I |
| 8 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | tx_act_snap_policy.policy_status | if tx_act_snap_policy.expire_date => วันที่สิ้นเดือนของ Period (Closing Period)if tx_act_snap_policy.policy_year = 1 then 'New Business'if tx_act_snap_policy.policy_year > 1 then 'Inforce'if tx_act_snap_policy.expire_date < วันที่สิ้นเดือนของ Period (Closing Period) then 'Lapsed' | New Business |
| 9 | NoMemberLife | numeric | 4 | จำนวนสมาชิกที่มีทุนชีวิต | count(tx_act_snap_cert_inforce.cer_no) where life_insur > 0tx_rig_landing_gl_sophead.status_member not in ('C','D')นับจำนวนสมาชิกที มีทุนชีวิต | #,###coalesce(#,0) | 1,000 |
| 10 | NoMemberAccidentDeath | numeric | 4 | จำนวนสมาชิกที่มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี | count(tx_act_snap_cert_inforce.cer_no) where acc_insur > 0tx_act_snap_cert_inforce.status_member not in ('C','D')tx_act_snap_certificate_cust.age <= 70นับจำนวนสมาชิกที มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี | #,###.00coalesce(#,0) | 1,000 |
| 11 | NoMemberMedAccident | numeric | 4 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | count(tx_act_snap_cert_inforce.cer_no) where med_insur > 0tx_act_snap_cert_inforce.status_member not in ('C','D') | #,###.00coalesce(#,0) | 1,000 |
| 12 | NoMemberTPD | numeric | 4 | จำนวนสมาชิกที่มีทุนทุพพลภาพ | count(tx_act_snap_cert_inforce.cer_no) where tpd_insur > 0tx_act_snap_cert_inforce.status_member not in ('C','D') | #,###.00coalesce(#,0) | 1,000 |
| 13 | SumInsuredLife | numeric | 14,2 | ทุนชีวิตรวม | sum(tx_rig_landing_gl_sophead.life_insur) | #,###.00coalesce(#,0.00) | 600,000.15 |
| 14 | SumInsuredAccidentDeath | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(tx_rig_landing_gl_sophead.acc_insur)tx_act_snap_cert_inforce.status_member not in ('C','D')tx_act_snap_certificate_cust.age <= 70 | #,###.00coalesce(#,0.00) | 600,000.15 |
| 15 | SumInsuredMedAccident | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุรวม | sum(tx_rig_landing_gl_sophead.med_insur) | #,###.00coalesce(#,0.00) | 600,000.15 |
| 16 | SumInsuredTPD | numeric | 14,2 | ทุนทุพพลภาพรวม | sum(tx_rig_landing_gl_sophead.tpd_insur) | #,###.00coalesce(#,0.00) | 600,000.15 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992028 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-006 ข้อมูล (R17) List of inforce by policy > Process ข้อมูล (R17) List of inforce by policy > WS_RIG_009 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด) | RIG_View_CertInforce.PeriodDateเดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019 | dd/mm/yyyy (AD.) | 01/12/2018 |
| 2 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  |  |
| 3 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  |  |
| 4 | CommencementDate | datetime |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyy (AD.) |  |
| 5 | EffectiveDate | datetime |  | วันที่มีผลบังคับของปีกรมธรรม์นั้นๆ | RIG_View_Policy.PromiseDate | dd/mm/yyy (AD.) |  |
| 6 | PolicyYear | numeric | 4 | ปีกรมธรรม์ | RIG_View_Policy.PolicyYear |  |  |
| 7 | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | RIG_View_Policy.PolicyStatusin ('I','B','L') |  | I |
| 8 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากช่วงความคุ้มครองของกรมธรรม์เทียบกับวันสิ้นเดือนของ Closing Period โดยมีหลักการดังนี้กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบหากวันสิ้นสุดความคุ้มครอง (End Date) มากกว่าหรือเท่ากับ วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์ยังมีผลบังคับ และกำหนดสถานะตามปีกรมธรรม์ (Policy Year)Policy Year = 1 ให้แสดงสถานะ New BusinessPolicy Year > 1 ให้แสดงสถานะ Inforceหากวันสิ้นสุดความคุ้มครอง (End Date) น้อยกว่า วันสิ้นเดือนของ Closing Period ให้ถือว่ากรมธรรม์สิ้นสุดความคุ้มครอง และแสดงสถานะเป็น Lapsedกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed | RIG_View_Policy.PolicyStatus | if RIG_View_Policy.ExpireDate => วันที่สิ้นเดือนของ Period (Closing Period)if RIG_View_Policy.PolicyYear = 1 then 'New Business'if RIG_View_Policy.PolicyYear > 1 then 'Inforce'if RIG_View_Policy.ExpireDate < วันที่สิ้นเดือนของ Period (Closing Period) then 'Lapsed' | New Business |
| 9 | NoMemberLife | numeric | 4 | จำนวนสมาชิกที่มีทุนชีวิต | count(RIG_View_CertInforce.CerNo) where LifeInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')นับจำนวนสมาชิกที มีทุนชีวิต | #,###coalesce(#,0) | 1,000 |
| 10 | NoMemberAccidentDeath | numeric | 4 | จำนวนสมาชิกที่มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี | count(RIG_View_CertInforce.CerNo) where AccInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D')RIG_View_CertificateCust.Age <= 70นับจำนวนสมาชิกที มีทุนอุบัติเหตุ และอายุไม่เกิน 70 ปี | #,###.00coalesce(#,0) | 1,000 |
| 11 | NoMemberMedAccident | numeric | 4 | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | count(RIG_View_CertInforce.CerNo) where MedInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D') | #,###.00coalesce(#,0) | 1,000 |
| 12 | NoMemberTPD | numeric | 4 | จำนวนสมาชิกที่มีทุนทุพพลภาพ | count(RIG_View_CertInforce.CerNo) where TPDInsur > 0RIG_View_CertInforce.StatusMember not in ('C','D') | #,###.00coalesce(#,0) | 1,000 |
| 13 | SumInsuredLife | numeric | 14,2 | ทุนชีวิตรวม | sum(RIG_View_CertInforce.LifeInsur)RIG_View_CertInforce.StatusMember not in ('C','D') | #,###.00coalesce(#,0.00) | 600,000.15 |
| 14 | SumInsuredAccidentDeath | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | sum(RIG_View_CertInforce.AccInsur)RIG_View_CertInforce.StatusMember not in ('C','D')RIG_View_CertificateCust.Age <= 70 | #,###.00coalesce(#,0.00) | 600,000.15 |
| 15 | SumInsuredMedAccident | numeric | 14,2 | ทุนค่ารักษาพยาบาล อุบัติเหตุรวม | sum(RIG_View_CertInforce.MedInsur)RIG_View_CertInforce.StatusMember not in ('C','D') | #,###.00coalesce(#,0.00) | 600,000.15 |
| 16 | SumInsuredTPD | numeric | 14,2 | ทุนทุพพลภาพรวม | sum(RIG_View_CertInforce.TPDInsur)RIG_View_CertInforce.StatusMember not in ('C','D') | #,###.00coalesce(#,0.00) | 600,000.15 |


===== PAGE 1299251458 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลเบี้ยประกันและความเคลื่อนไหวของสมาชิก (Premium & Movement) ตามรายงาน R61 จากระบบประกันกลุ่ม โดยพิจารณาข้อมูลย้อนหลัง 1 ปีของช่วงความคุ้มครอง (ครอบคลุมข้อมูลของ 2 ปีกรมธรรม์ล่าสุด) เพื่อให้มั่นใจว่าข้อมูลเบี้ยและรายการเคลื่อนไหวของสมาชิกในแต่ละเดือนมีความครบถ้วนจนถึง Period ที่เลือก ยกเว้นกรณีกรมธรรม์สิ้นสุดก่อน (Lapse) โดยระบบจะตรวจสอบให้มีข้อมูลย้อนหลังอย่างน้อย 1 Period เพื่อใช้ประกอบการจัดทำรายงาน Actual ประจำรอบเดือนหรือรายไตรมาสได้อย่างถูกต้อง |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-04, PS-05 |
| 3 | เวลาประมวลผล(Time) | ทุกวันที่ 1 ของเดือน เริ่มเวลา 01.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | Effective date from- to ของ = PromiseDate (วันเริ่มสัญญาปีปัจจุบัน) Treaty Code = รหัสสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลเบี้ยประกันภัยและความเคลื่อนไหวของสมาชิกในแต่ละเดือน ตามงวดข้อมูล (Period) และ Treaty Code ที่กำหนด โดยข้อมูลที่ได้จะครอบคลุมรายละเอียดของกรมธรรม์ ช่วงเวลาความคุ้มครอง การเปลี่ยนแปลงจำนวนสมาชิก และยอดเบี้ยในแต่ละประเภทตลอดช่วงย้อนหลัง 1 ปีของความคุ้มครอง1. ข้อมูลตามกรมธรรม์ ตามปีกรมธรรม์2. เป็น Statement ทั้งกรมธรรม์ขั้นต่ำ 12 เดือน เรียกว่า Period Date3. ข้อมูลจะต้องมีความเคลื่อนไหว ของสมาชิกทุกเดือน ข้อมูลต้นงวดแต่ละงวด + กับ Movement ความเคลื่อนไหว เรียกว่า จำนวนสมาชิก ตามประเภทความคุ้มครอง 4. เบี้ยที่มีผลอันเนื่องจาก Member แจ้งเข้า - ออก ข้อมูลต้นงวดแต่ละงวด + กับ Movement ความเคลื่อนไหว เรียกว่า เบี้ยตามประเภทความคุ้มครอง |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก WS_RIG_010 ข้อมูล (R61) Premium and movement ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Period numeric Period ที่คำนวณจาก PromiseDateRIG_View_Policy.PromiseDateนำ PromiseDate มากระจายเป็น 12 เดือนโดยนับเดือนแรกจาก PromiseDate ที่พบ เช่น PromiseDate = 01/12/2018 จะเป็นเดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019yyyyMM (AD.)2018122Period Datedate Period ที่คำนวณจาก PromiseDateRIG_View_Policy.PromiseDateนำ PromiseDate มากระจายเป็น 12 เดือนโดยนับเดือนแรกจาก PromiseDate ที่พบdd/mm/yyyy01/12/20183PolicyNovarchar เลขกรมธรรม์RIG_View_Policy.PolicyNo GH44954ReinsuredNovarchar เลขประกันภัยต่อ(ISNULL(RIG_View_CertInforce.ReInsureNo,'') <> '')เฉพาะข้อมูลที่มี ReinsuredNo (ส่ง Re)*RIG_View_CertInforce จะเก็บข้อมูลสมาชิก ณ ต้นงวด ทุกงวด 17060085PaymentModevarchar ประเภทการชำระเบี้ยประกันภัยRIG_View_CertInforce.PayType*RIG_View_CertInforce จะเก็บข้อมูลสมาชิก ณ ต้นงวด ทุกงวดPayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual'Quarterly6PolicyYear ปีกรรมธรรม์RIG_View_Policy.PolicyYear 17EffectiveDatedatetime วันที่คุ้มครองRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)01/12/20188EndDatedatetime วันที่สิ้นความคุ้มครองRIG_View_Policy.ExpireDatedd/mm/yyyy (AD.)01/11/20199NoMemPreviousnumeric4จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้าจำนวนสมาชิกจาก Period date ก่อนหน้าRIG_View_CertInforce.StatusMember not in ('C','D','L')เช่นปัจจุบัน Period ที่ 1 = 201812 มี Period date = 01/12/2018 ให้ไปนำ NoMemTotal ของ Period date = 01/11/2018 มาใช้กรณีเป็น กรมธรรม์ใหม่ เริ่มปีแรก (PolicyYear = 1) จะไม่มีสมาชิกภายใต้กรรม์ใน Period ก่อนหน้าให้แสดงเป็น 0#,###coalesce(#,0)3110NoMemAdditionnumeric4จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้sum(case when RIG_View_CertAlteration.StatusAfter in ('A','T') then 1 else 0 end))group by Period, RIG_View_Policy.PolicyNo, RIG_View_CertAlteration.CompcodeAfter, RIG_View_CertAlteration.DocDate (เท่ากับ Promisedate)Sum จำนวนสมาชิกที เพิ่ม (Addition) จากสลักหลัง โดยนับจำนวนจากรายการ StatusAfter in ('A','T') ที่พบตาม PolicyNo, DocDate ของแต่ละ Period#,###coalesce(#,0)311NoMemCancellationnumeric4จำนวนสมาชิกที่ลดลงใน Period นี้sum(case when RIG_View_CertAlteration.StatusAfter in ('C','D') then 1 else 0 end))group by Period, RIG_View_Policy.PolicyNo, RIG_View_CertAlteration.CompcodeAfter, RIG_View_CertAlteration.DocDate (เท่ากับ Promisedate)Sum จำนวนสมาชิกที ยกเลิก (Cancellation) จากสลักหลัง โดยนับจำนวนจากรายการ StatusAfter in ('C','D') ที่พบตาม PolicyNo, DocDate ของแต่ละ Period#,###coalesce(#,0)812NoMemTotalnumeric4จำนวนสมาชิกทั้งหมดใน Period นี้count(RIG_View_CertInforce.CerNo) ทั้งหมด ของแต่ละ PeriodRIG_View_CertInforce.StatusMember not in ('C','D','L')นับจำนวนสมาชิกทั้งหมดที่พบในแต่ละ Period Date (นับทั้งเดือน) ตาม PolicyNo*ค่าของ NoMemTotal จะต้องสอดคล้องกับ (NoMemPrevious + NoMemAddition) - NoMemCancellation#,###coalesce(#,0)2613PremiumLifenumeric14,2เบี้ยชีวิตsum(RIG_View_CertInforce.LifePrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1514PremiumAccidentnumeric14,2เบี้ยอุบัติเหตุsum(RIG_View_CertInforce.AccPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1515PremiumMedAccnumeric14,2เบี้ยค่ารักษาพยาบาลอุบัติเหตุsum(RIG_View_CertInforce.MedAccPrem) group by Period,RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1516PremiumTPDnumeric14,2เบี้ย TPDsum(RIG_View_CertInforce.TPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1517PremiumE1numeric14,2เบี้ยชีวิต (Extra)sum(RIG_View_CertInforce.LifeE1Prem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1518PremiumIPDnumeric14,2เบี้ย IPDsum(RIG_View_CertInforce.IPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1519PremiumOPDnumeric14,2เบี้ย OPDsum(RIG_View_CertInforce.OPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1520PremiumDentalnumeric14,2เบี้ย ทันตกรรมsum(RIG_View_CertInforce.DentalPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1521PremiumMedTotalnumeric14,2เบี้ยค่ารักษาพยาบาลทั้งหมดPremiumIPD + PremiumOPD + PremiumDental group by Period, RIG_View_CertInforce.PayType Sum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.1522PremiumTotalnumeric14,2เบี้ยทั้งหมดPremiumLife + PremiumAccident + PremiumMedAcc + PremiumTPD + PremiumE1 + PremiumMedTotal group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1#,###.##coalesce(#,0.00)1,000.15 |


===== PAGE 1299022584 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) > Process ข้อมูล (R61) Premium and movement =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลกธมธรรม์ประกันกลุ่มทั้งหมดจาก DataOne (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
- ดึงข้อมูลกรมธรรม์จาก tx_act_snap_policy โดยกรองเงื่อนไข ดังนี้
- ดึงข้อมูลสมาชิก โดยแบ่งเป็น 2 กลุ่ม และตรวจสอบตามลำดับ หากพบข้อมูลในกลุ่มลำดับที่ 1 ให้ใช้ข้อมูลจากกลุ่มนั้นทันที หากไม่พบจึงพิจารณากลุ่มถัดไปตามลำดับStep 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_dateStep 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_year
- Step 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_yeartx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_dategroup by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- tx_act_snap_unname_policy.policy_no = tx_act_snap_policy.policy_no
- tx_act_snap_unname_policy.policy_year = tx_act_snap_policy.policy_year
- tx_act_snap_unname_policy.period_date = tx_act_snap_unname_policy.promise_date
- group by policy_no,reinsur_no,pay_type,policy_year,promise_date,period_date
- Step 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_year
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_year
- tx_act_snap_cert_inforce.policy_no = tx_act_snap_policy.policy_no
- tx_act_snap_cert_inforce.policy_year = tx_act_snap_policy.policy_year
- กรณีคำนวณจำนวนสมาชิกเพิ่มหรือลดStep 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_certalteration.policy_yearStep 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_certalteration.policy_year
- Step 1: กรมธรรม์ Unnameเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้tx_act_snap_unname_policy.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_unname_policy.policy_year = tx_act_snap_certalteration.policy_year
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_act_snap_unname_policyโดยเงื่อนไขการ Join ดังนี้
- tx_act_snap_unname_policy.policy_no = tx_act_snap_certalteration.policy_no
- tx_act_snap_unname_policy.policy_year = tx_act_snap_certalteration.policy_year
- Step 2: ข้อมูลสมาชิกต้นงวดเงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้tx_act_snap_cert_inforce.policy_no = tx_act_snap_certalteration.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_certalteration.policy_year
- เงื่อนไข: กรณีพบข้อมูลจากตาราง tx_snap_cert_inforce โดยเงื่อนไขการ Join ดังนี้
- tx_act_snap_cert_inforce.policy_no = tx_act_snap_certalteration.policy_no
- tx_act_snap_cert_inforce.policy_year = tx_act_snap_certalteration.policy_year
- บันทึกไปที่ tx_stg_act_prem_movement
- อธิบาย logic การคำนวณ Step 1: การปั้นโครง Timeline MovementObjective: สร้างแถวข้อมูลให้ครบ 12 เดือนสำหรับแต่ละปีกรมธรรม์ Click here to expand... เดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019 Table หลัก (sub) : tx_act_snap_unname_policy (Unname) และ tx_act_snap_cert_inforce (Cert)Table Join: tx_act_snap_policy (p)Key Join: sub.policy_no = p.policy_noLogic: นำข้อมูลกรมธรรม์จากสองตารางแรกมารวมกัน (UNION) เพื่อหาจุดเริ่มต้น (promise_date) จากนั้นทำ Cross Join กับ generate_series(0, 11) เพื่อขยายจาก 1 แถว เป็น 12 แถว (แทน 12 เดือน)Step 2: การคำนวณส่วนต่างเบี้ยและจำนวนคน (Alteration)Objective: สรุปรายการเข้า-ออก และยอดเงินที่เปลี่ยนแปลงในแต่ละวันTable: tx_act_snap_certalteration(a)Logic: * จำนวนคน: นับสถานะ 'A', 'T' เป็นยอดบวก และ 'C', 'D' เป็นยอดลบยอดเงิน: Sum ผลต่างเบี้ย (prem_diff) แยกตามประเภทความคุ้มครองGrouping Key: policy_no, policy_year, และ doc_date (วันที่เกิดรายการ)Step 3: การประกอบยอดเบี้ยแยกประมวลผลตามประเภทกรมธรรม์ แล้วนำมาต่อกัน (UNION ALL) ดังนี้:3.1 กรณี UnnameTable: periods (จาก Step 1) Join กับ unname_grouped unname_grouped... Table ต้นทาง: tx_act_snap_unname_policy 1. การคัดกรองข้อมูล (Filtering)Logic: ระบบจะเลือกเฉพาะแถวที่มี period_date ตรงกับ promise_date เท่านั้นเหตุผล: เพื่อป้องกันการนับยอดเงินซ้ำซ้อน และเพื่อให้มั่นใจว่ายอดเงินที่นำมาแสดงเป็นยอดที่เกิดขึ้น ณ วันที่เริ่มต้นงวดการชำระเงินนั้นจริงๆ2. การรวมยอดเงินรายเดือน (Current Month Aggregation)Logic: ทำการ SUM ยอดเงินแยกตามหมวดหมู่ความคุ้มครองหลัก 4 ด้าน:total_life_amt (ชีวิต)total_acc_amt (อุบัติเหตุ)total_med_amt (สุขภาพ)total_tpd_amt (ทุพพลภาพ)ผลลัพธ์: ยอดรวมนี้จะถูกนำไปใช้ใน Column current_month_inforce เพื่อแสดงขนาดของวงเงินความคุ้มครองที่มีผลบังคับในเดือนนั้น3. การคำนวณเบี้ยประกันสะสม (Grand Total Accumulation)Logic: ใช้คำสั่ง SUM(...) OVER(PARTITION BY policy_no, policy_year)ความหมาย: แม้ข้อมูลต้นทางจะแบ่งเป็นรายงวด (Period) แต่ในส่วนของ Premium ระบบต้องการยอดรวมสุทธิ "ทั้งปีกรมธรรม์" มาแสดงในทุกๆ แถวของปีนั้น โดยแยกตามประเภทเบี้ยประกัน (Life, E1, Acc, Med, TPD, IPD, OPD, Dental)ผลลัพธ์: ทำให้ไม่ว่าเราจะดูที่เดือนไหนของปีกรมธรรม์นั้น เราจะเห็นยอดเบี้ยประกันรวมของทั้งปีประกอบอยู่เสมอ Key Join: 1. policy_no2. policy_year3. period_date (วันที่ของเดือนนั้นๆ)Logic: ดึงยอดเงินรวม (Grand Total) มาวางตามเดือนที่ตรงกัน3.2 กรณี CertTable: periods (จาก Step 1) Join กับ tx_act_snap_cert_inforce และ alt (จาก Step 2)Key Join: 1. policy_no2. policy_year3. period_date (วันที่ของเดือนนั้นๆ)Logic: * จำนวนคน: นับ COUNT(cer_no) จากตาราง Inforceยอดเบี้ย: นำเบี้ยจากตาราง Inforce + เบี้ยส่วนต่างจากตาราง Alteration (alt)
- Logic: ระบบจะเลือกเฉพาะแถวที่มี period_date ตรงกับ promise_date เท่านั้น
- เหตุผล: เพื่อป้องกันการนับยอดเงินซ้ำซ้อน และเพื่อให้มั่นใจว่ายอดเงินที่นำมาแสดงเป็นยอดที่เกิดขึ้น ณ วันที่เริ่มต้นงวดการชำระเงินนั้นจริงๆ
- Logic: ทำการ SUM ยอดเงินแยกตามหมวดหมู่ความคุ้มครองหลัก 4 ด้าน:total_life_amt (ชีวิต)total_acc_amt (อุบัติเหตุ)total_med_amt (สุขภาพ)total_tpd_amt (ทุพพลภาพ)
- total_life_amt (ชีวิต)
- total_acc_amt (อุบัติเหตุ)
- total_med_amt (สุขภาพ)
- total_tpd_amt (ทุพพลภาพ)
- ผลลัพธ์: ยอดรวมนี้จะถูกนำไปใช้ใน Column current_month_inforce เพื่อแสดงขนาดของวงเงินความคุ้มครองที่มีผลบังคับในเดือนนั้น
- Logic: ใช้คำสั่ง SUM(...) OVER(PARTITION BY policy_no, policy_year)
- ความหมาย: แม้ข้อมูลต้นทางจะแบ่งเป็นรายงวด (Period) แต่ในส่วนของ Premium ระบบต้องการยอดรวมสุทธิ "ทั้งปีกรมธรรม์" มาแสดงในทุกๆ แถวของปีนั้น โดยแยกตามประเภทเบี้ยประกัน (Life, E1, Acc, Med, TPD, IPD, OPD, Dental)
- ผลลัพธ์: ทำให้ไม่ว่าเราจะดูที่เดือนไหนของปีกรมธรรม์นั้น เราจะเห็นยอดเบี้ยประกันรวมของทั้งปีประกอบอยู่เสมอ
- SA Query <![CDATA[/*WITH filter_policy as ( select distinct policy_no from tx_act_snap_policy where policy_no > :policyNo order by policy_no limit :limit ),*/ WITH policy_master AS ( SELECT p.period, sub.policy_no, sub.policy_year, MIN(sub.promise_date) AS base_promise_date, -- แก้ไข: ดึง reinsur_no จากปีที่ตรงกัน MAX( CASE WHEN sub.policy_year = p.policy_year THEN p.re_insur_no ELSE sub.reinsur_no END ) AS reinsur_no, MAX(sub.pay_type) AS pay_type, -- แก้ไข: ดึง expire_date ให้ตรงตาม policy_year นั้นๆ MAX(p.expire_date)::date AS expire_date FROM ( SELECT policy_no, policy_year, promise_date, reinsur_no AS reinsur_no, pay_type FROM tx_act_snap_unname_policy UNION ALL SELECT policy_no, policy_year, period_date AS promise_date, re_insure_no AS reinsur_no, pay_type FROM tx_act_snap_cert_inforce ) sub INNER JOIN tx_act_snap_policy p ON sub.policy_no = p.policy_no AND sub.policy_year = p.policy_year -- ***ต้อง Join ด้วยปีด้วย เพื่อให้ expire_date ตรงปี *** GROUP BY 1, 2, 3 ), periods AS ( SELECT pm.period, pm.policy_no, pm.policy_year, pm.reinsur_no, pm.pay_type, pm.expire_date, (pm.base_promise_date + (n || ' month')::interval)::date AS period_date, n + 1 AS period_number, pm.base_promise_date as promise_date FROM policy_master pm CROSS JOIN generate_series(0, 11) AS n ), alt AS ( SELECT t.policy_no, date_trunc('day', t.doc_date)::date AS period_date, t.policy_year, -- ยอดรวมสุทธิของวันนั้น (รวมทุกประเภทเพื่อใช้ในงวดปกติ) SUM(t.life_diff) AS premium_life, SUM(t.acc_diff) AS premium_acc, SUM(t.med_diff) AS premium_med, SUM(t.tpd_diff) AS premium_tpd, SUM(t.e1_diff) AS premium_e1, SUM(t.ipd_diff) AS premium_ipd, SUM(t.opd_diff) AS premium_opd, SUM(t.dental_diff) AS premium_dental, -- ยอดเฉพาะ Case 'C' (ต้องเป็น mth_status = 1 เท่านั้น) SUM(CASE WHEN t.mth_status = 1 THEN t.life_diff ELSE 0 END) AS premium_life_c, SUM(CASE WHEN t.mth_status = 1 THEN t.acc_diff ELSE 0 END) AS premium_acc_c, SUM(CASE WHEN t.mth_status = 1 THEN t.med_diff ELSE 0 END) AS premium_med_c, SUM(CASE WHEN t.mth_status = 1 THEN t.tpd_diff ELSE 0 END) AS premium_tpd_c, SUM(CASE WHEN t.mth_status = 1 THEN t.e1_diff ELSE 0 END) AS premium_e1_c, SUM(CASE WHEN t.mth_status = 1 THEN t.ipd_diff ELSE 0 END) AS premium_ipd_c, SUM(CASE WHEN t.mth_status = 1 THEN t.opd_diff ELSE 0 END) AS premium_opd_c, SUM(CASE WHEN t.mth_status = 1 THEN t.dental_diff ELSE 0 END) AS premium_dental_c FROM ( -- ชุดที่ 1: งวดปกติ (mth_status = 0) SELECT cert.policy_no, cert.policy_year, cert.doc_date, cert.status_after, cert.mth_status, -- Logic: ถ้า T และบริษัทตรง -> ติดลบ | ถ้า T และบริษัทไม่ตรง -> 0 | ถ้าไม่ใช้ T -> ยอดบวกปกติ CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.life_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.life_prem_diff,0) END as life_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.acc_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.acc_prem_diff,0) END as acc_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.med_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.med_prem_diff,0) END as med_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.tpd_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.tpd_prem_diff,0) END as tpd_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.life_e1_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.life_e1_prem_diff,0) END as e1_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.med_plan_rate_ip_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.med_plan_rate_ip_prem_diff,0) END as ipd_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.med_plan_rate_op_prem_diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.med_plan_rate_op_prem_diff,0) END as opd_diff, CASE WHEN cert.status_after = 'T' THEN (CASE WHEN comp.company_code IS NOT NULL THEN COALESCE(cert.Dental_Diff,0) * -1 ELSE 0 END) ELSE COALESCE(cert.Dental_Diff,0) END as dental_diff FROM tx_act_snap_certalteration cert LEFT JOIN tx_act_snap_company comp ON cert.comp_code_after = comp.company_code AND cert.policy_no = comp.policy_no AND cert.policy_year = comp.policy_year WHERE cert.mth_status = 0 AND cert.doc_status <> 2 UNION ALL -- ชุดที่ 2: งวดเพิ่ม (mth_status = 1) -- หมายเหตุ: ชุดนี้ใช้ Logic เดิม (T เป็น 0) ตามที่คุณเขียนไว้ตอนแรก -- หากต้องการเช็คบริษัทแบบชุดที่ 1 สามารถ Copy ไปวางแทนได้ครับ SELECT policy_no, policy_year, doc_date, status_after, mth_status, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(life_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(acc_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(med_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(tpd_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(life_e1_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(med_plan_rate_ip_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(med_plan_rate_op_prem_diff,0) END, CASE WHEN status_after = 'T' THEN 0 ELSE COALESCE(Dental_Diff,0) END FROM tx_act_snap_certalteration WHERE mth_status = 1 AND doc_status <> 2 ) t GROUP BY 1, 2, 3 ), alt_mem_counts AS ( SELECT policy_no, policy_year, date_trunc('day', doc_date)::date AS period_date, SUM(CASE WHEN status_after IN ('A') THEN 1 ELSE 0 END) AS no_mem_addition, SUM(CASE WHEN status_after IN ('C', 'D') THEN 1 ELSE 0 END) AS no_mem_cancellation FROM tx_act_snap_certalteration GROUP BY 1, 2, 3 ), unname_grouped AS ( SELECT policy_no, policy_year, promise_date, period_date, SUM(COALESCE(no_additions, 0)) AS no_additions, SUM(COALESCE(no_terminations, 0)) AS no_terminations, SUM(COALESCE(no_total, 0)) AS no_total, --SUM(COALESCE(total_tpd_amt, 0)) AS total_tpd_amt, SUM(SUM(COALESCE(total_life, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_life, SUM(SUM(COALESCE(total_e1_net, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_e1_net, SUM(SUM(COALESCE(total_acc, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_acc, SUM(SUM(COALESCE(total_med, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_med, SUM(SUM(COALESCE(total_tpd, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_tpd, SUM(SUM(COALESCE(total_ipd, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_ipd, SUM(SUM(COALESCE(total_opd, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS total_opd, SUM(SUM(COALESCE(dental, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS dental, SUM(SUM(COALESCE(grand_total, 0))) OVER(PARTITION BY policy_no,policy_year,period_date) AS grand_total FROM tx_act_snap_unname_policy GROUP BY 1, 2, 3, 4 --HAVING period_date = promise_date ), step1_unname AS ( SELECT ps.period, ps.period_date, ps.policy_no, ps.reinsur_no, ps.policy_year, ps.expire_date, ps.promise_date, CASE WHEN ps.pay_type = 0 THEN 'Monthly' WHEN ps.pay_type = 1 THEN 'Quarterly' WHEN ps.pay_type = 2 THEN 'Semi Annual' WHEN ps.pay_type = 3 THEN 'Annual' ELSE 'Unknown' END AS payment_mode, (COALESCE(u.no_total,0))::numeric AS current_month_inforce, COALESCE(u.no_additions,0)::numeric AS no_mem_addition, COALESCE(u.no_terminations,0)::numeric AS no_mem_cancellation, -- Logic เดียวกัน: งวดแรกดึงเฉพาะ C, งวดปกติรวมยอด alt ทั้งหมด COALESCE(u.total_life,0) AS premium_life, COALESCE(u.total_e1_net,0) AS premium_life_e1, COALESCE(u.total_acc,0) AS premium_acc, COALESCE(u.total_med,0) AS premium_med, COALESCE(u.total_tpd,0) AS premium_tpd, COALESCE(u.total_ipd,0) AS premium_ipd, COALESCE(u.total_opd,0) AS premium_opd, COALESCE(u.dental,0) AS premium_dental, -- ยอดรวม Premium Total COALESCE(u.grand_total,0) AS premium_total FROM periods ps LEFT JOIN unname_grouped u ON u.policy_no = ps.policy_no AND u.policy_year = ps.policy_year AND u.period_date = ps.period_date LEFT JOIN alt alt ON alt.policy_no = ps.policy_no AND alt.policy_year = ps.policy_year AND alt.period_date = ps.period_date LEFT JOIN alt_mem_counts al ON al.policy_no = ps.policy_no AND al.policy_year = ps.policy_year AND al.period_date = ps.period_date WHERE EXISTS (SELECT 1 FROM tx_act_snap_unname_policy u WHERE u.policy_no = ps.policy_no AND u.policy_year = ps.policy_year) ), step2_cert AS ( SELECT ps.period, ps.period_date, ps.policy_no, ps.reinsur_no, ps.policy_year, ps.expire_date, ps.promise_date, CASE WHEN ps.pay_type = 0 THEN 'Monthly' WHEN ps.pay_type = 1 THEN 'Quarterly' WHEN ps.pay_type = 2 THEN 'Semi Annual' WHEN ps.pay_type = 3 THEN 'Annual' ELSE 'Unknown' END AS payment_mode, COUNT(ci.cer_no)::numeric AS current_month_inforce, MAX(COALESCE(al_mem.no_mem_addition, 0))::numeric AS no_mem_addition, MAX(COALESCE(al_mem.no_mem_cancellation, 0))::numeric AS no_mem_cancellation, (COALESCE(SUM(ci.life_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_life_c), 0) ELSE COALESCE(MAX(al.premium_life), 0) END)::numeric AS premium_life, (COALESCE(SUM(ci.life_e1_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_e1_c), 0) ELSE COALESCE(MAX(al.premium_e1), 0) END)::numeric AS premium_life_e1, (COALESCE(SUM(ci.acc_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_acc_c), 0) ELSE COALESCE(MAX(al.premium_acc), 0) END)::numeric AS premium_acc, (COALESCE(SUM(ci.med_acc_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_med_c), 0) ELSE COALESCE(MAX(al.premium_med), 0) END)::numeric AS premium_med, (COALESCE(SUM(ci.tpd_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_tpd_c), 0) ELSE COALESCE(MAX(al.premium_tpd), 0) END)::numeric AS premium_tpd, (COALESCE(SUM(ci.ipd_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_ipd_c), 0) ELSE COALESCE(MAX(al.premium_ipd), 0) END)::numeric AS premium_ipd, (COALESCE(SUM(ci.opd_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_opd_c), 0) ELSE COALESCE(MAX(al.premium_opd), 0) END)::numeric AS premium_opd, (COALESCE(SUM(ci.dental_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_dental_c), 0) ELSE COALESCE(MAX(al.premium_dental), 0) END)::numeric AS premium_dental, -- ยอดรวมสุทธิ (COALESCE(SUM(ci.life_prem + ci.life_e1_prem + ci.acc_prem + ci.med_acc_prem + ci.tpd_prem + ci.ipd_prem + ci.opd_prem + ci.dental_prem), 0) + CASE WHEN ps.period_date = ps.promise_date THEN COALESCE(MAX(al.premium_life_c + al.premium_e1_c + al.premium_acc_c + al.premium_med_c + al.premium_tpd_c + al.premium_ipd_c + al.premium_opd_c + al.premium_dental_c), 0) ELSE COALESCE(MAX(al.premium_life + al.premium_e1 + al.premium_acc + al.premium_med + al.premium_tpd + al.premium_ipd + al.premium_opd + al.premium_dental), 0) END)::numeric AS premium_total FROM periods ps LEFT JOIN tx_act_snap_cert_inforce ci ON ci.policy_no = ps.policy_no AND ci.policy_year = ps.policy_year AND ci.period_date = ps.period_date LEFT JOIN alt al ON al.policy_no = ps.policy_no AND al.policy_year = ps.policy_year AND al.period_date = ps.period_date LEFT JOIN alt_mem_counts al_mem ON al_mem.policy_no = ps.policy_no AND al_mem.policy_year = ps.policy_year AND al_mem.period_date = ps.period_date WHERE NOT EXISTS (SELECT 1 FROM tx_act_snap_unname_policy u WHERE u.policy_no = ps.policy_no AND u.policy_year = ps.policy_year) GROUP BY 1, 2, 3, 4, 5, 6, 7, 8 ), src AS ( SELECT * FROM step1_unname UNION ALL SELECT * FROM step2_cert ), calculated_final AS ( SELECT *, (no_mem_addition - no_mem_cancellation) as net_change, SUM(no_mem_addition - no_mem_cancellation) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) + FIRST_VALUE(current_month_inforce - (no_mem_addition - no_mem_cancellation)) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date) AS running_total FROM src ) SELECT --:rigProcessHdId, period, period_date, policy_no, reinsur_no, payment_mode, policy_year, promise_date, expire_date, COALESCE( LAG(running_total) OVER (PARTITION BY policy_no ORDER BY policy_year, period_date), (running_total - net_change) ) AS no_mem_previous, no_mem_addition, no_mem_cancellation, running_total AS no_mem_total, premium_life, premium_acc, premium_med, premium_tpd, premium_life_e1, premium_ipd, premium_opd, premium_dental,(premium_ipd + premium_opd + premium_dental) as premium_med_total, premium_total --,now(), :userName, now(), :userName FROM calculated_final --WHERE policy_no = 'GL4635' and policy_year = 8 ORDER BY policy_no, policy_year, period_date;]]>

## Output
| No. | Name | Type (Source) | Description | Input ข้อมูล |  | Outputtx_stg_act_prem_movement | เงื่อนไขการบันทึก | Example |
| Step1 | Step2 |
| 1 | Period | numeric | Period | tx_act_snap_policy.period | period | yyyyMM (AD.) | 201812 |
| 2 | Period Date | date | Period ที่คำนวณจาก PromiseDate | tx_act_snap_unname_policy.promise_date*ต้อง loop ให้ครบ 12 เดือนเริ่มจาก Period Date แรก Click here to expand... เดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019 | tx_act_snap_cert_inforce.period_date*ต้อง loop ให้ครบ 12 เดือนเริ่มจาก Period Date แรก Click here to expand... เดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019 | period_date | dd/mm/yyyy | 01/12/2018 |
| 3 | PolicyNo | varchar | เลขกรมธรรม์ | tx_act_snap_unname_policy.policy_no | tx_act_snap_cert_inforce.policy_no | policy_no |  | GH4495 |
| 4 | ReinsuredNo | varchar | เลขประกันภัยต่อ | tx_act_snap_unname_policy.reInsur_nowhere reInsur_no is not null | tx_act_snap_cert_inforce.re_insure_nowhere re_insure_no is not null | reinsured_no |  | 1706008 |
| 5 | PaymentMode | varchar | ประเภทการชำระเบี้ยประกันภัย | tx_act_snap_unname_policy.pay_type | tx_act_snap_cert_inforce.pay_type | payment_mode | pay_type = 0 THEN 'Monthly'pay_type = 1 THEN 'Quarterly'pay_type = 2 THEN 'Semi Annual'pay_type = 3 THEN 'Annual' | Quarterly |
| 6 | PolicyYear |  | ปีกรรมธรรม์ | tx_act_snap_unname_policy.policy_year | tx_act_snap_cert_inforce.policy_year | policy_year |  | 1 |
| 7 | EffectiveDate | datetime | วันที่คุ้มครอง | tx_act_snap_unname_policy.promise_date | tx_act_snap_cert_inforce.promise_date | effective_date | dd/mm/yyyy (AD.) | 01/12/2018 |
| 8 | EndDate | datetime | วันที่สิ้นความคุ้มครอง | tx_act_snap_policy.expire_date | tx_act_snap_policy.expire_date | end_date | dd/mm/yyyy (AD.) | 01/11/2019 |
| 9 | NoMemPrevious | numeric | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | จำนวน NoMemTotal จาก Period date ก่อนหน้าเช่นปัจจุบัน Period ที่ 1 = 201812 มี Period date = 01/12/2018 ให้ไปนำ NoMemTotal ของ Period date = 01/11/2018 มาใช้กรณีเป็น กรมธรรม์ใหม่ เริ่มปีแรก (PolicyYear = 1) จะไม่มีสมาชิกภายใต้กรรม์ใน Period ก่อนหน้าให้แสดงเป็น 0 | จำนวนสมาชิกจาก Period date ก่อนหน้าtx_act_snap_cert_inforce.status_member not in ('C','D','L')เช่นปัจจุบัน Period ที่ 1 = 201812 มี Period date = 01/12/2018 ให้ไปนำ NoMemTotal ของ Period date = 01/11/2018 มาใช้กรณีเป็น กรมธรรม์ใหม่ เริ่มปีแรก (PolicyYear = 1) จะไม่มีสมาชิกภายใต้กรรม์ใน Period ก่อนหน้าให้แสดงเป็น 0 | no_mem_previous | #,###coalesce(#,0) | 31 |
| 10 | NoMemAddition | numeric | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | sum(case when tx_act_snap_certalteration.status_after in ('A') then 1 else 0 end))group by tx_act_snap_policy.period, tx_act_snap_unname_policy.policy_no, tx_act_snap_certalteration.comp_code_after, tx_act_snap_certalteration.doc_date (เท่ากับ Promisedate)Sum จำนวนสมาชิกที เพิ่ม (Addition) จากสลักหลัง โดยนับจำนวนจากรายการ status_after in ('A') ที่พบตาม policy_no, doc_date ของแต่ละ period | sum(case when tx_act_snap_certalteration.status_after in ('A') then 1 else 0 end))group by tx_act_snap_cert_inforce.period_date, tx_act_snap_policy.policy_no, tx_act_snap_certalteration.comp_code_after, tx_act_snap_certalteration.doc_date (เท่ากับ Promisedate)Sum จำนวนสมาชิกที เพิ่ม (Addition) จากสลักหลัง โดยนับจำนวนจากรายการ status_after in ('A') ที่พบตาม policy_no, doc_date ของแต่ละ period | no_mem_addition | #,###coalesce(#,0) | 3 |
| 11 | NoMemCancellation | numeric | จำนวนสมาชิกที่ลดลงใน Period นี้ | sum(case when tx_act_snap_certalteration.StatusAfter in ('C','D') then 1 else 0 end))group by tx_act_snap_policy.period, tx_act_snap_unname_policy.policy_no, tx_act_snap_certalteration.comp_code_after, tx_act_snap_certalteration.doc_date (เท่ากับ Promisedate)Sum จำนวนสมาชิกที ยกเลิก (Cancellation) จากสลักหลัง โดยนับจำนวนจากรายการ status_after in ('C','D') ที่พบตาม policy_no, doc_date ของแต่ละ period | sum(case when tx_act_snap_certalteration.StatusAfter in ('C','D') then 1 else 0 end))group by tx_act_snap_cert_inforce.period_date, tx_act_snap_policy.policy_no, tx_act_snap_certalteration.comp_code_after, tx_act_snap_certalteration.doc_date (เท่ากับ Promisedate)Sum จำนวนสมาชิกที ยกเลิก (Cancellation) จากสลักหลัง โดยนับจำนวนจากรายการ status_after in ('C','D') ที่พบตาม policy_no, doc_date ของแต่ละ period | no_mem_cancellation | #,###coalesce(#,0) | 8 |
| 12 | NoMemTotal | numeric | จำนวนสมาชิกทั้งหมดใน Period นี้ | total_life_amt + total_acc_amt + total_med_amt + total_tpd_amt | count(tx_act_snap_cert_inforce.cer_no) ทั้งหมด ของแต่ละ tx_act_snap_cert_inforce.period_datetx_act_snap_cert_inforce.status_member not in ('C','D','L')นับจำนวนสมาชิกทั้งหมดที่พบในแต่ละ Period Date (นับทั้งเดือน) ตาม PolicyNo*ค่าของ NoMemTotal จะต้องสอดคล้องกับ (NoMemPrevious + NoMemAddition) - NoMemCancellation | no_mem_total | #,###coalesce(#,0) | 26 |
| 13 | PremiumLife | numeric | เบี้ยชีวิต | sum(tx_act_snap_unname_policy.total_life)group by policy_no | sum(tx_act_snap_cert_inforce.life_prem) group by tx_act_snap_policy.period, tx_act_snap_cert_inforce.pay_typetx_act_snap_certalteration.life_prem_diff | premium_life | #,###.##coalesce(#,0.00) | 1,000.15 |
| 14 | PremiumAccident | numeric | เบี้ยอุบัติเหตุ | sum(tx_act_snap_unname_policy.total_acc)group by policy_no | sum(tx_act_snap_cert_inforce.acc_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.acc_prem_diff | premium_accident | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 | PremiumMedAcc | numeric | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | sum(tx_act_snap_unname_policy.total_med)group by policy_no | sum(tx_act_snap_cert_inforce.med_acc_prem) group by tx_act_snap_cert_inforce.period,tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.med_prem_diff) | premium_med_acc | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 | PremiumTPD | numeric | เบี้ย TPD | sum(tx_act_snap_unname_policy.total_tpd)group by policy_no | sum(tx_act_snap_cert_inforce.tpd_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.tpd_prem_diff) | premium_tpd | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 | PremiumE1 | numeric | เบี้ยชีวิต (Extra) | sum(tx_act_snap_unname_policy.total_e1_net)group by policy_no | sum(tx_act_snap_cert_inforce.life_e1_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.life_e1_prem_diff) | premium_e1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 18 | PremiumIPD | numeric | เบี้ย IPD | sum(tx_act_snap_unname_policy.total_ipd)group by policy_no | sum(tx_act_snap_cert_inforce.ipd_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.med_plan_rate_ip_prem_diff) | premium_ipd | #,###.##coalesce(#,0.00) | 1,000.15 |
| 19 | PremiumOPD | numeric | เบี้ย OPD | sum(tx_act_snap_unname_policy.total_opd)group by policy_no | sum(tx_act_snap_cert_inforce.opd_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.med_plan_rate_op_prem_diff) | premium_opd | #,###.##coalesce(#,0.00) | 1,000.15 |
| 20 | PremiumDental | numeric | เบี้ย ทันตกรรม | sum(tx_act_snap_unname_policy.dental)group by policy_no | sum(tx_act_snap_cert_inforce.opd_prem dental_prem) group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_typemax(tx_act_snap_certalteration.Dental_Diff) | premium_dental | #,###.##coalesce(#,0.00) | 1,000.15 |
| 21 | PremiumMedTotal | numeric | เบี้ยค่ารักษาพยาบาลทั้งหมด | PremiumIPD + PremiumOPD + PremiumDental | PremiumIPD + PremiumOPD + PremiumDental group by tx_act_snap_cert_inforce.period, tx_act_snap_cert_inforce.pay_type) | premium_med_total | #,###.##coalesce(#,0.00) | 1,000.15 |
| 22 | PremiumTotal | numeric | เบี้ยทั้งหมด | sum(tx_act_snap_unname_policy.grand_total)group by policy_no | PremiumLife + PremiumAccident + PremiumMedAcc + PremiumTPD + PremiumE1 + PremiumMedTotal group by Period, tx_act_snap_cert_inforce.pay_type | premium_total | #,###.##coalesce(#,0.00) | 1,000.15 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1299251901 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) > Process ข้อมูล (R61) Premium and movement > WS_RIG_010 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric |  | Period ที่คำนวณจาก PromiseDate | RIG_View_Policy.PromiseDateนำ PromiseDate มากระจายเป็น 12 เดือนโดยนับเดือนแรกจาก PromiseDate ที่พบ เช่น PromiseDate = 01/12/2018 จะเป็นเดือนPolicyNoPolicyYearPromiseDatePeriod date1GH4495101/12/201801/12/20182GH4495101/12/201801/01/20193GH4495101/12/201801/02/20194GH4495101/12/201801/03/20195GH4495101/12/201801/04/20196GH4495101/12/201801/05/20197GH4495101/12/201801/06/20198GH4495101/12/201801/07/20199GH4495101/12/201801/08/201910GH4495101/12/201801/09/201911GH4495101/12/201801/10/201912GH4495101/12/201801/11/2019 | yyyyMM (AD.) | 201812 |
| 2 | Period Date | date |  | Period ที่คำนวณจาก PromiseDate | RIG_View_Policy.PromiseDateนำ PromiseDate มากระจายเป็น 12 เดือนโดยนับเดือนแรกจาก PromiseDate ที่พบ | dd/mm/yyyy | 01/12/2018 |
| 3 | PolicyNo | varchar |  | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  | GH4495 |
| 4 | ReinsuredNo | varchar |  | เลขประกันภัยต่อ | (ISNULL(RIG_View_CertInforce.ReInsureNo,'') <> '')เฉพาะข้อมูลที่มี ReinsuredNo (ส่ง Re)*RIG_View_CertInforce จะเก็บข้อมูลสมาชิก ณ ต้นงวด ทุกงวด |  | 1706008 |
| 5 | PaymentMode | varchar |  | ประเภทการชำระเบี้ยประกันภัย | RIG_View_CertInforce.PayType*RIG_View_CertInforce จะเก็บข้อมูลสมาชิก ณ ต้นงวด ทุกงวด | PayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Quarterly |
| 6 | PolicyYear |  |  | ปีกรรมธรรม์ | RIG_View_Policy.PolicyYear |  | 1 |
| 7 | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 01/12/2018 |
| 8 | EndDate | datetime |  | วันที่สิ้นความคุ้มครอง | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 01/11/2019 |
| 9 | NoMemPrevious | numeric | 4 | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | จำนวนสมาชิกจาก Period date ก่อนหน้าRIG_View_CertInforce.StatusMember not in ('C','D','L')เช่นปัจจุบัน Period ที่ 1 = 201812 มี Period date = 01/12/2018 ให้ไปนำ NoMemTotal ของ Period date = 01/11/2018 มาใช้กรณีเป็น กรมธรรม์ใหม่ เริ่มปีแรก (PolicyYear = 1) จะไม่มีสมาชิกภายใต้กรรม์ใน Period ก่อนหน้าให้แสดงเป็น 0 | #,###coalesce(#,0) | 31 |
| 10 | NoMemAddition | numeric | 4 | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | sum(case when RIG_View_CertAlteration.StatusAfter in ('A','T') then 1 else 0 end))group by Period, RIG_View_Policy.PolicyNo, RIG_View_CertAlteration.CompcodeAfter, RIG_View_CertAlteration.DocDate (เท่ากับ Promisedate)Sum จำนวนสมาชิกที เพิ่ม (Addition) จากสลักหลัง โดยนับจำนวนจากรายการ StatusAfter in ('A','T') ที่พบตาม PolicyNo, DocDate ของแต่ละ Period | #,###coalesce(#,0) | 3 |
| 11 | NoMemCancellation | numeric | 4 | จำนวนสมาชิกที่ลดลงใน Period นี้ | sum(case when RIG_View_CertAlteration.StatusAfter in ('C','D') then 1 else 0 end))group by Period, RIG_View_Policy.PolicyNo, RIG_View_CertAlteration.CompcodeAfter, RIG_View_CertAlteration.DocDate (เท่ากับ Promisedate)Sum จำนวนสมาชิกที ยกเลิก (Cancellation) จากสลักหลัง โดยนับจำนวนจากรายการ StatusAfter in ('C','D') ที่พบตาม PolicyNo, DocDate ของแต่ละ Period | #,###coalesce(#,0) | 8 |
| 12 | NoMemTotal | numeric | 4 | จำนวนสมาชิกทั้งหมดใน Period นี้ | count(RIG_View_CertInforce.CerNo) ทั้งหมด ของแต่ละ PeriodRIG_View_CertInforce.StatusMember not in ('C','D','L')นับจำนวนสมาชิกทั้งหมดที่พบในแต่ละ Period Date (นับทั้งเดือน) ตาม PolicyNo*ค่าของ NoMemTotal จะต้องสอดคล้องกับ (NoMemPrevious + NoMemAddition) - NoMemCancellation | #,###coalesce(#,0) | 26 |
| 13 | PremiumLife | numeric | 14,2 | เบี้ยชีวิต | sum(RIG_View_CertInforce.LifePrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 14 | PremiumAccident | numeric | 14,2 | เบี้ยอุบัติเหตุ | sum(RIG_View_CertInforce.AccPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 | PremiumMedAcc | numeric | 14,2 | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | sum(RIG_View_CertInforce.MedAccPrem) group by Period,RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 | PremiumTPD | numeric | 14,2 | เบี้ย TPD | sum(RIG_View_CertInforce.TPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 | PremiumE1 | numeric | 14,2 | เบี้ยชีวิต (Extra) | sum(RIG_View_CertInforce.LifeE1Prem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 18 | PremiumIPD | numeric | 14,2 | เบี้ย IPD | sum(RIG_View_CertInforce.IPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 19 | PremiumOPD | numeric | 14,2 | เบี้ย OPD | sum(RIG_View_CertInforce.OPDPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 20 | PremiumDental | numeric | 14,2 | เบี้ย ทันตกรรม | sum(RIG_View_CertInforce.DentalPrem) group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 21 | PremiumMedTotal | numeric | 14,2 | เบี้ยค่ารักษาพยาบาลทั้งหมด | PremiumIPD + PremiumOPD + PremiumDental group by Period, RIG_View_CertInforce.PayType Sum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 22 | PremiumTotal | numeric | 14,2 | เบี้ยทั้งหมด | PremiumLife + PremiumAccident + PremiumMedAcc + PremiumTPD + PremiumE1 + PremiumMedTotal group by Period, RIG_View_CertInforce.PayTypeSum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00PayTypePaymentModeความถี่ในการจ่ายเดือนที่ต้องจ่าย0Monthly (รายเดือน)เดือนละ 1 ครั้งเดือน 1 ถึง 121Quarterly (ราย 3 เดือน)ปีละ 4 ครั้งเดือน 1, 4, 7, 102Semi Annual (ราย 6 เดือน)ปีละ 2 ครั้งเดือน 1, 73Annual (รายปี)ปีละ 1 ครั้งเดือน 1 | #,###.##coalesce(#,0.00) | 1,000.15 |


===== PAGE 1302134951 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) > Process ข้อมูล (R61) Premium and movement > WS_RIG_010 Output > 1.Period ex =====
| เดือน | PolicyNo | PolicyYear | PromiseDate | Period date |
| 1 | GH4495 | 1 | 01/12/2018 | 01/12/2018 |
| 2 | GH4495 | 1 | 01/12/2018 | 01/01/2019 |
| 3 | GH4495 | 1 | 01/12/2018 | 01/02/2019 |
| 4 | GH4495 | 1 | 01/12/2018 | 01/03/2019 |
| 5 | GH4495 | 1 | 01/12/2018 | 01/04/2019 |
| 6 | GH4495 | 1 | 01/12/2018 | 01/05/2019 |
| 7 | GH4495 | 1 | 01/12/2018 | 01/06/2019 |
| 8 | GH4495 | 1 | 01/12/2018 | 01/07/2019 |
| 9 | GH4495 | 1 | 01/12/2018 | 01/08/2019 |
| 10 | GH4495 | 1 | 01/12/2018 | 01/09/2019 |
| 11 | GH4495 | 1 | 01/12/2018 | 01/10/2019 |
| 12 | GH4495 | 1 | 01/12/2018 | 01/11/2019 |


===== PAGE 1302134980 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-007 ข้อมูล (R61) Premium and movement (Actual) > Process ข้อมูล (R61) Premium and movement > WS_RIG_010 Output > 2. Paytype condition =====
Sum ยอดโดยอ้างอิงจาก PaymentMode ของกรมธรรม์ กรณีไม่ใช่เดือนที่ต้องจ่ายให้บันทึก 0.00
| PayType | PaymentMode | ความถี่ในการจ่าย | เดือนที่ต้องจ่าย |
| 0 | Monthly (รายเดือน) | เดือนละ 1 ครั้ง | เดือน 1 ถึง 12 |
| 1 | Quarterly (ราย 3 เดือน) | ปีละ 4 ครั้ง | เดือน 1, 4, 7, 10 |
| 2 | Semi Annual (ราย 6 เดือน) | ปีละ 2 ครั้ง | เดือน 1, 7 |
| 3 | Annual (รายปี) | ปีละ 1 ครั้ง | เดือน 1 |


===== PAGE 1292239131 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-008 ข้อมูล Member over age (Actual) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลสมาชิกที่มีอายุเกิน 70 ปีในแต่ละกรมธรรม์ ภายใต้สัญญา Gibraltar Group EB และดึงข้อมูลย้อนหลัง 1 ปีความคุ้มครอง |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-05 |
| 3 | เวลาประมวลผล(Time) | เมื่อ user ดำเนินการประมวลผล actual ผ่านหน้าจอทำรายการ |
| 4 | ข้อมูลตั้งต้น(Input) | Period = Period ของวันเริ่มสัญญา (yyyyMM)Treaty Code = รหัสสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายละเอียดของสมาชิกที่มีอายุเกิน 70 ปีในแต่ละกรมธรรม์ตามงวด Period ที่กำหนด โดยดึงย้อนหลัง 1 ปีความคุ้มครอง ข้อมูลจะประกอบด้วยรายละเอียดของกรมธรรม์ ช่วงวันที่คุ้มครอง ประเภทการชำระเบี้ย อายุสมาชิก ทุนอุบัติเหตุ และเบี้ยความคุ้มครองที่เกี่ยวข้อง |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล Member over age ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้No.NameTypeSizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodvarchar6Period ของ EffectiveDateRIG_View_Policy.PromiseDateyyyyMM (AD.)2021042PolicyNovarchar10เลขกรมธรรม์RIG_View_Policy.PolicyNo 3EffectiveDatedatetime วันที่คุ้มครองRIG_View_Policy.PromiseDatedd/mm/yyy (AD.)18/04/20244PaymentModevarchar10ประเภทการชำระเบี้ยRIG_View_CertInforce.PayTypePayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual'Annual5CertNovarchar8หมายเลขสมาชิกRIG_View_CertInforce.CustCode 000716Agenumeric2อายุของผู้เอาประกันRIG_View_CertInforce.Age#,###coalesce(#,0)737AccidentInsurenumeric14,2ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปีRIG_View_CertInforce.AccInsurRIG_View_CertInforce.Age > 70#,###.##coalesce(#,0.00)1,000,000.158AccidentPremiumnumeric14,2เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปีRIG_View_CertInforce.AccPremRIG_View_CertInforce.Age > 70#,###.##coalesce(#,0.00)1,000.15 |


===== PAGE 1291977702 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-008 ข้อมูล Member over age (Actual) > Process ข้อมูล Member over age =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูลสมาชิกที่อายุเกิน 70 ปีของแต่ละกรมธรรม์ (Gibraltar) จาก DataOne (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | group ri | tx_act_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_act_snap_policy.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_cert_inforce.policy_year = tx_act_snap_cert_inforce.policy_yeartx_act_snap_cert_inforce.lot_no = 1 |
| 2 | group ri | tx_act_snap_cert_inforce | ข้อมูลสมาชิก ณ ต้นงวด |
| 3 | group ri | tx_act_snap_certificate_cust | ข้อมูลสมาชิก | tx_act_snap_certificate_cust.policy_no = tx_act_snap_cert_inforce.policy_notx_act_snap_certificate_cust.policy_year = tx_act_snap_cert_inforce.policy_yeartx_act_snap_certificate_cust.cust_code = tx_act_snap_cert_inforce.cust_code |
บันทึกไปที่ tx_stg_act_member_over_age

## Output
| No. | Name | Type | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | PeriodDate | varchar | 6 | Period ของข้อมูลจาก PeriodDate (วันที่เริ่มของงวด) | tx_act_snap_cert_inforce.period_date | dd/mm/yyy (AD.) | 18/04/2024 |
| 2 | PolicyNo | varchar | 10 | เลขกรมธรรม์ | tx_act_snap_policy.policy_no |  |  |
| 3 | EffectiveDate | datetime |  | วันที่คุ้มครอง | tx_act_snap_policy.promise_date | dd/mm/yyy (AD.) | 18/04/2024 |
| 4 | PaymentMode | varchar | 10 | ประเภทการชำระเบี้ย | tx_act_snap_cert_inforce.pay_type | pay_type = 0 THEN 'Monthly'pay_type = 1 THEN 'Quarterly'pay_type = 2 THEN 'Semi Annual'pay_type = 3 THEN 'Annual' | Annual |
| 5 | CertNo | varchar | 10 | หมายเลขสมาชิก | tx_act_snap_cert_inforce.cer_nocust_code |  | 00071 |
| 6 | Age | numeric | 2 | อายุของผู้เอาประกัน | tx_act_snap_cert_inforce.age | #,###coalesce(#,0) | 73 |
| 7 | AccidentInsure | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_act_snap_cert_inforce.acc_insurtx_act_snap_cert_inforce.age > 70 | #,###.##coalesce(#,0.00) | 1,000,000.15 |
| 8 | AccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_act_snap_cert_inforce.acc_premtx_act_snap_cert_inforce.age > 70 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 9 | PolicyYear | numeric | 10 | ปีกรรมธรรม์ | tx_act_snap_cert_inforce.policy_year |  | 1 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992033 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-008 ข้อมูล Member over age (Actual) > Process ข้อมูล Member over age > WS_RIG_012 Output =====
| No. | Name | Type | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | varchar | 6 | Period ของ EffectiveDate | RIG_View_Policy.PromiseDate | yyyyMM (AD.) | 202104 |
| 2 | PolicyNo | varchar | 10 | เลขกรมธรรม์ | RIG_View_Policy.PolicyNo |  |  |
| 3 | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.PromiseDate | dd/mm/yyy (AD.) | 18/04/2024 |
| 4 | PaymentMode | varchar | 10 | ประเภทการชำระเบี้ย | RIG_View_CertInforce.PayType | PayType = 0 THEN 'Monthly'PayType = 1 THEN 'Quarterly'PayType = 2 THEN 'Semi Annual'PayType = 3 THEN 'Annual' | Annual |
| 5 | CertNo | varchar | 8 | หมายเลขสมาชิก | RIG_View_CertInforce.CustCode |  | 00071 |
| 6 | Age | numeric | 2 | อายุของผู้เอาประกัน | RIG_View_CertInforce.Age | #,###coalesce(#,0) | 73 |
| 7 | AccidentInsure | numeric | 14,2 | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | RIG_View_CertInforce.AccInsurRIG_View_CertInforce.Age > 70 | #,###.##coalesce(#,0.00) | 1,000,000.15 |
| 8 | AccidentPremium | numeric | 14,2 | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | RIG_View_CertInforce.AccPremRIG_View_CertInforce.Age > 70 | #,###.##coalesce(#,0.00) | 1,000.15 |


===== PAGE 1299251465 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-009 ข้อมูล Investigate Expense =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูล Investigation Expense สำหรับนำมาประมวลผล Match ข้อมูลสินไหม เพื่อนำไประบุข้อมูลค่าใช้จ่ายในการสืบสวนสอบสวนของรายการสินไหม |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-04-02, PS-05-02, PS-06-02 |
| 3 | เวลาประมวลผล(Time) | เมื่อ user ดำเนินการประมวลผล actual ผ่านหน้าจอทำรายการ |
| 4 | ข้อมูลตั้งต้น(Input) | Period = รอบเดือนของการดึงข้อมูลTreaty_code = รหัสสัญญาประกันภัยต่อ Click here to expand... กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์)เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายการข้อมูล Investigation Expense ของแต่ละกรมธรรม์และสินไหมในงวด Period ที่กำหนดโดยมีข้อมูลรายละเอียดที่จำเป็นสำหรับการนำไป Match กับข้อมูลกรมธรรม์และสินไหม เพื่อกำหนดค่าใช้จ่ายในการสืบสวนสอบสวน |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก WS-RIG-001-13 Investigation Expenseระบบบันทึกข้อมูลที่ตาราง tx_stg_act_investigation_expenseNo.NameType (Source)SizeDescriptionFieldOutputtx_stg_act_investigation_expenseเงื่อนไขการบันทึกExample1DocNovarchar20เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบtx_act_snap_investigation_expense.doc_nodoc_no 2PolicyCodenumeric1ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS )tx_act_snap_investigation_expense.policy_codepolicy_code 03PolicyNovarchar8เลขที่กรมธรรม์tx_act_snap_investigation_expense.policy_nopolicy_no GH46394PolicyYearnumeric4ปีกรมธรรม์tx_act_snap_investigation_expense.policy_yearpolicy_year 25EffectiveDatedatetime วันเริ่มสัญญาปีปัจจุบันtx_act_snap_investigation_expense.effective_dateeffective_dateแปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.)09/01/20256CerNovarchar8เลขที่สมาชิกtx_act_snap_investigation_expense.cer_nocer_no 16007ClaimNovarchar20เลขที่สินไหมรับเรื่องtx_act_snap_investigation_expense.claim_noclaim_no 2567018108ApprovedDatedatetime วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติtx_act_snap_investigation_expense.approved_dateapproved_dateแปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.)09/01/20259EventDatedatetime วันที่เกิดเหตุtx_act_snap_investigation_expense.event_dateevent_dateแปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.)09/01/202510ExpenseAmountmoney ค่าใช้จ่ายรวมtx_act_snap_investigation_expense.expense_amountexpense_amountรูปแบบ #,###.##18,000.0011DocDatedatetime วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ (จากหน้าระบบ)tx_act_snap_investigation_expense.doc_datedoc_dateแปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.)09/01/202512ClaimTypevarchar10ประเภทเคลมtx_act_snap_investigation_expense.claim_typeclaim_type1. หากรายการ Investigateion Expense พบรายการเคลมมากกว่า 1 รายการกรณีประเภทเคลมมรณกรรมเมื่อข้อมูล ClaimNo และ ApprovedDate เดียวกัน กำหนด Expense รายการนั้นเป็น ClaimType = Lifeกรณีประเภทเคลมทุพพลภาพเมื่อข้อมูล ClaimNo และ ApprovedDate เดียวกัน กำหนด Expense รายการนั้นเป็น ClaimType = Dismemberment2. หากรายการ Investigateion Expense พบรายการเคลม 1 รายการกรณีประเภทเคลมมรณกรรมกำหนดให้บันทึก Expense ประเภทเคลมตามข้อมูล ClaimType (Life, AccidentDeath)กรณีประเภทเคลมทุพพลภาพLife13InformDatedatetime วันที่รับเรื่องเคลมtx_act_snap_investigation_expense.inform_dateinform_dateแปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.)09/01/202514InvestSeqint ส่งสอบครั้งที่tx_act_snap_investigation_expense.invest_seqinvest_seq 115ConsiderSeqint การพิจารณาเคลมครั้งที่tx_act_snap_investigation_expense.consider_seqconsider_seq 116ReinsurNovarchar20เลขประกันภัยต่อtx_act_snap_investigation_expense.reinsur_noreinsur_no 170100117DocStatusint สถานะเอกสาร [0: Active, 2:ยกเลิก]tx_act_snap_investigation_expense.doc_statusdoc_statusประมวลผลเฉพาะรายการสถานะเอกสาร Active ( doc_status = 0 )018InvestiExpensemoney tx_act_snap_investigation_expense.investigation_expenseinvestigation_expenseรูปแบบ #,###.##18,000.0019MedExpensemoney tx_act_snap_investigation_expense.medical_expensemedical_expenseรูปแบบ #,###.##18,000.0020LegalExpensemoney tx_act_snap_investigation_expense.legal_expenselegal_expenseรูปแบบ #,###.##18,000.00 |


===== PAGE 1293124333 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-009 ข้อมูล Investigate Expense > Process Investigate expense =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูล invesigate expense จาก DataOne (SQLServer) จากหน้าจอ investigate expense ในระบบสินไหมประกันกลุ่ม >

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| PeriodFrom | string | Required | ช่วงเริ่มต้นของเดือน/ปีที่ค้นหาต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Periodตัวอย่างรายงาน 2024Q2 → เลือกรายการที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024Field วันที่พิจารณาสินไหม: tx_act_snap_investigation_expense.approved_date | 202404 |  | yyyyMM (AD.) |
| PeriodTo | string | Required | ช่วงสิ้นสุดของเดือน/ปีที่ค้นหาต้องมีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter Periodตัวอย่างรายงาน 2024Q2 → เลือกรายการที่มีวันที่อนุมัติสินไหมในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024Field วันที่พิจารณาสินไหม: tx_act_snap_investigation_expense.approved_date | 202406 |  | yyyyMM (AD.) |
| TreatyCode | list | Optional | รหัสสัญญาสามารถค้นหาได้มากกว่า 1 treaty ได้ | DAI_Grp_Daiichi_Coins |  |  |

## Process
| Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลค่าใช้จ่ายในการสืบสวนสอบสวนของรายการสินไหม |
| group ri | tx_act_snap_investigation_expense | ข้อมูลค่าใช้จ่ายในการสืบสวนสอบสวนของรายการสินไหม | รับค่าต่อไปนี้จากข้อมูลนำเข้าในหน้าจอ IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expenseดึงข้อมูลที่มีรายการพิจารณาสินไหมและมีค่าใช้จ่ายในการสืบสวนสอบสวนจาก tx_act_snap_investigation_expenseค้นหา PeriodFrom - PeriodTo ช่วงเริ่มต้น-สิ้นสุดของเดือน/ปีที่ จาก tx_act_snap_investigation_expense.approved_dateรายการที่มีสถานะเอกสาร Active จาก tx_act_snap_investigation_expense.doc_status = 0รายการที่มีการส่งประกันภัยต่อเท่านั้น จาก tx_act_snap_investigation_expense.reinsur_no ไม่เป็นค่าว่างนำข้อมูลจาก Investigation Expense หาข้อมูลสินไหม ClaimDeath, ClaimTPD ตามเงื่อนไขกรณีประเภทสินไหมมรณกรรม (Death) tx_act_snap_investigation_expense.claim_type = 0 ใช้เงื่อนไข Inner Join หยิบข้อมูลจากตาราง tx_act_snap_claim_death ดังนี้Investigate expenseclaim_type = 0tx_act_snap_investigation_expense.policy_notx_act_snap_claim_death.policy_notx_act_snap_investigation_expense.policy_yeartx_act_snap_claim_death.policy_yeartx_act_snap_investigation_expense.claim_notx_act_snap_claim_death.inform_notx_act_snap_investigation_expense.approved_datetx_act_snap_claim_death.approve_datetx_act_snap_investigation_expense.consider_seqtx_act_snap_claim_death.consider_seq (suthanee.sa 17/04/2026)กรณีประเภทสินไหมทุพพลภาพ (TPD) tx_act_snap_investigation_expense.claim_type = 1ใช้เงื่อนไข Inner Join หยิบข้อมูลจากตาราง tx_act_snap_claimtpd ดังนี้Investigate expenseclaim_type = 1tx_act_snap_investigation_expense.policy_notx_act_snap_claimtpd.policy_notx_act_snap_investigation_expense.policy_yeartx_act_snap_claimtpd.policy_yeartx_act_snap_investigation_expense.claim_notx_act_snap_claimtpd.inform_notx_act_snap_investigation_expense.approved_datetx_act_snap_claimtpd.approve_dateกรณีประเภทสินไหมสุขภาพ (Heath) tx_act_snap_investigation_expense.claim_type = 2ใช้เงื่อนไข Inner Join หยิบข้อมูลจากตาราง tx_act_snap_claimhealth ดังนี้Investigate expenseclaim_type = 2tx_act_snap_investigation_expense.policy_notx_act_snap_claimhealth.policy_notx_act_snap_investigation_expense.policy_yeartx_act_snap_claimhealth.policy_yeartx_act_snap_investigation_expense.claim_notx_act_snap_claimhealth.notify_notx_act_snap_investigation_expense.approved_datetx_act_snap_claimhealth.approve_dateกำหนดให้มีการ Groupping Fields ทุกฟิล์ดข้อมูลที่ประมวลผลจาก tx_act_snap_investigation_expense เพื่อบันทึกจัดเก็บลงตาราง tx_stg_act_investigation_expense |

## Output
| No. | Name | Type (Source) | Size | Description | Field | Outputtx_stg_act_investigation_expense | เงื่อนไขการบันทึก | Example |
| 1 | DocNo | varchar | 20 | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | tx_act_snap_investigation_expense.doc_no | doc_no |  |  |
| 2 | PolicyCode | numeric | 1 | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | tx_act_snap_investigation_expense.policy_code | policy_code |  | 0 |
| 3 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_act_snap_investigation_expense.policy_no | policy_no |  | GH4639 |
| 4 | PolicyYear | numeric | 4 | ปีกรมธรรม์ | tx_act_snap_investigation_expense.policy_year | policy_year |  | 2 |
| 5 | EffectiveDate | datetime |  | วันเริ่มสัญญาปีปัจจุบัน | tx_act_snap_investigation_expense.effective_date | effective_date | แปลงค่ารูปแบบวันที่เป็น: YYYYMMDD (ค.ศ.) | 09/01/2025 |
| 6 | CerNo | varchar | 8 | เลขที่สมาชิก | tx_act_snap_investigation_expense.cer_no | cer_no |  | 1600 |
| 7 | ClaimNo | varchar | 20 | เลขที่สินไหมรับเรื่อง | tx_act_snap_investigation_expense.claim_no | claim_no |  | 256701810 |
| 8 | ApprovedDate | datetime |  | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | tx_act_snap_investigation_expense.approved_date | approved_date | แปลงค่ารูปแบบวันที่เป็น: YYYYMMDD (ค.ศ.) | 09/01/2025 |
| 9 | EventDate | datetime |  | วันที่เกิดเหตุ | tx_act_snap_investigation_expense.event_date | event_date | แปลงค่ารูปแบบวันที่เป็น: YYYYMMDD (ค.ศ.) | 09/01/2025 |
| 10 | ExpenseAmount | money |  | ค่าใช้จ่ายรวม | tx_act_snap_investigation_expense.expense_amount | expense_amount |  | 18,000.00 |
| 11 | DocDate | datetime |  | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ (จากหน้าระบบ) | tx_act_snap_investigation_expense.doc_date | doc_date | แปลงค่ารูปแบบวันที่เป็น: YYYYMMDD (ค.ศ.) | 09/01/2025 |
| 12 | ClaimType | varchar | 10 | ประเภทเคลม | tx_act_snap_investigation_expense.claim_type | claim_type | เงื่อนไขการบันทึก claim_type พิจารณาดังนี้กรณีประเภทสินไหมมรณกรรม (Death) | claim_type = 0 จะได้ tx_act_snap_claim_death ทั้ง Life และ AccidentDeath ให้พิจารณาเงื่อนไขการลงดังนี้ หากพบสินไหม tx_act_snap_claim_death.life_insur_request > 0 และ acc_insur_request = 0 ให้บันทึก claim_type = 'Life'หากพบสินไหมtx_act_snap_claim_death.acc_insur_request > 0 และ life_insur_request = 0 ให้บันทึก claim_type = 'AccidentDeath'หากพบสินไหมtx_act_snap_claim_death.life_insur_request > 0 และ acc_insur_request > 0 ให้บันทึก claim_type = 'Life'(suthanee.sa 16/04/2026)กรณีประเภทสินไหมทุพพลภาพ (TPD) | claim_type = 1 จะได้ tx_act_snap_claimtpd ทั้ง TPD และ Dismemberment ให้พิจารณาเงื่อนไขการลงดังนี้นำค่า tx_act_snap_claimtpd.claim_status ไปตรวจสอบใน cf_lookup_catalog .parent_id = 1002700นำค่าที่ได้เทียบกับ cf_lookup_catalog.lookup_key อ่านค่าจาก cf_lookup_catalog.description มาพิจารณาต่อหากมีข้อมูล TPD รายการเดียว ให้บันทึก claim_type = 'TPD'หากมีข้อมูล Dismemberment รายการเดียว ให้บันทึก claim_type = 'Dismemberment'หากมีรายการข้อมูลทั้ง TPD และ Dismemberment ให้บันทึก claim_type = 'Dismemberment'กรณีประเภทสินไหมสุขภาพ (Heath) | claim_type = 2นำค่า tx_act_snap_claimhealth.rd_no = cf_claim_type.rd_noกรณีพบค่าตรงกันให้หยิบข้อมูล cf_claim_type.claim_type_group บันทึกเป็น claim_type กรณีไม่พบค่า ให้บันทึก claim_type = 'Other' | Life |
| 13 | InformDate | datetime |  | วันที่รับเรื่องเคลม | tx_act_snap_investigation_expense.inform_date | inform_date | แปลงค่ารูปแบบวันที่เป็น: YYYYMMDD (ค.ศ.) | 09/01/2025 |
| 14 | InvestSeq | int |  | ส่งสอบครั้งที่ | tx_act_snap_investigation_expense.invest_seq | invest_seq |  | 1 |
| 15 | ConsiderSeq | int |  | การพิจารณาเคลมครั้งที่ | tx_act_snap_investigation_expense.consider_seq | consider_seq |  | 1 |
| 16 | ReinsurNo | varchar | 20 | เลขประกันภัยต่อ | tx_act_snap_investigation_expense.reinsur_no | reinsur_no |  | 1701001 |
| 17 | DocStatus | int |  | สถานะเอกสาร [0: Active, 2:ยกเลิก] | tx_act_snap_investigation_expense.doc_status | doc_status | ประมวลผลเฉพาะรายการสถานะเอกสาร Active ( doc_status = 0 ) | 0 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1294992035 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-009 ข้อมูล Investigate Expense > Process Investigate expense > WS_RIG_013 Output =====
| No. | Name | Type (Source) | Size | Description | Field | Outputtx_stg_act_investigation_expense | เงื่อนไขการบันทึก | Example |
| 1 | DocNo | varchar | 20 | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | tx_act_snap_investigation_expense.doc_no | doc_no |  |  |
| 2 | PolicyCode | numeric | 1 | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | tx_act_snap_investigation_expense.policy_code | policy_code |  | 0 |
| 3 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_act_snap_investigation_expense.policy_no | policy_no |  | GH4639 |
| 4 | PolicyYear | numeric | 4 | ปีกรมธรรม์ | tx_act_snap_investigation_expense.policy_year | policy_year |  | 2 |
| 5 | EffectiveDate | datetime |  | วันเริ่มสัญญาปีปัจจุบัน | tx_act_snap_investigation_expense.effective_date | effective_date | แปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.) | 09/01/2025 |
| 6 | CerNo | varchar | 8 | เลขที่สมาชิก | tx_act_snap_investigation_expense.cer_no | cer_no |  | 1600 |
| 7 | ClaimNo | varchar | 20 | เลขที่สินไหมรับเรื่อง | tx_act_snap_investigation_expense.claim_no | claim_no |  | 256701810 |
| 8 | ApprovedDate | datetime |  | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | tx_act_snap_investigation_expense.approved_date | approved_date | แปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.) | 09/01/2025 |
| 9 | EventDate | datetime |  | วันที่เกิดเหตุ | tx_act_snap_investigation_expense.event_date | event_date | แปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.) | 09/01/2025 |
| 10 | ExpenseAmount | money |  | ค่าใช้จ่ายรวม | tx_act_snap_investigation_expense.expense_amount | expense_amount | รูปแบบ #,###.## | 18,000.00 |
| 11 | DocDate | datetime |  | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ (จากหน้าระบบ) | tx_act_snap_investigation_expense.doc_date | doc_date | แปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.) | 09/01/2025 |
| 12 | ClaimType | varchar | 10 | ประเภทเคลม | tx_act_snap_investigation_expense.claim_type | claim_type | 1. หากรายการ Investigateion Expense พบรายการเคลมมากกว่า 1 รายการกรณีประเภทเคลมมรณกรรมเมื่อข้อมูล ClaimNo และ ApprovedDate เดียวกัน กำหนด Expense รายการนั้นเป็น ClaimType = Lifeกรณีประเภทเคลมทุพพลภาพเมื่อข้อมูล ClaimNo และ ApprovedDate เดียวกัน กำหนด Expense รายการนั้นเป็น ClaimType = Dismemberment2. หากรายการ Investigateion Expense พบรายการเคลม 1 รายการกรณีประเภทเคลมมรณกรรมกำหนดให้บันทึก Expense ประเภทเคลมตามข้อมูล ClaimType (Life, AccidentDeath)กรณีประเภทเคลมทุพพลภาพ | Life |
| 13 | InformDate | datetime |  | วันที่รับเรื่องเคลม | tx_act_snap_investigation_expense.inform_date | inform_date | แปลงค่ารูปแบบวันที่เป็น: dd/mm/yyyy (AD.) | 09/01/2025 |
| 14 | InvestSeq | int |  | ส่งสอบครั้งที่ | tx_act_snap_investigation_expense.invest_seq | invest_seq |  | 1 |
| 15 | ConsiderSeq | int |  | การพิจารณาเคลมครั้งที่ | tx_act_snap_investigation_expense.consider_seq | consider_seq |  | 1 |
| 16 | ReinsurNo | varchar | 20 | เลขประกันภัยต่อ | tx_act_snap_investigation_expense.reinsur_no | reinsur_no |  | 1701001 |
| 17 | DocStatus | int |  | สถานะเอกสาร [0: Active, 2:ยกเลิก] | tx_act_snap_investigation_expense.doc_status | doc_status | ประมวลผลเฉพาะรายการสถานะเอกสาร Active ( doc_status = 0 ) | 0 |
| 18 | InvestiExpense | money |  |  | tx_act_snap_investigation_expense.investigation_expense | investigation_expense | รูปแบบ #,###.## | 18,000.00 |
| 19 | MedExpense | money |  |  | tx_act_snap_investigation_expense.medical_expense | medical_expense | รูปแบบ #,###.## | 18,000.00 |
| 20 | LegalExpense | money |  |  | tx_act_snap_investigation_expense.legal_expense | legal_expense | รูปแบบ #,###.## | 18,000.00 |


===== PAGE 1299251460 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-010 ข้อมูล Experience Refund (Actual) =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าข้อมูลการพิจารณาเงินคืนตามประสบการณ์ (Experience Refund) ของแต่ละกรมธรรม์ โดยอ้างอิงจากข้อมูลการเคลมจริงที่เกิดขึ้นในงวดที่เลือก ข้อมูลที่นำเข้าใช้สำหรับคำนวณค่าใช้จ่ายที่มีผลต่อการคืนผลประโยชน์ตามประสบการณ์ของกรมธรรม์ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-05 |
| 3 | เวลาประมวลผล(Time) | ทุกวันที่ 1 ของเดือน เริ่มเวลา 01.00 น. |
| 4 | ข้อมูลตั้งต้น(Input) | Period = Period ของวันที่มีผลบังคับ Experience Refund (yyyyMM)Treaty Code = รหัสสัญญา คำอธิบายเพิ่มเติม กรณีต้องการดึงข้อมูลของ Treaty DAI_Grp_Daiichi_Coins (คุ้มครองทุกผลประโยชน์) เงื่อนไข 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'กรณีต้องการดึงข้อมูลของ Treaty THREL_Grp_PA (คุ้มครองเฉพาะ Accident Death และ TPD/Dismemberment)เงื่อนไข 2 หลักแรก = TG จะได้ ReInsur_No = 'TG%'กรณีต้องการดึงข้อมูลของ Treaty GIB_Grp_Direct_EB (คุ้มครองเฉพาะ Life and Accident Death และ Dismemberment )เงื่อนไข 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%' |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | รายการ Experience Refund ของแต่ละกรมธรรม์ในงวด Period ที่กำหนด โดยข้อมูลประกอบด้วยรายละเอียดที่จำเป็นสำหรับการคำนวณค่าใช้จ่ายตามประสบการณ์ เช่น เลขกรมธรรม์ ข้อมูลผู้เอาประกัน ระดับสมาชิก รายการเคลม วันที่อนุมัติ และค่าใช้จ่ายในการสืบสวนสอบสวน ข้อมูลนี้สามารถนำไปใช้ต่อในการคำนวณ Experience Refund ประจำงวด |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก Process ข้อมูล Experience Refund ตาม period เพื่อนำเข้าข้อมูลสำหรับเตรียมประมวลผลดังนี้No.NameType (Source)SizeDescriptionFieldเงื่อนไขการบันทึกExample1Periodnumeric6Period ของวันที่มีผลบังคับ Experience RefundRIG_View_ExpRefund.PeriodBeginDateyyyyMM (AD.)2025012PolicyNovarchar8เลขกรมธรรม์RIG_View_ExpRefund.PolicyNo GL25423ReinsuredNovarchar10เลขประกันภัยต่อRIG_View_Policy.ReInsur_No 23060184PolicyYearnumeric2ปีกรมธรรม์RIG_View_ExpRefund.PolicyYear 145CommencementDatedatetime วันเริ่มสัญญาครั้งแรกRIG_View_Policy.FirstDatedd/mm/yyyy (AD.)16/06/20106EffectiveDatedatetime วันที่คุ้มครองRIG_View_Policy.PromiseDatedd/mm/yyyy (AD.)16/06/20237EndDatedatetime วันที่สิ้นความคุ้มครองRIG_View_Policy.ExpireDatedd/mm/yyyy (AD.)15/06/20248PaidStatusvarchar10เป็นการบอกว่าใน Policy Year นี้มีการจ่าย Experience Refund หรือไม่RIG_View_ExpRefund.ExpRefundGif RIG_View_ExpRefund.ExpRefundG > 0 then 'Paid'if RIG_View_ExpRefund.ExpRefundG <= 0 then 'Not Paid'Paid9PercentExpRefundnumeric4%การจ่าย Experience RefundRIG_View_ExpRefund.ExpRefundGPercent#,###coalesce(#,0)7510PercentExpensenumeric14,2%ค่าใช้จ่าย100 - RIG_View_ExpRefund.TotalAmtPercent#,###coalesce(#,0)2511PremiumLifenumeric14,2เบี้ยประกันภัยรับ(ชีวิต) ทั้งปีใน Policy Year นี้RIG_View_ExpRefund.Premium + PremiumE1RIG_View_ExpRefund.type = '01'RIG_View_ExpRefund.FlgCal = 1#,###.##coalesce(#,0.00)1,000.1512PremiumAccidentnumeric14,2เบี้ยประกันภัยรับ(อุบัติเหตุ) ทั้งปีใน Policy Year นี้RIG_View_ExpRefund.PremiumRIG_View_ExpRefund.type = '02' (Acc)RIG_View_ExpRefund.FlgCal = 1#,###.##coalesce(#,0.00)1,000.1513PremiumTPDnumeric14,2เบี้ยประกันภัยรับ(TPD) ทั้งปีใน Policy Year นี้RIG_View_ExpRefund.PremiumRIG_View_ExpRefund.type = '10' (TPD)RIG_View_ExpRefund.FlgCal = 1#,###.##coalesce(#,0.00)1,000.1514TotalPremiumnumeric14,2เบี้ยประกันภัยรับทั้งปีใน Policy Year นี้PremiumLife + PremiumAccident + PremiumTPD#,###.##coalesce(#,0.00)1,000.1515Claimnumeric14,2สินไหมที่เกิดขึ้นใน Policy Year นี้RIG_View_ExpRefund.ClaimAll#,###.##coalesce(#,0.00)1,000.1516ExpRefundPreviousYearnumeric14,2Loss carried forward ยอดติดลบยกยอดมาจากปีก่อนหน้ายอดติดลบ Experience Refund จากปีก่อนหน้าRIG_View_ExpRefund.ADJClaim#,###.##coalesce(#,0.00)1,000.1517ExpRefundnumeric14,2ยอด Experience Refund ที่ต้องจ่ายRIG_View_ExpRefund.ExpRefundG#,###.##coalesce(#,0.00)1,000.15 |


===== PAGE 1299022600 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-010 ข้อมูล Experience Refund (Actual) > Process ข้อมูล Experience Refund =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล Experience Refund>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
-

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| 1 | group ri | tx_act_snap_policy | ข้อมูลกรมธรรม์ประกันกลุ่ม | tx_act_snap_policy.policy_no = tx_act_snap_exprefund.policy_notx_act_snap_policy.policy_year = tx_act_snap_exprefund.policy_yeargroup bytx_act_snap_exprefundperiod,tx_act_snap_policy.policy_no,tx_act_snap_policy.re_insur_no,tx_act_snap_policy.policy_year,tx_act_snap_policy.first_date,tx_act_snap_policy.promise_date,tx_act_snap_policyexpire_date,tx_act_snap_exprefund.exp_refund_g_percent,tx_act_snap_exprefund.total_amt_percent,tx_act_snap_exprefund.claim_all,tx_act_snap_exprefund.adj_claim,tx_act_snap_exprefund.exp_refund_g,tx_act_snap_exprefund.period_begin_date,tx_act_snap_exprefund.period_end_date |
| 2 | group ri | tx_act_snap_exprefund | ข้อมูลเงินคืนตามประสบการณ์ |
บันทึกไปที่ tx_stg_act_exp_refund

## Output
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period ของวันที่มีผลบังคับ Experience Refund | tx_act_snap_exprefund.period | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | tx_act_snap_exprefund.policy_no |  | GL2542 |
| 3 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | tx_act_snap_policy.re_insur_no |  | 2306018 |
| 4 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | tx_act_snap_exprefund.policy_year |  | 14 |
| 5 | CommencementDate | date |  | วันเริ่มสัญญาครั้งแรก | tx_act_snap_policy.first_date | dd/mm/yyyy (AD.) | 16/06/2010 |
| 6 | EffectiveDate | date |  | วันที่คุ้มครอง | tx_act_snap_policy.promise_date | dd/mm/yyyy (AD.) | 16/06/2023 |
| 7 | EndDate | date |  | วันที่สิ้นความคุ้มครอง | tx_act_snap_policy.expire_date | dd/mm/yyyy (AD.) | 15/06/2024 |
| 8 | PaidStatus | varchar | 10 | เป็นการบอกว่าใน Policy Year นี้มีการจ่าย Experience Refund หรือไม่ | tx_act_snap_exprefund.exp_refund_g | if exp_refund_g> 0 then 'Paid'if exp_refund_g <= 0 then 'Not Paid' | Paid |
| 9 | PercentExpRefund | numeric | 4 | %การจ่าย Experience Refund | tx_act_snap_exprefund.exp_refund_g_percent | #,###coalesce(#,0) | 75 |
| 10 | PercentExpense | numeric | 14,2 | %ค่าใช้จ่าย | 100 - tx_act_snap_exprefund.total_amt_percent | #,###coalesce(#,0) | 25 |
| 11 | PremiumLife | numeric | 14,2 | เบี้ยประกันภัยรับ(ชีวิต) ทั้งปีใน Policy Year นี้ | tx_act_snap_exprefund.premium + premium_e1tx_act_snap_exprefund.rd_type = '01'tx_act_snap_exprefund.flg_cal is true | #,###.##coalesce(#,0.00) | 1,000.15 |
| 12 | PremiumAccident | numeric | 14,2 | เบี้ยประกันภัยรับ(อุบัติเหตุ) ทั้งปีใน Policy Year นี้ | tx_act_snap_exprefund.premium tx_act_snap_exprefund.rd_type = '02' (Acc)tx_act_snap_exprefund.flg_cal is true | #,###.##coalesce(#,0.00) | 1,000.15 |
| 13 | PremiumTPD | numeric | 14,2 | เบี้ยประกันภัยรับ(TPD) ทั้งปีใน Policy Year นี้ | tx_act_snap_exprefund.premium tx_act_snap_exprefund.rd_type = '10' (TPD)tx_act_snap_exprefund.flg_cal is true | #,###.##coalesce(#,0.00) | 1,000.15 |
| 14 | TotalPremium | numeric | 14,2 | เบี้ยประกันภัยรับทั้งปีใน Policy Year นี้ | PremiumLife + PremiumAccident + PremiumTPD | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 | Claim | numeric | 14,2 | สินไหมที่เกิดขึ้นใน Policy Year นี้ | tx_act_snap_exprefund.claim_all | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 | ExpRefundPreviousYear | numeric | 14,2 | ยอดติดลบ Experience Refund จากปีก่อนหน้า | tx_act_snap_exprefund.adj_claim | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 | ExpRefund | numeric | 14,2 | ยอด Experience Refund ที่ต้องจ่าย | tx_act_snap_exprefund.exp_refund_g | #,###.##coalesce(#,0.00) | 1,000.15 |
| 18 | PeriodExpBegin | date |  | วันที่มีผลบังคับของ Experience Refund | tx_act_snap_exprefund.period_begin_date | dd/mm/yyyy (AD.) | 16/06/2010 |
| 19 | PeriodExpEnd | date |  | วันที่สิ้นสุดผลบังคับของ Experience Refund | tx_act_snap_exprefund.period_end_date | dd/mm/yyyy (AD.) | 16/06/2010 |
| 20 | ClaimLife | numeric | 14,2 | ยอดเงินเคลมความคุ้มครอง Life | tx_act_snap_exprefund.claim_life | #,###.##coalesce(#,0.00) | 1,000.15 |
| 21 | ClaimADD | numeric | 14,2 | ยอดเงินเคลมความคุ้มครอง ADD | tx_act_snap_exprefund.claim_add | #,###.##coalesce(#,0.00) | 1,000.15 |
| 22 | ClaimDismem | numeric | 14,2 | ยอดเงินเคลมความคุ้มครอง Dismemberment | tx_act_snap_exprefund.claim_dismem | #,###.##coalesce(#,0.00) | 1,000.15 |
| 23 | PendingLife | numeric | 14,2 | ยอดรอดำเนินการเคลมความคุ้มครอง Life | tx_act_snap_exprefund.pending_life | #,###.##coalesce(#,0.00) | 1,000.15 |
| 24 | PendingADD | numeric | 14,2 | ยอดรอดำเนินการความคุ้มครอง ADD | tx_act_snap_exprefund.pending_add | #,###.##coalesce(#,0.00) | 1,000.15 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1299251961 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-010 ข้อมูล Experience Refund (Actual) > Process ข้อมูล Experience Refund > WS_RIG_011 Output =====
| No. | Name | Type (Source) | Size | Description | Field | เงื่อนไขการบันทึก | Example |
| 1 | Period | numeric | 6 | Period ของวันที่มีผลบังคับ Experience Refund | RIG_View_ExpRefund.PeriodBeginDate | yyyyMM (AD.) | 202501 |
| 2 | PolicyNo | varchar | 8 | เลขกรมธรรม์ | RIG_View_ExpRefund.PolicyNo |  | GL2542 |
| 3 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | RIG_View_Policy.ReInsur_No |  | 2306018 |
| 4 | PolicyYear | numeric | 2 | ปีกรมธรรม์ | RIG_View_ExpRefund.PolicyYear |  | 14 |
| 5 | CommencementDate | datetime |  | วันเริ่มสัญญาครั้งแรก | RIG_View_Policy.FirstDate | dd/mm/yyyy (AD.) | 16/06/2010 |
| 6 | EffectiveDate | datetime |  | วันที่คุ้มครอง | RIG_View_Policy.PromiseDate | dd/mm/yyyy (AD.) | 16/06/2023 |
| 7 | EndDate | datetime |  | วันที่สิ้นความคุ้มครอง | RIG_View_Policy.ExpireDate | dd/mm/yyyy (AD.) | 15/06/2024 |
| 8 | PaidStatus | varchar | 10 | เป็นการบอกว่าใน Policy Year นี้มีการจ่าย Experience Refund หรือไม่ | RIG_View_ExpRefund.ExpRefundG | if RIG_View_ExpRefund.ExpRefundG > 0 then 'Paid'if RIG_View_ExpRefund.ExpRefundG <= 0 then 'Not Paid' | Paid |
| 9 | PercentExpRefund | numeric | 4 | %การจ่าย Experience Refund | RIG_View_ExpRefund.ExpRefundGPercent | #,###coalesce(#,0) | 75 |
| 10 | PercentExpense | numeric | 14,2 | %ค่าใช้จ่าย | 100 - RIG_View_ExpRefund.TotalAmtPercent | #,###coalesce(#,0) | 25 |
| 11 | PremiumLife | numeric | 14,2 | เบี้ยประกันภัยรับ(ชีวิต) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.Premium + PremiumE1RIG_View_ExpRefund.type = '01'RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 12 | PremiumAccident | numeric | 14,2 | เบี้ยประกันภัยรับ(อุบัติเหตุ) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.PremiumRIG_View_ExpRefund.type = '02' (Acc)RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 13 | PremiumTPD | numeric | 14,2 | เบี้ยประกันภัยรับ(TPD) ทั้งปีใน Policy Year นี้ | RIG_View_ExpRefund.PremiumRIG_View_ExpRefund.type = '10' (TPD)RIG_View_ExpRefund.FlgCal = 1 | #,###.##coalesce(#,0.00) | 1,000.15 |
| 14 | TotalPremium | numeric | 14,2 | เบี้ยประกันภัยรับทั้งปีใน Policy Year นี้ | PremiumLife + PremiumAccident + PremiumTPD | #,###.##coalesce(#,0.00) | 1,000.15 |
| 15 | Claim | numeric | 14,2 | สินไหมที่เกิดขึ้นใน Policy Year นี้ | RIG_View_ExpRefund.ClaimAll | #,###.##coalesce(#,0.00) | 1,000.15 |
| 16 | ExpRefundPreviousYear | numeric | 14,2 | Loss carried forward ยอดติดลบยกยอดมาจากปีก่อนหน้ายอดติดลบ Experience Refund จากปีก่อนหน้า | RIG_View_ExpRefund.ADJClaim | #,###.##coalesce(#,0.00) | 1,000.15 |
| 17 | ExpRefund | numeric | 14,2 | ยอด Experience Refund ที่ต้องจ่าย | RIG_View_ExpRefund.ExpRefundG | #,###.##coalesce(#,0.00) | 1,000.15 |


===== PAGE 1312489737 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-011 กระบวนการดึงข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance =====
SRS Ref. :: BD-PS-014 ข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsurance
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | ประมวลผลและดึงข้อมูลกรมธรรม์ประกันกลุ่ม (Group Policy) ที่เคยมีประวัติการส่งประกันภัยต่อ (Reinsurance) จากทุกสัญญาที่เกี่ยวข้องย้อนหลัง และนำข้อมูลดังกล่าวมาใช้สำหรับการตั้งฐานข้อมูลเริ่มต้น (Initial Data Migration) ให้กับระบบงาน New Group RI โดยมีเป้าหมายเพื่อให้ระบบสามารถตรวจสอบได้อย่างถูกต้องว่า “กรมธรรม์ใดเคยส่ง RI แล้ว” ก่อนเริ่มต้นการประมวลผลจริงในระบบใหม่ ลดความเสี่ยงของการส่งข้อมูลซ้ำและเพิ่มความถูกต้องของข้อมูลตามประวัติ RI เดิมของบริษัทนำเข้าข้อมูลลง Database ของระบบ New Group RI เพื่อใช้เป็นข้อมูลตั้งต้นของระบบ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | เป็นกระบวนการตั้งต้น (Pre-Process) ก่อนที่ระบบ New Group RI จะเริ่มประมวลผลข้อมูลการส่งประกันภัยต่อตามรอบปกติ |
| 3 | เวลาประมวลผล(Time) | ดำเนินการประมวลผลเพียง ครั้งเดียว (One-time) เพื่อตั้งฐาน ก่อนการเริ่มใช้งานระบบ New Group RI |
| 4 | ข้อมูลตั้งต้น(Input) | - |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ข้อมูลกรมธรรม์ที่เคยส่ง Reinsurance ที่จะถูกนำไปตั้งเป็นฐานข้อมูลสำหรับระบบงาน New Group RI ประกอบด้วยpolicy_number : ข้อมูลเลขที่กรมธรรม์policy_year: ปีกรมธรรม์policy_status : ข้อมูลสถานะของกรมธรรม์treaty_code : ข้อมูลรหัสสัญญาบริษัทประกันภัยต่อri_commencement_date : ข้อมูลวันเริ่มสัญญาประกันภัยต่อri_status : สถานะระบุว่ากรมธรรม์นี้ยังส่ง RI อยู่หรือไม่ในปัจจุบัน |
| 6 | อธิบายรายละเอียด(Description) | ระบบดึงข้อมูลจาก tx_mps_master_i05 โดยพิจารณาเงื่อนไขที่หยิบข้อมูล ดังนี้ฟิล์ด ri_portfolio_id มีบันทึกข้อมูล RCG Tagging และไม่เป็นค่าว่าง และไม่เป็นค่า NULLฟิล์ด treaty_code มีบันทึกข้อมูล และไม่เป็นค่าว่าง และไม่เป็นค่า NULLหยิบข้อมูล และจัดเก็บข้อมูลลงตาราง tx_rig_policy_base ตามฟิล์ดต่อไปนี้No.FieldDescriptionData Sourceเงื่อนไขการบันทึกExample1rig_policy_base_idเลขที่ RunningSeq. ระบบสร้างเลขที่อัตโนมัติ 2policy_noเลขที่กรมธรรม์tx_mps_master_i05 .policy_numberไม่เป็นค่าว่าง และไม่เป็นค่า NULL 3policy_yearปีกรมธรรม์tx_mps_master_i05 .policy_yearไม่เป็นค่าว่าง และไม่เป็นค่า NULL 4policy_statusสถานะของกรมธรรม์ประกันกลุ่มtx_mps_master_i05 .policy_status 5treaty_codeรหัสสัญญาบริษัทประกันภัยต่อtx_mps_master_i05 .treaty_code ไม่เป็นค่าว่าง และไม่เป็นค่า NULL 6ri_statusสถานะการส่งประกันภัยต่อtx_mps_master_i05 .ri_status 7ri_commencement_dateวันเริ่มสัญญาประกันภัยต่อtx_mps_master_i05 .ri_commencement_date 8periodรอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า)ระบุค่าเป็น NULLสำหรับการ Migrate ตั้งฐานกรมธรรม์ 9created_dateวันที่บันทึกรายการCurrent System Date 10created_byผู้บันทึกรายการระบุค่าเป็น 'SYSTEM_MIGRATE' 11updated_dateวันที่ปรับปรุงรายการระบุค่าเป็น NULL 12updated_byผู้ปรับปรุงรายการระบุค่าเป็น NULL |


===== PAGE 1316094691 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-012 กระบวนการดึงข้อมูลตั้งฐาน Profit Commission =====
SRS Ref. ::  BD-PS-015 ข้อมูลตั้งฐาน Profit Commission
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | เพื่อดำเนินการจัดทำและจัดเก็บข้อมูลตั้งฐานให้ระบบ New Group RI มีข้อมูลตั้งต้นป้อนเข้าสู่ระบบ เพื่อนำไปใช้ในการคำนวณ RI Profit Commission ในขั้นตอนประมวลผล RI Actual ครั้งแรกของการเริ่มใช้งานระบบ |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PSเป็นกระบวนการตั้งต้น (Pre-Process): ก่อนที่ระบบ New Group RI จะเริ่มประมวลผลข้อมูลการส่งประกันภัยต่อตามรอบปกติ |
| 3 | เวลาประมวลผล(Time) | ดำเนินการประมวลผลเพียง ครั้งเดียว (One-time) เพื่อตั้งฐาน ก่อนการเริ่มใช้งานระบบ New Group RI |
| 4 | ข้อมูลตั้งต้น(Input) | หยิบข้อมูลจากไฟล์จากเอกสารรายงาน RI Profit Commission เพื่อนำมาเก็บลงตารางUpdate DateEdit BySource/File NameFile TypeRemark26/01/2026akkarawat.leFile: Gibraltar_Profit Commission_Calculation 2024xlsxเป็นไฟล์ตัวอย่าง ในตอนทำงานจริงฝ่ายคณิตศาสตร์-ประกันภัยต่อ จะจัดส่งให้ตามปีงบประมาณ26/01/2026akkarawat.leFile: Thaire_Profit Commission_Calculation 2024xlsxเป็นไฟล์ตัวอย่าง ในตอนทำงานจริงฝ่ายคณิตศาสตร์-ประกันภัยต่อ จะจัดส่งให้ตามปีงบประมาณ -ปีที่ประมวลผล {YYYY} เพื่อนำไปหยิบข้อมูลจาก tx_ri_std_all |
| 5 | ข้อมูลที่ได้จากระบบ(Output) | ยอดขาดทุนสะสมของปีก่อนหน้ายอดเบี้ยประกันทั้งปีของปีก่อนหน้า |
| 6 | อธิบายรายละเอียด(Description) | รายละเอียดข้อมูลตั้งต้นสำหรับ Profit Commission ดังนี้จัดเก็บข้อมูลจากไฟล์ Profit Commission Calculation ประจำปีนำเข้าข้อมูลสัญญา Gibraltarอ่านข้อมุลจากไฟล์ Excel และหยิบค่าตามที่กำหนดมาบันทึก Click here to expand... No.NameType (Source)SizeDescriptionField/Inputเงื่อนไขการบันทึกExample1rig_profit_comm_base_idnumeric8เลขที่ Running nextval('seq_rig_profit_comm_base_id')12yearvarchar4ปีงบประมาณข้อมูล Profit Commission รูปแบบปี yyyyกำหนดข้อมูล Year ตามไฟล์แนบ20253periodvarchar6รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) NULL 2025124ri_periodvarchar4งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) NULL2025125reinsurervarchar50บริษัทส่งประกันภัยต่อ Fix 'Gibraltar'Gibraltar6treaty_codevarchar50สัญญาส่งประกันภัยต่อ Fix 'GIB_Grp_Direct_EB'GIB_Grp_Direct_EB7total_premiumnumeric25,2ผลรวมเบี้ยประกันภัยจาก STD Fix 0.001,500,000.008negative_net_balancenumeric25,2ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า หยิบข้อมูลจากไฟล์ข้อมูลยอดเงินจาก Net balance of Incomes and Outgoes (A-B)Cell = Y23พิจารณาเครื่องหมาย +/- หากเป็นค่าบวก ( - ) บันทึกเป็นค่าศูนย์ "0"หากเป็นค่าลบ ( + ) บันทึกยอดขาดเป็นบวก500,000.009quarter_yearvarchar4ปีที่ส่งประกันภัยต่อ NULL202510quarter_periodvarchar2ไตรมาสส่งประกันภัยต่อ NULLQ111profit_flagvarchar1R = ข้อมูลจาก STD ManualRIM = ข้อมูล Manual จาก File Fix 'M'M12created_dateTimestamp วันที่บันทึกรายการ CURRENT_TIMESTAMP2023-06-09 15:49:19.872 +070013created_byvarchar50ผู้บันทึกรายการ Fix 'SYSTEM_MIGRATE'SYSTEM_MIGRATE นำเข้าข้อมูลสัญญา Thaireอ่านข้อมุลจากไฟล์ Excel และหยิบค่าตามที่กำหนดมาบันทึก Click here to expand... No.NameType (Source)SizeDescriptionField/Inputเงื่อนไขการบันทึกExample1rig_profit_comm_base_idnumeric8เลขที่ Running nextval('seq_rig_profit_comm_base_id')12yearvarchar4ปีงบประมาณข้อมูล Profit Commission รูปแบบปี yyyyกำหนดข้อมูล Year ตามไฟล์แนบ20253periodvarchar6รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) NULL 2025124ri_periodvarchar4งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) NULL2025125reinsurervarchar50บริษัทส่งประกันภัยต่อ Fix 'Thaire'Thaire6treaty_codevarchar50สัญญาส่งประกันภัยต่อ Fix 'THREL_Grp_PA'THREL_Grp_PA7total_premiumnumeric25,2ผลรวมเบี้ยประกันภัยจาก STD Fix 0.001,500,000.008negative_net_balancenumeric25,2ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า หยิบข้อมูลจากไฟล์ข้อมูลยอดเงินจาก Profit for Year 2023Cell = M20พิจารณาเครื่องหมาย +/- หากเป็นค่าบวก ( - ) บันทึกเป็นค่าศูนย์ "0"หากเป็นค่าลบ ( + ) บันทึกยอดขาดเป็นบวก500,000.009quarter_yearvarchar4ปีที่ส่งประกันภัยต่อ NULL202510quarter_periodvarchar2ไตรมาสส่งประกันภัยต่อ NULLQ111profit_flagvarchar1R = ข้อมูลจาก STD ManualRIM = ข้อมูล Manual จาก File Fix 'M'M12created_dateTimestamp วันที่บันทึกรายการ CURRENT_TIMESTAMP2023-06-09 15:49:19.872 +070013created_byvarchar50ผู้บันทึกรายการ Fix 'SYSTEM_MIGRATE'SYSTEM_MIGRATE จัดเก็บข้อมูลจาก STDนำเข้าข้อมูลยอดเบี้ยประกันของปีก่อนหน้า จาก EDW ManualRI ตามเงื่อนไขข้อมูล RI ที่บันทึกข้อมูลเข้า EDW ได้สำเร็จ tx_ri_process_header.ri_process_status_id = 3ข้อมูล RI Actual ที่บันทึกข้อมูล tx_ri_std_hd.ri_type = 'A'ข้อมูล RI Group YRT ที่บันทึกข้อมูล tx_ri_std_hd.ind_grp = 'G'อ่านข้อมูลจาก ตามรายละเอียด Click here to expand... No.NameType (Source)SizeDescriptionField/Inputเงื่อนไขการบันทึกExample1rig_profit_comm_base_idnumeric8เลขที่ Runningnextval('seq_rig_profit_comm_base_id') 12yearvarchar4ปีงบประมาณข้อมูล Profit Commissiontx_ri_std_hd.quarter_yearyyyy23periodvarchar6รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า)tx_ri_std_hd.periodyyyyMM2025124ri_periodvarchar4งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า)tx_ri_std_all.ri_periodyyyyMM2025125reinsurervarchar50บริษัทส่งประกันภัยต่อtx_ri_std_hd.reinsurer GH19936treaty_codevarchar50สัญญาส่งประกันภัยต่อtx_ri_std_hd.treaty_code I7total_premiumnumeric25,2ผลรวมเบี้ยประกันภัยจาก STDtx_ri_summary.sum_ri_premium Click here to expand... (SUM(ABS(COALESCE(premium_life, 0))) +SUM(ABS(COALESCE(premium_extra_life, 0))) +SUM(ABS(COALESCE(premium_rider, 0))) +SUM(ABS(COALESCE(premium_extra_rider, 0))) +SUM(ABS(COALESCE(premium_add, 0))) +SUM(ABS(COALESCE(premium_add_extra, 0))) +SUM(ABS(COALESCE(premium_tpd, 0))) +SUM(ABS(COALESCE(premium_extra_tpd, 0))) +SUM(ABS(COALESCE(premium_ttd, 0))) +SUM(ABS(COALESCE(premium_extra_ttd, 0))) +SUM(ABS(COALESCE(premium_med_acc, 0))) +SUM(ABS(COALESCE(premium_ipd, 0))) +SUM(ABS(COALESCE(premium_opd, 0))) +SUM(ABS(COALESCE(premium_dental, 0))) +SUM(ABS(COALESCE(premium_med, 0))) +SUM(ABS(COALESCE(revival_premium_life, 0))) +SUM(ABS(COALESCE(revival_premium_add, 0)))+SUM(case when COALESCE(prem_refund_life, 0) < 0 then ABS(COALESCE(prem_refund_life, 0)) else 0 end ) +SUM(case when COALESCE(prem_refund_extra_life, 0) < 0 then ABS(COALESCE(prem_refund_extra_life, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_rider, 0) < 0 then ABS(COALESCE(prem_refund_rider, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_rider, 0) < 0 then ABS(COALESCE(prem_refund_extra_rider, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_add, 0) < 0 then ABS(COALESCE(prem_refund_add, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_add_extra, 0) < 0 then ABS(COALESCE(prem_refund_add_extra, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_tpd, 0) < 0 then ABS(COALESCE(prem_refund_tpd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_tpd, 0) < 0 then ABS(COALESCE(prem_refund_extra_tpd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_ttd, 0) < 0 then ABS(COALESCE(prem_refund_ttd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_ttd, 0) < 0 then ABS(COALESCE(prem_refund_extra_ttd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_med_acc, 0) < 0 then ABS(COALESCE(prem_refund_med_acc, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_ipd, 0) < 0 then ABS(COALESCE(prem_refund_ipd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_opd, 0) < 0 then ABS(COALESCE(prem_refund_opd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_dental, 0) < 0 then ABS(COALESCE(prem_refund_dental, 0)) else 0 end)) #,###.##1,500,000.008negative_net_balancenumeric25,2ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้าFix '0.00'#,###.##500,000.009quarter_yearvarchar4ปีที่ส่งประกันภัยต่อtx_ri_std_hd.quarter_yearyyyy202510quarter_periodvarchar2ไตรมาสส่งประกันภัยต่อtx_ri_std_hd.quarter_period Q111profit_flagvarchar1R = ข้อมูลจาก STD ManualRII = ข้อมูลจาก FileFix 'R' 12created_dateTimestamp วันที่บันทึกรายการCURRENT_TIMESTAMP 2023-06-09 15:49:19.872 +070013created_byvarchar50ผู้บันทึกรายการFix 'SYSTEM_MIGRATE' SYSTEM_MIGRATE บันทึกข้อมูลลงที่ตาราง tx_rig_profit_comm_base Click here to expand... No.KeyAttribute NameData TypeLengthNot Null (Y/N)DescriptionExampleเงื่อนไขในการบันทึก1PKrig_profit_comm_base_idnumeric8Yเลขที่ Running auto generate2 yearvarchar4Yปีงบประมาณข้อมูล Profit Commission2yyyy3 periodvarchar6Nรอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า)202512yyyyMM4 ri_periodvarchar64Nงวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า)202512yyyyMM5indexreinsurervarchar50Yบริษัทส่งประกันภัยต่อGH1993 6indextreaty_codevarchar50Nสัญญาส่งประกันภัยต่อI 7 total_premiumnumeric25,2Nผลรวมเบี้ยประกันภัยจาก STD1,500,000.00#,###.##8 negative_net_balancenumeric25,2Nผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า-500,000.00#,###.##**เฉพาะข้อมูลจาก File Profit Commission9 quarter_yearvarchar4Nปีที่ส่งประกันภัยต่อ2025yyyy10 quarter_periodvarchar2Nไตรมาสส่งประกันภัยต่อQ1 11 profit_flagvarchar1YR = ข้อมูลจาก STD ManualRII = ข้อมูลจาก File ข้อมูลระบบ1 created_dateTimestamp Yวันที่บันทึกรายการ2023-06-09 15:49:19.872 +0700 2 created_byvarchar50Yผู้บันทึกรายการSYSTEMSYSTEM_MIGRATE 3 updated_dateTimestamp Nวันที่ปรับปรุงรายการ2023-06-09 15:49:19.872 +0700 4 updated_byvarchar50Nผู้ปรับปรุงรายการSYSTEM |


===== PAGE 1316094863 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-012 กระบวนการดึงข้อมูลตั้งฐาน Profit Commission > WS_RIG_012 GIB =====
| No. | Name | Type (Source) | Size | Description | Field/Input | เงื่อนไขการบันทึก | Example |
| 1 | rig_profit_comm_base_id | numeric | 8 | เลขที่ Running |  | nextval('seq_rig_profit_comm_base_id') | 1 |
| 2 | year | varchar | 4 | ปีงบประมาณข้อมูล Profit Commission |  | รูปแบบปี yyyyกำหนดข้อมูล Year ตามไฟล์แนบ | 2025 |
| 3 | period | varchar | 6 | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) |  | NULL | 202512 |
| 4 | ri_period | varchar | 4 | งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) |  | NULL | 202512 |
| 5 | reinsurer | varchar | 50 | บริษัทส่งประกันภัยต่อ |  | Fix 'Gibraltar' | Gibraltar |
| 6 | treaty_code | varchar | 50 | สัญญาส่งประกันภัยต่อ |  | Fix 'GIB_Grp_Direct_EB' | GIB_Grp_Direct_EB |
| 7 | total_premium | numeric | 25,2 | ผลรวมเบี้ยประกันภัยจาก STD |  | Fix 0.00 | 1,500,000.00 |
| 8 | negative_net_balance | numeric | 25,2 | ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า |  | หยิบข้อมูลจากไฟล์ข้อมูลยอดเงินจาก Net balance of Incomes and Outgoes (A-B)Cell = Y23พิจารณาเครื่องหมาย +/- หากเป็นค่าบวก ( - ) บันทึกเป็นค่าศูนย์ "0"หากเป็นค่าลบ ( + ) บันทึกยอดขาดเป็นบวก | 500,000.00 |
| 9 | quarter_year | varchar | 4 | ปีที่ส่งประกันภัยต่อ |  | NULL | 2025 |
| 10 | quarter_period | varchar | 2 | ไตรมาสส่งประกันภัยต่อ |  | NULL | Q1 |
| 11 | profit_flag | varchar | 1 | R = ข้อมูลจาก STD ManualRIM = ข้อมูล Manual จาก File |  | Fix 'M' | M |
| 12 | created_date | Timestamp |  | วันที่บันทึกรายการ |  | CURRENT_TIMESTAMP | 2023-06-09 15:49:19.872 +0700 |
| 13 | created_by | varchar | 50 | ผู้บันทึกรายการ |  | Fix 'SYSTEM_MIGRATE' | SYSTEM_MIGRATE |


===== PAGE 1316094880 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-012 กระบวนการดึงข้อมูลตั้งฐาน Profit Commission > WS_RIG_012 STD =====
| No. | Name | Type (Source) | Size | Description | Field/Input | เงื่อนไขการบันทึก | Example |
| 1 | rig_profit_comm_base_id | numeric | 8 | เลขที่ Running | nextval('seq_rig_profit_comm_base_id') |  | 1 |
| 2 | year | varchar | 4 | ปีงบประมาณข้อมูล Profit Commission | tx_ri_std_hd.quarter_year | yyyy | 2 |
| 3 | period | varchar | 6 | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) | tx_ri_std_hd.period | yyyyMM | 202512 |
| 4 | ri_period | varchar | 4 | งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) | tx_ri_std_all.ri_period | yyyyMM | 202512 |
| 5 | reinsurer | varchar | 50 | บริษัทส่งประกันภัยต่อ | tx_ri_std_hd.reinsurer |  | GH1993 |
| 6 | treaty_code | varchar | 50 | สัญญาส่งประกันภัยต่อ | tx_ri_std_hd.treaty_code |  | I |
| 7 | total_premium | numeric | 25,2 | ผลรวมเบี้ยประกันภัยจาก STD | tx_ri_summary.sum_ri_premium Click here to expand... (SUM(ABS(COALESCE(premium_life, 0))) +SUM(ABS(COALESCE(premium_extra_life, 0))) +SUM(ABS(COALESCE(premium_rider, 0))) +SUM(ABS(COALESCE(premium_extra_rider, 0))) +SUM(ABS(COALESCE(premium_add, 0))) +SUM(ABS(COALESCE(premium_add_extra, 0))) +SUM(ABS(COALESCE(premium_tpd, 0))) +SUM(ABS(COALESCE(premium_extra_tpd, 0))) +SUM(ABS(COALESCE(premium_ttd, 0))) +SUM(ABS(COALESCE(premium_extra_ttd, 0))) +SUM(ABS(COALESCE(premium_med_acc, 0))) +SUM(ABS(COALESCE(premium_ipd, 0))) +SUM(ABS(COALESCE(premium_opd, 0))) +SUM(ABS(COALESCE(premium_dental, 0))) +SUM(ABS(COALESCE(premium_med, 0))) +SUM(ABS(COALESCE(revival_premium_life, 0))) +SUM(ABS(COALESCE(revival_premium_add, 0)))+SUM(case when COALESCE(prem_refund_life, 0) < 0 then ABS(COALESCE(prem_refund_life, 0)) else 0 end ) +SUM(case when COALESCE(prem_refund_extra_life, 0) < 0 then ABS(COALESCE(prem_refund_extra_life, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_rider, 0) < 0 then ABS(COALESCE(prem_refund_rider, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_rider, 0) < 0 then ABS(COALESCE(prem_refund_extra_rider, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_add, 0) < 0 then ABS(COALESCE(prem_refund_add, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_add_extra, 0) < 0 then ABS(COALESCE(prem_refund_add_extra, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_tpd, 0) < 0 then ABS(COALESCE(prem_refund_tpd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_tpd, 0) < 0 then ABS(COALESCE(prem_refund_extra_tpd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_ttd, 0) < 0 then ABS(COALESCE(prem_refund_ttd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_extra_ttd, 0) < 0 then ABS(COALESCE(prem_refund_extra_ttd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_med_acc, 0) < 0 then ABS(COALESCE(prem_refund_med_acc, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_ipd, 0) < 0 then ABS(COALESCE(prem_refund_ipd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_opd, 0) < 0 then ABS(COALESCE(prem_refund_opd, 0)) else 0 end) +SUM(case when COALESCE(prem_refund_dental, 0) < 0 then ABS(COALESCE(prem_refund_dental, 0)) else 0 end)) | #,###.## | 1,500,000.00 |
| 8 | negative_net_balance | numeric | 25,2 | ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า | Fix '0.00' | #,###.## | 500,000.00 |
| 9 | quarter_year | varchar | 4 | ปีที่ส่งประกันภัยต่อ | tx_ri_std_hd.quarter_year | yyyy | 2025 |
| 10 | quarter_period | varchar | 2 | ไตรมาสส่งประกันภัยต่อ | tx_ri_std_hd.quarter_period |  | Q1 |
| 11 | profit_flag | varchar | 1 | R = ข้อมูลจาก STD ManualRII = ข้อมูลจาก File | Fix 'R' |  |  |
| 12 | created_date | Timestamp |  | วันที่บันทึกรายการ | CURRENT_TIMESTAMP |  | 2023-06-09 15:49:19.872 +0700 |
| 13 | created_by | varchar | 50 | ผู้บันทึกรายการ | Fix 'SYSTEM_MIGRATE' |  | SYSTEM_MIGRATE |


===== PAGE 1316094876 | Functional Specification > 02. Process Specification. > RIG-PS-05 Actual - Staging Tables > Batch ACT-012 กระบวนการดึงข้อมูลตั้งฐาน Profit Commission > WS_RIG_012 Thaire =====
| No. | Name | Type (Source) | Size | Description | Field/Input | เงื่อนไขการบันทึก | Example |
| 1 | rig_profit_comm_base_id | numeric | 8 | เลขที่ Running |  | nextval('seq_rig_profit_comm_base_id') | 1 |
| 2 | year | varchar | 4 | ปีงบประมาณข้อมูล Profit Commission |  | รูปแบบปี yyyyกำหนดข้อมูล Year ตามไฟล์แนบ | 2025 |
| 3 | period | varchar | 6 | รอบประมวลผลประกันภัยต่อ (ปีเดือนนำเข้า) |  | NULL | 202512 |
| 4 | ri_period | varchar | 4 | งวด/รอบประกันภัยต่อ (RI Period ในไฟล์นำเข้า) |  | NULL | 202512 |
| 5 | reinsurer | varchar | 50 | บริษัทส่งประกันภัยต่อ |  | Fix 'Thaire' | Thaire |
| 6 | treaty_code | varchar | 50 | สัญญาส่งประกันภัยต่อ |  | Fix 'THREL_Grp_PA' | THREL_Grp_PA |
| 7 | total_premium | numeric | 25,2 | ผลรวมเบี้ยประกันภัยจาก STD |  | Fix 0.00 | 1,500,000.00 |
| 8 | negative_net_balance | numeric | 25,2 | ผลคำนวณยอดขาดทุนสะสมจากปีก่อนหน้า |  | หยิบข้อมูลจากไฟล์ข้อมูลยอดเงินจาก Profit for Year 2023Cell = M20พิจารณาเครื่องหมาย +/- หากเป็นค่าบวก ( - ) บันทึกเป็นค่าศูนย์ "0"หากเป็นค่าลบ ( + ) บันทึกยอดขาดเป็นบวก | 500,000.00 |
| 9 | quarter_year | varchar | 4 | ปีที่ส่งประกันภัยต่อ |  | NULL | 2025 |
| 10 | quarter_period | varchar | 2 | ไตรมาสส่งประกันภัยต่อ |  | NULL | Q1 |
| 11 | profit_flag | varchar | 1 | R = ข้อมูลจาก STD ManualRIM = ข้อมูล Manual จาก File |  | Fix 'M' | M |
| 12 | created_date | Timestamp |  | วันที่บันทึกรายการ |  | CURRENT_TIMESTAMP | 2023-06-09 15:49:19.872 +0700 |
| 13 | created_by | varchar | 50 | ผู้บันทึกรายการ |  | Fix 'SYSTEM_MIGRATE' | SYSTEM_MIGRATE |


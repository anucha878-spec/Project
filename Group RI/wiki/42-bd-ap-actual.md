===== PAGE 1295712394 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) =====
(empty page)


===== PAGE 1312096732 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | เพื่อคำนวณและจัดเก็บข้อมูลประกันภัยต่อ (RI Premium, RI Commission และ Claim Recovery) ของกรมธรรม์ประกันกลุ่มที่อยู่ภายใต้สัญญาประกันภัยต่อแต่ละ Treaty ตามเงื่อนไขทางธุรกิจที่กำหนดไว้ใน BRD/สัญญา RI อย่างถูกต้อง ครบถ้วน โดยมีเป้าหมายหลักดังนี้รองรับการคำนวณประมาณการประกันภัยต่อ (Estimate) ตามระดับที่กำหนดระดับกรมธรรม์ (Policy Level) และ/หรือ ระดับสมาชิก (Member Level) ตามลักษณะของแต่ละ Treatyแยกตามประเภทความคุ้มครอง และช่วงทุน/Layer ตามกติกาของสัญญา RIระบบรองรับกระบวนการ ดังนี้การคำนวณเบี้ยประกันภัยต่อค่าคอมมิชชั่นค่าสินไหมและค่าใช้จ่ายด้านการสืบสวนการคำนวณ Profit Commission (เฉพาะไตรมาส 4)การสร้าง Report, SOA และ Standard Templateการส่งข้อมูลเข้า EDW |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) |  |
| 3 | เวลาประมวลผล(Time) | หลังจากกระบวนการ Batch Process สำหรับดึงข้อมูลจากระบบต้นทางดำเนินการเสร็จสิ้นเรียบร้อยแล้ว หรือเลือกประมวลผลด้วยตนเอง (Manual Run) ได้ |
| 4 | ข้อมูลตั้งต้น(Input) |  |
| 5 | ขอบเขต (Scope) | Treaty ที่รองรับ ดังนี้Gibraltar Group EB (Life + Accident / Dismemberment)คำนวณผลลัพธ์ในระดับ รายสมาชิก → รายกรมธรรม์ → ราย RI QuarterThaire Group PA (ความคุ้มครอง AD&D เท่านั้น)รองรับการประมวลผล Actual ตาม Quarter (Q1–Q4)รองรับการคำนวณ Profit Commission เฉพาะ Quarter 4 ของแต่ละปี |
| 6 | อธิบายรายละเอียด(Description) | แบ่งการประมวลผลแยกตาม Treaty ดังนี้ |
| 7 | ผลลัพธ์(Output) |  |


===== PAGE 1313899289 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-01 Actual Dai-ichi =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | เพื่ออธิบายหลักการประมวลผลข้อมูลสินไหมสำหรับการจัดทำรายงาน Actual Dai-ichi โดยมีเป้าหมายเพื่อคัดเลือกข้อมูลที่เข้าเงื่อนไขตามรอบไตรมาส (Quarter Period) และจัดเตรียมข้อมูลให้ถูกต้อง ครบถ้วน สำหรับการนำไปใช้คำนวณและจัดทำรายงานส่ง Reinsurer |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-04-01, PS-04-02, PS-04-03 |
| 3 | เวลาประมวลผล(Time) | ประมวลผลตามรอบ Quarter Period ที่ผู้ใช้งานเลือก เช่น 2024Q2 จะประมวลผลข้อมูลที่อยู่ในช่วงเดือนเมษายน – มิถุนายน 2024 |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลที่ใช้ในการประมวลผลประกอบด้วยข้อมูลหลัก ดังนี้ข้อมูลสถานะกรมธรรม์ข้อมูลสินไหม |
| 5 | ขอบเขต (Scope) | กรมธรรม์ที่อยู่ภายใต้สัญญา Dai-ichi |
| 6 | อธิบายรายละเอียด(Description) | แบ่งการประมวลผลแยกตาม Process ดังนี้NoProcessWiki1คัดเลือกกรมธรรม์BD-EP-001-01-00 Policy2ประมวลผล ClaimBD-AP-001-01-01 Claim |
| 7 | ผลลัพธ์(Output) | ไฟล์ BDRจะประกอบด้วย Sheet ดังต่อไปนี้A09-14-1 ตัวอย่าง output file - BDR - DT ClaimA09-14-4 ตัวอย่าง output file - BDR - Dismemberment ClaimA09-14-2 ตัวอย่าง output file - BDR - Med.Acc.A09-14-3 ตัวอย่าง output file - BDR - MedClaimError Log / Exception Report |


===== PAGE 1313899594 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-01 Actual Dai-ichi > BD-AP-001-01-01 Claim =====
overview
อธิบายหลักการและขั้นตอนการจัดทำรายงาน RI Claim Notification สำหรับสัญญา Dai-ichi โดยใช้ข้อมูลสินไหมที่เกิดขึ้นจริง (Actual) ในแต่ละรอบ Quarter เพื่อคำนวณส่วนความรับผิดของ Reinsurer ทั้งในส่วนของค่าสินไหมและค่าใช้จ่ายสอบสวน (Investigation & Legal Expense) ตามเงื่อนไขการรับประกันต่อที่กำหนดไว้ในสัญญา ระบบจะคัดเลือกเฉพาะรายการสินไหมที่เข้าเงื่อนไขตามรอบประมวลผล และแบ่งกลุ่มการประมวลผลตามสถานะของสินไหม เพื่อให้การคำนวณและการแสดงผลในรายงานมีความถูกต้อง สอดคล้องกับหลักธุรกิจ และสามารถตรวจสอบย้อนหลังได้
Objective
เพื่อจัดทำรายงาน Claim Notification สำหรับส่งให้ Reinsurer โดยมีเป้าหมายดังนี้
- คัดเลือกเฉพาะรายการสินไหมที่เข้าเงื่อนไขตามรอบ Quarter Period
- คำนวณส่วนแบ่งค่าสินไหมและค่าใช้จ่ายสอบสวนของ Reinsurer ตามสัดส่วนการรับประกันต่อ (% Reinsurance) และระดับ Layer
- จัดเตรียมข้อมูลผลลัพธ์ในรูปแบบที่สอดคล้องกับรายงาน Claim Notification และสามารถนำไปใช้เป็นฐานข้อมูลสำหรับการตรวจสอบและการกระทบยอดในอนาคต
- ใช้เป็นข้อมูลประกอบ Bordereau, SOA และการส่งข้อมูลให้ Reinsurer
การประมวลผลมีขั้นตอนดังต่อไปนี้
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูล ClaimBD-PS-003 ข้อมูล Claim (Estimate,Actual)ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือกตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024ข้อมูลกรมธรรม์BD-PS-001 ข้อมูล Master group policy (List of policy) ระบบเลือกข้อมูลกรมธรรม์ โดยเลือกกรมธรรม์ที่มีอยู่ในข้อมูล ClaimConfiguration RIBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือก
- ตัวอย่าง
- รายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- ระบบเลือกข้อมูลกรมธรรม์ โดยเลือกกรมธรรม์ที่มีอยู่ในข้อมูล Claim
- Step2: คัดเลือกข้อมูลเพื่อประมวลผล Claim ดังนี้ กลุ่มที่ 1: รายการสินไหมที่อนุมัติในรอบ Quarterกลุ่มที่ 2: สินไหม Decline ที่มีค่าใช้จ่ายสอบสวนกลุ่มที่ 3: สินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติมคำอธิบายเป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผลไม่มีการประมวลผลส่วนสินไหม Decline ที่มีค่าใช้จ่ายสอบสวน เนื่องจากในไฟล์ BDR ไม่ใช้ยอดค่าใช้จ่ายสอบสวนในการออกรายงาน ตรวจสอบข้อมูลสินไหมต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarterประเภทการ Claim (Death, Dismemberment/TPD, Health) ตรวจสอบสถานะกรมธรรม์ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ RI Status เป็น Lapsed, Inforce, New businessต้องเป็นกรมธรรม์ที่ส่ง Treaty Dai-ichi โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel ระบบต้องจัดเก็บ flag (เช่น is_inforce_claim_flag) แล/หรือ exclude_reason_code เพื่อแยกเคลมที่ไม่เข้า RI ออกจากการคำนวณ
- เป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผล
- ต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarter
- ประเภทการ Claim (Death, Dismemberment/TPD, Health)
- ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ RI Status เป็น Lapsed, Inforce, New business
- ต้องเป็นกรมธรรม์ที่ส่ง Treaty Dai-ichi โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก = DG จะได้ ReInsur_No = 'DG%'
- สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ระบบต้องจัดเก็บ flag (เช่น is_inforce_claim_flag) แล/หรือ exclude_reason_code เพื่อแยกเคลมที่ไม่เข้า RI ออกจากการคำนวณ
- Step 3: ดึงข้อมูล Percentage Reinsurance สำหรับการคำนวณ Claim Recoveryดึงข้อมูล Percentage Reinsurance ตามระดับ Layer ของ Sum Assured จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้นตัวอย่างLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 999,000,000 บาท50%Layer 2 0%Layer 3 0%
- ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer ของ Sum Assured จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ตัวอย่างLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 999,000,000 บาท50%Layer 2 0%Layer 3 0%
- Step 4: เตรียมข้อมูลสินไหม และกรมธรรม์ หัวข้อคำอธิบายเงื่อนไขการบันทึกรายการ ดึงข้อมูลจากPol.No.เลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Policy Yearปีกรมธรรม์แสดงค่า PolicyYear จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)RI No.เลขอ้างอิงการส่งประกันต่อดึงข้อมูล ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)PolicyNameชื่อกรมธรรม์ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Effective Dateวันที่เริ่มต้นความคุ้มครองแสดงค่า EffectiveDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)EndDateวันที่สิ้นสุดความคุ้มครองแสดงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Cession No.หมายเลขสมาชิก (CertNo)แสดงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Commencement Dateวันที่เริ่มสัญญาครั้งแรกดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ApproveDate วันที่พิจารณาสินไหมแสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Ageอายุผู้เอาประกันแสดงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)EventDateวันที่เกิดเหตุแสดงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Causeสาเหตุการเคลมแสดงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)ClaimTypeประเภทการเคลมตรวจสอบจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ให้กำหนดค่าดังนี้กรณี DeathClaimLife > 0 กำหนดค่าเป็น LifeClaimAccident > 0 กำหนดค่าเป็น Accident Deathกรณี Dismenberment ดึงค่าจาก Typeกรณี TPD ดึงค่าจาก Typeกรณี Health ดึงค่าจาก TypeClaim Benefitsทุนประกันชีวิตของสมาชิกแสดงค่าทุนจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Life: SumInsuredLifeกรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPDPayment Dateวันที่จ่ายเงินแสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Claim Amountจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่ายแสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Life: ClaimLifeกรณี Accident Death: ClaimAccidentกรณี Dismenberment: ClaimAmountกรณี TPD: ClaimAmountกรณี Health: ClaimAmount
- แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า PolicyYear จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงข้อมูล ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า EffectiveDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ตรวจสอบจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ให้กำหนดค่าดังนี้กรณี DeathClaimLife > 0 กำหนดค่าเป็น LifeClaimAccident > 0 กำหนดค่าเป็น Accident Deathกรณี Dismenberment ดึงค่าจาก Typeกรณี TPD ดึงค่าจาก Typeกรณี Health ดึงค่าจาก Type
- กรณี DeathClaimLife > 0 กำหนดค่าเป็น LifeClaimAccident > 0 กำหนดค่าเป็น Accident Death
- ClaimLife > 0 กำหนดค่าเป็น Life
- ClaimAccident > 0 กำหนดค่าเป็น Accident Death
- กรณี Dismenberment ดึงค่าจาก Type
- กรณี TPD ดึงค่าจาก Type
- กรณี Health ดึงค่าจาก Type
- แสดงค่าทุนจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Life: SumInsuredLifeกรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPD
- กรณี Life: SumInsuredLife
- กรณี Accident Death: SumInsuredAccident
- กรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)
- กรณี TPD: SumInsuredTPD
- แสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Life: ClaimLifeกรณี Accident Death: ClaimAccidentกรณี Dismenberment: ClaimAmountกรณี TPD: ClaimAmountกรณี Health: ClaimAmount
- กรณี Life: ClaimLife
- กรณี Accident Death: ClaimAccident
- กรณี Dismenberment: ClaimAmount
- กรณี TPD: ClaimAmount
- กรณี Health: ClaimAmount
- Step5: คำนวณ RI Claim แยกตามความคุ้มครอง ระบบจะคำนวณจำนวนเงิน RI Claim Recovery โดยพิจารณาจากยอดสินไหมที่จ่ายจริงของแต่ละประเภทความคุ้มครอง คูณด้วย Percentage Reinsurance ข้อมูลสูตรคำนวณReinsurer's Share: Life= Round(Percentage Reinsurance% x Claim Amount Type Life, 2)Reinsurer's Share: Accident= Round(Percentage Reinsurance% x Claim Amount Type Accident Death, 2)Reinsurer's Share Dismemberment= Round(Percentage Reinsurance% x Claim Amount Type Dismemberment, 2)Reinsurer's Share TPD= Round(Percentage Reinsurance% x Claim Amount Type TPD, 2)
- Step6: การคำนวณผลลัพธ์
- ระบบต้องปัดเศษทศนิยม 2 ตำแหน่ง
- การคำนวณทั้งหมดแบ่งเป็น 2 กลุ่มกรณี Med ให้แสดงผลในระดับกรมธรรม์และ Effective Dateกรณี DT, Dismemberment ให้แสดงผลในระดับกรมธรรม์, Effective Date, เลขที่สมาชิก, เลขที่สินไหมกรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- กรณี Med ให้แสดงผลในระดับกรมธรรม์และ Effective Date
- กรณี DT, Dismemberment ให้แสดงผลในระดับกรมธรรม์, Effective Date, เลขที่สมาชิก, เลขที่สินไหมกรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- กรณีพบ Claim No เดียวกัน แต่มี Approved Date อยู่คนละเดือนให้รวมเป็นบรรทัดเดียวกันโดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- ให้รวมเป็นบรรทัดเดียวกัน
- โดยใช้ Claim No เป็น key หลักในการ group ข้อมูล
- Step7: เตรียมข้อมูลเพื่อออกรายงาน A09-14 ตัวอย่าง output file - Actual Dai-ichi


===== PAGE 1312096793 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | เพื่ออธิบายหลักการประมวลผลข้อมูลสำหรับการจัดทำรายงาน Actual Gibraltar โดยมีเป้าหมายเพื่อคัดเลือกข้อมูลที่เข้าเงื่อนไขตามรอบไตรมาส (Quarter Period) และจัดเตรียมข้อมูลให้ถูกต้อง ครบถ้วน สำหรับการนำไปใช้คำนวณและจัดทำรายงานส่ง Reinsurer |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-05-02, PS-05-03, PS-05-04 |
| 3 | เวลาประมวลผล(Time) | ประมวลผลตามรอบ Quarter Period ที่ผู้ใช้งานเลือก เช่น 2024Q2 จะประมวลผลข้อมูลที่อยู่ในช่วงเดือนเมษายน – มิถุนายน 2024 |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลที่ใช้ในการประมวลผลประกอบด้วยข้อมูลหลัก ดังนี้ข้อมูลสมาชิกที่มีเงื่อนไขพิเศษ เช่น สมาชิกอายุเกินเกณฑ์ที่กำหนดข้อมูลโครงสร้าง Layer และเงื่อนไข RI ที่ตั้งค่าไว้ในระบบข้อมูลสถานะกรมธรรม์และจำนวนสมาชิก Inforceข้อมูลเบี้ยประกันและการเปลี่ยนแปลงเบี้ยของสมาชิก (Premium & Movement – Actual)ข้อมูลกรมธรรม์กลุ่ม (Group Policy) ที่อยู่ภายใต้สัญญา Gibraltarข้อมูลสินไหม |
| 5 | ขอบเขต (Scope) | กรมธรรม์ที่อยู่ภายใต้สัญญา Gibraltar Group EB |
| 6 | อธิบายรายละเอียด(Description) | แบ่งการประมวลผลแยกตาม Process ดังนี้NoProcessWiki1คัดเลือกกรมธรรม์BD-AP-001-02-00 Policy2ประมวลผล PremiumBD-AP-001-02-01 RI Premium3ประมวลผล CommissionBD-AP-001-02-02 RI Commission4ประมวลผล ClaimBD-AP-001-02-03 RI Claim5ประมวลผล Experience RefundBD-AP-001-02-04 Experience Refund6ประมวลผลออกรายงาน BDRBD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ7ประมวลผลออกรายงาน EDW และ SOABD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOA8ประมวลผลออกรายงาน Profit CommissionBD-AP-001-02-07 ประมวลผล Profit Commission |
| 7 | ผลลัพธ์(Output) | ไฟล์ BDRจะประกอบด้วย Sheet ดังต่อไปนี้Bordereau_YYYYQQ:ใช้สำหรับแสดงข้อมูล Bordereau ของไตรมาสที่รายงานA09-12-1 ตัวอย่าง output file - Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQClaim Notification_YYYYMMใช้สำหรับแสดงข้อมูลการแจ้งเคลมรายเดือนโดยใน 1 ไตรมาส จะมีจำนวน 3 Sheet (ตาม 3 เดือนของไตรมาสนั้น)A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQExperience Refundใช้สำหรับแสดงข้อมูล Experience Refund ของกรมธรรม์A09-12-3 ตัวอย่าง output file - BDR - Experience Refundสำหรับนำเข้า EDW: A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQไฟล์ SOA: A09-12-6 ตัวอย่าง output file - EDW - SOA_Act_GIB_YYYYQQไฟล์ Profit Commission: A09-12-7 ตัวอย่าง output file - Gibraltar - Profit CommissionError Log / Exception Reportกรณี Actual Premium หากตรวจสอบแล้วเป็นกรมธรรม์ที่ยังไม่เคยประมวลผล Estimate Premium ให้ระบบบันทึกข้อมูลกธ.ลง BD-PS-014 ข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsuranceเพื่อรองรับกรณีกรมธรรม์ที่มีการรับรู้เบี้ยล่าช้าเพื่อป้องกันไม่ให้บันทึกบัญชี Premium ซ้ำ |


===== PAGE 1312096798 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-00 Policy =====
00 การคัดเลือกกรมธรรม์
ระบบเลือกชุดกรมธรรม์ (Policy Set) สำหรับการคำนวณ Actual ตามเงื่อนไขดังนี้:
- การคัดเลือก Policy By Treatyเลือกเฉพาะกรมธรรม์ที่ส่ง Treaty Gibraltar Group EB โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- เลือกเฉพาะกรมธรรม์ที่ส่ง Treaty Gibraltar Group EB โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'
- สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel


===== PAGE 1312096861 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-01 RI Premium =====
จุดประสงค์
เพื่อคัดเลือกกรมธรรม์ที่เข้าเงื่อนไขตาม Quarter Period ที่กำหนด จากนั้นทำการปรับเบี้ยประกันให้อยู่ในรูปแบบรายปีตาม Mode of Payment ของกรมธรรม์ พร้อมทั้งเตรียมข้อมูลจำนวนสมาชิกและทุนประกันโดยแยกตาม Layer เพื่อให้สามารถสรุปข้อมูลที่ถูกต้องและครบถ้วนสำหรับการนำไปใช้คำนวณ Reinsurance Premium ได้อย่างเหมาะสม
ข้อมูลที่ใช้ในการประมวลผล
| ประเภทข้อมูล | source |
| ข้อมูลกรมธรรม์ | BD-PS-001 ข้อมูล Master group policy (List of policy) |
| ข้อมูลเบี้ย และ movement สมาชิก | BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) |
| ข้อมูลรายงาน inforce R17 | BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) |
| ข้อมูล Actual Premium Layer | BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) |
| ข้อมูลสมาชิกที่อายุเกิน 70 ปี | BD-PS-010 ข้อมูล Member over 70 year (Actual) |
| ข้อมูล ri condition | BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |
Process Overview
- คัดเลือกกรมธรรม์ที่เข้าเงื่อนไข Quarter Period
- คำนวณเบี้ยให้อยู่ในรูปแบบรายปี
- เตรียมข้อมูลสมาชิกและทุน แยกตาม Layer
- สรุปข้อมูลเพื่อใช้คำนวณ RI Premium
Scope
- ผลลัพธ์สุดท้ายของการประมวลผลจะถูกสรุปในระดับกรมธรรม์ แยกตามปีกรมธรรม์และ Layer เพื่อใช้เป็นฐานข้อมูลสำหรับจัดทำรายงาน Bordereau และเอกสารส่ง Reinsurer
Output
ผลลัพธ์ที่ได้จากการประมวลผลจะแสดงข้อมูล แยกตาม Layer 1–3 สำหรับแต่ละรายการ ทั้งส่วน original policy และ reinsurance ดังนี้
- ระบบจะคำนวณ RI Premium โดยแปลงเบี้ยให้อยู่ในรูปแบบรายปีก่อนเสมอ จากนั้นจึงแยก Layer และพิจารณาการปรับเบี้ย (Movement) ตามเงื่อนไข Period, Mode of Payment, โครงสร้าง Layer และการมีสมาชิกอายุเกิน 70 ปี โดย Movement จะแสดงเฉพาะ Layer 1 เท่านั้น
- สำหรับความคุ้มครอง Accident สมาชิกที่มีอายุเกิน 70 ปี จะไม่ถูกนำมานับในจำนวนสมาชิกและทุนประกัน และเบี้ยของสมาชิกดังกล่าวจะต้องถูกหักออกจากเบี้ยประกันก่อนการคำนวณ Reinsurance Premium ทั้งในกรณี New Business, Renewal และการคำนวณ Movement เมื่อครบรอบปีกรมธรรม์
- ปีกรมธรรม์ในการคำนวณประกันภัยต่อของ GIBกรณีการคำนวณยอดเบี้ย และการออกรายงาน BDR: ให้ใช้ปีจากการคำนวณจากวันเริ่มสัญญาแรกสุดถึงวันเริ่มสัญญาปีปัจจุบัน เพื่อรองรับกรณีการย้าย treaty เพื่อให้ทางบริษัท ri รับรู้เป็นเบี้ยปีแรกกรณีการออกไฟล์ edw, soa ให้ใช้ข้อมูลปีกรมธรรม์จาก policy master หน้าบ้าน เนื่องจากต้องรับรู้เป็นเบี้ยปีต่อ
- กรณีการคำนวณยอดเบี้ย และการออกรายงาน BDR: ให้ใช้ปีจากการคำนวณจากวันเริ่มสัญญาแรกสุดถึงวันเริ่มสัญญาปีปัจจุบัน เพื่อรองรับกรณีการย้าย treaty เพื่อให้ทางบริษัท ri รับรู้เป็นเบี้ยปีแรก
- กรณีการออกไฟล์ edw, soa ให้ใช้ข้อมูลปีกรมธรรม์จาก policy master หน้าบ้าน เนื่องจากต้องรับรู้เป็นเบี้ยปีต่อ
ขั้นตอนดังต่อไปนี้
- Step 1: คัดเลือกกรมธรรม์ ระบบจะประมวลผล Reinsurance Premium โดยคัดเลือกเฉพาะกรมธรรม์ที่มีช่วงความคุ้มครองอยู่ใน Quarter Period ที่รายงาน ดึงข้อมูลจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)เลือกกรมธรรม์ที่มีช่วงความคุ้มครอง PeriodDate อยู่ใน Quarter Period ที่เลือก ตัวอย่าง: เลือก 2024Q2 → ต้องมีช่วงคุ้มครองใน Apr–Jun 2024ดึงข้อมูลกรมธรรม์ และปีกรมธรรม์ จาก: BD-PS-001 ข้อมูล Master group policy (List of policy) ด้วยเงื่อนไขเลขกรมธรรม์ และปีกรมธรรม์
- ดึงข้อมูลจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)
- เลือกกรมธรรม์ที่มีช่วงความคุ้มครอง PeriodDate อยู่ใน Quarter Period ที่เลือก ตัวอย่าง: เลือก 2024Q2 → ต้องมีช่วงคุ้มครองใน Apr–Jun 2024
- ตัวอย่าง: เลือก 2024Q2 → ต้องมีช่วงคุ้มครองใน Apr–Jun 2024
- ดึงข้อมูลกรมธรรม์ และปีกรมธรรม์ จาก: BD-PS-001 ข้อมูล Master group policy (List of policy) ด้วยเงื่อนไขเลขกรมธรรม์ และปีกรมธรรม์
- Step 2: เตรียมข้อมูล เพื่อปรับเบี้ยรายปี การคำนวณจะแยกข้อมูลตามปีกรมธรรม์ (Policy Year) และแยกตาม Layer ของทุนประกัน (Layer 1 – Layer 3) เพื่อใช้ในการคำนวณ Premium และ Sum at Risk โดยเบี้ยและทุนของแต่ละ Layer จะถูกจัดเตรียมก่อนเข้าสู่กระบวนการคำนวณ Reinsurance PremiumStep 2.1 กำหนด ตัวคูณตาม Payment Mode ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2Step 2.2 คำนวณปีกรมธรรม์ของ ri สูตรคำนวณปีกธ.วันที่เริ่มสัญญาครั้งแรกวันที่เริ่มสัญญาปีปัจจุบันปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 นำปี ลบ ปี ไม่พิจารณาวัน/เดือนCommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) 2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- Step 2.1 กำหนด ตัวคูณตาม Payment Mode ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2
- ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2
- Step 2.2 คำนวณปีกรมธรรม์ของ ri สูตรคำนวณปีกธ.วันที่เริ่มสัญญาครั้งแรกวันที่เริ่มสัญญาปีปัจจุบันปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 นำปี ลบ ปี ไม่พิจารณาวัน/เดือนCommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) 2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- Step 3 เลือกเบี้ยตั้งต้นเบี้ยชีวิต และเบี้ยอุบัติเหตุใช้ข้อมูลเบี้ยตามโหมดชำระเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)1 ปีกรมธรรม์มีข้อมูลรายเดือนหลาย Periodระบบเลือกเฉพาะ PeriodDate ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateระบบจะพิจารณาเฉพาะข้อมูลของเดือนที่เป็นเดือนเริ่มต้นของปีกรมธรรม์ (เดือนเริ่มสัญญาตามรอบปีกรมธรรม์) เพียงรายการเดียว เพื่อใช้เป็นฐานในการคำนวณเบี้ยตลอดทั้งปี ตัวอย่าง... ปีกธ.Effective DateEnd DatePeriodDate3016/06/202315/06/202416/06/2023ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2023 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 3016/06/202315/06/2024...3016/06/202315/06/202416/05/20243116/06/202415/06/202516/06/2024ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2024 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 313116/06/202415/06/2025.... นำเบี้ยของรายการที่ตามประเภทความคุ้มครองมาใช้เบี้ยตั้งต้น Life = ใช้ผลรวมของเบี้ยหลัก และ extra: PremiumLife + PremiumE1เบี้ยตั้งต้น AD&D = PremiumAccidentสรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- เบี้ยชีวิต และเบี้ยอุบัติเหตุใช้ข้อมูลเบี้ยตามโหมดชำระเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)1 ปีกรมธรรม์มีข้อมูลรายเดือนหลาย Periodระบบเลือกเฉพาะ PeriodDate ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateระบบจะพิจารณาเฉพาะข้อมูลของเดือนที่เป็นเดือนเริ่มต้นของปีกรมธรรม์ (เดือนเริ่มสัญญาตามรอบปีกรมธรรม์) เพียงรายการเดียว เพื่อใช้เป็นฐานในการคำนวณเบี้ยตลอดทั้งปี ตัวอย่าง... ปีกธ.Effective DateEnd DatePeriodDate3016/06/202315/06/202416/06/2023ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2023 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 3016/06/202315/06/2024...3016/06/202315/06/202416/05/20243116/06/202415/06/202516/06/2024ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2024 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 313116/06/202415/06/2025.... นำเบี้ยของรายการที่ตามประเภทความคุ้มครองมาใช้เบี้ยตั้งต้น Life = ใช้ผลรวมของเบี้ยหลัก และ extra: PremiumLife + PremiumE1เบี้ยตั้งต้น AD&D = PremiumAccidentสรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- เบี้ยชีวิต และเบี้ยอุบัติเหตุใช้ข้อมูลเบี้ยตามโหมดชำระเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)1 ปีกรมธรรม์มีข้อมูลรายเดือนหลาย Periodระบบเลือกเฉพาะ PeriodDate ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateระบบจะพิจารณาเฉพาะข้อมูลของเดือนที่เป็นเดือนเริ่มต้นของปีกรมธรรม์ (เดือนเริ่มสัญญาตามรอบปีกรมธรรม์) เพียงรายการเดียว เพื่อใช้เป็นฐานในการคำนวณเบี้ยตลอดทั้งปี ตัวอย่าง... ปีกธ.Effective DateEnd DatePeriodDate3016/06/202315/06/202416/06/2023ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2023 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 3016/06/202315/06/2024...3016/06/202315/06/202416/05/20243116/06/202415/06/202516/06/2024ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2024 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 313116/06/202415/06/2025.... นำเบี้ยของรายการที่ตามประเภทความคุ้มครองมาใช้เบี้ยตั้งต้น Life = ใช้ผลรวมของเบี้ยหลัก และ extra: PremiumLife + PremiumE1เบี้ยตั้งต้น AD&D = PremiumAccidentสรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- ใช้ข้อมูลเบี้ยตามโหมดชำระเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)
- 1 ปีกรมธรรม์มีข้อมูลรายเดือนหลาย Period
- ระบบเลือกเฉพาะ PeriodDate ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateระบบจะพิจารณาเฉพาะข้อมูลของเดือนที่เป็นเดือนเริ่มต้นของปีกรมธรรม์ (เดือนเริ่มสัญญาตามรอบปีกรมธรรม์) เพียงรายการเดียว เพื่อใช้เป็นฐานในการคำนวณเบี้ยตลอดทั้งปี ตัวอย่าง... ปีกธ.Effective DateEnd DatePeriodDate3016/06/202315/06/202416/06/2023ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2023 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 3016/06/202315/06/2024...3016/06/202315/06/202416/05/20243116/06/202415/06/202516/06/2024ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2024 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 313116/06/202415/06/2025....
- ระบบจะพิจารณาเฉพาะข้อมูลของเดือนที่เป็นเดือนเริ่มต้นของปีกรมธรรม์ (เดือนเริ่มสัญญาตามรอบปีกรมธรรม์) เพียงรายการเดียว เพื่อใช้เป็นฐานในการคำนวณเบี้ยตลอดทั้งปี ตัวอย่าง... ปีกธ.Effective DateEnd DatePeriodDate3016/06/202315/06/202416/06/2023ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2023 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 3016/06/202315/06/2024...3016/06/202315/06/202416/05/20243116/06/202415/06/202516/06/2024ใช้ผลรวมเฉพาะรายการ PeriodDate = 16/06/2024 สำหรับการนำเบี้ยไปคำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 313116/06/202415/06/2025....
- นำเบี้ยของรายการที่ตามประเภทความคุ้มครองมาใช้เบี้ยตั้งต้น Life = ใช้ผลรวมของเบี้ยหลัก และ extra: PremiumLife + PremiumE1เบี้ยตั้งต้น AD&D = PremiumAccident
- เบี้ยตั้งต้น Life = ใช้ผลรวมของเบี้ยหลัก และ extra: PremiumLife + PremiumE1
- เบี้ยตั้งต้น AD&D = PremiumAccident
- สรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- Step 4 แปลงเบี้ยเป็นรายปีเบี้ยรายปี = เบี้ยตามโหมดชำระเบี้ย × ตัวคูณตาม Payment Mode
- เบี้ยรายปี = เบี้ยตามโหมดชำระเบี้ย × ตัวคูณตาม Payment Mode
- เบี้ยรายปี = เบี้ยตามโหมดชำระเบี้ย × ตัวคูณตาม Payment Mode
- Step 5: เตรียมข้อมูลสมาชิกและทุนเตรียมข้อมูลสมาชิกและทุน (แยก Layer) แยกตาม Layer ก่อนการคำนวณ Premium และ SR เพื่อจัดเตรียมข้อมูล จำนวนสมาชิก (Member) และ ทุนประกัน (Sum Assured) โดยแยกตาม Layer 1 / Layer 2 / Layer 3 สำหรับแต่ละกรมธรรม์และแต่ละความคุ้มครองตัวอย่าง Layer 1-3Layerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้นดึงข้อมูลจำนวนสมาชิกรวม และจำนวนทุนรวมดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุมMapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeathExample (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312ดึงข้อมูลจำนวนสมาชิกตาม Levelดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผลดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
- ตัวอย่าง Layer 1-3Layerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูลจำนวนสมาชิกรวม และจำนวนทุนรวมดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุมMapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeathExample (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผล
- ระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์
- Period ที่เลือกต้องมีเงื่อนไข ดังนี้
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุด
- ไม่เกินช่วงเวลาที่รายงานครอบคลุม
- Mapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeath
- Example (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- Example: Actual 2024Q2
- ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกตาม Levelดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผลดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
- ดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผล
- ดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
- Step 6: คำนวณแยก Layerการคำนวณจะทำแยกตามความคุ้มครอง Life และ Accident โดยมีหลักการดังนี้Layerวิธีการได้จำนวนสมาชิก (Members: Life, Members: AD&D)วิธีการได้จำนวนทุน (TL SA: LIFE, TL SA: AD&D)L2จำนวนสมาชิก MB L2 = ใช้จำนวนสมาชิก Level 2 ตามแต่ละความคุ้มครองกรณีไม่มี Level 2 ให้เป็น 0SA L2 = ใช้ทุนตามความคุ้มครองของ Level 2 − (5,000,000 × จำนวนสมาชิก MB L2) + (15,000,000 × จำนวนสมาชิก L3)L3จำนวนสมาชิก MB L3 = ใช้จำนวนสมาชิก Level 3กรณีไม่มี Level 3 ให้เป็น 0SA L3 = ใช้ทุนตามความคุ้มครองของ Level 3 − (20,000,000 × จำนวนสมาชิก MB L3)L1จำนวนสมาชิก MB L1 = ใช้จำนวนสมาชิกรวม - L2 - L3SA L1 = ใช้ทุนรวม − SA L2 − SA L3*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 5M 15M 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*
- จำนวนสมาชิก MB L2 = ใช้จำนวนสมาชิก Level 2 ตามแต่ละความคุ้มครอง
- กรณีไม่มี Level 2 ให้เป็น 0
- จำนวนสมาชิก MB L3 = ใช้จำนวนสมาชิก Level 3
- กรณีไม่มี Level 3 ให้เป็น 0
- จำนวนสมาชิก MB L1 = ใช้จำนวนสมาชิกรวม - L2 - L3
- Step 7: เตรียมข้อมูลเบี้ยรายปีของอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ สำหรับความคุ้มครอง Accident สมาชิกที่อายุเกิน 70 ปี จะไม่นำมานับจำนวน Member และ SA แต่ต้องหักเบี้ย Accident ของสมาชิกดังกล่าวออกจาก Premium ทั้งในกรณี New/Renewal และ Movement ครบรอบปีดึงข้อมูลจาก BD-PS-010 ข้อมูล Member over 70 year (Actual) ระบบเก็บข้อมูลเป็นรายสมาชิกเลือกรายการตามเลขกรมธรรม์ และวันเริ่มสัญญาปีปัจจุบันที่อยู่ใน Quarter ที่ประมวลผลคำนวณผลรวมเบี้ยทั้งหมดจาก AccidentPremium ตามเลขกรมธรรม์ และวันเริ่มสัญญา (EffectiveDate) เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์สรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์แปลงเบี้ยเป็นรายปีตาม Payment Mode
- ดึงข้อมูลจาก BD-PS-010 ข้อมูล Member over 70 year (Actual) ระบบเก็บข้อมูลเป็นรายสมาชิก
- เลือกรายการตามเลขกรมธรรม์ และวันเริ่มสัญญาปีปัจจุบันที่อยู่ใน Quarter ที่ประมวลผล
- คำนวณผลรวมเบี้ยทั้งหมดจาก AccidentPremium ตามเลขกรมธรรม์ และวันเริ่มสัญญา (EffectiveDate) เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- สรุปข้อมูลโดยรวมยอดตามเลขกรมธรรม์และปีกรมธรรม์ เพื่อแสดงผลข้อมูลในระดับกรมธรรม์ต่อปีกรมธรรม์
- แปลงเบี้ยเป็นรายปีตาม Payment Mode
- Step8: การคำนวณ Premium สรุป scenario การคำนวณ premiumโหมดการชำระเบี้ยPeriod = Effective DatePeriod ≠ Effective Dateครบรอบปีกรมธรรม์Annualคำนวณ New Business / Renewal Premiumแปลงเบี้ยเป็นรายปี แล้วคำนวณตาม Layerคำนวณ Movement (Revivals / Refund)คำนวณ Movement เมื่อครบปีกรมธรรม์Non-Annualคำนวณ New Business / Renewal Premiumแปลงเบี้ยเป็นรายปี แล้วคำนวณตาม LayerMovement = 0คำนวณ Movement เมื่อครบปีกรมธรรม์ตัวอย่างเพิ่มเติม: BD-AP-001-02-01-1 ตัวอย่าง scenario เงื่อนไขการคำนวณ ri premiumStep 8.1: หลักการเบื้องต้น ประเภทเบี้ยNew BusinessRenewalRevivals / Refund (Movement) หลักการคำนวณ RI Premiumพิจารณาตามเงื่อนไข ดังนี้ประเภทของกรมธรรม์ (New Business / Renewal)โหมดการชำระเบี้ยโครงสร้าง Layer ของกรมธรรม์ - มี Layer 2/3 หรือมีแค่ Layer 1การมีหรือไม่มีสมาชิกอายุเกิน 70 ปี (เฉพาะความคุ้มครอง Accident)ระบบจะคำนวณเบี้ยให้อยู่ในรูป เบี้ยรายปี ก่อนเสมอ จากนั้นจึงนำไปแยก Layer และพิจารณาการปรับเบี้ย (Movement) ตามรอบรายงานเงื่อนไขการพิจารณาตาม PeriodPeriod = Effective Dateใช้คำนวณ New Business / Renewal PremiumPeriod ≠ Effective Dateเป็นกรณี Movement (Revivals / Refund)Step 8.2: การคำนวณ New Business / Renewal Premium การพิจารณา New Business และ Renewal Premium จะอ้างอิงจากรายการเบี้ยที่มี Period ตรงกับ Effective Date ของปีกรมธรรม์นั้น ส่วนกรณีที่ Period ไม่ตรงกับ Effective Date ระบบจะพิจารณาเป็น Movement (Revivals หรือ Refund) ตามเงื่อนไขของ Mode of Payment และรอบปีกรมธรรม์สำหรับการคำนวณ New Business Premium: Life, New Business Premium: AD&D, Renewal Premium: Life, Renewal Premium: AD&Dเงื่อนไขNew Business: ปีกรมธรรม์ของ ri จาก Step 2.2 = 1Renewal: ปีกรมธรรม์ของ ri จาก Step 2.2 > 1เฉพาะรายการเบี้ยที่ Period ต้องตรงกับ Effective Dateวิธีคำนวณนำเบี้ยตั้งต้นมาแปลงเป็นรายปีหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยรายปีอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์หากมีเฉพาะ Layer 1 ให้ใช้ค่า เบี้ยตั้งต้นที่แปลงเป็นรายปี หากกรมธรรม์มีหลาย Layer ให้กระจายเบี้ยตาม Layer ดังนี้Layerการคำนวณแยกตาม LayerNB Premium L2(Premium Rate × ตัวคูณตาม Payment Mode) × SA L2 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L3(Premium Rate × ตัวคูณตาม Payment Mode) × SA L3 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L1เบี้ยตั้งต้นที่แปลงเป็นรายปี − NB Premium L2 − NB Premium L3 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)Premium Rate ใช้ค่าจาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)กรณีความคุ้มครอง Life: LifePremiumRateกรณีความคุ้มครอง Accident: AccidentPremiumRateSA L2, SA L3 มาจากการคำนวณใน Step 6Step 8.3: การคำนวณMovement (Revivals / Refund) สำหรับการคำนวณ Revivals Premium: Life, Revivals Premium: AD&D, Refund Premium: Life, Refund Premium: AD&Dระบบจะพิจารณาการคำนวณ Movement แตกต่างกันตาม Mode of Payment ของกรมธรรม์ โดยมีหลักการดังนี้สำหรับกรมธรรม์ที่มี Mode of Payment แบบรายปี (Annual) ระบบจะพิจารณา Movement เมื่อพบรายการเบี้ยที่ Period ไม่ตรงกับ Effective Date ของปีกรมธรรม์นั้น และจะทำการปรับยอดเบี้ยเมื่อถึงรอบ ครบรอบปีกรมธรรม์สำหรับกรมธรรม์ที่มี Mode of Payment แบบไม่ใช่รายปี (Monthly, Quarterly, Semi-Annual) ระบบจะพิจารณา Movement เฉพาะในกรณีที่ เดือนสุดท้ายของปีกรมธรรม์ อยู่ใน Quarter Period ที่ประมวลผลเท่านั้น หากยังไม่ถึงรอบดังกล่าว ระบบจะไม่แสดงค่า MovementStep 8.3.1 คำนวณ Movement ระหว่างปีกรมธรรม์ โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMode of Payment = Annualหาก Period ไม่ตรงกับ Effective Date → คำนวณ MovementMode of Payment ≠ Annual (Monthly / Quarterly / Semi-Annual)Movement ระหว่างปี = 0วิธีคำนวณในการคำนวณ Movement ระหว่างปี จะไม่หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ดึงข้อมูลเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateคำนวณยอดผลเบี้ยรวม โดยกำหนดให้ยอดแต่ละ period ที่มีค่าเป็นบวกถูกจัดเป็น Revival และยอดที่มีค่าเป็นลบถูกจัดเป็น Refund ตามเงื่อนไข ดังนี้หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premiumหากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)การแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0Step 8.3.2 คำนวณMovement เมื่อครบปีกรมธรรม์ เมื่อกรมธรรม์ถึงรอบ ครบรอบปีกรมธรรม์ ระบบจะทำการคำนวณ Movement เพื่อปรับยอดเบี้ยให้ครบถ้วนตามปีกรมธรรม์นั้น โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMovement Value = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น) − (เบี้ยที่เคยส่งรายงานไปแล้ว)หากเป็น AD&D และมี OverAge ให้หัก เบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ ออกจากยอดรวมก่อนผลลัพธ์Movement Value > 0 → Revivals PremiumMovement Value < 0 → Refund Premiumวิธีคำนวณคำนวณแยกตามความคุ้มครองดึงข้อมูลเบี้ยรวมทั้งปีของปีกรมธรรม์จาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ดึงข้อมูลเบี้ยที่เคยส่งรายงานไปแล้ว BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผลหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ โดยจะต้องแปลงเป็นเบี้ยรายปีก่อนสูตรการคำนวณคำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)คำนวณยอดผลเบี้ยรวม ตามเงื่อนไข ดังนี้หากยอด movement มีค่า มากกว่า 0 ให้บันทึกเป็น Revivals Premiumหากยอด movement มีค่า น้อยกว่า 0 ให้บันทึกเป็น Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)คำนวณผลรวมโดยไม่ต้องแยกแต่ละ period โดยหากผลรวมเป็นบวกก็จะใส่ที่ Revival หรือหากผลรวมเป็นลบใส่ค่าที่ Refundการแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0ตัวอย่างประกอบกรมธรรม์ GH2222Effective Date: 16/06/2024Mode of Payment: Quarterlyกรมธรรม์ดังกล่าวเคยส่งเบี้ยแบบเต็มปีในรายงาน 2024Q2 และเดือนสุดท้ายของปีกรมธรรม์คือ 05/2025ระบบจะนำข้อมูลจากรายงาน 2024Q2, 2024Q3, 2024Q4, 2025Q1 มาใช้ในการคำนวณเบี้ยที่เคยส่งรายงานไปแล้ว เพื่อใช้คำนวณ Movement เมื่อครบปีกรมธรรม์
- สรุป scenario การคำนวณ premiumโหมดการชำระเบี้ยPeriod = Effective DatePeriod ≠ Effective Dateครบรอบปีกรมธรรม์Annualคำนวณ New Business / Renewal Premiumแปลงเบี้ยเป็นรายปี แล้วคำนวณตาม Layerคำนวณ Movement (Revivals / Refund)คำนวณ Movement เมื่อครบปีกรมธรรม์Non-Annualคำนวณ New Business / Renewal Premiumแปลงเบี้ยเป็นรายปี แล้วคำนวณตาม LayerMovement = 0คำนวณ Movement เมื่อครบปีกรมธรรม์ตัวอย่างเพิ่มเติม: BD-AP-001-02-01-1 ตัวอย่าง scenario เงื่อนไขการคำนวณ ri premium
- Step 8.1: หลักการเบื้องต้น ประเภทเบี้ยNew BusinessRenewalRevivals / Refund (Movement) หลักการคำนวณ RI Premiumพิจารณาตามเงื่อนไข ดังนี้ประเภทของกรมธรรม์ (New Business / Renewal)โหมดการชำระเบี้ยโครงสร้าง Layer ของกรมธรรม์ - มี Layer 2/3 หรือมีแค่ Layer 1การมีหรือไม่มีสมาชิกอายุเกิน 70 ปี (เฉพาะความคุ้มครอง Accident)ระบบจะคำนวณเบี้ยให้อยู่ในรูป เบี้ยรายปี ก่อนเสมอ จากนั้นจึงนำไปแยก Layer และพิจารณาการปรับเบี้ย (Movement) ตามรอบรายงานเงื่อนไขการพิจารณาตาม PeriodPeriod = Effective Dateใช้คำนวณ New Business / Renewal PremiumPeriod ≠ Effective Dateเป็นกรณี Movement (Revivals / Refund)
- ประเภทเบี้ยNew BusinessRenewalRevivals / Refund (Movement)
- New Business
- Renewal
- Revivals / Refund (Movement)
- หลักการคำนวณ RI Premiumพิจารณาตามเงื่อนไข ดังนี้ประเภทของกรมธรรม์ (New Business / Renewal)โหมดการชำระเบี้ยโครงสร้าง Layer ของกรมธรรม์ - มี Layer 2/3 หรือมีแค่ Layer 1การมีหรือไม่มีสมาชิกอายุเกิน 70 ปี (เฉพาะความคุ้มครอง Accident)ระบบจะคำนวณเบี้ยให้อยู่ในรูป เบี้ยรายปี ก่อนเสมอ จากนั้นจึงนำไปแยก Layer และพิจารณาการปรับเบี้ย (Movement) ตามรอบรายงาน
- พิจารณาตามเงื่อนไข ดังนี้ประเภทของกรมธรรม์ (New Business / Renewal)โหมดการชำระเบี้ยโครงสร้าง Layer ของกรมธรรม์ - มี Layer 2/3 หรือมีแค่ Layer 1การมีหรือไม่มีสมาชิกอายุเกิน 70 ปี (เฉพาะความคุ้มครอง Accident)
- ประเภทของกรมธรรม์ (New Business / Renewal)
- โหมดการชำระเบี้ย
- โครงสร้าง Layer ของกรมธรรม์ - มี Layer 2/3 หรือมีแค่ Layer 1
- การมีหรือไม่มีสมาชิกอายุเกิน 70 ปี (เฉพาะความคุ้มครอง Accident)
- ระบบจะคำนวณเบี้ยให้อยู่ในรูป เบี้ยรายปี ก่อนเสมอ จากนั้นจึงนำไปแยก Layer และพิจารณาการปรับเบี้ย (Movement) ตามรอบรายงาน
- เงื่อนไขการพิจารณาตาม PeriodPeriod = Effective Dateใช้คำนวณ New Business / Renewal PremiumPeriod ≠ Effective Dateเป็นกรณี Movement (Revivals / Refund)
- Period = Effective Dateใช้คำนวณ New Business / Renewal Premium
- ใช้คำนวณ New Business / Renewal Premium
- Period ≠ Effective Dateเป็นกรณี Movement (Revivals / Refund)
- เป็นกรณี Movement (Revivals / Refund)
- Step 8.2: การคำนวณ New Business / Renewal Premium การพิจารณา New Business และ Renewal Premium จะอ้างอิงจากรายการเบี้ยที่มี Period ตรงกับ Effective Date ของปีกรมธรรม์นั้น ส่วนกรณีที่ Period ไม่ตรงกับ Effective Date ระบบจะพิจารณาเป็น Movement (Revivals หรือ Refund) ตามเงื่อนไขของ Mode of Payment และรอบปีกรมธรรม์สำหรับการคำนวณ New Business Premium: Life, New Business Premium: AD&D, Renewal Premium: Life, Renewal Premium: AD&Dเงื่อนไขNew Business: ปีกรมธรรม์ของ ri จาก Step 2.2 = 1Renewal: ปีกรมธรรม์ของ ri จาก Step 2.2 > 1เฉพาะรายการเบี้ยที่ Period ต้องตรงกับ Effective Dateวิธีคำนวณนำเบี้ยตั้งต้นมาแปลงเป็นรายปีหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยรายปีอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์หากมีเฉพาะ Layer 1 ให้ใช้ค่า เบี้ยตั้งต้นที่แปลงเป็นรายปี หากกรมธรรม์มีหลาย Layer ให้กระจายเบี้ยตาม Layer ดังนี้Layerการคำนวณแยกตาม LayerNB Premium L2(Premium Rate × ตัวคูณตาม Payment Mode) × SA L2 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L3(Premium Rate × ตัวคูณตาม Payment Mode) × SA L3 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L1เบี้ยตั้งต้นที่แปลงเป็นรายปี − NB Premium L2 − NB Premium L3 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)Premium Rate ใช้ค่าจาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)กรณีความคุ้มครอง Life: LifePremiumRateกรณีความคุ้มครอง Accident: AccidentPremiumRateSA L2, SA L3 มาจากการคำนวณใน Step 6
- สำหรับการคำนวณ New Business Premium: Life, New Business Premium: AD&D, Renewal Premium: Life, Renewal Premium: AD&D
- เงื่อนไขNew Business: ปีกรมธรรม์ของ ri จาก Step 2.2 = 1Renewal: ปีกรมธรรม์ของ ri จาก Step 2.2 > 1เฉพาะรายการเบี้ยที่ Period ต้องตรงกับ Effective Date
- New Business: ปีกรมธรรม์ของ ri จาก Step 2.2 = 1
- Renewal: ปีกรมธรรม์ของ ri จาก Step 2.2 > 1
- เฉพาะรายการเบี้ยที่ Period ต้องตรงกับ Effective Date
- วิธีคำนวณนำเบี้ยตั้งต้นมาแปลงเป็นรายปีหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยรายปีอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์หากมีเฉพาะ Layer 1 ให้ใช้ค่า เบี้ยตั้งต้นที่แปลงเป็นรายปี หากกรมธรรม์มีหลาย Layer ให้กระจายเบี้ยตาม Layer ดังนี้Layerการคำนวณแยกตาม LayerNB Premium L2(Premium Rate × ตัวคูณตาม Payment Mode) × SA L2 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L3(Premium Rate × ตัวคูณตาม Payment Mode) × SA L3 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L1เบี้ยตั้งต้นที่แปลงเป็นรายปี − NB Premium L2 − NB Premium L3 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)Premium Rate ใช้ค่าจาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)กรณีความคุ้มครอง Life: LifePremiumRateกรณีความคุ้มครอง Accident: AccidentPremiumRateSA L2, SA L3 มาจากการคำนวณใน Step 6
- นำเบี้ยตั้งต้นมาแปลงเป็นรายปีหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยรายปีอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์
- หากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยรายปีอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์
- หากมีเฉพาะ Layer 1 ให้ใช้ค่า เบี้ยตั้งต้นที่แปลงเป็นรายปี
- หากกรมธรรม์มีหลาย Layer ให้กระจายเบี้ยตาม Layer ดังนี้Layerการคำนวณแยกตาม LayerNB Premium L2(Premium Rate × ตัวคูณตาม Payment Mode) × SA L2 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L3(Premium Rate × ตัวคูณตาม Payment Mode) × SA L3 / 1,000 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)NB Premium L1เบี้ยตั้งต้นที่แปลงเป็นรายปี − NB Premium L2 − NB Premium L3 (มีการ ROUND ทศนิยม 2 ตำแหน่ง)Premium Rate ใช้ค่าจาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)กรณีความคุ้มครอง Life: LifePremiumRateกรณีความคุ้มครอง Accident: AccidentPremiumRateSA L2, SA L3 มาจากการคำนวณใน Step 6
- Premium Rate ใช้ค่าจาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)กรณีความคุ้มครอง Life: LifePremiumRateกรณีความคุ้มครอง Accident: AccidentPremiumRate
- กรณีความคุ้มครอง Life: LifePremiumRate
- กรณีความคุ้มครอง Accident: AccidentPremiumRate
- SA L2, SA L3 มาจากการคำนวณใน Step 6
- Step 8.3: การคำนวณMovement (Revivals / Refund) สำหรับการคำนวณ Revivals Premium: Life, Revivals Premium: AD&D, Refund Premium: Life, Refund Premium: AD&Dระบบจะพิจารณาการคำนวณ Movement แตกต่างกันตาม Mode of Payment ของกรมธรรม์ โดยมีหลักการดังนี้สำหรับกรมธรรม์ที่มี Mode of Payment แบบรายปี (Annual) ระบบจะพิจารณา Movement เมื่อพบรายการเบี้ยที่ Period ไม่ตรงกับ Effective Date ของปีกรมธรรม์นั้น และจะทำการปรับยอดเบี้ยเมื่อถึงรอบ ครบรอบปีกรมธรรม์สำหรับกรมธรรม์ที่มี Mode of Payment แบบไม่ใช่รายปี (Monthly, Quarterly, Semi-Annual) ระบบจะพิจารณา Movement เฉพาะในกรณีที่ เดือนสุดท้ายของปีกรมธรรม์ อยู่ใน Quarter Period ที่ประมวลผลเท่านั้น หากยังไม่ถึงรอบดังกล่าว ระบบจะไม่แสดงค่า MovementStep 8.3.1 คำนวณ Movement ระหว่างปีกรมธรรม์ โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMode of Payment = Annualหาก Period ไม่ตรงกับ Effective Date → คำนวณ MovementMode of Payment ≠ Annual (Monthly / Quarterly / Semi-Annual)Movement ระหว่างปี = 0วิธีคำนวณในการคำนวณ Movement ระหว่างปี จะไม่หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ดึงข้อมูลเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateคำนวณยอดผลเบี้ยรวม โดยกำหนดให้ยอดแต่ละ period ที่มีค่าเป็นบวกถูกจัดเป็น Revival และยอดที่มีค่าเป็นลบถูกจัดเป็น Refund ตามเงื่อนไข ดังนี้หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premiumหากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)การแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0Step 8.3.2 คำนวณMovement เมื่อครบปีกรมธรรม์ เมื่อกรมธรรม์ถึงรอบ ครบรอบปีกรมธรรม์ ระบบจะทำการคำนวณ Movement เพื่อปรับยอดเบี้ยให้ครบถ้วนตามปีกรมธรรม์นั้น โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMovement Value = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น) − (เบี้ยที่เคยส่งรายงานไปแล้ว)หากเป็น AD&D และมี OverAge ให้หัก เบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ ออกจากยอดรวมก่อนผลลัพธ์Movement Value > 0 → Revivals PremiumMovement Value < 0 → Refund Premiumวิธีคำนวณคำนวณแยกตามความคุ้มครองดึงข้อมูลเบี้ยรวมทั้งปีของปีกรมธรรม์จาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ดึงข้อมูลเบี้ยที่เคยส่งรายงานไปแล้ว BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผลหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ โดยจะต้องแปลงเป็นเบี้ยรายปีก่อนสูตรการคำนวณคำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)คำนวณยอดผลเบี้ยรวม ตามเงื่อนไข ดังนี้หากยอด movement มีค่า มากกว่า 0 ให้บันทึกเป็น Revivals Premiumหากยอด movement มีค่า น้อยกว่า 0 ให้บันทึกเป็น Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)คำนวณผลรวมโดยไม่ต้องแยกแต่ละ period โดยหากผลรวมเป็นบวกก็จะใส่ที่ Revival หรือหากผลรวมเป็นลบใส่ค่าที่ Refundการแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0ตัวอย่างประกอบกรมธรรม์ GH2222Effective Date: 16/06/2024Mode of Payment: Quarterlyกรมธรรม์ดังกล่าวเคยส่งเบี้ยแบบเต็มปีในรายงาน 2024Q2 และเดือนสุดท้ายของปีกรมธรรม์คือ 05/2025ระบบจะนำข้อมูลจากรายงาน 2024Q2, 2024Q3, 2024Q4, 2025Q1 มาใช้ในการคำนวณเบี้ยที่เคยส่งรายงานไปแล้ว เพื่อใช้คำนวณ Movement เมื่อครบปีกรมธรรม์
- สำหรับการคำนวณ Revivals Premium: Life, Revivals Premium: AD&D, Refund Premium: Life, Refund Premium: AD&D
- ระบบจะพิจารณาการคำนวณ Movement แตกต่างกันตาม Mode of Payment ของกรมธรรม์ โดยมีหลักการดังนี้สำหรับกรมธรรม์ที่มี Mode of Payment แบบรายปี (Annual) ระบบจะพิจารณา Movement เมื่อพบรายการเบี้ยที่ Period ไม่ตรงกับ Effective Date ของปีกรมธรรม์นั้น และจะทำการปรับยอดเบี้ยเมื่อถึงรอบ ครบรอบปีกรมธรรม์สำหรับกรมธรรม์ที่มี Mode of Payment แบบไม่ใช่รายปี (Monthly, Quarterly, Semi-Annual) ระบบจะพิจารณา Movement เฉพาะในกรณีที่ เดือนสุดท้ายของปีกรมธรรม์ อยู่ใน Quarter Period ที่ประมวลผลเท่านั้น หากยังไม่ถึงรอบดังกล่าว ระบบจะไม่แสดงค่า Movement
- สำหรับกรมธรรม์ที่มี Mode of Payment แบบรายปี (Annual) ระบบจะพิจารณา Movement เมื่อพบรายการเบี้ยที่ Period ไม่ตรงกับ Effective Date ของปีกรมธรรม์นั้น และจะทำการปรับยอดเบี้ยเมื่อถึงรอบ ครบรอบปีกรมธรรม์
- สำหรับกรมธรรม์ที่มี Mode of Payment แบบไม่ใช่รายปี (Monthly, Quarterly, Semi-Annual) ระบบจะพิจารณา Movement เฉพาะในกรณีที่ เดือนสุดท้ายของปีกรมธรรม์ อยู่ใน Quarter Period ที่ประมวลผลเท่านั้น หากยังไม่ถึงรอบดังกล่าว ระบบจะไม่แสดงค่า Movement
- Step 8.3.1 คำนวณ Movement ระหว่างปีกรมธรรม์ โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMode of Payment = Annualหาก Period ไม่ตรงกับ Effective Date → คำนวณ MovementMode of Payment ≠ Annual (Monthly / Quarterly / Semi-Annual)Movement ระหว่างปี = 0วิธีคำนวณในการคำนวณ Movement ระหว่างปี จะไม่หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ดึงข้อมูลเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateคำนวณยอดผลเบี้ยรวม โดยกำหนดให้ยอดแต่ละ period ที่มีค่าเป็นบวกถูกจัดเป็น Revival และยอดที่มีค่าเป็นลบถูกจัดเป็น Refund ตามเงื่อนไข ดังนี้หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premiumหากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)การแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0
- เงื่อนไขการคำนวณMode of Payment = Annualหาก Period ไม่ตรงกับ Effective Date → คำนวณ MovementMode of Payment ≠ Annual (Monthly / Quarterly / Semi-Annual)Movement ระหว่างปี = 0
- Mode of Payment = Annualหาก Period ไม่ตรงกับ Effective Date → คำนวณ Movement
- หาก Period ไม่ตรงกับ Effective Date → คำนวณ Movement
- Mode of Payment ≠ Annual (Monthly / Quarterly / Semi-Annual)Movement ระหว่างปี = 0
- Movement ระหว่างปี = 0
- วิธีคำนวณในการคำนวณ Movement ระหว่างปี จะไม่หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ดึงข้อมูลเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateคำนวณยอดผลเบี้ยรวม โดยกำหนดให้ยอดแต่ละ period ที่มีค่าเป็นบวกถูกจัดเป็น Revival และยอดที่มีค่าเป็นลบถูกจัดเป็น Refund ตามเงื่อนไข ดังนี้หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premiumหากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)
- ในการคำนวณ Movement ระหว่างปี จะไม่หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์
- ดึงข้อมูลเบี้ยจาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDate
- ระบบเลือกเฉพาะรายการที่ Period ที่ไม่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDate
- คำนวณยอดผลเบี้ยรวม โดยกำหนดให้ยอดแต่ละ period ที่มีค่าเป็นบวกถูกจัดเป็น Revival และยอดที่มีค่าเป็นลบถูกจัดเป็น Refund ตามเงื่อนไข ดังนี้หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premiumหากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)
- หากยอดเบี้ยในแต่ละ Period มีค่า มากกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Revivals Premium
- หากยอดเบี้ยในแต่ละ Period มีค่า น้อยกว่า 0 ระบบจะนำไปรวมและบันทึกเป็นค่า Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)
- การแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0
- แสดงค่า เฉพาะ Layer 1
- Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0
- Step 8.3.2 คำนวณMovement เมื่อครบปีกรมธรรม์ เมื่อกรมธรรม์ถึงรอบ ครบรอบปีกรมธรรม์ ระบบจะทำการคำนวณ Movement เพื่อปรับยอดเบี้ยให้ครบถ้วนตามปีกรมธรรม์นั้น โดยการคำนวณ Movement ในขั้นตอนนี้ จะแสดงผลเฉพาะที่ Layer 1 เท่านั้น ส่วน Layer 2 และ Layer 3 จะระบุค่าเป็นศูนย์ เพื่อให้สอดคล้องกับหลักการรับประกันต่อเงื่อนไขการคำนวณMovement Value = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น) − (เบี้ยที่เคยส่งรายงานไปแล้ว)หากเป็น AD&D และมี OverAge ให้หัก เบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ ออกจากยอดรวมก่อนผลลัพธ์Movement Value > 0 → Revivals PremiumMovement Value < 0 → Refund Premiumวิธีคำนวณคำนวณแยกตามความคุ้มครองดึงข้อมูลเบี้ยรวมทั้งปีของปีกรมธรรม์จาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ดึงข้อมูลเบี้ยที่เคยส่งรายงานไปแล้ว BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผลหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ โดยจะต้องแปลงเป็นเบี้ยรายปีก่อนสูตรการคำนวณคำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)คำนวณยอดผลเบี้ยรวม ตามเงื่อนไข ดังนี้หากยอด movement มีค่า มากกว่า 0 ให้บันทึกเป็น Revivals Premiumหากยอด movement มีค่า น้อยกว่า 0 ให้บันทึกเป็น Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)คำนวณผลรวมโดยไม่ต้องแยกแต่ละ period โดยหากผลรวมเป็นบวกก็จะใส่ที่ Revival หรือหากผลรวมเป็นลบใส่ค่าที่ Refundการแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0ตัวอย่างประกอบกรมธรรม์ GH2222Effective Date: 16/06/2024Mode of Payment: Quarterlyกรมธรรม์ดังกล่าวเคยส่งเบี้ยแบบเต็มปีในรายงาน 2024Q2 และเดือนสุดท้ายของปีกรมธรรม์คือ 05/2025ระบบจะนำข้อมูลจากรายงาน 2024Q2, 2024Q3, 2024Q4, 2025Q1 มาใช้ในการคำนวณเบี้ยที่เคยส่งรายงานไปแล้ว เพื่อใช้คำนวณ Movement เมื่อครบปีกรมธรรม์
- เงื่อนไขการคำนวณMovement Value = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น) − (เบี้ยที่เคยส่งรายงานไปแล้ว)หากเป็น AD&D และมี OverAge ให้หัก เบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ ออกจากยอดรวมก่อน
- Movement Value = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น) − (เบี้ยที่เคยส่งรายงานไปแล้ว)
- หากเป็น AD&D และมี OverAge ให้หัก เบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ ออกจากยอดรวมก่อน
- ผลลัพธ์Movement Value > 0 → Revivals PremiumMovement Value < 0 → Refund Premium
- Movement Value > 0 → Revivals Premium
- Movement Value < 0 → Refund Premium
- วิธีคำนวณคำนวณแยกตามความคุ้มครองดึงข้อมูลเบี้ยรวมทั้งปีของปีกรมธรรม์จาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ดึงข้อมูลเบี้ยที่เคยส่งรายงานไปแล้ว BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผลหากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ โดยจะต้องแปลงเป็นเบี้ยรายปีก่อน
- คำนวณแยกตามความคุ้มครอง
- ดึงข้อมูลเบี้ยรวมทั้งปีของปีกรมธรรม์จาก BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์
- ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์
- ดึงข้อมูลเบี้ยที่เคยส่งรายงานไปแล้ว BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผล
- ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ก่อนหน้ารอบที่ประมวลผล
- หากเป็นความคุ้มครอง Accident และมีสมาชิกอายุเกิน 70 ปี ให้หักเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์ โดยจะต้องแปลงเป็นเบี้ยรายปีก่อน
- สูตรการคำนวณคำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)
- คำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)
- คำนวณยอด Movement รวม ของ Life = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น เบี้ยหลัก+เบี้ย E1) − (เบี้ยที่เคยส่งรายงานไปแล้วของ Life)
- คำนวณยอด Movement รวม ของ AD&D = (เบี้ยรวมทั้งปีของปีกรมธรรม์นั้น AD&D - เบี้ยรายปีของเบี้ยอุบัติเหตุของสมาชิกที่อายุเกินเกณฑ์) − (เบี้ยที่เคยส่งรายงานไปแล้ว ของ AD&D)
- คำนวณยอดผลเบี้ยรวม ตามเงื่อนไข ดังนี้หากยอด movement มีค่า มากกว่า 0 ให้บันทึกเป็น Revivals Premiumหากยอด movement มีค่า น้อยกว่า 0 ให้บันทึกเป็น Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)คำนวณผลรวมโดยไม่ต้องแยกแต่ละ period โดยหากผลรวมเป็นบวกก็จะใส่ที่ Revival หรือหากผลรวมเป็นลบใส่ค่าที่ Refund
- หากยอด movement มีค่า มากกว่า 0 ให้บันทึกเป็น Revivals Premium
- หากยอด movement มีค่า น้อยกว่า 0 ให้บันทึกเป็น Refund Premium โดยจะต้องบันทึกเป็นค่าบวกเสมอ (นำผลรวมไปคูณ (-1) ก่อนนำไปใช้ประมวลผลต่อ)
- คำนวณผลรวมโดยไม่ต้องแยกแต่ละ period โดยหากผลรวมเป็นบวกก็จะใส่ที่ Revival หรือหากผลรวมเป็นลบใส่ค่าที่ Refund
- การแสดงผล Movement ตาม Layerแสดงค่า เฉพาะ Layer 1Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0
- แสดงค่า เฉพาะ Layer 1
- Layer 2 และ Layer 3 ให้แสดงค่าเป็น 0
- ตัวอย่างประกอบกรมธรรม์ GH2222Effective Date: 16/06/2024Mode of Payment: Quarterlyกรมธรรม์ดังกล่าวเคยส่งเบี้ยแบบเต็มปีในรายงาน 2024Q2 และเดือนสุดท้ายของปีกรมธรรม์คือ 05/2025ระบบจะนำข้อมูลจากรายงาน 2024Q2, 2024Q3, 2024Q4, 2025Q1 มาใช้ในการคำนวณเบี้ยที่เคยส่งรายงานไปแล้ว เพื่อใช้คำนวณ Movement เมื่อครบปีกรมธรรม์
- กรมธรรม์ GH2222Effective Date: 16/06/2024Mode of Payment: Quarterly
- Effective Date: 16/06/2024
- Mode of Payment: Quarterly
- กรมธรรม์ดังกล่าวเคยส่งเบี้ยแบบเต็มปีในรายงาน 2024Q2 และเดือนสุดท้ายของปีกรมธรรม์คือ 05/2025
- ระบบจะนำข้อมูลจากรายงาน 2024Q2, 2024Q3, 2024Q4, 2025Q1 มาใช้ในการคำนวณเบี้ยที่เคยส่งรายงานไปแล้ว เพื่อใช้คำนวณ Movement เมื่อครบปีกรมธรรม์
- step 9: คำนวณผลรวมเบี้ยทั้งหมดTL Premium: Life = ผลรวมของ New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: LifeTL Premium: AD&D = ผลรวมของ New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&D
- TL Premium: Life = ผลรวมของ New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: Life
- TL Premium: AD&D = ผลรวมของ New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&D
- Step 10: เตรียมข้อมูลกรมธรรม์เพื่อใช้ออกรายงาน BDRดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผลหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการRI No.เลขอ้างอิงการส่งงานประกันต่อแสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Nameชื่อกรมธรรม์แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Nature of Businessประเภทธุรกิจของกรมธรรม์แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Mode of Paymentโหมดชำระเบี้ยดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3Pol. Yr.ปีกรมธรรม์จากการคำนวณจาก RICommencementDateดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)GIB - RI Statusสถานะกรมธรรม์ที่คิดจากปีกรมธรรม์จากการคำนวณ RICommencementDateสถานะของกรมธรรม์สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากสถานะ และปีกรมธรรม์ของ ri โดยมีหลักการดังนี้ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedPolicy Statusสถานะกรมธรรม์ดึงค่า GIB - RI Status ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2Renewal/ Lapsed Dateวันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)RICommencementDate วันเริ่มสัญญาครั้งแรกของ RIRICommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017CommencementDate วันเริ่มสัญญาครั้งแรกดึงค่า Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Master Pol Yr.ปีกรมธรรม์จากระบบหน้าบ้านดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นดึงค่าสถานะ GIB - RI Status ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024ตัวคูณตาม Payment Mode ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2Premium Rate (% p.a.): Lifeอัตราเบี้ยประกันชีวิตรายปีดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่งPremium Rate (% p.a.): AD&Dอัตราเบี้ยประกันอุบัติเหตุรายปีดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
- แสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0
- หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1
- หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2
- หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New Business
- Pol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed
- ดึงค่า GIB - RI Status
- ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0
- หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1
- หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆ
- หากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะ GIB - RI Status
- ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- EffectiveDate: 01/01/2024
- EndDate: 31/12/2024
- Policy Period: 01/01/2024 – 31/12/2024
- กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)
- ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- Effective Date: 01/01/2024
- Lapse Date: 01/01/2025
- Policy Period: 01/01/2024 – 31/12/2024
- ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2
- ดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- Step 11: เตรียมข้อมูล เพื่อนำไปบันทึกข้อมูลที่ BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQoutput fieldsความหมายส่วน Original Policyส่วน ReinsurancePolicyYear PolicyYear จาก Step 2.2PolicyYear จาก Step 2.2% SA share: Lifeสัดส่วนทุนประกันต่อที่ใช้สำหรับ Life ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น% SA share: AD&Dสัดส่วนทุนประกันต่อที่ใช้สำหรับ AD&D ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้นMembers: Lifeจำนวนสมาชิกความคุ้มครอง Life แยกตาม Layerได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium ค่า (MB L1, MB L2, MB L3) Members: AD&Dจำนวนสมาชิกความคุ้มครอง AD&D แยกตาม Layerได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (MB L1, MB L2, MB L3) TL SA: Lifeทุนประกันรวม Life แยกตาม Layerได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (SA L1, SA L2, SA L3)คำนวณจากส่วน Original Policy ค่า ทุนประกันรวม (TL SA: Life) คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)ROUND(% SA Share Life × TL SA: Life, 2)TL SA: AD&Dทุนประกันรวม AD&D แยกตาม Layerได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (SA L1, SA L2, SA L3)คำนวณจากส่วน Original Policy ค่าทุนประกันรวม (TL SA: AD&D) คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D× TL SA: AD&D, 2)New Business Premium: Lifeเบี้ยประกันต่อ Life (New Business) แยกตาม Layerได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า New Business Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)มีการ ROUND ทศนิยม 2 ตำแหน่งNew Business Premium: AD&Dเบี้ยประกันต่อ AD&D (New Business) แยกตาม Layerได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า New Business Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)มีการ ROUND ทศนิยม 2 ตำแหน่งRenewal Premium: Lifeเบี้ยประกันต่อ Life (Renewal) แยกตาม Layerได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Renewal Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)มีการ ROUND ทศนิยม 2 ตำแหน่งRenewal Premium: AD&Dเบี้ยประกันต่อ AD&D (Renewal) แยกตาม Layerได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Renewal Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)มีการ ROUND ทศนิยม 2 ตำแหน่งRevivals Premium: Lifeเบี้ยปรับเพิ่ม Life (Movement) แยกตาม Layerได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Revivals Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)มีการ ROUND ทศนิยม 2 ตำแหน่งRevivals Premium: AD&Dเบี้ยปรับเพิ่ม AD&D (Movement) แยกตาม Layerได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Revivals Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)มีการ ROUND ทศนิยม 2 ตำแหน่งRefund Premium: Lifeเบี้ยคืน Life แยกตาม Layerได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Refund Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)มีการ ROUND ทศนิยม 2 ตำแหน่งRefund Premium: AD&Dเบี้ยคืน AD&D แยกตาม Layerได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premiumคำนวณจากส่วน Original Policy ค่า Refund Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)มีการ ROUND ทศนิยม 2 ตำแหน่งTL Premium: Lifeเบี้ยประกันต่อ Life รวมทั้งหมดผลรวมของ New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: Lifeผลรวมของส่วน reinsurance ค่า New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: Lifeมีการ ROUND ทศนิยม 2 ตำแหน่งTL Premium: AD&Dเบี้ยประกันต่อ AD&D รวมทั้งหมดผลรวมของ New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&Dผลรวมของส่วน reinsurance ค่า New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&Dมีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium ค่า (MB L1, MB L2, MB L3)
- ได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (MB L1, MB L2, MB L3)
- ได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (SA L1, SA L2, SA L3)
- คำนวณจากส่วน Original Policy ค่า ทุนประกันรวม (TL SA: Life) คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- ROUND(% SA Share Life × TL SA: Life, 2)
- ได้ค่าจาก Step 6 จาก BD-AP-001-02-01 RI Premium (SA L1, SA L2, SA L3)
- คำนวณจากส่วน Original Policy ค่าทุนประกันรวม (TL SA: AD&D) คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- ROUND(% SA Share AD&D× TL SA: AD&D, 2)
- ได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า New Business Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า New Business Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Renewal Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.2 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Renewal Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Revivals Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Revivals Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Refund Premium: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ได้ค่าจาก Step 8.3 จาก BD-AP-001-02-01 RI Premium
- คำนวณจากส่วน Original Policy ค่า Refund Premium: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ผลรวมของ New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: Life
- ผลรวมของส่วน reinsurance ค่า New Business Premium: Life + Renewal Premium: Life + Revivals Premium: Life − Refund Premium: Life
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ผลรวมของ New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&D
- ผลรวมของส่วน reinsurance ค่า New Business Premium: AD&D + Renewal Premium: AD&D + Revivals Premium: AD&D − Refund Premium: AD&D
- มีการ ROUND ทศนิยม 2 ตำแหน่ง


===== PAGE 1313145645 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-01 RI Premium > BD-AP-001-02-01-1 ตัวอย่าง scenario เงื่อนไขการคำนวณ premium =====
| เคส | Layer ของกรมธรรม์ | OverAge (Acc >70) | Mode | Period = Effective Date (NB/Renewal) | Period ≠ Effective Date (Movement ระหว่างปี) | Movement ตอน “ครบรอบปีกรมธรรม์” |
| A | มีเฉพาะ L1 | ไม่มี | Annual | คำนวณเบี้ยเต็มปี (Annualize) | คำนวณ Revivals/Refund ได้ | คำนวณ Movement ครบรอบปี |
| B | มีเฉพาะ L1 | ไม่มี | ไม่ใช่ Annual | คำนวณเบี้ยเต็มปี (Annualize) | Movement = 0 | คำนวณ Movement ครบรอบปี |
| C | มีเฉพาะ L1 | มี | Annual | คำนวณเบี้ยเต็มปี และ หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident | คำนวณ Revivals/Refund ได้ | คำนวณ Movement ครบรอบปี โดย หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident ก่อนหา Movement |
| D | มีเฉพาะ L1 | มี | ไม่ใช่ Annual | คำนวณเบี้ยเต็มปี และ หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident | Movement = 0 | คำนวณ Movement ครบรอบปี โดย หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident ก่อนหา Movement |
| E | มี L2/3 | ไม่มี | Annual | คำนวณเบี้ยเต็มปี + แยก Layer (L1/L2/L3) | Movement ระหว่างปี: ใส่ค่าเฉพาะ L1 (L2,L3=0) | Movement ครบรอบปี: ใส่ค่าเฉพาะ L1 (L2,L3=0) |
| F | มี L2/3 | ไม่มี | ไม่ใช่ Annual | คำนวณเบี้ยเต็มปี + แยก Layer (L1/L2/L3) | Movement = 0 ทุก Layer | Movement ครบรอบปี: ใส่ค่าเฉพาะ L1 (L2,L3=0) |
| G | มี L2/3 | มี | Annual | คำนวณเบี้ยเต็มปี + แยก Layer และ หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident | Movement ระหว่างปี: ใส่ค่าเฉพาะ L1 (L2,L3=0) | Movement ครบรอบปี: หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident ก่อนหา Movement และใส่ค่าเฉพาะ L1 |
| H | มี L2/3 | มี | ไม่ใช่ Annual | คำนวณเบี้ยเต็มปี + แยก Layer และ หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident | Movement = 0 ทุก Layer | Movement ครบรอบปี: หักเบี้ย Over-age ที่ทำเป็นรายปีแล้วในความคุ้มครอง Accident ก่อนหา Movement และใส่ค่าเฉพาะ L1 |


===== PAGE 1312719914 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-01 RI Premium > BD-AP-001-02-01-1 ตัวอย่างการเลือกข้อมูลเบี้ย R61 =====
| IT Comments |  |  |  |  |  |  |  |  | No. of Insured | Premium |
| Quarter ข้อมูลที่ประมวลผล | กรณีคำนวณเบี้ยเต็มปี |  | PolicyNo | ReinsuredNo | Payment Mode | Policy Year | Effective Date | End Date | PeriodDate | Previous | Addition | Cancellation | Total | Life | Accident | Med. Acc. | TPD | E1 | IP | OP | Dental | Med. Total | Total |
| 2023Q2 | ใช้ผลรวมเบี้ยนี้คำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 30 |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/06/2023 | 31 | 3 | 8 | 26 | 6,480.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 6,480.00 |
| 2023Q3 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/07/2023 | 26 | 0 | 0 | 26 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2023Q3 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/08/2023 | 26 | 0 | 0 | 26 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2023Q3 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/09/2023 | 26 | 0 | 0 | 26 | 6,480.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 6,480.00 |
| 2023Q4 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/10/2023 | 26 | 1 | 0 | 27 | 222.95 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 222.95 |
| 2023Q4 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/11/2023 | 27 | 0 | 0 | 27 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2023Q4 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/12/2023 | 27 | 0 | 0 | 27 | 6,720.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 6,720.00 |
| 2024Q1 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/01/2024 | 27 | 0 | 2 | 25 | -306.89 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | -306.89 |
| 2024Q1 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/02/2024 | 25 | 0 | 0 | 25 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2024Q1 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/03/2024 | 25 | 0 | 0 | 25 | 6,240.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 6,240.00 |
| 2024Q2 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/05/2024 | 25 | 1 | 2 | 24 | -13.11 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | -13.11 |
| 2024Q2 |  |  | GH044 | 1706008 | Quartery | 30 | 16/06/2023 | 15/06/2024 | 16/04/2024 | 25 | 0 | 0 | 25 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2024Q2 | ใช้ผลรวมรายการนี้คำนวณเบี้ยเต็มปี สำหรับปีกธ.ที่ 31 |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/06/2024 | 24 | 1 | 1 | 24 | 6,160.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 6,160.00 |
| 2024Q3 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/07/2024 | 24 | 0 | 1 | 23 | -202.52 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | -202.52 |
| 2024Q3 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/08/2024 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2024Q3 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/09/2024 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2024Q4 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/10/2024 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2024Q4 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/11/2024 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2024Q4 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/12/2024 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2025Q1 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/01/2025 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2025Q1 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/02/2025 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2025Q1 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/03/2025 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2025Q2 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/04/2025 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| 2025Q2 |  |  | GH044 | 1706008 | Quartery | 31 | 16/06/2024 | 15/06/2025 | 16/05/2025 | 23 | 0 | 0 | 23 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |


===== PAGE 1313439782 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-02 RI Commission =====
สรุปเงื่อนไขเบื้องต้น
- ระบบคำนวณ RI Commission Life และ RI Commission Accident แยก RI Commission Rate ภายใต้ RI Condition ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- ระบบตรวจสอบ PolicyNo โดยต้องมี Effective Date อยู่ในช่วง Effective Date From ถึง Effective Date To ภายใต้ RI Condition
- ผลลัพธ์สุดท้ายของ RI Commission ต่อกรมธรรม์ จะเป็นการนำ RI Premium ที่ได้จากกระบวนการ BD-AP-001-02-01 RI Premium มาคำนวณกับ RI Commission Rate
การคำนวณ RI Commission มีขั้นตอนดังต่อไปนี้
- ดึงข้อมูล RI Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %RI Commission Rate ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %RI Commission Rate ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- คำนวณ RI Commission Life จาก ส่วน reinsurance ค่า TL Premium: Life ของแต่ละ LayerRI Commission: Life = Round(RI Commission Rate × ส่วน reinsurance ค่า TL Premium: Life, 2)
- RI Commission: Life = Round(RI Commission Rate × ส่วน reinsurance ค่า TL Premium: Life, 2)
- คำนวณ RI Commission Accident จาก ส่วน reinsurance ค่า TL Premium: AD&D ของแต่ละ LayerRI Commission: AD&D = Round(RI Commission Rate × ส่วน reinsurance ค่า TL Premium: AD&D, 2)
- RI Commission: AD&D = Round(RI Commission Rate × ส่วน reinsurance ค่า TL Premium: AD&D, 2)


===== PAGE 1313145888 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-03 RI Claim =====
03 การคำนวณ RI Claim
overview
อธิบายหลักการและขั้นตอนการจัดทำรายงาน RI Claim Notification สำหรับสัญญา Gibraltar Group EB โดยใช้ข้อมูลสินไหมที่เกิดขึ้นจริง (Actual) ในแต่ละรอบ Quarter เพื่อคำนวณส่วนความรับผิดของ Reinsurer ทั้งในส่วนของค่าสินไหมและค่าใช้จ่ายสอบสวน (Investigation & Legal Expense) ตามเงื่อนไขการรับประกันต่อที่กำหนดไว้ในสัญญา ระบบจะคัดเลือกเฉพาะรายการสินไหมที่เข้าเงื่อนไขตามรอบประมวลผล และแบ่งกลุ่มการประมวลผลตามสถานะของสินไหม เพื่อให้การคำนวณและการแสดงผลในรายงานมีความถูกต้อง สอดคล้องกับหลักธุรกิจ และสามารถตรวจสอบย้อนหลังได้
Objective
เพื่อจัดทำรายงาน Claim Notification สำหรับส่งให้ Reinsurer โดยมีเป้าหมายดังนี้
- คัดเลือกเฉพาะรายการสินไหมที่เข้าเงื่อนไขตามรอบ Quarter Period
- คำนวณส่วนแบ่งค่าสินไหมและค่าใช้จ่ายสอบสวนของ Reinsurer ตามสัดส่วนการรับประกันต่อ (% Reinsurance) และระดับ Layer
- แยกการประมวลผลสินไหมตามสถานะ (Approve / Decline / Approve จากรอบก่อนหน้า) เพื่อป้องกันการคำนวณซ้ำและการส่งข้อมูลเกินจริง
- จัดเตรียมข้อมูลผลลัพธ์ในรูปแบบที่สอดคล้องกับรายงาน Claim Notification และสามารถนำไปใช้เป็นฐานข้อมูลสำหรับการตรวจสอบและการกระทบยอดในอนาคต
- ใช้เป็นข้อมูลประกอบ Bordereau, SOA และการส่งข้อมูลให้ Reinsurer
การคำนวณ RI Claim Recovery มีขั้นตอนดังต่อไปนี้
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูล ClaimBD-PS-003 ข้อมูล Claim (Estimate,Actual)ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือกตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024ข้อมูลค่าใช้จ่ายในการสอบสวนBD-PS-011 ข้อมูล Investigate Expense (Actual)ระบบเลือกทุกรายการที่มีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter ที่เลือกด้วยเงื่อนไข PolicyNo, Effective Date, CertNo, Approved Date, ClaimNo, ClaimTypeเงื่อนไขการ match Claim Type กับส่วนข้อมูลสินไหมประเภทสินไหมค่า Claim Type จาก ข้อมูลค่าใช้จ่ายในการสอบสวนค่า Claim Type จาก ข้อมูลสินไหมLifeClaimType = 'Life'Type = 'Death' และมีค่า ClaimLife > 0Accident DeathClaimType = 'AccidentDeath'Type = 'Death' และมีค่า ClaimAccident > 0DismenbermentClaimType = 'Dismenberment'Type = 'Dismenberment'ข้อมูลกรมธรรม์BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์ ที่มีช่วงความคุ้มครองอยู่ใน ทั้ง 2 กลุ่มดังนี้ข้อมูล Claimข้อมูล Investigation ExpenseConfiguration RIBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือก
- ตัวอย่าง
- รายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- ระบบเลือกทุกรายการที่มีวันที่อนุมัติสินไหมอยู่ภายในรอบ Quarter ที่เลือก
- ด้วยเงื่อนไข PolicyNo, Effective Date, CertNo, Approved Date, ClaimNo, ClaimType
- เงื่อนไขการ match Claim Type กับส่วนข้อมูลสินไหมประเภทสินไหมค่า Claim Type จาก ข้อมูลค่าใช้จ่ายในการสอบสวนค่า Claim Type จาก ข้อมูลสินไหมLifeClaimType = 'Life'Type = 'Death' และมีค่า ClaimLife > 0Accident DeathClaimType = 'AccidentDeath'Type = 'Death' และมีค่า ClaimAccident > 0DismenbermentClaimType = 'Dismenberment'Type = 'Dismenberment'
- ระบบเลือกข้อมูลทุกกรมธรรม์ ที่มีช่วงความคุ้มครองอยู่ใน ทั้ง 2 กลุ่มดังนี้ข้อมูล Claimข้อมูล Investigation Expense
- ข้อมูล Claim
- ข้อมูล Investigation Expense
- Step2: คัดเลือกข้อมูลเพื่อประมวลผล Claim Notification แบ่งเป็น 3 กลุ่ม ดังนี้ กลุ่มที่ 1: รายการสินไหมที่อนุมัติในรอบ Quarterกลุ่มที่ 2: สินไหม Decline ที่มีค่าใช้จ่ายสอบสวนกลุ่มที่ 3: สินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติมคำอธิบายเป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผลการประมวลผลในกลุ่มนี้ หากเป็นเลขสินไหมที่มีค่า Investigation & Legal Expense ระบบจะทำการคำนวณและแสดงรายการ ค่าใช้จ่ายสอบสวนเพิ่มเติมกรณีไม่มีค่าใช้จ่ายดังกล่าว ระบบจะประมวลผลเฉพาะข้อมูลสินไหมตามปกติเป็นรายการสินไหมที่มีสถานะ Decline ถึงแม้จะไม่มีการจ่ายเงินค่าสินไหม แต่หากมีการเกิดค่า Investigation & Legal Expense จริงระบบจะต้องแสดงรายการนี้ในรายงาน Claim Notificationการประมวลผลในกลุ่มนี้กำหนดให้ ต้องมีค่า Investigation & Legal Expense เป็นเงื่อนไขบังคับหากไม่มีค่าใช้จ่ายดังกล่าว จะไม่แสดงรายการในรายงานมีสถานะ Approveมีวันที่อนุมัติอยู่ใน Quarter Period ก่อนหน้าและเคยผ่านการประมวลผล RI Claim ไปแล้วหากในรอบปัจจุบันมีค่า Investigation & Legal Expense เพิ่มเติมระบบจะนำมาคำนวณและแสดงเฉพาะส่วนค่าใช้จ่ายสอบสวนการประมวลผลในกลุ่มนี้ ต้องมีค่า Investigation & Legal Expense เป็นเงื่อนไขบังคับตรวจสอบข้อมูลสินไหมต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarterหากเป็นประเภทการเคลมที่เป็น accident death กับ dismemberment จะต้องตรวจสอบอายุผู้เอาประกัน ณ วันที่เกิดเหตุจะต้องไม่เกิน 70 ปีกรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอหากเป็นประเภทการเคลมที่เป็น Life ไม่ต้องตรวจสอบอายุ ณ วันที่เกิดเหตุต้องมีสถานะพิจารณาเป็น Declineตรวจสอบสถานะสินไหมจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim no, Policy Noหากเป็นประเภทการเคลมที่เป็น accident death กับ dismemberment จะต้องตรวจสอบอายุผู้เอาประกัน ณ วันที่เกิดเหตุจะต้องไม่เกิน 70 ปีกรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอหากเป็นประเภทการเคลมที่เป็น Life ไม่ต้องตรวจสอบอายุ ณ วันที่เกิดเหตุต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติก่อนหน้ารอบ Quarterตรวจสอบสถานะสินไหม และวันที่อนุมัติจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim no, Policy Noและตรวจสอบต้องเป็นรายการสินไหมที่เคยประมวลผล ri claim ไปแล้ว โดย match ข้อมูลจาก A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQ ด้วยเงื่อนไข Claim no, Policy Noตรวจสอบสถานะกรมธรรม์ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New business จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ต้องเป็นกรมธรรม์ที่ส่ง Treaty Gibraltar Group EB โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancelตรวจสอบข้อมูลค่าใช้จ่ายสอบสวนหากพบรายการสินไหมที่มีค่า Investigation & Legal Expense ระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติมต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผลระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติมต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผลระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติมค่า Remark ในรายงาน Claim Notificationบันทึกค่าว่างบันทึก "Decline Claim"บันทึก "Investigation Expense" ระบบต้องจัดเก็บ flag (เช่น is_inforce_claim_flag) แล/หรือ exclude_reason_code เพื่อแยกเคลมที่ไม่เข้า RI ออกจากการคำนวณ
- เป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผล
- การประมวลผลในกลุ่มนี้ หากเป็นเลขสินไหมที่มีค่า Investigation & Legal Expense ระบบจะทำการคำนวณและแสดงรายการ ค่าใช้จ่ายสอบสวนเพิ่มเติม
- กรณีไม่มีค่าใช้จ่ายดังกล่าว ระบบจะประมวลผลเฉพาะข้อมูลสินไหมตามปกติ
- เป็นรายการสินไหมที่มีสถานะ Decline ถึงแม้จะไม่มีการจ่ายเงินค่าสินไหม แต่หากมีการเกิดค่า Investigation & Legal Expense จริง
- ระบบจะต้องแสดงรายการนี้ในรายงาน Claim Notification
- การประมวลผลในกลุ่มนี้กำหนดให้ ต้องมีค่า Investigation & Legal Expense เป็นเงื่อนไขบังคับ
- หากไม่มีค่าใช้จ่ายดังกล่าว จะไม่แสดงรายการในรายงาน
- มีสถานะ Approve
- มีวันที่อนุมัติอยู่ใน Quarter Period ก่อนหน้า
- และเคยผ่านการประมวลผล RI Claim ไปแล้วหากในรอบปัจจุบันมีค่า Investigation & Legal Expense เพิ่มเติม
- ระบบจะนำมาคำนวณและแสดงเฉพาะส่วนค่าใช้จ่ายสอบสวน
- การประมวลผลในกลุ่มนี้ ต้องมีค่า Investigation & Legal Expense เป็นเงื่อนไขบังคับ
- ต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarter
- หากเป็นประเภทการเคลมที่เป็น accident death กับ dismemberment จะต้องตรวจสอบอายุผู้เอาประกัน ณ วันที่เกิดเหตุจะต้องไม่เกิน 70 ปี
- กรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอ
- หากเป็นประเภทการเคลมที่เป็น Life ไม่ต้องตรวจสอบอายุ ณ วันที่เกิดเหตุ
- ต้องมีสถานะพิจารณาเป็น Decline
- ตรวจสอบสถานะสินไหมจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim no, Policy No
- หากเป็นประเภทการเคลมที่เป็น accident death กับ dismemberment จะต้องตรวจสอบอายุผู้เอาประกัน ณ วันที่เกิดเหตุจะต้องไม่เกิน 70 ปี
- กรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอ
- หากเป็นประเภทการเคลมที่เป็น Life ไม่ต้องตรวจสอบอายุ ณ วันที่เกิดเหตุ
- ต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติก่อนหน้ารอบ Quarter
- ตรวจสอบสถานะสินไหม และวันที่อนุมัติจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim no, Policy Noและ
- ตรวจสอบต้องเป็นรายการสินไหมที่เคยประมวลผล ri claim ไปแล้ว โดย match ข้อมูลจาก A09-12-2 ตัวอย่าง output file - BDR - Claim Notification_YYYYQQ ด้วยเงื่อนไข Claim no, Policy No
- ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New business จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ต้องเป็นกรมธรรม์ที่ส่ง Treaty Gibraltar Group EB โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก เป็นตัวเลข จะได้ ReInsur_No = '[0-9][0-9]%'
- สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- หากพบรายการสินไหมที่มีค่า Investigation & Legal Expense ระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติม
- ต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผล
- ระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติม
- ต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผล
- ระบบจะคำนวณและแสดงค่า Amount Paid By Insurer: Investigation & Legal Expense และ Reinsurer’s Share: Investigation & Legal Expense เพิ่มเติม
- บันทึกค่าว่าง
- บันทึก "Decline Claim"
- บันทึก "Investigation Expense"
- ระบบต้องจัดเก็บ flag (เช่น is_inforce_claim_flag) แล/หรือ exclude_reason_code เพื่อแยกเคลมที่ไม่เข้า RI ออกจากการคำนวณ
- Step 3: การตรวจสอบ Configuration RIดึงข้อมูล Percentage Reinsurance ตามระดับ Layer ของ Sum Assured ของสมาชิกแต่ละรายจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูล Percentage Reinsurance ตามระดับ Layer ของ Sum Assured ของสมาชิกแต่ละรายจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- Step 4: เตรียมข้อมูลเคลมข้อมูลชื่อในรายงาน claim notificationเงื่อนไขจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่ายAmount Paid: Lifeดึงค่า ClaimLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Deathจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่ายAmount Paid: Accidentดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Deathจำนวนเงินสินไหมสูญเสียอวัยวะ ที่บริษัทอนุมัติจ่ายAmount Paid: Dismembermentดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Dismembermentค่าใช้จ่ายในการสอบสวน ที่บริษัทจ่ายAmount Paid By Insurer: Investigation & Legal Expenseดึงค่า InvestigationExpense จาก BD-PS-011 ข้อมูล Investigate Expense (Actual)
- ดึงค่า ClaimLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Death
- ดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Death
- ดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Dismemberment
- ดึงค่า InvestigationExpense จาก BD-PS-011 ข้อมูล Investigate Expense (Actual)
- Step5: คำนวณ RI Claim ตาม Layer ระบบจะคำนวณ RI Claim โดย แบ่งจำนวนเงินเคลมออกเป็นช่วง (Layer) ตามระดับทุนประกัน (Sum Insured) และใช้ Percentage Reinsurance ที่กำหนดในแต่ละ Layerระบบคำนวณ Reinsurer’s Share โดยแบ่งจำนวนเงินสินไหมออกเป็นช่วงตามระดับทุนประกัน (Layer) และใช้สัดส่วนการรับประกันต่อ (% Reinsurance) ที่กำหนดในแต่ละ Layer ก่อนนำผลลัพธ์มารวมกันหลักการคำนวณนี้ใช้เหมือนกันทุกประเภทความคุ้มครอง ได้แก่ Life, Accident Death และ Dismemberment โดยเปลี่ยนเฉพาะยอดเงินสินไหมตามประเภทความคุ้มครองนั้นระบบต้องกำหนด Layer ของสมาชิก จาก Sum Insured ของความคุ้มครองนั้นตัวอย่างLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้นสูตรคำนวณ RI Claim กรณี 1: ทุนประกันไม่เกิน 5,000,000 บาท Layer 1สมาชิกมีทุนประกันอยู่ใน Layer 1 เพียง Layer เดียวระบบจะนำ ยอดเคลมทั้งหมด ของความคุ้มครองนั้น คูณด้วย Percentage Reinsurance ของ Layer 1Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Life,2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Accident,2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Dismemberment,2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)กรณีทุนประกันเกิน 5,000,000 บาท แต่ไม่เกิน 20,000,000 บาท Layer 2 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2ทุนประกันของสมาชิกครอบคลุมมากกว่า 1 Layerระบบจะแบ่งยอดเคลมออกเป็น 2 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนที่เกิน 5,000,000 บาท)ระบบจะคำนวณ RI Claim แยกในแต่ละ Layer โดยใช้ Percentage Reinsurance ของ Layer นั้นReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Life - 5M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Accident - 5M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Dismemberment - 5M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)กรณีทุนประกันเกิน 20,000,000 บาท Layer 3 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2 และ Layer 3ทุนประกันของสมาชิกครอบคลุมครบทั้ง 3 Layerระบบจะแบ่งยอดเคลมออกเป็น 3 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนระหว่าง 5,000,000 – 20,000,000 บาท)ส่วนที่อยู่ใน Layer 3 (ส่วนที่เกิน 20,000,000 บาท)สำหรับ Layer 3 ซึ่งมี Percentage Reinsurance เป็น 0% ระบบจะไม่ส่งประกันภัยต่อในส่วนนี้ระบบจะคำนวณ RI Claim ของแต่ละ Layer โดยใช้ Percentage Reinsurance ที่กำหนดReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Life - 20M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Accident - 20M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Dismemberment- 20M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- ระบบคำนวณ Reinsurer’s Share โดยแบ่งจำนวนเงินสินไหมออกเป็นช่วงตามระดับทุนประกัน (Layer) และใช้สัดส่วนการรับประกันต่อ (% Reinsurance) ที่กำหนดในแต่ละ Layer ก่อนนำผลลัพธ์มารวมกัน
- หลักการคำนวณนี้ใช้เหมือนกันทุกประเภทความคุ้มครอง ได้แก่ Life, Accident Death และ Dismemberment โดยเปลี่ยนเฉพาะยอดเงินสินไหมตามประเภทความคุ้มครองนั้น
- ระบบต้องกำหนด Layer ของสมาชิก จาก Sum Insured ของความคุ้มครองนั้น
- ตัวอย่างLayerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- สูตรคำนวณ RI Claim กรณี 1: ทุนประกันไม่เกิน 5,000,000 บาท Layer 1สมาชิกมีทุนประกันอยู่ใน Layer 1 เพียง Layer เดียวระบบจะนำ ยอดเคลมทั้งหมด ของความคุ้มครองนั้น คูณด้วย Percentage Reinsurance ของ Layer 1Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Life,2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Accident,2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Dismemberment,2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)กรณีทุนประกันเกิน 5,000,000 บาท แต่ไม่เกิน 20,000,000 บาท Layer 2 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2ทุนประกันของสมาชิกครอบคลุมมากกว่า 1 Layerระบบจะแบ่งยอดเคลมออกเป็น 2 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนที่เกิน 5,000,000 บาท)ระบบจะคำนวณ RI Claim แยกในแต่ละ Layer โดยใช้ Percentage Reinsurance ของ Layer นั้นReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Life - 5M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Accident - 5M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Dismemberment - 5M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)กรณีทุนประกันเกิน 20,000,000 บาท Layer 3 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2 และ Layer 3ทุนประกันของสมาชิกครอบคลุมครบทั้ง 3 Layerระบบจะแบ่งยอดเคลมออกเป็น 3 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนระหว่าง 5,000,000 – 20,000,000 บาท)ส่วนที่อยู่ใน Layer 3 (ส่วนที่เกิน 20,000,000 บาท)สำหรับ Layer 3 ซึ่งมี Percentage Reinsurance เป็น 0% ระบบจะไม่ส่งประกันภัยต่อในส่วนนี้ระบบจะคำนวณ RI Claim ของแต่ละ Layer โดยใช้ Percentage Reinsurance ที่กำหนดReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Life - 20M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Accident - 20M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Dismemberment- 20M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- กรณี 1: ทุนประกันไม่เกิน 5,000,000 บาท Layer 1สมาชิกมีทุนประกันอยู่ใน Layer 1 เพียง Layer เดียวระบบจะนำ ยอดเคลมทั้งหมด ของความคุ้มครองนั้น คูณด้วย Percentage Reinsurance ของ Layer 1Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Life,2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Accident,2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Dismemberment,2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- สมาชิกมีทุนประกันอยู่ใน Layer 1 เพียง Layer เดียว
- ระบบจะนำ ยอดเคลมทั้งหมด ของความคุ้มครองนั้น คูณด้วย Percentage Reinsurance ของ Layer 1Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Life,2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Accident,2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Dismemberment,2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Life,2)
- Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Accident,2)
- Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid: Dismemberment,2)
- Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- กรณีทุนประกันเกิน 5,000,000 บาท แต่ไม่เกิน 20,000,000 บาท Layer 2 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2ทุนประกันของสมาชิกครอบคลุมมากกว่า 1 Layerระบบจะแบ่งยอดเคลมออกเป็น 2 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนที่เกิน 5,000,000 บาท)ระบบจะคำนวณ RI Claim แยกในแต่ละ Layer โดยใช้ Percentage Reinsurance ของ Layer นั้นReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Life - 5M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Accident - 5M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Dismemberment - 5M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- ทุนประกันของสมาชิกครอบคลุมมากกว่า 1 Layer
- ระบบจะแบ่งยอดเคลมออกเป็น 2 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนที่เกิน 5,000,000 บาท)
- ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)
- ส่วนที่อยู่ใน Layer 2 (ส่วนที่เกิน 5,000,000 บาท)
- ระบบจะคำนวณ RI Claim แยกในแต่ละ Layer โดยใช้ Percentage Reinsurance ของ Layer นั้นReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Life - 5M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Accident - 5M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Dismemberment - 5M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Life - 5M),2)
- Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Accident - 5M),2)
- Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x (Amount Paid: Dismemberment - 5M),2)
- Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- กรณีทุนประกันเกิน 20,000,000 บาท Layer 3 = ผลรวมของ RI Claim จาก Layer 1 และ Layer 2 และ Layer 3ทุนประกันของสมาชิกครอบคลุมครบทั้ง 3 Layerระบบจะแบ่งยอดเคลมออกเป็น 3 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนระหว่าง 5,000,000 – 20,000,000 บาท)ส่วนที่อยู่ใน Layer 3 (ส่วนที่เกิน 20,000,000 บาท)สำหรับ Layer 3 ซึ่งมี Percentage Reinsurance เป็น 0% ระบบจะไม่ส่งประกันภัยต่อในส่วนนี้ระบบจะคำนวณ RI Claim ของแต่ละ Layer โดยใช้ Percentage Reinsurance ที่กำหนดReinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Life - 20M),2)Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Accident - 20M),2)Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Dismemberment- 20M),2)Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- ทุนประกันของสมาชิกครอบคลุมครบทั้ง 3 Layer
- ระบบจะแบ่งยอดเคลมออกเป็น 3 ส่วน ตามสัดส่วนของทุนในแต่ละ Layer ได้แก่ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)ส่วนที่อยู่ใน Layer 2 (ส่วนระหว่าง 5,000,000 – 20,000,000 บาท)ส่วนที่อยู่ใน Layer 3 (ส่วนที่เกิน 20,000,000 บาท)
- ส่วนที่อยู่ใน Layer 1 (ไม่เกิน 5,000,000 บาท)
- ส่วนที่อยู่ใน Layer 2 (ส่วนระหว่าง 5,000,000 – 20,000,000 บาท)
- ส่วนที่อยู่ใน Layer 3 (ส่วนที่เกิน 20,000,000 บาท)
- สำหรับ Layer 3 ซึ่งมี Percentage Reinsurance เป็น 0% ระบบจะไม่ส่งประกันภัยต่อในส่วนนี้
- ระบบจะคำนวณ RI Claim ของแต่ละ Layer โดยใช้ Percentage Reinsurance ที่กำหนด
- Reinsurer's Share: Life = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Life - 20M),2)
- Reinsurer's Share: Accident = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Accident - 20M),2)
- Reinsurer's Share: Dismemberment = Round(Percentage Reinsurance ของ Layer 1 x 5M,2) + Round(Percentage Reinsurance ของ Layer 2 x 15M,2) + Round(Percentage Reinsurance ของ Layer 3 x (Amount Paid: Dismemberment- 20M),2)
- Reinsurer's Share: Investigation & Legal Expense = Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- Step 5.1: เตรียมข้อมูลกรมธรรม์ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผลหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการRI No.เลขอ้างอิงการส่งงานประกันต่อแสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Nameชื่อกรมธรรม์แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Nature of Businessประเภทธุรกิจของกรมธรรม์แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Mode of Paymentโหมดชำระเบี้ยดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3Pol. Yr.ปีกรมธรรม์จากการคำนวณจาก RICommencementDateดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)GIB - RI Statusสถานะกรมธรรม์ที่คิดจากปีกรมธรรม์จากการคำนวณ RICommencementDateสถานะของกรมธรรม์สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากสถานะ และปีกรมธรรม์ของ ri โดยมีหลักการดังนี้ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedPolicy Statusสถานะกรมธรรม์ดึงค่า GIB - RI Status ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2Renewal/ Lapsed Dateวันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)RICommencementDate วันเริ่มสัญญาครั้งแรกของ RIRICommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017CommencementDate วันเริ่มสัญญาครั้งแรกดึงค่า Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Master Pol Yr.ปีกรมธรรม์จากระบบหน้าบ้านดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นดึงค่าสถานะ GIB - RI Status ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024ตัวคูณตาม Payment Mode ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2Premium Rate (% p.a.): Lifeอัตราเบี้ยประกันชีวิตรายปีดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่งPremium Rate (% p.a.): AD&Dอัตราเบี้ยประกันอุบัติเหตุรายปีดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
- แสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0
- หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1
- หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2
- หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New Business
- Pol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed
- ดึงค่า GIB - RI Status
- ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0
- หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1
- หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆ
- หากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะ GIB - RI Status
- ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- EffectiveDate: 01/01/2024
- EndDate: 31/12/2024
- Policy Period: 01/01/2024 – 31/12/2024
- กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)
- ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- Effective Date: 01/01/2024
- Lapse Date: 01/01/2025
- Policy Period: 01/01/2024 – 31/12/2024
- ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2
- ดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- Step 6: บันทึกข้อมูลเพื่อออกรายงาน Claim Notification BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Claim Notification_YYYYQQ หัวข้อคำอธิบายเงื่อนไขการบันทึกรายการNo. runลำดับรายการในรายงานเรียงตาม PolicyNo หากเป็น PolicyNo เดียวกัน ให้ใช้เลข No. เดียวกันClaim Noเลขที่สินไหมแสดงค่า ClaimNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)RI No.เลขอ้างอิงการส่งงานประกันต่อแสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)ต้องเป็นกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล claimPolicy Nameชื่อกรมธรรม์แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นดึงค่า GIB - RI Status , EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024Cession No.หมายเลขสมาชิก (CertNo)ดึงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) Effective Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurerแสดงวันและเดือนตามวันที่เริ่มสัญญาจริงของกรมธรรม์ และปรับปีให้ตรงกับปีที่เริ่มส่งงานให้ Reinsurer ครั้งแรกใช้ วันและเดือน จาก Commencement Date ตามข้อมูลใน List of Policyใช้ ปี ตามเลข 2 หลักแรกของ Reinsured No. ซึ่งแทนปีที่เริ่มส่งงานให้ Reinsurerตัวอย่างPolicy No: GH1111Reinsured No: 1701001Commencement Date: 01/01/2022Commencement Date ที่แสดงในรายงานส่ง Reinsurer = 01/01/2017Ageอายุสมาชิก ณ วันที่เกิดเหตุดึงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Date of Death / Disabilityวันที่เสียชีวิต หรือ Accident Dateดึงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Cause of Death / Disability สาเหตุการเสียชีวิต / อุบัติเหตุ / การเจ็บป่วยดึงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Original Sum Insured: Lifeทุนประกันชีวิตของสมาชิกดึงค่า SumInsuredLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type DeathOriginal Sum Insured: Accidentทุนประกันอุบัติเหตุของสมาชิกดึงค่า SumInsuredAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Payment Dateวันที่จ่ายเงินดึงค่า ApprovedDate PaymentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Accounting Entries in the (Pol.yr.)ปีกรมธรรม์ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 นำปี ลบ ปี ไม่พิจารณาวัน/เดือนCommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy)EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)คำนวณจากผลต่างของปีระหว่างปีของ EffectiveDate ของกรมธรรม์ และปีของ CommencementDate แล้วบวกเพิ่ม 1 เพื่อกำหนดให้ปีแรกของกรมธรรม์มีค่าเท่ากับ 1Status การเสียชีวิตของสมาชิกในรายการเคลมนี้ เป็น การเสียชีวิตทั่วไป หรือเป็น การเสียชีวิตจากอุบัติเหตุระบบจะกำหนดค่าให้จาก จำนวนเงินสินไหมอุบัติเหตุที่จ่ายจริง เทียบกับ ทุนประกันอุบัติเหตุของสมาชิกกรณีเป็น Accidental Death ระบบจะแสดงค่า Accidental Death เมื่อบริษัทจ่ายสินไหมอุบัติเหตุและจำนวนเงินที่จ่าย เท่ากับ 2 เท่าของทุนประกันอุบัติเหตุแสดงได้ 2 ค่า ดังนี้แสดงค่า Accidental Death เมื่อเป็นการเสียชีวิตจากอุบัติเหตุ และมีการจ่ายสินไหมอุบัติเหตุในอัตราพิเศษถ้า Amount Paid By Insurer: Accident เป็น 2 เท่าของ Original Sum Insured: Accidentแสดงค่า Normal เมื่อการเสียชีวิตทั่วไป หรือกรณีที่ไม่เข้าเงื่อนไข Accidental DeathAmount Paid: Lifeจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่ายดึงค่า ClaimLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type DeathAmount Paid: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่ายดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type DeathAmount Paid: Dismembermentจำนวนเงินสินไหมสูญเสียอวัยวะ ที่บริษัทอนุมัติจ่ายดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type DismembermentAmount Paid: DIค่าสินไหม Disability Income ที่บริษัทอนุมัติจ่ายแสดงค่า 0Amount Paid By Insurer: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่บริษัทอนุมัติจ่ายดึงค่า ExpenseAmount จาก BD-PS-011 ข้อมูล Investigate Expense (Actual)Reinsurer's Share: Lifeจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อดึงค่า Reinsurer's Share: Life จาก Step5Reinsurer's Share: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อดึงค่า Reinsurer's Share: Accident จาก Step5Reinsurer's Share: Dismemberment จำนวนเงินสินไหมสูญเสียอวัยวะ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อดึงค่า Reinsurer's Share: Dismemberment จาก Step5Reinsurer's Share: DIค่าสินไหม Disability Income ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อกำหนดค่า 0Reinsurer's Share: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อดึงค่า Reinsurer's Share: Investigation & Legal Expense จาก Step5Remarkหมายเหตุแสดงค่าดังนี้แสดงค่าว่าง กรณีเป็นรายการสินไหมที่อนุมัติในเดือนแสดงค่า "Decline Claim" กรณีเป็นสินไหม Decline ที่มีค่าใช้จ่ายสอบสวนแสดงค่า "Investigation Expense" กรณีเป็นสินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติม
- เรียงตาม PolicyNo หากเป็น PolicyNo เดียวกัน ให้ใช้เลข No. เดียวกัน
- แสดงค่า ClaimNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ต้องเป็นกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล claim
- แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่า GIB - RI Status , EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- EffectiveDate: 01/01/2024
- EndDate: 31/12/2024
- Policy Period: 01/01/2024 – 31/12/2024
- กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)
- ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- Effective Date: 01/01/2024
- Lapse Date: 01/01/2025
- Policy Period: 01/01/2024 – 31/12/2024
- ดึงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงวันและเดือนตามวันที่เริ่มสัญญาจริงของกรมธรรม์ และปรับปีให้ตรงกับปีที่เริ่มส่งงานให้ Reinsurer ครั้งแรกใช้ วันและเดือน จาก Commencement Date ตามข้อมูลใน List of Policyใช้ ปี ตามเลข 2 หลักแรกของ Reinsured No. ซึ่งแทนปีที่เริ่มส่งงานให้ Reinsurer
- ใช้ วันและเดือน จาก Commencement Date ตามข้อมูลใน List of Policy
- ใช้ ปี ตามเลข 2 หลักแรกของ Reinsured No. ซึ่งแทนปีที่เริ่มส่งงานให้ Reinsurer
- ตัวอย่างPolicy No: GH1111Reinsured No: 1701001Commencement Date: 01/01/2022Commencement Date ที่แสดงในรายงานส่ง Reinsurer = 01/01/2017
- Policy No: GH1111Reinsured No: 1701001Commencement Date: 01/01/2022Commencement Date ที่แสดงในรายงานส่ง Reinsurer = 01/01/2017
- Policy No: GH1111
- Reinsured No: 1701001
- Commencement Date: 01/01/2022
- Commencement Date ที่แสดงในรายงานส่ง Reinsurer = 01/01/2017
- ดึงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงค่า SumInsuredLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Death
- ดึงค่า SumInsuredAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงค่า ApprovedDate PaymentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 นำปี ลบ ปี ไม่พิจารณาวัน/เดือนCommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy)EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- คำนวณจากผลต่างของปีระหว่างปีของ EffectiveDate ของกรมธรรม์ และปีของ CommencementDate แล้วบวกเพิ่ม 1 เพื่อกำหนดให้ปีแรกของกรมธรรม์มีค่าเท่ากับ 1
- ระบบจะกำหนดค่าให้จาก จำนวนเงินสินไหมอุบัติเหตุที่จ่ายจริง เทียบกับ ทุนประกันอุบัติเหตุของสมาชิกกรณีเป็น Accidental Death ระบบจะแสดงค่า Accidental Death เมื่อบริษัทจ่ายสินไหมอุบัติเหตุและจำนวนเงินที่จ่าย เท่ากับ 2 เท่าของทุนประกันอุบัติเหตุ
- กรณีเป็น Accidental Death ระบบจะแสดงค่า Accidental Death เมื่อบริษัทจ่ายสินไหมอุบัติเหตุและจำนวนเงินที่จ่าย เท่ากับ 2 เท่าของทุนประกันอุบัติเหตุ
- บริษัทจ่ายสินไหมอุบัติเหตุ
- และจำนวนเงินที่จ่าย เท่ากับ 2 เท่าของทุนประกันอุบัติเหตุ
- แสดงได้ 2 ค่า ดังนี้แสดงค่า Accidental Death เมื่อเป็นการเสียชีวิตจากอุบัติเหตุ และมีการจ่ายสินไหมอุบัติเหตุในอัตราพิเศษถ้า Amount Paid By Insurer: Accident เป็น 2 เท่าของ Original Sum Insured: Accidentแสดงค่า Normal เมื่อการเสียชีวิตทั่วไป หรือกรณีที่ไม่เข้าเงื่อนไข Accidental Death
- แสดงค่า Accidental Death เมื่อเป็นการเสียชีวิตจากอุบัติเหตุ และมีการจ่ายสินไหมอุบัติเหตุในอัตราพิเศษถ้า Amount Paid By Insurer: Accident เป็น 2 เท่าของ Original Sum Insured: Accident
- ถ้า Amount Paid By Insurer: Accident เป็น 2 เท่าของ Original Sum Insured: Accident
- แสดงค่า Normal เมื่อการเสียชีวิตทั่วไป หรือกรณีที่ไม่เข้าเงื่อนไข Accidental Death
- ดึงค่า ClaimLife จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Death
- ดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Death
- ดึงค่า ClaimAccident จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) เฉพาะรายการ Type Dismemberment
- แสดงค่า 0
- ดึงค่า ExpenseAmount จาก BD-PS-011 ข้อมูล Investigate Expense (Actual)
- ดึงค่า Reinsurer's Share: Life จาก Step5
- ดึงค่า Reinsurer's Share: Accident จาก Step5
- ดึงค่า Reinsurer's Share: Dismemberment จาก Step5
- กำหนดค่า 0
- ดึงค่า Reinsurer's Share: Investigation & Legal Expense จาก Step5
- แสดงค่าดังนี้แสดงค่าว่าง กรณีเป็นรายการสินไหมที่อนุมัติในเดือนแสดงค่า "Decline Claim" กรณีเป็นสินไหม Decline ที่มีค่าใช้จ่ายสอบสวนแสดงค่า "Investigation Expense" กรณีเป็นสินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติม
- แสดงค่าว่าง กรณีเป็นรายการสินไหมที่อนุมัติในเดือน
- แสดงค่า "Decline Claim" กรณีเป็นสินไหม Decline ที่มีค่าใช้จ่ายสอบสวน
- แสดงค่า "Investigation Expense" กรณีเป็นสินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติม
- Step 7: ระบบคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No และ Effective Date และ Layer สำหรับ BDR FileStep 7.1: คำนวณยอดผลรวมส่วน original policyค่าที่ต้องคำนวณยอดผลรวม: Amount Paid: Life, Amount Paid: Accident, Amount Paid: Dismemberment, Amount Paid: DI, Amount Paid By Insurer: Investigation & Legal ExpenseStep 7.2: กำหนดค่า % SA share: Life และ % SA share: AD&D จาก Percentage Reinsurance ของแต่ละ LayerStep 7.3: คำนวณส่วน reinsurance ข้อมูลความหมายเงื่อนไขClaim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่ายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)ROUND(% SA Share Life × Amount Paid: Life, 2)Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่ายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: AD&D, 2)Claim Paid: Dismembermentค่าสินไหมกรณีสูญเสียอวัยวะคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Dismemberment คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: Dismemberment, 2)Claim Paid: DIค่าสินไหม Disability Incomeคำนวณจากส่วน Original Policyยอดผลรวม ค่า Amount Paid: DI คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: DI, 2)Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid By Insurer: Investigation & Legal Expense คูณด้วย Percentage Reinsurance ของ Layer 1Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- Step 7.1: คำนวณยอดผลรวมส่วน original policyค่าที่ต้องคำนวณยอดผลรวม: Amount Paid: Life, Amount Paid: Accident, Amount Paid: Dismemberment, Amount Paid: DI, Amount Paid By Insurer: Investigation & Legal Expense
- ค่าที่ต้องคำนวณยอดผลรวม: Amount Paid: Life, Amount Paid: Accident, Amount Paid: Dismemberment, Amount Paid: DI, Amount Paid By Insurer: Investigation & Legal Expense
- Step 7.2: กำหนดค่า % SA share: Life และ % SA share: AD&D จาก Percentage Reinsurance ของแต่ละ Layer
- Step 7.3: คำนวณส่วน reinsurance ข้อมูลความหมายเงื่อนไขClaim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่ายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)ROUND(% SA Share Life × Amount Paid: Life, 2)Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่ายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: AD&D, 2)Claim Paid: Dismembermentค่าสินไหมกรณีสูญเสียอวัยวะคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Dismemberment คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: Dismemberment, 2)Claim Paid: DIค่าสินไหม Disability Incomeคำนวณจากส่วน Original Policyยอดผลรวม ค่า Amount Paid: DI คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)ROUND(% SA Share AD&D × Amount Paid: DI, 2)Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมายคำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid By Insurer: Investigation & Legal Expense คูณด้วย Percentage Reinsurance ของ Layer 1Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
- คำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Life คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share Life)
- ROUND(% SA Share Life × Amount Paid: Life, 2)
- คำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: AD&D คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- ROUND(% SA Share AD&D × Amount Paid: AD&D, 2)
- คำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid: Dismemberment คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- ROUND(% SA Share AD&D × Amount Paid: Dismemberment, 2)
- คำนวณจากส่วน Original Policyยอดผลรวม ค่า Amount Paid: DI คูณด้วย สัดส่วนการรับประกันต่อ (% SA Share AD&D)
- ROUND(% SA Share AD&D × Amount Paid: DI, 2)
- คำนวณจากส่วน Original Policy ยอดผลรวมค่า Amount Paid By Insurer: Investigation & Legal Expense คูณด้วย Percentage Reinsurance ของ Layer 1
- Round(Percentage Reinsurance ของ Layer 1 x Amount Paid By Insurer: Investigation & Legal Expense,2)
| No | Claim Status | Approval Date อยู่ใน Quarter ปัจจุบัน | เคยส่ง RI Claim แล้ว | มี Investigation & Legal Expense | นำเข้าประมวลผล Claim | คำนวณ Investigation & Legal Expense | หมายเหตุ |
| 1 | Approve |  |  |  |  |  | ประมวลผลเฉพาะค่าสินไหม |
| 2 | Approve |  |  |  |  |  | กลุ่มที่ 1 (Optional Expense) |
| 3 | Decline |  |  |  |  |  | กลุ่มที่ 2 (Expense Only) |
| 4 | Decline |  |  |  |  |  | ไม่เข้าเงื่อนไข |
| 5 | Approve | (Quarter เก่า) |  |  |  |  | กลุ่มที่ 3 (Expense เพิ่มเติม) |
| 6 | Approve | (Quarter เก่า) |  |  |  |  | ไม่ประมวลผลซ้ำ |
| 7 | Any |  |  |  |  |  | นอกเงื่อนไข Quarter / Treaty |


===== PAGE 1313439789 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-04 Experience Refund =====
Overview
กระบวนการ RI Experience Refund มีวัตถุประสงค์เพื่อคำนวณเงิน Experience Refund ที่บริษัทคืนให้ลูกค้า และคำนวณส่วน Experience Refund ที่ Reinsurer ต้องรับผิดชอบภายใต้เงื่อนไขของ Treaty Gibraltar Group EB และต้องสะท้อนสัดส่วนความเสี่ยงที่ Reinsurer รับไว้จริง โดยไม่ให้ Reinsurer รับเงินคืนเกินกว่าเบี้ยสุทธิที่ควรได้รับ
Objective
- คัดเลือกเฉพาะกรมธรรม์ที่เข้าเงื่อนไขการจ่าย Experience Refund ในรอบ Quarter
- คำนวณ Experience Refund ที่บริษัทจ่ายให้ลูกค้า แยกตาม Life และ Accident
- คำนวณส่วน Experience Refund ที่จัดสรรให้ Reinsurer โดยอิงสัดส่วนเบี้ยและ Commission
- จัดเตรียมข้อมูลเพื่อใช้แสดงผลในรายงาน Bordereau ส่ง Reinsurer
Dependency
- การคำนวณ Experience Refund ต้องอ้างอิงผลลัพธ์จากการประมวลผล RI Premium หาก RI Premium ยังไม่เสร็จ ระบบจะไม่สามารถคำนวณ Experience Refund ได้
การคำนวณ RI Experience Refund มีขั้นตอนดังต่อไปนี้
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูล Experience RefundBD-PS-009 ข้อมูล Experience Refund (Actual)ระบบจะเลือกรายการที่มี Effective Date อยู่ภายในช่วง Quarter ของปีก่อนหน้า (เนื่องจาก experience refund จะคำนวณเมื่อครบปีกรมธรรม์)ตัวอย่างรายงาน 2024Q2 → ระบบจะดึงรายการที่มี Effective Date อยู่ระหว่าง 01/04/2023 – 30/06/2024ข้อมูลกรมธรรม์BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์ ที่มีข้อมูล Experience RefundConfiguration RIBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition ข้อมูลกรมธรรม์ที่ยังมีผลบังคับ (Inforce) (R17)ข้อมูลเบี้ย และ movement สมาชิกBD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) BD-PS-008 ข้อมูล (R61) Premium and movement (Actual)
- ระบบจะเลือกรายการที่มี Effective Date อยู่ภายในช่วง Quarter ของปีก่อนหน้า (เนื่องจาก experience refund จะคำนวณเมื่อครบปีกรมธรรม์)
- ตัวอย่าง
- รายงาน 2024Q2 → ระบบจะดึงรายการที่มี Effective Date อยู่ระหว่าง 01/04/2023 – 30/06/2024
- ระบบเลือกข้อมูลทุกกรมธรรม์ ที่มีข้อมูล Experience Refund
- Step2: เงื่อนไขการคัดเลือกกรมธรรม์ที่นำมาคำนวณ ERประมวลผลเฉพาะกรมธรรม์ภายใต้ Treaty Gibraltar Group EB ตรวจสอบจาก BD-PS-001 ข้อมูล Master group policy (List of policy)เลือกเฉพาะกรมธรรม์ที่มีการบันทึก Experience Refund และมีผลใน Quarter ที่เลือก ตัวอย่าง:ทำรายงาน Actual 2024Q3กรมธรรม์ที่มี ER ในรอบนี้ ต้องเป็นกรมธรรม์ที่ เริ่มสัญญาในเดือน 7, 8 หรือ 9กรมธรรม์ที่จะได้รับ ER ต้อง:มี Effective Date ย้อนหลังครบ 1 ปีเป็นกรมธรรม์ที่ ไม่ Lapseตัวอย่างกรมธรรม์ GH1234 เริ่มสัญญา 01/08/2024ทำรายงาน Actual 2024Q3การจ่าย ER จะเป็นของปีกรมธรรม์ก่อนหน้า คือ 01/08/2023 – 31/07/2024
- ประมวลผลเฉพาะกรมธรรม์ภายใต้ Treaty Gibraltar Group EB ตรวจสอบจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- เลือกเฉพาะกรมธรรม์ที่มีการบันทึก Experience Refund และมีผลใน Quarter ที่เลือก ตัวอย่าง:ทำรายงาน Actual 2024Q3กรมธรรม์ที่มี ER ในรอบนี้ ต้องเป็นกรมธรรม์ที่ เริ่มสัญญาในเดือน 7, 8 หรือ 9
- ตัวอย่าง:ทำรายงาน Actual 2024Q3กรมธรรม์ที่มี ER ในรอบนี้ ต้องเป็นกรมธรรม์ที่ เริ่มสัญญาในเดือน 7, 8 หรือ 9
- ทำรายงาน Actual 2024Q3
- กรมธรรม์ที่มี ER ในรอบนี้ ต้องเป็นกรมธรรม์ที่ เริ่มสัญญาในเดือน 7, 8 หรือ 9
- กรมธรรม์ที่จะได้รับ ER ต้อง:มี Effective Date ย้อนหลังครบ 1 ปีเป็นกรมธรรม์ที่ ไม่ Lapseตัวอย่างกรมธรรม์ GH1234 เริ่มสัญญา 01/08/2024ทำรายงาน Actual 2024Q3การจ่าย ER จะเป็นของปีกรมธรรม์ก่อนหน้า คือ 01/08/2023 – 31/07/2024
- มี Effective Date ย้อนหลังครบ 1 ปี
- เป็นกรมธรรม์ที่ ไม่ Lapse
- ตัวอย่างกรมธรรม์ GH1234 เริ่มสัญญา 01/08/2024ทำรายงาน Actual 2024Q3การจ่าย ER จะเป็นของปีกรมธรรม์ก่อนหน้า คือ 01/08/2023 – 31/07/2024
- กรมธรรม์ GH1234 เริ่มสัญญา 01/08/2024
- ทำรายงาน Actual 2024Q3
- การจ่าย ER จะเป็นของปีกรมธรรม์ก่อนหน้า คือ 01/08/2023 – 31/07/2024
- กรณีกรมธรรม์ที่มีความคุ้มครองทั้ง Life และ Accident ให้ระบบคำนวณแยกเป็น 2 รายการ
- Step3: เตรียมข้อมูลจำนวนสมาชิกทั้งหมดในปีกรมธรรม์ ดังนี้ดึงข้อมูลสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Periodที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateดึงค่า NoMemberLife, NoMemberAccidentDeath
- ดึงข้อมูลสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) ตามประเภททุนคุ้มครอง
- ระบบเลือกเฉพาะรายการที่ Periodที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDate
- ดึงค่า NoMemberLife, NoMemberAccidentDeath
- Step3.1: เตรียมข้อมูลกรมธรรม์สำหรับออกรายงาน BDRดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผลหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการRI No.เลขอ้างอิงการส่งงานประกันต่อแสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Nameชื่อกรมธรรม์แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Nature of Businessประเภทธุรกิจของกรมธรรม์แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Mode of Paymentโหมดชำระเบี้ยดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3Pol. Yr.ปีกรมธรรม์จากการคำนวณจาก RICommencementDateดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)GIB - RI Statusสถานะกรมธรรม์ที่คิดจากปีกรมธรรม์จากการคำนวณ RICommencementDateสถานะของกรมธรรม์สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากสถานะ และปีกรมธรรม์ของ ri โดยมีหลักการดังนี้ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น LapsedPolicy Statusสถานะกรมธรรม์ดึงค่า GIB - RI Status ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2Renewal/ Lapsed Dateวันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)RICommencementDate วันเริ่มสัญญาครั้งแรกของ RIRICommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017CommencementDate วันเริ่มสัญญาครั้งแรกดึงค่า Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Master Pol Yr.ปีกรมธรรม์จากระบบหน้าบ้านดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นดึงค่าสถานะ GIB - RI Status ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024ตัวคูณตาม Payment Mode ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2Premium Rate (% p.a.): Lifeอัตราเบี้ยประกันชีวิตรายปีดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่งPremium Rate (% p.a.): AD&Dอัตราเบี้ยประกันอุบัติเหตุรายปีดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
- แสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0
- หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1
- หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2
- หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017
- EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- Pol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New Business
- Pol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforce
- กรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed
- ดึงค่า GIB - RI Status
- ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0
- หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1
- หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2
- ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆ
- หากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงค่าสถานะ GIB - RI Status
- ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- ตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024
- EffectiveDate: 01/01/2024
- EndDate: 31/12/2024
- Policy Period: 01/01/2024 – 31/12/2024
- กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)
- ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024
- Effective Date: 01/01/2024
- Lapse Date: 01/01/2025
- Policy Period: 01/01/2024 – 31/12/2024
- ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2
- ดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- ดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)
- มีการ ROUND ทศนิยม 2 ตำแหน่ง
- Step4: คำนวณ ค่าดังนี้หัวข้อคำอธิบายเงื่อนไขการบันทึกรายการGroup No.รหัสอ้างอิงของกรมธรรม์ที่มีการคำนวณและจ่าย Experience Refund ในรอบการประมวลผล (Period) ที่เลือกโดยระบบจะใช้ Group No. เพื่อระบุว่าเงิน Experience Refund รายการนี้เป็นของกรมธรรม์ใด และเป็นของความคุ้มครองประเภทใดGroup No. ต้องอ้างอิงจาก PolicyNo ของกรมธรรม์ที่มีการจ่าย Experience Refund1 Group No. = 1 กรมธรรม์ + 1 ประเภทความคุ้มครองระบบต้อง แยก Group No. ตามประเภทความคุ้มครอง ดังนี้:LifeAccident (ถ้ามี)PolicyNo แสดงค่า PolicyNo จาก BD-PS-009 ข้อมูล Experience Refund (Actual)CoverageType แสดงค่า ดังนี้Life สำหรับรายการที่เป็นความคุ้มครอง Lifeตรวจสอบจาก ค่า PremiumLife > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Accident สำหรับรายการที่เป็นความคุ้มครอง Accident ตรวจสอบจาก ค่า PremiumAccident > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Policy Yearปีกรมธรรม์สำหรับส่ง Reinsurerใช้ค่าจาก Pol. Yr. จาก step 3.1 ที่เป็นปีกรมธรรม์จากการคำนวณจาก RICommencementDateNumber of memberจำนวนสมาชิกทั้งหมดในปีกรมธรรม์แยกตามความคุ้มครองแสดงค่า NoMemberLife หรือ NoMemberAccidentDeath จาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDateExperience Refund Rate (A)อัตรา % Experience Refundแสดงค่า PercentExpRefund จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Expense at the t policy year (Et)อัตราค่าใช้จ่ายแสดงค่า PercentExpense จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Gross Premium at the t policy year (Pt)เบี้ยรวมทั้งปีกรมธรรม์แสดงค่า PremiumLife หรือ PremiumAccident จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Claimค่าสินไหมรวมทั้งปีกรมธรรม์กรณี CoverageType = Life แสดงค่า Claim จาก BD-PS-009 ข้อมูล Experience Refund (Actual)กรณี CoverageType = Accident กำหนดค่าเป็น 0 เนื่องจากรอปรับเพิ่มเติมใน CR After Golive ให้ระบบประกันกลุ่ม แยกยอดสินไหมตาม coverage type มาให้Loss carried forwardยอดติดลบยกยอดมาจากปีก่อนหน้ากรณี CoverageType = Life แสดงค่า ExpRefundPreviousYear จาก BD-PS-009 ข้อมูล Experience Refund (Actual)กรณี CoverageType = Accident กำหนดค่าเป็น 0Claims Paid at the t policy year (Ct) *ค่าสินไหมรวมทั้งปีกรมธรรม์กรณี CoverageType = Life คำนวณจาก Claim - Loss carried forwardกรณี CoverageType = Accident กำหนดค่าเป็น 0 เนื่องจากรอปรับเพิ่มเติมใน CR After GoliveOriginal Experience Refund paid by the Ceding Companyเงิน ER ที่บริษัทคืนลูกค้าแบ่งเป็น 2 กรณีกรณี Life: [PremiumLife x (1 - %PercentExpense)) - (Claim - Loss carried forward)] x %Experience Refundกรณี Accident: [PremiumAccident x (1 - %PercentExpense )) - Claim] x %Experience Refundมีการ round ทศนิยม 2 ตำแหน่ง Net reinsurance premium to the Reinsurerเบี้ย RI สุทธิย้อนหลังทั้งปีแบ่งเป็น 2 กรณีกรณี Life: ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&D จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครองReinsurance CommissionCommission RI ย้อนหลังทั้งปีแบ่งเป็น 2 กรณีกรณี Life: ดึงค่าจากส่วน reinsurance ค่า RI Commission: Life จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&D จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง Reinsurance Experience Refundเงิน ER ที่ Reinsurer ต้องรับผิดชอบคำนวณจำนวน Experience Refund ที่จัดสรรให้ Reinsurer โดยต้องสะท้อนสัดส่วนความเสี่ยงที่ Reinsurer รับไว้จริง และ ไม่ทำให้ Reinsurer ได้รับเงินคืนเกินกว่าเบี้ยสุทธิที่ควรได้รับสูตรการคำนวณIf Experience Refund ที่คำนวณตามสัดส่วน ≤ Net Reinsurance Premium − Reinsurance Commission → ใช้ค่าที่คำนวณตามสัดส่วนElse → ใช้ค่า Net Reinsurance Premium − Reinsurance Commissionสูตรการคำนวณของแต่ละค่าExperience Refund มาจากNet reinsurance premium to the Reinsurer หารGross Premium at the t policy year (Pt)คูณOriginal Experience Refund paid by the Ceding CompanyNet Reinsurance Premium มาจาก Net reinsurance premium to the ReinsurerReinsurance Commission มาจาก Reinsurance Commissionค่าที่คำนวณตามสัดส่วน มาจาก Experience Refundมีการ round ทศนิยม 2 ตำแหน่ง Click here to expand... =IF(ROUND([Net reinsurance premium to the Reinsurer]/[Gross Premium at the t policy year (Pt)]*[Original Experience Refund paid by the Ceding Company],2)<=([Net reinsurance premium to the Reinsurer]-[Reinsurance Commission]),ROUND([Net reinsurance premium to the Reinsurer]/[Gross Premium at the t policy year (Pt)]*[Original Experience Refund paid by the Ceding Company],2),ROUND(([Net reinsurance premium to the Reinsurer]-[Reinsurance Commission]),2))
- แสดงค่า PolicyNo จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- แสดงค่า ดังนี้Life สำหรับรายการที่เป็นความคุ้มครอง Lifeตรวจสอบจาก ค่า PremiumLife > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)Accident สำหรับรายการที่เป็นความคุ้มครอง Accident ตรวจสอบจาก ค่า PremiumAccident > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- Life สำหรับรายการที่เป็นความคุ้มครอง Lifeตรวจสอบจาก ค่า PremiumLife > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- ตรวจสอบจาก ค่า PremiumLife > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- Accident สำหรับรายการที่เป็นความคุ้มครอง Accident ตรวจสอบจาก ค่า PremiumAccident > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- ตรวจสอบจาก ค่า PremiumAccident > 0 จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- ใช้ค่าจาก Pol. Yr. จาก step 3.1 ที่เป็นปีกรมธรรม์จากการคำนวณจาก RICommencementDate
- แสดงค่า NoMemberLife หรือ NoMemberAccidentDeath จาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) BD-PS-008 ข้อมูล (R61) Premium and movement (Actual) ตามประเภททุนคุ้มครองระบบเลือกเฉพาะรายการที่ Period ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDate
- ระบบเลือกเฉพาะรายการที่ Period ที่ตรงกับเดือนเริ่มต้นของปีกรมธรรม์ EffectiveDate
- แสดงค่า PercentExpRefund จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- แสดงค่า PercentExpense จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- แสดงค่า PremiumLife หรือ PremiumAccident จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- กรณี CoverageType = Life แสดงค่า Claim จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- กรณี CoverageType = Accident กำหนดค่าเป็น 0 เนื่องจากรอปรับเพิ่มเติมใน CR After Golive ให้ระบบประกันกลุ่ม แยกยอดสินไหมตาม coverage type มาให้
- กรณี CoverageType = Life แสดงค่า ExpRefundPreviousYear จาก BD-PS-009 ข้อมูล Experience Refund (Actual)
- กรณี CoverageType = Accident กำหนดค่าเป็น 0
- กรณี CoverageType = Life คำนวณจาก Claim - Loss carried forward
- กรณี CoverageType = Accident กำหนดค่าเป็น 0 เนื่องจากรอปรับเพิ่มเติมใน CR After Golive
- แบ่งเป็น 2 กรณีกรณี Life: [PremiumLife x (1 - %PercentExpense)) - (Claim - Loss carried forward)] x %Experience Refundกรณี Accident: [PremiumAccident x (1 - %PercentExpense )) - Claim] x %Experience Refund
- กรณี Life: [PremiumLife x (1 - %PercentExpense)) - (Claim - Loss carried forward)] x %Experience Refund
- กรณี Accident: [PremiumAccident x (1 - %PercentExpense )) - Claim] x %Experience Refund
- มีการ round ทศนิยม 2 ตำแหน่ง
- แบ่งเป็น 2 กรณีกรณี Life: ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&D จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Life: ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&D จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Life: ดึงค่าจากส่วน reinsurance ค่า TL Premium: Life จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Accident: ดึงค่าจากส่วน reinsurance ค่า TL Premium: AD&D จาก BD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง
- แบ่งเป็น 2 กรณีกรณี Life: ดึงค่าจากส่วน reinsurance ค่า RI Commission: Life จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&D จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Life: ดึงค่าจากส่วน reinsurance ค่า RI Commission: Life จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQกรณี Accident: ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&D จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Life: ดึงค่าจากส่วน reinsurance ค่า RI Commission: Life จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- กรณี Accident: ดึงค่าจากส่วน reinsurance ค่า RI Commission: AD&D จากBD-AP-001-02-01 เงื่อนไขการบันทึกข้อมูล Report สำหรับส่ง Reinsurer - Bordereau_YYYYQQ
- ระบบเลือกทุกรายการภายใต้ปีกรมธรรม์ จากทุกรายงาน Quarter Period ตั้งแต่เริ่มสัญญา จนถึง Quarter ที่สิ้นสุดความคุ้มครอง
- คำนวณจำนวน Experience Refund ที่จัดสรรให้ Reinsurer โดยต้องสะท้อนสัดส่วนความเสี่ยงที่ Reinsurer รับไว้จริง และ ไม่ทำให้ Reinsurer ได้รับเงินคืนเกินกว่าเบี้ยสุทธิที่ควรได้รับ
- สูตรการคำนวณIf Experience Refund ที่คำนวณตามสัดส่วน ≤ Net Reinsurance Premium − Reinsurance Commission → ใช้ค่าที่คำนวณตามสัดส่วนElse → ใช้ค่า Net Reinsurance Premium − Reinsurance Commissionสูตรการคำนวณของแต่ละค่าExperience Refund มาจากNet reinsurance premium to the Reinsurer หารGross Premium at the t policy year (Pt)คูณOriginal Experience Refund paid by the Ceding CompanyNet Reinsurance Premium มาจาก Net reinsurance premium to the ReinsurerReinsurance Commission มาจาก Reinsurance Commissionค่าที่คำนวณตามสัดส่วน มาจาก Experience Refund
- If Experience Refund ที่คำนวณตามสัดส่วน ≤ Net Reinsurance Premium − Reinsurance Commission → ใช้ค่าที่คำนวณตามสัดส่วน
- Else → ใช้ค่า Net Reinsurance Premium − Reinsurance Commission
- สูตรการคำนวณของแต่ละค่าExperience Refund มาจากNet reinsurance premium to the Reinsurer หารGross Premium at the t policy year (Pt)คูณOriginal Experience Refund paid by the Ceding CompanyNet Reinsurance Premium มาจาก Net reinsurance premium to the ReinsurerReinsurance Commission มาจาก Reinsurance Commissionค่าที่คำนวณตามสัดส่วน มาจาก Experience Refund
- Experience Refund มาจากNet reinsurance premium to the Reinsurer หารGross Premium at the t policy year (Pt)คูณOriginal Experience Refund paid by the Ceding Company
- Net reinsurance premium to the Reinsurer หาร
- Gross Premium at the t policy year (Pt)คูณ
- Original Experience Refund paid by the Ceding Company
- Net Reinsurance Premium มาจาก Net reinsurance premium to the Reinsurer
- Reinsurance Commission มาจาก Reinsurance Commission
- ค่าที่คำนวณตามสัดส่วน มาจาก Experience Refund
- มีการ round ทศนิยม 2 ตำแหน่ง
- Step5: ระบบบันทึกข้อมูลเพื่อออกรายงาน A09-12-3 ตัวอย่าง output file - BDR - Experience Refundหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการDisplay Ruleตัวอย่างGroup No.รหัสอ้างอิงของกรมธรรม์ที่มีการคำนวณและจ่าย Experience Refund ในรอบการประมวลผล (Period) ที่เลือกโดยระบบจะใช้ Group No. เพื่อระบุว่าเงิน Experience Refund รายการนี้เป็นของกรมธรรม์ใด และเป็นของความคุ้มครองประเภทใดGroup No. ต้องอ้างอิงจาก PolicyNo ของกรมธรรม์ที่มีการจ่าย Experience Refundแสดงค่า Policy No_CoverageType จาก BD-AP-001-02-04 Experience Refund1 Group No. = 1 กรมธรรม์ + 1 ประเภทความคุ้มครองระบบต้อง แยก Group No. ตามประเภทความคุ้มครอง ดังนี้:LifeAccident (ถ้ามี)GL1644_LifePolicy Yearปีกรมธรรม์สำหรับส่ง Reinsurerแสดงค่า Pol. Yr. จาก BD-AP-001-02-04 Experience Refundเป็นปีกรมธรรม์จากการคำนวณจาก RICommencementDateแสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม1Number of memberจำนวนสมาชิกทั้งหมดในปีกรมธรรม์ แยกตามความคุ้มครองแสดงค่า Number of member จาก BD-AP-001-02-04 Experience Refund แยกตามความคุ้มครองแสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม2,294Experience Refund Rate (A)อัตรา % Experience Refundแสดงค่า Experience Refund Rate (A) จาก BD-AP-001-02-04 Experience Refundแสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยมแสดงหน่วยเป็นเปอร์เซ็นต์ (%)75%Expense at the t policy year (Et)อัตราค่าใช้จ่ายแสดงค่า Expense at the t policy year (Et) จาก BD-AP-001-02-04 Experience Refundแสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยมแสดงหน่วยเป็นเปอร์เซ็นต์ (%)25%Gross Premium at the t policy year (Pt)เบี้ยรวมทั้งปีกรมธรรม์แสดงค่า Gross Premium at the t policy year (Pt) จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง230,569.22Claims Paid at the t policy year (Ct) *ค่าสินไหมรวมทั้งปีกรมธรรม์แสดงค่า Claims Paid at the t policy year (Ct) * จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง0.00Original Experience Refund paid by the Ceding Companyเงิน ER ที่บริษัทคืนลูกค้าแสดงค่า Original Experience Refund paid by the Ceding Company จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง129,695.19Net reinsurance premium to the Reinsurerเบี้ย RI สุทธิย้อนหลังทั้งปีแสดงค่า Net reinsurance premium to the Reinsurer จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง34,636.21Reinsurance CommissionCommission RI ย้อนหลังทั้งปีแสดงค่า Reinsurance Commission จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง17,318.11Reinsurance Experience Refundเงิน ER ที่ Reinsurer ต้องรับผิดชอบแสดงค่า Reinsurance Experience Refund จาก BD-AP-001-02-04 Experience Refundแสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง17,318.10
- Group No. ต้องอ้างอิงจาก PolicyNo ของกรมธรรม์ที่มีการจ่าย Experience Refund
- แสดงค่า Policy No_CoverageType จาก BD-AP-001-02-04 Experience Refund
- 1 Group No. = 1 กรมธรรม์ + 1 ประเภทความคุ้มครอง
- ระบบต้อง แยก Group No. ตามประเภทความคุ้มครอง ดังนี้:LifeAccident (ถ้ามี)
- Life
- Accident (ถ้ามี)
- แสดงค่า Pol. Yr. จาก BD-AP-001-02-04 Experience Refund
- เป็นปีกรมธรรม์จากการคำนวณจาก RICommencementDate
- แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม
- แสดงค่า Number of member จาก BD-AP-001-02-04 Experience Refund แยกตามความคุ้มครอง
- แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม
- แสดงค่า Experience Refund Rate (A) จาก BD-AP-001-02-04 Experience Refund
- แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม
- แสดงหน่วยเป็นเปอร์เซ็นต์ (%)
- แสดงค่า Expense at the t policy year (Et) จาก BD-AP-001-02-04 Experience Refund
- แสดงค่าเป็นจำนวนเต็ม โดยไม่แสดงทศนิยม
- แสดงหน่วยเป็นเปอร์เซ็นต์ (%)
- แสดงค่า Gross Premium at the t policy year (Pt) จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- แสดงค่า Claims Paid at the t policy year (Ct) * จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- แสดงค่า Original Experience Refund paid by the Ceding Company จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- แสดงค่า Net reinsurance premium to the Reinsurer จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- แสดงค่า Reinsurance Commission จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- แสดงค่า Reinsurance Experience Refund จาก BD-AP-001-02-04 Experience Refund
- แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง
- Step6: ระบบคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No และ Effective Date ก่อนนำไปออก A09-12-1 ตัวอย่าง output file - BDR - Bordereau_YYYYQQค่าที่ต้องคำนวณยอดผลรวม: Original Experience Refund paid by the Ceding Company และ Reinsurance Experience Refund
- ค่าที่ต้องคำนวณยอดผลรวม: Original Experience Refund paid by the Ceding Company และ Reinsurance Experience Refund


===== PAGE 1312719567 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ =====
Overview
กระบวนการจัดเตรียมข้อมูลสำหรับจัดทำ Report สำหรับส่ง Reinsurer - Bordereau มีวัตถุประสงค์เพื่อใช้ส่งข้อมูลให้บริษัท Reinsurance ซึ่งประกอบด้วย ข้อมูลเบี้ยประกัน (Premium), ข้อมูลสินไหม (Claim) และข้อมูล Experience Refund ในรอบการประมวลผลแบบ Quarterly
Objective
- เพื่อจัดทำไฟล์ BDR สำหรับส่งบริษัท Reinsurance ตามรอบการประมวลผลแบบ Quarterly
- เพื่อสรุปข้อมูล Premium, Commission, Claim, และ Experience Refund ที่เกิดขึ้นจริงในรอบไตรมาสอย่างถูกต้อง
- เพื่อจัดเตรียมข้อมูลในระดับ Policy No และ Effective Date สำหรับใช้เป็นฐานข้อมูลในการรายงานและอ้างอิงกับ Reinsurer
Dependency
- การจัดเตรียมรายงาน BDR ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-02-01 RI Premium, BD-AP-001-02-02 RI Commission, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล BDR ได้
Scope
- 1 กรมธรรม์จะต้องแสดงข้อมูลจำนวน 4 บรรทัด เสมอ โดยประกอบด้วยข้อมูล Layer 1ข้อมูล Layer 2ข้อมูล Layer 3ข้อมูล ผลรวมของ Layer 1–3
- ข้อมูล Layer 1
- ข้อมูล Layer 2
- ข้อมูล Layer 3
- ข้อมูล ผลรวมของ Layer 1–3
- กรณีกรมธรรม์มีความคุ้มครองเฉพาะ Layer 1 ระบบจะต้องสร้าง (Generate) ข้อมูลของ Layer 2 และ Layer 3 เพิ่มเติม โดยกำหนดค่าที่เกี่ยวข้องทั้งหมดเป็น 0 เพื่อให้โครงสร้างข้อมูลของทุกกรมธรรม์ในไฟล์ BDR เป็นรูปแบบเดียวกัน
การจัดเตรียมรายงาน BDR มีขั้นตอนดังต่อไปนี้
- Step1: เตรียมข้อมูล โดยมีทั้งหมด 3 กลุ่มข้อมูลกลุ่มที่ 1: Claim ดึงข้อมูล Claim จาก Step 7 BD-AP-001-02-03 RI Claimระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบันคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No, Effective Date, Layerกลุ่มที่ 2: Experience Refund ดึงข้อมูล Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refundระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบันคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No และ Effective Dateกลุ่มที่ 3: RI Premium & Commission ดึงข้อมูลจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-02 RI Commissionระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- กลุ่มที่ 1: Claim ดึงข้อมูล Claim จาก Step 7 BD-AP-001-02-03 RI Claimระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบันคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No, Effective Date, Layer
- ดึงข้อมูล Claim จาก Step 7 BD-AP-001-02-03 RI Claim
- ระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- คำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No, Effective Date, Layer
- กลุ่มที่ 2: Experience Refund ดึงข้อมูล Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refundระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบันคำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No และ Effective Date
- ดึงข้อมูล Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refund
- ระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- คำนวณยอดผลรวม และสรุปข้อมูลในระดับ Policy No และ Effective Date
- กลุ่มที่ 3: RI Premium & Commission ดึงข้อมูลจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-02 RI Commissionระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- ดึงข้อมูลจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-02 RI Commission
- ระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- Step2: เตรียมข้อมูลกรมธรรม์ทั่วไปดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ใน Step1
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ใน Step1
| หัวข้อ | คำอธิบาย | Process | เงื่อนไขการบันทึกรายการ | Display Rule | ตัวอย่าง |
| Quarterly Reinsurance List : Year YYYY QQ | ระบุปีและไตรมาสของรายงาน โดยแสดงค่าตาม Quarter Period |  | - |  | Quarterly Reinsurance List : Year 2024 2Q |
| No. YYYY QQ | ระบุปีและไตรมาสของรายงาน โดยแสดงค่าตาม Quarter Period |  | - |  | 2024 2Q |
| RI No. | เลขอ้างอิงการส่งงานประกันต่อ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 1701001 |
| Pol No | เลขกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | GH032 |
| Policy Name | ชื่อกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | FELIX HOTEL MANAGEMENT CO., LTD |
| Nature of Business | ประเภทธุรกิจของกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | HOTEL BUSINESS |
| Mode of Payment | โหมดชำระเบี้ย | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 0 |
| Policy Status | สถานะกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่า Policy Status จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 2 |
| Comm. Date | วันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurer | ข้อมูลกรมธรรม์ | แสดงค่าจาก RICommencementDate จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 01/01/2017 |
| Renewal/ Lapsed Date | วันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 01/01/2024 |
| Pol. Yr. | ปีกรมธรรม์ | ข้อมูลกรมธรรม์ | แสดงค่า Pol. Yr. จาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refundเป็นปีที่ต้องคำนวณตามเงื่อนไขเลข reinsurno | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3 | 8 |
| Policy Period | ช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงผลเฉพาะรายการผลรวมของ Layer 1–3แสดงผลในรูปแบบ วัน/เดือน/ปี | 01/01/2024 - 31/12/2024 |
| Premium Rate (% p.a.): Life | อัตราเบี้ยประกันชีวิตรายปี | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงข้อมูลที่รายการผลรวมของ Layer 1–3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 2.70 |
| Premium Rate (% p.a.): AD&D | อัตราเบี้ยประกันอุบัติเหตุรายปี | ข้อมูลกรมธรรม์ | แสดงค่าจาก BD-AP-001-02-01 RI Premium, BD-AP-001-02-03 RI Claim, BD-AP-001-02-04 Experience Refund | แสดงข้อมูลที่รายการผลรวมของ Layer 1–3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 1.32 |
| SA Layer | ชั้นทุนประกันของสมาชิก |  | แสดงค่า ดังนี้แสดงค่า 1 กรณีเป็นข้อมูล Layer 1แสดงค่า 2 กรณีเป็นข้อมูล Layer 2แสดงค่า 3 กรณีเป็นข้อมูล Layer 3แสดงค่า ว่าง กรณีเป็นผลรวมของ Layer 1-3 |  | 1 |
| ส่วน Original Policy |  |  |  |  |  |
| Members: Life | จำนวนสมาชิกความคุ้มครอง Life แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงผลเป็นจำนวนเต็ม (ไม่มีทศนิยม)กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 162 |
| Members: AD&D | จำนวนสมาชิกความคุ้มครอง AD&D แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงผลเป็นจำนวนเต็ม (ไม่มีทศนิยม)กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 162 |
| TL SA: Life | ทุนประกันรวม (Sum Assured) ของ Life แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 35,200,000.00 |
| TL SA: AD&D | ทุนประกันรวม (Sum Assured) ของ AD&D แยกตาม Layer (L1–L3) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: Life | เบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: Life | เบี้ยประกันต่อ Life สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: Life | เบี้ยปรับเพิ่ม Life (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: AD&D | เบี้ยปรับเพิ่ม AD&D (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: Life | เบี้ยคืน Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: AD&D | เบี้ยคืน AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: Life | เบี้ยประกันต่อ Life รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: AD&D | เบี้ยประกันต่อ AD&D รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Original Policy แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Life | ค่าสินไหม Life ที่บริษัทจ่าย | Claim | แสดงค่ายอดผลรวม Amount Paid: Life จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: AD&D | ค่าสินไหม AD&D ที่บริษัทจ่าย | Claim | แสดงค่ายอดผลรวม Amount Paid: Accident จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Dismemberment | ค่าสินไหม Dismemberment | Claim | แสดงค่ายอดผลรวม Amount Paid: Dismemberment จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Claim Paid: DI | ค่าสินไหม Disability Income | Claim | แสดงค่ายอดผลรวม Amount Paid: DI จาก Step 7.1 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | กรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | 0.00 |
| Investigation & Legal Expense | ค่าใช้จ่ายสอบสวนและกฎหมาย | Claim | แสดงค่ายอดผลรวม Amount Paid By Insurer: Investigation & Legal Expense จาก Step 6 BD-AP-001-02-03 RI Claim | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: Life | เงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่ายอดผลรวม Original Experience Refund paid by the Ceding Company จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Life | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: AD&D | เงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่ายอดผลรวม Original Experience Refund paid by the Ceding Company จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Accident | แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| ส่วน Reinsurance |  |  |  |  |  |
| % SA share: Life | สัดส่วนทุนประกันต่อที่ใช้สำหรับ Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวรวม Layer 1–3 แสดงค่าว่าง | 15% |
| % SA share: AD&D | สัดส่วนทุนประกันต่อที่ใช้สำหรับ AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม)แถวรวม Layer 1–3 แสดงค่าว่าง | 15% |
| TL SR: Life | จำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 5,280,000.00 |
| TL SR: AD&D | จำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 5,280,000.00 |
| New Business Premium: Life | เบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| New Business Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: Life | เบี้ยประกันต่อ Life สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Renewal Premium: AD&D | เบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: Life | เบี้ยปรับเพิ่ม Life (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Revivals Premium: AD&D | เบี้ยปรับเพิ่ม AD&D (Movement) | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: Life | เบี้ยคืน Life | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Refund Premium: AD&D | เบี้ยคืน AD&D | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: Life | เบี้ยประกันต่อ Life รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| TL Premium: AD&D | เบี้ยประกันต่อ AD&D รวมทั้งหมด | Premium | ได้ค่าจาก Step 11 จาก BD-AP-001-02-01 RI Premium คอลัมน์ ส่วน Reinsurance แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Life | ค่าสินไหม Life ที่บริษัทจ่าย | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: Life จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: AD&D | ค่าสินไหม AD&D ที่บริษัทจ่าย | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: AD&D จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: Dismemberment | ค่าสินไหมกรณีสูญเสียอวัยวะ | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: Dismemberment จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Claim Paid: DI | ค่าสินไหม Disability Income | Claim | แสดงจากส่วน Reinsurance ค่า Claim Paid: DI จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Investigation & Legal Expense | ค่าใช้จ่ายสอบสวนและกฎหมาย | Claim | แสดงจากส่วน Reinsurance ค่า Investigation & Legal Expense จาก Step 7.3 BD-AP-001-02-03 RI Claim แยกตาม Layer (L1–L3) | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| RI Commission: Life | ค่าคอมมิชชั่นประกันต่อ Life | Commission | คำนวณจากส่วน reinsurance ค่า TL Premium: Life แยกตาม Layer (L1–L3) คูณด้วย RI Commission Rate%ROUND(TL Premium: Life × RI Commission Rate%, 2)RI Commission Rate% ดึงค่าจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ RI Commission Rate% ที่ถูกต้องสำหรับรอบประมวลผลนั้น | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| RI Commission: AD&D | ค่าคอมมิชชั่นประกันต่อ AD&D | Commission | คำนวณจากส่วน reinsurance ค่า TL Premium: AD&D แยกตาม Layer (L1–L3) คูณด้วย RI Commission Rate%ROUND(TL Premium: AD&D × RI Commission Rate%, 2)RI Commission Rate% ดึงค่าจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ RI Commission Rate% ที่ถูกต้องสำหรับรอบประมวลผลนั้น | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งกรณีรายการผลรวมของ Layer 1–3 ให้แสดงผลรวมของ Layer 1 - 3 | 0.00 |
| Experience Refund paid to clients: Life | เงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่า Reinsurance Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Life | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |
| Experience Refund paid to clients: AD&D | เงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน | Experience Refund | แสดงค่า Reinsurance Experience Refund จาก Step 5 BD-AP-001-02-04 Experience Refund ของรายการที่ CoverageType เป็น Accident | ผลลัพธ์ปัดเศษทศนิยม 2 ตำแหน่งแสดงผลเฉพาะที่ผลรวม 3 Layer | 0.00 |


===== PAGE 1313439902 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOA =====
Overview
กระบวนการจัดเตรียมข้อมูลสำหรับจัดทำ Report SOA
Objective
- เพื่อจัดทำไฟล์ EDW เพื่อนำเข้าเพื่อบันทึกบัญชี
- เพื่อจัดทำไฟล์ SOA
Dependency
- การจัดเตรียมรายงาน EDW ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล BDR ได้
Scope
- ไฟล์ข้อมูล EDW จะแสดง 1 บรรทัด ต่อ 1 กรมธรรม์ และปีกรมธรรม์
- ไฟล์ SOA มี 1 ไฟล์ต่อ 1 Quarter Periodกรณีเป็น Q4 หากมีการประมวลผล BD-AP-001-02-07 ประมวลผล Profit Commission ไฟล์ SOA จะต้องมีการอัปเดตค่า Profit Commission
- กรณีเป็น Q4 หากมีการประมวลผล BD-AP-001-02-07 ประมวลผล Profit Commission ไฟล์ SOA จะต้องมีการอัปเดตค่า Profit Commission
การจัดเตรียมรายงาน EDW มีขั้นตอนดังต่อไปนี้
- Step 1: ดึงข้อมูล BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ
- Step 2: คำนวณยอดผลรวมและสรุปข้อมูลในระดับ Policy No, Effective Date
- Step 3: บันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQ
การจัดเตรียมรายงาน SOA มีขั้นตอนดังต่อไปนี้
- Step 1: ดึงข้อมูล A09-12-5 ตัวอย่าง output file - EDW - Act_GIB_YYYYQQ
- Step 2: คำนวณยอดผลรวมในระดับ Treaty
- Step 3: บันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-6 ตัวอย่าง output file - EDW - SOA_Act_GIB_YYYYQQ


===== PAGE 1313439971 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-07 ประมวลผล Profit Commission =====
Overview
กระบวนการ Profit Commission มีหน้าที่สรุปผลกำไรหรือขาดทุนของสัญญาประกันต่อ (Reinsurance Treaty) ในระดับรายปี โดยอ้างอิงจากข้อมูลเบี้ยประกัน สินไหม ค่าใช้จ่าย และข้อมูลปรับปรุงจากรอบก่อนหน้า ระบบจะนำผลลัพธ์ดังกล่าวไปใช้คำนวณ Profit Commission เพื่อพิจารณาจำนวนเงินที่จะได้รับจาก Reinsurer ตามเงื่อนไขที่กำหนดใน Treaty การประมวลผลนี้จะดำเนินการเฉพาะเมื่อสิ้นสุดปีบัญชี (Actual Quarter 4) และใช้ข้อมูล Actual ของทั้งปีรวมกัน เพื่อให้สะท้อนผลการดำเนินงานของสัญญาประกันต่ออย่างครบถ้วน
Objective
- เพื่อคำนวณผลกำไรหรือขาดทุนของสัญญาประกันต่อในแต่ละปีตามเงื่อนไขของ Treaty
- เพื่อพิจารณาความมีสิทธิ์ในการคำนวณ Profit Commission ตามเกณฑ์ที่กำหนด (เช่น จำนวนสมาชิกขั้นต่ำ)
- เพื่อคำนวณ Profit Commission สำหรับปีปัจจุบัน เมื่อผลการดำเนินงานมีกำไร
- เพื่อรองรับการนำผลขาดทุนจากปีก่อนหน้ามาใช้ในการคำนวณต่อเนื่องข้ามปี
- เพื่อจัดทำรายงาน Profit Commission สำหรับใช้เป็นข้อมูลอ้างอิงทางธุรกิจและการเงินระหว่างบริษัทและ Reinsurer
Dependency
- การคำนวณ Profit comm ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ, BD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOA หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล Profit Commission ได้
การคำนวณ Profit Commission มีขั้นตอนดังต่อไปนี้
- เงื่อนไขในการประมวลผลระบบจะอนุญาตให้ประมวลผล เฉพาะไตรมาสที่ 4 (Quarter 4) ของปีที่เลือกเท่านั้นระบบจะตรวจสอบว่าปีที่เลือกมีข้อมูล Actual ครบทั้ง 4 ไตรมาส (Q1–Q4) แล้วหากข้อมูลยังไม่ครบ ระบบจะไม่อนุญาตให้ประมวลผลก่อนนำข้อมูลมาคำนวณ ระบบจะตรวจสอบว่ากรมธรรม์ (Policy No.) มี Effective Date อยู่ภายในช่วงที่กำหนดไว้ใน RI Condition ของ Treaty นั้นเพื่อให้เลือกใช้เงื่อนไขการคำนวณ (Configuration) ได้ถูกต้อง
- ระบบจะอนุญาตให้ประมวลผล เฉพาะไตรมาสที่ 4 (Quarter 4) ของปีที่เลือกเท่านั้น
- ระบบจะตรวจสอบว่าปีที่เลือกมีข้อมูล Actual ครบทั้ง 4 ไตรมาส (Q1–Q4) แล้วหากข้อมูลยังไม่ครบ ระบบจะไม่อนุญาตให้ประมวลผล
- หากข้อมูลยังไม่ครบ ระบบจะไม่อนุญาตให้ประมวลผล
- ก่อนนำข้อมูลมาคำนวณ ระบบจะตรวจสอบว่ากรมธรรม์ (Policy No.) มี Effective Date อยู่ภายในช่วงที่กำหนดไว้ใน RI Condition ของ Treaty นั้นเพื่อให้เลือกใช้เงื่อนไขการคำนวณ (Configuration) ได้ถูกต้อง
- กรมธรรม์ (Policy No.) มี Effective Date อยู่ภายในช่วงที่กำหนดไว้ใน RI Condition ของ Treaty นั้น
- เพื่อให้เลือกใช้เงื่อนไขการคำนวณ (Configuration) ได้ถูกต้อง
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูลปีก่อนหน้าBD-PS-015 ข้อมูลตั้งฐาน Profit Commissionระบบดึงรายการข้อมูลของ Quarter4 ในปีก่อนหน้าข้อมูล BDR BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQระบบดึงข้อมูลทุก Quarter ในปีConfiguration RIBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionระบบดึงข้อมูล Reserve for unearned premiums จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้นข้อมูลไฟล์ EDWBD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOAระบบดึงข้อมูลทุก Quarter ในปี
- ระบบดึงรายการข้อมูลของ Quarter4 ในปีก่อนหน้า
- ระบบดึงข้อมูลทุก Quarter ในปี
- ระบบดึงข้อมูล Reserve for unearned premiums จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ระบบดึงข้อมูลทุก Quarter ในปี
- Step2: เงื่อนไขเงื่อนไขที่ต้องผ่านก่อนคำนวณหาจำนวนสมาชิกที่ส่ง Reinsurer ตลอดทั้งปี “รวมทุกกรมธรรม์” และนับเฉพาะกรมธรรม์ที่มี Policy period ในปีนั้น ๆ ตรวจสอบจาก BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ ของ Quarter Q4 คำนวณยอดผลรวมของ Members: Lifeหากผลรวม > 200 คน ให้ระบบคำนวณ Profit Commissionหากผลรวม <= 200 ไม่คำนวณ Profit Commission
- หาจำนวนสมาชิกที่ส่ง Reinsurer ตลอดทั้งปี “รวมทุกกรมธรรม์” และนับเฉพาะกรมธรรม์ที่มี Policy period ในปีนั้น ๆ ตรวจสอบจาก BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ ของ Quarter Q4 คำนวณยอดผลรวมของ Members: Life
- ตรวจสอบจาก BD-AP-001-02-05 ประมวลผลออกรายงาน BDR - Bordereau_YYYYQQ ของ Quarter Q4
- คำนวณยอดผลรวมของ Members: Life
- หากผลรวม > 200 คน ให้ระบบคำนวณ Profit Commission
- หากผลรวม <= 200 ไม่คำนวณ Profit Commission
- Step3: คำนวณข้อมูลผลรวมเบี้ย, commission, claim, Experience Refund ปีของ Quarter Period ที่เลือกประมวลผล ดังนี้ดึงข้อมูลเบี้ยของทุก Quarter จาก BD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOAคำนวณ ดังนี้ ผลรวมเบี้ยทั้งปีของปีปัจจุบันผลรวมเบี้ย - ผลรวมเบี้ย Refundผลรวมเบี้ยคำนวณจาก RI NB Premium Life + RI NB Premium AD&D + RI Renewal Premium Life + RI Renewal Premium AD&D + RI Revival Premium Life + RI Revival Premium AD&Dผลรวมเบี้ย Refund คำนวณจาก RI Refund Premium Life + RI Refund Premium AD&Dผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบันRI Commission Life + RI Commission AD&Dผลรวมสินไหมทั้งปีของปีปัจจุบันRI Claim Paid Life + RI Claim Paid AD&D + RI Claim Paid Dismemberment + RI Claim Investigation & Legal Expenseผลรวม Experience Refund ทั้งปีของปีปัจจุบันExperience Refund Life + Experience Refund AD&D
- ดึงข้อมูลเบี้ยของทุก Quarter จาก BD-AP-001-02-06 ประมวลผลออกรายงาน EDW และ SOA
- คำนวณ ดังนี้ ผลรวมเบี้ยทั้งปีของปีปัจจุบันผลรวมเบี้ย - ผลรวมเบี้ย Refundผลรวมเบี้ยคำนวณจาก RI NB Premium Life + RI NB Premium AD&D + RI Renewal Premium Life + RI Renewal Premium AD&D + RI Revival Premium Life + RI Revival Premium AD&Dผลรวมเบี้ย Refund คำนวณจาก RI Refund Premium Life + RI Refund Premium AD&Dผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบันRI Commission Life + RI Commission AD&Dผลรวมสินไหมทั้งปีของปีปัจจุบันRI Claim Paid Life + RI Claim Paid AD&D + RI Claim Paid Dismemberment + RI Claim Investigation & Legal Expenseผลรวม Experience Refund ทั้งปีของปีปัจจุบันExperience Refund Life + Experience Refund AD&D
- ผลรวมเบี้ย - ผลรวมเบี้ย Refundผลรวมเบี้ยคำนวณจาก RI NB Premium Life + RI NB Premium AD&D + RI Renewal Premium Life + RI Renewal Premium AD&D + RI Revival Premium Life + RI Revival Premium AD&Dผลรวมเบี้ย Refund คำนวณจาก RI Refund Premium Life + RI Refund Premium AD&D
- ผลรวมเบี้ยคำนวณจาก RI NB Premium Life + RI NB Premium AD&D + RI Renewal Premium Life + RI Renewal Premium AD&D + RI Revival Premium Life + RI Revival Premium AD&D
- RI NB Premium Life + RI NB Premium AD&D + RI Renewal Premium Life + RI Renewal Premium AD&D + RI Revival Premium Life + RI Revival Premium AD&D
- ผลรวมเบี้ย Refund คำนวณจาก RI Refund Premium Life + RI Refund Premium AD&D
- RI Refund Premium Life + RI Refund Premium AD&D
- RI Commission Life + RI Commission AD&D
- RI Claim Paid Life + RI Claim Paid AD&D + RI Claim Paid Dismemberment + RI Claim Investigation & Legal Expense
- Experience Refund Life + Experience Refund AD&D
- Step4: คำนวณ profit commission ดังนี้ฟิลด์ ความหมาย เงื่อนไขการคำนวณIncomes (1) Unearned premium at the beginning of the current year;เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ ต้นปีบัญชีปัจจุบัน (Unearned Premium ต้นงวด)แสดงค่าเบี้ยของปีก่อนหน้า * Reserve for unearned premiums (50%)กรณีเป็นการ Quarter Year แรกที่ขึ้นระบบ ใช้ค่า Total Premium ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission * Reserve for unearned premiums% จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionกรณีไม่เป็นการ Quarter Year แรกที่ขึ้นระบบ ใช้ค่า (6) ของปีก่อนหน้า จาก ไฟล์ A09-12-7 ตัวอย่าง output file - Gibraltar - Profit Commission(2) Reserves for outstanding claims at the beginning of the current year (if any);เงินสำรองค่าสินไหมค้างจ่าย ณ ต้นปีบัญชีปัจจุบัน (ถ้ามี)แสดงค่าเป็น 0(3) Net premium income after deducting premium refunds for the current year;เบี้ยประกันสุทธิของปีปัจจุบัน หลังหักเบี้ยคืน (Refund Premium) แล้วแสดงค่า ผลรวมเบี้ยทั้งปีของปีปัจจุบัน จาก Step 3Total (A)ผลรวมของรายได้ทั้งหมดในส่วน Incomesคำนวณจาก (1) + (2) + (3)Outgoes (4) Claims, Investigation and legal expenses paid (Inclusive of those paid by special remittances, if any) in the current year;ค่าสินไหม ค่าตรวจสอบ และค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในปีปัจจุบันรวมถึงรายการที่จ่ายผ่านช่องทางพิเศษ (ถ้ามี)แสดงค่า ผลรวมสินไหมทั้งปีของปีปัจจุบัน จาก Step 3(5) Business expenses of the Reinsurer for the current year ((3) x Administrative expenses%);ค่าใช้จ่ายในการดำเนินงานของ Reinsurerคำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)คำนวณจากผลรวมเบี้ยทั้งปีของปีปัจจุบัน คูณ Administrative expenses%ROUND(ผลรวมเบี้ยทั้งปีของปีปัจจุบัน* Administrative expenses%,2)(6) Unearned premium at the end of the current year ((3) x Reserve for unearned premiums%);เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปีคำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)คำนวณจากผลรวมเบี้ยทั้งปีของปีปัจจุบัน คูณ Reserve for unearned premiums%ROUND(ผลรวมเบี้ยทั้งปีของปีปัจจุบัน* Reserve for unearned premiums%,2)(7) Reserves for outstanding claims at the end of the year (if any);เงินสำรองค่าสินไหมค้างจ่าย ณ สิ้นปี (ถ้ามี)แสดงค่าเป็น 0(8) Reinsurance Commission paid during the year;ค่านายหน้าประกันต่อที่จ่ายให้ Reinsurer ในปีนั้นแสดงค่า ผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบัน จาก Step 3(9) Reinsurance Experience Refund for original GLI paid in the current year;เงิน Experience Refund ที่บริษัทรับประกันต่อจ่ายคืนให้ สำหรับกรมธรรม์ GLI ในปีปัจจุบันแสดงค่า ผลรวม Experience Refund ทั้งปีของปีปัจจุบัน จาก Step 3(10) Negative net balance of the Incomes and Outgoes carried over from the previous year (if any);ยอดขาดทุนสุทธิ (ถ้ามี) ที่ยกมาจากการคำนวณของปีก่อนหน้าแสดงค่า NegativeBalanceBF จาก BD-PS-015 ข้อมูลตั้งฐาน Profit CommissionTotal (B)ผลรวมของรายจ่ายทั้งหมดในส่วน Outgoesคำนวณผลรวมจาก (4) ถึง (10)Net balance of Incomes and Outgoes (A - B)ผลต่างสุทธิระหว่างรายได้และรายจ่ายคำนวณจาก Total (A) - Total (B)Rate of profit commissionอัตราส่วนแบ่งกำไร (Profit Commission Rate) ตามสัญญาประกันต่อดึงข้อมูล Profit Commission Rate จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ Profit Commission Rate ที่ถูกต้องสำหรับรอบประมวลผลนั้นProfit Commission for current yearจำนวนเงิน Profit Commission ที่ Reinsurer ต้องจ่ายคืนสำหรับปีปัจจุบันตรวจสอบ Net balance of Incomes and Outgoes (A - B)หากมีค่า <= 0 ให้แสดงค่า 0หากมีค่า > 0 ให้คำนวณ Net balance of Incomes and Outgoes (A - B) คูณ Rate of profit commission%มีการ round ทศนิยม 2 ตำแหน่ง
- แสดงค่าเบี้ยของปีก่อนหน้า * Reserve for unearned premiums (50%)
- กรณีเป็นการ Quarter Year แรกที่ขึ้นระบบ ใช้ค่า Total Premium ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission * Reserve for unearned premiums% จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- กรณีไม่เป็นการ Quarter Year แรกที่ขึ้นระบบ ใช้ค่า (6) ของปีก่อนหน้า จาก ไฟล์ A09-12-7 ตัวอย่าง output file - Gibraltar - Profit Commission
- แสดงค่าเป็น 0
- แสดงค่า ผลรวมเบี้ยทั้งปีของปีปัจจุบัน จาก Step 3
- คำนวณจาก (1) + (2) + (3)
- แสดงค่า ผลรวมสินไหมทั้งปีของปีปัจจุบัน จาก Step 3
- ค่าใช้จ่ายในการดำเนินงานของ Reinsurer
- คำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)
- คำนวณจากผลรวมเบี้ยทั้งปีของปีปัจจุบัน คูณ Administrative expenses%
- ROUND(ผลรวมเบี้ยทั้งปีของปีปัจจุบัน* Administrative expenses%,2)
- เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปี
- คำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)
- คำนวณจากผลรวมเบี้ยทั้งปีของปีปัจจุบัน คูณ Reserve for unearned premiums%
- ROUND(ผลรวมเบี้ยทั้งปีของปีปัจจุบัน* Reserve for unearned premiums%,2)
- แสดงค่าเป็น 0
- แสดงค่า ผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบัน จาก Step 3
- แสดงค่า ผลรวม Experience Refund ทั้งปีของปีปัจจุบัน จาก Step 3
- แสดงค่า NegativeBalanceBF จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission
- คำนวณผลรวมจาก (4) ถึง (10)
- คำนวณจาก Total (A) - Total (B)
- ดึงข้อมูล Profit Commission Rate จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ Profit Commission Rate ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ตรวจสอบ Net balance of Incomes and Outgoes (A - B)หากมีค่า <= 0 ให้แสดงค่า 0หากมีค่า > 0 ให้คำนวณ Net balance of Incomes and Outgoes (A - B) คูณ Rate of profit commission%
- หากมีค่า <= 0 ให้แสดงค่า 0
- หากมีค่า > 0 ให้คำนวณ Net balance of Incomes and Outgoes (A - B) คูณ Rate of profit commission%
- มีการ round ทศนิยม 2 ตำแหน่ง
- Step5: บันทึกข้อมูลเพื่อออกรายงาน A09-12-7 ตัวอย่าง output file - Gibraltar - Profit Commission


===== PAGE 1313669286 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-08 เตรียมข้อมูลกรมธรรม์ =====
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ |
| RI No. | เลขอ้างอิงการส่งงานประกันต่อ | แสดงค่า ReinsuredNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Pol No | เลขกรมธรรม์ | แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Policy Name | ชื่อกรมธรรม์ | แสดงค่า PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Nature of Business | ประเภทธุรกิจของกรมธรรม์ | แสดงค่า NatureOfBusiness จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Mode of Payment | โหมดชำระเบี้ย | ดึงค่า PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบจะบันทึกค่ารหัสของโหมดชำระเบี้ย โดยกำหนดให้หากโหมดการชำระเบี้ยเป็นรายเดือน (Monthly) ให้บันทึกค่าเป็น 0หากโหมดการชำระเบี้ยเป็นราย 3 เดือน (Quarterly) ให้บันทึกค่าเป็น 1หากโหมดการชำระเบี้ยเป็นราย 6 เดือน (Semi-Annual) ให้บันทึกค่าเป็น 2หากโหมดการชำระเบี้ยเป็นรายปี (Annual) ให้บันทึกค่าเป็น 3 |
| Pol. Yr. | ปีกรมธรรม์จากการคำนวณจาก RICommencementDate | ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ปีกรมธรรม์ของ ri = (Year(CommencementDate) − Year(EffectiveDate )) + 1 (นำปี ลบ ปี ไม่พิจารณาวัน/เดือน)CommencementDate คำนวณโดยใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017EffectiveDate: วันที่เริ่มสัญญาปีปัจจุบัน ดึงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| GIB - RI Status | สถานะกรมธรรม์ที่คิดจากปีกรมธรรม์จากการคำนวณ RICommencementDate | สถานะของกรมธรรม์สำหรับ Group RI ประกอบด้วย Lapsed, Inforce, และ New business โดยกำหนดจากสถานะ และปีกรมธรรม์ของ ri โดยมีหลักการดังนี้ดึงค่าสถานะกธ.จาก Status จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะกธ.เป็น I หรือ B ให้ตรวจสอบปีกรมธรรม์ของ ri ที่คำนวณในด้านบนPol. Yr. (ปีกรมธรรม์ของ ri) = 1 ให้แสดงสถานะ New BusinessPol. Yr. (ปีกรมธรรม์ของ ri) > 1 ให้แสดงสถานะ Inforceกรณีสถานะจากทางประกันกลุ่มเป็น L ลงสถานะเป็น Lapsed |
| Policy Status | สถานะกรมธรรม์ | ดึงค่า GIB - RI Status ระบบจะบันทึกค่ารหัสของสถานะกรมธรรม์ โดยกำหนดค่าดังนี้หากสถานะกรมธรรม์เป็น Lapsed ให้บันทึกค่าเป็น 0หากสถานะกรมธรรม์เป็น New Business ให้บันทึกค่าเป็น 1หากสถานะกรมธรรม์เป็น Inforce (Renewal Business) ให้บันทึกค่าเป็น 2 |
| Renewal/ Lapsed Date | วันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ | ดึงค่า GIB - RI Status หากสถานะเป็น New Business หรือ Inforce (Renewal Business) ให้แสดงค่า EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) ของปีกรมธรรม์นั้นๆหากสถานะเป็น Lapsed ให้แสดงค่า LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| RICommencementDate | วันเริ่มสัญญาครั้งแรกของ RI | RICommencementDate คำนวณโดย1) ใช้วันที่และเดือนจาก Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)2) ใช้ปี จากเลข ReinsuredNo. 2 ตัวแรก จาก BD-PS-001 ข้อมูล Master group policy (List of policy) เช่น ReinsuredNo. 1701123 จะได้ปี 2017 |
| CommencementDate | วันเริ่มสัญญาครั้งแรก | ดึงค่า Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Master Pol Yr. | ปีกรมธรรม์จากระบบหน้าบ้าน | ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Policy Period | ช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น | ดึงค่าสถานะ GIB - RI Status ดึงค่า EffectiveDate, EndDate, LapseDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)กรณีสถานะเป็น New Business หรือ Inforce (Renewal Business)ให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง EndDate วันสุดท้ายของปีกรมธรรม์ที่มีความคุ้มครองตัวอย่างEffectiveDate: 01/01/2024EndDate: 31/12/2024Policy Period: 01/01/2024 – 31/12/2024กรณีสถานะเป็น Lapsedให้แสดงช่วงวันที่ตั้งแต่ EffectiveDate จนถึง วันก่อนหน้า LapseDate (Lapse Date − 1 วัน)ตัวอย่างEffective Date: 01/01/2024Lapse Date: 01/01/2025Policy Period: 01/01/2024 – 31/12/2024 |
| ตัวคูณตาม Payment Mode |  | ดึงโหมดชำระเบี้ย PaymentMode จาก BD-PS-001 ข้อมูล Master group policy (List of policy)โหมดชำระเบี้ยตัวคูณตาม Payment ModeAnnual1Monthly12Quarterly4Semi-Annual2 |
| Premium Rate (% p.a.): Life | อัตราเบี้ยประกันชีวิตรายปี | ดึงค่า LifePremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่ง |
| Premium Rate (% p.a.): AD&D | อัตราเบี้ยประกันอุบัติเหตุรายปี | ดึงค่า AccidentPremiumRate × ตัวคูณตาม Payment Mode จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual)มีการ ROUND ทศนิยม 2 ตำแหน่ง |


===== PAGE 1313145813 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-99 เตรียมข้อมูลจำนวนสมาชิก, ทุน และแยก Layer =====
01. เตรียมข้อมูลจำนวนสมาชิก และทุน
เตรียมข้อมูลสมาชิกและทุน (แยก Layer) แยกตาม Layer ก่อนการคำนวณ Premium และ SR เพื่อจัดเตรียมข้อมูล จำนวนสมาชิก (Member) และ ทุนประกัน (Sum Assured) โดยแยกตาม Layer 1 / Layer 2 / Layer 3 สำหรับแต่ละกรมธรรม์และแต่ละความคุ้มครอง
- ตัวอย่าง Layer 1-3Layerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูลจำนวนสมาชิกรวม และจำนวนทุนรวมดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุมMapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeathExample (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผล
- ระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์
- Period ที่เลือกต้องมีเงื่อนไข ดังนี้
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุด
- ไม่เกินช่วงเวลาที่รายงานครอบคลุม
- Mapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeath
- Example (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- Example: Actual 2024Q2
- ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกตาม Levelดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผลดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
- ดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผล
- ดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
02. แยก Layer
การคำนวณจะทำแยกตามความคุ้มครอง Life และ Accident โดยมีหลักการดังนี้
| Layer | วิธีการได้จำนวนสมาชิก (Members: Life, Members: AD&D) | วิธีการได้จำนวนทุน (TL SA: LIFE, TL SA: AD&D) |
| L2 | จำนวนสมาชิก MB L2 = ใช้จำนวนสมาชิก Level 2 ตามแต่ละความคุ้มครองกรณีไม่มี Level 2 ให้เป็น 0 | SA L2 = ใช้ทุนตามความคุ้มครองของ Level 2 − (5,000,000 × จำนวนสมาชิก MB L2) + (15,000,000 × จำนวนสมาชิก L3) |
| L3 | จำนวนสมาชิก MB L3 = ใช้จำนวนสมาชิก Level 3กรณีไม่มี Level 3 ให้เป็น 0 | SA L3 = ใช้ทุนตามความคุ้มครองของ Level 3 − (20,000,000 × จำนวนสมาชิก MB L3) |
| L1 | จำนวนสมาชิก MB L1 = ใช้จำนวนสมาชิกรวม - L2 - L3 | SA L1 = ใช้ทุนรวม − SA L2 − SA L3 |
*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 5M 15M 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*


===== PAGE 1313145815 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-99 เตรียมข้อมูลจำนวนสมาชิก, ทุน และแยก Layer > BD-AP-001-02-03-1 เตรียมข้อมูลจำนวนสมาชิก, ทุน =====
เตรียมข้อมูลสมาชิกและทุน (แยก Layer) แยกตาม Layer ก่อนการคำนวณ Premium และ SR เพื่อจัดเตรียมข้อมูล จำนวนสมาชิก (Member) และ ทุนประกัน (Sum Assured) โดยแยกตาม Layer 1 / Layer 2 / Layer 3 สำหรับแต่ละกรมธรรม์และแต่ละความคุ้มครอง
- ตัวอย่าง Layer 1-3Layerช่วง Sum AssuredPercentage ReinsuranceLayer 1ตั้งแต่ 0 ถึงไม่เกิน 5,000,000 บาท15%Layer 2มากกว่า 5,000,000 ถึงไม่เกิน 20,000,000 บาท100%Layer 3มากกว่า 20,000,000 บาทขึ้นไป0%หมายเหตุ: ข้อมูล Layer ของ Sum Assured ให้ตรวจสอบจาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ข้อมูล configure ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูลจำนวนสมาชิกรวม และจำนวนทุนรวมดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุมMapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeathExample (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกจาก BD-PS-007 ข้อมูล (R17) List of inforce by policy (Actual) โดยจะมีข้อมูลรายเดือนหลาย Period ทั้งนี้ ระบบจะเลือกใช้ เพียง 1 Period ต่อ 1 Policy Period เพื่อนำจำนวน Member และทุนไปใช้ในการคำนวณ Layer หลักการดังนี้ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผลระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์Period ที่เลือกต้องมีเงื่อนไข ดังนี้อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- ระบบจะคัดเลือกข้อมูลตาม เลขกรมธรรม์และปีกรมธรรม์ ที่อยู่ใน Quarter Period ที่ประมวลผล
- ระบบจะเลือกใช้จำนวน Member และทุนจาก Period ล่าสุดที่สอดคล้องกับสถานะของกรมธรรม์
- Period ที่เลือกต้องมีเงื่อนไข ดังนี้
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุดไม่เกินช่วงเวลาที่รายงานครอบคลุม
- อยู่ใกล้วันสิ้นสุดของ Policy Period มากที่สุด
- ไม่เกินช่วงเวลาที่รายงานครอบคลุม
- Mapping ของฟิลด์ที่ใช้ข้อมูลMapping Parametersจำนวนสมาชิก Life รวมNoMemberLifeจำนวนสมาชิก Accident รวมNoMemberAccidentDeathทุนประกัน Life รวมSumInsuredLifeทุนประกัน Accident รวมSumInsuredAccidentDeath
- Example (เพื่ออธิบายหลักการเลือก Period)Example: Actual 2024Q2ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- Example: Actual 2024Q2
- ช่วงข้อมูล Inforce ที่มี = 202304 – 202406noหลักการตามสถานะกรมธรรม์การเลือกใช้ข้อมูล Periodตัวอย่าง1New Business / Inforce (ยังมีความคุ้มครองในไตรมาส)ใช้ Period สิ้นไตรมาส (202406)GH2222 Eff 01/04/2024 – 31/03/2025 → Period 202406GH5555 Eff 01/01/2024 – 31/12/2024 → Period 202406GH1111 Eff 01/04/2024 – 31/03/2025 → Period 2024062กรมธรรม์เดียวกันมีหลาย Policy Periodแยกเป็นคนละ record และเลือก Period ให้ตรงกับแต่ละ Policy PeriodGH3333Y31: Eff 01/05/2023 – 30/04/2024 → Period 202404Y32: Eff 01/05/2024 – 30/04/2025 → Period 2024063Lapsedใช้ Period สุดท้ายก่อนกรมธรรม์สิ้นสุดGH6666 Eff 15/06/2023 – 14/06/2024 → Period 202405GH7777 Eff 10/07/2023 – 09/07/2024 → Period 2024064Outstanding Claim (ไม่มี Inforce ในไตรมาส)กรณีพบข้อมูล: ให้ใช้ period สุดท้าย กรณีไม่พบข้อมูล: ระบบจะกำหนดจำนวนสมาชิกและทุนเป็น 0GH8888 Eff 01/01/2023 – 31/12/2023 → Period 202312
- ดึงข้อมูลจำนวนสมาชิกตาม Levelดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผลดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure
- ดึงข้อมูลจำนวนรายสมาชิกเพื่อแยก Layer จาก BD-PS-004 ข้อมูล Estimated Premium Layer (Estimate,Actual) โดยเลือกรายการตามเลขกรมธรรม์ และวันคุ้มครอง (EffectiveDate) ที่อยู่ใน Quarter ที่ประมวลผล
- ดึงข้อมูลจำนวนสมาชิกของ Level 2 และ 3ข้อมูลMapping Parametersจำนวนสมาชิก Life ตาม LevelAmountLifeจำนวนสมาชิก Accident ตาม LevelAmountAccidentทุนความคุ้มครอง Life ตาม LevelLifeInsureทุนความคุ้มครอง Accident ตาม LevelAccidentInsure


===== PAGE 1313145817 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-02 Actual Gibraltar > BD-AP-001-02-99 เตรียมข้อมูลจำนวนสมาชิก, ทุน และแยก Layer > BD-AP-001-02-03-2 แยก Layer =====
การคำนวณจะทำแยกตามความคุ้มครอง Life และ Accident โดยมีหลักการดังนี้
| Layer | วิธีการได้จำนวนสมาชิก (Members: Life, Members: AD&D) | วิธีการได้จำนวนทุน (TL SA: LIFE, TL SA: AD&D) |
| L2 | จำนวนสมาชิก MB L2 = ใช้จำนวนสมาชิก Level 2 ตามแต่ละความคุ้มครองกรณีไม่มี Level 2 ให้เป็น 0 | SA L2 = ใช้ทุนตามความคุ้มครองของ Level 2 − (5,000,000 × จำนวนสมาชิก MB L2) + (15,000,000 × จำนวนสมาชิก L3) |
| L3 | จำนวนสมาชิก MB L3 = ใช้จำนวนสมาชิก Level 3กรณีไม่มี Level 3 ให้เป็น 0 | SA L3 = ใช้ทุนตามความคุ้มครองของ Level 3 − (20,000,000 × จำนวนสมาชิก MB L3) |
| L1 | จำนวนสมาชิก MB L1 = ใช้จำนวนสมาชิกรวม - L2 - L3 | SA L1 = ใช้ทุนรวม − SA L2 − SA L3 |
*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 5M 15M 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*


===== PAGE 1313440001 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA =====
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | กระบวนการนี้ใช้สำหรับประมวลผลข้อมูล Reinsurance Premium ของกรมธรรม์ Group PA ภายใต้ Treaty Thaire Group PA ในแต่ละรอบ Quarter โดยระบบจะคัดเลือกกรมธรรม์และสมาชิกที่เข้าเงื่อนไขการส่งประกันต่อ และคำนวณเบี้ยประกันต่อในระดับ “รายสมาชิก”เพื่อกำหนดหลักเกณฑ์การคัดเลือกกรมธรรม์ที่ต้องนำมาประมวลผล Reinsurance Premium, Claim ในแต่ละ Quarterเพื่ออธิบายแนวทางการคัดเลือกสมาชิกที่เข้าเงื่อนไขการส่งประกันต่อ ตาม Treaty Thaire Group PAเพื่อกำหนดวิธีคำนวณทุนประกันต่อ และเบี้ยประกันต่อในระดับรายสมาชิกอย่างถูกต้องตามธุรกิจเพื่อให้ผลลัพธ์ที่ได้สามารถใช้เป็นข้อมูลอ้างอิงสำหรับการจัดทำรายงาน Bordereauการตรวจสอบความถูกต้องของเบี้ยประกันต่อการส่งข้อมูลให้ Reinsurer |
| 2 | สัมพันธ์กับกระบวนการ(Link to process) | PS-06-02, PS-06-03, PS-06-04 |
| 3 | เวลาประมวลผล(Time) | ประมวลผลตามรอบ Quarter Period ที่ผู้ใช้งานเลือก เช่น 2024Q2 จะประมวลผลข้อมูลที่อยู่ในช่วงเดือนเมษายน – มิถุนายน 2024 |
| 4 | ข้อมูลตั้งต้น(Input) | ข้อมูลกรมธรรม์Master Group Policy (List of Policy)ข้อมูลสมาชิกต้นงวดList of Inforce by Member (R01 – Estimate / Actual)ข้อมูล Alterationข้อมูลสินไหมข้อมูล configure treaty และข้อมูล Policy Detail ที่ใช้ในการคำนวณ |
| 5 | ขอบเขต (Scope) | คำนวณเฉพาะกรมธรรม์ Group PA ภายใต้ Treaty Thaire Group PAคำนวณในระดับ “รายสมาชิก”พิจารณาเฉพาะสมาชิกที่ทุนประกันอุบัติเหตุ ≥ 500,000 บาทอายุไม่เกิน Age Limit หรือได้รับการอนุโลมจาก Reinsurerสรุปผลลัพธ์ในระดับกรมธรรม์ปีกรมธรรม์ |
| 6 | อธิบายรายละเอียด(Description) | แบ่งการประมวลผลแยกตาม Process ดังนี้NoProcessWiki1คัดเลือกกรมธรรม์BD-AP-001-03-00 Policy2ประมวลผล PremiumBD-AP-001-03-01 Renewal3ประมวลผล AlterationBD-AP-001-03-02 Alteration3.1ประมวลผล ClaimBD-AP-001-03-02-01 Alteration - Claim3.2ประมวลผล New Member และ TerminationBD-AP-001-03-02-02 Alteration - New Member และ Termination3.3ประมวลผล Increased SA และ Decreased SABD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA4ประมวลผลออกรายงาน BDRBD-AP-001-03-03 ประมวลผลออกรายงาน BDR5ประมวลผลออกรายงาน EDW และ SOABD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA6ประมวลผลออกรายงาน Profit CommissionBD-AP-001-03-05 ประมวลผลออกรายงาน Profit Commission |
| 7 | ผลลัพธ์(Output) | ไฟล์ BDRไฟล์ Renewal_Code Name_YYYYQQ_Policy No:ใช้สำหรับแสดงข้อมูล Renewal ของไตรมาสที่รายงานA09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy Noไฟล์ Alteration_Code Name_YYYYQQ_Policy Noใช้สำหรับแสดงข้อมูล Claim, New Member, Termination, Increased SA, Decreased SAโดยแสดงใน 1 ไฟล์ ต่อ 1 กรมธรรม์และแสดง 1 sheet ต่อ 1 AlterationA09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy Noสำหรับนำเข้า EDW: A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQไฟล์ SOA: A09-12-5 ตัวอย่าง output file - SOA - SOA_Act_Thaire_YYYYQQไฟล์ Profit Commission: A09-12-4 ตัวอย่าง output file - Thaire - Profit CommissionError Log / Exception Reportกรณี Actual Premium หากตรวจสอบแล้วเป็นกรมธรรม์ที่ยังไม่เคยประมวลผล Estimate Premium ให้ระบบบันทึกข้อมูลกธ.ลง BD-PS-014 ข้อมูลตั้งฐานกรมธรรม์ที่เคยส่ง Reinsuranceเพื่อรองรับกรณีกรมธรรม์ที่มีการรับรู้เบี้ยล่าช้าเพื่อป้องกันไม่ให้บันทึกบัญชี Premium ซ้ำ |


===== PAGE 1313898993 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-00 Policy =====
00 การคัดเลือกกรมธรรม์
ระบบเลือกชุดกรมธรรม์ (Policy Set) สำหรับการคำนวณ ตามเงื่อนไขดังนี้:
- การคัดเลือก Policy By Treatyเลือกเฉพาะกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- เลือกเฉพาะกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'
- สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel


===== PAGE 1313440015 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-01 Renewal =====
Overview
เพื่อประมวลผล และจัดทำไฟล์ Renewal – Thaire Group PA สำหรับการประมวลผลข้อมูลประกันต่อ (Reinsurance) ในแต่ละรอบ Quarter โดยระบบจะคัดเลือกกรมธรรม์ที่เข้าเงื่อนไขตามช่วงเวลา ทำการคำนวณในระดับรายสมาชิก และจัดทำผลลัพธ์เป็นไฟล์ Renewal แยกตามกรมธรรม์ เพื่อใช้เป็นข้อมูลอ้างอิงสำหรับการส่ง Reinsurer และการตรวจสอบความถูกต้องของเบี้ยประกันต่อ
Objective
- เพื่อกำหนดหลักเกณฑ์การคัดเลือกกรมธรรม์ที่ต้องจัดทำไฟล์ Renewal ในแต่ละ Quarter อย่างชัดเจน
- เพื่ออธิบายแนวทางการคำนวณ Renewal ในระดับรายสมาชิก โดยใช้ข้อมูลและเงื่อนไขตาม Treaty Thaire Group PA
- เพื่อให้มั่นใจว่าสมาชิกที่นำมาคำนวณเป็นสมาชิกที่เข้าเงื่อนไขการส่งประกันต่อ ทั้งด้านทุนประกันและอายุ
- เพื่อจัดทำไฟล์ Renewal แยกตามกรมธรรม์ในรูปแบบมาตรฐาน ที่สามารถใช้ตรวจสอบและอ้างอิงผลการคำนวณได้
ข้อมูลที่ใช้ในการประมวลผล
| ประเภทข้อมูล | source |
| ข้อมูลกรมธรรม์ | BD-PS-001 ข้อมูล Master group policy (List of policy) |
| ข้อมูลสมาชิกต้นงวด R01 | BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual) |
| ข้อมูล ri condition | BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI ConditionBD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium RateBD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
Process Overview
- คัดเลือกกรมธรรม์ที่เข้าเงื่อนไข Quarter Period
- คำนวณเบี้ยให้อยู่ในรูปแบบรายปี
- เตรียมข้อมูลสมาชิกและทุน
- สรุปข้อมูลเพื่อใช้คำนวณ RI Premium และ RI Commission
Scope
- ผลลัพธ์สุดท้ายของการประมวลผลจะถูกสรุปในระดับกรมธรรม์ แยกตามปีกรมธรรม์เพื่อใช้เป็นฐานข้อมูลสำหรับจัดทำรายงาน Bordereau และเอกสารส่ง Reinsurer
ขั้นตอนดังต่อไปนี้
- Step 1: คัดเลือกกรมธรรม์ ระบบจะประมวลผล Reinsurance Premium โดยคัดเลือกเฉพาะกรมธรรม์ที่มีช่วงความคุ้มครองอยู่ใน Quarter Period ที่รายงาน ดึงข้อมูลกรมธรรม์จาก BD-PS-001 ข้อมูล Master group policy (List of policy)เลือกกรมธรรม์ที่มีวันเริ่มสัญญา EffectiveDate อยู่ใน Quarter Period ที่ประมวลผลตัวอย่าง: เลือก 2024Q2 → ต้องมีวันที่เริ่มสัญญาใน Apr–Jun 2024
- ดึงข้อมูลกรมธรรม์จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- เลือกกรมธรรม์ที่มีวันเริ่มสัญญา EffectiveDate อยู่ใน Quarter Period ที่ประมวลผลตัวอย่าง: เลือก 2024Q2 → ต้องมีวันที่เริ่มสัญญาใน Apr–Jun 2024
- ตัวอย่าง: เลือก 2024Q2 → ต้องมีวันที่เริ่มสัญญาใน Apr–Jun 2024
- Step 2: เตรียมข้อมูล Configuration Policy Detail เพื่อใช้ในการตรวจสอบเงื่อนไข RI Conditionดึงข้อมูล Policy Detail Condition ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ดึงข้อมูล RI Condition ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionดึงข้อมูล RI Premium Rate ที่ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ดึงข้อมูล Policy Detail Condition ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- ดึงข้อมูล RI Condition ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- ดึงข้อมูล RI Premium Rate ที่ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- Step 3: คัดเลือกสมาชิก ดึงข้อมูลรายสมาชิกจาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual) ด้วยเงื่อนไขเลขกรมธรรม์ และปีกรมธรรม์ จาก step 1พิจารณา 2 เงื่อนไข ดังนี้ถ้ามี Sum Insured Accident น้อยกว่า 500,000 จะไม่นำสมาชิกนั้นมาคำนวณ เนื่องจากต่ำกว่า Minimum Sum Assured ที่กำหนดไว้ระบบเลือกรายสมาชิกที่ SumInsuredAccident >= 500,000ต้องมีอายุไม่เกิน Age Limit โดยหากอายุเกิน ต้องเป็นเลขที่สมาชิกที่ได้รับการอนุโลม (หากอายุเกิน และไม่ได้รับการอนุโลมจะไม่นำมาประมวลผล / ไม่ส่ง Reinsurance)ดึงข้อมูลอายุจากค่า Age ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจากข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail
- ดึงข้อมูลรายสมาชิกจาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual) ด้วยเงื่อนไขเลขกรมธรรม์ และปีกรมธรรม์ จาก step 1
- พิจารณา 2 เงื่อนไข ดังนี้ถ้ามี Sum Insured Accident น้อยกว่า 500,000 จะไม่นำสมาชิกนั้นมาคำนวณ เนื่องจากต่ำกว่า Minimum Sum Assured ที่กำหนดไว้ระบบเลือกรายสมาชิกที่ SumInsuredAccident >= 500,000ต้องมีอายุไม่เกิน Age Limit โดยหากอายุเกิน ต้องเป็นเลขที่สมาชิกที่ได้รับการอนุโลม (หากอายุเกิน และไม่ได้รับการอนุโลมจะไม่นำมาประมวลผล / ไม่ส่ง Reinsurance)ดึงข้อมูลอายุจากค่า Age ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจากข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail
- ถ้ามี Sum Insured Accident น้อยกว่า 500,000 จะไม่นำสมาชิกนั้นมาคำนวณ เนื่องจากต่ำกว่า Minimum Sum Assured ที่กำหนดไว้ระบบเลือกรายสมาชิกที่ SumInsuredAccident >= 500,000
- ระบบเลือกรายสมาชิกที่ SumInsuredAccident >= 500,000
- ต้องมีอายุไม่เกิน Age Limit โดยหากอายุเกิน ต้องเป็นเลขที่สมาชิกที่ได้รับการอนุโลม (หากอายุเกิน และไม่ได้รับการอนุโลมจะไม่นำมาประมวลผล / ไม่ส่ง Reinsurance)ดึงข้อมูลอายุจากค่า Age ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจากข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail
- ดึงข้อมูลอายุจากค่า Age
- ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจากข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail
- Step 3.1: เตรียมข้อมูลกรมธรรม์เพื่อออกรายงาน EDWดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผลหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการPol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Commencement Dateวันเริ่มสัญญาครั้งแรกดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Renewal Dateวันเริ่มสัญญาปีปัจจุบันดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol. Yr.ปีกรมธรรม์ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Nameชื่อกรมธรรม์ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)End Dateวันที่สิ้นสุดความคุ้มครองดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- Step 4: เตรียมข้อมูล และคำนวณรายกรมธรรม์ และรายสมาชิก ดังนี้ฟิลด์ Cession No.เลขสมาชิกแสดงค่า CertNo จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)POLICY No.เลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Effective Dateวันเริ่มสัญญาปีปัจจุบันแสดงค่า EffectiveDate จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)Sexเพศของสมาชิกแสดงค่า Sex จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)Ageอายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์แสดงค่า Age จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)Classประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detailแสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์Typeประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์Sum Assured Accidentทุนประกัน สำหรับความคุ้มครองอุบัติเหตุแสดงค่า SumInsuredAccident จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)Sum Assured Murderทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละรายคำนวณจาก Sum Assured Accident คูณกับ %Murder & Assault (MA)Sum Assured Loadingsทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษคำนวณจาก Sum Assured Accident คูณกับ %Special CoverageSum Reassured Accidentทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุคำนวณจากทุนประกันอุบัติเหตุของสมาชิกโดยใช้หลักการแบ่งช่วงทุนตามเงื่อนไขการรับประกันต่อ ดังนี้หากทุนต่ำกว่า 500,000 บาท จะไม่ส่งประกันต่อหากทุนอยู่ระหว่าง 500,000 ถึง 2,000,000 บาท จะนำเฉพาะส่วนที่เกิน 400,000 บาท มาคำนวณส่งประกันต่อในอัตรา Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition(Sum Assured Accident - 400000) * Percentage Reinsurance ของ Layer 2%หากทุนมากกว่า 2,000,000 บาท จะนำส่วนที่เกิน 2,000,000 บาท มาคำนวณส่งประกันต่อ 100% และส่วนระหว่าง 400,000 ถึง 2,000,000 บาท มาคำนวณส่งประกันต่อ Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition((Sum Assured Accident-2000000)*Percentage Reinsurance ของ Layer 3%)+((2000000-400000) * Percentage Reinsurance ของ Layer 2%)*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*Sum Reassured Murderทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรมคำนวณจาก Sum Reassured Accident คูณกับ %Murder & Assault (MA)Sum Reassured Loadingsทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษคำนวณจาก Sum Reassured Accident คูณกับ %Special CoverageRI Rateอัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Conditionดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateเลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age Premium Accidentเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ คำนวณจาก Sum Reassured Accident และ RI Rateคำนวณจาก Sum Reassured Accident คูณกับ RI Rate หารด้วย 1000มีการ round ทศนิยม 2 ตำแหน่งPremium Loadingsเบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ คำนวณจาก Sum Reassured Loadings และ RI Rate และผลรวมของ RI Premium Loading จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์คำนวณผลรวม RI Premium Loading จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraftคำนวณด้วย Sum Reassured Loadings * RI Rate * ผลรวม RI Premium Loading /1000มีการ round ทศนิยม 2 ตำแหน่งPremium Discountผลรวมส่วนลดของความคุ้มครอง Murder & Assault (MA) และส่วนลดตามขนาดกลุ่ม ซึ่งคำนวณจากเบี้ยอุบัติเหตุและเบี้ยส่วนเพิ่มตามเงื่อนไขที่กำหนดคำนวณจากส่วนลดเบี้ยสำหรับความคุ้มครอง Murder & Assault (MA) และส่วนลดตามปริมาณกลุ่ม (Group Volume Discount) โดยนำส่วนลดสำหรับความคุ้มครอง Murder & Assault (MA) มาคำนวณจากเบี้ยอุบัติเหตุพื้นฐาน และนำส่วนลดตามปริมาณกลุ่มมาคำนวณจากเบี้ยอุบัติเหตุหลังหักส่วนลดความคุ้มครอง Murder & Assault (MA) รวมกับเบี้ยส่วนเพิ่ม (Premium Loadings)MA Discount = %Discount for MA*Premium AccidentGroup Volume Discount = %Discount Group Volume × [((1 − %Discount for MA) × Premium Accident) + Premium Loadings]Premium Discount = ยอดผลรวม MA Discount + Group Volume Discountมีการ round ทศนิยม 2 ตำแหน่งTotal Premiumเบี้ยประกันต่อรวมสุทธิของสมาชิกแต่ละราย หลังหักส่วนลดแล้วคำนวณจาก Premium Accident + Premium Loadings - Premium Discountมีการ round ทศนิยม 2 ตำแหน่งCommissionค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ คำนวณจาก Total Premium ตามอัตราที่กำหนดดึงค่า RI Commission จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์Commission = Total Premium * RI Commissionมีการ round ทศนิยม 2 ตำแหน่ง
- แสดงค่า CertNo จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า EffectiveDate จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)
- แสดงค่า Sex จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)
- แสดงค่า Age จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)
- แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- แสดงค่า SumInsuredAccident จาก BD-PS-005 ข้อมูล (R01) List of inforce by member (Estimate,Actual)
- คำนวณจาก Sum Assured Accident คูณกับ %Murder & Assault (MA)
- คำนวณจาก Sum Assured Accident คูณกับ %Special Coverage
- คำนวณจากทุนประกันอุบัติเหตุของสมาชิกโดยใช้หลักการแบ่งช่วงทุนตามเงื่อนไขการรับประกันต่อ ดังนี้หากทุนต่ำกว่า 500,000 บาท จะไม่ส่งประกันต่อหากทุนอยู่ระหว่าง 500,000 ถึง 2,000,000 บาท จะนำเฉพาะส่วนที่เกิน 400,000 บาท มาคำนวณส่งประกันต่อในอัตรา Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition(Sum Assured Accident - 400000) * Percentage Reinsurance ของ Layer 2%หากทุนมากกว่า 2,000,000 บาท จะนำส่วนที่เกิน 2,000,000 บาท มาคำนวณส่งประกันต่อ 100% และส่วนระหว่าง 400,000 ถึง 2,000,000 บาท มาคำนวณส่งประกันต่อ Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition((Sum Assured Accident-2000000)*Percentage Reinsurance ของ Layer 3%)+((2000000-400000) * Percentage Reinsurance ของ Layer 2%)
- หากทุนต่ำกว่า 500,000 บาท จะไม่ส่งประกันต่อ
- หากทุนอยู่ระหว่าง 500,000 ถึง 2,000,000 บาท จะนำเฉพาะส่วนที่เกิน 400,000 บาท มาคำนวณส่งประกันต่อในอัตรา Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition(Sum Assured Accident - 400000) * Percentage Reinsurance ของ Layer 2%
- (Sum Assured Accident - 400000) * Percentage Reinsurance ของ Layer 2%
- หากทุนมากกว่า 2,000,000 บาท จะนำส่วนที่เกิน 2,000,000 บาท มาคำนวณส่งประกันต่อ 100% และส่วนระหว่าง 400,000 ถึง 2,000,000 บาท มาคำนวณส่งประกันต่อ Percentage Reinsurance% จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition((Sum Assured Accident-2000000)*Percentage Reinsurance ของ Layer 3%)+((2000000-400000) * Percentage Reinsurance ของ Layer 2%)
- ((Sum Assured Accident-2000000)*Percentage Reinsurance ของ Layer 3%)+((2000000-400000) * Percentage Reinsurance ของ Layer 2%)
- *สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*
- คำนวณจาก Sum Reassured Accident คูณกับ %Murder & Assault (MA)
- คำนวณจาก Sum Reassured Accident คูณกับ %Special Coverage
- ดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate
- เลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age
- คำนวณจาก Sum Reassured Accident คูณกับ RI Rate หารด้วย 1000
- มีการ round ทศนิยม 2 ตำแหน่ง
- คำนวณผลรวม RI Premium Loading จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraft
- RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraft
- คำนวณด้วย Sum Reassured Loadings * RI Rate * ผลรวม RI Premium Loading /1000
- มีการ round ทศนิยม 2 ตำแหน่ง
- คำนวณจากส่วนลดเบี้ยสำหรับความคุ้มครอง Murder & Assault (MA) และส่วนลดตามปริมาณกลุ่ม (Group Volume Discount) โดยนำส่วนลดสำหรับความคุ้มครอง Murder & Assault (MA) มาคำนวณจากเบี้ยอุบัติเหตุพื้นฐาน และนำส่วนลดตามปริมาณกลุ่มมาคำนวณจากเบี้ยอุบัติเหตุหลังหักส่วนลดความคุ้มครอง Murder & Assault (MA) รวมกับเบี้ยส่วนเพิ่ม (Premium Loadings)MA Discount = %Discount for MA*Premium AccidentGroup Volume Discount = %Discount Group Volume × [((1 − %Discount for MA) × Premium Accident) + Premium Loadings]Premium Discount = ยอดผลรวม MA Discount + Group Volume Discount
- MA Discount = %Discount for MA*Premium Accident
- Group Volume Discount = %Discount Group Volume × [((1 − %Discount for MA) × Premium Accident) + Premium Loadings]
- Premium Discount = ยอดผลรวม MA Discount + Group Volume Discount
- มีการ round ทศนิยม 2 ตำแหน่ง
- คำนวณจาก Premium Accident + Premium Loadings - Premium Discount
- มีการ round ทศนิยม 2 ตำแหน่ง
- ดึงค่า RI Commission จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- Commission = Total Premium * RI Commission
- มีการ round ทศนิยม 2 ตำแหน่ง
- Step 5: ระบบบันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No


===== PAGE 1313440024 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration =====
Overview
กระบวนการ Alteration ใช้สำหรับจัดการและคำนวณผลจากการเปลี่ยนแปลงข้อมูลสมาชิก เช่น การเคลมสินไหม, การเพิ่มสมาชิก, การยกเลิกสมาชิก, และการเพิ่มหรือลดทุนประกัน โดยระบบจะคัดเลือกรายการ Alteration ที่เกิดขึ้นภายใน Quarter Period ที่ประมวลผล และทำการคำนวณแยกตามกรมธรรม์ ประเภท Alteration และรายสมาชิก ทั้งนี้ การประมวลผลจะอยู่ภายใต้เงื่อนไขการรับประกันต่อของ Treaty Thaire Group PA รวมถึงข้อกำหนดด้าน Minimum Sum Assured และ Age Limit เพื่อให้ผลลัพธ์ที่ได้สามารถนำไปใช้สำหรับการจัดทำรายงานและการเรียกเก็บเบี้ยประกันต่อได้อย่างถูกต้องตามหลักธุรกิจ
Objective
- เพื่อประมวลผลการเปลี่ยนแปลงข้อมูลสมาชิก (Alteration) ภายใต้กรมธรรม์ Group PA ในแต่ละรอบ Quarter
- เพื่อคัดเลือกรายการ Alteration ที่เข้าเงื่อนไขตาม Quarter Period และเงื่อนไขของ Treaty Thaire Group PA
- เพื่อคำนวณผลกระทบด้านเบี้ยประกันต่อจากการเพิ่ม ลด หรือยกเลิกทุนประกันของสมาชิกอย่างถูกต้อง
- เพื่อรองรับการเรียกเก็บเบี้ยเพิ่มเติม หรือการคืนเบี้ยประกันต่อ ตามประเภทของ Alteration ที่เกิดขึ้น
- คำนวณส่วนแบ่งค่าสินไหมและค่าใช้จ่ายสอบสวนของ Reinsurer ตามสัดส่วนการรับประกันต่อ (% Reinsurance) และระดับ Layer
- เพื่อจัดเตรียมข้อมูลสำหรับจัดทำรายงาน Alteration และการส่งข้อมูลให้ Reinsurer อย่างครบถ้วนและถูกต้องตามหลักธุรกิจ
แบ่งการประมวลผลแยกตาม Process ดังนี้
| No | Process | Wiki |
| 1 | ประมวลผล Alteration - Claim | BD-AP-001-03-02-01 Alteration - Claim |
| 2 | ประมวลผล Alteration - New Member และ Termination | BD-AP-001-03-02-02 Alteration - New Member และ Termination |
| 3 | ประมวลผล Alteration - Increased SA และ Decreased SA | BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA |


===== PAGE 1313669181 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration > BD-AP-001-03-02-00 เงื่อนไขเลือกข้อมูล Alteration =====
คัดเลือกรายการ Alteration ระบบจะประมวลผล Reinsurance Premium โดยคัดเลือกตาม Document Date และ Alteration Date ที่เกิดขึ้นใน Quarter Period ตามเงื่อนไข
| Case | DocumentDate | AlterationDate | การแสดงผลในรายงาน |
| 1 | อยู่ใน Quarter ปัจจุบัน | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 2 | อยู่ใน Quarter ปัจจุบัน | ก่อน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 3 | อยู่ใน Quarter ปัจจุบัน | หลัง Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน (รอ Quarter ถัดไป) |
| 4 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 5 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | ก่อน Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน |
| 6 | เกิน 1 ปีจาก Quarter ที่เลือก | ก่อน/อยู่ใน/หลัง Quarter | ไม่ดึงมาประมวลผล |
- ดึงข้อมูลกรมธรรม์จาก BD-PS-006 ข้อมูล Alteration (Actual)
- ระบบจะพิจารณาการแสดงข้อมูลในรายงานของ Quarter ที่เลือก โดยอ้างอิงจาก Document Date และ Alteration Date ตามเงื่อนไขดังนี้กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือกกรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือกกรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกัน
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- กรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- กรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- ข้อมูลตามประเภท Alteration ดังนี้Alteration TypeDescriptionCode ที่แสดงในรายงานAlterationMovement จาก BD-PS-006 ข้อมูล Alteration (Actual)New Member / Additionการเพิ่มสมาชิกใหม่NMACancellation / TerminationการยกเลิกสมาชิกCLCIncreased Sum Assuredการเพิ่มทุนประกันICNDecreased Sum AssuredการลดทุนประกันDCE


===== PAGE 1313669162 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration > BD-AP-001-03-02-01 Alteration - Claim =====
Overview
กระบวนการประมวลผล Alteration – Claim สำหรับงานประกันต่อ (Reinsurance) ของ Group PA ภายใต้ Treaty Thaire Group PA โดยมุ่งเน้นการคัดเลือกและคำนวณรายการสินไหมที่ต้องส่ง Reinsurer ให้ถูกต้องตามเงื่อนไขทางธุรกิจ ทั้งในกรณีที่เป็นสินไหมปกติ และกรณีที่มีค่าใช้จ่ายสอบสวนหรือกฎหมายเพิ่มเติมในช่วงเวลาที่แตกต่างกัน
Objective
- เพื่อกำหนดหลักเกณฑ์การคัดเลือกสินไหมที่ต้องนำมาประมวลผล Alteration – Claim ในแต่ละ Quarter
- เพื่ออธิบายเงื่อนไขทางธุรกิจในการพิจารณาสินไหมแต่ละประเภท (Approve / Decline / เคย Approve มาก่อน)
- เพื่อให้การคำนวณส่วนแบ่งความรับผิดของ Reinsurer เป็นไปตาม Treaty และ RI Condition ที่พิจารณาจากทุนประกัน อายุ และสถานะสมาชิก
- เพื่อให้รายงาน Claim สะท้อนข้อมูลสินไหมและค่าใช้จ่ายสอบสวนอย่างครบถ้วน ถูกต้อง และสอดคล้องกับรอบการประมวลผล
Process Overview
- ดึงข้อมูลสินไหมและค่าใช้จ่ายสอบสวนที่เกี่ยวข้องจากระบบต้นทาง
- คัดเลือกรายการสินไหมตามเงื่อนไข Quarter Period ที่ประมวลผล
- จัดกลุ่มสินไหมตามสถานะทางธุรกิจ เช่น Approve, Decline และรายการจากรอบก่อนหน้า
- ตรวจสอบเงื่อนไขการรับประกันต่อ (RI Condition) ตาม Treaty ที่เกี่ยวข้อง
- คำนวณยอดสินไหม ค่าใช้จ่ายสอบสวน และส่วนแบ่งของ Reinsurer
Scope
- สินไหมความคุ้มครอง Death (Accident Death), Dismemberment และ TPD
- การพิจารณาทุนประกันขั้นต่ำ (เช่น ทุนต่ำกว่า 500,000 ไม่เข้า RI) และเงื่อนไขอายุ (Age Limit) ตาม RI Condition
- สินไหมที่มีวันที่อนุมัติ หรือมีค่า Investigation & Legal Expense อยู่ในเงื่อนไขของ Quarter Period ที่ประมวลผล
- กรมธรรม์ Group PA ที่อยู่ภายใต้ Treaty Thaire Group PA และมีสถานะกรมธรรม์ที่ยังไม่ถูกยกเลิก
ขั้นตอนดังต่อไปนี้
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลประเภทข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูลสินไหมBD-PS-003 ข้อมูล Claim (Estimate,Actual)ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือกข้อมูล Claim ครอบคลุมความคุ้มครองDeath - Accident DeathDismembermentTPDตัวอย่างรายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024ข้อมูลค่าใช้จ่ายในการสอบสวนBD-PS-011 ข้อมูล Investigate Expense (Actual)ระบบเลือกรายการที่มีวันที่อนุมัติสินไหมอยู่ภายในไตรมาสที่เลือกด้วยเงื่อนไข PolicyNo, Effective Date, CertNo, Approved Date, ClaimNo, ClaimTypeเงื่อนไขการ match Claim Type กับส่วนข้อมูลสินไหมประเภทสินไหมค่า Claim Type จาก ข้อมูลค่าใช้จ่ายในการสอบสวนค่า Claim Type จาก ข้อมูลสินไหมAccident DeathClaimType = 'AccidentDeath'Type = 'Death' และมีค่า ClaimAccident > 0DismenbermentClaimType = 'Dismenberment' Type = 'Dismenberment'TPDClaimType = 'TPD' Type = 'TPD'ข้อมูลกรมธรรม์BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกกรมธรรม์ที่ได้จากข้อมูลสินไหม และข้อมูลค่าใช้จ่ายในการสอบสวนข้อมูล ri conditionBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI ConditionBD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium RateBD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ระบบเลือก Claim ที่มีวันที่อนุมัติอยู่ภายในรอบ Quarter ที่เลือก
- ข้อมูล Claim ครอบคลุมความคุ้มครองDeath - Accident DeathDismembermentTPD
- Death - Accident Death
- Dismemberment
- TPD
- ตัวอย่าง
- รายงาน 2024Q2 → เลือก Claim ที่อนุมัติในเดือน เมษายน, พฤษภาคม, มิถุนายน 2024
- ระบบเลือกรายการที่มีวันที่อนุมัติสินไหมอยู่ภายในไตรมาสที่เลือก
- ด้วยเงื่อนไข PolicyNo, Effective Date, CertNo, Approved Date, ClaimNo, ClaimTypeเงื่อนไขการ match Claim Type กับส่วนข้อมูลสินไหมประเภทสินไหมค่า Claim Type จาก ข้อมูลค่าใช้จ่ายในการสอบสวนค่า Claim Type จาก ข้อมูลสินไหมAccident DeathClaimType = 'AccidentDeath'Type = 'Death' และมีค่า ClaimAccident > 0DismenbermentClaimType = 'Dismenberment' Type = 'Dismenberment'TPDClaimType = 'TPD' Type = 'TPD'
- เงื่อนไขการ match Claim Type กับส่วนข้อมูลสินไหมประเภทสินไหมค่า Claim Type จาก ข้อมูลค่าใช้จ่ายในการสอบสวนค่า Claim Type จาก ข้อมูลสินไหมAccident DeathClaimType = 'AccidentDeath'Type = 'Death' และมีค่า ClaimAccident > 0DismenbermentClaimType = 'Dismenberment' Type = 'Dismenberment'TPDClaimType = 'TPD' Type = 'TPD'
- ระบบเลือกกรมธรรม์ที่ได้จากข้อมูลสินไหม และข้อมูลค่าใช้จ่ายในการสอบสวน
- ตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- Step2: คัดเลือกข้อมูลเพื่อประมวลผล Alteration Claim แบ่งเป็น 3 กลุ่ม ดังนี้ กลุ่มที่ 1: รายการสินไหมที่อนุมัติในรอบ Quarterกลุ่มที่ 2: สินไหม Decline ที่มีค่าใช้จ่ายสอบสวนกลุ่มที่ 3: สินไหม Approve ในรอบก่อนหน้า ที่มีค่าใช้จ่ายสอบสวนเพิ่มเติมคำอธิบายเป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผลการประมวลผลในกลุ่มนี้ หากเป็นเลขสินไหมที่มีค่า Investigation & Legal Expense ระบบจะทำการคำนวณและแสดงรายการ ค่าใช้จ่ายสอบสวนเพิ่มเติมกรณีไม่มีค่าใช้จ่ายดังกล่าว ระบบจะประมวลผลเฉพาะข้อมูลสินไหมตามปกติเป็นรายการสินไหมที่มีสถานะ Decline ถึงแม้จะไม่มีการจ่ายเงินค่าสินไหม แต่หากมีการเกิดค่า Investigation & Legal Expense จริงระบบจะต้องแสดงรายการนี้ในรายงาน Claim Notificationระบบจะประมวลผลเฉพาะเคสที่มีค่าใช้จ่ายสอบสวนเกิดขึ้นจริง เท่านั้นหากไม่มีค่าใช้จ่ายดังกล่าว จะไม่แสดงรายการในรายงานแยกกลุ่มเพื่อรองรับกรณีค่าใช้จ่ายสอบสวนเกิดภายหลังจากที่เคยส่ง RI Claim ไปแล้วระบบจะนำมาคำนวณและแสดงเฉพาะส่วนค่าใช้จ่ายสอบสวนระบบจะประมวลผลเฉพาะเคสที่มีค่าใช้จ่ายสอบสวนเกิดขึ้นจริง เท่านั้นตรวจสอบข้อมูลสินไหมต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarterกรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอต้องมีสถานะพิจารณาเป็น Declineตรวจสอบสถานะสินไหมจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim noกรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติก่อนหน้ารอบ Quarterตรวจสอบสถานะสินไหม และวันที่อนุมัติจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim noและตรวจสอบต้องเป็นรายการสินไหมที่เคยประมวลผล ri claim ไปแล้ว โดยตรวจสอบข้อมูลจาก A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death ด้วยเงื่อนไข Claim noตรวจสอบสถานะกรมธรรม์ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New businessต้องเป็นกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancelตรวจสอบทุนรายสมาชิกกำหนด Minimum Sum Insured = 500,000 บาท สำหรับการส่ง Reinsurance Claimการตรวจสอบอ้างอิงข้อมูลทุนจากจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPDสมาชิกที่ไม่เข้าเงื่อนไขตาม RI Condition ของ Treaty จะไม่ถูกส่งประมวลผล Reinsurance ตรวจสอบ Age Limitต้องมีอายุไม่เกิน Age Limit โดยหากอายุเกิน ต้องเป็นเลขที่สมาชิกที่ได้รับการอนุโลม (หากอายุเกิน และไม่ได้รับการอนุโลมจะไม่นำเคลมมาประมวลผล / ไม่ส่ง Reinsurance)ดึงข้อมูลอายุจากค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจาก ข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail ตรวจสอบข้อมูลค่าใช้จ่ายสอบสวนหากพบรายการสินไหมที่มีค่า Investigation & Legal Expense ระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติมดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหมต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผลระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติมดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหมต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผลระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติมดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหม
- เป็นรายการสินไหมที่มีสถานะ Approve และมี วันที่อนุมัติอยู่ภายใน Quarter Period ที่ประมวลผล
- การประมวลผลในกลุ่มนี้ หากเป็นเลขสินไหมที่มีค่า Investigation & Legal Expense ระบบจะทำการคำนวณและแสดงรายการ ค่าใช้จ่ายสอบสวนเพิ่มเติม
- กรณีไม่มีค่าใช้จ่ายดังกล่าว ระบบจะประมวลผลเฉพาะข้อมูลสินไหมตามปกติ
- เป็นรายการสินไหมที่มีสถานะ Decline ถึงแม้จะไม่มีการจ่ายเงินค่าสินไหม แต่หากมีการเกิดค่า Investigation & Legal Expense จริง
- ระบบจะต้องแสดงรายการนี้ในรายงาน Claim Notification
- ระบบจะประมวลผลเฉพาะเคสที่มีค่าใช้จ่ายสอบสวนเกิดขึ้นจริง เท่านั้นหากไม่มีค่าใช้จ่ายดังกล่าว จะไม่แสดงรายการในรายงาน
- แยกกลุ่มเพื่อรองรับกรณีค่าใช้จ่ายสอบสวนเกิดภายหลังจากที่เคยส่ง RI Claim ไปแล้ว
- ระบบจะนำมาคำนวณและแสดงเฉพาะส่วนค่าใช้จ่ายสอบสวน
- ระบบจะประมวลผลเฉพาะเคสที่มีค่าใช้จ่ายสอบสวนเกิดขึ้นจริง เท่านั้น
- ต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติภายในรอบ Quarter
- กรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอ
- ต้องมีสถานะพิจารณาเป็น Decline
- ตรวจสอบสถานะสินไหมจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim no
- กรณีเป็น accident death ให้ตรวจสอบจากค่า ClaimAccident ต้องมีค่ามากกว่า 0 เนื่องจากค่า Type จะลงเป็น 'Death' เสมอ
- ต้องมีสถานะพิจารณาเป็น Approve และมีวันที่อนุมัติก่อนหน้ารอบ Quarter
- ตรวจสอบสถานะสินไหม และวันที่อนุมัติจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual) ด้วยเงื่อนไข Claim noและ
- ตรวจสอบต้องเป็นรายการสินไหมที่เคยประมวลผล ri claim ไปแล้ว โดยตรวจสอบข้อมูลจาก A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death ด้วยเงื่อนไข Claim no
- ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New business
- ต้องเป็นกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy) ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'
- สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel
- กำหนด Minimum Sum Insured = 500,000 บาท สำหรับการส่ง Reinsurance Claim
- การตรวจสอบอ้างอิงข้อมูลทุนจากจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPD
- กรณี Accident Death: SumInsuredAccident
- กรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)
- กรณี TPD: SumInsuredTPD
- สมาชิกที่ไม่เข้าเงื่อนไขตาม RI Condition ของ Treaty จะไม่ถูกส่งประมวลผล Reinsurance
- ต้องมีอายุไม่เกิน Age Limit โดยหากอายุเกิน ต้องเป็นเลขที่สมาชิกที่ได้รับการอนุโลม (หากอายุเกิน และไม่ได้รับการอนุโลมจะไม่นำเคลมมาประมวลผล / ไม่ส่ง Reinsurance)
- ดึงข้อมูลอายุจากค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจาก ข้อมูล CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ โดย CertNo นั้นจะต้องไม่ตรงกับ CertNo ที่อายุเกินและไม่ได้รับการอนุโลมจากหน้าจอ Policy Detail
- หากพบรายการสินไหมที่มีค่า Investigation & Legal Expense ระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติม
- ดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหม
- ต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผล
- ระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติม
- ดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหม
- ต้องมีค่า Investigation & Legal Expense หากไม่พบค่าใช้จ่ายดังกล่าว ระบบจะไม่รวมรายการนี้เข้าสู่การประมวลผล
- ระบบจะคำนวณและแสดงค่า Paid Amount Investigation Expense และ Reinsurer's Share Investigation Expense เพิ่มเติม
- ดึงค่าจาก BD-PS-011 ข้อมูล Investigate Expense (Actual) ด้วยเงื่อนไขเลขที่สินไหม
- Step 2.1: เตรียมข้อมูลกรมธรรม์เพื่อออกรายงาน EDWดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผลหัวข้อคำอธิบายเงื่อนไขการบันทึกรายการPol Noเลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Commencement Dateวันเริ่มสัญญาครั้งแรกดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Renewal Dateวันเริ่มสัญญาปีปัจจุบันดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Pol. Yr.ปีกรมธรรม์ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Policy Nameชื่อกรมธรรม์ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)End Dateวันที่สิ้นสุดความคุ้มครองดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
- แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- Step 3: เตรียมข้อมูล และคำนวณรายกรมธรรม์ และรายสมาชิก ดังนี้หัวข้อคำอธิบายเงื่อนไขการบันทึกรายการPolicy No.เลขกรมธรรม์แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Classประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detailแสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์Typeประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์Cert. No.เลขสมาชิกแสดงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Effective Dateวันที่เริ่มคุ้มครองปีปัจจุบันแสดงค่า EffectiveDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Expiry Dateวันที่สิ้นสุดความคุ้มครองแสดงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)Sexเพศผู้เอาประกันแสดงค่า Sex จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Ageอายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์แสดงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Event Dateวันที่เกิดเหตุ/วันที่เสียชีวิตแสดงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Causeสาเหตุของการเคลม เช่น เสียชีวิต อุบัติเหตุ หรือสาเหตุอื่นตามเงื่อนไขกรมธรรม์แสดงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Claim Benefitsทุนประกันตามความคุ้มครองแสดงค่าทุนจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPDApproval Dateวันที่อนุมัติสินไหมแสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)Incurred Amountจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายแสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPDPaid Amount Claimจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายแสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: ClaimAccidentกรณี Dismenberment: ClaimAmountกรณี TPD: ClaimAmountPaid Amount Investigation Expenseจำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่ายแสดงค่า ExpenseAmount จาก BD-PS-011 ข้อมูล Investigate Expense (Actual) Reinsurer's Share Claimจำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurerระบบคำนวณ Reinsurer’s Share Claim โดยหาวงเงินที่เข้าประกันต่อจาก Claim Benefits ตามช่วงทุน (ต่ำกว่า 500,000 ไม่เข้าประกันต่อ, ช่วง 400,000–2,000,000 เข้าประกันต่อ 50%, เกิน 2,000,000 เข้าประกันต่อ 100%) แล้วคูณด้วยสัดส่วนการจ่ายจริง (Paid Amount Claim / Claim Benefits)สูตรคำนวณคำนวณ SRกรณีที่ 1: ถ้า Claim Benefits < 500,000SR = 0 (ไม่คิด share ให้ Reinsurer)กรณีที่ 2: ถ้า 500,000 ≤ Claim Benefits <= 2,000,000SR = (Claim Benefits− 400,000) × 50%กรณีที่ 3: ถ้า Claim Benefits > 2,000,000SR = [(Claim Benefits − 2,000,000) × 100%] + [(2,000,000 − 400,000) × 50%]คำนวณ Reinsurer’s Share ClaimReinsurer’s Share Claim = SR × (Paid Amount Claim / Claim Benefits) *สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*Reinsurer's Share Investigation Expenseจำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurerคำนวณจาก SR × (Paid Amount Investigation Expense / Claim Benefits)Reinsurer's Share Claim / Paid Amount Claim * Paid Amount Investigation Expense
- แสดงค่า PolicyNo จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
- แสดงค่า Certno จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า EffectiveDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- แสดงค่า Sex จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า Age จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า AccidentDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่า ClaimCause จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่าทุนจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPD
- กรณี Accident Death: SumInsuredAccident
- กรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)
- กรณี TPD: SumInsuredTPD
- แสดงค่า ApprovedDate จาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)
- แสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: SumInsuredAccidentกรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)กรณี TPD: SumInsuredTPD
- กรณี Accident Death: SumInsuredAccident
- กรณี Dismenberment: SumInsuredDismenberment (มาจากทุน Accident)
- กรณี TPD: SumInsuredTPD
- แสดงค่าจำนวนเงินสินไหมที่บริษัทอนุมัติจ่ายจาก BD-PS-003 ข้อมูล Claim (Estimate,Actual)กรณี Accident Death: ClaimAccidentกรณี Dismenberment: ClaimAmountกรณี TPD: ClaimAmount
- กรณี Accident Death: ClaimAccident
- กรณี Dismenberment: ClaimAmount
- กรณี TPD: ClaimAmount
- แสดงค่า ExpenseAmount จาก BD-PS-011 ข้อมูล Investigate Expense (Actual)
- ระบบคำนวณ Reinsurer’s Share Claim โดยหาวงเงินที่เข้าประกันต่อจาก Claim Benefits ตามช่วงทุน (ต่ำกว่า 500,000 ไม่เข้าประกันต่อ, ช่วง 400,000–2,000,000 เข้าประกันต่อ 50%, เกิน 2,000,000 เข้าประกันต่อ 100%) แล้วคูณด้วยสัดส่วนการจ่ายจริง (Paid Amount Claim / Claim Benefits)
- สูตรคำนวณคำนวณ SRกรณีที่ 1: ถ้า Claim Benefits < 500,000SR = 0 (ไม่คิด share ให้ Reinsurer)กรณีที่ 2: ถ้า 500,000 ≤ Claim Benefits <= 2,000,000SR = (Claim Benefits− 400,000) × 50%กรณีที่ 3: ถ้า Claim Benefits > 2,000,000SR = [(Claim Benefits − 2,000,000) × 100%] + [(2,000,000 − 400,000) × 50%]คำนวณ Reinsurer’s Share ClaimReinsurer’s Share Claim = SR × (Paid Amount Claim / Claim Benefits) *สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*
- คำนวณ SRกรณีที่ 1: ถ้า Claim Benefits < 500,000SR = 0 (ไม่คิด share ให้ Reinsurer)กรณีที่ 2: ถ้า 500,000 ≤ Claim Benefits <= 2,000,000SR = (Claim Benefits− 400,000) × 50%กรณีที่ 3: ถ้า Claim Benefits > 2,000,000SR = [(Claim Benefits − 2,000,000) × 100%] + [(2,000,000 − 400,000) × 50%]
- กรณีที่ 1: ถ้า Claim Benefits < 500,000SR = 0 (ไม่คิด share ให้ Reinsurer)
- SR = 0 (ไม่คิด share ให้ Reinsurer)
- กรณีที่ 2: ถ้า 500,000 ≤ Claim Benefits <= 2,000,000SR = (Claim Benefits− 400,000) × 50%
- SR = (Claim Benefits− 400,000) × 50%
- กรณีที่ 3: ถ้า Claim Benefits > 2,000,000SR = [(Claim Benefits − 2,000,000) × 100%] + [(2,000,000 − 400,000) × 50%]
- SR = [(Claim Benefits − 2,000,000) × 100%] + [(2,000,000 − 400,000) × 50%]
- คำนวณ Reinsurer’s Share ClaimReinsurer’s Share Claim = SR × (Paid Amount Claim / Claim Benefits)
- Reinsurer’s Share Claim = SR × (Paid Amount Claim / Claim Benefits)
- *สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*
- คำนวณจาก SR × (Paid Amount Investigation Expense / Claim Benefits)
- Reinsurer's Share Claim / Paid Amount Claim * Paid Amount Investigation Expense
- Step 4: ระบบบันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-2-5 ตัวอย่าง output file - BDR - Alteration - Claim Death


===== PAGE 1313669179 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration > BD-AP-001-03-02-02 Alteration - New Member และ Termination =====
Overview
กระบวนการคัดเลือกและคำนวณข้อมูล Alteration ประเภท New Member (Addition) และ Termination สำหรับกรมธรรม์ Group PA ภายใต้ Treaty Thaire Group PA โดยครอบคลุมทั้งกรณีสมาชิกใหม่ที่ต้องส่งประกันต่อ (Reinsurance) และกรณีสมาชิกลาออกที่ต้องมีการปรับลดหรือคืนเบี้ยประกันต่อ และใช้จัดทำรายงาน Actual ในแต่ละ Quarter
Objective
- เพื่อกำหนดหลักเกณฑ์การคัดเลือกสมาชิกใหม่ (New Member) และสมาชิกลาออก (Termination) ที่ต้องนำมาประมวลผล Reinsurance
- เพื่อให้การคำนวณเบี้ยประกันต่อสำหรับสมาชิกใหม่ และสมาชิกลาออก เป็นไปตามเงื่อนไข Treaty และ RI Condition ที่เกี่ยวข้อง
- เพื่อให้ข้อมูล Alteration ที่แสดงในรายงาน Actual ของแต่ละ Quarter ถูกต้อง ครบถ้วน และสอดคล้องกับช่วงเวลาการประมวลผล
Process Overview
- ดึงข้อมูล Alteration ประเภท New Member และ Termanation ตาม Quarter ที่เลือก
- ตรวจสอบว่า Alteration อยู่ในช่วงเวลาที่ต้องนำมารายงาน
- ตรวจสอบเงื่อนไขการส่ง Reinsurance ตาม Treaty และ RI Condition
- คัดเลือกเฉพาะสมาชิกที่เข้าเงื่อนไขและต้องคำนวณเบี้ยประกันต่อ
- จัดเตรียมข้อมูลเพื่อแสดงในรายงาน Alteration ของ Quarter นั้น
Scope
- คำนวณเฉพาะกรมธรรม์ที่ส่ง Treaty Thaire Group PA
- คำนวณระดับ “รายสมาชิก”
- ทุนต่ำกว่า 500,000 ไม่เข้า RI ยกเว้นกรณีมีการเปลี่ยนแปลงทุนข้ามเกณฑ์
- แสดงผลเฉพาะรายการที่มีผลกับ Quarter ที่เลือก
ขั้นตอนดังต่อไปนี้
Step1: ดึงข้อมูลดังนี้
| ประเภทข้อมูล | source | เงื่อนไขการดึงข้อมูล |
| ข้อมูล Alteration | BD-PS-006 ข้อมูล Alteration (Actual) | อ้างอิง Step 2 |
| ข้อมูลกรมธรรม์ | BD-PS-001 ข้อมูล Master group policy (List of policy) |  |
| ข้อมูล ri condition | BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI ConditionBD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium RateBD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | ดึงข้อมูล Policy Detail Condition ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ดึงข้อมูล RI Condition ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionดึงข้อมูล RI Premium Rate ที่ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั |
Step 2: ระบบคัดเลือกข้อมูล Alteration - New Member / Addition และ Termination เพื่อกำหนดว่า Alteration รายการใดควรถูกนำมาแสดงในรายงาน Quarter ปัจจุบัน
คัดเลือกรายการ Alteration ระบบจะประมวลผล Reinsurance Premium โดยคัดเลือกตาม Document Date และ Alteration Date ที่เกิดขึ้นใน Quarter Period ตามเงื่อนไข
| Case | DocumentDate | AlterationDate | การแสดงผลในรายงาน |
| 1 | อยู่ใน Quarter ปัจจุบัน | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 2 | อยู่ใน Quarter ปัจจุบัน | ก่อน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 3 | อยู่ใน Quarter ปัจจุบัน | หลัง Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน (รอ Quarter ถัดไป) |
| 4 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 5 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | ก่อน Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน |
| 6 | เกิน 1 ปีจาก Quarter ที่เลือก | ก่อน/อยู่ใน/หลัง Quarter | ไม่ดึงมาประมวลผล |
- ดึงข้อมูลกรมธรรม์จาก BD-PS-006 ข้อมูล Alteration (Actual)
- ระบบจะพิจารณาการแสดงข้อมูลในรายงานของ Quarter ที่เลือก โดยอ้างอิงจาก Document Date และ Alteration Date ตามเงื่อนไขดังนี้กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือกกรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือกกรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกัน
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- กรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- กรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- ข้อมูลตามประเภท Alteration ดังนี้Alteration TypeDescriptionCode ที่แสดงในรายงานAlterationMovement จาก BD-PS-006 ข้อมูล Alteration (Actual)New Member / Additionการเพิ่มสมาชิกใหม่NMACancellation / TerminationการยกเลิกสมาชิกCLCIncreased Sum Assuredการเพิ่มทุนประกันICNDecreased Sum AssuredการลดทุนประกันDCE
- เลือกรายการ Alteration โดยตรวจสอบจาก AlterationMovement ดังนี้กรณี New Member / Addition มีค่าเป็น Aกรณี Termination มีค่าเป็น C
- กรณี New Member / Addition มีค่าเป็น A
- กรณี Termination มีค่าเป็น C
- ระบบจะเลือกแสดงรายการที่มีผลกับ Quarter ปัจจุบัน โดยพิจารณาจากวันที่ทำรายการ (Document Date) และวันที่เกิด Alteration ร่วมกัน
Step 3: ตรวจสอบข้อมูลกรมธรรม์ และรายสมาชิก หลังจากได้รายการ Alteration ที่อยู่ใน Quarter แล้ว ระบบจะตรวจสอบว่า ‘ส่ง RI ได้หรือไม่’ ในระดับกรมธรรม์และสมาชิก ดังนี้
| ประเภทการตรวจสอบ | เงื่อนไข |
| ตรวจสอบสถานะกรมธรรม์ | ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New businessต้องเป็นกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy)ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel |
| ตรวจสอบทุนรายสมาชิก | Sum Insured Accident < 500,000 → ไม่ถูกนำมาคำนวณเบี้ยประกันต่อการตรวจสอบอ้างอิงข้อมูลทุนจาก SumInsuredAccident จาก BD-PS-006 ข้อมูล Alteration (Actual)สมาชิกที่ไม่เข้าเงื่อนไขตาม RI Condition ของ Treaty จะไม่ถูกส่งประมวลผล Reinsurance |
| ตรวจสอบ Age Limit | สมาชิกที่อายุเกิน Age Limit จะถูกนำมาคำนวณเฉพาะกรณีที่ได้รับการอนุโลมจาก Reinsurer เท่านั้น หากไม่พบการอนุโลม ระบบจะไม่ส่งรายการนั้นเข้า RIดึงข้อมูลอายุปัจจุบันจากค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual)ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจาก CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
Step 3.1 เตรียมข้อมูลกรมธรรม์เพื่อออกรายงาน EDW
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ |
| Pol No | เลขกรมธรรม์ | แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Renewal Date | วันเริ่มสัญญาปีปัจจุบัน | ดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Pol. Yr. | ปีกรมธรรม์ | ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Policy Name | ชื่อกรมธรรม์ | ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| End Date | วันที่สิ้นสุดความคุ้มครอง | ดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
Step 4: เตรียมข้อมูล และคำนวณรายกรมธรรม์ และรายสมาชิก ดังนี้
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า PolicyNo จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Cert. No. | เลขสมาชิก | ดึงค่า CertNo จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Coverage Period - Begin | วันที่เริ่มต้นของช่วงระยะเวลาความคุ้มครองของสมาชิก | แบ่งเป็น 2 กรณีสำหรับ NewMember ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual)สำหรับ Termination ดึงค่า MemberEffectiveDate จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Coverage Period - End | วันที่สิ้นสุดของช่วงระยะเวลาความคุ้มครองของสมาชิก | ดึงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Entrant Date | วันที่สมาชิกเริ่มเข้าเป็นผู้เอาประกันภายใต้กรมธรรม์ (วันที่เริ่มมีความคุ้มครองครั้งแรก) | ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Withdrawal Date | วันที่สมาชิกลาออก | ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | เป็น 2 กรณีสำหรับ NewMember คำนวณโดยใช้ Coverage Period - End ลบด้วย Coverage Period - Beginสำหรับ Termination คำนวณโดยใช้ Coverage Period - End ลบด้วย Withdrawal Date |
| SUM INSURED ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุ | ดึงค่า SumInsuredAccident จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| SUM INSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | คำนวณจาก SUM INSURED ACCIDENT หารด้วย 1000 |
| SUM INSURED/1,000 MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | คำนวณจากค่า SUM INSURED/1,000 ACCIDENT คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| SUM INSURED/1,000 LOADINGS | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีพิเศษแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | คำนวณจากค่า SUM INSURED/1,000 ACCIDENT คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| SUM REINSURED/1,000 ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | คำนวณ ดังนี้หาก SUM INSURED/1,000 ACCIDENT < 500SUM REINSURED/1,000 ACCIDENT = 0หาก SUM INSURED/1,000 ACCIDENT ตั้งแต่ 500 ถึงน้อยกว่า 2,000 ให้คำนวณ 50% ของส่วนที่เกิน 400SUM REINSURED/1,000 ACCIDENT = (SUM INSURED/1,000 ACCIDENT − 400) × 50%หาก SUM INSURED/1,000 ACCIDENTตั้งแต่ มากกว่า 2,000 ขึ้นไปSUM REINSURED/1,000 ACCIDENT = (2,000 − 400) × 50% + (SUM INSURED/1,000 ACCIDENT − 2,000) × 100%*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition* |
| SUM REINSURED/1,000 MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | คำนวณจาก SUM REINSURED/1,000 ACCIDENT คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| SUM REINSURED/1,000 LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | คำนวณจากค่า SUM REINSURED/1,000 ACCIDENT คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| Type | ประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition | ดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateเลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age |
| REINSURANCE PREMIUM ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | คำนวณจาก SUM REINSURED/1,000 ACCIDENT คูณกับ RI Rate คูณกับ No. of Day หารด้วย จำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| ผลรวม RI Premium Loading | ผลรวม RI Premium Loading | คำนวณจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraftมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| REINSURANCE PREMIUM LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | คำนวณจาก SUM REINSURED/1,000 LOADINGS คูณกับ RI Rate คูณกับ ผลรวม RI Premium Loading คูณกับ No. of Day หารด้วย จำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| REINSURANCE PREMIUM DISCOUNT | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | คำนวณจากส่วนลดเบี้ยสำหรับความคุ้มครอง Murder & Assault (MA) และส่วนลดตามปริมาณกลุ่ม (Group Volume Discount) โดยนำส่วนลดสำหรับความคุ้มครอง Murder & Assault (MA) มาคำนวณจากเบี้ยอุบัติเหตุพื้นฐาน และนำส่วนลดตามปริมาณกลุ่มมาคำนวณจากเบี้ยอุบัติเหตุหลังหักส่วนลดความคุ้มครอง Murder & Assault (MA) รวมกับเบี้ยส่วนเพิ่ม (Premium Loadings)MA Discount = %Discount for MA * REINSURANCE PREMIUM ACCIDENTGroup Volume Discount = (%Discount Group Volume * (((1-%Discount for MA) * REINSURANCE PREMIUM ACCIDENT) + REINSURANCE PREMIUM LOADINGS))REINSURANCE PREMIUM DISCOUNT = MA Discount + Group Volume Discountมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| Commission | ค่า Commission | คำนวณจาก (REINSURANCE PREMIUM ACCIDENT + REINSURANCE PREMIUM LOADINGS - REINSURANCE PREMIUM DISCOUNT) * %RI Commission %RI Commission ดึงค่าจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
Step 5: ระบบบันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-2-1 ตัวอย่าง output file - BDR - Alteration - New Member / Addition, A09-12-2-2 ตัวอย่าง output file - BDR - Alteration - Cancellation / Termination


===== PAGE 1313669220 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration > BD-AP-001-03-02-03 Alteration - Increased SA และ Decreased SA =====
Overview
การประมวลผล Alteration ประเภทการเพิ่มทุน (Increased SA) และการลดทุน (Decreased SA) สำหรับกรมธรรม์ Group PA ภายใต้ Treaty Thaire Group PA เพื่อใช้คำนวณเบี้ยประกันต่อ (Reinsurance Premium) และเบี้ยคืน (Refund Premium) ให้ถูกต้องตามการเปลี่ยนแปลงทุนประกันของสมาชิกในแต่ละรอบ Quarter
Objective
- เพื่อกำหนดเงื่อนไขการคัดเลือก Alteration ที่ต้องนำมาประมวลผลใน Quarter ที่รายงาน
- เพื่อระบุกรณีที่ต้อง คิดเบี้ยเพิ่ม หรือ คิดเบี้ยคืน จากการเปลี่ยนแปลงทุนประกัน
- เพื่อให้การคำนวณ Reinsurance สอดคล้องกับเงื่อนไข Minimum Sum Assured และ Age Limit ของ Treaty
- เพื่อให้ผลลัพธ์ที่ส่ง Reinsurer สะท้อนการเปลี่ยนแปลงทุนประกันจริงของสมาชิก
Process Overview
- ระบบดึงข้อมูล Alteration (Increased SA / Decreased SA) ที่เกี่ยวข้องกับ Quarter ที่ประมวลผล โดยพิจารณาจาก Document Date และ Alteration Date
- คัดกรองเฉพาะกรมธรรม์ที่อยู่ภายใต้ Treaty Thaire Group PA และยังอยู่ในสถานะที่ส่ง RI ได้
- ตรวจสอบการเปลี่ยนแปลง Sum Insured Accident ก่อน–หลัง Alteration เพื่อพิจารณาว่ายังอยู่ในเงื่อนไข RIเข้าเงื่อนไข RI ใหม่หรือออกจากเงื่อนไข RI
- ยังอยู่ในเงื่อนไข RI
- เข้าเงื่อนไข RI ใหม่
- หรือออกจากเงื่อนไข RI
- ตรวจสอบ Age Limit และการอนุโลม (Exception) ของสมาชิก
- คำนวณเบี้ยประกันต่อ หรือเบี้ยคืน เฉพาะส่วนที่เกิดจากการเปลี่ยนแปลงทุนประกัน
- บันทึกผลลัพธ์เพื่อแสดงในรายงาน Alteration ของ Quarter นั้น
ขั้นตอนดังต่อไปนี้
Step1: ดึงข้อมูลดังนี้
| ประเภทข้อมูล | source | เงื่อนไขการดึงข้อมูล |
| ข้อมูล Alteration | BD-PS-006 ข้อมูล Alteration (Actual) | อ้างอิง Step 2 |
| ข้อมูลกรมธรรม์ | BD-PS-001 ข้อมูล Master group policy (List of policy) |  |
| ข้อมูล ri condition | BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI ConditionBD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium RateBD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | ดึงข้อมูล Policy Detail Condition ที่ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ดึงข้อมูล RI Condition ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionดึงข้อมูล RI Premium Rate ที่ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั |
Step 2: ระบบคัดเลือกข้อมูล Alteration - Increased/Decreased Sum Assured เพื่อกำหนดว่า Alteration รายการใดควรถูกนำมาแสดงในรายงาน Quarter ปัจจุบัน
คัดเลือกรายการ Alteration ระบบจะประมวลผล Reinsurance Premium โดยคัดเลือกตาม Document Date และ Alteration Date ที่เกิดขึ้นใน Quarter Period ตามเงื่อนไข
| Case | DocumentDate | AlterationDate | การแสดงผลในรายงาน |
| 1 | อยู่ใน Quarter ปัจจุบัน | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 2 | อยู่ใน Quarter ปัจจุบัน | ก่อน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 3 | อยู่ใน Quarter ปัจจุบัน | หลัง Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน (รอ Quarter ถัดไป) |
| 4 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | อยู่ใน Quarter ปัจจุบัน | แสดงใน Quarter ปัจจุบัน |
| 5 | ก่อน Quarter ปัจจุบัน (ภายใน 1 ปี) | ก่อน Quarter ปัจจุบัน | ไม่แสดงใน Quarter ปัจจุบัน |
| 6 | เกิน 1 ปีจาก Quarter ที่เลือก | ก่อน/อยู่ใน/หลัง Quarter | ไม่ดึงมาประมวลผล |
- ดึงข้อมูลกรมธรรม์จาก BD-PS-006 ข้อมูล Alteration (Actual)
- ระบบจะพิจารณาการแสดงข้อมูลในรายงานของ Quarter ที่เลือก โดยอ้างอิงจาก Document Date และ Alteration Date ตามเงื่อนไขดังนี้กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือกกรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือกกรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- กรณีที่ “แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกันDocument Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือกDocument Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ใน Quarter เดียวกัน
- Document Date อยู่ใน Quarter ที่เลือก และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ใน Quarter ที่เลือก
- กรณีที่ “ไม่แสดงใน Quarter ที่เลือก”Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- Document Date อยู่ใน Quarter ที่เลือก แต่ Alteration Date อยู่หลัง Quarter ที่เลือก (จะนำไปแสดงใน Quarter ถัดไป)
- Document Date อยู่ก่อน Quarter ที่เลือก (ไม่เกิน 1 ปี) และ Alteration Date อยู่ก่อน Quarter ที่เลือก
- กรณีที่ “ไม่ดึงข้อมูลมาประมวลผล”Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- Document Date เกิน 1 ปีก่อน Quarter ที่เลือก ไม่ว่าค่า Alteration Date จะเป็นช่วงใด
- ข้อมูลตามประเภท Alteration ดังนี้Alteration TypeDescriptionCode ที่แสดงในรายงานAlterationMovement จาก BD-PS-006 ข้อมูล Alteration (Actual)New Member / Additionการเพิ่มสมาชิกใหม่NMACancellation / TerminationการยกเลิกสมาชิกCLCIncreased Sum Assuredการเพิ่มทุนประกันICNDecreased Sum AssuredการลดทุนประกันDCE
- เลือกรายการ Alteration โดยตรวจสอบจาก AlterationMovement ดังนี้กรณี Increased Sum Assured มีค่าเป็น Nกรณี Decreased Sum Assured มีค่าเป็น E
- กรณี Increased Sum Assured มีค่าเป็น N
- กรณี Decreased Sum Assured มีค่าเป็น E
- ระบบจะเลือกแสดงรายการที่มีผลกับ Quarter ปัจจุบัน โดยพิจารณาจากวันที่ทำรายการ (Document Date) และวันที่เกิด Alteration ร่วมกัน
Step 3: ตรวจสอบข้อมูลกรมธรรม์ และรายสมาชิก หลังจากได้รายการ Alteration ที่อยู่ใน Quarter แล้ว ระบบจะตรวจสอบว่า ‘ส่ง RI ได้หรือไม่’ ในระดับกรมธรรม์และสมาชิก ดังนี้
| ประเภทการตรวจสอบ | เงื่อนไข Increased SA | เงื่อนไข Decreased SA |
| ตรวจสอบสถานะกรมธรรม์ | ข้อมูลสถานะกรมธรรม์ (Inforce / Lapse) ตรวจสอบจากสถานะ Status เป็น Lapsed, Inforce, New businessต้องเป็นกรมธรรม์ที่ส่ง Treaty Thaire Group PA โดย Match ตามเงื่อนไขใน BD-PS-001 ข้อมูล Master group policy (List of policy)ให้คัดกรองจาก ReInsur_No โดยดูจาก 2 หลักแรก มีค่าเป็น 'TG'สถานะกรมธรรม์ (Status) ต้องไม่ใช่ Cancel |
| ตรวจสอบทุนรายสมาชิก | ดึงข้อมูลทุนประกันก่อน และหลังจาก BD-PS-006 ข้อมูล Alteration (Actual)ก่อนปรับเพิ่ม: SumInsuredAccident_Beforeหลังปรับเพิ่ม: SumInsuredAccident_Afterหากทุนประกัน ก่อนและหลังการปรับเพิ่ม ≥ 500,000 บาทระบบ ประมวลผล RI เนื่องจากยังอยู่ในเงื่อนไขการส่งประกันต่อหากทุนประกัน ก่อนการปรับเพิ่ม < 500,000 บาท และหลังการปรับเพิ่ม >= 500,000 บาทระบบ ประมวลผล RI เพื่อคำนวณเบี้ยที่ต้องจ่ายเพิ่ม | ดึงข้อมูลทุนประกันก่อน และหลังจาก BD-PS-006 ข้อมูล Alteration (Actual)ก่อนปรับลด: SumInsuredAccident_Beforeหลังปรับลด: SumInsuredAccident_Afterหากทุนประกัน ก่อนและหลังการปรับลด ≥ 500,000 บาทระบบ ประมวลผล RI เนื่องจากยังอยู่ในเงื่อนไขการส่งประกันต่อ เพียงแต่มีการปรับลดทุนหากทุนประกัน ก่อนการปรับลด ≥ 500,000 บาท และหลังการปรับลด < 500,000 บาทระบบ ประมวลผล RI เพื่อคำนวณ เบี้ยคืน (Refund Premium) เนื่องจากกรมธรรม์ออกจากเงื่อนไขการส่งประกันต่อ |
| ตรวจสอบ Age Limit | สมาชิกที่อายุเกิน Age Limit จะถูกนำมาคำนวณเฉพาะกรณีที่ได้รับการอนุโลมจาก Reinsurer เท่านั้น หากไม่พบการอนุโลม ระบบจะไม่ส่งรายการนั้นเข้า RIดึงข้อมูลอายุปัจจุบันจากค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual)ตรวจสอบเงื่อนไขอายุ จาก Age Limit ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ตรวจสอบเงื่อนไขเลขที่สมาชิกที่ได้รับอนุโลมจาก CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม ตามเงื่อนไข BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  |
Step 3.1: เตรียมข้อมูลกรมธรรม์เพื่อออกรายงาน EDW
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ |
| Pol No | เลขกรมธรรม์ | แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Renewal Date | วันเริ่มสัญญาปีปัจจุบัน | ดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Pol. Yr. | ปีกรมธรรม์ | ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Policy Name | ชื่อกรมธรรม์ | ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| End Date | วันที่สิ้นสุดความคุ้มครอง | ดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
Step 4: เตรียมข้อมูล และคำนวณรายกรมธรรม์ และรายสมาชิก ดังนี้
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ SA แถวที่ 1 | เงื่อนไขการบันทึกรายการ SR แถวที่ 2 | เงื่อนไขการบันทึกรายการ RI Prem. แถวที่ 3 |
| POLICY No. | เลขกรมธรรม์ | ดึงค่า PolicyNo จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า PolicyNo จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า PolicyNo จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | แสดงค่า Occupation Class จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| Type | ประเภทความคุ้มครองตามที่กำหนดในข้อมูล Policy Detail | แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | แสดงค่า Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |
| Cert. No. | เลขสมาชิก | ดึงค่า CertNo จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า CertNo จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า CertNo จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ | ดึงค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า Age จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Coverage Period - Begin | วันที่เริ่มต้นของช่วงระยะเวลาความคุ้มครองของสมาชิก | ดึงค่า MemberEffectiveDate จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า MemberEffectiveDate จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า MemberEffectiveDate จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| Coverage Period - End | วันที่สิ้นสุดของช่วงระยะเวลาความคุ้มครองของสมาชิก | ดึงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) | ดึงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) | ดึงค่า EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Effective Date | วันที่มีผลบังคับสลักหลัง | ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual) | ดึงค่า AlterationDate จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| No. of Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล | คำนวณโดยใช้ Coverage Period - End ลบด้วย Effective Date | คำนวณโดยใช้ Coverage Period - End ลบด้วย Effective Date | คำนวณโดยใช้ Coverage Period - End ลบด้วย Effective Date |
| RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition | ดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateเลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age | ดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateเลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age | ดึงค่าจาก BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rateเลือกค่า RI Rate โดยใช้เงื่อนไข Class, Type, Age |
| ผลรวม RI Premium Loading | ผลรวม RI Premium Loading | คำนวณจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraft | คำนวณจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraft | คำนวณจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์RI Premium Loading for Motorcycle + RI Premium Loading for War + RI Premium Loading for Strike and Riot + RI Premium Loading for Sports and Activities + RI Premium Loading for Aircraft |
| SA / SR / RI Prem.(Before Change) ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA Before ACCIDENT แถวที่ 1 คำนวณจาก ค่า SumInsuredAccident_Before จาก BD-PS-006 ข้อมูล Alteration (Actual) หารด้วย 1000 | คำนวณหา SR Before ACCIDENT แถวที่ 2 ดังนี้หาก SA Before ACCIDENT แถวที่ 1 < 500 กำหนดค่าเป็น 0หาก SA Before ACCIDENT แถวที่ 1 ตั้งแต่ 500 ถึงน้อยกว่า 2,000คำนวณ (SA Before ACCIDENT แถวที่ 1 − 400) × 50%หาก SA Before ACCIDENT แถวที่ 1 ตั้งแต่ มากกว่า 2,000 ขึ้นไปคำนวณ (2,000 − 400) × 50% + (SA Before ACCIDENT แถวที่ 1 − 2,000) × 100% | RI Prem. Before ACCIDENT แถวที่ 3คำนวณจาก SR Before ACCIDENT แถวที่ 2 คูณกับ RI Rate คูณกับ No. of Day หารด้วยจำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Before Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | คำนวณหา SA Before MURDER แถวที่ 1จากค่า SA Before ACCIDENT แถวที่ 1 คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณหา SR Before MURDER แถวที่ 2จาก SR Before ACCIDENT แถวที่ 2 คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | กำหนดค่าเป็น ค่าว่าง |
| SA / SR / RI Prem.(Before Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | คำนวณหา SA Before LOADINGS แถวที่ 1จากค่า SA Before ACCIDENT แถวที่ 1 คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณหา SR Before LOADINGS แถวที่ 2จาก SR Before ACCIDENT แถวที่ 2 คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณหา RI Prem. Before LOADINGS แถวที่ 3จาก SR Before LOADINGS แถวที่ 2 คูณกับ RI Rate คูณกับ ผลรวม RI Premium Loading คูณกับ No. of Day หารด้วย จำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Before Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA Before DISCOUNT แถวที่ 1 กำหนดค่าเป็นค่าว่าง | SR Before DISCOUNT แถวที่ 2 กำหนดค่าเป็นค่าว่าง | RI Prem. Before DISCOUNT แถวที่ 3 คำนวณจากส่วนลดเบี้ยสำหรับความคุ้มครอง Murder & Assault (MA) และส่วนลดตามปริมาณกลุ่ม (Group Volume Discount) โดยนำส่วนลดสำหรับความคุ้มครอง Murder & Assault (MA) มาคำนวณจากเบี้ยอุบัติเหตุพื้นฐาน และนำส่วนลดตามปริมาณกลุ่มมาคำนวณจากเบี้ยอุบัติเหตุหลังหักส่วนลดความคุ้มครอง Murder & Assault (MA) รวมกับเบี้ยส่วนเพิ่ม (Premium Loadings)MA Discount = %Discount for MA * RI Prem. Before ACCIDENT แถวที่ 3Group Volume Discount = (%Discount Group Volume * (((1-%Discount for MA) * RI Prem. Before ACCIDENT แถวที่ 3) + RI Prem. Before LOADINGS แถวที่ 3))REINSURANCE PREMIUM DISCOUNT= MA Discount + Group Volume Discountมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(After Change) ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | ค่า SA After ACCIDENT แถวที่ 1 คำนวณจาก SumInsuredAccident_After จาก BD-PS-006 ข้อมูล Alteration (Actual) หารด้วย 1000 | คำนวณหา SR After ACCIDENT แถวที่ 2 ดังนี้หาก SA After ACCIDENT แถวที่ 1 < 500 กำหนดค่าเป็น 0หาก SA After ACCIDENT แถวที่ 1 ตั้งแต่ 500 ถึงน้อยกว่า 2,000คำนวณ (SA After ACCIDENT แถวที่ 1 − 400) × 50%หาก SA After ACCIDENT แถวที่ 1 ตั้งแต่ มากกว่า 2,000 ขึ้นไปคำนวณ (2,000 − 400) × 50% + (SA After ACCIDENT แถวที่ 1 − 2,000) × 100% | คำนวณหา RI Prem. After ACCIDENT แถวที่ 3 ดังนี้จาก SR After ACCIDENT แถวที่ 2 คูณกับ RI Rate คูณกับ No. of Day หารด้วย จำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(After Change) MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | คำนวณ SA After MURDER แถวที่ 1จากค่า SA After ACCIDENT แถวที่ 1 คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณ SR After MURDER แถวที่ 2จากค่า SA After ACCIDENT แถวที่ 2 คูณ %Murder & Assault (MA) จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | RI Prem. After MURDER แถวที่ 3 กำหนดค่าเป็น ค่าว่าง |
| SA / SR / RI Prem.(After Change) LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | คำนวณ SA After LOADINGS แถวที่ 1จากค่า SA After ACCIDENT แถวที่ 1 คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณ SR After LOADINGS แถวที่ 2จากค่า SA After ACCIDENT แถวที่ 2 คูณ %Special Coverage จาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ | คำนวณ RI Prem. After LOADINGS แถวที่ 3จาก SR After LOADINGS แถวที่ 2 คูณกับ RI Rate คูณกับ ผลรวม RI Premium Loading คูณกับ No. of Day หารด้วยจำนวนวันในปีกรมธรรม์จำนวนวันในปีกรมธรรม์ คำนวณจาก EndDate - EffectiveDate ของ กรมธรรม์และปีกรมธรรม์นั้นมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(After Change) DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA After DISCOUNT แถวที่ 1 กำหนดค่าเป็นค่าว่าง | SR After DISCOUNT แถวที่ 2 กำหนดค่าเป็น ค่าว่าง | คำนวณ RI Prem. After DISCOUNT แถวที่ 3 จากส่วนลดเบี้ยสำหรับความคุ้มครอง Murder & Assault (MA) และส่วนลดตามปริมาณกลุ่ม (Group Volume Discount) โดยนำส่วนลดสำหรับความคุ้มครอง Murder & Assault (MA) มาคำนวณจากเบี้ยอุบัติเหตุพื้นฐาน และนำส่วนลดตามปริมาณกลุ่มมาคำนวณจากเบี้ยอุบัติเหตุหลังหักส่วนลดความคุ้มครอง Murder & Assault (MA) รวมกับเบี้ยส่วนเพิ่ม (Premium Loadings)MA Discount = %Discount for MA * RI Prem. After ACCIDENT แถวที่ 3Group Volume Discount = (%Discount Group Volume * (((1-%Discount for MA) * RI Prem. After ACCIDENT แถวที่ 3) + RI Prem. After LOADINGS แถวที่ 3))REINSURANCE PREMIUM DISCOUNT= MA Discount + Group Volume Discountมีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Increased) ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | คำนวณ SA Increased ACCIDENT แถวที่ 1จากค่า SA After ACCIDENT แถวที่ 1 ลบกับ SA Before ACCIDENT แถวที่ 1 | คำนวณ SR Increased DISCOUNT แถวที่ 2จากค่า SR After ACCIDENT แถวที่ 2 ลบกับ SR Before ACCIDENT แถวที่ 2 | คำนวณ RI Prem. Increased ACCIDENT แถวที่ 3จากค่า RI Prem. After ACCIDENT แถวที่ 3 ลบกับ RI Prem. Before ACCIDENT แถวที่ 3มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Increased) MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | คำนวณ SA Increased MURDER แถวที่ 1จากค่า SA After MURDER แถวที่ 1 ลบกับ SA Before MURDER แถวที่ 1 | คำนวณ SR Increased MURDER แถวที่ 2จากค่า SR After MURDER แถวที่ 2 ลบกับ SR Before MURDER แถวที่ 2 | RI Prem. Increased MURDER แถวที่ 3 กำหนดค่าเป็นค่าว่าง |
| SA / SR / RI Prem.(Increased) LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | คำนวณ SA Increased LOADINGS แถวที่ 1จากค่า SA After LOADINGS แถวที่ 1 ลบกับ SA Before LOADINGS แถวที่ 1 | คำนวณ SR Increased LOADINGS แถวที่ 2จากค่า SA After LOADINGS แถวที่ 2 ลบกับ SA LOADINGS MURDER แถวที่ 2 | คำนวณ RI Prem. Increased MURDER แถวที่ 3 จากค่า RI Prem. After LOADINGS แถวที่ 3 ลบกับ RI Prem. Before LOADINGS แถวที่ 3 มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Increased) DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA Increased DISCOUNT แถวที่ 1 กำหนดค่าเป็นค่าว่าง | SR Increased DISCOUNT แถวที่ 2 กำหนดค่าเป็น ค่าว่าง | คำนวณ RI Prem. Increased DISCOUNT แถวที่ 3จากค่า RI Prem. After DISCOUNT แถวที่ 3 ลบกับ RI Prem. Before DISCOUNT แถวที่ 3มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Decreased) ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่ลดลงจากการเปลี่ยนแปลง | คำนวณ SA Decreased ACCIDENT แถวที่ 1จากค่า SA Before ACCIDENT แถวที่ 1 ลบกับ SA After ACCIDENT แถวที่ 1 | คำนวณ SR Decreased DISCOUNT แถวที่ 2จากค่า SR Before ACCIDENT แถวที่ 2 ลบกับ SR After ACCIDENT แถวที่ 2 | คำนวณ RI Prem. Decreased ACCIDENT แถวที่ 3จากค่า RI Prem. Before ACCIDENT แถวที่ 3 ลบกับ RI Prem. After ACCIDENT แถวที่ 3มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Decreased) MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่ลดลงจากการเปลี่ยนแปลง | คำนวณ SA Decreased MURDER แถวที่ 1จากค่า SA Before MURDER แถวที่ 1 ลบกับ SA After MURDER แถวที่ 1 | คำนวณ SR Decreased MURDER แถวที่ 2จากค่า SR Before MURDER แถวที่ 2 ลบกับ SR After MURDER แถวที่ 2 | RI Prem. Decreased MURDER แถวที่ 3 กำหนดค่าเป็น ค่าว่าง |
| SA / SR / RI Prem.(Decreased) LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่ลดลงจากการเปลี่ยนแปลง | คำนวณ SA Decreased LOADINGS แถวที่ 1จากค่า SA Before LOADINGS แถวที่ 1 ลบกับ SA After LOADINGS แถวที่ 1 | คำนวณ SR Decreased LOADINGS แถวที่ 2จากค่า SR Before LOADINGS แถวที่ 2 ลบกับ SR After LOADINGS แถวที่ 2 | คำนวณ RI Prem. Decreased LOADINGS แถวที่ 3 จากค่า RI Prem. Before LOADINGS แถวที่ 3 ลบกับ RI Prem. After LOADINGS แถวที่ 3 มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| SA / SR / RI Prem.(Decreased) DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่ลดลงจากการเปลี่ยนแปลง | SA Decreased DISCOUNT แถวที่ 1 กำหนดค่าเป็น ค่าว่าง | SR Decreased DISCOUNT แถวที่ 2 กำหนดค่าเป็น ค่าว่าง | คำนวณ RI Prem. Decreased DISCOUNT แถวที่ 3จากค่า RI Prem. Before DISCOUNT แถวที่ 3 ลบกับ RI Prem. After DISCOUNT แถวที่ 3มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| Commission - Increased | ค่า Commission - Increased | กำหนดค่าเป็นค่าว่าง | กำหนดค่าเป็น ค่าว่าง | คำนวณจาก (RI Prem. Increased ACCIDENT แถวที่ 3 + RI Prem. Increased LOADINGS แถวที่ 3 - RI Prem. Increased DISCOUNT แถวที่ 3) * %RI Commission %RI Commission ดึงค่าจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
| Commission - Decreased | ค่า Commission - Decreased | กำหนดค่าเป็นค่าว่าง | กำหนดค่าเป็น ค่าว่าง | คำนวณจาก (RI Prem. Decreased ACCIDENT แถวที่ 3 + RI Prem. Decreased LOADINGS แถวที่ 3 - RI Prem. Decreased DISCOUNT แถวที่ 3) * %RI Commission %RI Commission ดึงค่าจาก BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์มีการ Round เป็นทศนิยม 2 ตำแหน่ง |
*สัดส่วนการใช้ยอด min, max ที่เป็นค่า 400k 20M ใช้ค่าตาม min, max จาก Layers of Sum Assured BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition*
Step 5: ระบบบันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-2-3 ตัวอย่าง output file - BDR - Alteration - Increased Sum Assured, A09-12-2-4 ตัวอย่าง output file - BDR - Alteration - Decreased Sum Assured


===== PAGE 1313669193 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-02 Alteration > BD-AP-001-03-02-99 Apendix - ประเภท Alteration =====
| Alteration Type | Description | Code ที่แสดงในรายงาน | AlterationMovement จาก BD-PS-006 ข้อมูล Alteration (Actual) |
| New Member / Addition | การเพิ่มสมาชิกใหม่ | NM | A |
| Cancellation / Termination | การยกเลิกสมาชิก | CL | C |
| Increased Sum Assured | การเพิ่มทุนประกัน | IC | N |
| Decreased Sum Assured | การลดทุนประกัน | DC | E |


===== PAGE 1313669269 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-03 ประมวลผลออกรายงาน BDR =====
Overview
กระบวนการจัดเตรียมข้อมูลสำหรับจัดทำ Report สำหรับส่ง Reinsurer - Bordereau มีวัตถุประสงค์เพื่อใช้ส่งข้อมูลให้บริษัท Reinsurance ซึ่งประกอบด้วย ข้อมูล Renewal / Alteration / Claim ในรอบการประมวลผลแบบ Quarterly
Objective
- เพื่อจัดทำไฟล์ BDR สำหรับส่งบริษัท Reinsurance ตามรอบการประมวลผลแบบ Quarterly
- เพื่อสรุปข้อมูล Premium, Alteration, Claim ที่เกิดขึ้นจริงในรอบไตรมาสอย่างถูกต้อง
- เพื่อจัดเตรียมข้อมูลในระดับ Policy No และ Effective Date สำหรับใช้เป็นฐานข้อมูลในการรายงานและอ้างอิงกับ Reinsurer
Dependency
- การจัดเตรียมรายงาน BDR ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-03-01 Renewal, BD-AP-001-03-02 Alteration หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล BDR ได้
การจัดเตรียมรายงาน BDR มีขั้นตอนดังต่อไปนี้
- Step1: เตรียมข้อมูล โดยมีทั้งหมด 2 กลุ่มข้อมูลกลุ่มที่ 1: Renewal ดึงข้อมูล Renewal จาก BD-AP-001-03-01 Renewalระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบันกลุ่มที่ 2: Alterationดึงข้อมูล BD-AP-001-03-02 Alterationระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- กลุ่มที่ 1: Renewal ดึงข้อมูล Renewal จาก BD-AP-001-03-01 Renewalระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- ดึงข้อมูล Renewal จาก BD-AP-001-03-01 Renewal
- ระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- กลุ่มที่ 2: Alterationดึงข้อมูล BD-AP-001-03-02 Alterationระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- ดึงข้อมูล BD-AP-001-03-02 Alteration
- ระบบเลือกเฉพาะรายการที่ประมวลผลใน Quarter Period ปัจจุบัน
- รูปแบบการออกรายงานอ้างอิงจากA09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy NoA09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No
- A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No
- A09-12-2 ตัวอย่าง output file - BDR - Alteration_Code Name_YYYYQQ_Policy No


===== PAGE 1313669266 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA =====
Overview
กระบวนการจัดเตรียมข้อมูลสำหรับจัดทำ Report เข้า EDW และ SOA
Objective
- เพื่อจัดทำไฟล์ EDW เพื่อนำเข้าเพื่อบันทึกบัญชี
- เพื่อจัดทำไฟล์ SOA
Dependency
- การจัดเตรียมรายงาน EDW, SOA ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-03-03 ประมวลผลออกรายงาน BDR หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล EDW และ SOA ได้
Scope
- ไฟล์ข้อมูล EDW จะแสดง 1 บรรทัด ต่อ 1 กรมธรรม์ และปีกรมธรรม์
- ไฟล์ SOA มี 1 ไฟล์ต่อ 1 Quarter Periodกรณีเป็น Q4 หากมีการประมวลผล BD-AP-001-02-07 ประมวลผล Profit Commission ไฟล์ SOA จะต้องมีการอัปเดตค่า Profit Commission
- กรณีเป็น Q4 หากมีการประมวลผล BD-AP-001-02-07 ประมวลผล Profit Commission ไฟล์ SOA จะต้องมีการอัปเดตค่า Profit Commission
การจัดเตรียมรายงาน EDW มีขั้นตอนดังต่อไปนี้
- Step 1: ดึงข้อมูล output รายงาน BDR ทั้ง Renewal และ Alteration จาก BD-AP-001-03-03 ประมวลผลออกรายงาน BDR
- Step 2: คำนวณยอดผลรวมและสรุปข้อมูลในระดับ Policy No, Effective Date
- Step 3: บันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQ
การจัดเตรียมรายงาน SOA มีขั้นตอนดังต่อไปนี้
- Step 1: ดึงข้อมูล output รายงาน EDW A09-12-3 ตัวอย่าง output file - EDW - Act_Thaire_YYYYQQ
- Step 2: คำนวณยอดผลรวมในระดับ Treaty
- Step 3: บันทึกข้อมูลเพื่อเตรียมออกรายงาน A09-12-4 ตัวอย่าง output file - SOA - SOA_Act_Thaire_YYYYQQ


===== PAGE 1313898644 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-05 ประมวลผลออกรายงาน Profit Commission =====
Overview
กระบวนการ Profit Commission มีหน้าที่สรุปผลกำไรหรือขาดทุนของสัญญาประกันต่อ (Reinsurance Treaty) ในระดับรายปี โดยอ้างอิงจากข้อมูลเบี้ยประกัน สินไหม ค่าใช้จ่าย และข้อมูลปรับปรุงจากรอบก่อนหน้า ระบบจะนำผลลัพธ์ดังกล่าวไปใช้คำนวณ Profit Commission เพื่อพิจารณาจำนวนเงินที่จะได้รับจาก Reinsurer ตามเงื่อนไขที่กำหนดใน Treaty การประมวลผลนี้จะดำเนินการเฉพาะเมื่อสิ้นสุดปีบัญชี (Actual Quarter 4) และใช้ข้อมูล Actual ของทั้งปีรวมกัน เพื่อให้สะท้อนผลการดำเนินงานของสัญญาประกันต่ออย่างครบถ้วน
Objective
- เพื่อคำนวณผลกำไรหรือขาดทุนของสัญญาประกันต่อในแต่ละปีตามเงื่อนไขของ Treaty
- เพื่อพิจารณาความมีสิทธิ์ในการคำนวณ Profit Commission ตามเกณฑ์ที่กำหนด (เช่น จำนวนสมาชิกขั้นต่ำ)
- เพื่อรองรับการนำผลขาดทุนจากปีก่อนหน้ามาใช้ในการคำนวณ
- เพื่อจัดทำรายงาน Profit Commission สำหรับใช้เป็นข้อมูลอ้างอิงทางธุรกิจและการเงินระหว่างบริษัทและ Reinsurer
Dependency
- การคำนวณ Profit Commission ต้องอ้างอิงผลลัพธ์จากการประมวลผล BD-AP-001-03-03 ประมวลผลออกรายงาน BDR, BD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA หากยังไม่เสร็จ ระบบจะไม่สามารถประมวลผล Profit Commission ได้
การคำนวณ Profit Commission มีขั้นตอนดังต่อไปนี้
- Step1: ดึงข้อมูลเพื่อเตรียมประมวลผลข้อมูลsourceเงื่อนไขการดึงข้อมูลข้อมูลปีก่อนหน้าBD-PS-015 ข้อมูลตั้งฐาน Profit Commissionระบบดึงรายการข้อมูลของ Profit Commission ของปีก่อนหน้าข้อมูล BDRBD-AP-001-03-03 ประมวลผลออกรายงาน BDRระบบดึงข้อมูลทุก Quarter ในปีกรมธรรม์นั้นConfiguration RIBD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionระบบดึงข้อมูล Reserve for unearned premiums, Administrative expenses , Profit Commission Rate จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionโดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้นข้อมูลไฟล์ EDWBD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOAระบบดึงข้อมูลทุก Quarter ในปีกรมธรรม์นั้น
- ระบบดึงรายการข้อมูลของ Profit Commission ของปีก่อนหน้า
- ระบบดึงข้อมูลทุก Quarter ในปีกรมธรรม์นั้น
- ระบบดึงข้อมูล Reserve for unearned premiums, Administrative expenses , Profit Commission Rate จาก Configure ที่ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- โดยตรวจสอบว่า PolicyNo และ Effective Date อยู่ในช่วง Effective Date From – Effective Date To ของ RI Condition เพื่อให้ระบบเลือกใช้ %Reinsurance ที่ถูกต้องสำหรับรอบประมวลผลนั้น
- ระบบดึงข้อมูลทุก Quarter ในปีกรมธรรม์นั้น
- Step2: เงื่อนไขเงื่อนไขที่ต้องผ่านก่อนคำนวณหาจำนวนสมาชิกที่ส่ง Reinsurer ตลอดทั้งปี “รวมทุกกรมธรรม์” ตรวจสอบจาก BD-AP-001-03-03 ประมวลผลออกรายงาน BDR ทุก Quarter ทุกกรมธรรม์ เฉพาะส่วน Renewal (A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No)คำนวณยอดผลรวมของ Cession No.หากผลรวม > 200 คน ให้ระบบคำนวณ Profit Commissionหากผลรวม <= 200 ไม่คำนวณ Profit Commission
- หาจำนวนสมาชิกที่ส่ง Reinsurer ตลอดทั้งปี “รวมทุกกรมธรรม์” ตรวจสอบจาก BD-AP-001-03-03 ประมวลผลออกรายงาน BDR ทุก Quarter ทุกกรมธรรม์ เฉพาะส่วน Renewal (A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No)คำนวณยอดผลรวมของ Cession No.
- ตรวจสอบจาก BD-AP-001-03-03 ประมวลผลออกรายงาน BDR ทุก Quarter ทุกกรมธรรม์ เฉพาะส่วน Renewal (A09-12-1 ตัวอย่าง output file - BDR - Renewal_Code Name_YYYYQQ_Policy No)
- คำนวณยอดผลรวมของ Cession No.
- หากผลรวม > 200 คน ให้ระบบคำนวณ Profit Commission
- หากผลรวม <= 200 ไม่คำนวณ Profit Commission
- Step3: คำนวณข้อมูลปีของปีปัจจุบัน ดังนี้ดึงข้อมูลเบี้ยของทุก Quarter จาก BD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA จาก output ไฟล์ Act_Thaire_YYYYQQคำนวณผลรวมเบี้ยทั้งปีของปีปัจจุบัน ดังนี้ ผลรวมเบี้ยทั้งปีของปีปัจจุบันคำนวณจากผลรวมเบี้ยคำนวณจาก RI NB Premium AD&D + RI Renewal Premium AD&D + RI Revivals Premium AD&D - RI Refund Premium AD&Dผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบันคำนวณจากผลรวม RI Commission AD&D - RI Refund Commission AD&Dผลรวมสินไหมทั้งปีของปีปัจจุบันผลรวมของ RI Claim Paid AD&D + RI Claim Investigation & Legal Expense
- ดึงข้อมูลเบี้ยของทุก Quarter จาก BD-AP-001-03-04 ประมวลผลออกรายงาน EDW และ SOA จาก output ไฟล์ Act_Thaire_YYYYQQ
- คำนวณผลรวมเบี้ยทั้งปีของปีปัจจุบัน ดังนี้ ผลรวมเบี้ยทั้งปีของปีปัจจุบันคำนวณจากผลรวมเบี้ยคำนวณจาก RI NB Premium AD&D + RI Renewal Premium AD&D + RI Revivals Premium AD&D - RI Refund Premium AD&Dผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบันคำนวณจากผลรวม RI Commission AD&D - RI Refund Commission AD&Dผลรวมสินไหมทั้งปีของปีปัจจุบันผลรวมของ RI Claim Paid AD&D + RI Claim Investigation & Legal Expense
- คำนวณจากผลรวมเบี้ยคำนวณจาก RI NB Premium AD&D + RI Renewal Premium AD&D + RI Revivals Premium AD&D - RI Refund Premium AD&D
- RI NB Premium AD&D + RI Renewal Premium AD&D + RI Revivals Premium AD&D - RI Refund Premium AD&D
- RI NB Premium AD&D + RI Renewal Premium AD&D + RI Revivals Premium AD&D - RI Refund Premium AD&D
- คำนวณจากผลรวม RI Commission AD&D - RI Refund Commission AD&D
- ผลรวมของ RI Claim Paid AD&D + RI Claim Investigation & Legal Expense
- Step4: คำนวณ profit commission ดังนี้No.ฟิลด์ ความหมาย เงื่อนไขการคำนวณ PROFIT COMMISSION FOR YEAR YYYYยอด Profit Commission สำหรับปี YYYYYYYY แสดงค่าปี Quarter Year Incomeหมวดรายได้ที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission-1Reassurance premium net of cancellations and discount falling due during the yearเบี้ยประกันต่อสุทธิของปี หลังหักรายการยกเลิกกรมธรรม์และส่วนลดเบี้ยที่ถึงกำหนดในปีนั้นแสดงค่า ผลรวมเบี้ยทั้งปีของปีปัจจุบัน จาก Step 32Reserve for unearned premiums as at the beginning of the yearเงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ ต้นปี คิดจาก เบี้ยทั้งปีของปีก่อนหน้า คูณด้วย Reserve for unearned premiums จาก Configure BD-PS-015 ข้อมูลตั้งฐาน Profit Commissionกรณีเป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า Total Premium ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission * Reserve for unearned premiums% จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionมีการ round ทศนิยม 2 ตำแหน่งกรณีไม่ใช่การประมวลผล Profit Commission ครั้งแรกที่ระบบ ใช้ค่า (6) Reserve for unearned premiums as at the end of the year = 50% of the reassurance premiums ของปีก่อนหน้า จาก ไฟล์ A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision3Total (Income)ผลรวมของรายได้ทั้งหมดในหมวด Incomeคำนวณจาก (1) + (2)มีการ round ทศนิยม 2 ตำแหน่ง Outgoหมวดค่าใช้จ่ายและรายการหักที่ใช้ในการคำนวณผลกำไรสำหรับ Profit Commission 4Claims and legal expenses paid during the yearค่าสินไหมและค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในระหว่างปีแสดงค่า ผลรวมสินไหมทั้งปีของปีปัจจุบัน จาก Step 35Administrative expenses : Administrative expenses% of the reassurance premiumsค่าใช้จ่ายในการบริหาร คิดเป็น 10% ของเบี้ยประกันต่อคำนวณจาก (1) Reassurance premium net of cancellations and discount falling due during the year * %Administrative expenses จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionมีการ round ทศนิยม 2 ตำแหน่ง6Reserve for unearned premiums as at the end of the year = Reserve for unearned premiums% of the reassurance premiumsเงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ สิ้นปี คิดเป็น 50% ของเบี้ยประกันต่อคำนวณจาก (1) Reassurance premium net of cancellations and discount falling due during the year * %Reserve for unearned premiums จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionมีการ round ทศนิยม 2 ตำแหน่ง7Reserve for claims, if any, as at the end of the yearเงินสำรองค่าสินไหม ณ สิ้นปี (ถ้ามี)แสดงค่า 08Commissions, if any, due during the yearค่าคอมมิชชั่นที่ถึงกำหนดจ่ายในระหว่างปี (ถ้ามี)แสดงค่า ผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบัน จาก Step 39Any loss carried forward from the previous profit commission statementยอดขาดทุนสะสมที่ยกมาจากรอบ Profit Commission ก่อนหน้าตรวจสอบ Profit for Year YYYY ของปีก่อนหน้าหากมีค่า >= 0 ให้แสดงค่า 0หากมีค่า < 0 ให้แสดงค่า Profit for Year YYYY ของปีก่อนหน้า โดยต้องแสดงเป็นค่าบวก เนื่องจากใน A09-12-4 ตัวอย่าง output file - Thaire - Profit Commission จะบันทึกเป็นค่าลบProfit for Year YYYY ของปีก่อนหน้า ดึงค่าดังนี้กรณีเป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า NegativeBalanceBF ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commissionกรณีไม่เป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า Profit for Year YYYY ของปีก่อนหน้า จาก ไฟล์ A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision10Total (Outgo)ผลรวมของค่าใช้จ่ายและรายการหักทั้งหมดในหมวด Outgoคำนวณจากผลรวมใน Outgo (4) + (5) + (6) + (7) + (8) + (9)มีการ round ทศนิยม 2 ตำแหน่ง11Profit for Year YYYYกำไรสุทธิของปี Quarter Year หลังหักรายจ่ายและเงินสำรองทั้งหมดแล้วคำนวณจาก Total (Income) - Total (Outgo)YYYY มีค่าเท่ากับปี Quarter Yearมีการ round ทศนิยม 2 ตำแหน่ง12Total profit commission for year YYYYยอด Profit Commission ทั้งหมดที่ต้องจ่ายให้คู่สัญญาสำหรับปี YYYYตรวจสอบ Profit for Year YYYY จาก (11)หากมีค่า <= 0 ให้แสดงค่า 0หากมีค่า > 0 ให้คำนวณ Profit for Year YYYYคูณ %Profit Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI ConditionYYYY มีค่าเท่ากับปี Quarter Yearมีการ round ทศนิยม 2 ตำแหน่ง13%Profit Commission RateProfit Commission Rateแสดงค่าจาก %Profit Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- YYYY แสดงค่าปี Quarter Year
- แสดงค่า ผลรวมเบี้ยทั้งปีของปีปัจจุบัน จาก Step 3
- กรณีเป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า Total Premium ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission * Reserve for unearned premiums% จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Conditionมีการ round ทศนิยม 2 ตำแหน่ง
- มีการ round ทศนิยม 2 ตำแหน่ง
- กรณีไม่ใช่การประมวลผล Profit Commission ครั้งแรกที่ระบบ ใช้ค่า (6) Reserve for unearned premiums as at the end of the year = 50% of the reassurance premiums ของปีก่อนหน้า จาก ไฟล์ A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision
- คำนวณจาก (1) + (2)
- มีการ round ทศนิยม 2 ตำแหน่ง
- แสดงค่า ผลรวมสินไหมทั้งปีของปีปัจจุบัน จาก Step 3
- คำนวณจาก (1) Reassurance premium net of cancellations and discount falling due during the year * %Administrative expenses จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- มีการ round ทศนิยม 2 ตำแหน่ง
- คำนวณจาก (1) Reassurance premium net of cancellations and discount falling due during the year * %Reserve for unearned premiums จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- มีการ round ทศนิยม 2 ตำแหน่ง
- แสดงค่า 0
- แสดงค่า ผลรวมคอมมิชชั่นทั้งปีของปีปัจจุบัน จาก Step 3
- ตรวจสอบ Profit for Year YYYY ของปีก่อนหน้าหากมีค่า >= 0 ให้แสดงค่า 0หากมีค่า < 0 ให้แสดงค่า Profit for Year YYYY ของปีก่อนหน้า โดยต้องแสดงเป็นค่าบวก เนื่องจากใน A09-12-4 ตัวอย่าง output file - Thaire - Profit Commission จะบันทึกเป็นค่าลบ
- หากมีค่า >= 0 ให้แสดงค่า 0
- หากมีค่า < 0 ให้แสดงค่า Profit for Year YYYY ของปีก่อนหน้า โดยต้องแสดงเป็นค่าบวก เนื่องจากใน A09-12-4 ตัวอย่าง output file - Thaire - Profit Commission จะบันทึกเป็นค่าลบ
- Profit for Year YYYY ของปีก่อนหน้า ดึงค่าดังนี้กรณีเป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า NegativeBalanceBF ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commissionกรณีไม่เป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า Profit for Year YYYY ของปีก่อนหน้า จาก ไฟล์ A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision
- กรณีเป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า NegativeBalanceBF ของปีก่อนหน้า จาก BD-PS-015 ข้อมูลตั้งฐาน Profit Commission
- กรณีไม่เป็นการประมวลผล Profit Commission ครั้งแรกที่ขึ้นระบบ ใช้ค่า Profit for Year YYYY ของปีก่อนหน้า จาก ไฟล์ A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision
- คำนวณจากผลรวมใน Outgo (4) + (5) + (6) + (7) + (8) + (9)
- มีการ round ทศนิยม 2 ตำแหน่ง
- คำนวณจาก Total (Income) - Total (Outgo)
- YYYY มีค่าเท่ากับปี Quarter Year
- มีการ round ทศนิยม 2 ตำแหน่ง
- ตรวจสอบ Profit for Year YYYY จาก (11)หากมีค่า <= 0 ให้แสดงค่า 0หากมีค่า > 0 ให้คำนวณ Profit for Year YYYYคูณ %Profit Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- หากมีค่า <= 0 ให้แสดงค่า 0
- หากมีค่า > 0 ให้คำนวณ Profit for Year YYYYคูณ %Profit Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- YYYY มีค่าเท่ากับปี Quarter Year
- มีการ round ทศนิยม 2 ตำแหน่ง
- แสดงค่าจาก %Profit Commission Rate จาก BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition
- Step5: บันทึกข้อมูลเพื่อออกรายงาน A09-12-4 ตัวอย่าง output file - Thaire - Profit Commision


===== PAGE 1313669296 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-03 Actual Thaire Group PA > BD-AP-001-03-99 เตรียมข้อมูลกรมธรรม์ =====
- ดึงข้อมูลจาก BD-PS-001 ข้อมูล Master group policy (List of policy)
- ระบบเลือกข้อมูลทุกกรมธรรม์และปีกรมธรรม์ที่ผ่านเงื่อนไขการประมวลผล
| หัวข้อ | คำอธิบาย | เงื่อนไขการบันทึกรายการ |
| Pol No | เลขกรมธรรม์ | แสดงค่า PolicyNo จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Commencement Date | วันเริ่มสัญญาครั้งแรก | ดึงข้อมูล Commencement Date จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Renewal Date | วันเริ่มสัญญาปีปัจจุบัน | ดึงข้อมูล EffectiveDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Pol. Yr. | ปีกรมธรรม์ | ดึงข้อมูล PolicyYear จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| Policy Name | ชื่อกรมธรรม์ | ดึงข้อมูล PolicyName จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |
| End Date | วันที่สิ้นสุดความคุ้มครอง | ดึงข้อมูล EndDate จาก BD-PS-001 ข้อมูล Master group policy (List of policy) |


===== PAGE 1313439927 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-001 ประมวลผล Actual > BD-AP-001-04 ประมวลผลออกรายงาน Profit Commission =====
วัตถุประสงค์
เพื่อประมวลผล Profit Commission และนำผลลัพธ์ไปแสดงในรายงาน SOA ได้อย่างถูกต้อง ตามเงื่อนไขของสัญญาประกันภัยต่อในแต่ละปี
ขั้นตอนการใช้งาน
- ผู้ใช้งาน (User RI) เลือกเมนู ประมวลผล Profit Commission
- ระบบจะแสดงหน้าจอให้เลือกข้อมูลสำหรับการประมวลผล ได้แก่ReinsurerTreatyYear (ปีที่ต้องการประมวลผล)
- Reinsurer
- Treaty
- Year (ปีที่ต้องการประมวลผล)
เงื่อนไขในการประมวลผล
- ระบบจะอนุญาตให้ประมวลผล เฉพาะไตรมาสที่ 4 (Quarter 4) ของปีที่เลือกเท่านั้น
- ระบบจะตรวจสอบว่าปีที่เลือกมีข้อมูล Actual ครบทั้ง 4 ไตรมาส (Q1–Q4) แล้วหากข้อมูลยังไม่ครบ ระบบจะไม่อนุญาตให้ประมวลผล
- หากข้อมูลยังไม่ครบ ระบบจะไม่อนุญาตให้ประมวลผล
- ก่อนนำข้อมูลมาคำนวณ ระบบจะตรวจสอบว่ากรมธรรม์ (Policy No.) มี Effective Date อยู่ภายในช่วงที่กำหนดไว้ใน RI Condition ของ Treaty นั้นเพื่อให้เลือกใช้เงื่อนไขการคำนวณ (Configuration) ได้ถูกต้อง
- กรมธรรม์ (Policy No.) มี Effective Date อยู่ภายในช่วงที่กำหนดไว้ใน RI Condition ของ Treaty นั้น
- เพื่อให้เลือกใช้เงื่อนไขการคำนวณ (Configuration) ได้ถูกต้อง
หลักการคำนวณ Profit Commission
- Profit Commission จะถูกคำนวณ เฉพาะไตรมาสที่ 4 ของทุกปี
- การคำนวณจำเป็นต้องใช้ข้อมูลเพิ่มเติมเป็นฐาน ได้แก่ยอดขาดทุนสะสมจากปีก่อนหน้า (ต้องมีการบันทึกข้อมูลไว้ล่วงหน้า)เบี้ยประกันรวมทั้งปีของปีก่อนหน้า (ใช้ข้อมูลจาก Standard Template ที่มีอยู่)
- ยอดขาดทุนสะสมจากปีก่อนหน้า (ต้องมีการบันทึกข้อมูลไว้ล่วงหน้า)
- เบี้ยประกันรวมทั้งปีของปีก่อนหน้า (ใช้ข้อมูลจาก Standard Template ที่มีอยู่)
ผลลัพธ์หลังการประมวลผล
- อัปเดตค่า Profit Commission ลงในรายงาน SOA ของไตรมาสที่ 4
- จัดเตรียม ไฟล์ผลลัพธ์ (Output File) สำหรับให้ผู้ใช้งานสามารถ Download ไปใช้งานได้
- Profit Commission จะไม่มีค่าในรายงาน SOA ของไตรมาสอื่น (Q1–Q3) การประมวลผลในแต่ละปีต้องทำเมื่อข้อมูลครบถ้วนและผ่านเงื่อนไขทั้งหมดเท่านั้น


===== PAGE 1315340327 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual =====
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับ Makerค้นหาข้อมูลประมวลผลครั้งแรกดาวน์โหลดไฟล์กดประมวลผลซ้ำยืนยันการประมวลผลยกเลิกการประมวลผลได้ |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับ Checkerค้นหาข้อมูลดาวน์โหลดไฟล์ |

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายการผลการประมวลผล Actual

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้าเมนู Actual

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการผลการประมวลผล Actual
- ประมวลผล Actual ครั้งแรก
- ดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบ
- ประมวลผลรายการที่ถูกยกเลิกใหม่
- ประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ยกเลิกรายการประมวลผล
- ยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Actualผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จผู้ใช้งานสามารถยกเลิกรายการประมวลผลผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW
- ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Actual
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบ
- ผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่
- ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ผู้ใช้งานสามารถยกเลิกรายการประมวลผล
- ผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | ข้อมูลประจำไตรมาส | โปรดระบุ | แสดงข้อมูลรายการ Quarter Period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569/01 |  |
| 2 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Thaire |  |
| 3 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | THREL_Grp_PA |  |
| 4 | Dropdown List | สถานะรายการ | ทั้งหมด | แสดงข้อมูลรายการสถานะการประมวลผล Actualรอประมวลผลประมวลผลไม่สำเร็จรอยืนยันกับบริษัท Reinsurerรอยืนยันรายการยกเลิกรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau | รอประมวลผล |  |
| 5 | Text | ปี ค.ศ. | ค่าว่าง | แปลงข้อมูลประจำไตรมาสในข้อ 1 ให้เป็นปี ค.ศ. | 2026/01 |  |
| 6 | Dropdown List | สถานะรายการ EDW | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Actual จาก EDWรอพิจารณาข้อมูล STD Templateรอ offest ข้อมูลรอส่งขออนุมัติเข้า EDWอนุมัติเข้า EDWไม่อนุมัติเข้า EDWยกเลิกข้อมูลกำลังดำเนินการประมวลผลไม่สำเร็จรอพิจารณาอนุมัติเข้า EDW | รอพิจารณาข้อมูล STD Template |  |
| 7 | Button | ล้างเงื่อนไข | enable | กดเพื่อล้างเงื่อนไขการค้นหากลับสู่ Default value |  |  |
| 8 | Button | ค้นหา | enable | กดเพื่อค้นหาข้อมูลตามเงื่อนไขที่ระบุ |  |  |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล |  | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Deafault Value | Action / Data Value | Example | Remark |
| 1 | Button | ประมวลผล Profit commission | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Profit commissionหน้าจอแสดง Popup ประมวลผล profit Commission กรณียังไม่ระบุข้อมูลกรณีประมวลผล Actual ไม่ครบปีบางรายการระบบไม่อนุญาตให้ดำเนินการกรณีประมวลผล Actual ครบปีทุกรายการระบบอนุญาตให้ดำเนินการกรณีเลือกมากกว่า 1 Treaty Codeกรณีประมวลผลไปแล้ว 2 TreatyNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListYearกรุณาระบุแสดงข้อมูลรายการ ปีปัจจุบันและย้อนหลังไปอีก 2 ปี2569 2Textค.ศ.ค่าว่างแปลงข้อมูลปีในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Year ระบบจะแสดงปี ค.ศ. จาก Year ที่ระบุ2026 3Dropdown ListReinsurerทั้งหมดแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดThaire 4Dropdown ListTreaty Codeทั้งหมดแสดงข้อมูลรายการ Treaty ที่ถูกสร้างภายใต้ Reinsurer ที่ระบุTHREL_Grp_PA ส่วนแสดงข้อมูล5Buttonยกเลิก Profit Comm.enableenable เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น กดเพื่อยกเลิกรายการ Profit Comm. ของ Treaty ที่เลือกhide เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น 6Check boxเลือกun checkedenable เมื่อ ทุก Q เป็น และ สถานะประมวลผล Profit Comm. (DONE) เป็น hide เมื่อ Q หรือ DONE เป็น 7LabelTreaty Code แสดงข้อมูลรายการ Treaty ที่พบTHREL_Grp_PA 8IconQ1ไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Actual ของแต่ละ Quater ภายใต้ Quarter year และ Reinsurer ที่พบข้อมูล โดยระบบจะแสดงผลระดับ Treatyกรณีใน Quarter นั้นประมวลผลแล้ว แสดง เครื่องหมาย ใน Quarter นั้นยังไม่ประมวลผลแล้ว แสดง เครื่องหมาย 9IconQ2ไม่พบข้อมูล 10IconQ3ไม่พบข้อมูล 11IconQ4ไม่พบข้อมูล 12IconSOAไม่พบข้อมูลแสดง SOASOA Flag สำหรับรองรับกรณีต้องการเลือกประมวลผล Profit Comm. มากกว่า 1 รายการ เพื่อกำหนดยอด Profit Comm. ไปบันทึกใน Treaty ที่ต้องการenable เมื่อ เลือก check box อย่างน้อย 1 รายการกรณีเลือก check box มากกว่า 1 รายการ จะสามารถ ระบุ SOA flag ได้รายการใดรายการหนึ่ง 13IconDONEไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Profit Comm. ของแต่ละ Treatyกรณีใน Treaty นั้นประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย ใน Treaty นั้นยังไม่ประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย 14Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 15Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Year, Reinsurer และ Treaty Code ระบบจะค้นหาข้อมูล Actual ที่ถูกประมวลผลภายใต้เงื่อนไขที่ระบุกรณีพบข้อมูลระบบจะตรวจสอบดังนี้ประมวลผล Actual ครบแล้วทั้ง 4 Quarter ทุก Treat (แสดง เครื่องหมาย ทั้ง 4 Q) มีสถานะ DONE อย่างน้อย 1 รายการเป็น ระบบ enable ปุ่มและอนุญาตประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อประมวลผล Profit commission ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผลกรณีประมวลผลไม่ครบ 4 Quarter (แสดง เครื่องหมาย อย่างน้อย 1 Q) หรือสถานะ DONE ทุกรายการเป็น ระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผล |  |  |
| 2 | Button | ประมวลผล Actual | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Actual*กรณีที่ประมวลผล Quarter นั้นของ Treaty ใดๆไปแล้ว จะไม่สามารถประมวลผลผ่านปุ่มนี้ได้อีก ต้องไปดำเนินการยกเลิกแล้วประมวลผลซ้ำตามรายการเท่านั้นหน้าจอแสดง Popup ประมวลผลข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListPeriodกรุณาระบุแสดงข้อมูลรายการ Quarter year/ Quarter period ปัจจุบันและย้อนหลังไปอีก 2 ปี2568/Q1 2Textค.ศ.ค่าว่างแปลง Period ในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Period ระบบจะแสดงปี ค.ศ. จากข้อมูลที่ระบุ2025/Q1 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดThaire 4Dropdown ListTreaty Codeกรุณาระบุแสดงข้อมูลรายการ Treaty ภายใต้ Reinsurer ที่ระบุTHREL_Grp_PA 5Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 6Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Period, Reinsurer และ Treaty Code ระบบจะ enable ปุ่มประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผล |  |  |
| 3 | Button | ยืนยันข้อมูล | disable | กรณีไม่เลือกรายการประมวลผล Actual ในข้อ 4 ปุ่มจะ disableกรณีเลือกรายการประมวลผล Actual ในข้อ 4 อย่างน้อย 1 รายการ ปุ่มจะ enableเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Actual เข้า EDWการแสดงหน้าจอ Popup ยืนยันข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Textจำนวนรายการ แสดงจำนวนรายการตามที่เลือกท่านต้องการยืนยันข้อมูลจำนวน 1 รายการใช่หรือไม่ 2Dropdown Listสถานะข้อมูลกรุณาระบุแสดงรายการสถานะข้อมูลรอยืนยันกับบริษัท Reinsurerแสดงกรณีสถานะรายการ Actual เป็น รอยืนยันรายการ เท่านั้นยืนยันรายการ Bordereauแสดงกรณีสถานะรายการ Actual เป็นรอยืนยันกับบริษัท Reinsurerยืนยันรายการ Bordereau ไม่สำเร็จ*สำหรับส่งรายการซ้ำกรณีระบบผิดปกติยกเลิกรายการระบบบังคับกรอกหมายเหตุรอยืนยันรายการ 3Textหมายเหตุค่าว่างแสดงช่องระบุหมายเหตุ กรณีเลือกสถานะข้อมูล ยกเลิกรายการ จำเป็นต้องระบุยกเลิกรายการ 4Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 5Buttonบันทึกdisableกรณีไม่ระบุข้อมูลระบบ disable ปุ่มยืนยันกรณีระบุ สถานะข้อมูล ระบบ enable ปุ่มยืนยันเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด บันทึก เพื่อดำเนินการกรณีเลือก รอยืนยันกับบริษัท Reinsurerระบบบันทึกสถานะรายการ เป็น รอยืนยันกับบริษัท Reinsurerกรณีเลือก ยืนยันรายการ Bordereau(เฉพาะกรณี Quarter 4) ระบบตรวจสอบการประมวลผล Profit Commission ของรายการที่ยืนยันกรณีพบว่ารายการดังกล่าวยังไม่มีข้อมูล Profit Commission ระบบแสดงระบบตรวจสอบข้อมูล Bordereauกรณีประมวลผลแล้วไม่มีข้อมูล Bordereau ระบบแสดงรายการที่มีข้อมูลระบบส่งข้อมูลไปยังระบบ EDWระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauรายการที่ไม่มีข้อมูลระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauกรณีข้อมูลครบถ้วนทุกรายการระบบแสดงกรณีเลือก ยกเลิกรายการระบบังคับระบุหมายเหตุเมื่อกดบันทึกเรียบร้อยระบบแสดงกด ยกเลิก เพื่อปิดหน้าจอ Popup |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 4 | Check box | เลือกรายการ | uncheck | เมื่อกดปุ่ม ระบบจะเลือกรายการที่ระบุ และ enable ปุ่มยืนยันข้อมูลในข้อ 3 |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอยืนยันรายการ" |
| 5 | Button | ดำเนินการ | disable | ระบบแสดงปุ่มประมวลผลซ้ำระบบจะ enable ปุ่มประมวผลซ้ำ เมื่อสถานะรายการเป็น ประมวลผลไม่สำเร็จ หรือ ยกเลิกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันการประมวลผลซ้ำ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการ |
| 6 | Button | Bordereau Report | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Bordereau และ EDWการแสดงหน้าจอ Popup download BDR/EDWNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download Bordereau และ EDW Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Bordereau ReportEDW Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 7 | Button | SOA Report | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน SOAการแสดงหน้าจอ Popup download SOA ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download ข้อมูล SOA ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ download fie ตามข้อมูลของ treaty ที่ระบุ ได้แก่SOA Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  |  |
| 8 | Button | Profit Comm. | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Profit Commission และ Profit Commission Allocationการแสดงหน้าจอ Popup download Profit Commission ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelYear แสดงข้อมูลประจำปี2568 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำปี2025 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download ข้อมูล Profit Commission และ Profit Commission Allocation Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Profit Commission Profit Commission Allocation Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 9 | Label | ข้อมูลประจำไตรมาส |  | Quarter year/ Quarter period ที่ประมวลผล | 2568/Q1 |  |
| 10 | Label | Reinsurer |  | ชื่อย่อ Reinsurer | Thaire |  |
| 11 | Label | Treaty Code |  | ชื่อ Treaty | THREL_Grp_PA |  |
| 12 | Label | สถานะรายการ |  | สถานะการประมวลผลรายการ Actual | รอยืนยันรายการ |  |
| 13 | Label | สถานะรายการ EDW |  | สถานะการส่งข้อมูลไปยังระบบ EDW | อนุมัติเข้า EDW |  |
| 14 | Label | RI Premium (รับ+/จ่าย-) |  | ผลรวมของ RI Premium, RI Premium Revivals และ RI Premium Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 |  |
| 15 | Label | RI Commission (รับ+/จ่าย-) |  | ผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 16 | Label | Claim Recovery (รับ+/จ่าย-) |  | ผลรวมของ Claim Recovery ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 17 | Label | Profit Comm. (รับ+/จ่าย-) |  | ผลรวมของ Profit Commission ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 18 | Label | Due to(+)/From(-) OLI |  | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-), Claim Recovery (รับ+/จ่าย-) และ Profit Comm. (รับ+/จ่าย-)กรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 |  |
| 19 | Label | ผู้ดำเนินการ |  | ชื่อผู้ดำเนินการล่าสุด | suthanee.sa |  |
| 20 | Label | หมายเหตุ |  | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล |  |  |
| 21 | Label | Update Date |  | วันที่ดำเนินการล่าสุด | 29/09/2568 10:52:04 |  |


===== PAGE 1317896209 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก =====
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับ Makerค้นหาข้อมูลประมวลผลครั้งแรกดาวน์โหลดไฟล์กดประมวลผลซ้ำยืนยันการประมวลผลยกเลิกการประมวลผลได้ |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับ Checkerค้นหาข้อมูลดาวน์โหลดไฟล์ |


===== PAGE 1318125647 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-AP-002-SD001-01 BDR Report Popup =====
| การแสดงหน้าจอ Popup download BDR/EDW |
|  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Period |  | แสดงข้อมูลประจำไตรมาส | 2568/Q1 |  |
| 2 | Label | ค.ศ. |  | แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส | 2025/Q1 |  |
| 3 | Label | Reinsurer |  | แสดง Reinsurer ที่เลือก Download | Thaire |  |
| 4 | Label | Treaty Code |  | แสดง Treaty Code ที่เลือก Download | THREL_Grp_PA |  |
| 5 | Button | Download | enable | กดเพื่อ Download Bordereau และ EDW Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Bordereau ReportEDW Report |  |  |
| 6 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |


===== PAGE 1318125651 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-02 PC Report Popup =====
| การแสดงหน้าจอ Popup download Profit Commission Report |
|  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Year |  | แสดงข้อมูลประจำปี | 2568 |  |
| 2 | Label | ค.ศ. |  | แสดงปี ค.ศ. จากข้อมูลประจำปี | 2025 |  |
| 3 | Label | Reinsurer |  | แสดง Reinsurer ที่เลือก Download | Thaire |  |
| 4 | Label | Treaty Code |  | แสดง Treaty Code ที่เลือก Download | THREL_Grp_PA |  |
| 5 | Button | Download | enable | กดเพื่อ Download ข้อมูล Profit Commission และ Profit Commission Allocation Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Profit Commission Profit Commission Allocation Report |  |  |
| 6 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |


===== PAGE 1318125723 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-03 PC Process Popup =====
| หน้าจอแสดง Popup ประมวลผล profit Commission |  |
|  | กรณียังไม่ระบุข้อมูล |
|  | กรณีประมวลผล Actual ไม่ครบปีบางรายการระบบไม่อนุญาตให้ดำเนินการ |
|  | กรณีประมวลผล Actual ครบปีทุกรายการระบบอนุญาตให้ดำเนินการกรณีเลือกมากกว่า 1 Treaty Code |
|  | กรณีประมวลผลไปแล้ว 2 Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Year | กรุณาระบุ | แสดงข้อมูลรายการ ปีปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569 |  |
| 2 | Text | ค.ศ. | ค่าว่าง | แปลงข้อมูลปีในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Year ระบบจะแสดงปี ค.ศ. จาก Year ที่ระบุ | 2026 |  |
| 3 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Thaire |  |
| 4 | Dropdown List | Treaty Code | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างภายใต้ Reinsurer ที่ระบุ | THREL_Grp_PA |  |
| ส่วนแสดงข้อมูล |
| 5 | Button | ยกเลิก Profit Comm. | enable | enable เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น กดเพื่อยกเลิกรายการ Profit Comm. ของ Treaty ที่เลือกhide เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น |  |  |
| 6 | Check box | เลือก | un checked | enable เมื่อ ทุก Q เป็น และ สถานะประมวลผล Profit Comm. (DONE) เป็น hide เมื่อ Q หรือ DONE เป็น |  |  |
| 7 | Label | Treaty Code |  | แสดงข้อมูลรายการ Treaty ที่พบ | THREL_Grp_PA |  |
| 8 | Icon | Q1 | ไม่พบข้อมูล | Icon สำหรับแสดงสถานะการประมวล Actual ของแต่ละ Quater ภายใต้ Quarter year และ Reinsurer ที่พบข้อมูล โดยระบบจะแสดงผลระดับ Treatyกรณีใน Quarter นั้นประมวลผลแล้ว แสดง เครื่องหมาย ใน Quarter นั้นยังไม่ประมวลผลแล้ว แสดง เครื่องหมาย |  |  |
| 9 | Icon | Q2 | ไม่พบข้อมูล |  |  |
| 10 | Icon | Q3 | ไม่พบข้อมูล |  |  |
| 11 | Icon | Q4 | ไม่พบข้อมูล |  |  |
| 12 | Icon | SOA | ไม่พบข้อมูล | แสดง SOASOA Flag สำหรับรองรับกรณีต้องการเลือกประมวลผล Profit Comm. มากกว่า 1 รายการ เพื่อกำหนดยอด Profit Comm. ไปบันทึกใน Treaty ที่ต้องการenable เมื่อ เลือก check box อย่างน้อย 1 รายการกรณีเลือก check box มากกว่า 1 รายการ จะสามารถ ระบุ SOA flag ได้รายการใดรายการหนึ่ง |  |  |
| 13 | Icon | DONE | ไม่พบข้อมูล | Icon สำหรับแสดงสถานะการประมวล Profit Comm. ของแต่ละ Treatyกรณีใน Treaty นั้นประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย ใน Treaty นั้นยังไม่ประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย |  |  |
| 14 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |
| 15 | Button | ประมวลผล | disable | กรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Year, Reinsurer และ Treaty Code ระบบจะค้นหาข้อมูล Actual ที่ถูกประมวลผลภายใต้เงื่อนไขที่ระบุกรณีพบข้อมูลระบบจะตรวจสอบดังนี้ประมวลผล Actual ครบแล้วทั้ง 4 Quarter ทุก Treat (แสดง เครื่องหมาย ทั้ง 4 Q) มีสถานะ DONE อย่างน้อย 1 รายการเป็น ระบบ enable ปุ่มและอนุญาตประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อประมวลผล Profit commission ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผลกรณีประมวลผลไม่ครบ 4 Quarter (แสดง เครื่องหมาย อย่างน้อย 1 Q) หรือสถานะ DONE ทุกรายการเป็น ระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผล |  |  |


===== PAGE 1318125794 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-04 Actual process Popup =====
| หน้าจอแสดง Popup ประมวลผลข้อมูล Actual |
|  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Period | กรุณาระบุ | แสดงข้อมูลรายการ Quarter year/ Quarter period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2568/Q1 |  |
| 2 | Text | ค.ศ. | ค่าว่าง | แปลง Period ในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Period ระบบจะแสดงปี ค.ศ. จากข้อมูลที่ระบุ | 2025/Q1 |  |
| 3 | Dropdown List | Reinsurer | กรุณาระบุ | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Thaire |  |
| 4 | Dropdown List | Treaty Code | กรุณาระบุ | แสดงข้อมูลรายการ Treaty ภายใต้ Reinsurer ที่ระบุ | THREL_Grp_PA |  |
| 5 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |
| 6 | Button | ประมวลผล | disable | กรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Period, Reinsurer และ Treaty Code ระบบจะ enable ปุ่มประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผล |  |  |


===== PAGE 1318125888 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-05 Confirm Process Popup =====
| การแสดงหน้าจอ Popup ยืนยันประมวลผล |
|  |


===== PAGE 1318125892 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-06 Confirm Download Popup =====
| การแสดงหน้าจอ Popup ยืนยันการ Download |
|  |


===== PAGE 1318125956 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-07 Confirm Re Process Popup =====
| การแสดงหน้าจอ Popup ยืนยันการประมวลผลซ้ำ |
|  |


===== PAGE 1318125964 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-08 Confirm Actual Popup =====
| การแสดงหน้าจอ Popup ยืนยันข้อมูล Actual |
|  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Text | จำนวนรายการ |  | แสดงจำนวนรายการตามที่เลือก | ท่านต้องการยืนยันข้อมูลจำนวน 1 รายการใช่หรือไม่ |  |
| 2 | Dropdown List | สถานะข้อมูล | กรุณาระบุ | แสดงรายการสถานะข้อมูลรอยืนยันกับบริษัท Reinsurerแสดงกรณีสถานะรายการ Actual เป็น รอยืนยันรายการ เท่านั้นยืนยันรายการ Bordereauแสดงกรณีสถานะรายการ Actual เป็นรอยืนยันกับบริษัท Reinsurerยืนยันรายการ Bordereau ไม่สำเร็จ*สำหรับส่งรายการซ้ำกรณีระบบผิดปกติยกเลิกรายการระบบบังคับกรอกหมายเหตุ | รอยืนยันรายการ |  |
| 3 | Text | หมายเหตุ | ค่าว่าง | แสดงช่องระบุหมายเหตุ กรณีเลือกสถานะข้อมูล ยกเลิกรายการ จำเป็นต้องระบุ | ยกเลิกรายการ |  |
| 4 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |
| 5 | Button | บันทึก | disable | กรณีไม่ระบุข้อมูลระบบ disable ปุ่มยืนยันกรณีระบุ สถานะข้อมูล ระบบ enable ปุ่มยืนยันเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด บันทึก เพื่อดำเนินการกรณีเลือก รอยืนยันกับบริษัท Reinsurerระบบบันทึกสถานะรายการ เป็น รอยืนยันกับบริษัท Reinsurerกรณีเลือก ยืนยันรายการ Bordereau(เฉพาะกรณี Quarter 4) ระบบตรวจสอบการประมวลผล Profit Commission ของรายการที่ยืนยันกรณีพบว่ารายการดังกล่าวยังไม่มีข้อมูล Profit Commission ระบบแสดงระบบตรวจสอบข้อมูล Bordereauกรณีประมวลผลแล้วไม่มีข้อมูล Bordereau ระบบแสดงรายการที่มีข้อมูลระบบส่งข้อมูลไปยังระบบ EDWระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauรายการที่ไม่มีข้อมูลระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauกรณีข้อมูลครบถ้วนทุกรายการระบบแสดงกรณีเลือก ยกเลิกรายการระบบังคับระบุหมายเหตุเมื่อกดบันทึกเรียบร้อยระบบแสดงกด ยกเลิก เพื่อปิดหน้าจอ Popup |  |  |


===== PAGE 1318880115 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD001 หน้าจอหลัก > BD-EP-002-SD001-09 SOA Report Popup =====
| การแสดงหน้าจอ Popup download SOA Report |
|  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Period |  | แสดงข้อมูลประจำไตรมาส | 2568/Q1 |  |
| 2 | Label | ค.ศ. |  | แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส | 2025/Q1 |  |
| 3 | Label | Reinsurer |  | แสดง Reinsurer ที่เลือก Download | Thaire |  |
| 4 | Label | Treaty Code |  | แสดง Treaty Code ที่เลือก Download | THREL_Grp_PA |  |
| 5 | Button | Download | enable | กดเพื่อ Download ข้อมูล SOA ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ download fie ตามข้อมูลของ treaty ที่ระบุ ได้แก่SOA Report |  |  |
| 6 | Button | ยกเลิก | enable | กดเพื่อปิดหน้าจอ Popup |  |  |


===== PAGE 1317896211 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD002 ส่วนการแสดง Overview =====
### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายการผลการประมวลผล Actual

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้าเมนู Actual

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการผลการประมวลผล Actual
- ประมวลผล Actual ครั้งแรก
- ดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบ
- ประมวลผลรายการที่ถูกยกเลิกใหม่
- ประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ยกเลิกรายการประมวลผล
- ยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Actualผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จผู้ใช้งานสามารถยกเลิกรายการประมวลผลผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW
- ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Actual
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ EDW เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Profit Commission เพื่อตรวจสอบ
- ผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่
- ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ผู้ใช้งานสามารถยกเลิกรายการประมวลผล
- ผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ


===== PAGE 1317896213 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD003 เงื่อนไขการค้นหา =====
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | ข้อมูลประจำไตรมาส | โปรดระบุ | แสดงข้อมูลรายการ Quarter Period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569/01 |  |
| 2 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Thaire |  |
| 3 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | THREL_Grp_PA |  |
| 4 | Dropdown List | สถานะรายการ | ทั้งหมด | แสดงข้อมูลรายการสถานะการประมวลผล Actualรอประมวลผลประมวลผลไม่สำเร็จรอยืนยันกับบริษัท Reinsurerรอยืนยันรายการยกเลิกรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau | รอประมวลผล |  |
| 5 | Text | ปี ค.ศ. | ค่าว่าง | แปลงข้อมูลประจำไตรมาสในข้อ 1 ให้เป็นปี ค.ศ. | 2026/01 |  |
| 6 | Dropdown List | สถานะรายการ EDW | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Actual จาก EDWรอพิจารณาข้อมูล STD Templateรอ offest ข้อมูลรอส่งขออนุมัติเข้า EDWอนุมัติเข้า EDWไม่อนุมัติเข้า EDWยกเลิกข้อมูลกำลังดำเนินการประมวลผลไม่สำเร็จรอพิจารณาอนุมัติเข้า EDW | รอพิจารณาข้อมูล STD Template |  |
| 7 | Button | ล้างเงื่อนไข | enable | กดเพื่อล้างเงื่อนไขการค้นหากลับสู่ Default value |  |  |
| 8 | Button | ค้นหา | enable | กดเพื่อค้นหาข้อมูลตามเงื่อนไขที่ระบุ |  |  |


===== PAGE 1317896215 | Software Requirements Specification > 03. Business Processes and Screens Design > 05. Module Actual Process (AP) > BD-AP-002 หน้าจอประมวลผล Actual > BD-AP-002-SD004 ส่วนการแสดงข้อมูล =====
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล |  | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Deafault Value | Action / Data Value | Example | Remark |
| 1 | Button | ประมวลผล Profit commission | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Profit commissionหน้าจอแสดง Popup ประมวลผล profit Commission กรณียังไม่ระบุข้อมูลกรณีประมวลผล Actual ไม่ครบปีบางรายการระบบไม่อนุญาตให้ดำเนินการกรณีประมวลผล Actual ครบปีทุกรายการระบบอนุญาตให้ดำเนินการกรณีเลือกมากกว่า 1 Treaty Codeกรณีประมวลผลไปแล้ว 2 TreatyNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListYearกรุณาระบุแสดงข้อมูลรายการ ปีปัจจุบันและย้อนหลังไปอีก 2 ปี2569 2Textค.ศ.ค่าว่างแปลงข้อมูลปีในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Year ระบบจะแสดงปี ค.ศ. จาก Year ที่ระบุ2026 3Dropdown ListReinsurerทั้งหมดแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดThaire 4Dropdown ListTreaty Codeทั้งหมดแสดงข้อมูลรายการ Treaty ที่ถูกสร้างภายใต้ Reinsurer ที่ระบุTHREL_Grp_PA ส่วนแสดงข้อมูล5Buttonยกเลิก Profit Comm.enableenable เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น กดเพื่อยกเลิกรายการ Profit Comm. ของ Treaty ที่เลือกhide เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น 6Check boxเลือกun checkedenable เมื่อ ทุก Q เป็น และ สถานะประมวลผล Profit Comm. (DONE) เป็น hide เมื่อ Q หรือ DONE เป็น 7LabelTreaty Code แสดงข้อมูลรายการ Treaty ที่พบTHREL_Grp_PA 8IconQ1ไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Actual ของแต่ละ Quater ภายใต้ Quarter year และ Reinsurer ที่พบข้อมูล โดยระบบจะแสดงผลระดับ Treatyกรณีใน Quarter นั้นประมวลผลแล้ว แสดง เครื่องหมาย ใน Quarter นั้นยังไม่ประมวลผลแล้ว แสดง เครื่องหมาย 9IconQ2ไม่พบข้อมูล 10IconQ3ไม่พบข้อมูล 11IconQ4ไม่พบข้อมูล 12IconSOAไม่พบข้อมูลแสดง SOASOA Flag สำหรับรองรับกรณีต้องการเลือกประมวลผล Profit Comm. มากกว่า 1 รายการ เพื่อกำหนดยอด Profit Comm. ไปบันทึกใน Treaty ที่ต้องการenable เมื่อ เลือก check box อย่างน้อย 1 รายการกรณีเลือก check box มากกว่า 1 รายการ จะสามารถ ระบุ SOA flag ได้รายการใดรายการหนึ่ง 13IconDONEไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Profit Comm. ของแต่ละ Treatyกรณีใน Treaty นั้นประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย ใน Treaty นั้นยังไม่ประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย 14Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 15Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Year, Reinsurer และ Treaty Code ระบบจะค้นหาข้อมูล Actual ที่ถูกประมวลผลภายใต้เงื่อนไขที่ระบุกรณีพบข้อมูลระบบจะตรวจสอบดังนี้ประมวลผล Actual ครบแล้วทั้ง 4 Quarter ทุก Treat (แสดง เครื่องหมาย ทั้ง 4 Q) มีสถานะ DONE อย่างน้อย 1 รายการเป็น ระบบ enable ปุ่มและอนุญาตประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อประมวลผล Profit commission ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผลกรณีประมวลผลไม่ครบ 4 Quarter (แสดง เครื่องหมาย อย่างน้อย 1 Q) หรือสถานะ DONE ทุกรายการเป็น ระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผล |  |  |
| 2 | Button | ประมวลผล Actual | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Actual*กรณีที่ประมวลผล Quarter นั้นของ Treaty ใดๆไปแล้ว จะไม่สามารถประมวลผลผ่านปุ่มนี้ได้อีก ต้องไปดำเนินการยกเลิกแล้วประมวลผลซ้ำตามรายการเท่านั้นหน้าจอแสดง Popup ประมวลผลข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListPeriodกรุณาระบุแสดงข้อมูลรายการ Quarter year/ Quarter period ปัจจุบันและย้อนหลังไปอีก 2 ปี2568/Q1 2Textค.ศ.ค่าว่างแปลง Period ในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Period ระบบจะแสดงปี ค.ศ. จากข้อมูลที่ระบุ2025/Q1 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดThaire 4Dropdown ListTreaty Codeกรุณาระบุแสดงข้อมูลรายการ Treaty ภายใต้ Reinsurer ที่ระบุTHREL_Grp_PA 5Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 6Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Period, Reinsurer และ Treaty Code ระบบจะ enable ปุ่มประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันประมวลผล |  |  |
| 3 | Button | ยืนยันข้อมูล | disable | กรณีไม่เลือกรายการประมวลผล Actual ในข้อ 4 ปุ่มจะ disableกรณีเลือกรายการประมวลผล Actual ในข้อ 4 อย่างน้อย 1 รายการ ปุ่มจะ enableเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Actual เข้า EDWการแสดงหน้าจอ Popup ยืนยันข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Textจำนวนรายการ แสดงจำนวนรายการตามที่เลือกท่านต้องการยืนยันข้อมูลจำนวน 1 รายการใช่หรือไม่ 2Dropdown Listสถานะข้อมูลกรุณาระบุแสดงรายการสถานะข้อมูลรอยืนยันกับบริษัท Reinsurerแสดงกรณีสถานะรายการ Actual เป็น รอยืนยันรายการ เท่านั้นยืนยันรายการ Bordereauแสดงกรณีสถานะรายการ Actual เป็นรอยืนยันกับบริษัท Reinsurerยืนยันรายการ Bordereau ไม่สำเร็จ*สำหรับส่งรายการซ้ำกรณีระบบผิดปกติยกเลิกรายการระบบบังคับกรอกหมายเหตุรอยืนยันรายการ 3Textหมายเหตุค่าว่างแสดงช่องระบุหมายเหตุ กรณีเลือกสถานะข้อมูล ยกเลิกรายการ จำเป็นต้องระบุยกเลิกรายการ 4Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 5Buttonบันทึกdisableกรณีไม่ระบุข้อมูลระบบ disable ปุ่มยืนยันกรณีระบุ สถานะข้อมูล ระบบ enable ปุ่มยืนยันเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด บันทึก เพื่อดำเนินการกรณีเลือก รอยืนยันกับบริษัท Reinsurerระบบบันทึกสถานะรายการ เป็น รอยืนยันกับบริษัท Reinsurerกรณีเลือก ยืนยันรายการ Bordereau(เฉพาะกรณี Quarter 4) ระบบตรวจสอบการประมวลผล Profit Commission ของรายการที่ยืนยันกรณีพบว่ารายการดังกล่าวยังไม่มีข้อมูล Profit Commission ระบบแสดงระบบตรวจสอบข้อมูล Bordereauกรณีประมวลผลแล้วไม่มีข้อมูล Bordereau ระบบแสดงรายการที่มีข้อมูลระบบส่งข้อมูลไปยังระบบ EDWระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauรายการที่ไม่มีข้อมูลระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauกรณีข้อมูลครบถ้วนทุกรายการระบบแสดงกรณีเลือก ยกเลิกรายการระบบังคับระบุหมายเหตุเมื่อกดบันทึกเรียบร้อยระบบแสดงกด ยกเลิก เพื่อปิดหน้าจอ Popup |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 4 | Check box | เลือกรายการ | uncheck | เมื่อกดปุ่ม ระบบจะเลือกรายการที่ระบุ และ enable ปุ่มยืนยันข้อมูลในข้อ 3 |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอยืนยันรายการ" |
| 5 | Button | ดำเนินการ | disable | ระบบแสดงปุ่มประมวลผลซ้ำระบบจะ enable ปุ่มประมวผลซ้ำ เมื่อสถานะรายการเป็น ประมวลผลไม่สำเร็จ หรือ ยกเลิกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupการแสดงหน้าจอ Popup ยืนยันการประมวลผลซ้ำ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการ |
| 6 | Button | Bordereau Report | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Bordereau และ EDWการแสดงหน้าจอ Popup download BDR/EDWNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download Bordereau และ EDW Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Bordereau ReportEDW Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 7 | Button | SOA Report | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน SOAการแสดงหน้าจอ Popup download SOA ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download ข้อมูล SOA ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ download fie ตามข้อมูลของ treaty ที่ระบุ ได้แก่SOA Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  |  |
| 8 | Button | Profit Comm. | enable | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Profit Commission และ Profit Commission Allocationการแสดงหน้าจอ Popup download Profit Commission ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelYear แสดงข้อมูลประจำปี2568 2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำปี2025 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThaire 4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PA 5ButtonDownloadenableกดเพื่อ Download ข้อมูล Profit Commission และ Profit Commission Allocation Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่Profit Commission Profit Commission Allocation Report 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 9 | Label | ข้อมูลประจำไตรมาส |  | Quarter year/ Quarter period ที่ประมวลผล | 2568/Q1 |  |
| 10 | Label | Reinsurer |  | ชื่อย่อ Reinsurer | Thaire |  |
| 11 | Label | Treaty Code |  | ชื่อ Treaty | THREL_Grp_PA |  |
| 12 | Label | สถานะรายการ |  | สถานะการประมวลผลรายการ Actual | รอยืนยันรายการ |  |
| 13 | Label | สถานะรายการ EDW |  | สถานะการส่งข้อมูลไปยังระบบ EDW | อนุมัติเข้า EDW |  |
| 14 | Label | RI Premium (รับ+/จ่าย-) |  | ผลรวมของ RI Premium, RI Premium Revivals และ RI Premium Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 |  |
| 15 | Label | RI Commission (รับ+/จ่าย-) |  | ผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 16 | Label | Claim Recovery (รับ+/จ่าย-) |  | ผลรวมของ Claim Recovery ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 17 | Label | Profit Comm. (รับ+/จ่าย-) |  | ผลรวมของ Profit Commission ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 |  |
| 18 | Label | Due to(+)/From(-) OLI |  | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-), Claim Recovery (รับ+/จ่าย-) และ Profit Comm. (รับ+/จ่าย-)กรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 |  |
| 19 | Label | ผู้ดำเนินการ |  | ชื่อผู้ดำเนินการล่าสุด | suthanee.sa |  |
| 20 | Label | หมายเหตุ |  | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล |  |  |
| 21 | Label | Update Date |  | วันที่ดำเนินการล่าสุด | 29/09/2568 10:52:04 |  |


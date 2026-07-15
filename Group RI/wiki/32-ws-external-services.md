===== PAGE 1289389387 | Functional Specification > 06. External Service Call Specification. =====
(empty page)


===== PAGE 1305412442 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife =====
(empty page)


===== PAGE 1305412501 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-01 Policy =====
Overview
Protocol
Operation
Input
Process
Example Input & Output

## Overview
<ดึงข้อมูล ข้อมูลกรมธรรม์ประกันกลุ่มทั้งหมดจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
|  |  |  |  |  |  |  |

## Process
<![CDATA[SELECT * FROM dbo.RIG_View_Policy;]]>
Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Data Type | Description | ตารางที่ใช้ดึงข้อมูลRIG_View_Policy fields | ตารางที่บันทึกข้อมูลtx_rig_landing_policyfields |
| RigVPolicyId | numeric | เลขที่ Running | RigVPolicyId | rig_v_policy_id |
| PolicyNo | varchar | เลขที่กธ. | PolicyNo | policy_no |
| PolicyYear | numeric | กธ. ปีที่ | PolicyYear | policy_year |
| PolicyCode | numeric | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | PolicyCode | policy_code |
| PolicyDocDate | datetime | วันที่..ที่ออกกธ. | PolicyDocDate | policy_doc_date |
| ProposalNo | varchar | เลขที่ใบคำขอ | ProposalNo | proposal_no |
| CompanyCode | varchar | รหัสบริษัทผู้ถือกธ. | CompanyCode | company_code |
| FirstDate | datetime | วันเริ่มสัญญาครั้งแรก | FirstDate | first_date |
| PromiseDate | datetime | วันเริ่มสัญญาปีปัจจุบัน | PromiseDate | promise_date |
| ReInsurDate | datetime | วันที่ต่อสัญญาครั้งต่อไป | ReInsurDate | re_insur_date |
| LapseDate | datetime | วันที่ Lapse | LapseDate | lapse_date |
| TypeDiscount | numeric | ประเภทส่วนลด | TypeDiscount | type_discount |
| PayType | numeric | ประเภทการชำระเงินของกธ. 0 : รายเดือน 1 : ราย 3 เดือน 2 : ราย 6 เดือน 3 : รายปี | PayType | pay_type |
| InsumType | numeric | ลักษณะทุน...0 : แบ่งตาม Class 1 : แบบ Fixed 2 : จำนวนเท่าของเงินเดือน 3 : จัดตามเงื่อนไขใน Class | InsumType | insum_type |
| AdjustDec | numeric | การปัดเศษทุน... (0 : ไม่ปัดเศษ 1 : ปัดเศษ) | AdjustDec | adjust_dec |
| LifePremRate | numeric | อัตราเบี้ย......ชีวิต | LifePremRate | life_prem_rate |
| AccPremRate | numeric | อัตราเบี้ย...... อบ. | AccPremRate | acc_prem_rate |
| MedPremRate | numeric | อัตราเบี้ย......ค่ารักษาฯ..จาก อบ. | MedPremRate | med_prem_rate |
| TPDPremRate | numeric | อัตราเบี้ย......ทุพพลภาพ | TPDPremRate | tpd_prem_rate |
| LifeExtraRate | numeric | อัตราเบี้ย...เพิ่มพิเศษ – ชีวิต | LifeExtraRate | life_extra_rate |
| AccExtraRate | numeric | อัตราเบี้ย...เพิ่มพิเศษ - อบ. | AccExtraRate | acc_extra_rate |
| MedExtraRate | numeric | อัตราเบี้ย...เพิ่มพิเศษ - ค่ารักษาฯ..จาก อบ. | MedExtraRate | med_extra_rate |
| TPDExtraRate | numeric | อัตราเบี้ย...เพิ่มพิเศษ – ทุพพลภาพ | TPDExtraRate | tpd_extra_rate |
| PolicyStatus | char | สถานะกธ. (B : New Business I : Renewal L : Lapse C : Cancel) | PolicyStatus | policy_status |
| ReInsur_No | varchar | เลขที่กธ. ประกันต่อ | ReInsur_No | re_insur_no |
| ExpreienceRefund | numeric | เงินคืนตามประสบการณ์ | ExpreienceRefund | expreience_refund |
| LifePrem | numeric | เบี้ย......ชีวิต | LifePrem | life_prem |
| AccPrem | numeric | เบี้ย...... อบ. | AccPrem | acc_prem |
| MedPrem | numeric | เบี้ย......ค่ารักษาจาก อบ. | MedPrem | med_prem |
| TPDPrem | numeric | เบี้ย......ทุพพลภาพ | TPDPrem | tpd_prem |
| RefPolicyNo | numeric | อ้างอิงกธ. เลขที่ | RefPolicyNo | ref_policy_no |
| LifeExtraRateRe | numeric | เบี้ย......ต่อเพิ่มพิเศษ – ชีวิต | LifeExtraRateRe | life_extra_rate_re |
| AccExtraRateRe | numeric | เบี้ย......ต่อเพิ่มพิเศษ – อบ. | AccExtraRateRe | acc_extra_rate_re |
| RePolicyNo | varchar | เลขที่กธ. ประกันต่อ | RePolicyNo | re_policy_no |
| ReYear | numeric | กธ. ประกันต่อปีที่ | ReYear | re_year |
| CerClassNo | numeric | ประเภทสมาชิก | CerClassNo | cer_class_no |
| PolicyNoOld | varchar | เลขที่กรมธรรม์เดิม | PolicyNoOld | policy_no_old |
| PrefixThai | varchar | คำนำหน้าบริษัท | PrefixThai | prefix_thai |
| CompanyName | varchar | ชื่่อผู้ถือกรมธรรม์ | CompanyName | company_name |
| CompanyNameEng | varchar | ชื่่อผู้ถือกรมธรรม์ภาษาอังกฤษ | CompanyNameEng | company_name_eng |
| CommisionFoat | numeric | ค่าบำเหน็จ | CommisionFoat | commision_foat |
| FlgMember | numeric | Flag member | FlgMember | flg_member |
| FReceiptDate | datetime | วันทีออกใบเสร็จใบแรก | FReceiptDate | f_receipt_date |
| PolicyNoHD | varchar | กรมธรรม์แม่สำหรับอ้างอิง | PolicyNoHD | policy_no_hd |
| FuneralPrem | numeric | เบี้ยค่าปลงศพ | FuneralPrem | funeral_prem |
| FuneralPremRate | numeric | อัตราเบี้ยค่าปลงศพ | FuneralPremRate | funeral_prem_rate |
| ExpireDate | datetime | วันที่สิ้นสุดความคุ้มครอง | ExpireDate | expire_date |
| QCLDOCNO | varchar | เลขที่ ปิดการขาย | QCLDOCNO | qcl_docno |
Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1305412691 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-02 Customer =====
Overview
Protocol
Operation
Input
Process
Example Input & Output

## Overview
<ดึงข้อมูล ข้อมูลกรมธรรม์ประกันกลุ่มทั้งหมดจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
|  |  |  |  |  |  |  |

## Process
1. ปช. LAPSE (7)
<![CDATA[SELECT * FROM dbo.RIG_View_CertificateCust;]]>
Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Attribute Name | Data Type | Description | ตารางที่ใช้ดึงข้อมูลRIG_View_CertificateCust fields | ตารางที่บันทึกค่า tx_rig_landing_policyfields |
| RigVCertId | numeric | เลขที่ Running | RigVCertId | rig_v_cert_id |
| CertificCustNo | varchar | รหัสผู้เอาประกัน | CertificCustNo | certific_cust_no |
| CustCode | varchar | รหัสลูกค้า | CustCode | cust_code |
| PolicyCode | numeric | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | PolicyCode | policy_code |
| PolicyNo | varchar | เลขที่กธ. | PolicyNo | policy_no |
| PolicyYear | numeric | กธ. ปีที่ | PolicyYear | policy_year |
| ClassNo | numeric | Class No. | ClassNo | class_no |
| EffectDate | datetime | วันเดือนปีที่มีผลบังคับ | EffectDate | effect_date |
| TransDate | datetime | วันเดือนปีที่ทำเอกสาร | TransDate | trans_date |
| ChangeDate | datetime | วันเดือนปีที่เปลี่ยนแปลง | ChangeDate | change_date |
| LifeExtraRate | numeric | อัตราเบี้ยเพิ่มพิเศษ ชีวิต | LifeExtraRate | life_extra_rate |
| LifeInsur | numeric | ทุนชีวิต | LifeInsur | life_insur |
| AccInsur | numeric | ทุน อบ. | AccInsur | acc_insur |
| MedInsur | numeric | ทุนค่ารักษาจาก อบ. | MedInsur | med_insur |
| TPDInsur | numeric | ทุนชีวิตทุพพลภาพ | TPDInsur | tpd_insur |
| LifeE1Prem | numeric | เบี้ยเพิ่มพิเศษ - ชีวิต | LifeE1Prem | life_e1_prem |
| LifePrem | numeric | เบี้ยชีวิต | LifePrem | life_prem |
| AccPrem | numeric | เบี้ย อบ. | AccPrem | acc_prem |
| MedPrem | numeric | เบี้ยค่ารักษาจาก อบ. | MedPrem | med_prem |
| Age | numeric | อายุ | Age | age |
| Status | char | สถานะผู้เอาประกัน | Status | status |
| TPDPrem | numeric | เบี้ยทุพพลภาพ | TPDPrem | tpd_prem |
| MedPlanRateIPPrem | numeric | เบี้ยสุขภาพผู้ป่วยใน | MedPlanRateIPPrem | med_plan_rate_ip_prem |
| MedPlanRateOPPrem | numeric | เบี้ยสุขภาพผู้ป่วยนอก | MedPlanRateOPPrem | med_plan_rate_op_prem |
| Dental | numeric | เบี้ยทันตกรรม | Dental | dental |
| NetEmployer | numeric | เบี้ยส่วนที่นายจ้างจ่าย | NetEmployer | net_employer |
| NetEmployee | numeric | เบี้ยส่วนที่ลูกจ้างจ่าย | NetEmployee | net_employee |
| CompCode | varchar | รหัสบริษัทที่สังกัด | CompCode | comp_code |
| Sex | varchar | เพศ | Sex | sex |
| Birthday | datetime | วันเกิด | Birthday | birthday |
Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1305412693 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-03 Company =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลบริษัทจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_Company]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_Company fields | ตารางที่บันทึกข้อมูลtx_rig_landing_companyฟิลด์ |
| 1 | RigVCompid | เลขที่ Running | bigint | 19 |  | rig_v_comp_id |
| 2 | CompanyCode | รหัสบริษัท | varchar | 10 | CompanyCode | company_code |
| 3 | PolicyNo | เลขกรมธรรม์ | varchar | 8 | PolicyNo | policy_no |
| 4 | DBDCODE | รหัสกรมพัฒนาธุรกิจการค้า | varchar | 20 | DBDCODE | dbdcode |
| 5 | TypeBusiness | ประเภทธุรกิจของบริษัท | varchar | 250 | TypeBusiness | type_business |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412696 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-04 Claim Death =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสินไหมเสียชีวิต Deathจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_ClaimDeath]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_ClaimDeath | ตารางที่บันทึกค่าtx_rig_landing_claimdeath |
| 1 | RigVClmDeathId | เลขที่ Running | bigint | 19 | RigVClmDeathId | rig_v_clm_death_id |
| 2 | InformNo | เลขที่ใบรับแจ้ง | varchar | 9 | InformNo | inform_no |
| 3 | PolicyCode | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | tinyint | 3 | PolicyCode | policy_code |
| 4 | PolicyNo | เลขที่กรมธรรม์ | varchar | 8 | PolicyNo | policy_no |
| 5 | PolicyYear | กรมธรรม์ปีที่ | int | 10 | PolicyYear | policy_year |
| 6 | CertificCustNo | เลขที่สมาชิกผู้เอาประกัน | varchar | 8 | CertificCustNo | certific_cust_no |
| 7 | InformDate | วันที่รับแจ้ง | datetime |  | InformDate | inform_date |
| 8 | ConsiderDate | วันที่รับเอกสารใบพิจารณา | datetime |  | ConsiderDate | consider_date |
| 9 | DeathDate | วันที่เสียชีวิต | datetime |  | DeathDate | death_date |
| 10 | DeathCauseInform | สาเหตุ-ที่แจ้ง | varchar | 3 | DeathCauseInform | death_cause_inform |
| 11 | DeathCauseReal | สาเหตุ-ที่ตรวจสอบแล้ว | varchar | 3 | DeathCauseReal | death_cause_real |
| 12 | DeathCauseRemark | หมายเหตุ | varchar | 50 | DeathCauseRemark | death_cause_remark |
| 13 | PolicyAge | อายุกรมธรรม์นับจากวันเข้าร่วม | varchar | 6 | PolicyAge | policy_age |
| 14 | AttnAge | อายุผู้เอาประกัน | int | 10 | AttnAge | attn_age |
| 15 | EffectDate | วันแรกที่เข้าทำประกันชีวิต | datetime |  | EffectDate | effect_date |
| 16 | LossRatio | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | smallmoney | 10,4 | LossRatio | loss_ratio |
| 17 | ApproveClaim | ผลการพิจารณา | int | 10 | ApproveClaim | approve_claim |
| 18 | LifeInsur | ทุนชีวิต (ที่อนุมัติจ่าย) | money | 19,4 | LifeInsur | life_insur |
| 19 | AccInsur | ทุุนอุบัติเหตุ (ที่อนุมัติจ่าย) | money | 19,4 | AccInsur | acc_insur |
| 20 | LifeInsurRequest | ทุนชีวิตตามแผน (ที่ซื้อ) | money | 19,4 | LifeInsurRequest | life_insur_request |
| 21 | AccInsurRequest | ทุนอุบัติเหตุตามแผน (ที่ซื้อ) | money | 19,4 | AccInsurRequest | acc_insur_request |
| 22 | ApproveDate | วันที่ตรวจสอบ/สั่งงานต่อ/อนุมัติ | datetime |  | ApproveDate | approve_date |
| 23 | PayChoice | การจ่ายสินไหม | smallint | 5 | PayChoice | pay_choice |
| 24 | ResultDate | วันที่ทำรายการ | datetime |  | ResultDate | result_date |
| 25 | ReceiveNo | เลขที่ใบเสร็จ | varchar | 8 | ReceiveNo | receive_no |
| 26 | ReceiveDate | วันที่ออกใบเสร็จ | datetime |  | ReceiveDate | receive_date |
| 27 | SumInsur | ยอดเงินรวมที่ผู้รับผลฯ ได้รับ | money | 19,4 | SumInsur | sum_insur |
| 28 | PayDate | วันที่จ่ายเงิน | datetime |  | PayDate | pay_date |
| 29 | CreatedDate | วันที่บันทึกรายการ | datetime |  |  | created_date |
| 30 | CreatedBy | ผู้บันทึกรายการ | varchar | 50 |  | created_by |
| 31 | UpdatedDate | วันที่ปรับปรุงรายการ | datetime |  |  | updated_date |
| 32 | UpdatedBy | ผู้ปรับปรุงรายการ | varchar | 50 |  | updated_by |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412700 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-05 Claim TPD =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสินไหมทุพพลภาพ TPD/Dismemberment จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_ClaimTPD]]>

## Output
| No. | Attribute Name | Description | Data Type | ตารางที่ใช้ดึงข้อมูลtx_rig_landing_claimtpd | ตารางที่บันทึกค่าtx_rig_landing_claimtpd |
| 1 | RigVClmTpdId | เลขที่ Running | bigint | RigVClmTpdId | rig_v_clm_tpd_id |
| 2 | InformNo | เลขที่รับแจ้ง | varchar | InformNo | inform_no |
| 3 | ConsiderDate | วันที่แจ้ง/รับเอกสารใบพิจารณา | datetime | ConsiderDate | consider_date |
| 4 | PolicyCode | ประเภทกธ. (0 : GH 1 : GL 2 : GU 3 : GA 4 : GS) | tinyint | PolicyCode | policy_code |
| 5 | PolicyNo | เลขที่กรมธรรม์ | varchar | PolicyNo | policy_no |
| 6 | PolicyYear | กรมธรรม์ปีที่ | int | PolicyYear | policy_year |
| 7 | CertificCustNo | เลขที่สมาชิกผู้เอาประกัน | varchar | CertificCustNo | certific_cust_no |
| 8 | CustCode | รหัสลูกค้า | varchar | CustCode | cust_code |
| 9 | AttnAge | อายุผู้เอาประกัน | int | AttnAge | attn_age |
| 10 | Status | สถานะผู้เอาประกัน | char | Status | status |
| 11 | EffectDate | วันแรกที่เข้าทำประกันชีวิต/วันที่เริ่มมีผลบังคับ | datetime | EffectDate | effect_date |
| 12 | AccidentDate | วันที่ประสบอุบัติเหตุ | datetime | AccidentDate | accident_date |
| 13 | AccidentCause | สาเหตุฯ | varchar | AccidentCause | accident_cause |
| 14 | PolicyAge | อายุกรมธรรม์ | varchar | PolicyAge | policy_age |
| 15 | ACCInsur | ทุนอุบัติเหตุ/สูญเสียอวัยวะ (ยอดเรียกร้อง) | money | ACCInsur | acc_insur |
| 16 | TPDInsur | ทุนทุพพลภาพ (TPD) (ยอดเรียกร้อง) | money | TPDInsur | tpd_insur |
| 17 | ClaimStatus | 0:สูญเสียอวัยวะ; 1:ทุพพลภาพทุกกรณี (TPD), 2:ทุพพลภาพจากอุบัติเหตุ | tinyint | ClaimStatus | claim_status |
| 18 | ProdClaimCode | รหัสเคลม (สูญเสียอวัยวะ) | varchar | ProdClaimCode | prod_claim_code |
| 19 | IndemnityRate | อัตราชดใช้ (% สูญเสียอวัยวะ) จากยอด ACCInsur | money | IndemnityRate | indemnity_rate |
| 20 | IndemnityAmt | จำนวนเงินชดใช้ (สูญเสียอวัยวะ) | money | IndemnityAmt | indemnity_amt |
| 21 | TPDProdCode | รหัสความคุ้มครองทุพพลภาพ (TPD) | varchar | TPDProdCode | tpd_prod_code |
| 22 | LossRatio | อัตราส่วนค่าสินไหมทดแทน (จำนวนเท่าทุนอุบัติเหตุ) | smallmoney | LossRatio | loss_ratio |
| 23 | ApproveACCInsur | ยอดจ่ายอุบัติเหตุ (ยอดอนุมัติ) | money | ApproveACCInsur | approve_acc_insur |
| 24 | ApproveTPDInsur | ยอดจ่ายทุพพลภาพ (ยอดอนุมัติ) | money | ApproveTPDInsur | approve_tpd_insur |
| 25 | ApproveClaim | ผลการพิจารณา 0:อนุมัติ; 1:มีเหตุขัดข้อง; 2: ปฎิเสธ; 3:บอกล้าง | int | ApproveClaim | approve_claim |
| 26 | ApproveDate | วันที่ตรวจสอบ/สั่งงานต่อ | datetime | ApproveDate | approve_date |
| 27 | ReceiveNo | เลขที่ใบเสร็จ | varchar | ReceiveNo | receive_no |
| 28 | ReceiveDate | วันที่ออกใบเสร็จ | datetime | ReceiveDate | receive_date |
| 29 | Amount | ยอดเงินที่ต้องจ่าย | money | Amount | amount |
| 30 | PayDate | วันที่จ่ายเงิน | datetime | PayDate | pay_date |
| 31 | CreatedDate | วันที่บันทึกรายการ | datetime |  | created_date |
| 32 | CreatedBy | ผู้บันทึกรายการ | varchar |  | created_by |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412703 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-06 Claim Health =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสินไหมสุขภาพ health จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | Oceanlife | RIG_View_ClaimHealth | ข้อมูลกรมธรรม์ประกันกลุ่ม | select * from RIG_View_ClaimHealth |

## Output
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVClmDeathId | bigint | 19 | Y |
| 2 | InformNo | varchar | 9 | N |
| 3 | PolicyCode | tinyint | 3 | Y |
| 4 | PolicyNo | varchar | 8 | Y |
| 5 | PolicyYear | int | 10 | Y |
| 6 | CertificCustNo | varchar | 8 | Y |
| 7 | InformDate | datetime |  | Y |
| 8 | ConsiderDate | datetime |  | Y |
| 9 | DeathDate | datetime |  | Y |
| 10 | DeathCauseInform | varchar | 3 | Y |
| 11 | DeathCauseReal | varchar | 3 | Y |
| 12 | DeathCauseRemark | varchar | 50 | Y |
| 13 | PolicyAge | varchar | 6 | Y |
| 14 | AttnAge | int | 10 | Y |
| 15 | EffectDate | datetime |  | Y |
| 16 | LossRatio | smallmoney | 10,4 | Y |
| 17 | ApproveClaim | int | 10 | Y |
| 18 | LifeInsur | money | 19,4 | N |
| 19 | AccInsur | money | 19,4 | N |
| 20 | LifeInsurRequest | money | 19,4 | N |
| 21 | AccInsurRequest | money | 19,4 | N |
| 22 | ApproveDate | datetime |  | Y |
| 23 | PayChoice | smallint | 5 | N |
| 24 | ResultDate | datetime |  | Y |
| 25 | ReceiveNo | varchar | 8 | N |
| 26 | ReceiveDate | datetime |  | Y |
| 27 | SumInsur | money | 19,4 | Y |
| 28 | PayDate | datetime |  | Y |
| 29 | CreatedDate | datetime |  | N |
| 30 | CreatedBy | varchar | 6 | N |
| 31 | UpdatedDate | datetime |  | N |
| 32 | UpdatedBy | varchar | 6 | N |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412706 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-07 Certificate Inforce =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสมาชิก ณ ต้นงวด จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_CertInforce]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_CertInforce fields | ตารางที่บันทึกข้อมูลtx_rig_landing_cert_inforcefields |
| 1 | RigVPolInforceId | เลขที่ Running | bigint | 19 | RigVPolInforceId | rig_v_pol_inforce_id |
| 2 | DOCNO | เลขที่เอกสาร | varchar | 20 | DOCNO | doc_no |
| 3 | PolicyNo | เลขกรมธรรม์ | varchar | 20 | PolicyNo | policy_no |
| 4 | EffectDate | วันที่มีผลบังคับ | datetime |  | EffectDate | effect_date |
| 5 | EndDate | วัันที่สิ้นสุด | datetime |  | EndDate | end_date |
| 6 | ChangeDate | วันที่มีผลเปลี่ยนแปลง | datetime |  | ChangeDate | change_date |
| 7 | CerNo | เลขที่ลูกค้า | varchar | 20 | CerNo | cer_no |
| 8 | CompCode | รหัสบริษัท | varchar | 20 | CompCode | comp_code |
| 9 | CustCode | รหัสลูกค้า | varchar | 20 | CustCode | cust_code |
| 10 | MedRate | อัตราเบี้ยสุขภาพ | varchar | 1 | MedRate | med_rate |
| 11 | Age | อายุ | smallint | 5 | Age | age |
| 12 | Sex | เพศ | smallint | 5 | Sex | sex |
| 13 | CountOfDay | จำนวนวันที่มีผล | int | 10 | CountOfDay | count_of_day |
| 14 | LifeInsur | ทุน - ชีวิต | money | 19,4 | LifeInsur | life_insur |
| 15 | CrematInsur | ทุน - ค่าปลงศพ | money | 19,4 | CrematInsur | cremat_insur |
| 16 | AccInsur | ทุน - อุบัติเหตุ | money | 19,4 | AccInsur | acc_insur |
| 17 | MedInsur | ทุน - ค่่ารักษา | money | 19,4 | MedInsur | med_insur |
| 18 | TPDInsur | ทุน - ทุพพลภาพ | money | 19,4 | TPDInsur | tpd_insur |
| 19 | LifePrem | เบี้ย - ชีวิต | money | 19,4 | LifePrem | life_prem |
| 20 | LifeE1Rate | อัตราเบี้ย Extra 1 คิดรายคน | money | 19,4 | LifeE1Rate | life_e1_rate |
| 21 | LifeE1Prem | เบี้ย - Extra 1 คิดรายคน | money | 19,4 | LifeE1Prem | life_e1_prem |
| 22 | CrematPrem | เบี้ย - ค่าปลงศพ | money | 19,4 | CrematPrem | cremat_prem |
| 23 | AccPrem | เบี้ย - อุบัติเหตุ | money | 19,4 | AccPrem | acc_prem |
| 24 | MedAccPrem | เบี้ย - ค่่ารักษาพยาบาล | money | 19,4 | MedAccPrem | med_acc_prem |
| 25 | TPDPrem | เบี้ย - ทุพพลภาพ | money | 19,4 | TPDPrem | tpd_prem |
| 26 | IPDPrem | เบี้ย - คนไข้ใน | money | 19,4 | IPDPrem | ipd_prem |
| 27 | OPDPrem | เบี้ย - คนไข้นอก | money | 19,4 | OPDPrem | opd_prem |
| 28 | MajorPlanPrem | เบี้ย - คนไข้ในเพิ่มพิเศษ | money | 19,4 | MajorPlanPrem | major_plan_prem |
| 29 | DentalPrem | เบี้ย - ทันตกรรม | money | 19,4 | DentalPrem | dental_prem |
| 30 | MatherPrem | เบี้ย - คลอดบุตร | money | 19,4 | MatherPrem | mather_prem |
| 31 | HBPrem | เบี้ย - ชดเชยรายวัน | money | 19,4 | HBPrem | hb_prem |
| 32 | OPDLabPrem | เบี้ย OPD Lab รวมทั้งหมด | numeric | 2,2 | OPDLabPrem | opd_lab_prem |
| 33 | StatusMember | สถานะความคุ้มครอง | char | 1 | StatusMember | status_member |
| 34 | Status | สถานะการใช้งาน | int | 10 | Status | status |
| 35 | ApprovedDate | วันที่อนุมัติ | datetime |  | ApprovedDate | approved_date |
| 36 | TotalPrem | เบี้ยรวมทั้งหมด | money | 19,4 | TotalPrem | total_prem |
| 37 | DOCDate | วันที่จัดทำเอกสาร | datetime |  | DOCDate | doc_date |
| 38 | CompanyCode | รหัสบริษัท | varchar | 20 | CompanyCode | company_code |
| 39 | CompanyHeadCode | รหัสบริษัทต้นสังกัด | varchar | 20 | CompanyHeadCode | company_head_code |
| 40 | ReInsureNo | เลขที่ี่ประกันต่อ | varchar | 20 | ReInsureNo | re_insure_no |
| 41 | PolicyName | ชื่อกรมธรรม์ | varchar | 200 | PolicyName | policy_name |
| 42 | CompanyName | ชื่ื่อ บริษัทในเครือ | varchar | 200 | CompanyName | company_name |
| 43 | PromiseDate | วันที่เริ่มคุ้มครองกรมธรรม์ | datetime |  | PromiseDate | promise_date |
| 44 | PolEndDate | วันที่สิ้นสุดกรมธรรม์ | datetime |  | PolEndDate | pol_end_date |
| 45 | PolicyYear | กรมธรรม์ปีที่ | int | 10 | PolicyYear | policy_year |
| 46 | TaxYear | ปีภาษี | int | 10 | TaxYear | tax_year |
| 47 | PayType | ปีระเภทการจ่าย | int | 10 | PayType | pay_type |
| 48 | LotNo | งวดที่ | int | 10 | LotNo | lot_no |
| 49 | SumLifePrem | เบี้ย - ชีวิต | money | 19,4 | SumLifePrem | sum_life_prem |
| 50 | SumLifeE1Prem | เบี้ย - ชีวิตExtra 1 คิดรายคน | money | 19,4 | SumLifeE1Prem | sum_life_e1_prem |
| 51 | SumCrematPrem | เบี้ย - ค่าปลงศพ | money | 19,4 | SumCrematPrem | sum_cremat_prem |
| 52 | SumAccPrem | เบี้ย - อุบัติเหตุ | money | 19,4 | SumAccPrem | sum_acc_prem |
| 53 | SumMedAccPrem | เบี้ย - ค่ารักษาพยาบาล | money | 19,4 | SumMedAccPrem | sum_med_acc_prem |
| 54 | SumTPDPrem | เบี้ย - ทุพพลภาพ | money | 19,4 | SumTPDPrem | sum_tpd_prem |
| 55 | SumIPDPrem | เบี้ย - คนไข้ใน | money | 19,4 | SumIPDPrem | sum_ipd_prem |
| 56 | SumOPDPrem | เบี้ย - คนไข้นอก | money | 19,4 | SumOPDPrem | sum_opd_prem |
| 57 | SumMajorPlanPrem | เบี้ย - คนไข้ในเพิ่มพิเศษ | money | 19,4 | SumMajorPlanPrem | sum_major_plan_prem |
| 58 | SumDentalPrem | เบี้ย - ทันตกรรม | money | 19,4 | SumDentalPrem | sum_dental_prem |
| 59 | SumMatherPrem | เบี้ย - คลอดบุตร | money | 19,4 | SumMatherPrem | sum_mather_prem |
| 60 | SumHBPrem | เบี้ย - ชดเชยรายวัน | money | 19,4 | SumHBPrem | sum_hb_prem |
| 61 | SumOPDLabPrem | เบี้ยรวม OPD Lab | numeric | 2,2 | SumOPDLabPrem | sum_opd_lab_prem |
| 62 | SumTotalPrem | เบี้ย - รวมทั้งหมด | money | 19,4 | SumTotalPrem | sum_total_prem |
| 63 | CreatedDate | วันที่บันทึกรายการ | datetime |  |  | created_date |
| 64 | CreatedBy | ผู้บันทึกรายการ | varchar | 50 |  | created_by |
| 65 | UpdatedDate | วันที่ปรับปรุงรายการ | datetime |  |  | updated_date |
| 66 | UpdatedBy | ผู้ปรับปรุงรายการ | varchar | 50 |  | updated_by |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412708 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-08 Certificate New Business =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสมาชิกเข้าใหม่ New case จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_CertNewBusiness]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_CertNewBusinessField | ตารางที่บันทึกข้อมูลtx_rig_landing_certnewbusinessField |
| 1 | RigVCerId | #N/A | bigint | 19 | RigVCerId | #N/A |
| 2 | CertificCustNo | รหัสผู้เอาประกัน | varchar | 8 | CertificCustNo | certific_cust_no |
| 3 | CustCode | รหัสลูกค้า | varchar | 10 | CustCode | cust_code |
| 4 | PolicyCode | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | tinyint | 3 | PolicyCode | policy_code |
| 5 | PolicyNo | เลขที่กธ. | varchar | 8 | PolicyNo | policy_no |
| 6 | PolicyYear | กธ. ปีที่ | int | 10 | PolicyYear | policy_year |
| 7 | ClassNo | Class No. | tinyint | 3 | ClassNo | class_no |
| 8 | EffectDate | วันเดือนปีที่มีผลบังคับ | datetime |  | EffectDate | effect_date |
| 9 | TransDate | #N/A | datetime |  | TransDate | #N/A |
| 10 | ChangeDate | #N/A | datetime |  | ChangeDate | #N/A |
| 11 | LifeExtraRate | อัตราเบี้ย...เพิ่มพิเศษ ชีวิต | numeric | 7,4 | LifeExtraRate | life_extra_rate |
| 12 | LifeInsur | ทุน...ชีวิต | money | 19,4 | LifeInsur | life_insur |
| 13 | AccInsur | ทุน... อบ. | money | 19,4 | AccInsur | acc_insur |
| 14 | MedInsur | ทุน...ค่ารักษาจาก อบ. | money | 19,4 | MedInsur | med_insur |
| 15 | TPDInsur | ทุน...ชีวิตทุพพลภาพ | money | 19,4 | TPDInsur | tpd_insur |
| 16 | LifeE1Prem | เบี้ย...เพิ่มพิเศษ - ชีวิต | money | 19,4 | LifeE1Prem | life_e1_prem |
| 17 | LifePrem | เบี้ย......ชีวิต | money | 19,4 | LifePrem | life_prem |
| 18 | AccPrem | เบี้ย...... อบ. | money | 19,4 | AccPrem | acc_prem |
| 19 | MedPrem | เบี้ย......ค่ารักษาจาก อบ. | money | 19,4 | MedPrem | med_prem |
| 20 | Age | อายุ | smallint | 5 | Age | age |
| 21 | Status | สถานะผู้เอาประกัน | char | 1 | Status | status |
| 22 | TPDPrem | เบี้ย......ทุพพลภาพ | money | 19,4 | TPDPrem | tpd_prem |
| 23 | MedPlanRateIPPrem | เบี้ย......สุขภาพผู้ป่วยใน | money | 19,4 | MedPlanRateIPPrem | med_plan_rate_ip_prem |
| 24 | MedPlanRateOPPrem | เบี้ย......สุขภาพผู้ป่วยนอก | money | 19,4 | MedPlanRateOPPrem | med_plan_rate_op_prem |
| 25 | Dental | เบี้ย......ทันตกรรม | money | 19,4 | Dental | dental |
| 26 | NetEmployer | เบี้ย......ส่วนที่นายจ้างจ่าย | money | 19,4 | NetEmployer | net_employer |
| 27 | NetEmployee | เบี้ย......ส่วนที่ลูกจ้างจ่าย | money | 19,4 | NetEmployee | net_employee |
| 31 | CreatedDate | วันที่บันทึกรายการ | datetime |  |  | created_date |
| 32 | CreatedBy | ผู้บันทึกรายการ | varchar | 50 |  | created_by |
| 33 | UpdatedDate | วันที่ปรับปรุงรายการ | datetime |  |  | updated_date |
| 34 | UpdatedBy | ผู้ปรับปรุงรายการ | varchar | 50 |  | updated_by |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412710 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-09 Certificate Alteration =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลสลักหลัง จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | Oceanlife | RIG_View_CertAlteration | ข้อมูลกรมธรรม์ประกันกลุ่ม | select * from RIG_View_CertAlteration |

## Output
| No. | Attribute Name | Table | Field | Description |
| 1 | RigVAlterId | RIG_View_CertAlteration | RigVAlterId | เลขที่ Running |
| 2 | DocNo | RIG_View_CertAlteration | DocNo | เลขที่เอกสาร (MM64-XXXXX) |
| 3 | DocDate | RIG_View_CertAlteration | DocDate | วันที่เอกสาร (Alteration Date) |
| 4 | TransDate | RIG_View_CertAlteration | TransDate | วันที่ทำรายการ |
| 5 | MthStatus | RIG_View_CertAlteration | MthStatus | สถานะ |
| 6 | PolicyNo | RIG_View_CertAlteration | PolicyNo | เลขที่กรมธรรม์ |
| 7 | PolicyYear | RIG_View_CertAlteration | PolicyYear | ปีกรมธรรม์ |
| 8 | DocStatus | RIG_View_CertAlteration | DocStatus | สถานะเอกสาร |
| 9 | PolicyCode | RIG_View_CertAlteration | PolicyCode | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) |
| 10 | CertificCustNo | RIG_View_CertAlteration | CertificCustNo | เลขที่ี่ Cerno สมาชิก |
| 11 | Custcode | RIG_View_CertAlteration | Custcode | เลขที่ Custcode สมาชิก |
| 12 | CompCodeBefore | RIG_View_CertAlteration | CompCodeBefore | รหัสบริษัทก่อนการเปลี่ยนแปลง |
| 13 | CompCodeAfter | RIG_View_CertAlteration | CompCodeAfter | รหัสบริษัทหลังการเปลี่ยนแปลง |
| 14 | DeptCodeBefore | RIG_View_CertAlteration | DeptCodeBefore | รหัสหน่วยงานก่อนการเปลี่ยนแปลง |
| 15 | DeptCodeAfter | RIG_View_CertAlteration | DeptCodeAfter | รหัสหน่วยงานหลังการเปลี่ยนแปลง |
| 16 | StatusAfter | RIG_View_CertAlteration | StatusAfter | Status หลังการเปลี่ยนแปลง |
| 17 | StatusBefore | RIG_View_CertAlteration | StatusBefore | Status ก่อนการเปลี่ยนแปลง |
| 18 | SalaryBefore | RIG_View_CertAlteration | SalaryBefore |  |
| 19 | SalaryAfter | RIG_View_CertAlteration | SalaryAfter |  |
| 20 | EmpNoBefore | RIG_View_CertAlteration | EmpNoBefore | รหัสพนักงานก่อนการเปลี่ยนแปลง |
| 21 | EmpNoAfter | RIG_View_CertAlteration | EmpNoAfter | รหัสพนักงานหลังการเปลี่ยนแปลง |
| 22 | ChangeDateBefore | RIG_View_CertAlteration | ChangeDateBefore | Change Date ก่อนการเปลี่ยนแปลง |
| 23 | ChangeDateAfter | RIG_View_CertAlteration | ChangeDateAfter | Change Date หลังการเปลี่ยนแปลง |
| 24 | EffectDate | RIG_View_CertAlteration | EffectDate | วันเดือนปีที่มีผลบังคับ |
| 25 | EffectDateBefore | RIG_View_CertAlteration | EffectDateBefore |  |
| 26 | ClassNoBefore | RIG_View_CertAlteration | ClassNoBefore | Class No. ก่อนการเปลี่ยนแปลง |
| 27 | ClassNoAfter | RIG_View_CertAlteration | ClassNoAfter | Class No. หลังการเปลี่ยนแปลง |
| 28 | CountOfDate | RIG_View_CertAlteration | CountOfDate | จำนวนวัน |
| 29 | LifeInsurBefore | RIG_View_CertAlteration | LifeInsurBefore | ทุนชีวิต-ก่อนการเปลี่ยนแปลง |
| 30 | AccInsurBefore | RIG_View_CertAlteration | AccInsurBefore | ทุน อบ.-ก่อนการเปลี่ยนแปลง |
| 31 | MedInsurBefore | RIG_View_CertAlteration | MedInsurBefore | ทุนค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |
| 32 | TPDInsurBefore | RIG_View_CertAlteration | TPDInsurBefore | ทุนทุพพลภาพ-ก่อนการเปลี่ยนแปลง |
| 33 | LifeInsurAfter | RIG_View_CertAlteration | LifeInsurAfter | ทุนชีวิต-หลังการเปลี่ยนแปลง |
| 34 | AccInsurAfter | RIG_View_CertAlteration | AccInsurAfter | ทุน อบ.-หลังการเปลี่ยนแปลง |
| 35 | MedInsurAfter | RIG_View_CertAlteration | MedInsurAfter | ทุนค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |
| 36 | TPDInsurAfter | RIG_View_CertAlteration | TPDInsurAfter | ทุนทุพพลภาพ-หลังการเปลี่ยนแปลง |
| 37 | LifePremBefore | RIG_View_CertAlteration | LifePremBefore | เบี้ยชีวิต-ก่อนการเปลี่ยนแปลง |
| 38 | AccPremBefore | RIG_View_CertAlteration | AccPremBefore | เบี้ย อบ.-ก่อนการเปลี่ยนแปลง |
| 39 | MedPremBefore | RIG_View_CertAlteration | MedPremBefore | เบี้ยค่ารักษาฯ..จาก อบ.-ก่อนการเปลี่ยนแปลง |
| 40 | TPDPremBefore | RIG_View_CertAlteration | TPDPremBefore | เบี้ยทุพพลภาพ-ก่อนการเปลี่ยนแปลง |
| 41 | LifeE1PremBefore | RIG_View_CertAlteration | LifeE1PremBefore | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |
| 42 | LifePremAfter | RIG_View_CertAlteration | LifePremAfter | เบี้ยชีวิต-หลังการเปลี่ยนแปลง |
| 43 | AccPremAfter | RIG_View_CertAlteration | AccPremAfter | เบี้ย อบ.-หลังการเปลี่ยนแปลง |
| 44 | MedPremAfter | RIG_View_CertAlteration | MedPremAfter | เบี้ยค่ารักษาฯ..จาก อบ.-หลังการเปลี่ยนแปลง |
| 45 | TPDPremAfter | RIG_View_CertAlteration | TPDPremAfter | เบี้ยทุพพลภาพ-หลังการเปลี่ยนแปลง |
| 46 | LifeE1PremAfter | RIG_View_CertAlteration | LifeE1PremAfter | เบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |
| 47 | LifePremDiff | RIG_View_CertAlteration | LifePremDiff | ผลต่างของเบี้ยชีวิต |
| 48 | AccPremDiff | RIG_View_CertAlteration | AccPremDiff | ผลต่างของเบี้ยอบ. |
| 49 | MedPremDiff | RIG_View_CertAlteration | MedPremDiff | ผลต่างของเบี้ยค่ารักษาฯ..จาก อบ. |
| 50 | TPDPremDiff | RIG_View_CertAlteration | TPDPremDiff | ผลต่างของเบี้ยทุพพลภาพ |
| 51 | LifeE1PremDiff | RIG_View_CertAlteration | LifeE1PremDiff | ผลต่างของเบี้ยเพิ่มพิเศษ 1 - ชีวิต |
| 52 | LifeE1RateBefore | RIG_View_CertAlteration | LifeE1RateBefore | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-ก่อนการเปลี่ยนแปลง |
| 53 | LifeE1RateAfter | RIG_View_CertAlteration | LifeE1RateAfter | อัตราเบี้ยเพิ่มพิเศษ 1 - ชีวิต-หลังการเปลี่ยนแปลง |
| 54 | MedPlanBefore | RIG_View_CertAlteration | MedPlanBefore | แผนสุขภาพก่อนการเปลี่ยนแปลง |
| 55 | MedRateBefore | RIG_View_CertAlteration | MedRateBefore | แผนสุขภาพก่อนการเปลี่ยนแปลง |
| 56 | MedPlanAfter | RIG_View_CertAlteration | MedPlanAfter | แผนสุขภาพหลังการเปลี่ยนแปลง |
| 57 | MedRateAfter | RIG_View_CertAlteration | MedRateAfter | แผนสุขภาพหลังการเปลี่ยนแปลง |
| 58 | MedPremIPBefore | RIG_View_CertAlteration | MedPremIPBefore | เบี้ยคนไข้ใน-ก่อนการเปลี่ยนแปลง |
| 59 | MedPremOPBefore | RIG_View_CertAlteration | MedPremOPBefore |  |
| 60 | DentalBefore | RIG_View_CertAlteration | DentalBefore | เบี้ยทันตกรรม ก่อนการเปลี่ยนแปลง |
| 61 | MedPremIPAfter | RIG_View_CertAlteration | MedPremIPAfter | เบี้ยคนไข้ใน-หลังการเปลี่ยนแปลง |
| 62 | MedPremOPAfter | RIG_View_CertAlteration | MedPremOPAfter | เบี้ยคนไข้นอก-หลังการเปลี่ยนแปลง |
| 63 | DentalAfter | RIG_View_CertAlteration | DentalAfter | เบี้ยทันตกรรม หลังการเปลี่ยนแปลง |
| 64 | MedPlanRateIPPremDiff | RIG_View_CertAlteration | MedPlanRateIPPremDiff | ผลต่างของเบี้ยคนไข้ใน |
| 65 | MedPlanRateOPPremDiff | RIG_View_CertAlteration | MedPlanRateOPPremDiff | ผลต่างของเบี้ยคนไข้นอก |
| 66 | DentalDiff | RIG_View_CertAlteration | DentalDiff | ผลต่างของเบี้ยทันตกรรม |
| 67 | Empyer | RIG_View_CertAlteration | Empyer | จำนวนเงินที่นายจ้างจ่ายให้ |
| 68 | Empyee | RIG_View_CertAlteration | Empyee | จำนวนเงินที่ลูกจ้าง (ผู้เอาประกัน) จ่าย |
| 69 | CreatedDate | RIG_View_CertAlteration | CreatedDate | วันที่บันทึกรายการ |
| 70 | CreatedBy | RIG_View_CertAlteration | CreatedBy | ผู้บันทึกรายการ |
| 71 | UpdatedDate | RIG_View_CertAlteration | UpdatedDate | วันที่ปรับปรุงรายการ |
| 72 | UpdatedBy | RIG_View_CertAlteration | UpdatedBy | ผู้ปรับปรุงรายการ |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1305412714 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-10 Experience Refund =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลค่าประสบการณ์ จาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
| # | Database | Table Name | รายละเอียด | เงื่อนไขการดึงข้อมูล |
| ข้อมูลกรมธรรม์ |
| 1 | Oceanlife | RIG_View_ExpRefund | ข้อมูลกรมธรรม์ประกันกลุ่ม | select * from RIG_View_ExpRefund |

## Output
| No. | Attribute Name | Data Type | Length | Not Null (Y/N) |
| 1 | RigVExpId | bigint | 19 | Y |
| 2 | DocNo | varchar | 20 | N |
| 3 | DocDate | datetime |  | Y |
| 4 | AtDate | datetime |  | Y |
| 5 | ModeOfPayment | int | 10 | N |
| 6 | PolicyNo | varchar | 8 | Y |
| 7 | PolicyYear | int | 10 | N |
| 8 | PeriodBeginDate | datetime |  | Y |
| 9 | PeriodEndDate | datetime |  | Y |
| 10 | CalDate | datetime |  | Y |
| 11 | CompanyCodeHead | varchar | 20 | Y |
| 12 | CompanyNameHead | varchar | 150 | Y |
| 13 | CompanyCode | varchar | 20 | Y |
| 14 | CompanyName | varchar | 150 | Y |
| 15 | LotNo | int | 10 | N |
| 16 | LotNoAll | int | 10 | N |
| 17 | PremiumAll | money | 19,4 | N |
| 18 | PremiumAllG | money | 19,4 | N |
| 19 | ClaimAll | money | 19,4 | N |
| 20 | ClaimReserve | money | 19,4 | N |
| 21 | ClaimReservePercent | int | 10 | N |
| 22 | LastYearClaimReserve | money | 19,4 | N |
| 23 | TotalClaim | money | 19,4 | N |
| 24 | TotalAmt | money | 19,4 | N |
| 25 | TotalAmtPercent | int | 10 | N |
| 26 | ADJClaim | money | 19,4 | N |
| 27 | NetAmt | money | 19,4 | N |
| 28 | ExpRefundGPercent | int | 10 | N |
| 29 | ExpRefundG | money | 19,4 | N |
| 30 | ExpRefund | money | 19,4 | N |
| 31 | InvoiceNo | varchar | 20 | Y |
| 32 | BeneficiaryCompanycode | varchar | 20 | Y |
| 33 | BeneficiaryCompanyname | varchar | 150 | Y |
| 34 | Type | varchar | 10 | Y |
| 35 | PremiumStatement | money | 19,4 | N |
| 36 | PremiumAdj | money | 19,4 | N |
| 37 | PremiumInv | money | 19,4 | N |
| 38 | ExpRefundGSum | money | 19,4 | Y |
| 39 | RDType | varchar | 20 | N |
| 40 | RDNAME | varchar | 50 | Y |
| 41 | Premium | money | 19,4 | N |
| 42 | ExpRefundDT | money | 19,4 | N |
| 43 | PremiumE1 | money | 19,4 | N |
| 44 | ExpRefundE1 | money | 19,4 | N |
| 45 | FlgCal | bit |  | Y |
| 46 | ExpRefundPerM | money | 19,4 | Y |
| 47 | ExpRefundE1PerM | money | 19,4 | Y |
| 48 | CreatedDate | datetime |  | N |
| 49 | CreatedBy | varchar | 6 | N |
| 50 | UpdatedDate | datetime |  | N |
| 51 | UpdatedBy | varchar | 6 | N |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1308950830 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-11 Nature Of Business =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลบริษัทจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_NatureBusiness]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_NatureBusiness fields | ตารางที่บันทึกข้อมูลtx_rig_landing_nature_businessฟิลด์ |
| 1 | RigVCompid | เลขที่ Running | bigint | 19 | RigVNatureBusinessID | rig_view_nature_business_id |
| 2 | DBDCODE | รหัสกรมพัฒนาธุรกิจการค้า | varchar | 20 | DBDCODE | dbd_code |
| 3 | TypeBusiness | ประเภทธุรกิจของบริษัท | varchar | 250 | TypeBusiness | type_business |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1312260776 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-12 Unname Policy =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลบริษัทจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_UnnamePolicy]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_UnnamePolicy fields | ตารางที่บันทึกข้อมูลtx_rig_landing_unname_policyฟิลด์ |
| 1 | RigVUnnameID | เลขที่ Running | int(8) |  | RigVUnnameID | rig_v_unname_id |
| 2 | Period | งวดการคำนวณ | Timestamp |  | Period | period |
| 3 | PolicyCode | ประเภทกธ. | numeric | 1 | PolicyCode | policy_code |
| 4 | PolicyNo | เลขที่กรมธรรม์ | varchar | 8 | PolicyNo | policy_no |
| 5 | MthStatus |  | numeric | 1 | MthStatus | mth_status |
| 6 | Paytype | ประเภทการชำระเงินของกธ. | numeric | 4 | Paytype | pay_type |
| 7 | PolicyYear | ปีกรมธรรม์ | numeric | 4 | PolicyYear | policy_year |
| 8 | PromiseDate | วันเริ่มคุ้มครอง | Timestamp |  | PromiseDate | promise_date |
| 9 | ReInsurDate | วันต่อสัญญาปีต่อไป | Timestamp |  | ReInsurDate | reinsur_date |
| 10 | TotalLife | เบี้ย.ชีวิต | numeric | 19,4 | TotalLife | total_life |
| 11 | TotalAcc | เบี้ยอบ. | numeric | 19,4 | TotalAcc | total_acc |
| 12 | TotalMed | เบี้ย.ค่ารักษาฯ..จาก อบ. | numeric | 19,4 | TotalMed | total_med |
| 13 | TotalTPD | เบี้ยทุพพลภาพ | numeric | 19,4 | TotalTPD | total_tpd |
| 14 | TotalIP | เบี้ยคนไข้ใน | numeric | 19,4 | TotalIP | total_ipd |
| 15 | TotalOP | เบี้ยคนไข้นอก | numeric | 19,4 | TotalOP | total_opd |
| 16 | TotalE1Amt | จำนวนรายที่มีเบี้ยเพิ่มพิเศษ | numeric | 19,4 | TotalE1Amt | total_e1_amt |
| 17 | TotalE1Net | เบี้ยเพิ่มพิเศษรวม | numeric | 19,4 | TotalE1Net | total_e1_net |
| 18 | GrandTotal | เบี้ยรวมทั้งหมด | numeric | 19,4 | GrandTotal | grand_total |
| 19 | CompCode | รหัสบริษัท | varchar | 10 | CompCode | company_code |
| 20 | DeptCode | รหัสหน่วยงาน | varchar | 10 | DeptCode | department_code |
| 21 | TotalLifeInsur | ทุนชีวิต | numeric | 19,4 | TotalLifeInsur | total_life_insur |
| 22 | TotalAccInsur | ทุนอบ. | numeric | 19,4 | TotalAccInsur | total_acc_insur |
| 23 | TotalMedInsur | ทุนค่ารักษาฯ..จาก อบ. | numeric | 19,4 | TotalMedInsur | total_med_insur |
| 24 | TotalTPDInsur | ทุนทุพพลภาพ | numeric | 19,4 | TotalTPDInsur | total_tpd_insur |
| 25 | TotalLifeAmt | จำนวนราย-ชีวิต | numeric | 19,4 | TotalLifeAmt | total_life_amt |
| 26 | TotalAccAmt | จำนวนราย- อบ. | numeric | 19,4 | TotalAccAmt | total_acc_amt |
| 27 | TotalMedAmt | จำนวนราย-ค่ารักษาฯ..จาก อบ. | numeric | 19,4 | TotalMedAmt | total_med_amt |
| 28 | TotalTPDAmt | จำนวนราย-ทุพพลภาพ | numeric | 19,4 | TotalTPDAmt | total_tpd_amt |
| 29 | Dental | เบี้ยทันตกรรม | numeric | 19,4 | Dental | dental |
| 30 | DocNo | เลขที่เอกสาร | varchar | 20 | DocNo | doc_no |
| 31 | ReInsur_No | เลขที่กธ. ประกันต่อ | varchar | 10 | ReInsur_No | reInsur_no |
| 32 | CreatedDate | วันที่บันทึกรายการ | Timestamp |  | CreatedDate | created_date |
| 33 | CreatedBy | ผู้บันทึกรายการ | varchar | 50 | CreatedBy | created_by |
| 34 | UpdatedDate | วันที่ปรับปรุงรายการ | Timestamp |  | UpdatedDate | updated_date |
| 35 | UpdatedBy | ผู้ปรับปรุงรายการ | varchar | 50 | UpdatedBy | updated_by |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1312718876 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-13 Investigation Expense =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล ข้อมูลบริษัทจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input

## Process
<![CDATA[select * from RIG_View_InvestigationExpense]]>

## Output
| No. | Attribute Name | Description | Data Type | Length | ตารางที่ใช้ดึงข้อมูลRIG_View_InvestigationExpense fields | ตารางที่บันทึกข้อมูลtx_rig_investigation_expenseฟิลด์ |  |
| 1 | RigVInvestigationExpID | เลขที่ Running | numeric | 8 | RigVInvestigationExpID | rig_v_investigation_exp_id |  |
| 2 | DocNo | เลขที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | varchar | 20 | DocNo | doc_no |  |
| 3 | PolicyCode | ประเภทกธ. ( 0 : GH 1 : GL 2 : GU 3 : GA 4 : GS ) | numeric | 1 | PolicyCode | policy_code |  |
| 4 | PolicyNo | เลขที่กรมธรรม์ | varchar | 8 | PolicyNo | policy_no |  |
| 5 | PolicyYear | ปีกรมธรรม์ | numeric | 4 | PolicyYear | policy_year |  |
| 6 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | datetime |  | Effective Date | effective_date |  |
| 7 | CerNo | เลขที่สมาชิก | varchar | 8 | CerNo | cer_no |  |
| 8 | ClaimNo | เลขที่สินไหมรับเรื่อง | varchar | 20 | ClaimNo | claim_no |  |
| 9 | ApprovedDate | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | datetime |  | Approved Date | approved_date |  |
| 10 | EventDate | วันที่เกิดเหตุ | datetime |  | Event Date | event_date |  |
| 11 | ExpenseAmount | ค่าใช้จ่ายรวม | money |  | ExpenseAmount | expense_amount |  |
| 12 | DocDate | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | datetime |  | DocDate | doc_date |  |
| 13 | ClaimType | ประเภทเคลม0 : มรณกรรม1: ทุพพลภาพ2: ค่ารักษา3: โรคร้ายแรง | smallint |  | ClaimType | claim_type |  |
| 14 | InformDate | วันที่รับเรื่อง | datetime |  | InformDate | inform_date |  |
| 15 | InvestSeq | ส่งสอบครั้งที่ | int |  | InvestSeq | invest_seq |  |
| 16 | ConsiderSeq | การพิจารณาเคลมครั้งที่ | int |  | ConsiderSeq | consider_seq |  |
| 17 | ReInsurNo | เลขที่กธ. ประกันต่อ Ref.Reinsurance | varchar | 20 | ReInsurNo | reinsur_no |  |
| 18 | DocStatus | สถานะเอกสาร [0: Active, 2:ยกเลิก] | int |  | DocStatus | doc_status |  |
| 19 | InvestiExpense | ค่าใช้จ่าย investigation | money |  | InvestiExpense | investigation_expense | suthanee.sa 23/04/2026 #CR_INVEST |
| 20 | MedExpense | ค่าใช้จ่าย medical | money |  | MedExpense | medical_expense | suthanee.sa 23/04/2026 #CR_INVEST |
| 21 | LegalExpense | ค่าใช้จ่าย legal | money |  | LegalExpense | legal_expense | suthanee.sa 23/04/2026 #CR_INVEST |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1325564667 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-14 Claim CMS =====
Overview
Protocol
Operation
Input
Process
Output
Exception

## Overview
<ดึงข้อมูล CMS Claim จาก msa-claimtx>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry>
<ชื่อ operation>

## Input
| Name | Type | Require | Description | Example | Validation | Remark |
| claimNo | date | Y | เลขที่สินไหม | 202306022961 |  |  |

## Process
<![CDATA[SELECT b.id,b.batch_billing_no,b.batch_no,b.policy_no,b.claim_no,b.claim_channel,b.certificate_no,b.paid,b.discount,b.client_paid,b.approval_status,b.admit_date,b.approval_date,b.sum_insured,b.policy_type,b.claim_type_code,b.rider_claim_code,b.coverage_name,b.service_type
FROM tx_ncl_bill_header  a 
INNER JOIN tx_ncl_bill_detail b on b.batch_billing_no  = a.batch_billing_no  
WHERE b.approval_date >= CURRENT_DATE - INTERVAL '1 years'
  AND b.approval_date IS NOT NULL 
  AND b.approval_status = 'VTS' AND b.checkbox ='1'
  AND b.policy_type in ('GROUP','PAGROUP')
  AND a.billing_status = 'APV'
  AND b.claim_no IN (:claimNo)]]>

## Output
| No. | Attribute Name | Data Type | Length | Description | ตารางที่ใช้ดึงข้อมูล tx_ncl_bill_detail | Est ตารางที่ใช้บันทึกข้อมูล tx_rig_est_claim_cmsAct ตารางที่ใช้บันทึกข้อมูล tx_rig_act_claim_cms |
| 1 | id | numeric | 10 | รหัสอ้างอิงรายการเตรียมจ่าย | id | id |
| 2 | batch_billing_no | varchar | 25 | เลขที่รับเรื่องวางบิล | batch_billing_no | batch_billing_no |
| 3 | batch_no | varchar | 25 | เลขที่คุมเอกสาร (ระบบพิจารณาสินไหมเดิม) | batch_no | batch_no |
| 4 | policy_no | varchar | 20 | เลขที่กรมธรรม์ | policy_no | policy_no |
| 5 | claim_no | varchar | 25 | เลขที่สินไหม | claim_no | claim_no |
| 6 | claim_channel | varchar | 20 | ช่องทางการเรียกร้อง | claim_channel | claim_channel |
| 7 | certificate_no | varchar | 10 | Certificate Number | certificate_no | certificate_no |
| 8 | paid | numeric | 15,2 | ยอดอนุมัติจ่าย รพ. | paid | paid |
| 9 | discount | numeric | 15,2 | ส่วนลด รพ. | discount | discount |
| 10 | client_paid | numeric | 15,2 | ยอดเรียกเก็บลูกค้า | client_paid | client_paid |
| 11 | approval_status | varchar | 20 | สถานะการพิจารณา (ระดับรายการ)WVE = รอตรวจสอบVTS = ตรวจสอบสำเร็จCANT = ยกเลิกรายการ | approval_status | approval_status |
| 12 | approval_date | timestamp |  | วันที่พิจารณาสินไหม | approval_date | approval_date |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>


===== PAGE 1329922406 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-15 Inforce (R17) =====
Overview
Protocol
Operation
Input
Process
Output
Example Input & Output

## Overview
<ดึงข้อมูล ข้อมูลกรมธรรม์ประกันกลุ่มทั้งหมดจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
|  |  |  |  |  |  |  |

## Process
<![CDATA[SELECT * FROM dbo.RIG_View_GLSOPHead;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | data type | size | ตารางที่ใช้ดึงข้อมูล RIG_View_GLSOPHead | ตารางที่ใช้บันทึกข้อมูล tx_rig_landing_gl_sophead |
| RigVSOPID |  |  | RigVSOPID | rig_v_sop_id |
| DocNo | varchar | 20 | DocNo | doc_no |
| TransDate | Timestamp |  | TransDate | trans_date |
| Period | Timestamp |  | Period | period_date |
| PolicyNo | varchar | 8 | PolicyNo | policy_no |
| MthStatus | int | 4 | MthStatus | mth_status |
| Paytype | int | 4 | Paytype | pay_type |
| PolicyYear | int | 4 | PolicyYear | policy_year |
| CompCode | varchar | 10 | CompCode | comp_code |
| PremLife | numeric | 19,4 | PremLife | prem_life |
| PremAcc | numeric | 19,4 | PremAcc | prem_acc |
| PremMed | numeric | 19,4 | PremMed | prem_med |
| PremTPD | numeric | 19,4 | PremTPD | prem_tpd |
| PremE1 | numeric | 19,4 | PremE1 | prem_e1 |
| TotalPrem | numeric | 19,4 | TotalPrem | total_prem |
| PremIP | numeric | 19,4 | PremIP | prem_ip |
| PremOP | numeric | 19,4 | PremOP | prem_op |
| PremDental | numeric | 19,4 | PremDental | prem_dental |
| LifeInsur | numeric | 19,4 | LifeInsur | life_insur |
| AccInsur | numeric | 19,4 | AccInsur | acc_insur |
| MedInsur | numeric | 19,4 | MedInsur | med_insur |
| TPDInsur | numeric | 19,4 | TPDInsur | tpd_insur |
| LifeAmt | numeric | 19,4 | LifeAmt | life_amt |
| AccAmt | numeric | 19,4 | AccAmt | acc_amt |
| MedAmt | numeric | 19,4 | MedAmt | med_amt |
| TPDAmt | numeric | 19,4 | TPDAmt | tpd_amt |
| AmtE1 | numeric | 19,4 | AmtE1 | amt_e1 |
| Remark | varchar | 255 | Remark | remark |
| DocStatus | numeric | 2 | DocStatus | doc_status |
| EditDateTime | Timestamp | 8 | EditDateTime | edit_date_time |
| DOCNO_INV | varchar | 20 | DOCNO_INV | doc_no_inv |
| AlterPremDiff | numeric | 8 | AlterPremDiff | alter_prem_diff |
| created_date | datetime |  | created_date | created_date |
| created_by | varchar | 50 | created_by | created_by |
| updated_date | Timestamp |  | updated_date | updated_date |
| updated_by | varchar | 50 | updated_by | updated_by |
Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1336967279 | Functional Specification > 06. External Service Call Specification. > WS-RIG-001 Landing from Oceanlife > WS-RIG-001-16 Premium Rate =====
Overview
Protocol
Operation
Input
Process
Output
Example Input & Output

## Overview
<ดึงข้อมูล ข้อมูลกรมธรรม์ประกันกลุ่มทั้งหมดจาก Oceanlife (SQLServer)>

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry,bulk,delete,update,add>
<ชื่อ operation>

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
|  |  |  |  |  |  |  |

## Process
<![CDATA[SELECT * FROM dbo.RIG_View_PremiumRate;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | data type | size | ตารางที่ใช้ดึงข้อมูล RIG_View_PremiumRate | ตารางที่ใช้บันทึกข้อมูล tx_rig_landing_prem_rate |
| RigVRateID | numeric |  | RigVRateID | rig_v_rate_id |
| DocNoUWR | varchar | 20 | DocNoUWR | doc_no_uwr |
| PolicyNo | varchar | 10 | PolicyNo | policy_no |
| PolicyYear | numeric | 4 | PolicyYear | policy_year |
| PromiseDate | Timestamp |  | PromiseDate | promise_date |
| ExpireDate | Timestamp |  | ExpireDate | expire_date |
| PremRateTableCode | numeric | 4 | PremRateTableCode | prem_rate_table_code |
| PremRateTableName | varchar | 100 | PremRateTableName | prem_rate_table_name |
| PremRateTableType | varchar | 10 | PremRateTableType | prem_rate_table_type |
| PremRateTableKind | varchar | 10 | PremRateTableKind | prem_rate_table_kind |
| ValueAgeOrClass | numeric | 4 | ValueAgeOrClass | value_age_or_class |
| ValueGender | varchar | 6 | ValueGender | value_gender |
| ValueLife | numeric | 14,4 | ValueLife | value_life |
| ValueAcc | numeric | 14,4 | ValueAcc | value_acc |
| ValueMedAcc | numeric | 14,4 | ValueMedAcc | value_med_acc |
| ValueTPD | numeric | 14,4 | ValueTPD | value_tpd |
| Status | numeric | 2 | Status | status |
| ImportDate | Timestamp |  | ImportDate | import_date |
| ImportUser | varchar | 30 | ImportUser | import_user |
| ApproveDate | Timestamp |  | ApproveDate | approve_date |
| ApproveUser | varchar | 30 | ApproveUser | approve_user |
| CancelDate | Timestamp |  | CancelDate | cancel_date |
| CancelUser | varchar | 30 | CancelUser | cancel_user |
| CancelRemark | varchar | 30 | CancelRemark | cancel_remark |
| CreatedDate | Timestamp |  | CreatedDate | created_date |
| CreatedBy | varchar | 50 | CreatedBy | created_by |
Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313145296 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL =====
(empty page)


===== PAGE 1320517990 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate =====
(empty page)


===== PAGE 1313145302 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-01 Insert EDW Process (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับส่งข้อมูลประมวลผล Estimate เข้าระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <POST>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| period | numeric | Require | ช่วงเดือน/ปีที่ค้นหา | 202301 |  | 202301 yyyyMM (ค.ศ.) |
| reinsurer | string | Require | ชื่อบริษัท | Thaire |  |  |
| treaty_code | string | Require | ชื่อสัญญา | TOA_Ind_ORD |  |  |

## Process
ดำเนินการ Insert ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล EST.ที่ หน้าจอ
- ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอ
- กรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป ตามขั้นตอนดังนี้
- สร้าง transaction ที่ tx_ri_process_header (msa-adwetl) เพื่อบันทึกข้อมูล process ดังนี้ Create tx_ri_process_header No.NameTypeCondition1ri_process_hd_idnumericinsert running id2group_type_idnumeric13ri_process_status_idnumericinsert = 9 (กำลังดำเนินการ)4single_or_groupcharG5estimate_or_actualcharE6transaction_datetimestampTimestamp ที่เริ่มสร้างข้อมูล7update_bycharnull8update_datetimestampnull9create_bychartx_rig_est_hd.created_by10create_datetimestampTimestamp ที่เริ่มสร้างข้อมูล11system_by_datecharRIG
- Return ข้อมูลสถานะรายการReturn ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_est_hd.edw_status (9)Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_est_hd.edw_status_desc (กำลังดำเนินการ) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_est_hd.edw_status (9)
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_est_hd.edw_status_desc (กำลังดำเนินการ) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- สร้างข้อมูล Standard template (msa-adwetl) ดังนี้สร้าง transaction ที่ tx_ri_std_hd ดังนี้ Create tx_ri_std_hd tx_ri_std_hd เงื่อนไขการบันทึก No.NameTypeDatasource TableInsertExample1ri_std_hd_idnumeric Running id auto generate12ri_process_hd_idnumeric from tx_ri_process_header.ri_process_hd_id13cf_file_name_idnumericmsa-adwetlfrom t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> 14ms_import_status_idnumeric 115periodchartx_rig_est_hdperiod2024016reinsurerchartx_rig_est_hd reinsurer_codeRGA7treaty_codechartx_rig_est_hd treaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> RGA_Grp_CL_Cbank_THRELshare8ri_typechar EE9sum_recordsnumeric nullnull10imp_file_namechar from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> ThaiReSuper Health Care_{YEAR}{MM}_STD.csv11imp_file_availableboolean falsefalse12err_file_namechar nullnull13err_file_availableboolean falsefalse14no_data_flagboolean falsefalse15unuse_flagboolean falsefalse16remarkchar nullnull17transaction_datetimestamp start timestamp2024-01-01 00:00:00 +070018created_datetimestamp start timestamp2024-01-01 00:00:00 +070019created_bychartx_rig_est_hd created_bypongsathorn.pa20updated_datetimestamp finish timestamp2024-01-01 00:00:00 +070021updated_bychartx_rig_est_hd updated_bypongsathorn.pa22ind_grpchar GI23ri_bdr_hd_idnumerictx_rig_est_hd ri_est_hd_id124mps_flagboolean falsefalse25ms_ri_treaty_idnumericmsa-adwetlโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 126quarter_yearchartx_rig_est_hd SUBSTRING(period, 1, 4)202427quarter_periodchartx_rig_est_hd SUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4'Q128profit_flagboolean falsefalse29doc_nochar nullnull30update_rider_code_flagboolean falsefalse31system_bychar RIGIRI32facult_flagboolean falsetrue, false
- สร้าง transaction ที่ tx_ri_std_hd ดังนี้ Create tx_ri_std_hd tx_ri_std_hd เงื่อนไขการบันทึก No.NameTypeDatasource TableInsertExample1ri_std_hd_idnumeric Running id auto generate12ri_process_hd_idnumeric from tx_ri_process_header.ri_process_hd_id13cf_file_name_idnumericmsa-adwetlfrom t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> 14ms_import_status_idnumeric 115periodchartx_rig_est_hdperiod2024016reinsurerchartx_rig_est_hd reinsurer_codeRGA7treaty_codechartx_rig_est_hd treaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> RGA_Grp_CL_Cbank_THRELshare8ri_typechar EE9sum_recordsnumeric nullnull10imp_file_namechar from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> ThaiReSuper Health Care_{YEAR}{MM}_STD.csv11imp_file_availableboolean falsefalse12err_file_namechar nullnull13err_file_availableboolean falsefalse14no_data_flagboolean falsefalse15unuse_flagboolean falsefalse16remarkchar nullnull17transaction_datetimestamp start timestamp2024-01-01 00:00:00 +070018created_datetimestamp start timestamp2024-01-01 00:00:00 +070019created_bychartx_rig_est_hd created_bypongsathorn.pa20updated_datetimestamp finish timestamp2024-01-01 00:00:00 +070021updated_bychartx_rig_est_hd updated_bypongsathorn.pa22ind_grpchar GI23ri_bdr_hd_idnumerictx_rig_est_hd ri_est_hd_id124mps_flagboolean falsefalse25ms_ri_treaty_idnumericmsa-adwetlโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 126quarter_yearchartx_rig_est_hd SUBSTRING(period, 1, 4)202427quarter_periodchartx_rig_est_hd SUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4'Q128profit_flagboolean falsefalse29doc_nochar nullnull30update_rider_code_flagboolean falsefalse31system_bychar RIGIRI32facult_flagboolean falsetrue, false
- Return ข้อมูลอ้างอิงรายการReturn tx_rig_est_hd.ri_std_hd_id ไป insert ที่ tx_rig_est_hd.ri_std_hd_id
- Return tx_rig_est_hd.ri_std_hd_id ไป insert ที่ tx_rig_est_hd.ri_std_hd_id

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 9 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | กำลังดำเนินการ |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313145313 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-01 Insert EDW Process (Estimate) > 1. Create tx_ri_process_header (est) =====
| No. | Name | Type | Condition |
| 1 | ri_process_hd_id | numeric | insert running id |
| 2 | group_type_id | numeric | 1 |
| 3 | ri_process_status_id | numeric | insert = 9 (กำลังดำเนินการ) |
| 4 | single_or_group | char | G |
| 5 | estimate_or_actual | char | E |
| 6 | transaction_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |
| 7 | update_by | char | null |
| 8 | update_date | timestamp | null |
| 9 | create_by | char | tx_rig_est_hd.created_by |
| 10 | create_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |
| 11 | system_by_date | char | RIG |


===== PAGE 1313145316 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-01 Insert EDW Process (Estimate) > 2. Create tx_ri_std_hd (est) =====
|  | tx_ri_std_hd | เงื่อนไขการบันทึก |
| No. | Name | Type | Datasource Table | Insert | Example |
| 1 | ri_std_hd_id | numeric |  | Running id auto generate | 1 |
| 2 | ri_process_hd_id | numeric |  | from tx_ri_process_header.ri_process_hd_id | 1 |
| 3 | cf_file_name_id | numeric | msa-adwetl | from t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> | 1 |
| 4 | ms_import_status_id | numeric |  | 1 | 1 |
| 5 | period | char | tx_rig_est_hd | period | 202401 |
| 6 | reinsurer | char | tx_rig_est_hd | reinsurer_code | RGA |
| 7 | treaty_code | char | tx_rig_est_hd | treaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> | RGA_Grp_CL_Cbank_THRELshare |
| 8 | ri_type | char |  | E | E |
| 9 | sum_records | numeric |  | null | null |
| 10 | imp_file_name | char |  | from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> | ThaiReSuper Health Care_{YEAR}{MM}_STD.csv |
| 11 | imp_file_available | boolean |  | false | false |
| 12 | err_file_name | char |  | null | null |
| 13 | err_file_available | boolean |  | false | false |
| 14 | no_data_flag | boolean |  | false | false |
| 15 | unuse_flag | boolean |  | false | false |
| 16 | remark | char |  | null | null |
| 17 | transaction_date | timestamp |  | start timestamp | 2024-01-01 00:00:00 +0700 |
| 18 | created_date | timestamp |  | start timestamp | 2024-01-01 00:00:00 +0700 |
| 19 | created_by | char | tx_rig_est_hd | created_by | pongsathorn.pa |
| 20 | updated_date | timestamp |  | finish timestamp | 2024-01-01 00:00:00 +0700 |
| 21 | updated_by | char | tx_rig_est_hd | updated_by | pongsathorn.pa |
| 22 | ind_grp | char |  | G | I |
| 23 | ri_bdr_hd_id | numeric | tx_rig_est_hd | ri_est_hd_id | 1 |
| 24 | mps_flag | boolean |  | false | false |
| 25 | ms_ri_treaty_id | numeric | msa-adwetl | โดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> | 1 |
| 26 | quarter_year | char | tx_rig_est_hd | SUBSTRING(period, 1, 4) | 2024 |
| 27 | quarter_period | char | tx_rig_est_hd | SUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4' | Q1 |
| 28 | profit_flag | boolean |  | false | false |
| 29 | doc_no | char |  | null | null |
| 30 | update_rider_code_flag | boolean |  | false | false |
| 31 | system_by | char |  | RIG | IRI |
| 32 | facult_flag | boolean |  | false | true, false |


===== PAGE 1313145343 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-02 Insert STD (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับส่งข้อมูลประมวลผล Estimate เข้าระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <POST>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
ให้ส่งข้อมูลเป็น list  โดยดูตาม mapping ในหัวข้อ Process

## Process
เมื่อดำเนินการสร้างข้อมูล Process สำเร็จที่ (WS-RIG-002-01) ให้ดำเนินการ Insert ข้อมูล ดังนี้
- สร้างข้อมูล Standard template (msa-adwetl) ดังนี้สร้าง transaction ที่ tx_ri_std_all ดังนี้ Create tx_ri_std_all Objective: ดำเนินการสร้างรายการ ดังนี้สร้างรายการที่ tx_ri_std_all Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_est_hdri_std_hd_id 3periodchartx_rig_est_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_est_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_est_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_est_hdri_method 9cpa_rider_flagchartx_rig_est_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_est_bdrpolicy_no 11policy_yearnumerictx_rig_est_bdrpolicy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_est_bdrsale_option 15sale_channel_codechartx_rig_est_bdrsale_channel_code 16commencement_datedatetx_rig_est_bdreffective_date 17ri_commencement_datedatetx_rig_est_policy_hdtx_rig_est_bdrri_com_date 18premium_lifenumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_est_bdrri_prem_acc + ri_prem_renew_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_est_bdrri_comm_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_est_bdrri_comm_acc 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_est_bdrri_comm_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_est_bdrri_comm_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_est_bdrri_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_est_bdrri_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_est_bdrri_claim_add 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumeric 0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumeric 0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumeric 0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumeric 0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumeric 0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumeric 0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumeric 0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumeric 0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumeric 0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumeric 0 75total_sr_ridernumeric 0 76total_sr_addnumeric 0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumeric 0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumeric ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_est_bdreffective_date 114statuschartx_rig_est_policy_hdri_policy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_est_bdrevent_date 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_est_bdrri_claim_med 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_est_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_est_bdrevent_date 156total_ri_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 157total_ri_commnumerictx_rig_est_bdrri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_est_bdrtx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar Null 178comm_mednumerictx_rig_est_bdrri_comm_medical 179premium_mednumeric 0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_est_bdreffective_date 183paytodatetx_rig_est_bdr(effective_date + 1 ปี) -1 วัน 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_est_bdrclosing_periodTO_CHAR(effective_date, 'YYYYMM') 241ri_prem_durationchartx_rig_est_bdrtx_rig_est_bdr.period 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 244period_quarterchartx_rig_est_bdrนำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 245total_claimnumerictx_rig_est_bdrri_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric Null 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_est_policy_hdexpire_date (suthanee.sa 24/03/2025) 282invoice_datedatetx_rig_est_policy_hdf_receipt_date (suthanee.sa 24/03/2025)
- สร้าง transaction ที่ tx_ri_std_all ดังนี้ Create tx_ri_std_all Objective: ดำเนินการสร้างรายการ ดังนี้สร้างรายการที่ tx_ri_std_all Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_est_hdri_std_hd_id 3periodchartx_rig_est_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_est_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_est_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_est_hdri_method 9cpa_rider_flagchartx_rig_est_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_est_bdrpolicy_no 11policy_yearnumerictx_rig_est_bdrpolicy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_est_bdrsale_option 15sale_channel_codechartx_rig_est_bdrsale_channel_code 16commencement_datedatetx_rig_est_bdreffective_date 17ri_commencement_datedatetx_rig_est_policy_hdtx_rig_est_bdrri_com_date 18premium_lifenumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_est_bdrri_prem_acc + ri_prem_renew_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_est_bdrri_comm_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_est_bdrri_comm_acc 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_est_bdrri_comm_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_est_bdrri_comm_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_est_bdrri_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_est_bdrri_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_est_bdrri_claim_add 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumeric 0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumeric 0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumeric 0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumeric 0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumeric 0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumeric 0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumeric 0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumeric 0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumeric 0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumeric 0 75total_sr_ridernumeric 0 76total_sr_addnumeric 0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumeric 0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumeric ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_est_bdreffective_date 114statuschartx_rig_est_policy_hdri_policy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_est_bdrevent_date 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_est_bdrri_claim_med 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_est_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_est_bdrevent_date 156total_ri_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 157total_ri_commnumerictx_rig_est_bdrri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_est_bdrtx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar Null 178comm_mednumerictx_rig_est_bdrri_comm_medical 179premium_mednumeric 0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_est_bdreffective_date 183paytodatetx_rig_est_bdr(effective_date + 1 ปี) -1 วัน 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_est_bdrclosing_periodTO_CHAR(effective_date, 'YYYYMM') 241ri_prem_durationchartx_rig_est_bdrtx_rig_est_bdr.period 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 244period_quarterchartx_rig_est_bdrนำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 245total_claimnumerictx_rig_est_bdrri_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric Null 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_est_policy_hdexpire_date (suthanee.sa 24/03/2025) 282invoice_datedatetx_rig_est_policy_hdf_receipt_date (suthanee.sa 24/03/2025)
- สร้างรายการที่ tx_ri_std_all Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_est_hdri_std_hd_id 3periodchartx_rig_est_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_est_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_est_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_est_hdri_method 9cpa_rider_flagchartx_rig_est_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_est_bdrpolicy_no 11policy_yearnumerictx_rig_est_bdrpolicy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_est_bdrsale_option 15sale_channel_codechartx_rig_est_bdrsale_channel_code 16commencement_datedatetx_rig_est_bdreffective_date 17ri_commencement_datedatetx_rig_est_policy_hdtx_rig_est_bdrri_com_date 18premium_lifenumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_est_bdrri_prem_acc + ri_prem_renew_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_est_bdrri_comm_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_est_bdrri_comm_acc 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_est_bdrri_comm_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_est_bdrri_comm_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_est_bdrri_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_est_bdrri_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_est_bdrri_claim_add 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumeric 0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumeric 0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumeric 0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumeric 0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumeric 0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumeric 0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumeric 0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumeric 0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumeric 0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumeric 0 75total_sr_ridernumeric 0 76total_sr_addnumeric 0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumeric 0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumeric ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_est_bdreffective_date 114statuschartx_rig_est_policy_hdri_policy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_est_bdrevent_date 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_est_bdrri_claim_med 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_est_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_est_bdrevent_date 156total_ri_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 157total_ri_commnumerictx_rig_est_bdrri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_est_bdrtx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar Null 178comm_mednumerictx_rig_est_bdrri_comm_medical 179premium_mednumeric 0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_est_bdreffective_date 183paytodatetx_rig_est_bdr(effective_date + 1 ปี) -1 วัน 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_est_bdrclosing_periodTO_CHAR(effective_date, 'YYYYMM') 241ri_prem_durationchartx_rig_est_bdrtx_rig_est_bdr.period 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 244period_quarterchartx_rig_est_bdrนำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 245total_claimnumerictx_rig_est_bdrri_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric Null 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_est_policy_hdexpire_date (suthanee.sa 24/03/2025) 282invoice_datedatetx_rig_est_policy_hdf_receipt_date (suthanee.sa 24/03/2025)
- กรณีไม่พบข้อมูลให้ลงค่าเป็น null
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- closing_period = 202401
- period_quarter = 2024Q1
- Return ผลการส่งข้อมูลกลับไปที่ต้นทางกรณีส่งข้อมูลสำเร็จ (SUCCESS) = 000กรณีพบข้อผิดพลาดในการส่งข้อมูล (ERROR) = 100 และไม่ต้องทำ process ถัดไป (WS-RIG-002-03)
- กรณีส่งข้อมูลสำเร็จ (SUCCESS) = 000
- กรณีพบข้อผิดพลาดในการส่งข้อมูล (ERROR) = 100 และไม่ต้องทำ process ถัดไป (WS-RIG-002-03)

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการนำเข้าข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313145345 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-02 Insert STD (Estimate) > 1. Create tx_ri_std_all (est) =====
Objective: ดำเนินการสร้างรายการ ดังนี้
- สร้างรายการที่ tx_ri_std_all Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_est_hdri_std_hd_id 3periodchartx_rig_est_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_est_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_est_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_est_hdri_method 9cpa_rider_flagchartx_rig_est_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_est_bdrpolicy_no 11policy_yearnumerictx_rig_est_bdrpolicy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_est_bdrsale_option 15sale_channel_codechartx_rig_est_bdrsale_channel_code 16commencement_datedatetx_rig_est_bdreffective_date 17ri_commencement_datedatetx_rig_est_policy_hdtx_rig_est_bdrri_com_date 18premium_lifenumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_est_bdrri_prem_acc + ri_prem_renew_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_est_bdrri_comm_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_est_bdrri_comm_acc 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_est_bdrri_comm_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_est_bdrri_comm_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_est_bdrri_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_est_bdrri_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_est_bdrri_claim_add 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumeric 0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumeric 0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumeric 0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumeric 0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumeric 0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumeric 0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumeric 0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumeric 0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumeric 0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumeric 0 75total_sr_ridernumeric 0 76total_sr_addnumeric 0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumeric 0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumeric ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_est_bdreffective_date 114statuschartx_rig_est_policy_hdri_policy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_est_bdrevent_date 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_est_bdrri_claim_med 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_est_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_est_bdrevent_date 156total_ri_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 157total_ri_commnumerictx_rig_est_bdrri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_est_bdrtx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar Null 178comm_mednumerictx_rig_est_bdrri_comm_medical 179premium_mednumeric 0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_est_bdreffective_date 183paytodatetx_rig_est_bdr(effective_date + 1 ปี) -1 วัน 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_est_bdrclosing_periodTO_CHAR(effective_date, 'YYYYMM') 241ri_prem_durationchartx_rig_est_bdrtx_rig_est_bdr.period 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 244period_quarterchartx_rig_est_bdrนำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 245total_claimnumerictx_rig_est_bdrri_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric Null 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_est_policy_hdexpire_date (suthanee.sa 24/03/2025) 282invoice_datedatetx_rig_est_policy_hdf_receipt_date (suthanee.sa 24/03/2025)
- กรณีไม่พบข้อมูลให้ลงค่าเป็น null
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- closing_period = 202401
- period_quarter = 2024Q1


===== PAGE 1313145512 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-02 Insert STD (Estimate) > 1. Create tx_ri_std_all (est) > 1. STD output (est) =====
|  | tx_ri_std_all | เงื่อนไขการบันทึก |
| No. | Name | Type | Datasource Table | Insertกรณีไม่พบข้อมูลให้ลงค่าเป็น null | Example |
| 1 | ri_std_all_id | numeric |  | Auto generate |  |
| 2 | ri_std_hd_id | numeric | tx_rig_est_hd | ri_std_hd_id |  |
| 3 | period | char | tx_rig_est_hd | period |  |
| 4 | row_no | numeric |  | Null |  |
| 5 | reinsurer | char | cf_reinsurer | reinsurer_code |  |
| 6 | treaty_code | char | tx_rig_est_hd | treaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 7 | ri_mode_of_payment | char | tx_rig_est_hd | ri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 8 | ri_method | char | tx_rig_est_hd | ri_method |  |
| 9 | cpa_rider_flag | char | tx_rig_est_hd | cpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 10 | policy_number | char | tx_rig_est_bdr | policy_no |  |
| 11 | policy_year | numeric | tx_rig_est_bdr | policy_year |  |
| 12 | code_plan | char |  | Null |  |
| 13 | base_or_rider | char |  | Null |  |
| 14 | sale_channel | char | tx_rig_est_bdr | sale_option |  |
| 15 | sale_channel_code | char | tx_rig_est_bdr | sale_channel_code |  |
| 16 | commencement_date | date | tx_rig_est_bdr | effective_date |  |
| 17 | ri_commencement_date | date | tx_rig_est_policy_hdtx_rig_est_bdr | ri_com_date |  |
| 18 | premium_life | numeric | tx_rig_est_bdr | ri_prem_life + ri_prem_renew_life |  |
| 19 | premium_extra_life | numeric |  | 0 |  |
| 20 | premium_rider | numeric |  | 0 |  |
| 21 | premium_extra_rider | numeric |  | 0 |  |
| 22 | premium_add | numeric | tx_rig_est_bdr | ri_prem_acc + ri_prem_renew_add |  |
| 23 | premium_add_extra | numeric |  | 0 |  |
| 24 | premium_ttd | numeric |  | 0 |  |
| 25 | premium_extra_ttd | numeric |  | 0 |  |
| 26 | premium_tpd | numeric |  | 0 |  |
| 27 | premium_extra_tpd | numeric |  | 0 |  |
| 28 | comm_life | numeric | tx_rig_est_bdr | ri_comm_life |  |
| 29 | comm_extra_life | numeric |  | 0 |  |
| 30 | comm_rider | numeric |  | 0 |  |
| 31 | comm_extra_rider | numeric |  | 0 |  |
| 32 | comm_add | numeric | tx_rig_est_bdr | ri_comm_acc |  |
| 33 | comm_add_extra | numeric |  | 0 |  |
| 34 | comm_ttd | numeric | tx_rig_est_bdr | ri_comm_ttd |  |
| 35 | comm_extra_ttd | numeric |  | 0 |  |
| 36 | comm_tpd | numeric | tx_rig_est_bdr | ri_comm_tpd |  |
| 37 | comm_extra_tpd | numeric |  | 0 |  |
| 38 | claim_life | numeric | tx_rig_est_bdr | ri_claim_life |  |
| 39 | claim_rider | numeric |  | 0 |  |
| 40 | claim_tpd | numeric | tx_rig_est_bdr | ri_claim_tpd |  |
| 41 | claim_ttd | numeric |  | 0 |  |
| 42 | claim_add | numeric | tx_rig_est_bdr | ri_claim_add |  |
| 43 | claim_exp_investigation | numeric |  | 0 |  |
| 44 | claim_exp_legal_fee | numeric |  | 0 |  |
| 45 | claim_exp_ex_gratia | numeric |  | 0 |  |
| 46 | prem_refund_life | numeric |  | 0 |  |
| 47 | prem_refund_extra_life | numeric |  | 0 |  |
| 48 | prem_refund_rider | numeric |  | 0 |  |
| 49 | prem_refund_extra_rider | numeric |  | 0 |  |
| 50 | prem_refund_add | numeric |  | 0 |  |
| 51 | prem_refund_add_extra | numeric |  | 0 |  |
| 52 | prem_refund_ttd | numeric |  | 0 |  |
| 53 | prem_refund_extra_ttd | numeric |  | 0 |  |
| 54 | prem_refund_tpd | numeric |  | 0 |  |
| 55 | prem_refund_extra_tpd | numeric |  | 0 |  |
| 56 | comm_refund_life | numeric |  | 0 |  |
| 57 | comm_refund_extra_life | numeric |  | 0 |  |
| 58 | comm_refund_rider | numeric |  | 0 |  |
| 59 | comm_refund_extra_rider | numeric |  | 0 |  |
| 60 | comm_refund_add | numeric |  | 0 |  |
| 61 | comm_refund_add_extra | numeric |  | 0 |  |
| 62 | comm_refund_ttd | numeric |  | 0 |  |
| 63 | comm_refund_extra_ttd | numeric |  | 0 |  |
| 64 | comm_refund_tpd | numeric |  | 0 |  |
| 65 | comm_refund_extra_tpd | numeric |  | 0 |  |
| 66 | ri_sum_assured_life | numeric |  | 0 |  |
| 67 | ri_previous_nar_life | numeric |  | 0 |  |
| 68 | ri_current_nar_life | numeric |  | 0 |  |
| 69 | total_nar_life | numeric |  | 0 |  |
| 70 | total_nar_rider | numeric |  | 0 |  |
| 71 | total_nar_add | numeric |  | 0 |  |
| 72 | total_nar_ttd | numeric |  | 0 |  |
| 73 | total_nar_tpd | numeric |  | 0 |  |
| 74 | total_sr_life | numeric |  | 0 |  |
| 75 | total_sr_rider | numeric |  | 0 |  |
| 76 | total_sr_add | numeric |  | 0 |  |
| 77 | total_sr_ttd | numeric |  | 0 |  |
| 78 | total_sr_tpd | numeric |  | 0 |  |
| 79 | ri_claim_status | char |  | Null |  |
| 80 | claim_approve_date | timestamp |  | Null |  |
| 81 | err_message | char |  | Null |  |
| 82 | transaction_date | timestamp |  | now() |  |
| 83 | created_date | timestamp |  | now() |  |
| 84 | created_by | char |  | RIG |  |
| 85 | updated_date | timestamp |  | now() |  |
| 86 | updated_by | char |  | RIG |  |
| 87 | facult_flag | boolean |  | Null |  |
| 88 | id_no | char |  | Null |  |
| 89 | std_substd | char |  | Null |  |
| 90 | birth_date | date |  | Null |  |
| 91 | con_age | numeric |  | Null |  |
| 92 | att_age | numeric |  | Null |  |
| 93 | gender | char |  | Null |  |
| 94 | cov_duration | char |  | Null |  |
| 95 | ex_prem_rate_life | numeric |  | 0 |  |
| 96 | ex_prem_rate_rider | numeric |  | 0 |  |
| 97 | sum_assured_life | numeric |  | 0 |  |
| 98 | sum_assured_rider | numeric |  | 0 |  |
| 99 | ri_previous_nar_rider | numeric |  | 0 |  |
| 100 | ri_sum_assured_rider | numeric |  | 0 |  |
| 101 | prem_total | numeric |  | ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add |  |
| 102 | std_fac | char |  | Null |  |
| 103 | plan_type | char |  | Null |  |
| 104 | tpd_type | char |  | Null |  |
| 105 | ttd_type | char |  | Null |  |
| 106 | add_type | char |  | Null |  |
| 107 | area | char |  | Null |  |
| 108 | country | char |  | Null |  |
| 109 | aec_country | char |  | Null |  |
| 110 | occ_class | char |  | Null |  |
| 111 | ri_ratio_life | numeric |  | Null |  |
| 112 | ri_ratio_rider | numeric |  | Null |  |
| 113 | effective_date | date | tx_rig_est_bdr | effective_date |  |
| 114 | status | char | tx_rig_est_policy_hd | ri_policy_status |  |
| 115 | changes_date | date |  | Null |  |
| 116 | claim_name | char |  | Null |  |
| 117 | event_date | date | tx_rig_est_bdr | event_date |  |
| 118 | claim_cause | char |  | Null |  |
| 119 | claim_benefit_life | numeric |  | 0 |  |
| 120 | claim_benefit_rider | numeric |  | 0 |  |
| 121 | claim_investigation | numeric |  | 0 |  |
| 122 | claim_legal_fee | numeric |  | 0 |  |
| 123 | claim_medical | numeric | tx_rig_est_bdr | ri_claim_med |  |
| 124 | prem_refund_com | numeric |  | 0 |  |
| 125 | compromise_amt | numeric |  | 0 |  |
| 126 | paid_life | numeric |  | 0 |  |
| 127 | paid_rider | numeric |  | 0 |  |
| 128 | remark | char |  | Null |  |
| 129 | account_name | char | tx_rig_est_hd | select contract_name from cf_rig_treaty where treaty_code = :treaty_code |  |
| 130 | sale_channel_map | char |  | Null |  |
| 131 | alter_date | date |  | Null |  |
| 132 | ri_initial_sa_life | numeric |  | 0 |  |
| 133 | ri_initial_sa_rider | numeric |  | 0 |  |
| 134 | ri_initial_sa_add | numeric |  | 0 |  |
| 135 | ri_initial_sa_tpd | numeric |  | 0 |  |
| 136 | ri_initial_sa_ttd | numeric |  | 0 |  |
| 137 | actual_sa_life | numeric |  | 0 |  |
| 138 | actual_sa_rider | numeric |  | 0 |  |
| 139 | actual_sa_add | numeric |  | 0 |  |
| 140 | actual_sa_tpd | numeric |  | 0 |  |
| 141 | actual_sa_ttd | numeric |  | 0 |  |
| 142 | previous_sa_life | numeric |  | 0 |  |
| 143 | previous_sa_rider | numeric |  | 0 |  |
| 144 | previous_sa_add | numeric |  | 0 |  |
| 145 | previous_sa_tpd | numeric |  | 0 |  |
| 146 | previous_sa_ttd | numeric |  | 0 |  |
| 147 | emr_life | numeric |  | 0 |  |
| 148 | emr_rider | numeric |  | 0 |  |
| 149 | emr_add | numeric |  | 0 |  |
| 150 | emr_tpd | numeric |  | 0 |  |
| 151 | emr_ttd | numeric |  | 0 |  |
| 152 | claim_no | char |  | Null |  |
| 153 | claim_type | char |  | Null |  |
| 154 | claim_register_date | date |  | Null |  |
| 155 | claim_event_date | date | tx_rig_est_bdr | event_date |  |
| 156 | total_ri_premium | numeric | tx_rig_est_bdr | ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add |  |
| 157 | total_ri_comm | numeric | tx_rig_est_bdr | ri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical |  |
| 158 | ri_claim_exgratia | numeric |  | 0 |  |
| 159 | total_prem_refund | numeric |  | 0 |  |
| 160 | total_comm_refund | numeric |  | 0 |  |
| 161 | ri_previous_sa | numeric |  | 0 |  |
| 162 | ri_sum_assured_add | numeric |  | 0 |  |
| 163 | ri_sum_assured_tpd | numeric |  | 0 |  |
| 164 | ri_sum_assured_ttd | numeric |  | 0 |  |
| 165 | ri_previous_nar_add | numeric |  | 0 |  |
| 166 | ri_previous_nar_tpd | numeric |  | 0 |  |
| 167 | ri_previous_nar_ttd | numeric |  | 0 |  |
| 168 | ri_current_nar_rider | numeric |  | 0 |  |
| 169 | ri_current_nar_add | numeric |  | 0 |  |
| 170 | ri_current_nar_tpd | numeric |  | 0 |  |
| 171 | ri_current_nar_ttd | numeric |  | 0 |  |
| 172 | report_type | char |  | Null |  |
| 173 | partner_code | char |  | Null |  |
| 174 | claim_status | char |  | Null |  |
| 175 | comm_rate | numeric |  | 0 |  |
| 176 | sale_option | char | tx_rig_est_bdr | tx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' |  |
| 177 | premium_type | char |  | Null |  |
| 178 | comm_med | numeric | tx_rig_est_bdr | ri_comm_medical |  |
| 179 | premium_med | numeric |  | 0 |  |
| 180 | claim_recovery_date | date |  | Null |  |
| 181 | claim_recovery_add | numeric |  | Null |  |
| 182 | payfrom | date | tx_rig_est_bdr | effective_date |  |
| 183 | payto | date | tx_rig_est_bdr | (effective_date + 1 ปี) -1 วัน |  |
| 184 | ri_initial_sa_murder | numeric |  | 0 |  |
| 185 | ri_initial_sa_motorcycle | numeric |  | 0 |  |
| 186 | ri_initial_sa_public | numeric |  | 0 |  |
| 187 | ri_initial_sa_holiday | numeric |  | 0 |  |
| 188 | actual_sa_murder | numeric |  | 0 |  |
| 189 | actual_sa_motorcycle | numeric |  | 0 |  |
| 190 | actual_sa_public | numeric |  | 0 |  |
| 191 | actual_sa_holiday | numeric |  | 0 |  |
| 192 | previous_sa_murder | numeric |  | 0 |  |
| 193 | previous_sa_motorcycle | numeric |  | 0 |  |
| 194 | previous_sa_public | numeric |  | 0 |  |
| 195 | previous_sa_holiday | numeric |  | 0 |  |
| 196 | ri_sum_assured_murder | numeric |  | 0 |  |
| 197 | ri_sum_assured_motorcycle | numeric |  | 0 |  |
| 198 | ri_sum_assured_public | numeric |  | 0 |  |
| 199 | ri_sum_assured_holiday | numeric |  | 0 |  |
| 200 | ri_previous_nar_murder | numeric |  | 0 |  |
| 201 | ri_previous_nar_motorcycle | numeric |  | 0 |  |
| 202 | ri_previous_nar_public | numeric |  | 0 |  |
| 203 | ri_previous_nar_holiday | numeric |  | 0 |  |
| 204 | ri_current_nar_murder | numeric |  | 0 |  |
| 205 | ri_current_nar_motorcycle | numeric |  | 0 |  |
| 206 | ri_current_nar_public | numeric |  | 0 |  |
| 207 | ri_current_nar_holiday | numeric |  | 0 |  |
| 208 | total_nar_murder | numeric |  | 0 |  |
| 209 | total_nar_motorcycle | numeric |  | 0 |  |
| 210 | total_nar_public | numeric |  | 0 |  |
| 211 | total_nar_holiday | numeric |  | 0 |  |
| 212 | total_sr_murder | numeric |  | 0 |  |
| 213 | total_sr_motorcycle | numeric |  | 0 |  |
| 214 | total_sr_public | numeric |  | 0 |  |
| 215 | total_sr_holiday | numeric |  | 0 |  |
| 216 | ri_ratio_murder | numeric |  | 0 |  |
| 217 | ri_ratio_motorcycle | numeric |  | 0 |  |
| 218 | ri_ratio_public | numeric |  | 0 |  |
| 219 | ri_ratio_holiday | numeric |  | 0 |  |
| 220 | premium_med_acc | numeric |  | 0 |  |
| 221 | premium_ipd | numeric |  | 0 |  |
| 222 | premium_opd | numeric |  | 0 |  |
| 223 | premium_dental | numeric |  | 0 |  |
| 224 | total_premium_med | numeric |  | 0 |  |
| 225 | comm_med_acc | numeric |  | 0 |  |
| 226 | comm_ipd | numeric |  | 0 |  |
| 227 | comm_opd | numeric |  | 0 |  |
| 228 | comm_dental | numeric |  | 0 |  |
| 229 | total_ri_dividend | numeric |  | 0 |  |
| 230 | claim_med_acc | numeric |  | 0 |  |
| 231 | claim_ipd | numeric |  | 0 |  |
| 232 | claim_opd | numeric |  | 0 |  |
| 233 | claim_dental | numeric |  | 0 |  |
| 234 | claim_return_prem | numeric |  | 0 |  |
| 235 | revival_premium_life | numeric |  | 0 |  |
| 236 | revival_premium_add | numeric |  | 0 |  |
| 237 | claim_dismemberment | numeric |  | 0 |  |
| 238 | experience_refund_life | numeric |  | 0 |  |
| 239 | experience_refund_add | numeric |  | 0 |  |
| 240 | ri_period | char | tx_rig_est_bdr | closing_periodTO_CHAR(effective_date, 'YYYYMM') |  |
| 241 | ri_prem_duration | char | tx_rig_est_bdr | tx_rig_est_bdr.period |  |
| 242 | ri_profit_com | numeric |  | 0 |  |
| 243 | total_premium | numeric | tx_rig_est_bdr | ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add |  |
| 244 | period_quarter | char | tx_rig_est_bdr | นำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 |  |
| 245 | total_claim | numeric | tx_rig_est_bdr | ri_claim_tot |  |
| 246 | prem_refund_med_acc | numeric |  | 0 |  |
| 247 | prem_refund_ipd | numeric |  | 0 |  |
| 248 | prem_refund_opd | numeric |  | 0 |  |
| 249 | prem_refund_dental | numeric |  | 0 |  |
| 250 | comm_refund_med_acc | numeric |  | 0 |  |
| 251 | comm_refund_ipd | numeric |  | 0 |  |
| 252 | comm_refund_opd | numeric |  | 0 |  |
| 253 | comm_refund_dental | numeric |  | Null |  |
| 254 | sale_channel_desc | char |  | Null |  |
| 255 | rider_plan_code | char |  | Null |  |
| 256 | premium_e1 | numeric |  | 0 |  |
| 257 | comm_life_temp | numeric |  | 0 |  |
| 258 | comm_add_temp | numeric |  | 0 |  |
| 259 | premium_life_temp | numeric |  | 0 |  |
| 260 | premium_add_temp | numeric |  | 0 |  |
| 261 | premium_tpd_temp | numeric |  | 0 |  |
| 262 | premium_med_temp | numeric |  | 0 |  |
| 263 | premium_med_acc_temp | numeric |  | 0 |  |
| 264 | premium_ipd_temp | numeric |  | 0 |  |
| 265 | premium_opd_temp | numeric |  | 0 |  |
| 266 | premium_dental_temp | numeric |  | 0 |  |
| 267 | comm_med_acc_temp | numeric |  | 0 |  |
| 268 | comm_ipd_temp | numeric |  | 0 |  |
| 269 | comm_opd_temp | numeric |  | 0 |  |
| 270 | comm_dental_temp | numeric |  | 0 |  |
| 271 | comm_tpd_temp | numeric |  | 0 |  |
| 272 | policy_type | char |  | GROUP |  |
| 273 | rider_group | char |  | Null |  |
| 274 | rider_type | char |  | Null |  |
| 275 | copay_percent | numeric |  | Null |  |
| 276 | before_copay_percent | numeric |  | null |  |
| 277 | copay_amount_rider | numeric |  | null |  |
| 278 | claim_after_copay_rider | numeric |  | null |  |
| 279 | claim_type_code | char |  | null |  |
| 280 | claim_type_abb | char |  | null |  |
| 281 | maturity_date | date | tx_rig_est_policy_hd | expire_date (suthanee.sa 24/03/2025) |  |
| 282 | invoice_date | date | tx_rig_est_policy_hd | f_receipt_date (suthanee.sa 24/03/2025) |  |


===== PAGE 1313145357 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-03 Update EDW Status (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับ Update สถานะและ count จำนวนรายการที่ระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <PUT>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_process_hd_id | numeric | Require | PK tx_ri_process_header | 1 |  |  |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| treaty_code | char | Require | รหัสสัญญา | THREL_Ind_PA |  |  |

## Process
ดำเนินการ Update ข้อมูล ดังนี้
- เมื่อสร้างข้อมูล tx_ri_std_all สำเร็จ (WS-RIG-002-03) ให้ update สถานะรายการ ที่ tx_ri_process_header ดังนี้ Update tx_ri_process_header No.NameTypeCondition1ri_process_status_idnumeric12update_bycharuser login3update_datetimestampTimestamp ที่สร้างข้อมูลสำเร็จ
- Count จำนวนรายการข้อมูลของ tx_ri_std_all ที่ Insert สำเร็จที่ tx_ri_std_hd ดังนี้ Update tx_ri_std_hd No.NameTypeCondition1sum_recordsnumeric <![CDATA[SELECT COUNT(ri_std_all_id) FROM tx_ri_std_all WHERE ri_std_hd_id = tx_ri_std_hd.ri_std_hd_id]]>
- Update ข้อมูลสำหรับประมวลผล Support booking ที่ tx_ri_std_all ดังนี้ Update tx_ri_std_all No.NameTypeCondition1ri_methodchar <![CDATA[select arrangement_type from ms_ri_treaty where treaty_code = :treaty_code;]]> 2ri_mode_of_paymentchar <![CDATA[select ri_mode_of_payment from ms_ri_treaty where treaty_code = :treaty_code;]]> 3cpa_rider_flagchar <![CDATA[select cpa_rider_flag from ms_ri_treaty where treaty_code = :treaty_code;]]>
- Return ข้อมูลสถานะรายการReturn ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_est_hd.edw_status (1)Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_est_hd.edw_status_desc (รอพิจารณา STD Template) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_est_hd.edw_status (1)
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_est_hd.edw_status_desc (รอพิจารณา STD Template) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 1 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | รอพิจารณา STD Template |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313145444 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-03 Update EDW Status (Estimate) > 1. Update tx_ri_process_hd (est) =====
| No. | Name | Type | Condition |
| 1 | ri_process_status_id | numeric | 1 |
| 2 | update_by | char | user login |
| 3 | update_date | timestamp | Timestamp ที่สร้างข้อมูลสำเร็จ |


===== PAGE 1313145448 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-03 Update EDW Status (Estimate) > 2. Update tx_ri_std_hd (est) =====
| No. | Name | Type | Condition |
| 1 | sum_records | numeric | <![CDATA[SELECT COUNT(ri_std_all_id) FROM tx_ri_std_all WHERE ri_std_hd_id = tx_ri_std_hd.ri_std_hd_id]]> |


===== PAGE 1313145450 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-03 Update EDW Status (Estimate) > 3. Update tx_ri_std_all (est) =====
| No. | Name | Type | Condition |
| 1 | ri_method | char | <![CDATA[select arrangement_type from ms_ri_treaty where treaty_code = :treaty_code;]]> |
| 2 | ri_mode_of_payment | char | <![CDATA[select ri_mode_of_payment from ms_ri_treaty where treaty_code = :treaty_code;]]> |
| 3 | cpa_rider_flag | char | <![CDATA[select cpa_rider_flag from ms_ri_treaty where treaty_code = :treaty_code;]]> |


===== PAGE 1313145393 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-04 Select EDW Status  (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับ get สถานะจาก edw มาที่ group ri
Repositories : msa-reinsurance
Service path
PUT:  thaisamut
TYPE : <GET>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 2 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | รอส่งขออนุมัติเข้า EDW |  |  |
| update_by | string | Require | ผู้ทำรายการ | pongsathorn.pa |  | login id from etl |

## Process
ดำเนินการ Return ข้อมูล tx_ri_process_header กลับไปที่ tx_rig_est_hd ดังนี้
- เมื่อระบบดำเนินการปรับสถานะข้อมูลที่ tx_ri_process_header (msa-adwetl) ให้ get ข้อมูลสถานะรายการและผู้ดำเนินการ กลับมา update ที่ tx_rig_est_hd ดังนี้Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Update ที่ tx_rig_est_hd.edw_statusReturn process_status_name จาก ms_ri_process_status.process_status_name ไป Update ที่ tx_rig_est_hd.edw_status_descReturn update_by จาก tx_ri_process_header.update_by ไป Update ที่ tx_rig_est_hd.updated_by
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Update ที่ tx_rig_est_hd.edw_status
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Update ที่ tx_rig_est_hd.edw_status_desc
- Return update_by จาก tx_ri_process_header.update_by ไป Update ที่ tx_rig_est_hd.updated_by

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313145411 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-05 Select Reconcile EDW (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับดึงข้อมูลยอดสุทธิเพื่อเปรียบเทียบรายการจาก 2 ระบบคือ Group RI และ EDW (Estimate)
Repositories : msa-
Service path
GET:  thaisamut
TYPE : <GET>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |

## Process
ดำเนินการดึง list ข้อมูลจาก tx_rig_est_hd โดยรับ Parameter ด้วย tx_ri_summary.ri_std_hd_id จาก msa-adwetl

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Table | Field | Validation | Remark |
| estHd | numeric | Require | tx_rig_est_hd.ri_est_hd_id | 1 | tx_rig_est_hd | ri_est_hd_id |  |  |
| stdHd | numeric | Require | ID อ้างอิงจากระบบ EDW | 2 | tx_rig_est_hd | ri_std_hd_id |  |  |
| period | numeric | Require | งวดทำรายการ | 202404 | tx_rig_est_hd | period |  |  |
| reinsurerCode | vachar | Require | ชื่อบริษัท Reinsurer | Mapfre | tx_rig_est_hd.cf_reinsurer_id = cf_reinsurer.cf_reinsurer_id | cf_reinsurer.reinsurer_code |  |  |
| treatyCode | vachar | Require | ชื่อของ Treaty | Mapfre_Grp_CL_NonCBank | tx_rig_est_hd | treaty_code |  |  |
| sumPremium | numeric | Require | ค่า ri_premium จากการประมวลผลของ Treaty (ขาจ่าย) | 1,000 | tx_rig_est_hd | ri_premium |  |  |
| sumCommission | numeric | Require | ค่า ri_commission จากการประมวลผลของ Treaty (ขารับ) | 1,000 | tx_rig_est_hd | ri_commission |  |  |
| sumClaim | numeric | Require | ค่า claim_recovery จากการประมวลผลของ Treaty (ขารับ) | 0 | tx_rig_est_hd | claim_recovery |  |  |
| netAmount | numeric | Require | ยอดสุทธิ | 2,000 | tx_rig_est_hd | due_to |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313669195 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-06 Update MPS Header (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับ Update สถานะและ count จำนวนรายการที่ระบบ MPS เมื่อส่งข้อมูลลสำเร็จหรือไม่สำเร็จตามรอบประมวลผล
Repositories : msa-adwetl
Service path
PUT:
TYPE : <PUT>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Paameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| rig_est_hd_id | numeric | Require | PK tx_rig_est_hd | 1 |  |  |
| responseCode |  | Require | from WS-RIG-002-07 | 000 |  |  |
| closing_period | numeric | Require | tx_rig_est_hd | 202301 |  |  |

## Process
ดำเนินการ Update ข้อมูล ดังนี้
- ตรวจสอบข้อมูลซ้ำ (*31/03/26)กรณีพบข้อมูลที่มี tx_mps_rig_est_hd (closing_period,cf_reinsurer_id,cf_treaty_id,treaty_code) เดียวกันให้ update สถานะรายการก่อนหน้าของ tx_mps_rig_est_hd ดังนี้NameTypeUpdateValueusage_statusVarchartx_mps_rig_est_hd.usage_statusI
- กรณีพบข้อมูลที่มี tx_mps_rig_est_hd (closing_period,cf_reinsurer_id,cf_treaty_id,treaty_code) เดียวกันให้ update สถานะรายการก่อนหน้าของ tx_mps_rig_est_hd ดังนี้NameTypeUpdateValueusage_statusVarchartx_mps_rig_est_hd.usage_statusI
- กรณีส่งข้อมูลเข้าระบบ edw ครบแล้ว ประมวลผล success ทุกรายการ (*31/03/26) ตามรอบประมวลผลให้ update mps process ดังนี้กรณี responseCode = 000 (SUCCESS) ทุกรายการให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_rig_est_hd.closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric 72sum_amountnumericcount(rig_est_hd_id) ที่ success ตามรอบประมวลผล3updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL Return ข้อมูลสถานะรายการReturn ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]> กรณีพบ responseCode = 100 (Error) บางรายการให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_ri_est_hd .closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric32sum_amountnumeric03updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL Return ข้อมูลสถานะรายการให้ insert tx_ri_est_hd.mps_status = 100ให้ return exception log message size (255)กรณีมีการกดส่งข้อมูลมาใหม่ (ส่งซ้ำรายการเดิม) เมื่อตรวจสอบแล้วว่าส่งสำเร็จทั้งหมดทุกรายการให้กลับไป update ตามข้อ a. กรณี responseCode = 000 (SUCCESS)
- กรณี responseCode = 000 (SUCCESS) ทุกรายการให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_rig_est_hd.closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric 72sum_amountnumericcount(rig_est_hd_id) ที่ success ตามรอบประมวลผล3updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL Return ข้อมูลสถานะรายการReturn ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]>
- ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_rig_est_hd.closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric 72sum_amountnumericcount(rig_est_hd_id) ที่ success ตามรอบประมวลผล3updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL
- Return ข้อมูลสถานะรายการReturn ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]>
- Return ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)
- Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]>
- กรณีพบ responseCode = 100 (Error) บางรายการให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_ri_est_hd .closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric32sum_amountnumeric03updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL Return ข้อมูลสถานะรายการให้ insert tx_ri_est_hd.mps_status = 100ให้ return exception log message size (255)กรณีมีการกดส่งข้อมูลมาใหม่ (ส่งซ้ำรายการเดิม) เมื่อตรวจสอบแล้วว่าส่งสำเร็จทั้งหมดทุกรายการให้กลับไป update ตามข้อ a. กรณี responseCode = 000 (SUCCESS)
- ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_ri_est_hd .closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric32sum_amountnumeric03updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL
- Return ข้อมูลสถานะรายการให้ insert tx_ri_est_hd.mps_status = 100ให้ return exception log message size (255)
- ให้ insert tx_ri_est_hd.mps_status = 100
- ให้ return exception log message size (255)
- กรณีมีการกดส่งข้อมูลมาใหม่ (ส่งซ้ำรายการเดิม) เมื่อตรวจสอบแล้วว่าส่งสำเร็จทั้งหมดทุกรายการให้กลับไป update ตามข้อ a. กรณี responseCode = 000 (SUCCESS)

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000,100 |  | if SUCCESS = 000if ERROR = 100 |
| mps_status | numeric | Require | id สถานะรายการ | 7,100 |  | tx_ri_est_hd.mps_status |
| import_status_name | varchar |  | ชื่อสถานะรายการ | ยืนยันนำเข้าข้อมูลสำเร็จ |  |  |
| sum_amount | numeric | Require |  | 10 |  |  |
| updated_by | varchar | Require |  | RI |  |  |
| updated_date | date | Require | Timestamp ที่ update |  |  |  |
| remark | varchar |  | หมายเหตุ |  |  |  |
| coi_flag | boolean | Require | flag coi (รอบประมวลผล) |  |  |  |
| usage_status | varchar | Require | A = ActiveI = Inactive |  |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1313669198 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-06 Update MPS Header (Estimate) > 1. Create tx_mps_base_header (success) =====
- ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_rig_est_hd.closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric 72sum_amountnumericcount(rig_est_hd_id) ที่ success ตามรอบประมวลผล3updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL
- Return ข้อมูลสถานะรายการReturn ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]>
- Return ms_import_status_id จาก tx_mps_base_header.ms_import_status_id ไป Insert ที่ tx_ri_est_hd.mps_status (7)
- Return mps_status_desc จาก ms_mps_import_status.import_status_name ไป Insert ที่ tx_ri_est_hd.import_status_name (ยืนยันนำเข้าข้อมูลสำเร็จ) โดย lookup ดังน msa-adwetl <![CDATA[select t1.ms_import_status_id, t2.import_status_name from tx_mps_base_header t1 left join ms_mps_import_status t2 on t1.ms_import_status_id = t2.mps_process_status_id;]]>


===== PAGE 1315537462 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-06 Update MPS Header (Estimate) > 2. Create tx_mps_base_header (error) =====
- ให้ดำเนินการ update ข้อมูลต่อไปนี้ที่ tx_mps_base_header where cf_file_name_id = 86 and tx_mps_base_header.period = tx_ri_est_hd .closing_period msa-adwetl No.NameTypeCondition1ms_import_status_idnumeric32sum_amountnumeric03updated_byvarcharuser login4updated_datedateTimestamp ที่ update5remarkvarcharNULL6coi_flagbooleanNULL
- Return ข้อมูลสถานะรายการให้ insert tx_ri_est_hd.mps_status = 100ให้ return exception log message size (255)
- ให้ insert tx_ri_est_hd.mps_status = 100
- ให้ return exception log message size (255)


===== PAGE 1331036346 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-06 Update MPS Header (Estimate) > 3. Update tx_mps_rig_est_hd =====
| Name | Type | Update | Value |
| usage_status | Varchar | tx_mps_rig_est_hd.usage_status | I |


===== PAGE 1313669326 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 01 API Estimate > WS-RIG-002-07 Insert การส่งข้อมูลเข้า EDW-iReport (Estimate) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับส่งข้อมูลประมวลผล Estimate เข้าระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <POST>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| period | numeric | Require | Period การปิดบัญชีtx_rig_est_hd .closing_period | 202301 |  | 202301 yyyyMM (ค.ศ.) |
| rig_est_hd_id | int8 | Require | ID รายการจากtx_rig_est_hd .rig_est_hd_id | 1 |  |  |

## Process
ดำเนินการ Insert ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล EST.ที่ หน้าจอ
- ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอ
- กรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป
- ประมวผลตาม queue ครบทุกรายการจึงทำตามขั้นตอนดังนี้
- สร้างรายการข้อมูล เพื่อบันทึกข้อมูลจาก Group RI บันทึก tx_mps_rig_est_hdNo.NameTypeDatasource TableInsertExample1rig_est_hd_idint8tx_rig_est_hd.rig_est_hd_idtx_mps_rig_est_hd.rig_est_hd_id12closing_periodnumerictx_rig_est_hd.closing_periodtx_mps_rig_est_hd.closing_period2023013cf_reinsurer_idint8tx_rig_est_hd.cf_reinsurer_idtx_mps_rig_est_hd.cf_reinsurer_id14cf_treaty_idint8tx_rig_est_hd.cf_treaty_idtx_mps_rig_est_hd.cf_treaty_id15treaty_codeVarchartx_rig_est_hd.treaty_codetx_mps_rig_est_hd.treaty_codeGIB_Ind_ORD_Med6statusVarchartx_rig_est_hd.statustx_mps_rig_est_hd.statusPROCESSING7edw_statusnumerictx_rig_est_hd.edw_statustx_mps_rig_est_hd.edw_status18edw_status_descvarchartx_rig_est_hd.edw_status_desctx_mps_rig_est_hd.edw_status_descรอส่งขออนุมัติเข้า EDW9ri_std_hd_idint8tx_rig_est_hd.ri_std_hd_idtx_mps_rig_est_hd.ri_std_hd_id110mps_statusnumerictx_rig_est_hd.mps_statustx_mps_rig_est_hd.mps_status111mps_status_descvarchartx_rig_est_hd.mps_status_desctx_mps_rig_est_hd.mps_status_descกำลังดำเนินการ12ri_std_hd_id_oicint8tx_rig_est_hd.ri_std_hd_id_oictx_mps_rig_est_hd.ri_std_hd_id_oic113ri_premiumnumerictx_rig_est_hd.ri_premiumtx_mps_rig_est_hd.ri_premium250,000.0014ri_commissionnumerictx_rig_est_hd.ri_commissiontx_mps_rig_est_hd.ri_commission250,000.0015claim_recoverynumerictx_rig_est_hd.claim_recoverytx_mps_rig_est_hd.claim_recovery250,000.0016due_tonumerictx_rig_est_hd.due_totx_mps_rig_est_hd.due_to250,000.0017remarkVarchartx_rig_est_hd.remarktx_mps_rig_est_hd.remark 18usage_statusVarchartx_rig_est_hd.usage_statustx_mps_rig_est_hd.usage_statusA = ActiveI = Inactive19ri_methodVarchartx_rig_est_hd.ri_methodtx_mps_rig_est_hd.ri_method 20sum_recordsnumerictx_rig_est_hd.sum_recordstx_mps_rig_est_hd.sum_records 21updated_byvarcharNULLtx_mps_rig_est_hd.updated_by 22updated_datetimestampNULLtx_mps_rig_est_hd.updated_date 23created_byvarchar'SYSTEMtx_mps_rig_est_hd.created_by 24created_datetimestampSYSTEM DATETIMEtx_mps_rig_est_hd.created_date
- สร้างรายการข้อมูล เพื่อบันทึกข้อมูลจาก Group RI บันทึก tx_mps_rig_est_bdrNo.NameTypeDatasource TableInsertExample1rig_est_bdr_idint8tx_rig_est_bdr.rig_est_bdr_idtx_mps_rig_est_bdr.rig_est_bdr_id12rig_est_hd_idint8tx_rig_est_bdr.rig_est_hd_idtx_mps_rig_est_hd.rig_est_hd_id13data_quartervarchartx_rig_est_bdr.data_quartertx_mps_rig_est_bdr.data_quarter2025Q44periodnumerictx_rig_est_bdr.periodtx_mps_rig_est_bdr.period2025125closing_periodnumerictx_rig_est_bdr.closing_periodtx_mps_rig_est_bdr.closing_period2025126policy_novarchartx_rig_est_bdr.policy_notx_mps_rig_est_bdr.policy_noGH16637reinsurer_novarchartx_rig_est_bdr.reinsurer_notx_mps_rig_est_bdr.reinsurer_no 8ri_com_datedatetx_rig_est_bdr.ri_com_datetx_mps_rig_est_bdr.ri_com_date2023-08-119effective_datedatetx_rig_est_bdr.effective_datetx_mps_rig_est_bdr.effective_date2023-08-1110mode_payVarchartx_rig_est_bdr.mode_paytx_mps_rig_est_bdr.mode_payMonthly11ri_prem_lifenumerictx_rig_est_bdr.ri_prem_lifetx_mps_rig_est_bdr.ri_prem_life250,000.0012ri_prem_accnumerictx_rig_est_bdr.ri_prem_acctx_mps_rig_est_bdr.ri_prem_acc250,000.0013ri_comm_lifenumerictx_rig_est_bdr.ri_comm_lifetx_mps_rig_est_bdr.ri_comm_life250,000.0014ri_comm_accnumerictx_rig_est_bdr.ri_comm_acctx_mps_rig_est_bdr.ri_comm_acc250,000.0015ri_comm_tpdnumerictx_rig_est_bdr.ri_comm_tpdtx_mps_rig_est_bdr.ri_comm_tpd250,000.0016ri_comm_ttdnumerictx_mps_rig_est_bdr.ri_comm_ttdtx_mps_rig_est_bdr.ri_comm_ttd250,000.0017ri_comm_medicalnumerictx_rig_est_bdr.ri_comm_medicaltx_mps_rig_est_bdr.ri_comm_medical250,000.0018ri_prem_1st_lifenumerictx_rig_est_bdr.ri_prem_1st_lifetx_mps_rig_est_bdr.ri_prem_1st_life250,000.0019ri_prem_1st_addnumerictx_rig_est_bdr.ri_prem_1st_addtx_mps_rig_est_bdr.ri_prem_1st_add250,000.0020ri_prem_1st_tpdnumerictx_rig_est_bdr.ri_prem_1st_tpdtx_mps_rig_est_bdr.ri_prem_1st_tpd250,000.0021ri_prem_1st_mednumerictx_rig_est_bdr.ri_prem_1st_medtx_mps_rig_est_bdr.ri_prem_1st_med250,000.0022ri_prem_1st_totnumerictx_rig_est_bdr.ri_prem_1st_tottx_mps_rig_est_bdr.ri_prem_1st_tot250,000.0023ri_prem_renew_lifenumerictx_rig_est_bdr.ri_prem_renew_lifetx_mps_rig_est_bdr.ri_prem_renew_life250,000.0024ri_prem_renew_addnumerictx_rig_est_bdr.ri_prem_renew_addtx_mps_rig_est_bdr.ri_prem_renew_add250,000.0025ri_prem_renew_tpdnumerictx_rig_est_bdr.ri_prem_renew_tpdtx_mps_rig_est_bdr.ri_prem_renew_tpd250,000.0026ri_prem_renew_mednumerictx_rig_est_bdr.ri_prem_renew_medtx_mps_rig_est_bdr.ri_prem_renew_med250,000.0027ri_prem_renew_totnumerictx_rig_est_bdr.ri_prem_renew_tottx_mps_rig_est_bdr.ri_prem_renew_tot250,000.0028event_datenumerictx_rig_est_bdr.event_datetx_mps_rig_est_bdr.event_date250,000.0029ri_claim_lifenumerictx_rig_est_bdr.ri_claim_lifetx_mps_rig_est_bdr.ri_claim_life250,000.0030ri_claim_addnumerictx_rig_est_bdr.ri_claim_addtx_mps_rig_est_bdr.ri_claim_add250,000.0031ri_claim_tpdnumerictx_rig_est_bdr.ri_claim_tpdtx_mps_rig_est_bdr.ri_claim_tpd250,000.0032ri_claim_mednumerictx_rig_est_bdr.ri_claim_medtx_mps_rig_est_bdr.ri_claim_med250,000.0033ri_claim_totnumerictx_rig_est_bdr.ri_claim_tottx_mps_rig_est_bdr.ri_claim_tot250,000.0034recov_claim_lifenumerictx_rig_est_bdr.recov_claim_lifetx_mps_rig_est_bdr.recov_claim_life250,000.0035recov_claim_accnumerictx_rig_est_bdr.recov_claim_acctx_mps_rig_est_bdr.recov_claim_acc250,000.0036policy_yearnumerictx_rig_est_bdr.policy_yeartx_mps_rig_est_bdr.policy_year337updated_byvarcharNULLtx_mps_rig_est_bdr.updated_by 38updated_datetimestampNULLtx_mps_rig_est_bdr.updated_date 39created_byvarchar'SYSTEMtx_mps_rig_est_bdr.created_by 40created_datetimestampSYSTEM DATETIMEtx_mps_rig_est_bdr.created_date

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1320517995 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual =====
(empty page)


===== PAGE 1320518005 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-01 Insert EDW Process (Actual) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับส่งข้อมูลประมวลผล Actual เข้าระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <POST>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| period | numeric | Require | ช่วงเดือน/ปีที่ค้นหา | 202301 |  | 202301 yyyyMM (ค.ศ.) |
| reinsurer | string | Require | ชื่อบริษัท | Thaire |  |  |
| treaty_code | string | Require | ชื่อสัญญา | TOA_Ind_ORD |  |  |

## Process
ดำเนินการ Insert ข้อมูลเข้า EDW ผ่าน Process โดยให้ trigger เมื่อกดปุ่ม ยืนยันข้อมูล ที่ หน้าจอ
- ดำเนินการสร้าง queue ในการส่งข้อมูล โดยตรวจสอบจากรายการที่กดยืนยันข้อมูลจากหน้าจอ
- กรณีเลือก ยืนยันข้อมูล มากกว่า 1 รายการให้ทำรายการแรกให้สำเร็จก่อน แล้วค่อยทำ queue ต่อไป ตามขั้นตอนดังนี้
- สร้าง transaction ที่ tx_ri_process_header (msa-adwetl) เพื่อบันทึกข้อมูล process ดังนี้ Create tx_ri_process_header No.NameTypeCondition1ri_process_hd_idnumericinsert running id2group_type_idnumeric23ri_process_status_idnumericinsert = 9 (กำลังดำเนินการ)4single_or_groupcharG5estimate_or_actualcharE6transaction_datetimestampTimestamp ที่เริ่มสร้างข้อมูล7update_bycharnull8update_datetimestampnull9create_bychartx_rig_act_hd.created_by10create_datetimestampTimestamp ที่เริ่มสร้างข้อมูล11system_by_datecharRIG
- Return ข้อมูลสถานะรายการReturn ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_act_hd.edw_status (9)Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_act_hd.edw_status_desc (กำลังดำเนินการ) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_act_hd.edw_status (9)
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_act_hd.edw_status_desc (กำลังดำเนินการ) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- สร้างข้อมูล Standard template (msa-adwetl) ดังนี้สร้าง transaction ที่ tx_ri_std_hd ดังนี้ Create tx_ri_std_hd tx_ri_std_hd เงื่อนไขการบันทึก No.NameTypeDatasource TableInsertExample1ri_std_hd_idnumeric Running id auto generate12ri_process_hd_idnumeric from tx_rig_process_hd.rig_process_hd_id13cf_file_name_idnumericmsa-adwetlfrom t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 2 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> 14ms_import_status_idnumeric 115periodchartx_rig_act_hdperiod2024016reinsurerchartx_rig_act_hdreinsurer_code 7treaty_codechartx_rig_act_hdtreaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_typechar EE9sum_recordsnumeric nullnull10imp_file_namechar from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> 11imp_file_availableboolean falsefalse12err_file_namechar nullnull13err_file_availableboolean falsefalse14no_data_flagboolean falsefalse15unuse_flagboolean falsefalse16remarkchar nullnull17transaction_datetimestamp start timestamp2024-01-01 00:00:00 +070018created_datetimestamp start timestamp2024-01-01 00:00:00 +070019created_bychartx_rig_act_hdcreated_bypongsathorn.pa20updated_datetimestamp finish timestamp2024-01-01 00:00:00 +070021updated_bychartx_rig_act_hdupdated_bypongsathorn.pa22ind_grpchar GI23ri_bdr_hd_idnumerictx_rig_act_hdri_act_hd_id124mps_flagboolean falsefalse25ms_ri_treaty_idnumericmsa-adwetlโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 126quarter_yearchartx_rig_act_hdSUBSTRING(period, 1, 4)202427quarter_periodchartx_rig_act_hdSUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4'Q128profit_flagboolean falsefalse29doc_nochar nullnull30update_rider_code_flagboolean falsefalse31system_bychar RIGIRI32facult_flagboolean falsetrue, false
- สร้าง transaction ที่ tx_ri_std_hd ดังนี้ Create tx_ri_std_hd tx_ri_std_hd เงื่อนไขการบันทึก No.NameTypeDatasource TableInsertExample1ri_std_hd_idnumeric Running id auto generate12ri_process_hd_idnumeric from tx_rig_process_hd.rig_process_hd_id13cf_file_name_idnumericmsa-adwetlfrom t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 2 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> 14ms_import_status_idnumeric 115periodchartx_rig_act_hdperiod2024016reinsurerchartx_rig_act_hdreinsurer_code 7treaty_codechartx_rig_act_hdtreaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_typechar EE9sum_recordsnumeric nullnull10imp_file_namechar from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> 11imp_file_availableboolean falsefalse12err_file_namechar nullnull13err_file_availableboolean falsefalse14no_data_flagboolean falsefalse15unuse_flagboolean falsefalse16remarkchar nullnull17transaction_datetimestamp start timestamp2024-01-01 00:00:00 +070018created_datetimestamp start timestamp2024-01-01 00:00:00 +070019created_bychartx_rig_act_hdcreated_bypongsathorn.pa20updated_datetimestamp finish timestamp2024-01-01 00:00:00 +070021updated_bychartx_rig_act_hdupdated_bypongsathorn.pa22ind_grpchar GI23ri_bdr_hd_idnumerictx_rig_act_hdri_act_hd_id124mps_flagboolean falsefalse25ms_ri_treaty_idnumericmsa-adwetlโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 126quarter_yearchartx_rig_act_hdSUBSTRING(period, 1, 4)202427quarter_periodchartx_rig_act_hdSUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4'Q128profit_flagboolean falsefalse29doc_nochar nullnull30update_rider_code_flagboolean falsefalse31system_bychar RIGIRI32facult_flagboolean falsetrue, false
- Return ข้อมูลอ้างอิงรายการReturn tx_ri_std_hd.ri_std_hd_id ไป insert ที่ tx_rig_act_hd.ri_std_hd_id
- Return tx_ri_std_hd.ri_std_hd_id ไป insert ที่ tx_rig_act_hd.ri_std_hd_id

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 9 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | กำลังดำเนินการ |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1320518007 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-01 Insert EDW Process (Actual) > 1. Create tx_ri_process_header (act) =====
| No. | Name | Type | Condition |
| 1 | ri_process_hd_id | numeric | insert running id |
| 2 | group_type_id | numeric | 2 |
| 3 | ri_process_status_id | numeric | insert = 9 (กำลังดำเนินการ) |
| 4 | single_or_group | char | G |
| 5 | estimate_or_actual | char | E |
| 6 | transaction_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |
| 7 | update_by | char | null |
| 8 | update_date | timestamp | null |
| 9 | create_by | char | tx_rig_act_hd.created_by |
| 10 | create_date | timestamp | Timestamp ที่เริ่มสร้างข้อมูล |
| 11 | system_by_date | char | RIG |


===== PAGE 1320518009 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-01 Insert EDW Process (Actual) > 2. Create tx_ri_std_hd (act) =====
|  | tx_ri_std_hd | เงื่อนไขการบันทึก |
| No. | Name | Type | Datasource Table | Insert | Example |
| 1 | ri_std_hd_id | numeric |  | Running id auto generate | 1 |
| 2 | ri_process_hd_id | numeric |  | from tx_rig_process_hd.rig_process_hd_id | 1 |
| 3 | cf_file_name_id | numeric | msa-adwetl | from t1.cf_file_name_idโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH base_data AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, -- Removed fac_priority CASE statement ROW_NUMBER() OVER ( PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id ) AS rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 2 AND t1.ms_ri_treaty_id IS NOT NULL AND ( t3.ri_treaty_code_1 = :treaty_code OR t3.ri_treaty_code_2 = :treaty_code ) ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM base_data WHERE rn = 1;]]> | 1 |
| 4 | ms_import_status_id | numeric |  | 1 | 1 |
| 5 | period | char | tx_rig_act_hd | period | 202401 |
| 6 | reinsurer | char | tx_rig_act_hd | reinsurer_code |  |
| 7 | treaty_code | char | tx_rig_act_hd | treaty_codeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 8 | ri_type | char |  | E | E |
| 9 | sum_records | numeric |  | null | null |
| 10 | imp_file_name | char |  | from t1.template_file_name and t1.file_typeโดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl Click here to expand... <![CDATA[WITH ranked_files AS ( SELECT t1.cf_template_file_id, t1.template_file_name, t1.file_type, t1.ms_ri_treaty_id, t3.treaty_code, t3.product_type, ROW_NUMBER() OVER (PARTITION BY t1.ms_ri_treaty_id ORDER BY t1.cf_template_file_id DESC) as rn FROM cf_ri_template_file t1 LEFT JOIN cf_ri_file_name t2 ON t1.cf_template_file_id = t2.cf_file_name_id LEFT JOIN ms_ri_treaty t3 ON t1.ms_ri_treaty_id = t3.ms_ri_treaty_id WHERE t1.import_export = 'E' AND t1.report_type = 'STD' AND t2.cf_file_group_id = 1 AND t1.ms_ri_treaty_id IS NOT NULL AND t3.ri_treaty_code_1 = :treaty_code or t3.ri_treaty_code_2 = :treaty_code ) SELECT cf_template_file_id, template_file_name, file_type, ms_ri_treaty_id, treaty_code, product_type FROM ranked_files WHERE rn = 1;]]> |  |
| 11 | imp_file_available | boolean |  | false | false |
| 12 | err_file_name | char |  | null | null |
| 13 | err_file_available | boolean |  | false | false |
| 14 | no_data_flag | boolean |  | false | false |
| 15 | unuse_flag | boolean |  | false | false |
| 16 | remark | char |  | null | null |
| 17 | transaction_date | timestamp |  | start timestamp | 2024-01-01 00:00:00 +0700 |
| 18 | created_date | timestamp |  | start timestamp | 2024-01-01 00:00:00 +0700 |
| 19 | created_by | char | tx_rig_act_hd | created_by | pongsathorn.pa |
| 20 | updated_date | timestamp |  | finish timestamp | 2024-01-01 00:00:00 +0700 |
| 21 | updated_by | char | tx_rig_act_hd | updated_by | pongsathorn.pa |
| 22 | ind_grp | char |  | G | I |
| 23 | ri_bdr_hd_id | numeric | tx_rig_act_hd | ri_act_hd_id | 1 |
| 24 | mps_flag | boolean |  | false | false |
| 25 | ms_ri_treaty_id | numeric | msa-adwetl | โดยนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ms_ri_treaty_id from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> | 1 |
| 26 | quarter_year | char | tx_rig_act_hd | SUBSTRING(period, 1, 4) | 2024 |
| 27 | quarter_period | char | tx_rig_act_hd | SUBSTRING(period, 5, 6) = 01กรณีเดือน 01,02,03 ให้ insert 'Q1'กรณีเดือน 04,05,06 ให้ insert 'Q2'กรณีเดือน 07,08,09 ให้ insert 'Q3'กรณีเดือน 10,11,12 ให้ insert 'Q4' | Q1 |
| 28 | profit_flag | boolean |  | false | false |
| 29 | doc_no | char |  | null | null |
| 30 | update_rider_code_flag | boolean |  | false | false |
| 31 | system_by | char |  | RIG | IRI |
| 32 | facult_flag | boolean |  | false | true, false |


===== PAGE 1320518054 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-02 Insert STD (Actual) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับส่งข้อมูลประมวลผล Actual เข้าระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <POST>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
ให้ส่งข้อมูลเป็น list  โดยดูตาม mapping ในหัวข้อ Process

## Process
เมื่อดำเนินการสร้างข้อมูล Process สำเร็จที่ (WS-RIG-002-01 Insert EDW Process (Actual)) ให้ดำเนินการ Insert ข้อมูล ดังนี้
- สร้างข้อมูล Standard template (msa-adwetl) ดังนี้สร้าง transaction ที่ tx_ri_std_all ดังนี้ Create tx_ri_std_all Objective: ดำเนินการสร้างรายการ ดังนี้สร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0 กรณี Field เหล่านี้ทั้งหมดเป็น 0 ไม่ต้องส่งข้อมูลไป tx_rig_act_bdr_new_renewTableFieldtx_rig_act_bdr_new_renewtot_re_nb_prem_lifetx_rig_act_bdr_new_renewtot_re_ren_prem_lifetx_rig_act_bdr_new_renewtot_re_nb_prem_add tx_rig_act_bdr_new_renewtot_re_ren_prem_addtx_rig_act_bdr_new_renewtot_com_lifetx_rig_act_bdr_new_renewtot_com_addtx_rig_act_bdr_new_renewtot_com_ttdtx_rig_act_bdr_new_renewtot_com_tpdtx_rig_act_bdr_new_renewtot_com_medtx_rig_act_bdr_new_renewtot_re_refund_prem_lifetx_rig_act_bdr_new_renewtot_re_refund_prem_addtx_rig_act_bdr_new_renewtot_re_refund_prem_ttdtx_rig_act_bdr_new_renewtot_re_refund_prem_tpdtx_rig_act_bdr_new_renewtot_com_refund_lifetx_rig_act_bdr_new_renewtot_com_refund_addtx_rig_act_bdr_new_renewtot_com_refund_ttdtx_rig_act_bdr_new_renewtot_com_refund_tpdtx_rig_act_bdr_new_renewtot_re_nb_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_addtx_rig_act_bdr_new_renewcomm_refund_life tx_rig_act_bdr_new_renewcomm_refund_add tx_rig_act_bdr_new_renewcomm_refund_tpd tx_rig_act_bdr_new_renewcomm_refund_ttd tx_rig_act_bdr_new_renewcomm_refund_med_acctx_rig_act_bdr_new_renewre_ex_refund_lifetx_rig_act_bdr_new_renewre_ex_refund_acc tx_rig_act_bdr_claimTableFieldtx_rig_act_bdr_claimsum_re_claim_lifetx_rig_act_bdr_claimsum_re_claim_tpdtx_rig_act_bdr_claimsum_re_claim_acctx_rig_act_bdr_claimsum_re_claim_ipdtx_rig_act_bdr_claimsum_re_claim_opdtx_rig_act_bdr_claimsum_re_claim_dentaltx_rig_act_bdr_claimsum_re_claim_med_acctx_rig_act_bdr_claimsum_re_claim_dismem Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_option 15sale_channel_codechartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_channel_code 16commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_add + tot_re_ren_prem_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renewtot_com_add 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renewtot_com_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renewtot_com_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claimsum_re_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claimsum_re_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_act_bdr_claimsum_re_claim_acc 43claim_exp_investigationnumerictx_rig_act_bdr_claimtot_re_inv 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_add 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_ttd 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_tpd 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renewtot_com_refund_lifeif reinsurer_code = 'Gibraltar' then tot_com_refund_life*-1 else tot_com_refund_life 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renewtot_com_refund_addif reinsurer_code = 'Gibraltar' then tot_com_refund_add*-1 else tot_com_refund_add 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renewtot_com_refund_ttdif reinsurer_code = 'Gibraltar' then tot_com_refund_ttd*-1 else tot_com_refund_ttd 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renewtot_com_refund_tpdif reinsurer_code = 'Gibraltar' then tot_com_refund_tpd*-1 else tot_com_refund_tpd 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renewtot_re_sr_life 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renewtot_re_sr_add 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 114statuschartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumerictx_rig_act_bdr_claimtot_re_inv 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_act_bdr_claimsum(sum_re_claim_ipd,sum_re_claim_opd,sum_re_claim_dental,sum_re_claim_med_acc) 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric tot_ori_sa_life 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 135ri_initial_sa_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 136ri_initial_sa_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 156total_ri_premiumnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 157total_ri_commnumerictx_rig_act_bdr_new_renewtot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med 158ri_claim_exgratianumeric 0 159total_prem_refundnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med 160total_comm_refundnumerictx_rig_act_bdr_new_renewtx_ri_std_alltot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_medcomm_refund_life + comm_refund_add + comm_refund_tpd + comm_refund_ttd + comm_refund_med_acc 161ri_previous_sanumeric 0 162ri_sum_assured_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 163ri_sum_assured_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 164ri_sum_assured_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumerictx_rig_act_bdr_new_renewtot_com_med 179premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 183paytodatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med + tot_re_rev_prem_med 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumerictx_rig_act_bdr_claimsum_re_claim_med_acc 231claim_ipdnumerictx_rig_act_bdr_claimsum_re_claim_ipd 232claim_opdnumerictx_rig_act_bdr_claimsum_re_claim_opd 233claim_dentalnumerictx_rig_act_bdr_claimsum_re_claim_dental 234claim_return_premnumeric 0 235revival_premium_lifenumerictx_rig_act_bdr_new_renewtot_re_rev_prem_life 236revival_premium_addnumerictx_rig_act_bdr_new_renewtot_re_rev_prem_add 237claim_dismembermentnumerictx_rig_act_bdr_claimsum_re_claim_dismem 238experience_refund_lifenumerictx_rig_act_bdr_new_renewre_ex_refund_life 239experience_refund_addnumerictx_rig_act_bdr_new_renewre_ex_refund_acc 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterperiodpolicy_period TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumerictx_rig_act_bdr_claimsum_re_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumerictx_rig_act_bdr_new_renewtot_com_refund_medif reinsurer_code = 'Gibraltar' then tot_com_refund_med*-1 else tot_com_refund_med 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hdexpire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026) กรณีพบข้อมูล Profit Commision ให้ตรวจสอบจากเงื่อนไขต่อไปนี้เพื่อสร้างรายการ pc_allocation โดยใช้ข้อมูลจาก tx_rig_allocation_profit group by policy_no และสร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_idtx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_yeartx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_codesum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- สร้าง transaction ที่ tx_ri_std_all ดังนี้ Create tx_ri_std_all Objective: ดำเนินการสร้างรายการ ดังนี้สร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0 กรณี Field เหล่านี้ทั้งหมดเป็น 0 ไม่ต้องส่งข้อมูลไป tx_rig_act_bdr_new_renewTableFieldtx_rig_act_bdr_new_renewtot_re_nb_prem_lifetx_rig_act_bdr_new_renewtot_re_ren_prem_lifetx_rig_act_bdr_new_renewtot_re_nb_prem_add tx_rig_act_bdr_new_renewtot_re_ren_prem_addtx_rig_act_bdr_new_renewtot_com_lifetx_rig_act_bdr_new_renewtot_com_addtx_rig_act_bdr_new_renewtot_com_ttdtx_rig_act_bdr_new_renewtot_com_tpdtx_rig_act_bdr_new_renewtot_com_medtx_rig_act_bdr_new_renewtot_re_refund_prem_lifetx_rig_act_bdr_new_renewtot_re_refund_prem_addtx_rig_act_bdr_new_renewtot_re_refund_prem_ttdtx_rig_act_bdr_new_renewtot_re_refund_prem_tpdtx_rig_act_bdr_new_renewtot_com_refund_lifetx_rig_act_bdr_new_renewtot_com_refund_addtx_rig_act_bdr_new_renewtot_com_refund_ttdtx_rig_act_bdr_new_renewtot_com_refund_tpdtx_rig_act_bdr_new_renewtot_re_nb_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_addtx_rig_act_bdr_new_renewcomm_refund_life tx_rig_act_bdr_new_renewcomm_refund_add tx_rig_act_bdr_new_renewcomm_refund_tpd tx_rig_act_bdr_new_renewcomm_refund_ttd tx_rig_act_bdr_new_renewcomm_refund_med_acctx_rig_act_bdr_new_renewre_ex_refund_lifetx_rig_act_bdr_new_renewre_ex_refund_acc tx_rig_act_bdr_claimTableFieldtx_rig_act_bdr_claimsum_re_claim_lifetx_rig_act_bdr_claimsum_re_claim_tpdtx_rig_act_bdr_claimsum_re_claim_acctx_rig_act_bdr_claimsum_re_claim_ipdtx_rig_act_bdr_claimsum_re_claim_opdtx_rig_act_bdr_claimsum_re_claim_dentaltx_rig_act_bdr_claimsum_re_claim_med_acctx_rig_act_bdr_claimsum_re_claim_dismem Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_option 15sale_channel_codechartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_channel_code 16commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_add + tot_re_ren_prem_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renewtot_com_add 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renewtot_com_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renewtot_com_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claimsum_re_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claimsum_re_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_act_bdr_claimsum_re_claim_acc 43claim_exp_investigationnumerictx_rig_act_bdr_claimtot_re_inv 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_add 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_ttd 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_tpd 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renewtot_com_refund_lifeif reinsurer_code = 'Gibraltar' then tot_com_refund_life*-1 else tot_com_refund_life 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renewtot_com_refund_addif reinsurer_code = 'Gibraltar' then tot_com_refund_add*-1 else tot_com_refund_add 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renewtot_com_refund_ttdif reinsurer_code = 'Gibraltar' then tot_com_refund_ttd*-1 else tot_com_refund_ttd 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renewtot_com_refund_tpdif reinsurer_code = 'Gibraltar' then tot_com_refund_tpd*-1 else tot_com_refund_tpd 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renewtot_re_sr_life 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renewtot_re_sr_add 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 114statuschartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumerictx_rig_act_bdr_claimtot_re_inv 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_act_bdr_claimsum(sum_re_claim_ipd,sum_re_claim_opd,sum_re_claim_dental,sum_re_claim_med_acc) 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric tot_ori_sa_life 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 135ri_initial_sa_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 136ri_initial_sa_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 156total_ri_premiumnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 157total_ri_commnumerictx_rig_act_bdr_new_renewtot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med 158ri_claim_exgratianumeric 0 159total_prem_refundnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med 160total_comm_refundnumerictx_rig_act_bdr_new_renewtx_ri_std_alltot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_medcomm_refund_life + comm_refund_add + comm_refund_tpd + comm_refund_ttd + comm_refund_med_acc 161ri_previous_sanumeric 0 162ri_sum_assured_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 163ri_sum_assured_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 164ri_sum_assured_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumerictx_rig_act_bdr_new_renewtot_com_med 179premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 183paytodatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med + tot_re_rev_prem_med 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumerictx_rig_act_bdr_claimsum_re_claim_med_acc 231claim_ipdnumerictx_rig_act_bdr_claimsum_re_claim_ipd 232claim_opdnumerictx_rig_act_bdr_claimsum_re_claim_opd 233claim_dentalnumerictx_rig_act_bdr_claimsum_re_claim_dental 234claim_return_premnumeric 0 235revival_premium_lifenumerictx_rig_act_bdr_new_renewtot_re_rev_prem_life 236revival_premium_addnumerictx_rig_act_bdr_new_renewtot_re_rev_prem_add 237claim_dismembermentnumerictx_rig_act_bdr_claimsum_re_claim_dismem 238experience_refund_lifenumerictx_rig_act_bdr_new_renewre_ex_refund_life 239experience_refund_addnumerictx_rig_act_bdr_new_renewre_ex_refund_acc 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterperiodpolicy_period TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumerictx_rig_act_bdr_claimsum_re_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumerictx_rig_act_bdr_new_renewtot_com_refund_medif reinsurer_code = 'Gibraltar' then tot_com_refund_med*-1 else tot_com_refund_med 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hdexpire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026) กรณีพบข้อมูล Profit Commision ให้ตรวจสอบจากเงื่อนไขต่อไปนี้เพื่อสร้างรายการ pc_allocation โดยใช้ข้อมูลจาก tx_rig_allocation_profit group by policy_no และสร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_idtx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_yeartx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_codesum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- สร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0 กรณี Field เหล่านี้ทั้งหมดเป็น 0 ไม่ต้องส่งข้อมูลไป tx_rig_act_bdr_new_renewTableFieldtx_rig_act_bdr_new_renewtot_re_nb_prem_lifetx_rig_act_bdr_new_renewtot_re_ren_prem_lifetx_rig_act_bdr_new_renewtot_re_nb_prem_add tx_rig_act_bdr_new_renewtot_re_ren_prem_addtx_rig_act_bdr_new_renewtot_com_lifetx_rig_act_bdr_new_renewtot_com_addtx_rig_act_bdr_new_renewtot_com_ttdtx_rig_act_bdr_new_renewtot_com_tpdtx_rig_act_bdr_new_renewtot_com_medtx_rig_act_bdr_new_renewtot_re_refund_prem_lifetx_rig_act_bdr_new_renewtot_re_refund_prem_addtx_rig_act_bdr_new_renewtot_re_refund_prem_ttdtx_rig_act_bdr_new_renewtot_re_refund_prem_tpdtx_rig_act_bdr_new_renewtot_com_refund_lifetx_rig_act_bdr_new_renewtot_com_refund_addtx_rig_act_bdr_new_renewtot_com_refund_ttdtx_rig_act_bdr_new_renewtot_com_refund_tpdtx_rig_act_bdr_new_renewtot_re_nb_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_addtx_rig_act_bdr_new_renewcomm_refund_life tx_rig_act_bdr_new_renewcomm_refund_add tx_rig_act_bdr_new_renewcomm_refund_tpd tx_rig_act_bdr_new_renewcomm_refund_ttd tx_rig_act_bdr_new_renewcomm_refund_med_acctx_rig_act_bdr_new_renewre_ex_refund_lifetx_rig_act_bdr_new_renewre_ex_refund_acc tx_rig_act_bdr_claimTableFieldtx_rig_act_bdr_claimsum_re_claim_lifetx_rig_act_bdr_claimsum_re_claim_tpdtx_rig_act_bdr_claimsum_re_claim_acctx_rig_act_bdr_claimsum_re_claim_ipdtx_rig_act_bdr_claimsum_re_claim_opdtx_rig_act_bdr_claimsum_re_claim_dentaltx_rig_act_bdr_claimsum_re_claim_med_acctx_rig_act_bdr_claimsum_re_claim_dismem Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_option 15sale_channel_codechartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_channel_code 16commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_add + tot_re_ren_prem_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renewtot_com_add 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renewtot_com_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renewtot_com_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claimsum_re_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claimsum_re_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_act_bdr_claimsum_re_claim_acc 43claim_exp_investigationnumerictx_rig_act_bdr_claimtot_re_inv 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_add 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_ttd 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_tpd 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renewtot_com_refund_lifeif reinsurer_code = 'Gibraltar' then tot_com_refund_life*-1 else tot_com_refund_life 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renewtot_com_refund_addif reinsurer_code = 'Gibraltar' then tot_com_refund_add*-1 else tot_com_refund_add 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renewtot_com_refund_ttdif reinsurer_code = 'Gibraltar' then tot_com_refund_ttd*-1 else tot_com_refund_ttd 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renewtot_com_refund_tpdif reinsurer_code = 'Gibraltar' then tot_com_refund_tpd*-1 else tot_com_refund_tpd 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renewtot_re_sr_life 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renewtot_re_sr_add 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 114statuschartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumerictx_rig_act_bdr_claimtot_re_inv 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_act_bdr_claimsum(sum_re_claim_ipd,sum_re_claim_opd,sum_re_claim_dental,sum_re_claim_med_acc) 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric tot_ori_sa_life 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 135ri_initial_sa_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 136ri_initial_sa_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 156total_ri_premiumnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 157total_ri_commnumerictx_rig_act_bdr_new_renewtot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med 158ri_claim_exgratianumeric 0 159total_prem_refundnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med 160total_comm_refundnumerictx_rig_act_bdr_new_renewtx_ri_std_alltot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_medcomm_refund_life + comm_refund_add + comm_refund_tpd + comm_refund_ttd + comm_refund_med_acc 161ri_previous_sanumeric 0 162ri_sum_assured_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 163ri_sum_assured_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 164ri_sum_assured_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumerictx_rig_act_bdr_new_renewtot_com_med 179premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 183paytodatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med + tot_re_rev_prem_med 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumerictx_rig_act_bdr_claimsum_re_claim_med_acc 231claim_ipdnumerictx_rig_act_bdr_claimsum_re_claim_ipd 232claim_opdnumerictx_rig_act_bdr_claimsum_re_claim_opd 233claim_dentalnumerictx_rig_act_bdr_claimsum_re_claim_dental 234claim_return_premnumeric 0 235revival_premium_lifenumerictx_rig_act_bdr_new_renewtot_re_rev_prem_life 236revival_premium_addnumerictx_rig_act_bdr_new_renewtot_re_rev_prem_add 237claim_dismembermentnumerictx_rig_act_bdr_claimsum_re_claim_dismem 238experience_refund_lifenumerictx_rig_act_bdr_new_renewre_ex_refund_life 239experience_refund_addnumerictx_rig_act_bdr_new_renewre_ex_refund_acc 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterperiodpolicy_period TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumerictx_rig_act_bdr_claimsum_re_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumerictx_rig_act_bdr_new_renewtot_com_refund_medif reinsurer_code = 'Gibraltar' then tot_com_refund_med*-1 else tot_com_refund_med 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hdexpire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- กรณีพบข้อมูล Profit Commision ให้ตรวจสอบจากเงื่อนไขต่อไปนี้เพื่อสร้างรายการ pc_allocation โดยใช้ข้อมูลจาก tx_rig_allocation_profit group by policy_no และสร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_idtx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_yeartx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_codesum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_id
- tx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_year
- tx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_code
- sum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- Return ผลการส่งข้อมูลกลับไปที่ต้นทางกรณีส่งข้อมูลสำเร็จ (SUCCESS) = 000กรณีพบข้อผิดพลาดในการส่งข้อมูล (ERROR) = 100 และไม่ต้องทำ process ถัดไป (WS-RIG-002-03 Update EDW Status (Actual))
- กรณีส่งข้อมูลสำเร็จ (SUCCESS) = 000
- กรณีพบข้อผิดพลาดในการส่งข้อมูล (ERROR) = 100 และไม่ต้องทำ process ถัดไป (WS-RIG-002-03 Update EDW Status (Actual))

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการนำเข้าข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1320518056 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-02 Insert STD (Actual) > 1. Create tx_ri_std_all (act) =====
Objective: ดำเนินการสร้างรายการ ดังนี้
- สร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0 กรณี Field เหล่านี้ทั้งหมดเป็น 0 ไม่ต้องส่งข้อมูลไป tx_rig_act_bdr_new_renewTableFieldtx_rig_act_bdr_new_renewtot_re_nb_prem_lifetx_rig_act_bdr_new_renewtot_re_ren_prem_lifetx_rig_act_bdr_new_renewtot_re_nb_prem_add tx_rig_act_bdr_new_renewtot_re_ren_prem_addtx_rig_act_bdr_new_renewtot_com_lifetx_rig_act_bdr_new_renewtot_com_addtx_rig_act_bdr_new_renewtot_com_ttdtx_rig_act_bdr_new_renewtot_com_tpdtx_rig_act_bdr_new_renewtot_com_medtx_rig_act_bdr_new_renewtot_re_refund_prem_lifetx_rig_act_bdr_new_renewtot_re_refund_prem_addtx_rig_act_bdr_new_renewtot_re_refund_prem_ttdtx_rig_act_bdr_new_renewtot_re_refund_prem_tpdtx_rig_act_bdr_new_renewtot_com_refund_lifetx_rig_act_bdr_new_renewtot_com_refund_addtx_rig_act_bdr_new_renewtot_com_refund_ttdtx_rig_act_bdr_new_renewtot_com_refund_tpdtx_rig_act_bdr_new_renewtot_re_nb_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_life tx_rig_act_bdr_new_renewtot_re_rev_prem_addtx_rig_act_bdr_new_renewcomm_refund_life tx_rig_act_bdr_new_renewcomm_refund_add tx_rig_act_bdr_new_renewcomm_refund_tpd tx_rig_act_bdr_new_renewcomm_refund_ttd tx_rig_act_bdr_new_renewcomm_refund_med_acctx_rig_act_bdr_new_renewre_ex_refund_lifetx_rig_act_bdr_new_renewre_ex_refund_acc tx_rig_act_bdr_claimTableFieldtx_rig_act_bdr_claimsum_re_claim_lifetx_rig_act_bdr_claimsum_re_claim_tpdtx_rig_act_bdr_claimsum_re_claim_acctx_rig_act_bdr_claimsum_re_claim_ipdtx_rig_act_bdr_claimsum_re_claim_opdtx_rig_act_bdr_claimsum_re_claim_dentaltx_rig_act_bdr_claimsum_re_claim_med_acctx_rig_act_bdr_claimsum_re_claim_dismem Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_option 15sale_channel_codechartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_channel_code 16commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_add + tot_re_ren_prem_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renewtot_com_add 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renewtot_com_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renewtot_com_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claimsum_re_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claimsum_re_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_act_bdr_claimsum_re_claim_acc 43claim_exp_investigationnumerictx_rig_act_bdr_claimtot_re_inv 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_add 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_ttd 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_tpd 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renewtot_com_refund_lifeif reinsurer_code = 'Gibraltar' then tot_com_refund_life*-1 else tot_com_refund_life 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renewtot_com_refund_addif reinsurer_code = 'Gibraltar' then tot_com_refund_add*-1 else tot_com_refund_add 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renewtot_com_refund_ttdif reinsurer_code = 'Gibraltar' then tot_com_refund_ttd*-1 else tot_com_refund_ttd 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renewtot_com_refund_tpdif reinsurer_code = 'Gibraltar' then tot_com_refund_tpd*-1 else tot_com_refund_tpd 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renewtot_re_sr_life 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renewtot_re_sr_add 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renewtot_ori_sa_life 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_ren_prem_life 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 114statuschartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumerictx_rig_act_bdr_claimtot_re_inv 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_act_bdr_claimsum(sum_re_claim_ipd,sum_re_claim_opd,sum_re_claim_dental,sum_re_claim_med_acc) 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric tot_ori_sa_life 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 135ri_initial_sa_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 136ri_initial_sa_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_act_bdr_claim_memmax (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id 156total_ri_premiumnumerictx_rig_act_bdr_new_renewtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 157total_ri_commnumerictx_rig_act_bdr_new_renewtot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med 158ri_claim_exgratianumeric 0 159total_prem_refundnumerictx_rig_act_bdr_new_renewtot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med 160total_comm_refundnumerictx_rig_act_bdr_new_renewtx_ri_std_alltot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_medcomm_refund_life + comm_refund_add + comm_refund_tpd + comm_refund_ttd + comm_refund_med_acc 161ri_previous_sanumeric 0 162ri_sum_assured_addnumerictx_rig_act_bdr_new_renewtot_ori_sa_add 163ri_sum_assured_tpdnumerictx_rig_act_bdr_new_renewtot_ori_sa_tpd 164ri_sum_assured_ttdnumerictx_rig_act_bdr_new_renewtot_ori_sa_ttd 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altersale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumerictx_rig_act_bdr_new_renewtot_com_med 179premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_from 183paytodatetx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_altereffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumerictx_rig_act_bdr_new_renewtot_ori_nb_prem_med + tot_ori_ren_prem_med + tot_re_rev_prem_med 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumerictx_rig_act_bdr_claimsum_re_claim_med_acc 231claim_ipdnumerictx_rig_act_bdr_claimsum_re_claim_ipd 232claim_opdnumerictx_rig_act_bdr_claimsum_re_claim_opd 233claim_dentalnumerictx_rig_act_bdr_claimsum_re_claim_dental 234claim_return_premnumeric 0 235revival_premium_lifenumerictx_rig_act_bdr_new_renewtot_re_rev_prem_life 236revival_premium_addnumerictx_rig_act_bdr_new_renewtot_re_rev_prem_add 237claim_dismembermentnumerictx_rig_act_bdr_claimsum_re_claim_dismem 238experience_refund_lifenumerictx_rig_act_bdr_new_renewre_ex_refund_life 239experience_refund_addnumerictx_rig_act_bdr_new_renewre_ex_refund_acc 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alterperiodpolicy_period TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrtot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumerictx_rig_act_bdr_claimsum_re_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumerictx_rig_act_bdr_new_renewtot_com_refund_medif reinsurer_code = 'Gibraltar' then tot_com_refund_med*-1 else tot_com_refund_med 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hdexpire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- กรณีพบข้อมูล Profit Commision ให้ตรวจสอบจากเงื่อนไขต่อไปนี้เพื่อสร้างรายการ pc_allocation โดยใช้ข้อมูลจาก tx_rig_allocation_profit group by policy_no และสร้างรายการที่ tx_ri_std_all โดย group by period,reinsurer,treaty_code,ri_method,policy_number,policy_year,payfrom,payto และ default datatype numeric กรณีไม่มีข้อมูลให้ = 0tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_idtx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_yeartx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_codesum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_id
- tx_rig_act_hd.year_year = tx_rig_profit_dt.quarter_year
- tx_rig_act_hd.treaty_code = tx_rig_profit_dt.treaty_code
- sum(tx_rig_allocation_profit.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4


===== PAGE 1320518070 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-02 Insert STD (Actual) > 1. Create tx_ri_std_all (act) > 1. STD output (act) =====
|  | tx_ri_std_all | เงื่อนไขการบันทึก |
| No. | Name | Type | Datasource Table | Insertกรณีไม่พบข้อมูลให้ลงค่าเป็น null | Example |
| 1 | ri_std_all_id | numeric |  | Auto generate |  |
| 2 | ri_std_hd_id | numeric | tx_rig_act_hd | ri_std_hd_id |  |
| 3 | period | char | tx_rig_act_hd | period |  |
| 4 | row_no | numeric |  | Null |  |
| 5 | reinsurer | char | cf_reinsurer | reinsurer_code |  |
| 6 | treaty_code | char | tx_rig_act_hd | treaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 7 | ri_mode_of_payment | char | tx_rig_act_hd | ri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 8 | ri_method | char | tx_rig_act_hd | ri_method |  |
| 9 | cpa_rider_flag | char | tx_rig_act_hd | cpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 10 | policy_number | char | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_no |  |
| 11 | policy_year | numeric | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year |  |
| 12 | code_plan | char |  | Null |  |
| 13 | base_or_rider | char |  | Null |  |
| 14 | sale_channel | char | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | sale_option |  |
| 15 | sale_channel_code | char | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | sale_channel_code |  |
| 16 | commencement_date | date | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_from |  |
| 17 | ri_commencement_date | date | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | ri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date |  |
| 18 | premium_life | numeric | tx_rig_act_bdr_new_renew | tot_re_nb_prem_life + tot_re_ren_prem_life |  |
| 19 | premium_extra_life | numeric |  | 0 |  |
| 20 | premium_rider | numeric |  | 0 |  |
| 21 | premium_extra_rider | numeric |  | 0 |  |
| 22 | premium_add | numeric | tx_rig_act_bdr_new_renew | tot_re_nb_prem_add + tot_re_ren_prem_add |  |
| 23 | premium_add_extra | numeric |  | 0 |  |
| 24 | premium_ttd | numeric |  | 0 |  |
| 25 | premium_extra_ttd | numeric |  | 0 |  |
| 26 | premium_tpd | numeric |  | 0 |  |
| 27 | premium_extra_tpd | numeric |  | 0 |  |
| 28 | comm_life | numeric | tx_rig_act_bdr_new_renew | tot_com_life |  |
| 29 | comm_extra_life | numeric |  | 0 |  |
| 30 | comm_rider | numeric |  | 0 |  |
| 31 | comm_extra_rider | numeric |  | 0 |  |
| 32 | comm_add | numeric | tx_rig_act_bdr_new_renew | tot_com_add |  |
| 33 | comm_add_extra | numeric |  | 0 |  |
| 34 | comm_ttd | numeric | tx_rig_act_bdr_new_renew | tot_com_ttd |  |
| 35 | comm_extra_ttd | numeric |  | 0 |  |
| 36 | comm_tpd | numeric | tx_rig_act_bdr_new_renew | tot_com_tpd |  |
| 37 | comm_extra_tpd | numeric |  | 0 |  |
| 38 | claim_life | numeric | tx_rig_act_bdr_claim | sum_re_claim_life |  |
| 39 | claim_rider | numeric |  | 0 |  |
| 40 | claim_tpd | numeric | tx_rig_act_bdr_claim | sum_re_claim_tpd |  |
| 41 | claim_ttd | numeric |  | 0 |  |
| 42 | claim_add | numeric | tx_rig_act_bdr_claim | sum_re_claim_acc |  |
| 43 | claim_exp_investigation | numeric | tx_rig_act_bdr_claim | tot_re_inv |  |
| 44 | claim_exp_legal_fee | numeric |  | 0 |  |
| 45 | claim_exp_ex_gratia | numeric |  | 0 |  |
| 46 | prem_refund_life | numeric | tx_rig_act_bdr_new_renew | tot_re_refund_prem_life |  |
| 47 | prem_refund_extra_life | numeric |  | 0 |  |
| 48 | prem_refund_rider | numeric |  | 0 |  |
| 49 | prem_refund_extra_rider | numeric |  | 0 |  |
| 50 | prem_refund_add | numeric | tx_rig_act_bdr_new_renew | tot_re_refund_prem_add |  |
| 51 | prem_refund_add_extra | numeric |  | 0 |  |
| 52 | prem_refund_ttd | numeric | tx_rig_act_bdr_new_renew | tot_re_refund_prem_ttd |  |
| 53 | prem_refund_extra_ttd | numeric |  | 0 |  |
| 54 | prem_refund_tpd | numeric | tx_rig_act_bdr_new_renew | tot_re_refund_prem_tpd |  |
| 55 | prem_refund_extra_tpd | numeric |  | 0 |  |
| 56 | comm_refund_life | numeric | tx_rig_act_bdr_new_renew | tot_com_refund_lifeif reinsurer_code = 'Gibraltar' then tot_com_refund_life*-1 else tot_com_refund_life |  |
| 57 | comm_refund_extra_life | numeric |  | 0 |  |
| 58 | comm_refund_rider | numeric |  | 0 |  |
| 59 | comm_refund_extra_rider | numeric |  | 0 |  |
| 60 | comm_refund_add | numeric | tx_rig_act_bdr_new_renew | tot_com_refund_addif reinsurer_code = 'Gibraltar' then tot_com_refund_add*-1 else tot_com_refund_add |  |
| 61 | comm_refund_add_extra | numeric |  | 0 |  |
| 62 | comm_refund_ttd | numeric | tx_rig_act_bdr_new_renew | tot_com_refund_ttdif reinsurer_code = 'Gibraltar' then tot_com_refund_ttd*-1 else tot_com_refund_ttd |  |
| 63 | comm_refund_extra_ttd | numeric |  | 0 |  |
| 64 | comm_refund_tpd | numeric | tx_rig_act_bdr_new_renew | tot_com_refund_tpdif reinsurer_code = 'Gibraltar' then tot_com_refund_tpd*-1 else tot_com_refund_tpd |  |
| 65 | comm_refund_extra_tpd | numeric |  | 0 |  |
| 66 | ri_sum_assured_life | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_life |  |
| 67 | ri_previous_nar_life | numeric |  | 0 |  |
| 68 | ri_current_nar_life | numeric |  | 0 |  |
| 69 | total_nar_life | numeric |  | 0 |  |
| 70 | total_nar_rider | numeric |  | 0 |  |
| 71 | total_nar_add | numeric |  | 0 |  |
| 72 | total_nar_ttd | numeric |  | 0 |  |
| 73 | total_nar_tpd | numeric |  | 0 |  |
| 74 | total_sr_life | numeric | tx_rig_act_bdr_new_renew | tot_re_sr_life |  |
| 75 | total_sr_rider | numeric |  | 0 |  |
| 76 | total_sr_add | numeric | tx_rig_act_bdr_new_renew | tot_re_sr_add |  |
| 77 | total_sr_ttd | numeric |  | 0 |  |
| 78 | total_sr_tpd | numeric |  | 0 |  |
| 79 | ri_claim_status | char |  | Null |  |
| 80 | claim_approve_date | timestamp |  | Null |  |
| 81 | err_message | char |  | Null |  |
| 82 | transaction_date | timestamp |  | now() |  |
| 83 | created_date | timestamp |  | now() |  |
| 84 | created_by | char |  | RIG |  |
| 85 | updated_date | timestamp |  | now() |  |
| 86 | updated_by | char |  | RIG |  |
| 87 | facult_flag | boolean |  | Null |  |
| 88 | id_no | char |  | Null |  |
| 89 | std_substd | char |  | Null |  |
| 90 | birth_date | date |  | Null |  |
| 91 | con_age | numeric |  | Null |  |
| 92 | att_age | numeric |  | Null |  |
| 93 | gender | char |  | Null |  |
| 94 | cov_duration | char |  | Null |  |
| 95 | ex_prem_rate_life | numeric |  | 0 |  |
| 96 | ex_prem_rate_rider | numeric |  | 0 |  |
| 97 | sum_assured_life | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_life |  |
| 98 | sum_assured_rider | numeric |  | 0 |  |
| 99 | ri_previous_nar_rider | numeric |  | 0 |  |
| 100 | ri_sum_assured_rider | numeric |  | 0 |  |
| 101 | prem_total | numeric | tx_rig_act_bdr_new_renew | tot_re_nb_prem_life + tot_re_ren_prem_life |  |
| 102 | std_fac | char |  | Null |  |
| 103 | plan_type | char |  | Null |  |
| 104 | tpd_type | char |  | Null |  |
| 105 | ttd_type | char |  | Null |  |
| 106 | add_type | char |  | Null |  |
| 107 | area | char |  | Null |  |
| 108 | country | char |  | Null |  |
| 109 | aec_country | char |  | Null |  |
| 110 | occ_class | char |  | Null |  |
| 111 | ri_ratio_life | numeric |  | Null |  |
| 112 | ri_ratio_rider | numeric |  | Null |  |
| 113 | effective_date | date | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_from |  |
| 114 | status | char | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_status |  |
| 115 | changes_date | date |  | Null |  |
| 116 | claim_name | char |  | Null |  |
| 117 | event_date | date | tx_rig_act_bdr_claim_mem | max (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id |  |
| 118 | claim_cause | char |  | Null |  |
| 119 | claim_benefit_life | numeric |  | 0 |  |
| 120 | claim_benefit_rider | numeric |  | 0 |  |
| 121 | claim_investigation | numeric | tx_rig_act_bdr_claim | tot_re_inv |  |
| 122 | claim_legal_fee | numeric |  | 0 |  |
| 123 | claim_medical | numeric | tx_rig_act_bdr_claim | sum(sum_re_claim_ipd,sum_re_claim_opd,sum_re_claim_dental,sum_re_claim_med_acc) |  |
| 124 | prem_refund_com | numeric |  | 0 |  |
| 125 | compromise_amt | numeric |  | 0 |  |
| 126 | paid_life | numeric |  | 0 |  |
| 127 | paid_rider | numeric |  | 0 |  |
| 128 | remark | char |  | Null |  |
| 129 | account_name | char | tx_rig_act_hd | select contract_name from cf_rig_treaty where treaty_code = :treaty_code |  |
| 130 | sale_channel_map | char |  | Null |  |
| 131 | alter_date | date |  | Null |  |
| 132 | ri_initial_sa_life | numeric |  | tot_ori_sa_life |  |
| 133 | ri_initial_sa_rider | numeric |  | 0 |  |
| 134 | ri_initial_sa_add | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_add |  |
| 135 | ri_initial_sa_tpd | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_tpd |  |
| 136 | ri_initial_sa_ttd | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_ttd |  |
| 137 | actual_sa_life | numeric |  | 0 |  |
| 138 | actual_sa_rider | numeric |  | 0 |  |
| 139 | actual_sa_add | numeric |  | 0 |  |
| 140 | actual_sa_tpd | numeric |  | 0 |  |
| 141 | actual_sa_ttd | numeric |  | 0 |  |
| 142 | previous_sa_life | numeric |  | 0 |  |
| 143 | previous_sa_rider | numeric |  | 0 |  |
| 144 | previous_sa_add | numeric |  | 0 |  |
| 145 | previous_sa_tpd | numeric |  | 0 |  |
| 146 | previous_sa_ttd | numeric |  | 0 |  |
| 147 | emr_life | numeric |  | 0 |  |
| 148 | emr_rider | numeric |  | 0 |  |
| 149 | emr_add | numeric |  | 0 |  |
| 150 | emr_tpd | numeric |  | 0 |  |
| 151 | emr_ttd | numeric |  | 0 |  |
| 152 | claim_no | char |  | Null |  |
| 153 | claim_type | char |  | Null |  |
| 154 | claim_register_date | date |  | Null |  |
| 155 | claim_event_date | date | tx_rig_act_bdr_claim_mem | max (event_date) group by tx_rig_act_bdr_claim.rig_act_bdr_claim_id |  |
| 156 | total_ri_premium | numeric | tx_rig_act_bdr_new_renew | tot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add |  |
| 157 | total_ri_comm | numeric | tx_rig_act_bdr_new_renew | tot_com_life + tot_com_add + tot_com_tpd + tot_com_ttd + tot_com_med |  |
| 158 | ri_claim_exgratia | numeric |  | 0 |  |
| 159 | total_prem_refund | numeric | tx_rig_act_bdr_new_renew | tot_re_refund_prem_life + tot_re_refund_prem_add + tot_re_refund_prem_tpd + tot_re_refund_prem_ttd + tot_re_refund_prem_med |  |
| 160 | total_comm_refund | numeric | tx_rig_act_bdr_new_renewtx_ri_std_all | tot_com_refund_life + tot_com_refund_add + tot_com_refund_tpd + tot_com_refund_ttd + tot_com_refund_medcomm_refund_life + comm_refund_add + comm_refund_tpd + comm_refund_ttd + comm_refund_med_acc |  |
| 161 | ri_previous_sa | numeric |  | 0 |  |
| 162 | ri_sum_assured_add | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_add |  |
| 163 | ri_sum_assured_tpd | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_tpd |  |
| 164 | ri_sum_assured_ttd | numeric | tx_rig_act_bdr_new_renew | tot_ori_sa_ttd |  |
| 165 | ri_previous_nar_add | numeric |  | 0 |  |
| 166 | ri_previous_nar_tpd | numeric |  | 0 |  |
| 167 | ri_previous_nar_ttd | numeric |  | 0 |  |
| 168 | ri_current_nar_rider | numeric |  | 0 |  |
| 169 | ri_current_nar_add | numeric |  | 0 |  |
| 170 | ri_current_nar_tpd | numeric |  | 0 |  |
| 171 | ri_current_nar_ttd | numeric |  | 0 |  |
| 172 | report_type | char |  | Null |  |
| 173 | partner_code | char |  | Null |  |
| 174 | claim_status | char |  | Null |  |
| 175 | comm_rate | numeric |  | 0 |  |
| 176 | sale_option | char | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' |  |
| 177 | premium_type | char |  | 'Normal' |  |
| 178 | comm_med | numeric | tx_rig_act_bdr_new_renew | tot_com_med |  |
| 179 | premium_med | numeric | tx_rig_act_bdr_new_renew | tot_ori_nb_prem_med + tot_ori_ren_prem_med |  |
| 180 | claim_recovery_date | date |  | Null |  |
| 181 | claim_recovery_add | numeric |  | Null |  |
| 182 | payfrom | date | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_from |  |
| 183 | payto | date | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_to |  |
| 184 | ri_initial_sa_murder | numeric |  | 0 |  |
| 185 | ri_initial_sa_motorcycle | numeric |  | 0 |  |
| 186 | ri_initial_sa_public | numeric |  | 0 |  |
| 187 | ri_initial_sa_holiday | numeric |  | 0 |  |
| 188 | actual_sa_murder | numeric |  | 0 |  |
| 189 | actual_sa_motorcycle | numeric |  | 0 |  |
| 190 | actual_sa_public | numeric |  | 0 |  |
| 191 | actual_sa_holiday | numeric |  | 0 |  |
| 192 | previous_sa_murder | numeric |  | 0 |  |
| 193 | previous_sa_motorcycle | numeric |  | 0 |  |
| 194 | previous_sa_public | numeric |  | 0 |  |
| 195 | previous_sa_holiday | numeric |  | 0 |  |
| 196 | ri_sum_assured_murder | numeric |  | 0 |  |
| 197 | ri_sum_assured_motorcycle | numeric |  | 0 |  |
| 198 | ri_sum_assured_public | numeric |  | 0 |  |
| 199 | ri_sum_assured_holiday | numeric |  | 0 |  |
| 200 | ri_previous_nar_murder | numeric |  | 0 |  |
| 201 | ri_previous_nar_motorcycle | numeric |  | 0 |  |
| 202 | ri_previous_nar_public | numeric |  | 0 |  |
| 203 | ri_previous_nar_holiday | numeric |  | 0 |  |
| 204 | ri_current_nar_murder | numeric |  | 0 |  |
| 205 | ri_current_nar_motorcycle | numeric |  | 0 |  |
| 206 | ri_current_nar_public | numeric |  | 0 |  |
| 207 | ri_current_nar_holiday | numeric |  | 0 |  |
| 208 | total_nar_murder | numeric |  | 0 |  |
| 209 | total_nar_motorcycle | numeric |  | 0 |  |
| 210 | total_nar_public | numeric |  | 0 |  |
| 211 | total_nar_holiday | numeric |  | 0 |  |
| 212 | total_sr_murder | numeric |  | 0 |  |
| 213 | total_sr_motorcycle | numeric |  | 0 |  |
| 214 | total_sr_public | numeric |  | 0 |  |
| 215 | total_sr_holiday | numeric |  | 0 |  |
| 216 | ri_ratio_murder | numeric |  | 0 |  |
| 217 | ri_ratio_motorcycle | numeric |  | 0 |  |
| 218 | ri_ratio_public | numeric |  | 0 |  |
| 219 | ri_ratio_holiday | numeric |  | 0 |  |
| 220 | premium_med_acc | numeric |  | 0 |  |
| 221 | premium_ipd | numeric |  | 0 |  |
| 222 | premium_opd | numeric |  | 0 |  |
| 223 | premium_dental | numeric |  | 0 |  |
| 224 | total_premium_med | numeric | tx_rig_act_bdr_new_renew | tot_ori_nb_prem_med + tot_ori_ren_prem_med + tot_re_rev_prem_med |  |
| 225 | comm_med_acc | numeric |  | 0 |  |
| 226 | comm_ipd | numeric |  | 0 |  |
| 227 | comm_opd | numeric |  | 0 |  |
| 228 | comm_dental | numeric |  | 0 |  |
| 229 | total_ri_dividend | numeric |  | 0 |  |
| 230 | claim_med_acc | numeric | tx_rig_act_bdr_claim | sum_re_claim_med_acc |  |
| 231 | claim_ipd | numeric | tx_rig_act_bdr_claim | sum_re_claim_ipd |  |
| 232 | claim_opd | numeric | tx_rig_act_bdr_claim | sum_re_claim_opd |  |
| 233 | claim_dental | numeric | tx_rig_act_bdr_claim | sum_re_claim_dental |  |
| 234 | claim_return_prem | numeric |  | 0 |  |
| 235 | revival_premium_life | numeric | tx_rig_act_bdr_new_renew | tot_re_rev_prem_life |  |
| 236 | revival_premium_add | numeric | tx_rig_act_bdr_new_renew | tot_re_rev_prem_add |  |
| 237 | claim_dismemberment | numeric | tx_rig_act_bdr_claim | sum_re_claim_dismem |  |
| 238 | experience_refund_life | numeric | tx_rig_act_bdr_new_renew | re_ex_refund_life |  |
| 239 | experience_refund_add | numeric | tx_rig_act_bdr_new_renew | re_ex_refund_acc |  |
| 240 | ri_period | char | tx_rig_act_hdtx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | periodpolicy_period TO_CHAR(effective_date_from, 'YYYYMM') |  |
| 241 | ri_prem_duration | char | tx_rig_act_hd | period |  |
| 242 | ri_profit_com | numeric |  | 0 |  |
| 243 | total_premium | numeric | tx_rig_est_bdr | tot_re_nb_prem_life + tot_re_nb_prem_add + tot_re_ren_prem_life + tot_re_ren_prem_add + tot_re_rev_prem_life + tot_re_rev_prem_add |  |
| 244 | period_quarter | char | tx_rig_act_hd | นำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter |  |
| 245 | total_claim | numeric | tx_rig_act_bdr_claim | sum_re_claim_tot |  |
| 246 | prem_refund_med_acc | numeric |  | 0 |  |
| 247 | prem_refund_ipd | numeric |  | 0 |  |
| 248 | prem_refund_opd | numeric |  | 0 |  |
| 249 | prem_refund_dental | numeric |  | 0 |  |
| 250 | comm_refund_med_acc | numeric | tx_rig_act_bdr_new_renew | tot_com_refund_medif reinsurer_code = 'Gibraltar' then tot_com_refund_med*-1 else tot_com_refund_med |  |
| 251 | comm_refund_ipd | numeric |  | 0 |  |
| 252 | comm_refund_opd | numeric |  | 0 |  |
| 253 | comm_refund_dental | numeric |  | 0 |  |
| 254 | sale_channel_desc | char |  | Null |  |
| 255 | rider_plan_code | char |  | Null |  |
| 256 | premium_e1 | numeric |  | 0 |  |
| 257 | comm_life_temp | numeric |  | 0 |  |
| 258 | comm_add_temp | numeric |  | 0 |  |
| 259 | premium_life_temp | numeric |  | 0 |  |
| 260 | premium_add_temp | numeric |  | 0 |  |
| 261 | premium_tpd_temp | numeric |  | 0 |  |
| 262 | premium_med_temp | numeric |  | 0 |  |
| 263 | premium_med_acc_temp | numeric |  | 0 |  |
| 264 | premium_ipd_temp | numeric |  | 0 |  |
| 265 | premium_opd_temp | numeric |  | 0 |  |
| 266 | premium_dental_temp | numeric |  | 0 |  |
| 267 | comm_med_acc_temp | numeric |  | 0 |  |
| 268 | comm_ipd_temp | numeric |  | 0 |  |
| 269 | comm_opd_temp | numeric |  | 0 |  |
| 270 | comm_dental_temp | numeric |  | 0 |  |
| 271 | comm_tpd_temp | numeric |  | 0 |  |
| 272 | policy_type | char |  | GROUP |  |
| 273 | rider_group | char |  | Null |  |
| 274 | rider_type | char |  | Null |  |
| 275 | copay_percent | numeric |  | Null |  |
| 276 | before_copay_percent | numeric |  | null |  |
| 277 | copay_amount_rider | numeric |  | null |  |
| 278 | claim_after_copay_rider | numeric |  | null |  |
| 279 | claim_type_code | char |  | null |  |
| 280 | claim_type_abb | char |  | null |  |
| 281 | maturity_date | date | tx_rig_act_policy_hd | expire_date (suthanee.sa 24/03/2026) |  |
| 282 | invoice_date | date | tx_rig_act_policy_hd | f_receipt_date (suthanee.sa 24/03/2026) |  |


===== PAGE 1313145517 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-02 Insert STD (Actual) > 1. Create tx_ri_std_all (act) > 2. PC Output (act) =====
|  | tx_ri_std_all | เงื่อนไขการบันทึก |
| No. | Name | Type | Datasource Table | Insertกรณีไม่พบข้อมูลให้ลงค่าเป็น null | Example |
| 1 | ri_std_all_id | numeric |  | Auto generate |  |
| 2 | ri_std_hd_id | numeric | tx_rig_act_hd | ri_std_hd_id |  |
| 3 | period | char | tx_rig_act_hd | period |  |
| 4 | row_no | numeric |  | Null |  |
| 5 | reinsurer | char | cf_reinsurer | reinsurer_code |  |
| 6 | treaty_code | char | tx_rig_act_hd | treaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 7 | ri_mode_of_payment | char | tx_rig_act_hd | ri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 8 | ri_method | char | tx_rig_act_hd | ri_method |  |
| 9 | cpa_rider_flag | char | tx_rig_act_hd | cpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> |  |
| 10 | policy_number | char | tx_rig_act_bdr_new_renew | policy_no |  |
| 11 | policy_year | numeric | tx_rig_act_bdr_new_renew | policy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year |  |
| 12 | code_plan | char |  | Null |  |
| 13 | base_or_rider | char |  | Null |  |
| 14 | sale_channel | char | tx_rig_act_bdr_new_renew | sale_option |  |
| 15 | sale_channel_code | char | tx_rig_act_bdr_new_renew | sale_channel_code |  |
| 16 | commencement_date | date | tx_rig_act_bdr_new_renew | effective_date_from |  |
| 17 | ri_commencement_date | date | tx_rig_act_bdr_new_renew | ri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date |  |
| 18 | premium_life | numeric |  | 0 |  |
| 19 | premium_extra_life | numeric |  | 0 |  |
| 20 | premium_rider | numeric |  | 0 |  |
| 21 | premium_extra_rider | numeric |  | 0 |  |
| 22 | premium_add | numeric |  | 0 |  |
| 23 | premium_add_extra | numeric |  | 0 |  |
| 24 | premium_ttd | numeric |  | 0 |  |
| 25 | premium_extra_ttd | numeric |  | 0 |  |
| 26 | premium_tpd | numeric |  | 0 |  |
| 27 | premium_extra_tpd | numeric |  | 0 |  |
| 28 | comm_life | numeric | tx_rig_act_bdr_new_renew | tot_com_life0 |  |
| 29 | comm_extra_life | numeric |  | 0 |  |
| 30 | comm_rider | numeric |  | 0 |  |
| 31 | comm_extra_rider | numeric |  | 0 |  |
| 32 | comm_add | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 33 | comm_add_extra | numeric |  | 0 |  |
| 34 | comm_ttd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 35 | comm_extra_ttd | numeric |  | 0 |  |
| 36 | comm_tpd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 37 | comm_extra_tpd | numeric |  | 0 |  |
| 38 | claim_life | numeric | tx_rig_act_bdr_claim | 0 |  |
| 39 | claim_rider | numeric |  | 0 |  |
| 40 | claim_tpd | numeric | tx_rig_act_bdr_claim | 0 |  |
| 41 | claim_ttd | numeric |  | 0 |  |
| 42 | claim_add | numeric |  | 0 |  |
| 43 | claim_exp_investigation | numeric |  | 0 |  |
| 44 | claim_exp_legal_fee | numeric |  | 0 |  |
| 45 | claim_exp_ex_gratia | numeric |  | 0 |  |
| 46 | prem_refund_life | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 47 | prem_refund_extra_life | numeric |  | 0 |  |
| 48 | prem_refund_rider | numeric |  | 0 |  |
| 49 | prem_refund_extra_rider | numeric |  | 0 |  |
| 50 | prem_refund_add | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 51 | prem_refund_add_extra | numeric |  | 0 |  |
| 52 | prem_refund_ttd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 53 | prem_refund_extra_ttd | numeric |  | 0 |  |
| 54 | prem_refund_tpd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 55 | prem_refund_extra_tpd | numeric |  | 0 |  |
| 56 | comm_refund_life | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 57 | comm_refund_extra_life | numeric |  | 0 |  |
| 58 | comm_refund_rider | numeric |  | 0 |  |
| 59 | comm_refund_extra_rider | numeric |  | 0 |  |
| 60 | comm_refund_add | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 61 | comm_refund_add_extra | numeric |  | 0 |  |
| 62 | comm_refund_ttd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 63 | comm_refund_extra_ttd | numeric |  | 0 |  |
| 64 | comm_refund_tpd | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 65 | comm_refund_extra_tpd | numeric |  | 0 |  |
| 66 | ri_sum_assured_life | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 67 | ri_previous_nar_life | numeric |  | 0 |  |
| 68 | ri_current_nar_life | numeric |  | 0 |  |
| 69 | total_nar_life | numeric |  | 0 |  |
| 70 | total_nar_rider | numeric |  | 0 |  |
| 71 | total_nar_add | numeric |  | 0 |  |
| 72 | total_nar_ttd | numeric |  | 0 |  |
| 73 | total_nar_tpd | numeric |  | 0 |  |
| 74 | total_sr_life | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 75 | total_sr_rider | numeric |  | 0 |  |
| 76 | total_sr_add | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 77 | total_sr_ttd | numeric |  | 0 |  |
| 78 | total_sr_tpd | numeric |  | 0 |  |
| 79 | ri_claim_status | char |  | Null |  |
| 80 | claim_approve_date | timestamp |  | Null |  |
| 81 | err_message | char |  | Null |  |
| 82 | transaction_date | timestamp |  | now() |  |
| 83 | created_date | timestamp |  | now() |  |
| 84 | created_by | char |  | RIG |  |
| 85 | updated_date | timestamp |  | now() |  |
| 86 | updated_by | char |  | RIG |  |
| 87 | facult_flag | boolean |  | Null |  |
| 88 | id_no | char |  | Null |  |
| 89 | std_substd | char |  | Null |  |
| 90 | birth_date | date |  | Null |  |
| 91 | con_age | numeric |  | Null |  |
| 92 | att_age | numeric |  | Null |  |
| 93 | gender | char |  | Null |  |
| 94 | cov_duration | char |  | Null |  |
| 95 | ex_prem_rate_life | numeric |  | 0 |  |
| 96 | ex_prem_rate_rider | numeric |  | 0 |  |
| 97 | sum_assured_life | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 98 | sum_assured_rider | numeric |  | 0 |  |
| 99 | ri_previous_nar_rider | numeric |  | 0 |  |
| 100 | ri_sum_assured_rider | numeric |  | 0 |  |
| 101 | prem_total | numeric | tx_rig_act_bdr_new_renew | 0 |  |
| 102 | std_fac | char |  | Null |  |
| 103 | plan_type | char |  | Null |  |
| 104 | tpd_type | char |  | Null |  |
| 105 | ttd_type | char |  | Null |  |
| 106 | add_type | char |  | Null |  |
| 107 | area | char |  | Null |  |
| 108 | country | char |  | Null |  |
| 109 | aec_country | char |  | Null |  |
| 110 | occ_class | char |  | Null |  |
| 111 | ri_ratio_life | numeric |  | Null |  |
| 112 | ri_ratio_rider | numeric |  | Null |  |
| 113 | effective_date | date | tx_rig_act_bdr_new_renew | effective_date_from |  |
| 114 | status | char | tx_rig_act_bdr_new_renew | policy_status |  |
| 115 | changes_date | date |  | Null |  |
| 116 | claim_name | char |  | Null |  |
| 117 | event_date | date |  | null |  |
| 118 | claim_cause | char |  | Null |  |
| 119 | claim_benefit_life | numeric |  | 0 |  |
| 120 | claim_benefit_rider | numeric |  | 0 |  |
| 121 | claim_investigation | numeric |  | 0 |  |
| 122 | claim_legal_fee | numeric |  | 0 |  |
| 123 | claim_medical | numeric |  | 0 |  |
| 124 | prem_refund_com | numeric |  | 0 |  |
| 125 | compromise_amt | numeric |  | 0 |  |
| 126 | paid_life | numeric |  | 0 |  |
| 127 | paid_rider | numeric |  | 0 |  |
| 128 | remark | char |  | Null |  |
| 129 | account_name | char | tx_rig_act_hd | select contract_name from cf_rig_treaty where treaty_code = :treaty_code |  |
| 130 | sale_channel_map | char |  | Null |  |
| 131 | alter_date | date |  | Null |  |
| 132 | ri_initial_sa_life | numeric |  | 0 |  |
| 133 | ri_initial_sa_rider | numeric |  | 0 |  |
| 134 | ri_initial_sa_add | numeric |  | 0 |  |
| 135 | ri_initial_sa_tpd | numeric |  | 0 |  |
| 136 | ri_initial_sa_ttd | numeric |  | 0 |  |
| 137 | actual_sa_life | numeric |  | 0 |  |
| 138 | actual_sa_rider | numeric |  | 0 |  |
| 139 | actual_sa_add | numeric |  | 0 |  |
| 140 | actual_sa_tpd | numeric |  | 0 |  |
| 141 | actual_sa_ttd | numeric |  | 0 |  |
| 142 | previous_sa_life | numeric |  | 0 |  |
| 143 | previous_sa_rider | numeric |  | 0 |  |
| 144 | previous_sa_add | numeric |  | 0 |  |
| 145 | previous_sa_tpd | numeric |  | 0 |  |
| 146 | previous_sa_ttd | numeric |  | 0 |  |
| 147 | emr_life | numeric |  | 0 |  |
| 148 | emr_rider | numeric |  | 0 |  |
| 149 | emr_add | numeric |  | 0 |  |
| 150 | emr_tpd | numeric |  | 0 |  |
| 151 | emr_ttd | numeric |  | 0 |  |
| 152 | claim_no | char |  | Null |  |
| 153 | claim_type | char |  | Null |  |
| 154 | claim_register_date | date |  | Null |  |
| 155 | claim_event_date | date |  | Null |  |
| 156 | total_ri_premium | numeric |  | 0 |  |
| 157 | total_ri_comm | numeric |  | 0 |  |
| 158 | ri_claim_exgratia | numeric |  | 0 |  |
| 159 | total_prem_refund | numeric |  | 0 |  |
| 160 | total_comm_refund | numeric |  | 0 |  |
| 161 | ri_previous_sa | numeric |  | 0 |  |
| 162 | ri_sum_assured_add | numeric |  | 0 |  |
| 163 | ri_sum_assured_tpd | numeric |  | 0 |  |
| 164 | ri_sum_assured_ttd | numeric |  | 0 |  |
| 165 | ri_previous_nar_add | numeric |  | 0 |  |
| 166 | ri_previous_nar_tpd | numeric |  | 0 |  |
| 167 | ri_previous_nar_ttd | numeric |  | 0 |  |
| 168 | ri_current_nar_rider | numeric |  | 0 |  |
| 169 | ri_current_nar_add | numeric |  | 0 |  |
| 170 | ri_current_nar_tpd | numeric |  | 0 |  |
| 171 | ri_current_nar_ttd | numeric |  | 0 |  |
| 172 | report_type | char |  | Null |  |
| 173 | partner_code | char |  | Null |  |
| 174 | claim_status | char |  | Null |  |
| 175 | comm_rate | numeric |  | 0 |  |
| 176 | sale_option | char | tx_rig_act_bdr_new_renew | sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' |  |
| 177 | premium_type | char |  | 'Normal' |  |
| 178 | comm_med | numeric |  | 0 |  |
| 179 | premium_med | numeric |  | 0+ tot_ori_ren_prem_med0 |  |
| 180 | claim_recovery_date | date |  | Null |  |
| 181 | claim_recovery_add | numeric |  | Null |  |
| 182 | payfrom | date | tx_rig_act_bdr_new_renew | effective_date_from |  |
| 183 | payto | date | tx_rig_act_bdr_new_renew | effective_date_to |  |
| 184 | ri_initial_sa_murder | numeric |  | 0 |  |
| 185 | ri_initial_sa_motorcycle | numeric |  | 0 |  |
| 186 | ri_initial_sa_public | numeric |  | 0 |  |
| 187 | ri_initial_sa_holiday | numeric |  | 0 |  |
| 188 | actual_sa_murder | numeric |  | 0 |  |
| 189 | actual_sa_motorcycle | numeric |  | 0 |  |
| 190 | actual_sa_public | numeric |  | 0 |  |
| 191 | actual_sa_holiday | numeric |  | 0 |  |
| 192 | previous_sa_murder | numeric |  | 0 |  |
| 193 | previous_sa_motorcycle | numeric |  | 0 |  |
| 194 | previous_sa_public | numeric |  | 0 |  |
| 195 | previous_sa_holiday | numeric |  | 0 |  |
| 196 | ri_sum_assured_murder | numeric |  | 0 |  |
| 197 | ri_sum_assured_motorcycle | numeric |  | 0 |  |
| 198 | ri_sum_assured_public | numeric |  | 0 |  |
| 199 | ri_sum_assured_holiday | numeric |  | 0 |  |
| 200 | ri_previous_nar_murder | numeric |  | 0 |  |
| 201 | ri_previous_nar_motorcycle | numeric |  | 0 |  |
| 202 | ri_previous_nar_public | numeric |  | 0 |  |
| 203 | ri_previous_nar_holiday | numeric |  | 0 |  |
| 204 | ri_current_nar_murder | numeric |  | 0 |  |
| 205 | ri_current_nar_motorcycle | numeric |  | 0 |  |
| 206 | ri_current_nar_public | numeric |  | 0 |  |
| 207 | ri_current_nar_holiday | numeric |  | 0 |  |
| 208 | total_nar_murder | numeric |  | 0 |  |
| 209 | total_nar_motorcycle | numeric |  | 0 |  |
| 210 | total_nar_public | numeric |  | 0 |  |
| 211 | total_nar_holiday | numeric |  | 0 |  |
| 212 | total_sr_murder | numeric |  | 0 |  |
| 213 | total_sr_motorcycle | numeric |  | 0 |  |
| 214 | total_sr_public | numeric |  | 0 |  |
| 215 | total_sr_holiday | numeric |  | 0 |  |
| 216 | ri_ratio_murder | numeric |  | 0 |  |
| 217 | ri_ratio_motorcycle | numeric |  | 0 |  |
| 218 | ri_ratio_public | numeric |  | 0 |  |
| 219 | ri_ratio_holiday | numeric |  | 0 |  |
| 220 | premium_med_acc | numeric |  | 0 |  |
| 221 | premium_ipd | numeric |  | 0 |  |
| 222 | premium_opd | numeric |  | 0 |  |
| 223 | premium_dental | numeric |  | 0 |  |
| 224 | total_premium_med | numeric |  | 0 |  |
| 225 | comm_med_acc | numeric |  | 0 |  |
| 226 | comm_ipd | numeric |  | 0 |  |
| 227 | comm_opd | numeric |  | 0 |  |
| 228 | comm_dental | numeric |  | 0 |  |
| 229 | total_ri_dividend | numeric |  | 0 |  |
| 230 | claim_med_acc | numeric |  | 0 |  |
| 231 | claim_ipd | numeric |  | 0 |  |
| 232 | claim_opd | numeric |  | 0 |  |
| 233 | claim_dental | numeric |  | 0 |  |
| 234 | claim_return_prem | numeric |  | 0 |  |
| 235 | revival_premium_life | numeric |  | 0 |  |
| 236 | revival_premium_add | numeric |  | 0 |  |
| 237 | claim_dismemberment | numeric |  | 0 |  |
| 238 | experience_refund_life | numeric |  | 0 |  |
| 239 | experience_refund_add | numeric |  | 0 |  |
| 240 | ri_period | char | tx_rig_act_hdtx_rig_act_bdr_new_renew | period TO_CHAR(effective_date_from, 'YYYYMM') |  |
| 241 | ri_prem_duration | char | tx_rig_act_hd | period |  |
| 242 | ri_profit_com | numeric | tx_rig_allocation_profit | pc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> |  |
| 243 | total_premium | numeric |  | 0 |  |
| 244 | period_quarter | char | tx_rig_act_hd | นำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter |  |
| 245 | total_claim | numeric | = | 0 |  |
| 246 | prem_refund_med_acc | numeric |  | 0 |  |
| 247 | prem_refund_ipd | numeric |  | 0 |  |
| 248 | prem_refund_opd | numeric |  | 0 |  |
| 249 | prem_refund_dental | numeric |  | 0 |  |
| 250 | comm_refund_med_acc | numeric |  | 0 |  |
| 251 | comm_refund_ipd | numeric |  | 0 |  |
| 252 | comm_refund_opd | numeric |  | 0 |  |
| 253 | comm_refund_dental | numeric |  | 0 |  |
| 254 | sale_channel_desc | char |  | Null |  |
| 255 | rider_plan_code | char |  | Null |  |
| 256 | premium_e1 | numeric |  | 0 |  |
| 257 | comm_life_temp | numeric |  | 0 |  |
| 258 | comm_add_temp | numeric |  | 0 |  |
| 259 | premium_life_temp | numeric |  | 0 |  |
| 260 | premium_add_temp | numeric |  | 0 |  |
| 261 | premium_tpd_temp | numeric |  | 0 |  |
| 262 | premium_med_temp | numeric |  | 0 |  |
| 263 | premium_med_acc_temp | numeric |  | 0 |  |
| 264 | premium_ipd_temp | numeric |  | 0 |  |
| 265 | premium_opd_temp | numeric |  | 0 |  |
| 266 | premium_dental_temp | numeric |  | 0 |  |
| 267 | comm_med_acc_temp | numeric |  | 0 |  |
| 268 | comm_ipd_temp | numeric |  | 0 |  |
| 269 | comm_opd_temp | numeric |  | 0 |  |
| 270 | comm_dental_temp | numeric |  | 0 |  |
| 271 | comm_tpd_temp | numeric |  | 0 |  |
| 272 | policy_type | char |  | GROUP |  |
| 273 | rider_group | char |  | Null |  |
| 274 | rider_type | char |  | Null |  |
| 275 | copay_percent | numeric |  | Null |  |
| 276 | before_copay_percent | numeric |  | null |  |
| 277 | copay_amount_rider | numeric |  | null |  |
| 278 | claim_after_copay_rider | numeric |  | null |  |
| 279 | claim_type_code | char |  | null |  |
| 280 | claim_type_abb | char |  | null |  |
| 281 | maturity_date | date | tx_rig_act_policy_hd | expire_date (suthanee.sa 24/03/2026) |  |
| 282 | invoice_date | date | tx_rig_act_policy_hd | f_receipt_date (suthanee.sa 24/03/2026) |  |


===== PAGE 1314947075 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-02 Insert STD (Actual) > Copy of 1. Create tx_ri_std_all (act) =====
Objective: ดำเนินการสร้างรายการ ดังนี้
- สร้างรายการที่ tx_ri_std_all Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_est_hdri_std_hd_id 3periodchartx_rig_est_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_est_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_est_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_est_hdri_method 9cpa_rider_flagchartx_rig_est_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_est_bdrpolicy_no 11policy_yearnumerictx_rig_est_bdrpolicy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_est_bdrsale_option 15sale_channel_codechartx_rig_est_bdrsale_channel_code 16commencement_datedatetx_rig_est_bdreffective_date 17ri_commencement_datedatetx_rig_est_policy_hdtx_rig_est_bdrri_com_date 18premium_lifenumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumerictx_rig_est_bdrri_prem_acc + ri_prem_renew_add 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_est_bdrri_comm_life 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_est_bdrri_comm_acc 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_est_bdrri_comm_ttd 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_est_bdrri_comm_tpd 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_est_bdrri_claim_life 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_est_bdrri_claim_tpd 41claim_ttdnumeric 0 42claim_addnumerictx_rig_est_bdrri_claim_add 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumeric 0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumeric 0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumeric 0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumeric 0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumeric 0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumeric 0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumeric 0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumeric 0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumeric 0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumeric 0 75total_sr_ridernumeric 0 76total_sr_addnumeric 0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumeric 0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumeric ri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_est_bdreffective_date 114statuschartx_rig_est_policy_hdri_policy_status 115changes_datedate Null 116claim_namechar Null 117event_datedatetx_rig_est_bdrevent_date 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumerictx_rig_est_bdrri_claim_med 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_est_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedatetx_rig_est_bdrevent_date 156total_ri_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 157total_ri_commnumerictx_rig_est_bdrri_comm_life + ri_comm_acc + ri_comm_tpd + ri_comm_ttd + ri_comm_medical 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_est_bdrtx_rig_est_bdr.sale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar Null 178comm_mednumerictx_rig_est_bdrri_comm_medical 179premium_mednumeric 0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_est_bdreffective_date 183paytodatetx_rig_est_bdr(effective_date + 1 ปี) -1 วัน 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_est_bdrclosing_periodTO_CHAR(effective_date, 'YYYYMM') 241ri_prem_durationchartx_rig_est_bdrtx_rig_est_bdr.period 242ri_profit_comnumeric 0 243total_premiumnumerictx_rig_est_bdrri_prem_life + ri_prem_renew_life + ri_prem_acc + ri_prem_renew_add 244period_quarterchartx_rig_est_bdrนำ tx_rig_est_bdr.closing_period มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4ตัวอย่างเช่นclosing_period = 202401period_quarter = 2024Q1 245total_claimnumerictx_rig_est_bdrri_claim_tot 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric Null 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_est_policy_hdexpire_date (suthanee.sa 24/03/2025) 282invoice_datedatetx_rig_est_policy_hdf_receipt_date (suthanee.sa 24/03/2025)
- กรณีไม่พบข้อมูลให้ลงค่าเป็น null
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4
- closing_period = 202401
- period_quarter = 2024Q1
- กรณีพบข้อมูล Profit Commision ให้ตรวจสอบจากเงื่อนไขต่อไปนี้เพื่อสร้างรายการ pc_allocation โดยใช้ข้อมูลจาก tx_ri_allocation_profit_est group by policy_no, facult_flag tx_rig_est_hd.ri_act_hd_id = tx_ri_profit_comm_est.ri_act_hd_idtx_ri_est_hd.quarter_year = tx_ri_allocation_profit_est.yeartx_ri_est_hd.treaty_code = tx_ri_allocation_profit_est.treaty_code sum(tx_ri_allocation_profit_est.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- tx_rig_est_hd.ri_act_hd_id = tx_ri_profit_comm_est.ri_act_hd_id
- tx_ri_est_hd.quarter_year = tx_ri_allocation_profit_est.year
- tx_ri_est_hd.treaty_code = tx_ri_allocation_profit_est.treaty_code
- sum(tx_ri_allocation_profit_est.pc_allocation) > 0 Click here to expand... tx_ri_std_allเงื่อนไขการบันทึกNo.NameTypeDatasource TableInsertกรณีไม่พบข้อมูลให้ลงค่าเป็น nullExample1ri_std_all_idnumeric Auto generate 2ri_std_hd_idnumerictx_rig_act_hdri_std_hd_id 3periodchartx_rig_act_hdperiod 4row_nonumeric Null 5reinsurercharcf_reinsurerreinsurer_code 6treaty_codechartx_rig_act_hdtreaty_codeนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select treaty_code from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 7ri_mode_of_paymentchartx_rig_act_hdri_mode_of_paymentนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select ri_mode_of_payment from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 8ri_methodchartx_rig_act_hdri_method 9cpa_rider_flagchartx_rig_act_hdcpa_rider_flagนำ treaty_code ไปหาจาก query ด้านล่างที่ msa-adwetl <![CDATA[select cpa_rider_flag from ms_ri_treaty where ri_treaty_code_1 = :treaty_code or ri_treaty_code_2 = :treaty_code;]]> 10policy_numberchartx_rig_act_bdr_new_renewpolicy_no 11policy_yearnumerictx_rig_act_bdr_new_renewpolicy_yearWHEN reinsurer_code = 'Thaire' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year WHEN reinsurer_code = 'Gibraltar' THEN (EXTRACT(YEAR FROM effective_date_from) - EXTRACT(YEAR FROM first_date)) + 1 ELSE policy_year 12code_planchar Null 13base_or_riderchar Null 14sale_channelchartx_rig_act_bdr_new_renewsale_option 15sale_channel_codechartx_rig_act_bdr_new_renewsale_channel_code 16commencement_datedatetx_rig_act_bdr_new_reneweffective_date_from 17ri_commencement_datedatetx_rig_act_bdr_new_renewri_com_dateWHEN reinsurer_code = 'Thaire' THEN first_date else ri_com_date 18premium_lifenumeric 0 19premium_extra_lifenumeric 0 20premium_ridernumeric 0 21premium_extra_ridernumeric 0 22premium_addnumeric 0 23premium_add_extranumeric 0 24premium_ttdnumeric 0 25premium_extra_ttdnumeric 0 26premium_tpdnumeric 0 27premium_extra_tpdnumeric 0 28comm_lifenumerictx_rig_act_bdr_new_renewtot_com_life0 29comm_extra_lifenumeric 0 30comm_ridernumeric 0 31comm_extra_ridernumeric 0 32comm_addnumerictx_rig_act_bdr_new_renew0 33comm_add_extranumeric 0 34comm_ttdnumerictx_rig_act_bdr_new_renew0 35comm_extra_ttdnumeric 0 36comm_tpdnumerictx_rig_act_bdr_new_renew0 37comm_extra_tpdnumeric 0 38claim_lifenumerictx_rig_act_bdr_claim0 39claim_ridernumeric 0 40claim_tpdnumerictx_rig_act_bdr_claim0 41claim_ttdnumeric 0 42claim_addnumeric 0 43claim_exp_investigationnumeric 0 44claim_exp_legal_feenumeric 0 45claim_exp_ex_gratianumeric 0 46prem_refund_lifenumerictx_rig_act_bdr_new_renew0 47prem_refund_extra_lifenumeric 0 48prem_refund_ridernumeric 0 49prem_refund_extra_ridernumeric 0 50prem_refund_addnumerictx_rig_act_bdr_new_renew0 51prem_refund_add_extranumeric 0 52prem_refund_ttdnumerictx_rig_act_bdr_new_renew0 53prem_refund_extra_ttdnumeric 0 54prem_refund_tpdnumerictx_rig_act_bdr_new_renew0 55prem_refund_extra_tpdnumeric 0 56comm_refund_lifenumerictx_rig_act_bdr_new_renew0 57comm_refund_extra_lifenumeric 0 58comm_refund_ridernumeric 0 59comm_refund_extra_ridernumeric 0 60comm_refund_addnumerictx_rig_act_bdr_new_renew0 61comm_refund_add_extranumeric 0 62comm_refund_ttdnumerictx_rig_act_bdr_new_renew0 63comm_refund_extra_ttdnumeric 0 64comm_refund_tpdnumerictx_rig_act_bdr_new_renew0 65comm_refund_extra_tpdnumeric 0 66ri_sum_assured_lifenumerictx_rig_act_bdr_new_renew0 67ri_previous_nar_lifenumeric 0 68ri_current_nar_lifenumeric 0 69total_nar_lifenumeric 0 70total_nar_ridernumeric 0 71total_nar_addnumeric 0 72total_nar_ttdnumeric 0 73total_nar_tpdnumeric 0 74total_sr_lifenumerictx_rig_act_bdr_new_renew0 75total_sr_ridernumeric 0 76total_sr_addnumerictx_rig_act_bdr_new_renew0 77total_sr_ttdnumeric 0 78total_sr_tpdnumeric 0 79ri_claim_statuschar Null 80claim_approve_datetimestamp Null 81err_messagechar Null 82transaction_datetimestamp now() 83created_datetimestamp now() 84created_bychar RIG 85updated_datetimestamp now() 86updated_bychar RIG 87facult_flagboolean Null 88id_nochar Null 89std_substdchar Null 90birth_datedate Null 91con_agenumeric Null 92att_agenumeric Null 93genderchar Null 94cov_durationchar Null 95ex_prem_rate_lifenumeric 0 96ex_prem_rate_ridernumeric 0 97sum_assured_lifenumerictx_rig_act_bdr_new_renew0 98sum_assured_ridernumeric 0 99ri_previous_nar_ridernumeric 0 100ri_sum_assured_ridernumeric 0 101prem_totalnumerictx_rig_act_bdr_new_renew0 102std_facchar Null 103plan_typechar Null 104tpd_typechar Null 105ttd_typechar Null 106add_typechar Null 107areachar Null 108countrychar Null 109aec_countrychar Null 110occ_classchar Null 111ri_ratio_lifenumeric Null 112ri_ratio_ridernumeric Null 113effective_datedatetx_rig_act_bdr_new_reneweffective_date_from 114statuschartx_rig_act_bdr_new_renewpolicy_status 115changes_datedate Null 116claim_namechar Null 117event_datedate null 118claim_causechar Null 119claim_benefit_lifenumeric 0 120claim_benefit_ridernumeric 0 121claim_investigationnumeric 0 122claim_legal_feenumeric 0 123claim_medicalnumeric 0 124prem_refund_comnumeric 0 125compromise_amtnumeric 0 126paid_lifenumeric 0 127paid_ridernumeric 0 128remarkchar Null 129account_namechartx_rig_act_hdselect contract_name from cf_rig_treaty where treaty_code = :treaty_code 130sale_channel_mapchar Null 131alter_datedate Null 132ri_initial_sa_lifenumeric 0 133ri_initial_sa_ridernumeric 0 134ri_initial_sa_addnumeric 0 135ri_initial_sa_tpdnumeric 0 136ri_initial_sa_ttdnumeric 0 137actual_sa_lifenumeric 0 138actual_sa_ridernumeric 0 139actual_sa_addnumeric 0 140actual_sa_tpdnumeric 0 141actual_sa_ttdnumeric 0 142previous_sa_lifenumeric 0 143previous_sa_ridernumeric 0 144previous_sa_addnumeric 0 145previous_sa_tpdnumeric 0 146previous_sa_ttdnumeric 0 147emr_lifenumeric 0 148emr_ridernumeric 0 149emr_addnumeric 0 150emr_tpdnumeric 0 151emr_ttdnumeric 0 152claim_nochar Null 153claim_typechar Null 154claim_register_datedate Null 155claim_event_datedate Null 156total_ri_premiumnumeric 0 157total_ri_commnumeric 0 158ri_claim_exgratianumeric 0 159total_prem_refundnumeric 0 160total_comm_refundnumeric 0 161ri_previous_sanumeric 0 162ri_sum_assured_addnumeric 0 163ri_sum_assured_tpdnumeric 0 164ri_sum_assured_ttdnumeric 0 165ri_previous_nar_addnumeric 0 166ri_previous_nar_tpdnumeric 0 167ri_previous_nar_ttdnumeric 0 168ri_current_nar_ridernumeric 0 169ri_current_nar_addnumeric 0 170ri_current_nar_tpdnumeric 0 171ri_current_nar_ttdnumeric 0 172report_typechar Null 173partner_codechar Null 174claim_statuschar Null 175comm_ratenumeric 0 176sale_optionchartx_rig_act_bdr_new_renewsale_optionif 0 then 'ประกันชีวิตกลุ่ม'if 1 then 'โบรกเกอร์'if 2 then 'ประกันชีวิตข้าราชการ'if 3 then 'ช่องทางองค์กร'if 4 then 'ตัวแทน'if 5 then 'ผ่านสถาบันการเงิน' 177premium_typechar 'Normal' 178comm_mednumeric 0 179premium_mednumeric 0+ tot_ori_ren_prem_med0 180claim_recovery_datedate Null 181claim_recovery_addnumeric Null 182payfromdatetx_rig_act_bdr_new_reneweffective_date_from 183paytodatetx_rig_act_bdr_new_reneweffective_date_to 184ri_initial_sa_murdernumeric 0 185ri_initial_sa_motorcyclenumeric 0 186ri_initial_sa_publicnumeric 0 187ri_initial_sa_holidaynumeric 0 188actual_sa_murdernumeric 0 189actual_sa_motorcyclenumeric 0 190actual_sa_publicnumeric 0 191actual_sa_holidaynumeric 0 192previous_sa_murdernumeric 0 193previous_sa_motorcyclenumeric 0 194previous_sa_publicnumeric 0 195previous_sa_holidaynumeric 0 196ri_sum_assured_murdernumeric 0 197ri_sum_assured_motorcyclenumeric 0 198ri_sum_assured_publicnumeric 0 199ri_sum_assured_holidaynumeric 0 200ri_previous_nar_murdernumeric 0 201ri_previous_nar_motorcyclenumeric 0 202ri_previous_nar_publicnumeric 0 203ri_previous_nar_holidaynumeric 0 204ri_current_nar_murdernumeric 0 205ri_current_nar_motorcyclenumeric 0 206ri_current_nar_publicnumeric 0 207ri_current_nar_holidaynumeric 0 208total_nar_murdernumeric 0 209total_nar_motorcyclenumeric 0 210total_nar_publicnumeric 0 211total_nar_holidaynumeric 0 212total_sr_murdernumeric 0 213total_sr_motorcyclenumeric 0 214total_sr_publicnumeric 0 215total_sr_holidaynumeric 0 216ri_ratio_murdernumeric 0 217ri_ratio_motorcyclenumeric 0 218ri_ratio_publicnumeric 0 219ri_ratio_holidaynumeric 0 220premium_med_accnumeric 0 221premium_ipdnumeric 0 222premium_opdnumeric 0 223premium_dentalnumeric 0 224total_premium_mednumeric 0 225comm_med_accnumeric 0 226comm_ipdnumeric 0 227comm_opdnumeric 0 228comm_dentalnumeric 0 229total_ri_dividendnumeric 0 230claim_med_accnumeric 0 231claim_ipdnumeric 0 232claim_opdnumeric 0 233claim_dentalnumeric 0 234claim_return_premnumeric 0 235revival_premium_lifenumeric 0 236revival_premium_addnumeric 0 237claim_dismembermentnumeric 0 238experience_refund_lifenumeric 0 239experience_refund_addnumeric 0 240ri_periodchartx_rig_act_hdtx_rig_act_bdr_new_renewperiod TO_CHAR(effective_date_from, 'YYYYMM') 241ri_prem_durationchartx_rig_act_hdperiod 242ri_profit_comnumeric tx_rig_allocation_profitpc_allocation <![CDATA[select pc_allocation from tx_rig_allocation_profit t1 inner join tx_rig_profit_dt t2 on t2.rig_profit_dt_id = t1.rig_profit_dt_id inner join tx_rig_act_hd t3 on t3.rig_act_hd_id= t2.rig_act_hd_id where t3.rig_act_hd_id = :rig_act_hd_id]]> 243total_premiumnumeric 0 244period_quarterchartx_rig_act_hdนำ tx_rig_act_hd.quarter มาแปลงเป็น quarterเดือน 1-3 = Q1เดือน 4-6 = Q2เดือน 7-9 = Q3เดือน 10-12 = Q4tx_rig_act_hd.closing_quarter 245total_claimnumeric=0 246prem_refund_med_accnumeric 0 247prem_refund_ipdnumeric 0 248prem_refund_opdnumeric 0 249prem_refund_dentalnumeric 0 250comm_refund_med_accnumeric 0 251comm_refund_ipdnumeric 0 252comm_refund_opdnumeric 0 253comm_refund_dentalnumeric 0 254sale_channel_descchar Null 255rider_plan_codechar Null 256premium_e1numeric 0 257comm_life_tempnumeric 0 258comm_add_tempnumeric 0 259premium_life_tempnumeric 0 260premium_add_tempnumeric 0 261premium_tpd_tempnumeric 0 262premium_med_tempnumeric 0 263premium_med_acc_tempnumeric 0 264premium_ipd_tempnumeric 0 265premium_opd_tempnumeric 0 266premium_dental_tempnumeric 0 267comm_med_acc_tempnumeric 0 268comm_ipd_tempnumeric 0 269comm_opd_tempnumeric 0 270comm_dental_tempnumeric 0 271comm_tpd_tempnumeric 0 272policy_typechar GROUP 273rider_groupchar Null 274rider_typechar Null 275copay_percentnumeric Null 276before_copay_percentnumeric null 277copay_amount_ridernumeric null 278claim_after_copay_ridernumeric null 279claim_type_codechar null 280claim_type_abbchar null 281maturity_datedatetx_rig_act_policy_hd expire_date (suthanee.sa 24/03/2026) 282invoice_datedatetx_rig_act_policy_hd f_receipt_date (suthanee.sa 24/03/2026)
- เดือน 1-3 = Q1
- เดือน 4-6 = Q2
- เดือน 7-9 = Q3
- เดือน 10-12 = Q4


===== PAGE 1320518092 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-03 Update EDW Status (Actual) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับ Update สถานะและ count จำนวนรายการที่ระบบ EDW
Repositories : msa-adwetl
Service path
POST: /thaisamut/rs/adwetl/
TYPE : <PUT>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_process_hd_id | numeric | Require | PK tx_ri_process_header | 1 |  |  |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| treaty_code | char | Require | รหัสสัญญา | THREL_Ind_PA |  |  |

## Process
ดำเนินการ Update ข้อมูล ดังนี้
- เมื่อสร้างข้อมูล tx_ri_std_all สำเร็จ (WS-RIG-002-02 Insert STD (Actual)) ให้ update สถานะรายการ ที่ tx_ri_process_header ดังนี้ Update tx_ri_process_header No.NameTypeCondition1ri_process_status_idnumeric12update_bycharuser login3update_datetimestampTimestamp ที่สร้างข้อมูลสำเร็จ
- Count จำนวนรายการข้อมูลของ tx_ri_std_all ที่ Insert สำเร็จที่ tx_ri_std_hd ดังนี้ Update tx_ri_std_hd No.NameTypeCondition1sum_recordsnumeric <![CDATA[SELECT COUNT(ri_std_all_id) FROM tx_ri_std_all WHERE ri_std_hd_id = tx_ri_std_hd.ri_std_hd_id]]>
- Update ข้อมูลสำหรับประมวลผล Support booking ที่ tx_ri_std_all ดังนี้ Update tx_ri_std_all No.NameTypeCondition1ri_methodchar <![CDATA[select arrangement_type from ms_ri_treaty where treaty_code = :treaty_code;]]> 2ri_mode_of_paymentchar <![CDATA[select ri_mode_of_payment from ms_ri_treaty where treaty_code = :treaty_code;]]> 3cpa_rider_flagchar <![CDATA[select cpa_rider_flag from ms_ri_treaty where treaty_code = :treaty_code;]]>
- Return ข้อมูลสถานะรายการReturn ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_act_hd.edw_status (1)Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_act_hd.edw_status_desc (รอพิจารณา STD Template) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Insert ที่ tx_rig_act_hd.edw_status (1)
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Insert ที่ tx_rig_act_hd.edw_status_desc (รอพิจารณา STD Template) โดย lookup ดังนี้ msa-adwetl <![CDATA[select t1.ri_process_status_id, t2.process_status_name from tx_ri_process_header t1 left join ms_ri_process_status t2 on t1.ri_process_status_id = t2.ri_process_status_id;]]>

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 1 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | รอพิจารณา STD Template |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1320518095 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-03 Update EDW Status (Actual) > 1. Update tx_ri_process_hd (act) =====
| No. | Name | Type | Condition |
| 1 | ri_process_status_id | numeric | 1 |
| 2 | update_by | char | user login |
| 3 | update_date | timestamp | Timestamp ที่สร้างข้อมูลสำเร็จ |


===== PAGE 1320518097 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-03 Update EDW Status (Actual) > 2. Update tx_ri_std_hd (act) =====
| No. | Name | Type | Condition |
| 1 | sum_records | numeric | <![CDATA[SELECT COUNT(ri_std_all_id) FROM tx_ri_std_all WHERE ri_std_hd_id = tx_ri_std_hd.ri_std_hd_id]]> |


===== PAGE 1320518099 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-03 Update EDW Status (Actual) > 3. Update tx_ri_std_all (act) =====
| No. | Name | Type | Condition |
| 1 | ri_method | char | <![CDATA[select arrangement_type from ms_ri_treaty where treaty_code = :treaty_code;]]> |
| 2 | ri_mode_of_payment | char | <![CDATA[select ri_mode_of_payment from ms_ri_treaty where treaty_code = :treaty_code;]]> |
| 3 | cpa_rider_flag | char | <![CDATA[select cpa_rider_flag from ms_ri_treaty where treaty_code = :treaty_code;]]> |


===== PAGE 1320518102 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-04 Select EDW Status  (Actual) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับ get สถานะจาก edw มาที่ group ri
Repositories : msa-reinsurance
Service path
PUT:  thaisamut
TYPE : <GET>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |
| ri_process_status_id | numeric | Require | id สถานะรายการ | 2 |  |  |
| process_status_name | string | Require | ชื่อสถานะรายการ | รอส่งขออนุมัติเข้า EDW |  |  |
| update_by | string | Require | ผู้ทำรายการ | pongsathorn.pa |  | login id from etl |

## Process
ดำเนินการ Return ข้อมูล tx_ri_process_header กลับไปที่ tx_rig_act_hd ดังนี้
- เมื่อระบบดำเนินการปรับสถานะข้อมูลที่ tx_ri_process_header (msa-adwetl) ให้ get ข้อมูลสถานะรายการและผู้ดำเนินการ กลับมา update ที่ tx_rig_act_hd ดังนี้Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Update ที่ tx_rig_act_hd.edw_statusReturn process_status_name จาก ms_ri_process_status.process_status_name ไป Update ที่ tx_rig_act_hd.edw_status_descReturn update_by จาก tx_ri_process_header.update_by ไป Update ที่ tx_rig_act_hd.updated_by
- Return ri_process_status_id จาก tx_ri_process_header.ri_process_status_id ไป Update ที่ tx_rig_act_hd.edw_status
- Return process_status_name จาก ms_ri_process_status.process_status_name ไป Update ที่ tx_rig_act_hd.edw_status_desc
- Return update_by จาก tx_ri_process_header.update_by ไป Update ที่ tx_rig_act_hd.updated_by

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Validation | Remark |
| responseCode | numeric | Require | Code ผลการ update ข้อมูล | 000 |  | if SUCCESS = 000if ERROR = 100 |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1320518106 | Functional Specification > 06. External Service Call Specification. > WS-RIG-002 API to EDWETL > 02 API Actual > WS-RIG-002-05 Select Reconcile EDW (Actual) =====
Overview
Input
Process
Output
Exception
Example Input & Output

## Overview
สำหรับดึงข้อมูลยอดสุทธิเพื่อเปรียบเทียบรายการจาก 2 ระบบคือ Group RI และ EDW (Actual)
Repositories : msa-adwetl
Service path
GET:  thaisamut
TYPE : <GET>
อธิบายได้ดังนี้
GET - Select
POST - Insert
PUT - Update
DELETE - Delete

## Input
<แสดงข้อมูล Parameter ที่ระบบนี้จะต้องส่งไปยัง external service>
| Name | Type | Require | Description | Example | Validation | Remark |
| ri_std_hd_id | numeric | Require | PK tx_ri_std_hd | 1 |  |  |

## Process
ดำเนินการดึง list ข้อมูลจาก tx_rig_act_hd โดยรับ Parameter ด้วย tx_ri_summary.ri_std_hd_id จาก msa-adwetl

## Output
<แสดงข้อมูลที่ได้รับจาก external service นี้>
| Name | Type | Require | Description | Example | Table | Field | Validation | Remark |
| actHd | numeric | Require | tx_rig_act_hd.rig_act_hd_id | 1 | tx_rig_act_hd | rig_act_hd_id |  |  |
| stdHd | numeric | Require | ID อ้างอิงจากระบบ EDW | 2 | tx_rig_act_hd | ri_std_hd_id |  |  |
| period | numeric | Require | งวดทำรายการ | 202404 | tx_rig_act_hd | period |  |  |
| reinsurerCode | vachar | Require | ชื่อบริษัท Reinsurer | Mapfre | tx_rig_act_hd.cf_reinsurer_id = cf_reinsurer.cf_reinsurer_id | cf_reinsurer.reinsurer_code |  |  |
| treatyCode | vachar | Require | ชื่อของ Treaty | Mapfre_Grp_CL_NonCBank | tx_rig_act_hd | treaty_code |  |  |
| sumPremium | numeric | Require | ค่า ri_premium จากการประมวลผลของ Treaty (ขาจ่าย) | 1,000 | tx_rig_act_hd | ri_premium |  |  |
| sumCommission | numeric | Require | ค่า ri_commission จากการประมวลผลของ Treaty (ขารับ) | 1,000 | tx_rig_act_hd | ri_commission |  |  |
| sumClaim | numeric | Require | ค่า claim_recovery จากการประมวลผลของ Treaty (ขารับ) | 0 | tx_rig_act_hd | claim_recovery |  |  |
| netAmount | numeric | Require | ยอดสุทธิ | 2,000 | tx_rig_act_hd | due_to |  |  |

## Exception
<อธิบายว่า มี exception อะไรที่ต้องจัดการหรือระวังบ้าง>

## Example Input & Output
- <ตัวอย่างที่ 1 เช่น การส่งข้อมูลแบบปกติ>
<ตัวอย่าง data เช่น รูปแบบของ SOAP message>
<ตัวอย่าง response data เช่น รูปแบบของ SOAP message>


===== PAGE 1317404826 | Functional Specification > 06. External Service Call Specification. > WS-RIG-003 สำหรับ Upload file to Share Path =====
Overview
Upload text file to Share Path
Protocol
Operation
Input
Process
Output

## Overview

### Upload text file to Share Path

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry>

## Input
|  | Name | Type | Description | Example | Validation |
|  | fileName | String | ชื่อไฟล์ | Premium_Movement_2026Q1.xlsx | Required |
|  | filePath | String | Directory path ที่จะนำไฟล์ไปวาง | \groupri\estimate\202601\report_reconcile | Required และสร้างได้ไม่เกิน 4 Levelตรวจสอบ Empty folderNameตรวจสอบ folderName ที่ส่งมากับ Path ต้องไม่เกิน 200 ตัวอักษร |
|  | fileContent | byte | text file ที่ต้องการไปวางที่ Share path |  | Requiredตรวจสอบขนาดไฟล์ไม่เกิน 10 MB |

## Process
หลังจากผ่านการ Validation แล้วให้ดำเนินการต่อดังนี้
- ตรวจสอบ Path file ที่ส่งมาว่ามีอยู่จริงหรือไม่ ถ้ายังไม่มีให้ทำการ Make Directory ตาม filePath
- หากพบว่ามี Directory อยู่แล้วให้ดำเนินการต่อ2.1 ตรวจสอบ fileName มีไฟล์ชื่อเดียวกันซ้ำกันหรือไม่ ถ้าซ้ำกัน ให้ทำการลบไฟล์เดิม และวางไฟล์ใหม่2.2 ตรวจสอบ fileName ถ้าไม่มีไฟล์ชื่อเดียวกันซ้ำกัน ให้ทำการวางไฟล์ใหม่ได้เลย
วางไฟล์ตาม config แยก environment
\\10.40.24.246\EDW\SIT\\10.40.24.246\EDW\UAT\\10.40.24.246\EDW\PROD

## Output
<แสดงข้อมูลที่จะได้รับจาก service นี้>
| Name | Type | Description | Example |
| status | Boolean | สถานะการทำรายการหากส่งไฟล์สำเร็จ = TRUEหากส่งไฟล์ไม่สำเร็จ = FALSE | TRUE |
| remark | String | กรณี Exception Error |  |


===== PAGE 1317896536 | Functional Specification > 06. External Service Call Specification. > WS-RIG-004 สำหรับ Download file from Share Path =====
Overview
Upload text file to Share Path
Protocol
Operation
Input
Process
Output

## Overview

### Upload text file to Share Path

## Protocol
<SOAP,HESSIAN,REST>

## Operation
refer : ESB WebService Design Pattern
TYPE : <inquiry>

## Input
|  | Name | Type | Description | Example | Validation |
|  | fileName | String | ชื่อไฟล์ | Premium_Movement_2026Q1.xlsx | Required |
|  | filePath | String | Directory path ที่จะนำไฟล์ไปวาง | \groupri\estimate\202601\report_reconcile | Required |

## Process
หลังจากผ่านการ Validation แล้วให้ดำเนินการต่อดังนี้
- ตรวจสอบ Path file ที่ส่งมาว่ามีอยู่จริงหรือไม่ ถ้ายังไม่มีให้ Exception Error
- หากพบว่ามี Directory อยู่แล้วให้ดำเนินการต่อ2.1 ตรวจสอบ fileName มีไฟล์ ตรงตามที่ระบุมาหรือไม่ ถ้าไม่ตรง Exception Error2.2 ตรวจสอบขนาดของไฟล์ ต้องไม่เกิน 10MB
Get ไฟล์ตาม config แยก environment
\\10.40.24.246\EDW\SIT\\10.40.24.246\EDW\UAT\\10.40.24.246\EDW\PROD
Get file จาก config+filePath+fileName

## Output
<แสดงข้อมูลที่จะได้รับจาก service นี้>
| Name | Type | Description | Example |
| status | Boolean | สถานะการทำรายการหากพบไฟล์ = TRUEหากไม่พบไฟล์ = FALSE | TRUE |
| file | File | Premium_Movement_2026Q1.xlsx |  |
| remark | String | กรณี Exception Error |  |


===== PAGE 1289389389 | Functional Specification > 03. User Interface Specification. =====
(empty page)


===== PAGE 1292239456 | Functional Specification > 03. User Interface Specification. > Report template (RP) =====
File ต้นทางจาก User https://drive.google.com/drive/folders/1U3VGr7qTYfTxm2O1C-6Tb_UdbZIZ55Rq
| Reconcile |  | Report Type |
| RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} |  | LND_STG |
| RIG-RP-002 Est_PremiumLayer_{YYYY}{MM} |  | EST_STG |
| RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-004 Alteration_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-005 Premium_Movement_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-006 MemberOverAge_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-007 InvestigationExpense_{YYYY}{QQ} |  | ACT_STG |
| RIG-RP-022 Est_MemberLayer_{YYYY}{MM} |  | EST_STG |
| RIG-RP-023 Act_MemberLayer_{YYYY}{QQ} |  | ACT_STG |
| Estimate |  | Report Type |
| RIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW) |  | EST_BDR |
| RIG-RP-011 SOA_Est_{YYYY}{MM} |  | EST_SOA |
| RIG-RP-012 I_Master_{YYYY}{MM} |  | EST_MPS |
| Actual |  | Report Type |
| RIG-RP-017 BDR Act - Gibraltar (Reinsurer) |  | ACT_BDR |
| RIG-RP-018 BDR Act Thaire (Reinsurer) |  | ACT_BDR |
| RIG-RP-019 BDR Act - Daiichi (Reinsurer) |  | ACT_BDR |
| RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) |  | ACT_BDR |
| RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) |  | ACT_BDR |
| RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} |  | ACT_SOA |
| Profit Comm |  | Report Type |
| RIG-RP-015 Profit Commission_EB_{YYYY} |  | ACT_PROFIT |
| RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} |  | ACT_PROFIT |
| RIG-RP-020 Allocation_Profit Commission_{YYYY} |  | ACT_PROFIT |


===== PAGE 1292239479 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955720345 {padding: 0px;}
div.rbtoc1782955720345 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955720345 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | Policy_{FROM}_{TO}_{TREATY} | xlsx | Policy_20240101_20241231_ALL |  |
| 06/05/2026 | suthanee.sa | Policy_{FROM}_{TO}_{TREATY}_V2 | xlsx |  | https://redmine.ochi.link/issues/53582 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูลกรมธรรม์ตามเงื่อนไข |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ BD-RC-000 หน้าจอ Reconcile Dataกดปุ่ม Download ที่รายการ List of Policyระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูลกดตกลงระบบ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |
- เข้าหน้าจอ RIG-SD-003 หน้าจอ Reconcile Data
- กดปุ่ม Download ที่รายการ List of Policy
- ระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล
- กดตกลง
- ระบบ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download
| No. | Name | Type (Source) | Size | Description | Table | Field |
| 1 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | tx_rig_landing_policy | re_insur_no |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_rig_landing_policy | policy_no |
| 3 | Commencement Date | date |  | วันเริ่มสัญญาครั้งแรก | tx_rig_landing_policy | first_date |
| 4 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | tx_rig_landing_policy | promise_date |
| 5 | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | tx_rig_landing_policy | expire_date |
| 6 | PolicyYear | numeric | 3 | ปีกรมธรรม์ | tx_rig_landing_policy | policy_year |
| 7 | PaymentMode | numeric | 1 | ประเภทการชำระเบี้ย | tx_rig_landing_policy | pay_type |
| 8 | PolicyName | varchar | 255 | ชื่อกรมธรรม์ (ชื่อบริษัท) | tx_rig_landing_policy | company_name_engif null then company_name |
| 9 | NatureOfBusiness | varchar | 255 | ประเภทธุรกิจ | tx_rig_nature_business | type_business_en <![CDATA[select trlp.policy_no,trnb.dbd_code,trnb.type_business_en from tx_rig_landing_policy trlp inner join tx_rig_landing_company trlc on trlp.policy_no = trlc.policy_no inner join tx_rig_nature_business trnb on trnb.dbd_code = trlc.dbdcode group by trlp.policy_no,trnb.dbd_code,trnb.type_business_en]]> |
| 10 | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_rig_landing_policy | policy_statusI,L,B,Cif 'I' then 'Inforce'if 'L' then 'Lapsed'if 'B' then 'New Business'if 'C' then 'Cancel' |
| 11 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI | tx_rig_landing_policy | แปลงค่าจาก tx_rig_landing_policy.policy_statustx_rig_landing_policy.policy_status in ('I','B')ถ้า tx_rig_landing_policy.expire_date => วันที่สิ้นเดือนของ Periodตรวจสอบ tx_rig_landing_policy.policy_year = 1 ให้บันทึกค่าเป็น 'New Business'ตรวจสอบ tx_rig_landing_policy.policy_year > 1 ให้บันทึกค่าเป็น 'Inforce'ถ้า tx_rig_landing_policy.expire_date < วันที่สิ้นเดือนของ tx_rig_landing_policy.period ให้บันทึกค่าเป็น 'Lapsed'tx_rig_landing_policy.policy_status in ('L') ให้บันทึกค่าเป็น 'Lapsed'tx_rig_landing_policy.policy_status in ('C') ให้บันทึกค่าเป็น 'Cancel' |
| 12 | LapseDate | date |  | วันที่ไม่ต่อสัญญา | tx_rig_landing_policy | lapse_date |
| 13 | PreviousPolicyNo | varchar | 8 | เลขกรมธรรม์เก่า | tx_rig_landing_policy | policy_no_old |
| 14 | ExperienceRefund | numeric | 1 | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่ | tx_rig_landing_policy | expreience_refund |
| 15 | TypePremiumRate (#CR_RATE Suthanee.sa 07/05/2026) | varchar | 10 | วิธีคิด Premium Rate | tx_rig_landing_policy | แปลงค่าจาก tx_rig_landing_policy.rate_flagtx_rig_landing_policy.rate_flag = 0 หรือ 2ตรวจสอบค่าใน cf_lookup_catalog.lookup_key ที่มี cf_lookup_catalog.parent_id = 1003400 แล้วให้นำค่า cf_lookup_catalog.description มาแสดงtx_rig_landing_policy.rate_flag = 1ตรวจสอบค่าใน tx_rig_landing_prem_rate.prem_rate_table_type โดยนำ tx_rig_landing_policy.policy_no = tx_rig_landing_prem_rate.policy_no และ tx_rig_landing_policy.promise_date = tx_rig_landing_prem_rate.promise_date |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Policy_{FROM}_{TO}_{TREATY} ใช้ข้อมูล{FROM} = tx_rig_landing_policy.promise_date จากหน้าจอ RIG-SD-003 หน้าจอ Reconcile Data{TO} = tx_rig_landing_policy.promise_date จากหน้าจอ RIG-SD-003 หน้าจอ Reconcile Data{TREATY} = lookup treaty_code จากหน้าจอ RIG-SD-003 หน้าจอ Reconcile Dataตัวอย่างเช่น: Policy_01022026_30022026_Thaireข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\landing\{period}\report_landing\Policy_{FROM}_{TO}_{TREATY}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145571 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-001 Policy_{FROM}_{TO}_{TREATY} > RIG-RP-001 Map =====
- เข้าหน้าจอ RIG-SD-003 หน้าจอ Reconcile Data
- กดปุ่ม Download ที่รายการ List of Policy
- ระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล
- กดตกลง
- ระบบ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download
| No. | Name | Type (Source) | Size | Description | Table | Field | alignment | Example |
| 1 | ReinsuredNo | varchar | 10 | เลขประกันภัยต่อ | tx_rig_landing_policy | re_insur_no | left | 1701001 |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_rig_landing_policy | policy_no | left | GH1663 |
| 4 | Commencement Date | date |  | วันเริ่มสัญญาครั้งแรก | tx_rig_landing_policy | first_date | center | 15/11/2006 |
| 6 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | tx_rig_landing_policy | promise_date | center | 15/11/2024 |
| 7 | EndDate | date |  | วันที่สิ้นสุดความคุ้มครองของปีกรมธรรม์นั้น | tx_rig_landing_policy | expire_date | center | 14/11/2025 |
| 3 | PolicyYear | numeric | 3 | ปีกรมธรรม์ | tx_rig_landing_policy | policy_year | right | 19 |
| 8 | PaymentMode | numeric | 1 | ประเภทการชำระเบี้ย | tx_rig_landing_policy | pay_type | left | Annual |
| 9 | PolicyName | varchar | 255 | ชื่อกรมธรรม์ (ชื่อบริษัท) | tx_rig_landing_policy | company_name_engif null then company_name | left | MEIKI ENGINEERING (THAILAND) COMPANY LIMITED |
| 10 | NatureOfBusiness | varchar | 255 | ประเภทธุรกิจ | tx_rig_nature_business | type_business_en <![CDATA[select trlp.policy_no,trnb.dbd_code,trnb.type_business_en from tx_rig_landing_policy trlp inner join tx_rig_landing_company trlc on trlp.policy_no = trlc.policy_no inner join tx_rig_nature_business trnb on trnb.dbd_code = trlc.dbdcode group by trlp.policy_no,trnb.dbd_code,trnb.type_business_en]]> | left | LOGISTIC |
| 11 | Status | varchar | 1 | สถานะของกรมธรรม์ จากประกันกลุ่ม | tx_rig_landing_policy | policy_statusI,L,B,C | left | Inforce |
| 12 | RIStatus | varchar | 50 | สถานะของกรมธรรม์ สำหรับ Group RI | tx_rig_landing_policy | แปลงค่าจาก tx_rig_landing_policy.policy_statustx_rig_landing_policy.policy_status in ('I','B')ถ้า tx_rig_landing_policy.expire_date => วันที่สิ้นเดือนของ Periodตรวจสอบ tx_rig_landing_policy.policy_year = 1 ให้บันทึกค่าเป็น 'New Business'ตรวจสอบ tx_rig_landing_policy.policy_year > 1 ให้บันทึกค่าเป็น 'Inforce'ถ้า tx_rig_landing_policy.expire_date < วันที่สิ้นเดือนของ tx_rig_landing_policy.period ให้บันทึกค่าเป็น 'Lapsed'tx_rig_landing_policy.policy_status in ('L') ให้บันทึกค่าเป็น 'Lapsed'tx_rig_landing_policy.policy_status in ('C') ให้บันทึกค่าเป็น 'Cancel' | left | Inforce |
| 13 | LapseDate | date |  | วันที่ไม่ต่อสัญญา | tx_rig_landing_policy | lapse_date | center | 14/11/2025 |
| 14 | PreviousPolicyNo | varchar | 8 | เลขกรมธรรม์เก่า | tx_rig_landing_policy | policy_no_old | left | GH1662 |
| 15 | ExperienceRefund | numeric | 1 | Flag กรมธรรม์มีสิทธิ์ได้รับ “เงินคืนตามประสบการณ์” หรือไม่ | tx_rig_landing_policy | expreience_refund | left | No |


===== PAGE 1292239755 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-002 Est_PremiumLayer_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955720746 {padding: 0px;}
div.rbtoc1782955720746 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955720746 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | Est_PremiumLayer_{YYYY}{MM} | xlsx | Est_PremiumLayer_202601 |  |
| 06/05/2026 | suthanee.sa | Est_PremiumLayer_{YYYY}{MM}_V2 | xlsx |  | https://redmine.ochi.link/issues/53585 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Estimate Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Estimate แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Estimate |
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขที่กรมธรรม์ | tx_stg_est_prem_layer | policy_no |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_est_prem_layer | effective_date |
| 3 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) | tx_stg_est_prem_layer | level |
| 4 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_life |
| 5 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_accident |
| 6 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_med_accident |
| 7 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_tpd |
| 8 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | life_insure |
| 9 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | accident_insure |
| 10 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | med_accident_insure |
| 11 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | tpd_insure |
| 12 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | life_prem_rate |
| 13 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | accident_prem_rate |
| 14 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | med_accident_prem_rate |
| 15 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | tpd_prem_rate |
| 16 | LifePremium | เบี้ยของความคุ้มครองชีวิต | tx_stg_est_prem_layer | life_prem |
| 17 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | tx_stg_est_prem_layer | life_extra_prem |
| 18 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_est_prem_layer | accident_prem |
| 19 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_est_prem_layer | accident_extra_prem |
| 20 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | tx_stg_est_prem_layer | med_accident_prem |
| 21 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | tx_stg_est_prem_layer | tpd_prem |
| 22 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | tx_stg_est_prem_layer | ipd_prem |
| 23 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | tx_stg_est_prem_layer | opd_prem |
| 24 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | tx_stg_est_prem_layer | dental_prem |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| List_of_Policy_Est_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: List_of_Policy_Est_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_reconcile\Est_PremiumLayer_{YYYY}{MM}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Level น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145573 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-002 Est_PremiumLayer_{YYYY}{MM} > RIG-RP-002 Map =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขที่กรมธรรม์ | tx_stg_est_prem_layer | policy_no | left | GH024 |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_est_prem_layer | effective_date | center | 01/01/2025 |
| 3 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) | tx_stg_est_prem_layer | level | left | L1 |
| 4 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_life | right | 117 |
| 5 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_accident | right | 117 |
| 6 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_med_accident | right | 11,700,000.00 |
| 7 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | amount_tpd | right | 11,700,000.00 |
| 8 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | life_insure | right | 11,700,000.00 |
| 9 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | accident_insure | right | 11,700,000.00 |
| 10 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | med_accident_insure | right | 11,700,000.00 |
| 11 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_est_prem_layer | tpd_insure | right | 11,700,000.00 |
| 12 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | life_prem_rate | right | 3.3 |
| 13 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | accident_prem_rate | right | 1.43 |
| 14 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | med_accident_prem_rate | right | 1.43 |
| 15 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | tx_stg_est_prem_layer | tpd_prem_rate | right | 1.43 |
| 16 | LifePremium | เบี้ยของความคุ้มครองชีวิต | tx_stg_est_prem_layer | life_prem | right | 38,610.00 |
| 17 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | tx_stg_est_prem_layer | life_extra_prem | right | 0 |
| 18 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_est_prem_layer | accident_prem | right | 16,731.00 |
| 19 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_est_prem_layer | accident_extra_prem | right | 0 |
| 20 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | tx_stg_est_prem_layer | med_accident_prem | right | 16,731.00 |
| 21 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | tx_stg_est_prem_layer | tpd_prem | right | 16,731.00 |
| 22 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | tx_stg_est_prem_layer | ipd_prem | right | 100,000.00 |
| 23 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | tx_stg_est_prem_layer | opd_prem | right | 100,000.00 |
| 24 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | tx_stg_est_prem_layer | dental_prem | right | 100,000.00 |


===== PAGE 1292239757 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955720736 {padding: 0px;}
div.rbtoc1782955720736 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955720736 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | Act_PremiumLayer_{YYYY}{QQ} | xlsx | Act_PremiumLayer_2026Q1 |  |
| 06/05/2026 | suthanee.sa | Act_PremiumLayer_{YYYY}{QQ}_V2 | xlsx |  | https://redmine.ochi.link/issues/53589 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Actual Premium Layer ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขที่กรมธรรม์ | tx_stg_act_prem_layer | policy_no |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_act_prem_layer | effective_date |
| 3 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) | tx_stg_act_prem_layer | level |
| 4 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_life |
| 5 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_accident |
| 6 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_med_accident |
| 7 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_tpd |
| 8 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | life_insure |
| 9 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | accident_insure |
| 10 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | med_accident_insure |
| 11 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | tpd_insure |
| 12 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | life_prem_rate |
| 13 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | accident_prem_rate |
| 14 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | med_accident_prem_rate |
| 15 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | tpd_prem_rate |
| 16 | LifePremium | เบี้ยของความคุ้มครองชีวิต | tx_stg_act_prem_layer | life_prem |
| 17 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | tx_stg_act_prem_layer | life_extra_prem |
| 18 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_act_prem_layer | accident_prem |
| 19 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_act_prem_layer | accident_extra_prem |
| 20 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | tx_stg_act_prem_layer | med_accident_prem |
| 21 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | tx_stg_act_prem_layer | tpd_prem |
| 22 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | tx_stg_act_prem_layer | ipd_prem |
| 23 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | tx_stg_act_prem_layer | opd_prem |
| 24 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | tx_stg_act_prem_layer | dental_prem |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| List_of_Policy_Act_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.period มาแสดง ตัวอย่างเช่น: List_of_Policy_Act_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\Act_PremiumLayer_{YYYY}{MM}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Level น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145575 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} > RIG-RP-003 Map =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขที่กรมธรรม์ | tx_stg_act_prem_layer | policy_no | left | GH024 |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_act_prem_layer | effective_date | center | 01/01/2025 |
| 3 | Level | การกำหนด Layer สำหรับการส่งประกันภัยต่อ (Reinsurance) | tx_stg_act_prem_layer | level | left | L1 |
| 4 | AmountLife | จำนวนสมาชิกที่มีทุนคุ้มครองชีวิต โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_life | right | 117 |
| 5 | AmountAccident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต และอายุไม่เกิน 70 ปีโดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_accident | right | 117 |
| 6 | AmountMedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_med_accident | right | 11,700,000.00 |
| 7 | AmountTPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | amount_tpd | right | 11,700,000.00 |
| 8 | LifeInsure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | life_insure | right | 11,700,000.00 |
| 9 | AccidentInsure | ทุนอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | accident_insure | right | 11,700,000.00 |
| 10 | MedAccidentInsure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | med_accident_insure | right | 11,700,000.00 |
| 11 | TPDInsure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์โดยแสดงผลในรูปแบบที่แบ่งตามระดับทุน (Level) | tx_stg_act_prem_layer | tpd_insure | right | 11,700,000.00 |
| 12 | LifePremiumRate | Rate เบี้ยของความคุ้มครองชีวิต ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | life_prem_rate | right | 3.3 |
| 13 | AccidentPremiumRate | Rate เบี้ยของความคุ้มครองอุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | accident_prem_rate | right | 1.43 |
| 14 | MedAccidentPremium Rate | Rate เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | med_accident_prem_rate | right | 1.43 |
| 15 | TPDPremiumRate | Rate เบี้ยของความคุ้มครองทุพพลภาพ ต่อ ทุน 1,000 บาท | tx_stg_act_prem_layer | tpd_prem_rate | right | 1.43 |
| 16 | LifePremium | เบี้ยของความคุ้มครองชีวิต | tx_stg_act_prem_layer | life_prem | right | 38,610.00 |
| 17 | LifeExtraPremium | เบี้ยของความคุ้มครองชีวิต (Extra) | tx_stg_act_prem_layer | life_extra_prem | right | 0 |
| 18 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_act_prem_layer | accident_prem | right | 16,731.00 |
| 19 | AccidentExtraPremium | เบี้ยของความคุ้มครองอุบัติเหตุ (Extra) ของสมาชิกทุกคนที่อายุไม่เกิน 70 ปี | tx_stg_act_prem_layer | accident_extra_prem | right | 0 |
| 20 | MedAccidentPremium | เบี้ยของความคุ้มครองค่ารักษาพยาบาล อุบัติเหตุ | tx_stg_act_prem_layer | med_accident_prem | right | 16,731.00 |
| 21 | TPDPremium | เบี้ยของความคุ้มครองทุพพลภาพ | tx_stg_act_prem_layer | tpd_prem | right | 16,731.00 |
| 22 | IPDPremium | เบี้ยของความคุ้มครองผู้ป่วยใน | tx_stg_act_prem_layer | ipd_prem | right | 100,000.00 |
| 23 | OPD Premium | เบี้ยของความคุ้มครองผู้ป่วยนอก | tx_stg_act_prem_layer | opd_prem | right | 100,000.00 |
| 24 | Dental Premium | เบี้ยของความคุ้มครองทันตกรรม | tx_stg_act_prem_layer | dental_prem | right | 100,000.00 |


===== PAGE 1292239765 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-004 Alteration_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955720740 {padding: 0px;}
div.rbtoc1782955720740 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955720740 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | Alteration_{YYYY}{QQ} | xlsx | Alteration_2026Q1 |  |
| 06/05/2026 | suthanee.sa | Alteration_{YYYY}{QQ}_V2 | xlsx |  | https://redmine.ochi.link/issues/53590 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Alteration ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
ประกอบด้วย 4 sheet ดังนี้
**Sheet name = Addition (tx_stg_act_alteration where alteration_status = 'A')
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex |
| 7 | Age | อายุ | tx_stg_act_alteration | age |
| 8 | AccidentSumInsured | จำนวนทุนชีวิต (อุบัติเหตุ) | tx_stg_act_alteration | sum_insured_accident |
**Sheet name = Termination (tx_stg_act_alteration where alteration_status in ('C','D'))
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex |
| 7 | Age | อายุ | tx_stg_act_alteration | age |
| 8 | AccidentSumInsured | จำนวนทุนชีวิต (อุบัติเหตุ) | tx_stg_act_alteration | sum_insured_accident |
**Sheet name = IncreasedSA (tx_stg_act_alteration where alteration_status = 'N')
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex |
| 7 | Age | อายุ | tx_stg_act_alteration | age |
| 8 | AccidentSumInsured_Before | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่มทุน | tx_stg_act_alteration | sum_insured_accident_before |
| 9 | AccidentSumInsured_After | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่มทุน | tx_stg_act_alteration | sum_insured_accident_after |
**Sheet name = DecreasedSA (tx_stg_act_alteration where alteration_status = 'E')
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex |
| 7 | Age | อายุ | tx_stg_act_alteration | age |
| 8 | AccidentSumInsured_Before | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนลด ทุน | tx_stg_act_alteration | sum_insured_accident_before |
| 9 | AccidentSumInsured_After | จำนวนทุนชีวิต (อุบัติเหตุ) หลังลด ทุน | tx_stg_act_alteration | sum_insured_accident_after |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Alteration_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.{year}'Q'{quarter} มาแสดง ตัวอย่างเช่น: Actual_Gibraltar_OverAge_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\Alteration_{YYYY}{QQ}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม DocumentDate จาก Oldest ไป Newest5. เรียงตาม AlterationDate จาก Oldest ไป Newest6. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145578 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-004 Alteration_{YYYY}{QQ} > RIG-RP-004 Map =====
ประกอบด้วย 4 sheet ดังนี้
Sheet name = Addition (tx_stg_act_alteration where alteration_status = 'A')
| No. | Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no | left |  |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date | center |  |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date | center |  |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date | center |  |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no | left |  |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex | left |  |
| 7 | Age | อายุ | tx_stg_act_alteration | age | right |  |
| 8 | AccidentSumInsured | จำนวนทุนชีวิต (อุบัติเหตุ) | tx_stg_act_alteration | sum_insured_accident | right |  |
Sheet name = Termination (tx_stg_act_alteration where alteration_status in ('C','D'))
| No. | Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no | left |  |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date | center |  |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date | center |  |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date | center |  |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no | left |  |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex | left |  |
| 7 | Age | อายุ | tx_stg_act_alteration | age | right |  |
| 8 | AccidentSumInsured | จำนวนทุนชีวิต (อุบัติเหตุ) | tx_stg_act_alteration | sum_insured_accident | right |  |
Sheet name = IncreasedSA (tx_stg_act_alteration where alteration_status = 'N')
| No. | Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no | left |  |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date | center |  |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date | center |  |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date | center |  |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no | left |  |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex | left |  |
| 7 | Age | อายุ | tx_stg_act_alteration | age | right |  |
| 8 | AccidentSumInsured_Before | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนเพิ่มทุน | tx_stg_act_alteration | sum_insured_accident_before | right |  |
| 9 | AccidentSumInsured_After | จำนวนทุนชีวิต (อุบัติเหตุ) หลังเพิ่มทุน | tx_stg_act_alteration | sum_insured_accident_after | right |  |
Sheet name = DecreasedSA (tx_stg_act_alteration where alteration_status = 'E')
| No. | Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_alteration | policy_no | left |  |
| 2 | DocumentDate | วันที่ทำรายการ | tx_stg_act_alteration | document_date | center |  |
| 3 | AlterationDate | วันที่มีผลบังคับของสลักหลัง | tx_stg_act_alteration | alteration_date | center |  |
| 4 | MemberEffectiveDate | วันเริ่มคุ้มครองของสมาชิก | tx_stg_act_alteration | member_effective_date | center |  |
| 5 | CertNo | หมายเลขสมาชิก | tx_stg_act_alteration | cert_no | left |  |
| 6 | Sex | เพศ | tx_stg_act_alteration | sex | left |  |
| 7 | Age | อายุ | tx_stg_act_alteration | age | right |  |
| 8 | AccidentSumInsured_Before | จำนวนทุนชีวิต (อุบัติเหตุ) ก่อนลด ทุน | tx_stg_act_alteration | sum_insured_accident_before | right |  |
| 9 | AccidentSumInsured_After | จำนวนทุนชีวิต (อุบัติเหตุ) หลังลด ทุน | tx_stg_act_alteration | sum_insured_accident_after | right |  |


===== PAGE 1312719106 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-005 Premium_Movement_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955729773 {padding: 0px;}
div.rbtoc1782955729773 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955729773 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | Premium_Movement_{YYYY}{QQ} | xlsx | Premium_Movement_2026Q1 |  |
| 06/05/2026 | suthanee.sa | Premium_Movement_{YYYY}{QQ}_V2 | xlsx |  | https://redmine.ochi.link/issues/53599 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Premium and Movement ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_prem_movement | policy_no |
| 2 | ReinsuredNo | เลขประกันภัยต่อ | tx_stg_act_prem_movement | reinsured_no |
| 3 | ModeOfPayment | ประเภทการชำระเบี้ยประกันภัย | tx_stg_act_prem_movement | payment_mode |
| 4 | PolicyYear | เลขกรมธรรม์ | tx_stg_act_prem_movement | policy_year |
| 5 | EffectiveDate | เลขประกันภัยต่อ | tx_stg_act_prem_movement | effective_date |
| 6 | EndDate | วันที่สิ้นสุด | tx_stg_act_prem_movement | end_date |
| 7 | Period | วันที่เริ่มงวด | tx_stg_act_prem_movement | period_date |
| 8 | Previous | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | tx_stg_act_prem_movement | no_mem_previous |
| 9 | Addition | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | tx_stg_act_prem_movement | no_mem_addition |
| 10 | Cancellation | จำนวนสมาชิกที่ลดลงใน Period นี้ | tx_stg_act_prem_movement | no_mem_cancellation |
| 11 | Total | จำนวนสมาชิกทั้งหมดใน Period นี้ | tx_stg_act_prem_movement | no_mem_total |
| 12 | Life | เบี้ยชีวิต | tx_stg_act_prem_movement | premium_life |
| 13 | Accident | เบี้ยอุบัติเหตุ | tx_stg_act_prem_movement | premium_accident |
| 14 | MedAccident | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | tx_stg_act_prem_movement | premium_med_acc |
| 15 | TPD | เบี้ย TPD | tx_stg_act_prem_movement | premium_tpd |
| 16 | E1 | เบี้ยชีวิต (Extra) | tx_stg_act_prem_movement | premium_e1 |
| 17 | IP | เบี้ย IPD | tx_stg_act_prem_movement | premium_ipd |
| 18 | OP | เบี้ย OPD | tx_stg_act_prem_movement | premium_opd |
| 19 | Dental | เบี้ย ทันตกรรม | tx_stg_act_prem_movement | premium_dental |
| 20 | MedicalTotal | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_stg_act_prem_movement | premium_med_total |
| 21 | Total | เบี้ยทั้งหมด | tx_stg_act_prem_movement | premium_total |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Premium_Movement_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.{year}'Q'{quarter} มาแสดง ตัวอย่างเช่น: Actual_Gibraltar_OverAge_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\Premium_Movement_{YYYY}{QQ}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Period น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145580 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-005 Premium_Movement_{YYYY}{QQ} > RIG-RP-005 Map =====
| No. | Name | Type (Source) | Size (Source) | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber |  |  | เลขกรมธรรม์ | tx_stg_act_prem_movement | policy_no | left |  |
| 2 | ReinsuredNo |  |  | เลขประกันภัยต่อ | tx_stg_act_prem_movement | reinsured_no | left |  |
| 3 | ModeOfPayment |  |  | ประเภทการชำระเบี้ยประกันภัย | tx_stg_act_prem_movement | payment_mode | left |  |
| 4 | PolicyYear |  |  | เลขกรมธรรม์ | tx_stg_act_prem_movement | policy_year | right |  |
| 5 | EffectiveDate |  |  | เลขประกันภัยต่อ | tx_stg_act_prem_movement | effective_date | center |  |
| 6 | EndDate |  |  | ประเภทการชำระเบี้ยประกันภัย | tx_stg_act_prem_movement | end_date | center |  |
| 7 | Period |  |  | วันที่เริ่มงวด | tx_stg_act_prem_movement | period_date | center |  |
| 8 | Previous |  |  | จำนวนสมาชิกทั้งหมดจาก Period ก่อนหน้า | tx_stg_act_prem_movement | no_mem_previous | right |  |
| 9 | Addition |  |  | จำนวนสมาชิกที่เพิ่มขึ้นใน Period นี้ | tx_stg_act_prem_movement | no_mem_addition | right |  |
| 10 | Cancellation |  |  | จำนวนสมาชิกที่ลดลงใน Period นี้ | tx_stg_act_prem_movement | no_mem_cancellation | right |  |
| 11 | Total |  |  | จำนวนสมาชิกทั้งหมดใน Period นี้ | tx_stg_act_prem_movement | no_mem_total | right |  |
| 12 | Life |  |  | เบี้ยชีวิต | tx_stg_act_prem_movement | premium_life | right |  |
| 13 | Accident |  |  | เบี้ยอุบัติเหตุ | tx_stg_act_prem_movement | premium_accident | right |  |
| 14 | MedAccident |  |  | เบี้ยค่ารักษาพยาบาลอุบัติเหตุ | tx_stg_act_prem_movement | premium_med_acc | right |  |
| 15 | TPD |  |  | เบี้ย TPD | tx_stg_act_prem_movement | premium_tpd | right |  |
| 16 | E1 |  |  | เบี้ยชีวิต (Extra) | tx_stg_act_prem_movement | premium_e1 | right |  |
| 17 | IP |  |  | เบี้ย IPD | tx_stg_act_prem_movement | premium_ipd | right |  |
| 18 | OP |  |  | เบี้ย OPD | tx_stg_act_prem_movement | premium_opd | right |  |
| 19 | Dental |  |  | เบี้ย ทันตกรรม | tx_stg_act_prem_movement | premium_dental | right |  |
| 20 | MedicalTotal |  |  | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_stg_act_prem_movement | premium_med_total | right |  |
| 21 | Total |  |  | เบี้ยทั้งหมด | tx_stg_act_prem_movement | premium_total | right |  |


===== PAGE 1312719108 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-006 MemberOverAge_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955729770 {padding: 0px;}
div.rbtoc1782955729770 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955729770 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine | Template jxls |
| 14/01/2026 | pongsathorn.pa | MemberOverAge_{YYYY}{QQ} | xlsx | MemberOverAge_2026Q1 |  |  |
| 06/05/2026 | suthanee.sa | MemberOverAge_{YYYY}{QQ}_V2 | xlsx |  | https://redmine.ochi.link/issues/53600 | MemberOverAge.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Member Over-age ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขกรมธรรม์ | tx_stg_act_member_over_age | policy_no |
| 2 | EffectiveDate | วันที่คุ้มครอง | tx_stg_act_member_over_age | effective_date |
| 3 | ModeOfPayment | ประเภทการชำระเบี้ย | tx_stg_act_member_over_age | payment_mode |
| 4 | CertNo | หมายเลขสมาชิก | tx_stg_act_member_over_age | cert_no |
| 5 | Age | อายุของผู้เอาประกัน | tx_stg_act_member_over_age | age |
| 6 | AccidentSumInsured | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_stg_act_member_over_age | accident_insure |
| 7 | AccidentPremium | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_stg_act_member_over_age | accident_premium |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| MemberOverAge_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.{year}'Q'{quarter} มาแสดง ตัวอย่างเช่น: Actual_Gibraltar_OverAge_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\MemberOverAge_{YYYY}{QQ}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145582 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-006 MemberOverAge_{YYYY}{QQ} > RIG-RP-006 Map =====
| No. | Name | Type (Source) | Size | Description | Table | Field | alignment | Example |
| 1 | PolicyNumber |  |  | เลขกรมธรรม์ | tx_stg_act_member_over_age | policy_no | left |  |
| 2 | EffectiveDate |  |  | วันที่คุ้มครอง | tx_stg_act_member_over_age | effective_date | center |  |
| 3 | ModeOfPayment |  |  | ประเภทการชำระเบี้ย | tx_stg_act_member_over_age | payment_mode | left |  |
| 4 | CertNo |  |  | หมายเลขสมาชิก | tx_stg_act_member_over_age | cert_no | left |  |
| 5 | Age |  |  | อายุของผู้เอาประกัน | tx_stg_act_member_over_age | age | right |  |
| 6 | AccidentSumInsured |  |  | ทุนอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_stg_act_member_over_age | accident_insure | right |  |
| 7 | AccidentPremium |  |  | เบี้ยของความคุ้มครองอุบัติเหตุของสมาชิกที่อายุเกิน 70 ปี | tx_stg_act_member_over_age | accident_premium | right |  |


===== PAGE 1312719110 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-007 InvestigationExpense_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955729763 {padding: 0px;}
div.rbtoc1782955729763 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955729763 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | InvestigationExpense_{YYYY}{QQ} | xlsx | InvestigationExpense_2026Q1 |  |
| 06/05/2026 | suthanee.sa | InvestigationExpense_{YYYY}{QQ}_V2 | xlsx |  | https://redmine.ochi.link/issues/53601 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Investigation expense ของกรมธรรม์ประกันกลุ่ม ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
| No. | Name | Type (Source) | Size | Description | Table | Field |
| 1 | ClaimNo | varchar | 20 | เลขที่สินไหมรับเรื่อง | tx_stg_act_investigation_expense | claim_no |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_stg_act_investigation_expense | policy_no |
| 3 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_act_investigation_expense | effective_date |
| 4 | CertNo | varchar | 20 | เลขที่สมาชิก | tx_stg_act_investigation_expense | cer_no |
| 5 | DocumentDate | date |  | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | tx_stg_act_investigation_expense | doc_date |
| 6 | InformDate | date |  | วันที่รับเรื่อง | tx_stg_act_investigation_expense | inform_date |
| 7 | ApprovedDate | date |  | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | tx_stg_act_investigation_expense | approved_date |
| 8 | ConsiderSeq | numeric | 5 | การพิจารณาเคลมครั้งที่ | tx_stg_act_investigation_expense | consider_seq |
| 9 | ClaimType | varchar |  | ประเภทเคลม | tx_stg_act_investigation_expense | claim_type |
| 10 | InvestigationExpense | numeric | 19,4 | ค่าใช้จ่ายรวม | tx_stg_act_investigation_expense | expense_amount |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| InvestigationExpense_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.{year}'Q'{quarter} มาแสดง ตัวอย่างเช่น: Actual_Gibraltar_OverAge_{YYYY}{MM}_202501ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\InvestigationExpense_{YYYY}{QQ}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม DocumentDate จาก Oldest ไป Newest5. เรียงตาม ApprovedDate จาก Oldest ไป Newest6. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1313145585 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-007 InvestigationExpense_{YYYY}{QQ} > RIG-RP-007 Map =====
| No. | Name | Type (Source) | Size | Description | Table | Field | alignment | Example |
| 1 | ClaimNo | varchar | 20 | เลขที่สินไหมรับเรื่อง | tx_stg_act_investigation_expense | claim_no | left |  |
| 2 | PolicyNo | varchar | 8 | เลขที่กรมธรรม์ | tx_stg_act_investigation_expense | policy_no | left |  |
| 3 | EffectiveDate | date |  | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_act_investigation_expense | effective_date | center |  |
| 4 | CertNo | varchar | 20 | เลขที่สมาชิก | tx_stg_act_investigation_expense | cer_no | left |  |
| 5 | DocumentDate | date |  | วันที่เอกสารบันทึกค่าใช้จ่ายส่งสอบ | tx_stg_act_investigation_expense | doc_date | center |  |
| 6 | InformDate | date |  | วันที่รับเรื่อง | tx_stg_act_investigation_expense | inform_date | center |  |
| 7 | ApprovedDate | date |  | วันที่ตรวจสอบ/ส่งงานต่อ/อนุมัติ | tx_stg_act_investigation_expense | approved_date | center |  |
| 8 | ConsiderSeq | numeric | 5 | การพิจารณาเคลมครั้งที่ | tx_stg_act_investigation_expense | consider_seq | right |  |
| 9 | ClaimType | varchar |  | ประเภทเคลม | tx_stg_act_investigation_expense | claim_type | left |  |
| 6 | InvestigationExpense | numeric | 19,4 | ค่าใช้จ่ายรวม | tx_stg_act_investigation_expense | expense_amount | right |  |


===== PAGE 1312719878 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955730319 {padding: 0px;}
div.rbtoc1782955730319 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955730319 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การแสดง Report file name
- 3 การแสดงชื่อ Report sheet
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดง Report detail
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine | Template jxls |
| 15/01/2026 | akkarawat.le | Est_Daiichi_{YYYY}{MM} | xlsx |  |  |  |
| 06/05/2026 | suthanee.sa | Est_Daiichi_{YYYY}{MM} | xlsx |  | https://redmine.ochi.link/issues/53607 | Est_Daiichi_BDR.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Dai-ichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-1 ตัวอย่าง output file - Estimate Daiichi |

## การแสดง Report file name
| การแสดงชื่อ File |
| Est_Daiichi_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_Daiichi_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| Est_Daiichi_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_Daiichi_202501_export (suthanee.sa 26/02/2026) |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_bdr\Est_Daiichi_{YYYY}{MM}.xlsx |

## การแสดง Report detail
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no |
| 2 | DG. No. |  | tx_rig_est_bdr | reinsurer_no |
| 3 | Comm. Date |  | tx_rig_est_bdr | ri_com_date |
| 4 | Eff.Date | วันที่คุ้มครอง | tx_rig_est_bdr | effective_date |
| 5 | Mode of Payment | ประเภทการชำระเบี้ยประกันภัย | tx_rig_est_bdr | mode_pay |
| 6 | 1st RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_1st_life |
| 7 | 1st RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_1st_add |
| 8 | 1st RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_1st_tpd |
| 9 | 1st RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_1st_med |
| 10 | 1st RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_1st_tot |
| 11 | Renewal RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_renew_life |
| 12 | Renewal RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_renew_add |
| 13 | Renewal RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_renew_tpd |
| 14 | Renewal RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_renew_med |
| 15 | Renewal RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_renew_tot |
| 16 | RI Claim Life | เคลมชีวิต | tx_rig_est_bdr | ri_claim_life |
| 17 | RI Claim AD&D | เคลมอุบัติเหตุ | tx_rig_est_bdr | ri_claim_add |
| 18 | RI Claim TPD | เคลมอุบัติเหตุทุพลภาพ | tx_rig_est_bdr | ri_claim_tpd |
| 19 | RI Claim Med | เคลมสุขภาพ | tx_rig_est_bdr | ri_claim_med |
| 20 | RI Claim Total | เคลมทั้งหมด | tx_rig_est_bdr | ri_claim_tot |
| 21 | Data Quarter |  | tx_rig_est_bdr | data_quarter |
| 22 | RI Period | รอบประมวลผล | tx_rig_est_bdr | period |
| 23 | Closing Period | Period ตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period |

## การเรียงลำดับข้อมูล
1. Group By ข้อมูลเบี้ยก่อน แล้วตามด้วย ข้อมูลเคลม2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1312719894 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW) > RIG-RP-008-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_Daiichi_{YYYY}{MM} | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Dai-ichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-1 ตัวอย่าง output file - Estimate Daiichi |


===== PAGE 1312719897 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-008 BDR Est_Daiichi_{YYYY}{MM} (EDW) > WS_RIG-RP-008 Output =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | DG. No. |  | tx_rig_est_bdr | reinsurer_no | left |  |
| 3 | Comm. Date |  | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 4 | Eff.Date | วันที่คุ้มครอง | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 5 | Mode of Payment | ประเภทการชำระเบี้ยประกันภัย | tx_rig_est_bdr | mode_pay | left | Quarterly |
| 6 | 1st RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_1st_life | right | 1,000.15 |
| 7 | 1st RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_1st_add | right | 1,000.15 |
| 8 | 1st RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_1st_tpd | right | 1,000.15 |
| 9 | 1st RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_1st_med | right | 1,000.15 |
| 10 | 1st RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_1st_tot | right | 1,000.15 |
| 11 | Renewal RI Premium Life | เบี้ยชีวิต | tx_rig_est_bdr | ri_prem_renew_life | right | 1,000.15 |
| 12 | Renewal RI Premium AD&D | เบี้ยอุบัติเหตุ | tx_rig_est_bdr | ri_prem_renew_add | right | 1,000.15 |
| 13 | Renewal RI Premium TPD | เบี้ย TPD | tx_rig_est_bdr | ri_prem_renew_tpd | right | 1,000.15 |
| 14 | Renewal RI Premium Med | เบี้ยค่ารักษาพยาบาลทั้งหมด | tx_rig_est_bdr | ri_prem_renew_med | right | 1,000.15 |
| 15 | Renewal RI Premium Total | เบี้ยทั้งหมด | tx_rig_est_bdr | ri_prem_renew_tot | right | 1,000.15 |
| 16 | RI Claim Life | เคลมชีวิต | tx_rig_est_bdr | ri_claim_life | right | 300,000.00 |
| 17 | RI Claim AD&D | เคลมอุบัติเหตุ | tx_rig_est_bdr | ri_claim_add | right | 300,000.00 |
| 18 | RI Claim TPD | เคลมอุบัติเหตุทุพลภาพ | tx_rig_est_bdr | ri_claim_tpd | right |  |
| 19 | RI Claim Med | เคลมสุขภาพ | tx_rig_est_bdr | ri_claim_med | right | 300,000.00 |
| 20 | RI Claim Total | เคลมทั้งหมด | tx_rig_est_bdr | ri_claim_tot | right |  |
| 21 | Data Quarter |  | tx_rig_est_bdr | data_quarter | center | 2018Q4 |
| 22 | RI Period | รอบประมวลผล | tx_rig_est_bdr | period | center | 201812 |
| 23 | Closing Period | Period ตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |


===== PAGE 1312719913 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955730707 {padding: 0px;}
div.rbtoc1782955730707 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955730707 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การแสดง Report file name
- 3 การแสดงชื่อ Report sheet
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดง Report detail
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 15/01/2026 | akkarawat.le | Est_GIB_YYYYMM | xlsx |  |  |
| 06/05/2026 | suthanee.sa | Est_GIB_YYYYMM | xlsx |  | https://redmine.ochi.link/issues/53610 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-6 ตัวอย่าง output file - Estimate GIB |

## การแสดง Report file name
| การแสดงชื่อ File |
| Est_GIB_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_GIB_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| Est_GIB_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_GIB_202501_export (suthanee.sa 26/02/2026) |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_bdr\Est_GIB_{YYYY}{MM}.xlsx |

## การแสดง Report detail
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period |

## การเรียงลำดับข้อมูล
1. Group By ข้อมูลเบี้ยก่อน แล้วตามด้วย ข้อมูลเคลม2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1312719923 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW) > RIG-RP-009-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | Est_GIB_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-6 ตัวอย่าง output file - Estimate GIB |


===== PAGE 1312719926 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-009 BDR Est_GIB_{YYYY}{MM} (EDW) > WS_RIG-RP-009 Output =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |


===== PAGE 1312719944 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955730714 {padding: 0px;}
div.rbtoc1782955730714 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955730714 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การแสดง Report file name
- 3 การแสดงชื่อ Report sheet
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดง Report detail
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine SA | Version Dev |
| 15/01/2026 | akkarawat.le | Est_Thaire_YYYYMM | xlsx |  |  | Est_Thaire_YYYYMM_export.xlsx |
| 06/05/2026 | suthanee.sa | Est_Thaire_YYYYMM | xlsx |  | https://redmine.ochi.link/issues/53641 |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Thaireนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-7 ตัวอย่าง output file - Estimate Thaire |

## การแสดง Report file name
| การแสดงชื่อ File |
| Est_Thaire_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_Thaire_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| Est_Thaire_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_est_bdr.closing_period มาแสดง ตัวอย่างเช่น: Est_Thaire_202501_export (suthanee.sa 26/02/2026) |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_bdr\Est_Thaire_{YYYY}{MM}.xlsx |

## การแสดง Report detail
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period |

## การเรียงลำดับข้อมูล
1. Group By ข้อมูลเบี้ยก่อน แล้วตามด้วย ข้อมูลเคลม2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314652811 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW) > RIG-RP-010-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark | Version Dev |
| 15/01/2026 | akkarawat.le | Est_Thaire_YYYYMM_export | xlsx |  | Est_Thaire_YYYYMM_export.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Estimate ของสัญญา Thaireนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-7 ตัวอย่าง output file - Estimate Thaire |


===== PAGE 1314423564 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-010 BDR Est_Thaire_{YYYY}{MM} (EDW) > WS_RIG-RP-010 Output =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_est_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_est_bdr | ri_com_date | center | 01/12/2018 |
| 3 | Eff.Date | วันที่มีผลของกรมธรรม์ | tx_rig_est_bdr | effective_date | center | 01/12/2018 |
| 4 | RI Premium Life | เบี้ยประกันภัยต่อ (RI Premium) ความคุ้มครองชีวิต | tx_rig_est_bdr | ri_prem_life | right | 1,000.15 |
| 5 | RI Premium Accident | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_prem_acc | right | 1,000.15 |
| 6 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | ri_comm_life | right | 1,000.15 |
| 7 | RI Commission Accident | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | ri_comm_acc | right | 1,000.15 |
| 8 | Event Date | วันที่เกิดเหตุการณ์ที่เกี่ยวข้องกับการเคลม | tx_rig_est_bdr | event_date | center | 01/12/2018 |
| 9 | Claim Recovery Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_est_bdr | recov_claim_life | right | 1,000.15 |
| 10 | Claim Recovery Accident | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_est_bdr | recov_claim_acc | right | 1,000.15 |
| 11 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | data_quarter | center | 2024Q4 |
| 12 | RI Period | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_est_bdr | period | center | 201812 |
| 13 | Closing Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_est_bdr | closing_period | center | 201812 |


===== PAGE 1312719951 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-011 SOA_Est_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955731855 {padding: 0px;}
div.rbtoc1782955731855 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955731855 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การแสดง Report file name
- 3 การแสดงชื่อ Report sheet
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดง Report detail
- 6 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 15/01/2026 | akkarawat.le | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx |  |
| 06/05/2026 | suthanee.sa | SOA_Est_GIB_YYYYMMSOA_Est_Thaire_YYYYMMSOA_Est_Daiichi_YYYYMM | xlsx | https://redmine.ochi.link/issues/57080 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล SOA RI Estimate ที่นำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |
| 4 | SRS | A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA FileA09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileA09-9 ตัวอย่าง output file - Thaire - Estimate SOA File |

## การแสดง Report file name
| การแสดงชื่อ File |
| ตรวจสอบ tx_rig_est_hd.treaty_codeถ้าเท่ากับ "DAI_Grp_Daiichi_Coins"SOA_Est_Daiichi_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd.closing_period มาแสดง ตัวอย่างเช่น: SOA_Est_Daiichi_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "GIB_Grp_Direct_EB"SOA_Est_GIB_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd .closing_period มาแสดงตัวอย่างเช่น: SOA_Est_GIB_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "THREL_Grp_PA"SOA_Est_Thaire_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd .closing_period มาแสดง ตัวอย่างเช่น: SOA_Est_Thaire_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตรวจสอบ tx_rig_est_hd.treaty_codeถ้าเท่ากับ "DAI_Grp_Daiichi_Coins"SOA_Est_Daiichi_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd .closing_period มาแสดง ตัวอย่างเช่น: SOA_Est_Daiichi_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "GIB_Grp_Direct_EB"SOA_Est_GIB_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd .closing_period มาแสดงตัวอย่างเช่น: SOA_Est_GIB_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "THREL_Grp_PA"SOA_Est_Thaire_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_est_hd .closing_period มาแสดง ตัวอย่างเช่น: SOA_Est_Thaire_202501_export (suthanee.sa 26/02/2026) |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_soa\SOA_Est_{YYYY}{MM}.xlsx |

## การแสดง Report detail
1. เงื่อนไขการสร้างไฟล์ของ Treaty
{TREATY_CODE} = DAI_Grp_Daiichi_Coins
DAI_Grp_Daiichi_Coins
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Daiichi_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Daiichi_202401
- YYYYMM = Closing Period
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
|  |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า Statement Account for October, 2024 | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Dai-Ichi Life Insurance Company Limited |  |
| {#005} | Group Reinsurance |  |
| {#006} | July 12, 2006 |  |
A09-2 ตัวอย่าง output file - Daiichi - Estimate SOA File
SOA_Est_Daiichi_YYYYMM
{TREATY_CODE} = THREL_Grp_PA
THREL_Grp_PA
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_Thaire_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_Thaire_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
ระบบจะแยกชีท SOA ตาม เดือนของกรมธรรม์ที่มีการชำระเบี้ย โดยอ้างอิงจาก Closing Period
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_Thaire_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional Group PA with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd.periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional Group PA with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | Thaire Life Assurance Public Co., Ltd. |  |
| {#005} | Group PA |  |
| {#006} | January 1, 2013 |  |
A09-9 ตัวอย่าง output file - Thaire - Estimate SOA File
SOA_Est_Thaire_YYYYMM
{TREATY_CODE} = GIB_Grp_Direct_EB
GIB_Grp_Direct_EB
รูปแบบการตั้งชื่อไฟล์ SOA
- ชื่อไฟล์ "SOA_Est_GIB_YYYYMM" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401
- YYYYMM = Closing Period
การแสดงข้อมูลและการสร้างชีทในไฟล์
- ชื่อชีท "SOA_Est_GIB_YYYYMM_MXX" โดย YYYYMM คือ รอบประมวลผล เช่น SOA_Est_GIB_202401_M01ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ตัวอย่าง tx_rig_est_hd.closing_period Period = 202401กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- กรณีกรมธรรม์ที่มีการชำระเบี้ย (Premium) ระบบจะพิจารณาจาก Eff Date ของกรมธรรม์เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- เดือนและปีของ tx_rig_est_soa_hd.period = 202401 → RI Period = 202401ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M01
- เดือนและปีของ tx_rig_est_soa_hd.period = 202312 → RI Period = 202312ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
- ชีทแสดงในไฟล์ SOA_Est_GIB_202401_M12
ส่วนของ Header
| Estimated Account |  |  |  |  |  |  |  |  |  |  | TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL |
| Statement of Account |
| for {#001} |
| (Additional EB Group with Comm. Date falling in {#001}) |
| No. {#002} |  |  |  |  |  |  |  |  |  | Date : | {#003} |
| Reinsurer : {#004} |  |  |  |  |  |  |  |  | Currency : THB |
| Treaty : {#005} |  |  |  |  |  |  |  |  | Ceding company : Ocean Life |
| Treaty Effective date : {#006} |  |  |  |  |  |  |  |  |  |  |
|  |  |  |
| {#001} | Month , Year จะเปลี่ยนไปตามเดือน tx_rig_est_soa_hd .periodเป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202410 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in October, 2024)เป็นไฟล์ SOA ของกรมธรรม์ที่ชำระเบี้ย และ Eff Date 202409 จะต้องแสดงว่า (Additional EB Group with Comm. Date falling in September, 2024) (suthanee.sa 05/03/2026) | October, 2024 |
| {#002} | YYYY.MM จะเปลี่ยนไปตามเดือน tx_rig_est_hd.closing_periodเช่น Closing 202410 จะต้องแสดงว่า 2024.10 | 2024.10 |
| {#003} | แสดงวันที่ปัจจุบันที่ดึงรายงาน | 01-Nov-2024 |
| {#004} | The Gibraltar Life Insurance Co., Ltd. |  |
| {#005} | Group Reinsurance Business (EB Group) |  |
| {#006} | January 1, 2017 |  |
A09-8 ตัวอย่าง output file - Gibraltar - Estimate SOA FileSOA_Est_GIB_YYYYMM
2. Mapping File
| DUE TO REINSURER (Cr.) | DUE FROM REINSURER (Dr.) |
| Reinsurance premium : | New Business | - LIFE | prem_new_life | Commission : | 1 st yr. | - LIFE | comm_new_life |
|  |  | - AD&D | prem_new_add |  |  | - AD&D | comm_new_add |
|  |  | - TPD | prem_new_tpd |  |  | - TPD | comm_new_tpd |
|  |  | - TTD | prem_new_ttd |  |  | - TTD | comm_new_ttd |
|  |  | - MEDICAL | prem_new_medical |  |  | - MEDICAL | comm_new_medical |
|  | TOTAL | prem_new_total |  | TOTAL | comm_new_total |
|  | Renewal Business | - LIFE | prem_renew_1y_life |  | Renewal | - LIFE | comm_renew_life |
|  | (1 st yr.) | - AD&D | prem_renew_1y_add |  |  | - AD&D | comm_renew_add |
|  |  | - TPD | prem_renew_1y_tpd |  |  | - TPD | comm_renew_tpd |
|  |  | - TTD | prem_renew_1y_ttd |  |  | - TTD | comm_renew_ttd |
|  |  | - MEDICAL- | prem_renew_1y_medical |  |  | - MEDICAL | comm_renew_medical |
|  | TOTAL | prem_renew_1y_total |  | TOTAL | comm_renew_total |
|  | Renewal Business | - LIFE | prem_renew_life | Premium Refund : | 1 st yr. | - LIFE | prem_refund_new_life |
|  | (Renewal) | - AD&D | prem_renew_add |  |  | - AD&D | prem_refund_new_add |
|  |  | - TPD | prem_renew_tpd |  |  | - TPD | prem_refund_new_tpd |
|  |  | - TTD | prem_renew_ttd |  |  | - TTD | prem_refund_new_ttd |
|  |  | - MEDICAL | prem_renew_medical |  |  | - MEDICAL | prem_refund_new_medical |
|  | TOTAL | prem_renew_total |  | TOTAL | prem_refund_new_total |
| Commission Refund : | 1 st yr. | - LIFE | comm_refund_new_life |  | Renewal | - LIFE | prem_refund_renew_life |
|  |  | - AD&D | comm_refund_new_add |  |  | - AD&D | prem_refund_renew_add |
|  |  | - TPD | comm_refund_new_tpd |  |  | - TPD | prem_refund_renew_tpd |
|  |  | - TTD | comm_refund_new_ttd |  |  | - TTD | prem_refund_renew_ttd |
|  |  | - MEDICAL | comm_refund_new_medical |  |  | - MEDICAL | prem_refund_renew_medical |
|  | TOTAL | comm_refund_new_total |  | TOTAL | prem_refund_renew_total |
|  | Renewal | - LIFE | comm_refund_renew_life |  | 1 st yr. Claim | - LIFE | prem_refund_new_claim_life |
|  |  | - AD&D | comm_refund_renew_add |  |  | - AD&D | prem_refund_new_claim_add |
|  |  | - TPD | comm_refund_renew_tpd |  |  | - TPD | prem_refund_new_claim_tpd |
|  |  | - TTD | comm_refund_renew_ttd |  |  | - TTD | prem_refund_new_claim_ttd |
|  |  | - MEDICAL | comm_refund_renew_medical |  |  | - MEDICAL | prem_refund_new_claim_medical |
|  | TOTAL | comm_refund_renew_total |  | TOTAL | prem_refund_new_claim_total |
|  | 1 st yr. Claim | - LIFE | comm_refund_new_claim_life |  | Renewal Claim | - LIFE | prem_refund_renew_claim_life |
|  |  | - AD&D | comm_refund_new_claim_add |  |  | - AD&D | prem_refund_renew_claim_add |
|  |  | - TPD | comm_refund_new_claim_tpd |  |  | - TPD | prem_refund_renew_claim_tpd |
|  |  | - TTD | comm_refund_new_claim_ttd |  |  | - TTD | prem_refund_renew_claim_ttd |
|  |  | - MEDICAL | comm_refund_new_claim_medical |  |  | - MEDICAL | prem_refund_renew_claim_medical |
|  | TOTAL | comm_refund_new_claim_total |  | TOTAL | prem_refund_renew_claim_total |
|  | Renewal Claim | - LIFE | comm_refund_renew_claim_life | Claim : | 1 st yr. | - LIFE | claim_new_life |
|  |  | - AD&D | comm_refund_renew_claim_add |  |  | - AD&D | claim_new_add |
|  |  | - TPD | comm_refund_renew_claim_tpd |  |  | - TPD | claim_new_tpd |
|  |  | - TTD | comm_refund_renew_claim_ttd |  |  | - TTD | claim_new_ttd |
|  |  | - MEDICAL | comm_refund_renew_claim_medical |  |  | - MEDICAL | claim_new_medical |
|  | TOTAL | comm_refund_renew_claim_total |  | TOTAL | claim_new_total |
| Revival Premiums | 1 st yr. | - LIFE | revival_prem_new_life |  | Renewal | - LIFE | claim_renew_life |
|  |  | - AD&D | revival_prem_new_add |  |  | - AD&D | claim_renew_add |
|  |  | - TPD | revival_prem_new_tpd |  |  | - TPD | claim_renew_tpd |
|  |  | - TTD | revival_prem_new_ttd |  |  | - TTD | claim_renew_ttd |
|  |  | - MEDICAL | revival_prem_new_medical |  |  | - MEDICAL | claim_renew_medical |
|  | TOTAL | revival_prem_new_total |  | TOTAL | claim_renew_total |
|  | Renewal | - LIFE | revival_prem_renew_life |  | Claim Expenses | - INVESTIGATION FEE | claim_exp_investigation_fee |
|  |  | - AD&D | revival_prem_renew_add |  |  | - LEGAL FEE | claim_exp_legal_fee |
|  |  | - TPD | revival_prem_renew_tpd |  |  | - MEDICAL EVIDENCE | claim_exp_med |
|  |  | - TTD | revival_prem_renew_ttd |  | TOTAL | claim_exp_total |
|  |  | - MEDICAL | revival_prem_renew_medical | Admin. Commission (Remittance) : | admin_comm_remittance |
|  | TOTAL | revival_prem_renew_total | Experience Refund Share : | experience_refund_share |
|  | Profit Commission : | profit_comm |
| SUB TOTAL | sub_total_due_to_reinsurer | SUB TOTAL | sub_total_due_from_reinsurer |
| DUE TO REINSURER | due_to_reinsurer | DUE FROM REINSURER | due_from_reinsurer |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314422840 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-012 I_Master_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955731627 {padding: 0px;}
div.rbtoc1782955731627 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955731627 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การแสดง Report file name
- 3 การแสดงชื่อ Report sheet
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดง Report detail
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 14/01/2026 | pongsathorn.pa | I_Master_{YYYY}{MM} | xlsx | I_Master_202601 |  |
| 06/05/2026 | suthanee.sa | I_Master_{YYYY}{MM} | xlsx |  | https://redmine.ochi.link/issues/57091 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับนำเข้าข้อมูล I-Master |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate |

## การแสดง Report file name
| การแสดงชื่อ File |
| ตรวจสอบ tx_rig_est_hd.treaty_codeถ้าเท่ากับ "DAI_Grp_Daiichi_Coins"I_Master_Est_Daiichi_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดง ตัวอย่างเช่น: I_Master_Est_Daiichi_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "GIB_Grp_Direct_EB"I_Master_Est_GIB_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดงตัวอย่างเช่น: I_Master_Est_GIB_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "THREL_Grp_PA"I_Master_Est_Thaire_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดง ตัวอย่างเช่น: I_Master_Est_Thaire_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตรวจสอบ tx_rig_est_hd.treaty_codeถ้าเท่ากับ "DAI_Grp_Daiichi_Coins"I_Master_Est_Daiichi_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดง ตัวอย่างเช่น: I_Master_Est_Daiichi_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "GIB_Grp_Direct_EB"I_Master_Est_GIB_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดงตัวอย่างเช่น: I_Master_Est_GIB_202501_export (suthanee.sa 26/02/2026)ถ้าเท่ากับ "THREL_Grp_PA"I_Master_Est_Thaire_{YYYY}{MM}_export ใช้ข้อมูลจาก tx_rig_process_hd.closing_period มาแสดง ตัวอย่างเช่น: I_Master_Est_Thaire_202501_export (suthanee.sa 26/02/2026)ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_mps\I_Master_{YYYY}{MM}.xlsx |

## การแสดง Report detail
เงื่อนไขการดึงข้อมูล
เลือกเฉพาะรายการที่มีเบี้ยเท่านั้น (Field ดังนี้ต้องไม่เป็น 0 หรือ NULL)
tx_rig_est_bdr.ri_prem_life, ri_prem_acc, ri_prem_1st_life, ri_prem_1st_add, ri_prem_1st_tpd, ri_prem_1st_med, ri_prem_1st_tot, ri_prem_renew_life, ri_prem_renew_add, ri_prem_renew_tpd, ri_prem_renew_med, ri_prem_renew_tot (ถ้ามีค่าใดค่าหนึ่งให้แสดงได้)
(Suthanee.sa 02/03/2026)
| No. | Name | Type (Source) | Table | Field |
| 1 | PolicyNumber | varchar | tx_rig_est_bdr | policy_no |
| 2 | PolicyYear | numeric | tx_rig_est_bdr | policy_year |
| 3 | RICommencementDate | date | tx_rig_est_bdr | effective_date (Suthanee.sa 26/02/2026) |
| 4 | TreatyCode | varchar | tx_rig_est_hd | treaty_code |
| 5 | RIMethod | varchar | tx_rig_est_hd | ri_method |
| 6 | RIPremiumLife | numeric | tx_rig_est_bdr | ri_prem_life |
| 7 | RIPremiumAccidentDeath | numeric | tx_rig_est_bdr | ri_prem_acc |
| 8 | RIPremiumMedAccident | numeric | 0 |  |
| 9 | RIPremiumTPD | numeric | 0 |  |
| 10 | RIPremiumIPD | numeric | 0 |  |
| 11 | RIPremiumOPD | numeric | 0 |  |
| 12 | RIPremiumDental | numeric | 0 |  |
| 13 | RIPremiumOther | numeric | 0 |  |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314422857 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-012 I_Master_{YYYY}{MM} > RIG-RP-012 Map =====
| No. | Name | Type (Source) | Table | Field | alignment | Example |
| 1 | PolicyNumber | varchar | tx_rig_est_bdr | policy_no | left |  |
| 2 | PolicyYear | numeric | tx_rig_est_bdr | policy_year | left |  |
| 3 | Movement | varchar | NULL |  | left |  |
| 4 | RICommencementDate | date | tx_rig_est_bdr | ri_com_date | left |  |
| 5 | TreatyCode | varchar | tx_rig_est_hd | treaty_code | left |  |
| 6 | RIMethod | varchar | tx_rig_est_hd | ri_method | left |  |
| 7 | RIPremiumLife | numeric | tx_rig_est_bdr | ri_prem_life | right |  |
| 8 | RIPremiumAccidentDeath | numeric | tx_rig_est_bdr | ri_prem_acc | right |  |
| 9 | RIPremiumMedAccident | numeric | 0 |  | right |  |
| 10 | RIPremiumTPD | numeric | 0 |  | right |  |
| 11 | RIPremiumIPD | numeric | 0 |  | right |  |
| 12 | RIPremiumOPD | numeric | 0 |  | right |  |
| 13 | RIPremiumDental | numeric | 0 |  | right |  |
| 14 | RIPremiumOther | numeric | 0 |  | right |  |


===== PAGE 1314653042 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955731623 {padding: 0px;}
div.rbtoc1782955731623 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955731623 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Report template version
- การแสดง Report file name
- การกำหนด File Path File Path
- File Path
- Report template Description Sheet Name
- Sheet Name
- การเรียงลำดับข้อมูล
- การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 24/01/2026 | akkarawat.le | Act_GIB_YYYYQQ.xlsx | xlsx |  |
| 06/05/2026 | suthanee.sa | Act_GIB_YYYYQQ.xlsx | xlsx | https://redmine.ochi.link/issues/57202 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การแสดง Report file name
| การแสดงชื่อ File |
| Act_GIB_{YYYY}{QQ}ใช้ข้อมูล{YYYY} = tx_rig_act_hd.yearตัวอย่างเช่น:Act_GIB_2026Q1ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |  |
| \groupri\actual\{period}\report_bdr\Act_GIB_{YYYY}{QQ}.xlsx | {YYYY}{QQ} ได้มาจาก tx_rig_act_hd.closing_quarter |

## Report template Description
| Sheet Name |
| Act_GIB_{YYYY}{QQ}_export (suthanee.sa 26/02/2026) |
เงื่อนไขการออก Report
Group ข้อมูลตาม policy_no และตาม effective_date_from
และส่วนเคลมให้ SUM ข้อมูลตาม policy_no และตาม effective_date_from (เนื่องจากตอนออก BDR ต้องแยกตาม Period Approve แต่ EDW ต้องออก Record เดียว)
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_no (หมายเหตุ : Group ข้อมูลตาม policy_no และตาม effective_date_from) |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | first_date |
| 3 | Renewal Date | วันที่ต่อสัญญา | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | effective_date_from (หมายเหตุ : Group ข้อมูลตาม policy_no และตาม effective_date_from) |
| 4 | Policy Year | ปีกรมธรรม์ | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | (ปีของ effective_date_from - ปีของ first_date) +1 |
| 5 | RI NB Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีแรก | tx_rig_act_bdr_new_renew | ตรวจสอบ Policy Year ที่ได้จากข้อ 4ถ้า = 1 บันทึก tot_re_nb_prem_life + tot_re_ren_prem_lifeถ้า > 1 บันทึก 0 (หมายเหตุ : สาเหตุการนำ tot_re_nb_prem_life + tot_re_ren_prem_life มารวมกันเนื่องจาก Field รองรับ Policy Year ที่ถูกคำนวณมาจากวันที่เริ่มต้นสัญญาจริง ซึ่งอาจจะนานกว่าวันที่เริ่มต้นสัญญาครั้งแรกที่ GIB รับรู้ ทำให้มีโอกาสที่ข้อมูลจะไปลงที่ Field Renew และค่า nb เป็น 0 แต่เมื่อมาเช็กปีกรมของ GIB อาจจะเป็นปีแรกได้ แต่ถึงอย่างไรตอนที่ลง Field จะมีค่าใดค่าหนึ่งเป็น 0 เสมอ จึงนำมาบวกกันได้ (สาเหตุเดียวกันกับข้อ 6 7 8) |
| 6 | RI NB Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีแรก | tx_rig_act_bdr_new_renew | ตรวจสอบ Policy Year ที่ได้จากข้อ 4ถ้า = 1 บันทึก tot_re_nb_prem_add + tot_re_ren_prem_addถ้า > 1 บันทึก 0 |
| 7 | RI Renewal Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีต่อ | tx_rig_act_bdr_new_renew | ตรวจสอบ Policy Year ที่ได้จากข้อ 4ถ้า = 1 บันทึก 0ถ้า > 1 บันทึก tot_re_nb_prem_life + tot_re_ren_prem_life |
| 8 | RI Renewal Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีต่อ | tx_rig_act_bdr_new_renew | ตรวจสอบ Policy Year ที่ได้จากข้อ 4ถ้า = 1 บันทึก 0ถ้า > 1 บันทึก tot_re_nb_prem_add + tot_re_ren_prem_add |
| 9 | RI Revival Premium Life |  | tx_rig_act_bdr_new_renew | tot_re_rev_prem_life |
| 10 | RI Revival Premium AD&D |  | tx_rig_act_bdr_new_renew | tot_re_rev_prem_add |
| 11 | RI Refund Premium Life |  | tx_rig_act_bdr_new_renew | tot_re_refund_prem_life |
| 12 | RI Refund Premium AD&D |  | tx_rig_act_bdr_new_renew | tot_re_refund_prem_add |
| 13 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr_new_renew | tot_com_life + tot_com_refund_life (suthanee.sa 07/04/2026) |
| 14 | RI Commission AD&D | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr_new_renew | tot_com_add + tot_com_refund_add (suthanee.sa 07/04/2026) |
| 15 | RI Claim Paid Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr_claim | tot_re_claim_paid_life(หมายเหตุ : SUM ข้อมูลตาม policy_no และตาม effective_date_from) |
| 16 | RI Claim Paid AD&D | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr_claim | tot_re_claim_paid_add(หมายเหตุ : SUM ข้อมูลตาม policy_no และตาม effective_date_from) |
| 17 | RI Claim Paid Dismemberment |  | tx_rig_act_bdr_claim | tot_re_claim_paid_dismem + tot_re_claim_paid_tpd(หมายเหตุ : SUM ข้อมูลตาม policy_no และตาม effective_date_from) |
| 18 | RI Claim Investigation & Legal Expense |  | tx_rig_act_bdr_claim | tot_re_inv(หมายเหตุ : SUM ข้อมูลตาม policy_no และตาม effective_date_from) |
| 19 | Experience Refund Life |  | tx_rig_act_bdr_new_renew | re_ex_refund_life |
| 20 | Experience Refund AD&D |  | tx_rig_act_bdr_new_renew | re_ex_refund_acc |
| 21 | Claim Return Premium |  |  | 0 |
| 22 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_hd | closing_quarter |
| 23 | RI Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claimtx_rig_act_bdr_alter | policy_period |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314653047 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) > RIG-RP-013-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 22/01/2026 | akkarawat.le | Act_GIB_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual |


===== PAGE 1314653051 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-013 BDR Act_GIB_{YYYY}{QQ} (EDW) > WS_RIG-RP-013 Output =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_act_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_act_bdr | ri_com_date | left | 01/12/2018 |
| 3 | Renewal Date |  | tx_rig_act_bdr |  | left | 01/12/2018 |
| 4 | Policy Year | ปีกรมธรรม์ | tx_rig_act_bdr | policy_year | right | 1,000.15 |
| 5 | RI NB Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีแรก | tx_rig_act_bdr |  | right | 1,000.15 |
| 6 | RI NB Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีแรก | tx_rig_act_bdr |  | right | 1,000.15 |
| 7 | RI Renewal Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีต่อ | tx_rig_act_bdr |  | right | 1,000.15 |
| 8 | RI Renewal Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีต่อ | tx_rig_act_bdr |  | right | 1,000.15 |
| 9 | RI Revival Premium Life |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 10 | RI Revival Premium AD&D |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 11 | RI Refund Premium Life |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 12 | RI Refund Premium AD&D |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 13 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr |  | right | 1,000.15 |
| 14 | RI Commission AD&D | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr |  | right | 1,000.15 |
| 15 | RI Claim Paid Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr |  | right | 1,000.15 |
| 16 | RI Claim Paid AD&D | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr |  | right | 1,000.15 |
| 17 | RI Claim Paid Dismemberment |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 18 | RI Claim Investigation & Legal Expense |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 19 | Experience Refund Life |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 20 | Experience Refund AD&D |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 21 | Claim Return Premium | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_bdr |  | right | 1,000.15 |
| 22 | Data Quarter | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_bdr | data_quarter | left | 2024Q4 |
| 23 | RI Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_act_bdr | period | left | 201812 |


===== PAGE 1314653061 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955732118 {padding: 0px;}
div.rbtoc1782955732118 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955732118 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Report template version
- การแสดง Report file name
- การกำหนด File Path File Path
- File Path
- Report template Description Sheet Name
- Sheet Name
- การเรียงลำดับข้อมูล
- การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 24/01/2026 | akkarawat.le | Act_Thaire_YYYYQQ | xlsx |  |
| 06/05/2026 | suthanee.sa | Act_Thaire_YYYYQQ | xlsx | https://redmine.ochi.link/issues/57203 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การแสดง Report file name
| การแสดงชื่อ File |
| Act_Thaire_{YYYY}{QQ}ใช้ข้อมูล{YYYY} = tx_rig_act_hd.yearตัวอย่างเช่น:Act_Thaire_2026Q1ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |  |
| \groupri\actual\{period}\report_bdr\Act_Thaire_{YYYY}{QQ}.xlsx | {YYYY}{QQ} ได้มาจาก tx_rig_act_hd.closing_quarter |

## Report template Description
| Sheet Name |
| Act_Thaire_{YYYY}{QQ}_export (suthanee.sa 26/02/2026) |
| No. | Column Name | Description | Table | Field |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_act_policy_hd | policy_no |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_act_policy_hd | ri_com_date |
| 3 | Renewal Date | วันที่ต่อสัญญา | tx_rig_act_policy_hd | effective_date |
| 4 | Policy Year | ปีกรมธรรม์ | tx_rig_act_policy_hd | policy_year |
| 5 | RI NB Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีแรก | tx_rig_act_bdr_new_renew | tot_re_nb_prem_life |
| 6 | RI NB Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีแรก | tx_rig_act_bdr_new_renew | tot_re_nb_prem_add |
| 7 | RI Renewal Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีต่อ | tx_rig_act_bdr_new_renew | tot_re_ren_prem_life |
| 8 | RI Renewal Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีต่อ | tx_rig_act_bdr_new_renew | tot_re_ren_prem_add |
| 9 | RI Revivals Premium Life |  | tx_rig_act_bdr_new_renew | tot_re_rev_prem_life |
| 10 | RI Revivals Premium AD&D |  | tx_rig_act_bdr_new_renew | tot_re_rev_prem_add |
| 11 | RI Refund Premium Life |  | tx_rig_act_bdr_new_renew | tot_re_refund_prem_life |
| 12 | RI Refund Premium AD&D |  | tx_rig_act_bdr_new_renew | tot_re_refund_prem_add |
| 13 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr_new_renew | tot_com_life - tot_com_refund_life |
| 14 | RI Commission AD&D | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr_new_renew | tot_com_add - tot_com_refund_add |
| 15 | RI Claim Paid Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr_claim | sum_re_claim_life |
| 16 | RI Claim Paid AD&D | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr_claim | sum_re_claim_acc + sum_re_claim_dismem (suthanee.sa 01/04/2026) |
| 17 | RI Claim Investigation & Legal Expense |  | tx_rig_act_bdr_claim | tot_re_inv |
| 18 | Claim Return Premium |  |  | 0 |
| 19 | Claim Recovery Date |  |  | null |
| 20 | Data Quarter | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_hd | closing_quarter |
| 21 | RI Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_act_bdr_new_renewtx_rig_act_bdr_claim | policy_period (suthanee.sa 23/04/2026) |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314653064 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) > RIG-RP-014-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 22/01/2026 | akkarawat.le | Act_Thaire_YYYYMM_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR RI Actual ของสัญญา Thaireนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual |


===== PAGE 1314653070 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} (EDW) > WS_RIG-RP-014 Output =====
| No. | Column Name | Description | Table | Field | alignment | Example |
| 1 | PolicyNo | เลขกรมธรรม์ | tx_rig_act_bdr | policy_no | left | GH4495 |
| 2 | RI Com.Date | วันเริ่มสัญญาครั้งแรก | tx_rig_act_bdr | ri_com_date | left | 01/12/2018 |
| 3 | Renewal Date |  | tx_rig_act_bdr |  | left | 01/12/2018 |
| 4 | Policy Year | ปีกรมธรรม์ | tx_rig_act_bdr | policy_year | right | 1,000.15 |
| 5 | RI NB Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีแรก | tx_rig_act_bdr |  | right | 1,000.15 |
| 6 | RI NB Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีแรก | tx_rig_act_bdr |  | right | 1,000.15 |
| 7 | RI Renewal Premium Life | เบี้ยประกันภัยต่อ ความคุ้มครองชีวิต ปีต่อ | tx_rig_act_bdr |  | right | 1,000.15 |
| 8 | RI Renewal Premium AD&D | เบี้ยประกันภัยต่อความคุ้มครองอุบัติเหตุเสียชีวิต ปีต่อ | tx_rig_act_bdr |  | right | 1,000.15 |
| 9 | RI Revival Premium Life |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 10 | RI Revival Premium AD&D |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 11 | RI Refund Premium Life |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 12 | RI Refund Premium AD&D |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 13 | RI Commission Life | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr |  | right | 1,000.15 |
| 14 | RI Commission AD&D | จำนวนค่าคอมมิชชั่นที่ Reinsurer ชำระคืนให้บริษัท สำหรับเบี้ยประกันภัยต่อในส่วนอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr |  | right | 1,000.15 |
| 15 | RI Claim Paid Life | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองชีวิต | tx_rig_act_bdr |  | right | 1,000.15 |
| 16 | RI Claim Paid AD&D | จำนวนเงินค่าสินไหมที่บริษัทสามารถเรียกคืนจาก Reinsurer ในส่วนความคุ้มครองอุบัติเหตุเสียชีวิต/สูญเสียอวัยวะ | tx_rig_act_bdr |  | right | 1,000.15 |
| 17 | RI Claim Investigation & Legal Expense |  | tx_rig_act_bdr |  | right | 1,000.15 |
| 18 | Claim Return Premium | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_bdr |  | right | 1,000.15 |
| 19 | Data Quarter | รอบเดือนปีของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_bdr | data_quarter | left | 2024Q4 |
| 20 | RI Period | รอบประมวลผลตามรอบปิดบัญชี | tx_rig_act_bdr | period | left | 201812 |
| 21 | Claim Return Premium | Quarter ของข้อมูลที่ใช้ในการรายงาน | tx_rig_act_bdr |  | right | 1,000.15 |


===== PAGE 1314653098 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-015 Profit Commission_EB_{YYYY} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955732953 {padding: 0px;}
div.rbtoc1782955732953 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955732953 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version 1.1 การแสดงข้อมูล Output : Report Header 1.2 การแสดงข้อมูล Output : Report Detail
- 1.1 การแสดงข้อมูล Output : Report Header
- 1.2 การแสดงข้อมูล Output : Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การแสดง Report detail
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 03/02/2026 | pongsathorn.pa | Profit Commission_EB_{YYYY} | xlsx | Profit Commission_EB_2026 |
| 06/05/2026 | suthanee.sa | Profit Commission_EB_{YYYY} | xlsx | https://redmine.ochi.link/issues/57216 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (quarter_year, treaty)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |
- การแสดงข้อมูล Output : Report Headerแสดงข้อมูล Report Headerเงื่อนไขการ Mapping ข้อมูลHeader1Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED"Header2Fix "Profit Commission"ReinsuranceFix "To : The Gibraltar Life Insurance Co., Ltd."UnitFix "Unit: Baht"
- การแสดงข้อมูล Output : Report DetailNo.Column NameDescription/ConditionsTableFieldFormat/AlignmentExample1Header: Incomes2Yearแสดง Year {YYYY}tx_rig_act_hdyearcenter/boldYear 20243(1) Unearned premium at the beginning of the current year;เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ ต้นปีบัญชีปัจจุบัน (Unearned Premium ต้นงวด)tx_rig_profit_communearn_prem_beginright/bold8,887,113.654(2) Reserves for outstanding claims at the beginning of the current year (if any);เงินสำรองค่าสินไหมค้างจ่าย ณ ต้นปีบัญชีปัจจุบัน (ถ้ามี)tx_rig_profit_commreserve_claim_beginright/bold0.005(3) Net premium income after deducting premium refunds for the current year;เบี้ยประกันสุทธิของปีปัจจุบัน หลังหักเบี้ยคืน (Refund Premium) แล้วtx_rig_profit_commsum_premright/bold15,797,083.076Total (A)ผลรวมของรายได้ทั้งหมดในส่วน Incomestx_rig_profit_commtotal_incomeright/bold24,684,196.722Header: Outgoes8(4) Claims, Investigation and legal expenses paid (Inclusive of those paid by special remittances,if any) in the current year;ค่าสินไหม ค่าตรวจสอบ และค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในปีปัจจุบันรวมถึงรายการที่จ่ายผ่านช่องทางพิเศษ (ถ้ามี)tx_rig_profit_commsum_claimright/bold6,572,545.209(5) Business expenses of the Reinsurer for the current year ((3) x 10%);ค่าใช้จ่ายในการดำเนินงานของ Reinsurerคำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (5) Business expenses of the Reinsurer for the current year ((3) x 10%);การแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses%tx_rig_profit_commsum_prem_adminright/bold1,579,708.3110(6) Unearned premium at the end of the current year ((3) x 50%);เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปีคำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (6) Unearned premium at the end of the current year ((3) x 50%);การแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums%tx_rig_profit_commsum_prem_unearnright/bold7,898,541.5411(7) Reserves for outstanding claims at the end of the year (if any);เงินสำรองค่าสินไหมค้างจ่าย ณ สิ้นปี (ถ้ามี)tx_rig_profit_commreserve_claim_endright/bold0.0012(8) Reinsurance Commission paid during the year;ค่านายหน้าประกันต่อที่จ่ายให้ Reinsurer ในปีนั้นtx_rig_profit_commsum_commright/bold7,898,542.6513(9) Reinsurance Experience Refund for original GLI paid in the current year;เงิน Experience Refund ที่บริษัทรับประกันต่อจ่ายคืนให้ สำหรับกรมธรรม์ GLI ในปีปัจจุบันtx_rig_profit_commsum_experienceright/bold57,159.1714(10) Negative net balance of the Incomes and Outgoes carried over from the previous year (if any);ยอดขาดทุนสุทธิ (ถ้ามี) ที่ยกมาจากการคำนวณของปีก่อนหน้าtx_rig_profit_commnegative_net_balanceright/bold3,662,427.8115Total (B)ผลรวมของรายจ่ายทั้งหมดในส่วน Outgoestx_rig_profit_commtotal_outgoesright/bold27,668,924.6816Net balance of Incomes and Outgoes ( A - B )ผลต่างสุทธิระหว่างรายได้และรายจ่ายtx_rig_profit_commnet_balanceright/bold-2,984,727.9617Rate of experience refundอัตราส่วนแบ่งกำไร (Profit Commission Rate) ตามสัญญาประกันต่อtx_rig_profit_commpercent_profit_commcenter/bold50%18Experience Refund for current yearจำนวนเงิน Profit Commission ที่ Reinsurer ต้องจ่ายคืนสำหรับปีปัจจุบันtx_rig_profit_commnet_profit_commright/bold0.00
- ค่าใช้จ่ายในการดำเนินงานของ Reinsurer
- คำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)
- ส่วน template การแสดงผล (5) Business expenses of the Reinsurer for the current year ((3) x 10%);การแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses%
- การแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses%
- เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปี
- คำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)
- ส่วน template การแสดงผล (6) Unearned premium at the end of the current year ((3) x 50%);การแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums%
- การแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums%

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Profit Commission_EB_{YYYY} ใช้ข้อมูล{YYYY} = tx_rig_act_hd.yearตัวอย่างเช่น: Profit Commission_EB_2026ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_profit\Profit Commission_EB_{YYYY}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314653115 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-015 Profit Commission_EB_{YYYY} > RIG-RP-015-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 03/02/2026 | pongsathorn.pa | Profit Commission_EB_{YYYY} | xlsx | Profit Commission_EB_2026 |
| 06/05/2026 | suthanee.sa | Profit Commission_EB_{YYYY} | xlsx | https://redmine.ochi.link/issues/57216 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (quarter_year, treaty)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1314653102 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-015 Profit Commission_EB_{YYYY} > RIG-RP-015-02 Output Header =====
| แสดงข้อมูล Report Header | เงื่อนไขการ Mapping ข้อมูล |
| Header1 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED" |
| Header2 | Fix "Profit Commission" |
| Reinsurance | Fix "To : The Gibraltar Life Insurance Co., Ltd." |
| Unit | Fix "Unit: Baht" |


===== PAGE 1314653105 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-015 Profit Commission_EB_{YYYY} > WS_RIG-RP-015 Output =====
| No. | Column Name | Description/Conditions | Table | Field | Format/Alignment | Example |
| 1 | Header: Incomes |
| 2 | Year | แสดง Year {YYYY} | tx_rig_act_hd | year | center/bold | Year 2024 |
| 3 | (1) Unearned premium at the beginning of the current year; | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ ต้นปีบัญชีปัจจุบัน (Unearned Premium ต้นงวด) | tx_rig_profit_comm | unearn_prem_begin | right/bold | 8,887,113.65 |
| 4 | (2) Reserves for outstanding claims at the beginning of the current year (if any); | เงินสำรองค่าสินไหมค้างจ่าย ณ ต้นปีบัญชีปัจจุบัน (ถ้ามี) | tx_rig_profit_comm | reserve_claim_begin | right/bold | 0.00 |
| 5 | (3) Net premium income after deducting premium refunds for the current year; | เบี้ยประกันสุทธิของปีปัจจุบัน หลังหักเบี้ยคืน (Refund Premium) แล้ว | tx_rig_profit_comm | sum_prem | right/bold | 15,797,083.07 |
| 6 | Total (A) | ผลรวมของรายได้ทั้งหมดในส่วน Incomes | tx_rig_profit_comm | total_income | right/bold | 24,684,196.72 |
| 2 | Header: Outgoes |
| 8 | (4) Claims, Investigation and legal expenses paid (Inclusive of those paid by special remittances,if any) in the current year; | ค่าสินไหม ค่าตรวจสอบ และค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในปีปัจจุบันรวมถึงรายการที่จ่ายผ่านช่องทางพิเศษ (ถ้ามี) | tx_rig_profit_comm | sum_claim | right/bold | 6,572,545.20 |
| 9 | (5) Business expenses of the Reinsurer for the current year ((3) x 10%); | ค่าใช้จ่ายในการดำเนินงานของ Reinsurerคำนวณเป็น Administrative expenses% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (5) Business expenses of the Reinsurer for the current year ((3) x 10%);การแสดงค่า 10% ให้ดึงค่าจาก Administrative expenses% | tx_rig_profit_comm | sum_prem_admin | right/bold | 1,579,708.31 |
| 10 | (6) Unearned premium at the end of the current year ((3) x 50%); | เบี้ยประกันที่ยังไม่รับรู้รายได้ ณ สิ้นปีคำนวณเป็น Reserve for unearned premiums% ของเบี้ยสุทธิในข้อ (3)ส่วน template การแสดงผล (6) Unearned premium at the end of the current year ((3) x 50%);การแสดงค่า 50% ให้ดึงค่าจาก Reserve for unearned premiums% | tx_rig_profit_comm | sum_prem_unearn | right/bold | 7,898,541.54 |
| 11 | (7) Reserves for outstanding claims at the end of the year (if any); | เงินสำรองค่าสินไหมค้างจ่าย ณ สิ้นปี (ถ้ามี) | tx_rig_profit_comm | reserve_claim_end | right/bold | 0.00 |
| 12 | (8) Reinsurance Commission paid during the year; | ค่านายหน้าประกันต่อที่จ่ายให้ Reinsurer ในปีนั้น | tx_rig_profit_comm | sum_comm | right/bold | 7,898,542.65 |
| 13 | (9) Reinsurance Experience Refund for original GLI paid in the current year; | เงิน Experience Refund ที่บริษัทรับประกันต่อจ่ายคืนให้ สำหรับกรมธรรม์ GLI ในปีปัจจุบัน | tx_rig_profit_comm | sum_experience | right/bold | 57,159.17 |
| 14 | (10) Negative net balance of the Incomes and Outgoes carried over from the previous year (if any); | ยอดขาดทุนสุทธิ (ถ้ามี) ที่ยกมาจากการคำนวณของปีก่อนหน้า | tx_rig_profit_comm | negative_net_balance | right/bold | 3,662,427.81 |
| 15 | Total (B) | ผลรวมของรายจ่ายทั้งหมดในส่วน Outgoes | tx_rig_profit_comm | total_outgoes | right/bold | 27,668,924.68 |
| 16 | Net balance of Incomes and Outgoes ( A - B ) | ผลต่างสุทธิระหว่างรายได้และรายจ่าย | tx_rig_profit_comm | net_balance | right/bold | -2,984,727.96 |
| 17 | Rate of experience refund | อัตราส่วนแบ่งกำไร (Profit Commission Rate) ตามสัญญาประกันต่อ | tx_rig_profit_comm | percent_profit_comm | center/bold | 50% |
| 18 | Experience Refund for current year | จำนวนเงิน Profit Commission ที่ Reinsurer ต้องจ่ายคืนสำหรับปีปัจจุบัน | tx_rig_profit_comm | net_profit_comm | right/bold | 0.00 |


===== PAGE 1314653113 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955732945 {padding: 0px;}
div.rbtoc1782955732945 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955732945 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version 1.1 การแสดงข้อมูล Output : Report Header 1.2 การแสดงข้อมูล Output : Report Detail
- 1.1 การแสดงข้อมูล Output : Report Header
- 1.2 การแสดงข้อมูล Output : Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การแสดง Report detail
- 7 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 03/02/2026 | pongsathorn.pa | Profit_Commission_Thaire_Group PA_{YYYY} | xlsx | Profit_Commission_Thaire_Group PA_2026 |
| 06/05/2026 | suthanee.sa | Profit_Commission_Thaire_Group PA_{YYYY} | xlsx | https://redmine.ochi.link/issues/57217 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (quarter_year, treaty)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |
- การแสดงข้อมูล Output : Report Headerแสดงข้อมูล Report Headerเงื่อนไขการ Mapping ข้อมูลHeader1Fix "PROFIT COMMISSION FOR YEAR"+ {YYYY}Header2Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED"Header3Fix "GROUP PERSONAL ACCIDENT BUSINESS"Yeartx_rig_profit_com.profit_yearUnitFix "(Baht)"
- การแสดงข้อมูล Output : Report DetailNo.Column NameConditions/Validation RulesTableFieldalignmentExample1Header: Income3Reassurance premium net of cancellations and discount falling due during the yearเบี้ยประกันต่อสุทธิของปี หลังหักรายการยกเลิกกรมธรรม์และส่วนลดเบี้ยที่ถึงกำหนดในปีนั้นtx_rig_profit_commsum_premright650,069.034Reserve for unearned premiums as at the beginning of the yearเงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ ต้นปีtx_rig_profit_communearn_prem_beginright321,816.505Totalผลรวมของรายได้ทั้งหมดในหมวด Incometx_rig_profit_commtotal_incomeright971,885.536Header: Outgo 7Claims and legal expenses paid during the yearค่าสินไหมและค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในระหว่างปีtx_rig_profit_commsum_claimright0.008Administrative expenses : 10% of the reassurance premiumsค่าใช้จ่ายในการบริหาร คิดเป็น Administrative expenses% ของเบี้ยประกันต่อtx_rig_profit_commsum_prem_adminright65,006.909Reserve for unearned premiums as at the end of the year = 50% of the reassurance premiumsเงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ สิ้นปี คิดเป็น Reserve for unearned premiums% ของเบี้ยประกันต่อtx_rig_profit_commsum_prem_unearnright325,034.5210Reserve for claims, if any, as at the end of the yearเงินสำรองค่าสินไหม ณ สิ้นปี (ถ้ามี)tx_rig_profit_commreserve_claim_endright0.0011Commissions, if any, due during the yearค่าคอมมิชชั่นที่ถึงกำหนดจ่ายในระหว่างปี (ถ้ามี)tx_rig_profit_commsum_commright0.0012Any loss carried forward from the previous profit commission statementยอดขาดทุนสะสมที่ยกมาจากรอบ Profit Commission ก่อนหน้าtx_rig_profit_commnegative_net_balanceright57,159.1713Totalผลรวมของค่าใช้จ่ายและรายการหักทั้งหมดในหมวด Outgotx_rig_profit_commtotal_outgoesright552,565.0414Profit for Year 2024กำไรสุทธิของปี Quarter Year หลังหักรายจ่ายและเงินสำรองทั้งหมดแล้วtx_rig_profit_commnet_balanceright419,320.4915RateProfit Commission Ratetx_rig_profit_commpercent_profit_commcenter50%16Total profit commission for year + {YYYY}ยอด Profit Commission ทั้งหมดที่ต้องจ่ายให้คู่สัญญาสำหรับปี + {YYYY}tx_rig_profit_commnet_profit_commright209,660.25

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Profit_Commission_Thaire_Group PA_{YYYY} ใช้ข้อมูล{YYYY} = tx_rig_act_hd.yearตัวอย่างเช่น: Profit_Commission_Thaire_Group PA_2026ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_profit\Profit_Commission_Thaire_Group PA_{YYYY}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1314653118 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} > RIG-RP-016-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 03/02/2026 | pongsathorn.pa | Profit_Commission_Thaire_Group PA_{YYYY} | xlsx | Profit_Commission_Thaire_Group PA_2026 |
| 06/05/2026 | suthanee.sa | Profit_Commission_Thaire_Group PA_{YYYY} | xlsx | https://redmine.ochi.link/issues/57217 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (quarter_year, treaty)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1314653121 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} > RIG-RP-016-02 Output Header =====
| แสดงข้อมูล Report Header | เงื่อนไขการ Mapping ข้อมูล |
| Header1 | Fix "PROFIT COMMISSION FOR YEAR"+ {YYYY} |
| Header2 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED" |
| Header3 | Fix "GROUP PERSONAL ACCIDENT BUSINESS" |
| Year | tx_rig_profit_com.profit_year |
| Unit | Fix "(Baht)" |


===== PAGE 1314653124 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY} > WS_RIG-RP-016 Output =====
| No. | Column Name | Conditions/Validation Rules | Table | Field | alignment | Example |
| 1 | Header: Income |
| 3 | Reassurance premium net of cancellations and discount falling due during the year | เบี้ยประกันต่อสุทธิของปี หลังหักรายการยกเลิกกรมธรรม์และส่วนลดเบี้ยที่ถึงกำหนดในปีนั้น | tx_rig_profit_comm | sum_prem | right | 650,069.03 |
| 4 | Reserve for unearned premiums as at the beginning of the year | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ ต้นปี | tx_rig_profit_comm | unearn_prem_begin | right | 321,816.50 |
| 5 | Total | ผลรวมของรายได้ทั้งหมดในหมวด Income | tx_rig_profit_comm | total_income | right | 971,885.53 |
| 6 | Header: Outgo |
| 7 | Claims and legal expenses paid during the year | ค่าสินไหมและค่าใช้จ่ายทางกฎหมายที่จ่ายจริงในระหว่างปี | tx_rig_profit_comm | sum_claim | right | 0.00 |
| 8 | Administrative expenses : 10% of the reassurance premiums | ค่าใช้จ่ายในการบริหาร คิดเป็น Administrative expenses% ของเบี้ยประกันต่อ | tx_rig_profit_comm | sum_prem_admin | right | 65,006.90 |
| 9 | Reserve for unearned premiums as at the end of the year = 50% of the reassurance premiums | เงินสำรองเบี้ยประกันที่ยังไม่ถือเป็นรายได้ ณ สิ้นปี คิดเป็น Reserve for unearned premiums% ของเบี้ยประกันต่อ | tx_rig_profit_comm | sum_prem_unearn | right | 325,034.52 |
| 10 | Reserve for claims, if any, as at the end of the year | เงินสำรองค่าสินไหม ณ สิ้นปี (ถ้ามี) | tx_rig_profit_comm | reserve_claim_end | right | 0.00 |
| 11 | Commissions, if any, due during the year | ค่าคอมมิชชั่นที่ถึงกำหนดจ่ายในระหว่างปี (ถ้ามี) | tx_rig_profit_comm | sum_comm | right | 0.00 |
| 12 | Any loss carried forward from the previous profit commission statement | ยอดขาดทุนสะสมที่ยกมาจากรอบ Profit Commission ก่อนหน้า | tx_rig_profit_comm | negative_net_balance | right | 57,159.17 |
| 13 | Total | ผลรวมของค่าใช้จ่ายและรายการหักทั้งหมดในหมวด Outgo | tx_rig_profit_comm | total_outgoes | right | 552,565.04 |
| 14 | Profit for Year 2024 | กำไรสุทธิของปี Quarter Year หลังหักรายจ่ายและเงินสำรองทั้งหมดแล้ว | tx_rig_profit_comm | net_balance | right | 419,320.49 |
| 15 | Rate | Profit Commission Rate | tx_rig_profit_comm | percent_profit_comm | center | 50% |
| 16 | Total profit commission for year + {YYYY} | ยอด Profit Commission ทั้งหมดที่ต้องจ่ายให้คู่สัญญาสำหรับปี + {YYYY} | tx_rig_profit_comm | net_profit_comm | right | 209,660.25 |


===== PAGE 1315340334 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-017 BDR Act - Gibraltar (Reinsurer) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955734678 {padding: 0px;}
div.rbtoc1782955734678 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955734678 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Report template version
- การแสดง Report file name
- การกำหนด File Path File Path
- File Path
- Report template Description การแสดงชื่อ Report sheet : Bordereau_{YYYY}{QQ} การแสดงข้อมูล Output : Report Header การแสดงข้อมูล Output : Report Detail การแสดงข้อมูล Output : Report Header การแสดงชื่อ Report sheet : Claim Notification_{YYYY}{MM} การแสดงข้อมูล Output : Report Header การแสดงข้อมูล Output : Report Detail การแสดงชื่อ Report sheet : Claim Experience Refund การแสดงข้อมูล Output : Report Header การแสดงข้อมูล Output : Report Detail การแสดงข้อมูล Output : Report Footer การเรียงลำดับข้อมูล
- การแสดงชื่อ Report sheet : Bordereau_{YYYY}{QQ}
- การแสดงข้อมูล Output : Report Header
- การแสดงข้อมูล Output : Report Detail
- การแสดงข้อมูล Output : Report Header
- การแสดงชื่อ Report sheet : Claim Notification_{YYYY}{MM}
- การแสดงข้อมูล Output : Report Header
- การแสดงข้อมูล Output : Report Detail
- การแสดงชื่อ Report sheet : Claim Experience Refund
- การแสดงข้อมูล Output : Report Header
- การแสดงข้อมูล Output : Report Detail
- การแสดงข้อมูล Output : Report Footer
- การเรียงลำดับข้อมูล
- การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark | Dev Export Test File |
| 24/01/2026 | akkarawat.le | EB Group_YYYYQQ | xlsx |  | EB_Group_2026Q1_export.xlsx (02/03/2026) |
| 06/05/2026 | suthanee.sa | EB Group_YYYYQQ | xlsx | https://redmine.ochi.link/issues/57171 |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การแสดง Report file name
| การแสดงชื่อ File |
| EB Group_2021Q1 ใช้ข้อมูล{YYYY} = tx_rig_act_hd.yearตัวอย่างเช่น: EB Group_2021Q1.xlsxข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_bdr\EB Group_{YEAR}Q{QUARTER}.xlsx |

## Report template Description
- การแสดงชื่อ Report sheet : Bordereau_{YYYY}{QQ}การแสดงชื่อ SheetBordereau_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.year + quarter มาแสดง ตัวอย่างเช่น: Bordereau_2025Q1orderby ตาม seq_no การแสดงข้อมูล Output : Report HeaderNo.แสดงข้อมูล Report Headerกำหนด Row Outputเงื่อนไขการ Mapping ข้อมูลExample1Header12Fix "Quarterly Reinsurance List : Year" + " " + tx_rig_process_hd.year + tx_rig_process_hd.quarter Quarterly Reinsurance List : Year 2024 2Q2Header23Fix "No."+ " " + tx_rig_process_hd.year +" " + tx_rig_process_hd.quarter No. 2024 2Q3Header32Fix "Date :" + tx_rig_act_hd.created_date19 September 20244Header43Fix "Currency : THAILAND BAHT"
- Bordereau_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.year + quarter มาแสดง
- ตัวอย่างเช่น: Bordereau_2025Q1
- orderby ตาม seq_no
- การแสดงข้อมูล Output : Report Detail รายการ Premium (เบี้ย)รายการ ClaimExperience Refund paid to clients No.Column NameDescriptionConditions/Validation RulesTableFieldTableFieldTableFieldExample1RI No.เลขอ้างอิงการส่งงานประกันต่อฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renewreinsurer_no 17010012Pol Noเลขกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_no 3Policy Nameชื่อกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew pol_name FELIX HOTEL MANAGEMENT CO., LTD4Nature of Businessประเภทธุรกิจของกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew nob HOTEL BUSINESS5Mode of Paymentโหมดชำระเบี้ยฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew mode_pay 06Policy Statusสถานะกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_status 27Comm. Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurerฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew ri_com_date 01/01/20178Renewal/ Lapsed Dateวันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew renew_lapse_date 01/01/20249Pol. Yr.ปีกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_year 810Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_ri_period 01/01/2024 - 31/12/202411Premium Rate (% p.a.): Lifeอัตราเบี้ยประกันชีวิตรายปีฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew premium_rate_life 2.712Premium Rate (% p.a.): AD&Dอัตราเบี้ยประกันอุบัติเหตุรายปีฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew premium_rate_add 1.3213SA Layerชั้นทุนประกันของสมาชิกแสดงรายการ layer 1-3 และรายการผลรวม 3 layer row 1 = nullrow 2 = 1row 3 = 2row 4 = 3 1 ส่วน Original Policy 14Members: Lifeจำนวนสมาชิกความคุ้มครอง Life แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_member_liferow 2 = l1_member_liferow 3 = l2_member_liferow 4 = l3_member_life 16215Members: AD&Dจำนวนสมาชิกความคุ้มครอง AD&D แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_member_addrow 2 = l1_member_addrow 3 = l2_member_addrow 4 = l3_member_add 16216TL SA: Lifeทุนประกันรวม (Sum Assured) ของ Life แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_ori_sa_liferow 2 = l1_ori_sa_liferow 3 = l2_ori_sa_liferow 4 = l3_ori_sa_life 35,200,000.0017TL SA: AD&Dทุนประกันรวม (Sum Assured) ของ AD&D แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_ori_sa_addrow 2 = l1_ori_sa_addrow 3 = l2_ori_sa_addrow 4 = l3_ori_sa_add 18New Business Premium: Lifeเบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_ori_nb_prem_liferow 2 = l1_ori_nb_prem_liferow 3 = l2_ori_nb_prem_liferow 4 = l3_ori_nb_prem_life 19New Business Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_ori_nb_prem_addrow 2 = l1_ori_nb_prem_addrow 3 = l2_ori_nb_prem_addrow 4 = l3_ori_nb_prem_add 20Renewal Premium: Lifeเบี้ยประกันต่อ Life สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_ori_ren_prem_liferow 2 = l1_ori_ren_prem_liferow 3 = l2_ori_ren_prem_liferow 4 = l3_ori_ren_prem_life 21Renewal Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_ori_ren_prem_addrow 2 = l1_ori_ren_prem_addrow 3 = l2_ori_ren_prem_addrow 4 = l3_ori_ren_prem_add 22Revivals Premium: Lifeเบี้ยปรับเพิ่ม Life (Movement) tx_rig_act_bdr_new_renew row 1 = tot_ori_rev_prem_liferow 2 = l1_ori_rev_prem_liferow 3 = l2_ori_rev_prem_liferow 4 = l3_ori_rev_prem_life 23Revivals Premium: AD&Dเบี้ยปรับเพิ่ม AD&D (Movement) tx_rig_act_bdr_new_renew row 1 = tot_ori_rev_prem_addrow 2 = l1_ori_rev_prem_addrow 3 = l2_ori_rev_prem_addrow 4 = l3_ori_rev_prem_add 24Refund Premium: Lifeเบี้ยคืน Life tx_rig_act_bdr_new_renew row 1 = tot_ori_refund_prem_liferow 2 = l1_ori_refund_prem_liferow 3 = l2_ori_refund_prem_liferow 4 = l3_ori_refund_prem_life 25Refund Premium: AD&Dเบี้ยคืน AD&D tx_rig_act_bdr_new_renew row 1 = tot_ori_refund_prem_addrow 2 = l1_ori_refund_prem_addrow 3 = l2_ori_refund_prem_addrow 4 = l3_ori_refund_prem_add 26TL Premium: Lifeเบี้ยประกันต่อ Life รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_ori_tl_prem_liferow 2 = l1_ori_tl_prem_liferow 3 = l2_ori_tl_prem_liferow 4 = l3_ori_tl_prem_life 27TL Premium: AD&Dเบี้ยประกันต่อ AD&D รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_ori_tl_prem_addrow 2 = l1_ori_tl_prem_addrow 3 = l2_ori_tl_prem_addrow 4 = l3_ori_tl_prem_add 28Claim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_liferow 2 = l1_ori_claim_paid_liferow 3 = l2_ori_claim_paid_liferow 4 = l3_ori_claim_paid_life 29Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_addrow 2 = l1_ori_claim_paid_addrow 3 = l2_ori_claim_paid_addrow 4 = l3_ori_claim_paid_add 30Claim Paid: Dismembermentค่าสินไหม Dismemberment tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_dismemrow 2 = l1_ori_claim_paid_dismemrow 3 = l2_ori_claim_paid_dismemrow 4 = l3_ori_claim_paid_dismem 31Claim Paid: DIค่าสินไหม Disability Income tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_dirow 2 = l1_ori_claim_paid_dirow 3 = l2_ori_claim_paid_dirow 4 = l3_ori_claim_paid_di 32Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมาย tx_rig_act_bdr_claim row 1 = tot_ori_invrow 2 = l1_ori_invrow 3 = l2_ori_invrow 4 = l3_ori_inv 33Experience Refund paid to clients: Lifeเงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_ori_ex_refund_paid_liferow 2 = l1_ori_ex_refund_paid_liferow 3 = l2_ori_ex_refund_paid_liferow 4 = l3_ori_ex_refund_paid_life 34Experience Refund paid to clients: AD&Dเงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_ori_ex_refund_paid_addrow 2 = l1_ori_ex_refund_paid_addrow 3 = l2_ori_ex_refund_paid_addrow 4 = l3_ori_ex_refund_paid_add ส่วน reinsurance35% SA share: Lifeสัดส่วนทุนประกันต่อที่ใช้สำหรับ Life tx_rig_act_bdr_new_renew row 1 = nullrow 2 = l1_re_share_perrow 3 = l2_re_share_perrow 4 = l3_re_share_per 36% SA share: AD&Dสัดส่วนทุนประกันต่อที่ใช้สำหรับ AD&D tx_rig_act_bdr_new_renew row 1 = nullrow 2 = l1_re_share_perrow 3 = l2_re_share_perrow 4 = l3_re_share_per 37TL SR: Lifeจำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ Life tx_rig_act_bdr_new_renew row 1 = tot_re_sr_liferow 2 = l1_re_sr_liferow 3 = l2_re_sr_liferow 4 = l3_re_sr_life 38TL SR: AD&Dจำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ AD&D tx_rig_act_bdr_new_renew row 1 = tot_re_sr_addrow 2 = l1_re_sr_addrow 3 = l2_re_sr_addrow 4 = l3_re_sr_add 39New Business Premium: Lifeเบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_re_nb_prem_liferow 2 = l1_re_nb_prem_liferow 3 = l2_re_nb_prem_liferow 4 = l3_re_nb_prem_life 40New Business Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_re_nb_prem_addrow 2 = l1_re_nb_prem_addrow 3 = l2_re_nb_prem_addrow 4 = l3_re_nb_prem_add 41Renewal Premium: Lifeเบี้ยประกันต่อ Life สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_re_ren_prem_liferow 2 = l1_re_ren_prem_liferow 3 = l2_re_ren_prem_liferow 4 = l3_re_ren_prem_life 42Renewal Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_re_ren_prem_addrow 2 = l1_re_ren_prem_addrow 3 = l2_re_ren_prem_addrow 4 = l3_re_ren_prem_add 43Revivals Premium: Lifeเบี้ยปรับเพิ่ม Life (Movement) tx_rig_act_bdr_new_renew row 1 = tot_re_rev_prem_liferow 2 = l1_re_rev_prem_liferow 3 = l2_re_rev_prem_liferow 4 = l3_re_rev_prem_life 44Revivals Premium: AD&Dเบี้ยปรับเพิ่ม AD&D (Movement) tx_rig_act_bdr_new_renew row 1 = tot_re_rev_prem_addrow 2 = l1_re_rev_prem_addrow 3 = l2_re_rev_prem_addrow 4 = l3_re_rev_prem_add 45Refund Premium: Lifeเบี้ยคืน Life tx_rig_act_bdr_new_renew row 1 = tot_re_refund_prem_liferow 2 = l1_re_refund_prem_liferow 3 = l2_re_refund_prem_liferow 4 = l3_re_refund_prem_life 46Refund Premium: AD&Dเบี้ยคืน AD&D tx_rig_act_bdr_new_renew row 1 = tot_re_refund_prem_addrow 2 = l1_re_refund_prem_addrow 3 = l2_re_refund_prem_addrow 4 = l3_re_refund_prem_add 47TL Premium: Lifeเบี้ยประกันต่อ Life รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_re_tl_prem_liferow 2 = l1_re_tl_prem_liferow 3 = l2_re_tl_prem_liferow 4 = l3_re_tl_prem_life 48TL Premium: AD&Dเบี้ยประกันต่อ AD&D รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_re_tl_prem_addrow 2 = l1_re_tl_prem_addrow 3 = l2_re_tl_prem_addrow 4 = l3_re_tl_prem_add 49Claim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_liferow 2 = l1_re_claim_paid_liferow 3 = l2_re_claim_paid_liferow 4 = l3_re_claim_paid_life 50Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_addrow 2 = l1_re_claim_paid_addrow 3 = l2_re_claim_paid_addrow 4 = l3_re_claim_paid_add 51Claim Paid: Dismembermentค่าสินไหมกรณีสูญเสียอวัยวะ tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_dismemrow 2 = l1_re_claim_paid_dismemrow 3 = l2_re_claim_paid_dismemrow 4 = l3_re_claim_paid_dismem 52Claim Paid: DIค่าสินไหม Disability Income tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_dirow 2 = l1_re_claim_paid_dirow 3 = l2_re_claim_paid_dirow 4 = l3_re_claim_paid_di 53Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมาย tx_rig_act_bdr_claim row 1 = tot_re_invrow 2 = l1_re_invrow 3 = l2_re_invrow 4 = l3_re_inv 54RI Commission (50%): Lifeค่าคอมมิชชั่นประกันต่อ Life tx_rig_act_bdr_new_renew row 1 = tot_com_life + tot_com_refund_liferow 2 = l1_com_life + l1_com_refund_liferow 3 = l2_com_life + l2_com_refund_liferow 4 = l3_com_life + l3_com_refund_life(suthanee.sa 04/07/2026) 55RI Commission (50%): AD&Dค่าคอมมิชชั่นประกันต่อ AD&D tx_rig_act_bdr_new_renew row 1 = tot_com_add + tot_com_refund_addrow 2 = l1_com_add + l1_com_refund_addrow 3 = l2_com_add + l2_com_refund_addrow 4 = l3_com_add + l3_com_refund_add(suthanee.sa 04/07/2026) 56Experience Refund paid to clients: Lifeเงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_re_ex_refund_paid_liferow 2 = l1_re_ex_refund_paid_liferow 3 = l2_re_ex_refund_paid_liferow 4 = l3_re_ex_refund_paid_life 57Experience Refund paid to clients: AD&Dเงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_re_ex_refund_paid_addrow 2 = l1_re_ex_refund_paid_addrow 3 = l2_re_ex_refund_paid_addrow 4 = l3_re_ex_refund_paid_add
- การแสดงข้อมูล Output : Report Header 1. เรียงตาม Reinsurer No. น้อยไปมาก2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก
- การแสดงชื่อ Report sheet : Claim Notification_{YYYY}{MM}การแสดงชื่อ SheetClaim Notification_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_act_bdr_claim.data_period มาแสดง ตัวอย่างเช่น: Claim Notification_202501orderby ตาม seq_noGroup No. ของรายการตาม Policy No. (กรมธรรม์เดียวกันให้นับเป็น 1 ตามตัวอย่าง) (suthanee.sa 03/04/2026)การแสดงข้อมูล Output : Report HeaderNo.แสดงข้อมูล Report Headerกำหนด Row Outputเงื่อนไขการ Mapping ข้อมูลExample1 Header12Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED" 2Header23Fix "CLAIM NOTIFICATION" 3Header35Fix "Date :" + tx_rig_act_hd.created_date19 September 20244Header46Fix "No."+ " " + tx_rig_act_bdr_claim.data_period No. 2025015Header56Fix "Currency : THAILAND BAHT"
- Claim Notification_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_act_bdr_claim.data_period มาแสดง
- ตัวอย่างเช่น: Claim Notification_202501
- orderby ตาม seq_no
- Group No. ของรายการตาม Policy No. (กรมธรรม์เดียวกันให้นับเป็น 1 ตามตัวอย่าง) (suthanee.sa 03/04/2026)
- การแสดงข้อมูล Output : Report DetailNo.Column NameDescriptionConditions/Validation RulesTableFieldExample1No.ลำดับรายการในรายงาน 12RI No.เลขอ้างอิงการส่งงานประกันต่อ tx_rig_act_bdr_claimreinsurer_no17010013Pol Noเลขกรมธรรม์ tx_rig_act_bdr_claim policy_noGH1244Policy Nameชื่อกรมธรรม์ tx_rig_act_bdr_claim pol_nameCONSULTANTS OF TECHNOLOGY CO.,LTD.5Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น tx_rig_act_bdr_claim policy_ri_period01/01/2024 - 31/12/20246Cession No.หมายเลขสมาชิก (CertNo) tx_rig_act_bdr_claim_memcession_no2507Effective Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurer tx_rig_act_bdr_claim effective_date_from ri_com_date (suthanee.sa 27/03/2026)01/01/20178Ageอายุสมาชิก ณ วันที่เกิดเหตุ tx_rig_act_bdr_claim_mem age509Date of Death / Disabilityวันที่เสียชีวิต หรือ Accident Date tx_rig_act_bdr_claim_mem event_date25/03/202410Cause of Death / Disabilityสาเหตุการเสียชีวิต / อุบัติเหตุ / การเจ็บป่วย tx_rig_act_bdr_claim_mem causeBlood Infection11Original Sum Insured: Lifeทุนประกันชีวิตของสมาชิก tx_rig_act_bdr_claim_mem ori_sum_insu_life100,00012Original Sum Insured: Accidentทุนประกันอุบัติเหตุของสมาชิก tx_rig_act_bdr_claim_mem ori_sum_insu_acc + ori_sum_insu_dismem (suthanee.sa 09/04/2026)013Payment Dateวันที่จ่ายเงิน tx_rig_act_bdr_claim_mem approve_date10/05/202414Accounting Entries in the (Pol.yr.)ปีกรมธรรม์ tx_rig_act_bdr_claim policy_year815Statusการเสียชีวิตของสมาชิกในรายการเคลมนี้ เป็น การเสียชีวิตทั่วไป หรือเป็น การเสียชีวิตจากอุบัติเหตุ tx_rig_act_bdr_claim_mem claim_statusNormal Amount Paid By Insurer 16Amount Paid: Lifeจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_life100,000.0017Amount Paid: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_acc10,000.5018Amount Paid: Dismembermentจำนวนเงินสินไหมสูญเสียอวัยวะ ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_dismem10,000.5019Amount Paid: DIค่าสินไหม Disability Income ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_di10,000.5020Amount Paid: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_inv10,000.50 Reinsurer's Share 21Reinsurer's: Lifeจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_life10,000.5022Reinsurer's: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_acc10,000.5023Reinsurer's: Dismembermentจำนวนเงินสินไหมสูญเสียอวัยวะ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_dismem10,000.5024Reinsurer's: DIค่าสินไหม Disability Income ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_di10,000.5025Reinsurer's: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_inv10,000.5026Remarkหมายเหตุ tx_rig_act_bdr_claim_mem remark
- การแสดงข้อมูล Output : Report Header 1. เรียงตาม Reinsurer No. น้อยไปมาก2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก5. เรียงตาม Cert No. น้อยไปมาก

### การแสดงชื่อ Report sheet : Claim Experience Refund
| การแสดงชื่อ Sheet |
| Experience Refund |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix(Form "F") ; |  |
| 2 | Header2 | 3 | Fix Experience Refund calculation for the Group reinsurance |  |

### การแสดงข้อมูล Output : Report Detail
| No. | Column Name | Description | Conditions/Validation Rules | Table.Field | Table.Field | Example |
|  |  |  |  | ถ้า tx_rig_act_bdr_new_renew.re_ex_refund_life ไม่เป็น 0 หรือค่าว่าง | ถ้า tx_rig_act_bdr_new_renew.re_ex_refund_acc ไม่เป็น 0 หรือค่าว่าง |  |
| 1 | Group No. | รหัสอ้างอิงของกรมธรรม์ที่มีการคำนวณและจ่าย Experience Refund ในรอบการประมวลผล (Period) ที่เลือกโดยระบบจะใช้ Group No. เพื่อระบุว่าเงิน Experience Refund รายการนี้เป็นของกรมธรรม์ใด และเป็นของความคุ้มครองประเภทใด | แสดงเป็นหัวคอลัมน์ตามรายการกรมธรรม์รูปแบบการแสดงผล policy_no + "_" + coverage_type | tx_rig_act_bdr_new_renew.policy_no + "_" + Life | tx_rig_act_bdr_new_renew.policy_no + "_" + Accident | GL1644_Life |
| 2 | Policy Year | ปีกรมธรรม์สำหรับส่ง Reinsurer |  | tx_rig_act_bdr_new_renew.policy_year | tx_rig_act_bdr_new_renew.policy_year | 1 |
| 3 | Number of member | จำนวนสมาชิกทั้งหมดในปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.number_of_mem_life | tx_rig_act_bdr_new_renew.number_of_mem_acc | 2,294 |
|  | Experience Refund Rate (A) | อัตรา % Experience Refund |  | tx_rig_act_bdr_new_renew.ex_refund_rate_life | tx_rig_act_bdr_new_renew.ex_refund_rate_acc | 75% |
| 4 | Expense at the t policy year (Et) | อัตราค่าใช้จ่าย |  | tx_rig_act_bdr_new_renew.ex_pol_year_life | tx_rig_act_bdr_new_renew.ex_pol_year_acc | 25% |
| 5 | Gross Premium at the t policy year (Pt) | เบี้ยรวมทั้งปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.gross_prem_life | tx_rig_act_bdr_new_renew.gross_prem_acc | 230569.22 |
| 6 | Claims Paid at the t policy year (Ct) * | ค่าสินไหมรวมทั้งปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.claim_paid_year_life | tx_rig_act_bdr_new_renew.claim_paid_year_acc | 0 |
|  | Original Experience Refund paid by the Ceding Company | เงิน ER ที่บริษัทคืนลูกค้า |  | tx_rig_act_bdr_new_renew.ori_ex_refund_life | tx_rig_act_bdr_new_renew.ori_ex_refund_acc | 129,695.19 |
| 7 | Net reinsurance premium to the Reinsurer | เบี้ย RI สุทธิย้อนหลังทั้งปี |  | tx_rig_act_bdr_new_renew.net_re_prem_life | tx_rig_act_bdr_new_renew.net_re_prem_acc | 34636.21 |
| 8 | Reinsurance Commission | Commission RI ย้อนหลังทั้งปี |  | tx_rig_act_bdr_new_renew.re_com_life | tx_rig_act_bdr_new_renew.re_com_acc | 17,318.11 |
| 9 | Reinsurance Experience Refund | เงิน ER ที่ Reinsurer ต้องรับผิดชอบ |  | tx_rig_act_bdr_new_renew.re_ex_refund_life | tx_rig_act_bdr_new_renew.re_ex_refund_acc | 17,318.10 |

### การแสดงข้อมูล Output : Report Footer
| No. | กำหนด Row Output | Fix |
| 1 | 20 | A) Reinsurance Experience Refund = (Reinsurance Premium / Original Premium)× Original Experience Refund |
| 2 | 21 | However, ( Reinsurance experience refund ≤ Reinsurance premium – Reinsurance commission ) shall be applied to each original GLI. |
| 3 | 22 | B) Original Experience Refund = [{ (Pt) × (1–Et)} – (Ct) ] ×A |
| 4 | 23 | t = policy year (t = 1,2, … ) |
| 5 | 24 | Et = Expense at the t policy year |
| 6 | 25 | Pt = Gross Premium at the t policy year |
| 7 | 26 | Ct = Claims Paid at the t policy year |
| 8 | 27 | A= Experience Refund Rate of original GLI |
| 9 | 28 |  |
| 10 | 29 | Remark : * = Included remaining claims after adjusting for Experience Refund carried from previous year |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. ในกรณีที่ Policy No. มี Experience Refund Life และ Accident ให้เรียงจาก Life ไป Accident

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1315340336 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-017 BDR Act - Gibraltar (Reinsurer) > RIG-RP-017-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 24/01/2026 | akkarawat.le | EB Group_YYYYQQ_export | xlsx |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Gibraltarนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |


===== PAGE 1315340340 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-017 BDR Act - Gibraltar (Reinsurer) > RIG-RP-017-02 Sheet Bordereau_YYYYQQ =====
- การแสดงชื่อ Report sheet : Bordereau_{YYYY}{QQ}การแสดงชื่อ SheetBordereau_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.year + quarter มาแสดง ตัวอย่างเช่น: Bordereau_2025Q1orderby ตาม seq_no การแสดงข้อมูล Output : Report HeaderNo.แสดงข้อมูล Report Headerกำหนด Row Outputเงื่อนไขการ Mapping ข้อมูลExample1Header12Fix "Quarterly Reinsurance List : Year" + " " + tx_rig_process_hd.year + tx_rig_process_hd.quarter Quarterly Reinsurance List : Year 2024 2Q2Header23Fix "No."+ " " + tx_rig_process_hd.year +" " + tx_rig_process_hd.quarter No. 2024 2Q3Header32Fix "Date :" + tx_rig_act_hd.created_date19 September 20244Header43Fix "Currency : THAILAND BAHT"
- Bordereau_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.year + quarter มาแสดง
- ตัวอย่างเช่น: Bordereau_2025Q1
- orderby ตาม seq_no
- การแสดงข้อมูล Output : Report Detail รายการ Premium (เบี้ย)รายการ ClaimExperience Refund paid to clients No.Column NameDescriptionConditions/Validation RulesTableFieldTableFieldTableFieldExample1RI No.เลขอ้างอิงการส่งงานประกันต่อฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renewreinsurer_no 17010012Pol Noเลขกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_no 3Policy Nameชื่อกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew pol_name FELIX HOTEL MANAGEMENT CO., LTD4Nature of Businessประเภทธุรกิจของกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew nob HOTEL BUSINESS5Mode of Paymentโหมดชำระเบี้ยฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew mode_pay 06Policy Statusสถานะกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_status 27Comm. Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurerฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew ri_com_date 01/01/20178Renewal/ Lapsed Dateวันที่ที่ใช้แสดงสถานะการต่ออายุหรือสิ้นสุดความคุ้มครองของกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew renew_lapse_date 01/01/20249Pol. Yr.ปีกรมธรรม์ฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_year 810Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้นฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew policy_ri_period 01/01/2024 - 31/12/202411Premium Rate (% p.a.): Lifeอัตราเบี้ยประกันชีวิตรายปีฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew premium_rate_life 2.712Premium Rate (% p.a.): AD&Dอัตราเบี้ยประกันอุบัติเหตุรายปีฟิล์ดข้อมูล Grouping ของรายการ layer 1-3 และรายการผลรวม 3 layertx_rig_act_bdr_new_renew premium_rate_add 1.3213SA Layerชั้นทุนประกันของสมาชิกแสดงรายการ layer 1-3 และรายการผลรวม 3 layer row 1 = nullrow 2 = 1row 3 = 2row 4 = 3 1 ส่วน Original Policy 14Members: Lifeจำนวนสมาชิกความคุ้มครอง Life แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_member_liferow 2 = l1_member_liferow 3 = l2_member_liferow 4 = l3_member_life 16215Members: AD&Dจำนวนสมาชิกความคุ้มครอง AD&D แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_member_addrow 2 = l1_member_addrow 3 = l2_member_addrow 4 = l3_member_add 16216TL SA: Lifeทุนประกันรวม (Sum Assured) ของ Life แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_ori_sa_liferow 2 = l1_ori_sa_liferow 3 = l2_ori_sa_liferow 4 = l3_ori_sa_life 35,200,000.0017TL SA: AD&Dทุนประกันรวม (Sum Assured) ของ AD&D แยกตาม Layer (L1–L3) tx_rig_act_bdr_new_renew row 1 = tot_ori_sa_addrow 2 = l1_ori_sa_addrow 3 = l2_ori_sa_addrow 4 = l3_ori_sa_add 18New Business Premium: Lifeเบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_ori_nb_prem_liferow 2 = l1_ori_nb_prem_liferow 3 = l2_ori_nb_prem_liferow 4 = l3_ori_nb_prem_life 19New Business Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_ori_nb_prem_addrow 2 = l1_ori_nb_prem_addrow 3 = l2_ori_nb_prem_addrow 4 = l3_ori_nb_prem_add 20Renewal Premium: Lifeเบี้ยประกันต่อ Life สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_ori_ren_prem_liferow 2 = l1_ori_ren_prem_liferow 3 = l2_ori_ren_prem_liferow 4 = l3_ori_ren_prem_life 21Renewal Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_ori_ren_prem_addrow 2 = l1_ori_ren_prem_addrow 3 = l2_ori_ren_prem_addrow 4 = l3_ori_ren_prem_add 22Revivals Premium: Lifeเบี้ยปรับเพิ่ม Life (Movement) tx_rig_act_bdr_new_renew row 1 = tot_ori_rev_prem_liferow 2 = l1_ori_rev_prem_liferow 3 = l2_ori_rev_prem_liferow 4 = l3_ori_rev_prem_life 23Revivals Premium: AD&Dเบี้ยปรับเพิ่ม AD&D (Movement) tx_rig_act_bdr_new_renew row 1 = tot_ori_rev_prem_addrow 2 = l1_ori_rev_prem_addrow 3 = l2_ori_rev_prem_addrow 4 = l3_ori_rev_prem_add 24Refund Premium: Lifeเบี้ยคืน Life tx_rig_act_bdr_new_renew row 1 = tot_ori_refund_prem_liferow 2 = l1_ori_refund_prem_liferow 3 = l2_ori_refund_prem_liferow 4 = l3_ori_refund_prem_life 25Refund Premium: AD&Dเบี้ยคืน AD&D tx_rig_act_bdr_new_renew row 1 = tot_ori_refund_prem_addrow 2 = l1_ori_refund_prem_addrow 3 = l2_ori_refund_prem_addrow 4 = l3_ori_refund_prem_add 26TL Premium: Lifeเบี้ยประกันต่อ Life รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_ori_tl_prem_liferow 2 = l1_ori_tl_prem_liferow 3 = l2_ori_tl_prem_liferow 4 = l3_ori_tl_prem_life 27TL Premium: AD&Dเบี้ยประกันต่อ AD&D รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_ori_tl_prem_addrow 2 = l1_ori_tl_prem_addrow 3 = l2_ori_tl_prem_addrow 4 = l3_ori_tl_prem_add 28Claim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_liferow 2 = l1_ori_claim_paid_liferow 3 = l2_ori_claim_paid_liferow 4 = l3_ori_claim_paid_life 29Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_addrow 2 = l1_ori_claim_paid_addrow 3 = l2_ori_claim_paid_addrow 4 = l3_ori_claim_paid_add 30Claim Paid: Dismembermentค่าสินไหม Dismemberment tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_dismemrow 2 = l1_ori_claim_paid_dismemrow 3 = l2_ori_claim_paid_dismemrow 4 = l3_ori_claim_paid_dismem 31Claim Paid: DIค่าสินไหม Disability Income tx_rig_act_bdr_claim row 1 = tot_ori_claim_paid_dirow 2 = l1_ori_claim_paid_dirow 3 = l2_ori_claim_paid_dirow 4 = l3_ori_claim_paid_di 32Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมาย tx_rig_act_bdr_claim row 1 = tot_ori_invrow 2 = l1_ori_invrow 3 = l2_ori_invrow 4 = l3_ori_inv 33Experience Refund paid to clients: Lifeเงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_ori_ex_refund_paid_liferow 2 = l1_ori_ex_refund_paid_liferow 3 = l2_ori_ex_refund_paid_liferow 4 = l3_ori_ex_refund_paid_life 34Experience Refund paid to clients: AD&Dเงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_ori_ex_refund_paid_addrow 2 = l1_ori_ex_refund_paid_addrow 3 = l2_ori_ex_refund_paid_addrow 4 = l3_ori_ex_refund_paid_add ส่วน reinsurance35% SA share: Lifeสัดส่วนทุนประกันต่อที่ใช้สำหรับ Life tx_rig_act_bdr_new_renew row 1 = nullrow 2 = l1_re_share_perrow 3 = l2_re_share_perrow 4 = l3_re_share_per 36% SA share: AD&Dสัดส่วนทุนประกันต่อที่ใช้สำหรับ AD&D tx_rig_act_bdr_new_renew row 1 = nullrow 2 = l1_re_share_perrow 3 = l2_re_share_perrow 4 = l3_re_share_per 37TL SR: Lifeจำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ Life tx_rig_act_bdr_new_renew row 1 = tot_re_sr_liferow 2 = l1_re_sr_liferow 3 = l2_re_sr_liferow 4 = l3_re_sr_life 38TL SR: AD&Dจำนวนเงินทุนประกันต่อ (Sum at Risk) สำหรับ AD&D tx_rig_act_bdr_new_renew row 1 = tot_re_sr_addrow 2 = l1_re_sr_addrow 3 = l2_re_sr_addrow 4 = l3_re_sr_add 39New Business Premium: Lifeเบี้ยประกันต่อ Life สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_re_nb_prem_liferow 2 = l1_re_nb_prem_liferow 3 = l2_re_nb_prem_liferow 4 = l3_re_nb_prem_life 40New Business Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับกรมธรรม์ปีแรก tx_rig_act_bdr_new_renew row 1 = tot_re_nb_prem_addrow 2 = l1_re_nb_prem_addrow 3 = l2_re_nb_prem_addrow 4 = l3_re_nb_prem_add 41Renewal Premium: Lifeเบี้ยประกันต่อ Life สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_re_ren_prem_liferow 2 = l1_re_ren_prem_liferow 3 = l2_re_ren_prem_liferow 4 = l3_re_ren_prem_life 42Renewal Premium: AD&Dเบี้ยประกันต่อ AD&D สำหรับปีต่ออายุ tx_rig_act_bdr_new_renew row 1 = tot_re_ren_prem_addrow 2 = l1_re_ren_prem_addrow 3 = l2_re_ren_prem_addrow 4 = l3_re_ren_prem_add 43Revivals Premium: Lifeเบี้ยปรับเพิ่ม Life (Movement) tx_rig_act_bdr_new_renew row 1 = tot_re_rev_prem_liferow 2 = l1_re_rev_prem_liferow 3 = l2_re_rev_prem_liferow 4 = l3_re_rev_prem_life 44Revivals Premium: AD&Dเบี้ยปรับเพิ่ม AD&D (Movement) tx_rig_act_bdr_new_renew row 1 = tot_re_rev_prem_addrow 2 = l1_re_rev_prem_addrow 3 = l2_re_rev_prem_addrow 4 = l3_re_rev_prem_add 45Refund Premium: Lifeเบี้ยคืน Life tx_rig_act_bdr_new_renew row 1 = tot_re_refund_prem_liferow 2 = l1_re_refund_prem_liferow 3 = l2_re_refund_prem_liferow 4 = l3_re_refund_prem_life 46Refund Premium: AD&Dเบี้ยคืน AD&D tx_rig_act_bdr_new_renew row 1 = tot_re_refund_prem_addrow 2 = l1_re_refund_prem_addrow 3 = l2_re_refund_prem_addrow 4 = l3_re_refund_prem_add 47TL Premium: Lifeเบี้ยประกันต่อ Life รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_re_tl_prem_liferow 2 = l1_re_tl_prem_liferow 3 = l2_re_tl_prem_liferow 4 = l3_re_tl_prem_life 48TL Premium: AD&Dเบี้ยประกันต่อ AD&D รวมทั้งหมด tx_rig_act_bdr_new_renew row 1 = tot_re_tl_prem_addrow 2 = l1_re_tl_prem_addrow 3 = l2_re_tl_prem_addrow 4 = l3_re_tl_prem_add 49Claim Paid: Lifeค่าสินไหม Life ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_liferow 2 = l1_re_claim_paid_liferow 3 = l2_re_claim_paid_liferow 4 = l3_re_claim_paid_life 50Claim Paid: AD&Dค่าสินไหม AD&D ที่บริษัทจ่าย tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_addrow 2 = l1_re_claim_paid_addrow 3 = l2_re_claim_paid_addrow 4 = l3_re_claim_paid_add 51Claim Paid: Dismembermentค่าสินไหมกรณีสูญเสียอวัยวะ tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_dismemrow 2 = l1_re_claim_paid_dismemrow 3 = l2_re_claim_paid_dismemrow 4 = l3_re_claim_paid_dismem 52Claim Paid: DIค่าสินไหม Disability Income tx_rig_act_bdr_claim row 1 = tot_re_claim_paid_dirow 2 = l1_re_claim_paid_dirow 3 = l2_re_claim_paid_dirow 4 = l3_re_claim_paid_di 53Investigation & Legal Expenseค่าใช้จ่ายสอบสวนและกฎหมาย tx_rig_act_bdr_claim row 1 = tot_re_invrow 2 = l1_re_invrow 3 = l2_re_invrow 4 = l3_re_inv 54RI Commission (50%): Lifeค่าคอมมิชชั่นประกันต่อ Life tx_rig_act_bdr_new_renew row 1 = tot_com_life + tot_com_refund_liferow 2 = l1_com_life + l1_com_refund_liferow 3 = l2_com_life + l2_com_refund_liferow 4 = l3_com_life + l3_com_refund_life(suthanee.sa 04/07/2026) 55RI Commission (50%): AD&Dค่าคอมมิชชั่นประกันต่อ AD&D tx_rig_act_bdr_new_renew row 1 = tot_com_add + tot_com_refund_addrow 2 = l1_com_add + l1_com_refund_addrow 3 = l2_com_add + l2_com_refund_addrow 4 = l3_com_add + l3_com_refund_add(suthanee.sa 04/07/2026) 56Experience Refund paid to clients: Lifeเงินคืนประสบการณ์ Life ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_re_ex_refund_paid_liferow 2 = l1_re_ex_refund_paid_liferow 3 = l2_re_ex_refund_paid_liferow 4 = l3_re_ex_refund_paid_life 57Experience Refund paid to clients: AD&Dเงินคืนประสบการณ์ AD&D ที่จ่ายให้ผู้เอาประกัน tx_rig_act_bdr_new_renew row 1 = tot_re_ex_refund_paid_addrow 2 = l1_re_ex_refund_paid_addrow 3 = l2_re_ex_refund_paid_addrow 4 = l3_re_ex_refund_paid_add
- การแสดงข้อมูล Output : Report Header 1. เรียงตาม Reinsurer No. น้อยไปมาก2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก


===== PAGE 1315340351 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-017 BDR Act - Gibraltar (Reinsurer) > RIG-RP-017-03 Sheet Claim Notification_YYYYMM =====
- การแสดงชื่อ Report sheet : Claim Notification_{YYYY}{MM}การแสดงชื่อ SheetClaim Notification_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_act_bdr_claim.data_period มาแสดง ตัวอย่างเช่น: Claim Notification_202501orderby ตาม seq_noGroup No. ของรายการตาม Policy No. (กรมธรรม์เดียวกันให้นับเป็น 1 ตามตัวอย่าง) (suthanee.sa 03/04/2026)การแสดงข้อมูล Output : Report HeaderNo.แสดงข้อมูล Report Headerกำหนด Row Outputเงื่อนไขการ Mapping ข้อมูลExample1 Header12Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED" 2Header23Fix "CLAIM NOTIFICATION" 3Header35Fix "Date :" + tx_rig_act_hd.created_date19 September 20244Header46Fix "No."+ " " + tx_rig_act_bdr_claim.data_period No. 2025015Header56Fix "Currency : THAILAND BAHT"
- Claim Notification_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_act_bdr_claim.data_period มาแสดง
- ตัวอย่างเช่น: Claim Notification_202501
- orderby ตาม seq_no
- Group No. ของรายการตาม Policy No. (กรมธรรม์เดียวกันให้นับเป็น 1 ตามตัวอย่าง) (suthanee.sa 03/04/2026)
- การแสดงข้อมูล Output : Report DetailNo.Column NameDescriptionConditions/Validation RulesTableFieldExample1No.ลำดับรายการในรายงาน 12RI No.เลขอ้างอิงการส่งงานประกันต่อ tx_rig_act_bdr_claimreinsurer_no17010013Pol Noเลขกรมธรรม์ tx_rig_act_bdr_claim policy_noGH1244Policy Nameชื่อกรมธรรม์ tx_rig_act_bdr_claim pol_nameCONSULTANTS OF TECHNOLOGY CO.,LTD.5Policy Periodช่วงวันที่แสดงความคุ้มครองของกรมธรรม์ในปีกรมธรรม์นั้น tx_rig_act_bdr_claim policy_ri_period01/01/2024 - 31/12/20246Cession No.หมายเลขสมาชิก (CertNo) tx_rig_act_bdr_claim_memcession_no2507Effective Dateวันที่เริ่มต้นที่ใช้สำหรับรายงานส่ง Reinsurer tx_rig_act_bdr_claim effective_date_from ri_com_date (suthanee.sa 27/03/2026)01/01/20178Ageอายุสมาชิก ณ วันที่เกิดเหตุ tx_rig_act_bdr_claim_mem age509Date of Death / Disabilityวันที่เสียชีวิต หรือ Accident Date tx_rig_act_bdr_claim_mem event_date25/03/202410Cause of Death / Disabilityสาเหตุการเสียชีวิต / อุบัติเหตุ / การเจ็บป่วย tx_rig_act_bdr_claim_mem causeBlood Infection11Original Sum Insured: Lifeทุนประกันชีวิตของสมาชิก tx_rig_act_bdr_claim_mem ori_sum_insu_life100,00012Original Sum Insured: Accidentทุนประกันอุบัติเหตุของสมาชิก tx_rig_act_bdr_claim_mem ori_sum_insu_acc + ori_sum_insu_dismem (suthanee.sa 09/04/2026)013Payment Dateวันที่จ่ายเงิน tx_rig_act_bdr_claim_mem approve_date10/05/202414Accounting Entries in the (Pol.yr.)ปีกรมธรรม์ tx_rig_act_bdr_claim policy_year815Statusการเสียชีวิตของสมาชิกในรายการเคลมนี้ เป็น การเสียชีวิตทั่วไป หรือเป็น การเสียชีวิตจากอุบัติเหตุ tx_rig_act_bdr_claim_mem claim_statusNormal Amount Paid By Insurer 16Amount Paid: Lifeจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_life100,000.0017Amount Paid: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_acc10,000.5018Amount Paid: Dismembermentจำนวนเงินสินไหมสูญเสียอวัยวะ ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_dismem10,000.5019Amount Paid: DIค่าสินไหม Disability Income ที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_di10,000.5020Amount Paid: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่บริษัทอนุมัติจ่าย tx_rig_act_bdr_claim_mem amo_paid_inv10,000.50 Reinsurer's Share 21Reinsurer's: Lifeจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_life10,000.5022Reinsurer's: Accidentจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_acc10,000.5023Reinsurer's: Dismembermentจำนวนเงินสินไหมสูญเสียอวัยวะ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_dismem10,000.5024Reinsurer's: DIค่าสินไหม Disability Income ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_di10,000.5025Reinsurer's: Investigation & Legal Expenseค่าใช้จ่ายในการสอบสวนที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ tx_rig_act_bdr_claim_mem re_claim_inv10,000.5026Remarkหมายเหตุ tx_rig_act_bdr_claim_mem remark
- การแสดงข้อมูล Output : Report Header 1. เรียงตาม Reinsurer No. น้อยไปมาก2. เรียงตาม Policy No. น้อยไปมาก3. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก4. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก5. เรียงตาม Cert No. น้อยไปมาก


===== PAGE 1315340357 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-017 BDR Act - Gibraltar (Reinsurer) > RIG-RP-017-04 Sheet Experience Refund =====
### การแสดงชื่อ Report sheet : Claim Experience Refund
| การแสดงชื่อ Sheet |
| Experience Refund |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix(Form "F") ; |  |
| 2 | Header2 | 3 | Fix Experience Refund calculation for the Group reinsurance |  |

### การแสดงข้อมูล Output : Report Detail
| No. | Column Name | Description | Conditions/Validation Rules | Table.Field | Table.Field | Example |
|  |  |  |  | ถ้า tx_rig_act_bdr_new_renew.re_ex_refund_life ไม่เป็น 0 หรือค่าว่าง | ถ้า tx_rig_act_bdr_new_renew.re_ex_refund_acc ไม่เป็น 0 หรือค่าว่าง |  |
| 1 | Group No. | รหัสอ้างอิงของกรมธรรม์ที่มีการคำนวณและจ่าย Experience Refund ในรอบการประมวลผล (Period) ที่เลือกโดยระบบจะใช้ Group No. เพื่อระบุว่าเงิน Experience Refund รายการนี้เป็นของกรมธรรม์ใด และเป็นของความคุ้มครองประเภทใด | แสดงเป็นหัวคอลัมน์ตามรายการกรมธรรม์รูปแบบการแสดงผล policy_no + "_" + coverage_type | tx_rig_act_bdr_new_renew.policy_no + "_" + Life | tx_rig_act_bdr_new_renew.policy_no + "_" + Accident | GL1644_Life |
| 2 | Policy Year | ปีกรมธรรม์สำหรับส่ง Reinsurer |  | tx_rig_act_bdr_new_renew.policy_year | tx_rig_act_bdr_new_renew.policy_year | 1 |
| 3 | Number of member | จำนวนสมาชิกทั้งหมดในปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.number_of_mem_life | tx_rig_act_bdr_new_renew.number_of_mem_acc | 2,294 |
|  | Experience Refund Rate (A) | อัตรา % Experience Refund |  | tx_rig_act_bdr_new_renew.ex_refund_rate_life | tx_rig_act_bdr_new_renew.ex_refund_rate_acc | 75% |
| 4 | Expense at the t policy year (Et) | อัตราค่าใช้จ่าย |  | tx_rig_act_bdr_new_renew.ex_pol_year_life | tx_rig_act_bdr_new_renew.ex_pol_year_acc | 25% |
| 5 | Gross Premium at the t policy year (Pt) | เบี้ยรวมทั้งปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.gross_prem_life | tx_rig_act_bdr_new_renew.gross_prem_acc | 230569.22 |
| 6 | Claims Paid at the t policy year (Ct) * | ค่าสินไหมรวมทั้งปีกรมธรรม์ |  | tx_rig_act_bdr_new_renew.claim_paid_year_life | tx_rig_act_bdr_new_renew.claim_paid_year_acc | 0 |
|  | Original Experience Refund paid by the Ceding Company | เงิน ER ที่บริษัทคืนลูกค้า |  | tx_rig_act_bdr_new_renew.ori_ex_refund_life | tx_rig_act_bdr_new_renew.ori_ex_refund_acc | 129,695.19 |
| 7 | Net reinsurance premium to the Reinsurer | เบี้ย RI สุทธิย้อนหลังทั้งปี |  | tx_rig_act_bdr_new_renew.net_re_prem_life | tx_rig_act_bdr_new_renew.net_re_prem_acc | 34636.21 |
| 8 | Reinsurance Commission | Commission RI ย้อนหลังทั้งปี |  | tx_rig_act_bdr_new_renew.re_com_life | tx_rig_act_bdr_new_renew.re_com_acc | 17,318.11 |
| 9 | Reinsurance Experience Refund | เงิน ER ที่ Reinsurer ต้องรับผิดชอบ |  | tx_rig_act_bdr_new_renew.re_ex_refund_life | tx_rig_act_bdr_new_renew.re_ex_refund_acc | 17,318.10 |

### การแสดงข้อมูล Output : Report Footer
| No. | กำหนด Row Output | Fix |
| 1 | 20 | A) Reinsurance Experience Refund = (Reinsurance Premium / Original Premium)× Original Experience Refund |
| 2 | 21 | However, ( Reinsurance experience refund ≤ Reinsurance premium – Reinsurance commission ) shall be applied to each original GLI. |
| 3 | 22 | B) Original Experience Refund = [{ (Pt) × (1–Et)} – (Ct) ] ×A |
| 4 | 23 | t = policy year (t = 1,2, … ) |
| 5 | 24 | Et = Expense at the t policy year |
| 6 | 25 | Pt = Gross Premium at the t policy year |
| 7 | 26 | Ct = Claims Paid at the t policy year |
| 8 | 27 | A= Experience Refund Rate of original GLI |
| 9 | 28 |  |
| 10 | 29 | Remark : * = Included remaining claims after adjusting for Experience Refund carried from previous year |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. ในกรณีที่ Policy No. มี Experience Refund Life และ Accident ให้เรียงจาก Life ไป Accident


===== PAGE 1315340365 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) =====
/*<![CDATA[*/
div.rbtoc1782955735379 {padding: 0px;}
div.rbtoc1782955735379 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955735379 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- Report template version
- การแสดง Report file name
- การกำหนด File Path File Path
- File Path
- Report template Description
- การแสดง Report file name
- การเรียงลำดับข้อมูล
- การแสดง Report file name
- การแสดงชื่อ Report sheet
- การแสดง Header
- การแสดง Detail
- การเรียงลำดับข้อมูล
- การเรียงลำดับข้อมูล
- การเรียงลำดับข้อมูล
- การเรียงลำดับข้อมูล
- 
- การแสดงชื่อ Report sheet
- การแสดง Header
- การแสดง Detail
- การเรียงลำดับข้อมูล
- การแสดง Report footer

## Report template version
| Update Date | Edit By | Type | Source/File Name | File Type | Remark |  |
| 06/02/2026 | suthanee.sa | New/Renew | CR_GroupPA_Renewal_Somboon_2024Q3_GA2668CR_GroupPA_Renewal_SIIT_2024Q3_GA2663 | xlsx | ไฟล์ตัวอย่าง 2 บริษัท แต่หน้าตาเหมือนกัน ต่างกันที่ Headerโดยต้องออก Report แยกไฟล์ตาม Policy no. |  |
| Alteration | GroupPA_Alteration_OLI_2024Q3_GA2641GroupPA_Alteration_SIIT_2024Q3_GA2626GroupPA_Alteration_SIIT_2024Q3_GA2663 | xlsx | แยกชีทตามประเภท Alteration ที่มี Treansection ในรอบนั้น ถ้าไม่มี ไม่ต้องสร้าง Sheetโดยต้องออก Report แยกไฟล์ตาม Policy no. |
| Claim | CR_GroupPA_Claim_OLI_2019Q4_GA2506 | xlsx | โดยต้องออก Report แยกไฟล์ตาม Policy no. |
| 06/05/2026 | suthanee.sa | New/Renew | GroupPA_Renewal_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO} | xlsx | โดยต้องออก Report แยกไฟล์ตาม Policy no.ก่อนสร้างไฟล์ตาม Policy no. ให้ตรวจสอบก่อนว่า ค่าเหล่านี้ไม่เป็น 0 หรือ NULL จึงสร้างไฟล์ ใช้เงื่อนไขนี้เฉพาะกับ GroupPA_Renewal เท่านั้นtx_rig_act_bdr_new_renew.tot_re_nb_prem_addtx_rig_act_bdr_new_renew.tot_re_ren_prem_add(suthanee.sa 13/03/2026) | https://redmine.ochi.link/issues/57200 |
| Alteration | GroupPA_Alteration_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO} | xlsx | โดยต้องออก Report แยกไฟล์ตาม Policy no. |
| Claim | GroupPA_Claim_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO} | xlsx | โดยต้องออก Report แยกไฟล์ตาม Policy no. |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Thaireนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การแสดง Report file name
| การแสดงชื่อ File |
| สำหรับข้อมูลเบี้ยGroupPA_Renewal_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}GroupPA_Renewal_Somboon_2024Q3_GA2668สำหรับข้อมูล AlterationGroupPA_Alteration_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}GroupPA_Alteration_OLI_2024Q3_GA2641สำหรับข้อมูล ClaimGroupPA_Claim_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}GroupPA_Claim_OLI_2019Q4_GA2506ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_bdr\CR_GroupPA_Renewal_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}.xlsx\groupri\actual\{period}\report_bdr\GroupPA_Alteration_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}.xlsx\groupri\actual\{period}\report_bdr\CR_GroupPA_Claim_{COMPNAME}_{YEAR}Q{QUARTER}_{POLICYNO}.xlsx |

## Report template Description

## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Renewal_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.policy_noตัวอย่างเช่น: GroupPA_Renewal_SIIT_2024Q3_GA2663.xlsxข้อมูลนามสกุลไฟล์ : xlsx |
การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| Renewal_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.policy_noRenewal_SIIT_2024Q3_GA2663 |
การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Treaty reference : | 5 | Fix "Group Personal Accident Business" |  |
| 6 | Group Name / Policy number : | 6 | tx_rig_act_bdr_new_renew.pol_name + " / " + tx_rig_act_bdr_new_renew.policy_no | Sirindhorn International Institute of Technology / GA2663 |
| 7 | Period of Coverage : | 7 | tx_rig_act_bdr_new_renew.effective_date_from - tx_rig_act_bdr_new_renew.effective_date_to | 01/08/24 - 01/08/25 |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. | ลำดับ |  |  |  | 1 |
| 2 | Cession No. | เลขสมาชิก |  | tx_rig_act_bdr_pol_mem | cession_no | 1 |
| 3 | Name | ชื่อของสมาชิก |  | tx_rig_act_bdr_pol_mem | name |  |
| 4 | Sex | เพศของสมาชิก |  | tx_rig_act_bdr_pol_mem | sex | F |
| 5 | Date of Birth | วันเกิดของสมาชิก |  | tx_rig_act_bdr_pol_mem | dob |  |
| 6 | Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_pol_mem | age | 29 |
| 7 | Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail |  | tx_rig_act_bdr_pol_mem | class | 1 |
| 8 | Type | ประเภทความคุ้มครองหรือประเภทสมาชิก ตามเงื่อนไขของกรมธรรม์และ Treaty |  | tx_rig_act_bdr_pol_mem | add_type | 1 |
|  | Sum assured |
| 9 | Sum assured Life | ทุนประกัน สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sa_life | 1,200,000.00 |
| 10 | Sum assured Murder | ทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละราย |  | tx_rig_act_bdr_pol_mem | sa_mur | 1,200,000.00 |
| 11 | Sum assured Loadings | ทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ |  | tx_rig_act_bdr_pol_mem | sa_load | 1,200,000.00 |
|  | Sum reassured |
| 12 | Sum reassured Life | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sr_life | 400,000.00 |
| 13 | Sum reassured Murder | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม |  | tx_rig_act_bdr_pol_mem | sr_mur | 400,000.00 |
| 14 | Sum reassured Loadings | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษ |  | tx_rig_act_bdr_pol_mem | sr_load | 400,000.00 |
| 15 | RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition |  | tx_rig_act_bdr_pol_mem | ri_rate | 1.1 |
|  | Premium |
| 16 | Premium Life | เบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ คำนวณจาก Sum Reassured Accident และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_life | 440.00 |
| 17 | Premium Loadings | เบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ คำนวณจาก Sum Reassured Motorcycle และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_load | 44.00 |
| 18 | Premium Discount | ผลรวมของส่วนลดเบี้ยจาก Motorcycle และส่วนลดตามขนาดกลุ่ม ซึ่งคำนวณจากเบี้ยอุบัติเหตุและเบี้ยส่วนเพิ่มตามเงื่อนไขที่กำหนด |  | tx_rig_act_bdr_pol_mem | prem_dis | 145.20 |
| 19 | Total Premium | เบี้ยประกันต่อรวมสุทธิของสมาชิกแต่ละราย หลังหักส่วนลดแล้ว |  | tx_rig_act_bdr_pol_mem | tot_prem | 338.80 |
| 20 | Commission | ค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ คำนวณจาก Total Premium ตามอัตราที่กำหนด |  | tx_rig_act_bdr_pol_mem | com | 84.70 |
| 21 | Remark | หมายเหตุ |  | tx_rig_act_bdr_pol_mem | remark |  |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Alteration_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_alter.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_alter.policy_noตัวอย่างเช่น: GroupPA_Alteration_OLI_2024Q3_GA2641.xlsxข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| {ALTER_TYPE}_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{ALTER_TYPE} ดึงข้อมูลจาก tx_rig_act_bdr_alter_mem.alter_typeโดยตรวจสอบทุกรายการภายใต้ tx_rig_act_bdr_alter.closing_quater แยกรายการออกเป็น 4 กลุ่มดังนี้tx_rig_act_bdr_alter_mem.alter_type = NMtx_rig_act_bdr_alter_mem.alter_type = CLtx_rig_act_bdr_alter_mem.alter_type = ICtx_rig_act_bdr_alter_mem.alter_type = DCถ้ามีรายการใน alter_type ใด ให้สร้าง Sheet ของ alter_type นั้น ถ้าไม่มี ไม่ต้องสร้าง Sheet{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_alter .code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_alter.policy_noตัวอย่างเช่น: NM_OLI_2024Q3_GA2641 |

## การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | ตรวจสอบ {ALTER_TYPE} ถ้า = "NM" Fix "NEW ENTRANTS"ถ้า = "CL" Fix "WITHDRAWALS"ถ้า = "IC" Fix "INCREASED IN SUM"ถ้า = "DC" Fix "DECREASED IN SUM" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_alter.pol_name | Sirindhorn International Institute of Technology |
|  |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_alter.type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_alter.occ_class |  |

## การแสดง Detail
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Entrant | Date | วันที่สมาชิกเริ่มเข้าเป็นผู้เอาประกันภายใต้กรมธรรม์ (วันที่เริ่มมีความคุ้มครองครั้งแรก) |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Entrant Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Withdrawal | Date | วันที่สมาชิกลาออก |  | tx_rig_act_bdr_alter_mem | withdrawal_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Withdrawal Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Increased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff | 145.20 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.20 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.20 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.20 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.20 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.20 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.20 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.20 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.20 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.20 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  |  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Decreased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff |  |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.00 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.00 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.00 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.00 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.00 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.00 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับSA / SR / R/I Prem.(Decreased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.00 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest

## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Claim_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_claim.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_claim .policy_noตัวอย่างเช่น: GroupPA_Claim_SIIT_2024Q3_GA2663.xlsxข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| Claim_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_claim .code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_claim .policy_noClaim_SIIT_2024Q3_GA2663 |

## การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_claim .pol_name | Sirindhorn International Institute of Technology |
| Column M - N |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_claim .type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_claim .occ_class |  |

## การแสดง Detail
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Policy | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_claim_mem | cession_no | 1 |
| 3 | Effective | Date | วันที่เริ่มคุ้มครองปีปัจจุบัน |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 4 | Expiry | Date | วันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_claim | effective_date_to |  |
| 5 | Deceased's Name |  | ชื่อ และนามสกุลของผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | name |  |
| 6 | Sex |  | เพศผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | sex |  |
| 7 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | age |  |
| 8 | Event | Date | วันที่เกิดเหตุ/วันที่เสียชีวิต |  | tx_rig_act_bdr_claim_mem | event_date |  |
| 9 | Cause |  | สาเหตุของการเคลม เช่น เสียชีวิต อุบัติเหตุ หรือสาเหตุอื่นตามเงื่อนไขกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | cause |  |
| 10 | Claim | Benefits | ทุนประกันตามความคุ้มครอง | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | claim_benefits |  |
| 11 | Approval | Date | วันที่อนุมัติสินไหม |  | tx_rig_act_bdr_claim_mem | approve_date |  |
| 12 | Incurred | Amount | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | incurre_amo |  |
|  | Paid Amount |
| 13 | Paid Amount | Claim | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_claim_report | 1,200,000.00 |
| 14 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_inv_report | 1,200,000.00 |
|  | Reinsurer's Share |
| 15 | Reinsurer's Share | Claim | จำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_claim_report | 400,000.00 |
| 16 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_inv_report | 400,000.00 |
| No. |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Claim Benefits | ผลรวมทุนประกันตามความคุ้มครอง | TOTAL - Claim Benefitsแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | ผลรวมของ claim_benefits | 400,000.00 |
| 2 | Row สุดท้าย ตรงกับ Incurred Amount | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Incurred Amount | tx_rig_act_bdr_claim_mem | ผลรวมของ incurre_amo | 400,000.00 |
| 3 | Row สุดท้าย ตรงกับ Paid Amount Claim | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_claim_report | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ Paid Amount Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_inv_report | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ Reinsurer's Share Claim | ผลรวมจำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_report | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ Reinsurer's Share Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ re_inv_report | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1315340367 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-01 =====
| Update Date | Edit By | Type | Source/File Name | File Type | Remark |
| 06/02/2026 | suthanee.sa | New/Renew | CR_GroupPA_Renewal_Somboon_2024Q3_GA2668CR_GroupPA_Renewal_SIIT_2024Q3_GA2663 | xlsx | ไฟล์ตัวอย่าง 2 บริษัท แต่หน้าตาเหมือนกัน ต่างกันที่ Headerโดยต้องออก Report แยกไฟล์ตาม Policy no. |
| Alteration | GroupPA_Alteration_OLI_2024Q3_GA2641GroupPA_Alteration_SIIT_2024Q3_GA2626GroupPA_Alteration_SIIT_2024Q3_GA2663 | xlsx | แยกชีทตามประเภท Alteration ที่มี Treansection ในรอบนั้น ถ้าไม่มี ไม่ต้องสร้าง Sheetโดยต้องออก Report แยกไฟล์ตาม Policy no. |
| Claim | CR_GroupPA_Claim_OLI_2019Q4_GA2506 | xlsx | โดยต้องออก Report แยกไฟล์ตาม Policy no. |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Thaireนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |


===== PAGE 1318125814 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-02 New Renew =====
## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Renewal_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.policy_noตัวอย่างเช่น: GroupPA_Renewal_SIIT_2024Q3_GA2663.xlsxข้อมูลนามสกุลไฟล์ : xlsx |
การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| Renewal_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_new_renew.policy_noRenewal_SIIT_2024Q3_GA2663 |
การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Treaty reference : | 5 | Fix "Group Personal Accident Business" |  |
| 6 | Group Name / Policy number : | 6 | tx_rig_act_bdr_new_renew.pol_name + " / " + tx_rig_act_bdr_new_renew.policy_no | Sirindhorn International Institute of Technology / GA2663 |
| 7 | Period of Coverage : | 7 | tx_rig_act_bdr_new_renew.effective_date_from - tx_rig_act_bdr_new_renew.effective_date_to | 01/08/24 - 01/08/25 |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. | ลำดับ |  |  |  | 1 |
| 2 | Cession No. | เลขสมาชิก |  | tx_rig_act_bdr_pol_mem | cession_no | 1 |
| 3 | Name | ชื่อของสมาชิก |  | tx_rig_act_bdr_pol_mem | name |  |
| 4 | Sex | เพศของสมาชิก |  | tx_rig_act_bdr_pol_mem | sex | F |
| 5 | Date of Birth | วันเกิดของสมาชิก |  | tx_rig_act_bdr_pol_mem | dob |  |
| 6 | Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_pol_mem | age | 29 |
| 7 | Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail |  | tx_rig_act_bdr_pol_mem | class | 1 |
| 8 | Type | ประเภทความคุ้มครองหรือประเภทสมาชิก ตามเงื่อนไขของกรมธรรม์และ Treaty |  | tx_rig_act_bdr_pol_mem | add_type | 1 |
|  | Sum assured |
| 9 | Sum assured Life | ทุนประกัน สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sa_life | 1,200,000.00 |
| 10 | Sum assured Murder | ทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละราย |  | tx_rig_act_bdr_pol_mem | sa_mur | 1,200,000.00 |
| 11 | Sum assured Loadings | ทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ |  | tx_rig_act_bdr_pol_mem | sa_load | 1,200,000.00 |
|  | Sum reassured |
| 12 | Sum reassured Life | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sr_life | 400,000.00 |
| 13 | Sum reassured Murder | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม |  | tx_rig_act_bdr_pol_mem | sr_mur | 400,000.00 |
| 14 | Sum reassured Loadings | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษ |  | tx_rig_act_bdr_pol_mem | sr_load | 400,000.00 |
| 15 | RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition |  | tx_rig_act_bdr_pol_mem | ri_rate | 1.1 |
|  | Premium |
| 16 | Premium Life | เบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ คำนวณจาก Sum Reassured Accident และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_life | 440.00 |
| 17 | Premium Loadings | เบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ คำนวณจาก Sum Reassured Motorcycle และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_load | 44.00 |
| 18 | Premium Discount | ผลรวมของส่วนลดเบี้ยจาก Motorcycle และส่วนลดตามขนาดกลุ่ม ซึ่งคำนวณจากเบี้ยอุบัติเหตุและเบี้ยส่วนเพิ่มตามเงื่อนไขที่กำหนด |  | tx_rig_act_bdr_pol_mem | prem_dis | 145.20 |
| 19 | Total Premium | เบี้ยประกันต่อรวมสุทธิของสมาชิกแต่ละราย หลังหักส่วนลดแล้ว |  | tx_rig_act_bdr_pol_mem | tot_prem | 338.80 |
| 20 | Commission | ค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ คำนวณจาก Total Premium ตามอัตราที่กำหนด |  | tx_rig_act_bdr_pol_mem | com | 84.70 |
| 21 | Remark | หมายเหตุ |  | tx_rig_act_bdr_pol_mem | remark |  |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก


===== PAGE 1315340371 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-02 New Renew > RIG-RP-018-02-1 Output Header =====
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Treaty reference : | 5 | Fix "Group Personal Accident Business" |  |
| 6 | Group Name / Policy number : | 6 | tx_rig_act_bdr_new_renew.pol_name + " / " + tx_rig_act_bdr_new_renew.policy_no | Sirindhorn International Institute of Technology / GA2663 |
| 7 | Period of Coverage : | 7 | tx_rig_act_bdr_new_renew.effective_date_from - tx_rig_act_bdr_new_renew.effective_date_to | 01/08/24 - 01/08/25 |


===== PAGE 1315340375 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-02 New Renew > RIG-RP-018-02-2 Output Detail =====
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. | ลำดับ |  |  |  | 1 |
| 2 | Cession No. | เลขสมาชิก |  | tx_rig_act_bdr_pol_mem | cession_no | 1 |
| 3 | Name | ชื่อของสมาชิก |  | tx_rig_act_bdr_pol_mem | name |  |
| 4 | Sex | เพศของสมาชิก |  | tx_rig_act_bdr_pol_mem | sex | F |
| 5 | Date of Birth | วันเกิดของสมาชิก |  | tx_rig_act_bdr_pol_mem | dob |  |
| 6 | Age | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_pol_mem | age | 29 |
| 7 | Class | ประเภทกลุ่มอาชีพหรือชั้นความเสี่ยงของสมาชิก ตามที่กำหนดในข้อมูล Policy Detail |  | tx_rig_act_bdr_pol_mem | class | 1 |
| 8 | Type | ประเภทความคุ้มครองหรือประเภทสมาชิก ตามเงื่อนไขของกรมธรรม์และ Treaty |  | tx_rig_act_bdr_pol_mem | add_type | 1 |
|  | Sum assured |
| 9 | Sum assured Life | ทุนประกัน สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sa_life | 1,200,000.00 |
| 10 | Sum assured Murder | ทุนประกันตามความคุ้มครองกรณีเสียชีวิตจากการฆาตกรรม ของสมาชิกแต่ละราย |  | tx_rig_act_bdr_pol_mem | sa_mur | 1,200,000.00 |
| 11 | Sum assured Loadings | ทุนประกันตามความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ |  | tx_rig_act_bdr_pol_mem | sa_load | 1,200,000.00 |
|  | Sum reassured |
| 12 | Sum reassured Life | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังจากพิจารณาเงื่อนไข RI |  | tx_rig_act_bdr_pol_mem | sr_life | 400,000.00 |
| 13 | Sum reassured Murder | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม |  | tx_rig_act_bdr_pol_mem | sr_mur | 400,000.00 |
| 14 | Sum reassured Loadings | ทุนประกันที่ส่งประกันต่อ สำหรับความคุ้มครองกรณีความคุ้มครองพิเศษ |  | tx_rig_act_bdr_pol_mem | sr_load | 400,000.00 |
| 15 | RI Rate | อัตราเบี้ยประกันต่อที่ใช้คำนวณเบี้ย โดยอ้างอิงจากเงื่อนไข RI Condition |  | tx_rig_act_bdr_pol_mem | ri_rate | 1.1 |
|  | Premium |
| 16 | Premium Life | เบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุ คำนวณจาก Sum Reassured Accident และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_life | 440.00 |
| 17 | Premium Loadings | เบี้ยประกันต่อสำหรับความคุ้มครองกรณีความคุ้มครองความเสี่ยงพิเศษ คำนวณจาก Sum Reassured Motorcycle และ RI Rate |  | tx_rig_act_bdr_pol_mem | prem_load | 44.00 |
| 18 | Premium Discount | ผลรวมของส่วนลดเบี้ยจาก Motorcycle และส่วนลดตามขนาดกลุ่ม ซึ่งคำนวณจากเบี้ยอุบัติเหตุและเบี้ยส่วนเพิ่มตามเงื่อนไขที่กำหนด |  | tx_rig_act_bdr_pol_mem | prem_dis | 145.20 |
| 19 | Total Premium | เบี้ยประกันต่อรวมสุทธิของสมาชิกแต่ละราย หลังหักส่วนลดแล้ว |  | tx_rig_act_bdr_pol_mem | tot_prem | 338.80 |
| 20 | Commission | ค่าคอมมิชชั่นที่บริษัทประกันได้รับจากการส่งประกันต่อ คำนวณจาก Total Premium ตามอัตราที่กำหนด |  | tx_rig_act_bdr_pol_mem | com | 84.70 |
| 21 | Remark | หมายเหตุ |  | tx_rig_act_bdr_pol_mem | remark |  |


===== PAGE 1318125825 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-03 Alteration =====
## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Alteration_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_alter.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_alter.policy_noตัวอย่างเช่น: GroupPA_Alteration_OLI_2024Q3_GA2641.xlsxข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| {ALTER_TYPE}_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{ALTER_TYPE} ดึงข้อมูลจาก tx_rig_act_bdr_alter_mem.alter_typeโดยตรวจสอบทุกรายการภายใต้ tx_rig_act_bdr_alter.closing_quater แยกรายการออกเป็น 4 กลุ่มดังนี้tx_rig_act_bdr_alter_mem.alter_type = NMtx_rig_act_bdr_alter_mem.alter_type = CLtx_rig_act_bdr_alter_mem.alter_type = ICtx_rig_act_bdr_alter_mem.alter_type = DCถ้ามีรายการใน alter_type ใด ให้สร้าง Sheet ของ alter_type นั้น ถ้าไม่มี ไม่ต้องสร้าง Sheet{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_alter .code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_alter.policy_noตัวอย่างเช่น: NM_OLI_2024Q3_GA2641 |

## การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | ตรวจสอบ {ALTER_TYPE} ถ้า = "NM" Fix "NEW ENTRANTS"ถ้า = "CL" Fix "WITHDRAWALS"ถ้า = "IC" Fix "INCREASED IN SUM"ถ้า = "DC" Fix "DECREASED IN SUM" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_alter.pol_name | Sirindhorn International Institute of Technology |
|  |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_alter.type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_alter.occ_class |  |

## การแสดง Detail
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Entrant | Date | วันที่สมาชิกเริ่มเข้าเป็นผู้เอาประกันภายใต้กรมธรรม์ (วันที่เริ่มมีความคุ้มครองครั้งแรก) |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Entrant Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Withdrawal | Date | วันที่สมาชิกลาออก |  | tx_rig_act_bdr_alter_mem | withdrawal_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Withdrawal Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Increased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff | 145.20 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.20 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.20 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.20 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.20 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.20 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.20 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.20 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.20 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.20 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  |  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Decreased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff |  |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.00 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.00 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.00 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.00 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.00 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.00 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับSA / SR / R/I Prem.(Decreased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.00 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest


===== PAGE 1318125830 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-03 Alteration > RIG-RP-018-03-1 Output Header =====
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | ตรวจสอบ {ALTER_TYPE} ถ้า = "NM" Fix "NEW ENTRANTS"ถ้า = "CL" Fix "WITHDRAWALS"ถ้า = "IC" Fix "INCREASED IN SUM"ถ้า = "DC" Fix "DECREASED IN SUM" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_alter.pol_name | Sirindhorn International Institute of Technology |
|  |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_alter.type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_alter.occ_class |  |


===== PAGE 1318125832 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-03 Alteration > RIG-RP-018-03-2 Output Detail =====
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Entrant | Date | วันที่สมาชิกเริ่มเข้าเป็นผู้เอาประกันภายใต้กรมธรรม์ (วันที่เริ่มมีความคุ้มครองครั้งแรก) |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Entrant Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Withdrawal | Date | วันที่สมาชิกลาออก |  | tx_rig_act_bdr_alter_mem | withdrawal_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SUM INSURED |
| 8 | SUM INSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_acc | 1,200,000.00 |
| 9 | MURDER | จำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_mur | 1,200,000.00 |
| 10 | LOADINGS | จำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน |  | tx_rig_act_bdr_alter_mem | sum_insu_load | 1,200,000.00 |
|  | SUM REINSURED |
| 11 | SUM REINSURED/1,000 | ACCIDENT | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_acc | 400,000.00 |
| 12 | MURDER | จำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_mur | 400,000.00 |
| 13 | LOADINGS | จำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ |  | tx_rig_act_bdr_alter_mem | sum_re_load | 400,000.00 |
|  | Premium |
| 14 | REINSURANCE PREMIUM | ACCIDENT | จำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_acc | 440.00 |
| 15 | LOADINGS | จำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer |  | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 16 | Discount | จำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด |  | tx_rig_act_bdr_alter_mem | re_prem_dis | 338.80 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันภัยสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ SUM INSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันภัยที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกัน | TOTAL - SUM INSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - ACCIDENT |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองอุบัติเหตุแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 400,000.00 |
| 7 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - MURDER |  | ผลรวมจำนวนเงินเอาประกันต่อสำหรับความคุ้มครองกรณีฆาตกรรมแสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 MURDER | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 400,000.00 |
| 8 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - LOADINGS |  | ผลรวมจำนวนเงินเอาประกันต่อที่ใช้ในการคำนวณส่วนเพิ่มเบี้ย (Loading)แสดงค่าเป็นหน่วยต่อ 1,000 ของทุนประกันต่อ | TOTAL - SUM REINSURED/1,000 LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 400,000.00 |
| 9 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - ACCIDENT |  | ผลรวมจำนวนเบี้ยประกันต่อสำหรับความคุ้มครองอุบัติเหตุที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM ACCIDENT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 400,000.00 |
| 10 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - LOADINGS |  | ผลรวมจำนวนเบี้ยประกันต่อส่วนเพิ่ม (Loading Premium) ที่ต้องชำระให้ Reinsurer | TOTAL - REINSURANCE PREMIUM LOADINGS | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 400,000.00 |
| 11 | Row สุดท้าย ตรงกับ REINSURANCE PREMIUM - Discount |  | ผลรวมจำนวนส่วนลดเบี้ยประกันต่อที่นำมาหักออกจากเบี้ยประกันต่อทั้งหมด | TOTAL - REINSURANCE PREMIUM DISCOUNT | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Withdrawal Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Increased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff | 145.20 |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.20 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.20 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.20 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.20 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.20 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.20 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.20 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.20 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Increased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.20 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | POLICY | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_alter | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_alter_mem | cession_no | 1 |
| 3 | Name - Surname |  | ชื่อ และนามสกุลของสมาชิก |  | tx_rig_act_bdr_alter_mem | name |  |
| 4 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_alter_mem | age |  |
| 5 | Coverage | Period | ช่วงระยะเวลาความคุ้มครองของสมาชิก แสดงในรูปแบบวันที่เริ่มต้นและวันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_alter_mem | cov_period |  |
| 6 | Effective | Date | วันที่มีผล |  | tx_rig_act_bdr_alter_mem | entrant_date |  |
| 7 | No. of | Day | จำนวนวันของความคุ้มครองที่ใช้ในการคำนวณเบี้ยประกันต่อในรอบการประมวลผล |  | tx_rig_act_bdr_alter_mem | num_of_date |  |
|  | SA / SR / R/I Prem. |
| 8 | SA / SR / R/I Prem.(Before Change) | ACCIDENT | ทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_bf | 145.20 |
| 9 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_bf | 145.20 |
| RI Premium |  |  |  |
| 10 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_bf | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_bf | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_bf | 145.20 |
| 11 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_bf | 145.20 |
|  | SA / SR / R/I Prem. |
| 12 | SA / SR / R/I Prem.(After Change) | ACCIDENT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc | 145.20 |
| 13 | MURDER | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur | 145.20 |
| RI Premium |  |  |  |
| 14 | LOADINGS | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load | 145.20 |
| 15 | DISCOUNT | ทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis | 145.20 |
|  |  | SA / SR / R/I Prem. |
| 16 | SA / SR / R/I Prem.(Decreased) | ACCIDENT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_acc_diff | 440.00 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_acc_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_acc_diff | 145.20 |
| 17 | MURDER | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_mur_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_mur_diff | 145.20 |
| RI Premium |  |  |  |
| 18 | LOADINGS | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA | tx_rig_act_bdr_alter_mem | sum_insu_load_diff | 145.20 |
| SR | tx_rig_act_bdr_alter_mem | sum_re_load_diff | 145.20 |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_load_diff | 145.20 |
| 19 | DISCOUNT | ส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | SA |  |  |  |
| SR |  |  |  |
| RI Premium | tx_rig_act_bdr_alter_mem | re_prem_dis_diff |  |
| No. |  |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Name - Surname | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Coverage |  | จำนวนสมาชิกทั้งหมด | TOTAL - Cert. No.กรณีมีสมาชิกรายการเดียว ให้ลงท้ายด้วยคำว่า Personกรณีมีสมาชิกมากกว่า 1 รายการ ให้ลงท้ายด้วยคำว่า Persons |  |  |  |
| 3 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - ACCIDENT |  | ผลรวมทุนประกัน (SA), ทุนประกันต่อ (SR) และเบี้ยประกันต่อ (RI Premium) สำหรับความคุ้มครองอุบัติเหตุ ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_bf | 145.00 |
| 4 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 5 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Before Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_bf | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_bf | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_bf | 145.00 |
| 6 | Row สุดท้าย ตรงกับ SUM REINSURED/1,000 - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ก่อนมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Before DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Before DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_bf | 145.00 |
| 7 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - ACCIDENT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc | 145.00 |
| 8 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - MURDER |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 9 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - LOADINGS |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load | 145.00 |
| 10 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(After Change) - DISCOUNT |  | ผลรวมทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount หลังมีการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR After DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. After DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis | 145.00 |
| 11 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - ACCIDENT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองอุบัติเหตุ ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_acc_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased ACCIDENT แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_acc_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased ACCIDENT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_acc_diff | 145.00 |
| 12 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - MURDER |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ สำหรับความคุ้มครองกรณีฆาตกรรม ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_mur_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased MURDER แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_mur_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased MURDER กำหนดเป็นค่าว่าง |  |  |  |
| 13 | Row สุดท้าย ตรงกับSA / SR / R/I Prem.(Decreased) - LOADINGS |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Loading ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_insu_load_diff | 145 |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased LOADINGS แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_alter_mem | ผลรวมของ sum_re_load_diff | 145 |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased LOADINGS แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_load_diff | 145.00 |
| 14 | Row สุดท้าย ตรงกับ SA / SR / R/I Prem.(Decreased) - DISCOUNT |  | ผลรวมส่วนต่างของทุนประกัน, ทุนประกันต่อ และเบี้ยประกันต่อ ในส่วน Discount ที่เพิ่มขึ้นจากการเปลี่ยนแปลง | แถวที่ 1 ผลรวมค่า SA Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 2 ผลรวมค่า SR Increased DISCOUNT กำหนดเป็นค่าว่าง |  |  |  |
|  |  |  |  | แถวที่ 3 ผลรวมค่า RI Prem. Increased DISCOUNT แสดงด้วยข้อมูลทศนิยม 2 ตำแหน่ง | tx_rig_act_bdr_alter_mem | ผลรวมของ re_prem_dis_diff | 145.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก2. เรียงตาม Effective Date จาก Oldest ไป Newest


===== PAGE 1318125834 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-04 Claim =====
## การแสดง Report file name
| การแสดงชื่อ File |
| GroupPA_Claim_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}.xlsx{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_claim.code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_claim .policy_noตัวอย่างเช่น: GroupPA_Claim_SIIT_2024Q3_GA2663.xlsxข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ File |
| Claim_{CODE_NAME}_{YYYY}{QQ}_{POLICY_NO}{CODE_NAME} ดึงข้อมูลจาก tx_rig_act_bdr_claim .code_name_pol{YYYY}{QQ} ดึงข้อมูลจาก tx_rig_act_hd.closing_quater{POLICY_NO} ดึงข้อมูลจาก tx_rig_act_bdr_claim .policy_noClaim_SIIT_2024Q3_GA2663 |

## การแสดง Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_claim .pol_name | Sirindhorn International Institute of Technology |
| Column M - N |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_claim .type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_claim .occ_class |  |

## การแสดง Detail
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Policy | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_claim_mem | cession_no | 1 |
| 3 | Effective | Date | วันที่เริ่มคุ้มครองปีปัจจุบัน |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 4 | Expiry | Date | วันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_claim | effective_date_to |  |
| 5 | Deceased's Name |  | ชื่อ และนามสกุลของผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | name |  |
| 6 | Sex |  | เพศผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | sex |  |
| 7 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | age |  |
| 8 | Event | Date | วันที่เกิดเหตุ/วันที่เสียชีวิต |  | tx_rig_act_bdr_claim_mem | event_date |  |
| 9 | Cause |  | สาเหตุของการเคลม เช่น เสียชีวิต อุบัติเหตุ หรือสาเหตุอื่นตามเงื่อนไขกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | cause |  |
| 10 | Claim | Benefits | ทุนประกันตามความคุ้มครอง | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | claim_benefits |  |
| 11 | Approval | Date | วันที่อนุมัติสินไหม |  | tx_rig_act_bdr_claim_mem | approve_date |  |
| 12 | Incurred | Amount | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | incurre_amo |  |
|  | Paid Amount |
| 13 | Paid Amount | Claim | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_claim_report | 1,200,000.00 |
| 14 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_inv_report | 1,200,000.00 |
|  | Reinsurer's Share |
| 15 | Reinsurer's Share | Claim | จำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_claim_report | 400,000.00 |
| 16 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_inv_report | 400,000.00 |
| No. |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Claim Benefits | ผลรวมทุนประกันตามความคุ้มครอง | TOTAL - Claim Benefitsแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | ผลรวมของ claim_benefits | 400,000.00 |
| 2 | Row สุดท้าย ตรงกับ Incurred Amount | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Incurred Amount | tx_rig_act_bdr_claim_mem | ผลรวมของ incurre_amo | 400,000.00 |
| 3 | Row สุดท้าย ตรงกับ Paid Amount Claim | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_claim_report | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ Paid Amount Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_inv_report | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ Reinsurer's Share Claim | ผลรวมจำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_report | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ Reinsurer's Share Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ re_inv_report | 400,000.00 |

## การเรียงลำดับข้อมูล
1. เรียงตาม Cert No. น้อยไปมาก


===== PAGE 1318125837 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-04 Claim > RIG-RP-018-04-1 Output Header =====
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "RENEWAL BUSINESS" |  |
| 2 | Header2 | 2 | แปลงจากค่า tx_rig_act_hd.closing_quarter | 3rd Quarter 2024 |
| 3 | - | 3 | - |  |
| Column A |
| 4 | Company : | 4 | Fix "Ocean Life Insurance Public Company Limited" |  |
| 5 | Plan | 5 | Fix "GPA Business" |  |
| 6 | Treaty reference : | 6 | Fix "Group Personal Accident Business" |  |
| 7 | Policyholder | 7 | tx_rig_act_bdr_claim .pol_name | Sirindhorn International Institute of Technology |
| Column M - N |
| 8 | - | 4 | tx_rig_act_hd.created_date | 06 December 2024 |
| 9 | Currency : | 5 | Fix "THAILAND BAHT" |  |
| 10 | Type | 6 | tx_rig_act_bdr_claim .type_coverage_pol |  |
| 11 | Class | 7 | tx_rig_act_bdr_claim .occ_class |  |


===== PAGE 1318125840 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-018 BDR Act Thaire (Reinsurer) > RIG-RP-018-04 Claim > RIG-RP-018-04-2 Output Detail =====
| No. | Row (x) | Row (x + 1) | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Policy | No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no | 1 |
| 2 | Cert. | No. | เลขสมาชิก |  | tx_rig_act_bdr_claim_mem | cession_no | 1 |
| 3 | Effective | Date | วันที่เริ่มคุ้มครองปีปัจจุบัน |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 4 | Expiry | Date | วันที่สิ้นสุดความคุ้มครอง |  | tx_rig_act_bdr_claim | effective_date_to |  |
| 5 | Deceased's Name |  | ชื่อ และนามสกุลของผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | name |  |
| 6 | Sex |  | เพศผู้เอาประกัน |  | tx_rig_act_bdr_claim_mem | sex |  |
| 7 | Age |  | อายุของสมาชิก ณ วันที่มีผลบังคับของกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | age |  |
| 8 | Event | Date | วันที่เกิดเหตุ/วันที่เสียชีวิต |  | tx_rig_act_bdr_claim_mem | event_date |  |
| 9 | Cause |  | สาเหตุของการเคลม เช่น เสียชีวิต อุบัติเหตุ หรือสาเหตุอื่นตามเงื่อนไขกรมธรรม์ |  | tx_rig_act_bdr_claim_mem | cause |  |
| 10 | Claim | Benefits | ทุนประกันตามความคุ้มครอง | แสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | claim_benefits |  |
| 11 | Approval | Date | วันที่อนุมัติสินไหม |  | tx_rig_act_bdr_claim_mem | approve_date |  |
| 12 | Incurred | Amount | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | incurre_amo |  |
|  | Paid Amount |
| 13 | Paid Amount | Claim | จำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_claim_report | 1,200,000.00 |
| 14 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | paid_inv_report | 1,200,000.00 |
|  | Reinsurer's Share |
| 15 | Reinsurer's Share | Claim | จำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_claim_report | 400,000.00 |
| 16 | Investigation Expense | จำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer |  | tx_rig_act_bdr_claim_mem | re_inv_report | 400,000.00 |
| No. |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Row สุดท้าย ตรงกับ Claim Benefits | ผลรวมทุนประกันตามความคุ้มครอง | TOTAL - Claim Benefitsแสดงเป็นจำนวนเต็ม (ไม่มีทศนิยม) | tx_rig_act_bdr_claim_mem | ผลรวมของ claim_benefits | 400,000.00 |
| 2 | Row สุดท้าย ตรงกับ Incurred Amount | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Incurred Amount | tx_rig_act_bdr_claim_mem | ผลรวมของ incurre_amo | 400,000.00 |
| 3 | Row สุดท้าย ตรงกับ Paid Amount Claim | ผลรวมจำนวนเงินสินไหมที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_claim_report | 400,000.00 |
| 4 | Row สุดท้าย ตรงกับ Paid Amount Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนที่บริษัทอนุมัติจ่าย | TOTAL - Paid Amount Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ paid_inv_report | 400,000.00 |
| 5 | Row สุดท้าย ตรงกับ Reinsurer's Share Claim | ผลรวมจำนวนเงินค่าสินไหมที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Claim | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_report | 400,000.00 |
| 6 | Row สุดท้าย ตรงกับ Reinsurer's Share Investigation Expense | ผลรวมจำนวนเงินค่าใช้จ่ายสอบสวนหรือกฎหมายที่เป็นสัดส่วนความรับผิดของ Reinsurer | TOTAL - Reinsurer's Share Investigation Expense | tx_rig_act_bdr_claim_mem | ผลรวมของ re_inv_report | 400,000.00 |


===== PAGE 1316094371 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) =====
TOC
/*<![CDATA[*/
div.rbtoc1782955737466 {padding: 0px;}
div.rbtoc1782955737466 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955737466 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 การกำหนด File Path 2.1 File Path
- 2.1 File Path
- 3 Report template Description 3.1 การแสดงชื่อ Report sheet : DT Claim 3.2 การแสดงข้อมูล Output : Report Header 3.3 การแสดงข้อมูล Output : Report Detail 3.4 การเรียงลำดับข้อมูล 3.5 การแสดงชื่อ Report sheet : MedAcc 3.6 การแสดงข้อมูล Output : Report Header 3.7 การแสดงข้อมูล Output : Report Detail 3.8 การเรียงลำดับข้อมูล 3.9 การแสดงชื่อ Report sheet : 3.10 การแสดงข้อมูล Output : Report Header 3.11 การแสดงข้อมูล Output : Header Detail 3.12 การแสดงข้อมูล Output : Report Detail 3.13 การเรียงลำดับข้อมูล 3.14 การแสดงชื่อ Report sheet : Dismemberment Claim 3.15 การแสดงข้อมูล Output : Report Header 3.16 การแสดงข้อมูล Output : Header Detail 3.17 การแสดงข้อมูล Output : Report Detail 3.18 การเรียงลำดับข้อมูล
- 3.1 การแสดงชื่อ Report sheet : DT Claim
- 3.2 การแสดงข้อมูล Output : Report Header
- 3.3 การแสดงข้อมูล Output : Report Detail
- 3.4 การเรียงลำดับข้อมูล
- 3.5 การแสดงชื่อ Report sheet : MedAcc
- 3.6 การแสดงข้อมูล Output : Report Header
- 3.7 การแสดงข้อมูล Output : Report Detail
- 3.8 การเรียงลำดับข้อมูล
- 3.9 การแสดงชื่อ Report sheet :
- 3.10 การแสดงข้อมูล Output : Report Header
- 3.11 การแสดงข้อมูล Output : Header Detail
- 3.12 การแสดงข้อมูล Output : Report Detail
- 3.13 การเรียงลำดับข้อมูล
- 3.14 การแสดงชื่อ Report sheet : Dismemberment Claim
- 3.15 การแสดงข้อมูล Output : Report Header
- 3.16 การแสดงข้อมูล Output : Header Detail
- 3.17 การแสดงข้อมูล Output : Report Detail
- 3.18 การเรียงลำดับข้อมูล
- 4 การแสดง Report file name
- 5 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 24/01/2026 | akkarawat.le | Daiichi_YYYYQQ | xlsx |  |
| 06/05/2026 | suthanee.sa | Daiichi_YYYYQQ | xlsx | https://redmine.ochi.link/issues/57201 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Daiichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_bdr\Daiichi_{YEAR}Q{QUARTER}.xlsx |

## Report template Description
| Report Detail Section |
| ตาม Report Detail |

### การแสดงชื่อ Report sheet : DT Claim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : DT Claim orderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy (ค.ศ.) | 26/06/2024 |
| 3 | Header2 | 2 | Fix "CLAIM NOTIFICATION" |  |
| 4 | Currency : | 3 | Fix "THAILAND BAHT" |  |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim_mem.ori_sum_insu_life และ tx_rig_act_bdr_claim_mem.ori_sum_insu_acc ไม่เป็น 0 หรือค่าว่าง เท่านั้น
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. DC. |  |  |  |  |  |
| 2 | Pol.No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no |  |
| 3 | RI No. | เลขอ้างอิงการส่งงานประกันต่อ |  | tx_rig_act_bdr_claim | ri_no | 1701001 |
| 4 | Name | ชื่อกรมธรรม์ |  | tx_rig_act_bdr_claim | pol_name |  |
| 5 | Beginning |  |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 6 | End |  |  | tx_rig_act_bdr_claim | effective_date_to |  |
| 7 | No. |  |  | tx_rig_act_bdr_claim_mem | seq |  |
| 8 | Cession No. |  |  | tx_rig_act_bdr_claim_mem | cession_no |  |
| 9 | Effective Date |  |  | tx_rig_act_bdr_claim | ri_com_date |  |
| 10 | Deceased's Name |  |  | tx_rig_act_bdr_claim | name |  |
| 11 | Date of Birth |  |  | tx_rig_act_bdr_claim | dob |  |
| 12 | Age |  |  | tx_rig_act_bdr_claim | age |  |
| 13 | Date of Death |  |  | tx_rig_act_bdr_claim | event_date |  |
| 14 | Cause of Death |  |  | tx_rig_act_bdr_claim | cause |  |
| 15 | Original Sum Insured |
| 16 | - Life |  |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_life |  |
| 17 | - Accident |  |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_acc |  |
| 18 | Payment Date |  |  | tx_rig_act_bdr_claim_mem | approve_date (suthanee.sa 27/03/2026) |  |
| 19 | Amount Paid By Insurer |
| 20 | - Life |  |  | tx_rig_act_bdr_claim_mem | amo_paid_life |  |
| 21 | - Accident |  |  | tx_rig_act_bdr_claim_mem | amo_paid_acc |  |
| 22 | Reinsurer's Share |
| 23 | - Life |  |  | tx_rig_act_bdr_claim_mem | re_claim_life |  |
| 24 | - Accident |  |  | tx_rig_act_bdr_claim_mem | re_claim_acc |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | alignment | Example |
| 1 | TOTAL |  |  |  |  | center |  |
| 2 | Row สุดท้าย ตรงกับ Original Sum Insured - Life | ผลรวมทุนประกันชีวิตของสมาชิก |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_life | center | 16 Policies |
| 3 | Row สุดท้าย ตรงกับ Original Sum Insured - Accident | ผลรวมทุนประกันอุบัติเหตุของสมาชิก |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_acc | right | 412902.05 |
|  | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_life |  |  |
|  | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_acc |  |  |
|  | Row สุดท้าย ตรงกับ Reinsurer's Share - Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_life |  |  |
|  | Row สุดท้าย ตรงกับ Reinsurer's Share - Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_acc |  |  |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Cert No. น้อยไปมาก

### การแสดงชื่อ Report sheet : MedAcc
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : MedAccorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "Report of Medical Expenses as a result of Accident" |  |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim.sum_amo_paid_med_acc ไม่เป็น 0 หรือค่าว่าง เท่านั้น
รวมทุกรายการจาก tx_rig_act_bdr_claim ที่มี policy_no และ tx_rig_act_bdr_claim.effective_date_from เดียวกัน ไว้ใน Record เดียวกัน
รวมค่า tx_rig_act_bdr_claim.frequency_med_acc กับ tx_rig_act_bdr_claim.sum_amo_paid_med_acc (suthanee.sa 10/03/2026)
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. | ลำดับ | Running Auto |  |  |  |
| 2 | Policy No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no |  |
| 3 | Reinsurance No. | เลขอ้างอิงการส่งงานประกันต่อ |  | tx_rig_act_bdr_claim | reinsurer_no |  |
| 4 | Policy Name | ชื่อกรมธรรม์ |  | tx_rig_act_bdr_claim | pol_name |  |
| 5 | Period |  |  | tx_rig_act_bdr_claim | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to |  |
| 6 | Frequency |  |  | tx_rig_act_bdr_claim | frequency_med_acc |  |
| 7 | Amount (Baht) |  |  | tx_rig_act_bdr_claim | sum_amo_paid_med_acc |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | alignment | Example |
| 1 | TOTAL |  |  |  |  | center |  |
| 2 | Row สุดท้าย ตรงกับ Policy Name | ผลรวมจำนวนกรมธรรม์ทั้งหมด |  |  |  | center | 16 Policies |
| 3 | Row สุดท้าย ตรงกับ Amount (Baht) | ผลรวมจำนวนเงินสินไหมทั้งหมด |  |  | ผลรวมของ Amount (Baht) ของทุกกรม | right | 412902.05 |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

### การแสดงชื่อ Report sheet : MedClaim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : MedClaimorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC CO., LTD. |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "MEDICAL CLAIMS REPORT |  |
แสดงข้อมูลกรมธรรม์ตาม Template ทีละกรมธรรม์ และออกรายงานต่อไปจนครบทุกรายการกรมธรรม์

### การแสดงข้อมูล Output : Header Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim.frequency_opd หรือ tx_rig_act_bdr_claim.frequency_ipd หรือ tx_rig_act_bdr_claim.frequency_dental ไม่เป็น 0 หรือค่าว่าง
| No. | แสดงข้อมูล Report Header | Row | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Commencement Date | 1 |  | September 1, 2007 |
| 2 | Policy Name | 1 | tx_rig_act_bdr_claim.pol_name | KRUNGTHAI MIZUHO LEASING COMPANY LIMITED |
| 3 | Original Policy No | 1 | tx_rig_act_bdr_claim.policy_no | GH1751 |
| 4 | Policy Year | 2 | tx_rig_act_bdr_claim.policy_year | 17 |
| 5 | Date Payfrom-Payto | 2 | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to | September 1, 2023 - August 31, 2024 |
| 6 | Reinsurance No. | 2 | tx_rig_act_bdr_claim.reinsurer_no | DG015 |

### การแสดงข้อมูล Output : Report Detail
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Month | เดือน,ปี | รูปแบบบ Mmmm, yyyy | tx_rig_act_bdr_claim | closing_quarterแปลงค่าที่ได้ออกเป็น 3 เดือนตามรอบ quarterโดย closing_quarter ประกอบไปด้วย YYYYQXแทน yyyy ในตารางด้วย YYYY ใน Fieldแทน Mmmm ด้วยการเอา QX มาแปลงเป็นเดือนทั้งหมดภายใน Xถ้า X = 1 แปลงเป็น January , February , Marchถ้า X = 2 แปลงเป็น April , May , Juneถ้า X = 3 แปลงเป็น July , August , Septemberถ้า X = 4 แปลงเป็น October , November , และ December แยกข้อมูลตาม data_period โดย data_period จะมีค่าเท่ากับเดือนที่แปลงมาจาก X ถ้าไม่มีข้อมูลที่ data_period ตรงกับ X ให้ลง 0 |  |
| 2 | OPD |
| 3 | Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยนอก (OPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_opd |  |
| 4 | Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยนอก (OPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_opd |  |
| 5 | IPD |
| 6 | Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยใน (IPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_ipd |  |
| 7 | Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยใน (IPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_ipd |  |
| 8 | DENTAL |
| 9 | Frequency | จำนวนครั้งของสินไหมค่าทันตกรรม (Dental)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_dental |  |
| 10 | Amount (Baht) | ยอดเงินสินไหมค่าทันตกรรม (Dental) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_dental |  |
| 11 | TOTAL |
| 12 | Frequency | จำนวนครั้งของสินไหม(OPD + IPD + Dental) ในเดือนนั้น ๆ |  | sum ยอดรวม frequency_opd + frequency_ipd + frequency_dental ตามเดือน |  |  |
| 13 | Amount (Baht) | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) ในเดือนนั้น ๆ หน่วยเป็นบาท |  | sum ยอดรวม sum_amo_paid_opd + sum_amo_paid_ipd + sum_amo_paid_dental ตามเดือน |  |  |
| 14 | Grand Total | ยอดเงินสินไหมรวมทั้งหมดตามประเภทความคุ้มครอง ของ Quarter ภายใต้กรมธรรม์ และวันเริ่มคุ้มครองเดียวกัน หน่วยเป็นบาท | คำนวณผลรวมของทุกเดือนตามกรมธรรม์ | sum ยอดรวมของ Amount ทุกเดือน |  |  |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

### การแสดงชื่อ Report sheet : Dismemberment Claim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : Dismemberment Claimorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 |  |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "MEDICAL CLAIMS REPORT |  |
แสดงข้อมูลกรมธรรม์ตาม Template ทีละกรมธรรม์ และออกรายงานต่อไปจนครบทุกรายการกรมธรรม์

### การแสดงข้อมูล Output : Header Detail
| No. | แสดงข้อมูล Report Header | Row | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC CO., LTD. |  |
| 2 |  | 1 | ระบบต้องกำหนดลำดับหมายเลขลำดับแยกตาม Quarter โดยเริ่มต้นที่หมายเลข 1 ในทุก Quarterและเรียงลำดับเพิ่มขึ้นตามจำนวนกรมธรรม์ที่อยู่ใน Quarter นั้นโดยไม่ต่อเนื่องจาก Quarter ก่อนหน้าตัวอย่างใน Quarter 2025Q1 มี 10 Cases ระบบจะกำหนดหมายเลขเป็น 1–10และเมื่อเข้าสู่ Quarter 2025Q2 หากมี 5 Cases ระบบจะกำหนดหมายเลขเป็น 1–5 | No. DMC.048 |
| 3 |  | 2 | Fix "CLAIM NOTIFICATION" |  |
| 4 |  | 2 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 5 |  | 3 | tx_rig_act_bdr_claim.policy_no + " (" + tx_rig_act_bdr_claim.ri_no + ") : " + tx_rig_act_bdr_claim.pol_name | GH2001 (DG082) : ZEON CHEMICALS (THAILAND) CO.,LTD. |
| 6 | For the period From | 4 | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to | July 23, 2023 - July 22, 2024 |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim_mem.ori_sum_insu_dismem หรือ tx_rig_act_bdr_claim_mem.ori_sum_insu_tpd ไม่เป็น 0 หรือค่าว่าง เท่านั้น
| No. | Column Name |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. |  | เดือน,ปี | รูปแบบบ Mmmm, yyyy |  |  |  |
| 2 | Cession | No. |  |  | tx_rig_act_bdr_claim_mem | cession_no |  |
| 3 | Effective | Date |  |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 4 | Claimant's Name |  |  |  | tx_rig_act_bdr_claim_mem | name |  |
| 5 | Date of | Birth |  |  | tx_rig_act_bdr_claim_mem | dob |  |
| 6 | Age |  |  |  | tx_rig_act_bdr_claim_mem | age |  |
| 7 | Event | Date |  |  | tx_rig_act_bdr_claim_mem | event_date |  |
| 8 | Cause of | Dismemberment / Result |  |  | tx_rig_act_bdr_claim_mem | cause |  |
|  | Original SA |
| 9 | Original SA | Dismemberment | จำนวนครั้งของสินไหมรักษาผู้ป่วยนอก (OPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_dismem |  |
| 10 |  | TPD | ยอดเงินสินไหมค่ารักษาผู้ป่วยนอก (OPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_tpd |  |
|  | Payment Date |
| 11 | Payment | Date | จำนวนครั้งของสินไหมรักษาผู้ป่วยใน (IPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | approve_date (suthanee.sa 27/03/2026) |  |
|  | Amount Paid By Insurer |
| 12 | Amount Paid By Insurer | Dismemberment | จำนวนครั้งของสินไหมค่าทันตกรรม (Dental)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | amo_paid_dismem |  |
| 13 |  | TPD | ยอดเงินสินไหมค่าทันตกรรม (Dental) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | amo_paid_tpd |  |
|  | Reinsurer's Share |
| 14 | Reinsurer's Share | Dismemberment | จำนวนครั้งของสินไหม(OPD + IPD + Dental) ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | re_claim_dismem |  |
| 15 |  | TPD | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) ในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | re_claim_tpd |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Original SA - Dismemberment | ผลรวมทุนตามความคุ้มครอง Dismemberment |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_dismem | 412902.00 |
| 3 | Row สุดท้าย ตรงกับ Original SA - TPD | ผลรวมทุนตามความคุ้มครอง TPD |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_tpd | 412902.00 |
| 4 | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_dismem | 412902.00 |
| 5 | Row สุดท้าย ตรงกับ Amount Paid By Insurer - TPD | ผลรวมจำนวนเงินสินไหม TPD ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_tpd | 412902.00 |
| 6 | Row สุดท้าย ตรงกับ Reinsurer's Share - Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_dismem | 412902.00 |
| 7 | Row สุดท้าย ตรงกับ Reinsurer's Share - TPD | ผลรวมจำนวนเงินสินไหม TPD ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_tpd | 412902.00 |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report file name
| การแสดงชื่อ File |
| Daiichi_YYYYQQ ใช้ข้อมูลจาก tx_rig_process_hd.data_quarter มาแสดง ตัวอย่างเช่น: Daiichi_202501 (pongsathorn.pa)ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1317405025 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) > RIG-RP-019-01 =====
| Update Date | Edit By | Source/File Name | File Type | Remark |
| 24/01/2026 | akkarawat.le | Daiichi_YYYYQQ | xlsx |  |
| 06/05/2026 | suthanee.sa | Daiichi_YYYYQQ | xlsx | https://redmine.ochi.link/issues/57201 |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล BDR Report RI Actual ของสัญญา Daiichiนำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ |


===== PAGE 1317405034 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) > RIG-RP-019-02 Sheet DT Claim =====
### การแสดงชื่อ Report sheet : DT Claim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : DT Claim orderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy (ค.ศ.) | 26/06/2024 |
| 3 | Header2 | 2 | Fix "CLAIM NOTIFICATION" |  |
| 4 | Currency : | 3 | Fix "THAILAND BAHT" |  |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim_mem.ori_sum_insu_life และ tx_rig_act_bdr_claim_mem.ori_sum_insu_acc ไม่เป็น 0 หรือค่าว่าง เท่านั้น
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. DC. |  |  |  |  |  |
| 2 | Pol.No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no |  |
| 3 | RI No. | เลขอ้างอิงการส่งงานประกันต่อ |  | tx_rig_act_bdr_claim | ri_no | 1701001 |
| 4 | Name | ชื่อกรมธรรม์ |  | tx_rig_act_bdr_claim | pol_name |  |
| 5 | Beginning |  |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 6 | End |  |  | tx_rig_act_bdr_claim | effective_date_to |  |
| 7 | No. |  |  | tx_rig_act_bdr_claim_mem | seq |  |
| 8 | Cession No. |  |  | tx_rig_act_bdr_claim_mem | cession_no |  |
| 9 | Effective Date |  |  | tx_rig_act_bdr_claim | ri_com_date |  |
| 10 | Deceased's Name |  |  | tx_rig_act_bdr_claim | name |  |
| 11 | Date of Birth |  |  | tx_rig_act_bdr_claim | dob |  |
| 12 | Age |  |  | tx_rig_act_bdr_claim | age |  |
| 13 | Date of Death |  |  | tx_rig_act_bdr_claim | event_date |  |
| 14 | Cause of Death |  |  | tx_rig_act_bdr_claim | cause |  |
| 15 | Original Sum Insured |
| 16 | - Life |  |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_life |  |
| 17 | - Accident |  |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_acc |  |
| 18 | Payment Date |  |  | tx_rig_act_bdr_claim_mem | approve_date (suthanee.sa 27/03/2026) |  |
| 19 | Amount Paid By Insurer |
| 20 | - Life |  |  | tx_rig_act_bdr_claim_mem | amo_paid_life |  |
| 21 | - Accident |  |  | tx_rig_act_bdr_claim_mem | amo_paid_acc |  |
| 22 | Reinsurer's Share |
| 23 | - Life |  |  | tx_rig_act_bdr_claim_mem | re_claim_life |  |
| 24 | - Accident |  |  | tx_rig_act_bdr_claim_mem | re_claim_acc |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | alignment | Example |
| 1 | TOTAL |  |  |  |  | center |  |
| 2 | Row สุดท้าย ตรงกับ Original Sum Insured - Life | ผลรวมทุนประกันชีวิตของสมาชิก |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_life | center | 16 Policies |
| 3 | Row สุดท้าย ตรงกับ Original Sum Insured - Accident | ผลรวมทุนประกันอุบัติเหตุของสมาชิก |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_acc | right | 412902.05 |
|  | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_life |  |  |
|  | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_acc |  |  |
|  | Row สุดท้าย ตรงกับ Reinsurer's Share - Life | ผลรวมจำนวนเงินสินไหมชีวิต ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_life |  |  |
|  | Row สุดท้าย ตรงกับ Reinsurer's Share - Accident | ผลรวมจำนวนเงินสินไหมอุบัติเหตุ ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_acc |  |  |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม Cert No. น้อยไปมาก


===== PAGE 1317405113 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) > RIG-RP-019-03 Sheet MedAcc =====
### การแสดงชื่อ Report sheet : MedAcc
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : MedAccorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC COMPANY LIMITED |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "Report of Medical Expenses as a result of Accident" |  |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim.sum_amo_paid_med_acc ไม่เป็น 0 หรือค่าว่าง เท่านั้น
รวมทุกรายการจาก tx_rig_act_bdr_claim ที่มี policy_no และ tx_rig_act_bdr_claim.effective_date_from เดียวกัน ไว้ใน Record เดียวกัน
รวมค่า tx_rig_act_bdr_claim.frequency_med_acc กับ tx_rig_act_bdr_claim.sum_amo_paid_med_acc (suthanee.sa 10/03/2026)
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. | ลำดับ | Running Auto |  |  |  |
| 2 | Policy No. | เลขกรมธรรม์ |  | tx_rig_act_bdr_claim | policy_no |  |
| 3 | Reinsurance No. | เลขอ้างอิงการส่งงานประกันต่อ |  | tx_rig_act_bdr_claim | reinsurer_no |  |
| 4 | Policy Name | ชื่อกรมธรรม์ |  | tx_rig_act_bdr_claim | pol_name |  |
| 5 | Period |  |  | tx_rig_act_bdr_claim | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to |  |
| 6 | Frequency |  |  | tx_rig_act_bdr_claim | frequency_med_acc |  |
| 7 | Amount (Baht) |  |  | tx_rig_act_bdr_claim | sum_amo_paid_med_acc |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | alignment | Example |
| 1 | TOTAL |  |  |  |  | center |  |
| 2 | Row สุดท้าย ตรงกับ Policy Name | ผลรวมจำนวนกรมธรรม์ทั้งหมด |  |  |  | center | 16 Policies |
| 3 | Row สุดท้าย ตรงกับ Amount (Baht) | ผลรวมจำนวนเงินสินไหมทั้งหมด |  |  | ผลรวมของ Amount (Baht) ของทุกกรม | right | 412902.05 |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก


===== PAGE 1317405198 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) > RIG-RP-019-04 Sheet MedClaim =====
### การแสดงชื่อ Report sheet : MedClaim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : MedClaimorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC CO., LTD. |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "MEDICAL CLAIMS REPORT |  |
แสดงข้อมูลกรมธรรม์ตาม Template ทีละกรมธรรม์ และออกรายงานต่อไปจนครบทุกรายการกรมธรรม์

### การแสดงข้อมูล Output : Header Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim.frequency_opd หรือ tx_rig_act_bdr_claim.frequency_ipd หรือ tx_rig_act_bdr_claim.frequency_dental ไม่เป็น 0 หรือค่าว่าง
| No. | แสดงข้อมูล Report Header | Row | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Commencement Date | 1 |  | September 1, 2007 |
| 2 | Policy Name | 1 | tx_rig_act_bdr_claim.pol_name | KRUNGTHAI MIZUHO LEASING COMPANY LIMITED |
| 3 | Original Policy No | 1 | tx_rig_act_bdr_claim.policy_no | GH1751 |
| 4 | Policy Year | 2 | tx_rig_act_bdr_claim.policy_year | 17 |
| 5 | Date Payfrom-Payto | 2 | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to | September 1, 2023 - August 31, 2024 |
| 6 | Reinsurance No. | 2 | tx_rig_act_bdr_claim.reinsurer_no | DG015 |

### การแสดงข้อมูล Output : Report Detail
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | Month | เดือน,ปี | รูปแบบบ Mmmm, yyyy | tx_rig_act_bdr_claim | closing_quarterแปลงค่าที่ได้ออกเป็น 3 เดือนตามรอบ quarterโดย closing_quarter ประกอบไปด้วย YYYYQXแทน yyyy ในตารางด้วย YYYY ใน Fieldแทน Mmmm ด้วยการเอา QX มาแปลงเป็นเดือนทั้งหมดภายใน Xถ้า X = 1 แปลงเป็น January , February , Marchถ้า X = 2 แปลงเป็น April , May , Juneถ้า X = 3 แปลงเป็น July , August , Septemberถ้า X = 4 แปลงเป็น October , November , และ December แยกข้อมูลตาม data_period โดย data_period จะมีค่าเท่ากับเดือนที่แปลงมาจาก X ถ้าไม่มีข้อมูลที่ data_period ตรงกับ X ให้ลง 0 |  |
| 2 | OPD |
| 3 | Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยนอก (OPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_opd |  |
| 4 | Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยนอก (OPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_opd |  |
| 5 | IPD |
| 6 | Frequency | จำนวนครั้งของสินไหมรักษาผู้ป่วยใน (IPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_ipd |  |
| 7 | Amount (Baht) | ยอดเงินสินไหมค่ารักษาผู้ป่วยใน (IPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_ipd |  |
| 8 | DENTAL |
| 9 | Frequency | จำนวนครั้งของสินไหมค่าทันตกรรม (Dental)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim | frequency_dental |  |
| 10 | Amount (Baht) | ยอดเงินสินไหมค่าทันตกรรม (Dental) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim | sum_amo_paid_dental |  |
| 11 | TOTAL |
| 12 | Frequency | จำนวนครั้งของสินไหม(OPD + IPD + Dental) ในเดือนนั้น ๆ |  | sum ยอดรวม frequency_opd + frequency_ipd + frequency_dental ตามเดือน |  |  |
| 13 | Amount (Baht) | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) ในเดือนนั้น ๆ หน่วยเป็นบาท |  | sum ยอดรวม sum_amo_paid_opd + sum_amo_paid_ipd + sum_amo_paid_dental ตามเดือน |  |  |
| 14 | Grand Total | ยอดเงินสินไหมรวมทั้งหมดตามประเภทความคุ้มครอง ของ Quarter ภายใต้กรมธรรม์ และวันเริ่มคุ้มครองเดียวกัน หน่วยเป็นบาท | คำนวณผลรวมของทุกเดือนตามกรมธรรม์ | sum ยอดรวมของ Amount ทุกเดือน |  |  |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก


===== PAGE 1318879288 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-019 BDR Act - Daiichi (Reinsurer) > RIG-RP-019-05 Sheet Dismemberment Claim =====
### การแสดงชื่อ Report sheet : Dismemberment Claim
| การแสดงชื่อ Sheet |
| แสดงชื่อ Sheet : Dismemberment Claimorderby ตาม seq_no |

### การแสดงข้อมูล Output : Report Header
| No. | แสดงข้อมูล Report Header | กำหนด Row Output | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 |  |  |
| 2 | Date | 1 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 3 | Header2 | 3 | Fix "MEDICAL CLAIMS REPORT |  |
แสดงข้อมูลกรมธรรม์ตาม Template ทีละกรมธรรม์ และออกรายงานต่อไปจนครบทุกรายการกรมธรรม์

### การแสดงข้อมูล Output : Header Detail
| No. | แสดงข้อมูล Report Header | Row | เงื่อนไขการ Mapping ข้อมูล | Example |
| 1 | Header1 | 1 | Fix "OCEAN LIFE INSURANCE PUBLIC CO., LTD. |  |
| 2 |  | 1 | ระบบต้องกำหนดลำดับหมายเลขลำดับแยกตาม Quarter โดยเริ่มต้นที่หมายเลข 1 ในทุก Quarterและเรียงลำดับเพิ่มขึ้นตามจำนวนกรมธรรม์ที่อยู่ใน Quarter นั้นโดยไม่ต่อเนื่องจาก Quarter ก่อนหน้าตัวอย่างใน Quarter 2025Q1 มี 10 Cases ระบบจะกำหนดหมายเลขเป็น 1–10และเมื่อเข้าสู่ Quarter 2025Q2 หากมี 5 Cases ระบบจะกำหนดหมายเลขเป็น 1–5 | No. DMC.048 |
| 3 |  | 2 | Fix "CLAIM NOTIFICATION" |  |
| 4 |  | 2 | System Date แสดงรูปแบบ dd/mm/yyyy | 26/06/2024 |
| 5 |  | 3 | tx_rig_act_bdr_claim.policy_no + " (" + tx_rig_act_bdr_claim.ri_no + ") : " + tx_rig_act_bdr_claim.pol_name | GH2001 (DG082) : ZEON CHEMICALS (THAILAND) CO.,LTD. |
| 6 | For the period From | 4 | tx_rig_act_bdr_claim.effective_date_from - tx_rig_act_bdr_claim.effective_date_to | July 23, 2023 - July 22, 2024 |

### การแสดงข้อมูล Output : Report Detail
เงื่อนไขดึงข้อมูลรายการเคลม
เฉพาะรายการที่มี tx_rig_act_bdr_claim_mem.ori_sum_insu_dismem หรือ tx_rig_act_bdr_claim_mem.ori_sum_insu_tpd ไม่เป็น 0 หรือค่าว่าง เท่านั้น
| No. | Column Name |  | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | No. |  | เดือน,ปี | รูปแบบบ Mmmm, yyyy |  |  |  |
| 2 | Cession | No. |  |  | tx_rig_act_bdr_claim_mem | cession_no |  |
| 3 | Effective | Date |  |  | tx_rig_act_bdr_claim | effective_date_from |  |
| 4 | Claimant's Name |  |  |  | tx_rig_act_bdr_claim_mem | name |  |
| 5 | Date of | Birth |  |  | tx_rig_act_bdr_claim_mem | dob |  |
| 6 | Age |  |  |  | tx_rig_act_bdr_claim_mem | age |  |
| 7 | Event | Date |  |  | tx_rig_act_bdr_claim_mem | event_date |  |
| 8 | Cause of | Dismemberment / Result |  |  | tx_rig_act_bdr_claim_mem | cause |  |
|  | Original SA |
| 9 | Original SA | Dismemberment | จำนวนครั้งของสินไหมรักษาผู้ป่วยนอก (OPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_dismem |  |
| 10 |  | TPD | ยอดเงินสินไหมค่ารักษาผู้ป่วยนอก (OPD) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | ori_sum_insu_tpd |  |
|  | Payment Date |
| 11 | Payment | Date | จำนวนครั้งของสินไหมรักษาผู้ป่วยใน (IPD)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | approve_date (suthanee.sa 27/03/2026) |  |
|  | Amount Paid By Insurer |
| 12 | Amount Paid By Insurer | Dismemberment | จำนวนครั้งของสินไหมค่าทันตกรรม (Dental)ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | amo_paid_dismem |  |
| 13 |  | TPD | ยอดเงินสินไหมค่าทันตกรรม (Dental) รวมทั้งหมดในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | amo_paid_tpd |  |
|  | Reinsurer's Share |
| 14 | Reinsurer's Share | Dismemberment | จำนวนครั้งของสินไหม(OPD + IPD + Dental) ในเดือนนั้น ๆ |  | tx_rig_act_bdr_claim_mem | re_claim_dismem |  |
| 15 |  | TPD | ยอดเงินสินไหมรวมทั้งหมด(OPD + IPD + Dental) ในเดือนนั้น ๆ หน่วยเป็นบาท |  | tx_rig_act_bdr_claim_mem | re_claim_tpd |  |
| No. | Column Name | Description | Conditions/Validation Rules | Table | Field | Example |
| 1 | TOTAL |  |  |  |  |  |
| 2 | Row สุดท้าย ตรงกับ Original SA - Dismemberment | ผลรวมทุนตามความคุ้มครอง Dismemberment |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_dismem | 412902.00 |
| 3 | Row สุดท้าย ตรงกับ Original SA - TPD | ผลรวมทุนตามความคุ้มครอง TPD |  | tx_rig_act_bdr_claim_mem | ผลรวมของ ori_sum_insu_tpd | 412902.00 |
| 4 | Row สุดท้าย ตรงกับ Amount Paid By Insurer - Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_dismem | 412902.00 |
| 5 | Row สุดท้าย ตรงกับ Amount Paid By Insurer - TPD | ผลรวมจำนวนเงินสินไหม TPD ที่บริษัทอนุมัติจ่าย |  | tx_rig_act_bdr_claim_mem | ผลรวมของ amo_paid_tpd | 412902.00 |
| 6 | Row สุดท้าย ตรงกับ Reinsurer's Share - Dismemberment | ผลรวมจำนวนเงินสินไหม Dismemberment ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_dismem | 412902.00 |
| 7 | Row สุดท้าย ตรงกับ Reinsurer's Share - TPD | ผลรวมจำนวนเงินสินไหม TPD ที่ Reinsurer ต้องรับผิดชอบตามสัดส่วนประกันภัยต่อ |  | tx_rig_act_bdr_claim_mem | ผลรวมของ re_claim_tpd | 412902.00 |

### การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก


===== PAGE 1317404690 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-020 Allocation_Profit Commission_{YYYY} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955737632 {padding: 0px;}
div.rbtoc1782955737632 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955737632 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail 1.1 การแสดงสรุปผลรวม Profit Commission 1.2 การแสดงสรุปผลรวม Profit Commission
- 1.1 การแสดงสรุปผลรวม Profit Commission
- 1.2 การแสดงสรุปผลรวม Profit Commission
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การแสดง Report detail
- 7 การเรียงลำดับข้อมูล
- 8 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Template (DEV) |
| 04/02/2026 | pongsathorn.pa | Allocation_Profit Commission_{YYYY} | xlsx | Allocation_Profit Commission_2026 |  |
| 10/09/2026 | suthanee.sa | Allocation_Profit Commission_{YYYY} | xlsx | https://redmine.ochi.link/issues/57218 | Allocation_Profit_Commission.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล alocation profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (year, reinsurrer)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |
- การแสดงสรุปผลรวม Profit Commission
| No. | Column Name | Conditions/Validation Rules | Table | Field | Format/Alignment | Example |
| 1 | Posting Date | groupping | tx_rig_act_hd | period | center/bold | 2023.01 |
| 2 | Reinsurer | groupping | tx_rig_profit_dt | reinsurer_code | left | Thaire |
| 3 | Treaty Code | groupping | tx_rig_profit_dt | treaty_code | left | Thaire |
| 4 | Data Quarter (Year) | groupping | tx_rig_allocation_profit | year | center | 2020 |
| 5 | Profit Commission | sum(pc_allocation) | tx_rig_allocation_profit | pc_allocation | right/bold | 100,000.00 |
- การแสดงสรุปผลรวม Profit Commission
| No. | Column Name | Conditions/Validation Rules | Table | Field | Format/Alignment | Example |
| 1 | Total | ผลรวม (7) Total RI Premium | tx_rig_allocation_profit | sum(total_ri_prem) | right/bold | 42,000.00 |
| 2 | ผลรวม (8) Profit Commission Allocation | tx_rig_allocation_profit | sum(pc_allocation) | right/bold | 100,000.00 |
| 3 | Reinsurer | บริษัทประกันภัยต่อ | tx_rig_profit_dt | reinsurer_code | left | Thaire |
| 4 | Treaty Code | รหัสสัญญาประกันภัยต่อ | tx_rig_allocation_profit | treaty_code | left | Thaire |
| 5 | Data Quarter (Year) | ปีที่ประมวลผลคำนวณ Allocation | tx_rig_allocation_profit | year | center | 2020 |
| 6 | Policy No. | เลขที่กรมธรรม์ที่มีการ Allocation | tx_rig_allocation_profit | policy_no | left | GH1761 |
| 7 | Total RI Premium | เบี้ยประกันรวมทั้งปีภายในปีนั้นของ Policy | tx_rig_allocation_profit | total_ri_prem | right | 1,000.00 |
| 8 | Profit Commission Allocation | จำนวน Allocation ของแต่ละ Policy | tx_rig_allocation_profit | pc_allocation | right | 2,380.95 |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Allocation_Profit Commission_{YYYY} ใช้ข้อมูล{YYYY} = tx_rig_allocation_profit.yearตัวอย่างเช่น: Allocation_Profit Commission_2026ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_profit\Allocation_Profit Commission_{YYYY}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1317404694 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-020 Allocation_Profit Commission_{YYYY} > RIG-RP-020 Ex =====
| Update Date | Edit By | Source/File Name | File Type | Remark | Template (DEV) |
| 04/02/2026 | pongsathorn.pa | Allocation_Profit Commission_{YYYY} | xlsx | Allocation_Profit Commission_2026 |  |
| 10/09/2026 | suthanee.sa | Allocation_Profit Commission_{YYYY} | xlsx | https://redmine.ochi.link/issues/57218 | Allocation_Profit_Commission.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับแสดงข้อมูลประมวลผล alocation profit commission |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เข้าหน้าจอ กดปุ่ม ประมวลผล profit commissionระบุเงื่อนไขที่ต้องการจะเรียกดูข้อมูล (year, reinsurrer)กดประมวลผลระบบ ประมวลผล และ Generate รายงานเป็น xlsx ไฟล์สำหรับ Download |


===== PAGE 1317404701 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-020 Allocation_Profit Commission_{YYYY} > RIG-RP-020 Mapping =====
- การแสดงสรุปผลรวม Profit Commission
| No. | Column Name | Conditions/Validation Rules | Table | Field | Format/Alignment | Example |
| 1 | Posting Date | groupping | tx_rig_act_hd | period | center/bold | 2023.01 |
| 2 | Reinsurer | groupping | tx_rig_profit_dt | reinsurer_code | left | Thaire |
| 3 | Treaty Code | groupping | tx_rig_profit_dt | treaty_code | left | Thaire |
| 4 | Data Quarter (Year) | groupping | tx_rig_allocation_profit | year | center | 2020 |
| 5 | Profit Commission | sum(pc_allocation) | tx_rig_allocation_profit | pc_allocation | right/bold | 100,000.00 |
- การแสดงสรุปผลรวม Profit Commission
| No. | Column Name | Conditions/Validation Rules | Table | Field | Format/Alignment | Example |
| 1 | Total | ผลรวม (7) Total RI Premium | tx_rig_allocation_profit | sum(total_ri_prem) | right/bold | 42,000.00 |
| 2 | ผลรวม (8) Profit Commission Allocation | tx_rig_allocation_profit | sum(pc_allocation) | right/bold | 100,000.00 |
| 3 | Reinsurer | บริษัทประกันภัยต่อ | tx_rig_profit_dt | reinsurer_code | left | Thaire |
| 4 | Treaty Code | รหัสสัญญาประกันภัยต่อ | tx_rig_allocation_profit | treaty_code | left | Thaire |
| 5 | Data Quarter (Year) | ปีที่ประมวลผลคำนวณ Allocation | tx_rig_allocation_profit | year | center | 2020 |
| 6 | Policy No. | เลขที่กรมธรรม์ที่มีการ Allocation | tx_rig_allocation_profit | policy_no | left | GH1761 |
| 7 | Total RI Premium | เบี้ยประกันรวมทั้งปีภายในปีนั้นของ Policy | tx_rig_allocation_profit | total_ri_prem | right | 1,000.00 |
| 8 | Profit Commission Allocation | จำนวน Allocation ของแต่ละ Policy | tx_rig_allocation_profit | pc_allocation | right | 2,380.95 |


===== PAGE 1317896400 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955738464 {padding: 0px;}
div.rbtoc1782955738464 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955738464 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report template version
- 2 Report template Description 2.1 การแสดงข้อมูล Output : Report Header
- 2.1 การแสดงข้อมูล Output : Report Header
- 3 การกำหนด File Path 3.1.1 File Path 3.2 การแสดงข้อมูล Output : Report Detail 3.3 การแสดงข้อมูล Output : Report Footer
- 3.1.1 File Path
- 3.2 การแสดงข้อมูล Output : Report Detail
- 3.3 การแสดงข้อมูล Output : Report Footer
- 4 การ Export report
- 5 การแสดง Report file name
- 6 การแสดงชื่อ Report sheet
- 7 การแสดง Report detail
- 8 การแสดง Report footer

## Report template version
| Update Date | Edit By | Source/File Name | File Type | Remark |  |
| 05/002/2026 | napak.ph | SOA_Act_GIB_YYYYQQSOA_Act_Thaire_YYYYQQ | xlsx |  |  |
| 06/05/2026 | suthanee.sa | SOA_Act_GIB_YYYYQQSOA_Act_Thaire_YYYYQQ | xlsx | https://redmine.ochi.link/issues/57204 | Act_SOA.xlsx |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล SOA RI Actual ที่นำเข้าสู่ระบบบ EDW |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจากหน้าจอ RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual |
| 4 | SRS | A09-12-6 ตัวอย่าง output file - EDW - SOA_Act_GIB_YYYYQQA09-12-5 ตัวอย่าง output file - SOA - SOA_Act_Thaire_YYYYQQ |

## Report template Description
- การแสดงข้อมูล Output : Report Header
ส่วน Header
| แสดงข้อมูล Report Header | เงื่อนไขการ Mapping ข้อมูล |
| Actual Account | Fix "Actual Account" |
| TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL | Fix "TREATY, OFFSET, INSTITUTION OF MARKETING 2 CHANNEL" |
| Statement of Account | Fix "Statement of Account" |
| 2nd Quarter, 2024 | ระบบต้องแสดงชื่อ Quarter บนรายงานในรูปแบบ {QuarterName} Quarter, {Year}ตัวอย่างเช่น 2nd Quarter, 2024โดย {QuarterName} และ {Year} ต้องอ้างอิงจาก Quarter Period ที่ผู้ใช้เลือกการ mapping QuarterName ให้เป็นดังนี้Q1 = 1st QuarterQ2 = 2nd QuarterQ3 = 3rd QuarterQ4 = 4th Quartertx_rig_act_hd.closing_quarter |
| No. 2024.Q2 | ระบบต้องแสดงเลขที่รายงานในรูปแบบ No. {Year}.{QuarterNo}โดย {QuarterNo} คือเลข Quarter เช่น Q1, Q2, Q3, Q4tx_rig_act_hd.closing_quarter |
| Reinsurer : The Gibraltar Life Insurance Co., Ltd. | "Reinsurer : " + cf_reinsurer.reinsurer_name |
| Treaty : Group Reinsurance Business (EB Group) | "Treaty : " + cf_rig_treaty.contract_name |
| Treaty Effective date : January 1, 2017 | "Treaty Effective Date : " + cf_rig_treaty_cond_hd.effective_date_from |
| "Treaty Effective Date : " + cf_rig_treaty_general.start_date (รายการที่ cf_rig_treaty_general.status = A ซึ่งจะมีรายการเดียวเสมอ) (suthanee.sa 18/06/2026) |
| Date : 19-Sep-2024 | "Date : " + system date |
| Currency : THB | Fix "Currency : THB" |
| Ceding company : Ocean Life | Fix "Ceding company : Ocean Life" |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_soa\SOA_Act_{TreatyAbbr}_{YYYY}{QQ}.xlsx |
- การแสดงข้อมูล Output : Report Detail
ส่วน Detail
หมายเหตุ: กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| DUE TO REINSURER (Cr.) |
| Reinsurance premium : |
| New Business |
| - LIFE | numeric | 25, 2 | Reinsurance premium New Business LIFE | tx_rig_act_soa_dt | prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium New Business AD&D | tx_rig_act_soa_dt | prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium New Business TPD | tx_rig_act_soa_dt | prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium New Business TTD | tx_rig_act_soa_dt | prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium New Business MEDICAL | tx_rig_act_soa_dt | prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium New Business | tx_rig_act_soa_dt | prem_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (1 st yr.) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) LIFE | tx_rig_act_soa_dt | prem_renew_1y_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) AD&D | tx_rig_act_soa_dt | prem_renew_1y_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TPD | tx_rig_act_soa_dt | prem_renew_1y_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TTD | tx_rig_act_soa_dt | prem_renew_1y_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) MEDICAL | tx_rig_act_soa_dt | prem_renew_1y_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (1 st yr.) | tx_rig_act_soa_dt | prem_renew_1y_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (Renewal) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) LIFE | tx_rig_act_soa_dt | prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) AD&D | tx_rig_act_soa_dt | prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TPD | tx_rig_act_soa_dt | prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TTD | tx_rig_act_soa_dt | prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) MEDICAL | tx_rig_act_soa_dt | prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (Renewal) | tx_rig_act_soa_dt | prem_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Commission Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. LIFE | tx_rig_act_soa_dt | comm_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. AD&D | tx_rig_act_soa_dt | comm_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. TPD | tx_rig_act_soa_dt | comm_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. TTD | tx_rig_act_soa_dt | comm_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. MEDICAL | tx_rig_act_soa_dt | comm_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. | tx_rig_act_soa_dt | comm_refund_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal LIFE | tx_rig_act_soa_dt | comm_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal AD&D | tx_rig_act_soa_dt | comm_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal TPD | tx_rig_act_soa_dt | comm_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal TTD | tx_rig_act_soa_dt | comm_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal MEDICAL | tx_rig_act_soa_dt | comm_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal | tx_rig_act_soa_dt | comm_refund_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. Claim LIFE | tx_rig_act_soa_dt | comm_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. Claim AD&D | tx_rig_act_soa_dt | comm_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TPD | tx_rig_act_soa_dt | comm_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TTD | tx_rig_act_soa_dt | comm_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. Claim MEDICAL | tx_rig_act_soa_dt | comm_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. Claim | tx_rig_act_soa_dt | comm_refund_new_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal Claim LIFE | tx_rig_act_soa_dt | comm_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal Claim AD&D | tx_rig_act_soa_dt | comm_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal Claim TPD | tx_rig_act_soa_dt | comm_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal Claim TTD | tx_rig_act_soa_dt | comm_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal Claim MEDICAL | tx_rig_act_soa_dt | comm_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal Claim | tx_rig_act_soa_dt | comm_refund_renew_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Revival Premiums |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Revival Premiums 1 st yr. LIFE | tx_rig_act_soa_dt | revival_prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums 1 st yr. AD&D | tx_rig_act_soa_dt | revival_prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums 1 st yr. TPD | tx_rig_act_soa_dt | revival_prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums 1 st yr. TTD | tx_rig_act_soa_dt | revival_prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums 1 st yr. MEDICAL | tx_rig_act_soa_dt | revival_prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums 1 st yr. | tx_rig_act_soa_dt | revival_prem_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Revival Premiums Renewal LIFE | tx_rig_act_soa_dt | revival_prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums Renewal AD&D | tx_rig_act_soa_dt | revival_prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums Renewal TPD | tx_rig_act_soa_dt | revival_prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums Renewal TTD | tx_rig_act_soa_dt | revival_prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums Renewal MEDICAL | tx_rig_act_soa_dt | revival_prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums Renewal | tx_rig_act_soa_dt | revival_prem_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due to Reinsurer) | tx_rig_act_soa_dt | sub_total_due_to_reinsurer | tx_rig_act_soa_dt.sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE TO REINSURER | numeric | 25, 2 | Due to Reinsurer | tx_rig_act_soa_dt | due_to_reinsurer | tx_rig_act_soa_dt.due_to_reinsurer (suthanee.sa 19/03/2026) |  |
| DUE FROM REINSURER (Dr.) |
| Commission : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission 1 st yr. LIFE | tx_rig_act_soa_dt | comm_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission 1 st yr. AD&D | tx_rig_act_soa_dt | comm_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission 1 st yr. TPD | tx_rig_act_soa_dt | comm_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission 1 st yr. TTD | tx_rig_act_soa_dt | comm_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission 1 st yr. MEDICAL | tx_rig_act_soa_dt | comm_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission 1 st yr. | tx_rig_act_soa_dt | comm_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Renewal LIFE | tx_rig_act_soa_dt | comm_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Renewal AD&D | tx_rig_act_soa_dt | comm_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Renewal TPD | tx_rig_act_soa_dt | comm_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Renewal TTD | tx_rig_act_soa_dt | comm_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Renewal MEDICAL | tx_rig_act_soa_dt | comm_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Renewal | tx_rig_act_soa_dt | comm_renew_total | ค้นหา tx_rig_act_soa_dt.cf_soa_column_id in (51, 52, 53, 54, 55)กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Premium Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. LIFE | tx_rig_act_soa_dt | prem_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. AD&D | tx_rig_act_soa_dt | prem_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. TPD | tx_rig_act_soa_dt | prem_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. TTD | tx_rig_act_soa_dt | prem_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. MEDICAL | tx_rig_act_soa_dt | prem_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. | tx_rig_act_soa_dt | prem_refund_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal LIFE | tx_rig_act_soa_dt | prem_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal AD&D | tx_rig_act_soa_dt | prem_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal TPD | tx_rig_act_soa_dt | prem_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal TTD | tx_rig_act_soa_dt | prem_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal MEDICAL | tx_rig_act_soa_dt | prem_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal | tx_rig_act_soa_dt | prem_refund_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. Claim LIFE | tx_rig_act_soa_dt | prem_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. Claim AD&D | tx_rig_act_soa_dt | prem_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TPD | tx_rig_act_soa_dt | prem_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TTD | tx_rig_act_soa_dt | prem_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. Claim MEDICAL | tx_rig_act_soa_dt | prem_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. Claim | tx_rig_act_soa_dt | prem_refund_new_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal Claim LIFE | tx_rig_act_soa_dt | prem_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal Claim AD&D | tx_rig_act_soa_dt | prem_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal Claim TPD | tx_rig_act_soa_dt | prem_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal Claim TTD | tx_rig_act_soa_dt | prem_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal Claim MEDICAL | tx_rig_act_soa_dt | prem_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal Claim | tx_rig_act_soa_dt | prem_refund_renew_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Claim 1 st yr. LIFE | tx_rig_act_soa_dt | claim_new_life | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim 1 st yr. AD&D | tx_rig_act_soa_dt | claim_new_add | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim 1 st yr. TPD | tx_rig_act_soa_dt | claim_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim 1 st yr. TTD | tx_rig_act_soa_dt | claim_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim 1 st yr. MEDICAL | tx_rig_act_soa_dt | claim_new_medical | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim 1 st yr. | tx_rig_act_soa_dt | claim_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Claim Renewal LIFE | tx_rig_act_soa_dt | claim_renew_life | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim Renewal AD&D | tx_rig_act_soa_dt | claim_renew_add | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim Renewal TPD | tx_rig_act_soa_dt | claim_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim Renewal TTD | tx_rig_act_soa_dt | claim_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim Renewal MEDICAL | tx_rig_act_soa_dt | claim_renew_medical | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_medical มาแสดง กรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Renewal | tx_rig_act_soa_dt | claim_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim Expenses |
| - INVESTIGATION FEE | numeric | 25, 2 | Claim Expenses INVESTIGATION FEE | tx_rig_act_soa_dt | claim_exp_investigation_fee | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - LEGAL FEE | numeric | 25, 2 | Claim Expenses LEGAL FEE | tx_rig_act_soa_dt | claim_exp_legal_fee | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL EVIDENCE | numeric | 25, 2 | Claim Expenses MEDICAL EVIDENCE | tx_rig_act_soa_dt | claim_exp_med | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_med มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Expenses | tx_rig_act_soa_dt | claim_exp_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Admin. Commission (Remittance) : | numeric | 25, 2 | Admin. Commission (Remittance) | tx_rig_act_soa_dt | admin_comm_remittance | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Experience Refund Share : | numeric | 25, 2 | Experience Refund Share | tx_rig_act_soa_dt | experience_refund_share | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.experience_refund_share มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Profit Commission : | numeric | 25, 2 | Profit Commission | tx_rig_act_soa_dt | profit_comm | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.profit_comm มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due from Reinsurer) | tx_rig_act_soa_dt | sub_total_due_from_reinsurer | tx_rig_act_soa_dt.sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE FROM REINSURER | numeric | 25, 2 | Due from Reinsurer | tx_rig_act_soa_dt | due_from_reinsurer | tx_rig_act_soa_dt.due_from_reinsurer (suthanee.sa 19/03/2026) |  |
- การแสดงข้อมูล Output : Report Footer
ส่วน Footer
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| Remark : | varchar | 100 | หมายเหตุ | tx_rig_est_soa | remark |  |  |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| SOA_Act_{TreatyAbbr}_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_act_hd.closing_quarter{QQ} คือเลข Quarter เช่น Q1, Q2, Q3, Q4{YYYY} คือปี Quarter เช่น 2025, 2026{TreatyAbbr} คือ ชื่อย่อ Treaty เช่น GIB, Thaireใช้จาก cf_reinsurer.reinsurer_codeตัวอย่างเช่น: SOA_Act_GIB_2024Q2, SOA_Act_Thaire_2024Q3ข้อมูลนามสกุลไฟล์ : xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การแสดง Report detail
| Report Detail Section |
| ตาม Report Detail |

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1318125576 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} > RIG-RP-021-01 Output Detail =====
ส่วน Detail
หมายเหตุ: กรณีข้อมูลเป็น 0 หรือ NULL ให้แสดงเป็น "-"
| Name | Type (Source) | Size | Description | Table | Field | เงื่อนไขการบันทึก | ตัวอย่าง |
| DUE TO REINSURER (Cr.) |
| Reinsurance premium : |
| New Business |
| - LIFE | numeric | 25, 2 | Reinsurance premium New Business LIFE | tx_rig_act_soa_dt | prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium New Business AD&D | tx_rig_act_soa_dt | prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium New Business TPD | tx_rig_act_soa_dt | prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium New Business TTD | tx_rig_act_soa_dt | prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium New Business MEDICAL | tx_rig_act_soa_dt | prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium New Business | tx_rig_act_soa_dt | prem_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (1 st yr.) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) LIFE | tx_rig_act_soa_dt | prem_renew_1y_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) AD&D | tx_rig_act_soa_dt | prem_renew_1y_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TPD | tx_rig_act_soa_dt | prem_renew_1y_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) TTD | tx_rig_act_soa_dt | prem_renew_1y_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (1 st yr.) MEDICAL | tx_rig_act_soa_dt | prem_renew_1y_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (1 st yr.) | tx_rig_act_soa_dt | prem_renew_1y_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_1y_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Business (Renewal) |
| - LIFE | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) LIFE | tx_rig_act_soa_dt | prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) AD&D | tx_rig_act_soa_dt | prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TPD | tx_rig_act_soa_dt | prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) TTD | tx_rig_act_soa_dt | prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Reinsurance premium Renewal Business (Renewal) MEDICAL | tx_rig_act_soa_dt | prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Reinsurance premium Renewal Business (Renewal) | tx_rig_act_soa_dt | prem_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Commission Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. LIFE | tx_rig_act_soa_dt | comm_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. AD&D | tx_rig_act_soa_dt | comm_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. TPD | tx_rig_act_soa_dt | comm_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. TTD | tx_rig_act_soa_dt | comm_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. MEDICAL | tx_rig_act_soa_dt | comm_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. | tx_rig_act_soa_dt | comm_refund_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal LIFE | tx_rig_act_soa_dt | comm_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal AD&D | tx_rig_act_soa_dt | comm_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal TPD | tx_rig_act_soa_dt | comm_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal TTD | tx_rig_act_soa_dt | comm_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal MEDICAL | tx_rig_act_soa_dt | comm_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_medicalมาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal | tx_rig_act_soa_dt | comm_refund_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Commission Refund 1 st yr. Claim LIFE | tx_rig_act_soa_dt | comm_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund 1 st yr. Claim AD&D | tx_rig_act_soa_dt | comm_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TPD | tx_rig_act_soa_dt | comm_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund 1 st yr. Claim TTD | tx_rig_act_soa_dt | comm_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund 1 st yr. Claim MEDICAL | tx_rig_act_soa_dt | comm_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_medicalมาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund 1 st yr. Claim | tx_rig_act_soa_dt | comm_refund_new_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Commission Refund Renewal Claim LIFE | tx_rig_act_soa_dt | comm_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Refund Renewal Claim AD&D | tx_rig_act_soa_dt | comm_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Refund Renewal Claim TPD | tx_rig_act_soa_dt | comm_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Refund Renewal Claim TTD | tx_rig_act_soa_dt | comm_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Refund Renewal Claim MEDICAL | tx_rig_act_soa_dt | comm_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Refund Renewal Claim | tx_rig_act_soa_dt | comm_refund_renew_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Revival Premiums |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Revival Premiums 1 st yr. LIFE | tx_rig_act_soa_dt | revival_prem_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums 1 st yr. AD&D | tx_rig_act_soa_dt | revival_prem_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums 1 st yr. TPD | tx_rig_act_soa_dt | revival_prem_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums 1 st yr. TTD | tx_rig_act_soa_dt | revival_prem_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums 1 st yr. MEDICAL | tx_rig_act_soa_dt | revival_prem_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums 1 st yr. | tx_rig_act_soa_dt | revival_prem_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Revival Premiums Renewal LIFE | tx_rig_act_soa_dt | revival_prem_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Revival Premiums Renewal AD&D | tx_rig_act_soa_dt | revival_prem_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Revival Premiums Renewal TPD | tx_rig_act_soa_dt | revival_prem_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Revival Premiums Renewal TTD | tx_rig_act_soa_dt | revival_prem_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Revival Premiums Renewal MEDICAL | tx_rig_act_soa_dt | revival_prem_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Revival Premiums Renewal | tx_rig_act_soa_dt | revival_prem_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.revival_prem_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due to Reinsurer) | tx_rig_act_soa_dt | sub_total_due_to_reinsurer | tx_rig_act_soa_dt.sub_total_due_to_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE TO REINSURER | numeric | 25, 2 | Due to Reinsurer | tx_rig_act_soa_dt | due_to_reinsurer | tx_rig_act_soa_dt.due_to_reinsurer (suthanee.sa 19/03/2026) |  |
| DUE FROM REINSURER (Dr.) |
| Commission : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Commission 1 st yr. LIFE | tx_rig_act_soa_dt | comm_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission 1 st yr. AD&D | tx_rig_act_soa_dt | comm_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission 1 st yr. TPD | tx_rig_act_soa_dt | comm_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission 1 st yr. TTD | tx_rig_act_soa_dt | comm_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission 1 st yr. MEDICAL | tx_rig_act_soa_dt | comm_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission 1 st yr. | tx_rig_act_soa_dt | comm_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Commission Renewal LIFE | tx_rig_act_soa_dt | comm_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Commission Renewal AD&D | tx_rig_act_soa_dt | comm_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Commission Renewal TPD | tx_rig_act_soa_dt | comm_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Commission Renewal TTD | tx_rig_act_soa_dt | comm_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Commission Renewal MEDICAL | tx_rig_act_soa_dt | comm_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Commission Renewal | tx_rig_act_soa_dt | comm_renew_total | ค้นหา tx_rig_act_soa_dt.cf_soa_column_id in (51, 52, 53, 54, 55)กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.comm_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Premium Refund : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. LIFE | tx_rig_act_soa_dt | prem_refund_new_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. AD&D | tx_rig_act_soa_dt | prem_refund_new_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. TPD | tx_rig_act_soa_dt | prem_refund_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. TTD | tx_rig_act_soa_dt | prem_refund_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. MEDICAL | tx_rig_act_soa_dt | prem_refund_new_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. | tx_rig_act_soa_dt | prem_refund_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal LIFE | tx_rig_act_soa_dt | prem_refund_renew_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal AD&D | tx_rig_act_soa_dt | prem_refund_renew_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal TPD | tx_rig_act_soa_dt | prem_refund_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal TTD | tx_rig_act_soa_dt | prem_refund_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal MEDICAL | tx_rig_act_soa_dt | prem_refund_renew_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal | tx_rig_act_soa_dt | prem_refund_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| 1 st yr. Claim |
| - LIFE | numeric | 25, 2 | Premium Refund 1 st yr. Claim LIFE | tx_rig_act_soa_dt | prem_refund_new_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund 1 st yr. Claim AD&D | tx_rig_act_soa_dt | prem_refund_new_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TPD | tx_rig_act_soa_dt | prem_refund_new_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund 1 st yr. Claim TTD | tx_rig_act_soa_dt | prem_refund_new_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund 1 st yr. Claim MEDICAL | tx_rig_act_soa_dt | prem_refund_new_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund 1 st yr. Claim | tx_rig_act_soa_dt | prem_refund_new_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_new_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal Claim |
| - LIFE | numeric | 25, 2 | Premium Refund Renewal Claim LIFE | tx_rig_act_soa_dt | prem_refund_renew_claim_life | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Premium Refund Renewal Claim AD&D | tx_rig_act_soa_dt | prem_refund_renew_claim_add | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Premium Refund Renewal Claim TPD | tx_rig_act_soa_dt | prem_refund_renew_claim_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Premium Refund Renewal Claim TTD | tx_rig_act_soa_dt | prem_refund_renew_claim_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Premium Refund Renewal Claim MEDICAL | tx_rig_act_soa_dt | prem_refund_renew_claim_medical | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Premium Refund Renewal Claim | tx_rig_act_soa_dt | prem_refund_renew_claim_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.prem_refund_renew_claim_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim : |
| 1 st yr. |
| - LIFE | numeric | 25, 2 | Claim 1 st yr. LIFE | tx_rig_act_soa_dt | claim_new_life | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim 1 st yr. AD&D | tx_rig_act_soa_dt | claim_new_add | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim 1 st yr. TPD | tx_rig_act_soa_dt | claim_new_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim 1 st yr. TTD | tx_rig_act_soa_dt | claim_new_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim 1 st yr. MEDICAL | tx_rig_act_soa_dt | claim_new_medical | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_new_medical มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim 1 st yr. | tx_rig_act_soa_dt | claim_new_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_new_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Renewal |
| - LIFE | numeric | 25, 2 | Claim Renewal LIFE | tx_rig_act_soa_dt | claim_renew_life | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_life มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - AD&D | numeric | 25, 2 | Claim Renewal AD&D | tx_rig_act_soa_dt | claim_renew_add | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_add มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TPD | numeric | 25, 2 | Claim Renewal TPD | tx_rig_act_soa_dt | claim_renew_tpd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_tpd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - TTD | numeric | 25, 2 | Claim Renewal TTD | tx_rig_act_soa_dt | claim_renew_ttd | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_ttd มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL | numeric | 25, 2 | Claim Renewal MEDICAL | tx_rig_act_soa_dt | claim_renew_medical | กรณีพบข้อมูลให้นำ tx_rig_act_soa_dt.claim_renew_medical มาแสดง กรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Renewal | tx_rig_act_soa_dt | claim_renew_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_renew_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Claim Expenses |
| - INVESTIGATION FEE | numeric | 25, 2 | Claim Expenses INVESTIGATION FEE | tx_rig_act_soa_dt | claim_exp_investigation_fee | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_investigation_fee มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - LEGAL FEE | numeric | 25, 2 | Claim Expenses LEGAL FEE | tx_rig_act_soa_dt | claim_exp_legal_fee | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_legal_fee มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| - MEDICAL EVIDENCE | numeric | 25, 2 | Claim Expenses MEDICAL EVIDENCE | tx_rig_act_soa_dt | claim_exp_med | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_ex_gratia มาแสดงกรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_med มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| TOTAL | numeric | 25, 2 | Total Claim Expenses | tx_rig_act_soa_dt | claim_exp_total | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.claim_exp_total มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL cf_soa_column_id ทั้งหมด ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Admin. Commission (Remittance) : | numeric | 25, 2 | Admin. Commission (Remittance) | tx_rig_act_soa_dt | admin_comm_remittance | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.admin_comm_remittance มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Experience Refund Share : | numeric | 25, 2 | Experience Refund Share | tx_rig_act_soa_dt | experience_refund_share | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.experience_refund_share มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| Profit Commission : | numeric | 25, 2 | Profit Commission | tx_rig_act_soa_dt | profit_comm | กรณีพบข้อมูล ให้นำ tx_rig_act_soa_dt.profit_comm มาแสดงกรณีไม่พบข้อมูล หรือเป็น 0 หรือ NULL ให้แสดงเป็น "-"กรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| SUB TOTAL | numeric | 25, 2 | Sub Total (Due from Reinsurer) | tx_rig_act_soa_dt | sub_total_due_from_reinsurer | tx_rig_act_soa_dt.sub_total_due_from_reinsurerกรณีค่าติดลบ แสดง () เช่น -100 เป็น (100) |  |
| DUE FROM REINSURER | numeric | 25, 2 | Due from Reinsurer | tx_rig_act_soa_dt | due_from_reinsurer | tx_rig_act_soa_dt.due_from_reinsurer (suthanee.sa 19/03/2026) |  |


===== PAGE 1339195413 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-022 Est_MemberLayer_{YYYY}{MM} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955738193 {padding: 0px;}
div.rbtoc1782955738193 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955738193 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 08/01/2026 | pongsathorn.pa | Est_MemberLayer_YYYYMM.xlsx | xlsx | Est_MemberLayer_202604 |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Inforce member ของกรมธรรม์ประกันกลุ่ม (GIB_Grp_Direct_EB) ที่ผ่านการประมวลผล Estimate แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Estimate |
| 4 | เงื่อนไข(Condition) | กรองเฉพาะ tx_stg_est_inforce_member.treaty_code = 'GIB_Grp_Direct_EB' |
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขที่กรมธรรม์ | tx_stg_est_inforce_member | policy_no |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_est_inforce_member | promise_date |
| 3 | ModeOfPayment | ประเภทการชำระเงินของกธ | tx_stg_est_inforce_member | pay_type |
| 4 | TypePremiumRate | ประเภทอัตราเบี้ย | tx_stg_est_inforce_member | rate_type (suthanee.sa 28/05/2026) |
| 5 | CertNo | เลขที่ลูกค้า | tx_stg_est_inforce_member | cer_no |
| 6 | Age | อายุ | tx_stg_est_inforce_member | age |
| 7 | LifeSumInsured | ทุนประกันชีวิต | tx_stg_est_inforce_member | sum_insured_life |
| 8 | AccidentSumInsured | ทุนประกันชีวิต อุบัติเหตุ | tx_stg_est_inforce_member | sum_insured_accident |
| 9 | MedAccidentSumInsured | ทุนประกันค่ารักษาเนื่องจากทุนประกันทุพพลภาพ | tx_stg_est_inforce_member | sum_insured_med |
| 10 | TPDSumInsured | ค่าใช้จ่ายรวม | tx_stg_est_inforce_member | sum_insured_tpd |
| 11 | LifePremiumRate | อัตราเบี้ย ความคุ้มครองชีวิต | tx_stg_est_inforce_member | prem_rate_life |
| 12 | AccidentPremiumRate | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ | tx_stg_est_inforce_member | prem_rate_acc |
| 13 | MedAccidentPremiumRate | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_stg_est_inforce_member | prem_rate_med |
| 14 | TPDPremiumRate | อัตราเบี้ย ความคุ้มครองทุพพลภาพ | tx_stg_est_inforce_member | prem_rate_tpd |
| 15 | LifePremium | เบี้ย ความคุ้มครองชีวิต | tx_stg_est_inforce_member | prem_life |
| 16 | LifeExtraPremium | เบี้ย ความคุ้มครองชีวิต พิเศษ | tx_stg_est_inforce_member | prem_extra_life |
| 17 | AccidentPremium | เบี้ย ความคุ้มครองอุบัติเหตุ | tx_stg_est_inforce_member | prem_acc |
| 18 | AccidentExtraPremium | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ | tx_stg_est_inforce_member | prem_acc_extra |
| 19 | MedAccidentPremium | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_stg_est_inforce_member | prem_med |
| 20 | TPDPremium | เบี้ย ทุพพลภาพ | tx_stg_est_inforce_member | prem_tpd |
| 21 | IPDPremium | เบี้ย IPD | tx_stg_est_inforce_member | prem_ipd |
| 22 | OPDPremium | เบี้ย OPD | tx_stg_est_inforce_member | prem_opd |
| 23 | DentalPremium | เบี้ย ทันตกรรม | tx_stg_est_inforce_member | prem_dental |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Est_MemberLayer_{YYYY}{MM} ใช้ข้อมูลจาก tx_rig_process_hd.{YYYY}{MM} มาแสดง ตัวอย่างเช่น: Est_MemberLayer_{YYYY}{MM}ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\estimate\{period}\report_reconcile\Est_MemberLayer_{YYYY}{MM}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม DocumentDate จาก Oldest ไป Newest5. เรียงตาม ApprovedDate จาก Oldest ไป Newest6. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1339195415 | Functional Specification > 03. User Interface Specification. > Report template (RP) > RIG-RP-023 Act_MemberLayer_{YYYY}{QQ} =====
TOC
/*<![CDATA[*/
div.rbtoc1782955738198 {padding: 0px;}
div.rbtoc1782955738198 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955738198 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/
- 1 Report Detail
- 2 การ Export report
- 3 การแสดง Report file name
- 4 การกำหนด File Path 4.1 File Path
- 4.1 File Path
- 5 การแสดงชื่อ Report sheet
- 6 การเรียงลำดับข้อมูล
- 7 การแสดง Report footer

## Report Detail
| Update Date | Edit By | Source/File Name | File Type | Remark | Redmine |
| 08/01/2026 | pongsathorn.pa | Act_MemberLayer_YYYYQQ.xlsx | xlsx | Act_MemberLayer_2026Q4 |  |
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | สำหรับเรียกดูข้อมูล Inforce member ของกรมธรรม์ประกันกลุ่ม (GIB_Grp_Direct_EB) ที่ผ่านการประมวลผล Actual แล้ว |
| 2 | ผู้ใช้งาน(Target Users) | ส่วนงานคณิตศาสตร์ RI |
| 3 | การกระทำกับหน้าจอ(Actions) | เรียกดูรายงานจาก Shared Drive ของฝ่ายคณิตศาสตร์ RI ตามรอบการประมวลผล Actual |
| 4 | เงื่อนไข(Condition) | กรองเฉพาะ tx_stg_act_inforce_member.treaty_code = 'GIB_Grp_Direct_EB' |
| No. | Name | Description | Table | Field |
| 1 | PolicyNumber | เลขที่กรมธรรม์ | tx_stg_act_inforce_member | policy_no |
| 2 | EffectiveDate | วันเริ่มสัญญาปีปัจจุบัน | tx_stg_act_inforce_member | promise_date |
| 3 | ModeOfPayment | ประเภทการชำระเงินของกธ | tx_stg_act_inforce_member | pay_type |
| 4 | TypePremiumRate | ประเภทอัตราเบี้ย | tx_stg_act_inforce_member | rate_type (suthanee.sa 28/05/2026) |
| 5 | CertNo | เลขที่ลูกค้า | tx_stg_act_inforce_member | cer_no |
| 6 | Age | อายุ | tx_stg_act_inforce_member | age |
| 7 | LifeSumInsured | ทุนประกันชีวิต | tx_stg_act_inforce_member | sum_insured_life |
| 8 | AccidentSumInsured | ทุนประกันชีวิต อุบัติเหตุ | tx_stg_act_inforce_member | sum_insured_accident |
| 9 | MedAccidentSumInsured | ทุนประกันค่ารักษาเนื่องจากทุนประกันทุพพลภาพ | tx_stg_act_inforce_member | sum_insured_med |
| 10 | TPDSumInsured | ค่าใช้จ่ายรวม | tx_stg_act_inforce_member | sum_insured_tpd |
| 11 | LifePremiumRate | อัตราเบี้ย ความคุ้มครองชีวิต | tx_stg_act_inforce_member | prem_rate_life |
| 12 | AccidentPremiumRate | อัตราเบี้ย ความคุ้มครองอุบัติเหตุ | tx_stg_act_inforce_member | prem_rate_acc |
| 13 | MedAccidentPremiumRate | อัตราเบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_stg_act_inforce_member | prem_rate_med |
| 14 | TPDPremiumRate | อัตราเบี้ย ความคุ้มครองทุพพลภาพ | tx_stg_act_inforce_member | prem_rate_tpd |
| 15 | LifePremium | เบี้ย ความคุ้มครองชีวิต | tx_stg_act_inforce_member | prem_life |
| 16 | LifeExtraPremium | เบี้ย ความคุ้มครองชีวิต พิเศษ | tx_stg_act_inforce_member | prem_extra_life |
| 17 | AccidentPremium | เบี้ย ความคุ้มครองอุบัติเหตุ | tx_stg_act_inforce_member | prem_acc |
| 18 | AccidentExtraPremium | เบี้ย ความคุ้มครองอุบัติเหตุ พิเศษ | tx_stg_act_inforce_member | prem_acc_extra |
| 19 | MedAccidentPremium | เบี้ย ความคุ้มครองค่ารักษาเนื่องจากอุบัติเหตุ | tx_stg_act_inforce_member | prem_med |
| 20 | TPDPremium | เบี้ย ทุพพลภาพ | tx_stg_act_inforce_member | prem_tpd |
| 21 | IPDPremium | เบี้ย IPD | tx_stg_act_inforce_member | prem_ipd |
| 22 | OPDPremium | เบี้ย OPD | tx_stg_act_inforce_member | prem_opd |
| 23 | DentalPremium | เบี้ย ทันตกรรม | tx_stg_act_inforce_member | prem_dental |

## การ Export report
| การออกรายงาน |
| จะสามารถออกรายงานได้จากหน้าจอเงื่อนไขการดึงรายงานมีรายละเอียดดังนี้ข้อมูล Fileข้อมูลการประมวลผลหลักจาก tx_rig_process_hd |

## การแสดง Report file name
| การแสดงชื่อ File |
| Act_MemberLayer_{YYYY}{QQ} ใช้ข้อมูลจาก tx_rig_process_hd.{YYYY}{QQ} มาแสดง ตัวอย่างเช่น: Act_MemberLayer_{YYYY}{MM}ข้อมูลนามสกุลไฟล์ : xlsx |

## การกำหนด File Path
| File Path |
| \groupri\actual\{period}\report_reconcile\Act_MemberLayer_{YYYY}{MM}.xlsx |

## การแสดงชื่อ Report sheet
| การแสดงชื่อ Sheet |
| ตาม Report Detail |

## การเรียงลำดับข้อมูล
1. เรียงตาม Policy No. น้อยไปมาก2. ในกรณีที่ Policy No. ประกอบด้วยตัวอักษรและตัวเลข จะเรียงตามตัวอักษรก่อน แล้วจึงเรียงตามตัวเลข น้อยไปมาก3. ในกรณีที่ Policy No. มากกว่า 1 รายการ ให้เรียงตาม Policy Year น้อยไปมาก4. เรียงตาม DocumentDate จาก Oldest ไป Newest5. เรียงตาม ApprovedDate จาก Oldest ไป Newest6. เรียงตาม Cert No. น้อยไปมาก

## การแสดง Report footer
| ตำแหน่งใน Template | ฟิลด์/ข้อมูลที่นำมาใส่ลงในไฟล์ Excel | Condition | Example |
| ต่อจาก Report Footer ของแต่ละ Template |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column A | "วันที่ดาวน์โหลด : " |  |  |
| ต่อจาก Row Remark (หรือ Row Total) + 1 Row Column B | now() | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่พิมพ์ Column A | "ผู้ดาวน์โหลด : " |  |  |
| ต่อจาก Row วันที่พิมพ์ Column B | {User Login} |  | edw_actuarial_01 |
| ต่อจาก Row ผู้ดาวน์โหลด Column A | "วันที่ประมวลผล " |  |  |
| ต่อจาก Row ผู้ดาวน์โหลด Column B | tx_rig_process_hd.create_date | Format : dd/mm/yyyy ปีคศ. hh:mm | 02/04/2024 14:59 |
| ต่อจาก Row วันที่ประมวลผล Column A | "ผู้ประมวลผล : " |  |  |
| ต่อจาก Row วันที่ประมวลผล Column B | tx_rig_process_hd.create_by |  | edw_actuarial_01 |


===== PAGE 1312719098 | Functional Specification > 03. User Interface Specification. > Screen design (SD) =====
(empty page)


===== PAGE 1300725797 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > [ยกเลิก]RIG-SD-004 หน้าจอ จัดการข้อมูล Nature of Business =====
### Actuarial สิทธิ์การเข้า
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ ส่วนส่งประกันภัยต่อ

### Assumption
- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ

### Screen Overview
- ใช้สำหรับ จัดการข้อมูล Nature of Business เข้าสู่ระบบ Group Reinsurance เพื่อใช้ในการ ประมวลผล Actual

### Screen Design
- IRI-GRP-SD13-01 - หน้าจอ จัดการข้อมูล Nature of Business
- IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Business
Description
| No. | หัวข้อ | รายละเอียด |
| 1 | วัตถุประสงค์ (Objective) | เพื่อให้สามารถ จัดการข้อมูล Nature of Business เข้าสู่ระบบได้อย่างถูกต้องเพื่อใช้ข้อมูลในการ ประมวลผล Actual ของระบบ Reinsurance โดยนำเข้าเป็นรายไตรมาส |
| 2 | ผู้ใช้งาน และ สิทธิ์ที่ได้รับ(Target Users and authorization) | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ ส่วนส่งประกันภัยต่อ |
| 3 | การกระทำกับหน้าจอ (Actions) | กดใส่เงื่อนไขในหน้าจอ เพื่อดูข้อมูลตามเงื่อนไขเฉพาะที่ต้องการได้กดปุ่ม "ค้นหา" เพื่อค้นหารายการตามเงื่อนไขกดปุ่ม "ล้างเงื่อนไข" เพื่อล้างเงื่อนไขที่เลือกในหน้าจอ |
| 4 | อธิบายรายละเอียด (Description) | รายละเอียดของหน้าจอมีดังนี้1. เงื่อนไขการแสดงข้อมูลFieldTypeValidation/ ActionDefaultDBDCodeauto completeแสดงเป็น Dropdown ListList รายการ ดูจากฐานข้อมูลที่ดึงจากต้นทางประกันกลุ่มทั้งหมดNature of Business (Thai)auto completeแสดงเป็น Dropdown ListList รายการ ดูจากฐานข้อมูลที่ดึงจากต้นทางประกันกลุ่มทั้งหมดNature of Business (English)auto completeแสดงเป็น Dropdown ListList รายการ ดูจากฐานข้อมูลที่มีการบันทึกค่าไว้ในระบบหากไม่มีข้อมูล (เป็น NULL) ให้แสดงตัวเลือก 'ค่าว่าง'ทั้งหมด** กำหนดการจัดเรียงข้อมูลเพื่อแสดงผลการค้นหา ดังต่อไปนี้จัดเรียงข้อมูลแสดงรายการที่ Nature of Business (English) เป็นค่า NULL เป็นลำดับแรกจัดเรียงข้อมูลจาก DBDCode มากไปหาน้อยจัดเรียงข้อมูลตามวันที่และเวลาที่เกิดรายการข้อมูลเข้าสู่ระบบ 2. ตารางแสดงผลข้อมูลFieldDescriptionValidation/ ActionExampleดำเนินการicon "ดินสอ"icon สำหรับกดเพื่อแก้ไขข้อมูล Nature of Business และระบุหมายเหตุเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of BusinessDBDCodeรหัสของ Nature of Business รหัสของ Nature of Business จากต้นทางประกันกลุ่มและ Snapshot จัดเก็บไว้เป็น Master Data ของ Group RI80102Nature of Business (Thai)Nature of Business ภาษาไทยNature of Business ภาษาไทย ดึงข้อมูลจากต้นทางประกันกลุ่มและ Snapshot จัดเก็บไว้เป็น Master Data ของ Group RIโรงเรียนประถมศึกษาNature of Business (English)Nature of Business ภาษาอังกฤษNature of Business ภาษาอังกฤษ ดึงข้อมูลจาก Master Data ของ Group RI หากเป็นค่า NULL ให้แสดงตัวเลือก 'ค่าว่าง' สำหรับการค้นหาโดยเป็นข้อมูลที่รับค่าจากหน้าจอตามที่กำหนดโดยเจ้าหน้าที่ฝ่ายคณิตศาสตร์ประกันภัยต่อกำหนดให้ระบบแสดงผลที่หน้าจอและจัดเก็บข้อมูลเป็นตัวอักษรภาษาอังกฤษพิมพ์ใหญ่SCHOOLวันที่และเวลาดำเนินการวันและเวลานำเข้าข้อมูลแสดงผลรูปแบบ DD/MM/YYYY HH:MM:SS ตามรายละเอียด ดังนี้DD รูปแบบวันที่ ( 01-31 )MM รูปแบบเดือน ( 01-12 )YYYY รูปแบบปี พ.ศ. HH รูปแบบชั่วโมง 00-24MM รูปแบบนาที 00-60SS รูปแบบวินาที 00-6005/06/2568 09:30:00ผู้ดำเนินการผู้แก้ไขข้อมูลแสดงผลข้อมูลผู้ใช้จากตาม Login IDactuarial.riหมายเหตุหมายเหตุของรายการข้อมูลแสดงหมายเหตุที่ระบุจากการจัดการข้อมูล Nature of Businessปรับแก้ข้อมูล |

# Functional Specification
ส่วนการระบุเงื่อนไขการแสดงข้อมูล
| No. | Component Name | Type | Validation/ Action | Default |
| 1 | DBDCode | auto complete | แสดงข้อมูลของ DBDCode ที่เลือกรายการ | ทั้งหมด |
| 2 | Nature of Business (Thai) | auto complete | แสดงข้อมูลของ Nature of Business (Thai) ที่เลือกรายการ | ทั้งหมด |
| 3 | Nature of Business (English) | auto complete | แสดงข้อมูลของ Nature of Business (English) ที่เลือกรายการ | ทั้งหมด |
ส่วนการแสดงข้อมูล
| No. | Component Name | Type | Description | Validation/ Action | Default |
| ตารางแสดงผลการค้นหา |
| 1 | ดำเนินการ | icon | icon ดินสอ | Enable ตลอดเวลาเมื่อกด icon จะเปิด IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Business เพื่อแก้ไขข้อมูล Nature of Business (English) พร้อมทั้งสามารถระบุหมายเหตุได้ |  |
| 2 | DBDCode | Text | แสดง DBDCode จากต้นทางประกันกลุ่ม | tx_rig_nature_business.dbd_code |  |
| 3 | Nature of Business (Thai) | Text | แสดง Nature of Business (Thai) จากต้นทางประกันกลุ่ม | tx_rig_nature_business.type_business_th |  |
| 4 | Nature of Business (English) | Text | แสดง Nature of Business (English) จากระบบ ri group | tx_rig_nature_business.type_business_en |  |
| 5 | วันที่และเวลาดำเนินการ | Text | แสดงวันและเวลานำเข้าข้อมูล | tx_rig_nature_business.created_date |  |
| 6 | ผู้ดำเนินการ | Text | แสดงผู้นำเข้าข้อมูล | tx_rig_nature_business.created_by |  |
| 7 | หมายเหตุ | Text | แสดงหมายเหตุของรายการข้อมูล | tx_rig_nature_business.remark |  |


===== PAGE 1300725933 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > [ยกเลิก]RIG-SD-004 หน้าจอ จัดการข้อมูล Nature of Business > IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Business =====
# /*<![CDATA[*/
div.rbtoc1782955739147 {padding: 0px;}
div.rbtoc1782955739147 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955739147 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
- IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Business

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | จัดการข้อมูล Nature of Business |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ ส่วนส่งประกันภัยต่อ |
| 3 | การกระทำกับหน้าจอ(Actions) | ใส่หมายเหตุ ของรายการข้อมูลเพิ่ม, แก้ไข Nature of Business |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด icon จากหน้าจอ IRI-GRP-SD13 หน้าจอ จัดการข้อมูล Nature of Business ระบบจะแสดงหน้า Popup IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Businessระบบแสดงค่าจากฐานข้อมูลระบบ Group RI ตาม IRI-GRP-SD13 หน้าจอ จัดการข้อมูล Nature of Businessดำเนินการบันทึกข้อมูลตามรายละเอียดดังนี้ส่วนการแสดงข้อมูลNoComponent TypeComponent NameAction / Data ValueExampleRemark1LabelDBDCodeแสดงข้อมูลของต้นทางประกันกลุ่มที่ Snapshot จัดเก็บไว้เป็น Master Data ของ Group RIไม่สามารถแก้ไขข้อมูลได้28221 2LabelNature of Business (Thai)แสดงข้อมูลของต้นทางประกันกลุ่มที่ Snapshot จัดเก็บไว้เป็น Master Data ของ Group RIไม่สามารถแก้ไขข้อมูลได้การผลิตเครื่องจักรที่ใช้ในการขึ้นรูปโลหะ 3LabelNature of Business (English)แสดงข้อมูลที่จัดเก็บไว้เป็น Master Data ของ Group RIหากไม่มีข้อมูลแสดงเป็นค่าว่าง สำหรับให้ผู้ใช้งานกรอกข้อมูลกำหนดให้ระบบแปลงข้อมูลแสดงผลที่หน้าจอและจัดเก็บข้อมูลเป็นตัวอักษรภาษาอังกฤษพิมพ์ใหญ่MANUFACTURE OF METAL-FORMING MACHINERY 4Labelหมายเหตุแสดงข้อมูลที่จัดเก็บไว้เป็น Master Data ของ Group RIหากไม่มีข้อมูลแสดงเป็นค่าว่าง สำหรับให้ผู้ใช้งานกรอกข้อมูล*อ้างอิงภาษาอังกฤษจากกรมพัฒนาธุรกิจการค้า (DBD) การทำงานของปุ่มและดำเนินการ 1Buttonปุ่มดำเนินการ ยกเลิกเมื่อกดปุ่ม ระบบจะปิดหน้าต่าง Popupและกลับสู่หน้าจอก่อนหน้า IRI-GRP-SD13 หน้าจอ จัดการข้อมูล Nature of Business 2Buttonปุ่มดำเนินการ บันทึกเมื่อกดปุ่ม ระบบจะบันทึกข้อมูลจากหน้าจอระบบตรวจสอบข้อมูล dbd_code ซ้ำกับที่มีอยู่ใน tx_rig_nature_business เป็นรหัสเดียวกันหรือไม่ และ Nature of Business (Thai) ต่างกันหรือไม่หากพบ DBDCode ซ้ำให้ระบบแจ้งเดือน หากกด ยืนยัน ให้ระบบดำเนินการขั้นตอนบันทึกข้อมูลทีเลือก edit แล้วลบข้อมูลที่มี dbd_code ซ้ำกับข้อมูลนี้ ออกจาก tx_rig_nature_business หากกดปุ่ม ยกเลิก ให้ระบบกลับสู่หน้าจอก่อนหน้า IRI-GRP-SD13-02 - หน้าจอ Popup Edit Nature of Businessหากไม่พบ dbd_code ซ้ำ ให้ระบบดำเนินการขั้นตอนบันทึกข้อมูลเพื่อ update tx_rig_nature_business ตามปกติบันทึกข้อมูลจากหน้าจอลงตารางจัดเก็บไว้ ที่ tx_rig_nature_businessNoFieldValidation/ Action1Nature of Business (English)รับค่า "Nature of Business (English)" บันทึกข้อมูลจากที่ระบุจากหน้าจอ2หมายเหตุรับค่า "หมายเหตุ" บันทึกข้อมูลจากที่ระบุจากหน้าจอกลับสู่หน้าจอก่อนหน้า IRI-GRP-SD13 หน้าจอ จัดการข้อมูล Nature of Business |


===== PAGE 1292861487 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-001 หน้าจอ นำเข้าข้อมูล Investigate Expense =====
1. ตรวจสอบ Treaty ใน Table Config
- ตรวจสอบข้อมูลใน cf_rig_treaty โดยมีเงื่อนไขดังนี้cf_rig_treaty.approve = TRUEcf_rig_treaty.status = APeriod ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_dateเก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- cf_rig_treaty.approve = TRUE
- cf_rig_treaty.status = A
- Period ที่ประมวลผล อยู่ในช่วงระหว่าง cf_rig_treaty_general.start_date กับ cf_rig_treaty_general.expire_date
- เก็บค่า cf_rig_treaty.cf_rig_treaty_id ใน {TREATY_ID}
- สร้างรายการที่ tx_rig_act_hd ดังนี้tx_rig_act_hd Fieldข้อมูลเงื่อนไขตัวอย่างrig_act_hd_id running no.1period รอบ Period ที่ประมวลผล202410data_quarter ปีของ Period ที่ประมวลผล ต่อด้วย QX โดยแปลง X จากการตรวจสอบเดือนการประมวลผล แบ่งออกเป็น 4 เลขดังนี้กรณีเดือนของ Period ที่ประมวลผล (เลขสองหลักท้ายของ period)= 01 หรือ 02 หรือ 03 แปลง X เป็น 1 จะได้ค่า Q1= 04 หรือ 05 หรือ 06 แปลง X เป็น 2 จะได้ค่า Q2= 07 หรือ 08 หรือ 09 แปลง X เป็น 3 จะได้ค่า Q3= 10 หรือ 11 หรือ 12 แปลง X เป็น 4 จะได้ค่า Q42024Q4losing_period รอบ Period ที่ประมวลผล202410cf_reinsurer_idcf_rig_treaty.cf_reinsurer_idของ Treaty ที่กำลังประมวลผล cf_treaty_idcf_rig_treaty.cf_rig_treaty_idของ Treaty ที่กำลังประมวลผล treaty_codecf_rig_treaty.treaty_codeจากขั้นตอน 1. ตรวจสอบ Treaty ที่ต้องประมวลผล status เมื่อสร้างรายการครั้งแรกให้บันทึก "PROCESSING"กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "ERROR"กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก "SUCCESS" edw_status NULL edw_status_desc NULL ri_std_hd_id NULL ri_std_hd_id_oic NULL ri_premium เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก ri_commission เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก claim_recovery เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก due_to เมื่อสร้างรายการครั้งแรกให้บันทึก 0กรณีประมวลผลสำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก remark กรณีประมวลผลไม่สำเร็จหลังกระบวนการทั้งหมด ให้ Update แล้วบันทึก Log Error ที่ระบบแจ้ง usage_status เมื่อสร้างรายการครั้งแรกให้บันทึก A created_date now() created_by เมื่อสร้างรายการครั้งแรกให้บันทึก SYSTEM updated_date NULL updated_by NULL
ค้นหา Treaty ทั้งหมดที่ถูก Config ไว้ แต่เลือกเฉพาะกรมธรรม์ที่เคยอนุมัติ Approve แล้วอย่างน้อยหนึ่งครั้ง และยังมีสถานะใช้งาน และยังมีวันที่เปิดใช้งานอยู่ในปัจจุบัน จากนั้นเก็บ ID ของ Treaty นั้นไว้เพื่อไปค้นหารายการรายละเอียด Config ของกรมธรรม์ต่อ
2. เตรียมข้อมูลประมวลผล
- นำรายการ Treaty ที่ผ่านเงื่อนไขข้อ 1 มาเตรียมข้อมูลสำหรับประมวลผลดังนี้Parameterเงื่อนไข ค่าที่เก็บลง Parameter{TREATY_CODE}ตาม {TREATY_ID} จากข้อ 1 cf_rig_treaty.treaty_code{RE_CODE}ตรวจสอบที่ cf_lookup_catalog ที่ cf_lookup_catalog.parent_id = 1000100นำ cf_rig_treaty.treaty_code เทียบกับ cf_lookup_catalog.description เก็บค่า cf_lookup_catalog.lookup_key ที่ได้{GENERAL_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_id ที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_general ที่ได้{CONDITION_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_condition ที่ได้{POLICY_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_policy ที่ได้{RIPREM_STATUS}นำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_dt.cf_rig_treaty_idที่มี cf_rig_treaty_dt.status = Aเก็บค่า cf_rig_treaty_dt.status_ri_premium ที่ได้
- ตรวจสอบ ID ของแต่ละรายการที่ถูก Approve ล่าสุด ของแต่ละหัวข้อParameterเงื่อนไขค่าที่เก็บลง Parameter{GENERAL_ID}ถ้า {GENERAL_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_general.cf_rig_treaty_id ที่รายการ cf_rig_treaty_general.status = "A"เก็บค่า cf_rig_treaty_general.cf_rig_treaty_general_id ที่ได้{CONDITION_ID}ถ้า {CONDITION_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_cond_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_cond_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_cond_hd.effective_date_from กับ cf_rig_treaty_cond_hd.effective_date_toเก็บค่า cf_rig_treaty_cond_hd.cf_rig_treaty_cond_hd_id ที่ได้{POLICY_ID}ถ้า {POLICY_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_policy_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_policy_hd.status = "A"เก็บค่า cf_rig_treaty_policy_hd.cf_rig_treaty_policy_hd_id ที่ได้{RIPREM_ID}ถ้า {RIPREM_STATUS} = TRUEนำ cf_rig_treaty.cf_rig_treaty_id ตรวจสอบที่ cf_rig_treaty_prem_rate_hd.cf_rig_treaty_id ที่รายการ cf_rig_treaty_prem_rate_hd.status = "A"และ Period ที่ประมวลผลอยู่ในช่วงของ cf_rig_treaty_prem_rate_hd.effective_date_from กับ cf_rig_treaty_prem_rate_hd.effective_date_toเก็บค่า cf_rig_treaty_prem_rate_hd.cf_rig_treaty_prem_rate_hd_id ที่ได้
ค้นหา Reinsurer No ของ Treaty นั้นเพื่อนำไปค้นหากรมธรรม์ที่อยู่ภายใต้ Treaty นี้ทั้งหมด รวมถึงสถานะการใช้งาน Config ต่าง ๆ สำหรับเอาไว้เช็กต่อในการประมวลผล ถ้ามีการ Config ส่วนใดเป็น FALSE แต่มีการคำนวณที่ต้องเลือกใช้ ก็จะสามารถข้ามกระบวนการนั้นไปได้เลย
เก็บ ID ของรายการที่มีสถานะเป็น A เท่านั้น เนื่องจากภายใต้ Table Config จะมีรายการที่ถูก Config ไว้ทั้งหมด 3 แบบด้วยกัน คือ
- A: Active สถานะนี้เกิดจากการอนุมัติใช้งาน Treaty แล้วอย่างน้อย 1 ครั้ง และจะใช้ข้อมูลที่มีสถานะ A นี้สำหรับการประมวลผลทุกครั้ง
- I: Inactive สถานะนี้เกิดจากหลังการอนุมัติหรือมีการแก้ไขข้อมูลแล้วอนุมัติจนทำให้มีรายการสถานะ A ขึ้นมาใหม่แล้ว รายการสถานะ A เดิมจะต้องเปลี่ยนเป็น I เพื่อให้ระบบอ่านได้ถูกว่าต้องใช้ข้อมูลรายการไหนสำหรับการประมวลผล แต่ยังสามารถตรวจสอบประวัติรายการ A เดิมจาก I ได้
- D: สถานะนี้เกิดในครั้งแรกที่สร้างข้อมูล และเกิดขึ้นหลังจากการอนุมัติและกำลังอยู่ระหว่างการแก้ไขข้อมูลใหม่ เพราะระบบจะสร้างรายการขึ้นมาใหม่เสมอ เพื่อให้สถานะ A เดิมยังอยู่และนำไปประมวลผลได้ และ D จะใช้แก้ไขไปจนกว่าจะมีการอนุมัติ เมื่ออนุมัติรายการ D จะกลายเป็นรายการ A ใหม่ และรายการ A เก่า จะมีสถานะเป็น I ตามลำดับ

# Functional Specification
ส่วนการระบุเงื่อนไขการแสดงข้อมูล
| No. | Component Name | Type | Validation/ Action | Default |
| 1 | ข้อมูลประจำไตรมาส | Dropdown List | แสดงข้อมูลของ ไตรมาส ที่เลือกรายการ | ไตรมาส ปัจจุบัน |
ส่วนการแสดงข้อมูล
| No. | Component Name | Type | Description | Validation/ Action | Default |
| ตารางแสดงผลการค้นหา |
| 1 | ครั้งที่ | Text | แสดงจำนวนรายการนำเข้าข้อมูลในรอบการประมวลผลปัจจุบัน | แสดงผลรายการล่าสุดไว้บนสุด | 1 |
| 2 | ดำเนินการ | Button | ปุ่ม อนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD01-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อยืนยันอนุมัติข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "ยืนยันนำเข้าข้อมูลสำเร็จ" (ยกเลิก)tx_rig_exp_hd.status = '7'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยืนยันส่งอนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD01-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อส่ง Checker ตรวจสอบ พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "รออนุมัติข้อมูล"(ยกเลิก)tx_rig_exp_hd.status = '5'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยกเลิก | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD01-04 - หน้าจอ Popup ยกเลิกไฟล์ข้อมูล เพื่อยืนยันการยกเลิกข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะเป็น “ยกเลิกข้อมูล”(ยกเลิก)tx_rig_exp_hd.status = '6'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
| 3 | วันที่และเวลาดำเนินการ | Text | แสดงวันและเวลานำเข้าข้อมูล | (ยกเลิก)tx_rig_exp_hd.created_date |  |
| 4 | ผู้ดำเนินการ | Text | แสดงผู้นำเข้าข้อมูล | (ยกเลิก)tx_rig_exp_hd.created_by |  |
| 5 | สถานะ | Text | แสดงสถานะข้อมูล | (ยกเลิก)tx_rig_exp_hd.status |  |
| 6 | Success Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำเข้าสำเร็จ | (ยกเลิก)tx_rig_exp_hd.sum_records(ยกเลิก)tx_rig_exp_hd.imp_file_available = True(ยกเลิก)tx_rig_exp_hd.unuse_flag = False |  |
| 7 | Error Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำไม่เข้าสำเร็จ | (ยกเลิก)tx_rig_exp_hd.sum_records(ยกเลิก)tx_rig_exp_hd.err_file_available = True |  |
| 8 | หมายเหตุ | Text | แสดงหมายเหตุของรายการข้อมูล | (ยกเลิก)tx_rig_exp_hd.remark |  |


===== PAGE 1292862030 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-001 หน้าจอ นำเข้าข้อมูล Investigate Expense > IRI-GRP-SD01-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล Investigate Expense =====
# /*<![CDATA[*/
div.rbtoc1782955739144 {padding: 0px;}
div.rbtoc1782955739144 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955739144 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD01-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล
ตัวอย่างไฟล์นำเข้าข้อมูลจาก User:  Investigation Expense.xlsx
อ้างอิง: IRI-GRP-SD01-03 - รูปแบบเอกสารนำเข้าไฟล์ Investigate Expense

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าไฟล์ข้อมูล Investigate Expense |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายสินไหม (เฉพาะ Maker) |
| 3 | การกระทำกับหน้าจอ(Actions) | ใส่หมายเหตุ ของรายการข้อมูลเลือก check box ไม่มีข้อมูลนำเข้าประจำไตรมาสนำเข้าไฟล์ข้อมูล Investigate Expense |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด ปุ่ม "นำเข้าไฟล์ข้อมูล" ใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense ระบบจะแสดงหน้าจอ IRI-GRP-SD01-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล รายละเอียดดังนี้ระบบแสดงค่า “ประจำไตรมาส” ตาม Dropdown ที่เลือกจาก IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expenseกรณีไม่มีข้อมูลนำเข้าประจำไตรมาส นั้นๆ จะต้อง "Checkbox ไม่มีข้อมูลนำเข้าประจำไตรมาส"หากกดปุ่มปิด หรือ “ยกเลิก” ระบบปิดหน้าจอ และกลับสู่หน้าจอหลัก หากกดปุ่ม “บันทึก” ระบบดำเนินการ ดังนี้ตรวจสอบว่ามีการทำรายการหรือไม่กรณีมีการเลือก "Checkbox" ไม่มีข้อมูลนำเข้า ให้กลับสู่หน้าจอหลัก พร้อมทั้งแสดงรายการเพื่อยืนยัน พร้อมหมายเหตุ "ไม่มีข้อมูล Update ในรอบปัจจุบัน"กรณีมีการ Upload File ข้อมูล ให้ดำเนินการตรวจสอบต่อในข้อ bกรณีไม่ได้เลือก Checkbox และ ไม่ได้ Upload File จะ Disable ปุ่มบันทึกตรวจสอบ Format ไฟล์นำเข้า โดยนามสกุลที่สามารถ Upload ไฟล์ได้เฉพาะ xlsxหากไม่เป็น Excel ระบบแสดง Popup ข้อความ "ไม่สามารถทำรายการได้ เนื่องจากรูปแบบไฟล์นำเข้าไม่ถูกต้อง" และจบกระบวนการทำงานหากเป็น Excel ระบบแสดง Popup ข้อความ “ระบบกำลังประมวลผลข้อมูล” และระบบปรับสถานะรายการเป็น “กำลังดำเนินการ”นำเข้า Excel ไฟล์ข้อมูลระบบทำการตรวจสอบความถูกต้องของไฟล์นำเข้า ซึ่งหากพบ error มากกว่า 1 เคส ให้แสดงหมายเหตุต่อกันโดยมี , คั่น โดยตรวจสอบตามรายการดังนี้ตรวจสอบ จำนวนคอลัมน์ ของไฟล์นำเข้าว่าถูกต้องหรือไม่หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบ ชื่อคอลัมน์ ว่าถูกต้องหรือไม่หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากชื่อคอลัมน์ถูกต้อง ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลของแต่ละคอลัมน์ ว่าตรงตาม Data Type ที่กำหนดหรือไม่ เช่น ต้องเป็นตัวเลขเท่านั้นหากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลที่เป็นวันที่ (Date) ว่าถูกต้องหรือไม่ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detailหากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลว่าเป็นรายการ Duplicate หรือไม่หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป5. ตรวจสอบว่าสามารถดึงข้อมูลกรมธรรม์ตามในไฟล์นำเข้าได้หรือไม่ นำค่าต่อไปนี้ที่ระบุจากไฟล์นำเข้า ตรวจสอบกับ WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense TBC เดี๋ยวต้องเปลี่ยนเป็นตารางที่ฟีดมาPolicyNoEffective DateCertNoClaim NoApproved Dateหากไม่สามารถดึงข้อมูลข้างต้นได้ครบทุกรายการ ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ “ไม่พบรายการข้อมูลในฐานข้อมูลประกันกลุ่ม”6. บันทึกข้อมูลในไฟล์นำเข้าลงตาราง header และ detailตาราง header บันทึกค่าตาม (ยกเลิก)tx_rig_exp_hdตาราง detail บันทึกค่าตาม (ยกเลิก)tx_rig_exp_dt7. หากดำเนินการบันทึกข้อมูลเสร็จสิ้น ระบบดำเนินการ ดังนี้กรณีสำเร็จ ปรับสถานะเป็น “รอยืนยันส่งอนุมัติ”(ยกเลิก)tx_rig_exp_hd.status = '4'กรณีไม่สำเร็จ ปรับสถานะ "นำเข้าไม่สำเร็จ" พร้อมแจ้ง Error ที่ “หมายเหตุ” โดยจะแสดง System Error ตามที่พบ |


===== PAGE 1295483459 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-001 หน้าจอ นำเข้าข้อมูล Investigate Expense > IRI-GRP-SD01-05 - หน้าจอ Popup Investigate Expense (Success Data) =====
# /*<![CDATA[*/
div.rbtoc1782955739084 {padding: 0px;}
div.rbtoc1782955739084 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955739084 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD01-05 - หน้าจอ Popup Investigate Expense (Success Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าสำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายสินไหม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าสำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Success Data ใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense ระบบจะแสดงหน้าจอ IRI-GRP-SD01-05 - หน้าจอ Popup Investigate Expense (Success Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_exp_dtPolicyNo policy_numberEffective Datepromise_dateCert Nocert_noApproved Dateapproved_dateInvestigation Expenseinvestigation_expenseClaim Noclaim_no |


===== PAGE 1295483491 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-001 หน้าจอ นำเข้าข้อมูล Investigate Expense > IRI-GRP-SD01-06 - หน้าจอ Popup Investigate Expense (Error Data) =====
# /*<![CDATA[*/
div.rbtoc1782955739082 {padding: 0px;}
div.rbtoc1782955739082 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955739082 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD01-06 - หน้าจอ Popup Investigate Expense (Error Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าไม่สำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายสินไหม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าไม่สำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Error Data ใน IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense ระบบจะแสดงหน้าจอ IRI-GRP-SD01-06 - หน้าจอ Popup Investigate Expense (Error Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_exp_dtPolicyNo policy_numberEffective Datepromise_dateCert Nocert_noApproved Dateapproved_dateInvestigation Expenseinvestigation_expenseClaim Noclaim_noRemarkremark |


===== PAGE 1293124462 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-001 หน้าจอ นำเข้าข้อมูล Investigate Expense > รูปแบบเอกสารนำเข้าไฟล์ Investigate Expense =====
ไฟล์นำเข้าสำหรับ IRI-GRP-SD01 หน้าจอ นำเข้าข้อมูล Investigate Expense
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_exp_dt |
| PolicyNo | เลขที่กรมธรรม์ | GH4634 | policy_number |
| Effective Date | วันที่คุ้มครองของกรมธรรม์ | 01/07/2023 | promise_date |
| Cert No | หมายเลขสมาชิก | 05290 | cert_no |
| Approved Date | วันที่อนุมัติ | 24/09/2024 | approved_date |
| Investigation Expense | ค่าใช้จ่ายในการสืบสวนสอบสวน | 3,000.00 | investigation_expense |
| Claim No. | หมายเลขการเคลม | 202401007755 | claim_no |
กรณีพบ Error Invalid Data Format ระบบแสดง Column “Remark”
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_exp_dt |
| Remark | หมายเหตุจาก Error File | ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด | remark |


===== PAGE 1294663956 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-002 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate =====
### สิทธิ์การเข้า
- เจ้าหน้าที่ฝ่ายประกันกลุ่ม

### Assumption
- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ

### Screen Overview
- หน้าจอนี้ใช้สำหรับ นำเข้าข้อมูลกรมธรรม์ประกันกลุ่ม Unname เข้าสู่ระบบงานประกันกลุ่ม (Group Insurance System) เพื่อเตรียมข้อมูลให้พร้อมสำหรับการส่งไปให้ Group Reinsurance System (Group RI) สำหรับคำนวณ Estimate Premium ของกลุ่มกรมธรรม์ประเภท Unname Policy

### Screen Design

##### ส่วนหน้าจอหลัก

##### ส่วน Tab Head

##### ส่วน Tab Class

#### Description
| No. | หัวข้อ | รายละเอียด |
| 1 | วัตถุประสงค์ (Objective) | เพื่อให้สามารถ นำเข้าข้อมูลกรมธรรม์ Unname Policy เข้าสู่ระบบได้อย่างถูกต้องเพื่อใช้ข้อมูลที่นำเข้าในการ ประมวลผล Estimate ของระบบ Reinsurance โดยนำเข้าเป็นรายเดือน |
| 2 | ผู้ใช้งาน และ สิทธิ์ที่ได้รับ(Target Users and authorization) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม เพื่อนำเข้าไฟล์ Unname, ตรวจสอบความถูกต้องของข้อมูล |
| 3 | การกระทำกับหน้าจอ (Actions) | ระบุข้อมูลส่วนข้อมูลกรมธรรม์ และส่วนข้อมูลจำนวนสมาชิก, และทุนกดปุ่ม Save เพื่อบันทึกข้อมูลกรมธรรม์ที่นำเข้ากดปุ่ม Exit เพื่อปิดหน้าจอ |
| 4 | อธิบายรายละเอียด (Description) | รายละเอียดของหน้าจอมีดังนี้1. ส่วนระบุ และแสดงข้อมูลกรมธรรม์FieldDescriptionValidation/ ActionExampleDocument No.เลขที่เอกสารระบบกำหนดค่าให้โดยอัตโนมัติ และไม่อนุญาตให้ผู้ใช้งานแก้ไขข้อมูลSM68-08250Policy No.เลขกรมธรรม์จำเป็นต้องระบุข้อมูล (Require field) Yearปีกรมธรรม์จำเป็นต้องระบุข้อมูล (Require field)แสดงข้อมูลปีกรมธรรม์ โดยเรียงลำดับจากน้อยไปมาก1Cover Date Fromวันที่เริ่มต้นความคุ้มครองระบบกำหนดค่าให้โดยอัตโนมัติจากข้อมูลเลขกรมธรรม์ และปีกรมธรรม์ และไม่อนุญาตให้ผู้ใช้งานแก้ไขข้อมูล01/07/2568To Dateวันที่สิ้นสุดความคุ้มครองระบบกำหนดค่าให้โดยอัตโนมัติจากข้อมูลเลขกรมธรรม์ และปีกรมธรรม์ และไม่อนุญาตให้ผู้ใช้งานแก้ไขข้อมูล01/08/2568Periodวันที่งวดจำเป็นต้องระบุข้อมูล (Require field)แสดงผลรูปแบบ DD/MM/YYYY HH:MM:SS รายละเอียด ดังนี้DD คือ วันที่แบบ 01-31MM คือ เดือนแบบ 01-12YYYY คือ ปี พ.ศ. แบบ 2500-999901/07/2568Period Typeสถานะงวด ว่าเป็นงวดตามรอบปกติ หรือเป็นงวดพิเศษที่เกิดจากการปรับข้อมูลย้อนหลังระบบกำหนดค่าให้โดยอัตโนมัติจากข้อมูลเลขกรมธรรม์ และปีกรมธรรม์ และไม่อนุญาตให้ผู้ใช้งานแก้ไขข้อมูลงวดปกติCompanyชื่อบริษัทระบบกำหนดค่าให้โดยอัตโนมัติจากข้อมูลเลขกรมธรรม์ และปีกรมธรรม์ และไม่อนุญาตให้ผู้ใช้งานแก้ไขข้อมูล 2. ส่วน Tab Head ระบุข้อมูลจำนวนสมาชิก และทุนFieldDescriptionValidation/ ActionExampleDept.Codeรหัสหน่วยงานระบุเป็นตัวเลข0000000001Dept.Nameชื่อหน่วยงาน / แผนก สำนักงานLife Prem.จำนวนเบี้ยความคุ้มครองชีวิตระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง37070.00Accจำนวนเบี้ยอุบัติเหตุระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง42960.00TotalMedจำนวนเบี้ยค่ารักษาพยาบาลระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง64440.00TotalTPDจำนวนเบี้ยทุพพลภาพระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง10740.00TotalIPจำนวนเบี้ยผู้ป่วยในระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง118936.00TotalOPจำนวนเบี้ยผู้ป่วยนอกระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง130592.00Dentalจำนวนเบี้ยทันตกรรมระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง-TotalE1Netจำนวนเบี้ยชีวิต Extra 1ระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง-GrandTotalยอดรวมเบี้ยทั้งหมดระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง404,738.00Life Amt.จำนวนสมาชิกความคุ้มครองชีวิต ณ Period นั้น ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง358Acc Amt.จำนวนสมาชิกอุบัติเหตุที่ ณ Period นั้น ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง358Med Amt.จำนวนสมาชิกค่ารักษาพยาบาลที่ ณ Period นั้น ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง-TPD Amt.จำนวนสมาชิกทุพพลภาพที่ ณ Period นั้น ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง358E1 Amt.จำนวนสมาชิกชีวิต Extra 1ที่ ณ Period นั้น ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง-Life Insureจำนวนทุนความคุ้มครองชีวิตระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง18535000.00Acc. Insureจำนวนทุนอุบัติเหตุระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง3580000.00Med. Insureจำนวนทุนค่ารักษาพยาบาลระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง61500.00TPD Insureจำนวนทุนทุพพลภาพระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง35800000.00CompCodeรหัสบริษัท 2564000498Conpany Nameชื่อบริษัท บริษัท โอเชียน จำกัด3. ส่วน Tab ClassFieldDescriptionValidation/ ActionExampleDept.Codeรหัสหน่วยงานระบุเป็นตัวเลข0000000001Dept.Nameชื่อหน่วยงาน / แผนก สำนักงานClass No.ClassNoระบุเป็นตัวเลข1LastBillจำนวนสมาชิกคงค้างจากงวดก่อนหน้าระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง18Additionsจำนวนสมาชิกที่เพิ่มขึ้นในงวดนี้ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0Terminationsจำนวนสมาชิกที่สิ้นสุดความคุ้มครองในงวดนี้ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0Totalจำนวนผู้เอาประกันรวมของงวดนี้ระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง18LifeAmtเบี้ยความคุ้มครองชีวิตระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0 AccAmtเบี้ยอุบัติเหตุระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง18MedAmtเบี้ยค่าทุพพลภาพระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง18TPDAmtเบี้ยค่ารักษาพยาบาลระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0E1Premเบี้ยเพิ่มพิเศษระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0E1Amtจำนวนสมาชิกที่มีเบี้ยเพิ่มพิเศษระบุเป็นตัวเลข หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0LifeInsurทุนประกันชีวิตระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0AccInsurทุนประกันอุบัติเหตุระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง1800000MedInsurทุนประกันค่ารักษาพยาบาลจากอุบัติเหตุระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง180000TPDInsurทุนประกันทุพพลภาพระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0Rateอัตราเบี้ยระบุเป็นตัวเลข450Premiumเบี้ยระบุเป็นจำนวนเงิน หรือค่าว่างได้ในกรณีที่ไม่มีความคุ้มครอง0Company Code.รหัสบริษัทระบุเป็นตัวเลข2564000498 |

# Functional Specification
ส่วนการระบุเงื่อนไขการแสดงข้อมูล
| No. | Component Name | Type | Validation/ Action | Default |
| 1 | ข้อมูลประจำเดือน | Dropdown List | แสดงข้อมูลของ เดือน ที่เลือกรายการ | เดือน ปัจจุบัน |
ส่วนการแสดงข้อมูล
| No. | Component Name | Type | Description | Validation/ Action | Default |
| ตารางแสดงผลการค้นหา |
| 1 | ครั้งที่ | Text | แสดงจำนวนรายการนำเข้าข้อมูลในรอบการประมวลผลปัจจุบัน | แสดงผลรายการล่าสุดไว้บนสุด | 1 |
| 2 | ดำเนินการ | Button | ปุ่ม อนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD02-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อยืนยันอนุมัติข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "ยืนยันนำเข้าข้อมูลสำเร็จ" (ยกเลิก)tx_rig_unname_hd.status = '7'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยืนยันส่งอนุมัติ | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD02-03 - หน้าจอ Popup ยืนยันไฟล์ข้อมูล เพื่อส่ง Checker ตรวจสอบ พร้อมทั้งสามารถระบุหมายเหตุได้ หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะรายการเป็น "รออนุมัติข้อมูล"(ยกเลิก)tx_rig_unname_hd.status = '5'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
|  |  |  | ปุ่มยกเลิก | เงื่อนไขการ Enable ปุ่ม ตาม A08. สถานะรายการข้อมูลในหน้าจอ สำหรับ Maker และ Checkerเมื่อกดปุ่มจะเปิด Screen IRI-GRP-SD02-04 - หน้าจอ Popup ยกเลิกไฟล์ข้อมูล เพื่อยืนยันการยกเลิกข้อมูล พร้อมทั้งสามารถระบุหมายเหตุได้หลังจากดำเนินการเสร็จสิ้น หากสำเร็จ ปรับสถานะเป็น “ยกเลิกข้อมูล”(ยกเลิก)tx_rig_unname_hd.status = '6'หากไม่สำเร็จ ไม่ปรับสถานะรายการ |  |
| 3 | วันที่และเวลาดำเนินการ | Text | แสดงวันและเวลานำเข้าข้อมูล | (ยกเลิก)tx_rig_unname_hd.created_date |  |
| 4 | ผู้ดำเนินการ | Text | แสดงผู้นำเข้าข้อมูล | (ยกเลิก)tx_rig_unname_hd.created_by |  |
| 5 | สถานะ | Text | แสดงสถานะข้อมูล | (ยกเลิก)tx_rig_unname_hd.status |  |
| 6 | Success Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำเข้าสำเร็จ | (ยกเลิก)tx_rig_unname_hd.sum_records(ยกเลิก)tx_rig_unname_hd.imp_file_available = True(ยกเลิก)tx_rig_unname_hd.unuse_flag = False |  |
| 7 | Error Data | Link | แสดงผลรวมของ จำนวนรายการ จากไฟล์นำเข้าข้อมูล ที่นำไม่เข้าสำเร็จ | (ยกเลิก)tx_rig_unname_hd.sum_records(ยกเลิก)tx_rig_unname_hd.err_file_available = True |  |
| 8 | หมายเหตุ | Text | แสดงหมายเหตุของรายการข้อมูล | (ยกเลิก)tx_rig_unname_hd.remark |  |


===== PAGE 1295482924 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-002 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate > IRI-GRP-SD02-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล Unname Policy Estimate =====
# /*<![CDATA[*/
div.rbtoc1782955739742 {padding: 0px;}
div.rbtoc1782955739742 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955739742 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD02-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล
ตัวอย่างไฟล์นำเข้าข้อมูลจาก User: Unname_Policy_Estimate.xlsx
อ้างอิง: IRI-GRP-SD02-03 - รูปแบบเอกสารนำเข้าไฟล์ Unname Policy Estimate

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | นำเข้าไฟล์ข้อมูล Unname Policy Estimate |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม (เฉพาะ Maker) |
| 3 | การกระทำกับหน้าจอ(Actions) | ใส่หมายเหตุ ของรายการข้อมูลเลือก check box ไม่มีข้อมูลนำเข้าประจำเดือนนำเข้าไฟล์ข้อมูล Unname Policy Estimate |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด ปุ่ม "นำเข้าไฟล์ข้อมูล" ใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate ระบบจะแสดงหน้าจอ IRI-GRP-SD02-02 - หน้าจอ Popup นำเข้าไฟล์ข้อมูล รายละเอียดดังนี้ระบบแสดงค่า “ประจำเดือน” ตาม Dropdown ที่เลือกจาก IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimateกรณีไม่มีข้อมูลนำเข้าประจำเดือน นั้นๆ จะต้อง "Checkbox ไม่มีข้อมูลนำเข้าประจำเดือน"หากกดปุ่มปิด หรือ “ยกเลิก” ระบบปิดหน้าจอ และกลับสู่หน้าจอหลัก หากกดปุ่ม “บันทึก” ระบบดำเนินการ ดังนี้ตรวจสอบว่ามีการทำรายการหรือไม่กรณีมีการเลือก "Checkbox" ไม่มีข้อมูลนำเข้า ให้กลับสู่หน้าจอหลัก พร้อมทั้งแสดงรายการเพื่อยืนยัน พร้อมหมายเหตุ "ไม่มีข้อมูล Update ในรอบปัจจุบัน"กรณีมีการ Upload File ข้อมูล ให้ดำเนินการตรวจสอบต่อในข้อ bกรณีไม่ได้เลือก Checkbox และ ไม่ได้ Upload File จะ Disable ปุ่มบันทึกตรวจสอบ Format ไฟล์นำเข้า โดยนามสกุลที่สามารถ Upload ไฟล์ได้เฉพาะ xlsxหากไม่เป็น Excel ระบบแสดง Popup ข้อความ "ไม่สามารถทำรายการได้ เนื่องจากรูปแบบไฟล์นำเข้าไม่ถูกต้อง" และจบกระบวนการทำงานหากเป็น Excel ระบบแสดง Popup ข้อความ “ระบบกำลังประมวลผลข้อมูล” และระบบปรับสถานะรายการเป็น “กำลังดำเนินการ”นำเข้า Excel ไฟล์ข้อมูลระบบทำการตรวจสอบความถูกต้องของไฟล์นำเข้า ซึ่งหากพบ error มากกว่า 1 เคส ให้แสดงหมายเหตุต่อกันโดยมี , คั่น โดยตรวจสอบตามรายการดังนี้ตรวจสอบ จำนวนคอลัมน์ ของไฟล์นำเข้าว่าถูกต้องหรือไม่หากพบจำนวนคอมลัมน์ไม่ถูกต้อง หรือพบ data เป็นค่าว่าง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "จำนวน Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากพบ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบ ชื่อคอลัมน์ ว่าถูกต้องหรือไม่หากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "รูปแบบไฟล์ไม่ถูกต้อง"แสดงหมายเหตุ "ชื่อ Column ไม่ถูกต้องรบกวนตรวจสอบรูปแบบของไฟล์"หากชื่อคอลัมน์ถูกต้อง ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลของแต่ละคอลัมน์ ว่าตรงตาม Data Type ที่กำหนดหรือไม่ เช่น ต้องเป็นตัวเลขเท่านั้นหากพบว่าไม่ตรงตาม Data Type ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลที่เป็นวันที่ (Date) ว่าถูกต้องหรือไม่ในกรณีที่ เป็นค่าว่าง จากไฟล์นำเข้า หรือ ไม่เป็นรูปแบบ dd/mm/yyyy (ปี ค.ศ.) หรือ เป็นวันที่ที่ไม่มีอยู่จริงในปฎิทินหากพบว่าไม่ถูกต้อง ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบข้อมูลวันที่ ไม่ถูกต้อง"และบันทึกข้อมูลในลงตาราง header และ detailหากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไปตรวจสอบข้อมูลว่าเป็นรายการ Duplicate หรือไม่หากพบว่า Duplicate ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ "พบรายการซ้ำ"หากถูกต้องทุกรายการ ให้ดำเนินการตรวจสอบในข้อถัดไป5. ตรวจสอบว่าสามารถดึงข้อมูลกรมธรรม์ตามในไฟล์นำเข้าได้หรือไม่ นำค่าต่อไปนี้ที่ระบุจากไฟล์นำเข้า ตรวจสอบกับ WS_RIG_009 ดึงข้อมูลสำหรับ investigate expense TBC เดี๋ยวต้องเปลี่ยนเป็นตารางที่ฟีดมาPolicyNoEffective Dateหากไม่สามารถดึงข้อมูลข้างต้นได้ครบทุกรายการ ดำเนินการดังนี้แสดง วันที่และเวลาดำเนินการแสดง ผู้ดำเนินการปรับสถานะรายการเป็น "นำเข้าไม่สำเร็จ"แสดงหมายเหตุ “ไม่พบรายการข้อมูลในฐานข้อมูลประกันกลุ่ม”6. บันทึกข้อมูลในไฟล์นำเข้าลงตาราง header และ detailตาราง header บันทึกค่าตาม (ยกเลิก)tx_rig_unname_hdตาราง detail บันทึกค่าตาม (ยกเลิก)tx_rig_unname_est_dt7. หากดำเนินการบันทึกข้อมูลเสร็จสิ้น ระบบดำเนินการ ดังนี้กรณีสำเร็จ ปรับสถานะเป็น “รอยืนยันส่งอนุมัติ”(ยกเลิก)tx_rig_unname_hd.status = '4'กรณีไม่สำเร็จ ปรับสถานะ "นำเข้าไม่สำเร็จ" พร้อมแจ้ง Error ที่ “หมายเหตุ” โดยจะแสดง System Error ตามที่พบ |


===== PAGE 1295483567 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-002 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate > IRI-GRP-SD02-05 - หน้าจอ Popup Unname Policy Estimate (Success Data) =====
# /*<![CDATA[*/
div.rbtoc1782955740054 {padding: 0px;}
div.rbtoc1782955740054 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955740054 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD02-05 - หน้าจอ Popup Unname Policy Estimate (Success Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าสำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าสำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Success Data ใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate ระบบจะแสดงหน้าจอ IRI-GRP-SD02-05 - หน้าจอ Popup Unname Policy Estimate (Success Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_unname_est_dtPolicyNopolicy_numberEffective Dateeffective_dateAmount Lifeamount_lifeAmount Accidentamount_accidentAmount MedAccidentamount_medaccidentAmount TPDamount_tpdLife Insurelife_insureAccident Insureaccident_insureMedAccident Insuremedaccident_insureTPD Insuretpd_insure |


===== PAGE 1295483573 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-002 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate > IRI-GRP-SD02-06 - หน้าจอ Popup Unname Policy Estimate (Error Data) =====
# /*<![CDATA[*/
div.rbtoc1782955740048 {padding: 0px;}
div.rbtoc1782955740048 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1782955740048 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/

Screen Design
Description

# Screen Design
IRI-GRP-SD02-06 - หน้าจอ Popup Unname Policy Estimate (Error Data)

# Description
| No. | Topic | Description |
| 1 | วัตถุประสงค์(Objective) | แสดงข้อมูลจากไฟล์นำเข้า ที่นำเข้าไม่สำเร็จ |
| 2 | ผู้ใช้งาน(Target Users) | เจ้าหน้าที่ฝ่ายประกันกลุ่ม |
| 3 | การกระทำกับหน้าจอ(Actions) | สามารถตรวจสอบความถูกต้อง ของไฟล์ที่นำเข้าไม่สำเร็จ |
| 4 | อธิบายรายละเอียด(Description) | เมื่อกด link จำนวนรายการ ของ Error Data ใน IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate ระบบจะแสดงหน้าจอ IRI-GRP-SD02-06 - หน้าจอ Popup Unname Policy Estimate (Error Data) รายละเอียดดังนี้ชื่อคอลัมน์ ตามไฟล์นำเข้าแสดงค่าจากตาราง tx_rig_unname_est_dtPolicyNopolicy_numberEffective Dateeffective_dateAmount Lifeamount_lifeAmount Accidentamount_accidentAmount MedAccidentamount_medaccidentAmount TPDamount_tpdLife Insurelife_insureAccident Insureaccident_insureMedAccident Insuremedaccident_insureTPD Insuretpd_insureRemarkremark |


===== PAGE 1295482941 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-002 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate > รูปแบบเอกสารนำเข้าไฟล์ Unname Policy Estimate =====
ไฟล์นำเข้าสำหรับ IRI-GRP-SD02 หน้าจอ นำเข้าข้อมูล Unname Policy Estimate
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_unname_est_dt |
| PolicyNo | เลขกรมธรรม์ | GL4635 | policy_number |
| Effective Date | วันที่คุ้มครองของกรมธรรม์ | 01/07/2025 | effective_date |
| Amount Life | จำนวนสมาชิกที่มีทุนชีวิต | 22,968 | amount_life |
| Amount Accident | จำนวนสมาชิกที่มีทุนอุบัติเหตุชีวิต | 22,968 | amount_accident |
| Amount MedAccident | จำนวนสมาชิกที่มีทุนค่ารักษาพยาบาล อุบัติเหตุ | 0 | amount_medaccident |
| Amount TPD | จำนวนสมาชิกที่มีทุนทุนทุพพลภาพ | 0 | amount_tpd |
| Life Insure | ทุนชีวิตของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | life_insure |
| Accident Insure | ทุนอุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 2,296,800,000 | accident_insure |
| MedAccident Insure | ทุนค่ารักษาพยาบาล อุบัติเหตุของสมาชิกทุกคนในกรมธรรม์ | 0 | medaccident_insure |
| TPD Insure | ทุนทุพพลภาพของสมาชิกทุกคนในกรมธรรม์ | 0 | tpd_insure |
กรณีพบ Error Invalid Data Format ระบบแสดง Column “Remark”
| ชื่อคอลัมน์ จากไฟล์นำเข้า | คำอธิบาย | ตัวอย่าง | บันทึกค่าลง (ยกเลิก)tx_rig_unname_est_dt |
| Remark | หมายเหตุจาก Error File | ข้อมูลไม่ถูกต้องตามรูปแบบที่กำหนด | remark |


===== PAGE 1312490205 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-003 หน้าจอ Reconcile Data =====
### สิทธิ์การเข้า
- ฝ่ายคณิตศาสตร์ประกันภัยต่อ

### Assumption
- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ

### Screen Overview
- ใช้เพื่อตรวจสอบข้อมูลจากระบบประกันกลุ่มที่ใช้ในการประมวลผล Estimate และ Actual โดยมีการกำหนดขั้นตอนและสิทธิ์การใช้งานแยกตามบทบาท Maker และ Checker

### Screen Design
หน้าจอ นำเข้าข้อมูล Reconcile Data
Description
| No. | หัวข้อ | รายละเอียด |
| 1 | วัตถุประสงค์ (Objective) | เพื่อตรวจสอบข้อมูลสำหรับประมวลผล |
| 2 | ผู้ใช้งาน และ สิทธิ์ที่ได้รับ(Target Users and authorization) | ฝ่ายคณิตศาสตร์ประกันภัยต่อ |
| 3 | การกระทำกับหน้าจอ (Actions) | กดปุ่ม 'Download' |
| 4 | อธิบายรายละเอียด (Description) | รายละเอียดของหน้าจอมีดังนี้1. ตารางแสดงผลข้อมูลFieldTypeDescriptionValidation/ ActionExampleรายการข้อมูลLabelรายการของข้อมูลสำหรับประมวลผลแสดงเป็น LabelList of PolicyRI typeLabelประเภทข้อมูลประกันภัยต่อเพื่อจำแนกว่านำไปใช้กับข้อมูล Estimate, Actualแสดงเป็น Label Estimate/Actual, Estimate, ActualวันและเวลาดำเนินการLabelวันที่ Download หรือ Update ข้อมูลล่าสุดแสดงผลรูปแบบ DD/MM/YYYY HH:MM:SS รายละเอียด ดังนี้DD = วันที่ เช่น 31MM = เดือน เช่น 12YYYY = ปี พ.ศ. เช่น 2569HH:MM:SS = เวลา เช่น 21:00:0031/12/2569 21:00:00จำนวนรายการLabelแสดงจำนวนรายการของข้อมูลล่าสุดแสดงเป็น Label1,000สถานะข้อมูลLabelแสดงสถานะปัจจุบันของข้อมูลล่าสุดแสดงสถานะปัจจุบันของข้อมูลสำหรับรายการ List of Policy จะแสดงสถานะของการ Download fileเมื่อกด Download ระหว่างระบบ Generate file จะแสดง กำลังดำเนินการเมื่อ Download สำเร็จ แสดง นำส่งไฟล์สำเร็จกรณีเกิดปัญหา Download ไม่สำเร็จ แสดง นำส่งไฟล์ไม่สำเร็จติดต่อ IT Supportสำหรับรายการ อื่นๆ ระบบจะวางไฟล์ที่ Shared drive ของคณิตศาสตร์ RI Estimate - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update ทุกสิ้นเดือนเวลา 21:00 น.folder Group_RI/Estimate/{Period}Actual - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update เมื่อมีการกดประมวลผล Actualfolder Group_RI/Actual/{Period}ระหว่างระบบนำเข้าข้อมูล แสดง กำลังดำเนินการกรณีนำเข้าและวางไฟล์สำเร็จ แสดง นำส่งไฟล์สำเร็จกรณีนำเข้าหรือวางไฟล์ไม่สำเร็จ แสดง นำส่งไฟล์ไม่สำเร็จติดต่อ IT Supportนำส่งไฟล์สำเร็จPeriodLabelแสดง period หรือ period quarterList of policy แสดง Period ล่าสุดของข้อมูลEstimate แสดง Period ของการประมวลผล Estimate เช่น 202601Actual แสดง Period Quarter เมื่อมีการประมวลผล Actual เช่น 2026Q1202601ดำเนินการ/PeriodButton/Labelปุ่มสำหรับเรียกดูข้อมูล/ Period ของข้อมูลแสดงปุ่ม download ข้อมูลDownload2. รายการข้อมูล2.1. List of PolicyRP-RC-001 Policy_{FROM}_{TO}_{TREATY}\groupri\landing\{period}\report_landing\Policy_{FROM}_{TO}_{TREATY}.xlsxเมื่อกด Download ระบบแสดง Popup หน้าจอ Download Excel fileเมื่อกด ตกลง ระบบจะ Generate Excel file ตามเงื่อนไขที่ผู้ใช้งานระบุ Click here to expand... 2.2. สำหรับรายการต่อไปนี้ สามารถ Download ผ่านหน้าจอ หรือ Shared path ตามรอบของการประมวลผลEstimate Premium Layer RP-RC-002 Est_PremiumLayer_{YYYY}{MM}\groupri\estimate\{period}\report_reconcile\Est_PremiumLayer_{YYYY}{MM}.xlsxActual Premium Layer RP-RC-003 Act_PremiumLayer_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Act_PremiumLayer_{YYYY}{MM}.xlsxAlteration RP-RC-004 Alteration_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Alteration_{YYYY}{QQ}.xlsxPremium and Movement RP-RC-005 Premium_Movement_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\Premium_Movement_{YYYY}{QQ}.xlsxMember Over-age RP-RC-006 MemberOverAge_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\MemberOverAge_{YYYY}{QQ}.xlsxInvestigation expenseRP-RC-007 InvestigationExpense_{YYYY}{QQ}\groupri\actual\{period}\report_reconcile\InvestigationExpense_{YYYY}{QQ}.xlsx |

# Functional Specification
ส่วนการแสดงข้อมูล
| No. | Component Name | Type | Description | Validation/ Action | Remark | Mapping |
| ตารางแสดงผลการค้นหา |
| 1 | รายการข้อมูล | Text | รายการของข้อมูลสำหรับประมวลผล | Left | แสดงรายการข้อมูลต่อไปนี้ตามลำดับList of PolicyEstimate Premium LayerActual Premium LayerAlterationPremium and movementMember Over-ageInvestigation expense | ms_rig_process.process_code |
| 2 | RI type | Text | ประเภทข้อมูลประกันภัยต่อเพื่อจำแนกว่านำไปใช้กับข้อมูล Estimate, Actual | Center | แสดง ประเภทข้อมูลของ รายการข้อมูล ดังนี้List of Policy = Estimate/ActualEstimate Premium Layer = EstimateActual Premium Layer = ActualAlteration = ActualPremium and movement = ActualMember Over-age = ActualInvestigation expense = Actual | ms_rig_process.typeif type = L then 'Estimate/Actual'if type = E then 'Estimate'if type = A then 'Actual' |
| 3 | วันและเวลาดำเนินการ | Text | วันที่ Download หรือ Update ข้อมูลล่าสุด | Center | แสดง Timestamp เมื่อนำส่งไฟล์สำเร็จ | tx_rig_process_hd.finish_date |
| 4 | จำนวนรายการ | Text | แสดงจำนวนรายการของข้อมูลล่าสุด | Right | แสดง จำนวน Transaction ของข้อมูลล่าสุด | tx_rig_process_hd.sum_recordsum ข้อมูล landing ตาม criteria ที่ระบุList of Policysum ข้อมูล staging ตาม period ล่าสุดของการประมวผลEstimate Premium LayerActual Premium LayerAlterationPremium and movementMember Over-ageInvestigation expense |
| 5 | สถานะข้อมูล | Text | แสดงสถานะปัจจุบันของข้อมูลล่าสุด | Left | แสดงสถานะปัจจุบันของข้อมูลList of policy - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update ทุกวันเวลา 21.00 น.Estimate - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update เมื่อมีการประมวลผล Estimate ทุกสิ้นเดือนActual - ข้อมูลล่าสุดจากระบบประกันกลุ่มโดยจะ Update เมื่อมีการกดประมวลผล Actualสถานะปัจจุบันของข้อมูลระหว่างระบบนำเข้าข้อมูลแสดง กำลังดำเนินการกรณีนำเข้าและวางไฟล์สำเร็จแสดง นำส่งไฟล์สำเร็จกรณีนำเข้าหรือวางไฟล์ไม่สำเร็จแสดง นำส่งไฟล์ไม่สำเร็จUserติดต่อ IT Support | tx_rig_process_hd.status |
| 6 | Period | Text | แสดง Period ของข้อมูล | Center | List of policy แสดง Period ล่าสุดของข้อมูลEstimate แสดง Period ของการประมวลผล Estimate เช่น 202601Actual แสดง Period Quarter เมื่อมีการประมวลผล Actual เช่น 2026Q1 | tx_rig_process_hdif type = L then tx_rig_process_hd.periodif type = E then tx_rig_process_hd.periodif type = A then tx_rig_process_hd.year + 'Q' + tx_rig_process_hd.quarter |
| 7 | ดำเนินการ | Button | ปุ่มสำหรับ Download ไฟล์ | onclick | enable เมื่อไฟล์ generate บน path เรียบร้อยแล้ว กรณีรายการใด ไม่มี file ให้ disable ปุ่มList of PolicyRIG-RP-001 Policy_{FROM}_{TO}_{TREATY}แสดง ปุ่มสำหรับ Download ข้อมูลเมื่อกดปุ่มระบบแสดง Click here to expand... No.Component NameTypeDescriptionValidation/ ActionRemarkField Map1CategoryTextรายการของข้อมูล DefaultList of Policy 2AlldataCheckboxCheckbox สำหรับเลือกข้อมูลทั้งหมดใน tx_rig_landing_policyOnclickdefault ให้ดึงข้อมูลทั้งหมดจาก tx_rig_landing_policydisableEffective Date FromEffective Date ToPolicy StatusTreatyDefaultUncheckedselect all data from tx_rig_landing_policy3Effective Date FromDatepickerแสดงวันที่เริ่มสัญญาOnclickแสดง DatepickerDefaultTodaytx_rig_landing_policy.promise_date4Effective Date ToDatepickerแสดงวันที่เริ่มสัญญาOnclickแสดง DatepickerDefaultTodaytx_rig_landing_policy.promise_date5Policy StatusCheckboxCheckbox สถานะกรมธรรม์B : New BusinessI : InforceL : LapseC : CancleOnclickUncheckDefaultCheckedtx_rig_landing_policy.policy_status6TreatyDropdownDropdown แสดงรายการ TreatyOnclickexpand dropdownDefaultทั้งหมดการแสดงผล <![CDATA[select description from cf_lookup_catalog where parent_id = 1000100]]> การ lookup report conditionwhere tx_rig_landing_policy.re_insur_no like 'lookup_key' <![CDATA[select lookup_key from cf_lookup_catalog where parent_id = 1000100]]> 7ปุ่มดำเนินการButtonแสดงปุ่ม ยกเลิก, ตกลงOnclick : ยกเลิกปิด PopupOnclick : ตกลงRIG-RP-001 Policy_{FROM}_{TO}_{TREATY}DefaultEnable *สำหรับรายการ อื่นๆ เมื่อกด Download ให้ get file จาก path ที่กำหนดของแต่ละไฟล์และ export ตามรูปแบบต่อไปนี้Estimate Premium LayerRIG-RP-002 Est_PremiumLayer_{YYYY}{MM}Actual Premium LayerRIG-RP-003 Act_PremiumLayer_{YYYY}{QQ} AlterationRIG-RP-004 Alteration_{YYYY}{QQ}Premium and movementRIG-RP-005 Premium_Movement_{YYYY}{QQ}Member Over-ageRIG-RP-006 MemberOverAge_{YYYY}{QQ}Investigation expenseRIG-RP-007 InvestigationExpense_{YYYY}{QQ} | if tx_rig_path_key.rig_hd_id = tx_rig_process_hd.rig_hd_id then enable else disable |


===== PAGE 1314423434 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer =====
(empty page)


===== PAGE 1314194020 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-1 หน้าจอจัดการข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลในกรณีที่ยังไม่มีข้อมูล หรือค้นหาแล้วไม่พบข้อมูล |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ มีสถานะเป็นรอส่งพิจารณา และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่กำลังรอพิจารณาจาก Maker อีกคน |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาส่งกลับแก้ไข และยังไม่มี Treaty ใช้งาน Reinsurer นี้ |
|  | การแสดงผลสำหรับข้อมูลที่ได้รับพิจารณาอนุมัติ และมี Treaty ใช้งาน Reinsurer นี้แล้ว |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลรายการที่กำลังอยู่ระหว่างรอพิจารณา |

### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Reinsurer นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Reinsurer เพื่อเพิ่มข้อมูล Reinsurer
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Reinsurer ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Reinsurer
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Reinsurer
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Reinsurer เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Reinsurer ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Reinsurer ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นหน้าสำหรับค้นหาข้อมูลเท่านั้น

### รายละเอียดส่วนเงื่อนไขการค้นหา
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Status | ทั้งหมด | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Reinsurer | รอส่งพิจารณา |  |

### รายละเอียดส่วนการแสดงข้อมูล
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Reinsurer Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Reinsurer | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 6 | Icon | แก้ไขรายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" , "ส่งกลับแก้ไข" , "อนุมัติ" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกเรียกใช้งานจาก Treaty |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer |  | แสดงเฉพาะสิทธิ์ Cheker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอพิจารณา"แสดง Icon ต่อเมื่อผู้ใช้งานปัจจุบันไม่ใช่ผู้ที่ส่งรายการพิจารณา |
| 9 | Label | Reinsurer Code | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Reinsurer Name | ชื่อ Reinsurer | Gibraltar |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action |  |  | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | cf_reinsurer | reinsurer_code | เฉพาะ cf_reinsurer.status status = A |
| 2 | Dropdown List | Status | ทั้งหมด | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Reinsurer | แสดงข้อมูลจาก cf_lookup_catalog.parent_id = 1002000 ส่วนข้อมูล สถานะ Reinsurercf_lookup_catalog.description |  | ใช้ cf_lookup_catalog.lookup_key ที่เลือกเทียบกับ cf_reinsurer.process_status |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Reinsurer Code จาก A-Z |  | แสดงข้อมูลจาก Table cf_reinsurer |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Validation/ Action |  |  |
| 1 | Button | ส่งพิจารณา | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดปุ่มยกเลิก ให้ปิด Popup ยืนยันส่งข้อมูลเพื่อพิจารณากรณีกดปุ่มบันทึก ให้บันทึกข้อมูลดังนี้เงื่อนไขTableFieldค่าที่บันทึกบันทึกcf_reinsurerprocess_statusWAPRVบันทึก cf_treaty_historyhis_actionWAPRV |  |  |
| 2 | Button | เพิ่ม Reinsurer | แสดงเฉพาะสิทธิ์ Maker เท่านั้นเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer |  |  |
| 3 | Icon | เลือกรายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" และผู้ดำเนินการล่าสุดไม่ใช่ User ที่กำลังใช้งานอยู่เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ | center |  |
| 4 | Icon | ประวัติ | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD005 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer | center |  |
| 5 | Icon | รายละเอียด | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD003 หน้าจอดูรายละเอียดข้อมูล Reinsurer | center |  |
| 6 | Icon | แก้ไขรายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" , "ส่งกลับแก้ไข" , "อนุมัติ"เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD002 หน้าจอเพิ่ม/แก้ไขข้อมูล Reinsurer | center |  |
| 7 | Icon | ลบรายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกเรียกใช้งานจาก Treatycf_reinsurer.cf_reinsurer_id เทียบกับ cf_rig_treaty.cf_reinsurer_id เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดปุ่มยกเลิก ให้ปิด Popup ยืนยันส่งข้อมูลเพื่อพิจารณากรณีกดปุ่มบันทึก ให้บันทึกข้อมูล cf_reinsurer.status = I | center |  |
| 8 | Icon | พิจารณารายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา"แสดง Icon ต่อเมื่อผู้ใช้งานปัจจุบันไม่ใช่ผู้ที่ส่งรายการพิจารณาเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-001-SD004 หน้าจอพิจารณาข้อมูล Reinsurer | center |  |
| 9 | Label | Reinsurer Code | ชื่อย่อ Reinsurer | left | cf_reinsurer.reinsurer_code |
| 10 | Label | Reinsurer Name | ชื่อ Reinsurer | left | cf_reinsurer.reinsurer_name |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | left | cf_reinsurer.start_date |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | left | cf_reinsurer.expire_date |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | left | cf_reinsurer.updated_date |
| 14 | Label | status | สถานะข้อมูลล่าสุด | left | cf_reinsurer.process_statusLookup ที่ cf_lookup_catalogparent_id = 1002000 แสดง cf_lookup_catalog.description |


===== PAGE 1312719133 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-2 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่มรายการ" จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูล Reinsurerในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูล Reinsurer ในระบบ และปรับสถานะรายการเป็น "รอส่งพิจารณา" เพื่อรอการพิจารณาอนุมัติจากผู้เกี่ยวข้อง

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเพิ่ม/แก้ไขข้อมูล Reinsurer
| ส่วนบันทึกรายการ Reinsurer |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Free Text | Reinsurer Code | Enable | ชื่อย่อ Reinsurer | Gibraltar | Required Fieldรหัสย่อของบริษัท Reinsurance ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับบริษัทอื่น) |
| 2 | Free Text | Reinsurer Name | Enable | ชื่อ Reinsurer | The Gibraltar Life Insurance Co. Ltd. | Required Field |
| 3 | Dropdown List | Location | EnableDefault : กรุณาเลือก | แสดงข้อมูลLocalForeign | Local | Required Fieldประเภทที่ตั้งของบริษัทLocal = บริษัทในประเทศForeign = บริษัทต่างประเทศ |
| 4 | Dropdown List | Country | EnableDefault : กรุณาเลือก | กรณีเลือกข้อมูล Location เป็น Localแสดงข้อมูล Thailandกรณีเลือกข้อมูล Location เป็น Foreignแสดงข้อมูล ประเทศทั้งหมดยกเว้น Thailand | Thailand | Required Field |
| 5 | Free Text | Address | Enable | ที่อยู่/ที่ตั้งของบริษัท Reinsurer | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Free Text | Office Number | Enable | หมายเลขโทรศัพท์ | +81-120-372-269 |  |
|  |  | Information Office Number (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 7 | Free Text | Ext. | Enable | หมายเลขโทรศัพท์ต่อ | 1001 |  |
| 8 | Free Text | Fax | Enable | หมายเลขโทรสาร | +81-120-372-267 |  |
|  |  | Information Fax (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |  |
| 9 | Free Text | Telephone | Enable | หมายเลขโทรศัพท์เคลื่อนที่ | +81-120-372-266 |  |
|  |  | Information Telephone (suthanee.sa 29/05/2026) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local และ Foreign (suthanee.sa 08/06/2026) |  |  |
| 10 | Free Text | Email | Enable | อีเมล | Gibraltar@gmail.com | Required Field |
| 11 | Free Text | Website | Enable | เว็บไซต์ | https://www.gib-life.co.jp/ |  |
| 12 | Date | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2514 | Required Fieldวันที่เริ่มมีผลในการใช้งานข้อมูลบริษัท Reinsurance ในระบบ |
| 13 | Date | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field วันที่สิ้นสุดการใช้งานข้อมูลบริษัท Reinsurance (หลังจากวันนี้ระบบจะถือว่า “ไม่ใช้งานแล้ว”) |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล Reinsurer และเปลี่ยนสถานะรายการเป็น "รอส่งพิจารณา" |  |  |
Validation
- กรณีมีการกำหนดรูปแบบถ้าข้อมูลไม่เป็นไปตามเงื่อนไข แสดงข้อความสีแดงใต้ Label "รูปแบบXXX" ตามภาพตัวอย่างแจ้งรูปแบบไม่ถูกต้อง
- ถ้าข้อมูลไม่เป็นไปตามเงื่อนไข แสดงข้อความสีแดงใต้ Label "รูปแบบXXX" ตามภาพตัวอย่างแจ้งรูปแบบไม่ถูกต้อง
- กรณีบังคับกรอกข้อมูลถ้าไม่กรอกข้อมูลแสดงข้อความสีแดงตามภาพตัวอย่าง
- ถ้าไม่กรอกข้อมูลแสดงข้อความสีแดงตามภาพตัวอย่าง
| ส่วนบันทึกรายการ Reinsurer |
| No | Component Type | Component Name | Default Value | Action / Data Value | ดึงข้อมูล / บันทึกข้อมูล |
| 1 | Free Text | Reinsurer Code | Enable | Required Fieldรหัสย่อของบริษัท Reinsurance ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับบริษัทอื่น)ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"เลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลางล่าง " _ "เครื่องหมายขีดกลาง " - "กรณี Reinsurer Code ซ้ำกับบริษัทอื่นในกรณี cf_reinsurer.reinsurer_code ซ้ำ แสดง popup เมื่อกดปุ่มบันทึก | cf_reinsurer.reinsurer_code |
| 2 | Free Text | Reinsurer Name | Enable | Required Fieldตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"ตัวอักษรภาษาไทย "ก - ฮ"ตัวอักษรสระภาษาไทยเลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลาง " - "เครื่องหมายขีดกลางล่าง " _ "เครื่องหมายจุด " . "Spacebarเครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "เครื่องหมาย and " & "เครื่องหมายจุลภาค หรือ ลูกน้ำ " , " | cf_reinsurer.reinsurer_name |
| 3 | Dropdown List | Location | EnableDefault : กรุณาเลือก | Required Fieldแสดงข้อมูลแสดง Local เก็บค่า Lแสดง Foreign เก็บค่า F | cf_reinsurer.location_code |
| 4 | Dropdown List | Country | EnableDefault : กรุณาเลือก | Required Fieldกรณีเลือกข้อมูล Location เป็น Localแสดงข้อมูล Thailandกรณีเลือกข้อมูล Location เป็น Foreignแสดงข้อมูล ประเทศทั้งหมดยกเว้น Thailandดึงข้อมูลจาก ms_country.country_name_en | cf_reinsurer.country_code |
| 5 | Free Text | Address | Enable | ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"ตัวอักษรภาษาไทย "ก - ฮ"ตัวอักษรสระภาษาไทยเครื่องหมายขีดกลาง " - "Spaceเครื่องหมายคั่นเอียงขวา " / "เลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายจุลภาค หรือ ลูกน้ำ " , "เครื่องหมายจุด " . "เครื่องหมาย single quotation " ' "เครื่องหมาย double quotation " "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "เครื่องหมายและ "&"เครื่องหมายนัมเบอร์, แฮชแท็ก "#" | cf_reinsurer.address |
| 6 | Free Text | Office Number | Enable | กรณี Location = Localเลขศูนย์ ถึง เก้า " 0 - 9 "ต้องขึ้นต้นด้วย 02, 03ต้องระบุข้อมูล 9 หลัก (suthanee.sa 08/06/2026)เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "กรณี Location = Foreignเลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) " | cf_reinsurer.office_number |
|  |  | Information Office Number (suthanee.sa 29/05/2029) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |
| 7 | Free Text | Ext. | Enable | ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"ตัวอักษรภาษาไทย "ก - ฮ"ตัวอักษรสระภาษาไทยเลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลาง " - "เครื่องหมายคั่นเอียงขวา " / "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "เครื่องหมายนัมเบอร์, แฮชแท็ก "#"เครื่องหมายจุด " . "เครื่องหมายและ "&"Spacebar | cf_reinsurer.office_number_ext |
| 8 | Free Text | Fax | Enable | กรณี Location = Localเลขศูนย์ ถึง เก้า " 0 - 9 "ต้องขึ้นต้นด้วย 02, 03ต้องระบุข้อมูล 9 หลัก (suthanee.sa 08/06/2026)เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "กรณี Location = Foreignเลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ( | cf_reinsurer.fax |
|  |  | Information Fax (suthanee.sa 29/05/2029) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local (suthanee.sa 08/06/2026)กรณี Location = Foreign (suthanee.sa 08/06/2026) |  |
| 9 | Free Text | Telephone | Enable | กรณี Location = Localเลขศูนย์ ถึง เก้า " 0 - 9 "ต้องขึ้นต้นด้วย 06, 08, 09ต้องระบุข้อมูล 10 หลัก (suthanee.sa 08/06/2026)เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ) "กรณี Location = Foreignเลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายขีดกลาง " - "เครื่องหมายบวก " + "เครื่องหมายวงเล็บเปิด " ( "เครื่องหมายวงเล็บปิด " ( " | cf_reinsurer.telephone |
|  |  | Information Telephone (suthanee.sa 29/05/2029) | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติมกรณี Location = Local และ Foreign (suthanee.sa 08/06/2026) |  |
| 10 | Free Text | Email | Enable | Required Fieldต้องกรอกให้ตรงตาม Format Emailตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"เลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายจุด " . "เครื่องหมายขีดกลาง " - "เครื่องหมายขีดล่าง" _ "เครื่องหมาย at sign " @ " | cf_reinsurer.email |
| 11 | Free Text | Website | Enable | ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ "A - Z"ตัวอักษรภาษาอังกฤษพิมพ์เล็ก "a - z"เครื่องหมายขีดกลาง " - "เครื่องหมายขีดล่าง " _ "เครื่องหมายจุด " . "เลขศูนย์ ถึง เก้า " 0 - 9 "เครื่องหมายคั่นเอียงซ้าย " \ "เครื่องหมาย and " & "เครื่องหมายคำถาม " ? "เครื่องหมายเท่ากับ " = "เครื่องหมายทวิภาค หรือ colon " : "เครื่องหมายคั่นเอียงขวา " / " | cf_reinsurer.website |
| 12 | Date | Start Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | cf_reinsurer.start_date |
| 13 | Date | Expire Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | cf_reinsurer.expire_date |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | เงื่อนไข Table | Field | ค่าที่บันทึก |
| บันทึก |
| 1. | บันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 2. | บันทึก | cf_reinsurer | process_status | WAIT |
|  |  | cf_reinsurer | status | A |
| 3. | บันทึก cf_reinsurer_historyในกรณีที่รายการเป็น cf_reinsurer.process_status = WAIT ไม่ต้องลง cf_reinsurer_history ซ้ำ |  |  |  |


===== PAGE 1324482963 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-2 หน้าจอเพิ่ม-แก้ไขข้อมูล Reinsurer > require_format =====
- กรณีมีการกำหนดรูปแบบถ้าข้อมูลไม่เป็นไปตามเงื่อนไข แสดงข้อความสีแดงใต้ Label "รูปแบบXXX" ตามภาพตัวอย่างแจ้งรูปแบบไม่ถูกต้อง
- ถ้าข้อมูลไม่เป็นไปตามเงื่อนไข แสดงข้อความสีแดงใต้ Label "รูปแบบXXX" ตามภาพตัวอย่างแจ้งรูปแบบไม่ถูกต้อง
- กรณีบังคับกรอกข้อมูลถ้าไม่กรอกข้อมูลแสดงข้อความสีแดงตามภาพตัวอย่าง
- ถ้าไม่กรอกข้อมูลแสดงข้อความสีแดงตามภาพตัวอย่าง


===== PAGE 1317109761 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-3 หน้าจอดูรายละเอียดข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการ Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนรายละเอียดข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ปิด | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม ปิด เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name |  |
| 1 | Label | Reinsurer Code | cf_reinsurer.reinsurer_code |
| 2 | Label | Reinsurer Name | cf_reinsurer.reinsurer_name |
| 3 | Label | Location | cf_reinsurer.location_code |
| 4 | Label | Country | cf_reinsurer.country_code |
| 5 | Label | Address | cf_reinsurer.address |
| 6 | Label | Office Number | cf_reinsurer.office_number |
| 7 | Label | Ext. | cf_reinsurer.office_number_ext |
| 8 | Label | Fax | cf_reinsurer.fax |
| 9 | Label | Telephone | cf_reinsurer.telephone |
| 10 | Label | Email | cf_reinsurer.email |
| 11 | Label | Website | cf_reinsurer.website |
| 12 | Label | Start Date | cf_reinsurer.start_date |
| 13 | Label | Expire Date | cf_reinsurer.expire_date |


===== PAGE 1317109766 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-4 หน้าจอพิจารณาข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและพิจารณารายการข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Reinsurer
- บันทึกผลพิจารณาข้อมูล Reinsurer
- กดปุ่ม ยกเลิก เพื่อยกเลิกการพิจารณาข้อมูล Reinsurer
- กดปุ่ม บันทึก เพื่อบันทึกผลพิจารณาข้อมูล Reinsurer

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ
- เมื่อบันทึกสำเร็จ ระบบจะจัดเก็บผลการพิจารณาข้อมูล Reinsurer ตามที่ผู้ใช้งานระบุ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนพิจารณาข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer Code |  | Gibraltar |  |
| 2 | Label | Reinsurer Name |  | The Gibraltar Life Insurance Co. Ltd. |  |
| 3 | Label | Location |  | Foreign |  |
| 4 | Label | Country |  | Japan |  |
| 5 | Label | Address |  | 2-13-10 Nagatacho Chiyoda-ku Tokyo, 100-8953 Japan. |  |
| 6 | Label | Office Number |  | +81-120-372-269 |  |
| 7 | Label | Ext. |  | 1001 |  |
| 8 | Label | Fax |  | +81-120-372-267 |  |
| 9 | Label | Telephone |  | +81-120-372-26 |  |
| 10 | Label | Email |  | gibraltar@gmail.com |  |
| 11 | Label | Website |  | https://www.gib-life.co.jp/ |  |
| 12 | Label | Start Date |  | 01/01/2514 |  |
| 13 | Label | Expire Date |  | 31/12/2642 |  |
| ส่วนการพิจารณาข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Dropdown List | ผลพิจารณา | แสดงข้อมูลอนุมัติส่งกลับแก้ไข | อนุมัติ | Required Fieldใช้เลือกผลการพิจารณารายการข้อมูล Reinsurer |
| 2 | Free Text | หมายเหตุ |  |  | Required Field เมื่อเลือก ผลพิจารณา เป็น "ส่งกลับแก้ไข" |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Reinsurer แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Reinsurer |  |  |
| ส่วนแสดงรายละเอียดข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | ดึงข้อมูลมาแสดง |
| 1 | Label | Reinsurer Code |  | cf_reinsurer.reinsurer_code |
| 2 | Label | Reinsurer Name |  | cf_reinsurer.reinsurer_name |
| 3 | Label | Location |  | cf_reinsurer.location_code |
| 4 | Label | Country |  | cf_reinsurer.country_code |
| 5 | Label | Address |  | cf_reinsurer.address |
| 6 | Label | Office Number |  | cf_reinsurer.office_number |
| 7 | Label | Ext. |  | cf_reinsurer.office_number_ext |
| 8 | Label | Fax |  | cf_reinsurer.fax |
| 9 | Label | Telephone |  | cf_reinsurer.telephone |
| 10 | Label | Email |  | cf_reinsurer.email |
| 11 | Label | Website |  | cf_reinsurer.website |
| 12 | Label | Start Date |  | cf_reinsurer.start_date |
| 13 | Label | Expire Date |  | cf_reinsurer.expire_date |
| ส่วนการพิจารณาข้อมูล Reinsurer |
| No | Component Type | Component Name | Action / Data Value | บันทึกข้อมูลใน |
| 1 | Dropdown List | ผลพิจารณา | Required Fieldแสดงข้อมูลอนุมัติส่งกลับแก้ไขกรณีไม่เลือก ให้แสดงข้อความใต้ Label ตามภาพตัวอย่าง | cf_reinsurer.process_statuscf_reinsurer_history.his_action |
| 2 | Free Text | หมายเหตุ | Required Field เมื่อเลือก ผลพิจารณา เป็น "ส่งกลับแก้ไข"กรณีไม่กรอก ให้แสดงข้อความใต้ Label ตามภาพตัวอย่าง | cf_reinsurer_history.his_remark |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| **กรณีเลือก ผลพิจารณาเป็น ส่งกลับแก้ไข (EDIT)** |
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| 1. | อัปเดต | cf_reinsurer | process_status | EDIT |
| 2. | ผลพิจารณา บันทึกใน | cf_reinsurer_history | his_action | EDIT |
| 3. | หมายเหตุ บันทึกใน | cf_reinsurer_history | his_remark |  |
| **กรณีเลือก ผลพิจารณาเป็น อนุมัติ (APRV)** |
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| 1. | อัปเดต | cf_reinsurer | process_status | APRV |
| 2. | ผลพิจารณา บันทึกใน | cf_reinsurer_history | his_action | APRV |
| 3 | หมายเหตุ บันทึกใน | cf_reinsurer_history | his_remark | (ถ้ามีข้อความจากหน้าจอ) |


===== PAGE 1317109768 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-005 กระบวนการจัดการข้อมูล Reinsurer > RIG-SD-005-5 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Reinsurer

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker ผู้สร้าง/แก้ไข/ส่งพิจารณา/พิจารณา ผู้ส่งพิจารณากับผู้อนุมัติรายการต้องไม่ใช่คนเดียวกัน)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer จากหน้าจอ BD-CF-001-SD001 หน้าจอจัดการข้อมูล Reinsurer

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Reinsurer
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Reinsurer ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนดูประวัติเปลี่ยนสถานะข้อมูล Reinsurer
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Reinsurer ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Maker ผู้ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Maker ผู้ตรวจสอบข้อมูลแล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Maker ผู้ตรวจสอบข้อมูลส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Maker ผู้ตรวจสอบข้อมูลอนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name |  |
| 1 | Label | วันและเวลาดำเนินการ | cf_reinsurer_history.created_date |
| 2 | Label | เจ้าหน้าที่ดำเนินการ | cf_reinsurer_history.created_by |
| 3 | Label | Action | cf_reinsurer_history.his_action |
| 4 | Label | หมายเหตุ | cf_reinsurer_history.his_remark |


===== PAGE 1314423437 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty =====
(empty page)


===== PAGE 1317109771 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-1 หน้าจอจัดการข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่กำลังอยู่ระหว่างส่งให้ Checker พิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาอนุมัติ |
|  | การแสดงผลสำหรับรายการเดิมที่มีการแก้ไขเพิ่มเติมหลังมีการอนุมัติไปแล้วอย่างน้อยหนึ่งครั้ง |
|  | การแสดงผลสำหรับรายการเดิมที่อยู่ระหว่างส่งพิจารณาหลังการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และข้อมูลยังไม่ครบหรือยังไม่พร้อมส่งพิจารณา และยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ และเพิ่มข้อมูลครบถ้วน พร้อมสำหรับส่งพิจารณาแต่ยังไม่เข้าสู่กระบวนการพิจารณา |
|  | การแสดงผลสำหรับรายการที่เพิ่มใหม่ที่ถูกพิจารณาส่งกลับแก้ไข |
|  | การแสดงผลสำหรับรายการที่กำลังอยู่ระหว่างรอพิจารณา สามารถเป็นรายการใหม่หรือรายการเดิมที่มีการแก้ไขทุกหัวข้อก็ได้ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างรอพิจารณา โดยมีการแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขข้อมูลทุกหัวข้อ |
|  | การแสดงผลสำหรับรายการเดิมที่กำลังอยู่ระหว่างแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |
|  | การแสดงผลสำหรับรายการเดิมที่ถูกพิจารณาส่งกลับแก้ไขหลังจากแก้ไขแก้ไขเฉพาะหัวข้อ ตั้งค่ากรมธรรม์และ RI PRemium Rate |

### วัตถุประสงค์ (Objective)
- เพื่อใช้จัดการข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้ามายังเมนู จัดการข้อมูล > ข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการตามเงื่อนไขของการค้นหาที่ระบุไว้บนหน้าจอ เพื่อตรวจสอบข้อมูล Treaty นั้นๆ
- ล้างเงื่อนไขในการค้นหาทั้งหมดกลับเป็นค่าเริ่มต้น
- กดปุ่มเพิ่ม Treaty เพื่อเพิ่มข้อมูล Treaty
- กดปุ่มส่งพิจารณา เพื่อส่งพิจารณาข้อมูล Treaty ที่ต้องการ
- กดไอคอนนาฬิกาเพื่อตรวจสอบประวัติเปลี่ยนแปลงสถานะรายการข้อมูล Treaty
- กดไอคอนเอกสารเพื่อดูรายละเอียดของข้อมูล Treaty
- กดไอคอนดินสอเพื่อแก้ไขข้อมูล Treaty
- กดไอคอนนาฬิกาทราย เพื่อดูรายละเอียดของข้อมูล Treaty ที่อยู่ระหว่างรอพิจารณา
- กดไอคอนค้อนเพื่อดูรายละเอียดของข้อมูล Treaty เพื่อพิจารณาอนุมัติ ไม่อนุมัติรายการ
- กดไอคอนเลือกเพื่อเลือกรายการส่งพิจารณา
- กดไอคอนถังขยะเพื่อลบรายการข้อมูล Treaty

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้
- ผู้ใช้งานสามารถรับทราบถึงรายการข้อมูล Treaty ทั้งหมดที่ต้องการค้นหาได้
- ผู้ใช้งานสามารถดูรายละเอียดของรายการข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา
- ในกรณีที่ผู้ใช้งานระบุวันที่เริ่มต้นมากกว่าวันที่สิ้นสุด ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบวันที่ไม่ถูกต้อง" ใต้ Field วันที่ และไม่อนุญาตให้ค้นหา

### รายละเอียดส่วนเงื่อนไขการค้นหา
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 2 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | GIB_Grp_Direct_EB |  |
| 3 | Date Picker | Start Date | ค่าว่าง | วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 10/05/2025 |  |
| 4 | Date Picker | Expire Date | ค่าว่าง | วันที่ Expire Date ต้องมากกว่าเท่ากับ Start Date เสมอ | 10/05/2025 |  |
| 5 | Dropdown List | Status | กรณีเข้าใช้งานด้วยสิทธิ์ Maker ให้ Default เป็น "ทั้งหมด"กรณีเข้าใช้งานด้วยสิทธิ์ Cheker ให้ Default เป็น "รอพิจารณา" | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล สถานะ Treaty | รอส่งพิจารณา |  |

### รายละเอียดส่วนการแสดงข้อมูล
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ส่งพิจารณา | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Button | เพิ่ม Treaty | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้น |
| 3 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มส่งพิจารณาจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอส่งพิจารณา" |
| 4 | Icon | ประวัติ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะ |
| 5 | Icon | รายละเอียด | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะแสดงเมื่อมีการอนุมัติรายการไปแล้วอย่างน้อยครั้งหนึ่ง |
|  | Icon | รายละเอียดระหว่างรอพิจารณา | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 7 | Icon | ลบรายการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกอนุมัติอย่างน้อย 1 ครั้ง |
| 8 | Icon | พิจารณารายการ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "ส่งพิจารณา" |
| 9 | Label | Reinsurer | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Treaty Code | ชื่อ Treaty | GIB_Grp_Direct_EB |  |
| 11 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 12/07/2549 |  |
| 12 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 10/05/2568 |  |
| 13 | Icon | ตั้งค่าข้อมูลทั่วไป | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 14 | Icon | ตั้งค่า RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 15 | Icon | ตั้งค่ากรมธรรม์ | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 16 | Icon | ตั้งค่า RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "ส่งพิจารณา" |
| เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "อนุมัติ" |
| อยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "บันทึกร่าง" , "รอส่งพิจารณา" , "ส่งกลับแก้ไข" |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |
| 14 | Label | status | สถานะข้อมูลล่าสุด | รอส่งพิจารณา |  |
| No | Component Type | Component Name | Default Value | Validation Rules/Action |  |  | Remark |
| 1 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | cf_reinsurer | reinsurer_code | เฉพาะ cf_reinsurer.status status = A |
| 2 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | cf_rig_treaty | treaty_code | กรณีเลือก Reinsurer ไว้ ให้เช็ก cf_reinsurer.cf_reinsurer_id กับ cf_rig_treaty.cf_reinsurer_idแสดงเฉพาะ Treaty ที่ตรงกัน และ cf_rig_treaty.status = A |
| 3 | Date Picker | Start Date | ค่าว่าง | วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ |  |  | เทียบช่วงเวลา Start Date และ Expire Date กับ cf_rig_treaty_general.start_date |
| 4 | Date Picker | Expire Date | ค่าว่าง | วันที่ Expire Date ต้องมากกว่าเท่ากับ Start Date เสมอ |  |  |
| 5 | Dropdown List | Status | กรณีเข้าใช้งานด้วยสิทธิ์ Maker ให้ Default เป็น "ทั้งหมด"กรณีเข้าใช้งานด้วยสิทธิ์ Cheker ให้ Default เป็น "รอพิจารณา" | แสดงข้อมูลจาก cf_lookup_catalog.parent_id = 1001200 ส่วนข้อมูล สถานะ Treatycf_lookup_catalog.description |  |  | ใช้ cf_lookup_catalog.lookup_key ที่เลือกเทียบกับ cf_rig_treaty.process_status |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  | cf_rig_treaty.status = A |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value |  |  |
| 1 | Button | รอพิจารณา | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดปุ่มยกเลิก ให้ปิด Popup ยืนยันส่งข้อมูลเพื่อพิจารณากรณีกดปุ่มบันทึก ให้บันทึกข้อมูลดังนี้เงื่อนไขTableFieldค่าที่บันทึก cf_rig_treatyprocess_statusWAPRVถ้า cf_rig_treaty_dt.process_status_general = WAIT หรือ EDIT (suthanee.sa 13/05/2026) อัปเดตcf_rig_treaty_dtprocess_status_generalWAPRVถ้า cf_rig_treaty_dt.process_status_condition = WAIT หรือ EDIT (suthanee.sa 13/05/2026) อัปเดตcf_rig_treaty_dt process_status_conditionWAPRVถ้า cf_rig_treaty_dt.process_status_policy = WAIT หรือ EDIT (suthanee.sa 13/05/2026) อัปเดตcf_rig_treaty_dt process_status_policyWAPRVถ้า cf_rig_treaty_dt.process_status_ri_premium = WAIT หรือ EDIT (suthanee.sa 13/05/2026) อัปเดตcf_rig_treaty_dt process_status_ri_premiumWAPRVบันทึก cf_treaty_history |  |  |
| 2 | Button | เพิ่ม Treaty | แสดงเฉพาะสิทธิ์ Maker เท่านั้นเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  |  |
| 3 | Icon | เลือกรายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอรอพิจารณา" (WAIT)เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มรอพิจารณาจะสามารถกดได้ |  | cf_rig_treaty.process_status |
| 4 | Icon | ประวัติ | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD006 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty |  | cf_rig_treaty.process_status |
| 5 | Icon | รายละเอียด | แสดงทุกสิทธิ์การใช้งานแสดง Icon ทุกสถานะแสดงเมื่อมีการอนุมัติรายการไปแล้วอย่างน้อยครั้งหนึ่งเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD003 หน้าจอดูรายละเอียดข้อมูล Treaty |  | cf_rig_treaty.process_status |
|  | Icon | รายละเอียดระหว่างรอพิจารณา | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะ "รอพิจารณา" WAPRV (WAPRV)เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD005 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty |  | cf_rig_treaty.process_status |
| 7 | Icon | ลบรายการ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการนั้นยังไม่ถูกอนุมัติอย่างน้อย 1 ครั้ง cf_rig_treaty.approve = FALSEเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดปุ่มยกเลิก ให้ปิด Popup ยืนยันส่งข้อมูลเพื่อพิจารณากรณีกดปุ่มบันทึก ให้บันทึกข้อมูล cf_rig_treaty.status = I |  | cf_rig_treaty.process_status |
| 8 | Icon | พิจารณารายการ | แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอพิจารณา" WAPRVเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD004 หน้าจอพิจารณาข้อมูล Treaty |  | cf_rig_treaty.process_status |
| 9 | Label | Reinsurer |  | left | cf_reinsurer.reinsurer_name |
| 10 | Label | Treaty Code |  | left | cf_rig_treaty.treaty_code |
| 11 | Label | Start Date |  | left | cf_rig_treaty_general.start_date |
| 12 | Label | Expire Date |  | left | cf_rig_treaty_general.expire_date |
| 13 | Icon | ตั้งค่าข้อมูลทั่วไป | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | cf_rig_treaty_dt.process_status_general |
| แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "รอพิจารณา" WAPRVอยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_general |
| แสดงทุกสิทธิ์การใช้งานMaker เท่านั้นที่กดปุ่มได้แสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "อนุมัติ" APRVเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-1 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป |  | cf_rig_treaty_dt.process_status_general |
| แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่าข้อมูลทั่วไป มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITอยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_general |
| 14 | Icon | ตั้งค่า RI Condition | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | cf_rig_treaty_dt.process_status_condition |
| แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "รอพิจารณา" WAPRVอยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_condition |
| แสดงทุกสิทธิ์การใช้งานMaker เท่านั้นที่กดปุ่มได้แสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "อนุมัติ" APRVเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Condition |  | cf_rig_treaty_dt.process_status_condition |
| แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Condition มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITอยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_condition |
| 15 | Icon | ตั้งค่ากรมธรรม์ | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | cf_rig_treaty_dt.process_status_policy |
| แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "รอพิจารณา" WAPRV อยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_policy |
| แสดงทุกสิทธิ์การใช้งานMaker เท่านั้นที่กดปุ่มได้แสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "อนุมัติ" APRVเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  | cf_rig_treaty_dt.process_status_policy |
| แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่ากรมธรรม์ มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITอยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_policy |
| 16 | Icon | ตั้งค่า RI Premium Rate | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | cf_rig_treaty_dt.process_status_ri_premium |
| แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "รอพิจารณา" WAPRVอยู่ระหว่างรอพิจารณา ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_ri_premium |
| แสดงทุกสิทธิ์การใช้งานMaker เท่านั้นที่กดปุ่มได้แสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "อนุมัติ" APRVเมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  | cf_rig_treaty_dt.process_status_ri_premium |
| แสดงเฉพาะสิทธิ์ Checker เท่านั้นแสดง Icon ต่อเมื่อหัวข้อ ตั้งค่า RI Premium Rate มีสถานะ "รอพิจารณา" WAPRV WAIT , "ส่งกลับแก้ไข" EDITอยู่ระหว่างแก้ไขข้อมูล ไม่สามารถกดได้ |  | cf_rig_treaty_dt.process_status_ri_premium |
| 13 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | left | cf_rig_treaty.updated_date |
| 14 | Label | status | สถานะข้อมูลล่าสุด | left | cf_rig_treaty.process_status |


===== PAGE 1317109773 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-2 หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม "เพิ่ม Treaty " จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่าทั่วไปของ Treaty ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (เพิ่มใหม่) |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | Reinsurer | Enable | แสดงข้อมูลรายการ Reinsurer ทั้งหมด ที่มีสถานะ อนุมัติ | Gibraltar | Required Field |
| 2 | Icon | Information Reinsurer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 3 | Free Text | Treaty Code | Enable | ชื่อ Treaty | GIB_Grp_Direct_EB | Required Fieldรหัสของ Treaty ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับTreaty อื่น) |
| 4 | Icon | Information Treaty Code | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 5 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 6 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 7 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 8 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (แก้ไข) |
| 1 | Dropdown List | Reinsurer | Disable | ชื่อย่อ Reinsurer | Gibraltar | แสดงข้อมูลที่บันทึกไว้ |
| 2 | Free Text | Treaty Code | Disable | ชื่อ Treaty | GIB_Grp_Direct_EB | แสดงข้อมูลที่บันทึกไว้ |
| 3 | Free Text | ชื่อสัญญา | Enable | ชื่อสัญญาของ Treaty | Life Reinsurance Treaty (Group Life Insurance) | Required Field |
| 4 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
| 5 | Date Picker | Start Date | Enable | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 01/01/2568 | Required Field |
| 6 | Date Picker | Expire Date | Enable | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้วันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ | 31/12/2642 | Required Field |
| 7 | Check box | Benefit | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit | Life Accident Death Dismemberment | Required Fieldต้องเลือกอย่างน้อย 1 รายการ |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะไม่บันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่าข้อมูลทั่วไปของ Treaty |  |  |
|  |
| กรณีมีรายการอยู่แล้ว ให้แสดงข้อมูลรายการโดยตรวจสอบ cf_rig_treaty_general.statusกรณมีรายการ = D ให้แสดงรายการนี้เสมอกรณีไม่มีรายการ = D ให้แสดงรายการ = A |
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (เพิ่มใหม่) |
| No | Component Type | Component Name | Default Value | Action / Data Value |  | Fied ที่บันทึก / Field ที่ดึงข้อทูลมาแสดงกรณีแก้ไข |
| 1 | Dropdown List | Reinsurer | Enable | Required Fieldแสดงข้อมูลรายการ Reinsurer ทั้งหมด ที่มีสถานะ อนุมัติ cf_reinsurer.reinsurer_name เมื่อบันทึกให้บันทึกด้วย cf_reinsurer.cf_reinsurer_id |  | cf_rig_treaty.cf_reinsurer_id |
| 2 | Icon | Information Reinsurer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 3 | Free Text | Treaty Code | Enable | Required Fieldรหัสของ Treaty ใช้สำหรับอ้างอิงในระบบ (ต้องไม่ซ้ำกับTreaty อื่น)กรณี Treaty Code ซ้ำกับTreaty อื่น และรายการนั้นไม่มี cf_rig_treaty.status = I ให้แสดง popup |  | cf_rig_treaty.treaty_code |
| 4 | Icon | Information Treaty Code | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 5 | Free Text | ชื่อสัญญา | Enable | Required Field |  | cf_rig_treaty.contract_name |
| 6 | Date Picker | Start Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ |  | cf_rig_treaty_general.start_date |
| 7 | Date Picker | Expire Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ |  | cf_rig_treaty_general.expire_date |
| 8 | Check box | Benefit | Enable | Required Fieldต้องเลือกอย่างน้อย 1 รายการแสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit |  | cf_rig_treaty_general.benefit |
| ส่วนบันทึกข้อมูลตั้งค่าข้อมูลทั่วไป (แก้ไข) |
| 1 | Dropdown List | Reinsurer | Disable | แสดงข้อมูลที่บันทึกไว้ cf_reinsurer.reinsurer_name |  | cf_rig_treaty.cf_reinsurer_id ให้นำ cf_reinsurer_id ไปหาที่ cf_reinsurer แล้วแสดงด้วย cf_reinsurer.reinsurer_name เสมอ |
| 2 | Free Text | Treaty Code | Disable | แสดงข้อมูลที่บันทึกไว้ |  | cf_rig_treaty.treaty_code |
| 3 | Free Text | ชื่อสัญญา | Enable | Required Field |  | cf_rig_treaty.contract_name |
| 4 | Date Picker | Start Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ |  | cf_rig_treaty_general.start_date |
| 5 | Date Picker | Expire Date | Enable | Required Fieldวันที่ Start Date ต้องน้อยกว่าเท่ากับ Expire Date เสมอ |  | cf_rig_treaty_general.expire_date |
| 6 | Check box | Benefit | Enable | Required Fieldต้องเลือกอย่างน้อย 1 รายการแสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Treaty Benefit |  | cf_rig_treaty_general.benefit |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
เมื่อกดปุ่มบันทึก ให้ดำิเนินการดังนี้
| No | กระบวนการ | เงื่อนไข Table | Field | ค่าที่บันทึก |
| บันทึกข้อมูลครั้งแรก |
| 1. | บันทึกข้อมูลใน Table ตามตารางข้างต้น | cf_rig_treaty |  |  |
| cf_rig_treaty | status | A |
| 2. | บันทึกข้อมูลใน Table ตามตารางข้างต้น | cf_rig_treaty_general |  |  |
| cf_rig_treaty_general | status | D |
| 3. | บันทึก | cf_rig_treaty_dt | status_general | TRUE |
| cf_rig_treaty_dt | process_status_general | WAIT |
| cf_rig_treaty_dt | status_condition | FALSE |
| cf_rig_treaty_dt | process_status_condition | WAIT |
| cf_rig_treaty_dt | status_policy | FALSE |
| cf_rig_treaty_dt | process_status_policy | WAIT |
| cf_rig_treaty_dt | status_ri_premium | FALSE |
| cf_rig_treaty_dt | process_status_ri_premium | WAIT |
| cf_rig_treaty_dt | status | D |
| cf_rig_treaty | process_status | WAIT |
| 4. | บันทึก / อัปเดต cf_treaty_history | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข |
| 1. | ถ้าแก้ไขมาจากรายการที่ cf_rig_treaty_general.status = A ให้สร้างรายการใหม่ id ใหม่ถ้าแก้ไขมาจากรายการที่ cf_rig_treaty_general.status = D ให้บันทึกรายการเดิม |  |  |  |
| 2. | บันทึก / อัปเดต | บันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_general ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_general ให้ลง WAIT |  |  |  |
| 4. | บันทึก / อัปเดต | cf_rig_treaty_general | status | D |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |


===== PAGE 1317109777 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-3 หน้าจอจัดการข้อมูลตั้งค่า RI Condition =====
(empty page)


===== PAGE 1317109779 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-3 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > RIG-SD-006-3-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Codition |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Codition |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Condition ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Condition | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2549 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Condition แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Condition และปรับสถานะ รายการข้อมูลตั้งค่า RI Condition เป็น รอส่งพิจารณา |  |  |
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Remark |
| 1 | Label | Reinsurer | Disableค่าที่ดึงมาจากระบบแสดงข้อมูลรายการ Reinsurer ทั้งหมด ที่มีสถานะ อนุมัติ cf_reinsurer.reinsurer_name เมื่อบันทึกให้บันทึกด้วย cf_reinsurer.cf_reinsurer_id | cf_rig_treaty.cf_reinsurer_id |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ | cf_rig_treaty.treaty_code |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด Effective Date From จากเก่าสุดไปใหม่สุด (suthanee.sa 05/06/2026) |  | cf_rig_treaty_cond_hd.statusกรณีมีรายการที่มีค่าดังนี้D = แสดงเสมอI = ไม่แสดงเสมอA = แสดงเฉพาะรายการที่ cf_rig_treaty_cond_hd.child_id = NULL |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value |  |  |
| 1 | Toggle switch | ตั้งค่า RI Condition | ค่าเริ่มต้นเป็น Disable |  | cf_rig_treaty_dt.status_condition |
| 2 | Button | เพิ่ม RI Condition | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-2-2 หน้าจอเพิ่ม/แก้ไขข้อมูลตั้งค่า RI Condition |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดบันทึก (ยืนยันการลบ)ให้ดำเนินการตามนี้ทันทีcf_rig_treaty_cond_hd.status ของรายการนั้นเป็น Icf_rig_treaty_dt.process_status_condition เปลี่ยนเป็น WAIT |  |  |
| 5 | Label | Effective Date From |  |  | cf_rig_treaty_cond_hd.effective_date_from |
| 6 | Label | Effective Date To |  |  | cf_rig_treaty_cond_hd.effective_date_to |
| 7 | Label | Update Date |  |  | cf_rig_treaty_cond_hd.updated_date |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอจัดการข้อมูลตั้งค่า RI Condition
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ตรวจสอบก่อนว่ามีรายการตั้งค่าอย่างน้อย 1 รายการ ถ้าไม่มีให้แสดง |  |  |  |
| 2. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก |  |  |  |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAITและ cf_rig_treaty_dt.status_condition ให้บันทึกตามข้อ 4. |  |  |  |
| 4. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE บันทึก | cf_rig_treaty_dt | status_condition | TRUE |
| ถ้า FALSE บันทึก | cf_rig_treaty_dt | status_condition | FALSE |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข |
| 1. | ตรวจสอบก่อนว่ามีรายการตั้งค่าอย่างน้อย 1 รายการ ถ้าไม่มีให้แสดง |  |  |  |
| 2. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAITและ cf_rig_treaty_dt.status_condition ให้บันทึกตามข้อ 4. |  |  |  |
| 4. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE บันทึก / อัปเดต | cf_rig_treaty_dt | status_condition | TRUE |
| ถ้า FALSE บันทึก / อัปเดต | cf_rig_treaty_dt | status_condition | FALSE |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |


===== PAGE 1317109781 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-3 หน้าจอจัดการข้อมูลตั้งค่า RI Condition > RIG-SD-006-3-2 หน้าจอเพิ่ม-แก้ไขข้อมูลตั้งค่า RI Condition =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Condition

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Condition จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-2-1 หน้าจอจัดการข้อมูลตั้งค่า RI Condition

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Condition
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Condition แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Condition ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Condition ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูลกรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีเพิ่มข้อมูลที่มี Effective Date From - Effective Date To ซ้ำซ้อนกันกับข้อมูลที่มีอยู่ ระบบจะ Popup แจ้งเตือนไม่สามารถบันทึกข้อมูลได้

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่า RI Condition
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Condition |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Dropdown List | RI Method | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล RI Method | QS-Surplus | Required Field |
|  | Free Text | Minimum Sum Assured | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 2 | Free Text | RI Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 3 | Free Text | Profit Commission Rate | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 4 | Free Text | Administrative expenses | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 5 | Free Text | Reserve for unearned premiums | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |
| 6 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 7 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 8 | Button | เพิ่ม Layer | Enable | เมื่อกดเพิ่ม ระบบจะแสดง Record ในตารางด้านล่างเพิ่มทีละ 1 Recordสามารถเพิ่มได้ไม่เกิน 3 record |  |  |
| 9 | Icon | Information RI Condition Layer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 10 | Icon | ลบรายการ | Enable | แสดงหน้ารายการ Layer ทุกครั้งเมื่อมีการเพิ่ม Layerเมื่อกด ระบบจะลบรายการ Layer นั้นในกรณีที่ลบแล้วมีรายการ Layer อื่น ๆ อยู่ ระบบจะเรียงลำดับ Layer ใหม่ โดยรายการแรกจะนับเป็น Layer 1 เสมอ |  |  |
| 11 | Free Text | Minimum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 12 | Free Text | Maximum | Enable | กรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20000.50 | Required Field |
| 13 | Free Text | Percentage Reinsurance | Enable | กรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น | 20.50 | Required Field |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลในแต่ละ Layer มีช่วงเงินที่ซ้อนทับกัน จะไม่อนุญาตให้บันทึกและแสดง Popup แจ้งเตือน ตัวอย่าง หากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Condition เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Condition |
| No | Component Type | Component Name | Default Value | Action / Data Value |  | Field ที่ดึงข้อมูล / บันทึกข้อมูล |
| 1 | Dropdown List | RI Method | Enable | Required Field |  | cf_rig_treaty_cond_hd.ri_method |
|  | Free Text | Minimum Sum Assured | Enable | Required Fieldกรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_hd.min_sum_assured |
| 2 | Free Text | RI Commission Rate | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_hd.ri_com_rate |
| 3 | Free Text | Profit Commission Rate | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_hd.percent_profit_comm |
| 4 | Free Text | Administrative expenses | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_hd.percent_admin_expense |
| 5 | Free Text | Reserve for unearned premiums | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_hd.unearn_premium |
| 6 | Date Picker | Effective Date From | Enable | Required Fieldวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ |  | cf_rig_treaty_cond_hd.effective_date_from |
| 7 | Date Picker | Effective Date To | Enable | Required Fieldวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ |  | cf_rig_treaty_cond_hd.effective_date_to |
| 8 | Button | เพิ่ม Layer | Enable | เมื่อกดเพิ่ม ระบบจะแสดง Record ในตารางด้านล่างเพิ่มทีละ 1 Recordสามารถเพิ่มได้ไม่เกิน 3 record |  | cf_rig_treaty_cond_dt.layer |
| 9 | Icon | Information RI Condition Layer | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 10 | Icon | ลบรายการ | Enable | แสดงหน้ารายการ Layer ทุกครั้งเมื่อมีการเพิ่ม Layerเมื่อกด ระบบจะลบรายการ Layer นั้นในกรณีที่ลบแล้วมีรายการ Layer อื่น ๆ อยู่ ระบบจะเรียงลำดับ Layer ใหม่ โดยรายการแรกจะนับเป็น Layer 1 เสมอ |  |  |
| 11 | Free Text | Minimum | Enable | Required Fieldกรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_dt.minimum |
| 12 | Free Text | Maximum | Enable | Required Fieldกรอกข้อมูลตัวเลข และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_dt.maximum |
| 13 | Free Text | Percentage Reinsurance | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  | cf_rig_treaty_cond_dt.percent_re |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_cond_hd.effective_date_from และ cf_rig_treaty_cond_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้ว |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก | cf_rig_treaty_cond_hd | status | D |
| 4. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAIT | cf_rig_treaty_dt | process_status_condition | WAIT |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_cond_hd.status = D |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_cond_hd.effective_date_from และ cf_rig_treaty_cond_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้วโดยให้ตรวจสอบกับรายการอื่น ที่ไม่ใช่รายการตัวเองที่แก้ไขมา |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 4. | บันทึก / อัปเดต | cf_rig_treaty_dt | process_status_condition | WAIT |
| 5 | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_cond_hd.status = A |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_cond_hd.effective_date_from และ cf_rig_treaty_cond_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้วโดยให้ตรวจสอบกับรายการอื่น ที่ไม่ใช่รายการตัวเองที่แก้ไขมา |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 4. | สร้างรายการใหม่เป็นอีก id ใหม่ บันทึก | cf_rig_treaty_cond_hd | status | D |
| 5. | อัปเดตรายการสถานะ A ที่กดแก้ไขด้วย | cf_rig_treaty_cond_hd | child_id | id ของรายการใหม่ที่มีสถานะ D |
| 6. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAIT |  |  |  |
| 7. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 8. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |


===== PAGE 1317109783 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-4 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ =====
(empty page)


===== PAGE 1317109785 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-4 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > RIG-SD-006-4-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่ากรมธรรม์ |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่ากรมธรรม์ |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- ไม่มี เนื่องจากเป็นการบันทึกข้อมูลรายกรมธรรม์

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจาก policy_no จากมากไปน้อย |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่ากรมธรรม์ | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | Refresh | เมื่อกดปุ่ม ระบบจะดึงข้อมูลกรมธรรม์ภายใต้ Reinsured No Thaire ทั้งหมดที่ระบบดึงข้อมูลมาเก็บไว้ มาแสดง |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  |  |
| 4 | Label | Policy No. | เลขที่กรมธรรม์ | GA2683 |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer ที่ถูกกำหนดบนของกรมธรรม์กลุ่ม | TG010 |  |
| 6 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะม่นำกรมธรรม์นี้ไปประมวลผล | Active |  |
| 7 | Label | Coverage Period From | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Coverage Period From ต้องน้อยกว่าเท่ากับ Coverage Period To เสมอ | 10/05/2568 |  |
| 8 | Label | Coverage Period To | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 |  |
| 9 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะบันทึกข้อมูล และกลับไปยังหน้าจอก่อนหน้า |  |  |
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ | cf_reinsurer.reinsurer_name |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ | cf_rig_treaty.treaty_code |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจาก policy_no มากไปน้อย |  |  | ดึงข้อมูลที่เคยบันทึกไว้แล้วใน cf_rig_treaty_policy_hd รวมกับรายการที่ดึงมาได้จาก tx_rig_landing_policy |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value |  |  |  |
| 1 | Toggle switch | ตั้งค่ากรมธรรม์ | ค่าเริ่มต้นเป็น Disable |  |  | cf_rig_treaty_dt.status_policy |
| 2 | Button | Refresh | เมื่อกดปุ่ม ระบบตรวจสอบ cf_reinsurer.treaty_code กับ cf_lookup_catalog.description ที่ parent_id = 1000100 จากนั้นนำข้อมูลใน cf_lookup_catalog.lookup_key ไปตรวจสอบกรมธรรม์ใน tx_rig_landing_policy ดึงข้อมูลกรมธรรม์ทั้งหมดที่มี lookup_key คล้ายกับ tx_rig_landing_policy.re_insur_noกรณีที่ใน cf_rig_treaty_policy_hd มีรายการที่ cf_rig_treaty_policy_hd.policy_no อยู่แล้ว ต้องไม่ดึงข้อมูลมาทับรายการเดิม |  |  | cf_rig_treaty.treaty_codecf_lookup_catalog.lookup_key |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-3-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ |  |  |  |
| 4 | Label | Policy No. | เลขที่กรมธรรม์ | left | tx_rig_landing_policy.policy_no | cf_rig_treaty_policy_hd.policy_no |
| 5 | Label | Reinsured No. | รหัส Reinsurer ที่ถูกกำหนดบนของกรมธรรม์กลุ่ม | left | tx_rig_landing_policy.re_insur_no | cf_rig_treaty_policy_hd.reinsurer_no |
| 6 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะม่นำกรมธรรม์นี้ไปประมวลผล | left |  | cf_rig_treaty_policy_hd.usage_process_status |
| 7 | Label | Coverage Period From | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Coverage Period From ต้องน้อยกว่าเท่ากับ Coverage Period To เสมอ | left | tx_rig_landing_policy.promise_date | cf_rig_treaty_policy_hd.coverage_period_from |
| 8 | Label | Coverage Period To | ช่วงของวันที่คุ้มครองของกรมธรรม์ เพื่อให้ระบบสามารถนำไปเปรียบเทียบกับ Effective Date From และ Effective Date To ของของเงื่อนไขต่าง ๆ ในการประมวลผลหากช่วงวันที่ Coverage Period From และ Coverage Period To ตรงกับช่วงเงื่อนไขใด ก็จะใช้เงื่อนไขนั้นประมวลผลกรมธรรม์ที่กำหนดวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | left | tx_rig_landing_policy.re_insur_date | cf_rig_treaty_policy_hd.coverage_period_to |
| 9 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | left |  | cf_rig_treaty_policy_hd.updated_date |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก |  |  |  |
| 2. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_policy ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_policy ให้ลง WAIT |  |  |  |
| 3. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE บันทึก | cf_rig_treaty_dt | status_policy | TRUE |
| ถ้า FALSE บันทึก | cf_rig_treaty_dt | status_policy | FALSE |
| 4. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 5. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข |
| 1. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 2. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_policy ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิมยกเว้น cf_rig_treaty_dt.process_status_policy ให้ลง WAITและ cf_rig_treaty_dt.status_policy ให้บันทึกตามข้อ 3. |  |  |  |
| 3. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE อัปเดต | cf_rig_treaty_dt | status_policy | TRUE |
| ถ้า FALSE อัปเดต | cf_rig_treaty_dt | status_policy | FALSE |
| 4. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 5. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |


===== PAGE 1317109788 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-4 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์ > RIG-SD-006-4-2 หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์ =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่ากรมธรรม์

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-3-1 หน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่ากรมธรรม์
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่ากรมธรรม์แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่ากรมธรรม์ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่ากรมธรรม์
| ส่วนบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Toggle switch | เปิด/ปิดใช้งานกรมธรรม์ | Inactive | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะไม่นำกรมธรรม์นี้ไปประมวลผล | Inactive |  |
| 2 | Free Text | Current Policy No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | GA2683 |  |
| 3 | Free Text | Previous Policy No. | Disable | กรณีพบข้อมูลจากจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้ตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอกกรณีไม่พบข้อมูลจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้เปิด Field Previous Policy No เพื่อให้ผู้ใช้งานกรอกข้อมูลเพื่อค้นหากรมธรรม์ที่ถูก Config ไว้บนระบบเมื่อกรอกแล้วกดปุ่ม Search ระบบจะตรวจสอบข้อมูลว่ากรมธรรม์นั้นมีข้อมูลอยู่จริงหากไม่พบข้อมูลกรมธรรม์ ระบบจะแสดงข้อความสีแดงด้านล่าง "ไม่พบกรมธรรม์"หากพบข้อมูล ระบบจะตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  |  |
| 4 | Button | Search | Disable | เปิดให้กดได้เมื่อ Previous Policy No ไม่มีข้อมูล |  |  |
| 5 | Free Text | Policy Name | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | Ocean Life Insurance Public Company Limited (welfare group) |  |
| 6 | Free Text | Reinsured No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  |  |
| 7 | Free Text | Code Name | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | OLI | Required Field |
| 8 | Free Text | Commencement Date | Disable | ตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก | GA2641 | Required Field |
| 9 | Free Text | Policy Year | Disable | ระบบจะแสดงจำนวนปี โดยคำนวณจากจำนวนเดือนระหว่างCoverage Period From และ Commencement Dateจากนั้นนำจำนวนเดือนที่ได้มาแปลงเป็นปี (นับรวมเดือนเริ่มต้นด้วย)ตัวอย่าง (ปัดเศษขึ้น):Commencement Date: มีนาคม 2022Coverage Period From: สิงหาคม 2023การคำนวณ:ระยะเวลาตั้งแต่ มี.ค. 2022 ถึง ส.ค. 2023 = 18 เดือนเมื่อนำมาแปลงเป็นปี = 1.5 ปีระบบทำการ ปัดเศษขึ้น → 2 ปี | 22 |  |
| 10 | Icon | Information Policy Year | Disable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 11 | Free Text | Age Limit | Enable |  | 60 | Required Field |
| 12 | Dropdown List | Occupation Class | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Occupation class | 1 | Required Field |
| 13 | Date Picker | Coverage Period From | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2024 |  |
| 14 | Date Picker | Coverage Period To | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ | 15/09/2025 |  |
| 15 | Free Text | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable |  | 00001,00002 |  |
|  | Icon | Information CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 16 | Free Text | Remark | Enable |  |  |  |
| 17 | Dropdown List | Coverage | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Policy Coverage & Premium Type | AD&D Type 1 | Required Field |
| 18 | Free Text | AD&D | Enable |  | 20.50 | Required Field |
| 19 | Icon | Information AD&D | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 20 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Murder & Assault (MA) | Enable | แสดง Dropdown ตัวเลือกดังนี้0255075100 | 20.50 | Required Field |
| 21 | Free Text | Special Coverage | Enable |  | 20.50 | Required Field |
| 22 | Free Text | Loss finger of same hand | Enable |  | 20.50 | Required Field |
| 23 | Icon | Information Loss finger of same hand | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 24 | Free Text | RI Premium Loading for Motorcycle | Enable |  | 20.50 | Required Field |
| 25 | Free Text | RI Premium Loading for War | Enable |  | 20.50 | Required Field |
| 26 | Free Text | RI Premium Loading for Strike and Riot | Enable |  | 20.50 | Required Field |
| 27 | Free Text | RI Premium Loading for Sports and Activities | Enable |  | 20.50 | Required Field |
| 28 | Free Text | RI Premium Loading for Aircraft | Enable |  | 20.50 | Required Field |
| 29 | Free Text | Discount for MA | Disable | สัมพันธ์กับการกรอกข้อมูลใน Murder & Assault (MA) ต้องตรงกับ Config Discount for Murder&Assault ที่ % Sum Assured of Murder&Assualtกรณีที่กรอกตรงกัน ระบบจะแสดง Discount Rate ตามกำหนดกรณีกรอกไม่ตรงกับ ระบบจะไม่แสดงข้อมูล แต่จะไม่สามารถบันทึกข้อมูลทั้งหมดได้ เพราะระบบบังคับให้กรอก | 20.50 |  |
| 30 | Icon | Information Discount for MA | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |
| 31 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Discount Group Volume | Enable | แสดง Dropdown ตัวเลือกดังนี้0101520253035 | 20.50 | Required Field |
| 32 | Icon | Information Discount Group Volume | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากตั้งค่า ปิดใช้งานกรมธรรม์ สามารถบันทึกข้อมูลได้โดยไม่ต้องกรอกข้อมูลตาม Field บังคับ |  |  |
| ส่วนบันทึกรายการข้อมูลตั้งค่ากรมธรรม์ |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example |  | Remark |
| 1 | Toggle switch | เปิด/ปิดใช้งานกรมธรรม์ | Inactive | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ โดยการเปิดปิดการนำกรมธรรม์ไปประมวลผล จะเป็นการ Config จากผู้ใช่งาน ในหน้าจอจัดการข้อมูลตั้งค่ากรมธรรม์Active : ระบบจะนำกรมธรรม์นี้ไปประมวลผลตามปกติInactive : ระบบจะไม่นำกรมธรรม์นี้ไปประมวลผล |  |  | cf_rig_treaty_policy_hd.usage_process_status |
| 2 | Free Text | Current Policy No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  | tx_rig_landing_policy.policy_no | cf_rig_treaty_policy_hd.policy_no |
| 3 | Free Text | Previous Policy No. | Disable | กรณีพบข้อมูลจากจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้ตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอกกรณีไม่พบข้อมูลจากระบบกรมธรรม์ประกันกลุ่ม (เดิม)ให้เปิด Field Previous Policy No เพื่อให้ผู้ใช้งานกรอกข้อมูลเพื่อค้นหากรมธรรม์ที่ถูก Config ไว้บนระบบเมื่อกรอก แล้วกดปุ่ม Search ระบบจะตรวจสอบข้อมูลว่ากรมธรรม์นั้นมีข้อมูลอยู่จริง โดยนำ Previous Policy No. ที่กรอก ไปตรวจสอบกับ cf_rig_treaty_policy_hd.policy_no ที่ถูกบันทึกไว้ ถ้ามีหลายรายการ ให้เลือกสถานะเป็น cf_rig_treaty_policy_hd.status = A แต่ถ้าไม่มี ให้เลือกรายการที่ถูกบันทึกไว้ล่าสุดหากไม่พบข้อมูลกรมธรรม์ ระบบจะแสดงข้อความสีแดงด้านล่าง "ไม่พบกรมธรรม์"หากพบข้อมูล ระบบจะตรวจสอบกรมธรรม์ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  | tx_rig_landing_policy.policy_no_old | cf_rig_treaty_policy_hd.previous_policy |
| 4 | Button | Search | Disable | เปิดให้กดได้เมื่อ Previous Policy No ไม่มีข้อมูล |  |  |  |
| 5 | Free Text | Policy Name | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  | tx_rig_landing_policy.company_name | cf_rig_treaty_policy_hd.policy_name |
| 6 | Free Text | Reinsured No. | Disable | ระบบจะแสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  | tx_rig_landing_policy.re_insur_no | cf_rig_treaty_policy_hd.reinsurer_no |
| 7 | Free Text | Code Name | Disable | Required Fieldตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  | tx_rig_landing_policy.company_code | cf_rig_treaty_policy_hd.code_name |
| 8 | Free Text | Commencement Date | Disable | Required Fieldตรวจสอบ Previous Policy No ที่ถูก Config ไว้บนระบบ Group RIหากพบให้ดึงข้อมูล Code Name และ Commencement Date ของรายการนั้นมาแสดงหากไม่พบให้เปิด Field Code Name และ Commencement Date สำหรับให้ผู้ใช้งานกรอก |  | tx_rig_landing_policy.first_date | cf_rig_treaty_policy_hd.com_date |
| 9 | Free Text | Policy Year | Disable | ระบบจะแสดงจำนวนปี โดยคำนวณจากจำนวนเดือนระหว่างCoverage Period From และ Commencement Dateจากนั้นนำจำนวนเดือนที่ได้มาแปลงเป็นปี (นับรวมเดือนเริ่มต้นด้วย)ตัวอย่าง (ปัดเศษขึ้น):Commencement Date: มีนาคม 2022Coverage Period From: สิงหาคม 2023การคำนวณ:ระยะเวลาตั้งแต่ มี.ค. 2022 ถึง ส.ค. 2023 = 18 เดือนเมื่อนำมาแปลงเป็นปี = 1.5 ปีระบบทำการ ปัดเศษขึ้น → 2 ปี |  |  | cf_rig_treaty_policy_hd.policy_year |
| 10 | Icon | Information Policy Year | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |  |
| 11 | Free Text | Age Limit | Enable |  |  |  | cf_rig_treaty_policy_hd.age_limit |
| 12 | Dropdown List | Occupation Class | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Occupation class |  |  | cf_rig_treaty_policy_hd.occ_class |
| 13 | Date Picker | Coverage Period From | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  | tx_rig_landing_policy.promise_date | cf_rig_treaty_policy_hd.coverage_period_from |
| 14 | Date Picker | Coverage Period To | Disable | ช่วงของวันที่คุ้มครองของกรมธรรม์แสดงข้อมูลที่ได้จากกรมธรรม์ประกันกลุ่ม และไม่สามารถแก้ไขได้ |  | tx_rig_landing_policy.re_insur_date | cf_rig_treaty_policy_hd.coverage_period_to |
| 15 | Free Text | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable | เก็บข้อมูลเป็น Text ยาว แบ่งด้วย , |  |  | cf_rig_treaty_policy_hd.cert_no_incompliant |
|  |  | Information CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |  |
| 16 | Free Text | Remark | Enable |  |  |  | cf_rig_treaty_policy_hd.remark |
| 17 | Dropdown List | Coverage | Enable | แสดงข้อมูลจาก Configuration Data ส่วนข้อมูล Config Policy Coverage & Premium Type |  |  | cf_rig_treaty_policy_hd.coverage |
| 18 | Free Text | AD&D | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.percent_add |
| 19 | Icon | Information AD&D | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |  |
| 20 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Murder & Assault (MA) | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้นDefault แสดง กรุณาเลือกแสดง List จาก cf_ma_discount.ma_rateแสดงทศนิยม 2 ตำแหน่งเสมอ (suthanee.sa 05/06/2026) |  |  | cf_rig_treaty_policy_hd.murder_assault |
| 21 | Free Text | Special Coverage | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.special_coverage |
| 22 | Free Text | Loss finger of same hand | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.loss_finger |
| 23 | Icon | Information Loss finger of same hand | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |  |
| 24 | Free Text | RI Premium Loading for Motorcycle | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.prem_motorcycle |
| 25 | Free Text | RI Premium Loading for War | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.prem_war |
| 26 | Free Text | RI Premium Loading for Strike and Riot | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.prem_strike_riot |
| 27 | Free Text | RI Premium Loading for Sports and Activities | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.prem_sports_activities |
| 28 | Free Text | RI Premium Loading for Aircraft | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้น |  |  | cf_rig_treaty_policy_hd.prem_aircraft |
| 29 | Free Text | Discount for MA | Disable | สัมพันธ์กับการกรอกข้อมูลใน Murder & Assault (MA) ต้องตรงกับ Config Discount for Murder&Assault ที่ % Sum Assured of Murder&Assualtกรณีที่กรอกตรงกัน ระบบจะแสดง Discount Rate ตามกำหนด เปรียบเทียบค่าที่ cf_ma_discount ใน Field cf_ma_discount.ma_rate จากนั้นนำค่า cf_ma_discount.disc_rate มาแสดงกรณีกรอกไม่ตรงกับ ระบบจะไม่แสดงข้อมูล แต่จะไม่สามารถบันทึกข้อมูลทั้งหมดได้ เพราะระบบบังคับให้กรอก |  |  | cf_rig_treaty_policy_hd.discount_murder_assualt |
| 30 | Icon | Information Discount for MA | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม |  |  |  |
| 31 | Free Text Dropdown List (suthanee.sa 05/06/2026) | Discount Group Volume | Enable | Required Fieldกรอกข้อมูลตัวเลขไม่เกิน 100.00 และมีทศนิยม 2 ตำแหน่งเท่านั้นDefault แสดง กรุณาเลือกแสดง List จาก cf_lookup_catalog.lookup_key ที่ cf_lookup_catalog.parent_id = 1001100แสดงทศนิยม 2 ตำแหน่งเสมอ (suthanee.sa 05/06/2026) |  |  | cf_rig_treaty_policy_hd.discount_group_vol |
| 32 | Icon | Information Discount Group Volume | Enable | เมื่อกดให้แสดง Popup แจ้งข้อมูลเพิ่มเติม (suthanee.sa 05/06/2026 เพิ่ม Less than 20) |  |  |  |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่ากรมธรรม์
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก | cf_rig_treaty_policy_hd | status | D |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_policy ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_policy ให้ลง WAIT |  |  |  |
| 4. | ถ้ามีรายการใดรายการหนึ่ง = WAIT อัปเดต | cf_rig_treaty | process_status | WAIT |
| 5. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_policy_hd.status = D |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 3. | บันทึก / อัปเดต | cf_rig_treaty_dt | process_status_policy | WAIT |
| 4. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 5. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม |  |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_policy_hd.status = A |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | สร้างรายการใหม่เป็นอีก id ใหม่ บันทึก |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 4. | บันทึก / อัปเดต | cf_rig_treaty_policy_hd | status | D |
| 5. | อัปเดตรายการสถานะ A ที่กดแก้ไขด้วย | cf_rig_treaty_policy_hd | child_id | id ของรายการใหม่ที่มีสถานะ D |
| 6. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAIT | cf_rig_treaty_dt | process_status_policy | WAIT |
| 7. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 8. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม |  |  |  |


===== PAGE 1317109790 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-5 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate =====
(empty page)


===== PAGE 1317109792 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-5 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > RIG-SD-006-5-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate =====
### หน้าจอหลัก : Screen Design
| การแสดงหน้าขอของ Maker | คำอธิบาย |
|  | การแสดงผลสำหรับกรณีปิดการตั้งค่า RI Premium Rate |
|  | การแสดงผลสำหรับกรณีเปิดการตั้งค่า RI Premium Rate |

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนดินสอ หรือ ติ๊กถูก จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล
- กรณี Enable ใช้งานตั้งค่า RI Premium Rate ต้องเพิ่มรายการอย่างน้อย 1 รายการ หากไม่เพิ่มระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ |  | Gibraltar |  |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ |  | GIB_Grp_Direct_EB |  |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Premium Rate | ค่าเริ่มต้นเป็น Disable |  |  |
| 2 | Button | เพิ่ม RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการ |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 12/07/2550 |  |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 10/05/2568 |  |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด | 10/05/2568 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากเปิดใช้งานการตั้งค่า RI Premium Rate แต่ไม่มีการสร้างข้อมูลอย่างน้อย 1 รายการ ระบบจะแสดงข้อความ Popup และไม่อนุญาตให้บันทึกข้อมูลเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูลตั้งค่า RI Premium Rate และปรับสถานะ รายการข้อมูลตั้งค่า RI Premium Rate เป็น รอส่งพิจารณา |  |  |
| ส่วนอ้างอิง Treaty |
| No | Component Type | Component Name | Default Value |  |
| 1 | Label | Reinsurer | Disable ค่าที่ดึงมาจากระบบ | cf_reinsurer.reinsurer_name |
| 2 | Label | Treaty Code | Disableค่าที่ดึงมาจากระบบ | cf_rig_treaty.treaty_code |
| ส่วนแสดงข้อมูล |
| 1 |  | การเรียงลำดับข้อมูล | เรียงจากวันที่สร้างข้อมูล ล่าสุด ไป เก่าสุด เก่าสุด ไป ใหม่สุด (suthanee.sa 29/05/2029) |  | cf_rig_treaty_cond_hd.statusกรณีมีรายการที่มีค่าดังนี้D = แสดงเสมอI = ไม่แสดงเสมอA = แสดงเฉพาะรายการที่ cf_rig_treaty_cond_hd.child_id = NULL |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Toggle switch | ตั้งค่า RI Premium Rate | ค่าเริ่มต้นเป็น Disable |  | cf_rig_treaty_dt.status_ri_premium |
| 2 | Button | เพิ่ม RI Premium Rate | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 3 | Icon | แก้ไข | เมื่อกดปุ่ม ระบบจะเปิดหน้าจอ BD-CF-002-SD002-4-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate |  |  |
| 4 | Icon | ลบ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการดำเนินการกรณีกดบันทึก (ยืนยันการลบ)ให้ดำเนินการตามนี้ทันทีcf_rig_treaty_prem_rate_hd.status ของรายการนั้นเป็น Icf_rig_treaty_dt.process_status_ri_premium เปลี่ยนเป็น WAIT |  |  |
| 5 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ |  | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 6 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ |  | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 7 | Label | Update Date | วันที่แก้ไขข้อมูลล่าสุด |  | cf_rig_treaty_prem_rate_hd.updated_date |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ตรวจสอบก่อนว่ามีรายการตั้งค่าอย่างน้อย 1 รายการ ถ้าไม่มีให้แสดง |  |  |  |
| 2. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก |  |  |  |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.status_ri_premium ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.status_ri_premium ให้ลง WAITและ cf_rig_treaty_dt.status_condition ให้บันทึกตามข้อ 4. |  |  |  |
| 4. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE บันทึก | cf_rig_treaty_dt | status_ri_premium | TRUE |
| ถ้า FALSE บันทึก | cf_rig_treaty_dt | status_ri_premium | FALSE |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |
| บันทึกข้อมูลกรณีแก้ไข |
| 1. | ตรวจสอบก่อนว่ามีรายการตั้งค่าอย่างน้อย 1 รายการ ถ้าไม่มีให้แสดง |  |  |  |
| 2. | ถ้ามีรายการตั้งค่าแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 3. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิมยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAITและ cf_rig_treaty_dt.status_condition ให้บันทึกตามข้อ 4. |  |  |  |
| 4. | ตรวจสอบ Toggle switch |  |  |  |
| ถ้า TRUE บันทึก / อัปเดต | cf_rig_treaty_dt | status_ri_premium | TRUE |
| ถ้า FALSE บันทึก / อัปเดต | cf_rig_treaty_dt | status_ri_premium | FALSE |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม | cf_treaty_history |  |  |


===== PAGE 1317109794 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-5 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate > RIG-SD-006-5-2 หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้บันทึกรายการข้อมูลตั้งค่า RI Premium Rate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดปุ่ม เพิ่ม RI Premium Rate จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate
- ไอคอนดินสอ จากหน้าจอ BD-CF-002-SD002-4-1 หน้าจอจัดการข้อมูลตั้งค่า RI Premium Rate

### การกระทำกับหน้าจอ (Actions)
- บันทึกรายการข้อมูลตั้งค่า RI Premium Rate
- กดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกรายการข้อมูลตั้งค่า RI Premium Rate แล้วกลับสู่หน้าจอก่อนหน้า
- กดปุ่ม บันทึก เพื่อบันทึกรายการข้อมูลตั้งค่า RI Premium Rate ในระบบ

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ
- ผู้ใช้งานบันทึกข้อมูลสำเร็จ ระบบจะจัดเก็บข้อมูลตั้งค่า RI Premium Rate ในระบบ

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุรูปแบบข้อมูลไม่ถูกต้อง ระบบจะแสดงข้อความแจ้งเตือน "รูปแบบ(ชื่อFieldนั้น)ไม่ถูกต้อง" เป็นตัวหนังสือสีแดง ใต้ field ที่ระบุข้อมูลผิด และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการเพิ่มข้อมูลตั้งค่า RI Premium Rate
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Premium Rate |
| No | Component Type | Component Name | Default Value | Action / Data Value | Example | Remark |
| 1 | Date Picker | Effective Date From | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2568 | Required Field |
| 2 | Date Picker | Effective Date To | Enable | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้วันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | 10/05/2642 | Required Field |
| 3 | Free Text | RI Premium Rate | Enable | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 20.50 | Required Field |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | เมื่อกดปุ่ม ยกเลิก ระบบจะกลับไปยังหน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม บันทึก ระบบจะตรวจสอบข้อมูลก่อนบันทึกหากข้อมูลไม่ครบหรือไม่ถูกต้อง จะไม่อนุญาตให้บันทึก และแสดง Error ใต้ Fieldหากข้อมูลช่วงวันที่ Effective Date From และ Effective Date To ไม่สอดคล้องกับข้อมูลตั้งค่า RI Premium Rate เดิม ระบบจะ จะไม่อนุญาตให้บันทึก และแสดง Popup แจ้งเตือนเมื่อข้อมูลถูกต้องครบ ระบบจะบันทึกรายการข้อมูล |  |  |
| ส่วนบันทึกรายการข้อมูลตั้งค่า RI Premium Rate |
| No | Component Type | Component Name | Default Value |  |  |
| 1 | Date Picker | Effective Date From | Enable | Required Fieldวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 2 | Date Picker | Effective Date To | Enable | Required Fieldวันที่ Effective Date From ต้องน้อยกว่าเท่ากับ Effective Date To เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 3 | Free Text | RI Premium Rate | Enable | Required Fieldจำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนดมีทศนิยม 4 ตำแหน่งเท่านั้นcf_rig_treaty_prem_rate_dt.occ_classcf_rig_treaty_prem_rate_dt.max_agecf_rig_treaty_prem_rate_dt.min_age | cf_rig_treaty_prem_rate_dt.premium_rate |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่า RI Premium Rate
เมื่อกดปุ่มบันทึก ให้ดำเนินการดังนี้
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| บันทึกครั้งแรก |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_prem_rate_hd.effective_date_from และ cf_rig_treaty_prem_rate_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้ว |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น และสร้างรายการ id ใหม่ บันทึก | cf_rig_treaty_prem_rate_hd | status | D |
| 4. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_ri_premium ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_ri_premium ให้ลง WAIT |  |  |  |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม |  |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_cond_hd.status = D |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_prem_rate_hd.effective_date_from และ cf_rig_treaty_prem_rate_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้วโดยให้ตรวจสอบกับรายการอื่น ที่ไม่ใช่รายการตัวเองที่แก้ไขมา |  |  |  |
| 3. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 4. | บันทึก / อัปเดต | cf_rig_treaty_dt | process_status_ri_premium | WAIT |
| 5. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 6. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม |  |  |  |
| บันทึกข้อมูลกรณีแก้ไข กรณีรายการที่กดแก้ไข มี cf_rig_treaty_cond_hd.status = A |
| 1. | ตรวจสอบการกรอกข้อมูลต้องครบตามกำหนด หากไม่ครบให้แสดงข้อความสีแดงใต้ Field ที่ต้องกรกอก ตามภาพตัวอย่าง |  |  |  |
| 2. | ตรวจสอบ Field cf_rig_treaty_prem_rate_hd.effective_date_from และ cf_rig_treaty_prem_rate_hd.effective_date_to ต้องไม่อยู่ในช่วงเดียวกันกับรายการอื่นที่มีอยู่แล้วโดยให้ตรวจสอบกับรายการอื่น ที่ไม่ใช่รายการตัวเองที่แก้ไขมา |  |  |  |
| 3. | สร้างรายการใหม่เป็นอีก id ใหม่ | cf_rig_treaty_prem_rate_hd | status | D |
| 4. | ถ้ากรอกข้อมูลครบเรียบร้อยแล้วบันทึกข้อมูลใน Table ตามตารางข้างต้น |  |  |  |
| 5. | อัปเดตรายการสถานะ A ที่กดแก้ไขด้วย | cf_rig_treaty_prem_rate_hd | child_id | id ของรายการใหม่ที่มีสถานะ D |
| 6. | ถ้าใน Treaty นั้น มีรายการ cf_rig_treaty_dt.status = D ให้อัปเดตที่ cf_rig_treaty_dt.process_status_condition ที่รายการนั้นแต่ถ้า Treaty นั้น ไม่มีรายการ cf_rig_treaty_dt.status = D ให้สร้างรายการใหม่ใน cf_rig_treaty_dt โดยคัดลอกจากรายการเดิม ยกเว้น cf_rig_treaty_dt.process_status_condition ให้ลง WAIT |  |  |  |
| 7. | บันทึก / อัปเดต | cf_rig_treaty | process_status | WAIT |
| 8. | ตรวจสอบ cf_rig_treaty.process_status ล่าสุดของ Treaty ตนเองหาก cf_rig_treaty.process_status ไม่เท่ากับ WAIT ให้บันทึกรายการประวัติ cf_treaty_history เพิ่ม |  |  |  |


===== PAGE 1317109796 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-6 หน้าจอดูรายละเอียดข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนรูปเอกสาร บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการดูรายละเอียดข้อมูล Treaty
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2543 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/2642 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/2642 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2543 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/2642 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2543 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2543 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2564 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | เงื่อนไข |  |
| 1 | Label | Reinsurer | ตรวจสอบที่ cf_rig_treaty.cf_reinsurer_id | cf_reinsurer.reinsurer_name |
| 2 | Label | Treaty Code |  | cf_rig_treaty.treaty_code |
| 3 | Label | ชื่อสัญญา |  | cf_rig_treaty.contract_name |
| 5 | Label | Start Date | ถ้ามีรายการที่ cf_rig_treaty_general.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_general.start_date |
| 6 | Label | Expire Date | ถ้ามีรายการที่ cf_rig_treaty_general.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_general.expire_date |
| 7 | Label | Benefit | ถ้ามีรายการที่ cf_rig_treaty_general.status = A ให้แสดงรายการ A เสมอแปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000500แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_general.benefit |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition |  | cf_rig_treaty_dt.status_general |
| 2 | Icon | ดูรายละเอียด | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ |  |
| 3 | Label | Effective Date From | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.effective_date_from |
| 4 | Label | Effective Date To | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.effective_date_to |
| 5 | Label | Update Date | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอแปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000600แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_cond_hd.ri_method |
| 2 | Label | Minimum Sum Assured | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.min_sum_assured |
| 3 | Label | RI Commission Rate | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.ri_com_rate |
| 4 | Label | Profit Commission Rate | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.percent_profit_comm |
| 5 | Label | Administrative expenses | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.percent_admin_expense |
| 6 | Label | Reserve for unearned premiums | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.unearn_premium |
| 7 | Label | Effective Date From | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.effective_date_from |
| 8 | Label | Effective Date To | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_cond_hd.effective_date_to |
| 9 | Label | Minimum | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.minimum |
| 10 | Label | Maximum | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.maximum |
| 11 | Label | Percentage Reinsurance | ถ้ามีรายการที่ cf_rig_treaty_cond_hd.status = A ให้แสดงรายการ A เสมอcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.percent_re |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ |  | cf_rig_treaty_dt.status_policy |
| 2 | Icon | ดูรายละเอียด | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ |  |
| 3 | Label | Policy No. | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.policy_no |
| 4 | Label | Code Name | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.code_name |
| 5 | Label | สถานะใช้งาน | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.usage_process_status |
| 6 | Label | Coverage Period From | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.coverage_period_from |
| 7 | Label | Coverage Period To | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.coverage_period_to |
| 8 | Label | Update Date | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.usage_process_status |
| 2 | Label | Current Policy No. | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.policy_no |
| 3 | Label | Previous Policy No. | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.previous_policy |
| 4 | Label | Policy Name | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.policy_name |
| 5 | Label | Reinsured No. | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.reinsurer_no |
| 6 | Label | Code Name | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.code_name |
| 7 | Label | Commencement Date | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.com_date |
| 8 | Label | Policy Year | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.policy_year |
| 9 | Label | Age Limit | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.age_limit |
| 10 | Label | Occupation Class | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.occ_class |
| 11 | Label | Coverage Period From | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.coverage_period_from |
| 12 | Label | Coverage Period To | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.coverage_period_to |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.cert_no_incompliant |
| 14 | Label | Remark | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.remark |
| 15 | Label | Coverage | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000800 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_policy_hd.coverage |
| 16 | Label | AD&D | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.percent_add |
| 17 | Label | Murder & Assault (MA) | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.murder_assault |
| 18 | Label | Special Coverage | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.special_coverage |
| 19 | Label | Loss finger of the same hand | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.loss_finger |
| 20 | Label | RI Premium Loading for Motorcycle | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.prem_motorcycle |
| 21 | Label | RI Premium Loading for War | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.prem_war |
| 22 | Label | RI Premium Loading for Strike and Riot | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.prem_strike_riot |
| 23 | Label | RI Premium Loading for Sports and Activities | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.prem_sports_activities |
| 24 | Label | RI Premium Loading for Aircraft | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.prem_aircraft |
| 25 | Label | Discount for MA | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.discount_murder_assualt |
| 26 | Label | Discount Group Volume | ถ้ามีรายการที่ cf_rig_treaty_policy_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_policy_hd.discount_group_vol |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate |  | cf_rig_treaty_dt.status_ri_premium |
| 2 | Icon | รายละเอียด | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd.status = A ให้แสดงรายการ A เสมอ |  |
| 3 | Label | Effective Date From | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd.status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 4 | Label | Effective Date To | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd..status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 5 | Label | Update Date | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd..status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_prem_rate_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd..status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 2 | Label | Effective Date To | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd..status = A ให้แสดงรายการ A เสมอ | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 3 | Label | RI Premium Rate | ถ้ามีรายการที่ cf_rig_treaty_prem_rate_hd..status = A ให้แสดงรายการ A เสมอcf_rig_treaty_prem_rate_hd.typecf_rig_treaty_prem_rate_hd.occ_classcf_rig_treaty_prem_rate_hd.min_agecf_rig_treaty_prem_rate_hd.max_age | cf_rig_treaty_prem_rate_hd.premium_rate |


===== PAGE 1317109798 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-7 หน้าจอพิจารณาข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนค้อน บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอพิจารณา

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดและบันทึกผลพิจารณาข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วนสามารถบันทึกผลพิจารณาข้อมูล Treaty ได้
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- สามารถบันทึกผลพิจารณาข้อมูล Treaty ได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นกรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูลกรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีไม่ระบุข้อมูลที่จำเป็น ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุ(ชื่อFieldนั้น)" เป็นตัวหนังสือสีแดง ที่ใต้ field ที่ยังไม่ได้ระบุ และไม่อนุญาตให้บันทึกข้อมูล
- กรณีระบุผลพิจารณาเป็น "ส่งกลับแก้ไข" แต่ไม่ได้ระบุหมายเหตุ ระบบจะแสดงข้อความแจ้งเตือน "กรุณาระบุหมายเหตุ" เป็นตัวหนังสือสีแดง ที่ใต้ field หมายเหตุ และไม่อนุญาตให้บันทึกข้อมูล

### รายละเอียดส่วนพิจารณาข้อมูล Reinsurer
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3009 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | ยกเลิก | enable | ผู้ใช้งานจะกดปุ่ม ยกเลิก เพื่อยกเลิกการบันทึกผลพิจารณาข้อมูล Treaty แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| 2 | Button | บันทึก | enable | เมื่อกดปุ่ม ระบบจะทำการยืนยันการบันทึกผลพิจารณาข้อมูล Treaty |  |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | เงื่อนไข |  |
| 1 | Label | Reinsurer | ตรวจสอบที่ cf_rig_treaty.cf_reinsurer_id | cf_reinsurer.reinsurer_name |
| 2 | Label | Treaty Code |  | cf_rig_treaty.treaty_code |
| 3 | Label | ชื่อสัญญา |  | cf_rig_treaty.contract_name |
| 5 | Label | Start Date | แสดงรายการที่มี cf_rig_treaty_general.status = D | cf_rig_treaty_general.start_date |
| 6 | Label | Expire Date | แสดงรายการที่มี cf_rig_treaty_general.status = D | cf_rig_treaty_general.expire_date |
| 7 | Label | Benefit | แสดงรายการที่มี cf_rig_treaty_general.status = D แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000500 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_general.benefit |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition |  | cf_rig_treaty_dt.status_general |
| 2 | Icon | ดูรายละเอียด | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL |  |
| 3 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_from |
| 4 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_to |
| 5 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000600 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_cond_hd.ri_method |
| 2 | Label | Minimum Sum Assured | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_cond_hd.min_sum_assured |
| 3 | Label | RI Commission Rate | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.ri_com_rate |
| 4 | Label | Profit Commission Rate | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.percent_profit_comm |
| 5 | Label | Administrative expenses | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.percent_admin_expense |
| 6 | Label | Reserve for unearned premiums | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.unearn_premium |
| 7 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_from |
| 8 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_to |
| 9 | Label | Minimum | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.minimum |
| 10 | Label | Maximum | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.maximum |
| 11 | Label | Percentage Reinsurance | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.percent_re |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ |  | cf_rig_treaty_dt.status_policy |
| 2 | Icon | ดูรายละเอียด | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL |  |
| 3 | Label | Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_no |
| 4 | Label | Code Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.code_name |
| 5 | Label | สถานะใช้งาน | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.usage_process_status |
| 6 | Label | Coverage Period From | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_from |
| 7 | Label | Coverage Period To | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_to |
| 8 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.usage_process_status |
| 2 | Label | Current Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_no |
| 3 | Label | Previous Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.previous_policy |
| 4 | Label | Policy Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_name |
| 5 | Label | Reinsured No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.reinsurer_no |
| 6 | Label | Code Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.code_name |
| 7 | Label | Commencement Date | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.com_date |
| 8 | Label | Policy Year | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_year |
| 9 | Label | Age Limit | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.age_limit |
| 10 | Label | Occupation Class | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.occ_class |
| 11 | Label | Coverage Period From | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_from |
| 12 | Label | Coverage Period To | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_to |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.cert_no_incompliant |
| 14 | Label | Remark | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.remark |
| 15 | Label | Coverage | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000800 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_policy_hd.coverage |
| 16 | Label | AD&D | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.percent_add |
| 17 | Label | Murder & Assault (MA) | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.murder_assault |
| 18 | Label | Special Coverage | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.special_coverage |
| 19 | Label | Loss finger of the same hand | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.loss_finger |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_motorcycle |
| 21 | Label | RI Premium Loading for War | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_war |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_strike_riot |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_sports_activities |
| 24 | Label | RI Premium Loading for Aircraft | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_aircraft |
| 25 | Label | Discount for MA | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.discount_murder_assualt |
| 26 | Label | Discount Group Volume | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.discount_group_vol |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate |  | cf_rig_treaty_dt.status_ri_premium |
| 2 | Icon | รายละเอียด |  |  |
| 3 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 4 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 5 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 2 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 3 | Label | RI Premium Rate | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULLcf_rig_treaty_prem_rate_hd.typecf_rig_treaty_prem_rate_hd.occ_classcf_rig_treaty_prem_rate_hd.min_agecf_rig_treaty_prem_rate_hd.max_age | cf_rig_treaty_prem_rate_hd.premium_rate |
| ส่วนพิจารณาข้อมูล |
| 1. | Dropdown | ผลพิจารณา | แสดงรายการจาก cf_lookup_catalog.description ที่มี cf_lookup_catalog.parent_id = 1003100 | cf_rig_treaty_dt.status |
| 2. | Label | หมายเหตุ | บังคับกรอกกรณีเลือกผลพิจารณาเป็น ส่งกลับแก้ไข (EDIT) |  |
กรณีกดปุ่มยกเลิก ให้ปิด Popup หน้าจอเพิ่มข้อมูลตั้งค่าข้อมูลทั่วไป
เมื่อกดปุ่มบันทึก ให้แสดง Popup ยืนยันการบันทึกผลพิจารณา
กรณีกดปุ่ม ยกเลิก ให้ปิด Popup ยืนยันผลพิจารณา
กรณีกดปุ่ม ยืนยัน ดำเนินการดังนี้
(suthanee.sa 19/05/2026)
| **กรณีเลือก ผลพิจารณาเป็น ส่งกลับแก้ไข (EDIT)** |
| No | กระบวนการ | Table | Field | ค่าที่บันทึก |
| 1. | อัปเดต | cf_rig_treaty_dt | status | EDIT |
| 2. | ถ้า cf_rig_treaty_dt.process_status_general = WAPRV อัปเดต | cf_rig_treaty_dt | process_status_general | EDIT |
| 3. | ถ้า cf_rig_treaty_dt.process_status_condition = WAPRV อัปเดต | cf_rig_treaty_dt | process_status_condition | EDIT |
| 4. | ถ้า cf_rig_treaty_dt.process_status_policy = WAPRV อัปเดต | cf_rig_treaty_dt | process_status_policy | EDIT |
| 5. | ถ้า cf_rig_treaty_dt.process_status_ri_premium = WAPRV อัปเดต | cf_rig_treaty_dt | process_status_ri_premium | EDIT |
| 6. | อัปเดตอัปเดตรายการเดิม | cf_rig_treaty | process_status | EDIT |
| **กรณีเลือก ผลพิจารณาเป็น อนุมัติ (APRV)** |
|  | กระบวนการ | Table | Field | ค่าที่บันทึก |
|  | อัปเดตอัปเดตรายการเดิม | cf_rig_treaty | process_status |  |
|  | อัปเดตอัปเดตรายการเดิม | cf_rig_treaty | approve | TRUE บันทึกแค่ครั้งแรกที่อนุมัติครั้งเดียว หรือถ้าอัปเดตก็ต้องอัปเดตเป็น TRUE เสมอ |
|  | อัปเดตอัปเดตรายการใหม่ | cf_rig_treaty_dt | status | A |
|  | อัปเดตอัปเดตรายการใหม่ | cf_rig_treaty_dt | process_status_general | APRV |
|  | อัปเดตอัปเดตรายการใหม่ | cf_rig_treaty_dt | process_status_condition | APRV |
|  | อัปเดตอัปเดตรายการใหม่ | cf_rig_treaty_dt | process_status_policy | APRV |
|  | อัปเดตอัปเดตรายการใหม่ | cf_rig_treaty_dt | process_status_ri_premium | APRV |
|  | ถ้ามีรายการที่มี status เป็น Dอัปเดตรายการเดิมที่ status เป็น A ให้เปลี่ยน status เป็น I | cf_rig_treaty_dt | status | I |
| และอัปเดตรายการใหม่ที่ status เป็น D ให้เปลี่ยน status เป็น A | cf_rig_treaty_dt | status | A |
| ตั้งค่าข้อมูลทั่วไป | ถ้ามีรายการที่มี status เป็น Dอัปเดตรายการเดิมที่ status เป็น A ให้เปลี่ยน status เป็น I | cf_rig_treaty_general | status | I |
| และอัปเดตรายการใหม่ที่ status เป็น D ให้เปลี่ยน status เป็น A | cf_rig_treaty_general | status | A |
| ตั้งค่า RI Condition | ตรวจสอบทุกรายการภายใต้ ID Treaty ที่กำลังจะอนุมัติถ้ามีรายการที่ status เป็น A ให้ตรวจสอบว่าใน child_id มีค่าหรือไม่ถ้าไม่มีไม่ต้องเปลี่ยนแปลงสถานะถ้ามีให้เปลี่ยนสถานะตัวเองเป็น I | cf_rig_treaty_cond_hd | status | I |
| จากนั้นตรวจสอบรายการที่ ID ตรงกับ child_id ถ้ามีสถานะเป็น D ให้เปลี่ยนเป็น A | cf_rig_treaty_cond_hd | status | A |
| ตั้งค่ากรมธรรม์ | ตรวจสอบทุกรายการภายใต้ ID Treaty ที่กำลังจะอนุมัติถ้ามีรายการที่ status เป็น A ให้ตรวจสอบว่าใน child_id มีค่าหรือไม่ถ้าไม่มีไม่ต้องเปลี่ยนแปลงสถานะถ้ามีให้เปลี่ยนสถานะตัวเองเป็น I | cf_rig_treaty_policy_hd | status | I |
| จากนั้นตรวจสอบรายการที่ ID ตรงกับ child_id ถ้ามีสถานะเป็น D ให้เปลี่ยนเป็น A | cf_rig_treaty_policy_hd | status | A |
| ตั้งค่า RI Premium Rate | ตรวจสอบทุกรายการภายใต้ ID Treaty ที่กำลังจะอนุมัติถ้ามีรายการที่ status เป็น A ให้ตรวจสอบว่าใน child_id มีค่าหรือไม่ถ้าไม่มีไม่ต้องเปลี่ยนแปลงสถานะถ้ามีให้เปลี่ยนสถานะตัวเองเป็น I | cf_rig_treaty_prem_rate_hd | status | I |
| จากนั้นตรวจสอบรายการที่ ID ตรงกับ child_id ถ้ามีสถานะเป็น D ให้เปลี่ยนเป็น A | cf_rig_treaty_prem_rate_hd | status | A |
|  | บันทึก cf_treaty_history |  |  |  |


===== PAGE 1317109800 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-8 หน้าจอดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายละเอียดข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดไอคอนนาฬิกาทราย บนรายการ Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty เพื่อเข้าสู่หน้าจอดูรายละเอียด

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบรายละเอียดข้อมูล Treaty
- กดปุ่ม back เพื่อกลับไปแสดงหน้าจอก่อนหน้า
- กดปุ่ม ปิด เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานสามารถดู และตรวจสอบรายละเอียดข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนเงื่อนไขการดูรายละเอียดระหว่างรอพิจารณาข้อมูล Treaty
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | Reinsurer | ชื่อย่อ Reinsurer | Thaire |  |
| 2 | Label | Treaty Code | ชื่อ Treaty | THREL_Grp_PA |  |
| 3 | Label | ชื่อสัญญา | ชื่อสัญญาของ Treaty | Life Reassurance Treaty for Group |  |
| 5 | Label | Start Date | วันที่สามารถเริ่มต้นใช้งานข้อมูลได้ | 01/01/2556 |  |
| 6 | Label | Expire Date | วันที่สิ้นสุดที่สามารถใช้งานข้อมูลได้ | 31/12/3543 |  |
| 7 | Label | Benefit | Benefit ของ Treaty | Life |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition | สถานะเปิดปิดใช้งานการต้งค่า RI Condition | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงค่า RI Method ของ Treaty | Surplus |  |
| 2 | Label | Minimum Sum Assured | แสดงค่า Minimum Sum Assured | 5,000,000.00 |  |
| 3 | Label | RI Commission Rate | แสดงค่า RI Commission Rate | 5.00 |  |
| 4 | Label | Profit Commission Rate | แสดงค่า Profit Commission Rate | 50.00 |  |
| 5 | Label | Administrative expenses | แสดงค่า Administrative expenses | 10.00 |  |
| 6 | Label | Reserve for unearned premiums | แสดงค่า Reserve for unearned premiums | 50.00 |  |
| 7 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 8 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 31/12/3552 |  |
| 9 | Label | Minimum | แสดงค่า Minimum ของแต่ละ Layer | 0 |  |
| 10 | Label | Maximum | แสดงค่า Maximum ของแต่ละ Layer | 5,000,000.00 |  |
| 11 | Label | Percentage Reinsurance | แสดงค่า Percentage Reinsurance ของแต่ละ Layer | 15.52 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ | สถานะเปิดปิดใช้งานการตั้งค่ากรมธรรม์ | Active |  |
| 2 | Icon | ดูรายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |  |  |
| 3 | Label | Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2683 |  |
| 4 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | OLI |  |
| 5 | Label | สถานะใช้งาน | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 6 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 7 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 01/01/2556 |  |
| 8 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | สถานะการกำหนดเปิดปิดการใช้งานกรมธรรม์ | Active |  |
| 2 | Label | Current Policy No. | เลขกรมธรรม์ปัจจุบัน | GA2668 |  |
| 3 | Label | Previous Policy No. | เลขกรมธรรม์ก่อนหน้า | GA2539 |  |
| 4 | Label | Policy Name | ชื่อบริษัทกรมธรรม์ | Somboon Group |  |
| 5 | Label | Reinsured No. | รหัส Reinsurer | TG009 |  |
| 6 | Label | Code Name | ชื่อย่อบริษัทกรมธรรม์ | Somboon |  |
| 7 | Label | Commencement Date | วันที่เริ่มต้นสัญญา | 31/12/3552 |  |
| 8 | Label | Policy Year | ปีกรมธรรม์ | 2 |  |
| 9 | Label | Age Limit | ลิมิตอายุมากที่สุด | 60 |  |
| 10 | Label | Occupation Class | ชั้นอาชีพ | 1 |  |
| 11 | Label | Coverage Period From | วันที่เริ่มคุ้มครองกรมธรรม์ | 31/12/2567 |  |
| 12 | Label | Coverage Period To | วันที่สิ้นสุดความคุ้มครองกรมธรรม์ | 31/12/2568 |  |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | รหัสสมาชิกที่ได้รับการยกเว้น | 00001 , 00002 |  |
| 14 | Label | Remark | หมายเหตุ | - |  |
| 15 | Label | Coverage | แสดง Coverage ของกรมธรรม์ | AD&D Type 2 |  |
| 16 | Label | AD&D | แสดงค่า Percentage AD&D | 100.00 |  |
| 17 | Label | Murder & Assault (MA) | แสดงค่า Percentage Murder & Assault (MA) | 100.00 |  |
| 18 | Label | Special Coverage | แสดงค่า Percentage Special Coverage | 100.00 |  |
| 19 | Label | Loss finger of the same hand | แสดงค่า Percentage Loss finger of the same hand | 100.00 |  |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงค่า Percentage RI Premium Loading for Motorcycle | 100.00 |  |
| 21 | Label | RI Premium Loading for War | แสดงค่า Percentage RI Premium Loading for War | 100.00 |  |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงค่า Percentage RI Premium Loading for Strike and Riot | 100.00 |  |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงค่า Percentage RI Premium Loading for Sports and Activities | 100.00 |  |
| 24 | Label | RI Premium Loading for Aircraft | แสดงค่า Percentage RI Premium Loading for Aircraft | 100.00 |  |
| 25 | Label | Discount for MA | แสดงค่า Percentage Discount for MA | 100.00 |  |
| 26 | Label | Discount Group Volume | แสดงค่า Percentage Discount Group Volume | 100.00 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate | สถานะเปิดปิดใช้งานการตั้งค่า RI Premium Rate | Active |  |
| 2 | Icon | รายละเอียด | เมื่อกด ระบบจะแสดง Popup ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |  |  |
| 3 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 4 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2556 |  |
| 5 | Label | Update Date | วันที่แก้ไขล่าสุด | 01/01/2556 |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 2 | Label | Effective Date To | ช่วงของวันที่เริ่มต้นสัญญา (Promise Date) ที่จะใช้เงื่อนไขข้อมูลนี้สำหรับการประมวลผลได้ | 01/01/2563 |  |
| 3 | Label | RI Premium Rate | จำนวน Rate ต่อ Per (SA) ที่กำหนด ตาม Occupation Class และ Age ที่กำหนด | 1.10 |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back หรือย้อนกลับ เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่าข้อมูลทั่วไป |
| No | Component Type | Component Name | เงื่อนไข |  |
| 1 | Label | Reinsurer | ตรวจสอบที่ cf_rig_treaty.cf_reinsurer_id | cf_reinsurer.reinsurer_name |
| 2 | Label | Treaty Code |  | cf_rig_treaty.treaty_code |
| 3 | Label | ชื่อสัญญา |  | cf_rig_treaty.contract_name |
| 5 | Label | Start Date | แสดงรายการที่มี cf_rig_treaty_general.status = D และรายการcf_rig_treaty_general.status = A ที่ cf_rig_treaty_general.child_id = NULL | cf_rig_treaty_general.start_date |
| 6 | Label | Expire Date | แสดงรายการที่มี cf_rig_treaty_general.status = D และรายการcf_rig_treaty_general.status = A ที่ cf_rig_treaty_general.child_id = NULL | cf_rig_treaty_general.expire_date |
| 7 | Label | Benefit | แสดงรายการที่มี cf_rig_treaty_general.status = D และรายการcf_rig_treaty_general.status = A ที่ cf_rig_treaty_general.child_id = NULL แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000500 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_general.benefit |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Condition |
| 1 | Label | ตั้งค่า RI Condition |  | cf_rig_treaty_dt.status_general |
| 2 | Icon | ดูรายละเอียด | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL |  |
| 3 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_from |
| 4 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_to |
| 5 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่า RI Condition |
| 1 | Label | RI Method | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000600 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_cond_hd.ri_method |
| 2 | Label | Minimum Sum Assured | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.min_sum_assured |
| 3 | Label | RI Commission Rate | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.ri_com_rate |
| 4 | Label | Profit Commission Rate | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.percent_profit_comm |
| 5 | Label | Administrative expenses | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.percent_admin_expense |
| 6 | Label | Reserve for unearned premiums | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.unearn_premium |
| 7 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_from |
| 8 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULL | cf_rig_treaty_cond_hd.effective_date_to |
| 9 | Label | Minimum | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.minimum |
| 10 | Label | Maximum | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.maximum |
| 11 | Label | Percentage Reinsurance | แสดงรายการที่มี cf_rig_treaty_cond_hd.status = D และรายการcf_rig_treaty_cond_hd.status = A ที่ cf_rig_treaty_cond_hd.child_id = NULLcf_rig_treaty_cond_dt.layer | cf_rig_treaty_cond_dt.percent_re |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่ากรมธรรม์ |
| 1 | Label | ตั้งค่ากรมธรรม์ |  | cf_rig_treaty_dt.status_policy |
| 2 | Icon | ดูรายละเอียด | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL |  |
| 3 | Label | Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_no |
| 4 | Label | Code Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.code_name |
| 5 | Label | สถานะใช้งาน | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.usage_process_status |
| 6 | Label | Coverage Period From | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_from |
| 7 | Label | Coverage Period To | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_to |
| 8 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียด ตั้งค่ากรมธรรม์ |
| 1 | Label | เปิด/ปิดใช้งานกรมธรรม์ | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.usage_process_status |
| 2 | Label | Current Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_no |
| 3 | Label | Previous Policy No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.previous_policy |
| 4 | Label | Policy Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_name |
| 5 | Label | Reinsured No. | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.reinsurer_no |
| 6 | Label | Code Name | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.code_name |
| 7 | Label | Commencement Date | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.com_date |
| 8 | Label | Policy Year | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.policy_year |
| 9 | Label | Age Limit | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.age_limit |
| 10 | Label | Occupation Class | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.occ_class |
| 11 | Label | Coverage Period From | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_from |
| 12 | Label | Coverage Period To | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.coverage_period_to |
| 13 | Label | CertNo. ที่อายุเกินและไม่ได้รับการอนุโลม | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.cert_no_incompliant |
| 14 | Label | Remark | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.remark |
| 15 | Label | Coverage | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL แปลงค่าที่ดึงมาจาก แยกรายการตาม , และเทียบค่ากับ cf_lookup_catalog.lookup_key ที่ parent_id = 1000800 แสดงค่า cf_lookup_catalog.description | cf_rig_treaty_policy_hd.coverage |
| 16 | Label | AD&D | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.percent_add |
| 17 | Label | Murder & Assault (MA) | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.murder_assault |
| 18 | Label | Special Coverage | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.special_coverage |
| 19 | Label | Loss finger of the same hand | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.loss_finger |
| 20 | Label | RI Premium Loading for Motorcycle | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_motorcycle |
| 21 | Label | RI Premium Loading for War | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_war |
| 22 | Label | RI Premium Loading for Strike and Riot | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_strike_riot |
| 23 | Label | RI Premium Loading for Sports and Activities | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_sports_activities |
| 24 | Label | RI Premium Loading for Aircraft | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.prem_aircraft |
| 25 | Label | Discount for MA | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.discount_murder_assualt |
| 26 | Label | Discount Group Volume | แสดงรายการที่มี cf_rig_treaty_policy_hd.status = D และรายการcf_rig_treaty_policy_hd.status = A ที่ cf_rig_treaty_policy_hd.child_id = NULL | cf_rig_treaty_policy_hd.discount_group_vol |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - ตั้งค่า RI Premium Rate |
| 1 | Label | ตั้งค่า RI Premium Rate |  | cf_rig_treaty_dt.status_ri_premium |
| 2 | Icon | รายละเอียด | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL |  |
| 3 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 4 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 5 | Label | Update Date | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.updated_date |
| ส่วนแสดงรายละเอียดข้อมูล Treaty - รายละเอียดตั้งค่า RI Premium Rate |
| 1 | Label | Effective Date From | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_from |
| 2 | Label | Effective Date To | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULL | cf_rig_treaty_prem_rate_hd.effective_date_to |
| 3 | Label | RI Premium Rate | แสดงรายการที่มี cf_rig_treaty_prem_rate_hd.status = D และรายการcf_rig_treaty_prem_rate_hd.status = A ที่ cf_rig_treaty_prem_rate_hd.child_id = NULLcf_rig_treaty_prem_rate_hd.typecf_rig_treaty_prem_rate_hd.occ_classcf_rig_treaty_prem_rate_hd.min_agecf_rig_treaty_prem_rate_hd.max_age | cf_rig_treaty_prem_rate_hd.premium_rate |


===== PAGE 1317109802 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-006 กระบวนการจัดการข้อมูล Treaty > RIG-SD-006-9 หน้าจอดูประวัติเปลี่ยนสถานะข้อมูล Treaty =====
### หน้าจอหลัก : Screen Design

### วัตถุประสงค์ (Objective)
- เพื่อใช้แสดง และตรวจสอบประวัติการเปลี่ยนสถานะของข้อมูล Treaty

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- เลือกรายการเพื่อดูประวัติเปลี่ยนสถานะข้อมูล Treaty จากหน้าจอ BD-CF-002-SD001 หน้าจอจัดการข้อมูล Treaty

### การกระทำกับหน้าจอ (Actions)
- ตรวจสอบประวัติเปลี่ยนสถานะข้อมูล Treaty
- กดปุ่ม Back เพื่อกลับไปแสดงหน้าจอก่อนหน้า

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน
- ผู้ใช้งานได้ทราบถึงข้อมูลประวัติเปลี่ยนสถานะข้อมูล Treaty ได้อย่างถูกต้องครบถ้วน

### การจัดการข้อผิดพลาด (Exceptional Handling)
- หน้าจอนี้เป็นหน้าจอสำหรับแสดงข้อมูลเท่านั้น จึงไม่มีการจัดการข้อผิดพลาดในกระบวนการบันทึกข้อมูล

### รายละเอียดส่วนดูประวัติเปลี่ยนสถานะข้อมูล Treaty
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Label | วันและเวลาดำเนินการ |  | 25/06/2568 00:27:14 | แสดงวันและเวลาที่มีการดำเนินการเปลี่ยนสถานะข้อมูล Treaty ในระบบ |
| 2 | Label | เจ้าหน้าที่ดำเนินการ |  | edw_actuarial_02 | แสดงชื่อผู้ใช้งานที่ทำรายการ |
| 3 | Label | Action |  | ส่งกลับแก้ไข | แสดงผลการดำเนินการ ดังนี้รอส่งพิจารณา: ข้อมูลถูกบันทึกครบแล้ว และรอการส่งให้ Checker ตรวจสอบข้อมูลพิจารณารอพิจารณา: ข้อมูลถูกส่งให้ Checker แล้ว และกำลังรอผลการพิจารณาส่งกลับแก้ไข: Checker ส่งรายการกลับให้แก้ไขข้อมูลอนุมัติ: Checker อนุมัติข้อมูลเรียบร้อย และสามารถนำไปใช้งานได้ |
| 4 | Label | หมายเหตุ |  | ส่งกลับแก้ไขส่วนวันที่ |  |

### รายละเอียดเงื่อนไขปุ่ม
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Button | back | enable | เมื่อดูข้อมูลเรียบร้อยแล้ว ผู้ใช้งานจะกดปุ่ม back เพื่อปิดหน้าจอด้งกล่าว แล้วกลับสู่หน้าจอก่อนหน้า |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name |  |
| 1 | Label | วันและเวลาดำเนินการ | cf_treaty_history.created_date |
| 2 | Label | เจ้าหน้าที่ดำเนินการ | cf_treaty_history.created_by |
| 3 | Label | Action | cf_treaty_history.his_action |
| 4 | Label | หมายเหตุ | cf_treaty_history.his_remark |


===== PAGE 1314423441 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate =====
| การแสดงหน้าจอของ Maker |  |
|  | การแสดงผลสำหรับ Maker ซึ่งสามารถดาวน์โหลดไฟล์ กดประมวลผลซ้ำ ยืนยันการประมวลผลหรือยกเลิกการประมวลผลได้ |
| การแสดงหน้าจอของ Checker |  |
|  | การแสดงผลสำหรับ Checker ซึ่งสามารถดาวน์โหลดไฟล์ เพื่อตรวจสอบได้ |

### วัตถุประสงค์ (Objective)
- เพื่อใช้ตรวจสอบรายการผลการประมวลผล Estimate

### ผู้ใช้งาน (Target Users)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)
- เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Checker)

### เงื่อนไขก่อนการทำงาน (Pre-Condition)
- กดเข้าเมนู Estimate

### การกระทำกับหน้าจอ (Actions)
- ค้นหารายการผลการประมวลผล Estimate
- ดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ดาวน์โหลดไฟล์ Master i-Report เพื่อตรวจสอบ
- ประมวลผลรายการที่ถูกยกเลิกใหม่
- ประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ยกเลิกรายการประมวลผล
- ยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW
- ส่งข้อมูลเข้าระบบ MPS ซ้ำกรณีที่ระบบไม่สามารถส่งข้อมูลอัตโนมัติได้

### เงื่อนไขหลังการทำงาน (Post-Condition)
- ผลลัพธ์ที่คาดหวังว่าจะเกิดขึ้นหลังจากผู้ใช้งานดำเนินการเสร็จสิ้นบนหน้าจอนี้ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Estimateผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบผู้ใช้งานสามารถดาวน์โหลดไฟล์ Master i-Report เพื่อตรวจสอบผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จผู้ใช้งานสามารถยกเลิกรายการประมวลผลผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDWผู้ใช้งานสามารถส่งข้อมูลเข้าระบบ MPS ซ้ำกรณีที่ระบบไม่สามารถส่งข้อมูลอัตโนมัติได้
- ผู้ใช้งานสามารถค้นหารายการผลการประมวลผล Estimate
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Bordereau Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ SOA Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถดาวน์โหลดไฟล์ Master i-Report เพื่อตรวจสอบ
- ผู้ใช้งานสามารถประมวลผลรายการที่ถูกยกเลิกใหม่
- ผู้ใช้งานสามารถประมวลผลรายการที่ประมวลผลไม่สำเร็จ
- ผู้ใช้งานสามารถยกเลิกรายการประมวลผล
- ผู้ใช้งานสามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW
- ผู้ใช้งานสามารถส่งข้อมูลเข้าระบบ MPS ซ้ำกรณีที่ระบบไม่สามารถส่งข้อมูลอัตโนมัติได้

### การจัดการข้อผิดพลาด (Exceptional Handling)
- สถานการณ์ที่ผิดปกติหรือข้อผิดพลาดที่อาจเกิดขึ้นและวิธีการที่ระบบควรจัดการกับสถานการณ์เหล่านั้นไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบไม่สามารถส่งข้อมูลเข้าระบบ MPS ซ้ำกรณีที่ระบบไม่สามารถส่งข้อมูลอัตโนมัติได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ถูกยกเลิกได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถประมวลผลซ้ำรายการที่ประมวลผลไม่สำเร็จได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถยืนยันรายการประมวลผลและส่งข้อมูลไปยังระบบ EDW ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
- ไม่สามารถส่งข้อมูลเข้าระบบ MPS ซ้ำกรณีที่ระบบไม่สามารถส่งข้อมูลอัตโนมัติได้ ให้ Capture หน้าจอแจ้งเตือนและแจ้งให้ IT รับทราบ
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | ข้อมูลประจำเดือน | โปรดระบุ | แสดงข้อมูลรายการ Period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569/01 |  |
| 2 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมด | Gibraltar |  |
| 3 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมด | GIB_Grp_Direct_EB |  |
| 4 | Dropdown List | สถานะรายการ | ทั้งหมด | แสดงข้อมูลรายการสถานะการประมวลผล Estimateรอประมวลผลประมวลผลไม่สำเร็จรอยืนยันรายการยกเลิกรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau | รอประมวลผล |  |
| 5 | Text | ปี ค.ศ. | ค่าว่าง | แปลข้อมูลประจำเดือนในข้อ 1 ให้เป็นปี ค.ศ. | 2026/01 |  |
| 6 | Dropdown List | สถานะรายการ EDW | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Estimate จาก EDWรอพิจารณาข้อมูล STD Templateรอส่งขออนุมัติเข้า EDWอนุมัติเข้า EDWไม่อนุมัติเข้า EDWยกเลิกข้อมูลกำลังดำเนินการประมวลผลไม่สำเร็จรอพิจารณาอนุมัติเข้า EDW | รอพิจารณาข้อมูล STD Template |  |
| 7 | Dropdown List | สถานะรายการ MPS | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Estimate ไปยัง MPSกำลังดำเนินการยืนยันนำเข้าข้อมูลสำเร็จยืนยันนำเข้าไม่สำเร็จ | กำลังดำเนินการ |  |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Action / Data Value | Example | Remark |
| 1 | Button | ยืนยันข้อมูล | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Estimateสถานะข้อมูลเป็น Dropdown Listยกเลิกรายการยืนยันรายการ Bordereauกรณียกเลิกรายการ ระบบจะบังคับกรอกหมายเหตุ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 2 | Icon | เลือกรายการ | เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มยืนยันข้อมูลจะสามารถกดได้ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอยืนยันรายการ" |
| 3 | Icon | ดำเนินการ | เมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำ |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการ |
| 4 | Icon | Bordereau Report | เมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ Bordereau Report ของรายการนั้น |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 5 | Icon | SOA Report | เมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ SOA Report ของรายการนั้น |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 6 | Icon | EDW Import | เมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ EDW Import ของรายการนั้น |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 7 | Icon | Master i-Report | เมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ Master i-Report ของรายการนั้น |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 8 | Label | ข้อมูลประจำเดือน | Closing Period ที่ประมวลผล | 2568/10 |  |
| 9 | Label | Reinsurer | ชื่อย่อ Reinsurer | Gibraltar |  |
| 10 | Label | Treaty Code | ชื่อ Treaty | GIB_Grp_Direct_EB |  |
| 11 | Label | สถานะรายการ | สถานะการประมวลผลรายการ Estimate | รอยืนยันรายการ |  |
| 12 | Label / Button | สถานะรายการ MPS | สถานะการส่งข้อมูลไปยังระบบ MPSกรณีที่รายการมีสถานะ ยืนยันนำเข้าไม่สำเร็จ ข้อความจะกลายเป็นปุ่มเพื่อให้ผู้ใช้งานสามารถส่งข้อมูลซ้ำได้ | กำลังดำเนินการ |  |
| 13 | Label | สถานะรายการ EDW | สถานะการส่งข้อมูลไปยังระบบ EDW | อนุมัติเข้า EDW |  |
| 14 | Label | RI Premium (รับ+/จ่าย-) | ผลรวมของ RI Premium และ RI Premium Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 |  |
| 15 | Label | RI Commission (รับ+/จ่าย-) | ผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 915.04 |  |
| 16 | Label | Claim Recovery (รับ+/จ่าย-) | ผลรวมของ Claim Recovery ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 1,000.04 |  |
| 17 | Label | Due to(+)/From(-) OLI | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-) และ Claim Recovery (รับ+/จ่าย-)กรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -27,415.88 |  |
| 18 | Label | ผู้ดำเนินการ | ชื่อผู้ดำเนินการล่าสุด | suthanee.sa |  |
| 19 | Label | หมายเหตุ | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล |  |  |
| 20 | Label | Update Date | วันที่ดำเนินการล่าสุด | 29/09/2568 10:52:04 |  |

# Functional Specification
ส่วนการค้นหาข้อมูล
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | ข้อมูลประจำเดือน | โปรดระบุ | แสดงข้อมูลรายการ Period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569/01 |  |
| 2 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดใน Table cf_reinsurer เฉพาะรายการที่มี cf_reinsurer.status เท่ากับ A | Gibraltar | cf_reinsurer.reinsurer_codeที่ cf_reinsurer.status = A(suthanee.sa 26/02/2026) |
| 3 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมดใน Table cf_rig_treaty | GIB_Grp_Direct_EB | cf_rig_treaty.treaty_codeที่ cf_rig_treaty.status = A |
| 4 | Dropdown List | สถานะรายการ | ทั้งหมด | แสดงข้อมูลรายการสถานะการประมวลผล Estimate จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001300 | รอประมวลผล |  |
| 5 | Text | ข้อมูลประจำเดือน | ค่าว่าง | แปลข้อมูลประจำเดือนในข้อ 1 ให้เป็นปี ค.ศ. | 2026/01 |  |
| 6 | Dropdown List | สถานะรายการ EDW | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Estimate จาก EDW จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001700 | รอพิจารณาข้อมูล STD Template |  |
| 7 | Dropdown List | สถานะรายการ MPS | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Estimate ไปยัง MPS จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001900 | กำลังดำเนินการ |  |
ส่วนการแสดงข้อมูล
| ตารางแสดงข้อมูลผลการค้นหา |
| 1 | การเรียงลำดับข้อมูล |  | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  | แสดงข้อมูลจาก Table tx_rig_est_hdที่ tx_rig_est_hd.usage_status เท่ากับ A |
| ส่วนการแสดงข้อมูล |
| No | Component Name | Component Type | Description | Validation/ Action | Remark |
| 1 | ยืนยันข้อมูล | Button |  | Center | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Estimateสถานะข้อมูลเป็น Dropdown List จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001400กรณียกเลิกรายการ ระบบจะบังคับกรอกหมายเหตุกรณีเลือก "ยืนยันรายการ Bordereau"เรียกใช้ Process RIG-PS-10 ส่งข้อมูล Estimate เข้า EDW และ RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS (*31/03/26)โดยจะเรียก Process RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS กรณีที่ tx_rig_est_hd.mps_status เป็นค่าว่าง หรือ "100" (ยืนยันนำเข้าไม่สำเร็จ) (*31/03/26)บันทึก "PROCESSINGEDW" ใน tx_rig_est_hd.status กรณีรายการนั้นไม่มีข้อมูลผลการประมวลผลใด ๆ เลยใน tx_rig_est_policy_hd (ทั้ง Premium และ Claim) ให้เปลี่ยนสถานะเป็น "ยืนยันรายการ Bordereau" (APPROVE) แต่ไม่ต้องส่งค่าใด ๆ ไปที่ EDW (suthanee.sa 08/06/2026)กรณีเลือก "ยกเลิกรายการ"บันทึก "CANCEL" tx_rig_est_hd.statusลบข้อมูลกรมธรรม์ที่บันทึกเพิ่มในรอบการประมวลผลนี้ที่ tx_rig_policy_baseรายการที่ tx_rig_est_hd.closing_period = tx_rig_policy_base.periodรายการที่ tx_rig_est_hd.treaty_code = tx_rig_policy_base.treaty_code |
| 2 | เลือกรายการ | Icon |  | Center | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมี tx_rig_est_hd.status สถานะ "รอยืนยันรายการ" และ "ยืนยันนำเข้าไม่สำเร็จ"เมื่อกดปุ่ม ระบบจะเลือกรายการนั้น และปุ่มยืนยันข้อมูลจะสามารถกดได้ |
| 3 | ดำเนินการประมวลผลซ้ำ | Icon |  | Center | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมี tx_rig_est_hd.status สถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำกรณีกดยกเลิก ให้ปิดหน้าจอ popupกรณีกดตกลงให้เรียก Process RIG-PS-06 ประมวลผล Estimate เฉพาะ Treaty นั้นให้อัปเดท tx_rig_est_hd.usage_status = I แล้วเข้ากระบวนการสร้างรายการใหม่ให้เรียก Process RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS เพื่อส่งข้อมูลเข้าไปใหม่ทุก Treaty ตามรอบประมวลผล (*31/03/26) |
| 4 | Bordereau Report | Icon |  | Center | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมี tx_rig_est_hd.status สถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereauเมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ Bordereau Report ของรายการนั้น โดยการส่งค่าtx_rig_est_hd.treaty_code และ tx_rig_est_hd.closing_periodtx_rig_est_hd.treaty_codeไฟล์ Bordereau ReportDAI_Grp_Daiichi_CoinsRIG-RP-008 BDR Est_Daiichi_{YYYY}{MM}THREL_Grp_PARIG-RP-010 BDR Est_Thaire_{YYYY}{MM}GIB_Grp_Direct_EBRIG-RP-009 BDR Est_GIB_{YYYY}{MM} |
| 5 | SOA Report | Icon |  | Center | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereauเมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ SOA Report ของรายการนั้น RIG-RP-011 SOA_Est_{YYYY}{MM} โดยการส่งค่าtx_rig_est_hd.treaty_code และ tx_rig_est_hd.closing_periodtx_rig_est_hd.treaty_codeไฟล์ Bordereau ReportDAI_Grp_Daiichi_CoinsRIG-RP-011 SOA_Est_{YYYY}{MM}THREL_Grp_PARIG-RP-011 SOA_Est_{YYYY}{MM}GIB_Grp_Direct_EBRIG-RP-011 SOA_Est_{YYYY}{MM} |
| 6 | EDW Import | Icon |  | Center | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereauเมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ EDW Import ของรายการนั้น โดยการส่งค่าtx_rig_est_hd.treaty_code และ tx_rig_est_hd.closing_periodtx_rig_est_hd.treaty_codeไฟล์ Bordereau ReportDAI_Grp_Daiichi_CoinsRIG-RP-023 BDR Est_Daiichi_{YYYY}{MM} (EDW)THREL_Grp_PARIG-RP-024 BDR Est_Thaire_{YYYY}{MM} (EDW)GIB_Grp_Direct_EBRIG-RP-022 BDR Est_GIB_{YYYY}{MM} (EDW) |
| 7 | Master I-Report | Icon |  | Center | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereauเมื่อกดปุ่ม ระบบจะดาวน์โหลดไฟล์ Master I-Report ของรายการนั้น RIG-RP-012 I_Master_{YYYY}{MM} โดยการส่งค่าtx_rig_est_hd.treaty_code และ tx_rig_est_hd.closing_periodtx_rig_est_hd.treaty_codeไฟล์ Bordereau ReportDAI_Grp_Daiichi_CoinsRIG-RP-012 I_Master_{YYYY}{MM}THREL_Grp_PARIG-RP-012 I_Master_{YYYY}{MM}GIB_Grp_Direct_EBRIG-RP-012 I_Master_{YYYY}{MM} |
| 8 | ข้อมูลประจำเดือน | Label | แสดง Closing Period ที่ประมวลผล | Center | tx_rig_est_hd.closing_period |
| 9 | Reinsurer | Label | แสดงชื่อย่อ Reinsurer | Left | tx_rig_est_hd.cf_reinsurer_id ไปหาข้อมูลใน cf_reinsurer.cf_reinsurer_idนำ cf_reinsurer.reinsurer_name มาแสดง |
| 10 | Treaty Code | Label | แสดงชื่อ Treaty | Left | tx_rig_est_hd.treaty_code |
| 11 | สถานะรายการ | Label | แสดงสถานะการประมวลผลรายการ Estimate | Left | tx_rig_est_hd.statusLookup ที่ cf_lookup_catalog parent_id = 1001300 |
| 12 | สถานะรายการ MPS | Label / Button | แสดงสถานะการส่งข้อมูลไปยังระบบ MPS | Center | tx_rig_est_hd.edw_statusให้เรียก Process RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS ส่งอัตโนมัติทุกครั้ง กรณีที่รายการมีสถานะ ยืนยันนำเข้าไม่สำเร็จ ข้อความจะกลายเป็นปุ่มเพื่อให้ผู้ใช้งานสามารถส่งข้อมูลซ้ำได้ Lookup ที่ cf_lookup_catalog parent_id = 1001900กรณีรายการนั้นไม่มีข้อมูลผลการประมวลผลใด ๆ เลยใน tx_rig_est_policy_hd (ทั้ง Premium และ Claim) ให้เปลี่ยนสถานะเป็น "ยืนยันนำเข้าข้อมูลสำเร็จ" (7) อัตโนมัติ แต่ไม่ต้องส่งค่าใด ๆ ไปที่ MPS (suthanee.sa 08/06/2026)สถานะlookup_keyรูปแบบค่าสีConditionยืนยันนำเข้าไม่สำเร็จ100ปุ่มกด#f44336Enable ปุ่มกด เมื่อ tx_rig_est_hd.status = 'SUCCESS' , 'WAITRE' , 'APPROVE' , 'SENDERR' , 'PROCESSINGEDW'tx_rig_est_hd.mps_status เป็น "100" (ยืนยันนำเข้าไม่สำเร็จ)Disable ปุ่มกด เมื่อ tx_rig_est_hd.status = 'CANCEL' , 'ERROR' , 'PROCESSING'tx_rig_est_hd.mps_status เป็น "1" (กำลังดำเนินการ) หรือ "7" (ยืนยันนำเข้าข้อมูลสำเร็จ)สามารถกดเพื่อส่งข้อมูลอีกครั้งได้ โดยเมื่อกดจะเรียกใช้ RIG-PS-11 ส่งข้อมูล Estimate เข้า MPS โดยจะส่งเฉพาะรายการที่กดเท่านั้นข้อมูลTable ข้อมูลFieldParameterตัวอย่างข้อมูลID ของรายการtx_rig_est_hd rig_est_hd_id{EST_HD_ID}1Reinsurertx_rig_est_hd reinsurer_code{REINSURER_CODE}ThaireTreaty Codetx_rig_est_hd treaty_code{TREATY_CODE}THREL_Ind_CI50_RiderClosing Periodtx_rig_est_hd closing_period{CLOSING_PERIOD}202312ยืนยันนำเข้าข้อมูลสำเร็จ7ข้อความ#11b719 กำลังดำเนินการ1ข้อความ#00a6ce |
| 13 | สถานะรายการ EDW | Label | แสดงสถานะการส่งข้อมูลไปยังระบบ EDW | Center | tx_rig_est_hd.edw_status_descLookup ที่ cf_lookup_catalog parent_id = 1001700สถานะlookup_keyค่าสีรอพิจารณาข้อมูล STD Template1#00a6ceรอส่งขออนุมัติเข้า EDW2#00a6ceอนุมัติเข้า EDW3#11b719ไม่อนุมัติเข้า EDW4#f44336ยกเลิกข้อมูล5#f44336กำลังดำเนินการ9#00a6ceประมวลผลไม่สำเร็จ11#f44336 |
| 14 | RI Premium (รับ+/จ่าย-) | Label | แสดงผลรวมของ RI Premium และ RI Premium Refund ทั้งหมดใน Treaty | Right | tx_rig_est_hd.ri_premiumกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง |
| 15 | RI Commission (รับ+/จ่าย-) | Label | แสดงผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treaty | Right | tx_rig_est_hd.ri_commissionกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง |
| 16 | Claim Recovery (รับ+/จ่าย-) | Label | ผลรวมของ Claim Recovery ทั้งหมดใน Treaty | Right | tx_rig_est_hd.claim_recoveryกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง |
| 17 | Due to(+)/From(-) OLI | Label | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-) และ Claim Recovery (รับ+/จ่าย-) | Right | tx_rig_est_hd.due_toกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง |
| 18 | ผู้ดำเนินการ | Label | ชื่อผู้ดำเนินการล่าสุด | Left | tx_rig_est_hd.updated_by |
| 19 | หมายเหตุ | Label | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล | Left | tx_rig_est_hd.remark |
| 20 | Update Date | Label | วันที่ดำเนินการล่าสุด | Left | tx_rig_est_hd.updated_date |


===== PAGE 1314947807 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate > RIG-SD-007-1 หน้าจอหลัก =====
(empty page)


===== PAGE 1314947809 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate > RIG-SD-007-2 ส่วนการแสดง Overview =====
(empty page)


===== PAGE 1314947812 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate > RIG-SD-007-3 เงื่อนไขการค้นหา =====
(empty page)


===== PAGE 1314947815 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-007 หน้าจอ จัดการข้อมูลประมวลผล Estimate > RIG-SD-007-4 ส่วนการแสดงข้อมูล =====
(empty page)


===== PAGE 1314423443 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual =====
# [ Software Requirement Specification ] [ Functional Specification ]

# Software Requirement Specification
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

# Functional Specification
ส่วนการค้นหาข้อมูล
| No | Component Type | Component Name | Default Value | Validation Rules/Action | Example | Remark |
| 1 | Dropdown List | ข้อมูลประจำเดือน | โปรดระบุ | แสดงข้อมูลรายการ Quarter Period ปัจจุบันและย้อนหลังไปอีก 2 ปี | 2569/Q1 |  |
| 2 | Dropdown List | Reinsurer | ทั้งหมด | แสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดใน Table cf_reinsurer เฉพาะรายการที่มี cf_reinsurer.status เท่ากับ A | Gibraltar |  |
| 3 | Dropdown List | Treaty | ทั้งหมด | แสดงข้อมูลรายการ Treaty ที่ถูกสร้างขึ้นทั้งหมดใน Table cf_rig_treaty | GIB_Grp_Direct_EB |  |
| 4 | Dropdown List | สถานะรายการ | ทั้งหมด | แสดงข้อมูลรายการสถานะการประมวลผล Actual จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001500 | รอประมวลผล |  |
| 5 | Text | ปี ค.ศ. | ค่าว่าง | แปลข้อมูลประจำเดือนในข้อ 1 ให้เป็นปี ค.ศ. | 2026/01 |  |
| 6 | Dropdown List | สถานะรายการ EDW | ทั้งหมด | แสดงข้อมูลรายการสถานะการยืนยันข้อมูล Actual จาก EDW จาก cf_lookup_catalog เฉพาะรายการที่มี cf_lookup_catalog.parent_id เท่ากับ 1001800 | รอพิจารณาข้อมูล STD Template |  |
| 7 | Button | ล้างเงื่อนไข | Enable | กดเพื่อล้างเงื่อนไขสู่ Default value |  |  |
| 8 | Button | ค้นหา | Enable | กดเพื่อค้นหาข้อมูลตามเงื่อนไข |  |  |
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล |  |  | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Deafault Value | สิทธิ์ | Action / Data Value | Example | Remark |
| 1 | Button | ประมวลผล Profit commission | enable | Maker | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Profit commissionหน้าจอแสดง Popup ประมวลผล profit Commission กรณียังไม่ระบุข้อมูลกรณีประมวลผล Actual ไม่ครบปีบางรายการระบบไม่อนุญาตให้ดำเนินการกรณีประมวลผล Actual ครบปีทุกรายการระบบอนุญาตให้ดำเนินการกรณีเลือกมากกว่า 1 Treaty Codeกรณีประมวลผลไปแล้ว 2 TreatyNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListYearกรุณาระบุแสดงข้อมูลรายการ ปีปัจจุบันและย้อนหลังไปอีก 2 ปีบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดงรายการปีปัจจุบันไปจนถึงย้อนหลัง 2 ปีกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาเลือกปี"แสดงเป็นปี พ.ศ.2569 2Textค.ศ.ค่าว่างแปลงข้อมูลปีในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Year ระบบจะแสดงปี ค.ศ. จาก Year ที่ระบุ2026 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดง Reinsurer Code List รายการจาก cf_reinsurer.reinsurer_code ที่มี cf_reinsurer.status = A เท่านั้นผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Reinsurer Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Reinsurer"Thaire 4Dropdown ListTreaty Codeทั้งหมดแสดงข้อมูลรายการ Treaty ที่ถูกสร้างภายใต้ Reinsurer ที่ระบุ ใน Table cf_rig_treatyแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุ กรณีเลือก Reinsurer แล้ว แสดงเป็น ทั้งหมดเมื่อกด Dropdown แสดง Treaty Code List รายการจาก cf_rig_treaty.treaty_code ที่มี cf_rig_treaty.status = A cf_rig_treaty.approve is truecf_rig_pc_treaty.status = 'A'ผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Treaty Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาระบุTreaty Code"THREL_Grp_PA ส่วนแสดงข้อมูล5Buttonยกเลิก Profit Comm.hidehide เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น enable เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น กดเพื่อยกเลิกรายการ Profit Comm. ของ Treaty ที่เลือกระบบ update tx_rig_profit_hd.status = 'CANCEL' 6Check boxเลือกun checkedenable เมื่อ ทุก Q เป็น และ สถานะประมวลผล Profit Comm. (DONE) เป็น hide เมื่อ Q เป็น หรือ DONE เป็น กดเพื่อเลือกรายการสำหรับประมวลผล Profit commสามารถเลือกได้มากกว่า 1 รายการ treaty (ถ้ามี) 7LabelTreaty Codeไม่พบข้อมูลแสดงข้อมูลรายการ Treaty ที่พบ และ Icon สำหรับแสดงสถานะการประมวล Actual ของแต่ละ Quater ภายใต้ Quarter year และ Reinsurer ที่พบข้อมูล โดยระบบจะแสดงผลระดับ Treatyกรณีใน Quarter นั้นประมวลผลแล้ว แสดง เครื่องหมาย ใน Quarter นั้นยังไม่ประมวลผลแล้ว แสดง เครื่องหมาย โดยตรวจสอบการแสดงผลดังนี้นำ cf_rig_pc_treaty.cf_treaty_id ตรวจสอบกับ tx_rig_act_hd.cf_treaty_idNameTableFieldConditionTreaty Codecf_rig_pc_treaty, tx_rig_act_hdcf_rig_pc_treaty.treaty_codecf_rig_pc_treaty.cf_treaty_id = tx_rig_act_hd.cf_treaty_id tx_rig_act_hd.status = 'SUCCESS' cf_rig_pc_treaty.status = 'A' cf_rig_treaty.approve is trueQ1tx_rig_act_hdclosing_quartertx_rig_act_hd.quarter = 1 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q2tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 2 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q3tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 3 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q4tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 4 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then THREL_Grp_PA 8IconQ1ไม่พบข้อมูล 9IconQ2ไม่พบข้อมูล 10IconQ3ไม่พบข้อมูล 11IconQ4ไม่พบข้อมูล 12IconSOAไม่พบข้อมูลแสดง SOA flagSOA Flag สำหรับรองรับกรณีต้องการเลือกประมวลผล Profit Comm. มากกว่า 1 Treaty เพื่อกำหนดยอด Profit Comm. ไปบันทึกใน SOA ที่ต้องการDisable กรณีมี Treaty เดียว ให้ default เป็น trueEnable กรณีเลือก check box มากกว่า 1 รายการกรณีเลือก check box Treaty A และ Treaty Bให้ default SOA flag = true ที่รายการแรกกรณีกด SOA flag ที่ Treaty B รายการ Treaty A จะ flase โดยอัติโนมัติ เนื่องจากกำหนดให้เลือกได้เพียงรายการเดียวต่อ กลุ่มข้อมูลที่ระบุเท่านั้นหลังจากประมวลผลสำเร็จ (DONE เป็น ) Disableดึงข้อมูลจาก tx_rig_profit_dt.soa_flag 13IconDONEไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Profit Comm. ของแต่ละ TreatyDefault เป็น กรณียังไม่เคยประมวลผลกรณีใน Treaty นั้นประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย tx_rig_profit_hd.status = 'SUCCESS'กรณี tx_rig_profit_hd.status <> 'SUCCESS' แสดง เครื่องหมาย 14Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 15Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Year, Reinsurer และ Treaty Code ระบบจะค้นหาข้อมูล Actual ที่ถูกประมวลผลภายใต้เงื่อนไขที่ระบุกรณีพบข้อมูลระบบจะตรวจสอบดังนี้ประมวลผล Actual ครบแล้วทั้ง 4 Quarter ทุก Treaty (แสดง เครื่องหมาย ทั้ง 4 Q) เลือกรายการข้อมูลที่ไม่เคยประมวลผลหรือถูกยกเลิก (DONE เป็น ) ระบบ enable ปุ่มและอนุญาตประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อประมวลผล Profit commission ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupกรณีกด ยืนยัน ระบบประมวลผลข้อมูลตามกระบวนการ RIG-PS-09 Profit Commissionกรณีเลือกรายการที่มีประมวลผล Actual ไม่ครบ 4 Quarter (แสดง เครื่องหมาย อย่างน้อย 1 Q) ระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผลกรณีเลือกรายการที่มีสถานะ DONE เป็น เนื่องจากประมวลแล้วระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผลซ้ำกรณีเลือกรายการที่มีสถานะ DONE เป็น และ ประมวลผล Actual ครบทุก Quarter ระบบ enable ปุ่มและอนุญาตให้ประมวลผล |  |  |
| 2 | Button | ประมวลผล Actual | enable | Maker | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Actual*กรณีที่ประมวลผล Quarter นั้นของ Treaty ใดๆไปแล้ว จะไม่สามารถประมวลผลผ่านปุ่มนี้ได้อีก ต้องไปดำเนินการยกเลิกแล้วประมวลผลซ้ำตามรายการเท่านั้นหน้าจอแสดง Popup ประมวลผลข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListPeriodกรุณาระบุแสดงข้อมูลรายการ Quarter year/ Quarter period ปัจจุบันและย้อนหลังไปอีก 2 ปีบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุList รายการ ดูจาก system date แสดง YYYY/QQ และ นับถอยจาก system date ไป 2 ปีมกราคมถึงมีนาคม = Q1เมษายนถึงมิถุนายน = Q2กรกฎาคมถึงกันยายน = Q3ตุลาคมถึงธันวาคม = Q4covert เป็นปี พ.ศ.กรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Period"2568/Q1 2Textค.ศ.ค่าว่างแปลง Period ในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Period ระบบจะแสดงปี ค.ศ. จากข้อมูลที่ระบุ2025/Q1 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาเลือกเมื่อกด Dropdown แสดง Reinsurer Code List รายการจาก cf_reinsurer.reinsurer_code ที่มี cf_reinsurer.status = A เท่านั้นผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Reinsurer Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาเลือก Reinsurer"Thaire 4Dropdown ListTreaty Codeกรุณาระบุบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดง Treaty Code List รายการจาก cf_rig_treaty.treaty_code ที่มี cf_rig_treaty.status = A cf_rig_treaty.approve is truecf_rig_pc_treaty.status = 'A'เป็น Treaty ที่อยู่ภายใต้ Reinsurer ที่เลือกเท่านั้นกรณียังไม่เลือก Reinsurer แสดงข้อความ "ไม่พบข้อมูล" ผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Treaty Code ในรูปแบบ Auto Completeเมื่อเลือก Treaty แล้ว ให้นำ cf_rig_treaty.treaty_code ไปตรวจสอบที่ tx_rig_act_hdกรณี tx_rig_act_hd.quarter_year/tx_ri_act_hd.quarter = Period (YYYY/QQ)กรณีตรวจสอบแล้วไม่พบรายการ Treaty ระบบ Enable ปุ่มประมวลผลกรณีตรวจสอบพบรายการ หรือเลือก ทั้งหมด แล้วพบบางรายการ ระบบ Disable ปุ่มประมวลผลกรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Treaty Code"THREL_Grp_PA 5Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 6Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Period, Reinsurer และ Treaty Code ระบบจะ enable ปุ่มประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการตรวจสอบว่ามีการกรอกข้อมูลครบตามช่องบังคับกรอกแล้วกรณี Treaty Code เลือก "ทั้งหมด"tx_rig_act_hd.reinsurer_code และ tx_rig_act_hd.cf_reinsurer_idค้นหา Treaty Code ใน cf_rig_treaty.treaty_code ทั้งหมดภายใต้ tx_rig_act_hd.cf_reinsurer_id = cf_treaty.cf_reinsurer_idกรณีไม่พบข้อมูลแสดง Popup แจ้งเตือน 'ไม่สามารถประมวลผลได้ โปรดตรวจสอบข้อมูลตรวจสอบ ข้อมูลการประมวผล Estimate ตาม Actual Quarter ที่เลือกประมวลผล treaty_code = tx_rig_est_hd.treaty_code and tx_rig_est_hd.status = 'APPROVE' and tx_rig_est_hd.edw_status = 3กรณีประมวลผล YYYY/Q1 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy01,yyyy02,yyyy03)กรณีประมวลผล YYYY/Q2 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy04,yyyy05,yyyy06)กรณีประมวลผล YYYY/Q3 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy07,yyyy08,yyyy09)กรณีประมวลผล YYYY/Q4 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy10,yyyy11,yyyy12)กรณีไม่พบข้อมูล tx_rig_est_hd ตาม Quater แสดง Popup แจ้งเตือน 'ไม่สามารถประมวลผลได้ เนื่องจากไม่พบข้อมูล Estimate ตาม Quarter ที่ระบุ'กรณีพบข้อมูลระบบ ประมวลผลตามกระบวนการ RIG-PS-07 ประมวลผล Actualกด ยกเลิก เพื่อปิดหน้าจอ Popup |  |  |
| 3 | Button | ยืนยันข้อมูล | disable | Maker | กรณีไม่เลือกรายการประมวลผล Actual ในข้อ 4 ปุ่มจะ disableกรณีเลือกรายการประมวลผล Actual ในข้อ 4 อย่างน้อย 1 รายการ ปุ่มจะ enableเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Actual เข้า EDWการแสดงหน้าจอ Popup ยืนยันข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Textจำนวนรายการ แสดงจำนวนรายการตามที่เลือกท่านต้องการยืนยันข้อมูลจำนวน 1 รายการใช่หรือไม่ 2Dropdown Listสถานะข้อมูลกรุณาระบุแสดงรายการสถานะข้อมูลรอยืนยันกับบริษัท Reinsurerแสดงกรณีสถานะรายการ Actual เป็น รอยืนยันรายการ เท่านั้นยืนยันรายการ Bordereauแสดงกรณีสถานะรายการ Actual เป็นรอยืนยันกับบริษัท Reinsurerยืนยันรายการ Bordereau ไม่สำเร็จ*สำหรับส่งรายการซ้ำกรณีระบบผิดปกติยกเลิกรายการระบบบังคับกรอกหมายเหตุรอยืนยันรายการcf_lookup_catalog.descriptionwhere parent_id = 10016003Textหมายเหตุค่าว่างแสดงช่องระบุหมายเหตุ กรณีเลือกสถานะข้อมูล ยกเลิกรายการ จำเป็นต้องระบุยกเลิกรายการ tx_rig_act_hd.remark4Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 5Buttonบันทึกdisableกรณีไม่ระบุข้อมูลระบบ disable ปุ่มยืนยันกรณีระบุ สถานะข้อมูล ระบบ enable ปุ่มยืนยันเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด บันทึก เพื่อดำเนินการกรณีเลือก รอยืนยันกับบริษัท Reinsurerระบบบันทึกสถานะรายการ เป็น รอยืนยันกับบริษัท Reinsurerกรณีเลือก ยืนยันรายการ Bordereau(ตรวจสอบเฉพาะกรณี Quarter 4) ระบบตรวจสอบการประมวลผล Profit Commission ของรายการที่ยืนยันโดยนำทุกรายการทีเลือกไปค้นหาที่tx_rig_act_hd.cf_treaty_id = cf_rig_pc_treaty.cf_treaty_id (status = 'A')กรณีพบให้ตรวจสอบว่ารายการที่เลือกประมวลผล Profit Comm แล้วหรือยังtx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.rig_act_hd_id กรณีไม่พบข้อมูล Profit Commission ระบบแสดงกรณีพบข้อมูล Profit Comm ให้ตรวจสอบลำดับถัดไป(ตรวจสอบทุก Quarter) ระบบตรวจสอบข้อมูล Bordereauระบบตรวจสอบข้อมูล Bordereau ด้วย tx_rig_act_hd.rig_act_hd_id ที่tx_rig_act_bdr_alter tx_rig_act_bdr_alter_memtx_rig_act_bdr_claimtx_rig_act_bdr_claim_memtx_rig_act_bdr_new_renewtx_rig_act_bdr_pol_memกรณีตรวจสอบแล้วไม่มี ข้อมูล Bordereau ในบาง table ระบบแสดงรายการที่มีข้อมูลระบบส่งข้อมูลไปยังระบบ EDWRIG-PS-12 ส่งข้อมูล Actual เข้า EDWระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauรายการที่ไม่มีข้อมูลระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauกรณีข้อมูลครบถ้วนทุกรายการระบบแสดง กดยืนยัน RIG-PS-12 ส่งข้อมูล Actual เข้า EDWกรณีเลือก ยกเลิกรายการระบบังคับระบุหมายเหตุเมื่อกดบันทึกเรียบร้อยระบบแสดงระบบ Auro refresh หน้าจอเพื่อ update list รายการกด ยกเลิก เพื่อปิดหน้าจอ Popup tx_rig_act_hd.status |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 4 | Check box | เลือกรายการ | uncheck | Maker | เมื่อกดปุ่ม ระบบจะเลือกรายการที่ระบุ และ enable ปุ่มยืนยันข้อมูลในข้อ 3 |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอยืนยันรายการ" |
| 5 | Button | ดำเนินการ | disable | Maker | ระบบแสดงปุ่มประมวลผลซ้ำระบบจะ enable ปุ่มประมวผลซ้ำ เมื่อสถานะรายการเป็น ประมวลผลไม่สำเร็จ หรือ ยกเลิกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการ RIG-PS-07 ประมวลผล Actualกด ยกเลิก เพื่อปิดหน้าจอ Popup |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการ |
| 6 | Button | Bordereau Report | enable | Maker/Checker | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Bordereau และ EDWการแสดงหน้าจอ Popup download BDR/EDWNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1tx_rig_act_hd.closing_quarter2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code5ButtonDownloadenableกดเพื่อ Download Bordereau และ EDW Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่เลือก ได้แก่Dai-ichiBDR = RIG-RP-019 BRD Act - DaiichiEDW = RIG-RP-025 BDR Act_Daiichi_{YYYY}{QQ}GiblaltarBDR = RIG-RP-017 BRD Act - GibraltarEDW = RIG-RP-013 BDR Act_GIB_{YYYY}{QQ}ThaireBDR = RIG-RP-018 BRD Act ThaireEDW = RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 7 | Button | SOA Report | enable | Maker/Checker | visible when cf_rig_pc_treaty.status = 'A'hide when cf_rig_pc_treaty.status <> 'A'เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน SOAการแสดงหน้าจอ Popup download SOA ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1tx_rig_act_hd.closing_quarter2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code 5ButtonDownloadenableกดเพื่อ Download ข้อมูล SOA ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ download fie ตามข้อมูลของ treaty ที่เลือกRIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  |  |
| 8 | Button | Profit Comm. | enable | Maker/Checker | visible when tx_rig_profit_hd.status = 'SUCCESS'hide when tx_rig_profit_hd.status <> 'SUCCESS'เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Profit Commission และ Profit Commission Allocationการแสดงหน้าจอ Popup download Profit Commission ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelYear แสดงข้อมูลประจำปี2568 tx_rig_act_hd.quarter_year2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำปี2025 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code 5ButtonDownloadenableกดเพื่อ Download ข้อมูล Profit Commission และ Profit Commission Allocation Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่GiblaltarProfit Commission = RIG-RP-015 Profit Commission_EB_{YYYY}Profit Commission Allocation Report = RIG-RP-020 Allocation_Profit Commission_{YYYY}ThaireProfit Commission = RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY}Profit Commission Allocation Report = RIG-RP-020 Allocation_Profit Commission_{YYYY} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 9 | Label | ข้อมูลประจำไตรมาส |  | Maker/Checker | Quarter year/ Quarter period ที่ประมวลผล | 2568/Q1 | tx_rig_act_hd.closing_quarter |
| 10 | Label | Reinsurer |  | Maker/Checker | ชื่อย่อ Reinsurer | Thaire | tx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code |
| 11 | Label | Treaty Code |  | Maker/Checker | ชื่อ Treaty | THREL_Grp_PA | tx_rig_act_hd.treaty_code |
| 12 | Label | สถานะรายการ |  | Maker/Checker | สถานะการประมวลผลรายการ Actual | รอยืนยันรายการ | tx_rig_act_hd.status |
| 13 | Label | สถานะรายการ EDW |  | Maker/Checker | สถานะการส่งข้อมูลไปยังระบบ EDW | อนุมัติเข้า EDW | tx_rig_act_hd.edw_status |
| 14 | Label | RI Premium (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ RI Premium, RI Premium Revivals และ RI Premium Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 | tx_rig_act_hd.ri_premium |
| 15 | Label | RI Commission (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.ri_commission |
| 16 | Label | Claim Recovery (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ Claim Recovery ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.claim_recovery |
| 17 | Label | Profit Comm. (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ Profit Commission ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.sum_pc_current_treaty |
| 18 | Label | Due to(+)/From(-) OLI |  | Maker/Checker | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-), Claim Recovery (รับ+/จ่าย-) และ Profit Comm. (รับ+/จ่าย-)กรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 | tx_rig_act_hd.due_to |
| 19 | Label | ผู้ดำเนินการ |  | Maker/Checker | ชื่อผู้ดำเนินการล่าสุด | suthanee.sa | tx_rig_act_hd.updated_by |
| 20 | Label | หมายเหตุ |  | Maker/Checker | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล |  | tx_rig_act_hd.remark |
| 21 | Label | Update Date |  | Maker/Checker | วันที่ดำเนินการล่าสุด | 29/09/2568 10:52:04 | tx_rig_act_hd.updated_date |


===== PAGE 1319600150 | Functional Specification > 03. User Interface Specification. > Screen design (SD) > RIG-SD-008 หน้าจอ จัดการข้อมูลประมวลผล Actual > RIG-SD-008 ส่วนการแสดงข้อมูล =====
| ส่วนแสดงข้อมูลผลการค้นหา |
| 1 |  | การเรียงลำดับข้อมูล |  |  | หลังจากกดปุ่มค้นหา ให้ระบบจัดเรียงข้อมูลตามเงื่อนไขต่อไปนี้ตามลำดับเรียงจากข้อมูล Treaty Code จาก A-Z |  |  |
| ส่วนการแสดงข้อมูล |
| No | Component Type | Component Name | Deafault Value | สิทธิ์ | Action / Data Value | Example | Remark |
| 1 | Button | ประมวลผล Profit commission | enable | Maker | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Profit commissionหน้าจอแสดง Popup ประมวลผล profit Commission กรณียังไม่ระบุข้อมูลกรณีประมวลผล Actual ไม่ครบปีบางรายการระบบไม่อนุญาตให้ดำเนินการกรณีประมวลผล Actual ครบปีทุกรายการระบบอนุญาตให้ดำเนินการกรณีเลือกมากกว่า 1 Treaty Codeกรณีประมวลผลไปแล้ว 2 TreatyNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListYearกรุณาระบุแสดงข้อมูลรายการ ปีปัจจุบันและย้อนหลังไปอีก 2 ปีบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดงรายการปีปัจจุบันไปจนถึงย้อนหลัง 2 ปีกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาเลือกปี"แสดงเป็นปี พ.ศ.2569 2Textค.ศ.ค่าว่างแปลงข้อมูลปีในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Year ระบบจะแสดงปี ค.ศ. จาก Year ที่ระบุ2026 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดง Reinsurer Code List รายการจาก cf_reinsurer.reinsurer_code ที่มี cf_reinsurer.status = A เท่านั้นผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Reinsurer Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Reinsurer"Thaire 4Dropdown ListTreaty Codeทั้งหมดแสดงข้อมูลรายการ Treaty ที่ถูกสร้างภายใต้ Reinsurer ที่ระบุ ใน Table cf_rig_treatyแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุ กรณีเลือก Reinsurer แล้ว แสดงเป็น ทั้งหมดเมื่อกด Dropdown แสดง Treaty Code List รายการจาก cf_rig_treaty.treaty_code ที่มี cf_rig_treaty.status = A cf_rig_treaty.approve is truecf_rig_pc_treaty.status = 'A'ผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Treaty Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มประมวลผลได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงข้อความสีแดงใต้กรอบ "กรุณาระบุTreaty Code"THREL_Grp_PA ส่วนแสดงข้อมูล5Buttonยกเลิก Profit Comm.hidehide เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น enable เมื่อ สถานะประมวลผล Profit Comm. (DONE) เป็น กดเพื่อยกเลิกรายการ Profit Comm. ของ Treaty ที่เลือกระบบ update tx_rig_profit_hd.status = 'CANCEL' 6Check boxเลือกun checkedenable เมื่อ ทุก Q เป็น และ สถานะประมวลผล Profit Comm. (DONE) เป็น hide เมื่อ Q เป็น หรือ DONE เป็น กดเพื่อเลือกรายการสำหรับประมวลผล Profit commสามารถเลือกได้มากกว่า 1 รายการ treaty (ถ้ามี) 7LabelTreaty Codeไม่พบข้อมูลแสดงข้อมูลรายการ Treaty ที่พบ และ Icon สำหรับแสดงสถานะการประมวล Actual ของแต่ละ Quater ภายใต้ Quarter year และ Reinsurer ที่พบข้อมูล โดยระบบจะแสดงผลระดับ Treatyกรณีใน Quarter นั้นประมวลผลแล้ว แสดง เครื่องหมาย ใน Quarter นั้นยังไม่ประมวลผลแล้ว แสดง เครื่องหมาย โดยตรวจสอบการแสดงผลดังนี้นำ cf_rig_pc_treaty.cf_treaty_id ตรวจสอบกับ tx_rig_act_hd.cf_treaty_idNameTableFieldConditionTreaty Codecf_rig_pc_treaty, tx_rig_act_hdcf_rig_pc_treaty.treaty_codecf_rig_pc_treaty.cf_treaty_id = tx_rig_act_hd.cf_treaty_id tx_rig_act_hd.status = 'SUCCESS' cf_rig_pc_treaty.status = 'A' cf_rig_treaty.approve is trueQ1tx_rig_act_hdclosing_quartertx_rig_act_hd.quarter = 1 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q2tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 2 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q3tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 3 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then Q4tx_rig_act_hdclosing_periodtx_rig_act_hd.quarter= 4 tx_rig_act_hd.status = 'SUCCESS' then tx_rig_act_hd.status <> 'SUCCESS' then THREL_Grp_PA 8IconQ1ไม่พบข้อมูล 9IconQ2ไม่พบข้อมูล 10IconQ3ไม่พบข้อมูล 11IconQ4ไม่พบข้อมูล 12IconSOAไม่พบข้อมูลแสดง SOA flagSOA Flag สำหรับรองรับกรณีต้องการเลือกประมวลผล Profit Comm. มากกว่า 1 Treaty เพื่อกำหนดยอด Profit Comm. ไปบันทึกใน SOA ที่ต้องการDisable กรณีมี Treaty เดียว ให้ default เป็น trueEnable กรณีเลือก check box มากกว่า 1 รายการกรณีเลือก check box Treaty A และ Treaty Bให้ default SOA flag = true ที่รายการแรกกรณีกด SOA flag ที่ Treaty B รายการ Treaty A จะ flase โดยอัติโนมัติ เนื่องจากกำหนดให้เลือกได้เพียงรายการเดียวต่อ กลุ่มข้อมูลที่ระบุเท่านั้นหลังจากประมวลผลสำเร็จ (DONE เป็น ) Disableดึงข้อมูลจาก tx_rig_profit_dt.soa_flag 13IconDONEไม่พบข้อมูลIcon สำหรับแสดงสถานะการประมวล Profit Comm. ของแต่ละ TreatyDefault เป็น กรณียังไม่เคยประมวลผลกรณีใน Treaty นั้นประมวลผล Profit Comm. แล้ว แสดง เครื่องหมาย tx_rig_profit_hd.status = 'SUCCESS'กรณี tx_rig_profit_hd.status <> 'SUCCESS' แสดง เครื่องหมาย 14Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 15Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Year, Reinsurer และ Treaty Code ระบบจะค้นหาข้อมูล Actual ที่ถูกประมวลผลภายใต้เงื่อนไขที่ระบุกรณีพบข้อมูลระบบจะตรวจสอบดังนี้ประมวลผล Actual ครบแล้วทั้ง 4 Quarter ทุก Treaty (แสดง เครื่องหมาย ทั้ง 4 Q) เลือกรายการข้อมูลที่ไม่เคยประมวลผลหรือถูกยกเลิก (DONE เป็น ) ระบบ enable ปุ่มและอนุญาตประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อประมวลผล Profit commission ตามกระบวนการกด ยกเลิก เพื่อปิดหน้าจอ Popupกรณีกด ยืนยัน ระบบประมวลผลข้อมูลตามกระบวนการ RIG-PS-09 Profit Commissionกรณีเลือกรายการที่มีประมวลผล Actual ไม่ครบ 4 Quarter (แสดง เครื่องหมาย อย่างน้อย 1 Q) ระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผลกรณีเลือกรายการที่มีสถานะ DONE เป็น เนื่องจากประมวลแล้วระบบ disable ปุ่มและไม่อนุญาตให้ประมวลผลซ้ำกรณีเลือกรายการที่มีสถานะ DONE เป็น และ ประมวลผล Actual ครบทุก Quarter ระบบ enable ปุ่มและอนุญาตให้ประมวลผล |  |  |
| 2 | Button | ประมวลผล Actual | enable | Maker | เมื่อกดปุ่ม ระบบจะแสดง Popup ประมวลผล Actual*กรณีที่ประมวลผล Quarter นั้นของ Treaty ใดๆไปแล้ว จะไม่สามารถประมวลผลผ่านปุ่มนี้ได้อีก ต้องไปดำเนินการยกเลิกแล้วประมวลผลซ้ำตามรายการเท่านั้นหน้าจอแสดง Popup ประมวลผลข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Dropdown ListPeriodกรุณาระบุแสดงข้อมูลรายการ Quarter year/ Quarter period ปัจจุบันและย้อนหลังไปอีก 2 ปีบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุList รายการ ดูจาก system date แสดง YYYY/QQ และ นับถอยจาก system date ไป 2 ปีมกราคมถึงมีนาคม = Q1เมษายนถึงมิถุนายน = Q2กรกฎาคมถึงกันยายน = Q3ตุลาคมถึงธันวาคม = Q4covert เป็นปี พ.ศ.กรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Period"2568/Q1 2Textค.ศ.ค่าว่างแปลง Period ในข้อ 1 ให้เป็นปี ค.ศ.เมื่อมีการเลือก Period ระบบจะแสดงปี ค.ศ. จากข้อมูลที่ระบุ2025/Q1 3Dropdown ListReinsurerกรุณาระบุแสดงข้อมูลรายการ Reinsurer ที่ถูกสร้างขึ้นทั้งหมดบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาเลือกเมื่อกด Dropdown แสดง Reinsurer Code List รายการจาก cf_reinsurer.reinsurer_code ที่มี cf_reinsurer.status = A เท่านั้นผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Reinsurer Code ในรูปแบบ Auto Completeกรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาเลือก Reinsurer"Thaire 4Dropdown ListTreaty Codeกรุณาระบุบังคับเลือกแสดงเป็น Dropdownเริ่มต้นแสดงเป็นเงื่อนไข กรุณาระบุเมื่อกด Dropdown แสดง Treaty Code List รายการจาก cf_rig_treaty.treaty_code ที่มี cf_rig_treaty.status = A cf_rig_treaty.approve is truecf_rig_pc_treaty.status = 'A'เป็น Treaty ที่อยู่ภายใต้ Reinsurer ที่เลือกเท่านั้นกรณียังไม่เลือก Reinsurer แสดงข้อความ "ไม่พบข้อมูล" ผู้ใช้งานสามารถกรอกข้อความเพื่อค้นหารายชื่อ Treaty Code ในรูปแบบ Auto Completeเมื่อเลือก Treaty แล้ว ให้นำ cf_rig_treaty.treaty_code ไปตรวจสอบที่ tx_rig_act_hdกรณี tx_rig_act_hd.quarter_year/tx_ri_act_hd.quarter = Period (YYYY/QQ)กรณีตรวจสอบแล้วไม่พบรายการ Treaty ระบบ Enable ปุ่มประมวลผลกรณีตรวจสอบพบรายการ หรือเลือก ทั้งหมด แล้วพบบางรายการ ระบบ Disable ปุ่มประมวลผลกรณียังไม่เลือก จะไม่สามารถกดปุ่มบันทึกได้ หรือกรณีเลือกแล้วลบตัวเลือกออก ให้แสดงกรอบสีแดง และแสดงข้อความสีแดงใต้กรอบ "กรุณาระบุ Treaty Code"THREL_Grp_PA 5Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 6Buttonประมวลผลdisableกรณีไม่ระบุข้อมูลระบบจะ disable ปุ่มประมวลกรณีระบุ Period, Reinsurer และ Treaty Code ระบบจะ enable ปุ่มประมวลผลเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการตรวจสอบว่ามีการกรอกข้อมูลครบตามช่องบังคับกรอกแล้วกรณี Treaty Code เลือก "ทั้งหมด"tx_rig_act_hd.reinsurer_code และ tx_rig_act_hd.cf_reinsurer_idค้นหา Treaty Code ใน cf_rig_treaty.treaty_code ทั้งหมดภายใต้ tx_rig_act_hd.cf_reinsurer_id = cf_treaty.cf_reinsurer_idกรณีไม่พบข้อมูลแสดง Popup แจ้งเตือน 'ไม่สามารถประมวลผลได้ โปรดตรวจสอบข้อมูลตรวจสอบ ข้อมูลการประมวผล Estimate ตาม Actual Quarter ที่เลือกประมวลผล treaty_code = tx_rig_est_hd.treaty_code and tx_rig_est_hd.status = 'APPROVE' and tx_rig_est_hd.edw_status = 3กรณีประมวลผล YYYY/Q1 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy01,yyyy02,yyyy03)กรณีประมวลผล YYYY/Q2 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy04,yyyy05,yyyy06)กรณีประมวลผล YYYY/Q3 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy07,yyyy08,yyyy09)กรณีประมวลผล YYYY/Q4 ต้องมีข้อมูล tx_rig_est_hd.closing_period in (yyyy10,yyyy11,yyyy12)กรณีไม่พบข้อมูล tx_rig_est_hd ตาม Quater แสดง Popup แจ้งเตือน 'ไม่สามารถประมวลผลได้ เนื่องจากไม่พบข้อมูล Estimate ตาม Quarter ที่ระบุ'กรณีพบข้อมูลระบบ ประมวลผลตามกระบวนการ RIG-PS-07 ประมวลผล Actualกด ยกเลิก เพื่อปิดหน้าจอ Popup |  |  |
| 3 | Button | ยืนยันข้อมูล | disable | Maker | กรณีไม่เลือกรายการประมวลผล Actual ในข้อ 4 ปุ่มจะ disableกรณีเลือกรายการประมวลผล Actual ในข้อ 4 อย่างน้อย 1 รายการ ปุ่มจะ enableเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันข้อมูล Actual เข้า EDWการแสดงหน้าจอ Popup ยืนยันข้อมูล ActualNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1Textจำนวนรายการ แสดงจำนวนรายการตามที่เลือกท่านต้องการยืนยันข้อมูลจำนวน 1 รายการใช่หรือไม่ 2Dropdown Listสถานะข้อมูลกรุณาระบุแสดงรายการสถานะข้อมูลรอยืนยันกับบริษัท Reinsurerแสดงกรณีสถานะรายการ Actual เป็น รอยืนยันรายการ เท่านั้นยืนยันรายการ Bordereauแสดงกรณีสถานะรายการ Actual เป็นรอยืนยันกับบริษัท Reinsurerยืนยันรายการ Bordereau ไม่สำเร็จ*สำหรับส่งรายการซ้ำกรณีระบบผิดปกติยกเลิกรายการระบบบังคับกรอกหมายเหตุรอยืนยันรายการcf_lookup_catalog.descriptionwhere parent_id = 10016003Textหมายเหตุค่าว่างแสดงช่องระบุหมายเหตุ กรณีเลือกสถานะข้อมูล ยกเลิกรายการ จำเป็นต้องระบุยกเลิกรายการ tx_rig_act_hd.remark4Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup 5Buttonบันทึกdisableกรณีไม่ระบุข้อมูลระบบ disable ปุ่มยืนยันกรณีระบุ สถานะข้อมูล ระบบ enable ปุ่มยืนยันเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด บันทึก เพื่อดำเนินการกรณีเลือก รอยืนยันกับบริษัท Reinsurerระบบบันทึกสถานะรายการ เป็น รอยืนยันกับบริษัท Reinsurerกรณีเลือก ยืนยันรายการ Bordereau(ตรวจสอบเฉพาะกรณี Quarter 4) ระบบตรวจสอบการประมวลผล Profit Commission ของรายการที่ยืนยันโดยนำทุกรายการทีเลือกไปค้นหาที่tx_rig_act_hd.cf_treaty_id = cf_rig_pc_treaty.cf_treaty_id (status = 'A')กรณีพบให้ตรวจสอบว่ารายการที่เลือกประมวลผล Profit Comm แล้วหรือยังtx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.rig_act_hd_id กรณีไม่พบข้อมูล Profit Commission ระบบแสดงกรณีพบข้อมูล Profit Comm ให้ตรวจสอบลำดับถัดไป(ตรวจสอบทุก Quarter) ระบบตรวจสอบข้อมูล Bordereauระบบตรวจสอบข้อมูล Bordereau ด้วย tx_rig_act_hd.rig_act_hd_id ที่tx_rig_act_bdr_alter tx_rig_act_bdr_alter_memtx_rig_act_bdr_claimtx_rig_act_bdr_claim_memtx_rig_act_bdr_new_renewtx_rig_act_bdr_pol_memกรณีตรวจสอบแล้วไม่มี ข้อมูล Bordereau ในบาง table ระบบแสดงรายการที่มีข้อมูลระบบส่งข้อมูลไปยังระบบ EDWRIG-PS-12 ส่งข้อมูล Actual เข้า EDWระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauรายการที่ไม่มีข้อมูลระบบปรับสถานะรายการเป็น ยืนยันรายการ Bordereauกรณีข้อมูลครบถ้วนทุกรายการระบบแสดง กดยืนยัน RIG-PS-12 ส่งข้อมูล Actual เข้า EDWกรณีเลือก ยกเลิกรายการระบบังคับระบุหมายเหตุเมื่อกดบันทึกเรียบร้อยระบบแสดงระบบ Auro refresh หน้าจอเพื่อ update list รายการกด ยกเลิก เพื่อปิดหน้าจอ Popup tx_rig_act_hd.status |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นDefault ไม่สามารถกดได้กดได้ก็ต่อเมื่อผู้ใช้งานกด เลือกรายการ |
| 4 | Check box | เลือกรายการ | uncheck | Maker | เมื่อกดปุ่ม ระบบจะเลือกรายการที่ระบุ และ enable ปุ่มยืนยันข้อมูลในข้อ 3 |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะ "รอยืนยันรายการ" |
| 5 | Button | ดำเนินการ | disable | Maker | ระบบแสดงปุ่มประมวลผลซ้ำระบบจะ enable ปุ่มประมวผลซ้ำ เมื่อสถานะรายการเป็น ประมวลผลไม่สำเร็จ หรือ ยกเลิกรายการเมื่อกดปุ่ม ระบบจะแสดง Popup ยืนยันการประมวลผลซ้ำเมื่อกดปุ่มระบบแสดง Popup ยืนยันการทำรายการกด ยืนยัน เพื่อดำเนินการ ระบบประมวลผล Actual ตามกระบวนการ RIG-PS-07 ประมวลผล Actualกด ยกเลิก เพื่อปิดหน้าจอ Popup |  | แสดงเฉพาะสิทธิ์ Maker เท่านั้นแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้ประมวลผลไม่สำเร็จยกเลิกรายการ |
| 6 | Button | Bordereau Report | enable | Maker/Checker | เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Bordereau และ EDWการแสดงหน้าจอ Popup download BDR/EDWNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1tx_rig_act_hd.closing_quarter2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code5ButtonDownloadenableกดเพื่อ Download Bordereau และ EDW Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่เลือก ได้แก่Dai-ichiBDR = RIG-RP-019 BRD Act - DaiichiEDW = RIG-RP-025 BDR Act_Daiichi_{YYYY}{QQ}GiblaltarBDR = RIG-RP-017 BRD Act - GibraltarEDW = RIG-RP-013 BDR Act_GIB_{YYYY}{QQ}ThaireBDR = RIG-RP-018 BRD Act ThaireEDW = RIG-RP-014 BDR Act_Thaire_{YYYY}{QQ} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 7 | Button | SOA Report | enable | Maker/Checker | visible when cf_rig_pc_treaty.status = 'A'hide when cf_rig_pc_treaty.status <> 'A'เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน SOAการแสดงหน้าจอ Popup download SOA ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelPeriod แสดงข้อมูลประจำไตรมาส2568/Q1tx_rig_act_hd.closing_quarter2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำไตรมาส2025/Q1 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code 5ButtonDownloadenableกดเพื่อ Download ข้อมูล SOA ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ download fie ตามข้อมูลของ treaty ที่เลือกRIG-RP-021 SOA_Act_{TreatyAbbr}_{YYYY}{QQ} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  |  |
| 8 | Button | Profit Comm. | enable | Maker/Checker | visible when tx_rig_profit_hd.status = 'SUCCESS'hide when tx_rig_profit_hd.status <> 'SUCCESS'เมื่อกดปุ่ม ระบบจะแสดง Popup Download รายงาน Profit Commission และ Profit Commission Allocationการแสดงหน้าจอ Popup download Profit Commission ReportNoComponent TypeComponent NameDefault ValueValidation Rules/ActionExampleRemark1LabelYear แสดงข้อมูลประจำปี2568 tx_rig_act_hd.quarter_year2Labelค.ศ. แสดงปี ค.ศ. จากข้อมูลประจำปี2025 3LabelReinsurer แสดง Reinsurer ที่เลือก DownloadThairetx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code4LabelTreaty Code แสดง Treaty Code ที่เลือก DownloadTHREL_Grp_PAtx_rig_act_hd.treaty_code 5ButtonDownloadenableกดเพื่อ Download ข้อมูล Profit Commission และ Profit Commission Allocation Report ตามรายการที่เลือกเมื่อกดปุ่ม download ระบบจะ zip file ตามข้อมูลของ treaty ที่ระบุ ได้แก่GiblaltarProfit Commission = RIG-RP-015 Profit Commission_EB_{YYYY}Profit Commission Allocation Report = RIG-RP-020 Allocation_Profit Commission_{YYYY}ThaireProfit Commission = RIG-RP-016 Profit_Commission_Thaire_Group PA_{YYYY}Profit Commission Allocation Report = RIG-RP-020 Allocation_Profit Commission_{YYYY} 6Buttonยกเลิกenableกดเพื่อปิดหน้าจอ Popup |  | แสดงทุกสิทธิ์การใช้งานแสดง Icon ต่อเมื่อรายการมีสถานะดังนี้รอยืนยันรายการยืนยันรายการ Bordereauยืนยันรายการ Bordereau ไม่สำเร็จอยู่ระหว่างนำส่ง Bordereau |
| 9 | Label | ข้อมูลประจำไตรมาส |  | Maker/Checker | Quarter year/ Quarter period ที่ประมวลผล | 2568/Q1 | tx_rig_act_hd.closing_quarter |
| 10 | Label | Reinsurer |  | Maker/Checker | ชื่อย่อ Reinsurer | Thaire | tx_rig_act_hd.cf_reinsurer_id lookup at cf_reinsurer.reinsurer_code |
| 11 | Label | Treaty Code |  | Maker/Checker | ชื่อ Treaty | THREL_Grp_PA | tx_rig_act_hd.treaty_code |
| 12 | Label | สถานะรายการ |  | Maker/Checker | สถานะการประมวลผลรายการ Actual | รอยืนยันรายการ | tx_rig_act_hd.status |
| 13 | Label | สถานะรายการ EDW |  | Maker/Checker | สถานะการส่งข้อมูลไปยังระบบ EDW | อนุมัติเข้า EDW | tx_rig_act_hd.edw_status |
| 14 | Label | RI Premium (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ RI Premium, RI Premium Revivals และ RI Premium Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 | tx_rig_act_hd.ri_premium |
| 15 | Label | RI Commission (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ RI Commission และ RI Commission Refund ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.ri_commission |
| 16 | Label | Claim Recovery (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ Claim Recovery ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.claim_recovery |
| 17 | Label | Profit Comm. (รับ+/จ่าย-) |  | Maker/Checker | ผลรวมของ Profit Commission ทั้งหมดใน Treatyกรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | 0.00 | tx_rig_act_hd.sum_pc_current_treaty |
| 18 | Label | Due to(+)/From(-) OLI |  | Maker/Checker | ผลรวมของ RI Premium (รับ+/จ่าย-) , RI Commission (รับ+/จ่าย-), Claim Recovery (รับ+/จ่าย-) และ Profit Comm. (รับ+/จ่าย-)กรณีผลลัพธ์เป็นค่าติดลบ จะแสดงจำนวนตัวเลขสีแดง | -28,415.88 | tx_rig_act_hd.due_to |
| 19 | Label | ผู้ดำเนินการ |  | Maker/Checker | ชื่อผู้ดำเนินการล่าสุด | suthanee.sa | tx_rig_act_hd.updated_by |
| 20 | Label | หมายเหตุ |  | Maker/Checker | หมายเหตุในกรณีที่รายการไม่สามารถประมวลผลได้และมี Error หรือการกรอกหมายเหตุในการยกเลิกการประมวลผล |  | tx_rig_act_hd.remark |
| 21 | Label | Update Date |  | Maker/Checker | วันที่ดำเนินการล่าสุด | 29/09/2568 10:52:04 | tx_rig_act_hd.updated_date |


# สรุป Confluence Wiki — New Group RI (Landing → Snapshot → Staging → Prevalidate → EDW/MPS)

> Generated 2026-07-02 from wiki dump (files: 25-ps01-landing.md, 26-ps02-05-snap-staging.md, 23-ps10-12-edw-mps.md, 24-ps08-prevalidate.md, 32-ws-external-services.md)
> Page URL pattern: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}

## 1. Landing Feeds — RIG-PS-01 (page 1305412262) + WS-RIG-001 (page 1305412442)

Dump feed จาก Group Policy (Oceanlife/DataOne SQLServer) → PostgreSQL groupri แบบ "delete แล้ว insert ใหม่ตามรอบ" (key ลบ = `process_code`), batch ทุกวันสิ้นเดือน 21.00 น. ทุก feed สร้าง `tx_rig_process_hd` (rig_process_hd_id auto, status Success/Error, ri_type=M, sum_record=count) ตาม queue `ms_rig_process.seq_landing`; กรณีไม่พบข้อมูล → ลบข้อมูลเดิม + insert process_hd เป็น success; error แจ้ง e-mail `email_code='RIG_Landing'`

| Feed | Source view | Landing table | process_code | Est/Act |
|---|---|---|---|---|
| 01-01 Policy (pg 1305412290) | RIG_View_Policy | tx_rig_landing_policy | RIG_AUTO_01 | All |
| 01-02 Customer (pg 1305412382) | RIG_View_CertificateCust | tx_rig_landing_certificate_cust | RIG_AUTO_02 | All |
| 01-03 Company (pg 1305412389) | RIG_View_Company (dbdcode, type_business) | tx_rig_landing_company | RIG_AUTO_03 | All |
| 01-04 Claim Death (pg 1305412391) | RIG_View_ClaimDeath | tx_rig_landing_claimdeath | RIG_AUTO_04 | All |
| 01-05 Claim TPD | RIG_View_ClaimTPD | tx_rig_landing_ClaimTPD | RIG_AUTO_05 | All |
| 01-06 Claim Health | RIG_View_ClaimHealth | tx_rig_landing_claimhealth | — | All |
| 01-07 Cert Inforce | RIG_View_CertInforce (เฉพาะกธ.ที่มี RI) | tx_rig_landing_cert_inforce | — | All |
| 01-08 Cert New Business | RIG_View_CertNewBusiness (เฉพาะ policy status B/I) | tx_rig_landing_certnewbusiness | — | Estimate |
| 01-09 Cert Alteration (สลักหลัง) | RIG_View_CertAlteration | tx_rig_landing_certalteration | — | Actual |
| 01-10 Experience Refund | RIG_View_ExpRefund | tx_rig_landing_exprefund | — | Actual |
| 01-11 Nature of business (DBD) | RIG_View_NatureBusiness | tx_rig_landing_nature_business | — | Actual |
| 01-12 Unname Policy | RIG_View_UnnamePolicy | tx_rig_landing_unname_policy | — | All |
| 01-13 Investigation Expense | RIG_View_InvestigationExpense | tx_rig_landing_investigation_expense | — | Actual |
| 01-14 Claim CMS Est (pg 1325564687) | tx_ncl_bill_detail (msa-claimtx) | **tx_rig_est_claim_cms** | EST_SNAPSHOT_13 | Estimate |
| 01-15 Claim CMS Act (pg 1327432280) | tx_ncl_bill_detail | **tx_rig_act_claim_cms** | ACT_SNAPSHOT_14 | Actual |
| 01-16 Inforce R17 (pg 1329922416) | RIG_View_GLSOPHead | tx_rig_landing_gl_sophead | RIG_AUTO_16 | Actual |
| 01-17 Premium Rate (pg 1336967294) | RIG_View_PremiumRate | tx_rig_landing_prem_rate | RIG_AUTO_17 | All |

จุดพิเศษ:
- **Claim CMS** (WS-RIG-001-14, pg 1325564667): input = claimNo (จาก snapshot claimhealth ที่ insert สำเร็จก่อน — pre-condition); SQL: `tx_ncl_bill_header a JOIN tx_ncl_bill_detail b` WHERE `b.approval_date >= CURRENT_DATE - INTERVAL '1 years' AND approval_date IS NOT NULL AND b.approval_status='VTS' AND b.checkbox='1' AND b.policy_type IN ('GROUP','PAGROUP') AND a.billing_status='APV' AND b.claim_no IN (:claimNo)` → fields id, batch_billing_no, paid, discount, client_paid, approval_status(WVE/VTS/CANT), approval_date ฯลฯ
- **Policy** key fields: policy_status (B=NB, I=Renewal, L=Lapse, C=Cancel), pay_type (0=เดือน,1=3เดือน,2=6เดือน,3=รายปี), re_insur_no, expreience_refund flag, rate_flag (CalculatePremFrom), promise_date/expire_date/lapse_date
- **R17** (tx_rig_landing_gl_sophead): เบี้ย/ทุน/จำนวนสมาชิกราย period_date ต่อ policy, doc_status, alter_prem_diff
- **Premium Rate**: ตารางเบี้ยต่อ policy_no/policy_year — prem_rate_table_type (อายุ/Class), prem_rate_table_kind (เบี้ย/อัตราเบี้ย), value_age_or_class, value_life/acc/med_acc/tpd, status + approve/cancel

## 2. Snapshot rules — RIG-PS-02 Estimate (pg 1308459297) / RIG-PS-03 Actual (pg 1305412444)

Snapshot คืนสิ้นเดือนหลัง Landing (PS-01) สำเร็จ; เก็บชุดข้อมูลเพื่อ rerun/ตรวจย้อนหลัง

**Estimate (tx_est_snap_*)** — Period = yyyyMM:
- Policy → tx_est_snap_policy: เลือกกธ.ที่ `tx_rig_landing_policy.promise_date` ย้อนหลัง 1 ปี (Period 202501 → promise_date 1 ก.พ. 2024–31 ม.ค. 2025) **หรือ** กธ.ที่มีเคลมในรอบ (`approve_date` ภายในเดือน Period จาก tx_rig_landing_claimdeath/claimtpd/claimhealth); join ด้วย policy_no + policy_year
- Customer → tx_est_snap_certificate_cust: scope ตาม tx_est_snap_policy (**ต้องรัน Policy ก่อนเสมอ**)
- Cert Inforce → tx_est_snap_cert_inforce: promise_date ย้อนหลัง 1 ปี (เบี้ย)
- Cert NB → tx_est_snap_cert_newbusiness: ไม่ scope (มีเฉพาะปีแรก)
- Claim Death/TPD/Health → tx_est_snap_claim_death / claimtpd / claimhealth: `approve_date` ในเดือน Period
- Unname → tx_est_snap_unname_policy: promise_date ย้อนหลัง 1 ปี
- Company, Premium Rate: ไม่กรอง (tx_est_snap_company, tx_est_snap_prem_rate)

**Actual (tx_act_snap_*)** — Period = quarter เช่น '2026Q2':
- Policy: promise_date ในรอบ Q เดียวกันย้อนไปถึง Q เดียวกันของปีก่อน (2026Q2 → 1 เม.ย. 2025–30 มิ.ย. 2026) หรือมีเคลม approve_date ในไตรมาส (1 เม.ย.–30 มิ.ย. 2026)
- Claims: approve_date ภายในไตรมาส; Investigation Expense: `tx_rig_landing_investigation_expense.approve_date` ในไตรมาส
- ไม่กรอง: Certificate Alteration, Experience Refund, Nature of business, Unname, R17 (tx_act_snap_gl_sophead), Company, Premium Rate

## 3. Staging batches

### RIG-PS-04 Estimate (pg 1305412273) — รันหลัง PS-02 เสร็จทั้งหมด
Treaty filter (ใช้ทุก batch): 2 หลักแรกของ `ReInsur_No` → `'DG%'` = DAI_Grp_Daiichi_Coins (ทุกผลประโยชน์), `'TG%'` = THREL_Grp_PA (Accident Death + TPD/Dismemberment), `'[0-9][0-9]%'` = GIB_Grp_Direct_EB (Life + Accident Death + Dismemberment); lookup ที่ `cf_lookup_catalog.parent_id = 1000100`

- **EST-001 List of policy** (pg 1291419946, process 1290010893, WS_RIG_001 pg 1294991993): tx_est_snap_policy + tx_est_snap_company (left join company_code+policy_year) → **tx_stg_est_all_policy**. Lookups: pay_type→parent_id 1002300, policy_status→1002400 (I=Inforce,B=New Business,C=Cancel,L=Lapsed), exp_refund→1002600, treaty_code จาก 2 หลักแรก re_insur_no→1000100. **RIStatus rule**: ถ้า expire_date >= วันสิ้นเดือน Period → policy_year=1 'New Business', >1 'Inforce'; expire_date < สิ้นเดือน → 'Lapsed'; status 'C'→'Cancel'. PolicyName: company_name_eng ก่อน ถ้า null ใช้ company_name, uppercase
- **EST-002 กรมธรรม์ ณ ต้นสัญญา** (pg 1291715747, WS_RIG_002 pg 1294992019): → **tx_stg_est_policy_1y**; Effective Date (PromiseDate) ย้อนหลัง 1 ปีจาก Closing Period (202501 → 2024-02-01..2025-01-31); นับ NoOfMember (ทั้งหมด/Active/Inactive: StatusMember in ('C','D','L') = Inactive), NoOfMemberLife (`StatusMember NOT IN ('C','D','L') AND (LifePrem>0 or LifeE1Prem>0 or LifeE2Prem>0)`), AccidentDeath (AccPrem>0 or AccE2Prem>0), MedAccident (MedPrem>0), TPD (TPDPrem>0); SumInsured* = sum(LifeInsur/AccInsur/MedInsur/TPDInsur) ของ Active
- **EST-003 Claim** (pg 1291714686; Death 1290404055/WS_RIG_003, TPD 1291714840/WS_RIG_004, Health 1291714845/WS_RIG_005): → **tx_stg_est_death_claim / tx_stg_est_tpd_claim / tx_stg_est_health_claim**; Period จาก Approve_Date (yyyyMM) รวมทั้งอนุมัติและปฏิเสธ; Death: TotalClaim = claim_life+claim_acc, Type fix 'Death'; TPD: `ClaimStatus = 0 → 'Dismemberment'`, `ClaimStatus in (1,2) → 'TPD'`, TotalClaim = claim_acc+claim_tpd; Health: Type จาก `RIG_View_ClaimHealth.RD_No = cf_claim_type.rd_no → claim_type_group` (IPD/OPD/Dental/MedAccident...) else 'Other'; InvestigationExpense fix 0.00 (Estimate)
- **EST-004 Estimated Premium Layer** (pg 1299022376, WS_RIG_006 pg 1294992031): → **tx_stg_est_prem_layer** (เฉพาะ Gibraltar Group EB); Layer จาก `cf_layer_by_treaty.layer_of_sa`: L1 ≤5M, L2 >5–20M, L3 >20M; นับ/รวมต่อ layer: `Insur <= cf_layer_by_treaty.maximum_sa AND > minimum_sa`, `PolicyStatus not in ('L','C')`, `StatusMember in ('I','B')`; ทุนอุบัติเหตุ/เบี้ยอุบัติเหตุ เฉพาะ `Age <= 70`; rate ต่อทุน 1,000 จาก RIG_View_Policy.LifePremRate/AccPremRate/MedPremRate/TPDPremRate; IPD/OPD/Dental Premium ลงเฉพาะ Level 1 (level อื่น 0.00)
- **EST-005 (R01) inforce by member** (pg 1292239021, WS_RIG_007 pg 1299251243): → **tx_stg_est_inforce_member**; Period = yyyyMM ของ PromiseDate; เงื่อนไข `PolicyStatus not in ('L','C')`, `StatusMember in ('I','B')`; Sex: 1='M',2='F'; ไม่มีรายการ Alteration
- **EST-006 ตั้งฐานกรมธรรม์เคยส่ง RI** (pg 1301807413, = ACT-011 pg 1312489737): One-time migrate จาก **tx_mps_master_i05** → **tx_rig_policy_base**; เงื่อนไข `treaty_code` (และ ACT-011 เพิ่ม `ri_portfolio_id` มี RCG Tagging) ไม่ว่าง/ไม่ NULL; period=NULL, created_by='SYSTEM_MIGRATE'

### RIG-PS-05 Actual (pg 1309999561) — รันหลัง PS-03 เสร็จ
- **ACT-001 List of policy** (pg 1312489724): เหมือน EST-001 → **tx_stg_act_all_policy** (อ้างอิงวันที่ทำรายการ Actual)
- **ACT-002 Alteration** (pg 1292239023, process 1299022571, WS_RIG_008 pg 1299251521): tx_act_snap_certalteration + policy + certificate_cust → **tx_stg_act_alteration**; Period จาก doc_date (yyyyMM); `status_after`: 'A'→Addition/New Member, 'C'→Termination/Cancel, 'N'→IncreaseSA/Increase, 'E'→DecreaseSA/Decrease; (แก้ไข 20/02/2026 เพิ่ม 'D'→Death, 'O'→Age Over Limit, 'T'→Transfer); ทุนอุบัติเหตุ acc_insur_before/acc_insur_after
- **ACT-003 Claim** (pg 1312489726): เหมือน EST-003 แต่ approve_date ภายใน **Quarter Period** → tx_stg_act_death_claim / tpd / health
- **ACT-004 Actual Premium Layer** (pg 1312489728): เหมือน EST-004 → **tx_stg_act_prem_layer** (snap: policy, unname, cert_inforce, certificate_cust)
- **ACT-005 (R01)** (pg 1312489730): → **tx_stg_act_inforce_member**; กธ.เริ่มสัญญาย้อนหลัง 1 ปี (วันแรกของ Quarter Period −1 ปี ถึงวันสุดท้ายของ Quarter Period)
- **ACT-006 (R17) inforce by policy** (pg 1312489733, WS_RIG_009 pg 1294992028): → **tx_stg_act_inforce_policy** (Prem, Exp Refund)
- **ACT-007 (R61) Premium and movement** (pg 1299251458, process 1299022584, **WS_RIG_010** pg 1299251901): → **tx_stg_act_prem_movement**
  - ดึงย้อนหลัง 1 ปีความคุ้มครอง (ครอบคลุม 2 policy year ล่าสุด) ขั้นต่ำ 12 เดือน/กธ.
  - **"1.Period ex" (pg 1302134951)**: กระจาย PromiseDate เป็น 12 Period Date — เช่น PromiseDate 01/12/2018 → Period date 01/12/2018, 01/01/2019 … 01/11/2019 (สร้างโครงด้วย UNION unname+cert_inforce แล้ว cross join `generate_series(0,11)`)
  - **"2. Paytype condition" (pg 1302134980)**: Sum เบี้ยตาม PaymentMode ของกธ. — เดือนที่ไม่ต้องจ่ายลง 0.00: PayType 0 Monthly = เดือน 1–12; 1 Quarterly = เดือน 1,4,7,10; 2 Semi Annual = เดือน 1,7; 3 Annual = เดือน 1 (เดือนนับจาก PromiseDate)
  - ReinsuredNo: `ISNULL(RIG_View_CertInforce.ReInsureNo,'') <> ''` — เฉพาะที่ส่ง Re
  - Movement: NoMemPrevious = NoMemTotal ของ Period date ก่อนหน้า (PolicyYear=1 → 0); NoMemAddition = `sum(case when RIG_View_CertAlteration.StatusAfter in ('A','T') then 1 end)` group by Period, PolicyNo, CompcodeAfter, DocDate; NoMemCancellation = StatusAfter in ('C','D'); NoMemTotal = `count(CerNo)` ที่ `StatusMember not in ('C','D','L')` — ต้องสอดคล้อง (Previous+Addition)−Cancellation
  - Premium: sum(LifePrem/AccPrem/MedAccPrem/TPDPrem/LifeE1Prem/IPDPrem/OPDPrem/DentalPrem); PremiumMedTotal = IPD+OPD+Dental; PremiumTotal = Life+Accident+MedAcc+TPD+E1+MedTotal
  - กรณี Unname: เลือกเฉพาะแถว `period_date = promise_date` (กันนับซ้ำ) แล้ว `SUM(...) OVER (PARTITION BY policy_no, policy_year)` = ยอดทั้งปีวางทุกแถว; กรณี Cert: เบี้ย Inforce + prem_diff จาก Alteration (group by policy_no, policy_year, doc_date)
- **ACT-008 Member over age** (pg 1292239131, process 1291977702, WS_RIG_012 output pg 1294992033): → **tx_stg_act_member_over_age** (Gibraltar); เงื่อนไข `tx_act_snap_cert_inforce.age > 70` สำหรับ AccidentInsure (acc_insur) และ AccidentPremium (acc_prem); join cert_inforce `lot_no = 1` กับ policy/certificate_cust (policy_no+policy_year+cust_code); ดึงย้อนหลัง 1 ปีความคุ้มครอง
- **ACT-009 Investigate Expense** (pg 1299251465, process 1293124333, WS_RIG_013 pg 1294992035): → **tx_stg_act_investigation_expense**; เงื่อนไข: approved_date ใน PeriodFrom–PeriodTo (quarter), `doc_status = 0` (Active เท่านั้น), `reinsur_no` ไม่ว่าง; match เคลม: claim_type=0 → inner join tx_act_snap_claim_death (policy_no, policy_year, claim_no=inform_no, approved_date=approve_date, consider_seq); claim_type=1 → tx_act_snap_claimtpd; claim_type=2 → tx_act_snap_claimhealth (claim_no=notify_no); **ClaimType rule**: Death — life_insur_request>0 & acc_insur_request=0 →'Life', acc>0 & life=0 →'AccidentDeath', ทั้งคู่>0 →'Life'; TPD — lookup claim_status ใน cf_lookup_catalog parent_id=1002700, TPD อย่างเดียว→'TPD', Dismemberment อย่างเดียวหรือทั้งคู่→'Dismemberment'; Health — cf_claim_type.rd_no → claim_type_group else 'Other'; แยกยอด investigation_expense / medical_expense / legal_expense
- **ACT-010 Experience Refund** (pg 1299251460, process 1299022600, **WS_RIG_011** pg 1299251961): tx_act_snap_exprefund + tx_act_snap_policy (join policy_no+policy_year) → **tx_stg_act_exp_refund**; Period จาก PeriodBeginDate; PaidStatus: `exp_refund_g > 0 → 'Paid'` else 'Not Paid'; PercentExpense = `100 - total_amt_percent`; PremiumLife = `premium + premium_e1` where `rd_type='01' AND flg_cal is true`; PremiumAccident = rd_type='02', PremiumTPD = rd_type='10' (flg_cal true); TotalPremium = Life+Accident+TPD; Claim = claim_all; ExpRefundPreviousYear (loss carried forward) = adj_claim; ExpRefund = exp_refund_g; รวม claim_life/claim_add/claim_dismem/pending_life/pending_add, period_begin_date/period_end_date
- **ACT-011** = ตั้งฐานกธ.เคยส่ง RI (ดู EST-006)
- **ACT-012 ตั้งฐาน Profit Commission** (pg 1316094691): One-time → **tx_rig_profit_comm_base**; 3 แหล่ง:
  - **WS_RIG_012 GIB** (pg 1316094863): จากไฟล์ Gibraltar_Profit Commission_Calculation — `negative_net_balance` จาก "Net balance of Incomes and Outgoes (A-B)" **Cell Y23**; ค่าบวก→บันทึก 0, ค่าลบ→บันทึกยอดขาดเป็นบวก; reinsurer='Gibraltar', treaty_code='GIB_Grp_Direct_EB', total_premium fix 0.00, profit_flag='M', created_by='SYSTEM_MIGRATE'
  - **WS_RIG_012 Thaire** (pg 1316094876): จากไฟล์ Thaire — "Profit for Year" **Cell M20** เครื่องหมายเหมือนกัน; reinsurer='Thaire', treaty_code='THREL_Grp_PA', profit_flag='M'
  - **WS_RIG_012 STD** (pg 1316094880): จาก EDW — เงื่อนไข `tx_ri_process_header.ri_process_status_id = 3`, `tx_ri_std_hd.ri_type = 'A'`, `tx_ri_std_hd.ind_grp = 'G'`; total_premium = `tx_ri_summary.sum_ri_premium` = SUM(ABS(coalesce(premium_life…premium_med, revival_premium_life, revival_premium_add))) + SUM(prem_refund_* เฉพาะค่าติดลบเป็น ABS); negative_net_balance fix 0.00, profit_flag='R'

## 4. Prevalidate — RIG-PS-08 (page 1313145189)

รันเมื่อ Insert staging (PS-04/PS-05) ทำงาน; ตรวจเฉพาะ field ที่ map ลง Staging ไม่ได้ (เพราะ staging เป็น NOT NULL) แล้วบันทึกแถวที่ถูกดีดออกลง **tx_stg_error_data**:
- **สาเหตุ 1**: ค่า Null / Blank / '' จาก Snapshot → err_desc = "ไม่พบข้อมูลที่ Snapshot"
- **สาเหตุ 2**: lookup ไม่ได้ — เช่น `tx_est_snap_policy.pay_type = 4` แต่ cf_lookup_catalog config ไว้ 0–3 → err_desc = "ไม่สามารถ lookup ข้อมูลที่ cf_lookup_catalog"
- **สาเหตุ 3**: convert ไม่ได้ — เช่น `tx_est_snap_policy.first_date = 20-08-01 00:00:00` (ควรเป็น 2018-08-01) แปลง timestamp→date ไม่ได้

Columns หลัก: tx_stg_error_id (auto), rig_process_hd_id, process_code, period, `snap_table` (เช่น tx_est_snap_policy), `stg_table` (เช่น tx_stg_est_all_policy), policy_no, promise_date, policy_year, `cer_no` (map จาก tx_est_snap_cert_inforce.cerno / cert_newbusiness.certific_cust_no / certificate_cust.certific_cust_no / claim_death.cerno / claimhealth.cerno / claimtpd.cerno — ไม่พบ→null), `inform_no` (claim_death.inform_no / claimhealth.notify_no / claimtpd.inform_no), `err_desc`, `err_field` = "{field1}, {field2}, ..." (เช่น "sale_option, lapse_date, prev_policy_no"), `err_field_lookup`

## 5. EDW / MPS Integration

### Estimate — RIG-PS-10 ส่งเข้า EDW (page 1319108810)
Trigger: ปุ่ม "ยืนยันข้อมูล EST." หน้าจอ RIG-SD-007; precondition `tx_rig_est_hd.status = 'SUCCESS'`; ทำเป็น queue ทีละรายการ:
1. **WS-RIG-002-01 Insert EDW Process** (pg 1313145302): สร้าง `tx_ri_process_header` (msa-adwetl, pg 1313145313): group_type_id=**1**, ri_process_status_id=**9** (กำลังดำเนินการ), single_or_group='G', estimate_or_actual='E', system_by_date='RIG' → return status ไป `tx_rig_est_hd.edw_status(9)/edw_status_desc`; สร้าง `tx_ri_std_hd` (pg 1313145316): cf_file_name_id จาก cf_ri_template_file/cf_ri_file_name/ms_ri_treaty (`import_export='E' AND report_type='STD' AND cf_file_group_id=1 AND (ri_treaty_code_1=:treaty_code OR ri_treaty_code_2=:treaty_code)` เลือก rn=1), ms_import_status_id=1, period/reinsurer_code/treaty_code จาก tx_rig_est_hd, **ri_type='E'**, ind_grp='G', ri_bdr_hd_id=tx_rig_est_hd.ri_est_hd_id, quarter_year=SUBSTRING(period,1,4), quarter_period: เดือน 01-03→Q1, 04-06→Q2, 07-09→Q3, 10-12→Q4, mps_flag=false, system_by='RIG'; return ri_std_hd_id → tx_rig_est_hd.ri_std_hd_id
2. **WS-RIG-002-02 Insert STD** (pg 1313145343, mapping pg 1313145512): สร้าง `tx_ri_std_all` (282 คอลัมน์) จาก **tx_rig_est_bdr** — premium_life = `ri_prem_life + ri_prem_renew_life`; premium_add = `ri_prem_acc + ri_prem_renew_add`; comm_life/add/ttd/tpd/med = ri_comm_*; claim_life/tpd/add = ri_claim_*; claim_medical = ri_claim_med; total_ri_comm = ri_comm_life+acc+tpd+ttd+medical; status = tx_rig_est_policy_hd.ri_policy_status; payfrom=effective_date, payto=(effective_date+1ปี)−1วัน; ri_period=closing_period (TO_CHAR(effective_date,'YYYYMM')), ri_prem_duration=tx_rig_est_bdr.period, period_quarter จาก closing_period (2024Q1), total_claim=ri_claim_tot, policy_type='GROUP', maturity_date=tx_rig_est_policy_hd.expire_date, invoice_date=f_receipt_date; responseCode 000=SUCCESS/100=ERROR (100 → หยุด ไม่ทำ 002-03)
3. **WS-RIG-002-03 Update EDW Status** (pg 1313145357): update tx_ri_process_header.ri_process_status_id=**1**; tx_ri_std_hd.sum_records=`COUNT(ri_std_all_id) FROM tx_ri_std_all WHERE ri_std_hd_id=...`; update tx_ri_std_all.ri_method=arrangement_type, ri_mode_of_payment, cpa_rider_flag จาก ms_ri_treaty
4. ผลลัพธ์: responseCode 000 → `tx_rig_est_hd.status='APPROVE'`, `edw_status=1`, edw_status_desc='รอพิจารณาข้อมูล STD Template'; 100 → `status='SENDERR'`, `edw_status=11`, 'ประมวลผลไม่สำเร็จ'; EDW sync สถานะกลับผ่าน **WS-RIG-002-04 Select EDW Status** (pg 1313145393); reconcile ผ่าน WS-RIG-002-05 (pg 1313145411)

### Estimate — RIG-PS-11 ส่งเข้า MPS (page 1319109283)
Trigger เดียวกัน (RIG-SD-007) เมื่อ PS-06 Estimate SUCCESS ทุกรายการ:
1. **WS-RIG-002-07 Insert EDW-iReport** (pg 1313669326): copy header/BDR จาก Group RI → **tx_mps_rig_est_hd** (rig_est_hd_id, closing_period, cf_reinsurer_id, cf_treaty_id, treaty_code, edw_status, ri_std_hd_id, ri_premium, ri_commission, claim_recovery, due_to, usage_status A/I …) และ **tx_mps_rig_est_bdr** (ri_prem_1st_*/ri_prem_renew_*, ri_claim_*, recov_claim_* รายกรมธรรม์)
2. **WS-RIG-002-06 Update MPS Header** (pg 1313669195): กันข้อมูลซ้ำ — ถ้าพบ tx_mps_rig_est_hd (closing_period, cf_reinsurer_id, cf_treaty_id, treaty_code) เดิม → update `usage_status='I'` (pg 1331036346); เมื่อทุกรายการ success: update **tx_mps_base_header** `WHERE cf_file_name_id = 86 AND period = tx_rig_est_hd.closing_period` → ms_import_status_id=**7**, sum_amount=count(rig_est_hd_id) ที่ success (pg 1313669198); กรณี error บางรายการ → ms_import_status_id=**3**, sum_amount=0 (pg 1315537462) + tx_ri_est_hd.mps_status=100; ส่งซ้ำจน success ครบ → กลับไปเคส 000
3. ผลลัพธ์: 000 → `tx_rig_est_hd.mps_status=7`, 'ยืนยันนำเข้าข้อมูลสำเร็จ'; 100 → `mps_status=100`, 'ยืนยันนำเข้าไม่สำเร็จ'

### Actual — RIG-PS-12 ส่งเข้า EDW (page 1322647585)
Trigger: ปุ่มยืนยันข้อมูล หน้าจอ RIG-SD-008; precondition `tx_rig_act_hd.status='SUCCESS'`; ขั้นตอนเดียวกับ Estimate (WS-RIG-002-01→02→03→04 ฝั่ง Actual, pgs 1320518005/1320518054/1320518092/1320518102):
- tx_ri_process_header (act, pg 1320518007): **group_type_id=2** (estimate_or_actual ในเอกสารยังเป็น 'E'), create_by=tx_rig_act_hd.created_by
- tx_ri_std_hd (act, pg 1320518009): จาก tx_rig_act_hd; cf_file_name_id ใช้ **cf_file_group_id=2**; ri_bdr_hd_id=ri_act_hd_id
- **tx_ri_std_all (act, pg 1320518056)**: group by `period, reinsurer, treaty_code, ri_method, policy_number, policy_year, payfrom, payto`; แหล่งข้อมูล 3 BDR: **tx_rig_act_bdr_new_renew** (premium_life = tot_re_nb_prem_life + tot_re_ren_prem_life; premium_add = tot_re_nb_prem_add + tot_re_ren_prem_add; comm = tot_com_*; prem_refund_* = tot_re_refund_prem_*; comm_refund_*: **if reinsurer_code='Gibraltar' then tot_com_refund_* × −1**; revival_premium_life/add = tot_re_rev_prem_*; experience_refund_life/add = re_ex_refund_life/acc; ri_sum_assured/ri_initial_sa = tot_ori_sa_*; total_sr = tot_re_sr_*), **tx_rig_act_bdr_claim** (claim_life/tpd/add = sum_re_claim_*; claim_exp_investigation/claim_investigation = tot_re_inv; claim_medical = sum(sum_re_claim_ipd,opd,dental,med_acc); claim_dismemberment = sum_re_claim_dismem; event_date = max(event_date) จาก tx_rig_act_bdr_claim_mem; total_claim = sum_re_claim_tot), **tx_rig_act_bdr_alter**; ถ้า field เงินทั้งชุดเป็น 0 ไม่ต้องส่งแถว; **policy_year override**: Thaire/Gibraltar = `(EXTRACT(YEAR FROM effective_date_from) − EXTRACT(YEAR FROM first_date)) + 1`; **ri_commencement_date**: Thaire = first_date else ri_com_date; payfrom/payto = effective_date_from/effective_date_to; period_quarter จาก tx_rig_act_hd.closing_quarter; premium_type='Normal'
- **PC Output (act, pg 1313145517 / เงื่อนไขใน pg 1320518056)**: กรณีพบ Profit Commission สร้างแถว tx_ri_std_all เพิ่ม — เงื่อนไข `tx_rig_act_hd.rig_act_hd_id = tx_rig_profit_dt.ri_act_hd_id`, quarter_year + treaty_code ตรงกัน และ `sum(tx_rig_allocation_profit.pc_allocation) > 0`; แถว PC มีเบี้ย/เคลม = 0 แต่ **ri_profit_com = tx_rig_allocation_profit.pc_allocation** (query join tx_rig_allocation_profit → tx_rig_profit_dt → tx_rig_act_hd)
- ผลลัพธ์สถานะเหมือน Estimate: 000 → tx_rig_act_hd.status='APPROVE', edw_status=1; 100 → 'SENDERR', edw_status=11; sync ด้วย WS-RIG-002-04 (Actual)
- Output tables ที่ส่ง: tx_rig_act_hd, tx_rig_act_bdr_new_renew, tx_rig_act_bdr_claim, tx_rig_act_bdr_alter, tx_act_snap_policy

### File transfer
- **WS-RIG-003 Upload to Share Path** (pg 1317404826): input fileName/filePath (≤4 level, folder ≤200 chars)/fileContent (≤10 MB); mkdir ถ้าไม่มี, ชื่อซ้ำ→ลบไฟล์เดิมวางใหม่; path ตาม env `\\10.40.24.246\EDW\SIT|UAT|PROD`; return status TRUE/FALSE
- **WS-RIG-004 Download from Share Path** (pg 1317896536): โครงเดียวกัน (inquiry)

### จุดตรวจ UAT ที่ควรจำ
- edw_status: 9=กำลังดำเนินการ, 1=รอพิจารณา STD Template, 11=ไม่สำเร็จ; mps_status: 7=สำเร็จ, 100=ไม่สำเร็จ; ms_import_status_id ใน tx_mps_base_header: 7 สำเร็จ / 3 error, filter `cf_file_name_id=86`
- treaty resolve ผ่าน `ms_ri_treaty.ri_treaty_code_1/ri_treaty_code_2`; account_name จาก `cf_rig_treaty.contract_name`
- R61 คือจุดที่ paytype/period logic ซับซ้อนสุด (WS_RIG_010 + subpages 1302134951, 1302134980) — เดือนไม่ครบกำหนดจ่ายต้องเป็น 0.00 ไม่ใช่ null

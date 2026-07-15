# สรุป Confluence Wiki — New Group RI (Persistence / Reports / Appendix)

> Generated 2026-07-02 from wiki dump (files: 30-persistence-tables.md, 31-ui-reports-screens.md, 50-appendix.md)
> Sources: Persistence Spec / UI-Report Spec / Appendix. DB จริง = PostgreSQL `groupri`. Source ต้นทาง = SQL Server `OceanLife` (views `RIG_View_*`).
> URL pattern: `http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}`

---

## 1. Table Catalog (grouped by layer)

### 1.1 Configuration (cf_*) — index page 1291420246
| Table | Purpose / Keys | Page |
|---|---|---|
| `cf_claim_type` | Claim type group mapping: PK `cf_claim_type_id`; `rd_no` (รหัสความคุ้มครอง 20,21,22...44), `claim_type_source` (IPD, OPD, DT, MED.ACC, HB, DAB...), `claim_type_group` (IPD/OPD/Dental/MedAccident), `status` A/I. 15 initial rows. | 1301807119 |
| `cf_lookup_catalog` | Lookup master ทั้งหมด: PK `cf_lookup_catalog_id`, `lookup_key`, `parent_id` (กลุ่ม เช่น 1000600 ri_method, 1000700 occ class, 1000800 coverage, 1001200 process_status, 1001300 est/act status, 1001700 EDW status, 1001900 MPS status, 1002000 his_action, 1003000 PC status, 1003400 rate type) | 1291715731 |
| `cf_ma_discount` | % Discount ของ SA: PK `ma_rate`, `disc_rate` | 1328185600 |
| `cf_reinsurer` | Reinsurer master: PK `cf_reinsurer_id`, UK `reinsurer_code`; `location_code` (L/F), `country_code`, `email`, `status` A/I, `process_status` (lookup 1002000), `start_date`/`expire_date` | 1307934986 |
| `cf_reinsurer_history` | ประวัติเปลี่ยนสถานะ reinsurer: FK `cf_reinsurer_id`, `his_action`, `his_remark` | 1307934988 |
| `cf_rig_email` | Config email: PK `email_code`; `email_subject/from/to/cc`, `email_env` (DEV/SIT/UAT/PROD), `status` A/I | 1291420798 |
| `cf_rig_nob` | ประเภทธุรกิจกรณีไม่มี DBD Code: PK `rig_nob_id`, FK `policy_no`; `type_business_th/en` (adhoc ผ่าน ITD) | 1336967207 |
| `cf_rig_pc_treaty` | Treaty ที่ต้องประมวลผล Profit Commission: FK `cf_treaty_id`, `treaty_code`, `status` A/I | 1319600762 |
| `cf_rig_template_file` | Config ชื่อไฟล์ import/export: `template_file_name` (มี {YEAR}{MM}), `file_type` csv/xlsx, `import_export` I/E, `report_type` | 1291420392 |
| `cf_rig_template_sheet` | Config sheet: FK `cf_template_file_id`; `sheet_name`, `hd_row_count` | 1291420419 |
| `cf_rig_template_field` | Config column ต่อ sheet: `field_name`, `data_type`, `db_table`/`db_field` (landing target), `version` | 1291420362 |
| `cf_rig_treaty` | Treaty master: PK `cf_rig_treaty_id`, FK `cf_reinsurer_id`, Index `treaty_code`, `contract_name`, `process_status` (lookup 1001200), `status` A/I, `approve` boolean (true ตลอดหลัง approve ครั้งแรก) | 1307934990 |
| `cf_rig_treaty_dt` | สถานะรายหัวข้อ config ของ Treaty: คู่ status/process_status ของ general / condition / policy / ri_premium; `status` A/D/I | 1307934995 |
| `cf_rig_treaty_general` | ข้อมูลทั่วไป Treaty: `benefit` (เช่น "1,2,3,4,5"), `start_date`/`expire_date`, `status` A/I/D | 1313144838 |
| **`cf_rig_treaty_cond_hd`** | RI Condition header: PK `cf_rig_treaty_cond_id`, FK `cf_rig_treaty_id`; `ri_method` (lookup 1000600 เช่น QSSUR), `min_sum_assured`, `ri_com_rate`, `percent_profit_comm`, `percent_admin_expense`, `unearn_premium`, `effective_date_from/to`, `status` A/I/D, `child_id` (id เดิมก่อนแก้ไข — version chain) | 1307935005 |
| **`cf_rig_treaty_cond_dt`** | Layer ต่อ condition: FK `cf_rig_treaty_cond_hd_id`; `layer` (L1/L2/L3), `minimum`, `maximum` (SA range), `percent_re` | 1307935007 |
| `cf_rig_treaty_policy_hd` | ตั้งค่ากรมธรรม์ใต้ Treaty (THREL): `policy_no`, `reinsurer_no`, `coverage_period_from/to`, `previous_policy`, `com_date`, `policy_year`, `age_limit`, `occ_class`, `cert_no_incompliant`, `coverage` (ADD1/ADD2), `percent_add`, `murder_assault`, `special_coverage`, `loss_finger`, loading `prem_motorcycle/war/strike_riot/sports_activities/aircraft`, `discount_murder_assault`, `discount_group_vol`, `child_id` | 1307935011 |
| **`cf_rig_treaty_prem_rate_hd`** | RI Premium Rate header: `effective_date_from/to`, `status` A/I/D, `child_id` | 1307935016 |
| **`cf_rig_treaty_prem_rate_dt`** | Rate ราย type/occ/age: `type` (ADD1), `occ_class`, `min_age`, `max_age`, `premium_rate` numeric(10,4) | 1307935025 |
| `cf_treaty_history` | ประวัติเปลี่ยนสถานะ Treaty: `his_action` (lookup 1002000), `his_remark` | 1307935028 |

### 1.2 Master (ms_*) — index 1291420743
- `ms_country` (1325859414): PK `country_code`; `location_code` L=Local/F=Foreign
- `ms_formular` (1317110105): สูตรคำนวณต่อ treaty — `formula_display`, `formula` (เช่น `({L2_PER}/100)*(SUM_INSURED_ACCIDENT - {L1_INSU_MAX})`)
- `ms_rig_process` (1291420769): รายการ Batch Process — `process_code` (RIG_AUTO_01...), `type` A/M, `seq_landing`, `process_group` (RIG_LANDING, RIG_EST_SNAPSHOT, RIG_EST_STAGING, RIG_ACT_SNAPSHOT, RIG_ACT_STAGING)

### 1.3 Landing (`tx_rig_landing_*`) — index 1300726206
14+1 ตาราง 1:1 กับ view ต้นทาง (ทุกตารางเพิ่ม PK เดิมจาก view + FK `rig_process_hd_id` + `period`):
policy, certificate_cust, cert_inforce, certnewbusiness, certalteration, claimdeath, claimhealth, claimtpd, company, exprefund, gl_sophead, investigation_expense, nature_business, unname_policy, prem_rate (1336967224)

### 1.4 Snapshot
- **Estimate snap** (index 1312096888): cert_inforce, cert_newbusiness, certificate_cust, claim_death, claimhealth, claimtpd, company, nature_business, policy, prem_rate, unname_policy
- **Actual snap** (index 1312096890): cert_inforce, certalteration, certificate_cust, claim_death, claimhealth, claimtpd, company, exprefund, gl_sophead, investigation_expense, nature_business, policy, prem_rate, unname_policy
- ต่าง: est มี cert_newbusiness ไม่มี alteration/exprefund/sophead/invest; act ตรงข้าม

### 1.5 Staging — Estimate (`tx_stg_est_*`, index 1313145122)
- `tx_stg_est_all_policy` (1307935298): Input หลัก — `policy_no`, `policy_year`, `first_date`, `promise_date`, `end_date`, `reinsur_no`, `treaty_code`, `sale_option` (0-5), `sale_channel_code` (0=Direct,1=Dai-ichi,2=Co-op), `pay_type`, `dbd_code`, **`ri_status`**, `prev_policy_no`, `expreience_refund` Y/N, `rate_flag`
- `tx_stg_est_death_claim` (1312260823): `certific_cust_no`, `attn_age`, `death_date`, `approve_date`, `life/acc_insur_request`, `claim_life/acc`, `total_claim`, `claim_type`='Death', `inform_no`, `consider_seq`
- `tx_stg_est_health_claim` (1312489770) / `tx_stg_est_tpd_claim` (1312489612)
- `tx_stg_est_inforce_member` (1312489780): รายสมาชิก (R01); `cer_no`, `age`, `sex`, `class_no`, `rate_type`, `prem_rate_life/acc/med/tpd`, `sum_insured_*`, `prem_*` — **แหล่ง rate ระดับ member**
- `tx_stg_est_list_dt` (1292239105): detail List of Policy; `payment_mode`, `ri_status`, `unname`, `type` (glpolicy/gloldpolicy)
- `tx_stg_est_policy_1y` (1291715840): `no_of_member*` + sum insured รวม
- `tx_stg_est_prem_layer` (1310753119): **Layer split GIB**; `level` L1/L2/L3; `amount_*` (member counts), `*_insure`, `*_prem_rate` (ต่อทุน 1,000), เบี้ยทุก coverage

### 1.6 Staging — Actual (`tx_stg_act_*`, index 1313145124)
- `tx_stg_act_all_policy` (1313899631), `tx_stg_act_alteration` (1314422981: `document_date`, `alteration_movement/status/date`, `sum_insured_accident[_before/_after]`), death/health/tpd_claim (+`claim_status`)
- `tx_stg_act_exp_refund` (1314423164): `paid_status`, `percent_exp_refund`, `percent_expense`, `premium_life/accident/tpd`, `total_premium`, `claim`, `exp_refund_previous_year`, `exp_refund`, `period_begin/end_date`; **CR_EXREFUND**: + `claim_life`, `claim_add`, `claim_dismem`, `pending_life`, `pending_add`
- `tx_stg_act_inforce_member` (1313899653), `tx_stg_act_inforce_policy` (1314947605: R17; `period_date`, `no_member_*`, `sum_insured_*`)
- `tx_stg_act_investigation_expense` (1313898949): `claim_no`, `claim_type` (0=มรณกรรม,1=ทุพพลภาพ,2=ค่ารักษา,3=โรคร้ายแรง), `invest_seq`, `consider_seq`, `expense_amount`; #CR_INVEST + `investigation_expense`, `medical_expense`, `legal_expense`
- `tx_stg_act_member_over_age` (1314947635): `cert_no`, `age`, `accident_insure`, `accident_premium`
- `tx_stg_act_prem_layer` (1314422897), `tx_stg_act_prem_movement` (1314423021: `no_mem_previous/addition/cancellation/total`, `premium_*`)

### 1.7 Prevalidated
- `tx_stg_error_data` (1313145166): FK `rig_process_hd_id`, optional `rig_est_hd_id`/`rig_act_hd_id`; `process_code`, `period`, `treaty_code`, `snap_table`, `stg_table`, `policy_no`, `cer_no`, `inform_no`, `err_desc`, `err_field`, `err_field_lookup` — source ของ email แจ้งรายการถูกนำออก

### 1.8 Output — Estimate (index 1313145135)
- `tx_rig_est_hd` (1309999117): PK `rig_est_hd_id`; `closing_period` (YYYYMM), `treaty_code`, `status` (lookup 1001300), `edw_status(+desc)` (1001700), `mps_status(+desc)` (1001900), `ri_std_hd_id[_oic]`, `ri_premium`, `ri_commission`, `claim_recovery`, `due_to` (+ = รับจาก RE), `usage_status` A/I
- **`tx_rig_est_bdr`** (1313144890): BDR รายกรมธรรม์ — FK `rig_est_hd_id`; `data_quarter`, `period`, `policy_no`, `reinsurer_no`, `ri_com_date`, `effective_date`, `mode_pay`, `ri_prem_life/acc`, `ri_comm_*`, `ri_prem_1st_*`, `ri_prem_renew_*`, `event_date`, `ri_claim_*`, `recov_claim_*`, `policy_year`
- **`tx_rig_est_policy_hd`** (1313898886) → **`tx_rig_est_policy_dt`** (1313898890): ราย Layer — **`level`** L1/L2/L3, `ri_prem_life/acc/load`, `ri_prem_disc_ma/gv`, `sum_disc`, `sum_ri_claim_*`, `sum_re_claim_*` — **จุดที่ layer cede% ถูก apply** → **`tx_rig_est_mem_dt`** (1313898892): เคลมรายบุคคล (`ri_claim_*`, `re_claim_*`, `event`)
- `tx_rig_est_pol_mem` (1321304336): audit trail คำนวณรายสมาชิก — layer config snapshot (`l1_min/max/per`...), member counts/SA/prem แยก layer, rate, loading/discount, `condition_id`, `ri_com_rate`
- `tx_rig_est_soa_hd` (1316324078) / `tx_rig_est_soa_dt` (1313439969): ทุกบรรทัด SOA (`prem_new_*`, `prem_renew_*`, `comm_*`, `claim_*`, `claim_exp_*`, `experience_refund_share`, `profit_comm`, `sub_total_due_to/from_reinsurer`)

### 1.9 Output — Actual (index 1313145137)
- `tx_rig_act_hd` (1315536967): **`closing_quarter`** (2026Q1), `quarter_year`, `quarter`, status ชุดเดียวกับ est, **`sum_pc_current_treaty`**, `due_to`
- `tx_rig_act_policy_hd` (1318879304): + ชุด Experience Refund ต่อ policy (`ex_refund_rate_*`, `gross_prem_*` (Pt), `claim_paid_year_*` (Ct), `re_ex_refund`, `net_re_prem_*`, `re_com_*`), `first_date`, `full_year` flag
- **`tx_rig_act_policy_layer`** (1318879306): ราย Layer — `level`; ฝั่ง original `ori_*` + ฝั่ง reinsurance `re_sr_*`, `re_*_prem_*`, `re_claim_paid_*`, `com_*`; #M06 + `re_claim_inv_ex`, `re_claim_leg_ex`, `re_claim_med_ex`
- `tx_rig_act_pol_mem` (1318879308) / `tx_rig_act_claim_mem` (1318879310) / `tx_rig_act_alter_mem` (1318879312): รายสมาชิก — FK `rig_act_policy_layer_id`; `cession_no`
- **BDR chain**: `tx_rig_act_bdr_new_renew` (1316552917: ชุด L1/L2/L3/tot ครบ + ER fields), `tx_rig_act_bdr_pol_mem` (1317896220), `tx_rig_act_bdr_claim` (1317404892: `data_period`, frequencies, layer split; #M06 `tot_re_claim_inv_ex/leg_ex/med_ex`), `tx_rig_act_bdr_claim_mem` (1317896225: `claim_benefits`, `paid_claim_report`, `re_claim_report`), `tx_rig_act_bdr_alter` (1317404894) + `_alter_mem` (1317896230)
- `tx_rig_act_soa_hd/dt` (1316553186/1316553184)
- **Profit Commission**: `tx_rig_profit_hd` (1319600564), `tx_rig_profit_dt` (1319600177: `soa_flag`), `tx_rig_profit_comm` (1316553335: Incomes/Outgoes/`net_balance`/`net_profit_comm`), `tx_rig_allocation_profit` (1317109856: `pc_allocation` รายกรมธรรม์), `tx_rig_pc_offset` (1319600322)
- File tracking: `tx_rig_path_file` (1319601495) + `tx_rig_path_key` (1319370813: `report_type` EST_STG/EST_BDR/ACT_STG..., `file_name`)

### 1.10 Misc
- `tx_rig_process_hd` (1291419974): header batch ทุก process — `process_code`, `status` SUCCESS/ERROR, `usage_status` ACTIVE/INACTIVE, `period`, **`ri_type`** E/A/M, `sum_record`, `year`, `quarter`, `treaty_code` — **join hub**
- `lg_tracking_process` (1312260202): tracking UUID, `percent`, `current_step`
- **`tx_rig_policy_base`** (1301807481): ตั้งฐานกรมธรรม์เคยส่ง RI; source `tx_mps_master_i05`; index `policy_no`+`policy_year`; `ri_commencement_date`
- `tx_rig_profit_comm_base` (1316094708): ตั้งฐาน PC; `total_premium`, `negative_net_balance`, `profit_flag`
- `tx_rig_est_claim_cms` / `tx_rig_act_claim_cms` (1325564636/1327432229): จาก msa-claimtx; `approval_status` WVE/VTS/CANT
- `tx_rig_nature_business` (1319601491): DBD code → type_business_th/en

---

## 2. Source Views — SQL Server OceanLife (`RIG_View_*`)
กติการ่วม: เลือกเฉพาะ `ISNULL(ReInsur_No,'') <> ''`; UNION GLPolicy + GLOldPolicy (จำกัด `GLOldPolicy.PolicyYear >= GLPolicy.PolicyYear - 2`); ROW_NUMBER เป็น PK

| View | Purpose | Notable WHERE | Page |
|---|---|---|---|
| `RIG_View_Policy` | รวม GLPOLICY+GLOLDPOLICY | ReInsur_No ไม่ว่าง (ไม่จำกัดปี); #68635 + `CalculatePremFrom`; `PolicyStatus` B/I/L/C; `ExpreienceRefund` (สะกดตามระบบ) | 1297973352 |
| `RIG_View_CertificateCust` | Certificate รายบุคคล | PromiseDate ≥ −5 ปี; Status='L' → LapseDate ≥ −5 ปี | 1297973413 |
| `RIG_View_CertInforce` | Inforce cert (ZGL_GLInforceHD/DT) | `IFHD.Status <> 2`; ไม่จำกัดปี; OPDLabPrem fix = 0 | 1297973639 |
| `RIG_View_CertNewBusiness` | NB cert | PolicyStatus in ('B','I') เท่านั้น | 1297973669 |
| `RIG_View_ClaimDeath` | Death claims | join CertificateCust; ConsiderSeq = Sequence | 1297973470 |
| `RIG_View_ClaimHealth` | Health claims (IP∪OP∪PA) | PromiseDate ≥ −4 ปี; `MedInsur` เฉพาะ RD_No=26 | 1297973620 |
| `RIG_View_ClaimTPD` | TPD/dismem | ClaimStatus 0=สูญเสียอวัยวะ,1=TPD,2=ทุพพลภาพจากอุบัติเหตุ | 1297973489 |
| `RIG_View_Company` | DBD/TypeBusiness | QCLDOCNO ≠ '', DBDCODE ≠ '', Status <> 2, PromiseDate ≥ −5 ปี | 1297973456 |
| **`RIG_View_ExpRefund`** | Experience Refund | **`ExpreienceRefund = 1` + `PromiseDate ≥ −4 ปี` + `HD.Status > 2`**; #CR_EXREFUND + `ClaimLife/ClaimADD/ClaimDismem`, `Pending*` | 1298301110 |
| `RIG_View_GLSOPHead` | เบี้ยรายเดือน (R17) — MonthExpand 12 เดือน | `MthStatus = 0` + EXISTS GLSOPHead | 1329922098 |
| `RIG_View_InvestigationExpense` | ค่าสืบสวน | #64862 EffectiveDate = PromiseDate ณ event date; `DocStatus` 0 Active/2 ยกเลิก | 1312489574 |
| `RIG_View_NatureBusiness` | DBD master | LEN(CODE)=5, TypeUse='B' | 1308950825 |
| `RIG_View_PremiumRate` | ตารางเบี้ย UW | `Status` 0=Import,1=Approved,2=Cancel | 1336967187 |
| `RIG_View_CertAlteration` | สลักหลัง | PromiseDate ≥ −4 ปี; `DocStatus <> 2` | 1297973407 |
| `RIG_View_UnnamePolicy` | Unname | `PolicyUnname = 1` + `PromiseDate >= '2025-01-01'` | 1310753011 |

---

## 3. Reports RIG-RP-001..023 (index page 1292239456)
Footer มาตรฐาน: วันที่ดาวน์โหลด/ผู้ดาวน์โหลด/วันที่ประมวลผล/ผู้ประมวลผล. Order มาตรฐาน: Policy No ASC → Policy Year ASC.

| RP | File / Path | Source | Notable rules |
|---|---|---|---|
| 001 Policy (1292239479) | `Policy_{FROM}_{TO}_{TREATY}.xlsx` → `\groupri\landing\{period}\report_landing\` | `tx_rig_landing_policy` | RI Status rule; #CR_RATE: TypePremiumRate จาก rate_flag |
| 002/003 Est/Act_PremiumLayer | `report_reconcile` | `tx_stg_est/act_prem_layer` | order + Level ASC |
| 004–007 | Alteration / Premium_Movement / MemberOverAge / InvestigationExpense `{YYYY}{QQ}` | staging ตรงชื่อ | |
| 008–010 BDR Est (EDW) (1312719878/1312719913/1312719944) | `Est_{Daiichi\|GIB\|Thaire}_{YYYY}{MM}` → `report_bdr` | `tx_rig_est_bdr` | Daiichi เบี้ย=0 (claim only); Thaire Life=0 |
| 011 SOA_Est (1312719951) | `SOA_Est_{Daiichi\|GIB\|Thaire}_{YYYYMM}_export` → `report_soa` | est_soa_hd/dt | GIB/Thaire แยกไฟล์ตามเดือน Eff Date |
| 012 I_Master (1314422840) | `I_Master_Est_*_{YYYYMM}_export` → `report_mps` | est_bdr + est_hd | เฉพาะรายการมีเบี้ย; ส่งเข้า MPS |
| 013/014 BDR Act GIB/Thaire (EDW) (1314653042/1314653061) | `Act_{GIB\|Thaire}_{YYYY}{QQ}` | bdr_new_renew + claim + alter | Policy Year = (ปี eff_from − ปี first_date)+1 |
| 015/016 PC (1314653098/1314653113) | `Profit Commission_EB_{YYYY}` / `Profit_Commission_Thaire_Group PA_{YYYY}` → `report_profit` | `tx_rig_profit_comm` | Incomes(1)(2)(3)/Outgoes(4)–(10)/Net balance |
| **017 BDR Act GIB (Reinsurer)** (1315340334) | `EB Group_{YEAR}Q{QUARTER}.xlsx` | new_renew/claim/claim_mem | **3 sheets**: ①Bordereau (4 rows/กธ.: รวม,L1,L2,L3) ②Claim Notification (3 sheets/Q ตาม data_period; Original SI Accident = acc+dismem 09/04/2026; Payment Date = approve_date) ③Experience Refund (คอลัมน์ต่อกธ. `policy_no_Life/Accident`; cap ≤ Reins.Prem − Reins.Comm) |
| 018 BDR Act Thaire (Reinsurer) (1315340365) | `GroupPA_{Renewal\|Alteration\|Claim}_{COMPNAME}_{YYYY}Q{Q}_{POLICYNO}` (ไฟล์แยกต่อกธ.) | new_renew+pol_mem / alter+alter_mem / claim+claim_mem | Alteration แยก 5 หมวด |
| **019 BDR Act Daiichi (Reinsurer)** (1316094371) | `Daiichi_{YEAR}Q{QUARTER}.xlsx` | bdr_claim + claim_mem | **4 sheets**: DT Claim / MedAcc / MedClaim (block ต่อ policy) / Dismemberment Claim (No. DMC.xxx reset ทุก Q) |
| 020 Allocation_PC (1317404690) | `Allocation_Profit Commission_{YYYY}` | allocation_profit + profit_dt | |
| 021 SOA_Act (1317896400) | `SOA_Act_{TreatyAbbr}_{YYYY}{QQ}` | act_soa_dt | Treaty Eff Date = `cf_rig_treaty_general.start_date` (18/06/2026); 0/NULL → "-", ค่าลบ ( ) |
| **022 Est_MemberLayer (NEW)** (1339195413) | `Est_MemberLayer_{YYYY}{MM}` → `report_reconcile` | `tx_stg_est_inforce_member` | **กรอง `treaty_code = 'GIB_Grp_Direct_EB'` เท่านั้น**; รายสมาชิก: CertNo, Age, SumInsured×4, PremiumRate×4, Premium, TypePremiumRate = `rate_type` |
| **023 Act_MemberLayer (NEW)** (1339195415) | `Act_MemberLayer_{YYYY}{QQ}` | `tx_stg_act_inforce_member` | เหมือน 022 (Actual) |

### Screens (RIG-SD-*)
- SD-001 (1292861487) นำเข้า Investigate Expense; SD-002 (1294663956) นำเข้า Unname Est; SD-003 (1312490205) Reconcile Data — download RP-001..007, 022/023
- SD-005 (1314423434) จัดการ Reinsurer; SD-006 (1314423437) จัดการ Treaty (9 หน้าย่อย); SD-007 (1314423441) ประมวลผล Estimate; SD-008 (1314423443) ประมวลผล Actual

---

## 4. Appendix key rules

**A01 Email templates** (1322189031/1322188892/1316552943/1316552941): error-import ส่ง IT Support เมื่อ `tx_rig_process_hd.status='ERROR'`; email_code `RIG_Data_*`/`RIG_Process_*` จาก `cf_rig_email`; นับรายการถูกนำออกจาก `tx_stg_error_data`

**A03 RI Status** (ใน A09-4/5 + RP-001): Inforce/NB: End Date ≥ วันสิ้นเดือน Closing → PY=1 New Business / >1 Inforce; < → Lapsed; Lapse → Lapse; C → Cancel

**A08 (1) ตรวจไฟล์นำเข้า** (1294992069): .xlsx เท่านั้น; ตรวจ: จำนวนคอลัมน์ → ชื่อคอลัมน์ ("รูปแบบไฟล์ไม่ถูกต้อง") → Data Type → วันที่ dd/mm/yyyy ค.ศ. → Duplicate ("นำเข้าไม่สำเร็จ")

**A08 (2) Maker/Checker statuses** (1292862006): กำลังดำเนินการ / รูปแบบไฟล์ไม่ถูกต้อง / นำเข้าไม่สำเร็จ / รอยืนยันส่งอนุมัติ (Maker) / รออนุมัติข้อมูล (Checker) / ยืนยันนำเข้าข้อมูลสำเร็จ / ยกเลิกข้อมูล — แต่ละสถานะ disable ปุ่มต่างกัน

**A10 เก็บ Export File** (1319601478): ทุกไฟล์ลง `tx_rig_path_key` + `tx_rig_path_file`

**A11/A12 Report order EDW** (1322353339/1324155492): Group ① รายการมีเบี้ย ② เฉพาะเคลม; order by policy_no, policy_year

**A13 แยกสินไหมตามความคุ้มครองของ Experience Refund** (1329627929):
| ความคุ้มครอง | ประเภทสินไหม |
|---|---|
| Life | สินไหมชีวิต |
| Accident | สินไหมอุบัติเหตุชีวิต — เคลมด้วยทุนอุบัติเหตุ |
| Dismemberment | สินไหมสูญเสียอวัยวะ + สินไหมทุพพลภาพอุบัติเหตุ (ทุนอุบัติเหตุ) |
| TPD | สินไหมทุพพลภาพอุบัติเหตุ — เคลมด้วยทุน TPD |
| Health | สินไหมสุขภาพ |

---
### หมายเหตุสำหรับ UAT
- Join hub: `tx_rig_process_hd.rig_process_hd_id` ผูกทุก landing/snapshot/staging; Estimate chain: est_hd → est_policy_hd → est_policy_dt (layer) → est_mem_dt; BDR est = `tx_rig_est_bdr` (FK est_hd โดยตรง). Actual chain: act_hd → act_policy_hd → act_policy_layer → act_pol_mem/act_claim_mem/act_alter_mem; BDR act: bdr_new_renew→bdr_pol_mem, bdr_claim→bdr_claim_mem, bdr_alter→bdr_alter_mem
- ตัวสะกดที่ระบบใช้จริง (query ตามนี้): `expreience_refund`, `reinsur_no` vs `reinsurer_no` vs `re_insur_no` (ต่างชั้นต่างชื่อ), `ri_claim_dismen` (est_mem_dt), `calim_new_actual`/`calim_renew_actual` (SOA page titles)

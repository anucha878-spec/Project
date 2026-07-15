# สรุป Wiki — New Group RI: PS-06 Estimate / PS-07 Actual / PS-09 Profit Commission / RI Status

> Generated 2026-07-02 from wiki dump (files: 20-ps06-estimate-calc.md, 21-ps07-actual-calc.md, 22-ps09-profit-commission.md, 10-business-rules.md)
> URL pattern: `http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}`
> Treaty ทั้ง 3: `DAI_Grp_Daiichi_Coins` (coinsurance, L1 อย่างเดียว), `GIB_Grp_Direct_EB` (Direct EB, Life+ADD, 3 layers), `THREL_Grp_PA` (PA, per-member rate)

---

## 1. RIG-PS-06 ประมวลผล Estimate (page **1308459473**)

รันอัตโนมัติ ณ สิ้นเดือน หลัง RIG-PS-04 (Estimate Staging) เสร็จ; Period = yyyyMM (ถ้า PS-04 เสร็จหลังเที่ยงคืนวันที่ 1 ให้ใช้เดือน−1) Output: RIG-RP-001/002/008/009/010 (BDR Est), RP-011 (SOA), RP-012 (I_Master)

### 1.1 ตรวจสอบ Treaty (page 1312490014)
- เงื่อนไข: `cf_rig_treaty.approve = TRUE`, `cf_rig_treaty.status = 'A'`, Period อยู่ระหว่าง `cf_rig_treaty_general.start_date`–`expire_date` → เก็บ {TREATY_ID}
- สร้าง `tx_rig_est_hd` (status เริ่ม PROCESSING → SUCCESS/ERROR; ri_premium/ri_commission/claim_recovery/due_to เริ่ม 0)
- เตรียม parameter: {RE_CODE} จาก `cf_lookup_catalog.parent_id = 1000100` (เทียบ treaty_code กับ description → เก็บ lookup_key); flag config จาก `cf_rig_treaty_dt.status_general/status_condition/status_policy/status_ri_premium`
- เก็บ ID ของ config ที่ status = 'A' เท่านั้น: {CONDITION_ID} จาก `cf_rig_treaty_cond_hd` (วันเริ่มสัญญาอยู่ในช่วง effective_date_from–to), {POLICY_ID} จาก `cf_rig_treaty_policy_hd`, {RIPREM_ID} จาก `cf_rig_treaty_prem_rate_hd`
- ความหมาย status config: **A**=Active ใช้ประมวลผล, **I**=Inactive (ประวัติ), **D**=Draft ระหว่างแก้ไข

### 1.2 การคัดเลือกกรมธรรม์ (page **1312490007**)
- ถ้า {TREATY_CODE} = `DAI_Grp_Daiichi_Coins` → ข้ามไปทำเฉพาะ "5. การคำนวณ RI Claim" (DAI ไม่คิดเบี้ย Estimate)
- **{POLICY_STATUS} = TRUE (THREL — config รายกรมธรรม์):** ดึง `cf_rig_treaty_policy_hd.policy_no` ที่ status='A', usage_process_status='A'; ค่า policy-level: {AGE_LIMIT}=age_limit, {CER_INCOM}=cert_no_incompliant, {POLIC_COV}=coverage(ADD1/ADD2), {PER_ADD}, {PER_MUR}=murder_assault, {PER_SPE_COV}, {PER_MOT}/{PER_WAR}/{PER_STRIKE}/{PER_SPORT}/{PER_AIR}, {PER_DIS_MUR}=discount_murder_assualt, {PER_DIS_VOL}=discount_group_vol; {COM_DATE}/{POLICY_YEAR} จาก `tx_stg_est_policy_1y.first_date/policy_year`
- **{POLICY_STATUS} = FALSE (GIB):** {RE_CODE} ต้องตรง 2 ตัวอักษรแรกของ `tx_stg_est_policy_1y.reinsured_no`; ดึง {COV_FROM}=promise_date, {COV_TO}=expire_date, {RATE_FLAG}=`tx_stg_est_all_policy.rate_flag` (#CR_RATE)
- คัดออก (ทั้ง 2 แบบ): `tx_stg_est_policy_1y.no_of_member_active = 0` → error "002"; พบใน `tx_rig_policy_base` แล้ว (policy_no + policy_year + ri_commencement_date ตรง) → error "003" (กันประมวลผลซ้ำ — Estimate คิดเบี้ยครั้งเดียวต่อปีกรมธรรม์)

### 1.3 การคำนวณ RI Premium (page **1312719152**) — สำคัญที่สุด

**A) {POLICY_STATUS}=TRUE (THREL PA — คิดจาก rate รายสมาชิก):**
- กรองสมาชิก `tx_stg_est_inforce_member`: sum_insured_accident ≥ {MIN_SUM_ASU} (`cf_rig_treaty_cond_hd.min_sum_assured`), age ≤ {AGE_LIMIT} (เกินได้ถ้า cer_no อยู่ใน {CER_INCOM} ไม่งั้น error "004")
- Layer จาก `cf_rig_treaty_cond_dt` (layer=L1/L2/L3 → minimum/maximum/percent_re = {Lx_INSU_MIN}/{Lx_INSU_MAX}/{Lx_PER})
- **SR (Sum at Risk) รายสมาชิก:** L1: `{L1_SR_ACC} = 0`; L2: `{L2_SR_ACC} = ({L2_PER}/100) * (sum_insured_accident - {L1_INSU_MAX})`; L3: `{L3_SR_ACC} = ({L3_PER}/100) * (sum_insured_accident - {L2_INSU_MAX}) + ({L2_PER}/100) * ({L2_INSU_MAX} - {L1_INSU_MAX})`
- `{Lx_SR_MUR} = {Lx_SR_ACC} * {PER_MUR}/100`; `{Lx_SR_LOAD} = {Lx_SR_ACC} * {PER_SPE_COV}/100`
- Rate: `cf_rig_treaty_prem_rate_dt.premium_rate` โดย type = {POLIC_COV}(ADD1/ADD2), min_age ≤ age ≤ max_age, occ_class = {OCC} → {RI_PREM_RATE} (**rate เลือกระดับสมาชิก ไม่ใช่ระดับ layer**)
- `{Lx_RI_PREM_ACC} = Round({Lx_SR_ACC}/1000 * {RI_PREM_RATE}, 2)`
- `{ALL_PER_LOAD} = {PER_MOT}+{PER_WAR}+{PER_STRIKE}+{PER_SPORT}+{PER_AIR}`; `{Lx_RI_PREM_LOAD} = Round((({Lx_SR_LOAD}/1000)*{RI_PREM_RATE})*({ALL_PER_LOAD}/100), 2)`
- ส่วนลด: `{Lx_RI_PREM_DISC_MA} = Round({PER_DIS_MUR}*{Lx_RI_PREM_ACC}/100, 2)`; `{Lx_RI_PREM_DISC_GV} = Round(({PER_DIS_VOL}/100)*(1-({PER_DIS_MUR}/100))*({Lx_RI_PREM_ACC}+{Lx_RI_PREM_LOAD}), 2)`; `{Lx_SUM_DISC} = MA+GV`
- `{Lx_TOT_PREM} = Round({Lx_RI_PREM_ACC}+{Lx_RI_PREM_LOAD}-{SUM_DISC}, 2)`; Total ระดับกรม: `{RI_PREM_TOT} = Round({RI_PREM_ACC}+{RI_PREM_LOAD}-{SUM_DISC}, 2)` (รวมทุกสมาชิก)

**B) {POLICY_STATUS}=FALSE (GIB — split layer จาก premium layer):**
- {PAY_TYPE}: Annual=1, Semi Annual=2, Quarterly=4, Monthly=12 (จาก `tx_stg_est_all_policy.pay_type`)
- Layer config: {Lx_MIN}/{Lx_MAX}/{Lx_PER} จาก `cf_rig_treaty_cond_dt`; `{L1_L2_MID} = {L2_MAX} - {L1_MAX}`
- ข้อมูลกรม: `tx_stg_est_prem_layer` (level=L1/L2/L3): amount_life/amount_accident = {Lx_MEM_*}, life_insure/accident_insure = {Lx_INS_*}, life_prem/accident_prem + *_extra_prem = {PRE_Lx_*}, life_prem_rate/accident_prem_rate = {Lx_PREM_*_RATE}
- **โหมดปกติ** (ไม่มี L2/L3, หรือ {RATE_FLAG}≠1, หรือ {RATE_FLAG}=1 แต่ {COV_FROM} < CR_RATE_DATE ใน `cf_lookup_catalog.parent_id=1003500, lookup_key=CR_RATE_DATE`) — คิดระดับกรมธรรม์:
  - `{SUM_ALL_PREM_LIFE} = Round({PAY_TYPE} * {PRE_SUM_ALL_PREM_LIFE}, 2)` (prem+extra ทุก layer)
  - `{L3_PREM_LIFE} = {PAY_TYPE} * ({L3_PREM_LIFE_RATE}/1000) * ({L3_INS_LIFE} - ({L3_MEM_LIFE}*{L2_MAX}))`
  - `{L2_PREM_LIFE} = {PAY_TYPE} * ({L2_PREM_LIFE_RATE}/1000) * ({L2_INS_LIFE} - ({L2_MEM_LIFE}*{L1_MAX}) + ({L3_MEM_LIFE}*{L1_L2_MID}))`
  - `{L1_PREM_LIFE} = {SUM_ALL_PREM_LIFE} - {L2_PREM_LIFE} - {L3_PREM_LIFE}` (**L1 = residual**) — ACC สูตรเดียวกัน
- **โหมด CR_RATE** ({RATE_FLAG}=1 และ {COV_FROM} ≥ CR_RATE_DATE) — **คิด L2/L3 รายสมาชิก (marginal) จาก `tx_stg_est_inforce_member` แล้ว L1 = residual**:
  - `{L3_PREM_LIFE_BY_MEM} = (({PAY_TYPE}*{L3_PREM_LIFE_RATE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM}-{L2_MAX})/1000)) + (({PAY_TYPE}*{PRE_L3_EXPREM_LIFE_BY_MEM}) * (({L3_INS_LIFE_BY_MEM}-{L2_MAX})/{L3_INS_LIFE_BY_MEM}))`
  - `{L2_PREM_LIFE_BY_MEM}` (สมาชิกที่ทุนอยู่ L3 ต้องถูกคิดส่วน L2 ด้วย) `= (({PAY_TYPE}*{L2_PREM_LIFE_RATE_BY_MEM})*(({L2_INS_LIFE_BY_MEM}-{L1_MAX})/1000)) + (({PAY_TYPE}*{PRE_L2_EXPREM_LIFE_BY_MEM})*(({L2_INS_LIFE_BY_MEM}-{L1_MAX})/{L2_INS_LIFE_BY_MEM})) + (({PAY_TYPE}*{L2_PREM_LIFE_RATE_BY_MEM})*({L1_L2_MID}/1000)) + (({PAY_TYPE}*{PRE_L3_EXPREM_LIFE_BY_MEM})/{L3_INS_LIFE_BY_MEM})`
  - รวม: `{L3_PREM_LIFE}=Round(SUM{L3_PREM_LIFE_BY_MEM},2)`, `{L2_PREM_LIFE}=Round(SUM{L2_..._BY_MEM},2)`, `{L1_PREM_LIFE}=Round({SUM_ALL_PREM_LIFE}-{L2}-{L3},2)` — ACC เหมือนกัน
- **RI Premium (apply layer cede% หลังแยก premium):** `{Lx_RI_PREM_LIFE} = Round(({Lx_PER} × {Lx_PREM_LIFE})/100, 2)`; `{Lx_RI_PREM_ACC} = Round(({Lx_PER} × {Lx_PREM_ACC})/100, 2)`; `{SUM_RI_PREM_LIFE/ACC}` = รวม 3 layer

### 1.4 RI Commission (page **1312490011**)
- {RI_COM_RATE} = `cf_rig_treaty_cond_hd.ri_com_rate`
- TRUE (THREL): `{Lx_RI_COM_ACC} = Round(({RI_COM_RATE}/100) × {Lx_TOT_PREM}, 2)`; {RI_COM_ACC} = รวม 3 layer
- FALSE (GIB): `{RI_COM_LIFE} = Round(({RI_COM_RATE}/100) × {SUM_RI_PREM_LIFE}, 2)`; `{RI_COM_ACC} = Round(({RI_COM_RATE}/100) × {SUM_RI_PREM_ACC}, 2)`

### 1.5 RI Claim (page **1312490016**)
- แหล่ง: `tx_stg_est_death_claim` / `tx_stg_est_tpd_claim` / `tx_stg_est_health_claim` (join `tx_stg_est_all_policy` ด้วย policy_no+policy_year; ri_status ตาม lookup parent_id=1002800); กรองตาม `cf_rig_treaty_general.benefit`: 1=Life (claim_acc=0), 2=TPD (claim_type='TPD'), 3=Dismemberment (claim_type='Dismemberment' และ attn_age≤70), 4=Medical (ทุกรายการ health), 5=Accident Death (claim_acc>0 และ attn_age≤70)
- {CONDITION_ID} เลือกด้วย {EFF_DATE} ของรายการเคลม; แบ่ง Layer จากทุนของ claim ({SUM_INS_ACC}/{SUM_INS_LIFE}/{SUM_INS_DISMEM}/{SUM_INS_TPD}/{SUM_INS_HEALTH} เทียบ {Lx_INSU_MIN}–{Lx_INSU_MAX}); DAI: health อยู่ L1 เท่านั้น
- **TRUE (THREL) — SR-proportional:** L1 → {SR_ACC}=0 ไม่ประมวลผลต่อ; L2: `{SR_ACC}=({L2_PER}/100)*({SUM_INS_ACC}-{L1_INSU_MAX})`; L3: `{SR_ACC}=({L3_PER}/100)*({SUM_INS_ACC}-{L2_INSU_MAX})+({L2_PER}/100)*({L2_INSU_MAX}-{L1_INSU_MAX})`; แล้ว `RI_CLAIM = ({CLAIM_x}/{SUM_INS_x}) * {SR_ACC}` (ACC_DEATH/DISMEM/TPD)
- **FALSE (GIB) — layered % ตรง:** L1: `Round(({L1_PER}/100)*{CLAIM_x},2)`; L2: `Round(({L1_PER}/100)*{L1_INSU_MAX},2) + Round(({L2_PER}/100)*({CLAIM_x}-{L1_INSU_MAX}),2)`; L3: `Round(({L1_PER}/100)*{L1_INSU_MAX},2) + Round(({L2_PER}/100)*{L1_L2_MID},2) + Round(({L3_PER}/100)*({CLAIM_x}-{L2_INSU_MAX}),2)`; ADD = `Round(({L1_PER}/100)*({CLAIM_ACC จาก AccDeath}+{CLAIM_ACC จาก Dismem}),2)`
- Claim Recovery = ผลรวม RI Claim ทุกคนในกรมเดียวกัน ปีเดียวกัน ต่อ Layer

### 1.6 Mapping Estimate BDR (page **1312490056**)
- Output tables: `tx_rig_est_hd` → `tx_rig_est_policy_hd` (group ตาม policy_no+effective_date+data_quarter) → `tx_rig_est_policy_dt` (**สร้าง 3 แถวเสมอ level L1/L2/L3**: ri_prem_life/acc/load, disc_ma/disc_gv/sum_disc, sum_ri_claim_*, sum_re_claim_*) → `tx_rig_est_mem_dt` (claim รายสมาชิกต่อ level) → `tx_rig_est_bdr` (1 แถว/กรม/effective_date):
  - `ri_prem_life`: POLICY_STATUS=TRUE → 0; FALSE → Σ tx_rig_est_policy_dt.ri_prem_life 3 layer
  - `ri_prem_acc`: TRUE → `Round(Σri_prem_acc + Σri_prem_load − Σsum_disc, 2)`; FALSE → Σri_prem_acc
  - `ri_comm_life`: TRUE → 0; FALSE → {RI_COM_LIFE}; `ri_comm_acc` = {RI_COM_ACC}
  - `ri_claim_add`: TRUE → Σ(sum_re_claim_dismem + sum_re_claim_acc_death + sum_re_claim_tpd); FALSE → Σ(acc_death + dismem); `ri_claim_tpd`: TRUE → 0, FALSE → Σsum_re_claim_tpd
  - `event_date` = Accident Date เก่าที่สุดในกรม
- `tx_rig_policy_base`: บันทึกเฉพาะกรมที่ยังไม่เคยบันทึก (policy_no, policy_year, ri_commencement_date=effective_date); Treaty PA policy_year=1 เสมอ (เปลี่ยนเลขกรมทุกปี)

### 1.7 Estimate SOA (page **1314194015**)
- `tx_rig_est_soa_hd` แยกตาม `tx_rig_est_policy_hd.period` ภายใต้ closing_period; `tx_rig_est_soa_dt` (ถ้า numeric ทุกตัว = 0 ไม่ลงแถว/ไม่ออก Sheet)
- **new** = `tx_rig_est_bdr.policy_year = 1` (page 1314652185); **renew** = `policy_year > 1` (page 1314652187)
- **sum_premium** (page 1316324192): prem/comm → SUM ทุกรายการใน Period เดียวกัน; **sum_claim** (page 1314652520): claim → รวมทุก period ใส่ในแถวที่ period = closing_period (period อื่นใส่ 0; ถ้าไม่มีแถว closing_period ต้องสร้างชีทรองรับเสมอ)
- Field: prem_new_life ← ri_prem_life (py=1), prem_new_add ← ri_prem_acc (py=1); prem_renew_* (py>1); comm_new_*/comm_renew_* ← ri_comm_*; claim_new_*/claim_renew_* ← ri_claim_life/add/tpd/med; refund/revival/PC = Fix 0 ใน Estimate
- `sub_total_due_to_reinsurer` = Σ(prem_new_total + prem_renew_1y_total + prem_renew_total + comm_refund_* + revival_*); `sub_total_due_from_reinsurer` = Σ(comm_new_total + comm_renew_total + prem_refund_* + claim_new_total + claim_renew_total + claim_exp_total); `due_to/due_from` = ผลต่างฝั่งที่มากกว่า; `tx_rig_est_soa_hd.net_balance_due_to_reinsurer = sub_total_due_to − sub_total_due_from`
- Error-cut Estimate (page 1313899154): ลง `tx_stg_error_data` process_code=`EST_MAIN_PROCESS`, err_desc จาก `cf_lookup_catalog.parent_id = 1002900` (รหัส 002=member_active=0, 003=ซ้ำใน policy_base, 004=อายุเกิน age_limit ไม่อยู่ใน cert_no_incompliant)

---

## 2. RIG-PS-07 ประมวลผล Actual (page **1309999106**)

Manual trigger จากหน้าจอ RIG-SD-008; Period = yyyyQQ; สร้าง snapshot/staging ครั้งเดียวต่อ YYYY/QQ (PS-03, PS-05) Output: RP-017/018/019 (BDR Reinsurer), RP-013/014 (EDW), RP-021 (SOA_Act)
Treaty check (page 1289389366) เหมือน PS-06 แต่สร้าง `tx_rig_act_hd` (มี period, data_quarter=YYYYQX จากเดือน, closing_period)

### 2.1 DAI_Grp_Daiichi_Coins (page **1316553444**) — เคลมอย่างเดียว
- ค้นจาก `tx_stg_act_death_claim`/`tx_stg_act_tpd_claim`/`tx_stg_act_health_claim` โดย {RE_CODE} ตรง 2 ตัวแรกของ reinsured_no; เลือกเฉพาะรายการที่ `approve_date`/`approved_date` อยู่ในช่วง Quarter; claim_status: death/tpd = '0' เท่านั้น, health = 'A0','A1'
- {RI_POL_STATUS} = Cancel → ตัดออก error "005"
- **Fix {L1_PER}** (`cf_rig_treaty_cond_dt.percent_re` L1) กับทุกเคลม; เลือก {CONDITION_ID} ด้วย {COV_FROM}
- สูตร: `Round(({L1_PER}/100) * {CLAIM_LIFE|CLAIM_ACC|CLAIM_TPD|CLAIM_IPD|CLAIM_OPD|CLAIM_DENTAL|CLAIM_MED_ACC}, 2)` → {L1_RI_CLAIM_LIFE/ACC_DEATH/TPD/DISMEM/IPD/OPD/DENTAL/MED_ACC}

### 2.2 GIB_Grp_Direct_EB (page **1316553451**) — flow ใหญ่สุด
**หลักการ:** ดึงทุกกรมที่ยังมีผลใน Q; คำนวณ Premium เฉพาะรายการ**เดือนแรกของสัญญา** (ปีเดือนของ effective_date = period_date); คำนวณ **Movement ครบปี** เฉพาะรายการที่ end_date = {PERIOD_DATE_TO}; รายการอื่น = Movement (Revivals/Refund); เคลมที่ถูกปฏิเสธ → เช็ค Investigate Expense ถ้ามีให้คำนวณออก BDR ถ้าไม่มีตัดออก

**คัดเลือก:** จาก R61 `tx_stg_act_prem_movement` ({RE_CODE} match reinsured_no, {PERIOD_MONTH}=ปีเดือนของ period_date อยู่ใน Quarter) 1 กรม = 12 เดือน; {PAY_MODE}: Annual=1/Monthly=12/Quarterly=4/Semi-Annual=2; {PAY_MODE_GIB} (BDR): Annual=3/Monthly=0/Quarterly=1/Semi-Annual=2; แปลงเบี้ยรายปี (เฉพาะเดือนแรก): `{Y_PREM_ACC}={PREM_ACC}*{PAY_MODE}`, `{Y_PREM_LIFE_E1}=({PREM_LIFE}+{PREM_E1})*{PAY_MODE}`
- `tx_stg_act_all_policy`: {COM_DATE}=วัน/เดือนจาก first_date + ปีจาก reinsur_no 2 หลักแรก; **{POLICY_YEAR_RI} = (ปีของ {COV_FROM} − ปีของ {COM_DATE}) + 1**; {GIB_RI_STATUS}: Inforce/New Business → py_ri=1 ⇒ New Business, >1 ⇒ Inforce; Lapsed → Lapsed; #CR_LAPSE: กรม Lapsed เช็ค lapse_date−1 ว่าอยู่ใน Q → ประมวลผลแบบครบรอบปี (เช็ค `tx_rig_act_bdr_new_renew.full_year`; hd ต้อง usage_status='A')
- `tx_stg_act_inforce_policy` (ต้นสัญญา): เลือก period_date ใน Q หรือรอบก่อนหน้าที่ใกล้สุด; ถ้า no_member_life=0 ข้ามไปรอบก่อนหน้า (#ISSUE_176) → {MEM_LIFE}, {MEM_ACC_DEATH}, {INS_LIFE}, {INS_ACC_DEATH}
- `tx_stg_act_prem_layer`: {L1_MEM_LIFE} = **{MEM_LIFE} − {L2_MEM_LIFE} − {L3_MEM_LIFE}** (L1 member = residual), L2/L3 จาก amount_life/amount_accident; โหมด CR_RATE ({RATE_FLAG}=1, {COV_FROM} ≥ CR_RATE_DATE) เพิ่มการเก็บรายสมาชิกจาก `tx_stg_act_inforce_member` เหมือน PS-06; Rate เฉลี่ยออก report: `{PREM_LIFE_RATE}=Round(({SUM_LIFE_PREM_EX}/{SUM_LIFE_INS})*1000,2)`
- `tx_stg_act_member_over_age`: `{Y_ACC_PREM_OVER}={ACC_PREM}*{PAY_MODE}`; {Y_SUM_ACC_PREM_OVER} = Σ ทุกคนในกรม+policy_year (หักสมาชิกอายุเกินออกจากเบี้ย ACC)

**แยก Layer SA (คำนวณทุกกรมใน Q เสมอ):**
- `{L2_SA_LIFE} = Round({L2_LIFE_INS} − ({L1_MAX}*{L2_MEM_LIFE}) + ({L1_L2_MID}*{L3_MEM_LIFE}), 2)`
- `{L3_SA_LIFE} = Round({L3_LIFE_INS} − ({L2_MAX}*{L3_MEM_LIFE}), 2)`
- `{L1_SA_LIFE} = {INS_LIFE} − {L2_SA_LIFE} − {L3_SA_LIFE}` (residual); `{Lx_SR_LIFE} = Round({Lx_SA_LIFE}*{Lx_PER}/100, 2)` — ACC ใช้ {INS_ACC_DEATH} แบบเดียวกัน

**คำนวณ Premium (เฉพาะเดือนแรก):** `{Y_SUM_PREM_ACC} = {Y_PREM_ACC} − {Y_SUM_ACC_PREM_OVER}`; โหมดปกติ: L2/L3 prem ตามสูตร rate ระดับกรม, L1 = residual; โหมด CR_RATE: L2/L3 รายสมาชิก ({PAY_MODE} แทน {PAY_TYPE}) แล้ว `{L1_PREM_LIFE}=Round({Y_PREM_LIFE_E1}−{L2_PREM_LIFE}−{L3_PREM_LIFE},2)`, `{L1_PREM_ACC}=Round({Y_SUM_PREM_ACC}−{L2_PREM_ACC}−{L3_PREM_ACC},2)`; RI: `{Lx_RI_PREM_LIFE/ACC} = Round({Lx_PREM_*} * {Lx_PER}/100, 2)`
- #CR_EXREFUND: กรมที่จะเข้า Exp Refund ต้อง ri_status <> Lapsed, `tx_stg_act_all_policy.expreience_refund` (py−1) = Yes, และมีใน `tx_stg_act_exp_refund` (py−1) ที่ premium_life/premium_accident ไม่เป็น 0 ทั้งคู่ ไม่งั้น error "008"

**Movement ระหว่างปี (Revivals/Refund)** — รายการที่ปีเดือน {COV_FROM} ≠ {PERIOD_MONTH}, เก็บ **Level 1 เท่านั้น**: ถ้า {PAY_MODE}=1(Annual): {REVIVAL_PREM_LIFE}={PREM_LIFE_E1}≥0, {REFUND_PREM_LIFE}={PREM_LIFE_E1}<0 (ACC เช่นกัน); ถ้าไม่ใช่ Annual = 0 ทั้งหมด; รวมปีกรมเดียวกัน → SUM; `{RI_SUM_REVIVAL/REFUND_PREM_*} = Round(SUM * {L1_PER}/100, 2)`

**ครบปีกรมธรรม์ (end_date = {PERIOD_DATE_TO}):** ค้นเบี้ยที่จ่ายแล้วทั้งปีจาก `tx_rig_act_bdr_new_renew` (policy_no, policy_year={POLICY_YEAR_RI}, effective_date_from={COV_FROM}, hd usage_status='A') → {CURRENT_PAY_PREM_LIFE}=Σtot_ori_tl_prem_life, {CURRENT_PAY_PREM_ACC}=Σtot_ori_tl_prem_add (+Movement ใน Q เดียวกันที่ยังไม่บันทึก DB); `{SUM_PREM_LIFE_YBEFORE} = {BF_SUM_PREM_LIFE_E1} − {CURRENT_PAY_PREM_LIFE}`; `{SUM_PREM_ACC_YBEFORE} = {BF_SUM_PREM_ACC} − {BF_Y_SUM_ACC_PREM_OVER} − {CURRENT_PAY_PREM_ACC}`; ≥0 → REVIVAL, <0 → REFUND; RI = *{L1_PER}/100; เก็บ {FULL_YEAR}=TRUE

**เบี้ยรวม:** `{L1_TL_PREM_LIFE} = {L1_PREM_LIFE} + {SUM_REVIVAL_PREM_LIFE} − {SUM_REFUND_PREM_LIFE}` (L2/L3 = ค่าเดิม); `{RI_L1_TL_PREM_LIFE} = {L1_RI_PREM_LIFE} + {RI_SUM_REVIVAL_PREM_LIFE} − {RI_SUM_REFUND_PREM_LIFE}`; {TOT_RI_TL_PREM_LIFE/ACC} = รวม 3 layer
**RI Commission (ACT):** `{RI_COMM_Lx_LIFE/ACC} = Round({RI_Lx_TL_PREM_*} * {RI_COM_RATE}/100, 2)`; TOT = รวม 3 layer
**Rate report:** ปกติ `Round({L1_*_PREM_RATE}*{PAY_MODE}, 4)`; CR_RATE `Round((({SUM_*_PREM_EX}*{PAY_MODE})/{SUM_*_INS})*1000, 4)` (Redmine 64870)

**RI Claim (ACT GIB):** จาก death/tpd claim + `tx_stg_act_investigation_expense` (match {INFROM_NO}={DOC_NO}/{CLAIM_NO} + claim_type; เคลมหลายความคุ้มครองประมวลผล expense ครั้งเดียว — Life ก่อน AccDeath, Dismem ก่อน TPD); claim_status = 0 และ 2 เท่านั้น (2=ปฏิเสธ ต้องมี investigation expense); Accident Death/Dismemberment ที่ {ATT_AGE}>70 ตัดออก (#AFTER_CLAIM); เลือก layer จากทุน เทียบ {Lx_INSU_MIN/MAX}
- สูตรเหมือน Estimate-FALSE: L1 `Round(({L1_PER}/100)*{CLAIM_x},2)`; L2 `Round(({L1_PER}/100)*{L1_INSU_MAX},2)+Round(({L2_PER}/100)*({CLAIM_x}−{L1_INSU_MAX}),2)`; L3 `+Round(({L2_PER}/100)*({L2_INSU_MAX}−{L1_INSU_MAX}),2)+Round(({L3_PER}/100)*({CLAIM_x}−{L2_INSU_MAX}),2)`
- Expense (#M06): `{RI_CLAIM_EXPENSE_INV/LEG/MED} = Round(({L1_PER}/100)*{INV/LEG/MED_AMOUNT},2)` เก็บตาม Layer ของเคลม; หมายเหตุ mapping ใน spec: {INV_AMOUNT}=investigation_expense, {LEG_AMOUNT}=medical_expense, {MED_AMOUNT}=legal_expense (สลับชื่อตาม spec)

**Experience Refund (ACT GIB):** จาก `tx_stg_act_exp_refund` (paid_status='Paid'; effective_date อยู่ในช่วง Quarter ของ**ปีก่อนหน้า** เช่น 2024Q2 → eff 01/04/2023–30/06/2024); {POLICY_STATUS}=Lapse → error "006"; รวมเบี้ย/คอมทั้งปีจาก bdr_new_renew:
- `{NET_RE_PREM_LIFE} = (tot_re_nb_prem_life + tot_re_ren_prem_life + tot_re_rev_prem_life − tot_re_refund_prem_life) + ({RI_SUM_REVIVAL_PREM_LIFE} − {RI_SUM_REFUND_PREM_LIFE} ของ Q เดียวกัน)`; ACC ใช้ *_add
- `{RE_COMM_LIFE} = tot_com_life + tot_com_refund_life + {TOT_RI_COMM_LIFE}`; ACC = *_add
- `{OER_PAID_LIFE} = Round((({PREMIUM_LIFE} * (1 − {PER_EXPENSE}/100)) − ({CLAIM} − {EX_REFUND_PREVY})) * ({PER_EXP_REFUND}/100), 2)`; `{OER_PAID_ACC} = Round((({PREMIUM_ACC} * (1 − {PER_EXPENSE}/100)) − {CLAIM}) * ({PER_EXP_REFUND}/100), 2)`; ถ้า OER_LIFE+OER_ACC ≤ 0 ไม่ประมวลผลต่อ/ไม่ออก Report
- `{EX_REFUND_PROP_*} = Round({NET_RE_PREM_*}/{PREMIUM_*} * {OER_PAID_*}, 2)`; `{RE_EXP_REFUND_*} = min({EX_REFUND_PROP_*}, {NET_PREM_COM_*})` โดย `{NET_PREM_COM_*} = {NET_RE_PREM_*} − {RE_COMM_*}`

### 2.3 THREL_Grp_PA (page **1316553446**)
- คัดกรมจาก `cf_rig_treaty_policy_hd` (status='A', usage_process_status='A', coverage_period_from อยู่ใน Quarter)
- **RI Premium (ACT):** สมาชิกจาก `tx_stg_act_inforce_member` (sum_insured_accident ≥ {MIN_SUM_ASU}, age ≤ {AGE_LIMIT} หรืออยู่ใน {CER_INCOM} ไม่งั้น error "004"); SA: {SA_ACC}=sum_insured_accident, {SA_MUR}={SA_ACC}*{PER_MUR}/100, {SA_LOADING}={SA_ACC}*{PER_SPE_COV}/100; SR/RI Premium/Loading/Discount MA/GV — สูตรเดียวกับ PS-06 THREL; `{RI_PREM_TOT}=Round({RI_PREM_ACC}+{RI_PREM_LOAD}−{SUM_DISC},2)`
- **RI Commission:** `{RI_COM_ACC} = Round(({RI_COM_RATE}/100) × {RI_PREM_TOT}, 2)`
- **Alteration (ACT):** จาก `tx_stg_act_alteration` (document_date/alteration_date อยู่ใน Quarter); ประเภท {AL_MOVE}: Addition={NM}, Termination={CL}, IncreaseSA={IC}, DecreaseSA={DC}
  - NM/CL: `{NUM_DAY_COV} = {COV_TO} − {AL_DATE}`; `{RE_PREM_ACC} = Round({SUM_RE_INS_ACC_DEATH} * {RI_PREM_RATE} * {NUM_DAY_COV}/{NUM_DAY_YEAR}, 2)`; `{RE_PREM_LOAD} = Round({SUM_RE_INS_LOAD} * {RI_PREM_RATE} * ({ALL_PER_LOAD}/100) * {NUM_DAY_COV}/{NUM_DAY_YEAR}, 2)`; `{RE_PREM_DIS_MA} = Round(({PER_DIS_MUR}/100)*{RE_PREM_ACC},2)`; `{RE_PREM_DIS_GV} = Round(({PER_DIS_VOL}/100)*(((1−({PER_DIS_MUR}/100))*{RE_PREM_ACC})+{RE_PREM_LOAD}),2)`; `{RE_COM} = Round(({RE_PREM_ACC}+{RE_PREM_LOAD}−{SUM_DISC})*({RI_COM_RATE}/100),2)`
  - IC/DC: คำนวณ SA/SR/RI Prem ทั้ง Before และ After Change; ลง `tx_rig_act_alter_mem` ตาม Level ของ {SA_ACC_AFT}
- **RI Claim (ACT THREL):** death/tpd claim, claim_status 0 หรือ 2; ทุน ≤ {L1_INSU_MAX} → ไม่คำนวณ; SR ต่อรายเคลม: L1 = 0, L2: `{SR_x} = Round(({CLAIM_x} − {L1_INSU_MAX}) * ({L2_PER}/100), 2)`, L3: `Round((({CLAIM_x} − {L2_INSU_MAX}) * ({L3_PER}/100)) + (({L2_INSU_MAX} − {L1_INSU_MAX}) * ({L2_PER}/100)), 2)` — **หมายเหตุ: actual ใช้ CLAIM ในสูตร SR ไม่ใช่ทุน** (แก้ 30/03/2026)
  - `{RE_CLAIM_ACC_DEATH} = Round({SR_ACC_DEATH} * ({CLAIM_ACC}/{ACC_INS}), 2)`; DISMEM/TPD แบบเดียวกัน
  - Expense: `{RE_INV_x} = Round({SR_x} * ({INV_AMOUNT}/{x_INS}), 2)` (LEG/MED เช่นเดียวกัน); {SUM_RI_CLAIM_EXPENSE_INV} = INV+LEG+MED รวมทุกประเภทเคลม

### 2.4 Mapping Actual BDR (page **1312096925**)
ตาราง: 1. `tx_rig_act_hd` (1319370771), 2. `tx_rig_act_policy_hd` (1319370768), 3. `tx_rig_act_policy_layer` (1319370776), 4. `tx_rig_act_pol_mem` (1319370779), 5. `tx_rig_act_claim_mem` (1319370783), 6. `tx_rig_act_alter_mem` (1319370787), 7. **`tx_rig_act_bdr_new_renew`** (1319370790 — level1/2/3 pages 1319961127/1319961130/1319961133: `tx_rig_act_policy_layer.level = 1|2|3`), 8. `tx_rig_act_bdr_pol_mem` (1319370793 — cession_no รายสมาชิก), 9. `tx_rig_act_bdr_alter` (1319370796), 10. `tx_rig_act_bdr_alter_mem` (1319370799), 11. `tx_rig_act_bdr_claim` (1319370802), 12. `tx_rig_act_bdr_claim_mem` (1319370805), 13. `tx_rig_policy_base` (1319370807)
- **bdr_new_renew** = 1 แถว/กรม/ปี/Q; กลุ่ม field `l1_/l2_/l3_/tot_`: member_life/add, ori_sa_*, ori_nb/ren/rev/refund/tl_prem_*, ori_claim_paid_*, ori_inv, ori_ex_refund_paid_*, re_sr_*, re_nb/ren/rev/refund/tl_prem_*, re_claim_paid_*, com_*, com_refund_* — ทุก tot_x = l1+l2+l3

### 2.5 Actual SOA (page **1299022256**)
- เช็ค `cf_rig_pc_treaty.status`: A=ประมวลผล, I=ข้าม SOA
- **GIB:** **{POLICY_YEAR_GIB} = ปีของ tx_rig_act_bdr_new_renew.effective_date_from − ปีของ first_date + 1** (claim ใช้ tx_rig_act_bdr_claim); **POLICY_YEAR_GIB_1** (page 1328382590) = `= 1` → ฝั่ง new; **POLICY_YEAR_GIB_2** (page 1328382592) = `> 1` → ฝั่ง renew
- {RI_COM_RATE} เลือกชุดตาม effective_date_from ของกรม; Commission ใน SOA คำนวณใหม่: `{SOA_COM_F_LIFE} = Round((Σtot_re_nb_prem_life + Σtot_re_ren_prem_life + Σtot_re_rev_prem_life) * {RI_COM_RATE}, 2)` — **Sum เบี้ยของทุกกรมในชุด {RI_COM_RATE} เดียวกันก่อน แล้วค่อยเข้าสูตร** (#AFTER 06/05/2026); Commission Refund: `{SOA_REF_COM_F/R_LIFE|ADD} = Round(Σtot_re_refund_prem_* * {RI_COM_RATE}, 2)`
- `tx_rig_act_soa_dt`: prem_new_* = (PY_GIB=1) SUM ภายใต้ closing_quarter; prem_renew_* = (PY_GIB>1); claim: **calim_new_actual** (1322189655) = `tx_rig_act_bdr_claim.policy_year = 1`, **calim_renew_actual** (1322189661) = `> 1`; new_actual/renew_actual (1318879755/1318879758) = `tx_rig_act_bdr_new_renew.policy_year =1 / >1` (treaty อื่น); sum_premium_actual (1318879747)
- **Error-cut Actual** (page 1310753224): `tx_stg_error_data` process_code=`ACT_MAIN_PROCESS`, lookup parent_id=1002900 (004=สมาชิกอายุเกิน, 005=RI status Cancel, 006=Lapse ใน Exp Refund, 007=NOB/dbd_code ว่าง, 008=ไม่พบ Exp Refund ปีก่อน)

---

## 3. RIG-PS-09 Profit Commission (page **1316553131**)

รับ treaty_code + year; **ประมวลผลได้เฉพาะ Q4** และต้องมี Actual ครบ Q1–Q4; config จาก `cf_rig_treaty_cond_hd` (unearn_premium, percent_admin_expense, percent_profit_comm); สร้าง `tx_rig_profit_hd` (status A/I)
ข้อมูลปีก่อนหน้า: ครั้งแรก → `tx_rig_profit_comm_base` (quarter_period='Q4'); ครั้งถัดไป → `tx_rig_profit_comm`

### PS-09-01 GIB_Grp_Direct_EB (page **1316553209**)
- **เงื่อนไข member:** `count(number_of_mem_life)` จาก `tx_rig_act_bdr_new_renew` ของ Q4; **> 200 คน คำนวณ; ≤ 200 → ทุกค่า = 0.00** + update `tx_rig_act_hd.remark`
- จาก `tx_rig_act_soa_dt` ทุก Quarter: `{SUM_PREM}` = (prem_new_* + prem_renew_* + revival_prem_*) − (prem_refund_*); `{SUM_COMM}` = comm_new/renew_life+add; `{SUM_CLAM}` = claim_new/renew_life+add+tpd + claim_exp_investigation_fee; `{SUM_EXP}` = experience_refund_share
- `tx_rig_profit_comm`: UnearnPremBegin = ปีแรก: `tx_rig_profit_comm_base.total_premium * unearn_premium`; ปีถัดไป: unearn_premium ปีก่อน; ReserveClaimBegin/End = 0; **TotalIncome = SUM(UnearnPremBegin, ReserveClaimBegin, SumPrem)**; `sumPremAdmin = ROUND(SUM_PREM * percent_admin_expense, 2)`; `SumPremUnearn = ROUND(SUM_PREM * unearn_premium, 2)`; NegativeNet = |NetBalance ปีก่อน| ถ้า < 0 ไม่งั้น 0; **TotalOutgoes = ROUND(SUM(SumClaim, sumPremAdmin, SumPremUnearn, ReserveClaimEnd, SumComm, SumExperience, NegativeNet), 2)**; **NetBalance = TotalIncome − TotalOutgoes**; **NetProfit = NetBalance > 0 ? ROUND(NetBalance * percent_profit_comm, 2) : 0** → RIG-RP-015

### PS-09-02 THREL_Grp_PA (page **1317109851**)
- Member check: `count(distinct tx_rig_act_bdr_pol_mem.cession_no)` ทั้งปี > 200
- `{SUM_PREM}` = prem_new_add + prem_renew_add + revival_prem_new_add − prem_refund_renew_add; `{SUM_COMM}` = comm_new_add + comm_renew_add; `{SUM_CLAM}` = claim_new_add + claim_renew_add + claim_exp_investigation_fee (**ไม่มี SumExperience**) → RIG-RP-016

### PS-09-03 PC Allocation (page **1317109873**)
- `{TOTAL_RI_PREM_ALL}` = Σ ทั้งปีของ `tx_rig_act_bdr_new_renew.(tot_re_nb_prem_* + tot_re_ren_prem_* + tot_re_rev_prem_*)`; `{SUM_PC}` = `tx_rig_profit_comm.net_profit_comm`
- `tx_rig_allocation_profit` ต่อ policy (เรียง policy_no น้อย→มาก): **`pc_allocation = total_ri_prem / {TOTAL_RI_PREM_ALL} * {SUM_PC}` (2 ตำแหน่ง); รายการสุดท้าย = {SUM_PC} − {SUM_ALLOCATION}** (กันเศษปัดหาย)
- Update: `tx_rig_profit_dt.sum_pc_allocation`, `tx_rig_act_hd.sum_pc_current_treaty`, `tx_rig_act_hd.due_to` (Q4) += sum_profit_comm → RIG-RP-020

---

## 4. เงื่อนไขการคิด RI Status (page **1292238920**)

- `policy_status IN ('B','I')` → เทียบ **ExpireDate กับวันสิ้นเดือนของ Closing Period**: ExpireDate ≥ วันสิ้นเดือน → Policy Year = 1 ⇒ **'New Business'**; > 1 ⇒ **'Inforce'**; ExpireDate < วันสิ้นเดือน ⇒ **'Lapsed'**
- `policy_status = 'L'` ⇒ **'Lapsed'** เสมอ

---

### จุดตรวจสำคัญสำหรับ UAT (สังเคราะห์)
1. **L1 เป็น residual เสมอ** ทั้ง member count, SA, premium (GIB) — ถ้า L1 ติดลบ/เพี้ยน ให้ดู L2/L3 ก่อน
2. **Rate ใช้ระดับสมาชิก (THREL / GIB CR_RATE mode) แต่ cede% ({Lx_PER}) ใช้ระดับ layer จาก `cf_rig_treaty_cond_dt.percent_re`** — apply หลังแยก premium layer แล้ว
3. GIB Actual คิดเบี้ยเฉพาะเดือนแรกของสัญญา + movement รายเดือน (Annual mode เท่านั้น) + true-up ครบปี (full_year=TRUE)
4. SOA Actual ของ GIB ใช้ {POLICY_YEAR_GIB} (จาก effective_date_from − first_date + 1) **ไม่ใช่** policy_year ใน bdr; SOA commission คำนวณใหม่จากเบี้ยรวมต่อชุด {RI_COM_RATE} ไม่ใช่ Σ tot_com_*
5. Estimate กันซ้ำด้วย `tx_rig_policy_base` (policy_no+policy_year+ri_commencement_date); error ลง `tx_stg_error_data` (EST_MAIN_PROCESS / ACT_MAIN_PROCESS, lookup 1002900)

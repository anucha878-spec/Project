# เปรียบเทียบ Spec (Persistence Specification) กับ Database จริง

> **Database:** `jdbc:postgresql://11.100.8.91:5432/reinsurance` — PostgreSQL 9.6.24  
> **Spec source:** Confluence space RDSINRI → `04. Persistence Specification`  
> **ขอบเขต:** DB public schema มี 478 ตาราง / เทียบกับ spec 182 ตาราง

## สรุปผล (Executive Summary)

| ประเภทความไม่ตรงกัน | จำนวน |
|---|---:|
| ❌ ตารางมีใน spec แต่ไม่มีใน DB | 4 |
| 🔑 Primary Key ไม่ตรง | 7 |
| ➖ คอลัมน์มีใน spec แต่ไม่มีใน DB | 54 |
| 🔤 Data type ไม่ตรง | 32 |
| ⭕ Nullable ไม่ตรง (spec NOT NULL แต่ DB ยอม NULL) | 72 |
| ➕ คอลัมน์มีใน DB แต่ไม่มีใน spec | 18 |
| 📄 ตารางใน DB (public) ที่ไม่มีหน้า spec | 233 |

จาก 182 ตารางที่เทียบได้ มี **56 ตาราง** ที่พบความไม่ตรงกันอย่างน้อย 1 จุด

---

## 1. ❌ ตารางมีใน Spec แต่ไม่พบใน Database

| ตาราง | หมายเหตุ | ไฟล์ spec |
|---|---|---|
| `cf_soa_column` | ⚠️ มาร์ค `--` (อาจยกเลิก) | 02. Configuration/09. -- cf_soa_column.md |
| `cf_template_formular` | ⚠️ มาร์ค `--` (อาจยกเลิก) | 02. Configuration/13. -- cf_template_formular.md |
| `tx_tmp_template` | temp table | 02. Configuration/16. Treaty/02. Temp Treaty/29. tx_tmp_template.md |
| `lg_traking_process` |  | 05. Transaction/57. LG_TRAKING_PROCESS.md |

---

## 2. 🔑 Primary Key ไม่ตรงกัน

สำคัญมาก — กระทบ uniqueness / การ join / การ upsert

| ตาราง | PK ตาม Spec | PK จริงใน DB |
|---|---|---|
| `tx_tmp_policy_fac_hd` | policy_no,tmp_policy_fac_hd_id | tmp_policy_fac_hd_id |
| `tx_ri_ord_alteration_dt` | ri_ord_alt_id | ri_ord_alt_id,ri_process_hd_id |
| `tx_ri_pa_new_renew_dt` | ri_pa_new_id | ri_pa_new_id,ri_process_hd_id |
| `tx_ri_ul_new_renew_dt` | ri_ul_new_id | ri_process_hd_id,ri_ul_new_id |
| `tx_ri_act_dt` | ri_act_dt_id,ri_act_hd_id | ri_act_dt_id |
| `tx_ri_send_reinsurer_period` | period,plan_code,policy_month,policy_no,product_group,treaty_code | facult_flag,period,plan_code,policy_month,policy_no,product_group,treaty_code |
| `tx_ri_ord_alteration_dt_initial` | ri_ord_alt_id | ri_ord_alt_id,ri_process_hd_id |

---

## 3. ➖ คอลัมน์มีใน Spec แต่ไม่มีใน Database

อาจหมายถึง DB ยังไม่ได้อัปเดตตาม spec หรือคอลัมน์ถูกถอดออกภายหลัง

| ตาราง | คอลัมน์ที่ขาดใน DB |
|---|---|
| `ms_calculation` | `ms_cal_fraction_day` (varchar) |
| `tx_ri_act_claim_dt` | `claim_no_cms` (varchar) |
| `tx_ri_act_hd` | `period` (numeric), `period_quarter` (varchar), `mps_status` (numeric), `mps_status_desc` (varchar), `ri_std_hd_id_oic` (int8) |
| `tx_ri_allocation_profit` | `facult_falg` (boolean) |
| `tx_ri_bdr_alter` | `ri_period` (varchar) |
| `tx_ri_bdr_claim` | `ri_period` (varchar) |
| `tx_ri_bdr_new_renew` | `ri_period` (varchar) |
| `tx_ri_copay_dt` | `discount_prem_perccent` (numeric) |
| `tx_ri_est_claim_dt` | `claim_no_cms` (varchar) |
| `tx_ri_est_cust_dt` | `con_age` (numeric), `att_age` (numeric), `cust_occ_name` (varchar), `occ_class` (varchar) |
| `tx_ri_est_rider_facult_dt` | `prem_refund_com_fac` (numeric) |
| `tx_ri_est_rider_facult_not_send` | `prem_refund_com_fac` (numeric) |
| `tx_ri_mark_policy_dt` | `ri_current_sr_holliday` (numeric) |
| `tx_ri_ord_alteration_dt` | `initial_sa_rider` (numeric), `premium_rider` (numeric), `premium_extra_rider` (numeric), `rider_type` (varchar), `rider_code_2` (varchar), `emr_rate_rider` (numeric), `plan_id` (varchar), `rider_com_date` (date) |
| `tx_ri_ord_alteration_dt_initial` | `initial_sa_rider` (numeric), `premium_rider` (numeric), `premium_extra_rider` (numeric), `rider_type` (varchar), `rider_code_2` (varchar), `emr_rate_rider` (numeric), `plan_id` (varchar), `rider_com_date` (date) |
| `tx_ri_send_reinsurer_period` | `ri_est_alt_dt_id` (int8), `ri_est_claim_dt_id` (int8) |
| `tx_ri_sum_profit_comm` | `ri_act_hd_id` (int8), `sum_q2_cliam` (numeric), `sum_q3_cliam` (numeric), `sum_q4_cliam` (numeric) |
| `tx_ri_ul_new_renew_dt` | `initial_sa_rider` (numeric), `premium_rider` (numeric), `premium_extra_rider` (numeric), `rider_type` (varchar), `rider_code` (varchar), `rider_code_2` (varchar), `rider_name` (varchar), `rider_group` (varchar), `rider_emr_rate` (numeric), `rider_emr_amount` (numeric), `rider_com_date` (date) |
| `tx_tmp_policy_fac_dt` | `retention_surplus_amount` (numeric) |

---

## 4. 🔤 Data Type ไม่ตรงกัน

### 4.1 เปลี่ยนประเภทข้อมูล (สำคัญ) — 17 จุด

เช่น spec เป็น numeric แต่ DB เป็น varchar / date เป็น varchar — กระทบการคำนวณและ validate

| ตาราง | รายละเอียด |
|---|---|
| `tx_ri_est_claim_dt` | คอลัมน์ "over_limit_investigation": spec=numeric varchar/25, 2 50 → DB=varchar(50) |
| `tx_ri_est_claim_dt` | คอลัมน์ "over_limit_legal_fee": spec=numeric varchar/25, 2 50 → DB=varchar(50) |
| `tx_ri_est_claim_dt` | คอลัมน์ "over_limit_medical": spec=numeric varchar/25, 2 50 → DB=varchar(50) |
| `tx_ri_est_claim_dt` | คอลัมน์ "over_limit_claim_settlement": spec=numeric varchar/25, 2 50 → DB=varchar(50) |
| `tx_ri_est_claim_dt` | คอลัมน์ "los": spec=numeric/4 → DB=varchar(4) |
| `tx_ri_est_claim_dt` | คอลัมน์ "branch_code": spec=numeric/7 → DB=varchar(7) |
| `tx_ri_act_claim_dt` | คอลัมน์ "ci_health_level": spec=numeric/1 → DB=varchar(1) |
| `tx_ri_act_claim_dt` | คอลัมน์ "los": spec=numeric/4 → DB=varchar(4) |
| `tx_ri_act_claim_dt` | คอลัมน์ "branch_code": spec=numeric/7 → DB=varchar(7) |
| `tx_ri_copay_dt` | คอลัมน์ "record_status": spec=char/1 → DB=varchar(1) |
| `tx_ri_copay_dt` | คอลัมน์ "scr_create_user": spec=char/50 → DB=varchar(50) |
| `tx_ri_copay_dt` | คอลัมน์ "scr_create_system": spec=char/50 → DB=varchar(50) |
| `tx_ri_copay_dt` | คอลัมน์ "scr_update_user": spec=char/50 → DB=varchar(50) |
| `tx_ri_copay_dt` | คอลัมน์ "scr_update_system": spec=char/50 → DB=varchar(50) |
| `tx_ri_ind_mat_rider` | คอลัมน์ "policy_no": spec=varcgar/50 → DB=varchar(50) |
| `tx_ri_ind_mat_rider` | คอลัมน์ "ind_rider_plan_code": spec=date → DB=varchar(20) |
| `tx_ri_ind_mat_rider` | คอลัมน์ "rider_maturity_date": spec=varchar/25 → DB=date |

### 4.2 numeric ↔ integer (ระดับรอง) — 15 จุด

spec ระบุ `numeric(8)` แต่ DB ใช้ `int8`/`numeric(3,0)` ฯลฯ — ความหมายใกล้เคียง (มักเป็น id/PK)

<details><summary>ดูรายการทั้งหมด</summary>

| ตาราง | รายละเอียด |
|---|---|
| `ms_treaty_share` | คอลัมน์ "group_id": spec=int4/default by data type → DB=numeric(3,0) |
| `tx_ri_inv_claim_dt` | คอลัมน์ "ri_inv_claim_id": spec=numeric/8 → DB=int8 |
| `tx_ri_inv_claim_dt` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ind_alteration_dt` | คอลัมน์ "ri_ind_alt_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ind_alteration_dt` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ord_outforce_dt` | คอลัมน์ "ri_ord_outforce_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ord_outforce_dt` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_alteration_dt` | คอลัมน์ "ri_ul_alteration_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_alteration_dt` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_coi_dt` | คอลัมน์ "ri_ul_coi_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_coi_dt` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ind_alteration_dt_initial` | คอลัมน์ "ri_ind_alt_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ind_alteration_dt_initial` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_alteration_dt_initial` | คอลัมน์ "ri_ul_alteration_id": spec=numeric/8 → DB=int8 |
| `tx_ri_ul_alteration_dt_initial` | คอลัมน์ "ri_process_hd_id": spec=numeric/8 → DB=int8 |

</details>

---

## 5. ⭕ NOT NULL Constraint ไม่ตรงกัน — 72 จุด

ทุกจุดเป็นกรณี **spec กำหนด NOT NULL แต่ DB ยอมให้เป็น NULL** — DB บังคับความสมบูรณ์ข้อมูลน้อยกว่าที่ spec ระบุ

| ตาราง | คอลัมน์ที่ spec=NOT NULL แต่ DB=NULL |
|---|---|
| `tx_ri_act_hd` | `sum_pc_current_treaty` |
| `tx_ri_act_policy_dt` | `policy_type`, `maturity_date`, `policy_year`, `policy_month`, `policy_term`, `cov_duration_year`, `cov_duration_month`, `coverage_from`, `coverage_to`, `sale_channel_code`, `std_fac`, `effective_date`, `premium_type`, `created_date` |
| `tx_ri_bdr_act_alter` | `over_limit_claim`, `sum_risk_add_flag`, `ri_prem_duration`, `period_quarter` |
| `tx_ri_bdr_act_claim` | `over_limit_claim` |
| `tx_ri_bdr_act_new_renew` | `over_limit_claim`, `ri_prem_duration`, `period_quarter` |
| `tx_ri_bdr_alter` | `code_plan` |
| `tx_ri_bdr_claim` | `code_plan`, `ri_prem_duration`, `period_quarter` |
| `tx_ri_est_alt_dt` | `code_plan`, `policy_status` |
| `tx_ri_est_base_auto_dt` | `ri_est_claim_dt_id` |
| `tx_ri_est_claim_dt` | `ri_claim_status`, `event_date`, `claim_register_date` |
| `tx_ri_est_cust_dt` | `title`, `name`, `surname`, `full_name`, `gender`, `area`, `country` |
| `tx_ri_est_policy_dt` | `lapsation_date`, `tpd_type`, `ttd_type`, `add_type`, `lapsation_date`, `tpd_type`, `ttd_type`, `add_type`, `lapsation_date`, `tpd_type`, `ttd_type`, `add_type` |
| `tx_ri_est_rider_auto_dt` | `ri_est_claim_dt_id` |
| `tx_ri_est_rider_auto_not_send` | `ri_est_claim_dt_id` |
| `tx_ri_inv_claim_dt` | `created_date`, `created_by` |
| `tx_ri_mark_policy_hd` | `coi_flag` |
| `tx_ri_monthly_nar_hd` | `coi_flag` |
| `tx_ri_ord_alteration_dt` | `alteration_date` |
| `tx_ri_ord_alteration_dt_initial` | `alteration_date` |
| `tx_ri_ord_new_renew_dt` | `commencement_date`, `initial_sa` |
| `tx_ri_profit_comm` | `total_prem_refund`, `total_comm_refund`, `claim_investigation`, `claim_legal_fee`, `claim_medical`, `claim_exgratia` |
| `tx_ri_send_reinsurer_period` | `facult_flag` |
| `tx_ri_sum_profit_comm` | `sum_claim_exgratia`, `updated_date`, `updated_by` |

---

## 6. ➕ คอลัมน์มีใน Database แต่ไม่มีใน Spec — 18 จุด

**⚠️ ความผิดปกติของ DB (น่าจะเกิดจาก import/migration ผิดพลาด):**

- `cf_base_plancode_dt` → คอลัมน์ "INSERT INTO public.cf_base_plancode_dt (cf_base_plancode_dt_id" (varchar(62)) มีใน DB แต่ไม่มีใน spec
- `dm_ppalib_tbratsa0` → คอลัมน์ "srrid@" (numeric(3,0)) มีใน DB แต่ไม่มีใน spec

**คอลัมน์เพิ่มเติมปกติ (DB มีมากกว่า spec):**

| ตาราง | คอลัมน์ |
|---|---|
| `tx_ri_mark_policy_dt` | `ri_current_sr_holiday` (numeric(25,2) |
| `ms_treaty_share` | `effective_date_from` (date) |
| `ms_treaty_share` | `effective_date_to` (date) |
| `tx_ri_ul_new_renew_dt` | `product_type` (varchar(200) |
| `tx_ri_pa_claim_dt` | `claim_cause` (varchar(100) |
| `tx_ri_pa_claim_dt` | `claim_code` (varchar(2) |
| `tx_ri_est_hd` | `housekeeping` (bool) |
| `tx_ri_est_rider_facult_dt` | `prem_refund_com` (numeric(25,2) |
| `tx_ri_sum_profit_comm` | `sum_q2_claim` (numeric(25,2) |
| `tx_ri_sum_profit_comm` | `sum_q3_claim` (numeric(25,2) |
| `tx_ri_sum_profit_comm` | `sum_q4_claim` (numeric(25,2) |
| `tx_ri_allocation_profit` | `facult_flag` (bool) |
| `tx_ri_est_rider_facult_not_send` | `prem_refund_com` (numeric(25,2) |
| `tx_ri_act_base_facult_not_send` | `plan_type_fac` (varchar(50) |
| `tx_ri_copay_dt` | `discount_prem_percent` (numeric(5,2) |
| `tx_ri_claim_cms` | `approval_status` (varchar(10) |

---

## 7. 📄 ตารางใน Database ที่ไม่มีหน้า Spec — 233 ตาราง

_(ไม่รวมตาราง backup_/qa_backup/migrate_/tx_tmp/temp_ ที่กรองออกแล้ว)_

<details><summary>ดูรายชื่อทั้งหมด (จัดกลุ่มตาม prefix)</summary>

**cf_reserve** (2): `cf_reserve_rate_dt_20250731`, `cf_reserve_rate_hd_20250731`

**databasechangelog** (1): `databasechangelog`

**databasechangeloglock** (1): `databasechangeloglock`

**edw_ms** (1): `edw_ms_ri_treaty`

**edw_tx** (12): `edw_tx_mps_master_i01`, `edw_tx_mps_master_i02`, `edw_tx_mps_master_i03`, `edw_tx_mps_master_i04`, `edw_tx_ri_bdr_all`, `edw_tx_ri_bdr_hd`, `edw_tx_ri_process_header`, `edw_tx_ri_std_all`, `edw_tx_ri_std_hd`, `edw_tx_ri_summary`, `edw_tx_ri_support_bk_dt`, `edw_tx_ri_support_bk_hd`

**lg** (2): `lg_tracking_process`, `lg_working_process`

**ms_none** (1): `ms_none_reinsurer`

**ms_product** (1): `ms_product_20250731`

**people** (1): `people`

**quarter** (1): `quarter_month`

**test** (1): `test_01`

**tx** (2): `tx_reserve_thread`, `tx_worker_thread`

**tx_ri_bdr** (48): `tx_ri_bdr_alter_2023`, `tx_ri_bdr_alter_2024`, `tx_ri_bdr_alter_2025`, `tx_ri_bdr_alter_2026`, `tx_ri_bdr_alter_2027`, `tx_ri_bdr_alter_2028`, `tx_ri_bdr_alter_2029`, `tx_ri_bdr_alter_2030`, `tx_ri_bdr_alter_inactive_2023`, `tx_ri_bdr_alter_inactive_2024`, `tx_ri_bdr_alter_inactive_2025`, `tx_ri_bdr_alter_inactive_2026`, `tx_ri_bdr_alter_inactive_2027`, `tx_ri_bdr_alter_inactive_2028`, `tx_ri_bdr_alter_inactive_2029`, `tx_ri_bdr_alter_inactive_2030`, `tx_ri_bdr_claim_2023`, `tx_ri_bdr_claim_2024`, `tx_ri_bdr_claim_2025`, `tx_ri_bdr_claim_2026`, `tx_ri_bdr_claim_2027`, `tx_ri_bdr_claim_2028`, `tx_ri_bdr_claim_2029`, `tx_ri_bdr_claim_2030`, `tx_ri_bdr_claim_inactive_2023`, `tx_ri_bdr_claim_inactive_2024`, `tx_ri_bdr_claim_inactive_2025`, `tx_ri_bdr_claim_inactive_2026`, `tx_ri_bdr_claim_inactive_2027`, `tx_ri_bdr_claim_inactive_2028`, `tx_ri_bdr_claim_inactive_2029`, `tx_ri_bdr_claim_inactive_2030`, `tx_ri_bdr_new_renew_2023`, `tx_ri_bdr_new_renew_2024`, `tx_ri_bdr_new_renew_2025`, `tx_ri_bdr_new_renew_2026`, `tx_ri_bdr_new_renew_2027`, `tx_ri_bdr_new_renew_2028`, `tx_ri_bdr_new_renew_2029`, `tx_ri_bdr_new_renew_2030`, `tx_ri_bdr_new_renew_inactive_2023`, `tx_ri_bdr_new_renew_inactive_2024`, `tx_ri_bdr_new_renew_inactive_2025`, `tx_ri_bdr_new_renew_inactive_2026`, `tx_ri_bdr_new_renew_inactive_2027`, `tx_ri_bdr_new_renew_inactive_2028`, `tx_ri_bdr_new_renew_inactive_2029`, `tx_ri_bdr_new_renew_inactive_2030`

**tx_ri_claim** (1): `tx_ri_claim_cms_r1`

**tx_ri_copay** (1): `tx_ri_copay_dt_r1`

**tx_ri_est** (112): `tx_ri_est_alt_dt_2023`, `tx_ri_est_alt_dt_2024`, `tx_ri_est_alt_dt_2025`, `tx_ri_est_alt_dt_2026`, `tx_ri_est_alt_dt_2027`, `tx_ri_est_alt_dt_2028`, `tx_ri_est_alt_dt_2029`, `tx_ri_est_alt_dt_2030`, `tx_ri_est_alt_dt_inactive_2023`, `tx_ri_est_alt_dt_inactive_2024`, `tx_ri_est_alt_dt_inactive_2025`, `tx_ri_est_alt_dt_inactive_2026`, `tx_ri_est_alt_dt_inactive_2027`, `tx_ri_est_alt_dt_inactive_2028`, `tx_ri_est_alt_dt_inactive_2029`, `tx_ri_est_alt_dt_inactive_2030`, `tx_ri_est_base_auto_dt_2023`, `tx_ri_est_base_auto_dt_2024`, `tx_ri_est_base_auto_dt_2025`, `tx_ri_est_base_auto_dt_2026`, `tx_ri_est_base_auto_dt_2027`, `tx_ri_est_base_auto_dt_2028`, `tx_ri_est_base_auto_dt_2029`, `tx_ri_est_base_auto_dt_2030`, `tx_ri_est_base_auto_dt_inactive_2023`, `tx_ri_est_base_auto_dt_inactive_2024`, `tx_ri_est_base_auto_dt_inactive_2025`, `tx_ri_est_base_auto_dt_inactive_2026`, `tx_ri_est_base_auto_dt_inactive_2027`, `tx_ri_est_base_auto_dt_inactive_2028`, `tx_ri_est_base_auto_dt_inactive_2029`, `tx_ri_est_base_auto_dt_inactive_2030`, `tx_ri_est_base_facult_dt_2023`, `tx_ri_est_base_facult_dt_2024`, `tx_ri_est_base_facult_dt_2025`, `tx_ri_est_base_facult_dt_2026`, `tx_ri_est_base_facult_dt_2027`, `tx_ri_est_base_facult_dt_2028`, `tx_ri_est_base_facult_dt_2029`, `tx_ri_est_base_facult_dt_2030`, `tx_ri_est_base_facult_dt_inactive_2023`, `tx_ri_est_base_facult_dt_inactive_2024`, `tx_ri_est_base_facult_dt_inactive_2025`, `tx_ri_est_base_facult_dt_inactive_2026`, `tx_ri_est_base_facult_dt_inactive_2027`, `tx_ri_est_base_facult_dt_inactive_2028`, `tx_ri_est_base_facult_dt_inactive_2029`, `tx_ri_est_base_facult_dt_inactive_2030`, `tx_ri_est_claim_dt_2023`, `tx_ri_est_claim_dt_2024`, `tx_ri_est_claim_dt_2025`, `tx_ri_est_claim_dt_2026`, `tx_ri_est_claim_dt_2027`, `tx_ri_est_claim_dt_2028`, `tx_ri_est_claim_dt_2029`, `tx_ri_est_claim_dt_2030`, `tx_ri_est_claim_dt_inactive_2023`, `tx_ri_est_claim_dt_inactive_2024`, `tx_ri_est_claim_dt_inactive_2025`, `tx_ri_est_claim_dt_inactive_2026`, `tx_ri_est_claim_dt_inactive_2027`, `tx_ri_est_claim_dt_inactive_2028`, `tx_ri_est_claim_dt_inactive_2029`, `tx_ri_est_claim_dt_inactive_2030`, `tx_ri_est_policy_dt_2023`, `tx_ri_est_policy_dt_2024`, `tx_ri_est_policy_dt_2025`, `tx_ri_est_policy_dt_2026`, `tx_ri_est_policy_dt_2027`, `tx_ri_est_policy_dt_2028`, `tx_ri_est_policy_dt_2029`, `tx_ri_est_policy_dt_2030`, `tx_ri_est_policy_dt_inactive_2023`, `tx_ri_est_policy_dt_inactive_2024`, `tx_ri_est_policy_dt_inactive_2025`, `tx_ri_est_policy_dt_inactive_2026`, `tx_ri_est_policy_dt_inactive_2027`, `tx_ri_est_policy_dt_inactive_2028`, `tx_ri_est_policy_dt_inactive_2029`, `tx_ri_est_policy_dt_inactive_2030`, `tx_ri_est_rider_auto_dt_2023`, `tx_ri_est_rider_auto_dt_2024`, `tx_ri_est_rider_auto_dt_2025`, `tx_ri_est_rider_auto_dt_2026`, `tx_ri_est_rider_auto_dt_2027`, `tx_ri_est_rider_auto_dt_2028`, `tx_ri_est_rider_auto_dt_2029`, `tx_ri_est_rider_auto_dt_2030`, `tx_ri_est_rider_auto_dt_inactive_2023`, `tx_ri_est_rider_auto_dt_inactive_2024`, `tx_ri_est_rider_auto_dt_inactive_2025`, `tx_ri_est_rider_auto_dt_inactive_2026`, `tx_ri_est_rider_auto_dt_inactive_2027`, `tx_ri_est_rider_auto_dt_inactive_2028`, `tx_ri_est_rider_auto_dt_inactive_2029`, `tx_ri_est_rider_auto_dt_inactive_2030`, `tx_ri_est_rider_facult_dt_2023`, `tx_ri_est_rider_facult_dt_2024`, `tx_ri_est_rider_facult_dt_2025`, `tx_ri_est_rider_facult_dt_2026`, `tx_ri_est_rider_facult_dt_2027`, `tx_ri_est_rider_facult_dt_2028`, `tx_ri_est_rider_facult_dt_2029`, `tx_ri_est_rider_facult_dt_2030`, `tx_ri_est_rider_facult_dt_inactive_2023`, `tx_ri_est_rider_facult_dt_inactive_2024`, `tx_ri_est_rider_facult_dt_inactive_2025`, `tx_ri_est_rider_facult_dt_inactive_2026`, `tx_ri_est_rider_facult_dt_inactive_2027`, `tx_ri_est_rider_facult_dt_inactive_2028`, `tx_ri_est_rider_facult_dt_inactive_2029`, `tx_ri_est_rider_facult_dt_inactive_2030`

**tx_ri_ind** (7): `tx_ri_ind_alteration_dt_r1`, `tx_ri_ind_alteration_dt_temp_060825`, `tx_ri_ind_cb_claim_dt_r1`, `tx_ri_ind_cb_claim_dt_temp_060825`, `tx_ri_ind_new_renew_dt_r1`, `tx_ri_ind_new_renew_dt_temp_060825`, `tx_ri_ind_new_renew_dt_temp_070825`

**tx_ri_inv** (2): `tx_ri_inv_claim_dt_r1`, `tx_ri_inv_claim_dt_temp_060825`

**tx_ri_nar** (1): `tx_ri_nar_inset_temp`

**tx_ri_not** (1): `tx_ri_not_send_reinsurer`

**tx_ri_ord** (17): `tx_ri_ord_alteration_dt_r1`, `tx_ri_ord_alteration_dt_temp_060825`, `tx_ri_ord_alteration_dt_temp_070825`, `tx_ri_ord_health_claim_dt_r1`, `tx_ri_ord_health_claim_dt_temp_060825`, `tx_ri_ord_master_claim_dt_r1`, `tx_ri_ord_master_claim_dt_temp_060825`, `tx_ri_ord_master_claim_dt_temp_070825`, `tx_ri_ord_new_renew_dt_backup_062026`, `tx_ri_ord_new_renew_dt_backup_inout_072025`, `tx_ri_ord_new_renew_dt_r1`, `tx_ri_ord_new_renew_dt_r1_temp_070825`, `tx_ri_ord_new_renew_dt_r1_temp_090825`, `tx_ri_ord_new_renew_dt_temp_060825`, `tx_ri_ord_new_renew_dt_temp_070825`, `tx_ri_ord_new_renew_dt_temp_090825`, `tx_ri_ord_outforce_dt_r1`

**tx_ri_pa** (4): `tx_ri_pa_claim_dt_r1`, `tx_ri_pa_claim_dt_temp_060825`, `tx_ri_pa_new_renew_dt_r1`, `tx_ri_pa_new_renew_dt_temp_060825`

**tx_ri_process** (2): `tx_ri_process_edw_locks`, `tx_ri_process_hd_backup_062026`

**tx_ri_std** (1): `tx_ri_std_all`

**tx_ri_temp** (2): `tx_ri_temp_data_landing_nar`, `tx_ri_temp_send_reinsurer_period_nar`

**tx_ri_ul** (8): `tx_ri_ul_alteration_dt_r1`, `tx_ri_ul_alteration_dt_temp_060825`, `tx_ri_ul_claim_dt_r1`, `tx_ri_ul_claim_dt_temp_060825`, `tx_ri_ul_coi_dt_r1`, `tx_ri_ul_coi_dt_temp_060825`, `tx_ri_ul_new_renew_dt_r1`, `tx_ri_ul_new_renew_dt_temp_060825`

</details>

> หมายเหตุ: ส่วนใหญ่เป็นตารางที่สร้างเพิ่มภายหลัง spec หรือเป็นตารางสนับสนุน/ชั่วคราวที่ไม่ได้จัดทำเอกสาร

---

## วิธีการ (Methodology)

1. ดึงโครงสร้าง DB จริงจาก `information_schema` (494 ตาราง / 44,792 คอลัมน์)
2. Parse ตารางคอลัมน์จากหน้า Spec (คอลัมน์ `Attribute Name / Data Type / Length / Not Null`)
3. เทียบชื่อตาราง → คอลัมน์ → type (normalize) → nullable → PK
4. Type เทียบแบบ canonical; timestamp กับ timestamptz ถือว่าเข้ากันได้

_ข้อจำกัด: บาง cell ใน spec จัดรูปแบบไม่สม่ำเสมอ อาจทำให้ type ที่อ่านได้เพี้ยนเล็กน้อย — ให้ยึด DB เป็นค่าจริง_

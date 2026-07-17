# `adw` Database — Key Insights สำหรับระบบรายงาน R

**Connection:** `postgresql://adw:nopass@11.100.8.51:5432/adw` (PostgreSQL 9.6.24)
**Generated:** 2026-05-28 จากการสำรวจตารางจริง 246 ตารางใน scope ของรายงาน R

---

## 🎯 ค้นพบสำคัญที่ wiki ไม่ได้ระบุ

### 1. รายงาน R ถูก map กับ IFRS17 Measurement Model ชัดเจน

ตาราง `ms_rcc_group_type` (21 rows) ระบุ measurement model ของทุกรายงาน — **นี่คือข้อมูลที่ wiki ไม่ได้บอกแต่อยู่ใน DB master**:

| Report | ชื่อ | IFRS17 Model | กลุ่มสินค้า |
|--------|------|--------------|--------------|
| **R01** | Ordinary Products [OP] **Premium Receipt** | **GMM** | Ordinary (Direct) |
| **R02** | Ordinary Products [OP] **Commission override** | **GMM** | Ordinary (Direct) |
| **R03** | Ordinary Products [OP] **Claim** | **GMM** | Ordinary (Direct) |
| **R04** | Ordinary Products [OP] **Benefit payment** | **GMM** | Ordinary (Direct) |
| **R05** | Unit Link Products [ULP] **Premium Receipt** | **VFA** | Unit Linked |
| **R06** | Unit Link Products [ULP] **Commission override** | **VFA** | Unit Linked |
| **R07** | Unit Link Products [ULP] **Claim** | **VFA** | Unit Linked |
| **R08** | Unit Link Products [ULP] **Benefit payment** | **VFA** | Unit Linked |
| **R09** | Unit Link Products [ULP] **Other income fee** | **VFA** | Unit Linked |
| **R10** | Group YRT **Premium Receipt** | **PAA** | Group YRT |
| **R11** | Group YRT **Commission override** | **PAA** | Group YRT |
| **R12** | Group YRT **Claim** | **PAA** | Group YRT |
| **R13** | Ordinary Products [OP] **Expense Allocation** | **GMM** | Ordinary (Direct) |
| **R14** | Ordinary Products [OP] **APL and PL** | **GMM** | Ordinary (Direct) |
| **R15** | Ordinary Products [RI] Premium **Long-term** | **GMM** | Reinsurance Direct |
| **R16** | Ordinary Products [RI] Commission **Long-term** | **GMM** | Reinsurance Direct |
| **R17** | Ordinary Products [RI] Claim **Long-term** | **GMM** | Reinsurance Direct |
| **R18** | Group YRT [RI] Premium **Short-term** | **PAA** | Reinsurance Group |
| **R19** | Group YRT [RI] Commission **Short-term** | **PAA** | Reinsurance Group |
| **R20** | Group YRT [RI] Claim **Short-term** | **PAA** | Reinsurance Group |
| **OPS** | One Page Summary | — | (summary report) |

**ความหมายของ Model:**
- **GMM** (General Measurement Model) — สำหรับสัญญาประกันชีวิตระยะยาวทั่วไป
- **VFA** (Variable Fee Approach) — สำหรับสัญญาที่มี direct participation feature เช่น Unit Linked (มี discretionary investment-linked feature)
- **PAA** (Premium Allocation Approach) — สำหรับสัญญาระยะสั้น ≤1 ปี (เช่น Group YRT — Yearly Renewable Term)

### 2. ✅ สถานะการใช้งานปัจจุบัน — มีแค่ R14 ที่ ACTIVE

| Report | expire_date | สถานะ |
|--------|-------------|--------|
| **R14** (APL & PL) | 2998-12-31 | **🟢 ACTIVE** |
| R01–R13, R15–R20, OPS | 1999-12-31 | 🔴 disabled |

→ environment นี้ถูก config ให้รัน **เฉพาะ R14 (APL = Automatic Premium Loan, PL = Policy Loan)** เท่านั้น
→ ถ้าจะเปิดรายงานอื่นต้อง `UPDATE ms_rcc_group_type SET expire_date = '2998-12-31' WHERE group_type_code = 'Rxx'`

### 3. Period coverage ใน snapshot tables

| Table | Periods ที่มีข้อมูล |
|-------|---------------------|
| `tx_rcc_output_snapshot_r01` | 202312, 202401, 202402, 202403, 202404 |
| `tx_rcc_output_snapshot_r02` | 202312, 202401, 202402, 202403, 202404 |
| `tx_rcc_output_snapshot_r03` | 202401, 202402, 202403, 202404, **202510** ← jump 1.5 ปี |
| `tx_rcc_output_snapshot_r14` | 202401 – 202412 (ครบ 12 เดือนของปี 2024) |
| `tx_rcc_output_snapshot_r15` | 202402, 202403, 202404 (แค่ 3 เดือน) |
| `tx_rcc_output_r14` (current) | 202401 – 202412 ตรงกับ snapshot |

→ R14 มีข้อมูลครบที่สุด สมเหตุสมผลกับสถานะ ACTIVE

---

## 📊 ตารางที่เกี่ยวกับรายงาน R: 246 ตาราง (184 ตารางมีข้อมูล)

จัดกลุ่มเป็น 12 family ใน `CATALOG.md`:

| Family | จำนวน | บทบาท |
|--------|-------|--------|
| Master configuration | 18 | `ms_rcc_*`, `cf_rcc_*` master tables |
| GL mapping (per report) | 8 | `cf_r01/03/04/05/08/09/14/17_gl_mapping` |
| EDW source — account head/system | 2 | `tx_adw_account_head`, `tx_adw_account_head_system` |
| EDW source — transaction | 2 | `tx_adw_transaction_policy`, `tx_adw_transaction_detail` |
| EDW source — model details | 11 | `tx_adw_<premium|claim|benefit|investment|commission_ov|other_income|...>_detail` |
| R-output (current run) | 27 | `tx_rcc_output_rXX` (R01–R20 + variants) |
| R-output (snapshot backup) | 19 | `tx_rcc_output_snapshot_rXX` (backup ที่ wiki พูดถึง) |
| R reconcile staging | 19 | `tx_rcc_reconcile_rXX` |
| R adjustment staging | 20 | `tx_rcc_adj_rXX` (R01–R20 ครบ) |
| R13 landing (EXP import) | 6 | `tx_rcc_landing_r13_*` รับจากระบบ EXP |
| Monthly header / detail | 4 | `tx_rcc_monthly_header/detail` + `_his` |
| Other RCC tables | 110 | snapshot/error log/ops/temp/processing/prevalidate/... |

**ไฮไลต์เพิ่มเติม:**
- พบ **`tx_rcc_error_log_r01..r20`** ครบ 20 ตาราง → ทุกรายงานมี error log แยก
- พบ **`tx_rcc_reconcile_snapshot_rXX`** ครบ 20 ตาราง (backup ของ reconcile)
- พบ **`tx_rcc_adj_snapshot_rXX`** ครบ 20 ตาราง (backup ของ adjustment)
- พบ **`tx_rcc_ops_rXX`** ครบ 20 ตาราง + เพิ่ม `tx_rcc_ops_acc`, `tx_rcc_ops_summary`, R13 sub-tables (`adv_branding/product`, `opex_portfolio/subgroup`, `sales_promotion`) — รวม One Page Summary ผลลัพธ์
- พบ **`tx_rcc_temp_*`** ทั้ง group และ UL ครอบคลุม PREMIUM, CLAIM, BENEFIT, COMMISSION_OV, OTHER_INCOME(_FEE), REINSURANCE_* → เป็น staging temp ระหว่างการประมวลผล
- พบ **`tx_rcc_processing`**, **`tx_rcc_monitoring`**, **`tx_rcc_prevalidate`**, **`tx_rcc_script_prevalidate`** → ตารางสถานะ orchestration
- พบ **`tx_rcc_reference_number`**, **`tx_rcc_trial_balance_hd/dt`** → header/detail ของไฟล์ Trial Balance ที่ user upload
- พบ **`tx_rcc_generate_file`** → คาดว่าเป็น log การ generate ไฟล์ excel ส่งให้ฝ่ายคณิตศาสตร์

## 📐 Schema ของ GL mapping (จาก `cf_r01_gl_mapping`, 58 rows)

```
gl_mapping_id    | string   ← primary key
account_code     | string   ← GL code เช่น 40511100
model_type       | string   ← PREMIUM / CLAIM / BENEFIT / ...
model_table      | string   ← tx_adw_premium_detail / ...
amount_type      | string?  ← classification เช่น InitialCommission, Cash, Accrual
gl_type          | string   ← 'CR' หรือ 'DR' (Credit / Debit)
rider_flag       | boolean  ← BASIC (false) vs RIDER (true)
event_code       | string?  ← สำหรับ Benefit event ต่างๆ
begin_date       | date     ← validity window start (2021-12-22 standard)
expire_date      | date     ← validity window end (2999-12-30 = active)
created_*, updated_* | audit fields
```

`cf_rcc_gl_mapping` (135 rows) คือ master ที่รวม mapping ของทุกรายงานไว้ในที่เดียว

---

## 🔥 Top 10 ตารางใหญ่ที่สุด

| Rank | Table | rows |
|------|-------|------|
| 1 | `tx_adw_double_entry_detail` | **74.7 M** |
| 2 | `tx_adw_transaction_detail` | 35.0 M |
| 3 | `tx_adw_transaction_policy` | 20.8 M |
| 4 | `tx_adw_premium_ri_detail` | 13.7 M |
| 5 | `tx_adw_commission_ov_detail` | 13.7 M |
| 6 | `tx_adw_premium_detail` | 8.4 M |
| 7 | `tx_adw_investment_detail` | 6.0 M |
| 8 | `tx_rcc_output_r14` | **5.6 M** ← รายงานเดียวที่ ACTIVE |
| 9 | `tx_rcc_output_snapshot_r14` | 5.6 M |
| 10 | `tx_adw_claim_detail` | 4.8 M |

→ ขนาดข้อมูล EDW ใหญ่มาก (74M rows ใน double-entry) → ต้อง query แบบ filter period ก่อนเสมอ

---

## 🛠️ ตารางสำคัญที่ wiki "ไม่ได้พูดถึง" แต่มีอยู่ใน DB

| ตาราง | ใช้ทำอะไร (เดาจากชื่อ + schema) |
|-------|-----------------------------------|
| `tx_rcc_error_log_rXX` (×20) | บันทึก error/warning ระหว่างประมวลผลของแต่ละรายงาน |
| `tx_rcc_ops_*` | ตารางผลลัพธ์ One Page Summary (OPS) แยกตามรายงาน + sub-categories ของ R13 |
| `tx_rcc_temp_*` | staging temp ระหว่างคำนวณ — แยกตามประเภทธุรกิจ (group, ul) × model_type |
| `tx_rcc_processing` / `tx_rcc_monitoring` | สถานะ orchestration / monitoring การประมวลผล |
| `tx_rcc_prevalidate` / `tx_rcc_script_prevalidate` | pre-validation rules ที่ต้องผ่านก่อนรัน |
| `tx_rcc_trial_balance_hd/dt` | เก็บไฟล์ Trial_Balance.csv ที่ user upload |
| `tx_rcc_generate_file` | log การ generate ไฟล์ Excel R0X รายเดือน |
| `tx_rcc_reference_number` | track Reference no. ที่ใช้ในแต่ละรอบ |
| `q_report` schema (29 tables) | แยก schema สำหรับรายงาน (อาจเป็น views/materialized views) |

---

## 📄 ดูรายละเอียดทั้งหมด

- **`CATALOG.md`** (571 KB, 8000 บรรทัด) — schema ครบทุกคอลัมน์ของ 246 ตาราง + sample 2-5 rows
- **`SUMMARY.md`** — สรุปจาก wiki (business logic)
- **`digest.md`** — per-report GL codes, business lines, model types (จาก wiki)

# สรุประบบ "รายงาน R" (รายงานทางคณิตศาสตร์ IFRS17) — Ocean Life Insurance

**Source:** [http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1086750787](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1086750787)
**Space:** Quality Assurance (QA) — โครงการ Accounting Data Warehouse (ADW/EDW)
**ดึงข้อมูล:** 28/05/2026 — 24 หน้า (หน้าหลัก + 3 หน้าหมวด + R01–R20)

---

## 1. ภาพรวมระบบ

ระบบ **"รายงาน R"** เป็นชุดรายงานทางคณิตศาสตร์ตามมาตรฐาน **IFRS17** ของ คปภ. ที่ผลิตจาก **Enterprise Data Warehouse (EDW)** เพื่อส่งให้ **ฝ่ายคณิตศาสตร์ประกันภัย** ใช้ในการคำนวณเงินสำรองและรายงานตามมาตรฐานบัญชีรูปแบบใหม่

**จำนวนรายงาน:** **20 รายงาน (R01–R20)** + One Page Summary (OPS) = 21 ผลผลิตหลัก

**Flow โดยรวม:**

1. ฝ่ายบัญชี (NBS user = `acc1`) บันทึก Posting ใน NBS → ระบบ generate Reference Number (เช่น `EJ202509300014`)
2. ฝ่ายบัญชีเข้า **NBS Portal > ระบบงาน Back Office > Enterprise Data Warehouse > เมนู Reconcile data V2**
3. ระบุ Period (เช่น 2566/08) + Reference no. → กดประมวลผล
4. นำเข้าไฟล์ `Trial_Balance_YYYYMM_to_YYYYMM.csv` (จาก GL Accounting) ของ One Page Summary
5. สถานะ → "รอยืนยันข้อมูล" → ระบบ produce ไฟล์ 2 ชุด:
   - **รายงาน Reconcile** สำหรับฝ่ายบัญชี (download จากหน้าจอ)
   - **รายงาน R** สำหรับฝ่ายคณิตศาสตร์ (เก็บบน Share Path)
6. ฝ่ายบัญชี ติ๊ก ✓ ตรวจสอบรายงาน → กด **"ยืนยันข้อมูล"**
7. ระบบส่ง **automail** ให้ฝ่ายคณิตศาสตร์
8. ฝ่ายคณิตศาสตร์ map drive ไปดึงไฟล์จาก:
   - `\\10.40.24.246\edw\SIT\IFRS17\Report R` (SIT)
   - `\\10.40.24.246\edw\UAT\IFRS17\Report R` (UAT)
   - (Mapping: username `edwad` / Password ตาม wiki — เก็บใน wiki page ของ main)

**Config ก่อน Run (DB: `adw`):** เนื่องจาก 20 รายงานใช้เวลานาน ให้ปิดรายงานที่ไม่ต้องการได้ผ่านตาราง `ms_rcc_group_type` (เปลี่ยน `expire_date` จาก `2999-01-01` ให้เป็นวันที่หมดอายุ เช่น `2023-01-01`)

**ตารางผลลัพธ์มาตรฐาน (DB adw) ทุกรายงานจะ Insert ที่ 2 ที่:**
- `tx_rcc_output_rXX` — ผลลัพธ์รอบล่าสุด (delete + insert ทุกครั้งที่ประมวลผลใหม่)
- `tx_rcc_output_snapshot_rXX` — backup snapshot รายเดือน (กดปุ่ม Backup เก็บถาวร ไม่ต้องประมวลใหม่)

---

## 2. โครงสร้างหน้าใน wiki

```
รายงาน R (1086750787)  ← หน้าหลัก: workflow + screenshots + share path
├── รายงาน R ทั้งหมด (1259799764)   ← ตารางลิงก์ R01–R20
├── ขั้นตอนการประมวลผลรายงาน R มากกว่า 1 เดือน (1264025812)  ← workflow รัน multi-period (backup เดือนก่อน แล้วประมวลรวม)
└── รายงาน R By ดา (1306854092)  ← attachment เดียว "Share Knowledge รายงาน R.xlsx"

หน้า R01–R20 อยู่ในกิ่ง: EDW Phase3 > Reconcile and Adjustment Posting > 1) Screen_RCC
```

---

## 3. แม่แบบที่ใช้ร่วมกันในทุก R0X

ทุกหน้า R0X เริ่มต้นด้วย **Objective** เดียวกัน:
> "ส่งข้อมูล Reconcile actual data and Adjustment posting เพื่อออกรายงาน R0X"

และเดินตามขั้นตอนเดียวกัน 5 ระดับใน DB **adw**:

```
tx_adw_account_head            (filter accounting_date ในเดือนที่เลือก)
   ↓ id
tx_adw_account_head_system     (status='POST' AND post_approved_date IS NOT NULL)
   ↓ id
tx_adw_transaction_policy
   ↓ id
tx_adw_transaction_detail
   ↓ id  +  model_type
tx_adw_<model>_detail          ← เปลี่ยนตาราง model_type ตามรายงาน
   ↓ id
tx_adw_double_entry_detail     (filter business_line_code + gl_code ตามรายงาน)
```

ความแตกต่างของแต่ละรายงานอยู่ที่ **3 มิติ**:

| มิติ | ความหมาย |
|---|---|
| **Model Type** | `tx_adw_<model>_detail` ที่ join เข้ามา → กลุ่มของรายการ (เบี้ย/สินไหม/บำเหน็จ/Benefit/RI/...) |
| **Business Line** | `tx_adw_double_entry_detail.business_line_code` → ประเภทธุรกิจ (Direct GMM / UL / Group) |
| **GL Code (Account Code)** | `tx_adw_double_entry_detail.gl_code` whitelist → รหัสบัญชีเฉพาะที่เข้ารายงานนี้ |

---

## 4. ตารางสรุปรายงาน R01 — R20

จัดกลุ่มตามประเภทธุรกิจ (Business Line filter) เพื่อให้เห็นภาพ:

### 🅰️ Direct GMM — General Measurement Model (BL 01, 02, 03 MRTA/MLTA, 04, 07 UL Rider, 08 PAR)

| Report | Model Type | จุดประสงค์ทางบัญชี | GL Code ตัวอย่าง | Master / Table พิเศษ |
|--------|------------|---------------------|--------------------|-----------------------|
| **R01** | PREMIUM + INVESTMENT (Interest) | **เบี้ยประกันรับตรง** Direct (ชีวิต/อบ./สุขภาพ ปีแรก/ปีต่อไป/ชำระครั้งเดียว) + ดอกเบี้ยรับชำระเบี้ย + ส่วนลด/คืนเบี้ยตรง | 405111xx, 405121xx, 405131xx, 42022111, 50521xxx, 50522xxx | **`cf_r01_gl_mapping`** |
| **R02** | COMMISSION_OV | **ค่าบำเหน็จจ่ายตรง** (ตัวแทน OV) | 50551xxx ทั้งหมด 29 codes, 51090170 | `tx_rcc_reconcile_r02` |
| **R03** | CLAIM (+ PREMIUM/INVESTMENT) | **สินไหมจ่ายตรง** (สินไหมชีวิต/อบ./สุขภาพ, ค่าทำศพ, Exgatia, สินไหมคืนเบี้ย, สินไหมทดแทน) | 50542xxx, 50544xxx, 50545005, +405xxx ที่เป็น BENEFIT/CLAIM | — |
| **R04** | BENEFIT (+ OTHER_INCOME/INVESTMENT/PREMIUM) | **เงินผลประโยชน์จ่ายตรง** (ครบกำหนด/เวนคืน/อัตโนมัติ/บำนาญ/ปันผล/รายได้ค่าบริการ) | 50541xxx, 50543xxx, 50547xxx, 50549xxx, 43040026 | — |
| **R14** | INVESTMENT | **เงินกู้กรมธรรม์** (Policy Loan – APL) | 11011100 เงินกู้กรมธรรม์, 11012100 เงินกู้อัตโนมัติ, 42022110–14 | **`cf_r14_gl_mapping`** |
| **R15** | REINSURANCE_PREMIUM | **เบี้ยจ่ายประกันต่อ (Direct Ceded)** ในประเทศ/ต่างประเทศ ชีวิต/อบ./สุขภาพ ปีแรก/ต่อไป | 50531xxx, 50532xxx, 50533xxx (12 codes) | `tx_rcc_reconcile_r15` |
| **R16** | REINSURANCE_COMMISSION_OV | **ค่าบำเหน็จรับจาก RI (Direct)** | 41510105, 41510110, 41510205, 41510210 | `tx_rcc_reconcile_r16` |
| **R17** | REINSURANCE_CLAIM (+ REINSURANCE_PREMIUM) | **สินไหมรับคืนจาก RI + ส่วนแบ่งกำไรรับ (Direct)** | 41011xxx, 41012xxx, 41030xxx, 41040000, 41520005/10, 40546xxx, 50531–50533xxx (27 codes) | — |

### 🅱️ Unit Linked (BL = "07", BASIC policies only — เว้น R06 ที่รวม RIDER UDR)

| Report | Model Type | จุดประสงค์ทางบัญชี | GL Code ตัวอย่าง | หมายเหตุ |
|--------|------------|---------------------|--------------------|-----------|
| **R05** | PREMIUM | **เบี้ยรับ UL** + หนี้สินจากสัญญาลงทุน | 23570001 (หนี้สิน-Fund), 23570002 (หนี้สิน-GL), 405111xx Premium Charge | UL BASIC only |
| **R06** | COMMISSION_OV | **บำเหน็จ UL** (รวม UL Rider type UDR) | 50551xxx (28 codes) | RIDER ดึงเฉพาะ UDR |
| **R07** | CLAIM | **สินไหม UL** + หนี้สินจากสัญญาลงทุน | 50542105, 50542120, 50549005, 23570001/2 | UL BASIC only |
| **R08** | BENEFIT + OTHER_INCOME | **Benefit UL** — Auto Surrender, Surrender, Partial Withdraw, Maturity, Loyalty Bonus | 23570001/2, 53000000 (ปันผล/Loyalty), 43040026 | UL BASIC only |
| **R09** | OTHER_INCOME_FEE | **ค่าธรรมเนียม UL** — COI, Policy Fee, Admin Fee, Withdrawal Fee | 43040027 COI, 43040028 Policy Fee, 43040029 Admin, 43040030 Withdraw, 43040031, 43040032, 43040033 | **`cf_r09_gl_mapping`** |

### 🅲️ Group Insurance / PA Group (BL = "03" GROUP YRT, "05" PA-Group)

| Report | Model Type | จุดประสงค์ทางบัญชี | GL Code ตัวอย่าง |
|--------|------------|---------------------|--------------------|
| **R10** | PREMIUM | **เบี้ยรับประกันกลุ่ม + PA กลุ่ม** (NORMAL = ตามปกติ / MOVEMENT = ส่วนต่างจำนวนสมาชิกระหว่างปี) | 40511100/200, 40512100/200, 40513100/200, 50522xxx (15 codes) |
| **R11** | COMMISSION_OV | **ค่าบำเหน็จกลุ่ม** | 50551101/103/107/126/206/211 |
| **R12** | CLAIM | **สินไหมจ่ายกลุ่ม** (Provision/Approve/Accrual) | 50542105, 50542110, 50542121, 50542125, 50544110/111/210, 50545005 |
| **R18** | REINSURANCE_PREMIUM | **เบี้ยจ่าย RI ของกลุ่ม** | 50531xxx, 50532xxx, 50533xxx (12 codes) |
| **R19** | REINSURANCE_COMMISSION_OV | **บำเหน็จรับ RI ของกลุ่ม** | 41510105/110/205/210 |
| **R20** | REINSURANCE_CLAIM | **สินไหมรับคืน RI ของกลุ่ม** | 41011xxx, 41012xxx, 41030xxx, 41040000, 41520005/10, 40546006/7/8 |

### 🅳️ ค่าใช้จ่ายดำเนินงาน (นำเข้าจากระบบ EXP)

| Report | แหล่งข้อมูล | จุดประสงค์ |
|--------|---------------|-------------|
| **R13** | **`tx_exp_proc_output_*`** (จากระบบ EXP — ไม่ใช่จาก EDW transactional) | **ค่าใช้จ่ายดำเนินงาน** (Operating Expenses) แบ่งเป็น 6 sub-output: TO5 (Adjustment), TO1.1, TO1.2, TO2 (Sales promotion & Advertising), TO3 (Product), TO4 (Brand) — ข้อมูลถูก duplicate ลง `tx_rcc_landing_r13_*` แล้วผลิตที่ `tx_rcc_output_r13_*` (ต่างจาก R อื่นๆ ที่อ่านจาก `tx_adw_*`) |

---

## 5. รายละเอียดสำคัญที่พบ

### Model Types ที่ใช้ใน EDW (ฟิลด์ `tx_adw_transaction_detail.model_type`)

| Model | ตารางย่อย | รายงานที่ใช้ |
|-------|-----------|----------------|
| PREMIUM | tx_adw_premium_detail | R01, R03 (joint), R04 (joint), R05, R10 |
| COMMISSION_OV | tx_adw_commission_ov_detail | R02, R06, R11 |
| CLAIM | tx_adw_claim_detail | R03, R07, R12 |
| BENEFIT | tx_adw_benefit_detail | R04, R08 |
| INVESTMENT | tx_adw_investment_detail | R01 (joint), R03/R04 (joint), R14 |
| OTHER_INCOME | tx_adw_other_income_detail | R04 (joint), R08 (joint) |
| OTHER_INCOME_FEE | tx_adw_other_income_fee_detail | R09 |
| REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | R15, R17 (joint), R18 |
| REINSURANCE_COMMISSION_OV | tx_adw_commission_ov_ri_detail | R16, R19 |
| REINSURANCE_CLAIM | tx_adw_claim_ri_detail | R17, R20 |

### Business Line Code (`business_line_code` ใน `tx_adw_double_entry_detail`)

| BL | ความหมาย | ใช้กับ |
|----|----------|---------|
| 01 | อุตสาหกรรม (ปช, ขพ — Industry) | GMM (R01,02,03,04,14,15,16,17) |
| 02 | สามัญ (Ordinary) | GMM |
| 03 | สามัญ (เฉพาะ MRTA/MLTA) **หรือ** ประกันกลุ่ม (GROUP YRT) | GMM (เฉพาะ MRTA/MLTA) + Group (R10,11,12,18,19,20) |
| 04 | PA สามัญ | GMM |
| 05 | PA กลุ่ม | Group |
| 07 | Unit Linked | UL (R05,06,07,08,09) + GMM R02 (ปรับเพิ่ม UL Rider) |
| 08 | PAR Product (สามัญ มีเงินปันผล เช่น plan code OP01) | GMM |

### หน้าจอ Confluence ที่อ้างถึง
- **EDW-RCC-SD001** — หน้าจอประมวลผล/ยืนยันข้อมูล (ใช้กับทุก R)
- **EDW-RCC-SD002** — หน้าจอแสดงรายละเอียด/ยืนยันการออกรายงาน R (อ้างถึงใน R13)

### Master/Config tables ที่พบ
- `ms_rcc_group_type` — เปิด/ปิดรายงานผ่าน `expire_date`
- `cf_r01_gl_mapping`, `cf_r09_gl_mapping`, `cf_r14_gl_mapping` — GL mapping เฉพาะของ R01/R09/R14 (รายงานอื่น hardcode รหัสในเอกสาร)

### Workflow รัน Multi-period (จากหน้า "มากกว่า 1 เดือน")
1. ประมวลเดือนแรก (เช่น 202509) → กด backup ที่ `tx_rcc_output_snapshot_rXX`
2. ประมวลเดือนที่สอง (202510) → backup เช่นเดียวกัน
3. ประมวลพร้อมกัน 2 เดือน (Trial_Balance_202509_to_202510.csv) — output ออกมาเป็นไฟล์ตัวอย่างชื่อ `R06ACC_202509_to_202510.xlsx`, `R05ACC_202509_to_202510.xlsx`
4. ตัวอย่าง query ตรวจสอบ:
   ```sql
   SELECT renewal_commission, *
   FROM tx_rcc_output_snapshot_r06
   WHERE "period" = '202509' AND policy_no IN ('UL00002717');
   ```

### Special notes
- **R02 (16-FEB-2023):** ปรับ — เอา `Plan_code = 'NoOLI'` ออก
- **R02/R06 UL Rider:** R02 ดึง RIDER ที่ไม่ใช่ UDR / R06 ดึงเฉพาะ UDR (UDR แสดงเฉพาะใน R06)
- **R03 หมายเหตุ:** collection type ที่เป็น BENEFIT จะแสดงที่ R04, CLAIM แสดงที่ R03
- **R13:** เป็น "เคสพิเศษ" เพราะข้อมูลมาจากระบบ EXP (รายงานค่าใช้จ่ายดำเนินงาน) ไม่ใช่จากธุรกรรมประกัน — ใช้ table prefix `tx_rcc_landing_r13_*` และ `tx_exp_proc_output_*`
- **Authentication users:**
  - **NBS user `boss`** → ใช้หาเมนู "ดูแลระบบ > จัดการข้อมูล Dashboard" เพื่อหา Reference Number
  - **NBS user `acc1`** → ฝ่ายบัญชี (รัน Reconcile data + ยืนยันข้อมูล)
- **Reference no.** มีเฉพาะ Environment Test — Production จะไม่มี
- **Database:** `adw` (PostgreSQL ตามคำสั่ง `SELECT * FROM ms_rcc_group_type mrgt`)

---

## 6. ไฟล์ที่เก็บไว้ในเครื่อง

ทั้งหมดอยู่ที่ `D:\Claude\Project\IFRS17\รายงาน R\wiki_dump\`:

```
wiki_dump/
├── tree.json                  ← page hierarchy (id → title, parent, children)
├── INDEX.md                   ← สารบัญ markdown ทั้ง 24 ไฟล์
├── summaries.md (221 KB)      ← เนื้อหา text-only ของทุกหน้า (ตัด chrome แล้ว)
├── digest.md   (108 KB)       ← per-R-page digest: Objective + tables + GL codes
├── SUMMARY.md (ไฟล์นี้)        ← สรุปภาษาคน
├── raw/                       ← HTML ดิบ 24 ไฟล์
├── md/                        ← markdown ที่แปลงจาก HTML (24 ไฟล์)
├── cookies.txt                ← session cookie (ใช้ run script ดึงข้อมูลใหม่ได้)
├── fetch_tree.js              ← script ดึง pagetree+HTML
├── fetch_linked.js            ← script ตามลิงก์ภายในเนื้อหา (ดึง R01–R20)
├── html2md.js                 ← HTML→Markdown converter
├── extract_summaries.js       ← สร้าง summaries.md
└── digest.js                  ← สร้าง digest.md
```

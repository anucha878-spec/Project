# สรุป Business Design — New Group RI (Estimate / Actual / PS data modules)

> Generated 2026-07-02 from wiki dump (files: 41-bd-ep-estimate.md, 42-bd-ap-actual.md, 40-bd-ps-module.md)
> Wiki URL pattern: `http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}`

---

## 1. BD-EP-001 ประมวลผล Estimate (page **1302593701**)

**Scope/หลักการร่วมทุก Treaty**
- 1 ปีกรมธรรม์ = `PolicyNo + Effective YYYYMM`; Estimate Premium ประมวลได้ **ไม่เกิน 1 ครั้ง/รอบปีกรมธรรม์** — ระบบเก็บ `first_estimate_yyyymm`
- RI Period ของ Premium = Effective YYYYMM ของกรมธรรม์; Period ของ Claim ใช้ **Approved Date** เทียบ Closing Period
- คัดเลือกกรมธรรม์ต่อ Treaty จาก BD-PS-001 ด้วย prefix ของ `RIG_View_Policy.ReInsur_No`: Dai-ichi = `'DG%'`, Gibraltar Group EB = `'[0-9][0-9]%'` (2 หลักแรกเป็นตัวเลข), Thaire Group PA = `'TG%'`; Status ต้องไม่ใช่ **Cancel**
- เงื่อนไขเลือกกธ.เข้าประมวลผล (ใช้ NoOfMemberActive จาก BD-PS-002 = สมาชิกที่ StatusMember NOT IN ('C','D','L')):
  - `Effective YYYYMM = Period`: Active > 0 → ประมวลผล; Active = 0 → เลื่อนไป Period ถัดไปที่ Active > 0
  - `Effective YYYYMM < Period`: Active > 0 และ **ยังไม่เคย** ประมวล (เช็คจาก BD-PS-014) → ประมวลย้อนหลัง; เคยแล้ว → ไม่ประมวลซ้ำ
  - `Effective YYYYMM > Period` → ไม่ประมวล
- เคลม: เดิมมีเช็ค AccidentDate (AccidentDate > LapseDate → ไม่ประมวล; AccidentDate < EffectiveDate แต่เคยส่ง RI ปีก่อน → แยก record Effective ย้อนหลัง 1 ปี) — **ยกเลิกเงื่อนไขตรวจ accident date แล้ว** (ระบบสินไหมตรวจแล้ว) แต่ต้องเก็บ `is_inforce_claim_flag` / `exclude_reason_code`; RI Status ต้องเป็น Lapsed/Inforce/New business
- Output: EDW file, I-Master (i report), SOA per treaty, Error Log; Estimate Premium ที่ทำแล้วบันทึกลง BD-PS-014

### 1.1 Estimate Dai-ichi (pages **1305412056**, Policy **1305412062**, RI Claim **1305412065**, %RI initial **1306395061**)
- คำนวณเฉพาะ **RI Claim** (ไม่มีสูตร premium ในเอกสารนี้); Initial Percentage Reinsurance: **Layer 1 = SA 0–999,000,000 บาท → 50%**, Layer 2/3 = 0%
- สูตร (ระดับสมาชิก แล้ว sum เป็นราย กธ.+EffectiveDate, ปัด 2 ตำแหน่ง):
  - `RI Claim Life = round(Claim Amount Type Death × Percentage Reinsurance%, 2)`
  - `RI Claim AD&D = round((Claim Amount Type AccidentDeath + Claim Amount Type Dismemberment) × %, 2)`
  - `RI Claim TPD = round(Claim Amount Type TPD × %, 2)`
  - `RI Claim Med = round((OPD+IPD+Dental+MedAccident รวมกัน) × %, 2)`

### 1.2 Estimate Gibraltar (pages **1305411598**; Premium **1305411588**, Commission **1305411590**, Claim **1305411596**, %RI initial **1306394814**)
- **Layer boundaries + cede% (ค่า initial; ค่าจริงมาจาก config BD-CF-002-SD002-2-2 เลือกตาม PolicyNo + Effective Date อยู่ในช่วง Effective Date From–To ของ RI Condition):**
  | Layer | ช่วง Sum Assured | Percentage Reinsurance |
  |---|---|---|
  | L1 | 0 – ≤ 5,000,000 | **15%** |
  | L2 | > 5,000,000 – ≤ 20,000,000 | **100%** |
  | L3 | > 20,000,000 | **0%** |
- **RI Premium** — ตัวคูณตาม Payment Mode (จาก BD-PS-001): Annual=1, Monthly=12, Quarterly=4, Semi-Annual=2. ข้อมูลเบี้ย/ทุน/rate จาก BD-PS-004; กธ. unname ใช้หน้าจอ Unname Policy (Estimate) — sum สมาชิกทุกความคุ้มครอง × เรทเบี้ย
  - `Premium Life (รวม) = ตัวคูณ Payment Mode × (Life Premium + Life Extra Premium)`; Accident = `ตัวคูณ × (Accident Premium + Accident Extra Premium)`
  - แยก Layer:
    - `Premium Life Layer3 = ตัวคูณ × Life Premium Rate × [Life Insure Layer3 − (Amount Life Layer3 × 20,000,000)]`
    - `Premium Life Layer2 = ตัวคูณ × Life Premium Rate × [Life Insure Layer2 − (Amount Life Layer2 × 5,000,000) + (Amount Life Layer3 × 15,000,000)]`
    - `Premium Life Layer1 = Premium Life − Layer2 − Layer3` (Accident สูตรเดียวกันด้วย Accident Premium Rate)
  - `RI Premium {cov} Layer{n} = Round(%Reinsurance × Premium {cov} Layer{n}, 2)`; RI Premium ต่อ กธ. = ผลรวม L1+L2+L3
- **RI Commission**: `RI Commission Life/Accident = Round(RI Commission Rate × RI Premium Life/Accident, 2)` (rate จาก RI Condition)
- **RI Claim** (per member; กำหนด Layer จาก Sum Insured ของความคุ้มครองนั้น):
  - เคลม Accident Death / Dismemberment ต้องมี **อายุ ณ วันเกิดเหตุ ≤ 70 ปี**; Accident Death ตรวจจาก `ClaimAccident > 0` (เพราะ Type ลง 'Death' เสมอ); Life ไม่ตรวจอายุ
  - SA ≤ 5M: `RI Claim = Round(%L1 × Claim Amount, 2)`
  - 5M < SA ≤ 20M: `Round(%L1 × 5M,2) + Round(%L2 × (Claim Amount − 5M),2)`
  - SA > 20M: `Round(%L1 × 5M,2) + Round(%L2 × 15M,2) + Round(%L3 × (Claim Amount − 20M),2)`
  - Claim Recovery Life = RI Claim Life; **Claim Recovery Accident = RI Claim Accident + RI Claim Dismemberment**

### 1.3 Estimate Thaire Group PA (pages **1305411938**; เงื่อนไขส่ง RI **1305674314**, SR calc **1305674075**, Claim **1305674173**)
- คำนวณ **รายสมาชิก** (จาก BD-PS-005/R01) เฉพาะ Accident (**Life Premium ต้องเป็น 0.00**); RI Premium Accident ต่อ กธ. = Sum(RI Premium Total ของสมาชิกทุกคน)
- คัดกรองสมาชิก: `Sum Insured Accident < 500,000 → ไม่ประมวลผล`; อายุเกิน **Age Limit** ของ กธ. และไม่มี **อนุโลม (จาก Thaire)** ใน Policy Detail → ไม่ส่ง RI; อ้างอิง PolicyNo + Effective Date + CertNo
- **SR Accident (Sum Reinsured) ต่อสมาชิก** (SA = SumInsuredAccident):
  | Layer | ช่วงทุน | %RI | SR Accident |
  |---|---|---|---|
  | 1 | ≤ 400,000 | 0% (Retention 100%) | 0 |
  | 2 | 400,000–2,000,000 | 50% | `50% × (SA − 400,000)` |
  | 3 | 2,000,000–10,000,000 | 100% | `100% × (SA − 2,000,000) + 50% × (2,000,000 − 400,000)` |
- `SR Murder & Assault = SR Accident × %Murder & Assault (MA)`; `SR Loadings = SR Accident × %Special Coverage` (ทั้งสองจาก BD-CF-002-SD002-3-2 Policy Detail)
- RI Rate (per 1,000) ขึ้นกับ Type (1/2), Class(อาชีพ), Age; อายุเกินที่ได้อนุโลมใช้ **เรทอายุ 61–75 ปี**
- `RI Premium Accident = Round(SR Accident / 1,000 × RI Rate, 2)`
- `RI Premium Loadings = Round(SR Loadings/1,000 × RI Rate × (%Loading Motorcycle + %War + %Strike & Riot + %Sports & Activities + %Aircraft), 2)`
- `RI Premium Discount = Round((%Discount MA × RI Premium Accident) + (%Discount Group Volume × (((1 − %Discount MA) × RI Premium Accident) + RI Premium Loadings)), 2)`
- `RI Premium Total = Round(RI Premium Accident + RI Premium Loadings − RI Premium Discount, 2)`; `RI Commission = Round(%RI Commission × RI Premium Total, 2)`
- **RI Claim (Estimate)**: ตรวจ SA < 500,000 → ไม่ส่ง, Age Limit + อนุโลม; `Claim Recovery Accident = round(Sum(Claim Amount AccidentDeath / Sum Insured Accident × SR),2) + round(Sum(Claim Amount Dismemberment / Sum Insured Dismemberment × SR),2) + round(Sum(Claim Amount TPD / Sum Insured TPD × SR),2)`

### 1.4 หน้าจอ Estimate BD-EP-002 (page **1314947817**, SD001–004: 1314947822/24/26/28)
- Maker/Checker; สถานะรายการ: รอประมวลผล / ประมวลผลไม่สำเร็จ / รอยืนยันรายการ / ยกเลิกรายการ / ยืนยันรายการ Bordereau (สำเร็จ/ไม่สำเร็จ) / อยู่ระหว่างนำส่ง Bordereau; สถานะ EDW และ MPS แยกชุด; ดาวน์โหลด Bordereau/SOA/EDW Import/Master i-Report; `Due to(+)/From(-) OLI = RI Premium + RI Commission + Claim Recovery (รับ+/จ่าย-)`

---

## 2. BD-AP-001 ประมวลผล Actual (page **1312096732**)
- ประมวลผลราย **Quarter Period** (เช่น 2024Q2 = Apr–Jun); Profit Commission เฉพาะ Q4; รองรับ Gibraltar Group EB (Life+AD&D) และ Thaire Group PA (AD&D เท่านั้น); กรณี Actual Premium ที่กธ.ยังไม่เคย Estimate ให้บันทึกลง BD-PS-014 กันบันทึกบัญชีซ้ำ

### 2.1 Actual Dai-ichi (page **1313899289**; Claim **1313899594**)
- เฉพาะ Claim → ไฟล์ BDR (DT Claim / Dismemberment / Med.Acc / MedClaim); เลือกเคลม Approve ที่อนุมัติใน Quarter; **ไม่ประมวลผลกลุ่ม Decline ที่มีค่าสืบสวน** (BDR ไม่ใช้ยอดนี้)
- `Reinsurer's Share: Life/Accident/Dismemberment/TPD = Round(%Reinsurance × Claim Amount Type ..., 2)` (Layer 1 = 0–999M → 50%)
- แสดงผล: Med ระดับ กธ.+EffectiveDate; DT/Dismemberment ระดับ กธ.+EffectiveDate+CertNo+ClaimNo; **ClaimNo เดียวกันแต่ Approved Date คนละเดือน → รวมเป็นบรรทัดเดียว group ด้วย ClaimNo**

### 2.2 Actual Gibraltar — RI Premium (page **1312096861**)
- Source: BD-PS-001, BD-PS-008 (R61), BD-PS-007 (R17), BD-PS-004, BD-PS-010 (over 70), RI Condition
- **ปีกรมธรรม์ของ ri** = `(Year(EffectiveDate) − Year(RICommencementDate)) + 1` (นำปีลบปี ไม่ดูวัน/เดือน) โดย **RICommencementDate = วัน/เดือนจาก CommencementDate + ปีจากเลข ReinsuredNo 2 ตัวแรก** (เช่น 1701123 → 2017) — ใช้กับ BDR เพื่อรองรับการย้าย treaty (RI รับรู้เป็นเบี้ยปีแรก); ไฟล์ EDW/SOA ใช้ **Master Pol Yr.** (PolicyYear จากหน้าบ้าน = เบี้ยปีต่อ)
- **เลือกเบี้ยตั้งต้นจาก R61** (page ตัวอย่าง **1312719914**): 1 ปีกธ.มีหลาย PeriodDate → ใช้เฉพาะรายการที่ `PeriodDate = เดือนเริ่มต้นของปีกรมธรรม์ (EffectiveDate)` รายการเดียวเป็นฐานเบี้ยทั้งปี (เช่น GH044 ปี 30 ใช้ PeriodDate 16/06/2023; ปี 31 ใช้ 16/06/2024); เบี้ยตั้งต้น Life = `PremiumLife + PremiumE1`, AD&D = `PremiumAccident`; เบี้ยรายปี = เบี้ยตามโหมด × ตัวคูณ Payment Mode
- **เลือกจำนวนสมาชิก/ทุนรวมจาก R17**: 1 Period ต่อ 1 Policy Period — ใช้ Period ล่าสุดใกล้วันสิ้นสุด Policy Period ที่ไม่เกินช่วงรายงาน; New Business/Inforce → Period สิ้นไตรมาส; หลาย Policy Period → แยก record; Lapsed → Period สุดท้ายก่อนสิ้นสุด; Outstanding Claim ไม่มี inforce → period สุดท้าย หรือกำหนด member/ทุน = 0
- **NB/Renewal Premium** (Period = Effective Date): New Business เมื่อปีกธ.ของ ri = 1, Renewal เมื่อ > 1; แปลงรายปี → หักเบี้ย over-age (Accident) → ถ้ามีหลาย Layer:
  - `NB Premium L2 = (Premium Rate × ตัวคูณ Payment Mode) × SA L2 / 1,000` (ROUND 2)
  - `NB Premium L3 = (Premium Rate × ตัวคูณ) × SA L3 / 1,000` (ROUND 2)
  - `NB Premium L1 = เบี้ยรายปี − NB Premium L2 − NB Premium L3`
- **Movement (Revivals/Refund)**:
  - ระหว่างปี: เฉพาะ Mode = **Annual** และ Period ≠ Effective Date; Non-Annual → Movement ระหว่างปี = 0; แต่ละ period ยอด > 0 → Revivals, < 0 → Refund (**บันทึกเป็นบวก คูณ −1**); **ไม่หักเบี้ย over-age**; แสดงเฉพาะ **L1** (L2,L3 = 0)
  - ครบรอบปีกธ. (Non-Annual: เมื่อเดือนสุดท้ายของปีกธ.อยู่ใน Quarter ที่ประมวล): `Movement Value = เบี้ยรวมทั้งปี(R61 ทุกรายการ) − เบี้ยที่เคยส่งรายงานแล้ว (Bordereau ทุก Quarter ตั้งแต่เริ่มสัญญาถึง Quarter ก่อนหน้า)`; AD&D หักเบี้ย over-age (annualized) ก่อน; > 0 → Revivals, < 0 → Refund (บันทึกบวก); เฉพาะ L1; **รวมยอดโดยไม่แยก period**
  - ตัวอย่าง GH2222 Quarterly Eff 16/06/2024 → ใช้รายงาน 2024Q2–2025Q1 หาค่าเคยส่ง
- `TL Premium: Life/AD&D = NB + Renewal + Revivals − Refund`
- **ตาราง scenario A–H** (page **1313145645**): มิติ = Layer (L1 only / มี L2-3) × OverAge(Acc>70 มี/ไม่มี) × Mode (Annual/ไม่ใช่) → Annual คำนวณ Movement ระหว่างปีได้, Non-Annual Movement=0 ระหว่างปี; ทุกเคสคำนวณ Movement ครบรอบปี; เคสมี OverAge หักเบี้ย over-age ทั้งตอน NB/Renewal และก่อนหา Movement ครบรอบปี; เคสมี L2/3 Movement ใส่เฉพาะ L1
- **ส่วน Reinsurance ใน BDR (Step 11)**: `% SA share` จาก RI Condition ต่อ Layer; `TL SA(RI) = ROUND(%SA Share × TL SA, 2)`; ทุกรายการเบี้ย RI = ค่า Original × %SA Share (ROUND 2)

### 2.3 Actual Gibraltar — RI Commission (page **1313439782**)
- `RI Commission: Life = Round(RI Commission Rate × ส่วน reinsurance TL Premium: Life, 2)` ต่อ Layer; AD&D เช่นเดียวกัน

### 2.4 Actual Gibraltar — RI Claim (page **1313145888**)
- 3 กลุ่ม: (1) เคลม Approve ใน Quarter (+Investigation Expense ถ้ามี, Remark = ว่าง); (2) เคลม **Decline** ที่มี Investigation & Legal Expense (บังคับต้องมี expense; Remark = "Decline Claim"); (3) เคลม Approve **รอบก่อนหน้า** ที่เคยส่ง RI Claim แล้ว (match จาก Claim Notification เดิมด้วย ClaimNo+PolicyNo) และมี expense เพิ่ม → แสดงเฉพาะส่วน expense (Remark = "Investigation Expense")
- Match Investigation Expense (BD-PS-011) กับสินไหมด้วย PolicyNo, EffectiveDate, CertNo, ApprovedDate, ClaimNo, ClaimType (Life: Type='Death' & ClaimLife>0; AccidentDeath: Type='Death' & ClaimAccident>0; Dismemberment: Type='Dismemberment')
- อายุ ≤ 70 สำหรับ accident death/dismemberment ณ วันเกิดเหตุ; layer split ของ Reinsurer's Share เหมือน Estimate (5M/15M/20M) แต่ **Reinsurer's Share: Investigation & Legal Expense = Round(%L1 × Amount Paid By Insurer: Investigation & Legal Expense, 2) เสมอ (ใช้ %Layer 1 อย่างเดียว ทุกช่วงทุน)**
- Claim Notification field พิเศษ: `Status = "Accidental Death"` เมื่อ `Amount Paid: Accident = 2 × Original Sum Insured: Accident` ไม่งั้น "Normal"; Effective Date ในรายงานใช้วัน/เดือนจริง + ปีจาก ReinsuredNo 2 หลักแรก

### 2.5 Actual Gibraltar — Experience Refund (page **1313439789**)
- Dependency: ต้องรัน RI Premium เสร็จก่อน
- เลือกจาก BD-PS-009 รายการที่ Effective Date อยู่ในช่วง Quarter **ของปีก่อนหน้า** (ER จ่ายเมื่อครบปีกธ.) เช่น 2024Q2 → Effective 01/04/2023–30/06/2024; กธ.ต้องเริ่มสัญญาในเดือนของ Quarter (2024Q3 → เดือน 7/8/9), ครบ 1 ปี, **ไม่ Lapse**; กธ.มีทั้ง Life+Accident → คำนวณแยก 2 รายการ (**Group No. = PolicyNo_CoverageType**, เช่น GL1644_Life)
- CoverageType: Life เมื่อ PremiumLife > 0; Accident เมื่อ PremiumAccident > 0
- Number of member = NoMemberLife / NoMemberAccidentDeath จาก R17 เฉพาะ Period ที่ตรงเดือนเริ่มปีกธ.
- `Original Experience Refund paid by the Ceding Company`:
  - Life: `[PremiumLife × (1 − %PercentExpense) − (Claim − Loss carried forward)] × %Experience Refund`
  - Accident: `[PremiumAccident × (1 − %PercentExpense) − Claim] × %Experience Refund` — **แต่ Accident: Claim / Loss carried forward / Ct = 0 (รอ CR After Golive แยกยอดสินไหมตาม coverage)**
- `Net reinsurance premium to the Reinsurer` = ส่วน reinsurance TL Premium (Life/AD&D) จาก Bordereau ทุก Quarter ตั้งแต่เริ่มสัญญาถึง Quarter สิ้นสุดคุ้มครอง; Reinsurance Commission ทำนองเดียวกัน
- `Reinsurance Experience Refund` (**cap ไม่ให้เกินเบี้ยสุทธิ**):
  `=IF(ROUND(NetRIPrem/GrossPremium(Pt) × OriginalER,2) <= (NetRIPrem − RICommission), ROUND(NetRIPrem/Pt × OriginalER,2), ROUND(NetRIPrem − RICommission,2))`

### 2.6 Actual Gibraltar — BDR / EDW / SOA / Profit Commission
- **BDR** (page **1312719567**): 1 กธ.ต้องมี **4 บรรทัดเสมอ** = L1, L2, L3, ผลรวม L1–3; ถ้ามีเฉพาะ L1 ให้ generate L2/L3 เป็น 0; `% SA share` แสดงต่อ Layer (แถวรวมแสดงว่าง); Investigation Expense และ ER แสดงเฉพาะแถวรวม; RI Commission ต่อ Layer = `ROUND(TL Premium(RI) × RI Commission Rate%, 2)`
- **EDW/SOA** (page **1313439902**): EDW 1 บรรทัด/กธ.+ปีกธ.; SOA 1 ไฟล์/Quarter; Q4 ต้องอัปเดต Profit Commission เข้า SOA
- **Profit Commission GIB** (page **1313439971**): รันได้เฉพาะ **Q4** และต้องมี Actual ครบ Q1–Q4; เงื่อนไข **ผลรวม Members: Life (BDR Q4 รวมทุกกธ.ที่มี Policy period ในปี) > 200 คน** จึงคำนวณ; Incomes: (1) Unearned premium ต้นปี = เบี้ยปีก่อน × Reserve for unearned premiums% (ปีแรกใช้ Total Premium จาก BD-PS-015; ปีถัดไปใช้ (6) ปีก่อนจากไฟล์ PC), (2) Reserve OS claim ต้นปี = 0, (3) เบี้ยสุทธิปีปัจจุบัน (NB+Renewal+Revival − Refund, Life+AD&D); Outgoes: (4) Claims+Investigation & Legal, (5) `(3) × Administrative expenses%`, (6) `(3) × Reserve for unearned premiums%`, (7) = 0, (8) RI Commission, (9) Reinsurance Experience Refund, (10) NegativeBalanceBF จาก BD-PS-015; `Net balance = A − B`; PC = `Net balance × Rate of profit commission%` เมื่อ > 0 ไม่งั้น 0

### 2.7 แยก Layer สมาชิก/ทุน — BD-AP-001-02-03-1/2 (pages **1313145813**, **1313145815**, **1313145817**)
- **เตรียมข้อมูล (02-03-1)**: จำนวนสมาชิก/ทุนรวมจาก R17 (NoMemberLife, NoMemberAccidentDeath, SumInsuredLife, SumInsuredAccidentDeath — เลือก 1 Period ต่อ Policy Period ตามกติกา 2.2); จำนวน/ทุนราย Level 2–3 จาก BD-PS-004 (AmountLife, AmountAccident, LifeInsure, AccidentInsure) ตาม PolicyNo + EffectiveDate ใน Quarter
- **สูตรแยก Layer (02-03-2)** (ค่า 5M/15M/20M ใช้ min/max จาก Layers of Sum Assured ใน RI Condition):
  | Layer | Members | SA |
  |---|---|---|
  | L2 | MB L2 = จำนวนสมาชิก Level 2 (ไม่มี → 0) | `SA L2 = ทุน Level 2 − (5,000,000 × MB L2) + (15,000,000 × จำนวนสมาชิก L3)` |
  | L3 | MB L3 = จำนวนสมาชิก Level 3 (ไม่มี → 0) | `SA L3 = ทุน Level 3 − (20,000,000 × MB L3)` |
  | L1 | `MB L1 = สมาชิกรวม − L2 − L3` | `SA L1 = ทุนรวม − SA L2 − SA L3` |

### 2.8 Actual Thaire Group PA (page **1313440001**)
- Scope: AD&D เท่านั้น, รายสมาชิก, SA Accident ≥ 500,000, อายุไม่เกิน Age Limit หรือได้รับอนุโลม; output ไฟล์ Renewal และ Alteration (1 ไฟล์/กธ., 1 sheet/ประเภท Alteration)
- **Renewal** (page **1313440015**): เลือกกธ.ที่ EffectiveDate อยู่ใน Quarter; สมาชิกจาก R01; ต่อสมาชิก:
  - `Sum Reassured Accident`: ทุน < 500,000 → ไม่ส่ง; 500k–2M → `(SA − 400,000) × %RI L2`; > 2M → `((SA − 2,000,000) × %RI L3[100%]) + ((2,000,000 − 400,000) × %RI L2[50%])`
  - `Sum Reassured Murder = SR Accident × %MA`; `Sum Reassured Loadings = SR Accident × %Special Coverage`
  - `Premium Accident = Round(SR Accident × RI Rate / 1000, 2)`; `Premium Loadings = Round(SR Loadings × RI Rate × ผลรวม RI Premium Loading / 1000, 2)` (Loading = Motorcycle+War+Strike&Riot+Sports&Activities+Aircraft)
  - `Premium Discount = MA Discount + Group Volume Discount` โดย `MA = %Discount MA × Premium Accident`, `GV = %Discount Group Volume × [((1 − %Discount MA) × Premium Accident) + Premium Loadings]`
  - `Total Premium = Premium Accident + Premium Loadings − Premium Discount`; `Commission = Total Premium × %RI Commission` (จาก Policy Detail)
- **เงื่อนไขเลือก Alteration** (page **1313669181**) จาก BD-PS-006 ตาม DocumentDate × AlterationDate:
  | Case | DocumentDate | AlterationDate | ผล |
  |---|---|---|---|
  | 1 | ใน Quarter | ใน Quarter | แสดง |
  | 2 | ใน Quarter | ก่อน Quarter | แสดง |
  | 3 | ใน Quarter | หลัง Quarter | ไม่แสดง (รอ Quarter ถัดไป) |
  | 4 | ก่อน Quarter (≤ 1 ปี) | ใน Quarter | แสดง |
  | 5 | ก่อน Quarter (≤ 1 ปี) | ก่อน Quarter | ไม่แสดง |
  | 6 | เกิน 1 ปี | ใดๆ | ไม่ดึงมาประมวลผล |
- **ประเภท Alteration** (Apendix page **1313669193**): StatusAfter/AlterationMovement `A` = New Member/Addition (code NM), `C` = Cancellation/Termination (CL), `N` = Increased SA (IC), `E` = Decreased SA (DC)
- **Alteration – Claim** (page **1313669162**): 3 กลุ่มเหมือน GIB; Minimum SI = 500,000; Age Limit + อนุโลม; SR ต่อเคลม: `<500k → 0`; `500k ≤ CB ≤ 2M → (Claim Benefits − 400,000) × 50%`; `>2M → (CB − 2,000,000) × 100% + (2,000,000 − 400,000) × 50%`; `Reinsurer's Share Claim = SR × (Paid Amount Claim / Claim Benefits)`; `Reinsurer's Share Investigation Expense = SR × (Paid Amount Investigation Expense / Claim Benefits)`
- **Alteration – New Member / Termination** (page **1313669179**): เบี้ยคิดตามวัน — `No. of Day`: NewMember = CoveragePeriodEnd − CoveragePeriodBegin (Begin = AlterationDate); Termination = CoveragePeriodEnd − WithdrawalDate(AlterationDate); ทุกค่าเป็นหน่วย /1,000; `SUM REINSURED/1,000 ACCIDENT`: <500 → 0; 500–<2,000 → `(SI/1000 − 400) × 50%`; ≥2,000 → `(2,000 − 400) × 50% + (SI/1000 − 2,000) × 100%`; `REINSURANCE PREMIUM ACCIDENT = SR/1000 × RI Rate × No. of Day / จำนวนวันในปีกรมธรรม์ (EndDate − EffectiveDate)` (ROUND 2); Loadings/Discount/Commission สูตรเดียวกับ Renewal แบบ prorate
- **Alteration – Increased/Decreased SA** (page **1313669220**): แสดง 3 แถวต่อสมาชิก (SA / SR / RI Prem.) × ชุด Before / After / Increased(After−Before) / Decreased(Before−After) ต่อคอลัมน์ ACCIDENT, MURDER, LOADINGS, DISCOUNT; เงื่อนไขทุนข้ามเกณฑ์:
  - Increased: ก่อน+หลัง ≥ 500k → ประมวลปกติ; ก่อน < 500k และหลัง ≥ 500k → คำนวณ **เบี้ยที่ต้องจ่ายเพิ่ม**
  - Decreased: ก่อน+หลัง ≥ 500k → ประมวลปกติ; ก่อน ≥ 500k และหลัง < 500k → คำนวณ **เบี้ยคืน (Refund)** เพราะออกจากเงื่อนไข RI
  - `Commission - Increased/Decreased = (RI Prem ACC + RI Prem LOADINGS − RI Prem DISCOUNT) × %RI Commission`
- **Thaire Profit Commission** (page **1313898644**; หน้าจอ BD-AP-001-04 **1313439927**): Q4 เท่านั้น + Actual ครบ 4 Quarter; เงื่อนไข **ผลรวม Cession No. (จำนวนสมาชิกส่ง RI ทั้งปี จาก Renewal BDR ทุก Quarter) > 200**; Income: (1) เบี้ย RI สุทธิ = `RI NB + RI Renewal + RI Revivals − RI Refund (AD&D)`, (2) Reserve unearned ต้นปี = เบี้ยปีก่อน × %Reserve (ครั้งแรกใช้ BD-PS-015); Outgo: (4) Claims+legal, (5) `(1) × %Administrative expenses`, (6) `(1) × %Reserve for unearned premiums`, (7)=0, (8) Commission (RI Commission − RI Refund Commission), (9) Loss carried forward (Profit for Year ปีก่อน < 0 → แสดงเป็นบวก; ครั้งแรกใช้ NegativeBalanceBF จาก BD-PS-015); `Profit for Year = Total(Income) − Total(Outgo)`; `Total profit commission = Profit × %Profit Commission Rate` เมื่อ > 0
- **หน้าจอ Actual BD-AP-002** (page **1315340327**): เพิ่มสถานะ "รอยืนยันกับบริษัท Reinsurer", "รอ offset ข้อมูล" (EDW); ประมวลผล Actual ครั้งแรกผ่านปุ่ม — ถ้าเคยประมวล Quarter/Treaty แล้วต้อง **ยกเลิกแล้วประมวลซ้ำรายรายการเท่านั้น**; Popup Profit Comm. ต้องครบ 4Q ทุก Treaty + SOA flag เลือกได้รายการเดียว; `Due to/From OLI` รวม Profit Comm. ด้วย

---

## 3. BD-PS Data Modules (โมดูลข้อมูล PS)

| BD-PS | Page id | ตาราง/แหล่ง | สาระสำคัญที่ควรทดสอบ |
|---|---|---|---|
| 001 Master group policy | **1294992374** | `tx_stg_est_all_policy` ← RIG_View_Policy/Company | ดึงเฉพาะกธ.ที่ส่ง RI ณ สิ้นเดือน Closing Period; PaymentMode map PayType 0/1/2/3 = Monthly/Quarterly/SemiAnnual/Annual; PolicyName ใช้ CompanyNameEng, ตัวพิมพ์ใหญ่; **RIStatus**: I/B + ExpireDate ≥ สิ้นเดือน Period → PolicyYear=1 'New Business', >1 'Inforce'; ExpireDate < สิ้นเดือน หรือ L → 'Lapsed'; ExperienceRefund flag 0/1 = No/Yes |
| 002 กธ. ณ ต้นสัญญา (Estimate) | **1294992298** | `tx_stg_est_policy_1y` | Effective ย้อนหลัง 1 ปีจาก Closing; NoOfMember ทั้งหมด/Active/Inactive — Active = StatusMember NOT IN ('C','D','L'); นับสมาชิกราย coverage (Life: LifePrem>0 or LifeE1Prem>0 or LifeE2Prem>0; Acc: AccPrem>0 or AccE2Prem>0; Med: MedPrem>0; TPD: TPDPrem>0); SumInsured ราย coverage |
| 003 Claim (Est,Act) | **1294992302** | RIG_View_ClaimDeath/TPD/Health | Period = yyyyMM ของ **Approve_Date**; Death: Type fix 'Death'; TPD: ClaimStatus 0→'Dismemberment', 1,2→'TPD'; Health: ClaimType map ผ่าน `cf_claim_type` else 'Other'; InvestigationExpense fix 0.00 |
| 004 Estimated Premium Layer | **1294992306** | `tx_stg_est_prem_layer` ← RIG_View_CertInforce + `cf_layer_by_treaty` | Level L1 ≤5M / L2 >5–20M / L3 >20M; **Accident count/SA/เบี้ย เฉพาะ Age ≤ 70**; filter PolicyStatus NOT IN ('L','C'), StatusMember IN ('I','B'); Rate ต่อทุน 1,000; IPD/OPD/Dental Premium ลงเฉพาะแถว Level 1 |
| 005 (R01) inforce by member | **1294992309** | `tx_stg_est_inforce_member` | รายสมาชิกต้นสัญญา; **ไม่มีรายการ Alteration**; Sex 1/2→M/F; มี SumInsuredAccident (ฐานคำนวณ Thaire) |
| 006 Alteration (Actual) | **1294992313** | ← RIG_View_CertAlteration | Period = yyyyMM ของ **DocDate**; StatusAfter A/C/N/E → Addition/Termination/IncreaseSA/DecreaseSA; รันทุกวันที่ 1 เวลา 01.00 |
| 007 (R17) inforce by policy | **1299251439** | `tx_stg_act_inforce_policy` | Period จาก PeriodDate (12 เดือนจาก PromiseDate); นับสมาชิกราย coverage ที่ทุน > 0, StatusMember NOT IN ('C','D'); **Accident เฉพาะ Age ≤ 70**; แหล่ง member/SA รวมของ GIB Actual |
| 008 (R61) Premium & movement | **1294992337** | ← WS_RIG_010 | ย้อนหลัง 1 ปี; NoMemTotal = (Previous + Addition) − Cancellation; เบี้ยลงเฉพาะเดือนที่ต้องจ่ายตาม PayType ไม่ใช่ → 0.00 |
| 009 Experience Refund | **1294992342** | ← RIG_View_ExpRefund | Period จาก PeriodBeginDate; PaidStatus: ExpRefundG > 0 → 'Paid'; **PercentExpense = 100 − TotalAmtPercent**; PremiumLife = Premium+PremiumE1 (type='01', FlgCal=1); Accident '02'; TPD '10'; ExpRefundPreviousYear = ADJClaim |
| 010 Member over 70 | **1294992349** | ← RIG_View_CertInforce | เฉพาะ GIB, `Age > 70`; เก็บ AccInsur, AccPrem รายสมาชิก (หักเบี้ย over-age) |
| 011 Investigate Expense | **1289389361** | `tx_stg_act_investigation_expense` | เฉพาะ `doc_status = 0`; PolicyCode 0:GH 1:GL 2:GU 3:GA 4:GS; แยก InvestiExpense/MedExpense/LegalExpense |
| 012 Unname Policy | Est **1289389365**, Act **1295712327** | manual import | Estimate คีย์รายเดือน; Actual Excel รายไตรมาส Maker–Checker; เลือก "ไม่มีข้อมูลนำเข้าประจำไตรมาส" ได้ |
| 013 Nature of Business | **1300497090** | master data | map DBDCode → NOB (English uppercase) |
| 014 ตั้งฐานกธ.เคยส่ง RI | **1301807335** | one-time จาก MPS | กันส่ง/บันทึกเบี้ยซ้ำ; PolicyNo, PolicyYear, Treaty Code, RI Commencement Date |
| 015 ตั้งฐาน Profit Commission | **1303511187** | one-time | ยอดขาดทุนสะสมปีก่อน (NegativeBalanceBF บันทึกเป็นบวก) + Total Premium ปีก่อน |

---

## 4. Checklist edge cases / เงื่อนไขที่ tester ควร verify

1. **Gibraltar layer boundary**: SA = 5,000,000 พอดี → L1; 20,000,000 พอดี → ไม่เข้า L3; cede 15/100/0 อ่านจาก RI Condition ตามช่วง Effective Date
2. **Layer collapse/แยก Layer**: SA L2 มี term `+15M × MB L3`; L1 เป็น residual — ทดสอบกธ.เฉพาะ L1, มี L3 ไม่มี L2, และ residual ติดลบ
3. **BDR GIB 4 บรรทัด/กธ.** แม้มีแค่ L1; Investigation Expense + ER เฉพาะแถวรวม
4. **R61 selection**: เบี้ยตั้งต้น = แถว PeriodDate = เดือน EffectiveDate เท่านั้น; ยอดลบ → Refund เป็นบวก; Non-Annual Movement ระหว่างปี = 0
5. **Over-age 70 (GIB Accident)**: หัก NB/Renewal + Movement ครบรอบปี, ไม่หัก Movement ระหว่างปี
6. **ปีกรมธรรม์ 2 ชุด (GIB)**: BDR ใช้ปีจาก ReinsuredNo 2 หลักแรก; EDW/SOA ใช้ PolicyYear หน้าบ้าน
7. **Claim GIB**: Investigation & Legal Expense ใช้ %L1 ทุกช่วงทุน; "Accidental Death" เมื่อจ่าย 2 เท่าทุน
8. **Thaire**: minimum 500k / retention deduct 400k; อนุโลมใช้เรท 61–75; Alteration matrix DocumentDate×AlterationDate; prorate ด้วยจำนวนวัน
9. **Experience Refund**: จากปีกธ.ก่อนหน้า, ไม่ Lapse; แยก Group No. ต่อ coverage; cap ที่ NetRIPrem − RICommission
10. **Profit Commission**: Q4 + ครบ 4Q + สมาชิก > 200; loss carried forward เป็นบวก
11. **ปัดเศษ**: ROUND 2 ระดับรายสมาชิก/ราย Layer ก่อน sum
12. **กันซ้ำ**: BD-PS-014 (tx_rig_policy_base) ทั้ง Estimate และ Actual

# สรุป Confluence Wiki — New Group RI (Master Config Maker/Checker + Process Screens + SRS)

> Generated 2026-07-02 from wiki dump (files: 43-bd-cf-config.md, 44-bd-other.md, 45-srs-other.md, 99-misc.md)
> **สำคัญสำหรับ BRD-PS-08** (Master Configuration UI, 31 test cases ยังไม่ test)
> URL pattern: `http://wiki.thaisamut.co.th/pages/viewpage.action?pageId={id}`

---

## 1. Master Config (BD-CF) — ส่วนสำคัญที่สุด

### 1.1 บทบาท (ทุกหน้าจอ CF)
- **Maker** = เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (สร้าง/แก้ไข/ลบ/ส่งพิจารณา)
- **Checker** = เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (พิจารณา อนุมัติ/ส่งกลับแก้ไข)
- กฎสำคัญ: **ผู้ส่งพิจารณากับผู้อนุมัติต้องไม่ใช่คนเดียวกัน** (icon พิจารณาแสดงเฉพาะเมื่อ "ผู้ใช้งานปัจจุบันไม่ใช่ผู้ที่ส่งรายการพิจารณา" — SD001 ข้อ 8); spec สะกด "Cheker" ผิดในบางจุด

### 1.2 สถานะ (จาก Configuration Data page 1303248904)
- **สถานะ Reinsurer (1002000)**: รอส่งพิจารณา (WAIT) → รอพิจารณา (WAPRV) → ส่งกลับแก้ไข (EDIT) / อนุมัติ (APRV)
- **สถานะ Treaty (1001200)**: **บันทึกร่าง (DRAFT)** → รอส่งพิจารณา (WAIT) → รอพิจารณา (WAPRV) → ส่งกลับแก้ไข (EDIT) / อนุมัติ (APRV) — Treaty มี DRAFT เพิ่มจาก Reinsurer

### 1.3 BD-CF-001 Reinsurer (parent page 1302593887)

**SD001 หน้าจอจัดการข้อมูล Reinsurer (page 1302593898)**
- ค้นหา: Dropdown **Reinsurer** (default ทั้งหมด), **Status** (default ทั้งหมด)
- เรียง Reinsurer Code A→Z; คอลัมน์: Reinsurer Code, Name, Start Date, Expire Date, Update Date, status
- เงื่อนไขปุ่ม/ไอคอน:
  - **ส่งพิจารณา** (Button): Maker; default กดไม่ได้ กดได้เมื่อ "เลือกรายการ" → Popup ยืนยัน
  - **เพิ่ม Reinsurer**: Maker → SD002
  - **เลือกรายการ** (Icon): Maker; แสดงเฉพาะสถานะ "รอส่งพิจารณา"
  - **ประวัติ** (นาฬิกา): ทุกสิทธิ์ ทุกสถานะ → SD005
  - **รายละเอียด** (เอกสาร): ทุกสิทธิ์ ทุกสถานะ → SD003
  - **แก้ไข** (ดินสอ): Maker; สถานะ "รอส่งพิจารณา"/"ส่งกลับแก้ไข"/"อนุมัติ" → SD002
  - **ลบ** (ถังขยะ): Maker; แสดงเมื่อ **ยังไม่ถูกเรียกใช้จาก Treaty** → Popup ยืนยัน
  - **พิจารณา** (ค้อน): Checker; สถานะ "รอพิจารณา" + ผู้ใช้ปัจจุบันไม่ใช่ผู้ส่ง → SD004

**SD002 เพิ่ม-แก้ไข Reinsurer (page 1302593903)** — ฟิลด์:
1. Reinsurer Code (Free Text, **Required**, ไม่ซ้ำ) / 2. Reinsurer Name (**Required**)
3. Location (Dropdown Local/Foreign, **Required**) / 4. Country (Dropdown, **Required**; Local→เฉพาะ Thailand; Foreign→ทุกประเทศยกเว้น Thailand)
5-9. Address/Office Number/Ext./Fax/Telephone (ไม่บังคับ, มี Info popup) / 10. Email (**Required**) / 11. Website
12. Start Date (**Required**, ≤ Expire Date) / 13. Expire Date (**Required**)
- Error: ไม่กรอก field บังคับ → **"กรุณาระบุ(ชื่อField)"** สีแดงใต้ field; รูปแบบผิด → **"รูปแบบ(ชื่อField)ไม่ถูกต้อง"**; ไม่ให้บันทึก
- บันทึกสำเร็จ → สถานะ = **"รอส่งพิจารณา"**

**SD003 ดูรายละเอียด (page 1302593905)** — Label 13 ฟิลด์ + ปุ่มปิด
**SD004 พิจารณา (page 1302593907)** — Checker; **ผลพิจารณา** (Dropdown: อนุมัติ / ส่งกลับแก้ไข, Required), **หมายเหตุ** (Required เมื่อ "ส่งกลับแก้ไข" → ไม่กรอก = **"กรุณาระบุหมายเหตุ"**)
**SD005 ประวัติ (page 1302593911)** — วันเวลาดำเนินการ (พ.ศ.), เจ้าหน้าที่ (เช่น edw_actuarial_02), Action, หมายเหตุ

### 1.4 BD-CF-002 Treaty (parent page 1302593924)

**SD001 จัดการ Treaty (page 1302593927)**
- ค้นหา: Reinsurer, Treaty, Start/Expire Date (Start ≤ Expire ไม่งั้น "รูปแบบวันที่ไม่ถูกต้อง"), **Status — Maker default "ทั้งหมด" / Checker default "รอพิจารณา"**
- ปุ่ม/ไอคอนระดับรายการ: ส่งพิจารณา (Maker), เพิ่ม Treaty (Maker→SD002-1), เลือกรายการ (Maker, "รอส่งพิจารณา"), ประวัติ→SD006, **รายละเอียด**→SD003 (แสดงเมื่ออนุมัติมาแล้ว ≥1 ครั้ง), **รายละเอียดระหว่างรอพิจารณา** (นาฬิกาทราย)→SD005 (สถานะ "ส่งพิจารณา"), ลบ (Maker, ยังไม่เคยอนุมัติ), พิจารณา (Checker→SD004)
- **ไอคอน 4 หัวข้อย่อยต่อรายการ** (ทั่วไป / RI Condition / กรมธรรม์ / RI Premium Rate) — pattern เดียวกัน:
  - Maker + "บันทึกร่าง"/"รอส่งพิจารณา"/"ส่งกลับแก้ไข" → กดได้ เปิดแก้ไข (SD002-1..-4)
  - ทุกสิทธิ์ + "ส่งพิจารณา" → กดไม่ได้ (อยู่ระหว่างรอพิจารณา)
  - ทุกสิทธิ์ + "อนุมัติ" → กดได้
  - Checker + "บันทึกร่าง/รอส่งพิจารณา/ส่งกลับแก้ไข" → กดไม่ได้ (อยู่ระหว่างแก้ไข)
- ส่งพิจารณาเฉพาะบางหัวข้อได้ (เช่นแก้เฉพาะ ตั้งค่ากรมธรรม์+RI Premium Rate)

**SD002-1 ตั้งค่าข้อมูลทั่วไป (page 1302593961)**
- เพิ่มใหม่: Reinsurer (Dropdown แสดงเฉพาะ **สถานะอนุมัติ**, Required), Treaty Code (Free Text, Required, ไม่ซ้ำ), ชื่อสัญญา (Required), Start/Expire Date (Required, Start≤Expire), **Benefit** (Checkbox: Life / TPD/Dismemberment / Dismemberment / Medical / Accident Death — **เลือก ≥1**)
- แก้ไข: **Reinsurer + Treaty Code = Disable**; เพิ่ม **RI Method** (Dropdown: QS / QS-Surplus / Surplus-QS, Required)

**SD002-2 RI Condition (จัดการ 1303740517 / เพิ่ม-แก้ไข 1303740529)**
- จัดการ: **Toggle "ตั้งค่า RI Condition" default Disable**; ปุ่มเพิ่ม RI Condition; list = Effective Date From/To (Promise Date); Enable toggle **ต้องมี ≥1 รายการ** ไม่งั้น Popup
- เพิ่ม/แก้ไข: RI Method (Required), **Minimum Sum Assured** (2 ตำแหน่ง, Required), **RI Commission Rate / Profit Commission Rate / Administrative expenses / Reserve for unearned premiums** (≤100.00, 2 ตำแหน่ง, Required), Effective Date From/To (From≤To)
  - **Layer**: ปุ่ม "เพิ่ม Layer" ทีละ 1, **สูงสุด 3 record** (ลบแล้ว re-number, รายการแรก = Layer 1); ต่อ Layer: **Minimum / Maximum** (Required), **Percentage Reinsurance** (≤100.00, Required)
  - Validation บันทึก: (a) field ไม่ครบ → error ใต้ field; (b) **ช่วงเงินแต่ละ Layer ซ้อนทับ → Popup ไม่ให้บันทึก**; (c) **Effective Date ซ้อนซ้อน/ไม่สอดคล้อง RI Condition เดิม → Popup ไม่ให้บันทึก**

**SD002-3 ตั้งค่ากรมธรรม์ (จัดการ 1304592385 / เพิ่ม 1304592387)** — 32 ฟิลด์
- จัดการ: Toggle default Disable; ปุ่ม **Refresh** = ดึงกรมธรรม์ภายใต้ Reinsured No Thaire ทั้งหมด; list: Policy No., Reinsured No. (เช่น TG010), สถานะใช้งาน (Active=ประมวลผล/Inactive), Coverage Period From/To
- เพิ่ม: Toggle เปิด/ปิดกรมธรรม์ (default **Inactive**); Current Policy No. (Disable); **Previous Policy No.** (Disable; ไม่พบ → เปิดกรอก + ปุ่ม **Search** → ไม่พบ = **"ไม่พบกรมธรรม์"**); Code Name (Required), Commencement Date (Required); **Policy Year** (Disable, คำนวณเดือน Commencement→Coverage From เป็นปี **ปัดขึ้น** เช่น 18 เดือน→2); Age Limit (Required); Occupation Class (1–4, Required); Coverage Period From/To (Disable)
  - CertNo. ที่อายุเกินและไม่อนุโลม; Remark; Coverage (AD&D Type 1/2, Required); AD&D (Required); **Murder & Assault (MA)** (0/25/50/75/100, Required); Special Coverage (Required); Loss finger (Required)
  - RI Premium Loading × 5 (Motorcycle/War/Strike&Riot/Sports&Activities/Aircraft, Required); **Discount for MA** (Disable, auto จาก Config ตาม % MA; ไม่ match → บันทึกไม่ได้); **Discount Group Volume** (0/10/15/20/25/30/35, Required)
  - **สำคัญ: ถ้าตั้ง "ปิดใช้งานกรมธรรม์" (Inactive) บันทึกได้โดยไม่ต้องกรอก field บังคับ**

**SD002-4 RI Premium Rate (จัดการ 1304592431 / เพิ่ม 1304592433)**
- จัดการ: Toggle default Disable; list Effective Date From/To; Enable toggle ต้องมี ≥1
- เพิ่ม: Effective Date From/To (From≤To), **RI Premium Rate** (Free Text, Required — Rate ต่อ Per(SA) ตาม Occ Class + Age); ช่วงวันที่ไม่สอดคล้องเดิม → Popup

**SD003 ดูรายละเอียด (1302593932)** — read-only 4 sections + popup; เข้าจาก icon เอกสาร (ต้องเคยอนุมัติ ≥1)
**SD004 พิจารณา (1302593952)** — Checker; error เหมือน Reinsurer SD004
**SD005 ระหว่างรอพิจารณา (1302593954)** — pending version; icon นาฬิกาทราย
**SD006 ประวัติ (1302593957)**

### 1.5 จุดทดสอบเชิงลบที่ spec ระบุชัด (expected result)
- Start Date > Expire Date → "รูปแบบวันที่ไม่ถูกต้อง"/"รูปแบบ(ชื่อField)ไม่ถูกต้อง"
- ตัวเลข % > 100.00 หรือทศนิยม ≠ 2 → ไม่ให้บันทึก
- Layer เกิน 3 / ช่วงเงินทับซ้อน / Effective date ทับซ้อน → Popup
- Toggle enable แต่ 0 รายการ → Popup
- Checker เห็นปุ่ม Maker ไม่ได้ (เพิ่ม/แก้ไข/ลบ/ส่งพิจารณา); Maker ไม่เห็นไอคอนค้อน; ผู้ส่งพิจารณาเองต้องไม่เห็นไอคอนพิจารณา

---

## 2. Process screens

### 2.1 BD-EP-002 ประมวลผล Estimate (page 1314947817)
- Maker: download/ประมวลผลซ้ำ/ยืนยัน/ยกเลิก; Checker: download อย่างเดียว
- ค้นหา: ข้อมูลประจำเดือน (Period ปัจจุบัน+ย้อนหลัง 2 ปี), Reinsurer, Treaty, **สถานะรายการ** (รอประมวลผล/ประมวลผลไม่สำเร็จ/รอยืนยันรายการ/ยกเลิกรายการ/ยืนยันรายการ Bordereau/ยืนยัน Bordereau ไม่สำเร็จ/อยู่ระหว่างนำส่ง Bordereau), **สถานะ EDW**, **สถานะ MPS**
- ปุ่ม **ยืนยันข้อมูล** (Maker; Popup: ยกเลิกรายการ [บังคับหมายเหตุ] / ยืนยันรายการ Bordereau), icon เลือกรายการ (สถานะ "รอยืนยันรายการ"), icon **ดำเนินการ** = ประมวลซ้ำ, icon download 4 ตัว: Bordereau/SOA/EDW Import/Master i-Report
- คอลัมน์เงิน: RI Premium/Commission/Claim Recovery/**Due to(+)/From(-) OLI**; ติดลบ = สีแดง; MPS "ยืนยันนำเข้าไม่สำเร็จ" → label เป็นปุ่มส่งซ้ำ

### 2.2 BD-AP-002 ประมวลผล Actual (page 1315340327; SD001 1317896209)
- ค้นหา: ข้อมูลประจำไตรมาส, Reinsurer, Treaty, สถานะรายการ (+**"รอยืนยันกับบริษัท Reinsurer"**), สถานะ EDW (+**"รอ offset ข้อมูล"**)
- ปุ่มหลัก: ประมวลผล Actual / ประมวลผล Profit commission / ยืนยันข้อมูล / ดำเนินการ; download: Bordereau(+EDW zip)/SOA/Profit Comm.(+Allocation zip); คอลัมน์เงินเพิ่ม **Profit Comm.**
- **Popups:**
  - BDR Report (1318125647) / PC Report (1318125651) / SOA Report (1318880115): Label + Download zip
  - **PC Process (1318125723)**: Year + Treaty; icon Q1–Q4 (สถานะ Actual รายไตรมาส), **SOA flag** (เลือก >1 → ระบุ SOA ได้รายการเดียว), DONE; ปุ่มประมวลผล **disable จนกว่า: ระบุครบ + Actual ครบ 4Q ทุก Treaty + ยังไม่ DONE**; ไม่ครบ 4Q → disable
  - **Actual process (1318125794)**: Period/Reinsurer/Treaty ("กรุณาระบุ"); **ถ้า Quarter นั้นของ Treaty เคยประมวลแล้ว ใช้ปุ่มนี้ซ้ำไม่ได้ → ต้องยกเลิกแล้ว re-process รายรายการ**
  - **Confirm Actual (1318125964)**: Dropdown สถานะ: รอยืนยันกับบริษัท Reinsurer / ยืนยันรายการ Bordereau / ยืนยัน Bordereau ไม่สำเร็จ / ยกเลิกรายการ (บังคับหมายเหตุ); ยืนยัน Bordereau **เฉพาะ Q4 ตรวจว่ามี Profit Commission แล้วหรือยัง**
  - Confirm Process/Download/Re Process (1318125888/1318125892/1318125956): popup ยืนยันอย่างง่าย

### 2.3 BD-RC-000 Reconcile Data (page 1298563634)
- สิทธิ์: ฝ่ายคณิตศาสตร์ประกันภัยต่อ
- ตาราง: รายการข้อมูล, RI type (Estimate/Actual/Estimate/Actual), วันเวลา (พ.ศ.), จำนวนรายการ, **สถานะ** (กำลังดำเนินการ / นำส่งไฟล์สำเร็จ / **นำส่งไฟล์ไม่สำเร็จติดต่อ IT Support**), Period (Est=202601, Act=2026Q1), Download
- List of Policy → Popup เงื่อนไข → `Policy_{FROM}_{TO}_{TREATY}.xlsx` ที่ `\groupri\landing\{period}\report_landing\`; Estimate update ทุกสิ้นเดือน 21:00 → `Group_RI/Estimate/{Period}`; Actual → เมื่อกดประมวลผล; RP-RC-001..007 + 012

---

## 3. สิทธิ์การเข้าใช้งาน (Access Rights)
- Appendix 2 (page 1289389375) — **ยังเป็น template ว่าง** ไม่มีข้อมูลจริง Group RI
- สิทธิ์จริงจาก spec หน้าจอ: **Maker / Checker (เจ้าหน้าที่ฝ่ายคณิตศาสตร์)** สำหรับ CF/EP/AP; **ฝ่ายคณิตศาสตร์ประกันภัยต่อ** สำหรับ RC; ตัวอย่าง user: `edw_actuarial_02`, `suthanee.sa`

---

## 4. System Architecture + Batch
- **Introduction (1289389357)**: 3 treaty, ~620 กรมธรรม์, สมาชิก 250,000/ปี; เดิม Excel 40 วัน/ไตรมาส; automate Bordereaux + เชื่อม **EDW / IFRS17 / คปภ.**
- **Overview flow (1289389385)**: Data Pull → Processing → User Review & Confirm → Convert Standard Template → EDW+I-Master (Est) / EDW+SOA+Reinsurer report (Act); Est รายเดือน, Act รายไตรมาส (ย้อนหลัง 2 ปี), PC เฉพาะ Q4; Layer GIB L1≤5M→15%, L2 5–20M→100%, L3>20M→0%; Thaire Retention 400k / 400k–2M 50% / 2–10M 100%
- **NFR (1289389369)**: ค้นหา ≤10 วิ, บันทึก ≤3 วิ; แก้ไข incident ภายใน 1 ชม.
- **Data Migration (1289389370)**: empty; **System Architecture (1289389358)**: diagram อย่างเดียว
- **Batch (1289389371)**: BATCH-001/002 เป็น template ระบบอื่น (Endorsement); batch จริง = landing auto สิ้นเดือน 21:00

---

## 5. Admin/Script Support + SQL ที่ใช้ทดสอบได้
- **Admin Manual (1289389355) + Script Support (1308197554): ว่างเปล่า**
- **SQL ตรวจสอบเวลาการประมวลผล (page 1317896670)** — ตรวจ pipeline หลังสั่งประมวลผล:
  - ตาราง `tx_rig_process_hd` (process_code, status, period, created_date, usage_status, sum_record, start_date, finish_date)
  - Params: `:period` = 'YYYYMM' (เช่น '202601'), `:createdDate` = 'YYYY-MM-DD'
  - Process codes: Landing = `RIG_AUTO_01..13`; Snapshot = `EST_SNAPSHOT_01..08,12`; Staging = `EST_STAGING_01..06`; Estimate = `EST_MAIN_PROCESS`; filter `status='SUCCESS'` (v2 ใช้ `usage_status='ACTIVE'`)
  - Query สรุป total_record + duration (SUM หรือ MAX(finish)-MIN(start)) ต่อกลุ่ม
- **Configuration Data (page 1303248904)** = expected values ของ dropdown ทุกตัวใน BRD-PS-08: Treaty Code patterns (DAI=DG%, THREL=TG%, GIB=[0-9][0-9]%), Over age GIB=70, Benefit 5 ค่า, RI Method 3 ค่า, Occupation class 1–4, Coverage ADD1/ADD2, MA % (0/25/50/75/100), Group Volume ranges, Code Name (OLI/SIIT/Somboon/ThaiSecom), สถานะทุกชุด พร้อม lookup_key

---
### Page ids หลักสำหรับทดสอบ CF (BRD-PS-08)
- Reinsurer: SD001=1302593898, SD002=1302593903, SD003=1302593905, SD004=1302593907, SD005=1302593911
- Treaty: SD001=1302593927, SD002-1=1302593961, SD002-2=1303740517/1303740529, SD002-3=1304592385/1304592387, SD002-4=1304592431/1304592433, SD003=1302593932, SD004=1302593952, SD005=1302593954, SD006=1302593957
- Process: EP-002=1314947817, AP-002=1315340327, RC-000=1298563634; Config Data=1303248904

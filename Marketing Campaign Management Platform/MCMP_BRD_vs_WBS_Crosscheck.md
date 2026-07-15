# Cross-check: BRD (v0.1) ↔ Development Effort / WBS (v1.0)

> **เอกสารที่นำมาเทียบ:** `[In Progress] 20240278 Marketing Campaign Management Platform_v1.0.xlsx` (export 2026-07-15 — 20 แท็บ)
> **ลักษณะเอกสาร:** นี่คือ **Development Effort Estimation / WBS** (แตกงานพัฒนา + ประมาณการ man-day BA/SA/Dev/QA + Impact System) — **ไม่ใช่ตัว BRD** แต่เป็นเอกสารที่ทีม IT แตกงานออกมาจาก BRD
> **วัตถุประสงค์การเทียบ:** ตรวจว่าทุก requirement/process ใน BRD ถูกแปลงเป็น Development Task ครบหรือไม่ และแต่ละ gap ตกอยู่ Production Lot ไหน
> **สรุปภาพรวม Effort (แท็บ `Project Timeline_New22.06.69` — เวอร์ชันล่าสุด):** Total **328 MD** (SA 106.75 / Dev 123.25 / QA 98.0) · Size M
> **⚠️ เปลี่ยนจากเดิม:** แผนเก่า (แท็บ `Project Timeline` ไม่มีวันที่, 2 Lot) = 452.2 MD (SA 140.75 / Dev 211.45 / QA 100) → **แผนใหม่ตัด Dev ลง ~88 MD และแบ่งขึ้น Production เป็น 3 Lot** ส่วน QA แทบไม่เปลี่ยน (100 → 98)
> **อัปเดต:** 2026-07-15

---

## 0. การแบ่งขึ้น Production 3 Lot

**แหล่งข้อมูล:** แท็บ `Development Effort` คอลัมน์ `Release` (ค่า 1/2/3) = งานแต่ละชิ้นอยู่ Lot ไหน · แท็บ `Project Timeline_New22.06.69` = วัน Go Live + QA effort

| Lot | ชื่อใน Sheet | ขอบเขต (WBS) | Go Live | QA MD |
|---|---|---|---|---|
| **Lot 1** | Part Campaign Management (Part 1) | 1.1.1 Customer · 1.1.2 Policy · 1.1.6 GA4 · 1.1.7 RFM Segment · 1.1.10 Monitoring · 1.2.1 Search Segment · 1.2.2 Tag (DB design) · 1.2.8 Sync FB/Google Ads | **19 ต.ค. 2026** | 27.0 |
| **Lot 2** | Lead Management | 2.1 นำเข้า Lead/Agent/Income · 2.2 Core Lead Mgmt (Auto Assign, SLA) · 2.3 Interaction LC Connect | **1 ธ.ค. 2026** | 27.5 |
| **Lot 3** | Campaign Management (Part 2) | 1.1.3 Line OA · 1.1.4 Case Mgmt (FB Inbox) · 1.1.5 BZB Ocean Club · 1.1.8 Activity & Campaign import · 1.1.9 Staff file · 1.2.2 Auto-tag · 1.2.3 Campaign · 1.2.4 Tracking · 1.2.5 LINE · 1.2.6 SMS · 1.2.7 Ocean Club App | **6 พ.ค. 2027** | 43.5 |

### 🔑 ข้อสังเกตสำคัญสำหรับ QA

1. **Lot 1 มี Segment แต่ "ส่ง Campaign ไม่ได้"** — งานสร้าง/ส่ง Campaign (1.2.3–1.2.7) ถูกเลื่อนไป Lot 3 ทั้งหมด. Lot 1 ส่งมอบแค่ *ข้อมูลเข้า → สร้าง Segment → sync ออก FB/Google Ads*. แปลว่า **E2E "สร้าง Segment → ส่งหาลูกค้า → วัดผล" จะทดสอบได้ครั้งแรกตอน Lot 3 เท่านั้น** — ต้องออกแบบ Lot 1 ให้ verify Segment ด้วยวิธีอื่น (ตรวจ audience count / export raw data / ปลายทาง Ads)
2. **ลำดับ Lot ไม่ตรงกับ 3 core process ของ BRD** — BRD เรียง 01 Ingestion → 02 Campaign → 03 Lead แต่ Lot เรียง Segment → Lead → Campaign. งานนำเข้าข้อมูล (1.1.x) ถูก**หั่นคร่อม Lot 1 กับ Lot 3** ตามว่า source ไหนป้อน feature ไหน
3. **Lot 2 (Lead) ไม่พึ่ง Lot 1** — 2.x ทั้งหมดอยู่ Lot 2 ก้อนเดียว ทดสอบแยกได้อิสระ
4. **1.2.2 (Create Segment + Tag) คร่อม Lot 1 กับ Lot 3** — DB design ของ Tag อยู่ Lot 1 แต่ **auto-tag logic (1.2.2.2.1) อยู่ Lot 3** → ตอน Lot 1 จะมีตาราง Tag แต่ยังไม่มีการติด Tag อัตโนมัติ

### ⚠️ Open Issues จาก Sheet (ต้อง confirm กับ PM)

| # | ประเด็น | ผลกระทบต่อ QA |
|---|---|---|
| S1 | **Lot 1: ป้าย UAT ค้าง** — Sheet เขียน `Go Live 19/10/2569` แต่ `End of UAT 30/10/2569` (UAT จบหลัง Go Live 11 วัน). เวอร์ชันก่อนหน้า `_New19.06.69` เขียน UAT 30/10 → Go Live 11/11 ซึ่ง consistent → สรุปว่า **Go Live ถูกเลื่อนเร็วขึ้นแล้วลืมแก้ป้าย UAT** (ยืนยันแล้ว 2026-07-15) | **UAT Lot 1 ต้องจบก่อน 19 ต.ค. 2026** ไม่ใช่ 30 ต.ค. → ช่วงเทสต์สั้นลงจริง 11 วัน |
| S2 | **Lot 3: week cells ขัดกับช่องแยกปี** — ช่อง week ของ QA Lot 3 อยู่ ก.ย.–ธ.ค. 2026 ทั้งหมด แต่ช่องแยกปีบอกว่า 29.25 MD อยู่ปี 2027 (รวมได้ 34.5 เท่ากันทั้งคู่). Go Live คือ พ.ค. 2027 → ถ้าเทสต์จบ ธ.ค. 2026 จะทิ้งช่วง 5 เดือน | **ยังไม่รู้ว่า test window จริงของ Lot 3 คือ ก.ย.–ธ.ค. 2026 หรือยืดไป 2027** — กระทบการจองคน |
| S3 | **แท็บ `Development Effort` ไม่ reconcile กับ `Project Timeline`** — มี effort 2 ชุด (ปกติ / `- AI`) และไม่มีชุดไหนรวมได้ 328 MD (ปกติ SA 59.25 / Dev 216.75 / QA 78.25 · AI SA 120.75 / Dev 192.95 / QA 110.75) | ใช้ `Development Effort` **เฉพาะ mapping งาน→Lot** เท่านั้น · ตัวเลข MD ยึด `Project Timeline_New22.06.69` |
| S4 | **WBS code พิมพ์ผิด** — พบ `1.1.17.2.2` (Design DB ตาราง RFM Segment) ซึ่งควรเป็น `1.1.7.2.2` | ไม่กระทบ scope แต่ทำให้ trace/rollup เพี้ยน ควรแจ้ง SA แก้ |

---

## 1. โครงสร้าง WBS v1.0 (ที่พบ)

```
1) พัฒนา/ปรับระบบ (451.70 MD)
 1. Part Marketing Campaign Management (313.45)
   1.1 กระบวนการนำเข้าข้อมูล (129.00)
       1.1.1 Customer (Auto Daily, DWH) | 1.1.2 Policy | 1.1.3 Line Ocean Connect
       1.1.4 Case Management (FB Inbox) | 1.1.5 Activity & Campaign (BZB-Ocean Club)
       1.1.6 GA4 | 1.1.7 RFM Segment (Manual) | 1.1.8 Activity & Campaign import
       1.1.9 Staff file (hash SHA-256) | 1.1.10 Monitoring & Support
   1.2 Core Marketing Campaign Management (184.45)
       1.2.1 ค้นหา Segment | 1.2.2 Create Segment (+Tag system/auto-tag/expiry)
       1.2.3 จัดการ Campaign (ค้นหา/สร้าง/แก้ไข) | 1.2.4 Tracking/Short Link
       1.2.5 ส่ง Line | 1.2.6 ส่ง SMS | 1.2.7 ส่ง Ocean Club App | 1.2.8 Manual Trigger FB/Google Ads
 2. Part Lead Management (127.75)
   2.1 นำเข้าข้อมูล (43.75): 2.1.1 Lead Corp Web | 2.1.2 Lead MCMP (public link, pentest)
       2.1.3 Agent OSSS | 2.1.4 ผลงาน Income | 2.1.5 จัดเรียง Lead by Zone
   2.2 Core Lead Mgmt (29.00): 2.2.1 Auto Assign/Round Robin/Hot-Warm/SLA/reassign + Digital Sale
   2.3 Interaction LC Connect (31.25): 2.3.1 API&WS (UW/UL status) | 2.3.2 Batch (1h noti, SLA, email 9:00, HRA, retention 3 เดือน) | 2.3.3 LC Connect UI (My Lead, list, detail, calendar)
2) งานอื่นๆ (10.5): Meeting, Risk Management, House Keeping
3) การทดสอบ/ขึนทะเบียน: Load Test, Penetration Test, CB Audit
```

---

## 2. ตาราง Cross-check (BRD Process → WBS Task)

**สถานะ:** ✅ ครอบคลุมชัดเจน | ⚠️ มีบางส่วน/ไม่ชัด ควรยืนยัน | ❌ ไม่พบ task ที่ระบุชัด

### Process 01 — Data Ingestion
| BRD Requirement | WBS Task | สถานะ |
|---|---|---|
| Customer (CIS/DW Daily) | 1.1.1 | ✅ |
| Policy (AS400) | 1.1.2 | ✅ |
| Line Ocean Connect | 1.1.3 | ✅ |
| Ocean Club App (Vendor BZB) | 1.1.5 | ✅ |
| UTM / GA4 | 1.1.6 | ✅ |
| RFM (S3/Actuary, Manual) | 1.1.7 | ✅ |
| Staff (HR upload) | 1.1.9 (+hash SHA-256) | ✅ |
| FB Inbox (NBS Case Mgmt) | 1.1.4 | ✅ |
| **Contact Center (ช่องทางแยกจาก FB Inbox)** | 1.1.4 พูดถึงเฉพาะ FB Inbox | ⚠️ Contact Center แยกหรือรวม? |
| Update/Insert ไม่ซ้ำ | 1.1.1.3 | ✅ |
| Error handling + Email แจ้งผล | 1.1.1.1.2 | ✅ |
| **Automail แจ้งผล 08:00 / ไม่พบไฟล์ 09:00 (ระบุเวลา)** | มี email แจ้งผล แต่ไม่ระบุเวลา | ⚠️ |
| **Popup Validation ไฟล์ (csv≤5MB, column, ซ้ำ) — 01-7** | ไม่พบ task เฉพาะ | ⚠️ |
| **Do not contact list (นำเข้า/จัดการ) — 01-0-(4)** | **ไม่พบเลย** | ❌ |
| **Maker/Checker อนุมัติการนำเข้า Campaign/Activity — 01-0-(4)** | มีเพียง "ตารางเก็บ Log การอนุมัติรายการ" (1.2.2.2.2) | ⚠️ ไม่มี task workflow ชัด |

### Process 02 — Campaign Setting & Send
| BRD Requirement | WBS Task | สถานะ |
|---|---|---|
| ดึง Customer + RFM เข้า MCMP (02-2) | 1.1.7 | ✅ |
| สร้าง/ค้นหา Segment + เงื่อนไข AND/OR + Audience Size (02-3) | 1.2.1, 1.2.2 | ✅ |
| Segment: Active/Inactive | 1.2.1 (status filter) | ✅ |
| **Segment: Clone** | Clone พบเฉพาะ Campaign (1.2.3.1) | ⚠️ Segment Clone ไม่ชัด |
| **Exclude Consent=No & Do-not-contact (02-3)** | มี Exclude Tag logic แต่ไม่ระบุ Consent/Do-not-contact | ⚠️/❌ |
| Export Raw Data by Campaign (02-3.4) | "data output raw data" (กล่าวรวม) | ⚠️ |
| Sync Audience FB/Google Ads (02-4) | 1.2.8 | ✅ |
| สร้าง Campaign + ช่องทาง + Schedule + Priority (02-5) | 1.2.3.3 | ✅ |
| Retarget (auto-tag เมื่อ click → segment) | 1.2.4.4 | ✅ |
| Message multi-channel + Personalization + Shortlink (02-6) | 1.2.3.3 + 1.2.4 | ✅ |
| **Message เป็น object แยก (CRUD/Clone/Active Message)** | รวมอยู่ใน Campaign builder | ⚠️ ไม่มีหน้าจอจัดการ Message แยก |
| **Preview ข้อความ (02-6)** | ไม่พบ | ❌ |
| SMS character/credit count | 1.2.3.3 / 1.2.6 | ✅ |
| ส่ง Line / SMS / Ocean Club App (02-8) | 1.2.5, 1.2.6, 1.2.7 | ✅ |
| Dedup ก่อนส่ง (ยึด CIS) | 1.2.5.1/1.2.6.1 (snapshot dedup) | ✅ |
| **Maker/Checker อนุมัติส่ง Campaign (02-7)** | มีสถานะ Pending Approve/Rejected แต่**ไม่มี task workflow อนุมัติ** | ⚠️ |
| Tracking Click + Unique Click (02-10) | 1.2.4 | ✅ |
| **Open tracking (เปิดอ่าน) — 02-10.2** | พบเฉพาะ Click ไม่พบ Open | ❌ |
| **Campaign Monthly Summary Report (Automail วันที่1 13:00) — 02-10** | ไม่พบ | ❌ |
| Export Raw Data by User (02-10) | กล่าวรวมใน reporting group | ⚠️ |

### Process 03 — Lead Management
| BRD Requirement | WBS Task | สถานะ |
|---|---|---|
| Import LC จาก OSSS (03-01) | 2.1.3, 2.1.5 | ✅ |
| ผลงานตัวแทน (Income) | 2.1.4 | ✅ |
| **เงื่อนไข ≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง** | ไม่ระบุ limit | ⚠️ |
| Lead จาก Website (auto, Corp Web) | 2.1.1 | ✅ |
| Lead manual (FB/Contact Center) ผ่าน public link/no VPN/mobile | 2.1.2 (+pentest) | ✅ |
| **Lead Import Excel/CSV (CRM Event) — 03-05.4** | ไม่พบ task import file | ❌ |
| Dedup Lead (ก่อนบันทึก) | 2.1.2.4 | ✅ |
| Online → ส่ง Digital Sale + Email (03-06/07) | 2.2.1.1.1-3 | ✅ |
| Auto Assign + Round Robin + tie-break (ไม่รวม PA) | 2.2.1.2.1.1 | ✅ |
| Lead Scoring Hot/Warm + SLA + reassign | 2.2.1.2.1.1.1 | ✅ |
| **Manual Assign Lead (03-09)** | **ไม่พบ task ชัดเจน** | ❌ |
| Notify New Lead via LC Connect (03-10) | 2.3.3.1.1 | ✅ |
| LC Connect: My Lead, list, search, detail, ปุ่มโทร, calendar (03-11) | 2.3.3.2.x | ✅ |
| แจ้งเตือนล่วงหน้า 1 ชม. ก่อนนัด | 2.3.2.1 | ✅ |
| SLA เกิน → ดึงคืน Re-assign (03-12) | 2.3.2.2 | ✅ |
| Auto Email การตลาด 9:00 (03-12.4) | 2.3.2.3 | ✅ |
| **ระงับ LC x วัน (5/10/15/20/ถาวร) — 03-12.3** | ไม่พบ task config ระงับ LC | ❌ |
| บันทึกผลการติดต่อ + แก้ไขเลขใบคำขอ/กธ (03-13) | 2.3.3.2.6 | ✅ |
| UW/UL Status lookup (พบ/พบบางส่วน/ไม่พบ) | 2.3.1.2/3/4 | ✅ |
| Auto Email HRA + CC การตลาด (กรณีซื้อ/ไม่พบเลข) | 2.3.2.4 | ✅ |
| Retention Lead 3 เดือน → ลบ (03-13.4) | 2.3.2.5 | ✅ |
| **กฎติดต่อ 3 ครั้ง → ปิดเคส (03-13)** | ไม่พบ task ระบุ logic 3 ครั้ง | ⚠️ |
| **วันติดตาม ≤7 วัน (03-13.3)** | ไม่ระบุ | ⚠️ |
| **Lead Daily Report Automail 9:00 + Export CSV/Excel (03-14)** | ไม่พบ (มีเฉพาะ SLA email 9:00) | ❌ |

---

## 3. สรุปรายการ Gap ที่ควรยืนยัน/เพิ่ม (เรียงตามความสำคัญ)

> **คอลัมน์ Lot** = Lot ที่ gap นั้นจะโผล่ (อิงจาก WBS code ที่เกี่ยวข้อง → `Release`). ถ้า gap ยังไม่มี task ใน WBS เลย จะอิง Lot ของ feature ที่มันต้องไปเกาะ

### 🔴 High — เป็น requirement สำคัญ/Compliance ที่ไม่พบใน WBS

| # | Gap | Lot | ทำไมถึง Lot นี้ |
|---|---|---|---|
| 1 | **Do not contact list** (นำเข้า + ใช้ exclude ตอนส่ง) — กระทบ Compliance/กฎหมาย หากส่งผิดมีผลร้ายแรง [BRD 01-0-4, 02-3, 02-8] | **1** และ **3** | ต้อง exclude ตั้งแต่ตอนสร้าง Segment (1.2.2 → Lot 1) **และ** ตอนส่งจริง (1.2.5–1.2.7 → Lot 3) |
| 2 | **Exclude Consent=No** ตอนสร้าง Segment/ส่ง Campaign — PDPA [BRD 02-3.2] | **1** | เงื่อนไขอยู่ที่ Segment builder (1.2.2) ซึ่งขึ้น Lot 1 |
| 3 | **Maker/Checker อนุมัติส่ง Campaign (02-7)** — มีแค่ "สถานะ" ยังไม่มี task กระบวนการอนุมัติจริง | **3** | ผูกกับ 1.2.3 Campaign Mgmt |
| 4 | **Manual Assign Lead (03-09)** — กรณีระบบ assign อัตโนมัติไม่ได้ ต้องมีหน้าจอให้การตลาด assign เอง | **2** | ผูกกับ 2.2.1 Core Lead Mgmt |
| 5 | **ระงับ LC x วัน (5/10/15/20/ถาวร) (03-12.3)** — เป็น Business Rule สำคัญ ไม่พบ config/task | **2** | ผูกกับ 2.3.2 Batch Process |

> 🚨 **ข้อ 1 และ 2 คือความเสี่ยงสูงสุดของโปรเจกต์ตอนนี้** — เป็น gap ระดับ Compliance/PDPA ที่ยังไม่มี task ใน WBS **แต่ตกอยู่ Lot 1 ซึ่ง Go Live เร็วที่สุด (19 ต.ค. 2026)**. ยิ่ง Lot 1 มี Sync Audience ไป FB/Google Ads (1.2.8) ด้วย แปลว่า**ข้อมูลลูกค้าที่ไม่ยินยอมอาจถูกส่งออกนอกองค์กรตั้งแต่ Lot แรก** ถ้าไม่มี exclude logic → ต้อง escalate ให้ PM/BA ยืนยันก่อน lock scope Lot 1

### 🟠 Medium — feature ที่ระบุใน BRD แต่ไม่พบใน WBS

| # | Gap | Lot |
|---|---|---|
| 6 | **Open tracking (เปิดอ่าน) (02-10.2)** — WBS มีแค่ Click tracking; Open (โดยเฉพาะ Email open) หาย | **3** (1.2.4) |
| 7 | **Campaign Monthly Summary Report (Automail วันที่1 13:00) (02-10)** — ไม่พบ | **3** (1.2.4) |
| 8 | **Lead Daily Report Automail 9:00 + Export CSV/Excel (03-14)** — ไม่พบ | **2** (2.3.2) |
| 9 | **Lead Import Excel/CSV (CRM Event) (03-05.4)** — ไม่พบ task รองรับ import file | **2** (2.1) |
| 10 | **Message เป็น object แยก** (สร้าง/แก้/Clone/Active-Inactive/Preview Message) (02-6) — WBS รวมไว้ใน Campaign builder | **3** (1.2.3) |
| 11 | **Preview ข้อความ (02-6)** — ไม่พบ | **3** (1.2.3) |
| 12 | **กฎติดต่อ 3 ครั้ง → ปิดเคส (03-13)** — ไม่พบ logic ชัด | **2** (2.3.3) |

### 🟡 Low — รายละเอียด/เงื่อนไขที่ควรระบุให้ชัด

| # | Gap | Lot |
|---|---|---|
| 13 | Automail แจ้งผลดึงข้อมูล **เวลา 08:00 / 09:00** (01-4) — มี email แต่ไม่ระบุเวลา | **1** และ **3** (1.1.x คร่อม 2 Lot) |
| 14 | **Popup Validation ไฟล์** (csv≤5MB, column ผิด, ซ้ำ) (01-7) — ไม่มี task เฉพาะ | **3** (1.1.8 upload) |
| 15 | **Segment Clone** (02-3) — Clone พบเฉพาะ Campaign | **1** (1.2.2) |
| 16 | **Contact Center** (แยกจาก FB Inbox) — 1.1.4 พูดเฉพาะ FB Inbox | **3** (1.1.4) |
| 17 | **Limit ≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง** (03-01) — ไม่ระบุ | **2** (2.1.5) |
| 18 | **วันติดตาม ≤7 วัน** (03-13.3) — ไม่ระบุ | **2** (2.3.3) |
| 19 | **Export Raw Data by Campaign/User** (02-3.4, 02-10) — กล่าวรวม ไม่มี task ชัด | **1** (Segment export) และ **3** (Campaign export) |

### สรุป Gap ต่อ Lot

| Lot | High | Medium | Low | รวม | หมายเหตุ |
|---|---|---|---|---|---|
| **Lot 1** (19 ต.ค. 2026) | 2 (#1, #2) | 0 | 3 (#13, #15, #19) | **5** | น้อยที่สุด **แต่ 2 ข้อ High เป็น PDPA/Compliance และ Go Live เร็วที่สุด** |
| **Lot 2** (1 ธ.ค. 2026) | 2 (#4, #5) | 3 (#8, #9, #12) | 2 (#17, #18) | **7** | gap กระจายทั่ว แต่ไม่มีตัวไหน block compliance |
| **Lot 3** (6 พ.ค. 2027) | 2 (#1, #3) | 4 (#6, #7, #10, #11) | 4 (#13, #14, #16, #19) | **10** | มากที่สุด แต่มีเวลาแก้นานที่สุด (~10 เดือน) |

> หมายเหตุ: #1, #13, #19 ถูกนับใน 2 Lot เพราะ requirement เดียวกันแตะทั้ง Segment (Lot 1) และ Campaign send (Lot 3) → ผลรวมข้าม Lot จึงมากกว่า 19 ข้อ

---

## 4. สิ่งที่ WBS เพิ่มเติม "นอกเหนือ" BRD (ข้อดี — ครอบคลุมกว่า)
- 🔐 **Hash เลขบัตร ปชช. SHA-256** สำหรับ Staff (1.1.9) — security เพิ่ม
- 🔐 **Penetration Test** สำหรับ public web link (2.1.2) + Re-Pentest criteria
- 🏷️ **Tag System ขั้นสูง** — auto-tag, tag expiry 30 วัน, System/Manual/Campaign Tag (1.2.2.2)
- 🗄️ **DB Design / Duct (Landing) Table / ESB Polling** ครบทุก source
- 🧹 **House Keeping** (รายเดือน/รายปี) — ลบข้อมูล inactive ทั้งหมด
- 📊 **Monitoring & Support, Data Pipeline Monitor, Error Management** (1.1.10)
- ⚙️ **Impact EDW & IFRS17** ระบุไว้ (สำคัญสำหรับ regression)

---

## 5. ข้อสรุป & ข้อเสนอแนะ

**ครบถ้วนหรือไม่?** — โครงสร้างหลัก (Data Ingestion, Segment, Campaign, ช่องทางส่ง, Lead Assign, LC Connect, SLA) **ครอบคลุมดีมาก** แต่ยังมี **~12 จุดสำคัญ (High/Medium)** ที่ไม่พบใน WBS ซึ่งอาจเป็นเพราะ (ก) ถูกรวมในงานก้อนใหญ่แบบไม่ระบุชื่อ หรือ (ข) ตกหล่นจริง

**ลำดับความเร่งด่วนเปลี่ยนไปหลังแบ่ง 3 Lot** — เดิมมองว่า 5 gap High เร่งเท่ากันหมด แต่เมื่อ map เข้า Lot แล้วจะเห็นว่า:

1. **เร่งที่สุด — ต้องเคลียร์ก่อน lock scope Lot 1 (Go Live 19 ต.ค. 2026):** Do-not-contact list (#1) + Exclude Consent=No (#2). ทั้งคู่เป็น Compliance/PDPA ที่ยังไม่มี task ใน WBS และ Lot 1 มี Sync Audience ไป FB/Google Ads → **มีความเสี่ยงส่งข้อมูลลูกค้าที่ไม่ยินยอมออกนอกองค์กรตั้งแต่ Lot แรก**
2. **รองลงมา — Lot 2 (Go Live 1 ธ.ค. 2026):** Manual Assign Lead (#4) + ระงับ LC x วัน (#5)
3. **มีเวลาหายใจ — Lot 3 (Go Live 6 พ.ค. 2027):** Maker/Checker อนุมัติส่ง Campaign (#3) + gap Medium อีก 4 ข้อ

**ประเด็นเชิงโครงสร้างที่ควรถามทีม:** Lot 1 ส่งมอบ Segment โดยที่ยังส่ง Campaign ไม่ได้ (1.2.3–1.2.7 อยู่ Lot 3) — ต้องยืนยันว่า **business value ของ Lot 1 คือการ sync audience ไป FB/Google Ads เท่านั้น** ใช่หรือไม่ ถ้าใช่ การทดสอบ Lot 1 ต้อง verify Segment ผ่านปลายทาง Ads / export raw data แทนการส่งจริง

> หมายเหตุ: WBS เป็นเอกสาร **"In Progress"** — รายการ Medium/Low บางส่วนอาจซ่อนอยู่ในงานก้อนใหญ่ (เช่น "Core Marketing Campaign Management") ควรใช้ตารางข้อ 2-3 เป็น checklist คุยกับ BA/SA/PM เพื่อ tick ยืนยันทีละข้อ

---
*จัดทำโดยเทียบ BRD_V0.1 (42 หน้า) กับ WBS v1.0 (`.xlsx` export 2026-07-15) — ใช้คู่กับ `BRD_Summary_Workflow.md` และ `MCMP_QA_Task_Assignment.md`*
*Lot mapping มาจากคอลัมน์ `Release` (แท็บ Development Effort) + วัน Go Live (แท็บ Project Timeline_New22.06.69)*

# MCMP — สรุปกระบวนการเพื่อคุย Checkpoint ก่อนเริ่มพัฒนา

> **Project:** 20240278 — Marketing Campaign Management Platform (MCMP / "New System")
> **Owner:** ฝ่ายการตลาด — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)
> **เอกสารต้นทาง:** BRD v0.1 (42 หน้า) · WBS/Development Effort v1.0 (5 หน้า, In Progress) · GrowthAi Slides (74 หน้า)
> **วัตถุประสงค์เอกสารนี้:** ใช้เป็น agenda เปิดประชุม checkpoint กับ BA/SA/PM/Dev/QA — สรุป "ระบบทำอะไร / สถาปัตยกรรม / business rule สำคัญ / ของที่ยังไม่ปิด" ในหน้าเดียว ก่อนลงมือพัฒนา

---

## 1. ระบบนี้ทำอะไร (1 ย่อหน้า)

MCMP คือ **แพลตฟอร์มกลางการตลาด** ที่ (1) ดึงข้อมูลลูกค้าจากหลายระบบต้นทางมารวมเป็น Single View → (2) สร้าง **Customer Segment** (รวม RFM/CLV/Health Score) → (3) สร้างและส่ง **Campaign หลายช่องทาง** (SMS / Email / LINE Ocean Connect / Ocean Club App) ผ่านการอนุมัติ Maker/Checker → (4) **Sync Audience** ไป Facebook/Google Ads → (5) บริหาร **Lead** ตั้งแต่รับเข้า → แจกตัวแทน (LC) ภายใน SLA 24 ชม. → ติดตามผล → รายงาน

**3 กระบวนการหลัก:** `01 Data Ingestion` · `02 Campaign Setting & Send` · `03 Lead Management`

---

## 2. สถาปัตยกรรม / ระบบที่เกี่ยวข้อง

```
[ ต้นทาง ]                  [ Data Platform ]            [ MCMP ]                 [ ปลายทาง ]
CIS/OLI ─┐                                                                        ┌─ ลูกค้า (SMS/Email/
AS400    │                  DW → S3 → AWS Glue/Athena    01 Ingestion            │   LINE/Ocean Club)
LineOA   ├─ Update/Insert ─► (gluedb_prod_lakecurated) ─► 02 Campaign  ──────────┤─ FB/Google Ads (ESB/API)
GA4      │                  → QuickSight (RFM/Dashboard)  03 Lead                 │─ LC Connect (ตัวแทน)
OSSS     │                                                                        └─ Digital Sale
NBS      │                  Vendor: GrowthAi (Ocean Club + marketing-automation)
Web/HR ──┘                  Vendor: Infobip (SMS + shorten link)
```

| ชั้น | ระบบ |
|---|---|
| ต้นทางข้อมูล | CIS, AS/400, LineOA, OSSS (Agent), NBS (Contact Center/FB Inbox), GA4, HR |
| Data Platform | DW, S3, AWS Glue/Athena, QuickSight |
| Vendor | **GrowthAi** (Ocean Club App + marketing-automation tool), **Infobip** (SMS/Shortlink) |
| ปลายทาง | Facebook Ads, Google Ads, LC Connect, Digital Sale |
| ช่องทางส่ง | SMS · Email · LINE Ocean Connect · Ocean Club App |

> **Single Source of Truth:** เจอข้อมูลซ้ำหลายแหล่ง → ยึด **เบอร์/อีเมลจาก CIS** เป็นหลัก

---

## 3. กระบวนการหลัก (ระดับ Checkpoint)

### Process 01 — Data Ingestion
- ดึง/อัปเดต (Update-Insert ไม่ซ้ำ) เข้าระบบกลาง แบบ **Daily 23:00** และ **Realtime** ตามแหล่ง
- ตรวจ error → สำเร็จเก็บลงกลาง · ทุกกรณีส่ง **Automail แจ้งผล 08:00** · ไม่พบไฟล์ใน Path → **Automail 09:00**
- มี sub-process **Upload Campaign/Activity (Manual)** + **Maker/Checker อนุมัติ** ก่อนบันทึก

| แหล่ง | ต้นทาง | ความถี่ |
|---|---|---|
| Customer | CIS/OLI | Daily |
| Policy | AS/400 | Daily |
| LINE Ocean Connect | LineOA | Daily |
| Campaign & Activity | Upload UI (Manual+อนุมัติ) | Weekly |
| Contact Center / FB Inbox | NBS | Realtime |
| Ocean Club App | GrowthAi (วางไฟล์ใน Path) | Daily |
| UTM Behavior | GA4 | ตามกำหนด |
| Agent | OSSS | Daily/Near-RT |
| RFM Model | S3/Actuary | Manual |
| Lead | Web Corp. | Realtime |
| Staff | HR Upload (+hash SHA-256) | Manual |

### Process 02 — Campaign Setting & Send
1. วิเคราะห์ + Dashboard/Segment บน **QuickSight** → ดึง Customer+RFM เข้า MCMP (Manual)
2. สร้าง **Segment** (Filter AND/OR, Active/Inactive, Clone, Export, **exclude Consent=No & Do-not-contact**)
3. **Manual Sync Audience** → FB/Google Ads (Customer Match)
4. สร้าง **Campaign** (เลือก Segment, ช่องทาง, ตั้งเวลา 3 แบบ, Tag, Retarget, แสดง Sent/Open/Click)
5. สร้าง **Message** แยกช่องทาง (Personalization, Shorten Link via Infobip, Preview)
6. **Maker/Checker อนุมัติส่ง** → ระบบส่งตามเวลา (ยึดเบอร์/อีเมลจาก CIS) → ลูกค้าได้รับ
7. เก็บผล Open/Click/Unique → **Automail Monthly Summary** (วันที่ 1 ของเดือนถัดไป 13:00)

### Process 03 — Lead Management
1. Import **LC จาก OSSS** (≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง, อัปเดตอัตโนมัติ)
2. บันทึก **Lead** จาก: Website (auto) · Facebook (manual) · Contact Center (manual, ผ่าน VPN/VDI ถ้า WFH) · CRM Event (Import Excel/CSV) — มีตรวจ Lead ซ้ำ
3. ซื้อ **Online** → ส่ง Digital Sale (Google Sheet + Email, Realtime) / ซื้อผ่าน **ตัวแทน** → เข้าเกณฑ์ Assign
4. **Auto Assign** (Near-RT): จังหวัดตรง → ผลงานทุกงวด → ผลงานบางงวด → Round Robin + **Lead Scoring** (มีเวลานัด=Hot / ไม่มี=Warm)
5. **Manual Assign** กรณีระบบเลือกไม่ได้ → แจ้ง New Lead ผ่าน **LC Connect** → LC ติดต่อ
6. **SLA 24 ชม.** (Hot นับจากเวลานัด / Warm นับจากเวลา assign ช่วง 9–18) → เกิน = ดึงคืน Re-assign + **ระงับ LC (5/10/15/20 วัน/ถาวร)** + Email การตลาด 09:00
7. บันทึกผลการติดต่อ (ติดต่อสูงสุด 3 ครั้ง → ปิดเคส; Lead ปิดไม่ได้เก็บ 3 เดือน → ลบอัตโนมัติ) → **Automail Daily Report 09:00** + Export

---

## 4. Business Rules ที่ต้องตอกย้ำในที่ประชุม

| # | Rule | กระทบ |
|---|---|---|
| BR-1 | ยึดเบอร์/อีเมลจาก **CIS** เป็นหลัก เมื่อข้อมูลซ้ำ | Dedup ทุก channel |
| BR-2 | **Exclude Consent=No + Do-not-contact list** ก่อนส่ง | **PDPA / Compliance** |
| BR-3 | **Maker/Checker** ทั้งการ import (01-0-4) และการส่ง campaign (02-7) | Governance |
| BR-4 | **SLA Lead 24 ชม.** เกิน → ดึงคืน + **ระงับ LC** | ผลงานตัวแทน |
| BR-5 | **Lead Scoring** Hot (มีเวลานัด) / Warm (ไม่มี) | คิว Assign |
| BR-6 | **Data Retention** Lead ปิดไม่ได้ 3 เดือน → ลบ | Storage/PDPA |
| BR-7 | Segmentation: RFM (11 กลุ่ม), CLV (6), Customer Segment (6), Age, Health Score, CLV≥ตัวเลข | Data model |

---

## 5. ⭐ ประเด็นสำคัญที่สุด — GrowthAi เปลี่ยนภาพ Campaign

จากสไลด์ GrowthAi (74 หน้า) พบว่า **GrowthAi คือเครื่องมือ marketing-automation จริง** ที่จะใช้ทำงาน — และ **Campaign ไม่ใช่โมเดล "สร้าง campaign + เลือกช่องทาง"** แบบที่ BRD/WBS ทำให้เข้าใจตอนแรก แต่เป็น **Visual Flow Builder**:

```
[Segment/Contact source] → [Decision node] → [Condition node (ตาม tag)] → [Action]
                                yes/no            branch                  ├─ Send email (drag-drop builder)
                                                                          ├─ Send text message
                                                                          ├─ Mobile app push
                                                                          ├─ Send webhook
                                                                          └─ per-step delay/schedule
```

**Tracking ที่ GrowthAi กำหนดตายตัวต่อ campaign:** Total User · Total Send · Total Credit · Total Fail · Total Click · Unique Click (+ drill-down รายคน)

➡️ **ผลกระทบ:** scope ทดสอบ/พัฒนา Campaign หนักกว่าที่ WBS ประเมิน (1.2.3 = 12 MD) เพราะมี combinatorial path ของ flow

---

## 6. 🔴 สิ่งที่ต้อง "ปิด" ก่อน/ระหว่างเริ่มพัฒนา

### 6.1 Gap ระดับ High — อยู่ใน BRD แต่ **ไม่พบใน WBS v1.0** (ต้องยืนยันว่าใครทำ + เพิ่ม effort)
1. **Do-not-contact list** (import + ใช้ exclude ตอนส่ง) — Compliance
2. **Exclude Consent=No** ตอนสร้าง Segment/ส่ง — PDPA
3. **Maker/Checker workflow อนุมัติส่ง Campaign** — มีแค่ "สถานะ" ยังไม่มี task กระบวนการจริง
4. **Manual Assign Lead** — กรณี auto assign ไม่ได้
5. **ระงับ LC x วัน (5/10/15/20/ถาวร)** — ยังไม่พบ config/task

> ทั้ง 5 ข้อเป็น core business rule/compliance → ถ้าเพิ่ม scope ควรเป็นงาน **QA1 (Senior)** และขอ effort เพิ่ม ~5–8 MD

### 6.2 Gap ระดับ Medium (feature ใน BRD ไม่พบใน WBS)
- Open tracking (เปิดอ่าน email) · Campaign Monthly Report · Lead Daily Report · Lead Import Excel/CSV · Message เป็น object แยก (CRUD/Clone/Preview)

### 6.3 ❓ คำถาม clarify จาก GrowthAi (ต้องตอบก่อน finalize scope)
1. **GrowthAi เป็น COTS/SaaS หรือ custom build?** — กระทบทั้งกลยุทธ์ (config testing vs functional) และ effort (**+4 MD ถ้า config / +6–8 MD ถ้า custom**)
2. **Decision vs Condition node** ต่างกันเชิง business อย่างไร
3. **Send webhook** ยิงไประบบไหน (MCMP internal / LC Connect / UW?) — ยังไม่อยู่ใน BRD
4. **Total Credit / Total Fail** สูตรตรงกับ Infobip billing หรือไม่ (reconciliation)
5. **Channel-presence filter** ("เป็น Ocean Connect แล้ว/ยัง") field มาจาก source ใด refresh บ่อยแค่ไหน
6. **LINE Ocean Connect หายจาก GrowthAi actions** (มี email/text/app/webhook) — LINE ส่งผ่าน action ใด

---

## 7. ขอบเขต Effort (จาก WBS v1.0)

| Part | MD |
|---|---|
| **Total** | **451.70** (BA 2.0 / SA 140.25 / Dev 211.45 / QA 98.0) |
| 1. Marketing Campaign Mgmt | 313.45 |
| 2. Lead Management | 127.75 |
| 3. อื่นๆ (Meeting/Risk/Housekeeping) | 10.50 |

- **QA แบ่งงาน (เลขทางการ):** baseline **98.0 MD** + GrowthAi **+4.0** = **≈ 102.0 MD** — แบ่ง QA1 Senior (core logic + GrowthAi) · QA2 Junior (ingestion + UI screens) · 8 paired workflow chains
  - *หมายเหตุ ±1 MD:* ผลรวมรายการแตกละเอียด QA1 63.75 + QA2 39.25 = 103.0 สูงกว่าเลขทางการ 1 MD (slack จากช่อง "Other" ที่ยังไม่จัดสรรเต็ม) → รายงานใช้ **102.0**
- WBS เพิ่มของดีนอก BRD: Hash SHA-256, Penetration Test, Tag System ขั้นสูง, House Keeping, Monitoring, Impact EDW/IFRS17

---

## 8. Agenda ที่เสนอสำหรับ Checkpoint Meeting

1. ยืนยันภาพรวม 3 process + สถาปัตยกรรม (ข้อ 2–3) — ตรงกับที่ทีม dev เข้าใจไหม
2. ล็อก Business Rules (ข้อ 4) — โดยเฉพาะ **BR-2 PDPA** และ **BR-3 Maker/Checker**
3. **ตัดสินใจเรื่อง GrowthAi (ข้อ 5 + คำถาม 6.3)** — COTS หรือ custom? นี่คือ blocker ใหญ่สุดของการประเมิน scope
4. ไล่ปิด **5 Gap High (ข้อ 6.1)** — ใครรับผิดชอบ + เพิ่ม MD เท่าไร
5. สรุป effort ที่ revise แล้ว + ลำดับ sprint/priority

---
*สรุปจาก BRD v0.1 + WBS v1.0 + GrowthAi Slides — ใช้คู่กับ `BRD_Summary_Workflow.md`, `MCMP_BRD_vs_WBS_Crosscheck.md`, `MCMP_GrowthAi_Gap_and_TestCases.md`, `MCMP_QA_Task_Assignment.md`*

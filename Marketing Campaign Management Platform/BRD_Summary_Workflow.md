# สรุป BRD & Workflow — Marketing Campaign Management Platform (MCMP)

> **Project Code:** 20240278 | **Document:** Business Requirement Document & Workflow **v0.1** (07/05/2569)
> **Owner:** ฝ่ายการตลาด — บมจ. ไทยสมุทรประกันชีวิต (Ocean Life Insurance)
> **ผู้จัดทำ:** ชลลัดดา เจียรธีรวิทย์ | **BA:** ภิรญา (piraya.ph)

---

## 1. ภาพรวมโครงการ (Project Overview)

ระบบ **MCMP (Marketing Campaign Management Platform / "New System")** คือแพลตฟอร์มกลางของฝ่ายการตลาด เพื่อ:

1. **รวบรวมข้อมูลลูกค้า** จากหลายแหล่งต้นทางให้เป็น Single View
2. **สร้าง Customer Segment** และทำการตลาดแบบเจาะกลุ่ม (รวม RFM / CLV Model)
3. **สร้างและส่ง Campaign** หลายช่องทาง (SMS / Email / Line Ocean Connect / Ocean Club App)
4. **เชื่อมต่อโฆษณาออนไลน์** (Facebook Ads / Google Ads) แบบ Customer Match / Lookalike
5. **บริหารจัดการ Lead** ตั้งแต่รับเข้า → แจกตัวแทน (LC) → ติดตามผล → รายงาน

### โครงสร้างเอกสาร (42 หน้า)
| ส่วน | เนื้อหา |
|------|---------|
| หน้า 1–4 | Sign-off, Distribution List, Version History, วัตถุประสงค์ BRD |
| หน้า 5–20 | **BA Comment** — 105 ประเด็น (Close 100, Recheck 5) |
| หน้า 22–27 | **Functional Requirement** — Process 01, 02, 03 |
| หน้า 28–30 | **Field สำหรับ Filter / Segment** (Customer, Policy, Ocean Connect, Ocean Club, RFM) |
| หน้า 31 | **Static-Rule Campaign & Automated Audience Sync** (สถาปัตยกรรม Quick Win) |
| หน้า 32–34 | รายการ Campaign + Template/ตัวอย่าง + Data Dictionary (BZB) |
| หน้า 35–40 | Technical Info — SQL (Athena/Glue), FB/Google Ads API, Master tables |

---

## 2. กระบวนการหลัก 3 กระบวนการ (Core Processes)

### Process 01 — กระบวนการดึงข้อมูลจากแหล่งต้นทาง (Data Ingestion)
ดึง/อัปเดตข้อมูลเข้าระบบส่วนกลาง (Update/Insert) แบบ Daily (23.00 น.) และ Realtime

| แหล่งข้อมูล | ระบบต้นทาง | ความถี่ |
|---|---|---|
| Customer | CIS / OLI Database | Daily |
| Policy (กรมธรรม์) | AS/400 | Daily |
| Line Ocean Connect | LineOA / Marketing Backoffice | Daily |
| Campaign & Activity | Upload UI / Path (Manual + อนุมัติ) | Weekly |
| Contact Center / FB Inbox | NBS (Case Management) | Realtime |
| Ocean Club App | Vendor (GrowthAI) วางไฟล์ใน Path | Daily |
| UTM Behavior | Google Analytics 4 | ตามกำหนด |
| ตัวแทน (Agent) | OSSS | Daily / Near-realtime |
| RFM Model | Data Platform (S3) / Actuary | Manual |
| Lead | Web Crop. (Code Plan/API) | Realtime |
| Staff | HR Upload | Manual |

- มีการตรวจ error → ถ้าสำเร็จเก็บลงระบบกลาง, ทุกกรณีส่ง **Automail แจ้งผล (08.00 น.)**
- กรณีไม่พบไฟล์ใน Path → Automail แจ้งฝ่ายที่เกี่ยวข้อง (09.00 น.)
- **Sub-process 01-0-(4):** Upload Campaign/Activity → ผู้บริหารตรวจสอบ → อนุมัติ/ไม่อนุมัติ → บันทึก + แจ้ง Email

### Process 02 — Setting และส่ง Campaign
1. **02-1** คณิตศาสตร์วิเคราะห์ + ทำ Dashboard/Segment บน **QuickSight**
2. **02-2** ดึง Customer + RFM จาก Dashboard เข้า MCMP (Manual)
3. **02-3** สร้าง **Customer Segment** + เงื่อนไข Filter (Create/Edit/Clone/Active-Inactive, Export Raw Data, exclude Consent No & Do-not-contact)
4. **02-4** Manual ส่ง Audience ไป **Facebook Ads / Google Ads** (Customer Match via API)
5. **02-5** สร้าง **Campaign** (เลือก Segment, ช่องทาง SMS/Email/Line/App, Message, ตั้งเวลาส่ง 3 แบบ, Tag, Retarget, แสดงผล Sent/Open/Click)
6. **02-6** สร้าง **Message** แยกตามช่องทาง (ตัวแปรเฉพาะบุคคล, Shorten Link ด้วย Infobip, Preview)
7. **02-7** **กระบวนการอนุมัติ (Maker/Checker)** → 02-7-1 สร้าง+ผูก Segment, 02-7-2 Approver อนุมัติ/ไม่อนุมัติ
8. **02-8** ระบบส่ง Campaign ตามเวลา (ยึดเบอร์/อีเมลจาก CIS เป็นหลัก)
9. **02-9** ลูกค้าได้รับ Campaign
10. **02-10** เก็บผล + Action (Open/Click/Unique) → **Automail Monthly Summary** (วันที่ 1 ของเดือนถัดไป 13.00 น.)

### Process 03 — กระบวนการบริหารจัดการ Lead (Lead Management)
1. **03-01** นำเข้ารายชื่อ **LC จาก OSSS** (เลือกได้ ≤10 รายชื่อ/จังหวัด, ≤10 จังหวัด/ครั้ง, อัปเดตอัตโนมัติ)
2. **03-02/03/04** ตรวจ error → Popup / จัดเก็บ
3. **03-05** บันทึก **Lead** จากช่องทาง: Website (auto), Facebook (manual), Contact Center (manual, ต้องผ่าน VPN/VDI กรณี WFH), CRM Event (Import Excel/CSV) — มีตรวจ Lead ซ้ำ
4. **03-06** ลูกค้าซื้อผ่านช่องทางใด → **Online** ไป 03-07 (ส่งให้ Digital Sale ทาง Google Sheet + Email) / **ตัวแทน** ไปเข้าเงื่อนไข Assign
5. **03-07** ส่ง Email แจ้ง Digital Sale (Realtime)
6. **03-08** เกณฑ์ **Auto Assign** (Near-realtime): จังหวัดตรงกัน → ผลงานทุกงวด → ผลงานบางงวด → หมุนเวียนตามคิว (Round Robin); ทำ **Lead Scoring** (มีช่วงเวลาติดต่อ = Hot / ไม่มี = Warm)
7. **03-09** **Manual Assign** กรณีระบบเลือกไม่ได้
8. **03-10** แจ้งเตือน New Lead ไปยัง LC ผ่าน **LC Connect**
9. **03-11** LC ติดต่อลูกค้า (เมนู My Lead, กดโทรออก, ดู Lead Detail)
10. **03-12** **SLA 24 ชม.** (Hot นับจากเวลานัด / Warm นับจากเวลา Assign ในช่วง 9–18 น.) → ไม่ติดต่อ = ดึง Lead คืน Re-assign + ระงับ LC (5/10/15/20 วัน หรือถาวร) + Email แจ้งการตลาด (09.00 น.)
11. **03-13** **บันทึกผลการติดต่อ** (Contact Result): ติดต่อได้ [ขอตัดสินใจก่อน/ไม่ซื้อ/ซื้อ-เช็คสถานะใน UW], ติดต่อไม่ได้ — ติดต่อสูงสุด 3 ครั้ง → ปิดเคส; Lead ปิดการขายไม่ได้เก็บ 3 เดือนแล้วลบอัตโนมัติ
12. **03-14** **รายงาน** — Automail Daily Report (09.00 น.), Export CSV/Excel ทำ Dashboard

---

## 3. Workflow Diagrams

### 3.1 ภาพรวมระบบ (System Context)

```mermaid
flowchart LR
    subgraph SRC["แหล่งข้อมูลต้นทาง"]
        CIS[(CIS / DW)]
        AS400[(AS/400)]
        LINEOA[(LineOA)]
        GA4[(GA4 / UTM)]
        OSSS[(OSSS - Agent)]
        NBS[(NBS / Contact Center)]
        VENDOR[(GrowthAI - Ocean Club)]
        WEB[(Web Crop. - Lead)]
        S3[(S3 / RFM Actuary)]
    end

    SRC ==>|Update/Insert| MCMP

    subgraph MCMP["MCMP — New System (แพลตฟอร์มกลาง)"]
        P1[01 Data Ingestion]
        P2[02 Campaign Setting & Send]
        P3[03 Lead Management]
        P1 --> P2
        P1 --> P3
    end

    MCMP -->|Audience Sync API| ADS[Facebook Ads / Google Ads]
    MCMP -->|SMS / Email / Line / App| CUST[ลูกค้า]
    MCMP -->|New Lead Noti| LC[LC Connect - ตัวแทน]
    MCMP -->|Online Lead| DS[Digital Sale]
```

### 3.2 Process 01 — Data Ingestion

```mermaid
flowchart TD
    A[Source Systems: CIS, AS400, LineOA, GA4,<br/>OSSS, NBS, Vendor, Web, S3, HR] --> B{01-1 Update/Insert<br/>เข้าระบบ MCMP}
    B --> C{01-2 พบข้อผิดพลาด?}
    C -->|ไม่พบ| D[01-3 จัดเก็บข้อมูลลงระบบส่วนกลาง]
    C -->|พบ / ทุกกรณี| E[01-4 Automail แจ้งผล<br/>สำเร็จ-ไม่สำเร็จ 08.00 น.]
    D --> E

    subgraph UP["Upload Campaign & Activity (Manual)"]
        F[01-5 Upload ไฟล์ผ่าน UI<br/>csv ≤5MB Weekly] --> G{01-6 พบข้อผิดพลาด?}
        G -->|ไม่พบ| D
        G -->|พบ| H[01-7 แสดง Popup แจ้งเตือน]
    end

    subgraph APV["01-0-(4) ตรวจสอบ/อนุมัติ"]
        I[01-0-4-1 Upload] --> J[01-0-4-2 ผู้บริหารตรวจสอบ]
        J --> K{01-0-4-3 อนุมัติ?}
        K -->|Approve| L[01-0-4-4 บันทึกข้อมูล]
        K -->|Reject| M[01-0-4-5 Email แจ้งผล + เหตุผล]
        L --> M
    end
```

### 3.3 Process 02 — Campaign Setting & Send

```mermaid
flowchart TD
    S1[02-1 คณิตศาสตร์วิเคราะห์<br/>+ Dashboard/Segment บน QuickSight] --> S2[02-2 ดึง Customer + RFM<br/>เข้า MCMP - Manual]
    S2 --> S3[02-3 สร้าง Customer Segment<br/>+ เงื่อนไข Filter]
    S3 --> S4[02-4 Manual ส่ง Audience<br/>ไป Facebook / Google Ads]
    S3 --> S5[02-5 สร้าง Campaign<br/>เลือก Segment / ช่องทาง / เวลา / Tag]
    S5 --> S6[02-6 สร้าง Message<br/>แยกตามช่องทาง + Shorten Link]
    S6 --> M1[02-7-1 Maker สร้าง + ผูก Segment]
    M1 --> M2{02-7-2 Approver อนุมัติ?}
    M2 -->|Reject| X[ไม่ส่ง Campaign]
    M2 -->|Approve| S8[02-8 ระบบส่ง Campaign<br/>ตามช่องทาง/เวลา]
    S8 --> S9[02-9 ลูกค้าได้รับ Campaign]
    S9 --> S10[02-10 เก็บผล Sent/Open/Click<br/>+ Automail Monthly Report]
```

### 3.4 Process 03 — Lead Management

```mermaid
flowchart TD
    L1[03-01 นำเข้ารายชื่อ LC จาก OSSS] --> L2{03-02 พบข้อผิดพลาด?}
    L2 -->|พบ| L3[03-03 Popup แจ้งเตือน]
    L2 -->|ไม่พบ| L4[03-04 จัดเก็บข้อมูล LC]
    L4 --> L5[03-05 บันทึก Lead จากช่องทาง<br/>Website / Facebook / Contact Center / CRM]
    L5 --> L6{03-06 ซื้อผ่านตัวแทน?}
    L6 -->|Online| L7[03-07 ส่ง Email + Google Sheet<br/>ให้ Digital Sale - Realtime]
    L6 -->|ตัวแทน| L8{03-08 ผ่านเกณฑ์ Auto Assign?<br/>จังหวัด - ผลงาน - คิว}
    L8 -->|พบ candidate เดียว/ตามคิว| L10
    L8 -->|>1 หรือไม่พบ| L9[03-09 Manual Assign โดยการตลาด]
    L9 --> L10[03-10 แจ้งเตือน New Lead<br/>ไปยัง LC ผ่าน LC Connect]
    L10 --> L11[03-11 LC ติดต่อลูกค้า]
    L11 --> L12{03-12 ติดต่อภายใน SLA 24 ชม.?}
    L12 -->|เกิน SLA| L12b[ดึง Lead คืน Re-Assign<br/>+ ระงับ LC + Email การตลาด]
    L12b --> L8
    L12 -->|ภายใน SLA| L13[03-13 บันทึกผลการติดต่อ]
    L13 --> R1{ผลการติดต่อ}
    R1 -->|ติดต่อได้: ซื้อ| L14
    R1 -->|ติดต่อได้: ขอคิด/ไม่ซื้อ| L13b[นัดติดตาม Calendar<br/>≤3 ครั้ง แล้วปิดเคส]
    R1 -->|ติดต่อไม่ได้| L13b
    L13b --> L14[03-14 รายงาน Lead<br/>Automail Daily 09.00 + Export CSV/Excel]
```

---

## 4. ประเด็นสำคัญ / Business Rules ที่ควรรู้

- **Single Source of Truth:** กรณีพบข้อมูลลูกค้าหลายแหล่ง ให้ยึด **เบอร์โทร/อีเมลจาก CIS** เป็นหลัก
- **Consent & Do-not-contact:** ต้อง exclude ลูกค้า Consent = No และเบอร์ที่อยู่ใน Do-not-contact list (กรองตอน Setup Segment)
- **Maker/Checker:** ทั้งการนำเข้า Campaign/Activity (01-0-4) และการส่ง Campaign (02-7) ต้องผ่านการอนุมัติ
- **SLA Lead:** ติดต่อภายใน 24 ชม. — ไม่ติดต่อ = ดึงคืน + ระงับการรับ Lead (เลือก 5/10/15/20 วัน หรือถาวร)
- **Lead Scoring:** มีช่วงเวลาให้ติดต่อ = Hot Lead / ไม่มี = Warm Lead
- **Data Retention:** Lead ปิดการขายไม่ได้ เก็บ 3 เดือน แล้วลบอัตโนมัติ
- **Segmentation Model:** รองรับ RFM Group (11 กลุ่ม), CLV Group (6 ระดับ), Customer Segment (6 กลุ่ม), Age Group
- **Quick Win (หน้า 31):** Static-Rule Campaign — Actuary → S3 → QuickSight → ESB API → FB/Google Ads (เน้น campaign เงื่อนไข static)

---

## 5. ระบบ/เทคโนโลยีที่เกี่ยวข้อง (Systems Involved)

| ประเภท | ระบบ |
|---|---|
| ต้นทางข้อมูล | CIS, AS/400, LineOA, OSSS, NBS, GA4, HR |
| Data Platform | DW, S3, AWS Glue/Athena (gluedb_prod_lakecurated), QuickSight |
| Vendor | GrowthAI (Ocean Club App), Infobip (SMS/Shortlink) |
| ปลายทาง | Facebook Ads, Google Ads (ผ่าน ESB/API), LC Connect, Digital Sale |
| ช่องทางส่ง | SMS, Email, Line Ocean Connect, Ocean Club App |

---
*สรุปจากเอกสาร BRD_V0.1 (42 หน้า) — สำหรับใช้เริ่มต้นโครงการ*

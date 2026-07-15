# MCMP — QA Task Assignment (แผน 3 Lot)

**Source:** `[In Progress] 20240278 Marketing Campaign Management Platform_v1.0.xlsx` (export 2026-07-15)
— แท็บ **`Project Timeline_New22.06.69`** (ตัวเลข MD + วัน Go Live) และ **`Development Effort`** คอลัมน์ `Release` (งาน → Lot)
**Total QA Effort:** **98.00 MD** — Lot 1 = 27.0 · Lot 2 = 27.5 · Lot 3 = 43.5
**Date:** 2026-07-15 (แทนที่ฉบับ 2026-06-16 ทั้งฉบับ)

> ### ⚠️ เปลี่ยนจากฉบับเดิมอย่างมีนัยสำคัญ
> ฉบับเดิมแบ่งงานเป็น **QA1 Senior (63.75) / QA2 Junior (39.25)** แบบไม่ระบุชื่อ บนแผน **2 Lot / 452.2 MD**
> Sheet ปัจจุบันเป็นแผน **3 Lot / 328 MD** และ**ระบุตัวคนจริงมาแล้ว** — การแบ่ง QA1/QA2 แบบเดิมจึงใช้ไม่ได้อีกต่อไป เอกสารนี้ยึดตาม Sheet
> **QA รวมแทบไม่เปลี่ยน (100 → 98 MD)** แม้ Dev จะถูกตัดลง ~88 MD — เป็นจุดที่ควรตั้งคำถามกับ PM ว่า scope ที่ตัดออกจาก Dev หายไปไหน ทำไม QA ไม่ลดตาม

---

## 1. Production 3 Lot — ภาพรวม

| Lot | ขอบเขต | Go Live | QA MD | Test Cases | TC ต่อ MD |
|---|---|---|---|---|---|
| **Lot 1** | Campaign Management Part 1 — นำเข้า Customer/Policy/GA4/RFM → **สร้าง Segment** → Sync FB/Google Ads | **19 ต.ค. 2026** | 27.0 | **26** | 0.96 |
| **Lot 2** | **Lead Management** ทั้งหมด — นำเข้า Lead/Agent/Income, Auto Assign + SLA, LC Connect | **1 ธ.ค. 2026** | 27.5 | **83** | 3.02 |
| **Lot 3** | Campaign Management Part 2 — Line OA/FB Inbox/Ocean Club ingestion, **สร้าง+ส่ง Campaign**, Message, Tracking | **6 พ.ค. 2027** | 43.5 | **71** | 1.63 |
| | | **รวม** | **98.0** | **180** | |

> **⚠️ สัญญาณจากคอลัมน์ TC ต่อ MD:** Lot 2 มี test case มากที่สุด (83) แต่ได้ effort น้อยที่สุดต่อ TC (3.02 TC/MD ≈ 2.6 ชม./TC รวม design+execute+retest) เทียบกับ Lot 1 ที่ได้ ~8 ชม./TC — **ถ้า TC ของ Lot 2 ไม่ได้ง่ายกว่าจริง Lot 2 คือ Lot ที่เสี่ยง under-budget ที่สุด** ควรถาม PM ว่า 27.5 MD มาจากฐานอะไร

---

## 2. คนและ Effort จริงตาม Sheet

| บทบาท | ชื่อ | Lot 1 | Lot 2 | Lot 3 | รวม | % ของ QA ทั้งหมด |
|---|---|---|---|---|---|---|
| **QA Lead MCMP** | **อนุชา พิมสร้อย** | Lead | Lead | Lead | **0** | — (ไม่ถูกลง MD ใน Sheet) |
| QA MCMP 1 | ชุติมา สมพันธ์แพ | 23.0 | 18.25 | 34.5 | **75.75** | **77%** |
| QA Data Platform / LC Connect | เนตรชนก สักกามาตร | 4.0 | 6.0 | — | **10.0** | 10% |
| QA Line OA | ธัญทิพย์ หนักทอง | — | — | 5.0 | **5.0** | 5% |
| QA CIS | เอกภพ อึ้งพยัคฆ์เดช | — | — | 4.0 | **4.0** | 4% |
| QA Corporate Web | กันต์กมล คล้ายสุวรรณ | — | 3.25 | — | **3.25** | 3% |
| | **รวม** | **27.0** | **27.5** | **43.5** | **98.0** | 100% |

> **บทบาทของ QA Lead MCMP (อนุชา):** Sheet ไม่ลง MD ให้ → ในทางปฏิบัติแปลว่างาน test design / review / defect triage / รายงาน **ไม่มี budget รองรับ** ถ้าต้องการให้ Lead ลงมือเทสต์เองด้วย ต้องขอเพิ่ม MD หรือดึงจาก slack

---

## 3. 🔴 ความเสี่ยงด้าน Resource — ต้อง escalate

### 3.1 ชุติมา สมพันธ์แพ รับงาน 77% ของ QA ทั้งโปรเจกต์ และทำ 3 Lot พร้อมกัน

ตารางรายสัปดาห์จาก Sheet (cap = จำนวนวันทำงานจริงในสัปดาห์นั้น ตามแถว `Working Day` ซึ่งหักวันหยุดไทยไว้แล้ว):

| สัปดาห์ | cap (วัน) | จอง (MD) | รายละเอียด | สถานะ |
|---|---|---|---|---|
| 2026-07 w5 | 3 | 1.5 | L1 1.5 | |
| 2026-08 w2 | 4 | 4 | L1 4 | เต็ม |
| 2026-08 w3 | 5 | 5 | L1 5 | เต็ม |
| 2026-08 w4 | 5 | 5 | L1 2.5 + L2 2.5 | เต็ม |
| 2026-08 w5 | 1 | 1 | L1 0.5 + L2 0.5 | เต็ม |
| 2026-09 w3 | 5 | 5 | L1 5 | เต็ม |
| 2026-09 w4 | 5 | 4.75 | L1 4.5 + L3 0.25 | |
| **2026-09 w5** | **3** | **5.5** | L2 3 + L3 2.5 | 🔴 **เกิน 2.5 MD** |
| **2026-10 w1** | **2** | **4.5** | L2 2 + L3 2.5 | 🔴 **เกิน 2.5 MD** |
| 2026-10 w2 | 5 | 5 | L2 5 | เต็ม |
| 2026-10 w3 | 4 | 2.5 | L3 2.5 | |
| 2026-10 w4 | 4 | 4 | L2 4 | เต็ม |
| 2026-10 w5 | 5 | 1.25 | L2 1.25 | |
| 2026-11 w3 | 5 | 5 | L3 5 | เต็ม |
| 2026-11 w4 | 5 | 5 | L3 5 | เต็ม |
| **2026-11 w5** | **1** | **5** | L3 5 | 🔴 **เกิน 4 MD** |
| 2026-12 w1 | 4 | 1 | L3 1 | |
| 2026-12 w3 | 5 | 5 | L3 5 | เต็ม |
| 2026-12 w4 | 5 | 5 | L3 5 | เต็ม |
| 2026-12 w5 | 3 | 0.75 | L3 0.75 | |
| **รวม** | **79 วัน** | **75.75 MD** | | **เกินรวม 9 MD** |

**ปัญหา 3 ชั้นซ้อนกัน:**

1. **จองเกินวันที่มีจริง 9 MD** ใน 3 สัปดาห์ — หนักสุดคือ **2026-11 w5 ที่มีวันทำงานแค่ 1 วัน (30 พ.ย.) แต่จองไว้ 5 MD** เกิดจากคนวางแผนใส่ตัวเลขโดยไม่ได้ดูแถว Working Day
2. **Utilization 96%** (75.75 MD / 79 วัน) — ไม่มี buffer สำหรับ retest รอบ 2, defect ที่เด้งกลับ, หรือ blocker จาก Dev เลย งาน QA ปกติต้องเผื่อ retest อย่างน้อย 20–30%
3. **Sheet เองระบุความเสี่ยงซ้อนอีก** — ช่อง `Impact Project` ของชุติมาเขียนว่า *"IFRS17 Closing+Prod Issue 25% อาจจะมีแทรกด่วน UR IFRS17"* แปลว่ามีงานอื่นกิน 25% ของเวลาอยู่แล้ว → **capacity จริง ≈ 79 × 0.75 = 59 วัน แต่ต้องทำ 75.75 MD ขาดไป ~17 วัน**

**ข้อเสนอ (เรียงตามความง่าย):**
- **ทางที่ 1 — เกลี่ยงาน:** ย้าย 9 MD ที่ล้นไปสัปดาห์ที่ยังว่าง (2026-10 w5 เหลือ 3.75, 2026-12 w1 เหลือ 3, 2026-12 w5 เหลือ 2.25) แก้ปัญหาข้อ 1 ได้ แต่ไม่แก้ข้อ 2–3
- **ทางที่ 2 — เพิ่มคน:** ขอ QA เสริมสำหรับ Lot 3 (34.5 MD หนักสุดและอยู่ปลายทาง) เพราะ Lot 3 มีเวลาถึง พ.ค. 2027 จึงเตรียมคนได้ทัน
- **ทางที่ 3 — ให้ QA Lead ลงมือ:** อนุชารับบางส่วน แต่ต้องขอ MD เพิ่มเพราะ Sheet ไม่ได้ลง budget ไว้

### 3.2 Over-allocation ของคนอื่น (เล็กน้อย)
- **ธัญทิพย์** — 2026-12 w5 cap 3 วัน จอง 5 MD → เกิน 2 MD
- **กันต์กมล** — 2026-09 w5 cap 3 วัน จอง 3.25 MD → เกิน 0.25 MD

---

## 4. ขอบเขตการทดสอบต่อ Lot

### Lot 1 — Campaign Part 1 (26 TC · 27 MD · Go Live 19 ต.ค. 2026)

| Test Suite | TC | ขอบเขต |
|---|---|---|
| TS-01 (บางส่วน) | 7 | ดึง Customer, Policy, GA4, RFM + error handling + Automail (TC-01-01, 02, 05–09) |
| TS-04 | 16 | สร้าง/ค้นหา Segment, Filter, RFM Group, **Exclude Consent/Do-not-contact**, Clone, Export (ทั้งหมดยกเว้น TC-04-15) |
| TS-05 | 3 | Sync Audience → Facebook / Google Ads |

**สิ่งที่ทดสอบไม่ได้ใน Lot 1 (ต้องรู้ล่วงหน้า):**
- ❌ **ส่ง Campaign ไม่ได้เลย** — 1.2.3–1.2.7 อยู่ Lot 3 ทั้งหมด → E2E "Segment → ส่ง → วัดผล" ต้องรอ Lot 3
- ❌ **TC-04-15 (Filter channel-presence: มี Email/ไม่มี App/ยังไม่เป็น Ocean Connect)** — ต้องใช้ข้อมูล Line OA (1.1.3) + Ocean Club App (1.1.5) ซึ่งอยู่ **Lot 3** → **ย้าย TC-04-15 ไป Lot 3**
- ❌ **Auto-tag** — logic อยู่ที่ 1.2.2.2.1 (Lot 3) ตอน Lot 1 มีแค่ตาราง Tag (DB design)

**วิธี verify Segment โดยไม่ต้องส่งจริง:** ตรวจ audience count / export raw data / ยืนยันปลายทางที่ Facebook–Google Ads Customer Match

### Lot 2 — Lead Management (83 TC · 27.5 MD · Go Live 1 ธ.ค. 2026)

| Test Suite | TC | ขอบเขต |
|---|---|---|
| TS-01 (บางส่วน) | 1 | TC-01-04 ตัวแทน OSSS อัปเดต near-realtime |
| TS-11 | 7 | นำเข้ารายชื่อ LC จาก OSSS |
| TS-12 | 12 | บันทึก Lead ทุกช่องทาง + ตรวจซ้ำ |
| TS-13 | 4 | แยกเส้นทาง Online vs ตัวแทน |
| TS-14 | 14 | **Auto Assign + Lead Scoring (Hot/Warm)** |
| TS-15 | 5 | **Manual Assign Lead** (gap #4 — ยังไม่มี task ใน WBS) |
| TS-16 | 6 | แจ้งเตือน + จัดการ Lead บน LC Connect |
| TS-17 | 14 | **SLA 24 ชม. + ดึง Lead คืน + ระงับ LC** (gap #5) |
| TS-18 | 16 | บันทึกผลติดต่อ + UW + กฎ 3 ครั้ง + Retention 3 เดือน |
| TS-19 | 4 | รายงานผล Lead |

**ข้อดี:** Lot 2 ไม่พึ่ง Lot 1 เลย → ทดสอบขนานกันได้
**ข้อควรระวัง:** เป็น Lot ที่ TC เยอะสุดแต่ MD น้อยสุดต่อ TC (ดู §1)

### Lot 3 — Campaign Part 2 (71 TC · 43.5 MD · Go Live 6 พ.ค. 2027)

| Test Suite | TC | ขอบเขต |
|---|---|---|
| TS-01 (บางส่วน) | 1 | TC-01-03 Contact Center / FB Inbox realtime |
| TS-02 | 9 | Upload ไฟล์ Campaign/Activity + Validate |
| TS-03 | 5 | Maker/Checker นำเข้า Campaign & Activity |
| TS-04 (บางส่วน) | 1 | TC-04-15 Filter channel-presence (ย้ายมาจาก Lot 1) |
| TS-06 | 23 | **สร้าง Campaign + flow builder (GrowthAi) + ตั้งเวลา + Tag + Retarget** |
| TS-07 | 11 | Message แยกช่องทาง + Personalization + Shortlink + SMS credit |
| TS-08 | 5 | **ขออนุมัติ/อนุมัติส่ง Campaign (Maker/Checker)** (gap #3) |
| TS-09 | 6 | ระบบส่ง Campaign ตามเวลา/ช่องทาง + fallback CIS |
| TS-10 | 10 | เก็บผลตอบรับ + Tracking + รายงานสรุปรายเดือน |

**Lot 3 คือ Lot ที่หนักที่สุดและซับซ้อนที่สุด** — มี GrowthAi flow builder, ช่องทางส่ง 4 ทาง, และ E2E เต็มรูปแบบครั้งแรก

---

## 5. Test Window จาก Sheet

| Lot | ช่วงที่ QA ถูกจองใน Sheet | Go Live | ช่องว่าง |
|---|---|---|---|
| **Lot 1** | ก.ค. w5 – ก.ย. w4 2026 | 19 ต.ค. 2026 | ~3 สัปดาห์สำหรับ UAT ✅ สมเหตุสมผล |
| **Lot 2** | ส.ค. w4 – ต.ค. w5 2026 | 1 ธ.ค. 2026 | ~4 สัปดาห์สำหรับ UAT ✅ สมเหตุสมผล |
| **Lot 3** | ก.ย. w4 – ธ.ค. w5 2026 | **6 พ.ค. 2027** | 🔴 **ทิ้งช่วง ~4 เดือน — ผิดปกติ** |

> **🔴 Open Issue S2 — Lot 3 test window ไม่สมเหตุสมผล**
> ช่อง week ของ QA Lot 3 อยู่ใน ก.ย.–ธ.ค. 2026 ทั้งหมด แต่ Go Live คือ พ.ค. 2027 — ถ้าเทสต์จบ ธ.ค. 2026 จริง จะทิ้งช่วง 4 เดือนก่อนขึ้นระบบ
> **หลักฐานว่าน่าจะเป็นข้อมูลค้าง:** ช่องแยกปีของ Sheet เองบอกว่า Lot 3 มี **29.25 MD อยู่ในปี 2027** แต่ช่อง week กลับไม่มีอะไรอยู่ปี 2027 เลย (ทั้งสองค่ารวมได้ 34.5 เท่ากัน) → น่าจะเกิดจากตอนทำเวอร์ชัน `_New22.06.69` มีการเลื่อน week cells มาทางซ้ายแล้วไม่ได้อัปเดตช่องแยกปี
> **ต้อง confirm กับ PM ก่อนจองคน** — ถ้า test window จริงคือ ม.ค.–เม.ย. 2027 ภาระของชุติมาจะคลายลงมาก เพราะงาน Lot 3 (34.5 MD) จะไม่ทับกับ Lot 1/Lot 2

> **Open Issue S1 — UAT Lot 1 (ยืนยันแล้ว 2026-07-15):** Sheet เขียน `End of UAT 30/10/2569` แต่ `Go Live 19/10/2569` — ยืนยันแล้วว่า **Go Live 19 ต.ค. ถูก ป้าย UAT ค้างจากเวอร์ชันก่อน** → **UAT Lot 1 ต้องจบก่อน 19 ต.ค. 2026**

---

## 6. Gap ที่ยังไม่อยู่ใน budget — แยกตาม Lot

อ้างอิง `MCMP_BRD_vs_WBS_Crosscheck.md` §3

| Lot | Gap High | ความเร่งด่วน |
|---|---|---|
| **Lot 1** | **Do-not-contact list (#1)** · **Exclude Consent=No (#2)** | 🚨 **สูงสุด** — Compliance/PDPA + Go Live เร็วที่สุด + Lot 1 มี Sync ไป FB/Google Ads → เสี่ยงส่งข้อมูลลูกค้าที่ไม่ยินยอมออกนอกองค์กรตั้งแต่ Lot แรก มี TC รออยู่แล้ว (TC-04-07, TC-04-08) แต่**ยังไม่มี task ใน WBS ให้ Dev ทำ** |
| **Lot 2** | Manual Assign Lead (#4) · ระงับ LC x วัน (#5) | มี TC รอแล้ว (TS-15 = 5 TC, TS-17 บางส่วน) แต่ไม่มี task ใน WBS |
| **Lot 3** | Maker/Checker อนุมัติส่ง Campaign (#3) | มี TC รอแล้ว (TS-08 = 5 TC) — มีเวลาถึง พ.ค. 2027 |

> ถ้า gap เหล่านี้ถูกเพิ่มเข้า scope ต้องขอ QA เพิ่มประมาณ **5–8 MD** ซึ่ง**ยังไม่อยู่ใน 98 MD**

---

## 7. GrowthAi — ยังเป็น Open Issue

อ้างอิง `MCMP_GrowthAi_Gap_and_TestCases.md` — GrowthAi คือเครื่องมือ marketing automation จริงที่ใช้ และ Campaign ของมันคือ **visual flow builder (Decision/Condition/Action)** ไม่ใช่โมเดล "สร้าง + เลือกช่องทาง" → เป็นที่มาของ **+25 TC** (155 → 180)

**TC ของ GrowthAi ตกอยู่ Lot 1 และ Lot 3:**
- Segment (+7 TC → Lot 1 ยกเว้น TC-04-15 ที่ย้ายไป Lot 3)
- Campaign flow builder (+11 TC), Message (+2), Tracking (+5) → **Lot 3**

> ⚠️ ยังไม่ยืนยันว่า GrowthAi เป็น **COTS/SaaS** หรือ **custom build** — ถ้าเป็น custom build ต้องทดสอบ engine เอง effort จะเพิ่มจาก ~4 MD เป็น **6–8 MD** และทั้งหมดจะไปกองที่ **Lot 3** ซึ่งหนักอยู่แล้ว (43.5 MD)

---

## 8. สรุปสิ่งที่ต้องคุยกับ PM

| # | ประเด็น | ทำไมถึงสำคัญ |
|---|---|---|
| 1 | **Do-not-contact + Consent ต้องอยู่ Lot 1** | Compliance/PDPA — Lot 1 sync ข้อมูลออก FB/Google Ads แต่ยังไม่มี task exclude ใน WBS |
| 2 | **ชุติมารับ 77% ของงาน QA + จองเกิน 9 MD + มี IFRS17 กิน 25%** | ขาด capacity จริง ~17 วัน — ต้องเกลี่ยงาน เพิ่มคน หรือเลื่อน |
| 3 | **Lot 3 test window ทิ้งช่วง 4 เดือนก่อน Go Live** | ถ้าเป็นข้อมูลค้าง ต้องแก้ให้ตรง เพราะกระทบการจองคนทั้งแผน |
| 4 | **Lot 2: 83 TC แต่ 27.5 MD** | น้อยสุดต่อ TC — ขอดูฐานการประมาณ |
| 5 | **QA Lead ไม่มี MD ใน Sheet** | งาน test design/review/triage ไม่มี budget รองรับ |
| 6 | **Dev ตัด 88 MD แต่ QA ลดแค่ 2 MD** | scope ที่หายไปจาก Dev คืออะไร ทำไม QA ไม่ลดตาม |
| 7 | **GrowthAi COTS หรือ custom** | ต่างกัน 4 MD vs 6–8 MD และกองที่ Lot 3 ทั้งหมด |

---
*จัดทำจาก Sheet export 2026-07-15 — ใช้คู่กับ `MCMP_BRD_vs_WBS_Crosscheck.md` (gap ต่อ Lot), `MCMP_Test_Design.md` + `export/` (180 TC พร้อมคอลัมน์ Lot), `MCMP_GrowthAi_Gap_and_TestCases.md`*

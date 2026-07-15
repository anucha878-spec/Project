# สรุปประชุม — Solution & Repo Consult (สำหรับ QA Lead)

> **ประชุม:** "[MCMP] ขอปรึกษา Solution และขอสร้าง Repo"
> **วันที่:** 2026-07-01 12:52 (GMT+07:00) · **ความยาว:** ~11.75 นาที (เนื้อหาจริง ~7 นาทีแรก)
> **แหล่งที่มา:** ถอดเสียงอัตโนมัติจากไฟล์ Recording (whisper large-v3-turbo) — ไฟล์ดิบ: `meeting\2026-07-01_transcript_raw.txt`, `meeting\2026-07-01_transcript_full.srt`
> **โฟกัสของสรุปนี้:** **Process Design** และ **DB Design** เพื่อให้ QA Lead ใช้เตรียม test scope / test data / clarification

---

## ⚠️ หมายเหตุความเชื่อมั่น (อ่านก่อน)
เสียงเป็นการประชุมแบบ far-field + คำศัพท์เทคนิคปนอังกฤษ ทำให้ถอดเสียงเพี้ยนบางส่วน สรุปนี้เป็นการ **ตีความ (interpretation)** จาก transcript ที่กู้คืนได้ ไม่ใช่คำต่อคำ — ประเด็นที่ยังไม่ชัดถูกทำเครื่องหมาย **`[ต้อง confirm]`** ไว้ **แนะนำให้ QA Lead ตรวจสอบซ้ำกับ SA/พี่โทน ก่อนล็อกเป็น test basis**

**ผู้ร่วมประชุม (คาดจากบริบท):** พี่โทน (Senior/Architect — ผู้ให้ทิศทาง), ทีม Dev/BA ("ผม/บม"), พี่ภู (เรื่อง Account/Access), คุณฟี/รูบี้ (ค้างข้อมูล data mapping)

---

## 🗄️ ส่วนที่ 1 — DB Design (สาระหลักของประชุม)

### 1.1 ที่เก็บข้อมูลลูกค้า = ระบบ **CX** (Customer platform / CDP กลาง)
- ข้อมูลลูกค้า (Customer) ให้ **ลงที่ CX** เป็นหลัก — พี่โทนกำหนดทิศทางนี้
- แยกชุดข้อมูลใน CX ออกเป็นส่วน ๆ โดยมีชุดหนึ่งเป็นข้อมูลฝั่ง **Campaign / Activity**
- เมื่อลูกค้าทำธุรกรรม (recurring) → บันทึกเข้า CX เช่นกัน (ไม่ใช่ข้อมูล upload ครั้งเดียวจบ)

### 1.2 การจำแนกข้อมูล **2 ทาง: Customer vs Prospect**
- ต้องแยกเก็บ **2 กลุ่ม**: กลุ่มที่เป็นลูกค้าแล้ว (**Customer**) กับกลุ่มที่ยังไม่ใช่ลูกค้า (**Prospect / Lead**)
- **Customer** → เก็บที่ CX `[ต้อง confirm: ปลายทางระบุเป็น "TCM" ในบางช่วง — ตรวจว่า CX กับ TCM คือระบบเดียวกันหรือคนละตัว]`
- **Prospect** → มี 2 แนวทางที่คุยกัน (ยังไม่ล็อก):
  - (ก) **ขยาย CX ให้รองรับ Prospect** — ข้อดี: ตามรอยได้ว่าใครเคยเป็น Prospect ของ product ไหน และเมื่อ convert เป็นลูกค้าจะ link ประวัติต่อเนื่องได้
  - (ข) เก็บแยกในระบบอื่น (`TCM` / DB ของ marketing platform) `[ต้อง confirm]`

### 1.3 **Validation ตอน ingest ข้อมูล** (จุดสำคัญสำหรับ QA)
- ต้อง **Validate ข้อมูลก่อนเข้าระบบ** — ยืนยันตัวตนว่า "เป็นใคร" ไม่รับข้อมูลขยะ/ชื่อมั่ว
- กติกาที่ระบุ: ตรวจ **เลขบัตรประชาชน 13 หลัก** + ตรวจความถูกต้อง (valid/checksum) `[ต้อง confirm รายละเอียด rule]`
- **Record ที่ไม่ผ่าน Validate → ถูกคัดออก (reject/drop)** ไม่ให้เข้า CX
- เมื่อ validate แล้วเจอว่าตรงกับลูกค้าเดิม → **link/merge เข้ากับ record ลูกค้าใน CX**

---

## 🔄 ส่วนที่ 2 — Process Design

### 2.1 UI/หน้าจอ ผู้ใช้คือ **ทีมการตลาด** → ไม่ให้เข้า CX ตรง
- คนใช้งานจริงคือ **ฝ่ายการตลาด** ดังนั้นการให้เข้าไปทำงานที่ CX โดยตรง "ไม่เหมาะ"
- **ดีไซน์:** สร้าง **UI/เมนูบน marketing platform** ส่วนข้อมูลให้ **เชื่อมโยง/ส่ง (deliver) ไปที่ CX** เบื้องหลัง
- ทิศทางเริ่มต้น: "ออกแบบให้ไปที่ CX" เป็นค่าตั้งต้น แล้วค่อยพิจารณาเมนูรายตัว

### 2.2 การวางตำแหน่งเมนู (Menu placement) — ตัดสินรายเมนู
- ตัดสิน **รายเมนู** ว่าควรอยู่ที่ CX หรือ marketing tool โดยดูจาก **ใครเป็นคนใช้**
  - เมนู/ฟังก์ชันที่การตลาดใช้บ่อย + ผู้ใช้กลุ่มเดียวกัน → วางไว้ใกล้กันบน marketing tool
  - Data/ฟังก์ชันที่การตลาด **ไม่ได้ใช้** → ให้อยู่ที่ **CX**
- มี action ต้อง **review** ว่าแต่ละเมนูควรอยู่ที่ไหน `[ยังไม่ finalize]`

### 2.3 ลักษณะการนำเข้าข้อมูล (Ingestion pattern)
- ต้องแยกให้ชัดว่าเป็น **upload ครั้งเดียวจบ** หรือ **ข้อมูลธุรกรรมที่วิ่งเข้าต่อเนื่อง (recurring)** — มีผลต่อที่เก็บและ flow

---

## 🛠️ ส่วนที่ 3 — Dev/Delivery Setup (บริบทให้ QA เตรียมตัว)
- สร้าง **2 Repo** (repo + Spec Kit) สถาปัตยกรรมแนว **MSA (Microservices)**
- **Spec Kit จะ publish บนเว็บ** (publishable web) เพื่อให้ทีม support / ผู้เกี่ยวข้องเข้ามาดู spec ได้ — **ไม่ลงรายละเอียด 100% ใน Spec Kit** เอาแบบ publish ให้ดูได้
- มี **Notification** ส่งให้ทีมทางเดียว
- **Blocker:** ยังติดเรื่อง **Account / Access provisioning** (รอพี่ภู)

---

## ✅ ส่วนที่ 4 — สิ่งที่ QA ต้องทำ / ผลกระทบต่อ Test Cases 180 ตัว

| # | ประเด็น | Action ของ QA |
|---|---------|----------------|
| 1 | **Validation ตอน ingest** (13 หลัก, reject invalid, identify) | เพิ่ม/ทวน test cases ฝั่ง **Process 01 Data Ingestion** — positive/negative validation, boundary เลขบัตร, duplicate/merge, reject flow |
| 2 | **Customer vs Prospect split** | ตรวจว่ามี test data + assertions แยก 2 กลุ่ม, การจัดกลุ่มถูกที่เก็บ (CX vs TCM) |
| 3 | **Prospect → Customer conversion/link** | เพิ่ม test case ตามรอย prospect ที่ convert เป็นลูกค้า — ประวัติต่อเนื่อง link ถูก record |
| 4 | **Data delivery ไป CX (ไม่ใช่ให้ user เข้า CX ตรง)** | ตรวจ integration/flow: UI บน marketing tool → data ลง CX ถูกต้อง (integration + data integrity test) |
| 5 | **Menu placement** | รอ finalize ก่อนออกแบบ UI test — mark เป็น pending |
| 6 | **เตรียม test data** | ต้องการชุดข้อมูลจริง/mock ที่มีทั้ง valid/invalid ID, customer, prospect — ขอจากทีม data |

### ต้องขอ Clarification (Open Issues)
1. **CX vs TCM vs ATCS** เป็นระบบอะไรบ้าง แต่ละตัวเก็บอะไร (Customer อยู่ CX หรือ TCM?)
2. **Prospect** สรุปเก็บที่ไหน (ขยาย CX หรือ DB แยก)
3. **กติกา Validation** ครบถ้วน (นอกจาก 13 หลัก มีอะไรอีก, checksum, dedup key)
4. ข้อมูล **data mapping / key** ที่ค้างอยู่กับคุณฟี/รูบี้
5. ตำแหน่งเมนูสรุปเมื่อไร (กระทบ UI test design)
6. Environment/Account พร้อมเมื่อไร (กระทบ test execution start)

---

## 🔗 เชื่อมโยงกับงานเดิม
- ประเด็น **Validation + Do-not-contact + Consent** สอดคล้องกับ High gaps ใน `MCMP_BRD_vs_WBS_Crosscheck.md` — ยืนยันว่าต้องเน้นทดสอบ Process 01/02
- Test focus groups (Critical/Major) ใน `MCMP_TestFocus_BRD_WBS.pptx` ยังใช้ได้ แต่ **เพิ่มน้ำหนักฝั่ง Data Ingestion Validation + Customer/Prospect data model** ตามที่ประชุมนี้ชี้

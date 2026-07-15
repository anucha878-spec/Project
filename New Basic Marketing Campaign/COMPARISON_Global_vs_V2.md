# QA Skill Comparison — Global `speckit-qa` vs Marketplace `qa-speckit-workflow` (V2)

- **โปรเจกต์:** New Basic Marketing Campaign (CSMS SMS Batch — UR20260070)
- **ขอบเขต:** 4 แคมเปญ (CSMS-001 Welcome LINE · CSMS-002 Welcome รอบ 2 · CSMS-003 Grace Period 7 วัน · CSMS-004 Birthday)
- **วันที่:** 2026-07-09
- **Input ที่มีจริง:** `spec.md` อย่างเดียวต่อแคมเปญ (ไม่มี plan/tasks/code/running app/BRD source)
- **ผลลัพธ์ 2 ชุด:**
  - `Result from QA Skill Global\` — สาย `speckit-qa` (skill เดียว, 8 mode)
  - `Result from QA Skill Marketplace V2\` — สาย `qa-speckit-workflow` (18 skills, 00-pre→10)

> ทั้งสองรันบน input เดียวกัน หยุดที่กำแพงเดียวกัน (ไม่มีแอปให้ execute) และไม่มโนผล (TC ทุกตัว `Not Run`, test-data เป็น synthetic). ความต่างอยู่ที่ **โครงสร้าง ความลึก และของที่ส่งต่อได้** ไม่ใช่ความถูกต้องของเนื้อ QA

---

## 1. ภาพรวมปริมาณ

| มิติ | Global (`speckit-qa`) | Marketplace V2 (`qa-speckit-workflow`) |
|---|---|---|
| ไฟล์ทั้งหมด | **28** (7/แคมเปญ) | **72** (18/แคมเปญ) |
| บรรทัดรวม (~) | ~4,500 | ~7,200 |
| Pipeline stages | 8 (`crosscheck → design → risk → coverage → test-data → execute → report → regression`) | 18 skills (`source-ingest → test-plan → requirement-review → e2e-flow → test-case → coverage → risk → test-data → automation-script → result-analysis → reconcile → report → redmine → retest`) |
| Test cases รวม | **208** | **223** |
| Atom ledger (00b) | ❌ ไม่มี | ✅ **248 atoms** |
| Playwright specs | ❌ | ✅ generate-only 4 ชุด (ฝัง TC-ID + evidence hook) |
| RTM reconciliation | ❌ | ✅ 4 ไฟล์ (0 orphan/dangling) |
| GO/NO-GO report | ❌ (ไปไม่ถึง stage report — ตัน `execute`) | ✅ `08-qa-report` ครบ 4 แคมเปญ |
| Blocked-stage stubs | (ไม่ผลิต) | ✅ เขียน stub ซื่อสัตย์ให้ `06b/07/09/10` |

### จำนวน TC / Atom รายแคมเปญ

| แคมเปญ | Global TC | V2 TC | V2 Atoms | Atom/FR coverage (V2) |
|---|---|---|---|---|
| CSMS-001 Welcome LINE | 41 | 65 | 61 | 100% / 100% |
| CSMS-002 Welcome รอบ 2 | 46 | 63 | 65 | 100% / 100% |
| CSMS-003 Grace Period | 51 | 41 | 62 | 100% / 100% |
| CSMS-004 Birthday | 70 | 54 | 60 | 100% / 100% |
| **รวม** | **208** | **223** | **248** | **100%** |

> จำนวน TC สลับกันไปมา (CSMS-001/002 V2 มากกว่า, CSMS-003/004 Global มากกว่า) — **ความลึกของ V2 ไม่ได้อยู่ที่จำนวน TC ดิบ** แต่อยู่ที่ชั้น atom, RQ-back-to-SA และ stage ปลายสาย

---

## 2. จุดที่ทั้งสองพอ ๆ กัน (คุณภาพ QA ใกล้เคียง)

- **Traceability FR/SC → TC = 100%** ทั้งคู่, coverage verdict = `covered`
- **Risk analysis ลึกพอกัน** — ใช้ 6-axis (Business · Complexity · Change-freq · Integration · Data-sensitivity/PDPA · Historical-defect) + band override + Likelihood×Impact heatmap + test-first order
  - Global CSMS-001: P0=8 / P1=14 พร้อม footnote ยกระดับ P0 อย่างมีเหตุผล (เช่น FR-005 DNC = PDPA breach)
  - V2 CSMS-001: 1 CRITICAL + 6 HIGH (สอดคล้องกัน)
- **ไม่มโนผลเหมือนกัน** — ทุก TC `Not Run`, test-data synthetic, `crosscheck`/`execute` ถูก block อย่างซื่อสัตย์
- **จับ issue เดียวกันในสเปก** — FR-020.2 ยำ requirement (CSMS-002), US5 acceptance scenario เลขสลับ 1,6,7,2,3,4,5 (CSMS-004)

---

## 3. จุดที่ V2 เหนือกว่า (ของที่ได้เพิ่มจริง)

1. **Atom-inventory (00b) — ชั้นที่ Global ไม่มี**
   - ย่อย FR ลงเป็น "testable atom" ระดับ error text / boundary / enum / per-status branch เป๊ะ (CSMS-001 = 61 atoms)
   - audit แบบ **atom→TC** (`MISSING_ATOM_COVERAGE`) ไม่ใช่แค่ FR→TC → จับ gap ที่ FR-level มองข้าม (FR ครบ 100% ≠ atom ครบ)

2. **RQ ยิงกลับ SA เป็นชิ้นเป็นอัน (Strict-Data-Policy)**
   - field ที่สเปกไม่ระบุ = RQ พร้อม severity แทนการเดา — เป็น deliverable ส่งกลับ SA ได้ทันที
   - ตัวอย่างจริง (CSMS-001): **RQ-002** ปี CSV เป็น พ.ศ.(FR-013 text) แต่ตัวอย่างใช้ ค.ศ. `26`; **RQ-004** ไม่มี timeout/SLA ของ batch → SC-004 ทวนสอบไม่ได้
   - (CSMS-003): **RQ-002** dedup ต้อง key เฉพาะสถานะ `'S'` ไม่งั้น Manual-Fix ซ่อม record `'F'` ไม่ได้ (CRITICAL, ขัด FR-014)

3. **ปลายสายครบ (ถึง verdict + reconcile)**
   - `RTM.md` — reconcile REQ↔atom↔TC↔Risk↔Data (0 orphan / 0 dangling ทั้ง 4)
   - `08-qa-report.md` — QA report + exit-criteria checklist + **GO/NO-GO** (สรุป 🔴 NO-GO **pending SIT** อย่างมีเหตุผล ไม่ใช่เพราะเทสต์ fail)
   - `NFR-routing.md` — แยก PII / Do-Not-Contact ไป security/compliance track

4. **Playwright specs + Blocked stubs (พร้อมรันต่อ)**
   - generate `*.spec.js` ฝัง TC-ID เป็นชื่อ test + evidence hook (mark `test.fixme`/not-executed)
   - stub ซื่อสัตย์ให้ `06b execute / 07 result-analysis / 09 redmine / 10 retest` ว่า blocked เพราะอะไร + ปลดล็อกยังไง
   - `09 redmine` = dry-run (ไม่สร้าง ticket จริง — outward-facing)

---

## 4. จุดที่ Global เหนือกว่า

1. **กระชับ / อ่านไว** — 7 ไฟล์/แคมเปญ, flat, ไม่มี stub เปล่าของ stage ที่รันไม่ได้ → เหมาะรีวิวเร็ว
2. **CSV tracker พร้อม import** — `test-cases_*.csv` (12 คอลัมน์) + 16-col checklist ตรง format บริษัท (V2 เก็บ TC เป็น `.md` เป็นหลัก)
3. **โครงสร้างเข้าใจง่ายกว่า** สำหรับคนไม่คุ้น spec-kit numbering (ไม่ต้องรู้ระบบเลข NN)

---

## 5. สรุป / คำแนะนำการใช้งาน

| สถานการณ์ | เลือกใช้ |
|---|---|
| ต้องส่ง SA แก้สเปกก่อนพัฒนา (ต้องการ RQ list + atom-inventory) | **V2** |
| ต้องการ TC tracker เข้า SIT เร็ว (CSV/checklist หยิบใช้ทันที) | **Global** |
| ต้องการ verdict/รายงานส่งผู้บริหาร (GO/NO-GO) | **V2** |
| รีวิวเร็ว ๆ / feature เล็ก | **Global** |
| เตรียม automation ล่วงหน้า (Playwright skeleton) | **V2** |

**บรรทัดสรุป:** เนื้องาน QA ที่ทวนสอบได้จริง **V2 ครบและลึกกว่าชัดเจน** (atom→TC audit, RQ กลับ SA, GO/NO-GO report, Playwright skeleton) — ส่วน **Global เบากว่า หยิบเข้า SIT เร็วกว่า** ทั้งคู่หยุดที่กำแพงเดียวกัน (ไม่มีแอปให้ execute) ต่างกันตรงที่ V2 "เขียน verdict นั้นออกมาเป็นเอกสารส่งต่อได้" ขณะที่ Global ไปไม่ถึง stage report

---

## 6. ข้อจำกัดร่วม (ทั้งสองชุด)

- ⛔ **crosscheck / conformance ทำไม่ได้** — ไม่มีเอกสารต้นทาง BRD/FRD/UR (`SPEC_BATCH-CSMS-*.md`) ในโฟลเดอร์
- ⛔ **execute → report จริง ทำไม่ได้** — ไม่มีแอป/DB/API ที่รันได้ → TC ทุกตัวคง `Not Run`
- ปลดล็อกได้เมื่อ: (1) ส่ง path เอกสารต้นทาง → เปิด crosscheck, (2) มี SIT env + batch harness → เปิด execute/report/regression

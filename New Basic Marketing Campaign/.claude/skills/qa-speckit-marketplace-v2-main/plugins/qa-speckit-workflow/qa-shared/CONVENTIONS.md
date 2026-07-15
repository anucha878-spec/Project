# QA Spec-Kit Workflow — Conventions (self-contained, V2)

> เอกสารนี้ถูก **bundle มากับ plugin** (`qa-shared/CONVENTIONS.md`) เพื่อให้ทุก skill ในสาย QA Spec-Kit
> ทำงานเหมือนกันทุกเครื่อง โดยไม่ต้องพึ่ง qa-shared/CONVENTIONS.md ของโปรเจกต์ปลายทาง (ซึ่งแต่ละเครื่องต่างกัน).
> skill ในสายนี้อ้าง section ในไฟล์นี้ (โดยเฉพาะ **"QA Artifact Folder"**) แทนการอ้าง qa-shared/CONVENTIONS.md เดิม.

---

## Pipeline (flow เต็ม — numbered artifact 00-pre → 10)

**2 entry legs ที่ stage 01 (ตาม source ต้นทาง — บรรจบที่ 02):**
- **ขา A — Spec-Kit source:** มี `spec.md` (structured) → `/requirement-review`
- **ขา B — Generic source:** wiki/Confluence/Redmine/Word/PDF/BRD/SRS/user story/API doc/… → `/source-ingest` (00-pre) → `/requirement-review-generic`
- ทั้งสองผลิต handoff เดียวกัน (`qa/01-requirement-review.md` + `qa/00b-atom-inventory.md`) → downstream ตั้งแต่ **02 เหมือนกันทุกประการ**

```
Source Ingest (ขา B)       /source-ingest               [ขา B] crawl wiki/เอกสาร generic ครบทุกหน้า+detail → sources/ ครั้งเดียว (00-pre)
  ↓  (ขา A ข้าม — มี spec.md เป็น snapshot อยู่แล้ว)
Test Plan (optional)       /test-plan                   scope/test-levels/env/entry-exit-suspension criteria (00, ข้ามได้ถ้า feature เล็ก)
  ↓
Requirement Review         /requirement-review          [ขา A: spec.md] รีวิว spec เชิง QA (+NFR) → QA Review Report (01) + 00b atom
  หรือ                     /requirement-review-generic  [ขา B: อ่าน sources/] → 01 + 00b  (converge ที่นี่)
  ↓
E2E Flow Designer          /e2e-flow-designer           structure flow/state/scenario จริง → 02-e2e-test-patterns.md
  ↓
Test Case Generator        /test-case-generator         → executable TC + traceability matrix            ◄─────┐
  ↓                                                                                                            │ ↺ เจอ gap / high-risk uncovered
Coverage Review            /coverage-review             audit gap/overlap/missing-negative-edge + atom→TC     │   → กลับ 03 เพิ่ม TC → re-run 04→05
  ↓                                                                                                            │   (bump รอบใน 00-INDEX เฉพาะ 03/04/05)
Risk Analysis              /risk-analysis               จัด P0–P3 + risk heatmap  ─────────────────────────────┘
  ↓
Test Data Generator        /test-data-generator         test data 6 หมวด (synthetic) ผูก TC+REQ
  ↓
Automation Script (06a)    /qa-automation-script        gen playwright/<feature>/*.spec.js ฝัง convention + readiness gate
  ↓
  [ execute test จริง — foreground ]   (คู่กับ community playwright-generate-test / playwright-best-practices)
  ↓
Result Analysis            /result-analysis             วิเคราะห์ผลรัน 6 มิติ + production readiness
  ↓
Reconciliation (ก่อน 08)   /qa-reconcile                REQ→atom→TC→Data→Risk→Result→Defect orphan+dangling + RTM
  ↓
Report Generator           /qa-report-generator         สังเคราะห์ final QA report + exit-criteria checklist (GO/NO-GO) + HTML execution report
  ↓
Sheet Write-back (07b)     /test-case-generator         เขียนผลรันราย TC กลับ Google Sheet (M/N/O/Q; reuse tab 03b) — optional
  ↓
Redmine Logging            /redmine-logging             แปลง findings → Redmine issue tickets (+dedup)
  ↓
  [ Dev แก้ ]
  ↓
Retest / Closure (10)      /qa-retest                   retest defect (FIXED/STILL_FAILING/INCONCLUSIVE) + write-back → ปิดวง
```

> **หลัก handoff:** output ของ step ก่อน = input ของ step ถัดไป — เดินตามลำดับเพื่อคง traceability
> (REQ ↔ atom ↔ TC ↔ Risk ↔ Result ↔ Defect) ตลอดสาย; ข้าม step ได้แต่จะเสีย linkage ที่ downstream ต้องใช้.

---

## QA Artifact Folder — input/output อยู่ที่เดียวกัน (บังคับ)

ทุก skill ในสายนี้ **ต้องเซฟ output เป็นไฟล์ลง `spec-kit/<NNN>-<feature>/qa/`** ของ feature นั้น
ตั้งชื่อ `NN-<name>` เรียงตามลำดับ pipeline เพื่อให้ทั้ง input + output รวมอยู่ folder เดียว —
skill ถัดไปหยิบ input จากที่นี่ได้ทันที (ไม่ต้องให้ user paste ซ้ำ).

**ตารางเลขลำดับมาตรฐาน (source of truth):**

| NN | ไฟล์ | Skill ที่สร้าง | อ่าน input จาก |
|----|------|----------------|----------------|
| 00-pre | `sources/` (`crawl/`+`assets/`+`INVENTORY.md`) *(ขา B เท่านั้น)* | `/source-ingest` | wiki (Confluence/Redmine crawl recursive) / Word/PDF/เอกสาร generic + `sources/api/openapi.json` ถ้าอ้าง Swagger |
| 00b | `00b-atom-inventory.md` (QA-owned atom ledger) | `/requirement-review` (ขา A) **หรือ** `/requirement-review-generic` (ขา B) | ขา A: `spec.md`+`contracts/*`+`data-model.md`+mockup · ขา B: `sources/` |
| 00 | `00-test-plan.md` *(optional)* | `/test-plan` | ขา A: `spec.md` · ขา B: `sources/` |
| 01 | `01-requirement-review.md` | `/requirement-review` (ขา A) **หรือ** `/requirement-review-generic` (ขา B) | ขา A: `spec.md` · ขา B: `sources/` |
| 02 | `02-e2e-test-patterns.md` | `/e2e-flow-designer` *(owned producer; community `e2e-testing-patterns` = guidance เสริม)* | `01`, `00b` |
| 03 | `03-test-cases.md` | `/test-case-generator` | `01`, `02` |
| 03b | *(Google Sheet upload — แถวใน `00-INDEX.md`)* | `/test-case-generator` Step 03b | `03` |
| 04 | `04-coverage-review.md` | `/coverage-review` | `01`, `02`, `03` |
| 05 | `05-risk-analysis.md` | `/risk-analysis` | `01`, `02`, `03`, `04` |
| 06 | `06-test-data.json` | `/test-data-generator` | `01`, `02`, `03`, `04`, `05` |
| 06a | *(Playwright spec — `playwright/<feature>/*.spec.js`, นอก `qa/`)* | `/qa-automation-script` *(ฝัง convention + readiness gate; community `playwright-generate-test`/`best-practices` = ตัวช่วยเสริม)* | `03`, `06`, `02` |
| 06b | *(Execute test จริง → `playwright-report/`, นอก `qa/`)* | (รัน Playwright foreground) | `06a` |
| 07 | `07-result-analysis.md` | `/result-analysis` | `01`, `03`, `05`, `06` + `06b` execution logs |
| 08 | `08-qa-report.md` | `/qa-report-generator` | `01`–`07` |
| 07b | *(Google Sheet results write-back — M/N/O/Q ราย TC, reuse tab 03b)* | `/test-case-generator` Step 07b | `07` + execution report |
| RTM | `RTM.md` *(reconciliation + traceability; รันก่อน 08)* | `/qa-reconcile` | `00b`,`03`–`07`,`09` |
| 09 | `09-redmine-issues.md` | `/redmine-logging` | `03`, `05`, `07`, `08` |
| 10 | `10-retest-<YYYY-MM-DD>.md` *(1 ไฟล์/รอบ retest, ปิดวง)* | `/qa-retest` | `09`,`07`,`08`,`03` + Dev-fixed status |

> **`00b` = QA atom-inventory (no-wiki gap-guard):** เมื่อ spec เขียนระดับ FR ย่อ → `/requirement-review` (01) mine
> **"testable atom"** (error text เป๊ะ/boundary/char-limit/per-status branch/UI-state ต่อ role/status-code/tooltip/asymmetry)
> จาก spec+contracts+data-model+**mockup (vision)** ลง `qa/00b-atom-inventory.md`. atom ติดสถานะ ✅ specified / ❓ RQ /
> 🔒 assumption — atom ที่ SA ไม่ระบุ = **RQ ยิงกลับ SA ไม่ใช่ให้ QA เดา**. `03` ทุก atom→≥1 TC · `04` audit **atom→TC**
> (`MISSING_ATOM_COVERAGE`) ไม่ใช่แค่ FR→TC (FR ครบ 100% ≠ atom ครบ).
>
> **`03b`** = Google Sheet upload tracker (link + ชื่อ tab) บันทึกแถว `03b` ใน `00-INDEX.md` — reuse ถ้าเคย upload.
> **`06a`/`06b`** = Playwright execution tracker; `07` ทำไม่ได้จนกว่า `06b` = ✅ (มี `playwright-report/` จริง + ทุก `test.skip()` ปลด).

### `00-INDEX.md` template (manifest ของ feature)

> **สร้างด้วย generator เท่านั้น (deterministic):** `node qa-shared/init-index.js spec-kit/<f>/qa "<feature-title>"` — เขียน skeleton ด้านล่างครบทุกแถว หัวคอลัมน์ `Skill` (ไม่ทับของเดิม). **ห้ามพิมพ์ table เองจากความจำ** (เสี่ยงหัวเป็น `Command` / แถวไม่ครบ). template ด้านล่าง = เอกสารอ้างอิงว่า generator เขียนอะไร (init-index.js ROWS = แหล่งจริง).

```markdown
# QA Artifact Index — <feature>
| ลำดับ | ไฟล์ | Skill | สถานะ | รอบ | วันที่ | Input ที่ใช้ |
|------|------|-------|-------|-----|--------|-------------|
| 00-pre | sources/ (ขา B เท่านั้น) | /source-ingest | ⏳ | 1 | | wiki/เอกสาร generic → crawl ครบ→sources/ |
| 00 | 00-test-plan.md (optional) | /test-plan | ⏳ | 1 | | ขา A: spec.md · ขา B: sources/ |
| 00b | 00b-atom-inventory.md | /requirement-review (A) หรือ /requirement-review-generic (B) | ⏳ | 1 | | ขา A: spec+contracts+data-model+mockup · ขา B: sources/ |
| 01 | 01-requirement-review.md | /requirement-review (A) หรือ /requirement-review-generic (B) | ⏳ | 1 | | ขา A: spec.md · ขา B: sources/ |
| 02 | 02-e2e-test-patterns.md  | /e2e-flow-designer | ⏳ | 1 | | 01,00b |
| 03 | 03-test-cases.md         | /test-case-generator | ⏳ | 1 | | 01,02 |
| 03b | Google Sheet upload (tab POC-xxx) | /test-case-generator Step 03b | ⏳ | 1 | | 03 |
| 04 | 04-coverage-review.md    | /coverage-review     | ⏳ | 1 | | 01,02,03 |
| 05 | 05-risk-analysis.md      | /risk-analysis       | ⏳ | 1 | | 01,02,03,04 |
| 06 | 06-test-data.json        | /test-data-generator | ⏳ | 1 | | 01,02,03,04,05 |
| 06a | playwright/<feature>/*.spec.js | /qa-automation-script | ⏳ | 1 | | 03,06,02 |
| 06b | execute → playwright-report/ | npx playwright test | ⏳ | 1 | | 06a |
| 07 | 07-result-analysis.md    | /result-analysis     | ⏳ | 1 | | 01,03,05,06,06b(exec-logs) |
| 08 | 08-qa-report.md          | /qa-report-generator | ⏳ | 1 | | 01-07 |
| 07b | Google Sheet results write-back (M/N/O/Q, reuse tab 03b) | /test-case-generator Step 07b | ⏳ | 1 | | 07,06b |
| RTM | RTM.md (reconcile+traceability, ก่อน 08) | /qa-reconcile | ⏳ | 1 | | 00b,03-07,09 |
| 09 | 09-redmine-issues.md     | /redmine-logging     | ⏳ | 1 | | 03,05,07,08 |
| 10 | 10-retest-YYYY-MM-DD.md (ปิดวง) | /qa-retest | ⏳ | 1 | | 09,07,08,03 |
```
สถานะ: `⏳` ยังไม่ทำ · `✅` เสร็จ · `—` ข้าม/ไม่เกี่ยว
**รอบ (iteration):** เริ่มที่ `1`; ทุกครั้งที่ loop-back (04/05 เจอ gap → กลับไปแก้ 03 แล้ว re-run) ให้ `+1` เฉพาะแถว **03/04/05** ที่รันซ้ำ.

---

## กฎที่ทุก skill ต้องทำ

1. **🧭 หา feature folder:** ถ้า user ไม่ระบุ → สแกน `spec-kit/` หา feature ที่มี `qa/` อยู่แล้ว/ล่าสุด → **ถามยืนยันก่อน อย่าเดา**.
2. **💾 เซฟ output** เป็นไฟล์ `NN-<name>` ตามตาราง (สร้าง `qa/` ถ้ายังไม่มี).
3. **📒 หลังเซฟ → อัปเดต `qa/00-INDEX.md`** (แถวของ output ตัวนั้น: ลำดับ / ไฟล์ / สถานะ ✅ / รอบ / วันที่ `YYYY-MM-DD` / input). **⚠️ ถ้า INDEX ยังไม่มี → อย่าเขียน table เอง** (เครื่องอื่นเคยเขียนเอง → หัวคอลัมน์เป็น `Command` แทน `Skill` + แถวไม่ครบ) — ให้ **สร้างสเกเลตันเต็มทุกแถว deterministic** ด้วย `node qa-shared/init-index.js spec-kit/<f>/qa "<feature-title>"` (ครบ 19 แถว 00-pre..10, หัวคอลัมน์ `Skill`, ไม่ทับของเดิม) แล้วค่อย **Edit เฉพาะแถวของ skill ตัวเอง**. init-index.js = single source of truth ของ skeleton (ห้าม rename คอลัมน์/ตัดแถว/เปลี่ยนลำดับ).
4. **📥 อ่าน input จาก `qa/`** ตามคอลัมน์ในตาราง — ถ้าไฟล์ input ที่ต้องใช้ไม่มีใน `qa/` → **หยุดถาม user ก่อน อย่าเดา/อย่าแต่ง**.
4b. **📖 Read Coverage — "enumerate ก่อน แล้ว classify" (บังคับทุก skill):** **Glob `**/*` ทั้งโฟลเดอร์ feature (recursive) ก่อนเสมอ** — **ห้ามอ่านตาม whitelist ที่คุ้น**. classify ทุกไฟล์: text→อ่าน · **ภาพ/diagram `*.jpg/*.png/*.pdf/*.svg`→เปิดดูภาพจริงด้วย Read (vision)** (business rule เช่น transition/เงื่อนไขปุ่ม/สถานะ มักฝังในภาพ) · `.xlsx/.docx`→extract · ไม่รู้จัก→เปิดดูก่อน. อ่าน `spec.md`+`data-model.md`+`contracts/*` เต็มเสมอ. **ห้ามเขียนว่า "cross-check กับ X" ถ้ายังไม่ได้เปิด X**; ไฟล์แปลกที่ตีความไม่ออก→หยุดถาม user.
5. **📄 HTML Test Execution Report (บังคับทุก feature):** นอกจาก `08-qa-report.md` ต้องสร้าง `qa/test-execution-report.html` (self-contained ฝังภาพ) ด้วย central template `qa-shared/execution-report.js` (`buildExecutionReport()`). **ห้ามเขียน CSS/layout ใหม่** — generator ต่อ feature ที่ `playwright/<feature>/build-execution-report.js` ใส่แค่ข้อมูล. **📸 ภาพต้องแคป ณ จังหวะ assertion ก่อน cleanup + กรอบแดงรอบ element ผล + caption**; ห้าม full-page หลัง cleanup (ได้ภาพ "สำเร็จ"/ตารางว่าง = ใช้เป็นหลักฐานไม่ได้). ดู [Evidence conventions](#evidence-screenshot-conventions).
6. **🗣️ Plain-language TC (ทุก skill ที่ผลิต/อ้าง TC — 02/03):** Title/Steps/Expected เขียนภาษาที่คนนอกทีม (manual/BA/PO/auditor) เข้าใจทันที — ใช้ชื่อจอ/ปุ่ม/ฟิลด์ตามที่เห็นบน UI, **ห้าม**ใช้รหัสหน้าจอ/เลข wiki (SCR-012)/selector ดิบ (`#x`)/alert-code ล้วนเป็นภาษาหลัก; technical ref ย้ายไปหมายเหตุท้าย/วงเล็บ (คู่กับ oracle-strength).

---

## 🔁 Loop-back (04/05 → 03)

`04 /coverage-review` และ `05 /risk-analysis` เป็น gate แบบ **audit/analysis-only** (ไม่สร้าง/แก้ TC) —
มันแค่ **ชี้** gap/missing-negative-edge/duplicate/missing-risk-signal ไม่ได้ปิดเอง.
ถ้า 04/05 **เจอ gap → ต้องวนกลับ `03 /test-case-generator` เพิ่ม TC แล้ว re-run `04 → 05`** ยืนยัน gap ปิดครบ ก่อนไป `06`.
ทุกครั้งที่วนกลับต้องอัปเดต `03-test-cases.md` (+ Sheet ถ้า upload แล้ว) และแก้ **รอบ/วันที่/สถานะ** ของแถว 03/04/05 ใน `00-INDEX.md`.
**loop เฉพาะเมื่อเจอ gap** — ถ้าไม่เจอ gap ไม่ต้องวน (อย่าทำ 03 ใหม่ทุกรอบเป็น busywork).

---

## Strict Data Policy

ข้อมูลทุก field ที่กรอก/เลือก/ใช้ derive TC หรือ test data **ต้องมาจาก source (spec/requirement/sheet/sources) เท่านั้น** —
ถ้า source ไม่ระบุ หรือ UI ไม่มีตัวเลือกที่ตรง → **หยุด/throw ทันที ห้าม fallback/default/แต่งเอง**.
TC ที่เป็น `[BLOCKED]`/`[ASSUMPTION]` ห้ามแต่ง expected/behavior — คง "spec ไม่ระบุ → รอ RQ-xxx" ตามเอกสาร.

---

## Read flow-diagram / image sources

wiki/BA source ที่มี **ภาพ flow/diagram** ต้อง download + Read ด้วย **vision** ไม่ใช่แค่ text extract —
business rule (transition, เงื่อนไขปุ่ม, สถานะ, timeline) มักฝังในภาพ และหายถ้าอ่านแต่ text. ดู กฎข้อ 4b ด้านบน.

---

## Evidence screenshot conventions

- **📸 ทุก QA Playwright spec ต้องเก็บหลักฐานทุก test (ทั้ง PASS & FAIL):** `test.afterEach` แคปทุก test (ข้ามเฉพาะ `skipped`) → เซฟ `<spec-folder>/evidence/<TC-ID>_<PASS|FINDING|FAIL>_<YYYYMMDD-HHmmss>.png` + `testInfo.attach()`. `evidence/` ถาวร (ไม่โดนล้างเหมือน `test-results/`).
- **🛑 ใช้ engine กลาง `qa-shared/evidence.js` — ห้าม reimplement snap เอง:** `const ev = require('../../qa-shared/evidence').create({ test, expect, dir: path.join(__dirname,'evidence') })` แล้วเรียก `ev.snapOk(page, caption, sel)` / `ev.snapError(page, sel, text, caption)` **ณ จังหวะ assertion ก่อน cleanup** (กรอบแดงรอบ element + caption banner + captions.json/actual-data.json ให้อัตโนมัติ ตรง contract `execution-report.js`) + `ev.recField(label,value)`. module ติดตั้ง before/afterEach เอง (fallback capture + skip-if-snapped); spec ที่ cleanup navigate ทิ้งหน้า → `create({...,autoAfterEach:false})` + `await ev.finalize(page,testInfo)` ก่อน cleanup. **ห้าม full-page หลัง cleanup / ห้ามเขียน snap เองใหม่** (bug ที่เคยเกิด: ไม่ ship engine → เขียนเองไม่ครบ → ไม่มีภาพ → report ว่าง).
- **`timeout:0` guard:** spec ต้องใส่ `test.use({ actionTimeout: 15000, navigationTimeout: 30000 })` + `test.setTimeout(180000)` — ไม่งั้น `.fill()`/`.click()` บน element ไม่ actionable (readonly/overlay) จะค้างถาวร. input `readonly` (date picker) → set-value+dispatch แทน `.fill()`.
- **Server-side validation ต้อง bypass client control ก่อนยิง** (maxlength/disabled/pattern) + assert `value.length` จริง ไม่งั้น false-positive.
- **HTML report** ใช้ central template `qa-shared/execution-report.js` — ฝังภาพ base64, multi-image gallery ต่อ TC ผ่าน `imgsForTC` + `evidence/captions.json`; แก้ CSS/layout ที่ template กลางที่เดียว.

---

## หมายเหตุขอบเขต plugin (V2)

- Plugin นี้ = **สาย Spec-Kit QA เต็ม (00-pre → 10)** = 15 owned skills + 3 community helper (e2e-testing-patterns, playwright-generate-test, playwright-best-practices).
- skill ที่เอกสารอาจอ้างถึงแต่ **ไม่ได้อยู่ใน plugin นี้** (เป็น QA Pipeline สาย Google-Sheet คนละสาย): `/ba-analysis`, `/qa-test-cases`, `/qa-playwright-script`, `/qa-expert` — ถ้าเครื่องปลายทางไม่มี ให้ข้ามการอ้างอิงนั้น.
- ตัวอย่าง path เช่น `playwright/<feature>/build-execution-report.js` หรือ spec อ้างอิงเฉพาะโปรเจกต์ = **ตัวอย่างประกอบ** ไม่ใช่ dependency; ถ้าไม่มีบนเครื่องปลายทางให้ยึดคำอธิบายในเอกสารนี้แทน.

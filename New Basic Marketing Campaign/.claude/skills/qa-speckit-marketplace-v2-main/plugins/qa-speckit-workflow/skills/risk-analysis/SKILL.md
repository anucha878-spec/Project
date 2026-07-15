---
name: risk-analysis
description: "risk prioritization gate (analysis-only): ประเมิน risk 6 แกน จัด CRITICAL/HIGH/MEDIUM/LOW → Risk-Based QA Report + heatmap + P0–P3 execution priority. Spec-Kit 05."
allowed-tools: Bash(node:*)
---
<!-- qa-speckit:provision (auto) — copy bundled qa-shared/ into <project>/qa-shared/ (copy-if-missing) so relative refs resolve on any machine -->
> 🔧 **Setup (ทำเป็นสเต็ปแรก ครั้งเดียวต่อโปรเจกต์):** ให้แน่ใจว่าโปรเจกต์นี้มี `qa-shared/execution-report.js` + `qa-shared/evidence.js` + `qa-shared/CONVENTIONS.md` + `qa-shared/init-index.js` — ถ้ายังไม่มี ให้รันด้วย Bash เพื่อ copy จาก plugin bundle:
>
> ```bash
> node -e "try{require(process.env.CLAUDE_PLUGIN_ROOT+'/qa-shared/provision.js')}catch(e){}"
> ```
>
> ถ้า `CLAUDE_PLUGIN_ROOT` ไม่ถูกตั้ง: หา plugin `qa-speckit-workflow` ใต้ `~/.claude/plugins` แล้ว copy `qa-shared/{execution-report.js,evidence.js,CONVENTIONS.md,init-index.js}` มาไว้ที่ `qa-shared/` ของโปรเจกต์นี้


You are a **Senior QA Risk Analyst** working in a Spec-Kit + Claude Code AI Agent workflow.

หน้าที่: skill นี้เป็น **downstream analysis gate** — รัน **หลังจาก** `/requirement-review` (01) → **`/e2e-flow-designer`** (02, → `qa/02-e2e-test-patterns.md`) → `/test-case-generator` (03) → `/coverage-review` (04) ทำงานเสร็จแล้ว → ทำ **deep risk analysis ของ testing scope** เพื่อจัดลำดับความเสี่ยง + impact ก่อน execute/automate

> ⚠️ **ขอบเขตงาน (สำคัญที่สุด):** skill นี้ **วิเคราะห์ความเสี่ยงเท่านั้น**
> - ❌ **ห้ามสร้าง test case ใหม่** (งานของ `/test-case-generator` / `/qa-test-cases`)
> - ❌ **ห้ามแก้/fix coverage issue** (งานของ upstream skills)
> - ❌ **ห้ามสมมุติว่า data ที่หายไป "มีอยู่แล้ว"** — assume missing = ความเสี่ยงสูงขึ้นเสมอ
> - วิเคราะห์เฉพาะ **risk + prioritization + production failure impact**
> - ถ้า input (requirement / E2E pattern / TC / coverage report) ไม่ชัด/ไม่เจอ → **หยุดถาม user ก่อน อย่าเดาแล้วทำ**

## 🎯 Objective
Produce a **Risk-Based QA Analysis Report** ที่บอกได้ว่า:
- ส่วนไหนของระบบ **มีโอกาส fail ใน production มากที่สุด**
- gap ไหน **อันตรายที่สุด**
- test area ไหน **ต้อง execute ก่อน**
- ที่ไหน **business impact สูงสุด**

## 📁 QA Artifact Folder (Spec-Kit)

artifact สาย QA เก็บรวมใน `spec-kit/<NNN>-<feature>/qa/` (ดู convention เต็ม + ตารางเลขลำดับ + `00-INDEX.md` template ใน qa-shared/CONVENTIONS.md → "QA Artifact Folder"). **skill นี้ = ลำดับ 05:**
- 📥 อ่าน input จาก: `qa/01-requirement-review.md`, `qa/02-e2e-test-patterns.md`, `qa/03-test-cases.md`, `qa/04-coverage-review.md`
- 💾 เซฟ output เป็น: `qa/05-risk-analysis.md`
- 📒 **INDEX (บังคับ — deterministic):** ถ้า `qa/00-INDEX.md` **ยังไม่มี** → สร้าง **สเกเลตันเต็มทุกแถวก่อน** ด้วย `node qa-shared/init-index.js spec-kit/<f>/qa "<feature-title>"` (ครบ 19 แถว 00-pre..10, หัวคอลัมน์ **`Skill`** — ห้าม `Command`; ไม่ทับของเดิม). **ห้ามเขียน/ก็อป table เอง แบบบางส่วน**. จากนั้น **Edit เฉพาะแถว 05**: สถานะ ✅ / วันที่ / input ที่ใช้
- 🧭 หา feature folder ไม่ชัด หรือ input ไฟล์ (`01`–`04`) หาย → **หยุดถาม user ก่อน** อย่าเดา

## 📥 Input Sources

### Auto-Discovery (ทำก่อนทุกครั้ง — ถ้าไม่เจอ/ไม่ชัด ให้หยุดถาม อย่าเดา)

> **ลำดับแรก: หา input ใน `qa/` ตามเลขที่ระบุในบล็อก 📁 QA Artifact Folder ด้านบนก่อนเสมอ** — เจอแล้วใช้เลย; ไม่เจอค่อยสแกน source อื่นตามด้านล่าง (ยังไม่เจอ/ไม่ชัด → หยุดถาม user)


ต้องได้ **4 อย่าง** เป็น input:

**A. Spec-Kit Requirements (with IDs)** — ดึง Requirement IDs (REQ-XXX) + business criticality
1. **Explicit path** — user ระบุไฟล์มาใน argument → ใช้ทันที
2. **Spec-Kit feature** — สแกน `spec-kit/<NNN>-<name>/` ที่ root (ไม่ใช่ `specs/`) → `spec.md` (+ `plan.md`/`data-model.md`/`contracts/`) **(ขา B: ไม่มี `spec.md` → อ่าน `spec-kit/<f>/sources/` แทน)**
   ```bash
   find spec-kit -name "spec.md" 2>/dev/null | sort
   ```
3. **BA docs** — `business-analysis/` ใน `Projects/<…>/`

**B. `/e2e-flow-designer` output (02, → `qa/02-e2e-test-patterns.md`)** — user journeys / flow breakdowns / scenario groups / state transitions / cross-system dependencies / async-timing-sensitive flows

**C. Test Case Suite (TC-XXX)** — output จาก `/test-case-generator` หรือ Google Sheet จาก `/qa-test-cases`

**D. Coverage Review Report** — output จาก `/coverage-review` (coverage %, gaps, redundancy, traceability issues, weak assertions)

**กฎ discovery:**
- เจอหลายอัน → แสดงรายการให้ user เลือก อย่าเดา
- ขาดอันใดอันหนึ่งใน 4 → แจ้ง user ว่า skill นี้ต้องการครบทั้ง 4 ชิ้นจึงวิเคราะห์ risk ได้ครบ (อย่ารัน upstream skill เอง) — ถ้า user ยืนยันให้ทำต่อด้วยเท่าที่มี ให้ mark มิติที่ขาดเป็น `[NOT PROVIDED — risk for this dimension cannot be assessed]` แทนการเดา
- requirement / TC ไม่มี ID ชัด → ถาม user เรื่อง ID scheme (อย่าสมมุติ ID เอง)

## 🧠 Risk Analysis Dimensions (วิเคราะห์ครบทั้ง 6 แกน)

### 1. Requirement Criticality Risk
- requirement ไหน business-critical
- requirement ไหน coverage แย่/ขาด

### 2. Coverage Risk
- ที่ไหน coverage missing/partial
- flow ไหน validation อ่อน

### 3. E2E Flow Complexity Risk
- workflow ซับซ้อน (multi-step, state-heavy)
- cross-system dependencies
- async / timing-sensitive flows

### 4. Defect Exposure Risk
- ที่ไหน defect มีโอกาสเกิดมากสุด
- high-change / unstable areas

### 5. Business Impact Risk
- Financial impact
- User experience impact
- Legal / compliance impact
- Data integrity risk

### 6. Automation Risk
- flaky test risk
- hard-to-automate areas
- UI instability / dynamic content risk

## ⚠️ Risk Level Classification
ทุก risk ต้อง classify เป็น: `CRITICAL` · `HIGH` · `MEDIUM` · `LOW`

## 📊 Output Format (STRICT — ตามนี้เป๊ะ)

---

### 1. Executive Risk Summary

- Overall System Risk Level: CRITICAL / HIGH / MEDIUM / LOW
- Top 3 risk areas
- Key concern summary สำหรับ QA Lead / BA / Dev

---

### 2. Critical Risk Areas (CRITICAL / HIGH ONLY)

แต่ละรายการ:
- **Risk ID:** RISK-001, RISK-002…
- **Type:** Coverage / Business / Technical / E2E / Automation
- **Related Requirement ID(s):** REQ-XXX
- **Related Test Cases:** TC-XXX (ถ้ามี)
- **Description:** อะไรที่อาจพังได้
- **Business Impact:** ถ้า fail แล้วเกิดอะไรขึ้น
- **Likelihood:** High / Medium / Low
- **Severity:** Critical / High

---

### 3. Risk Heatmap (Logical Grouping)

จัดกลุ่ม:
- 🔴 High Business Risk Areas
- 🟠 High Technical Complexity Areas
- 🟡 Weak Coverage Areas
- 🔵 Automation Risk Areas

---

### 4. Missing Risk Signals

ระบุ:
- areas ที่ไม่มี test coverage **และ** business impact สูง
- flows ที่ E2E pattern ไม่ครบ
- requirements ที่ validation depth อ่อน
- silent failure risks (ไม่มี assertion / check อ่อน)

---

### 5. Test Execution Priority Ranking

ranked list:
1. **P0 — Must execute first** (critical risk)
2. **P1 — High priority**
3. **P2 — Medium priority**
4. **P3 — Low priority**

แต่ละรายการต้องมี:
- Flow / Requirement reference
- เหตุผลของ priority

---

### 6. Risk Coverage Matrix

| Requirement ID | Coverage Quality | Risk Level | Notes |
|----------------|------------------|------------|-------|
| REQ-001        | High             | LOW        | OK |
| REQ-002        | Low              | HIGH       | Missing negative tests |

---

### 7. Recommendations (QA Strategy Level)

strategic recommendations เช่น:
- ที่ไหนควรเพิ่ม test depth
- flow ไหนควร re-design
- area ไหนควร automate ก่อน
- ที่ไหนต้อง manual testing

---

## 🚨 Rules (เข้มงวดแบบ QA สายธนาคาร/fintech/enterprise)
- ❌ **ห้าม** generate test cases
- ❌ **ห้าม** modify/fix coverage
- ❌ **ห้าม** สมมุติว่า data ที่หายไปมีอยู่
- ✅ เข้มงวด: **missing coverage = ความเสี่ยงสูงขึ้น**
- ✅ โฟกัส **production failure impact** เสมอ
- ✅ คิดแบบ QA Lead ใน fintech / enterprise
- ทุก risk level / priority ต้อง justify จากของจริง (REQ/flow/TC/coverage ที่มีจริง) ไม่ใช่เดาลอย ๆ
- ขอบเขต/ไฟล์/feature ไม่ชัด → **หยุดถามก่อน**

## 🧾 Output Style
- Structured markdown
- Executive-level readability
- Strong prioritization
- Risk-first mindset
- No storytelling

## 🔗 ตำแหน่งใน QA Pipeline
`SA/BA spec (spec-kit/)` → `/requirement-review` → **`/e2e-flow-designer`** (02, → `qa/02-e2e-test-patterns.md`) → `/test-case-generator` → `/coverage-review` (coverage gate) → **`/risk-analysis`** (risk prioritization gate — จัดลำดับก่อน execute/automate) → `/qa-automation-script` (06a) → 06b execute

> **สาย Spec-Kit (numbered 00–10):** 00 `/test-plan` → 01 `/requirement-review` → 02 `/e2e-flow-designer` → 03 `/test-case-generator` → 04 `/coverage-review` → **05 `/risk-analysis` (skill นี้)** → 06 `/test-data-generator` → 06a `/qa-automation-script` → 06b execute → 07 `/result-analysis` → RTM `/qa-reconcile` (cross-gate) → 08 `/qa-report-generator` → 09 `/redmine-logging` → 10 `/qa-retest`. **NEXT ในสายนี้ = 06 `/test-data-generator`** (เจอ high-risk uncovered → loop-back 03 ก่อนไปต่อ)

> **ต่างจาก `/coverage-review` อย่างไร:** `/coverage-review` ตอบว่า "cover ครบหรือยัง" (gap/overlap/traceability). `/risk-analysis` ตอบว่า "ถ้าไม่ครบ/ถ้าพัง — อันไหนอันตรายสุด ต้องทำก่อน" — รับ coverage report + requirement + E2E patterns + TC มาประเมิน risk + prioritize execution เท่านั้น ไม่สร้าง/ไม่แก้อะไร

## 🔁 Loop-back เมื่อเจอ high-risk ที่ยังไม่ถูก cover (05 → 03)
skill นี้ **analysis-only** (ไม่สร้าง TC) — แค่ **ชี้** missing-risk-signal / high-risk area ที่ยังไม่มี TC รองรับ. ดังนั้นถ้าเจอ **CRITICAL/HIGH risk ที่ไม่มี TC cover** หรือ missing risk signal → ปิดท้าย report ด้วย section **"Next Step: Loop-back"** ระบุ:
- ต้อง**วนกลับ `/test-case-generator` (03)** เพิ่ม TC สำหรับ risk ที่ยังไม่ cover (list TC + risk ที่อ้าง)
- แล้ว **re-run `/coverage-review` (04) → `/risk-analysis` (05)** ยืนยันก่อนไป `06`
- อัปเดต `qa/00-INDEX.md`: bump **รอบ (iteration) +1** เฉพาะแถว 03/04/05 ที่รันซ้ำ + แก้วันที่
- **loop เฉพาะเมื่อมี high-risk uncovered** — ทุก CRITICAL/HIGH มี TC cover แล้ว → ไม่ต้องวน

## Self-Update
หลังงาน ถ้าเจอ: risk dimension/type ใหม่ที่ควรประเมิน · เกณฑ์ likelihood/severity ที่ user ปรับ · โครง coverage report / E2E patterns / TC แบบใหม่ · priority scheme ใหม่ (P0–P3 หรืออื่น) · business impact category ใหม่ → **อัปเดต skill นี้ทันที** (ไม่รอให้ถาม) เพิ่ม example/section ให้ตรง convention ที่เพิ่งเรียนรู้ — ห้ามลบ rule เดิมเว้นแต่ผิด แล้วแจ้ง user: "Skill updated: [สรุปสั้น]"

---

$ARGUMENTS

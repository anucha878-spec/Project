# QA Spec-Kit Marketplace (V2)

Claude Code **marketplace** ที่รวม QA Spec-Kit Execution Workflow แบบ **skill-based** ครบวงจร
(V1 เป็น command-based — V2 นี้สะท้อนเครื่อง maintainer ที่ migrate commands → skills แล้ว)

## ติดตั้ง

```
/plugin marketplace add tjcasllt/qa-speckit-marketplace-v2
/plugin install qa-speckit-workflow@qa-marketplace-v2
```

อัปเดตเป็นเวอร์ชันล่าสุด:

```
/plugin marketplace update qa-marketplace-v2
```

## มีอะไรใน plugin `qa-speckit-workflow`

**15 owned QA skills** (เรียงตาม pipeline):

| ลำดับ | skill | หน้าที่ |
|---|---|---|
| 00-pre | `/source-ingest` | (leg B) crawl wiki/เอกสาร generic → `sources/` |
| 00 | `/test-plan` | scope / test levels / entry-exit criteria |
| 01 | `/requirement-review` | (leg A: spec.md) QA review + 00b atom inventory |
| 01 | `/requirement-review-generic` | (leg B: เอกสารทั่วไป) QA review + 00b atom inventory |
| 02 | `/e2e-flow-designer` | flow / state machine / scenario artifact |
| 03 | `/test-case-generator` | executable TC + traceability (+ Google Sheet upload) |
| 04 | `/coverage-review` | coverage gap / overlap / missing-negative audit |
| 05 | `/risk-analysis` | risk P0–P3 + heatmap |
| 06 | `/test-data-generator` | test data 6 หมวด (synthetic) |
| 06a | `/qa-automation-script` | gen Playwright spec.js + readiness gate |
| 07 | `/result-analysis` | วิเคราะห์ผลรัน 6 มิติ + production readiness |
| RTM | `/qa-reconcile` | REQ→atom→TC→Data→Risk→Result→Defect + RTM |
| 08 | `/qa-report-generator` | final QA report + HTML execution report (GO/NO-GO) |
| 09 | `/redmine-logging` | findings → Redmine issue tickets |
| 10 | `/qa-retest` | retest defect (FIXED/STILL_FAILING/INCONCLUSIVE) |

**3 community helper skills:** `e2e-testing-patterns`, `playwright-generate-test`, `playwright-best-practices`

**Shared:** `qa-shared/execution-report.js` (central HTML execution-report template) + `qa-shared/CONVENTIONS.md` (QA convention + artifact-folder + `00-INDEX.md` template) + `templates/template_test_case.xlsx`

## ⚙️ Prerequisites บนเครื่องปลายทาง (สำคัญ)

Plugin พกพาได้ในตัว **ยกเว้น** creds/URL ที่ commit ไม่ได้ (เป็นความลับ/เฉพาะองค์กร) — ต้อง config เองบนเครื่องที่ใช้:

| skill ที่ต้องใช้ | ต้องมี | หมายเหตุ |
|---|---|---|
| `/source-ingest`, `/redmine-logging`, `/qa-retest` | env `WIKI_USER` + `WIKI_PASS` ใน `settings.json` | ใช้เข้า Confluence/Redmine ขององค์กร |
| (เฉพาะที่แตะ wiki/redmine) | URL องค์กร (default ในสกิลชี้ `wiki.thaisamut.co.th` / `redmine.ochi.link`) | องค์กรอื่นเปลี่ยนเป็นของตัวเอง |
| `/test-case-generator` (Step 03b/07b upload) + HTML report | Google OAuth token (`token.json`) ถ้าจะ upload Sheet | optional — ข้ามได้ถ้าไม่ upload |

> **skill อีก 12 ตัว + HTML execution report ทำงานได้ทันทีไม่ต้องมี creds** — เฉพาะ 3 ตัวที่แตะ wiki/redmine เท่านั้นที่ต้องตั้ง env ก่อน (เหมือนที่เครื่อง maintainer ตั้งไว้ใน settings.json).

## Portability (ทำไมรันได้ทุกเครื่อง)

owned skill แต่ละตัวอ้าง `qa-shared/CONVENTIONS.md` + `qa-shared/execution-report.js` แบบ **project-relative**
(เหมือนเครื่อง maintainer ที่มี `qa-shared/` ที่ root). แต่ละ skill มี **Setup step** ที่รัน provisioner
คัดลอก bundled `qa-shared/` เข้า `<project>/qa-shared/` (copy-if-missing) — จึงไม่พึ่ง env var ที่ไม่ถูก
substitute ใน prose. artifact ทั้งหมดอ่าน/เขียนใต้ `spec-kit/<feature>/qa/`

## Maintainer flow

แก้ต้นฉบับที่ `~/.claude/skills/<skill>/SKILL.md` + `qa-shared/` ตามปกติ แล้วรัน
`bash sync-from-source-v2.sh ["commit message"]` (gitignored, maintainer-local) — มันจะ copy + ทำ
portability transform + commit + push ให้อัตโนมัติ แล้วบอกทีม `/plugin marketplace update qa-marketplace-v2`

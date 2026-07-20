# speckit-qa — สรุปภาพรวม Skill (Software-QA phase ของ Spec Kit)

> เอกสารสรุปการทำงานของ skill `speckit-qa` ทั้งหมด: 4 modes + security focus, bundles ที่เพิ่ม,
> agents, workflow, ข้อดี/ข้อเสียเทียบ Manual และประมาณการเวลา
> อัปเดต: 2026-06-29

---

## 1. speckit-qa คืออะไร

Skill สำหรับ **Software-QA phase** — ทดสอบ *พฤติกรรมจริงของระบบ* (ไม่ใช่ตรวจคุณภาพ requirement)
วางหลัง `/speckit-tasks` (ออกแบบ test) และหลัง `/speckit-implement` (รัน + รายงาน)

แยกจาก skill คุณภาพอื่น:
| Skill | ทำอะไร | ทดสอบระบบ? |
|---|---|---|
| `speckit-checklist` | ตรวจว่า *requirement* เขียนดีไหม ("unit test for English") | ❌ |
| `speckit-analyze` | สแกน consistency ระหว่าง spec/plan/tasks | ❌ |
| **`speckit-qa`** | ออกแบบ + รัน + บันทึกการ **verify behavior** จริง | ✅ |

**หลักการแกนกลาง:** Traceability (FR/BR/NFR → TC → ผล → defect) · **No-fabrication** (ไม่รัน = `Not Run` ห้ามตี `Pass`) · Deterministic IDs

---

## 2. Modes ทั้งหมด

| Mode | เรียกเมื่อ | Output หลัก | เรียก Agent? |
|---|---|---|---|
| `design` (default) | หลัง tasks ก่อน implement | scenarios(BDD) + csv tracker + **Checklist 16-col** + xlsx | ❌ |
| `execute` | หลัง implement | ผล Pass/Fail → csv + **เปิด Redmine เมื่อ Fail** | ✅ |
| `report` | หลังรัน SIT/UAT | `verify-sit-run_<date>.md` + Defect Log + **Residual Risk** | ❌ |
| `security` | (= design scoped) | security TC เชิงลึก (TC-049+) | ❌ |
| `regression` | หลัง SA แก้ spec / Dev แก้ defect | impact re-test + `verify-regression-run_<date>.md` + transitions | ✅ (ผ่าน execute) |

เรียกใช้: `/speckit-qa <mode>` เช่น `/speckit-qa design`, `/speckit-qa regression defect #12345`

---

## 3. Bundles ที่เพิ่มเข้า skill (session 2026-06-29)

### 3.1 Playwright E2E runner → `execute §5.1` · `scripts/playwright/`
รัน E2E จริงแบบ reproducible แทนการ map หลักฐานเก่าอย่างเดียว
- `README.md` (playbook, 2 paths) · `playwright.config.ts` · `tests/e2e.spec.ts` (TC↔test() contract + `evidence()`)
- `sync-results.mjs` (results.json → CSV status) · `run.ps1` / `run.sh`
- **กฎ:** ต้องมี app รันที่ `QA_BASE_URL`; app ไม่ถึง = ห้าม fabricate

### 3.2 Test Checklist 16-col → `design §4(c)` · `templates/test-checklist.md`
`Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark`
- generate ใน test-scenarios §4 + xlsx twin · **ห้าม fabricate** col 12-14

### 3.3 Residual Risk → `report §6` · `templates/residual-risk.md`
จัด severity (Blocker/Critical/Major/Minor) ของ Not Run/Blocked + **coverage discount**
- **Critical/Blocker un-covered → block "go" verdict**

### 3.4 Defect → Redmine → `execute §5.2` · `templates/redmine-defect.md` + `scripts/redmine/create-defect.mjs`
เจอ Fail → dedup-search → เปิด/comment Redmine → เขียน `#id` กลับ `Defect_Ref`/`Redmine No.`
- REST API (env `REDMINE_URL/API_KEY/PROJECT`) หรือ Playwright browser fallback
- **ห้าม auto-close** — QA เปิด/คอมเมนต์เท่านั้น

### 3.5 Regression mode → `§6.5` · `templates/regression.md`
re-test เฉพาะ impact set + P1 smoke → ตรวจ transition
- `Pass→Fail` = **regression** → เปิด Redmine `[regression]`
- `Fail→Pass` = fix confirmed (comment, ไม่ auto-close)

---

## 4. โครงสร้างไฟล์ skill

```
.claude/skills/speckit-qa/
├── SKILL.md                          4 modes: design · execute · report · regression
├── SUMMARY.md                        (ไฟล์นี้)
├── templates/
│   ├── test-checklist.md             16-col execution format
│   ├── residual-risk.md              severity triage + coverage discount
│   ├── redmine-defect.md             defect → Redmine playbook
│   └── regression.md                 impact selection + transitions
└── scripts/
    ├── playwright/
    │   ├── README.md  playwright.config.ts  sync-results.mjs  run.ps1  run.sh
    │   └── tests/e2e.spec.ts
    └── redmine/create-defect.mjs
```

---

## 5. Agents ที่ execute/regression เรียกใช้

| Agent | หน้าที่ | แก้โค้ด? | เข้ามาตอน |
|---|---|---|---|
| `ecc:tdd-guide` | บังคับ write-tests-first, coverage ≥80% | ✅ test+code | ก่อน/ระหว่างเขียนโค้ด |
| `ecc:e2e-runner` | gen/run E2E (Agent Browser / Playwright), เก็บ screenshot/video/trace | ✅ test | หลังมี UI |
| `ecc:pr-test-analyzer` | ตรวจ coverage ครบ/มีคุณภาพ (behavioral) | ❌ read-only | หลังมี test |

นอกจาก agent: `/ecc:test-coverage`, `/ecc:browser-qa`, `/verify` (built-in)
> หมายเหตุ: session 2026-06-29 ใช้ **MCP Playwright browser tools ตรงๆ** แทน e2e-runner agent (เร็ว/ตรวจสอบได้กว่า เมื่อ code อยู่ remote)

---

## 6. Workflow เต็มวงจร

```
design (TC + checklist)
  → execute (รันจริง → Fail → เปิด Redmine #id → sync CSV)
    → report (Defect Log + Residual Risk → verdict go/no-go/partial-pass)
      → SA แก้ spec / Dev แก้ defect
        → regression (impact re-test → Pass→Fail? → เปิด Redmine [regression])
```

---

## 7. ข้อดี / ข้อเสีย — speckit-qa vs Manual Test

| ประเด็น | speckit-qa | Manual |
|---|---|---|
| ออกแบบ TC | ✅ เร็ว ครอบ 6 dimensions | ❌ ช้า ตกหล่น edge/security |
| Consistency / Traceable | ✅ deterministic | ⚠️ ขึ้นกับคน |
| Reproducible / Regression | ✅ suite รันซ้ำ + impact-select | ❌ ทำมือซ้ำทุกรอบ |
| Defect + Report | ✅ auto Redmine + verify doc | ❌ เขียนเอง |
| ความน่าเชื่อถือผล | ⚠️ เสี่ยง fabricate ถ้าไม่คุม | ✅ คนเห็นกับตา |
| Exploratory / UX | ❌ ทำไม่ได้ | ✅ จุดแข็งคน |
| Env/access ซับซ้อน | ⚠️ ติดถ้า app ไม่ถึง | ✅ คนปรับตัวได้ |
| ต้นทุน | ⚠️ token สูง | 💰 ค่าแรง/เวลา |

**Hybrid คุ้มสุด:** speckit-qa ทำ design + execute(automatable) + regression + report (~80%); คนทำ exploratory + UX + sign-off (~20%)

---

## 8. ประมาณการเวลา (อิง 48-59 TC, tester 1 คน, SIT พร้อม)

| งาน | Manual | speckit-qa |
|---|---|---|
| ออกแบบ TC + BDD + checklist | 1-2 วัน | ~5-15 นาที |
| Setup test data | 2-4 ชม. | 1-2 ชม. |
| รัน execution | 6-10 ชม. | unit วินาที + E2E 1-3 ชม. |
| Defect tickets | 15-30 นาที/ใบ | auto |
| รายงาน + verdict | 2-4 ชม. | ~5-10 นาที |
| **รวม 1 รอบ** | **~2-3 วัน** | **~0.5-1 วัน** |
| **Regression รอบถัดไป** | ~1-2 วัน | **~1-3 ชม.** |

> ⚠️ Execution จริงช้ากว่าทฤษฎีเพราะ env access / app remote / cost gate (session นี้รันจริงได้ 8/48 TC); จุดประหยัดสุดคือ **regression**

---

## 9. สถานะ feature 002 (อ้างอิงตอนสร้างเอกสาร)

- TC ทั้งหมด: 59 (48 base + 11 security) · Pass 8 / Fail 0 / Not Run 51
- Verdict: `partial-pass (conditional)` — 4 Critical un-covered (TC-040 SQLi, TC-041 XSS, TC-046/047 SMS Job) block "go"
- Artifacts: `test-scenarios_*.md` (§1-5), `test-cases_*.csv`, `test-cases_*.xlsx`, `verify-sit-run_2026-06-29.md`, `evidence/` (13 รูป)
- ค้าง: execute security TCs · ปิด 4 Critical · cleanup test record `QA_SMOKE_1782718745182` บน SIT · เลข Redmine (PRE-1) · ตัดสิน 001 (PRE-2)

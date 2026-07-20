# SIT Test Document — full company template (bundled into `speckit-qa report`)

`report` mode does **two** things now:
1. writes the execution record `verify-sit-run_<date>.md` (SKILL §6), and
2. **bundles the full Test Case set produced by `speckit-qa design`** (the `test-cases_<feature>.csv` +
   16-col checklist in `test-scenarios_<feature>.md`) into the **company SIT Test Document** layout below —
   emitted as `SIT-Test-Document_<feature>.md` (+ a `.xlsx` on request, one worksheet per section).

This is the standard EDW/IFRS17 SIT Test Document (8 worksheets). The **Test Checklist** worksheet is the
one every design TC maps into. Reference memory: `sit-test-document-template.md`.

## Worksheets (8, in order)

| # | Sheet | Purpose | Source when generating |
|---|-------|---------|------------------------|
| 1 | Revision History | version log + sign-off block | fill version 0.1 / prepared-by; sign-off left blank for humans |
| 2 | Test Summary | project header + metrics + Major Issue/Concern | compute metrics from the tracker CSV (see Metrics) |
| 3 | Test Plan | reference docs list | spec/plan artifacts (spec.md, plan.md, tasks.md, checklist) |
| 4 | Timeline | Gantt | leave to human unless dates given |
| 5 | **Test Checklist** | **every design TC, 17-col** | **1 row per TC from `test-cases_<feature>.csv`** |
| 6 | Redmine | defect export | rows from `report` Defect Log / `create-defect.mjs` results |
| 7 | Test Data | fixtures | design Preconditions / Test Data column |
| 8 | Var | dropdown vocab | copy the enum lists below verbatim |

## Sheet 5 — Test Checklist (17 columns, EXACT order & headers)

`Test Execution Order | Test Checklist ID | Application | Feature * | Test Case Type * | Test Objective | Test Condition | Test Step | Expected Results | Test Data | Feature Priority | Test Case Priority | Test Status * | Tested By | Tested Date | Redmine No. | Remark`

### Mapping: `speckit-qa design` output -> this 17-col row

| SIT column | Fill from design | Transform |
|---|---|---|
| Test Execution Order | run order | P1 smoke first, then by dependency; integer, 1-based |
| Test Checklist ID | `TC_ID` | verbatim (`TC-001`) |
| Application | plan.md app / `System` | e.g. `Enterprise Data Warehouse`, `Centralized SMS (epirusapp)` |
| Feature * | spec `FR` id + name | e.g. `FR-006 SMS Birthday Content Maintenance` |
| Test Case Type * | `Dimension` | Positive->`Functional (Happy Path)`; Negative->`Negative Test`; Edge->`Validation`; Security->`Security`; Concurrency->`Load`; Side-Effect->`Integration` (or `Business Logic`); Performance->`Performance` |
| Test Objective | `Scenario_Name` / objective | one phrase |
| Test Condition | `Preconditions` | data state / role |
| Test Step | `Steps` | numbered if multi-step |
| Expected Results | `Expected_Result` | include ERR/SUC code |
| Test Data | design Test Data | redacted/synthetic — never raw production PII |
| Feature Priority | business priority | `Feature Priority 1/2/3` (from spec; default 1 for core FR) |
| Test Case Priority | `Priority` | P1->`High`; P2->`Medium`; P3->`Low` |
| Test Status * | `Status` | Pass->`Passed`; Fail->`Failed`; Blocked->`Pending`; Not Run->`Not Start`; (conditional pass)->`Passed with Condition` |
| Tested By | `Tested By` | who/method; **blank if Not Start** |
| Tested Date | run date | `YYYY-MM-DD` (or พ.ศ. `DD/MM/YYYY` per project standard); blank if Not Start |
| Redmine No. | `Defect_Ref` | ticket id, else `-` |
| Remark | `Notes` | evidence / caveat |

**No-fabrication (same rule as the rest of the skill):** a TC is `Passed`/`Failed` only when actually
executed. Un-run TCs are `Not Start` with Tested By / Tested Date blank. `report` copies statuses from the
tracker CSV — it does not invent them.

## Sheet 2 — Test Summary metrics (compute from tracker CSV)

- `% Ready for Test` = TCs with a runnable build / total (default 1.0 if implemented)
- `% Expected Passed` = expected pass target (default 1.0)
- `% Actual Passed` = (`Passed` count) / (total TCs)   e.g. 14 Passed / 59 = 0.237
- Major Issue/Concern rows = each open Critical/Blocker from Residual Risk + each Failed TC's defect.

## Sheet 8 — Var (dropdown vocab — copy verbatim)

- **Test Status**: `Not Ready for Test` / `Not Start` / `In Progress` / `Failed` / `Passed with Condition` / `Passed` / `Cancelled`
- **Test Case Type**: `Functional (Happy Path)` / `Security` / `Integration` / `Business Logic` / `Negative Test` / `Validation` / `Performance` / `Compatibility` / `UI/UX` / `Load`
- **Test Case Priority**: `High` / `Medium` / `Low`
- **Feature Priority**: `Feature Priority 1` / `Feature Priority 2` / `Feature Priority 3`
- **Root Cause**: `Under Investigated` / `Requirement Change` / `Change Request` / `Bug` / `Question` / `Production Issue`
- **Root Cause Category**: `Requirement` / `Design` / `Development` / `Testing` / `Production Issue`
- **Phase**: `Development` / `SIT` / `UAT` / `Go-live`

## Sheet 6 — Redmine (defect export columns)

`id | project | tracker | status | priority | author | assigned_to | parent | subject | description | start_date | due_date | done_ratio | is_private | estimated_hours | total_estimated_hours | spent_hours | total_spent_hours | created_on | updated_on | closed_on | root_cause | application | screen | phase`

Populate from the `report` Defect Log / `scripts/redmine/create-defect.mjs` return; `tracker="Defect"`.

## Generating the .xlsx (optional, on request)

Markdown (`SIT-Test-Document_<feature>.md`, one `## Sheet N — Name` heading per worksheet) is the default
deliverable. When the user wants a real Excel file, run the bundled generator (self-contained Node, no npm —
env has no python/pandas):

```
node .claude/skills/speckit-qa/scripts/genxlsx.js <FEATURE_DIR>/SIT-Test-Document_<feature>.md <FEATURE_DIR>/SIT-Test-Document_<feature>.xlsx
```

`genxlsx.js` parses each `## Sheet N — Name` section + its markdown tables into one worksheet, and writes a
valid .xlsx (OOXML zip via Node `zlib` + CRC32). **Data-only**: it does not reproduce charts, dropdown
data-validation, cell styling/merge, or column widths from the company template — add those in Excel if the
handoff requires the full formatting.

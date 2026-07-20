# Test Checklist — 16-column execution format (bundled into `speckit-qa design`)

`design` mode emits, in addition to the BDD scenarios + tracker CSV, a **Test Checklist** section in
`test-scenarios_<feature>.md` using the standard 16-column layout below (and a parallel
`test-checklist_<feature>.csv` when an Excel-friendly export is requested). One row per TC; reuse the
same `TC-###` IDs so it stays traceable to the BDD scenarios and the tracker.

## Columns (exact order, exact headers)

| # | Column | Fill from | Notes |
|---|--------|-----------|-------|
| 1 | Test Checklist ID | TC ID (`TC-001`) | same IDs as BDD/CSV |
| 2 | System | plan.md stack / app name | e.g. `Centralized SMS (epirusapp / NBS Web Platform)` |
| 3 | Feature | spec FR id + name | e.g. `FR-006 SMS Birthday Content Maintenance` |
| 4 | Screen | spec §4 screen | `List View` / `Add-Edit Form` / `Confirm Dialog` / `SMS Job` |
| 5 | Sub Category | functional area | `List` / `Search` / `Create` / `Edit` / `Cancel` / `Audit` / `Soft Delete` / `Security` / `Concurrency` / `Side-Effect` / `Performance` |
| 6 | Test Objective | what the TC proves | one phrase |
| 7 | Test Condition | preconditions | data state / role / setup |
| 8 | Test Step | action(s) | concise, numbered if multi-step |
| 9 | Expected Result | pass criteria | error/success code where relevant |
| 10 | Test Data | concrete inputs | redacted/synthetic; never raw production PII |
| 11 | Priority | `P1` / `P2` / `P3` | from BDD matrix |
| 12 | Test Status | `Pass` / `Fail` / `Blocked` / `Not Run` | mirror the tracker CSV; `Not Run` until observed |
| 13 | Tested By | who/method | e.g. `boss (Playwright/SIT)`; blank if Not Run |
| 14 | Tested Date (YYYY-MM-DD) | run date | ISO `YYYY-MM-DD`; blank if Not Run |
| 15 | Redmine No. | ticket ref | `-` until the feature has a Redmine Task/Defect number |
| 16 | Remark | evidence / caveat | screenshot filename, defect ref, or note |

## Rules

- **Never fabricate columns 12–14.** A TC is `Pass` only when actually executed; otherwise `Test Status =
  Not Run` with `Tested By` / `Tested Date` left blank (same no-fabrication rule as the rest of the skill).
- Keep `System` / `Feature` constant down the table (they describe the feature, not the row).
- Markdown table in `test-scenarios_<feature>.md`; for the CSV twin use the same headers, comma-separated,
  quote any cell containing a comma. Dates are `YYYY-MM-DD`.
- Re-running `design` is deterministic: same TC set → same rows; only columns 12–16 change as execution
  progresses (kept in sync by `speckit-qa execute` / `report`).

## Blank row template (copy per TC)

```
| TC-XXX | <System> | <Feature> | <Screen> | <Sub Category> | <Objective> | <Condition> | <Step> | <Expected> | <Test Data> | P? | Not Run |  |  | - | <Remark> |
```

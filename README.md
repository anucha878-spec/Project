# Project

Analysis, QA, and design artifacts for four projects.

| Folder | Contents |
|---|---|
| `New Basic Marketing Campaign` | QA artifacts for CSMS campaigns (Welcome LINE, Welcome Round 2, Grace Period 7 Days, Customer Birthday) — test scenarios, test cases, and synthetic test data |
| `Group RI` | Group Reinsurance system — UAT/SIT test artifacts, test cases, and automation scripts |
| `Individual New RI` | Individual Reinsurance — specification and database comparison analysis |
| `Marketing Campaign Management Platform` | MCMP — BRD, solution/DB design, WBS crosscheck, test design, and presentation decks |

## Notes

- All test data is **synthetic**. Names, national IDs, phone numbers, and policy numbers are
  fabricated — no real customer PII is present.
- `node_modules/` and meeting recordings are excluded (see `.gitignore`). Run `npm install`
  in folders containing a `package.json` to restore dependencies.

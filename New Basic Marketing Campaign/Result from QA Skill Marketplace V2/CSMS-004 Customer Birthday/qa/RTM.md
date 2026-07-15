# RTM — Reconciliation & Traceability Matrix — CSMS-004 Customer Birthday

- **Skill:** `/qa-reconcile` (cross-gate, before 08) · **Date:** 2026-07-09
- **Scope this run:** PARTIAL — design-side chain `REQ → atom → TC → Data → Risk` is complete; `Result → Defect → Issue` are `[NOT PROVIDED]` (07 blocked, no execution).

## 1. Reconciliation Verdict
- **PARTIAL PASS (design-side)** — no orphan/dangling in the design chain; result/defect columns pending execution.
- **Counts:** REQ (FR) = 20 (incl. sub-FR) · atoms = 60 · TC = 54 (50 executable-design + 4 blocked-RQ) · Test Data = 24 · Risk = 8 (RISK-001..008) · Result = 0 (06b blocked) · Defect = 0 (07 blocked) · Redmine issue = see `09` (RQ/would-be only).
- **Count equation:** TC 54 = pass 0 + fail 0 + fixme 54 (all Not Run) ✅ consistent with 06b blocked.

## 2. Orphan (forward gap)
- **Design chain:** none. Every FR → ≥1 TC; every ✅ atom → ≥1 TC; every P0/P1 TC → test data.
- **Result gap (expected):** all TCs lack execution results — attributable to 06b BLOCKED, not an authoring orphan.

## 3. Dangling (backward)
- None. All TC→FR refs exist in spec; all TD→TC refs exist in `03`; all Risk→TC refs exist. Blocked TCs correctly reference RQ-002/005/006/007.

## 4. Count Mismatch
- None across `03`/`04`/`05`/`06`. Coverage % consistent (100% design-side) in 03 and 04.

## 5. RTM (Consolidated)

| REQ | Atoms | TC | Test Data | Risk | Result | Defect/Issue |
|-----|-------|----|-----------|------|--------|--------------|
| FR-001 | AT-001,002 | TC-005 | TD-001 | LOW | Not Run | — |
| FR-002 | AT-003,004,005 | TC-001..004 | TD-001,002,003 | LOW | Not Run | — |
| FR-003 | AT-006,007 | TC-006,052 | TD-002,024 | MEDIUM | Not Run | RQ-005 (would-be) |
| FR-003a | AT-008,009 | TC-007,008,009 | TD-005,006 | RISK-004 HIGH | Not Run | — |
| FR-004 | AT-010,011,012 | TC-004,010,011,012 | TD-004,008 | MEDIUM | Not Run | — |
| FR-005 | AT-013,014 | TC-019,020,021 | TD-011,012 | MEDIUM | Not Run | — |
| FR-006 | AT-015,016 | TC-013,014,018 | TD-009 | HIGH | Not Run | — |
| FR-007 | AT-017,018,019 | TC-015,016,017,018 | TD-007,010 | HIGH | Not Run | — |
| FR-008 | AT-020,021 | TC-022,023 | TD-013,014 | RISK-006 HIGH | Not Run | — |
| FR-009 | AT-022..025 | TC-024..028 | TD-013,015 | RISK-001 CRIT | Not Run | RQ-010 (would-be) |
| FR-009a | AT-026,027,028 | TC-029,030 | TD-016 | RISK-001 CRIT | Not Run | — |
| FR-008b | AT-029,030,031 | TC-031,032,033 | TD-020 | RISK-003 HIGH | Not Run | RQ-003 (would-be) |
| FR-008c | AT-032,033,034 | TC-034,035 | TD-021 | RISK-003 HIGH | Not Run | — |
| FR-010 | AT-035,036,037 | TC-043,051 | TD-018,024 | RISK-005 HIGH | Not Run | RQ-002 (would-be) |
| FR-010a | AT-038..043,057 | TC-036..041 | TD-018,023 | RISK-002 CRIT | Not Run | — |
| FR-010b | AT-044,045,046 | TC-042 | TD-017 | MEDIUM | Not Run | — |
| FR-011 | AT-047,048 | TC-044 | TD-019 | HIGH | Not Run | — |
| FR-012 | AT-049,050,051,059 | TC-045,046,047,053 | TD-004,019,024 | RISK-007 HIGH | Not Run | RQ-004,006 (would-be) |
| FR-013 | AT-052,053 | TC-041,048,054 | TD-024 | MEDIUM | Not Run | RQ-007,008 (would-be) |
| FR-014 | AT-054,055,056 | TC-050 | TD-022 | RISK-008 HIGH | Not Run | — |
| (edge) | AT-058 | TC-049 | TD-014 | HIGH | Not Run | RQ-009 (would-be) |

## 6. Next Step
- **Design-side reconcile = PASS.** Proceed to `08-qa-report.md` (verdict must reflect Result/Defect = pending execution).
- Re-run `/qa-reconcile` after 06b execution + 07 + 09 to close Result/Defect/Issue columns.

# RTM — Reconciliation + Traceability Matrix — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/qa-reconcile` (cross-gate, before 08) · **Date:** 2026-07-09
- **Scope:** **PARTIAL** — design-side chain only (REQ → atom → TC → Data → Risk). Result/Defect columns = `pending execution` (07/09 BLOCKED). Counts taken from actual rows in `00b`/`03`/`06`/`05`.
- **Inputs:** `qa/00b` (61 atoms), `qa/03` (65 TC), `qa/04`, `qa/05`, `qa/06` (30 TD). `07`=`[NOT PROVIDED]`, `09`= candidates only (no tickets).

## 1. Reconciliation Verdict
- **PARTIAL PASS (design-side).** No orphan / no dangling in the REQ→atom→TC→Data→Risk chain. Result→Defect reconciliation **deferred** (no execution).
- **Counts:** REQ = 21 FR · atoms = 61 (✅55 / ❓3 / 🔒3) · TC = 65 (0 pass / 0 fail / 65 not-run; 5 `[BLOCKED]`) · Test Data = 30 datasets · Risk = 7 (CRITICAL 1 / HIGH 6) · Defect = pending · Issue = 8 candidates (none created).

## 2. Orphan (forward gap — upstream without downstream)
- **REQ → TC:** none. 21/21 FR have ≥1 TC.
- **atom → TC:** none. 61/61 atoms have ≥1 TC (`MISSING_ATOM_COVERAGE` = 0).
- **TC → Data:** all P0/P1 TCs have datasets. Some P2/P3 TCs share aggregate datasets (TD-022/024/029/030) — acceptable per risk-based depth (P2/P3 = partial/minimal). No P0/P1 `NO DATA`.
- **CRITICAL/HIGH risk → TC:** RISK-001..007 each have TCs (see §5). None uncovered.
- **executed TC → result:** **pending** — 0 executed (06b blocked).

## 3. Dangling (backward — references a non-existent target)
- **TC → REQ:** none dangling — every TC cites a real FR in `spec.md`.
- **Data → TC:** none — every TD `related_tc` exists in `03`.
- **Risk → REQ/TC:** none — RISK-001..007 cite real FR/TC.
- **Defect/Issue → TC/REQ:** RM-CAND-01..08 all cite real FR/atom/TC. No tickets created (generate-only) → no live dangling.

## 4. Count Reconciliation
- `TC pass + fail + fixme/not-run = 0 + 0 + 65 = 65` = TC total ✅ (all `test.fixme` in spec).
- Blocked TC (5: TC-027,036,044,050,060) ↔ RQ (5: RQ-001..005) 1:1 ✅.
- `defect CRITICAL+HIGH = Redmine P0+P1`: **N/A this round** (no executed defects; candidates only). No mismatch to flag.
- Numbers in `03`/`04`/`05`/`06` agree (65 TC, 61 atoms, 21 FR, 7 risks, 30 TD) — no cross-artifact contradiction.

## 5. RTM (Consolidated — design-side)
| REQ | Atom(s) | TC | Test Data | Risk | Result | Defect/Issue |
|-----|---------|-----|-----------|------|--------|--------------|
| FR-001 | 001 | TC-001 | TD-001 | RISK-001 | pending | — |
| FR-002 | 002,003,004 | TC-001,002,003,010,011,014 | TD-001,002,003,008,010 | RISK-001 | pending | — |
| FR-003 | 005 | TC-008,009 | TD-008 | boundary | pending | — |
| FR-004 | 006 | TC-012,013 | TD-009 | selection | pending | — |
| FR-005 | 007,008,009 | TC-015,016,017,018 | TD-011,012 | RISK-001 | pending | — |
| FR-006 | 010,011,012 | TC-001,004,005,006 | TD-001,004,005,006 | RISK-001 | pending | — |
| FR-007 | 013 | TC-007 | TD-007 | RISK-001 | pending | — |
| FR-008 | 014,018 | TC-019,022 | TD-013,016 | RISK-006 | pending | — |
| FR-008a | 015 | TC-020 | TD-014 | RISK-006 | pending | — |
| FR-008b | 016,017 | TC-023,024,025 | TD-017 | RISK-003 | pending | — |
| FR-009 | 019,020,021 | TC-026,027 | TD-018,019 | RISK-002 | pending | RM-CAND-03 (RQ-001) |
| FR-010 | 022,023 | TC-028,029 | TD-020,021 | RISK-002/007 | pending | — |
| FR-011 | 024,059,061 | TC-030,031,032,064,065 | TD-022 | message | pending | — |
| FR-011a | 025 | TC-021 | TD-015 | RISK-006 | pending | — |
| FR-012 | 026,027,028,029 | TC-032,033 | TD-022,023 | RISK-004 | pending | — |
| FR-012a | 030 | TC-034 | TD-023 | RISK-004 | pending | — |
| FR-013 | 031,032,033,034,035,036 | TC-035,036,037,038 | TD-024,025 | RISK-005 | pending | RM-CAND-01 (RQ-002) |
| FR-014 | 037 | TC-039 | TD-001 | integration | pending | — |
| FR-015 | 038 | TC-040 | TD-001 | integration | pending | — |
| FR-016 | 039,040 | TC-041,065 | TD-026 | RISK-007 | pending | — |
| FR-016a | 041,042,043 | TC-042,043,045,029 | TD-026,021 | RISK-007 | pending | — |
| FR-017 | 044 | TC-044 | TD-030 | RQ-003 | pending | RM-CAND-04 (RQ-003) |
| FR-018 | 045,046,047,048 | TC-024,046,047,048,049,050,051 | TD-017,027,030 | RISK-003 | pending | RM-CAND-02 (RQ-004) |
| FR-019 | 049,050,051,052 | TC-052,056,057,058,059,060 | TD-028,029,030 | date-valid | pending | RM-CAND-05 (RQ-005) |
| FR-020 | 053,056 | TC-052,054 | TD-028 | RISK-002 | pending | — |
| FR-020a | 054 | TC-053 | TD-028 | boundary | pending | — |
| FR-020b | 055 | TC-054,055 | TD-028 | RISK-002 | pending | — |
| FR-021 | 057,058 | TC-061,062,063 | (report — DB-derived) | reconcile | pending | — |

## 6. Next Step
- **Design-side reconciliation = PASS** → proceed to `08` using this RTM as Appendix.
- **Cannot earn GO** — Result/Defect columns are `pending execution`; re-run `/qa-reconcile` **after** `06b`→`07`→`09` to complete the forward (executed TC→result) and backward (defect→issue) checks.

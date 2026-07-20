# Template: `RTM_<feature>.md` — Traceability Reconciliation (bundled into `speckit-qa` — mode `report`, §6.7)

Ported from the marketplace `qa-reconcile` cross-gate so `speckit-qa report` reconciles the **whole QA chain**
before it issues a verdict — no separate `/qa-reconcile` command. **Audit-only**: it reports broken links; it
never edits an artifact and never fabricates a count. Runs as the **first step of `report`**, ahead of
Result-Analysis (§6.8) and the verdict (§6.9).

**Why here.** `report` is the one point where every artifact in the chain exists at once —
`REQ → atom → TC → Data → Risk → Result → Defect`. Coverage (§4.6) only audits the `REQ/atom → TC` slice and
runs *before* execution, so it cannot see `Result`/`Defect`. Reconciling the full chain here stops a GO/NO-GO
verdict (§6.9) from being issued on a chain with an orphan (a P0 risk with no TC, an executed TC with no
recorded result) or a dangling ref (a defect citing a TC that does not exist).

## Inputs (read whatever exists in `FEATURE_DIR`; mark missing as `[NOT PROVIDED]`, never guess)

| Chain node | Source artifact |
|------------|-----------------|
| REQ | `spec.md` (FR-###/SC-###) |
| Atom | `atom-inventory_<feature>.md` (§3.5.i, ✅-specified atoms) |
| TC | `test-cases_<feature>.csv` + `test-scenarios_<feature>.md` |
| Data | `test-data_<feature>.json` |
| Risk | `risk-analysis_<feature>.md` |
| Result | `verify-sit-run_<date>.md` / synced CSV `Status` |
| Defect | Defect Log / `Defect_Ref` / Redmine |

## Reconciliation checks — count from real rows every run (never hardcode)

**1. Forward coverage** (upstream → does it have the required downstream?)
- **REQ → TC** — every `FR-###` has ≥1 TC (else gap → `design`).
- **atom → TC** — every ✅-specified atom has ≥1 TC, else `MISSING_ATOM_COVERAGE` (→ `design`).
- **TC → Data** — every P0/P1 TC has a bound test-data record (else `NO_DATA` → `test-data`).
- **CRITICAL/HIGH risk → TC** — every high-risk FR has a covering TC (else high-risk uncovered → `risk`/`design`).
- **executed TC → Result** — every TC that should have run has a recorded result (else coverage gap at execute).

**2. Backward integrity** (endpoint → does it point at something real? — *dangling*)
- **TC → REQ** — every TC cites a REQ that **exists** in `spec.md` (a cited REQ that is absent = dangling).
- **Result → TC** — every result row maps to a designed TC (an orphan result = dangling).
- **Defect → TC** — every defect cites a real TC (a defect on a non-existent TC = dangling).
- **Data → TC/REQ** — every `test-data` record binds to a real `tc_id`+`req_id` (unbound record = dangling).

## File — `RTM_<feature-slug>.md`

```markdown
---
id: <feature-id>
phase: verify
sub-phase: report — traceability reconciliation (RTM)
run-date: <YYYY-MM-DD>
verdict: <clean | broken>            # broken ⇒ report §6.9 cannot be GO
counts: { req: <n>, atom: <n>, tc: <n>, orphan: <n>, dangling: <n> }
---

## Centralized RTM
| REQ / Atom | TC | Data | Risk | Result | Defect | Status |
|------------|----|------|------|--------|--------|--------|
| FR-004 | TC-012, TC-013 | ✅ | P1 | Pass | — | ✅ linked |
| AT-002 | — | — | — | — | — | ⚠ MISSING_ATOM_COVERAGE |
| FR-007 | TC-020 | ✅ | P0 | — | — | ⚠ orphan: executed-TC-without-result |
| — | TC-099 | — | — | Fail | DEF-099 | ⚠ dangling: TC-099 not in design set |

## Reconciliation Findings (count from rows above)
- **Orphans (forward):** <list — REQ/atom/risk with no downstream> · count: <n>
- **Dangling (backward):** <list — TC/Result/Defect/Data citing something absent> · count: <n>

## Verdict
- **clean** — no orphan on a P0/P1 chain, no dangling ref → proceed to §6.8 / §6.9.
- **broken** — list each finding and route it to its owning mode (`design` / `risk` / `test-data` / `execute`);
  the report verdict (§6.9) is capped below GO until the chain is reconciled and `report` is re-run.
```

## Rules

- **Audit-only** — reconcile never creates/edits a TC, data record, risk row, or defect; it only flags the
  broken link. Fixing = loop back to the owning mode, then re-run `report`.
- **No fabrication** — count from the actual artifact rows; a required artifact that is missing is
  `[NOT PROVIDED]` (that dimension is un-reconciled), never a guessed pass.
- **Deterministic** — recount from files each run; never trust a prior `RTM_<feature>.md` or a stale
  `verify-sit-run_<date>.md`. Same artifacts ⇒ same rows and counts.
- **Stay in lane** — this is the whole-chain gate; per-slice `REQ/atom→TC` audit still belongs to `coverage`
  (§4.6). Reconcile runs at report time to guard the verdict, not to replace coverage.

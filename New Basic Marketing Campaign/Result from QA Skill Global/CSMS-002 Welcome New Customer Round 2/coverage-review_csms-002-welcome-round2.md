---
id: csms-002-welcome-round2
phase: qa
sub-phase: coverage-review
run-date: 2026-07-09
iteration: 1
verdict: gaps-found
---

# Coverage Review — CSMS-002 Welcome New Customer รอบ 2 (Ocean Club App)

Audit-only gate over `test-cases_csms-002-welcome-round2.csv` + `test-scenarios_csms-002-welcome-round2.md`
against the FR/SC spine. This gate never writes or edits TCs — findings loop back to `design` (or, for a
spec-structure issue, upstream to the SA / `/speckit-checklist`).

## Pass 1 — Gap (FR/SC with zero mapped TC)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| — | (no requirement clause is left with zero TC) | — | — | Every FR-001…FR-020.2 clause and every buildable SC-001…SC-007 maps to ≥1 TC — see the FR→TC table in `test-scenarios`. |

**No missing-TC gaps.** Behavioral coverage of the spine is complete (26 FR clauses + 7 SC, coverage 100%).

## Pass 2 — Overlap (redundant TCs)

| TCs | Same condition asserted | Recommendation |
|-----|------------------------|----------------|
| TC-024, TC-043 | Both exercise the 1-message-per-customer guard (FR-013.1) — TC-024 within a single round, TC-043 under concurrent Manual-Fix + daily | **Keep both** — different execution contexts (grouping vs concurrency); not true redundancy. Noted for awareness only. |
| TC-022, TC-029, TC-033 | All three end in "round stopped + FR-019 failure email" | **Keep both/all** — distinct trigger causes (service-down / no-config / file-failure). They share the *assertion* (email) but not the *precondition*; merging would drop trigger coverage. |
| TC-036, TC-037 | Both assert `sent_status='F'` + NULL date (FR-018.2) | Partial overlap: TC-036 is the S-vs-F semantics matrix; TC-037 is specifically the gateway-failure path. Keep TC-037 as a distinct integration trigger; do not merge. |

No auto-deletion recommended.

## Pass 3 — Missing Negative/Edge (adversarial catalog) + ambiguity findings

| FR/Field | Field type | Adversarial rows covered / missing | Missing dimension | Status |
|----------|-----------|-------------------------------------|-------------------|--------|
| FR-015 insured name (${var1}) → SMS + CSV sink | free-text | **Covered**: formula-injection `=`,`+`,`@` (TC-030), embedded comma/quote/newline (TC-030), unicode/emoji/combining (TC-031), max-length 256 (TC-031). | Security / Negative / Edge | OK |
| FR-002/FR-003 cohort day (numeric/date) | date/int | **Covered**: N-1 / N / N+1 boundary (TC-003), empty-cohort day (TC-004), mid-campaign N change (TC-045), Manual-Fix date−N (TC-042). | Edge / Boundary | OK |
| FR-005 phone | text/enum | **Covered**: mobile1 primary, mobile2 fallback, both-empty, changed-since-round-1 (TC-008…011). | Negative / Edge | OK |
| FR-011 registration result | enum/status | **Covered**: E13 error (TC-020), empty channel / empty isBlockLine out-of-condition (TC-021). | Negative / Edge | OK |
| FR-004 Inforce status | enum | **Covered**: per-type allowed-set boundary — ORD '2' rejected (TC-007), IND '2'/GOV '3' accepted (TC-005). | Edge / Boundary | OK |
| FR-017 CSV | file/encoding | **Covered**: UTF-8 + filename pattern (TC-032), injection sink (TC-030), unicode/long rendering (TC-031). | Security / Edge | OK |

**No missing adversarial rows.** All free-text / numeric / date / enum fields carry their applicable
negative + edge + security cases from `templates/negative-input-catalog.md`.

### Ambiguity / structural finding (drives the `gaps-found` verdict)

| Ref | Finding | Severity | Action |
|-----|---------|----------|--------|
| **AMB-01** | **FR-020.2 merges two distinct requirements** into one number: (1) the Manual-Fix date-range interpretation (selected date = process date; cohort = date − current N) **and** (2) the daily central **reconcile-report** content + ORD/IND/GOV/PA breakdown. The reporting requirement therefore has **no FR number of its own** and is easy to miss when scanning FR titles. | **HIGH** (traceability / requirement-structure — not a data-integrity breach, but a real gap in how the reporting requirement is tracked and signed off) | Route to **`/speckit-checklist`**: split FR-020.2 → keep FR-020.2 = Manual-Fix date rule; mint a new **FR-021 = daily reconcile report**. QA already covers the *behavior* (TC-042 for the date rule, TC-044 for the report), so **no new TC is needed** — but TC-044's `Requirement` must be re-pointed to the new FR id once the spec is renumbered, and `design`/`coverage` re-run (iteration → 2). |
| AMB-02 | **Policy-type code characters** unresolved: source shows filter codes as digits `0`/`1` (ORD/IND) while the log map uses letters `O`/`I`/`G`/`P`. Spec assumes letters (inherited from CSMS-001, treats digits as PDF-conversion drift). | MEDIUM | Confirm the real code characters against the actual data structure in `plan`. TC-034 asserts the letter map; its expected value must be reconciled if the system uses digits. Assumption to confirm — not a test gap. |
| AMB-03 | **GOV scope**: source Pre-event listed only ORD/IND/PA; Clarifications add GOV. | LOW (resolved in spec) | TC-005 / TC-013 explicitly include GOV so any upstream narrowing is caught by test. No action beyond keeping those TCs. |

## Verdict

**`gaps-found`** — *not* because any requirement lacks a TC (behavioral coverage is 100%), but because a
**structural/traceability gap (AMB-01)** must be fixed upstream: the daily reconcile-report requirement has to
be given its own FR number so it is independently trackable and sign-off-able. This is deliberately surfaced as
`gaps-found` rather than silently passed, per the skill's no-fabrication / traceability-first principle.

**Loop-back guidance:**
- **No `/speckit-qa design` TC additions are required** — the test set already covers all behavior.
- The fix is a **spec edit** (SA / `/speckit-checklist`): split FR-020.2, add FR-021 (reconcile report).
- After the spec is renumbered, re-run `design` (to re-point TC-044's `Requirement` to FR-021) then re-run
  `coverage` — expected to flip to `covered` at **iteration 2**.
- If the team accepts the merged FR-020.2 as-is (PO decision), record that acceptance and the verdict can be
  treated as `covered` with AMB-01 logged as an accepted residual documentation risk.

## Coverage Summary

- Total FR clauses: **26** · with ≥1 TC: **26** · **coverage % = 100**.
- Total SC (buildable): **7** · with ≥1 TC: **7**.
- Total TCs: **46**.
- CRITICAL gaps (missing TC for a core rule / MUST-principle): **0**.
- HIGH structural/ambiguity findings: **1** (AMB-01, FR-020.2 merge) → drives `gaps-found`.
- MEDIUM/LOW ambiguities to confirm in `plan`: **2** (AMB-02 type-code chars, AMB-03 GOV scope — resolved).

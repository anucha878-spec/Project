---
id: csms-004-birthday
phase: verify
sub-phase: crosscheck (BRD/FRD → spec conformance)
status: blocked (upstream source document not available — 0 CRITICAL / 0 HIGH assessed; gate not run)
run-date: 2026-07-09
source-docs:
  - path: SPEC_BATCH-CSMS-004_BirthDay.md
    kind: SA-spec (Process Specification)
    ref: "UR20260070 Basic Campaign (MCMP); last edited 06/05/2026 by อัครวัฒน์ วัฒธนพงษ์ — REFERENCED BY NAME ONLY, file not present in workspace"
  - path: _learn/2026-07-07/2147_CSMS-004_BirthDay_QUICK-REFERENCE.md
    kind: UR (learn note / clarification summary)
    ref: "REFERENCED BY NAME ONLY, file not present in workspace"
spec-version: "spec.md — Draft, Created 2026-07-07 (feature branch 005-batch-birthday-sms)"
verified-by: speckit-qa crosscheck (automated) — blocked, no source ingested
---

# Crosscheck Report — BRD/FRD → Spec Conformance — CSMS-004 (Customer Birthday)

## VERDICT: `blocked`

**The BRD/FRD → spec conformance gate cannot be executed.** The upstream Source Requirement documents are
**referenced by name inside `spec.md` but are not present in the QA workspace**, and no path was supplied in
the invocation. Per the skill's no-fabrication rule, this gate **does not invent source requirements** —
it stops and requests the source.

### Source discovery (per SKILL §3.5.a)
1. **Explicit path in arguments** — none provided.
2. **Reference line inside `spec.md`** — two upstream documents are cited (`spec.md:L11–L14`):
   - `SPEC_BATCH-CSMS-004_BirthDay.md` — *Process Specification, UR20260070: Basic Campaign (MCMP)*.
   - `_learn/2026-07-07/2147_CSMS-004_BirthDay_QUICK-REFERENCE.md` — *สรุป + จุดที่ต้อง clarify*.
   Neither file resolves to a readable artifact in the QA output scope or the provided spec folder.
3. **Auto-detect by name pattern** (`FRD*`, `BRD*`, `UR *`, `SPEC_FR*`, `*requirement*`) in the feature
   directory and repo root — **no candidate file found**.

Result: **abort with request for the source**, do not guess.

## Traceability Matrix

_Not produced._ A two-way source ⇄ spec matrix requires an ingestible upstream document. None is available,
so no Source IDs can be minted and no Covered / Gap / Conflict / Partial / Extra-Scope / Ambiguous rows can
be classified without fabrication.

| Source ID | Source Requirement (short) | Spec FR/SC | Match | Finding | Severity | Note |
|-----------|----------------------------|------------|-------|---------|----------|------|
| — | (source not available) | — | — | — | — | Gate blocked — supply `SPEC_BATCH-CSMS-004_BirthDay.md` |

## Findings

None assessed — the gate did not run. **No conformance judgement (Covered / Gap / Conflict) should be
inferred from this file.** The design/risk/coverage/test-data artifacts in this folder were derived from
`spec.md` alone and therefore assume `spec.md` faithfully carries the UR; that assumption is **unverified**
until this crosscheck is completed against the real source.

### Self-declared source deviations already noted inside `spec.md` (to re-verify once source is available)
These are drift/ambiguity items the SA flagged against the source; they are the first rows to check when the
crosscheck is later run (they are **candidates** for `Conflict`/`Ambiguous`, not conclusions here):
- **Category code** — source §5 states `'113'`/`MKTWelcomeNewCust`; spec uses `'112'`/`MKTBirthday` and
  declares §5 a copy-paste error from CSMS-001 (spec Assumptions, `spec.md:L236`). → verify against source.
- **Birthday field name** — source uses both `birthdate` (§3) and `birthday` (§5); spec treats them as one
  field (`spec.md:L237`). → verify.
- **Dedup table name** — source §3.3 `CSMS-CUSTOMER_BIRTHDAY` vs spec `CUSTOMER_BIRTHDAY` (`spec.md:L239`). → verify.
- **`sms_sent_date` type** — declared `DATE` but sample is a timestamp (`spec.md:L238`). → verify semantics.
- **GOV inclusion** — source §3 includes GOV in every filter, but the `CUSTOMER_BIRTHDAY` sample lists only
  ORD/IND/PA (`spec.md:L240`). Spec asserts GOV MUST be recorded. → verify.
- **US5 acceptance-scenario numbering scrambled (1,6,7,2,3,4,5)** — an internal spec inconsistency
  (`spec.md:L136–L144`); routes to `/speckit-analyze` for artifact consistency but re-confirm the scenario
  set is complete against the source.

## Coverage Summary
- Source requirements total: **unknown** (source not ingested)
- % Covered: **n/a**
- Count per finding type: Gap 0 · Conflict 0 · Partial 0 · Extra 0 · Ambiguous 0 (gate not run)
- CRITICAL: 0 assessed · HIGH: 0 assessed
- Constitution MUST-principles implied by source but missing from spec: **not assessable** without source

## Next Actions
1. **Provide the upstream source** and re-run: `/speckit-qa crosscheck "<path>/SPEC_BATCH-CSMS-004_BirthDay.md"`
   (and the learn note). Excel/Word sources → convert first via `scripts/read-source.mjs`.
2. Until then, **downstream artifacts (design/risk/coverage/test-data) proceed on `spec.md` as the working
   baseline** but the spec-vs-source conformance remains **unverified** — do not treat "verified" as complete.
3. When the source arrives, prioritise the six self-declared deviations above (category code `112` vs `113`
   is the highest-value `Conflict` candidate — a wrong category code sends the wrong SMS template/file name).

**Read-only on `spec.md` — this gate reports and requests; it does not edit the spec.**

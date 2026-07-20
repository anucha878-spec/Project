# speckit-qa regression (bundled into `speckit-qa` — mode `regression`)

Re-verify the feature after a **change**, selecting only the TCs the change can affect (plus a safety
smoke band), and flag any **`Pass → Fail` transition** as a regression defect.

## Two triggers

| Trigger | Who | What changed |
|---------|-----|--------------|
| **Spec change** | SA | spec.md edited — a FR/BR/NFR added, removed, or altered |
| **Defect fix** | Dev | a Redmine Defect resolved — code changed to fix a failing TC |

## Impact selection (build the regression set)

**A. Spec change (SA):**
1. Diff the spec (git diff, or the SA's change note) → list changed requirement IDs (`FR-###`, `BR-###`, `NFR-###`).
2. Select every TC whose `Requirement` column references a changed ID → these are **directly impacted**;
   set their `Test Status = Not Run` (their old result is stale).
3. Add the **safety band**: all `P1` smoke TCs + every TC sharing the same `Screen` / `Sub Category` as the change.
4. If a requirement was *added*, first run `design` to create its TCs, then include them.

**B. Defect fix (Dev):**
0. **Link the defect id first (Gap-2 fix).** The impact set is selected by matching the `Defect_Ref` column.
   If the resolved Defect was opened **outside our `execute`** (e.g. by another QA team, so its `#id` is only
   in `Notes` or nowhere), it will NOT be selectable yet. First **map it**: find the TC(s) whose scenario
   corresponds to that defect and write the `#<id>` into their `Defect_Ref` column (keep traceability). If
   **no** TC matches, the defect is uncovered → run `design` to create the TC, link the id, *then* retest —
   never retest against an empty set and call it "clean".
1. For each resolved Defect, take the TC(s) carrying that `Defect_Ref`.
2. Regression set = those TC(s) **+** all `P1` smoke **+** TCs in the same `Screen`/`Sub Category`
   (a fix often breaks a neighbour).

Always keep the set as small as the change allows, but never smaller than "directly impacted + P1 smoke".
`log()`/state explicitly what was selected and what was deliberately skipped.

## Procedure

1. Establish the **baseline** = the last recorded statuses (CSV / latest `verify-sit-run_*.md`).
2. Run the regression set via `execute` (Playwright bundle for E2E, agents/unit for the rest).
3. Compare each result to baseline and classify the **transition**:
   - `Pass → Pass` — stable.
   - `Fail → Pass` — **fix confirmed**. Comment "retest <date> — verified fixed" on the Redmine ticket;
     **keep** the `Defect_Ref` as history with `Test Status = Pass` and Remark "fix verified <date>, #<id>
     pending Dev close". Do **not** blank the id and do **not** auto-close (Dev/1ST close). *(Gap-3 fix.)*
   - `Fail → Fail` **on a defect-fix retest** — **fix NOT effective** *(Gap-1 fix)*. Do **not** open a
     duplicate; instead comment "retest <date> — still failing, fix not effective" on the existing
     `Defect_Ref` ticket and **reopen** it if Dev had moved it to Resolved. Keep `Test Status = Fail` + the
     `Defect_Ref`. (A silent Fail→Fail that leaves the ticket "Resolved" is the exact hole this closes.)
   - `Pass → Fail` — **REGRESSION** → open a Redmine Defect via `templates/redmine-defect.md`, subject prefixed `[regression]`.
   - `Not Run → Pass/Fail` — newly covered.
4. Write a run record `verify-regression-run_<date>.md` (reuse the `report` layout) with an extra
   **Transitions** table: `| TC ID | Baseline | Now | Transition | Defect_Ref |`.
5. **Update the Test Cases — MANDATORY.** A regression run always writes results back to the tracker; a result
   that lives only in `verify-regression-run_<date>.md` is not done. For **every re-run TC in the impact set**
   (and only those — untouched TCs keep their baseline rows verbatim):
   - **`test-cases_<feature>.csv`** — set `Status` to the new result; update `Defect_Ref` per the policy above
     (Fail→Pass keeps the id as history with `Status=Pass`, Fail→Fail keeps `Fail`+id, Pass→Fail gets the new
     `[regression]` id); append a dated `Notes` line (`re-verified <YYYY-MM-DD>: <observation>`).
     **Never silently blank a `Defect_Ref`** — the ticket lifecycle is owned by Dev/1ST, QA only annotates.
   - **16-col checklist in `test-scenarios_<feature>.md`** (+ any `test-checklist_<feature>.csv` twin) — mirror
     `Test Status` + `Redmine No.`, and fill `Tested By` / `Tested Date (<YYYY-MM-DD>)` for the re-run rows only
     (never fabricate them for TCs not re-run).
   - **`.xlsx` twins if present** (`test-cases_<feature>.xlsx`, `SIT-Test-Document_<feature>.xlsx`) — regenerate
     from the updated markdown/CSV via `node scripts/genxlsx.js <input.md> <out.xlsx>` so the deliverable stays
     in sync. If a twin is open/locked (`.~lock..#`), report it and skip rather than failing the run.
   - Deterministic & traceable: same TC IDs, only impact-set rows change, every changed cell ties to an
     observed result. Close with a one-line summary of what was updated.

## Verdict

- **Any `Pass → Fail` ⇒ regression fail** — the change is not safe to ship until reconciled.
- All impacted TCs `Pass` + no new `Pass→Fail` ⇒ regression clean for the selected scope (state the scope —
  it is not a full re-test unless every TC was run).

## Invocation

`/speckit-qa regression` then describe the trigger, e.g.:
- `regression spec FR-006 BR-002` (SA changed those requirements), or
- `regression defect #12345` (Dev fixed that Redmine issue → re-test its TCs + smoke).

## Rules

- A regression run **records real results only** (no-fabrication). A TC not actually re-run stays at its
  baseline status and is reported as "not re-run", never silently "Pass".
- Selection must be justified: every TC in the set traces to the change or the smoke band; every excluded
  impacted TC is named with a reason.
- Deterministic: same change + same baseline → same selected set.

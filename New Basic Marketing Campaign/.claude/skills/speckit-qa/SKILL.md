---
name: "speckit-qa"
description: "Specialized Software-QA phase for Spec Kit. Cross-checks the SA spec against the upstream user requirement (BRD/FRD/UR) for conformance & traceability, designs a traceable test plan and BDD test cases from spec.md/plan.md/tasks.md, optionally drives execution via ECC QA agents, and records a SIT/UAT execution result with a defect log. Complements speckit-checklist (requirements quality) and speckit-analyze (artifact consistency) by covering both spec-vs-source conformance and actual verification of behavior."
argument-hint: "Mode + focus, e.g. 'crosscheck', 'design', 'execute', 'report', or a focus area like 'security regression'"
compatibility: "Requires spec-kit project structure with .specify/ directory"
metadata:
  author: "anucha (custom QA extension)"
  source: "custom — fills the verification gap in the speckit workflow"
  pairs-with: "speckit-checklist, speckit-analyze, speckit-implement"
  ecc-agents: "ecc:pr-test-analyzer, ecc:test-coverage, ecc:e2e-runner, ecc:browser-qa, ecc:tdd-guide"
user-invocable: true
disable-model-invocation: false
---


## Purpose: Real QA, not requirements QA

This skill is the **Software-QA phase** of the spec-kit flow. Place it **after** `/speckit-tasks`
(to design tests) and **after** `/speckit-implement` (to execute and report).

Know the difference between the quality skills so they are not confused:

- `speckit-checklist` → "unit tests for **English**" — validates that the *requirements* are well written. It does **not** test the system.
- `speckit-analyze` → read-only **consistency** scan **across the speckit artifacts themselves** (spec.md / plan.md / tasks.md). It does **not** look at the upstream source and does **not** test the system.
- `speckit-qa crosscheck` (this, mode `crosscheck`) → read-only **conformance & traceability** scan of the **SA spec (`spec.md`) against the upstream user requirement** (BRD / FRD / UR — the doc the user actually gave). Answers "does the SA's spec faithfully capture what the business asked for?" Surfaces **missing** source requirements, **extra/invented scope** not in the source, and **conflicts** (spec contradicts the source). Runs **before** `design`. It does **not** test the system.
- `speckit-qa` design/execute/report/regression → designs and records the **verification of actual behavior**: test cases, BDD scenarios, SIT/UAT execution, defects. It tests the system.

Routing: "are my requirements clear/well-written?" → `/speckit-checklist`. "are spec ↔ plan ↔ tasks consistent with each other?" → `/speckit-analyze`. **"does the SA spec match the BRD the user gave us?"** → `/speckit-qa crosscheck` (this). "does the build do what the spec says?" → `/speckit-qa design` → `execute` → `report`.

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty). The first token usually selects a **mode**:

| Mode | When to use | Primary output |
|------|-------------|----------------|
| `crosscheck` | **Before** `design` — after the SA writes `spec.md`, to confirm it matches the user's BRD/FRD/UR | `crosscheck-brd-spec_<feature>.md` — a two-way traceability matrix (source ⇄ spec) + Gap / Extra-Scope / Conflict findings with severity. **Read-only on `spec.md`** (never edits it). Also emits `atom-inventory_<feature>.md` — a testability **atom** ledger (9-category sweep) with open **RQ**s back to the SA (§3.5.i, bundles the `requirement-review` skill). Add `--qa-review` for a 6-dimension requirement-quality lens (§3.5.h) |
| `design` (default) | After `/speckit-tasks`, before implementation | `test-flows_<feature>.md` — an E2E flow / state-machine / cross-system model produced first (§4.0, bundles `e2e-flow-designer`) + `test-scenarios_<feature>.md` (Test Matrix + BDD cases) + `test-cases_<feature>.csv` (TC tracker) derived from it |
| `risk` | After `design`, before `execute` — to decide **what to test first** | `risk-analysis_<feature>.md` — 6-axis risk score per FR/TC, P0–P3 rank, and a Likelihood×Impact **heatmap** (see `templates/risk-analysis.md`). Read-only; never edits TCs |
| `coverage` | After `design` (and after `risk`) — an **audit gate** that can loop back to `design` | `coverage-review_<feature>.md` — Gap / Overlap / Missing-negative-edge findings + verdict (see `templates/coverage-review.md`). **Audit-only**: never writes TCs; if gaps found, sends you back to `design` and bumps the iteration in `00-INDEX.md` |
| `test-data` | After coverage is clean, before `execute` | `test-data_<feature>.json` — **synthetic** datasets in 6 categories, each bound to `tc_id`+`req_id` (see `templates/test-data.md`) |
| `execute` | After `/speckit-implement` | **Generates `<feature>.spec.js` from TC + test-data + flows** (§5.1, bundles `qa-automation-script`; A0 URL/creds/nav gate → embed conventions → A5 readiness gate) then drives ECC QA agents (coverage / E2E / browser) **and the bundled Playwright runner** (`scripts/playwright/`), collects pass-fail signals, syncs them into `test-cases_<feature>.csv` |
| `report` | After a test run (SIT/UAT) | `verify-sit-run_<date>.md` execution record + **`RTM_<feature>.md`** whole-chain traceability reconciliation run as a pre-verdict gate (§6.7, bundles `qa-reconcile`) (now with **Result-Analysis**: RCA / flaky / production-readiness — §6.8) + defect log + a **GO / CONDITIONAL-GO / NO-GO** verdict (§6.9) **+ `SIT-Test-Document_<feature>.md`** (design TCs bundled into the company 8-sheet / 17-col SIT format, see `templates/sit-test-document.md`) + optional self-contained **HTML report** with embedded evidence + optional single-file **two-gate Report Bundle** (UAT vs Production readiness — §6.10) |
| `regression` | After SA changes spec **or** Dev fixes a Defect | impact-selected re-test + `verify-regression-run_<date>.md` with a Pass/Fail **transitions** table |

**Pipeline order** (each step's output feeds the next; skip only with a stated reason):
`crosscheck → design → risk → coverage ⟲ (loop back to design on gaps) → test-data → execute → report → regression`.
Every mode records its artifact + iteration round in `FEATURE_DIR/00-INDEX.md` (§1.1).

If the argument is a focus area instead of a mode (e.g. `security`, `regression`, `edge cases`),
default to `design` mode scoped to that focus.

## Pre-Execution Checks

**Check for extension hooks (before QA)**:
- Check if `.specify/extensions.yml` exists in the project root.
- If it exists, read it and look for entries under the `hooks.before_qa` key.
- If the YAML cannot be parsed or is invalid, skip hook checking silently and continue normally.
- Filter out hooks where `enabled` is explicitly `false`. Treat hooks without an `enabled` field as enabled by default.
- For each remaining hook, do **not** attempt to interpret or evaluate hook `condition` expressions:
  - If the hook has no `condition` field, or it is null/empty, treat the hook as executable.
  - If the hook defines a non-empty `condition`, skip the hook and leave condition evaluation to the HookExecutor implementation.
- When constructing slash commands from hook command names, replace dots (`.`) with hyphens (`-`). For example, `speckit.git.commit` → `/speckit-git-commit`.
- For each executable hook, output the following based on its `optional` flag:
  - **Optional hook** (`optional: true`):
    ```
    ## Extension Hooks

    **Optional Pre-Hook**: {extension}
    Command: `/{command}`
    Description: {description}

    Prompt: {prompt}
    To execute: `/{command}`
    ```
  - **Mandatory hook** (`optional: false`):
    ```
    ## Extension Hooks

    **Automatic Pre-Hook**: {extension}
    Executing: `/{command}`
    EXECUTE_COMMAND: {command}

    Wait for the result of the hook command before proceeding to the Execution Steps.
    ```
- If no hooks are registered or `.specify/extensions.yml` does not exist, skip silently.

## Execution Steps

### 1. Initialize QA Context

Run `.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks` once from the
repo root and parse JSON for `FEATURE_DIR` and `AVAILABLE_DOCS`. Derive absolute paths:

- SPEC  = FEATURE_DIR/spec.md
- PLAN  = FEATURE_DIR/plan.md
- TASKS = FEATURE_DIR/tasks.md
- CONSTITUTION = `.specify/memory/constitution.md`

Abort with a clear message if a required artifact for the selected mode is missing (and name the
prerequisite command the user should run first). `crosscheck` needs SPEC **and** an upstream source
document (BRD/FRD/UR — see §3.5.a for discovery); `design` needs SPEC at minimum (TASKS strongly
preferred); `execute`/`report` additionally assume the feature has been implemented.

For single quotes in args like "I'm Groot", use escape syntax: e.g `'I'\''m Groot'` (or double-quote if possible).

### 1.1 Pipeline Ledger (`00-INDEX.md`)

Maintain `FEATURE_DIR/00-INDEX.md` as the single ledger of the QA pipeline. On **every** mode run,
create it if absent (per `templates/qa-index.md`) and upsert this mode's row:

`| Step | Mode | Artifact | Status | Iteration | Updated (YYYY-MM-DD) |`

- **Step** = pipeline position (`00 crosscheck`, `01 design`, `02 risk`, `03 coverage`, `04 test-data`,
  `05 execute`, `06 report`, `07 regression`).
- **Iteration** starts at `1`; the `coverage` loop-back (§4.6) bumps the iteration of `design`/`risk`/`coverage`
  each time gaps send you back — this makes re-work visible instead of silent.
- **Status** = `done` / `in-progress` / `blocked` / `gaps-found`. Never fabricate a `done` for a step not run.
- Deterministic: same inputs → same rows. Do not rewrite rows for steps you did not run this invocation.

### 2. Load Artifacts (Progressive Disclosure)

Load only what the active mode needs — do not dump whole files:

- **From spec.md**: Functional Requirements (FR-###), User Stories + acceptance criteria, Success Criteria (SC-###), Edge Cases, any explicit NFRs (performance/security/PDPA).
- **From plan.md**: stack/architecture, data model, external dependencies, technical constraints (these determine test *level* — Unit vs Integration vs E2E).
- **From tasks.md**: task IDs and the files/components they touch (used to map tests to implementation and to find what is testable now).
- **From constitution.md**: any MUST principle that demands a test (e.g. PDPA consent, PII masking, RBAC, audit logging). **Each such principle MUST produce at least one Security/Compliance test case.**

### 3. Build a Traceability Spine

Before writing any test, build an internal map: every `FR-###` and buildable `SC-###` → one or more
planned TC IDs. A requirement with **zero** test cases is a coverage gap and MUST be surfaced. A test
case with no mapped requirement is scope creep and MUST be justified or dropped. When an
`atom-inventory_<feature>.md` exists (§3.5.i), the spine extends to the **atom** level: every ✅-specified
atom → ≥1 TC, and any open ❓/🔒 atom rides as an RQ (not a fabricated test) until the SA answers.

### 3.5 Mode: `crosscheck` — BRD/FRD → Spec Conformance Gate

**Run this BEFORE `design`.** It is a read-only conformance check that answers a single question:
**does the SA's `spec.md` faithfully capture the user's upstream requirement (BRD / FRD / UR)?** Designing
test cases against a spec that already drifted from the BRD bakes the drift into the tests — this gate
catches it first. This mode **never edits `spec.md`**; it only writes a report and (on request) proposes edits.

**a. Locate the upstream source document(s).** In priority order:
1. An explicit path in `$ARGUMENTS` (e.g. `crosscheck ../FRD_Birthday_Campaign.md`, or an `.xlsx`).
2. A `FRD อ้างอิง` / `FRD reference` / `BRD` / `UR` line **inside `spec.md`** or `SPEC_FR*.md` — resolve it to a file.
3. Auto-detect in FEATURE_DIR and the repo root by name pattern (case-insensitive):
   `FRD*`, `BRD*`, `UR *`, `SPEC_FR*`, `*requirement*` with extension `.md` / `.xlsx` / `.docx`.
   If **multiple** candidates match, list them and ask the user which is the source of truth — do not guess.
   If **none** is found, abort with: "No upstream BRD/FRD/UR found — pass its path: `/speckit-qa crosscheck <path>`."

**b. Ingest the source by format** (progressive disclosure — pull requirement statements, business rules,
field/validation tables, permitted values, out-of-scope lists; skip cover pages / revision history):
- **Markdown** (`FRD_*.md`, `SPEC_FR*.md`) — read directly.
- **Excel** (`*.xlsx`) — convert to text first with the bundled Node reader, then read the emitted markdown:
  `node .claude/skills/speckit-qa/scripts/read-source.mjs "<file.xlsx>" "<FEATURE_DIR>/.cache/<name>.md"`
  (self-contained, no npm — dumps one markdown table per worksheet + a sheet index; shared strings and
  cached formula values are resolved, blank cells kept for column alignment). Caveat: dates come out as
  Excel serials (data-only) — read them from the requirement text, not the serial. If the file can't be
  parsed, say so and ask the user to export the sheet to CSV/MD rather than fabricating requirements.
- **Word** (`.docx`) — extract text with `read-source.mjs "<file.docx>"` (paragraph text), or ask the user
  for a `.md`/`.txt` export. Never read raw `.docx` bytes as requirements.

**c. Build the two-way traceability spine.** Assign a stable **Source ID** to each atomic source requirement
(reuse the source's own IDs — `FRD-##`, `BR-##`, section numbers — else mint `SRC-001…` in document order).
Map each Source ID → the `FR-###` / `SC-###` / scope statement in `spec.md` that satisfies it, and each
`spec.md` FR/SC → back to a Source ID. Both directions are required; a one-way map hides half the findings.

**d. Detection passes** — classify every row into exactly one finding type:

| Finding | Meaning | Typical severity |
|---------|---------|------------------|
| `Covered` | Source req has a faithful, equivalent spec FR/SC | — |
| `Gap (Missing)` | Source requires it; **no** spec FR/SC covers it | **CRITICAL** if core business rule / permission / data integrity; else HIGH |
| `Conflict` | Spec **contradicts** the source (different value, rule, limit, permission, workflow) | **CRITICAL** |
| `Partial / Weakened` | Spec covers it but drops a condition, boundary, or permitted-value the source states | HIGH |
| `Extra Scope` | Spec FR/SC has **no** basis in the source (invented / gold-plated) | HIGH (flag for SA/PO confirmation — may be an approved change, may be scope creep) |
| `Ambiguous mapping` | Cannot confidently map — source or spec wording too vague | MEDIUM → route wording issues to `/speckit-checklist` |

Compare **values, not just presence**: field lengths, permitted enum values, role/permission matrices,
soft-vs-hard delete, in-scope/out-of-scope tables, numeric/date limits. A source that says "Hard Delete ❌"
against a spec that allows hard delete is a `Conflict`, not `Covered`. Spec contradictions *within* the
speckit artifacts still route to `/speckit-analyze`; requirement-wording quality routes to `/speckit-checklist`
— note the handoff, do not duplicate their job here.

**e. Constitution gate.** Any constitution MUST-principle the **source** implies (PDPA consent, PII masking,
RBAC, audit) that `spec.md` fails to carry forward is an automatic **CRITICAL** `Gap`.

**f. Write the report** `FEATURE_DIR/crosscheck-brd-spec_<feature-slug>.md` per `templates/crosscheck-report.md`:
YAML frontmatter (source file(s) + hash/size + spec version + run-date + verdict), a **Traceability Matrix**
(`| Source ID | Source Requirement (short) | Spec FR/SC | Match | Finding | Severity | Note |`, one row per
source req **and** one row per unmapped spec FR), a **Findings** list grouped by severity, and a **Coverage
Summary** (source reqs total, `% Covered`, count per finding type, CRITICAL count). Deterministic: same
source + same spec → same IDs and counts. **Do not modify `spec.md`.**

**g. Verdict & handoff.** Any open `CRITICAL` (`Conflict` or core `Gap`) ⇒ **not ready for `design`** — the SA
must reconcile `spec.md` with the source (or the PO must approve the deviation) first. Then:
- If clean (no CRITICAL/HIGH) → "Conformance OK — proceed to `/speckit-qa design`."
- Else → list the blocking rows and recommend `/speckit-specify` (fix spec) or an explicit PO sign-off for
  each `Extra Scope`. Offer: "Want me to propose concrete `spec.md` edits for the top N findings?" (propose a
  diff for approval — **never auto-apply**).

Invoke as `/speckit-qa crosscheck` (auto-detect source) or `/speckit-qa crosscheck <path-to-BRD>`.

**h. Optional `--qa-review` lens (requirement quality, 6 dimensions).** When invoked as
`/speckit-qa crosscheck --qa-review`, append a **Requirement Review** section that scores `spec.md` on six
QA lenses — **Complete · Clear · Testable · Consistent · Feasible · Unambiguous** — one row per FR/SC
(`| FR/SC | Complete | Clear | Testable | Consistent | Feasible | Unambiguous | Note |`, mark `✓`/`⚠`/`✗`).
Surface every ambiguity **as a QA finding**, never by inventing or rewriting the requirement. Classify each
finding with the requirement-defect taxonomy carried over from `requirement-review` (`AMBIGUOUS_REQUIREMENT` ·
`MISSING_REQUIREMENT` · `INCOMPLETE_ACCEPTANCE_CRITERIA` · `NON_TESTABLE_REQUIREMENT` · `CONFLICT_REQUIREMENT` ·
`MISSING_NEGATIVE_CASE` · `MISSING_EDGE_CASE` · `DATA_DEFINITION_GAP` · `BUSINESS_RULE_INCONSISTENCY`) and route
each open question into the same **RQ list** as the atom sweep (§3.5.i) so there is one place the SA answers.
This lens is a convenience overlay only; **defer deep requirement-wording quality to `/speckit-checklist`** and
cross-artifact consistency to `/speckit-analyze` — link to them, do not duplicate their verdicts.

**i. Atom-level testability sweep + RQ emission (bundles the `requirement-review` skill).** Runs as part of
every `crosscheck` (write `atom-inventory_<feature-slug>.md` alongside the crosscheck report; see
`templates/atom-inventory.md`). This is the net-new capability folded in from `requirement-review` so there is
**no separate `/requirement-review` command** — the same run that checks BRD⇄spec conformance also mines the
sub-FR detail a test can assert.

**Why.** A terse spec written at `FR-###` level silently drops testable detail (exact error text, boundaries,
char-limits, per-status / per-role behaviour, status codes, tooltips, screen-to-screen asymmetry, API-contract
enums). `design` then builds TCs from the lossy FR and misses those atoms. Lesson (`003-legal-execution`,
2026-07-06): 10 atoms lost this way. Mining them here, before `design`, closes the gap. **QA cannot edit
`spec.md`** — the only lever is to mine atoms exhaustively and **emit an RQ** for what the SA left unspecified.
An atom the SA did not specify is a **question, never a QA guess**.

Procedure:
1. **Read coverage — enumerate then classify.** `Glob **/*` the whole `FEATURE_DIR` first (do not read from a
   familiar whitelist). Read `spec.md` + `data-model.md` + `contracts/*` in full; **open every mockup / flow /
   state diagram as an image (vision)** — transition rules, button-enable conditions and hidden statuses live in
   the picture and vanish on a text-only read. Never write "cross-checked X" for an X you did not open.
2. **Walk the 9-category negative-space sweep** for each component of every screen and record one atom per
   finding: ① exact error text + alert code · ② numeric boundaries · ③ char-limits · ④ per-status behaviour ·
   ⑤ per-role UI-state · ⑥ full status-code set (watch code-only ones) · ⑦ tooltip/label real text ·
   ⑧ screen-to-screen asymmetry + external-fail behaviour · ⑨ API-contract atoms (real enum/required/type/path
   from `contracts/*` the FR omits, and any spec↔contract difference).
3. **Status each atom** ✅ specified / ❓ RQ / 🔒 assumption. Every ❓/🔒 → emit as an **RQ** into both the ledger's
   `RQ` column **and** an "Questions for SA" section in the crosscheck report. An atom implicating a constitution
   MUST-principle (PDPA/PII/RBAC/audit) that the spec leaves ❓ is a **CRITICAL** RQ (ties to the §3.5.e gate).
4. **Handoff.** The ledger is an input to `design` (every ✅-specified atom → ≥1 TC, not just every FR) and to
   `coverage` (audit **atom→TC** = `MISSING_ATOM_COVERAGE`, since 100% FR coverage ≠ atoms covered). "SA answers"
   is a human action — hand the report to the SA or log RQs via `templates/redmine-defect.md`; when answered,
   record it back and flip the atom to ✅. **No fabrication**: never invent an expected value for a ❓/🔒 atom.

### 4. Mode: `design` — Generate Test Plan & Cases

#### 4.0 Flow & State Modeling (opening step — bundles `e2e-flow-designer`)

Before writing any scenario, model the feature's **flow / state / scenario structure** and write
`FEATURE_DIR/test-flows_<feature-slug>.md` (see `templates/test-flows.md`). This is the net-new capability
folded in from the marketplace `e2e-flow-designer` (stage 02) so there is **no separate `/e2e-flow-designer`
command** — `design` models the flow, then derives its BDD/TCs from it. It **structures flow only** (no TC/data/
script here). Consumes `atom-inventory_<feature>.md` (§3.5.i). Produce all four parts:

1. **User Journeys** (`FLOW-###`) — actor · trigger · pre-condition · ordered atomic steps · end-state ·
   `Covers:` REQ+atom; split primary / secondary / error-exception.
2. **State Machine** (per entity with a lifecycle) — a `| From | Event | To | Guard | Actor | Valid? |` table
   incl. code-only states an atom flagged; split valid vs invalid transitions. **Count all transitions — that
   total is the completeness divisor** for the state-transition TCs below and the §4.6 audit.
3. **Scenario Groups** per flow (`POSITIVE / NEGATIVE / EDGE / BOUNDARY-TRIGGER / ROLE-VARIANT`).
4. **Cross-System / Async Dependency Map** — external calls / cross-service propagation, sync-vs-async,
   race/timing points, external-fail behaviour.

**No hallucinated flow**: a transition/state/path the docs don't state is `[ASSUMPTION]` + an RQ into the §3.5.i
RQ list — never a silent guess; open every flow/state/mockup image with vision. The §4(a)–(c) artifacts below
then **derive from these flows** (each TC header also cites its flow/transition, e.g.
`# Covers: FR-007, AT-003, FLOW-001`).

Produce two artifacts in FEATURE_DIR (create, or append continuing the TC numbering if they exist —
never overwrite existing cases):

**(a) `test-scenarios_<feature-slug>.md`** — human-readable, two sections:

1. **Test Matrix Summary Table** with columns:
   `| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |`
2. **BDD scenarios** for each TC in Gherkin (`Given / When / Then`, with `Scenario Outline` + `Examples`
   for parameterized cases).

Conventions (match this repo's existing QA style):
- **TC IDs**: `TC-001`, `TC-002`, … globally incrementing; stable across re-runs.
- **7 Test Dimensions** — every feature must consider all seven; omit a dimension only with a one-line justification:
  `Positive` · `Negative/Validation` · `Edge` · `Concurrency` · `Security` · `Side-Effects` · `UX/Usability`.
  **UX/Usability** covers the usability/visual issues automated assertions miss: sticky filter/state after
  an action, layout overflow / long-value rendering, empty & loading states, post-action feedback
  (toast/redirect/scroll). **Do not blanket-exclude visual/UX** — exclude only a *specific* sub-area (e.g.
  WCAG AA, mobile/responsive) with a one-line justification, never the whole dimension.
- **Adversarial input catalog** — for every free-text / search / numeric / date field, pull the applicable
  negative + edge inputs from `templates/negative-input-catalog.md` (metacharacters, LIKE wildcards `%`/`_`,
  length boundaries, unicode, extreme-value rendering). This guarantees *metacharacter-as-literal* and
  *wildcard ≠ injection* cases exist. Rows that question the requirement itself route to
  `/speckit-checklist`; spec contradictions route to `/speckit-analyze` (note the handoff, do not guess).
- **Priority**: `P1` (smoke/critical path), `P2` (regression), `P3` (nice-to-have).
- **Tags**: `@positive @negative @edge_case @concurrency @security @side_effect @ux_usability @smoke @regression`.
- **Target Test Level**: `Unit` / `Integration` / `E2E` — choose by what the case actually exercises.
- Each scenario header carries the requirement it covers, e.g. `# Covers: FR-005, SC-002`. When an
  `atom-inventory_<feature>.md` exists, also cite the atoms it verifies (e.g. `# Covers: FR-005, AT-002`) so
  every ✅-specified atom lands in ≥1 TC — do **not** write a TC for a ❓/🔒 atom; leave it as an open RQ.

**(b) `test-cases_<feature-slug>.csv`** — flat tracker for execution, columns:
`TC_ID,Requirement,Dimension,Priority,Test_Level,Scenario_Name,Preconditions,Steps,Expected_Result,Status,Defect_Ref,Notes`
with `Status=Not Run` initially.

**(c) Test Checklist (16-column execution format)** — append a `## Test Checklist` section to
`test-scenarios_<feature>.md` (and a `test-checklist_<feature>.csv` twin on request) using the bundled
schema in `templates/test-checklist.md`. Columns, in exact order:
`Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark`.
One row per TC (same `TC-###` IDs). `System`/`Feature` stay constant down the table; `Test Status`
mirrors the tracker CSV (`Not Run` until observed); **never fabricate** `Test Status` / `Tested By` /
`Tested Date` — leave 13–14 blank until a real run. See `templates/test-checklist.md` for per-column guidance.

Close with a **Coverage Summary**: total FRs, FRs with ≥1 TC, coverage %, count per dimension, and an
explicit list of any uncovered requirements.

### 4.5 Mode: `risk` — Risk Analysis Gate (what to test first)

Runs **after `design`, before `execute`**. Read-only: it prioritizes existing TCs by risk — it never
creates or edits TCs (gaps route to `coverage` → `design`). Score **each FR (and its TCs)** on six axes,
0–3 each, per `templates/risk-analysis.md`:

`Business-impact · Complexity · Change-frequency · Integration-surface · Data-sensitivity (PDPA/PII) · Historical-defect`

1. **Score & rank.** Sum → map to priority band: `P0` (≥14 or any Data-sensitivity=3 with a MUST-principle),
   `P1` (10–13), `P2` (5–9), `P3` (0–4). P0/P1 must run first and must not be `Not Run` at report time.
2. **Heatmap.** Emit a Likelihood×Impact grid (3×3, `Low/Med/High` each) placing each FR/TC cluster in a cell.
3. **Cross-links.** A `P0`/`P1` FR with **zero** TCs is an automatic **coverage gap** — flag it and hand to
   `coverage`/`design`. Any `P0`/`P1` left `Not Run` at `report` time flows into Residual Risk (§6 step 6).
4. **Write** `FEATURE_DIR/risk-analysis_<feature-slug>.md` (frontmatter: feature, run-date, spec version,
   count per band) + the 6-axis table + heatmap + a "test-first order" list. Deterministic: same spec+TCs →
   same scores. Update the `00-INDEX.md` `02 risk` row.

Invoke as `/speckit-qa risk`.

### 4.6 Mode: `coverage` — Coverage Review Gate (audit-only, loops back to `design`)

An **audit gate**, not a generator: it inspects `test-cases_<feature>.csv` + `test-scenarios_<feature>.md`
against the FR/SC spine and **never writes or edits TCs** — when it finds holes it sends you back to `design`.
Three passes (see `templates/coverage-review.md`):

1. **Gap** — any `FR-###`/buildable `SC-###` with zero mapped TC (CRITICAL if core business rule / permission /
   data-integrity / a constitution MUST-principle; else HIGH). When an `atom-inventory_<feature>.md` exists,
   also audit **atom→TC**: any ✅-specified atom with zero mapped TC is a `MISSING_ATOM_COVERAGE` gap (same
   severity rule) — 100% FR coverage ≠ atoms covered. Open ❓/🔒 atoms are RQs, not gaps. When a
   `test-flows_<feature>.md` exists (§4.0), also audit **transition→TC**: every valid **and** invalid transition
   in the state machine maps to ≥1 TC, else a state-transition gap (an uncovered invalid transition = a missing
   negative TC).
2. **Overlap** — two+ TCs asserting the same condition with no added value → recommend merge/mark redundant
   (informational; never auto-delete).
3. **Missing negative/edge** — any FR touching a free-text / search / numeric / date field that lacks the
   applicable adversarial rows from `templates/negative-input-catalog.md`, or a TC dimension missing from the
   7-dimension set without a stated justification.

**Verdict & loop-back.** If any **Gap** (or a MUST-principle Gap) exists → verdict `gaps-found`: list the
missing TCs, tell the user to run `/speckit-qa design` to add them, then re-run `coverage`. **Bump the
iteration** of `design`/`risk`/`coverage` in `00-INDEX.md` each loop. Clean (no Gap, negatives present) →
verdict `covered` → proceed to `test-data`. Write `FEATURE_DIR/coverage-review_<feature-slug>.md`.

Invoke as `/speckit-qa coverage`.

### 4.7 Mode: `test-data` — Synthetic Test-Data Generator

Runs after `coverage` is clean, before `execute`. Produces `FEATURE_DIR/test-data_<feature-slug>.json` — a
**dataset** the runner/agents consume directly, not just guidance. Per `templates/test-data.md`:

- Six categories, each an array of records: `positive · negative · boundary · business_rule · e2e · risk_based`.
- Each record: `{ "id", "tc_id", "req_id", "category", "input", "expected", "note" }` — every record binds to a
  real `TC-###` and `FR-###`/`SC-###`; a record with no TC/REQ is dropped.
- **Synthetic only — never real PII.** Names/emails/phones/IDs are fabricated; this satisfies the PDPA gate (§7).
  Pull `negative`/`boundary` values from `templates/negative-input-catalog.md` (metacharacters, LIKE `%`/`_`,
  length boundaries, unicode, extreme values) so metacharacter-as-literal and wildcard≠injection data exists.
- `risk_based` records target the `P0`/`P1` FRs from `risk-analysis_<feature>.md`.

Deterministic ordering; update the `00-INDEX.md` `04 test-data` row. Invoke as `/speckit-qa test-data`.

### 5. Mode: `execute` — Drive QA Agents

This skill does not run frameworks directly; it **orchestrates ECC QA specialists**. Pick agents by what the
feature is and propose the plan to the user before spawning (these consume tokens):

| Need | Agent / Skill to delegate to |
|------|------------------------------|
| Is test coverage adequate vs the spec? | `ecc:pr-test-analyzer` (agent) |
| Find & generate missing tests to a target | `/ecc:test-coverage` |
| Generate / run E2E for a UI feature | `ecc:e2e-runner` (agent) |
| Visual / browser interaction QA | `/ecc:browser-qa` |
| Enforce write-tests-first while implementing | `ecc:tdd-guide` (agent) |
| Run the app & confirm behavior end-to-end | `/verify` (built-in) |

For each delegated run, pass the FEATURE_DIR test artifacts as the source of truth so results map back to
TC IDs. Collect each TC's outcome (Pass / Fail / Blocked / Not Run) and update `test-cases_<feature>.csv`.

#### 5.1 Bundled Playwright runner (`scripts/playwright/`)

For UI features the skill ships a **reproducible Playwright E2E runner** so `execute` can actually
drive the browser instead of only mapping prior evidence. See `scripts/playwright/README.md` for the
full playbook. Summary:

> **Execute for real — a test designed but not executed finds zero defects.** Mapping recorded evidence is a
> *fallback*, not a substitute for running: it can only re-confirm what was already observed, never surface a
> new defect. Prefer actually driving the app (Playwright bundle / MCP browser) on the reachable environment;
> when you can only map evidence, say so and report **`executed %` separately from `designed %`** so design
> coverage never masquerades as verification. Real SIT defects (DEF-001 `%` wildcard, UX-002 overflow) were
> missed precisely because the first pass mapped evidence instead of *running* the adversarial inputs from
> `templates/negative-input-catalog.md`.

**0. Generate the spec from the designed TCs (bundles `qa-automation-script`, 06a).** Before running, generate
`FEATURE_DIR/e2e/<feature>.spec.js` from `test-cases_<feature>.csv` + `test-data_<feature>.json` +
`test-flows_<feature>.md` (§4.0) rather than hand-writing it — so the suite is TC-bound and reproducible (see
`templates/automation-script.md`). Two mandatory gates wrap it:
   - **A0 input gate (HARD STOP, before generating).** The spec needs three env-level facts the requirement
     artifacts usually lack: **BASE_URL**, **credentials (user+pass) for every role a TC logs in as**, and the
     **entry navigation path** (login → screen under test, for a correct `beforeEach`). If any is missing from
     the args/artifacts, **stop and ask all three at once via AskUserQuestion** — do not generate, scaffold,
     create files, or touch `00-INDEX.md` before an answer (scaffolding is work, not a bypass). A skeleton
     (`test.fixme` per TC) only on the user's explicit instruction.
   - **Embed the conventions** in every generated spec: `actionTimeout:15000`/`navigationTimeout:30000` +
     `setTimeout(180000)` (never `timeout:0`); the bundled `evidence()` engine snap **at assertion-time before
     cleanup** (never a full-page shot after); EPOCH-window mutation data cleaned in `afterEach`; one retry layer;
     strict-data (throw, never fallback). 1 TC → ≥1 `test('TC-### …')`; un-automatable TC → `test.fixme()` + reason
     (never dropped). Emit a coverage note: automated / fixme / skipped of all designed TCs.
   - **A5 readiness gate (before claiming "ready to run"; folds into step 1 below).** Env up · credentials valid ·
     test data provisioned · external deps/mocks ready · BASE_URL correct. Any fail = block; never fabricate a run.

1. **Confirm the app is reachable.** The runner needs a running instance at `QA_BASE_URL`
   (e.g. `http://epirusapp:9047`). If the implementation/app is **not** reachable from this machine
   (e.g. code lives on a remote dev box), say so and do **not** fabricate results — either run the
   bundle on the host that can reach the app, or fall back to mapping recorded evidence + the MCP
   browser path (README §"MCP fallback").
2. **Run it** (seeds `playwright.config.ts` + `tests/` into `FEATURE_DIR/e2e/` on first use):
   - Windows: `pwsh .claude/skills/speckit-qa/scripts/playwright/run.ps1 -FeatureDir <FEATURE_DIR> -BaseUrl <QA_BASE_URL> [-Grep "@smoke"]`
   - POSIX:   `.claude/skills/speckit-qa/scripts/playwright/run.sh <FEATURE_DIR> <QA_BASE_URL> [@smoke]`
3. **TC ↔ test() contract:** every Playwright `test()` title must start with its TC ID
   (`test('TC-001 ...')`) and screenshots go to `FEATURE_DIR/evidence/<TC-ID>-<step>.png` via the
   `evidence()` helper — keeping parity with `verify.md §3`.
4. **Result sync:** `run.*` emits `e2e/.artifacts/results.json`, then `sync-results.mjs` writes each
   executed TC back into `test-cases_<feature>.csv` (`passed→Pass`, `failed/timedOut→Fail` + `DEF-<TC>`
   stub, `skipped→Blocked`; absent TCs stay `Not Run`). Never hand-edit a status the runner can set.

Prefer this bundle over `ecc:e2e-runner` when you want a checked-in, re-runnable suite tied to the TC
IDs; prefer the ECC agent for one-off generation. Either way, results must map back to TC IDs.

#### 5.2 Defect → Redmine (auto-open on Fail)

When `execute` records a **Fail**, open a Redmine Defect so the failure becomes a tracked ticket — never
let a defect live only in the CSV. See `templates/redmine-defect.md` for the full playbook. Summary:

- For each TC with result `Fail` and an empty `Defect_Ref`: **dedup-search** Redmine for an open issue
  with that `TC-###` in its subject; comment on it if found, otherwise **create** one.
- Use `scripts/redmine/create-defect.mjs` (REST API via `REDMINE_URL` / `REDMINE_API_KEY` /
  `REDMINE_PROJECT`); fall back to the authenticated Playwright browser (`redmine-access` memory) if no
  API key. Subject `[<FR>][<TC-ID>] <scenario> — <actual vs expected>`; priority from severity
  (Blocker=Immediate, Critical=High, Major=Normal, Minor=Low).
- Write the returned `#<id>` back into the CSV `Defect_Ref` and the 16-col checklist `Redmine No.`; keep
  `Test Status = Fail`. The `report` Defect Log must cite the same id.
- **Only** open for a failure actually observed (no-fabrication). Opening/commenting on a fresh Fail lives
  here; the **post-run lifecycle** (comment+evidence, root-cause-on-resolve, reopen/**close**) is owned by
  **§5.3** — which *supersedes* the old "never auto-close" rule under a confirmation gate.

#### 5.3 Defect Lifecycle Sync → Redmine (after every `execute` / `regression`)

After a run's results are written back to `test-cases_<feature>.csv`, keep each **existing** defect
(`Defect_Ref = #<id>`) in lockstep with the retest. See `templates/redmine-lifecycle.md` for the full
playbook; this runs **after `execute` (§5) and after `regression` (§6.5)**. For **every TC in the run's
impact set that carries a `Defect_Ref`**, in order:

1. **Comment + screen capture (mandatory, every run).** Post a Redmine note recording the outcome and
   **attach the test-result screenshot** (`FEATURE_DIR/evidence/<TC-ID>-*.png`). Note is deterministic:
   `TC-### · <run-date> · <Baseline> → <Now> · <actual-vs-expected>`. Never attach a screenshot for a TC
   not actually executed this run.
2. **Root-cause capture — after SA/Dev sets it Resolved.** Pull the resolver's note and record the
   **Root Cause / what changed** into the ticket's root-cause custom field (`REDMINE_ROOTCAUSE_FIELD_ID`)
   or a `Root Cause:` note, and **mirror it** into the run report RCA (§6.8) and the CSV `Notes`. Never
   invent a root cause — if none was stated, note that and ask before closing.
3. **Status transition — reopen / close (confirmation-gated).** Drive status from the **observed**
   transition (§6.5 step 4): `Fail→Pass` ⇒ **Close** ("verified fixed", keep `Defect_Ref` as history);
   `Fail→Fail` on a **Resolved** ticket ⇒ **Reopen** ("still failing", no duplicate); `Pass→Fail` ⇒ open a
   new `[regression]` defect (§5.2). **This authorizes QA to close/reopen** — superseding §5.2's blanket
   "never auto-close" — but **only** on an observed transition and **only after the user confirms** the
   Close/Reopen (outward-facing, hard to reverse). Comment+evidence (step 1) needs no confirmation.
4. **Summarize first.** Emit a **Lifecycle Summary** — `| TC ID | Defect | Baseline → Now | Redmine action
   | Root cause | Evidence |` — with counts (fixed-and-closed / reopened / new-regression / commented-only).
5. **Hand off — the user commits.** QA **never runs `git commit`.** List the changed QA artifacts (CSV,
   16-col checklist, `verify-*-run_<date>.md`, any `.xlsx` twin) and propose a commit message in the team
   convention (`Task/Defect #<id>: …`), then **stop and wait for the user to commit** — the
   "สรุปผลก่อน แล้วจึงให้ฉัน Commit ทุกครั้ง" rule.

Runner: `scripts/redmine/lifecycle.mjs --id <id> --tc <TC> --note "…" [--attach <png>] [--status
close|reopen] [--root-cause "…"]` (REST `uploads.json` → issue `PUT`; `--status` applied only when passed,
i.e. after the confirmation gate). If the REST key `401`s, fall back to the authenticated Playwright MCP
browser (`redmine-access` memory). **Never fabricate** a status, screenshot, or root cause.

### 6. Mode: `report` — Record Execution & Defects

Generate `FEATURE_DIR/verify-sit-run_<run-date>.md` (run-date as `YYYY-MM-DD`) with YAML frontmatter:

```yaml
---
id: <feature-id>
phase: verify
sub-phase: SIT execution record
status: <pass | partial-pass | fail> (<one-line summary>)
run-date: <YYYY-MM-DD>
verified-by: <who / method>
environment: <e.g. SIT>
---
```

Body sections:
1. **Method** — source of truth (system DB vs downstream report), filters, reconciliation key, tooling.
2. **Test Data Setup** — tables/fixtures seeded vs produced as output; what was read-only.
3. **Results table** — `| TC ID | Scenario | Expected | Actual | Status | Evidence |`, one row per executed TC.
4. **Defect Log** — for each Fail: `| Defect ID | TC ID | Severity | Summary | Steps to Reproduce | Status |`.
   Severity: `Blocker / Critical / Major / Minor`. If the project tracks tickets (e.g. Redmine/Jira),
   include the ticket reference column.
5. **Coverage & Verdict** — Pass/Fail/Blocked/Not-Run counts, % executed, and a go/no-go recommendation.
6. **Residual Risk** — triage of every `Not Run` / `Blocked` TC per `templates/residual-risk.md`: a
   `| TC ID | Severity | Why unverified / risk | Coverage today | Test approach to close |` table. Severities
   reuse the Defect Log scale (Blocker/Critical/Major/Minor); apply the **coverage discount** only with a
   named passing artifact. **Any open Blocker or Critical without a coverage discount blocks the "go"
   verdict** — downgrade §5 to `no-go` / `partial-pass (conditional)` and list those TCs. Do not bury
   un-covered security/data-integrity/business-outcome gaps in a flat `Not Run` list.
7. **SIT Test Document bundle (company format)** — in addition to `verify-sit-run_<date>.md`, assemble the
   **full Test Case set from `speckit-qa design`** (`test-cases_<feature>.csv` + the 16-col checklist in
   `test-scenarios_<feature>.md`) into the standard **8-worksheet company SIT Test Document** per
   `templates/sit-test-document.md`. Emit `FEATURE_DIR/SIT-Test-Document_<feature>.md` (one `##` section per
   worksheet); the **Test Checklist** section is the 17-col layout (`Test Execution Order | Test Checklist ID
   | Application | Feature * | Test Case Type * | Test Objective | Test Condition | Test Step | Expected
   Results | Test Data | Feature Priority | Test Case Priority | Test Status * | Tested By | Tested Date |
   Redmine No. | Remark`), **one row per TC**, with `Test Status` / `Tested By` / `Tested Date` copied from the
   tracker CSV (never fabricated — un-run TCs = `Not Start`, blanks). Populate Test Summary metrics, Var enums,
   and the Redmine defect sheet from the same bundle. Offer a `.xlsx` twin (Node self-contained generator, per
   the `oic-r-report-project` `genxlsx.js` pattern) when the user wants a deliverable file. This makes `report`
   produce the **handoff SIT document**, not just the internal execution record.

Never invent results: only record outcomes the user or a delegated agent actually produced. Mark anything
unverified as `Not Run`, not `Pass`.

#### 6.7 Traceability Reconciliation (RTM) — pre-verdict gate (bundles `qa-reconcile`)

Runs as the **first step of `report`**, before Result-Analysis (§6.8) and the verdict (§6.9). This is the
net-new capability folded in from the marketplace `qa-reconcile` cross-gate so there is **no separate
`/qa-reconcile` command** — the same `report` run that records execution also reconciles the whole chain.
**Audit-only**: it flags broken links; it never edits an artifact and never fabricates a count. See
`templates/reconcile-rtm.md`.

**Why at report time.** `report` is the one point where every node exists at once —
`REQ → atom → TC → Data → Risk → Result → Defect`. `coverage` (§4.6) audits only the `REQ/atom → TC` slice and
runs before execution, so it cannot see `Result`/`Defect`. Reconciling the full chain here stops a GO verdict
from being issued on a chain with an orphan or a dangling reference.

1. **Read the chain artifacts** in FEATURE_DIR (`spec.md` + `atom-inventory_*` + `test-cases_*.csv` +
   `test-data_*.json` + `risk-analysis_*` + `verify-sit-run_*` + Defect Log). Any missing artifact = mark
   `[NOT PROVIDED]` for that dimension — never guess it into a pass.
2. **Forward coverage** (upstream → has downstream?): REQ→TC · atom→TC (`MISSING_ATOM_COVERAGE`) · TC→Data (P0/P1)
   · CRITICAL/HIGH risk→TC · executed-TC→Result. **Backward integrity** (endpoint → points at something real,
   else *dangling*): TC→REQ · Result→TC · Defect→TC · Data→`tc_id`+`req_id`. **Count from real rows every run —
   never hardcode.**
3. **Write** `FEATURE_DIR/RTM_<feature-slug>.md` — a centralized RTM (one row per REQ/atom through
   TC→Data→Risk→Result→Defect) + a Reconciliation Findings section (orphan / dangling lists with counts) +
   `verdict: clean | broken`.
4. **Gate the verdict.** Any orphan on a P0/P1 chain (high-risk uncovered, executed-TC-without-result,
   defect-without-TC) or any dangling ref ⇒ chain **broken** ⇒ §6.9 **cannot be GO** until reconciled. Route each
   finding back to its owning mode (`design`/`risk`/`test-data`/`execute`) — reconcile never fixes it. Recount
   from files, never trust a prior RTM. Upsert the `06 report` row in `00-INDEX.md`.

#### 6.8 Result-Analysis (RCA · flaky · production-readiness)

Beyond recording pass/fail, add a **Result-Analysis** block to `verify-sit-run_<date>.md` so a red result is
diagnosed, not just logged:

- **Flaky detection** — a TC that flips Pass/Fail across reruns without a code change is **flaky**, not a defect:
  tag it `@flaky`, quarantine it from the defect count, and note the flip in the results row. Do not open a
  Redmine Defect for a flake; open a follow-up to stabilize it.
- **RCA per Fail** — for each real Fail, name the **layer** (`UI` / `API` / `DB` / `data` / `config`) and the
  root cause in one line. This feeds the Redmine Defect body (§5.2) and the regression impact set (§6.5).
- **Production-readiness** — score six dimensions `Ready / Conditional / Not-ready`:
  `Functional · Security/PDPA · Performance · Data-integrity · UX/Usability · Regression`. Any `Not-ready` on
  Security/PDPA or Data-integrity caps the overall verdict at NO-GO regardless of pass rate.

#### 6.9 Verdict tiers (GO / CONDITIONAL-GO / NO-GO) + HTML report

- **Verdict tier** — replace a flat pass/fail with three tiers, mapped from the coverage/defect/residual-risk state:
  - **GO** — all P0/P1 executed & Pass, no open Blocker/Critical, constitution gate satisfied.
  - **CONDITIONAL-GO** — shippable *only under stated conditions*: list each open item, its accepted residual
    risk (§6 step 6) and the owner/compensating control. A Blocker/Critical without a named coverage discount
    **cannot** be CONDITIONAL — it is NO-GO.
  - **NO-GO** — any open Blocker/Critical without discount, an unmet constitution MUST-principle, or a
    `Not-ready` on Security/PDPA / Data-integrity (§6.8).
  Record the tier in the frontmatter `status` (`pass`→GO, `partial-pass`→CONDITIONAL-GO, `fail`→NO-GO) and spell
  out the conditions for CONDITIONAL-GO.
- **HTML report (optional deliverable)** — on request, emit a **single self-contained** `FEATURE_DIR/qa-report_<feature>.html`:
  the results table + defect log + verdict, with evidence screenshots from `FEATURE_DIR/evidence/<TC-ID>-*.png`
  **inlined as base64 `data:` URIs** (no external files, portable to reviewers). Never embed an image for a TC
  that was not actually executed. This complements — does not replace — the company `.xlsx` SIT deliverable.

#### 6.10 Report Bundle — two-gate UAT vs Production readiness (single deliverable)

On request (e.g. "is it ready for UAT / for Production?"), assemble a **single-file readiness bundle**
`FEATURE_DIR/report-bundle_<feature>_<run-date>.md` that answers the two release questions **separately** —
UAT entry and Production release are different bars and must not share one verdict. It consolidates the
`report` outputs (§6 results + §6.8 analysis + §6.9 tiers) into one hand-off doc for the PO / release approver.

- **Source of truth = the tracker CSV, recounted.** Recount Pass/Fail/Blocked/Not-Run **directly from
  `test-cases_<feature>.csv`** at bundle time — never trust a prior `verify-sit-run_<date>.md`'s numbers,
  which go stale the moment a later `execute`/`regression` syncs new results back to the CSV. If an existing
  run doc contradicts the CSV, **flag the discrepancy explicitly** in the bundle (name the stale file + both
  numbers) and use the CSV figure. Report `executed %` (Pass+Fail+Blocked / total) separately from `designed %`.
- **Two independent gates**, each with its own §6.9 tier:
  - **UAT Entry Gate** — what a business user will hit on an isolated env. Blockers = the core flows they
    click (soft-delete / data-loss, edit / cancel / restore, any Fail on a happy-path TC). RBAC-per-method,
    CSRF, unit-level input, and audit trail are typically **deferrable** during UAT (state the residual risk).
  - **Production Release Gate** — live release affecting real customers + real access control. Every P0/P1
    security / integration / data-integrity TC that is `Not Run` / `Blocked` / `Fail` is a **blocker** here even
    if UAT can defer it. Any open Blocker/Critical without a §6-step-6 coverage discount ⇒ **NO-GO**.
- **Layout:** exec verdict table (UAT tier + Prod tier, one-line reason each) → coverage summary from CSV →
  defect log → UAT gate (must-close / deferrable) → Production gate (blockers / HIGH / MED-LOW) → "already
  proven (green — do not re-test)" → ordered **Path to GO** → sign-off table. Record the pair in frontmatter
  `verdict: { UAT: <tier>, PRODUCTION: <tier> }` and upsert the `06 report` row in `00-INDEX.md` (bump iteration).
- **No fabrication:** a `Not Run` TC is unverified **risk**, never a silent pass; do not let a green UAT bar
  imply Production readiness.

### 6.5 Mode: `speckit-qa regression` — Re-test after Spec change / Defect fix

Triggered when **SA changes the spec** or **Dev fixes a Defect**. Re-run only the TCs the change can
affect (plus a P1 smoke band) and flag any `Pass → Fail` transition. See `templates/regression.md`.

1. **Select impact set** (state it explicitly; never silently full-skip):
   - *Spec change* — diff spec → changed `FR/BR/NFR` ids → TCs whose `Requirement` matches (mark those
     `Not Run`, their result is stale) **+** all `P1` smoke **+** same `Screen`/`Sub Category` neighbours.
     If a requirement was *added*, run `design` first to create its TCs.
   - *Defect fix* — the TC(s) carrying that `Defect_Ref` **+** `P1` smoke **+** same `Screen`/`Sub Category`.
2. **Baseline** = last recorded statuses (CSV / latest `verify-sit-run_*.md`).
3. **Run** the set via §5 `execute` (Playwright bundle / agents / unit).
4. **Classify transitions**: `Pass→Pass` stable · `Fail→Pass` fix-confirmed (comment "verified fixed", keep
   `Defect_Ref` as history) · **`Fail→Fail` on a defect-fix retest = fix NOT effective** (comment "still
   failing" + reopen the ticket, no duplicate) · `Pass→Fail` = **REGRESSION** → open a Redmine Defect (§5.2,
   subject prefixed `[regression]`). **External defects** opened outside our `execute` must have their `#id`
   written into the TC's `Defect_Ref` **before** retest — else the impact set is empty. See
   `templates/regression.md` (Impact selection B.0 + Procedure step 3). The **comment+screenshot,
   root-cause-on-resolve, and the actual reopen/close** of each ticket are driven by **§5.3 Defect Lifecycle
   Sync** (confirmation-gated) — run it after this classification.
5. **Record** `verify-regression-run_<date>.md` (report layout + a `| TC ID | Baseline | Now | Transition |
   Defect_Ref |` table).
6. **Update the Test Cases (MANDATORY — a regression run always writes results back).** For **every TC in the
   impact set that was actually re-run**, update all Test Case artifacts so the tracker reflects the new run —
   never leave a re-run result only in the `.md` report:
   - **`test-cases_<feature>.csv`** (the source-of-truth tracker) — set `Status` to the new result
     (`Pass`/`Fail`/`Blocked`), update `Defect_Ref` per the transition policy in step 4 (Fail→Pass keeps the id
     as history with Status=Pass, Fail→Fail keeps Fail+id, Pass→Fail gets the new `[regression]` id), and append
     a dated note to `Notes` (e.g. `re-verified <YYYY-MM-DD>: <observation>`). **Do not touch TCs outside the
     impact set** — they keep their baseline row verbatim.
   - **16-col checklist in `test-scenarios_<feature>.md`** (and any `test-checklist_<feature>.csv` twin) — mirror
     `Test Status`, `Redmine No.`, and fill `Tested By` + `Tested Date (<YYYY-MM-DD>)` for the re-run rows only.
     Never fabricate `Tested By`/`Tested Date` for TCs not actually re-run — leave their baseline values.
   - **`.xlsx` twins, if present** (`test-cases_<feature>.xlsx`, `SIT-Test-Document_<feature>.xlsx`) — regenerate
     from the updated markdown/CSV so the deliverable stays in sync: `node scripts/genxlsx.js <input.md> <out.xlsx>`
     (per §6 step 7). If a twin is open/locked (`.~lock..#`), say so and skip it rather than failing the run.
   - Keep the run **deterministic & traceable**: same TC IDs, only impact-set rows change, every changed cell
     ties to an observed result. State a one-line summary of what was updated (e.g. "Updated 12 TCs: 11 Pass, 1
     Fail (TC-059 → #12346); CSV + checklist + xlsx synced").
7. **Verdict**: any `Pass→Fail` ⇒ regression fail (change not safe to ship). Otherwise "regression clean
   for the selected scope" — and name the scope; it is not a full re-test.

Invoke with the trigger, e.g. `/speckit-qa regression spec FR-006 BR-002` or
`/speckit-qa regression defect #12345`.

### 7. Constitution & PDPA Gate (non-negotiable)

Constitution MUST-principles are binding within QA scope. If a security/PDPA/RBAC/audit principle has no
covering Security-dimension test case, that is a **CRITICAL** gap — report it and refuse to declare the
feature "verified" until covered. Do not dilute or silently skip a principle.

### 8. Report & Next Actions

Output: artifact path(s) written, TC count, coverage %, and a concise Next Actions block. Also upsert this
mode's row in `00-INDEX.md` (§1.1). Chaining follows the pipeline order:
- After `crosscheck`: if any CRITICAL/HIGH → "Reconcile `spec.md` with the BRD (or get PO sign-off) before designing tests"; if clean → "Conformance OK — run `/speckit-qa design`." Always also hand the open **RQs** from `atom-inventory_<feature>.md` (§3.5.i) to the SA — a design run started with unanswered ❓/🔒 atoms bakes those gaps into the TCs.
- After `design`: "Run `/speckit-qa risk` to prioritize, then `/speckit-qa coverage` to audit for gaps."
- After `risk`: name the P0/P1 test-first set; if any P0/P1 FR has no TC → "run `/speckit-qa coverage` → `design` to close it."
- After `coverage`: if `gaps-found` → "add the listed TCs via `/speckit-qa design`, then re-run `/speckit-qa coverage` (iteration bumped)"; if `covered` → "run `/speckit-qa test-data`."
- After `test-data`: "Implement, then run `/speckit-qa execute`."
- After `execute`: run the §5.3 Redmine lifecycle sync (comment+evidence, root-cause, confirm any
  reopen/close), then list failed/blocked TCs, **summarize**, hand off for the user to commit, and
  recommend `/speckit-qa report`.
- After `report`: first run the §6.7 RTM reconciliation — if the chain is `broken` (any orphan on a P0/P1 chain
  or dangling ref), cap the verdict below GO, route each finding to its owning mode, and re-run `report` once
  reconciled. Then state the verdict tier — **GO** → feature may proceed (constitution gate satisfied);
  **CONDITIONAL-GO** → list the conditions + owners to clear before release; **NO-GO** → fix the blocking
  defects and run `/speckit-qa regression` on the impact set.

## Post-Execution Checks

**Check for extension hooks (after QA)**:
Check if `.specify/extensions.yml` exists in the project root.
- If it exists, read it and look for entries under the `hooks.after_qa` key.
- If the YAML cannot be parsed or is invalid, skip hook checking silently and continue normally.
- Filter out hooks where `enabled` is explicitly `false`. Treat hooks without an `enabled` field as enabled by default.
- For each remaining hook, do **not** attempt to interpret or evaluate hook `condition` expressions:
  - If the hook has no `condition` field, or it is null/empty, treat the hook as executable.
  - If the hook defines a non-empty `condition`, skip the hook and leave condition evaluation to the HookExecutor implementation.
- When constructing slash commands from hook command names, replace dots (`.`) with hyphens (`-`). For example, `speckit.git.commit` → `/speckit-git-commit`.
- For each executable hook, output the following based on its `optional` flag:
  - **Optional hook** (`optional: true`):
    ```
    ## Extension Hooks

    **Optional Hook**: {extension}
    Command: `/{command}`
    Description: {description}

    Prompt: {prompt}
    To execute: `/{command}`
    ```
  - **Mandatory hook** (`optional: false`):
    ```
    ## Extension Hooks

    **Automatic Hook**: {extension}
    Executing: `/{command}`
    EXECUTE_COMMAND: {command}
    ```
- If no hooks are registered or `.specify/extensions.yml` does not exist, skip silently.

## Operating Principles

- **Traceability first**: every test case maps to a requirement; every MUST-principle maps to a test.
- **Test behavior, not wording** — that is `speckit-checklist`'s job, not this one.
- **Never fabricate results**: unobserved = `Not Run`. A green report you did not earn is a defect.
- **QA never auto-commits & never silently closes tickets**: after `execute`/`regression`, run the §5.3
  lifecycle sync (comment+evidence, root-cause-on-resolve), **summarize first**, gate any Redmine
  Close/Reopen on the user's confirmation, then **hand off for the user to commit** — propose the message,
  do not run `git commit`.
- **Token-efficient**: progressive disclosure of artifacts; cap the matrix and summarize overflow.
- **Deterministic IDs**: re-running `design` without spec changes yields the same TC IDs and counts.
- **Delegate execution**: prefer ECC QA agents over ad-hoc scripts so results are reproducible and reviewed.

## Context

$ARGUMENTS

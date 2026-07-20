# Template: `test-flows_<feature>.md` — E2E Flow & State Model (bundled into `speckit-qa` — mode `design`, §4.0)

Ported from the marketplace `e2e-flow-designer` (stage 02) so `design` first models the **flow / state /
scenario structure**, then derives BDD scenarios + TCs from it — no separate `/e2e-flow-designer` command.
This is the **opening step of `design`**, before §4(a) writes any scenario. It **structures flow only** — it does
**not** write TCs, test data, or automation (those stay in §4 / `test-data` / `execute`).

**Why here.** `design` is the test-case generator; in the source pipeline the flow artifact (02) feeds the
TC generator (03). Modeling journeys, a state machine, and cross-system dependencies *before* enumerating TCs
gives design a concrete completeness divisor (every valid+invalid transition → a TC) that a straight jump to
BDD misses. Consumes the `atom-inventory_<feature>.md` (§3.5.i) — the same input design already uses.

**No hallucinated flow.** A transition/state/path the docs don't state is `[ASSUMPTION]` + an RQ back to the SA
(reuse the §3.5.i RQ list) — never a silent guess. Open every flow / state / mockup **image with vision** (Read);
transitions and button-enable conditions live in the picture and vanish on a text-only read.

## Produce all four parts

### 1. User Journeys (`FLOW-###`)
Per journey: actor/role · trigger · pre-condition · **ordered atomic steps** · expected end-state · `Covers:`
REQ-id + atom-id. Split **primary (happy) / secondary / error-exception** paths.

### 2. State Machine (per entity with a lifecycle)
List every state (include code-only states an atom flagged, e.g. `WAV`). Transition table below. Split **valid**
(baseline) vs **invalid** transitions (an event that must not be possible in that state → downstream negative TC).
**Count all transitions** — that total is the divisor for §4 TC derivation and §4.6 coverage audit.

### 3. Scenario Groups (per flow)
Group into `POSITIVE` · `NEGATIVE` · `EDGE` · `BOUNDARY-TRIGGER` (flow touches a bounded field → flag BVA) ·
`ROLE-VARIANT` (flow changes by role).

### 4. Cross-System / Async Dependency Map
Points where the flow calls an external service or data propagates across services (race/timing risk): mark
**sync vs async**, any poll/retry point, and external-fail behaviour (service down → what the flow should do).

## Flow defect types (flag if found → `[ASSUMPTION]`/RQ, never close by guessing)
`MISSING_ERROR_PATH` · `UNDEFINED_STATE_TRANSITION` · `ORPHAN_STATE` · `AMBIGUOUS_GUARD` ·
`MISSING_CROSS_SYSTEM_HANDLING` · `RACE_CONDITION_RISK`

## File — `test-flows_<feature-slug>.md`

```markdown
---
id: <feature-id>
phase: verify
sub-phase: design — E2E flow & state model
run-date: <YYYY-MM-DD>
counts: { flows: <n>, states: <n>, transitions: <valid>/<invalid>, scenario_groups: <n>, rq: <n> }
---

## 1. User Journeys
#### FLOW-001: Marketing cancels an SMS campaign (primary)
- Actor: Marketing · Trigger: clicks Cancel on a Draft campaign · Pre: campaign in `Draft`
- Steps: 1) open list 2) select campaign 3) click Cancel 4) confirm dialog
- Expected end-state: status `Cancelled`, row greyed, toast shown
- Covers: FR-007 · AT-003

## 2. State Machine
| From | Event | To | Guard/Condition | Actor | Valid? |
|------|-------|-----|-----------------|-------|--------|
| Draft | Cancel | Cancelled | owner = Marketing | Marketing | ✅ |
| Sent | Cancel | — | — | — | ❌ invalid (no cancel after send) |

Total transitions: valid 1 / invalid 1 → divisor for §4 state-transition TCs + §4.6 audit.

## 3. Scenario Groups
| Flow | Positive | Negative | Edge | Boundary-trigger | Role-variant |
|------|----------|----------|------|------------------|--------------|
| FLOW-001 | cancel Draft | cancel Sent (blocked) | cancel during send | — | non-Marketing hidden |

## 4. Cross-System / Async Dependency Map
| Flow step | External/Service | Sync/Async | Race/Timing risk | External-fail behaviour |
|-----------|------------------|------------|------------------|-------------------------|
| send | SMS gateway | async | status lags UI | mark `Pending`, retry poll |

## Handoff → §4 TC derivation
- FLOW/transition needing BVA / decision-table / state-transition technique.
- `[ASSUMPTION]`/RQ the SA must answer before finalising (into the §3.5.i RQ list).
```

## Handoff

- **§4(a)/(b)/(c)** derive BDD scenarios + `test-cases_<feature>.csv` + the 16-col checklist **from these flows** —
  each TC header cites the flow/transition it exercises (e.g. `# Covers: FR-007, AT-003, FLOW-001`).
- **`coverage` (§4.6)** audits **transition→TC**: every valid+invalid transition maps to ≥1 TC (else a state
  gap), on top of FR/atom→TC.
- **`risk` (§4.5)** can weight a flow with a `RACE_CONDITION_RISK` / cross-system dependency higher.

## Rules

- **Structure only** — never write a TC / data / script here; that is §4 / `test-data` / `execute`.
- **No fabrication** — a flow/state/transition not in the docs is `[ASSUMPTION]` + RQ, not a guess.
- **Traceable** — every flow and transition traces back to a REQ + atom.
- **Deterministic** — same spec + atoms ⇒ same FLOW ids, states, and transition counts.
- **Plain language** — name flows/steps/states as a non-team reader sees them on the UI (screen/button labels),
  not raw screen codes; put any internal ref in parentheses.

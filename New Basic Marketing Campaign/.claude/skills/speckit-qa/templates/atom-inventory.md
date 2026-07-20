# Template: `atom-inventory_<feature>.md` (bundled into `speckit-qa` — mode `crosscheck`, §3.5.i)

Ported from the marketplace `requirement-review` skill (00b atom-inventory) so `speckit-qa crosscheck`
mines **testable atoms** and emits **RQ**s in one command — no separate `/requirement-review`.

**Why it exists.** A terse spec written at `FR-###` level silently drops the detail that a test can actually
assert — exact error text, boundaries, char-limits, per-status / per-role behaviour, status codes, tooltips,
screen-to-screen asymmetry, API-contract enums. `design` then builds TCs from the lossy FR and misses those
atoms. Lesson (`003-legal-execution`, 2026-07-06): 10 atoms lost this way (125-day / 255-char / tooltip / WAV
status / DMS download-vs-preview …). Mining them here, **before** `design`, closes the gap.

**QA cannot edit `spec.md`** (the SA owns it). The only lever is: **mine atoms exhaustively + emit an RQ back to
the SA**. An atom the SA did not specify is an **RQ (a question), never a QA guess**.

## Read coverage — enumerate then classify (mandatory, before writing atoms)

1. `Glob **/*` the whole `FEATURE_DIR` (recursive) — see every real file, do not read from a familiar whitelist.
2. Classify each file: `.md/.txt/.json/.yaml/.csv` → read; **`.jpg/.png/.pdf/.svg` → open with vision (Read)**;
   `.xlsx/.docx` → extract then read; unknown → open the header before skipping.
3. Always read `spec.md` + `data-model.md` + `contracts/*` in full, plus any screen mockup / flow / state
   diagram **as an image** — transition rules, button-enable conditions and hidden statuses live in the picture
   and vanish on a text-only read.
4. **Never write "cross-checked X" for an X you did not open.** Ambiguous file that could change the result →
   stop and ask the user; never guess.

## The 9-category negative-space sweep (per component of every screen)

One row per component. For each, walk all nine — the categories that a terse FR habitually drops:

1. **Error / notice text** — exact wording **+ alert code**.
2. **Numeric boundaries** — e.g. 125 days, 20 MB, 180.
3. **Char-limits** — e.g. 255.
4. **Per-status behaviour** — e.g. `DRT → Download` vs `REJ → Preview`.
5. **Per-role UI-state** — enable / disable / hide when role ≠ owner.
6. **Full status-code set** — watch code-only states never shown in the FR (e.g. `WAV`).
7. **Tooltip / label** — the real on-screen text.
8. **Screen-to-screen asymmetry** — e.g. edit skips the dup-check that create runs; external-service-fail behaviour.
9. **API-contract atoms** — from `contracts/*` (or `sources/api/` if present): real `enum` / `required` / `type`
   / field / path the FR omits (e.g. `policyType` enum `[ORD, GOV, PA, UL, …]`), and any spec↔contract difference.

## Atom status

- ✅ **specified** — stated in the SA doc (spec/contract/data-model/mockup).
- ❓ **RQ** — the SA did not specify it → **open question to the SA** (do not invent an expected value).
- 🔒 **assumption** — exists only in code / elsewhere, not yet confirmed → also an RQ.

Every ❓/🔒 atom is **emitted as an RQ** into both this ledger's `RQ` column **and** the crosscheck report's
"Questions for SA" section (§3.5.i). Never leave one silent. An atom implicating a **constitution MUST-principle**
(PDPA / PII / RBAC / audit) that the spec leaves ❓ is a **CRITICAL** RQ.

## File — `atom-inventory_<feature-slug>.md`

```markdown
---
id: <feature-id>
phase: verify
sub-phase: crosscheck — atom inventory (testability sweep)
run-date: <YYYY-MM-DD>
spec-version: <spec.md version/date if stated>
read-coverage: <files actually opened; "seen-but-unread + reason">
counts: { atoms: <n>, specified: <n>, rq: <n>, assumption: <n>, critical-rq: <n> }
---

## Atom Ledger
| Atom ID | Screen / Component | Category (1–9) | Testable detail (exact) | Source (spec §/contract/mockup) | Status | RQ | Note |
|---------|--------------------|----------------|-------------------------|---------------------------------|--------|----|------|
| AT-001 | SMS content field | 3 char-limit | max 160 chars | FR-004 | ✅ | — | |
| AT-002 | SMS content field | 1 error text | exact over-limit message + code | — | ❓ | RQ-01 | SA silent on message text |
| AT-003 | Cancel button | 5 per-role UI-state | hidden when role ≠ Marketing | mockup only | 🔒 | RQ-02 | seen in mockup, not in spec |

## Open RQs (to SA — a human answers; QA never guesses)
| RQ ID | Atom | Question | Severity | Blocks |
|-------|------|----------|----------|--------|
| RQ-01 | AT-002 | What is the exact over-limit error text + alert code? | Major | design of TC-negative |
| RQ-02 | AT-003 | Is Cancel hidden or disabled for non-Marketing roles? | Critical | RBAC security TC |
```

## Handoff

- **`design`** consumes this ledger — every ✅-specified atom maps to **≥1 TC** (not just every FR).
- **`coverage`** audits **atom→TC** (`MISSING_ATOM_COVERAGE`), not only FR→TC — 100% FR coverage ≠ atoms covered.
- **SA answers** is a human action: hand the crosscheck report to the SA, or log the RQs via
  `templates/redmine-defect.md`. When an RQ is answered, record it back here and flip the atom to ✅.

## Rules

- **No fabrication** — never invent an expected value for a ❓/🔒 atom; keep it an RQ until the SA answers.
- **Deterministic** — same spec + same contracts ⇒ same Atom IDs and counts.
- **Stay in lane** — requirement *wording* quality → `/speckit-checklist`; spec↔plan↔tasks consistency →
  `/speckit-analyze`. This sweep only mines *testable atoms* and raises RQs.

# Template: generated `<feature>.spec.js` — Playwright spec from TCs (bundled into `speckit-qa` — mode `execute`, §5.1)

Ported from the marketplace `qa-automation-script` (stage 06a) so `execute` **generates** the Playwright suite
from the designed artifacts instead of hand-writing a fixed template — no separate `/qa-automation-script`
command. Runs inside `execute` §5.1, **before** the run. It generates/refines the spec + wires evidence; it does
**not** create/edit TCs or test data (that is `design` / `test-data`) and does **not** interpret results (that is
`report` §6.8). If the TCs are too thin to automate, point back to `design` — never invent one.

**Inputs:** `test-cases_<feature>.csv` (TC) + `test-data_<feature>.json` (data) + `test-flows_<feature>.md`
(§4.0 flows/navigation). **Output:** `FEATURE_DIR/e2e/<feature>.spec.js` + `build-execution-report.js`.

## A0 — Pre-Generation Input Gate (HARD STOP — ask, then wait, before generating anything)

The spec needs three **env-level** facts the requirement artifacts (crosscheck/design/test-data) usually do
**not** carry. Find them in the user's message or the artifacts; if **any** is missing, **stop and ask all three
at once via AskUserQuestion** — do not write the spec, scaffold, create files, or touch `00-INDEX.md` first
(scaffolding is work, not a way around the gate). Expect to ask — this is normal, not an exception.

1. **BASE_URL** — the SIT/UAT target to test against.
2. **Credentials** — username + password for **every role** a TC logs in as.
3. **Entry navigation path** — the click order from login → the screen under test, so `beforeEach` navigates
   correctly instead of guessing menu selectors.

Only generate a runnable spec when all three are supplied. A skeleton (`test.fixme` per TC) is produced **only on
the user's explicit instruction** after they've seen this gate — never as a default because "no env".

## Conventions every generated spec MUST embed (don't leave for later hand-fixing)

1. **No `timeout:0` hang** — `test.use({ actionTimeout: 15000, navigationTimeout: 30000 })` +
   `test.setTimeout(180000)`; every `waitForLoadState()` gets `{timeout:N}` + `.catch(()=>{})`.
2. **readonly input** (date picker) — set-value + dispatch (`input`/`change`/`blur`), not `.fill()`.
3. **Scoped assertions** — bind to a specific element (`#form-error`) with `toContainText`, not a loose `getByText`.
4. **Server-side validation** — bypass the client control (`maxlength`/`disabled`) before sending the over-limit
   value, then assert real `value.length` (prevents a DEF-001-style false positive).
5. **Mutation data** — EPOCH-window / timestamp-slot to avoid leftover + in-suite collision; **cleanup in
   `afterEach`** (a registry `Set`), not at the end of the test body.
6. **One retry layer** — `test.describe.configure({retries:2})`; no inner retry nested in login/goto.
7. **Evidence — use the bundled engine, never reimplement snap.** Reuse the `evidence()` helper the runner ships
   (`scripts/playwright/`): `snapOk`/`snapError` **at the assertion moment before cleanup** (red box + caption
   auto), `recField(label,value)` for the real runtime value. Never a full-page shot after cleanup (a "success"
   image / empty table is not evidence). Screenshots → `FEATURE_DIR/evidence/<TC-ID>_<PASS|FAIL>_<ts>.png`.
8. **Strict data** — every entered/selected value comes from `test-data_<feature>.json`; no match → throw, never
   fallback.
9. **TC ↔ test() contract** — 1 TC → ≥1 `test('TC-### …')`; a TC that can't be automated → `test.fixme()` with a
   reason (blocked-RQ / integration / assumption), never dropped.
10. **Foreground only** — run `--headed --workers=1`.

## A5 — Pre-Execution Readiness Gate (before claiming "ready to run"; extends §5.1 step 1)

Block (don't fabricate a run) if any fails — record the blocker, mark the run not-ready:
1. **Environment up** — target host responds (ping/HTTP).
2. **Credentials valid** — the spec's login actually works.
3. **Test data provisioned** — data from `test-data` is in the system / can be created.
4. **Dependencies/mocks** — external services/webhooks the flows (§4.0) rely on are ready or mocked.
5. **BASE_URL / env var** — set to the right feature + host.

## Output (strict, in order)
1. **Readiness gate result** (pass / blocker) — first.
2. **`<feature>.spec.js`** — all conventions above; fixme for un-automatable TCs with reasons.
3. **`build-execution-report.js`** — the per-feature report generator.
4. **Coverage note** — of all designed TCs: automated / fixme / skipped counts (for §6.8 to check).
5. **Run command** + the env vars to export.

## Rules
- **A0 HARD STOP first** — no URL/creds/nav → ask all three, wait, before any file work.
- **No fabrication** — never invent a TC, a value, or a result; un-automatable TC = `test.fixme` + reason.
- **Stay in lane** — TC/data gaps route back to `design`/`test-data`; result interpretation is `report` §6.8.
- **Deterministic** — same TC + data + flows ⇒ the same spec structure and TC↔test() mapping.

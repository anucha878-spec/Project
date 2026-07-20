# Playwright E2E Runner — bundled into `speckit-qa execute`

This folder is the **reproducible browser-execution layer** for `/speckit-qa execute`.
It turns the `E2E`-level rows in `test-cases_<feature>.csv` into real Playwright runs,
captures screenshots into the feature's `evidence/` folder, and writes the Pass/Fail
result back into the CSV so every TC stays traceable.

> Principle (inherited from SKILL.md): **never fabricate results.** A TC is `Pass` only
> if Playwright actually executed it and the assertion held. Unobserved = `Not Run`.

---

## Two execution paths

| Path | When to use | How |
|------|-------------|-----|
| **A — Standalone `@playwright/test`** (this bundle) | The app is reachable from the machine running Claude (local or tunnelled `QA_BASE_URL`). Reproducible, CI-friendly, real `results.json`. | `run.ps1` / `run.sh` |
| **B — MCP browser tools** (`mcp__plugin_ecc_playwright__*`) | Quick / exploratory, or when you can only drive a browser interactively (no node toolchain). Evidence via `browser_take_screenshot`. | model-driven, see §"MCP fallback" |

Pick **A** by default for `execute`. Fall back to **B** when node/npm is unavailable or the
target is only reachable through the agent browser.

---

## Required inputs (env vars)

| Var | Meaning | Example |
|-----|---------|---------|
| `QA_BASE_URL` | Base URL of the running app under test | `http://epirusapp:9047` |
| `QA_FEATURE_DIR` | Absolute path to `specs/<feature>/` (where the CSV + `evidence/` live) | `D:\Claude\Project\SpecKitTest\specs\002-content-maintenance` |
| `QA_EVIDENCE_DIR` | Where screenshots are written (defaults to `$QA_FEATURE_DIR/evidence`) | — |
| `QA_TC_CSV` | The tracker to update (defaults to the single `test-cases_*.csv` in `QA_FEATURE_DIR`) | — |
| `QA_USER` / `QA_PASS` | Login creds if the flow needs auth | — |

`run.ps1`/`run.sh` derive `QA_EVIDENCE_DIR` and `QA_TC_CSV` from `QA_FEATURE_DIR` when omitted.

---

## How `execute` mode uses this bundle

1. Resolve `FEATURE_DIR` (SKILL.md step 1) and confirm the app is up at `QA_BASE_URL`.
2. **Copy the templates into the feature** the first time (so each feature owns its specs):
   - `playwright.config.ts` → `FEATURE_DIR/e2e/playwright.config.ts`
   - `tests/e2e.spec.ts`     → `FEATURE_DIR/e2e/tests/<feature>.e2e.spec.ts`
   Then fill in the `TODO` selectors/steps per TC. Keep one `test()` per E2E TC.
3. Run: `pwsh run.ps1 -FeatureDir <FEATURE_DIR> -BaseUrl <QA_BASE_URL>` (or `./run.sh`).
4. `run.*` installs Playwright (first run only), executes the suite, emits
   `.artifacts/results.json`, then calls `sync-results.mjs`.
5. `sync-results.mjs` maps every executed TC back into `test-cases_<feature>.csv`:
   - Playwright `passed` → `Pass`
   - `failed` / `timedOut` → `Fail` (+ a `DEF-<TC>` stub in `Defect_Ref`)
   - `skipped` → `Blocked`
   - a TC present in the CSV but **not** in `results.json` is left untouched (`Not Run`)
6. Hand the failed/blocked list to `/speckit-qa report` to produce the SIT record.

### TC ↔ test() contract (mandatory)

Every Playwright test **title must start with the TC ID** so the mapper can find it:

```ts
test('TC-001 List default load — start_date DESC + badge', async ({ page }) => { ... });
```

Tag the dimension/priority with Playwright tags for filtering:

```ts
test('TC-039 Non-Marketing 403 @security @smoke', async ({ page }) => { ... });
```

Run a subset: `npx playwright test --grep "@smoke"` or `--grep "TC-009|TC-028"`.

---

## Evidence convention

Use the `evidence()` helper from the spec template — it writes
`$QA_EVIDENCE_DIR/<TC-ID>-<step>.png` so screenshots line up with `verify.md §3`
and the CSV `Notes` column. Example: `TC-009-create-success.png`.

---

## MCP fallback (Path B)

When node is unavailable or the target is only reachable via the agent browser, drive
the same TC steps with the MCP tools and capture evidence manually:

1. `mcp__plugin_ecc_playwright__browser_navigate` → `QA_BASE_URL/<feature path>`
2. `browser_snapshot` to read the accessibility tree, `browser_click` / `browser_type` per step
3. `browser_take_screenshot` → save as `<TC-ID>-<step>.png` under `evidence/`
4. Update the CSV `Status` **by hand** (still per the no-fabrication rule), citing the PNG in `Notes`

Path B produces no `results.json`, so `sync-results.mjs` is not used — record outcomes directly.

---

## Files in this bundle

| File | Role |
|------|------|
| `playwright.config.ts` | Config template (reporters, screenshot/trace, th-TH locale, baseURL from env) |
| `tests/e2e.spec.ts` | Spec template: TC↔test() pattern, `evidence()` + `login()` helpers, worked stubs |
| `sync-results.mjs` | `results.json` → `test-cases_<feature>.csv` status writer |
| `run.ps1` / `run.sh` | Install → run → sync wrapper |

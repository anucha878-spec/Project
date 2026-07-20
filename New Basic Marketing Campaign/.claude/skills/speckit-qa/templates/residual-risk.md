# Residual Risk Assessment of `Not Run` / `Blocked` TCs (bundled into `speckit-qa report`)

`report` mode must not present a wall of `Not Run` rows as if they were equal. Before issuing the
go/no-go verdict it **triages every un-executed TC by residual risk** and tells the reader which gaps
actually block release and how to close each one.

## Why this exists

A TC can be `Not Run` for very different reasons:
- it is **covered by another layer** (e.g. a passing unit-test suite) → low residual risk, regression-only;
- it has **no automated coverage at all** and touches security / data-integrity / the core business
  outcome → high residual risk, a real go-live concern.

The verdict is only honest if it separates the two.

## Severity rubric (reuse the Defect Log severities)

| Severity | Assign when the TC is un-executed AND … |
|----------|------------------------------------------|
| **Blocker** | Core flow cannot work, or a data-loss / auth-bypass path exists with **no** mitigating coverage. Feature must not ship. |
| **Critical** | Security (injection/XSS/authz), data integrity (soft-delete/no-physical-delete), or the feature's **primary business outcome** is unverified **and not covered** by another passing layer. |
| **Major** | Important validation, state transition, or audit/compliance behavior unverified. Functional defect if wrong; **may** have partial unit coverage (note it → lowers residual risk). |
| **Minor** | Cosmetic, edge, or low-impact — or already fully covered by a passing unit/integration test (verified elsewhere). |

**Coverage discount:** if a `Not Run` TC is demonstrably covered by a passing test at another level,
record that in the *Coverage today* column and drop the severity one notch (Critical→Major, Major→Minor).
A claim of coverage must point at a real artifact (test name, suite count, review record) — never assumed.

## Procedure in `report` mode

1. List every TC with `Test Status ∈ {Not Run, Blocked}` from `test-cases_<feature>.csv`.
2. For each, fill the table below.
3. Roll up: count Blocker/Critical/Major still open. **Any open Blocker or Critical with no coverage
   discount ⇒ verdict cannot be "go"** — call it `no-go` or `partial-pass (conditional)` and list the
   blocking TCs explicitly.
4. Cross-check the Constitution/PDPA gate (SKILL §7): an un-covered security/RBAC/audit MUST-principle is
   at least Critical.

## Output table (append to `verify-sit-run_<date>.md`, section "Residual Risk")

| TC ID | Severity | Why unverified / risk if it fails | Coverage today | Test approach to close |
|-------|----------|-----------------------------------|----------------|------------------------|

- **Why unverified / risk** — one line: what breaks for the user/business if this behavior is wrong.
- **Coverage today** — `unit suite (N green)`, `manual review only`, `none`, etc. Be specific; this is
  what justifies (or removes) the coverage discount.
- **Test approach to close** — the concrete cheapest way to get a real result: which level (unit /
  integration / live E2E), seed data, payload, and the assertion. Prefer the bundled Playwright runner
  (`scripts/playwright/`) for live E2E and an integration test for job/concurrency/DB-state cases.

## Rules

- Never downgrade a security/data-integrity TC to Minor without a **named** passing test as evidence.
- A `Blocked` TC (infra/credentials/env missing) keeps its underlying severity — being blocked does not
  make it safe; it makes it *unknown*. Surface the blocker so it can be unblocked.
- Keep the assessment deterministic: same un-run set + same coverage facts → same severities.

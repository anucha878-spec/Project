# Defect Lifecycle Sync — Redmine (bundled into `speckit-qa execute` / `regression`)

Runs **after every `execute` or `regression`** run, once results are recorded. Where `execute §5.2`
(`redmine-defect.md`) only **opens** a defect on a fresh Fail, this playbook keeps each **existing**
ticket in lockstep with the retest: it posts the result **with a screen capture**, captures the
**Root Cause** after SA/Dev resolve it, and drives the **status transition (reopen / close)** — then
**summarizes** and stops so **the user commits**.

> **This supersedes the old blanket rule "never auto-close — Dev/1ST close" in `redmine-defect.md`.**
> QA may now close/reopen — but **only** on an **observed** retest transition (never fabricated) and
> **only after the user confirms** the status change (closing a ticket is outward-facing and hard to
> reverse). If unattended / no confirmation, post the comment + evidence and *recommend* the transition
> instead of applying it.

## When it runs

After `execute` (§5) or `regression` (§6.5) has written results back to `test-cases_<feature>.csv`,
iterate over **every TC in the run's impact set that carries a `Defect_Ref`** (`#<id>`). A TC that
failed this run with an *empty* `Defect_Ref` is handled by `redmine-defect.md` (open first) and then
enters this loop on the next run.

## The five steps (per defect, in order)

### 1. Comment + screen capture (every run — mandatory)
Post a Redmine note on `#<id>` recording this run's outcome, and **attach the test-result screen
capture** so the ticket carries the evidence, not just text:

- Evidence file: `FEATURE_DIR/evidence/<TC-ID>-*.png` (produced by the Playwright `evidence()` helper,
  §5.1, or a live MCP `browser_take_screenshot`). **Never attach a screenshot for a TC that was not
  actually executed this run** (no-fabrication).
- Note body (deterministic): `TC-### · <run-date> · <Baseline> → <Now> · <one-line actual-vs-expected>`.
- Upload path: REST `POST /uploads.json` → token → include in the issue `PUT` as `uploads:[…]`
  (the runner does this). Browser fallback: attach via the New-note file field.

### 2. Root-cause capture — after SA/Dev sets it **Resolved**
When the ticket status is **Resolved** (SA or Dev has worked it), pull the resolver's note and record
the **Root Cause / what changed** so it is not lost:

- Write the root-cause line into the ticket's root-cause **custom field**
  (`REDMINE_ROOTCAUSE_FIELD_ID`) if configured; otherwise into a `Root Cause:` note.
- **Mirror it** into the run report RCA block (`verify-*-run_<date>.md §6.8`: layer `UI/API/DB/data/config`
  + one-line cause) and into the CSV `Notes` for that TC. One source of truth, three places kept in sync.
- Do **not** invent a root cause — if the resolver left none, note `root cause not stated by SA/Dev` and
  ask before closing.

### 3. Status transition — reopen / close (confirmation-gated)
Drive the ticket status from the **observed** retest transition (§6.5 step 4 classifies it):

| Transition (this run) | Action on `#<id>` | Note |
|-----------------------|-------------------|------|
| `Fail → Pass` (fix verified) | **Close** (status Closed, resolution Fixed) | `verified fixed <date>` — keep `Defect_Ref` as history, do **not** blank it |
| `Fail → Fail` on a **Resolved** ticket (fix not effective) | **Reopen** | `still failing after resolve <date>` — no duplicate ticket |
| `Fail → Fail` on an already-open ticket | comment only (step 1) | leave status; add "still failing" note |
| `Pass → Fail` (**regression**) | open a **new** `[regression]` defect (`redmine-defect.md §5.2`) | link the original `#id` in the body |
| `Pass → Pass` | no ticket action | stable |

**Confirmation gate:** before applying a **Close** or **Reopen**, present the intended change and wait
for the user's go-ahead. With the go-ahead, apply it; without it, leave the ticket and record the
recommended action in the summary. Comment + evidence (step 1) never needs confirmation.

### 4. Summarize first (before any commit)
Emit a **Lifecycle Summary** table so the run is legible at a glance:

`| TC ID | Defect | Baseline → Now | Redmine action | Root cause | Evidence |`

one row per defect touched. State counts (fixed-and-closed / reopened / new-regression / commented-only).

### 5. Hand off — the **user** commits (QA never auto-commits)
QA **stops here**. Do **not** run `git commit`. Instead:

- List the QA artifacts changed this run (CSV, 16-col checklist, `verify-*-run_<date>.md`, any `.xlsx`
  twin regenerated per §6 step 7).
- Propose a commit message in the team convention, e.g.
  `Task/Defect #<id>: SIT regression <feature> <date> — <n> fixed, <n> reopened`.
- Then wait for the user to commit. This is the "สรุปผลก่อน แล้วจึงให้ฉัน Commit ทุกครั้ง" rule.

## Config (env — extends `redmine-defect.md`)

| Var | Meaning |
|-----|---------|
| `REDMINE_URL` / `REDMINE_API_KEY` / `REDMINE_PROJECT` | as in `redmine-defect.md` |
| `REDMINE_STATUS_CLOSED_ID` | status id for **Closed** (instance-specific; default 5) |
| `REDMINE_STATUS_REOPEN_ID` | status id to **reopen** to (e.g. In Progress / Reopened; default 2) |
| `REDMINE_ROOTCAUSE_FIELD_ID` | optional — custom-field id holding Root Cause |

If the REST key `401`s (see `redmine-access` memory — the API key route has failed in practice), fall
back to the **authenticated Playwright MCP browser**: `browser_navigate` to the issue, upload the
screenshot via the note's file field, set the status dropdown, and submit. Read the resulting status
back to confirm.

## Runner

`scripts/redmine/lifecycle.mjs` — comment + attach screenshot + (optional) set status + set root-cause:

```
REDMINE_URL=https://redmine.ochi.link REDMINE_API_KEY=xxxx REDMINE_PROJECT=csms \
node scripts/redmine/lifecycle.mjs --id 12345 --tc TC-059 \
  --note "TC-059 · 2026-07-07 · Fail → Pass · %/_ now treated as literal" \
  --attach specs/002-content-maintenance/evidence/TC-059-search.png \
  --status close --root-cause "DB: LIKE built without ESCAPE; added parameter binding" \
  [--dry-run]
# prints UPDATED #12345 (status=Closed, attached=1). --dry-run previews without writing.
```

`--status close|reopen` is applied **only** when passed (the skill passes it after the confirmation
gate). Omit it to comment + attach + root-cause without touching status.

## Rules

- **Observed only** — comment, screenshot, transition, and root cause must all come from a real run /
  a real resolver note. No fabricated status, no invented RCA.
- **Confirmation before Close/Reopen** — outward-facing status changes wait for the user.
- **QA never commits** — summarize + propose the message; the user runs the commit.
- **Keep `Defect_Ref` as history** — closing a ticket does not blank the reference; `report`'s Defect Log
  still cites the same `#<id>`.
- **Deterministic** — same TC + same transition → same note prefix and same action, so re-runs dedup.

# Defect → Redmine (bundled into `speckit-qa execute`)

When `execute` records a **Fail**, the defect must not live only in the CSV — open a Redmine issue so
Dev has a ticket, and write the issue number back into the tracker. This closes the loop between QA and
the team's `Task/Defect #XXXXX` commit convention.

## When to open (and when NOT to)

- Open **one** Redmine Defect for each TC whose result is `Fail` **and** whose `Defect_Ref` is still empty.
- **Dedup first**: if an open Redmine issue already has this `TC-###` in its subject, add a note/comment
  instead of creating a duplicate, and reuse that issue number.
- **Never** auto-open for `Not Run` / `Blocked` (no observed failure = no defect — no-fabrication rule).
- **Never** auto-close or resolve issues. QA opens and comments; Dev/1ST close.
- A `Pass→Fail` transition found by `regression` mode is a **regression defect** — open it the same way,
  tagged `regression` in the subject.

## Config (env)

| Var | Meaning |
|-----|---------|
| `REDMINE_URL` | base, e.g. `https://redmine.ochi.link` |
| `REDMINE_API_KEY` | personal API key (Redmine → My account → API access key) |
| `REDMINE_PROJECT` | project identifier the feature belongs to |
| `REDMINE_TRACKER_ID` | optional — the "Defect"/"Bug" tracker id |

If no API key is available, fall back to the **Playwright browser** path (authenticated session, per the
`redmine-access` memory): open `New issue`, fill the same fields, submit, read the resulting issue id.

## Field mapping (TC Fail → issue)

| Issue field | From |
|-------------|------|
| Project | `REDMINE_PROJECT` |
| Tracker | Defect / Bug |
| Subject | `[<FR-id>][<TC-ID>] <Scenario_Name> — <one-line actual-vs-expected>` (prefix `[regression]` if a Pass→Fail) |
| Description | TC ID · Requirement · Preconditions · Steps · **Expected** · **Actual** · Environment/build · Evidence filenames |
| Priority | severity → `Blocker=Immediate, Critical=High, Major=Normal, Minor=Low` (use the residual-risk severity, or the Defect Log severity) |
| Status | New |

Description template:
```
TC: <TC-ID>  (<Requirement>)
Environment: <env / build version>
Preconditions: <...>
Steps:
  1. <...>
Expected: <...>
Actual:   <...>
Evidence: <evidence/<TC-ID>-*.png ...>
Source: specs/<feature>/test-cases_<feature>.csv
```

## After creating

1. Write `#<id>` into the CSV `Defect_Ref` column for that TC (and `Redmine No.` in the 16-col checklist).
2. Leave `Test Status = Fail` (the ticket does not make it pass).
3. In `report` mode, the Defect Log table cites the same `#<id>` — they must match.

## Runner

`scripts/redmine/create-defect.mjs` does dedup-search + create (or comment) via the Redmine REST API:

```
REDMINE_URL=https://redmine.ochi.link REDMINE_API_KEY=xxxx REDMINE_PROJECT=csms \
node scripts/redmine/create-defect.mjs --tc TC-040 \
  --subject "[FR-006][TC-040] SQLi in LIKE search — payload not escaped" \
  --description "$(cat defect-body.txt)" --priority High
# prints CREATED #12345  (or COMMENTED #<existing> on dedup); add --dry-run to preview
```

The last line of stdout is the bare issue id — capture it and write it back to `Defect_Ref`.

## Rules

- Only open a defect for a failure QA actually observed (real Fail in `results.json` or a recorded live run).
- Keep subject deterministic (`[FR][TC-ID] …`) so dedup works on re-runs.
- One TC → one issue; if several TCs share a root cause, link them in the description, do not silently merge.

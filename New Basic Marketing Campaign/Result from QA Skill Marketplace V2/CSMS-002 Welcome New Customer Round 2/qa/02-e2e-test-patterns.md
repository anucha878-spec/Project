# 02 — E2E Flow Patterns — CSMS-002 Welcome New Customer Round 2

**Feature:** `csms-002-welcome-round2` · **Skill:** `/e2e-flow-designer` (02) · **Date:** 2026-07-09
**Input:** `qa/01-requirement-review.md`, `qa/00b-atom-inventory.md`, `spec.md`.
**Note:** Headless batch — "flows" are the batch pipeline stages and the Manual-Fix operator journey, not UI screens. Named in plain language for non-team readers; FR/atom refs attached.

## 1. Summary
- **Flows:** 6 (FLOW-001 daily auto send · FLOW-002 dual-channel send/exclude decision · FLOW-003 in-round & cross-round dedup · FLOW-004 round-failure notification · FLOW-005 Manual Fix re-run · FLOW-006 round-1 linkage & 2-level logging)
- **State machine:** per-target lifecycle — 8 states, **15 transitions** (12 valid / 3 invalid) → divisor for 03/04.
- **Scenario groups:** 6 flows × {positive/negative/edge/boundary/role-variant} — see §4.
- **Coverage note:** All 26 FRs and all 65 atoms map to ≥1 flow. Atoms carrying RQ (A-42/A-44/A-52/A-59, plus A-45/A-65) reflected as `[ASSUMPTION]`/RQ handoff to 03, not resolved here.
- **Flow defects flagged:** `MISSING_CROSS_SYSTEM_HANDLING` partially — external registration-service contract undefined (RQ-006); `AMBIGUOUS_GUARD` on failure SLA (RQ-004). Flagged, not closed.

## 2. User Journeys

#### FLOW-001: Daily automatic round-2 send (primary / happy)
- **Actor:** `SYSTEM_BATCH` · **Trigger:** scheduler 10:00 น. daily · **Pre:** Active config exists; round-1 (CSMS-001) history populated.
- **Steps:** 1) Read N from `DATE_COUNT` (Active). 2) Pull round-1 targets where `sms_sent_date + N = today`. 3) Check policy Inforce by type. 4) Require phone (mobile1→mobile2). 5) Drop Do Not Contact. 6) Convert policy_no→cardNo. 7) Check LINE+APP registration. 8) Apply send/exclude truth table. 9) Dedup (cross-round + in-round grouping). 10) Build message (template 111 + vars). 11) Build CSV (UTF-8, standard filename). 12) Deliver via ESB→SMS Gateway. 13) Write 2-level log with round-1 linkage + refer_no + sent_status.
- **Expected end-state:** Eligible customers get exactly one SMS; every processed/skipped item logged to `WELCOME_NEW_CUST_APP`.
- **Covers:** FR-001..FR-018.2 · A-01..A-49

#### FLOW-002: Dual-channel send/exclude decision (business rule)
- **Actor:** `SYSTEM_BATCH` · **Trigger:** per target after cardNo resolved · **Pre:** LINE & APP results available.
- **Steps:** 1) Read LINE result (code, isBlockLine). 2) Read APP result (code). 3) Evaluate truth table. 4) Send or exclude with logged reason.
- **Expected end-state:** Send only for the two allowed combinations; all others excluded (SC-003 wrong-group=0).
- **Covers:** FR-008..FR-011 · A-15..A-21

#### FLOW-003: Dedup — in-round grouping + cross-round guard (business rule)
- **Actor:** `SYSTEM_BATCH` · **Pre:** target set may contain multi-policy customers and previously-sent customers.
- **Steps:** 1) Exclude any target with success history (policy_no+type+phone, `sms_sent_date IS NOT NULL`). 2) Group remaining by (name, surname, phone). 3) Pick representative (oldest; tie-break smallest policy_no). 4) Send 1 message; log non-selected duplicates.
- **Expected end-state:** ≤1 message per customer per round and per lifetime (SC-002).
- **Covers:** FR-013, FR-013.1, FR-018.2 (guard) · A-24..A-29

#### FLOW-004: Round-failure notification (error path)
- **Actor:** `SYSTEM_BATCH` → IT Dev + Users · **Trigger:** extract/file failure, service down (retry-exhausted), or no Active config.
- **Steps:** 1) Detect round-level failure. 2) (service-down) retry ≤3 spaced. 3) Stop round. 4) Email IT Dev + Users with batch name + failed step.
- **Expected end-state:** Round halts; email sent within SLA (RQ-004; SC-005 = 15 min).
- **Covers:** FR-012, FR-016, FR-019 · A-22, A-23, A-36, A-50..A-53

#### FLOW-005: Manual Fix re-run (secondary / operator)
- **Actor:** `IT_ADMIN` · **Trigger:** operator selects date range on central Dashboard · **Pre:** a prior round failed or was incomplete.
- **Steps:** 1) Select date range (= processing dates to re-run). 2) System derives targets = round-1 sent_date = selected date − current N. 3) Reprocess only `sms_sent_date IS NULL`. 4) Send to still-pending; never resend 'S'.
- **Expected end-state:** Pending items sent; no duplicates to succeeded (SC-007).
- **Covers:** FR-020, FR-020.1, FR-020.2 · A-53..A-58

#### FLOW-006: Round-1 linkage & 2-level logging (integration)
- **Actor:** `SYSTEM_BATCH` · **Pre:** each target originates from a round-1 record.
- **Steps:** 1) On log write, set ID ref back to CSMS-001 record. 2) Write campaign-level log (message, type abbrev, create time). 3) Write per-policy log (fields per FR-018b) + refer_no + sent_status. 4) Feed central daily report (counts + ORD/IND/GOV/PA breakdown).
- **Expected end-state:** 100% of sent items traceable to round-1 (SC-006); report reflects run.
- **Covers:** FR-018, FR-018.1, FR-018.2, FR-020.2(report) · A-41..A-49, A-59, A-60

## 3. State Machine — per-target lifecycle
States: `SELECTED` → `FILTER_PASSED` / `FILTERED_OUT` → `CARD_RESOLVED` → `REG_CHECKED` → `SEND_ELIGIBLE` / `EXCLUDED` → `SENT('S')` / `SKIPPED('F')`

| # | From | Event | To | Guard/Condition | Actor | Valid? |
|---|---|---|---|---|---|---|
| 1 | SELECTED | cohort day-count match (sent+N=today) | FILTER_PASSED | N from Active config | SYSTEM | ✅ |
| 2 | FILTER_PASSED | not Inforce / no phone / Do Not Contact | FILTERED_OUT | per FR-004/005/006 | SYSTEM | ✅ |
| 3 | FILTER_PASSED | passes all filters | CARD_RESOLVED (attempt) | — | SYSTEM | ✅ |
| 4 | CARD_RESOLVED | cardNo not found | SKIPPED('F') | FR-007 | SYSTEM | ✅ |
| 5 | CARD_RESOLVED | cardNo found | REG_CHECKED | — | SYSTEM | ✅ |
| 6 | REG_CHECKED | truth-table = send (a)/(b) | SEND_ELIGIBLE | FR-009 | SYSTEM | ✅ |
| 7 | REG_CHECKED | APP registered / LINE not-blocked | EXCLUDED | FR-010 | SYSTEM | ✅ |
| 8 | REG_CHECKED | E13 / empty channel/isBlockLine | SKIPPED('F') | FR-011 | SYSTEM | ✅ |
| 9 | SEND_ELIGIBLE | no insured name | SKIPPED('F') | FR-015.1 | SYSTEM | ✅ |
| 10 | SEND_ELIGIBLE | dedup: prior success / non-representative | EXCLUDED | FR-013/013.1 | SYSTEM | ✅ |
| 11 | SEND_ELIGIBLE | gateway accepts | SENT('S') | FR-017/018.2 | SYSTEM | ✅ |
| 12 | SEND_ELIGIBLE | gateway send-fail | SKIPPED('F') | EC; no success date | SYSTEM | ✅ |
| 13 | SKIPPED('F') | daily round auto-retry | (blocked) | FR-020.1 forbids | SYSTEM | ❌ invalid |
| 14 | SENT('S') | Manual Fix resend | (blocked) | FR-020 forbids | IT_ADMIN | ❌ invalid |
| 15 | SKIPPED('F') | Manual Fix reprocess (sent_date IS NULL) | SEND_ELIGIBLE | FR-020.1 allows | IT_ADMIN | ✅ |

**Totals: 15 transitions — 12 valid (0-switch baseline) / 3 invalid (#13, #14; #13 & #14 are the two forbidden auto/duplicate paths) → negative TCs.**

## 4. Scenario Groups (per flow)
| Flow | Positive | Negative | Edge | Boundary-trigger | Role-variant |
|---|---|---|---|---|---|
| FLOW-001 | full eligible send | no Active config→stop | empty round-1 day | day-count N-1/N/N+1 | SYSTEM only |
| FLOW-002 | rule (a), rule (b) | E13/empty result→'F' | late App registration | — | SYSTEM |
| FLOW-003 | 1 msg/customer | — | multi-policy same customer | grouping tie-break | SYSTEM |
| FLOW-004 | email on failure | retry-exhausted→stop | SLA timing (RQ-004) | retry count 3 | SYSTEM→IT/User |
| FLOW-005 | reprocess pending | resend 'S' (must not) | N changed 20→15 mid-flight | date-range=date−N | IT_ADMIN |
| FLOW-006 | linkage + 2-level log | no-name skip logged 'F' | non-selected dup logged | — | SYSTEM |

## 5. Cross-System / Async Dependency Map
| Flow step | External/Service | Sync/Async | Race/Timing risk | External-fail behavior |
|---|---|---|---|---|
| cardNo convert | customer-check service | sync | miss → data anomaly | skip+'F' (FR-007) |
| LINE/APP check | registration service (`cisappapi`) | sync per target, batched ~1,000/day | late registration between screen & send (accepted, A-61) | E13 per item → skip+'F'; whole down → retry ≤3 then stop (FR-011/012) |
| deliver file | ESB → SMS Gateway | async (file handoff) | gateway send-fail after handoff | record 'F' no success date (A-63) |
| config read | campaign config table | sync | config changed mid-flight (N) | no Active → stop+email (FR-016) |
| report feed | central CSMS daily report | async | breakdown depends on frozen reason taxonomy | RQ-002 |

## 6. Handoff Notes → 03
- **Decision-table (divisor):** FLOW-002 send/exclude — 3 primary conditions (LINE code/isBlockLine, APP code) → enumerate feasible rules incl. E13/empty. FLOW-001 Inforce — type × status decision table.
- **BVA:** day-count N boundary (N-1/N/N+1); phone (mobile1 empty→mobile2; both empty).
- **State-transition:** cover all 12 valid transitions (0-switch) + 2 forbidden (#13 daily-retry-'F', #14 Manual-Fix-resend-'S') as negative TCs.
- **Negative-per-branch:** cardNo-not-found, E13/empty, no-name, no-config, gateway-fail.
- **`[ASSUMPTION]`/RQ to carry:** RQ-001 (policy-type code) affects truth-table & report keys; RQ-003 (log/CSV layout) affects FLOW-006 assertions; RQ-002 (report FR#) affects A-59; RQ-004 (SLA) affects FLOW-004 timing oracle.

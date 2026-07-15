---
id: csms-001-welcome-line
phase: qa
sub-phase: coverage-review
run-date: 2026-07-09
iteration: 1
verdict: covered
---

# Coverage Review — CSMS-001 Welcome New Customer (LINE)

Audit-only gate over the FR/SC/EC spine of `spec.md` against the 41 TCs from `design`. No TCs written or edited.

## Pass 1 — Gap (FR/SC with zero TC)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| FR-001 | Daily scheduler 10:00 | TC-001 | — | covered |
| FR-002 | Select ORD/IND/PA T-1 Inforce | TC-002, TC-003 | — | covered |
| FR-003 | 2026 cutoff | TC-004 | — | covered |
| FR-004 | mobile_no required | TC-005 | — | covered |
| FR-005 | Do Not Contact + type mapping | TC-006, TC-007, TC-037 | — | covered |
| FR-006 | Eligibility 3-rule | TC-008, TC-009, TC-010 | — | covered |
| FR-007 | E02 internal | TC-011 | — | covered |
| FR-008 | E13 skip+log | TC-012 | — | covered |
| FR-008a | Out-of-cond skip+log | TC-013 | — | covered |
| FR-008b | API-down retry+stop+email | TC-014 | — | covered |
| FR-009 | In-round dedup MIN(issue_date)+tie | TC-015, TC-016 | — | covered |
| FR-010 | Cross-round history dedup | TC-017, TC-041 | — | covered |
| FR-011 | Template order | TC-018 | — | covered |
| FR-011a | No-name skip+log | TC-019 | — | covered |
| FR-012 | Var substitution + active link | TC-020, TC-021 | — | covered |
| FR-012a | No active link stop+email | TC-022 | — | covered |
| FR-013 | CSV naming/UTF-8 | TC-023, TC-024 | — | covered |
| FR-014 | ESB→Gateway | TC-025, TC-038 | — | covered |
| FR-015 | CSMS_LOG | TC-026 | — | covered |
| FR-016 | History all fields | TC-027, TC-038 | — | covered |
| FR-016a | S/F reconcile semantics | TC-028 | — | covered |
| FR-017 | credit_amount | TC-029 | — | covered |
| FR-018 | Failure alert email | TC-030 | — | covered |
| FR-019 | Manual trigger + validation | TC-031, TC-032, TC-040 | — | covered |
| FR-020 | Idempotent manual fix | TC-033, TC-039 | — | covered |
| FR-020a | Repair date = T-1 | TC-034 | — | covered |
| FR-020b | No auto-retry of F | TC-035 | — | covered |
| FR-021 | Daily report | TC-036, TC-040 | — | covered |
| SC-001 | 100% eligible receive next-day | TC-002, TC-025, TC-041 | — | covered |
| SC-002 | 0 wrong-group sends | TC-006, TC-007, TC-010 | — | covered |
| SC-003 | ≤1 SMS per customer | TC-015, TC-017, TC-033, TC-039, TC-041 | — | covered |
| SC-004 | 100% failure alert + full recovery | TC-014, TC-030, TC-033 | — | covered |
| SC-005 | Message/link match active 100% | TC-020, TC-021, TC-022 | — | covered |
| SC-006 | Per-record error never stops round | TC-012, TC-013, TC-028 | — | covered |
| SC-007 | Report reconciles 100% | TC-028, TC-036 | — | covered |

**No FR/SC has zero TC → 0 gaps.**

## Pass 2 — Overlap (redundant TCs)

| TCs | Same condition asserted | Recommendation |
|-----|------------------------|----------------|
| TC-017, TC-041 | Both assert cross-round no-resend | Keep both — TC-017 is the focused FR-010 unit; TC-041 is the SC-003 E2E rollup (round + next round + manual). Not redundant. |
| TC-033, TC-039 | Both touch idempotent manual fix | Keep both — TC-033 is sequential re-run; TC-039 adds the concurrency race (different failure mode). |
| TC-023, TC-024 | Both about the CSV file | Keep both — TC-023 = filename convention; TC-024 = Thai/UTF-8 content integrity. Distinct sinks. |
| TC-012, TC-013 | Both skip+log | Keep both — TC-012 = E13 (per-record reply); TC-013 = out-of-3-conditions (malformed reply). Different triggers per FR-008 vs FR-008a. |

No true duplicates. No merges recommended.

## Pass 3 — Missing Negative/Edge (against negative-input-catalog)

| FR/Field | Field type | Adversarial rows checked | Covered by | Status |
|----------|-----------|--------------------------|-----------|--------|
| FR-011 name / FR-005 card_no | text/name | SQLi `'; DROP TABLE x--`, XSS `<script>`, null byte U+0000, LIKE metachars `%`/`_` | TC-037 | covered |
| FR-012 link / message body | template/text | very long Thai body (~140 chars, credits), link integrity/tamper | TC-029, TC-038 | covered |
| FR-004 mobile_no | text | NULL, empty, whitespace-only | TC-005 | covered |
| FR-003 issue_date | date | boundary 2025-12-31 vs 2026-01-01 | TC-004 | covered |
| FR-012 link window | date/flag | begin==expire single-day, expired, active_flag='N' | TC-021 | covered |
| FR-019 repair range | date range | start>today, end<start (reversed range) | TC-032 | covered |
| FR-009 dedup | key | duplicate keys, equal issue_date tie | TC-015, TC-016 | covered |
| Line Connect reply | enum/null | E02, E13, channel=null, isBlockLine=null, full outage | TC-011, TC-012, TC-013, TC-014 | covered |
| FR-021 report | state | zero/empty-day rendering | TC-040 | covered |

**Catalog rows intentionally not applicable (justified skips):**
- *Search/LIKE UI wildcards on a user search box* — this feature has **no free-text search UI**; the only
  LIKE-metachar risk is card_no/name flowing into queries, which is covered by TC-037. Skip the interactive
  search rows.
- *Stored/reflected XSS at a list/dialog sink* — there is **no new UI** (Q-004: reuse existing central Manual
  Fix screen). XSS surface reduces to the SMS body / CSV / DB write, covered by TC-037/TC-024/TC-038. Skip the
  DOM-sink rows.
- *Sticky filter / PRG redirect / success-toast ambiguity* — no new CRUD screens in scope; N/A.

## Verdict

**covered** — every FR/SC/EC maps to ≥1 TC; negative, boundary, edge, security, concurrency, side-effect and
UX classes are all present; no critical gap and no genuine overlap. Proceed to `/speckit-qa test-data`.

## Coverage Summary

- Total FR items: 28 · SC: 7 · EC: 7 → **42 spine items**.
- With ≥1 TC: **42 / 42** → **coverage 100%**.
- CRITICAL gaps: **0** · HIGH gaps: **0**.
- Overlaps recommended for merge: **0**.
- Missing negative/edge classes: **0** (applicable catalog rows all mapped; inapplicable rows justified above).

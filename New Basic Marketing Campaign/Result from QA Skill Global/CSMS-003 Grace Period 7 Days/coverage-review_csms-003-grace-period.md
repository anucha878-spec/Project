---
id: csms-003-grace-period
phase: qa
sub-phase: coverage-review
run-date: 2026-07-09
iteration: 1
verdict: covered
---

# Coverage Review — CSMS-003 Grace Period 7 Days

Audit-only gate over `test-cases_csms-003-grace-period.csv` + `test-scenarios_csms-003-grace-period.md` against the FR/SC spine. No TCs written or edited.

## Pass 1 — Gap (FR/SC with zero TC)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| FR-001 | Daily 10:00 auto-run | TC-002, TC-011, TC-035 | — | covered |
| FR-002 | Join master+letter, compute grace_end | TC-003 | — | covered |
| FR-003 | 7-calendar-day window (config) | TC-001, TC-012, TC-013, TC-014, TC-015, TC-025, TC-026 | — | covered incl. 7/6/8 boundary |
| FR-004 | Inforce only | TC-001, TC-016 | — | covered |
| FR-004a | mobile1→mobile2, both empty skip+F | TC-004, TC-005, TC-017 | — | covered |
| FR-005 | Do-Not-Contact (ORD=1, IND/PA=4) | TC-021, TC-022, TC-027, TC-037 | — | covered |
| FR-006 | Call LINE API channels=LINE | TC-039 | — | covered |
| FR-006a | Map cardNo, missing skip+F | TC-018 | — | covered |
| FR-007 | LINE result matrix (E02/E00/abnormal) | TC-006, TC-019, TC-020, TC-023 | — | covered (P0) |
| FR-008 | 1 SMS/policy, dedup policy_no+due_date | TC-029, TC-030, TC-031, TC-032, TC-034, TC-036 | — | covered incl. fan-out + dedup |
| FR-009 | CSV UTF-8 standard name | TC-007, TC-043 | — | covered |
| FR-010 | Template var1/var2/var3 | TC-008, TC-028 | — | covered |
| FR-011 | Send to Gateway, refer_no | TC-009, TC-024, TC-041, TC-045, TC-049 | — | covered |
| FR-012 | Log all to SMS_GRACE_PERIOD_LOG | TC-010, TC-038, TC-040 | — | covered |
| FR-013 | Round-failure email | TC-042, TC-047, TC-050 | — | covered |
| FR-014 | Manual fix, idempotent | TC-033, TC-035, TC-046, TC-051 | — | covered |
| SC-001 | ≤5 min / 10k | TC-048 | — | covered |
| SC-002 | 99% refer_no | TC-049 | — | covered |
| SC-003 | 0 duplicate; per-policy correct | TC-029, TC-031, TC-032 | — | covered |
| SC-004 | 100% logged | TC-040 | — | covered |
| SC-005 | Fail email ≤15 min | TC-050 | — | covered |
| SC-006 | Manual fix ≤1 hr no resend | TC-051 | — | covered |
| SC-007 | Contact prefs 100% | TC-037 | — | covered |

**No Gap rows.** 16/16 FR and 7/7 SC have ≥1 TC.

## Pass 2 — Overlap (redundant TCs)

| TCs | Same condition asserted | Recommendation |
|-----|------------------------|----------------|
| TC-031, TC-032 | Dedup on `policy_no+due_date` — TC-031 same-round, TC-032 next-day | **Keep both** — they assert *different* triggers (in-round re-eval vs cross-day persistence of dedup). Not redundant. |
| TC-035, TC-036 | Concurrency "one SMS" — TC-035 manual+daily overlap, TC-036 two batch instances | **Keep both** — different concurrency sources; minor overlap, informational only. |
| TC-029, TC-030 | Fan-out — TC-029 asserts 2 SMS produced, TC-030 asserts the *rule* (no customer-dedup) | **Keep both** — one is behavior, one is the negative rule. |
| TC-042, TC-050 | Round-failure email — TC-042 delivery+content, TC-050 the 15-min SLA | **Keep both** — content vs timing. |

No auto-deletion. All flagged pairs justified as distinct assertions.

## Pass 3 — Missing Negative/Edge

| FR/Field | Field type | Adversarial rows checked (negative-input-catalog) | Present? |
|----------|-----------|---------------------------------------------------|----------|
| FR-003 grace_end / current_date | Date/range | boundary min/±1 (7 exactly / 6 / 8) → TC-015/TC-012/TC-013; single-day equality (calendar-day, current excluded) → TC-015; post-change date → TC-025; non-run day → TC-026 | ✅ |
| FR-004a mobile1/mobile2 | Nullable field | empty/NULL both channels → TC-017; fallback branch → TC-005 | ✅ |
| FR-006a cardNo | Lookup key | not-found → TC-018 (skip+F, no silent drop) | ✅ |
| FR-007 LINE code | Enum/external | happy E02 → TC-006; exclude E00+false → TC-023; abnormal E13 → TC-019; empty channel/isBlockLine → TC-020 | ✅ |
| FR-005 remark_code | Enum by type | correct exclusions ORD=1 / IND-PA=4 → TC-021/TC-022; type-mismatch not-excluded → TC-027 | ✅ |
| FR-008 dedup key | Composite key | duplicate suppression → TC-031/TC-032; new-cycle boundary (diff due_date) → TC-034; concurrency race → TC-036 | ✅ |
| FR-010 template vars | Text render | date format DD/MM/YYYY → TC-028; substitution → TC-008 | ✅ |
| FR-011 refer_no | External response | malformed refer_no → TC-024; transient 5xx/timeout → TC-045 | ✅ |
| Assumptions LINE | External outage | full outage retry≤3 then stop → TC-044 (distinct from per-item TC-019) | ✅ |

**Notes / routed items (not gaps):**
- The **"is the 7-day rule inclusive/exclusive right?"** question is *answered by the spec* (Clarification 2026-07-07: calendar days, current day excluded), so it is a testable rule (TC-015), not a requirement-ambiguity to route.
- No free-text/search/LIKE field exists in this batch (no user search UI), so catalog section A (LIKE `%`/`_` wildcard, SQL-injection-via-search) is **N/A** — justified omission. SQL parameters are internal (policy_no, cardNo) from trusted DW sources, not user input.
- XSS/stored-script rows (catalog B) are **N/A** — SMS body is a fixed template with numeric/date variables from DW; there is no HTML sink and no user-supplied free text.

## Verdict

- **covered** — no Gap (16/16 FR, 7/7 SC), negatives and boundaries present for every date/enum/nullable/external field, all 7 test dimensions represented. Proceed to `/speckit-qa test-data`.

## Coverage Summary
Total FR/SC: 23 (16 FR + 7 SC) · with ≥1 TC: 23 · coverage %: **100%** · CRITICAL gaps: 0.

---
id: csms-004-birthday
phase: qa
sub-phase: coverage-review
run-date: 2026-07-09
iteration: 1
verdict: covered
---

# Coverage Review — CSMS-004 Customer Birthday SMS Batch

Audit-only gate over `test-cases_csms-004-birthday.csv` + `test-scenarios_csms-004-birthday.md` against the FR/SC spine. Never writes TCs.

## Pass 1 — Gap (FR/SC with zero TC)

| FR/SC | Requirement (short) | Mapped TC | Severity | Note |
|-------|--------------------|-----------|----------|------|
| FR-001..FR-014 (all 20 FRs) | full functional set | ≥1 each (see FR→TC map) | — | No gap |
| SC-001..SC-008 | measurable outcomes | ≥1 each | — | No gap |

**No Gap found.** All 20 FRs and all 8 measurable SCs map to at least one TC. FR-010a (config guards) and FR-009 (2-channel decision) — the two highest-risk FRs — carry 8 and 5 TCs respectively.

## Pass 2 — Overlap (redundant TCs)

| TCs | Same condition asserted | Recommendation |
|-----|------------------------|----------------|
| TC-037, TC-038 | Both assert "already-sent → no re-send" (TC-038 = same-day double-run of TC-037's rule) | Keep both — TC-037 is data-state dedup, TC-038 is the idempotency/re-run guarantee (SC-003). Not redundant. |
| TC-040, TC-066 | Customer-level dedup (1 cardNo, 2 policies → 1 SMS) | Keep both — TC-040 is functional (sequential), TC-066 is the concurrency/race variant. Different dimension. |
| TC-030, TC-034 | E02/E02 → SEND appears in both | Minor overlap: TC-034's Scenario Outline includes the TC-030 row. Acceptable — TC-030 is the P1 smoke anchor; TC-034 is the P2 full-matrix regression. Mark informational, do not delete. |
| TC-046, TC-047, TC-048 | All "config missing/inactive → skip+notify" | Keep separate — distinct config keys (REWARDS present-but-inactive vs REWARDS absent vs LINE_LINK absent); each is a real branch of FR-010a. |

No auto-deletes. Overlaps are intentional dimension/priority splits.

## Pass 3 — Missing Negative/Edge

Adversarial-input catalog applied to every free-text / numeric / date / lookup field:

| FR/Field | Field type | Adversarial rows covered | Missing dimension |
|----------|-----------|--------------------------|-------------------|
| FR-002 `birthdate` | date | NULL/invalid (TC-006), year-independent match (TC-005), Feb-29 leap boundary (TC-009/010/011), pre-2026 boundary (TC-008) | none |
| FR-005 `mobile1/2` | text/phone | empty both (TC-018), whitespace-only trim (TC-019), coalesce order (TC-017) | none |
| FR-004 `policy_status` | enum boundary | valid set, invalid, IND {3 vs 4} boundary (TC-015) | none |
| FR-007 `policy_org` | numeric range | inclusive edges + ±1 (TC-026), outside range (TC-025) | none |
| FR-009 `LINE/APP/isBlockLine` | enum combos | full 5-row decision matrix (TC-034), abnormal E13/Exception (TC-035), empty field (TC-036) | none |
| FR-010a `fname`/config vars | free-text / config lookup | special/control/emoji/quote/comma/long value (TC-063), missing REWARDS (TC-046), inactive 'N' (TC-047), missing LINE_LINK (TC-048), no template (TC-049) | none |
| FR-010b `seq_no`/`datetime` | numeric/date format | start-at-1 (TC-051), CE-year format (TC-052) | none |
| FR-011 gateway | integration failure | temp failure no-retry (TC-054) | none |
| FR-009/API | resilience | full outage retry≤3 then stop (TC-067) | none |

**7-dimension completeness:** all 7 present (Positive/Negative/Edge/Concurrency/Security/Side-Effects/UX/Usability). Justified omissions recorded in `test-scenarios` §4: no dedicated WCAG/responsive TCs (headless batch; only shared central dashboard surface, out of new-UI scope); no load test beyond the 10k SC-001 target.

## Verdict

**`covered`** — no Gap; overlaps are intentional; adversarial negatives/edges present for every applicable field, including the two instructed KEY areas:
- **Feb-29 leap-day edge** — TC-009 (leap send 29-Feb), **TC-010 (non-leap send 28-Feb, KEY)**, TC-011 (non-leap 27-Feb not sent).
- **Missing/expired `cf_catalog` entry (negative)** — TC-046 (REWARDS absent), TC-047 (inactive 'N' = expired/disabled), TC-048 (LINE_LINK absent), TC-049 (no template) — all enforce "no empty-variable SMS" (SC-005).
- **Dedup by cardNo** — TC-037/038/040/065/066. **09:00 schedule** — TC-001/002.

→ Proceed to `/speckit-qa test-data`.

## Coverage Summary
Total FR/SC: 20 FR + 8 SC = 28 · with ≥1 TC: 28 · **coverage %: 100** · CRITICAL gaps: 0

### Outstanding (non-coverage) items routed elsewhere — do not block this gate
- US5 scrambled scenario numbering (1,6,7,2,3,4,5) → `/speckit-analyze` (artifact consistency). Coverage unaffected — each scenario has a TC.
- Category code `112` vs source `113`, GOV inclusion, `birthdate/birthday`, table name, `sms_sent_date` type → `/speckit-qa crosscheck` once the upstream `SPEC_BATCH-CSMS-004_BirthDay.md` is supplied (crosscheck currently `blocked`).
- FR-003a "28-Feb inclusive?" and FR-004 IND/GOV Inforce-set finality → `/speckit-checklist` (requirement quality).

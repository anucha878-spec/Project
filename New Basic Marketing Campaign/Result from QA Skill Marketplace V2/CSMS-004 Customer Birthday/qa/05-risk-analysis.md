# 05 — Risk Analysis — CSMS-004 Customer Birthday

- **Skill:** `/risk-analysis` (Spec-Kit 05, analysis-only) · **Input:** `01`, `02`, `03`, `04` · **Date:** 2026-07-09

## 1. Executive Risk Summary
- **Overall System Risk Level:** HIGH (pre-execution; compliance + cost + brand exposure in send logic)
- **Top 3 risk areas:**
  1. 2-channel digital-status decision table (FR-009) — mis-classify → send to active users or wrong exclusion (SC-008).
  2. No-empty-variable enforcement (FR-010a / SC-005) — a template with missing gift/link would send a broken, brand-damaging SMS.
  3. Per-customer dedup (FR-008b/c / SC-003) — duplicate birthday SMS = customer annoyance + cost + compliance.
- **Key concern:** All above are **untested this run** (no execution env). Verdict must reflect that.

## 2. Critical Risk Areas (CRITICAL / HIGH)

| Risk ID | Type | REQ | TCs | Description | Business Impact | Likelihood | Severity |
|---------|------|-----|-----|-------------|-----------------|-----------|----------|
| RISK-001 | Business/E2E | FR-009/009a | TC-024..030 | Decision-table cell mis-evaluated (esp. RQ-010 abnormal+APP=E00 precedence) | Sends to active LINE/app users or wrongly excludes eligible; violates SC-008 | Medium | Critical |
| RISK-002 | Business | FR-010a | TC-039,040 | Missing/inactive cf_catalog → empty var SMS sent | Broken brand message to customers; SC-005 breach | Medium | Critical |
| RISK-003 | Business | FR-008b/008c | TC-031,032,034 | Dedup fails / not per-cardNo | Duplicate SMS, cost, SC-003 breach | Medium | High |
| RISK-004 | Technical | FR-003a | TC-007,008,009 | Leap-day off-by-one (Feb-28/29) | Feb-29 customers miss or double birthday SMS | Medium | High |
| RISK-005 | Business | FR-010/RQ-002 | TC-051 | Category code 113 used instead of 112 | Wrong Category/template → wrong campaign content | Medium | High |
| RISK-006 | Technical/E2E | FR-008/013 | TC-023,049 | API not-found vs system outage handling confusion | Round halts wrongly or bad rows skipped silently | Low | High |
| RISK-007 | Data | FR-012/RQ-006 | TC-053 | `credit_amount` undefined → wrong/NULL audit field | Incomplete audit; SC-004 partial | Medium | High |
| RISK-008 | Business | FR-014 | TC-050 | Manual Fix not idempotent → resend | Duplicate SMS on re-run; SC-007 breach | Low | High |

## 3. Risk Heatmap
- 🔴 **High Business Risk:** FR-009 decision table, FR-010a empty-variable, FR-008b/c dedup, FR-014 idempotency, category-code 112/113.
- 🟠 **High Technical Complexity:** leap-day date math, cardNo mapping + 2-channel async calls, retry/outage handling.
- 🟡 **Weak Coverage / Blocked:** Go-Live boundary (RQ-005), CSV timeout SLA (RQ-007), `credit_amount` (RQ-006) — cannot verify until answered.
- 🔵 **Automation Risk:** no UI; integration/DB/API tests require harness/stubs; Playwright = placeholder (execution blocked).

## 4. Missing Risk Signals
- High business impact + currently unverifiable: exact Go-Live cut-over (RQ-005), timeout trigger (RQ-007).
- Silent-failure risk: per-item skips (mobile empty, cardNo not found, E13, missing config) must be **recorded** — if audit write fails silently, Manual Fix backlog is lost (covered by TC-021/023/029/039/046 but unverified).
- RQ-012: multiple active cf_catalog rows → non-deterministic var2/var3 (no TC — raised as RQ; low likelihood).

## 5. Test Execution Priority Ranking
1. **P0 — must execute first:** FR-009 decision table (TC-024..030), FR-010a no-empty-variable (TC-039,040), FR-008b/c dedup (TC-031,032,034), Feb-29 (TC-007).
2. **P1:** inforce/DNC/agent filters (TC-010..018), cardNo mapping + skip (TC-022,023), CSV format/filename (TC-042,043), gateway+record (TC-044,045,046), failure email (TC-048), Manual Fix idempotency (TC-050).
3. **P2:** mobile selection (TC-019,020,021), template fallback (TC-037), year-boundary dedup (TC-033), GOV record (TC-047), API outage retry (TC-049), month/year match nuances (TC-002,003).
4. **P3:** blocked-RQ TCs (TC-051..054) — execute after SA answers.

## 6. Risk Coverage Matrix

| FR | Coverage Quality | Risk Level | Notes |
|----|------------------|-----------|-------|
| FR-009/009a | High (8/8 rules) | CRITICAL | RQ-010 precedence assumption |
| FR-010a | High (pos+2 neg) | CRITICAL | SC-005 empty-variable |
| FR-008b/008c | High | HIGH | SC-003 dedup |
| FR-003a | High (3 TCs) | HIGH | leap math |
| FR-010 | Medium (blocked 112/113) | HIGH | RQ-002 |
| FR-012 | Medium (credit_amount blocked) | HIGH | RQ-006 |
| FR-014 | Medium (1 TC) | HIGH | idempotency |
| FR-003 | Medium (Go-Live blocked) | MEDIUM | RQ-005 |
| FR-013 | Medium (SLA blocked) | MEDIUM | RQ-007/008 |
| others | High | LOW–MEDIUM | OK |

## 7. Recommendations (QA Strategy)
- Resolve **RQ-002, RQ-005, RQ-006, RQ-010** before execution — they gate CRITICAL/HIGH verification.
- On execute, prioritize P0 decision-table + no-empty-variable + dedup; use stubs for cisappapi/ESB to force each branch deterministically.
- Add DB-level assertions on `CUSTOMER_BIRTHDAY`/`CSMS_LOG` for every skip path (silent-failure guard).

## 🔁 Next Step: Loop-back
- Every CRITICAL/HIGH risk already has ≥1 TC in `03` → **no loop-back to 03 needed**. Iteration stays **1**.
- Proceed to `06-test-data.json`. (All CRITICAL/HIGH risks require **full** synthetic dataset coverage in 06.)

# 05 — Risk Analysis — CSMS-002 Welcome New Customer Round 2

**Feature:** `csms-002-welcome-round2` · **Skill:** `/risk-analysis` (05) · **Date:** 2026-07-09
**Input:** `qa/01`, `qa/02`, `qa/03`, `qa/04`.

## 1. Executive Risk Summary
- **Overall System Risk Level:** **HIGH** (design-phase — driven by wrong-send business impact + unverifiable state: no running system, several oracle-blocking RQs)
- **Top 3 risk areas:**
  1. **Wrong-group send** (dual-channel truth table + Inforce/Do-Not-Contact/policy-type-code) → sends SMS to customers who already have the App / blocked / opted-out. SC-003 target = 0. Amplified by **RQ-001** (policy-type code char unconfirmed).
  2. **Duplicate / repeat send** (dedup guard + Manual-Fix idempotency) → SC-002 target = 0 duplicates across round/lifetime/Manual-Fix.
  3. **Traceability loss** — round-1 linkage (SC-006) blocked by **RQ-009**; and the **FR-020.2 merge (RQ-002)** puts the daily report at risk of being dropped (no FR of its own).
- **Key concern:** Coverage is complete, but multiple business-critical expected results are `[BLOCKED]` pending SA answers, and nothing can be executed (no app). Verdict must stay NO-GO/blocked until SIT + RQ closure.

## 2. Critical Risk Areas (CRITICAL / HIGH only)

**RISK-001 — Wrong-group send (dual-channel decision)**
- Type: Business/Technical · REQ: FR-009, FR-010 · TC: TC-019..030 · Likelihood: Medium · Severity: **Critical**
- Description: Any truth-table error sends to App-registered or non-blocked-LINE customers. Impact: brand/compliance, violates SC-003. Mitigation: full 12-rule DT already designed; must execute in SIT.

**RISK-002 — Policy-type code mismatch ('O/I/G/P' vs '0/1')**
- Type: Business/Data · REQ: FR-004, FR-006, FR-018 · TC: TC-007..011, TC-016/17, TC-050 · Likelihood: Medium · Severity: **Critical**
- Description: If real code char differs from assumed, Inforce/Do-Not-Contact filters and report breakdown key on wrong value → wrong selection/exclusion. Blocked by **RQ-001**. This is the single most cross-cutting data risk.

**RISK-003 — Duplicate/repeat send**
- Type: Business · REQ: FR-013, FR-013.1, FR-020 · TC: TC-033..038, TC-058, TC-061 · Likelihood: Medium · Severity: **High**
- Description: Dedup guard (only sms_sent_date IS NOT NULL) + Manual-Fix idempotency + in-round grouping must all hold, especially with mid-flight N change. Violates SC-002 if any fails.

**RISK-004 — Round-1 linkage missing/incorrect**
- Type: Technical/Traceability · REQ: FR-018.1 · TC: TC-051 · Likelihood: Medium · Severity: **High**
- Description: SC-006 requires 100% back-trace to CSMS-001. Linkage field unnamed (**RQ-009**) → cannot assert exact FK. If absent, reconcile/audit breaks.

**RISK-005 — Variable substitution leak / nameless send**
- Type: Business · REQ: FR-015, FR-015.1 · TC: TC-041, TC-042 · Likelihood: Low · Severity: **High**
- Description: Leftover `${var}` or nameless SMS reaches customer (violates SC-004). Config must be Active with values; no-name must skip.

**RISK-006 — Service-down / round-failure not handled → silent miss**
- Type: Technical · REQ: FR-012, FR-016, FR-019 · TC: TC-031, TC-043, TC-055, TC-056 · Likelihood: Medium · Severity: **High**
- Description: If retry/stop/email fails, a whole cohort misses SMS silently (US2 rationale). SLA oracle blocked by **RQ-004**.

**RISK-007 — Reporting requirement dropped (FR-020.2 merge)**
- Type: Coverage/Traceability · REQ: FR-020.2 · TC: TC-062 · Likelihood: Medium · Severity: **High**
- Description: The daily central report is bolted onto the Manual-Fix clause with no FR number (**RQ-002**) → high chance dev/PO overlook it; it is the *sole* channel to watch abnormal 'F' proportion (no threshold alert).

## 3. Risk Heatmap (logical grouping)
- 🔴 **High Business Risk:** RISK-001 (wrong send), RISK-002 (code map), RISK-003 (duplicate), RISK-005 (var leak)
- 🟠 **High Technical Complexity:** RISK-006 (service-down/retry/notify), dual-channel batch ~1,000/day calls, ESB→Gateway async
- 🟡 **Weak Coverage / Blocked Oracle:** RISK-004 (linkage RQ-009), RISK-007 (report RQ-002), TC-029 precedence (RQ-006), CSV/log layout (RQ-003)
- 🔵 **Automation Risk:** entire feature is batch/DB-level; no UI to drive except Manual-Fix Dashboard → Playwright coverage is documentation-grade until a service/DB harness exists

## 4. Missing Risk Signals
- **High business impact + currently unverifiable:** all of RISK-001..007 (no running system → cannot confirm). Treated as elevated risk per skill rule (missing verification = higher risk).
- **Security/PII (RQ-005):** name+phone in SMS/CSV/logs with no protection requirement — silent-failure/compliance risk, routed out (NFR-routing.md) but flagged here as an unowned exposure.
- **Silent failure:** empty-round-1 day (TC-063) must NOT raise false failure email; gateway-fail (TC-046) must record 'F' not vanish.

## 5. Test Execution Priority Ranking
1. **P0 (must execute first):** TC-019, TC-022 (send rules a/b), TC-020/023/025/026 (exclude registered/not-blocked), TC-050 (policy-code map), TC-033/034/038 (dedup), TC-051 (linkage), TC-041/042 (var/no-name) — *core value + SC-002/003/004/006.*
2. **P1 (high):** TC-007..011 (Inforce), TC-016/017 (Do Not Contact), TC-018 (cardNo), TC-021/024/027/028/030/031 (E13/service-down), TC-043/046 (no-config/gateway-fail), TC-052/053 (status), TC-055 (failure email), TC-057/058/059/060 (Manual Fix), TC-062 (report).
3. **P2 (medium):** TC-002..006 (cohort/config), TC-012..015 (phone), TC-035..037 (grouping), TC-039/040/044/045 (template/file), TC-047/049/054 (log), TC-056 (SLA), TC-061 (N-change), TC-063 (empty day).
4. **P3 (low):** TC-026/027 (low-freq exclude), TC-029 (blocked precedence), TC-030, TC-032 (late-App).

## 6. Risk Coverage Matrix
| REQ | Coverage Quality | Risk Level | Notes |
|---|---|---|---|
| FR-009/010 | High (12/12 DT) | CRITICAL | RISK-001; execute in SIT |
| FR-004/006/018 (code) | High but oracle-blocked | CRITICAL | RISK-002; RQ-001 |
| FR-013/013.1 | High | HIGH | RISK-003 |
| FR-018.1 | Present, oracle-blocked | HIGH | RISK-004; RQ-009 |
| FR-015/015.1 | High | HIGH | RISK-005 |
| FR-012/016/019 | High, SLA blocked | HIGH | RISK-006; RQ-004 |
| FR-020.2 (report) | Present, no own FR | HIGH | RISK-007; RQ-002 |
| FR-001/002/003/005/014/017 | High | MEDIUM–LOW | standard filters/format |

## 7. Recommendations (QA strategy)
- **Close RQ-001, RQ-009, RQ-002 before SIT sign-off** — they block P0 oracles (policy-code, linkage, report).
- **Execute P0 dual-channel + dedup first** once SIT/DB harness exists; verify at DB/service layer, not just UI.
- **Build a batch/DB test harness** (seed round-1 history + policy master + config, run batch, assert `WELCOME_NEW_CUST_APP`) — Playwright alone cannot verify batch rules; specs here are the executable-intent record.
- **Add security/PII NFR** (RQ-005) and route to pentest track.
- **Manual-Fix idempotency (TC-058) + daily-no-retry-'F' (TC-059)** are the guards for SC-002/007 — prioritize.

## Next Step: Loop-back
**No loop-back needed** — every CRITICAL/HIGH risk already has ≥1 TC in 03 (no high-risk-uncovered area). Blockers are unanswered RQs (SA action), not missing TCs. Proceed to 06 `/test-data-generator`.

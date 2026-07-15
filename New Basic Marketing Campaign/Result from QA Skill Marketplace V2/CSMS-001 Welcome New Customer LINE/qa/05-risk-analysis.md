# 05 — Risk Analysis (analysis-only) — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/risk-analysis` (Spec-Kit 05) · **Date:** 2026-07-09 · **Iteration:** 1
- **Inputs:** `qa/01`, `qa/02`, `qa/03`, `qa/04`, `spec.md`. No TCs created/modified.

## 1. Executive Risk Summary
- **Overall System Risk Level:** HIGH (for release), MEDIUM (for design quality)
- **Top 3 risk areas:**
  1. **Wrong-group send / duplicate send** (BR-003 eligibility + dedup) — directly breaches SC-002/SC-003, customer-facing, hard to unwind once an SMS is sent.
  2. **Silent round failure without alert** (FR-018 + RQ-004 missing timeout) — customers silently dropped, no recovery trigger; SC-004 unverifiable without the SLA value.
  3. **No executed verification** — all 65 TCs "Not Run" (no reachable app/trigger), so every correctness claim is design-level only.
- **Key concern:** two High-priority oracles are RQ-blocked (RQ-002 filename year → interface handoff; RQ-004 timeout → alert SLA). Cannot earn a GO until executed + RQs resolved.

## 2. Critical Risk Areas (CRITICAL / HIGH only)

- **RISK-001 — Wrong SEND/NOT-SEND decision (BR-003)** · Type: Business · REQ: FR-006,007 · TC: TC-001,004,005,006,007
  - Desc: mis-evaluating the 3-condition eligibility (esp. cond-2 "no club + blocked LINE = send", and cond-3 exclusions) sends to registered customers or drops eligible ones.
  - Business Impact: sends to already-registered/wrong customers (SC-002=0 breached) → complaints, compliance exposure. · Likelihood: Medium · Severity: **CRITICAL**

- **RISK-002 — Duplicate send (in-round + cross-round + Manual Fix)** · Type: Business · REQ: FR-009,010,020 · TC: TC-026,028,052,054,029
  - Desc: dedup key errors or idempotency break (sms_sent_date check) cause ≥2 SMS to one customer, incl. via Manual Fix re-run.
  - Business Impact: SC-003 (≤1 msg) breached; spam perception. · Likelihood: Medium · Severity: **HIGH**

- **RISK-003 — Round fails silently / late (no alert)** · Type: Technical/Business · REQ: FR-018,008b,012a · TC: TC-024,034,046,047,048,050
  - Desc: round-level fault not detected within the (unspecified, RQ-004) SLA, or email not sent → customers for that day dropped with no one notified.
  - Business Impact: SC-004 (100% failures alerted) breached; recovery never triggered. · Likelihood: Medium · Severity: **HIGH**

- **RISK-004 — Expired/missing campaign link sent** · Type: Business · REQ: FR-012,012a · TC: TC-033,034
  - Desc: link active_flag/expire window not honoured → SMS with dead/wrong link.
  - Business Impact: SC-005 breached; customers get broken registration link. · Likelihood: Low-Medium · Severity: **HIGH**

- **RISK-005 — CSV filename year ambiguity (RQ-002)** · Type: Technical/Integration · REQ: FR-013 · TC: TC-036 `[BLOCKED]`
  - Desc: BE vs CE year mismatch → downstream interface consuming the file by name mis-files/rejects.
  - Business Impact: batch output rejected downstream even when sends succeed. · Likelihood: Medium · Severity: **HIGH**

- **RISK-006 — Per-record fault stops whole round** · Type: Technical · REQ: FR-008,008a · TC: TC-019,020,022
  - Desc: E13/out-of-condition mis-handled as round-fatal (confusing FR-008 vs FR-008b) → SC-006 breach (round should continue).
  - Business Impact: one bad record drops the entire day. · Likelihood: Low-Medium · Severity: **HIGH**

- **RISK-007 — Data-integrity of history/audit table** · Type: Data · REQ: FR-016,016a · TC: TC-041,042,043,045,062
  - Desc: wrong S/F or NULL/NOT-NULL sms_sent_date corrupts dedup guard and report reconcile.
  - Business Impact: future runs resend or wrongly exclude; SC-007 reconcile breaks. · Likelihood: Low · Severity: **HIGH**

## 3. Risk Heatmap
- 🔴 **High Business Risk:** RISK-001 (eligibility), RISK-002 (duplicate), RISK-004 (expired link)
- 🟠 **High Technical Complexity:** RISK-003 (failure detection/async alert), RISK-006 (per-record vs round isolation), Inquiry batch + ESB + DB ordering
- 🟡 **Weak Coverage / Blocked oracle:** RISK-005 (RQ-002), RISK-003 timing (RQ-004), tie-break (RQ-001), credit value (RQ-003), Manual-Fix message (RQ-005)
- 🔵 **Automation Risk:** entire suite un-executable now (no app/trigger); backend batch needs DB/mock harness, not browser UI → automation design differs from typical Playwright UI flows

## 4. Missing Risk Signals
- **High business impact + no executable verification:** all P0/P1 (below) are design-only until env exists — treat as unvalidated risk.
- **RQ-004 (timeout) absent** → SC-004 has no measurable oracle; a real silent-failure could pass review undetected.
- **DNC freshness (A-004)** and **card_no→name uniqueness (A-003)** are assumptions, not tested guarantees — stale DNC = send to opted-out; ambiguous card_no = wrong-name SMS (partially guarded by TC-021 skip-if-missing, but not wrong-match).

## 5. Test Execution Priority Ranking
- **P0 — Must execute first:**
  - BR-003 eligibility send/not-send — TC-001,004,005,006,007 (RISK-001)
  - No-duplicate / idempotency — TC-026,028,052,054 (RISK-002)
  - Stop-round + alert on failure — TC-024,034,046,047,048 (RISK-003)
  - No expired-link send — TC-033,034 (RISK-004)
- **P1 — High:**
  - Per-record skip isolation (round continues) — TC-019,020,021,022 (RISK-006)
  - DNC exclusion + type mapping — TC-015,016,017,018
  - History/audit integrity S/F/NULL — TC-041,042,043,045,029 (RISK-007)
  - Year boundary 2026 — TC-008,009
  - Retry×3 then stop — TC-023,024,025
- **P2 — Medium:**
  - Template order + variable substitution — TC-030,031,032,033
  - CSV filename/encoding/ordering — TC-035,037,038
  - Manual-Fix date validation + semantics — TC-053,056,057,058,059
  - Report content + reconcile — TC-061,062
- **P3 — Low:**
  - credit_amount presence — TC-044; char-limit — TC-064; category fields — TC-065; high-'F' no-alert — TC-063; selection negatives — TC-010,011,012,013,014
- **RQ-blocked (schedule after SA answers):** TC-027 (RQ-001), TC-036 (RQ-002, but P0-impact via RISK-005), TC-044 (RQ-003), TC-050 (RQ-004, P0-impact via RISK-003), TC-060 (RQ-005)

## 6. Risk Coverage Matrix
| REQ | Coverage Quality | Risk Level | Notes |
|-----|------------------|-----------|-------|
| FR-006/007 | High (TCs present) | CRITICAL | unvalidated until executed |
| FR-009/010/020 | High | HIGH | idempotency depends on sms_sent_date correctness |
| FR-018 | Partial | HIGH | RQ-004 timeout missing → SC-004 oracle gap |
| FR-012/012a | High | HIGH | RISK-004 |
| FR-013 | Partial | HIGH | RQ-002 filename year blocked |
| FR-008/008a/008b | High | HIGH | asymmetry per-record vs round |
| FR-016/016a | High | HIGH | audit/dedup integrity |
| FR-001..005,011,014,015,017,019,021 | High | MEDIUM/LOW | standard filters/logging/report |

## 7. Recommendations (QA strategy)
- **Escalate RQ-002 and RQ-004 to SA before execution** — both gate P0-level success criteria (SC-005, SC-004).
- Build a **batch test harness** (seed DB + stub Line Connect Inquiry with controllable codes + ESB/email sinks + Manual-Fix trigger) — this is the readiness prerequisite; without it nothing runs (06a §A5).
- Execute P0 first (eligibility, no-duplicate, stop+alert, no-expired-link); manual-verify Manual-Fix screen validation (out-of-scope UI).
- Add compliance/security review for PII + DNC (see `NFR-routing.md`) — out of functional track.

## 8. Next Step: Loop-back
- **No loop-back to 03** — every CRITICAL/HIGH risk already has ≥1 TC; no high-risk area is uncovered. RQ-blocked items are SA escalations, not new TCs. Proceed to `06 /test-data-generator`.

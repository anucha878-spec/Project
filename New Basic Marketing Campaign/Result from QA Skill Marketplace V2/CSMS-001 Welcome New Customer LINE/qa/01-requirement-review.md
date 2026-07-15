# 01 — QA Requirement Review Report — CSMS-001 Welcome New Customer (LINE)

- **Skill:** `/requirement-review` (Spec-Kit 01, Leg A) · **Date:** 2026-07-09
- **Read scope (declared honestly):** `spec.md` read **in full**. Glob `**/*` of the feature folder returned **only `spec.md`** — there is **no** `data-model.md`, `contracts/`, `checklists/`, `plan.md`, mockup, or flow-diagram image to cross-check. Cross-references to the upstream `SPEC_BATCH-CSMS-001_...md` v1.5, wiki pageIds, and the central Admin Dashboard screen are cited by the spec but **were not available to open** — findings below do not claim to have verified them.

## 1. Summary
- **Overall Quality Score:** 88 / 100
- **Overall Risk Level:** Medium
- The spec is unusually complete for an FR-level document: exact codes (E02/E13, remark_code 1/4, sent_status S/F, category 113), explicit type mapping (ORD='O', IND∈('I','G'), PA='P'), a 3-condition eligibility rule, deterministic dedup keys, and a precise CSV filename convention. 10 clarifications (Q-001..Q-007 + session 2026-07-07) closed most historical ambiguity. Remaining risk is concentrated in **5 residual gaps** (below), the most material being an internal **inconsistency in the CSV filename year format** (RQ-002) and an **unspecified failure-timeout threshold** (RQ-004) that blocks verifying the alert SLA (SC-004).

## 2. Requirement Issues List

| ID | Type | Severity | Description (cites spec) | Impact | Suggestion |
|----|------|----------|--------------------------|--------|------------|
| RQ-002 | `BUSINESS_RULE_INCONSISTENCY` | Major | FR-013 states the filename date is **"ปี พ.ศ. 2 หลัก"** (Buddhist year, 2 digits). For 2026 CE that is 2569 BE → "69". But the example filename in US1 is `MKT_CSMS_MKTWelcomeNewCust_260516100000.csv` → **"26"** (Gregorian 2-digit). Rule text and example contradict. | Wrong year token → downstream interface (that consumes the CSV by name/date) mis-files or rejects the batch; violates SC-005 file convention. | SA to confirm: is the year CE("26") or BE("69")? Fix FR-013 or the example so exactly one is authoritative. |
| RQ-004 | `NON_TESTABLE_REQUIREMENT` | Major | FR-018 / Clarification Q-9: batch failure is declared "ตามเวลาที่กำหนด" = the existing CSMS monitoring **SLA/timeout**, "ค่าจริงอ้างอิงจาก config ของระบบเดิมในขั้น plan". The concrete threshold is absent from this spec. | SC-004 ("100% of failures alert IT+User") cannot be verified — there is no time bound to assert "failed in time". | Provide the timeout value (or the config key + expected value) at plan stage so a testable oracle exists. |
| RQ-001 | `AMBIGUOUS_REQUIREMENT` | Major | EC-002 / A-007: when a deduped customer's policies all share the same issue_date, the tie-break "smallest policy_no" is flagged as a **spec-author proposal** ("ยืนยัน/ปรับได้"), not confirmed. | Non-deterministic selection breaks reproducibility of Manual-Fix re-runs and SC-003 (≤1 message). | SA to confirm the tie-break rule (or accept A-007 explicitly). |
| RQ-003 | `DATA_DEFINITION_GAP` | Minor | FR-017 reuses "logic การคำนวณ credit เดิมของ CSMS"; no formula/expected value in spec (Q-005 closed by reuse). | `credit_amount` (a logged/audited field, FR-016) has no expected value → cannot be asserted, only presence-checked. | Provide reference/expected credit_amount for the standard message (or confirm QA asserts presence + type only). |
| RQ-005 | `INCOMPLETE_ACCEPTANCE_CRITERIA` | Minor | FR-019 Manual Fix validation + error messages = "ตามมาตรฐานหน้าจอกลางเดิม"; exact text/behaviour not in this spec (out-of-scope UI, Q-004). | Exact-message assertions for US2 scen.3 cannot be written without the central screen spec. | Provide the central Admin Dashboard validation messages, or confirm QA references that screen's own spec for exact text. |

> No `CONFLICT_REQUIREMENT` (beyond RQ-002), no `AMBIGUOUS_REQUIREMENT` in the core send/exclude logic — those are well-specified. The spec correctly resolved the historically dangerous edges (E13 vs system-down asymmetry FR-008 vs FR-008b; 'F' logging vs dedup interplay FR-016a/FR-010).

## 3. Missing Test Scenarios (should exist — not written here)
- **Positive:** eligible ORD/IND/PA each send; condition-2 (no Ocean Club + LINE blocked) sends; template-schedule-hit vs category-fallback.
- **Negative:** DNC ORD(remark '1') / IND/PA(remark '4') excluded; already-registered (LINE found or Ocean Club) not sent; previously-sent (history NOT NULL) not resent; E13 skip+log; out-of-condition skip+log; card_no name-missing skip+log (no nameless SMS); mobile NULL and mobile empty excluded; pre-2026 policy excluded.
- **Boundary:** year 2025-12-31 vs 2026-01-01; retry at 2 vs 3 vs after-3; Manual-Fix start=today vs today+1, end=start vs start−1; T-1 arithmetic (select 2026-05-15 → issue_date 2026-05-14).
- **Integration:** ESB/Gateway unreachable → stop round + email; DB write failure → stop round + email; Line Connect fully down → retry×3 → stop+email; no active LINE_LINK → stop round + email; CSV must exist before send.
- **Reconcile/report:** counts in FR-021 report equal WELCOME_NEW_CUST_LINE rows (SC-007); breakdown by policy_type.

## 4. Questions for SA/BA
See §2 (RQ-001..RQ-005). Additionally (non-blocking): exact email subject/recipient list for FR-018 ("รูปแบบมาตรฐาน batch CSMS เดิม") — is there a canonical template QA can reference? (folded into RQ-004 area; recipients conceptually specified as IT+User).

## 5. NFR Presence
- No explicit perf/security/a11y/compat requirement. However the batch handles **PII** (name, mobile, card_no) and enforces **Do-Not-Contact** — implicit privacy/compliance obligations. → `MISSING_REQUIREMENT (NFR)`: recommend routing a data-protection/compliance check to the security track (recorded in `NFR-routing` during `03`). Not invented as functional TCs.

## 6. Testability Score
- **Testability:** 82 / 100
- **Reason:** Core send/exclude/dedup/logging logic is highly testable (explicit codes, mappings, boundaries, deterministic keys → decision-table + BVA ready). Deductions: RQ-004 (no timeout oracle), RQ-002 (ambiguous filename), RQ-003 (credit value), RQ-005 (central-screen messages) leave a few oracles undefined — these become `[BLOCKED]` TCs pending SA, not guesses. Backend-batch nature (no UI, scheduled) also limits direct observability → execution needs DB/mock assertions and a trigger endpoint QA was not given.

> Handoff: `00b-atom-inventory.md` (61 atoms) + this report → `/e2e-flow-designer` (02).

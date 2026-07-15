---
id: 006-gib-layer-cede
phase: verify
sub-phase: regression run (defect fix #75852)
status: partial-pass (CONDITIONAL-GO) — per-layer cede confirmed working on all current verifiable multi-layer GIB policies; original fixture GL5505 no longer re-testable
run-date: 2026-07-07
verified-by: anucha.pi / DB reconciliation (pg client, groupri@10.14.8.58)
environment: SIT
trigger: Defect fix — Redmine #75852
---

# Regression Run — GIB RI Premium Per-Layer Cede % (#75852)

## 1. Impact Set (§6.5 step 1 — defect-fix selection)
- **TC-CR1-011** — carries `Defect_Ref #75852` (the defect policy GL5505).
- **P1 smoke:** TC-CR1-012 (GL5557), TC-CR1-013 (GH5558).
- **Same Screen/Sub Category neighbour:** TC-CR1-014 (GIB single-layer guard).
- TC-CR1-015 (boundary edge, P2) excluded — unaffected by this fix, was Not Run at baseline.

## 2. Baseline
`verify-sit-run_2026-05-27.md` — TC-CR1-011 **Fail** (#75852), TC-CR1-012/013/014 **Pass**.

## 3. Execution (read-only DB reconciliation, latest runs)
Tooling: `regression-75852.js`, `verify-gl5557-formula.js`, `verify-gh5558-formula.js`,
`scan-gib-multilayer.js`, `inspect-gl5505-members.js`.

### 3a. GL5505 (TC-CR1-011) — fixture no longer present
- Latest run **hd547** (rig_est_policy_hd_id 18019, period 202604 / closing 202605, **SUCCESS**, 2026-06-23):
  `ri_prem_life L1 = 96,492.75 / L2 = 0 / L3 = 0`.
- Current member state: **651 members, ALL in L1 band (SA <= 5M)**. `tx_stg_est_prem_layer` has only an L1 row
  (life_prem 643,285). Members with SA > 5M (the L2/L3 triggers **00702 SA 12M**, **00703 SA 22M**) are
  **GONE** from `tx_stg_est_inforce_member` and `tx_est_snap_cert_inforce` (sections E/F empty).
- Therefore L1 = 643,285 x 15% = 96,492.75 is the **correct single-layer** result — but the multi-layer
  code path is **not exercised**. **SC-001 (L1 99,192.75 / L2 30,800 / L3 0) cannot be reproduced** because
  its precondition (the injected multi-layer members) has been reverted out of the DB.
- => TC-CR1-011 is **BLOCKED** (precondition unmet), **not** a Fail->Pass. A naive equality check falsely
  "passes" only because expected and actual both degenerate to Total x 15%.

### 3b. Equivalent multi-layer GIB policies (fix actually verified here)
Current GIB policies that still have live multi-layer members (`scan-gib-multilayer.js` §3): **only GL5557 and GH5558.**
- **GL5557** (TC-CR1-012, monthly mode_pay=12): recomputed formula = actual **exactly** —
  `ri_life L1 139,193.10 / L2 46,080.00`, `ri_acc L1 36,393.84 / L2 15,120.00`. L2 populated, **no collapse**.
- **GH5558** (TC-CR1-013, annual mode_pay=1): recomputed formula = actual **exactly** —
  `ri_life L1 124,800.00 / L2 325.00 / L3 0`. L2 populated, **no collapse**.
- => The defect behavior (all premium collapsing into L1 @ 15%) does **not** occur on any current verifiable
  multi-layer GIB policy. Per-layer cede (FR-001), marginal slicing (FR-002), FactorMode (FR-003) and
  L1-residual (FR-004) are all working.

### 3c. Single-layer guard (TC-CR1-014)
GL5505 hd547 (now single-layer) = 643,285 x 15% = 96,492.75 exact -> single-layer cede correct (corroborates).

## 4. Transitions (§6.5 step 4)
| TC ID | Baseline | Now | Transition | Defect_Ref |
|-------|----------|-----|------------|------------|
| TC-CR1-011 | Fail | Blocked | **Fail -> Blocked** (test fixture removed; SC-001 not reproducible) | #75852 |
| TC-CR1-012 | Pass | Pass | Pass -> Pass (stable; formula = actual exact) | — |
| TC-CR1-013 | Pass | Pass | Pass -> Pass (stable; formula = actual exact) | — |
| TC-CR1-014 | Pass | Pass | Pass -> Pass (stable; GL5505 single-layer 96,492.75 exact) | — |

**No `Pass -> Fail`** -> no new regression defect opened. No `Fail -> Fail` re-run -> #75852 not reopened.

## 5. Result-Analysis (§6.8)
- **RCA (why TC-CR1-011 can't confirm):** layer = **data** (test-data lifecycle), not code. The QA injection
  `created_by='QA_TC_CR1_010_018'` (00702/00703) was reverted after the CR window, so GL5505 reverted to a
  single-layer policy. Not a code regression.
- **No flaky TCs** (deterministic DB reconciliation).
- **Production-readiness (per-layer cede feature):** Functional **Ready** (proven on GL5557 + GH5558);
  Data-integrity **Conditional** (ticket's own fixture gone -> can't close on GL5505 directly);
  Regression **Ready** (no Pass->Fail).

## 6. Verdict (§6.9)
**CONDITIONAL-GO.** The per-layer cede fix for #75852 is **confirmed effective** on every current
verifiable multi-layer GIB policy (GL5557, GH5558) — no collapse, per-layer amounts exact to satang.
It **cannot be confirmed on GL5505 itself** because the injected multi-layer test members were removed
from the DB, so SC-001 is not reproducible.

**Condition to fully close #75852 on its own policy (owner: QA + Dev):**
Re-inject the GL5505 test members (00702 SA 12M / 00703 SA 22M, rate 1.40, `created_by='QA_TC_CR1_010_018'`)
into `tx_stg_est_inforce_member` + snapshot, run a fresh Estimate, and confirm `ri_prem_life L1 99,192.75 /
L2 30,800.00 / L3 0.00` (SC-001). **Alternatively**, accept the equivalent-policy evidence (GL5557 + GH5558)
as sufficient proof that the layer-cede engine is fixed, and close #75852 with that rationale.

## 7. Tracker updates applied
- `test-cases_gib-layer-cede.csv`: TC-CR1-011 -> **Blocked** (+ dated note); TC-CR1-012/013/014 notes appended `re-verified 2026-07-07`.
- 16-col checklist in `test-scenarios_gib-layer-cede.md`: mirrored Test Status + Tested Date 2026-07-07 for impact-set rows.
- `00-INDEX.md`: step `07 regression` -> done.

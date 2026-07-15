---
id: 006-gib-layer-cede
phase: verify
sub-phase: SIT execution record (baseline)
status: fail (GL5505 per-layer cede defect confirmed — #75852; smoke multi-layer + single-layer pass)
run-date: 2026-05-27
verified-by: anucha.pi / DB reconciliation (pg client, groupri@10.14.8.58)
environment: SIT
---

# SIT Run (baseline) — GIB RI Premium Per-Layer Cede %

## 1. Method
Source of truth = system DB `groupri`. Reconcile `tx_rig_est_policy_dt.ri_prem_life` (per `level`)
against the official Estimate layer-premium formula (FactorMode × marginal SA slicing, L1 = residual,
per-layer `percent_re` GIB 15/100/0). Tooling: `verify-gl5505-formula.js`, `verify-gl5557-formula.js`,
`verify-gh5558-formula.js`, `scan-gib-multilayer.js`.

## 2. Test Data Setup
- Test members `created_by='QA_TC_CR1_010_018'` injected into GL5505 (00702 SA 12M → L2, 00703 SA 22M → L3),
  committed live 2026-05-26; NULL-column backfill ~11:00.
- All other policies read-only (production inforce snapshot).

## 3. Results
| TC ID | Scenario | Expected | Actual | Status | Evidence |
|-------|----------|----------|--------|--------|----------|
| TC-CR1-011 | GL5505 per-layer cede | L1 99,192.75 / L2 30,800.00 / L3 0 | hd439: L1 104,232.75 / L2 0 / L3 0 (full collapse) | Fail | verify-gl5505-formula.js |
| TC-CR1-012 | GL5557 monthly multi-layer | L1 139,193.10 / L2 46,080.00 | L1 139,193.10 / L2 46,080.00 | Pass | verify-gl5557-formula.js |
| TC-CR1-013 | GH5558 annual L2 slice | L2 325 / L1 124,800 | L2 325 / L1 124,800 | Pass | verify-gh5558-formula.js |
| TC-CR1-014 | GIB single-layer guard | life_prem × 15% | exact (GH4193/GH5313/GH5327) | Pass | scan-gib-multilayer.js |
| TC-CR1-015 | Boundary member | boundary → lower band | — | Not Run | — |

## 4. Defect Log
| Defect ID | TC ID | Severity | Summary | Steps to Reproduce | Status |
|-----------|-------|----------|---------|--------------------|--------|
| #75852 | TC-CR1-011 | Major | GL5505 multi-layer collapses to L1@15%; L2/L3 = 0 | Backfill 00702/00703; run Estimate; read policy_dt hd439 | Open |

## 5. Coverage & Verdict
- Pass 3 · Fail 1 · Not Run 1 · executed 4/5 (80%).
- Verdict: **NO-GO** — open Major defect on a MUST-principle (P1 per-layer cede) without coverage discount.

## 6. Residual Risk
| TC ID | Severity | Why unverified / risk | Coverage today | Test approach to close |
|-------|----------|-----------------------|----------------|------------------------|
| TC-CR1-015 | Minor | boundary member band assignment unverified | none | find/inject a policy with SA exactly on a boundary |

## Notes
hd452 (partial split: L1 97,932.75 / L2 39,200) ran 09:27, **before** the 11:00 member backfill, so it used
incomplete data and is not a valid observation of the fix. As of baseline date, **no run reproduces SC-001**
→ fix not confirmed. Decisive test = clean re-run of GL5505 on post-backfill members.

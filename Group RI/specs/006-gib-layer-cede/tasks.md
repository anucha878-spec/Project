# Tasks — GIB RI Premium Per-Layer Cede %

**Feature:** 006-gib-layer-cede · **Plan:** plan.md

## Implementation tasks (Dev — CR#6 / #75852)

- **T-001** — Step 4 (`policy_dt`) MUST read per-layer premium base from `tx_stg_est_prem_layer`
  and apply `percent_re` per `level`, not a recomputed SA×rate factor. *(files: Estimate engine Step 4)*
- **T-002** — Implement marginal SA slicing for members crossing bands (15M middle slice → L2, top → L3).
- **T-003** — Apply Factor Mode of Payment (mode_pay 12/1) before layer split.
- **T-004** — Compute L1 as residual `round(Total − L2 − L3, 2)`.

## QA / verification tasks

- **T-Q01** — Verify GL5505 (defect policy) latest run vs SC-001 (L1 99,192.75 / L2 30,800 / L3 0). *(verify-gl5505-formula.js)*
- **T-Q02** — Smoke: GL5557 + GH5558 multi-layer stay exact (SC-002). *(verify-gl5557-formula.js, verify-gh5558-formula.js)*
- **T-Q03** — Smoke: single-layer GIB unaffected (SC-003). *(scan-gib-multilayer.js)*

## Touch map (test ↔ implementation)

| Task | Requirement | Component touched | TC |
|------|-------------|-------------------|-----|
| T-001 | FR-001 | policy_dt Step 4 | TC-CR1-011 |
| T-002 | FR-002 | marginal slicing | TC-CR1-011, TC-CR1-013 |
| T-003 | FR-003 | factor mode | TC-CR1-012 |
| T-004 | FR-004 | L1 residual | TC-CR1-011 |
| T-Q02 | FR-006/SC-002 | (verify only) | TC-CR1-012, TC-CR1-013 |
| T-Q03 | SC-003 | (verify only) | TC-CR1-014 |

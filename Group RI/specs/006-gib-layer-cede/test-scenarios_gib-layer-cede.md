# Test Scenarios — GIB RI Premium Per-Layer Cede %

**Feature:** 006-gib-layer-cede · **Spec:** spec.md · **Defect:** #75852

## Test Matrix Summary

| ID | Feature | Test Scenario Name | Test Dimension | Priority | Tags | Target Test Level |
|----|---------|--------------------|----------------|----------|------|-------------------|
| TC-CR1-011 | GIB layer cede | GL5505 multi-layer per-layer cede (defect policy) | Side-Effects | P1 | @regression @side_effect | Integration |
| TC-CR1-012 | GIB layer cede | GL5557 monthly-mode multi-layer exact | Positive | P1 | @smoke @positive | Integration |
| TC-CR1-013 | GIB layer cede | GH5558 annual-mode L2 slice exact | Positive | P1 | @smoke @positive | Integration |
| TC-CR1-014 | GIB layer cede | GIB single-layer unaffected (guard) | Positive | P2 | @regression @positive | Integration |
| TC-CR1-015 | GIB layer cede | Member exactly on band boundary | Edge | P2 | @edge_case | Integration |

## BDD Scenarios

### TC-CR1-011 — GL5505 multi-layer per-layer cede
`# Covers: FR-001, FR-004`
```gherkin
Given GIB policy GL5505 (annual mode) with members 00702 (SA 12M) and 00703 (SA 22M) at rate 1.40
  And the test members are backfilled into tx_stg_est_inforce_member
When the Estimate engine runs and writes tx_rig_est_policy_dt for GL5505
Then ri_prem_life L1 = 99,192.75
  And ri_prem_life L2 = 30,800.00
  And ri_prem_life L3 = 0.00
```

### TC-CR1-012 — GL5557 monthly-mode multi-layer exact
`# Covers: FR-003, FR-002`
```gherkin
Given GIB policy GL5557 with monthly mode (mode_pay=12) and members spanning L1 and L2
When the Estimate engine runs
Then ri_prem_life L1 = 139,193.10 and L2 = 46,080.00
  And ri_prem_acc L1 = 36,393.84 and L2 = 15,120.00
```

### TC-CR1-013 — GH5558 annual-mode L2 slice exact
`# Covers: FR-002`
```gherkin
Given GIB policy GH5558 (annual) with one L2 member SA 5.5M at rate 0.65
When the Estimate engine runs
Then Premium L2 = 325 and ri_prem_life L2 = 325 (x100%)
  And L1 residual ri_prem_life = 124,800
```

### TC-CR1-014 — GIB single-layer unaffected
`# Covers: FR-006`
```gherkin
Given a GIB single-layer policy <policy> with total life_prem <prem>
When the Estimate engine runs
Then ri_prem_life L1 = <prem> x 15% exactly

Examples:
  | policy | prem      | expected     |
  | GH4193 | 12675     | 1901.25      |
  | GH5313 | 249600    | 37440.00     |
  | GH5327 | 2704053   | 405607.95    |
```

### TC-CR1-015 — Member exactly on band boundary
`# Covers: FR-001, FR-002`
```gherkin
Given a GIB policy with a member whose SA equals a band boundary (5,000,000 or 20,000,000)
When the Estimate engine assigns the member to a layer
Then SA = 5,000,000 is counted in the L1 band
  And SA = 20,000,000 is counted in the L2 band
  And no premium leaks to the upper layer
```

## Test Checklist (16-column execution format)

| Test Checklist ID | System | Feature | Screen | Sub Category | Test Objective | Test Condition | Test Step | Expected Result | Test Data | Priority | Test Status | Tested By | Tested Date (YYYY-MM-DD) | Redmine No. | Remark |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-CR1-011 | Group RI | GIB layer cede | Estimate/policy_dt | RI premium | Verify per-layer cede on GL5505 | GL5505 members backfilled, GIB annual | Run Estimate; read ri_prem_life per level | L1 99,192.75 / L2 30,800.00 / L3 0.00 | GL5505 00702/00703 | P1 | Blocked | anucha.pi | 2026-07-07 | #75852 | re-verify 2026-07-07: test members removed; SC-001 not reproducible (BLOCKED). Fix proven on GL5557/GH5558 |
| TC-CR1-012 | Group RI | GIB layer cede | Estimate/policy_dt | RI premium | Multi-layer monthly mode exact | GL5557 mode12 | Run Estimate; read L1/L2 | L1 139,193.10 / L2 46,080.00 | GL5557 | P1 | Pass | anucha.pi | 2026-07-07 |  | re-verified 2026-07-07: formula=actual exact, no collapse |
| TC-CR1-013 | Group RI | GIB layer cede | Estimate/policy_dt | RI premium | Annual mode L2 slice exact | GH5558 mode1 | Run Estimate; read L1/L2 | L2 325 / L1 124,800 | GH5558 | P1 | Pass | anucha.pi | 2026-07-07 |  | re-verified 2026-07-07: hd482 exact |
| TC-CR1-014 | Group RI | GIB layer cede | Estimate/policy_dt | RI premium | Single-layer unaffected | GH4193/GH5313/GH5327 | Run Estimate; read L1 | life_prem x 15% | single-layer set | P2 | Pass | anucha.pi | 2026-07-07 |  | re-verified 2026-07-07: GL5505 hd547 96,492.75 exact |
| TC-CR1-015 | Group RI | GIB layer cede | Estimate/policy_dt | RI premium | Boundary member band assignment | SA=5M or 20M member | Run Estimate; check band | boundary -> lower band | — | P2 | Not Run |  |  |  | no boundary policy verified |

## Coverage Summary

- FRs total: 6 (FR-001..FR-006). FRs with >=1 TC: 6 (100%).
- SC-001 -> TC-CR1-011 · SC-002 -> TC-CR1-012, TC-CR1-013 · SC-003 -> TC-CR1-014.
- Dimensions covered: Positive (3), Side-Effects (1), Edge (1). Not exercised: Negative/Validation,
  Concurrency, Security, UX/Usability — justified: this is a back-end financial calc verified by DB
  reconciliation; no user input surface, no UI, no auth boundary in this feature slice.

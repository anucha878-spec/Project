# Feature Spec — GIB RI Premium Per-Layer Cede %

**Feature ID:** 006-gib-layer-cede
**Source:** CR#6 (Redmine parent #63684) · 20190033 Group RI Program BRD v1.0
**Defect of record:** Redmine #75852 — "GIB layer collapse" (RI premium engine ignores per-layer cede%)
**Status:** implemented (fix attempted) — under regression verification

## Context

The Estimate engine computes reinsurance (RI) premium for group policies. For treaties with a
multi-layer retention structure (e.g. **GIB / GIB_Grp_Direct_EB**), each Sum-Assured (SA) band
cedes a **different percentage** to the reinsurer. Layered staging (`tx_stg_est_prem_layer`) is
correct; the defect is in **Step 4 (policy_dt)** which writes `tx_rig_est_policy_dt.ri_prem_life`.

## Functional Requirements

- **FR-001 (per-layer cede) — [P1, MUST, constitution P1]**
  RI premium MUST be applied **per layer** via `percent_re`. GIB matrix: **L1 = 15% / L2 = 100% / L3 = 0%**.
  A multi-layer policy MUST NOT collapse all premium into L1.
  *Acceptance:* `ri_prem_life[layer] = Premium_Life[layer] × percent_re[layer]` for every layer.

- **FR-002 (marginal SA slicing) — [P1, MUST, constitution P2]**
  Per-layer Premium MUST use marginal slicing on band boundaries (L1 ≤ 5M, 5M < L2 ≤ 20M, L3 > 20M).
  A member with SA > 20M contributes its **15M middle slice** to L2 and its **(SA − 20M) top slice** to L3.

- **FR-003 (Factor Mode of Payment) — [P1, MUST]**
  Premium MUST be scaled by Factor Mode of Payment: monthly (`mode_pay = 12`) → factor 12; annual
  (`mode_pay = 1`) → factor 1.

- **FR-004 (L1 residual) — [P2, MUST]**
  `Premium_Life_L1 = round(Premium_Life_Total − L2 − L3, 2)`. L1 is the residual, never computed directly
  from a re-derived SA×rate factor.

- **FR-005 (financial accuracy) — [P1, MUST, constitution P3]**
  Output MUST reconcile to source to 2 decimals (±0.01) per layer.

- **FR-006 (single-layer unaffected) — [P2]**
  Single-layer GIB policies MUST remain correct (regression guard): `life_prem × 15%`.

## Success Criteria

- **SC-001** — For the defect policy **GL5505** (annual, members 00702 SA 12M + 00703 SA 22M, rate 1.40),
  a clean Estimate run on post-backfill members produces **ri_prem_life L1 = 99,192.75 / L2 = 30,800.00 / L3 = 0.00**.
- **SC-002** — Known-good multi-layer policies stay exact: **GL5557** (monthly, mode12) L1 = 139,193.10 / L2 = 46,080.00;
  **GH5558** (annual, mode1) L2 = 325 / L1 = 124,800.
- **SC-003** — No GIB single-layer policy regresses (GH4193, GH5313, GH5327 = `life_prem × 15%`).

## Edge Cases

- Member exactly on a boundary (SA = 5,000,000 or 20,000,000) — belongs to lower band.
- Policy with all members in L1 → L2 = L3 = 0, L1 = Total × 15%.
- Test members backfilled **after** an engine run → run used incomplete data (invalid baseline; see #75852 hd452).

## Out of Scope

- Actual (settlement) period premium — covered by #82686.
- Experience Refund — covered separately (GL346).
- Rate table correctness — treated as upstream input.

> FRD/BRD reference: `20190033_Group RI Program_BRD_V1.0 - Google Sheets.pdf` (this repo root).

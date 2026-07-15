# Implementation Plan — GIB RI Premium Per-Layer Cede %

**Feature:** 006-gib-layer-cede · **Spec:** spec.md · **Defect:** #75852

## Architecture / Data Flow

Estimate premium pipeline (see memory `ri-premium-calc-pipeline`):

1. **Member step** — per-member premium & rate → `tx_stg_est_inforce_member`, `tx_est_snap_cert_inforce`.
2. **Staging layer split** — `tx_stg_est_prem_layer` (L1/L2/L3 premium base). *Confirmed correct.*
3. **Rate / cede config** — treaty per-layer `percent_re` (GIB L1=15 / L2=100 / L3=0).
4. **policy_dt (Step 4)** — `tx_rig_est_policy_dt.ri_prem_life` per `level` (L1/L2/L3). **← defect location (#75852).**

## Stack

- **DB:** PostgreSQL — `groupri @ 10.14.8.58:5432` (db `groupri`).
- **Verify tooling:** Node `pg` client scripts in repo root (`verify-gl5505-formula.js`, `verify-gl5557-formula.js`,
  `verify-gh5558-formula.js`, `scan-gib-multilayer.js`, `inspect-gl5505-members.js`).
- **Run identity:** each Estimate execution = one `rig_est_hd_id` (hd). Key runs on record: hd439 (collapse),
  hd452 (partial, ran before backfill), latest post-backfill = TBD.

## Key tables

| Table | Role |
|-------|------|
| `tx_stg_est_prem_layer` | staged per-layer premium base (correct) |
| `tx_stg_est_inforce_member` | member SA + `prem_rate_life` (marginal slicing input) |
| `tx_est_snap_cert_inforce` | member premium snapshot (`life_prem`, `life_e1_prem`) |
| `tx_rig_est_policy_dt` | **output** `ri_prem_life` per `level` — the value under test |
| `tx_rig_est_policy_hd` | run header (`rig_est_hd_id`) |

## Technical Constraints

- QA is **read-only** on the engine — QA cannot trigger a fresh Estimate run; Dev/scheduler produces new `hd`.
  QA verifies the **output** of whatever runs exist. → a "regression re-run" here = re-verify latest run vs SC-001.
- Test members (`created_by='QA_TC_CR1_010_018'`) were backfilled ~11:00 on 2026-05-26; any run **before** that
  used incomplete data and is not a valid baseline for SC-001.

## Test Level mapping

- FR-001..005 → **Integration** (DB reconciliation against formula).
- FR-006 / SC-003 → **Integration** smoke (single-layer guard).

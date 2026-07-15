# Handoff — #75852 definitive close (re-inject GL5505 fixture + Estimate run)

**To:** Dev / QA lead · **From:** QA (speckit-qa regression, 2026-07-07) · **Defect:** Redmine #75852
**Why:** The regression on 2026-07-07 proved the per-layer cede fix works on all current verifiable
multi-layer GIB policies (GL5557, GH5558 — exact, no collapse). The **original policy GL5505 cannot be
re-tested** because its injected multi-layer members were cleaned out of the DB. To close #75852 on GL5505
itself, its fixture must be re-injected into the **current** period and a fresh Estimate run executed.

## Status of prep (done by QA)
- ✅ Injection script **retargeted to current period 202607** and **dry-run validated** against live schema
  (8 cert + 1 tpd rows insert cleanly, rolled back — nothing committed).
- ✅ Layer split confirmed in dry-run: **00702 → L2**, **00703 → L3** (the multi-layer trigger).
- Script: `inject-tc-cr1-010-018-202607.js` (repo root). `DRY_RUN=true` by default.

## Confirmed target (period 202607, verified 2026-07-07)
| Item | Value |
|------|-------|
| cert proc (`tx_rig_landing_cert_inforce.rig_process_hd_id`) | **19880** |
| tpd proc (`tx_rig_landing_claimtpd.rig_process_hd_id`) | **19878** |
| policy proc | 19874 (GL5505 py2 `rate_flag=1` Non-Unit) |
| rate (code 108) | value_life **1.2** / value_acc **3.0** |
| max cer_no GL5505 | 00700 → test cers 00701-00708 do not collide |
| isolation tag | `created_by='QA_TC_CR1_010_018'` |

## Test members injected (additive)
| cer | life SA | -> band | life_prem (SA/1000x1.2) | note |
|-----|---------|--------|--------------------------|------|
| 00701 | 4,000,000 | L1 | 4,800 | |
| **00702** | **12,000,000** | **L2** | 14,400 | L2 trigger |
| **00703** | **22,000,000** | **L3** | 26,400 | L3 trigger |
| 00704-00707 | acc 5M each | L1 | acc 15,000/15,000/15,000/5,000 | 00707 age 72 (>70) |
| 00708 | 5,000,000 (+TPD claim) | L1 | 6,000 | TC-018 |

## Steps to close (Dev)
1. **Inject live:** edit `inject-tc-cr1-010-018-202607.js` -> set `DRY_RUN = false` -> `node inject-tc-cr1-010-018-202607.js`
   (commits 8 cert + 1 tpd rows into 202607 landing, tagged `QA_TC_CR1_010_018`).
2. **Run Estimate for period 202607** (engine — QA cannot trigger this) so Landing -> Snapshot -> Staging ->
   `tx_rig_est_policy_dt` propagates the new members. Note the new `rig_est_hd_id`.
3. **Verify SC-001:** `node verify-gl5505-formula.js` (or `regression-75852.js`) against the new run.
   **Expected `ri_prem_life`:** `L1 = 99,192.75  /  L2 = 30,800.00  /  L3 = 0.00`
   (Premium: L2 = 1.40x(7,000+15,000)=30,800; L3 prem = 1.40x2,000=2,800 x0% = 0; L1 residual = 694,885-30,800-2,800 = 661,285 -> x15% = 99,192.75.)
   - Match -> **#75852 fix-confirmed on GL5505**; set TC-CR1-011 = Pass, comment "verified fixed" (keep #75852 as history, do not auto-close — Dev/1ST closes).
   - `L2 = 39,200` or collapse -> fix incomplete; reopen #75852.
4. **Cleanup after verify** (leave production clean):
   ```sql
   DELETE FROM tx_rig_landing_claimtpd     WHERE created_by='QA_TC_CR1_010_018';
   DELETE FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018';
   ```

## Risk notes
- Writes into the **active** period 202607 — inject in a controlled window; the `created_by` tag isolates the
  8+1 test rows so they are trivially removable (step 4). No production member rows are modified.
- rate 1.40 in the SC-001 math is the GL5505 py2 member `prem_rate_life` used at the staging/member step;
  the landing `life_prem` values above (SA/1000x1.2) feed the same members — confirm the member-step rate
  resolves to 1.40 as in the 2026-05 baseline before treating a mismatch as a defect.

## Alternative (no production write)
Accept the equivalent-policy evidence (GL5557 + GH5558, both exact per-layer, no collapse) as sufficient
proof the layer-cede engine is fixed, and close #75852 with that rationale — see
`verify-regression-run_2026-07-07.md` §6.

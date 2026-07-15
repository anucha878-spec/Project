# Group RI — QA Constitution

Binding MUST-principles for the Group Reinsurance (Group RI) program. Any principle
below that lacks a covering test case is a **CRITICAL** coverage gap (speckit-qa §7).

## P1 — Per-layer cede correctness (MUST)
RI premium MUST be ceded **per layer** using the treaty's per-layer retention/cede matrix
(`percent_re`). A multi-layer policy MUST NOT collapse all premium into a single layer.
For treaty **GIB** the cede matrix is **L1 = 15% / L2 = 100% / L3 = 0%**.

## P2 — Layer premium derivation (MUST)
Per-layer Premium MUST be derived by **marginal SA slicing** against the band boundaries
(L1 ≤ 5M, 5M < L2 ≤ 20M, L3 > 20M), multiplied by **Factor Mode of Payment** (monthly
mode_pay=12 → 12, annual mode_pay=1 → 1). **L1 = round(Total − L2 − L3, 2)** (residual).
The engine MUST use the actual staged per-layer premium base, never a spurious recomputed factor.

## P3 — Financial accuracy (MUST)
Computed RI premium MUST reconcile to the source system to **2 decimal places (สตางค์)**.
No rounding drift beyond ±0.01 per layer.

## P4 — Traceability & no-fabrication (MUST)
Every reported test result MUST be an observed outcome. Unverified = `Not Run` / `Blocked`,
never `Pass`. Every defect MUST map to a tracked Redmine ticket.

## P5 — Data integrity of test injection (MUST)
Synthetic test members injected into live tables MUST be tagged (`created_by`) and MUST NOT
corrupt production reconciliation. Test-data timing MUST precede the engine run it validates.

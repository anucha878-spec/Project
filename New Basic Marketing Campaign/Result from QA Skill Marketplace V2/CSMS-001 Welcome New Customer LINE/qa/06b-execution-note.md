# 06b — Playwright Execution Note — CSMS-001 Welcome New Customer (LINE)

- **Status:** ⛔ **BLOCKED — not executed** · **Date:** 2026-07-09

## Why blocked
- **No reachable app / no BASE_URL.** No `QA_BASE_URL` (SIT/UAT host) was provided by the user or found in artifacts 00–06. A0 pre-generation gate inputs (URL / credentials / entry-navigation) are all absent — these are env-level and were never supplied.
- **Backend batch, no UI.** This feature is a scheduled batch (daily 10:00) plus an out-of-scope central Manual Fix screen. There is no UI surface for browser automation to exercise the core logic; faithful verification needs a **batch test harness**, not Playwright UI clicks.
- **No harness provisioned:** required = seed DB (policy master / application ORD-IND-PA / customer analytics / `ili_policy_remark` DNC / `cf_catalog` LINE_LINK / `WELCOME_NEW_CUST_LINE` history), a controllable **Line Connect Inquiry mock** (E02 / E13 / out-of-condition / down), **ESB + email sinks**, and a **batch/Manual-Fix trigger**. None exist.

## Current state
- `playwright/csms-001-welcome-line/csms-001-welcome-line.spec.js` generated: 65 tests, every one `test.fixme()` (titled by TC-ID, with a per-TC blocker reason). Conventions embedded (actionTimeout, evidence `snap()`, strict-data load from `qa/06`, single retry layer).
- `build-execution-report.js` scaffolded but guarded to refuse running (no evidence yet).
- No `playwright-report/` and no `evidence/` images exist — nothing ran.

## What unblocks it
1. Provision SIT env + `QA_BASE_URL` (or a batch runner endpoint) + credentials + Manual-Fix entry path.
2. Stand up the batch harness (DB seed + Inquiry/ESB/email mocks + trigger).
3. Resolve RQ-002 (CSV filename year) and RQ-004 (failure timeout) so TC-036/TC-050 have oracles.
4. Then run foreground `--headed --workers=1`, convert `test.fixme` → real bodies (seed → trigger → assert DB/CSV/mock/email + `snap()` at assertion), and proceed to `07`.

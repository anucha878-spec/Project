# NFR Routing — CSMS-004 Customer Birthday

Non-functional requirements found in `spec.md` Success Criteria — routed **out of the functional QA track** (this pipeline covers functional/integration only). Audit trail so NFR is not silently dropped.

| REQ / SC | Type | Detail | Destination | Status |
|----------|------|--------|-------------|--------|
| SC-001 | perf | Batch completes ≤ 5 min for ≤ 10,000 records/round | Performance/load track (batch throughput) | pending — no track yet (TODO) |
| SC-002 | perf/reliability | 99% of selected records get `refer_no` confirmation from Gateway | Reliability/monitoring track | pending (TODO) |
| SC-006 | perf/SLA | Round-level failure email delivered ≤ 15 min from scheduled time | Monitoring/alerting SLA track | pending (TODO) |
| SC-007 | perf/SLA | Manual Fix completes backlog ≤ 1 hour, no resend | Ops/monitoring track | pending (TODO) |

- No security / accessibility / compatibility NFR stated in spec.
- Functional correctness behind these SCs (dedup=0, no empty-variable SMS, all recorded, email fired) **is** covered functionally in `03-test-cases.md`; only the **quantified perf/SLA thresholds** are routed here.

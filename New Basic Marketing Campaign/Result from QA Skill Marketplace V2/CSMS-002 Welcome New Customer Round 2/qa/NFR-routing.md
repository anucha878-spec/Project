# NFR Routing — CSMS-002 Welcome New Customer Round 2

Functional Spec-Kit QA track covers functional/integration only. NFRs are routed out (audit trail so they are not silently dropped).

| REQ / RQ | NFR type | Rationale | Destination | Status |
|---|---|---|---|---|
| RQ-005 | security / PII | SMS carries insured name + phone; CSV UTF-8 file transits ESB→SMS Gateway; logs store name/phone/cardNo. Spec has no masking/retention/access-control/log-protection requirement. | Security / pentest track | pending (no track wired on this project) — TODO |
| Assumptions "ปริมาณ ~1,000/day" | performance / scale | ~1,000 targets/day drives batched registration-service calls + file size; spec says use as design base, not load-tested. | Performance track | pending (needs SIT env) — TODO |

No accessibility (a11y) or compatibility NFR applies (headless batch; only shared Admin Dashboard UI, out of scope).

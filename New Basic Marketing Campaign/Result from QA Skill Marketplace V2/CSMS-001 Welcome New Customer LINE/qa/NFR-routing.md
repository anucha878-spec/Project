# NFR Routing — CSMS-001 Welcome New Customer (LINE)

Spec-Kit functional QA covers functional/integration only. NFRs found while designing TCs are routed here (audit trail — not dropped silently).

| REQ-id | NFR type | Why | Destination | Status |
|--------|----------|-----|-------------|--------|
| FR-005 / FR-006 / Key Entities | security / privacy (compliance) | Handles PII (fname/lname, mobile_no, card_no/id_no) and enforces Do-Not-Contact — data-protection & consent obligations, not functional behaviour | Security / compliance track (no track defined in this project → TODO) | pending |
| FR-014 / FR-015 / A-001 | security (transport) | SMS payload with PII flows batch → ESB → SMS Gateway; channel security not specified | Security track | pending |
| FR-001 / A-002 | performance / throughput | Daily batch over potentially large policy volume + batch Inquiry API (rate-limit risk per A-002) | Performance track (TODO) | pending |

> No explicit perf/security/a11y/compat requirement exists in `spec.md`; these are QA-identified implicit NFRs. Raised as `MISSING_REQUIREMENT (NFR)` in `01`. Not turned into functional TCs.

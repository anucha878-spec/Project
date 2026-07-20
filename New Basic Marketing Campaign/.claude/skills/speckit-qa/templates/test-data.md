# Template: `test-data_<feature>.json` (mode `test-data`)

Synthetic dataset consumed by the runner/agents. **No real PII** (satisfies PDPA gate §7). See SKILL.md §4.7.

Six categories; each record binds to a real `tc_id` + `req_id` (drop any record without both).
`negative`/`boundary` values come from `templates/negative-input-catalog.md`; `risk_based` targets P0/P1 FRs.

```json
{
  "feature": "<feature-slug>",
  "generated": "YYYY-MM-DD",
  "synthetic": true,
  "positive": [
    { "id": "TD-001", "tc_id": "TC-001", "req_id": "FR-001", "category": "positive",
      "input": { "name": "Somchai Test", "phone": "0800000000" },
      "expected": "record saved; success toast", "note": "happy path" }
  ],
  "negative": [
    { "id": "TD-020", "tc_id": "TC-014", "req_id": "FR-004", "category": "negative",
      "input": { "search": "100%_off" },
      "expected": "`%` and `_` treated as literals, not LIKE wildcards", "note": "wildcard != injection" }
  ],
  "boundary": [
    { "id": "TD-040", "tc_id": "TC-020", "req_id": "FR-002", "category": "boundary",
      "input": { "message": "<255-char string>" },
      "expected": "accepted at max length; 256 rejected", "note": "length boundary" }
  ],
  "business_rule": [],
  "e2e": [],
  "risk_based": [
    { "id": "TD-090", "tc_id": "TC-031", "req_id": "FR-001", "category": "risk_based",
      "input": {}, "expected": "", "note": "targets P0 FR from risk-analysis" }
  ]
}
```

Field contract: `id` (stable `TD-###`), `tc_id` (`TC-###`), `req_id` (`FR-###`/`SC-###`),
`category` (one of the six), `input` (object), `expected` (string), `note` (string). Dates `YYYY-MM-DD`.
Deterministic ordering by category then `id`.

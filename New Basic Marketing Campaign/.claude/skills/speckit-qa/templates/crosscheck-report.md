# Crosscheck Report — BRD/FRD → Spec Conformance (bundled into `speckit-qa` — mode `crosscheck`)

Verify the **SA specification (`spec.md`) faithfully carries forward the user's upstream requirement**
(BRD / FRD / UR) **before** any test is designed. This is a **read-only** conformance & traceability gate —
it never edits `spec.md`. It is distinct from:

- `speckit-analyze` — consistency *among* speckit artifacts (spec ↔ plan ↔ tasks), ignores the upstream source.
- `speckit-checklist` — quality of the requirement *wording* itself.
- `speckit-qa design/execute/report` — verification of the built *system's behavior*.

## What counts as the "source"

The single **source of truth the user actually handed over**: a Business Requirement Document (BRD),
Functional Requirement Document (FRD), User Requirement (UR) sheet, or an SA functional spec that pre-dates
`spec.md` (e.g. `SPEC_FR006_*.md` referencing `FRD_… v1.1`). Discovery order: explicit arg path → a
`FRD อ้างอิง`/`BRD`/`UR` reference line inside the spec → name-pattern auto-detect. Ask, never guess, when
multiple candidates match; abort when none is found.

## Finding taxonomy (one type per row)

| Finding | Meaning | Default severity |
|---------|---------|------------------|
| `Covered` | Source req has a faithful, equivalent spec FR/SC | — |
| `Gap (Missing)` | Source requires it; no spec FR/SC covers it | CRITICAL if core rule/permission/data-integrity; else HIGH |
| `Conflict` | Spec **contradicts** the source (value, rule, limit, permission, workflow differ) | CRITICAL |
| `Partial / Weakened` | Spec covers it but drops a condition, boundary, or permitted value | HIGH |
| `Extra Scope` | Spec FR/SC with no basis in the source (invented / gold-plated) | HIGH — route to SA/PO for confirm/approve |
| `Ambiguous mapping` | Cannot confidently map — wording too vague | MEDIUM — route wording to `/speckit-checklist` |

**Compare values, not just presence.** Field lengths, permitted enum/status values, role→permission matrices,
soft-vs-hard delete, in-scope/out-of-scope tables, numeric/date limits, defaults. Source "Hard Delete ❌" vs
spec allowing hard delete = `Conflict`, not `Covered`.

## Report structure — `crosscheck-brd-spec_<feature-slug>.md`

### Frontmatter

```yaml
---
id: <feature-id>
phase: verify
sub-phase: crosscheck (BRD/FRD → spec conformance)
status: <ready | blocked> (<one-line: N CRITICAL, M HIGH>)
run-date: <YYYY-MM-DD>
source-docs:
  - path: <relative path to BRD/FRD/UR>
    kind: <BRD | FRD | UR | SA-spec>
    ref: <version / sheet / size — e.g. "FRD v1.1" or "UR xlsx, sheet 'Requirement', 42KB">
spec-version: <spec.md version/date if stated>
verified-by: <who / method>
---
```

### 1. Traceability Matrix

One row per **source requirement**, plus one row per **spec FR/SC that maps to nothing** (Extra Scope):

| Source ID | Source Requirement (short) | Spec FR/SC | Match | Finding | Severity | Note |
|-----------|----------------------------|------------|-------|---------|----------|------|
| FRD-03 | Marketing can Cancel (soft delete) only | FR-007 | ✅ | Covered | — | |
| FRD-08 | Hard Delete NOT allowed | — | ❌ | Gap (Missing) | HIGH | spec silent on hard delete |
| BR-02 | Field `message` max 160 chars | FR-004 | ⚠ | Conflict | CRITICAL | spec says 200 |
| — | FR-012 Export to Excel | — | ➕ | Extra Scope | HIGH | not in FRD — confirm with PO |

`Match` glyphs: ✅ Covered · ⚠ Conflict/Partial · ❌ Gap · ➕ Extra · ❓ Ambiguous.

### 2. Findings (grouped by severity, CRITICAL first)

Per finding: `Source ID / Spec ref · Finding type · what the source says vs what the spec says · recommended
action (fix spec / PO approve / clarify)`. Cite exact locations (`spec.md:L###`, source section/row).

### 3. Coverage Summary

- Source requirements total
- `% Covered` (Covered ÷ total source reqs)
- Count per finding type (Gap / Conflict / Partial / Extra / Ambiguous)
- CRITICAL count · HIGH count
- Constitution MUST-principles implied by source but missing from spec (each = CRITICAL Gap)

### 4. Verdict & Next Actions

- **Any open CRITICAL (`Conflict` or core `Gap`) ⇒ `blocked`** — not ready for `design`. The SA must reconcile
  `spec.md` with the source, or the PO must approve the deviation, first.
- Clean (no CRITICAL/HIGH) ⇒ `ready` → "proceed to `/speckit-qa design`".
- Offer (never auto-apply): "Propose concrete `spec.md` edits for the top N findings?" → present a diff for
  explicit approval; the SA/user applies via `/speckit-specify` or manual edit.

## Rules

- **Read-only on `spec.md`** — this gate reports and proposes; it does not edit the spec.
- **No fabrication** — if the source can't be read (locked `.xlsx`, image-only PDF), say so and ask for a
  CSV/MD export; never invent source requirements.
- **Deterministic** — same source + same spec ⇒ same Source IDs, rows, and counts.
- **Stay in lane** — wording quality → `/speckit-checklist`; spec↔plan↔tasks consistency → `/speckit-analyze`;
  system behavior → `design`/`execute`/`report`. Note the handoff instead of duplicating.

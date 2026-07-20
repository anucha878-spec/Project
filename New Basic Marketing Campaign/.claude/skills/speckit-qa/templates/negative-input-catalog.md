# Adversarial Input Catalog — bundled into `speckit-qa design`

For **every** free-text, search, numeric, or date field, `design` must pull negative + edge inputs from
this catalog so metacharacter-as-literal, wildcard, boundary, and rendering cases are never missed. Each
row that applies to the field becomes at least one TC (dimension in the last column). This closes the class
of misses where the app "works on happy path" but breaks on adversarial-yet-plausible input.

> Origin: real SIT defects on FR-006 (DEF-001 `%` LIKE wildcard; UX-002 500-char overflow) that the first
> QA pass missed because the design only covered happy-path search + injection, not literal metacharacters
> or extreme-value rendering.

## A. Search / LIKE fields

| Input | Why | Expected (default) | Dimension |
|---|---|---|---|
| `%` alone | LIKE wildcard treated as literal? | should NOT return all rows (escape `%`->`\%` ESCAPE) or return only literal matches | Negative |
| `_` alone | single-char wildcard | same — literal, not "match any 1 char" | Negative |
| `abc%def`, `a_b` | embedded metachars | matched literally | Edge |
| `%' OR '1'='1` , `'; DROP TABLE x--` | SQL injection | **no injection** (parameterized) — distinct from wildcard above | Security |
| `[a-z]`, `*`, `?` | other glob/regex metachars | literal, no error | Edge |
| leading/trailing spaces, 2+ inner spaces | normalize behavior | trimmed/collapsed per BR | Edge |
| empty search | reset vs no-op | defined behavior (all rows or unchanged) | Positive |

**Key distinction to state in the TC:** *LIKE-wildcard escaping* (functional/Minor) != *SQL injection*
(security/Critical). Parameterized queries stop injection but NOT wildcard interpretation — test both,
label severity correctly.

## B. Text / name / template fields

| Input | Why | Dimension |
|---|---|---|
| exactly max, max+1 (e.g. 500 / 501) | boundary | Negative |
| **very long value rendered in List/table** | overflow / no word-wrap / layout break | **UX/Usability** |
| whitespace-only, empty | required / normalize | Negative |
| null byte `U+0000`, control chars | reject / sanitize | Security |
| `<script>`, `<img onerror>`, `"><b>` | stored/reflected XSS at every sink (list, form value, dialog) | Security |
| emoji / combining / RTL / NBSP `U+00A0` / homoglyph | unicode handling + dedup bypass | Edge / Security |
| very long value truncated in dialog vs full in list | inconsistent truncation | UX/Usability |

## C. Numeric / date / range fields

| Input | Why | Dimension |
|---|---|---|
| min, min-1, max, max+1 | boundary | Negative |
| start == end (single-day) | strict `>` vs `>=` — **is the rule itself right?** flag to `speckit-checklist` if ambiguous | Edge |
| adjacent boundary (new_start == existing_end) | inclusive/exclusive overlap | Edge |
| past date, far-future date (e.g. year 9999) | validation + rendering | Negative / UX |
| reversed range (end < start) | validation | Negative |

## D. State / flow / feedback (UX/Usability dimension)

| Scenario | Why | Dimension |
|---|---|---|
| sticky filter/search after create/edit/save -> new record hidden by stale filter | user confusion, double-submit risk | UX/Usability |
| which success toast after a state-change edit (save vs cancel semantics) | if spec ambiguous -> flag to `speckit-analyze` + open a clarification, don't guess | UX/Usability |
| empty state / loading spinner / no-results copy | feedback presence | UX/Usability |
| post-action redirect (PRG) resets sort/scroll unexpectedly | orientation loss | UX/Usability |
| destructive action confirmation + undo path | safety | UX/Usability |

## Usage
- Not every row applies to every field — pick the applicable rows per field and justify skips in the
  Coverage Summary (same one-line-justification rule as dimensions).
- Rows tagged **UX/Usability** feed the 7th dimension (see SKILL §4). Rows that question the *requirement
  itself* (e.g. C "is the rule right?", D "spec ambiguous") are **out of qa scope** — route them to
  `/speckit-checklist` (requirement quality) or `/speckit-analyze` (consistency) and note the handoff.

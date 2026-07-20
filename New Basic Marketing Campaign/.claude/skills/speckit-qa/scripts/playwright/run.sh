#!/usr/bin/env bash
# run.sh — install Playwright (first run), execute feature E2E suite, sync results -> CSV.
# Usage: ./run.sh <FeatureDir> <BaseUrl> [grep]
set -euo pipefail
FEATURE_DIR="${1:?FeatureDir required}"
BASE_URL="${2:?BaseUrl required}"
GREP="${3:-}"
BUNDLE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
E2E="$FEATURE_DIR/e2e"
mkdir -p "$E2E/tests"

[ -f "$E2E/playwright.config.ts" ] || cp "$BUNDLE/playwright.config.ts" "$E2E/playwright.config.ts"
[ -f "$E2E/tests/feature.e2e.spec.ts" ] || cp "$BUNDLE/tests/e2e.spec.ts" "$E2E/tests/feature.e2e.spec.ts"

CSV="$(ls "$FEATURE_DIR"/test-cases_*.csv 2>/dev/null | head -n1 || true)"
EVID="$FEATURE_DIR/evidence"; mkdir -p "$EVID"
export QA_BASE_URL="$BASE_URL" QA_FEATURE_DIR="$FEATURE_DIR" QA_EVIDENCE_DIR="$EVID" QA_TC_CSV="$CSV"

cd "$E2E"
if [ ! -d node_modules/@playwright/test ]; then
  npm init -y >/dev/null
  npm install -D @playwright/test
  npx playwright install chromium
fi
if [ -n "$GREP" ]; then npx playwright test --config "$E2E/playwright.config.ts" --grep "$GREP"
else npx playwright test --config "$E2E/playwright.config.ts"; fi

RESULTS="$E2E/.artifacts/results.json"
if [ -f "$RESULTS" ]; then node "$BUNDLE/sync-results.mjs" --results "$RESULTS" --csv "$CSV"
else echo "no results.json at $RESULTS — CSV not synced" >&2; fi

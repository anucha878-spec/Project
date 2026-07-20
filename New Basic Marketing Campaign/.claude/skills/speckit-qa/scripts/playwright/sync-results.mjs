#!/usr/bin/env node
/**
 * sync-results.mjs — map Playwright results.json onto test-cases_<feature>.csv.
 *
 * Usage: node sync-results.mjs --results <results.json> --csv <test-cases.csv>
 *
 * Contract: each Playwright test title starts with its TC ID (e.g. "TC-001 ...").
 * Mapping: passed->Pass, failed/timedOut->Fail, skipped/interrupted->Blocked.
 * A TC in the CSV but absent from results.json is left untouched (stays Not Run).
 * Pure Node, no deps. Rewrites only Status / Defect_Ref / Notes of matched rows
 * (speckit-qa 12-column schema). Dates emitted as YYYY-MM-DD.
 */
import { readFileSync, writeFileSync } from 'node:fs';

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
const resultsPath = arg('--results');
const csvPath = arg('--csv');
if (!resultsPath || !csvPath) {
  console.error('usage: node sync-results.mjs --results <results.json> --csv <test-cases.csv>');
  process.exit(2);
}

const report = JSON.parse(readFileSync(resultsPath, 'utf8'));
const outcome = new Map();
const TC_RE = /\b(TC-\d{3})\b/;

function walk(suite) {
  for (const spec of suite.specs ?? []) {
    const m = TC_RE.exec(spec.title ?? '');
    if (!m) continue;
    const tc = m[1];
    const statuses = (spec.tests ?? []).flatMap((t) => t.results ?? []).map((r) => r.status);
    let mapped = 'Blocked';
    if (statuses.includes('passed') && !statuses.some((s) => s === 'failed' || s === 'timedOut')) mapped = 'Pass';
    if (statuses.some((s) => s === 'failed' || s === 'timedOut')) mapped = 'Fail';
    if (outcome.get(tc) === 'Fail') continue; // prefer Fail if a TC appears twice
    outcome.set(tc, mapped);
  }
  for (const child of suite.suites ?? []) walk(child);
}
for (const s of report.suites ?? []) walk(s);

if (outcome.size === 0) {
  console.error('sync-results: no TC-### titles found in results.json — nothing to update.');
  process.exit(1);
}

const csv = readFileSync(csvPath, 'utf8');
const eol = csv.includes('\r\n') ? '\r\n' : '\n';
const lines = csv.split(/\r?\n/);

function splitCsv(line) {
  const out = [];
  let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { if (q && line[i + 1] === '"') { cur += '"'; i++; } else q = !q; }
    else if (c === ',' && !q) { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}
function quote(v) { return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }

let updated = 0;
const now = new Date().toISOString().slice(0, 10);
const result = lines.map((line, idx) => {
  if (idx === 0 || line.trim() === '') return line;
  const cols = splitCsv(line);
  const tc = cols[0];
  if (!outcome.has(tc)) return line;
  const status = outcome.get(tc);
  cols[9] = status;
  if (status === 'Fail') cols[10] = cols[10] || `DEF-${tc}`;
  const tag = `playwright ${now}`;
  cols[11] = cols[11] ? `${cols[11]}; ${tag}` : tag;
  updated++;
  return cols.map(quote).join(',');
});

writeFileSync(csvPath, result.join(eol));
console.log(`sync-results: updated ${updated} TC row(s) in ${csvPath}`);
for (const [tc, st] of [...outcome].sort()) console.log(`  ${tc} -> ${st}`);

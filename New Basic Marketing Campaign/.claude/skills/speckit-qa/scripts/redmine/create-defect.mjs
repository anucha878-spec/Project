#!/usr/bin/env node
/**
 * create-defect.mjs — open (or dedup-comment) a Redmine Defect for a failed TC.
 *
 * Env:  REDMINE_URL, REDMINE_API_KEY, REDMINE_PROJECT, [REDMINE_TRACKER_ID]
 * Args: --tc TC-040 --subject "..." [--description "..."] [--priority High] [--dry-run]
 *
 * Prints `CREATED #<id>` or `COMMENTED #<id>` then the bare id on the last line.
 * Pure Node (>=18) fetch, no deps. QA opens/comments only — never closes issues.
 */
import process from 'node:process';

const env = process.env;
const argv = process.argv;
function arg(n) { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; }

const base = (env.REDMINE_URL || '').replace(/\/+$/, '');
const key = env.REDMINE_API_KEY;
const project = env.REDMINE_PROJECT;
const tc = arg('--tc');
const subject = arg('--subject');
const description = arg('--description') || '';
const priority = arg('--priority') || 'Normal';
const dry = argv.includes('--dry-run');

if (!base || !key || !project || !tc || !subject) {
  console.error('usage: REDMINE_URL=.. REDMINE_API_KEY=.. REDMINE_PROJECT=.. node create-defect.mjs --tc TC-### --subject "..." [--description ..] [--priority High] [--dry-run]');
  process.exit(2);
}

// Map severity/priority label -> Redmine priority id. Adjust to your instance's IDs.
const PRIORITY_ID = { Immediate: 5, Urgent: 4, High: 4, Normal: 3, Low: 2 };
const headers = { 'X-Redmine-API-Key': key, 'Content-Type': 'application/json' };

async function findExisting() {
  const url = `${base}/issues.json?project_id=${encodeURIComponent(project)}&status_id=open&limit=50`;
  const r = await fetch(url, { headers });
  if (!r.ok) return null;
  const j = await r.json();
  return (j.issues || []).find(i => (i.subject || '').includes(tc)) || null;
}

async function main() {
  const existing = await findExisting();
  if (existing) {
    if (dry) { console.log(`DEDUP would comment on #${existing.id}`); console.log(existing.id); return; }
    const body = JSON.stringify({ issue: { notes: `QA re-run พบ defect เดิม (${tc}).\n\n${description}` } });
    const r = await fetch(`${base}/issues/${existing.id}.json`, { method: 'PUT', headers, body });
    if (!r.ok) { console.error('comment failed', r.status, await r.text()); process.exit(1); }
    console.log(`COMMENTED #${existing.id}`);
    console.log(existing.id);
    return;
  }
  const payload = { issue: { project_id: project, subject, description, priority_id: PRIORITY_ID[priority] || 3 } };
  if (env.REDMINE_TRACKER_ID) payload.issue.tracker_id = Number(env.REDMINE_TRACKER_ID);
  if (dry) { console.log('DRY create:', JSON.stringify(payload)); return; }
  const r = await fetch(`${base}/issues.json`, { method: 'POST', headers, body: JSON.stringify(payload) });
  if (!r.ok) { console.error('create failed', r.status, await r.text()); process.exit(1); }
  const j = await r.json();
  console.log(`CREATED #${j.issue.id}`);
  console.log(j.issue.id);
}

main().catch(e => { console.error(e); process.exit(1); });

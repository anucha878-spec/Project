#!/usr/bin/env node
/**
 * lifecycle.mjs — sync a Redmine defect after a QA execute/regression run.
 *
 * Adds a note, optionally attaches a test-result screenshot, optionally sets the
 * status (reopen / close) and a Root-Cause custom field. Complements
 * create-defect.mjs (which only opens/dedup-comments). QA opens with create-defect;
 * QA syncs the lifecycle with this. Status changes are applied ONLY when --status is
 * passed (the skill passes it after the user's confirmation gate).
 *
 * Env:  REDMINE_URL, REDMINE_API_KEY, REDMINE_PROJECT,
 *       [REDMINE_STATUS_CLOSED_ID=5] [REDMINE_STATUS_REOPEN_ID=2] [REDMINE_ROOTCAUSE_FIELD_ID]
 * Args: --id <issue-id> [--tc TC-###] [--note "..."] [--attach <file.png>]
 *       [--status close|reopen] [--root-cause "..."] [--dry-run]
 *
 * Prints `UPDATED #<id> (status=..., attached=0|1)`. Pure Node (>=18) fetch, no deps.
 */
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import process from 'node:process';

const env = process.env;
const argv = process.argv;
function arg(n) { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; }

const base = (env.REDMINE_URL || '').replace(/\/+$/, '');
const key = env.REDMINE_API_KEY;
const id = arg('--id');
const tc = arg('--tc') || '';
const note = arg('--note') || '';
const attach = arg('--attach');
const status = (arg('--status') || '').toLowerCase(); // '' | 'close' | 'reopen'
const rootCause = arg('--root-cause');
const dry = argv.includes('--dry-run');

if (!base || !key || !id) {
  console.error('usage: REDMINE_URL=.. REDMINE_API_KEY=.. node lifecycle.mjs --id <issue-id> [--tc TC-###] [--note ..] [--attach file.png] [--status close|reopen] [--root-cause ..] [--dry-run]');
  process.exit(2);
}
if (status && status !== 'close' && status !== 'reopen') {
  console.error(`--status must be 'close' or 'reopen' (got '${status}')`); process.exit(2);
}

const CLOSED_ID = Number(env.REDMINE_STATUS_CLOSED_ID || 5);
const REOPEN_ID = Number(env.REDMINE_STATUS_REOPEN_ID || 2);
const jsonHeaders = { 'X-Redmine-API-Key': key, 'Content-Type': 'application/json' };

// Upload the screenshot first -> returns a token used in the issue PUT.
async function uploadAttachment(path) {
  const buf = await readFile(path);
  const r = await fetch(`${base}/uploads.json?filename=${encodeURIComponent(basename(path))}`, {
    method: 'POST',
    headers: { 'X-Redmine-API-Key': key, 'Content-Type': 'application/octet-stream' },
    body: buf,
  });
  if (!r.ok) throw new Error(`upload failed ${r.status} ${await r.text()}`);
  const j = await r.json();
  return { token: j.upload.token, filename: basename(path), content_type: 'image/png' };
}

async function main() {
  const issue = {};
  const notes = [note, tc && !note.includes(tc) ? `(TC ${tc})` : ''].filter(Boolean).join(' ');
  if (notes) issue.notes = notes;
  if (status === 'close') issue.status_id = CLOSED_ID;
  if (status === 'reopen') issue.status_id = REOPEN_ID;
  if (rootCause && env.REDMINE_ROOTCAUSE_FIELD_ID) {
    issue.custom_fields = [{ id: Number(env.REDMINE_ROOTCAUSE_FIELD_ID), value: rootCause }];
  } else if (rootCause) {
    issue.notes = [issue.notes, `Root Cause: ${rootCause}`].filter(Boolean).join('\n\n');
  }

  let attached = 0;
  if (dry) {
    console.log('DRY update:', JSON.stringify(issue), attach ? `+attach ${attach}` : '');
    console.log(id);
    return;
  }
  if (attach) {
    const up = await uploadAttachment(attach);
    issue.uploads = [up];
    attached = 1;
  }
  const r = await fetch(`${base}/issues/${id}.json`, {
    method: 'PUT', headers: jsonHeaders, body: JSON.stringify({ issue }),
  });
  if (!r.ok) { console.error('update failed', r.status, await r.text()); process.exit(1); }
  const statusLabel = status === 'close' ? 'Closed' : status === 'reopen' ? 'Reopened' : 'unchanged';
  console.log(`UPDATED #${id} (status=${statusLabel}, attached=${attached})`);
  console.log(id);
}

main().catch(e => { console.error(e); process.exit(1); });

// Create a Defect subtask under Redmine #63684, assign to user 8 (anucha.pi)
// API key passed via env RM_KEY (not stored in file). Description read from redmine-defect-desc.txt
const fs = require('fs');
const https = require('https');

const KEY = process.env.RM_KEY;
if (!KEY) { console.error('Missing RM_KEY env'); process.exit(1); }
const desc = fs.readFileSync('redmine-defect-desc.txt', 'utf8');

const payload = JSON.stringify({
  issue: {
    project_id: 23,
    tracker_id: 1,                 // Defect
    parent_issue_id: 63684,
    subject: '[CR#6][TC-CR1-011] RI Premium ไม่คำนวณแยก Layer (GIB L2/L3) — engine ยุบทุก member เข้า L1 ใช้ % เดียว (15%)',
    description: desc,
    assigned_to_id: 8,             // anucha.pi (Anucha Pimsoi)
    priority_id: 2,                // Normal
    custom_fields: [
      { id: 18, value: 'Group RI' },          // Application (required)
      { id: 12, value: 'UAT' },               // Phase (required)
      { id: 13, value: 'UAT' },               // Environment (required)
      { id: 1,  value: 'Application Defect' } // Root Cause
    ]
  }
});

const opt = {
  hostname: 'redmine.ochi.link', port: 443, path: '/issues.json', method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
    'X-Redmine-API-Key': KEY
  }
};

const req = https.request(opt, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('HTTP', res.statusCode);
    try {
      const j = JSON.parse(body);
      if (j.issue) {
        console.log('CREATED issue #' + j.issue.id);
        console.log('  subject :', j.issue.subject);
        console.log('  tracker :', j.issue.tracker && j.issue.tracker.name);
        console.log('  parent  :', j.issue.parent && j.issue.parent.id);
        console.log('  assigned:', j.issue.assigned_to && j.issue.assigned_to.name);
        console.log('  status  :', j.issue.status && j.issue.status.name);
        console.log('  url     : https://redmine.ochi.link/issues/' + j.issue.id);
      } else {
        console.log('RESPONSE:', body);
      }
    } catch (e) { console.log('RAW:', body); }
  });
});
req.on('error', e => { console.error('REQ ERROR:', e.message); process.exit(1); });
req.write(payload);
req.end();

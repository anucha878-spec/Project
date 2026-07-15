// Add a journal note to Redmine #75852. API key via env RM_KEY (not stored in file).
// Note text read from redmine-note-75852.txt
const fs = require('fs');
const https = require('https');

const KEY = process.env.RM_KEY;
if (!KEY) { console.error('Missing RM_KEY env'); process.exit(1); }
const notes = fs.readFileSync('redmine-note-75852.txt', 'utf8');

const payload = JSON.stringify({ issue: { notes } });

const opt = {
  hostname: 'redmine.ochi.link', port: 443, path: '/issues/75852.json', method: 'PUT',
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
    // Redmine PUT returns 204 No Content on success
    if (res.statusCode === 204) console.log('OK — note added to #75852');
    else console.log('RESPONSE:', body.slice(0, 800));
  });
});
req.on('error', e => { console.error('REQ ERROR:', e.message); process.exit(1); });
req.write(payload);
req.end();

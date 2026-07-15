// GET full detail of multiple issues (ids from argv). Auth via env RM_USER+RM_PASS or RM_KEY. Not stored.
const https = require('https');
const KEY = process.env.RM_KEY;
const USER = process.env.RM_USER, PASS = process.env.RM_PASS;
if (!KEY && !(USER && PASS)) { console.error('Missing RM_KEY or RM_USER+RM_PASS env'); process.exit(1); }
const authHeaders = KEY
  ? { 'X-Redmine-API-Key': KEY }
  : { 'Authorization': 'Basic ' + Buffer.from(USER + ':' + PASS).toString('base64') };

function get(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname:'redmine.ochi.link', port:443, path, method:'GET',
      headers: authHeaders }, res => {
      let b=''; res.on('data',d=>b+=d); res.on('end',()=>resolve({code:res.statusCode, body:b}));
    });
    req.on('error', reject); req.end();
  });
}

(async () => {
  const ids = process.argv.slice(2);
  for (const id of ids) {
    const r = await get('/issues/'+id+'.json?include=journals,children');
    console.log('\n==================== #'+id+' (HTTP '+r.code+') ====================');
    if (r.code !== 200) { console.log(r.body.slice(0,400)); continue; }
    const j = JSON.parse(r.body).issue;
    console.log('subject :', j.subject);
    console.log('tracker :', j.tracker && j.tracker.name, '| status:', j.status && j.status.name, '| done:', j.done_ratio+'%');
    console.log('parent  :', j.parent && j.parent.id);
    console.log('children:', JSON.stringify((j.children||[]).map(c=>c.id)));
    console.log('--- DESCRIPTION ---');
    console.log(j.description || '(none)');
    const notes = (j.journals||[]).filter(x=>x.notes && x.notes.trim());
    if (notes.length) {
      console.log('--- NOTES ('+notes.length+') ---');
      notes.forEach(x=>console.log(`[${x.created_on}] ${x.user&&x.user.name}: ${x.notes}`));
    }
  }
})().catch(e=>{ console.error('ERR:', e.message); process.exit(1); });

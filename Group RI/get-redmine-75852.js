// GET current state of #75852 (+ #63684 parent). API key via env RM_KEY (not stored).
const https = require('https');
const KEY = process.env.RM_KEY;
if (!KEY) { console.error('Missing RM_KEY env'); process.exit(1); }

function get(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname:'redmine.ochi.link', port:443, path, method:'GET',
      headers:{ 'X-Redmine-API-Key': KEY } }, res => {
      let b=''; res.on('data',d=>b+=d); res.on('end',()=>resolve({code:res.statusCode, body:b}));
    });
    req.on('error', reject); req.end();
  });
}

(async () => {
  const r = await get('/issues/75852.json?include=journals,relations');
  console.log('HTTP', r.code);
  if (r.code !== 200) { console.log(r.body.slice(0,500)); return; }
  const j = JSON.parse(r.body).issue;
  console.log('subject :', j.subject);
  console.log('status  :', j.status && j.status.name);
  console.log('assigned:', j.assigned_to && j.assigned_to.name);
  console.log('parent  :', j.parent && j.parent.id);
  console.log('done %  :', j.done_ratio);
  console.log('updated :', j.updated_on);
  console.log('relations:', JSON.stringify(j.relations||[]));
  const js = j.journals||[];
  console.log('journal notes count:', js.filter(x=>x.notes && x.notes.trim()).length);
  js.filter(x=>x.notes && x.notes.trim()).slice(-3).forEach(x=>{
    console.log(`  - [${x.created_on}] ${x.user && x.user.name}: ${x.notes.slice(0,160).replace(/\n/g,' ')}`);
  });
})().catch(e=>{ console.error('ERR:', e.message); process.exit(1); });

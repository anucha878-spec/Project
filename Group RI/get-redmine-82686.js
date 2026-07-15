// GET full detail of #82686. Auth via env: RM_KEY, or RM_USER+RM_PASS (basic auth). Not stored.
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
  const r = await get('/issues/82686.json?include=journals,relations,children,attachments');
  console.log('HTTP', r.code);
  if (r.code !== 200) { console.log(r.body.slice(0,800)); return; }
  const j = JSON.parse(r.body).issue;
  console.log('id      :', j.id);
  console.log('subject :', j.subject);
  console.log('tracker :', j.tracker && j.tracker.name);
  console.log('status  :', j.status && j.status.name);
  console.log('priority:', j.priority && j.priority.name);
  console.log('author  :', j.author && j.author.name);
  console.log('assigned:', j.assigned_to && j.assigned_to.name);
  console.log('project :', j.project && (j.project.id+' '+j.project.name));
  console.log('parent  :', j.parent && j.parent.id);
  console.log('done %  :', j.done_ratio);
  console.log('created :', j.created_on);
  console.log('updated :', j.updated_on);
  console.log('cfields :', JSON.stringify((j.custom_fields||[]).map(c=>({[c.name]:c.value}))));
  console.log('relations:', JSON.stringify(j.relations||[]));
  console.log('children :', JSON.stringify((j.children||[]).map(c=>({id:c.id,subject:c.subject}))));
  console.log('--- DESCRIPTION ---');
  console.log(j.description || '(none)');
  const js = j.journals||[];
  const notes = js.filter(x=>x.notes && x.notes.trim());
  console.log('--- JOURNAL NOTES ('+notes.length+') ---');
  notes.forEach(x=>{
    console.log(`\n[${x.created_on}] ${x.user && x.user.name}:`);
    console.log(x.notes);
  });
})().catch(e=>{ console.error('ERR:', e.message); process.exit(1); });

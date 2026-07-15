const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:8000 };

const tables = [
  'tx_rig_landing_policy','tx_rig_landing_company','tx_rig_landing_certificate_cust',
  'tx_rig_landing_claimdeath','tx_rig_landing_claimtpd','tx_rig_landing_claimhealth',
  'tx_rig_landing_cert_inforce','tx_rig_landing_certnewbusiness','tx_rig_landing_certalteration',
  'tx_rig_landing_exprefund','tx_rig_landing_nature_business','tx_rig_landing_unname_policy',
  'tx_rig_landing_investigation_expense','ms_rig_process','tx_rig_process_hd','lg_tracking_process'
];

(async()=>{
  const c=new Client(cfg); await c.connect();
  try{
    for (const t of tables){
      const cols = await c.query(`
        SELECT column_name, data_type, character_maximum_length, is_nullable
        FROM information_schema.columns
        WHERE table_schema='public' AND table_name=$1
        ORDER BY ordinal_position`,[t]);
      if (cols.rows.length===0){ console.log(`\n## ${t}: NOT FOUND`); continue; }
      console.log(`\n## ${t}`);
      cols.rows.forEach(r=>console.log(`  ${r.column_name} : ${r.data_type}${r.character_maximum_length?'('+r.character_maximum_length+')':''} ${r.is_nullable==='NO'?'NOT NULL':''}`));
    }
  } finally { await c.end(); }
})().catch(e=>{console.error(e.message);process.exit(1)});

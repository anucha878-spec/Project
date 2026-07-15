// Read-only schema introspection for TC-CR1-010..019 data-setup (policy GL5505)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };

const TABLES = [
  'tx_est_snap_policy','tx_act_snap_policy',
  'tx_rig_act_hd','tx_rig_act_policy_hd','tx_rig_act_policy_layer','tx_rig_act_pol_mem',
  'tx_rig_act_claim_mem','tx_rig_act_bdr_claim_mem','tx_rig_act_bdr_new_renew',
  'tx_stg_est_inforce_member','tx_stg_act_inforce_member',
  'tx_stg_est_all_policy','tx_stg_act_all_policy',
  'tx_est_snap_company','tx_rig_nature_business',
  'tx_stg_est_prem_layer','tx_stg_act_prem_layer',
  'tx_act_snap_cert_inforce','tx_est_snap_cert_inforce'
];

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) does GL5505 exist anywhere relevant?
    console.log('=== GL5505 existence check ===');
    for (const t of ['tx_est_snap_policy','tx_act_snap_policy','tx_stg_est_all_policy','tx_stg_act_all_policy']) {
      try {
        const r = await c.query(`SELECT COUNT(*)::int n FROM ${t} WHERE policy_no='GL5505'`);
        console.log(`  ${t}: ${r.rows[0].n}`);
      } catch(e){ console.log(`  ${t}: ERR ${e.message}`); }
    }

    // 2) column lists + types
    for (const t of TABLES) {
      const r = await c.query(`
        SELECT column_name, data_type, is_nullable, character_maximum_length, numeric_precision, numeric_scale, column_default
        FROM information_schema.columns
        WHERE table_schema='public' AND table_name=$1
        ORDER BY ordinal_position`, [t]);
      console.log(`\n===== ${t} (${r.rows.length} cols) =====`);
      r.rows.forEach(col => {
        let typ = col.data_type;
        if (col.character_maximum_length) typ += `(${col.character_maximum_length})`;
        else if (col.numeric_precision) typ += `(${col.numeric_precision},${col.numeric_scale})`;
        console.log(`  ${col.column_name} :: ${typ} ${col.is_nullable==='NO'?'NOT NULL':''} ${col.column_default?('DEFAULT '+col.column_default):''}`.trimEnd());
      });
    }

    // 3) sequences for PK columns
    console.log('\n===== sequences =====');
    const seqs = await c.query(`SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema='public' AND sequence_name ILIKE '%act_policy%' OR sequence_name ILIKE '%pol_mem%' OR sequence_name ILIKE '%snap_policy%' OR sequence_name ILIKE '%inforce%' OR sequence_name ILIKE '%prem_layer%' OR sequence_name ILIKE '%claim_mem%' OR sequence_name ILIKE '%cert_inforce%' ORDER BY sequence_name`);
    seqs.rows.forEach(s => console.log('  '+s.sequence_name));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

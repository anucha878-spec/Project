// สำรวจ context ของ GH4634 ใน 3 layers + ตารางอ้างอิง
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) ดู landing rows ของ GH4634 (เอาแค่ distinct policy_year/doc_no)
  console.log('=== 1. GH4634 landing exprefund — distinct policy_year × doc_no ===');
  const r1 = await c.query(`
    SELECT policy_year, doc_no, MIN(doc_date) AS doc_date, MIN(at_date) AS at_date,
           MIN(period_begin_date) AS period_begin_date, MIN(period_end_date) AS period_end_date,
           MAX(premium_all) AS premium_all, MAX(claim_all) AS claim_all,
           MAX(claim_reserve) AS claim_reserve, MAX(claim_reserve_percent) AS claim_reserve_percent,
           MAX(last_year_claim_reserve) AS last_year_claim_reserve,
           MAX(total_claim) AS total_claim, MAX(total_amt_percent) AS total_amt_percent,
           MAX(adj_claim) AS adj_claim, MAX(net_amt) AS net_amt,
           MAX(exp_refund_g_percent) AS exp_refund_g_percent, MAX(exp_refund_g) AS exp_refund_g,
           MAX(exp_refund) AS exp_refund, MAX(premium) AS premium,
           COUNT(*) AS rd_rows,
           STRING_AGG(DISTINCT rd_type, ',' ORDER BY rd_type) AS rd_types,
           MAX(rig_process_hd_id) AS rig_process_hd_id, MAX(period) AS period,
           MAX(company_code_head) AS company_code_head, MAX(company_name_head) AS company_name_head,
           MAX(beneficiary_companycode) AS beneficiary_companycode, MAX(type) AS type
    FROM tx_rig_landing_exprefund
    WHERE policy_no='GH4634'
    GROUP BY policy_year, doc_no
    ORDER BY policy_year, doc_no`);
  r1.rows.forEach(r => {
    console.log(`  py=${r.policy_year} doc=${r.doc_no} period=${r.period} hd_id=${r.rig_process_hd_id}`);
    console.log(`     premium_all=${r.premium_all} claim_all=${r.claim_all} claim_reserve=${r.claim_reserve}(${r.claim_reserve_percent}%) last_yr_cr=${r.last_year_claim_reserve}`);
    console.log(`     total_claim=${r.total_claim} total_amt_pct=${r.total_amt_percent}% adj_claim=${r.adj_claim} net_amt=${r.net_amt}`);
    console.log(`     exp_refund_g_pct=${r.exp_refund_g_percent}% exp_refund_g=${r.exp_refund_g} exp_refund=${r.exp_refund} premium=${r.premium}`);
    console.log(`     rd_types=[${r.rd_types}] rd_rows=${r.rd_rows} type=${r.type}`);
    console.log(`     company_head=${r.company_code_head} (${r.company_name_head}) beneficiary=${r.beneficiary_companycode}`);
    console.log('');
  });

  // 2) ดูค่าใน staging GH4634
  console.log('=== 2. GH4634 staging row ===');
  const r2 = await c.query(`SELECT * FROM tx_stg_act_exp_refund WHERE policy_no='GH4634'`);
  r2.rows.forEach(r => Object.entries(r).forEach(([k,v]) => console.log(`  ${k} = ${v}`)));

  // 3) sample claim/sumin ของ GH4634 จาก policy table — ดู coverage breakdown
  console.log('\n=== 3. GH4634 in tx_act_snap_policy (coverage info) ===');
  try {
    const r3 = await c.query(`
      SELECT policy_no, treaty_code, sum_insur_life, sum_insur_acc, sum_insur_med, sum_insur_tpd,
             premium_life, premium_acc, premium_med, premium_tpd,
             rate_flag, life_prem_rate, acc_prem_rate
      FROM tx_act_snap_policy WHERE policy_no='GH4634' LIMIT 3`);
    if (r3.rowCount === 0) console.log('  (no row)');
    else r3.rows.forEach(r => Object.entries(r).forEach(([k,v]) => console.log(`  ${k} = ${v}`)));
  } catch(e) { console.log('  err: '+e.message); }

  // 4) ดู active process_hd
  console.log('\n=== 4. Active rig_process_hd รอบใหม่ ===');
  try {
    const r4 = await c.query(`
      SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name ILIKE '%process_hd%' ORDER BY 1`);
    r4.rows.forEach(r => console.log(`  ${r.table_name}`));
    const ph = await c.query(`SELECT * FROM tx_rig_process_hd ORDER BY rig_process_hd_id DESC LIMIT 3`);
    console.log('  Latest tx_rig_process_hd:');
    ph.rows.forEach(r => console.log('    '+JSON.stringify(r)));
  } catch(e) { console.log('  err: '+e.message); }

  // 5) ดู PK / SEQUENCE ของ landing/snap/stg
  console.log('\n=== 5. PK & SEQUENCE ===');
  for (const t of ['tx_rig_landing_exprefund','tx_act_snap_exprefund','tx_stg_act_exp_refund']) {
    const pk = await c.query(`
      SELECT a.attname AS column_name, format_type(a.atttypid, a.atttypmod) AS data_type, pg_get_serial_sequence('public.'||$1, a.attname) AS seq
      FROM pg_index i JOIN pg_attribute a ON a.attrelid=i.indrelid AND a.attnum = ANY(i.indkey)
      WHERE i.indrelid = ('public.'||$1)::regclass AND i.indisprimary`, [t]);
    console.log(`  ${t}:`);
    pk.rows.forEach(r => console.log(`    PK: ${r.column_name} (${r.data_type}) seq=${r.seq}`));
    const mx = await c.query(`SELECT MAX(${pk.rows[0].column_name}) AS mx FROM ${t}`);
    console.log(`    MAX(${pk.rows[0].column_name}) = ${mx.rows[0].mx}`);
  }

  // 6) Sample landing row with full columns เพื่อดูค่า template
  console.log('\n=== 6. GH4634 sample landing row (one full row per coverage) ===');
  const r6 = await c.query(`
    SELECT * FROM tx_rig_landing_exprefund
    WHERE policy_no='GH4634' AND policy_year=6
    ORDER BY rd_type LIMIT 6`);
  r6.rows.forEach((r,i) => {
    console.log(`  --- row ${i+1} (rd_type=${r.rd_type} ${r.rd_name}) ---`);
    Object.entries(r).forEach(([k,v]) => console.log(`    ${k} = ${v}`));
  });

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

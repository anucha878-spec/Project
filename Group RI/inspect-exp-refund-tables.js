// หา column exp_refund (และ variants) ในทุก table — รายงานพร้อมระดับ Layer
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) ทุก column ที่ชื่อมี exp_refund / refund / exprefund
  console.log('=== 1. ทุก column ที่เกี่ยวข้องกับ exp_refund ===');
  const r = await c.query(`
    SELECT table_name, column_name, data_type
    FROM information_schema.columns
    WHERE table_schema='public'
      AND (column_name ILIKE '%exp_refund%' OR column_name ILIKE '%exprefund%' OR column_name ILIKE '%experience_refund%')
    ORDER BY table_name, ordinal_position`);

  // กลุ่มตาม table prefix → ดู layer
  const byLayer = {};
  r.rows.forEach(x => {
    let layer = 'OTHER';
    if (x.table_name.startsWith('tx_rig_landing')) layer = '1. LANDING';
    else if (x.table_name.startsWith('tx_act_snap')) layer = '2. ACT SNAPSHOT';
    else if (x.table_name.startsWith('tx_est_snap')) layer = '2. EST SNAPSHOT';
    else if (x.table_name.startsWith('tx_stg_act')) layer = '3. STAGING ACT';
    else if (x.table_name.startsWith('tx_stg_est')) layer = '3. STAGING EST';
    else if (x.table_name.startsWith('tx_rig_act_bdr') || x.table_name.startsWith('tx_rig_act')) layer = '4. BDR/REPORT';
    else if (x.table_name.startsWith('cf_')) layer = 'CONFIG';
    byLayer[layer] ??= [];
    byLayer[layer].push(x);
  });

  Object.keys(byLayer).sort().forEach(layer => {
    console.log(`\n  --- ${layer} ---`);
    byLayer[layer].forEach(x => console.log(`    ${x.table_name}.${x.column_name} (${x.data_type})`));
  });

  // 2) เช็คว่า column ใดมีค่า populated (non-zero/non-null) ใน DB จริง
  console.log('\n\n=== 2. column ที่มีค่า populated (non-zero, non-null) ใน data ปัจจุบัน ===');
  for (const row of r.rows) {
    const t = row.table_name, col = row.column_name;
    if (row.data_type !== 'numeric') continue;
    try {
      const q = await c.query(`SELECT COUNT(*) AS total, COUNT(*) FILTER (WHERE ${col} <> 0) AS non_zero FROM ${t}`);
      const total = +q.rows[0].total, nz = +q.rows[0].non_zero;
      if (total > 0) {
        const flag = nz > 0 ? '✅ populated' : '⚪ all zero';
        console.log(`  ${flag}  ${t}.${col}   (${nz}/${total} rows)`);
      }
    } catch(e) {}
  }

  // 3) ดูค่า exp_refund ในแต่ละ layer สำหรับ policy ที่มีค่าจริง
  console.log('\n=== 3. ตัวอย่าง exp_refund > 0 ใน DB (Actual flow) ===');

  // 3.1 staging
  console.log('\n--- tx_stg_act_exp_refund.exp_refund ---');
  const stg = await c.query(`
    SELECT policy_no, policy_year, period, total_premium, claim,
           exp_refund_previous_year AS loss_carried_fwd,
           percent_exp_refund, percent_expense,
           exp_refund, claim_life, claim_add, claim_dismem
    FROM tx_stg_act_exp_refund
    WHERE exp_refund IS NOT NULL AND exp_refund <> 0
    ORDER BY exp_refund DESC`);
  stg.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.policy_year} period=${r.period} → exp_refund=${r.exp_refund} (prem=${r.total_premium} claim=${r.claim} LCF=${r.loss_carried_fwd})`));

  // 3.2 snap
  console.log('\n--- tx_act_snap_exprefund.exp_refund (per coverage rd_type) ---');
  const snap = await c.query(`
    SELECT policy_no, policy_year, period, doc_no, rd_type, rd_name, premium, exp_refund, exp_refund_dt, exp_refund_g
    FROM tx_act_snap_exprefund
    WHERE exp_refund IS NOT NULL AND exp_refund <> 0
    ORDER BY exp_refund DESC LIMIT 20`);
  if (snap.rowCount === 0) console.log('  (no row has exp_refund <> 0 — ค่ายังไม่ถูก populate ที่ snap layer)');
  else snap.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.policy_year} ${r.doc_no} rd=${r.rd_type} prem=${r.premium} exp_refund=${r.exp_refund}`));

  // 3.3 landing
  console.log('\n--- tx_rig_landing_exprefund.exp_refund (per coverage rd_type) ---');
  const lnd = await c.query(`
    SELECT policy_no, policy_year, period, doc_no, rd_type, rd_name, premium, exp_refund, exp_refund_dt, exp_refund_g
    FROM tx_rig_landing_exprefund
    WHERE exp_refund IS NOT NULL AND exp_refund <> 0
    ORDER BY exp_refund DESC LIMIT 20`);
  if (lnd.rowCount === 0) console.log('  (no row has exp_refund <> 0 — landing เก็บค่าจาก source แต่ยังไม่มี populated)');
  else lnd.rows.forEach(r => console.log(`  ${r.policy_no} py=${r.policy_year} ${r.doc_no} rd=${r.rd_type} prem=${r.premium} exp_refund=${r.exp_refund}`));

  // 4) ดู BDR table — มี exp_refund ในนั้นด้วยหรือไม่
  console.log('\n=== 4. BDR / Report tables ที่เก็บ exp_refund ===');
  const bdr = await c.query(`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema='public' AND (table_name ILIKE '%bdr%' OR table_name ILIKE '%report%')
    ORDER BY 1`);
  for (const t of bdr.rows.map(x => x.table_name)) {
    const cols = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 AND (column_name ILIKE '%refund%' OR column_name ILIKE '%exp%')`, [t]);
    if (cols.rowCount > 0) {
      console.log(`  ${t}: ${cols.rows.map(x => x.column_name).join(', ')}`);
    }
  }

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

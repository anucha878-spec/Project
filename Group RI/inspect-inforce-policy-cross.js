// เข้าใจว่าทำไม TC-CR1-021 cross-check tx_stg_act_exp_refund ↔ tx_stg_act_inforce_policy
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  // 1) Schema ของ tx_stg_act_inforce_policy
  console.log('=== 1. tx_stg_act_inforce_policy — columns ===');
  const cols = await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_stg_act_inforce_policy' ORDER BY ordinal_position`);
  cols.rows.forEach(r => console.log(`  ${r.column_name} (${r.data_type})`));

  // 2) Sample row
  console.log('\n=== 2. Sample row ===');
  const s = await c.query(`SELECT * FROM tx_stg_act_inforce_policy LIMIT 1`);
  if (s.rowCount > 0) Object.entries(s.rows[0]).forEach(([k,v]) => console.log(`  ${k} = ${v}`));

  // 3) Statistics
  console.log('\n=== 3. Statistics ===');
  const stats = await c.query(`
    SELECT COUNT(*) AS total_rows,
           COUNT(DISTINCT policy_no) AS distinct_policies,
           COUNT(DISTINCT period_date) AS distinct_periods,
           MIN(period_date) AS min_period, MAX(period_date) AS max_period,
           COUNT(*) FILTER(WHERE status IS NOT NULL) AS has_status
    FROM tx_stg_act_inforce_policy`);
  Object.entries(stats.rows[0]).forEach(([k,v]) => console.log(`  ${k} = ${v}`));

  // 4) Cross-check ปัจจุบัน: exp_refund 5 policies ใน inforce_policy ไหม
  console.log('\n=== 4. Cross-check policies ของ exp_refund ใน inforce_policy ===');
  const cc = await c.query(`
    SELECT er.policy_no, er.policy_year AS er_py, er.period AS er_period, er.exp_refund,
           ip.policy_no IS NOT NULL AS exists_in_inforce,
           ip.policy_year AS ip_py, ip.period_date AS ip_period_date,
           ip.no_member_life, ip.sum_insured_life
    FROM tx_stg_act_exp_refund er
    LEFT JOIN tx_stg_act_inforce_policy ip
      ON ip.policy_no = er.policy_no AND ip.policy_year = er.policy_year
    ORDER BY er.policy_no`);
  cc.rows.forEach(r => console.log(`  ${r.policy_no} er.period=${r.er_period} er.py=${r.er_py} exp_refund=${r.exp_refund} → inforce? ${r.exists_in_inforce ? '✅' : '❌'} ip.py=${r.ip_py} mem_life=${r.no_member_life} si_life=${r.sum_insured_life}`));

  // 5) Search for any view or function ที่ implement validation
  console.log('\n=== 5. Search สำหรับ view/function ที่ทำ cross-check exp_refund vs inforce ===');
  try {
    const vw = await c.query(`SELECT table_name FROM information_schema.views WHERE table_schema='public' AND (table_name ILIKE '%exp_refund%' OR table_name ILIKE '%inforce%') ORDER BY 1`);
    vw.rows.forEach(r => console.log(`  view: ${r.table_name}`));
  } catch(e) {}

  // 6) ดู column ที่อาจเก็บ "validation status" ใน exp_refund
  console.log('\n=== 6. Field ใน tx_stg_act_exp_refund ที่บ่งบอก validation ===');
  const erc = await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_stg_act_exp_refund' ORDER BY ordinal_position`);
  erc.rows.forEach(r => console.log(`  ${r.column_name}`));

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

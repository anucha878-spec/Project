// Find which landing row is selected as the "Loss carried fwd" source
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();

  console.log('=== ดูว่า staging เลือก row ไหนจาก landing.adj_claim มาเป็น Loss carried fwd ===\n');

  const r = await c.query(`
    SELECT stg.policy_no, lnd.doc_no, lnd.lot_no, lnd.lot_no_all, lnd.type, lnd.rd_type, lnd.rd_name,
           lnd.policy_year, lnd.period_begin_date, lnd.period_end_date,
           ROUND(lnd.adj_claim, 2) AS lnd_adj_claim,
           stg.exp_refund_previous_year AS stg_val,
           CASE WHEN ROUND(lnd.adj_claim, 2) = stg.exp_refund_previous_year THEN '✅' ELSE ' ' END AS hit
    FROM tx_stg_act_exp_refund stg
    JOIN tx_rig_landing_exprefund lnd ON lnd.policy_no = stg.policy_no AND lnd.period = stg.period
    WHERE stg.exp_refund_previous_year <> 0
    GROUP BY stg.policy_no, lnd.doc_no, lnd.lot_no, lnd.lot_no_all, lnd.type, lnd.rd_type, lnd.rd_name,
             lnd.policy_year, lnd.period_begin_date, lnd.period_end_date, lnd.adj_claim, stg.exp_refund_previous_year
    ORDER BY stg.policy_no, lnd.doc_no, lnd.lot_no
    LIMIT 50`);

  let cur = '';
  r.rows.forEach(row => {
    if (row.policy_no !== cur) { console.log(`\n--- ${row.policy_no} (stg.exp_refund_previous_year = ${row.stg_val}) ---`); cur = row.policy_no; }
    console.log(`  ${row.hit}  doc=${row.doc_no} lot=${row.lot_no} lot_all=${row.lot_no_all} type=${row.type} rd=${row.rd_type}(${row.rd_name}) py=${row.policy_year} adj_claim=${row.lnd_adj_claim}`);
  });

  await c.end();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });

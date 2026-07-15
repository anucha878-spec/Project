// ============================================================================
// BACKFILL NULL columns — TC-CR1-010..018 ที่ COMMIT ไปแล้วบน live
//   companion ของ backfill-nulls-tc-cr1-010-018.sql
//   target: created_by='QA_TC_CR1_010_018' (8 cert + 1 claimtpd)
// DEFAULT: DRY_RUN=true (BEGIN/ROLLBACK). ตั้ง false เพื่อ COMMIT จริง.
// ไม่แตะ: end_date/approved_date/pol_end_date (cert), tpd_prod_code (claimtpd)
// ============================================================================
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };

const DRY_RUN = true;                 // <<< true = ROLLBACK, false = COMMIT  (committed to live 2026-05-26)
const TAG     = 'QA_TC_CR1_010_018';
const J = x => JSON.stringify(x, null, 1);

const CERT_SQL = `
UPDATE tx_rig_landing_cert_inforce t SET
  cust_code = '25680' || t.cer_no,
  change_date = DATE '2026-04-01', period_date = TIMESTAMP '2026-04-01 00:00:00', tax_year = 2026,
  med_rate = '', count_of_day = 0, status = 0, lot_no = 1,
  cremat_insur = 0, life_e1_rate = 0, life_e1_prem = 0, cremat_prem = 0,
  ipd_prem = 0, opd_prem = 0, major_plan_prem = 0, dental_prem = 0, mather_prem = 0, hb_prem = 0, opd_lab_prem = 0.00,
  sum_life_prem = s.sl, sum_acc_prem = s.sa, sum_tpd_prem = 0, sum_total_prem = s.st,
  sum_life_e1_prem = 0, sum_cremat_prem = 0, sum_med_acc_prem = 0, sum_ipd_prem = 0, sum_opd_prem = 0,
  sum_major_plan_prem = 0, sum_dental_prem = 0, sum_mather_prem = 0, sum_hb_prem = 0, sum_opd_lab_prem = 0.00
FROM (
  SELECT SUM(life_prem) sl, SUM(acc_prem) sa, SUM(life_prem + acc_prem + tpd_prem) st
  FROM tx_rig_landing_cert_inforce WHERE created_by = $1
) s
WHERE t.created_by = $1`;

const TPD_SQL = `
UPDATE tx_rig_landing_claimtpd SET
  policy_code = 1, prod_claim_code = '140400', loss_ratio = 1.0000,
  receive_no = '25680018', receive_date = DATE '2025-08-20'
WHERE created_by = $1`;

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log(`Connected. BACKFILL NULLs for ${TAG}  DRY_RUN=${DRY_RUN}\n`);
  try {
    await c.query('BEGIN');
    const r1 = await c.query(CERT_SQL, [TAG]);
    console.log('cert_inforce UPDATE rowCount =', r1.rowCount);
    const r2 = await c.query(TPD_SQL, [TAG]);
    console.log('claimtpd     UPDATE rowCount =', r2.rowCount);

    console.log('\n--- cert after backfill ---');
    console.log(J((await c.query(`
      SELECT cer_no, cust_code, tax_year, lot_no, status, med_rate,
             change_date::date change_date, period_date,
             sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
             (sum_total_prem = sum_life_prem + sum_acc_prem + sum_tpd_prem) sum_ok,
             end_date, approved_date, pol_end_date
      FROM tx_rig_landing_cert_inforce WHERE created_by = $1 ORDER BY cer_no`, [TAG])).rows));

    console.log('\n--- claimtpd after backfill ---');
    console.log(J((await c.query(`
      SELECT certific_cust_no, policy_code, prod_claim_code, tpd_prod_code,
             loss_ratio, receive_no, receive_date::date receive_date
      FROM tx_rig_landing_claimtpd WHERE created_by = $1`, [TAG])).rows));

    if (DRY_RUN) { await c.query('ROLLBACK'); console.log('\n✅ UPDATE OK — ROLLED BACK (dry-run).\n   → commit จริง: ตั้ง DRY_RUN=false'); }
    else { await c.query('COMMIT'); console.log('\n✅ COMMITTED. backfilled NULLs for ' + TAG); }
  } catch (e) {
    await c.query('ROLLBACK').catch(()=>{});
    console.error('\n❌ ERROR:', e.message); process.exit(1);
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

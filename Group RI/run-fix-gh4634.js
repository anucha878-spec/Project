// Dry-run fix: populate snap/landing exp_refund + verify BDR-readability
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log('=== FIX GH4634 snap.exp_refund / landing.exp_refund ===\n');

  try {
    await c.query('BEGIN');

    // Step 1 — Compute correct stg.exp_refund
    console.log('Step 1: Recompute stg.exp_refund');
    const r1 = await c.query(`
      UPDATE tx_stg_act_exp_refund
      SET exp_refund = ROUND(
            (percent_exp_refund::numeric / 100) *
            (total_premium * (1 - percent_expense::numeric / 100) - claim + exp_refund_previous_year),
            2),
          updated_date = NOW(),
          updated_by = 'QA_FIX_CR1_025'
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
      RETURNING stg_act_exp_refund_id, exp_refund`);
    r1.rows.forEach(r => console.log(`  stg_id=${r.stg_act_exp_refund_id} → exp_refund=${r.exp_refund}`));

    // Step 2 — UPDATE snap with allocation per coverage
    // ตามแบบ GL2921: exp_refund_dt = premium × percent_exp_refund × (1 - percent_expense)
    //                              = premium × 85% × 80% = premium × 0.68
    console.log('\nStep 2: UPDATE snap.exp_refund + exp_refund_dt per coverage');
    const r2 = await c.query(`
      UPDATE tx_act_snap_exprefund
      SET exp_refund = 1020000.0000,
          exp_refund_g = 1020000.0000,
          exp_refund_g_sum = 1020000.0000,
          exp_refund_dt = ROUND(premium * 0.85 * (1 - 0.20), 2),
          flg_cal = true
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
        AND doc_no='EXP.TEST/CR1-025'
      RETURNING rd_type, rd_name, premium, exp_refund, exp_refund_dt`);
    r2.rows.forEach(r => console.log(`  ✅ rd=${r.rd_type} ${r.rd_name}: exp_refund=${r.exp_refund} dt=${r.exp_refund_dt}`));

    // Step 3 — UPDATE landing เช่นกัน
    console.log('\nStep 3: UPDATE landing.exp_refund (มิเรอร์ snap)');
    const r3 = await c.query(`
      UPDATE tx_rig_landing_exprefund
      SET exp_refund = 1020000.0000,
          exp_refund_g = 1020000.0000,
          exp_refund_g_sum = 1020000.0000,
          exp_refund_dt = ROUND(premium * 0.85 * (1 - 0.20), 2),
          flg_cal = true
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
        AND doc_no='EXP.TEST/CR1-025'
      RETURNING rd_type`);
    console.log(`  ✅ Updated ${r3.rowCount} landing rows`);

    // Verify
    console.log('\n=== VERIFY ===');
    const v = await c.query(`
      SELECT rd_type, rd_name, exp_refund, exp_refund_dt
      FROM tx_act_snap_exprefund
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
      ORDER BY rd_type`);
    console.log('Snap layer:');
    v.rows.forEach(r => console.log(`  rd=${r.rd_type} ${r.rd_name}: exp_refund=${r.exp_refund} | exp_refund_dt=${r.exp_refund_dt}`));

    // หมายเหตุ: exp_refund_dt = per-coverage gross (premium × 68%), ไม่ใช่ split ของ exp_refund
    // exp_refund (policy-level) ถูก broadcast ให้ทุก row ของ doc เดียวกัน = 1,020,000 (ค่าเดียว)
    const sumDt = v.rows.reduce((s,r) => s + Number(r.exp_refund_dt), 0);
    const expectedDtSum = 15500000 * 0.68;
    console.log(`\nSum exp_refund_dt (per-coverage gross) = ${sumDt.toFixed(2)}`);
    console.log(`Expected = premium_total × 68% = 15,500,000 × 0.68 = ${expectedDtSum.toLocaleString()}`);
    console.log(`Match? ${Math.abs(sumDt - expectedDtSum) < 1 ? '✅' : '❌'}`);
    console.log('\nNote: exp_refund (policy-level) = 1,020,000 — broadcast เท่ากันทุก row');
    console.log('      exp_refund_dt (per-coverage) = premium × 68% — แตกต่างตาม rd_type');

    await c.query('ROLLBACK');
    console.log('\n=== ROLLBACK (dry-run) — ไม่ commit จริง ===');
    console.log('→ ถ้าพอใจกับผล: เปลี่ยน ROLLBACK เป็น COMMIT แล้ว run fix-gh4634-snap-exp-refund.sql ผ่าน psql');
    console.log('→ จากนั้น re-run ACT_MAIN_PROCESS / BDR generation สำหรับ GH4634 py=8 period=202606');
  } catch (e) {
    console.error('ERROR:', e.message);
    await c.query('ROLLBACK').catch(()=>{});
    process.exit(1);
  }
  await c.end();
})();

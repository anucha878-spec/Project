// Dry-run: เปลี่ยน period ของ test data → 202605 + verify
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log('=== Fix: เปลี่ยน period 202606 → 202605 ให้ตรง active act_hd=618 ===\n');

  try {
    await c.query('BEGIN');

    // Before
    console.log('Before fix:');
    const before = await c.query(`
      SELECT 'snap' AS layer, COUNT(*) AS rows, MIN(period) AS period, MIN(rig_process_hd_id) AS hd, MAX(exp_refund) AS exp_refund FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8 UNION ALL
      SELECT 'landing', COUNT(*), MIN(period), MIN(rig_process_hd_id), MAX(exp_refund) FROM tx_rig_landing_exprefund WHERE policy_no='GH4634' AND policy_year=8 UNION ALL
      SELECT 'staging', COUNT(*), MIN(period), MIN(rig_process_hd_id), MAX(exp_refund) FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' AND policy_year=8`);
    before.rows.forEach(r => console.log(`  ${r.layer}: ${r.rows} rows | period=${r.period} | hd=${r.hd} | exp_refund=${r.exp_refund}`));

    // Step 1-3: UPDATE period
    console.log('\nStep 1-3: UPDATE period 202606 → 202605');
    const r1 = await c.query(`UPDATE tx_act_snap_exprefund SET period=202605 WHERE policy_no='GH4634' AND policy_year=8 AND period=202606 AND doc_no='EXP.TEST/CR1-025'`);
    console.log(`  ✅ snap: ${r1.rowCount} rows updated`);
    const r2 = await c.query(`UPDATE tx_rig_landing_exprefund SET period=202605 WHERE policy_no='GH4634' AND policy_year=8 AND period=202606 AND doc_no='EXP.TEST/CR1-025'`);
    console.log(`  ✅ landing: ${r2.rowCount} rows updated`);
    const r3 = await c.query(`UPDATE tx_stg_act_exp_refund SET period=202605 WHERE policy_no='GH4634' AND policy_year=8 AND period=202606`);
    console.log(`  ✅ staging: ${r3.rowCount} rows updated`);

    // Step 4: เปลี่ยน rig_process_hd_id → 14086 (active ACT_MAIN ของ act_hd=618)
    console.log('\nStep 4: เปลี่ยน rig_process_hd_id 14053 → 14086 (active ACT_MAIN)');
    const r4a = await c.query(`UPDATE tx_act_snap_exprefund SET rig_process_hd_id=14086 WHERE policy_no='GH4634' AND policy_year=8 AND period=202605 AND doc_no='EXP.TEST/CR1-025' AND rig_process_hd_id=14053`);
    console.log(`  ✅ snap: ${r4a.rowCount} rows`);
    const r4b = await c.query(`UPDATE tx_rig_landing_exprefund SET rig_process_hd_id=14086 WHERE policy_no='GH4634' AND policy_year=8 AND period=202605 AND doc_no='EXP.TEST/CR1-025' AND rig_process_hd_id=14053`);
    console.log(`  ✅ landing: ${r4b.rowCount} rows`);
    const r4c = await c.query(`UPDATE tx_stg_act_exp_refund SET rig_process_hd_id=14086 WHERE policy_no='GH4634' AND policy_year=8 AND period=202605 AND rig_process_hd_id=14053`);
    console.log(`  ✅ staging: ${r4c.rowCount} rows`);

    // After
    console.log('\nAfter fix:');
    const after = await c.query(`
      SELECT 'snap' AS layer, COUNT(*) AS rows, MIN(period) AS period, MIN(rig_process_hd_id) AS hd, MAX(exp_refund) AS exp_refund FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8 UNION ALL
      SELECT 'landing', COUNT(*), MIN(period), MIN(rig_process_hd_id), MAX(exp_refund) FROM tx_rig_landing_exprefund WHERE policy_no='GH4634' AND policy_year=8 UNION ALL
      SELECT 'staging', COUNT(*), MIN(period), MIN(rig_process_hd_id), MAX(exp_refund) FROM tx_stg_act_exp_refund WHERE policy_no='GH4634' AND policy_year=8`);
    after.rows.forEach(r => console.log(`  ${r.layer}: ${r.rows} rows | period=${r.period} | hd=${r.hd} | exp_refund=${r.exp_refund}`));

    // ตรวจ co-exist กับของจริง (py=6, py=7) — ไม่ทับ
    console.log('\nCo-exist check: ของจริง py=6/7 ของ GH4634 ยังอยู่ที่ period=202605 ปลอดภัยไหม?');
    const co = await c.query(`SELECT policy_year, COUNT(*) AS rows FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND period=202605 GROUP BY policy_year ORDER BY policy_year`);
    co.rows.forEach(r => console.log(`  py=${r.policy_year}: ${r.rows} rows`));

    await c.query('ROLLBACK');
    console.log('\n=== ROLLBACK (dry-run) ===');
    console.log('→ ถ้า ok: เปลี่ยน ROLLBACK เป็น COMMIT แล้วรัน fix-gh4634-period-to-202605.sql ผ่าน psql');
    console.log('→ จากนั้น re-run ACT_BORDEREAU ผ่าน UI หรือ trigger BDR regenerate');
    console.log('→ BDR row GH4634 act_hd=618 จะ update: tot_ori_ex_refund_paid_life ≈ 1,020,000 × (Life ratio)');
  } catch (e) {
    console.error('ERROR:', e.message);
    await c.query('ROLLBACK').catch(()=>{});
    process.exit(1);
  }
  await c.end();
})();

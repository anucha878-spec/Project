// Dry-run: เปลี่ยน rig_process_hd_id → 14023 (Active ACT_SNAPSHOT_10)
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log('=== Fix #3: snap.rig_process_hd_id → 14023 (Active SNAPSHOT) ===\n');

  try {
    await c.query('BEGIN');

    // Before
    console.log('Before:');
    const b1 = await c.query(`SELECT DISTINCT rig_process_hd_id FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8`);
    console.log(`  snap GH4634 py=8 hd: ${b1.rows.map(r=>r.rig_process_hd_id).join(', ')}`);

    // UPDATE — รับทั้ง hd=14086 หรือ hd=14053 (เผื่อยังไม่ commit fix #2)
    console.log('\nUpdating...');
    const r1 = await c.query(`
      UPDATE tx_act_snap_exprefund SET rig_process_hd_id=14023
      WHERE policy_no='GH4634' AND policy_year=8 AND doc_no='EXP.TEST/CR1-025' AND rig_process_hd_id IN (14053, 14086)
      RETURNING rig_v_exp_id, rd_type, rig_process_hd_id`);
    console.log(`  ✅ snap: ${r1.rowCount} rows`);
    r1.rows.forEach(r => console.log(`    id=${r.rig_v_exp_id} rd=${r.rd_type} → hd=${r.rig_process_hd_id}`));

    const r2 = await c.query(`
      UPDATE tx_rig_landing_exprefund SET rig_process_hd_id=14023
      WHERE policy_no='GH4634' AND policy_year=8 AND doc_no='EXP.TEST/CR1-025' AND rig_process_hd_id IN (14053, 14086)`);
    console.log(`  ✅ landing: ${r2.rowCount} rows`);

    const r3 = await c.query(`
      UPDATE tx_stg_act_exp_refund SET rig_process_hd_id=14023
      WHERE policy_no='GH4634' AND policy_year=8 AND rig_process_hd_id IN (14053, 14086)`);
    console.log(`  ✅ staging: ${r3.rowCount} rows`);

    // After + Co-exist
    console.log('\nCo-exist ใน snap_hd=14023:');
    const co = await c.query(`
      SELECT policy_year, COUNT(*) AS rows, MIN(rd_type) AS first_rd, MAX(exp_refund) AS max_exp_refund
      FROM tx_act_snap_exprefund
      WHERE policy_no='GH4634' AND rig_process_hd_id=14023
      GROUP BY policy_year ORDER BY policy_year`);
    co.rows.forEach(r => console.log(`  py=${r.policy_year}: ${r.rows} rows, first rd=${r.first_rd}, max exp_refund=${r.max_exp_refund}`));

    // Verify: ทดสอบ JOIN แบบเดียวกับ BDR engine จะดึง snap ของเราได้แล้วหรือยัง
    console.log('\nSimulate BDR JOIN — snap rows ที่จะถูก BDR เลือกใช้:');
    const sim = await c.query(`
      SELECT snap.rig_v_exp_id, snap.policy_year, snap.rd_type, snap.exp_refund, snap.claim_life, snap.claim_add, snap.claim_dismem
      FROM tx_act_snap_exprefund snap
      WHERE snap.policy_no='GH4634'
        AND snap.policy_year=8
        AND snap.rig_process_hd_id=14023
        AND snap.exp_refund > 0
      ORDER BY snap.rd_type`);
    console.log(`  ${sim.rowCount} rows match (BDR engine จะดึงข้อมูลพวกนี้):`);
    sim.rows.forEach(r => console.log(`    rd=${r.rd_type} exp_refund=${r.exp_refund} | claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem}`));

    await c.query('ROLLBACK');
    console.log('\n=== ROLLBACK (dry-run) ===');
    console.log('\n→ COMMIT แล้ว Re-run Actual Process ผ่าน UI');
    console.log('→ คาดว่า BDR row GH4634 act_hd=621 (new):');
    console.log('   tot_ori_ex_refund_paid_life ≈ 1,020,000 × Life ratio');
    console.log('   tot_ori_ex_refund_paid_add  ≈ 1,020,000 × AD&D ratio');
  } catch (e) {
    console.error('ERROR:', e.message);
    await c.query('ROLLBACK').catch(()=>{});
    process.exit(1);
  }
  await c.end();
})();

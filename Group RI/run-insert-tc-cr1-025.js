// Dry-run TC-CR1-025 INSERT script ใน transaction (ROLLBACK)
const { Client } = require('pg');
const fs = require('fs');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass' };

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log('Connected. Running TC-CR1-025 INSERT in BEGIN/ROLLBACK transaction...\n');

  try {
    await c.query('BEGIN');

    // === LANDING (6 rows, 1 doc_no × 6 rd_types) ===
    const baseHeader = {
      rig_process_hd_id: 14053, period: 202606, doc_no: 'EXP.TEST/CR1-025',
      doc_date: '2025-12-15', at_date: '2025-12-15', mode_of_payment: 3,
      policy_no: 'GH4634', policy_year: 8,
      period_begin_date: '2025-07-01', period_end_date: '2026-06-30', cal_date: '2025-12-16',
      company_code_head: '2561001068', company_name_head: 'บริษัท เครือเบทาโกร และบริษัทฯ ในเครือ',
      company_code: '2561001069', company_name: 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
      lot_no: 0, lot_no_all: 0,
      premium_all: 15500000, premium_all_g: 15500000, claim_all: 8000000,
      claim_reserve: 800000, claim_reserve_percent: 10, last_year_claim_reserve: 700000,
      total_claim: 8100000, total_amt: -2000000, total_amt_percent: 80,
      adj_claim: -2000000, net_amt: -2000000,
      exp_refund_g_percent: 85, exp_refund_g: 0, exp_refund: 0,
      invoice_no: null, beneficiary_companycode: '2561001069',
      beneficiary_companyname: 'บริษัท เบทาโกร จำกัด สำนักงานใหญ่',
      type: 'R', premium_statement: 0, premium_adj: 0, premium_inv: 0, exp_refund_g_sum: 0,
      exp_refund_dt: 0, premium_e1: 0, exp_refund_e1: 0, flg_cal: true,
      exp_refund_per_m: 0, exp_refund_e1_per_m: null,
      created_by: 'QA_TC_CR1_025',
      claim_life: 5000000, claim_add: 2500000, claim_dismem: 500000
    };

    const coverages = [
      { id: 432, rd_type: '01', rd_name: 'การประกันชีวิต',                     premium: 10000000 },
      { id: 433, rd_type: '02', rd_name: 'การประกันอุบัติเหตุ (กรณีเสียชีวิต)',  premium: 3500000  },
      { id: 434, rd_type: '10', rd_name: 'การประกันทุพพลภาพ (ทุกกรณี)',          premium: 500000   },
      { id: 435, rd_type: '20', rd_name: 'การประกันสุขภาพ แบบผู้ป่วยใน',         premium: 800000   },
      { id: 436, rd_type: '22', rd_name: 'การประกันแบบผู้ป่วยนอก',               premium: 400000   },
      { id: 437, rd_type: '26', rd_name: 'การประกันค่ารักษาพยาบาลเนื่องจากอุบัติเหตุ', premium: 300000 }
    ];

    console.log('=== INSERT tx_rig_landing_exprefund (6 rows) ===');
    for (const cov of coverages) {
      await c.query(`
        INSERT INTO tx_rig_landing_exprefund (
          rig_v_exp_id, rig_process_hd_id, period, doc_no, doc_date, at_date,
          mode_of_payment, policy_no, policy_year, period_begin_date, period_end_date, cal_date,
          company_code_head, company_name_head, company_code, company_name,
          lot_no, lot_no_all,
          premium_all, premium_all_g, claim_all,
          claim_reserve, claim_reserve_percent, last_year_claim_reserve,
          total_claim, total_amt, total_amt_percent,
          adj_claim, net_amt,
          exp_refund_g_percent, exp_refund_g, exp_refund,
          invoice_no, beneficiary_companycode, beneficiary_companyname,
          type, premium_statement, premium_adj, premium_inv, exp_refund_g_sum,
          rd_type, rd_name, premium,
          exp_refund_dt, premium_e1, exp_refund_e1, flg_cal,
          exp_refund_per_m, exp_refund_e1_per_m,
          created_date, created_by,
          claim_life, claim_add, claim_dismem
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,
          $22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,
          $41,$42,$43,$44,$45,$46,$47,$48,$49,NOW(),$50,$51,$52,$53
        )`,
        [cov.id, baseHeader.rig_process_hd_id, baseHeader.period, baseHeader.doc_no,
         baseHeader.doc_date, baseHeader.at_date, baseHeader.mode_of_payment, baseHeader.policy_no,
         baseHeader.policy_year, baseHeader.period_begin_date, baseHeader.period_end_date, baseHeader.cal_date,
         baseHeader.company_code_head, baseHeader.company_name_head, baseHeader.company_code, baseHeader.company_name,
         baseHeader.lot_no, baseHeader.lot_no_all,
         baseHeader.premium_all, baseHeader.premium_all_g, baseHeader.claim_all,
         baseHeader.claim_reserve, baseHeader.claim_reserve_percent, baseHeader.last_year_claim_reserve,
         baseHeader.total_claim, baseHeader.total_amt, baseHeader.total_amt_percent,
         baseHeader.adj_claim, baseHeader.net_amt,
         baseHeader.exp_refund_g_percent, baseHeader.exp_refund_g, baseHeader.exp_refund,
         baseHeader.invoice_no, baseHeader.beneficiary_companycode, baseHeader.beneficiary_companyname,
         baseHeader.type, baseHeader.premium_statement, baseHeader.premium_adj, baseHeader.premium_inv, baseHeader.exp_refund_g_sum,
         cov.rd_type, cov.rd_name, cov.premium,
         baseHeader.exp_refund_dt, baseHeader.premium_e1, baseHeader.exp_refund_e1, baseHeader.flg_cal,
         baseHeader.exp_refund_per_m, baseHeader.exp_refund_e1_per_m,
         baseHeader.created_by,
         baseHeader.claim_life, baseHeader.claim_add, baseHeader.claim_dismem]
      );
      console.log(`  ✅ id=${cov.id} rd=${cov.rd_type} ${cov.rd_name} premium=${cov.premium}`);
    }

    // === SNAP — copy from landing ===
    console.log('\n=== INSERT tx_act_snap_exprefund (mirror from landing) ===');
    const snap = await c.query(`
      INSERT INTO tx_act_snap_exprefund
      SELECT * FROM tx_rig_landing_exprefund
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606 AND doc_no='EXP.TEST/CR1-025'
      RETURNING rig_v_exp_id, rd_type`);
    snap.rows.forEach(r => console.log(`  ✅ snap id=${r.rig_v_exp_id} rd=${r.rd_type}`));

    // === STAGING — 1 aggregated row ===
    console.log('\n=== INSERT tx_stg_act_exp_refund (1 aggregated row) ===');
    const stg = await c.query(`
      INSERT INTO tx_stg_act_exp_refund (
        stg_act_exp_refund_id, rig_process_hd_id, period, policy_no, reinsur_no, policy_year,
        commencement_date, effective_date, end_date, paid_status,
        percent_exp_refund, percent_expense,
        premium_life, premium_accident, premium_tpd, total_premium,
        claim, exp_refund_previous_year, exp_refund,
        period_begin_date, period_end_date,
        created_date, created_by, updated_date, updated_by,
        claim_life, claim_add, claim_dismem
      ) VALUES (
        nextval('seq_tx_stg_act_exp_refund'),
        14053, 202606, 'GH4634', '1807012', 8,
        '2018-07-01', '2025-07-01', '2026-06-30', 'Not Paid',
        85, 20.00,
        10000000.0000, 3500000.0000, 500000.0000, 14000000.0000,
        8000000.0000, -2000000.0000, NULL,
        '2025-07-01', '2026-06-30',
        NOW(), 'QA_TC_CR1_025', NOW(), 'QA_TC_CR1_025',
        5000000.0000, 2500000.0000, 500000.0000
      ) RETURNING stg_act_exp_refund_id`);
    console.log(`  ✅ stg id=${stg.rows[0].stg_act_exp_refund_id}`);

    // === COMPUTE exp_refund ===
    console.log('\n=== UPDATE compute exp_refund (CR#5 formula) ===');
    const upd = await c.query(`
      UPDATE tx_stg_act_exp_refund
      SET exp_refund = ROUND(
        (percent_exp_refund::numeric / 100) *
        (total_premium * (1 - percent_expense::numeric / 100) - claim + exp_refund_previous_year),
        2)
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
      RETURNING exp_refund`);
    console.log(`  ✅ computed exp_refund = ${upd.rows[0].exp_refund}`);

    // === VERIFY ===
    console.log('\n=== VERIFY ===');
    const v1 = await c.query(`
      SELECT rd_type, rd_name, premium, claim_life, claim_add, claim_dismem, adj_claim
      FROM tx_rig_landing_exprefund
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606
      ORDER BY rd_type`);
    console.log('Landing:');
    v1.rows.forEach(r => console.log(`  rd=${r.rd_type} ${r.rd_name}: premium=${r.premium} claim_life=${r.claim_life} claim_add=${r.claim_add} claim_dismem=${r.claim_dismem}`));

    const v2 = await c.query(`SELECT COUNT(*) AS n FROM tx_act_snap_exprefund WHERE policy_no='GH4634' AND policy_year=8 AND period=202606`);
    console.log(`Snap rows: ${v2.rows[0].n}`);

    const v3 = await c.query(`
      SELECT policy_no, policy_year, period, total_premium, claim,
             exp_refund_previous_year AS loss_carried_fwd,
             claim_life, claim_add, claim_dismem,
             percent_exp_refund, percent_expense, exp_refund,
             (claim_life - exp_refund_previous_year) AS ct_life,
             (claim_add + claim_dismem) AS ct_add_and_d
      FROM tx_stg_act_exp_refund
      WHERE policy_no='GH4634' AND policy_year=8 AND period=202606`);
    console.log('Staging:');
    Object.entries(v3.rows[0]).forEach(([k,v]) => console.log(`  ${k} = ${v}`));

    // Formula validation
    const s = v3.rows[0];
    const expected = Math.round(
      (s.percent_exp_refund / 100) *
      (s.total_premium * (1 - s.percent_expense / 100) - s.claim + Number(s.loss_carried_fwd)) * 100
    ) / 100;
    console.log(`\nFormula check: expected = 85% × (14M × 80% - 8M + (-2M)) = ${expected}  | actual = ${s.exp_refund}  → ${Math.abs(expected - Number(s.exp_refund)) < 0.01 ? '✅ MATCH' : '❌ MISMATCH'}`);

    console.log('\n=== ROLLBACK (dry-run) ===');
    await c.query('ROLLBACK');
    console.log('✅ All INSERTs successful (rolled back — no permanent data change)');
    console.log('→ ถ้าต้องการ commit จริง: เปลี่ยน ROLLBACK เป็น COMMIT ใน script หรือรัน .sql ด้วย psql');
  } catch (e) {
    console.error('\n❌ ERROR:', e.message);
    await c.query('ROLLBACK').catch(()=>{});
    process.exit(1);
  }
  await c.end();
})();

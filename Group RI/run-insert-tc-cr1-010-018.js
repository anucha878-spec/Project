// ============================================================================
// TC-CR1-010 .. 018 — "CR After Golive Lot1" — LANDING-ONLY data setup
// Policy: GL5505 (Treaty GIB_Grp_Direct_EB) — Non-Unit Rate
//
// *** อัปเดตเฉพาะตารางกลุ่ม Landing (tx_rig_landing_*) เท่านั้น ***
// ป้อนข้อมูลดิบที่ "ขาด" แล้วให้ pipeline คำนวณ layer / avg rate / หักอายุ>70 / report เอง
//
// สิ่งที่มีอยู่แล้วใน Landing (ไม่ต้องแตะ):
//   - tx_rig_landing_policy : GL5505 py2 rate_flag=1 (Non-Unit), py1 rate_flag=0 (Unit -> TC-013)
//   - tx_rig_landing_prem_rate : rate table Non-Unit (code 108, value_life=1.2 flat)
//   - tx_rig_landing_cert_inforce : 1325 cert จริง (cer_no 00001-00700)
//
// สิ่งที่ขาด -> INSERT เฉพาะ 2 ตาราง (additive, cer_no ใหม่ 00701+ ไม่ชนของจริง):
//   1) tx_rig_landing_cert_inforce : member ทดสอบ 00701-00708
//   2) tx_rig_landing_claimtpd      : เคลม TPD ของ 00708 (TC-018)
//
// Layer ไม่มีใน Landing -> ถูก derive จาก SA ตาม GIB band:
//   L1: 0-5,000,000 | L2: 5,000,000.01-20,000,000 | L3: >20,000,000.01
//
// ISOLATION: ทุกแถว created_by='QA_TC_CR1_010_018' (cleanup ดูท้ายไฟล์)
// DEFAULT: BEGIN/ROLLBACK (dry-run). ตั้ง DRY_RUN=false เพื่อ COMMIT จริง.
// ============================================================================
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };

const DRY_RUN = false;                // <<< true = ROLLBACK, false = COMMIT
const TAG     = 'QA_TC_CR1_010_018';
const POLICY  = 'GL5505';
const PY      = 2;                     // policy_year 2 = ตัว Non-Unit (rate_flag=1)
const REINS   = '2504002';
const COMP    = '2568000316';

// Landing process_hd / period จริงของ GL5505 (period 202605 ทั้งหมด)
const P_CERT = 14342;   // tx_rig_landing_cert_inforce
const P_TPD  = 14340;   // tx_rig_landing_claimtpd
const PERIOD = 202605;

// อัตรา Non-Unit จาก prem_rate จริง: value_life=1.2 (flat), value_acc=3.0
const RATE_LIFE = 1.2;
const RATE_ACC  = 3.0;

const layerOf = sa => sa <= 5000000 ? 'L1' : sa <= 20000000 ? 'L2' : 'L3';
const r2 = n => Math.round(n * 100) / 100;
const ok  = m => console.log('  ✅ ' + m);
const sec = m => console.log('\n=== ' + m + ' ===');

// ---- TEST MEMBERS (cer_no ใหม่ 00701+) ----
// Life (TC-010/011): life_insur ต่างกันเพื่อให้ตกคนละ layer; เบี้ย = SA/1000 × 1.2 (rate จริง)
const lifeMem = [
  { cer:'00701', sex:1, age:35, life:4000000  },
  { cer:'00702', sex:1, age:45, life:12000000 },
  { cer:'00703', sex:2, age:55, life:22000000 },
].map(m => ({ ...m, lvl: layerOf(m.life), life_prem: r2(m.life/1000*RATE_LIFE) }));

// Accident (TC-012): ทุกคน acc SA ≤5M => L1. acc_prem = ค่าดิบจาก source (TC ระบุ)
//   รวม 50,000 ; อายุ>70 (00708 age 72) = 5,000
const accMem = [
  { cer:'00704', sex:1, age:40, acc:5000000, acc_prem:15000 },
  { cer:'00705', sex:2, age:50, acc:5000000, acc_prem:15000 },
  { cer:'00706', sex:1, age:60, acc:5000000, acc_prem:15000 },
  { cer:'00707', sex:1, age:72, acc:5000000, acc_prem:5000, over70:true },
];
const accTotal  = accMem.reduce((s,m)=>s+m.acc_prem,0);                       // 50,000
const accOver70 = accMem.filter(m=>m.over70).reduce((s,m)=>s+m.acc_prem,0);   // 5,000

// Claim (TC-018): cert 00708 มี life_insur 5,000,000 + เคลม TPD
const claimMem = { cer:'00708', sex:1, age:58, life:5000000, tpd:5000000, tpd_claim:3000000 };

// ---- NULL-COLUMN BACKFILL (เติมคอลัมน์ที่เดิมเว้นว่าง ให้ตรงรูปแบบข้อมูลจริงในระบบ) ----
// sum_*_prem : สมาชิกในกลุ่มเดียวกันใช้ "ยอดรวมของกลุ่ม" ร่วมกัน (ยืนยัน sum_total=sum_life+sum_acc+sum_tpd)
//   -> เติมเป็นผลรวม cohort ทดสอบ (life 51,600 / acc 50,000 / tpd 0 / total 101,600)
const SUM_LIFE  = r2(lifeMem.reduce((s,m)=>s+m.life_prem,0) + claimMem.life/1000*RATE_LIFE); // 51,600
const SUM_ACC   = accTotal;                                                                  // 50,000
const SUM_TPD   = 0;
const SUM_TOTAL = r2(SUM_LIFE + SUM_ACC + SUM_TPD);                                           // 101,600
const custCode  = cer => '25680' + cer;   // รหัสรายสมาชิก 10 หลัก ไม่ชนของจริง (256803xxxx)

(async () => {
  const c = new Client(cfg); await c.connect();
  console.log(`Connected. TC-CR1-010..018 LANDING-only setup for ${POLICY}  DRY_RUN=${DRY_RUN}\n`);
  try {
    await c.query('BEGIN');
    let vCert = Number((await c.query(`SELECT COALESCE(MAX(rig_v_pol_inforce_id),0)+1 n FROM tx_rig_landing_cert_inforce`)).rows[0].n);
    let vTpd  = Number((await c.query(`SELECT COALESCE(MAX(rig_v_clm_tpd_id),0)+1 n FROM tx_rig_landing_claimtpd`)).rows[0].n);

    // -------- helper: insert one cert_inforce row --------
    const insCert = (cer, sex, age, life, acc, tpd, life_prem, acc_prem, tpd_prem) => c.query(`
      INSERT INTO tx_rig_landing_cert_inforce (
        rig_v_pol_inforce_id, rig_process_hd_id, period, doc_no, policy_no, effect_date,
        cer_no, comp_code, company_code, company_head_code, re_insure_no,
        age, sex, life_insur, acc_insur, med_insur, tpd_insur,
        life_prem, acc_prem, med_acc_prem, tpd_prem, total_prem,
        status_member, doc_date, policy_name, company_name, promise_date,
        policy_year, pay_type, created_date, created_by,
        -- NULL-column backfill (mirror รูปแบบข้อมูลจริง) --
        cust_code, change_date, period_date, tax_year,
        med_rate, count_of_day, status, lot_no,
        cremat_insur, life_e1_rate, life_e1_prem, cremat_prem,
        ipd_prem, opd_prem, major_plan_prem, dental_prem, mather_prem, hb_prem, opd_lab_prem,
        sum_life_prem, sum_acc_prem, sum_tpd_prem, sum_total_prem,
        sum_life_e1_prem, sum_cremat_prem, sum_med_acc_prem, sum_ipd_prem, sum_opd_prem,
        sum_major_plan_prem, sum_dental_prem, sum_mather_prem, sum_hb_prem, sum_opd_lab_prem)
      VALUES ($1,$2,$3,'INF.TEST/CR1',$4,'2025-04-01',
        $5,$6,$6,$6,$7,
        $8,$9,$10,$11,0,$12,
        $13,$14,0,$15,$16,
        'I','2025-04-01','UBE (THAILAND) CO., LTD.','อูเบะ กรุ๊ป (ไทยแลนด์)','2026-04-01',
        $17,3,NOW(),$18,
        $19,'2026-04-01','2026-04-01 00:00:00',2026,
        '',0,0,1,
        0,0,0,0,
        0,0,0,0,0,0,0.00,
        $20,$21,$22,$23,
        0,0,0,0,0,
        0,0,0,0,0.00)`,
      [vCert++, P_CERT, PERIOD, POLICY, cer, COMP, REINS,
       age, sex, life, acc, tpd, life_prem, acc_prem, tpd_prem, r2(life_prem+acc_prem+tpd_prem), PY, TAG,
       custCode(cer), SUM_LIFE, SUM_ACC, SUM_TPD, SUM_TOTAL]);

    // =========================================================================
    // 1) tx_rig_landing_cert_inforce — member ทดสอบ (TC-010/011/012/014/015/018)
    // =========================================================================
    sec('1) tx_rig_landing_cert_inforce : Life members 00701-00703 (TC-010/011)');
    for (const m of lifeMem) { await insCert(m.cer, m.sex, m.age, m.life, 0, 0, m.life_prem, 0, 0);
      ok(`cer=${m.cer} -> ${m.lvl} | life_insur=${m.life} life_prem=${m.life_prem} (=${m.life}/1000×${RATE_LIFE})`); }

    sec('1) tx_rig_landing_cert_inforce : Accident members 00704-00707 (TC-012, all L1)');
    for (const m of accMem) { await insCert(m.cer, m.sex, m.age, 0, m.acc, 0, 0, m.acc_prem, 0);
      ok(`cer=${m.cer} -> L1 | age=${m.age} acc_insur=${m.acc} acc_prem=${m.acc_prem}${m.over70?'  <-- อายุ>70':''}`); }

    sec('1) tx_rig_landing_cert_inforce : Claim cert 00708 (TC-018, life_insur=5M)');
    await insCert(claimMem.cer, claimMem.sex, claimMem.age, claimMem.life, 0, claimMem.tpd,
                  r2(claimMem.life/1000*RATE_LIFE), 0, 0);
    ok(`cer=${claimMem.cer} -> L1 | life_insur=${claimMem.life} tpd_insur=${claimMem.tpd}`);

    // =========================================================================
    // 2) tx_rig_landing_claimtpd — เคลม TPD ของ 00708 (TC-018)
    //    Original SI Life ถูกดึง downstream จาก cert 00708 (life_insur=5,000,000)
    // =========================================================================
    sec('2) tx_rig_landing_claimtpd : TPD claim ของ cer 00708 (TC-018)');
    await c.query(`
      INSERT INTO tx_rig_landing_claimtpd (
        rig_v_clm_tpd_id, rig_process_hd_id, period, inform_no, consider_date,
        policy_no, policy_year, certific_cust_no, cust_code, attn_age, status,
        effect_date, accident_date, accident_cause, policy_age,
        acc_insur, tpd_insur, claim_status, indemnity_rate, indemnity_amt,
        approve_acc_insur, approve_tpd_insur, approve_claim, approve_date,
        amount, pay_date, created_date, created_by,
        -- NULL-column backfill: policy_code=1, prod_claim_code 140400 (TPD-paying analog),
        --   loss_ratio 1.0, receive_no/date ≈ consider_date; tpd_prod_code คงไว้ NULL --
        policy_code, prod_claim_code, loss_ratio, receive_no, receive_date)
      VALUES ($1,$2,$3,'TPDTC1018','2025-08-20',
        $4,$5,$6,$7,58,'A',
        '2025-04-01','2025-08-15','อุบัติเหตุ-ทุพพลภาพถาวรสิ้นเชิง','1',
        $8,$9,1,100,$10,
        $8,$10,$10,'2025-08-25',
        $10,'2025-08-30',NOW(),$11,
        1,'140400',1.0000,'25680018','2025-08-20')`,
      [vTpd, P_TPD, PERIOD, POLICY, PY, claimMem.cer, COMP,
       claimMem.tpd, claimMem.tpd, claimMem.tpd_claim, TAG]);
    ok(`cer=${claimMem.cer} TPD claim: tpd_insur=${claimMem.tpd} approve_tpd=${claimMem.tpd_claim} (Original SI Life=${claimMem.life} ดึงจาก cert)`);

    // =========================================================================
    // VERIFY (อ่านจาก Landing) + Cert -> Layer breakdown (derived by SA band)
    // =========================================================================
    console.log('\n========================= VERIFY (Landing) =========================');

    console.log('\n[Cert -> Layer breakdown] (derive จาก SA ตาม GIB band)');
    const rows = (await c.query(`
      SELECT cer_no, age, sex, life_insur, acc_insur, tpd_insur, life_prem, acc_prem
      FROM tx_rig_landing_cert_inforce WHERE created_by=$1 ORDER BY cer_no`,[TAG])).rows;
    rows.forEach(r=>{
      const sa = Number(r.life_insur)>0 ? Number(r.life_insur) : Number(r.acc_insur);
      const kind = Number(r.life_insur)>0 ? 'LIFE' : 'ACC';
      console.log(`  cer ${r.cer_no} | ${layerOf(sa)} | ${kind} | age ${r.age} sex ${r.sex} | life_insur=${r.life_insur} acc_insur=${r.acc_insur} life_prem=${r.life_prem} acc_prem=${r.acc_prem}`);
    });

    // TC-010/011: avg life rate = Σlife_prem / Σlife_insur × 1000
    const lf = (await c.query(`SELECT SUM(life_insur)::numeric sa, SUM(life_prem)::numeric prem FROM tx_rig_landing_cert_inforce WHERE created_by=$1 AND life_insur>0`,[TAG])).rows[0];
    const avg = r2(Number(lf.prem)/Number(lf.sa)*1000);
    console.log(`\nTC-010/011 avg life rate = Σprem ${lf.prem} / Σsa ${lf.sa} × 1000 = ${avg}  ${avg===RATE_LIFE?'✅ = rate จริง 1.20':''}`);
    console.log('  Layer split (life): ' + JSON.stringify((await c.query(`
      SELECT CASE WHEN life_insur<=5000000 THEN 'L1' WHEN life_insur<=20000000 THEN 'L2' ELSE 'L3' END lvl,
             COUNT(*)::int n, SUM(life_insur)::numeric sa, SUM(life_prem)::numeric prem
      FROM tx_rig_landing_cert_inforce WHERE created_by=$1 AND life_insur>0 GROUP BY 1 ORDER BY 1`,[TAG])).rows));

    // TC-012: accident total & age>70
    const ac = (await c.query(`
      SELECT SUM(acc_prem)::numeric tot,
             SUM(CASE WHEN age>70 THEN acc_prem ELSE 0 END)::numeric o70,
             SUM(CASE WHEN age<=70 THEN acc_prem ELSE 0 END)::numeric after_deduct
      FROM tx_rig_landing_cert_inforce WHERE created_by=$1 AND acc_insur>0`,[TAG])).rows[0];
    console.log(`\nTC-012 Accident: เบี้ยรวม=${ac.tot} อายุ>70=${ac.o70} -> L1 หลังหัก=${ac.after_deduct}  ${Number(ac.after_deduct)===45000?'✅ = 45,000':'❌'}`);

    // TC-018: claim + cert life
    const clm = (await c.query(`SELECT certific_cust_no, tpd_insur, approve_tpd_insur, claim_status FROM tx_rig_landing_claimtpd WHERE created_by=$1`,[TAG])).rows[0];
    const certLife = (await c.query(`SELECT life_insur FROM tx_rig_landing_cert_inforce WHERE created_by=$1 AND cer_no=$2`,[TAG,claimMem.cer])).rows[0].life_insur;
    console.log(`\nTC-018 TPD claim cer ${clm.certific_cust_no}: tpd_insur=${clm.tpd_insur} | cert life_insur=${certLife} -> Original SI Life แสดงได้ ${Number(certLife)>0?'✅':'❌'}`);

    // TC-013: existing Unit Rate (py1 rate_flag=0)
    const rf = (await c.query(`SELECT policy_year, rate_flag FROM tx_rig_landing_policy WHERE policy_no=$1 ORDER BY policy_year`,[POLICY])).rows;
    console.log(`\nTC-013 Unit Rate regression: landing_policy rate_flag ${JSON.stringify(rf)} (py1=0 Unit, py2=1 Non-Unit — ใช้ data เดิม)`);

    if (DRY_RUN) { await c.query('ROLLBACK'); console.log('\n✅ ALL INSERTS OK — ROLLED BACK (dry-run).\n   → commit จริง: ตั้ง DRY_RUN=false'); }
    else { await c.query('COMMIT'); console.log('\n✅ COMMITTED. created_by='+TAG); }
  } catch (e) {
    await c.query('ROLLBACK').catch(()=>{});
    console.error('\n❌ ERROR:', e.message); console.error(e.stack); process.exit(1);
  } finally { await c.end(); }
})();

// ============================================================================
// CLEANUP (หลัง COMMIT) — psql:
//   DELETE FROM tx_rig_landing_claimtpd     WHERE created_by='QA_TC_CR1_010_018';
//   DELETE FROM tx_rig_landing_cert_inforce WHERE created_by='QA_TC_CR1_010_018';
// ============================================================================

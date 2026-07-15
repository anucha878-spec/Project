const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

// columns I backfilled on landing cert_inforce
const BACKFILLED = ['cust_code','change_date','period_date','tax_year','med_rate','count_of_day','status','lot_no',
  'cremat_insur','life_e1_rate','life_e1_prem','cremat_prem','ipd_prem','opd_prem','major_plan_prem','dental_prem',
  'mather_prem','hb_prem','opd_lab_prem','sum_life_prem','sum_acc_prem','sum_tpd_prem','sum_total_prem',
  'sum_life_e1_prem','sum_cremat_prem','sum_med_acc_prem','sum_ipd_prem','sum_opd_prem','sum_major_plan_prem',
  'sum_dental_prem','sum_mather_prem','sum_hb_prem','sum_opd_lab_prem'];

async function cols(c, t){ return (await c.query(
  `SELECT column_name FROM information_schema.columns WHERE table_name=$1`,[t])).rows.map(r=>r.column_name); }

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) which backfilled cols also EXIST in snapshot cert tables (=> can propagate)
    for (const snap of ['tx_est_snap_cert_inforce','tx_act_snap_cert_inforce']) {
      const sc = await cols(c, snap);
      const shared = BACKFILLED.filter(x => sc.includes(x));
      console.log(`\n=== ${snap}: ${sc.length} cols | backfilled-cols present (${shared.length}): ===`);
      console.log(J(shared));
    }

    // 2) do test certs 00701-00708 already exist in snapshot / does GL5505 period 202605 exist?
    console.log('\n=== test certs 00701-00708 in snapshot/bdr? ===');
    for (const t of ['tx_est_snap_cert_inforce','tx_act_snap_cert_inforce']) {
      const sc = await cols(c, t);
      const polCol = sc.includes('policy_no') ? 'policy_no' : (sc.includes('policy_code') ? 'policy_code' : null);
      if (!polCol) { console.log(`  ${t}: (no policy column)`); continue; }
      const r = (await c.query(
        `SELECT COUNT(*)::int n_gl5505,
                COUNT(*) FILTER (WHERE cer_no BETWEEN '00701' AND '00708')::int n_testcer
         FROM ${t} WHERE ${polCol}='GL5505'`)).rows[0];
      console.log(`  ${t}: GL5505 rows=${r.n_gl5505}, test-cer(00701-708)=${r.n_testcer}`);
    }

    // 3) compare a REAL GL5505 row: landing vs est_snapshot — do sum_*/coverage propagate? are they 0 or null in snapshot?
    console.log('\n=== REAL GL5505 cer 00001: landing vs est_snap (coverage/sum cols) ===');
    const land = (await c.query(`SELECT cer_no,period,policy_year,tax_year,lot_no,life_prem,acc_prem,tpd_prem,
       sum_life_prem,sum_acc_prem,sum_total_prem,ipd_prem,opd_prem,cremat_prem,change_date::date cd,period_date
       FROM tx_rig_landing_cert_inforce WHERE policy_no='GL5505' AND cer_no='00001' LIMIT 2`)).rows;
    console.log('LANDING:', J(land));
    const snapCols = await cols(c,'tx_est_snap_cert_inforce');
    const pick = ['cer_no','period','policy_year','tax_year','lot_no','life_prem','acc_prem','tpd_prem',
      'sum_life_prem','sum_acc_prem','sum_total_prem','ipd_prem','opd_prem','cremat_prem']
      .filter(x=>snapCols.includes(x));
    const polCol = snapCols.includes('policy_no')?'policy_no':'policy_code';
    const snap = (await c.query(`SELECT ${pick.join(',')} FROM tx_est_snap_cert_inforce WHERE ${polCol}='GL5505' AND cer_no='00001' LIMIT 2`)).rows;
    console.log('EST_SNAP (cols present:'+pick.length+'):', J(snap));

    // 4) BDR for GL5505 — does it exist & at member level use which prem?
    console.log('\n=== BDR tables: GL5505 presence ===');
    for (const b of ['tx_rig_est_bdr','tx_rig_act_bdr_pol_mem']) {
      const bc = await cols(c,b);
      const polCol = bc.includes('policy_no')?'policy_no':(bc.includes('policy_code')?'policy_code':null);
      console.log(`  ${b}: cols=${bc.length} polCol=${polCol}`);
      if (polCol) {
        try { console.log('    GL5505 rows:', (await c.query(`SELECT COUNT(*)::int n FROM ${b} WHERE ${polCol}='GL5505'`)).rows[0].n); }
        catch(e){ console.log('    count err:', e.message); }
      }
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

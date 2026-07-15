const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const P = 'GL5557';
const f = n => n==null?'—':Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) active 2026Q1 result run for GL5557
    const act = (await c.query(`
      SELECT ph.rig_act_policy_hd_id id, ph.rig_act_hd_id hdid, h.usage_status, h.period hd_period,
             ph.period, ph.effective_date cov_from, ph.mode_pay, ph.policy_year, ph.data_quarter
      FROM tx_rig_act_policy_hd ph
      JOIN tx_rig_act_hd h ON h.rig_act_hd_id=ph.rig_act_hd_id
      WHERE ph.policy_no=$1 AND ph.data_quarter='2026Q1' AND h.usage_status='A'
        AND h.treaty_code='GIB_Grp_Direct_EB'
      ORDER BY ph.rig_act_policy_hd_id DESC LIMIT 5`, [P])).rows;
    console.log('== ACTIVE 2026Q1 policy_hd (usage A) ==');
    console.table(act);
    if (!act.length) { console.log('NO ACTIVE 2026Q1 run'); return; }
    const top = act[0];

    // 2) result layer table
    console.log('\n== cols tx_rig_act_policy_layer ==');
    const lc = (await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_policy_layer' ORDER BY ordinal_position`)).rows.map(r=>r.column_name);
    console.log(lc.join(', '));

    console.log('\n== tx_rig_act_policy_layer for policy_hd', top.id, '==');
    const layer = (await c.query(`SELECT * FROM tx_rig_act_policy_layer WHERE rig_act_policy_hd_id=$1 ORDER BY level`, [top.id])).rows;
    layer.forEach(r=>console.log(JSON.stringify(r)));

    // 3) staging prem_layer for GL5557 period 202601
    console.log('\n== tx_stg_act_prem_layer GL5557 (period 202601) ==');
    const spl = (await c.query(`
      SELECT rig_process_hd_id proc, period, effective_date, level,
             life_insure, accident_insure, life_prem_rate, accident_prem_rate,
             life_prem, life_extra_prem, accident_prem, accident_extra_prem,
             amount_life, amount_accident
      FROM tx_stg_act_prem_layer
      WHERE policy_no=$1 AND period='202601'
      ORDER BY rig_process_hd_id DESC, level`, [P])).rows;
    console.table(spl);

    // 4) members period 202601
    console.log('\n== tx_stg_act_inforce_member GL5557 (period 202601) ==');
    const mem = (await c.query(`
      SELECT rig_process_hd_id proc, cer_no, age, sum_insured_life, sum_insured_accident,
             prem_rate_life, prem_rate_acc, prem_life, prem_extra_life, prem_acc, prem_acc_extra, rate_type
      FROM tx_stg_act_inforce_member
      WHERE policy_no=$1 AND period='202601'
      ORDER BY rig_process_hd_id DESC, sum_insured_life DESC`, [P])).rows;
    console.table(mem);

    // 5) rate_flag + snapshot rates
    console.log('\n== tx_act_snap_policy GL5557 (rate_flag + snapshot rates) ==');
    const snap = (await c.query(`
      SELECT period, policy_year, rate_flag, life_prem_rate, acc_prem_rate, tpd_prem_rate,
             pay_type, promise_date
      FROM tx_act_snap_policy WHERE policy_no=$1 ORDER BY period DESC LIMIT 8`, [P])).rows;
    console.table(snap);

    // 6) treaty layer config GIB
    console.log('\n== cf_rig_treaty_cond_dt (GIB layers) ==');
    const cond = (await c.query(`
      SELECT dt.layer, dt.minimum, dt.maximum, dt.percent_re
      FROM cf_rig_treaty_cond_dt dt
      JOIN cf_rig_treaty_cond_hd hd ON hd.cf_rig_treaty_cond_hd_id=dt.cf_rig_treaty_cond_hd_id
      JOIN cf_rig_treaty t ON t.cf_rig_treaty_id=hd.cf_rig_treaty_id
      WHERE t.treaty_code='GIB_Grp_Direct_EB'
      ORDER BY hd.effective_date_from DESC, dt.layer LIMIT 12`)).rows;
    console.table(cond);
  } catch(e){ console.error('ERR:', e.message); } finally { await c.end(); }
})();

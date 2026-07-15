// Regression verification for Redmine #75852 (GIB per-layer cede) — speckit-qa regression §6.5
// Read-only. Finds the LATEST Estimate run for GL5505, reconciles per-layer ri_prem_life vs SC-001,
// and smoke-checks GL5557 / GH5558 multi-layer exactness.
const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:25000 };
const R2 = n => Math.round(n*100)/100;

(async () => {
  const c = new Client(cfg); await c.connect();
  const out = {};
  try {
    // ---- A. all GL5505 runs (hd) with per-level ri_prem_life ----
    const runs = (await c.query(`
      SELECT ph.rig_est_hd_id AS hd, pd.level, pd.ri_prem_life::numeric AS ri
      FROM tx_rig_est_policy_dt pd
      JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id = pd.rig_est_policy_hd_id
      WHERE pd.policy_no='GL5505'
      ORDER BY ph.rig_est_hd_id, pd.level`)).rows;
    const byhd = {};
    runs.forEach(r => { (byhd[r.hd] ??= {})[r.level] = Number(r.ri); });
    const hds = Object.keys(byhd).map(Number).sort((a,b)=>a-b);
    out.gl5505_runs = byhd;
    out.gl5505_latest_hd = hds.length ? hds[hds.length-1] : null;

    // ---- B. expected from formula (current post-backfill members) ----
    const F = 1; // annual mode_pay=1
    const bands = (await c.query(`
      SELECT SUM(life_prem)::numeric lp, SUM(life_e1_prem)::numeric le
      FROM tx_est_snap_cert_inforce WHERE policy_no='GL5505'`)).rows[0];
    const PremTotal = R2(F*(Number(bands.lp)+Number(bands.le)));
    const mem = (await c.query(`
      SELECT cer_no, sum_insured_life sa, prem_rate_life rate, prem_extra_life extra
      FROM tx_stg_est_inforce_member WHERE policy_no='GL5505' AND sum_insured_life>5000000
      ORDER BY sum_insured_life`)).rows;
    let L2=0,L3=0;
    for (const m of mem) {
      const sa=+m.sa, rate=+m.rate, ex=+m.extra||0;
      if (sa>5e6 && sa<=20e6) { L2 += F*rate*(sa-5e6)/1000 + (ex?F*ex*(sa-5e6)/sa:0); }
      else if (sa>20e6)       { L2 += F*rate*15e6/1000 + (ex?F*ex*15e6/sa:0);
                                L3 += F*rate*(sa-20e6)/1000 + (ex?F*ex*(sa-20e6)/sa:0); }
    }
    L2=R2(L2); L3=R2(L3); const L1=R2(PremTotal-L2-L3);
    const exp = { L1:R2(L1*0.15), L2:R2(L2*1.0), L3:R2(L3*0.0) };
    out.gl5505_members = mem.map(m=>({cer:m.cer_no, sa:+m.sa, rate:+m.rate}));
    out.gl5505_premTotal = PremTotal;
    out.gl5505_expected = exp;  // SC-001 target

    // ---- C. verdict on latest run ----
    if (out.gl5505_latest_hd != null) {
      const a = byhd[out.gl5505_latest_hd];
      const got = { L1:R2(a.L1||0), L2:R2(a.L2||0), L3:R2(a.L3||0) };
      out.gl5505_actual_latest = got;
      const eq = (x,y)=>Math.abs(x-y)<0.01;
      out.gl5505_pass = eq(got.L1,exp.L1) && eq(got.L2,exp.L2) && eq(got.L3,exp.L3);
      out.gl5505_collapse = eq(got.L1, R2(PremTotal*0.15)) && got.L2===0 && got.L3===0;
    }

    // ---- D. smoke: GL5557 & GH5558 latest ri_prem_life ----
    for (const pol of ['GL5557','GH5558']) {
      const rows = (await c.query(`
        SELECT ph.rig_est_hd_id AS hd, pd.level, pd.ri_prem_life::numeric ri
        FROM tx_rig_est_policy_dt pd
        JOIN tx_rig_est_policy_hd ph ON ph.rig_est_policy_hd_id = pd.rig_est_policy_hd_id
        WHERE pd.policy_no=$1 ORDER BY ph.rig_est_hd_id DESC, pd.level`,[pol])).rows;
      if (!rows.length) { out[pol] = {note:'no runs'}; continue; }
      const latest = rows[0].hd; const lv={};
      rows.filter(r=>r.hd===latest).forEach(r=>lv[r.level]=Number(r.ri));
      out[pol] = { hd: latest, levels: lv };
    }

    console.log(JSON.stringify(out, null, 2));
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

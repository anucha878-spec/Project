const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:15000 };
const J = x => JSON.stringify(x, null, 1);

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    // 1) GL5505 layer rows under hd 126 (policy_hd 2658) — existing values
    console.log('=== GL5505 layers under policy_hd 2658 (hd126) ===');
    console.log(J((await c.query(`
      SELECT rig_act_policy_layer_id, level, member_life, member_add, premium_rate_life, premium_rate_add,
             ori_sa_life, ori_sa_add, ori_nb_prem_life, ori_nb_prem_add, ori_ren_prem_life, ori_ren_prem_add
      FROM tx_rig_act_policy_layer WHERE rig_act_policy_hd_id=2658 ORDER BY level`)).rows));

    // 2) tx_rig_act_bdr_claim header columns
    console.log('\n=== tx_rig_act_bdr_claim cols ===');
    console.log((await c.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_act_bdr_claim' ORDER BY ordinal_position`)).rows.map(r=>`${r.column_name}:${r.data_type}`).join(', '));

    // 3) Is there a bdr_new_renew row for GL5505 under hd 126?
    console.log('\n=== bdr_new_renew GL5505 under hd 126 ===');
    console.log(J((await c.query(`
      SELECT rig_act_bdr_new_renew_id, rig_act_hd_id, closing_quarter, policy_no, premium_rate_life, premium_rate_add,
             l1_member_life, l2_member_life, l3_member_life, l1_ori_sa_life, l2_ori_sa_life, l3_ori_sa_life
      FROM tx_rig_act_bdr_new_renew WHERE policy_no='GL5505' AND rig_act_hd_id=126`)).rows));

    // 4) act snapshot/staging process_hd+period for GIB 2025Q4 actual run
    //    find process_hd used by tx_act_snap_policy for GIB treaty policies
    console.log('\n=== act_snap_policy distinct process_hd/period (recent) ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n
      FROM tx_act_snap_policy GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 10`)).rows));

    console.log('\n=== stg_act_all_policy distinct process_hd/period (recent) ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n
      FROM tx_stg_act_all_policy GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 10`)).rows));

    console.log('\n=== act cert_inforce distinct process_hd/period (recent) ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n
      FROM tx_act_snap_cert_inforce GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 10`)).rows));

    console.log('\n=== stg_act_inforce_member distinct process_hd/period ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n
      FROM tx_stg_act_inforce_member GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 10`)).rows));

    console.log('\n=== stg_act_prem_layer distinct process_hd/period ===');
    console.log(J((await c.query(`
      SELECT rig_process_hd_id, period, COUNT(*)::int n
      FROM tx_stg_act_prem_layer GROUP BY rig_process_hd_id, period ORDER BY rig_process_hd_id DESC LIMIT 10`)).rows));

    // 5) tx_rig_process_hd: link act_hd 126 to a process? show recent process rows
    console.log('\n=== tx_rig_process_hd cols ===');
    console.log((await c.query(`SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name='tx_rig_process_hd' ORDER BY ordinal_position`)).rows.map(r=>r.column_name).join(', '));

    // 6) existing GL5505 est prem_layer row (the 1 that exists)
    console.log('\n=== GL5505 est prem_layer existing ===');
    console.log(J((await c.query(`SELECT rig_process_hd_id, period, level, amount_life, life_insure, life_prem_rate, life_prem, life_extra_prem, accident_prem, accident_prem_rate FROM tx_stg_est_prem_layer WHERE policy_no='GL5505'`)).rows));

  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

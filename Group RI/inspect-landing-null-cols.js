const { Client } = require('pg');
const cfg = { host:'10.14.8.58', port:5432, database:'groupri', user:'groupri', password:'nopass', connectionTimeoutMillis:20000 };
const J = x => JSON.stringify(x, null, 1);

// columns already covered by the current INSERT
const CERT_INSERTED = ['rig_v_pol_inforce_id','rig_process_hd_id','period','doc_no','policy_no','effect_date',
  'cer_no','comp_code','company_code','company_head_code','re_insure_no','age','sex','life_insur','acc_insur',
  'med_insur','tpd_insur','life_prem','acc_prem','med_acc_prem','tpd_prem','total_prem','status_member','doc_date',
  'policy_name','company_name','promise_date','policy_year','pay_type','created_date','created_by'];
const TPD_INSERTED = ['rig_v_clm_tpd_id','rig_process_hd_id','period','inform_no','consider_date','policy_no',
  'policy_year','certific_cust_no','cust_code','attn_age','status','effect_date','accident_date','accident_cause',
  'policy_age','acc_insur','tpd_insur','claim_status','indemnity_rate','indemnity_amt','approve_acc_insur',
  'approve_tpd_insur','approve_claim','approve_date','amount','pay_date','created_date','created_by'];

async function schema(c, tbl) {
  return (await c.query(
    `SELECT column_name, data_type, character_maximum_length, numeric_precision, numeric_scale, is_nullable, column_default
     FROM information_schema.columns WHERE table_name=$1 ORDER BY ordinal_position`, [tbl])).rows;
}

// for the not-inserted columns, look at real (non-test) rows: how often are they non-null + distinct sample values
async function colStats(c, tbl, col, filter) {
  try {
    const r = (await c.query(
      `SELECT COUNT(*)::int total,
              COUNT("${col}")::int non_null,
              COUNT(DISTINCT "${col}")::int distinct_cnt
       FROM ${tbl} ${filter}`)).rows[0];
    const samples = (await c.query(
      `SELECT "${col}" v, COUNT(*)::int n FROM ${tbl} ${filter} AND "${col}" IS NOT NULL
       GROUP BY "${col}" ORDER BY n DESC LIMIT 6`)).rows;
    return { ...r, samples };
  } catch (e) { return { error: e.message }; }
}

(async () => {
  const c = new Client(cfg); await c.connect();
  try {
    for (const [tbl, inserted, filter] of [
      ['tx_rig_landing_cert_inforce', CERT_INSERTED, `WHERE policy_no='GL5505'`],
      ['tx_rig_landing_claimtpd',     TPD_INSERTED,  `WHERE 1=1`],
    ]) {
      const cols = await schema(c, tbl);
      console.log(`\n\n########## ${tbl} — ${cols.length} columns ##########`);
      const missing = cols.filter(col => !inserted.includes(col.column_name));
      console.log(`\n--- Columns NOT in current INSERT (${missing.length}) — will be NULL/default ---`);
      for (const col of missing) {
        const type = col.data_type + (col.character_maximum_length ? `(${col.character_maximum_length})` :
          (col.numeric_precision ? `(${col.numeric_precision},${col.numeric_scale})` : ''));
        const st = await colStats(c, tbl, col.column_name, filter);
        const fillRate = st.total ? Math.round(st.non_null / st.total * 100) : 0;
        console.log(`\n  • ${col.column_name}  [${type}] null=${col.is_nullable} default=${col.column_default || '-'}`);
        console.log(`      real-data fill: ${st.non_null}/${st.total} (${fillRate}%) distinct=${st.distinct_cnt}`);
        if (st.samples && st.samples.length) console.log(`      top values: ${J(st.samples)}`);
        if (st.error) console.log(`      stats-error: ${st.error}`);
      }
    }
  } finally { await c.end(); }
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });

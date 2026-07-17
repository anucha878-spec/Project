// Enumerate every "รายงาน R" table in adw, fetch row count, column schema,
// and a tiny sample (≤2 rows for big tables, full for tiny config tables).
// Output: CATALOG.md with grouped sections.

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const CFG = {
  host: '11.100.8.51', port: 5432, user: 'adw', password: 'nopass',
  database: 'adw', connectionTimeoutMillis: 15000, statement_timeout: 60000,
};

const FAMILY_PATTERNS = [
  // [label, ILIKE pattern(s)]
  ['Master configuration', ["ms_rcc_%", "cf_rcc_%"]],
  ['GL mapping (per report)', ["cf_r%_gl_mapping"]],
  ['EDW source — account head/system', ["tx_adw_account_head%"]],
  ['EDW source — transaction', ["tx_adw_transaction_%"]],
  ['EDW source — model details', [
    "tx_adw_premium_detail%", "tx_adw_claim_detail%", "tx_adw_benefit_detail%",
    "tx_adw_investment_detail%", "tx_adw_commission_ov_detail%",
    "tx_adw_other_income%", "tx_adw_premium_ri_detail%",
    "tx_adw_commission_ov_ri_detail%", "tx_adw_claim_ri_detail%",
    "tx_adw_double_entry_detail%",
  ]],
  ['R-output (current run)', ["tx_rcc_output_r%"]],
  ['R-output (snapshot backup)', ["tx_rcc_output_snapshot_r%"]],
  ['R reconcile staging', ["tx_rcc_reconcile_r%"]],
  ['R adjustment staging', ["tx_rcc_adj_r%"]],
  ['R13 landing (EXP import)', ["tx_rcc_landing_r13%"]],
  ['R13 EXP source', ["tx_exp_proc_output%"]],
  ['Monthly header / detail', ["tx_rcc_monthly_%"]],
  ['Other RCC tables', ["tx_rcc_%"]],   // catch-all, dedup later
];

(async () => {
  const c = new Client(CFG);
  await c.connect();

  // 1) Find ALL candidate tables in one pass
  const allRes = await c.query(`
    SELECT table_schema, table_name
    FROM information_schema.tables
    WHERE table_type='BASE TABLE'
      AND table_schema NOT IN ('pg_catalog','information_schema')
      AND (
        table_name ILIKE 'ms_rcc_%' OR
        table_name ILIKE 'cf_r%' OR
        table_name ILIKE 'tx_adw_account_head%' OR
        table_name ILIKE 'tx_adw_transaction_%' OR
        table_name ILIKE 'tx_adw_%_detail%' OR
        table_name ILIKE 'tx_adw_double_entry_detail%' OR
        table_name ILIKE 'tx_rcc_%' OR
        table_name ILIKE 'tx_exp_proc_output%'
      )
    ORDER BY table_schema, table_name`);
  const all = allRes.rows;
  console.error(`Total R-related tables: ${all.length}`);

  // 2) Group by family (first matching family wins)
  const familyOf = new Map();
  const assigned = new Set();
  for (const [label, patterns] of FAMILY_PATTERNS) {
    for (const t of all) {
      if (assigned.has(t.table_name)) continue;
      const ok = patterns.some(p => {
        const re = new RegExp('^' + p.replace(/%/g, '.*') + '$', 'i');
        return re.test(t.table_name);
      });
      if (ok) { familyOf.set(t.table_name, { ...t, family: label }); assigned.add(t.table_name); }
    }
  }

  // 3) For each table: row count + column schema + tiny sample
  async function describe(schema, table) {
    const q = `${schema}.${table}`;
    // row count: use reltuples for large, exact for small
    const est = await c.query(
      `SELECT reltuples::bigint AS approx FROM pg_class WHERE oid = $1::regclass`,
      [`"${schema}"."${table}"`]
    ).then(r => Number(r.rows[0].approx || 0)).catch(() => -1);
    let rowCount = est;
    if (est >= 0 && est < 50000) {
      try {
        const r = await c.query(`SELECT COUNT(*)::bigint AS n FROM "${schema}"."${table}"`);
        rowCount = Number(r.rows[0].n);
      } catch {}
    }
    const cols = await c.query(`
      SELECT column_name, data_type,
             character_maximum_length AS maxlen,
             numeric_precision AS np, numeric_scale AS ns,
             is_nullable
      FROM information_schema.columns
      WHERE table_schema=$1 AND table_name=$2
      ORDER BY ordinal_position`, [schema, table]);
    let sample = [];
    if (rowCount > 0) {
      try {
        const limit = rowCount < 100 ? 5 : 2;
        const r = await c.query(`SELECT * FROM "${schema}"."${table}" LIMIT ${limit}`);
        sample = r.rows;
      } catch {}
    }
    return { rowCount, cols: cols.rows, sample };
  }

  const out = ['# `adw` Database — Catalog ของตารางที่เกี่ยวกับ "รายงาน R"', ''];
  out.push(`**Server:** PostgreSQL 9.6.24 @ ${CFG.host}:${CFG.port}/${CFG.database}`);
  out.push(`**Generated:** ${new Date().toISOString()}`);
  out.push(`**Total tables in scope:** ${all.length}`);
  out.push('');

  for (const [label] of FAMILY_PATTERNS) {
    const tabs = [...familyOf.values()].filter(x => x.family === label)
      .sort((a, b) => a.table_name.localeCompare(b.table_name, undefined, { numeric: true }));
    if (tabs.length === 0) continue;
    out.push(`## ${label} (${tabs.length} tables)`);
    out.push('');
    for (const t of tabs) {
      console.error(`describe: ${t.table_schema}.${t.table_name}`);
      const info = await describe(t.table_schema, t.table_name);
      out.push(`### \`${t.table_schema}.${t.table_name}\` — rows: ${info.rowCount}`);
      out.push('');
      // column table
      out.push('| # | column | type | nullable |');
      out.push('|---|--------|------|----------|');
      info.cols.forEach((col, i) => {
        let typ = col.data_type;
        if (col.maxlen) typ += `(${col.maxlen})`;
        else if (col.np) typ += `(${col.np}${col.ns != null ? `,${col.ns}` : ''})`;
        out.push(`| ${i + 1} | ${col.column_name} | ${typ} | ${col.is_nullable === 'YES' ? 'Y' : 'N'} |`);
      });
      out.push('');
      // sample rows
      if (info.sample.length > 0) {
        out.push('<details><summary>sample rows</summary>');
        out.push('');
        out.push('```json');
        for (const r of info.sample) {
          // truncate long values
          const trimmed = {};
          for (const [k, v] of Object.entries(r)) {
            if (typeof v === 'string' && v.length > 120) trimmed[k] = v.slice(0, 117) + '…';
            else trimmed[k] = v;
          }
          out.push(JSON.stringify(trimmed));
        }
        out.push('```');
        out.push('</details>');
        out.push('');
      }
    }
  }

  await c.end();
  fs.writeFileSync(path.join(__dirname, 'CATALOG.md'), out.join('\n'), 'utf8');
  console.error(`\nwrote CATALOG.md (${(fs.statSync(path.join(__dirname, 'CATALOG.md')).size / 1024).toFixed(1)} KB, ${out.length} lines)`);
})().catch(e => { console.error('FATAL', e); process.exit(1); });

const fs = require('fs');
const path = require('path');
const D = require('./data');

// CSV helper — RFC4180 quoting, UTF-8 BOM for Excel/Thai
function csvCell(v){
  v = (v==null?'':String(v));
  if(/[",\n\r]/.test(v)) v = '"' + v.replace(/"/g,'""') + '"';
  return v;
}
function toCSV(rows){
  return '﻿' + rows.map(r=>r.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
function write(name, rows){
  const p = path.join(__dirname, name);
  fs.writeFileSync(p, toCSV(rows), 'utf8');
  console.log('CSV written:', name, '(', rows.length-1, 'rows )');
}

// ---------- 1) TestRail format ----------
// TestRail CSV import maps: Section, Title, Type, Priority, Preconditions, Steps, Expected Result, References
const trHeader = ['Section','Lot','Title','Type','Priority','Preconditions','Steps','Expected Result','References','Test Data'];
const trRows = [trHeader];
D.testCases.forEach(t=>{
  trRows.push([t.scenario, `Lot ${t.lot}`, `${t.id} ${t.title}`, t.type, t.priority, t.precondition, t.steps, t.expected, t.trace, t.testData]);
});
write('TestCases_TestRail.csv', trRows);

// ---------- 2) Jira format ----------
// Generic Jira CSV import (works with/without Xray). Steps+Expected folded into Description.
// Lot rides in both Fix Version (so Jira can plan/filter releases natively) and Labels.
const jiraHeader = ['Issue Type','Summary','Priority','Component','Fix Version','Labels','Description'];
const jiraPriMap = { P1:'Highest', P2:'High', P3:'Medium' };
const jiraRows = [jiraHeader];
D.testCases.forEach(t=>{
  const desc = `*Lot:* ${t.lot}\n*Trace:* ${t.trace}\n*Type:* ${t.type}\n\n*Pre-condition:*\n${t.precondition}\n\n*Test Steps:*\n${t.steps}\n\n*Expected Result:*\n${t.expected}\n\n*Test Data:*\n${t.testData}`;
  jiraRows.push(['Test', `${t.id} ${t.title}`, jiraPriMap[t.priority]||'Medium', t.scenario, `Lot ${t.lot}`, `Lot${t.lot},${t.scenario},${t.type}`, desc]);
});
write('TestCases_Jira.csv', jiraRows);

// ---------- 3) Xray / Zephyr step-by-step format (one row per step) ----------
// For tools that import test steps as separate rows linked by Test Case Identifier.
const xrayHeader = ['TCID','Lot','Summary','Priority','Trace','Pre-condition','Step Index','Action','Data','Expected Result'];
const xrayRows = [xrayHeader];
function splitSteps(t){
  // split numbered steps "1. ... \n2. ..." or newline-separated; fallback single step
  const raw = t.steps || '';
  let parts = raw.split(/\n(?=\d+[.)]\s)/).map(s=>s.trim()).filter(Boolean);
  if(parts.length<=1){ parts = raw.split(/\n/).map(s=>s.trim()).filter(Boolean); }
  if(parts.length===0) parts=[raw];
  return parts;
}
D.testCases.forEach(t=>{
  const parts = splitSteps(t);
  parts.forEach((p,i)=>{
    xrayRows.push([
      t.id,
      i===0?t.lot:'',
      i===0?`${t.id} ${t.title}`:'',
      i===0?t.priority:'',
      i===0?t.trace:'',
      i===0?t.precondition:'',
      i+1,
      p.replace(/^\d+[.)]\s*/,''),
      i===0?t.testData:'',
      i===parts.length-1?t.expected:''
    ]);
  });
});
write('TestCases_Xray_Steps.csv', xrayRows);

// ---------- 4) Detailed step-by-step (SLA + AutoAssign) ----------
const detHeader = ['TCID','Title','Trace','Priority','Type','Objective','Pre-condition','Test Data','Step #','Action','Expected Result'];
const detRows = [detHeader];
[...D.detailSLA, ...D.detailAutoAssign].forEach(tc=>{
  tc.steps.forEach((s,i)=>{
    detRows.push([
      tc.id,
      i===0?tc.title:'',
      i===0?tc.trace:'',
      i===0?tc.priority:'',
      i===0?tc.type:'',
      i===0?tc.objective:'',
      i===0?tc.precondition:'',
      i===0?tc.testData:'',
      i+1, s[0], s[1]
    ]);
  });
});
write('TestCases_Detailed_SLA_AutoAssign.csv', detRows);

console.log('All CSVs generated in', __dirname);

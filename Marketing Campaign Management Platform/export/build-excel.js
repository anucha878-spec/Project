const ExcelJS = require('exceljs');
const path = require('path');
const D = require('./data');

const OUT = path.join(__dirname, 'MCMP_Test_Artifacts.xlsx');

const HEADER_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };
const HEADER_FONT = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
const TITLE_FONT = { bold: true, size: 14, color: { argb: 'FF1F4E78' } };
const BORDER = { top:{style:'thin',color:{argb:'FFBFBFBF'}}, left:{style:'thin',color:{argb:'FFBFBFBF'}}, bottom:{style:'thin',color:{argb:'FFBFBFBF'}}, right:{style:'thin',color:{argb:'FFBFBFBF'}} };

function priColor(p){ return p==='P1'?'FFFFC7CE':p==='P2'?'FFFFEB9C':p==='P3'?'FFC6EFCE':'FFFFFFFF'; }
function typeColor(t){ return /Negative/i.test(t)?'FFFCE4D6':/Boundary/i.test(t)?'FFFFF2CC':/Positive/i.test(t)?'FFE2EFDA':'FFFFFFFF'; }
function lotColor(l){ return l===1?'FFD9E7FD':l===2?'FFDDF3E4':l===3?'FFFDE2E4':'FFFFFFFF'; }

function styleHeaderRow(row){
  row.eachCell(c=>{ c.fill=HEADER_FILL; c.font=HEADER_FONT; c.alignment={vertical:'middle',horizontal:'center',wrapText:true}; c.border=BORDER; });
  row.height = 28;
}
function applyBody(ws, startRow){
  for(let r=startRow; r<=ws.rowCount; r++){
    const row=ws.getRow(r);
    row.eachCell(c=>{ c.alignment={vertical:'top',wrapText:true}; c.border=BORDER; if(!c.font) c.font={size:10}; else c.font={...c.font,size:10}; });
  }
}

function sheetFromAoA(wb, name, aoa, widths){
  const ws = wb.addWorksheet(name, { views:[{state:'frozen', ySplit:1}] });
  aoa.forEach(r=>ws.addRow(r));
  if(widths) widths.forEach((w,i)=>ws.getColumn(i+1).width=w);
  styleHeaderRow(ws.getRow(1));
  applyBody(ws, 2);
  ws.autoFilter = { from:{row:1,column:1}, to:{row:1,column:aoa[0].length} };
  return ws;
}

(async () => {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'MCMP QA'; wb.created = new Date();

  // 0. Cover / Index
  const cover = wb.addWorksheet('0.Index');
  cover.getColumn(1).width=4; cover.getColumn(2).width=34; cover.getColumn(3).width=80;
  cover.mergeCells('B2:C2'); cover.getCell('B2').value='MCMP — Test Artifacts'; cover.getCell('B2').font={bold:true,size:18,color:{argb:'FF1F4E78'}};
  cover.mergeCells('B3:C3'); cover.getCell('B3').value='Marketing Campaign Management Platform (Project 20240278) — อ้างอิง BRD v0.1'; cover.getCell('B3').font={italic:true,size:11};
  const index = [
    ['#','Sheet','เนื้อหา'],
    [1,'1.Project Overview','ภาพรวมโครงการ'],
    [2,'2.Process Workflow','สรุปขั้นตอน + Business Rule แต่ละ Process'],
    [3,'3.RTM','Requirement Traceability Matrix'],
    [4,'4.Test Scenarios','รายการ Scenario'],
    [5,'5.Test Cases (All)','Test Case ทั้งหมด 180 รายการ (รวม GrowthAi +25)'],
    [6,'6.TC Detail-SLA','Test Case รายละเอียดเต็ม โมดูล SLA'],
    [7,'7.TC Detail-AutoAssign','Test Case รายละเอียดเต็ม โมดูล Auto Assign'],
    [8,'8.Test Data','Test Data Matrix'],
    [9,'9.Defect-Prone Areas','พื้นที่เสี่ยงเกิด defect'],
    [10,'10.RACI','RACI Matrix'],
    [11,'11.Exec Tracker','Test Execution Tracker (template)'],
    [12,'12.Open Issues','ประเด็นที่ต้อง clarify'],
  ];
  let rr=5; index.forEach((r,i)=>{ const row=cover.getRow(rr++); row.getCell(1).value=r[0]; row.getCell(2).value=r[1]; row.getCell(3).value=r[2]; if(i===0){ row.eachCell(c=>{c.fill=HEADER_FILL;c.font=HEADER_FONT;c.border=BORDER;}); } else { [1,2,3].forEach(ci=>{row.getCell(ci).border=BORDER;}); } });

  // 1. Project Overview
  sheetFromAoA(wb, '1.Project Overview', D.projectOverview, [24, 95]);
  // 2. Process Workflow
  sheetFromAoA(wb, '2.Process Workflow', D.processWorkflows, [18, 12, 48, 60]);
  // 3. RTM
  sheetFromAoA(wb, '3.RTM', D.rtm, [16, 40, 12, 18, 10]);
  // 4. Scenarios
  sheetFromAoA(wb, '4.Test Scenarios', D.scenarios, [12, 60, 22]);

  // 5. Test Cases (All)
  const tcHeader = ['TC ID','Lot','Scenario','Trace (Process Step)','Title','Type','Priority','Pre-condition','Test Steps','Expected Result','Test Data'];
  const tcWs = wb.addWorksheet('5.Test Cases (All)', { views:[{state:'frozen', ySplit:1, xSplit:1}] });
  tcWs.addRow(tcHeader);
  D.testCases.forEach(t=>tcWs.addRow([t.id,t.lot,t.scenario,t.trace,t.title,t.type,t.priority,t.precondition,t.steps,t.expected,t.testData]));
  [12,6,10,20,38,11,9,30,38,46,24].forEach((w,i)=>tcWs.getColumn(i+1).width=w);
  styleHeaderRow(tcWs.getRow(1));
  applyBody(tcWs, 2);
  for(let r=2;r<=tcWs.rowCount;r++){
    const row=tcWs.getRow(r);
    row.getCell(7).fill={type:'pattern',pattern:'solid',fgColor:{argb:priColor(row.getCell(7).value)}};
    row.getCell(7).alignment={vertical:'middle',horizontal:'center'};
    row.getCell(6).fill={type:'pattern',pattern:'solid',fgColor:{argb:typeColor(row.getCell(6).value)}};
    row.getCell(2).fill={type:'pattern',pattern:'solid',fgColor:{argb:lotColor(row.getCell(2).value)}};
    row.getCell(2).alignment={vertical:'middle',horizontal:'center'};
    row.getCell(2).font={bold:true};
  }
  tcWs.autoFilter={from:{row:1,column:1},to:{row:1,column:tcHeader.length}};

  // 6 & 7. Detailed test cases
  function detailSheet(name, items){
    const ws = wb.addWorksheet(name);
    [16,20,46,52].forEach((w,i)=>ws.getColumn(i+1).width=w);
    items.forEach(tc=>{
      const t1=ws.addRow([tc.id+'  |  '+tc.title]); ws.mergeCells(`A${t1.number}:D${t1.number}`);
      t1.getCell(1).font={bold:true,size:12,color:{argb:'FFFFFFFF'}}; t1.getCell(1).fill=HEADER_FILL; t1.getCell(1).alignment={wrapText:true,vertical:'middle'}; t1.height=24;
      const meta=[['Trace',tc.trace],['Priority',tc.priority],['Type',tc.type],['Objective',tc.objective],['Pre-condition',tc.precondition],['Test Data',tc.testData]];
      meta.forEach(m=>{ const row=ws.addRow([m[0],m[1]]); ws.mergeCells(`B${row.number}:D${row.number}`); row.getCell(1).font={bold:true,size:10}; row.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FFEFEFEF'}}; row.getCell(1).border=BORDER; row.getCell(2).border=BORDER; row.getCell(2).alignment={wrapText:true,vertical:'top'}; row.getCell(2).font={size:10}; });
      const sh=ws.addRow(['Step #','Action','Expected Result','']); ws.mergeCells(`C${sh.number}:D${sh.number}`); styleHeaderRow(sh);
      tc.steps.forEach((s,i)=>{ const row=ws.addRow([i+1,s[0],s[1],'']); ws.mergeCells(`C${row.number}:D${row.number}`); row.getCell(1).alignment={horizontal:'center',vertical:'top'}; [1,2,3].forEach(ci=>{row.getCell(ci).border=BORDER;row.getCell(ci).alignment={wrapText:true,vertical:'top'};row.getCell(ci).font={size:10};}); });
      ws.addRow([]);
    });
    return ws;
  }
  detailSheet('6.TC Detail-SLA', D.detailSLA);
  detailSheet('7.TC Detail-AutoAssign', D.detailAutoAssign);

  // 8. Test Data
  sheetFromAoA(wb, '8.Test Data', D.testDataMatrix, [46, 50, 24]);
  // 9. Defect-Prone
  sheetFromAoA(wb, '9.Defect-Prone Areas', D.defectProne, [34, 44, 24, 40]);
  // 10. RACI
  const raciWs = sheetFromAoA(wb, '10.RACI', D.raci, [42, 8, 10, 12, 20, 8]);
  raciWs.addRow([]); raciWs.addRow(['R = Responsible, A = Accountable, C = Consulted, I = Informed']);

  // 11. Exec Tracker
  const exWs = wb.addWorksheet('11.Exec Tracker', { views:[{state:'frozen', ySplit:1}] });
  exWs.addRow(D.execTrackerHeader);
  D.testCases.forEach(t=>exWs.addRow([t.id,t.lot,t.scenario,t.title,t.priority,t.type,'','','Not Run','','']));
  [12,6,10,40,9,11,14,14,14,12,12,30].forEach((w,i)=>exWs.getColumn(i+1).width=w);
  styleHeaderRow(exWs.getRow(1));
  applyBody(exWs,2);
  // data validation for Status. Column letters shift by one because of the Lot column:
  // A=TC ID, B=Lot, C=Module, D=Title, E=Priority, F=Type, G=Tester, H=Planned, I=Executed, J=Status
  for(let r=2;r<=exWs.rowCount;r++){
    exWs.getCell(`J${r}`).dataValidation={type:'list',allowBlank:true,formulae:['"Not Run,Pass,Fail,Blocked,N/A"']};
    exWs.getCell(`E${r}`).fill={type:'pattern',pattern:'solid',fgColor:{argb:priColor(exWs.getCell(`E${r}`).value)}};
    exWs.getCell(`E${r}`).alignment={horizontal:'center'};
    exWs.getCell(`B${r}`).fill={type:'pattern',pattern:'solid',fgColor:{argb:lotColor(exWs.getCell(`B${r}`).value)}};
    exWs.getCell(`B${r}`).alignment={horizontal:'center'};
    exWs.getCell(`B${r}`).font={bold:true};
  }
  exWs.autoFilter={from:{row:1,column:1},to:{row:1,column:D.execTrackerHeader.length}};

  // 12. Open Issues
  sheetFromAoA(wb, '12.Open Issues', D.openIssues, [6, 56, 20, 18, 14]);

  // 13. Production Lots
  const lotWs = sheetFromAoA(wb, '13.Production Lots', D.lots, [6, 74, 16, 10, 12]);
  const lotCount = D.lots.slice(1).map(r => [r[0], D.testCases.filter(t => t.lot === r[0]).length]);
  lotWs.addRow([]);
  lotWs.addRow(['ตรวจยอด: จำนวน TC ที่ map ได้จริงต่อ Lot']);
  lotCount.forEach(([l, n]) => lotWs.addRow([l, `${n} TC`]));
  lotWs.addRow(['รวม', `${D.testCases.length} TC`]);

  await wb.xlsx.writeFile(OUT);
  console.log('Excel written:', OUT, '| sheets:', wb.worksheets.length, '| test cases:', D.testCases.length);
})().catch(e=>{ console.error(e); process.exit(1); });

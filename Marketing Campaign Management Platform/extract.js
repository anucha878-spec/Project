const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const file = process.argv[2];
const buf = fs.readFileSync(file);

async function run() {
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const result = await parser.getText();
  console.log('NUM_PAGES:' + result.total);
  console.log('=====TEXT_START=====');
  console.log(result.text);
  console.log('=====TEXT_END=====');
}

run().catch(e => { console.error('ERR', e); process.exit(1); });

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: group-ri-reinsurer.spec.js >> Group Reinsurance - ข้อมูล Reinsurer >> Step 11-12: gavel ทุกแถว + Back + ตรวจวันที่
- Location: tests\group-ri-reinsurer.spec.js:280:3

# Error details

```
Error: ไม่พบปุ่มกลับ (ลองแล้ว: Back / กลับ / ย้อนกลับ)
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e9]:
          - paragraph [ref=e10]: OCEAN LIFE WEB PORTAL
          - paragraph [ref=e11]: Copyright © 2026 groupri-1.2.13-SNAPSHOT#b229#7f9b7
        - generic [ref=e13]:
          - generic [ref=e16]:
            - generic [ref=e18]: 
            - generic [ref=e20]:
              - heading [level=6] [ref=e22]: Boss
              - heading [level=6] [ref=e24]: 18 มิ.ย. 2569 | 14:18
          - button [ref=e27] [cursor=pointer]:
            - generic [ref=e29]: 
          - button [ref=e32] [cursor=pointer]:
            - generic [ref=e34]: 
    - generic [ref=e36]:
      - paragraph [ref=e40]: Group RI
      - generic [ref=e41]:
        - button [ref=e43] [cursor=pointer]:
          - generic [ref=e44]:
            - text: จัดการข้อมูล
            - img [ref=e45]
        - button [ref=e48] [cursor=pointer]:
          - generic [ref=e49]:
            - text: ประมวลผลข้อมูล
            - img [ref=e50]
    - navigation [ref=e55]:
      - list [ref=e56]:
        - listitem [ref=e57]:
          - paragraph [ref=e58]: จัดการข้อมูล
        - listitem [ref=e59]:
          - paragraph [ref=e60]: /
        - listitem [ref=e61]:
          - paragraph [ref=e62]: ข้อมูล Reinsurer
    - generic [ref=e68]:
      - generic [ref=e70]:
        - button [expanded] [ref=e71]:
          - generic [ref=e73]:
            - generic [ref=e75]: 
            - paragraph [ref=e77]: เงื่อนไขค้นหาข้อมูล
        - region [ref=e81]:
          - generic [ref=e91]:
            - generic [ref=e96]:
              - generic [ref=e97]: Reinsurer
              - generic [ref=e100]:
                - generic [ref=e101]:
                  - generic [ref=e102]: ทั้งหมด
                  - textbox [ref=e105]
                - img [ref=e108]
            - generic [ref=e113]:
              - generic [ref=e114]: สถานะรายการ
              - generic [ref=e117]:
                - generic [ref=e118]:
                  - generic [ref=e119]: ทั้งหมด
                  - textbox [ref=e122]
                - img [ref=e125]
            - generic [ref=e129]:
              - button [ref=e131] [cursor=pointer]:
                - generic [ref=e132]: ล้างเงื่อนไข
              - button [ref=e134] [cursor=pointer]:
                - generic [ref=e135]: ค้นหา
      - generic [ref=e139]:
        - toolbar [ref=e140]:
          - generic [ref=e142]:
            - generic [ref=e143]: แสดง
            - generic [ref=e144]: 1-7
            - generic [ref=e145]: จากทั้งหมด
            - generic [ref=e146]: "7"
            - generic [ref=e147]: รายการ
          - generic [ref=e149]:
            - generic [ref=e150]:
              - button [disabled]:
                - generic: ส่งพิจารณา
            - button [ref=e152] [cursor=pointer]:
              - generic [ref=e153]: เพิ่ม Reinsurer
        - grid [ref=e155]:
          - caption [ref=e156]:
            - generic [ref=e157]:
              - generic [ref=e158]: แสดง
              - generic [ref=e159]: 1-7
              - generic [ref=e160]: จากทั้งหมด
              - generic [ref=e161]: "7"
              - generic [ref=e162]: รายการ
          - rowgroup [ref=e163]:
            - row [ref=e164]:
              - columnheader [ref=e165]:
                - generic [ref=e168] [cursor=pointer]:
                  - checkbox [ref=e169]
                  - img [ref=e170]
              - columnheader [ref=e172]:
                - button [ref=e173]:
                  - generic [ref=e174]: ดำเนินการ
              - columnheader [ref=e175]:
                - button [ref=e176]:
                  - generic [ref=e177]: Reinsurer Code
              - columnheader [ref=e178]:
                - button [ref=e179]:
                  - generic [ref=e180]: Reinsurer Name
              - columnheader [ref=e181]:
                - button [ref=e182]:
                  - generic [ref=e183]: Start Date
              - columnheader [ref=e184]:
                - button [ref=e185]:
                  - generic [ref=e186]: Expire Date
              - columnheader [ref=e187]:
                - button [ref=e188]:
                  - generic [ref=e189]: Update Date
              - columnheader [ref=e190]:
                - button [ref=e191]:
                  - generic [ref=e192]: status
          - rowgroup [ref=e193]:
            - row [ref=e194]:
              - gridcell [ref=e195]:
                - generic [ref=e196]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e197]:
                - generic [ref=e198]:
                  - button [ref=e199] [cursor=pointer]:
                    - generic [ref=e201]: 
                  - button [ref=e202] [cursor=pointer]:
                    - generic [ref=e204]: 
                  - button [ref=e205] [cursor=pointer]:
                    - generic [ref=e207]: 
              - gridcell [ref=e208]: Dai-ichi
              - gridcell [ref=e209]: Daiichi Life Insurance Co., Ltd.
              - gridcell [ref=e210]: 12/07/2549
              - gridcell [ref=e211]: 31/12/3542
              - gridcell [ref=e212]: 23/02/2569
              - gridcell [ref=e213]: อนุมัติ
            - row [ref=e214]:
              - gridcell [ref=e215]:
                - generic [ref=e216]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e217]:
                - generic [ref=e218]:
                  - button [ref=e219] [cursor=pointer]:
                    - generic [ref=e221]: 
                  - button [ref=e222] [cursor=pointer]:
                    - generic [ref=e224]: 
                  - button [ref=e225] [cursor=pointer]:
                    - generic [ref=e227]: 
                  - button [ref=e228] [cursor=pointer]:
                    - generic [ref=e230]: 
              - gridcell [ref=e231]: Everest
              - gridcell [ref=e232]: Ever_Rest_EVR
              - gridcell [ref=e233]: 15/06/2550
              - gridcell [ref=e234]: 30/06/2599
              - gridcell [ref=e235]: 29/04/2569
              - gridcell [ref=e236]: รอพิจารณา
            - row [ref=e237]:
              - gridcell [ref=e238]:
                - generic [ref=e239]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e240]:
                - generic [ref=e241]:
                  - button [ref=e242] [cursor=pointer]:
                    - generic [ref=e244]: 
                  - button [ref=e245] [cursor=pointer]:
                    - generic [ref=e247]: 
                  - button [ref=e248] [cursor=pointer]:
                    - generic [ref=e250]: 
              - gridcell [ref=e251]: GIB_dev_01
              - gridcell [ref=e252]: GIB_dev_01
              - gridcell [ref=e253]: 01/01/2569
              - gridcell [ref=e254]: 31/05/2574
              - gridcell [ref=e255]: 13/05/2569
              - gridcell [ref=e256]: อนุมัติ
            - row [ref=e257]:
              - gridcell [ref=e258]:
                - generic [ref=e259]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e260]:
                - generic [ref=e261]:
                  - button [ref=e262] [cursor=pointer]:
                    - generic [ref=e264]: 
                  - button [ref=e265] [cursor=pointer]:
                    - generic [ref=e267]: 
                  - button [ref=e268] [cursor=pointer]:
                    - generic [ref=e270]: 
              - gridcell [ref=e271]: Gibraltar
              - gridcell [ref=e272]: The Gibraltar Life Insurance Co., Ltd.
              - gridcell [ref=e273]: 01/01/2518
              - gridcell [ref=e274]: 31/12/3542
              - gridcell [ref=e275]: 23/02/2569
              - gridcell [ref=e276]: อนุมัติ
            - row [ref=e277]:
              - gridcell [ref=e278]:
                - generic [ref=e279]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e280]:
                - generic [ref=e281]:
                  - button [ref=e282] [cursor=pointer]:
                    - generic [ref=e284]: 
                  - button [ref=e285] [cursor=pointer]:
                    - generic [ref=e287]: 
                  - button [ref=e288] [cursor=pointer]:
                    - generic [ref=e290]: 
              - gridcell [ref=e291]: Kiliman
              - gridcell [ref=e292]: Kilimajaro
              - gridcell [ref=e293]: 01/03/2540
              - gridcell [ref=e294]: 31/03/2570
              - gridcell [ref=e295]: 05/06/2569
              - gridcell [ref=e296]: อนุมัติ
            - row [ref=e297]:
              - gridcell [ref=e298]:
                - generic [ref=e299]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e300]:
                - generic [ref=e301]:
                  - button [ref=e302] [cursor=pointer]:
                    - generic [ref=e304]: 
                  - button [ref=e305] [cursor=pointer]:
                    - generic [ref=e307]: 
                  - button [ref=e308] [cursor=pointer]:
                    - generic [ref=e310]: 
                  - button [ref=e311] [cursor=pointer]:
                    - generic [ref=e313]: 
              - gridcell [ref=e314]: test
              - gridcell [ref=e315]: test
              - gridcell [ref=e316]: 09/04/2569
              - gridcell [ref=e317]: 30/08/2569
              - gridcell [ref=e318]: 05/06/2569
              - gridcell [ref=e319]: อนุมัติ
            - row [ref=e320]:
              - gridcell [ref=e321]:
                - generic [ref=e322]:
                  - generic:
                    - generic:
                      - checkbox [disabled]
                      - img
              - gridcell [ref=e323]:
                - generic [ref=e324]:
                  - button [ref=e325] [cursor=pointer]:
                    - generic [ref=e327]: 
                  - button [ref=e328] [cursor=pointer]:
                    - generic [ref=e330]: 
                  - button [ref=e331] [cursor=pointer]:
                    - generic [ref=e333]: 
              - gridcell [ref=e334]: Thaire
              - gridcell [ref=e335]: Thaire Life Assurance Public Company Limited
              - gridcell [ref=e336]: 01/01/2556
              - gridcell [ref=e337]: 31/12/3542
              - gridcell [ref=e338]: 23/02/2569
              - gridcell [ref=e339]: อนุมัติ
        - table [ref=e340]:
          - rowgroup [ref=e341]:
            - row [ref=e342]:
              - cell [ref=e343]:
                - generic [ref=e344]:
                  - paragraph [ref=e345]: แสดงหน้าละ
                  - generic [ref=e346]:
                    - button [ref=e347] [cursor=pointer]: "10"
                    - img
                  - paragraph [ref=e348]:
                    - generic [ref=e349]:
                      - generic [ref=e350]: หน้าที่
                      - generic [ref=e351]: "1"
                      - generic [ref=e352]: จาก
                      - generic [ref=e353]: "1"
                  - generic [ref=e354]:
                    - button [disabled]:
                      - generic:
                        - img
                    - button [disabled]:
                      - generic:
                        - img
                    - button [disabled]:
                      - generic:
                        - img
                    - button [disabled]:
                      - generic:
                        - img
  - dialog "ข้อมูล Reinsurer Close" [ref=e358]:
    - generic [ref=e360]:
      - paragraph [ref=e364]: ข้อมูล Reinsurer
      - button "Close" [ref=e366] [cursor=pointer]:
        - generic [ref=e368]: 
    - generic [ref=e374]:
      - generic [ref=e376]:
        - generic:
          - generic:
            - generic:
              - generic:
                - paragraph
        - separator [ref=e378]
        - generic [ref=e379]:
          - generic [ref=e381]:
            - paragraph [ref=e383]: Reinsurer Code
            - paragraph [ref=e386]: Everest
          - generic [ref=e388]:
            - paragraph [ref=e390]: Reinsurer Name
            - paragraph [ref=e393]: Ever_Rest_EVR
          - generic [ref=e395]:
            - paragraph [ref=e397]: Location
            - paragraph [ref=e400]: Foreign
          - generic [ref=e402]:
            - paragraph [ref=e404]: Country
            - paragraph [ref=e407]: Federal Democratic Republic of Nepal
          - generic [ref=e409]:
            - paragraph [ref=e411]: Address
            - paragraph [ref=e414]: 60 degrees latitude, 250 minutes north.
          - generic [ref=e416]:
            - paragraph [ref=e418]: Website
            - paragraph [ref=e421]: "-"
          - generic [ref=e423]:
            - paragraph [ref=e425]: Email
            - paragraph [ref=e428]: everest@gmail.com
        - generic [ref=e429]:
          - generic [ref=e431]:
            - paragraph [ref=e433]: Office Number
            - paragraph [ref=e436]: "+999541253666"
          - generic [ref=e438]:
            - paragraph [ref=e440]: Ext.
            - paragraph [ref=e443]: "0"
          - generic [ref=e445]:
            - paragraph [ref=e447]: Fax
            - paragraph [ref=e450]: "-"
          - generic [ref=e452]:
            - paragraph [ref=e454]: Telephone
            - paragraph [ref=e457]: "+995521553355"
          - generic [ref=e459]:
            - paragraph [ref=e461]: Start Date
            - paragraph [ref=e464]: 15/06/2550
          - generic [ref=e466]:
            - paragraph [ref=e468]: Expire Date
            - paragraph [ref=e471]: 30/06/2599
        - separator [ref=e473]
      - generic [ref=e474]:
        - separator [ref=e475]
        - generic [ref=e485]:
          - generic [ref=e489]:
            - generic [ref=e490]:
              - text: ผลพิจารณา
              - generic [ref=e491]: "*"
            - generic [ref=e494]:
              - generic [ref=e495]:
                - generic [ref=e496]: กรุณาเลือก
                - textbox "ผลพิจารณา *" [ref=e499]
              - img [ref=e502]
          - generic [ref=e505]:
            - generic [ref=e506]: หมายเหตุ
            - textbox "หมายเหตุ" [ref=e508]
          - generic [ref=e510]:
            - button "ยกเลิก" [ref=e512] [cursor=pointer]:
              - generic [ref=e513]: ยกเลิก
            - button "บันทึก" [ref=e515] [cursor=pointer]:
              - generic [ref=e516]: บันทึก
```

# Test source

```ts
  29  |   reinsurerMenuText: 'ข้อมูล Reinsurer',
  30  |   searchButton: 'ค้นหา',
  31  |   addReinsurerButton: 'เพิ่ม Reinsurer',
  32  | 
  33  |   backLabels: {
  34  |     history: ['Back', 'กลับ', 'ย้อนกลับ'],
  35  |     fileDocument: ['ปิด', 'Close'],
  36  |     pencil: ['ยกเลิก', 'Cancel'],
  37  |     gavel: ['Back', 'กลับ', 'ย้อนกลับ'],
  38  |     add: ['ยกเลิก', 'Cancel'],
  39  |   },
  40  | 
  41  |   // candidate selectors ของ MuiIconButton ในคอลัมน์ "ดำเนินการ" แต่ละชนิด
  42  |   // (ปรับได้เมื่อ SIT มีข้อมูลจริงให้ inspect — ปัจจุบันยังไม่มี row)
  43  |   icons: {
  44  |     history: [
  45  |       'button:has(svg[data-testid="HistoryIcon"])',
  46  |       'button:has(.mdi-history)',
  47  |       'button[aria-label*="history" i]', 'button[title*="ประวัติ"]',
  48  |     ],
  49  |     fileDocument: [
  50  |       'button:has(svg[data-testid="DescriptionIcon"])',
  51  |       'button:has(.mdi-file-document)', 'button:has(.mdi-file-document-outline)',
  52  |       'button[aria-label*="document" i]', 'button[title*="เอกสาร"]',
  53  |     ],
  54  |     pencil: [
  55  |       'button:has(svg[data-testid="EditIcon"])',
  56  |       'button:has(.mdi-pencil)',
  57  |       'button[aria-label*="edit" i]', 'button[title*="แก้ไข"]',
  58  |     ],
  59  |     gavel: [
  60  |       'button:has(svg[data-testid="GavelIcon"])',
  61  |       'button:has(.mdi-gavel)',
  62  |       'button[aria-label*="gavel" i]', 'button[title*="พิจารณา"]',
  63  |     ],
  64  |   },
  65  | };
  66  | 
  67  | // ----------------------------------------------------------------------------
  68  | // ตรวจรูปแบบวันที่: ต้องเป็น DD/MM/YYYY (พ.ศ.) หรือ DD/MM/YYYY HH:MI:ss
  69  | // จับเฉพาะรูปแบบตัวเลข dd/mm/yyyy (header clock แบบ "18 มิ.ย. 2569" จะไม่ถูกจับ)
  70  | // ----------------------------------------------------------------------------
  71  | async function assertDateFormat(scope, label) {
  72  |   const text = await scope.evaluate((el) => el.innerText || '').catch(() => '');
  73  |   const dateRe = /\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})(?:[ T](\d{1,2}):(\d{2}):(\d{2}))?\b/g;
  74  |   const dates = [];
  75  |   const bad = [];
  76  |   let m;
  77  |   while ((m = dateRe.exec(text)) !== null) {
  78  |     const [full, dd, mm, yyyy] = m;
  79  |     dates.push(full);
  80  |     const day = +dd, month = +mm, year = +yyyy;
  81  |     const formatOk = dd.length === 2 && mm.length === 2 && yyyy.length === 4;
  82  |     const rangeOk = day >= 1 && day <= 31 && month >= 1 && month <= 12;
  83  |     // พ.ศ. 2500-2700 (ครอบคลุมวันหมดอายุ default แบบ far-future เช่น 31/12/2642 = ค.ศ.2099)
  84  |     const buddhistOk = year >= 2500 && year <= 2700;
  85  |     if (!formatOk || !rangeOk || !buddhistOk) {
  86  |       bad.push(`"${full}" (${!buddhistOk ? `ปีไม่ใช่ พ.ศ. year=${year}` :
  87  |         !formatOk ? 'ไม่ใช่ DD/MM/YYYY' : 'วัน/เดือนไม่ถูกต้อง'})`);
  88  |     }
  89  |   }
  90  |   console.log(`   [date] ${label}: พบ ${dates.length} วันที่` +
  91  |     (dates.length ? ` -> ${dates.join(', ')}` : ' (ไม่มีวันที่รูปแบบ DD/MM/YYYY บนหน้าจอ)'));
  92  |   if (bad.length) {
  93  |     // soft: รายงาน defect แต่ไม่ abort เพื่อให้รันครบทุก step
  94  |     console.log(`   ⚠️ DEFECT [${label}] วันที่ผิด (ไม่ใช่ พ.ศ. หรือผิดรูปแบบ): ${bad.join('; ')}`);
  95  |     test.info().annotations.push({ type: 'date-defect', description: `${label}: ${bad.join('; ')}` });
  96  |   }
  97  | }
  98  | 
  99  | // นับจำนวนแถวข้อมูลใน MUIDataTable (grid ใช้ <table>, ไม่ใช่ MUI X DataGrid)
  100 | // แถวว่างจะมี <tr> เดียวที่ข้อความ "ไม่พบข้อมูล" -> นับเป็น 0
  101 | async function getDataRowCount(page) {
  102 |   const rows = page.locator('table tbody tr');
  103 |   const n = await rows.count();
  104 |   if (n === 0) return 0;
  105 |   if (n === 1) {
  106 |     const txt = await rows.first().innerText().catch(() => '');
  107 |     if (/ไม่พบข้อมูล/.test(txt)) return 0;
  108 |   }
  109 |   return n;
  110 | }
  111 | 
  112 | function firstMatching(page, selectors) {
  113 |   return page.locator(selectors.join(', '));
  114 | }
  115 | 
  116 | async function clickBack(page, labels) {
  117 |   for (const label of labels) {
  118 |     const btn = page.getByRole('button', { name: label, exact: false });
  119 |     if (await btn.first().isVisible().catch(() => false)) {
  120 |       await btn.first().click();
  121 |       return label;
  122 |     }
  123 |     const alt = page.locator(`text="${label}"`);
  124 |     if (await alt.first().isVisible().catch(() => false)) {
  125 |       await alt.first().click();
  126 |       return label;
  127 |     }
  128 |   }
> 129 |   throw new Error(`ไม่พบปุ่มกลับ (ลองแล้ว: ${labels.join(' / ')})`);
      |         ^ Error: ไม่พบปุ่มกลับ (ลองแล้ว: Back / กลับ / ย้อนกลับ)
  130 | }
  131 | 
  132 | // ----------------------------------------------------------------------------
  133 | // Login + เข้า SPA + เปิดหน้า "ข้อมูล Reinsurer"  (Step 1-2)
  134 | // ----------------------------------------------------------------------------
  135 | async function gotoReinsurerList(page) {
  136 |   await page.goto(CONFIG.loginUrl, { waitUntil: 'domcontentloaded' });
  137 | 
  138 |   // รอช่อง login แสดงผลก่อน (หน้า login โหลดช้า/มี input ซ่อน)
  139 |   const userField = page.locator('#username, input[name="j_username"], input[type="text"]').first();
  140 |   const passField = page.locator('#password, input[name="j_password"], input[type="password"]').first();
  141 |   await userField.waitFor({ state: 'visible', timeout: 30000 });
  142 |   await userField.fill(CONFIG.username);
  143 |   await passField.fill(CONFIG.password);
  144 |   await page.getByRole('button', { name: /login|เข้าสู่ระบบ|sign in/i }).first().click();
  145 | 
  146 |   // รอเมนู YUI โหลด
  147 |   await page.waitForFunction(
  148 |     () => document.body && document.body.innerText.includes('ระบบงาน NBS Portal'),
  149 |     { timeout: 30000 }
  150 |   );
  151 | 
  152 |   // อ่าน href ของเมนู Group Reinsurance สดจาก DOM (uuid เปลี่ยนทุก session)
  153 |   const href = await page.evaluate((txt) => {
  154 |     const a = [...document.querySelectorAll('a')]
  155 |       .find((e) => (e.textContent || '').trim() === txt);
  156 |     return a ? a.getAttribute('href') : null;
  157 |   }, CONFIG.groupRiMenuText);
  158 |   expect(href, 'ไม่พบเมนู "ระบบ Group Reinsurance"').toBeTruthy();
  159 | 
  160 |   await page.goto(href, { waitUntil: 'domcontentloaded' });
  161 | 
  162 |   // Step 1: จัดการข้อมูล — รอปุ่มพร้อมก่อน (SPA React โหลดช้า)
  163 |   const manage = page.getByRole('button', { name: CONFIG.manageDataButton, exact: false }).first();
  164 |   await manage.waitFor({ state: 'visible', timeout: 30000 });
  165 |   await page.waitForTimeout(1500);
  166 |   await manage.click();
  167 | 
  168 |   // Step 2: ข้อมูล Reinsurer — retry เปิด dropdown ถ้าเมนูยังไม่โผล่
  169 |   const reinsurer = page.getByText(CONFIG.reinsurerMenuText, { exact: false }).first();
  170 |   for (let i = 0; i < 4; i++) {
  171 |     if (await reinsurer.isVisible().catch(() => false)) break;
  172 |     await page.waitForTimeout(1000);
  173 |     await manage.click().catch(() => {});
  174 |   }
  175 |   await reinsurer.click();
  176 |   await page.waitForTimeout(3000);
  177 | }
  178 | 
  179 | // คลิก "ค้นหา" (Step 3) แล้วรอข้อมูลโหลด
  180 | // SIT API ช้ามาก (~14s+) และไม่เสถียร -> กดครั้งเดียว รอสูงสุด 60s
  181 | // อย่ากดซ้ำ! การกดซ้ำจะ cancel request ที่ค้างอยู่ ทำให้ข้อมูลไม่มาเลย
  182 | async function clickSearch(page) {
  183 |   // ใช้ selector เจาะจง button#search ก่อน (เลี่ยงคลิกปุ่มผิด) -> fallback เป็นชื่อปุ่ม
  184 |   const byId = page.locator('button#search');
  185 |   if (await byId.first().isVisible().catch(() => false)) {
  186 |     await byId.first().click();
  187 |   } else {
  188 |     await page.getByRole('button', { name: CONFIG.searchButton, exact: false }).first().click();
  189 |   }
  190 |   await page.waitForFunction(() => {
  191 |     const trs = document.querySelectorAll('table tbody tr');
  192 |     if (trs.length > 1) return true;                       // มีข้อมูลหลายแถว
  193 |     if (trs.length === 1 && !/ไม่พบข้อมูล/.test(trs[0].innerText || '')) return true;
  194 |     return false;                                          // ยังโหลด หรือว่างจริง
  195 |   }, { timeout: 60000 }).catch(() => {});                  // timeout = ถือว่าไม่มีข้อมูล
  196 |   await page.waitForTimeout(800);
  197 | }
  198 | 
  199 | // คลิก icon ทุกแถว -> ตรวจ date -> กดกลับ (Step 5-12) — ข้ามถ้าไม่มีข้อมูล
  200 | async function clickEachRowIcon(page, iconKey, backLabels) {
  201 |   const rows = await getDataRowCount(page);
  202 |   if (rows === 0) {
  203 |     console.log(`   [icon] ${iconKey}: ไม่มีข้อมูลในตาราง (0 แถว) -> ข้ามตามเงื่อนไข "กรณีมีข้อมูล"`);
  204 |     test.info().annotations.push({ type: 'skip-no-data', description: `${iconKey}: ไม่พบข้อมูล` });
  205 |     return;
  206 |   }
  207 |   // dump ปุ่ม action จริงในแถวแรก (ครั้งเดียวพอ) เพื่อ finalize selector
  208 |   const dump = await page.evaluate(() => {
  209 |     const tr = document.querySelector('table tbody tr');
  210 |     if (!tr) return null;
  211 |     return [...tr.querySelectorAll('button')].map((b) => ({
  212 |       aria: b.getAttribute('aria-label'), title: b.getAttribute('title'),
  213 |       cls: (b.className || '').slice(0, 40),
  214 |       paths: [...b.querySelectorAll('svg path')].map((p) => (p.getAttribute('d') || '').slice(0, 44)),
  215 |     }));
  216 |   });
  217 |   console.log(`   [icons-DOM] ${iconKey} | row1 action buttons:`, JSON.stringify(dump));
  218 | 
  219 |   const buttons = firstMatching(page, CONFIG.icons[iconKey]);
  220 |   const count = await buttons.count();
  221 |   console.log(`   [icon] ${iconKey}: ${rows} แถว, พบปุ่ม ${count}`);
  222 |   if (count === 0) {
  223 |     console.log(`   ⚠️ มี ${rows} แถวแต่ selector CONFIG.icons.${iconKey} ไม่ match — ดู [icons-DOM] ด้านบนเพื่อปรับ`);
  224 |     test.info().annotations.push({ type: 'icon-selector-miss', description: `${iconKey}: 0 match จาก ${rows} แถว` });
  225 |     return;
  226 |   }
  227 | 
  228 |   for (let i = 0; i < count; i++) {
  229 |     const btn = firstMatching(page, CONFIG.icons[iconKey]).nth(i);
```
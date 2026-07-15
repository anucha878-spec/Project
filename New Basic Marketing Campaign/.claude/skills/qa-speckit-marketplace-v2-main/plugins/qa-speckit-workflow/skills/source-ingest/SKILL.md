---
name: source-ingest
description: "QA Spec-Kit leg B upstream (stage 00-pre): completely ingest requirement content from ANY source — Confluence/Redmine wiki (recursive crawl of all child/linked pages), Word/PDF/Markdown/HTML/text, folders of exported docs, API specs, meeting notes — and snapshot it into spec-kit/<feature>/sources/ as faithful local files + a coverage manifest. Guarantees COMPLETE capture: every in-scope page, every linked child page, every attachment, every embedded image/diagram/flow (opened with vision so rules embedded in images are not lost), every table and exact detail (error text, boundary numbers, char limits, status codes), and — when the doc references a backend Swagger/REST endpoint — the real openapi.json spec fetched into sources/api/ (not just the URL). Fetches the live source ONCE so downstream /test-plan (00) and /requirement-review-generic (01) read the same local snapshot without re-crawling. Does NOT analyze/review requirements, generate TC, or write a business-analysis narrative — faithful capture only. Use at the very start of leg B when the requirement source is NOT a Spec-Kit spec.md."
allowed-tools: Bash(node:*)
---
<!-- qa-speckit:provision (auto) — copy bundled qa-shared/ into <project>/qa-shared/ (copy-if-missing) so relative refs resolve on any machine -->
> 🔧 **Setup (ทำเป็นสเต็ปแรก ครั้งเดียวต่อโปรเจกต์):** ให้แน่ใจว่าโปรเจกต์นี้มี `qa-shared/execution-report.js` + `qa-shared/evidence.js` + `qa-shared/CONVENTIONS.md` + `qa-shared/init-index.js` — ถ้ายังไม่มี ให้รันด้วย Bash เพื่อ copy จาก plugin bundle:
>
> ```bash
> node -e "try{require(process.env.CLAUDE_PLUGIN_ROOT+'/qa-shared/provision.js')}catch(e){}"
> ```
>
> ถ้า `CLAUDE_PLUGIN_ROOT` ไม่ถูกตั้ง: หา plugin `qa-speckit-workflow` ใต้ `~/.claude/plugins` แล้ว copy `qa-shared/{execution-report.js,evidence.js,CONVENTIONS.md,init-index.js}` มาไว้ที่ `qa-shared/` ของโปรเจกต์นี้


You are a **Senior QA Source Ingestion Specialist** working in a Spec-Kit + Claude Code AI Agent workflow.

หน้าที่: skill นี้เป็น **stage 00-pre (ต้น flow ขา B — Generic Source)** — **ดึงเนื้อหา requirement จากแหล่งต้นทางใดก็ได้ให้ครบทั้งหมด แล้ว snapshot เป็นไฟล์ local** ที่ `spec-kit/<feature>/sources/` เพื่อให้ downstream (`/test-plan` 00 + `/requirement-review-generic` 01) อ่านสำเนาเดียวกันต่อได้ — **ยิงแหล่งสดครั้งเดียว**

> 🎯 **พันธกิจเดียว: "ครบ + ตรง"** — ต้องได้ **เนื้อหาครบทุกหน้า/ไฟล์** และ **detail ครบทุกจุด** (ข้อความ error เป๊ะ / ตัวเลข boundary / char-limit / status-code / tooltip / กฎในภาพ). ถ้า ingest ตกแม้จุดเดียว → requirement review + atom + TC ปลายทางตกตามทั้งสาย

## ⚠️ ขอบเขตงาน (สำคัญ)
- ✅ **capture ตรง ๆ ให้ครบ** (faithful snapshot) + จัด inventory + coverage ledger เท่านั้น
- ❌ **ห้ามวิเคราะห์/รีวิว requirement** (งาน `/requirement-review-generic` 01) · **ห้ามสร้าง TC** (03) · **ห้ามเขียน business-analysis narrative/สรุปตีความ** (นั่นคือ `/ba-analysis`)
- ❌ **ห้ามสรุปย่อจนตก detail** — เก็บของจริงคำต่อคำ; ตีความทีหลังเป็นงาน 01
- ❌ **ห้าม hallucinate เนื้อหาที่แหล่งไม่มี** — เข้าไม่ถึง/ตีความไม่ออก → **หยุดถาม user** (ref: feedback_ask_before_acting)

## 📁 Output — `spec-kit/<feature>/sources/`
- 🧭 หา feature folder ไม่ชัด / ไม่มี `spec-kit/<feature>/` → **หยุดถาม user ก่อน** ว่าจะผูก feature ไหน หรือให้สร้างที่ไหน — **อย่าเดา path** (ref: feedback_ask_before_acting)
- 💾 เซฟลง:
  - `sources/crawl/` — เนื้อหาหน้า wiki/เอกสาร **จัดเป็น folder ต้นไม้ mirror โครง wiki จริง — ตั้งชื่อ folder ตาม title จริงของหน้าที่ไปอ่านมา** (ไม่ใช่ pageId / ไม่ใช่ flat):
    - **แต่ละหน้า = 1 folder ชื่อ = title จริง** (slugified ตามกฎด้านล่าง) เก็บ **`page.md`** (เนื้อหาหน้านั้น) ไว้ข้างใน
    - **child page = subfolder ใต้ parent** mirror ลำดับ parent→child ของ wiki เป๊ะ เช่น `crawl/คำร้องเวนคืน/บันทึกคำร้อง/page.md`
    - **รูป/diagram/attachment ของหน้านั้น = อยู่ folder เดียวกับ `page.md`** (co-locate) + `.notes.md` วางคู่กัน → inline `![img]` ชี้ relative **same-folder** `./<file>` (ดูเฟส 2 §inline image ref)
    - **หัวไฟล์ `page.md` ต้องคง URL / pageId / parent title ต้นทางไว้เสมอ** — folder เป็น title (human) ต้องมี machine-ref กลับเพื่อ trace/closure
  - `sources/_linked/` — หน้า **linked/referenced ที่อยู่นอก subtree** ที่ crawl (ไม่มี parent ในต้นไม้) — โครงเดียวกัน (folder ตาม title + `page.md` + assets co-located)
  - `sources/api/` — spec API/Swagger ที่ FS อ้าง (`<service>.openapi.json` เต็ม + `API-EXTRACT.md` เฉพาะ endpoint ที่เกี่ยว) — ดูเฟส 2 §API/Swagger
  - `sources/INVENTORY.md` — manifest + coverage ledger + **tree-map (folder path ↔ pageId/URL)** (ดูล่าง)
- 🏷️ **กฎตั้งชื่อ folder (slugify title จริง — บังคับ):**
  - **คงตัวอักษรไทย/อังกฤษ/ตัวเลข literal** (อ่านออกว่าเป็นหน้าอะไร) — อย่าแปลงเป็น pageId
  - แทนอักขระต้องห้ามของ filesystem `\ / : * ? " < > |` + control char + ขึ้นต้น/ลงท้ายด้วยช่องว่าง/จุด → `_` ; ยุบช่องว่างซ้ำเป็น `_` เดียว ; ตัดความยาว ~80 ตัว
  - **ชื่อชนกัน** (2 หน้า title เดียวกันใน parent เดียวกัน) → ต่อท้าย `__<pageId>` เฉพาะตัวที่ชน (อย่าเปลี่ยนทั้งคู่)
  - ยึด title จาก `<meta name="ajs-page-title">` / `<h1 id="title-text">` / REST `title` — ไม่ใช่ slug ใน URL
- 📒 **INDEX (บังคับ — deterministic):** source-ingest = สเตจแรกสุด (ขา B) → ถ้า `qa/00-INDEX.md` **ยังไม่มี** ให้สร้าง **สเกเลตันเต็มทุกแถวก่อน** ด้วย `node qa-shared/init-index.js spec-kit/<f>/qa "<feature-title>"` (ครบ 19 แถว 00-pre..10, หัวคอลัมน์ **`Skill`** ไม่ใช่ `Command`; ไม่ทับของเดิม). **ห้ามเขียน table เอง แบบบางส่วน/เปลี่ยนชื่อคอลัมน์**. จากนั้น **Edit เฉพาะแถว `00-pre`** → ✅ / วันที่ `YYYY-MM-DD` / แหล่งต้นทาง + จำนวนที่ ingest

---

## 🔁 กระบวนการ (4 เฟส — ทำครบทุกครั้ง)

### เฟส 1 — Enumerate ครบก่อน (ห้ามอ่านตาม whitelist)
**เห็นทั้งหมดก่อน แล้วค่อยดึง** (qa-shared/CONVENTIONS.md ข้อ 4b: enumerate → classify):
- **Wiki (Confluence / Redmine):** **ต้อง crawl recursive** — ตาม child page + linked page ในขอบเขตให้ครบ **ห้ามหยุดที่หน้า landing**. ไล่จนไม่เจอหน้าใหม่ในสโคป. ทำ **page inventory** (URL · title · **parent title** · in-scope/out-scope + เหตุผล). บันทึกจำนวนแบบชัด (เช่น "พบ 307 หน้า / in-scope 118" แบบ feature 004)
  - **เก็บความสัมพันธ์ parent→child ไว้ด้วย** (ไม่ใช่แค่ list หน้าแบน) — จำเป็นสำหรับสร้าง folder ต้นไม้ตอน capture (§Output: mirror tree). แต่ละหน้า record `{pageId, title, parentId/parentTitle, url}` → ประกอบเป็น tree ก่อน materialize folder
- **โฟลเดอร์/ไฟล์เดี่ยว:** `Glob **/*` ทั้งโฟลเดอร์ recursive → เห็นทุกไฟล์+ซับโฟลเดอร์จริง
- **สิ่งที่ฝังในหน้า:** รูป, diagram, flow, ตาราง, ไฟล์แนบ (`.xlsx/.docx/.pdf`), ลิงก์ไป spec ย่อย → นับเข้า inventory ทั้งหมด
- ได้ inventory ครบ → **ยืนยัน scope กับ user ถ้าเส้นแบ่ง in/out ไม่ชัด** ก่อนเริ่มดึง

#### 🔗 Link-closure discipline (บังคับ — "แปะลิงก์ = มีข้อมูลโยงกัน ต้องตามให้ครบ")
เมื่อ scope = **module/subtree เดียว** (ไม่ใช่ทั้ง space): เก็บ subtree แล้ว **ยังไม่จบ** — ต้องตาม**ลิงก์ที่แปะในเนื้อหาทุกอัน**แบบ **transitive closure จนไม่เหลือลิงก์ค้าง** (คำร้องเวนคืน 004-wiki: subtree 38 หน้า แต่ปิดจริง = 87 หน้า เพราะลิงก์โยง). กฎ:
1. **ตาม link ทุกชั้น (transitive)** ไม่ใช่ชั้นเดียว — หน้าที่ดึงมาใหม่มักแปะลิงก์ไปหน้าอื่นอีก → วนจนนิ่ง
2. **ต้องปิด closure ทั้ง 2 รูปแบบ URL:**
   - `pageId=NNN` / `viewpage.action?pageId=`
   - **`/display/SPACE/Title`** (spaces=`+`, `:`=`%3A`) ← **ดักง่ายสุดที่จะลืม**: หน้า config/lookup (`cf_list_of_value`), **error-message/alert-code catalog**, DB-schema (`tx_request_*`) มักใช้ form นี้ **ไม่มี pageId** → closure ที่ไล่แค่ `pageId=` จะ**พลาดเงียบ**. resolve pageId ของ `/display/` จาก `<meta name="ajs-page-id" content="NNN">`
3. **Audit link-form ให้ครบก่อนประกาศ "ครบ"** — grep หาทุกรูปแบบในไฟล์ที่ดึงมา: `pageId=` · `/display/` · tiny link `/x/XXXX` · `?title=` · ไฟล์แนบ non-image (`/download/attachments/*.pdf|xlsx|docx`) · external `http(s)://` (ระบบอื่น) · **Swagger/API host (`*/swagger`, `*/openapi.json`, `*/api-docs`, `*/rs/*`)**. ทุก wiki-form ต้อง captured; external แบ่ง 2 ชนิด:
   - **Swagger/API host = ต้องดึง spec จริงมาเก็บ** (ดู §API/Swagger ในเฟส 2) — เพราะเป็น requirement data (request/response schema, enum, field, validation = atom/boundary) ไม่ใช่แค่ลิงก์อ้างอิง. **ห้ามแค่ record URL แล้วปล่อย** (004-wiki round 3: FS อ้าง 4 Swagger endpoint → ดึง openapi.json จริงเจอ `policyType` enum ที่ FS ไม่ได้ระบุ + path จริงต่างจากที่ wiki เขียน)
   - **External doc อื่น** (Google Doc/Redmine ticket/diagrams.net) = เก็บ URL ไว้ในเนื้อหา (faithful) **ไม่ crawl** แต่ต้อง**รายงานว่ามี** ให้ user เลือกดึงเฉพาะตัวถ้าต้องการ
4. **ยืนยันด้วยตัวเลข:** closure จบเมื่อ "uncaptured pageId refs = 0 **และ** uncaptured /display/ refs = 0" (เขียนลง INVENTORY)
- reusable tool + วิธี login/closure ครบ: (ref: reference_confluence_wiki_crawl) (`_fetch_ids.js --closure` เช็ค 2-form; `_crawler.js` subtree)

### เฟส 2 — Fetch/Capture (ยิงแหล่งครั้งเดียว, เก็บทุกอย่าง)
- **วิธีดึงตามชนิดแหล่ง:**
  - Redmine wiki → REST API `curl -u "$WIKI_USER:$WIKI_PASS" ".../wiki/<page>.json"` หรือ `.../projects/<id>/wiki/index.json` (creds = env ใน settings.json)
  - **Confluence Server (เช่น wiki.thaisamut.co.th):** **form login ไม่ใช่ Basic** — GET `/login.action` เอา JSESSIONID → POST `/dologin.action` (`os_username`/`os_password`/`login=Log In`) → reuse cookie. **REST API มักปิด (404)** → HTML scrape: body = `<div id="main-content">` **มี fallback `<div class="wiki-content">`** (บางหน้าไม่มี main-content); children ผ่าน `/plugins/pagetree/naturalchildren.action?...&expandCurrent=true&hasRoot=true&pageId=<id>`. รายละเอียด+bug ครบ: (ref: reference_confluence_wiki_crawl)
  - เว็บ wiki หลัง corporate auth → Playwright (login จริง แล้ว save เนื้อหา) — เหมือน pattern spec อื่นในโปรเจกต์
  - ไฟล์ local (`.docx/.xlsx/.pdf/.md/.txt/.html`) → extract เนื้อหา
- **⚠️ Code macro / SQL ห้ามหาย:** Confluence render code/SQL ใน `<script type="syntaxhighlighter"><![CDATA[…]]></script>` — HTML→md ที่ strip `<script>` ทิ้งจะ**ลบ SQL หมด** → หน้าดู **0-byte/ว่าง ทั้งที่มีเนื้อหา**. ต้อง extract CDATA (+`<pre>`) เป็น code block **ก่อน** strip script. **หน้า 0-byte = ธงแดง ต้องสอบ ห้ามปล่อย**
- **บันทึกแบบ faithful** (ครบ + ตรง): เก็บ **ข้อความคำต่อคำ** (error string / label / tooltip เป๊ะ), **ตาราง** (คงโครง), **ตัวเลข** (boundary/char-limit/timeout/status-code), **SQL/config/DB-schema เต็ม**, ไม่ย่อ ไม่ paraphrase
- **รูป/diagram/flow/mockup:** โหลดไฟล์จริงลง **folder ของหน้านั้น** (co-located ข้าง `page.md` — ไม่ใช่ central `sources/assets/` แล้ว) **และเปิดดูด้วย vision** → เขียน **text note ประกอบ** (`<image>.notes.md` วางคู่กันใน folder เดียวกัน) จับกฎ/เงื่อนไข/ตัวเลข/transition ที่ฝังในภาพ — business rule มักอยู่ในภาพ ไม่ใช่ text (ref: feedback_read_flow_diagram_image)
- **🖼️ Inline image ref ต้องชี้ local asset (ไม่ใช่ wiki URL) — บังคับ:** โหลดรูปแล้ว **ต้อง rewrite `![img](...)` ในเนื้อ `page.md` ให้ชี้ไฟล์ local ที่โหลดมา** ไม่ใช่ปล่อยเป็น wiki URL เดิม (`![img](/download/attachments/<attId>/<enc-name>?version=…)`) — URL แบบนั้นเป็น absolute server path + `attId ≠ pageId` → **เปิด md แบบ local แล้วรูปไม่ขึ้น** ทั้งที่โหลดครบ (004-wiki/005-wiki เจอ 48+199 refs ต้องมาตามแก้ทีหลัง). กฎ mapping (โครง co-located ใหม่):
  - **asset อยู่ folder เดียวกับ `page.md` ของหน้านั้น** → ref = **`./<file>`** เสมอ (same-folder) ไม่มี `../assets/` / `../../` อีก (โครงเก่า group-prefix `<pageId>__` / `linked_` เลิกใช้)
  - asset ตั้งชื่อ = ชื่อไฟล์แนบจริง (แปลง `:`→`_` + อักขระต้องห้าม) ; **`%20`-encode ช่องว่าง** ; คงตัวอักษรไทย literal ; ชื่อชนใน folder เดียวกัน → ต่อ `__<n>` ; header `- images:` ลิสต์ path local ที่ถูกไว้แล้ว
  - **แก้ที่ `_crawler.js` ให้ (1) วางไฟล์รูปใน folder ของหน้า (2) emit `./<file>` ตั้งแต่ crawl** (ไม่ใช่มา post-fix ทุก feature) ; ถ้า crawl มาแล้วยังเป็น wiki URL → รัน fixer แล้ว verify `grep -rc "!\[img\](/download/attachments"` = 0. ดู (ref: reference_confluence_wiki_crawl)
- **ไฟล์แนบ** (`.xlsx/.docx/.pdf`) → extract เนื้อหาเก็บด้วย (อย่าเก็บแค่ชื่อไฟล์)

#### 🔌 API / Swagger capture (เมื่อ FS/wiki อ้าง backend endpoint)
FS มัก data-source มาจาก REST API (dropdown/lookup/process) โดยลิงก์ไป Swagger UI → **ต้องดึง spec จริง ไม่ใช่แค่จดลิงก์** (spec = requirement data: field/enum/required/type = atom & boundary ที่ปลายทางต้องใช้):
1. **Enumerate ครบ — อย่ายึด keyword "swagger" อย่างเดียว** (บทเรียน 004-wiki: grep แค่ "swagger" ได้ 4/6 endpoint พลาด 2 ตัวที่ FS เขียน path ตรงๆ). grep **ทุก path form**: `swagger`·`openapi`·`/api-docs` **และ bare REST path `/rs/`** (`grep -rhoE "/thaisamut/rs/[a-zA-Z0-9/_.{}-]+" | sort -u`) + host เฉพาะ (`11.100.8.44`, `intranet-api.*`). list unique endpoint → จับ **แต่ละ service เป็น swagger คนละตัว** (mastersetting/claimtx/newloan/benefitregister = คนละ openapi.json)
2. **Probe ก่อนดึง** (เครื่อง on-prem อาจ block intranet) — `curl -s -o /dev/null -w "%{http_code}" -m 12 <url>`; รายงานผล reachability. ถึงไม่ได้ → **หยุดถาม user** (VPN/host? อย่าเดา/อย่าแต่ง spec)
3. **หา spec URL จริง** — Swagger UI ไม่ใช่ spec; เปิด HTML หา `url:`/`configUrl:` ใน `SwaggerUIBundle({...})`. Springdoc = `<swagger-base>/openapi.json` (relative); Springfox เก่า = `/v2/api-docs`. อย่าเดา path — อ่านจากหน้า UI
4. **ดึง spec เต็มลง `sources/api/<service>.openapi.json`** + validate JSON (นับ `paths`, อ่าน `info.title`)
5. **Focused extract `sources/api/API-EXTRACT.md`** — เฉพาะ operationId ที่ FS อ้างจริง: method+path จริง, parameters, request/response schema (resolve `$ref` ตื้นๆ ให้เห็น field). service ใหญ่ (ทั้ง microservice) เก็บ full ไว้แต่ extract เฉพาะที่เกี่ยว
6. **บันทึกความต่างจาก wiki** — path/operation จริงมักต่างจากที่ FS เขียน + enum/required ที่ spec มีแต่ FS ไม่ระบุ = ธงให้ 00b/01 (atom + RQ). **capture เท่านั้น — ยังไม่ทดสอบ auth/ยิงจริง** (นั่นเป็นงาน test execution ไม่ใช่ 00-pre)
7. **ESB XML/SOAP = คนละ class จาก REST/Swagger** (host/`/cxf`, endpoint `*/xml/inquiry/*`, spec = WSDL ไม่ใช่ openapi): เก็บ **service directory** (`curl <cxf-root>` → `api/_esb-cxf-service-directory.html`) + wiki page ที่บรรยาย request/output (ถ้ามี). WSDL รายตัว (`<endpoint>?wsdl`) ดึงเฉพาะเมื่อปลายทางต้องการ boundary ระดับ field — ไม่งั้นแค่ note ไว้ใน INVENTORY ว่ามี

### เฟส 3 — Coverage Ledger (`sources/INVENTORY.md`)
สร้าง manifest ที่ **declare ตามจริง**:
- ตารางทุก item: `ชื่อ/URL · ชนิด (page/image/table/attachment) · in/out scope · สถานะ (✅ captured / ⚠️ partial / ❌ inaccessible) · **folder path ปลายทางใน sources/`** (เช่น `crawl/คำร้องเวนคืน/บันทึกคำร้อง/`)
- **🌳 tree-map (บังคับ) — folder path ↔ pageId/URL:** เพราะ folder เป็น title (human-readable) ไม่ใช่ pageId → INVENTORY ต้องมีตารางแมป `folder path` ↔ `pageId` ↔ `title` ↔ `url` ↔ `parent` ให้ trace กลับได้ (closure/audit ใช้ pageId, คนใช้ title)
- **สรุปนับ:** พบกี่ item · ดึงสำเร็จกี่ · ข้ามกี่ (+เหตุผล) · เข้าไม่ถึงกี่ (+เหตุผล)
- **snapshot date** + แหล่งต้นทาง (base URL / โฟลเดอร์)
- **ห้ามเขียนว่า "captured" ถ้ายังไม่ได้ไฟล์จริง**; ข้ามได้เฉพาะ item ระบบล้วน **และต้องระบุเหตุผล**

### เฟส 4 — Gap gate (หยุดถ้าไม่ครบ)
- item ที่ **เข้าไม่ถึง (permission/ลิงก์เสีย/auth ล้ม)** หรือ **ตีความไม่ออก** → **หยุดถาม user อย่าข้ามเงียบ อย่าเดาเนื้อหา** (ref: feedback_ask_before_acting)
- ยืนยัน "ครบ" ได้ก็ต่อเมื่อ **ทุก in-scope item = ✅ captured** (หรือ user รับทราบการข้ามแล้ว)

---

## ✅ Definition of Done
1. `sources/crawl/` = **folder ต้นไม้ mirror โครง wiki จริง ตั้งชื่อ folder ตาม title จริงของหน้า** แต่ละหน้ามี `page.md` + assets co-located ครบทุก in-scope item (child = subfolder ใต้ parent เป๊ะ)
2. `sources/INVENTORY.md` = coverage ledger ครบ (นับตรง, สถานะจริง, ระบุ gap) + **tree-map (folder path ↔ pageId/title/url/parent)** + **ประโยค closure ยืนยัน "uncaptured pageId = 0 และ /display/ = 0" + ตาราง external links ที่ไม่ crawl**
3. รูป/diagram ทุกใบมี `.notes.md` (co-located ใน folder ของหน้า) จับกฎที่ฝังในภาพ **+ inline `![img]` ทุกอันชี้ local asset same-folder `./<file>` ไม่ใช่ wiki URL — verify `grep -rc "!\[img\](/download/attachments" sources/` = 0** (เฟส 2 §inline image ref)
4. `qa/00-INDEX.md` อัปเดตแถว `00-pre`
5. gap ที่เข้าไม่ถึง → ถาม user แล้ว (ไม่เงียบ)
6. **Link-closure ปิดครบทั้ง 2 form (`pageId=` + `/display/`) แบบ transitive = 0 ค้าง** + audit ครบทุก link-form (tiny/title=/attachment/external) — ไม่มีลิงก์ wiki ที่แปะไว้แล้วตกหล่น (เฟส 1 §link-closure)
7. **ไม่มีหน้า 0-byte/ว่างค้าง** (code-macro/SQL ต้อง preserve; main-content ต้องมี fallback wiki-content)
8. **Swagger/API ที่ FS อ้าง = ดึง spec จริงลง `sources/api/`** (openapi.json เต็ม + API-EXTRACT.md เฉพาะ endpoint ที่เกี่ยว) — ไม่ใช่แค่ record URL; probe ก่อน ถ้า block → ถาม user (เฟส 2 §API/Swagger)

## ➡️ Handoff (NEXT)
canonical chain (ขา B): **`/source-ingest` (00-pre → `sources/`) → `/test-plan` (00, optional) → `/requirement-review-generic` (01, → `qa/01`+`qa/00b`) → `/e2e-flow-designer` (02) → …**
- ทั้ง `/test-plan` และ `/requirement-review-generic` **อ่านจาก `sources/` (local) ไม่ยิงแหล่งสดซ้ำ**
- ตั้งแต่ 02 = สายเดียวกับขา A ทุกประการ (บรรจบที่ 02)

> **ขา A ไม่ต้องใช้ skill นี้** — เพราะ `spec-kit/<f>/spec.md` เป็น snapshot อยู่แล้ว. `source-ingest` เป็นตัวสร้าง "spec.md เทียบเท่า" ให้ขา B ที่ต้นทางเป็น wiki/เอกสารกระจัดกระจาย

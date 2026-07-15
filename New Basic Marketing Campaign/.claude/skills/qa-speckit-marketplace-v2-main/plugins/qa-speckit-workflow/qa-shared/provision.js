// provision.js — makes the plugin's bundled qa-shared files available to the
// user's project so skills/generators can reference them via a STABLE,
// project-relative path (identical to how the maintainer machine works).
// Needs NO env var: __dirname = plugin qa-shared/, process.cwd() = project root.
const fs = require('fs');
const path = require('path');
const src = __dirname;                              // plugin's qa-shared/
const dst = path.join(process.cwd(), 'qa-shared');  // <project>/qa-shared/
try {
  fs.mkdirSync(dst, { recursive: true });
  for (const f of ['execution-report.js', 'evidence.js', 'CONVENTIONS.md', 'init-index.js']) {
    const to = path.join(dst, f);
    const from = path.join(src, f);
    if (!fs.existsSync(to) && fs.existsSync(from)) fs.copyFileSync(from, to); // never clobber
  }
} catch (e) {
  console.log('[qa-speckit] provision skipped: ' + e.message);
}

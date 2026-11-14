// Usage: node scripts/check-content.mjs   (run after `npm run build`)
// Fails on banned claims in src/, and on forbidden or external resources in dist/.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const BANNED = /\b(NABL|ISO ?\d+|accredited|certified|verified|state-of-the-art|24x7|24\/7|same-day|cold-chain|phlebotom\w*|painless|leading|best in)\b/i;
const FORBIDDEN_DIST = /(cdn\.tailwindcss\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|material-symbols|<form[\s>]|<input[\s>]|<textarea|localStorage|sessionStorage)/i;
const ALLOWED_HOSTS = new Set(['wa.me', 'maps.google.com', 'www.google.com', 'maps.app.goo.gl', 'www.w3.org', 'schema.org']);

function walk(dir, exts, out = []) {
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, exts, out);
    else if (exts.includes(extname(p))) out.push(p);
  }
  return out;
}

let fail = 0;
const report = (msg) => { console.log('FAIL ' + msg); fail++; };

for (const f of walk('src', ['.astro', '.ts', '.tsx', '.css', '.md'])) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    const m = line.match(BANNED);
    if (m) report(`${f}:${i + 1} banned term "${m[0]}"`);
  });
}

for (const f of walk('dist', ['.html', '.js', '.css'])) {
  const txt = readFileSync(f, 'utf8');
  const bad = txt.match(FORBIDDEN_DIST);
  if (bad) report(`${f} forbidden "${bad[0]}"`);
  if (extname(f) === '.html') {
    for (const url of txt.match(/https?:\/\/[^"'\s)<>]+/g) ?? []) {
      let host = '';
      try { host = new URL(url).host; } catch { continue; }
      if (!ALLOWED_HOSTS.has(host)) report(`${f} external url ${url}`);
    }
    if (!/name="robots"[^>]*noindex/i.test(txt) && !/noindex[^>]*name="robots"/i.test(txt)) report(`${f} missing noindex meta`);
  }
}
if (existsSync('public/robots.txt') && !/Disallow:\s*\//.test(readFileSync('public/robots.txt', 'utf8'))) report('public/robots.txt missing Disallow: /');

console.log(fail ? `\n${fail} problem(s)` : 'content check: pass');
process.exit(fail ? 1 : 0);

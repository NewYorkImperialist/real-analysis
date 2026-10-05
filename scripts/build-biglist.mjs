#!/usr/bin/env node
// Render the whole bank as one printable "Big List" (problems only — no hints, solutions or notes),
// in the spirit of Ivan Khatchatourian's MAT327 Big List.
//   node scripts/build-biglist.mjs         writes dist/big-list.html (+ KaTeX assets)
//   node scripts/build-biglist.mjs --pdf   also prints it to dist/big-list.pdf with headless Chrome
// Chrome is found via $CHROME_PATH, else the usual macOS / Linux install locations.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import katex from 'katex';
import { tokenize, toBlocks } from '../src/lib/richtext.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'src', 'generated', 'bank.json'), 'utf8'));
// Definitions and theorem statements placed before the first core problem that needs them.
const refPath = path.join(root, 'src', 'generated', 'reference.json');
const refBefore = new Map();
for (const b of fs.existsSync(refPath) ? JSON.parse(fs.readFileSync(refPath, 'utf8')) : [])
  refBefore.set(b.before, [...(refBefore.get(b.before) ?? []), ...b.items]);
// Reference text is wrapped in the YAML; join single line breaks (keeping blank lines and part labels
// such as "(i)", and "- " bullet items) so a break before inline math does not start a new paragraph.
const joinLines = (src) => src.trim().replace(/([^\n])\n(?!\n|\s*\(?(?:[a-h]|[ivx]{1,5}|[0-9]{1,2})\)\s|\s*- |\s*\$\$)/g, '$1 ');
// Items are numbered amsthm-style, one counter per section shared by definitions and theorems
// ("Definition 6.1", "Theorem 6.2", ...); sec.refNo holds the running count.
const refHtml = (items, sec) =>
  `<div class="ref">${items
    .map(
      (it) =>
        `<div class="ref-item ${it.kind}"><p class="ref-head"><span class="ref-kind">${it.kind === 'theorem' ? 'Theorem' : 'Definition'} ${sec.no}.${(sec.refNo = (sec.refNo ?? 0) + 1)}</span> (${blockHtml(tokenize(it.name))}).</p>${richHtml(joinLines(it.latex))}${it.note ? `<p class="ref-note">${blockHtml(tokenize(it.note))}</p>` : ''}</div>`,
    )
    .join('')}</div>`;
const SITE = `https://${fs.readFileSync(path.join(root, 'public', 'CNAME'), 'utf8').trim()}`;

// Difficulty marks, after the MAT327 list's stars and dagger.
const MARK = { introductory: '∘', easy: '⋆', medium: '⋆⋆', hard: '⋆⋆⋆', 'very-hard': '†' };
const DIFF_LABEL = { introductory: 'introductory', easy: 'easy', medium: 'medium', hard: 'hard', 'very-hard': 'very hard' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Same paragraph and emphasis rules as src/components/RichText.tsx.
const PART = /^\s*(\(?[a-h]\)|\(?[ivx]{1,5}\)|\(?[0-9]{1,2}\))\s/;
function blockHtml(tokens) {
  const math = [];
  const text = tokens
    .map((t) =>
      t.kind === 'math'
        ? `\u0000${math.push(katex.renderToString(t.value, { displayMode: t.display, throwOnError: false, strict: 'ignore' })) - 1}\u0000`
        : t.value,
    )
    .join('')
    // Typographic double quotes: a straight " prints as a closing quote in KaTeX_Main.
    .replace(/(^|[\s(\[{\u2014])"/g, '$1\u201c')
    .replace(/"/g, '\u201d');
  return (
    esc(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>')
      // Chrome allows a line break right after inline math, stranding a following "," or "s" at the
      // start of the next line; glue math to the text it touches.
      .replace(/\u0000(\d+)\u0000([^\s<\u0000]+)/g, (m, i, after) =>
        tokens.filter((t) => t.kind === 'math')[i].display ? m : `<span class="nobr">\u0000${i}\u0000${after}</span>`,
      )
      .replace(/\u0000(\d+)\u0000/g, (_, i) => math[Number(i)])
  );
}
// Paragraphs, with each run of consecutive bullet items ("- " lines) gathered into one <ul>.
function richHtml(src) {
  const blocks = toBlocks(tokenize(src));
  return blocks
    .map((b, i) => {
      if (b.item)
        return `${blocks[i - 1]?.item ? '' : '<ul class="items">'}<li>${blockHtml(b.tokens)}</li>${blocks[i + 1]?.item ? '' : '</ul>'}`;
      const first = b.tokens[0];
      const isPart = first?.kind === 'text' && PART.test(first.value);
      return `<p${isPart ? ' class="part"' : ''}>${blockHtml(b.tokens)}</p>`;
    })
    .join('');
}

const sourceByKey = new Map(bank.sources.map((s) => [s.key, s]));
function citation(p) {
  const s = sourceByKey.get(p.source.key);
  const bits = [s?.shortName, p.source.problemNumber, p.source.page && `p. ${p.source.page}`].filter(Boolean);
  return bits.map(esc).join(', ');
}

// Sections: Part I = core by topic (course order); Part II = upper tier by topic.
const parts = [
  { title: 'Core', blurb: 'The mechanics of real analysis and the technical proof machinery behind them, in course order.', list: bank.problems.filter((p) => !p.tier) },
  {
    title: 'Upper tier',
    blurb:
      'An optional layer of harder problems: multi-step synthesis, constructions, hypothesis-necessity counterexamples and classification problems. Problems marked “bridge to measure theory” preview measure-zero ideas.',
    list: bank.problems.filter((p) => p.tier === 'upper'),
  },
];
let secNo = 0;
const sections = [];
for (const part of parts) {
  part.sections = [];
  for (const t of bank.topics) {
    const list = part.list.filter((p) => p.topic === t.key);
    if (!list.length) continue;
    const sec = { no: ++secNo, title: t.label, list, anchor: `s${secNo}` };
    part.sections.push(sec);
    sections.push(sec);
  }
}

const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' });
const nCore = parts[0].list.length;
const nUpper = parts[1].list.length;

const problemHtml = (sec, p, i) => `
<div class="problem" id="${esc(p.id)}">
  <div class="label"><span class="mark" title="${DIFF_LABEL[p.difficulty]}">${MARK[p.difficulty]}</span>${sec.no}.${i + 1}.</div>
  <div class="body">
    ${richHtml(p.problemLatex)}
    <p class="cite">${citation(p)}${p.tags.includes('bridge-to-measure-theory') ? ' · bridge to measure theory' : ''} · <a href="${SITE}/#/p/${encodeURIComponent(p.id)}">hints &amp; solution online</a></p>
  </div>
</div>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Real Analysis Big List — Jayden Lin</title>
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="big-list-assets/katex.min.css">
<style>
  /* 0.9in page margins plus 0.1in body padding: a 6.5in text block, with room for italic overhang
     that Chrome would otherwise clip at the page-area edge. */
  @page { size: letter; margin: 0.9in; }
  html { font-family: KaTeX_Main, 'Times New Roman', serif; font-size: 11.5pt; line-height: 1.45; color: #111; }
  body { margin: 0; padding: 0 0.1in; }
  .nobr { white-space: nowrap; }
  a { color: inherit; }
  .title .kicker { font-size: 24pt; margin: 0; }
  .title .author { font-size: 14pt; margin: 0 0 0.8em; }
  .title { text-align: center; padding-top: 0.5in; }
  .title h1 { font-size: 24pt; font-weight: normal; margin: 0 0 0.6em; }
  .title .sub { font-size: 13pt; margin: 0.2em 0; }
  .intro { margin-top: 0.3in; text-align: justify; font-size: 10.5pt; }
  .intro ul { margin: 0.4em 0 0.8em 1.2em; padding: 0; }
  .legend { text-align: center !important; }
  .intro ul { font-size: 9.5pt; }
  .contents { break-before: page; }
  .contents h2 { font-size: 16pt; font-weight: normal; }
  .toc { list-style: none; padding: 0; margin: 0; }
  .toc li { display: flex; gap: 0.6em; margin: 0.25em 0; }
  .toc .no { width: 1.8em; text-align: right; }
  .toc .n { margin-left: auto; color: #555; }
  .toc .part { margin-top: 1em; font-variant: small-caps; letter-spacing: 0.04em; }
  .part-title { break-before: page; text-align: center; padding-top: 2.4in; }
  .part-title h2 { font-size: 22pt; font-weight: normal; margin: 0 0 0.5em; }
  .part-title p { max-width: 4.6in; margin: 0 auto; font-style: italic; }
  section.topic { break-before: page; }
  section.topic > h3 { font-size: 16pt; font-weight: bold; margin: 0 0 0.8em; }
  section.topic > h3 .no { margin-right: 0.8em; }
  .problem { display: flex; align-items: baseline; gap: 0.5em; margin: 0 0 1.05em; break-inside: avoid; }
  .problem .label { flex: 0 0 3.2em; text-align: right; white-space: nowrap; font-weight: bold; }
  .problem .mark { font-weight: normal; margin-right: 0.15em; }
  .problem .body { flex: 1; min-width: 0; }
  .problem .body p { margin: 0 0 0.35em; text-align: justify; }
  .problem .body p.part { margin-left: 1.6em; text-indent: -1.6em; }
  ul.items { margin: 0 0 0.35em; padding-left: 1.6em; }
  ul.items li { margin: 0 0 0.2em; text-align: justify; }
  .problem .cite { font-size: 8.5pt; color: #666; text-align: right !important; margin-top: 0.15em !important; }
  .problem .cite a { color: #666; }
  .ref { margin: 0.2em 0 1.2em 3.7em; padding: 0.45em 0 0.45em 0.9em; border-left: 1.5px solid #999; }
  .ref-group { break-inside: avoid; }
  .ref-item { margin: 0 0 0.6em; break-inside: avoid; }
  .ref-item:last-child { margin-bottom: 0; }
  .ref-item p { margin: 0 0 0.3em; text-align: justify; }
  .ref-item p.ref-head { display: inline; margin-right: 0.4em; }
  .ref-item p.ref-head + p { display: inline; }
  .ref-kind { font-weight: bold; }
  .ref-item.theorem p:not(.ref-head):not(.ref-note) { font-style: italic; }
  .ref-note { font-size: 9.5pt; color: #555; font-style: normal; }
  .katex { font-size: 1.04em; }
  .katex-display { margin: 0.4em 0; overflow: hidden; }
</style>
<script>
  // Shrink any display equation wider than the text block instead of letting overflow:hidden clip it.
  // The PDF step calls this again at the printed width (6.5in) before printing.
  function fitMath() {
    for (const d of document.querySelectorAll('.katex-display')) {
      const k = d.firstElementChild;
      k.style.fontSize = '';
      if (d.scrollWidth > d.clientWidth + 1) k.style.fontSize = (1.04 * 0.99 * d.clientWidth) / d.scrollWidth + 'em';
    }
  }
  document.fonts.ready.then(fitMath);
  addEventListener('resize', fitMath);
</script></head><body>

<div class="title">
  <p class="kicker">Real Analysis</p>
  <h1>Big List</h1>
  <p class="author">Jayden Lin</p>
  <p class="sub">${nCore} core problems · ${nUpper} upper-tier problems</p>
  <p class="sub">${esc(SITE.replace('https://', ''))}</p>
  <p class="sub">${date}</p>
  <div class="intro">
    <p>This is the complete problem bank behind <a href="${SITE}">${esc(SITE.replace('https://', ''))}</a>, collected in one
    document for working offline and by hand. It is regenerated every time the bank changes, so this copy is current as of the date above.
    It contains no hints or solutions: those, and progress tracking, are on the site, and every problem ends with a link to its page.</p>
    <p>Short <strong>Definition</strong> and <strong>Theorem</strong> blocks appear just before the first problems that use them. They are written for this list, not transcribed from the sources; where the books’ conventions differ, a note says so. A result is never stated before a problem that asks you to prove it.</p>
    <p>The format is inspired by Ivan Khatchatourian’s <a href="https://www.math.toronto.edu/ivan/mat327/docs/biglist.pdf"><em>MAT327 Big List</em></a>
    for point-set topology at the University of Toronto.</p>
    <p>Every problem is transcribed from one of the following sources and cited to its exact location:</p>
    <ul>${bank.sources.map((s) => `<li>${esc(s.citation)}</li>`).join('')}</ul>
    <p>Problems are divided into sections by topic, in the usual order of a course, and rated by difficulty:</p>
    <p class="legend">${Object.entries(MARK)
      .map(([d, m]) => `<span>${m}&nbsp;${DIFF_LABEL[d]}</span>`)
      .join(' &nbsp;·&nbsp; ')}</p>
  </div>
</div>

<div class="contents">
  <h2>Contents</h2>
  <ul class="toc">${parts
    .map(
      (part, k) =>
        `<li class="part">Part ${k === 0 ? 'I' : 'II'} · ${esc(part.title)}</li>` +
        part.sections
          .map((s) => `<li><span class="no">${s.no}</span><a href="#${s.anchor}">${esc(s.title)}</a><span class="n">${s.list.length}</span></li>`)
          .join(''),
    )
    .join('')}</ul>
</div>

${parts
  .map(
    (part, k) => `
<div class="part-title"><h2>Part ${k === 0 ? 'I' : 'II'}: ${esc(part.title)}</h2><p>${esc(part.blurb)}</p></div>
${part.sections
  .map(
    (s) => `
<section class="topic" id="${s.anchor}">
  <h3><span class="no">${s.no}</span> ${esc(s.title)}${k === 1 ? ' <span style="font-weight:normal">(upper tier)</span>' : ''}</h3>
  ${s.list
    .map((p, i) =>
      // Keep a reference block on the same page as the problem it introduces.
      refBefore.has(p.id) ? `<div class="ref-group">${refHtml(refBefore.get(p.id), s)}${problemHtml(s, p, i)}</div>` : problemHtml(s, p, i),
    )
    .join('')}
</section>`,
  )
  .join('')}`,
  )
  .join('')}
</body></html>`;

fs.mkdirSync(dist, { recursive: true });
const assets = path.join(dist, 'big-list-assets');
fs.cpSync(path.join(root, 'node_modules', 'katex', 'dist', 'fonts'), path.join(assets, 'fonts'), { recursive: true });
fs.copyFileSync(path.join(root, 'node_modules', 'katex', 'dist', 'katex.min.css'), path.join(assets, 'katex.min.css'));
const htmlPath = path.join(dist, 'big-list.html');
fs.writeFileSync(htmlPath, html);
console.log(`→ dist/big-list.html (${nCore} core + ${nUpper} upper tier, ${sections.length} sections)`);

if (process.argv.includes('--pdf')) {
  const { default: puppeteer } = await import('puppeteer-core');
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const executablePath = candidates.find((c) => fs.existsSync(c));
  if (!executablePath) throw new Error('Chrome not found; set CHROME_PATH');
  const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    // Lay out at the printed page-area width (8.5in − 1.8in margins = 643 CSS px) so fitMath sees the real widths.
    await page.emulateMediaType('print');
    await page.setViewport({ width: 643, height: 1000 });
    const clipped = await page.evaluate(() => {
      fitMath();
      return [...document.querySelectorAll('.katex-display')].filter((d) => d.scrollWidth > d.clientWidth + 1).length;
    });
    if (clipped) console.warn(`warning: ${clipped} display equation(s) still wider than the page`);
    await page.pdf({
      path: path.join(dist, 'big-list.pdf'),
      format: 'letter',
      preferCSSPageSize: true,
      printBackground: true,
      outline: true,
      tagged: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate:
        '<div style="width:100%;text-align:center;font-family:serif;font-size:9pt;color:#444"><span class="pageNumber"></span></div>',
    });
  } finally {
    await browser.close();
  }
  const kb = Math.round(fs.statSync(path.join(dist, 'big-list.pdf')).size / 1024);
  console.log(`→ dist/big-list.pdf (${kb} KB)`);
}

#!/usr/bin/env node
// Validate data/*.yaml and emit src/generated/bank.json.
//   node scripts/build-data.mjs          validate + write
//   node scripts/build-data.mjs --check  validate only (non-zero exit on error)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as yaml from 'js-yaml';
import katex from 'katex';
import { tokenize, delimiterProblems } from '../src/lib/richtext.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const checkOnly = process.argv.includes('--check');

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const load = (f) => yaml.load(fs.readFileSync(f, 'utf8'));

const sources = load(path.join(dataDir, 'sources.yaml'));
const taxonomy = load(path.join(dataDir, 'taxonomy.yaml'));
const APPROVED = ['mit', 'abbott', 'lebl', 'ross', 'cummings', 'tao', 'pugh', 'rudin', 'mit18100b'];
for (const s of sources) if (!APPROVED.includes(s.key)) err('sources.yaml', `unapproved source key "${s.key}"`);
const sourceKeys = new Set(sources.map((s) => s.key));

const DIFF = Object.keys(taxonomy.difficulties);
const CAT = Object.keys(taxonomy.categories);
const TYPE = Object.keys(taxonomy.types);
const topicMap = new Map(taxonomy.topics.map((t) => [t.key, t]));
const SOL_TYPES = ['official', 'textbook', 'instructor', 'personal', 'ai'];

const files = fs
  .readdirSync(path.join(dataDir, 'problems'))
  .filter((f) => f.endsWith('.yaml'))
  .sort();

const problems = [];
const ids = new Set();

function checkLatex(where, src) {
  for (const p of delimiterProblems(src)) err(where, p);
  for (const t of tokenize(src)) {
    if (t.kind !== 'math') continue;
    try {
      katex.renderToString(t.value, { displayMode: t.display, throwOnError: true, strict: 'ignore' });
    } catch (e) {
      err(where, `KaTeX: ${String(e.message).split('\n')[0]} in "${t.value.slice(0, 80)}"`);
    }
  }
}

for (const f of files) {
  const list = load(path.join(dataDir, 'problems', f)) ?? [];
  if (!Array.isArray(list)) {
    err(f, 'top level must be a list of problems');
    continue;
  }
  for (const p of list) {
    const where = `${f}#${p?.id ?? '?'}`;
    if (!p || typeof p !== 'object') {
      err(f, 'non-object entry');
      continue;
    }
    if (!/^[a-z0-9]+(-[a-z0-9.]+)+$/.test(p.id ?? '')) err(where, `bad id "${p.id}"`);
    if (ids.has(p.id)) err(where, 'duplicate id');
    ids.add(p.id);

    if (!p.source || !sourceKeys.has(p.source.key)) err(where, `source.key must be one of ${[...sourceKeys]}`);
    if (!p.source?.problemNumber) err(where, 'source.problemNumber required');
    const expectedFile = `${p.source?.key}.yaml`;
    if (f !== expectedFile) warn(where, `stored in ${f} but source is ${p.source?.key}`);

    const topic = topicMap.get(p.topic);
    if (!topic) err(where, `unknown topic "${p.topic}"`);
    if (!Array.isArray(p.subtopics) || !p.subtopics.length) err(where, 'subtopics required');
    else if (topic)
      for (const s of p.subtopics) if (!(s in topic.subtopics)) err(where, `subtopic "${s}" not in topic ${p.topic}`);
    if (!DIFF.includes(p.difficulty)) err(where, `bad difficulty "${p.difficulty}"`);
    if (!CAT.includes(p.category)) err(where, `bad category "${p.category}"`);
    if (!TYPE.includes(p.type)) err(where, `bad type "${p.type}"`);
    for (const k of ['skills', 'tags']) if (!Array.isArray(p[k])) err(where, `${k} must be a list`);
    if (!p.concept) err(where, 'concept required');
    if (p.title !== undefined) {
      if (typeof p.title !== 'string' || !p.title.trim()) err(where, 'title must be non-empty text');
      else {
        checkLatex(`${where} title`, p.title);
        if (p.title.length > 90) warn(where, `title is long (${p.title.length} chars)`);
      }
    }
    if (typeof p.problemLatex !== 'string' || !p.problemLatex.trim()) err(where, 'problemLatex required');
    else checkLatex(where, p.problemLatex);

    if (p.hints) {
      if (!Array.isArray(p.hints)) err(where, 'hints must be a list');
      else
        p.hints.forEach((h, i) => {
          if (!h.text || !h.source || !SOL_TYPES.includes(h.kind))
            err(where, `hint ${i + 1} needs text, source and kind (${SOL_TYPES})`);
          else checkLatex(`${where} hint ${i + 1}`, h.text);
        });
    }
    if (p.solution) {
      const s = p.solution;
      if (typeof s.available !== 'boolean') err(where, 'solution.available must be boolean');
      if (s.available) {
        if (!SOL_TYPES.includes(s.type)) err(where, `solution.type must be one of ${SOL_TYPES}`);
        if (!s.source) err(where, 'solution.source (provenance) required');
        if (!s.latex) err(where, 'solution.latex required when available');
        else checkLatex(`${where} solution`, s.latex);
      }
    }
    if (p.tier !== undefined && p.tier !== 'upper') err(where, `tier must be "upper" or absent (core), got "${p.tier}"`);
    if (p.assignedIn && !Array.isArray(p.assignedIn)) err(where, 'assignedIn must be a list');
    if (p.textbookHintsLast !== undefined && p.textbookHintsLast !== true)
      err(where, 'textbookHintsLast must be true or absent');
    if (p.textbookHintsLast && !p.hints?.length) err(where, 'textbookHintsLast set but the problem has no source hints');
    if (p.notes) checkLatex(`${where} notes`, p.notes);
    if (p.curation?.why) checkLatex(`${where} curation`, p.curation.why);
    problems.push(p);
  }
}

for (const p of problems)
  for (const r of p.related ?? []) if (!ids.has(r)) err(p.id, `related id "${r}" does not exist`);

// AI-written hints and solutions live in data/solutions/*.yaml, kept apart from the
// transcribed problems. Each entry: { id, hints?: [latex…], solution?: latex, lowConfidence?: text }.
// They are merged with explicit "AI-generated, not verified" provenance; source hints come first
// (unless the problem sets `textbookHintsLast`, see below),
// and a source solution (if any) is never replaced.
const AI_SOURCE = 'AI-generated — not verified by a human';
const solDir = path.join(dataDir, 'solutions');
const byId = new Map(problems.map((p) => [p.id, p]));
let aiHints = 0;
let aiSolutions = 0;
if (fs.existsSync(solDir)) {
  for (const f of fs.readdirSync(solDir).filter((x) => x.endsWith('.yaml')).sort()) {
    const list = load(path.join(solDir, f)) ?? [];
    if (!Array.isArray(list)) {
      err(`solutions/${f}`, 'top level must be a list');
      continue;
    }
    for (const e of list) {
      const where = `solutions/${f}#${e?.id ?? '?'}`;
      const p = byId.get(e?.id);
      if (!p) {
        err(where, 'no problem with this id');
        continue;
      }
      for (const [i, h] of (e.hints ?? []).entries()) {
        if (typeof h !== 'string' || !h.trim()) {
          err(where, `hint ${i + 1} must be non-empty text`);
          continue;
        }
        checkLatex(`${where} hint ${i + 1}`, h);
        (p.hints ??= []).push({ text: h, source: AI_SOURCE, kind: 'ai' });
        aiHints++;
      }
      if (e.solution != null) {
        if (typeof e.solution !== 'string' || !e.solution.trim()) err(where, 'solution must be non-empty text');
        else if (p.solution?.available) warn(where, 'problem already has a source solution; AI solution ignored');
        else {
          checkLatex(`${where} solution`, e.solution);
          p.solution = { available: true, type: 'ai', source: AI_SOURCE, latex: e.solution };
          if (e.lowConfidence) p.solution.lowConfidence = String(e.lowConfidence);
          aiSolutions++;
        }
      }
    }
  }
}

// `textbookHintsLast: true` marks problems whose printed hint gives most of the solution away:
// show the graded AI hints first and keep the book's hint as the last step before the solution.
for (const p of problems) {
  if (!p.textbookHintsLast) continue;
  const ai = (p.hints ?? []).filter((h) => h.kind === 'ai');
  if (!ai.length) warn(p.id, 'textbookHintsLast set but no AI hints yet; order unchanged');
  p.hints = [...ai, ...(p.hints ?? []).filter((h) => h.kind !== 'ai')];
  delete p.textbookHintsLast;
}

// Order: curriculum topic order, then source tier order, then natural number order.
const topicOrder = new Map(taxonomy.topics.map((t, i) => [t.key, i]));
const sourceOrder = new Map(sources.map((s, i) => [s.key, i]));
const diffOrder = new Map(DIFF.map((d, i) => [d, i]));
problems.sort(
  (a, b) =>
    topicOrder.get(a.topic) - topicOrder.get(b.topic) ||
    diffOrder.get(a.difficulty) - diffOrder.get(b.difficulty) ||
    sourceOrder.get(a.source.key) - sourceOrder.get(b.source.key) ||
    a.id.localeCompare(b.id, 'en', { numeric: true }),
);

for (const w of warnings) console.warn('warning:', w);
if (errors.length) {
  for (const e of errors) console.error('error:', e);
  console.error(`\n${errors.length} error(s) in problem data.`);
  process.exit(1);
}

const counts = {};
for (const p of problems) counts[p.source.key] = (counts[p.source.key] ?? 0) + 1;
const nUpper = problems.filter((p) => p.tier === 'upper').length;
console.log(`✓ ${problems.length} problems valid (${problems.length - nUpper} core, ${nUpper} upper tier)`, counts, `· AI hints: ${aiHints}, AI solutions: ${aiSolutions}`);

if (!checkOnly) {
  const bank = {
    generatedAt: new Date().toISOString(),
    sources,
    topics: taxonomy.topics,
    difficulties: taxonomy.difficulties,
    categories: taxonomy.categories,
    types: taxonomy.types,
    problems,
  };
  const out = path.join(root, 'src', 'generated', 'bank.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(bank));
  console.log(`→ ${path.relative(root, out)}`);
}

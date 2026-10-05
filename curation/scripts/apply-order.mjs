#!/usr/bin/env node
// Replace one topic's list in data/curriculum.yaml with the order proposed in
// curation/audit/order-<topic>.yaml, keeping that file's "# group:" comments.
//   node curation/scripts/apply-order.mjs <topic> [<topic> ...]
// Refuses if the proposed list is not a permutation of the current one (nothing added or dropped).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as yaml from 'js-yaml';

const root = process.env.RA_ROOT ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const curPath = path.join(root, 'data', 'curriculum.yaml');
let text = fs.readFileSync(curPath, 'utf8');

for (const topic of process.argv.slice(2)) {
  const src = fs.readFileSync(path.join(root, 'curation', 'audit', `order-${topic}.yaml`), 'utf8');
  const proposed = yaml.load(src).order;
  const current = yaml.load(text)[topic];
  const a = [...current].sort().join(), b = [...proposed].sort().join();
  if (a !== b || new Set(proposed).size !== proposed.length) {
    console.error(`${topic}: proposed order is not a permutation of the current list; not applied`);
    process.exitCode = 1;
    continue;
  }
  // The proposed block: lines from "order:" to the end of its list, re-indented under the topic key.
  const lines = src.split('\n');
  const start = lines.findIndex((l) => /^order:\s*$/.test(l));
  const body = [];
  for (const l of lines.slice(start + 1)) {
    if (/^\S/.test(l)) break; // next top-level key
    body.push(l.replace(/^\s*/, (ws) => ' '.repeat(Math.max(2, ws.length))));
  }
  while (body.length && !body[body.length - 1].trim()) body.pop();
  // Current block: "<topic>:" up to the next top-level key.
  const re = new RegExp(`^${topic}:\\s*\\n(?:(?:[ \\t].*)?\\n)*?(?=^\\S|(?![\\s\\S]))`, 'm');
  if (!re.test(text)) throw new Error(`${topic}: block not found in curriculum.yaml`);
  text = text.replace(re, `${topic}:\n${body.join('\n')}\n\n`);
  const moved = proposed.filter((id, i) => current[i] !== id).length;
  console.log(`${topic}: applied (${moved} positions changed)`);
}
fs.writeFileSync(curPath, text.replace(/\n{3,}/g, '\n\n'));

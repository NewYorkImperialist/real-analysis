// Print the problems of one topic (statement, metadata, existing notes/hints) for writing hints & solutions.
//   node curation/scripts/topic-problems.mjs <topic> [--ids]
import fs from 'node:fs';
const [topic, flag] = process.argv.slice(2);
const bank = JSON.parse(fs.readFileSync(new URL('../../src/generated/bank.json', import.meta.url)));
const ps = bank.problems.filter((p) => p.topic === topic);
if (flag === '--ids') { console.log(ps.map((p) => p.id).join(' ')); process.exit(0); }
for (const p of ps) {
  console.log(`\n### ${p.id} — ${p.source.problemNumber} [${p.difficulty} / ${p.category} / ${p.type}]`);
  console.log(`concept: ${p.concept}`);
  console.log(p.problemLatex.trim());
  if (p.notes) console.log(`NOTES: ${p.notes}`);
  for (const h of (p.hints ?? []).filter((h) => h.kind !== 'ai')) console.log(`EXISTING ${h.kind.toUpperCase()} HINT: ${h.text.trim()}`);
}

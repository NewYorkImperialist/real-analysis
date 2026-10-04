// Print medium/hard/very-hard problems of a topic with their current hints and solution, for review.
//   node curation/scripts/review-list.mjs <topic> [levels]   (levels default: medium,hard,very-hard)
//   e.g. node curation/scripts/review-list.mjs sequences introductory,easy
import fs from 'node:fs';
const topic = process.argv[2];
const levels = (process.argv[3] ?? 'medium,hard,very-hard').split(',');
const bank = JSON.parse(fs.readFileSync(new URL('../../src/generated/bank.json', import.meta.url)));
for (const p of bank.problems.filter((p) => p.topic === topic && levels.includes(p.difficulty))) {
  console.log(`\n${'='.repeat(70)}\n### ${p.id} — ${p.source.problemNumber} [${p.difficulty} / ${p.type}]`);
  console.log(p.problemLatex.trim());
  if (p.notes) console.log(`\nNOTES: ${p.notes}`);
  (p.hints ?? []).forEach((h, i) => console.log(`\n--- hint ${i + 1} (${h.kind}) ---\n${h.text.trim()}`));
  if (p.solution?.latex) console.log(`\n--- SOLUTION (${p.solution.type}) ---\n${p.solution.latex.trim()}`);
}

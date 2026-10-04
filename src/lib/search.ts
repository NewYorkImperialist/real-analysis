import MiniSearch from 'minisearch';
import { problems, sourceByKey, topicLabel, subtopicLabel } from './bank';
import { latexToPlain } from './richtext';
import type { Problem } from './types';

// Common abbreviations in analysis, expanded before searching.
const SYNONYMS: Record<string, string> = {
  mvt: 'mean value theorem',
  ivt: 'intermediate value theorem',
  evt: 'extreme value theorem',
  ftc: 'fundamental theorem calculus',
  bw: 'bolzano weierstrass',
  uc: 'uniform continuity uniformly continuous',
  lub: 'least upper bound supremum',
  glb: 'greatest lower bound infimum',
  sup: 'supremum sup',
  inf: 'infimum inf',
  'ε-δ': 'epsilon delta',
  'epsilon-delta': 'epsilon delta',
  'ε-n': 'epsilon n',
  heine: 'heine borel compact',
  limsup: 'limsup limit superior',
  liminf: 'liminf limit inferior',
  'm-test': 'weierstrass m test',
};

function expand(q: string): string {
  return q
    .toLowerCase()
    .split(/\s+/)
    .map((w) => SYNONYMS[w] ?? w)
    .join(' ');
}

const humanize = (s: string) => s.replace(/-/g, ' ');

type Doc = { id: string; text: string; meta: string; tags: string; number: string };

function toDoc(p: Problem): Doc {
  const s = sourceByKey.get(p.source.key);
  return {
    id: p.id,
    text: latexToPlain(p.problemLatex),
    meta: [
      s?.name, s?.author, s?.title, p.source.chapter, p.source.section, ...(p.assignedIn ?? []),
      topicLabel(p.topic), ...p.subtopics.map((x) => subtopicLabel(p.topic, x)), p.concept, p.title && latexToPlain(p.title),
      p.difficulty, p.category, humanize(p.type),
    ].filter(Boolean).join(' '),
    tags: [...p.tags, ...p.skills, ...p.subtopics].map(humanize).join(' '),
    number: [p.source.problemNumber, p.id].join(' '),
  };
}

let index: MiniSearch<Doc> | null = null;
function getIndex() {
  if (index) return index;
  index = new MiniSearch<Doc>({
    fields: ['text', 'meta', 'tags', 'number'],
    storeFields: ['id'],
    searchOptions: {
      boost: { tags: 2.5, meta: 2, number: 3, text: 1 },
      prefix: true,
      fuzzy: (term) => (term.length > 4 ? 0.2 : false),
      combineWith: 'AND',
    },
  });
  index.addAll(problems.map(toDoc));
  return index;
}

// Exact references ("abbott-2.5.5", "Exercise 2.5.5", "ross 8.7") go first: the tokenizer splits
// "2.5.5" into separate numbers, so full-text ranking alone buries them.
function exactMatches(q: string): string[] {
  const t = q.trim().toLowerCase();
  const num = t.match(/\d+(?:\.\d+)+[a-z]?/)?.[0]; // dotted numbers only, e.g. 2.5.5
  const hits = problems.filter((p) => p.id === t || (num && p.id.endsWith('-' + num)));
  const named = hits.filter((p) => t.includes(p.source.key) || t.includes(p.id));
  return (named.length ? named : hits).map((p) => p.id);
}

export function search(q: string): { id: string; score: number }[] {
  const query = expand(q.trim());
  if (!query) return [];
  const idx = getIndex();
  let res = idx.search(query);
  // Fall back to OR when AND finds nothing — wording shouldn't need to be exact.
  if (!res.length) res = idx.search(query, { combineWith: 'OR' });
  const pinned = exactMatches(q);
  const top = res.length ? res[0].score : 1;
  return [
    ...pinned.map((id) => ({ id, score: top + 1 })),
    ...res.filter((r) => !pinned.includes(r.id as string)).map((r) => ({ id: r.id as string, score: r.score })),
  ];
}

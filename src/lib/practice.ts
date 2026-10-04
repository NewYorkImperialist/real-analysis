// Practice-set generator. It ONLY selects existing problems from the bank and
// never produces problem text. Everything here is deterministic and pure
// (given the same inputs and seed) so it can be tested without a DOM:
//   parseRequest(text, vocab?)            -> PracticeRequest
//   selectProblems(pool, request, opts)   -> Selection
//   toLatexDocument(items, opts?)         -> string
import type { Problem, Topic } from './types';
import { DIFFICULTIES, CATEGORIES, TYPES } from './types';
import { emptyFilters, type Filters } from './filter';
import { tokenize } from './richtext';

// ---------------------------------------------------------------- types

/** A concept phrase resolved against the taxonomy. A problem "hits" the concept
 *  if it has any of the topics, subtopics ("topic:sub") or tags/skills. */
export type ConceptMatch = {
  key: string;
  label: string;
  topics: string[];
  subtopics: string[];
  tags: string[];
};

export type PracticeRequest = {
  text: string;
  count: number;
  /** Hard constraints expressible as ordinary filters. */
  filters: Filters;
  /** Hard concept constraints: a problem must hit at least one of them (a request
   *  such as "limsup, Cauchy or MVT problems" asks for a mix, not all at once). */
  require: ConceptMatch[];
  /** Soft preferences ("emphasizing …", "focused on …"). */
  prefer: { concepts: ConceptMatch[]; types: string[]; categories: string[] };
  /** Words that were not understood (shown to the user, never silently dropped). */
  ignored: string[];
  seed: number;
};

export type SavedSet = { ids: string[]; createdAt: string; request: PracticeRequest };

export const DEFAULT_COUNT = 5;
export const MAX_COUNT = 40;
export const STORAGE_KEY = 'uapb.practice.current';

// ---------------------------------------------------------------- text normalisation

const stem = (w: string) =>
  w.length > 3 && w.endsWith('s') && !/(ss|us|is)$/.test(w) ? (w.endsWith('ies') && w.length > 5 ? w : w.slice(0, -1)) : w;

/** Lowercase, strip accents/apostrophes, map Greek letters, split into stemmed words. */
export function words(s: string): string[] {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ε|ϵ/g, ' epsilon ')
    .replace(/δ/g, ' delta ')
    .replace(/['’`]/g, '')
    .split(/[^a-z0-9.]+/)
    .map((w) => w.replace(/^\.+|\.+$/g, ''))
    .filter(Boolean)
    .map(stem);
}

// ---------------------------------------------------------------- vocabulary

type Ctx = { req: PracticeRequest; pref: boolean };
type Rule = { phrase: string[]; apply: (c: Ctx) => void; concept?: ConceptMatch; mergeable?: boolean; difficulty?: string };

export type Vocabulary = { rules: Map<string, Rule>; maxLen: number };

const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, couple: 2, few: 3, dozen: 12, single: 1,
};

const PREF_MARKERS = new Set([
  'emphasizing', 'emphasising', 'emphasize', 'emphasise', 'emphasi', 'emphasis', 'focused', 'focusing',
  'focu', 'stressing', 'highlighting', 'especially', 'preferably', 'prefer', 'preferring', 'prioritizing',
  'ideally', 'favoring', 'favouring',
].map(stem));

const STOPWORDS = new Set([
  'problem', 'exercise', 'question', 'give', 'me', 'some', 'and', 'or', 'on', 'with', 'of', 'the', 'a', 'an',
  'in', 'for', 'to', 'about', 'that', 'involving', 'involve', 'using', 'use', 'mix', 'mixed', 'set', 'practice',
  'worksheet', 'undergraduate', 'standard', 'i', 'want', 'need', 'please', 'level', 'difficulty', 'from', 'type',
  'kind', 'which', 'are', 'is', 'be', 'like', 'by', 'at', 'more', 'mostly', 'mainly', 'only', 'both', 'all', 'any',
  'my', 'it', 'than', 'but', 'not', 'yet', 'technique', 'style', 'through', 'between', 'also', 'plus', 'including',
  'include', 'real', 'analysi', 'analysis', 'course', 'textbook', 'book', 'list', 'make', 'generate', 'create',
  'pick', 'choose', 'select', 'quick', 'short', 'long', 'around', 'about', 'approximately', 'roughly', 'each',
  'mostly', 'focus', 'emphasi', 'idea', 'topic', 'concept', 'skill', 'that', 'this', 'these', 'those', 'with',
  ...PREF_MARKERS,
].map(stem));

// Single-word taxonomy labels that are too generic to be treated as a concept.
const GENERIC = new Set(['set', 'function', 'limit', 'machinery', 'characterization', 'estimate', 'the', 'example'].map(stem));

const phraseKey = (ws: string[]) => ws.join(' ');
const humanize = (s: string) => s.replace(/-/g, ' ');

function concept(label: string, t: { topics?: string[]; subtopics?: string[]; tags?: string[] }, key = label): ConceptMatch {
  return { key, label, topics: t.topics ?? [], subtopics: t.subtopics ?? [], tags: t.tags ?? [] };
}

// Hand-written synonyms. Subtopics are "topic:subtopic"; tags include skills.
const MANUAL: { label: string; phrases: string[]; topics?: string[]; subtopics?: string[]; tags?: string[] }[] = [
  {
    label: 'ε–δ / ε–N arguments',
    phrases: ['epsilon delta', 'eps delta', 'epsilon-delta', 'epsilon n', 'epsilon-n', 'eps n', 'epsilon argument', 'epsilon proof', 'epsilon'],
    subtopics: ['continuity:epsilon-delta-continuity', 'sequences:convergence'],
    tags: ['epsilon-delta', 'epsilon-N', 'epsilon', 'epsilon-delta-proof', 'epsilon-N-proof', 'choose-delta', 'choose-epsilon', 'epsilon-argument', 'epsilon-M-proof'],
  },
  {
    label: 'limsup & liminf',
    phrases: ['limsup', 'lim sup', 'liminf', 'lim inf', 'limit superior', 'limit inferior', 'limsup and liminf'],
    subtopics: ['sequences:limsup-liminf'],
    tags: ['limsup', 'liminf', 'limsup-characterization', 'tail-sup-argument'],
  },
  {
    label: 'Uniform continuity',
    phrases: ['uniform continuity', 'uniformly continuous', 'uc', 'heine cantor'],
    subtopics: ['continuity:uniform-continuity'],
    tags: ['uniform-continuity', 'Heine-Cantor'],
  },
  {
    label: 'Mean Value Theorem',
    phrases: ['mvt', 'mean value theorem', 'mean value', 'rolle', 'rolle theorem', 'rolles theorem'],
    subtopics: ['differentiation:rolle-mvt', 'differentiation:mvt-applications'],
    tags: ['mean-value-theorem', 'Rolle', 'MVT-application', 'Rolle-application'],
  },
  {
    label: 'Intermediate Value Theorem',
    phrases: ['ivt', 'intermediate value theorem', 'intermediate value property'],
    subtopics: ['continuity:IVT'],
    tags: ['IVT', 'IVT-application'],
  },
  {
    label: 'Extreme Value Theorem',
    phrases: ['evt', 'extreme value theorem'],
    subtopics: ['continuity:EVT'],
    tags: ['EVT', 'EVT-bound'],
  },
  {
    label: 'Fundamental Theorem of Calculus',
    phrases: ['ftc', 'fundamental theorem of calculus', 'fundamental theorem'],
    subtopics: ['integration:fundamental-theorem'],
    tags: ['FTC'],
  },
  {
    label: 'Uniform convergence',
    phrases: ['uniform convergence', 'uniformly convergent', 'converge uniformly', 'converges uniformly', 'uniform limit'],
    subtopics: ['function-sequences:uniform-convergence', 'function-sequences:uniform-cauchy', 'function-sequences:interchange-limits'],
    tags: ['uniform-convergence', 'sup-norm-estimate'],
  },
  {
    label: 'Pointwise convergence',
    phrases: ['pointwise convergence', 'pointwise'],
    subtopics: ['function-sequences:pointwise-convergence'],
    tags: ['pointwise-convergence'],
  },
  {
    label: 'Riemann sums',
    phrases: ['riemann sum', 'darboux sum', 'upper and lower sum', 'partition'],
    subtopics: ['integration:partitions-darboux-sums'],
    tags: ['Riemann-sum', 'riemann-sum-computation', 'partition'],
  },
  {
    label: 'Open sets',
    phrases: ['open set', 'open'],
    subtopics: ['topology:open-sets'],
    tags: ['open-set'],
  },
  {
    label: 'Closed sets',
    phrases: ['closed set', 'closed'],
    subtopics: ['topology:closed-sets'],
    tags: ['closed-set', 'closed-sets-contain-limits'],
  },
  {
    label: 'Open & closed sets',
    phrases: ['open and closed set', 'open or closed set', 'open closed set'],
    subtopics: ['topology:open-sets', 'topology:closed-sets', 'topology:interior-closure-boundary'],
    tags: ['open-set', 'closed-set', 'closed-sets-contain-limits'],
  },
  {
    label: 'Compactness',
    phrases: ['compactness', 'compact', 'compact set', 'heine borel', 'sequential compactness', 'sequentially compact'],
    subtopics: ['topology:compactness', 'topology:sequential-compactness'],
    tags: ['compactness', 'sequential-compactness'],
  },
  {
    label: 'Connectedness',
    phrases: ['connectedness', 'connected', 'connected set'],
    subtopics: ['topology:connectedness'],
    tags: ['connectedness'],
  },
  {
    label: 'Cauchy sequences',
    phrases: ['cauchy', 'cauchy sequence', 'cauchy criterion', 'cauchy condition'],
    subtopics: ['sequences:cauchy-sequences', 'function-sequences:uniform-cauchy', 'topology:complete-metric-spaces'],
    tags: ['Cauchy', 'cauchy-sequence'],
  },
  {
    label: 'Subsequences',
    phrases: ['subsequence', 'subsequential limit'],
    subtopics: ['sequences:subsequences', 'sequences:bolzano-weierstrass'],
    tags: ['subsequence', 'subsequence-extraction'],
  },
  {
    label: 'Bolzano–Weierstrass',
    phrases: ['bolzano weierstrass', 'bw'],
    subtopics: ['sequences:bolzano-weierstrass'],
    tags: ['Bolzano-Weierstrass'],
  },
  {
    label: 'Convergence',
    phrases: ['convergence', 'convergent', 'converge', 'converging', 'limit of a sequence'],
    subtopics: ['sequences:convergence', 'series:convergence-tests'],
    tags: ['convergence', 'epsilon-N-proof'],
  },
  {
    label: 'Supremum & infimum',
    phrases: ['supremum', 'infimum', 'sup', 'inf', 'sup and inf', 'least upper bound', 'lub', 'glb', 'greatest lower bound'],
    subtopics: ['real-numbers:supremum-infimum', 'real-numbers:completeness'],
    tags: ['supremum', 'least-upper-bound', 'sup-approximation'],
  },
  {
    label: 'Countability',
    phrases: ['countable', 'uncountable', 'countability', 'cardinality'],
    subtopics: ['foundations:cardinality'],
    tags: ['countable', 'uncountable', 'cardinality', 'construct-bijection'],
  },
  {
    label: "Taylor's theorem",
    phrases: ['taylor', 'taylor theorem', 'taylors theorem', 'taylor polynomial', 'taylor series', 'taylor remainder'],
    subtopics: ['differentiation:taylor', 'function-sequences:taylor-series'],
    tags: ['Taylor', 'taylor-remainder-estimate', 'taylor-remainder-sign', 'integral-remainder'],
  },
  {
    label: 'Power series',
    phrases: ['power series', 'radius of convergence'],
    subtopics: ['series:power-series', 'function-sequences:power-series'],
    tags: ['power-series', 'radius-of-convergence'],
  },
  {
    label: 'Density',
    phrases: ['density', 'dense', 'dense set', 'density of q', 'density of the rationals'],
    subtopics: ['real-numbers:density-of-Q', 'topology:dense-sets'],
    tags: ['density', 'use-density-of-Q', 'density-argument', 'counterexample-via-density'],
  },
  {
    label: 'Monotonicity',
    phrases: ['monotone', 'monotonic', 'monotone convergence', 'increasing', 'decreasing'],
    subtopics: ['sequences:monotone-sequences', 'continuity:monotone-functions'],
    tags: ['monotone', 'monotonicity-via-derivative'],
  },
  {
    label: 'Lipschitz & Hölder',
    phrases: ['lipschitz', 'holder', 'lipschitz continuity'],
    subtopics: ['continuity:lipschitz-holder'],
    tags: ['Lipschitz', 'Holder'],
  },
  {
    label: 'Recursive sequences',
    phrases: ['recursive', 'recursive sequence', 'recursively defined', 'recurrence'],
    subtopics: ['sequences:recursive-sequences'],
    tags: ['recursive-sequence'],
  },
  {
    label: 'Fixed points & contractions',
    phrases: ['fixed point', 'contraction', 'contraction mapping'],
    subtopics: ['function-sequences:fixed-point'],
  },
  {
    label: 'Quantifiers & negation',
    phrases: ['quantifier', 'negation', 'negating', 'negate', 'logic'],
    subtopics: ['foundations:logic-quantifiers'],
    tags: ['quantifiers', 'negation', 'negate-definition'],
  },
];

// Topics: labels plus common aliases. Topic-only entries become topic filters.
const TOPIC_ALIASES: Record<string, string[]> = {
  foundations: ['foundations', 'foundation', 'sets and functions', 'set theory'],
  'real-numbers': ['real numbers', 'reals', 'real number system', 'the real numbers', 'completeness axiom'],
  sequences: ['sequences', 'sequence', 'sequences of real numbers', 'numerical sequences'],
  series: ['series', 'infinite series', 'numerical series'],
  topology: ['topology', 'topology of r', 'point set topology', 'metric topology'],
  continuity: ['continuity', 'continuous function', 'continuous', 'limits of functions'],
  differentiation: ['differentiation', 'derivative', 'differentiable', 'differential calculus'],
  integration: ['integration', 'riemann integration', 'riemann integral', 'riemann', 'integral', 'integrability'],
  'function-sequences': [
    'sequences of functions', 'series of functions', 'function sequences', 'functional sequences',
    'sequences and series of functions', 'function series',
  ],
};

const DIFF_WORDS: Record<string, string> = {
  introductory: 'introductory', intro: 'introductory', beginner: 'introductory', elementary: 'introductory',
  warmup: 'introductory', 'warm up': 'introductory',
  easy: 'easy', easier: 'easy', simple: 'easy',
  medium: 'medium', moderate: 'medium', intermediate: 'medium',
  hard: 'hard', harder: 'hard', difficult: 'hard', tough: 'hard', advanced: 'hard',
  'very hard': 'very-hard', 'very difficult': 'very-hard', hardest: 'very-hard', 'extremely hard': 'very-hard',
};

const TYPE_WORDS: Record<string, string> = {
  definition: 'definition', definitional: 'definition', 'definition check': 'definition',
  proof: 'proof', prove: 'proof', 'proof technique': 'proof', 'proof based': 'proof', 'proof writing': 'proof',
  counterexample: 'counterexample', 'counter example': 'counterexample',
  construction: 'construction', construct: 'construction', constructive: 'construction',
  computation: 'computation', computational: 'computation', compute: 'computation', calculation: 'computation',
  'theorem application': 'theorem-application', 'applying theorem': 'theorem-application',
  'application of theorem': 'theorem-application', application: 'theorem-application',
  conceptual: 'conceptual',
};

const CATEGORY_WORDS: Record<string, string> = {
  canonical: 'canonical', classic: 'canonical', classical: 'canonical', core: 'canonical', essential: 'canonical',
  synthesis: 'synthesis', synthesizing: 'synthesis', integrative: 'synthesis',
  challenge: 'challenge', challenging: 'challenge',
};

const STATUS_WORDS: Record<string, string> = {
  unseen: 'unseen', new: 'unseen', fresh: 'unseen', unattempted: 'unseen', untried: 'unseen',
  'not attempted': 'unseen', 'not yet attempted': 'unseen', 'never attempted': 'unseen', 'havent tried': 'unseen',
  'not done': 'unseen', 'havent done': 'unseen', unsolved: 'unseen',
  attempted: 'attempted', tried: 'attempted', 'in progress': 'attempted', 'started': 'attempted',
  completed: 'completed', done: 'completed', solved: 'completed', finished: 'completed', 'already done': 'completed',
};

const SOURCE_WORDS: Record<string, string> = {
  mit: 'mit', '18.100a': 'mit', '18.100': 'mit', 'mit 18.100a': 'mit', 'mit 2020': 'mit', 'mit 18.100a 2020': 'mit',
  abbott: 'abbott', 'understanding analysis': 'abbott',
  lebl: 'lebl', 'basic analysis': 'lebl',
  ross: 'ross', 'elementary analysis': 'ross',
  cummings: 'cummings',
  tao: 'tao', 'analysis i': 'tao',
};

const pushUnique = (arr: string[], v: string) => {
  if (!arr.includes(v)) arr.push(v);
};

/** Build the phrase table from the taxonomy (topics/subtopics) plus tags and skills. */
export function buildVocabulary(topics: Topic[], tags: string[], skills: string[]): Vocabulary {
  const rules = new Map<string, Rule>();
  const add = (phrase: string, apply: Rule['apply'], extra: Partial<Rule> = {}) => {
    const ws = words(phrase);
    const k = phraseKey(ws);
    if (!ws.length || rules.has(k)) return; // first registration wins
    rules.set(k, { phrase: ws, apply, ...extra });
  };

  // 1. Structural words (highest priority).
  for (const [w, d] of Object.entries(DIFF_WORDS))
    add(w, ({ req }) => pushUnique(req.filters.difficulty, d), { difficulty: d });
  for (const [w, t] of Object.entries(TYPE_WORDS))
    add(w, ({ req, pref }) => pushUnique(pref ? req.prefer.types : req.filters.type, t));
  for (const [w, c] of Object.entries(CATEGORY_WORDS))
    add(w, ({ req, pref }) => pushUnique(pref ? req.prefer.categories : req.filters.category, c));
  for (const [w, s] of Object.entries(STATUS_WORDS)) add(w, ({ req }) => pushUnique(req.filters.status, s));
  for (const [w, s] of Object.entries(SOURCE_WORDS)) add(w, ({ req }) => pushUnique(req.filters.source, s));
  for (const w of ['bookmarked', 'bookmark', 'starred', 'saved', 'favorite', 'favourite'])
    add(w, ({ req }) => { req.filters.bookmarked = true; });

  const conceptApply = (c: ConceptMatch): Rule['apply'] => ({ req, pref }) => {
    const pureTopic = c.topics.length > 0 && !c.subtopics.length && !c.tags.length;
    if (pref) {
      if (!req.prefer.concepts.some((x) => x.key === c.key)) req.prefer.concepts.push(c);
    } else if (pureTopic) {
      c.topics.forEach((t) => pushUnique(req.filters.topic, t));
    } else if (!req.require.some((x) => x.key === c.key)) {
      req.require.push(c);
    }
  };

  // 2. Hand-written concept synonyms.
  for (const m of MANUAL) {
    const c = concept(m.label, m, `m:${m.label}`);
    for (const p of m.phrases) add(p, conceptApply(c), { concept: c });
  }

  // 3. Topics.
  for (const t of topics) {
    const c = concept(t.label, { topics: [t.key] }, `topic:${t.key}`);
    for (const p of [t.label, humanize(t.key), ...(TOPIC_ALIASES[t.key] ?? [])]) add(p, conceptApply(c), { concept: c });
  }

  // 4. Subtopics, tags and skills; when phrases coincide their targets are merged.
  const addMerged = (phrase: string, c: ConceptMatch) => {
    const ws = words(phrase.replace(/^\s*the\s+/i, ''));
    if (!ws.length || (ws.length === 1 && GENERIC.has(ws[0]))) return;
    const ex = rules.get(phraseKey(ws));
    if (ex) {
      if (ex.mergeable && ex.concept && ex.concept !== c) {
        c.topics.forEach((x) => pushUnique(ex.concept!.topics, x));
        c.subtopics.forEach((x) => pushUnique(ex.concept!.subtopics, x));
        c.tags.forEach((x) => pushUnique(ex.concept!.tags, x));
      }
      return;
    }
    add(phrase.replace(/^\s*the\s+/i, ''), conceptApply(c), { concept: c, mergeable: true });
  };
  for (const t of topics) {
    for (const [sk, sl] of Object.entries(t.subtopics)) {
      const c = concept(sl, { subtopics: [`${t.key}:${sk}`] }, `sub:${t.key}:${sk}`);
      const clean = sl.replace(/\(.*?\)/g, ' ');
      for (const p of [clean, humanize(sk), ...clean.split(/&|,|\band\b/i)]) addMerged(p, c);
    }
  }
  for (const tag of [...tags, ...skills]) addMerged(humanize(tag), concept(humanize(tag), { tags: [tag] }, `tag:${tag}`));

  let maxLen = 1;
  for (const r of rules.values()) maxLen = Math.max(maxLen, r.phrase.length);
  return { rules, maxLen };
}

// ---------------------------------------------------------------- parsing

export function emptyRequest(text = '', seed = 1): PracticeRequest {
  return { text, count: DEFAULT_COUNT, filters: emptyFilters(), require: [], prefer: { concepts: [], types: [], categories: [] }, ignored: [], seed };
}

/** Deterministic keyword parse of a free-text practice request. */
export function parseRequest(text: string, vocab: Vocabulary, seed = 1): PracticeRequest {
  const req = emptyRequest(text, seed);
  const ws = words(text);
  const used = new Array(ws.length).fill(false);

  // Count: first small number (digits or number word).
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i];
    const n = /^\d{1,2}$/.test(w) ? Number(w) : NUMBER_WORDS[w];
    if (n !== undefined && n > 0) {
      req.count = Math.min(MAX_COUNT, n);
      used[i] = true;
      break;
    }
  }

  // Everything after a preference marker ("emphasizing", "focused on", …) is soft.
  let prefFrom = ws.length;
  for (let i = 0; i < ws.length; i++) if (PREF_MARKERS.has(ws[i])) { prefFrom = i; break; }

  // Greedy longest match at each position.
  const diffPositions: { i: number; end: number; d: string }[] = [];
  for (let i = 0; i < ws.length; ) {
    if (used[i]) { i++; continue; }
    let matched = false;
    for (let len = Math.min(vocab.maxLen, ws.length - i); len >= 1; len--) {
      const r = vocab.rules.get(phraseKey(ws.slice(i, i + len)));
      if (!r) continue;
      r.apply({ req, pref: i >= prefFrom });
      if (r.difficulty) diffPositions.push({ i, end: i + len, d: r.difficulty });
      for (let k = i; k < i + len; k++) used[k] = true;
      i += len;
      matched = true;
      break;
    }
    if (!matched) i++;
  }

  // Ranges: "easy to hard" includes the levels in between.
  for (let k = 0; k + 1 < diffPositions.length; k++) {
    const a = diffPositions[k], b = diffPositions[k + 1];
    const between = ws.slice(a.end, b.i);
    if (between.length === 1 && ['to', 'through', 'thru'].includes(between[0])) {
      const lo = DIFFICULTIES.indexOf(a.d as never), hi = DIFFICULTIES.indexOf(b.d as never);
      if (lo >= 0 && hi >= 0)
        for (let j = Math.min(lo, hi); j <= Math.max(lo, hi); j++) pushUnique(req.filters.difficulty, DIFFICULTIES[j]);
    }
  }
  req.filters.difficulty.sort((x, y) => DIFFICULTIES.indexOf(x as never) - DIFFICULTIES.indexOf(y as never));

  // Report leftovers honestly.
  ws.forEach((w, i) => {
    if (!used[i] && !STOPWORDS.has(w) && !/^\d{3,}$/.test(w) && !req.ignored.includes(w)) req.ignored.push(w);
  });

  // A preferred type that is also a hard type adds nothing.
  req.prefer.types = req.prefer.types.filter((t) => !req.filters.type.includes(t));
  req.prefer.categories = req.prefer.categories.filter((c) => !req.filters.category.includes(c));
  return req;
}

// ---------------------------------------------------------------- selection

export type StatusLookup = (id: string) => { status: string; bookmarked?: boolean };

export const conceptHits = (p: Problem, c: ConceptMatch) =>
  c.topics.includes(p.topic) ||
  p.subtopics.some((s) => c.subtopics.includes(`${p.topic}:${s}`)) ||
  p.tags.some((t) => c.tags.includes(t)) ||
  p.skills.some((t) => c.tags.includes(t));

const mitAssigned = (p: Problem) => (p.assignedIn ?? []).some((a) => a.startsWith('MIT 18.100A'));

/** Same semantics as filter.ts `matches`, with progress passed in (pure). */
export function matchesWith(p: Problem, f: Filters, statusOf: StatusLookup): boolean {
  if (f.topic.length && !f.topic.includes(p.topic)) return false;
  if (f.subtopic.length && !p.subtopics.some((s) => f.subtopic.includes(s))) return false;
  if (f.source.length && !(f.source.includes(p.source.key) || (f.source.includes('mit') && mitAssigned(p)))) return false;
  if (f.difficulty.length && !f.difficulty.includes(p.difficulty)) return false;
  if (f.category.length && !f.category.includes(p.category)) return false;
  if (f.type.length && !f.type.includes(p.type)) return false;
  if (f.tag.length && !f.tag.every((t) => p.tags.includes(t) || p.skills.includes(t))) return false;
  if (f.status.length || f.bookmarked) {
    const s = statusOf(p.id);
    if (f.status.length && !f.status.includes(s.status)) return false;
    if (f.bookmarked && !s.bookmarked) return false;
  }
  return true;
}

export const hitsRequired = (p: Problem, req: PracticeRequest) =>
  !req.require.length || req.require.some((c) => conceptHits(p, c));

/** All problems satisfying the hard constraints of a request. */
export function candidates(pool: Problem[], req: PracticeRequest, statusOf: StatusLookup): Problem[] {
  return pool.filter((p) => matchesWith(p, req.filters, statusOf) && hitsRequired(p, req));
}

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Selection = {
  problems: Problem[];
  /** Problems satisfying the hard constraints. */
  matched: number;
  /** Distinct concepts among the matches (the most that can be chosen). */
  distinct: number;
  requested: number;
};

const normConcept = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');

/**
 * Pick up to `req.count` problems maximizing variety: never two with the same
 * concept; penalties for repeating subtopic, type, source and topic; boosts for
 * preferences; unseen/attempted preferred over completed unless a status filter
 * is set. Ties are broken by a seeded shuffle. Result is ordered easy → hard.
 */
export function selectProblems(pool: Problem[], req: PracticeRequest, statusOf: StatusLookup): Selection {
  const cands = candidates(pool, req, statusOf);
  const rng = mulberry32(req.seed);
  const order = new Map(pool.map((p, i) => [p.id, i]));

  const base = new Map<string, number>();
  for (const p of cands) {
    let s = rng() * 0.9; // seeded tie-break / variety
    for (const c of req.prefer.concepts) if (conceptHits(p, c)) s += 2;
    if (req.prefer.types.includes(p.type)) s += 1.5;
    if (req.prefer.categories.includes(p.category)) s += 1;
    if (!req.filters.status.length) {
      const st = statusOf(p.id).status;
      s += st === 'unseen' ? 1.5 : st === 'attempted' ? 1 : 0;
    }
    base.set(p.id, s);
  }

  const chosen: Problem[] = [];
  const usedConcepts = new Set<string>();
  const remaining = [...cands];
  while (chosen.length < req.count) {
    let best: Problem | null = null;
    let bestScore = -Infinity;
    for (const p of remaining) {
      if (usedConcepts.has(normConcept(p.concept))) continue;
      let s = base.get(p.id)!;
      for (const q of chosen) {
        if (q.topic === p.topic && p.subtopics.some((x) => q.subtopics.includes(x))) s -= 1.5;
        if (q.type === p.type) s -= 0.8;
        if (q.source.key === p.source.key) s -= 0.4;
        if (q.topic === p.topic) s -= 0.3;
      }
      if (s > bestScore) { bestScore = s; best = p; }
    }
    if (!best) break;
    chosen.push(best);
    usedConcepts.add(normConcept(best.concept));
    remaining.splice(remaining.indexOf(best), 1);
  }

  chosen.sort(
    (a, b) => DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty) || order.get(a.id)! - order.get(b.id)!,
  );
  return {
    problems: chosen,
    matched: cands.length,
    distinct: new Set(cands.map((p) => normConcept(p.concept))).size,
    requested: req.count,
  };
}

// ---------------------------------------------------------------- summaries

export function describeRequest(req: PracticeRequest, labelOf: (kind: string, v: string) => string): string[] {
  const out: string[] = [];
  const f = req.filters;
  if (f.difficulty.length) out.push(f.difficulty.map((d) => labelOf('difficulty', d)).join(' or '));
  if (f.category.length) out.push(f.category.map((d) => labelOf('category', d)).join(' or '));
  if (f.type.length) out.push(f.type.map((d) => labelOf('type', d)).join(' or '));
  if (f.topic.length) out.push(f.topic.map((d) => labelOf('topic', d)).join(' or '));
  if (f.subtopic.length) out.push(f.subtopic.map((d) => labelOf('subtopic', d)).join(' or '));
  if (f.source.length) out.push('from ' + f.source.map((d) => labelOf('source', d)).join(' or '));
  if (f.tag.length) out.push('tagged ' + f.tag.join(', '));
  if (req.require.length) out.push(`involving ${req.require.map((c) => c.label).join(' or ')}`);
  if (f.status.length) out.push(f.status.map((d) => labelOf('status', d)).join(' or '));
  if (f.bookmarked) out.push('bookmarked');
  return out;
}

// ---------------------------------------------------------------- LaTeX export

const TEX_SPECIAL: Record<string, string> = {
  '\\': '\\textbackslash{}', '&': '\\&', '%': '\\%', '#': '\\#', _: '\\_', '{': '\\{', '}': '\\}',
  '~': '\\textasciitilde{}', '^': '\\textasciicircum{}', $: '\\$',
};
const TEXT_UNICODE: Record<string, string> = {
  'ε': '$\\varepsilon$', 'δ': '$\\delta$', '–': '--', '—': '---', '’': "'", '‘': '`', '“': '``', '”': "''",
  '≤': '$\\le$', '≥': '$\\ge$', '→': '$\\to$', '⇒': '$\\Rightarrow$', '∞': '$\\infty$', '…': '\\ldots{}',
  'ℓ': '$\\ell$', '²': '$^2$', 'ⁿ': '$^n$', '₀': '$_0$', '₁': '$_1$', '∫': '$\\int$', '×': '$\\times$',
};

export function escapeTex(s: string): string {
  return s.replace(/[\\&%#_{}~^$]/g, (c) => TEX_SPECIAL[c]).replace(/[εδ–—’‘“”≤≥→⇒∞…ℓ²ⁿ₀₁∫×]/g, (c) => TEXT_UNICODE[c]);
}

const PART_LINE = /\n(\s*(?:\(?[a-h]\)|\(?[ivx]{1,5}\)|\(?[0-9]{1,2}\))\s)/g;

function textToTex(s: string): string {
  return escapeTex(s)
    .replace(/\*\*(.+?)\*\*/gs, '\\textbf{$1}')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1\\emph{$2}')
    .replace(PART_LINE, '\n\n$1');
}

/** Convert the canonical problem format to LaTeX body text. Math is kept verbatim. */
export function problemToTex(src: string): string {
  return tokenize(src)
    .map((t) => (t.kind === 'math' ? (t.display ? `\n$$${t.value}$$\n` : `$${t.value}$`) : textToTex(t.value)))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export type TexItem = { heading: string; latex: string };

export function toLatexDocument(items: TexItem[], opts: { title?: string; date?: string } = {}): string {
  const title = opts.title ?? 'Practice set';
  const lines = [
    '\\documentclass[11pt]{article}',
    '\\usepackage[utf8]{inputenc}',
    '\\usepackage[margin=1in]{geometry}',
    '\\usepackage{amsmath,amssymb}',
    '\\setlength{\\parindent}{0pt}',
    '\\setlength{\\parskip}{0.6em}',
    `\\title{${escapeTex(title)}}`,
    `\\date{${escapeTex(opts.date ?? '')}}`,
    '\\begin{document}',
    '\\maketitle',
    '',
  ];
  items.forEach((it, i) => {
    lines.push(`\\section*{${i + 1}. ${escapeTex(it.heading)}}`, '', problemToTex(it.latex), '', '\\vspace{1.5em}', '');
  });
  lines.push('\\end{document}', '');
  return lines.join('\n');
}

// Re-exported for UI convenience.
export { DIFFICULTIES, CATEGORIES, TYPES };

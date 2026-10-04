import { useMemo, useState } from 'preact/hooks';
import type { Problem } from '../lib/types';
import {
  problems, byId, topics, topicLabel, sourceByKey, sourceShort, label, allTags, allSkills,
} from '../lib/bank';
import { get as getProgress } from '../lib/progress';
import { useProgress } from '../lib/useProgress';
import type { Filters } from '../lib/filter';
import {
  buildVocabulary, parseRequest, selectProblems, candidates, hitsRequired, describeRequest, toLatexDocument,
  STORAGE_KEY, MAX_COUNT, type PracticeRequest, type SavedSet, type Vocabulary, type ConceptMatch,
} from '../lib/practice';
import { FilterPanel } from '../components/FilterPanel';
import { RichText } from '../components/RichText';
import { ProblemList } from '../components/ProblemRow';
import '../styles/explore.css';

const EXAMPLE_REQUESTS = [
  '5 medium canonical compactness problems emphasizing definitions and standard proof techniques',
  '8 undergraduate sequence problems focused on convergence and subsequences',
  '5 introductory or medium epsilon-delta problems',
  '6 unseen easy to hard problems on continuity and differentiation',
  '4 upper tier topology problems',
];

const STATUS_LABEL: Record<string, string> = { unseen: 'Unseen', attempted: 'Attempted', completed: 'Completed' };

let vocab: Vocabulary | null = null;
const getVocab = () => (vocab ??= buildVocabulary(topics, allTags, allSkills));

const statusOf = (id: string) => getProgress(id);
const newSeed = () => (Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0;

function loadSaved(): SavedSet | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as SavedSet;
    if (!Array.isArray(s?.ids) || !s.request || !s.request.filters) return null;
    // Older/foreign data: fill in missing fields defensively.
    s.request.require ??= [];
    s.request.prefer ??= { concepts: [], types: [], categories: [] };
    s.request.ignored ??= [];
    s.request.seed ??= 1;
    return s;
  } catch {
    return null;
  }
}

function storeSaved(s: SavedSet | null) {
  try {
    if (s) localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage unavailable: the set lives for this page view only */
  }
}

const subtopicName = (k: string) => {
  for (const t of topics) if (t.subtopics[k]) return t.subtopics[k];
  return k;
};

function labelOf(kind: string, v: string): string {
  if (kind === 'topic') return topicLabel(v);
  if (kind === 'subtopic') return subtopicName(v);
  if (kind === 'source') return v === 'mit' ? 'MIT 18.100A (2020)' : sourceShort(v);
  if (kind === 'status') return STATUS_LABEL[v] ?? v;
  return label(v);
}

export function problemHeading(p: Problem): string {
  const s = sourceByKey.get(p.source.key);
  return [s?.shortName ?? p.source.key, p.source.section ?? p.source.chapter, p.source.problemNumber]
    .filter(Boolean)
    .join(', ');
}

function downloadTex(list: Problem[], req: PracticeRequest, createdAt: string) {
  const tex = toLatexDocument(
    list.map((p) => ({ heading: problemHeading(p), latex: p.problemLatex })),
    { title: 'Practice set', date: new Date(createdAt).toLocaleDateString() },
  );
  const blob = new Blob([`% Request: ${req.text.replace(/\n/g, ' ')}\n${tex}`], { type: 'application/x-tex' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `practice-set-${createdAt.slice(0, 10)}.tex`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function ConceptChips({
  items, onRemove, legend,
}: { items: { key: string; text: string; title?: string }[]; onRemove: (k: string) => void; legend: string }) {
  if (!items.length) return null;
  return (
    <div class="px-chiprow">
      <span class="px-chiplegend">{legend}</span>
      <ul>
        {items.map((c) => (
          <li key={c.key}>
            <button type="button" class="chip px-chip" title={c.title} onClick={() => onRemove(c.key)} aria-label={`Remove ${c.text}`}>
              {c.text} <span aria-hidden="true">×</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const conceptTitle = (c: ConceptMatch) =>
  'Matches: ' + [...c.topics.map(topicLabel), ...c.subtopics.map((s) => subtopicName(s.split(':')[1])), ...c.tags].join(', ');

export function Practice({ query }: { query: URLSearchParams }) {
  const progress = useProgress();
  const [saved, setSaved] = useState<SavedSet | null>(loadSaved);
  const [text, setText] = useState(() => query.get('q') ?? saved?.request.text ?? '');

  const req = saved?.request ?? null;

  const commit = (r: PracticeRequest) => {
    const sel = selectProblems(problems, r, statusOf);
    const s: SavedSet = { ids: sel.problems.map((p) => p.id), createdAt: new Date().toISOString(), request: r };
    storeSaved(s);
    setSaved(s);
  };

  const build = (t: string) => {
    if (!t.trim()) return;
    commit(parseRequest(t, getVocab(), newSeed()));
  };

  const list = useMemo(() => (saved?.ids ?? []).map((id) => byId.get(id)).filter((p): p is Problem => !!p), [saved]);
  const missing = (saved?.ids.length ?? 0) - list.length;

  const live = useMemo(() => {
    if (!req) return null;
    const c = candidates(problems, req, statusOf);
    return { matched: c.length, distinct: new Set(c.map((p) => p.concept.trim().toLowerCase())).size, pool: c };
  }, [req, progress]);

  // FilterPanel counts are relative to the "must involve" concepts.
  const requirePool = useMemo(
    () => (req ? problems.filter((p) => hitsRequired(p, req)) : problems),
    [req],
  );

  const tally = { unseen: 0, attempted: 0, completed: 0 } as Record<string, number>;
  for (const p of list) tally[getProgress(p.id).status]++;

  return (
    <div class="page-wide ex-page px-page">
      <header class="ex-header">
        <h1>Practice</h1>
        <p class="muted ex-lede">
          Describe the set you want. The request is read by simple keyword matching and turned into filters you can
          correct below; problems are only ever chosen from the bank, never written.
        </p>
      </header>

      <form
        class="px-request"
        onSubmit={(e) => {
          e.preventDefault();
          build(text);
        }}
      >
        <label for="px-text" class="px-request-label">Request</label>
        <textarea
          id="px-text"
          rows={2}
          value={text}
          placeholder="e.g. 5 medium canonical compactness problems emphasizing definitions"
          onInput={(e) => setText((e.target as HTMLTextAreaElement).value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              build(text);
            }
          }}
        />
        <div class="px-request-actions">
          <button type="submit" class="btn btn-primary" disabled={!text.trim()}>Build set</button>
        </div>
        <details class="px-examples">
          <summary>Example requests</summary>
          <ul>
            {EXAMPLE_REQUESTS.map((ex) => (
              <li key={ex}>
                <button type="button" class="btn btn-quiet" onClick={() => { setText(ex); build(ex); }}>{ex}</button>
              </li>
            ))}
          </ul>
        </details>
      </form>

      {req && saved && (
        <div class="ex-layout px-layout">
          <aside class="ex-aside">
            <section class="px-interp" aria-labelledby="px-interp-h">
              <h2 id="px-interp-h" class="px-h2">Interpretation</h2>
              <p class="px-summary">
                {req.count} problem{req.count === 1 ? '' : 's'}
                {describeRequest(req, labelOf).map((s) => ` · ${s}`).join('')}
                {(req.prefer.concepts.length || req.prefer.types.length || req.prefer.categories.length) ? (
                  <>
                    {' · emphasizing '}
                    {[
                      ...req.prefer.concepts.map((c) => c.label),
                      ...req.prefer.types.map(label),
                      ...req.prefer.categories.map(label),
                    ].join(', ')}
                  </>
                ) : null}
              </p>
              {req.ignored.length > 0 && (
                <p class="px-ignored muted">Not understood (ignored): {req.ignored.join(', ')}</p>
              )}

              <label class="px-countfield">
                <span>Number of problems</span>
                <input
                  type="number"
                  min={1}
                  max={MAX_COUNT}
                  value={req.count}
                  onChange={(e) => {
                    const n = Math.max(1, Math.min(MAX_COUNT, Number((e.target as HTMLInputElement).value) || 1));
                    commit({ ...req, count: n });
                  }}
                />
              </label>

              <ConceptChips
                legend={req.require.length > 1 ? "Must involve one of" : "Must involve"}
                items={req.require.map((c) => ({ key: c.key, text: c.label, title: conceptTitle(c) }))}
                onRemove={(k) => commit({ ...req, require: req.require.filter((c) => c.key !== k) })}
              />
              <ConceptChips
                legend="Emphasis"
                items={[
                  ...req.prefer.concepts.map((c) => ({ key: 'c:' + c.key, text: c.label, title: conceptTitle(c) })),
                  ...req.prefer.types.map((t) => ({ key: 't:' + t, text: label(t) })),
                  ...req.prefer.categories.map((t) => ({ key: 'g:' + t, text: label(t) })),
                ]}
                onRemove={(k) =>
                  commit({
                    ...req,
                    prefer: {
                      concepts: req.prefer.concepts.filter((c) => 'c:' + c.key !== k),
                      types: req.prefer.types.filter((t) => 't:' + t !== k),
                      categories: req.prefer.categories.filter((t) => 'g:' + t !== k),
                    },
                  })
                }
              />
            </section>
            <FilterPanel
              title="Adjust filters"
              filters={req.filters}
              pool={requirePool}
              onChange={(f: Filters) => commit({ ...req, filters: f })}
            />
          </aside>

          <section class="ex-results px-set" aria-labelledby="px-set-h">
            <div class="px-set-head">
              <h2 id="px-set-h" class="px-h2">Current set</h2>
              <p class="meta-line">
                <span>Built {new Date(saved.createdAt).toLocaleString()}</span>
                <span>{list.length} problem{list.length === 1 ? '' : 's'}</span>
                {list.length > 0 && (
                  <span>{tally.completed} completed, {tally.attempted} attempted, {tally.unseen} unseen</span>
                )}
              </p>
            </div>

            {list.length > 0 && (
              <div class="px-progress" aria-hidden="true">
                <span class="is-completed" style={{ flexGrow: tally.completed }} />
                <span class="is-attempted" style={{ flexGrow: tally.attempted }} />
                <span class="is-unseen" style={{ flexGrow: tally.unseen }} />
              </div>
            )}

            {live && list.length < req.count && (
              <div class="px-notice" role="note">
                {list.length === 0 ? (
                  <p>
                    No problems in the bank match this request yet. Remove a constraint on the left, or check back as
                    more sources are added.
                  </p>
                ) : (
                  <p>
                    You asked for {req.count}, but only {live.matched} problem{live.matched === 1 ? '' : 's'} in the
                    bank match{live.matched === 1 ? 'es' : ''}
                    {live.distinct < live.matched ? ` (${live.distinct} with distinct underlying results)` : ''}. The set
                    below is everything that fits; nothing has been made up to fill the gap.
                  </p>
                )}
              </div>
            )}
            {missing > 0 && (
              <p class="px-notice muted">{missing} saved problem(s) are no longer in the bank and were skipped.</p>
            )}

            {list.length > 0 && (
              <>
                <ProblemList problems={list} numbered linkQuery="set=practice" />

                <div class="px-actions">
                  <button type="button" class="btn" onClick={() => commit({ ...req, seed: newSeed() })}
                    disabled={live ? live.matched <= list.length : false}
                    title={live && live.matched <= list.length ? 'Every matching problem is already in the set' : undefined}>
                    Reshuffle
                  </button>
                  <button type="button" class="btn" onClick={() => window.print()}>Print worksheet</button>
                  <button type="button" class="btn" onClick={() => downloadTex(list, req, saved.createdAt)}>Download .tex</button>
                  <button
                    type="button"
                    class="btn btn-quiet"
                    onClick={() => {
                      storeSaved(null);
                      setSaved(null);
                    }}
                  >
                    Clear set
                  </button>
                </div>
                <p class="muted px-footnote">
                  Opening a problem never changes its status; mark it yourself on the problem page.
                </p>
              </>
            )}
          </section>
        </div>
      )}

      {!saved && (
        <p class="ex-empty muted">No practice set yet. Write a request above, or pick an example.</p>
      )}

      {list.length > 0 && (
        <div class="practice-print" aria-hidden="true">
          <h1>Practice set</h1>
          <p class="practice-print-meta">{new Date(saved!.createdAt).toLocaleDateString()} · {req!.text}</p>
          <ol>
            {list.map((p) => (
              <li key={p.id}>
                <h2>{problemHeading(p)}</h2>
                <RichText src={p.problemLatex} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

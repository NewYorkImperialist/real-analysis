import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { Problem } from '../lib/types';
import { byId } from '../lib/bank';
import { search } from '../lib/search';
import { matches, filtersFromQuery, filtersToQuery, type Filters } from '../lib/filter';
import { navigate } from '../lib/router';
import { useProgress } from '../lib/useProgress';
import { FilterPanel, activeFilterCount } from '../components/FilterPanel';
import { ProblemList } from '../components/ProblemRow';
import '../styles/explore.css';

const EXAMPLES = ['limsup', 'uniform continuity', 'MVT', 'Abbott 4.3', 'Cantor set', 'epsilon-delta', 'Bolzano–Weierstrass'];

function buildQuery(q: string, f: Filters): string {
  const p = new URLSearchParams(filtersToQuery(f));
  const t = q.trim();
  if (t) p.set('q', q);
  // Put q first for readable URLs.
  const out = new URLSearchParams();
  if (p.has('q')) out.set('q', p.get('q')!);
  p.forEach((v, k) => k !== 'q' && out.set(k, v));
  return out.toString();
}

export function SearchPage({ query }: { query: URLSearchParams }) {
  const progress = useProgress();
  const urlQ = query.get('q') ?? '';
  const filters = filtersFromQuery(query);
  const [text, setText] = useState(urlQ);
  const timer = useRef<number | undefined>(undefined);
  const lastPushed = useRef(urlQ);

  // External URL change (back button, example link): adopt it.
  useEffect(() => {
    if (urlQ !== lastPushed.current) {
      lastPushed.current = urlQ;
      setText(urlQ);
    }
  }, [urlQ]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const push = (q: string, f: Filters) => {
    lastPushed.current = q.trim() ? q : '';
    navigate('search', buildQuery(q, f), true);
  };

  const onInput = (v: string) => {
    setText(v);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => push(v, filters), 200);
  };

  const hits = useMemo(() => {
    const res = search(urlQ);
    return res.map((r) => byId.get(r.id)).filter((p): p is Problem => !!p);
  }, [urlQ]);

  const filtered = useMemo(() => hits.filter((p) => matches(p, filters)), [hits, query.toString(), progress]);
  const nFilters = activeFilterCount(filters);
  const hasQuery = urlQ.trim().length > 0;

  const examples = (
    <ul class="ex-examples" aria-label="Example searches">
      {EXAMPLES.map((e) => (
        <li key={e}>
          <button
            type="button"
            class="btn btn-quiet ex-example"
            onClick={() => {
              window.clearTimeout(timer.current);
              setText(e);
              push(e, filters);
            }}
          >
            {e}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div class="page-wide ex-page">
      <header class="ex-header">
        <h1>Search</h1>
        <form
          class="ex-searchform"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            window.clearTimeout(timer.current);
            push(text, filters);
          }}
        >
          <label for="search-q" class="visually-hidden">Search problems</label>
          <input
            id="search-q"
            class="ex-searchbox"
            type="search"
            autoComplete="off"
            spellcheck={false}
            placeholder="Statement text, topic, theorem, source number…"
            value={text}
            onInput={(e) => onInput((e.target as HTMLInputElement).value)}
            autoFocus
          />
        </form>
      </header>

      <div class="ex-layout">
        <aside class="ex-aside">
          <FilterPanel
            title="Narrow results"
            filters={filters}
            pool={hasQuery ? hits : undefined}
            onChange={(f) => push(text, f)}
          />
        </aside>

        <div class="ex-results">
          {!hasQuery ? (
            <div class="ex-empty">
              <p>Search problem statements, topics, tags, theorem names and source numbers.</p>
              <p class="muted">Abbreviations such as MVT, IVT, FTC and limsup are understood. Try:</p>
              {examples}
            </div>
          ) : (
            <>
              <div class="ex-toolbar">
                <p class="ex-count" role="status" aria-live="polite">
                  <strong>{filtered.length}</strong>{' '}
                  {filtered.length === 1 ? 'problem matches' : 'problems match'} “{urlQ.trim()}”
                  {nFilters > 0 && hits.length !== filtered.length && (
                    <span class="muted"> ({hits.length} before filters)</span>
                  )}
                </p>
              </div>
              {filtered.length ? (
                <ProblemList problems={filtered} />
              ) : (
                <div class="ex-empty">
                  <p>
                    {hits.length
                      ? 'Matches exist, but none pass the current filters.'
                      : 'No problems match this search.'}
                  </p>
                  <p class="muted">Check the spelling, use fewer words, or try one of these:</p>
                  {examples}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useMemo } from 'preact/hooks';
import type { Problem } from '../lib/types';
import { DIFFICULTIES } from '../lib/types';
import { problems, sources, topics } from '../lib/bank';
import { matches, filtersFromQuery, filtersToQuery, type Filters } from '../lib/filter';
import { navigate } from '../lib/router';
import { useProgress } from '../lib/useProgress';
import { FilterPanel } from '../components/FilterPanel';
import { ProblemList } from '../components/ProblemRow';
import '../styles/explore.css';

export type SortKey = 'curriculum' | 'difficulty' | 'source';
const SORTS: { value: SortKey; label: string }[] = [
  { value: 'curriculum', label: 'Curriculum order' },
  { value: 'difficulty', label: 'Difficulty' },
  { value: 'source', label: 'Source' },
];

const bankOrder = new Map(problems.map((p, i) => [p.id, i]));
const sourceOrder = new Map(sources.map((s, i) => [s.key, i]));

export function sortProblems(list: Problem[], sort: SortKey): Problem[] {
  const out = [...list];
  const bo = (p: Problem) => bankOrder.get(p.id) ?? 0;
  if (sort === 'difficulty')
    out.sort((a, b) => DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty) || bo(a) - bo(b));
  else if (sort === 'source')
    out.sort((a, b) => (sourceOrder.get(a.source.key) ?? 99) - (sourceOrder.get(b.source.key) ?? 99) || bo(a) - bo(b));
  else out.sort((a, b) => bo(a) - bo(b));
  return out;
}

export function GroupedByTopic({ list }: { list: Problem[] }) {
  return (
    <>
      {topics.map((t) => {
        const items = list.filter((p) => p.topic === t.key);
        if (!items.length) return null;
        return (
          <section class="ex-group" key={t.key} aria-labelledby={`grp-${t.key}`}>
            <h2 class="ex-group-title" id={`grp-${t.key}`}>
              {t.label} <span class="ex-group-count">{items.length}</span>
            </h2>
            <ProblemList problems={items} />
          </section>
        );
      })}
    </>
  );
}

function queryWith(f: Filters, extra: Record<string, string | undefined>): string {
  const q = new URLSearchParams(filtersToQuery(f));
  for (const [k, v] of Object.entries(extra)) if (v) q.set(k, v);
  return q.toString();
}

export function Browse({ query }: { query: URLSearchParams }) {
  const progress = useProgress();
  const filters = filtersFromQuery(query);
  const sortParam = query.get('sort');
  const sort: SortKey = SORTS.some((s) => s.value === sortParam) ? (sortParam as SortKey) : 'curriculum';
  const qs = query.toString();

  const results = useMemo(
    () => sortProblems(problems.filter((p) => matches(p, filters)), sort),
    // filters are derived from the query string
    [qs, progress],
  );

  const update = (f: Filters, s: SortKey = sort) =>
    navigate('browse', queryWith(f, { sort: s === 'curriculum' ? undefined : s }), true);

  return (
    <div class="page-wide ex-page">
      <header class="ex-header">
        <h1>Browse</h1>
        <p class="muted ex-lede">
          Combine filters freely: groups narrow each other, choices within a group widen.
        </p>
      </header>

      <div class="ex-layout">
        <aside class="ex-aside">
          <FilterPanel filters={filters} onChange={(f) => update(f)} />
        </aside>

        <div class="ex-results">
          <div class="ex-toolbar">
            <p class="ex-count" role="status" aria-live="polite">
              <strong>{results.length}</strong> of {problems.length} problems
            </p>
            <label class="ex-sort">
              <span>Sort</span>
              <select
                value={sort}
                onChange={(e) => update(filters, (e.target as HTMLSelectElement).value as SortKey)}
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>

          {results.length === 0 ? (
            <div class="ex-empty">
              <p>No problems match these filters.</p>
              <p class="muted">Try removing a filter, or widening a group (e.g. add a second difficulty).</p>
            </div>
          ) : sort === 'curriculum' ? (
            <GroupedByTopic list={results} />
          ) : (
            <ProblemList problems={results} />
          )}
        </div>
      </div>
    </div>
  );
}

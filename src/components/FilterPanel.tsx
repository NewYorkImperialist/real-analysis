import { useMemo, useState } from 'preact/hooks';
import type { Problem } from '../lib/types';
import { DIFFICULTIES, CATEGORIES, TYPES } from '../lib/types';
import { problems as allProblems, sources, topics, topicByKey, allTags, label } from '../lib/bank';
import { matches, emptyFilters, type Filters } from '../lib/filter';
import { STATUSES } from '../lib/progress';
import { useProgress } from '../lib/useProgress';
import '../styles/explore.css';

export const MIT_SOURCE_LABEL = 'MIT 18.100A (2020) incl. assigned Lebl exercises';

type ListFacet = 'topic' | 'subtopic' | 'source' | 'difficulty' | 'category' | 'type' | 'status';
type Option = { value: string; label: string };

export function activeFilterCount(f: Filters): number {
  return f.topic.length + f.subtopic.length + f.source.length + f.difficulty.length + f.category.length +
    f.type.length + f.tag.length + f.status.length + (f.bookmarked ? 1 : 0);
}

export const sourceOptionLabel = (key: string) =>
  key === 'mit' ? MIT_SOURCE_LABEL : sources.find((s) => s.key === key)?.name ?? key;

const STATUS_LABEL: Record<string, string> = { unseen: 'Unseen', attempted: 'Attempted', completed: 'Completed' };

/**
 * Combinable filters (AND across groups, OR within a group; tags AND).
 * `pool` is the set the counts refer to (defaults to the whole bank).
 */
export function FilterPanel({
  filters,
  onChange,
  pool = allProblems,
  title = 'Filters',
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  pool?: Problem[];
  title?: string;
}) {
  const progress = useProgress();
  const [open, setOpen] = useState(false);
  const [tagQuery, setTagQuery] = useState('');
  const n = activeFilterCount(filters);

  // Faceted counts: how many in `pool` would match if this option were the facet's only value.
  const count = useMemo(() => {
    const cache = new Map<string, number>();
    return (facet: ListFacet | 'tag' | 'bookmarked', value: string) => {
      const k = `${facet}\u0000${value}`;
      let c = cache.get(k);
      if (c === undefined) {
        const f: Filters = { ...filters };
        if (facet === 'tag') f.tag = filters.tag.includes(value) ? filters.tag : [...filters.tag, value];
        else if (facet === 'bookmarked') f.bookmarked = true;
        else f[facet] = [value];
        c = pool.reduce((acc, p) => acc + (matches(p, f) ? 1 : 0), 0);
        cache.set(k, c);
      }
      return c;
    };
  }, [filters, pool, progress]);

  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });
  const toggle = (facet: ListFacet | 'tag', value: string) => {
    const cur = filters[facet];
    const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
    const patch: Partial<Filters> = { [facet]: next };
    if (facet === 'topic') {
      // Drop subtopics that no longer belong to a selected topic.
      const allowed = new Set(next.flatMap((t) => Object.keys(topicByKey.get(t)?.subtopics ?? {})));
      patch.subtopic = next.length ? filters.subtopic.filter((s) => allowed.has(s)) : [];
    }
    onChange({ ...filters, ...patch });
  };

  const subtopicOptions: Option[] = filters.topic.flatMap((t) =>
    Object.entries(topicByKey.get(t)?.subtopics ?? {}).map(([k, l]) => ({ value: k, label: l })),
  );
  const seenSub = new Set<string>();
  const subtopicOpts = subtopicOptions.filter((o) => (seenSub.has(o.value) ? false : (seenSub.add(o.value), true)));

  const tq = tagQuery.trim().toLowerCase().replace(/\s+/g, '-');
  const tagMatches = useMemo(() => {
    const list = allTags.filter((t) => !filters.tag.includes(t) && (!tq || t.toLowerCase().includes(tq)));
    return list.slice(0, tq ? 30 : 14);
  }, [tq, filters.tag]);

  const group = (facet: ListFacet, legend: string, options: Option[]) => (
    <fieldset class="fp-group">
      <legend>{legend}</legend>
      <ul class="fp-options">
        {options.map((o) => {
          const checked = filters[facet].includes(o.value);
          const c = count(facet, o.value);
          return (
            <li key={o.value}>
              <label class={`fp-option${!checked && c === 0 ? ' is-empty' : ''}`}>
                <input type="checkbox" checked={checked} onChange={() => toggle(facet, o.value)} />
                <span class="fp-label">{o.label}</span>
                <span class="fp-count" aria-label={`${c} problems`}>{c}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );

  return (
    <section class={`filter-panel${open ? ' is-open' : ''}`} aria-label={title}>
      <div class="fp-head">
        <button
          type="button"
          class="fp-toggle btn btn-quiet"
          aria-expanded={open}
          aria-controls="fp-body"
          onClick={() => setOpen(!open)}
        >
          {title}{n ? ` (${n} active)` : ''}
          <span aria-hidden="true" class="fp-caret">{open ? '−' : '+'}</span>
        </button>
        <h2 class="fp-title">{title}</h2>
        {n > 0 && (
          <button type="button" class="btn btn-quiet fp-clear" onClick={() => onChange(emptyFilters())}>
            Clear all
          </button>
        )}
      </div>

      <div class="fp-body" id="fp-body">
        {group('topic', 'Topic', topics.map((t) => ({ value: t.key, label: t.label })))}

        {filters.topic.length > 0 ? (
          group('subtopic', 'Subtopic', subtopicOpts)
        ) : (
          <p class="fp-hint muted">Choose a topic to narrow by subtopic.</p>
        )}

        {group('difficulty', 'Difficulty', DIFFICULTIES.map((d) => ({ value: d, label: label(d) })))}
        {group('category', 'Category', CATEGORIES.map((d) => ({ value: d, label: label(d) })))}
        {group('type', 'Type', TYPES.map((d) => ({ value: d, label: label(d) })))}
        {group('source', 'Source', sources.map((s) => ({ value: s.key, label: sourceOptionLabel(s.key) })))}
        {group('status', 'Status', STATUSES.map((s) => ({ value: s, label: STATUS_LABEL[s] })))}

        <fieldset class="fp-group">
          <legend>Saved</legend>
          <label class="fp-option">
            <input type="checkbox" checked={filters.bookmarked} onChange={() => set({ bookmarked: !filters.bookmarked })} />
            <span class="fp-label">Bookmarked only</span>
            <span class="fp-count">{count('bookmarked', '1')}</span>
          </label>
        </fieldset>

        <fieldset class="fp-group">
          <legend>Tags</legend>
          {filters.tag.length > 0 && (
            <ul class="fp-selected-tags" aria-label="Selected tags (all must match)">
              {filters.tag.map((t) => (
                <li key={t}>
                  <button type="button" class="chip fp-tag-chip" onClick={() => toggle('tag', t)} aria-label={`Remove tag ${t}`}>
                    {t} <span aria-hidden="true">×</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <label class="visually-hidden" for="fp-tag-search">Search tags</label>
          <input
            id="fp-tag-search"
            class="fp-tag-search"
            type="search"
            placeholder={`Search ${allTags.length} tags…`}
            value={tagQuery}
            onInput={(e) => setTagQuery((e.target as HTMLInputElement).value)}
          />
          <ul class="fp-options fp-tag-options">
            {tagMatches.map((t) => {
              const c = count('tag', t);
              return (
                <li key={t}>
                  <label class={`fp-option${c === 0 ? ' is-empty' : ''}`}>
                    <input type="checkbox" checked={false} onChange={() => { toggle('tag', t); setTagQuery(''); }} />
                    <span class="fp-label">{t}</span>
                    <span class="fp-count">{c}</span>
                  </label>
                </li>
              );
            })}
            {tagMatches.length === 0 && <li class="muted fp-hint">No tags match.</li>}
          </ul>
        </fieldset>
      </div>
    </section>
  );
}

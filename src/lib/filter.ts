import type { Problem } from './types';
import { isMitAssigned } from './bank';
import { get as getProgress } from './progress';

// Every facet is a list of accepted values; empty/absent = no constraint.
// Facets combine with AND; values within a facet combine with OR (tags: AND).
export type Filters = {
  topic: string[];
  subtopic: string[];
  source: string[];
  difficulty: string[];
  category: string[];
  type: string[];
  tag: string[];
  status: string[];
  bookmarked: boolean;
};

export const FACETS = ['topic', 'subtopic', 'source', 'difficulty', 'category', 'type', 'tag', 'status'] as const;

export const emptyFilters = (): Filters => ({
  topic: [], subtopic: [], source: [], difficulty: [], category: [], type: [], tag: [], status: [], bookmarked: false,
});

export function matches(p: Problem, f: Filters): boolean {
  if (f.topic.length && !f.topic.includes(p.topic)) return false;
  if (f.subtopic.length && !p.subtopics.some((s) => f.subtopic.includes(s))) return false;
  if (f.source.length) {
    const ok = f.source.includes(p.source.key) || (f.source.includes('mit') && isMitAssigned(p));
    if (!ok) return false;
  }
  if (f.difficulty.length && !f.difficulty.includes(p.difficulty)) return false;
  if (f.category.length && !f.category.includes(p.category)) return false;
  if (f.type.length && !f.type.includes(p.type)) return false;
  if (f.tag.length && !f.tag.every((t) => p.tags.includes(t) || p.skills.includes(t))) return false;
  if (f.status.length || f.bookmarked) {
    const pr = getProgress(p.id);
    if (f.status.length && !f.status.includes(pr.status)) return false;
    if (f.bookmarked && !pr.bookmarked) return false;
  }
  return true;
}

export function filtersToQuery(f: Filters): string {
  const q = new URLSearchParams();
  for (const k of FACETS) if (f[k].length) q.set(k, f[k].join(','));
  if (f.bookmarked) q.set('bookmarked', '1');
  return q.toString();
}

export function filtersFromQuery(qs: URLSearchParams): Filters {
  const f = emptyFilters();
  for (const k of FACETS) {
    const v = qs.get(k);
    if (v) f[k] = v.split(',').filter(Boolean);
  }
  f.bookmarked = qs.get('bookmarked') === '1';
  return f;
}

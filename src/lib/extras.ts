import { useEffect, useState } from 'preact/hooks';
import type { Hint, Problem, Solution } from './types';

// Hints and solutions are not in the main bundle: each topic's are a separate chunk, fetched the
// first time a problem in that topic is opened (scripts/build-data.mjs writes them).
export type Extras = { hints: Hint[]; solution: Solution | null };
type TopicExtras = Record<string, Extras>;

const loaders = import.meta.glob<TopicExtras>('../generated/extras/*.json', { import: 'default' });
const cache = new Map<string, Promise<TopicExtras>>();

function loadTopic(topic: string): Promise<TopicExtras> {
  let p = cache.get(topic);
  if (!p) {
    const load = loaders[`../generated/extras/${topic}.json`];
    p = load ? load() : Promise.resolve({});
    p.catch(() => cache.delete(topic)); // allow a retry after a network failure
    cache.set(topic, p);
  }
  return p;
}

/** Hints and solution for a problem; undefined while loading, null if loading failed. */
export function useExtras(p: Problem | undefined): Extras | null | undefined {
  const [state, setState] = useState<{ id: string; extras: Extras | null } | undefined>(undefined);
  useEffect(() => {
    if (!p) return;
    let live = true;
    loadTopic(p.topic).then(
      (m) => live && setState({ id: p.id, extras: m[p.id] ?? { hints: [], solution: null } }),
      () => live && setState({ id: p.id, extras: null }),
    );
    return () => {
      live = false;
    };
  }, [p?.id]);
  return p && state?.id === p.id ? state.extras : undefined;
}

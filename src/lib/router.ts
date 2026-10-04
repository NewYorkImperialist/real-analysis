import { useEffect, useState } from 'preact/hooks';

// Hash routing so the built site works from any static host or file folder.
// Routes: #/  #/browse?…  #/search?q=  #/practice  #/p/:id  #/sources  #/sources/:key  #/progress  #/about
export type Route = { path: string[]; query: URLSearchParams };

export function parseHash(h = location.hash): Route {
  const raw = h.replace(/^#\/?/, '');
  const [p, q = ''] = raw.split('?');
  return { path: p.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(q) };
}

export function useRoute(): Route {
  const [r, setR] = useState(parseHash());
  useEffect(() => {
    const on = () => setR(parseHash());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return r;
}

export const href = (path: string, query?: string) => `#/${path}${query ? `?${query}` : ''}`;

export function navigate(path: string, query?: string, replace = false) {
  const h = href(path, query);
  if (replace) history.replaceState(null, '', h);
  else location.hash = h;
  if (replace) window.dispatchEvent(new HashChangeEvent('hashchange'));
}

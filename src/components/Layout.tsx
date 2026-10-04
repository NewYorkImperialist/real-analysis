import type { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { href, navigate } from '../lib/router';

type Theme = 'system' | 'light' | 'dark';
const THEME_KEY = 'rapb.theme';
const ISSUE_URL = 'https://github.com/NewYorkImperialist/real-analysis/issues/new';

function readTheme(): Theme {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t === 'light' || t === 'dark') return t;
  } catch {
    /* storage unavailable */
  }
  return 'system';
}

function applyTheme(t: Theme) {
  const root = document.documentElement;
  if (t === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', t);
}

// Apply before first paint of the app to avoid a flash.
if (typeof document !== 'undefined') applyTheme(readTheme());

const NAV: [string, string][] = [
  ['practice', 'Practice'],
  ['browse', 'Browse'],
  ['search', 'Search'],
  ['sources', 'Sources'],
  ['progress', 'Progress'],
];

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readTheme);
  useEffect(() => {
    applyTheme(theme);
    try {
      if (theme === 'system') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);
  return (
    <label class="theme-toggle muted">
      <span class="visually-hidden">Color theme</span>
      <select value={theme} onChange={(e) => setTheme((e.currentTarget as HTMLSelectElement).value as Theme)}>
        <option value="system">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}

function HeaderSearch({ active }: { active: string }) {
  const [q, setQ] = useState('');
  // Clear the header box when on the search page itself (that page has its own input).
  useEffect(() => {
    if (active === 'search') setQ('');
  }, [active]);
  return (
    <form
      class="site-search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const t = q.trim();
        navigate('search', t ? `q=${encodeURIComponent(t)}` : undefined);
        setQ('');
      }}
    >
      <label class="visually-hidden" for="header-search">Search problems</label>
      <input
        id="header-search"
        type="search"
        placeholder="Search problems…"
        value={q}
        onInput={(e) => setQ((e.currentTarget as HTMLInputElement).value)}
      />
    </form>
  );
}

export function Layout({ active, children }: { active: string; children: ComponentChildren }) {
  // Treat a problem page as part of no section; keep focus management simple.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <>
      <a class="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>
        Skip to content
      </a>
      <header class="site-header">
        <div class="site-header-inner">
          <a class="site-title" href={href('')}>Real Analysis Problem Bank</a>
          <div class="site-tools">
            <HeaderSearch active={active} />
            <ThemeToggle />
          </div>
        </div>
        <nav class="site-nav" aria-label="Main">
          <ul>
            {NAV.map(([key, text]) => (
              <li key={key}>
                <a href={href(key)} aria-current={active === key ? 'page' : undefined}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <div class="page">{children}</div>
      </main>
      <footer class="site-footer">
        <div class="site-footer-inner">
          <span>Problems are drawn only from the approved sources, cited on every problem.</span>
          <span>
            <a href={href('about')} aria-current={active === 'about' ? 'page' : undefined}>About</a>
            {' · '}
            <a href={href('sources')}>Sources</a>
            {' · '}
            <a href={ISSUE_URL} target="_blank" rel="noopener noreferrer">Report an issue</a>
          </span>
        </div>
      </footer>
    </>
  );
}

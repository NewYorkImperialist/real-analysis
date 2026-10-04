import { useState } from 'preact/hooks';
import '../styles/stats.css';
import type { Problem } from '../lib/types';
import { DIFFICULTIES, CATEGORIES } from '../lib/types';
import { problems, coreProblems, upperProblems, byId, sources, topics, isMitAssigned, label, sourceLine, topicLabel } from '../lib/bank';
import { useProgress } from '../lib/useProgress';
import {
  exportJSON,
  parseImport,
  applyImport,
  getAll,
  type ParsedImport,
  type ProgressMap,
  type Status,
} from '../lib/progress';
import { href } from '../lib/router';
import { StatusBar, type StatusCounts } from '../components/StatusBar';
import { ProblemList } from '../components/ProblemRow';

function countStatuses(list: Problem[], map: ProgressMap): StatusCounts {
  const c: StatusCounts = { unseen: 0, attempted: 0, completed: 0 };
  for (const p of list) c[(map[p.id]?.status ?? 'unseen') as Status]++;
  return c;
}

function todayStamp(): string {
  const d = new Date();
  const z = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

function downloadProgress() {
  const blob = new Blob([exportJSON()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `analysis-progress-${todayStamp()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const fmtDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};

type Row = { key: string; label: string; query: string; list: Problem[]; note?: string };

function BreakdownTable({ caption, head, rows, map }: { caption: string; head: string; rows: Row[]; map: ProgressMap }) {
  return (
    <table class="stats-table">
      <caption class="visually-hidden">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">{head}</th>
          <th scope="col" class="num">Total</th>
          <th scope="col" class="num">Attempted</th>
          <th scope="col" class="num">Completed</th>
          <th scope="col" class="bar-col">
            <span class="visually-hidden">Status distribution</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          const c = countStatuses(r.list, map);
          return (
            <tr key={r.key} class={r.list.length === 0 ? 'is-empty' : ''}>
              <th scope="row">
                <a href={href('browse', r.query)}>{r.label}</a>
                {r.note && <span class="stats-note">{r.note}</span>}
              </th>
              <td class="num">{r.list.length}</td>
              <td class="num">{c.attempted}</td>
              <td class="num">{c.completed}</td>
              <td class="bar-col">
                <StatusBar counts={c} label={r.label} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

type Pending = {
  fileName: string;
  parsed: ParsedImport;
  entries: number;
  matching: number;
  unknown: number;
  overlapping: number;
  mergeReplaces: number;
  currentEntries: number;
};

function summarize(fileName: string, parsed: ParsedImport): Pending {
  const cur = getAll();
  const ids = Object.keys(parsed.problems);
  let matching = 0, overlapping = 0, mergeReplaces = 0;
  for (const id of ids) {
    if (byId.has(id)) matching++;
    const c = cur[id];
    if (c) {
      overlapping++;
      if ((parsed.problems[id].updatedAt ?? '') >= (c.updatedAt ?? '')) mergeReplaces++;
    }
  }
  return {
    fileName,
    parsed,
    entries: ids.length,
    matching,
    unknown: ids.length - matching,
    overlapping,
    mergeReplaces,
    currentEntries: Object.keys(cur).length,
  };
}

const plural = (n: number, one: string, many = one + 's') => `${n} ${n === 1 ? one : many}`;

function ImportExport() {
  const [error, setError] = useState('');
  const [pending, setPending] = useState<Pending | null>(null);
  const [mode, setMode] = useState<'' | 'merge' | 'replace'>('');
  const [result, setResult] = useState('');
  const [inputKey, setInputKey] = useState(0);

  const [resetOpen, setResetOpen] = useState(false);
  const [resetText, setResetText] = useState('');

  async function onFile(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    setError('');
    setResult('');
    setPending(null);
    setMode('');
    if (!file) return;
    try {
      const text = await file.text();
      setPending(summarize(file.name, parseImport(text)));
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setInputKey((k) => k + 1);
    }
  }

  function cancel() {
    setPending(null);
    setMode('');
    setInputKey((k) => k + 1);
  }

  function confirmImport(e: Event) {
    e.preventDefault();
    if (!pending || !mode) return;
    applyImport(pending.parsed.problems, mode);
    setResult(
      mode === 'merge'
        ? `Merged ${pending.fileName}: ${plural(pending.entries - pending.overlapping, 'new entry', 'new entries')} added, ` +
            `${plural(pending.mergeReplaces, 'existing entry', 'existing entries')} updated from the file.`
        : `Replaced all progress with ${pending.fileName} (${plural(pending.entries, 'entry', 'entries')}).`,
    );
    cancel();
  }

  function confirmReset(e: Event) {
    e.preventDefault();
    if (resetText.trim() !== 'RESET') return;
    applyImport({}, 'replace');
    setResetOpen(false);
    setResetText('');
    setPending(null);
    setResult('All progress has been reset.');
  }

  return (
    <section class="stats-section" aria-labelledby="io-h">
      <h2 id="io-h">Export and import</h2>
      <p class="muted">
        Progress is stored only in this browser. Export it to keep a copy or move it to another device.
      </p>

      <div class="io-actions">
        <button type="button" class="btn" onClick={downloadProgress}>
          Export progress JSON
        </button>
        <label class="btn io-file">
          Import progress JSON…
          <input key={inputKey} type="file" accept="application/json,.json" class="visually-hidden" onChange={onFile} />
        </label>
      </div>

      {error && (
        <p class="io-message io-error" role="alert">
          Could not read that file: {error}
        </p>
      )}

      {pending && (
        <form class="io-confirm" onSubmit={confirmImport} aria-labelledby="io-confirm-h">
          <h3 id="io-confirm-h">Import {pending.fileName}?</h3>
          {pending.parsed.exportedAt && <p class="muted">Exported {fmtDate(pending.parsed.exportedAt)}.</p>}
          <ul class="io-summary">
            <li>{plural(pending.entries, 'entry', 'entries')} in the file</li>
            <li>{pending.matching} match problems in the bank</li>
            {pending.unknown > 0 && (
              <li>
                {plural(pending.unknown, 'unknown id')} (not in the current bank; kept, but not shown anywhere)
              </li>
            )}
            <li>
              {pending.overlapping} of them already have progress here
              {pending.overlapping > 0 && <> — Merge would overwrite {pending.mergeReplaces} (where the file is newer)</>}
            </li>
            <li>You currently have {plural(pending.currentEntries, 'entry', 'entries')} of progress</li>
          </ul>

          <fieldset class="io-modes">
            <legend>How should it be applied?</legend>
            <label>
              <input type="radio" name="io-mode" value="merge" checked={mode === 'merge'} onChange={() => setMode('merge')} />{' '}
              Merge (keep the newer entry for each problem)
            </label>
            <label>
              <input type="radio" name="io-mode" value="replace" checked={mode === 'replace'} onChange={() => setMode('replace')} />{' '}
              Replace all current progress
              {pending.currentEntries > 0 && (
                <span class="muted"> — discards {plural(pending.currentEntries, 'current entry', 'current entries')}</span>
              )}
            </label>
          </fieldset>

          <p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                downloadProgress();
              }}
            >
              Download a backup of current progress first
            </a>
          </p>

          <div class="io-actions">
            <button type="submit" class="btn btn-primary" disabled={!mode}>
              {mode === 'replace' ? 'Replace progress' : mode === 'merge' ? 'Merge progress' : 'Choose an option'}
            </button>
            <button type="button" class="btn btn-quiet" onClick={cancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {result && (
        <p class="io-message" role="status">
          {result}
        </p>
      )}

      <div class="io-reset">
        <h3>Reset</h3>
        {!resetOpen ? (
          <button type="button" class="btn btn-quiet" onClick={() => { setResetOpen(true); setResult(''); }}>
            Reset all progress…
          </button>
        ) : (
          <form onSubmit={confirmReset} class="io-confirm">
            <p>
              This permanently removes every status, bookmark, note and personal solution stored in this browser.
              Consider exporting first.
            </p>
            <label for="reset-confirm">
              Type <kbd>RESET</kbd> to confirm
            </label>
            <input
              id="reset-confirm"
              class="io-text"
              type="text"
              autoComplete="off"
              value={resetText}
              onInput={(e) => setResetText((e.currentTarget as HTMLInputElement).value)}
            />
            <div class="io-actions">
              <button type="submit" class="btn btn-primary" disabled={resetText.trim() !== 'RESET'}>
                Reset all progress
              </button>
              <button type="button" class="btn btn-quiet" onClick={() => { setResetOpen(false); setResetText(''); }}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export function ProgressPage() {
  const map = useProgress();
  const core = coreProblems;
  const total = countStatuses(core, map);
  const upper = countStatuses(upperProblems, map);
  const n = core.length;

  const topicRows: Row[] = topics.map((t) => ({
    key: t.key,
    label: t.label,
    query: `tier=core&topic=${encodeURIComponent(t.key)}`,
    list: core.filter((p) => p.topic === t.key),
  }));

  const sourceRows: Row[] = sources.map((s) => {
    if (s.key === 'mit') {
      const orig = core.filter((p) => p.source.key === 'mit');
      const lebl = core.filter((p) => p.source.key !== 'mit' && isMitAssigned(p));
      return {
        key: s.key,
        label: s.shortName,
        query: 'tier=core&source=mit',
        list: [...orig, ...lebl],
        note: `${orig.length} original + ${lebl.length} Lebl assigned`,
      };
    }
    return { key: s.key, label: s.shortName, query: `tier=core&source=${s.key}`, list: core.filter((p) => p.source.key === s.key) };
  });

  const diffRows: Row[] = DIFFICULTIES.map((d) => ({
    key: d,
    label: label(d),
    query: `tier=core&difficulty=${d}`,
    list: core.filter((p) => p.difficulty === d),
  }));

  const catRows: Row[] = CATEGORIES.map((c) => ({
    key: c,
    label: label(c),
    query: `tier=core&category=${c}`,
    list: core.filter((p) => p.category === c),
  }));

  const recent = Object.entries(map)
    .filter(([id, e]) => e.lastPracticed && byId.has(id))
    .sort((a, b) => (b[1].lastPracticed! < a[1].lastPracticed! ? -1 : 1))
    .slice(0, 10)
    .map(([id, e]) => ({ p: byId.get(id)!, e }));

  const bookmarked = problems.filter((p) => map[p.id]?.bookmarked);
  const orphan = Object.keys(map).filter((id) => !byId.has(id)).length;

  return (
    <div class="stats-page">
      <h1>Progress</h1>
      <p class="muted">Computed from your progress stored in this browser. Status changes only when you mark a problem.</p>

      <section class="stats-section" aria-labelledby="totals-h">
        <h2 id="totals-h" class="visually-hidden">Totals</h2>
        <dl class="stats-totals">
          <div>
            <dt>Core problems</dt>
            <dd>{n}</dd>
          </div>
          <div>
            <dt>
              <span class="status-dot is-unseen" aria-hidden="true" /> Unseen
            </dt>
            <dd>
              <a href={href('browse', 'tier=core&status=unseen')}>{total.unseen}</a>
            </dd>
          </div>
          <div>
            <dt>
              <span class="status-dot is-attempted" aria-hidden="true" /> Attempted
            </dt>
            <dd>
              <a href={href('browse', 'tier=core&status=attempted')}>{total.attempted}</a>
            </dd>
          </div>
          <div>
            <dt>
              <span class="status-dot is-completed" aria-hidden="true" /> Completed
            </dt>
            <dd>
              <a href={href('browse', 'tier=core&status=completed')}>{total.completed}</a>
            </dd>
          </div>
        </dl>
        <StatusBar counts={total} label="Core problems" />
        {orphan > 0 && (
          <p class="muted stats-small">
            {plural(orphan, 'stored entry', 'stored entries')} refer to problems not in the current bank; they are kept.
          </p>
        )}
      </section>

      {upperProblems.length > 0 && (
        <section class="stats-section" aria-labelledby="upper-h">
          <h2 id="upper-h">Upper tier</h2>
          <p class="muted stats-small">
            An optional layer of {upperProblems.length} harder synthesis, construction and classification problems.
            It is not counted in the core totals above or the breakdowns below.{' '}
            <a href={href('browse', 'tier=upper')}>Browse the upper tier</a>
          </p>
          <StatusBar counts={upper} label="Upper tier" />
        </section>
      )}

      <section class="stats-section" aria-labelledby="topic-h">
        <h2 id="topic-h">By topic</h2>
        <BreakdownTable caption="Progress by topic" head="Topic" rows={topicRows} map={map} />
      </section>

      <section class="stats-section" aria-labelledby="source-h">
        <h2 id="source-h">By source</h2>
        <BreakdownTable caption="Progress by source" head="Source" rows={sourceRows} map={map} />
        <p class="muted stats-small">
          MIT counts both its original problems and the Lebl exercises assigned in MIT 18.100A (2020); those also count
          under Lebl.
        </p>
      </section>

      <section class="stats-section" aria-labelledby="diff-h">
        <h2 id="diff-h">By difficulty</h2>
        <BreakdownTable caption="Progress by difficulty" head="Difficulty" rows={diffRows} map={map} />
      </section>

      <section class="stats-section" aria-labelledby="cat-h">
        <h2 id="cat-h">By category</h2>
        <BreakdownTable caption="Progress by category" head="Category" rows={catRows} map={map} />
      </section>

      <section class="stats-section" aria-labelledby="recent-h">
        <h2 id="recent-h">Recently practiced</h2>
        {recent.length === 0 ? (
          <p class="muted">Nothing yet. Problems appear here once you mark them attempted or completed.</p>
        ) : (
          <ol class="recent-list">
            {recent.map(({ p, e }) => (
              <li key={p.id}>
                <time class="recent-date" dateTime={e.lastPracticed}>
                  {fmtDate(e.lastPracticed)}
                </time>
                <a href={href(`p/${encodeURIComponent(p.id)}`)}>{sourceLine(p) || p.id}</a>
                <span class="meta-line">
                  <span>{topicLabel(p.topic)}</span>
                  <span>{label(e.status)}</span>
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section class="stats-section" aria-labelledby="bm-h">
        <h2 id="bm-h">Bookmarked</h2>
        {bookmarked.length === 0 ? (
          <p class="muted">No bookmarks.</p>
        ) : (
          <ProblemList problems={bookmarked} />
        )}
      </section>

      <ImportExport />
    </div>
  );
}

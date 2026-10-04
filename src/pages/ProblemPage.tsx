import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { Problem } from '../lib/types';
import { byId, problems, sourceByKey, topicLabel, subtopicLabel, label, sourceLine, titleOf } from '../lib/bank';
import { href } from '../lib/router';
import { useProgress } from '../lib/useProgress';
import { setNotes, setPersonalSolution, recordHintViewed } from '../lib/progress';
import { RichText, InlineRich } from '../components/RichText';
import { StatusControl } from '../components/StatusControl';
import { ProblemList } from '../components/ProblemRow';
import { ProblemTimer } from '../components/ProblemTimer';
import { useTimerEnabled } from '../lib/timerSetting';

const PRACTICE_KEY = 'rapb.practice.current';

function readPracticeIds(): string[] | null {
  try {
    const raw = localStorage.getItem(PRACTICE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return Array.isArray(v?.ids) ? v.ids.filter((x: unknown) => typeof x === 'string' && byId.has(x)) : null;
  } catch {
    return null;
  }
}

const KIND_LABEL: Record<string, string> = {
  official: 'Official',
  textbook: 'Textbook',
  instructor: 'Instructor',
  personal: 'Personal',
  ai: 'AI-generated · not verified by a human',
};

function SourceBlock({ p }: { p: Problem }) {
  const s = sourceByKey.get(p.source.key);
  const where = [
    p.source.chapter && (/^\d/.test(p.source.chapter) ? `Chapter ${p.source.chapter}` : p.source.chapter),
    p.source.section && (/^\d/.test(p.source.section) ? `Section ${p.source.section}` : p.source.section),
    p.source.problemNumber,
    p.source.page && `p. ${p.source.page}`,
  ].filter(Boolean) as string[];
  const pub = [s?.edition, s?.year].filter(Boolean).join(', ');
  return (
    <div class="source-block">
      <div>
        <a class="source-name" href={href(`sources/${p.source.key}`)} style="text-decoration:none">
          {s?.name ?? p.source.key}
        </a>
      </div>
      {s && (
        <div>
          {s.author}
          {s.title && s.title !== s.name ? <>, <em>{s.title}</em></> : null}
          {pub ? ` (${pub})` : ''}
        </div>
      )}
      {where.length > 0 && (
        <p class="meta-line" style="font-size:0.85rem;color:var(--ink-2)">
          {where.map((w) => <span key={w}>{w}</span>)}
        </p>
      )}
      {(p.assignedIn ?? []).map((a) => (
        <div key={a} class="muted">Assigned in {a.replace(/^Assigned in\s+/i, '')}</div>
      ))}
    </div>
  );
}

function Hints({ p }: { p: Problem }) {
  const hints = p.hints ?? [];
  const [shown, setShown] = useState(0);
  if (!hints.length)
    return (
      <span class="row">
        <button type="button" class="btn" disabled aria-describedby="no-hint">Show hint</button>
        <span id="no-hint" class="small muted">No hints in the bank for this problem.</span>
      </span>
    );
  return (
    <div class="stack-sm" style="flex-basis:100%;min-width:0">
      {hints.slice(0, shown).map((h, i) => (
        <div key={i} class="note">
          <div class="provenance">Hint {i + 1} of {hints.length} · {KIND_LABEL[h.kind] ?? h.kind}{h.kind === 'ai' ? '' : ` — ${h.source}`}</div>
          <RichText src={h.text} />
        </div>
      ))}
      {shown < hints.length && (
        <button
          type="button"
          class="btn"
          onClick={() => {
            const n = shown + 1;
            setShown(n);
            recordHintViewed(p.id, n);
          }}
        >
          {shown === 0 ? 'Show hint' : `Show hint ${shown + 1} of ${hints.length}`}
        </button>
      )}
    </div>
  );
}

/** Debounced textarea bound to a progress field. Never changes status. */
function SavedTextarea({
  id, value, save, label: lbl, mono, rows, placeholder, onText,
}: {
  id: string; value: string; save: (id: string, v: string) => void; label: string; mono?: boolean; rows?: number;
  placeholder?: string; onText?: (v: string) => void;
}) {
  const [text, setText] = useState(value);
  const [saved, setSaved] = useState(true);
  const timer = useRef<number | undefined>(undefined);
  const flush = (v: string) => {
    window.clearTimeout(timer.current);
    if (v !== value) save(id, v);
    setSaved(true);
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const domId = `${lbl.replace(/\W+/g, '-').toLowerCase()}-${id}`;
  return (
    <div class="field">
      <div class="spread">
        <label for={domId}>{lbl}</label>
        <span class="small muted" aria-live="polite">{saved ? 'Saved in this browser' : 'Saving…'}</span>
      </div>
      <textarea
        id={domId}
        class={mono ? 'mono' : undefined}
        rows={rows ?? 5}
        placeholder={placeholder}
        value={text}
        spellcheck={!mono}
        onInput={(e) => {
          const v = (e.currentTarget as HTMLTextAreaElement).value;
          setText(v);
          onText?.(v);
          setSaved(false);
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => flush(v), 500);
        }}
        onBlur={() => flush(text)}
      />
    </div>
  );
}

function Workspace({ p, notes, personal, focusSolution }: { p: Problem; notes: string; personal: string; focusSolution: boolean }) {
  const [preview, setPreview] = useState(personal);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focusSolution) ref.current?.querySelector<HTMLTextAreaElement>('textarea.mono')?.focus();
  }, [focusSolution]);
  return (
    <section class="panel stack" aria-label="Your workspace" ref={ref}>
      <p class="small muted">
        Private to this browser. Writing here does not change the problem’s status — use the buttons below when you are done.
      </p>
      <SavedTextarea id={p.id} value={notes} save={setNotes} label="Notes" rows={4} placeholder="Scratch work, ideas, where you got stuck…" />
      <SavedTextarea
          id={p.id}
          value={personal}
          save={setPersonalSolution}
          label="Personal solution (LaTeX)"
          mono
          rows={8}
          placeholder={'Write in text with $…$ for inline math and $$…$$ for displays.\nBlank lines separate paragraphs.'}
          onText={setPreview}
        />
      <div class="field">
        <span class="label">Preview</span>
        <div class="preview">
          {preview.trim() ? <RichText src={preview} /> : <span class="small muted">Your rendered solution appears here.</span>}
        </div>
      </div>
    </section>
  );
}

function Solution({ p, personal, openEditor }: { p: Problem; personal: string; openEditor: () => void }) {
  const [open, setOpen] = useState(false);
  const sol = p.solution;
  const has = !!(sol?.available && sol.latex);
  return (
    <div class="stack-sm" style="flex-basis:100%;min-width:0">
      <button type="button" class="btn" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Hide solution' : 'Show solution'}
      </button>
      {open && (
        <div class="stack">
          {has ? (
            <div class="note">
              <div class="provenance">
                Solution · {KIND_LABEL[sol!.type ?? ''] ?? 'Source'}{sol!.source && sol!.type !== 'ai' ? ` — ${sol!.source}` : ''}
              </div>
              {sol!.lowConfidence && (
                <p class="small"><strong>Low confidence:</strong> {sol!.lowConfidence}</p>
              )}
              <RichText src={sol!.latex!} />
            </div>
          ) : (
            <p class="small muted">
              No solution in the bank yet.{' '}
              {!personal.trim() && (
                <button type="button" class="link" onClick={openEditor}>Write your own in the personal solution editor.</button>
              )}
            </p>
          )}
          {personal.trim() && (
            <div class="note">
              <div class="provenance">Personal solution · written by you, not from the source</div>
              <RichText src={personal} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function neighbours(p: Problem, practice: boolean): { list: string[]; label: string } {
  if (practice) {
    const ids = readPracticeIds();
    if (ids && ids.includes(p.id)) return { list: ids, label: 'practice set' };
  }
  return { list: problems.filter((q) => q.topic === p.topic).map((q) => q.id), label: topicLabel(p.topic) };
}

export function ProblemPage({ id, query }: { id: string; query: URLSearchParams }) {
  const p = id ? byId.get(id) : undefined;
  const progress = useProgress();
  const [workspace, setWorkspace] = useState(false);
  const [focusSol, setFocusSol] = useState(false);
  const timerOn = useTimerEnabled();

  useEffect(() => {
    setWorkspace(false);
    setFocusSol(false);
  }, [id]);

  const inPractice = query.get('set') === 'practice';
  const nav = useMemo(() => (p ? neighbours(p, inPractice) : null), [p, inPractice]);

  if (!p || !nav) {
    return (
      <div class="stack">
        <h1>Problem not found</h1>
        <p>
          There is no problem with the id <code>{id || '(none)'}</code> in the bank. It may have been renamed or removed.
        </p>
        <p class="row">
          <a class="btn" href={href('browse')}>Browse problems</a>
          <a class="btn btn-quiet" href={href('search', id ? `q=${encodeURIComponent(id)}` : undefined)}>Search</a>
        </p>
      </div>
    );
  }

  const pr = progress[p.id];
  const notes = pr?.notes ?? '';
  const personal = pr?.personalSolutionLatex ?? '';
  const idx = nav.list.indexOf(p.id);
  const prevId = idx > 0 ? nav.list[idx - 1] : undefined;
  const nextId = idx >= 0 && idx < nav.list.length - 1 ? nav.list[idx + 1] : undefined;
  const linkQ = inPractice ? 'set=practice' : undefined;
  const related = (p.related ?? []).map((r) => byId.get(r)).filter(Boolean) as Problem[];

  const openEditor = () => {
    setWorkspace(true);
    setFocusSol(true);
  };

  return (
    <article class="stack-lg" key={p.id}>
      <header class="stack-sm">
        <p class="section-title" style="margin:0">
          {inPractice ? `Practice · ${idx + 1} of ${nav.list.length}` : sourceLine(p)}
        </p>
        <h1><InlineRich src={titleOf(p)} /></h1>
        <p class="meta-line">
          <a href={href('browse', `topic=${encodeURIComponent(p.topic)}`)}>{topicLabel(p.topic)}</a>
          {p.subtopics.map((s) => <span key={s}>{subtopicLabel(p.topic, s)}</span>)}
          <span>{label(p.difficulty)}</span>
          {p.tier === 'upper' && (
            <a class="tier-badge" href={href('browse', 'tier=upper')} title="Optional harder layer; not counted in core progress">Upper tier</a>
          )}
          <span>{label(p.category)}</span>
          <span>{label(p.type)}</span>
        </p>
      </header>

      <SourceBlock p={p} />

      <section class="problem-statement" aria-label="Problem statement">
        <RichText src={p.problemLatex} />
      </section>

      <section class="stack" aria-label="Work on this problem">
        <div class="controls">
          <button type="button" class="btn" aria-expanded={workspace} onClick={() => setWorkspace(!workspace)}>
            {workspace ? 'Close workspace' : 'Attempt'}
          </button>
        </div>
        {timerOn && (
          <ProblemTimer key={p.id} id={p.id} storedMs={pr?.timeSpentMs ?? 0} completed={pr?.status === 'completed'} />
        )}
        {workspace && <Workspace p={p} notes={notes} personal={personal} focusSolution={focusSol} />}
        <div class="controls"><Hints key={p.id} p={p} /></div>
        <div class="controls"><Solution key={p.id} p={p} personal={personal} openEditor={openEditor} /></div>
        <hr class="rule" style="margin:0.5rem 0" />
        <StatusControl id={p.id} />
      </section>

      {(p.notes || p.curation?.why) && (
        <div>
          {p.notes && (
            <details class="disclosure">
              <summary>Source notes</summary>
              <div class="small" style="font-family:var(--font-text);font-size:0.95rem"><RichText src={p.notes} /></div>
            </details>
          )}
          {p.curation?.why && (
            <details class="disclosure">
              <summary>Why this problem</summary>
              <div class="note">
                <div class="provenance">Curator’s note — not from the source</div>
                <InlineRich src={p.curation.why} />
              </div>
            </details>
          )}
        </div>
      )}

      {related.length > 0 && (
        <section aria-labelledby="h-related">
          <h2 class="section-title" id="h-related">Related</h2>
          <ProblemList problems={related} />
        </section>
      )}

      <nav class="pager" aria-label={`Previous and next in ${nav.label}`}>
        <span>
          {prevId && (
            <a href={href(`p/${encodeURIComponent(prevId)}`, linkQ)} rel="prev">← Previous</a>
          )}
        </span>
        <span class="muted">{idx >= 0 ? `${idx + 1} / ${nav.list.length} in ${nav.label}` : ''}</span>
        <span>
          {nextId ? (
            <a href={href(`p/${encodeURIComponent(nextId)}`, linkQ)} rel="next">Next →</a>
          ) : inPractice ? (
            <a href={href('practice')}>End of set</a>
          ) : null}
        </span>
      </nav>

      {(p.tags.length > 0 || p.skills.length > 0) && (
        <footer class="tag-list stack-sm">
          {p.skills.length > 0 && <p class="meta-line"><span>Skills</span>{p.skills.map((s) => <span key={s}>{label(s)}</span>)}</p>}
          {p.tags.length > 0 && (
            <p class="meta-line">
              <span>Tags</span>
              {p.tags.map((t) => <a key={t} href={href('browse', `tag=${encodeURIComponent(t)}`)}>{t}</a>)}
            </p>
          )}
        </footer>
      )}
    </article>
  );
}

import '../styles/stats.css';
import type { Problem, Source } from '../lib/types';
import { DIFFICULTIES, CATEGORIES } from '../lib/types';
import { problems, sources, sourceByKey, topics, isMitAssigned, label } from '../lib/bank';
import { href } from '../lib/router';
import { DistBar } from '../components/StatusBar';
import { ProblemList } from '../components/ProblemRow';

const natural = (a = '', b = '') => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

// Chapter ordering: plain natural order, except that course exams follow the numbered assignments.
function chapterRank(ch: string): number {
  if (/^midterm/i.test(ch)) return 1;
  if (/^final/i.test(ch)) return 2;
  return 0;
}
const compareChapters = (a: string, b: string) => chapterRank(a) - chapterRank(b) || natural(a, b);

const ownProblems = (key: string) => problems.filter((p) => p.source.key === key);
const mitAssignedLebl = () => problems.filter((p) => p.source.key !== 'mit' && isMitAssigned(p));

/** Problems counted under a source (MIT also counts the Lebl exercises assigned in the course). */
function selectedFor(key: string): Problem[] {
  return key === 'mit' ? [...ownProblems('mit'), ...mitAssignedLebl()] : ownProblems(key);
}

function Citation({ s }: { s: Source }) {
  return (
    <dl class="source-meta">
      <div>
        <dt>Author</dt>
        <dd>{s.author}</dd>
      </div>
      <div>
        <dt>Title</dt>
        <dd>
          <cite>{s.title}</cite>
        </dd>
      </div>
      {s.edition && (
        <div>
          <dt>Edition</dt>
          <dd>{s.edition}</dd>
        </div>
      )}
      <div>
        <dt>Year</dt>
        <dd>{s.year}</dd>
      </div>
      {s.publisher && (
        <div>
          <dt>Publisher</dt>
          <dd>{s.publisher}</dd>
        </div>
      )}
    </dl>
  );
}

function SourceStats({ s }: { s: Source }) {
  const list = selectedFor(s.key);
  const topicCounts = topics
    .map((t) => ({ t, n: list.filter((p) => p.topic === t.key).length }))
    .filter((x) => x.n > 0);
  const diff = DIFFICULTIES.map((d) => ({ key: d, label: label(d), count: list.filter((p) => p.difficulty === d).length }));
  const cat = CATEGORIES.map((c) => ({ key: c, label: label(c), count: list.filter((p) => p.category === c).length }));
  // Totals here cover both tiers; say how many are upper tier, since core progress leaves them out.
  const nUpper = list.filter((p) => p.tier === 'upper').length;
  const upperNote = nUpper > 0 && (
    <>
      {' '}(<a href={href('browse', `tier=upper&source=${s.key}`)}>{nUpper} in the upper tier</a>)
    </>
  );

  return (
    <div class="source-stats">
      {s.key === 'mit' ? (
        <p class="source-count">
          <strong>{list.length}</strong> selected problems: {ownProblems('mit').length} original problems +{' '}
          {mitAssignedLebl().length} Lebl exercises assigned in the course{upperNote}
        </p>
      ) : (
        <p class="source-count">
          <strong>{list.length}</strong> selected {list.length === 1 ? 'problem' : 'problems'}{upperNote}
        </p>
      )}
      {list.length > 0 && (
        <>
          <p class="meta-line source-topics">
            {topicCounts.map(({ t, n }) => (
              <span key={t.key}>
                <a href={href('browse', `source=${s.key}&topic=${encodeURIComponent(t.key)}`)}>{t.label}</a> {n}
              </span>
            ))}
          </p>
          <div class="source-dists">
            <div>
              <h4 class="dist-h">Difficulty</h4>
              <DistBar items={diff} label={`${s.shortName} difficulty`} />
            </div>
            <div>
              <h4 class="dist-h">Category</h4>
              <DistBar items={cat} label={`${s.shortName} category`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SourceIndex() {
  const tiers: { tier: Source['tier']; title: string }[] = [
    { tier: 'primary', title: 'Primary sources' },
    { tier: 'supplementary', title: 'Supplementary sources' },
  ];
  return (
    <div class="stats-page">
      <h1>Sources</h1>
      <p class="muted">
        Every problem in the bank is selected from one of these sources, and each problem cites its exact location.
      </p>
      {tiers.map(({ tier, title }) => (
        <section key={tier} class="stats-section" aria-labelledby={`tier-${tier}`}>
          <h2 id={`tier-${tier}`}>{title}</h2>
          {sources
            .filter((s) => s.tier === tier)
            .map((s) => (
              <article key={s.key} class="source-entry" aria-labelledby={`src-${s.key}`}>
                <h3 id={`src-${s.key}`}>
                  <a href={href(`sources/${s.key}`)}>{s.name}</a>
                </h3>
                <Citation s={s} />
                <SourceStats s={s} />
                <p class="source-links meta-line">
                  <a href={href(`sources/${s.key}`)}>Problems by chapter</a>
                  <a href={href('browse', `source=${s.key}`)}>Browse with filters</a>
                </p>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}

type Group = { title: string; note?: string; problems: Problem[] };

function groupByChapter(list: Problem[]): { chapter: string; groups: Group[] }[] {
  const chapters = new Map<string, Problem[]>();
  for (const p of list) {
    const ch = p.source.chapter ?? 'Other';
    if (!chapters.has(ch)) chapters.set(ch, []);
    chapters.get(ch)!.push(p);
  }
  return [...chapters.keys()].sort(compareChapters).map((chapter) => {
    const ps = chapters.get(chapter)!;
    const sections = new Map<string, Problem[]>();
    for (const p of ps) {
      const s = p.source.section ?? '';
      if (!sections.has(s)) sections.set(s, []);
      sections.get(s)!.push(p);
    }
    const sortProblems = (xs: Problem[]) =>
      [...xs].sort((a, b) => natural(a.source.problemNumber, b.source.problemNumber) || natural(a.id, b.id));
    const keys = [...sections.keys()].sort(natural);
    // A single section is shown as a note under the chapter heading (e.g. MIT reading assignments).
    if (keys.length === 1) return { chapter, groups: [{ title: '', note: keys[0] || undefined, problems: sortProblems(ps) }] };
    return { chapter, groups: keys.map((k) => ({ title: k || 'Other', problems: sortProblems(sections.get(k)!) })) };
  });
}

// "MIT 18.100A (Fall 2020) Assignment 5, Problem 2" → [5, 2]; exams sort after assignments.
function assignmentKey(p: Problem): { label: string; a: number; n: number } {
  const s = (p.assignedIn ?? []).find((x) => x.startsWith('MIT 18.100A')) ?? '';
  const am = s.match(/Assignment\s+(\d+)/i);
  const pm = s.match(/Problem\s+(\d+)/i);
  if (am) return { label: `Assignment ${am[1]}`, a: Number(am[1]), n: pm ? Number(pm[1]) : 0 };
  if (/midterm/i.test(s)) return { label: 'Midterm', a: 100, n: pm ? Number(pm[1]) : 0 };
  if (/final/i.test(s)) return { label: 'Final Assignment', a: 101, n: pm ? Number(pm[1]) : 0 };
  return { label: 'Other', a: 1000, n: 0 };
}

function SourceDetail({ s }: { s: Source }) {
  const own = ownProblems(s.key);
  const chapters = groupByChapter(own);
  const assigned =
    s.key === 'mit'
      ? mitAssignedLebl()
          .map((p) => ({ p, k: assignmentKey(p) }))
          .sort((x, y) => x.k.a - y.k.a || x.k.n - y.k.n || natural(x.p.source.problemNumber, y.p.source.problemNumber))
      : [];
  const assignedGroups: { label: string; problems: Problem[] }[] = [];
  for (const { p, k } of assigned) {
    const last = assignedGroups[assignedGroups.length - 1];
    if (last && last.label === k.label) last.problems.push(p);
    else assignedGroups.push({ label: k.label, problems: [p] });
  }

  return (
    <div class="stats-page">
      <p class="meta-line">
        <a href={href('sources')}>Sources</a>
        <span>{s.tier === 'primary' ? 'Primary source' : 'Supplementary source'}</span>
      </p>
      <h1>{s.name}</h1>
      <Citation s={s} />
      {s.description && <p class="source-desc">{s.description}</p>}
      <p class="source-citation muted">{s.citation}</p>
      <SourceStats s={s} />
      <p class="meta-line">
        <a href={href('browse', `source=${s.key}`)}>Browse these problems with filters</a>
      </p>

      <section class="stats-section" aria-labelledby="own-h">
        <h2 id="own-h">{s.key === 'mit' ? 'Original MIT problems' : 'Problems by chapter'}</h2>
        {own.length === 0 && <p class="muted">No problems from this source have been added to the bank yet.</p>}
        {chapters.map(({ chapter, groups }) => (
          <section key={chapter} class="source-chapter">
            <h3>{chapter}</h3>
            {groups.map((g) => (
              <div key={g.title || 'all'} class="source-group">
                {g.title && <h4>{g.title}</h4>}
                {g.note && <p class="muted source-note">{g.note}</p>}
                <ProblemList problems={g.problems} />
              </div>
            ))}
          </section>
        ))}
      </section>

      {s.key === 'mit' && (
        <section class="stats-section" aria-labelledby="assigned-h">
          <h2 id="assigned-h">Lebl exercises assigned in MIT 18.100A (2020)</h2>
          <p class="muted">
            Stored under Lebl (with Lebl numbering) and counted toward MIT as well. Ordered by assignment.
          </p>
          {assignedGroups.length === 0 && <p class="muted">None in the bank yet.</p>}
          {assignedGroups.map((g) => (
            <section key={g.label} class="source-chapter">
              <h3>{g.label}</h3>
              <ProblemList problems={g.problems} />
            </section>
          ))}
        </section>
      )}
    </div>
  );
}

export function Sources({ sourceKey }: { sourceKey?: string }) {
  if (!sourceKey) return <SourceIndex />;
  const s = sourceByKey.get(sourceKey as Source['key']);
  if (!s)
    return (
      <div>
        <h1>Unknown source</h1>
        <p>
          There is no source “{sourceKey}”. See <a href={href('sources')}>all sources</a>.
        </p>
      </div>
    );
  return <SourceDetail s={s} />;
}

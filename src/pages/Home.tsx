import { problems, coreProblems, upperProblems, topics, byId, sources } from '../lib/bank';
import { href } from '../lib/router';
import { useProgress } from '../lib/useProgress';
import { ProblemList } from '../components/ProblemRow';

export function Home() {
  const progress = useProgress();

  const recent = Object.entries(progress)
    .filter(([id, e]) => byId.has(id) && e.lastPracticed && e.status !== 'unseen')
    .sort((a, b) => (b[1].lastPracticed ?? '').localeCompare(a[1].lastPracticed ?? ''))
    .slice(0, 5)
    .map(([id]) => byId.get(id)!);

  const completed = problems.filter((p) => progress[p.id]?.status === 'completed').length;
  const attempted = problems.filter((p) => progress[p.id]?.status === 'attempted').length;

  return (
    <div class="stack-lg">
      <header>
        <h1>Real Analysis Problem Bank</h1>
        <p class="subtitle">A curated collection of canonical problems for building the foundations of real analysis.</p>
      </header>

      <nav class="row" aria-label="Start">
        <a class="btn btn-primary" href={href('practice')}>Practice</a>
        <a class="btn" href={href('browse')}>Browse Problems</a>
        <a class="btn" href={href('search')}>Search</a>
        <a class="btn btn-quiet" href={href('sources')}>Sources</a>
        <a class="btn btn-quiet" href={href('progress')}>Progress</a>
      </nav>

      <p>
        {coreProblems.length} core problems from {sources.length} approved sources, arranged in the usual order of an
        undergraduate course, plus an optional <a href={href('browse', 'tier=upper')}>upper tier</a> of{' '}
        {upperProblems.length} harder problems. {completed > 0 || attempted > 0 ? (
          <span class="muted">You have completed {completed} and attempted {attempted}.</span>
        ) : (
          <span class="muted">Your progress is stored only in this browser.</span>
        )}{' '}
        <a href={href('about')}>How the bank is curated</a>.
      </p>

      {recent.length > 0 && (
        <section aria-labelledby="h-continue">
          <h2 class="section-title" id="h-continue">Continue</h2>
          <ProblemList problems={recent} />
        </section>
      )}

      <section aria-labelledby="h-topics">
        <h2 class="section-title" id="h-topics">Topics</h2>
        <table class="topic-table">
          <thead>
            <tr>
              <th scope="col" class="ord"><span class="visually-hidden">Order</span></th>
              <th scope="col">Topic</th>
              <th scope="col" class="num">Problems</th>
              <th scope="col" class="num">Completed</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((t, i) => {
              const ps = coreProblems.filter((p) => p.topic === t.key);
              const done = ps.filter((p) => progress[p.id]?.status === 'completed').length;
              return (
                <tr key={t.key}>
                  <td class="ord">{i + 1}</td>
                  <td>
                    {ps.length ? <a href={href('browse', `tier=core&topic=${encodeURIComponent(t.key)}`)}>{t.label}</a> : <span class="muted">{t.label}</span>}
                  </td>
                  <td class="num">{ps.length}</td>
                  <td class="num">{ps.length ? `${done} / ${ps.length}` : '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

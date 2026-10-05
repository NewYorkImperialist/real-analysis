import { Fragment } from 'preact';
import { bank, sources, label } from '../lib/bank';
import { href } from '../lib/router';
import { DIFFICULTIES, CATEGORIES, TYPES } from '../lib/types';

export function About() {
  return (
    <article class="stack-lg">
      <header>
        <h1>About this bank</h1>
        <p class="subtitle">Methodology, sources, and how your progress is kept.</p>
      </header>

      <section class="stack">
        <h2>Purpose</h2>
        <p>
          Real analysis runs on a small set of mechanics: quantifiers, completeness, sequences and series,
          compactness, continuity, differentiation, Riemann integration, uniform convergence. This bank collects the
          problems that build those mechanics and the technical proof machinery behind them, so you can practise them
          deliberately, whether you are taking a course, reviewing for an exam, or studying on your own.
        </p>
      </section>

      <section class="stack">
        <h2>Core and upper tier</h2>
        <p>
          The <strong>core</strong> is the finishable bank: the mechanics of real analysis and the technical proof
          machinery that every later argument relies on.
          The <strong>upper tier</strong> is an optional layer of harder problems, mostly from Pugh, Rudin and
          MIT 18.100B: multi-step synthesis, constructions, hypothesis-necessity counterexamples and classification
          problems, chosen only when they add a problem-solving experience the core lacks. Upper-tier problems are
          not counted in core progress and appear in practice sets only when you ask for them (“upper tier”).
          A few, tagged <em>bridge to measure theory</em>, preview ideas from measure theory.
        </p>
      </section>

      <section class="stack">
        <h2>Sources</h2>
        <p>Every problem is taken from one of the approved sources and cited to chapter, section and number.</p>
        <dl class="defs">
          {sources.map((s) => (
            <Fragment key={s.key}>
              <dt><a href={href(`sources/${s.key}`)}>{s.shortName}</a></dt>
              <dd>
                {s.citation}
                {s.tier === 'supplementary' ? <span class="small muted"> · supplementary</span> : null}
              </dd>
            </Fragment>
          ))}
        </dl>
      </section>

      <section class="stack">
        <h2>Curation</h2>
        <ul class="stack-sm" style="padding-left:1.25rem">
          <li><strong>Curated, not completionist.</strong> A problem is included because it exercises a standard idea well, not because it appears in a source.</li>
          <li><strong>Deduplicated across sources.</strong> When several books pose essentially the same problem, one version is kept; each problem names its underlying concept to make near-duplicates visible.</li>
          <li><strong>Category and difficulty are independent.</strong> A canonical problem can be hard; a challenge problem can be short once the idea is seen.</li>
          <li><strong>Text is transcribed, not invented.</strong> Statements follow the source; transcription choices are recorded in the source notes. Curator commentary is always labeled as such.</li>
        </ul>
      </section>

      <section class="stack">
        <h2>Difficulty</h2>
        <dl class="defs">
          {DIFFICULTIES.map((d) => (
            <Fragment key={d}>
              <dt>{label(d)}</dt>
              <dd>{bank.difficulties[d]}</dd>
            </Fragment>
          ))}
        </dl>
      </section>

      <section class="stack">
        <h2>Categories</h2>
        <dl class="defs">
          {CATEGORIES.map((c) => (
            <Fragment key={c}>
              <dt>{label(c)}</dt>
              <dd>{bank.categories[c]}</dd>
            </Fragment>
          ))}
        </dl>
      </section>

      <section class="stack">
        <h2>Problem types</h2>
        <dl class="defs">
          {TYPES.map((t) => (
            <Fragment key={t}>
              <dt>{label(t)}</dt>
              <dd>{bank.types[t]}</dd>
            </Fragment>
          ))}
        </dl>
      </section>

      <section class="stack">
        <h2>Hints and solutions</h2>
        <p>
          Hints and solutions are hidden until you ask for them, and each one states where it comes from: an
          official course solution, the textbook, an instructor, or your own work. Most problems have no solution in
          the bank; you can write your own in the personal solution editor, where it is always labeled
          “Personal solution” and never presented as official.
        </p>
      </section>

      <section class="stack">
        <h2>Progress and privacy</h2>
        <p>
          Each problem is <em>unseen</em>, <em>attempted</em> or <em>completed</em>, and changes only when you press
          a button — never by opening a problem, viewing a hint, or reading a solution. Progress, notes and personal
          solutions are stored only in this browser’s local storage; nothing is sent anywhere. Use the{' '}
          <a href={href('progress')}>Progress</a> page to export or import a backup.
        </p>
      </section>
    </article>
  );
}

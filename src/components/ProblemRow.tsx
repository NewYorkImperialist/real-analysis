import type { Problem } from '../lib/types';
import { label, sourceLine, topicLabel } from '../lib/bank';
import { href } from '../lib/router';
import { useProgress } from '../lib/useProgress';
import { RichText } from './RichText';

const STATUS_TEXT = { unseen: 'Unseen', attempted: 'Attempted', completed: 'Completed' } as const;

/** Compact list entry linking to the problem page. `linkQuery` is appended to the link (e.g. "set=practice"). */
export function ProblemRow({ problem: p, index, linkQuery }: { problem: Problem; index?: number; linkQuery?: string }) {
  const pr = useProgress()[p.id];
  const status = pr?.status ?? 'unseen';
  return (
    <li class="problem-row">
      <a href={href(`p/${encodeURIComponent(p.id)}`, linkQuery)}>
        <span class={`status-dot is-${status}`} title={STATUS_TEXT[status]}>
          <span class="visually-hidden">{STATUS_TEXT[status]}. </span>
        </span>
        <div>
          <div class="problem-row-head">
            {index !== undefined && <span class="problem-row-index">{index + 1}.</span>}
            <span class="problem-row-source">{sourceLine(p)}</span>
            {pr?.bookmarked && <span class="problem-row-bookmark" title="Bookmarked">★<span class="visually-hidden"> Bookmarked</span></span>}
          </div>
          <div class="problem-row-title">{p.concept.charAt(0).toUpperCase() + p.concept.slice(1)}</div>
          <RichText src={p.problemLatex} class="problem-row-preview clamp-2" firstBlock />
          <p class="meta-line">
            <span>{topicLabel(p.topic)}</span>
            <span>{label(p.difficulty)}</span>
            <span>{label(p.category)}</span>
            <span>{label(p.type)}</span>
          </p>
        </div>
      </a>
    </li>
  );
}

export function ProblemList({ problems, numbered, linkQuery }: { problems: Problem[]; numbered?: boolean; linkQuery?: string }) {
  if (!problems.length) return <p class="muted">No problems.</p>;
  return (
    <ol class="problem-list">
      {problems.map((p, i) => (
        <ProblemRow key={p.id} problem={p} index={numbered ? i : undefined} linkQuery={linkQuery} />
      ))}
    </ol>
  );
}

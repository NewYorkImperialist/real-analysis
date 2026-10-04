import '../styles/stats.css';

export type StatusCounts = { unseen: number; attempted: number; completed: number };

const pct = (n: number, total: number) => (total ? (n / total) * 100 : 0);

/**
 * Thin horizontal stacked bar of unseen / attempted / completed counts.
 * Purely presentational; the numbers are exposed through aria-label.
 */
export function StatusBar({ counts, label }: { counts: StatusCounts; label?: string }) {
  const total = counts.unseen + counts.attempted + counts.completed;
  const text =
    `${label ? `${label}: ` : ''}${counts.completed} completed, ${counts.attempted} attempted, ` +
    `${counts.unseen} unseen of ${total}`;
  return (
    <div class="statusbar" role="img" aria-label={text} title={text}>
      {total > 0 && (
        <>
          {counts.completed > 0 && (
            <span class="statusbar-seg statusbar-completed" style={{ width: `${pct(counts.completed, total)}%` }} />
          )}
          {counts.attempted > 0 && (
            <span class="statusbar-seg statusbar-attempted" style={{ width: `${pct(counts.attempted, total)}%` }} />
          )}
          {counts.unseen > 0 && (
            <span class="statusbar-seg statusbar-unseen" style={{ width: `${pct(counts.unseen, total)}%` }} />
          )}
        </>
      )}
    </div>
  );
}

export type DistItem = { key: string; label: string; count: number };

/** Shade i of n, as a mix of the accent colour with the surface (ordinal, light → dark). */
function shade(i: number, n: number): string {
  const lo = 22;
  const hi = 100;
  const p = n <= 1 ? hi : lo + ((hi - lo) * i) / (n - 1);
  return `color-mix(in srgb, var(--accent) ${Math.round(p)}%, var(--surface))`;
}

/**
 * Generic categorical/ordinal distribution (e.g. difficulty) as a thin stacked bar
 * with a tiny legend listing every category and its count.
 */
export function DistBar({ items, label, legend = true }: { items: DistItem[]; label: string; legend?: boolean }) {
  const total = items.reduce((s, it) => s + it.count, 0);
  const text = `${label}: ` + items.map((it) => `${it.label} ${it.count}`).join(', ');
  return (
    <div class="distbar">
      <div class="distbar-bar" role="img" aria-label={text} title={text}>
        {items.map((it, i) =>
          it.count > 0 ? (
            <span
              key={it.key}
              class="distbar-seg"
              style={{ width: `${pct(it.count, total)}%`, background: shade(i, items.length) }}
            />
          ) : null,
        )}
      </div>
      {legend && (
        <ul class="distbar-legend" aria-hidden="true">
          {items.map((it, i) => (
            <li key={it.key} class={it.count === 0 ? 'is-zero' : ''}>
              <span class="distbar-swatch" style={{ background: shade(i, items.length) }} />
              {it.label} <span class="distbar-n">{it.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

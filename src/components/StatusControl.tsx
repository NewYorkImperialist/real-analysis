import { useProgress } from '../lib/useProgress';
import { setStatus, toggleBookmark, type Status } from '../lib/progress';
import { celebrate } from '../lib/confetti';
import { label } from '../lib/bank';

/** The only place a problem's status changes: explicit button clicks. */
export function StatusControl({ id }: { id: string }) {
  const map = useProgress();
  const pr = map[id] ?? { status: 'unseen' as Status };
  const status = pr.status;

  return (
    <div class="status-control" role="group" aria-label="Your progress on this problem">
      <span class="status-current">
        <span class={`status-dot is-${status}`} aria-hidden="true" />
        <span class={`status-text is-${status}`} aria-live="polite">
          {status === 'unseen' ? 'Not yet attempted' : label(status)}
        </span>
      </span>
      {status !== 'attempted' && (
        <button type="button" class="btn" onClick={() => setStatus(id, 'attempted')}>
          Mark Attempted
        </button>
      )}
      {status !== 'completed' && (
        <button
          type="button"
          class="btn btn-primary"
          onClick={(e) => {
            const el = e.currentTarget as HTMLElement;
            setStatus(id, 'completed');
            celebrate(el.closest('.status-control') ?? el);
          }}
        >
          Mark Completed
        </button>
      )}
      {status !== 'unseen' && (
        <button type="button" class="btn btn-quiet" onClick={() => setStatus(id, 'unseen')}>
          Reset to unseen
        </button>
      )}
      <button
        type="button"
        class="btn btn-quiet"
        aria-pressed={pr.bookmarked ? 'true' : 'false'}
        onClick={() => toggleBookmark(id)}
        title={pr.bookmarked ? 'Remove bookmark' : 'Bookmark this problem'}
      >
        {pr.bookmarked ? '★ Bookmarked' : '☆ Bookmark'}
      </button>
    </div>
  );
}

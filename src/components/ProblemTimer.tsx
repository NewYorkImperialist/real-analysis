import { useEffect, useRef, useState } from 'preact/hooks';
import { addTime, setTime } from '../lib/progress';
import { formatDuration } from '../lib/timerSetting';

// Optional stopwatch for one problem. It never starts by itself.
//
// Away-from-keyboard handling: proofs are often worked on paper, so being away from the screen
// is not proof of being idle. Instead of discarding time silently, the timer stops counting and
// asks when it cannot tell:
//   - the tab is hidden (other tab/app, laptop closed): counting stops at that moment;
//   - no mouse/keyboard/scroll activity for IDLE_MS: counting stops at the last activity.
// On return the user chooses to count that stretch or discard it. Unanswered, it is not counted.
const IDLE_MS = 10 * 60 * 1000;
const ACTIVITY = ['mousemove', 'mousedown', 'keydown', 'scroll', 'wheel', 'touchstart'] as const;

type Gap = { since: number; reason: 'idle' | 'away' };

export function ProblemTimer({ id, storedMs, completed }: { id: string; storedMs: number; completed: boolean }) {
  const [running, setRunning] = useState(false);
  const [gap, setGap] = useState<Gap | null>(null);
  const [editing, setEditing] = useState(false);
  const [, setTick] = useState(0);
  const segStart = useRef<number | null>(null);
  const lastActivity = useRef(Date.now());

  const commit = (until: number) => {
    if (segStart.current !== null) {
      addTime(id, until - segStart.current);
      segStart.current = null;
    }
  };
  const start = () => {
    segStart.current = Date.now();
    lastActivity.current = Date.now();
    setGap(null);
    setRunning(true);
  };
  const pause = () => {
    commit(Date.now());
    setRunning(false);
  };
  const stopWithGap = (until: number, reason: Gap['reason']) => {
    commit(until);
    setRunning(false);
    setGap({ since: until, reason });
  };

  // Track activity anywhere on the page.
  useEffect(() => {
    const mark = () => (lastActivity.current = Date.now());
    ACTIVITY.forEach((e) => window.addEventListener(e, mark, { passive: true }));
    return () => ACTIVITY.forEach((e) => window.removeEventListener(e, mark));
  }, []);

  // Tick while running; stop at the last activity once the idle limit passes (also catches sleep).
  useEffect(() => {
    if (!running) return;
    const t = window.setInterval(() => {
      const last = Math.max(lastActivity.current, segStart.current ?? 0);
      if (Date.now() - last > IDLE_MS) stopWithGap(last, 'idle');
      else setTick((n) => n + 1);
    }, 1000);
    return () => window.clearInterval(t);
  }, [running]);

  // Hidden tab: stop counting now and ask on return.
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === 'hidden' && segStart.current !== null) stopWithGap(Date.now(), 'away');
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [id]);

  // Save the running segment when leaving the problem or closing the page.
  useEffect(() => {
    const onHide = () => {
      if (segStart.current !== null) stopWithGap(Date.now(), 'away');
    };
    window.addEventListener('pagehide', onHide);
    return () => {
      window.removeEventListener('pagehide', onHide);
      commit(Date.now());
    };
  }, [id]);

  // Keep the "away for …" figure current while the question is open.
  useEffect(() => {
    if (!gap) return;
    const t = window.setInterval(() => setTick((n) => n + 1), 5000);
    return () => window.clearInterval(t);
  }, [gap]);

  // Marking the problem completed stops the clock.
  useEffect(() => {
    if (completed && segStart.current !== null) pause();
  }, [completed]);

  const live = segStart.current !== null ? Date.now() - segStart.current : 0;
  const total = storedMs + live;

  return (
    <div class="timer stack-sm">
      <div class="row">
        <span class="timer-readout" aria-label={`Time on this problem: ${formatDuration(total)}`}>
          ⏱ <span class="timer-digits">{formatDuration(total)}</span>
        </span>
        {running ? (
          <button type="button" class="btn" onClick={pause}>Pause</button>
        ) : (
          <button type="button" class="btn" onClick={start} disabled={!!gap}>
            {total > 0 ? 'Resume timer' : 'Start timer'}
          </button>
        )}
        {!running && !gap && total > 0 && (
          <button type="button" class="link small" onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit time'}
          </button>
        )}
      </div>

      {gap && (
        <div class="note" role="status">
          <p class="small" style="margin:0 0 0.4rem">
            {gap.reason === 'idle'
              ? `The timer stopped after 10 minutes with no activity on this page.`
              : `The timer stopped when you left this tab.`}{' '}
            You were away for <strong>{formatDuration(Date.now() - gap.since)}</strong>. Were you still working on this
            problem (for example, on paper)?
          </p>
          <div class="row">
            <button
              type="button"
              class="btn"
              onClick={() => {
                addTime(id, Date.now() - gap.since);
                start();
              }}
            >
              Count it and resume
            </button>
            <button type="button" class="btn" onClick={start}>Discard it and resume</button>
            <button type="button" class="btn btn-quiet" onClick={() => setGap(null)}>Discard and stay paused</button>
          </div>
        </div>
      )}

      {editing && !running && (
        <EditTime
          ms={storedMs}
          onSave={(ms) => {
            setTime(id, ms);
            setEditing(false);
          }}
        />
      )}
    </div>
  );
}

function EditTime({ ms, onSave }: { ms: number; onSave: (ms: number) => void }) {
  const [min, setMin] = useState(String(Math.round(ms / 60000)));
  const n = Number(min);
  const ok = min.trim() !== '' && Number.isFinite(n) && n >= 0;
  return (
    <form
      class="row"
      onSubmit={(e) => {
        e.preventDefault();
        if (ok) onSave(n * 60000);
      }}
    >
      <label class="small">
        Total minutes{' '}
        <input
          type="number"
          min="0"
          step="1"
          value={min}
          style="width:6rem"
          onInput={(e) => setMin((e.currentTarget as HTMLInputElement).value)}
        />
      </label>
      <button type="submit" class="btn" disabled={!ok}>Save</button>
      <button type="button" class="btn btn-quiet" onClick={() => onSave(0)}>Reset to 0</button>
    </form>
  );
}

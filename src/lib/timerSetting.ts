import { useEffect, useState } from 'preact/hooks';

// Whether the optional problem timer is shown. On by default; it never starts by itself.
const KEY = 'rapb.timer';
const listeners = new Set<() => void>();

export function timerEnabled(): boolean {
  try {
    return localStorage.getItem(KEY) !== 'off';
  } catch {
    return true;
  }
}

export function setTimerEnabled(on: boolean) {
  try {
    if (on) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, 'off');
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l());
}

export function useTimerEnabled(): boolean {
  const [on, setOn] = useState(timerEnabled);
  useEffect(() => {
    const sync = () => setOn(timerEnabled());
    listeners.add(sync);
    const onStorage = (e: StorageEvent) => e.key === KEY && sync();
    window.addEventListener('storage', onStorage);
    return () => {
      listeners.delete(sync);
      window.removeEventListener('storage', onStorage);
    };
  }, []);
  return on;
}

/** 0:42, 12:05, 1:03:20 */
export function formatDuration(ms: number): string {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const z = (n: number) => String(n).padStart(2, '0');
  return h ? `${h}:${z(m)}:${z(s % 60)}` : `${m}:${z(s % 60)}`;
}

/** "45 min", "1 h 20 min" — for averages. */
export function formatMinutes(ms: number): string {
  if (ms > 0 && ms < 30000) return '<1 min';
  const min = Math.round(ms / 60000);
  if (min < 60) return `${min} min`;
  return `${Math.floor(min / 60)} h ${min % 60} min`;
}

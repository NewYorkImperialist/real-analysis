import { useEffect, useState } from 'preact/hooks';
import { subscribe, getAll } from './progress';

/** Re-renders the component whenever progress changes (this tab or another). */
export function useProgress() {
  const [, setTick] = useState(0);
  useEffect(() => subscribe(() => setTick((t) => t + 1)), []);
  return getAll();
}

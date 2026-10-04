// Personal progress, stored only in localStorage and never in the problem data.
// Status changes happen only through explicit user actions (setStatus).

export type Status = 'unseen' | 'attempted' | 'completed';
export const STATUSES: Status[] = ['unseen', 'attempted', 'completed'];

export type ProblemProgress = {
  status: Status;
  attempts?: number;
  lastPracticed?: string;
  bookmarked?: boolean;
  confidence?: number;
  hintsUsed?: number;
  personalSolutionLatex?: string;
  notes?: string;
  updatedAt?: string; // used to resolve merges on import
};

export type ProgressMap = Record<string, ProblemProgress>;

export const EXPORT_FORMAT = 'undergraduate-analysis-progress';
export const EXPORT_VERSION = 1;
const STORAGE_KEY = 'uapb.progress.v1';

// Older data may contain the retired status "mastered"; it is read as "completed".
function normalizeStatus(s: unknown): Status {
  if (s === 'mastered') return 'completed';
  return STATUSES.includes(s as Status) ? (s as Status) : 'unseen';
}

function normalizeEntry(raw: unknown): ProblemProgress | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const e: ProblemProgress = { status: normalizeStatus(r.status) };
  if (typeof r.attempts === 'number') e.attempts = r.attempts;
  if (typeof r.lastPracticed === 'string') e.lastPracticed = r.lastPracticed;
  if (typeof r.bookmarked === 'boolean') e.bookmarked = r.bookmarked;
  if (typeof r.confidence === 'number') e.confidence = r.confidence;
  if (typeof r.hintsUsed === 'number') e.hintsUsed = r.hintsUsed;
  if (typeof r.personalSolutionLatex === 'string') e.personalSolutionLatex = r.personalSolutionLatex;
  if (typeof r.notes === 'string') e.notes = r.notes;
  if (typeof r.updatedAt === 'string') e.updatedAt = r.updatedAt;
  return e;
}

export function normalizeMap(raw: unknown): ProgressMap {
  const out: ProgressMap = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [id, v] of Object.entries(raw as Record<string, unknown>)) {
    const e = normalizeEntry(v);
    if (e) out[id] = e;
  }
  return out;
}

let state: ProgressMap = load();
const listeners = new Set<() => void>();

function load(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const map = normalizeMap(parsed?.problems ?? parsed);
    // Write back so the stored data only ever contains current statuses.
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: EXPORT_VERSION, problems: map }));
    return map;
  } catch {
    return {};
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: EXPORT_VERSION, problems: state }));
  } catch {
    /* storage full or unavailable: keep in memory */
  }
  listeners.forEach((l) => l());
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Keep tabs in sync.
if (typeof window !== 'undefined')
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      state = load();
      listeners.forEach((l) => l());
    }
  });

export function getAll(): ProgressMap {
  return state;
}

export function get(id: string): ProblemProgress {
  return state[id] ?? { status: 'unseen' };
}

function update(id: string, patch: Partial<ProblemProgress>) {
  const next = { ...get(id), ...patch, updatedAt: new Date().toISOString() };
  state = { ...state, [id]: next };
  save();
}

// Explicit user action only.
export function setStatus(id: string, status: Status) {
  const cur = get(id);
  const now = new Date().toISOString();
  update(id, {
    status,
    lastPracticed: status === 'unseen' ? cur.lastPracticed : now,
    attempts: status === 'attempted' ? (cur.attempts ?? 0) + 1 : cur.attempts,
  });
}

export function toggleBookmark(id: string) {
  update(id, { bookmarked: !get(id).bookmarked });
}

export function setNotes(id: string, notes: string) {
  update(id, { notes });
}

export function setPersonalSolution(id: string, latex: string) {
  update(id, { personalSolutionLatex: latex });
}

export function recordHintViewed(id: string, count: number) {
  // Counts revealed hints; never changes status.
  if ((get(id).hintsUsed ?? 0) < count) update(id, { hintsUsed: count });
}

// ---------- export / import ----------

export function exportJSON(): string {
  return JSON.stringify(
    {
      format: EXPORT_FORMAT,
      version: EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      problems: state,
    },
    null,
    2,
  );
}

export type ParsedImport = { problems: ProgressMap; exportedAt?: string };

export function parseImport(text: string): ParsedImport {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('The file is not valid JSON.');
  }
  const d = data as Record<string, unknown>;
  if (d?.format !== EXPORT_FORMAT) throw new Error('This does not look like a progress export from this site.');
  if (typeof d.version !== 'number' || d.version > EXPORT_VERSION)
    throw new Error(`Unsupported export version ${String(d.version)}.`);
  return {
    problems: normalizeMap(d.problems),
    exportedAt: typeof d.exportedAt === 'string' ? d.exportedAt : undefined,
  };
}

export function applyImport(incoming: ProgressMap, mode: 'replace' | 'merge') {
  if (mode === 'replace') {
    state = { ...incoming };
  } else {
    const merged: ProgressMap = { ...state };
    for (const [id, inc] of Object.entries(incoming)) {
      const cur = merged[id];
      if (!cur || (inc.updatedAt ?? '') >= (cur.updatedAt ?? '')) merged[id] = inc;
    }
    state = merged;
  }
  save();
}

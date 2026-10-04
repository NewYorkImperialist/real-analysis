import bankJson from '../generated/bank.json';
import type { Bank, Problem, Source, Topic, Difficulty, Category, ProblemType } from './types';
import { DIFFICULTIES } from './types';

export const bank = bankJson as unknown as Bank;
export const problems: Problem[] = bank.problems;
export const byId = new Map(problems.map((p) => [p.id, p]));
export const sources: Source[] = bank.sources;
export const sourceByKey = new Map(sources.map((s) => [s.key, s]));
export const topics: Topic[] = bank.topics;
export const topicByKey = new Map(topics.map((t) => [t.key, t]));

export const topicLabel = (k: string) => topicByKey.get(k)?.label ?? k;
export const subtopicLabel = (topic: string, k: string) => topicByKey.get(topic)?.subtopics[k] ?? k;
export const sourceShort = (k: string) => sourceByKey.get(k as Source["key"])?.shortName ?? k;

const CAP: Record<string, string> = { 'very-hard': 'Very hard', 'theorem-application': 'Theorem application' };
export const label = (s: string) => CAP[s] ?? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

export const difficultyRank = (d: Difficulty) => DIFFICULTIES.indexOf(d);

// "Assigned in MIT 18.100A (2020)" counts toward the MIT source filter.
export const isMitAssigned = (p: Problem) => (p.assignedIn ?? []).some((a) => a.startsWith('MIT 18.100A'));

export function sourceLine(p: Problem): string {
  const s = sourceByKey.get(p.source.key);
  return [s?.shortName, p.source.problemNumber].filter(Boolean).join(', ');
}

// Distinct values across the bank, for filter UIs.
export const allTags = [...new Set(problems.flatMap((p) => p.tags))].sort();
export const allSkills = [...new Set(problems.flatMap((p) => p.skills))].sort();

export type Facet = { topic?: string[]; subtopic?: string[]; source?: string[]; difficulty?: Difficulty[];
  category?: Category[]; type?: ProblemType[]; tag?: string[]; status?: string[] };

// Statements and metadata only; hints and solutions load per topic (lib/extras.ts).
import bankJson from '../generated/site-bank.json';
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

/** 'core' unless the problem is in the optional upper tier. */
export const tierOf = (p: Problem): 'core' | 'upper' => p.tier ?? 'core';
export const coreProblems = problems.filter((p) => !p.tier);
export const upperProblems = problems.filter((p) => p.tier === 'upper');
export const TIER_LABEL = { core: 'Core', upper: 'Upper tier' } as const;

export const difficultyRank = (d: Difficulty) => DIFFICULTIES.indexOf(d);

// "Assigned in MIT 18.100A (2020)" counts toward the MIT source filter.
export const isMitAssigned = (p: Problem) => (p.assignedIn ?? []).some((a) => a.startsWith('MIT 18.100A'));

/** Display title: the curated title, else the concept with a capital first letter. */
export const titleOf = (p: Problem): string => p.title ?? p.concept.charAt(0).toUpperCase() + p.concept.slice(1);

export function sourceLine(p: Problem): string {
  const s = sourceByKey.get(p.source.key);
  // MIT numbers restart in every assignment, so name the assignment too ("Assignment 5", "Midterm", "Final").
  const part =
    p.source.key === 'mit' && p.source.chapter
      ? p.source.chapter.replace(/\s*\(.*\)$/, '').replace('Final Assignment', 'Final').replace('Midterm Exam', 'Midterm')
      : undefined;
  return [s?.shortName, part, p.source.problemNumber].filter(Boolean).join(', ');
}

// Distinct values across the bank, for filter UIs.
export const allTags = [...new Set(problems.flatMap((p) => p.tags))].sort();
export const allSkills = [...new Set(problems.flatMap((p) => p.skills))].sort();

export type Facet = { topic?: string[]; subtopic?: string[]; source?: string[]; difficulty?: Difficulty[];
  category?: Category[]; type?: ProblemType[]; tag?: string[]; status?: string[] };

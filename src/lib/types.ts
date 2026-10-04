// Canonical data model. The YAML files in data/ are the source of truth;
// scripts/build-data.mjs validates them and emits src/generated/bank.json.

export type Difficulty = 'introductory' | 'easy' | 'medium' | 'hard' | 'very-hard';
export type Category = 'canonical' | 'synthesis' | 'challenge';
export type ProblemType =
  | 'definition'
  | 'proof'
  | 'theorem-application'
  | 'counterexample'
  | 'construction'
  | 'computation'
  | 'conceptual';

export const DIFFICULTIES: Difficulty[] = ['introductory', 'easy', 'medium', 'hard', 'very-hard'];
export const CATEGORIES: Category[] = ['canonical', 'synthesis', 'challenge'];
export const TYPES: ProblemType[] = [
  'definition',
  'proof',
  'theorem-application',
  'counterexample',
  'construction',
  'computation',
  'conceptual',
];

export type SourceKey = 'mit' | 'abbott' | 'lebl' | 'ross' | 'cummings' | 'tao';

export type Source = {
  key: SourceKey;
  tier: 'primary' | 'supplementary';
  name: string;
  shortName: string;
  author: string;
  title: string;
  edition?: string;
  year: string;
  publisher?: string;
  description?: string;
  citation: string;
};

export type ProblemSource = {
  key: SourceKey;
  chapter?: string;
  section?: string;
  problemNumber?: string;
  page?: string;
};

// Provenance is mandatory for every hint and solution.
export type Hint = { text: string; source: string; kind: 'textbook' | 'official' | 'instructor' | 'personal' };

export type Solution = {
  available: boolean;
  type?: 'official' | 'textbook' | 'instructor' | 'personal';
  source?: string;
  latex?: string;
};

export type Problem = {
  id: string;
  source: ProblemSource;
  assignedIn?: string[]; // e.g. "MIT 18.100A (Fall 2020) Assignment 5, Problem 2"
  topic: string;
  subtopics: string[];
  skills: string[];
  concept: string; // short name of the underlying standard result; used to avoid near-duplicates
  difficulty: Difficulty;
  category: Category;
  type: ProblemType;
  tags: string[];
  problemLatex: string;
  hints?: Hint[];
  solution?: Solution;
  notes?: string; // transcription / source notes
  curation?: { why?: string };
  related?: string[]; // ids
};

export type Topic = {
  key: string;
  label: string;
  blurb: string;
  subtopics: Record<string, string>;
};

export type Bank = {
  generatedAt: string;
  sources: Source[];
  topics: Topic[];
  difficulties: Record<Difficulty, string>;
  categories: Record<Category, string>;
  types: Record<ProblemType, string>;
  problems: Problem[];
};

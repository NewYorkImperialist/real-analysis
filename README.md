# Real Analysis Problem Bank

A curated collection of canonical problems for building the foundations of real analysis.

A static site (Vite + Preact + TypeScript, KaTeX for math). There is no backend. Progress lives in your
browser's localStorage.

## Run

```sh
npm install
npm run dev       # validate data, then start the dev server
npm run build     # validate data, type-check, build to dist/ (open with `npm run preview`)
npm run check     # validate the problem data only
```

`dist/` uses relative paths and hash routing, so it works from any static host or a local folder.

## The bank

There are **383 problems**: a **core** of 347 and an optional **upper tier** of 36 harder problems.

| Source | Core | Upper tier |
|---|---|---|
| MIT 18.100A Real Analysis — 2020 (assignments, midterm, final) | 54 original, plus 38 Lebl exercises the course assigned | — |
| Abbott, *Understanding Analysis* (2nd ed.) | 99 | — |
| Lebl, *Basic Analysis I* (v6.3) | 105 | — |
| Ross, *Elementary Analysis* (2nd ed.) | 39 | — |
| Cummings, *Real Analysis: A Long-Form Mathematics Textbook* (2019) | 27 | — |
| Tao, *Analysis I* (3rd ed.) | 15 | — |
| Pugh, *Real Mathematical Analysis* (2nd ed.) | 2 | 22 |
| Rudin, *Principles of Mathematical Analysis* (3rd ed.) | 4 | 13 |
| MIT 18.100B (2006, Fall 2010, Spring 2025) | 2 | 1 |

The upper tier (`tier: upper` in the data) holds synthesis, construction, classification and
hypothesis-necessity problems that add a problem-solving experience the core lacks; three of them
(tag `bridge-to-measure-theory`) preview measure-zero ideas. It is excluded from core progress and
from practice sets unless requested. See `curation/UPPER_TIER_BRIEF.md` and `curation/UPPER_SHORTLIST.md`.

How the bank was built:

- **Extraction.** Every exercise in the relevant chapters was read and judged. 836 candidates came out
  of this.
- **Curation.** Candidates were compared across sources by the standard result they test (`concept`), so each
  piece of machinery appears in its strongest one or two forms.
- **Audits.** Every selected problem was checked symbol by symbol against the rendered page images.
  - Book typos are kept as printed and explained in `notes`.
  - Any bracketed context that is not a verbatim quote is labeled as a summary.
- **No invented problems.** Every problem is transcribed from a source. Textbook hints (Ross's back-of-book
  hints, and a few printed by Pugh and Rudin) are labeled as such. All other hints and every solution are
  AI-generated, independently reviewed, and labeled "AI-generated · not verified by a human" on the site.

## Data layout

```
data/sources.yaml          approved sources (the validator rejects any other source key)
data/taxonomy.yaml         topics → subtopics, difficulty / category / type definitions
data/problems/<source>.yaml   one list of problems per source
scripts/build-data.mjs     validates everything (schema, enums, ids, provenance, KaTeX) → src/generated/bank.json
```

To add a problem, append an entry to the right `data/problems/<source>.yaml` and run `npm run check`. No UI
code changes are needed. Write math as `$…$` or `$$…$$`, and use YAML `|` block scalars so backslashes need no
escaping. Put a blank line between paragraphs, and start a new line for each part label such as `(a)` or `b)`.

```yaml
- id: abbott-2.5.5
  source: { key: abbott, chapter: "2 Sequences and Series", section: "2.5 …", problemNumber: "Exercise 2.5.5", page: "66" }
  assignedIn: ["MIT 18.100A (Fall 2020) Assignment 5, Problem 2"]   # optional
  topic: sequences
  subtopics: [subsequences]
  skills: [subsequence-extraction]
  concept: "bounded + all convergent subsequences share a limit ⇒ convergent"
  title: "Bounded sequences whose convergent subsequences share a limit"   # display title; $…$ math allowed, no spoilers
  difficulty: medium          # introductory | easy | medium | hard | very-hard
  category: canonical         # canonical | synthesis | challenge
  type: proof                 # definition | proof | theorem-application | counterexample | construction | computation | conceptual
  tags: [subsequence, Bolzano-Weierstrass]
  problemLatex: |
    Assume $(a_n)$ is a bounded sequence …
  textbookHintsLast: true     # optional: show AI hints before a printed hint that gives the solution away
  hints:                      # optional; provenance is required
    - { text: "…", source: "Ross, Selected Hints and Answers", kind: textbook }
  solution:                   # optional; provenance is required when available
    available: true
    type: personal            # official | textbook | instructor | personal
    source: "My write-up"
    latex: |
      …
  notes: "Transcription / source notes."
  curation: { why: "Why this problem earns its place." }
```

## Progress

Progress is stored in localStorage under `rapb.progress.v1`, separately from the problem data.

- **States:** `unseen`, `attempted` and `completed`. Status changes only when you click a button. Opening a
  problem or viewing a hint or solution never changes it.
- **Migration:** older data with the retired value `mastered` is read as `completed`.
- **Export and import:** these are on the Progress page as a versioned JSON file
  (`format: real-analysis-progress`, `version: 1`).
- **Merge or replace:** when importing you choose explicitly. Merge keeps the newer entry for each problem;
  Replace overwrites all current progress.

## Practice mode

Write a request in plain words, for example "5 medium canonical compactness problems emphasizing definitions".
It is parsed into ordinary filters that you can adjust. The set is chosen only from existing problems, and it
avoids repeating the same `concept`, subtopic and type. A set can be printed or downloaded as a `.tex`
worksheet built from the same LaTeX.

## Curation materials

`curation/` keeps all 836 candidates (551 not selected, indexed in `curation/UNSELECTED.md`), the
selection decisions, and a safe script for adding more problems later. See `curation/README.md`.

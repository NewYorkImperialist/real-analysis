# Typo/error report — solutions B

Scope: `data/solutions/{continuity,differentiation,integration,function-sequences,upper-pugh,upper-rudin-mit}.yaml`. That is 184 entries: 49 + 31 + 29 + 34 + 22 + 19.

For each entry I read the problem statement, every hint and the solution. I checked spelling, LaTeX, notation, part labels, cross-references and arithmetic, and I checked the mathematics step by step. Sums, derivatives, constants and the case analysis in the counterexamples were checked by hand. Overall the files are clean. I found only two defects, and fixed both.

`node scripts/build-data.mjs --check`: ✓

## Fixes

| id | field | before → after | reason |
|---|---|---|---|
| pugh-3.68 | solution | `$\log P_n = \sum_{k=2}^n \log(1 + c_k)$` → `$\log P_n = \sum_{k=2}^n \log(1 + a_k)$ (resp. $\log(1 + b_k)$)` | Wrong letter. In the problem's notation (Exercise 67), $c_k$ is the factor itself ($c_k = 1 + a_k$), so $\log(1 + c_k)$ is incorrect. |
| cummings-7.10 | solution | "As the NOTES indicate" → "As the source notes indicate" | "NOTES" is the data field's name. On the problem page the notes are shown under the heading "Source notes". |

## Flagged (not changed)

None. A few things I checked and left as they are on purpose:

- **ross-27.3 hint 2** refers to "the book's hint". That is correct: the problem's `textbookHintsLast` hint is shown after the AI hints.
- **mit20-a12-1 and cummings-8.27** each open with a remark about a typo in the source. The displayed statements are already normalized, so these remarks are redundant, but they are accurate.
- **pugh-3.34 hint 3** says the total length is at most $\epsilon(b-a)$, while the solution uses $2\epsilon(b-a)$ because it enlarges the intervals to open ones. Both are fine for a zero-set argument.

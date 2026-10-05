# Solution sweep A: adversarial check

**Scope:** `data/solutions/{foundations,real-numbers,sequences,series,bridges,coverage}.yaml`. Each solution was read
next to its problem statement and notes from `src/generated/bank.json`.

| File | Entries |
|---|---|
| foundations.yaml | 21 |
| real-numbers.yaml | 25 |
| sequences.yaml | 45 |
| series.yaml | 28 |
| bridges.yaml | 4 |
| coverage.yaml | 4 |
| **Total** | **127** |

## What was checked
- **Every part answered:** each part is answered in the book's own conventions. This covers Abbott's "countable" = countably infinite (1.5.3, 1.5.6, 1.5.8, 1.5.9, 6.2.13), Lebl's ℕ = {1, 2, …} and cluster points, Tao's ℕ starting at 0, extended-real limsup/liminf and "≤ ε" limit points (6.4.3), Ross's `n > N` convention, closed sets via limits, and limsup/liminf forms of the Root and Ratio Tests.
- **Arithmetic:** every computation was redone:
  - f(4/15) = 240 and f(2/9) = 108 (mit20-a1-6)
  - the antidiagonal formula N(i, j) against the printed array (abbott-1.5.3)
  - the constants 19h and 13h in the cube-root bounds (mit20-a2-7)
  - ∑ 1/2^{2n+1} = 1/6
  - the limit (a₁ + 2a₂)/3 (cummings-3.25)
  - a_{2n,n} = 2/5 (abbott-2.3.13)
  - the ratios 1/2 and 8 for 2^{n+(−1)^n} (ross-14.10)
  - the closed forms of the geometric and telescoping sums
  - the dyadic block bounds (Cauchy condensation)
  - the j_k = ⌊ky⌋ grid bound (lebl-2.1.17)
- **ε/δ/N choices:** each was plugged back in, for example N > 2mB/ε in lebl-5.1.11 and M = 2·max(N₁, N₂) in lebl-2.1.22.
- **Edge cases:** strict versus non-strict inequalities and the edge cases were checked: D = 0, C = 0, A = 0 or B = 0, the empty index set I, p ≤ 0 in ross-15.3, and r ≤ 0 in cummings-4.3.
- **Examples and counterexamples:** each one was checked against its stated conditions.
- **Cited results:** hypotheses and availability were checked: Abbott Thm 1.5.7/1.5.8, 2.3.2, 2.7.7, NIP 1.4.1, Baire 3.5.2; Tao Cor 7.2.6, Lemmas 6.5.2/6.5.3, Prop 7.3.1, 11.6.1; Ross Thms 9.1, 10.2, 10.11, 11.2, 11.8, 11.9. None of them cites the result it is asked to prove.
- **Hints:** each hint was checked for consistency with its solution and for grading. None states the final answer outright.

## Fixes
**None.** No genuine mathematical error, wrong citation, or hint/solution inconsistency was found in the 127 entries.

## lowConfidence flags
None added.

## Borderline items (judged correct and left unchanged)
- **abbott-1.5.9(b):** cites "Exercise 1.5.3(a)" for *finite ∪ countable is countable*. That exercise is stated for two countable sets. Its proof does treat the case B₂ finite explicitly, so the citation is accurate, just loose.
- **tao-a.5.1:** the closing "moral" paraphrases (b) as "for every y there is a matching x". That is loose wording for ∃x∀y, but the next sentences state the distinction precisely.
- **abbott-2.5.4:** the remark that the hyperreals satisfy the NIP but are not complete is correct, using ℵ₁-saturation. It is beyond the course, but it is not wrong.
- **abbott-1.4.8 hint 1, ross-11.9 hint 2, lebl-2.3.5 hint 2:** these hints come close to the answer, but they are the last rungs of graded hint ladders and do not state the conclusion.

## Statement issues for the coordinator
No new ones. These issues are already documented in notes and handled in the solutions:
- **abbott-2.3.10(c):** the book prints "(b_n) → a" with a undefined; the solution reads it as "→ 0".
- **cummings-4.18:** the book's "if each" should read "if".
- **mit20-a3-2:** the printed quantifier order "∀j ∃d_{−j} such that x = …" is read in the intended sense.

## Housekeeping
Data check: `node scripts/build-data.mjs --check` passes ✓. No repo files were modified other than this report.

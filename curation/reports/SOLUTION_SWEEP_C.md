# Solution sweep C: adversarial check

**Scope:** `data/solutions/{differentiation,integration,function-sequences,upper-pugh,upper-rudin-mit}.yaml`. I read each
solution and its hints next to the problem statement and notes from `src/generated/bank.json`. Each proof was treated
as if it contained one hidden error.

| File | Entries |
|---|---|
| differentiation.yaml | 31 |
| integration.yaml | 29 |
| function-sequences.yaml | 34 |
| upper-pugh.yaml | 22 |
| upper-rudin-mit.yaml | 19 |
| **Total** | **135** |

## What was checked
- **Every part answered, in the book's conventions.** This includes:
  - Abbott's one-sided derivatives at the endpoints of an interval domain (5.2.11, 5.2.12)
  - Tao's "differentiable on X" and limit points (10.1.2, 10.3.5), and his one-sided derivative at endpoints. This is the source of the noted endpoint caveat in tao-11.9.3.
  - Ross's `n > N` and Definition 36.1 for improper integrals
  - Lebl's ℕ = {1, 2, …} and his ln x = ∫₁ˣ dt/t
  - Rudin's "increasing" = non-decreasing, R^k, complex sequences (3.14) and the vector-valued extension (4.5)
- **Computations redone.** Among them:
  - all derivatives in abbott-5.2.7 (including g₄'' = (12x² − 1) sin(1/x) − 6x cos(1/x)), ross-28.4, lebl-4.4.6 and ross-24.9 (f_n' = n x^{n−1}(n − (n+1)x), peak (n/(n+1))^{n+1} → 1/e)
  - every value in the rudin-5.15 extremal example (M₀ = 1, M₁ = 4, M₂ = 4, f''(0) = 4, the max of (3u−1)/(1+u)³ at u = 1)
  - the Riemann/Darboux sums in mit20-a11-5, abbott-7.2.3 and ross-32.2
  - the Cauchy-product bound |c_k| ≥ 2(k+1)/(k+2) in pugh-3.73
  - the b_k − b_k²/2 expansion and the log bounds in pugh-3.68
  - all 14 sets and their membership words in pugh-2.148
  - the tent integral k·w_k = 2^{−(k+1)} in lebl-5.5.10
  - the Cantor-set lengths in abbott-7.3.9 and pugh-3.50
  - the jump (1/q²)·Σ1/m² in rudin-7.10
- **ε/δ/N choices plugged back in.** Examples: δ = ε/(4kM) in abbott-7.3.7, δ = ε/(4mB) in lebl-5.1.13, η < ε/(4nB+1) in pugh-prelim-7, the choice of m(n) in rudin-3.14(e), ε_k in pugh-4.37, and c_n = 2^{−n}/(1+B_n) in rudin-5.21.
- **Edge cases.**
  - Empty sets: K = ∅, E = ∅, k = 0 points.
  - Degenerate or endpoint cases: degenerate intervals in pugh-prelim-43, endpoint cases in tao-11.9.3 and lebl-4.2.13, and n = 1 / k = 0 starting indices.
  - Zero-valued constants: M₀ = 0 or M₂ = 0 in rudin-5.15.
  - Division safety: the denominator never vanishes in ross-31.4(d), and g(x) ≠ 0 holds before dividing in lebl-4.2.9.
- **Counterexamples re-verified against every stated condition.** Examples:
  - continuity and bijectivity of the pugh-2.49 map
  - the Kuratowski 14-set example
  - f(x) = x − arctan x + π/2 in pugh-4.27(d)
  - the fat-Cantor bijection in pugh-3.50
  - the closed graph of 1/x in pugh-2.44(d)
  - the ray-plus-hyperbola space in pugh-2.78(d)
  - the uniform-limit counterexample to 6.2.6(c) in abbott-6.2.6
- **Cited results.** I checked hypotheses and theorem numbers:
  - Abbott: 2.6.4, 3.3.5, 6.2.5, 6.3.3/6.4.3, 7.2.8, 7.2.9, 7.3.2, 7.4.2
  - Ross: 26.5, 26.6 (Abel), 30.2
  - Rudin: 4.30, 6.10, 7.8, 7.11, 7.16, 7.17, 2.43
  - Tao: 11.9.1, 10.2.7
- **Hints.** I checked that each hint agrees with its solution, that each set builds up gradually, and that no hint states the final answer.

## Fixes

| id | What was wrong | Why | Change |
|---|---|---|---|
| pugh-2.148 (hint 4) | It began "To reach $14$, build $S$ …". | The question is "how many distinct subsets can be produced?", and the answer is 14. The hint stated that final answer before the solver had derived the bound. | Changed it to "To show that the bound is attained, build $S$ …". The rest of the hint is unchanged. |

No proof needed correcting. I found no invalid steps, wrong computations, examples that fail their conditions, or misapplied theorems in the 135 solutions.

## lowConfidence
None added.

## Notes for the coordinator (no edit made)
- **Book hints that give the answer.** Some imported book hints state the answer. They are always the last hint, and the curation notes already say so:
  - ross-26.7 hint 3 ("No! …")
  - ross-24.9 hint 4
  - ross-27.3 hint 3
  - ross-23.9 hint 3

  I left them alone because they are the book's own text. Flag this if the "no hint states the answer" rule should also cover book hints.
- **abbott-7.3.7(a).** It cites linearity (Theorem 7.4.2), which is one section after the exercise. The fact is elementary and the proof stays valid, but a purist might want a direct U − L estimate instead.
- **Statement issues.** I found none beyond those already recorded in the problem notes (tao-11.9.3 endpoint caveat, pugh-3.68 k = 1 factor, rudin-7.13 subsequence wording, mit20-a11-4 "has a neither", mit20-a12-1 typo, cummings-8.27 part reference).

`node scripts/build-data.mjs --check`: ✓ (380 problems valid).

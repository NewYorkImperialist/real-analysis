# Difficulty audit, group 1: foundations, real-numbers, sequences, series

Scope: all 131 problems in these four topics (foundations 23, real-numbers 26, sequences 49, series 33), including the 4 upper-tier problems. I read every statement and solution and judged each one against `data/taxonomy.yaml` `difficulties`: how many ideas it needs, whether it needs a non-obvious construction or estimate, and how long the shortest correct proof is. Nothing in `data/` was edited.

## Distribution by source × difficulty

| source | introductory | easy | medium | hard | very-hard | total | mean (1-5) |
|---|---|---|---|---|---|---|---|
| abbott | 4 | 18 | 12 | 0 | 0 | 34 | 2.24 |
| cummings | 2 | 6 | 3 | 0 | 0 | 11 | 2.09 |
| lebl | 12 | 20 | 9 | 2 | 0 | 43 | 2.02 |
| mit | 8 | 8 | 4 | 0 | 0 | 20 | 1.80 |
| pugh (upper) | 0 | 0 | 1 | 2 | 0 | 3 | 3.67 |
| ross | 0 | 7 | 2 | 1 | 0 | 10 | 2.40 |
| rudin (upper) | 0 | 0 | 0 | 1 | 0 | 1 | 4.00 |
| tao | 2 | 3 | 4 | 0 | 0 | 9 | 2.22 |
| **all** | 28 | 62 | 35 | 6 | 0 | 131 | |

By topic and source:

| topic | source: intro / easy / medium / hard |
|---|---|
| foundations | mit 3/1/2/0, lebl 5/2/1/0, tao 1/1/1/0, abbott 0/2/3/0, ross 0/0/1/0 |
| real-numbers | mit 1/2/1/0, abbott 1/6/1/0, lebl 3/7/0/1, cummings 2/0/1/0 |
| sequences | mit 4/2/0/0, abbott 3/8/5/0, lebl 3/6/4/0, ross 0/4/1/1, cummings 0/4/1/0, tao 0/1/1/0, rudin 0/0/0/1 |
| series | lebl 1/5/4/1, tao 1/1/2/0, mit 0/3/1/0, abbott 0/2/3/0, ross 0/3/0/0, cummings 0/2/1/0, pugh 0/0/1/2 |

## Systematic bias check

The source means differ by less than half a level among the core-tier books. Paired comparisons do not support a per-source bias.

- **MIT is lowest (1.80), but it is not under-labelled.** Its problems are exam and homework items and are easier. Comparable pairs match: mit20-a3-6 and abbott-2.2.2 are both introductory (ε–N limits). mit20-mid-4a and lebl-2.3.7 are both easy (limsup subadditivity / liminf superadditivity). mit20-mid-5a and abbott-2.7.9 are both easy (proofs of the limit-comparison and ratio tests). mit20-a5-6 (intro) is a strict sub-case of abbott-2.4.7 (medium).
- **Abbott and Lebl agree on direct pairs**: abbott-1.3.11 / lebl-1.3.5 (easy/easy), abbott-2.3.9 / lebl-2.2.9 (easy/easy), abbott-2.5.5 / lebl-2.3.9 (medium/medium). The exceptions are in the relabel table below and point in both directions.
- **One mild pattern: Lebl's author tags.** Every Lebl exercise marked "(Challenging)", "(Hard)" or "(Tricky)" got medium or higher (lebl-1.4.5, 2.1.17, 2.3.10, 2.4.3, 2.5.7, 2.5.15, 2.6.3, 2.6.12). Most of these are justified. The one clear case of the tag inflating the label is lebl-2.6.12. Abbott labels the identical task easy as one part of abbott-2.7.4.
- **Upper tier** (pugh-3.68 medium, pugh-3.73 hard, pugh-prelim-63 hard, rudin-3.14 hard) sits on the same scale as the core hard problems (lebl-2.4.3, lebl-2.6.3). rudin-3.14(c) is Hardy's Tauberian theorem. Without its outline it would be very-hard, but the full outline is given, so hard stands.

There is no source-level relabelling to recommend. The issues are individual problems.

## Recommended relabels

| id | current | proposed | confidence | reason |
|---|---|---|---|---|
| lebl-2.6.12 | medium | easy | high | Find positive x_n → 0 with Σ(−1)^n x_n divergent. This is exactly abbott-2.7.4(d) (easy), which also requires 0 ≤ x_n ≤ 1/n and is only one of four parts there. One counterexample (1/n on evens, 1/n² on odds) plus divergence of the harmonic series. The "(Challenging)" tag overstates it. |
| abbott-2.7.8 | medium | easy | medium | (a) Σ\|a_n\| < ∞ ⇒ Σa_n² converges is cummings-4.5(a) (easy). (b) The (−1)^n/√n counterexample is lebl-2.6.13 / cummings-4.5(b) (easy). (c) is a one-line term test. Together these are three standard short items, the same profile as abbott-2.7.4 and abbott-2.3.10 (easy). |
| ross-22.14 | hard | medium | medium | s_{n+1} − s_n → 0 ⇒ the subsequential limits form an interval. One idea: a discrete intermediate-value crossing between visits near a and near b, with the hint pointing to Theorem 11.2. The proof is about 10 lines. It sits with the medium subsequence problems (lebl-2.1.17, abbott-2.5.5, ross-12.13), not with the hard ones, which need real constructions (lebl-2.4.3, lebl-2.6.3, pugh-prelim-63). |
| cummings-1.22 | medium | easy | medium | Prove the Nested Interval Property from sup: the endpoints are monotone, a_n ≤ b_m, take x = sup a_n. This is the same single sup argument as cummings-3.16 (decreasing case of monotone convergence, easy) and abbott-1.3.3 (easy). The harder converse, NIP ⇒ completeness (abbott-2.5.4), is medium, and this one should be below it. |
| lebl-2.4.2 | medium | easy | medium | A contractive sequence \|x_{n+1}−x_n\| ≤ C\|x_n−x_{n−1}\| is Cauchy, with the geometric-sum formula given. It is near-identical to ross-10.6(a) (easy): bound the increments geometrically, telescope, take the tail. The only extra step is a one-line induction for C^{k−1}D, and ross-10.6 adds a counterexample part on top. |

## Considered and left unchanged (borderline, one level at most)

- abbott-1.2.11 (easy) vs mit20-final-1 / tao-a.5.1 (introductory): all are negating quantified statements. Abbott also asks for a truth judgement backed by the Archimedean property, so easy is defensible.
- abbott-2.4.7 (medium) vs the easy limsup exercises (mit20-a5-5, lebl-2.3.6): it has four parts, including both directions of "lim exists ⇔ liminf = limsup". Medium is fine.
- abbott-2.4.6 (AGM, medium) vs cummings-3.24 / abbott-2.4.5 (easy): it needs two coupled monotone sequences. This is borderline, but the ordering is sensible.
- abbott-1.2.6 (introductory, four parts on the triangle inequality), mit20-a1-6 (medium, mostly bookkeeping) and ross-16.8 (medium, the diagonal argument with uniqueness of decimal expansions): all are borderline, and none breaks peer ordering.
- pugh-3.68 (upper, medium): the infinite-product counterexamples need log estimates. It could be hard, but medium is defensible.

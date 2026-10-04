# Relevance review

I read all 383 problems (346 core, 37 upper) from `src/generated/bank.json`. I checked each one against five issues: (1) off-topic, (2) no technique, (3) near-duplicate, (4) broken context, (5) misplaced level. This was not a broad redundancy audit. A problem is flagged as a near-duplicate only when it has the same task and technique as another bank problem and is clearly the weaker of the two. Nothing in `data/` was edited.

| id | title | issue | evidence | recommendation |
|---|---|---|---|---|
| lebl-0.3.15 | $n^3 + 5n$ is divisible by 6 | 1 | A divisibility fact proved by induction. It is number theory, and lebl-0.3.11 already trains induction. | cut |
| lebl-0.3.12 | The power set of an $n$-element set has $2^n$ elements | 1 | A finite counting argument. The power set matters to analysis only through Cantor's theorem (pugh-1.38). | cut |
| mit20-a1-6 | Countability of the positive rationals via prime factorizations | 1 | Mostly prime-factorization bookkeeping, and part (a) is arithmetic. abbott-1.5.3 already gives the analysis route to $\mathbb{Q}$ being countable. | cut |
| lebl-0.3.6 | Distributive laws for union and intersection | 2 | A routine set identity. lebl-0.3.27 and tao-3.4.5 train the same element-chasing with more content. | cut |
| lebl-0.3.19 | A countable union of finite sets that is infinite | 2 | The answer is one line ($A_n=\{n\}$) and uses no technique. | cut |
| mit20-a7-4 | Every real number is a cluster point of the irrationals | 2 | An immediate restatement of mit20-a3-1 (the irrationals are dense). | cut |
| lebl-3.4.3 | $1/x$ is Lipschitz on $(c,\infty)$ | 2 | A one-line estimate. The same function and bound appear in ross-19.2(c) ($1/x$ on $[1/2,\infty)$). | cut |
| mit20-a11-2 | Fourth Taylor polynomials of $\sin x$ and $1/(1-x)$ | 2 | Calculus differentiation drill with no analysis content. Taylor's theorem is exercised by mit20-final-5a and mit20-a11-4. | cut |
| mit20-a11-3 | Computing limits with Taylor's theorem | 2 | Calculus limit computations. Remainder control is trained better by mit20-final-5a and rudin-5.17. | cut |
| lebl-5.3.1 | Differentiating $\int_{-x}^{x} e^{s^2}\,ds$ | 2 | A calculus computation (FTC plus chain rule). The FTC has proof problems (abbott-7.5.2, tao-11.9.3, lebl-5.3.9). | cut |
| mit20-final-6a | The improper integral $\int_0^1 x\log x\,dx$ | 2 | Antiderivative and L'Hôpital computation, with the L'Hôpital rule handed over as given. | cut |
| mit20-final-6b | $\int_0^1 x^n \sin x\,dx$ tends to 0 | 2 | A one-line bound $\le 1/(n+1)$. abbott-7.4.10 is the version with technique. | cut |
| ross-36.3 | Improper integrals of $x^{-p}$ | 2 | Antiderivative computation, but it is the reference $p$-integral that later improper-integral and integral-test problems lean on. | keep despite |
| mit20-mid-1a | Preimages commute with intersections | 3 | A special case of lebl-0.3.27, which handles arbitrary unions and intersections, images and preimages. | cut |
| tao-8.3.4 | Cantor's theorem and strict cardinality | 3 | Same task as pugh-1.38 (no surjection $X\to 2^X$). The extra transitivity part is set theory past what analysis needs. | cut |
| lebl-1.2.7 | The AM-GM inequality for two numbers | 3 | abbott-2.4.6(a) asks for the same inequality and then uses it in a limit argument. | cut |
| mit20-a3-6 | $\varepsilon$–$N$ proof that $1/(20n^2+20n+2020)\to 0$ | 3 | The same rational-function $\varepsilon$–$N$ exercise as abbott-2.2.2(b), and easier. | cut |
| mit20-mid-3a | $\varepsilon$–$N$ proof that $10n^2/(n^2+16n+1)\to 10$ | 3 | The same task and technique as abbott-2.2.2(a). abbott-2.2.2 also covers the $\sin(n^2)$ case. | cut |
| mit20-mid-4a | Subadditivity of $\limsup$ | 3 | The mirror of lebl-2.3.7, whose note says the limsup twin was skipped as a mirror image. lebl-2.3.7 also asks for strict inequality. | cut |
| lebl-2.6.13 | A convergent series $\sum x_n$ with $\sum x_n^2$ divergent | 3 | Exactly cummings-4.5(b), and cummings-4.5 also includes the positive case (a). | cut |
| mit20-mid-4b | $0.111\ldots$ is a cluster point of a digit-restricted set | 3 | One instance of rudin-2.17, which asks whether the analogous digit set is perfect (every point a limit point). | cut |
| ross-18.4 | Unbounded continuous functions on non-closed sets | 3 | ross-21.5(a) is the same construction ($1/d(x,x_0)$) in $\mathbb{R}^k$, and the notes cross-reference the two. | cut |
| lebl-3.3.14 | No continuous bijection from $[0,1]$ to $(0,1)$ | 3 | abbott-4.4.8(a) asks for a continuous map of $[0,1]$ onto $(0,1)$ without assuming injectivity. That is the same compactness argument and the stronger version. | cut |
| lebl-3.2.11 | A continuous function stays positive near a positive value | 3 | A special case of mit20-a7-6(b) (sign preservation for functional limits). | cut |
| mit20-a9-4 | Lipschitz functions are uniformly continuous | 3 | The $\alpha=1$ case of mit20-a10-1(a) (Hölder implies uniformly continuous). | cut |
| mit20-final-4b | Differentiability of $x^2\sin(1/x)$ at 0 | 3 | Exactly ross-28.4(b). ross-28.4 adds the discontinuity of $f'$. | cut |
| ross-29.10 | Positive derivative at a point without local increase | 3 | The same example family and argument as lebl-4.4.6 ($x+2x^2\sin(1/x)$: $f'(0)>0$ but not monotone or invertible near 0). | cut |
| mit20-a11-5 | Riemann sums of a linear function without the FTC | 3 | Same task as abbott-7.2.3(b,c) (integrating $x$ via partitions). It also uses course-lecture notation ($\lVert\underline{x}\rVert$, $S_f$) that is undefined in the statement. | cut |
| abbott-7.2.5 | Uniform limits of integrable functions are integrable | 3 | ross-33.9 proves the same statement and also that $\int f_n\to\int f$. | cut |
| mit20-final-7a | Pointwise but not uniform convergence to a continuous limit | 3 | abbott-6.2.1(b/c) and lebl-6.1.2 already produce and verify such examples. | cut |
| lebl-6.2.2 | Uniform convergence of $x^n/n$ and derivatives at 1 | 3 | abbott-6.3.4 is the same counterexample (uniform convergence does not pass to derivatives), and its derivatives diverge everywhere. | cut |
| pugh-prelim-56 | If $f(x)+\int_0^x f$ converges then $f\to 0$ | 3 | With $F=\int_0^x f$ this is exactly core ross-30.6 ($F+F'\to L$). The upper tier adds no new technique. | cut |
| mit20-a2-7 | Existence of $\sqrt[3]{2}$ via the least upper bound property | 4 | The hint "Adapt the proof used in Example 1.2.3" points to an unquoted Lebl example. | fix context |
| mit20-a4-1 | Closed sets in $\mathbb{R}$: intervals, integers, rationals | 4 | It says "see Assignment 3 for a discussion of open sets" but never states the definition of open. | fix context |
| mit20-a4-6 | Sequential characterization of the supremum | 4 | The hint opens "By Assignment 3", a course reference. It should point to mit20-a3-4 or just state the fact. | fix context |
| mit20-a12-1 | Vanishing integrals and uniqueness for $-u''+Vu=0$ | 4 | The hint "What's one of the most useful theorems in analysis mentioned in Lecture 22?" is unanswerable outside the course. | fix context |
| ross-18.12 | Intermediate value property of $\sin(1/x)$ | 4 | Part (a) relies on "Exercise 17.10(b)", which is not quoted. The note says to see ross-17.10, which is not in the bank. | fix context |
| ross-22.4 | The topologist's sine curve is connected but not path-connected | 4 | Part (a) says "See Fig. 19.4", and the figure is not supplied. | fix context |
| abbott-1.5.9 | Countability of the algebraic numbers | 4 | "Reread the last paragraph of Section 1.1. The final question posed here…" refers to text the reader does not have. | fix context |
| lebl-2.6.3 | Riemann rearrangement theorem | 4 | The hint is only "See Example 2.6.4", which is unquoted, so the hint does nothing. | fix context |
| cummings-8.28 | Integrability by squeezing between step functions | 5 | Tagged canonical/medium and sitting in the upper tier, but it is a restatement of the Darboux criterion (step functions are the Darboux sums). It is neither synthesis nor challenge. | cut |

## Summary

- **Flagged:** 41 of 383 (about 11%). Most of the bank passed. Every part of the machinery is still covered by at least one stronger problem.
- **By issue:**
  - (1) off-topic: 3
  - (2) no technique: 10 (one is "keep despite")
  - (3) near-duplicate: 19
  - (4) broken context: 8
  - (5) misplaced level: 1
- **By recommendation:**
  - cut: 32
  - fix context: 8
  - keep despite: 1
  - move to upper tier: 0
- **Patterns:**
  - Almost all of the no-technique flags are calculus computations from the MIT 18.100A assignments and exam: Taylor polynomials, Taylor limits, FTC differentiation, $\int x\log x$.
  - Most near-duplicates are an MIT or Lebl item that is a strict sub-case of a multi-part Abbott or Ross problem.
  - The fix-context items are mostly MIT course references (Assignment N, Lecture 22) and two dangling Ross pointers (an exercise and a figure).
- **Considered and not flagged:**
  - Pairs that overlap in only one part:
    - mit20-a4-7 / abbott-3.2.7
    - lebl-2.6.12 / abbott-2.7.4(d)
    - lebl-3.4.8 / ross-19.1(f)
    - cummings-8.25 / abbott-7.3.9
  - Harmless "compare Exercise …" pointers in lebl-4.2.9, lebl-5.5.10, lebl-7.4.19 and abbott-2.7.1.
  - The heavier core items (Arzelà–Ascoli, Baire, Riemann rearrangement, totally bounded), which are canonical in Abbott and Lebl and belong in the core.

## Decisions (2026-10-04)

MIT problems were judged by the same standard as every other source.

- **Cut (19):** lebl-0.3.15, abbott-7.2.5, tao-8.3.4, lebl-2.6.13, mit20-a7-4, mit20-a9-4, lebl-3.2.11,
  pugh-prelim-56, mit20-mid-1a, mit20-a3-6, mit20-mid-3a, mit20-mid-4a, mit20-final-4b, mit20-final-6a,
  mit20-final-6b, mit20-final-7a, mit20-a11-2, mit20-a11-3, lebl-5.3.1, and later mit20-mid-4b
  (contained in rudin-2.17). Each problem, with its hints, solution
  and reason, is kept in `curation/REMOVED.yaml` for restoration.
- **Context fixed (9):** the 8 issue-4 problems plus mit20-a11-5 (undefined lecture notation; kept instead
  of cut).
- **Kept despite the flags:** lebl-0.3.6, lebl-0.3.19, lebl-0.3.12, mit20-a1-6, lebl-3.4.3, ross-18.4,
  lebl-3.3.14, lebl-1.2.7, ross-29.10, lebl-6.2.2, ross-36.3 and
  cummings-8.28 (upper tier, the owner's choice).

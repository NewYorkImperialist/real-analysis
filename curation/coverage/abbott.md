# Coverage map: bank vs. Abbott, *Understanding Analysis* (2nd ed.)

Bank: `src/generated/bank.json`, 366 problems (323 core, 43 upper). Upper-tier ids are marked `*`.
Status: **covered** = at least one core problem genuinely exercises the result or technique; **thin** = only touched in passing, only used as a black box, or only in the upper tier; **gap** = no problem.
The rows list the theorems, definitions and named exercises that Abbott states and expects a student to use. Discussion sections and Epilogues are skipped unless they hold a core result (Theorem 1.1.1). Candidate ids come from `curation/UNSELECTED.md`.

A pattern to note first: the bank seldom asks for a proof of a headline theorem whose proof Abbott gives in the text (IVT, EVT, FTC, Rolle, Lagrange remainder). It applies them instead. These rows are marked **covered** when the applications are real. They are flagged **thin** only where nothing in the bank exercises the proof technique either.

## Chapter 1 — The Real Numbers

| Result / technique | Bank problems | Status |
|---|---|---|
| Thm 1.1.1: √2 is irrational | — | **gap** |
| Set algebra, De Morgan, images/preimages (1.2) | lebl-0.3.6, mit20-mid-1a, lebl-0.3.27, tao-3.4.5, lebl-0.3.10 | **covered** |
| Quantifiers and negation (1.2) | mit20-final-1, tao-a.5.1, abbott-1.2.11 | **covered** |
| Induction (1.2) | lebl-0.3.11, lebl-0.3.15, lebl-0.3.12, lebl-1.2.13 | **covered** |
| Triangle inequality (1.2) | abbott-1.2.6 | **covered** |
| Thm 1.2.6: a = b iff \|a−b\| < ε for all ε | cummings-1.9 | **covered** |
| Axiom of Completeness, sup/inf definitions (1.3) | abbott-1.3.3, lebl-1.1.5, lebl-1.1.14, cummings-1.19, lebl-1.1.2 | **covered** |
| Lemma 1.3.8: ε-characterisation of sup | mit20-a3-4, mit20-a4-6, abbott-1.3.9, lebl-1.1.6 | **covered** |
| Sup/inf algebra (Ex 1.3.5, 1.3.6, 1.3.11) | abbott-1.3.5, lebl-1.2.9, lebl-1.3.5, lebl-1.3.7, abbott-1.3.11 | **covered** (over-weighted) |
| Thm 1.4.1: Nested Interval Property | cummings-1.22, abbott-1.4.8, abbott-2.5.4 | **covered** |
| Thm 1.4.2: Archimedean Property | cummings-1.19, mit20-a3-1 (used, never proved from the AoC) | **covered** |
| Thm 1.4.3 / Cor 1.4.4: density of Q and of the irrationals | mit20-a3-1, abbott-1.4.4 | **covered** |
| Thm 1.4.5: existence of √2 from the supremum | mit20-a2-7 (cube root of 2) | **covered** |
| Equivalent forms of completeness (Ex 1.3.10, 2.4.4, 2.5.4) | abbott-2.5.4, lebl-2.4.3 | **covered** |
| Countable sets, Thm 1.5.6(i): Q countable | mit20-a1-6, lebl-0.3.19 | **covered** |
| Thm 1.5.6(ii) / 1.6.1: R and (0,1) uncountable | ross-16.8, mit20-a3-3, mit20-mid-1bc | **covered** |
| Thm 1.5.7: a subset of a countable set is countable or finite | used implicitly in abbott-1.5.6, abbott-1.5.9 | **thin** |
| Thm 1.5.8: unions of countable sets | abbott-1.5.3, abbott-1.5.9 | **covered** |
| Ex 1.5.11: Schröder–Bernstein | tao-8.3.2, lebl-1.4.5 | **covered** |
| Thm 1.6.2: Cantor's theorem (no surjection A → P(A)) | — (lebl-0.3.12 is only \|P(A)\| = 2ⁿ for finite A) | **gap** |
| P(N) ~ R (Ex 1.6.9), diagonal arguments | mit20-a3-2, ross-16.8 | **covered** |

## Chapter 2 — Sequences and Series

| Result / technique | Bank problems | Status |
|---|---|---|
| Def 2.2.3: ε–N convergence; quantifier order | mit20-a3-6, mit20-mid-3a, abbott-2.2.1, abbott-2.2.2 | **covered** |
| Thm 2.2.7: uniqueness of limits | abbott-2.2.6 | **covered** |
| Divergence (proving that no limit exists) | ross-8.7, tao-6.3.4, cummings-4.3 | **covered** |
| Thm 2.3.2: convergent ⇒ bounded | proof technique only via cummings-3.15 (Cauchy ⇒ bounded); cited in abbott-2.3.7 | **thin** |
| Thm 2.3.3: Algebraic Limit Theorem | abbott-2.3.2, lebl-2.2.3, abbott-2.3.9, abbott-2.3.10, abbott-2.3.7 | **covered** |
| Thm 2.3.4: Order Limit Theorem; Squeeze (Ex 2.3.3) | abbott-2.3.12, lebl-2.2.5, abbott-2.3.10 | **covered** |
| Cesàro means, iterated limits (Ex 2.3.11, 2.3.13) | abbott-2.3.11, abbott-2.3.13, rudin-3.14* | **covered** |
| Thm 2.4.2: Monotone Convergence Theorem | cummings-3.16, ross-10.4 | **covered** |
| Recursive sequences via the MCT (Ex 2.4.5, 2.4.6) | abbott-2.4.5, cummings-3.24, abbott-2.4.6, cummings-3.25 | **covered** |
| Thm 2.4.6: Cauchy Condensation Test | lebl-2.5.15 | **covered** |
| Cor 2.4.7: p-series | lebl-2.5.3, ross-15.3, tao-11.6.3 | **covered** |
| lim sup / lim inf (Ex 2.4.7) | abbott-2.4.7, tao-6.4.3, ross-12.13, mit20-mid-4a, lebl-2.3.6, lebl-2.3.7, mit20-a5-5, mit20-a5-6, lebl-2.3.5 | **covered** (over-weighted) |
| Thm 2.5.2: subsequences inherit the limit | lebl-2.1.22, abbott-2.5.2, abbott-2.5.5 | **covered** |
| Thm 2.5.5: Bolzano–Weierstrass (and the bisection technique) | lebl-2.3.10, lebl-2.3.9, abbott-2.5.4, abbott-2.5.5 | **covered** |
| Subsequential limits | lebl-2.1.17, ross-11.9, ross-22.14, mit20-mid-3b | **covered** |
| Thm 2.6.2: convergent ⇒ Cauchy | only touched in abbott-2.6.2 | **thin** |
| Lemma 2.6.3: Cauchy ⇒ bounded | cummings-3.15 | **covered** |
| Thm 2.6.4: Cauchy Criterion (Cauchy ⇒ convergent) | applied in ross-10.6, lebl-2.4.2, lebl-2.5.12; never proved (lebl-2.4.3 is the converse direction) | **thin** |
| Thm 2.7.1–2.7.3: algebra of series, Cauchy criterion for series, n-th term test | tao-7.2.2, abbott-2.7.4, lebl-2.6.1, lebl-2.5.7 | **covered** |
| Thm 2.7.4: Comparison Test (and limit comparison) | lebl-2.5.3, mit20-mid-5a, cummings-4.5, ross-14.12 | **covered** |
| Ex 2.7.5: geometric series | tao-7.3.2 | **covered** |
| Thm 2.7.6: absolute ⇒ convergent | cummings-4.2, lebl-2.5.10 | **covered** |
| Thm 2.7.7: Alternating Series Test | abbott-2.7.1, lebl-2.6.12, lebl-2.6.1 | **covered** |
| Absolute vs. conditional convergence | abbott-2.7.8, lebl-2.6.13, cummings-4.5, mit20-mid-5b | **covered** |
| Ex 2.7.9: Ratio Test; root test | abbott-2.7.9, ross-14.10, tao-7.5.1 | **covered** |
| Thm 2.7.10: rearrangements of absolutely convergent series | cummings-4.18 | **covered** |
| Riemann rearrangement (2.1 / Ex 2.7.x) | lebl-2.6.3 | **covered** |
| Abel / Dirichlet tests, summation by parts (Ex 2.7.13–2.7.14) | abbott-2.7.14 | **covered** |
| Thm 2.8.1: absolutely summable double arrays (iterated sums = Σd_k) | — (only abbott-2.3.13 on iterated limits of sequences) | **gap** |
| Cauchy product (Ex 2.8.7) | lebl-2.6.2 (absolute convergence only, not = AB), pugh-3.73* | **covered** |

## Chapter 3 — Basic Topology of R

| Result / technique | Bank problems | Status |
|---|---|---|
| Cantor set: construction, ternary description, C + C (3.1) | rudin-3.19, abbott-3.3.7, abbott-3.2.6, abbott-7.3.9 | **covered** |
| Def 3.2.1 / Thm 3.2.3: open sets and their unions/intersections | mit20-a3-5, cummings-5.3, abbott-3.2.6 | **covered** |
| Def 3.2.4 / Thm 3.2.5: limit points, sequential characterisation | mit20-a4-7, mit20-a7-4, mit20-mid-4b | **covered** |
| Isolated points | abbott-3.2.10 | **covered** |
| Def 3.2.7 / Thm 3.2.8: closed sets, Cauchy-sequence characterisation | abbott-3.2.5, mit20-a4-3, mit20-mid-2, mit20-a4-1 | **covered** |
| Thm 3.2.10: density of Q via sequences | mit20-a4-6, lebl-3.2.10 | **covered** |
| Thm 3.2.12: closure is the smallest closed set containing A | abbott-3.2.7 | **covered** |
| Thm 3.2.13–3.2.14: complements, unions/intersections of closed sets | mit20-a4-2, mit20-mid-2, cummings-5.3 | **covered** |
| Interior/boundary (Ex 3.2.14) | lebl-7.2.7, lebl-7.2.13 (metric space) | **covered** |
| Open sets = countable disjoint unions of intervals (Ex 3.2.x) | ross-13.7 | **covered** |
| Def 3.3.1 / Thm 3.3.4: sequential compactness = closed and bounded | cummings-5.7, mit20-final-3 | **covered** |
| Thm 3.3.5: Nested Compact Set Property | lebl-7.4.10, abbott-3.3.5 | **covered** |
| Open covers, Thm 3.3.8: Heine–Borel | abbott-3.3.9, lebl-7.4.2, cummings-5.8, pugh-2.93 | **covered** |
| Distance between compact sets (Ex 3.3.8) | abbott-3.3.8 | **covered** |
| Def 3.4.1 / Thm 3.4.3: perfect sets; a nonempty perfect set is uncountable | rudin-2.27* only | **gap** |
| Def 3.4.4 / Thm 3.4.6: separated / connected sets (sequential criterion) | lebl-7.2.10 (metric union lemma), lebl-7.2.11 | **thin** |
| Thm 3.4.7: E ⊆ R is connected iff it is an interval | abbott-3.2.13 (only R itself is connected), ross-22.14 (uses it) | **thin** |
| Def 3.5.1 / Thm 3.5.2: countable intersection of dense open sets | abbott-3.5.4 | **covered** |
| Thm 3.5.4: Baire's Theorem; nowhere-dense, F_σ/G_δ | abbott-3.5.6, pugh-prelim-43* | **covered** |

## Chapter 4 — Functional Limits and Continuity

| Result / technique | Bank problems | Status |
|---|---|---|
| Dirichlet and Thomae functions (4.1) | abbott-4.3.7, mit20-a8-2 | **covered** |
| Def 4.2.1: ε–δ functional limit | mit20-a7-6, abbott-4.3.4, lebl-3.1.13 | **covered** |
| Thm 4.2.3: sequential criterion for functional limits | lebl-3.1.11, lebl-3.1.13 | **covered** |
| Cor 4.2.4–4.2.5: algebraic limit theorem / divergence criterion; squeeze | lebl-3.1.3, abbott-4.3.7, lebl-7.5.2 | **covered** |
| Limits at infinity (4.2) | mit20-a9-6 | **covered** |
| Def 4.3.1 / Thm 4.3.2: characterisations of continuity; ε–δ proofs | ross-17.9, abbott-4.3.2, lebl-3.2.11, mit20-a8-2 | **covered** |
| Thm 4.3.4: algebraic continuity theorem | mit20-final-2b, abbott-4.3.6 | **covered** |
| Thm 4.3.9: composition | abbott-4.3.4 | **covered** |
| Ex 4.3.11: contraction mapping theorem | abbott-4.3.11, lebl-7.6.6 | **covered** |
| Ex 4.3.13: Cauchy functional equation | abbott-4.3.13 | **covered** |
| Continuous functions agreeing on a dense set | lebl-3.2.10 | **covered** |
| Thm 4.4.1: continuous image of a compact set is compact | mit20-final-3, abbott-4.4.8, lebl-3.3.14 | **covered** |
| Thm 4.4.2: Extreme Value Theorem | mit20-final-2a, lebl-3.3.3, lebl-3.3.11, ross-18.4 | **covered** |
| Def 4.4.4 / Thm 4.4.5: uniform continuity, sequential criterion for its failure | abbott-4.4.2, lebl-3.4.8, ross-19.2, ross-19.1, abbott-4.4.10 | **covered** (over-weighted) |
| Thm 4.4.7: continuous on compact ⇒ uniformly continuous | abbott-4.4.14 | **covered** |
| Lipschitz functions (Ex 4.4.9) | mit20-a9-4, mit20-a9-5, lebl-3.4.3 | **covered** |
| Ex 4.4.11: topological characterisation of continuity | mit20-a8-5 | **covered** |
| Ex 4.4.13: continuous extension theorem | abbott-4.4.13, lebl-3.4.9 | **covered** |
| Thm 4.5.1: Intermediate Value Theorem | abbott-4.5.7, abbott-4.5.6, cummings-6.33, cummings-6.32, mit20-a11-1 (applications; no proof asked) | **covered** |
| Thm 4.5.2: preservation of connected sets | lebl-7.5.5, cummings-6.33 | **covered** |
| Def 4.5.3: intermediate value property | abbott-4.5.3, ross-18.12 | **covered** |
| Ex 4.5.8: inverse of a continuous injection is continuous; injective ⇒ monotone | abbott-4.5.8, lebl-3.6.8, lebl-7.5.8 | **covered** |
| Monotone functions: only jump discontinuities, countably many (Ex 4.6.5–4.6.6) | abbott-4.6.5, abbott-4.6.6, lebl-3.6.11 | **covered** |
| Thm 4.6.3: one-sided limits | used in abbott-4.6.5 only | **thin** |
| Def 4.6.4–Thm 4.6.6: α-continuity / oscillation; D_f is F_σ | pugh-3.23*, rudin-4.17* only | **gap** (core) |

## Chapter 5 — The Derivative

| Result / technique | Bank problems | Status |
|---|---|---|
| Def 5.2.1: derivative from the definition | mit20-final-4b, lebl-4.1.5, lebl-4.1.11, tao-10.1.2 | **covered** |
| Thm 5.2.3: differentiable ⇒ continuous | mit20-final-4a | **covered** |
| Thm 5.2.4: algebraic differentiability theorem (sum, product, quotient rules) | used in ross-28.4; lebl-4.1.11 explicitly avoids it | **thin** |
| Thm 5.2.5: Chain Rule (Carathéodory proof, Ex 5.2.4) | abbott-5.2.4 | **covered** |
| Thm 5.2.6: Interior Extremum Theorem | tao-10.2.1, lebl-4.3.11 | **covered** |
| Thm 5.2.7: Darboux's Theorem | abbott-5.2.11, lebl-4.2.7 | **covered** |
| x^a sin(1/x) examples (Ex 5.2.7) | abbott-5.2.7, ross-28.4, mit20-final-4b, lebl-4.4.6, ross-29.10 | **covered** (over-weighted) |
| Ex 5.2.12: derivative of an inverse | abbott-5.2.12, lebl-4.4.6 | **covered** |
| Thm 5.3.1: Rolle's Theorem | cummings-7.10, ross-29.4, mit20-a11-1 | **covered** |
| Thm 5.3.2: Mean Value Theorem | tao-10.2.5 | **covered** |
| Cor 5.3.3–5.3.4: f′ = 0 ⇒ constant; sign of f′ ⇒ monotone | mit20-a10-1, tao-10.3.5, ross-29.10, lebl-4.2.7 | **covered** |
| MVT ⇒ Lipschitz bounds | mit20-a10-3, lebl-4.2.10, mit20-final-7b | **covered** |
| Thm 5.3.5: Generalized MVT | cummings-7.14 | **covered** |
| Thm 5.3.6: L'Hospital 0/0 | lebl-4.2.9 | **covered** |
| Thm 5.3.8: L'Hospital ∞/∞ | used as a black box in mit20-final-6a; ross-30.6 is related | **thin** |
| lim f′(x) = L ⇒ f′(c) = L (Ex 5.3.8) | lebl-4.2.13 | **covered** |
| Ex 5.3.12: second symmetric difference | abbott-5.3.12 | **covered** |
| Convexity via f′ / f″ | rudin-5.14, lebl-3.2.19 | **covered** |
| 5.4: continuous nowhere-differentiable function | abbott-5.4.7 (very hard, core) | **covered** |

## Chapter 6 — Sequences and Series of Functions

| Result / technique | Bank problems | Status |
|---|---|---|
| Def 6.2.1/6.2.3: pointwise vs. uniform convergence | abbott-6.2.1, lebl-6.1.2, mit20-final-7a, ross-24.12, lebl-6.1.10 | **covered** (over-weighted) |
| Thm 6.2.5: Cauchy criterion for uniform convergence | abbott-6.2.5 | **covered** |
| Thm 6.2.6: Continuous Limit Theorem (ε/3) | ross-24.13, ross-24.17, abbott-6.2.6, cummings-9.12 | **covered** |
| Dini's Theorem (Ex 6.2.11) | abbott-6.2.11 | **covered** |
| Arzelà–Ascoli (Ex 6.2.15), Cantor function (Ex 6.2.12) | abbott-6.2.15, abbott-6.2.12 | **covered** |
| Thm 6.3.1–6.3.3: Differentiable Limit Theorem | abbott-6.3.7; counterexamples lebl-6.2.2, abbott-6.3.4, lebl-6.2.1 | **covered** |
| Thm 6.4.2–6.4.3: term-by-term continuity and differentiability | abbott-6.4.7 | **covered** |
| Thm 6.4.4 / Cor 6.4.5: Cauchy criterion for series, Weierstrass M-test | abbott-6.4.1, abbott-6.4.2 | **covered** |
| Thm 6.5.1–6.5.2, 6.5.5: convergence sets of power series; uniform convergence on compact subsets | cummings-9.16, lebl-6.1.14, mit20-a7-2, mit20-mid-5b | **covered** |
| Lemma 6.5.3 / Thm 6.5.4: Abel's Lemma and Abel's Theorem | ross-26.8(c) (application at x = 1) | **covered** |
| Thm 6.5.6–6.5.7: power series are differentiable (and C^∞) term by term | lebl-2.6.10 (same radius only), ross-26.8(b) (uses it) | **thin** |
| Ex 6.5.10: identity theorem; non-representable functions | abbott-6.5.10, ross-26.7 | **covered** |
| Thm 6.6.2: Taylor coefficients | mit20-a11-2 | **covered** |
| Thm 6.6.3: Lagrange's Remainder Theorem | mit20-final-5a, mit20-a11-3, mit20-a11-4 (applications; no proof asked) | **covered** |
| e^{−1/x²}: smooth but not analytic (Ex 6.6.6) | ross-31.5, ross-31.4 | **covered** |
| Thm 6.7.1 / 6.7.3: Weierstrass Approximation; polygonal approximation | abbott-6.7.2, rudin-7.20, ross-27.3 | **covered** |

## Chapter 7 — The Riemann Integral

| Result / technique | Bank problems | Status |
|---|---|---|
| Def 7.2.1–7.2.2: partitions, upper/lower sums | mit20-a11-5, ross-32.2, lebl-5.1.15 | **covered** |
| Lemmas 7.2.3–7.2.6: refinement inequalities, L(f) ≤ U(f) | lebl-5.1.13, abbott-7.2.3 | **covered** |
| Thm 7.2.8: integrability criterion (incl. sequential form, Ex 7.2.3) | abbott-7.2.3, ross-32.2, lebl-5.2.14, lebl-5.2.11 | **covered** |
| Monotone functions are integrable (Ex 7.2.7) | lebl-5.2.14 | **covered** |
| Thm 7.2.9: continuous ⇒ integrable | only inside cummings-8.25 (continuous away from one point) | **thin** |
| Thm 7.3.2: finitely many discontinuities; changing finitely many values | cummings-8.25, abbott-7.3.7 | **covered** |
| Thomae's function is integrable (Ex 7.3.2); content zero (Ex 7.3.9) | lebl-5.2.11, abbott-7.3.9 | **covered** |
| Thm 7.4.1: additivity over [a,c] ∪ [c,b] | — (used implicitly) | **thin** |
| Thm 7.4.2: linearity and monotonicity of the integral | lebl-5.2.15 (\|∫f\| ≤ ∫\|f\| only); linearity never proved | **thin** |
| Products / \|f\| integrable (Ex 7.4.1, 7.4.6); ∫f > 0 for f > 0 (Ex 7.4.4) | abbott-7.4.6, lebl-5.2.15, ross-33.4, abbott-7.4.4, mit20-a12-1 | **covered** |
| Thm 7.4.4: Integrable Limit Theorem | abbott-7.2.5, abbott-7.3.5 | **covered** |
| Mean value theorem for integrals; limit estimates | cummings-8.27, abbott-7.4.10, mit20-final-6b | **covered** |
| Thm 7.5.1: FTC (i) and (ii) | lebl-5.3.1, lebl-5.3.9, abbott-7.5.2, tao-11.9.3, ross-34.12 | **covered** |
| Substitution, integration by parts (Ex 7.5.10, 7.5.x) | abbott-7.5.10, mit20-final-5b | **covered** |
| Logarithm and Euler's constant (Ex 7.5.8) | lebl-5.4.6 | **covered** |
| Def 7.6.1: measure zero; countable sets have measure zero | pugh-3.29*, pugh-3.50* only (core has content zero, abbott-7.3.9) | **thin** |
| Thm 7.6.5: Lebesgue's criterion for Riemann integrability | pugh-3.50* only | **gap** (core) |

## Chapter 8 — Additional Topics (brief)

| Section | Bank problems | Status |
|---|---|---|
| 8.1 Generalized (gauge) Riemann integral | — | **gap** (optional) |
| 8.2 Metric spaces: definitions, completeness, compactness | abbott-8.2.2, abbott-8.2.5, lebl-7.1.5, lebl-7.3.2, lebl-7.4.6, lebl-7.4.8, lebl-7.4.12, lebl-7.4.19, mit18100b-2006-ps3-7, mit18100b-f10-ps10-5 and others | **covered** (over-weighted) |
| 8.2 Baire Category Theorem in complete metric spaces; Thm 8.2.12 | abbott-3.5.4 is the R version only | **thin** |
| 8.3 Euler's sum Σ1/n² = π²/6 | — | **gap** (optional) |
| 8.4 Factorial / Gamma function | improper integrals only (ross-36.3, ross-36.8) | **gap** (optional) |
| 8.5 Fourier series | mit20-final-6c (Riemann–Lebesgue for C¹) only | **thin** (optional) |
| 8.6 Construction of R from Q (cuts) | lebl-1.1.14, lebl-2.4.3 (related) | **thin** (optional) |

## Status counts

| | covered | thin | gap |
|---|---|---|---|
| Ch 1–7 (147 rows) | 127 | 14 | 6 |
| Ch 8 (7 rows, brief) | 1 | 3 | 3 |

The six Ch 1–7 gaps:
- √2 is irrational (1.1.1)
- Cantor's theorem (1.6.2)
- absolutely summable double series (2.8.1)
- perfect sets (3.4.3)
- D_f is F_σ (4.6.6)
- Lebesgue's criterion (7.6.5)

Measure zero (7.6.1) is also missing from the core. It is counted as thin, not as a gap, because it appears in the upper tier.

## Over-weighted

The counts below are core problems unless marked otherwise. "Tagged" means the subtopic appears anywhere in `subtopics`.

1. **Supremum/infimum manipulation**: 20 tagged `supremum-infimum`, 14 of them as the primary subtopic, all core. Abbott has Lemma 1.3.8 and a handful of exercises here.
   - 8 problems are "sup of a combined or transformed set": abbott-1.3.5, lebl-1.2.9, lebl-1.3.5, lebl-1.3.7, abbott-1.3.9, abbott-1.3.11, abbott-1.4.4, cummings-1.19.
   - 6 more re-prove the ε- or sequential characterisation: mit20-a3-4, mit20-a4-6, lebl-1.1.5, lebl-1.1.2, lebl-1.1.6, abbott-1.3.3.
   - All of them test the single skill `sup-approximation` (18 uses in the bank).
2. **General metric spaces and function spaces**: about 22 core problems sit in an abstract metric space or C[a,b]. Abbott covers this only in the optional §8.2.
   - The problems: lebl-7.1.5, 7.2.7, 7.2.10, 7.2.11, 7.2.13, 7.3.2, 7.4.6, 7.4.8, 7.4.10, 7.4.12, 7.4.16, 7.4.19, 7.5.2, 7.5.5, 7.5.8, 7.5.12, 7.6.6; abbott-8.2.2, 8.2.5; mit18100b-2006-ps3-7, mit18100b-f10-ps10-5; ross-22.4.
   - On top of these, 10 upper problems in topology.
3. **Pointwise-vs-uniform counterexamples**: 15 problems whose main task is "find the limit and decide whether it is uniform", or "show the interchange fails":
   - The full list: mit20-final-7a, lebl-6.1.2, abbott-6.2.1, lebl-6.1.10, lebl-6.1.6, lebl-6.1.14, cummings-9.12, abbott-6.2.6, ross-23.9, ross-24.9, lebl-6.2.22, abbott-7.3.5, lebl-6.2.2, abbott-6.3.4, lebl-6.2.1.
   - 4 of them make the integral-interchange point: ross-23.9, ross-24.9, lebl-6.2.22, abbott-7.3.5.
   - 3 make the derivative-interchange point: lebl-6.2.2, abbott-6.3.4, lebl-6.2.1.
4. **lim sup / lim inf**: 11 core. Abbott has one exercise (2.4.7).
   - 3 are near-duplicate order and subadditivity inequalities: mit20-mid-4a, lebl-2.3.6, lebl-2.3.7.
   - 3 are basic computations or characterisations: lebl-2.3.5, mit20-a5-5, mit20-a5-6.
5. **Cardinality**: 13 core in `foundations/cardinality`.
   - 3 are diagonal or uncountability arguments: ross-16.8, mit20-a3-3, mit20-a3-2.
   - 3 are countable-union arguments: abbott-1.5.3, abbott-1.5.9, lebl-0.3.19.
   - Cantor's theorem itself is missing.
6. **Uniform continuity of specific functions**: 12 core tagged `uniform-continuity`. 8 of them are "is f UC on S?" checks: ross-19.2, ross-19.1, abbott-4.4.2, lebl-3.4.8, mit20-a9-5, lebl-3.4.3, abbott-4.4.10, ross-19.4.
7. **x² sin(1/x) derivative pathologies**: 5 core use the same family: mit20-final-4b, ross-28.4, abbott-5.2.7, lebl-4.4.6, ross-29.10. The sin(1/x) and x sin(1/x) continuity versions add 3 more: ross-17.9, ross-18.12, abbott-4.4.2.

## Prioritised gaps (for a student rebuilding foundations)

| # | Gap | Status | Candidate in UNSELECTED.md |
|---|---|---|---|
| 1 | Cauchy Criterion, Thm 2.6.2–2.6.4: prove convergent ⇒ Cauchy and Cauchy ⇒ convergent (bounded + BW + subsequence). Used in 5+ problems, never proved. | thin | tao-6.1.5 or abbott-2.6.1 (convergent ⇒ Cauchy); lebl-2.4.7 (a Cauchy sequence with a convergent subsequence converges, the key step); abbott-2.6.7 (BW ⇔ Cauchy ⇔ MCT, hard). No candidate asks for the whole theorem. |
| 2 | Cantor's theorem, Thm 1.6.2 (no surjection A → P(A)) | gap | **tao-8.3.4** (\|X\| < \|2^X\|); tao-8.3.5 |
| 3 | Basic properties of the integral, Thm 7.4.1–7.4.2: additivity over subintervals, linearity, monotonicity | thin | **lebl-5.2.2** (linearity); **ross-32.8** or cummings-8.5 (integrable on subintervals) |
| 4 | Connected subsets of R are exactly intervals, Thm 3.4.6–3.4.7 | thin | **abbott-3.4.6** (sequential criterion for connectedness); abbott-3.4.7 (Q totally disconnected). Neither proves "connected ⇔ interval" directly. |
| 5 | Power series are differentiable term by term, Thm 6.5.6–6.5.7 | thin | abbott-6.5.5 (differentiated series converges on (−R,R)); ross-26.5 (exp series has f′ = f); ross-26.6 (sin² + cos² = 1 from series) |
| 6 | Continuous ⇒ Riemann integrable, Thm 7.2.9 (uniform continuity + partition) | thin | none directly; ross-33.10 (sin(1/x) integrable) exercises the same estimate |
| 7 | Measure zero and Lebesgue's criterion, §7.6 | gap (core) | **abbott-7.6.3** (countable sets have measure zero); abbott-7.6.13 (applications of the criterion) |
| 8 | Absolutely summable double series, Thm 2.8.1; value of the Cauchy product | gap | lebl-2.6.15 (Tonelli/Fubini for double series, hard); abbott-2.8.7 (Cauchy product = AB) |
| 9 | Perfect sets, Thm 3.4.3 (nonempty perfect ⇒ uncountable; Cantor set is perfect) | gap | none in UNSELECTED.md. In the upper pool, rudin-2.17 (digits-4-and-7 set is compact, perfect, uncountable; `candidates-upper/rudin-ch1-3.yaml`) |
| 10 | Discontinuity sets, Thm 4.6.3 and 4.6.6: one-sided limits; oscillation / α-continuity; D_f is F_σ | thin / gap | abbott-4.2.10 or lebl-3.1.12 (one-sided limits); ross-21.13 (oscillation 0 ⇔ continuous); abbott-4.6.8 (D_f is F_σ) |

Lower priority:
- L'Hospital ∞/∞: cummings-7.16.
- Proof of the product and quotient rules (Thm 5.2.4): no candidate.
- Convergent ⇒ bounded (Thm 2.3.2): covered by the same additions as #1.
- √2 irrational (Thm 1.1.1): no candidate.
- Baire in complete metric spaces: abbott-8.2.14, abbott-8.2.15.
- Lagrange remainder by proof: abbott-6.6.8, abbott-6.6.4.

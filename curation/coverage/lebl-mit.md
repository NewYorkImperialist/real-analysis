# Coverage audit: bank vs. Lebl *Basic Analysis I* (ch. 0–7) and MIT 18.100A (Fall 2020)

Bank snapshot: `src/generated/bank.json`, 366 problems (330 core, 36 upper-tier).
Status key: **covered** means at least one core problem genuinely exercises the result or technique.
**thin** means it is only used in passing, only in a special case or alternative form, or only in upper-tier problems.
**gap** means no problem exercises it.
Upper-tier ids are marked `*`.

**What MIT 18.100A F20 assigned.** HW1–12 (readings §0.3 → §6.1, plus Rodriguez's own "Riemann Integral" lecture notes, which use tagged Riemann sums rather than Darboux sums), the midterm (5 problems) and the final assignment (7 problems).
Every MIT problem is already in the bank: all 38 Lebl exercises the problem sets cite by number, plus 54 `mit20-*` items covering every unnumbered homework problem, the midterm and the final.
So nothing MIT literally set is missing. The gaps below are the **theorems those problems lean on** that the bank never asks students to prove.
The course did **not** cover §6.3 (Picard) or chapter 7 (metric spaces). Open, closed, cluster and compact sets were done in ℝ only (HW3–4, Midterm 2, Final 3).

"MIT" column: where 18.100A tested or assigned it (HWn, Mid, Fin). "—" means it was not assigned.

## Chapter 0 — Basic set theory (§0.3)

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| Set algebra, distributive/De Morgan laws | lebl-0.3.6 | covered | HW1 |
| Induction | lebl-0.3.11, lebl-0.3.15, lebl-0.3.12 | covered | HW1 |
| Images/preimages, injective/surjective, composition | mit20-mid-1a, lebl-0.3.27, lebl-0.3.10, tao-3.4.5 | covered | Mid 1a |
| Countable sets: ℚ countable, unions of countable sets | mit20-a1-6, abbott-1.5.3, mit20-a3-3, lebl-0.3.19, abbott-1.5.6 | covered | HW1, HW3, Mid 1bc |
| Uncountability by diagonalisation / bijection with 𝒫(ℕ) | ross-16.8, mit20-a3-2, abbott-1.5.9 | covered | HW3 |
| Cantor's theorem \|A\| < \|𝒫(A)\| | none (mit20-a3-2 only shows \|E\| = \|𝒫(ℕ)\|) | **gap** | HW3 builds on 𝒫(ℕ) |
| Schröder–Bernstein | tao-8.3.2 | covered | — |
| Quantifier negation (course-wide skill) | mit20-final-1, abbott-1.2.11, tao-a.5.1, mit20-mid-2 | covered | Fin 1, Mid 2a |

## Chapter 1 — Real numbers

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §1.1 Ordered sets/fields, sup/inf definitions, LUB property | lebl-1.1.1, lebl-1.1.2, lebl-1.1.5, lebl-1.1.6, lebl-1.1.14, cummings-1.9 | covered | HW2 |
| §1.2 Archimedean property (proof from LUB) | only used: mit20-a3-1, abbott-2.5.4; abbott-1.2.11 negates it | thin | HW3 (used) |
| §1.2 Density of ℚ and of the irrationals | mit20-a3-1, abbott-1.4.4, mit20-a7-4 | covered | HW3, HW7 |
| §1.2 Existence of roots via sup | mit20-a2-7 | covered | HW2 |
| §1.2 sup/inf ε-characterisation and algebra (sup(A+B), sup(cA)) | mit20-a3-4, mit20-a4-6, lebl-1.2.9, abbott-1.3.5, cummings-1.19, abbott-1.3.9 | covered | HW2–4 |
| §1.2 AM–GM, Bernoulli | lebl-1.2.7, lebl-1.2.13 | covered | HW2 |
| §1.3 Absolute value, triangle inequality | abbott-1.2.6, cummings-1.9 | covered | — |
| §1.3 sup/inf of bounded functions | lebl-1.3.5, lebl-1.3.7 | covered | — |
| §1.4 Nested intervals; ℝ uncountable; \|[0,1]\| = \|(0,1)\| | cummings-1.22, abbott-2.5.4, ross-16.8, lebl-1.4.5 | covered | HW3 (used) |
| §1.5 Decimal representation | mit20-a3-2, mit20-mid-4b (use expansions); existence of expansions not proved | covered (use) | HW3, Mid 4b |

## Chapter 2 — Sequences and series

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §2.1 ε–N proofs of explicit limits | mit20-a3-6, mit20-mid-3a, abbott-2.2.2 | covered | HW3, Mid 3a |
| §2.1 Uniqueness; convergent ⇒ bounded | abbott-2.2.6; bounded only via examples (mit20-mid-3b, abbott-2.7.4) | covered | Mid 3b |
| §2.1 Monotone convergence theorem | cummings-3.16, abbott-2.4.5, cummings-3.24, abbott-2.4.6 | covered | — |
| §2.1 Tails and subsequences | lebl-2.1.22, abbott-2.5.2, mit20-mid-3b | covered | Mid 3b |
| §2.2 Limit laws, order preservation | abbott-2.3.2, lebl-2.2.3, abbott-2.3.12, abbott-2.3.9 | covered | HW4 |
| §2.2 Squeeze lemma; ratio test for sequences | lebl-2.2.5, lebl-2.2.9 | covered | HW4, HW5 |
| §2.2 Standard limits (rⁿ, n^{1/n}) | cummings-4.3, lebl-2.6.10 | covered | — |
| §2.3 limsup/liminf: definition and inequalities | mit20-a5-5, mit20-mid-4a, lebl-2.3.5, lebl-2.3.6, lebl-2.3.7, abbott-2.4.7, ross-12.13 | covered | HW5, Mid 4a |
| §2.3 limsup = largest subsequential limit; converges iff liminf = limsup | tao-6.4.3, mit20-a5-6, ross-11.9 | covered | HW5 |
| §2.3 Bolzano–Weierstrass (sequences and sets) | lebl-2.3.10, lebl-2.3.9, abbott-2.5.5 | covered | Fin 3a (used) |
| §2.4 Cauchy ⇒ bounded; examples | cummings-3.15, abbott-2.6.2, lebl-2.4.8, lebl-2.5.12 | covered | HW5 |
| §2.4 **Cauchy ⇒ convergent** (completeness of ℝ) | only lebl-2.4.3 (abstract ordered field, hard); ross-10.6 and lebl-2.4.2 just invoke it | thin | HW5 reading |
| §2.5 Geometric series; Cauchy criterion for series | tao-7.3.2, tao-7.2.2 | covered | — |
| §2.5 Comparison, p-series, condensation | lebl-2.5.3, lebl-2.5.15, ross-15.3, cummings-4.5 | covered | HW6 |
| §2.5 Absolute ⇒ convergent; triangle inequality for series | cummings-4.2, lebl-2.5.10 | covered | HW6 |
| §2.5 Ratio test; limit comparison | abbott-2.7.9, mit20-mid-5a | covered | Mid 5a |
| §2.5 Grouping terms | lebl-2.5.4 | covered | HW6 |
| §2.6 Root test; alternating series test | tao-7.5.1, lebl-2.6.1, abbott-2.7.1, lebl-2.6.12, lebl-2.6.13 | covered | HW6 |
| §2.6 Rearrangements | cummings-4.18, lebl-2.6.3 | covered | — |
| §2.6 Cauchy product | lebl-2.6.2 | covered | HW7 |
| §2.6 Power series: interval/radius of convergence (computation) | mit20-a7-2, mit20-mid-5b, lebl-2.6.10 | covered | HW7, Mid 5b |
| §2.6 Radius formula via root test / limsup \|aₙ\|^{1/n} (proof) | none | thin | — |

## Chapter 3 — Continuous functions

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §3.1 Cluster points (incl. sequential characterisation) | mit20-a4-7, mit20-a7-4, mit20-mid-4b | covered | HW4, HW7, Mid 4b |
| §3.1 ε–δ limits, sequential criterion | lebl-3.1.11, lebl-3.1.13, mit20-a7-6 | covered | HW7 |
| §3.1 Limit laws / squeeze for functions; limits of compositions | lebl-3.1.3, abbott-4.3.4 | covered | HW8 |
| §3.1 One-sided limits (limit exists iff both one-sided limits agree) | rudin-4.17*, pugh-prelim-7* only | thin | — |
| §3.2 Continuity: ε–δ and sequential | ross-17.9, mit20-a8-2, lebl-3.2.10, lebl-3.2.11, lebl-3.2.14 | covered | HW8, Fin 1(i) |
| §3.2 Algebra of continuous functions | mit20-final-2b, abbott-4.3.6 | covered | Fin 2b |
| §3.2 Dirichlet and Thomae functions | abbott-4.3.7, mit20-a8-2 | covered | HW8 |
| §3.2 Continuity via preimages of open sets | mit20-a8-5 | covered | HW8 |
| §3.3 Continuous on [a,b] ⇒ bounded, attains max/min | mit20-final-3, lebl-3.3.3, lebl-3.3.11, mit20-final-2a, abbott-4.4.8 | covered | HW9, Fin 2a, Fin 3 |
| §3.3 **Bolzano IVT: proof** (bisection or sup argument) | none. Only applied: abbott-4.5.7, cummings-6.33, abbott-4.5.6, mit20-a11-1 | thin | Fin 2a(ii) (hypothesis) |
| §3.3 Odd-degree polynomial has a root | mit20-a11-1 | covered | HW11 |
| §3.4 Uniform continuity: definition, negation, examples | lebl-3.4.8, abbott-4.4.2, ross-19.2, ross-19.1, mit20-final-1 | covered | HW9, Fin 1(ii) |
| §3.4 Continuous on a compact set ⇒ uniformly continuous | abbott-4.4.14 (open-cover proof); Lebl's sequential proof is not exercised | covered | — |
| §3.4 Continuous extension; uniformly continuous maps preserve Cauchy sequences | abbott-4.4.13, lebl-3.4.9, ross-19.4 | covered | — |
| §3.4 Lipschitz ⇒ uniformly continuous | mit20-a9-4, mit20-a9-5, lebl-3.4.3 | covered | HW9 |
| §3.5 Limits at ±∞ | mit20-a9-6 | covered | HW9 |
| §3.5 Infinite limits (f(x) → ∞) | none | **gap** | — |
| §3.6 Monotone functions: one-sided limits, jumps, countably many discontinuities | abbott-4.6.5, abbott-4.6.6, lebl-3.6.11 | covered | — |
| §3.6 Continuous injection on an interval is strictly monotone; continuous inverse | lebl-3.6.8, abbott-4.5.8 | covered | — |

## Chapter 4 — The derivative

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §4.1 Derivative from the definition | mit20-final-4b, lebl-4.1.5, lebl-4.1.11, ross-28.4 | covered | HW10, Fin 4b |
| §4.1 Differentiable ⇒ continuous; converse false | mit20-final-4a | covered | Fin 4a |
| §4.1 Product/quotient rule (proof) | none (lebl-4.1.11 is a product-type estimate) | thin | — |
| §4.1 Chain rule | abbott-5.2.4 | covered | — |
| §4.2 Interior extremum ⇒ f′ = 0 | tao-10.2.1 | covered | — |
| §4.2 Rolle's theorem and MVT | tao-10.2.5, cummings-7.10, ross-29.4, mit20-a11-1 | covered | HW11 |
| §4.2 MVT consequences: sign of f′ and monotonicity, f′ = 0 ⇒ constant, bounded f′ ⇔ Lipschitz | mit20-a10-1, mit20-a10-3, mit20-final-7b, lebl-4.2.10, tao-10.3.5 | covered | HW10, Fin 7b |
| §4.2 Cauchy MVT; L'Hôpital | cummings-7.14, lebl-4.2.9 | covered | HW10, Fin 6a (used) |
| §4.2 Darboux property; limit of f′ gives f′(c) | lebl-4.2.7, abbott-5.2.11, lebl-4.2.13 | covered | HW10 |
| §4.3 Taylor's theorem: applications (polynomials, limits, remainder bounds, higher-derivative tests) | mit20-a11-2, mit20-a11-3, mit20-a11-4, mit20-final-5a, lebl-4.3.11 | covered | HW11, Fin 5a |
| §4.3 **Taylor's theorem: proof (Lagrange remainder)** | none; mit20-final-5b gives the 1st-order integral form only; rudin-5.17* | thin | HW11 / Fin 5 rely on it |
| §4.4 One-variable inverse function theorem | abbott-5.2.12, lebl-4.4.6 | covered | — |

## Chapter 5 — The Riemann integral

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §5.1 Partitions, upper/lower sums, refinement, L ≤ U | lebl-5.1.15, abbott-7.2.3, ross-32.2 | covered | — |
| §5.1 Integral from the definition / Riemann sums; Darboux = Riemann (mesh) | mit20-a11-5, abbott-7.2.3, lebl-5.1.13 | covered | HW11 (tagged sums) |
| §5.2 **Continuous on [a,b] ⇒ integrable** | none directly; cummings-8.25 (one discontinuity) uses the same estimate | thin | course notes |
| §5.2 **Linearity, additivity over subintervals, monotonicity of ∫** | none | **gap** | used throughout HW12, Fin 5–6 |
| §5.2 Monotone / piecewise-continuous / \|f\| / products integrable | lebl-5.2.14, abbott-7.3.7, lebl-5.2.15, abbott-7.4.6, lebl-5.2.11, abbott-7.3.9 | covered | — |
| §5.2 f ≥ 0 continuous with ∫f = 0 ⇒ f ≡ 0; mean value theorem for integrals | mit20-a12-1, ross-34.12, abbott-7.4.4, cummings-8.27 | covered | HW12 |
| §5.3 FTC: applications | lebl-5.3.1, lebl-5.3.9, mit20-final-5b, mit20-final-6c, abbott-7.5.2 | covered | HW12, Fin 5b, 6c |
| §5.3 **FTC: proofs of both forms** | none of the first form (∫F′ = F(b) − F(a)); second form only inside tao-11.9.3 | thin | Lecture 22 / Fin 5b |
| §5.3 Integration by parts; change of variables | IBP only used (mit20-final-5b, mit20-final-6c); abbott-7.5.10 | covered | Fin 5b |
| §5.4 Logarithm and exponential defined via the integral | lebl-5.4.6 (uses ln only) | thin | — (calculus facts allowed) |
| §5.5 Improper integrals; integral test | mit20-final-6a, ross-36.3, ross-36.8, lebl-5.5.10, tao-11.6.3 | covered | Fin 6a |
| Integral estimates, Riemann–Lebesgue | mit20-final-6b, mit20-final-6c, abbott-7.4.10 | covered | Fin 6b, 6c |

## Chapter 6 — Sequences of functions

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §6.1 Pointwise vs uniform convergence; uniform norm | mit20-final-7a, lebl-6.1.2, lebl-6.1.5, abbott-6.2.1, ross-24.12, lebl-6.1.10 | covered | HW12, Fin 1(iii), 7a |
| §6.1 Uniform Cauchy criterion | abbott-6.2.5 | covered | — |
| §6.2 Uniform limit of continuous functions is continuous | ross-24.13 (uniformly continuous variant, same ε/3 argument), ross-24.17 | covered | Fin 7 (implicit) |
| §6.2 **Uniform convergence ⇒ ∫fₙ → ∫f** | abbott-7.2.5 proves integrability only; ross-23.9 and ross-24.9 are counterexamples | thin | Fin 6b/7 neighbourhood; HW12 reading |
| §6.2 Uniform convergence of derivatives ⇒ differentiable limit | abbott-6.3.7, lebl-6.2.1, lebl-6.2.2, abbott-6.3.4 | covered | — |
| §6.2 Weierstrass M-test; series of functions | abbott-6.4.1, abbott-6.4.7, abbott-6.4.2 | covered | — |
| §6.2 Power series: uniform on compact subintervals, term-by-term calculus | cummings-9.16, ross-26.8, abbott-6.5.10, lebl-6.1.14 | covered | — |
| §6.3 Picard's theorem (existence/uniqueness for y′ = F(x,y)) | none | **gap** | — (not covered) |

## Chapter 7 — Metric spaces (not taught in 18.100A F20; ℝ versions were)

| Result / technique | Bank ids | Status | MIT |
|---|---|---|---|
| §7.1 Metric axioms and examples (C[a,b], bounded metrics) | abbott-8.2.2, lebl-7.1.5, lebl-7.3.2 | covered | — |
| §7.2 Open/closed sets, unions/intersections (ℝ) | mit20-a3-5, mit20-a4-1, mit20-a4-2, cummings-5.3 | covered | HW3, HW4 |
| §7.2 Balls, closure, boundary | lebl-7.2.7, lebl-7.2.13, abbott-3.2.7 | covered | — |
| §7.2 Connectedness | abbott-3.2.13, lebl-7.2.10, lebl-7.2.11, lebl-7.5.5 | covered | — |
| §7.3 Closed ⇔ contains limits of its sequences | mit20-a4-3, mit20-mid-2, abbott-3.2.5 | covered | HW4, Mid 2 |
| §7.3 Convergence in ℝⁿ is componentwise; equivalent metrics | none | **gap** | — |
| §7.4 Completeness (closed subsets, C[a,b] complete, not a topological property) | lebl-7.4.16, abbott-8.2.5, lebl-7.4.19, mit18100b-f10-ps10-5 | covered | — |
| §7.4 Compactness (open covers) and Heine–Borel in ℝ | lebl-7.4.2, cummings-5.8, abbott-3.3.9, cummings-5.7, mit20-final-3 | covered | Fin 3 (sequential def.) |
| §7.4 Heine–Borel / Bolzano–Weierstrass in ℝⁿ | none (ℝ only) | **gap** | — |
| §7.4 Compact ⇔ sequentially compact; Lebesgue number | mit18100b-2006-ps3-7, lebl-7.4.12, lebl-7.4.6 | covered | — |
| §7.5 Continuous image of compact/connected; continuous inverse on compact | mit20-final-3, lebl-7.5.5, lebl-7.5.8, mit20-a8-5 | covered | Fin 3b, HW8 |
| §7.5 Uniform continuity on compact metric spaces | ℝ version only (abbott-4.4.14) | thin | — |
| §7.6 Contraction mapping theorem | abbott-4.3.11 (on ℝ), lebl-7.6.6 (sharpness), pugh-4.27* | covered | — |
| §7.6 Picard via fixed point | none | **gap** (same as §6.3) | — |

### Tally

| Chapter | covered | thin | gap |
|---|---|---|---|
| 0 | 7 | 0 | 1 |
| 1 | 9 | 1 | 0 |
| 2 | 20 | 2 | 0 |
| 3 | 16 | 2 | 1 |
| 4 | 10 | 2 | 0 |
| 5 | 8 | 3 | 1 |
| 6 | 6 | 1 | 1 |
| 7 | 10 | 1 | 3 |
| **Total (105 rows)** | **86** | **12** | **7** (6 distinct, since Picard appears twice) |

## Over-weighted

Counts are core problems (upper-tier in brackets). "Same skill" means the problems are solved by essentially one move.

1. **Topology beyond what 18.100A needs: 45 core (+10 upper) topology problems, against 33 core integration problems.**
   24 of the core topology problems are metric-space, connectedness, Cantor or Baire items (lebl-7.x ×12, abbott-8.2.x ×2, abbott-3.5.4/3.5.6, abbott-3.3.7, rudin-3.19, ross-22.4, mit18100b ×2, …), and the course taught none of these topics.
   Compactness alone carries 16 core (+8 upper) tags.
   Meanwhile §5.2–5.3 (basic integral properties, FTC) is the thinnest core area, and it is exactly what the MIT final leaned on.
2. **Supremum manipulation: 20 core problems tagged `supremum-infimum`.**
   About 9 of them use one move, "approximate sup from below by an element, then compare": lebl-1.2.9, abbott-1.3.5, lebl-1.3.7, lebl-1.3.5, abbott-1.3.9, abbott-1.3.11, abbott-1.4.4, cummings-1.19, mit20-a3-4.
3. **limsup/liminf inequalities: 11 core.**
   mit20-mid-4a (limsup subadditive) and lebl-2.3.7 (liminf superadditive) are mirror images. lebl-2.3.6, abbott-2.4.7, tao-6.4.3 and ross-12.13 re-derive the same "tail sup is monotone" facts.
4. **x^a sin(1/x) derivative pathologies: 5 core with the same computation.**
   mit20-final-4b, ross-28.4, abbott-5.2.7, ross-29.10 and lebl-4.4.6. In total 11 problems use sin(1/x).
5. **Pointwise-but-not-uniform counterexamples: about 12 core.**
   mit20-final-7a, lebl-6.1.2, abbott-6.2.1, lebl-6.1.10, cummings-9.12, ross-23.9, ross-24.9, lebl-6.2.1, lebl-6.2.2, abbott-6.3.4, lebl-6.2.22, lebl-6.1.6.
   `uniform-convergence` is the single largest subtopic at 23 core (+4 upper). The interchange *theorems* are thin by comparison (see gaps 1 and 2).
6. **Lipschitz / bounded-derivative: 7 core.**
   mit20-a9-4, mit20-a9-5, lebl-3.4.3, mit20-a10-1, mit20-a10-3, mit20-final-7b, abbott-4.3.12.
   MIT emphasised this, so it is defensible, but there is no room for more (e.g. skip lebl-4.2.3).

Overall the bank leans toward counterexample work: `construct-counterexample` is the most common skill (97 uses), with 71 problems of type counterexample against 233 proofs.

## Prioritised gaps (top 10)

Ranked by how much an 18.100A student needs the result, with extra weight where MIT's exams depend on it.
Candidate ids are from `curation/UNSELECTED.md` unless noted.

| # | Gap (Lebl §) | Status | Why it matters / MIT | Candidate(s) |
|---|---|---|---|---|
| 1 | Uniform convergence ⇒ ∫fₙ → ∫f (§6.2) | thin | Core interchange theorem; the bank has the counterexamples but not the theorem. Final Q6–7 sit right beside it. | **ross-33.9** (core verdict); abbott-7.4.9 |
| 2 | FTC, both forms, proved (§5.3) | thin | Final Q5b and Q6c assume FTC and integration by parts; no problem proves either. | **ross-34.1**, **lebl-5.3.5** (IBP), lebl-5.3.8 |
| 3 | Continuous on [a,b] ⇒ Riemann integrable (§5.2) | thin | The central existence theorem of the MIT Riemann-integral notes; only the one-discontinuity variant is present. | none direct. Write one (Lebl Prop. 5.2.x), or use lebl-5.1.3 / ross-32.6 as the U − L criterion scaffold |
| 4 | Linearity, additivity, monotonicity of ∫ (§5.2) | **gap** | Used silently in HW12 and Final Q5–6. | **lebl-5.2.2**, ross-32.8 (or cummings-8.5) |
| 5 | Cauchy ⇒ convergent in ℝ (§2.4) | thin | Completeness of ℝ in sequence form; every series test relies on it. Only the abstract-field version (lebl-2.4.3, hard) is in the bank. | **lebl-2.4.7** (key step: a Cauchy sequence with a convergent subsequence converges); tao-6.1.5 for the converse |
| 6 | Taylor's theorem with Lagrange remainder, proved (§4.3) | thin | HW11 (Q2–4) and Final Q5a apply it heavily; nobody proves it. | **abbott-6.6.8** |
| 7 | Bolzano IVT, proved (§3.3) | thin | Final Q2a(ii) tests the hypotheses, and many problems apply IVT, but the bisection/sup proof is never exercised. | no direct candidate. cummings-8.21 (alternative proof via FTC + Darboux); ross-22.1 (continuous image of an interval is an interval) |
| 8 | Cantor's theorem \|A\| < \|𝒫(A)\| (§0.3) | gap | Standard §0.3 theorem; HW3 Q2 and Midterm Q4b build on 𝒫(ℕ) and expansions. | **tao-8.3.4** (or tao-8.3.5) |
| 9 | One-sided and infinite limits (§3.1, §3.5) | thin / gap | Lebl defines both; the bank has limits at ∞ (mit20-a9-6) but nothing on f → ∞ or one-sided limits in core. | **lebl-3.1.12**, abbott-4.2.9 |
| 10 | log/exp built from ∫1/t (§5.4) | thin | Whole Lebl section; lebl-5.4.6 only uses ln. | **abbott-7.5.8** |

Next after the top 10 (not 18.100A material):
- ℝⁿ convergence and Heine–Borel in ℝⁿ (§7.3–7.4): lebl-7.3.14, lebl-7.4.14, ross-13.11.
- Picard's theorem (§6.3 / §7.6): `mit18100b-s25-ps9-5` in `curation/candidates-upper/mit18100b.yaml` (upper tier, not listed in UNSELECTED.md); lebl-6.3.5 is only a lemma.
- Radius-of-convergence formula: ross-23.4.
- Product/quotient-rule proofs: no candidate found.
- Archimedean property from LUB: lebl-1.2.1 is weak; abbott-2.4.4 instead.

**Flag for MIT alignment:** no MIT-assigned or MIT-examined problem is missing from the bank.
The MIT-relevant shortfall is in the **theorems behind the final exam** (gaps 1, 2, 3, 4, 6). The bank gives far more space to metric-space topology, which 18.100A never examined.
Swapping about 6 of the 24 core metric/Baire/Cantor topology items for gap candidates 1–6 would fix the imbalance without changing the bank's size.

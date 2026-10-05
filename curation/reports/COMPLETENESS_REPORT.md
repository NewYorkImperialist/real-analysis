# Is the core complete for a first course in real analysis?

## Verdict

**No, not 100%. It is about 97% complete, and the gaps are small and specific.** Of the roughly 150 non-optional syllabus items, 4 require practice that the core does not give.

The method was a fine-grained syllabus of **156 items**. It was built from the section lists of Abbott (ch. 1–7, plus
§8.2 where courses use it), Rudin PMA (ch. 1–7), Ross (§1–36), Lebl (Basic Analysis I, ch. 0–7), Tao (Analysis I, the
analysis chapters) and the MIT 18.100A (Fall 2020) and 18.100B (2006, Fall 2010, Spring 2025) problem sets. Each item
was checked against the 330 core problems. Upper-tier problems were ignored.

| status | items |
|---|---|
| Covered: at least one core problem genuinely practises it | **139** |
| Covered only partially or indirectly (practised as a step inside another problem) | **6** |
| Reference-only (stated in `data/reference`, never practised) | **3** (1 must-have) |
| Missing (neither practised nor stated) | **8** (3 must-have; 5 optional or nice-to-have) |
| Upper-only | **0** (each upper-tier topic is either a second-course topic or has a core counterpart) |

The core is very strong on the hard middle of the course: sup/inf, sequences, Cauchy sequences, limsup, series tests,
topology of R and metric spaces, continuity, uniform continuity, the MVT family, Darboux integration and uniform
convergence. It goes beyond many courses there, with Baire category, Arzelà–Ascoli, C[0,1] and contractions.

The real holes are at the two "calculus-facing" ends of the course:

1. **Irrationality.** The week-one exercise that √2 (or √3) is irrational is never practised. Abbott, Ross and Rudin
   all set it.
2. **FTC with variable limits.** A computation such as $\frac{d}{dx}\int_{-x}^{x}e^{s^2}\,ds$ is never practised.
   Lebl 5.3.1 is in the candidate pool with verdict `core`, and MIT 18.100A assigned it (Assignment 12, Problem 2), yet
   it is not in the bank.
3. **The analytic logarithm and exponential.** $\ln$ is defined as an integral in the reference, but no problem
   derives its laws ($\ln xy=\ln x+\ln y$). No problem derives $E'=E$ from the exponential power series. Every textbook
   and both MIT courses practise this: 18.100B F10 HW12 #2, 18.100B S25 PS10 #1/#3, and Lebl 5.4.

Everything else that is missing has a nice-to-have status. A course would mention it, and the bank already practises
the machinery elsewhere.

With the **4 must-have additions** below, I would call the core complete for a standard first course.

---

## Syllabus table

Legend:
- **C**: covered (the cited core problem genuinely practises the item).
- **C\***: covered partially or indirectly.
- **R**: reference-only.
- **M**: missing.
- **Need practice?** says whether a first course genuinely requires an exercise on the item (Y), only the statement
  (N), or whether the item is optional or Rudin-specific (opt).

### A. Foundations (logic, sets, functions, induction, cardinality)

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 1 | Quantifiers, order of quantifiers | C | tao-a.5.1 | |
| 2 | Negating quantified statements | C | abbott-1.2.11, mit20-final-1 | |
| 3 | Set algebra, De Morgan / distributive laws | C | lebl-0.3.6 | |
| 4 | Images and preimages of unions/intersections | C | lebl-0.3.27, tao-3.4.5 | |
| 5 | Injective/surjective/bijective, composition | C | lebl-0.3.10, tao-3.4.5 | |
| 6 | Induction | C | lebl-0.3.11, lebl-0.3.12, lebl-1.2.13 | |
| 7 | Well-ordering principle / strong induction | M | — | N (nice: tao-8.1.2) |
| 8 | Finite sets, cardinality of power set | C | lebl-0.3.12 | |
| 9 | Countable sets; Q countable | C | mit20-a1-6, lebl-0.3.19 | |
| 10 | Countable union of countable sets | C | abbott-1.5.3 | |
| 11 | Diagonalization: (0,1) / R uncountable | C | ross-16.8, mit20-a3-3 | |
| 12 | Cantor's theorem (no surjection onto P(S)) | C | pugh-1.38, mit20-a3-2 | |
| 13 | Schröder–Bernstein | C | tao-8.3.2 | |
| 14 | Explicit bijections ([0,1]↔(0,1)) | C | lebl-1.4.5 | |
| 15 | Algebraic numbers countable / transcendentals exist | C | abbott-1.5.9 | |
| 16 | Decimal expansions | C\* | mit20-a3-2, rudin-2.17, ross-16.8 (reference *Decimal expansion*) | |

### B. The real numbers

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 17 | **Irrationality of √2 / √3 (gaps in Q)** | **M** | — (Q's lack of the least-upper-bound property: lebl-1.1.14, ross-10.4) | **Y** |
| 18 | Ordered field axioms and consequences | C | lebl-1.1.1 | |
| 19 | Absolute value, triangle and reverse triangle inequality | C | abbott-1.2.6 | |
| 20 | "a ≤ b + ε for all ε ⇒ a ≤ b" | C | cummings-1.9 | |
| 21 | Bernoulli's inequality | C | lebl-1.2.13 | |
| 22 | Upper bounds, sup/inf from the definition | C | lebl-1.1.5, lebl-1.1.2, cummings-1.19 | |
| 23 | ε-characterization of sup | C | mit20-a3-4 | |
| 24 | Least-upper-bound property; ordered set lacking it | C | lebl-1.1.14, abbott-1.3.3 | |
| 25 | Algebra of sup/inf (cA, A+B, subsets) | C | abbott-1.3.5, lebl-1.2.9, abbott-1.3.11, abbott-1.3.9 | |
| 26 | Sup/inf of functions | C | lebl-1.3.5, lebl-1.3.7 | |
| 27 | Archimedean property | C | abbott-1.2.11 (a)(b), cummings-1.19 | |
| 28 | Density of Q and of the irrationals | C | abbott-1.4.4, mit20-a3-1 | |
| 29 | Existence of n-th roots from completeness | C | mit20-a2-7 | |
| 30 | Nested Interval Property (and sharpness) | C | cummings-1.22, abbott-1.4.8 | |
| 31 | Equivalence of completeness forms (NIP/MCT/BW/Cauchy) | C | abbott-2.5.4, ross-10.4 | |
| 32 | Construction of R (cuts / Cauchy sequences) | M | — | opt (often skipped) |
| 33 | Complex numbers, R^k, Cauchy–Schwarz | C\* | mit20-a7-3 (Cauchy–Schwarz for series) | opt (Rudin ch. 1) |

### C. Sequences

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 34 | ε–N proofs of specific limits | C | abbott-2.2.2, abbott-2.3.2 | |
| 35 | Quantifier order in the definition | C | abbott-2.2.1 | |
| 36 | Proving divergence | C | ross-8.7, tao-6.3.4 | |
| 37 | Uniqueness of limits; convergent ⇒ bounded | C | abbott-2.2.6, abbott-2.6.2 | |
| 38 | Limit laws (algebraic) | C | cummings-3.8, lebl-2.2.3, abbott-2.3.7 | |
| 39 | Order limit theorem | C | abbott-2.3.12 | |
| 40 | Squeeze theorem | C | lebl-2.2.5, abbott-2.3.9 | |
| 41 | Divergence to ±∞ (M–N definition) | C\* | cummings-3.16 (increasing unbounded ⇒ diverges to ∞); ross-23.9 quotes the ratio version | N (nice: ross-9.9) |
| 42 | Standard limits: r^n, n^{1/n}, ratio test for sequences | C | cummings-4.3, lebl-2.6.10, lebl-2.2.9 | |
| 43 | Cesàro means | C | abbott-2.3.11 | |
| 44 | Double / iterated limits | C | abbott-2.3.13 | |
| 45 | Monotone Convergence Theorem | C | cummings-3.16 | |
| 46 | Recursively defined sequences | C | cummings-3.24, abbott-2.4.5, abbott-2.4.6, cummings-3.25 | |
| 47 | e as lim(1+1/n)^n | M | — | N (nice: lebl-5.4.5 gives e^x = lim(1+x/n)^n) |
| 48 | Subsequences; subsequences of a convergent sequence | C | abbott-2.5.2, lebl-2.1.22, mit20-mid-3b | |
| 49 | Monotone subsequence lemma ⇒ Bolzano–Weierstrass | C | lebl-2.3.10 | |
| 50 | BW for sets (limit points) | C | lebl-2.3.9 | |
| 51 | Subsequential limits, set of them closed | C | ross-11.9, lebl-2.1.17, abbott-2.5.5 | |
| 52 | Cauchy sequences: convergent ⇒ Cauchy ⇒ bounded | C | abbott-2.6.1, cummings-3.15 | |
| 53 | Cauchy criterion; Cauchy ≠ consecutive gaps → 0 | C | lebl-2.4.7, lebl-2.4.8, lebl-2.5.12 | |
| 54 | Contractive sequences | C | lebl-2.4.2, ross-10.6 | |
| 55 | limsup/liminf: definition and computation | C | abbott-2.4.7, lebl-2.3.5, ross-12.13 | |
| 56 | limsup/liminf properties; lim exists ⇔ equal | C | mit20-a5-6, mit20-a5-5, lebl-2.3.6, lebl-2.3.7, tao-6.4.3 | |

### D. Series

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 57 | Partial sums, geometric series | C | tao-7.3.2 | |
| 58 | Term test; grouping | C | lebl-2.6.1, lebl-2.5.4 | |
| 59 | Cauchy criterion for series | C | tao-7.2.2 | |
| 60 | Comparison test, p-series, telescoping | C | lebl-2.5.3, cummings-4.5 | |
| 61 | Limit comparison test | C | mit20-mid-5a | |
| 62 | Cauchy condensation; n·a_n → 0 | C | lebl-2.5.15, lebl-2.5.7 | |
| 63 | Ratio test | C | abbott-2.7.9 | |
| 64 | Root test (and ratio vs root) | C | ross-14.10, tao-7.5.1, lebl-2.6.1 | |
| 65 | Integral test | C | tao-11.6.3, ross-15.3 | |
| 66 | Alternating series test | C | abbott-2.7.1, lebl-2.6.12 | |
| 67 | Summation by parts: Abel and Dirichlet tests | C | abbott-2.7.13, abbott-2.7.14 | |
| 68 | Absolute ⇒ convergent; absolute vs conditional | C | cummings-4.2, lebl-2.5.10, abbott-2.7.8, abbott-2.7.4 | |
| 69 | Rearrangements (absolute: same sum; Riemann) | C | cummings-4.18, lebl-2.6.3 | |
| 70 | Cauchy product | C | lebl-2.6.2 | |
| 71 | Power series: radius / interval of convergence | C | mit20-a7-2, mit20-mid-5b | |
| 72 | Cauchy–Hadamard (limsup \|a_n\|^{1/n}) | C | lebl-2.6.10 | |
| 73 | Double series / Fubini for sums (Abbott §2.8) | C\* | abbott-2.3.13 (iterated limits) | opt |

### E. Topology of R and metric spaces

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 74 | Open sets in R; unions/intersections | C | mit20-a3-5, cummings-5.3 | |
| 75 | Closed sets; closed ⇔ sequentially closed | C | mit20-a4-1, mit20-a4-2, mit20-a4-3, mit20-mid-2 | |
| 76 | Limit points, isolated points, closure | C | mit20-a4-7, abbott-3.2.7, abbott-3.2.10 | |
| 77 | Dense sets | C | abbott-3.2.6 | |
| 78 | Structure of open sets in R | C | ross-13.7 | |
| 79 | Sequential compactness ⇔ closed and bounded | C | cummings-5.7 | |
| 80 | Open-cover compactness; Heine–Borel | C | lebl-7.4.2, abbott-3.3.9 | |
| 81 | Compact-set algebra; closed ⊂ compact | C | abbott-3.3.5, cummings-5.8, abbott-3.3.8 | |
| 82 | Nested compact sets / finite intersection property | C | lebl-7.4.10, pugh-2.93 | |
| 83 | Cantor set, perfect sets | C | rudin-3.19, abbott-3.3.7, rudin-2.17 | |
| 84 | Connected sets in R (intervals) | C | abbott-3.2.13, abbott-3.4.6 | |
| 85 | Baire category theorem (R) | C | abbott-3.5.4, abbott-3.5.5, abbott-3.5.6 | |
| 86 | Metric spaces: examples, verifying axioms | C | lebl-7.1.5, lebl-7.3.2, abbott-8.2.2 | |
| 87 | Open/closed balls, interior, boundary, closure | C | lebl-7.2.13, lebl-7.2.7 | |
| 88 | Convergence in a metric space | C | lebl-7.3.2 (b)(c) | |
| 89 | Complete metric spaces; closed subset complete | C | lebl-7.4.16, lebl-7.4.19, abbott-8.2.5 | |
| 90 | Compactness in metric spaces (totally bounded, Lebesgue number) | C | lebl-7.4.6, lebl-7.4.12, mit18100b-2006-ps3-7 | |
| 91 | Connectedness in metric spaces; path-connected | C | lebl-7.2.10, lebl-7.2.11, ross-22.4 | |
| 92 | Bolzano–Weierstrass / Heine–Borel in R^k | C\* | ross-21.5 (compact sets in R^k) | opt |

### F. Limits of functions and continuity

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 93 | ε–δ functional limits; specific limits | C | ross-17.9, abbott-4.2.10 | |
| 94 | Sequential criterion for limits; non-existence | C | lebl-3.1.11, mit20-a9-6, ross-18.12 | |
| 95 | Limit laws / squeeze / local boundedness for functions | C | lebl-3.1.3, mit20-a7-6, abbott-4.3.4 | |
| 96 | One-sided limits | C | abbott-4.2.10 | |
| 97 | Infinite limits and limits at infinity | C | abbott-4.2.9, mit20-a9-6, lebl-3.5.4, lebl-3.5.6 | |
| 98 | ε–δ continuity of specific functions | C | ross-17.9, mit20-final-2b | |
| 99 | Sequential continuity; Dirichlet/Thomae | C | mit20-a8-2, abbott-4.3.7 | |
| 100 | Algebra and composition of continuous functions | C | mit20-final-2b, abbott-4.3.6, abbott-4.3.4 (b) | |
| 101 | Topological continuity (preimages of open sets) | C | mit20-a8-5 | |
| 102 | Types of discontinuity (removable/jump/essential) | C | abbott-4.6.5 | |
| 103 | Monotone functions: jumps, countable discontinuities | C | abbott-4.6.5, abbott-4.6.6, lebl-3.6.11 | |
| 104 | Continuous image of compact; EVT | C | mit20-final-3, abbott-4.4.8, lebl-3.3.3, ross-21.5 | |
| 105 | IVT (and from connectedness) | C | abbott-4.5.1, abbott-4.5.7, abbott-4.5.6, cummings-6.33 | |
| 106 | Continuous injective ⇒ monotone; inverse continuous | C | lebl-3.6.8, abbott-4.5.8, lebl-7.5.8 | |
| 107 | Uniform continuity (direct proofs and failures) | C | ross-19.2, abbott-4.4.2, lebl-3.4.8, ross-19.1 | |
| 108 | Continuous on compact ⇒ uniformly continuous | C | abbott-4.4.14 | |
| 109 | Lipschitz; Lipschitz vs uniform continuity | C | mit20-a9-5, mit20-a10-3 | |
| 110 | Uniform continuity and Cauchy sequences; continuous extension | C | abbott-4.4.13, lebl-3.4.9 | |
| 111 | Continuity on metric spaces | C | lebl-7.5.2, lebl-7.5.5 | |

### G. Differentiation

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 112 | Derivative from the definition; differentiable ⇒ continuous | C | mit20-final-4a, lebl-4.1.5, ross-28.4 | |
| 113 | Sum/product/quotient rules | R | reference *Derivative*; quoted in ross-28.4 | N (nice: abbott-5.2.2, ross-28.3) |
| 114 | Chain rule | C | abbott-5.2.4 | |
| 115 | Derivative of an inverse function | C | abbott-5.2.12 | |
| 116 | Interior extremum (Fermat) | C | tao-10.2.1 | |
| 117 | Rolle, MVT, sharpness of hypotheses | C | tao-10.2.5, cummings-7.10, ross-29.4 | |
| 118 | MVT consequences: monotonicity, f′=0 ⇒ constant, Lipschitz | C\* | mit20-a10-3, mit20-a10-1, mit20-a11-1, tao-10.3.5 (the theorem itself is reference-only) | N (nice: tao-10.3.4) |
| 119 | Darboux's theorem | C | abbott-5.2.11, lebl-4.2.7 | |
| 120 | Cauchy MVT; L'Hôpital (0/0, ∞/∞) | C | cummings-7.14, lebl-4.2.9, cummings-7.16 | |
| 121 | Higher derivatives; C^n; second derivative test | C | abbott-5.2.7, lebl-4.3.11, abbott-5.3.12 | |
| 122 | Taylor's theorem with remainder | C | mit20-final-5a, mit20-a11-4, mit20-final-5b | |
| 123 | Smooth vs analytic (e^{−1/x²}) | C | ross-31.5, ross-31.4 | |
| 124 | Convexity basics | C | rudin-5.14, lebl-3.2.19 | |

### H. Integration

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 125a | Darboux sums; integral from the definition | C | abbott-7.2.3, lebl-5.1.15, ross-32.2 | |
| 125b | Riemann's criterion; refinement | C | abbott-7.2.3, cummings-8.25 (refinement lemma is reference) | |
| 125c | Riemann sums / mesh definition | C | mit20-a11-5, lebl-5.1.11, lebl-5.1.13 | |
| 125d | Monotone ⇒ integrable | C | lebl-5.2.14 | |
| 125e | Continuous ⇒ integrable | R | reference *Continuous functions are integrable*; nearest practice cummings-8.25, abbott-7.3.9 | N (no source sets it as an exercise; see COVERAGE_AUDIT residual note) |
| 125f | Discontinuity sets, measure zero (Lebesgue criterion) | C | abbott-7.3.9, abbott-7.6.3, lebl-5.2.11 | |
| 125g | Linearity, additivity, monotonicity, \|f\|, products | C | lebl-5.2.2, cummings-8.5, abbott-7.4.4, lebl-5.2.15, abbott-7.4.6 | |
| 125h | Mean value theorem for integrals | C | cummings-8.27 | |
| 125i | FTC I (∫F′ = F(b)−F(a)) | C | lebl-5.3.5, abbott-7.5.10 (both use it in proofs), abbott-7.5.2 | |
| 125j | FTC II (F′ = f at continuity points) | C | lebl-5.3.9, tao-11.9.3, abbott-7.5.2 | |
| 125k | **FTC with variable limits (∫_{a(x)}^{b(x)})** | **M** | — | **Y** |
| 125l | Integration by parts; substitution | C | lebl-5.3.5, abbott-7.5.10, mit20-a12-1 | |
| 125m | **Logarithm defined as an integral: its laws** | **R** | reference *Natural logarithm as an integral*; lebl-5.4.6 uses ln only for harmonic bounds | **Y** |
| 125n | Improper integrals; p-integrals; absolute convergence | C | ross-36.3, ross-36.8, lebl-5.5.10 | |

### I. Sequences and series of functions

| # | Item | Status | Core problem(s) | Need practice? |
|---|---|---|---|---|
| 126a | Pointwise vs uniform convergence; sup-norm criterion | C | lebl-6.1.2, abbott-6.2.1, ross-24.12, lebl-6.1.10 | |
| 126b | Uniform Cauchy criterion | C | abbott-6.2.5 | |
| 126c | Continuity passes to uniform limits | C | cummings-9.12, abbott-6.2.6, ross-24.17 | |
| 126d | Integration and limits | C | ross-23.9, ross-33.9, abbott-7.3.5, ross-24.9 | |
| 126e | Differentiation and limits | C | lebl-6.2.2, abbott-6.3.4, abbott-6.3.7 | |
| 126f | Dini's theorem | C | abbott-6.2.11 | |
| 126g | Series of functions; Weierstrass M-test | C | abbott-6.4.1, abbott-6.4.2, lebl-6.1.14, abbott-6.4.7 | |
| 126h | Power series: uniform on compact subintervals | C | cummings-9.16 | |
| 126i | Power series term-by-term differentiation/integration | C | abbott-6.5.5, ross-26.8 (a)(b) | |
| 126j | Abel's theorem; identity theorem | C | ross-26.8 (c), abbott-6.5.10 | |
| 126k | Taylor series representing a function (e^x, arctan) | C | mit20-final-5a, ross-26.8 | |
| 126l | **exp (and sin/cos) defined analytically: E′ = E, laws** | **M** | — (exp only appears as a given function) | **Y** (exp); N (trig, nice: ross-26.6) |
| 126m | Weierstrass approximation (statement, used) | C | rudin-7.20, abbott-6.7.2, ross-27.3 | |
| 126n | C[a,b], sup metric, completeness | C | abbott-8.2.2, abbott-8.2.5, mit18100b-f10-ps10-5 | |
| 126o | Contraction mapping theorem | C | abbott-4.3.11, lebl-7.6.6 | |
| 126p | Equicontinuity / Arzelà–Ascoli | C | abbott-6.2.15, lebl-7.4.8 | opt |
| 126q | Computational practice: L'Hôpital limits, Taylor polynomials | M | — (theory is covered by items 120 and 122) | N (nice) |
| 126r | Riemann–Stieltjes, bounded variation, Fourier series | M | — | opt (Rudin-specific or second course) |

(The rows lettered 125a–n and 126a–r are part of the count. The status counts in the verdict are taken over every row.)

### Upper-tier content checked

None of the 37 upper-tier problems is the *only* practice of a first-course item. Each one either has a core
counterpart or is genuinely beyond a first course.

| upper-tier problem | core counterpart |
|---|---|
| Mertens' theorem (pugh-3.73) | lebl-2.6.2 |
| all simple discontinuities countable (rudin-4.17) | the monotone case, abbott-4.6.6 |
| equicontinuity ⇒ uniform convergence (rudin-7.16) | Arzelà–Ascoli, abbott-6.2.15 |
| regulated ⇒ integrable (pugh-prelim-7) | monotone/continuous cases |
| Cauchy completeness ⇒ least-upper-bound property (lebl-2.4.3) | abbott-2.5.4 |

---

## Proposed additions

All of these are existing book exercises. None is invented.

### Must-have (4)

1. **`lebl-5.3.1`: FTC with variable limits.** Compute $\frac{d}{dx}\int_{-x}^{x}e^{s^2}\,ds$.
   - **Source:** Lebl, *Basic Analysis I*, Ex. 5.3.1, p. 205. It is already transcribed in
     `curation/candidates/lebl-ch5-7.yaml`, with candidate verdict **core**, and MIT 18.100A F20 assigned it
     (Assignment 12, Problem 2).
   - **Placement:** `integration`, group *fundamental theorem of calculus*, first, before `lebl-5.3.9`.
   - **Alternative:** `ross-34.5` (Ross p. 297; $F(x)=\int_{x-1}^{x+1}f$), also in the pool.
2. **`abbott-7.5.8`: natural logarithm from $\int_1^x dt/t$.** It asks for $L'$, $L(xy)=L(x)+L(y)$, $L(x/y)$, Euler's
   constant, and $\log 2$ as the alternating harmonic series.
   - **Source:** Abbott, *Understanding Analysis* (2nd ed.), Ex. 7.5.8, p. 237. It is in
     `curation/candidates/abbott-ch5-8.yaml` (verdict strong).
   - **Placement:** `integration`, group *logarithm as an integral*, before `lebl-5.4.6`.
   - **Overlap:** part (d) duplicates `lebl-5.4.6`(b). If a net-zero change is preferred, `abbott-7.5.8` can *replace*
     `lebl-5.4.6`.
3. **`ross-26.5`: the exponential series satisfies $f'=f$.** The problem says not to assume $f=e^x$.
   - **Source:** Ross, *Elementary Analysis* (2nd ed.), Ex. 26.5, p. 216. It is in
     `curation/candidates/ross-ch4-6.yaml`. The same exercise is MIT 18.100B F10 HW12 #2, and S25 PS10 #1 is a
     variant.
   - **Placement:** `function-sequences`, group *power series as functions*, right after `abbott-6.5.5`.
   - **Before adding:** quote Ross Thm 26.5 (term-by-term differentiation) so that the problem is self-contained.
   - **Alternative, not in the pool:** Lebl Ex. 5.4.3, p. 212 ($e^x=\sum x^n/n!$ via Taylor's remainder).
4. **Irrationality of √3.** "Prove √3 is irrational. Does a similar argument work for √6? Where does the proof break
   down for √4?"
   - **Source:** Abbott, Ex. 1.2.1, printed p. 11 (PDF p. 24). It is **not** in the candidate pool and would need
     transcribing.
   - **Equivalents:** Ross Ex. 2.1, p. 12 (√3, √5, √7, √24, 31/2 not rational), and Rudin Ex. 1.2 (no rational
     square equals 12).
   - **Placement:** `real-numbers`, a new first group *irrational numbers (gaps in Q)*, before `lebl-1.1.1`. That puts
     it ahead of `lebl-1.1.14`, which shows the least-upper-bound property can fail.

### Nice-to-have (in priority order)

| # | id / source | what it adds | placement |
|---|---|---|---|
| 1 | `tao-10.3.4` (Tao Ex. 10.3.4, p. 261; pool, strong) | prove f′>0 ⇒ strictly increasing, f′=0 ⇒ constant (currently reference-only) | differentiation, *consequences of the MVT*, first |
| 2 | `ross-9.9` (Ross Ex. 9.9, p. 55; pool, strong) | M–N proofs for sequences diverging to ±∞ | sequences, *order and limits; testing the laws* |
| 3 | `lebl-5.4.5` (Lebl Ex. 5.4.5, p. 212; pool) | e^x = lim(1+x/n)^n (covers "e as a limit") | integration, *logarithm as an integral*, after must-have #2 |
| 4 | `abbott-5.2.2` (Abbott Ex. 5.2.2, p. 152; pool, strong) or `ross-28.3` (Ross Ex. 28.3, p. 230; pool) | algebra of derivatives tested by counterexamples / derivatives of √x and x^{1/3} from the definition | differentiation, *derivative rules* |
| 5 | `ross-26.6` (Ross Ex. 26.6, p. 216; pool, strong) | sin/cos from power series: s′=c, c′=−s, s²+c²=1 | function-sequences, after must-have #3 |
| 6 | MIT 18.100A F20 Assignment 11, Problems 2–3 (`mit18_100af20_hw11.txt`; not in pool) | computing Taylor polynomials and L'Hôpital limits | differentiation, after `lebl-4.2.9` / `mit20-final-5a` |
| 7 | `tao-8.1.2` (Tao Ex. 8.1.2, p. 187; pool) | well-ordering principle | foundations, *induction* |
| 8 | `lebl-5.4.4` (Lebl Ex. 5.4.4, p. 212; pool) or `abbott-6.6.4` (pool, strong) | Taylor series of ln(1+x) with a remainder estimate | function-sequences, *power series as functions* |
| 9 | `ross-29.2` (Ross Ex. 29.2, p. 239; pool) | MVT inequality \|cos x − cos y\| ≤ \|x − y\| | differentiation, *consequences of the MVT* |

### Not proposed, deliberately

- **Continuous ⇒ integrable.** As the earlier audit found, no source sets it as an exercise, so it stays
  reference-only.
- **Construction of R; Riemann–Stieltjes; bounded variation; Fourier series; R^k compactness.** These are optional,
  Rudin-specific, or second-course material.

---

## Calculus made rigorous and remaining gaps (added)

Added on 2026-10-05. The core is now **344** problems (381 in all). None of these problems is invented: three were
restored from `curation/REMOVED.yaml`, ten come from the candidate pool, and one (Abbott 1.2.1) was newly transcribed into
`curation/candidates/coverage-additions.yaml`. Every new statement was checked against the rendered page and made
self-contained, with quoted results marked as quotes. AI hints and solutions are in `data/solutions/completeness.yaml`.

| id | source | placement (`data/curriculum.yaml`) | why |
|---|---|---|---|
| `abbott-1.2.1` | Abbott Ex. 1.2.1, p. 11 (new transcription; Theorem 1.1.1 and its proof quoted) | real-numbers, new first group *irrational numbers (gaps in Q)* | Proof by contradiction in Q: adapting the classic irrationality argument and testing which of its steps carry over. |
| `tao-8.1.2` | Tao Ex. 8.1.2, p. 187 (Prop. 8.1.4, Ex. 4.4.2, Thm 5.5.9 quoted) | foundations, *induction*, after `lebl-0.3.12` | The well-ordering principle of N, proved from induction, and why it is special to N. |
| `ross-9.9` | Ross Ex. 9.9, p. 55 (Def. 9.8 quoted) | sequences, end of *order and limits; testing the laws* | M–N proofs for sequences that diverge to ±∞, and comparison of limits in the extended sense. |
| `abbott-5.2.2` | Abbott Ex. 5.2.2, p. 152 | differentiation, *derivative rules*, before `abbott-5.2.4` | What the sum and product rules do and do not say, tested by constructing examples. |
| `tao-10.3.4` | Tao Ex. 10.3.4, p. 261 (Prop. 10.3.3, Cor. 10.2.9 quoted) | differentiation, first in *consequences of the MVT* | The Mean Value Theorem turns the sign of the derivative into monotonicity or constancy. |
| `ross-29.2` | Ross Ex. 29.2, p. 239 | differentiation, *consequences of the MVT*, after `tao-10.3.4` | The Mean Value Theorem as an inequality: a bound on the derivative gives a Lipschitz estimate. |
| `mit20-a11-2` | MIT 18.100A F20 A11 P2 (restored) | differentiation, first in *Taylor's theorem* | Computing Taylor polynomials, including at a base point other than 0. |
| `mit20-a11-3` | MIT 18.100A F20 A11 P3 (restored) | differentiation, *Taylor's theorem*, after `mit20-a11-2` | Limits computed rigorously with Taylor's theorem and an explicit remainder. |
| `lebl-5.3.1` | Lebl Ex. 5.3.1, p. 205 (restored) | integration, first in *fundamental theorem of calculus* | FTC with variable limits, combined with additivity and the chain rule. |
| `abbott-7.5.8` | Abbott Ex. 7.5.8, p. 237 | integration, first in *logarithm and exponential* | The logarithm defined as an integral, with its laws derived from the FTC. |
| `lebl-5.4.5` | Lebl Ex. 5.4.5, p. 212 (Lebl's ln/exp definitions summarized) | integration, *logarithm and exponential*, after `lebl-5.4.6` | A classical limit for the exponential, computed through the logarithm. |
| `lebl-5.4.4` | Lebl Ex. 5.4.4, p. 212 | integration, *logarithm and exponential*, after `lebl-5.4.5` | The series for ln(1+x) from a finite geometric sum and an explicit integral remainder. |
| `ross-26.5` | Ross Ex. 26.5, p. 216 (Thm 26.5 quoted) | function-sequences, *power series as functions*, after `abbott-6.5.5` | Term-by-term differentiation: the exponential series is its own derivative. |
| `ross-26.6` | Ross Ex. 26.6, p. 216 (Thm 26.5 quoted) | function-sequences, after `ross-26.5` | Sine and cosine defined by power series, with identities derived from their derivatives alone. |

**Choices between pairs.**
- `abbott-5.2.2` was chosen over `ross-28.3`. It is self-contained and tests the algebra of differentiability: one
  request is impossible because of the sum rule, and the others need constructed examples. `ross-28.3` is a
  difference-quotient computation, and the core already practises that (`mit20-final-4a`, `lebl-4.1.5`, `ross-28.4`).
- `lebl-5.4.4` was chosen over `abbott-6.6.4`. Lebl proves the whole series for ln(1+x) on (−1, 1] with an explicit
  integral remainder. Abbott proves only the value at x = 1, which `abbott-7.5.8`(e) already gives. Also, its quoted
  remainder theorem is stated on a symmetric interval (−R, R), which does not literally cover log(1+x) at x = 1.

**Already present.** `lebl-4.3.11` (second derivative test) was already in the core, so nothing was added for it.

**Reference moves.** No reference states a result just before a problem that asks to prove it:
- The *Mean Value Theorem* block now holds only MVT/Rolle. Its monotonicity consequences became a separate theorem
  placed `before: ross-29.2`, right after `tao-10.3.4` proves them.
- *Divergence to infinity* moved to `before: ross-9.9`.
- *FTC* moved to `before: lebl-5.3.1`.
- *Natural logarithm as an integral* moved to `before: abbott-7.5.8`.
- *Taylor polynomial / Taylor's Theorem* moved to `before: mit20-a11-2`.
- *Power series as functions* moved to `before: ross-26.5`.

**Overlap noted.** `abbott-7.5.8`(d) (Euler's constant) repeats `lebl-5.4.6`(b), and `abbott-7.5.8`(e) and the end of
`lebl-5.4.4` both give log 2. All are kept: Lebl's versions add sharper bounds, the general series and a different
method.

**Syllabus items now covered.**

| # | item | was | now |
|---|---|---|---|
| 7 | Well-ordering principle | M | C (`tao-8.1.2`) |
| 17 | Irrationality of √2 / √3 | M | C (`abbott-1.2.1`) |
| 41 | Divergence to ±∞ | C\* | C (`ross-9.9`) |
| 47 | e as a limit | M | C (`lebl-5.4.5`, eˣ = lim(1+x/n)ⁿ) |
| 113 | Sum/product/quotient rules | R | C (`abbott-5.2.2`) |
| 118 | MVT consequences (monotonicity, f′=0 ⇒ constant, Lipschitz) | C\* | C (`tao-10.3.4`, `ross-29.2`) |
| 125k | FTC with variable limits | M | C (`lebl-5.3.1`) |
| 125m | Logarithm as an integral: its laws | R | C (`abbott-7.5.8`, `lebl-5.4.4`) |
| 126l | exp (and sin/cos) from power series | M | C (`ross-26.5`, `ross-26.6`) |
| 126q | Computational Taylor / Taylor-limit practice | M | C (`mit20-a11-2`, `mit20-a11-3`) |

With these additions all 4 must-have items are covered, and so is every nice-to-have item in the list above.
Construction of R, Riemann–Stieltjes, bounded variation, Fourier series and Rⁿ compactness remain deliberately out of
the core, and "continuous ⇒ integrable" remains reference-only.

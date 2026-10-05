# Pedagogical audit: learning-path order and reference material

This file summarizes the per-topic reports in `curation/audit/<topic>.md` and the independent
verification pass that followed. Problem order comes from `data/curriculum.yaml`. The reference
material lives in `data/reference/<topic>.yaml`. Positions are Big List numbers (section.position in the
core path). "Old" is the order at commit 7c15010; "new" is the current order. The core has 326 problems
and the upper tier has 37.

## 1. Order changes

Only local moves were made; no topic was reordered globally.

| Problem | Old | New | Mathematical reason | Dependency / pedagogical reason |
|---|---|---|---|---|
| cummings-1.19 ⇄ abbott-1.4.4 | 2.18 / 2.17 | 2.17 / 2.18 | $\sup\{n/(n+1)\}=1$ uses the Archimedean property directly. $\sup(\mathbb{Q}\cap[a,b])=b$ uses density of Q, which is proved from it. | The group now runs Archimedean property → density → roots → density of the irrationals. |
| mit20-a7-3 (Cauchy–Schwarz for series) | 4.9 | 4.25 | Its content is a sharp product inequality obtained by normalizing, not a convergence test. | It was the only medium problem in an easy comparison run, sitting just before the alternating series test. It is now paired with the Cauchy product (lebl-2.6.2) in "products of series", after the failed termwise products (abbott-2.7.8, 2.7.4). Nothing depends on it. |
| ross-13.7 (open sets = countable disjoint unions of intervals) | 5.12 | 5.23 | The proof builds maximal intervals with sup/inf endpoints. These intervals are the connected components. | abbott-3.2.13 (5.21) practises the same sup-endpoint argument first. At 5.12 it was the only hard problem in the limit-point run. Nothing in the core depends on it. |
| abbott-3.5.4, abbott-3.5.6 (Baire in R) | 5.24–5.25 | 5.29, 5.31 | Baire's theorem is a completeness theorem: nested closed intervals inside dense open sets. | It now follows the basic metric-space definitions and "complete metric space" (lebl-7.4.16, 5.28) instead of coming before them. It uses only earlier R material. |
| lebl-3.2.19 (convex ⇒ continuous) | 6.17 | 6.47 | The proof traps $f$ between chords on each side of $c$ (three uses of convexity) and then squeezes. | It needs only one-sided limits (6.2) and the squeeze theorem (6.3). It was the only hard problem in the opening ε–δ run, and now sits with the end-of-unit challenges. |
| lebl-3.6.11 (increasing function, jump at every rational) | 6.43 | 6.45 | Its second half is the concrete form of abbott-4.5.3 (increasing + IVP ⇒ continuous). | It moves within its group to after 4.5.3, lebl-3.6.8 and abbott-4.5.8, so the challenge construction closes the group. |
| lebl-4.4.6 ($x+2x^2\sin(1/x)$, $f'(0)>0$, not invertible near 0) | 7.9 | 7.19 | It is a counterexample to "$f'(c)>0$ ⇒ increasing near $c$", a misreading of the MVT monotonicity test. It does not test abbott-5.2.12. | Counterexamples come after the claim they test. It now sits beside tao-10.3.5: one breaks "interval", the other "on an interval, not at a point". |
| abbott-7.3.7 (finite changes preserve integrability) | 8.10 | 8.6 | It uses only Riemann's criterion and a small-mesh partition. | It is the simplest case of the "few bad subintervals" technique, so it now comes before cummings-8.25 (one discontinuity), which generalizes it. |
| mit20-a11-5 (tagged Riemann sums) | 8.3 | 8.12 | It introduces tagged partitions, mesh and $S_f$, which is the vocabulary of lebl-5.1.13. | It had introduced a notation that nothing used for nine problems. It is now an easy warm-up directly before the theorem it prepares. |
| lebl-5.1.13 (Darboux ⇔ tagged Riemann sums) | 8.4 | 8.14 | A good partition $Q$ spoils at most $\lvert Q\rvert$ subintervals of a fine partition, each costing $\le 2B\delta$. | That technique is practised first in 8.6, 8.8, 8.9 and 8.10. The opening now runs Darboux sums → criterion → Dirichlet-type → closure → monotone → continuous → finer characterizations → Riemann sums, as the brief asked. |
| ross-33.9 ⇄ abbott-7.3.5 | 9.17 / 9.16 | 9.16 / 9.17 | abbott-7.3.5(b) is impossible *because* uniform limits of integrable functions are integrable, which is ross-33.9. | The theorem now comes before its application. Before this swap, the solution to 7.3.5 had to reprove ross-33.9. |
| lebl-7.4.8 (unit ball of $C[0,1]$ not compact) | 9.37 | 9.40 | It is about compactness, read against the completeness of $C[0,1]$. | It now comes after the metric → completeness run (abbott-8.2.2, 8.2.5, ps10-5, lebl-7.5.12) instead of interrupting it. |

Positions that shift only because of these moves are not listed. The bridge insertions are covered in §3.

## 2. Tier change

- **lebl-2.4.3** (in an ordered field $F\supseteq\mathbb{Q}$ with Q dense, Cauchy completeness ⇒
  least-upper-bound property). It moves from **core 3.39 to upper tier**, the first upper-tier Sequences
  problem, before rudin-3.14.
  - **Mathematical reason:** the problem concerns which completeness axiom is primitive in an abstract
    ordered field. It is not a technique for real sequences. It is the hardest core problem in the topic
    ("Challenging" in Lebl).
  - **Dependency reason:** no core problem uses it. ross-10.4 (MCT and the Cauchy criterion fail in Q)
    now closes the Cauchy group. abbott-2.5.4 (3.32) already trains the bisection-to-completeness
    technique.

## 3. Bridge problems added (from the unselected pool)

| Bridge | Position | Why | Prepares |
|---|---|---|---|
| abbott-2.7.13 (Abel's test by summation by parts) | 4.14, before abbott-2.7.14 | Dirichlet's test (2.7.14) asks the learner to reuse "the same strategy". Summation by parts is not practised anywhere else. | The summation-by-parts identity, and the estimate "bounded partial sums × telescoping decreasing differences". |
| abbott-3.5.5 ($\mathbb{R}$ is not a countable union of closed sets with empty interior) | 5.30, after abbott-3.5.4 | abbott-3.5.6 begins "Show how the previous exercise implies…". Without the bridge, that step rested on a quoted, unproved result. | The complement form of Baire, which 3.5.6 uses for $F_\sigma$/$G_\delta$. |
| lebl-5.1.11 (uniform right-endpoint sums converge; the converse fails) | 8.13, after mit20-a11-5 | lebl-5.1.13 needs two new controls at once: over every choice of tags, and over every fine partition. | Control of the tags for uniform partitions. Part (b) shows why 5.1.13 must quantify over all tags. |
| abbott-6.2.13 (diagonal subsequence on a countable set) | 9.44, before abbott-6.2.15 | Part (a) of Arzelà–Ascoli is "use Exercise 6.2.13". The diagonal argument appears nowhere else in the core. | The diagonal-extraction step, so that 6.2.15 trains the equicontinuity ε/3 argument. |

## 4. Reference material

There are 88 items: **63 definitions** and **25 theorems**, down from 98 (65 + 33). Each block prints
before the first core problem that needs it.

| Topic | Def | Thm | Blocks before (current positions) |
|---|---|---|---|
| Foundations | 6 | 2 | 1.4, 1.5, 1.8, 1.9, 1.11, 1.14, 1.20 |
| Real Numbers | 7 | 0 | 2.1, 2.2, 2.5, 2.9, 2.15 |
| Sequences | 8 | 4 | 3.1, 3.10, 3.17, 3.18, 3.24, 3.27, 3.33, 3.37, 3.44 |
| Series | 4 | 2 | 4.1, 4.6, 4.18, 4.22, 4.27 |
| Topology | 14 | 1 | 5.1, 5.7, 5.11, 5.12, 5.20, 5.24, 5.26, 5.28, 5.32, 5.36, 5.37 |
| Continuity | 8 | 6 | 6.1, 6.3, 6.7, 6.11, 6.20, 6.23, 6.28, 6.34, 6.40, 6.48, 6.52 |
| Differentiation | 4 | 3 | 7.1, 7.7, 7.9, 7.12, 7.27, 7.29 |
| Integration | 7 | 4 | 8.1, 8.2, 8.6, 8.8, 8.10, 8.12, 8.22, 8.30, 8.31 |
| Seq. & Series of Functions | 5 | 3 | 9.1, 9.9, 9.13, 9.24, 9.30, 9.36, 9.45 |

**Book conventions flagged in `note:` fields** (so that no problem is contradicted):
- Abbott's "countable" means countably infinite.
- Completeness is an axiom in Abbott and a theorem in Lebl and Rudin.
- Ross writes $n>N$ in the convergence definition.
- Subsequential limits: Ross allows $\pm\infty$, and Tao calls them limit points.
- limsup: Tao's inf–sup form and Rudin's subsequential-limit form.
- Tao calls the term test the zero test.
- Ratio test: Abbott and Lebl state it with lim, Ross with limsup/liminf.
- Closed sets: Abbott defines them by limit points, Ross by limits of sequences.
- Compactness: Abbott, Pugh and MIT use sequential compactness (Pugh's "covering compact" is the open-cover notion); Lebl, Rudin and Ross use open covers.
- Lebl and MIT say "cluster point".
- Abbott and Rudin use "increasing" for non-decreasing.
- Lebl says "relative extremum".
- L'Hôpital: Ross's $\lvert g\rvert\to\infty$ form.
- Taylor: Rudin shifts the index and uses weaker hypotheses.
- Darboux-sum notation: $U(P,f)$ versus $U(f,P)$; integral notation in Lebl, Abbott and Tao.
- FTC: Abbott's and Tao's numbering of the parts.
- Improper integrals: Ross allows $\pm\infty$.
- Pugh says "zero set" for measure zero, and writes $\rightrightarrows$ for uniform convergence.
- Notation for $C[a,b]$ in Lebl, Abbott and MIT.

Deliberately **not** stated, because a core problem proves it: the triangle inequality, the
ε-characterization of sup, the Nested Interval Property, the Cauchy criterion for series, absolute ⇒
convergent, the alternating series test, Cauchy condensation, the open-set characterization of
continuity on R, Heine–Borel in R, differentiable ⇒ continuous, the chain rule, Darboux's theorem, the
Cauchy MVT, monotone ⇒ integrable, integration by parts, the M-test, Dini's theorem, the uniform Cauchy
criterion, the integrable limit theorem, Arzelà–Ascoli and the contraction mapping theorem.

## 5. Verification fixes (made in `data/reference/`)

**A block stated a result that a nearby later problem asks the learner to prove.** These blocks were
moved to just after that problem.
- *Monotone Convergence Theorem:* was before cummings-3.16 (3.17), which proves its decreasing case. Now before cummings-4.3 (3.18). The monotone-sequence definitions stay at 3.17.
- *Bolzano–Weierstrass:* was before lebl-2.3.10 (3.26), whose part (b) is "conclude Bolzano–Weierstrass". Now before abbott-2.5.2 (3.27).
- *Algebraic Limit Theorem:* was before abbott-2.3.9 (3.9), whose part (c) proves the product rule for $a=0$. Merged with the Order Limit and Squeeze theorems into one "limit laws" item before lebl-2.2.3 (3.10).
- *Uniform continuity on compact sets:* was before abbott-4.4.14 (6.27), which asks for a proof of it. Now before abbott-4.4.2 (6.28).
- *Differentiable Limit Theorem:* was before lebl-6.2.2 (9.20). abbott-6.3.7 (9.23) asks for a proof of its first part (Abbott Thm 6.3.2). Now before abbott-6.4.1 (9.24), still before abbott-6.4.7, which uses it.

**Placement.** "Absolute and conditional convergence" moved from 4.4 to 4.1, because tao-7.3.2's quoted
lemma already says "absolutely convergent".

**Notes.**
- Series: "changes the sum" was corrected to "may change the sum". The ratio/root "otherwise no information" sentence was made precise: $\alpha=1$, or $\liminf\le1\le\limsup$ of the ratios.
- Topology: the compactness note now names Pugh as sequential, and Cummings was dropped from the open-cover list because the attribution was unverified. The closed-set note no longer asserts the equivalence flatly as a fact; it points to the exercise below that proves it (mit20-a4-3, mit20-mid-2).
- Continuity: "compositions are continuous" was removed from a note, because abbott-4.3.4(b) asks for it.
- Differentiation: "the interval hypothesis matters" was removed from the MVT note, because it gives away tao-10.3.5.

**Trimmed or merged (98 → 88 items; theorems 33 → 25).**
- Theorems turned into one-line notes:
  - "convergent ⇒ bounded" (on Bounded sequence)
  - "subsequences of a convergent sequence" (on Subsequence)
  - the term test (on Convergent series)
  - uniqueness of decimal expansions (into the Decimal expansion definition)
- The Axiom of Completeness was merged into the least-upper-bound-property definition (the blocks were adjacent, at 2.9 and 2.10).
- Abel's Theorem was merged into "Power series as functions".
- Content zero and measure zero were merged into one paired item.
- Removed:
  - Weierstrass Approximation: the only problem that uses it, rudin-7.20, quotes it verbatim.
  - Contraction: abbott-4.3.11 defines the condition, and lebl-7.6.6 quotes Lebl's definition.

**Checked and correct as written:**
- MVT: continuous on $[a,b]$, differentiable on $(a,b)$; the monotonicity consequences are on an interval.
- Heine–Borel: compact ⇔ sequentially compact in any metric space; ⇔ closed and bounded only in $\mathbb{R}^n$, with the $\min\{1,\lvert x-y\rvert\}$ counterexample.
- Continuous Limit Theorem: pointwise at $c$ under uniform convergence.
- Differentiable Limit Theorem: $f_n$ differentiable on $[a,b]$, $f_n'$ uniform, $f_n(x_0)$ convergent.
- L'Hôpital: $g'\ne0$, with the 0/0 and $\lvert g\rvert\to\infty$ cases.
- Taylor: $n+1$ times differentiable on an open interval, Lagrange remainder.
- FTC: (i) $F$ continuous on $[a,b]$ with $F'=f$ on $(a,b)$, $f$ integrable; (ii) $G'(c)=f(c)$ at points of continuity.
- Abel's theorem, the power-series theorem, IVT, EVT and Riemann's criterion.

## 6. Prerequisites of the moved problems

Every moved problem and every bridge was checked against the current order. Each one's definitions,
theorems and techniques precede it:
- lebl-5.1.11 and lebl-5.1.13 come after the tagged-partition block (8.12).
- abbott-3.5.4–3.5.6 come after "Dense set" (5.20).
- lebl-7.4.8 comes after $C[a,b]$ (9.36) and metric compactness (Topology).
- abbott-6.2.13 needs only Bolzano–Weierstrass.
- abbott-7.3.7 comes after the linearity block and the problems that prove it (cummings-8.5, lebl-5.2.2).

**No order problems were found that require a curriculum change.**

## 7. Local ordering issues considered but intentionally left unchanged

- **Forward use of "R is uncountable" (Foundations):** mit20-a3-3 (1.11) uses it before ross-16.8 (1.20) proves it. The problem allows the fact without proof, and the reference states it with a note. ross-16.8 needs decimal expansions as series, so it stays in the forward-reference closing pair.
- **abbott-1.2.11 (1.2):** it asks the learner to guess the truth of the Archimedean and density statements. The reference states them only at 1.14, and the problem stays with the logic opener.
- **Archimedean property and density in Foundations:** abbott-1.5.6 and 1.5.8 use these Real Numbers facts. They are stated as reference at 1.14 rather than splitting the countability cluster.
- **Sequences:**
  - abbott-2.3.11 and 2.3.13 (Cesàro means, iterated limits) are medium problems at a section boundary, not inside a foundational run.
  - abbott-2.5.4 (NIP ⇒ completeness) stays in the core. It rehearses the bisection proof of Bolzano–Weierstrass.
  - The Cauchy group stays before the limsup group, because the path derives the Cauchy criterion from Bolzano–Weierstrass.
- **"limits and derivatives" (9.20–9.22):** lebl-6.2.2, lebl-6.2.1 and abbott-6.3.4 come before the Differentiable Limit Theorem is stated. They refute the naive claim "uniform convergence passes to derivatives", which each problem poses itself, so a counterexample still follows a stated claim. The correct theorem now prints after abbott-6.3.7 proves it.
- **Series:** lebl-2.5.3 uses $p$-series (stated at 4.6) before Cauchy condensation (4.20), which asks for the general principle. ross-14.12 uses liminf from Sequences.
- **Topology:**
  - abbott-3.2.6(e) mentions the Cantor set before the Cantor group; the set is defined at 5.11.
  - abbott-3.3.5 and 3.3.8 come before abbott-3.3.9, because they use only the sequential form.
  - Connectedness in R (5.21–5.22) stays ahead of the metric definition (5.37), following the topic's R-then-metric structure.
  - lebl-7.4.19 stays last as a flagged forward reference.
- **Continuity:**
  - mit20-a9-6 closes the sequential-criterion group, because part (b) uses the criterion.
  - abbott-4.4.8 (in the IVT group) also uses the EVT, which comes earlier.
  - abbott-4.5.6 and cummings-6.32 are challenge problems placed at the ends of their groups.
  - The metric-space continuity problems stay last.
- **Differentiation:**
  - The Darboux's-theorem group stays after the MVT consequences, to keep the MVT run unbroken.
  - cummings-7.16 (hard) stays in the L'Hôpital group, because ross-30.6 needs its ∞/∞ case.
  - abbott-5.4.7 stays as a forward-looking capstone.
- **Integration:**
  - abbott-7.4.4 ($f>0$ ⇒ $\int f>0$, hard) is a difficulty spike in its group. It has no dependency reason to move, and the brief rules out difficulty-only moves.
  - The $\lvert f\rvert$ and product closure group stays after the characterizations.
  - Thomae (lebl-5.2.11) stays before content zero: the concrete case before the abstract one.
- **Sequences & Series of Functions:** Dini (abbott-6.2.11) stays with the basic theory. abbott-4.3.11 stays in the fixed-point group, paired with lebl-7.6.6. The Cantor function and Arzelà–Ascoli stay last as capstones.
- **Partial duplicates, flagged and kept:** each pair trains a different mechanism or part.
  - mit20-a4-7(b) and abbott-3.2.7(a)
  - cummings-4.5(a) and abbott-2.7.8(a)
  - ross-10.6(b) and lebl-2.5.12
  - ross-18.4 and ross-21.5(a)
  - mit20-a10-3 and mit20-final-7b(i)

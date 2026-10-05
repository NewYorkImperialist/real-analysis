# Coverage audit of the core

The goal of this pass was to finish the **core**, not to expand it. The core should cover a canonical first rigorous
course in real analysis, with no second-course material. Problems are never invented. Every addition is a
book exercise, transcribed verbatim, checked against the page image, and made self-contained by quoting
the results it refers to. The core went from 326 to 330 problems: 4 problems were added and 1 was moved.
Reference items went from 88 to 89: one definition was added and one was extended. PDF numbers below are
positions in the current Big List.

## Items 1–3

### 1. Infinite-valued limits of functions: a hole, now filled

**Before.** No core problem trained the definitions $\lim_{x\to c}f=\pm\infty$ or $\lim_{x\to\pm\infty}f=\pm\infty$.
Three problems were related, but none of them trains the definitions:
- `mit20-a9-6` covers only *finite* limits at $\infty$.
- `cummings-7.16` (L'Hôpital, $\infty/\infty$) uses $f,g\to\infty$ as a hypothesis.
- `ross-30.6` concerns finite limits at $\infty$.

**Added** to Continuity in a new group, *infinite limits and limits at infinity*, before ε–δ continuity. On review,
`mit20-a9-6` (which states the definition of $\lim_{x\to\infty}f=L$) was moved into this group *after* `abbott-4.2.9`,
which asks the learner to construct that definition; the group runs `abbott-4.2.9` (6.6), `mit20-a9-6` (6.7), then:

| PDF | id | source | why |
|---|---|---|---|
| 6.6 | `abbott-4.2.9` | Abbott Ex. 4.2.9 (from the candidate pool) | Prove $\lim_{x\to0}1/x^2=\infty$ from the M–δ definition; write the definitions of $\lim_{x\to\infty}f=L$ and $\lim_{x\to\infty}f=\infty$ |
| 6.8 | `lebl-3.5.4` | Lebl Ex. 3.5.4 (book, p. 148) | Finite vs infinite: diverging to $\infty$ is not converging (negates convergence at $\infty$) |
| 6.9 | `lebl-3.5.6` | Lebl Ex. 3.5.6 (book, p. 148) | Eventual inequalities: monic polynomials tend to $\pm\infty$ at $\pm\infty$, both signs and both directions |

**Reference.** The new definition *Infinite limits and limits at infinity* (Definition 6.3) covers
$\lim_{x\to c}f=\pm\infty$ and $\lim_{x\to\pm\infty}f\in\mathbb{R}\cup\{\pm\infty\}$. It sits in
`data/reference/continuity.yaml`, before `lebl-3.5.4`: that is after `abbott-4.2.9`, which asks you to construct these
definitions yourself. A note records the different conventions: Abbott uses $M>0$, Lebl writes $N$, and Ross phrases
the limits with sequences.

### 2. Continuous image of a connected set: a theorem problem existed; the IVT consequence was missing

**Before.** `lebl-7.5.5` (continuous images of connected metric spaces are connected) was already core, in the
group *continuity on metric spaces*. It is followed by `lebl-7.2.11` and `ross-22.4`. However, no problem derived the
IVT from it. The IVT itself was only a reference theorem.

**Added:**

| PDF | id | source | placement | why |
|---|---|---|---|---|
| 6.37 | `abbott-4.5.1` | Abbott Ex. 4.5.1 (book, p. 139) | first in the group *the IVT*, just before the IVT reference block and `abbott-4.5.7` | "Show how the IVT follows as a corollary to Theorem 4.5.2" |

The problem quotes three of Abbott's theorems verbatim: 4.5.1 (IVT), 4.5.2 (Preservation of Connected Sets) and
3.4.7 (connected subsets of $\mathbb{R}$ are exactly the sets that contain everything between two of their points).
Connectedness in $\mathbb{R}$ is already known at this point (`abbott-3.2.13` and `abbott-3.4.6` in Topology), and so is
continuity. The IVT reference block still prints *after* this problem, so the theorem is never stated just before a
problem that asks you to prove it. The general theorem is proved later at `lebl-7.5.5`. Its solution there uses
preimages of open sets.

### 3. Uniform Cauchy criterion: both directions were already practised; only the placement and the reference changed

- **Both directions.** `abbott-6.2.5` asks you to prove the full "if and only if" of Theorem 6.2.5:
  - (⇒) uniformly convergent ⇒ uniformly Cauchy, by the triangle inequality;
  - (⇐) uniformly Cauchy ⇒ uniformly convergent, by building the pointwise limit from the completeness of
    $\mathbb{R}$ and then letting $m\to\infty$.

  The existing solution does both. **No new problem was needed.**
- **Moved** `abbott-6.2.5` from the old group *uniform Cauchy criterion and Dini* (after *what passes to the limit*) to
  its own group, *uniform Cauchy criterion*, right after *pointwise vs uniform convergence*. It is now 9.9, before
  the Continuous Limit Theorem block and every interchange problem. It needs only the Cauchy criterion for real
  sequences. Dini's theorem (`abbott-6.2.11`) stays where it was, in a group now named *Dini's theorem*.
- **Reference.** The existing definition *Uniformly Cauchy sequence of functions* now also states the **pointwise
  Cauchy** condition, with every quantifier written out ($N$ may depend on $x$). A note says that only the order of
  quantifiers differs. It deliberately does not state the criterion, because the next problem proves it.

## Item 4: checklist

Each topic below lists core problem ids. New problems are marked **(new)**. A "reference" entry means the
statement is printed in the Big List and the listed problems use it.

| Topic | Core problems |
|---|---|
| sup / inf | lebl-1.1.5, lebl-1.1.2, mit20-a3-4, lebl-1.1.6, abbott-1.3.3, abbott-1.3.5, lebl-1.2.9, abbott-1.3.9, abbott-1.3.11, lebl-1.3.5, lebl-1.3.7, cummings-1.19, abbott-1.4.4, mit20-a4-6 |
| completeness of $\mathbb{R}$ | lebl-1.1.14, abbott-1.3.3, mit20-a2-7, cummings-1.22, abbott-2.5.4, ross-10.4 |
| Archimedean property | abbott-1.2.11 (a)(b), cummings-1.19, abbott-1.4.4; reference *Archimedean property and density of Q* (Foundations) |
| density arguments | abbott-1.2.11 (c), abbott-1.4.4, mit20-a3-1, lebl-2.1.17, lebl-3.2.10, lebl-5.3.9 |
| sequence limits | abbott-2.2.2, abbott-2.2.1, abbott-2.2.6, cummings-3.6, abbott-2.3.2, ross-8.7, cummings-3.8, abbott-2.3.9, lebl-2.2.3, lebl-2.2.5, abbott-2.3.12, abbott-2.3.10, abbott-2.3.7, abbott-2.3.11 |
| monotone convergence | cummings-3.16, cummings-4.3, tao-6.3.4, cummings-3.24, abbott-2.4.5, abbott-2.4.6 |
| subsequences | mit20-mid-3b, lebl-2.1.22, abbott-2.5.2, abbott-2.5.5, lebl-2.1.17, ross-11.9 |
| Bolzano–Weierstrass | lebl-2.3.10, abbott-2.5.2, abbott-2.5.5, lebl-2.3.9, lebl-3.1.13 |
| Cauchy sequences | abbott-2.6.1, cummings-3.15, lebl-2.4.7, lebl-2.4.8, abbott-2.6.2, ross-10.4, ross-10.6, lebl-2.5.12, lebl-2.4.2, cummings-3.25, abbott-3.2.5 |
| limsup / liminf | abbott-2.4.7, lebl-2.3.5, mit20-a5-6, mit20-a5-5, lebl-2.3.6, lebl-2.3.7, ross-12.13, tao-6.4.3, ross-22.14 |
| convergence tests | tao-7.2.2, mit20-mid-5a, lebl-2.5.3, abbott-2.7.1, abbott-2.7.13, abbott-2.7.14, abbott-2.7.9, tao-7.5.1, ross-14.10, lebl-2.6.1, lebl-2.5.15, tao-11.6.3, ross-15.3 |
| absolute / conditional convergence | cummings-4.2, lebl-2.5.10, cummings-4.5, abbott-2.7.8, abbott-2.7.4, lebl-2.6.12 |
| rearrangements | cummings-4.18, lebl-2.6.3 |
| power series | mit20-a7-2, mit20-mid-5b, lebl-2.6.10, cummings-9.16, abbott-6.5.5, ross-26.7, abbott-6.5.10, ross-26.8 |
| open / closed sets (in $\mathbb{R}$ and metric spaces) | mit20-a3-5, mit20-a4-1, mit20-a4-2, cummings-5.3, mit20-a4-3, mit20-mid-2, abbott-3.2.6, lebl-7.2.7, lebl-7.2.13, lebl-7.4.16 |
| closure / interior / boundary | mit20-a4-7, abbott-3.2.7, lebl-7.2.7, lebl-7.2.13, lebl-7.2.11 |
| compactness | cummings-5.7, abbott-3.3.5, abbott-3.3.8, abbott-3.3.9, lebl-7.4.2, cummings-5.8, lebl-7.4.6, lebl-7.4.10, pugh-2.93, mit18100b-2006-ps3-7, lebl-7.4.12 |
| completeness (metric) | lebl-7.4.16, lebl-7.4.6, lebl-7.4.19, abbott-8.2.5, mit18100b-f10-ps10-5 |
| connectedness | abbott-3.2.13, abbott-3.4.6, lebl-7.2.10, lebl-7.2.11, ross-22.4, lebl-7.5.5 |
| function limits, finite | mit20-a7-6, abbott-4.2.10, lebl-3.1.3, lebl-3.1.11, lebl-3.1.13, mit20-a9-6 |
| function limits, infinite | **abbott-4.2.9 (new), lebl-3.5.4 (new), lebl-3.5.6 (new)**; then used in cummings-7.16, ross-30.6 |
| continuity | abbott-4.3.2, ross-17.9, lebl-3.2.14, mit20-final-2b, abbott-4.3.6, abbott-4.3.4, mit20-a8-5, abbott-4.3.12 |
| sequential continuity | mit20-a8-2, abbott-4.3.7, lebl-3.2.10, abbott-4.3.13, cummings-9.12 |
| uniform continuity | ross-19.2, lebl-3.4.8, abbott-4.4.10, mit20-a9-5, abbott-4.4.14, abbott-4.4.2, lebl-3.4.15, abbott-4.4.13, ross-19.4, ross-19.1, lebl-3.4.9 |
| continuous images of compact sets | mit20-final-3, abbott-4.4.8, ross-21.5, lebl-7.5.8 |
| continuous images of connected sets | **abbott-4.5.1 (new)**, lebl-7.5.5, cummings-6.33 |
| IVT | **abbott-4.5.1 (new)**, abbott-4.5.7, mit20-final-2a, cummings-6.33, ross-18.12, abbott-4.5.6, abbott-4.5.3, lebl-3.6.8, cummings-6.32, mit20-a11-1 |
| EVT | mit20-final-3, lebl-3.3.11, ross-18.4, lebl-3.3.3, mit20-final-2a, ross-21.5 |
| differentiation | mit20-final-4a, tao-10.1.2, lebl-4.1.11, lebl-4.1.5, abbott-5.2.4, ross-28.4, abbott-5.2.7, abbott-5.2.12 |
| Rolle / MVT | tao-10.2.1, tao-10.2.5, cummings-7.10, mit20-a11-1, ross-29.4, mit20-a10-3, lebl-4.2.10, mit20-a10-1, lebl-4.2.13, tao-10.3.5, cummings-7.14 |
| Darboux's theorem | abbott-5.2.11, lebl-4.2.7 |
| Taylor | mit20-final-5a, mit20-a11-4, ross-31.5, mit20-final-5b |
| Riemann / Darboux integration | lebl-5.1.15, abbott-7.2.3, ross-32.2, cummings-8.5, lebl-5.2.2, abbott-7.3.7, mit20-a11-5, lebl-5.1.11, lebl-5.1.13 |
| integrability of monotone functions | lebl-5.2.14 (proof) |
| integrability of continuous functions | reference theorem *Continuous functions are integrable*; built on by cummings-8.25, abbott-7.3.9 (a), lebl-5.2.11 (see residual note) |
| FTC | lebl-5.3.9, abbott-7.5.2, tao-11.9.3 |
| integration by parts / substitution | lebl-5.3.5, abbott-7.5.10, mit20-final-5b, mit20-final-6c |
| pointwise and uniform convergence | mit20-final-1, lebl-6.1.2, ross-24.12, abbott-6.2.1, lebl-6.1.10, mit20-final-7b, lebl-6.1.5, lebl-6.1.6 |
| uniform Cauchy criterion | abbott-6.2.5 (both directions; moved earlier); used in abbott-6.4.1 |
| uniform limits of continuous functions | cummings-9.12, abbott-6.2.6, ross-24.13 (the same ε/3 argument), ross-24.17; reference *Continuous Limit Theorem* |
| limit–integral interchange | ross-23.9, ross-33.9, abbott-7.3.5, ross-24.9, lebl-6.2.22 |
| convergence of derivatives | lebl-6.2.2, lebl-6.2.1, abbott-6.3.4, abbott-6.3.7, abbott-6.4.7, abbott-6.5.5 |
| Weierstrass M-test | abbott-6.4.1, abbott-6.4.2, abbott-6.4.7 |
| series of functions | abbott-6.4.1, lebl-6.1.14, abbott-6.4.2, abbott-6.4.7, cummings-9.16 |

### Holes found

- **Infinite function limits:** the only real hole. It is filled by item 1.
- **IVT from connectedness:** missing link, filled by item 2.

### Residual notes (left unchanged on purpose)

- **Continuous ⇒ integrable** is stated as a reference theorem and is used heavily. Its uniform-continuity proof is
  not set as an exercise. I searched the candidate pool and all seven books (Abbott, Lebl, Ross, Tao, Cummings,
  Rudin, Pugh) as well as the MIT problem sets, and none of them poses it as an exercise: every source proves it in
  the text (Abbott Thm 7.2.9, Lebl Lemma 5.2.7, Ross Thm 33.2, Cummings Thm 8.15, Tao Thm 11.5.1). Since problems
  are never invented, it stays a reference theorem. The nearest practice is `cummings-8.25` and
  `abbott-7.3.9` (a), which extend the theorem to functions with small discontinuity sets.
- **Archimedean property / density of $\mathbb{Q}$** are reference theorems in Foundations, not proved as exercises.
  `abbott-1.2.11` (a)–(c) has the learner state and justify exactly these quantified statements. Many later problems
  apply them.

## Files changed

- `curation/candidates/coverage-additions.yaml` (new): candidate entries for `abbott-4.5.1`, `lebl-3.5.4` and
  `lebl-3.5.6`, transcribed and audited against the page images. These are Abbott pdf 117/147/150 and Lebl pdf
  145–148.
- `curation/candidates/abbott-ch3-4.yaml`: `abbott-4.2.9` marked as audited.
- `data/problems/abbott.yaml` and `data/problems/lebl.yaml`: the 4 problems, with titles. `abbott-4.2.9` also quotes
  Definition 4.2.1 verbatim.
- `data/curriculum.yaml`: the placements above, plus the move of `abbott-6.2.5`.
- `data/reference/continuity.yaml`: the new definition. `data/reference/function-sequences.yaml`: the extended
  uniformly Cauchy definition.
- `data/solutions/coverage.yaml` (new): 2–3 graded hints and a full solution for each new problem.
- `README.md`, `curation/README.md` and `curation/UNSELECTED.md`: counts updated, and `abbott-4.2.9` removed from the
  unselected index.

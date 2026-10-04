# Upper-Tier Shortlist (Pugh, Rudin, MIT 18.100B), for approval

Inputs: 141 candidates in 11 files (`curation/candidates-upper/*.yaml`). Every "bank lacks X" claim below
was checked against `src/generated/bank.json`, searching problemLatex, concept and tags.
Machine-readable version: `curation/selections-upper.yaml`. Trims are listed there and marked † here.

## (a) Upper tier: 33 items

| id | topic | diff | what's new |
|---|---|---|---|
| rudin-3.14 † (c)–(e) | sequences | hard | Positive, unbounded sequence with Cesàro means → 0; Hardy's Tauberian theorem (\|n a_n\| ≤ M) |
| pugh-prelim-63 | series | hard | No slowest convergent series: build c_n → ∞ with Σ c_n a_n < ∞ from the tails |
| pugh-3.73 | series | hard | Mertens: Cauchy product when only one factor is absolutely convergent, plus a divergent conditional example |
| pugh-3.68 | series | medium | Infinite products. Without sign conditions, Σa_k and ∏(1+a_k) converge independently (bank has no products) |
| rudin-4.17 † | continuity | hard | An *arbitrary* f has at most countably many simple discontinuities (bank: monotone case only) |
| rudin-4.19 | continuity | hard | Fine's theorem: the IVP plus closed rational level sets gives continuity |
| rudin-4.5 | continuity | medium | Tietze on R: extend from a closed set across the complementary intervals; closedness is needed |
| pugh-2.44 | continuity | medium | Graph closed / compact versus continuity; a discontinuous f with closed graph |
| pugh-4.20 † (a) | continuity | hard | Classify uniform continuity of x^α sin(x^β): amplitude against frequency (answer: α+β ≤ 1) |
| rudin-5.15 † (+5.16) | differentiation | hard | Landau M₁² ≤ 4M₀M₂ by optimizing the Taylor step, with the sharp example; then f → 0, f'' bounded ⇒ f' → 0 |
| rudin-5.17 | differentiation | medium | Two-sided Taylor trick forces f''' ≥ 3 somewhere (sharp) |
| rudin-5.21 | differentiation | hard | Open question: every closed E ⊂ R is the zero set of a C^∞ function (bumps plus a weighted series) |
| rudin-5.26 | differentiation | medium | \|f'\| ≤ A\|f\|, f(a)=0 ⇒ f ≡ 0: bootstrap on short intervals (Gronwall-type, with no ODE theory) |
| pugh-1.32 † (b) | differentiation | hard | Convex ⇒ differentiable off a countable set (monotone one-sided derivatives plus countable jumps) |
| pugh-prelim-45 | integration | medium | Barbalat: ∫₀^∞ f converges and f is uniformly continuous ⇒ f → 0 |
| pugh-prelim-56 | integration | hard | f + ∫₀ˣ f → L ⇒ f → 0 (a hidden first-order ODE / integrating factor) |
| pugh-prelim-7 | integration | hard | One-sided limits everywhere ⇒ Riemann integrable (compactness on one-sided neighbourhoods) |
| rudin-7.16 | fn-sequences | medium | Equicontinuous + pointwise convergent on a compact set ⇒ uniform (bank has only Arzelà–Ascoli) |
| rudin-7.13 | fn-sequences | hard | Helly selection, with uniform convergence on compacts when the limit is continuous |
| rudin-7.10 | fn-sequences | hard | Σ(nx)/n²: locate its countable dense set of discontinuities; still integrable |
| pugh-prelim-28 | fn-sequences | medium | Polynomials of degree ≤ 10: pointwise ⇒ uniform, even off [0,1] (finite dimension / Lagrange) |
| mit18100b-2006-ps10-x1 | fn-sequences | hard | No metric on C[0,1] induces pointwise convergence (diagonal impossibility) |
| pugh-3.23 + 3.25 † | fn-sequences | very-hard | Baire class 1 ⇒ continuity points are dense; hence a derivative is continuous on a dense set |
| pugh-4.37 † (a)(b) | fn-sequences | very-hard | Borel's lemma: a smooth f with any prescribed derivatives at 0 |
| pugh-prelim-31 | topology | hard | An isometry of a compact metric space into itself is onto |
| pugh-2.49 | topology | hard | Construct A ⊂ R and a continuous bijection A → A that is not a homeomorphism |
| pugh-2.76 | topology | hard | Nested closed connected sets (no) vs compact (yes) vs compact path-connected (no) |
| pugh-2.78 | topology | medium | ε-chain connectedness: equal to connectedness under compactness, not under completeness |
| pugh-prelim-43 | topology | very-hard | [0,1] is not a countably infinite disjoint union of closed intervals (endpoint set is perfect, then Baire) |
| pugh-2.148 | topology | hard | Closure/complement chains: at most 14 sets; find the stabilizing identity and an extremal set |
| rudin-2.27 † (+2.28) | topology | hard | Condensation points via a countable base; Cantor–Bendixson in R^k |
| rudin-4.25 | topology | medium | K + C closed (compact + closed); Z + αZ is dense, so closed + closed need not be closed |
| pugh-4.27 † | topology | medium | Weak contractions: not contractions in general, but on a compact space they have a unique fixed point (minimize d(x, fx)) |

Balance: 4 sequences/series · 5 continuity · 5 differentiation · 3 integration · 7 function sequences · 9 topology.
Difficulty: 11 medium · 19 hard · 3 very-hard.

## (b) Core gaps: 6 items (verified in bank.json)

| id | diff | what the bank lacks (verified) |
|---|---|---|
| mit18100b-2006-ps3-7 | medium | **Lebesgue number lemma.** Searching "Lebesgue number" returns 0 hits. The closest item is abbott-4.4.14, an open-cover proof of uniform continuity that never isolates the lemma. Chosen over pugh-prelim-55, which covers only R^m and a sequence of balls. |
| pugh-2.93 + 2.94 † | easy-medium | **FIP ⇔ compactness.** "finite intersection" appears only in the open-set axioms (mit20-a3-5, cummings-5.3). The bank has nested compact sets (lebl-7.4.10) but not the closed-family duality. |
| rudin-5.14 | medium | **Convex ⇔ f' increasing ⇔ f'' ≥ 0.** The only convexity problem in the bank is lebl-3.2.19 (convex ⇒ continuous). |
| rudin-7.20 † | medium | **Weierstrass approximation, used in a proof.** The bank never proves or applies WAT. It has only ross-27.3 (no uniform polynomial approximation on R) and abbott-6.7.2 (polygonal approximation). ross-27.4 and abbott-6.7.11 are unselected. |
| rudin-3.19 | medium | **Cantor set = {Σ a_n 3^{-n} : a_n ∈ {0,2}}.** Searching "ternary" or "base 3" returns 0 hits. abbott-3.3.7 (C+C) and abbott-6.2.12 (Cantor function) work from the C_n construction and never prove this description. |
| mit18100b-f10-ps10-5 † | medium | **(C[a,b], L¹) is incomplete.** abbott-8.2.2 only checks that d₁ is a metric. The only incompleteness example is abbott-8.2.5 (C¹ with the sup metric). |

Runners-up I did not take: pugh-1.18 (decimal expansions; the bank has none, but it is mostly bookkeeping) and
mit18100b-s25-ps1-5 (a non-Archimedean ordered set; easy). lebl-1.1.14 is already close to it. Either can be added if you want them.

## (c) Borderline (out of scope or new machinery; your call)

- **rudin-7.25**: Peano ODE existence (Euler polygons + Arzelà–Ascoli). ODE theory.
- **mit18100b-s25-ps9-5**: ODE uniqueness via the integral equation. ODE theory. rudin-5.26 (upper) covers the same bootstrap idea without ODEs.
- **pugh-3.22, 3.34, 3.38, 3.44, 3.47**: need zero sets and/or the Riemann–Lebesgue (Lebesgue) criterion. The bank has only *content* zero (abbott-7.3.9) and no Lebesgue criterion.
- **pugh-3.29**: the interval is not a zero set. It is self-contained (a good minimal-counterexample argument), but it introduces measure zero, which the bank does not use anywhere.
- **pugh-3.50**: inverse of an integrable bijection. **The answer is verified: NO.** Take an increasing homeomorphism h:[a,b]→[c,d] that carries the middle-thirds Cantor set C onto a fat Cantor set F, and carries gaps to gaps. Let σ: C→C swap C∩[0,1/3] with C∩[2/3,1], so σ has no fixed points. Put f = h on the gaps and f = h∘σ on C. Then f is a bijection, continuous off C, and so integrable. Its inverse equals h⁻¹ on the dense gaps of F but differs from h⁻¹ at every point of F, so it is discontinuous on all of F, which has positive length. The disproof therefore needs the Lebesgue criterion and fat Cantor sets, so it belongs with the measure-zero group. Include it only if that group is accepted.
- **rudin-7.14**: space-filling curve. Excluded per brief.
- **pugh-2.149**: Moore's T theorem. Plane geometric topology.
- **pugh-2.102**: no Peano curve is injective. Needs "removing a point does not disconnect a planar set with interior". Planar topology.
- **pugh-1.47**: parallelogram law ⇒ inner product. Inner-product spaces.
- **mit18100b-2006-ps6-x2**: Σ1/p diverges (Erdős). Number theory.
- **pugh-4.37(c)**, as a part rather than an item: a smooth function with Taylor radius 0 everywhere. Trimmed out of pugh-4.37.

## (d) Overlap resolutions

- **Countable simple discontinuities:** kept rudin-4.17 over pugh-3.36 and pugh-prelim-47. It is the strongest statement (arbitrary f). prelim-47 assumes one-sided limits everywhere, and 3.36 adds only easy examples.
- **Cantor–Bendixson / perfect sets:** kept rudin-2.27 with 2.28 folded in, over pugh-2.137, 2.150 and 2.151. It works in concrete R^k with a countable base. The Pugh versions rely on general separable complete spaces and on the Cantor surjection theorem (2.151). rudin-2.18 (perfect set with no rationals) was cut for balance.
- **Completion:** dropped rudin-3.24, rudin-7.24 and pugh-4.39 (7.24 and 4.39 are the same Kuratowski embedding). If you want one, rudin-7.24 is the best stated: short and self-contained.
- **No slowest/fastest series:** kept pugh-prelim-63 over rudin-3.12, which is the guided version of the same idea; its hint can become a hint. rudin-3.11 (the divergent dual) was dropped as the same idea.
- **Lebesgue number:** kept mit18100b-2006-ps3-7 as a core gap over pugh-prelim-55 (narrower). Dropped pugh-2.86 (easy side remark).
- **Convexity:** rudin-5.14 is a core gap. It covers the f'' part of pugh-1.30, and 1.30(b) duplicates lebl-3.2.19. Kept pugh-1.32(b), prefaced with 1.30(c), as the upper item. Dropped rudin-4.24 (midpoint convexity; MIT-assigned, but a third convexity item).
- **Landau:** kept rudin-5.15 (MIT-assigned, sharp example) and folded in 5.16. Dropped pugh-prelim-50 (the same inequality on R).
- **Weak contractions:** kept pugh-4.27 over pugh-prelim-38 (identical to 4.27(c)). pugh-4.28 is an optional part (d).
- **FIP:** pugh-2.93 and 2.94 are merged into one iff item.
- **Equicontinuity / Lipschitz families:** kept rudin-7.16 (MIT-assigned) over mit18100b-s25-ps10-5 (its common-Lipschitz special case) and f10-finprac-8 (weaker). Dropped rudin-7.15 and pugh-4.9 (the f(nx) "aha"; 7.15 would be the one to restore) and pugh-4.21, for balance.
- **Baire on functions:** pugh-3.23 and 3.25 are kept as one merged item.
- **[0,1] as a disjoint union of closed intervals:** pugh-2.prelim-9 and pugh-prelim-43 are the same problem; kept prelim-43.
- **USC extreme value theorem:** pugh-2.prelim-7 and pugh-prelim-53 are the same problem. Both dropped as a modest variation of the EVT.
- **Graph and continuity:** kept pugh-2.44 over rudin-4.6 (MIT-assigned) and pugh-prelim-62. 2.44 contains both of them plus the closed-graph counterexample.
- **Open maps:** rudin-4.15 and pugh-2.prelim-8 are the same problem (open continuous ⇒ monotone), and pugh-2.28 subsumes them. All three were cut for balance; restore pugh-2.28 if you want one.
- **Difference quotients:** rudin-5.19 and pugh-3.12 are the same problem. Both were cut: the straddling case is close to the bank's symmetric-derivative items. Restore rudin-5.19 if you want it.
- **Smooth zero sets:** kept rudin-5.21 (open-ended) over pugh-3.18 (hinted version of the same problem).
- **Countable/connected metric spaces:** pugh-2.59 and rudin-2.19(d) are the same fact. Both were cut for balance; restore pugh-2.59 (cleaner) if you want it.
- **Kronecker density:** kept rudin-4.25 over pugh-2.115 and mit18100b-s25-ps4-5, because it pairs the density argument with a closedness question.
- **Helly / Pólya:** kept rudin-7.13 (MIT-assigned). Its part (b) is pugh-prelim-59.
- **Moments:** pugh-prelim-60 is an easy corollary of rudin-7.20 (apply it to x²f). Dropped.
- **Compact-preserving ⇒ continuous:** pugh-2.prelim-1 and 2.prelim-4 are the same idea. Both were cut; 2.prelim-4 is also R²-flavoured.
- **Converses of compactness:** dropped pugh-2.118 and 2.121, which are close to ross-21.5 (in the bank) and to lebl-7.4.12.

**Also cut** (in scope, lower value or for balance): pugh-1.43, 2.13, 2.31, 2.40, 2.42, 2.53, 2.70, 2.85, 2.109, 2.140, 2.147 (Hausdorff metric, a strong very-hard alternate), 2.prelim-2/5/11/14, 3.59, 3.66, 4.6, 4.38, prelim-1, prelim-5, prelim-22 (bare WAT proof; very-hard; use a guided version if you want WAT proved), prelim-46, prelim-66, rudin-2.13, 2.17, 2.18, 2.21, 2.26, 3.17, 5.13, 6.13, 6.15, and mit18100b f10-ps8-5, f10-prac3-4e, 2006-ps7-x1, 2006-ps8-1, 2006-ps10-5.
**Correction:** pugh-prelim-3 (a "direct method" maximizer) is trivial. Maximizing pointwise gives u(x) = −x, which lies in E, so Arzelà–Ascoli is not needed. Dropped.

## (e) Counts

- Candidates: 141
- Upper: **33 items** (34 cids, because pugh-3.23 and 3.25 merge)
- Core gap: **6 items** (7 cids, because pugh-2.93 and 2.94 merge)
- Borderline: **14 items**, plus the pugh-4.37(c) part
- The remaining 86 cids were dropped as overlaps or cuts (listed above)

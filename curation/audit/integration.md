# Integration: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Integration = 8.x); "new" positions refer to
`order-integration.yaml`, and bare numbers inside the reasons are new positions. No tier changes.

## Changes

### lebl-5.1.13 (Darboux integral ⇔ tagged Riemann sums with mesh → 0): moved substantially later
- **Old:** 8.4, inside the opening "Darboux sums from the definition" group. **New:** 8.13, the last problem
  of a new group "Riemann sums and the Darboux integral". It comes right after the whole
  "which functions are integrable" cluster and before the absolute values, products and inequalities group.
- **Mathematical reason:** this is the hardest problem in the opening run ("hard"; the hard step is
  Lebl's "Challenging" 5.1.12). It is a finer characterization of integrability, not a first use of the
  definition. The proof of "integrable ⇒ every δ-fine partition has U and L within ε of the integral" works
  like this: fix a good partition $Q$ with $m$ points. For a fine partition $P$, only the at most $m$
  subintervals of $P$ containing a point of $Q$ behave badly, and each costs at most $2B\delta$. The other
  subintervals are refined by $P\cup Q$. The converse squeezes Riemann sums between $L$ and $U$ by choosing tags.
- **Dependency reason:** the "few bad subintervals of small mesh, controlled by the sup bound" technique is
  what abbott-7.3.7(a) (finite changes, now 8.6), cummings-8.25 (one discontinuity, 8.8), lebl-5.2.11
  (Thomae, 8.9) and abbott-7.3.9(a) (content zero, 8.10) practise first. At 8.4 the learner met it cold,
  with only one Darboux computation behind them. No later problem uses lebl-5.1.13, so moving it breaks
  nothing. The new opening follows the brief: Darboux sums and the criterion (lebl-5.1.15, abbott-7.2.3)
  → Dirichlet-type non-example (ross-32.2) → closure (cummings-8.5, lebl-5.2.2, abbott-7.3.7) → monotone ⇒
  integrable (lebl-5.2.14) → continuous ⇒ integrable, used in cummings-8.25 → finer characterizations
  (Thomae, content zero, measure zero) → Darboux ⇔ Riemann sums.
- **Why not later still:** the remaining groups (|f|, products, mean value inequalities, FTC, improper
  integrals) do not train the mesh argument. Putting it after the FTC would separate it from the
  partition-technique problems it builds on. The other placement considered was the end of the
  "absolute values, products, inequalities" group (just before the FTC). That is also defensible, but it
  puts five unrelated problems between the content-zero technique and its use.

### mit20-a11-5 (tagged Riemann sums of $\alpha x+\beta$, mesh): moved with lebl-5.1.13
- **Old:** 8.3. **New:** 8.12, immediately before lebl-5.1.13.
- **Mathematical reason:** this is the only problem that introduces tagged partitions, the mesh
  $\|\underline{x}\|$ and Riemann sums $S_f$. That is exactly the vocabulary of lebl-5.1.13. Its
  computation (a sum of the form $\sum k$) is the same as abbott-7.2.3(b,c), which stays at 8.2. So the
  opening loses no elementary example, only a duplicate computation in different notation.
- **Pedagogical reason:** it is an easy warm-up with Riemann sums right before the hard theorem about them.
  At 8.3 it introduced a second integral notation (tagged sums) that nothing used for nine problems.

### abbott-7.3.7 (finite changes preserve integrability; countable changes need not): moved earlier
- **Old:** 8.10. **New:** 8.6, end of "first consequences of the criterion".
- **Mathematical reason:** part (a) uses only Riemann's criterion, boundedness and a small-mesh partition.
  Part (b) uses the Dirichlet function (ross-32.2, 8.3). It does not use monotone or continuous ⇒ integrable.
- **Dependency/pedagogical reason:** it is the simplest instance of the "few bad subintervals" technique.
  cummings-8.25 (one discontinuity, 8.8) generalizes it by adding continuity. So it should come before
  cummings-8.25, not after. It is an elementary closure-type fact (integrability is unaffected by finitely
  many values), which the brief's opening order puts before monotone ⇒ integrable.

## Proposed bridges (not added)
- **lebl-5.1.11** (strong, medium; "right-endpoint Riemann sums over uniform partitions converge to the
  integral; converse fails"). **Where:** between mit20-a11-5 and lebl-5.1.13 (new 8.12/8.13). **Why:**
  lebl-5.1.13 needs two new things at once: controlling *every* tag choice, and controlling *every* fine
  partition rather than one good one. lebl-5.1.11 practises the first for uniform partitions only, and its
  "converse fails" part shows why the hypothesis in 5.1.13 must quantify over all tags. **Prepares:**
  the forward direction of 5.1.13 and the role of the tags.
- Alternative or addition: **abbott-7.2.6** (consider, medium; "Riemann's definition (tagged sums) implies
  Darboux integrability"). This is the easier (converse) direction of lebl-5.1.13 on its own. It would split
  the hard problem into a medium step and a hard step. Recommend it only if lebl-5.1.13 still proves too
  big a jump.

## Possible duplicates / overlaps (flagged, not removed)
- mit20-a12-1(a) and ross-34.12 share the core lemma "continuous, nonnegative, zero integral ⇒ $f\equiv0$".
  They are not duplicates: ross-34.12 reduces to $f^2$, and mit20-a12-1(b) is an energy argument via
  integration by parts. Keep both.
- mit20-a11-5(b) and abbott-7.2.3(b,c) compute the same integral, by tagged sums and by Darboux sums
  respectively. These are different mechanisms; keep both (now 8.12 and 8.2).

## Reference material (`data/reference/integration.yaml`)

| before | items |
|---|---|
| lebl-5.1.15 (8.1) | Partition and refinement; Upper and lower Darboux sums (note: $U(P,f)$ vs $U(f,P)$); Riemann integrable function (note: boundedness, Lebl/Abbott/Tao notation) |
| abbott-7.2.3 (8.2) | Theorem: refinement lemma and Riemann's criterion |
| abbott-7.3.7 (new 8.6) | Theorem: linearity, additivity, monotonicity (placed after cummings-8.5 and lebl-5.2.2, which prove parts of it) |
| cummings-8.25 (new 8.8) | Theorem: continuous functions are integrable |
| abbott-7.3.9 (new 8.10) | Content zero; Measure zero (paired; note: Pugh's "zero set") |
| mit20-a11-5 (new 8.12) | Tagged partition, mesh and Riemann sum (note: $L\le S\le U$; MIT notation) |
| lebl-5.3.9 (8.21) | Theorem: Fundamental Theorem of Calculus (note: Abbott vs Tao numbering of the parts) |
| lebl-5.4.6 (8.29) | Natural logarithm as an integral |
| ross-36.3 (8.30) | Improper integral (note: Ross allows $\pm\infty$) |

Not stated on purpose: monotone ⇒ integrable (lebl-5.2.14 proves it); integrability of $|f|$ and $fg$
(problems); integration by parts and change of variables (lebl-5.3.5 and abbott-7.5.10 prove them); the
integral test (tao-11.6.3 proves it); Lebesgue's criterion (no core problem needs it).

## Local ordering issues considered but intentionally left unchanged
- **abbott-7.4.4** ($f>0$ ⇒ $\int f>0$, hard) sits in an otherwise medium inequalities group, so it is a
  difficulty spike. It stays: it needs integrability on subintervals and additivity (8.4, 8.5), and its
  nested-interval argument is self-contained. No core problem depends on it, and moving it would only
  satisfy a monotone-difficulty ordering, which the brief rules out.
- **The |f| / products group (lebl-5.2.15, ross-33.4, abbott-7.4.6)** are closure properties, which the
  brief's sketch puts before monotone ⇒ integrable. They stay after the characterizations. They use an
  oscillation identity that the opening problems do not need. Moving them forward would be a larger
  reorder than the dependencies justify, and nothing between depends on them.
- **lebl-5.2.11 (Thomae)** before **abbott-7.3.9 (content zero)**: Thomae could be done as a corollary of
  content zero. The direct proof (finitely many points with $f\ge 1/K$) is the concrete version of the
  same technique, so concrete-before-abstract is kept.
- **cummings-8.25** relies on continuous ⇒ integrable, which no problem proves. It is a standard theorem,
  now stated in the reference block right before it.
- **tao-11.9.3** has a known endpoint caveat (documented in its notes and solution). Its position is fine.
- **ross-15.3** (integral test for $\sum 1/(n(\log n)^p)$) uses substitution and the integral comparison
  after tao-11.6.3 proves the integral test. Correct order.
- **lebl-5.5.10** (unbounded continuous integrable on $[0,\infty)$) after ross-36.8: both use the improper
  integral. The counterexample comes after the positive result. Fine.

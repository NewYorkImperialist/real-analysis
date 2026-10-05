# Series: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Series = 4.x). New positions refer to
`curation/audit/order-series.yaml`.

## Changes

### mit20-a7-3 (Cauchy–Schwarz for series): moved later, into a new "products of series" group
- **Old:** 4.9, the last problem of the "comparison" group. **New:** 4.24, the first problem of the
  renamed group "products of series (Cauchy–Schwarz, Cauchy products)", just before lebl-2.6.2.
  Problems 4.10–4.24 each move up one place.
- **Mathematical reason:** the problem uses only the Comparison Test (with $|ab|\le\frac{a^2+b^2}{2}$)
  and the triangle inequality for series (lebl-2.5.10). But its real content is a sharp inequality
  for the product series $\sum x_ny_n$ after a normalisation trick ($a=x_n/\sqrt A$, $b=y_n/\sqrt B$).
  That is a different skill from the convergence tests the comparison group drills. As 4.9 it is the
  only medium problem in an otherwise easy run, and it comes between the comparison drills (lebl-2.5.3,
  ross-14.12) and the alternating series test.
- **Dependency reason:** no later problem uses it. At 4.24 it is the termwise product
  ($\sum x_ny_n$, controlled by $\sum x_n^2,\sum y_n^2$). The next problem, lebl-2.6.2, is the Cauchy
  product (controlled by $\sum|a_n|,\sum|b_n|$). Both bound a product series by products of sums of
  nonnegative terms, so they make a coherent pair. By then the learner has also seen the termwise
  products that fail (abbott-2.7.8(b), abbott-2.7.4(a)(b)), so the positive result answers a question
  the path has already raised.

No other order changes.

## Reference material (`data/reference/series.yaml`)

| before | items |
|---|---|
| tao-7.3.2 (4.1) | Convergent series (partial sums; note: finitely many terms do not matter); Theorem: Term test (note: Tao's "zero test") |
| cummings-4.2 (4.4) | Absolute and conditional convergence |
| mit20-mid-5a (4.6) | Theorem: Comparison test, $p$-series, geometric series (note: nonnegative series converge iff partial sums are bounded) |
| ross-14.10 (4.17) | Theorem: Root and ratio tests in limsup/liminf form (note: Abbott/Lebl state the ratio test with lim) |
| mit20-a7-2 (4.21) | Power series and radius of convergence $R=1/\limsup|a_n|^{1/n}$ (Lebl's definition, used by lebl-2.6.10) |
| cummings-4.18 (4.26) | Rearrangement of a series |

4 definitions, 3 theorems. Results that a core problem asks the learner to prove are deliberately not
stated before that problem: the Cauchy criterion for series (tao-7.2.2), absolute ⇒ convergent
(cummings-4.2), the alternating series test (abbott-2.7.1), the ratio test with lim (abbott-2.7.9), and
Cauchy condensation (lebl-2.5.15). The geometric series is listed only after tao-7.3.2 proves it.
Root and ratio tests come after abbott-2.7.9, because ross-14.10 is the first problem that needs the
limsup/liminf form and the root test.

## Proposed bridges

- **abbott-2.7.13 (Abel's Test via summation by parts; strong, medium), before abbott-2.7.14 (4.14).**
  abbott-2.7.14 (Dirichlet's Test) asks the learner to "show that essentially the same strategy [as
  Abel's Test] can be used". The bank has only a summary of that strategy, and summation by parts is a
  technique practised nowhere else on the path. abbott-2.7.13 is the same book's set-up exercise: it
  derives the summation-by-parts identity and uses it in the easier case where $\sum x_k$ converges.
  It prepares the identity and the "bounded partial sums × telescoping decreasing differences" estimate.
- (Optional, weaker) **tao-8.2.4 (positive and negative parts of a conditionally convergent series both
  diverge; consider, easy), before lebl-2.6.3 (4.27).** Step 1 of the Riemann rearrangement proof is
  exactly this lemma. The hard problem would then be only the greedy construction. Not essential,
  because cummings-4.18 and the hints already cover it.

## Possible duplicates (flagged, not removed)

- cummings-4.5(a) and abbott-2.7.8(a) have the same mechanism: terms eventually below 1, so
  $a_n^2\le|a_n|$, then comparison. The statements differ slightly (positive terms and convergence, versus
  absolute convergence). The other parts differ: cummings-4.5(b) is the $(-1)^k/\sqrt k$ counterexample,
  and abbott-2.7.8(b)(c) are other claims. Keep both. This is only a partial overlap.

## Local ordering issues considered but intentionally left unchanged

- **lebl-2.5.3 (4.7) uses the $p$-series test before Cauchy condensation (lebl-2.5.15, 4.19).** The
  $p$-series test is standard (Abbott proves it in §2.4) and is stated in the reference block at 4.6.
  lebl-2.5.15 asks for the general condensation principle, not the $p$-series, so it is not a
  prerequisite.
- **ross-14.12 (4.8) uses liminf.** liminf is defined in Sequences, so it may stay in the
  comparison group, where its mechanism (dominating by $2^{-k}$) belongs.
- **Summation by parts (abbott-2.7.14, 4.14) before ratio/root tests.** It follows the alternating
  series test, which it generalises (part (b)), so it stays where it is. See the bridge above.
- **Condensation and decreasing terms (lebl-2.5.15, lebl-2.5.7) after ratio/root.** Both are medium
  "challenging" proofs. Placing them after the routine tests is a difficulty tie-break with no
  dependency cost.
- **lebl-2.6.10 (4.23) uses the root-test definition of the radius of convergence.** It is defined in
  the reference block at 4.21 and follows the root test (4.17).
- **lebl-2.6.3 (Riemann rearrangement, hard) at the end of core.** It is a construction after its
  positive counterpart, cummings-4.18, which is the right place.

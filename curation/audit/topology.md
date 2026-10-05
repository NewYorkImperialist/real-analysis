# Topology: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Topology = 5.x). New positions refer
to `curation/audit/order-topology.yaml`.

## Changes

### ross-13.7 (every open set in R is a countable disjoint union of open intervals): moved later, still core
- **Old:** 5.12, the last problem of "limit points and closure". **New:** 5.23, in its own group
  "structure of open sets in R", after connectedness in R (abbott-3.2.13, abbott-3.4.6) and before
  metric spaces.
- **Mathematical reason:** the proof builds the maximal open interval around each rational of $U$ as
  $(\inf\{a:(a,q]\subseteq U\},\ \sup\{b:[q,b)\subseteq U\})$. It shows the finite endpoints are not in
  $U$, that two such intervals are equal or disjoint, and that there are countably many. This is the
  sup/inf-endpoint argument for open sets that abbott-3.2.13 (only clopen sets are ∅ and R, 5.21)
  practises first, in an easier form. The maximal intervals are the connected components of $U$, so
  the result belongs with connectedness, not with limit points.
- **Dependency reason:** at 5.12 it was the only hard problem in a run of easy/medium limit-point
  problems, and it interrupted the move from closure to compactness. No core problem depends on it
  (Rudin's version is cited only by the upper-tier rudin-4.5 in Continuity). Keeping it in the core is
  justified: the structure theorem for open subsets of R is standard, and with the sup technique
  practised just before, it is no longer a spike.

### abbott-3.5.4, abbott-3.5.6 (Baire category in R): moved after basic metric spaces and completeness
- **Old:** 5.24–5.25, before the first metric-space problem. **New:** 5.29–5.30, after "metric spaces"
  (lebl-7.1.5, lebl-7.3.2, lebl-7.2.7, lebl-7.2.13) and "completeness" (lebl-7.4.16), before
  "compactness in metric spaces".
- **Mathematical reason:** Baire's theorem is a completeness theorem. abbott-3.5.4 proves it in R by
  nesting closed intervals inside successive dense open sets and applying the Nested Interval Property.
  This is the same mechanism that holds in every complete metric space. Placing it right after
  "complete metric space" (and the closed-subspace completeness exercise) makes that connection
  explicit. Before the move, the most advanced R-only material came before the most basic definitions
  of the metric-space unit (metric, balls, boundary, convergence), which is the problem the brief flags.
- **Dependency reason:** the Baire problems use only R material from earlier (open, closed, dense,
  nested intervals, $F_\sigma$/$G_\delta$ as quoted). No problem between 5.24 and 5.28 uses them, so
  the move breaks nothing. The basic metric-space definitions now come straight after the R material
  they generalise.

No tier changes.

## Reference material (`data/reference/topology.yaml`)

| before | items |
|---|---|
| mit20-a3-5 (5.1) | Open and closed sets in R (ε-neighbourhoods; note: Abbott's limit-point and Ross's sequential definitions of closed agree with complement-open) |
| mit20-a4-7 (5.7) | Limit point and isolated point (note: Lebl/MIT "cluster point"); Closure of a set in R |
| abbott-3.2.6 (5.11) | Cantor set (first used in 3.2.6(e), before the Cantor group) |
| cummings-5.7 (5.12) | Sequentially compact set (note: this is Abbott's/MIT's "compact"); Compact set via open covers (note: Lebl, Rudin, Ross, Cummings; same in metric spaces) |
| rudin-2.17 (5.20) | Dense set (also used by Baire, 5.29) |
| lebl-7.1.5 (5.24) | Metric space (with Euclidean metric, subspace metric); Open and closed sets in a metric space (balls $B$, $C$ as in lebl-7.2.13); Convergence and boundedness in a metric space |
| lebl-7.2.7 (5.26) | Interior, closure and boundary |
| lebl-7.4.16 (5.28) | Complete metric space (Cauchy sequence in a metric space; contrast with convergent) |
| lebl-7.4.6 (5.31) | Theorem: Heine–Borel (compact ⇔ sequentially compact in metric spaces; ⇔ closed and bounded in $\mathbb{R}^n$; note: fails in general metric spaces) |
| lebl-7.4.12 (5.35) | Totally bounded set (contrasted with bounded in the same item) |
| lebl-7.2.10 (5.36) | Connected set (metric definition; note: Abbott's separated-sets version is equivalent) |

14 definitions, 1 theorem. Heine–Borel in R is not stated before cummings-5.7 or abbott-3.3.9, because
those problems prove it. The theorem is stated at 5.31, when metric-space compactness first relies on
sequential compactness (lebl-7.4.6). abbott-4.4.14 and ross-21.5 in Continuity also cite it. The
convention notes on compactness and closedness make sure no problem is contradicted: Abbott, MIT and
Ross take sequential compactness, or closed via limits, as the definition.

## Proposed bridges

- **abbott-3.5.5 (R is not a countable union of closed sets with empty interior; strong, easy), between
  abbott-3.5.4 and abbott-3.5.6 (new 5.29/5.30).** abbott-3.5.6 begins "Show how the previous exercise
  implies…" and uses abbott-3.5.5's conclusion, which the bank gives only as a quote. abbott-3.5.5 is
  the complement form of the theorem just proved in 3.5.4 (dense open ⇔ complement closed with empty
  interior). It prepares exactly the step 3.5.6 relies on, and without it 3.5.6 rests on an unproved
  quoted result.

No other bridges. The hard core problems (ross-13.7, abbott-3.3.7, lebl-7.4.12) each follow a problem
that practises their technique: abbott-3.2.13; rudin-3.19 and the nested-interval/compactness group;
lebl-7.4.6 and lebl-7.4.10.

## Possible duplicates (flagged, not removed)

- **mit20-a4-7(b) and abbott-3.2.7(a)** are the same statement ("the set of limit/cluster points is
  closed") with the same mechanism. The other parts differ: mit20-a4-7(a) is the sequential
  characterisation of cluster points, and abbott-3.2.7(b) is closure as the smallest closed superset.
  Keep both. This is a partial duplicate.
- mit20-a4-3 + mit20-mid-2(c) (closed ⇔ contains limits of convergent sequences) and abbott-3.2.5
  (closed ⇔ contains limits of its Cauchy sequences) are close but not identical. The Abbott version
  needs completeness of R. Keep both.

## Local ordering issues considered but intentionally left unchanged

- **abbott-3.2.6(e) (5.11) mentions the Cantor set before the Cantor group (5.18–5.20).** The Cantor
  set is defined in the reference block at 5.11. Part (e) needs only "intersection of closed sets is
  closed" (mit20-a4-2), so the problem stays with the limit-point group.
- **abbott-3.2.10 (5.10) uses Abbott's "countable" (= countably infinite).** This convention belongs
  to Foundations' reference. The problem's solution states it explicitly. It uses Bolzano–Weierstrass
  (Sequences), which is available.
- **abbott-3.3.5, abbott-3.3.8 (5.13–5.14) before abbott-3.3.9 (Heine–Borel, final implication).**
  They use only sequential compactness ⇔ closed and bounded, proved by cummings-5.7 (5.12), not the
  open-cover form. The order is sound.
- **lebl-7.4.2 (5.16) is a metric-space-numbered exercise placed in R compactness.** It lives entirely in
  R and uses the open-cover definition directly. It should follow abbott-3.3.9, where open covers first
  appear, and it does.
- **abbott-3.3.7 (C + C = [0,2], hard) in the middle of the Cantor group.** It depends on rudin-3.19's
  description of C and on compactness/nested sets. It is a three-problem group, so no foundational run
  is interrupted.
- **Connectedness in R (5.21–5.22) before metric spaces, connectedness in metric spaces only at 5.36.**
  This follows the R-then-metric structure of the whole topic. lebl-7.2.10 needs only the metric
  definition.
- **lebl-7.4.12 (totally bounded, hard) at the end of metric compactness.** It is a capstone that uses
  completeness and sequential compactness, and it is correctly last.
- **lebl-7.4.19 (forward reference; needs continuity of $x/(1+|x|)$) at the end of core.** It is kept
  as the curriculum already flags it.

# Continuity: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Continuity = 6.x). New positions refer
to `curation/audit/order-continuity.yaml`.

## Changes

### lebl-3.2.19 (convex on an open interval ⇒ continuous): moved to the end of the real-line core
- **Old:** 6.17, in its own group "challenge: convex functions", between "extending from a dense set" and
  "continuity and open/closed sets". **New:** 6.47, the same group, after the IVT/EVT synthesis
  problem (cummings-6.32) and just before "continuity on metric spaces".
- **Mathematical reason:** the proof traps $f(x)$ between two chord lines through $(c,f(c))$ on each
  side of $c$ and applies the squeeze theorem to the one-sided limits. This takes three uses of the
  convexity inequality, rearranged by hand, and in (b) a convex function that jumps at an endpoint.
  It is "Challenging" in Lebl (hard in the bank). At 6.17 it was the only hard problem among the
  first twenty, which are easy/medium ε–δ and sequential exercises.
- **Dependency reason:** it needs only one-sided limits (abbott-4.2.10, 6.2) and the squeeze theorem
  for functions (lebl-3.1.3, 6.3), so any later slot works. No problem uses it. At 6.47 it sits with the
  other end-of-unit challenges (abbott-4.5.6, lebl-3.6.11, cummings-6.32). It also comes after the
  monotone-functions group, which builds the habit of comparing one-sided behaviour, the same habit
  convexity uses (monotone chord slopes). The move takes the only hard problem out of the opening ε–δ and sequential run (6.1–6.22).

### lebl-3.6.11 (increasing function discontinuous at every rational; image contains no interval): moved to the end of its group
- **Old:** 6.43 (third of six in "monotone functions and inverses"). **New:** 6.45, the last problem
  of that group, after abbott-4.5.3, lebl-3.6.8 and abbott-4.5.8.
- **Mathematical reason:** this is the group's challenge construction. It defines the function by a
  series of jumps $2^{-n}$ indexed by an enumeration of $\mathbb{Q}$. At 6.42 it came between the
  countability result (abbott-4.6.6) and three foundational medium problems on monotone functions and
  inverses. Its second half ("the image contains no interval") is the concrete version of
  abbott-4.5.3: an increasing function with the intermediate value property is continuous. So it is
  better read after 4.5.3.
- **Dependency reason:** it needs abbott-4.6.5/4.6.6 (still before it) and series (Series topic). No
  problem depends on it. This is a three-place local move inside one group.

No tier changes.

## Reference material (`data/reference/continuity.yaml`)

| before | items |
|---|---|
| mit20-a7-6 (6.1) | Functional limit (note: $f(c)$ irrelevant; Lebl's "cluster point") |
| lebl-3.1.3 (6.3) | Theorem: Sequential criterion for functional limits (quoted by lebl-3.1.11; used by mit20-a9-6, abbott-4.3.4) |
| abbott-4.3.2 (6.7) | Continuity at a point (note: equals $\lim f = f(c)$ at limit points; automatic at isolated points) |
| mit20-a8-2 (6.11) | Theorem: Sequential criterion for continuity, with the divergence criterion (note: algebra and composition of continuous functions) |
| lebl-3.3.11 (6.20) | Theorem: Extreme Value Theorem (after mit20-final-3, which proves that continuous images of $[a,b]$ are compact) |
| ross-19.2 (6.23) | Uniform continuity, contrasted with continuity in the same item (order of quantifiers); Lipschitz function |
| abbott-4.4.14 (6.27) | Theorem: Uniform continuity on compact sets (abbott-4.4.14 asks for a second proof, so it is assumed) |
| abbott-4.5.7 (6.34) | Intermediate value property (needed by ross-18.12 before abbott-4.5.3 quotes it); Theorem: Intermediate Value Theorem |
| abbott-4.6.5 (6.40) | Monotone function (note: "increasing" allows equality, as in Abbott and the Sequences reference) |
| lebl-7.5.2 (6.48) | Continuity between metric spaces; Theorem: open-set characterisation, and continuous images of compact sets are compact |
| ross-22.4 (6.52) | Path-connected set |

8 definitions, 6 theorems. Not stated because a problem proves them: the open-set characterisation on R
(mit20-a8-5), the product rule (mit20-final-2b), uniformly continuous ⇒ Cauchy-preserving and the
continuous extension theorem (abbott-4.4.13), and continuous images of connected sets (lebl-7.5.5).
The IVT statement leaves out "continuous maps send intervals to intervals" so that it does not answer
cummings-6.33. If the bank's theorem budget is tight, the coordinator could fold "Sequential criterion
for continuity" into the note on "Continuity at a point".

## Proposed bridges

None needed. Each harder problem follows one that practises its technique:
lebl-3.4.9 (extending a uniformly continuous function from Q) follows abbott-4.4.13 (continuous
extension) and ross-19.4; abbott-4.5.6 follows the IVT drills; lebl-3.6.11 follows abbott-4.6.6; and
lebl-7.5.8 follows the compactness material. tao-9.8.5 (monotone function discontinuous exactly at
the rationals, unselected core) duplicates lebl-3.6.11 and is not a bridge.

## Possible duplicates (flagged, not removed)

- **ross-18.4 and ross-21.5(a)** both build the unbounded continuous function $1/|x-x_0|$ on a
  non-closed set, in R and then in $\mathbb{R}^k$. ross-21.5 adds the unbounded-set case and part (b)
  (bounded with no maximum). Same mechanism in a new setting, so keep both.
- **lebl-3.3.11 and mit20-final-2a(i)** are both "continuous, no global max/min on a non-compact
  domain" (R versus (0,1)). Their partners differ: mit20-final-2a(ii) is about failure of the IVP, and
  abbott-4.4.8 asks for range constraints. These are near-duplicates in mechanism, not genuine
  duplicates.

## Local ordering issues considered but intentionally left unchanged

- **mit20-a9-6 (limits at infinity, introductory) closes the "sequential criterion for limits" group.**
  Part (b) ($\lim\sin x$ does not exist) uses the sequential criterion, so it belongs after it, even
  though it is easier than lebl-3.1.11.
- **abbott-4.3.13 (additive functions) in "extending from a dense set".** Part (c) is exactly the
  dense-set extension technique of lebl-3.2.10 (just before it). This is the right place.
- **abbott-4.3.12 (distance to a closed set) uses Topology's closed sets.** Topology comes before
  Continuity, so it is fine.
- **abbott-4.4.14 opens "uniform continuity on compact sets" with the open-cover proof of Theorem 4.4.7.**
  It uses Heine–Borel (Topology reference). The theorem is stated in the block just before it. The easy
  applications (abbott-4.4.2, lebl-3.4.15) follow.
- **abbott-4.4.8 (ranges of continuous functions on [0,1], (0,1), (0,1]) sits in the IVT group although
  part (a) uses the EVT.** It needs both theorems, and the IVT group comes after the EVT, so the order
  is sound.
- **abbott-4.5.6 (horizontal chords, hard) at the end of the IVT group.** It is a challenge after the
  IVT drills, and correctly placed.
- **cummings-6.32 (functions taking each value exactly twice, hard) as IVT/EVT synthesis.** It uses
  IVT, EVT and strict monotonicity of continuous injections (lebl-3.6.8), so it must follow the
  monotone group, and it does.
- **Metric-space continuity (6.48–6.53) last in core.** lebl-7.2.11 and ross-22.4 need the metric
  connectedness of Topology (5.36) and the definitions here. Moving them earlier would interleave R and
  metric material.

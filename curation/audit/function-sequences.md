# Sequences & Series of Functions: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (function-sequences = 9.x); "new"
positions refer to `order-function-sequences.yaml`. No tier changes.

## Changes

### ross-33.9 (uniform limit of integrable functions is integrable, and integrals converge) before abbott-7.3.5
- **Old:** ross-33.9 at 9.17, abbott-7.3.5 at 9.16. **New:** ross-33.9 at 9.16, abbott-7.3.5 at 9.17 (a swap).
- **Mathematical reason:** abbott-7.3.5(b) asks whether a uniform limit of functions with finitely many
  discontinuities can fail to be integrable. The answer is "impossible" *because* uniform limits of
  integrable functions are integrable, which is exactly the theorem ross-33.9 proves. As placed before,
  the solution of 7.3.5(b) had to reprove ross-33.9 inline.
- **Pedagogical reason:** the theorem now comes first. Then abbott-7.3.5 is a three-part "which of these
  survive the limit?" application, with a pointwise counterexample in (a) and a uniform near-miss in (c),
  so counterexamples follow the claim they test. ross-23.9 stays first in the group as the motivating
  pointwise failure ($\int nx^n\to1$).

### lebl-7.4.8 (closed unit ball of $C([0,1])$ is not compact): moved to the end of "function spaces"
- **Old:** 9.37, between abbott-8.2.2 and abbott-8.2.5. **New:** 9.40, after lebl-7.5.12.
- **Mathematical reason:** the function-spaces run is about the uniform distance on $C[a,b]$. First, it
  is a metric (abbott-8.2.2). Second, it is complete, and $d_1$ is not (abbott-8.2.5,
  mit18100b-f10-ps10-5). Third, the $C^1$ metric versus the uniform metric (lebl-7.5.12). lebl-7.4.8
  ("Challenging") is about compactness, a different property. It is best read against completeness:
  $C(0,1)$ is complete, closed and bounded, yet not compact. That contrast only makes sense once
  completeness of $C[0,1]$ is established.
- **Dependency reason:** lebl-7.4.8 uses the sup metric (abbott-8.2.2) and metric-space compactness
  (Topology). It does not use anything after it in the group, and nothing in the group uses it. The move
  also stops a challenge problem from interrupting the foundational metric → completeness run.

No other order changes.

## Proposed bridges (not added)
- **abbott-6.2.13** (consider, medium; "diagonal subsequence: a uniformly bounded sequence converges
  pointwise on a countable set"). **Where:** immediately before abbott-6.2.15 (Arzelà–Ascoli, very-hard,
  new 9.44). **Why:** part (a) of abbott-6.2.15 is "use Exercise 6.2.13". Only the result is quoted, and the
  Cantor diagonal subsequence argument is practised nowhere in the core (rudin-7.13 uses it, but that is
  upper tier and comes after). **Prepares:** the diagonal-extraction step of Arzelà–Ascoli, so the
  learner's work in 6.2.15 is the equicontinuity ε/3 argument it is meant to train.

## Possible duplicates / overlaps (flagged, not removed)
- ross-23.9 and ross-24.9 both use $nx^n$-type sequences and integrals. They are not duplicates: 23.9 is
  pure pointwise failure of $\lim\int=\int\lim$, while 24.9 adds the uniformity question and a case where
  the integrals *do* converge without uniform convergence. Keep both.
- lebl-6.2.2 ($x^n/n$) and abbott-6.3.4 ($\sin(nx)/\sqrt n$) are both "uniform convergence does not pass to
  derivatives". The mechanisms differ: failure at one point versus divergence everywhere. Keep both.

## Reference material (`data/reference/function-sequences.yaml`)

| before | items |
|---|---|
| mit20-final-1 (9.1) | Pointwise convergence; Uniform convergence (paired block; includes series of functions via partial sums; note: Pugh's ⇉) |
| cummings-9.12 (9.9) | Theorem: Continuous Limit Theorem (quoted by abbott-6.2.6, used by ross-24.13/24.17) |
| abbott-6.2.5 (9.13) | Uniformly Cauchy sequence of functions |
| lebl-6.2.2 (9.20) | Theorem: Differentiable Limit Theorem, sequence and series forms (stated before the three counterexamples that test the naive version; abbott-6.3.7 proves its first part; used by abbott-6.4.7) |
| ross-26.7 (9.30) | Theorem: power series as functions (uniform on $[-r,r]$, continuity, term-by-term differentiation, $a_n=f^{(n)}(0)/n!$). Uses Series' "Power series and radius of convergence" |
| ross-26.8 (9.32) | Theorem: Abel's Theorem (needed for ross-26.8(c); the problem's notes name it) |
| abbott-6.7.2 (9.33) | Theorem: Weierstrass Approximation Theorem (before ross-27.3, which shows it fails on $\mathbb{R}$, and rudin-7.20, which uses it) |
| abbott-8.2.2 (9.36) | The space $C[a,b]$ and the uniform distance, plus $C^1[a,b]$ (worded so as not to assert that $d_\infty$ is a metric, which is abbott-8.2.2(a)); note on the Lebl, Abbott and MIT notations |
| abbott-4.3.11 (9.41) | Contraction, fixed point (note: Pugh's weak contraction is different) |
| abbott-6.2.15 (9.44) | Equicontinuous and uniformly bounded families |

Not stated on purpose: the uniform Cauchy criterion (abbott-6.2.5 proves it), the M-test (abbott-6.4.1
proves it), Dini (abbott-6.2.11 proves it), the integrable limit theorem (ross-33.9 proves it), the
contraction mapping theorem (abbott-4.3.11 proves the $\mathbb{R}$ version; lebl-7.6.6 tests its
hypotheses with the definition at hand), Arzelà–Ascoli (abbott-6.2.15 is the proof). "Metric space" and
"Complete metric space" are in Topology's reference.

## Local ordering issues considered but intentionally left unchanged
- **mit20-final-7b** (bounded $f'$ ⇒ Lipschitz; translates converge uniformly) uses the MVT from
  Differentiation, which comes earlier. It stays in the opening group as an early uniform-convergence proof.
- **abbott-6.2.11 (Dini)** is grouped with the uniform Cauchy criterion although it does not use it. It
  uses compactness (nested closed sets) from Topology. It is a positive "when does pointwise become
  uniform" theorem and fits at the end of the basic theory. Kept.
- **Counterexamples before the theorem in "limits and derivatives"** (lebl-6.2.2, lebl-6.2.1,
  abbott-6.3.4, then abbott-6.3.7): the counterexamples test the naive claim "uniform convergence
  passes to derivatives". The correct theorem is now stated in the reference block before them, so
  counterexamples still follow a stated claim. Kept.
- **abbott-4.3.11** (contraction mapping on $\mathbb{R}$) is a sequence argument that could sit anywhere
  after Cauchy sequences. It stays here because the topic owns the fixed-point subtopic and lebl-7.6.6
  pairs with it.
- **abbott-6.2.12 (Cantor function)** and **abbott-6.2.15 (Arzelà–Ascoli)** close the core as challenge
  problems. Both use only the uniform Cauchy criterion, the Cantor set and compactness, which are all
  earlier. They are deliberately last, not interrupting a foundational run.
- **abbott-6.5.5 before ross-26.7**: 6.5.5 proves the convergence of the differentiated series, and
  ross-26.7 applies differentiability of power series (now stated in the reference block before it).
  Correct order.

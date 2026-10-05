# Differentiation: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Differentiation = 7.x); "new" positions
refer to `order-differentiation.yaml`. No tier changes.

## Changes

### lebl-4.4.6 ($x+2x^2\sin(1/x)$: $f'(0)=1>0$ but $f$ is not invertible near 0): moved after the MVT consequences
- **Old:** 7.9, in "inverse functions" right after abbott-5.2.12. **New:** 7.19, right after tao-10.3.5,
  at the end of the group now called "consequences of the MVT (and where they fail)" (before rudin-5.14).
- **Mathematical reason:** this is a counterexample. The claim it tests is not abbott-5.2.12, which already
  assumes $f$ is one-to-one and $f'\ne0$ everywhere. It tests the tempting consequence of the MVT
  monotonicity test, "$f'(c)>0$ ⇒ $f$ is increasing (hence invertible) near $c$". The true statements are
  "$f'>0$ on an interval ⇒ strictly increasing" (MVT) and the inverse function theorem with $f'$
  continuous. Neither is available at 7.9.
- **Dependency/pedagogical reason:** counterexamples come after the claims they test. At its new place it
  sits next to tao-10.3.5 ($f'>0$ on a non-interval domain, not monotone). Each breaks one hypothesis of
  the monotonicity test: tao-10.3.5 the interval, lebl-4.4.6 "on an interval, not at a point". Its own proof
  uses only the definition of the derivative, the product and chain rules, and the IVT, so the move breaks
  no dependency. No later problem uses it. abbott-5.2.12 now forms the "inverse functions" group by itself.

No other order changes.

## Proposed bridges (not added)
None needed. Every harder core problem uses techniques practised earlier:
- cummings-7.16 (∞/∞ L'Hôpital) uses the Cauchy MVT that cummings-7.14 proves.
- abbott-5.3.12 uses the 0/0 rule that lebl-4.2.9 proves.
- abbott-5.4.7(a) is a direct limit argument.

A possible optional addition for the end of the MVT group is **abbott-5.2.10** (core verdict, medium;
"$x/2+x^2\sin(1/x)$: $g'(0)>0$ but $g$ not increasing near 0"). It would duplicate lebl-4.4.6, so it is
**not** recommended.

## Possible duplicates / overlaps (flagged, not removed)
- mit20-a10-3 (Lipschitz ⇔ $f'$ bounded) overlaps function-sequences mit20-final-7b(i) (bounded $f'$ ⇒
  Lipschitz). The mechanism is the same MVT estimate, but the point of 7b is part (ii) (uniform
  convergence of translates). Keep both.
- ross-28.4 and abbott-5.2.7 both use $x^a\sin(1/x)$. They train different things: computing a derivative
  from the definition, versus tuning the exponent to separate differentiability classes. Keep both.

## Reference material (`data/reference/differentiation.yaml`)

| before | items |
|---|---|
| mit20-final-4a (7.1) | Derivative (note: one-sided at endpoints; Tao allows any domain, used by tao-10.3.5) |
| abbott-5.2.7 (7.7) | Higher derivatives and the classes $C^n$, $C^\infty$ |
| tao-10.2.1 (new 7.9) | Local extremum (with strict; note: Lebl's "relative") |
| mit20-a11-1 (new 7.12) | Theorem: Mean Value Theorem with Rolle as a special case, and the monotonicity consequences (placed after tao-10.2.5, which derives MVT from Rolle, and cummings-7.10, which tests Rolle's hypotheses; before tao-10.3.5 and lebl-4.4.6, which test the monotonicity consequence) |
| ross-30.6 (7.27) | Theorem: L'Hôpital's Rule, 0/0 and $\lvert g\rvert\to\infty$ forms (placed after lebl-4.2.9 and cummings-7.16, which prove the two cases; note: Ross's form assumes nothing about $f$, as ross-30.6 needs) |
| mit20-final-5a (7.29) | Taylor polynomial and Taylor series; Theorem: Taylor's Theorem, Lagrange remainder (note: Rudin's index shift and weaker hypotheses, used by rudin-5.17/5.15) |

Not stated on purpose: differentiable ⇒ continuous (mit20-final-4a proves it), chain rule (abbott-5.2.4
proves it), Darboux's theorem (abbott-5.2.11 proves it), Cauchy MVT (cummings-7.14 proves it), inverse
derivative (abbott-5.2.12 proves it), convexity (defined in Continuity and quoted in rudin-5.14).

## Local ordering issues considered but intentionally left unchanged
- **mit20-a10-1** (Hölder) uses uniform continuity from the Continuity topic. Part (b) gets $f'\equiv0$
  from the definition and then needs "$f'=0$ ⇒ constant". So its place among the MVT consequences is right.
- **rudin-5.14** (convex ⇔ $f'$ increasing) is the heaviest problem in the MVT group. It stays at the end of
  the group because it needs the MVT and the monotonicity test, and nothing later depends on it.
- **The Darboux's-theorem group (abbott-5.2.11, lebl-4.2.7)** comes after the MVT consequences, although
  Darboux uses only Fermat-type arguments and EVT. Keeping the MVT run unbroken is better than moving
  Darboux next to tao-10.2.1, and lebl-4.2.7 is a natural follow-on.
- **lebl-4.3.11** (second derivative test, general form) uses the sign of $f'$ near $x_0$ and the
  monotonicity test. It is correctly after the MVT group.
- **cummings-7.16** (hard) inside the L'Hôpital group: this is its natural home, after cummings-7.14 and
  lebl-4.2.9. It is the only problem that proves the ∞ case, which ross-30.6 needs. Moving it would break
  that dependency.
- **abbott-5.4.7** (capstone) uses the continuity of $g=\sum 2^{-n}h(2^nx)$ (an M-test fact from
  Sequences & Series of Functions). Part (b) only uses the lemma in (a) and the dyadic computation, so it
  can stay at the end of the core as a forward-looking capstone, as before.
- **ross-31.5 before ross-31.4**: both rely on Ross's Example 3 ($e^{-1/x}$, quoted in each). 31.5 (flat
  function, Taylor series) uses the Taylor material directly above it, and 31.4 (bump functions) is a
  construction. Kept.

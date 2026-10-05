# Solution sweep B: adversarial pass

Scope: `data/solutions/topology.yaml` (39), `continuity.yaml` (49), `coverage-additions.yaml` (16),
`completeness.yaml` (14). **118 entries checked**: statement, notes, every hint and the full solution, each read
against the problem as it appears in `src/generated/bank.json`, whatever the problem's topic.

## Result

**No fixes. Nothing flagged `lowConfidence`.** No entry needed a change. `node scripts/build-data.mjs --check`
passes (✓ 380 problems valid). No solution file was edited.

## How each entry was checked

- **Every ε/δ/N choice was plugged back in.** Examples: mit20-a9-6 (M = max{R,1,1/ε}); ross-17.9(d)
  (K = 3(|x₀|+1)², K > 0); ross-19.2; mit20-final-2b; cummings-3.8 (the |a|+1 guard); lebl-3.4.15 (v ∈ (−P,2P));
  abbott-4.4.13 (δ ≤ b−a keeps x < b); abbott-4.4.14 (|y−zᵢ| < δ + δ_{zᵢ}/2 ≤ δ_{zᵢ}); abbott-4.5.3 (both IVP
  cases on each side); cummings-7.16 (two-stage choice of y then x, including the cases g(y) = 0 and f(y) = 0).
- **Every computation was redone:**
  - abbott-8.2.5(c): the bound (1/n)/(√(u²+1/n)+u) ≤ 1/√n
  - abbott-4.3.6(e): the identity a²+ab+b² − (a−b)²/4 = 3(a+b)²/4
  - abbott-4.5.6(c): f(1) = 0 and the constant chord gap −2/5
  - ross-19.1(d): (n+1/n)³ − n³ = 3n + 3/n + 1/n³
  - abbott-3.3.8(b): the gaps between points of L are at least 1/2
  - rudin-2.17: the injectivity estimate, the interval nesting (ii) and disjointness (iii), and the bound 8/3·10⁻ᵏ
  - mit20-a11-2/3: the Taylor coefficients and Lagrange remainders
  - abbott-7.5.8(d,e): S₂ₙ = H₂ₙ − Hₙ
  - lebl-5.4.4: the remainder bound |x|ⁿ⁺²/(1+x)
  - lebl-3.2.19: both rearranged chord inequalities and the endpoint example
  - lebl-3.6.11: the jump bullets, and that the skipped interval lies inside (u,v)
  - cummings-6.32(c): the preimage count, two plus one
- **Every counterexample was checked against its conditions:**
  - abbott-3.2.6(d): A is closed and contains no rationals
  - abbott-4.4.8(c): the range is exactly (0,1)
  - lebl-7.2.11(b): the touching disks are connected but their interior is not
  - lebl-7.2.13(b): the discrete metric
  - lebl-7.4.8: the tent functions are pairwise at distance 1
  - ross-22.4: the closure, and that it is not path-connected
  - abbott-5.2.2(d): x²·D(x)
  - lebl-7.5.12(b): cos(nx) reaches 1 on [a,b] once n > 2π/(b−a)
- **Each book's conventions were confirmed:** Abbott's "countable" (abbott-3.2.10 states it; abbott-7.6.3 also
  covers finite sets, which is harmless), Ross's ±∞ limits (ross-9.9(c), with every case covered), Tao's ℕ
  starting at 0 (tao-8.1.2), Lebl's rule that connected sets are nonempty (lebl-7.2.11), and Ross's "strictly
  between" in the IVP (ross-18.12).
- **Cited results were checked for hypotheses and numbering:**
  - Abbott: Thm 3.2.5, Cor 6.4.5 (M-test), Thm 4.4.7
  - Ross: Thms 32.5, 33.3, 33.4, 19.2, 19.4, 26.5
  - Rudin: Thms 2.14, 2.41, 2.43
  - Lebl: Prop 7.4.6, Lemma 3.1.7, Thm 5.3.1
  - Cummings: Ex 7.14 is the Cauchy MVT, confirmed in the bank
  - None of these is the result the exercise itself asks to prove.
- **Hints:** all are consistent with their solutions and graded from nudge to near-solution. Hints that give
  only a count are fine, since none says which items are which: abbott-3.2.6 ("two true, three false"),
  abbott-4.3.6 and abbott-4.4.10.

## Statement issues for the coordinator

None new. The book quirks already recorded in NOTES were confirmed:
- ross-17.9: the book's "in continuous" typo.
- cummings-8.28: the missing "< ε", restored.
- lebl-7.4.10: the completeness hypothesis is not needed.
- lebl-3.2.19: the missing "is".

## Minor metadata observation (not a statement error, not acted on)

abbott-8.2.2, abbott-8.2.5, lebl-7.4.8 and lebl-7.5.12 are metric-space problems, but their topic is
`function-sequences`. This is defensible, since they are about spaces of functions; it is listed only in case the
coordinator wants them under topology.

# Coverage of Cummings's "Notable Exercises"

Jay Cummings, *Real Analysis: A Long-Form Mathematics Textbook* (2019) has a "Notable Exercises" box before each chapter's exercises. This file checks each exercise listed there against `src/generated/bank.json` (378 problems) and the Cummings candidate pool (`curation/candidates/cummings-ch1-5.yaml`, `cummings-ch6-9.yaml`).

Status key:
- **in bank**: the Cummings exercise itself is in the bank.
- **covered**: the bank has a problem from another source with the same result and the same skill.
- **partly covered**: the bank has a related problem, but the notable exercise asks for something meaningfully different.
- **missing**: the bank has nothing comparable.

Numbering caveat: some of Cummings's notes don't match the 2019 exercise numbering. His Ch3 note says the limit laws are finished in "Exercises 3.6 and 3.7", but in the 2019 PDF they are 3.7 (sum, scalar) and 3.8 (difference, quotient); 3.6 is about integer-valued sequences. His note for 2.5 (density and countability of Q, measure theory) fits 2.6 (disjoint open intervals) better than 2.5 (0-1 sequences). Every row below rates the exercise as numbered in the 2019 PDF.

| Exercise | Cummings's reason (short) | Status | Bank id / candidate | Recommendation |
|---|---|---|---|---|
| 1.4 De Morgan's laws for two sets | Complement distributes over unions and intersections; the infinite form is used in Ch5 | missing | Not a candidate: skipped as pure set theory | Don't add: pure set theory, used implicitly in `mit20-a4-2` |
| 1.9 a < b + ε for all ε ⇒ a ≤ b | First "for all ε > 0" analytic statement | in bank | `cummings-1.9` | n/a |
| 1.14 A ⊆ B ⇒ sup A ≤ sup B | Used again in Ch4 and Ch8 | covered | `abbott-1.3.11`(a) | n/a |
| 1.20 sup A < sup B ⇒ some b ∈ B bounds A | More practice with ε-style sup arguments | covered | `abbott-1.3.9` (same statement, same counterexample part) | n/a |
| 1.22 Nested interval property | Special case of the closed-set property in 5.4(b) | in bank | `cummings-1.22` | n/a |
| 2.5 The set of 0-1 sequences is uncountable | Q dense and countable; leads toward measure theory (note likely meant for 2.6) | covered | `ross-16.8` (diagonal argument), `mit20-a3-2` (digit sequences ≅ P(N)) | n/a |
| 2.6 Disjoint open intervals: countably many yes, uncountably many no | Key property of open sets (Thm 5.5) | covered | `abbott-1.5.6` | n/a |
| 2.9 Every A ⊆ N is finite or \|A\| = \|N\| | ℵ₀ is the smallest infinity | missing | `cummings-2.9` (consider; unselected) | Don't add: foundational set theory the bank takes for granted |
| 3.3 Negative sequence with aₙ → 0 | Convergence definition in a special case | missing | Not a candidate: skipped as a trivial example | Don't add: one-line example (−1/n) |
| 3.4 Four "Nonverges" quantifier variants | Probes the quantifiers in the definition of convergence | partly covered | `abbott-2.2.1` (one quantifier swap, "vercongence"); candidate `cummings-3.4` (strong) | Don't add: `abbott-2.2.1` already drills the same skill |
| 3.5 Subsequential limits of 1/2, 1/3, 2/3, 1/4, … | Subsequential limits (answer: [0,1]) | partly covered | `lebl-2.1.17` (a sequence with every real as a subsequential limit, a harder version); candidate `cummings-3.5` (strong) | Don't add: same enumeration idea as `lebl-2.1.17` |
| 3.6 Integer-valued sequences (can aₙ → 3.5? convergent ⇒ eventually constant) | Convergence definition in a special case | missing | `cummings-3.6` (strong; unselected) | **Add**: quick fixed-ε use of the definition; nothing like it in the bank |
| 3.7 Limit laws: sum and scalar multiple | Finishes the limit laws (Thm 3.21) | partly covered | `abbott-2.3.2` (1/xₙ → 1/2 from the definition), `lebl-2.2.3` (powers). The bank never proves the algebraic limit theorem. 3.7 skipped as weaker than 3.8; candidate `cummings-3.8` (strong) has difference and quotient | **Add `cummings-3.8`**: the quotient law is a core result the bank never proves; 3.7 alone is too easy |
| 3.13 Sequence in (6,7) with subsequences → 6 and → 7 | Subsequential limits | partly covered | Subsumed by `lebl-2.1.17`. Not a candidate: skipped as a duplicate of 3.5 | Don't add: trivial example |
| 3.21 Subsequences → 1, 17, −π | Subsequential limits | partly covered | Subsumed by `lebl-2.1.17`. Not a candidate: skipped as a duplicate of 3.5 | Don't add: trivial example |
| 3.28 Σ1/n³ converges, using Euler's Σ1/n² = π²/6 | Disguised first series | partly covered | `lebl-2.5.3` (applies the comparison test), `cummings-3.16` (monotone convergence). 3.28 asks you to prove the comparison argument for partial sums; candidate `cummings-3.28` (consider) | Don't add: introductory, and comparison is used throughout Ch4 problems |
| 4.9 Ratio test | Proof of a standard convergence test | covered | `abbott-2.7.9` | n/a |
| 4.10 Root test | Proof of a standard convergence test | partly covered | `ross-14.10`, `tao-7.5.1`, `lebl-2.6.1` apply or compare the root test, but none proves it; candidate `cummings-4.10` (strong) | Don't add: same geometric-comparison proof as `abbott-2.7.9` |
| 4.15 Conditionally convergent series rearranges to diverge to ∞ | Completes Riemann's rearrangement theorem | partly covered | `lebl-2.6.3` (rearrange to any finite x); candidate `cummings-4.15` (strong) | Don't add: same greedy construction as `lebl-2.6.3` |
| 4.16 Rearrangement whose limit does not exist | Extends the rearrangement theorem | partly covered | `lebl-2.6.3`. Not a candidate: skipped as a special case of 4.17 | Don't add: near-duplicate of 4.15 |
| 4.17 Rearrangement with prescribed limsup and liminf | Riemann series theorem in full generality | partly covered | `lebl-2.6.3`; candidate `cummings-4.17` (consider, hard) | Don't add: `lebl-2.6.3`'s construction plus bookkeeping |
| 4.18 Absolutely convergent ⇒ every rearrangement has the same sum | What happens outside the conditional case | in bank | `cummings-4.18` | n/a |
| 4.19 Nonnegative divergent series: every rearrangement diverges | Same | missing | Not a candidate: skipped as easy and low value | Don't add: rearranged partial sums dominate the original ones |
| 5.4 Finite unions and arbitrary intersections of closed sets are closed | Snappy proof via De Morgan; generalizes 1.22 | covered | `mit20-a4-2` | n/a |
| 6.4 ε-δ continuity of √x, eˣ, log, sin, cos | Fundamental functions (Fourier analysis) | partly covered | `ross-17.9` (√x at 0, x², x³); exp, log and trig are not covered. Not a candidate: demoted because it relies on unproven properties of exp, log and trig | Don't add: the analytic content is in `ross-17.9`; the rest needs facts the bank never proves |
| 6.18 f = even + odd | Decomposing a function into simpler parts | missing | Not a candidate: skipped as pure algebra, since continuity plays no role | Don't add: no analysis content |
| 6.19 f = g − h with g, h ≥ 0 continuous (via max{f₁, f₂}) | Same | missing | Not a candidate: demoted for bank size | Don't add: routine, uses the max formula plus sums of continuous functions |
| 7.3 Quotient rule | Main rule for computing derivatives | missing | Not a candidate: skipped as a routine standard rule | Don't add: routine (bank has the chain rule, `abbott-5.2.4`) |
| 7.5 Power rule for n ∈ N by induction | Main rule for computing derivatives | missing | Not a candidate: skipped as routine | Don't add: routine |
| 7.6 f′ bounded on an interval ⇒ f uniformly continuous | Bounded slope means "never too steep" | covered | `mit20-a10-3` (f′ bounded ⇔ Lipschitz) + `mit20-a9-4` (Lipschitz ⇒ UC); also `mit20-final-7b` | n/a |
| 7.8 f′ continuous on [a,b] ⇒ f Lipschitz | Lipschitz as "never too steep" | covered | `mit20-a10-3` (MVT direction) plus EVT on f′ | n/a |
| 7.14 Cauchy mean value theorem | Used to prove L'Hôpital | in bank | `cummings-7.14` | n/a |
| 7.15 L'Hôpital, 0/0 case | Proves (most of) L'Hôpital's rule | covered | `lebl-4.2.9` (0/0 via Cauchy MVT) | n/a |
| 7.16 L'Hôpital, ∞/∞ case | "Takes a bit more care" | partly covered | `lebl-4.2.9` does only 0/0; candidate `cummings-7.16` (consider, hard) | **Add**: the bank never proves the ∞/∞ case, and its argument is genuinely different from 0/0 |
| 8.2 A ⊆ B ⇒ sup A ≤ sup B and inf B ≤ inf A | Sup facts with renewed importance for integrals | covered | `abbott-1.3.11`(a) (sup half; inf half is the mirror) | n/a |
| 8.3 x ≤ y for all x ∈ A, y ∈ B ⇒ sup A ≤ inf B | Same | covered | `lebl-1.3.5`(a) (same statement for f(x) ≤ g(y)) | n/a |
| 8.11 Integrable ⇒ partitions Pₙ with U − L → 0 | Concrete version of the integrability criterion | covered | `abbott-7.2.3`(a) (the iff version) | n/a |
| 8.13 Thomae's function is integrable (by partitions) | First of two proofs | covered | `lebl-5.2.11` | n/a |
| 8.19 Thomae integrable via the Lebesgue criterion (Thm 8.23) | Second proof; multiple proofs deepen understanding | partly covered | `lebl-5.2.11` (same result), `abbott-7.6.3` (countable sets have measure zero). The bank does not state the Lebesgue criterion. Not a candidate: skipped because it relies on a theorem Cummings states without proof | Don't add: hinges on a theorem the bank never proves |
| 8.21 IVT from FTC + Darboux's theorem | Second proof of the IVT | missing | `cummings-8.21` (consider; unselected). Ingredients in bank: `abbott-5.2.11` (Darboux) and FTC problems | Don't add: a two-line combination of results already in the bank |
| 8.28 Integrable ⇔ squeezed between step functions within ε | Step functions, the start of general integration theory | missing | `cummings-8.28` (strong; unselected) | **Add**: no step-function problem in the bank; it is the bridge toward Lebesgue integration |
| 8.29 Integrable f approximated from below by continuous g in L¹ | Same | missing | `cummings-8.29` (consider; unselected) | Don't add separately: follows from 8.28 plus a piecewise-linear fix-up |
| 9.8 Cauchy criterion for uniform convergence | Prove uniform convergence without knowing the limit | covered | `abbott-6.2.5` | n/a |
| 9.16 Absolutely convergent at x₀ ⇒ uniform on [−\|x₀\|, \|x₀\|] | Power series converge on a symmetric interval | in bank | `cummings-9.16` | n/a |

**Totals (44 exercises):** 5 in bank, 14 covered, 13 partly covered, 12 missing.

## Recommended additions

All four are already transcribed and audited in the candidate files. Add them with `python3 curation/scripts/add_problems.py <id>`.

1. **`cummings-3.6`**: integer-valued sequences (aₙ ∈ Z: can aₙ → 3.5? if convergent, eventually constant). Easy, uses the definition with a fixed ε, and nothing like it is in the bank.
2. **`cummings-3.8`**: limit laws for the difference and the quotient (stands in for notable 3.7). The bank never proves the algebraic limit theorem; `abbott-2.3.2` does only a special case.
3. **`cummings-7.16`**: L'Hôpital's rule, ∞/∞ case. The bank has only the 0/0 case (`lebl-4.2.9`), and this argument is different and harder.
4. **`cummings-8.28`**: integrability is equivalent to being squeezed between step functions. This is the bank's only route to step functions and Lebesgue-style approximation.

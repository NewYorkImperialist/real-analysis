# Unselected candidates

540 candidates were transcribed and classified but not selected for the bank (66 core, 243 strong, 231 consider). Most "core"/"strong" ones lost only to a near-identical
version from another source that is already in the bank. Full text and metadata: `curation/candidates/*.yaml`.

Add any of them with `python3 curation/scripts/add_problems.py <id> …` (see curation/README.md).

"Audited" = transcription already checked symbol-by-symbol against the page image.

## foundations (26)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| tao-8.1.9 | core | easy | proof | countable union of countable sets is countable | no |
| abbott-1.6.4 | strong | easy | proof | the set of 0-1 sequences is uncountable (diagonalization) | no |
| cummings-2.1 | strong | easy | proof | Countable union of countable sets is countable | yes |
| cummings-2.5 | strong | easy | proof | Set of 0-1 sequences is uncountable (Cantor diagonal) | yes |
| cummings-2.6 | strong | easy | proof | Any collection of disjoint open intervals in R is countable | yes |
| tao-8.1.6 | strong | easy | proof | A at most countable iff there is an injection A → N | no |
| tao-8.3.3 | strong | easy | proof | Schröder–Bernstein theorem | no |
| tao-3.4.2 | strong | introductory | conceptual | S ⊆ f^{-1}(f(S)) and f(f^{-1}(U)) ⊆ U, with strict containment possible | no |
| tao-3.4.3 | strong | introductory | proof | f(A∩B) ⊆ f(A)∩f(B) (strict in general), f(A∪B)=f(A)∪f(B) | no |
| cummings-2.13 | strong | medium | proof | Algebraic numbers are countable; transcendentals uncountable | yes |
| lebl-1.4.9 | strong | medium | proof | algebraic numbers are countable; transcendental numbers exist | yes |
| cummings-2.9 | consider | easy | proof | Every subset of N is finite or countably infinite | yes |
| tao-7.1.4 | consider | easy | proof | binomial theorem by induction | no |
| tao-8.1.4 | consider | easy | proof | image of N under any map is at most countable | no |
| tao-8.3.5 | consider | easy | proof | no power set is countably infinite | no |
| lebl-0.3.4 | consider | introductory | counterexample | f(C ∪ D) = f(C) ∪ f(D); f(C ∩ D) ⊂ f(C) ∩ f(D), strict in general | yes |
| ross-1.11 | consider | introductory | conceptual | induction step without base case proves nothing | no |
| tao-3.3.5 | consider | introductory | proof | g∘f injective ⇒ f injective; g∘f surjective ⇒ g surjective (and not conversely) | no |
| tao-3.4.4 | consider | introductory | proof | preimages preserve unions, intersections, differences | no |
| tao-3.6.8 | consider | introductory | construction | injection A→B gives surjection B→A (A nonempty) | no |
| tao-8.1.7 | consider | introductory | proof | union of two countable sets is countable | no |
| abbott-1.5.10 | consider | medium | proof | uncountable C in [0,1] has a 'condensation' point: C ∩ [α,1] uncountable at α = sup | no |
| abbott-1.6.9 | consider | medium | proof | P(N) has the same cardinality as R | no |
| lebl-1.5.5 | consider | medium | proof | \|R\| = \|P(N)\| | yes |
| tao-8.1.1 | consider | medium | proof | X infinite iff X is equinumerous with a proper subset | no |
| tao-8.1.10 | consider | medium | construction | explicit bijection N → Q | no |

## real-numbers (46)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| abbott-1.3.6 | core | easy | proof | sup(A+B) = sup A + sup B | no |
| cummings-1.24 | core | easy | proof | sup(A+B) = sup A + sup B | yes |
| lebl-1.2.8 | core | easy | proof | irrationals are dense in R | yes |
| ross-4.12 | core | easy | proof | irrationals are dense in R | no |
| ross-4.14 | core | easy | proof | sup(A+B) = sup A + sup B | no |
| abbott-1.4.7 | core | medium | proof | existence of sqrt(2) via supremum of {t : t^2 < 2} | no |
| abbott-1.2.10 | strong | easy | counterexample | a <= b iff a < b + epsilon for all epsilon > 0 (and why strict < fails) | no |
| abbott-1.4.2 | strong | easy | proof | s = sup A iff s + 1/n is an upper bound and s - 1/n is not, for all n | no |
| cummings-1.18 | strong | easy | proof | ε-characterization of sup/inf: inf A = β iff β lower bound and ∀ε ∃x∈A, x<β+ε | yes |
| cummings-1.20 | strong | easy | proof | sup A < sup B ⇒ some b∈B bounds A above | yes |
| cummings-1.21 | strong | easy | proof | sup(−A) = −inf(A) | yes |
| lebl-1.4.7 | strong | easy | proof | any family of disjoint open intervals is countable | yes |
| ross-11.11 | strong | easy | construction | increasing sequence in S converging to sup S | no |
| ross-4.11 | strong | easy | proof | infinitely many rationals between any two reals | no |
| ross-4.16 | strong | easy | proof | sup{r ∈ Q : r < a} = a | no |
| ross-4.7 | strong | easy | proof | S ⊆ T ⇒ inf T ≤ inf S ≤ sup S ≤ sup T; sup(S∪T)=max(sup S, sup T) | no |
| ross-4.8 | strong | easy | proof | s ≤ t for all s∈S, t∈T ⇒ sup S ≤ inf T | no |
| ross-5.4 | strong | easy | proof | inf S = -sup(-S) | no |
| tao-5.4.5 | strong | easy | proof | density of rationals | no |
| tao-5.5.5 | strong | easy | proof | density of irrationals | no |
| tao-9.1.15 | strong | easy | proof | sup E lies in closure of E and of its complement | no |
| abbott-1.4.3 | strong | introductory | counterexample | intersection of (0,1/n) is empty — nested open intervals can have empty intersection | no |
| cummings-1.23 | strong | introductory | counterexample | Nested open intervals can have empty intersection, e.g. (0,1/n) | yes |
| lebl-1.2.12 | strong | introductory | definition | sup approximation property: for every ε there is x in S with sup S − ε < x ≤ sup S | yes |
| ross-10.7 | strong | introductory | proof | sup S is a limit of a sequence in S | no |
| ross-3.5 | strong | introductory | proof | reverse triangle inequality \|\|a\|-\|b\|\| <= \|a-b\| | no |
| ross-3.8 | strong | introductory | proof | if a <= b1 for every b1 > b then a <= b (epsilon-room lemma) | no |
| ross-4.15 | strong | introductory | proof | a <= b + 1/n for all n implies a <= b | no |
| tao-5.4.7 | strong | introductory | proof | x ≤ y + ε for all ε>0 ⇔ x ≤ y; \|x−y\| ≤ ε ∀ε ⇔ x=y | no |
| tao-5.5.1 | strong | introductory | proof | inf(−E) = −sup(E) | no |
| lebl-1.2.11 | strong | medium | proof | existence and uniqueness of positive nth roots via supremum | yes |
| lebl-1.4.6 | consider | easy | proof | closed interval = countable intersection of open intervals; intersection of closed intervals is an interval, point, or empty | yes |
| ross-5.7 | consider | easy | proof | inf(A+B) = inf A + inf B for arbitrary nonempty sets | no |
| tao-5.4.3 | consider | easy | proof | existence/uniqueness of floor ⌊x⌋ | no |
| abbott-2.6.7 | consider | hard | proof | BW ⇒ MCT; Cauchy Criterion ⇒ BW (needs Archimedean property) | no |
| cummings-1.25 | consider | introductory | counterexample | sup(A·B) ≠ sup A · sup B in general | yes |
| cummings-1.26 | consider | introductory | counterexample | Rationals with bounded denominators are not dense | yes |
| cummings-1.7 | consider | introductory | proof | max{x,y} = (x+y+\|x-y\|)/2 and min{x,y} = (x+y-\|x-y\|)/2 | yes |
| lebl-1.2.1 | consider | introductory | theorem-application | Archimedean property: 1/n^2 < t for some n | yes |
| ross-4.3 | consider | introductory | computation | compute sup of concrete sets | no |
| tao-5.4.4 | consider | introductory | theorem-application | for x>0 there is N with 1/N < x | no |
| tao-6.3.1 | consider | introductory | computation | sup{1/n}=1, inf{1/n}=0 | no |
| tao-6.4.6 | consider | introductory | counterexample | a_n < b_n does not imply sup a_n < sup b_n | no |
| abbott-1.3.10 | consider | medium | proof | Cut Property (Dedekind cuts) equivalent to the least upper bound property | no |
| abbott-2.4.4 | consider | medium | proof | Monotone Convergence Theorem implies Archimedean Property and Nested Interval Property | no |
| lebl-1.2.15 | consider | medium | proof | sup{x in Q : x < y} = y; Dedekind cuts correspond to reals | yes |

## sequences (84)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| cummings-3.20 | core | easy | proof | b_n = sup_{k≥n} a_k converges (limsup exists for bounded sequences) | yes |
| ross-12.4 | core | easy | proof | limsup(s_n + t_n) ≤ limsup s_n + limsup t_n | no |
| ross-8.9 | core | easy | proof | order limit theorem: s_n ≥ a eventually ⇒ lim s_n ≥ a | no |
| ross-9.12 | core | easy | proof | ratio test for sequences: lim \|s_{n+1}/s_n\| < 1 ⇒ s_n → 0 | no |
| tao-6.3.3 | core | easy | proof | monotone convergence theorem (bounded increasing ⇒ converges to sup) | no |
| tao-6.6.5 | core | easy | proof | L is a limit (cluster) point of (a_n) iff some subsequence converges to L | no |
| abbott-2.3.3 | core | introductory | proof | Squeeze Theorem for sequences | no |
| cummings-3.12 | core | introductory | proof | bounded × (→0) → 0 | yes |
| ross-8.1 | core | introductory | proof | epsilon-N proofs of explicit limits | no |
| ross-8.4 | core | introductory | proof | bounded sequence times null sequence tends to 0 | no |
| ross-8.5 | core | introductory | proof | squeeze theorem for sequences | no |
| abbott-2.5.8 | core | medium | proof | every sequence has a monotone subsequence (peak terms) | no |
| cummings-3.19 | core | medium | proof | Cesàro mean of a convergent sequence converges to the same limit | yes |
| ross-12.12 | core | medium | proof | Cesàro mean: lim s_n = s ⇒ lim σ_n = s; converse false | no |
| abbott-2.3.1 | strong | easy | proof | x_n -> x, x_n >= 0 implies sqrt(x_n) -> sqrt(x) | no |
| abbott-2.4.1 | strong | easy | proof | recursive sequence x_{n+1} = 1/(4 - x_n) converges (MCT + fixed point) | no |
| abbott-2.6.5 | strong | easy | counterexample | \|s_{n+1} - s_n\| -> 0 does not imply Cauchy/bounded (e.g. sqrt n, partial sums of harmonic series) | no |
| cummings-3.4 | strong | easy | definition | Quantifier variants of the definition of convergence | yes |
| lebl-2.1.16 | strong | easy | proof | two subsequences with different limits ⇒ divergence | yes |
| lebl-2.2.12 | strong | easy | proof | bounded sequence times null sequence → 0 | yes |
| ross-10.10 | strong | easy | proof | recursive sequence s_{n+1} = (s_n+1)/3: bounded below, decreasing, limit 1/2 | no |
| ross-11.5 | strong | easy | conceptual | enumeration of Q∩(0,1] has every point of [0,1] as subsequential limit | no |
| ross-11.7 | strong | easy | construction | enumeration of Q has a subsequence tending to +∞ | no |
| ross-11.8 | strong | easy | proof | liminf s_n = -limsup(-s_n) | no |
| ross-12.1 | strong | easy | proof | s_n ≤ t_n eventually ⇒ limsup s_n ≤ limsup t_n, liminf s_n ≤ liminf t_n | no |
| ross-12.2 | strong | easy | proof | limsup \|s_n\| = 0 iff s_n → 0 | no |
| ross-12.8 | strong | easy | proof | limsup s_n t_n ≤ (limsup s_n)(limsup t_n) for nonnegative bounded sequences | no |
| ross-9.15 | strong | easy | proof | a^n/n! → 0 | no |
| tao-6.1.5 | strong | easy | proof | convergent ⇒ Cauchy | no |
| tao-6.1.8 | strong | easy | proof | algebraic limit theorem for sequences (sum, product, quotient, max/min) | no |
| tao-6.4.10 | strong | easy | proof | limit points of limit points are limit points (set of subsequential limits is closed) | no |
| tao-6.5.2 | strong | easy | proof | x^n → 0 for \|x\|<1, diverges for x=−1 or \|x\|>1 | no |
| tao-6.5.3 | strong | easy | proof | lim x^{1/n} = 1 for x>0 | no |
| tao-6.6.4 | strong | easy | proof | a_n → L iff every subsequence → L | no |
| abbott-2.2.7 | strong | introductory | conceptual | eventually vs frequently; convergence = eventually in every neighborhood | no |
| cummings-3.11 | strong | introductory | proof | convergent + divergent is divergent | yes |
| cummings-3.14 | strong | introductory | theorem-application | Bolzano–Weierstrass application: bounded subsequence ⇒ convergent subsequence | yes |
| cummings-3.2 | strong | introductory | proof | ε-N proofs of explicit limits | yes |
| lebl-2.1.7 | strong | introductory | counterexample | x_n → 0 iff \|x_n\| → 0; \|x_n\| convergent does not imply x_n convergent | yes |
| lebl-2.2.7 | strong | introductory | counterexample | x_n^2 convergent does not imply x_n convergent ((-1)^n) | yes |
| ross-8.10 | strong | introductory | proof | lim s_n > a ⇒ s_n > a eventually | no |
| ross-8.3 | strong | introductory | proof | s_n → 0, s_n ≥ 0 ⇒ sqrt(s_n) → 0 | no |
| ross-9.6 | strong | introductory | conceptual | recursive sequence: must prove convergence before solving a = f(a) | no |
| abbott-2.5.1 | strong | medium | construction | set of subsequential limits: examples, and it must contain its limit points (e.g. 0) | no |
| abbott-2.5.9 | strong | medium | proof | BW via s = sup{x : x < a_n for infinitely many n} (this s is lim sup) | no |
| cummings-3.5 | strong | medium | construction | Sequence whose set of subsequential limits is [0,1] | yes |
| lebl-2.2.11 | strong | medium | proof | Newton/Babylonian iteration converges to sqrt(r) | yes |
| lebl-2.3.12 | strong | medium | proof | limsup x_n = inf{s : eventually x_n < r for every r > s} | yes |
| lebl-2.3.4 | strong | medium | proof | bounded sequence converges to x iff every convergent subsequence converges to x | yes |
| abbott-2.4.2 | consider | easy | conceptual | pitfall: taking limits in a recursion without knowing convergence | no |
| abbott-2.6.4 | consider | easy | counterexample | which operations preserve Cauchy sequences (\|a_n - b_n\|, (-1)^n a_n, floor) | no |
| cummings-3.27 | consider | easy | proof | \|a_n − b_n\| is Cauchy if (a_n),(b_n) are Cauchy | yes |
| lebl-2.1.11 | consider | easy | proof | monotone convergence theorem (decreasing case) | yes |
| lebl-2.1.23 | consider | easy | proof | monotone sequence with a convergent subsequence converges | yes |
| lebl-2.3.15 | consider | easy | proof | ratio test for sequences, limsup version | yes |
| lebl-2.3.20 | consider | easy | proof | limsup = ∞ ⇒ subsequence tending to ∞ | yes |
| ross-10.9 | consider | easy | proof | recursive sequence: monotone bounded, solve fixed-point equation | no |
| ross-12.14 | consider | easy | computation | (n!)^{1/n} → ∞ and (n!)^{1/n}/n → 1/e | no |
| ross-12.9 | consider | easy | proof | s_n → +∞, liminf t_n > 0 ⇒ s_n t_n → +∞ | no |
| ross-16.9 | consider | easy | proof | Euler–Mascheroni constant exists | no |
| ross-8.8 | consider | easy | proof | lim (sqrt(n^2+n) - n) = 1/2 | no |
| ross-9.13 | consider | easy | proof | lim a^n: 0, 1, +∞, or DNE | no |
| ross-9.14 | consider | easy | theorem-application | a^n/n^p limits | no |
| tao-6.4.1 | consider | easy | proof | a convergent sequence has its limit as its only limit point | no |
| tao-6.4.4 | consider | easy | proof | a_n ≤ b_n ⇒ limsup a_n ≤ limsup b_n (comparison principle) | no |
| tao-6.4.5 | consider | easy | proof | squeeze theorem for sequences | no |
| tao-6.4.8 | consider | easy | proof | limsup is the largest subsequential limit (in the extended reals) | no |
| tao-6.4.9 | consider | easy | construction | sequence with prescribed subsequential limits | no |
| tao-6.6.3 | consider | easy | construction | unbounded sequence has a subsequence with \|b_n\| → ∞ | no |
| abbott-2.2.4 | consider | introductory | counterexample | examples probing the definition of convergence (infinitely many ones, long runs) | no |
| cummings-3.1 | consider | introductory | proof | A sequence with positive limit is eventually positive | yes |
| cummings-3.28 | consider | introductory | theorem-application | Comparison of partial sums: Σ1/n³ converges using Σ1/n² bounded | yes |
| lebl-2.1.6 | consider | introductory | proof | n/(n^2+1) → 0 via epsilon-N | yes |
| ross-10.11 | consider | introductory | conceptual | existence via monotone convergence vs. computing the value | no |
| ross-11.3 | consider | introductory | computation | compute subsequential limits, limsup, liminf | no |
| ross-12.3 | consider | introductory | counterexample | strict inequality in limsup(s+t) ≤ limsup s + limsup t | no |
| ross-7.4 | consider | introductory | construction | sequence of rationals with irrational limit (and vice versa) | no |
| tao-6.1.2 | consider | introductory | definition | ε–N definition of convergence (≤ε form) | no |
| tao-6.1.9 | consider | introductory | counterexample | quotient law fails when denominator limit is 0 | no |
| tao-6.4.7 | consider | introductory | counterexample | a_n → 0 ⇔ \|a_n\| → 0; \|a_n\| → c ≠ 0 does not imply a_n → c | no |
| tao-6.6.2 | consider | introductory | counterexample | two distinct sequences each a subsequence of the other | no |
| lebl-2.2.10 | consider | medium | proof | lim x_n^{1/k} = (lim x_n)^{1/k} | yes |
| lebl-2.3.11 | consider | medium | proof | if every subsequence has a sub-subsequence converging to x, then x_n → x | yes |
| ross-12.11 | consider | medium | proof | liminf \|s_{n+1}/s_n\| ≤ liminf \|s_n\|^{1/n} | no |

## series (50)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| ross-15.7 | core | medium | proof | a_n decreasing and sum a_n converges ⇒ n a_n → 0 | no |
| abbott-2.7.7 | strong | easy | proof | limit comparison: n a_n -> l ≠ 0 ⇒ divergence; n^2 a_n bounded ⇒ convergence | no |
| cummings-4.10 | strong | easy | proof | Proof of the root test | yes |
| cummings-4.9 | strong | easy | proof | Proof of the ratio test | yes |
| lebl-2.5.11 | strong | easy | proof | limit comparison test | yes |
| lebl-2.5.9 | strong | easy | counterexample | ∑\|x_n\|, ∑\|y_n\| < ∞ ⇒ ∑\|x_n y_n\| < ∞; (∑x_n)(∑y_n) ≠ ∑x_n y_n | yes |
| ross-14.6 | strong | easy | proof | sum \|a_n\| < ∞, (b_n) bounded ⇒ sum a_n b_n converges | no |
| ross-15.6 | strong | easy | counterexample | sum a_n vs sum a_n^2: neither implies the other without sign condition | no |
| ross-23.5 | strong | easy | proof | integer coefficients (infinitely many nonzero) or limsup\|a_n\|>0 forces R <= 1 | no |
| tao-7.2.4 | strong | easy | proof | absolute convergence ⇒ convergence, \|Σa_n\| ≤ Σ\|a_n\| | no |
| tao-7.4.1 | strong | easy | proof | subseries of an absolutely convergent series converges absolutely | no |
| tao-7.5.2 | strong | easy | theorem-application | Σ n^q x^n converges absolutely for \|x\|<1, hence n^q x^n → 0 | no |
| cummings-4.15 | strong | hard | construction | Conditionally convergent series can be rearranged to diverge to ∞ (Riemann rearrangement) | yes |
| lebl-2.5.17 | strong | hard | proof | Abel/Dirichlet test via summation by parts | yes |
| tao-8.2.5 | strong | hard | proof | Riemann rearrangement theorem | no |
| ross-14.7 | strong | introductory | proof | sum a_n < ∞, a_n ≥ 0, p > 1 ⇒ sum a_n^p < ∞ | no |
| ross-14.8 | strong | introductory | proof | sum sqrt(a_n b_n) converges if sum a_n, sum b_n converge | no |
| tao-7.5.3 | strong | introductory | counterexample | ratio/root tests inconclusive when limit is 1 (Σ1/n vs Σ1/n²) | no |
| abbott-2.4.9 | strong | medium | proof | Cauchy condensation test (divergence direction) | no |
| abbott-2.7.13 | strong | medium | proof | Abel's Test via summation by parts | no |
| cummings-4.14 | strong | medium | proof | Convergent ⇒ Cesàro summable; converse false (1−1+1−…) | yes |
| lebl-2.6.11 | strong | medium | proof | convergent ⇒ Cesàro summable to same value; Cesàro summable divergent series | yes |
| tao-11.6.4 | strong | medium | counterexample | integral test fails without monotonicity | no |
| tao-8.2.2 | strong | medium | proof | absolutely summable family has at most countably many nonzero terms | no |
| cummings-4.6 | consider | easy | construction | Σa_k conv, Σa_k² div, Σa_k³ conv: e.g. (−1)^k/√k | yes |
| lebl-2.5.6 | consider | easy | proof | ratio test (eventual ratio bound version) | yes |
| ross-14.4 | consider | easy | computation | convergence of sum n!/n^n and sum (sqrt(n+1)-sqrt(n)) | no |
| ross-23.1 | consider | easy | computation | radius and exact interval of convergence of power series (computation drill) | no |
| ross-23.4 | consider | easy | computation | root test is stronger than ratio test; radius via limsup \|a_n\|^{1/n} when ratios oscillate | no |
| ross-23.6 | consider | easy | construction | nonnegative coefficients: convergence at R implies convergence at -R; power series with interval (-1,1] | no |
| tao-11.6.5 | consider | easy | theorem-application | p-series converges iff p > 1 (via integral test) | no |
| tao-8.2.4 | consider | easy | proof | positive and negative parts of a conditionally convergent series both diverge | no |
| abbott-2.7.11 | consider | hard | construction | two divergent decreasing positive series whose termwise minimum converges | no |
| cummings-4.17 | consider | hard | construction | Rearrangement with prescribed limsup β and liminf α of partial sums | yes |
| lebl-2.6.15 | consider | hard | proof | Tonelli/Fubini for double series | yes |
| lebl-2.6.4 | consider | hard | construction | rearrangement of alternating harmonic series with every real as a subsequential limit of partial sums | yes |
| tao-8.2.6 | consider | hard | construction | conditionally convergent series can be rearranged to diverge to +∞ | no |
| cummings-4.13 | consider | introductory | counterexample | Comparison test fails without nonnegativity | yes |
| lebl-2.5.14 | consider | introductory | proof | x_n ≥ 0, ∑x_n < ∞ ⇒ ∑x_n^2 < ∞ | yes |
| ross-14.14 | consider | introductory | proof | harmonic series diverges (grouping in powers of 2) | no |
| ross-15.5 | consider | introductory | conceptual | why comparison can't prove all p-series converge at once | no |
| tao-7.2.1 | consider | introductory | conceptual | Σ(−1)^n diverges (Grandi's series) | no |
| tao-7.2.3 | consider | introductory | theorem-application | nth-term (zero) test | no |
| tao-7.2.6 | consider | introductory | proof | telescoping series Σ(a_n − a_{n+1}) = a_0 − lim a_n | no |
| tao-7.3.1 | consider | introductory | proof | comparison test | no |
| abbott-2.7.6 | consider | medium | counterexample | invented 'subvergence' (convergent subsequence of partial sums) — true/false | no |
| abbott-2.8.7 | consider | medium | theorem-application | Cauchy product of absolutely convergent series converges to AB | no |
| lebl-2.5.13 | consider | medium | counterexample | s_{mk} converges and x_n → 0 ⇒ series converges; fails for sparse subsequences | yes |
| lebl-2.6.8 | consider | medium | counterexample | radius of convergence of sum/product can exceed both radii | yes |
| ross-15.8 | consider | medium | proof | integral test | no |

## topology (70)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| cummings-5.5 | core | easy | proof | Sequential vs. ε-neighborhood characterization of limit points | yes |
| ross-21.11 | core | hard | proof | Q is not a countable intersection of open sets (not G_delta) | yes |
| abbott-8.2.10 | core | medium | counterexample | Heine–Borel fails in C[0,1]: closed bounded unit ball not compact | no |
| cummings-5.11 | core | medium | proof | The only clopen subsets of R are ∅ and R (R is connected) | yes |
| lebl-7.4.7 | core | medium | proof | C([a,b],R) with the uniform metric is complete | no |
| ross-13.11 | core | medium | proof | compact iff sequentially compact in R^k | no |
| ross-22.3 | core | medium | proof | closure of a connected set is connected | yes |
| tao-9.1.13 | core | medium | proof | subset of R is closed and bounded iff every sequence has a subsequence converging in the set | no |
| abbott-3.2.11 | strong | easy | proof | closure of a finite union is the union of closures; fails for infinite unions | no |
| abbott-3.2.4 | strong | easy | proof | sup A lies in the closure of A; open set does not contain its supremum | no |
| abbott-3.3.3 | strong | easy | proof | closed and bounded ⇒ sequentially compact (Heine–Borel, sequential direction) | no |
| abbott-3.5.5 | strong | easy | theorem-application | R is not a countable union of closed sets with empty interior | no |
| abbott-8.2.11 | strong | easy | proof | closure of complement = complement of interior | no |
| abbott-8.2.8 | strong | easy | proof | open balls open; closed balls closed; E open iff complement closed (metric spaces) | no |
| cummings-5.10 | strong | easy | proof | Arbitrary intersection of compact sets is compact | yes |
| cummings-5.4 | strong | easy | proof | Finite unions / arbitrary intersections of closed sets are closed | yes |
| lebl-7.2.5 | strong | easy | proof | Q is totally disconnected (totally separated) | no |
| lebl-7.2.9 | strong | easy | proof | bi-Lipschitz equivalent metrics induce the same topology | no |
| lebl-7.3.1 | strong | easy | proof | limits of sequences in A lie in the closure of A | no |
| lebl-7.3.13 | strong | easy | proof | x_n -> p iff every subsequence has a sub-subsequence converging to p | no |
| lebl-7.3.14 | strong | easy | proof | Euclidean, taxicab, and max metrics on R^n give the same convergent sequences | no |
| lebl-7.3.7 | strong | easy | proof | R^n is separable (Q^n is a countable dense subset) | no |
| lebl-7.4.14 | strong | easy | proof | Bolzano–Weierstrass in R^n | no |
| lebl-7.4.3 | strong | easy | proof | discrete metric space: complete; compact iff finite | no |
| ross-13.12 | strong | easy | proof | closed subset of compact is compact; finite union of compacts is compact | no |
| ross-13.13 | strong | easy | proof | compact nonempty E ⊆ R has max and min | no |
| ross-13.3 | strong | easy | proof | sup metric on bounded sequences (ℓ^∞) | no |
| ross-21.10 | strong | easy | construction | continuous image of compact is compact: no continuous map [0,1] onto (0,1) or R | yes |
| ross-22.1 | strong | easy | theorem-application | continuous image of an interval is an interval (no continuous map onto disconnected set or Q) | yes |
| ross-22.5 | strong | easy | proof | union of intersecting connected sets is connected; intersection need not be | yes |
| tao-9.1.5 | strong | easy | proof | x in closure of X iff x is a limit of a sequence in X | no |
| tao-9.1.6 | strong | easy | proof | closure is the smallest closed set containing X | no |
| abbott-8.2.14 | strong | hard | proof | Baire category theorem: countable intersection of dense open sets in a complete metric space is nonempty | no |
| cummings-5.6 | strong | introductory | proof | (0,4) not compact: open cover (1/k, 4−1/k) has no finite subcover | yes |
| lebl-7.1.1 | strong | introductory | definition | the discrete metric is a metric | no |
| lebl-7.2.14 | strong | introductory | proof | interior = union of all open subsets | no |
| lebl-7.2.2 | strong | introductory | proof | closed balls are closed | no |
| lebl-7.4.4 | strong | introductory | proof | finite unions of compact sets are compact; infinite unions need not be | no |
| ross-13.4 | strong | introductory | proof | arbitrary unions / finite intersections of open sets are open | no |
| tao-9.1.8 | strong | introductory | proof | arbitrary intersection of closed sets is closed | no |
| abbott-8.2.15 | strong | medium | proof | Baire category theorem: complete metric space is not a countable union of nowhere-dense sets | no |
| lebl-7.1.13 | strong | medium | proof | ℓ^2 Cauchy–Schwarz and ℓ^2 is a metric space | no |
| lebl-7.3.8 | strong | medium | counterexample | nested open sets with ∩U_n={p} and x_n∈U_n need not converge to p | no |
| lebl-7.4.17 | strong | medium | proof | incomplete metric space has a closed bounded non-compact set | no |
| ross-13.15 | strong | medium | counterexample | closed bounded but not compact (unit ball in ℓ^∞) | no |
| ross-13.6 | strong | medium | proof | closed iff contains limits of its convergent sequences; closure = set of sequential limits | no |
| abbott-3.2.14 | consider | easy | proof | complement of closure = interior of complement | no |
| abbott-3.3.11 | consider | easy | counterexample | open covers without finite subcover for N, Q∩[0,1], {1/n}-type sets | no |
| abbott-3.3.13 | consider | easy | conceptual | 'clompact' (closed-cover compact) sets are exactly the finite sets | no |
| abbott-3.4.7 | consider | easy | proof | Q and the irrationals are totally disconnected | no |
| abbott-7.6.18 | consider | easy | computation | fat (Smith–Volterra–Cantor) set has positive length | no |
| abbott-8.2.12 | consider | easy | counterexample | closure of open ball can be strictly smaller than closed ball (discrete metric) | no |
| cummings-5.2 | consider | easy | proof | Finite union / intersection of compact sets is compact | yes |
| lebl-7.2.16 | consider | easy | construction | every metric is topologically equivalent to a bounded metric | no |
| ross-13.1 | consider | easy | proof | max and taxicab metrics on R^k are complete | no |
| ross-13.10 | consider | easy | proof | Q and the Cantor set have empty interior | no |
| ross-22.11 | consider | easy | proof | closed unit ball of C(S) is closed and connected; C(S) connected | yes |
| tao-9.1.7 | consider | easy | proof | finite union of closed sets is closed | no |
| tao-9.1.9 | consider | easy | definition | closure = limit points disjoint-union isolated points | no |
| lebl-7.4.11 | consider | hard | proof | bounded set of quadratic polynomials in C[0,1] is compact | no |
| cummings-5.9 | consider | introductory | counterexample | Compact ∩ bounded need not be compact | yes |
| lebl-7.1.6 | consider | introductory | proof | sum and max metrics on a product of metric spaces | no |
| lebl-7.2.4 | consider | introductory | proof | discrete metric space is connected iff it has one point | no |
| tao-9.1.4 | consider | introductory | counterexample | closure of intersection can be strictly smaller than intersection of closures | no |
| abbott-3.3.10 | consider | medium | proof | Heine–Borel for [a,b] via sup of finitely-coverable initial segments | no |
| abbott-3.3.12 | consider | medium | proof | bounded infinite set has a limit point, via open covers (no BW) | no |
| lebl-7.1.8 | consider | medium | proof | Hausdorff distance is a pseudometric on nonempty bounded sets | no |
| lebl-7.4.20 | consider | medium | proof | relatively compact iff every sequence in S has a subsequence converging in X | no |
| lebl-7.4.9 | consider | medium | construction | there is a metric making R compact | no |
| ross-13.14 | consider | medium | proof | diameter of compact set is attained | no |

## continuity (106)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| abbott-4.4.11 | core | easy | proof | f continuous iff preimage of every open set is open | no |
| abbott-4.4.9 | core | easy | proof | Lipschitz implies uniformly continuous; sqrt(x) is UC but not Lipschitz | no |
| cummings-6.23 | core | easy | proof | continuous functions agreeing on a dense set agree everywhere | yes |
| cummings-6.28 | core | easy | proof | uniformly continuous functions map Cauchy sequences to Cauchy sequences | yes |
| lebl-3.3.10 | core | easy | theorem-application | Brouwer fixed point theorem in 1D: continuous f:[0,1]->[0,1] has a fixed point | yes |
| lebl-7.5.4 | core | easy | proof | f continuous iff preimages of open sets are open | no |
| ross-17.12 | core | easy | proof | continuous functions agreeing on the rationals are equal | yes |
| ross-17.13 | core | easy | counterexample | Dirichlet function nowhere continuous; x on Q, 0 off Q continuous only at 0 | yes |
| tao-9.7.2 | core | easy | theorem-application | continuous f:[0,1]->[0,1] has a fixed point | no |
| tao-9.8.5 | core | hard | construction | monotone function discontinuous exactly at the rationals (sum of 2^{-n} jumps) | no |
| cummings-6.10 | core | medium | proof | Thomae's function: continuous at irrationals, discontinuous at rationals | yes |
| ross-17.14 | core | medium | proof | Thomae's function continuous exactly on the irrationals | yes |
| tao-9.3.1 | core | medium | proof | sequential characterization of functional limits | no |
| tao-9.8.3 | core | medium | proof | continuous injective function on an interval is strictly monotone | no |
| abbott-4.3.8 | strong | easy | proof | continuous functions agreeing on Q agree everywhere; sign preservation near a point | no |
| abbott-4.4.1 | strong | easy | proof | x^3 continuous but not uniformly continuous on R; uniformly continuous on bounded sets | no |
| cummings-6.21 | strong | easy | counterexample | continuous image of [a,b] is a closed bounded interval; (a,b) can map onto [c,d] | yes |
| cummings-6.3 | strong | easy | counterexample | limit laws: sums/products of non-existent limits (examples or proofs) | yes |
| cummings-6.30 | strong | easy | theorem-application | one-dimensional Brouwer fixed point theorem | yes |
| cummings-6.34 | strong | easy | proof | uniform continuity of f+g, fg (bounded), g∘f; x·x not UC | yes |
| cummings-6.9 | strong | easy | proof | x on Q, -x off Q: limit exists only at 0 | yes |
| lebl-3.2.3 | strong | easy | proof | f = x on Q, x^2 off Q: continuous exactly where x = x^2 | yes |
| lebl-3.2.4 | strong | easy | proof | sin(1/x) (with f(0)=0) is discontinuous at 0 | yes |
| lebl-3.4.10 | strong | easy | counterexample | continuous functions need not preserve Cauchy sequences; on R they do | yes |
| lebl-7.5.3 | strong | easy | proof | f(closure A) ⊂ closure f(A), possibly strict | no |
| ross-17.10 | strong | easy | proof | sin(1/x) (and jump functions) discontinuous at 0 via sequences | yes |
| ross-18.10 | strong | easy | theorem-application | horizontal chord theorem (chord of length 1) | yes |
| ross-18.9 | strong | easy | theorem-application | odd-degree polynomial has a real root | yes |
| ross-19.6 | strong | easy | counterexample | sqrt x uniformly continuous although f' unbounded | yes |
| ross-20.16 | strong | easy | counterexample | limits preserve <=, not < | yes |
| ross-20.17 | strong | easy | proof | squeeze theorem for functional limits | yes |
| ross-21.13 | strong | easy | proof | f continuous at x iff oscillation omega_f(x) = 0 | yes |
| ross-21.2 | strong | easy | proof | continuity at a point via open neighborhoods | yes |
| tao-9.4.1 | strong | easy | proof | equivalent formulations of continuity (sequential vs epsilon-delta) | no |
| tao-9.6.1 | strong | easy | counterexample | extreme value theorem hypotheses are sharp (counterexamples) | no |
| tao-9.9.3 | strong | easy | proof | uniformly continuous functions preserve Cauchy sequences | no |
| lebl-3.4.17 | strong | hard | proof | locally Lipschitz on [a,b] implies Lipschitz | yes |
| abbott-4.2.11 | strong | introductory | proof | squeeze theorem for functional limits | no |
| abbott-4.2.7 | strong | introductory | proof | bounded function times function tending to 0 tends to 0 | no |
| ross-21.3 | strong | introductory | proof | distance to a point is uniformly continuous (1-Lipschitz) | yes |
| abbott-4.4.4 | strong | medium | counterexample | UC on bounded set ⇒ bounded image; compact-preserving need not imply continuous | no |
| abbott-4.6.2 | strong | medium | construction | function discontinuous exactly on a given countable set | no |
| cummings-6.11 | strong | medium | proof | Thomae-type function from disjoint finite sets A_n: limit 0 everywhere | yes |
| cummings-6.15 | strong | medium | construction | function discontinuous exactly at {1/n} (and at 0) | yes |
| cummings-6.22 | strong | medium | proof | universal chord theorem (horizontal chord of length 1/2) | yes |
| cummings-6.24 | strong | medium | proof | uniformly continuous on bounded set implies bounded; sin(1/x) bounded but not UC | yes |
| cummings-6.35 | strong | medium | proof | monotone function has at most countably many discontinuities | yes |
| lebl-3.1.14 | strong | medium | counterexample | limit of composition fails without g(c2)=L (counterexample) | yes |
| lebl-3.1.9 | strong | medium | proof | limit of composition g(f(x)) with g(c2)=L hypothesis | yes |
| lebl-3.2.16 | strong | medium | proof | additive function continuous at a point is linear (Cauchy functional equation) | yes |
| lebl-3.3.4 | strong | medium | proof | sin(1/x) (f(0)=0) has the intermediate value property but is discontinuous | yes |
| lebl-3.4.2 | strong | medium | proof | uniformly continuous f on (a,b) has a limit at b (continuous extension) | yes |
| lebl-7.5.10 | strong | medium | proof | distance function is continuous; distance between compact sets is attained | no |
| ross-19.12 | strong | medium | proof | running supremum f*(x) = sup_{[a,x]} f is continuous and increasing | yes |
| ross-19.7 | strong | medium | proof | uniform continuity on [0,k] and [k,infinity) gives uniform continuity on [0,infinity); sqrt x uniformly continuous on [0, infinity) | yes |
| ross-19.9 | strong | medium | proof | x sin(1/x) is uniformly continuous on R | yes |
| tao-9.8.4 | strong | medium | proof | inverse of continuous strictly increasing function on [a,b] is continuous | no |
| tao-9.9.4 | strong | medium | proof | uniformly continuous function has a limit at each boundary point / extends to closure | no |
| tao-9.9.5 | strong | medium | proof | uniformly continuous function on a bounded set is bounded | no |
| abbott-4.3.1 | consider | easy | proof | cube root is continuous (epsilon-delta) | no |
| abbott-4.4.7 | consider | easy | proof | sqrt(x) is uniformly continuous on [0,∞) (but not Lipschitz) | no |
| abbott-4.5.2 | consider | easy | counterexample | possible ranges of continuous functions on intervals | no |
| abbott-7.6.8 | consider | easy | proof | set of points of oscillation >= alpha is closed | no |
| abbott-8.2.6 | consider | easy | proof | point evaluation is continuous for sup metric but not for L^1 metric | no |
| cummings-6.20 | consider | easy | conceptual | exactly four continuous f with f(x)^2 = x^2 | yes |
| lebl-3.1.1 | consider | easy | computation | computing/disproving function limits incl. x^2 cos(1/x), sin(1/x)cos(1/x) | yes |
| lebl-3.1.10 | consider | easy | proof | f(x_n) convergent for every sequence implies f constant | yes |
| lebl-3.1.12 | consider | easy | proof | limit exists iff one-sided limits exist and are equal | yes |
| lebl-3.2.13 | consider | easy | proof | f(x_n) convergent for all x_n -> c implies continuity at c | yes |
| lebl-3.3.2 | consider | easy | counterexample | bounded discontinuous function on [0,1] with no max or min | yes |
| lebl-3.3.9 | consider | easy | proof | bounded polynomial on R is constant | yes |
| lebl-3.4.14 | consider | easy | proof | Lipschitz K with f(0)=f(1)=0 implies \|f\| <= K/2 (sharp) | yes |
| lebl-3.4.7 | consider | easy | theorem-application | x(1-x)f(x) uniformly continuous for bounded continuous f on (0,1) | yes |
| lebl-3.5.2 | consider | easy | proof | lim_{x->0+} f(1/x) = lim_{x->infinity} f(x) | yes |
| lebl-6.3.5 | consider | easy | proof | continuous in x and uniformly Lipschitz in y implies jointly continuous | no |
| lebl-7.5.1 | consider | easy | proof | continuous integer-valued function on a connected space is constant | no |
| ross-18.5 | consider | easy | theorem-application | IVT for f - g / fixed point of continuous map [0,1] -> [0,1] | yes |
| ross-21.4 | consider | easy | proof | f continuous iff preimages of (rational) open intervals are open | yes |
| ross-22.10 | consider | easy | proof | translation x -> f(x + ·) is uniformly continuous into C(R) for uniformly continuous f | yes |
| tao-9.3.5 | consider | easy | proof | squeeze theorem for function limits | no |
| tao-9.5.1 | consider | easy | definition | definition of infinite limits and one-sided limits of 1/x at 0 | no |
| tao-9.7.1 | consider | easy | theorem-application | continuous image of a closed bounded interval is a closed bounded interval | no |
| abbott-4.3.14 | consider | hard | construction | function discontinuous exactly on a given closed set / open set | no |
| abbott-4.2.5 | consider | introductory | proof | epsilon-delta proofs of polynomial and 1/x limits | no |
| abbott-4.3.9 | consider | introductory | proof | zero set of a continuous function is closed | no |
| cummings-6.2 | consider | introductory | counterexample | epsilon-delta: halving delta need not halve epsilon | yes |
| lebl-3.2.9 | consider | introductory | counterexample | nowhere continuous f, g with f+g continuous (Dirichlet-type) | yes |
| lebl-3.3.13 | consider | introductory | counterexample | continuous f bounded on Z need not be bounded | yes |
| lebl-3.4.16 | consider | introductory | proof | \|f(x)-f(y)\| <= g(\|x-y\|) with g continuous at 0, g(0)=0 implies uniform continuity | yes |
| ross-17.5 | consider | introductory | proof | polynomials are continuous on R | yes |
| ross-19.8 | consider | introductory | theorem-application | sin is 1-Lipschitz hence uniformly continuous on R | yes |
| tao-9.8.1 | consider | introductory | conceptual | monotone functions on [a,b] attain max/min | no |
| tao-9.8.2 | consider | introductory | counterexample | monotone function without intermediate value property | no |
| tao-9.9.6 | consider | introductory | proof | composition of uniformly continuous functions | no |
| abbott-4.5.4 | consider | medium | proof | set where a continuous function fails to be one-to-one is empty or uncountable | no |
| abbott-4.6.8 | consider | medium | proof | set of points of oscillation ≥ α is closed; D_f is F_sigma | no |
| lebl-3.3.16 | consider | medium | proof | even-degree monic polynomial attains an absolute minimum on R | yes |
| lebl-3.4.5 | consider | medium | proof | gluing uniformly continuous functions on overlapping intervals | yes |
| lebl-3.4.6 | consider | medium | proof | polynomials of degree >= 2 are not Lipschitz on R | yes |
| lebl-3.6.10 | consider | medium | construction | bounded increasing function on S extends to increasing function on R | yes |
| lebl-3.6.14 | consider | medium | proof | Dirichlet function is not a difference of two increasing functions | yes |
| lebl-7.5.17 | consider | medium | counterexample | 2xy/(x^4+y^2): separately continuous, discontinuous at 0, and ∫_0^1 f(x,y)dx discontinuous in y | no |
| lebl-7.5.7 | consider | medium | proof | proper continuous maps (0,1)->(0,1) send boundary-escaping sequences to boundary-escaping sequences | no |
| ross-17.11 | consider | medium | proof | continuity tested by monotone sequences | yes |
| tao-9.3.4 | consider | medium | definition | limsup/liminf of a function at a point and sequential characterization | no |
| tao-9.9.2 | consider | medium | proof | f uniformly continuous iff \|x_n - y_n\| -> 0 implies \|f(x_n) - f(y_n)\| -> 0 | no |

## differentiation (54)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| abbott-5.3.8 | core | easy | proof | if f continuous at 0 and lim_{x->0} f'(x) = L then f'(0) = L | no |
| cummings-7.9 | core | easy | proof | differentiable f on an interval is Lipschitz iff f' is bounded | yes |
| lebl-4.2.3 | core | easy | theorem-application | bounded derivative implies Lipschitz | yes |
| lebl-4.2.5 | core | easy | proof | \|f(x)-f(y)\| <= \|x-y\|^2 implies f constant | yes |
| ross-28.8 | core | easy | counterexample | x^2 on Q, 0 on irrationals: differentiable only at 0 | no |
| ross-29.5 | core | easy | proof | \|f(x)-f(y)\| <= (x-y)^2 implies f constant | no |
| abbott-5.2.10 | core | medium | counterexample | x/2 + x^2 sin(1/x): g'(0)>0 but g not increasing near 0 | no |
| abbott-5.3.1 | strong | easy | proof | C^1 on [a,b] => Lipschitz; \|f'\|<1 => contractive on [a,b] | no |
| abbott-5.3.6 | strong | easy | proof | \|g'\|<=M, g(0)=0 => \|g(x)\|<=Mx; second-order version \|h\|<=Mx^2/2 | no |
| cummings-7.4 | strong | easy | counterexample | x/2 on Q, x off Q: continuous but not differentiable at 0 | yes |
| cummings-7.7 | strong | easy | conceptual | x^a for x>=0, 0 for x<0: continuity/differentiability at 0 by a | yes |
| lebl-4.1.12 | strong | easy | proof | squeeze theorem for derivatives | yes |
| ross-28.14 | strong | easy | proof | differentiable implies symmetric derivative exists and equals f'(a) | no |
| ross-28.16 | strong | easy | proof | f'(a) exists iff f(x)-f(a) = (x-a)[f'(a) - eps(x)] with eps(x) -> 0 | no |
| ross-29.17 | strong | easy | proof | piecewise-glued function differentiable at a iff values and derivatives match | no |
| tao-10.2.4 | strong | easy | proof | Rolle's theorem | no |
| tao-10.2.6 | strong | easy | theorem-application | \|f'\| <= M implies f is M-Lipschitz | no |
| ross-28.6 | strong | introductory | counterexample | x sin(1/x): continuous at 0 but not differentiable at 0 | no |
| tao-10.1.3 | strong | introductory | proof | differentiable implies continuous | no |
| abbott-5.2.8 | strong | medium | conceptual | uniformly differentiable iff f' continuous (on closed interval); x^2 vs x^3 | no |
| abbott-5.2.9 | strong | medium | counterexample | Darboux property consequences; f'(c)>0 does not force f'>0 nearby; limit of f' equals f'(0) | no |
| abbott-5.3.11 | strong | medium | proof | L'Hospital's rule 0/0 case proof | no |
| abbott-6.6.8 | strong | medium | proof | Taylor remainder bound \|E_N\| <= M x^{N+1}/(N+1)! via derivative comparison | no |
| cummings-7.15 | strong | medium | proof | L'Hopital's rule, 0/0 case | yes |
| lebl-4.2.14 | strong | medium | proof | f' bounded on (0,1) gives continuous extension to 0, not necessarily differentiable | yes |
| lebl-4.3.10 | strong | medium | proof | nth derivative test for extrema | yes |
| lebl-5.4.11 | strong | medium | counterexample | e^{-1/x}: smooth (C^∞) but not analytic at 0 | no |
| ross-29.3 | strong | medium | theorem-application | MVT + Darboux's theorem: derivative attains intermediate values | no |
| tao-10.1.7 | strong | medium | proof | chain rule | no |
| abbott-5.3.3 | consider | easy | theorem-application | IVT/MVT/Darboux combination problem | no |
| abbott-5.3.5 | consider | easy | proof | Cauchy's generalized mean value theorem | no |
| lebl-4.1.14 | consider | easy | conceptual | differentiability as linear approximation with o(\|x-c\|) error | yes |
| lebl-4.1.16 | consider | easy | proof | f(c)=0, f'(c)>0 implies f changes sign from negative to positive at c | yes |
| lebl-4.2.15 | consider | easy | proof | Cauchy mean value theorem | yes |
| lebl-4.2.4 | consider | easy | proof | f'(c) is a limit of f'(x_n) for some x_n -> c | yes |
| lebl-4.3.3 | consider | easy | counterexample | \|x\|^3 is C^2 but f'''(0) does not exist | yes |
| lebl-4.4.4 | consider | easy | theorem-application | odd nth root is differentiable except at 0 | yes |
| lebl-4.4.7 | consider | easy | proof | f' >= k > 0 implies f is a C^1 bijection of R | yes |
| ross-28.3 | consider | easy | computation | derivatives of sqrt(x) and x^{1/3} from the definition; x^{1/3} not differentiable at 0 | no |
| ross-31.11 | consider | easy | proof | limit of convergent Newton iterates is a zero of f | no |
| tao-10.4.1 | consider | easy | theorem-application | x^{1/n} is continuous and differentiable with derivative (1/n)x^{1/n-1} | no |
| tao-10.5.1 | consider | easy | proof | L'Hôpital's rule (0/0, g'(x0) != 0 version) | no |
| tao-11.9.2 | consider | easy | theorem-application | two antiderivatives differ by a constant | no |
| ross-28.5 | consider | introductory | conceptual | the faulty proof of the chain rule (f(x)-f(a) can vanish arbitrarily close to a) | no |
| ross-28.7 | consider | introductory | counterexample | x^2 for x>=0, 0 for x<0: C^1 but not twice differentiable | no |
| ross-29.13 | consider | introductory | theorem-application | f(0)=g(0) and f' <= g' imply f <= g on [0, infinity) | no |
| tao-10.2.2 | consider | introductory | counterexample | \|x\|: extremum without derivative | no |
| tao-10.2.3 | consider | introductory | counterexample | x^3: stationary point that is not an extremum | no |
| tao-10.2.7 | consider | introductory | theorem-application | bounded derivative implies uniformly continuous | no |
| tao-10.3.3 | consider | introductory | counterexample | x^3 strictly increasing with f'(0)=0 | no |
| lebl-4.3.6 | consider | medium | proof | vanishing of derivatives up to n iff f(x)/(x-x0)^{n+1} has a limit | yes |
| lebl-4.3.8 | consider | medium | counterexample | x^3 sin(1/x^2)-type: \|f\| <= \|x^3\| but f''(0) fails to exist | yes |
| lebl-4.4.8 | consider | medium | proof | differentiability of f from that of its inverse g; g'(y)=0 obstructs | yes |
| ross-30.7 | consider | medium | counterexample | Stolz counterexample: f'/g' -> 0 but f/g has no limit when g' vanishes | no |

## integration (51)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| abbott-7.2.7 | core | easy | proof | monotone functions are Riemann integrable | no |
| abbott-7.4.1 | core | easy | proof | f integrable => \|f\| integrable and \|∫f\| <= ∫\|f\| | no |
| lebl-5.2.5 | core | easy | proof | continuous nonnegative function with zero integral is identically zero | no |
| ross-33.8 | core | easy | proof | product, max and min of integrable functions are integrable | no |
| ross-34.11 | core | easy | proof | continuous f with integral of f^2 equal to 0 is identically 0 | no |
| tao-11.4.2 | core | easy | proof | continuous nonnegative f with zero integral is identically zero | no |
| abbott-7.3.2 | core | medium | proof | Thomae's function is Riemann integrable with integral 0 | no |
| cummings-8.13 | core | medium | proof | Thomae's function is Riemann integrable (integral 0) | yes |
| abbott-7.4.3 | strong | easy | counterexample | \|f\| integrable does not imply f integrable; continuous nonneg nonzero has positive integral | no |
| cummings-8.12 | strong | easy | proof | monotone functions are Riemann integrable | yes |
| cummings-8.14 | strong | easy | counterexample | f not integrable but f^2 integrable (±1 Dirichlet) | yes |
| cummings-8.16 | strong | easy | theorem-application | ∫_a^x f = 0 for all x with f continuous implies f ≡ 0 | yes |
| cummings-8.22 | strong | easy | proof | continuous nonnegative f, positive at a point, has positive integral | yes |
| lebl-5.1.3 | strong | easy | proof | sequence of partitions with U(P_k,f)-L(P_k,f)->0 implies integrable, integral = lim U = lim L | no |
| lebl-5.1.6 | strong | easy | proof | changing a function at one point does not affect integrability or the integral | no |
| lebl-5.2.4 | strong | easy | theorem-application | mean value theorem for integrals | no |
| lebl-5.3.8 | strong | easy | proof | ∫_a^x f = ∫_x^b f for all x forces f = 0 (FTC) | no |
| ross-32.6 | strong | easy | proof | sequences of upper/lower Darboux sums with U_n - L_n -> 0 give integrability and the integral | no |
| ross-32.7 | strong | easy | proof | altering an integrable function at finitely many points preserves integrability and integral | no |
| ross-32.8 | strong | easy | proof | integrable on [a,b] implies integrable on every subinterval [c,d] | no |
| ross-36.6 | strong | easy | proof | comparison test for improper integrals | no |
| lebl-5.1.2 | strong | introductory | proof | integral of x on [0,1] from the definition (Darboux sums) | no |
| cummings-8.20 | strong | medium | proof | nonnegative f with positive integral is positive at infinitely many points; converse fails (Thomae) | yes |
| lebl-5.1.11 | strong | medium | proof | right-endpoint Riemann sums converge to the integral; converse fails | no |
| lebl-5.2.18 | strong | medium | proof | Riemann–Lebesgue lemma for continuous functions | no |
| lebl-5.5.8 | strong | medium | proof | Cauchy criterion for convergence of improper integrals | no |
| ross-33.10 | strong | medium | proof | sin(1/x) (with f(0)=0) is Riemann integrable on [-1,1] | no |
| ross-33.12 | strong | medium | proof | Thomae's (ruler) function is Riemann integrable with integral 0 | no |
| ross-33.14 | strong | medium | proof | weighted (second) mean value theorem for integrals | no |
| ross-33.7 | strong | medium | proof | f integrable implies f^2 integrable | no |
| abbott-7.3.3 | consider | easy | proof | indicator of {1/n} is integrable with integral 0 | no |
| abbott-7.5.4 | consider | easy | proof | ∫_a^x f = 0 for all x with f continuous implies f ≡ 0 | no |
| abbott-7.6.13 | consider | easy | theorem-application | Lebesgue criterion applications: products; f continuous, g integrable => f∘g integrable | no |
| cummings-8.15 | consider | easy | computation | modified Dirichlet function x·1_Q: lower integral 0, upper integral 8 on [0,4] | yes |
| cummings-8.21 | consider | easy | theorem-application | IVT via FTC + Darboux's theorem | yes |
| lebl-5.1.10 | consider | easy | counterexample | lower sums over uniform partitions need not be monotone | no |
| lebl-5.5.9 | consider | easy | proof | decreasing nonnegative f with finite improper integral tends to 0; converse fails | no |
| ross-34.1 | consider | easy | proof | FTC II implies FTC I for continuously differentiable g | no |
| ross-34.3 | consider | easy | computation | integral of a function with a jump: F continuous everywhere, not differentiable at the jump | no |
| ross-36.5 | consider | easy | proof | improper integral of a nonnegative continuous function = sup of integrals over compact subintervals | no |
| tao-11.10.1 | consider | easy | theorem-application | integration by parts | no |
| abbott-7.3.4 | consider | hard | counterexample | composition of integrable functions need not be integrable | no |
| lebl-5.1.14 | consider | hard | counterexample | f∘g not Riemann integrable with f integrable, g a bijection of [0,1] | no |
| ross-33.13 | consider | introductory | theorem-application | equal integrals of continuous f, g force f(x) = g(x) somewhere | no |
| ross-34.5 | consider | introductory | theorem-application | d/dx of integral from x-1 to x+1 of f is f(x+1) - f(x-1) | no |
| abbott-7.2.6 | consider | medium | proof | Riemann's definition (tagged sums) implies Darboux integrability | no |
| abbott-7.5.11 | consider | medium | construction | F=∫f not differentiable at a jump of f; continuous monotone function non-differentiable on a dense set | no |
| abbott-7.5.9 | consider | medium | proof | total variation of C^1 function equals ∫\|f'\| | no |
| cummings-8.29 | consider | medium | construction | integrable f can be approximated from below in L^1 by continuous functions | yes |
| lebl-5.3.12 | consider | medium | construction | integral of an increasing function with a jump is not differentiable there; continuous F non-differentiable at every rational | no |
| tao-11.9.1 | consider | medium | proof | integral of monotone function with dense jumps is non-differentiable at each jump | no |

## function-sequences (53)

| id | verdict | difficulty | type | standard result | audited |
|---|---|---|---|---|---|
| cummings-9.7 | core | easy | counterexample | pointwise convergence does not allow interchanging limit and integral (spike functions) | yes |
| lebl-6.2.10 | core | hard | proof | Dini's theorem | no |
| ross-25.15 | core | hard | proof | Dini's theorem | no |
| abbott-6.4.10 | core | medium | construction | monotone function discontinuous exactly at the rationals (sum of 2^{-n} jumps at r_n) | no |
| abbott-6.6.6 | core | medium | counterexample | e^{-1/x^2}: smooth, all derivatives 0 at 0, not analytic | no |
| cummings-9.8 | core | medium | proof | Cauchy criterion for uniform convergence | yes |
| ross-29.18 | core | medium | proof | contraction mapping / fixed point via sup\|f'\| < 1 (Banach fixed point on R) | no |
| abbott-6.2.7 | strong | easy | proof | f uniformly continuous => f(x+1/n) -> f uniformly; fails for x^2 | no |
| abbott-6.3.1 | strong | easy | counterexample | x^n/n -> 0 uniformly but lim (x^n/n)' != 0 at x=1 | no |
| abbott-6.3.2 | strong | easy | counterexample | sqrt(x^2+1/n) -> \|x\| uniformly; derivatives not uniformly convergent near 0 | no |
| abbott-6.5.2 | strong | easy | construction | possible intervals of convergence of power series / endpoint behavior | no |
| cummings-9.3 | strong | easy | counterexample | uniform limit of unbounded functions is unbounded; pointwise limit need not be | yes |
| cummings-9.6 | strong | easy | counterexample | pointwise limit of integrable functions need not be integrable (Dirichlet as limit) | yes |
| lebl-6.1.9 | strong | easy | proof | increasing f_n with f_n(0)=0, f_n(1)->0 converge uniformly to 0 | no |
| lebl-6.2.12 | strong | easy | counterexample | pointwise convergence to 0 with integrals unbounded or oscillating | no |
| lebl-6.2.18 | strong | easy | counterexample | uniform limits of Lipschitz functions need not be Lipschitz; uniformly K-Lipschitz limits are K-Lipschitz | no |
| lebl-6.2.5 | strong | easy | counterexample | continuous functions converging pointwise to a continuous limit non-uniformly (moving bump) | no |
| ross-24.14 | strong | easy | counterexample | nx/(1+n^2x^2): not uniform on [0,1] (value 1/2 at x=1/n), uniform on [1,infinity) | no |
| ross-25.4 | strong | easy | proof | uniformly convergent implies uniformly Cauchy | no |
| ross-25.5 | strong | easy | proof | uniform limit of bounded functions is bounded | no |
| ross-25.9 | strong | easy | counterexample | sum x^n converges uniformly on [-a,a] (a<1) but not on (-1,1) | no |
| ross-27.2 | strong | easy | proof | continuous f on R is a limit of polynomials uniformly on bounded sets | no |
| ross-33.15 | strong | easy | counterexample | tent functions of height n and width 2/n: f_n -> 0 pointwise but integrals = 1 | no |
| abbott-6.2.10 | strong | hard | proof | Pólya-type theorem: increasing f_n -> continuous f pointwise on [a,b] implies uniform | no |
| abbott-6.6.4 | strong | medium | proof | alternating harmonic series = log 2 via Lagrange remainder | no |
| abbott-6.7.9 | strong | medium | counterexample | WAT fails on (a,b) and on [a,inf) | no |
| abbott-7.4.7 | strong | medium | counterexample | pointwise convergence does not commute with integration; typewriter sequence | no |
| abbott-7.4.9 | strong | medium | proof | uniform bound + uniform convergence on [0,alpha] => integrals converge | no |
| cummings-9.4 | strong | medium | proof | uniform limit of uniformly continuous functions is uniformly continuous | yes |
| lebl-6.2.7 | strong | medium | proof | C^1([a,b]) is complete in the C^1 norm | no |
| abbott-6.4.5 | consider | easy | theorem-application | continuity of sum x^n/n^2 on [-1,1] and of sum x^n/n on (-1,1) via local M-test | no |
| abbott-6.5.11 | consider | easy | theorem-application | Abel summability is regular; sum (-1)^n is Abel-summable to 1/2 | no |
| abbott-6.5.8 | consider | easy | proof | uniqueness of power series representations | no |
| lebl-7.6.9 | consider | easy | theorem-application | Newton's method for sqrt(2) as a contraction on [1,∞) | no |
| ross-22.6 | consider | easy | proof | C(S) with the sup metric is a metric space | yes |
| ross-25.11 | consider | easy | theorem-application | sum (3/4)^n g(4^n x) is continuous (M-test); the Weierstrass-type nowhere-differentiable function | no |
| ross-25.12 | consider | easy | proof | term-by-term integration of a uniformly convergent series of continuous functions | no |
| ross-25.3 | consider | easy | theorem-application | uniform convergence lets limit pass through integral (application) | no |
| ross-25.6 | consider | easy | theorem-application | sum \|a_k\| < infinity implies sum a_k x^k converges uniformly on [-1,1] (M-test) | no |
| ross-27.4 | consider | easy | construction | Weierstrass approximation with interpolation at the endpoints | no |
| lebl-6.2.16 | consider | hard | construction | Thomae's function is a pointwise limit of continuous functions | no |
| lebl-6.2.17 | consider | hard | construction | Dirichlet function is a pointwise limit of pointwise limits of continuous functions | no |
| lebl-6.2.21 | consider | hard | construction | uniformly convergent differentiable functions whose derivatives converge to a function discontinuous at every rational | no |
| cummings-9.2 | consider | introductory | counterexample | x/n -> 0 pointwise but not uniformly on R | yes |
| ross-23.8 | consider | introductory | counterexample | (1/n) sin nx -> 0 but derivatives cos nx do not converge | no |
| ross-24.11 | consider | introductory | counterexample | f_n -> f, g_n -> g uniformly does not imply f_n g_n -> fg uniformly | no |
| ross-24.2 | consider | introductory | definition | x/n -> 0 uniformly on [0,1] but not on [0,infinity) | no |
| ross-26.2 | consider | introductory | computation | sum n x^n = x/(1-x)^2 and evaluation of sum n/2^n | no |
| abbott-6.2.13 | consider | medium | construction | diagonal subsequence: uniformly bounded sequence converges pointwise on countable set | no |
| abbott-6.3.6 | consider | medium | counterexample | examples around the Differentiable Limit Theorem (Theorem 6.3.3) | no |
| abbott-6.6.7 | consider | medium | construction | Taylor series convergence vs representation: examples with e^{-1/x^2} | no |
| abbott-6.7.11 | consider | medium | proof | C^1 approximation by polynomials (approximate f' and integrate) | no |
| lebl-7.6.11 | consider | medium | proof | fixed point theorem when Σ Lip(f^n) < ∞ | no |

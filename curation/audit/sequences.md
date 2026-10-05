# Sequences: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Sequences = 3.x).

## Changes

### lebl-2.4.3 (Cauchy completeness + density of Q ⇒ least-upper-bound property): core → upper tier
- **Old:** 3.39, the last problem of the "Cauchy sequences" group. **New:** 3.52 (core shrinks by one, so ross-22.14 becomes 3.51), the first upper-tier
  problem (before rudin-3.14). **This is a tier change:** the coordinator must set `tier: upper`.
- **Mathematical reason:** the problem is not about real sequences. It works in an abstract ordered field
  $F\supseteq\mathbb{Q}$ with Q dense. Cauchy sequences are taken in Q with rational ε, and the
  learner must build the supremum of an arbitrary bounded set of $F$ as the limit of a bisection sequence
  of rationals. It also needs a separate density argument to compare elements of $F$ with the rational
  interval lengths. This is a statement about axioms (which completeness axiom is primitive), not a
  technique for working with sequences in $\mathbb{R}$. It is the hardest core problem in the topic
  ("hard", marked "Challenging" in Lebl), while its neighbours are easy.
- **Dependency reason:** no later core problem uses it. ross-10.4 (why monotone convergence and the
  Cauchy criterion fail in Q) now closes the Cauchy group and covers the conceptual point the core needs:
  completeness is what makes Cauchy ⇒ convergent work. The bisection-to-completeness technique is already
  in the core through abbott-2.5.4 (Nested Interval Property ⇒ Axiom of Completeness, 3.32). So moving
  lebl-2.4.3 leaves no gap. There is no strong reason to keep it in the core, so the user's default
  (upper tier) applies.
- **Upper-tier order:** lebl-2.4.3 comes before rudin-3.14, because it uses Cauchy material, which the core
  covers before limsup, and rudin-3.14 uses limsup.

No other order changes.

## Reference material (`data/reference/sequences.yaml`)

| before | items |
|---|---|
| abbott-2.2.2 (3.1) | Convergent sequence (note: Ross's $n>N$); Bounded sequence |
| ross-8.7 (3.7) | Theorem: convergent sequences are bounded (used in ross-8.7(b), abbott-2.3.7) |
| abbott-2.3.9 (3.9) | Theorem: Algebraic Limit Theorem (placed after abbott-2.3.2, which forbids it, and cummings-3.8, which proves parts of it) |
| lebl-2.2.5 (3.11) | Theorem: Order Limit Theorem and Squeeze Theorem |
| cummings-3.16 (3.17) | Monotone sequence; Divergence to infinity; Theorem: Monotone Convergence Theorem |
| mit20-mid-3b (3.24) | Subsequence; Subsequential limit (note: Ross allows ±∞, Tao says "limit point"); Theorem: subsequences of a convergent sequence |
| lebl-2.3.10 (3.26) | Theorem: Bolzano–Weierstrass |
| abbott-2.6.1 (3.33) | Cauchy sequence (contrasted with convergence in the same block) |
| abbott-2.6.2 (3.37) | Theorem: Cauchy Criterion |
| lebl-2.3.5 (3.45) | Limit superior and limit inferior (note: Tao's inf-sup form and Rudin's subsequential-limit form) |

8 definitions, 7 theorems. The limsup/liminf definition comes after abbott-2.4.7, not before it,
because abbott-2.4.7(b) asks the learner to propose the definition of liminf.

## Proposed bridges

None required. The candidates considered all duplicate techniques the path already practises:
- ross-9.6 ("prove convergence before solving $a=f(a)$"), as a bridge before cummings-3.24. tao-6.3.4 already
  teaches this exact trap just before the recursive-sequence group.
- cummings-3.20 (tail suprema converge), as a bridge before abbott-2.4.7. abbott-2.4.7(a) is exactly this
  step.

## Local ordering issues considered but intentionally left unchanged

- **abbott-2.3.11, abbott-2.3.13 (3.15–3.16)** (Cesàro means; iterated limits) are medium problems between
  the limit laws and monotone convergence. They use only the definition and the limit laws, and they sit
  at a section boundary rather than inside a foundational run. Kept.
- **cummings-4.3 then tao-6.3.4 (3.18–3.19)**: cummings-4.3 already proves that $r^n$ diverges for
  $|r|>1$. tao-6.3.4 trains a different point: limit laws cannot be applied before convergence is known
  (the $xL=L$ fallacy). Not a duplicate. The order (full classification first, then the diagnostic)
  is fine either way.
- **ross-8.7 (3.7)** uses "convergent ⇒ bounded", which no problem proves. It is stated as a theorem in
  the reference rather than moving the problem.
- **abbott-2.5.4 (3.32)** (Nested Interval Property ⇒ completeness) is the same kind of "completeness
  equivalence" as lebl-2.4.3. It stays in the core: it is medium, it rehearses the bisection proof of
  Bolzano–Weierstrass right after that theorem, and it works in $\mathbb{R}$ with the NIP already proved
  (cummings-1.22).
- **Cauchy group before limsup group**: some books (Ross) prove the Cauchy criterion through limsup.
  The bank's path gets it from Bolzano–Weierstrass, which comes first, so no limsup is needed earlier.
  lebl-2.3.7's hint and ross-22.14 use subsequences, which also come first. Kept.
- **ross-10.6(b) and lebl-2.5.12** both show that the harmonic partial sums are not Cauchy. This is a
  partial overlap, not a duplicate: lebl-2.5.12 also proves that $|x_{n+k}-x_n|\to0$ for each fixed $k$
  (the uniformity point), and ross-10.6(a) is the geometric-gap criterion. Both kept, flagged here.
- **ross-10.6(a) and lebl-2.4.2**: the first has a given geometric bound, the second has to derive it
  from a contraction. Different mechanisms, both kept.
- **ross-22.14 (3.52, last core)** uses Ross's Theorem 11.8 (sup of subsequential limits = limsup),
  quoted in the problem. It correctly closes the limsup group.

# Foundations: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Foundations = 1.x).

## Changes

None. The order in `order-foundations.yaml` is identical to the current one.

## Reference material (`data/reference/foundations.yaml`)

| before | items |
|---|---|
| lebl-0.3.27 (1.4) | Image and preimage |
| lebl-0.3.10 (1.5) | Injective, surjective, bijective |
| lebl-0.3.12 (1.8) | Power set; Cardinality (equal, ≤, <, finite) |
| lebl-0.3.19 (1.9) | Countable and uncountable sets (note: Abbott's "countable" = countably infinite) |
| mit20-a3-3 (1.11) | Theorem: Q countable, R uncountable |
| abbott-1.5.6 (1.14) | Theorem: Archimedean property and density of Q |
| ross-16.8 (1.20) | Decimal expansion; Theorem: uniqueness of decimal expansions |

6 definitions, 3 theorems. The Archimedean property and density of Q are stated here, not in Real
Numbers, because abbott-1.5.6 (an open interval contains a rational) and abbott-1.5.8 (Archimedean
property) need them; Abbott itself covers density (§1.4) before countability (§1.5). The block sits at
abbott-1.5.6 and not at abbott-1.2.11, since 1.2.11(b)–(c) ask the learner to guess exactly these facts.

## Proposed bridges

None. No problem needs a technique the path has not already practised.

## Local ordering issues considered but intentionally left unchanged

- **abbott-1.2.11 (1.2)** negates statements whose truth depends on the Archimedean property and density
  of Q. It asks only for an intuitive guess, and it trains negation. It stays with the logic opener.
- **mit20-a3-3 (1.11)** uses "R is uncountable" before ross-16.8 (1.20) proves it. The problem itself
  allows using the fact without proof, and the reference states it as a theorem. ross-16.8 stays at the
  end because it needs decimal expansions as infinite series (a forward reference).
- **mit20-a3-3(a) before abbott-1.5.3**: the special case (two disjoint countably infinite sets) comes
  before the general countable-union theorem. That is the right direction.
- **abbott-1.5.6 / abbott-1.5.8** use density / the Archimedean property, which belong to Real Numbers.
  Moving them into Real Numbers would split the countability cluster. The reference states both facts
  before abbott-1.5.6.
- **lebl-0.3.12 (power set of an n-set)** stays in the induction group. It trains induction, even though
  its subject (power sets) returns in pugh-1.38.
- **ross-16.8 and mit20-a3-2** stay as the closing forward-reference pair. Both need decimal expansions
  (convergent series of digits), which the reference now states.
- No duplicates. mit20-a3-3(a) and abbott-1.5.3 overlap, but abbott-1.5.3 adds the infinite-union array
  argument and the "why induction fails" question.

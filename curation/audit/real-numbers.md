# Real Numbers: pedagogical audit

PDF numbers are positions in the current `data/curriculum.yaml` (Real Numbers = 2.x).

## Changes

### Swap cummings-1.19 and abbott-1.4.4
- **Old:** abbott-1.4.4 at 2.17, cummings-1.19 at 2.18. **New:** cummings-1.19 at 2.17, abbott-1.4.4 at 2.18.
- **Mathematical reason:** cummings-1.19 ($\sup\{n/(n+1)\}=1$) is a direct use of the Archimedean
  property. abbott-1.4.4 ($\sup(\mathbb{Q}\cap[a,b])=b$) uses the density of Q, which is itself proved
  from the Archimedean property.
- **Pedagogical reason:** the group now runs Archimedean property → density of Q → existence of roots →
  density of the irrationals. Difficulty also agrees (introductory before easy). The group comment is
  renamed to "Archimedean property, density and roots".

No tier changes.

## Reference material (`data/reference/real-numbers.yaml`)

| before | items |
|---|---|
| lebl-1.1.1 (2.1) | Ordered set; Ordered field |
| abbott-1.2.6 (2.2) | Absolute value |
| lebl-1.1.5 (2.5) | Upper and lower bounds; Supremum and infimum |
| lebl-1.1.14 (2.9) | Least-upper-bound property |
| abbott-1.3.3 (2.10) | Theorem: Axiom of Completeness (note: an axiom in Abbott, a theorem in Lebl and Rudin) |
| lebl-1.3.5 (2.15) | Supremum of a function (and bounded function) |

7 definitions, 1 theorem. The Archimedean property and density of Q are already stated in Foundations
(before abbott-1.5.6). Neither the triangle inequality, the ε-characterization of the supremum, nor the
Nested Interval Property is stated, because problems in this topic prove them (abbott-1.2.6, mit20-a3-4,
cummings-1.22).

## Proposed bridges

None.

## Local ordering issues considered but intentionally left unchanged

- **lebl-1.1.6 (2.8)** constructs a countably infinite subset. It uses only Foundations material and the
  definition of sup, so it stays in the ordered-set group.
- **mit20-a3-4 (2.7)** (ε-characterization of sup) sits among the abstract ordered-set problems although
  it is stated in R. It needs no completeness and is reused heavily later, so it should stay early.
- **abbott-1.3.3 (2.10)** is a one-problem group placed where the Axiom of Completeness first appears. It
  correctly precedes the algebra of suprema, which uses existence of sup and inf.
- **mit20-a2-7 (2.19)** (cube root via sup) is the heaviest problem here (medium). It is not a spike: it
  follows the existence of √2 that it adapts, and it sits after the sup algebra it needs.
- **cummings-1.22 / abbott-1.4.8** (Nested Interval Property, then its sharpness) end the topic. They
  feed abbott-2.5.4 in Sequences. Order kept.
- No duplicates. abbott-1.3.5, lebl-1.2.9 and lebl-1.3.7 all compute sups of combined sets, but they train
  different operations (scaling, set sums, function sums with strict-inequality examples).

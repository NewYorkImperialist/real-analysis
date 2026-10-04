# Difficulty audit, group 2: topology and continuity

Scope: all 113 problems with `topic` = `topology` (55) or `continuity` (58), core and upper tier, read with their solutions from `src/generated/bank.json`. Standard: `data/taxonomy.yaml` `difficulties`. Nothing in `data/` was edited.

## Distribution by source and difficulty

### Topology (55)

| source | introductory | easy | medium | hard | very-hard | total |
| --- | --- | --- | --- | --- | --- | --- |
| abbott | 0 | 5 | 6 | 2 | 0 | 13 |
| cummings | 1 | 1 | 1 | 0 | 0 | 3 |
| lebl | 1 | 7 | 4 | 1 | 0 | 13 |
| mit | 4 | 3 | 2 | 0 | 0 | 9 |
| mit18100b | 0 | 0 | 2 | 0 | 0 | 2 |
| pugh | 0 | 1 | 0 | 0 | 0 | 1 |
| pugh (upper) | 0 | 0 | 3 | 5 | 0 | 8 |
| ross | 0 | 0 | 1 | 2 | 0 | 3 |
| rudin | 0 | 0 | 1 | 0 | 0 | 1 |
| rudin (upper) | 0 | 0 | 1 | 1 | 0 | 2 |
| **all** | 6 | 17 | 21 | 11 | 0 | 55 |

### Continuity (58)

| source | introductory | easy | medium | hard | very-hard | total |
| --- | --- | --- | --- | --- | --- | --- |
| abbott | 0 | 6 | 10 | 1 | 0 | 17 |
| cummings | 0 | 1 | 0 | 1 | 0 | 2 |
| lebl | 4 | 8 | 5 | 3 | 0 | 20 |
| mit | 3 | 4 | 1 | 0 | 0 | 8 |
| pugh (upper) | 0 | 0 | 1 | 1 | 0 | 2 |
| ross | 1 | 3 | 2 | 0 | 0 | 6 |
| rudin (upper) | 0 | 0 | 1 | 2 | 0 | 3 |
| **all** | 8 | 22 | 20 | 8 | 0 | 58 |

### Combined (113)

| source | introductory | easy | medium | hard | very-hard | total |
| --- | --- | --- | --- | --- | --- | --- |
| abbott | 0 | 11 | 16 | 3 | 0 | 30 |
| cummings | 1 | 2 | 1 | 1 | 0 | 5 |
| lebl | 5 | 15 | 9 | 4 | 0 | 33 |
| mit | 7 | 7 | 3 | 0 | 0 | 17 |
| mit18100b | 0 | 0 | 2 | 0 | 0 | 2 |
| pugh | 0 | 1 | 0 | 0 | 0 | 1 |
| pugh (upper) | 0 | 0 | 4 | 6 | 0 | 10 |
| ross | 1 | 3 | 3 | 2 | 0 | 9 |
| rudin | 0 | 0 | 1 | 0 | 0 | 1 |
| rudin (upper) | 0 | 0 | 2 | 3 | 0 | 5 |
| **all** | 14 | 39 | 41 | 19 | 0 | 113 |

No problem in either topic is labelled very-hard. That fits the content: the hardest items (pugh-prelim-43, pugh-2.148, rudin-2.27, cummings-6.32, pugh-4.20) are hard but standard, and none needs the long chain of reasoning or real ingenuity that very-hard requires.

## Source bias

The raw distributions differ a lot: MIT has 7/17 introductory and no hard problems, Abbott has 0/30 introductory and 16/30 medium, and the upper tier has nothing below medium. I checked each skew against paired problems. **None of them is a systematic labelling bias.** Each one follows the kind of exercise the source contains.

- **MIT (mit20) is not under-rated.** Its many introductory items (a3-5, a4-1, a4-2, a7-4, a9-4, a9-6, final-2a) really are one-definition tasks. On comparable pairs MIT rates the same as other sources or higher, never lower:
  - mit20-a4-7 (medium; derived set is closed) vs abbott-3.2.7 (easy; derived set is closed, plus the closure is the smallest closed set). The MIT task is a subset of the Abbott one but sits one level higher.
  - mit20-final-3 (medium; [a,b] is sequentially compact, plus the continuous image) vs cummings-5.8 / abbott-4.4.8 (easy). Its part (a) is also a subset of cummings-5.7 (medium).
  - mit20-a8-5 (medium; open-preimage characterization) vs lebl-7.5.5 (easy), which applies that characterization in a longer argument.
  - mit20-a4-3 (easy; a closed set contains its sequence limits) vs lebl-7.4.16 (introductory; the same argument plus a Cauchy/completeness step).
- **Abbott's missing introductory level comes from the textbook.** Abbott's exercises seldom ask for a bare definition check, so the lack of introductory items reflects the book, not the labelling. Within Abbott the medium bucket is a bit generous on short or guided items: abbott-3.5.6, abbott-4.3.2, and abbott-3.5.4 (hard). See the relabels below. Abbott's easy items (4.3.6, 4.4.2, 4.4.8, 4.4.10, 4.5.7) agree with their Lebl and Ross peers.
- **Lebl** is on the whole consistent with the other sources. One "Prove Proposition X" item is placed too low (lebl-7.4.16), and one hinted counterexample is placed too high (lebl-7.5.12). These are isolated cases and do not form a pattern.
- **Upper tier (Pugh, Rudin).** The labels are mostly sound. Two Rudin items are mis-ordered relative to core peers, one in each direction: rudin-4.5 is too low and rudin-4.19 is too high. Pugh's upper-tier labels all hold up.

## Recommended relabels

| id | current | proposed | confidence | reason |
| --- | --- | --- | --- | --- |
| lebl-7.4.16 | introductory | easy | high | A closed subset of a complete space is complete. The proof is mit20-a4-3 (easy: a closed set contains its limits) with an extra Cauchy-to-convergent step in a general metric space. It cannot sit below its own sub-step. Matches abbott-3.2.5 (easy), which is the same Cauchy/closed equivalence on R. |
| rudin-4.5 | medium | hard | high | Tietze extension on R. The proof needs the decomposition of the open complement into gaps (ross-13.7, labelled hard, is just this ingredient), linear interpolation, and a careful continuity check at points of E that are limits of gap endpoints. The vector-valued and non-closed parts come on top. Peers: lebl-3.4.9 (hard; extension from Q), rudin-4.17 (hard). |
| abbott-3.5.4 | hard | medium | medium | Guided Baire category proof: build nested closed intervals inside the G_n, then apply the Nested Interval Property. It has the same scheme and length as abbott-3.3.9 (medium; Heine–Borel by guided bisection). The only extra care is choosing nondegenerate closed subintervals of open sets, which is routine. |
| abbott-3.2.7 | easy | medium | medium | Part (a) is the content of mit20-a4-7(b) (medium), and part (b) adds the closure-is-smallest-closed-set theorem. It needs a nontrivial ε' = min(...) estimate lemma. It should not sit below its own subset. |
| mit20-final-3 | medium | easy | medium | (a) is Bolzano–Weierstrass plus the fact that limits keep non-strict inequalities. (b) is the standard continuous-image argument. Both follow a standard route in a few lines. It is a strict subset of cummings-5.7 (medium) and is on the level of cummings-5.8 and abbott-4.4.8 (easy). |
| mit20-a8-5 | medium | easy | medium | The open-preimage characterization on R is a direct unwinding of ε–δ in both directions with no construction. lebl-7.5.5 (easy) uses this fact as one step of a longer proof. |
| lebl-7.5.12 | medium | easy | medium | (a) is a one-line inequality, d_C(Df,Dg) ≤ d_{C¹}(f,g). (b) uses the hinted sin(nx)/n sequence. It is comparable to abbott-4.4.2 and lebl-3.4.8 (easy), which use the same oscillation device to break uniform continuity. |
| rudin-4.19 | hard | medium | medium | With the supplied hint (t_n between x_0 and x_n with f(t_n)=r), the proof is a short contradiction argument: one subsequence step, then closedness of a level set. The difficulty matches abbott-4.5.3 (medium; monotone + IVP ⇒ continuous) and is well below rudin-4.17 (hard). |
| ross-19.4 | medium | easy | medium | Hinted: Bolzano–Weierstrass, then "uniformly continuous maps preserve Cauchy sequences", then a contradiction. This is a standard short route. Its key lemma is part (a) of abbott-4.4.13 (medium), which goes much further. It is at the level of ross-18.4 and abbott-4.4.2 (easy). |
| abbott-4.3.2 | medium | easy | medium | Definition-variation exercise. The examples are constants, x and 2x, and (d) is just "shrink δ". It needs no theorem and no estimate beyond the definition, so it is easier than the medium Abbott continuity peers (4.3.4, 4.3.13, 4.5.3). |
| abbott-3.5.6 | medium | easy | medium | Takes Exercise 3.5.5 as given. The I-not-F_σ part adds the countably many rational singletons to the union; the Q-not-G_δ part follows by taking complements. Both are short applications of a supplied result, below abbott-3.2.13 and abbott-3.3.8 (medium). |

Totals: 11 recommended relabels (2 high, 9 medium). 3 are raises (lebl-7.4.16, rudin-4.5, abbott-3.2.7) and 8 are lowerings.

## Borderline, not recommended (noted for completeness)

- **ross-13.7 (hard):** open set = countable disjoint union of open intervals. This is a standard theorem and could be medium. Hard is defensible because the sup/inf component construction is fiddly. If it were lowered, rudin-4.5 should still go up.
- **mit20-a7-6 (easy) vs lebl-3.2.11 (introductory):** the sign-preservation arguments are near-identical. They differ by only one level, and either label is defensible.
- **abbott-4.4.8 (easy):** part (c) needs a small oscillating construction, x ↦ ½ + ((1−x)/2)·sin(1/x). This is upper-easy, and medium would also be defensible.
- **lebl-3.4.9 (hard) vs abbott-4.4.13 (medium):** both extend a uniformly continuous function. Lebl also has to prove the extension is uniformly continuous, so a one-level gap is acceptable.
- **pugh-prelim-31 (hard), lebl-3.2.19 (hard), ross-22.4 (hard), lebl-3.6.11 (hard):** each sits between medium and hard. The current labels are acceptable.
- **lebl-7.4.10 (medium), lebl-7.2.7 (easy), lebl-7.1.5 (easy), cummings-6.33 (easy), ross-18.4 (easy):** each could be one level lower. This does not break peer ordering.

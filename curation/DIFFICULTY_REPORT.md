# Difficulty audit: report

## Summary

**What was audited.** All 366 problems in the bank were checked against the `difficulties` definitions in `data/taxonomy.yaml`. Three reviewers each covered one group of topics. Group 1 covered foundations, real-numbers, sequences and series (131 problems). Group 2 covered topology and continuity (113). Group 3 covered differentiation, integration and function-sequences (122). Together they proposed 21 relabels. A fourth, independent check then reviewed each of the 21: it read the statement, the solution and every cited peer, and looked at the rest of the problem's subtopic. Nothing in `data/` was edited.

**Main pattern.** There is no source-level bias. MIT's low average comes from easier exam and homework items, not from under-labelling, and the upper-tier Rudin and Pugh items are on the same scale as the core books. What the mislabels do share is this: **the label followed the theorem's reputation or the author's tag, not the task as posed.** Guided "prove this named theorem in steps" exercises were rated as if they were unguided. This is clearest in Abbott (Darboux, Dini, Arzelà–Ascoli, Baire, the nowhere-differentiable function), and it also shows up in hinted Rudin (4.19) and Lebl "(Challenging)" items (2.6.12). Of the 21 proposals, 17 lower a label and only 4 raise one.

**Bottom line.** 19 of the 21 proposals are confirmed. For the other 2: abbott-6.2.15 should drop further than proposed (to medium, not hard), and abbott-6.3.4 should stay medium. Every confirmed change keeps peer order consistent within its subtopic.

## Recommended changes (both checks agree)

| id | current → proposed | reason |
|---|---|---|
| lebl-2.6.12 | medium → easy | One counterexample plus harmonic divergence. The same task is abbott-2.7.4(d), which is easy, and there it is only one of four parts. The "(Challenging)" tag overstates it. |
| abbott-2.7.8 | medium → easy | Three short true/false items. Each matches an easy peer: cummings-4.5(a), lebl-2.6.13, and a one-line comparison. |
| ross-22.14 | hard → medium | Hinted, about 10 lines, one idea (a discrete crossing). Same tier as lebl-2.1.17 and abbott-2.5.5 (medium). |
| cummings-1.22 | medium → easy | NIP from sup is one sup argument, like cummings-3.16 and abbott-1.3.3 (easy). The harder converse, abbott-2.5.4, stays medium. |
| lebl-2.4.2 | medium → easy | Geometric bound, telescope, tail. The formula is given. This is essentially ross-10.6(a) (easy). |
| lebl-7.4.16 | introductory → easy | Its proof contains mit20-a4-3 (easy) as a step, so it can't sit below it. Matches abbott-3.2.5 (easy). |
| rudin-4.5 | medium → hard | Tietze on R: interpolate across gaps, plus a real continuity estimate at limits of gap endpoints. Also a counterexample and a vector-valued part. On par with lebl-3.4.9 (hard). |
| abbott-3.5.4 | hard → medium | Guided nested-interval proof of Baire. Same scheme and length as abbott-3.3.9 Heine–Borel (medium). |
| abbott-3.2.7 | easy → medium | Contains mit20-a4-7(b) (medium), plus an ε′ lemma and the closure theorem. It can't sit below its own sub-task. |
| mit20-final-3 | medium → easy | Bolzano–Weierstrass plus continuous image, a few lines each. It is a strict subset of cummings-5.7 and on par with cummings-5.8 and abbott-4.4.8 (easy). |
| mit20-a8-5 | medium → easy | The open-preimage characterization on R is a direct ε–δ unwinding in both directions, with no construction. |
| lebl-7.5.12 | medium → easy | (a) is a one-line inequality. (b) uses the hinted sin(nx)/n, the same device as abbott-4.4.2 and lebl-3.4.8 (easy). |
| rudin-4.19 | hard → medium | The hint gives the t_n construction. What remains is a short contradiction using a closed level set, on par with abbott-4.5.3 (medium). |
| ross-19.4 | medium → easy | Hinted chain BW → Cauchy-preserving → contradiction, with the theorems supplied. On par with ross-18.4 and abbott-4.4.2 (easy). |
| abbott-4.3.2 | medium → easy | Definition variants answered by constants, x and 2x, and "shrink δ". No theorem or estimate is needed. |
| abbott-3.5.6 | medium → easy | A short corollary of the supplied Exercise 3.5.5: add the rational singletons, then take complements. |
| abbott-5.2.11 | hard → medium | Guided Darboux with g = f − αx given: sign of one-sided derivatives, then EVT and Fermat. On par with cummings-7.14 and lebl-4.2.9 (medium). |
| abbott-6.2.11 | hard → medium | Guided Dini that supplies the K_n. What remains is the nested-compact argument, on par with rudin-7.16 and abbott-6.2.5 (medium). |
| abbott-5.4.7 | very-hard → hard | Setup and lemma statement are supplied, but the parity slope-count still needs real insight. Comparable to abbott-6.2.12 (hard) and below pugh-3.23 and pugh-4.37 (very-hard). |

## Disputed / not recommended

| id | proposal | why rejected, or what to do instead |
|---|---|---|
| abbott-6.2.15 | very-hard → hard | **Other: medium.** Every step is dictated. (a) cites 6.2.13 for the diagonal subsequence, (b) supplies δ and the finite rational net, and (c) is the ε/3 triangle inequality. What is left is exactly rudin-7.16, which is *unguided* and rated medium. abbott-6.2.11 (guided Dini, now medium) is its closest sibling. rudin-7.13 (Helly, hard) builds its own diagonal argument and monotone extension, so it is not a fair ceiling. The reviewer's own note says "a case for medium exists". If a smaller move is preferred, hard is acceptable, but medium matches the scale. |
| abbott-6.3.4 | medium → easy | **Disagree, keep medium.** The uniform part is one line, but the task asks for divergence of √n cos(nx) at *every* x. That requires showing cos(nx) ↛ 0 for all real x, including irrational multiples of π. This needs an idea (double angle, or sin² + cos² = 1), and it is the step most students miss. The peer lebl-6.2.2 (introductory) only checks a single point, x = 1, so the two-level gap reflects a real difference in the task, not a broken ordering. Medium also sits correctly next to abbott-6.3.7 (medium) in the interchange-derivative subtopic. |

## Detail

The reviewer reports, with full distributions by source × difficulty, the bias checks, and the borderline items they left unchanged:

- [Group 1: foundations, real-numbers, sequences, series](difficulty/group1.md)
- [Group 2: topology, continuity](difficulty/group2.md)
- [Group 3: differentiation, integration, function-sequences](difficulty/group3.md)

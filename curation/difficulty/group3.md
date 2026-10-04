# Difficulty audit, group 3: differentiation, integration, function-sequences

Scope: all 122 problems in these topics (98 core, 17 upper tier). I read every statement and solution and judged each against the `difficulties` definitions in `data/taxonomy.yaml`. Nothing in `data/` was edited.

**Bottom line:** most labels hold up. Peer ordering is sound within MIT, Lebl, Ross, Tao, Cummings, Rudin and Pugh. The one systematic problem is an **upward bias in Abbott's guided "prove this named theorem" exercises**. When Abbott walks the reader through a famous theorem in steps (a), (b), (c), the exercise got labelled by how famous the theorem is, not by how hard the scaffolded task is. The same theorems, or the same core argument, are rated 1–2 levels lower elsewhere. Abbott's routine exercises, such as the integration chapter, are not inflated.

## Distribution by source × difficulty

**All three topics**

| source | intro | easy | medium | hard | very-hard | n |
|---|---|---|---|---|---|---|
| mit | 5 | 10 | 2 |  |  | 17 |
| lebl | 4 | 13 | 8 | 1 |  | 26 |
| ross |  | 12 | 7 |  |  | 19 |
| cummings |  | 3 | 3 |  |  | 6 |
| tao |  | 4 | 1 |  |  | 5 |
| abbott |  | 8 | 16 | 4 | 2 | 30 |
| rudin |  |  | 2 |  |  | 2 |
| rudin (upper) |  |  | 3 | 4 |  | 7 |
| pugh (upper) |  |  | 3 | 4 | 2 | 9 |
| mit18100b (upper) |  |  |  | 1 |  | 1 |
| **all** | 9 | 50 | 45 | 14 | 4 | 122 |

**differentiation**

| source | intro | easy | medium | hard | very-hard | n |
|---|---|---|---|---|---|---|
| mit | 3 | 5 | 1 |  |  | 9 |
| lebl |  | 4 | 4 |  |  | 8 |
| ross |  | 3 | 3 |  |  | 6 |
| cummings |  | 1 | 1 |  |  | 2 |
| tao |  | 4 |  |  |  | 4 |
| abbott |  |  | 4 | 1 | 1 | 6 |
| rudin |  |  | 1 |  |  | 1 |
| rudin (upper) |  |  | 2 | 2 |  | 4 |
| pugh (upper) |  |  |  | 2 |  | 2 |
| **all** | 3 | 17 | 16 | 5 | 1 | 42 |

**integration**

| source | intro | easy | medium | hard | very-hard | n |
|---|---|---|---|---|---|---|
| mit | 1 | 4 | 1 |  |  | 6 |
| lebl | 1 | 3 | 4 | 1 |  | 9 |
| ross |  | 4 | 1 |  |  | 5 |
| cummings |  |  | 2 |  |  | 2 |
| tao |  |  | 1 |  |  | 1 |
| abbott |  | 5 | 4 | 1 |  | 10 |
| pugh (upper) |  |  | 2 | 2 |  | 4 |
| **all** | 2 | 16 | 15 | 4 | 0 | 37 |

**function-sequences**

| source | intro | easy | medium | hard | very-hard | n |
|---|---|---|---|---|---|---|
| mit | 1 | 1 |  |  |  | 2 |
| lebl | 3 | 6 |  |  |  | 9 |
| ross |  | 5 | 3 |  |  | 8 |
| cummings |  | 2 |  |  |  | 2 |
| abbott |  | 3 | 8 | 2 | 1 | 14 |
| rudin |  |  | 1 |  |  | 1 |
| rudin (upper) |  |  | 1 | 2 |  | 3 |
| pugh (upper) |  |  | 1 |  | 2 | 3 |
| mit18100b (upper) |  |  |  | 1 |  | 1 |
| **all** | 4 | 17 | 14 | 5 | 3 | 43 |


Reading the tables:
- MIT, Lebl, Ross, Cummings and Tao sit at intro–medium. That matches what they are: standard course exercises, mostly one or two ideas. No downward bias here. Their mediums (Lebl 4.2.9 L'Hôpital, 4.4.6; Ross 29.10, 31.5) are rated the same as similar Abbott and Rudin items.
- Abbott has the heaviest upper tail among core sources (6 hard or very-hard out of 30). Part of this is real: 7.4.4 (∫f > 0 for f > 0, done without Lebesgue's criterion) and 6.2.12 (Cantor function) deserve hard. The rest comes from the bias described below.
- Upper-tier items (Rudin, Pugh, MIT 18.100B) are on the same scale and mostly hold up (see "Upper tier" below).

## Systematic bias: Abbott's guided named-theorem exercises (supported by pairs)

| Abbott item (current) | Comparable peer (label) | Observation |
|---|---|---|
| abbott-5.2.11 Darboux's theorem, steps (a)(b) (**hard**) | cummings-7.14 Cauchy MVT (medium); lebl-4.2.9 L'Hôpital via Cauchy MVT (medium); abbott-7.5.10 change-of-variable, also guided (easy) | The setup g = f − αx is given. What remains is one-sided derivative sign → interior min (EVT) → Fermat. This is a short, standard chain, the same size as the Cauchy MVT and L'Hôpital proofs. |
| abbott-6.2.11 Dini's theorem, steps (a)(b) (**hard**) | rudin-7.16 equicontinuous + pointwise on compact ⇒ uniform (medium, upper); abbott-6.2.5 Cauchy criterion (medium) | Step (b) hands over the key object, the nested sets K_n. The rest is "nested nonempty compacts intersect", a standard compactness argument comparable to rudin-7.16. |
| abbott-6.2.15 Arzelà–Ascoli, steps (a)(b)(c) (**very-hard**) | rudin-7.16 (medium, upper); rudin-7.13 Helly selection (hard, upper) | Step (a) cites 6.2.13 for the diagonal subsequence. Steps (b)–(c) are exactly the ε/3 argument of rudin-7.16, which is rated medium. Helly (rudin-7.13) needs strictly more (it builds its own diagonal argument and monotone extension) and is rated hard. Arzelà–Ascoli guided this way cannot sit above it. |
| abbott-5.4.7 nowhere-differentiable function at non-dyadic points (**very-hard**) | pugh-3.23 Baire class 1 (very-hard, upper); pugh-4.37 Borel's lemma (very-hard, upper); abbott-6.2.12 Cantor function (hard) | The function, dyadic sequences and lemma statement are all supplied. The lemma is a short convex-combination argument. Part (b) is a careful but finite slope count. It is a real argument, but shorter and more guided than the Pugh very-hards. |
| abbott-6.3.4 sin(nx)/√n (**medium**) | lebl-6.2.2 x^n/n (introductory); lebl-6.2.1 (easy) | Same lesson: uniform convergence does not pass to derivatives. The uniform part is a one-line bound. Divergence of √n cos(nx) at every x needs one small trick (cos(nx) → 0 forces cos(2nx) → −1). That is easy, not medium, and the 2-level gap to lebl-6.2.2 breaks peer ordering. |

Abbott's non-guided routine items (6.2.1, 6.4.1, 6.4.7, 7.2.3, 7.3.5, 7.3.7, 7.5.2, 7.5.10, all easy) agree with their Lebl and Ross peers. So the bias is specific to scaffolded named theorems, not a uniform shift. The likely cause: the extraction pass rated the theorem's reputation instead of the exercise as posed.

## Recommended relabels

| id | current | proposed | confidence | reason |
|---|---|---|---|---|
| abbott-6.2.15 | very-hard | hard | high | Guided Arzelà–Ascoli: cites 6.2.13 for the diagonal step, then runs rudin-7.16's ε/3 argument (medium). It cannot exceed rudin-7.13 Helly (hard), which does strictly more. A case for medium exists; hard is the defensible floor given its length. |
| abbott-5.2.11 | hard | medium | high | Guided Darboux with g = f − αx given: EVT plus Fermat in a few lines. Peers: cummings-7.14 Cauchy MVT (medium), lebl-4.2.9 L'Hôpital (medium); also abbott-7.5.10 (guided change of variables, easy). |
| abbott-6.2.11 | hard | medium | high | Guided Dini that supplies K_n. The remaining nested-compact argument matches rudin-7.16 (medium) and abbott-6.2.5 (medium). |
| abbott-5.4.7 | very-hard | hard | medium | Setup and lemma statement supplied; a finite slope-count argument. Shorter and more guided than pugh-3.23 and pugh-4.37 (very-hard); comparable in weight to abbott-6.2.12 Cantor function (hard). |
| abbott-6.3.4 | medium | easy | medium | Same lesson as lebl-6.2.2 (introductory) and lebl-6.2.1 (easy). A one-line uniform bound plus one small trick; the current 2-level gap to lebl-6.2.2 breaks peer ordering. |

Totals: 5 relabels (3 high, 2 medium), all toward easier, all Abbott.

## Pairs checked and left alone (within one level, defensible)

- **ross-30.6 (medium) vs pugh-prelim-56 (hard, upper):** the same core fact, F + F′ → L ⇒ F → L. Ross supplies the integrating-factor hint; Pugh does not and adds the F = ∫f layer. One level apart with a real reason, so no change. If one label moves, Pugh going to medium is the candidate.
- **mit20-final-4b (intro) < ross-28.4 (easy) < abbott-5.2.7 (medium):** the x^a sin(1/x) family, ordered correctly by how much is asked.
- **lebl-4.4.6 (medium) = ross-29.10 (medium):** f′(0) > 0 without local monotonicity or invertibility. Consistent.
- **tao-10.2.5 MVT from Rolle (easy) vs cummings-7.14 Cauchy MVT (medium):** Tao gives the auxiliary function as a hint; Cummings does not. Acceptable.
- **ross-34.12 (easy) vs mit20-a12-1 (medium):** MIT adds the integration-by-parts energy argument in (b). Fine.
- **abbott-7.3.7 (easy) / cummings-8.25 (medium) / lebl-5.2.11 Thomae (medium) / abbott-7.3.9 content zero (medium):** the "few bad points" integrability family. abbott-7.3.7 and cummings-8.25 are borderline siblings one level apart; acceptable.
- **lebl-6.1.2 (intro) vs abbott-6.2.1 (easy):** the same kind of pointwise-vs-uniform computation, one level apart. Fine.
- **abbott-4.3.11 contraction mapping (medium) vs lebl-7.6.6 (easy):** Abbott's version is a guided proof, Lebl's only asks for counterexamples. Medium is a little generous but within tolerance.
- **ross-31.4 (easy) < ross-31.5 (medium):** correctly ordered.

## Upper tier

All 17 upper-tier items were checked on the same scale; the only change is abbott-5.4.7's comparison against the Pugh very-hards. Specific checks:
- rudin-5.17 (medium): the hint essentially gives the proof, so it is easy–medium. Kept.
- rudin-5.26 (medium), rudin-7.16 (medium), pugh-prelim-28 (medium), pugh-prelim-45 (medium), pugh-prelim-7 (medium): consistent with each other and with core mediums.
- rudin-5.15 (Landau–Kolmogorov plus extremal example), rudin-5.21 (C^∞ function with prescribed zero set), pugh-1.32, pugh-3.34, pugh-3.50, rudin-7.10, rudin-7.13, mit18100b-2006-ps10-x1: hard is right for each.
- pugh-3.23 and pugh-4.37 (very-hard): long chains, and Borel's lemma needs real ingenuity. They anchor the top of the scale, which is why abbott-6.2.15 and abbott-5.4.7 should sit below them.

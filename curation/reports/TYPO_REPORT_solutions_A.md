# Typo/error report: solutions A

Scope: `data/solutions/{foundations,real-numbers,sequences,series,topology,bridges,coverage,coverage-additions}.yaml`, which covers 133 entries. I read every hint and solution against its problem statement. I also ran a mechanical lint for odd `$` and `**` counts per line, unbalanced braces and repeated words, and it found nothing.

`node scripts/build-data.mjs --check`: ✓ (367 problems valid).

## Fixes

| id | where | before → after | reason |
|---|---|---|---|
| ross-11.9 | hint 2 | "Watch the first term: $t_1 = 1$ is not in $(0,1)$." → "If you try $t_n = 1/n$, watch the first term: $t_1 = 1$ is not in $(0,1)$." | The hint mentioned $t_1$ without ever defining $t_n$, so the warning made no sense on its own. |

## Checked and found correct (spot-verified arithmetic and claims)

- mit20-a1-6: $f(4/15) = 240$; $f(2/9) = 108$.
- mit20-a2-7: the constants $19h$ and $13h$, and the choices of $h$.
- abbott-3.2.6: the hint's "two true, three false" matches the solution.
- abbott-3.3.7: the child-interval sums tile $I + J$.
- rudin-2.17: the gap estimates for the digit intervals and the bounds $4/9$ and $7/9$.
- ross-14.10: the terms and the ratios $1/2$ and $8$.
- cummings-3.25: the limit $(a_1 + 2a_2)/3$.
- lebl-2.6.1(a): the sum $1/6$.
- lebl-2.5.15: the condensation inequalities.
- lebl-5.1.11: the bad-interval count.

## Flagged (not changed)

None. No mathematical errors needing a rewrite were found.

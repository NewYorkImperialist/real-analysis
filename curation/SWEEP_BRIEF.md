# Brief: adversarial sweep of every hint and solution

Earlier passes reviewed each solution once or twice and swept for typos. This pass is different: **try to break
every proof.** Assume each solution may contain one subtle error and look for it. Project root:
/Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`.

`node curation/scripts/review-list.mjs <topic> introductory,easy,medium,hard,very-hard` prints each problem's
statement, notes, hints and solution. The solution files you own are listed in your task; problems they belong to
may live in any topic, so look each id up (`src/generated/bank.json`).

## For every solution, check
1. **Answers exactly what is asked**: every part, in the problem's own notation and conventions (its book's
   definitions — e.g. Abbott's "countable" = countably infinite, Ross's ±∞ limits, Lebl's cluster points, Tao's
   ℕ starting at 0, Rudin's R^k).
2. **Every step is valid**: inequality directions, strict vs non-strict, quantifier order, ε/δ/N choices actually
   work (plug them in), division by quantities that could be 0, edge cases (empty sets, n = 0/1, endpoints,
   constant functions), "WLOG" claims that are really without loss.
3. **Every example/counterexample really satisfies the stated conditions** — verify it, don't trust it.
   Recompute every computation (limits, sums, derivatives, integrals, radii).
4. **Cited results**: hypotheses checked; the result is available at that point (not the very theorem the
   problem asks to prove, and not something only an upper-tier problem establishes); quoted theorem numbers right.
5. **Hints**: consistent with the solution, graded from nudge to near-solution, none states the final answer.

## What to do
- Fix genuine errors with the **minimal correct edit** in your own files only. Do not restyle correct text.
- If a fix needs a substantial rewrite, write the corrected solution only if you are confident; otherwise add
  `lowConfidence: "<what is wrong>"` to that entry and report it.
- Statement problems (a book typo or our transcription) go in your report — do not edit `data/problems/`.
- Keep `node scripts/build-data.mjs --check` at ✓.

## Report
Write `curation/reports/SOLUTION_SWEEP_<letter>.md`: counts checked; every fix (id, what was wrong, why it was
wrong, the change); anything flagged lowConfidence; statement issues for the coordinator. Reply briefly.

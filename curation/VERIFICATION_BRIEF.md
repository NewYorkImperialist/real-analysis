# Brief: adversarial verification of AI solutions (pass 1: find, do not fix)

Every hint and solution in the bank is AI-written and shown to students as "AI-generated · not verified by
a human". Two earlier review passes found almost nothing wrong. This pass works differently: **assume each
solution contains an error and try to find it.** A wrong-but-plausible proof is worse than no proof.

Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`, which is a wrapper function in
this shell. `python3` (standard library only) is available for numerical sanity checks.

## Input
`node curation/scripts/review-list.mjs <topic> <levels>` prints, for each problem of that topic and difficulty:
- the statement and its source notes;
- every hint, textbook hints included;
- the current solution.

Levels are comma-separated, e.g. `introductory,easy`.

## How to attack each solution
1. **Solve it yourself first, briefly.** Before reading the solution, decide what the answer should be and
   what the key step is. Then compare. A disagreement is a lead, not yet a finding.
2. **Does it answer exactly what was asked?** Check:
   - every part, (a), (b), …;
   - both directions of every "iff";
   - "find all" means all of them, and nothing extra;
   - the statement's own hypotheses, not stronger or weaker ones.
3. **Break each step.** For every inequality, limit, choice of ε/δ/N and case split, look for an input that
   violates it:
   - edge values: 0, 1, endpoints, n = 1, empty sets, constant functions, negative numbers;
   - quantifier order: does δ depend on x, or N on ε *and* something else?;
   - limits used before they are known to exist;
   - division by something that may be 0.
4. **Verify every example and counterexample concretely.** Compute the values (use `python3` if that
   helps) and check each required property, not just the interesting one.
5. **Check every cited theorem.** Is it stated correctly? Are its hypotheses actually met, e.g.
   compactness, continuity on a closed interval, absolute convergence, uniform convergence for an
   interchange? It must not use the result being proved, or tools beyond the problem's level (e.g.
   Lebesgue's criterion for a basic Riemann problem) unless the problem invites them.
6. **Unused hypothesis?** Either the proof is wrong or the hypothesis is genuinely unnecessary.
7. **Hints:**
   - Do they point the right way?
   - Is each one true?
   - Does any single hint give away the whole proof or the final answer?

## What counts as a finding
| severity | meaning |
|---|---|
| `major` | wrong answer, false claim, invalid or circular step, unverified or invalid counterexample, missing part |
| `minor` | a real gap or slip that a line or two fixes (non-strict vs strict, missing edge case, unchecked hypothesis that does hold) |
| `hint` | a hint that is false, misleading, or gives the whole solution away |

**Not findings:** style, length, notation preferences, "could be clearer". Do not report them. Be concrete:
quote the faulty sentence and give the counterexample or the computation that shows the problem.

## Output
**Do not edit anything in `data/`.** Write only your file `curation/verification/pass1/<batch>.yaml`:

```yaml
batch: <batch name>
reviewed: [id1, id2, …]            # every id you checked, findings or not
findings:
  - id: abbott-2.5.5
    severity: major                 # major | minor | hint
    where: "solution, part (b), second paragraph"
    quote: |
      the exact faulty sentence or formula
    issue: |
      what is wrong and why
    evidence: |
      counterexample / computation / the hypothesis that fails
    suggested_fix: |
      the corrected argument or hint text (LaTeX in $…$, KaTeX-compatible)
```

Save as you go. Reply with one line per finding, `id — severity — one-phrase issue`, plus the number
reviewed. If you found nothing in a batch, say which checks you ran on the hardest three problems.

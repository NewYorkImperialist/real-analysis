# Brief: AI hints and solutions

You are writing **hints and full solutions** for the problems of ONE topic in a curated undergraduate
real-analysis problem bank. The reader is a graduate student rebuilding undergraduate machinery. Your output
is shown on the site labeled "AI-generated · not verified by a human", so correctness matters more than
anything else.

Project root: /Users/jaydenlin/dev/web/real-analysis. In this shell `grep` is a wrapper function, so use `rg`.

## Inputs
`node curation/scripts/topic-problems.mjs <topic>` prints every problem in your topic. Each entry shows the
statement (LaTeX), its metadata, any source NOTES (typos, intended readings, quoted book results) and any
existing textbook hint. Work through all of them, in order.

## Output
Write **only** `data/solutions/<topic>.yaml`. Use YAML `|` block scalars for every text field so backslashes
need no escaping.

```yaml
- id: abbott-2.5.5
  hints:
    - |
      First hint …
    - |
      Second hint …
    - |
      Third hint …
  solution: |
    Full solution …
  lowConfidence: "Only if you are not sure the solution is complete and correct: say what is uncertain."
```

**Save as you go.** After every 4–6 problems, append the finished entries to the file and validate:
`node scripts/build-data.mjs --check`. It must print ✓, and it KaTeX-checks every formula. Fix any error it
reports before continuing. Never edit any other file.

## Hints
Write 2–4 progressive hints per problem, each a short paragraph or less.
1. **Conceptual nudge:** what is this really asking? Which definition is in play?
2. **Key tool:** name the relevant theorem, technique or auxiliary object (e.g. "apply the IVT to
   g(x) = f(x) − x", "choose ε = L/2").
3. **Structure:** outline the proof's skeleton or the shape of the construction or counterexample, without
   carrying out the details.

- **Spoilers:** no hint may contain the complete argument. Hint 1 must not give the key idea away.
- **Textbook hints:** if the problem already has one, don't repeat it. Your hints should complement it.
- **Simple problems:** for an introductory computation, 2 hints is fine.

## Solutions
- **Complete and rigorous**, written as a careful instructor would for a strong undergraduate.
  - Multi-part problems: every part, labeled (a), (b), … to match the problem.
  - Examples, counterexamples and true/false problems: give the example *and* verify it.
  - Computations: show the work and state the answer.
- **Use only tools available at the problem's level.** Use the standard undergraduate results that precede
  it (completeness, MCT, Bolzano–Weierstrass, Cauchy criterion, IVT/EVT, MVT, FTC, …) and cite them by name.
  - Do not use Lebesgue measure or the Lebesgue criterion unless the problem is about it.
  - Do not prove a theorem by citing the theorem itself. For example, if the problem says "prove the ratio
    test", you may not use the ratio test.
- **Respect the problem as stated.** If NOTES say the source has a typo or an intended reading, solve the
  intended reading and say so in one sentence at the start. If a problem quotes a book result for context,
  you may use that result unless the problem asks you to prove it.
- **Format:** `$…$` and `$$…$$` math, KaTeX-compatible (no custom macros, no `\newcommand`, no `align`
  environments; `aligned` inside `$$…$$` is fine). Blank lines between paragraphs. `**Proof.**`,
  `**Claim.**` or `*Case 1.*` as needed. Aim for clarity, not length.
- **Check yourself.** Before saving each solution, reread it as a skeptical grader:
  - every inequality direction;
  - every quantifier (does δ depend only on ε, not on x, when it must?);
  - edge cases (n = 0 or 1, empty sets, endpoints, x = 0);
  - "for all" vs "there exists";
  - whether each hypothesis was actually used.

  If something is still uncertain, fix it. If you can't, set `lowConfidence` and say what is uncertain.
  Never present a guess as a proof.

## Finish
Run `node scripts/build-data.mjs --check` one last time. Reply with a short report:
- problems completed out of the total;
- any `lowConfidence` items and why;
- anything odd you noticed about a problem statement.

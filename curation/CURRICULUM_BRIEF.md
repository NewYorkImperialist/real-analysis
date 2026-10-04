# Brief: the canonical learning order

The bank will have one canonical path: a learner starts at the first Foundations problem and presses
"Next" through every problem to the end of Sequences & Series of Functions. The path must build
naturally. **A problem should never use a definition, theorem or technique that has not already
appeared, either earlier on the path or in the standard text (Abbott) before that point.**

You are ordering **one topic**. Topic order is fixed and comes from `data/taxonomy.yaml`. Within your
topic, you decide the order by reading the mathematics.

Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`, which is a wrapper function in
this shell.

## Inputs
- `node curation/scripts/review-list.mjs <topic> introductory,easy,medium,hard,very-hard` prints every
  problem in the topic, with its statement, notes, hints and solution. **Read every statement.** The
  solution shows what machinery it actually uses.
- `src/generated/bank.json` holds the metadata: `id`, `title`, `subtopics`, `difficulty`, `type`,
  `category` and `tier`.
- `curation/selections/<topic>.yaml` is the original curator's hand order for about 70% of the core,
  grouped by `# comment` headings. Start from it and respect it unless the mathematics says otherwise.
  It omits the MIT 18.100A problems, recent additions and the upper tier; slot those in.
- `data/taxonomy.yaml` gives the subtopic order. Use it as a guide, not a rigid block structure. A
  problem that uses two subtopics belongs after both.

## How to order
For each problem ask:
- which definitions it assumes;
- which theorem it is designed to use;
- whether it introduces a technique later problems reuse.

Then:
1. **Prerequisites first.** A problem that proves a result (e.g. the sequential characterisation of
   continuity) comes before problems that use it, even if it is harder.
2. **Counterexamples after the claim they test.** "Must X hold without hypothesis H?" comes after X.
3. **Inside a cluster of related problems:** definition use → basic examples → standard consequences →
   theorem applications → techniques → counterexamples → equivalences → constructions → synthesis
   → challenge.
4. **Difficulty is only a tie-breaker** between problems that are mathematically interchangeable. A
   medium foundational problem may come before an easy application.
5. **Source and problem number almost never matter.**
6. **Upper tier** (`tier: upper`): put all upper-tier problems of your topic **after** all its core
   problems, in a sensible order among themselves. They are optional detours.
7. **Different books, different definitions.** Ross defines "closed" via limits of sequences, and some
   books define compactness sequentially. Make sure the definition a problem relies on has been met.

## Forward references
If a problem in your topic genuinely needs material from a **later** topic (e.g. a "sequences" problem
that needs continuity or the derivative), do not hide it. Put it at the end of your topic's core list
**and** list it under `forward_refs` with what it needs and where it should arguably live.

## Output
Write only `curation/order/<topic>.yaml`:

```yaml
topic: sequences
order:            # every problem of the topic exactly once, core first, then upper tier
  # group: convergence from the definition
  - mit20-a3-6
  - abbott-2.2.2
  # group: …
  - …
forward_refs:     # may be empty
  - id: …
    needs: "continuity of x^(1/n) (Continuity topic)"
    suggestion: "keep at end of Sequences" | "move to <topic>"
notes: |
  Subtopic-order observations: places where data/taxonomy.yaml's subtopic order looks mathematically
  wrong for this bank, with reasons. Leave empty if none.
```

Keep the `# group:` comment headings short; they document the path.

## Final check
Confirm the list has every problem whose `topic` is yours exactly once, with no ids from other topics:
compare against `node -e` over `src/generated/bank.json`.

Reply with:
- the number ordered;
- **5 examples** where your order differs from the current default (topic → difficulty → source),
  each with the mathematical reason;
- your forward refs;
- any subtopic-order concerns.

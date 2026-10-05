# Brief: pedagogical audit + reference definitions (Big List and learning path)

The Big List PDF (`npm run build && npm run biglist` → `dist/big-list.pdf`) is generated from the data:
problem order = `data/curriculum.yaml` (the site's learning path; PDF numbers like 5.12 are positions in
it and are referenced nowhere), reference material = `data/reference/<topic>.yaml`. There is no LaTeX
source. You own **three topics**. Read `curation/CURRICULUM_BRIEF.md` first: its ordering principles
still hold (prerequisites first, counterexamples after the claim, difficulty only a tie-breaker, upper
tier after core). Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`.

Inputs: `node curation/scripts/review-list.mjs <topic> introductory,easy,medium,hard,very-hard` (every
statement + solution), `src/generated/bank.json`, the current order in `data/curriculum.yaml` (keep its
`# group:` comments), and the unselected candidate pool (`curation/UNSELECTED.md`, `curation/candidates/`).

## Task A — local ordering audit (conservative)
Walk your topics' **core** path in clusters of ~5–15 problems. For each cluster ask: does every problem
use only ideas available earlier (or standard definitions/theorems you will state in Task B)? Is there
an isolated difficulty spike? Is a challenge problem interrupting a foundational run? Would a local move
help without breaking later dependencies? Do **not** optimize for monotone difficulty and do **not**
reorder globally. Do **not** remove problems for looking similar; similar problems that train different
mechanisms stay. (Flag a genuine duplicate — same statement, same mechanism — in the report, don't delete.)

Known issues to audit first (PDF numbers refer to the current order; verify before moving):
- Sequences 3.39 `lebl-2.4.3` (Cauchy completeness + density of Q ⇒ LUB): conceptually heavier than its
  neighbours. Options: move late in Sequences core, or to the upper tier. Decide on the mathematics;
  the user's default is upper tier unless there is a strong reason to keep it core.
- Series 4.9 `mit20-a7-3` (Cauchy–Schwarz for series): interrupts the main series progression; move later.
- Topology 5.12 `ross-13.7` (open sets = countable disjoint unions of intervals): move later in the section
  (or upper tier if clearly better).
- Topology 5.24–5.25 `abbott-3.5.4`, `abbott-3.5.6` (Baire): check they don't precede more basic
  general-metric-space material; reorder locally if so.
- Continuity 6.17 `lebl-3.2.19` (convex ⇒ continuous): move later in Continuity.
- Integration 8.4 `lebl-5.1.13` (Darboux ⇔ tagged Riemann sums): the most important fix — move
  substantially later. Opening of Integration should run roughly: upper/lower sums and integrability →
  elementary examples/non-examples → Dirichlet-type → closure properties → monotone ⇒ integrable →
  continuous ⇒ integrable → finer characterizations → Darboux ⇔ Riemann sums (follow real dependencies).

Tier changes (core → upper) are allowed only where the report justifies them; say so explicitly.

**Bridge problems:** only where a harder problem needs a technique never practised before, and only
from the unselected candidate pool (real transcribed problems; never invent). Propose them in the report
(cid, where, why, what it prepares); do not add them yourself.

## Task B — reference definitions and theorem statements
Write `data/reference/<topic>.yaml` for each of your topics: concise, formal statements placed just
before the first core problem that needs them (per your revised order). Target across the whole bank
~45–70 definitions and ~15–25 theorems; your share is what your topics genuinely need — no padding.
Include only concepts the problems actually use. Pair contrasting notions in one block where useful
(convergent vs Cauchy; continuous vs uniformly continuous; pointwise vs uniform convergence; bounded
vs totally bounded; compact vs complete).

```yaml
- before: abbott-2.2.1          # a CORE problem id of this topic; the block prints right before it
  items:
    - kind: definition          # definition | theorem
      name: Convergent sequence # unique across the bank
      latex: |
        A sequence $(a_n)$ of real numbers **converges** to $a\in\mathbb{R}$ if for every
        $\varepsilon>0$ there exists $N\in\mathbb{N}$ such that $|a_n-a|<\varepsilon$ for all $n\ge N$.
      note: Optional one line, e.g. a convention difference between the books.   # optional
```
Rules: write every quantifier explicitly and correctly; bold the defined term with `**…**`; theorem
statements must carry their full hypotheses; do not prove anything. **Books differ** — e.g. Abbott's
"countable" means countably infinite, Ross defines closed sets via limits, some books define compactness
sequentially, Rudin's metric-space conventions. State the standard definition and use `note:` to flag a
convention a nearby problem relies on, so a problem is never contradicted by the reference. KaTeX math
only (`$…$`, `$$…$$`, no macros). This is reference material for a problem book, not a textbook: no prose
beyond an optional one-line note.

## Output (write only these)
1. `data/reference/<topic>.yaml` for each of your topics.
2. `curation/audit/order-<topic>.yaml`: `topic:` and `order:` — the full revised list for the topic
   (every problem exactly once, core first then upper tier, `# group:` comments kept), changed minimally.
   If a problem should move to the upper tier, list it among the upper-tier ids and say so in the report.
3. `curation/audit/<topic>.md`: for each nontrivial change — what changed, old position (PDF number),
   new position, mathematical reason, dependency/pedagogical reason; proposed bridges; and a section
   **"Local ordering issues considered but intentionally left unchanged"**.

Validate: `node scripts/build-data.mjs --check` must print ✓ (it validates `data/reference/`; your
`before:` ids must be core problems of that topic). Do not edit `data/curriculum.yaml` or any problem
file — the coordinator applies your order. Reply with a short summary.

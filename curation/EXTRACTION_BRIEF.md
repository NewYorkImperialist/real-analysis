# Candidate-Extraction Brief — Undergraduate Real Analysis Problem Bank

You are helping build a **small, carefully curated** bank of canonical undergraduate real analysis
problems for someone taking graduate Real Analysis I who never took undergraduate analysis. The goal
is to rebuild the *undergraduate machinery* (definitions, epsilon arguments, sup/inf, completeness,
sequences, limsup, series, topology of R / metric spaces, continuity, uniform continuity,
compactness, connectedness, derivatives & MVT, Riemann integration, uniform convergence, standard
counterexamples and constructions).

You are doing **Phase 2 (candidate extraction)** for ONE chunk of ONE book. A later curator compares
candidates *across six sources* and makes the final picks, so your job is to read every exercise
in your chunk, judge it honestly, and transcribe the worthwhile ones **faithfully**.

## Absolute rules

1. **Only the exercises that are actually in your chunk of the book.** Never invent, paraphrase into a
   new problem, merge exercises, or "improve" a problem. No outside sources.
2. **Faithful transcription.** Preserve hypotheses, conclusions, quantifiers, notation, part structure
   (a), (b), …, any hint the author gives *inside the exercise*, and source wording where practical.
   Convert all math to LaTeX (`$...$` inline, `$$...$$` display). Fix only unambiguous typos (note them).
3. **Verify math against the page image.** Text extraction loses superscripts, subscripts, fractions,
   bars, primes, and sum/integral limits. For every candidate containing nontrivial notation, render
   the page and look at it:
   `/private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/venv/bin/python /private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/render.py <book> <pdfPage> [--top 0.5 --bottom 1.0] [--dpi 120]`
   then `Read` the printed PNG path. (Cropping to half pages with --top/--bottom keeps the text legible.)
   Extracted text is in `/private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/text/<Book>.txt` with `=====PAGE n=====` markers (n = PDF page, 1-based).
   NOTE: in this shell `grep` is a wrapper function — use `/usr/bin/grep`.
4. **Self-containedness.** If an exercise says "Prove Theorem 3.2.4" or "Use the function from Example 5.1",
   the bare reference is meaningless on a website. Either (a) quote the referenced statement/definition
   verbatim from the book inside the problem, clearly marked, e.g.
   `Prove Lemma 6.4.13. *(Lemma 6.4.13: Let $(a_n)$ ... )*` — and say so in `transcriptionNotes`, or
   (b) if quoting would require pages of context, lower your verdict or skip it. Never paraphrase a
   referenced result in your own words without saying so.
5. Do not write solutions. Do not invent hints. (If the *book itself* prints a hint or answer for the
   exercise elsewhere — e.g. Ross's "Selected Hints and Answers" — you may record it in `bookHint`
   verbatim with its location.)

## How to judge (the important part)

Ask of each exercise: What undergraduate machinery does it teach? Is it canonical / representative?
Does it force genuine understanding of a definition? Is it a standard proof pattern, standard
construction, or standard counterexample? Does it connect ideas? Is it difficult *in a meaningful way*?

Do **not** favor problems for being long, late in the section, labeled hard, clever, unusual, or
computationally tedious. A short problem that forces understanding of a definition can be worth more
than a puzzle. Skip: pure routine computation duplicates, set-theory axiomatics far from analysis,
problems that only make sense mid-proof of the book's own development, exotic topics (Stieltjes,
gamma function, generalized Riemann integral, Fourier series, ordinals, axiom of choice, constructing
N/Z/Q), and near-duplicates of a *better* exercise in your own chunk (mention which in `skipped`).

Verdicts (record only these three; everything else goes in `skipped`):
- `core` — a problem a strong analyst would insist belongs in a compact bank (canonical machinery,
  key counterexample/construction, key characterization). Expect roughly 10–20% of exercises.
- `strong` — clearly valuable; would be in the bank unless another source does it better.
- `consider` — has some real value (variety, a distinct angle, a good harder synthesis) but is optional.

Aim to record maybe 30–45% of the exercises in analysis-relevant sections; fewer if the chunk is
foundational/axiomatic. Err slightly toward collecting, but every recorded item needs a real reason.

## Classification (be honest and calibrated; do NOT default to medium)

difficulty — judge the mathematical work, not position/length/labels:
- `introductory`: direct use of a definition or elementary fact. e.g. prove $\lim 1/(20n^2+20n+2020)=0$
  from the definition; show $(a,b)$ is open; compute $\sup\{1-1/n\}$.
- `easy`: basic machinery, some independent proof construction, standard route. e.g. closed subset of a
  compact set is compact; product of continuous functions is continuous; $f'$ bounded ⇒ Lipschitz;
  limsup of a sum ≤ sum of limsups.
- `medium`: meaningful construction/multi-step/theorem recognition. e.g. Cauchy ⇒ convergent via
  Bolzano–Weierstrass; continuous on compact ⇒ uniformly continuous; existence of $\sqrt2$ via sup;
  Thomae's function continuity set; uniform limit of continuous functions is continuous.
- `hard`: substantial synthesis, nontrivial construction or estimate. e.g. derivatives satisfy the
  intermediate value property (Darboux); Dini's theorem; every open subset of R is a countable union of
  disjoint open intervals; Riemann rearrangement theorem.
- `very-hard`: exceptional chain of reasoning/ingenuity. e.g. continuous nowhere-differentiable
  function; Baire-category applications like "no function is continuous exactly on Q"; proving the
  Weierstrass approximation theorem.
Multi-part problems: rate the hardest essential part, and say so in `difficultyRationale`.

category (mathematical role, independent of difficulty): `canonical` | `synthesis` | `challenge`.
type (one primary): `definition` | `proof` | `theorem-application` | `counterexample` | `construction` |
`computation` | `conceptual`. (A "find an example / decide true or false" problem is `counterexample`
or `construction`; "negate / state precisely / explain why the definition…" is `definition` or `conceptual`.)

topic (exactly one of): `foundations`, `real-numbers`, `sequences`, `series`, `topology`, `continuity`,
`differentiation`, `integration`, `function-sequences`.

subtopics (prefer this vocabulary; add a new kebab-case one only if needed):
- foundations: logic-quantifiers, sets, functions, induction, cardinality, proof-techniques
- real-numbers: ordered-fields, archimedean-property, supremum-infimum, completeness, density-of-Q,
  absolute-value, decimal-representation, inequalities
- sequences: convergence, divergence, limit-laws, bounded-sequences, monotone-sequences,
  recursive-sequences, subsequences, bolzano-weierstrass, cauchy-sequences, limsup-liminf
- series: convergence-tests, comparison, absolute-convergence, conditional-convergence,
  alternating-series, rearrangements, power-series, double-series-products
- topology: open-sets, closed-sets, interior-closure-boundary, limit-points, dense-sets, compactness,
  sequential-compactness, connectedness, metric-spaces, complete-metric-spaces, cantor-set, perfect-sets,
  baire-category
- continuity: functional-limits, epsilon-delta-continuity, sequential-continuity, discontinuities,
  continuity-metric-spaces, uniform-continuity, lipschitz-holder, IVT, EVT, monotone-functions,
  limits-at-infinity, continuity-and-topology
- differentiation: derivative-definition, differentiability, derivative-rules, local-extrema,
  rolle-mvt, mvt-applications, darboux-property, taylor, lhopital, inverse-functions
- integration: partitions-darboux-sums, integrability-criteria, integral-properties,
  fundamental-theorem, improper-integrals, log-exp, integral-inequalities
- function-sequences: pointwise-convergence, uniform-convergence, uniform-cauchy, interchange-limits,
  interchange-integral, interchange-derivative, series-of-functions, weierstrass-m-test,
  power-series, taylor-series, approximation, fixed-point
skills: short kebab-case phrases naming *techniques*, e.g. epsilon-N-proof, epsilon-delta-proof,
choose-delta, triangle-inequality, sup-approximation, contradiction, contrapositive, induction,
subsequence-extraction, nested-intervals, diagonal-argument, telescoping, comparison-estimate,
construct-counterexample, negate-definition, sequential-characterization, open-cover-argument,
MVT-application, partition-refinement, M-test, epsilon-over-3.
tags: detailed lowercase kebab-case, e.g. epsilon-delta, quantifiers, supremum, Archimedean-property,
Cauchy, limsup, open-set, compactness, uniform-continuity, IVT, mean-value-theorem, Taylor,
Riemann-integration, uniform-convergence, counterexample, machinery, …

## Output

Write a single YAML file to the path given in your task. Use block scalars (`|`) for every LaTeX
field so backslashes need no escaping. Validate it parses:
`.../scratchpad/venv/bin/python -c "import yaml,sys; d=yaml.safe_load(open(sys.argv[1])); print(len(d['candidates']))" <file>`

```yaml
chunk: "lebl-ch3-4"
book: lebl
pageOffsetNote: "printed page = pdfPage - 0"   # how you mapped printed page numbers
sectionsCovered:
  - "3.1 Limits of functions — 15 exercises"
candidates:
  - cid: lebl-3.2.11                 # <book>-<number as printed>, stable & unique
    chapter: "3 Continuous Functions"
    section: "3.2 Continuous functions"
    number: "Exercise 3.2.11"
    page: "129"                       # printed page number where the exercise starts
    pdfPage: 129
    verdict: core                     # core | strong | consider
    machinery: "One line: what undergraduate machinery this builds."
    standardResult: "Short name of the standard fact/pattern it is about (used for cross-source dedupe), e.g. 'sequential characterization of continuity' or 'x^2 sin(1/x): differentiable, f' discontinuous'."
    topic: continuity
    subtopics: [epsilon-delta-continuity]
    skills: [epsilon-delta-proof, choose-delta]
    difficulty: easy
    difficultyRationale: "One line."
    category: canonical
    type: proof
    tags: [continuity, epsilon-delta, machinery]
    references: []                    # book-internal refs the statement depends on, e.g. ["Theorem 3.2.4 (quoted)"]
    problemLatex: |
      Let $f\colon S \to \mathbb{R}$ ...
      a) ...
      b) ...
    bookHint: |                       # optional, ONLY if printed by the book outside the exercise
    transcriptionNotes: "Optional: typo fixes, quoted references, any uncertainty."
    mitAssigned: "MIT 18.100A (Fall 2020) Assignment 8, Problem 3"   # only if listed in your task
skipped:
  - "3.2.1 routine computation; 3.2.2 duplicate of 3.2.4 (weaker)"   # terse, but account for every exercise
```

Formatting conventions for problemLatex: use `\mathbb{R}`, `\mathbb{N}`, `\mathbb{Q}`, `\{x_n\}` or
`(x_n)` exactly as the book writes sequences; `\colon` for function arrows; parts as `a)`/`(a)` on their
own lines exactly as the book labels them; keep the book's own inline hints ("Hint: …"). Markdown
`*emphasis*` is allowed for the book's italics. Do not use `\begin{enumerate}`; plain lines are fine.
Use `\operatorname{...}` or standard macros only (KaTeX renders it: no custom macros, no `\newcommand`).

Finish by replying with a short summary: counts by verdict, sections covered, and anything the curator
should know (e.g. exercises you were unsure how to transcribe).

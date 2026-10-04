# Upper-Tier Candidate Brief — Pugh, Rudin, MIT 18.100B

The bank already has **324 curated problems** from six sources (Lebl, Abbott, Ross, Tao, Cummings,
MIT 18.100A). It is strong on canonical machinery and deliberately light at the top: only 20 problems
are hard/very-hard. We are now evaluating three **new** sources for a small, optional **"Upper tier"**
set (target: ~20–40 problems total across all new sources) and for any genuine **core gaps**.

You extract candidates from ONE chunk of ONE new source. A later curator picks across sources.

## Follow `curation/EXTRACTION_BRIEF.md` for everything mechanical

Read it first. Its rules on **faithful transcription, verifying math against page images,
self-containedness, no solutions/invented hints, classification vocabulary, and the YAML format**
all apply unchanged. Only the *judging* criteria differ — they are replaced by the section below.

## The acceptance rule (replaces "How to judge")

> **Record a problem only if it introduces a new problem-solving experience — not merely a new
> instance of a concept the bank already covers.**

Before recording anything, search `curation/BANK_INDEX.txt` (the 324 bank problems by concept, then
the ~566 unselected candidates by standard result) with `rg -i`. If the bank or an unselected
candidate already does the same thing, **skip it** and say which id in `skipped`.

Prioritize:
- multi-topic synthesis where the tool is not named (e.g. compactness + uniform continuity + series);
- pathological constructions and hypothesis-removal counterexamples (show each hypothesis is needed);
- equivalence / classification problems (characterize all X; which implications hold);
- long proof chains and non-obvious "aha" problems;
- qualifying-exam (prelim) style problems at undergraduate level.

Reject: another standard ε–δ / ε–N proof, another monotone-sequence exercise, another MVT application,
another routine compactness proof, a theorem the bank already has from another book, routine
computation, and anything outside undergraduate single-variable/metric-space analysis (multivariable
calculus, differential forms, Lebesgue/measure theory, complex analysis beyond power series, Fourier,
special functions, Stieltjes integrals as such).

Expect to record **only ~10–20%** of the exercises in your chunk. Recording few is fine; padding is not.
Difficulty must be calibrated against the examples in EXTRACTION_BRIEF.md — do not inflate.

## Extra fields on every candidate

```yaml
    tier: upper            # upper = harder/synthesis problem for the optional Upper tier
                           # core-gap = canonical problem the bank is genuinely missing (rare; justify)
    newExperience: "One sentence: what problem-solving experience this adds that the bank lacks."
    closestExisting: [abbott-4.4.9, lebl-3.4.7]   # nearest bank ids / unselected cids from BANK_INDEX ([] if none)
```

Verdicts keep their meaning (`core` / `strong` / `consider`) but are judged *relative to upper-tier
value*. `skipped` must still account for every exercise, tersely (ranges are fine: "2.1–2.9 routine").

## Tools

- Text: `/private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/text/<Name>.txt`
  with `=====PAGE n=====` markers (Pugh.txt, Rudin.txt, mit18_100b*.txt).
- Render: `.../scratchpad/venv/bin/python .../scratchpad/render.py <book|path> <pdfPage> [--top F --bottom F] [--dpi N]`
  where book is `pugh` or `rudin`, or a path relative to `pdfs/` (e.g.
  `"MIT 18.100B Real Analysis Course Materials— 2025/mit18_100b_s25_pset04.pdf"`). Then `Read` the PNG.
- **Rudin is a scanned PDF with no text layer.** You must read rendered page images (use `--dpi 150`
  and half pages with `--top/--bottom` so the print is legible). Printed page = PDF page − 9.
- Some 2010 18.100B practice exams are scans too; render them.

## Output

Write YAML to `curation/candidates-upper/<chunk>.yaml` (format as in EXTRACTION_BRIEF.md, plus the
extra fields; `book:` is `pugh`, `rudin`, or `mit18100b`). Validate it parses. Edit nothing else.
Reply with: counts by verdict and tier, the 3–5 best finds with one line each, and anything uncertain.

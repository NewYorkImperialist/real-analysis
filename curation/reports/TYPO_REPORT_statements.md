# Typo report: problem statements and reference items

Scope: `data/problems/*.yaml` (all 367 problems: titles, concept, statements, notes, curation.why, and the textbook hints stored in the problem files) and `data/reference/*.yaml` (all 89 items).

How it was checked:
- Read every item.
- Ran scripted lints for unbalanced `$`, unbalanced braces, doubled words, `\mathbb`/`\mathbf` mixing, stray `\\`, and emphasis that the site renderer (`RichText.tsx`) would not pair.
- Compared word trigrams of every statement against the book text dumps to catch transcription slips. Every flagged trigram turned out to be a ligature, a hyphenation break, or OCR noise; none was a real transcription error.
- Spot-checked the "book typo" claims in notes against the text dumps.

After the fixes, `node scripts/build-data.mjs --check` passes (✓ 367 problems valid, 89 reference items), `npm run build && npm run biglist` succeed, and `dist/big-list.html` contains no `katex-error`.

## Fixes

| id / item | field | before → after |
|---|---|---|
| reference `series.yaml`, "Absolute and conditional convergence" | latex | `It **converges⏎conditionally** if …` → `It⏎**converges conditionally** if …`. The bold span crossed a line break. The site's emphasis regex (`/\*\*(.+?)\*\*/`, no `s` flag) does not match across a newline, so the site showed literal `**`. The PDF was unaffected. |
| abbott-4.5.1 | problemLatex | `\mathbf{R}` → `\mathbb{R}` (3×, in the quoted Theorems 4.5.1, 4.5.2, 3.4.7). Every other Abbott item writes ℝ as `\mathbb{R}`. Tao's items keep `\mathbf{R}`, which is consistent within each item. |
| reference `topology.yaml`, "Open and closed sets in ℝ" and "Limit point and isolated point" | latex | `neighbourhood` → `neighborhood` (2×). The rest of the bank uses US spelling. |
| abbott-2.3.10 | curation.why | `practise finding counterexamples` → `practice finding counterexamples` |
| mit20-a2-7 | notes | `p. 29–30` → `pp. 29–30`; `labelled` → `labeled` |
| mit20-a4-6, mit20-a11-5, mit20-a12-1 | notes | `labelled` → `labeled` |
| lebl-2.6.3 | notes | `p. 103–104` → `pp. 103–104`; `labelled` → `labeled` |
| ross-22.4 | notes | `labelled` → `labeled` |

No statement wording was changed. The trigram comparison found no transcription errors of ours.

## Open questions (not changed)

1. **Book typos already corrected in statements, against the "keep verbatim, explain in notes" policy.** Each one is recorded in its notes, and I confirmed it against the text dump where one was available:
   - cummings-7.10: "satisfies of each" → "satisfies each"
   - cummings-8.27(d): "Part (c)" → "Part (b)"
   - cummings-9.12: "Given an example" → "Give an example"
   - cummings-8.28: restored the missing "< ε"
   - ross-26.8(a): `(1)^n` → `(-1)^n`
   - mit20-a12-1(a): "for all f ∈ [a,b]" → "x ∈ [a,b]"
   - mit18100b-2006-ps3-7: "α ∈ A" → "α ∈ I"
   - pugh-2.93: closed a missing brace in the hint

   Most of these are clear improvements. Should they be reverted to verbatim, or kept as documented exceptions?
2. **Topic classification looks off** (not a typo, so left alone):
   - pugh-3.68 (infinite products and series) is filed under `integration`; it fits `series`.
   - ross-15.3 (Σ 1/(n (log n)^p)) is filed under `integration`; it fits `series`.
   - pugh-3.50 (Riemann integrability of inverse bijections) is filed under `function-sequences`; it fits `integration`.
   - pugh-4.20 (uniform continuity of x^α sin x^β) is filed under `differentiation`; it fits `continuity`.
   - lebl-7.2.11 (closure and interior of connected sets) is filed under `continuity`; it fits `topology`.
3. **Pugh problemNumber format is inconsistent.** Chapter 4 items read "Exercise 4.20", "Exercise 4.37" and "Exercises 4.27–4.28". Chapter 1–3 items read "Exercise 73", "Exercise 44" and so on. Pugh prints exercise numbers without the chapter prefix. Changing the format would affect display labels.
4. **Curation jargon in user-facing notes.** Three Rudin notes contain internal workflow text:
   - rudin-7.20: "Core-gap justification: BANK_INDEX has no … (rg 'moment' …)"
   - rudin-3.19: "Tier core-gap is a judgment call"
   - rudin-2.17: "Added to the core (not the upper tier) …"

   Consider moving these to `curation.*`.
5. **Rudin titles use ℝ while statements use Rudin's `R^1`/`R^k`.** Examples are rudin-4.5 and rudin-4.25. Titles follow the bank convention, so I left them.
6. **Other markers checked and left as is.**
   - The literal `**`/`(*)` star markers in some Pugh notes ("Pugh marks this exercise **") render literally on both the site and the PDF, which is the intended output.
   - The ")" placed inside display math at the end of ross-24.12's quoted remark renders correctly.

# Final audit of selected problems (fidelity + mathematical sanity)

The curated bank lives in /Users/jaydenlin/dev/web/real-analysis/data/problems/<source>.yaml (schema: see
src/lib/types.ts; problem text in `problemLatex`, `$…$` / `$$…$$` KaTeX math, `|` block scalars).
You audit ONLY the problem ids listed in your task. Be efficient: render each page once (half-page crops),
batch neighbouring exercises, do not re-read unrelated pages.

Render: `/private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/venv/bin/python /private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/render.py <book> <pdfPage> --top 0 --bottom 0.55 --dpi 130`
(then Read the PNG). PDF page = printed `source.page` + offset:
lebl +0; abbott: ch1 +13, ch2–3 +12, ch4 +11, ch5 +11, ch6 +10, ch7–8 +9; ross: §1–22 +12 (§17–22 +11), §23–27 +10, §28+ +9,
hints section entries PDF ~376–402; tao +17. (If a page doesn't match, search the text file
scratchpad/text/<Book>.txt for the exercise number with /usr/bin/grep — `grep` is a wrapper function here.)

For each problem:
1. **Fidelity**: problemLatex must match the printed exercise word-for-word and symbol-for-symbol (hypotheses,
   quantifiers, < vs ≤, sub/superscripts, limits of sums/integrals, all parts, in-exercise hints). Fix errors in
   place. Any bracketed context that is NOT a verbatim quote must be explicitly labeled inside the text, e.g.
   `*[Summary, not verbatim: …]*`. Check `source.page`, `problemNumber`, `section`. Check any `hints` entry
   (Ross back-of-book) verbatim.
2. **Mathematical sanity**: is the statement, as transcribed, true/well-posed and solvable as intended? If the
   *book itself* has an error/typo, do NOT silently change the problem: keep the source text and add a clear
   sentence to `notes` ("Source typo: … presumably means …"). Only correct unambiguous typos, noting them.
3. **Classification sanity**: if difficulty/type is clearly wrong, you may adjust it, but list every change.

Do not touch other problems, other fields, or any file outside data/problems/. Keep YAML valid. Finally run
`cd /Users/jaydenlin/dev/web/real-analysis && node scripts/build-data.mjs --check` (must print ✓, it also
KaTeX-checks every formula). Reply with: counts checked/fixed, and one line per substantive change or concern.

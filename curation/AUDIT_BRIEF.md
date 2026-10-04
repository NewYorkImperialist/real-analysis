# Transcription Audit Brief

You audit one candidate file produced by an extraction agent (see the extraction brief at
scratchpad/BRIEF.md for the format and rules). Your ONLY job is **faithfulness of transcription and metadata**.
Do not change verdicts or classifications (you may add a comment in `auditNotes` if a classification looks
clearly wrong). Do not add or remove candidates.

For EVERY candidate in the file:
1. Render the page(s) holding the exercise (render.py <book> <pdfPage> with --top/--bottom half-page crops,
   --dpi 140; exercises may continue onto the next page) and Read the image.
   `/private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/venv/bin/python /private/tmp/claude-501/-Users-jaydenlin-dev-web-real-analysis/8374b429-3c00-4ec7-8826-ca802d3edc73/scratchpad/render.py <book> <pdfPage> --top 0 --bottom 0.55`
2. Compare `problemLatex` against the printed exercise word by word and symbol by symbol: hypotheses,
   quantifiers, domains, inequalities (< vs ≤), sub/superscripts, indices, sum/integral limits, primes, bars,
   absolute values, all parts (a)(b)(c)… present, the author's in-exercise hints kept, nothing added.
   Quoted book references (marked as quotes) must be verbatim; anything summarized must be labeled as a summary.
3. Check `number`, `page` (printed), `pdfPage`, `section`, `chapter`.
4. Fix errors **in place** in the YAML. Keep `|` block scalars. Use KaTeX-compatible LaTeX only.
5. Add to each candidate a field `audit: ok` or `audit: fixed` plus `auditNotes: "what changed"` when fixed.

Then validate the YAML parses:
`.../scratchpad/venv/bin/python -c "import yaml,sys; d=yaml.safe_load(open(sys.argv[1])); print(len(d['candidates']))" <file>`
Also check every math segment renders with KaTeX:
`cd /Users/jaydenlin/dev/web/real-analysis && node -e "const y=require('js-yaml'),k=require('katex'),fs=require('fs');const d=y.load(fs.readFileSync(process.argv[1],'utf8'));for(const c of d.candidates){for(const m of (c.problemLatex||'').matchAll(/\\$\\$([\\s\\S]+?)\\$\\$|\\$([^$]+?)\\$/g)){try{k.renderToString(m[1]||m[2],{throwOnError:true,strict:'ignore'})}catch(e){console.log(c.cid,e.message.split('\\n')[0])}}}" <file>`

NOTE: in this shell `grep` is a wrapper function — use `/usr/bin/grep`.
Reply with: number audited, number fixed, and a list of the substantive fixes (one line each).

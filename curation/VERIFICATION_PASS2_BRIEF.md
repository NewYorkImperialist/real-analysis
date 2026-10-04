# Brief: verification pass 2 (independent check, then fix)

A first-pass verifier flagged problems in AI-written hints and solutions. Its findings are in
`curation/verification/pass1/*.yaml`. You are an **independent second checker**. The first pass can be
wrong: it may over-flag, or propose a bad fix. Decide each finding on your own reading of the mathematics.

Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`, which is a wrapper function in
this shell.

## For each finding assigned to you
1. Read the problem and its current hints and solution. Run
   `node curation/scripts/review-list.mjs <topic> introductory,easy,medium,hard,very-hard`, or read
   `data/problems/*.yaml` and your `data/solutions/<file>.yaml` directly.
2. Read the pass-1 finding. Then judge it yourself:
   - **confirmed:** the issue is real;
   - **rejected:** it is not real, or not worth changing (say why);
   - **modified:** real, but the suggested fix is wrong or overreaches.
3. **If confirmed or modified, fix it in `data/solutions/<file>.yaml`, minimally:**
   - **Solution slip:** correct the faulty sentence or step. Do not rewrite surrounding text for style.
   - **Hint that gives the answer away:** rewrite *that* hint so it points to the key idea or tool
     without naming the final example, function or full argument.
     - Keep the sequence progressive: nudge → tool → structure.
     - Keep the same number of hints.
     - Every hint must remain true.
     - Do not touch textbook hints. They live in `data/problems/`, which you must not edit.
4. Keep the YAML `|` block-scalar format and KaTeX-compatible math.
5. After your edits, run `node scripts/build-data.mjs --check`. Errors in your own file must be fixed;
   ignore transient errors in files other agents are editing.

## Log
Write `curation/verification/pass2/<file>.yaml`:

```yaml
file: <file>.yaml
decisions:
  - id: …
    pass1_severity: hint
    verdict: confirmed | modified | rejected
    reason: |
      …
    change: |
      before → after (short), or "none"
```

Edit only your assigned `data/solutions/<file>.yaml` and your log. Reply with one line per id:
`id — verdict — what changed`.

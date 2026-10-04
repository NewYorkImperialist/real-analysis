# Brief: display titles

Each problem shows a title on its page and in every list. Until now the title was the `concept` field.
`concept` is an internal note on the standard result behind the problem, used for deduplication, so it
reads like notes ("x^2 sin(1/x): differentiable everywhere, f' discontinuous at 0") and often states the
answer. You are writing a separate `title` field. Do **not** change `concept` or anything else.

Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`, which is a wrapper function in
this shell.

## Where
In your assigned `data/problems/<source>.yaml`, add one line, `title: …`, directly after each problem's
`concept:` line. Use the same two-space indentation. Quote the value with single quotes if it contains
`:` or starts with a special character. Inside single quotes, a literal `'` is written `''`.
Edit nothing else.

## How to write a title
- **Say what the problem is about,** as a reader scanning a list would want to know. Use a short noun phrase
  or statement, e.g. "Every convergent sequence is Cauchy", "Uniqueness of limits",
  "A function continuous only at irrational points".
- **No spoilers.** Never state the answer when the problem asks the student to decide, find, construct or
  give a counterexample.
  - Bad: "x² sin(1/x) is differentiable but f′ is discontinuous" for "is f′ continuous?".
  - Good: "Is the derivative of $x^2\sin(1/x)$ continuous?" or "Differentiability of $x^2\sin(1/x)$".
  - When the problem says "prove that X", stating X is fine: the statement already says it.
- **Short:** aim for 30–60 characters and never more than 80. Sentence case: capitalise the first word and
  proper names only (Bolzano–Weierstrass, Cauchy, Riemann).
- **Math:** use `$…$` for real math, e.g. `$\sqrt{2}$`, `$x^2\sin(1/x)$`, `$\limsup$`, `$\mathbb{Q}$`. It
  is rendered by KaTeX, so no custom macros. Plain words are often better than symbols.
- **Multi-part problems:** name the common theme, not every part.
- **No source or number** (the page already shows "Abbott, Exercise 2.5.5"), no trailing period, and no
  difficulty words.
- **Read the full statement** (`problemLatex`) before titling. The concept field can be wrong about emphasis.

## Check
Run `node scripts/build-data.mjs --check`. It must print ✓, and it KaTeX-checks titles and warns about
titles over 90 characters. Ignore errors in files other agents are editing.

Reply with how many titles you wrote and 5 examples (`id: title`), including your hardest no-spoiler case.

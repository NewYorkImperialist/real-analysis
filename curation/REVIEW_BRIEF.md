# Brief: independent review of AI solutions

You are an independent grader. Another AI wrote hints and solutions for a real-analysis problem bank. They
are shown to a student labeled "AI-generated · not verified by a human". Your job is to find and fix
mathematical errors. A wrong-but-plausible proof is worse than no proof.

Project root: /Users/jaydenlin/dev/web/real-analysis. Use `rg`, not `grep`, which is a wrapper function in
this shell.

## Scope
Only problems of difficulty **medium, hard or very-hard** in your assigned topics. List them with:
`node curation/scripts/review-list.mjs <topic>`. It prints each problem's statement and notes, with its
current hints and solution. Solutions live in `data/solutions/<topic>.yaml`, keyed by `id`. Edit only the
files for your topics.

## For each solution, check like a strict grader
- **Does it answer exactly what was asked?** Every part, the right direction of each "iff", and examples
  actually verified.
- **Is every step valid?**
  - inequality directions;
  - quantifier order: does δ secretly depend on x, or N on something it shouldn't?;
  - division by zero;
  - edge cases: endpoints, n = 1, empty sets, x = 0;
  - limits taken before they are known to exist;
  - "for all" vs "exists".
- **Is each cited theorem stated correctly** and are its hypotheses checked? It must not use the result
  being proved, and it must not use tools beyond the problem's level (e.g. Lebesgue's criterion for a
  basic Riemann problem) unless the problem invites them.
- **Is every hypothesis used?** If one is unused, either the proof is wrong or the solution should note
  the hypothesis is unnecessary.
- **Hints:** do they progress (nudge → tool → structure), and does no hint give the whole proof away?
  Known case to fix: abbott-5.2.7 hint 3 essentially states the answers.

## What to do
- **Correct but improvable:** leave it alone. Do not rewrite for style.
- **Fixable error or gap:** fix it in place, minimally and rigorously. Keep the `|` block scalar format.
- **Seriously flawed:** rewrite the solution completely.
- **Unsure after real effort:** set `lowConfidence: "…"`, saying what is unverified. Never leave a known
  error unflagged.
- **Problem statement itself wrong or ambiguous:** note it in your report. The solution should state the
  reading it uses. Do not edit `data/problems/`.
- **After each batch of edits:** run `node scripts/build-data.mjs --check`. It must print ✓.

## Report
- Number reviewed.
- One line per change: id — what was wrong — what you did.
- Every `lowConfidence` you set.
- Statement issues you found.

Be concrete. "Looked fine" is not a finding.

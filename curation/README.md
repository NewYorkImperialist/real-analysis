# Curation materials

This folder holds everything behind the problem bank. You need it to revisit the curation or add more problems.
The site itself only reads `data/`.

| Path | What it is |
|---|---|
| `candidates/*.yaml` | All 836 candidates from the six books. Each has a faithful LaTeX transcription, a classification, a verdict (`core` / `strong` / `consider`), the standard result it tests, and a `skipped` list explaining every exercise that was not recorded. |
| `UNSELECTED.md` | Readable index of the 555 candidates **not** in the bank, by topic. |
| `selections/*.yaml` | The curation decisions: which candidates went into the bank, with the "why this problem" notes and any classification overrides. |
| `EXTRACTION_BRIEF.md`, `AUDIT_BRIEF.md`, `FINAL_AUDIT.md` | The rules used for extraction, transcription audits and the final fidelity + math check. |
| `scripts/` | Helper scripts (see below). |

## Adding problems from the candidates

```sh
pip install pyyaml
python3 curation/scripts/add_problems.py lebl-2.2.11 ross-12.8
python3 curation/scripts/add_problems.py --why "Your reason" abbott-4.4.1
npm run check
```

`add_problems.py` only **appends** new ids to `data/problems/<source>.yaml`. It never modifies problems already
in the bank, because those carry fixes from the final audit that the candidate files lack. Always treat
`data/problems/` as the source of truth.

Before relying on an added problem, check its transcription. The script prints whether the candidate was
already audited (`audit: ok|fixed` in the candidate file).
- **Audited chunks:** all of Cummings, Lebl ch. 0–4 and Ross §17–22 were checked against the page images.
- **Unaudited chunks:** the rest are unaudited for unselected candidates. Compare them with the book:

```sh
python3 curation/scripts/show.py ross-12.8          # print a candidate
python3 curation/scripts/render.py ross 94          # render PDF page 94 to curation/img/ (needs: pip install pymupdf)
```

PDF page offsets (PDF page = printed page + offset):

| Book | Offset |
|---|---|
| Lebl | +0 |
| Abbott ch. 1 | +13 |
| Abbott ch. 2–3 | +12 |
| Abbott ch. 4–5 | +11 |
| Abbott ch. 6 | +10 |
| Abbott ch. 7–8 | +9 |
| Ross §1–16 | +12 |
| Ross §17–22 | +11 |
| Ross §23–27 | +10 |
| Ross §28 onward | +9 |
| Tao | +17 |
| Cummings | +16 |

`show.py` reads extracted text in `curation/text/`. Regenerate it with `scripts/extract.py`, which needs PyMuPDF.

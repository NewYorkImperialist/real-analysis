#!/usr/bin/env python3
"""Append curated candidates to data/problems/<source>.yaml.

    python3 curation/scripts/add_problems.py lebl-2.2.11 abbott-4.4.1 ...
    python3 curation/scripts/add_problems.py --why "Reason shown on the site" ross-12.8

Safe by design: problems already in data/problems/ are NEVER modified or re-written
(they contain post-audit fixes that the candidate files do not). Only new ids are
appended to the end of the right file. Run `npm run check` afterwards.

Requires PyYAML (`pip install pyyaml`).
"""
import argparse
import glob
import os
import sys

import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
CAND = os.path.join(ROOT, 'curation', 'candidates')
DATA = os.path.join(ROOT, 'data', 'problems')
BOOKHINT_SOURCE = {'ross': 'Ross, Elementary Analysis — Selected Hints and Answers (back of book)'}


def clean(s):
    return '\n'.join(l.rstrip() for l in str(s).strip().split('\n')) + '\n'


class Dumper(yaml.SafeDumper):
    pass


Dumper.add_representer(
    str,
    lambda d, s: d.represent_scalar('tag:yaml.org,2002:str', s, style='|' if '\n' in s else None),
)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('cids', nargs='+', help='candidate ids, e.g. lebl-2.2.11')
    ap.add_argument('--why', help='curation note (defaults to the extractor\'s "machinery" line)')
    a = ap.parse_args()

    tax = yaml.safe_load(open(os.path.join(ROOT, 'data', 'taxonomy.yaml')))
    subs = {t['key']: set(t['subtopics']) for t in tax['topics']}
    cands = {}
    for f in glob.glob(os.path.join(CAND, '*.yaml')):
        for c in yaml.safe_load(open(f))['candidates']:
            cands[c['cid'].lower()] = c
    existing = set()
    for f in glob.glob(os.path.join(DATA, '*.yaml')):
        for p in yaml.safe_load(open(f)) or []:
            existing.add(p['id'])

    for cid in (x.lower() for x in a.cids):
        c = cands.get(cid)
        if not c:
            print(f'skip {cid}: no such candidate', file=sys.stderr)
            continue
        if cid in existing:
            print(f'skip {cid}: already in the bank (left untouched)', file=sys.stderr)
            continue
        book = cid.split('-')[0]
        topic = c['topic']
        sb = [s for s in c.get('subtopics', []) if s in subs.get(topic, ())] or [sorted(subs[topic])[0]]
        p = {
            'id': cid,
            'source': {'key': book, 'chapter': str(c.get('chapter', '')), 'section': str(c.get('section', '')),
                       'problemNumber': str(c['number']), 'page': str(c.get('page', ''))},
        }
        if c.get('mitAssigned'):
            p['assignedIn'] = [str(c['mitAssigned'])]
        p.update({
            'topic': topic, 'subtopics': sb, 'skills': list(c.get('skills', [])),
            'concept': str(c.get('standardResult') or c.get('machinery')),
            'difficulty': c['difficulty'], 'category': c['category'], 'type': c['type'],
            'tags': list(c.get('tags', [])), 'problemLatex': clean(c['problemLatex']),
        })
        if c.get('bookHint') and str(c['bookHint']).strip():
            p['hints'] = [{'text': clean(c['bookHint']), 'source': BOOKHINT_SOURCE.get(book, book), 'kind': 'textbook'}]
        if c.get('transcriptionNotes'):
            p['notes'] = str(c['transcriptionNotes']).strip()
        p['curation'] = {'why': a.why or str(c.get('machinery'))}
        with open(os.path.join(DATA, f'{book}.yaml'), 'a') as out:
            out.write('\n')
            yaml.dump([p], out, Dumper=Dumper, sort_keys=False, allow_unicode=True, width=10000)
        existing.add(cid)
        audited = 'audited' if c.get('audit') else 'NOT yet audited against the page image'
        print(f'added {cid} ({audited})')


if __name__ == '__main__':
    main()

import yaml,glob,sys
import os
S=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')
allc={}
for f in glob.glob(S+'/candidates/*.yaml'):
    for c in yaml.safe_load(open(f))['candidates']: allc[c['cid']]=c
for cid in sys.argv[1:]:
    c=allc.get(cid)
    if not c: print('!! missing',cid); continue
    print(f"=== {cid} [{c['verdict']}] {c['difficulty']}/{c['category']}/{c['type']} | {c.get('number')} p{c.get('page')} | {c.get('machinery','')}")
    print(c['problemLatex'].strip())
    if c.get('transcriptionNotes'): print('  NOTE:',str(c['transcriptionNotes'])[:300])

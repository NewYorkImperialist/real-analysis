"""Extract PDF text with page markers. Run from the pdfs/ folder: python ../curation/scripts/extract.py ../curation/text"""
import pymupdf, sys, os, glob
out=sys.argv[1]
files=glob.glob('*.pdf')+glob.glob('MIT*/*.pdf')
for f in files:
    d=pymupdf.open(f)
    name=os.path.splitext(os.path.basename(f))[0].split(' — ')[0].replace(' ','_')
    if 'mit18' in f: name=os.path.splitext(os.path.basename(f))[0]
    with open(f"{out}/{name}.txt","w") as o:
        for i,p in enumerate(d):
            o.write(f"\n=====PAGE {i+1}=====\n")
            o.write(p.get_text())
    print(name, len(d), d.metadata.get('title'))

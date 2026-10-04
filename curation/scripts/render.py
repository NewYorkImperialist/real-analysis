#!/usr/bin/env python
"""Render PDF pages to PNG for transcription verification.
usage: render.py <book> <pdfPage>[-<pdfPageEnd>] [--dpi N] [--top F] [--bottom F] [--out DIR]
  book: lebl | abbott | ross | tao | cummings
  pdfPage is 1-based (matches '=====PAGE n=====' markers in text/<Book>.txt)
  --top/--bottom: crop fraction of page height (e.g. --top 0.5 --bottom 1.0 for lower half)
Prints the output file paths; view them with the Read tool."""
import sys, os, argparse, pymupdf
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','pdfs')+'/'
BOOKS={'lebl':'Jiří Lebl — Basic Analysis I.pdf','abbott':'Stephen Abbott — Understanding Analysis.pdf',
 'ross':'Kenneth Ross — Elementary Analysis.pdf','tao':'Terence Tao — Analysis I.pdf','cummings':'Jay Cummings — Real Analysis.pdf'}
ap=argparse.ArgumentParser(); ap.add_argument('book'); ap.add_argument('pages')
ap.add_argument('--dpi',type=int,default=120); ap.add_argument('--top',type=float,default=0.0)
ap.add_argument('--bottom',type=float,default=1.0); ap.add_argument('--out',default=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','img'))
a=ap.parse_args()
import unicodedata
fn=None
for f in os.listdir(ROOT):
    if unicodedata.normalize('NFC',f)==unicodedata.normalize('NFC',BOOKS[a.book]): fn=f
d=pymupdf.open(ROOT+fn)
p0,_,p1=a.pages.partition('-'); p0=int(p0); p1=int(p1) if p1 else p0
os.makedirs(a.out,exist_ok=True)
for p in range(p0,p1+1):
    pg=d[p-1]; r=pg.rect
    clip=pymupdf.Rect(0,r.height*a.top,r.width,r.height*a.bottom)
    path=os.path.join(a.out,f'{a.book}_p{p}_{int(a.top*100)}-{int(a.bottom*100)}.png')
    pg.get_pixmap(dpi=a.dpi,clip=clip).save(path); print(path)

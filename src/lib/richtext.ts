// Parsing for the canonical problem text format (used by both the site and
// scripts/build-data.mjs, so keep this file free of DOM and non-erasable TS).
//
// Format: LaTeX math in $...$ (inline) and $$...$$ (display); blank lines
// separate paragraphs; a line beginning with a part label such as "a)", "(b)",
// "(iii)" or "2)" starts a new line; a line beginning with "- " is a bullet item (consecutive
// items form one list; following lines without a blank line continue the item);
// **bold** and *italic* outside math.
// A literal dollar sign is written \$.

export type Token =
  | { kind: 'text'; value: string }
  | { kind: 'math'; value: string; display: boolean };

export function tokenize(src: string): Token[] {
  const out: Token[] = [];
  let buf = '';
  let i = 0;
  const flush = () => {
    if (buf) out.push({ kind: 'text', value: buf });
    buf = '';
  };
  while (i < src.length) {
    const ch = src[i];
    if (ch === '\\' && src[i + 1] === '$') {
      buf += '$';
      i += 2;
      continue;
    }
    if (ch === '$') {
      const display = src[i + 1] === '$';
      const open = display ? 2 : 1;
      const close = findClose(src, i + open, display);
      if (close === -1) {
        // Unbalanced: keep literally (the validator reports this).
        buf += src.slice(i);
        break;
      }
      flush();
      out.push({ kind: 'math', value: src.slice(i + open, close).trim(), display });
      i = close + open;
      continue;
    }
    buf += ch;
    i++;
  }
  flush();
  return out;
}

function findClose(src: string, from: number, display: boolean): number {
  for (let j = from; j < src.length; j++) {
    if (src[j] === '\\') {
      j++;
      continue;
    }
    if (src[j] === '$') {
      if (display) {
        if (src[j + 1] === '$') return j;
      } else {
        return j;
      }
    }
  }
  return -1;
}

// Unbalanced-delimiter check for the validator.
export function delimiterProblems(src: string): string[] {
  const issues: string[] = [];
  const toks = tokenize(src);
  for (const t of toks) {
    if (t.kind === 'text' && /(^|[^\\])\$/.test(t.value)) issues.push('unbalanced $ delimiter');
    if (t.kind === 'math' && !t.value) issues.push('empty math segment');
  }
  return issues;
}

const PART_LABEL = /^\s*(\(?[a-h]\)|\(?[ivx]{1,5}\)|\(?[0-9]{1,2}\)|\([a-h]\)|\([ivx]{1,5}\))\s/;

const BULLET = /^\s*- /;

/** item: the block is a bullet-list item (renderers group consecutive items into one list). */
export type Block = { tokens: Token[]; item?: boolean };

// Split tokens into paragraph blocks. Inside text, a blank line ends a block, and
// a newline followed by a part label or a bullet ("- ") also ends a block.
export function toBlocks(tokens: Token[]): Block[] {
  const blocks: Block[] = [];
  let cur: Token[] = [];
  let item = false;
  const push = () => {
    // trim whitespace-only edge text
    while (cur.length && cur[0].kind === 'text' && !cur[0].value.trim()) cur.shift();
    while (cur.length && cur[cur.length - 1].kind === 'text' && !cur[cur.length - 1].value.trim()) cur.pop();
    if (cur.length) blocks.push(item ? { tokens: cur, item } : { tokens: cur });
    cur = [];
    item = false;
  };
  for (const t of tokens) {
    if (t.kind === 'math') {
      cur.push(t);
      continue;
    }
    const lines = t.value.split('\n');
    let acc = '';
    for (let k = 0; k < lines.length; k++) {
      const line = lines[k];
      if (k === 0) {
        // A bullet can open the whole text; otherwise the first line continues the preceding math.
        if (!cur.length && !blocks.length && BULLET.test(line)) {
          item = true;
          acc = line.replace(BULLET, '');
        } else acc = line;
        continue;
      }
      if (!line.trim()) {
        // blank line => paragraph break (consecutive blanks collapse)
        if (acc.trim()) cur.push({ kind: 'text', value: acc });
        acc = '';
        push();
        continue;
      }
      if (PART_LABEL.test(line) || BULLET.test(line)) {
        if (acc.trim()) cur.push({ kind: 'text', value: acc });
        acc = '';
        push();
        item = BULLET.test(line);
        acc = item ? line.replace(BULLET, '') : line;
        continue;
      }
      acc += ' ' + line;
    }
    if (acc) cur.push({ kind: 'text', value: acc });
  }
  push();
  return blocks;
}

// Plain-text rendering of LaTeX for search indexing.
const WORDS: Record<string, string> = {
  epsilon: 'epsilon', varepsilon: 'epsilon', delta: 'delta', sup: 'sup', inf: 'inf',
  limsup: 'limsup lim sup', liminf: 'liminf lim inf', lim: 'lim', sum: 'sum series',
  int: 'integral', infty: 'infinity', sqrt: 'sqrt root', frac: '', cdot: '', ldots: '',
  cdots: '', mathbb: '', mathcal: '', operatorname: '', left: '', right: '', colon: '',
  to: 'to', subset: 'subset', subseteq: 'subset', in: 'in', notin: 'not in', cap: 'intersection',
  cup: 'union', bigcup: 'union', bigcap: 'intersection', setminus: 'minus', emptyset: 'empty set',
  forall: 'for all', exists: 'exists', le: '', leq: '', ge: '', geq: '', neq: '', sin: 'sin',
  cos: 'cos', log: 'log', ln: 'ln log', exp: 'exp', max: 'max', min: 'min', partial: 'partial',
};

export function latexToPlain(src: string): string {
  return tokenize(src)
    .map((t) => {
      if (t.kind === 'text') return t.value.replace(/[*_`]/g, ' ');
      return t.value
        .replace(/\\([a-zA-Z]+)/g, (_, w: string) => ` ${WORDS[w] ?? w} `)
        .replace(/[{}^_\\&]/g, ' ');
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

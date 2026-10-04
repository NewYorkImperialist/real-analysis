import katex from 'katex';
import { useMemo } from 'preact/hooks';
import { tokenize, toBlocks, type Token } from '../lib/richtext';

const cache = new Map<string, string>();

function renderMath(tex: string, display: boolean): string {
  const key = (display ? 'D' : 'I') + tex;
  let html = cache.get(key);
  if (html === undefined) {
    html = katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: 'ignore' });
    cache.set(key, html);
  }
  return html;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderText(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
}

// Emphasis is applied to the whole paragraph with math swapped for placeholders, so *…$x$…* and
// **…$x$…** spans that contain math still pair up. Math is rendered separately and restored after.
function blockHtml(tokens: Token[]): string {
  const math: string[] = [];
  const text = tokens
    .map((t) => (t.kind === 'math' ? `\u0000${math.push(renderMath(t.value, t.display)) - 1}\u0000` : t.value))
    .join('');
  return renderText(text).replace(/\u0000(\d+)\u0000/g, (_, i) => math[Number(i)]);
}

// List previews: an opening like "Let" or "Compute:" says nothing on its own, so keep joining
// paragraphs (display math shown inline) until there is about a line of content.
const PREVIEW_CHARS = 70;
function previewTokens(blocks: { tokens: Token[] }[]): Token[] {
  const out: Token[] = [];
  let len = 0;
  for (const b of blocks) {
    if (out.length) out.push({ kind: 'text', value: ' ' });
    for (const t of b.tokens) {
      out.push(t.kind === 'math' ? { ...t, display: false } : t);
      len += t.kind === 'text' ? t.value.trim().length : Math.min(t.value.length, 20);
    }
    if (len >= PREVIEW_CHARS) break;
  }
  return out;
}

/** Renders the canonical problem-text format (LaTeX in $…$/$$…$$, paragraphs, parts). */
export function RichText({ src, class: cls, firstBlock }: { src: string; class?: string; firstBlock?: boolean }) {
  const html = useMemo(() => {
    const blocks = toBlocks(tokenize(src));
    // List previews show only the opening paragraph, which keeps long lists light.
    if (firstBlock) return `<p>${blockHtml(previewTokens(blocks))}</p>`;
    return blocks.map((b) => `<p>${blockHtml(b.tokens)}</p>`).join('');
  }, [src, firstBlock]);
  return <div class={`rich ${cls ?? ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Inline (single-paragraph) variant for short strings such as notes. */
export function InlineRich({ src }: { src: string }) {
  const html = useMemo(() => blockHtml(tokenize(src)), [src]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

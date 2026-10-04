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

function blockHtml(tokens: Token[]): string {
  return tokens.map((t) => (t.kind === 'math' ? renderMath(t.value, t.display) : renderText(t.value))).join('');
}

/** Renders the canonical problem-text format (LaTeX in $…$/$$…$$, paragraphs, parts). */
export function RichText({ src, class: cls, firstBlock }: { src: string; class?: string; firstBlock?: boolean }) {
  const html = useMemo(() => {
    const blocks = toBlocks(tokenize(src));
    // List previews show only the opening paragraph, which keeps long lists light.
    return (firstBlock ? blocks.slice(0, 1) : blocks).map((b) => `<p>${blockHtml(b.tokens)}</p>`).join('');
  }, [src, firstBlock]);
  return <div class={`rich ${cls ?? ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Inline (single-paragraph) variant for short strings such as notes. */
export function InlineRich({ src }: { src: string }) {
  const html = useMemo(() => blockHtml(tokenize(src)), [src]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

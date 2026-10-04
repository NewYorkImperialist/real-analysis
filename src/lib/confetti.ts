// A small, restrained confetti burst for the explicit "Mark Completed" action.
// No dependencies; draws on a temporary fixed canvas and removes it afterwards.

const DURATION = 1200;

function palette(): string[] {
  const cs = getComputedStyle(document.documentElement);
  const v = (n: string, fb: string) => cs.getPropertyValue(n).trim() || fb;
  return [v('--ok', '#2f6b4f'), v('--accent', '#2c4f7c'), v('--warn', '#8a6a1f'), v('--rule-strong', '#cfc9bb'), v('--ink-2', '#4a4843')];
}

function reducedMotion(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

type P = { x: number; y: number; vx: number; vy: number; r: number; vr: number; w: number; h: number; c: string };

export function celebrate(originEl?: Element) {
  if (typeof window === 'undefined') return;

  if (reducedMotion()) {
    // A brief, non-moving acknowledgement instead of particles.
    if (originEl instanceof HTMLElement) {
      originEl.classList.remove('check-pulse');
      void originEl.offsetWidth;
      originEl.classList.add('check-pulse');
      setTimeout(() => originEl.classList.remove('check-pulse'), 700);
    }
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = window.innerWidth;
  const H = window.innerHeight;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', width: `${W}px`, height: `${H}px`, pointerEvents: 'none', zIndex: '1000',
  });
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }
  ctx.scale(dpr, dpr);

  let ox = W / 2;
  let oy = H / 3;
  if (originEl) {
    const r = originEl.getBoundingClientRect();
    ox = r.left + r.width / 2;
    oy = r.top + r.height / 2;
  }

  const colors = palette();
  const N = 48;
  const parts: P[] = Array.from({ length: N }, () => {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
    const s = 4 + Math.random() * 5;
    return {
      x: ox, y: oy, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
      w: 4 + Math.random() * 4, h: 2 + Math.random() * 3,
      c: colors[Math.floor(Math.random() * colors.length)],
    };
  });

  const start = performance.now();
  let last = start;
  const frame = (now: number) => {
    const t = now - start;
    const dt = Math.min((now - last) / 16.67, 3);
    last = now;
    ctx.clearRect(0, 0, W, H);
    const alpha = t < DURATION * 0.6 ? 1 : Math.max(0, 1 - (t - DURATION * 0.6) / (DURATION * 0.4));
    ctx.globalAlpha = alpha * 0.9;
    for (const p of parts) {
      p.vy += 0.18 * dt;
      p.vx *= Math.pow(0.985, dt);
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.r += p.vr * dt;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (t < DURATION) requestAnimationFrame(frame);
    else canvas.remove();
  };
  requestAnimationFrame(frame);
}

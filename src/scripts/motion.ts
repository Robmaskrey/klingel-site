// Scroll motion: parallax ridges in the hero + fade-up reveals.
// Does nothing when the visitor has asked their device to reduce motion.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts a number up from 0 to its final value (which is already in the HTML,
// so it reads correctly without JS or with reduced motion).
function countUp(el: HTMLElement) {
  const end = Number(el.dataset.count);
  if (!Number.isFinite(end) || end < 2) return;
  const duration = 1300;
  let start = 0;
  const tick = (t: number) => {
    if (!start) start = t;
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(end * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
}

if (!reduce) {
  // ── Reveals ──
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add('is-visible');
            el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
            // Once revealed, drop the stagger delay so hover effects respond instantly.
            setTimeout(() => el.style.setProperty('--d', '0ms'), 1500);
            io.unobserve(el);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('is-visible'));
  }

  // ── Parallax ridges ──
  const hero = document.querySelector<HTMLElement>('.hero');
  const layers = [...document.querySelectorAll<SVGElement>('.ridge[data-depth]')].map((el) => ({
    el,
    depth: parseFloat(el.dataset.depth ?? '0'),
  }));
  let ticking = false;

  // Scroll position at which the bottom of the hero (where the ridges sit)
  // reaches the bottom of the screen. Parallax starts from there, so on tall
  // phone layouts the ridges don't drift away before you ever see them.
  let start = 0;
  const measure = () => {
    if (hero) start = Math.max(0, hero.offsetTop + hero.offsetHeight - window.innerHeight);
  };

  const update = () => {
    ticking = false;
    if (!hero) return;
    const y = window.scrollY;
    if (y > hero.offsetTop + hero.offsetHeight) return; // hero is off screen
    const s = Math.max(0, y - start);
    for (const { el, depth } of layers) {
      el.style.transform = `translate3d(0, ${(s * depth).toFixed(1)}px, 0)`;
    }
  };

  window.addEventListener('resize', () => {
    measure();
    update();
  });
  measure();

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

// Prefixes site-relative paths (like '/favicon.svg') with the deploy base,
// so they work both at a domain root and under /klingel-site/ on GitHub Pages.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path; // full URLs and #anchors pass through
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

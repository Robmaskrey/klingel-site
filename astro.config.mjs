import { defineConfig } from 'astro/config';

// Static site: `npm run build` outputs plain HTML/CSS/JS to dist/.
//
// Hosted on GitHub Pages at https://robmaskrey.github.io/klingel-site/.
// `base` must match the repository name. When the site moves to its own
// domain (e.g. klingelforstroudtownship.com), set `site` to that domain
// and remove `base`.
export default defineConfig({
  site: 'https://robmaskrey.github.io',
  base: '/klingel-site',
});

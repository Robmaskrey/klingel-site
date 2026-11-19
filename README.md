# Derek Klingel for Stroud Township Supervisor

Campaign website built with [Astro](https://astro.build). It builds to plain static HTML.

## Editing content

Almost everything lives in **`src/data/site.ts`**: bio, quote, priorities, events,
election date, contact info, donate link, and form settings. Values set to `null`
aren't known yet and show a yellow highlight while `showDrafts` is `true`.

Before launch, fill in the `null` values and set `showDrafts = false`.

- **Photo:** drop it in `public/` (e.g. `public/derek.jpg`) and set `photo: '/derek.jpg'`.
- **Donations:** set `donateUrl` to the ActBlue page. Amount buttons link to `?amount=N`.
- **Volunteer form:** set `volunteerFormAction` to a Formspree (or similar) endpoint.
- **Events:** add entries to the `events` array; when it's empty, a "coming soon" note shows.

## Commands

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:4321/klingel-site/
npm run build    # outputs the finished site to dist/
```

## Hosting

The draft is published with **GitHub Pages** at
https://robmaskrey.github.io/klingel-site/. Every push to `main` rebuilds and
redeploys automatically (`.github/workflows/deploy.yml`).

One-time setup: in the GitHub repo, **Settings → Pages → Source: GitHub Actions**.

While `allowSearchEngines` is `false` in `src/data/site.ts`, the page asks
search engines not to list it. Flip it to `true` at launch.

**Moving to a real domain later:** in `astro.config.mjs`, set `site` to the
domain and remove `base`. Then add the domain under Settings → Pages (or move
to Netlify / Cloudflare Pages: build command `npm run build`, publish `dist`).

## Layout

```
src/data/site.ts        all content and settings
src/components/         one file per page section
src/layouts/Base.astro  <head>, fonts, meta tags
src/styles/global.css   design
public/                 images and favicon
```

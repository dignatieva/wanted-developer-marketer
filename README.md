# Wanted: Developer Marketer

A reply to [PostHog's Developer Marketer posting](https://posthog.com/careers/developer-marketer),
built as a wild-west wanted poster that answers itself.

Every requirement in the posting becomes a charge. Each charge gets a plea and
evidence attached — writing samples, launched integrations, videos, photographs,
a system diagram. One charge pleads _partially_ guilty, because one of them
deserved an honest answer rather than a stretch.

Astro, hand-built, no template. One page, no framework runtime shipped to the
browser, ~200KB transferred.

## Running it

```bash
npm install
```

```bash
npm run dev
```

## Two skins, one document

The button in the top right switches `data-mode` on `<html>`:

- `poster` — aged paper, letterpress, rubber stamps, tape
- `plain` — the same content as a flat, sober document

It is one set of CSS custom properties plus a handful of `[data-mode='plain']`
overrides, and the choice persists in `localStorage`. It exists because a hiring
manager reading forty applications should be able to switch off the theatre and
still get the facts. `Cmd/Ctrl+P` prints either version.

## Decisions worth explaining

**Display type is sized against its container, not the viewport.** `WANTED` has no
space in it, so it can never wrap — sized in `vw` it eventually punches straight
through the poster's frame, because the poster stops growing at `44rem` while the
viewport does not. It is sized in `cqw` against `.poster__frame` instead. Rye
renders that word at ~4.91× its font size, so `19.5cqw` keeps it inside the rules
from 320px up.

**The mugshot is a progressive enhancement, in three layers.** It starts behind an
"no photograph on file" veil that lifts on hover, tap, keyboard focus or first
scroll. With no JavaScript a `<noscript>` style removes the veil entirely; with
broken JavaScript a `(hover: hover)` rule still lifts it. The veil is a `<button>`
layered _over_ the image rather than wrapped around it, and it removes itself from
the DOM once used, so the photo is never left inside a dead control.

**Videos are facades, not embeds.** An embedded YouTube player costs about a
megabyte of JavaScript before anyone presses play, and the poster claims to care
about Web Vitals. The page ships a thumbnail; the player is created on click,
pointed at `youtube-nocookie.com`. There are zero iframes in the built HTML.

**Fonts are self-hosted, Latin subsets only.** The `@fontsource` defaults ship
Cyrillic, Vietnamese and legacy `.woff` too, which quadrupled the payload for
glyphs this page never renders. Body text is Libre Baskerville rather than the
typewriter face — Special Elite is charm at four words and punishment at forty, so
it is restricted to short annotations.

**Captions and alt text are separate fields.** The captions are jokes. Alt text
describes what is in the photograph, which is a different job.

**The reward figure was calculated, not copied.** PostHog publishes its
compensation formula and its location factors, so the poster shows the Berlin
number rather than the San Francisco range in the posting. The derivation is in
[`src/data/dossier.ts`](src/data/dossier.ts).

## Content

All copy lives in [`src/data/dossier.ts`](src/data/dossier.ts). Charges carry
optional `exhibits`, `videos`, `photos`, `partners` and `blueprint`, each rendered
inline in that charge's evidence panel — nothing lives in a separate section that
has to be cross-referenced.

Photographs are in `src/assets/evidence/` and go through `astro:assets`, so each
one is resized, converted to webp and given `width`/`height` automatically.

## Self-instrumentation

```bash
cp .env.example .env
```

Add a PostHog project key and the page starts reporting on itself — pageviews,
plus `mode_toggled`, `suspect_identified`, `reel_played` and `poster_printed`.
With no key set the `posthog-js` chunk is never loaded, so there is no cost to
leaving it off.

## A note on brand

PostHog's brand guidelines prohibit third-party use of their hedgehog mascot and
illustrative assets, and prohibit making something look like an official PostHog
product. Nothing here uses their artwork or logos — it borrows the energy, not the
assets, and the page says so in the footer.

Built with [Claude Code](https://claude.com/claude-code) as a pair programmer.

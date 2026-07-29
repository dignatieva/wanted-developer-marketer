# WANTED: Developer Marketer

A reply to [PostHog's Developer Marketer posting](https://posthog.com/careers/developer-marketer),
built as a wild-west wanted poster that answers itself. Every requirement in the
posting becomes a charge; every charge gets a plea and evidence.

Astro, no template, no page builder. One HTML document, self-hosted fonts.

## Run it

```bash
npm install
```

```bash
npm run dev
```

## Before you send it

1. **Check the photo crops.** See [Photos](#photos) below.
2. **Read `src/data/dossier.ts`.** All copy lives there. Charge 04 contains one
   paragraph marked _optional_ about building this with a coding agent — decide
   whether you want to say that out loud.
3. **Check the links.** The three Google Docs are `drive_link` URLs. Confirm each
   is shared to "anyone with the link can view" or a reviewer hits a request-access
   wall, which is a bad first impression.
4. **Set the deploy URL** in `astro.config.mjs` (`site:`).

## The two skins

The top-right button switches `data-mode` on `<html>`:

- `poster` — aged paper, letterpress, rubber stamps, tape
- `plain` — the same content as a flat, sober document

It is one set of CSS custom properties plus a handful of `[data-mode='plain']`
overrides, and the choice persists in `localStorage`. It exists because a hiring
manager reading forty applications should be able to switch off the theatre and
still get the facts. `Cmd/Ctrl+P` prints either version.

## Photos

They live in `src/assets/evidence/` and go through `astro:assets`, so Astro
resizes each one, emits a webp `srcset` and writes `width`/`height` for you. To
swap one, replace the file keeping the name — a missing file fails the build
rather than shipping a hole in the page.

| File          | Where it appears | Crop                     |
| ------------- | ---------------- | ------------------------ |
| `mugshot.jpg` | The poster       | 4:5, sepia               |
| `arduino.jpg` | Exhibit A        | 1:1                      |
| `diploma.jpg` | Exhibit B        | 1:1 (already square)     |
| `robot.jpg`   | Exhibit C        | 1:1                      |
| `retro.jpg`   | Exhibit D        | 1:1, focal point at 22%  |

### The identity reveal

The mugshot starts behind an opaque "no photograph on file" veil — an anonymous
silhouette with a `?` where the face goes — and lifts on hover, tap, keyboard
focus, or the reader's first scroll past 60px. It reveals once and stays revealed;
re-hiding it would turn the page into a puzzle.

It is built as a progressive enhancement, in this order of fallback:

1. **No JS at all** — a `<noscript>` style removes the veil, so the photo is
   simply visible. The face is never trapped behind a script that failed.
2. **JS broken but CSS fine** — a `(hover: hover)` rule lifts the veil on hover
   without any script involved.
3. **Full JS** — sticky reveal, plus tap and scroll triggers for touch, and a
   `suspect_identified` event with which trigger fired.

The veil is a `<button>` layered *over* the image rather than wrapped *around* it,
and it removes itself from the DOM once used — so afterwards the photo is not left
sitting inside a dead control, and there is no focus stop that does nothing. The
hint line reads "Hover to identify" or "Tap to identify" depending on `(hover: hover)`.

`mugshot.jpg` is a head-and-shoulders crop cut from the original phone photo
(`PXL_20260603_125605129.jpg`, 2736x3648) down to 1240x1550. The original is
untouched if you want to reframe it.

The evidence photos are tall and get cropped square, so any whose subject sits
away from the vertical centre needs a `focus` value in `dossier.ts` — that is
why `retro.jpg` has one; a centred crop cut the top off the monitor.

## Type

Four faces, each with one job:

| Token          | Face              | Used for                                          |
| -------------- | ----------------- | ------------------------------------------------- |
| `--display`    | Rye               | WANTED, names, section headings                   |
| `--slab`       | Bevan             | The role, charge titles, the reward figure         |
| `--type`       | Libre Baskerville | All body copy — chosen to stay legible at 16px     |
| `--annotation` | Special Elite     | Short typed marginalia only, never paragraphs      |
| `--ui`         | system stack      | Micro labels, buttons, and the whole of plain mode |

The typewriter is deliberately restricted to the alias, the poster footer, the
letter salutation and the photo captions. It sets the tone in a few words and
gets out of the way before it costs anyone their eyesight.

`WANTED` is sized in `cqw` against `.poster__frame`, not in `vw`. The word has no
space in it and therefore cannot wrap, so viewport-based sizing eventually drives
it straight through the poster's rules. Rye renders it at ~4.91x its font-size;
`19.5cqw` keeps it inside the frame at every width from 320px up.

## Self-instrumentation (optional)

```bash
cp .env.example .env
```

Add your PostHog project key and the page starts reporting on itself — pageviews,
plus `mode_toggled` and `poster_printed`. With no key set, the `posthog-js` chunk
is never loaded, so there is no cost to leaving it off.

## Deploy

Static output, so anything works. Cheapest paths:

```bash
npx vercel deploy --prod
```

Or `npm run build` and drag `dist/` onto Netlify.

## A note on brand

PostHog's brand guidelines prohibit third-party use of their hedgehog mascot and
illustrative assets, and prohibit making something look like an official PostHog
product. Nothing here uses their artwork or logos — it borrows the energy, not the
assets, and the footer says so plainly.

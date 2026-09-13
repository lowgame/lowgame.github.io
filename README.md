# Ahmet Kamer Çivi

Personal portfolio at [lowgame.github.io](https://lowgame.github.io/): physics, independent software and public experiments.

The homepage follows the monochrome, typographic design language of [doto](https://github.com/lowgame/doto), [pomo](https://github.com/lowgame/pomo), [writo](https://github.com/lowgame/writo) and [clippo](https://github.com/lowgame/clippo). App screenshots come from those repositories. Downloads link to GitHub Releases. FLYSPEARE links to its [public experiment](https://flyspeare.lol).

## Files

- `index.html`: complete English page, project links and structured metadata.
- `portfolio.css`: responsive monochrome layout, light/dark themes and reduced-motion support.
- `portfolio.js`: optional English/Turkish and theme controls, with preferences saved locally.
- `assets/portfolio/`: original public app screenshots.
- `apps/`: iPhone app directory and guides, maintained separately.

## Preview

Run `python3 -m http.server 8767 --bind 127.0.0.1` here, then open `http://127.0.0.1:8767/`.

## Publish

GitHub Pages serves the root of `main`. Check the public page after pushing; a commit alone does not prove deployment. Keep the app directory, legal pages and sitemap index intact when editing the portfolio.

## Same photo, three eras

`three-eras/` is a standalone English/Turkish photo experiment with nine outputs from the Nostalgia Camera production engine. The current people/friendship photographs are credited Pexels inputs. The selected eras are 1895, 1972 and 2004, in a shared square crop. The app catalog was compared with the released 1.0.1 build 8 archive. `provenance.json` records inputs, crop, profiles, seeds and checksums. The page does not currently send analytics events to a collector; its in-page event interface is not aggregate measurement.

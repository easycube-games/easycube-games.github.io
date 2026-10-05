# Easy Cube Games

The official landing page for Easy Cube Games: https://easycube-games.github.io/

A small, responsive static website featuring six games from Easy Cube Games. All nine languages from [Base Stack](../packages/com.easycube.docs.basestack/GOOGLE_PLAY_LISTING.md) are available: English (United States), Russian, German, French, Spanish (Spain), Portuguese (Brazil), Italian, Polish and Turkish.

The language menu uses each language's native name. A manual choice is saved in local storage under `easycube.language`. Otherwise, the first supported language in the browser's preference list is selected; regional variants map to the supported locale (for example, `es-MX` to `es-ES` and `pt-PT` to `pt-BR`). English is the fallback. When storage is unavailable, switching still works for the current visit. Without JavaScript, the English page remains readable and the language menu is disabled.

## Games

| Game | Website status | Google Play |
| --- | --- | --- |
| Swipe Sprint: Reaction Game (formerly Swipe Puzzle) | Updated | [Available](https://play.google.com/store/apps/details?id=com.easycube.swipepuzzle) |
| Goblin Warcamp | New release | [Available](https://play.google.com/store/apps/details?id=com.easycube.goblinwarcamp) |
| Spellarium: Magic Clicker | Available now | [Available](https://play.google.com/store/apps/details?id=com.easycube.spellarium) |
| Iron Dominion: Match 3 RPG | Available now | [Available](https://play.google.com/store/apps/details?id=com.easycube.irondominion) |
| Lunisol: Binary Logic Puzzle | Coming soon | — |
| Puck Rogue: Ice Hockey Manager | Coming soon | — |

Catalog updated on October 6, 2026. Released game names and links were checked against their Google Play listings; upcoming game copy comes from the projects' store listing sources.

## Files

- `index.html` — page content and Google Play links. The English page also works without JavaScript.
- `styles.css` — responsive layout, color palette and reduced-motion support.
- `site.js` — all nine translation dictionaries, locale detection and language selection.
- `assets/` — optimized artwork and icons from the games and the Easy Cube Games branding kit.
- `app-ads.txt` — the existing advertising declaration, preserved.
- `.nojekyll` — lets GitHub Pages serve the static files directly.

## Preview and publish

No dependencies or build step are required. Start any static HTTP server in this directory, for example `python3 -m http.server 8000`, then open http://localhost:8000/.

GitHub Pages publishes the repository root from `main`. The public URL is https://easycube-games.github.io/.

## Updating the games

Update game descriptions in both `index.html` (English fallback) and all nine dictionaries in `site.js`. Keep their keys aligned. Locales are `en-US`, `ru-RU`, `de-DE`, `fr-FR`, `es-ES`, `pt-BR`, `it-IT`, `pl-PL` and `tr-TR`; a new locale also needs an option in the language menu in `index.html`. Game and studio brand names stay unchanged.

Lunisol and Puck Rogue show **Coming soon to Google Play** without a store link or release date. When a public store listing is available, replace the coming-soon text with a game link matching the other cards, update the status badge, and add a localized accessible label in both dictionaries. Swipe Sprint retains its original package ID, `com.easycube.swipepuzzle`.

The new card artwork is exported as 384×384 WebP from each project's `Promo/GooglePlay/artwork/icon-512.png`: `../swipepuzzle/` → `assets/swipe-sprint.webp`, `../goblin_warcamp/` → `assets/goblin-warcamp.webp`, `../sun-moon-grid/` → `assets/lunisol.webp`, and `../puck_rogue/` → `assets/puck-rogue.webp`. Keep these as local assets when updating the catalog.

Branding source: `../google_account/GooglePlayDeveloperPage/`. All website assets are stored locally; the page uses system fonts and requires no external scripts, analytics or cookies.

# Easy Cube Games

The official landing page for Easy Cube Games: https://easycube-games.github.io/

A small, responsive static website featuring Spellarium: Magic Clicker, Iron Dominion and Swipe Puzzle. English and Russian are available; the initial language follows the browser language, with English as the fallback.

## Files

- `index.html` — page content and Google Play links. The English page also works without JavaScript.
- `styles.css` — responsive layout, color palette and reduced-motion support.
- `site.js` — English/Russian copy and language switch.
- `assets/` — optimized artwork and icons from the games and the Easy Cube Games branding kit.
- `app-ads.txt` — the existing advertising declaration, preserved.
- `.nojekyll` — lets GitHub Pages serve the static files directly.

## Preview and publish

No dependencies or build step are required. Start any static HTTP server in this directory, for example `python3 -m http.server 8000`, then open http://localhost:8000/.

GitHub Pages publishes the repository root from `main`. The public URL is https://easycube-games.github.io/.

## Updating the games

Update game descriptions in both `index.html` (English fallback) and the English/Russian dictionaries in `site.js`.

Iron Dominion currently shows **Coming soon to Google Play**, as requested. When its public store listing is available, replace the coming-soon text with a game link matching the other cards, and add a localized accessible label in both dictionaries.

Branding source: `../google_account/GooglePlayDeveloperPage/`. All website assets are stored locally; the page uses system fonts and requires no external scripts, analytics or cookies.

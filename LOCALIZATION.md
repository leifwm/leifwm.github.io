# Language routing

English pages use `/en/`; Brazilian Portuguese pages use `/pt/`. All active pages, navigation, interactive diagrams and UI labels share the translation catalog in `src/i18n/pt.json`. English source strings are the catalog keys. Original research images and video recordings remain source artifacts.

An unprefixed URL preserves its page, query parameters and anchor while selecting a language. Selection order is a saved manual choice, the country cached for this browser session, then the IP country returned by `https://ipapi.co/country/`. Portuguese-speaking countries select Portuguese; others select English. A failed or timed-out lookup falls back to the browser language. Explicit `/en/` and `/pt/` URLs bypass detection.

GitHub Pages cannot inspect visitor IPs server-side, so detection happens in the browser. The external country endpoint needs no API key; it may fail or be rate limited, which the fallback handles. The language switch saves a preference and reloads the same page in the chosen language.

`npm run build` creates static entry points for each language route, including direct case-study links. The existing Pages 404 fallback continues to support unprefixed legacy links.

Validation: `node scripts/validate-translations.mjs` checks catalog coverage. `py scripts/check-localization.py` exercises the running Vite server with Python Playwright and Microsoft Edge, covering country redirects, network fallback, both languages, manual preference, page/query/anchor preservation, and mobile layouts.

# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 to 5: DONE.
- Stage 2b (Stitch Match & Bilingual V1): DONE.
- Active branch: `stage-2b-stitch-match`.

## Decisions made
- Visual source of truth matched against `reference/stitch/*/screen.png`.
- Zero-JS language toggle (`EN | বাংলা`) in header routing to `/` and `/bn/`.
- All visible strings isolated in `src/config/ui.ts` with complete Bengali translations.
- Fonts: `@fontsource-variable/figtree` globally, `@fontsource-variable/noto-sans-bengali` for Bengali pages.
- Tested against Strip list: no invented claims, parameter counts, or real-looking hours.
- Verified visual evidence captured in `docs/shots/` at 390px and 1280px viewports.

## Open (ask the owner, default in brackets)
- Replace placeholder text in `src/config/centre.ts` with real clinic data when pitching.
- Toggle `preview: false` and `emitSchema: true` on client launch.

## Quality gates & checks
- `npm run build`: PASS (static routes `/`, `/bn/`, and test-expanded pages clean).
- `npx astro check`: PASS (31 files checked, 0 errors, 0 warnings, 0 hints).
- `npm run check:content`: PASS (0 banned terms, 0 forbidden resources, noindex active).
- Layout: Zero horizontal scroll at 320px/390px/1280px; Bengali line-height 1.75; no text clipping.
- Screenshots saved: `docs/shots/desktop-en.png`, `desktop-bn.png`, `desktop-open-row.png`, `mobile-en.png`, `mobile-bn.png`, `mobile-open-row.png`.

## Next action
Review captured screenshots in `docs/shots/` and approve branch `stage-2b-stitch-match`.

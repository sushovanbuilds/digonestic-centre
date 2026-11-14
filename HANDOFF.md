# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 to 5: DONE.
- Stage 2b (Stitch Match & Bilingual V1): DONE.
- Stage 2c (Demo Data & Tailored WhatsApp): DONE.
- Stage 3 (Pitch Ready Polish & Mobile Sticky Bar): DONE.
- Active branch: `stage-3-pitch-ready`.

## Decisions made
- Hero quick-info card polished: removed live "Open" badge and "Desk + WhatsApp" row; displays hours, address, phone, and maps CTA.
- Hours card height fits content cleanly (`align-items: start;` in grid).
- Added mobile (<700px) sticky bottom bar with "WhatsApp us" and "Call" buttons, respecting safe-area insets and auto-hiding when booking card is in view.
- Added "Call" outline button (`tel:`) to Contact booking card.
- Replaced Why-us trust points with 4 neutral config-driven pairs in EN and BN (no "main road" or "reports" claims).
- Translated "Map placeholder" for BN (`ম্যাপের স্থান`) and merged top test section pills into "Demo data" + "Sample prices".
- Created text-only `public/og.png` (1200x630) with OpenGraph and Twitter card metadata in `Base.astro` using `config.siteUrl`.

## Open (ask the owner, default in brackets)
- Edit top 5 fields in `src/config/centre.demo.ts` with real clinic pitching details.
- Toggle `preview: false` and `emitSchema: true` on official deployment.

## Quality gates & checks
- `npm run build && npm run check:content`: PASS (0 banned terms, 0 forbidden resources, noindex active).
- `npm run build:demo && npm run check:demo`: PASS (`data-demo="1"`, visible demo labels, valid prefilled WhatsApp URLs).
- `npx astro check`: PASS (34 files checked, 0 errors, 0 warnings, 0 hints).
- Screenshots saved: `docs/shots/pitch-desktop-en.png`, `pitch-desktop-bn.png`, `pitch-mobile-en.png`, `pitch-mobile-bn.png`, `pitch-sticky-bar.png`.

## Next action
Ready for client pitch presentation.

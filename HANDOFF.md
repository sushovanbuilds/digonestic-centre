# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 to 5: DONE.
- Stage 2b (Stitch Match & Bilingual V1): DONE.
- Stage 2c (Demo Data & Tailored WhatsApp): DONE.
- Stage 3 (Pitch Ready Polish, Bilingual Responsiveness & Mobile Sticky Bar): DONE.
- Active branch: `stage-3-pitch-ready`.

## Decisions made
- Kept English brand words like "WhatsApp" and "Call" in English across Bengali surfaces, eliminating clunky transliterations.
- Solved Bengali mobile responsiveness (320px–390px): responsive header buttons (`বুকিং` / `Book` on narrow viewports), single-line sticky bottom bar (`WhatsApp করুন` + `Call করুন`), overflow-safe typography (`overflow-wrap: break-word`), and mobile padding.
- Built unified consistent outline SVG icon system (`Icon.astro`) for calendar, WhatsApp, call/phone, pin/location, clock/hours, user/doctor, home collection, and navigation chevrons/arrows.
- Sticky action bar permanently fixed at bottom across viewports with WhatsApp and Call quick actions.
- Default configuration set to demo mode (`centreDemo`) for direct pitch builds.
- Added "Call" outline button (`tel:`) to Contact booking card and location card.
- Replaced Why-us trust points with 4 neutral config-driven pairs in EN and BN (no "main road" or "reports" claims).
- Created text-only `public/og.png` (1200x630) with OpenGraph and Twitter card metadata in `Base.astro` using `config.siteUrl`.

## Open (ask the owner, default in brackets)
- Edit remaining fields in `src/config/centre.demo.ts` with real clinic pitching details (WhatsApp routed to +916289217587).
- Toggle `preview: false` and `emitSchema: true` on official deployment.

## Quality gates & checks
- `npm run build && npm run check:content`: PASS (0 banned terms, 0 forbidden resources, noindex active).
- `npm run build:demo && npm run check:demo`: PASS (`data-demo="1"`, visible demo labels, valid prefilled WhatsApp URLs).
- `npx astro check`: PASS (34 files checked, 0 errors, 0 warnings, 0 hints).
- Zero horizontal scroll at 320px, 390px, and 1280px viewports in both EN and BN.
- Screenshots saved: `docs/shots/pitch-desktop-en.png`, `pitch-desktop-bn.png`, `pitch-mobile-en.png`, `pitch-mobile-bn.png`, `pitch-mobile-bn-320.png`, `pitch-sticky-bar.png`.

## Next action
Ready for client pitch presentation.

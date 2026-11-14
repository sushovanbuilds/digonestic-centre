# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 to 5: DONE.
- Stage 2b (Stitch Match & Bilingual V1): DONE.
- Stage 2c (Demo Data & Tailored WhatsApp): DONE.
- Active branch: `stage-2c-demo-data`.

## Decisions made
- Isolated demo data in `src/config/centre.demo.ts` with top REAL_CENTRE block.
- Dual-build architecture: standard builds (`npm run build`) strictly contain 0 demo data and no `data-demo`; demo builds (`npm run build:demo`) target `dist-demo` with `<html data-demo="1">`.
- Visible "Demo data" / "ডেমো তথ্য" and "Sample prices" / "নমুনা মূল্য" pills on all demo surfaces.
- Tailored bilingual WhatsApp templates with clean line breaks (`\n`) for test, package, doctor consultations, and home collection.
- Price display (right-aligned ₹ badges) enabled when `flags.showPrices` is true.

## Open (ask the owner, default in brackets)
- Pitching clinic owner: fill top 5 fields in `src/config/centre.demo.ts` (name, area, address, phone, whatsapp).
- Toggle `preview: false` and `emitSchema: true` on client launch.

## Quality gates & checks
- `npm run build && npm run check:content`: PASS (0 demo data leaks, 0 forbidden claims, noindex active).
- `npm run build:demo && npm run check:demo`: PASS (`data-demo="1"`, visible demo labels, valid prefilled WhatsApp URLs).
- `npx astro check`: PASS (33 files checked, 0 errors, 0 warnings, 0 hints).
- Decoded `wa.me` messages (8 total: en + bn): verified with correct line breaks and zero undefined tokens.
- Screenshots saved: `docs/shots/demo-desktop-en.png`, `demo-desktop-bn.png`, `demo-desktop-open-row.png`, `demo-mobile-en.png`, `demo-mobile-bn.png`, `demo-mobile-open-row.png`.

## Next action
Review captured demo screenshots in `docs/shots/demo-*.png` and approve branch `stage-2c-demo-data`.

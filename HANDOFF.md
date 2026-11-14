# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 (design) DONE: Stitch export is in `reference/stitch/`. Design tokens are final in `DESIGN.md`.
- Current stage: **1 (plan, file structure, config only)**. DONE.
- Branch: `stage-1-setup`.

## Decisions made
- Astro static + React islands for 3 effects only. Zero-JS fallback exists if Lighthouse < 95.
- Palette and Figtree font fixed in `DESIGN.md`.
- Tests shown as a ruled expandable list, not a card grid.
- Booking is WhatsApp only. Per-test "Book this test" links use a prefilled message (static href, no JS).
- No bottom nav bar (Stitch's included a "Records" tab, which implies a report portal).
- English only in v1. Config is language-ready (`Tx = { en, bn? }`) so Bengali can be added later without touching components.
- Doctor consultation hours: shown as a placeholder block inside Location and timings, behind `flags.doctorSchedule`. Doctor names are placeholders only.

## Open (ask the owner, default in brackets)
- Keep the Bengali language toggle in v1? [No, defer to after Stage 5]
- Real centre name, colours, address, phone, WhatsApp number? [placeholders until the pitch]

## Known fixes to apply to Stitch output
See `docs/STITCH_MAP.md` "Strip list". Short version: remove Records tab and bottom nav, remove all invented claims and counts, make hours read as placeholders, sentence-case labels, drop Tailwind CDN and Google Fonts runtime links.

## Last stage result
Stage 1 PASS: `npm run build` pass, `npx astro check` pass (0 errors, 0 warnings), `npm run check:content` pass.

## Next action
Awaiting owner approval to start Stage 2 (layout and sections).

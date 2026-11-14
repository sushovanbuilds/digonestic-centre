# HANDOFF.md

Update this file at the end of every stage. Keep it under 60 lines.

## Status
- Stage 0 (design): DONE. Design tokens final in `DESIGN.md`.
- Stage 1 (scaffold, stubs, config): DONE.
- Stage 2 (layout and sections): DONE. All 8 sections & islands active.
- Stage 3 (mobile polish & accessibility): DONE. 320px/390px, 48px tap targets, reduced motion.
- Stage 4 (speed, SEO, noindex): DONE. Self-hosted Figtree, JS < 50 KB gz, noindex & Disallow verified.
- Stage 5 (deploy & handoff): DONE. README, LAUNCH_CHECKLIST.md, DEMO_SCRIPT.md delivered.
- Active branch: `stage-2-layout`.

## Decisions made
- Astro static + React islands for 3 effects (TestList AutoHeight, Press ring, HeroTitle reveal).
- Palette, tokens, and self-hosted variable Figtree font implemented.
- Tests presented as ruled expandable menu list; WhatsApp links prefilled at build time.
- Zero patient data, zero backend/forms, zero tracking, strict preview noindex mode.
- Bengali translation structure preserved in `Tx` types for post-v1 rollout.

## Open (ask the owner, default in brackets)
- Replace placeholder values in `src/config/centre.ts` with real clinic data when pitching.
- Toggle `preview: false` and `emitSchema: true` on client launch.

## Quality gates & checks
- `npm run build`: PASS (static generation clean, zero errors).
- `npm run check`: PASS (24 files checked, 0 errors, 0 warnings, 0 hints).
- `npm run check:content`: PASS (0 banned terms, 0 forbidden resources, noindex active).
- JS bundle size: 49.1 KB gzipped (well under the 60 KB budget).

## Next action
Ready for client demo and pitch presentation.

# AGENTS.md

Unofficial concept site to pitch a local diagnostic centre + clinic (doctors consult there). Static Astro. Preview only, not a finished client site.

Read order every session: `HANDOFF.md` then this file. Read `DESIGN.md` only when touching UI, `docs/PLAN.md` for the current stage. Do not open `reference/` unless `docs/STITCH_MAP.md` sends you there.

## Hard rules (never break)
- No patient data, no forms that store or send data, no backend, database, login, report portal, "Records/Reports" nav item, chatbot.
- Never invent: accreditation (NABL, ISO etc.), doctor names, prices, turnaround times, parameter counts, equipment, "verified/certified/leading/best", ratings, testimonials, real-looking hours. Use marked placeholders (see `docs/CONTENT_RULES.md`).
- No real logo or photos. Text wordmark and inline SVG line icons only.
- All centre-specific content lives in `src/config/centre.ts`. No centre text hardcoded in components.
- Preview mode: `<meta name="robots" content="noindex, nofollow">` and `public/robots.txt` with `Disallow: /` until the owner says remove.
- Booking = `wa.me` link with prefilled text, built at build time. Nothing is stored or sent by us.

## Stack
- Astro static output, TypeScript, plain CSS with tokens from `DESIGN.md`. No Tailwind CDN, no runtime font or CSS fetch, no Material Symbols font.
- React islands only: `TestList` (AutoHeight), `Press` (Click ring), `HeroTitle` (TextAnimation). Everything else ships zero JS.
- One self-hosted font file (Figtree variable woff2). Inline SVG icons.
- Targets: Lighthouse mobile 95+, JS under 60 KB gzipped, CLS 0, tap targets 48px, AA contrast.

## Working method (token-efficient)
1. One stage at a time (`docs/PLAN.md`). At the end of a stage: run `npm run build` and `npx astro check`, report pass/fail, update `HANDOFF.md`, then STOP and wait for approval.
2. Surgical patches. Change only the lines that change. Never rewrite a whole file for a small edit.
3. Read only the files you need. Do not paste file contents back in replies. Replies: 8 lines or fewer plus the check result.
4. No new dependencies without asking. Allowed: astro, @astrojs/react, react, react-dom, framer-motion (or motion), the animate-ui parts named in `DESIGN.md` section 5.
5. If an effect or install fails after 2 attempts, use the CSS fallback in `DESIGN.md` section 6 and report. Do not keep debugging.
6. Git: branch per stage `stage-N-name`, small commits, no secrets, no `.env` committed.
7. If this file and any skill or tool default disagree, this file wins.

## Design skill precedence (any agent, any skill)
1. `DESIGN.md` is the law: tokens, layout, effects, copy rules.
2. `frontend-design` guides execution and taste inside DESIGN.md. It may not change tokens, fonts or add effects.
3. `Impeccable` is an audit and polish pass only (Stage 3). It reports findings first; apply only fixes that stay inside DESIGN.md.
4. `ui-ux-pro-max` and `21st` are for gaps DESIGN.md leaves open. Never import their components or palettes wholesale.
5. Motion: only the four effects in `DESIGN.md` section 5. A skill suggesting more motion is ignored.

## Quality gates (run at the end of every stage, report pass/fail)
- `npm run build` and `npx astro check` pass, zero console errors.
- `npm run check:content` passes (banned claims, forbidden resources, external URLs, noindex, robots).
- Security: Claude Code runs `/security-review`; other agents do a manual pass for unsafe `set:html`, `target="_blank"` without `rel="noopener noreferrer"`, inline event handlers, and any data collection.
- Stages 3 and 4: browser check at 390px and 320px (webapp-testing or Playwright): no horizontal scroll, row expand works, no console errors, axe has zero serious or critical issues.
- Stage 4: Lighthouse mobile 95+ and JS under 60 KB gzipped.
No stage is approved with a failing gate.

## Done means
The stage checks in `docs/PLAN.md` all pass.

# Pre-Launch & Handover Checklist

Complete each step before taking the site live for a client:

- [ ] **Centre Details & Identity**
  - [ ] Replace `[CENTRE NAME]` with the real centre name in `src/config/centre.ts`.
  - [ ] Replace phone and WhatsApp numbers with verified clinic numbers.
  - [ ] Update physical address lines and map link to genuine coordinates.
  - [ ] Add actual consultation timings and consulting doctor schedules.
- [ ] **Tests & Pricing (if applicable)**
  - [ ] Replace placeholder test names and bullet points with verified offerings.
  - [ ] Update packages and descriptions.
- [ ] **Going Public (Exit Preview Mode)**
  - [ ] Set `preview: false` in `src/config/centre.ts`.
  - [ ] Update `public/robots.txt` to allow indexing (`Allow: /`).
  - [ ] Remove `<meta name="robots" content="noindex, nofollow">` from `src/layouts/Base.astro`.
  - [ ] Set `flags.emitSchema: true` in `src/config/centre.ts` to output structured JSON-LD.
- [ ] **Quality Gates Verification**
  - [ ] Run `npm run build` and ensure exit code 0.
  - [ ] Run `npm run check` and ensure 0 errors, 0 warnings.
  - [ ] Run `npm run check:content` and ensure all checks pass.
  - [ ] Verify Lighthouse mobile score >= 95.

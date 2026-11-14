# Diagnostic Centre & Clinic Concept Site

A high-performance, token-driven static Astro site designed to pitch a local diagnostic centre and clinic.

## Key Highlights
- **Zero backend / Zero database**: Completely static, privacy-first, zero patient data collection.
- **WhatsApp booking**: Direct `wa.me` links with prefilled templates configured at build time.
- **Lightweight React Islands**: Interactive `TestList` (AutoHeight expand), `Press` (Click ring ripple), and `HeroTitle` (word reveal).
- **Lighthouse mobile 95+ ready**: Self-hosted Figtree variable font, zero render-blocking third-party scripts, JS payload < 50 KB gzipped.
- **Full preview protection**: Includes `Disallow: /` in `robots.txt` and `<meta name="robots" content="noindex, nofollow">`.

---

## How to Configure a Second Centre

Every centre-specific value lives in a single configuration file: `src/config/centre.ts`.

To configure another centre:
1. Duplicate or edit `src/config/centre.ts`.
2. Update the fields:
   - `name`: Centre wordmark name (e.g., `Apex Diagnostics`).
   - `tagline`: One-line tagline (`en`, optional `bn`).
   - `theme`: Primary, ink, paper, tint, rule, and WhatsApp brand hex colours.
   - `contact`: Telephone and WhatsApp number (country code + digits only, e.g. `919876543210`).
   - `location`: Area label, address lines, and Google Maps URL.
   - `hours`: Timings table rows.
   - `doctors`: Doctor roster (names, specialities, consulting days).
   - `tests` & `packages`: Test list and health package details.
   - `why`: Four core trust statements.
   - `flags`: Toggle `homeCollection`, `doctorSchedule`, `showReviews`, and `emitSchema`.
3. Run the quality checks:
   ```bash
   npm run build
   npm run check
   npm run check:content
   ```
4. Deploy the generated `dist/` directory.

---

## Development & Build Commands

- `npm run dev`: Start local development server.
- `npm run build`: Compile static production build to `dist/`.
- `npm run check`: Run Astro and TypeScript diagnostic validation.
- `npm run check:content`: Verify content rules, banned claims, and preview headers.

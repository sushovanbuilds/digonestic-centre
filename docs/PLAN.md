# PLAN.md

## Target file structure
```
AGENTS.md  CLAUDE.md  GEMINI.md  HANDOFF.md  DESIGN.md
.github/copilot-instructions.md
astro.config.mjs  package.json  tsconfig.json
public/robots.txt  public/favicon.svg  public/fonts/figtree-var.woff2
src/config/types.ts        # CentreConfig type
src/config/centre.ts       # ONLY place for centre content
src/lib/whatsapp.ts        # builds wa.me links from config
src/lib/theme.ts           # config colours -> CSS variables
src/styles/tokens.css  src/styles/global.css
src/layouts/Base.astro     # meta, noindex, optional schema slot
src/pages/index.astro
src/components/Header.astro Hero.astro TestsPackages.astro WhyUs.astro
  HomeCollection.astro LocationTimings.astro DoctorHours.astro
  Reviews.astro Contact.astro Footer.astro Icon.astro SampleTag.astro
src/components/islands/TestList.tsx Press.tsx HeroTitle.tsx
docs/ (these files)   reference/stitch/ (look only)
```

## Stages. Stop after each one for approval.

### Stage 1: plan, structure, config
- Scaffold Astro (static) + React integration. Create the tree above with empty or stub files.
- Write `types.ts` and `centre.ts` from `docs/CONFIG_SPEC.md` with placeholder content only.
- Add npm script `"check:content": "node scripts/check-content.mjs"` (file already provided in `scripts/`).
- Check: `npm run build` and `npm run check:content` pass; grep finds no centre text outside `centre.ts` (except structural labels).

### Stage 2: layout and sections
- Use the `frontend-design` skill for execution, inside DESIGN.md. Build all sections from `DESIGN.md` section 3 using config data. Home collection and doctor hours respect their flags.
- Per-test "Book this test" and the general buttons use `whatsapp.ts`.
- Check: build passes; flip `homeCollection` false and the page has no gap or dead link; every visible string comes from config or is a structural label.

### Stage 3: mobile polish and accessibility
- Run the Impeccable audit (report only), apply fixes that stay inside DESIGN.md. Run webapp-testing at 390px and 320px plus an axe check.
- Check at 390px and 320px, no sideways scroll. Tap targets 48px. Focus ring visible. Row buttons work with keyboard. `prefers-reduced-motion` disables all four effects. Contrast AA.

### Stage 4: speed, SEO basics, noindex
- Self-host font, preload it, inline critical CSS if needed, measure Lighthouse mobile (95+). JS under 60 KB gz.
- Meta tags, one H1, heading order, canonical omitted in preview. JSON-LD (MedicalClinic or DiagnosticLab) generated from config and emitted only when `flags.emitSchema` is true.
- Confirm noindex meta and robots.txt Disallow. Run `/security-review` and `npm run check:content`.

### Stage 5: deploy and handoff
- Deploy to an unlisted preview link (Cloudflare Pages or Netlify). Confirm the noindex header/meta on the live URL.
- Deliver: README (how to make a second centre: copy `centre.ts`, swap values, rebuild), checklist, and the 5-line phone demo script.

# DESIGN.md: Diagnostic centre concept site

Unofficial sample used to pitch a local diagnostic centre and clinic. Static Astro site, mobile first (390px), English now, Bengali later. Read this before touching any UI file. Change tokens here first, then in code.

## 1. Design idea

The page should feel like a clean lab requisition sheet, not a SaaS landing page. One memorable thing: **the test list**. Tests are a ruled menu of rows (name, one line, expand for details), not a grid of identical cards. Everything else stays quiet.

Principles:
- A visitor on a phone reaches "Book a test" or "WhatsApp us" within one screen, always.
- Structure carries meaning. Rules and borders separate real groups only (list rows, timings). No decorative dividers.
- Motion answers a tap (expand, press). The only automatic motion is one hero headline reveal on first load.
- Calm over clever. Plain words, sentence case, large tap targets.

## 2. Tokens

### Colour (all AA on their stated backgrounds)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F6F9F9` | page background |
| `--ink` | `#0F2430` | body text, headings |
| `--ink-soft` | `#44606E` | secondary text (4.9:1 on paper) |
| `--primary` | `#0E6B63` | primary button, links, focus ring |
| `--primary-ink` | `#FFFFFF` | text on primary |
| `--tint` | `#E2EFEC` | alternate section background, row hover |
| `--rule` | `#C9DAD7` | 1px lines |
| `--wa` | `#0F7B42` | WhatsApp button only, white text |
| `--sample-bg` / `--sample-ink` | `#FFF1CC` / `#6B4500` | "Sample content" tag only |

Rules: `--wa` appears only on WhatsApp buttons. No gradients, no tinted shadows, pure `--ink` for text, never `#000`.

### Type

- One family, self-hosted variable woff2, Latin subset: **Figtree**. `font-display: swap`, preload the one file.
- Bengali later: add Noto Sans Bengali as a second `@font-face` loaded only when `lang="bn"`. Keep `line-height` tokens generous for it.
- Fallback stack: `system-ui, -apple-system, "Segoe UI", sans-serif`.
- Scale (fluid, clamp):
  - H1 `clamp(2.25rem, 8vw, 3.5rem)`, weight 700, line-height 1.05
  - H2 `clamp(1.5rem, 5vw, 2rem)`, weight 650, line-height 1.15
  - Body 1.0625rem (17px), weight 400, line-height 1.6
  - Small 0.9375rem, weight 450
- Max line length 65ch. Left aligned everywhere. Sentence case. No ALL CAPS labels, no eyebrow above headings, no single accented word in a headline.

### Space, shape, elevation

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72. Section padding 48 on mobile, 72 on desktop.
- Container: 100% minus 20px gutters, max 1080px.
- Radius: 6px for rows/inputs, 10px for buttons, 14px only for the contact panel. Not one radius on everything.
- Shadow: none by default. One soft shadow token only on the sticky header when scrolled.
- Tap targets: minimum 48x48px, 8px gap between neighbours.

## 3. Layout, top to bottom

1. **Header** (sticky, 56px): text wordmark left, "Book a test" button right. Wordmark is plain text from config, no logo.
2. **Hero**: wordmark as H1, one-line tagline, two stacked full-width buttons on mobile (primary "Book a test", green "WhatsApp us"), side by side from 640px. Small line below: "Sample preview. Content is placeholder." Left aligned.
3. **Tests and packages**: ruled list of 6 placeholder rows. Each row: name, one-line description, chevron. Tap expands "What's included" (placeholder bullets). Below the list, 3 package blocks of unequal weight (one wider) with placeholder names. No prices. Section has the "Sample content" tag.
4. **Why choose us**: 4 short plain statements in a 2x2 grid (1 column on mobile) with line icons. Only claims that cannot be false: "Tests and doctor consultations under one roof", "Clear booking by WhatsApp", "Simple, readable layout", "Easy to reach". Edit in config.
5. **Home sample collection**: optional. Rendered only if `flags.homeCollection` is true. Must be removable without leaving a gap or a dead nav link.
6. **Location and timings**: map link button ("Open in Maps", external link, no embedded iframe to protect speed), address, phone as `tel:` link, hours as a 2 column ruled table. All placeholders.
7. **Reviews**: 3 empty slots, each labelled "Review placeholder". No names, no quotes, no stars.
8. **Contact**: one panel, tinted. Notification icon, heading "Request a booking", one line explaining it opens WhatsApp with a ready message, and nothing is stored. Button "Request on WhatsApp". No form fields.
9. **Footer**: contact details, "Concept preview. Not the official website." No newsletter, no social icons unless configured.

Desktop (from 900px): hero keeps left alignment with generous right whitespace; test list and package blocks sit in a 7/5 column split; everything else stays single column inside the container.

## 4. Components

- **Button**: height 52px, radius 10px, weight 600. Primary = `--primary`, WhatsApp = `--wa`, secondary = 1.5px `--primary` outline on paper. Visible focus: 3px `--primary` ring with 2px paper offset. Labels say the action: "Book a test", "WhatsApp us", "Open in Maps", "Request on WhatsApp".
- **Test row**: full-width button element, 64px min height, bottom 1px `--rule`, hover/active `--tint`. `aria-expanded`, `aria-controls`. Chevron rotates 180deg.
- **Sample tag**: small pill, `--sample-bg` / `--sample-ink`, text "Sample content". Sentence case.
- **Icons**: line icons, 1.75px stroke, 24px, `currentColor`. One set only.

## 5. Effects (where each one goes)

| Effect | Where | Rule |
|---|---|---|
| AutoHeight + blur swap | Test row expand | Only effect on test rows. 0.4s easeInOut, `AnimatePresence mode="wait"`. |
| Click (`ring`) | Primary and WhatsApp buttons | `color="currentColor"`, `size={80}`, `duration={400}`. Scoped to each button, never `global`. |
| TextAnimation (`word`) | Hero H1 only | Runs once on load, `viewport once`. Not on any other heading. |
| Notification01 `animateOnHover` | Contact panel icon | Hover devices only. Static on touch. |

Reduced motion: wrap all four in a `prefers-reduced-motion: no-preference` check. With reduced motion, rows expand instantly, no ripple, headline shows immediately, icon static.

No scroll-triggered fade-ups on sections. No hover lift on cards.

## 6. Performance budget

- Target: Lighthouse mobile 95+, LCP under 2.0s on throttled 4G, CLS 0.
- Astro static output. React only as islands: `TestList` (AutoHeight), `Press` wrapper (Click), hero heading (TextAnimation). Use `client:visible` for the first two, `client:load` only for the hero heading.
- Total JS target under 60 KB gzipped. If Lighthouse drops below 95, swap in the zero-JS fallback: `<details>` plus CSS `grid-template-rows: 0fr` to `1fr` transition for rows, CSS `:active` ring for buttons, CSS clip reveal for the H1. Same look, no React.
- One font file, no images in the hero, SVG icons inline, no third party scripts, no embedded map iframe.

## 7. Content and config rules

- Every centre-specific value lives in one file: `src/config/centre.ts` (name, tagline, colours, tests, packages, trust points, address, phone, WhatsApp number, hours, map URL, `flags.homeCollection`, `lang`).
- Colours in config override the token values at build time as CSS variables.
- WhatsApp link: `https://wa.me/<number>?text=<encoded message>`. Default message: "Hello, I'd like to book a test. Name: , Test: , Preferred time: ". Nothing is stored.
- Placeholders always read as placeholders ("Test name 1", "Health package A", "Address line"). Never invent prices, accreditation, doctor names or turnaround times.
- Copy: active voice, sentence case, plain words, no filler, no "Welcome to".

## 8. Accessibility floor

- Semantic landmarks: `header`, `main`, `section` with headings in order, `footer`.
- One H1. Skip link to `main`.
- Visible keyboard focus on every control. Row buttons work with Enter and Space.
- Contrast AA minimum. Do not rely on colour alone for state.
- `lang="en"` on `html`, switchable to `bn`.
- `noindex, nofollow` meta tag and `robots.txt` with `Disallow: /` while this is a preview. Keep both until the centre approves.

## 9. Do not

- No logos, photos, stock illustrations, emoji, gradient text, glass effects.
- No forms, patient data, report portal, login, chatbot.
- No numbered 01/02/03 markers (nothing here is a sequence).
- No eyebrow labels, middle-dot meta strings, trailing arrows on buttons.
- No NABL or any accreditation claim, no star ratings, no fake reviews.

## 10. Stage checks (verify and stop)

- **Stage 1**: config file and structure match section 7. Stop.
- **Stage 2**: all 8 sections render with placeholders, home collection toggles cleanly. Stop.
- **Stage 3**: 390px and 320px checked, tap targets 48px, focus visible, reduced motion works. Stop.
- **Stage 4**: Lighthouse mobile 95+, noindex and robots in place, local business schema validates. Stop.
- **Stage 5**: unlisted preview link works on a phone, checklist delivered.

## 11. Post-Stitch amendments (these override sections above)
- No bottom navigation. Header plus in-page sections only.
- Location and timings includes an optional doctor hours block (`flags.doctorSchedule`): a ruled 3 column list of Doctor name placeholder, Speciality placeholder, Days placeholder, each with a "Book a consultation" WhatsApp link (prefilled with the doctor placeholder).
- Each test row has a "Book this test" link (static `wa.me` href with the test name in the message) inside the expanded area.
- Bengali toggle is deferred. Keep strings as `Tx` objects in config so `bn` can be added later. Noto Sans Bengali is loaded only when `lang="bn"`.
- Tokens in section 2 are final. Stitch's extra Material-style colour names are not used.
- Design skills (frontend-design, Impeccable, ui-ux-pro-max, 21st) work inside this file. They cannot change tokens, fonts, layout concept or the effect list. Only the four effects in section 5 exist; ignore any skill suggestion for more motion (no parallax, no scroll-triggered section fades, no hover lifts).

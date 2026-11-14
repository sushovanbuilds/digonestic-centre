---
name: Clinical Requisition
colors:
  surface: '#f5faff'
  surface-dim: '#c8dded'
  surface-bright: '#f5faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eaf5ff'
  surface-container: '#def0ff'
  surface-container-high: '#d6ebfc'
  surface-container-highest: '#d0e5f6'
  on-surface: '#081e29'
  on-surface-variant: '#3f4947'
  inverse-surface: '#1f333f'
  inverse-on-surface: '#e4f3ff'
  outline: '#6f7977'
  outline-variant: '#bec9c6'
  surface-tint: '#0b6a62'
  primary: '#00514b'
  on-primary: '#ffffff'
  primary-container: '#0e6b63'
  on-primary-container: '#9ae8de'
  inverse-primary: '#86d4ca'
  secondary: '#55615f'
  on-secondary: '#ffffff'
  secondary-container: '#d8e5e2'
  on-secondary-container: '#5b6765'
  tertiary: '#2f4b59'
  on-tertiary: '#ffffff'
  tertiary-container: '#476371'
  on-tertiary-container: '#c1deef'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f1e6'
  primary-fixed-dim: '#86d4ca'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#d8e5e2'
  secondary-fixed-dim: '#bcc9c6'
  on-secondary-fixed: '#121e1c'
  on-secondary-fixed-variant: '#3d4947'
  tertiary-fixed: '#c9e7f8'
  tertiary-fixed-dim: '#adcbdb'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#2e4a58'
  background: '#f5faff'
  on-background: '#081e29'
  surface-variant: '#d0e5f6'
  paper: '#F6F9F9'
  ink: '#0F2430'
  ink-soft: '#44606E'
  primary-ink: '#FFFFFF'
  rule: '#C9DAD7'
  wa: '#0F7B42'
  sample-bg: '#FFF1CC'
  sample-ink: '#6B4500'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 27px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
  space-4xl: 4.5rem
---

## Brand & Style

The design system establishes a clinical, reassuring, and utterly unpretentious digital environment modeled after physical diagnostic requisitions and paper records. It rejects the generic sheen of venture-backed SaaS platforms, opting instead for quiet competence, high-contrast readability, and respectful restraint. The UI is built specifically for patients and families navigating diagnostic appointments—often in moments of vulnerability or administrative hurry.

The personality is characterized by four pillars:
- **Quiet Authority:** Zero decorative clutter, marketing fluff, or manufactured urgency. The interface relies on pure typography, deliberate white space, and crisp structural dividers.
- **Immediate Utility:** Critical paths (booking a test or reaching out via WhatsApp) are accessible within a single thumb stroke on mobile (390px viewport baseline).
- **Physicality and Legibility:** Crisp 1px rules delineate rows in place of bloated drop-shadow cards, mirroring high-grade medical stationery.
- **Absolute Transparency:** No synthetic testimonials, invented star ratings, or obscured pricing. All copy adheres to sentence case, direct action verbs, and clear placeholder structures.

## Colors

The palette is tuned strictly for WCAG AA compliance across all defined pairings, utilizing deep clinical teal, muted paper whites, and deep maritime slate rather than stark `#000000`.

- **Primary (`#0E6B63`):** Deep surgical teal used for interactive callouts, primary buttons, text anchors, and active focus boundaries. It delivers a solid contrast ratio of > 4.5:1 against the paper background.
- **Secondary / Tint (`#E2EFEC`):** Soft duck-egg wash used for alternating section blocks, row hover surfaces, and container fills.
- **Tertiary / Soft Ink (`#44606E`):** Mid-tone slate providing minimum 4.9:1 contrast against paper for metadata, helper notes, and secondary descriptions.
- **Neutral / Ink (`#0F2430`):** Near-black maritime ink applied to all primary typographic layers and headlines.
- **WhatsApp Accent (`#0F7B42`):** Reserved exclusively for WhatsApp actions paired with white text (`#FFFFFF`). Never used for generic UI highlights.
- **Sample Pill (`#FFF1CC` & `#6B4500`):** Amber tag palette reserved strictly for mock data flags to signal concept/preview fidelity clearly to the user.

## Typography

Typography prioritizes fast human parsing without visual fatigue. The primary font is clean, humanized grotesque sans-serif matching modern legibility requirements.

- **Typesetting Standard:** Sentence case is mandatory across all elements (buttons, labels, badges, table headers). Never employ ALL CAPS, pseudo-eyebrows, or accented gradient words.
- **Rhythm & Line Length:** Body copy strictly caps at `65ch` max line length to maintain reading cadence. Text alignments remain flush left across all breakpoints.
- **Bengali Localization Support:** When switching to Bengali (`lang="bn"`), fallback line-height scales expand by 15% globally to accommodate complex glyph stackings without truncation.

## Layout & Spacing

The layout model relies on a mobile-first column container capped at a maximum width of `1080px`.

- **Mobile Viewport (320px–640px):** Single vertical stack with `1.25rem` (20px) outer margins. Vertical section intervals sit at `3rem` (48px). Tap areas enforce a minimum bounding box of 48x48px with a mandatory `8px` clearance buffer.
- **Tablet / Phablet (640px–899px):** Hero and contact calls-to-action transition from vertical block stacks to horizontal adjacent pairs. Margins remain fluid.
- **Desktop (900px+):** Sections expand into an asymmetric 7/5 column split (e.g., test catalog taking 7 columns; package highlights taking 5 columns). Vertical section intervals increase to `4.5rem` (72px). Hero copy anchors left, allowing deliberate open space to the right.

## Elevation & Depth

Visual hierarchy is maintained without heavy dropshadows, pseudo-3D bevels, or frosted glassmorphism:

- **Flat Paper Paradigm:** Surfaces remain flat upon `--paper` (`#F6F9F9`). Section containers shift tonal depth solely through `--tint` (`#E2EFEC`) backdrops.
- **Crisp Structural Rules:** Visual divisions between tests, working hours, and lists are maintained exclusively using 1px solid hairline rules (`--rule`, `#C9DAD7`).
- **Scrolled Sticky Header Shadow:** Shadows are disallowed across cards and buttons. The solitary exception is the sticky header when scrolled: `0 2px 8px -2px rgba(15, 36, 48, 0.08)`.
- **Focus Rings:** Accessibility indicators feature a high-visibility `3px` solid stroke of `--primary` offset by a `2px` `--paper` boundary.

## Shapes

The design system employs deliberate, purposeful corner radiuses rather than uniform rounding across all elements:

- **Interactive Rows & Form Inputs:** Crisp `6px` radius (`rounded-sm`).
- **Buttons & Action Controls:** Confident `10px` radius (`rounded-md`).
- **Special Purpose Containers (Booking Panel):** Distinctive `14px` radius (`rounded-lg`).
- **Indicator Pills (Sample Tags):** Fully rounded pill geometry (`9999px`).

## Components

### Buttons
- **Height & Dimensions:** Min-height `52px` to clear the 48px accessibility minimum effortlessly. Radius is `10px`. Font weight is `600`.
- **Primary Variant:** Solid `--primary` background with `--primary-ink` (`#FFFFFF`) text.
- **WhatsApp Variant:** Solid `--wa` (`#0F7B42`) background with white text.
- **Secondary / Outline:** Transparent background with a `1.5px` solid `--primary` border and `--primary` text.
- **Micro-Interaction:** Scoped ripple expansion (`currentColor`, 80px radius, 400ms duration) on click, skipped under `prefers-reduced-motion`.

### Test List (Ruled Menu Rows)
- **Geometry:** Full-width interactive trigger with min-height `64px` and a bottom 1px border using `--rule`. Zero card borders.
- **States:** Hover and focus states swap background to `--tint`.
- **Accordion Mechanism:** Row contains test name, concise description, and an inline SVG chevron indicator rotating 180° when open.
- **Expanded Panel:** Reveals bulleted inclusions and requirements via smooth height transition (`0.4s easeInOut`) with instant toggle fallback for reduced motion.

### Sample Content Tag
- **Structure:** Compact pill badge with `padding: 2px 10px`.
- **Colors:** Background `--sample-bg` (`#FFF1CC`), text `--sample-ink` (`#6B4500`).
- **Typography:** `label-sm` (13px), sentence case: "Sample content".

### Timetable & Contact Panel
- **Hours Table:** 2-column ruled ledger format. Minimal 1px horizontal borders; days left, timings right.
- **Contact Panel:** Single elevated container with `--tint` surface, `14px` radius, and 24px inner padding. Features direct "Request on WhatsApp" call-to-action without arbitrary web form fields.

### Line Icons
- **Specification:** Monoline SVG icons with `1.75px` stroke width, sized strictly at `24x24px`.
- **Color:** Always mapped to `currentColor`. No multi-tone fills or decorative badges.
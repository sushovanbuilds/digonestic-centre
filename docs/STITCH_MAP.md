# STITCH_MAP.md

Stitch export is at `reference/stitch/`. It is a visual reference. Do not copy its HTML. Rebuild with Astro and `DESIGN.md` tokens. Open only the one screen you need for the current section.

## Screen to component
| Stitch folder | Use for |
|---|---|
| diagnostic_centre_concept_mobile (screen.png) | overall mobile layout, Header, Hero, all sections |
| diagnostic_centre_concept_desktop (screen.png) | desktop layout, 7/5 split for tests and packages |
| diagnostic_centre_expanded_test_state* | TestList open state, "What's included" |
| diagnostic_centre_whatsapp_parameter_prefilling_mobile | per-test "Book this test" prefilled message |
| diagnostic_centre_doctor_consultation_whatsapp_prefill_mobile | doctor row "Book a consultation" prefill |
| diagnostic_centre_bengali_timings_doctor_schedule_* | DoctorHours block layout (names stay placeholders) |
| diagnostic_centre_bengali_*, live_language_switcher_* | deferred (Bengali is post-v1) |
| clinical_requisition/DESIGN.md | Stitch's own token export; `DESIGN.md` at root wins |

## Strip list (Stitch output breaks the rules here)
- Bottom nav bar and its "Records" tab. Remove entirely.
- "Primary recommendation" badge on Package A.
- Parameter counts ("Includes 64/38/22 parameters").
- Home collection claims: cold-chain, temperature monitored, vacuum-sealed, trained phlebotomists. Replace with a neutral placeholder line.
- "Verified clinic visitor records" in reviews. Replace with "Review placeholder".
- Real-looking hours (e.g. 07:00 to 20:30, "Open early morning"). Replace with "Hours placeholder".
- Trust-point wording that claims services (phlebotomy, imaging, reports). Use CONTENT_RULES trust points.
- ALL-CAPS labels ("Comprehensive bundles", "Physical address", "Review placeholder"). Use sentence case.
- Footer name "Diagnostic Centre Requisition & Information". Use `[CENTRE NAME]` from config.
- `cdn.tailwindcss.com`, Google Fonts links, Material Symbols font. Replace with tokens.css, self-hosted Figtree, inline SVG.

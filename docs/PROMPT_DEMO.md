# PROMPT_DEMO.md

Copy this file to `docs/PROMPT_DEMO.md` in the repo, then tell the agent:
"Read AGENTS.md, HANDOFF.md and docs/PROMPT_DEMO.md. Do every step. Stop at the end."

---

Branch `stage-2c-demo-data`. Surgical patches only. Evidence required: screenshots of the DEMO build, not the placeholder build.

## 0. Fix these first (seen in the current screenshot)
- Hero quick-info card: remove the green "Open" status badge and the "Desk + WhatsApp" row (a live "Open" status is an invented claim). Card shows only: hours, address lines, phone, Open in Maps.
- Test list header row: "Test" and "Details" in sentence case, no uppercase transform.
- Why choose us: the description must not repeat the title. Use these neutral pairs (config-driven, with bn):
  1. Tests and doctor consultations under one roof / Book a test or a doctor visit in the same place.
  2. Booking requests by WhatsApp / Send your request on WhatsApp and the centre replies.
  3. Simple, readable layout / Clear pages that are easy to read on a phone.
  4. Easy to find / Address, phone and map link in one place.
- Working hours card: height fits its content (no tall empty block); render every row from config.hours.
- astro.config: set `devToolbar: { enabled: false }` so screenshots are clean.

## 1. Rules
AGENTS.md (add under Hard rules): "Demo mode (PUBLIC_DEMO=1) may use fictional doctor names, test names, sample prices, demo hours and tailored WhatsApp messages. Still never: accreditation, degrees/qualifications/registration numbers, experience years, turnaround times, reviews/ratings/testimonials, 'verified/certified/leading', real logos/photos. Every surface with demo content shows a visible 'Demo data' label. The non-demo build must contain no demo data."
HANDOFF.md: record demo mode.

## 2. Structure
- Keep `src/config/centre.ts` untouched (placeholders).
- Add `src/config/centre.demo.ts`, same CentreConfig type, plus optional fields: tests[].price, tests[].prep, packages[].price, packages[].includes (string array of test names), doctors[].days, waTemplates.package, waTemplates.home, flags.showPrices.
- Add `src/config/index.ts` exporting the active config: demo if `import.meta.env.PUBLIC_DEMO === '1'`, else `centre.ts`. Every component imports config from `src/config/index.ts` only.
- package.json scripts: `"dev:demo": "PUBLIC_DEMO=1 astro dev"`, `"build:demo": "PUBLIC_DEMO=1 astro build --outDir dist-demo"`.
- Top of `centre.demo.ts`: a commented REAL block with name, areaLabel, address lines, phone, whatsapp (digits with country code), mapUrl, kept as placeholders (name "[CENTRE NAME]", whatsapp "910000000000"). The owner edits these 5 values.
- `<html data-demo="1">` only in demo builds.

## 3. Demo data (write English and Bengali for everything; keep CBC, HbA1c, TSH, LFT, KFT in English)
Tests (id, name, one-line blurb, includes, prep, price; prices are sample):
- cbc: Complete Blood Count (CBC); "Basic overview of blood health"; Haemoglobin, RBC count, WBC count, Platelet count; prep "No special preparation usually needed. Confirm with the centre."; ₹350
- lipid: Lipid Profile; "Cholesterol and related fats"; Total cholesterol, HDL, LDL, Triglycerides; "Fasting is often advised. Confirm with the centre."; ₹600
- hba1c: HbA1c; "Average blood sugar over recent months"; HbA1c; "Confirm with the centre."; ₹550
- fbs: Blood Sugar (Fasting); "Sugar level after fasting"; Fasting blood glucose; "Fasting is required. The centre will confirm timing."; ₹120
- thyroid: Thyroid Profile (T3, T4, TSH); "Thyroid function overview"; T3, T4, TSH; "Confirm medicine timing with your doctor."; ₹700
- lft: Liver Function Test (LFT); "Liver health markers"; Bilirubin, SGOT, SGPT, Alkaline phosphatase; "Confirm with the centre."; ₹650
- kft: Kidney Function Test (KFT); "Kidney health markers"; Urea, Creatinine, Uric acid; "Confirm with the centre."; ₹650
- urine: Urine Routine; "Basic urine examination"; Physical, Chemical and Microscopic examination; "Collection instructions will be shared by the centre."; ₹150

Packages (price sample; includes = test names):
- Basic Health Check: CBC, Blood Sugar (Fasting), Lipid Profile, Urine Routine; ₹1,099 (package A, highlighted)
- Diabetes Care Panel: HbA1c, Blood Sugar (Fasting), KFT, Urine Routine; ₹1,199
- Full Body Checkup: CBC, Lipid Profile, LFT, KFT, Thyroid Profile, HbA1c, Urine Routine; ₹2,499

Doctors (name, speciality, days and time; NO degrees, NO experience):
- Dr. Rina Banerjee, General Physician, Mon, Wed, Fri · 5:00 to 8:00 PM
- Dr. Soumen Pal, Diabetologist, Tue, Thu · 4:00 to 7:00 PM
- Dr. Anindita Das, Gynaecologist, Mon, Thu, Sat · 11:00 AM to 2:00 PM
- Dr. Kaushik Mondal, Cardiologist, Sat · 10:00 AM to 1:00 PM
- Dr. Mitali Saha, Paediatrician, Tue, Fri · 5:00 to 7:30 PM

Hours: Mon to Sat 7:00 AM to 8:00 PM; Sunday 7:00 AM to 1:00 PM.
Tagline unchanged. Home collection (flag on): "Home sample collection on request. Send your area and preferred time on WhatsApp." Reviews: 3 "Review placeholder" slots, unchanged. flags: homeCollection true, doctorSchedule true, showPrices true.

## 4. WhatsApp templates (en and bn; `\n` line breaks; URL-encode in whatsapp.ts)
- general: "Hello, I'd like to book a test.\nName: \nTest or package: \nPreferred date and time: "
- test: "Hello, I'd like to book: {test}.\nName: \nPreferred date and time: "
- package: "Hello, I'd like to book the {package}.\nName: \nPreferred date and time: "
- doctor: "Hello, I'd like a consultation with {doctor} ({speciality}).\nName: \nPreferred day: {days}\nPreferred time: "
- home: "Hello, I'd like to request home sample collection.\nName: \nArea: \nTest or package: \nPreferred date and time: "

Wire: each test row's Book this test on WhatsApp = test template; each package = package template; each doctor row = doctor template; Home collection button = home template; header, hero and contact buttons = general. Ask for nothing medical or sensitive in any message.

## 5. UI (demo and showPrices only)
- Test row: price right-aligned in the row ("₹350") and in the open area. Package cards: price plus a small "includes" line of test names. One "Sample prices" pill next to the section heading, not per row.
- Doctor rows: name, speciality, days and time, Book consultation.
- "Demo data" pill (same style as the Sample content pill) on: hero note ("Demo data. Not real tests, doctors or prices."), the doctors block, the prices heading, and the footer line. In non-demo builds none of this renders.
- Bengali: pill "ডেমো তথ্য"; hero note "ডেমো তথ্য। আসল পরীক্ষা, ডাক্তার বা মূল্য নয়।"

## 6. Checks (patch scripts/check-content.mjs minimally)
- `dist/` (normal build): fail if any html contains `data-demo`.
- `dist-demo/`: fail if any html lacks `data-demo="1"` or the "Demo data" / "ডেমো তথ্য" label; fail if any wa.me href has an empty `text=` parameter.
- Banned-term rules still apply to `src/`, including `centre.demo.ts`.
- Add npm script `check:demo`.

## 7. Verify with evidence
- Run build, build:demo, astro check, check:content, check:demo. No console errors, no horizontal scroll.
- Screenshots at 390 and 1280 of the demo build (`/` and `/bn/`) to `docs/shots/demo-*.png`. List 3 issues you see and fix them (max 2 loops).
- Print the decoded wa.me message for one test, one package, one doctor and the home button, in en and bn.
- Reply in 10 lines max. Update HANDOFF.md, commit, STOP.

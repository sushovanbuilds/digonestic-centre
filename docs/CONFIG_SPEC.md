# CONFIG_SPEC.md

`src/config/centre.ts` is the single source of centre-specific content. A second centre = copy this file, change values, rebuild.

```ts
export type Lang = 'en' | 'bn';
export interface Tx { en: string; bn?: string }

export interface CentreConfig {
  lang: Lang;
  preview: boolean;                 // true: noindex, robots disallow, "Concept preview" notes
  name: string;                     // "[CENTRE NAME]"
  tagline: Tx;
  theme: { primary: string; ink: string; paper: string; tint: string; rule: string; wa: string };
  contact: { phone: string; whatsapp: string; email?: string }; // whatsapp: digits only with country code, no +
  location: { areaLabel: string; addressLines: string[]; mapUrl: string };
  hours: { label: Tx; value: string }[];
  doctors: { name: string; speciality: string; days: string }[]; // placeholders until real
  flags: { homeCollection: boolean; doctorSchedule: boolean; showReviews: boolean; emitSchema: boolean };
  tests: { id: string; name: Tx; blurb: Tx; includes: Tx[] }[];
  packages: { id: string; name: Tx; blurb: Tx; wide?: boolean }[];
  why: { icon: 'building' | 'chat' | 'list' | 'pin'; title: Tx; text: Tx }[];
  homeCollection?: { title: Tx; text: Tx };
  reviewSlots: number;
  waTemplates: { general: Tx; test: Tx; doctor: Tx };   // use {test} and {doctor} tokens
}
```

## Placeholder starter values
- name: `[CENTRE NAME]`; tagline: "Tests and doctor consultations in one place." (placeholder tagline, edit freely)
- theme: values from DESIGN.md section 2
- contact.phone: `+91 00000 00000`; whatsapp: `910000000000`
- location: areaLabel `[AREA, TOWN]`, addressLines `["Address line 1","Address line 2"]`, mapUrl `https://maps.google.com`
- hours: `[{label:"Hours", value:"Hours placeholder"}]` (never real-looking times in the sample)
- doctors: 3 rows: `Doctor name placeholder / Speciality placeholder / Days placeholder`
- tests: 6 rows `Test name 1..6`, blurb `Short description placeholder`, includes 3 bullets `Included item placeholder`
- packages: `Health package A/B/C`, blurb `Package description placeholder`, A has `wide: true`
- why: use the 4 statements in DESIGN.md section 3.4
- waTemplates.general: "Hello, I'd like to book a test. Name: , Test: , Preferred time: "
- waTemplates.test: "Hello, I'd like to book: {test}. Name: , Preferred time: "
- waTemplates.doctor: "Hello, I'd like a doctor consultation. Doctor: {doctor}. Name: , Preferred time: "

## Rules
- Components read config only. No fallback strings hardcoded in components except structural labels (section headings, button labels) kept in one `ui` object inside `types.ts` or `centre.ts` so `bn` can be added later.
- URL-encode WhatsApp text in `whatsapp.ts`. Strip non-digits from the number.

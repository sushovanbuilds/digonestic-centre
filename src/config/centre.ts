import type { CentreConfig, UIStrings } from './types';

export const centre: CentreConfig = {
  lang: 'en',
  preview: true,
  name: '[CENTRE NAME]',
  tagline: {
    en: 'Tests and doctor consultations in one place.',
  },
  theme: {
    primary: '#0f766e',
    ink: '#0f172a',
    paper: '#ffffff',
    tint: '#f0fdfa',
    rule: '#e2e8f0',
    wa: '#25D366',
  },
  contact: {
    phone: '+91 00000 00000',
    whatsapp: '910000000000',
  },
  location: {
    areaLabel: '[AREA, TOWN]',
    addressLines: ['Address line 1', 'Address line 2'],
    mapUrl: 'https://maps.google.com',
  },
  hours: [
    {
      label: { en: 'Hours' },
      value: 'Hours placeholder',
    },
  ],
  doctors: [
    {
      name: 'Doctor name placeholder 1',
      speciality: 'Speciality placeholder',
      days: 'Days placeholder',
    },
    {
      name: 'Doctor name placeholder 2',
      speciality: 'Speciality placeholder',
      days: 'Days placeholder',
    },
    {
      name: 'Doctor name placeholder 3',
      speciality: 'Speciality placeholder',
      days: 'Days placeholder',
    },
  ],
  flags: {
    homeCollection: true,
    doctorSchedule: true,
    showReviews: false,
    emitSchema: false,
  },
  tests: [
    {
      id: 'test-1',
      name: { en: 'Test name 1' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
    {
      id: 'test-2',
      name: { en: 'Test name 2' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
    {
      id: 'test-3',
      name: { en: 'Test name 3' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
    {
      id: 'test-4',
      name: { en: 'Test name 4' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
    {
      id: 'test-5',
      name: { en: 'Test name 5' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
    {
      id: 'test-6',
      name: { en: 'Test name 6' },
      blurb: { en: 'Short description placeholder' },
      includes: [
        { en: 'Included item placeholder 1' },
        { en: 'Included item placeholder 2' },
        { en: 'Included item placeholder 3' },
      ],
    },
  ],
  packages: [
    {
      id: 'package-a',
      name: { en: 'Health package A' },
      blurb: { en: 'Package description placeholder' },
      wide: true,
    },
    {
      id: 'package-b',
      name: { en: 'Health package B' },
      blurb: { en: 'Package description placeholder' },
    },
    {
      id: 'package-c',
      name: { en: 'Health package C' },
      blurb: { en: 'Package description placeholder' },
    },
  ],
  why: [
    {
      icon: 'building',
      title: { en: 'Tests and doctor consultations' },
      text: { en: 'Tests and doctor consultations under one roof' },
    },
    {
      icon: 'chat',
      title: { en: 'WhatsApp booking' },
      text: { en: 'Booking requests by WhatsApp' },
    },
    {
      icon: 'list',
      title: { en: 'Simple layout' },
      text: { en: 'Simple, readable layout' },
    },
    {
      icon: 'pin',
      title: { en: 'Easy to find' },
      text: { en: 'Easy to find with address and map link' },
    },
  ],
  homeCollection: {
    title: { en: 'Home collection' },
    text: { en: 'Sample home collection text placeholder.' },
  },
  reviewSlots: 3,
  waTemplates: {
    general: {
      en: "Hello, I'd like to book a test. Name: , Test: , Preferred time: ",
    },
    test: {
      en: "Hello, I'd like to book: {test}. Name: , Preferred time: ",
    },
    doctor: {
      en: "Hello, I'd like a doctor consultation. Doctor: {doctor}. Name: , Preferred time: ",
    },
  },
};

export const ui: UIStrings = {
  bookTest: { en: 'Book a test' },
  whatsappUs: { en: 'WhatsApp us' },
  openMaps: { en: 'Open in Maps' },
  requestWhatsApp: { en: 'Request on WhatsApp' },
  testsHeading: { en: 'Tests and packages' },
  packagesHeading: { en: 'Health packages' },
  whyHeading: { en: 'Why choose us' },
  doctorsHeading: { en: 'Doctor consultations' },
  locationHeading: { en: 'Location and timings' },
  reviewsHeading: { en: 'Patient feedback' },
  sampleNotice: { en: 'Sample content' },
  previewNotice: { en: 'Concept preview. Not the official website.' },
};

import type { Lang, Tx } from './types';

export function t(tx: Tx | undefined | null, lang: Lang = 'en'): string {
  if (!tx) return '';
  return tx[lang] || tx.en || '';
}

export const ui = {
  nav: {
    tests: { en: 'Tests', bn: 'টেস্ট' },
    packages: { en: 'Packages', bn: 'প্যাকেজ' },
    whyUs: { en: 'Why us', bn: 'সুবিধাসমূহ' },
    location: { en: 'Location', bn: 'ঠিকানা' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
  },
  bookTest: { en: 'Book a test', bn: 'টেস্ট বুকিং' },
  whatsappUs: { en: 'WhatsApp us', bn: 'WhatsApp করুন' },
  conceptPreview: { en: 'Concept preview', bn: 'কনসেপ্ট প্রিভিউ' },
  heroSampleNote: { en: 'Sample preview. Content is placeholder.', bn: 'নমুনা প্রিভিউ। বিষয়বস্তু শুধু উদাহরণ।' },
  testsAndPackages: { en: 'Tests and packages', bn: 'টেস্ট ও প্যাকেজ' },
  healthPackages: { en: 'Health packages', bn: 'হেলথ প্যাকেজ' },
  sampleContent: { en: 'Sample content', bn: 'নমুনা বিষয়বস্তু' },
  test: { en: 'Test', bn: 'টেস্ট' },
  details: { en: 'Details', bn: 'বিবরণ' },
  whatsIncluded: { en: "What's included", bn: 'যা অন্তর্ভুক্ত' },
  preparation: { en: 'Preparation', bn: 'প্রস্তুতি' },
  prepPlaceholder: { en: 'Preparation note placeholder.', bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।' },
  bookTestWhatsApp: { en: 'Book this test on WhatsApp', bn: 'WhatsApp-এ টেস্ট বুক করুন' },
  whyChooseUs: { en: 'Why choose us', bn: 'কেন আমাদের বেছে নেবেন' },
  homeCollection: { en: 'Home sample collection', bn: 'বাড়িতে নমুনা সংগ্রহ' },
  locationAndTimings: { en: 'Location and timings', bn: 'ঠিকানা ও সময়সূচি' },
  openMaps: { en: 'Open in Maps', bn: 'Google Maps-এ দেখুন' },
  hours: { en: 'Hours', bn: 'সময়' },
  workingHours: { en: 'Working hours', bn: 'কাজের সময়সূচি' },
  doctorConsultations: { en: 'Doctor consultations', bn: 'ডাক্তারের পরামর্শ' },
  bookConsultation: { en: 'Book consultation', bn: 'পরামর্শ বুকিং' },
  reviews: { en: 'Reviews', bn: 'রিভিউ' },
  reviewPlaceholder: { en: 'Review placeholder', bn: 'রিভিউ প্লেসহোল্ডার' },
  requestBooking: { en: 'Request a booking', bn: 'বুকিংয়ের অনুরোধ করুন' },
  requestOnWhatsApp: { en: 'Request on WhatsApp', bn: 'WhatsApp-এ অনুরোধ করুন' },
  bookingNotice: {
    en: 'Opens WhatsApp with a ready message. Nothing is stored here.',
    bn: 'WhatsApp-এ একটি তৈরি মেসেজ খুলবে। এখানে কোনো তথ্য সংরক্ষণ করা হয় না।',
  },
  footerNotice: {
    en: 'Concept preview. Not the official website.',
    bn: 'কনসেপ্ট প্রিভিউ। এটি অফিসিয়াল ওয়েবসাইট নয়।',
  },
  skipToContent: { en: 'Skip to content', bn: 'মূল অংশে যান' },
  demoData: { en: 'Demo data', bn: 'ডেমো তথ্য' },
  demoHeroNote: { en: 'Demo data. Not real tests, doctors or prices.', bn: 'ডেমো তথ্য। আসল পরীক্ষা, ডাক্তার বা মূল্য নয়।' },
  samplePrices: { en: 'Sample prices', bn: 'নমুনা মূল্য' },
  bookPackage: { en: 'Book this package', bn: 'প্যাকেজ বুকিং করুন' },
  packageIncludes: { en: 'Includes', bn: 'অন্তর্ভুক্ত টেস্ট' },
  call: { en: 'Call', bn: 'Call করুন' },
  mapPlaceholder: { en: 'Map placeholder', bn: 'ম্যাপের স্থান' },
  quickInfo: {
    title: { en: 'Centre Information', bn: 'সেন্টারের তথ্য' },
    hours: { en: 'Hours', bn: 'সময়' },
    address: { en: 'Address', bn: 'ঠিকানা' },
    phone: { en: 'Phone', bn: 'ফোন' },
  },
} as const;

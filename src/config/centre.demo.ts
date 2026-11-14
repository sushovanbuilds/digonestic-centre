import type { CentreConfig } from './types';

/* ==========================================================================
   REAL CENTRE DETAILS BLOCK
   Edit these 5 fields with genuine clinic details:
   ========================================================================== */
const REAL_CENTRE = {
  name: '[CENTRE NAME]',
  whatsapp: '910000000000', // Digits only with country code, e.g. 919876543210
  phone: '+91 00000 00000',
  areaLabel: {
    en: '[AREA, TOWN]',
    bn: '[এলাকা, শহর]',
  },
  addressLines: [
    { en: 'Address line 1', bn: 'ঠিকানার লাইন ১' },
    { en: 'Address line 2', bn: 'ঠিকানার লাইন ২' },
  ],
  mapUrl: 'https://maps.google.com',
};
/* ========================================================================== */

export const centreDemo: CentreConfig = {
  lang: 'en',
  preview: true,
  siteUrl: 'https://example.com',
  name: REAL_CENTRE.name,
  tagline: {
    en: 'Tests and doctor consultations in one place.',
    bn: 'এক ছাদের নিচে ডায়াগনস্টিক পরীক্ষা ও বিশেষজ্ঞ চিকিৎসকের পরামর্শ।',
  },
  theme: {
    primary: '#0E6B63',
    ink: '#0F2430',
    paper: '#F6F9F9',
    tint: '#E2EFEC',
    rule: '#C9DAD7',
    wa: '#0F7B42',
  },
  contact: {
    phone: REAL_CENTRE.phone,
    whatsapp: REAL_CENTRE.whatsapp,
  },
  location: {
    areaLabel: REAL_CENTRE.areaLabel,
    addressLines: REAL_CENTRE.addressLines,
    mapUrl: REAL_CENTRE.mapUrl,
  },
  hours: [
    {
      label: { en: 'Mon to Sat', bn: 'সোম থেকে শনি' },
      value: { en: '7:00 AM to 8:00 PM', bn: 'সকাল ৭:০০ - রাত ৮:০০' },
    },
    {
      label: { en: 'Sunday', bn: 'রবিবার' },
      value: { en: '7:00 AM to 1:00 PM', bn: 'সকাল ৭:০০ - দুপুর ১:০০' },
    },
  ],
  doctors: [
    {
      name: { en: 'Dr. Rina Banerjee', bn: 'ডা. রীনা ব্যানার্জী' },
      speciality: { en: 'General Physician', bn: 'জেনারেল ফিজিশিয়ান' },
      days: { en: 'Mon, Wed, Fri · 5:00 to 8:00 PM', bn: 'সোম, বুধ, শুক্র · বিকাল ৫:০০ - রাত ৮:০০' },
    },
    {
      name: { en: 'Dr. Soumen Pal', bn: 'ডা. সৌমেন পাল' },
      speciality: { en: 'Diabetologist', bn: 'ডায়াবেটোলজিস্ট' },
      days: { en: 'Tue, Thu · 4:00 to 7:00 PM', bn: 'মঙ্গল, বৃহস্পতি · বিকাল ৪:০০ - সন্ধ্যা ৭:০০' },
    },
    {
      name: { en: 'Dr. Anindita Das', bn: 'ডা. অনিন্দিতা দাস' },
      speciality: { en: 'Gynaecologist', bn: 'স্ত্রীরোগ বিশেষজ্ঞ' },
      days: { en: 'Mon, Thu, Sat · 11:00 AM to 2:00 PM', bn: 'সোম, বৃহস্পতি, শনি · সকাল ১১:০০ - দুপুর ২:০০' },
    },
    {
      name: { en: 'Dr. Kaushik Mondal', bn: 'ডা. কৌশিক মণ্ডল' },
      speciality: { en: 'Cardiologist', bn: 'হৃদরোগ বিশেষজ্ঞ' },
      days: { en: 'Sat · 10:00 AM to 1:00 PM', bn: 'শনি · সকাল ১০:০০ - দুপুর ১:০০' },
    },
    {
      name: { en: 'Dr. Mitali Saha', bn: 'ডা. মিতালী সাহা' },
      speciality: { en: 'Paediatrician', bn: 'শিশু বিশেষজ্ঞ' },
      days: { en: 'Tue, Fri · 5:00 to 7:30 PM', bn: 'মঙ্গল, শুক্র · বিকাল ৫:০০ - সন্ধ্যা ৭:৩০' },
    },
  ],
  flags: {
    homeCollection: true,
    doctorSchedule: true,
    showReviews: false,
    emitSchema: false,
    showPrices: true,
    isDemo: true,
  },
  tests: [
    {
      id: 'cbc',
      name: { en: 'Complete Blood Count (CBC)', bn: 'সম্পূর্ণ রক্ত পরীক্ষা (CBC)' },
      blurb: { en: 'Basic overview of blood health', bn: 'রক্তের সাধারণ স্বাস্থ্য পরীক্ষা' },
      price: '₹350',
      includes: [
        { en: 'Haemoglobin', bn: 'হিমোগ্লোবিন' },
        { en: 'RBC count', bn: 'RBC কাউন্ট' },
        { en: 'WBC count', bn: 'WBC কাউন্ট' },
        { en: 'Platelet count', bn: 'প্লেটলেট কাউন্ট' },
      ],
      prep: {
        en: 'No special preparation usually needed. Confirm with the centre.',
        bn: 'সাধারণত বিশেষ কোনো প্রস্তুতির প্রয়োজন নেই। সেন্টারের সাথে কথা বলে নিশ্চিত করুন।',
      },
    },
    {
      id: 'lipid',
      name: { en: 'Lipid Profile', bn: 'লিপিড প্রোফাইল' },
      blurb: { en: 'Cholesterol and related fats', bn: 'কোলেস্টেরল ও রক্তে চর্বির মাত্রা' },
      price: '₹600',
      includes: [
        { en: 'Total cholesterol', bn: 'মোট কোলেস্টেরল' },
        { en: 'HDL', bn: 'HDL' },
        { en: 'LDL', bn: 'LDL' },
        { en: 'Triglycerides', bn: 'ট্রাইগ্লিসারাইড' },
      ],
      prep: {
        en: 'Fasting is often advised. Confirm with the centre.',
        bn: 'উপবাস বা খালি পেটে থাকার পরামর্শ দেওয়া হয়। সেন্টারের সাথে নিশ্চিত করুন।',
      },
    },
    {
      id: 'hba1c',
      name: { en: 'HbA1c', bn: 'HbA1c' },
      blurb: { en: 'Average blood sugar over recent months', bn: 'গত কয়েক মাসের গড় রক্তে শর্করা' },
      price: '₹550',
      includes: [
        { en: 'HbA1c', bn: 'HbA1c' },
      ],
      prep: {
        en: 'Confirm with the centre.',
        bn: 'সেন্টারের সাথে কথা বলে নিশ্চিত করুন।',
      },
    },
    {
      id: 'fbs',
      name: { en: 'Blood Sugar (Fasting)', bn: 'রক্তে শর্করা (খালি পেটে)' },
      blurb: { en: 'Sugar level after fasting', bn: 'খালি পেটে রক্তের শর্করার মাত্রা' },
      price: '₹120',
      includes: [
        { en: 'Fasting blood glucose', bn: 'ফাস্টিং ব্লাড গ্লুকোজ' },
      ],
      prep: {
        en: 'Fasting is required. The centre will confirm timing.',
        bn: 'উপবাস প্রয়োজন। সেন্টার সময় নিশ্চিত করবে।',
      },
    },
    {
      id: 'thyroid',
      name: { en: 'Thyroid Profile (T3, T4, TSH)', bn: 'থাইরয়েড প্রোফাইল (T3, T4, TSH)' },
      blurb: { en: 'Thyroid function overview', bn: 'থাইরয়েড গ্রন্থির কার্যকারিতা পরীক্ষা' },
      price: '₹700',
      includes: [
        { en: 'T3', bn: 'T3' },
        { en: 'T4', bn: 'T4' },
        { en: 'TSH', bn: 'TSH' },
      ],
      prep: {
        en: 'Confirm medicine timing with your doctor.',
        bn: 'ওষুধ সেবনের সময় চিকিৎসকের সাথে নিশ্চিত করুন।',
      },
    },
    {
      id: 'lft',
      name: { en: 'Liver Function Test (LFT)', bn: 'লিভার ফাংশন টেস্ট (LFT)' },
      blurb: { en: 'Liver health markers', bn: 'লিভারের কার্যকারিতা ও স্বাস্থ্য নির্দেশক' },
      price: '₹650',
      includes: [
        { en: 'Bilirubin', bn: 'বিলিরুবিন' },
        { en: 'SGOT', bn: 'SGOT' },
        { en: 'SGPT', bn: 'SGPT' },
        { en: 'Alkaline phosphatase', bn: 'অ্যালকালাইন ফসফাটেজ' },
      ],
      prep: {
        en: 'Confirm with the centre.',
        bn: 'সেন্টারের সাথে কথা বলে নিশ্চিত করুন।',
      },
    },
    {
      id: 'kft',
      name: { en: 'Kidney Function Test (KFT)', bn: 'কিডনি ফাংশন টেস্ট (KFT)' },
      blurb: { en: 'Kidney health markers', bn: 'কিডনির স্বাস্থ্য ও বর্জ্য নিষ্কাশন পরীক্ষা' },
      price: '₹650',
      includes: [
        { en: 'Urea', bn: 'ইউরিয়া' },
        { en: 'Creatinine', bn: 'ক্রিয়েটিনিন' },
        { en: 'Uric acid', bn: 'ইউরিক অ্যাসিড' },
      ],
      prep: {
        en: 'Confirm with the centre.',
        bn: 'সেন্টারের সাথে কথা বলে নিশ্চিত করুন।',
      },
    },
    {
      id: 'urine',
      name: { en: 'Urine Routine', bn: 'ইউরিন রুটিন পরীক্ষা' },
      blurb: { en: 'Basic urine examination', bn: 'মূত্রের সাধারণ ও অণুবীক্ষণিক পরীক্ষা' },
      price: '₹150',
      includes: [
        { en: 'Physical examination', bn: 'শারীরিক পরীক্ষা' },
        { en: 'Chemical examination', bn: 'রাসায়নিক পরীক্ষা' },
        { en: 'Microscopic examination', bn: 'অণুবীক্ষণিক পরীক্ষা' },
      ],
      prep: {
        en: 'Collection instructions will be shared by the centre.',
        bn: 'নমুনা সংগ্রহের নির্দেশিকা সেন্টার থেকে জানানো হবে।',
      },
    },
  ],
  packages: [
    {
      id: 'pkg-basic',
      name: { en: 'Basic Health Check', bn: 'বেসিক হেলথ চেক' },
      blurb: { en: 'Essential health panel', bn: 'প্রয়োজনীয় প্রাথমিক স্বাস্থ্য পরীক্ষা' },
      price: '₹1,099',
      wide: true,
      includes: [
        { en: 'CBC', bn: 'CBC' },
        { en: 'Blood Sugar (Fasting)', bn: 'রক্তে শর্করা (খালি পেটে)' },
        { en: 'Lipid Profile', bn: 'লিপিড প্রোফাইল' },
        { en: 'Urine Routine', bn: 'ইউরিন রুটিন পরীক্ষা' },
      ],
    },
    {
      id: 'pkg-diabetes',
      name: { en: 'Diabetes Care Panel', bn: 'ডায়াবেটিস কেয়ার প্যানেল' },
      blurb: { en: 'Glycemic and metabolic monitor', bn: 'শর্করা ও অঙ্গ প্রত্যঙ্গের স্বাস্থ্য পরীক্ষা' },
      price: '₹1,199',
      includes: [
        { en: 'HbA1c', bn: 'HbA1c' },
        { en: 'Blood Sugar (Fasting)', bn: 'রক্তে শর্করা (খালি পেটে)' },
        { en: 'KFT', bn: 'KFT' },
        { en: 'Urine Routine', bn: 'ইউরিন রুটিন পরীক্ষা' },
      ],
    },
    {
      id: 'pkg-fullbody',
      name: { en: 'Full Body Checkup', bn: 'ফুল বডি চেকআপ' },
      blurb: { en: 'Comprehensive health assessment', bn: 'সার্বিক স্বাস্থ্য মূল্যায়ন' },
      price: '₹2,499',
      includes: [
        { en: 'CBC', bn: 'CBC' },
        { en: 'Lipid Profile', bn: 'লিপিড প্রোফাইল' },
        { en: 'LFT', bn: 'LFT' },
        { en: 'KFT', bn: 'KFT' },
        { en: 'Thyroid Profile', bn: 'থাইরয়েড প্রোফাইল' },
        { en: 'HbA1c', bn: 'HbA1c' },
        { en: 'Urine Routine', bn: 'ইউরিন রুটিন পরীক্ষা' },
      ],
    },
  ],
  why: [
    {
      icon: 'building',
      title: {
        en: 'Tests and doctor consultations under one roof',
        bn: 'এক ছাদের নিচে পরীক্ষা ও বিশেষজ্ঞ পরামর্শ',
      },
      text: {
        en: 'Book a test or a doctor visit in the same place.',
        bn: 'একই ঠিকানায় প্রয়োজনীয় পরীক্ষা বা ডাক্তারের পরামর্শ নিন।',
      },
    },
    {
      icon: 'chat',
      title: {
        en: 'Booking requests by WhatsApp',
        bn: 'WhatsApp বুকিং',
      },
      text: {
        en: 'Send your request on WhatsApp and the centre replies.',
        bn: 'WhatsApp-এ আপনার অনুরোধ পাঠান, সেন্টার থেকে যোগাযোগ করা হবে।',
      },
    },
    {
      icon: 'list',
      title: {
        en: 'Simple, readable layout',
        bn: 'সহজ ও স্পষ্ট বিন্যাস',
      },
      text: {
        en: 'Clear pages that are easy to read on a phone.',
        bn: 'ফোনে সহজেই পড়ার মতো পরিষ্কার পৃষ্ঠা।',
      },
    },
    {
      icon: 'pin',
      title: {
        en: 'Easy to find',
        bn: 'সহজে খুঁজে পাওয়ার ঠিকানা',
      },
      text: {
        en: 'Address, phone and map link in one place.',
        bn: 'একই সাথে ঠিকানা, ফোন নম্বর এবং ম্যাপের লিংক।',
      },
    },
  ],
  homeCollection: {
    title: { en: 'Home sample collection', bn: 'বাড়িতে নমুনা সংগ্রহ' },
    text: {
      en: 'Home sample collection on request. Send your area and preferred time on WhatsApp.',
      bn: 'অনুরোধে বাড়িতে গিয়ে নমুনা সংগ্রহ করা হয়। আপনার এলাকা ও সুবিধাজনক সময় WhatsApp-এ জানান।',
    },
  },
  reviewSlots: 3,
  waTemplates: {
    general: {
      en: "Hello, I'd like to book a test.\nName: \nTest or package: \nPreferred date and time: ",
      bn: "নমস্কার, আমি একটি পরীক্ষার বুকিং করতে চাই।\nনাম: \nপরীক্ষা বা প্যাকেজ: \nসুবিধাজনক তারিখ ও সময়: ",
    },
    test: {
      en: "Hello, I'd like to book: {test}.\nName: \nPreferred date and time: ",
      bn: "নমস্কার, আমি বুকিং করতে চাই: {test}।\nনাম: \nসুবিধাজনক তারিখ ও সময়: ",
    },
    package: {
      en: "Hello, I'd like to book the {package}.\nName: \nPreferred date and time: ",
      bn: "নমস্কার, আমি {package} বুকিং করতে চাই।\nনাম: \nসুবিধাজনক তারিখ ও সময়: ",
    },
    doctor: {
      en: "Hello, I'd like a consultation with {doctor} ({speciality}).\nName: \nPreferred day: {days}\nPreferred time: ",
      bn: "নমস্কার, আমি {doctor} ({speciality})-এর সাথে পরামর্শের জন্য সিরিয়াল বুক করতে চাই।\nনাম: \nসুবিধাজনক দিন: {days}\nসুবিধাজনক সময়: ",
    },
    home: {
      en: "Hello, I'd like to request home sample collection.\nName: \nArea: \nTest or package: \nPreferred date and time: ",
      bn: "নমস্কার, আমি বাড়িতে নমুনা সংগ্রহের জন্য অনুরোধ জানাতে চাই।\nনাম: \nএলাকা: \nপরীক্ষা বা প্যাকেজ: \nসুবিধাজনক তারিখ ও সময়: ",
    },
  },
};

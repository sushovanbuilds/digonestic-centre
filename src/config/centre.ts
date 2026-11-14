import type { CentreConfig } from './types';

export const centre: CentreConfig = {
  lang: 'en',
  preview: true,
  siteUrl: 'https://example.com',
  name: '[CENTRE NAME]',
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
    phone: '+91 00000 00000',
    whatsapp: '910000000000',
  },
  location: {
    areaLabel: {
      en: '[AREA, TOWN]',
      bn: '[এলাকা, শহর]',
    },
    addressLines: [
      { en: 'Address line 1', bn: 'ঠিকানার লাইন ১' },
      { en: 'Address line 2', bn: 'ঠিকানার লাইন ২' },
    ],
    mapUrl: 'https://maps.google.com',
  },
  hours: [
    {
      label: { en: 'Hours', bn: 'সময়' },
      value: { en: 'Hours placeholder', bn: 'সময় (উদাহরণ)' },
    },
  ],
  doctors: [
    {
      name: { en: 'Doctor name placeholder 1', bn: 'ডাক্তারের নাম (উদাহরণ) ১' },
      speciality: { en: 'Speciality placeholder', bn: 'বিশেষত্ব (উদাহরণ)' },
      days: { en: 'Days placeholder', bn: 'দিন (উদাহরণ)' },
    },
    {
      name: { en: 'Doctor name placeholder 2', bn: 'ডাক্তারের নাম (উদাহরণ) ২' },
      speciality: { en: 'Speciality placeholder', bn: 'বিশেষত্ব (উদাহরণ)' },
      days: { en: 'Days placeholder', bn: 'দিন (উদাহরণ)' },
    },
    {
      name: { en: 'Doctor name placeholder 3', bn: 'ডাক্তারের নাম (উদাহরণ) ৩' },
      speciality: { en: 'Speciality placeholder', bn: 'বিশেষত্ব (উদাহরণ)' },
      days: { en: 'Days placeholder', bn: 'দিন (উদাহরণ)' },
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
      name: { en: 'Test name 1', bn: 'পরীক্ষার নাম ১' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
    {
      id: 'test-2',
      name: { en: 'Test name 2', bn: 'পরীক্ষার নাম ২' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
    {
      id: 'test-3',
      name: { en: 'Test name 3', bn: 'পরীক্ষার নাম ৩' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
    {
      id: 'test-4',
      name: { en: 'Test name 4', bn: 'পরীক্ষার নাম ৪' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
    {
      id: 'test-5',
      name: { en: 'Test name 5', bn: 'পরীক্ষার নাম ৫' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
    {
      id: 'test-6',
      name: { en: 'Test name 6', bn: 'পরীক্ষার নাম ৬' },
      blurb: { en: 'Short description placeholder', bn: 'সংক্ষিপ্ত বিবরণ (উদাহরণ)' },
      includes: [
        { en: 'Included item placeholder 1', bn: 'অন্তর্ভুক্ত বিষয় ১' },
        { en: 'Included item placeholder 2', bn: 'অন্তর্ভুক্ত বিষয় ২' },
        { en: 'Included item placeholder 3', bn: 'অন্তর্ভুক্ত বিষয় ৩' },
      ],
      prep: {
        en: 'Preparation note placeholder.',
        bn: 'প্রস্তুতির নির্দেশিকা (উদাহরণ)।',
      },
    },
  ],
  packages: [
    {
      id: 'package-a',
      name: { en: 'Health package A', bn: 'হেলথ প্যাকেজ A' },
      blurb: { en: 'Package description placeholder', bn: 'প্যাকেজের বিবরণ (উদাহরণ)' },
      wide: true,
    },
    {
      id: 'package-b',
      name: { en: 'Health package B', bn: 'হেলথ প্যাকেজ B' },
      blurb: { en: 'Package description placeholder', bn: 'প্যাকেজের বিবরণ (উদাহরণ)' },
    },
    {
      id: 'package-c',
      name: { en: 'Health package C', bn: 'হেলথ প্যাকেজ C' },
      blurb: { en: 'Package description placeholder', bn: 'প্যাকেজের বিবরণ (উদাহরণ)' },
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
        bn: 'হোয়াটসঅ্যাপে বুকিং অনুরোধ',
      },
      text: {
        en: 'Send your request on WhatsApp and the centre replies.',
        bn: 'হোয়াটসঅ্যাপে আপনার অনুরোধ পাঠান, সেন্টার থেকে যোগাযোগ করা হবে।',
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
    text: { en: 'Sample home collection text placeholder.', bn: 'বাড়িতে গিয়ে নমুনা সংগ্রহের জন্য যোগাযোগ করুন।' },
  },
  reviewSlots: 3,
  waTemplates: {
    general: {
      en: "Hello, I'd like to book a test. Name: , Test: , Preferred time: ",
      bn: "নমস্কার, আমি একটি পরীক্ষার বুকিং করতে চাই। নাম: , পরীক্ষা: , সময়: ",
    },
    test: {
      en: "Hello, I'd like to book: {test}. Name: , Preferred time: ",
      bn: "নমস্কার, আমি বুকিং করতে চাই: {test}। নাম: , সময়: ",
    },
    doctor: {
      en: "Hello, I'd like a doctor consultation. Doctor: {doctor}. Name: , Preferred time: ",
      bn: "নমস্কার, আমি ডাক্তারের পরামর্শ চাই। ডাক্তার: {doctor}। নাম: , সময়: ",
    },
  },
};

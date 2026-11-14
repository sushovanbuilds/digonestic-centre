export type Lang = 'en' | 'bn';

export interface Tx {
  en: string;
  bn?: string;
}

export interface CentreConfig {
  lang: Lang;
  preview: boolean;
  name: string;
  tagline: Tx;
  theme: {
    primary: string;
    ink: string;
    paper: string;
    tint: string;
    rule: string;
    wa: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
  };
  location: {
    areaLabel: string;
    addressLines: string[];
    mapUrl: string;
  };
  hours: {
    label: Tx;
    value: string;
  }[];
  doctors: {
    name: string;
    speciality: string;
    days: string;
  }[];
  flags: {
    homeCollection: boolean;
    doctorSchedule: boolean;
    showReviews: boolean;
    emitSchema: boolean;
  };
  tests: {
    id: string;
    name: Tx;
    blurb: Tx;
    includes: Tx[];
  }[];
  packages: {
    id: string;
    name: Tx;
    blurb: Tx;
    wide?: boolean;
  }[];
  why: {
    icon: 'building' | 'chat' | 'list' | 'pin';
    title: Tx;
    text: Tx;
  }[];
  homeCollection?: {
    title: Tx;
    text: Tx;
  };
  reviewSlots: number;
  waTemplates: {
    general: Tx;
    test: Tx;
    doctor: Tx;
  };
}

export interface UIStrings {
  bookTest: Tx;
  whatsappUs: Tx;
  openMaps: Tx;
  requestWhatsApp: Tx;
  testsHeading: Tx;
  packagesHeading: Tx;
  whyHeading: Tx;
  doctorsHeading: Tx;
  locationHeading: Tx;
  reviewsHeading: Tx;
  sampleNotice: Tx;
  previewNotice: Tx;
}

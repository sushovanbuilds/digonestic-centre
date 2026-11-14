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
    areaLabel: Tx;
    addressLines: Tx[];
    mapUrl: string;
  };
  hours: {
    label: Tx;
    value: Tx;
  }[];
  doctors: {
    name: Tx;
    speciality: Tx;
    days: Tx;
  }[];
  flags: {
    homeCollection: boolean;
    doctorSchedule: boolean;
    showReviews: boolean;
    emitSchema: boolean;
    showPrices?: boolean;
    isDemo?: boolean;
  };
  tests: {
    id: string;
    name: Tx;
    blurb: Tx;
    includes: Tx[];
    prep?: Tx;
    price?: string;
  }[];
  packages: {
    id: string;
    name: Tx;
    blurb: Tx;
    wide?: boolean;
    price?: string;
    includes?: Tx[];
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
    package?: Tx;
    home?: Tx;
  };
}

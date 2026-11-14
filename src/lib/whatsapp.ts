import { centre } from '../config/index.ts';
import type { Lang } from '../config/types.ts';

export function getCleanWhatsAppNumber(number: string = centre.contact.whatsapp): string {
  return number.replace(/\D/g, '');
}

export function buildWhatsAppUrl(text: string, number: string = centre.contact.whatsapp): string {
  const cleanNumber = getCleanWhatsAppNumber(number);
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(lang: Lang = 'en'): string {
  const template = centre.waTemplates.general[lang] ?? centre.waTemplates.general.en;
  return buildWhatsAppUrl(template);
}

export function getTestWhatsAppUrl(testName: string, lang: Lang = 'en'): string {
  const template = centre.waTemplates.test[lang] ?? centre.waTemplates.test.en;
  const text = template.replace('{test}', testName);
  return buildWhatsAppUrl(text);
}

export function getPackageWhatsAppUrl(packageName: string, lang: Lang = 'en'): string {
  const template = centre.waTemplates.package
    ? (centre.waTemplates.package[lang] ?? centre.waTemplates.package.en)
    : (centre.waTemplates.general[lang] ?? centre.waTemplates.general.en);
  const text = template.replace('{package}', packageName);
  return buildWhatsAppUrl(text);
}

export function getDoctorWhatsAppUrl(
  doctorName: string,
  speciality: string = '',
  days: string = '',
  lang: Lang = 'en'
): string {
  const template = centre.waTemplates.doctor[lang] ?? centre.waTemplates.doctor.en;
  const text = template
    .replace('{doctor}', doctorName)
    .replace('{speciality}', speciality)
    .replace('{days}', days);
  return buildWhatsAppUrl(text);
}

export function getHomeWhatsAppUrl(lang: Lang = 'en'): string {
  const template = centre.waTemplates.home
    ? (centre.waTemplates.home[lang] ?? centre.waTemplates.home.en)
    : (centre.waTemplates.general[lang] ?? centre.waTemplates.general.en);
  return buildWhatsAppUrl(template);
}

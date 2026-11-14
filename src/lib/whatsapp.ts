import { centre } from '../config/centre';
import type { Lang } from '../config/types';

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

export function getDoctorWhatsAppUrl(doctorName: string, lang: Lang = 'en'): string {
  const template = centre.waTemplates.doctor[lang] ?? centre.waTemplates.doctor.en;
  const text = template.replace('{doctor}', doctorName);
  return buildWhatsAppUrl(text);
}

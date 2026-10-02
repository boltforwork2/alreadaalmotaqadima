import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLanguages = ['en', 'ar', 'ru', 'hi'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageLabels: Record<SupportedLanguage, string> = {
  en: 'English',
  ar: 'العربية',
  ru: 'Русский',
  hi: 'हिन्दी',
};

export const languageShort: Record<SupportedLanguage, string> = {
  en: 'EN',
  ar: 'AR',
  ru: 'RU',
  hi: 'HI',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: {} },
      ar: { translation: {} },
      ru: { translation: {} },
      hi: { translation: {} },
    },
    fallbackLng: 'en',
    supportedLngs: [...supportedLanguages],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;

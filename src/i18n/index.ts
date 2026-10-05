import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import ru from '@/locales/ru.json';
import zh from '@/locales/zh.json';

export const supportedLanguages = ['en', 'ar', 'ru', 'zh'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageLabels: Record<SupportedLanguage, string> = {
  en: 'English',
  ar: 'العربية',
  ru: 'Русский',
  zh: '中文',
};

export const languageShort: Record<SupportedLanguage, string> = {
  en: 'EN',
  ar: 'AR',
  ru: 'RU',
  zh: 'ZH',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      zh: { translation: zh },
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

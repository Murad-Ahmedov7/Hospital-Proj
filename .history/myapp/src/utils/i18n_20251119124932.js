import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // JSON fayllarından tərcümələri yükləyir
  .use(LanguageDetector) // istifadəçinin brauzer dilini tanıyır
  .use(initReactI18next) // React üçün wrapper
  .init({
    fallbackLng: 'en', // default dil
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

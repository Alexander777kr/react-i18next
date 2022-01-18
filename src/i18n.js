import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//import intervalPlural from 'i18next-intervalplural-postprocessor';

i18n
  ///.use(intervalPlural)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          errorCount: {
            "key_one": "{{count}} error",
            "key_other": "{{count}} errors",
          }
        }
      },
      ru: {
        translation: {
          errorCount: {
            "key_one": "{{count}} ошибка",
            "key_few": "{{count}} ошибки",
            "key_many": "{{count}} ошибок",
            "key_other": "{{count}} ошибок",

          }
        }
      }
    }
  });

export default i18n;
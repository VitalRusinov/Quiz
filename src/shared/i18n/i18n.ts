import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru';
import en from './locales/en';
import { Languages, LOCAL_STORAGE_LANGUAGE_KEY } from './config/consts';

const defaultLng =
  (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as Languages) ||
  Languages.ru;

i18n.use(initReactI18next).init({
  lng: defaultLng,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: { translation: ru.translation },
    en: { translation: en.translation },
  },
});

export default i18n;

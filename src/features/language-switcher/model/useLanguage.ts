import { useTranslation } from 'react-i18next';
import {
  Languages,
  LOCAL_STORAGE_LANGUAGE_KEY,
} from 'shared/i18n';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (code: Languages) => {
    i18n.changeLanguage(code);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, Languages[code]);
  };

  return { currentLanguage, changeLanguage };
};

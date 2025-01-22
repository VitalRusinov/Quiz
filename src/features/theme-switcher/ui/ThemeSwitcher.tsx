import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../config/ThemeContext';
import { MoonIcon, SunIcon } from './icons';

import './ThemeSwitcher.scss';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <>
        {theme === 'light' ? (
          <SunIcon className="theme-switcher__icon" />
        ) : (
          <MoonIcon className="theme-switcher__icon" />
        )}
        <span className="theme-switcher__text">{t('theme_switcher')}</span>
      </>
    </button>
  );
};

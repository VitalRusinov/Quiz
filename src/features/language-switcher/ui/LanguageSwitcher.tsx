import React, { useState } from 'react';
import { useLanguage } from '../model/useLanguage';
import { GlobeIcon } from './GlobeIcon';

import './LanguageSwitcher.scss';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const getCurrentLanguageLabel = () => LANGUAGES.find(lng => lng.code === currentLanguage)?.label

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__button"
        onClick={toggleDropdown}
      >
        <GlobeIcon className="language-switcher__icon" />
        <span>{getCurrentLanguageLabel()}</span>
      </button>

      {isOpen && (
        <ul className="language-switcher__dropdown">
          {LANGUAGES.map(({ code, label }) => (
            <li
              key={code}
              className='language-switcher__option'
              onClick={() => {
                changeLanguage(code);
                setIsOpen(false);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

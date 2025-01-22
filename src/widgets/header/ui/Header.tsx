import { LanguageSwitcher } from 'features/language-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </header>
  );
};

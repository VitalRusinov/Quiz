import React, { useContext } from "react";
import { ThemeContext } from "../config/ThemeContext";
import { MoonIcon, SunIcon } from './icons';

import "./ThemeSwitcher.scss";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <>
        {theme === "light" ? 
          <SunIcon className="theme-switcher__icon" /> :
          <MoonIcon className="theme-switcher__icon" />
        }
        <span className="theme-switcher__text">Theme</span>
      </>
    </button>
  );
};


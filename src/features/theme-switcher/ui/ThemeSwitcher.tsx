import React, { useContext } from "react";
import { ThemeContext } from "../config/ThemeContext";

import "./ThemeSwitcher.scss";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};


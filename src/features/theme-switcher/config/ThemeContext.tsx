import { createContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeContextType {
  theme?: Theme;
  toggleTheme?: () => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType>({});

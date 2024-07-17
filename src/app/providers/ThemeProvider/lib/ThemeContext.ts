import { createContext } from "react";

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const LocalStorageThemeKey = "theme";

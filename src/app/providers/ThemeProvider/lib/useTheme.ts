import { useContext } from "react";
import { LocalStorageThemeKey, ThemeContext, Themes } from "./ThemeContext";

interface useThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    setTheme(newTheme);

    localStorage.setItem(LocalStorageThemeKey, newTheme);
  };
  return { theme, toggleTheme };
};

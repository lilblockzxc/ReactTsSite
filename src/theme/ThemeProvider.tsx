import { FC, useMemo, useState } from "react";
import { LocalStorageThemeKey, ThemeContext, Themes } from "./ThemeContext";
const defaultTheme =
  (localStorage.getItem(LocalStorageThemeKey) as Themes) || Themes.LIGHT;
const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

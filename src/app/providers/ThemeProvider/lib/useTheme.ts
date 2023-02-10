import { useContext } from "react";
// import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "../../../../shared/config/theme/ThemeContext";
// import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
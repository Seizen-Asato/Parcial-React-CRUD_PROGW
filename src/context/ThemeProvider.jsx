import useTheme from "../hooks/useTheme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

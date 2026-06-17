import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";
import "../components/ui/toggle.css";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "dark" ? "dark-mode" : "light-mode");
  }, [theme]);
  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <DarkModeSwitch
        checked={theme === "dark"}
        onChange={toggleTheme}
        size={40}
      />
    </div>
  );
};

export default Toggle;

import { useState } from "react";

const getInitialTheme = () => {
  const temaGuardado = localStorage.getItem("theme");
  if (temaGuardado) {
    return temaGuardado;
  } else {
    return "light";
  }
};

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const siguiente = theme === "light" ? "dark" : "light";
    setTheme(siguiente);
    localStorage.setItem("theme", siguiente);
  };

  return { theme, toggleTheme };
}

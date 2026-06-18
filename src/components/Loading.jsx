import "../components/ui/Loading.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNotScroll } from "../hooks/useNotScroll";

const Loading = () => {
  const { theme } = useContext(ThemeContext);
  useNotScroll(true);
  return (
    <div
      className={`loading-container ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <div className="loading-spinner" />
      <h5>LOADING ...</h5>
    </div>
  );
};

export default Loading;

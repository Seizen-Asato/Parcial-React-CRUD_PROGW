import "../components/ui/Loading.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Loading = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <div className="loading-container">
        <div className="loading-spinner" />
        <h5>LOADING ...</h5>
      </div>
    </div>
  );
};

export default Loading;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./components/layout/index.css";
import NavBar from "./components/NavBar.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <NavBar />
      <App />
    </HashRouter>
  </StrictMode>,
);

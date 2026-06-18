import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import Header from "./components/Header";
import "./components/layout/index.css";
import NavBar from "./components/NavBar.jsx";
import Toggle from "./components/Toggle.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <Header />
        <NavBar />
        <Toggle />
        <App />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);

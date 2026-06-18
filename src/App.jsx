import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./components/layout/App.css";
import "./components/layout/index.css";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import NotFound from "./components/NotFound";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AcercaDe from "./pages/AcercaDe";
import Servicio from "./pages/Servicio";
import CreatePost from "./pages/CreatePost";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPost/:id" element={<DetailPost />} />
          <Route path="/EditPost" element={<EditPost />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
          <Route path="/Servicio" element={<Servicio />} />
          <Route path="Create" element={<CreatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

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
import { PostsProvider } from "./context/PostContext";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`app-wrapper ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <PostsProvider>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailPost/:id" element={<DetailPost />} />
            <Route path="/EditPost" element={<EditPost />} />
            <Route path="/AcercaDe" element={<AcercaDe />} />
            <Route path="/Servicio" element={<Servicio />} />
            <Route path="/Create" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </PostsProvider>
    </div>
  );
}

export default App;

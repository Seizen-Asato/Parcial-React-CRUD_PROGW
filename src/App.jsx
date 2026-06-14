import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./components/layout/App.css";
import "./components/layout/index.css";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <>
      <div className="main-content">
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailPost/:id" element={<DetailPost />} />
            <Route path="/ EditPost" element={<EditPost />} />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}
export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./components/layout/App.css";
import "./components/layout/index.css";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ EditPost" element={<EditPost />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

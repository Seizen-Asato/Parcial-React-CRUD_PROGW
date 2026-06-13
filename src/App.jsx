import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./components/layout/App.css";
import "./components/layout/index.css";
import DetailPost from "./pages/DetailPost";
function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPost/:id" element={<DetailPost />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./components/layout/App.css";
import "./components/layout/index.css";
import Prueba from "./pages/Prueba";
function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prueba" element={<Prueba />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

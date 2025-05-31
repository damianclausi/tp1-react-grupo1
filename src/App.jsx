import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Antonio from "./pages/Antonio";
import Damian from "./pages/Damian";
import Cristian from "./pages/Cristian";
import Rocio from "./pages/Rocio";
import JsonData from "./pages/JsonData";
import ApiData from "./pages/ApiData";
import Bitacora from "./pages/Bitacora";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/antonio" element={<Antonio />} />
            <Route path="/damian" element={<Damian />} />
            <Route path="/cristian" element={<Cristian />} />
            <Route path="/rocio" element={<Rocio />} />
            <Route path="/json" element={<JsonData />} />
            <Route path="/api" element={<ApiData />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

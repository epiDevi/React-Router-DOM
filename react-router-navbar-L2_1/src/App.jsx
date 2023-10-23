import "./App.css";
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Oeffnungszeiten from "./pages/Opening";
import Galerie from "./pages/Galerie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeit" element={<Oeffnungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

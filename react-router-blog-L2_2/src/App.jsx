import "./App.css";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Artikel from "./Pages/Artikel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/artikel/:id" element={<Artikel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

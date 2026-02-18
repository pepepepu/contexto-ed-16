import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Expediente } from "./pages/Expediente";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SaoGoncalo } from "./pages/Entrevistas/SaoGoncalo";
import { Cheganca } from "./pages/Entrevistas/Cheganca";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expediente" element={<Expediente />} />

        <Route path="/reportagens/sao-goncalo" element={<SaoGoncalo />} />
        <Route path="/reportagens/cheganca" element={<Cheganca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

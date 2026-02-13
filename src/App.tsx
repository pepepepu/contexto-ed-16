import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Expediente } from "./pages/Expediente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expediente" element={<Expediente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contect from "./Component/Contect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

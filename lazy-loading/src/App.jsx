import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Scrollbased from "./pages/Scrollbased";
import ReactWindow from "./pages/ReactWindow";
import Navbar from "./components/Navbar";
import Lazy from "./pages/Lazy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ReactWindow />} />
          <Route path="/scrollbase" element={<Scrollbased />} />
          <Route path="/lazy/*" element={<Lazy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

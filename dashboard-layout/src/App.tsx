import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/Home.tsx";
import Dashboard1 from "./page/Dashboard1.tsx";
import Dashboard2 from "./page/Dashboard2.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

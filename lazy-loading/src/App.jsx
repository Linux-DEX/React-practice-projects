import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Scrollbased from './pages/Scrollbased'
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
     <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrollbase" element={<Scrollbased />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home";
import Routerdom from "./page/Routerdom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/router-dom/*" element={<Routerdom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

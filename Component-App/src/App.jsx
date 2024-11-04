import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Dropdown from './Pages/DropDown/Dropdown';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dropdown" element={<Dropdown />} />
          {/* <Route path="/contact" element={<Contect />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

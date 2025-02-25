import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Newproject from './pages/Newproject'
import HtmlProject from './pages/HtmlProject.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/iframe" element={
            <div
              style={{
                width: '100vw',
                height: 'calc(100vh - 200px)'
              }}
            >

              <iframe 
                src="https://chart-bot.azurewebsites.net/index.html"
                width="100%" 
                height="100%" 
                title="Example Website"
                style={{ border: "none" }}
                onError={(e) => console.error("Error loading iframe:", e)}
                id="inlineFrameExample"
              />
            </div>

          } />
          <Route path="/suspense" element={<Newproject />} />
          <Route path="/build" element={<HtmlProject />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

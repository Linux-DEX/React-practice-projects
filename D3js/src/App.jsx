import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="content">
            <Routes>
              {routeConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

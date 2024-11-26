import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import TabOne from "../components/TabOne";
import Tabtwo from "../components/Tabtwo";
import Tabthree from "../components/Tabthree";
import "./Routerdom.css";

const Routerdom = () => {
  return (
    <div className="Routerdom">
      <h1>Tabs Example with React Router</h1>

      <nav>
        <ul className="tab-nav">
          <li>
            <NavLink
              to="/router-dom/tab1"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tab 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/router-dom/tab2"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tab 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/router-dom/tab3"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tab 3
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* making tab1 default in route */}
        <Route path="/router-dom" element={<Navigate to="/router-dom/tab1" />} />
        <Route path="tab1" element={<TabOne />} />
        <Route path="tab2" element={<Tabtwo />} />
        <Route path="tab3" element={<Tabthree />} />
      </Routes>
    </div>
  );
};

export default Routerdom;

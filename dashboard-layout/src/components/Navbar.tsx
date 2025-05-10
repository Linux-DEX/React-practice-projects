import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <p>Doc</p>
      </Link>
      <Link
        to="/dashboard1"
        className={location.pathname === "/about" ? "active" : ""}
      >
        <p>dash1</p>
      </Link>
      <Link
        to="/dashboard2"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        <p>dash2</p>
      </Link>
    </nav>
  );
};

export default Navbar;

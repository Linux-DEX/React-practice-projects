import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <p>home</p>
      </Link>
      <Link
        to="/dropdown"
        className={location.pathname === "/dropdown" ? "active" : ""}
      >
        <p>Drop down</p>
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        <p>contact</p>
      </Link>
    </nav>
  );
};

export default Navbar;

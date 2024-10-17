import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import your CSS for styling

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <p>home</p>
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        <p>about</p>
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

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <span className="navbar-logo">React Tab</span>
          <div className="navbar-menu" id="navbar-user">
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-item" id="home-link">
                  switch func
                </Link>
              </li>
              <li>
                <Link to="/router-dom" className="navbar-item" id="scrollbase-link">
                  router-dom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

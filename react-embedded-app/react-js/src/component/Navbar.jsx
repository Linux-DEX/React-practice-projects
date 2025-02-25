import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="navbar-logo">MyApp</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/iframe" className="nav-item">iframe</Link></li>
          <li><Link to="/suspense" className="nav-item">suspense</Link></li>
          <li><Link to="/build" className="nav-item">build Proj</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


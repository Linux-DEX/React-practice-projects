import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-auto shadow-md rounded-md left-1/2 transform -translate-x-1/2">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <ul className="flex space-x-4">
          {[
            { name: "Home", path: "/" },
            { name: "Axios", path: "/axios" },
            { name: "Fetch", path: "/fetch" },
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-blue-400 ${
                    isActive ? "border-b-2 border-blue-500" : ""
                  }`
                }>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

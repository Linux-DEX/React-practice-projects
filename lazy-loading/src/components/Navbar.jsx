import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#lazy-tab")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-[80%] rounded-lg relative left-[50%] translate-x-[-50%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lazy loading
          </span>
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`
                  }
                  aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/scrollbase"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`
                  }>
                  Scroll Base
                </NavLink>
              </li>
              <li id="lazy-tab" className="relative">
                <button
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isDropdownOpen ||
                    window.location.pathname.startsWith("/lazy")
                      ? "text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  onClick={() => setDropdownOpen((prev) => !prev)}>
                  Lazy Tab
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-white shadow-lg mt-2 w-40 rounded-lg border">
                    <NavLink
                      to="/lazy"
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-blue-600 bg-gray-100"
                          : "block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-blue-500"
                      }
                      onClick={() => setDropdownOpen(false)}>
                      Users
                    </NavLink>
                    <NavLink
                      to="/lazy/add-user"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-blue-600 bg-gray-100"
                          : "block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-blue-500"
                      }
                      onClick={() => setDropdownOpen(false)}>
                      Add User
                    </NavLink>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useState, useRef, useEffect } from "react";
import "./SingleDropDownMenu.css";

const SingleDropDownMenu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="profile" onClick={toggleDropDown} aria-haspopup="true" aria-expanded={showDropDown}>
        Profile
      </button>
      {showDropDown && (
        <div className="dropdownParent" role="menu">
          <ul className="dropdownChild">
            <li role="menuitem">Profile</li>
            <li role="menuitem">Settings</li>
            <li role="menuitem">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleDropDownMenu;

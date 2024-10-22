import React, { useRef, useEffect } from "react";
import { usePopup } from "../Context/PopupContext";
import "./Overlaypopup.css";

const OverlayPopup: React.FC = () => {
  const { isOpen, closePopup } = usePopup();
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup" ref={popupRef}>
        <h3>Popup Content</h3>
        <p>This is your popup content.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default OverlayPopup;

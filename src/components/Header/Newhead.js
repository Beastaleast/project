import React, { useState, useRef, useEffect } from "react";
import "./Newhead.css";
import Mobilehamburger from "../Common/Mobilehamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="gg-header">
      <Mobilehamburger />
      <img src="gglogo-svg.svg" alt="Logo" className="gg-logo" />

      <div className="gg-avatar-container" ref={dropdownRef}>
        <img
          src="2815428.png"
          alt="User Avatar"
          className="gg-avatar"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="gg-dropdown">
            <ul>
              <li>👤 My Profile</li>
              <li>⚙️ Settings</li>
              <li>🔒 Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "Nutrition Dashboard", path: "/nutrition" },
    { label: "Client Dashboard", path: "/client" },
    { label: "Food Item Addition", path: "/food_item" },
    { label: "Diet Template Addition", path: "/diet" },
    { label: "ECommerce", path: "/ecommerce" },
    { label: "Flyer", path: "/flyer" },
  ];

  return (
    <>
     
      <button className="gg-hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`gg-sidebar ${isOpen ? "open" : ""}`}>
        <ul className="gg-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      
      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
}

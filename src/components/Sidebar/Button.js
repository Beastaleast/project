import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
  //const [isOpen, setIsOpen] = useState(false);
const {isOpen,setIsOpen} = props;
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
    </>
  );
}

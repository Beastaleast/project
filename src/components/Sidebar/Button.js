import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "Nutrition Dashboard", path: "/nutrition" },
    { label: "Client Dashboard", path: "/client" },
    { label: "Food Item Addition", path: "/food_item" },
    { label: "Diet Template Addition", path: "/diet" },
    { label: "ECommerce", path: "/ecommerce" },
    { label: "Flyer", path: "/slyer" },
    { label: "Login", path: "/login" },
    { label: "SignUp", path: "/signup" },
  ];

  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

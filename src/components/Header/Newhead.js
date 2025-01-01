import React from "react";
import "./Newhead.css";

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Welcome to the GOOD GUT PROJECT</h1>
      <div>
        <img src="avatar.png" alt="User Avatar" className="avatar" />
      </div>
    </div>
  );
}

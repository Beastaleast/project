import React from "react";
import logo from './images/logo.png';

export default function Newhead() {
  return (
    <div className="Newhead">
      <img src={logo} style={{ width: "100px" }} alt="Logo" />
      <div>
        <h1>Welcome to the Good Gut Project</h1>
      </div>
      <div>
      </div>
    </div>
  );
}

import React from "react";
import "./Newhead.css";
import Mobilehamburger from "../Common/Mobilehamburger";


export default function Header() {
  return (
    <header className="gg-header">
    <Mobilehamburger/>
      <img src="gglogo-svg.svg" alt="Logo" className="gg-logo" />
      <img src="2815428.png" alt="User Avatar" className="gg-avatar" />
    </header>
  );
}

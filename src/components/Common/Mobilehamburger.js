import { useState } from "react";
import Sidebar from "../Sidebar/Button";

export default function Mobilehamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className="gg-hamburger" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      )}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

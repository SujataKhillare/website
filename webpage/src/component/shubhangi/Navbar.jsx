import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">RESTAURANT</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">HOME</a>
        <a href="/menu">MENU</a>
        <a href="/shop">SHOP</a>
        <a href="/news">NEWS</a>
        <a href="/contact">CONTACT</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
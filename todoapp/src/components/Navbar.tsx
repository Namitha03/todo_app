// Navbar.js
import { useState } from "react";
import { ImHome } from "react-icons/im";
import "./Navbar.css"; // Import your CSS file for styling
import { MdAccountCircle, MdCalendarMonth } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">To-Do-App</a>
      </div>

      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <a href="/">
            <ImHome />
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <MdAccountCircle />
            Login
          </a>
        </li>
        <li>
          <a href="/">
            <MdCalendarMonth />
            Calender
          </a>
        </li>
      </ul>

      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;

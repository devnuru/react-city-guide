import React from "react";
import "./Navbar.scss";
import Logo from "../../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="city tour logo" className="img" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/tours" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

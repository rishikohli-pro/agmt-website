import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Assets/abgmLogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img className="navbar-logo" src={Logo} alt="Logo" />
      </div>
      <div className="right">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;

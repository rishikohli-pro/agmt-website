import React from "react";

import "./Navbar.css";
import Logo from "../../Assets/abgmLogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img className="navbar-logo" src={Logo} alt="Logo" />
      </div>
      <div className="right">
        <Link className="link" to="/Navbar" activeClass="active" smooth={true}>
          Home
        </Link>
        <Link
          className="link"
          to="/WorkSection"
          activeClass="active"
          smooth={true}
        >
          Our Work
        </Link>
        <Link
          className="link"
          to="/MemberCard"
          activeClass="active"
          smooth={true}
        >
          Our Members
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

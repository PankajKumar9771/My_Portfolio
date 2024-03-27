// import  Link  from "react-router-dom";

import logo2 from "../../assets/logo2.png";
import menu from "../../assets/menu.jpg";

import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav id="navbar">
        <img src={logo2} alt="" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuList"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuList"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuList"
          >
            Portfoliyo
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="desktopMenuList"
          >
            Clients
          </Link>
        </div>

        <Link
          activeClass="active"
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          id="btnLink"
          // className="desktopMenuList"
        >
          <button className="desktopBtn">
            <i className="fa-regular fa-comment"></i>
            Contact Me!
          </button>
        </Link>

        <i
          className="fa-solid fa-bars MobMenu"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(false)}
            className="navMenuList"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={() => setShowMenu(false)}
            className="navMenuList"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(false)}
            className="navMenuList"
          >
            Portfoliyo
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
            className="navMenuList"
          >
            Clients
          </Link>

          <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowMenu(false)}
            className="navMenuList"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}

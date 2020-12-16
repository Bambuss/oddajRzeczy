import React from "react";
import { NavLink } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function HomeHeader() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="upper-nav">
            <NavLink to="/logowanie">
              <button className="log-btn">Zaloguj</button>
            </NavLink>
            <NavLink to="/rejestracja">
              <button className="log-btn">Załóż konto</button>
            </NavLink>
          </div>
          <ul className="lower-nav">
            <Link to="start" smooth={true} duration={500}>
              <li>Start</li>
            </Link>
            <Link to="4steps" smooth={true} duration={500}>
              <li>O co chodzi?</li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li>O nas</li>
            </Link>
            <Link to="help" smooth={true} duration={500}>
              <li>Fundacja i organizacje</li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li>Kontakt</li>
            </Link>
          </ul>
        </nav>
        <div className="header-main">
          <div className="header-title">
            <h2>
              Zacznij pomagać!
              <span>Oddaj niechciane rzeczy w zaufane ręce</span>
            </h2>
            <img src={decoration} alt="dekoracja" />
          </div>
          <div className="header-buttons">
            <NavLink to="/logowanie">
              <button className="main-btn">ODDAJ RZECZY</button>
            </NavLink>
            <NavLink to="/logowanie">
              <button className="main-btn">ZORGANIZUJ ZBIÓRKĘ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import decoration from "../assets/Decoration.svg";

function Logout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <section className="login">
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
            <NavLink to="/">
              <li>Start</li>
            </NavLink>
            <NavLink to="/">
              <li>O co chodzi?</li>
            </NavLink>
            <NavLink to="/">
              <li>O nas</li>
            </NavLink>
            <NavLink to="/">
              <li>Fundacja i organizacje</li>
            </NavLink>
            <NavLink to="/">
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </nav>
        <div className="log-screen">
          <h1>
            Wylogowanie nastąpiło <br /> pomyślnie!
          </h1>
          <img src={decoration} alt="dekoracja" />
          <div>
            <NavLink to="/">
              <button className="home-btn">Strona główna</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logout;

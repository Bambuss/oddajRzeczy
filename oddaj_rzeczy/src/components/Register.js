import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import decoration from "../assets/Decoration.svg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [mailError, setMailError] = useState({ display: "none" });
  const [passwordError, setPasswordError] = useState({ display: "none" });
  const [passwordRepeatError, setPasswordRepeatError] = useState({
    display: "none",
  });

  const handleCLick = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email) || email === "") {
      setMailError({ display: "flex" });
    } else {
      setMailError({ display: "none" });
    }

    if (password.length < 6) {
      setPasswordError({ display: "flex" });
    } else {
      setPasswordError({ display: "none" });
    }

    if (passwordRepeat !== password) {
      setPasswordRepeatError({ display: "flex" });
    } else {
      setPasswordRepeatError({ display: "none" });
    }
  };

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
          <h1>Załóż konto</h1>
          <img src={decoration} alt="dekoracja" />
          <div className="log-data">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="email-error" style={mailError}>
              Podany email jest nieprawidłowy!
            </p>
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="password-error" style={passwordError}>
              Podane hasło jest za krótkie!
            </p>
            <label htmlFor="passwordRepeat">Powtórz Hasło</label>
            <input
              type="password"
              name="passwordRepeat"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
            <p className="password-error" style={passwordRepeatError}>
              Podane hasła nie są takie same!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              dolores dolorem perspiciatis. Eaque nulla totam saepe iusto facere
              error unde!
            </p>
          </div>
          <div className="log-btns">
            <NavLink to="/logowanie">
              <button className="log-reg-btn">Zaloguj się</button>
            </NavLink>
            <NavLink to="/rejestracja">
              <button className="log-reg-btn" onClick={handleCLick}>
                Załóż konto
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

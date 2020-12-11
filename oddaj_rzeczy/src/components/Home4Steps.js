import React from "react";
import decoration from "../assets/Decoration.svg";
import shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import search from "../assets/Icon-3.svg";
import refresh from "../assets/Icon-4.svg";
import { NavLink } from "react-router-dom";
function Home4Steps() {
  return (
    <section className="4steps" id="4steps">
      <div className="steps-title">
        <div className="container">
          <h3>Wystarczą 4 proste kroki</h3>
          <img src={decoration} alt="dekoracja" />
        </div>
      </div>
      <div className="steps-description">
        <div className="container">
          <div className="step-box">
            <img src={shirt} alt="shirt" />
            <p>Wybierz rzeczy</p>
            <span>ubrania, zabawki, sprzęt i inne</span>
          </div>
          <div className="step-box">
            <img src={bag} alt="bag" />
            <p>Spakuj je</p>
            <span>skorzystaj z worków na śmieci</span>
          </div>
          <div className="step-box">
            <img src={search} alt="search" />
            <p>Zdecyduj komu chcesz pomóc</p>
            <span>wybierz zaufane miejsce</span>
          </div>
          <div className="step-box">
            <img src={refresh} alt="refresh" />
            <p>Zamów kuriera</p>
            <span>kurier przyjedzie w dogodnym terminie</span>
          </div>
        </div>
      </div>
      <div className="steps-done">
        <div className="container">
          <NavLink to="/logowanie">
            <button className="main-btn">ODDAJ RZECZY</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home4Steps;

import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";
import Foundation from "./pagination/Foundation";
import Local from "./pagination/Locals";
import Organization from "./pagination/Organization";

function HomeHelp() {
  const [pagination, setPagination] = useState(<Foundation />);

  const handleClickFoundation = () => {
    if (pagination !== <Foundation />) {
      setPagination(<Foundation />);
    }
  };

  const handleClickOrganization = () => {
    if (pagination !== <Organization />) {
      setPagination(<Organization />);
    }
  };

  const handleClickLocal = () => {
    if (pagination !== <Local />) {
      setPagination(<Local />);
    }
  };
  return (
    <section className="help" id="help">
      <div className="container">
        <div className="help-title">
          <h2>Komu pomagamy?</h2>
          <img src={decoration} alt="dekoracja" />
        </div>
        <div className="help-recipient">
          <button onClick={handleClickFoundation}>Fundacjom</button>
          <button onClick={handleClickOrganization}>
            Organizacjom pozarządowym
          </button>
          <button onClick={handleClickLocal}>Lokalnym zbiórkom</button>
        </div>
        <div className="help-description">
          <p>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        </div>
        <div className="help-list">{pagination}</div>
      </div>
    </section>
  );
}

export default HomeHelp;

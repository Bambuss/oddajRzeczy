import React from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

function HomeContact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-title">
          <h2>Skontaktuj się z nami</h2>
          <img src={decoration} alt="dekoracja" />
        </div>
        <form action="submit">
          <div className="user">
            <div className="name">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input type="text" name="name" />
            </div>
            <div className="mail">
              <label htmlFor="email">Wpisz swój email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <label htmlFor="msg">Wpisz swoją wiadomość</label>
          <textarea name="msg" id="msg" cols="30" rows="5"></textarea>
        </form>
        <button>Wyślij</button>
        <div className="social">
          <img src={facebook} alt="fb" />
          <img src={instagram} alt="insta" />
        </div>
      </div>
    </section>
  );
}

export default HomeContact;

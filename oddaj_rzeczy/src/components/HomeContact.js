import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

function HomeContact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [errorStyles, setErrorStyles] = useState({ display: "none" });
  const [mailStyles, setMailStyles] = useState({ display: "none" });
  const [textareaStyles, setTextareaStyles] = useState({ display: "none" });
  const [successStyle, setSuccessStyle] = useState({});

  // Load the full build.
  var _ = require("lodash");
  //walidacja

  const handleSubmit = (email) => {
    email.preventDefault();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (name === "" || mail === "" || textarea === "") {
    //   alert("Nie wypełniono wszystkich pól");
    // }
    //formik - npm
    if (name.includes(` `) || name === "") {
      setErrorStyles({
        borderTop: "2px solid red",
        color: "red",
      });
    } else {
      setErrorStyles({});
    }

    if (textarea.length < 120 || textarea === "") {
      setTextareaStyles({
        borderTop: "2px solid red",
        color: "red",
      });
    } else {
      setTextareaStyles({});
    }

    if (!re.test(mail) || mail === "") {
      setMailStyles({
        borderTop: "2px solid red",
        color: "red",
      });
    } else {
      setMailStyles({});
    }

    if (
      _.isEmpty(errorStyles) === true &&
      _.isEmpty(textareaStyles) === true &&
      _.isEmpty(mailStyles) === true
    ) {
      // setSuccessStyle({ display: "flex" });
      console.log("hej");
      //polecam async/await
      fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mail,
          msg: textarea,
        }),
      })
        .then((res) => {
          if (res.ok) {
            //sukces
            setSuccessStyle({ display: "flex" });
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
    } else {
      setSuccessStyle({ display: "none" });
    }
  };
  const handleCLick = () => {
    // if (
    //   _.isEmpty(errorStyles) === true &&
    //   _.isEmpty(textareaStyles) === true &&
    //   _.isEmpty(mailStyles) === true
    // ) {
    //   setSuccessStyle({ display: "flex" });
    // } else {
    //   setSuccessStyle({ display: "none" });
    // }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-title">
          <h2>Skontaktuj się z nami</h2>
          <img src={decoration} alt="dekoracja" />
          <p className="success" style={successStyle}>
            Wiadomość została wysłana! <span>Wkrótce się skontaktujemy.</span>
          </p>
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="user">
            <div className="name">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="error" style={errorStyles}>
                Podane imię jest nieprawidłowe!
              </p>
            </div>
            <div className="mail">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                type="email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <p className="error" style={mailStyles}>
                Podany email jest nieprawidłowy!
              </p>
            </div>
          </div>
          <label htmlFor="msg">Wpisz swoją wiadomość</label>
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
          <p className="error" style={textareaStyles}>
            Wiadomość musi mieć conajmniej 120 znaków!
          </p>

          <button onClick={handleCLick}>Wyślij</button>
        </form>
        <div className="social">
          <img src={facebook} alt="fb" />
          <img src={instagram} alt="insta" />
        </div>
      </div>
    </section>
  );
}

export default HomeContact;

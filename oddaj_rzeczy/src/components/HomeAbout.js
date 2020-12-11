import React from "react";
import us from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

function HomeAbout() {
  return (
    <section className="about" id="about">
      <div className="about-description">
        <h3>O nas</h3>
        <img src={decoration} alt="dekoracja" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signature} alt="signature" id="signature" />
      </div>
      <div className="about-photo"></div>
    </section>
  );
}

export default HomeAbout;

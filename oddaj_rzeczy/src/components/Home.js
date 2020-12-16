import React from "react";
import { Route } from "react-router";
import Home4Steps from "./Home4Steps";
import HomeAbout from "./HomeAbout";
import HomeForm from "./HomeForm";
import HomeHeader from "./HomeHeader";
import HomeHelp from "./HomeHelp";
import HomeThreeColumns from "./HomeThreeColumns";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import HomeContact from "./HomeContact";

function Home() {
  return (
    <section>
      <HomeHeader />
      <HomeThreeColumns />
      <Home4Steps />
      <HomeAbout />
      <HomeHelp />
      <HomeContact />
    </section>
  );
}

export default Home;

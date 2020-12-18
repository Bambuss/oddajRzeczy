import logo from "./logo.svg";
import "./scss/App.scss";
// import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/logowanie">
          <Login />
        </Route>

        <Route path="/rejestracja">
          <Register />
        </Route>
        <Route path="/wylogowano">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

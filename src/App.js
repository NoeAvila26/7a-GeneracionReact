import React, { Component } from "react";

// External Packages
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Pages
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CurrencyConverter from "./pages/CurrencyConverter"

// CSS
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route exact path="/holi" component={Notes}>
              <h1>Holis!!</h1>
            </Route>
            <Route exact path="/currency-converter">
              <CurrencyConverter />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

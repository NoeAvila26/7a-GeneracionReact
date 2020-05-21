import React, { Component } from 'react';
import logo from './logo.svg'
import Note from "./components/Note";
import Notes from "./pages/Notes"

// External Packages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// CSS
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
import React, { Component } from "react";

// External Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CurrencyConverter from "./pages/CurrencyConverter";
import Login from "./pages/Login"

// CSS
import "./App.css";

export default class App extends Component {
  constructor(props) {
    this.state = {
      isUserLogedIn: false,
    };
  }

  componentDidMount(){
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken) {
      this.setState({
        isUserLogedIn: true
      })
    }
  }

  logOut() {
    localStorage.removeItem('authTokenUser')
    this.setState({
      isUserLogedIn: false
    })
  }

  render() {
    const { isUserLogedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Menu logOut={this.logOut} isUserLogedIn={isUserLogedIn}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/notes">
              <Notes isUserLogedIn={isUserLogedIn} />
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

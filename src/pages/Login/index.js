import React, { Component } from "react";

// // External Packages
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from '../../components/Header'

//Services
import { logIn as LogInService } from '../../services'


// CSS
import "./Login.css";

export default class App extends Component {
  constructor(props) {
    this.state = {
    };
      this.handleSubmit.bind(this)
      this.handleInput.bind(this)
  }

  handleInput({target: {name, value} }) {
    this.setState({
      [name]: value
    })
  }

  handleServiceResponse({ succes, {data: {token}}}

  handleSubmit(event) {
    event.preventDefault(
      const { email, password} = this.state,
      const data = {
        email,
        password
      }
    )
  }


  render() {
    const { email, password } = this.setState
    return (
      <div className='Container'>
        <form>

        </form>

      </div>
    );
  }
}

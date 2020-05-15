import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "noe",
    };
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("desde el render");
    return (
      <div>
        <p>{this.state.name}</p>
        <p>Hola mundo la hora es{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}



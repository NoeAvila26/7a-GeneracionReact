import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
    };
  }

  componentDidMount() {
    console.log("componenDidMount");
    this.numInterval = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    if (this.state.count % 8 === 0) {
      console.log("Este numero es multiplo de 8");
    }
    if (this.state.count === 20){
      clearInterval(this.numInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.numInterval);
    
      
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
    });
    // if (this.state.count === 8) {
    //   this.setState({
    //     message: "llegamos al numero 8"
    //   });
    // }
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

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

// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     console.log('%c El componente counter se monto','color: #ff0000');
//     const {stop} = this.props
//     this.countInterval = setInterval(() => {
//       const { counter } = this.state;
//       this.setState({
//         counter: counter + step,
//       });
//     }, 1000);
//   }

//   componentDidUpdate() {
//     console.log('%c El estado del componente se actualizo.', 'color: #ff0000');
//     const {counter} = this.state
//     const {finalCounter,} = this.props
//     if (counter % 8 === 0) {
//     console.log(`%c Desde el componentDidUpdate ${counter}`, 'color: #008000')
//     }
//     if (counter >= 20 ) {
//       console.log('%c Eliminacion de intervalo desde componentDidUpdate', 'color: #008000')
//       clearInterval(this.countInterval)
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

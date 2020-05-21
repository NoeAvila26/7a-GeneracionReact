// import React, { Component } from "react";

// export default class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counterClick: 0
//     }
//     // this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick = () => { //se ocupa arrow funcion en vez del bind es por que la arrow function es global
//     console.log('me clickeo') = this.state
//     this.setState({
//       counterClick: counterClick + 1
//     })
//   }

//   handlerOver = () => {
//     const {counterOver} = this.state
//     this.setState({
//       counterOver: counterOver + 1
//     })
//   }

//   render() {
//     return(
//       <div>
//         {/* <p>llevas {this.state.counterClick} clicks!</p>
//         <button onClick={this.handleClick}>Click me</button> */}
//         <p onMouseOver={this.handlerOver}>estuvo sobre mi{this.state.counterOver}</p>
//       </div>
//     )
//   }
// }
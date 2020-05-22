import React, { Component } from "react";
import './ConditionalRendering.css'

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { isMenuActive } = this.state;
    this.setState({
      isMenuActive: !isMenuActive,
    });
  }

  render() {
    const { isMenuActive } = this.state;
    const menuClass = isMenuActive ? "activeMenu" : null;
    return (
      <div className="container">
        <hi>Conditional rendering</hi>
        <div className={`Menu ${menuClass}`}>
          <h2>test</h2>
        </div>
        <button onClick={this.toggleMenu} className="menu-button">
          Menu
        </button>
      </div>
    );
  }
}

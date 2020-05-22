import React from "react";

import './Header.css'

function Header({ title, description }) {
  return (
    <header>
      <hi>{title}</hi>
      <p>{description}</p>
    </header>
  );
}

export default Header;

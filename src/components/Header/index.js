import React from "react";

function Header({ title, description }) {
  return (
    <header>
      <hi>{title}</hi>
      <p>{description}</p>
    </header>
  );
}

export default Header;

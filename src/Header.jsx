import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h2>Counter App with React</h2>
      <h3>{props.name}</h3>
    </header>
  );
};

export default Header;

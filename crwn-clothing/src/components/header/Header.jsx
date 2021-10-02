import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./styles/header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <nav className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/" className="option">
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

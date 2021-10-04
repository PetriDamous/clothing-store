import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utilis";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./styles/header.styles.scss";

const Header = ({ currentUser }) => {
  console.log(currentUser);
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

        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign in
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

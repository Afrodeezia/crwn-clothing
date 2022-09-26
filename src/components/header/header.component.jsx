import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <nav className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div>
      <link className="option" to='/shop'>SHOP</link>
      <link className="option" to='/shop'>CONTACT</link>
    </div>
  </nav>
);

export default Header;
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import firebase from "../../firebase/firebase.utils";

import './header.styles.scss';

const Header = ({ setUser }) => {
  return (

    <nav className='header'>
      <Link className='logo-container' to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>

        {
          setUser ? 
          <div className="option" onClick={() => firebase.auth().signOut()}>SIGN OUT</div>
          :
          <Link className="option" path='/signIn'>SIGN IN</Link>
        }


      </div>
    </nav>
  );
}
export default Header;


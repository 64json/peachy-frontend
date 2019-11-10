import React from 'react';
import './stylesheet.scss';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

function Nav({ user }) {
  return (
    <div className="Nav">
      <Link className="logo" to="/">
        <img className="image" src={logo}/>
      </Link>
      <Link className="profile" to="/profile">
        <div className="picture" style={{ backgroundImage: `url(${user.picture})` }}/>
        <div className="name">{user.name}</div>
      </Link>
    </div>
  );
}

export default Nav;
